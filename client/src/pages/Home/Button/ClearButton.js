import styled from 'styled-components';

const Clear = () => {
  alert('클릭되었습니다.')
}



 const ClearButton = () => {
   return(
     <>
     <ClearButtonBox>
       <InputButton onClick={Clear}>입력 완료</InputButton>  
     </ClearButtonBox>
     </>
   )
 };
 export default ClearButton;

const ClearButtonBox = styled.div`
  width: 84px;
  height: 35px;
  position:absolute;
  top: 577px; 
  left: 1px;
`
const InputButton = styled.button`
  position: relative;
  z-index: 10;
  background-color: #4f67ff;
  color: white;
  border: solid 1px #4f67ff;
  width: 75px;
  height: 30px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 600;
  padding: 6px;
`