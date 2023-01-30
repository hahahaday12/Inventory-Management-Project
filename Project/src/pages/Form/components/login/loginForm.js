import { FontStyle} from '../../../../styles/common'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CommonForm from '../../common';

const LoginText = () => {
  return(
    <>
      <CommonForm/>
      <LoginContainer>
      <InnerLogin>간편 로그인</InnerLogin>
        <InnerText>이메일 로그인</InnerText>
          <P1>박스인 이 처음이신가요?</P1>
          <Link to="/join" style={{ textDecoration: 'none', color: '#3C79F5' , fontWeight: '600' }}>
          <P2>회원가입</P2>  
          </Link> 
      </LoginContainer>       
    </>
  )
};
export default LoginText;

const LoginContainer = styled.div`
  width: 360px;
  height: 320px;
  display: flex;
  position: relative;
  bottom: 500px;
  left: 530px;
`

const InnerLogin = styled.div`
  ${FontStyle}
  top: 33px;
  left: 140px;
  font-weight: 600;
`
const InnerText = styled.div`
  display: flex;
  position: absolute;
  width: 120px;
  height: 20px;
  bottom: 105px;
  left: 140px;
  font-size: 14px;
  font-weight: 600;
`
const P1 = styled.div`
  width: 200px;
  height: 20px;
  display: flex;
  position: absolute;
  bottom: 50px;
  left: 70px;
  font-size: 14px;
  font-weight: 600
`
const P2 = styled.div`
  display: flex;
  position: absolute;
  width: 60px;
  bottom: 50px;
  left: 240px;
  font-size: 14px;
  font-weight: 600;
  color:#4f67ff;
`