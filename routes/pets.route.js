const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const PetController = require('../controllers/pets.controller');
const petController = new PetController();

router.post('/', auth, petController.createPet);
router.get('/:petId',auth,petController.findPet);

module.exports = router;
