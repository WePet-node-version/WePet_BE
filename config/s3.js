const {
    S3
} = require("@aws-sdk/client-s3");
require('dotenv').config();

const s3 = new S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'ap-northeast-2',
});

module.exports = s3;
