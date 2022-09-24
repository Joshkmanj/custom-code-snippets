const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// const sessionMiddleware = require('./modules/session-middleware');
// const passport = require('./strategies/user.strategy');

// Body parser middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
// app.use(sessionMiddleware);

// start up passport sessions
// app.use(passport.initialize());
// app.use(passport.session());

// // Route includes
const NameOneRouter = require('./routes/NameOne.router');
const NameTwoRouter = require('./routes/NameTwo.router');
const NameThreeRouter = require('./routes/NameThree.router');

/* Routes */
app.use('/api/NameOne', NameOneRouter); // This route handles NameOne related things.
app.use('/api/NameTwo', NameTwoRouter); // This route handles NameTwo related things.
app.use('/api/NameThreethree', NameThreeRouter); // This route handles NameThree related things.

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
console.log(`Listening on port: PORT`);
});