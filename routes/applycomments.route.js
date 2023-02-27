const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const ApplyCommentController = require('../controllers/applycomments.controller');
const applycommentController = new ApplyCommentController();

router.post('/:applyId', auth, applycommentController.createComment);
router.get('/:applyId',auth, applycommentController.findAllComment)
router.delete('/:applycommentId',auth,applycommentController.deleteComment)

module.exports = router;
