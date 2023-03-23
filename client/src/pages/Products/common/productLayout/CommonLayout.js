import styled from 'styled-components';
import ProuctLayOut from '../Layout/OutLayout';
import { ProductListLayout, ItemBox, InnerItemBox, TextBox } from '../../../../styleComponents/ProductPageComponent/CommonDetail/commonLayout'
import { ItemboxStyle } from '../../../../styleComponents/ProductPageComponent/productDetail/ProductDetailLayout';
import Loading from '../../../Loading/loading';
import { useState,useEffect } from 'react';
import axios from 'axios'
import { Input} from 'antd';
const { Search } = Input;


const ProductCommonLayout = () => {

  const [loading, setLoading] = useState(true);
  const [product, setProductInfo] = useState([{}]);
  const [search, setSearch] = useState("");

  useEffect(() =>{
    setLoading(true);
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
    
    <ProductListLayout>
      <div>
      {loading ? <Loading /> : null}
    
        <SelecteContainer>
          <ProuctTitle/>
            <NameSearchbox>
            <Search enterButton style={{width:"650px", height:"15px" , marginTop:"10px"}}
              type="text"
              placeholder='제품 이름 검색'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
              {/* <SearchInput
                type="text"
                placeholder='제품 이름 검색'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              /> */}
            </NameSearchbox>

            <div className="ProductItembox">
            {product && fnSearch(data).map((item, index) => (
            <ItemBox key={index}>
              <InnerItemBox  key={index}/>

              
                <Quantiy>
                 {item.quantities[0] !== undefined ? item.quantities[0].quantiy : "0" }  
                </Quantiy>

                <TextBox key={item.product_name}>
                {item.product_name} 
                {/* 상품가격 : {item.product_price.toLocaleString()}원 
                수량 {item.quantities[0] !== undefined ? item.quantities[0].quantiy : "0" } 개   */}
                </TextBox>


                <Buttom>
                {item.product_price.toLocaleString()} /
                {item.product_sell_price.toLocaleString()}/
                {item.product_categorie.toLocaleString()}/
                {item.product_brand.toLocaleString()} 
                </Buttom>

                
              </ItemBox>  
            ))}
          </div>
        </SelecteContainer>

        <InputProducts>
          <ProuctTitle/>

          <TotalBox>
          <Total>Total</Total>
        </TotalBox>

        </InputProducts>

        {/* <TotalBox>
          <Total>Total</Total>
        </TotalBox> */}
        <FooterContainer>
          <FooterBox/>
          {/* <InOutButtonBox/> */}
        </FooterContainer>
      </div>
    </ProductListLayout>
    </>
  )
};
export default ProductCommonLayout;

const SelecteContainer = styled.div`
  width: 660px;
  height: 540px;
  position: absolute;
  top: 70px;
  background-color: green;
  border-right: solid 1px #dfdfe5;

  & .ProductItembox {
    ${ItemboxStyle}
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
  width: 600px;
  height: 60px;
  border-bottom: solid 1px #dfdfe5;
`
const InputProducts = styled.div`
  width:  600px;
  height: 540px;
  position: absolute;
  left: 700px;
  top: 70px;
  background-color: yellow;
`
const NameSearchbox = styled.div`
  width: 660px;
  height: 50px;
  position: relative;
  margin-top: 10px;
  background-color:  pink;
`
const Buttom = styled.div`
  width: 250px;
  height: 20px;
  background-color: aliceblue;
  display: flex;
  position: relative;
  left: 80px;
  bottom: 25px;
  font-weight: 600;
`
const Quantiy = styled.div`
  width: 40px;
  height: 30px;
  position: absolute;
  background-color: yellow;
  left: 590px;
  bottom: 15px;
`
const TotalBox = styled.div`
  width: 500px;
  height: 63px;
  position: relative;
  top: 420px;
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
  left: 20px;
`
const FooterContainer = styled.div`
  width: 1000px;
  height: 80px;
  position: relative;
  top: 455px;
`
const FooterBox = styled.input`
  width: 1000px;
  height: 100px;
  top: 170px;
  position: absolute;
  background-color: white;
  border: solid 1px #dfdfe5;
  border-radius: 10px;
`