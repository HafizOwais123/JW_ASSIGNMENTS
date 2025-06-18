const showData = document.getElementById("showData");
const input = document.getElementById("inputData");

const API_KEY = "861016afc7cb488b9a96c420184b21e1";

const getNews = async () => {
  const query = input.value.trim() || "Apple";
  //const url = `https://newsapi.org/v2/everything?q=${query}&from=2025-06-18&sortBy=popularity&apiKey=${API_KEY}`;
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;


  showData.innerHTML = "<p>Loading...</p>";

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.articles && data.articles.length > 0) {
      showData.innerHTML = "";
      data.articles.forEach(article => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
          <img src="${article.urlToImage || 'https://via.placeholder.com/300'}" alt="news image">
          <div class="card-body">
            <h3>${article.title}</h3>
            <p>${article.description || "No description available."}</p>
            <a href="${article.url}" target="_blank">Read More</a>
          </div>
        `;
        showData.appendChild(card);
      });
    } else {
      showData.innerHTML = "<p>No news articles found.</p>";
    }

  } catch (error) {
    console.error("Error fetching news:", error);
    showData.innerHTML = "<p>Error loading data.</p>";
  }
};
