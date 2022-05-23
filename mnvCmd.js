
const inquirer = require("inquirer");

const changePwd = require("./changePwd.js")
const extendExpiration = require("./extendExpiration.js")

// import {changePwd} from "./changePwd.js"
// import { extendExpiration } from "./extendExpiration.js";

const PasswordPrompt = require("inquirer/lib/prompts/password");
   

console.log("Welcome!");

const questions = [

    {
        type: 'list',
        name: 'enviroment',
        message: "Which enviroment would you like to use?",
        choices: ['Production', 'earlydev', 'dev']
    },
    {
        type: 'input',
        name: 'bulkCreate',
        message: "Bulk create - Enter file name"
    },
    {
    type: 'rawlist',
    name: 'command',
    message: 'which command would you like to do? ',
    choices: ['Update Password', 'Extend Expiration'],
    },

    {
        when: answer => {
              return answer.command == "Update Password"
        },
        type: 'input',
        name: 'email',
        message: "What is your email?",
        validate(value){
            const pass = value.match(
                /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/
            );
            if (pass){
                return true;
            }
            return "Please enter a valid email"
        },
    
    },
    
     {
         when: answer => {
              return answer.command == "Update Password"
            },
        type: 'input',
        name:'password',
        message:'Enter new password', 
    },

    {
        when: answer => {
            return answer.command == "Extend Expiration"
        },
        type: 'input',
        name: 'email',
        message: "What is your email?",
         validate(value){
            const pass = value.match(
                /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/
            );
            if (pass){
                return true;
            }
            return "Please enter a valid email"
        },
    },
    {
        when: answer => {
            return answer.command == "Extend Expiration"
        },
        type: 'list',
        name: 'extend',
        message: 'How many months would you like to extend?',
        choices: ['3', '6', '12'],


    },

    ]


    inquirer.prompt(questions).then((answers) => {
      
        console.log(JSON.stringify(answers, null, '  '));
      });

    