const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const RecruitCommentController = require('../controllers/recruitcomments.controller');
const recruitcommentController = new RecruitCommentController();

router.post('/:recruitId', auth, recruitcommentController.createComment);
router.get('/:recruitId',auth, recruitcommentController.findAllComment)
router.delete('/:recruitcommentId',auth,recruitcommentController.deleteComment)

module.exports = router;
