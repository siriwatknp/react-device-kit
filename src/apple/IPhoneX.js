/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'react-emotion';

const IPhoneX = ({ children, className }) => {
  return (
    <div className={cx('react-device-kit', className)}>
      <div className="marvel-device iphone-x">
        <div className="notch">
          <div className="camera" />
          <div className="speaker" />
        </div>
        <div className="top-bar" />
        <div className="sleep" />
        <div className="bottom-bar" />
        <div className="volume" />
        <div className="overflow">
          <div className="shadow shadow--tr" />
          <div className="shadow shadow--tl" />
          <div className="shadow shadow--br" />
          <div className="shadow shadow--bl" />
        </div>
        <div className="inner-shadow" />
        <div className="screen">
          {children}
        </div>
      </div>
    </div>
  );
};

IPhoneX.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
IPhoneX.defaultProps = {
  children: null,
  className: ''
};

export default IPhoneX;
