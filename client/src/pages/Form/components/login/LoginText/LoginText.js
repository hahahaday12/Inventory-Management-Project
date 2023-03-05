import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LogintextBox, EasyBox, LinkBox, FirstBox} from '../../../../../styleComponents/FormPageComponents/FormStyleDetail';
import { FlexAbsolute } from '../../../../../styles/common';

const LoginText = () => {
  return(
    <>
      <LogintextBox>
        <EasyBox>
          간편로그인
        </EasyBox>

        <FirstBox>
          박스인 이 처음이신가요?
        <Link to="/join" style={{ textDecoration: 'none', color: '#3C79F5' , fontWeight: '600'}}>
        <LinkBox style={{marginLeft:'20'}}>회원가입</LinkBox> 
        </Link> 
          
        </FirstBox>
      </LogintextBox>
    </>
  )
};
export default LoginText;
