import "./App.css";
import { useState } from "react";
import Axios from "axios";


function App() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setPass] = useState("");
 
  const [userList, setUserList] = useState([]);

  const getUser = () => {
    Axios.get("http://localhost:3333/User").then((response) => {
      setUserList(response.data);
    });
  };

  const addUser = () => {
    Axios.post("http://localhost:3333/create", {

      name: name,
      email: email,
      password: password,
      
    }).then(() => {
      setUserList([
        ...userList,
        {

          name: name,
          email: email,
          password: password,
        },
      ]);
    });
  };

  

 

  return (
    <div className="App">
      <div class="insert">
        <p id="l">Create a new account</p>
          <form action="">

            <div class="comm">
              <div class="name">
                <lable id="o">User</lable>
                <lable id="o">Email</lable>
                <lable id="o">password</lable>
              </div>
              <div>
                <div className="sci">
                  <input
                    type="text"
                    className=""
                    placeholder="Enter Name"
                    onChange={(event) => {
                      setname(event.target.value)
                    }}
                  />
                </div>

                <div className="sci">
                  <input
                    type="text"
                    className=""
                    placeholder="Enter Email"
                    onChange={(event) => {
                      setemail(event.target.value)
                    }}
                  />
                </div>

                <div className="sci">
                  <input
                    type="password"
                    className=""
                    placeholder="Enter password"
                    onChange={(event) => {
                      setPass(event.target.value)
                    }}
                  />
                </div>
              
                <div>
                  <button onClick={addUser} class="sub">Add</button>
                </div>
              </div>
                      
            </div>
            
          </form>
        
      <div/>

      </div>
      
      
      <div className="employees">
        
        <br />
        <br />
        {userList.map((val, key) => {
          return (
            <div className="">
              <div className="a">
                <p className="q">Name: {val.name}</p>
                <p className="q">Email: {val.email}</p>
                <p className="q">Password: {val.password}</p>
               
              </div>
            </div>
          );
        })}
        <button class="show" onClick={getUser}>
          Show
        </button>
      </div>
    </div>
  );
}

export default App;