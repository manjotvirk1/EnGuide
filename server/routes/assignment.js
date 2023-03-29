const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const Assignment = require('../models/Assignment');

router.get('/',(req,res)=>{
    Assignment.find()
    .sort({date:-1})
    .then(assignments=>res.json(assignments))
})

router.post('/',auth,async(req,res)=>{
    try{
        const newAssignment = new Assignment({
            name: req.body.name,
            subject: req.body.subject,
            task: req.body.task
        })
        const savedAssignment = await newAssignment.save();
        res.json(savedAssignment);
    }
    catch(error){
        console.log(error);
        res.status(500).send("Internal server error");
    }   
})


router.delete('/deleteassignment/:id',auth,async (req,res)=>{
    try {
        let assignment=await Assignment.findById(req.params.id);
        if(!assignment){return res.status(404).send("Not found");}

        assignment= await Assignment.findByIdAndDelete(req.params.id);
        res.json({"Success":"Assignment Deleted",assignment:assignment});
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
})

module.exports=router;