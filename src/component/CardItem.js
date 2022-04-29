import React from "react";
import { Link } from "react-router-dom";

const CardItem = ({ src, text, label, path }) => {
  return (
    <>
      <li className="card-item">
        <Link className="card-item-link" to={path}>
          <figure className="card-item-pic-wrap" data-category={label}>
            <img src={src} alt="Travel" className="card-item-img" />
          </figure>
          <div className="card-item-info">
            <h5 className="card-item-text">{text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
};

export default CardItem;
