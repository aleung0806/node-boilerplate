const express = require("express");
const helmet = require("helmet");
const logger = require("./utils/logger")
const requestLogger = require('./middlewares/requestLogger')
const errorHandler = require('./middlewares/error')
require('express-async-errors');

// const morgan = require('morgan')

// const redis = require("redis");

// const requestLogger = require("./utils/middleware/requestLogger");
// const unknownEndpoint = require("./utils/middleware/unknownEndpoint");
// const errorHandler = require("./utils/middleware/errorHandler");
// const authenticate = require("./utils/middleware/authenticate");
const authRouter = require("./routes/v1/auth.route");

const morgan = require('./middlewares/morgan')
// const userRouter = require("./src/routes/user.route");

// const session = require("express-session");
// const redisStore = require("connect-redis")(session);

// const redisClient = redis.createClient({
//   host: "localhost",
//   port: 6379,
//   legacyMode: true,
// });

// redisClient
//   .connect()
//   .then(() => {
//     console.log("connected to redis");
//   })
//   .catch(() => {
//     console.log("not connected to redis");
//   });

// const store = new redisStore({ client: redisClient });

const app = express();
app.use(morgan);

app.use(helmet());
app.use(express.json());

app.use(requestLogger);


app.use('/v1', authRouter);
app.use(errorHandler)


// app.use(
//   session({
//     store: store,
//     secret: "mySecret",
//     saveUninitialized: false,
//     resave: false,
//     name: "sessionId",
//     cookie: {
//       secure: false,
//       httpOnly: false,
//       maxAge: 1000 * 60 * 60,
//       sameSite: "lax",
//     },
//   })
// );

// app.use(requestLogger);
// app.use("/auth", authRouter);
// app.use(authenticate);
// app.use("/user", userRouter);
// app.use(errorHandler);
// app.use(unknownEndpoint);

module.exports = app;
