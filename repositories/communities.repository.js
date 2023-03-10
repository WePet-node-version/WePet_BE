const {User,Community} =require('../models');
const { Op } = require('sequelize');

class CommunityRepository {
    createCommunity = async({userId,title,content,image})=>{
        const createCommunity = await Community.create({
            userId:userId,
            title:title,
            content:content,
            image:image,
        })
        
        console.log(createCommunity,"rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
        return createCommunity
    }

    findById = async({userId})=>{
        const findById = await User.findOne({
            where:{userId}
        })
        return findById
    }

    findAllCommunity = async()=>{
        const findAllCommunity = await Community.findAll({})
        return findAllCommunity
    }
    
    findCommunity = async({communityId})=>{
        const findCommunity = await Community.findOne({where:{communityId}})
        return findCommunity
    }

    updateCommunity = async({communityId,userId,title,content,image})=>{
        const updateCommunity = await Community.update(
            {title,content,image},
            {where:{[Op.and]:[{communityId},{userId}]}}
        );
        return updateCommunity
    }

    deleteCommunity = async({communityId,userId})=>{
        const deleteCommunity = await Community.destroy(
            {where:{communityId,userId}}
        )
        return deleteCommunity
    }
}
module.exports = CommunityRepository;