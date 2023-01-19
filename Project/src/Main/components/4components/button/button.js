import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TryJoin = () => {
  return(
    <JoinButton>
      <Link style={{ textDecoration: 'none', color: 'gray' , fontWeight: '600' }} to="/service">
        <p3>⚡지금 가입해서 체험해 보세요!</p3>
      </Link>
    </JoinButton>
 
  )
};
export default TryJoin;

const JoinButton = styled.div`
  width: 255px;
  height: 48px;
  background-color: #4f67ff;
  display: flex;
  position: absolute;
  border-radius: 10px;
  top: 300px;
  left: 370px;

  & p3{
    color: white;
    font-weight: 600;
    position: relative;
    top: 12px;
    left: 10px;
  }
`