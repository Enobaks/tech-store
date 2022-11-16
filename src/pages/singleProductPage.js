import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/navbar/Navbar";

const SingleProductPage = () => {
  let [productDetails, setProductDetails] = useState({});
  let params = useParams();

  let url = "https://quiet-lowlands-64875.herokuapp.com";
  useEffect(() => {
    axios
      .get(`${url}/product/${params.id}`)
      .then((res) => setProductDetails(res.data.data[0]))
      .catch((err) => console.log("Error message:", err));
    console.log(productDetails);
  });
  return (
    <div>
      <Navbar />
      {productDetails ? (
        <div className="w-full h-auto mt-3  flex flex-col items-center justify-around lg:flex-row p-3 md:p-6">
          <img
            src={`https://quiet-lowlands-64875.herokuapp.com/${productDetails.image}`}
            alt=""
            className="w-auto lg:w-2/5 h-fit object-cover object-center rounded-t-md"
          />
          <div className="product-info w-full lg:max-w-sm p-4 border border-black">
            <p className="py-2.5 mt-4 text-lg font-medium">
              {productDetails.name}
            </p>
            <p className="mt-5">Description: {productDetails.details}</p>
            <p className="mt-5">Price: ${productDetails.price}</p>
            <p>
              Qty:
              <select className="w-16 h-8 rounded-sm ml-4" name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </p>
            {productDetails && (
              <button className="rounded-lg bg-primary border-2 w-full border-primary  hover:scale-105 duration-200 text-white mt-5 py-2 px-1">
                Add to Cart
              </button>
            )}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleProductPage;
