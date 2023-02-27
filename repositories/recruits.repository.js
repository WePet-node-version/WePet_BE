const {User,Recruit} =require('../models');
const { Op } = require('sequelize');

class RecruitRepository {
    createRecruit = async({userId,title,content})=>{
        const createRecruit = await Recruit.create({
            userId,
            title,
            content
        })
        return createRecruit
    }

    findById = async({userId})=>{
        const findById = await User.findOne({
            where:{userId}
        })
        return findById
    }

    findAllRecruit = async()=>{
        const findAllRecruit = await Recruit.findAll({})
        return findAllRecruit
    }
    
    findRecruit = async({recruitId})=>{
        const findRecruit = await Recruit.findOne({where:{recruitId}})
        return findRecruit
    }

    updateRecruit = async({recruitId,userId,title,content})=>{
        const updateRecruit = await Recruit.update(
            {title,content},
            {where:{[Op.and]:[{recruitId},{userId}]}}
        );
        return updateRecruit
    }

    deleteRecruit = async({recruitId,userId})=>{
        const deleteRecruit = await Recruit.destroy(
            {where:{recruitId,userId}}
        )
        return deleteRecruit
    }
}
module.exports = RecruitRepository;