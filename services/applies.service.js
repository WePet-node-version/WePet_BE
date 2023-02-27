const ApplyRepository = require('../repositories/applies.repository');

class ApplyService{
    applyRepository =new ApplyRepository();
    
    createApply = async({userId,title,content})=>{
        const findById = await this.applyRepository.findById({
            userId
        })
        if(!findById){
            throw new Error('유저정보가 없습니다.')
        }
        const createApply = await this.applyRepository.createApply({
            userId,
            title,
            content,
        })
        return createApply;
    }

    
    findAllApply = async()=>{
        const findAllApply = await this.applyRepository.findAllApply();
        return findAllApply
        
    }

    findApply = async({applyId})=>{
        const findApply = await this.applyRepository.findApply({applyId});
        if(!findApply){
            throw new Error('잘못된 요청입니다.')
        }
        return {
            applyId: findApply.applyId,
            userId : findApply.userId,
            title : findApply.title,
            content : findApply.content,
            createdAt : findApply.createdAt,
            updatedAt : findApply.updatedAt
        }
    };

    updateApply = async({userId,applyId,title,content})=>{
        const findById = await this.applyRepository.findById({userId})
        if(!findById){
            throw new Error('권한이 없습니다.')
        }
        const findApply = await this.applyRepository.findApply({applyId})
        if (!findApply) {
            throw new Error("게시글을 찾을 수 없습니다.")
        }
        const updateApply = await this.applyRepository.updateApply({userId,applyId,title,content})
        return updateApply;
    }

    deleteApply = async({userId,applyId})=>{
        const findApply = await this.applyRepository.findApply({applyId})
        if(!findApply){
            throw new Error('게시글을 찾을 수 없습니다.')
        }
        const deleteApply = await this.applyRepository.deleteApply({userId,applyId})
        return deleteApply
    }
}
module.exports = ApplyService;