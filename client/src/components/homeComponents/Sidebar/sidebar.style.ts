import styled from "styled-components/macro";

interface ISidebarProps {
  active: boolean;
}

export const Wrapper = styled.div<ISidebarProps>`
  display: flex;
  flex-direction: column;
  transition: margin-left 250ms ease-out, transform 250ms ease-out;
  width: 240px;
  font-size: 14px;
  height: calc(100vh - 55px);
  background-color: #1e1f21;
  color: #f5f4f3;
  margin-left: ${(props) => (props.active ? "0" : "-240px")};
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  min-height: 28px;
  min-width: 28px;
  width: 28px;
  margin-right: 20px;
`;

export const SidebarNav = styled.ul`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
`;

export const SidebarNavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0 24px 0 24px;
`;

export const CreateButtonWrapper = styled.div`
  padding: 0 8px;
  font-size: 14px;
  height: 36px;
  line-height: 36px;
  background: none;
  border-color: #424244;
  color: #f5f4f3;
  border: 1px solid;
  margin: 16px 24px 8px 15px;
  align-items: center;
  border-radius: 24px;
  width: 100px;
  display: flex;
`;
