import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ErrorText from '../components/ErrorText';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { FaRupeeSign } from 'react-icons/fa';
import { BsTrash } from 'react-icons/bs';
import Button from '../components/Button';

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeCartItemHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping');
  };

  const renderProductDetails = (item) => {
    return (
      <div
        key={item.product}
        className="border border-primary flex flex-wrap p-3 text-primary rounded m-5 hover:shadow-2xl lg:grid lg:grid-cols-12 w-auto"
      >
        <img className="lg:h-36 col-span-3" src={item.image} alt={item.name} />
        <Link
          className="col-span-4 text-2xl p-2 mt-3"
          to={`/product/${item.product}`}
        >
          {item.name}
        </Link>
        <div className="flex xl:gap-10">
          <div className="flex col-span-2 text-2xl p-2 mt-3">
            <FaRupeeSign className="mt-1" />
            {item.price}
          </div>
          <div className="p-2 col-span-2 ">
            <select
              value={item.qty}
              className="border rounded p-2 mt-3 w-24"
              onChange={(e) =>
                dispatch(addToCart(item.product, Number(e.target.value)))
              }
            >
              {[...Array(item.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-1 p-2 mt-4">
            <button
              className="hover:bg-secondary w-auto h-8  rounded flex justify-center item-center"
              onClick={() => removeCartItemHandler(item.product)}
            >
              <BsTrash size="1.5em" className="mt-1" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="md:grid md:grid-cols-12">
        <div className="md:col-span-8">
          {cartItems.length === 0 ? (
            <div>
              <div className="bg-onSurface p-3 my-3 text-primary w-24 text-center rounded hover:bg-secondary">
                <Link to="/">Go Back</Link>
              </div>
              <ErrorText text="Cart is Empty" color="danger" />
            </div>
          ) : (
            <div>
              {cartItems.map((item) => {
                return renderProductDetails(item);
              })}
            </div>
          )}
        </div>
        <div className="md:col-span-3 p-3 my-3">
          <div className=" text-primary text-xl rounded border border-primary p-3">
            <div className="p-2 text-3xl">
              SUB TOTAL {cartItems.reduce((acc, item) => acc + item.qty, 0)}{' '}
              ITEMS
            </div>
            <div className="flex p-2">
              <FaRupeeSign className="mt-1" />{' '}
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </div>
            <Button
              disabled={cartItems.length === 0}
              onClick={checkoutHandler}
              text="Proceed to Checkout"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
