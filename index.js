import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
const response = await inquirer.prompt({
    type: "number",
    name: "userInput",
    message: "Enter a number",
    validate: (input) => {
        if (isNaN(input)) {
            return "Please enter a valid number";
        }
        else if (input > 60) {
            return "Number must be in 60";
        }
        else {
            return true;
        }
    }
});
let input = response.userInput;
function startTime(value) {
    const IntTime = new Date().setSeconds(new Date().getSeconds() + value);
    const intervalTime = new Date(IntTime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDifference = differenceInSeconds(intervalTime, currentTime);
        if (timeDifference <= 0) {
            console.log("Time is up");
            process.exit();
        }
        const minute = Math.floor((timeDifference % (3600 * 24)) / 3600);
        const second = Math.floor((timeDifference % 60));
        console.log(`${minute.toString().padStart(2, "0")}: ${second.toString().padStart(2, "0")}`);
    }, 1000);
}
startTime(input);
