import "./App.css";
import {Routes,Route} from 'react-router-dom';
import Home from "./pages/Homepage";
import Securepage from "./pages/Securitypage";


function App() {
  return (
  <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/secure' element={<Securepage/>}/>

</Routes>
  );
}

export default App;
