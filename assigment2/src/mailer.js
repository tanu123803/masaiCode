const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Dish Booking API',
      version: '1.0.0',
      description: 'API for Dish Booking System'
    },
    servers: [{ url: process.env.BACKEND_URL || 'http://localhost:3000' }]
  },
  apis: ['./src/routes/*.js', './src/controllers/*.js'] // use JSDoc comments in route files
};

const spec = swaggerJsdoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));
};
