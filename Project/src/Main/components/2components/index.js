import styled from 'styled-components';
import { Background } from '../../../styles/common';


const SecondPage = () => {
  return(
    <>
    <SecondTextBox>
      <Stext>모든 업무 정보는 실시간으로!</Stext>
      <P2>📱모든 디바이스에서 간편한 입출고!</P2>
      <P3>📃재고 현황 조회는 언제 어디서나!</P3>
      <P4>👩🏼‍🤝‍👩🏻팀원별 권한 세팅으로 효율정인 팀플레이!</P4>
        <SecondImg>
        <img alt='logoimg' src='./img/mainimg1.png'/>
        </SecondImg>
     
    </SecondTextBox>

      
    </>
  )
};
export default SecondPage;

const SecondTextBox = styled.div`
  width: 1000px;
  height: 500px;
  display: flex;
  background-color: blue;
  position: relative;
  top: 900px;
  left: 250px;

  & img{
    width: 400px;
    height: 400px;
    position: relative;
    left: 10px;
  }

`
const Stext = styled.div`
  width: 450px;
  height: 30px;
  display: flex;
  position: relative;
  background-color: antiquewhite;
  top: 100px;
  left: 50px;
  font-size: 25px;
  font-weight: 600;
`
const P2 = styled.div`
  width: 300px;
  ${Background}
  top: 200px;
  left: 50px;
  font-size: 15px;
`
  const P3 = styled.div`
    width: 310px;
    ${Background}
    top: 300px;
    left:200px;
    font-size: 15px;
  `

  const P4 = styled.div`
   width: 350px;
   ${Background}
   top: 400px;
   left: 50px;
  `
  const SecondImg = styled.div`
    width: 340px;
    height: 400px;
    background-color: antiquewhite;
    position: relative;
    top: 50px;
    left: 120px;
  `