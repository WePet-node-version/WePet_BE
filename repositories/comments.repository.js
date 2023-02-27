const {User,Comment} = require('../models');
const { Op } = require('sequelize');

class CommentRepository{
    createComment = async({userId,communityId,comment,nickname})=>{
        const createComment = await Comment.create({
            userId,
            communityId,
            comment,
            nickname
        })
        return createComment
    }

    findById = async({userId})=>{
        const findById = await User.findOne({
            where:{userId}
        })
        return findById
    }

    findAllComment = async({communityId})=>{
        const findAllComment = await Comment.findAll(
            {where:{communityId}},
            {order:[["createdAt","DESC"]]}
        );
        return findAllComment
    }
    
    updateComment = async ({userId,commentId,comment}) => {
        const updateComment = await Comment.update(
            { comment },
            { where: { [Op.and]: [{ userId,commentId }] } },
        );
        return updateComment;
    };

    deleteComment = async({userId,commentId})=>{
        const deleteComment = await Comment.destroy({
            where:{userId,commentId},
        })
        return deleteComment
    }
}
module.exports = CommentRepository;