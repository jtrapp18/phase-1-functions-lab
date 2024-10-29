// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation-42)
}

function distanceFromHqInFeet(pickupLocation) {
    const distanceInBlocks = distanceFromHqInBlocks(pickupLocation)
    return distanceInBlocks*264
}

function distanceTravelledInFeet (start, destination) {
    const distanceInBlocks = Math.abs(destination - start)
    return distanceInBlocks*264
}

function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet (start, destination)

    if (distanceInFeet<=400) {
        return 0
    }
    else if (distanceInFeet<=2000) {
        return (distanceInFeet-400)*0.02
    }
    else if (distanceInFeet<=2500) {
        return 25
    }
    else {
        return "cannot travel that far"
    }
}