import React, { useState, useEffect } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const fetchNews = async (page = 1) => {
    try {
      props.setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=36240556d6164d309cdc6f53ce221455&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true);
      const response = await fetch(url);
      const parsedData = await response.json();
      setArticles(parsedData.articles || []);
      setTotalResults(parsedData.totalResults || 0);
      setPage(page);
      setLoading(false);
      props.setProgress(100);
    } catch (error) {
      console.error('Error fetching news:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []); // Empty dependency array means this useEffect runs once on component mount

  const handlePrevClick = async () => {
    if (page > 1) {
      fetchNews(page - 1);
    }
  };

  const handleNextClick = async () => {
    if (page + 1 <= Math.ceil(totalResults / props.pageSize)) {
      fetchNews(page + 1);
    }
  };

  return (
    <div className="container my-3">
      <h1 className="text-center">Top Headlines - {props.category}</h1>
      {loading && <Spinner />}
      <div className='row'>
        {!loading && articles && articles.map((element) => (
          <div className="col-md-4 mb-3" key={element.url}>
            <Newsitem
              imageUrl={element.urlToImage}
              title={element.title ? element.title.slice(0, 45) : "No title available"}
              desc={element.description ? element.description.slice(0, 88) : "No description available"}
              newsUrl={element.url}
              author={element.author}
              date={element.publishedAt}
            />
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-between">
        <button
        
          disabled={page <= 1}
          type="button"
          className="btn btn-dark"
          onClick={handlePrevClick}
        >
          &larr; Previous
        </button>
        <button
          disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
          type="button"
          className="btn btn-dark"
          onClick={handleNextClick}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default News;
