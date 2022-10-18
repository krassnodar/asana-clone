import { FC } from "react";
import {
  Wrapper,
  IconWrapper,
  NavbarLeftSide,
  NavbarCenter,
  NavbarRightSide,
  Text,
  SearchInput,
  UserAvatar,
} from "./header.style";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";

import { useAppDispatch } from "../../../hooks/redux";
import { uiSlice } from "../../../store/reducers/uiReducer";
import { useAppSelector } from "../../../hooks/redux";

const StyledIcon = () => {
  const { isSidebarShown } = useAppSelector((state) => state.uiReducer);
  const dispatch = useAppDispatch();
  const { toggleSidebar } = uiSlice.actions;

  const toggleSidebarHandler = () => {
    dispatch(toggleSidebar(!isSidebarShown));
  };

  return (
    <IconContext.Provider value={{ color: "f5f4f3", size: "20px" }}>
      <IconWrapper onClick={toggleSidebarHandler}>
        <GiHamburgerMenu />
      </IconWrapper>
    </IconContext.Provider>
  );
};

const Header: FC = () => {
  return (
    <Wrapper>
      <NavbarLeftSide>
        {/* <IconWrapper>
          <GiHamburgerMenu color="#f5f4f3" />
        </IconWrapper> */}
        <StyledIcon />
        <Text>ASANA</Text>
      </NavbarLeftSide>
      <NavbarCenter>
        <SearchInput placeholder="Search" />
      </NavbarCenter>
      <NavbarRightSide>
        <UserAvatar></UserAvatar>
      </NavbarRightSide>
    </Wrapper>
  );
};

export default Header;
