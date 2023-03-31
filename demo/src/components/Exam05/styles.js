import styled from "styled-components";
import { Button, Input } from "antd";

// styled(Component)
export const ButtonCreate = styled(Button)`
  display: block;
`;

export const SreachContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`;
export const SreachBox = styled(Input.Search)`
  width: 30%;
`;
