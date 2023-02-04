import { FiveContainer,ProductBox } from '../../../../styleComponents/MainPageComponents/MainStyleDetail';
import {InnerText} from '../../../../../styles/common'
import { fontWeight, fontsize } from '../../../../styles/theme';
import styled from 'styled-components';
import Products from './Products';
import FourPage from '../4components/index';

const FivePage = () => {
  return(
    <>
    <FourPage/>
    <FiveContainer>
      <ProductBox>
        <ProductText><p1>박스인을 이용하는 고객군의 제품이예요.</p1></ProductText>
      </ProductBox>
        <Products/>
    </FiveContainer>
    </>
  )
};
export default FivePage;

const ProductText = styled.div`
  width: 500px;
  height: 50px;
  margin-top: 18px;
  margin-left: 230px;
  font-weight: ${fontWeight[4]};

  & p1{
    ${InnerText}
    font-size: ${fontsize[4]};
  }

  @media screen and (min-width: 1536px) {
        margin-left: 200px;     
  }
`