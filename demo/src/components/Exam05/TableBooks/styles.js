import styled from "styled-components";
import { Button } from "antd";

// styled.[name]
export const Actions = styled.div`
  button {
    margin-right: 8px;
  }
`;

export const ButtonAction = styled(Button)`
  color: #000000;
  background-color: #f8b195;
  border-color: #f8b195;

  &:hover {
    color: #000000 !important;
    background-color: #f5956f;
    border-color: #f5956f !important;
  }

  &:active,
  &:focus {
    color: #000000  !important;
    background-color: #f4875d;
    border-color: #f4875d  !important;
  }
`;
