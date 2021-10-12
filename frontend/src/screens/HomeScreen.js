import React, { useEffect } from 'react';
import Product from '../components/Product';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import ErrorText from '../components/ErrorText';
import Skeleton from 'react-loading-skeleton';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <div>
          <Skeleton />
        </div>
      ) : error ? (
        <ErrorText text={error} color="danger" />
      ) : (
        <div>
          <div className="text-3xl font-bold text-primary py-3">
            Latest Products
          </div>
          <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <div key={product._id} className="text-xl  ">
                <Product product={product} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
