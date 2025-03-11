const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

const subjects=[
    {id:1, name:'Subject 1'},
    {id:2, name:'Subject 2'},
    {id:3, name:'Subject 3'}
];

//testing
app.get('/',function(req,res){
    res.send('Hello World!')
});

// get all
app.get('/api/subjects',function(req,res){
    res.send(subjects);
});

// get by id
app.get('/api/subjects/:id',function(req,res){

    //validation
    const subject = subjects.find(c=>c.id ===parseInt(req.params.id));

    // error checking
    if(!subject)
        res.status(400).send('Id is not valid');

    res.send(subject);
});

//create
app.post('/api/subjects',function(req,res){
    
    //validation
    if(!req.body.name || req.body.name.length<3)
        res.status(400).send('The course name/id is invalid');

    const subject = {
        id:subjects.length+1,
        name:req.body.name
    };

    subjects.push(subject);
    res.send(subject);

});

// update by id

app.put('/api/subjects/:id',function(req,res){
   //validation
   const subject = subjects.find(c=>c.id ===parseInt(req.params.id));

   // error checking
   if(!subject)
     res.status(400).send('Id is not valid');

   subject.name = req.body.name;

   res.send(subject);

});

// delete by Id 
app.delete('/api/subjects/:id',function(req,res){
    //validation
   const subject = subjects.find(c=>c.id ===parseInt(req.params.id));

   // error checking
   if(!subject)
     res.status(400).send('Id is not valid');

   const index= subjects.indexOf(subject);
   subjects.splice(index,1);

   res.send(subject);

}); 

const port = 5000;
app.listen(port,function(){
    console.log(`Listening to port ${port}`);
})