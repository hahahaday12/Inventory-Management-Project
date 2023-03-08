import { Routes, Route, Router} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import FirstMain from './pages/Home/Main/index';
import LoginText from './pages/Form/components/login/loginForm';
import JoinForm from './pages/Form/components/Join/joinForm'
import List from './pages/Products/ProductList/ListPage';
import PrivateRoute from './privateRoute';
import { useDispatch } from 'react-redux';
import { SET_TOKEN } from './Store/Auth';
import InputPage from './pages/Products/Input/InputPage';
import OutPage from './pages/Products/Output/OutPage';
import InputProducts from './pages/Products/InpustProducts/inputProductsPage';
import './App.css';

function App() {
  const dispatch = useDispatch();
    useEffect(() =>{
     console.log("APP");
 		  axios.post('http://localhost:3001/auth/silent-refresh',{}, {
 			withCredentials : true
 		}).then(res => {
 		  console.log(JSON.stringify(res.data));
      if(res.data.accessToken){
        window.localStorage.setItem("accessToken",res.data.accessToken);
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.accessToken;
        dispatch(SET_TOKEN(res.data.accessToken));
        console.log("set accessToken",res.data.accessToken);
      }
 	  });
  },[]);

  return (
    <Routes>
      <Route path="/" element={<FirstMain/>}/>
        <Route path='/login' element={
         <LoginText/>}/>
        <Route path='/join' element={<JoinForm/>}/>
        <Route path="/product" element={
          <PrivateRoute component={<List/>} />
        }/>

        <Route path="/product:lnput" element={
          <PrivateRoute component={<InputProducts/>} />
        }/>

        <Route path="/productinput" element={
          <PrivateRoute component={<InputPage/>} />
        }/>
        <Route path="/productoutput" element={
          <PrivateRoute component={<OutPage/>} />
        }/>
    </Routes>
  );
}
export default App;
