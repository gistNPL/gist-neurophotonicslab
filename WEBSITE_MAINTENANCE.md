# Website updates

The site maintainer handles the checks below.

- When the lab receives an award, presents at a conference, or publishes a paper, add a News item in `assets/js/news.js`. Add new papers to `publication/index.html`.
- Once each semester, review the current Member roster, alumni moves, published email addresses, and the Contact page's room numbers and phone numbers. Confirm personal Gmail addresses with their owners before changing their visibility.
- After adding gallery photos to `assets/js/gallery-data.js`, run `powershell -NoProfile -ExecutionPolicy Bypass -File ./scripts/optimize-gallery.ps1`. Gallery cards use the generated previews and open the original photos when clicked.
- Run `node scripts/check-assets.js` before publishing to find missing local image and script paths.
