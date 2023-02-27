const RecruitRepository = require('../repositories/recruits.repository');

class RecruitService{
    recruitRepository =new RecruitRepository();

    createRecruit = async({userId,title,content})=>{
        const findById = await this.recruitRepository.findById({
            userId
        })
        if(!findById){
            throw new Error('유저정보가 없습니다.')
        }
        const createRecruit = await this.recruitRepository.createRecruit({
            userId,
            title,
            content,
        })
        return createRecruit;
    }

    
    findAllRecruit = async()=>{
        const findAllRecruit = await this.recruitRepository.findAllRecruit();
            return findAllRecruit
        
    }

    findRecruit = async({recruitId})=>{
        const findRecruit = await this.recruitRepository.findRecruit({recruitId});
        if(!findRecruit){
            throw new Error('잘못된 요청입니다.')
        }
        return {
            recruitId: findRecruit.recruitId,
            userId : findRecruit.userId,
            title : findRecruit.title,
            content : findRecruit.content,
            createdAt : findRecruit.createdAt,
            updatedAt : findRecruit.updatedAt
        }
    };

    updateRecruit = async({userId,recruitId,title,content})=>{
        const findById = await this.recruitRepository.findById({userId})
        if(!findById){
            throw new Error('권한이 없습니다.')
        }
        const findRecruit = await this.recruitRepository.findRecruit({recruitId})
        if (!findRecruit) {
            throw new Error("게시글을 찾을 수 없습니다.")
        }
        const updateRecruit = await this.recruitRepository.updateRecruit({userId,recruitId,title,content})
        return updateRecruit;
    }

    deleteRecruit = async({userId,recruitId})=>{
        const findRecruit = await this.recruitRepository.findRecruit({recruitId})
        if(!findRecruit){
            throw new Error('게시글을 찾을 수 없습니다.')
        }
        const deleteRecruit = await this.recruitRepository.deleteRecruit({userId,recruitId})
        return deleteRecruit
    }
}
module.exports = RecruitService;