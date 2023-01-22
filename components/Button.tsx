import styled from 'styled-components';

const Button = (props: any) => {
  return (<StyleButton>{props.children}</StyleButton>)
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


