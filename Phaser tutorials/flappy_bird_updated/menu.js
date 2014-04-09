
var menuState = {
    create: function () {

        var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.start, this);

        var style = { font: '30px Arial', fill: '#fff' };
        var x = game.world.width / 2, y = game.world.height / 2;

        var text = this.game.add.text(x, y - 50, 'Press the space key to begin', style);
        text.anchor.setTo(0.5, 0.5);

        if (score > 0) {
            var scoreLabel = this.game.add.text(x, y + 50, 'Score: ' + score, style);
            scoreLabel.anchor.setTo(0.5, 0.5);
        }

    },

    // Starts the actual game
    start: function () {
        // Check whether the game is not yet in active state
        if (!isGameActive)  {
        isGameActive = true;
        score = 0; // Reset the score
        this.game.state.start('play');
        }
    }
};
