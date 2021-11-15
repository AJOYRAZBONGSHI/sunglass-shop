import React,{useState} from 'react';
import { Button, Alert,AlertTitle } from '@mui/material';
import useAuth from './../../hooks/useAuth';
import "./CreateAdmin.css"

const CreateAdmin = () => {
    const[email,setEmail]=useState('');
    // success message
    const [success,setSuccess]=useState(false)
    // token with verify user
    const {token}=useAuth()

    const handleOnBlur = e => {
        setEmail(e.target.value);
        e.preventDefault()
    }


    const handleAdminSubmit=e=>{
        const user={email};
        // handle admin 
        fetch("https://gentle-harbor-19580.herokuapp.com/users/admin", {
          method: "PUT",
          headers: {
            authorization: `Bearer ${token}`,
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              setSuccess(true);
              e.target.reset();
            }
          });
      

        e.preventDefault()
    }
    return (
      <div className='admin py-4'>
        <form className="w-50 mx-auto" onSubmit={handleAdminSubmit}>
          <strong className='text-danger'>Enter Email</strong> <br />
          <input onBlur={handleOnBlur} type="email" name="" id="" /> <br />
          <button className="btn btn-danger" type="submit">
            Make Admin
          </button>
        </form>
        {success && (
          <Alert severity="success">
            <AlertTitle>Admin Making Successfully...</AlertTitle>
          </Alert>
        )}
      </div>
    );
};

export default CreateAdmin;