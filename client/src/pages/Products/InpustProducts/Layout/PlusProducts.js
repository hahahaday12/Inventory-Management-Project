import styled from 'styled-components';
import ClearButton from '../../components/button/ClearButton';

const PlusProducts = () => {
  return(
    <>
        <PlusContainer>
          <Pluslist>제품목록</Pluslist>
          <PlusProduct>제품 추가</PlusProduct>
          <ProductInformation>제품 정보</ProductInformation>
            <NameContainer>
              <NameTextBoxs>
                <ProductName>제품명</ProductName>
                  <input type="text" placeholder='제품명' />
                <Price>구매가</Price>
                  <input type="text" placeholder='구매가' />
                <Sale>판매가</Sale>
                  <input type="text" placeholder='판매가' />
              </NameTextBoxs>
            </NameContainer>

          <ProductValue>제품 속성</ProductValue>
            <Attributebox>
              <NameTextBoxs>
                <ProductName>카테고리</ProductName>
                  <input type="text" placeholder='제품명' />
                <Price>브랜드</Price>
                  <input type="text" placeholder='구매가' />
              </NameTextBoxs>
            </Attributebox>    

          <Package>재고 수량</Package>
           <Packagebox>
              <NameTextBoxs>
                <ProductName>초기 수량</ProductName>
                  <input type="text" placeholder='제품명' />
              </NameTextBoxs>
            </Packagebox>

            <ClearButton/>
        </PlusContainer>
    </>
  )
};
export default PlusProducts;

const PlusContainer = styled.div`
  width: 800px;
  height: 609px;
  //background-color: wheat;
  z-index: 30;
  left: 300px;
  top: 100px;
  position: absolute;
`
const Pluslist = styled.div`
  width: 100px;
  height: 20px;
  //background-color: yellow;
  font-size: 13px;
  color: gray;
  font-weight: bold;
`
const PlusProduct = styled.div`
 //background-color: red;
 font-size: 25px;
 width: 150px;
 height: 30px;
 font-weight: 600;
 color:#292a2f;
`
const ProductInformation = styled(PlusProduct)`
  position: relative;
  top: 30px;
  width: 700px;
  height: 45px;
  border-bottom: solid 1px #cbccd3;
  font-size: 19px;
`

const NameContainer = styled.div`
  width: 700px;
  height: 150px;
  //background-color: beige;
  position: absolute;
  top: 150px;
`

const NameTextBoxs = styled.div`
  //background-color: orange;
  position: absolute;
  height: 40px;
  width: 700px;

  & input{
    display: flex;
    width:500px;
    height: 35px;
    position: relative;
    left: 100px;
    border-radius: 8px;
    margin-bottom: 20px;
    border: solid 1px #cbccd3;

    :focus {
      outline: 2px solid #0081C9;;
    }
  }

`
const ProductName = styled.div`
  width: 69px;
  height: 20px;
  //background-color: gold;
  position: absolute;
  top:10px;
  font-weight: bold;
  font-size: 13px;
  color: #473C33;
`
const Price = styled(ProductName)`
  position: absolute;
  color: #473C33;
  top: 65px;
`
const Sale = styled(ProductName)`
  color: #473C33;
  top: 120px
`
const ProductValue = styled(ProductInformation)`
  width: 700px;
  height: 40px;
  //background-color: aquamarine;
  border-bottom: solid 1px #cbccd3;
  position: absolute;
  top:320px;
`
const Attributebox = styled(NameContainer)`
  top: 370px;
`
const Package = styled(ProductValue)`
  top: 480px
`
const Packagebox = styled(Attributebox)`
  top:530px;
  height: 50px;
`