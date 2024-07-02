function fakeBin(x){
  let arr = [];
    
    for (let y of x){
     if (y >= 5) {
       arr.push(1);
     }else{
       arr.push(0);
     }  
  }
    return arr.join("");
    
  }

const result = fakeBin([4,5,34,6,4,6,3,6,34,3]);

console.log(result);

// Output: 0111010110

