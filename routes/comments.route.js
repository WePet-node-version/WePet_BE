const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const CommentController = require('../controllers/comments.controller');
const commentController = new CommentController();

router.post('/:communityId', auth, commentController.createComment);
router.get('/:communityId',auth, commentController.findAllComment)
router.put('/:commentId',auth,commentController.updateComment)
router.delete('/:commentId',auth,commentController.deleteComment)

module.exports = router;
