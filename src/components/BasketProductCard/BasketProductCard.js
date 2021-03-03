import React, { useState, useEffect } from "react";
import xImage from "../../assets/x-img.png";
import headphones from "../../assets/headphones.png";
import edit from "../../assets/edit-img.png";
import { ProductCardWrapper, ProductCardTitles, ProductPropTitle, ProductCardValues } from "./BasketProductCardStyle";

function BasketProductCard(props) {
  const [howMany, setHowMany] = useState(1);

  return (
    <ProductCardWrapper>
      <ProductCardTitles>
        <ProductPropTitle>Product name</ProductPropTitle>
        <ProductPropTitle>Unit Price</ProductPropTitle>
        <ProductPropTitle>Qty</ProductPropTitle>
      </ProductCardTitles>
      <ProductCardValues>
        <img src={xImage} />
        <img src={headphones} />
        <h4>{props.name}</h4>
        <h4>{props.price}</h4>
        <input type="number" value={howMany} onChange={(e) => setHowMany(e.target.value)} />
        <img src={edit} />
      </ProductCardValues>
    </ProductCardWrapper>
  );
}
export default BasketProductCard;
