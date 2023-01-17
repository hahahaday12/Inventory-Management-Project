import styled from 'styled-components';
import Main from '../common/Layout/Layout';
import MainStart from './components/1compoents/start';
import SecondPage from './components/2components';
import ThirdPage from './components/3components/layout';
import FourPage from './components/4components';
import FivePage from './components/5components/layout';
import Footer from './footer/footer';

const FirstMain = () => {
  return(
    <>
    <ThirdPage/>
    <MainStart/>
    <SecondPage/>
    <FourPage/>
    <FivePage/>
    <Footer/>
    <Main/>
    </>
  )
};
export default FirstMain;

