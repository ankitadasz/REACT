import Item from './Components/item';
import Cart from './Components/cart';
import './App.css';


function App() {
  // const counterState=useContext(CounterContext);
  // console.log("context",counterState);
  return (
    <div className="App">
   <Item name="DELL" price={40000}/>
   <Item name="HP" price={50000}/>
   <Item name="MAC" price={60000}/>
   <Item name="LENOVO" price={140000}/>
   <Cart/>

    </div>
  );
}

export default App;
