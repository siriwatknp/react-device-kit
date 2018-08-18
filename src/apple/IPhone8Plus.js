/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'react-emotion';
import deviceColors from '../helpers/deviceColors';

const IPhone8Plus = ({ children, className, color }) => {
  return (
    <div className={cx('marvel-device iphone8plus', color, className)}>
      <div className="top-bar" />
      <div className="sleep" />
      <div className="volume" />
      <div className="camera" />
      <div className="sensor" />
      <div className="speaker" />
      <div className="screen">
        {children}
      </div>
      <div className="home" />
      <div className="bottom-bar" />
    </div>
  );
};

IPhone8Plus.colors = deviceColors.iphone8plus;
IPhone8Plus.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf(deviceColors.iphone8)
};
IPhone8Plus.defaultProps = {
  className: '',
  children: null,
  color: deviceColors[0]
};

export default IPhone8Plus;
