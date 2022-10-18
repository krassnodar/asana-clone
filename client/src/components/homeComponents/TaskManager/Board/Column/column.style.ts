import styled from "styled-components";

export const Wrapper = styled.li`
  /* flex-direction: column; */
  min-height: 100%;
  max-width: 304px;
  padding: 0 12px;
  width: 304px;
  border-radius: 6px;
  /* display: flex; */
  /* flex-direction: column; */
  transition: box-shadow 250ms;
  border: 1px solid black;
`;

export const ColumnOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
`;

export const Text = styled.div``;

export const OptionsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
`;
