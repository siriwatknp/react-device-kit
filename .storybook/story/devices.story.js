import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  select,
  object,
  boolean,
  text,
  button,
  number
} from '@storybook/addon-knobs/react';
import {
  IPhone8,
  IPhoneX,
  IPhone8Plus,
  GalaxyNote8,
  Wallpaper,
} from '../../src';
import {
  iPhone8Wallpapers,
  iPhoneXWallpapers,
} from '../../src/assets'
import './devices.min.css';
import { withDeviceTransition } from './withDeviceTransition';

storiesOf('Apple', module)
  .addDecorator(withDeviceTransition())
  .add('iPhone X', () => (
    <IPhoneX>
      <Wallpaper
        css={object('css', Wallpaper.backgrounds.iphonex[0])}
        image={select('image', [undefined, ...iPhoneXWallpapers], undefined)}
      />
    </IPhoneX>
  ))
  .add('iPhone8', () => (
    <IPhone8 color={select('color', IPhone8.colors, IPhone8.colors[0])}>
      <Wallpaper
        css={object('css', Wallpaper.backgrounds.iphone8[0])}
        image={select('image', [undefined, ...iPhone8Wallpapers], undefined)}
      />
    </IPhone8>
  ))
  .add('iPhone8 Plus', () => (
    <IPhone8Plus color={select('color', IPhone8.colors, IPhone8.colors[0])}>
      <Wallpaper
        css={object('css', Wallpaper.backgrounds.iphone8plus[0])}
      />
    </IPhone8Plus>
  ));

storiesOf('Samsung', module)
  .addDecorator(withDeviceTransition())
  .add('Galaxy Note 8', () => (
    <GalaxyNote8>
      <Wallpaper
        css={object('css', Wallpaper.backgrounds.galaxynote8[0])}
      />
    </GalaxyNote8>
  ));