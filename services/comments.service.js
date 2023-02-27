const CommentRepository = require('../repositories/comments.repository')

class CommentService{
    commentRepository = new CommentRepository();
    //댓글 작성
    createComment = async({userId,communityId,comment})=>{
        const createComment = await this.commentRepository.createComment({
            userId,
            communityId,
            comment,
            
        });
        console.log('aa11111111111111111111aa',createComment)
        return createComment
    }

    findAllComment = async({userId,communityId})=>{
        const findAllComment = await this.commentRepository.findAllComment({
            userId,
            communityId,
        });
        // findAllComment.sort((a,b)=>{
        //     return b.createdAt - a.createdAt;
        // });
        return findAllComment
    }

    updateComment = async({userId,commentId,comment})=>{
        const updateComment = await this.commentRepository.updateComment({
            userId,
            commentId,
            comment
        });
        return updateComment
    }

    deleteComment = async({userId,commentId})=>{
        const deleteComment = await this.commentRepository.deleteComment({
            userId,
            commentId
        });
        return deleteComment
    }
}
module.exports = CommentService;