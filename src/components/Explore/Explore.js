import React,{useState,useEffect} from 'react';
import "./Explore.css"
import { useHistory } from 'react-router-dom';
import Header from './../Header/Header/Header';

const Explore = () => {
    const [adminData,setAdminData]=useState([]);


    
    const history=useHistory();

    const handleOrder=(_id)=>{
        const uri=`/confirmOrder/${_id}`
        history.push(uri)
      }
      


    useEffect(()=>{

        const url = `https://gentle-harbor-19580.herokuapp.com/services`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setAdminData(data))


    },[])
    
    return (
      <div className="main_container">
        <div className="container">
          <Header></Header>
          <img className='my-3  more-product'
            src="https://png.pngtree.com/png-clipart/20210311/original/pngtree-hottest-product-png-image_5976680.jpg"
            alt=""
          />
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {adminData?.map((data) => (
              <div className="col ">
                <div className="card rounded main-col">
                  <img
                    height="300px"
                    src={data.img}
                    className="card-img-top rounded"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <h5 className="card-title">{data.number}</h5>
                    <p className="card-text">{data.description}</p>
                    <button
                      onClick={() => {
                        handleOrder(data._id);
                      }}
                      type="button"
                      className="btn btn-outline-success"
                    >
                      Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          ))
        </div>
      </div>
    );
};

export default Explore;