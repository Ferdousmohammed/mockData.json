// import logo from './logo.svg';
import './App.css';
// import data from './component/data.json'
import { useEffect, useState } from 'react'


function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch('https://my.api.mockaroo.com/dataa.json?key=f00e8db0') // Replace with your API endpoint
      .then(response => response.json())
      .then(data => {
        setUserData(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{color: 'red', backgroundColor: "lightgreen", border: '1px solid aqua', margin: '4px'}}>
      <ul style={{}}>
        {userData.map(user => (
          <li style={{margin: '5px'}} key={user.id}>
            <p>Name: {user.first_name} {user.last_name}</p>
            <p>Email: {user.email}</p>
            <p>Gender: {user.gender}</p>
            <p>IP Address: {user.ip_address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}








// function App() {
//   console.log(data)

//   const [clubs, setClubs] = useState()
//   useEffect(() => {
//     setClubs(data)
  
//     return () => {
      
//     }
//   }, [])
  
  // const [userData, setUserData] = useState([]);
  //  const [userData, setUserData] = useState ([]);
  // useEffect(() => {
  //   axios.get('https://api.mockaroo.com/api/{https://my.api.mockaroo.com/moc_data}/users.json?count=10')
  //     .then(response => {
  //       setUserData(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);
  
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn Reacts
  //       </a>

  //       <h1>Mockarro data</h1>
        
 {/* <ul>
              {
                clubs.map(club => <li>{club.name} </li>)
              }          
          </ul> 
         */}




        {/* <h1>User Data</h1>
    {userData.map(user => (
      <div key={user.id}>
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Gender: {user.gender}</p>
        <p>Image: {user.image}</p>
      </div>
    ))} */}
      {/* </header>
    </div>
  );
} */}

export default App;
