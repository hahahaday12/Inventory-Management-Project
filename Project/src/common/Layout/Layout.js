import styled from 'styled-components';
import LayoutHeader from './header'


const Main = () => {
  return(
    <CommonLayout>
      <LayoutHeader/>
        <MidelInner/>
    </CommonLayout>
  )
};
export default Main;

const CommonLayout = styled.div`
  width: 1536px;
  height: 9080px;
  background-color: pink;
`
const MidelInner = styled.div`
  /* width: 800px;
  height: 9080px;
  //background-color: #F4D9E7;
  margin-left: 320px;
  z-index: 100;
  position: relative;
  top: 80px; */

`