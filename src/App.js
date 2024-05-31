import './App.css';
import { Outlet } from 'react-router-dom';
import Navv1 from './Component/Navv1';
import Navv2 from './Component/Navv2';
import Footer from './Component/Footer';

function App() {
  return (
   <div>
    <Navv1/>
    
    <Outlet/>
    <Footer/>
   </div>
  );
}

export default App;
