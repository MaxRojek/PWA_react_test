import styled from "styled-components";

export const ProductCardWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  height: 300px;
  flex-direction: column;
  background: #fff;
  border-radius: 2px;
  margin: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 100px;
    max-width: 90%;
  }
`;
export const ProductCardTitles = styled.div`
  display: flex;
  width: 100%;

  height: 70px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ProductPropTitle = styled.div`
  color: gray;
  padding: 10px;
`;
export const ProductCardValues = styled.div`
  display: flex;
  width: 100%;

  height: 200px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
