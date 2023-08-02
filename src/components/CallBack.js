import React from 'react'

export default function CallBack() {

   
   
   
  
//  const arr=[1,2,3,4,5,6,7,8,9]
//  arr.forEach((r)=>{
//   console.log(r)
//  })



// function show(a){
//   // console.log('show function');
//   console.log(a)
// }

    // function getName(name, callback1){
    //   setTimeout(()=>{
    //     console.log('Name callback setTimeOut');
    //     callback1(name)
    //   },1000);
    // }


    // function getHobby(name,callback){
    //   setTimeout(()=>{
    //     console.log('Hobby callback setTimeout ');
    //     callback(name);
    //   },2000);
    // }

    // const nm= getName('shanat', (nm)=>{  console.log(nm);
    //   getHobby(['cricket', 'footbal', 'Reading'], hobby =>{
    //     console.log(hobby)
    //   });
    // });


function getName(name){
     return new Promise((resolve, reject)=>{
       setTimeout(()=>{
         console.log('Name callback setTimeOut');
         resolve(name)
       },1000);
     })
    }


  function getHobby(name){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log('Hobby callback setTimeout ');
        resolve(['cricket', 'football', 'Reading']);
      },2000);
    })
    }

   getName("Shanat" )
   .then(nm => getHobby(nm))
   .then(hobby=>{console.log(hobby)})







              //  PROMISE METHOD
              //  EXAMPLE 1 
        //  const promiseObj= new Promise((resolve, reject)=>{
        //   let req = false;
        //   if(req === true){
        //     resolve("request Success");
        //   }
        //   else{
        //     reject("request Reject");
        //   }
        //  }).then(
        //   (value)=>{console.log(value)}
        //  ).catch(
        //   (err)=>{console.log(err)}
        //  ).finally(
        //   ()=>{console.log("CLEANED")}
        //  )


        // EXAMPLE 2 

        //   const promiseObj= new Promise((resolve, reject)=>{
        //   let req = true;
        //   if(req === true){
        //     resolve("request Success");
        //   }
        //   else{
        //     reject("request Reject");
        //   }
        //  })
        //  promiseObj.then(
        //    (value)=>{console.log(value)},
        //    (error)=>{console.log(error)},
        //  )        

        // PROMISE END 


        

    
    


  return (
    <div>
        <h2 style={{color:'purple', fontSize:'60PX'}}>

       LIFE 
        </h2>
    </div>
  )
}
