
  
  // method: "POST" is missing from the object below
  
  
  let body = document.querySelector('body')  

  function submitData(firstName, email){
    const configurationObject = {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
            "name" : firstName,
            "email": email
          }),
      };
    return fetch("http://localhost:3000/users", configurationObject )
    .then(response => response.json())
    .then(body => renderID(body.id))
    .catch(function response(body){
    let message = "Unauthorized Access"
    document.querySelector('body').innerHTML = message;
    })
     };
    
    function renderID(user){
        document.querySelector('body').innerHTML = user;
    }
    
    
    submitData()





