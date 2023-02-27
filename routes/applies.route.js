const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const ApplyController = require('../controllers/applies.controller');
const applyController = new ApplyController();

router.post('/', auth, applyController.createApply);
router.get('/',auth,applyController.findAllApply);
router.get('/:applyId',auth,applyController.findApply);
router.put('/:applyId',auth,applyController.updateApply);
router.delete('/:applyId',auth, applyController.deleteApply);

module.exports = router;
