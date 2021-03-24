// Add your code here
configurationObject = {
    method:"POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
        dogName: "Byron",
        dogBreed: "Poodle"
      })
}; 
  
fetch("http://localhost:3000/dogs",configurationObject).then(function(resp){return resp.json()}).then(function(json){console.log(json)}) .catch(function(error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
  }); 

  function submitData(inp){
    let configObj = {
        method:"POST",
        heaeders: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(inp)
    };

    fetch("http://localhost:3000/users",configObj)
  }