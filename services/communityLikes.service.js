const CommunityLikeRepository = require('../repositories/communityLikes.repository')

class CommunityLikeService{
    communityLikeRepository = new CommunityLikeRepository();

    putLike = async({userId,communityId})=>{
        const findLike = await this.communityLikeRepository.findLike({userId,communityId})
        if(!findLike){
            await this.communityLikeRepository.createLike({userId,communityId})
            await this.communityLikeRepository.plusLike({communityId})
        }
        if(findLike){
            await this.communityLikeRepository.deleteLike({userId,communityId})
            await this.communityLikeRepository.minusLike({communityId})
        }
    }
}
module.exports = CommunityLikeService;