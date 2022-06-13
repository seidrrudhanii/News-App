const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9b1d192cebmsha788e00b760688ap1eeef3jsnbb3c29729622",
      "X-RapidAPI-Host": "free-news.p.rapidapi.com"
    }
  };
  
  const api = `https://free-news.p.rapidapi.com/v1/search?q=Elon%20Musk&lang=en&page=1`;
  
  (async function () {
    // VanillaJS here
    fetch(api, options)
      .then((response) => response.json())
      .then((response) => {
        showNews(response.articles);
      })
      .catch((err) => console.error(err));
  })();
  function showNews(articles) {
    for (let i = 0; i < articles.length; i++) {
      console.log(i);
    }
    articles.forEach((article) => {
      var card = `<div class="card">
       <img class="card-image" src="${article.media}" alt="Avatar">
      <div class="container">
         <h2 class="tittle"><b>${article.title}</b></h2>
         <p class="text">${article.summary}</p>
        <div id="block_container">
          <div id="bloc1">${article.published_date}</div>  
          <div id="bloc2">${article.rank} | ${article.topic}</div>
        </div>
     </div>`;
      document.getElementById("news-container-id").innerHTML += card;
    });
  }
  