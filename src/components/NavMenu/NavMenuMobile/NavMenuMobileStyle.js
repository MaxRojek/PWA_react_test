import styled from "styled-components";

export const MenuWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  background-color: #eeeeee;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  justify-content: space-evenly;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
export const BottomNavButton = styled.div`
  display: flex;
  flex: 1;
  height: 70px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 3.7vw;
  font-weight: 500;
  cursor: pointer;
  color: black;

  &:hover {
    background-color: white;
  }
`;
