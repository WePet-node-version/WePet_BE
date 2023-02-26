const Joi = require('joi');
const passwordRegEx =
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
const phoneNumberRegEx =
    /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
    module.exports = {
    signupSchema: Joi.object({
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: false } })
            .required()
            .error(new Error('이메일 형식을 확인해주세요')),
        password: Joi.string()
            .pattern(passwordRegEx)
            .required()
            .error(new Error('비밀번호 형식을 확인해주세요')),
        name: Joi.string()
            .min(2)
            .max(10)
            .error(new Error('이름 형식을 확인해주세요')),
        nickname: Joi.string()
            .min(2)
            .max(10)
            .error(new Error('닉네임 형식을 확인해주세요')),
        gender :Joi.string()
            .min(1)
            .max(10)
            .error(new Error('성별 형식을 확인해주세요')),
        phoneNumber: Joi.string()
            .pattern(phoneNumberRegEx)
            .required()
            .error(new Error('전화번호 형식을 확인해주세요')),
        }),

    loginSchema: Joi.object({
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: false } })
            .required()
            .error(new Error('이메일 형식을 확인해주세요')),
        password: Joi.string()
            .pattern(passwordRegEx)
            .required()
            .error(new Error('비밀번호 형식을 확인해주세요')),
        }),
    };
