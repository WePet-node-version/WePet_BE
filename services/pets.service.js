const PetRepository = require('../repositories/pets.repository')
require('dotenv').config();

class PetService{
    petRepository = new PetRepository();

    createPet = async({userId,name,category,age,registercode,gender,neutralization})=>{
        const createPet = await this.petRepository.createPet({
            userId,
            name,
            category,
            age,
            registercode,
            gender,
            neutralization,
        })
        return createPet
    }

    findPet = async({petId})=>{
        const findPet = await this.petRepository.findPet({petId})
        if(!findPet){
            throw new Error('잘못된 요청입니다.')
        }
        return {
            petId : findPet.petId,
            userId : findPet.userId,
            name : findPet.name,
            category: findPet.category,
            age : findPet.age,
            registercode : findPet.registercode,
            gender : findPet.gender,
            neutralization : findPet.neutralization
        }
    }
}
module.exports = PetService