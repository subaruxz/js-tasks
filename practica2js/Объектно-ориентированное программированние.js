function display(){ 
    console.log(this.name, this.age);
}
const move = function(place){ console.log(this.name, "goes to", place)};
const name = "Tom";
const age = 37;
const salary = 500;
const person = { name, age, salary, display, move};
 
person.display();       // Tom 37
person.move("cinema");  // Tom goes to cinema