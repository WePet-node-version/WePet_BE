const CommentLikeRepository = require('../repositories/commentLikes.repository');

class CommentLikeService{
    commentLikeRepository = new CommentLikeRepository();

    commentLike = async({userId,commentId})=>{
        const findById = await this.commentLikeRepository.findById({userId})
        if(!findById){
            throw new Error ('유저 정보가 없습니다.')
        }
        const findCommentLike = await this.commentLikeRepository.findCommentLike({userId,commentId})
        if(!findCommentLike){
            await this.commentLikeRepository.createCommentLike({userId,commentId})
            await this.commentLikeRepository.plusCommentLike({commentId})
        }

        if(findCommentLike){
            await this.commentLikeRepository.deleteCommentLike({userId,commentId})
            await this.commentLikeRepository.minusCommentLike({commentId})
        }
    }
}
module.exports = CommentLikeService