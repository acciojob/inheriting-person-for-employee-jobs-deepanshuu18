/*  your css code here. If applicable */
// complete this js code
function Person(name, age) {
	this.name=name;
	this.age=age;
}
greet() {console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }

function Employee(name, age, jobTitle) {
	constructor( name,age,jobTitle){
		super(name,age);
		this.jobTitle=jobTitle;
	}
}

 jobGreet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
  }
}
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
