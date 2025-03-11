const express = require('express');
const bodyparser = require('body-parser');
const app = express();

const port = 5000;

const subjects = [
    {id:1,name:'ronish'},
    {id:2,name:'nabin'},
    {id:3,name:'uddab'},
]

app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.get('/',function(req,res){
res.send("Hello");
});

app.get('/api/subjects',function(req,res){
res.send(subjects);
});

app.get('/api/subjects/:id',function(req,res){
const subject = subjects.find(a=>a.id===parseInt(req.params.id));
if(!subject)
    res.status(200).send('Not found');

res.send(subject);
});

app.post('/api/subjects',function(req,res){
if(!req.body.name || req.body.name.length<3)
    res.status(400).send('name is invalid');

const subject = {id:subjects.length+1, name:req.body.name};
subjects.push(subject);
res.send(subject);
});

app.put('/api/subjects/:id',function(req,res){
    const subject = subjects.find(a=>a.id===parseInt(req.params.id));
    if(!subject)
        res.status(400).send('no subject found');

    subject.name = req.body.name;
    res.send(subject);
});

app.delete('/api/subjects/:id',function(req,res){
    const subject = subjects.find(a=>a.id===parseInt(req.params.id));
    if(!subject)
        res.status(400).send('Not found');
    
    const index = subjects.indexOf(subject);
    subjects.splice(index,1);
    res.send(subject);
});

app.listen(port,function(){
    console.log(`port at ${port}`);
})