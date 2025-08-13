const height =[12,45,9,76,86,8,2,654,1];

function getMini(numbers){
 let mini = numbers[0];
     for(const num of numbers){
        if( num < mini){
        mini = num;
        }
    }
    return mini;
    
}
const mini = getMini(height);
console.log('the mini value is : ',mini);