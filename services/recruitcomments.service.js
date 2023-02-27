const RecruitCommentRepository = require('../repositories/recruitcomments.repository')

class RecruitCommentService{
    recruitcommentRepository = new RecruitCommentRepository();
    //댓글 작성
    createComment = async({userId,recruitId,comment})=>{
        const createComment = await this.recruitcommentRepository.createComment({
            userId,
            recruitId,
            comment,
        });
        console.log('aa11111111111111111111aa',createComment)
        return createComment
    }

    findAllComment = async({userId,recruitId})=>{
        const findAllComment = await this.recruitcommentRepository.findAllComment({
            userId,
            recruitId,
        });
        // findAllComment.sort((a,b)=>{
        //     return b.createdAt - a.createdAt;
        // });
        return findAllComment
    }

    deleteComment = async({userId,recruitcommentId})=>{
        const deleteComment = await this.recruitcommentRepository.deleteComment({
            userId,
            recruitcommentId
        });
        return deleteComment
    }
}
module.exports = RecruitCommentService;