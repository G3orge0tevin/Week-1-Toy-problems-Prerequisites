function speedWatch(speed) {
    const speedLimit = 70;
    const demeritPoints5km = 5;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / demeritPoints5km);
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}

// Example usage:
let speed = 80;
speedWatch(speed);  // Output should be "Points: 2"

speed = 135;
speedWatch(speed);  // Output should be "License suspended"
