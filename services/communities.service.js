const CommunityRepository = require('../repositories/communities.repository');
const jwt = require("jsonwebtoken");

class CommunityService{
    communityRepository =new CommunityRepository();
    //게시글 작성
    createCommunity = async({userId,title,content,image})=>{
        const findById = await this.communityRepository.findById({
            userId
        })
        if(!findById){
            throw new Error('유저정보가 없습니다.')
        }
        const createCommunity = await this.communityRepository.createCommunity({
            userId,
            title,
            content,
            image,
        })
        return createCommunity;
    }

    //게시글 전체조회
    findAllCommunity = async()=>{
        const findAllCommunity = await this.communityRepository.findAllCommunity();
            findAllCommunity.sort((a,b)=>{
                return b.createdAt - a.createdAt;
            });
            return findAllCommunity
        
    }
    //게시글 상세조회
    findCommunity = async({communityId})=>{
        const findCommunity = await this.communityRepository.findCommunity({communityId});
        if(!findCommunity){
            throw new Error('잘못된 요청입니다.')
        }
        return {
            communityId: findCommunity.communityId,
            userId : findCommunity.userId,
            likeCount:findCommunity.likeCount,
            title : findCommunity.title,
            content : findCommunity.content,
            image : findCommunity.image,
            createdAt : findCommunity.createdAt,
            updatedAt : findCommunity.updatedAt
        }
    };

    //게시글 수정
    updateCommunity = async({userId,communityId,title,content,image})=>{
        const findById = await this.communityRepository.findById({userId})
        if(!findById){
            throw new Error('권한이 없습니다.')
        }
        const findCommunity = await this.communityRepository.findCommunity({communityId})
        if (!findCommunity) {
            throw new Error("게시글을 찾을 수 없습니다.")
        }
        const updateCommunity = await this.communityRepository.updateCommunity({userId,communityId,title,content,image})
        return updateCommunity;
    }

    deleteCommunity = async({userId,communityId})=>{
        const findCommunity = await this.communityRepository.findCommunity({communityId})
        if(!findCommunity){
            throw new Error('게시글을 찾을 수 없습니다.')
        }
        const deleteCommunity = await this.communityRepository.deleteCommunity({userId,communityId})
        return deleteCommunity
    }
}
module.exports = CommunityService;