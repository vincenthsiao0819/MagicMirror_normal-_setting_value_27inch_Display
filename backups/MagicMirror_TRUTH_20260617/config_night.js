let config = {
  address: '0.0.0.0',
  port: 8080,
  basePath: '/',
  ipWhitelist: ['127.0.0.1', '::ffff:127.0.0.1', '::1', '192.168.50.0/24'],
  language: 'zh-tw',
  locale: 'zh-tw',
  timeFormat: 24,
  units: 'metric',
  modules: []
};
if (typeof module !== 'undefined') { module.exports = config; }