
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop) {
  // Only change code below this line
  for (var i = 0; i < contacts.length; i++) {
    var name = contacts[i].firstName;
    
    if (name == firstName){
      if (contacts[i].hasOwnProperty(prop)){ 
        return contacts[i][prop];
      }  else {
        return "No such property";
      } 
    }
  }
  
  //Loop through the names and check for properties first. I made the mistake of trying to return from inside the loop.
  //This led to never getting through the entire loop if the name existed but the property didn't.
  
  return "No such contact";
  // Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
