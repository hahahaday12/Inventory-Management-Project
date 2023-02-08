import { useState , useEffect } from 'react';
import styled from 'styled-components';
import ProuctLayOut from '../Common/Layout/OutLayout';
import ProductList from './Layout/productLayout';
import axios from 'axios';

const List = () => {


  const [userInfo, setUserInfo] = useState();

  useEffect(() =>{
    const headers = {
      'authorization' : localStorage.getItem('accessToken')
    }
 		axios.post('http://localhost:3001/api/user/userinfo',{}, {headers
 		}).then(res => {
 		  //console.log(JSON.stringify(res.data));
      setUserInfo(res.data);
      console.log(userInfo);
 	  });
  },[]);

  return(
  <>
  <ProductList/>
  <ProuctLayOut/>
  </>
  )
};
export default List;


// const ProductHeader = styled.div`
//   width: 1000px;
//   height: 40px;
//   //background-color: white;
//   display:flex;
//   justify-content: space-between; 
// `


// const PlusButton = styled.button`
//   width: 120px;
//   height: 38px;
//   position: relative;
//   right: 50px;
//   border-radius: 5px;
//   color: white;
//   font-weight: 600;
//   border: solid 1px white;
//   background-color: #4f67ff;
// `

// const AllLook = styled.div`
//   width: 500px;
//   height: 65px;
//   //background-color: blue;
//   border-right: solid 1px #dfdfe5;
//   border-bottom: solid 1px #dfdfe5;

//   @media screen and (max-width: 2560px) {                   
//     width: 100%;  
//   }
// `

// const LookText = styled.div`
//   width: 80px;
//   height: 25px;
//   //background-color: aliceblue;
//   font-weight: 600;
//   position: absolute;
//   top: 22px;
//   left: 20px;
// `