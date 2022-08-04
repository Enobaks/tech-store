import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import "./index.css";
import gadget from "../images/gadget4.jpg";
import pad from "../images/gadget2.jpg";

const Landing = () => {
  let [products, setProducts] = useState(null);
  let url = "https://quiet-lowlands-64875.herokuapp.com";

  useEffect(() => {
    axios
      .get(url + "/product/all")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [url]);
  return (
    <div className="landing-container">
      <Navbar />
      <div className="hero-section relative">
        <img
          src={gadget}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="overlay absolute w-full h-full z-20 bg-dark-overlay top-0 flex flex-col items-center justify-center">
          <h1 className=" text-3xl px-5 lg:text-5xl text-white font-bold lg:w-1/2 lg:ml-20">
            Get your gadgets here at affordable prices
          </h1>
          <p className="text-white text-2xl pt-4 lg:text-3xl lg:pt-6">
            10% Off Your First Order{" "}
          </p>
          <button
            className="transition ease-in-out duration-300 rounded-md mt-4 w-24 h-10 lg:mt-6
           bg-white hover:scale-110"
          >
            Shop Now
          </button>
        </div>
      </div>
      <div className="qualities flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row justify-between items-center w-11/12 h-96 lg:h-36 p-4 mx-auto my-12">
        <div className="flex md:justify-center lg:w-auto lg:justify-center">
          <i class="fa-solid fa-check text-3xl mr-4"></i>
          <h5 className="text-lg">Quality Product</h5>
        </div>
        <div className="flex md:justify-center lg:w-auto lg:justify-center">
          <i className="fa-solid fa-truck-fast text-3xl mr-4"></i>
          <h5 className="text-lg">Fast Delivery</h5>
        </div>
        <div className="flex md:justify-center lg:w-auto lg:justify-center">
          <i className="text-3xl fa-solid fa-arrow-right-arrow-left mr-4"></i>
          <h5 className="text-lg">14 Days Return Policy</h5>
        </div>
        <div className="flex md:justify-center lg:w-auto lg:justify-center">
          <i className=" text-3xl fa-solid fa-phone-volume mr-4"></i>
          <h5 className="text-lg">24/7 Support</h5>
        </div>
      </div>
      <div className="products-wrap flex flex-wrap w-11/12 mx-auto justify-items-center items-center">
        {products ? (
          products.slice(0, 12).map((product) => (
            <Link
              to="/"
              className="single-product w-78 h-80 bg-white rounded-md shadow-lg hover:shadow-xl"
              key={product._id}
            >
              <img
                src={pad}
                alt=""
                className="w-full h-1/2 object-cover object-center rounded-t-md"
              />
              <div className="product-info p-4">
                <p className="py-2.5">{product.name}</p>
                <p className="">${product.price}</p>
              </div>
            </Link>
          ))
        ) : (
          <h4 className="text-xl">Loading</h4>
        )}
      </div>
      <div className="cta w-full h-80 flex flex-col items-center justify-center">
        <h3 className="text-5xl font-bold mb-7">To view more items </h3>
        <div className="btn-wrap">
          <Link to="/signup.user">
            <button className="rounded-lg bg-primary border-2 border-primary w-20 hover:scale-105 duration-200 text-white mr-4 py-2">
              Sign up
            </button>
          </Link>
          <Link to="/login.user">
            <button className="rounded-lg border-solid border-2 hover:scale-105 duration-200 border-primary w-20 py-2">
              Login
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
