let  fruits = ["apple", "strawberry", "banana", 22,
"orange", "mango"]


let test=fruits.filter(function(frute){

if(typeof(frute)=="string"){
   
    return frute
}

})

console.log("these all is a string")
console.log(test)

////////////////

let startWithA=fruits.filter(function(frute){

    if(frute[0]=="a"){
       
        return frute
    }
    
    })
    console.log("these all start with a ")
    console.log(startWithA)
    ///////////
    let startWithBorS=fruits.filter(function(frute){

        if(frute[0]=="b"|frute[0]=="s"){
           
            return frute
        }
        
        })

        console.log("these all start with b or s ")
    console.log(startWithBorS)
    ///////////

    console.log("these all start with b or s ")
startWithBorS.forEach(element => {
      console.log(element)  
    });

/// anthor solution
    console.log("these all start with b or s ")
    fruits.forEach(function(frute){
        if(frute[0]=="b"|frute[0]=="s"){
           
           console.log(frute)
        }
    })