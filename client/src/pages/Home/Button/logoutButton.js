import { Link } from 'react-router-dom';
import { FormButtonBox, FormText } from '../../../styleComponents/FormPageComponents/FormStyleDetail';
import axios from 'axios';

const LogoutButton = () => {

  const Logout = () => {
    if(window.confirm("로그아웃 할꺼냐?")){
      axios.post('http://localhost:3001/api/user/logout',{}, {withCredentials : true})
      .then(res => {
        window.location.href="/";
      });
    }
  }

  return(
    <>
    <Link to="/logout" style={{ textDecoration: 'none', color: 'gray' , fontWeight: '600' }}>
    <FormButtonBox>
      <FormText onClick={Logout}>로그아웃</FormText>
    </FormButtonBox>
    </Link>
    </>
  )
};
export default LogoutButton;