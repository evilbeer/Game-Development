
var playState = {

    create: function () {


        var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.jump, this);

        this.pipes = game.add.group();
        this.pipes.createMultiple(12, 'pipe');
        this.pipes.forEach(function(pipe) {
            pipe.checkWorldBounds = true;
            pipe.outOfBoundsKill = true;
        }, this);

        game.time.events.loop(1500, this.addRowOfPipes, this);

        this.bird = this.game.add.sprite(100, 245, 'bird');

        // Enable physics for our sprites
        game.physics.enable(this.bird, Phaser.Physics.ARCADE);
        game.physics.enable(this.pipes, Phaser.Physics.ARCADE);

        this.bird.body.gravity.y = 1000;
        this.bird.anchor.setTo(-0.2, 0.5);

        var style = { font: "30px Arial", fill: "#ffffff" };
        this.labelScore = this.game.add.text(20, 20, "0", style);

        this.jumpSound = this.game.add.audio('jump');
        

    },

    update: function () {
        if (this.bird.inWorld == false)
            this.restartGame();

        if (this.bird.angle < 20)
            this.bird.angle += 1;

        // The type of physics has to be specified
        this.game.physics.arcade.overlap(this.bird, this.pipes, this.hitPipe, null, this);


    },

    jump: function () {
        if (this.bird.alive == false)
            return;

        this.bird.body.velocity.y = -350;
        this.game.add.tween(this.bird).to({ angle: -20 }, 100).start();
        this.jumpSound.play();
    },

    hitPipe: function () {
        // On collision we set the state of the game to inactive
        isGameActive = false;

        if (this.bird.alive == false)
            return;

        this.bird.alive = false;
        this.game.time.events.remove(this.timer);

        this.pipes.forEachAlive(function (p) {
            p.body.velocity.x = 0;
        }, this);
    },

    restartGame: function () {
        // Reset the game state back to inactive
        isGameActive = false;


        this.game.time.events.remove(this.timer);

        this.game.state.start('menu');
    },

    addOnePipe: function (x, y) {
        var pipe = this.pipes.getFirstDead();
        pipe.reset(x, y);
        pipe.body.velocity.x = -200;
    },

    addRowOfPipes: function () {

        // If the game is inactive, we don't do anything here.
        if (isGameActive) {
        var hole = Math.floor(Math.random() * 5) + 1;

        for (var i = 0; i < 8; i++)
            if (i != hole && i != hole + 1)
                this.addOnePipe(400, i * 60 + 10);

        // No 'this.score', but just 'score'
        score += 1;
        this.labelScore.text = score;
    }
    }
};
