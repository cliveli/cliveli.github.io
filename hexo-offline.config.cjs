module.exports = {
  maximumFileSizeToCacheInBytes: 5242880,
  globPatterns: [
    'public/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff,woff2}'
  ],
  globDirectory: 'public',
  swDest: "public/service-worker.js",
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|gif|css|js|html|woff2?)$/,
      handler: 'CacheFirst', // Caches assets for offline use
      options: {
        cacheName: 'hexo-assets',
        expiration: {
          maxEntries: 100, // Limit the number of cached items
          maxAgeSeconds: 30 * 24 * 60 * 60, // Cache items for 30 days
        },
      },
    },
  ],
};
