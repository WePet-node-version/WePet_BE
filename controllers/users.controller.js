const UserService = require('../services/users.service');
const bcrypt = require('bcrypt');
const Joi = require('../util/joi');

class UserController{
    userService = new UserService();

    signup = async(req,res,next)=>{
        try{
            const {email,password,name,nickname,phoneNumber}=
            await Joi.signupSchema.validateAsync(req.body);
    
            if(!email || !password || !name || !nickname || !phoneNumber){
                return res.status(400).send({message:'모든 항목을 작성해주세요'});
            }

            if(nickname.includes(password)||password.includes(nickname)){
                return res.status(400).send({
                    message:'이름과 비밀번호를 다른형식으로 작성해주세요'
                })
            }
            const hashed = await bcrypt.hash(password, 12);
            const users = await Object.create({
                email : email,
                password : hashed,
                name :name,
                nickname : nickname,
                phoneNumber :phoneNumber,
            })
            await this.userService.createUser({users});
            res.status(201).json({message:'회원가입에 성공하였습니다'})
        }catch(error){
            next(error);
        }
    }

    login = async (req, res, next) => {
        try {
            const { email, password } = await Joi.loginSchema.validateAsync(req.body);
            const user = await this.userService.userLogin({ email, password });
    
            res.cookie('accessToken', user.accessToken);
            res.cookie('refreshToken', user.refreshToken);
            res.status(200).json({
                userId: user.user.userId,
                nickname: user.user.nickname,
                accessToken: user.accessToken,
                refreshToken: user.refreshToken,
            });
        } catch (error) {
            next(error);
        }
    }

    emailCheck = async(req,res,next)=>{
        try{
            const {email} = req.body;
            await this.userService.emailCheck({email});
            res.status(200).send({message:'인증 메일이 성공적으로 발송되었습니다.'});
        }catch(error){
            next(error);
        }
    }

    certification = async(req,res,next)=>{
        try{
            const {email, certificationNum} = req.body;
            await this.userService.certification({email,certificationNum});
            res.status(200).json({message:'인증이 완료되었습니다.'});
        }catch(error){
            next(error);
        }
    }

    myprofile = async(req,res,next) =>{
        try{
            const{userId} = res.locals.user;
            const user = await this.userService.myprofile({userId});
            res.status(200).json({data:user,message:'프로필 조회에 성공하셨습니다.'})
        }catch(error){
            next(error);
        }
    }
}
module.exports = UserController;