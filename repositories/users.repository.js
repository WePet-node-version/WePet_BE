const {User,Certification} = require('../models');

class UserRepository {
    createUser = async({email,password,name,nickname,phoneNumber})=>{
        const createUser = await User.create({
            email,
            password,
            name,
            nickname,
            phoneNumber,
        })
        return createUser;
    };

    findByUser = async ({ userId }) => {
        const findByUser = await User.findOne({
            attributes: {
                exclude: ['password'],
            },
            where: { userId },
        });
        return findByUser;
        };
    findByEmail = async ({ email }) => {
        const findEmail = await User.findOne({ where: { email } });
        return findEmail;
    };
    
    refreshT = async ({ user, refreshToken }) => {
        await user.update({ refreshToken }, { where: { userId: user.userId } });
    };

    authEmail = async ({ email }) => {
        const authEmail = await Certification.findOne({ where: { email } });
        return authEmail;
    };
    
    deleteEmail = async ({ email }) => {
        const destroyEmail = await Certification.destroy({ where: { email } });
        return destroyEmail;
    };
    
    emailCheck = async ({ email }) => {
        const emailCheck = await Certification.update(
            { certificationCheck: true },
            { where: { email } },
        );
        return emailCheck;
    };

}
module.exports = UserRepository;