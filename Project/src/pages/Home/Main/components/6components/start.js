import styled from 'styled-components';
import {FooterText} from '../../../../styles/common'
import FivePage from '../5components/layout';

const StartBox = () => {
  return(
    <>
    <FivePage/>
    <StartContainer>
      <StartBoxText>지금 바로 박스인 을 시작하세요.</StartBoxText>
      <StartInnerText>언제, 어디서나, 쉽고, 편한 재고관리</StartInnerText>      
    </StartContainer>
    </>
  )
};
export default StartBox;

const StartContainer = styled.div`
  width:1536px;
  height: 280px;
  display: flex;
  background-color: #292a2f;
  position: absolute;
  top: 3250px;
`
const StartBoxText = styled.div`
  ${FooterText}
  left: 530px;
  font-size: 25px;
  margin-top: 80px;
  font-weight: 800;
`
const StartInnerText = styled.div`
  ${FooterText}
  font-size: 16px;
  font-weight: 800;
  color: #DFD3C3;
  display: flex;
  position: relative;
  top: 150px;
  left: 570px;
  align-items: center;
`