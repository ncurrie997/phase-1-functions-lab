// Code your solution in this file!
const hdQrts = 42
let distanceInBlocks

function distanceFromHqInBlocks(blockNo) {
   if (blockNo > hdQrts) {
    distanceInBlocks = blockNo - hdQrts;
} else {
    distanceInBlocks = hdQrts - blockNo;
}
return distanceInBlocks;
}


function distanceFromHqInFeet(blockDistance) {
    distanceFromHqInBlocks(blockDistance)
    return distanceInBlocks * 264;
}

function distanceTravelledInFeet(block1, block2) {
    if (block1 >= block2) {
        return 264 * (block1 - block2);
    } else { 
        return 264 * (block2 - block1);
    }
}

function calculatesFarePrice(block1, block2) {
    let discount = 400 * .02;
      if (distanceTravelledInFeet(block1, block2) <= 400) {
        return 0;
      } else if (distanceTravelledInFeet(block1, block2)<=2000) {
        let fare = (distanceTravelledInFeet(block1, block2) * .02 - discount).toFixed(2);
        return parseFloat(fare);
      } else if (distanceTravelledInFeet(block1, block2)<=2500) {
        let fare = 25
        return fare;
      } else {
        return 'cannot travel that far';
      }
          
      }
  