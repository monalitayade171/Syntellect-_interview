import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import AddUserComponent from './AddUserComponent';

function App() {
  const myData = [
    {
      "id":1,
      "name":"PQR",
      "email":"pqr@gmail.com",
      "role":"Admin"
  },
  {
      "id":2,
      "name":"PQR_1",
      "email":"pqr_1@gmail.com",
      "role":"User"
  },
  {
      "id":3,
      "name":"PQR_2",
      "email":"pqr_2@gmail.com",
      "role":"Admin"
  },
  {
      "id":4,
      "name":"PQR_3",
      "email":"pqr_3@gmail.com",
      "role":"Admin"
  }
  ]

  const [userList, setUserList] = useState();


  useEffect(() => {
    setUserList(myData);
  },[])

  const addData = (e,name,email,role) => {
    e.preventDefault();
    console.log("data",e,name,email,role);
    const newData = {name,email,role}

    // console.log("newData",newData);
    setUserList([...myData, newData]);
  }

  


  return (
    <div className="App">
      <div className='title-bar'>
        <h1>User Dashboard
        </h1>
        <button onClick={(e) => addData(e)}>Add</button>
      </div>
      <table>
        <thead>
          <th>Id</th>
          <th>Username</th>
          <th>Email</th>
          <th>Role</th> 
          <th>Edit</th> 
          <th>Delete</th>         
        </thead>
        <tbody>
          {
            userList?.map((item, i) => {
              return(
              <tr key={i}>
                  <td>{i+1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td><button>Edit</button></td>
                  <td><button>Delete</button></td>
              </tr>
              )
            })
          }
          
        </tbody>
      </table>
      <div className='show_form'>
      <AddUserComponent addData={addData}/>
      </div>
    </div>
  );
}

export default App;
