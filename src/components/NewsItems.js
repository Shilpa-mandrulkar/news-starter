import React from 'react';

const NewsItems = (props) => {
  let { title, description, imageurl, urlId, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card justify-card" style={{ width: '18rem' }}>
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ left: '88%', zIndex: '1' }}
        >
          {source}
        </span>
        <img
          src={
            !imageurl
              ? 'http://www.membertou.ca/wp-content/uploads/2019/06/header-recent-news.png'
              : imageurl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title?.slice(0, 41)}...</h5>

          <p className="card-text">{description?.slice(0, 88)}...</p>
          <p className="card-text">
            <small class="text-muted">
              By {!author ? 'Unknown' : author} on{' '}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            // ref="noreferrer"
            href={urlId}
            target="_blank"
            className="btn btn-primary btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
