import './App.css';
import FirstMain from './pages/Home/Main/index';
import { Routes, Route, Router} from 'react-router-dom';
import Service from './ServicePage';

function App() {
  return (
    <div className='App'>
    <>
   
      <Routes>
        <Route path="/" element={
            <PrivateRoute component={<Service/>} status={<FirstMain/>} />
          }/>
        <Route path="/service" element={
            <PrivateRoute component={<Service/>} />
          }/>
      </Routes>
     
    </>
    </div>
  
  );
}

export default App;
