// let weather = "hot";
// if (weather === "hot") {
//     console.log("condition: Hot");
// } else {
//     console.log("condition: Cold")
// }
// let isRaining=true;
// let isCloudy =true;
// if (isRaining && isCloudy) {
//     console.log("Don't Forget To Take Umberlla");
// } else {
//     console.log("Sky is Normal");
// }

// let hour=13;
// console.log(new Date());
// let hrs = new Date();
// let hour=(hrs.getHours());
//or
// let hour=new Date().getHours();
// if (hour >= 0 && hour <= 13) {
//     console.log("Good Morning");
// } else
// if (hour >= 13 && hour <= 17)
// {
//     console.log("Good Afternoon");
// }else
// {
// console.log("Good Evening");
// }

//Switch Statements
// let grade = "A";
// switch(grade){
//     case "A":
//     case "A+":
//         console.log("Super Grade");
//         break;
//     case "E":
//         console.log("Excellent Grade");
//         break;
//     case "P":
//         console.log("Just Pass");
//         break;
//     case "F":
//         console.log("Fail");
//         break;
//     default:
//         console.log("unknown grade");
// }
//Give the value by the Order High to Low
// let mark = 950;
// switch(true){
//     case mark > 90:
//         console.log("Excellent");
//         break;
//     case  mark > 70:
//         console.log("Good");
//         break;
//     case  mark > 40:
//         console.log("Just Pass");
//         break;
//     case  mark < 40:
//         console.log("Fail");
//         break;
//     default:
//         console.log("unknown grade");
// }
// let mobile = 7000;
// switch(true){
//     case  mobile > 60000:
//         console.log("Buy Iphone");
//         break;
//     case mobile > 10000:
//         console.log("Buy Android Mobile");
//         break;
//     case  mobile > 5000:
//     case  mobile < 10000:
//         console.log("Buy Basic Mobile");
//         break;
//     default:
//         console.log("You Can't afford mobile phone Now!");
// }

// Looping Conditions
// for(let i=1;i<=5;i++){
//     console.log("Number #", i);
// }
// for(let i=1;i<=5;i++){
//     if(i % 2 !== 0){
//         console.log("Number #" + i);
//     }
// }
// for(let i = 1; i <= 10; i++ ){
//     if(i % 2 !== 0){
//         console.log("Odd Number #" + i);
//     }
// }
// Or its not Correct FOR Loop
// let i = 1;
// for(; i <= 10;  ){
//     if(i % 2 !== 0){
//         console.log("Odd Number #" + i);
//     }
//     i++;
// }

//While Loop
// let i=0;
// while(i<=10)
// {
//     if(i%2 == 0){
//     console.log("While Even Number", i);
//     }
//     i++;
//     console.log(i )
// }

//Do While Loop
// let i=0;
// do{
//     if(i %2 !== 0){
//         console.log("Do While Even Number", i);
//         }
//         i++;
    // console.log(i)
// }while(i <= 10);

// For In Loop
// Object
// const person={
//     name:'gokul',
//     age:26,
//     sex:'Male'
// };
// for(let key in person)
// {
//     console.log(key + " : ",person[key])
// }
// Array
// let color=['red','green','yellow'];
// for(let index in color)
// {
    // console.log(index)
//     console.log(color[index])
// }

// For Of Loop
// let colors=['red','green','yellow'];
// for(let color of colors)
// {
//     console.log(color)
// }

// for(;;)
// {
//     console.log("infinit loop")
// }


//Object and OOP
// let name="Gokul";
// let age=26;
// let interest=['creating, teaching new things.'];
// let address={
//     city:"namakkal",
//     state:"Tamilnadu",
// }

// function greeting(){
    // let msg="My Name Is " + name + " I'm interested in " + interest;
    //OR
//     let msg=`My Name Is ${name} I'm Interested in ${interest}`;
//     console.log(msg);
// }
// greeting();


//Encapsulation
// let person={
//     name:"gokul",
//     age:26,
//     interest:['creating, teaching new things.'],
//     isAlive:true,
//     // nested object(object inside another object)
//     address:{
//         city:"namakkal",
//         state:"Tamilnadu"
//     }
// };
// function greeting(){
// console.log(`My Name is ${person.address.city} I'm Interested in ${person.interest}`)
// }
// greeting()
//OR 
// OPP (Object-Oriented Programming)
let person={
    name:"gokul",
    age:26,
    interest:['creating, teaching new things.'],
    isAlive:true,
    // nested object(object inside another object)
    address:{
        city:"namakkal",
        state:"Tamilnadu"
    },
greeting: function(){
    let msg=`My Name is ${person.name} I'm Interested in ${person.interest}. I'm From ${person.address.city}`;
    // let msg=`My Name is ${this.name} I'm Interested in ${this.interest}. I'm From ${this.address.city}`;
    console.log(msg);
}
};
person.greeting();
