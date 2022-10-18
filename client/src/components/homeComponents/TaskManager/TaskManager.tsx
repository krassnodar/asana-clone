import { FC } from "react";
import { Wrapper } from "./taskManager.style";
import Header from "./Header/Header";
import Options from "./Options/Options";
import Board from "./Board/Board";

const TaskManager: FC = () => {
  return (
    <Wrapper>
      <Header />
      <Options />
      <Board />
    </Wrapper>
  );
};

export default TaskManager;
