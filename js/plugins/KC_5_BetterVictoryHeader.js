//=============================================================================
// Kin's Chronicle - Better Victory Header
// KC_5_BetterVictoryHeader.js
//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 5] [Version 1.0]
 * @author flashdim
 * @url http://www.twitter.com/KinsChronicle
 *
 * @help
 * Moving this to the bottom since it requires Victory Aftermath
*/
//-------------------------------------------
// Change Victory Aftermath Header
//-------------------------------------------
(	
	function() {
		var KC_Victory_Rewards_Update = Window_VictoryRewards.prototype.drawBackgroundElements
		Window_VictoryRewards.prototype.drawBackgroundElements = function() {
			KC_Victory_Rewards_Update.call(this);
			this.drawTextEx("<center>\\FontChange<FantaisieArtistique>\\FS[244]\\OutlineWidth[12]\\C[6]Victory!",0,0,Graphics.width);
		}
	}
)();


