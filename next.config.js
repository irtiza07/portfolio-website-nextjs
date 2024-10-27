module.exports = {
  images: {
    domains: [
      "i.ytimg.com",
      "irtizahafiz.com",
      "icm.aexp-static.com",
      "ecm.capitalone.com",
      "creditcards.wellsfargo.com",
      "creditcards.chase.com",
      "ecm.capitalone.com",
    ],
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
