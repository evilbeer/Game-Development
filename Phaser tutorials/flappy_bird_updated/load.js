
var loadState = {
    preload: function () {
        this.game.stage.backgroundColor = '#71c5cf';
        this.game.load.image('bird', 'assets/bird.png');
        this.game.load.image('pipe', 'assets/pipe.png');
        this.game.load.audio('jump', 'assets/jump.wav');

        // Start up the physics system of our choice
        this.game.physics.startSystem(Phaser.Physics.ARCADE);


    },

    create: function () {
        // When all assets are loaded, go to the 'menu' state

        this.game.state.start('menu');
    }
};