
/// foreach ----wo'not return values
 
let  arr=[22,43,55,6788,898,777,898]
let a=arr.filter((a)=>{
    return a%2==0
})
console.log(a);
//filter uses call back functions