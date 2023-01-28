import { Routes, Route, Router} from 'react-router-dom';
import FirstMain from './pages/Home/Main/index';
import LoginText from './pages/Form/components/login/loginForm';
import JoinForm from './pages/Form/components/Join/joinForm'
import ProuctLayout from './pages/Products/Common';
import PrivateRoute from './privateRoute';
import { useDispatch } from 'react-redux';
import { SET_TOKEN } from './Store/Auth';
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
      <Route path="/prouct" element={<PrivateRoute component={<ProuctLayout/>}/>
      }/>
      <Route path='/login' element={<LoginText/>}/>
      <Route path='/join' element={<JoinForm/>}/>
    </Routes>
  );
}
export default App;
