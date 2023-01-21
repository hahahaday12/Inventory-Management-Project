import styled from 'styled-components';
import {InnerText3} from '../../../styles/common'
import Products from './Products';

const FivePage = () => {
  return(
    <FiveLayout>
      <ProductBox>
        <ProductText><p1>박스인을 이용하는 고객군의 제품이예요.</p1></ProductText>
      </ProductBox>
        <Products/>
    </FiveLayout>
  )
};
export default FivePage;

const FiveLayout = styled.div`
  width:1536px;
  height: 550px;
  background-color: aliceblue;
  position: absolute;
  display: flex;
  top: 2700px;
`
const ProductBox = styled.div`
  width: 1000px;
  height: 500px;
  display: flex;
  //background-color: blue;
  position: relative;
  top: 100px;
  left: 250px;
`
const ProductText = styled.div`
  width: 500px;
  height: 50px;
  //background-color: red;
  margin-top: 18px;
  margin-left: 230px;
  font-weight: 600;

  & p1{
    ${InnerText3}
    font-size: 23px;
  }
`