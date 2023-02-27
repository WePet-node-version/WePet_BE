// const RoomRepository = require('../repositories/rooms.repository');

// class RoomService {
//   roomRepository = new RoomRepository();
//   //*roomId 찾기 없으면 만들어서 가져오기
//   findRoomId = async ({ groupId, sender, userId }) => {
//     const findGroupUser = await this.roomRepository.findGroupUser({
//       userId,
//     });
//     if (!findGroupUser) {
//       throw new Error('잘못된 요청입니다.');
//     }
//     const findRoomId = await this.roomRepository.findRoomId({
//       groupId,
//       sender,
//     });
//     return findRoomId.roomId;
//   };
//   //*채팅내역 불러오기
//   getChat = async ({ roomId, page, pageSize }) => {
//     const offset = (parseInt(page) - 1) * parseInt(pageSize);
//     const getChat = await this.roomRepository.getChat({
//       roomId,
//       offset,
//       pageSize,
//     });
//     if (!getChat) {
//       throw new ValidationError('채팅내역이 없습니다.');
//     }
//     return getChat;
//   };
//   //*채팅내용 저장하기
//   saveChat = async ({ roomId, userId, message }) => {
//     const existRoom = await this.roomRepository.existRoom({ roomId });
//     if (!existRoom) {
//       throw new ValidationError('존재하지 않는 채팅방입니다.');
//     }
//     const saveChat = await this.roomRepository.saveChat({
//       roomId,
//       userId,
//       message,
//     });
//     return saveChat;
//   };

//   //*상대 유저 정보 보내주기(groupUserId,img(ori포함),nick)
//   findChatUser = async ({roomId, userId }) => {
//     //*본인 groupUserId 가져오기
//     const findUser = await this.roomRepository.findUser({ userId });
//     if (!findUser) {
//       throw new ValidationError('유저정보가 없습니다.');
//     }
//     const groupUserId = findUser.groupUserId;
//     //*상대유저 groupUserId찾기
//     const opponentUser = await this.roomRepository.opponentUser({
//       roomId,
//     });
//     if (!opponentUser) {
//       throw new ValidationError('룸정보가 존재하지 않습니다.');
//     }
//     let getGroupUserId;
//     // if (opponentUser.sender === groupUserId) {
//       // getGroupUserId = opponentUser.receiver;
//     // } else {
//       // getGroupUserId = opponentUser.sender;
//     // }
//     //*상대유저 정보 가져오기
//     const findUserInfo = await this.roomRepository.findUserInfo({
//       userId,
//     });
//     // const image = findUserInfo.groupAvatarImg;
//     // const originalUrl = image.replace(/\/statUS\//, '/original/');
//     const result = {
//       userId: findUserInfo.userId,
//       // groupUserNickname: findUserInfo.groupUserNickname,
//       // groupAvatarImg: image,
//       // originalUrl,
//     };
//     return result;
//   };
// }
// module.exports = RoomService;
