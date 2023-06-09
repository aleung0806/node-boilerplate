# Express REST API Boilerplate

A template for building a REST API using Node, Express and Mongodb

Features:
- **NoSQL database** using [Mongoose]
- **Authentication** with cookie-based sessions
  - Role-based and action-based permissions
  - session storage using [redis]

- **Request validation** with [Joi]
- **Security** 
  - set security HTTP headers with [helmet]
  - sanitize request data with [xss-clean] and [sanitize-mongoose]
- **Docker support**
- **OpenAPI documentation** with swagger-ui-express 

## API Documentation
Go to 'http://localhost:3000/v1/docs' to view the documentation page generated using [swagger].

### 



Connect to other services:
- Google Login
- Auth0
- Email sending with AWS SES
- deploy with AWS

Todo:
- Docker support
- testing with jest

To investigate:
regex
mongoose guide - model vs doc vs collection etc
instance of, classes, prototype methods, etc
winston logging debug
postman for flows
swagger for autogenerated client
cypress for testing?

