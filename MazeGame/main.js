var game = new Phaser.Game(600, 600, Phaser.AUTO);
game.state.add('level3', demo.level3);
game.state.add('level2', demo.level2);
game.state.add('level1', demo.level1);
game.state.start('level1');