import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Button';
import { getUserDetails, updateUserProfile } from '../actions/userActions';
// import Skeleton from 'react-loading-skeleton';
import { AiFillWarning } from 'react-icons/ai';

const ProfileScreen = ({ history }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [showError, setShowError] = useState(false);
  const [message, setMessage] = useState('');

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, user, error } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const dispatch = useDispatch();
  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: 'USER_UPDATE_PROFILE_RESET' });
        dispatch(getUserDetails('profile'));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [userInfo, history, dispatch, user, success]);

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
      setPassword('');
      setMessage('');
      dispatch(
        updateUserProfile({
          id: user.id,
          name: name,
          email: email,
          password: password,
        })
      );
    }
  };
  return (
    <div className="w-full h-auto mt-10">
      <div className="lg:grid lg:grid-cols-4 lg:gap-5 gap-10 flex-wrap p-3">
        {/* User Profile */}
        <div className="lg:col-span-1 text-primary shadow-2xl">
          <div className=" p-5 m-5">
            <div className=" text-2xl font-bold mb-5">User Profile</div>
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
                {message ? (
                  <div className=" flex text-warning p-1">
                    <AiFillWarning className="mt-1" />
                    {message}
                  </div>
                ) : null}
                Confirm Password
                <Input
                  type="password"
                  value={confirmPassword}
                  placeholder="Confirm password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button type="submit" text="Update" />
              </form>
            </div>
          </div>
        </div>
        {/* My Order */}
        <div className="lg:col-span-3">My Order</div>
      </div>
    </div>
  );
};
export default ProfileScreen;
