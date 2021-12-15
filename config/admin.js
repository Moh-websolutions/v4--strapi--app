module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '331f0e025df0f2dc9c81802183b2671f'),
  },
});
