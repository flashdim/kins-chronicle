//=============================================================================
// Kin's Chronicle - Updated Item Crafting Menu Layout
// KC_5_ItemCraftingMenuLayout.js
//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 5] [Version 0.10]
 * @author flashdim
 * @url http://www.twitter.com/KinsChronicle
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Feel free to use any of the below in personal or commercial projects.
 * If used in a commercial project, please credit 'Kin's Chronicle'.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ---
 */
 

//-------------------------------------------
// Item Crafting Menu Layout
//-------------------------------------------
Window_ShopStatus.prototype.initialize = function(rect) {
	const wx = Math.floor(Graphics.boxWidth * 0.67);
	const ww = Math.floor(Graphics.boxWidth * 0.33);
	rect.x = wx;
	rect.width = ww;
	
    Window_StatusBase.prototype.initialize.call(this, rect);
    this._item = null;
    this._pageIndex = 0;
    this.refresh();
};

(	
	function() {
		var KC_Scene_ItemCrafting_Create = Scene_ItemCrafting.prototype.create
		Scene_ItemCrafting.prototype.create = function() {
			KC_Scene_ItemCrafting_Create.call(this);
			
			// Update the craftable item list
			this._itemWindow.width = Graphics.boxWidth * 0.67;

			// Update the crafting confirmation window
			this._numberWindow.width = Graphics.boxWidth * 0.67;
		}
	}
)();

