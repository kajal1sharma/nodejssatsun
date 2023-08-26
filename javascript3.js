//sugar coted syntax
class Student{

    constructor(name,school,rollno){
        this.name=name;
        this.school=school;
        this.rollno=rollno;
    }
}



// function Student(name,school,rollno){
//     this.name=name;
//     this.school=school;
//     this.rollno=rollno;
// }

let obj1= new Student("reena","abc",12);
let obj2 = new Student("leena","ref",34);
let obj3=new Student("tina","fdg",45)

console.log(obj1,"\n",obj2,"\n",obj3)
// let obj={
//     name:"neena",
//     rollno:"123",
//     college:"uit"
// }
// //singleton



// function counter(){
//     let a=0
//     return function(){
//         a++;
//         console.log(a)
//     }
// }
// let a=90;
// let result= counter();
// result();
// result()
// a=false;
// counter();
// counter();
// counter();
// counter();



// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))



//async function can only contain await keywordd
//await helps us to work synchronously
// async function getInfo(){
// let promisevar =await fetch("https://jsonplaceholder.typicode.com/todos/1")
// let data=await promisevar.json();
// console.log(data)
// // console.log("hello world")
// }
// getInfo()
//chaining of then block
// promisevar.then(data=>{
//     return data.json()
// })
// .then(data=>{
//     console.log(data);
// })
// .catch(err=>{
//     console.log(err)
// })



// console.log(promisevar);


// console.log("hello world")


// console.log(result)
// result.then(data=>{
//     console.log(data);
// })
// .catch(err=>{
//     console.log(err)
// })
// async function print(){
//     let a=90;
//     return a;
// } 
// let result =print();
// // console.log(result)
// //the async functions always return promise

// result.then(data=>{
//     console.log("data"+data);
// })
// .catch(err=>{
//     console.log("err"+err)
// })
