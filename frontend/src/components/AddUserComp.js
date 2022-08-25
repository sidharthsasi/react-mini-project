import React, { useState } from "react";
import Axios from 'axios'
import { useNavigate } from "react-router-dom";

const AddUserComp = () => {
  const [showModal, setShowModal] = useState(false);
 const navigate = useNavigate()

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const dataSubmit=()=>{
    Axios({
        method: 'post',
        url: "http://127.0.0.1:8000/adduser",
        data: {
        first_name:firstName,
        last_name: lastName,
          username:username,
          email:email,
          password:password,
         
        },
        headers: {
        
          "content-type": "application/json"
        }
      }).then((response)=>{
          
        if(response.status === 200 ){
          navigate('/adminhome')
        }else{
          alert('something went wrong !')
        }
      })
      setShowModal(false)
      }




  return (
    <>
      <a href='#/'
        className="bg-blue-200 text-black active:bg-red-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        
        onClick={() => setShowModal(true)}
      >
        Add User
      </a>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Add User</h3>
                  
                  <a href='#/'
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </a>
                </div>
                <div className="relative p-6 flex-auto">
                  <form 
                   className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      First Name
                    </label>
                    <input
                     value={firstName} onChange={(e) => setFirstName(e.target.value)}
                      type="text"
                      name="first_name"
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      Last Name
                    </label>
                    <input 
                    value={lastName} onChange={(e) => setLastName(e.target.value)}
                      type="text"
                      name="last_name"
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      Email
                    </label>
                    <input
                     value={email} onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      name="email"
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      Username
                    </label>
                    <input 
                     value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      name="username"
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      Password
                    </label>
                    <input 
                     value={password} onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      name="password"
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <a href="#/"
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                  
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </a>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={dataSubmit }
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default AddUserComp;