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
console.log(new Date());
// let hrs = new Date();
// let hour=(hrs.getHours());
//or
let hour=new Date().getHours();
if (hour >= 0 && hour <= 13) {
    console.log("Good Morning");
} else
if (hour >= 13 && hour <= 17)
{
    console.log("Good Afternoon");
}else
{
console.log("Good Evening");
}
