import styled from 'styled-components';

export const ProuctBackground = styled.div`
  width: 1536px;
  height: 705px;

   @media screen and (min-width: 1536px) {
        width: 1872px;
        height: 937px;
    }
`
export const Headerbox = styled.div`
  width: 1536px;
  height: 75px;
  background-color:white;
  display: flex;
  justify-content: space-between;
  position: absolute;
  border-bottom: solid 3px #dfdfe5;
  

& img{
    width: 120px;
    height: 120px;
    margin-bottom: 100px;
    display: flex;
    position: relative;
    bottom: 22px;
    left: 50px;
  }

   @media screen and (min-width: 1536px) {
        width: 1870px;
    }
`

export const SidebarContainer = styled.div`

  & .iconWrap {
    width: 230px;
    height: 40px;
    display: flex;
    position: relative;
    margin: 10px auto;
    border-radius: 10px;
  }  
`
export const Item = styled.div`
  width: 250px;
  height: 630px;
  position: absolute;
  top: 75px;
  background-color: #fafbfc;
  border-right: solid 3px #dfdfe5;

 @media screen and (min-width: 1536px) {
        height: 860px;
    }
`
export const ProductListContainer = styled.div`
 width: 1050px;
 height: 580px;
 display: flex;
 position: absolute;
 top: 120px;
 left: 320px;

 @media screen and (min-width: 1536px) {                   
      width: 1400px;
      height: 786px;
  }
`
export const ProductBox = styled.div`
  width: 1000px;
  height: 50px;
  border-bottom: solid 1px #dfdfe5;
  position: absolute;
  top: 50px;

  @media screen and (min-width: 1536px) {                       
    width: 90%;  
  }
`
export const Title = styled.div`
  width: 100px;
  height: 40px;
  font-size: 25px;
  font-weight: 600;
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
  display: flex;
  position: relative;
  left: 80px;
  bottom: 20px;
  font-weight: 600;
`