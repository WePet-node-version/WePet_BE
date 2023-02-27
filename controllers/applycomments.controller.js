const ApplyCommentService = require('../services/applycomments.service')

class ApplyCommentController{
    applycommentService = new ApplyCommentService();

    createComment = async(req,res,next)=>{
        try{
            const {userId} = res.locals.user;
            const {applyId}=req.params;
            const {comment} = req.body;
            const createComment = await this.applycommentService.createComment({userId,applyId,comment})
            res.status(201).json({data:createComment});
        }catch(error){
            next(error);
        }
    }

    findAllComment = async(req,res,next)=>{
        try{
            const {userId} = res.locals.user;
            const {applyId} = req.params;
            const findAllComment = await this.applycommentService.findAllComment({userId,applyId})
            res.status(200).json({data:findAllComment})
        }catch(error){
            next(error);
        }
    }

    deleteComment=async(req,res,next)=>{
        try{
            const{userId}=res.locals.user;
            const{applycommentId}=req.params;
            const deleteComment = await this.applycommentService.deleteComment({userId,applycommentId})
            res.status(200).json({data:deleteComment,message:'댓글을 삭제하였습니다.'})
        }catch(error){
            next(error)
        }
    }
}
module.exports = ApplyCommentController;