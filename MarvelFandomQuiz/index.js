var readlineSync = require('readline-sync');
 
 var usernamequestion= "Enter your name!: "
var username = readlineSync.question(usernamequestion)
console.log("Welcome "+username)
console.log("This is a small quiz about Marvel for the fans to showcase and test their knowledge about the MARVEL CINEMATIC UNIVERSE! ")

//Here you can add questions
var highscore=[
  {
    name:"Divyansh",
    score:5
  },
  {
  name:"Peter",
  score:4
  },
  {
    name:"Dr. Strange",
    score: 3
  },
]
var questionf=[
  {
  question: "What is the name of the librarian at Kamar-Taj in Kathmandu, Nepal in the first movie of Dr. Strange?\na. Baron Mardo\nb. Dormamu \nc. Wong\nd. Ancient one\n",
  answer:"c"
  },
  {
  question: "Who was the villain in the first Andrew Garfield Spider-Man movie\na.Venom\nb. Lizard\nc. Vulture\nd. Green Goblin\n",
  answer:"b"
  },
  {
  question: "Star-Lord is half Human and half what?\na.Frog\nb.celestial\nc. Vulture\nd. Asgardian\n",
  answer:"b"
  },
  {
  question: "Who was the original leader of the sinister six\na.Green Goblin\nb. Dr Octopus\nc. Venom \nd. Kingpin\n",
  answer:"b"
  },
  {
  question: "How many spiderman movies are there?\na.5\nb. 6\nc. 7\nd. 8\n",
  answer:"c"
  }
]

var score=0
function quiz(question,answer){
  var useranswer =readlineSync.question(question)
  
  if (useranswer.toLowerCase()==answer)
  {
    score=score+1
  }
  
  else{
    if(score>0){
    score=score-1
    }
  }
 
  
}
for (var i=0;i<questionf.length;i=i+1)
  {
    var currentquestion=questionf[i]
    quiz(currentquestion.question,currentquestion.answer)
  }

  console.log("Final Score for:"+username,score)
  
  
  console.log("If you got a new high score send us the screenshot and we will add your name to the HIGH SCORE LIST!!\nThis is the high score list")

  for (var j=0;j<highscore.length;j=j+1)
  {
    var highscorer=highscore[j]
    console.log("Username: "+highscorer.name)
    console.log("Score: "+highscorer.score)
    
  }

