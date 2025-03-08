// Code your solution in this file!
function distanceFromHqInBlocks(Blocks) {
    return Math.abs(Blocks - 42);
}
console.log(distanceFromHqInBlocks(43));

function distanceFromHqInFeet(Blocks) {
const hqBlock = 42;
const blockToFeet = 264;
return Math.abs(Blocks - hqBlock) * blockToFeet
}
console.log(distanceFromHqInFeet(48));

function distanceTravelledInFeet(initial, final) {
const blockToFeet = 264;
return Math.abs(final - initial) * blockToFeet
}
console.log(distanceTravelledInFeet(50, 60));

function calculatesFarePrice(initial, final) {
    const distanceInFeet = Math.abs(final - initial) * 264;
    
    if(distanceInFeet <= 400) {
        return 0;
    }else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return ((distanceInFeet - 400) * 0.02)
    }else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25;
    }else {
        return "cannot travel that far";
    }

}
console.log(calculatesFarePrice(43, 44));


    