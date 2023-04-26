module.exports = {
  env: {
    NEXT_PUBLIC_EMAIL_PUBLIC_API: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_API,
    NEXT_PUBLIC_EMAIL_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
    NEXT_PUBLIC_EMAIL_SERVICE_ID: process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID
  },
  async redirects() {
    return [];
  }
};
