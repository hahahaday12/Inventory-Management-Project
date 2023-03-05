import styled from 'styled-components';
import {FooterBoxx} from '../../../../styles/common'
const FooterImgbox = () => {
  return(
    <FooterImgContainer>
      <img alt='logoimg' src='./img/boxlog.png'/>
      <CompanyBox>
        <p>(주)비지피웍스 | 사업자 등록 번호:832-86-00696 | 대표:문희홍</p>
        <p>06247 서울특별시 강남구 역삼로 165, 7층 | 이용약관 | 개인정보처리방침</p>
        <p>© 2023, BGPworks. All rights reserved.</p>
      </CompanyBox>
    </FooterImgContainer>
  );
};
export default FooterImgbox;

const FooterImgContainer = styled.div`
  ${FooterBoxx}
    top: 170px;
    right: 100px;

    & img{
      width: 140px;
    }
`
const CompanyBox = styled.div`
  width: 520px;
  height: 65px;
  position: relative;
  top: 50px;
  margin-left: 30px;
`