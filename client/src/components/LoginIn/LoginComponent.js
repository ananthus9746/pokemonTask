import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";


import "./LoginComponent.css";
// import { useNavigate, Link } from "react-router-dom";

import { login } from '../../APIs/Api'

function LoginComponent() {

  // const [otpLogin, setOtpLogin] = useState(false);
  // const [regularLogin, setregularLogin] = useState(true);
  // const [error, setError] = useState('')

  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[err,setError]=useState('')

  const Navigate = useNavigate();

  const handleSubmit=()=>{
    
    let values={
      email,
      password
    }
    onFinish(values)
  }

  const onFinish = async(values) => {
    console.log("valuess:", values);

    await login(values).then((response) => {

      console.log(response)

      // console.log("login then..", response);
      // console.log("admin token..", response.data.AdminToken);

      // localStorage.setItem("AdminToken", response.data.AdminToken);

      // Navigate("/");
    })
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  return (
    <div className="LoginWrapper">
      <div className="login_form_container">

        <form action="" onSubmit={handleSubmit}>
          <label name="email" >Email</label>
          <input type="email" name="" id="" onChange={(e)=>setEmail(e.target.value)}/>
          <label name="password">password</label>
          <input type="password" name="" id=""  onChange={(e)=>setPassword(e.target.value)}/>
          <button type="submit">Login</button>
        </form>

      </div>
    </div>
  );
}

export default LoginComponent;
