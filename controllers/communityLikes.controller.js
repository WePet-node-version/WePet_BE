const CommunityLikeService = require('../services/communityLikes.service');

class CommunityLikeController{
    communityLikeService = new CommunityLikeService();

    updateLike = async(req,res,next)=>{
        try{
            const{userId}=res.locals.user;
            const{communityId}=req.params;
            if(!userId||!communityId){
                throw new Error('존재하지 않은 정보입니다.')
            }
            const putLike = await this.communityLikeService.putLike({userId,communityId})
            res.status(201).json({data:putLike})
        }catch(error){
            next(error)
        }
    }
} 
module.exports = CommunityLikeController