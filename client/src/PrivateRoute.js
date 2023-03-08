import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';
 
const PrivateRoute = ({ component:Component, status:Status }) =>  {
  const { accessToken } = useSelector(state => state.authToken);
    let check = false;
    let result = null;
	  
    if(accessToken){
      check = true;
    }
    if(check){
      result = Component;
    }else{
        !Status ? result = <Navigate to='/'{...alert("접근할수 없는 페이지 입니다.")}/> : result = Status
    }
    return result;
 };
 export default PrivateRoute