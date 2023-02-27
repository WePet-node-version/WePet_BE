const {User,ApplyComment} = require('../models');
const { Op } = require('sequelize');

class ApplyCommentRepository{
    createComment = async({userId,applyId,comment})=>{
        const createComment = await ApplyComment.create({
            userId,
            applyId,
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

    findAllComment = async({applyId})=>{
        const findAllComment = await ApplyComment.findAll(
            {where:{applyId}},
            {order:[["createdAt","DESC"]]}
        );
        return findAllComment
    }
    
    updateComment = async ({userId,applycommentId,comment}) => {
        const updateComment = await ApplyComment.update(
            { comment },
            { where: { [Op.and]: [{ userId,applycommentId }] } },
        );
        return updateComment;
    };

    deleteComment = async({userId,applycommentId})=>{
        const deleteComment = await ApplyComment.destroy({
            where:{userId,applycommentId},
        })
        return deleteComment
    }
}
module.exports = ApplyCommentRepository;