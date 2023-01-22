import styled from 'styled-components';
import LayoutText from './layouttext';
import SecondPage from '../2components/index';

const ThirdPage = () => {
  return(
    <>
    <SecondPage/>
    <LayoutContainer>
      <LayoutBox>
        <Box1/>
          <img alt='logoimg' src='./img/balimg.png'/>
            <Box2>
              <LayoutText/>
            </Box2>
      </LayoutBox>
    </LayoutContainer>
    </>
  )
};
export default ThirdPage;

const LayoutContainer = styled.div`
  width:1536px;
  height: 750px;
  background-color: aliceblue;
  position: absolute;
  display: flex;
  top: 1500px;
`
const LayoutBox = styled.div`
  width: 1300px;
  height: 600px;
  //background-color: #C780FA;
  margin-left: 100px;
  margin-top: 50px;
  display: inline-flex;

  & img{
    width: 500px;
    height: 500px;
    position: absolute;
    bottom: 100px;
    left: 150px;
  }
`
const Box1 = styled.div`
  width: 500px;
  height: 500px;
  //background-color: antiquewhite;
  margin-top: 50px;
  display: flex;
  position: relative;
  left: 50px;
`
const Box2 = styled.div`
  width: 580px;
  height: 500px;
  background-color: antiquewhite;
  margin-left: 200px;
  margin-top: 50px;
`