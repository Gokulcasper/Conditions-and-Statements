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
// let person={
//     name:"gokul",
//     age:26,
//     interest:['creating, teaching new things.'],
//     isAlive:true,
    // nested object(object inside another object)
//     address:{
//         city:"namakkal",
//         state:"Tamilnadu"
//     },
// greeting: function(){
//     let msg=`My Name is ${person.name} I'm Interested in ${person.interest}. I'm From ${person.address.city}`;
    // let msg=`My Name is ${this.name} I'm Interested in ${this.interest}. I'm From ${this.address.city}`;
//     console.log(msg);
// }
// };
// person.greeting();

// Factory Functions
// function createStudent(name,interest){
// return{
//     name,
//     interest,
//     greeting(){
//         let msg=`My Name Is ${this.name}. And I'm interested in ${this.interest}`;
//         console.log(msg);
//     }
// };
// }
// let person=createStudent("Gokul","Learning JS");
// person.greeting();


// Constructor Function
// function User(name,interest){
//     // this.name=name;
//     // this.interest=interest;
//     this.name=name;
//     this.interest;
//     this.greeting=function(){
//         console.log(`My Name Is ${this.name}. And I'm Interested in ${interest}`);
//     }
// }
// let Member=new User("Gokul","learn JS");
// Member.greeting();

// Dynamic Object
// const person={
//     name:"gokul",
// }
// person.age=26;
// person.greeting=function(){}
// delete person.greeting;
// // delete person.age;
// console.log(person)


// Constructor Property
// let name="Gokul"; // StringLiterals -> new String("Gokul");
// let age= 3;  // NumberLiterals -> new Number(3);
// let isAlive=true; // BooleanLiterals -> new Boolean(true);
// console.log(name,age,isAlive);

// let name1= new String("Gokul");
// let age1= new Number(3);
// let isAlive1=true; new Boolean(true);
// console.log(name1,age1,isAlive1);


// Primitive Value Types VS Reference Types
// Primitive Type
// let x=10;
// let y=x;
// x=20;
// console.log("x = ", +x);
// console.log("y = ", +y);
// Reference Type
// let x={value:10};
// let y= x;
// x.value=20;
// console.log("x = ", x);
// console.log("y = "+ y);
//Eg (Primitive)
// let cartValue=10;
// function cartItem(cart){
//     cart++;
// }
// cartItem(cartValue);
// console.log(cartValue);
//Eg (Reference)
// let cartValue={value:10};
// function cartItem(cart){
//     cart.value++;
// }
// cartItem(cartValue);
// console.log(cartValue);

// Enumerating Properties Of Object
// const user={
//     name:'Gokul',
//     getName(){
//         console.log(`My Name is ${this.name}`);
//     }
// }
// if('name' in user)
// {
//     console.log("Yes");
// }
// for(let key in user)
// console.log(key)
// for(let key of Object.keys(user))
// console.log(key)
// for(let entry of Object.entries(user))
// console.log(entry)


// Cloning JS Object
// const user={
//     name:'Gokul',
//     getName(){
//         console.log(`My Name is ${this.name}`);
//     }
// }
// 1. Clone
// let another={};
// for(let key in user){
//     another[key] = user[key];
// }
// console.log(another)
// 2. Clone
// let another = Object.assign({age:26},user);
// console.log(another)\
// 3. Clone
// let another = {...user} //Spread Operator 
// console.log(another)

// Math Object
// let mark=[12,54,63,36,26];
// let resultMax=Math.max(...mark);
// let resultMin=Math.min(...mark);
// console.log("Maximum : " ,resultMax)
// console.log("Minimum : " ,resultMin)
// console.log(Math.ceil(12.4));
// console.log(Math.round(12.4));

// String Objects
let firstName = "Gokul";
let lastName = "Raj";
let text="2 * 2"
let para=" Some Text In Content! ";

console.log(firstName.length);
console.log(firstName.charAt(2));
console.log(firstName.concat(' ', lastName));
console.log(firstName.includes("ul"));
console.log(firstName.includes("go"));
console.log(firstName.startsWith("Go"));
console.log(firstName.endsWith("ul"));
console.log(firstName.indexOf("l"));
console.log(firstName.repeat(10));
console.log(firstName.replace("Gokul","Gocool"));
console.log(firstName.slice(2));
console.log(para.split(' ', 3));
console.log(para.substring(10));
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());
console.log(para.trimStart());
console.log(text.valueOf());
console.log(eval(text));
console.log(eval(text.valueOf()));





