import { Link, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function Login()
{
    let navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [cookies, setCookie, removeCookie] = useCookies();
    const formik = useFormik({
        initialValues: {
            UserId:'',
            Password:''
        },
        onSubmit : values => {
            for(var user of users) {
                if('sai-karthika'==values.UserId && 'karthika11'==values.Password){
                    setCookie("userid", user.UserId);
                   //localStorage.setitem("userid","user.Userid")
                    navigate("/home");
                    break;
                } else {
                    navigate("/errorpage");
                }
            }
        }
    })

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
            .then(response=> {
                setUsers(response.data);
            })
    },[]);

    return(
        <div>
            <h2>User Login</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd><input value={formik.values.UserId} name="UserId" onChange={formik.handleChange} type="text"/></dd>
                    <dt>Password</dt>
                    <dd><input  value={formik.values.Password} name="Password" onChange={formik.handleChange} type="password"/></dd>
                </dl>
                <button className="btn btn-primary" type='submit'>Login</button>
            </form>
            <br />
            <Link to="/register">New User?</Link>
        </div>
    )
}