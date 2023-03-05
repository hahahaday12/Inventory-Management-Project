import { ProductsContainer } from '../../../../styleComponents/MainPageComponents/MainStyleDetail';
import styled from 'styled-components';
import './Products.css'

const Products = () => {
  return(
  <ProductsContainer>
  <div class="container">
		<span class="item">📗서점</span>
		<span class="item">📦물류창고</span>
		<span class="item">👗패션 브랜드</span>
		<span class="item">👠신발</span>
		<span class="item">🧪병원 약품</span>
		<span class="item">👔의류</span>
    <span class="item">☕카페</span>
    <span class="item">🪑가구</span>
    <span class="item">📸카메라</span>
    <span class="item">🍦아이스크림</span>
    <span class="item">🍔식품</span>
    <span class="item">👄화장품</span>
    <span class="item">📱휴대폰</span>
    <span class="item">💼가방판매</span>
    <span class="item">🥩육류</span>
    <span class="item">💊약국</span>
    <span class="item">🧩스티커</span>
    <span class="item">💎쥬얼리</span>  
	</div>
  </ProductsContainer>
  )
};
export default Products;