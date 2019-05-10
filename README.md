# Game Show Host
Game Show Host is a little experiment to learn socket.io and express a little better. The basic premise is a "[Jeopardy!](https://en.wikipedia.org/wiki/Jeopardy!)" style game between three teams/contestants and having a host.

## Game logic
- Host picks question for team
- Gameboard screen shows question
- Selected team see's multi-choice options, and picks an answer
- If answer is incorrect, the other teams see the options
- If a team gets the question right, they get updated points and the gameboard screen updates with the answer

## Available Screens
The host has two boards they control,
The gameboard (/gameboard) which all the contestants can see and allows them to choose their category/question.
The hostboard (/hostboard) which the host uses to select the question/category for the contestant.

The team/contestant has one board they control (/teamone, /teamtwo or /teamthree).

## Game questions
The questions are held in a [json file](public/javascripts/board.json). It uses the exact same format as [mc706/javascript-jeopardy](https://github.com/mc706/javascript-jeopardy), who has built a handy [question creator](http://mc706.github.io/javascript-jeopardy/builder.html).
