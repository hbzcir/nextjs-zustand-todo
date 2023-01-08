import styled from 'styled-components';

/**
 * placeholder : strng
 * value : string
 * disabled : boolean
 * @returns 
 */
function FormText(){
return <>
  <InputText type="text" />
</>
}
export default FormText;

const InputText = styled.input`
  width: 100%;
  height: 36px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding: 10px 16px 9px;
  border: 1px solid var(--border);
  border-radius: 4px;
  outline: transparent;
`