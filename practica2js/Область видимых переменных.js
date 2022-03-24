let z = 10;
function displayZ(){
  
    let z = 20;
     
    {
        let z = 30;
        console.log("Block:", z);
    }
     
    console.log("Function:", z);
}
 
displayZ();
console.log("Global:", z);