import React from "react";

export default function NewsItem(props) {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="card h-100">
      <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: 0 }}>
        <span className="badge rounded-pill bg-danger"> {source} </span>
      </div>
      <div className="ratio ratio-16x9">
        <img src={imageUrl ? imageUrl : "https://t3.ftcdn.net/jpg/01/60/93/48/360_F_160934872_YirotJsETnOj10xeheqUZQHT3W65hlp5.jpg"} className="card-img-top embed-responsive-item" alt="..." style={{objectFit: "cover"}}/>
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title.slice(0, 65)}...</h5>
        <p className="card-text">{description.length===0?"":description.slice(0, 200) + "..."}</p>
        <div className="mt-auto">
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toLocaleDateString()} at {new Date(date).toLocaleTimeString()}
            </small>
          </p>
          <a rel="noopener noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
