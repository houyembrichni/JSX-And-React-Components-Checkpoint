import React from "react";
import { product } from "../product";
import { alignPropType } from "react-bootstrap/esm/types";
function Name() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}> {product.name}</h1>
    </div>
  );
}

export default Name;
