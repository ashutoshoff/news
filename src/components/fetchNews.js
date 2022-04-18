import axios from "axios";
import React, { useEffect, useState } from "react";
import { getNews } from "../actions/news";

function FetchNews() {
  const [news, setNews] = useState([]);

  // useEffect(() => {
  //   _getNews();
  // }, []);

  const _getNews = () =>
    getNews().then((data) => {
      setNews(data.articles);
    });

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-4 mt-5">
            <button className="btn btn-success" onClick={_getNews}>
              Fetch
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {news.map((value) => {
            return (
              <div className="col-4" key={value.title}>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={value.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                    <a href="#" className="btn btn-primary">
                      {value.url}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FetchNews;
