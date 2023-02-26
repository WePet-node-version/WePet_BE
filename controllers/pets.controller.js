const PetService = require('../services/pets.service');

class PetController{
    petService = new PetService();

    //펫 등록
    createPet = async(req,res,next)=>{
        try{
            const {userId} = res.locals.user;
            const {name,category,age,registercode,gender,neutralization}=req.body;
            const createPet = await this.petService.createPet({userId,name,category,age,registercode,gender,neutralization})
            res.status(201).json({data:createPet,message:'펫등록에 성공하셨습니다.'})            
        }catch(error){
            next(error);
        }   
    }

    //펫 조회
    findPet = async(req,res,next)=>{
        try{
            const{userId} = res.locals.user;
            const{petId}=req.params;
            const findPet = await this.petService.findPet({userId,petId})
            res.status(200).json({data:findPet,message:'펫 조회완료'})
        }catch(error){
            next(error);
        }
    }
}
module.exports = PetController