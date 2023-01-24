import React from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
 
function PrivateRoute({ component:Component, status:Status }) {
      let result;
      let check = false;
      const accessToken = localStorage.getItem('token');
		
			if(accessToken){
				axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
			}
	
      if(check){
        result = Component;
      }else{
        !Status ?  result = <Navigate to='/'{...alert("접근할수 없는 페이지 입니다.")}/> : result = Status
      }
      return result;
 }

 export default PrivateRoute