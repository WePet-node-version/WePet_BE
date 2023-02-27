const express = require('express');
const router = express.Router();
const passport = require('passport');

router.use('/users',require('./users.route'));
router.use('/communities',require('./communities.route'));
router.use('/comments',require('./comments.route'));
router.use('/communityLikes',require('./communityLikes.route'));
router.use('/commentLikes',require('./commentLikes.route'))
router.use('/',require('./kakao.route'));
router.use('/pets',require('./pets.route'))
router.use('/recruits',require('./recruits.route'))
router.use('/applies',require('./applies.route'))
router.use('/recruitcomments',require('./recruitcomments.route'));
router.use('/applycomments',require('./applycomments.route'))
module.exports =router;

