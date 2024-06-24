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
let grade = "A";
switch(grade){
    case "A":
    case "A+":
        console.log("Super Grade");
        break;
    case "E":
        console.log("Excellent Grade");
        break;
    case "P":
        console.log("Just Pass");
        break;
    case "F":
        console.log("Fail");
        break;
    default:
        console.log("unknown grade");
}
//Give the value by the Order High to Low
let mark = 950;
switch(true){
    case mark > 90:
        console.log("Excellent");
        break;
    case  mark > 70:
        console.log("Good");
        break;
    case  mark > 40:
        console.log("Just Pass");
        break;
    case  mark < 40:
        console.log("Fail");
        break;
    default:
        console.log("unknown grade");
}