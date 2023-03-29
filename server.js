const fs= require("fs");
const http= require("http");
var requests= require("requests");

var API= "https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=9a1d1e4163e563fdef9a90637f2eebcb";


const HTMLData= fs.readFileSync("index.html","utf-8");

const JsData= fs.readFileSync("index.js","utf-8");

const replaceVal = (tempVal,Orgval)=>{

    let temparature= tempVal.replace("{%tempInC%}",Orgval.main.temp);
     temparature= temparature.replace("{%tempInF%}",Orgval.main.temp);
     temparature= temparature.replace("{%Condition%}",Orgval.main.humidity);
    return temparature;
}

const server= http.createServer((req,res)=>{

    if(req.url == "/"){
        requests(API)
        .on("data",(chunk)=>{
            const ObjData= JSON.parse(chunk);
            const Arrdata= [ObjData];
           // console.log(Arrdata[0].main.temp);
           const RealTimedata= Arrdata.map((val)=>{
             return replaceVal(HTMLData,val);
           }).join("");

           res.write(RealTimedata);
          //console.log(RealTimedata);
        })
        .on("end",(err)=>{
            if(err) return console.log("Some error Occurerd");
            res.end();
        });
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("Server started started on port 8000");
})