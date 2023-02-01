import styled from 'styled-components';
import Sidebar from './sideBar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons"

const ProuctLayOut = () => {
  return(
  <>
   
  <Headerbox>
    <img alt='logoimg' src='./img/boxlog.png'/>  
    <InnerProdfile>
      <Support>
        {/* <Iconwrap>
          <FontAwesomeIcon icon={faCircleQuestion}/>
        </Iconwrap> */}
        <SupportText>고객지원
        <Iconwrap>
          <FontAwesomeIcon icon={faCircleQuestion}/>
        </Iconwrap>

        </SupportText>
      </Support>

      <Profile>
      </Profile>
    </InnerProdfile>
  </Headerbox>

    <Sidebar/>


  <ProuctBackground/>
  </>
  )
};
export default ProuctLayOut;

const ProuctBackground = styled.div`
  width: 1536px;
  height: 864px;
  background-color: aliceblue;
  border-right: solid 3px #dfdfe5;
`

const Headerbox = styled.div`
  width: 1536px;
  height: 75px;
  background-color:white;
  display: flex;
  justify-content: space-between;
  position: absolute;
  border-bottom: solid 3px #dfdfe5;
  

& img{
    width: 120px;
    height: 120px;
    //background-color: aquamarine;
    margin-bottom: 100px;
    display: flex;
    position: relative;
    bottom: 22px;
    left: 50px;
  }
`

const InnerProdfile = styled.div`
  width: 400px;
  height: 72px;
  position: relative;
  display: flex;
`

const Profile = styled.div`
  width: 40px;
  height: 40px;
  background-color: blueviolet;
  position: relative;
  left: 130px;
  top:15px;
  border-radius: 50px;
`
const Support = styled.div`
  width: 130px;
  height: 40px;
  display: flex;
  position: relative;
  top: 15px;
  left: 70px;
  border-radius: 30px;
  border: 1px solid blue;
  background-color: white;
`
const SupportText = styled.div`
  width: 80px;
  height: 20px;
  //background-color: red;
  display: flex;
  margin: 0 auto;
  margin-top: 10px;
  font-size: 13px;
  font-weight: 600;
  gap: 6px;
`
const Iconwrap = styled.div`
  width: 20px;
  height: 20px;
  //background-color: yellowgreen;
  color: blue;
`