const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");


const team = [];
//Assuming that there will only be one team manager
function initialize (){
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "What is your team manager's name?"
    },
    {
            type: 'input',
            name: 'id',
            message: "What is your team manager's ID?"
    },
    {
            type: 'input',
            name: "email",
            message: "What is your team manager's email?"
    },
    {
            type: 'input',
            name: "officeNumber",
            message: "What is your team manager's officenumber?"
    }
]) .then(answers => {
    let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
    team.push(manager);
    addtoTeam();
})
}

function addtoTeam(){
    inquirer.prompt([
        {
         type: "list",
         name: "Team",
         message: "Would you like to add a team member?",
         choices: ["Engineer", "Intern", "Employee", "Done building my team"]
        }
    ])
    .then(answers => {
        if(answers.Team === "Engineer"){
            return addEngineer();
        }
        else if(answers.Team === "Intern"){
            return addIntern();
        }
        else if (answers.Team === "Employee"){
            return addEmployee();
        }
        else{
            generatehtml(team);
            console.log(team);
        }
    })
}

function addIntern (){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your intern's name?"
        },
        {
                type: 'input',
                name: 'id',
                message: "What is your intern's ID?"
        },
        {
                type: 'input',
                name: "email",
                message: "What is your intern's email?"
        },
        {
            type: 'input',
            name: "school",
            message: "What is your intern's school"
    }

    ]) .then(answers => {
        let role = "Intern"
        let intern = new Intern(answers.name, answers.id, answers.email, answers.school, role)
        team.push(intern);
        addtoTeam();
    })
    }
    function addEngineer (){
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is your engineer's name?"
            },
            {
                    type: 'input',
                    name: 'id',
                    message: "What is your engineer's ID?"
            },
            {
                    type: 'input',
                    name: "email",
                    message: "What is your engineer's email?"
            },
            {
                type: 'input',
                name: "github",
                message: "What is your engineer's github"
        }
        ]) .then(answers => {
            let role = "engineer"
            let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github, role)
            team.push(engineer);
            addtoTeam();
        })
        }
        function addEmployee (){
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is your employee's name?"
                },
                {
                        type: 'input',
                        name: 'id',
                        message: "What is your employee's ID?"
                },
                {
                        type: 'input',
                        name: "email",
                        message: "What is your employee's email?"
                },

            ]) .then(answers => {
                let role = "employee"
                let employee = new Employee(answers.name, answers.id, answers.email, role)
                team.push(employee);
                addtoTeam();
            })
            }
function generatehtml(data){
    let cards = `  <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Challenge 10</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    </head>
  
    <body>`
    for (let i = 0; i < data.length; i++){
        if (data[i].getRole() === "Engineer"){
        cards += `<div class="card">
                ${data[i].name}
          <div class="card-body">
              <h3 class="card-title">${data[i].getRole()}</h3>
              <p class="card-text"><a href="mailto:${data[i].email}"> ${data[i].email}</a>  
              <a href="https://github.com/${data[i].github}"> Github/${data[i].github}</a></p>
          </div>
        </div>`
        }
        else if (data[i].role === "Intern"){
            cards += `<div class="card">
                    ${data[i].name}
              <div class="card-body">
                  <h3 class="card-title">${data[i].getRole()}</h3>
                  <p class="card-text"><a href="mailto:${data[i].email}"> ${data[i].email}</a>
                     ${data[i].school}</p>
              </div>
            </div>`
            }
            else if (data[i].getRole() === "Employee"){
                cards += `<div class="card">
                        ${data[i].name}
                  <div class="card-body">
                      <h3 class="card-title">${data[i].getRole()}</h3>
                      <p class="card-text"><a href="mailto:${data[i].email}"> ${data[i].email}</a>
                      
                  </div>
                </div>`
                }
                else if (data[i].getRole() === "Manager"){
                    cards += `<div class="card">
                            ${data[i].name}
                      <div class="card-body">
                          <h3 class="card-title">${data[i].getRole()}</h3>
                          <p class="card-text"><a href="mailto:${data[i].email}"> ${data[i].email}</a>
                           ${data[i].officeNumber} </p>
                          
                      </div>
                    </div>`
                    }
                    cards += `  </body>
                    </html>`
    }
    fs.writeFile("index.html", cards, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
    
}})
   
    






}
initialize();