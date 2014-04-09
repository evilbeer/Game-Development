
// Initialize Phaser
var game = new Phaser.Game(400, 490, Phaser.AUTO, 'game_div');

// Our 'score' global variable
score = 0;
/* Our game state management variable
 false - the game is in its 'menu' state
 true - the game is in its 'play' state */
isGameActive = false;

// Define all the states
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);


// Start with the 'load' state
game.state.start('load');

