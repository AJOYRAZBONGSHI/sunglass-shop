import  React,{useState} from 'react';
import {AlertTitle, Alert,Button, CircularProgress,Box} from '@mui/material';
import { NavLink,useLocation,useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import useAuth from './../../../hooks/useAuth';

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
      <div>
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
            <Button type="submit">Login</Button> <br />
            <NavLink
              to="/register"
              style={{
                textDecoration: "none",
                cursor: "pointer",
                color: "red",
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
            <Button onClick={handleGoogleSignIn}>Login With Google</Button>
          </form>
        </Container>
      </div>
    );
};

export default Login;