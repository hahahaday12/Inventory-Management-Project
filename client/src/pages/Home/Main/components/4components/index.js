import { TextContainer } from '../../../../styleComponents/MainPageComponents/MainStyleDetail';
import { fontsize, fontWeight } from '../../../../styles/theme';
import {CommonLayout3, InnerText3} from '../../../../../styles/common'
import styled from 'styled-components';
import TryJoin from './button/button';
import ThirdPage from '../3components/layout';

const FourPage = () => {
  return(
    <>
    <ThirdPage/>
    <TextContainer>
      <TextInerBox><p1>실무자가 뽑은 1등 재고관리 앱</p1></TextInerBox>
      <InnerTextBox2><p2>재고관리, 이보다 편할수 없어요.</p2></InnerTextBox2>
        <TryJoin/>
    </TextContainer>
    </>
  )
};
export default FourPage;

const TextInerBox = styled.div`
  ${CommonLayout3}
  top: 60px;
  left: 320px;

  & p1{
      ${InnerText3}
  }
`
const InnerTextBox2 = styled.div`
  width: 500px;
  height: 60px;
  display: flex;
  top: 180px;
  right: 100px;
  ${CommonLayoutAll}

  & p2{
      width: 400px;
      height: 30px;
      margin-top: 10px;
      margin-left: 70px;
      font-size: ${fontsize[4]};
      font-weight: ${fontWeight[1]}; 
  }
`