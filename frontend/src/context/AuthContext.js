import { createContext, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(() =>
    localStorage.getItem("authToken")
      ? JSON.parse(localStorage.getItem("authToken"))
      : null
  );
  const [user, setUser] = useState(
    localStorage.getItem("authToken")
      ? JSON.parse(localStorage.getItem("authToken"))
      : null
  );
  const [admin, setAdmin] = useState(
    localStorage.getItem("authToken")
      ? JSON.parse(localStorage.getItem("authToken"))
      : null
  );
  const navigate = useNavigate();

// Admin Login Functionality
    const AdminLogin = async (e) =>{
        e.preventDefault()
        const response = await fetch('http://127.0.0.1:8000/api/token/',{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: e.target.username.value,
                password: e.target.password.value,
              }),
        })
        const data = await response.json()
        console.log("Response", response);
        if(response.status === 200){
            setAuthToken(data)
            setAdmin(jwt_decode(data.access))
            localStorage.setItem("authToken", JSON.stringify(data));
            if( admin.is_admin === false){
                alert('You are not admin')
            }else{
                
                navigate('/adminhome')
            }
        }
    }
    

    


    const adOut=()=>{
        setAuthToken(null);
        setAdmin(null);
        localStorage.removeItem("authToken");
        console.clear()
        navigate("/admin");
    }
    

























  //  Registeration Functionality
  const Register = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify({
        first_name: e.target.first_name.value,
        last_name: e.target.last_name.value,
        email: e.target.email.value,
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    const data = await response.json()
    console.log("Data: ", data);
    console.log("Response: ", response);
    if(response.status === 201){
        navigate('/login')
        alert('Account created successfully')
    }else{
        alert('Please try again!')
    }
  };


  //  Login Functionality
  const loginUser = async (e) => {
    e.preventDefault();
    console.log("Form submitted working");
    const response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    const data = await response.json();
    console.log("Data: ", data);
    console.log("Response: ", response);
    if (response.status === 200) {
      setAuthToken(data);
      setUser(jwt_decode(data.access));
      
      localStorage.setItem("authToken", JSON.stringify(data));
      navigate("/");
    } else {
      alert("Oops something wen Wrong!");
    }
  };

  const logOut = () => {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  let ContextData = {
    user: user,
    admin:admin,
    Register:Register,
    loginUser: loginUser,
    logOut: logOut,
    AdminLogin:AdminLogin,
    adOut:adOut
  };

  return (
    <AuthContext.Provider value={ContextData}>{children}</AuthContext.Provider>
  );
};