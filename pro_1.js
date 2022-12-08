


class Person{
    _name;
    ssn;
    constructor(n,s){
this._name=s=n;
this.ssn=s;
if(this.constructor == Person){
    throw "con not "
        }
    }

 
  welcome(){
    console.log(`welecom ${this._name}`)
  }
    
}
/////////////////////Employee///////////////
class Employee extends Person{
specilizatin;
salary;
static count=0;
#rule;
constructor(_name,ssn,specilizatin,salary){
    super(_name,ssn);
    this.specilizatin=specilizatin;
    this.salary=salary;
Employee.count++;
}
 setRule(rile){
this.#rule=rile;

 }
 getRule(){
    console.log(this.#rule)
 }
static  displayHTRules(){
    console.log("our rules")
}

employeeInfo(){

    console.log(`name: ${this._name} && specilization: ${this.specilizatin} && salary: ${this.salary} && ssn: ${this.ssn}`)

}

showSalary(){
    console.log(`yor salary is ${this.salary}`)
}
increaseSalalry(inc){
    console.log(`total salary is ${this.salary + inc}`)

}
}
////////////////Student//////////////////
class Student extends Person{
level;
grade;
constructor(_name,ssn,level,grade){
    super(_name,ssn)
    this.level=level;
    this.grade=grade;
   
}
   studentInfo(){
    console.log(`name: ${this._name} && level: ${this.level} && grade: ${this.grade} && ssn: ${this.ssn}`)
}

}

///////////person 

let pre=new Person("Ahmed",24546);
console.log(pre)
////////////////////////////Employee

let emp1=new Employee("Ahmed",24546,"Admin",3000);
let emp2=new Employee("Ali",24546,"Admin",3000);
emp1.employeeInfo();
emp1.increaseSalalry(33)
emp1.showSalary()
Employee.displayHTRules()
 console.log(`number of instans ${Employee.count}`)///count



 //////////////////////////////Student
 let studen1t=new Student("Ahmed",24546,"first",300);
 studen1t.studentInfo();