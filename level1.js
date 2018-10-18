var demo = {}, blocks, level1, players, finish;

demo.level1 = function(){};
demo.level1.prototype = {
	preload: function(){
        game.load.image('block', 'assets/tiletest.png');
        game.load.image('finish', 'assets/yellowBlock.png');
        game.load.image('purpleBall','assets/drawing.png');
        
        
    },
	create: function(){
        
        // load physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        // set background color 
		game.stage.backgroundColor = '#26b7ad';
        
        
        // create player sprite
        // two corrdinates for debugging
        
        player = game.add.sprite(0, 13, 'purpleBall');
        //player = game.add.sprite(535, 557, 'purpleBall');
        
        
        
        player.scale.setTo(.2, .2);
        game.physics.arcade.enable(player);
        player.body.collideWorldBounds = true;
        player.body.immovable = true;
        
        // create block group that creates the walls of the maze
        blocks = game.add.group();
        blocks.enableBody = true;
        
        
        // variables defined here are added to the group 
        // and implemented into the game world to create 
        // the physical walls/sprites
        
        var block = blocks.create(0, 80, 'block');
        game.physics.arcade.enable(block);
        block.scale.setTo(1.1, .1);
        
        var block = blocks.create(500, 0, 'block');
        game.physics.arcade.enable(block);
        block.scale.setTo(1, .7);
        
        var block = blocks.create(-200, 80, 'block');
        game.physics.arcade.enable(block);
        block.scale.setTo(1, 2);
        
        var block = blocks.create(250, 200, 'block');
        game.physics.arcade.enable(block);
        block.scale.setTo(1, .1);
        
        var block = blocks.create(0, 310, 'block');
        game.physics.arcade.enable(block);
        block.scale.setTo(1.1, .1);
        
        var block = blocks.create(500, 200, 'block');
        game.physics.arcade.enable(block);
        block.scale.setTo(1, 1);
        
        var block = blocks.create(250, 440, 'block');
        game.physics.arcade.enable(block);
        block.scale.setTo(1.1, .25);
        
        finish = game.add.sprite(567, 546, 'finish');
        finish.scale.setTo(.75, 1.09);
        game.physics.arcade.enable(finish);
        
        	
	},
    
	update: function(){
        
        
       game.physics.arcade.moveToPointer(player, 200, Phaser.Input.activePointer, 100);
        
        if (Phaser.Rectangle.contains(player.body, game.input.x, game.input.y))
            {
            player.body.velocity.setTo(0, 0);
            }
        
        /*
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
        
        
        */
        
        // check if player overlaps with a wall
        game.physics.arcade.overlap(player, blocks, resetPlayer, null, this);
        
        game.physics.arcade.overlap(player, finish, nextLevel, null, this);
        
        
        
        
        
        // function that resets the player to the starting position
        function resetPlayer(player){
            player.body.x = 0
            player.body.y = 13
        }
        
        
        function nextLevel(player, finish){
            game.state.start('level2');    
        }
        
    }
};
