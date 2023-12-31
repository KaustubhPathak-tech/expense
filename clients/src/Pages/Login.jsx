import {React,useState,useEffect} from "react";
import {Form,Input,message} from "antd";
// import { useState } from "react";
import axios from "axios";
import {Link,useNavigate} from "react-router-dom";
import Spinner from "../components/Layout/Spinner";

const Login=()=>{
    const navigate=useNavigate();
    const [loading,setLoading]=useState(false);

    //form submit
    const submitHandler=async(values)=>{
        try{
            setLoading(true)
            const {data}=await axios.post("https://expensebackend.vercel.app/api/v1/users/login",values);
            setLoading(false);
            message.success("login success");
            localStorage.setItem("user",JSON.stringify({...data.user,password:""}));
            navigate("/")
        }catch(error){
            setLoading(false);
            message.error("something went wrong");
        }
       
    };
    useEffect(()=>{
        if(localStorage.getItem("user"))
        {
            navigate("/")
        }
    },[navigate])

    return(
        <>
        <div className="register-page">
            {loading && <Spinner/>}
            <Form layout="vertical" onFinish={submitHandler}>
                <h1>Login Form</h1>

                <Form.Item label="Email" name="email">
                    <Input type="email"/>
                </Form.Item>

                <Form.Item label="password" name="password">
                    <Input type="password"/>
                </Form.Item>
                <div className="d-flex justify-content-between">
                    <Link to="/register">Not a user ? Click Here to register</Link>
                    <button className="btn btn-primary">Login</button>
                </div>
            </Form>
            
        </div>

        </>
    )
}

export default Login;