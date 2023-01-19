import styled from 'styled-components';
import {CommonLayout3,InnerText3} from '../../../styles/common'

const LayoutText = () => {
  return(
    <>
    <AllText>입고,출고,발주도 한번에!</AllText>
    <AllLook><p1>👀발주→입고→출고를 한눈에!</p1></AllLook>
    <Update><p2>⚡재고 수량은 자동으로 업데이트</p2></Update>
    </>
  );
};
export default LayoutText;

const AllText = styled.div`
  width: 300px;
  height: 30px;
  background-color: aquamarine;
  display: flex;
  position: relative;
  top: 70px;
  left: 100px;
  font-size: 35px;
  font-weight: 600;
`
 const AllLook = styled.div`
  ${CommonLayout3};
   border: 3px solid #89C4E1;
   top: 200px;
   left: 20px;
 
   & p1{
    ${InnerText3}
   }
 `
 const Update = styled.div`
  ${CommonLayout3};
  border: 3px solid #89C4E1;
  top: 280px;
  left: 200px;
 
  & p2{
    ${InnerText3}
  }
 `