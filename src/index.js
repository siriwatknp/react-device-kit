// this should be the entry point to your library
module.exports = {
  IPhoneX: require('./apple/IPhoneX').default,
  IPhone8: require('./apple/IPhone8').default,
  IPhone8Plus: require('./apple/IPhone8Plus').default,
  GalaxyNote8: require('./samsung/GalaxyNote8').default,
  Wallpaper: require('./components/Wallpaper').default,
  DeviceTransition: require('./helpers/DeviceTransition').default,
  deviceColors: require('./helpers/deviceColors').default,
  deviceBackgrounds: require('./helpers/deviceBackgrounds').default
};

