const express = require('express');
const Http = require('http');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const http = Http.createServer(app);
const port = 3000;
const routes = require('./routes');
const passport = require('passport');
const passportConfig = require('./passport');
const session = require('cookie-session');
passportConfig();

app.use(
    session({
        resave: false,
        saveUninitialized: false,
        secret: [
            process.env.KAKAO_SECRET,
            // process.env.GOOGLE_SECRET,
        ],
        cookie: {
            httpOnly: true,
            secure: false,
        },
    }),
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());;
app.use('/', routes);

http.listen(port, () => {
    console.log(`Start listen Server: ${port}`);
});

module.exports = http;

// const express = require ('express');
// const app = express();
// const routes = require('./routes/index');
// const PORT = 3000;

// app.use(express.json());
// app.use('/', routes);

// app.listen(PORT, ()=>{
//     console.log(PORT, "포트로 서버가 열렸습니다.");
// });

