const express = require('express');
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const CommentLikeController = require('../controllers/commentLikes.controller');      
const commentLikeController = new CommentLikeController();  

router.put('/comments/:commentId/likes', auth,commentLikeController.updateCommentLike);

module.exports = router;


