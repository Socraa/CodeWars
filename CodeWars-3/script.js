function oddOrEven(array) {
  
    let sum = 0;
    
    if (array.length == 0){
        array = [0];
    }
    
    array.forEach(arr =>{
      sum += arr;
    })
    
    if(sum % 2 == 0){
      return "even";
    
    }else{
      return "odd";
    }
  }


  console.log(oddOrEven([3,5,34,4,5,3])); // 54

  //Output: even

