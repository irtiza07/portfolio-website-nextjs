module.exports = {
  images: {
    domains: ["i.ytimg.com", "irtizahafiz.com"],
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
