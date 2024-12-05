// find even and odd numbers
// const nums=[1,2,3,4,5,6,7,8]
// const even=nums.filter((item)=>{
//   return item%2===0
// })
// console.log(even)



// const Array=[1,2,3,4,2,4]
// const duplicateArray=Array.filter((ele,index,arr)=>arr.indexOf(ele)!==index)
// console.log(duplicateArray)


// const Array=[1,2,3,4,5,6]
// const maxNumber=(arr)=>{
//   return arr.reduce( function (pre,cur){
//     return pre>cur?pre:cur
//   })

// }
// console.log(maxNumber(Array))



// const Array=[1,2,3,4,5,6]
// const minNumber=(arr)=>{
//   return arr.reduce (function(pre,cur){
//     return pre<cur?pre:cur

//   })

// }
// console.log(minNumber(Array))




// const Array=[
//   {
//     name:'komal',age:"32"},
//     {name:"neha",age:"31"},
//     {name:"prakash",age:"29"}
// ];
// const Filter=Array.filter((item)=>{
//   return item.age<32

// })
// console.log(Filter)
// const Find=Array.find((item)=>{
//   return item.age>29
// })
// console.log(Find)



// find the second largest value for the given array
// const Array=
// [1,2,3,4,5]
// const largestValue=(arr)=>{
//   firstLargest=Math.max(...arr)
//   index=arr.indexOf(firstLargest)
//   arr.splice(index,1)
//   secondLargest=Math.max(...arr)
//   return (secondLargest)

// }
// console.log(largestValue(Array))
 


// find the misssing value from the given array
// const Array=[1,2,3,4,7,6,9,10]
// const missArray=[]
// const missingValue=(arr)=>{
//   const minValue=Math.min(...arr)
//   const maxValue=Math.max(...arr)
//   for(let i=minValue;i<maxValue;i++){
//     if(arr.indexOf(i)<0){
//       missArray.push(i)

//     }
//   }
//   return(missArray)

// }
// console.log(missingValue(Array))




// const Array=[1,2,3,4]
// const sumOfnum=(arr)=>{
//   return arr.reduce((pre,cur)=>{
//     return pre+cur

//   })


// }
// console.log(sumOfnum(Array))

// find the factorial of given number
// const inputNum=prompt("enter your name")
// let fact=1;
// if(inputNum<0){
//   console.log(`factorial of ${inputNum} is not possible`)
// }
// else{
//   for(let i=1;i<=inputNum;i++){
//     fact=fact*i
//   }
//   console.log(`factorial of ${inputNum} is ${fact}`)

// }

// find the largest value from the given array
// const Array=[12,4,3,5]
// const largestValue=Array.reduce((pre,cur)=>{
//   return pre>cur?pre:cur

// })
// console.log(largestValue)
  





// sort the array without using inbluid function
// const Array=[1,5,6,3,7,10,9]
// let swap;
// for(let i=0;i<Array.length;i++){
//   for(let j=0;j<Array.length;j++){
//     if(Array[i]>Array[j]){
// swap=Array[i];
//     Array[i]=Array[j];
//     Array[j]=swap;
//   }
// }
// }
// console.log(Array)

// find the sum of array
// const arrNumber=[1,9,3,4]
// const sumOfNumber=(arr)=>{
//   return arr.reduce((pre,cur)=>{
//     return pre+cur

//   })

// }
// console.log(sumOfNumber(arrNumber))


// how to find prime number in javascript
// const number=prompt("enter number")
// if(number==1){
//   console.log(`${number} is not prime not composite`)
// }else if(number>1){
//   console.log(`prime number of ${number}is not possible`)
// }else{
//   for(let i=2;i<number)
// }
















