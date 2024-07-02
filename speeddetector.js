//1.function to prompt speed
function promptForSpeed() {
    let speed;
    while (true) {
        speed = prompt("Enter the speed of the car (km/h):");
        speed = parseFloat(speed);

        // Checking if the input is a valid speed
        if (!isNaN(speed) && speed >= 0) {
            break;
        } else {
            alert("Please enter a valid speed.");
        }
    }
    return speed;
}
//2.function to calculate the demerit points
function getDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed <= speedLimit) {
        console.log("Ok");
        return;
    }

    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

    if (demeritPoints > 12) {
        console.log("License suspended");
    } else {
        console.log(`Points: ${demeritPoints}`);
    }
}


//3.function to initiate the porcess
function speedDetector() {
    const speed = promptForSpeed();
    getDemeritPoints(speed);
}

speedDetector();
