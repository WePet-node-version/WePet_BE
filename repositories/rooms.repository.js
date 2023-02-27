// const { Room, Chat, GroupUser } = require('../models');
// const { Op } = require('sequelize');
// const moment = require('moment');

// require('moment-timezone');
// moment.tz.setDefault('Asia/Seoul');
// const Sq = require('sequelize');
// const Sequelize = Sq.Sequelize;

// class RoomRepository extends Room {
//   constructor() {
//     super();
//   }
//   //*roomId 가져오기 room 없으면 생성
//   findRoomId = async ({ userId, sender }) => {
//     const [findRoomId, created] = await Room.findOrCreate({
//       where: { userId:userId, sender: sender},
//       dafaults: {
//         userId: userId,
//         sender: sender,
//       },
//     });
//     return findRoomId;
//   };
//   //* 그룹유저찾기
//   findGroupUser = async ({ userId }) => {
//     const findGroupUser = await User.findOne({
//       where: { userId },
//     });
//     return findGroupUser;
//   };
//   //*채팅내용 불러오기
//   getChat = async ({ roomId, offset, pageSize }) => {
//     const { count, rows } = await Chat.findAndCountAll({
//       where: { roomId },
//       offset: offset,
//       limit: parseInt(pageSize),
//       attributes: ['userId', 'message', 'createdAt'],
//       order: [['createdAt', 'DESC']],
//       raw: true,
//     });
//     console.log('bugstop::::::::::::::::::::::::::::', rows);
//     return rows;
//   };
//   //*존재하는 룸 찾기
//   existRoom = async ({ roomId }) => {
//     const existRoom = await Room.findOne({ where: { roomId } });
//     return existRoom;
//   };

//   //*채팅 저장하기
//   saveChat = async ({ roomId, userId, message }) => {
//     const saveChat = await Chat.create({
//       roomId,
//       userId,
//       message,
//       createdAt: moment().subtract(9, 'h').format('YYYY-MM-DD HH:mm:ss'),
//     });
//     return saveChat;
//   };

//   //*안읽은 메세지(roomId 조회)
//   unreadChat = async ({ sender }) => {
//     const unreadChat = await Room.findOne({
//       where: {
//         sender,
//         receiver,
//       },
//     });
//     return unreadChat;
//   };

//   //*안읽은 메세지
//   countUnread = async ({ roomId, timestamps }) => {
//     const countUnread = await Chat.findAll({
//       where: {
//         roomId,
//         createdAt: {
//           [Op.gt]: new Date(moment(+timestamps)),
//         },
//       },
//       raw: true,
//     });
//     console.log('dddddddddddddddddddddddddddddddddddddd', countUnread);
//     return countUnread;
//   };
//   //*본인 groupUser정보
//   findUser = async ({ userId }) => {
//     const findUser = await User.findOne({ where: {  userId } });
//     return findUser;
//   };
//   //*상대유저 groupUserId찾기
//   opponentUser = async ({ roomId }) => {
//     const opponentUser = await Room.findOne({ where: { roomId } });
//     return opponentUser;
//   };
//   //*상대유저 정보 가져오기
//   findUserInfo = async ({ userId }) => {
//     const findUserInfo = await User.findOne({
//       where: { userId },
//     });
//     return findUserInfo;
//   };
// }
// module.exports = RoomRepository;
