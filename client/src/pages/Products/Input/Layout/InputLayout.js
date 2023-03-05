
import styled from 'styled-components';
import ProductCommonLayout from '../../Common/productLayout/CommonLayout'
import ProductHeader from '../../Common/productLayout/header';
import { TitleBox, Choose, OutProducts,  NumberText} from '../../../../styleComponents/ProductPageComponent/InOutputStyle/style';
import InputButton from '../../components/button/InputButton';


const InputList = () => {
  return(
    <>
    <ProductHeader/>
    <ProductCommonLayout/>
    <InputButton/>
      <TitleBox>입고서</TitleBox>
      <Choose>제품선택</Choose>
      <OutProducts>입고제품</OutProducts>
      <NumberText>제품을 선택하고 입고 수량을 적어주세요</NumberText>
    </>
  )
};
export default InputList;
