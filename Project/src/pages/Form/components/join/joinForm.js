import {FontStyle} from '../../../../styles/common'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CommonForm from '../../common';

const JoinForm = () => {
  return(
    <>
    <CommonForm/>
    <InnerContainer>
      <InnerJoin>간편 회원가입</InnerJoin>
        <EmailJoin>이메일로 회원가입</EmailJoin>
          <Aready>이미 박스인 계정이 있으신가요?</Aready>
          <Link to="/login" style={{ textDecoration: 'none', color: '#3C79F5' , fontWeight: '600' }}>
          <Login>로그인</Login>  
          </Link>
    </InnerContainer>
    </>
  )
};
export default JoinForm;

const InnerContainer = styled.div`
  width: 360px;
  height: 320px;
  display: flex;
  position: relative;
  bottom: 500px;
  left: 530px;
`
const InnerJoin = styled.div`
  ${FontStyle}
  top: 33px;
  left: 130px;
  font-weight: 600;
`
const EmailJoin = styled.div`
  display: flex;
  position: absolute;
  width: 120px;
  height: 20px;
  bottom: 105px;
  left: 130px;
  font-size: 14px;
  font-weight: 600;
`
const Aready = styled.div`
  width: 200px;
  height: 20px;
  display: flex;
  position: absolute;
  bottom: 50px;
  left: 50px;
  font-size: 14px;
  font-weight: 600;
`
const Login = styled.div`
  display: flex;
  position: absolute;
  width: 60px;
  bottom: 50px;
  left: 270px;
  font-size: 14px;
  font-weight: 600;
  color:#4f67ff;
`