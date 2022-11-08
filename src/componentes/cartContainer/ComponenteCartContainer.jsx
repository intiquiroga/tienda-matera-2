import { useContext,useState } from "react";
import { ComponenteCartContext } from "../context/ComponenteCartContext";
import { ComponenteCartWidget } from "../cartWidget/ComponenteCartWidget";
import {db} from "../baseDatos/firebase";
import { collection, addDoc } from "firebase/firestore";

export const ComponenteCartContainer = () => {
    const value = useContext(ComponenteCartContext); 
    const {productosCarrito, getTotalPrice, getTotalProducts,removeItem} = value ;
    const [compraId,setCompraId] = useState (""); 
    console.log (productosCarrito);

    const sendOrder = (evt)=> {
        evt.preventDefault();
        //console.log(evt.target[0].value)
        const compra = {
            buyer: {
                name: evt.target[0].value,
                phone:evt.target[1].value,
                email: evt.target[2].value,
            },
            items: productosCarrito,
            total: getTotalPrice()
        }
        //console.log ("compra",compra)
        const queryRef = collection (db,"orders");
        addDoc (queryRef,compra).then((resultado)=>{
            console.log (resultado.id);
            setCompraId (resultado.id);
        })

    }
   
    return (
        <div>
            <p> carrito </p>
            {compraId && <p> Su compra fue realzuada con el numero de orden {compraId} </p>}
            <div>
                {
                    productosCarrito.map ((producto)=>(
                        <div>
                            <h3> {producto.title} </h3>
                            <p> Precio unitario{producto.price}</p>
                            <p>Cantidad {producto.quantity}</p>
                            <p>Precio por cantidad {producto.quantityPrice}</p>
                            <button onClick={()=>removeItem(producto.id)}> Eliminar </button>
                        </div>
                    ))
                }
                <p><strong> Precio Total : </strong>{getTotalPrice()}</p>
                <p><strong> Total Productos : </strong>{getTotalProducts()}</p>
                <form onSubmit={sendOrder}>
                    <label>Nombre</label>
                    <input type="text" placeholder="nombre"/>
                    <label>Telefono</label>
                    <input type="tel" placeholder="telefono"/>
                    <label>Email</label>
                    <input type="email" placeholder="pone tu correo"/>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )

}