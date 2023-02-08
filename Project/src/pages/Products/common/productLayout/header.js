
import styled, { css } from 'styled-components';
  const ProductHeader = () => {
    return(
    <>
      <InputContainer color='blue'>
      </InputContainer>
    </>
  )
};
export default ProductHeader;

const InputContainer = styled.div`
  width: 1050px;
  height: 50px;
  background-color: white;
  //border-bottom: solid 3px #50a4fa;
  position: absolute;
  z-index: 10;
  top: 120px;
  left: 320px;
  border-bottom: solid 3px  ${props => props.color||'red'};
  color: #50a4fa;
`;

