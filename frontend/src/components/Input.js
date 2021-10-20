import React from 'react';

const Input = ({ type, placeholder, onChange, disabled, value }) => {
  return (
    <input
      className="bg-onSurface py-2 my-2 w-full rounded text-center"
      value={value || ''}
      type={type}
      required
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
    ></input>
  );
};
export default Input;
