const { readFileSync } = require('fs');
const { join, dirname } = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      //filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      host: env('DATABASE_HOST', 'localhost'),
      port: env('DATABASE_PORT', '5432'),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USER', 'strapi'),
      password: env('DATABASE_PASSWORD', 'strapi'),
      schema: env('DATABASE_SCHEMA', 'public'),
      ssl: {
        ca: readFileSync(join(dirname(__dirname), 'certif', env('DATABASE_SSL_CA', 'certif.crt')))
      }
    },
    useNullAsDefault: true,
  },
});
