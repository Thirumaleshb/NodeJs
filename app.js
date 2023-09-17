const path=require('path')
const express = require("express");
const hbs=require('hbs')
const app = express();

const partialPath=path.join(__dirname,"../partials")
app.set("view engine",'hbs')
console.log(partialPath)
hbs.registerPartials(partialPath)
// app.use(express.static(publicDir))


app.get("",(req,res)=>{
  res.render("index",{
    title:"Home Page",
    name:"Thiru"
  })
})


app.get("/help",(req,res)=>{
  res.render("help",{
    title:"Help Page",
    message:"Conatact Support@gmail.com"
  })
})

app.get("/about",(req,res)=>{
 
  if(!req.query.search){
    res.send({
      error:"Please Provide the Search Term"
    })
  }
  else{
    console.log(req.query["search"])
    res.send({
      products:[]
    })
  
  }


  // res.render("about",{
  //   title:"About Page",
  //   message:"About Us Information"
  // })
})

app.get("/help/*",(req,res)=>{
  res.render("error",{
    title:"Help Error Page",
  })
})

app.get("*",(req,res)=>{
  res.render("error",{
    title:"Error Page",
  })
})


app.get("/user", (req, res) => {
    const obj={
        name:"Thiru",
        age:23
    }
    console.log(obj.name)
  res.send(obj);
});



app.listen(3000, () => {
  console.log("The Server is Running Successfully");
});
