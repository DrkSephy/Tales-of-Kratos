ig.module(
	'game.entities.menus.increaseHellPyre'
)
.requires(
	'game.entities.abstractions.increaseSkill'
)
.defines(function(){
	ig.global.EntityIncreaseHellPyre = ig.global.EntityIncreaseSkill.extend({

	   	clicked: function() {
	        /* Handle the click */
	        console.log("Clicked plus");
	        if(ig.game.player.skillPoints > 0){
		        ig.game.artesCatalog['hellPyre'].level += 1;
		        ig.game.player.skillPoints -= 1;
		        ig.game.artesCatalog['hellPyre'].points += 1;  
		    }
	    },
	});
});