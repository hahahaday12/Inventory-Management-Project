import ProductCommonLayout from '../../Common/productLayout/CommonLayout'
import ProductHeader from '../../Common/productLayout/header';
import styled from 'styled-components';
import { TitleBox, Choose, OutProducts,  NumberText } from '../../../../styleComponents/ProductPageComponent/InOutputStyle/style';
import OutButton from '../../components/button/OutButton';
const OutPutList = () => {
  return(
    <>
    <ProductHeader/>
    <ProductCommonLayout/>
      <TitleBox>출고서</TitleBox>
      <Choose>제품선택</Choose>
      <OutProducts>출고제품</OutProducts>
      <NumberText>제품을 선택하고 출고 수량을 적어주세요</NumberText>
      <OutButton/>
    </>
  )
};
export default OutPutList;