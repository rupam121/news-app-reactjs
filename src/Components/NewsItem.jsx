import image from '../assets/images-news.jpeg';
import React from "react";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      
      className=" item-responsive11 card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 "
      style={{
        maxWidth: "345px",
        display: "flex",
        flexDirection: "column",

      }}
    >
      <img
        src={src?src: image}
        style={{
          height: "200px",
          width: "100%", 
          objectFit: "cover",
        }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : "More about this topic.."}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
