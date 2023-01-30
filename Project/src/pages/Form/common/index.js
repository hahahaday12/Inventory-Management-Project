import {CommonLayoutAll, FontStyle} from '../../../styles/common'
import ALLlayout from '../../../common/Layout/commonlayout';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const CommonForm = () => {
  return(
    <>
    <ALLlayout/>
    <LoginBox>
      <Loginform>
        <FormTop>
          <TopInner>
          <img alt='logoimg' src='./img/logoimg2.png'/>
          <P1>가장쉬운 재고 관리 솔루션</P1>
          </TopInner>
        </FormTop>
        
        <LoginBottomBox>
          {/* <LoginText/> */}
          <LogoimgsBox>
            <img alt='logoimg' src='./img/google.png'/>
            <img alt='logoimg' src='./img/naver.png'/>
            <a href='http://localhost:3001/auth/kakao'>
            <img alt='logoimg' src='./img/realkakao.png'/>
            </a>
          </LogoimgsBox>

          <EmailLoginBox>
            <Linebox><P>또는</P></Linebox>
            <Link to="/login" style={{ textDecoration: 'none', color: 'gray' , fontWeight: '600' }}>
            <EmailButton/>  
          {/* </EmailButton> */}
            </Link>
          </EmailLoginBox>
        </LoginBottomBox> 
      </Loginform>
    </LoginBox>
    </>
  )
};
export default CommonForm;

const LoginBox = styled.div`
 width: 380px;
 height: 560px;
 display: flex;
 position: absolute;
 top: 140px;
 left: 520px;
 margin: auto;
`
const Loginform = styled.div`
  width: 360px;
  height: 530px;
  background-color: white;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  border-radius: 10px;
  display: flex;
  margin: auto;
`
const FormTop = styled.div`
  width: 360px;
  height: 220px;
  background-color: #4f67ff;
  border-radius: 10px 10px 0px 0px;
`

const LoginBottomBox = styled.div`
  width: 360px;
  height: 310px;
  display: flex;
  position: absolute;
  top: 230px;
`

const LogoimgsBox = styled.div`
  width: 220px;
  height: 60px;
  display: flex;
  position: absolute;
  top: 70px;
  margin-left:70px;

  & img{
    width: 50px;
    height: 50px;
    margin-left: 20px;
  }
`
const EmailLoginBox = styled.div`
  width: 360px;
  height: 100px;
  display: flex;
  position: absolute;
  top: 130px;
`
const Linebox = styled.p`
  width: 240px;
  height: 1px;
  display: flex;
  position: relative;
  background-color: #e0e0e3;
  margin-left: 60px;
  top: 20px;
`
const EmailButton = styled.div`
  width: 250px;
  height: 42px;
  border-radius: 20px;
  border: solid 1px black;
  display: flex;
  position: absolute;
  top: 50px;
  right: 50px;
`

const P = styled.div`
  width: 50px;
  height: 20px;
  background-color: white;
  color: #8f91a0;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  position: relative;
  padding-left: 10px;
  left: 100px;
  bottom: 10px;  
`

const TopInner = styled.div`
  width: 400px;
  height: 250px;
  margin-left: 50px;

    & img{
    width: 250px;
    height: 220px;
    ${CommonLayoutAll}
    bottom: 10px;
    }
`

const P1 = styled.p`
  ${FontStyle}
  left: 120px;
  bottom: 360px;
  color: white;
  font-size: 13px;
  font-weight: 600;
`