
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";


const NewsBoard = ({ category }) => {
  const [article, setArticle] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.articles) {
          setArticle(data.articles);
        } else {
          setError("Failed to fetch articles");
        }
      })
      .catch((error) => setError(error.message));
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {error ? (
        <p>{error}</p>
      ) : (
        article && article.map((news, index) => {
          return (
            <NewsItem 
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          );
        })
      )}
    </div>
  );
};

export default NewsBoard;