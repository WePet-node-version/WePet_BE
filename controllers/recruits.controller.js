const RecruitService = require('../services/recruits.service');

class RecruitController{
    recruitService = new RecruitService();

    createRecruit = async(req,res,next)=>{
        try{
            const {userId}=res.locals.user;
            const {title,content} = req.body;
            const createRecruit = await this.recruitService.createRecruit({userId,title,content});
            res.status(200).json({data:createRecruit});
        }catch(error){
            next(error);
        }
    }

    findAllRecruit = async(req,res,next)=>{
        try{
            const {userId} =res.locals.user;
            const findAllRecruit = await this.recruitService.findAllRecruit({userId});
            res.status(200).json({data:findAllRecruit}); 
        }catch(error){
            next(error);
        }
    }
    
    findRecruit = async(req,res,next)=>{
        try{
            const {userId} = res.locals.user;
            const {recruitId} =req.params;
            if(!recruitId){
                throw new Error('존재하지 않는 게시글입니다.')
            }
            const findRecruit = await this.recruitService.findRecruit({userId,recruitId});
            res.status(200).json({data:findRecruit})
        }catch(error){
            next(error);
        }
    }

    updateRecruit = async(req,res,next)=>{
        try{
            const {userId} = res.locals.user;
            const {recruitId} = req.params;
            const {title,content}=req.body;
            if(!recruitId){
                throw new Error('존재하지 않는 게시글입니다.')
            }
            const updateRecruit = await this.recruitService.updateRecruit({userId,recruitId,title,content});
            res.status(200).json({data:updateRecruit})
        }catch(error){
            next(error);
        }
    }

    deleteRecruit = async(req,res,next)=>{
        try{
            const{userId}=res.locals.user;
            const{recruitId}=req.params;
            const deleteRecruit = await this.recruitService.deleteRecruit({recruitId,userId})
            res.status(200).json({data:deleteRecruit});
        }catch(error){
            next(error);
        }
    }
}
module.exports = RecruitController;