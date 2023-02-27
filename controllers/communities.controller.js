const CommunityService = require('../services/communities.service');
require('dotenv').config();

class CommunityController{
    communityService = new CommunityService();

    createCommunity = async(req,res,next)=>{
        try{
            const {userId} = res.locals.user;
            const {title,content} = req.body;
            // const imageFileName = req.file ? req.file.location : null;
            const image =req.file.location
            console.log(image,'12312312321321312313',req.file)
            console.log(title,'title',content,'content',req.body,'cccccccccccccccccc')
            // imageFileName에 파일명이 들어 갔으면 s3 url주소 추가
            // const image = imageFileName
            //     ? process.env.S3_STORAGE_URL + imageFileName
            //     : null;
            const createCommunity = await this.communityService.createCommunity({userId,title,content,image})
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
            // 수정사항에 이미지 파일이 있으면 key값으로 이름 정해주고 없으면 Null
            // const imageFileName = req.file ? req.file.key : null;
            const image = req.file.location
            //  imageFileName에 파일명 들어가면 s3 url주소 추가
            // const image = imageFileName
            // ? process.env.S3_STORAGE_URL + imageFileName
            // : undefined;
            if(!communityId){
                throw new Error('존재하지 않는 게시글입니다.')
            }
            const updateCommunity = await this.communityService.updateCommunity({userId,communityId,title,content,image});
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
    
    // attachImage = async (req) => {
    //     // 이미지 첨부 여부 확인
    //     const imageFileName = req.file ? req.file.key : null;
    //     // 이미지 Url 생성
    //     const image = imageFileName
    //       ? process.env.S3_STORAGE_URL + imageFileName
    //       : undefined;
    
    //     return image;
    //   };
}
module.exports = CommunityController;
