import Main from '../Layout/Layout';
import StartBox from './6_StartBox/start'
import LayoutHeader from '../Layout/header'
import Footer from './footer/footer';
import styled from 'styled-components';

const FirstMain = () => {
  return(
    <>
      <CommonLayout>
        <LayoutHeader/>
        <StartBox/>
        <Footer/>
        {/* <Main/> */}
      </CommonLayout>
    </>
  )
};
export default FirstMain;

const CommonLayout = styled.div`
  height: 3380px;
  background-color: yellow;
`