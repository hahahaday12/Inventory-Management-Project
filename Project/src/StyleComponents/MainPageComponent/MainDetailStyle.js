import styled from 'styled-components';
import { FlexAbsolute, FooterBoxx } from '../../styles/common';

export const MainContainer = styled.div`
   width: 1536px;
  height: 750px;
  background-color:aliceblue;
  display: flex;
  position: absolute;

   @media screen and (min-width: 1536px) {
        width: 1910px;
    }
`
export const FirstTextBox = styled.div`
  width: 600px;
  height: 100px;
  position: absolute;
  top: 140px;
  left: 430px;

   @media screen and (min-width: 1536px) {
        width: 1400px;
        margin-left: 100px;
    }
`
export const SecondContainer = styled.div`
  width: 1000px;
  height: 500px;
  display: flex;
  position: relative;
  top: 900px;
  left: 250px;

   @media screen and (min-width: 1536px) {
        margin-left: 200px;
    }
`
export const SecondImgBox = styled.div`
   width: 340px;
    height: 400px;
    position: relative;
    top: 50px;
    left: 120px;

    & img{
    width: 400px;
    height: 400px;
    position: relative;
    left: 10px;
  }
`
export const ThirdContainer = styled.div`
  width:1536px;
  height: 750px;
  background-color: aliceblue;
  position: absolute;
  display: flex;
  top: 1500px;

   @media screen and (min-width: 1536px) {
      width: 1910px;
    }
`
export const ThirdBox = styled.div`
  width: 1300px;
  height: 600px;
  margin-left: 100px;
  margin-top: 50px;
  display: inline-flex;

  @media screen and (min-width: 1536px) {
        width: 1910px;
        margin-left: 400px;
  }
  & img{
    width: 500px;
    height: 500px;
    position: absolute;
    bottom: 100px;
    left: 150px;
  }
`
export const TextContainer = styled.div`
  width: 1000px;
  height: 400px;
  display: flex;
  //background-color: blue;
  position: absolute;
  top: 2275px;
  left: 250px;

  @media screen and (max-width: 1920px) {
        margin-left: 200px;
    }
`
export const FiveContainer = styled.div`
  width:1536px;
  height: 550px;
  background-color: aliceblue;
  position: absolute;
  display: flex;
  top: 2700px;

  @media screen and (min-width: 1536px) {
        width: 1910px;
       
    }

`
export const ProductBox = styled.div`
  width: 1000px;
  height: 400px;
  display: flex;
  background-color: blue;
  position: relative;
  top: 100px;
  left: 250px;

  @media screen and (min-width: 1536px) {
        margin-left: 300px;     
    }
`
export const ProductsContainer = styled.div`
  width: 750px;
  height: 280px;
  display: flex;
  position: absolute;
  top: 230px;
  left: 370px;

   @media screen and (min-width: 1536px) {
        margin-left: 300px;     
    }  
`
export const StartContainer = styled.div`
  width:1536px;
  height: 280px;
  display: flex;
  background-color: #292a2f;
  position: absolute;
  top: 3250px;

   @media screen and (min-width: 1536px) {
      width: 1930px;    
    }
`
export const FooterContainer = styled.div`
  width:1536px;
  height: 350px;
  top: 3530px;
  ${FlexAbsolute}
  background-color: aliceblue;

  @media screen and (min-width: 1536px) {
      width: 1930px;    
    }
`
export const FooterBox = styled.div`
  top: 20px;
  left: 250px;
  ${FooterBoxx}
`