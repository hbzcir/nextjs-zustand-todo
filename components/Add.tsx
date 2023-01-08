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
  color: var(--white);
  border: 0;
  border-radius: var(--b-radius);
  background: (--placeholder);
`