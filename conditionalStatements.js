var age = 10;
if(age>=65) {
    console.log("You get your income from pension.");
} else if(age>=18 && age<65) {
    console.log("Each month you get a salary.");
} else if(age<18) {
    console.log("You get an allowance.");
} else {
    console.log("The value of the age variable is not numerical.");
}
//Output = You get an allowance.

var day = "Sunday";
switch(day) {
    case "Monday":
        console.log("Do coding 1");
        break;
    case "Tuesday":
        console.log("Do coding 2");
        break;
    case "Wednesday":
        console.log("Do coding 3");
        break;
    case "Thursday":
        console.log("Do coding 4");
        break;
    case "Friday":
        console.log("Do coding 5");
        break;
    case "Saturday":
        console.log("Do coding 6");
        break;
    case "Sunday":
        console.log("Do coding 7");
        break;
    default:
        console.log("There is no such day");
}