import { useState , useEffect } from 'react';
import styled from 'styled-components';
import { ProductListContainer, ProductHeader,Title,ProductBox, InputBox, InnerBox, ItemBox, InnerItemBox,TextBox} from '../../../../styleComponents/ProductPageComponent/productDetail/ProductDetailLayout';
//import axios from 'axios';

const ProductList = () => {

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
    }
  ]);

  return(
  <>
  <ProductListContainer>
    <ProductHeader>
      <Title>제품목록</Title>
        <PlusButton>제품추가</PlusButton>
    </ProductHeader>

    <ProductBox>
      <InputBox
        type="text"
        placeholder='제품 이름 검색'
      />
      <InnerBox>
        <AllLook>
          <LookText>전체보기</LookText>
        </AllLook>
        {product.map((item) => (
          <ItemBox>
            <InnerItemBox/>
              <TextBox>
              {item.text}
              </TextBox>
          </ItemBox>  
        ))}
      </InnerBox>
    </ProductBox>
  </ProductListContainer>
  </>
  )
};
export default ProductList;

const PlusButton = styled.button`
  width: 120px;
  height: 38px;
  position: relative;
  right: 50px;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  border: solid 1px white;
  background-color: #4f67ff;
`

const AllLook = styled.div`
  width: 500px;
  height: 65px;
  //background-color: blue;
  border-right: solid 1px #dfdfe5;
  border-bottom: solid 1px #dfdfe5;

  @media screen and (max-width: 2560px) {                   
    width: 100%;  
  }
`

const LookText = styled.div`
  width: 80px;
  height: 25px;
  //background-color: aliceblue;
  font-weight: 600;
  position: absolute;
  top: 22px;
  left: 20px;
`

