import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderLoginButton = () => {
  return(
    <Link to="/login" style={{ textDecoration: 'none', color: 'gray' , fontWeight: '600' }}>
    <HButton>
      <p>로그인</p>
    </HButton> 
    </Link>
  )
};
export default HeaderLoginButton ;

const HButton = styled.div`
  width: 90px;
  height: 45px;
  background-color: white;
  display: flex;
  position: relative;
  top: 8px;
  border-radius: 6px;
  border: solid 1px black;

  & p {
   font-size:15px;
   font-weight: 600;
   width: 50px;
   height: 30px;
   display: flex;
   align-items: center;
   position: relative;
   top: 8px;
   margin-left: 20px;
  }
`