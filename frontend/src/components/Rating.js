import React from 'react';

import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Rating = ({ value, text }) => {
  return (
    <div className="flex gap-2 ">
      <div className="flex">
        <span>
          {value >= 1 ? (
            <BsStarFill className="mt-1" />
          ) : value >= 0.5 ? (
            <BsStarHalf className="mt-1" />
          ) : (
            <BsStar className="mt-1" />
          )}
        </span>
        <span>
          {value >= 2 ? (
            <BsStarFill className="mt-1" />
          ) : value >= 1.5 ? (
            <BsStarHalf className="mt-1" />
          ) : (
            <BsStar className="mt-1" />
          )}
        </span>
        <span>
          {value >= 3 ? (
            <BsStarFill className="mt-1" />
          ) : value >= 2.5 ? (
            <BsStarHalf className="mt-1" />
          ) : (
            <BsStar className="mt-1" />
          )}
        </span>
        <span>
          {value >= 4 ? (
            <BsStarFill className="mt-1" />
          ) : value >= 3.5 ? (
            <BsStarHalf className="mt-1" />
          ) : (
            <BsStar className="mt-1" />
          )}
        </span>
        <span>
          {value >= 5 ? (
            <BsStarFill className="mt-1" />
          ) : value >= 4.5 ? (
            <BsStarHalf className="mt-1" />
          ) : (
            <BsStar className="mt-1" />
          )}
        </span>
      </div>
      <span> {text && text}</span>
    </div>
  );
};

export default Rating;
