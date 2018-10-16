var level3;

demo.level3 = function(){};
demo.level3.prototype = {
	preload: function(){
        game.load.image('tileG', 'assets/greenTile.png');
        game.load.image('finish', 'assets/yellowBlock.png');
        game.load.image('purpleBall','assets/sprites/purpleBall.png');
        
        
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
        
        
        player.scale.setTo(.4, .4);
        game.physics.arcade.enable(player);
        player.body.collideWorldBounds = true;
        
        // create block group that creates the walls of the maze
        blocks = game.add.group();
        blocks.enableBody = true;
        
        
        
        
        
        //Tile design is the same as level2 but green
        //only a placeholder for now
        
        
        
        var tileG = blocks.create(0, 50, 'tileG');
        game.physics.arcade.enable(tileG);
        tileG.scale.setTo(1.4, .17);
        
        var tileG = blocks.create(500, 0, 'tileG');
        game.physics.arcade.enable(tileG);
        tileG.scale.setTo(1.9, 0.7);
        
        var tileG = blocks.create(-275, 50, 'tileG');
        game.physics.arcade.enable(tileG);
        tileG.scale.setTo(1, 2);
        
        var tileG = blocks.create(110, 155, 'tileG');
        game.physics.arcade.enable(tileG);
        tileG.scale.setTo(1.53, .32);
        
        var tileG = blocks.create(555, 255, 'tileG');
        game.physics.arcade.enable(tileG);
        tileG.scale.setTo(.3, .7);
        
        var tileG = blocks.create(10, 305, 'tileG');
        game.physics.arcade.enable(tileG);
        tileG.scale.setTo(1.53, .32);
        
        var tileG = blocks.create(110, 455, 'tileG');
        game.physics.arcade.enable(tileG);
        tileG.scale.setTo(1.53, .3);
        
        
        finish = game.add.sprite(567, 551, 'finish');
        finish.scale.setTo(.75, 1.09);
        game.physics.arcade.enable(finish);
        
        	
	},
    
	update: function(){
        
        
        game.physics.arcade.moveToPointer(player, 400);
        
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
            game.state.start('level1');
        }
        
        
        function nextLevel(player, finish){
            game.state.start('scary');    
        }
        
    }
};
