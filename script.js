const mongoose=require("mongoose")
const User=require("./userModel")  //import
mongoose.connect("mongodb://127.0.0.1:27017/aruloffi").then(()=>{
    console.log("connection success using mongoose lib")
}).catch(()=>{
    console.log("error connection")
})
const myinp=new User({
    sname:"sneka",
    age:78,
    addr:"no.5,west st,main road,main street,karur",
    city:"erode"
})
myinp.save().then(()=>{
    console.log("success")
    }).catch((err)=>{
        console.log("error:",err)
    })
