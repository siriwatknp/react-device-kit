import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  select,
  boolean,
  text,
  button
} from '@storybook/addon-knobs/react';
import { withRelativeParent } from '../decorators'
import { IphoneX } from '../../src'
import './devices.min.css'

storiesOf('iPhone', module)
  .add('iPhone X', () => (
    <IphoneX>
      Hello
    </IphoneX>
  ))