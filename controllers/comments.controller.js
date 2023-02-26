const CommentService = require('../services/comments.service')

class CommentController{
    commentService = new CommentService();

    createComment = async(req,res,next)=>{
        try{
            const {userId} = res.locals.user;
            const {communityId}=req.params;
            const {comment} = req.body;
            const createComment = await this.commentService.createComment({userId,communityId,comment})
            console.log(req.body,'aaaaaaaaaaaa')
            res.status(201).json({data:createComment});
        }catch(error){
            next(error);
        }
    }

    findAllComment = async(req,res,next)=>{
        try{
            const {userId} = res.locals.user;
            const {communityId} = req.params;
            const findAllComment = await this.commentService.findAllComment({userId,communityId})
            res.status(200).json({data:findAllComment})
        }catch(error){
            next(error);
        }
    }

    updateComment = async(req,res,next)=>{
        try{
            const {userId}=res.locals.user;
            const {commentId} = req.params;
            const {comment} = req.body;
            const updateComment = await this.commentService.updateComment({userId,commentId,comment})
            res.status(200).json({data:updateComment,message:'댓글을 수정하였습니다.'})
        }catch(error){
            next(error);
        }
    }

    deleteComment=async(req,res,next)=>{
        try{
            const{userId}=res.locals.user;
            const{commentId}=req.params;
            const deleteComment = await this.commentService.deleteComment({userId,commentId})
            res.status(200).json({data:deleteComment,message:'댓글을 삭제하였습니다.'})
        }catch(error){
            next(error)
        }
    }
}
module.exports = CommentController;