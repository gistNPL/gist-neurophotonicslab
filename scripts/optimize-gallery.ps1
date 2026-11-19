Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$repoRoot = Split-Path -Parent $PSScriptRoot
$encoderParams = $null
Push-Location $repoRoot

try {
    Add-Type -AssemblyName System.Drawing
    $manifest = node -e "global.window={}; require('./assets/js/gallery-data.js'); process.stdout.write(JSON.stringify(window.GALLERY_YEARS.flatMap(y=>y.events.flatMap(e=>e.photos.map(f=>({year:y.year,file:f}))))));"
    if ($LASTEXITCODE -ne 0) { throw 'Could not read gallery photo list.' }
    $photos = $manifest | ConvertFrom-Json
    $jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
        Where-Object { $_.MimeType -eq 'image/jpeg' } |
        Select-Object -First 1
    $encoderParams = [System.Drawing.Imaging.EncoderParameters]::new(1)
    $encoderParams.Param[0] = [System.Drawing.Imaging.EncoderParameter]::new(
        [System.Drawing.Imaging.Encoder]::Quality, [long]82)

    foreach ($photo in $photos) {
        $source = Join-Path $repoRoot "assets/img/gallery/$($photo.year)/$($photo.file)"
        if (-not (Test-Path -LiteralPath $source -PathType Leaf)) {
            throw "Gallery photo is missing: $source"
        }

        $thumbDir = Join-Path $repoRoot "assets/img/gallery/$($photo.year)/thumbs"
        [System.IO.Directory]::CreateDirectory($thumbDir) | Out-Null
        $target = Join-Path $thumbDir "$($photo.file).jpg"
        $sourceImage = [System.Drawing.Image]::FromFile($source)

        try {
            if ($sourceImage.PropertyIdList -contains 274) {
                $orientation = $sourceImage.GetPropertyItem(274).Value[0]
                $rotation = switch ($orientation) {
                    3 { [System.Drawing.RotateFlipType]::Rotate180FlipNone }
                    6 { [System.Drawing.RotateFlipType]::Rotate90FlipNone }
                    8 { [System.Drawing.RotateFlipType]::Rotate270FlipNone }
                    default { [System.Drawing.RotateFlipType]::RotateNoneFlipNone }
                }
                $sourceImage.RotateFlip($rotation)
            }

            $width = [Math]::Min(1600, $sourceImage.Width)
            $height = [Math]::Round($sourceImage.Height * $width / $sourceImage.Width)
            $thumb = [System.Drawing.Bitmap]::new($width, $height)

            try {
                $graphics = [System.Drawing.Graphics]::FromImage($thumb)
                try {
                    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
                    $graphics.DrawImage($sourceImage, 0, 0, $width, $height)
                } finally {
                    $graphics.Dispose()
                }
                $thumb.Save($target, $jpegCodec, $encoderParams)
            } finally {
                $thumb.Dispose()
            }
        } finally {
            $sourceImage.Dispose()
        }
    }

    Write-Output "Generated $($photos.Count) gallery thumbnails."
} finally {
    if ($null -ne $encoderParams) { $encoderParams.Dispose() }
    Pop-Location
}
