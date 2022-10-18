import { FC } from "react";
import { Wrapper } from "./board.style";
import ColumnList from "./ColumnList/ColumnList";

const Board: FC = () => {
  return (
    <Wrapper>
      <ColumnList />
    </Wrapper>
  );
};

export default Board;
