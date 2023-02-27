const {User,RecruitComment} = require('../models');
const { Op } = require('sequelize');

class RecruitCommentRepository{
    createComment = async({userId,recruitId,comment})=>{
        const createComment = await RecruitComment.create({
            userId,
            recruitId,
            comment,
        })
        return createComment
    }

    findById = async({userId})=>{
        const findById = await User.findOne({
            where:{userId}
        })
        return findById
    }

    findAllComment = async({recruitId})=>{
        const findAllComment = await RecruitComment.findAll(
            {where:{recruitId}},
            {order:[["createdAt","DESC"]]}
        );
        return findAllComment
    }
    
    deleteComment = async({userId,recruitcommentId})=>{
        const deleteComment = await RecruitComment.destroy({
            where:{userId,recruitcommentId},
        })
        return deleteComment
    }
}
module.exports = RecruitCommentRepository;