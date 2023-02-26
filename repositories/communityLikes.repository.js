const {CommunityLike,User,Community} = require('../models');
class CommunityLikeRepository{
    findById =async({userId})=>{
        const findById = await User.findOne({where:{userId}})
        return findById
    }

    createLike = async({userId,communityId})=>{
        const createLike = await CommunityLike.create({userId,communityId})
        return createLike;
    }

    deleteLike = async({userId,communityId})=>{
        const deleteLike = await CommunityLike.destroy({where:{userId,communityId}})
        return deleteLike;
    }

    plusLike = async({communityId})=>{
        const plusLike = await Community.increment({likeCount:1},{where:{communityId}})
        return plusLike
    }

    minusLike = async({communityId})=>{
        const minusLike = await Community.increment({likeCount:-1},{where:{communityId}})
        return minusLike
    }

    findLike = async({userId,communityId})=>{
        const findLike = await CommunityLike.findOne({where:{userId,communityId}})
        return findLike
    }
}
module.exports=CommunityLikeRepository