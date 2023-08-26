let result =setTimeout(()=>{
    return 12;
},2000)




let promise = new Promise((resolve, reject)=>{
    let a=90;
    if(a===90){
        resolve(new Promise((res, rej)=>{
            let b=90;
            if(b===90){
                res("hello wolrd")
            }
            else{
                rej("err")
            }
        }))
    }
})

   

// console.log(promise)
promise.then(data=>{
    return data
})
.then(data2=>{
    console.log(data2)
})
.catch(data=>{
    console.log(data)
})



// function print(){
//     console.log(":hello world");
// }
// setInterval(print,2000)


//template string 

// let teamA =90;
// let teamB =80;

// let Str = "team A won the match team A scored "+teamA+" marks and team B scored "+teamB;
// let str1 = `team A won the match team a scored ${teamA} marks and team B scored ${teamB}` 
// console.log(str1)

//  let str2= "this is \n multi line  string";
// console.log(str2)
// let str3 =`this is 
// multi line string`;
// console.log(str3)

//which this is associated with arrow function 

// let functionslist ={
//     name:"lalit",
//     printName:()=>{
//         console.log(this.name+" "+this.surname);
//     },
//     printInfo:function (a,b){
//         console.log(this.name + " "+this.surname);
//         console.log(a+"  "+b)
//     }
// }

// let obj= {
//     name:"nitu",
//     surname:"verma",
// }

// let func2= functionslist.printName.bind(obj);
// func2()
// let func = functionslist.printInfo.bind(obj);
// func(12,34);

// functionslist.printName.apply(obj);
// functionslist.printInfo.apply(obj,[23,23]);
// functionslist.printInfo.call(obj,23,45);

// obj.printName();
// obj["printInfo"]();

//apply bind call



