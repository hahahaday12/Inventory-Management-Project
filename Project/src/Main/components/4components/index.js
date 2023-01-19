import styled from 'styled-components';
import {CommonLayout3, InnerText3} from '../../../styles/common'
import TryJoin from './button/button';

const FourPage = () => {
  return(
    <LayoutTextBox>
      <TextInerBox><p1>실무자가 뽑은 1등 재고관리 앱</p1></TextInerBox>
      <InnerTextBox2><p2>재고관리, 이보다 편할수 없어요.</p2></InnerTextBox2>
        <TryJoin/>
    </LayoutTextBox>
  )
};
export default FourPage;

const LayoutTextBox = styled.div`
  width: 1000px;
  height: 400px;
  display: flex;
  //background-color: blue;
  position: absolute;
  top: 2275px;
  left: 250px;
`
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
  //background-color: white;
  display: flex;
  position: relative;
  top: 180px;
  right: 100px;

  & p2{
      width: 400px;
      height: 30px;
      //background-color: red;
      margin-top: 10px;
      margin-left: 70px;
      font-weight: 600; 
      font-size: 25px;
  }
`