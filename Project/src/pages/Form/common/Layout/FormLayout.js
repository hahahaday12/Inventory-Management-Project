import styled from 'styled-components';
import ImgBox from '../LoginImg/ImgLayout';
import {CommonLayoutAll, FontStyle} from '../../../../styles/common'

const FormLayout = () => {
  return(
    <>
      <LayoutBackground>
        <LoginBox>
          <TopTitleBox>
            <img alt='logoimg' src='./img/logoimg2.png'/>
              <P1>가장쉬운 재고 관리 솔루션</P1>
          </TopTitleBox>

          <BottomBox>
            <ImgBox/>
              <Linebox><P>또는</P></Linebox>
          </BottomBox>
        </LoginBox>
      </LayoutBackground>
    </>
  )
};
export default FormLayout;

const LayoutBackground = styled.div`
  width: 1488px;
  height:720px;
  background-color: aliceblue;
  position :relative;
`
const LoginBox = styled.div`
  width: 360px;
  height: 560px;
  background-color: #4f67ff;
  border-radius: 20px;
  position: relative;
  display: flex;
  margin: 0 auto;
  top: 70px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`
const BottomBox = styled.div`
  width: 360px;
  height: 320px;
  background-color: white;
  border-radius: 0px 0px 20px 20px;
  position: absolute;
  top: 240px;
`
const Linebox = styled.p`
  width: 240px;
  height: 1px;
  display: flex;
  position: relative;
  background-color: #e0e0e3;
  margin-left: 65px;
  top: 150px;
`
const P = styled.div`
  width: 50px;
  height: 20px;
  background-color: white;
  //background-color: red;
  color: #8f91a0;
  font-size: 14px;
  font-weight: 600;
  position: relative;
  padding-left: 10px;
  left: 100px;
  bottom: 10px;  
`
const TopTitleBox = styled.div`
  /* height: 200px;
  top: 30px;
  position: relative;
  margin-left: 50px;
  background-color: red; */

    & img{
    width: 250px;
    height: 200px;
    position: relative;
    top: 15px;
    left: 50px;
    //background-color: yellow;
    }
`
const P1 = styled.p`
  width: 170px;
  height: 20px;
  //background-color: green;
  position: relative;
  left: 105px;
  bottom: 40px;
  color: white;
  font-size: 13px;
  font-weight: 600;
`