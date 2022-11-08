
import "./NavBar.css";
import {ComponenteCartWidget} from "../cartWidget/ComponenteCartWidget";
import {Link, NavLink} from "react-router-dom";
export const ComponenteNavBar = (props) => {


    console.log ("props",props)
    return (
        <nav>
            <img className='imagenlogo' src="https://cva.poker/public/cdn/img/1.svg" alt="Logo de Pagina"/>
            <ul style={{display:"flex",columnGap:"20px",justifyContent:"flex-end",color:"black",listStyle:"none",fontFamily:"fantasy",marginRight:"10px"}}>
                 <li><NavLink className={({isActive})=> isActive === true ? 'claseActiva' : 'claseInactiva' } to="category/mates">Mates</NavLink></li>
                 <li><NavLink className={({isActive})=> isActive === true ? 'claseActiva' : 'claseInactiva' } to="category/termos">Termos</NavLink></li>
                 <li><Link to="/quienessomos"></Link>Quienes Somos</li>
                 <li><Link to="/contacto"></Link>Contacto</li>
            </ul>
            <Link to="/cart">
                 <ComponenteCartWidget></ComponenteCartWidget>
            </Link>
        </nav>
    )
}