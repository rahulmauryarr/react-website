import React from 'react'

export default function LatestnewList(props) {
  return (
    <div className="card news-card my-3">
        <img src={props.imgUrl} className="card-img-top" alt="img" />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.desp}</p>
            <a href={props.newsUrl} className="btn btn-dark">Know More &rarr;</a>
        </div>
    </div>
  )
}
