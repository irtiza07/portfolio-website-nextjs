module.exports = {
  images: {
    domains: [
      "ds0fmzhunbzyk.cloudfront.net",
      "cdn.irtizahafiz.com",
      "i.ytimg.com", //youtube thumbnails
    ],
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/feed",
        destination: "/api/feed",
      },
    ];
  },
};
