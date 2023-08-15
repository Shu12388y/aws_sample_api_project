const express = require("express")
const app = express()
const PORT=3000
const path=require("path")
const fs=require("fs")
const data=require("./data/product.json")



// routes
app.get("/",(req,res)=>{
    const homePage=fs.readFile(path.join(__dirname,"public","index.html"),"utf8",(error,content)=>{
        if(error){
            throw error
        }
        else{
            
            res.send(content)
        }
    })
   
})



app.get("/product",(req,res)=>{
    res.json(data)

})

app.listen(PORT,()=>{
    console.log("server is on")
})


// listen to port 3000