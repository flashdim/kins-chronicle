//=============================================================================
// Kin's Chronicle - Capture Menu Trait Windows
// KC_5_CaptureStatus.js
//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 5] [Version 1.0]
 * @author flashdim
 * @url http://www.twitter.com/KinsChronicle
 *
 * @help
 * Called on to show data on enemy traits/etc during a capture event.
*/

//-------------------------------------------
// NEW Capture Status Window
//-------------------------------------------

function Window_CaptureStatus() {
	this.initialize.apply(this, arguments);
};

Window_CaptureStatus.prototype = Object.create(Window_StatusData.prototype);
Window_CaptureStatus.prototype.constructor = Window_CaptureStatus;
	
Window_CaptureStatus.prototype.initialize = function(rect) {
	Window_StatusData.prototype.initialize.call(this, rect);
};

Window_CaptureStatus.prototype.update = function() {
    Window_StatusData.prototype.update.call(this);
};

Window_CaptureStatus.prototype.updateActorData = function() {
    // Only bother if an actor is assigned
	if (this._actor) {
		// Declare Constants
		const traitCol2 = ["Variant", "Nature", "Alignment", "Zodiac"];
		const lineHeight = this.lineHeight();
		const actor = this._actor;
		const padding = this.itemPadding();
		const traitHeight = (this.innerHeight / Math.max(traitCol2.length)) - lineHeight;
		const width = this.innerWidth;
		let x = padding;
		let y = padding;
		//console.log(this.x+" consts "+this.y);

		// Draw Actor Graphic
		//this.drawActorCharacter(actor, x + padding, y + padding);

		// Draw Actor Name
		this.drawTextEx("\<center\>\\OutlineWidth\[8\]\\{" + actor.name(), x, y, width);
		
		// Draw Trait Set 2
		y = padding + lineHeight * 1.5;
		for (const type of traitCol2) {
			//console.log(this.x+" "+type+" "+this.y);
			const traitType = DataManager.traitSetType(type);
			const traitSet = actor.traitSet(type);
			this.drawItemDarkRect(x, y, width, lineHeight, 2);
			const labelText = '\\C[16]%1: \\C[0]%2'.format(traitType.Label, traitSet.Display);
			this.drawTextEx(labelText, x, y, width - padding * 2);
			y += lineHeight;
			this.setDescriptionFontSizeToTraitSet();
			this.drawItemDarkRect(x, y, width, traitHeight);
			this.drawTextEx(traitSet.Description, x, y, width - padding * 2);
			y += traitHeight;
			this.resetDescriptionFontSize();
		};

		// Draw Filler Rect 1
		if (this.innerHeight - y > 0) {
			this.drawItemDarkRect(x, y, width, this.innerHeight - y);
		};
	};
};

//-------------------------------------------
// EXTEND Battle Scene Methods
//-------------------------------------------
//
// Create Capture Status Windows with Scene
// 
(	
	function() {
		var KC_Scene_Battle_createAllWindows = Scene_Battle.prototype.createAllWindows
		Scene_Battle.prototype.createAllWindows = function() {
			this.createCaptureStatusWindows();
			KC_Scene_Battle_createAllWindows.call(this);
		}
	}
)();

//
// Set actors for each window on update
// 
(	
	function() {
		var KC_Scene_Battle_update = Scene_Battle.prototype.update
		Scene_Battle.prototype.update = function() {
			if ($gameTroop.aliveMembers()[0]) {
				var partyActor = $gameActors._data[$gameTroop.aliveMembers()[0]._enemyId];
				var enemyActor = $gameTroop.aliveMembers()[0];
				this._captureWindowL.setActor(partyActor);
				this._captureWindowR.setActor(enemyActor);
			};
			KC_Scene_Battle_update.call(this);
		}
	}
)();

//-------------------------------------------
// NEW Battle Scene Methods
//-------------------------------------------
//
// Create Capture Status Windows with Scene
// 
Scene_Battle.prototype.createCaptureStatusWindows = function() {
	const padding = 10;
	const wxL = Math.floor(Graphics.width * 0.2);
	const wyL = 0 + padding * 4;
	const wwL = Math.floor(Graphics.width * 0.3);
	const whL = Math.floor(Graphics.height * 0.78);
	const rectL = new Rectangle(wxL, wyL, wwL, whL);

	const captureWindowL = new Window_CaptureStatus(rectL);
	captureWindowL.hide();
	this._spriteset._battleField.addChild(captureWindowL);
    this._captureWindowL = captureWindowL;
	
	const wxR = Math.floor(Graphics.width * 0.5);
	const wyR = 0 + padding * 4;
	const wwR = Math.floor(Graphics.width * 0.3);
	const whR = Math.floor(Graphics.height * 0.78);
	const rectR = new Rectangle(wxR, wyR, wwR, whR);

	const captureWindowR = new Window_CaptureStatus(rectR);
	captureWindowR.hide();
	this._spriteset._battleField.addChild(captureWindowR);
    this._captureWindowR = captureWindowR;
};

