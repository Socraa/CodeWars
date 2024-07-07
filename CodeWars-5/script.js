function highAndLow(numbers){

    const toArr = numbers.split(" ");

    let minn = Math.min(...toArr);
    let maxx = Math.max(...toArr);

    const result = [minn, maxx];

    let shi = result.join(" ");

    return shi;
}

console.log(highAndLow("1 2 3"));