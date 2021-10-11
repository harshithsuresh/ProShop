import React from 'react';
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';
import { FaRupeeSign } from 'react-icons/fa';

const Product = ({ product }) => {
  return (
    <div className="border border-primary rounded m-3 p-3 text-primary  text-center w-auto w-auto hover:shadow-2xl">
      <div className="flex justify-center content-center ">
        <Link to={`/product/${product._id}`}>
          <img src={product.image} alt={product.name} className="h-64" />
        </Link>
      </div>
      <div className="font-bold py-3 h-16">
        <Link to={`/product/${product._id}`}>{product.name}</Link>
      </div>
      <div className="m-3 flex justify-center item-cnter">
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
      </div>
      <div className="text-xl font-bold flex justify-center item-center">
        <FaRupeeSign className="mt-1" /> {product.price}
      </div>
    </div>
  );
};

export default Product;
