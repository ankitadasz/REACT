import React ,{useContext} from "react";
import {  CounterContext } from "../context/Counter";
const Counter = () => { 
    const Counter = useContext(CounterContext);
    return (
        <div>
            <button onClick={()=>
                Counter.setCount(Counter.count+1)
            }>INCREMENT</button>
            <button onClick={()=>
                Counter.setCount(Counter.count-1)
            }>DECREMENT</button>
        </div>
    )
}
export default Counter;