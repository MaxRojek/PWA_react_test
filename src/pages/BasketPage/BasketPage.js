import React, { useState, useEffect, lazy, Suspense } from "react";
import BasketProductCard from "../../components/BasketProductCard/BasketProductCard";
import {
  BasketButton,
  BasketPageWrapper,
  TitleBasketWrapper,
  TitleCard,
  BasketInfoWrapper,
  PriceWrapper,
  ProductsWrapper,
  BasketShipping,
  BasketTotal,
} from "./BasketPageStyle";
function BasketPage() {
  return (
    <BasketPageWrapper>
      <TitleBasketWrapper>
        <TitleCard>Shoping Card</TitleCard>
        <BasketButton>Procede to checkout</BasketButton>
      </TitleBasketWrapper>
      <BasketInfoWrapper>
        <ProductsWrapper>
          <BasketProductCard name="Headphones" price={12} />
        </ProductsWrapper>
        <PriceWrapper>
          <BasketShipping>
            <h4>Shipping</h4>
            <div>$</div>
          </BasketShipping>
          <BasketTotal>
            <BasketShipping>Cart totals</BasketShipping>
            <BasketShipping>Subtotal</BasketShipping>
            <BasketShipping>Grand total</BasketShipping>
            <BasketButton>Procede to checkout</BasketButton>
          </BasketTotal>
        </PriceWrapper>
      </BasketInfoWrapper>
    </BasketPageWrapper>
  );
}
export default BasketPage;
