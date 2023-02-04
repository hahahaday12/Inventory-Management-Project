import ProductCommonLayout from '../../styleComponents/ProductPageComponent/common/CommonLayout'
import InputButton from '../../styleComponents/ProductPageComponent/Button/InputButton';
import { TitleBox, Choose, OutProducts,  NumberText  } from '../../styleComponents/ProductPageComponent/InOutputStyle/style';
import ProductHeader from '../../styleComponents/ProductPageComponent/common/header';

const InputList = () => {
  return(
    <>
    <ProductHeader/>
      <TitleBox>입고서</TitleBox>
      <Choose>제품선택</Choose>
      <OutProducts>입고제품</OutProducts>
      <NumberText>제품을 선택하고 입고 수량을 적어주세요</NumberText>
    <ProductCommonLayout/>
    <InputButton/>
    </>
  )
};
export default InputList;