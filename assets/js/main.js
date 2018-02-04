var mainState = {
    preload: function () {
        game.load.spritesheet('btn', 'assets/img/button.png', 428, 402);
    },

    create: function () {
        this.button = game.add.sprite(300, 240, 'btn');
        this.button.anchor.setTo(0.5, 0.5);
        this.button.scale.setTo(.25);
        this.button.input.useHandCursor = true;

    },

    update: function () {
    }
};

var camWidth = 600;
var camHeight = 480;

// Initialize Phaser
var game = new Phaser.Game(camWidth, camHeight, Phaser.CANVAS);

// Add states
game.state.add('main', mainState);

// Start the state
game.state.start('main');

