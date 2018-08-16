/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { cx } from 'react-emotion';

const IphoneX = styled(({ children, className }) => {
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
})({
  '.marvel-device, .marvel-device div, :before, :after': {
    transition: 'all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)'
  },
  '.screen': {
    position: 'relative',
    '.lock-screen-notification': {
      position: 'absolute',
      left: 8,
      right: 8,
      top: 205
    }
  }
});

IphoneX.propTypes = {
  children: PropTypes.node
};
IphoneX.defaultProps = {
  children: null
};

export default IphoneX;
