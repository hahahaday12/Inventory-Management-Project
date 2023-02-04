import ProductCommonLayout from '../../styleComponents/ProductPageComponent/common/CommonLayout'
import ProductHeader from '../../styleComponents/ProductPageComponent/common/header';
import styled from 'styled-components';
import OutButton from '../../styleComponents/ProductPageComponent/Button/OutButton';
import { TitleBox, Choose, OutProducts,  NumberText } from '../../styleComponents/ProductPageComponent/InOutputStyle/style';

const OutPutList = () => {
  return(
    <>
    <ProductHeader/>
      <TitleBox>출고서</TitleBox>
      <Choose>제품선택</Choose>
      <OutProducts>출고제품</OutProducts>
      <NumberText>제품을 선택하고 출고 수량을 적어주세요</NumberText>
    <ProductCommonLayout/>
    <OutButton/>
    </>
  )
};
export default OutPutList;