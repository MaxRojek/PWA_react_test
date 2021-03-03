import styled from "styled-components";

export const ProductsWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 100px;
  }
`;
