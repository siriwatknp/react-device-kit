/* eslint-disable arrow-body-style,function-paren-newline */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { cx } from 'react-emotion';
import deviceBackgrounds from '../helpers/deviceBackgrounds';

const Wallpaper = styled(
  ({ className }) => {
    return (
      <div className={cx('wallpaper', className)} />
    );
  }
)(({ image, css }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  zIndex: -1,
  ...image ? {
    backgroundImage: `url("${image}")`,
    backgroundSize: 'cover'
  } : css
}));

Wallpaper.backgrounds = deviceBackgrounds;
Wallpaper.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string
};
Wallpaper.defaultProps = {
  className: '',
  image: ''
};

export default Wallpaper;
