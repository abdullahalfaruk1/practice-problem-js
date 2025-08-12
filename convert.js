// 12 inch 1 feet

function inchToFeet (inch){
    const feet = inch / 12;
    return feet;
} 
// const shouvoHight = inchToFeet(75);
// console.log(shouvoHight);



// 75

function inchToFeet2 (inch){
  const feetfunction = inch / 12;
  const feetNumber = parseInt(feetfunction);
  const feetRemining = inch % 12 ;
  const result = feetNumber + ' ft ' + feetRemining + ' inch';
  return result;

}
const shouvoHight = inchToFeet2(75);
console.log(shouvoHight)

