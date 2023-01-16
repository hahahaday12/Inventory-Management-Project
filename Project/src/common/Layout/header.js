import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HeaderButton from '../components/Button/button';

const LayoutHeader = () => {
  return(
    <>
      <HeaderContainer>
        <img alt='logoimg' src='./img/boxlog.png'/>
        <CategoryBox>
          <InnerBox>
          <Link style={{ textDecoration: 'none', color: 'gray' , fontWeight: '600' }} to="/service">서비스</Link>
          <Link style={{ textDecoration: 'none', color: 'gray' , fontWeight: '600' }} to="/service">요금안내</Link>
          <Link style={{ textDecoration: 'none', color: 'gray' , fontWeight: '600' }} to="/service">리소스</Link>
          </InnerBox>
          <HeaderButton/>
        </CategoryBox>
      </HeaderContainer>
    </>
  )
}
export default LayoutHeader;

const HeaderContainer = styled.div`
  width: 1536px;
  height: 80px;
  background-color: white;
  display:flex;
  justify-content: space-between;
  position: fixed;
  top: -1px;

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
  //background-color: aqua;
  top: 20px;
`