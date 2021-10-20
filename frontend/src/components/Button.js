import React from 'react';

const Button = ({ onClick, text, disabled, type, ref }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      ref={ref}
      className={`py-2 my-5 w-full text-center rounded bg-secondary   ${
        disabled ? '' : 'hover:bg-primary hover:text-secondary'
      }  `}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default Button;
