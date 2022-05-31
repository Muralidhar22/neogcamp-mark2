var readlineSync = require ("readline-sync");
var chalk = require("chalk");
// level one questions
var levelOneQuestions = [
  {
    question: "Who prints Indian currency notes? ",
    choices: ["FBI","CID","RBI","CBI"],
    answer: "RBI",
  },
  {
    question: "What happens if you do not pay a credit card bill on time? ",
    choices: ["Use your debit card","You go into debt","Declare bankrupty","Pay interest"],
    answer: "You go into debt",
  },
  {
    question: "Who pays interest on a loan?",
    choices: ["The borrower","The bank"],
    answer: "The borrower",
  },
  {
    question: "Amount of money originally borrowed? ",
    choices: ["Mortgage","Principal", "Annual percentage rate (APR)", "Finance company"],
    answer: "Principal",
  },
  {
    question: "Money owed to a person or a business? ",
    choices: ["Debit","Credit","Debt","Late Fee"],
    answer: "Debt",
  }
]
// level two questions
var levelTwoQuestions = [
  {
    question: "The amount of money you make per year",
    choices: ["Monthly income","Annual income","Monetary"],
    answer: "Monthly income",
  },
  {
    question: "If you buy a company's stock...",
    choices:["you own the part of the company","you have lent money to the company","you're liable for the company's debt"],
    answer: "you own the part of the company",
  },
  {
    question: "Managing money throughout life in order to reach financial goals is called? ",
    choices: ["Financial Planning","Financial Goals","Well-being", "Emotional"],
    answer: "Financial Planning",
  },
  {
    question: "In India what type of account do you need to invest in Stocks",
    choices: ["Dmart","Demat","Defi","Deposit"],
    answer: "Demat",
  },
  {
    question: "Relationship of risk - reward ? ",
    choices: ["Directly proportional","Inversely proportional"],
    answer: "Directly proportional",
  }
]
//level three questions
var levelThreeQuestions = [
  {
    question: "what financial system current Central banks work on?",
    choices:["Centralized","Decentralized"],
    answer: "Decentralized",
  },
  {
    question: "Are NFT's a commodity? ",
    choices: ["Yes","No"],
    answer: "Yes",
  },
  {
    question: "Which investment option do you think has higher returns? ",
    choices: ["Fixed Deposit","Stock Market","Real Estate","Doge COIN 🐶"],
    answer: "Stock Market",
  },
  {
    question: "Stocks offered by a company is also called as? ",
    choices: ["Doge","Partnership","Equity","Bond"],
    answer: "Equity",
  },
  {
    question: "Can we trade one NFT with other NFT",
    choices: ["Yes","No"],
    answer: "No",
  }
]
var score = 0;
var nextLevel = false;
var randomText = ["STONKS💹","💲💲Brrr💲💲", "🤑🤑MANNEY🤑🤑","💸💸FLY HIGH💸💸","💰💰💰💰💰","💵💵THIS IS BIZINESS💵💵"]
// welcome message
console.log(chalk.cyanBright(`Welcome to 💲${chalk.magentaBright("FINANCE")}💲 QUIZ\n${chalk.bgBlueBright.black('This is not a serious quiz no need to stress out 😁')}`));

answer = readlineSync.question('Do you want to proceed? ', {
  trueValue: ['yes', 'yeah', 'yep','y'],
  falseValue: ['no', 'nah', 'nope','n']
});
  
if (answer === true) {
  console.log('Let\'s go!\n');
  start();
} else if (answer === false) {
  console.log('Oh, It\'s ok...Have a nice day!');
} else {
  console.log('Sorry. What does "' + answer + '" you said mean?,please try running again...');
}

// start function
function start(){
  
  console.log("GAMEPLAY:\n")
  console.log(`1) There will be three levels, each level consists of 5 questions\n2) when answered 5 questions correctly you will reach to the next level\n3) Complete three levels and post it on twitter and 😁 tag me @murali_14\n`)
  
  var name = readlineSync.question(chalk.greenBright('please type in your name and press enter key, to proceed: '),{
  defaultInput: 'anonymous'
  })
  
  console.log(chalk.bgWhiteBright.black.bold(`${chalk.red(name)},😀 you can start answering by selecting an option number\n`))
  console.log("GOOD LUCK!!\n")
  startLevel()
}

// selecting the level of questions
function startLevel(){
    for(var level = 1; level <= 3; level++){
      
        if(level === 1){
          console.log("LEVEL ONE OF 💲FINANCE💲 QUIZ\n")
            displayQuestions(levelOneQuestions) ? qualified() : lost();
            if(!nextLevel){ return; } 
        }
      else if(level === 2){
        console.clear()
        console.log(`Congratulations🎉,now on to the next ${chalk.rgb(3, 160, 98)('LEVEL')}`)
        console.log("LEVEL TWO OF 💲FINANCE💲 QUIZ\n")
          displayQuestions(levelTwoQuestions) ? qualified() : lost();
          if(!nextLevel){ return; } 
      }
      else if(level === 3){
        console.clear()
        console.log(`Congratulations🎉,now on to the next ${chalk.rgb(3, 160, 98)('LEVEL')}`)
        console.log("LEVEL THREE 🤑 OF 💲FINANCE💲 QUIZ\n")
        console.log("Get ready for More Stonks 💹 and DOGE..😂\n")
          displayQuestions(levelThreeQuestions) ? console.log(`Hurrah 🎊,${name} you WON!!,post your result on twitter and 😁 tag me @murali_14`) : console.log(chalk.cyanBright("WELL DONE!! and thanks for taking this quiz like a champ"))
      }
    }
}

// Display Questions
function displayQuestions(questions){
    for (var i=0; i<questions.length; i++){
      var quiz = (questions[i])
      play(quiz.question, quiz.choices, quiz.answer)
  }
  if(score === 5){
    score = 0;
    return true
  }
  else return false
}

// play quiz
function play(question, choices, answer){
  var selectedOption = readlineSync.keyInSelect(choices, chalk.inverse.bold(question))
  console.log('-------------------')
   console.log(randomText[Math.floor(Math.random() * randomText.length)])
  console.log('-------------------')
  if (choices[selectedOption] === answer){
    score++;
  }
}
// if the player qualifies the level
function qualified(){
  nextLevel = true
}
// if the player loses in first or second level
function lost(){
  nextLevel = false
  console.log(`Sorry 😯 you can't continue to next level, BETTER LUCK NEXT TIME!!`)
}