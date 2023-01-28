import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  justify-content: ${({ j }) => j || 'normal'};
  align-items: ${({ a }) => a || 'normal'};
  flex-direction: ${({ d }) => d || 'row'};
  gap: ${({ g }) => g || '0px'};
  flex-wrap: ${({ w }) => w || 'nowrap'};
`;
