import React from "react";
import { useProducts } from "../provider/ProductProvider";
import { actionTypes } from "../state/ProductState/actionTypes";

const CartItem = ({ item, index }) => {
  const { title, image } = item
 const {dispatch} = useProducts()
  return (
    <tr>
      <td>{index + 1}</td>
      <td className="text-center">
        <img src={image} style={{ height: "100px", width: "100px" }} alt="" />
      </td>
      <td>{title}</td>
      <td>@mdo</td>
      <td>
        <div>
          <div className="d-flex justify-content-around align-items-center">
            <button className="btn btn-primary btn-sm" disabled>
              Buy
            </button>
            <button onClick={()=> dispatch({type: actionTypes.REMOVE_FROM_CART, payload: item})} className="btn btn-danger btn-sm">Remove</button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
