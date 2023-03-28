import { useState , useEffect } from 'react';
import styled from 'styled-components';
//import { ProductListContainer, ProductHeader,Title,ProductBox, InputBox, InnerBox, ItemBox, InnerItemBox,TextBox} from '../../../../styleComponents/ProductPageComponent/productDetail/ProductDetailLayout';
import axios from 'axios';
import { Input } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons"
const { Search } = Input;

const ProductList = () => {

  const [loading, setLoading] = useState(true);

  const [product, setProductInfo] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() =>{
    setLoading(true);
    const headers = {
      'authorization' : localStorage.getItem('accessToken')
    }
 		axios.get('http://localhost:3001/api/product/getProduct', {headers
 		}).then(res => {
         setProductInfo([...res.data.result]);
        setLoading(false);
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
  <ProductListContainer>
    <ProductHeader>
      <Title>제품목록</Title>
        <a href='/product:lnput'>
          <PlusButton>
            <FontAwesomeIcon
            icon={faPlus}/>
            제품추가
          </PlusButton>
        </a>
    </ProductHeader>

    <ProductBox>
      <SearchHeader>
        <Search enterButton style={{width:"500px", marginTop:"10px", marginLeft:"10px"}}
          type="text"
          placeholder="제품 검색"  
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </SearchHeader>

      <InnerBox>
        <RigthText>
              
        </RigthText>
        <AllLook>
          <LookText>전체보기</LookText>
        </AllLook>
          {product && fnSearch(data).map((item, index) => (
            <ItemBox key={index}>
              <InnerImgBox/>
              <TextBox key={item.product_name}>
                {item.text}
              </TextBox>

              <Bottom>
                {item.product_price.toLocaleString()} /
                {item.product_sell_price.toLocaleString()}/
                {item.product_categorie.toLocaleString()}/
                {item.product_brand.toLocaleString()} 
              </Bottom>
              <Quantiy>
                {item.quantities[0] !== undefined ? item.quantities[0].quantiy : "0" }
              </Quantiy>
            </ItemBox>  
          ))}
      </InnerBox>
    </ProductBox>
  </ProductListContainer>
  </>
  )
};
export default ProductList;

const ProductListContainer = styled.div`
 width: 1370px;
 height: 800px;
 display: flex;
 position: absolute;
 top: 120px;
 left: 320px;
 background-color: aliceblue;
`
const ProductHeader = styled.div`
  width: 1400px;
  height: 40px;
  display:flex;
  justify-content: space-between; 
  background-color: red;
`

const Title = styled.div`
  width: 100px;
  height: 40px;
  font-size: 25px;
  font-weight: 600;
`
const PlusButton = styled.button`
  width: 120px;
  height: 38px;
  position: relative;
  right: 200px;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  border: solid 1px white;
  background-color: #4f67ff;
`

const ProductBox = styled.div`
  width: 1250px;
  height: 560px;
  border-bottom: solid 1px #dfdfe5;
  position: absolute;
  left: 60px;
  top: 50px;
  background-color: green;
`
const SearchHeader = styled.div`
  width: 1250px;
  height: 55px;
  border-bottom: solid 1px #dfdfe5;
  position: absolute;
  background-color: blue;
`
const InnerBox = styled.div`
  width: 600px;
  height: 504px;
  position: absolute;
  background-color: yellow;
  top: 56px;
  border-right: solid 1px #dfdfe5;
`
const RigthText = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  position: absolute;
  left: 900px;
  top: 150px;
  background-color: olive;
`

const ProductItembox = styled.div`
  height: 438px;
  position: relative;
  background-color: orange;
  border-right: solid 1px #dfdfe5;
  overflow: auto;

  /* .InItembox {
    height: 420px;
    position: relative;
    background-color: orange;
    border-right: solid 1px #dfdfe5;
    overflow: auto;
  } */

  ::-webkit-scrollbar {
    width: 3px;  /* 스크롤바의 너비 */
}

::-webkit-scrollbar-thumb {
    height: 10px; /* 스크롤바의 길이 */
    background: white; /* 스크롤바의 색상 */
    border-radius: 10px;
}

::-webkit-scrollbar-track {
    background:red;  /*스크롤바 뒷 배경 색상*/
}
`
const AllLook = styled.div`
  width: 600px;
  height: 65px;
  background-color: pink;
  border-right: solid 1px #dfdfe5;
  border-bottom: solid 1px #dfdfe5;
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
const ItemBox = styled.div`
  width: 596px;
  height: 65px;
  background-color: red;
  border-bottom: solid 1px #dfdfe5;
`
const InnerImgBox = styled.div`
  width: 40px;
  height: 40px;
  background-color: aliceblue;
  position: relative;
  border-radius: 10px;
  top: 10px;
  left: 20px;
`
const Quantiy = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  background-color: yellow;
  left: 530px;
`
const TextBox = styled.div`
  width: 100px;
  height: 20px;
  display: flex;
  position: relative;
  left: 80px;
  bottom: 28px;
  font-weight: 600;
  background-color: aqua;
`
const Bottom = styled.div`
  width: 240px;
  height: 20px;
  background-color: aliceblue;
  position: relative;
  left: 80px;
  bottom: 25px;
  font-weight: 600;
`