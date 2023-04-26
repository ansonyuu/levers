module.exports = {
  env: {
    NEXT_PUBLIC_EMAIL_PUBLIC_API: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_API,
    NEXT_PUBLIC_EMAIL_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
    NEXT_PUBLIC_EMAIL_SERVICE_ID: process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID
  },
  async redirects() {
    return [
      {
        source: "/xyzzy",
        destination: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        permanent: true
      },
      {
        source: "/library/introducing-spectech",
        destination: "/library/introducing-speculative-technologies",
        permanent: true
      },
      {
        source: "/programs/nanomodular-electronics",
        destination: "https://www.notion.so/spectech/Nanomodular-Electronics-7b78b981ae0c45eaaacc8cf778bdf751",
        permanent: true
      },
      {
        source: "/programs/molecular-additive-manufacturing",
        destination:"https://www.notion.so/spectech/Molecular-additive-manufacturing-229814c9f3d64df48663e66901a36b98",
        permanent: true
      },
      {
        source:"/donate",
        destination:"/?form=FUNDTHEFUTURE",
        permanent: true
      }

    ];
  }
};
