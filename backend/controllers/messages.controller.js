const Conversation = require("../models/conversation.model");
const Message = require("../models/message.model");
const sendMessage = async (req, res) => {
    try{
        const senderId = req.userId;
        const receiverId = req.params.id;
        const {message} = req.body;
        let gotConversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]}
        });
        if(!gotConversation){
            gotConversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }
        const newMessage = await Message.create({
            senderId,
            receiverId,
            message,
        });
        if(newMessage){
            gotConversation.messages.push(newMessage._id);
            await gotConversation.save();
            return res.status(200).json({message: "Message sent successfully!"});
        }
    }catch(err){
        console.log("The issue is: ",err);
    }
};

const getMessages = async (req, res) => {
    try{
        const receiverId = req.params.id;
        const senderId = req.userId;
        const conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]}
        }).populate("messages");
        if(conversation){
            return res.status(200).json({messages: conversation.messages});
        }

    }catch(err){
        console.log("The issue is: ",err);
        return res.status(500).json({msg: "Internal Server Error."});
    }
};

module.exports = {sendMessage, getMessages};