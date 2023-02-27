// const{CommunityImg, Community} = require('../models');
// const{Op} = require('sequelize');

// class CommunityImgRepository extends CommunityImg{
//     constructor(){
//         super();
//     }

//     findCommunity = async({communityId})=>{
//         const findCommunity = await Community.findOne({where:{communityId}});
//         return findCommunity;
//     };

//     createCommunityImg = async({communityId, communityImgs})=>{
//         for(let i =0; i<communityImgs.length; i++){
//             await CommunityImg.create({
//                 communityId,
//                 communityImg:communityImgs[i],
//             });
//         }
//     };

//     findCommunityImg = async({communityId})=>{
//         const findCommunityImg =await CommunityImg.findAll({
//             where:{communityId},
//             attributes: ['communityImg'],
//             raw:true,
//         });
//         return findCommunityImg;
//     }

//     deleteCommunityImg = async({communityImg})=>{
//         for (let i = 0; i< communityImg.length; i++){
//             await CommunityImg.destroy({where:{communityImg:communityImg[i].communityImg}})
//         }
//     }
// }
// module.exports = CommunityImgRepository