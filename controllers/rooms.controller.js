// const RoomService = require('../services/rooms.service');

// class RoomController {
//   roomService = new RoomService();

//   findRoomId = async (req, res, next) => {
//     try {
//         const { sender } = req.query;
//         const { userId } = res.locals.user;

//         if (!userId || !sender) {
//             throw new Error('잘못된 요청입니다.');
//         }
//         const findRoomId = await this.roomService.findRoomId({
//             sender,
//             userId,
//         });
//         res.status(200).json({ ok: true, data: findRoomId });
//     } catch (error) {
//       next(error);
//     }
//   };
//   //*채팅내역 불러오기
//   getChat = async (req, res, next) => {
//     try {
//       const { userId } = res.locals.user;
//       const { roomId } = req.params;
//       const { page, pageSize } = req.query;
//       const getChat = await this.roomService.getChat({
//         userId,
//         roomId,
//         page,
//         pageSize,
//       });
//       res.status(200).json({ ok: true, getChat });
//     } catch (error) {
//       next(error);
//     }
//   };
//   //*채팅 내용 저장하기
//   saveChat = async (req, res, next) => {
//     try {
//       const { roomId } = req.params;
//       const { userId, message } = req.body;
//       if (!roomId || !userId || !message) {
//         throw new Error('잘못된 요청입니다.');
//       }
//       const saveChat = await this.roomService.saveChat({
//         roomId,
//         userId,
//         message,
//       });
//       res.status(201).json({ data:saveChat });
//     } catch (error) {
//       next(error);
//     }
//   };

//   findChatUser = async (req, res, next) => {
//     try {
//       const { roomId } = req.params;
//       const { userId } = res.locals.user;
//       if (!roomId || !userId) {
//         throw new Error('잘못된 요청입니다.');
//       }
//       const findChatUser = await this.roomService.findChatUser({
//         roomId,
//         userId,
//       });
//       res.status(200).json({ ok: true, data: findChatUser });
//     } catch (error) {
//       next(error);
//     }
//   };
// }
// module.exports = RoomController;
