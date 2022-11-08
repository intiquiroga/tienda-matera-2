import {  useContext } from "react";
import {ComponenteCartContext,} from "../context/ComponenteCartContext";
import {ComponenteItemCount } from "../itemCount/ComponenteItemCount";
import { ComponenteItem } from "../item/ComponenteItem";
import { itemDetail } from "../itemDetail/ComponenteItemDetail";


export const ComponenteCartWidget = () => {

    const  {getTotalProducts} = useContext (ComponenteCartContext);

    return (
        <div> 
         <p>carrito</p>
         <span style={{color:"yellow"}}>{getTotalProducts()}</span>
        </div>
    )
}