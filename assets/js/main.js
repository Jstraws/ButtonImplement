var mainState = {
    preload: function () {
        game.load.image('btn_down', 'assets/img/Button_Down.png');

    },

    create: function () {

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