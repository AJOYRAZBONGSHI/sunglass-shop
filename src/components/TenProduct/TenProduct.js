import React,{useState,useEffect} from 'react';
import "./TenProduct.css"
import { useHistory } from 'react-router-dom';



const TenProduct = () => {


  const[products,setProducts]=useState([]);
  const history=useHistory();

  const handleOrder=(_id)=>{
      const uri=`/confirmOrder/${_id}`
      history.push(uri)
    }
    
  useEffect(()=>{
      fetch("https://gentle-harbor-19580.herokuapp.com/services")
        .then((res) => res.json())
        .then((data) => setProducts(data));
  },[]);

    return (
      <div className="main_div">
        <div className="container mt-5">
          <div className="our-service-img">
            <img
              className="img-fluid"
              src="https://lh3.googleusercontent.com/proxy/lOt5O-cHo9aTcuMiJj1KgqH7K0z_rDYgfwQTNBhKLGt-tm1a2dfg8cOl1aVYcJy8x7Bo0BDeV6LVAfLtoKYFvV7BUP700nGZmwAbHG6tA_7SwQ"
              alt=""
            />
          </div>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            {products?.slice(0, 6).map((product) => (
              <div key={product._id} className="col ">
                <div className="card rounded main-col">
                  <img
                    height="300px"
                    src={product.img}
                    className="card-img-top rounded"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <h5 className="card-title">{product.number}</h5>
                    <p className="card-text">{product.description}</p>
                    <button
                      onClick={() => {
                        handleOrder(product._id);
                      }}
                      type="button"
                      className="btn btn-outline-success"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default TenProduct;