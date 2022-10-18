import { FC } from "react";
import Header from "../../components/homeComponents/Header/Header";
import { Wrapper } from "./home.style";
import TaskManager from "../../components/homeComponents/TaskManager/TaskManager";
import styled from "styled-components";
import Sidebar from "../../components/homeComponents/Sidebar/Sidebar";

const WrapperInner = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
`;

const Home: FC = () => {
  return (
    <Wrapper>
      <Header />
      <WrapperInner>
        <Sidebar />
        <TaskManager />
      </WrapperInner>
    </Wrapper>
  );
};

export default Home;
