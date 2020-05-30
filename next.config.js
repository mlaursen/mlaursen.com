const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/mlaursen.com/' : '',
  exportPathMap: () => ({
    '/': { page: '/' },
  }),
};
