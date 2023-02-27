const ApplyService = require('../services/applies.service');

class ApplyController{
    applyService = new ApplyService();

    createApply = async(req,res,next)=>{
        try{
            const {userId}=res.locals.user;
            const {title,content,nickname} = req.body;
            const createApply = await this.applyService.createApply({userId,title,content,nickname});
            res.status(200).json({data:createApply});
        }catch(error){
            next(error);
        }
    }

    findAllApply = async(req,res,next)=>{
        try{
            const {userId} =res.locals.user;
            const findAllApply = await this.applyService.findAllApply({userId});
            res.status(200).json({data:findAllApply}); 
        }catch(error){
            next(error);
        }
    }
    
    findApply = async(req,res,next)=>{
        try{
            const {userId} = res.locals.user;
            const {applyId} =req.params;
            if(!applyId){
                throw new Error('존재하지 않는 게시글입니다.')
            }
            const findApply = await this.applyService.findApply({userId,applyId});
            res.status(200).json({data:findApply})
        }catch(error){
            next(error);
        }
    }

    updateApply = async(req,res,next)=>{
        try{
            const {userId} = res.locals.user;
            const {applyId} = req.params;
            const {title,content}=req.body;
            if(!applyId){
                throw new Error('존재하지 않는 게시글입니다.')
            }
            const updateApply = await this.applyService.updateApply({userId,applyId,title,content});
            res.status(200).json({data:updateApply})
        }catch(error){
            next(error);
        }
    }

    deleteApply = async(req,res,next)=>{
        try{
            const{userId}=res.locals.user;
            const{applyId}=req.params;
            const deleteApply = await this.applyService.deleteApply({applyId,userId})
            res.status(200).json({data:deleteApply});
        }catch(error){
            next(error);
        }
    }
}
module.exports = ApplyController;