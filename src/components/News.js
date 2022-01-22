import React, { useState, useEffect } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const [articles, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async (pageNo) => {
    props.setProgress(10);
    const url = `https://newsapinodejs.herokuapp.com/news-api?country=${props.country}&category=${props.category}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setLoading(true);
    setArticle(parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults);

    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - Global News`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - Global News`;
    updateNews();
    // eslint-disable-next-line
  }, [props.country]);

  const fetchMoreData = async () => {
    const url = `https://newsapinodejs.herokuapp.com/news-api?country=${
      props.country
    }&category=${props.category}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticle(parsedData.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <div className="container">
        <h2 className="text-center" style={{ margin: '70px' }}>
          Global News -Top {props.category} Headlines
        </h2>
        {articles.length == 0 && !loading && (
          <h2 className="text-center" style={{ margin: '70px' }}>
            Sorry We do not have any news in this specific section. Please try
            in different domain or general categories !!!
          </h2>
        )}
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles?.length}
          next={fetchMoreData}
          hasMore={articles?.length !== totalResults}
        >
          <div className="my-3">
            <div className="row mx-2">
              {articles?.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItems
                      title={element.title}
                      description={element.description}
                      imageurl={element.urlToImage}
                      urlId={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

News.defaultProps = {
  pageSize: 8,
  country: 'in',
  category: 'General',
};
News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
};

export default News;
