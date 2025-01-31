module.exports = {
  images: {
    domains: ["ds0fmzhunbzyk.cloudfront.net", "cdn.irtizahafiz.com"],
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
