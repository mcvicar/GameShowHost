var socket_io = require('socket.io');
var io = socket_io();
var socketApi = {};

socketApi.io = io;

var teams = {
  teamone: { Score: 0},
  teamtwo: { Score: 0},
  teamthree: { Score: 0}
}

io.on('connection', function(socket){

    socket.on('room', function(room) {
      console.log(room + " joined");
      socket.join(room);
    });

    socket.on('team question', function(map, category, question, team, round){
      io.emit('show question', map, category, question, team, round);
    });

    socket.on('team correct answer', function(team, value, answer){
      teams[team].Score = teams[team].Score + value;
      io.emit('update score', team, teams[team].Score);
      io.emit('show answer', answer);

      // if incorrect answer fire to the other teams & update gameboard
      // both teams - io.emit('team question', question);
    });

    socket.on('team incorrect answer', function(team){
      // fire to the other teams & update gameboard
      // both teams - io.emit('team question', question);
    });

    socket.on('team penalty', function(minus, team){
      teams[team].Score = teams[team].Score - minus
      io.emit('update score', team, teams[team].Score);
    });

    socket.on('show board', function(){

      io.emit('show scores', teams);
    });

});

module.exports = socketApi;
