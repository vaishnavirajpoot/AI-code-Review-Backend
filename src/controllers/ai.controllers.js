
const aiService = require('../Services/ai.services.js')


module.exports.getReview = async (req,res)=>{
    const code = req.body.code;
   
    

    if(!code){
        return response.status(400).json({error: "Please provide a prompt."});
    }

    const response = await aiService(code);


    res.send(response)
}