import {CommonLayout3,InnerText3} from '../../../../../styles/common'
import { fontsize, fontWeight } from '../../../../styles/theme';
import styled from 'styled-components';
import React from 'react';

const LayoutText = () => {
  return(
    <>
    <AllText>입고,출고,발주도 한번에!</AllText>
    <AllLook><P1>👀발주→입고→출고를 한눈에!</P1></AllLook>
    <Update><P2>⚡재고 수량은 자동으로 업데이트</P2></Update>
    </>
  );
};
export default LayoutText;

const AllText = styled.div`
  width: 300px;
  height: 30px;
  top: 70px;
  left: 100px;
  font-size: ${fontsize[6]};
  font-weight: ${fontWeight[1]};
  ${CommonLayoutAll}
`
 const AllLook = styled.div`
  top: 200px;
  left: 20px;
  ${CommonLayout3};
  border: 3px solid #89C4E1;
 `

  const P1 = styled.p`
    ${InnerText}
 `
 const Update = styled.div`
  top: 280px;
  left: 200px;
  ${CommonLayout3};
  border: 3px solid #89C4E1;
`
const P2 = styled.div`
   ${InnerText} 
`