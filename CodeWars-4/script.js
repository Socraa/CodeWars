//1st Problem
function betterThanAverage(classPoints, yourPoints) {
    let sum = 0
    
    for( let i = 0; i < classPoints.length; i++){
      sum += classPoints[i];
    }
    
    if ((sum / classPoints.length) <= yourPoints){
        return true;
    
    }else{
      return false;
    }
  }

let arr = betterThanAverage([34,2,4,2,3,545,23], 999);
console.log(arr); // Output: True



//2nd Problem
function grow(x){
  
  let num = 1;
  
  for(let i = 0; i < x.length; i++){
    
    num *= x[i];
        
  }
  return num;

}