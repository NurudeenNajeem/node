const express = require('express');
const router = express.Router();
const Joi = require('joi');

router.use(express.json());
const courses = [
    {id:1, name:'Math'},
    {id:2, name:'Biology'},
    {id:3, name:'Physics'},

];

router.get('/', (req,res) =>{
    res.send(courses)
});

//HTTP GET request
router.get('/:id',(req,res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("The course with the given ID was found");
    res.send(course)

});

// HANDLING POST REQUEST

router.post('/', (req,res) =>{
    const schema =Joi.object({
         name : Joi.string().min(3).required()
    });
    const result = schema.validate(req.body);
    // console.log(result);
    if (result.error){
         // res.status(400).send(result.error)
         return res.status(400).send(result.error.details[0].message)
    };
  
    const course = {
         id: courses.length + 1,
         name : req.body.name
    };
    courses.push(course);
    res.send(course);
});

router.put('/:id',(req,res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send("The course with the given ID was found");
    }
    // VALIDATE
    //If invalid, return 400- Bad request
    const schema =Joi.object({
         name : Joi.string().min(3).required()
    });
    const result = schema.validate(req.body);
    if (result.error){
         return res.status(400).send(result.error.details[0].message)
    }
    // UPDATE THE COURSE
    course.name = req.body.name
    res.send(course)

});
// HANDLING DELETE
//  git config --global user.email "najeemnurudeen1990@gmail.com"
router.delete('/:id',(req,res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("The course with the given ID was found");
    const index = courses.indexOf(course);

    courses.splice(index,1);
    res.send(course)

})

module.exports = router;
