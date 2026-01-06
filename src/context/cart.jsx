import { createContext } from "react";
const CartContext= createContext(null);

export const cartProvider = (props) =>{
    const [items,setItems] = useState([]);
    return(
        <CartContext.provider>
            {props.children}
        </CartContext.provider>
    )
}