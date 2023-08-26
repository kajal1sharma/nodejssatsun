let arr =[{name:"reena",age:23},
          {name:"sia",age:11},
          {name:"lily",age:56},
          {name:"sia",age:11},
          {name:"ronit",age:57},
          {name:"mina",age:99}]

    

//include the date of birth field
// let newarr = arr.map((ele)=>{
//             ele.dob=2023-ele.age;
//             return ele;
// })
// console.log(newarr)

// //total age of all the people 
// let newobj = {
//     totalPerson:arr.length,
//     AvgAge:0,
//     arr:arr
// }

// TotalAge = arr.reduce((acc, ele)=>{
//     return acc+ele.age;
// },0)

// newobj.AvgAge=TotalAge/arr.length;
// console.log(newobj)



//inheritance => javascript

// class Abc {
//     constructor(name){
//         this.name =name;
//     }
//    //function overloading is not allowed
// //    text(a,b,c) {
// //     console.log("hi this is a function")
// //    } 
// //    printInfo=(a,v)=>{
// //     console.log(this.name);
// //    }
//    printIt(){
//     console.log(this.name)
//    }
//    text(){
//     console.log("hello wrold")
//    }
//    //fucntion overloading is not supported in javasccript
// //    printIt(a,b){
// //     console.log("hello world")
// //    }
   
// }

// let obj = new Abc("reena")
// obj.printIt();
// obj.printIt(12,13);

// let obj = new Abc("reena");
// console.log(obj)
// obj.printInfo()
// let obj2 = new Abc("priya");
// obj2.printInfo();


// class Xyz extends Abc{
//     constructor(age,name){
//         super(name,"this is the text")
//         this.age =age;
//     }
//     printIt(){
//         console.log(this.name);
//         console.log(this.age);
//     }
// }


// let obj = new Xyz(12,"reena");
// console.log(obj)
// obj.printIt();
// obj.text()

// class Bcd extends Xyz{
//     constructor(age,name,phone){
//         super(age,name)
//         this.phone=phone;
//     }
// }


// let obj =new Bcd(12,"reena","242342")
// console.log(obj)
// let obj = new Xyz(12,"reena");
// console.log(obj)