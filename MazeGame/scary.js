var scary;

demo.scary = function(){};
demo.scary.prototype = {
	preload: function(){
        game.load.image('sLoans','assets/background/sLoans.png');
        
    },
	create: function(){
        // load physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        
		game.stage.backgroundColor = '#ccbcad';
        
        
        //spoopy picture
        var pic = game.add.sprite(100,0, 'sLoans')
        player.scale.setTo(1, 1);    
        

	},
    
	update: function(){
        
        
       
    }
};