import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  background: #fff;
  display: flex;
  min-height: 72px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderRight = styled.div``;

export const Avatar = styled.div`
  background-color: #fc979a;
  color: #1e1f21;
  align-items: center;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 7%);
  color-adjust: exact;
  display: flex;
  justify-content: center;
  font-size: 16px;
  height: 48px;
  line-height: 48px;
  min-width: 48px;
  width: 48px;
  margin-right: 16px;
`;

export const HeaderOptions = styled.div``;

export const HeaderOptionsTop = styled.div``;

export const HeaderOptionsBottom = styled.ul`
  list-style: none;
  align-items: flex-end;
  display: flex;
  margin-top: 10px;
`;

export const HeaderOptionsBottomItem = styled.li`
  font-size: 14px;
  padding-bottom: 10px;
  margin-right: 20px;
`;

export const Text = styled.div``;

export const CustomizeButton = styled.div`
  cursor: pointer;
  font-size: 12px;
  height: 28px;
  line-height: 28px;
  padding: 0 8px;
  background: #fff;
  border-color: #cfcbcb;
  color: #1e1f21;
  align-items: center;
  border: 1px solid;
  border-radius: 6px;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  transition-duration: 0.2s;
  transition-property: background, border, color, fill;
`;
