import {useState,useEffect} from "react";
import { ComponenteItemDetail } from "../itemDetail/ComponenteItemDetail";
import {useParams} from "react-router-dom"
import { db } from "../baseDatos/firebase";
import{doc, getDoc} from "firebase/firestore";

export const ComponenteItemDetailContainer = ()=> {

    const {id} =useParams ();
    const [itemProduct,setItemProduct] = useState ({});
    


    const promesa = new Promise ((resolve,reject)=>{
        setTimeout (()=> {
            resolve ();
      },2000);
    })
    const producto = () => {

    }

    useEffect (()=> {
        const getProducto = async () => {
           const productos = await promesa ;
           console.log ('productos' , productos);
           console.log = productos.find(elemento=>elemento.id === parseInt (id));
           console.log ("producto",producto)
           setItemProduct (producto);
           const queryRef = doc (db,"items",id);
           const response = await getDoc (queryRef);
           console.log (response)
           const newDoc = {
           ...response.data (),
           id:response.id 
        }
        }
        getProducto ();
    },[id])
  
    return (
        <div className="item-detail-container">
            <p style={{width:"100%"}}>item datail Container</p>
            <ComponenteItemDetail item={itemProduct}/>
        </div>
    )
}