import styled from 'styled-components';

const InnerImg = () => {
  return(
    <>
      <ImgContainer>
        <ImgBox/>
      </ImgContainer>  
    </>
  )
}
export default InnerImg;

const ImgContainer = styled.div`
  width: 800px;
  height: 400px;
  background-color: #EAE0DA;
  position: relative;
  display: flex;
  top: 100px;
  border-radius: 30px;
  right: 100px;
`
const ImgBox = styled.div`
  width: 700px;
  height: 330px;
  background-color: white;
  display: flex;
  margin-top: 35px;
  margin-left: 50px;
  border-radius: 20px;
`