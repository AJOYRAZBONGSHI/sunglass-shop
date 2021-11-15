import { Alert, AlertTitle } from '@mui/material';
import React, { useRef, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Revew = () => {

const nameRef = useRef();
const textRef = useRef();
const ratingRef = useRef();
// success message
const [success, setSuccess] = useState(false);

const {user}= useAuth();

const handleAddProduct = (e) => {
  const name = nameRef.current.value;
  const rating = ratingRef.current.value;
  const reviewText = textRef.current.value;
  const newProduct = { name, rating, reviewText };

  fetch("https://gentle-harbor-19580.herokuapp.com/reviews", {
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
  e.preventDefault();
};

    return (
      <div>
        <div className="main-container mt-5 mx-auto mb-5 w-50 h-50">
          <div className=" container mt-5">
            <h2 className="text-center pt-5">Review Box</h2>

            <form className="form" onSubmit={handleAddProduct}>
              <span className="pro_price">Customer name :</span>
              <input
                ref={nameRef}
                className="descrip rounded"
                placeholder="enter your name "
                name="description"
                type="text"
                required="required"
                value={user.displayName}
              />
              <span className="pro_price">Review text :</span>
              <input
                ref={textRef}
                className="descrip rounded"
                placeholder="Review text "
                name="description"
                type="text"
                required="required"
              />
              <span className="pro_price">Rating :</span>
              <input
                ref={ratingRef}
                placeholder="rating in number"
                className="number rounded"
                name="number"
                type="number"
                required="required"
              />
              <input
                className="submitButton rounded"
                type="submit"
                value="Submit Review"
              />
            </form>
            {success && (
              <Alert severity="success">
                <AlertTitle>Review Submit Successfully</AlertTitle>
              </Alert>
            )}
          </div>
        </div>
      </div>
    );
};

export default Revew;