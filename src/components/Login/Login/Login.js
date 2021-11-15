import  React,{useState} from 'react';
import {AlertTitle, Alert,Button, CircularProgress,Box} from '@mui/material';
import { NavLink,useLocation,useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import useAuth from './../../../hooks/useAuth';
import "./Login.css"

const Login = () => {

    const[loginInfo,setLoginInfo]=useState({})
    const {
      user,
      loading,
      loginUser,
      error,
      handleGoogleSignIn,
    } = useAuth();
    // redirect after login
    const location=useLocation();
    const history=useHistory();
    // onblur change
    const handleOnBlur=data=>{
        const field=data.target.name;
        const value=data.target.value;
        const newLoginData={...loginInfo};
        newLoginData[field]=value;
        setLoginInfo(newLoginData)
    }

    // Submit form
    const handleLogSubmit=data=>{
        loginUser(loginInfo.email,loginInfo.password,location,history)
        data.preventDefault()
    }




    return (
      <div className="w-50 mx-auto login mt-4">
        <h1 className="text-center">Login</h1>
        <Container className="main-form">
          <form onSubmit={handleLogSubmit}>
            <span className="email">Email</span> <br />
            <input
              required
              onBlur={handleOnBlur}
              type="email"
              name="email"
              id=""
            />{" "}
            <br />
            <span className="password">Password</span> <br />
            <input
              required
              onBlur={handleOnBlur}
              type="password"
              name="password"
              id=""
            />{" "}
            <br />
            <button className="btn btn-success mb-2" type="submit">
              Login
            </button>{" "}
            <br />
            <NavLink
              to="/register"
              style={{
                textDecoration: "none",
                cursor: "pointer",
                color: "black",
                display: "block",
              }}
            >
              Create New Account!
            </NavLink>
            {loading && (
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            )}
            {user?.email && (
              <Alert severity="success">
                <AlertTitle>Registration Success</AlertTitle>
              </Alert>
            )}
            {error && (
              <Alert severity="error">
                <AlertTitle>{error}</AlertTitle>
              </Alert>
            )}
            <button
              className="btn btn-primary my-3"
              onClick={handleGoogleSignIn}
            >
              Login With Google
            </button>
          </form>
        </Container>
      </div>
    );
};

export default Login;