// const CommunityImgRepository = require('../repositories/communityImgs.repository')

// class CommunityImgService{
//     constructor(){
//         this.communityImgRepository = new CommunityImgRepository();
//     }

//     //이미지 생성
//     createCommunityImg = async({communityId,images})=>{
//         const findCommunity = await this.communityImgRepository.findCommunity({communityId});
//         if(!findCommunity){
//             throw new Error('게시글이 존재하지 않습니다.')
//         }
//         const communityImgs = [];
//         for(let i =0; i< images.length; i++){
//             const communityImage = images[i].location;
//             communityImgs.push(communityImage.replace(/\/original\//, '/WePet/'));
//         }
//         const createCommunityImg = await this.communityImgRepository.createCommunityImg({
//             communityId,
//             communityImgs,
//         });
//         return createCommunityImg;
//     }

//     confirmCommunityImg = async ({communityId,image})=>{
//         const findCommunity = await this.communityImgRepository.findCommunity({communityId});
//         if(!findCommunity){
//             throw new Error('게시글이 존재하지 않습니다.')

//         }
//         const findCommunityImg = await this.communityImgRepository.findCommunityImg({
//             communityId,
//         });
//         if(findCommunityImg.length == image.length)return;
//         const delet = findCommunityImg.filter((a)=>!image.includes(a.communityImg));
//         const deleteCommunityImg = await this.communityImgRepository.deleteCommunityImg({
//             communityImage:delet,
//         });
//         return deleteCommunityImg
//     }

//     updateCommunityImg = async({communityId,images})=>{
//         const findCommunity = await this.communityImgRepository.findCommunity({communityId});
//         if(!findCommunity){
//             throw new Error('게시글이 존재하지 않습니다.')
//         }
//         const communityImgs = [];
//         for(let i = 0; i < images.length; i++){
//             const communityImage = images[i].location;
//             communityImgs.push(communityImage.replace(/\/original\//, '/WePet/'));
//         }
//         const createCommunityImg = await this.communityImgRepository.createCommunityImg({
//             communityId,
//             communityImgs,
//         });
//         return createCommunityImg;
//     }
// }
// module.exports = CommunityImgService