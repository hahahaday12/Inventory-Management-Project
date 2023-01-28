import styled from 'styled-components';
import FooterImgbox from './footerimg';
import {CommonLayout3} from '../../../../styles/common'

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

const FooterContainer = styled.div`
  width:1536px;
  height: 350px;
  display: flex;
  background-color: aliceblue;
  position: absolute;
  top: 3530px;
`
const FooterBox = styled.div`
  ${FooterBoxx}
  top: 20px;
  left: 250px;
`
const SiteMapBox = styled.div`
  width: 100px;
  height: 160px;
  font-size: 16px;
  position: relative;
  left: 200px;
  & li{
    display: grid;
	  grid-template-columns: 100px;
	  grid-template-rows: 10px 10px 10px 10px;
    font-size: 13px;
    font-weight: 800;
    color: #434242;
  }
`
const Li = styled.p`
  display: flex;
  margin-bottom: 25px;
  `

const SiteCall = styled.div`
  width: 300px;
  height: 160px;
  font-size: 16px;
  position: relative;
  left: 500px;

  & li {
    list-style: none;
    display: flex;
    margin-bottom: 10px;
    color: #434242;
    font-size: 13px;
    font-weight: 600;
  }
`