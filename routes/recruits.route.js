const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const RecruitController = require('../controllers/recruits.controller');
const recruitController = new RecruitController();

router.post('/', auth, recruitController.createRecruit);
router.get('/',auth,recruitController.findAllRecruit);
router.get('/:recruitId',auth,recruitController.findRecruit);
router.put('/:recruitId',auth,recruitController.updateRecruit);
router.delete('/:recruitId',auth, recruitController.deleteRecruit);

module.exports = router;
