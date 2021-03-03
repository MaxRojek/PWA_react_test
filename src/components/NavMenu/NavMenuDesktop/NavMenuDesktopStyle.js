import styled from "styled-components";

export const MenuWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  background-color: #eeeeee;
  flex-direction: row;
  position: fixed;
  top: 0;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
export const NavDesktopButton = styled.div`
  display: flex;
  flex: 1;
  height: 80px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
  color: black;
  max-width: 200px;

  &:hover {
    background-color: white;
  }
`;
