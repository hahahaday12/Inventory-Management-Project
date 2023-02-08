import styled from 'styled-components';
import ProuctLayOut from '../Layout/OutLayout';
import { ProductListContainer, ItemBox, InnerItemBox, TextBox } from '../../../../styleComponents/ProductPageComponent/CommonDetail/commonLayout'
import { useState } from 'react';



const ProductCommonLayout = () => {

  const [product, setProduct] = useState([
    {
      id:1,
      text:"바닐라시럽"
    },
    {
      id:2,
      text:"유리컵"
    },
    {
      id:3,
      text:"원두"
    },
    {
      id:4,
      text:"탄산수"
    }
  ]);

  return(
    <>
    <ProuctLayOut/>
    
      <ProductListContainer>
        <SelecteContainer>
          <ProuctTitle/>
            <NameSearchbox>
              <SearchInput
                type="text"
                placeholder='제품 이름 검색'
              />
            </NameSearchbox>

            <ProductItembox>
            {product.map((item) => (
            <ItemBox>
              <InnerItemBox/>
                <TextBox>
                {item.text}
                </TextBox>
              </ItemBox>  
            ))}
          </ProductItembox>
        </SelecteContainer>

        <InputProducts>
          <ProuctTitle/>
        </InputProducts>

        <TotalBox>
          <Total>Total</Total>
        </TotalBox>
        <FooterContainer>
          <FooterBox/>
          {/* <InOutButtonBox/> */}
        </FooterContainer>
    </ProductListContainer>
    </>
  )
};
export default ProductCommonLayout;

const SelecteContainer = styled.div`
  width: 500px;
  height: 380px;
  position: absolute;
  top: 70px;
  border-right: solid 1px #dfdfe5;
`
const ProuctTitle = styled.div`
  width: 500px;
  height: 60px;
  border-bottom: solid 1px #dfdfe5;
`

const InputProducts = styled.div`
  width:  500px;
  height: 380px;
  position: absolute;
  left: 550px;
  top: 70px;
`
const NameSearchbox = styled.div`
  width: 500px;
  height: 50px;
  position: relative;
  margin-top: 10px;
`
const SearchInput = styled.input`
  width: 480px;
  height: 40px;
  border-radius: 10px;
  margin-left: 10px;
  border: solid 1px #001253;
`
const ProductItembox = styled.div`
  width: 500px;
  height: 252px;
  position: absolute;
  top: 120px;
  border-right: solid 1px #dfdfe5;
`

const TotalBox = styled.div`
  width: 500px;
  height: 63px;
  position: absolute;
  z-index: 60;
  top: 390px;
  left: 550px;
  border-top: solid 1px #dfdfe5;
  border-bottom: solid 1px #dfdfe5;
`
const Total = styled.div`
  width: 60px;
  height: 30px;
  //background-color: wheat;
  font-size: 20px;
  font-weight: 600;
  position: absolute;
  top:15px;
  left: 10px;
`

const FooterContainer = styled.div`
  width: 1000px;
  height: 80px;
  position: relative;
  top: 455px;
`
const FooterBox = styled.input`
  width: 1000px;
  height: 60px;
  top: 10px;
  position: absolute;
  background-color: white;
  border: solid 1px #dfdfe5;
  border-radius: 10px;
`