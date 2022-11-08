import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {ComponenteCartWidget} from '../cartWidget/ComponenteCartWidget';
import {ComponenteCartContext} from "../context/ComponenteCartContext";
import {ComponenteItemCount} from "../itemCount/ComponenteItemCount";
import { useContext,setContador } from 'react';

export const ComponenteItemDetail = ({item}) => {
  const {addProduct} = useContext(ComponenteCartContext);

  
    const agregarProducto = (quantity) => { 
    console.log (quantity);
    addProduct( item,quantity);
    }


   // const addProduct = (variable1)=> {
   //     console.log ("count",variable1);
   //     setContador(variable1)
   //     agregarProducto ({title:"mateRacing",price:2000,cantidad:variable1})
   // }
  const mostrarTexto = () => {
   }
   //const agregarProducto = () => {}

    return (
    <div>
       <p style={{color:"violet"}}> item detail</p>
       <div className='img-container'>
         <img/>
       </div>
       <div className='img-container'>
           <h4> {item.title} </h4>
           <h5>$ {item.price} </h5>
       </div>
       <p>Productos agregados : {setContador}</p>
       <ComponenteItemCount stock={10} initial= {1} onAdd={agregarProducto} showText=
        {mostrarTexto}/>
       <ComponenteCartWidget contador={setContador}/>
    </div>
    )

}