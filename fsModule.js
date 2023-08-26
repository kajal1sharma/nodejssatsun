const fs= require('fs');

// const detail = fs.statfsSync("abc.txt");
// console.log(detail)

// fs.copyFile

// fs.appendFileSync("abc.txt","this is appended text\n");
// fs.appendFile("abc.txt","this is append text 2\n",(err)=>{
//     if(err)
//     console.log(err)
// })
// const result = fs.readFileSync("abc.txt",'utf-8');
// console.log(result)
// console.log("when will this line run")


// fs.readFile("abc.txt",'utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// })



// console.log(result.toString())

//sync => it will take more time , blocking method
// fs.writeFileSync("abc.txt", "this is a new file");

// //Async=> non blocking , these functions faster 
// fs.writeFile("bcd.txt","this is vfile number 2",(err)=>{
//     if(err){
//         console.log(err)
//     }
// })