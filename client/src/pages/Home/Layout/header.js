import HeaderLoginButton  from '../Button/button';
import LogoutButton from '../Button/logoutboutton';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LayoutHeader = () => {
  const { accessToken } = useSelector(state => state.authToken);
  console.log("accessToken",accessToken);

  return(
    <>
      <HeaderContainer>
        <img alt='logoimg' src='./img/boxlog.png'/>
        <CategoryBox>
          <InnerBox>
            <Link style={{ textDecoration: 'none', color: 'gray' , fontWeight: '600' }} to="/service">서비스</Link>
            <Link style={{ textDecoration: 'none', color: 'gray' , fontWeight: '600' }} to="/service">요금안내</Link>
            <Link style={{ textDecoration: 'none', color: 'gray' , fontWeight: '600' }} to="/prouct">리소스</Link>
          </InnerBox>
            {accessToken != null ? <LogoutButton/> : <HeaderLoginButton/>}  
        </CategoryBox>
      </HeaderContainer>
    </>
  )
};
export default LayoutHeader

const HeaderContainer = styled.div`
  width: 1536px;
  height: 80px;
  background-color: white;
  display:flex;
  justify-content: space-between;
  position: fixed;
  top: -1px;

   @media screen and (min-width: 1536px) {
        width: 1856px;
    }

  & img{
    width: 130px;
    height: 130px;
    display: flex;
    position: relative;
    bottom:20px;
    margin-left: 200px;
  }
`
const CategoryBox = styled.div`
  width: 500px;
  height: 60px;
  background-color: white;
  display: flex;
  position: relative;
  right: 100px;
  margin-top: 10px;
`
const InnerBox = styled.div`
  width: 400px;
  height: 20px;
  gap: 70px;
  display: flex;
  position: relative;
  top: 20px;
`