import { FC } from "react";
import Column from "../Column/Column";
import { Wrapper } from "./columnList.style";

const columns = ["column1", "column2", "column3", "column4"];

const ColumnList: FC = () => {
  return (
    <Wrapper>
      {columns.map((item, index) => {
        return <Column key={index} title={item} />;
      })}
    </Wrapper>
  );
};

export default ColumnList;
