import { ThirdContainer, ThirdBox } from '../../../../styleComponents/MainPageComponents/MainStyleDetail';
import styled from 'styled-components';
import LayoutText from './layouttext';
import SecondPage from '../2components/index';

const ThirdPage = () => {
  return(
    <>
    <SecondPage/>
    <ThirdContainer>
        <ThirdBox>
          <Box1>
            <img alt='logoimg' src='./img/balimg.png'/>
          </Box1>
            <Box2>
              <LayoutText/>
            </Box2>
        </ThirdBox>
      </ThirdContainer>
    </>
  )
};
export default ThirdPage;

const Box1 = styled.div`
  width: 500px;
  height: 500px;
  margin-top: 50px;
  display: flex;
  position: relative;
  left: 50px;
`
const Box2 = styled.div`
  width: 580px;
  height: 500px;
  margin-left: 200px;
  margin-top: 50px;
`