import styled from 'styled-components'

export const ProductListContainer = styled.div`
 width: 1050px;
 height: 580px;
 //background-color: yellow;
 display: flex;
 position: absolute;
 top: 120px;
 left: 320px;

 @media screen and (min-width: 1536px)    {                   
      width: 1400px;
      height: 786px;
  }
`
export const ProductHeader = styled.div`
  width: 1000px;
  height: 40px;
  //background-color: white;
  display:flex;
  justify-content: space-between; 
`
export const Title = styled.div`
  width: 100px;
  height: 40px;
  font-size: 25px;
  font-weight: 600;
`
export const ProductBox = styled.div`
  width: 1000px;
  height: 50px;
  //background-color: #82A284;
  border-bottom: solid 1px #dfdfe5;
  position: absolute;
  top: 50px;

  @media screen and (min-width: 1536px)           {                       
    width: 90%;  
  }
`
export const InputBox = styled.input`
  width: 350px;
  height: 35px;
  border-radius: 5px;
  position: absolute;
  border: solid 1px #001253;
`

export const InnerBox = styled.div`
  width: 500px;
  height: 400px;
  position: absolute;
  //background-color: yellow;
  top: 50px;
  border-right: solid 1px #dfdfe5;

  @media screen and (min-width: 1536px) {                   
    width: 50%;
    height: 10vh;  
  }
`

export const ItemBox = styled.div`
  width: 502px;
  height: 63px;
  //background-color: red;
  border-bottom: solid 1px #dfdfe5;

  @media screen and (max-width: 2560px) {                   
    width: 100%;  
  }
`
export const InnerItemBox = styled.div`
  width: 40px;
  height: 40px;
  background-color: aliceblue;
  position: relative;
  border-radius: 10px;
  top: 10px;
  left: 20px;
`
export const TextBox = styled.div`
  width: 100px;
  height: 20px;
  //background-color: aliceblue;
  display: flex;
  position: relative;
  left: 80px;
  bottom: 20px;
  font-weight: 600;
`


