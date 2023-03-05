import { LogoimgsBox } from '../../../../styleComponents/FormPageComponents/FormStyleDetail';
const ImgBox = () => {
  return(
    <>
    <LogoimgsBox>
      <img alt='logoimg' src='./img/google.png'/>
      <img alt='logoimg' src='./img/naver.png'/>
      <a href='http://localhost:3001/auth/kakao'>
      <img alt='logoimg' src='./img/realkakao.png'/>
      </a>
    </LogoimgsBox>
    </>
  )
};
export default ImgBox;