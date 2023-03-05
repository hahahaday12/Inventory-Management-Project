import { Link } from 'react-router-dom';
import { LogintextBox, EasyBox, LinkBox, FirstBox} from '../../../../../styleComponents/FormPageComponents/FormStyleDetail';

const JoinText = () => {
  return(
    <>
      <LogintextBox>
        <EasyBox>
          간편회원가입
        </EasyBox>

        <FirstBox>
          이미 박스히어로 계정이 있으세요?
          <Link to="/login" style={{ textDecoration: 'none', color: '#3C79F5' , fontWeight: '600'}}>
          <LinkBox>로그인</LinkBox> 
          </Link>
          </FirstBox>
      </LogintextBox>
    </>
  )
};
export default JoinText;