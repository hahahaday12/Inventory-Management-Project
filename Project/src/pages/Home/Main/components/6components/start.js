import { StartContainer } from '../../../../styleComponents/MainPageComponents/MainStyleDetail';
import { fontsize, fontWeight } from '../../../../styles/theme';
import {FooterText, CommonLayoutAll} from '../../../../styles/common'
import styled from 'styled-components';
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

const StartBoxText = styled.div`
  left: 530px;
  margin-top: 80px;
  ${FooterText}
  font-size: ${fontsize[4]};
  font-weight: ${fontWeight[1]};

  @media screen and (min-width: 1536px) {
    margin-left: 200px;
    }
`
const StartInnerText = styled.div`
  ${FooterText}
  top: 150px;
  left: 570px;
  color: #DFD3C3;
  align-items: center;
  ${CommonLayoutAll}
  font-size: ${fontsize[2]};
  font-weight: ${fontWeight[3]};

  @media screen and (min-width: 1536px) {
    margin-left: 200px;
    }
`