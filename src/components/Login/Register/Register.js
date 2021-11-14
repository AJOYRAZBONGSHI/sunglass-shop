import  React,{useState} from 'react';
import {Container,Button, CircularProgress,Box, Alert, AlertTitle} from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const Register = () => {

    const[registrationInfo,setRegistrationInfo]=useState({})


    const{user,registerUser,loading,error}=useAuth()



    // onblur change
    const handleOnBlur=data=>{
        const field=data.target.name;
        const value=data.target.value;
        const newLoginData={...registrationInfo};
        newLoginData[field]=value;
        setRegistrationInfo(newLoginData)
    }

    // Submit form
    const handleLogSubmit=data=>{
        if(registrationInfo.password !==registrationInfo.password2){
             alert('incorrect password');
             return
        }
        registerUser(registrationInfo.email,registrationInfo.password)
        data.preventDefault()
    }




    return (
      <Container>
        <h1 className="text-center">Registration Form</h1>
        <div className="main-form ">
         {!loading && <form onSubmit={handleLogSubmit}>


            <span className="email">Email</span> <br />
            <input required onBlur={handleOnBlur} type="email" name="email" id="" /> <br />
            <span className="password">Password</span> <br />
            <input placeholder="Password" required onBlur={handleOnBlur} type="password" name="password" id="" /> <br />
            <span className="password2">Re-Password</span> <br />
            <input placeholder="Password" required onBlur={handleOnBlur} type="password" name="password2" id="" /> <br />
            <Button type="submit">Register</Button> <br />
            <NavLink to="/login" style={{textDecoration:'none',cursor:"pointer"}} ><Button>Already Registered </Button></NavLink>
          </form>}
         <div className="App">
         {
            loading &&  <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
          }
          {
            user?.email && <Alert severity="success">
            <AlertTitle>Registration Success</AlertTitle>
          </Alert>
          }
          {
             error && <Alert severity="error">
            <AlertTitle>{error}</AlertTitle>
          </Alert>
          }
         </div>
        </div>
      </Container>
    );
};

export default Register;