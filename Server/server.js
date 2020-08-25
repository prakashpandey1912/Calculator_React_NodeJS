const express = require('express')

const app = express()
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*' ); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  }); 

app.get('/result/:equation', function (req, res) {
var result;
var eq=req.params.equation;
var finalEq;
for(var i=0;i<eq.length;i++)
{
finalEq = eq.replace("@", "/");
}      
 try {
result=eval(finalEq);
     }
 catch (e)
     {
console.log("hello");
result="error"
}
res.send(""+result+"")
})
 
app.listen(8080)