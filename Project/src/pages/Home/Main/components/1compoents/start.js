import styled from 'styled-components';
import InnerImg from './media';

const MainStart = () => {
  return(
    <Box>
    <FirstTextBox>
      <InnerText>실무자가 뽑은 1등 재고 관리앱</InnerText>
      <InnerText2>쉽고, 빠르고, 정확한 재고관리 시작해보세요!</InnerText2>
        <InnerImg/>
    </FirstTextBox>
    </Box>
  )
};
export default MainStart;


const Box = styled.div`
  width: 1536px;
  height: 750px;
  background-color:aliceblue;
  display: flex;
  position: absolute;
`

const FirstTextBox = styled.div`
  width: 600px;
  height: 100px;
  //background-color: red;
  position: absolute;
  top: 140px;
  left: 430px;
  //z-index: 300;
`

const InnerText = styled.div`
  width: 280px;
  height: 20px;
  //background-color: antiquewhite;
  font-size: 20px;
  margin-left: 150px;
  font-weight: 400;
  color: gray;
`
const InnerText2 = styled.div`
  width: 620px;
  height: 30px;
  //background-color: antiquewhite;
  margin-top: 30px;
  font-size: 30px;
  font-weight: 800;
`
