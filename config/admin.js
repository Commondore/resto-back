module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'efd1779e686526d4fd3240877b27b932'),
  },
});
