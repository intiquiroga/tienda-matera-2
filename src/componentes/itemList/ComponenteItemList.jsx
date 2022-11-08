import { useEffect } from "react"
import { ComponenteItem } from "../item/ComponenteItem";

export const ComponenteItemList = ({items,otraPropiedad})=>{


   return(
       <div>
           <div style={{color:"black"}}>item list</div>
           {
              items.map(producto=>(
                  <item key={producto.id} item= {producto}/>
              ))
            }
       </div>
    )
}
 