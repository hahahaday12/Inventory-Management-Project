import styled from 'styled-components';
import ProuctLayOut from '../Layout/OutLayout';
import { ProductListContainer, ItemBox, InnerItemBox, TextBox } from '../../../../styleComponents/ProductPageComponent/CommonDetail/commonLayout'
import { useState,useEffect } from 'react';
import axios from 'axios'
import { Input} from 'antd';
const { Search } = Input;


const ProductCommonLayout = () => {

  const [product, setProductInfo] = useState([{}]);
  const [search, setSearch] = useState("");

  useEffect(() =>{
    const headers = {
      'authorization' : localStorage.getItem('accessToken')
    }
 		axios.get('http://localhost:3001/api/product/getProduct',{}, {headers
 		}).then(res => {
       setProductInfo([...product, ...res.data.result]);
 	  });
  },[]);

  const data = Object.values(product);

  const fnSearch = (items) =>{
    return items.filter((item) => {
      if(item['product_name'] !==  undefined){
        return (
          item['product_name']
              .toString()
              .toLowerCase()
              .indexOf(search.toLowerCase()) > -1
        );
      }
    });
  }

  return(
    <>
    <ProuctLayOut/>
    
      <ProductListContainer>
        <SelecteContainer>
          <ProuctTitle/>
            <NameSearchbox>
              <Search enterButton style={{width:"500px", marginTop:"10px"}}
                type="text"
                placeholder='제품 이름 검색'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </NameSearchbox>

            <div className="ProductItembox">
            {product && fnSearch(data).map((item, index) => (
            <ItemBox key={item.proudct_id}>
              <InnerItemBox  key={item.proudct_id}/>
                <TextBox key={item.product_name}>
                상품명 : {item.product_name} 
                상품가격 : {item.product_price.toLocaleString()}원 
                수량 {item.quantities[0] !== undefined ? item.quantities[0].quantiy : "0" } 개  
                </TextBox>
              </ItemBox>  
            ))}
          </div>
        </SelecteContainer>

        <InputProducts>
          <ProuctTitle/>
        </InputProducts>

        <TotalBox>
          <Total>Total</Total>
        </TotalBox>
        <FooterContainer>
          <FooterBox/>
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

  & .ProductItembox {
  width: 400px;
  height: 472px;
  position: relative;
  top: 10px;
  background-color: blue;
  border-right: solid 1px #dfdfe5;
  overflow: auto;
}
  .ProductItembox::-webkit-scrollbar {
    width: 3px;  /* 스크롤바의 너비 */
}

.ProductItembox::-webkit-scrollbar-thumb {
    height: 10px; /* 스크롤바의 길이 */
    background: white; /* 스크롤바의 색상 */
    border-radius: 10px;
}

.ProductItembox::-webkit-scrollbar-track {
    background:red;  /*스크롤바 뒷 배경 색상*/
}


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