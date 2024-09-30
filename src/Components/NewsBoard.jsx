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
    <div className="container my-4">
      <h2 className="text-center mb-4">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {error ? (
        <p className="text-center text-danger">{error}</p>
      ) : (
        <div className="row">
          {article &&
            article.map((news, index) => {
              return (
                <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={index}>
                  <NewsItem
                    title={news.title}
                    description={news.description}
                    src={news.urlToImage}
                    url={news.url}
                  />
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default NewsBoard;
