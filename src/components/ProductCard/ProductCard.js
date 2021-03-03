import React, { useState, useEffect } from "react";

import { CardWrapper } from "./ProductCardStyle";

function ProductCard(props) {
  return <CardWrapper>{props.name}</CardWrapper>;
}
export default ProductCard;
