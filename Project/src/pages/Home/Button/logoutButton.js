import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoutButton = () => {
  
  return(
    <>
    <Link to="/logout" style={{ textDecoration: 'none', color: 'gray' , fontWeight: '600' }}>
    <LogoutButtonBox>
      로그아웃
    </LogoutButtonBox>
    </Link>
    </>
  )
};
export default LogoutButton;

const LogoutButtonBox = styled.div`
  width: 100px;
  height: 70px;
  background-color: pink;
  display: flex;
  position: relative;
`