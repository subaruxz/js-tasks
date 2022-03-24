function menu(n){
  
    if(n==1) return function(x, y){ return x + y;}
    else if(n==2) return function(x, y){ return x - y;}
    else if(n==3) return function(x, y){ return x * y;}
    return function(){ return 0;};
}
 
let action = menu(1);
console.log(action(2, 5));          // 7
 
action = menu(2);
console.log(action(2, 5));          // -3
 
action = menu(3);
console.log(action(2, 5));          // 10
 
action = menu(190);
console.log(action(2, 5));          // 0