import React from 'react';

const Item = (props) => {
    return (
        <div className='item-card'>
           <h4>{props.name}</h4>
           <p>price: ${props.price}</p>
           <button onClick={()=> cartProvider.setItems(...Cart.items,{ name:props.name , price:props.price})}>Add to cart</button>
        </div>
    )
}
export default Item;