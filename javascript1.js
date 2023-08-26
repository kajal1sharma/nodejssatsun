
// let name1 ="kritika";
// name1 =["kritika","tina","neena", "mina"];
// name1 = ["kritika",20,40.09,null, undefined, [1,2,3,4],function(){console.log("helllo world")},{a:45,b:56,c:56}]
// name1={a:"gddgdg"}
// name1=null;
// name1=false;
// name2=function(){}


//value =>undefined
//reference=>null

// function print(num){
// //    obj.name="priya"
// num=80;
// console.log(num);
// }
// let a=90;
// print(a)
// console.log(a)

// let obj1 ={name:"kritika"}
// print(obj1)
// console.log(obj1)







//declarative style => funciton name_func(){

//}

//function expression

// let exp = function (a,b){
//     console.log(a);
//     console.log(b)
//     console.log("hello iam funciton expression")
//     return 90;
// }
// let result = exp(23,56,56);//function call is also expression 

//let/const 
//any function with no name is called as anonymous funciton 
// let print = (a,b)=>a+b
// let result =print(90,89);

// console.log(result)

//this mean the current object


// let obj1 = {
//     name:"tina",
//     surname:"verma",
//     getFullname:function (){
//         console.log(this);
//         console.log(this.name+" "+this.surname);
//     }
// }

// //obj1.getFullname();


// let obj = {
//      name : "neena",
//      occupation:"banker",
//      address:"8/9, shastri nagar",
//      getAddress : ()=>{//arrow does not have any this value
//         console.log(this)//{}
//         console.log("hi this is "+this.address)
//      },
//      getOccupation:function(){
//         console.log(this)//current this
//         console.log("hi my occupation is "+this.occupation)
//      }

// }
// obj.getAddress();
//obj.getOccupation();

// obj["occupation"]
// obj["getOccupation"]();
// obj.address;
// obj.name;
// obj.getOccupation();

// obj.getAddress();
// obj.getOccupation();






//console.log(num)
// function print(a,b){
//     // console.log(num);
//     console.log(num)
//     if(true){
//         // var num=90;
//         let num=90;
//     }
//     else{
//         let num=70;
//         // var num=70;
//     }
  
// }
// print(45,60)


//block level and functional level





// console.log(printIt)
// printIt()

// function printIt(){
//     console.log("hey print this thimg")
// }

// var i =90;
//functions are hoisted before variables

// printIt=undefined
// console.log(b);
// console.log(PI)
//var can be hoisted

// var print=printIt;

// print();
// var printIt = function (){
//     console.log("print")
// }
// let a;
// console.log(a);

// let a=90;
// console.log(a);
// var b=80;
// console.log(b);
// const PI=3.14;
// // PI=3.1456;
// console.log(PI);