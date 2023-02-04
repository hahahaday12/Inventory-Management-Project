import { MainContainer, FirstTextBox } from '../../../../styleComponents/MainPageComponents/MainStyleDetail';
import { fontsize, fontWeight } from '../../../../styles/theme';
import styled from 'styled-components';
import InnerImg from './media';
import React from 'react';

const MainStart = () => {
  return(
    <MainContainer>
      <FirstTextBox>
        <InnerText>실무자가 뽑은 1등 재고 관리앱</InnerText>
        <InnerText2>쉽고, 빠르고, 정확한 재고관리 시작해보세요!</InnerText2>
        <InnerImg/>
      </FirstTextBox>
    </MainContainer>
  )
};
export default MainStart;

const InnerText = styled.div`
  width: 280px;
  height: 20px;
  color: gray;
  margin-left: 150px;
  font-size: ${fontsize[3]};
  font-weight: ${fontWeight[4]};

  @media screen and (min-width: 1536px) {
        width: 300px;
        margin-left: 250px;
    }
`
const InnerText2 = styled.div`
  width: 620px;
  height: 30px;
  margin-top: 30px;
  font-size: ${fontsize[5]};
  font-weight: ${fontWeight[3]};
  

  @media screen and (min-width: 1536px) {
       margin-left: 100px;
    }
`
