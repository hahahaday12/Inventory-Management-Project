import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FormButtonBox, FormText } from '../../../styleComponents/FormPageComponents/FormStyleDetail';

const LogoutButton = () => {
  return(
    <>
    <Link to="/logout" style={{ textDecoration: 'none', color: 'gray' , fontWeight: '600' }}>
    <FormButtonBox>
      <FormText>๋ก๊ทธ์์</FormText>
    </FormButtonBox>
    </Link>
    </>
  )
};
export default LogoutButton;