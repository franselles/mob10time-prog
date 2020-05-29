module.exports = {
  pwa: {
    lang: 'es-ES',
    name: 'CONTROL HORA',
    short_name: 'HORA',
    themeColor: '#f37321',
    background_color: '#e7e552',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    display: 'standalone',
    orientation: 'portrait',
    workboxOptions: {
      skipWaiting: true,
    },
  },
  productionSourceMap: false,
};
