import React from 'react';
import {
  select,
} from '@storybook/addon-knobs/react';
import DeviceTransition from '../../src/helpers/DeviceTransition'

export const withDeviceTransition = (props) => storyFn => {
  return (
    <DeviceTransition scale={select('scale', [0.5, 0.75, 1], 0.75)} {...props}>
      {storyFn()}
    </DeviceTransition>
  );
};
