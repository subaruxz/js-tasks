function sum(x, y){
    return x + y;
}
 
function subtract(x, y){
    return x - y;
}
 
function operation(x, y, func){
  
    const result = func(x, y);
    console.log(result);
}
 
console.log("Sum");
operation(10, 6, sum);  // 16
 
console.log("Subtract");
operation(10, 6, subtract); // 4
