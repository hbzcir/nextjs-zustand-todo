import styled from 'styled-components';
function Add (){
return <>
  <Button>Add Todo</Button>
</>
};

export default Add;
const Button = styled.button`
  width: 100%;
  height: 36px;
  color: val(--white);
  border: 0;
  border-radius: val(--b-radius);
  background: (--placeholder);
`