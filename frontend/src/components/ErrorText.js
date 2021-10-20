import React from 'react';

const ErrorText = ({ text, color }) => {
  return (
    <div
      className={`flex justify-center item-center text-3xl text-onSurface shadow-2xl m-10 p-5 bg-${color} rounded`}
    >
      {text}
    </div>
  );
};

export default ErrorText;
