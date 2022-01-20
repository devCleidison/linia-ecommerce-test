import "./style.scss";

import Heart from "../../assets/images/heart-outline-icon.webp";
import { useState, useEffect } from "react";

export function CardProduct({ data }) {
  const [price, setPrice] = useState(Number);

  useEffect(() => {
    setPrice(data.price.toFixed(2).replace(".", ","));
  }, []);

  const isDiscount = () => {
    if (data.discount === true) {
      return (
        <div className="dicount-container">
          <span>-36%</span>
        </div>
      )
    }
  };

  return (
    <div className="product">
      <div
        className="card-product-img"
        style={{ backgroundImage: `url(${data.image})` }}
      >
        {isDiscount()}
        <div className="card-favorite-container">
          <button className="card-favorite">
            <img src={Heart} />
          </button>

          <a href="#" className="logic">
            LOGIC
          </a>
        </div>
      </div>

      <div className="card-product-description">
        <p className="seller">
          <em>Vendedor: {data.seller}</em>
        </p>
        <span className="description">
          <strong>{data.name}</strong>
        </span>
        <p className="price">
          R$ <span>{price}</span>
        </p>
      </div>
    </div>
  );
}
