import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Button';
import { login } from '../actions/userActions';
import Skeleton from 'react-loading-skeleton';

const LoginScreen = ({ location, history }) => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [showError, setShowError] = useState(false);

  const redirect = location.search ? location.search.split('=')[1] : '/';
  const { loading, userInfo, error } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  useEffect(() => {
    if (error) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    }
  }, [error]);

  const submitLoginHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div>
      {loading ? (
        <Skeleton />
      ) : (
        <div className="container flex justify-center item-center my-10 w-2/6 ">
          <div className="rounded  shadow-2xl text-primary">
            <div className=" p-5 m-5">
              <div className=" text-2xl font-bold mb-5">SIGN IN</div>
              <div className="text-">
                {showError && (
                  <div className="bg-danger p-3 rounded text-center   shadow-2xl text-onSurface">
                    {error}
                  </div>
                )}
                <form
                  onSubmit={(e) => submitLoginHandler(e)}
                  className="my-5 text-xl"
                >
                  Email Address
                  <Input
                    type="email"
                    value={email}
                    placeholder="Enter your email address"
                    onChange={(e) => setEmail(e.target.value)}
                  ></Input>
                  Password
                  <Input
                    type="password"
                    value={password}
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button type="submit" text="Sign In" />
                  <div className="text-base">
                    New User ?{'    '}
                    <Link
                      className="font-bold hover:text-secondary"
                      to={
                        redirect
                          ? `/register?redirect=${redirect}`
                          : '/register'
                      }
                    >
                      Register
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default LoginScreen;
