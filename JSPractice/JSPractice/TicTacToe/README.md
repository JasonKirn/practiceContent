Custom TicTacToe game that uses a mixture of ES5 and ES6 Javascript.

Uses babel standalone script to transpilate any ES6 to ES5.

Also uses jQuery for simpler logic.

Game works through mapping areas on the TicTacToe board image to create individual areas
that then hold X or O image when pressed.

Gameprogress is tracked in a 2d array to watch for win condition.

Current turn is tracked with an ES6 fat arrow function and is changed after every X or O
is placed.
