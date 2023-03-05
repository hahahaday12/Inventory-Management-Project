import { CommonLayoutAll } from '../../../../styles/common';
import styled from 'styled-components';
import React from 'react';

const InnerImg = () => {
  return(
    <>
      <ImgContainer>
        <ImgBox/>
      </ImgContainer>  
    </>
  )
}
export default InnerImg;

const ImgContainer = styled.div`
  width: 800px;
  height: 400px;
  top: 100px;
  right: 100px;
  ${CommonLayoutAll}
  border-radius: 30px;
  background-color: #EAE0DA;

  @media screen and (min-width: 1536px) {
        margin-left: 100px;
    }
`
const ImgBox = styled.div`
  width: 700px;
  height: 330px;
  display: flex;
  margin-top: 35px;
  margin-left: 50px;
  border-radius: 20px;
  background-color: white;
`