

let ScientificDepartment={
    _name:"Tasnee",
     Location:"eeeeeee",
     address: {
        city:"Aswan", 
        Street:"22",
         zipcode:"55"
                     },
      display:function (){
console.log(`name: ${this._name} \n location:${this.location} \n city: ${this.address.city} \n street: ${this.address.Street} \n zipcode: ${this.address.zipcode}`)
    }
                   
}
ScientificDepartment.display()



