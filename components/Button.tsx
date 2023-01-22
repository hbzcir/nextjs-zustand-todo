import { MouseEvent, ReactNode } from 'react';
import styled from 'styled-components';

const Button = (props: {
  onClick: (e: MouseEvent) => void;
  children: ReactNode;
}) => {
  return <StyleButton onClick={props.onClick}>{props.children}</StyleButton>;
};

const StyleButton = styled.button`
  width: 100%;
  height: 36px;
  color: var(--white);
  border: 0;

  border-radius: var(--b-radius);
  background: var(--positive);
`;

export default Button;
