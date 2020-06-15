// let x = 6
// let y = 7
function add(x, y) {
    return x + y
}
console.log(add(6, 7));
// let n = 6
// let m = 7
function multiply(n, m) {
    // return n + n + n + n + n + n + n
    let total = 0
    for (let index = 0; index < m; index++) {
        // total += n
        // total = total + n
        total = add(total, n)
    }
    return total
}
console.log(multiply(6, 7));
function power(f, h) {
    let total = 1
    for (let index = 0; index < h; index++) {
        total = multiply(total, f)
    }
    return total
}
console.log(power(3, 5));
function factorial(a) {
    let number = 1
    for (let index = 1; index <= a; index++) {
        number = multiply(number, index)
    }
    return number
}
console.log(factorial(4));

let fibonacci = function(result,length){
    let num1 = result[0],
        num2 = result[1],
        next,
        count =2;
        while (count<length){
            next = num1+num2;
            num1=num2;
            num2=next;
            result.push(next);
            count++;
        }
         
        return result;
};

