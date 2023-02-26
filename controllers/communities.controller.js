const CommunityService = require('../services/communities.service');

class CommunityController{
    communityService = new CommunityService();

    createCommunity = async(req,res,next)=>{
        try{
            const {userId} = res.locals.user;
            const {title,content} = req.body;
            const createCommunity = await this.communityService.createCommunity({userId,title,content})
            res.status(200).json({data:createCommunity});
        }catch(error){
            next(error);
        }
    }

    //게시글 전체조회
    findAllCommunity = async(req,res,next)=>{
        try{
            const {userId} =res.locals.user;
            const findAllCommunity = await this.communityService.findAllCommunity({userId});
            res.status(200).json({data:findAllCommunity}); 
        }catch(error){
            next(error);
        }
    }
    
    //게시글 상세조회
    findCommunity = async(req,res,next)=>{
        try{
            const {userId} = res.locals.user;
            const {communityId} =req.params;
            if(!communityId){
                throw new Error('존재하지 않는 게시글입니다.')
            }
            const findCommunity = await this.communityService.findCommunity({userId,communityId});
            res.status(200).json({data:findCommunity})
        }catch(error){
            next(error);
        }
    }

    //게시글 수정
    updateCommunity = async(req,res,next)=>{
        try{
            const {userId} = res.locals.user;
            const {communityId} = req.params;
            const {title,content}=req.body;
            if(!communityId){
                throw new Error('존재하지 않는 게시글입니다.')
            }
            const updateCommunity = await this.communityService.updateCommunity({userId,communityId,title,content});
            res.status(200).json({data:updateCommunity})
        }catch(error){
            next(error);
        }
    }

    //게시글 삭제
    deleteCommunity = async(req,res,next)=>{
        try{
            const{userId}=res.locals.user;
            const{communityId}=req.params;
            const deleteCommunity = await this.communityService.deleteCommunity({communityId,userId})
            res.status(200).json({data:deleteCommunity});
        }catch(error){
            next(error);
        }
    }
}
module.exports = CommunityController;
