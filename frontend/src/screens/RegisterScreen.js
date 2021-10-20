import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Button';
import { register } from '../actions/userActions';
import Skeleton from 'react-loading-skeleton';
import { AiFillWarning } from 'react-icons/ai';

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [showError, setShowError] = useState(false);
  const [message, setMessage] = useState('');

  const redirect = location.search ? location.search.split('=')[1] : '/';
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, userInfo, error } = userRegister;

  const dispatch = useDispatch();
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

  useEffect(() => {
    if (confirmPassword && confirmPassword.length > 0) {
      if (password !== confirmPassword) {
        setMessage('Password does not match');
      } else {
        setMessage('');
      }
    }
  }, [password, confirmPassword]);

  const submitLoginHandler = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setConfirmPassword('');
      setMessage('');
      dispatch(register(name, email, password));
    }
  };
  return (
    <div>
      {loading ? (
        <Skeleton />
      ) : (
        <div className="container flex justify-center item-center my-10 w-2/6 ">
          <div className="rounded  shadow-2xl text-primary">
            <div className=" p-5 m-5">
              <div className=" text-2xl font-bold mb-5">REGISTER</div>
              <div className="">
                {showError && (
                  <div className="bg-danger p-3 rounded text-center   shadow-2xl text-onSurface">
                    {error}
                  </div>
                )}
                <form
                  onSubmit={(e) => submitLoginHandler(e)}
                  className="my-5 text-xl"
                >
                  Name
                  <Input
                    value={name}
                    type="text"
                    placeholder="Enter your email name"
                    onChange={(e) => setName(e.target.value)}
                  ></Input>
                  Email Address
                  <Input
                    value={email}
                    type="email"
                    placeholder="Enter your email address"
                    onChange={(e) => setEmail(e.target.value)}
                  ></Input>
                  Password
                  <Input
                    value={password}
                    type="password"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {message ? (
                    <div className=" flex text-warning p-1">
                      <AiFillWarning className="mt-1" />
                      {message}
                    </div>
                  ) : null}
                  Confirm Password
                  <Input
                    value={confirmPassword}
                    type="password"
                    placeholder="Confirm password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <Button type="submit" text="Register" />
                  <div className="text-base">
                    Have an account?{'    '}
                    <Link
                      className="font-bold hover:text-secondary"
                      to={redirect ? `/login?redirect=${redirect}` : '/login'}
                    >
                      Sign In
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
export default RegisterScreen;
