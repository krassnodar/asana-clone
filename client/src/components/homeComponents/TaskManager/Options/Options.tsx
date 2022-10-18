import { FC } from "react";
import {
  Wrapper,
  OptionsLeft,
  OptionsRight,
  Option,
  IconWrapper,
} from "./options.style";
import { BsArrowsExpand } from "react-icons/bs";
import { MdTaskAlt } from "react-icons/md";

const Options: FC = () => {
  return (
    <Wrapper>
      <OptionsLeft>Last task completed on Wednesday</OptionsLeft>
      <OptionsRight>
        <Option>
          <IconWrapper>
            <MdTaskAlt />
          </IconWrapper>
          Incomplete tasks
        </Option>
        <Option>
          <IconWrapper>
            <BsArrowsExpand />
          </IconWrapper>
          Sort
        </Option>
      </OptionsRight>
    </Wrapper>
  );
};

export default Options;
