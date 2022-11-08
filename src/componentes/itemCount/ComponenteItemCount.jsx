import {useState,useContext, createContext} from "react";

import{ComponenteCartContext} from "../context/ComponenteCartContext";


export const ComponenteItemCount = ({stock,initial,onAdd,showText})=> {
    const value = useContext (ComponenteCartContext)
    console.log ("value",value)
    const [count, setCount]=useState (initial);

    const decrementar =()=> {
        if(count>1){
            setCount(count-1)
        }
    }
    const incrementar = () => {
        if (count<stock){
            setCount(count+1)
        }
    }


    return (
        <div cassName="estilosContador">
            <p>Stock disponible : {stock} </p>
            <div>
                <button disabled = {stock=== 0} onClick= {decrementar}>
                </button>
                <p>{count}</p>
                <button disabled ={stock=== 0 } onClick ={incrementar}></button>
            </div>
            <button disabled={stock === 0} onClick={()=>onAdd(count)}> AGREGAR CARRITO</button>
        </div>
    )
}