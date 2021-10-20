import React from 'react';
import { createPopper } from '@popperjs/core';
import { useHistory } from 'react-router-dom';

import { AiFillCaretDown } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/userActions';

const Dropdown = ({ name, his }) => {
  const history = useHistory();
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const dispatch = useDispatch();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'bottom-start',
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  const onProfileClicked = () => {
    history.push({
      pathname: `/profile`,
    });
  };
  const onSignOutClicked = () => {
    dispatch(logout());
  };
  return (
    <>
      <div className="flex flex-wrap ">
        <div className="relative inline-flex align-middle w-full">
          <button
            className="font-bold"
            type="button"
            ref={btnDropdownRef}
            onClick={() => {
              dropdownPopoverShow
                ? closeDropdownPopover()
                : openDropdownPopover();
            }}
          >
            <div className="flex gap-1">
              {name} <AiFillCaretDown className="mt-1.5" />
            </div>
          </button>

          <div
            ref={popoverDropdownRef}
            className={
              (dropdownPopoverShow ? 'block ' : 'hidden ') +
              'text-base z-50 py-2 list-none text-left rounded shadow-lg mt-1 bg-onSurface w-32 min-w-max'
            }
          >
            <label
              className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap hover:bg-primary hover:text-secondary rounded"
              onMouseDown={onProfileClicked}
            >
              Profile
            </label>
            <label
              className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap  hover:bg-primary hover:text-secondary rounded"
              onMouseDown={onSignOutClicked}
            >
              Logout
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
