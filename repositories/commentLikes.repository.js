const {User,CommentLike,Comment}= require('../models');
class CommentLikeRepository{
    
    findById = async({userId})=>{
        const findById = await User.findOne({
            where:{userId}
        })
        return findById
    }

    findCommentLike = async({userId,commentId})=>{
        const findCommentLike = await CommentLike.findOne({where:{userId,commentId}})
        return findCommentLike
    }

    createCommentLike = async({userId,commentId})=>{
        const createCommentLike = await CommentLike.create({userId,commentId})
        return createCommentLike;
    }

    deleteCommentLike = async({userId,commentId})=>{
        const deleteCommentLike = await CommentLike.destroy({where:{userId,commentId}})
        return deleteCommentLike;
    }

    plusCommentLike = async({commentId})=>{
        const plusCommentLike = await Comment.increment({likeCount:1},{where:{commentId}})
        return plusCommentLike
    }

    minusCommentLike = async({commentId})=>{
        const minusCommentLike = await Comment.increment({likeCount:-1},{where:{commentId}})
        return minusCommentLike
    }

}
module.exports = CommentLikeRepository