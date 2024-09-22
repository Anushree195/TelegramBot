var express=require("express");
var app=express();
var bodyParser = require("body-parser");
const axios=require("axios");

app.use(bodyParser.json())//converts the JSON data into JS obj
app.use(bodyParser.urlencoded({extended:true}));//data send in URL-encoded format


app.post("/new-message",(req,res)=>{
    const {message}=req.body

    if(!message || message.text.toLowerCase().indexOf("chatbuddy26")<0){
        return res.end();

    }
    axios
    .post("https://api.telegram.org/bot7866580519:AAF_vFo1HsjiYK1BEndG00Av04jjWn9vFCU/sendMessage",
        {
            chat_id: message.chat.id,
            text: "Welcome to my 1st Interactive TeleBot!!",
        }
    )

    .then((res) => {
        // We get here if the message was successfully posted
        console.log("Message posted")
        res.end("ok")
    })
    .catch((err) => {
        // ...and here if it was not
        console.log("Error :", err)
        res.end("Error :" + err)
    })
})


app.listen(3030,()=>{
    console.log("Telegram app listening on port :3030!");
});