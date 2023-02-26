const UserRepository = require('../repositories/users.repository');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authEmail = require('../util/nodeMailer');

class UserService {
    userRepository =new UserRepository();

    createUser = async({users})=>{
        const user = await this.userRepository.createUser({
            email : users.email,
            password :users.password,
            name : users.name,
            nickname : users.nickname,
            phoneNumber : users.phoneNumber
        });

        return {
            email : user.email,
            password : user.password,
            name : user.name,
            nickname : user.nickname,
            phoneNumber : user.phoneNumber
        };
    };

    userLogin = async ({ email, password }) => {
        const user = await this.userRepository.findByEmail({ email });
        if (!user) {
            throw new Error('가입하신 회원이 아닙니다.');
        }
    
        const isEqual = await bcrypt.compare(password, user.password);
        if (!isEqual) {
            throw new Error('비밀번호가 다릅니다.');
        }
        const accessToken = jwt.sign(
            {
                userId: user.userId,
                email: user.email,
                nickname: user.nickname,
            },
            process.env.SECRET_KEY,
            { expiresIn: '7d' },
        );
        const refreshToken = jwt.sign(
            {
                userId: user.userId,
                email: user.email,
                nickname: user.nickname,
            },
            process.env.SECRET_KEY,
            { expiresIn: '14d' },
        );
        await this.userRepository.refreshT({ user, refreshToken });
    
        return { user, accessToken, refreshToken };
    };

    emailCheck = async({email})=>{
        const emailCheck = await this.userRepository.findByEmail({email});
        if(emailCheck){
            throw new Error('이미 가입된 이메일입니다.');
        }
        const emailVerified = await this.userRepository.authEmail({email});
        if(emailVerified){
            await this.userRepository.deleteEmail({email});
        }
        authEmail(email);
    };

    certification = async({email,certificationNum}) => {
        const checkEmail = await this.userRepository.authEmail({email});
        if(!checkEmail){
            throw new Error('존재하지 않는 이메일입니다.')
        }
        if(checkEmail.certificationNum !==certificationNum){
            throw new Error('인증번호를 다시 확인해주세요.');
        }
        if(checkEmail.certificationNum === certificationNum){
            const auth = await this.userRepository.emailCheck({email});
            return {
                certificationId:auth.certificationId,
                email:auth.email,
                certificationNum : auth.certificationNum,
                certificationCheck:auth.certificationCheck,
            };
        }
    }

    myprofile = async ({ userId }) => {
        const myprofile = await this.userRepository.findByUser({ userId });
        if (!myprofile){
            throw new Error('가입되지 않은 회원입니다.');
        }
        else {
            return {
                userId: myprofile.userId,
                email: myprofile.email,
                name:myprofile.name,
                nickname: myprofile.nickname,
                phoneNumber : myprofile.phoneNumber
            };
        };
    }

}
module.exports = UserService;