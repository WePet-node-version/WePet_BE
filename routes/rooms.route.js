// const express = require('express');
// const router = express.Router();
// const auth = require('../middlewares/authMiddleware');
// const { redisGet } = require('../middlewares/cacheMiddleware');

// const RoomController = require('../controllers/rooms.controller');
// const roomController = new RoomController();

// //*roomId 가져오기 없으면 만듦
// router.get('/rooms', auth, roomController.findRoomId);
// //*채팅내역 불러오기
// router.get('/rooms/:roomId', auth, roomController.getChat);
// //*채팅내용 저장하기
// router.post('/rooms/:roomId', auth, roomController.saveChat);
// //*상대 유저 정보 보내주기
// router.get('/rooms/:roomId', auth, roomController.findChatUser);
// module.exports = router;
