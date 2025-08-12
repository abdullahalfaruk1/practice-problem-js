// **
// simple logic
// year will be a leap year if thr year is divisible by 4
// 

function isLeapYear (year){
    if( year % 4 === 0){
return true;
    }
        
    else{
        return false;
    }
}
// const lipi = isLeapYear(2012);
// console.log(lipi);




// **
//  * 1.those year that is not divisible by 100, if the year is divisible by 4;
// 
// 



function isLeapYear(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
   else if(year % 100 === 0 && year % 400 === 0){
        return true;}
    else{
            return false;
        }

}

const isleap = isLeapYear(2012)
console.log(isleap);