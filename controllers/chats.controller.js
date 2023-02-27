const ChatService = require('../services/chat.service');

class ChatController{
    chatService = new ChatService();

    sendMessage = async(req,res,next)=>{
        try{
            const{userId}=res.locals.user;
            const{roomId}=req.params;
            const{message}=req.body;
            const sendMessage = await this.chatService.sendMessage({userId,roomId,message})
            res.status(200).json({data:sendMessage})
        }catch(error){
            next(error)
        }
    }

    getMessage = async(req,res,next)=>{
        try{
            const{userId}=res.locals.user;
            const{roomId}=req.params;
            const getMessage = await this.chatService.getMessage({userId,roomId,message})
        }catch(error){
            next(error)
        }
    }

}
module.exports = ChatController