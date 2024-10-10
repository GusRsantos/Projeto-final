import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Importar o gerenciador de tarefas
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Navbarra from "./components/Navbarra.jsx"
import Cadastro from "./pages/Cadastro.jsx"
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbarra/>
      <Routes>
      <Route path='/navbarra' element={<Navbarra/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/cadastro' element={<Cadastro/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
