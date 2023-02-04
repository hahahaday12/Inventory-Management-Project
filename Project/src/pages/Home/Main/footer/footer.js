import { FooterBox, FooterContainer } from '../../../../styleComponents/MainPageComponents/MainStyleDetail';
import { fontWeight, fontsize } from '../../../../styles/theme';
import styled from 'styled-components';
import FooterImgbox from './footerimg';

const Footer = () => {
  return(
    <FooterContainer>
      <FooterBox>
        <SiteMapBox>
          <Li style={{ fontWeight: '800'}}>서비스</Li>
          <li>박스인은?</li>
          <li>편의기능</li>
          <li>서비스소개서</li>
        </SiteMapBox>
          <SiteCall>
            <Li style={{ fontWeight: '800'}}>문의</Li>
            <li>이메일: hahahaday12@naver.com</li>
            <li>사업문의: corp@bgpworks.com</li>
          </SiteCall>
          <FooterImgbox/>
      </FooterBox>
  </FooterContainer>
  )
};
export default Footer;

const SiteMapBox = styled.div`
  width: 100px;
  height: 160px;
  left: 200px;
  font-size: ${fontsize[2]};
  position: relative;
  & li{
    display: grid;
    color: #434242;
	  grid-template-columns: 100px;
	  grid-template-rows: 10px 10px 10px 10px;
    font-size: ${fontsize[1]};
    font-weight: ${fontWeight[3]};
  }

  @media screen and (min-width: 1536px) {
      margin-left: 200px;
    }
`
const Li = styled.p`
  display: flex;
  margin-bottom: 25px;
  `

const SiteCall = styled.div`
  width: 300px;
  height: 160px;
  left: 500px;
  font-size: ${fontsize[2]};
  position: relative;

  & li {
    list-style: none;
    display: flex;
    margin-bottom: 10px;
    color: #434242;
    font-size: ${fontsize[1]};
    font-weight: ${fontWeight[1]};
  }
`