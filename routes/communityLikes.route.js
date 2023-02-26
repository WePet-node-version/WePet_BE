const express = require('express');
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const CommunityLikeController = require('../controllers/communityLikes.controller');      
const communityLikeController = new CommunityLikeController();  

router.put('/communities/:communityId/likes', auth,communityLikeController.updateLike);

module.exports = router;


