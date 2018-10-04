var demo = {}, level1, purpleBall;

demo.level1 = function(){};
demo.level1.prototype = {
	preload: function(){
        game.load.image('level1','assets/background/level1Maze.png')
        game.load.image('purpleBall','assets/sprites/purpleBall.png')
        
        
    },
	create: function(){

        game.physics.startSystem(Phaser.Physics.ARCADE);
		game.stage.backgroundColor = '#26b7ad';
        game.world.setBounds(0, 0, 600, 600);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        level1 = game.add.sprite(0, 0,'level1');
        game.physics.enable(level1);
        level1.body.collideWorldBounds = true;
        
        
        
        purpleBall = game.add.sprite(80, 10,'purpleBall');
        purpleBall.scale.setTo(.4, .4);
        game.physics.enable(purpleBall);
        purpleBall.body.collideWorldBounds = true;

		
	},
	update: function(){
        
        game.physics.arcade.collide(purpleBall, level1);
        
        
        
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
			purpleBall.scale.setTo(.4, .4);
			purpleBall.x += 4;
		}
		else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
			purpleBall.scale.setTo(.4, .4);
			purpleBall.x -= 4;
		}

		if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            purpleBall.scale.setTo(.4, .4);
			purpleBall.y -= 4;
			}
		else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            purpleBall.scale.setTo(.4, .4);
			purpleBall.y += 4;
		}
        
        
        
    }
};