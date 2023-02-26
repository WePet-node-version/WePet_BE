const {Pet} = require('../models');

class PetRepository{
    createPet = async({userId,petId,name,category,age,registercode,gender,neutralization})=>{
        const createPet = await Pet.create({
            userId,
            petId,
            name,
            category,
            age,
            registercode,
            gender,
            neutralization
        })
        return createPet
    }

    findPet = async({petId})=>{
        const findPet = await Pet.findOne({
            where:{petId}
        })
        return findPet
    }
}
module.exports = PetRepository;