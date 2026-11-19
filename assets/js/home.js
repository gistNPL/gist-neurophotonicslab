(function () {
  const newsList = document.getElementById("home-news-list");
  const news = window.NEWS_HELPERS;
  if (!newsList || !news) return;

  const items = news.sortedDesc().slice(0, 3);
  for (const item of items) {
    const row = document.createElement("li");
    const date = document.createElement("time");
    const link = document.createElement("a");

    date.dateTime = item.date;
    date.textContent = news.formatDate(item.date);
    link.href = news.detailUrl(item.id);
    link.textContent = item.title;

    row.append(date, link);
    newsList.append(row);
  }

  newsList.hidden = items.length === 0;
})();
