import React, {useState, useEffect } from 'react'

function App() {

  // data variable will be taken from backend
  const [data, setData] = useState({ members: [] });

  useEffect(() => {
    fetch("/members")
      .then(res => res.json())
      .then(data => {
        setData(data);
        console.log(data);
      });
  }, []);

  // Map through data.members and render each member's name
  const memberList = data.members.map((member, index) => (
    <li key={index}>{member}</li>
  ));


  return (
    <div>
      <h1>Leo's Website</h1>
      <ul>{memberList}</ul>
    </div>
  
  )
}

export default App