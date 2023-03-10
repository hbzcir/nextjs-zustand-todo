import styled from 'styled-components';
const StyleInput = styled.input`
  width: 100%;
  height: 36px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding: 10px 16px 9px;
  border: 1px solid var(--border);
  border-radius: 4px;
  outline: transparent;
`;
const Input = (props) => {
  return (
    <StyleInput type="text" value={props.value} onChange={props.onChange} />
  );
};
export default Input;
