var level2;

demo.level2 = function(){};
demo.level2.prototype = {
	preload: function(){
        game.load.image('tileR', 'assets/redTile.png');
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
        
        //player = game.add.sprite(50, 20, 'purpleBall');
        player = game.add.sprite(555, 565, 'purpleBall');
        
        
        player.scale.setTo(.2, .2);
        game.physics.arcade.enable(player);
        player.body.collideWorldBounds = true;
        
        // create block group that creates the walls of the maze
        blocks = game.add.group();
        blocks.enableBody = true;
           
        // variables defined here are added to the group 
        // and implemented into the game world to create 
        // the physical walls/sprites
       
        var tileR = blocks.create(0, 50, 'tileR');
        game.physics.arcade.enable(tileR);
        tileR.scale.setTo(1.4, .17);
        
        var tileR = blocks.create(500, 0, 'tileR');
        game.physics.arcade.enable(tileR);
        tileR.scale.setTo(1.9, 0.7);
        
        var tileR = blocks.create(-275, 50, 'tileR');
        game.physics.arcade.enable(tileR);
        tileR.scale.setTo(1, 2);
        
        var tileR = blocks.create(110, 155, 'tileR');
        game.physics.arcade.enable(tileR);
        tileR.scale.setTo(1.53, .32);
        
        var tileR = blocks.create(555, 255, 'tileR');
        game.physics.arcade.enable(tileR);
        tileR.scale.setTo(.3, .7);
        
        var tileR = blocks.create(10, 305, 'tileR');
        game.physics.arcade.enable(tileR);
        tileR.scale.setTo(1.53, .32);
        
        var tileR = blocks.create(110, 455, 'tileR');
        game.physics.arcade.enable(tileR);
        tileR.scale.setTo(1.53, .3);
        
        
        finish = game.add.sprite(0, 0, 'finish');
        finish.scale.setTo(0.7, 1);
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
            game.state.start('level1');   
        }
        
         function nextLevel(player, finish){
            game.state.start('level3');    
        }
        
    }
};
