import styled from 'react-emotion';
import PropTypes from 'prop-types';

const defaultTransition = 'all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';

const DeviceTransition = styled('div')(({ transition, scale }) => ({
  ...scale && {
    transform: `scale(${scale})`
  },
  '.marvel-device, .marvel-device div, .marvel-device:before, .marvel-device:after': {
    transition
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
}));
DeviceTransition.propTypes = {
  transition: PropTypes.string,
  scale: PropTypes.number,
  style: PropTypes.shape({})
};
DeviceTransition.defaultProps = {
  transition: defaultTransition
};

export default DeviceTransition;
