// Code your solution in this file!
function distanceFromHqInBlocks(num1){
return Math.abs((num1-42));

};

function distanceFromHqInFeet(num1){

    return Math.abs((num1-42)*264);

};


function distanceTravelledInFeet(num1,num2){


 return Math.abs((num1-num2)*264);


};

function calculatesFarePrice(start, destination) {
let distance;
distance = Math.abs((destination-start)*264);

if (distance > 2500) {
    return 'cannot travel that far';
}
else if (distance > 2000 ){

    return 25;
}
else if (distance < 400){


return 0;

}
else {

return ((distance-400)*.02);


}




}
