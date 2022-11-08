import {Link} from "react-router-dom";


export const ComponenteItem = ({item})=> {
    return (
        <div className="tarjeta-producto">
            <img src={item.pictureUrl} alt={item.title} />
            <h4>{item.title}</h4>
            <p>$ {item.price}</p>
            <Link to= {`/item/${item.id}`}>
            <button className="boton-ver"> Ver mas ...</button>
            </Link>
        </div>
    )
}