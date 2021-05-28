var express = require('express')
var router = express.Router()

router.post('/nodemcu',async (req,res) => {
    console.log(req)
    res.status(200).send({msg:"hello from server",data:req.body.msg,ledState:1})
})

router.get('/nodemcu',async (req,res) => {
    
    res.status(200).send({msg:"hello from server."})
})

module.exports = router