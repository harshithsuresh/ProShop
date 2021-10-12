import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import { FaRupeeSign } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { listProductsDetails } from '../actions/productActions';
import Skeleton from 'react-loading-skeleton';
import ErrorText from '../components/ErrorText';

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { error, loading, product } = productDetails;

  useEffect(() => {
    dispatch(listProductsDetails(match.params.id));
  }, [dispatch, match]);

  const addCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <div>
      {loading ? (
        <Skeleton />
      ) : error ? (
        <ErrorText text={error} color="danger" />
      ) : (
        <div className="text-primary">
          <div className="bg-onSurface p-3 my-3 text-primary w-24 text-center rounded hover:bg-secondary">
            <Link to="/">Go Back</Link>
          </div>
          <div className="lg:grid lg:grid-cols-4 lg:gap-5 gap-col-5 flex-wrap p-3">
            {/* Image  */}
            <div className="shadow-sm col-span-2  flex justify-center item-center">
              <img src={product.image} alt={product.name} />
            </div>

            {/* Details  */}
            <div className="shadow-2xl rounded text-lg">
              <div className="text-5xl p-5 flex justify-center item-center shadow-sm">
                {product.name}
              </div>
              <div className="shadow-sm p-4">
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </div>
              <div className="shadow-md p-4 flex ">
                <FaRupeeSign className="mt-1" />
                Price: {product.price}
              </div>
              <div className="shadow-sm p-4 ">
                Description: {product.description}
              </div>
            </div>
            {/* Add to cart  */}
            <div
              className={`shadow-2xl p-3 ${
                product.countInStock > 0 ? 'h-56' : 'h-48'
              } text-xl`}
            >
              <div className="flex">
                <div className="w-1/2 p-2">Price : </div>
                <div className="w-1/2 p-2">{product.price}</div>
              </div>
              <div className="flex">
                <div className="w-1/2 p-2">Stock : </div>
                <div className="w-1/2 p-2">
                  {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                </div>
              </div>
              {product.countInStock > 0 ? (
                <div className="flex">
                  <div className="w-1/2 p-2">Qty : </div>
                  <div className="w-1/2 p-2">
                    <select
                      className="w-16"
                      onChange={(e) => setQty(e.target.value)}
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              ) : null}
              <div
                className={`bg-onSurface p-3 my-3 text-primary w-full text-center rounded ${
                  product.countInStock > 0 ? 'hover:bg-secondary' : ''
                } `}
              >
                <button
                  disabled={product.countInStock === 0}
                  onClick={addCartHandler}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductScreen;
