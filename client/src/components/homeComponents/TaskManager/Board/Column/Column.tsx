import { FC } from "react";
import {
  Wrapper,
  ColumnOptions,
  Text,
  OptionsWrapper,
  IconWrapper,
} from "./column.style";
import { BsThreeDots, BsPlusLg } from "react-icons/bs";

interface IColumn {
  title: string;
}

const Column: FC<IColumn> = ({ title }) => {
  return (
    <Wrapper>
      <ColumnOptions>
        <Text>{title}</Text>
        <OptionsWrapper>
          <IconWrapper>
            <BsPlusLg />
          </IconWrapper>
          <IconWrapper>
            <BsThreeDots />
          </IconWrapper>
        </OptionsWrapper>
      </ColumnOptions>
    </Wrapper>
  );
};

export default Column;
