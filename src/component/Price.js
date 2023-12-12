import React from "react";
import { product } from "../product";
function Price() {
  return (
    <div>
      <span style={{ fontWeight: "bold", color: "red"}}>
        {" "}
        Price :{product.price}£
      </span>
    </div>
  );
}

export default Price;
