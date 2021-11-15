import React,{useState} from 'react';
import { useRef } from 'react';
import "./AdminPost.css";
import {  Alert,AlertTitle } from '@mui/material';




const AdminPost = () => {

    
   const nameRef=useRef()
   const desRef=useRef()
   const priceRef=useRef()
   const imgRef=useRef()
 // success message
 const [success,setSuccess]=useState(false)


   const handleAddProduct =e=>{

    const name=nameRef.current.value;
    const description=desRef.current.value;
    const number=priceRef.current.value;
    const img=imgRef.current.value;
    const newProduct={name,description,number,img};

    fetch("https://gentle-harbor-19580.herokuapp.com/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess(true);
          e.target.reset();
        }
      });
    e.preventDefault()
   }
    return (
      <div>
        <div className="main-container mt-5 mb-5">
          <div className=" container mt-5">
            <h2 className="text-center text-primary pt-5">Add a Service</h2>

            <form className="form mt-5" onSubmit={handleAddProduct}>
              <span className="pro_name">Product Name</span>
              <input
                ref={nameRef}
                className="item-name rounded"
                placeholder="Product Name"
                name="name"
              />

              <span className="pro_price">About This item</span>
              <input
                ref={desRef}
                className="descrip rounded"
                placeholder="Description "
                name="description"
              />
              <span className="pro_price">Price</span>
              <input
                ref={priceRef}
                placeholder="Price"
                className="number rounded"
                name="number"
              />
              <span className="Image">Photo Link</span>
              <input
                ref={imgRef}
                placeholder="Photo Link"
                className="imgs_link rounded"
                name="img"
              />
              <input
                className="submitButton rounded"
                type="submit"
                value="Post"
              />
            </form>
            {success && (
              <Alert severity="success">
                <AlertTitle>Card Posted Successfully</AlertTitle>
              </Alert>
            )}
          </div>
        </div>
      </div>
    );
};
  
export default AdminPost;