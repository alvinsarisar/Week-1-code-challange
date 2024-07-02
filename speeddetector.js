
function promptForSpeed() {
    let speed;
    while (true) {
        speed = prompt("Enter the speed of the car (km/h):");
        speed = parseFloat(speed);

        // Check if the input is a valid number
        if (!isNaN(speed) && speed >= 0) {
            break;
        } else {
            alert("Please enter a valid speed.");
        }
    }
    return speed;
}

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



function speedDetector() {
    const speed = promptForSpeed();
    getDemeritPoints(speed);
}

speedDetector();
