const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const CommunityController = require('../controllers/communities.controller');
const communityController = new CommunityController();
const Upload = require('../middlewares/ImgUploadMiddleware');
const upload = new Upload();

router.post('/', auth,upload.upload.single('image'), communityController.createCommunity);
router.get('/',auth, communityController.findAllCommunity)
router.get('/:communityId',auth, communityController.findCommunity)
router.put('/:communityId',auth,upload.upload.single('image'),communityController.updateCommunity)
router.delete('/:communityId',auth,upload.delete_file,communityController.deleteCommunity)

module.exports = router;
