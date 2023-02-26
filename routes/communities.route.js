const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const CommunityController = require('../controllers/communities.controller');
const communityController = new CommunityController();

router.post('/', auth, communityController.createCommunity);
router.get('/',auth, communityController.findAllCommunity)
router.get('/:communityId',auth, communityController.findCommunity)
router.put('/:communityId',auth,communityController.updateCommunity)
router.delete('/:communityId',auth,communityController.deleteCommunity)

module.exports = router;
