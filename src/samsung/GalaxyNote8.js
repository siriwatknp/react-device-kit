/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'react-emotion';

const GalaxyNote8 = ({ children, className }) => {
  return (
    <div className={cx('marvel-device note8', className)}>
      <div className="inner" />
      <div className="overflow">
        <div className="shadow" />
      </div>
      <div className="speaker" />
      <div className="sensors" />
      <div className="more-sensors" />
      <div className="sleep" />
      <div className="volume" />
      <div className="camera" />
      <div className="screen">
        {children}
      </div>
    </div>
  );
};

GalaxyNote8.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
GalaxyNote8.defaultProps = {
  className: '',
  children: null
};

export default GalaxyNote8;
