const ApplyCommentRepository = require('../repositories/applycomments.repository')

class ApplyCommentService{
    applycommentRepository = new ApplyCommentRepository();
    //댓글 작성
    createComment = async({userId,applyId,comment})=>{
        const createComment = await this.applycommentRepository.createComment({
            userId,
            applyId,
            comment
        });
        console.log('aa11111111111111111111aa',createComment)
        return createComment
    }

    findAllComment = async({userId,applyId})=>{
        const findAllComment = await this.applycommentRepository.findAllComment({
            userId,
            applyId,
        });
        // findAllComment.sort((a,b)=>{
        //     return b.createdAt - a.createdAt;
        // });
        return findAllComment
    }

    deleteComment = async({userId,applycommentId})=>{
        const deleteComment = await this.applycommentRepository.deleteComment({
            userId,
            applycommentId
        });
        return deleteComment
    }
}
module.exports = ApplyCommentService;