import { FC } from "react";
import {
  Wrapper,
  IconWrapper,
  SidebarNav,
  SidebarNavItem,
  CreateButtonWrapper,
} from "./sidebar.style";
import { BsPlusLg } from "react-icons/bs";
import { BiHome } from "react-icons/bi";
import { MdTaskAlt } from "react-icons/md";
import { GrNotification } from "react-icons/gr";
import { useAppSelector } from "../../../hooks/redux";

const Sidebar: FC = () => {
  const { isSidebarShown } = useAppSelector((state) => state.uiReducer);
  return (
    <Wrapper active={isSidebarShown ? true : false}>
      <CreateButtonWrapper>
        <IconWrapper>
          <BsPlusLg color="#f5f4f3" />
        </IconWrapper>
        <span>Create</span>
      </CreateButtonWrapper>
      <SidebarNav>
        <SidebarNavItem>
          <IconWrapper>
            <BiHome color="#f5f4f3" width={"20px"} height={"20px"} />
          </IconWrapper>
          Home
        </SidebarNavItem>
        <SidebarNavItem>
          <IconWrapper>
            <MdTaskAlt color="#f5f4f3" width={20} height={20} />
          </IconWrapper>
          My Tasks
        </SidebarNavItem>
        <SidebarNavItem>
          <IconWrapper>
            <GrNotification color="#f5f4f3" width={20} height={20} />
          </IconWrapper>
          Inbox
        </SidebarNavItem>
      </SidebarNav>
    </Wrapper>
  );
};

export default Sidebar;
