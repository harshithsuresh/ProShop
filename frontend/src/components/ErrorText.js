import React from 'react';

const ErrorText = ({ text }) => {
  return (
    <div className="flex justify-center item-center text-3xl text-primary shadow-2xl m-10 p-5 bg-danger rounded">
      {text}
    </div>
  );
};

export default ErrorText;
