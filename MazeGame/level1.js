var demo = {}, level1, purpleBall;

demo.level1 = function(){};
demo.level1.prototype = {
	preload: function(){
        game.load.image('block', 'assets/tiletest.png');
        game.load.image('purpleBall','assets/sprites/purpleBall.png');
        
        
    },
	create: function(){
        // load physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        // set background color
		game.stage.backgroundColor = '#26b7ad';
        
        
        // create player sprite
        player = game.add.sprite(0, 13, 'purpleBall');
        player.scale.setTo(.4, .4);
        game.physics.arcade.enable(player);
        player.body.collideWorldBounds = true;
        
        // create block group that creates the walls of the maze
        blocks = game.add.group();
        blocks.enableBody = true;
        
        // variables defined here are added to the group 
        // and implemented into the game world to create 
        // the physical walls/sprites
        var block = blocks.create(0, 80, 'block');
        game.physics.arcade.enable(block);
        block.scale.setTo(1, .1);
        
        var block = blocks.create(500, 0, 'block');
        game.physics.arcade.enable(block);
        block.scale.setTo(1, .7);
        
        var block = blocks.create(-250, 80, 'block');
        game.physics.arcade.enable(block);
        block.scale.setTo(1, 2);
        
        var block = blocks.create(250, 200, 'block');
        game.physics.arcade.enable(block);
        block.scale.setTo(1, .1);
        
        var block = blocks.create(0, 310, 'block');
        game.physics.arcade.enable(block);
        block.scale.setTo(1, .1);
        
        var block = blocks.create(500, 200, 'block');
        game.physics.arcade.enable(block);
        block.scale.setTo(1, .95);
        
        var block = blocks.create(200, 440, 'block');
        game.physics.arcade.enable(block);
        block.scale.setTo(1.2, .2);
        
        
        
		
	},
	update: function(){
        
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
			player.scale.setTo(.4, .4);
			player.x += 4;
		}
		else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
			player.scale.setTo(.4, .4);
			player.x -= 4;
		}

		if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            player.scale.setTo(.4, .4);
			player.y -= 4;
			}
		else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            player.scale.setTo(.4, .4);
			player.y += 4;
		}
        
        // check if player overlaps with a wall
        game.physics.arcade.overlap(player, blocks, resetPlayer, null, this);
        
        // function that resets the player to the starting position
        function resetPlayer(player){
            player.body.x = 0
            player.body.y = 13
            
        }
        
        
    }
};