import logo from './logo.svg';
import './App.css';
import {ComponenteNavBar} from "./componentes/navBar/ComponenteNavBar"
import {ComponenteItemDetailContainer} from "./componentes/itemDetailContainer/ComponenteItemDetailContainer"
import {ComponenteItemListContainer} from "./componentes/itemListContainer/ComponenteItemListContainer";
import {ComponenteCartContainer} from "./componentes/cartContainer/ComponenteCartContainer"
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <cartProvider>
    <BrowserRouter>
    <div className="App">
       <ComponenteNavBar>HOLA</ComponenteNavBar>
       <Routes>
         <Route path="/" element={<itemListContainer/>}/>
         <Route path="/category/:categoryId" element={<ComponenteItemListContainer/>}/>
         <Route path='/item/:id' element={<ComponenteItemDetailContainer/>}/>
         <Route path='/cart' element={<ComponenteCartContainer/>}/>
       </Routes>
    </div>  
    </BrowserRouter>
    </cartProvider>

  );
}

export default App;
 