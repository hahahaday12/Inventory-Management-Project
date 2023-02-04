import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FormButtonBox, FormText } from '../../../styleComponents/FormPageComponents/FormStyleDetail';

const HeaderLoginButton = () => {
  return(
    <Link to="/login" style={{ textDecoration: 'none', color: 'gray' , fontWeight: '600' }}>
    <FormButtonBox>
      <FormText>로그인</FormText>
    </FormButtonBox> 
    </Link>
  )
};
export default HeaderLoginButton ;