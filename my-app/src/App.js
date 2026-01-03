import { useState, useEffect } from "react";
import { getPosts,getUser } from "./API";
import PostCard from "./Components/PostCard";
import UserCard from "./Components/UserCard";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [userData,setuserData]=useState(null);

  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);
   useEffect(() => {
    getUser().then((user) => setuserData(user.results[0]));
  }, []);

   const refresh = ()=>{
    getUser().then((user) => setuserData(user.results[0]));
   }

  return (
    <div className="App">
     {userData && <UserCard data={userData}/>}
       <button onClick={refresh}>CLICK FOR NEW USER DATA</button>
      {data ? (
        data.map((e) => <PostCard title={e.title} body={e.body} />)
      ) : (
        <p>NO DATA</p>
      )}
    </div>
  );
}

export default App;
