// function fun1(){
//   let a=9;
 
//   function fun2(){
//     let a=24;
  
//     console.log(a)
//   }
//   function fun3(){
//     console.log(a)

//   }fun3()


// a=10;
//   return fun2;

// }
// const abc=fun1();
// abc();

function fun1(){
  let a =5;
  console.log(a)
  function fun2(){
    
    console.log(a)
    function fun3(){
      let a =10;
   

 
      console.log(a);

    }
    fun3()
    function fun4(){
    
      console.log(a)
      
    } fun4();

  } 
  a=8;
  return fun2;
}
const abc=fun1();
abc();
  