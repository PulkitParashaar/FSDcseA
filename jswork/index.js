// console.log("Hello World");

// var a=12;
// console.log("a:"+a);
// if(a>10){
//     a=30;
//     console.log("hi"+a);
// }
// console.log("hi"+a);

// let a=12;
// console.log("a:"+a);
// if(a>10){
//     let a=30;
//     console.log("hi"+a);
// }
// console.log("hi"+a);

// const a=12;
// console.log("a:"+a);
// if(a>10){
//     let a=30;
//     console.log("hi"+a);
// }
// console.log("hi"+a);

// let a=12;
// let b=12;
// console.log(typeof a);
// let today=Date();
// console.log(today);
// console.log(typeof today);

// let a="12";
// let b=12;
// if(a==b){
//     console.log("hi");
// }
// else{
//     console.log("hi123");
// }
// if(a===b){
//     console.log("hi");
// }
// else{
//     console.log("hi123");
// }

// function hi(){
//     console.log("HI");
// }
// hi();

// function hi(str="helo"){
//     console.log("HI"+str);
// }
// hi();
// hi("JS AND CSS");

// let d=function (str="helo"){
//     console.log("HI"+str);
// }
// d();

// console.log(document);
// console.dir(document);
// const div=document.getElementsByClassName("parent");
// console.log(div);
// // div[0].innerText="ABESEC";
// div[0].innerHTML="<h2 style=color:red>Abes-ec</h2>";
// const h1=document.createElement("h1");
// h1.innerText="Element is Created by DOM function";
// h1.style.backgroundColor="Cyan";
// h1.style.color="red";
// div[0].appendChild(h1);
// console.log(h1);


// const gg=document.getElementById("btn");
// console.log(gg);
// const display=document.getElementById("disp");
// console.log(display);
// GetData=()=>{
//     console.log("Calling GetData Function");
//     display.innerHTML="<h3 style=color:red>WELCOME TO CSE DEPT</h3>";
// }
// gg.addEventListener("click",GetData);


// const promise1=new Promise(
// (resolve,reject)=>{
//     let a=12;
//     if(a>10){
//         resolve("Value of a is resolved");
//     }
//     else{
//         reject("value of a is rejected");
//     }
// }
// );
// promise1.then((msg)=>{console.log(msg)})
// .catch(error=>{console.log(error)})
// .finally(msg=>{console.log("All resoureces have been closed")});

// const promise1=new Promise(
//     (resolve,reject)=>{
//         let a=Math.random()*200;
//         if(a>100 && a<200){
//             resolve("Value of a is resolved");
//         }
//         else{
//             reject("value of a is rejected");
//         }
//     }
//     );
//     promise1.then((msg)=>{console.log(msg)})
//     .catch(error=>{console.log(error)})
//     .finally(msg=>{console.log("All resoureces have been closed")});

// const promise2=new Promise(
// (resolve,reject)=>{
//     resolve({name:"Amit",branch:"Cse"});
// }
// );
// promise2.then((data)=>{console.log(data)}).catch(error=>{console.log(error)});



const response=fetch("https://dummyjson.com/products");
response.then(data=>{
    console.log(data);
    data.json().then(res=>{
        console.log(res.products[0].id+" "+res.products[0].title)
    })
})

