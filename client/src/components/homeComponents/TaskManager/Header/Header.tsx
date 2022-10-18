import { FC } from "react";
import {
  Wrapper,
  HeaderLeft,
  HeaderRight,
  Avatar,
  HeaderOptions,
  HeaderOptionsTop,
  HeaderOptionsBottom,
  HeaderOptionsBottomItem,
  Text,
  CustomizeButton,
} from "./header.style";

const Header: FC = () => {
  return (
    <Wrapper>
      <HeaderLeft>
        <Avatar></Avatar>
        <HeaderOptions>
          <HeaderOptionsTop>
            <Text>My Tasks</Text>
          </HeaderOptionsTop>
          <HeaderOptionsBottom>
            <HeaderOptionsBottomItem>List</HeaderOptionsBottomItem>
            <HeaderOptionsBottomItem>Board</HeaderOptionsBottomItem>
            <HeaderOptionsBottomItem>Calendar</HeaderOptionsBottomItem>
            <HeaderOptionsBottomItem>Files</HeaderOptionsBottomItem>
          </HeaderOptionsBottom>
        </HeaderOptions>
      </HeaderLeft>
      <HeaderRight>
        <CustomizeButton>Customize</CustomizeButton>
      </HeaderRight>
    </Wrapper>
  );
};

export default Header;
