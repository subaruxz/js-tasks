function change(array){
    array[0] = 8;
}
function changeFull(array){
    array = [9, 8, 7];
}
 
var numbers = [1, 2, 3];
 
console.log("before change:", numbers);     // [1, 2, 3]
change(numbers);
console.log("after change:", numbers);      // [8, 2, 3]
changeFull(numbers);
console.log("after changeFull:", numbers);  // [8, 2, 3]