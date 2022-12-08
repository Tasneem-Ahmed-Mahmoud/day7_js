
let con=["jordon","iraq","lebnan","egypt","iraq","lebnan","egypt"]
let countries =new Set(con);

// for(let i of con.values()){
//     countries.add(i)
// }

console.log(countries);
/////////////////////////////
 let totalLength=con.length;
 let smallLEN=countries.size;
 let repeated =totalLength-smallLEN;
 console.log("the repeated countries is:",repeated)