const passport = require('passport');
const {User}=require('../models');
const kakaoStrategy = require('passport-kakao').Strategy;
require('dotenv').config();
module.exports = ()=>{
    passport.use(
        new kakaoStrategy(
            {
                clientID:process.env.KAKAO_ID,
                callbackURL:'/auth/kakao/callback',
            },
            async(accessToken, refreshToken, profile, done)=>{
                try{
                    const exUser = await User.findOne({
                        where:{snsId:profile.id, provider:'kakao'},
                    });
                    if(exUser){
                        done(null, exUser);

                    }else{
                        const newUser = await User.create({
                            email:profile._json.kakao_account.email,
                            nickname:profile.username,
                            avatarImg:profile._json.properties.profile_image,
                            snsId:profile.id,
                            provider:'kakao',
                        });
                        done(null,newUser);
                    }
                }catch(error){
                        done(error);
                }
            }
        )
    )
}