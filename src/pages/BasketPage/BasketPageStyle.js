import styled from "styled-components";

export const BasketPageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BasketButton = styled.button`
  border: none;

  background-color: black;

  color: white;
  padding: 2px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  cursor: pointer;
  outline: none;
  margin: 15px;
  height: 40px;
  &:hover {
    background-color: grey;
  }
`;

export const TitleBasketWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const TitleCard = styled.div`
  padding: 10px;
  color: gray;
`;
export const BasketInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: fit-content;
  max-width: 1000px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column-reverse;
  }
`;
export const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: fit-content;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 30%;
  height: 100%;
  @media (max-width: 768px) {
    width: 90%;
    justify-content: center;
    align-items: center;
  }
`;

export const BasketShipping = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background-color: #eeeeee;
  max-width: 400px;
  align-items: center;
  padding: 2px;
  border-color: gray;
  border-style: solid;
  border-width: thin;
  @media (max-width: 768px) {
    width: 300px;
  }
`;
export const BasketTotal = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  margin-top: 20px;
  border-color: gray;
  border-style: solid;
  border-width: thin;
  @media (max-width: 768px) {
    width: 300px;
  }
`;
