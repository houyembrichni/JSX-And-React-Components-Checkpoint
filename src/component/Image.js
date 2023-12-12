import React from "react";
import { product } from "../product";
function Image() {
  return (
    <div>
      <img
        src={product.image}
        style={{
          width: "477px",
          height: "auto",
          justifyContent: "center",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      />
    </div>
  );
}

export default Image;
