
import React, { useEffect, useState } from "react";

const MyFirsTusestate = () => {
  const [user, setUser] = useState({});
  const [id, setId] = useState(1);

  // const[count,setCount]=useState(0);

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await res.json();
      setUser(data);
    };

    getUser();
  }, [id]);

  return (
    <div>
           {/* <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button> */}
      <input
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <h2>User Details</h2>

      <p>Name: {user.name}</p>
      
    </div>
  );
};


export default MyFirsTusestate;