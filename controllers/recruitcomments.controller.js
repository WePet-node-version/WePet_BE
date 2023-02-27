const RecruitCommentService = require('../services/recruitcomments.service')

class RecruitCommentController{
    recruitcommentService = new RecruitCommentService();

    createComment = async(req,res,next)=>{
        try{
            const {userId} = res.locals.user;
            const {recruitId}=req.params;
            const {comment} = req.body;
            const createComment = await this.recruitcommentService.createComment({userId,recruitId,comment})
            res.status(201).json({data:createComment});
        }catch(error){
            next(error);
        }
    }

    findAllComment = async(req,res,next)=>{
        try{
            const {userId} = res.locals.user;
            const {recruitId} = req.params;
            const findAllComment = await this.recruitcommentService.findAllComment({userId,recruitId})
            res.status(200).json({data:findAllComment})
        }catch(error){
            next(error);
        }
    }

    deleteComment=async(req,res,next)=>{
        try{
            const{userId}=res.locals.user;
            const{recruitcommentId}=req.params;
            const deleteComment = await this.recruitcommentService.deleteComment({userId,recruitcommentId})
            res.status(200).json({data:deleteComment,message:'댓글을 삭제하였습니다.'})
        }catch(error){
            next(error)
        }
    }
}
module.exports = RecruitCommentController