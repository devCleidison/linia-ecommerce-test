import "./style.scss";

import AddCart from "../../assets/images/add-cart-icon.webp";
import Heart from "../../assets/images/heart-outline-icon.webp";
import { useState, useEffect } from "react";

export function PrincipalCardProduct({ data }) {

  const [price, setPrice] = useState(Number)

  useEffect(() => {
    setPrice(data.price.toFixed(2).replace('.', ','))
  }, [])

  return (
    <>
      <div className="principal-product-img" style={{ backgroundImage: `url(${data.image})` }}>
        <a href="#" className="add-cart">
          <img src={AddCart} />
        </a>

        <div className="product-favorite-container">
          <button className="product-favorite">
            <img src={Heart} />
          </button>

          <a href="#" className="logic">
            LOGIC
          </a>
        </div>
      </div>

      <div className="principal-product-description">
        <p className="seller">
          <em>Vendedor: {data.seller}</em>
        </p>
        <span className="description">
          <strong>{data.name}</strong>
        </span>
        <p className="price">R$ <span>{price}</span></p>
      </div>
    </>
  );
}
