import styled from "styled-components/macro";

export const Wrapper = styled.div`
  height: 54px;
  background-color: #252628;
  display: flex;
  border-bottom: 1px solid #424244;
  align-items: center;
  justify-content: space-between;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  min-height: 28px;
  min-width: 28px;
  width: 28px;
  margin-right: 12px;
  border-radius: 6px;

  background: transparent;
  border-color: transparent;
  fill: #f5f4f3;

  justify-content: center;
  transition-duration: 0.2s;
  transition-property: background, border, fill;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: transparent;
    fill: #f5f4f3;
    cursor: pointer;
  }
`;

export const NavbarLeftSide = styled.div`
  display: flex;
  padding-left: 20px;
  align-items: center;
`;

export const NavbarCenter = styled.div``;

export const NavbarRightSide = styled.div`
  margin-right: 24px;
`;

export const Text = styled.div`
  color: #ffffff;
`;

export const SearchInput = styled.input`
  background-color: #424244;
  border-color: #424244;
  color: #f5f4f3;
  border-radius: 16px;
  border-style: solid;
  border-width: 1px;
  height: 32px;
  width: 480px;
`;

export const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 7%);
  background-color: #fc979a;
  height: 28px;
  min-height: 28px;
  min-width: 28px;
  width: 28px;
`;
