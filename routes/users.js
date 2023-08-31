const express = require('express');
const router = express.Router();


let users = [
    {
        firstName: "John",
        lastName: "wick",
        email:"johnwick@gamil.com",
        DOB:"22-01-1990",
    },
    {
        firstName: "John",
        lastName: "smith",
        email:"johnsmith@gamil.com",
        DOB:"21-07-1983",
    },
    {
        firstName: "Joyal",
        lastName: "white",
        email:"joyalwhite@gamil.com",
        DOB:"21-03-1989",
    },
    {
        firstName: "Jesús",
        lastName: "Asesino",
        email: "asesinojesus@asesinosreunidos.com",
        DOB: "10/10/1969"
    },
];

// GET request: Retrieve all users
router.get("/",(req,res)=>{
// Copy the code here
    //res.send(users);
    //update
    res.send(JSON.stringify({users},null,4));
  //res.send("Yet to be implemented")//This line is to be replaced with actual return value
});

// GET by specific ID request: Retrieve a single user with email ID
//router.get("/:email",(req,res)=>{
  // Copy the code here
  router.get("/:email",(req,res)=>{
    const email = req.params.email;
    let filtered_users = users.filter((user) => user.email === email);
    res.send(filtered_users);
});
  //res.send("Yet to be implemented")//This line is to be replaced with actual return value
//});


// POST request: Create a new user
//router.post("/",(req,res)=>{
  // Copy the code here
  router.post("/",(req,res)=>{
    users.push({"firstName":req.query.firstName,"lastName":req.query.lastName,"email":req.query.email,"DOB":req.query.DOB});
    res.send("The user" + (' ')+ (req.query.firstName) + " Has been added!")
});
  //res.send("Yet to be implemented")//This line is to be replaced with actual return value
//});


// PUT request: Update the details of a user by email ID
//router.put("/:email", (req, res) => {
  // Copy the code here
  router.put("/:email", (req, res) => {
    const email = req.params.email;
    let filtered_users = users.filter((user) => user.email === email);
    if (filtered_users.length > 0) {
        let filtered_user = filtered_users[0];
        let DOB = req.query.DOB;
        let firsteName = req.query.firsteName;
        let lastName = req.query.lastName;
        //if the DOB has changed
        if(DOB) {
            filtered_user.DOB = DOB
        }
        if(firsteName) {
            filtered_user.firsteName = firsteName
        }
        if(lastName) {
            filtered_user.lastName = lastName
        }
        /*
        Include code here similar to the one above for other attibutes
        */
        users = users.filter((user) => user.email != email);
        users.push(filtered_user);
        res.send(`User with the email  ${email} updated.`);
    }
    else{
        res.send("Unable to find user!");
    }
  });
  //res.send("Yet to be implemented")//This line is to be replaced with actual return value
//});


// DELETE request: Delete a user by email ID
//router.delete("/:email", (req, res) => {
  // Copy the code here
  router.delete("/:email", (req, res) => {
    const email = req.params.email;
    users = users.filter((user) => user.email != email);
    res.send(`User with the email  ${email} deleted.`);
  });
  //res.send("Yet to be implemented")//This line is to be replaced with actual return value
//});

module.exports=router;


//hasta aquí 31Agosto2023
//next: Exercise 6: Creating the DELETE method:
