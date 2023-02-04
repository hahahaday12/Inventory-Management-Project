import styled from 'styled-components';
import LayoutHeader from './header'

const Main = () => {
  return(
    <CommonLayout>
      <LayoutHeader/>
    </CommonLayout>
  )
};
export default Main;

const CommonLayout = styled.div`
  width: 1536px;
  height: 3380px;
  background-color: white;

  @media screen and (min-width: 1536px) {
        width: 1856px;
    }
`