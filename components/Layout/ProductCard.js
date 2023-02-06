import React from "react";
import { useProducts } from "../../hooks/useProducts";

import { actionTypes } from "../../state/ProductState/actionTypes";

const ProductCard = ({ item }) => {
  // console.log(item);

  const { dispatch } = useProducts();

  const {
    title,
    image,
    price,
    category,
    description,
    rating: { rate },
  } = item;
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="card h-100 p-4 shadow">
        <div>
          <img
            className="w-100"
            style={{ height: "300px" }}
            src={image}
            alt=""
          />
        </div>
        <h6>{title}</h6>
        <p>{description.slice(0, 50)}</p>
        <p>Price: ${price}</p>
        <p>Rating: {rate}</p>

        <div className="d-flex justify-content-between">
          <button className="btn btn-primary">Buy</button>
          <button
            className="btn btn-primary"
            onClick={() =>
              dispatch({ type: actionTypes.ADD_TO_CART, payload: item })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
