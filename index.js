function submitData (name,email){
    fetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    name: "Steve",
    email: "steve@steve.com",
  }),
  
})
.then(function (response) {
    return response.json();
  })
.then(function (object) {
    console.log(object);
  });

}





//  const configurationObject = {
//      method: "POST",
//      headers: {
//        "Content-Type": "application/json",
//        Accept: "application/json",
//     },
//     body: JSON.stringify({
//       dogName: "Byron",
//       dogBreed: "Poodle",
//      }),
//    };
  
 // fetch("http://localhost:3000/dogs", configurationObject) 
 //   .then(function (response) {
    //  return response.json();
   // })
   // .then(function (object) {
   //   console.log(object);
   // });
  


















// Add your code here
