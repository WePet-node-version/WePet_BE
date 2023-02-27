const CommentLikeService = require('../services/commentLikes.service');

class CommentLikeController{
    commentLikeService = new CommentLikeService();

    updateCommentLike = async(req,res,next)=>{
        try{
            const {userId} = res.locals.user;
            const {commentId} = req.params;
            if(!userId||!commentId){
                throw new Error('존재하지 않은 정보입니다.')
            }
            const commentLike = await this.commentLikeService.commentLike({userId,commentId})
            res.status(201).json({data:commentLike})
        }catch(error){
            next(error)
        }
    }
}
module.exports = CommentLikeController