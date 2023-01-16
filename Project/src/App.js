import './App.css';
import FirstMain from './Main/index';
import { Routes, Route, Router} from 'react-router-dom';
import Service from './ServicePage';

function App() {
  return (
    <div className='App'>
    <>
   
      <Routes>
        <Route path='/' element={<FirstMain/>}/>
        <Route path='/service' element={<Service/>}/>
      </Routes>
     
    </>
    </div>
  
  );
}

export default App;
