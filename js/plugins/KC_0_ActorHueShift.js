//=============================================================================
// Kin's Chronicle - Actor Hue Shift
// KC_5_ActorHueShift.js
//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 0] [Version 1.0]
 * @author flashdim
 * @url http://www.twitter.com/KinsChronicle
 *
 * @help
 * Support for hue added to face and portrait images.
*/

//-------------------------------------------
// EXTEND Game_Actor clone Game_Enemy from mobs
//-------------------------------------------

//
// Create and set the enemy object
//  (happens on recruitment)
//
Game_Actor.prototype.createHue = function(newHue) {
	this.hue = newHue;
	this._createColorFilter();
	this._updateColorFilter();
};

//
// Create/update the enemy object hues
//  (happens on upgrade)
//
Game_Actor.prototype.updateHue = function() {
	switch (this.getTraitSet("Variant").toUpperCase()) {
		case "MIGHTY": 
			this.hue = Math.abs($gameaActors[this._actorId].meta["Mighty Battler Hue"]);
			break;
		case "MAJOR": 
			this.hue = Math.abs($dataActors[this._actorId].meta["Major Battler Hue"]);
			break;
		case "GREATER": 
			this.hue = Math.abs($dataActors[this._actorId].meta["Greater Battler Hue"]);
			break;
		case "NORMAL": 
			this.hue = Math.abs($dataActors[this._actorId].meta["Normal Battler Hue"]);
			break;
		case "LESSER": 
			this.hue = Math.abs($dataActors[this._actorId].meta["Lesser Battler Hue"]);
			break;
		case "MINOR": 
			this.hue = Math.abs($dataActors[this._actorId].meta["Minor Battler Hue"]);
			break;
		case "PUNY": 
			this.hue = Math.abs($dataActors[this._actorId].meta["Puny Battler Hue"]);
			break;
		default:
			this.hue = 0;;
	};
	this._updateColorFilter();
};

//
// NEW color filter functions to Game_Actor
//

Game_Actor.prototype._createColorFilter = function() {
    this._colorFilter = new ColorFilter();
    if (!this.filters) {
        this.filters = [];
    }
    this.filters.push(this._colorFilter);
};

Game_Actor.prototype._updateColorFilter = function() {
    if (!this._colorFilter) {
        this._createColorFilter();
    }
    this._colorFilter.setHue(this.hue);
};

//
// NEW Window_Base to also accept sprites and hues
//
Window_Base.prototype.initialize = function(rect) {
    Window.prototype.initialize.call(this);
    this.loadWindowskin();
    this.checkRectObject(rect);
    this.move(rect.x, rect.y, rect.width, rect.height);
    this.updatePadding();
    this.updateBackOpacity();
    this.updateTone();
    this.createContents();
    this._opening = false;
    this._closing = false;
    this._dimmerSprite = null;
	this._additionalSprites = {};
    this.loadFaceImages();
};

Window_Base.prototype.loadFaceImages = function() {
    for (const actor of $gameParty.members()) {
        ImageManager.loadFace(actor.faceName());
    }
};

Window_Base.prototype.refresh = function() {
    this.hideAdditionalSprites();
    this.paint();
};

Window_Base.prototype.hideAdditionalSprites = function() {
    for (const sprite of Object.values(this._additionalSprites)) {
        sprite.hide();
    }
};

Window_Base.prototype.placeActorFace = function(actor, x, y) {
    const key = "actor%1-face".format(actor.actorId);
    const sprite = this.createInnerSprite(key, Sprite_Face);
    sprite.setup(actor);
    sprite.move(x, y);
    sprite.show();
};

Window_Base.prototype.createInnerSprite = function(key, spriteClass) {
    if (!this._additionalSprites) this._additionalSprites = {};
	if (!this._innerChildren) this._innerChildren = [];
	const dict = this._additionalSprites;
    if (dict[key]) {
        return dict[key];
    } else {
        const sprite = new spriteClass();
        dict[key] = sprite;
		console.log("Adding innerChildren sprite to " + this.constructor.name);
		console.log("Adding innerChildren sprite for " + key);
        this.addInnerChild(sprite);
        return sprite;
    }
};

Window_Base.prototype.drawFace = function(
    faceName, faceIndex, x, y, width, height
) {
    const actorId = $dataActors.filter(
		function (el){return el != null}).find(
		function (el){return el.name == faceName}).id;
	const actor = $gameActors._data[actorId];

	const bitmap = ImageManager.loadFace(faceName);
	width = width || ImageManager.faceWidth;
	height = height || ImageManager.faceHeight;
	const pw = ImageManager.faceWidth;
	const ph = ImageManager.faceHeight;
	const sw = Math.min(width, pw);
	const sh = Math.min(height, ph);
	const dx = Math.floor(x + Math.max(width - pw, 0) / 2);
	const dy = Math.floor(y + Math.max(height - ph, 0) / 2);
	const sx = Math.floor((faceIndex % 4) * pw + (pw - sw) / 2);
	const sy = Math.floor(Math.floor(faceIndex / 4) * ph + (ph - sh) / 2);	
	
	this.contents.blt(bitmap, sx, sy, sw, sh, dx, dy);

	/*
	if (actor) {
		if (actor.hue) {
			if (actor._colorFilter) {
				console.log("Placing face sprite to " + this.constructor.name);
				if (this.constructor.name.contains("Window")) {
					Window_Base.prototype.placeActorFace(this, actor, dx, dy);
				};
				if (Date.now() % 100 == 60) {
					console.log("Sprite data for" + actor._name + " hue " + actor.hue);
					console.log("x: " + sprite.x);
					console.log("y: " + sprite.y);
					console.log("w: " + sprite.width);
					console.log("h: " + sprite.height);
				};
			};
		} else {
			this.contents.blt(bitmap, sx, sy, sw, sh, dx, dy);
		};
	} else {
		this.contents.blt(bitmap, sx, sy, sw, sh, dx, dy);
	};
	*/
};


//---------------------
// Sprite_Face
//
// The sprite for displaying player faces.
function Sprite_Face() {
    this.initialize(...arguments);
}

Sprite_Face.prototype = Object.create(Sprite.prototype);
Sprite_Face.prototype.constructor = Sprite_Face;

Sprite_Face.prototype.initialize = function(faceName) {
    Sprite.prototype.initialize.call(this);
    this.initMembers();
    this.loadBitmap(faceName);
};

Sprite_Face.prototype.initMembers = function() {
    this._faceName = "";
    this._faceIndex = 0;
    this.anchor.x = 0;
    this.anchor.y = 0;
};

Sprite_Face.prototype.loadBitmap = function(faceName) {
    this.bitmap = ImageManager.loadFace("faceName");
    this.setFrame(0, 0, 0, 0);
};

Sprite_Face.prototype.setup = function(actor) {
    if (this._faceName !== actor._faceName) {
        this._faceName = actor._faceName;
        this._faceIndex = actor_faceIndex;
    }
};

Sprite_Face.prototype.update = function() {
    Sprite.prototype.update.call(this);
};

Sprite_Face.prototype.shouldDisplay = function() {
    return true;
};

Sprite_Face.prototype.updateFrame = function() {
	const pw = ImageManager.faceWidth;
	const ph = ImageManager.faceHeight;
	const sx = Math.floor((faceIndex % 4) * pw + (pw - sw) / 2);
	const sy = Math.floor(Math.floor(faceIndex / 4) * ph + (ph - sh) / 2);
	this.setFrame(sx, sy, pw, ph);
};
