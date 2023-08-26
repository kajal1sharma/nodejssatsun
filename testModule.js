//IIFE => Immediately invokedd function expression
//((exports, require, module, __filename, __dirname)=>{
  
let name =" neena"
console.log("hello world")

function print(){
    console.log("print something ")
}
print()

console.log(module)
//module.exports.surname="verma"
module.exports =print

