const {User,Apply} =require('../models');
const { Op } = require('sequelize');

class ApplyRepository {
    createApply = async({userId,title,content,nickname})=>{
        const createApply = await Apply.create({
            userId,
            title,
            content,
            nickname
        })
        return createApply
    }

    findById = async({userId})=>{
        const findById = await User.findOne({
            where:{userId}
        })
        return findById
    }

    findAllApply = async()=>{
        const findAllApply = await Apply.findAll({})
        return findAllApply
    }
    
    findApply = async({applyId})=>{
        const findApply = await Apply.findOne({where:{applyId}})
        return findApply
    }

    updateApply = async({applyId,userId,title,content})=>{
        const updateApply = await Apply.update(
            {title,content},
            {where:{[Op.and]:[{applyId},{userId}]}}
        );
        return updateApply
    }

    deleteApply = async({applyId,userId})=>{
        const deleteApply = await Apply.destroy(
            {where:{applyId,userId}}
        )
        return deleteApply
    }
}
module.exports = ApplyRepository;