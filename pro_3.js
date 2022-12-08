


 let arr=[3,4,5,6,7,8];


 function max(...arr){
    let maxVal=arr[0];
    for(let i=0; i<arr.length;i++){
if(maxVal<arr[i]){
    maxVal=arr[i]
}
    }
    return maxVal;
 }


 function min(...arr){
    alert()
    let minVal=arr[0];
    for(let i=0; i<arr.length;i++){
if(minVal>arr[i]){
    minVal=arr[i]
}
    }
    console.log(minVal)
    return minVal;
 }

 console.log(max([8,9,8,6,99]))
 console.log(min(...arr,33))