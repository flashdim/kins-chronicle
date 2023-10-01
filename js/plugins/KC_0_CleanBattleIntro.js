//=============================================================================
// Kin's Chronicle - Clean Battle Intro and more
// KC_0_CleanBattleIntro.js
//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 0] [Version 0.40]
 * @author flashdim
 * @url http://www.twitter.com/KinsChronicle
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Various custom overrides. I never bothered changing the file name. :)
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
// Game Version ID and default name
//-------------------------------------------
(	
	function() {
		var KC_Game_System_Init = Game_System.prototype.initialize
		Game_System.prototype.initialize = function() {
			KC_Game_System_Init.call(this);
			this._gameVersion = "GAME_VERSION";
			this._lastKnownName = "Kin";
		}
	}
	
)();

//-------------------------------------------
// Change the default icon width/height
//-------------------------------------------
ImageManager.iconWidth = 32;
ImageManager.iconHeight = 32;

//-------------------------------------------
// These don't get loaded for some reason, so do it manually.
//-------------------------------------------
FontManager.load("FantaisieArtistique","FantaisieArtistique.ttf");
FontManager.load("Polsyh","Polsyh.ttf");
FontManager.load("Morris Roman","MorrisRoman-Black.ttf");
FontManager.load("Trajan Pro","Trajan Pro Regular.ttf");
FontManager.load("OptimusPrinceps","OptimusPrinceps.ttf");
FontManager.load("OptimusPrincepsSemiBold","OptimusPrincepsSemiBold.ttf");
FontManager.load("Wizzta","wizzta.ttf");

//-------------------------------------------
// Useful for merging array objects uniquely
//-------------------------------------------
Array.prototype.unique = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

//-------------------------------------------
// Stops hiding events before battle and hides HUD
//-------------------------------------------
Scene_Map.prototype.startEncounterEffect = function() {
    //this._spriteset.hideCharacters();
	  $gameUltraHUD.setGlobalVisibility(false);
 	  $gameSwitches.setValue(1 , false);
	  $gameSystem.setQuestTrackerVisible(false);
    this._encounterEffectDuration = this.encounterEffectSpeed();
};

//-------------------------------------------
// Stops flashing and zooming
//-------------------------------------------
Scene_Map.prototype.updateEncounterEffect = function() {
    if (this._encounterEffectDuration > 0) {
        this._encounterEffectDuration--;
        const speed = this.encounterEffectSpeed();
        const n = speed - this._encounterEffectDuration;
        const p = n / speed;
        const q = ((p - 1) * 20 * p + 5) * p + 1;
        const zoomX = $gamePlayer.screenX();
        const zoomY = $gamePlayer.screenY() - 24;
        if (n === 2) {
            //$gameScreen.setZoom(zoomX, zoomY, 1);
            this.snapForBattleBackground();
            //this.startFlashForEncounter(speed / 2);
        }
        //$gameScreen.setZoom(zoomX, zoomY, q);
        //if (n === Math.floor(speed / 6)) {
        //    this.startFlashForEncounter(speed / 2);
        //}
        if (n === Math.floor(speed / 2)) {
            BattleManager.playBattleBgm();
            //this.startFadeOut(this.fadeSpeed());
        }
    }
};

//-------------------------------------------
// Stops fade in
//-------------------------------------------
Scene_Map.prototype.needsFadeIn = function() {
    return (
        //SceneManager.isPreviousScene(Scene_Battle) ||
        SceneManager.isPreviousScene(Scene_Load)
    );
};

//-------------------------------------------
// Stops flashing
//-------------------------------------------
Scene_Map.prototype.startFlashForEncounter = function(duration) {
    var color = [255, 255, 255, 255];
    //$gameScreen.startFlash(color, duration);
};

//-------------------------------------------
// Stops fade in
//-------------------------------------------
Scene_Battle.prototype.startFadeIn = function(duration, white) {
    this._fadeSign = 1;
    this._fadeDuration = duration || 30;
    this._fadeWhite = white;
    //this._fadeOpacity = 255;
	this._fadeOpacity = 0;
    this.updateColorFilter();
	
	//Correct Combat Log position while we are at it
	if (SceneManager._scene._combatLogWindow) {
		SceneManager._scene._combatLogWindow.move(Graphics.boxWidth*0.2, 0, Graphics.boxWidth*0.6, Graphics.boxHeight);
	};
};

//-------------------------------------------
// Stops fade out
//-------------------------------------------
Scene_Battle.prototype.startFadeOut = function(duration, white) {
    //this._fadeSign = -1;
	this._fadeSign = 1;
    this._fadeDuration = duration || 30;
    this._fadeWhite = white;
    this._fadeOpacity = 0;
    this.updateColorFilter();
};

//-------------------------------------------
// Shows the HUD and MiniMap
//-------------------------------------------
Scene_Battle.prototype.terminate = function() {
    Scene_Message.prototype.terminate.call(this);
    $gameParty.onBattleEnd();
    $gameTroop.onBattleEnd();
    AudioManager.stopMe();
    if (this.shouldAutosave()) {
        this.requestAutosave();
    }
      $gameUltraHUD.setGlobalVisibility(true);
	  $gameSwitches.setValue(1 , true);
	  $gameSwitches.setValue(2 , false);
	  $gameSystem.setQuestTrackerVisible(true);
};

//-------------------------------------------
// Repositions the Actor Command Window
//-------------------------------------------
Window_ActorCommand.prototype.update = function() {
    const window = this;
	if ( window.actor() ) {
	
		var xOffset = this.width - this.padding;
		var yOffset = this.height;
		const partyPos = $gameParty._actors.indexOf(this.actor().actorId());
		//console.log("old x: " + window.x);
		//console.log("actor ID: " + window.actor().actorId());
		//console.log("party ID: " + partyPos);
		switch (partyPos) {
			case 0:
				window.x = xOffset * 0.94;
				window.y = window.y - yOffset * 0.42;
				break;
			case 1:
				window.x = xOffset * 0.68;
				window.y = window.y - yOffset * 0.42;
				break;
			case 2:
				window.x = xOffset * 0.68;
				window.y = window.y - yOffset * 0.24;
				break;
			case 3:
				window.x = Graphics.width - (xOffset * 1.99);
				window.y = window.y - yOffset * 0.42;
				break;
			case 4:
				window.x = Graphics.width - (xOffset * 1.74);
				window.y = window.y - yOffset * 0.42;
				break;
			case 5:
				window.x = Graphics.width - (xOffset * 1.74);
				window.y = window.y - yOffset * 0.24;
				break;
		};
		//console.log("new x: " + window.x);
	};
	Window_Command.prototype.update.call(window);
};

//-------------------------------------------
// Repositions the Actor Command Window
//-------------------------------------------
Window_BattleSkill.prototype.update = function() {
    const window = this;
	if ( window._actor ) {
	
		var xOffset = 0;
		var yOffset = this.height;
		const partyPos = $gameParty._actors.indexOf(this._actor.actorId());
		//console.log("old x: " + window.x);
		//console.log("actor ID: " + window.actor().actorId());
		//console.log("party ID: " + partyPos);
		switch (partyPos) {
			case 0:
				window.x = xOffset;
				break;
			case 1:
				window.x = xOffset;
				break;
			case 2:
				window.x = xOffset;
				break;
			case 3:
				window.x = Graphics.width - xOffset - this.width;
				break;
			case 4:
				window.x = Graphics.width - xOffset - this.width;
				break;
			case 5:
				window.x = Graphics.width - xOffset - this.width;
				break;
		};
		//console.log("new x: " + window.x);
	};
	Window_SkillList.prototype.update.call(window);
};

//-------------------------------------------
// Gets rid of the blur
//-------------------------------------------
Spriteset_Battle.prototype.createBackground = function() {
    //this._backgroundFilter = new PIXI.filters.BlurFilter();
    this._backgroundSprite = new Sprite();
    this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
    //this._backgroundSprite.filters = [this._backgroundFilter];
    this._baseSprite.addChild(this._backgroundSprite);
};

Input._setupEventHandlers = function() {
    document.addEventListener("keydown", this._onKeyDown.bind(this));
    document.addEventListener("keyup", this._onKeyUp.bind(this));
    //window.addEventListener("blur", this._onLostFocus.bind(this));
};

//-------------------------------------------
// Resize Gauges for higher resolution
//-------------------------------------------
Sprite_Gauge.prototype.bitmapWidth = function() {
    return 164;
};

Sprite_Gauge.prototype.bitmapHeight = function() {
    return 36;
};

Sprite_Gauge.prototype.gaugeHeight = function() {
    return 18;
};

Sprite_Gauge.prototype.labelFontSize = function() {
    return $gameSystem.mainFontSize() - 12;
};

Sprite_Gauge.prototype.valueFontSize = function() {
    return $gameSystem.mainFontSize() - 16;
};

Sprite_Gauge.prototype.labelY = function() {
    return 32;
};

//-------------------------------------------
// Window_BattleActor Overrides
//  Makes party members easier to select in battle
//  using kbm/gamepad (due to custom layout)
//
//	actor 1		actor 4
//	actor 0		actor 3
//	actor 2		actor 5
//-------------------------------------------
Window_BattleActor.prototype.cursorDown = function(wrap) {
    const index = this.index();
	switch (index) {
		case 0:
			this.smoothSelect(2);
			break;
		case 1:
			this.smoothSelect(0);
			break;
		case 2:
			this.smoothSelect(1);
			break;
		case 3:
			this.smoothSelect(5);
			break;
		case 4:
			this.smoothSelect(3);
			break;
		case 5:
			this.smoothSelect(4);
			break;
	};
};

Window_BattleActor.prototype.cursorUp = function(wrap) {
    const index = this.index();
	switch (index) {
		case 0:
			this.smoothSelect(1);
			break;
		case 1:
			this.smoothSelect(2);
			break;
		case 2:
			this.smoothSelect(0);
			break;
		case 3:
			this.smoothSelect(4);
			break;
		case 4:
			this.smoothSelect(5);
			break;
		case 5:
			this.smoothSelect(3);
			break;
	};
};

//-------------------------------------------
//	actor 1		actor 4
//	actor 0		actor 3
//	actor 2		actor 5
//-------------------------------------------
Window_BattleActor.prototype.cursorRight = function(wrap) {
    const index = this.index();
	switch (index) {
		case 0:
			this.smoothSelect(3);
			break;
		case 1:
			this.smoothSelect(4);
			break;
		case 2:
			this.smoothSelect(5);
			break;
		case 3:
			this.smoothSelect(0);
			break;
		case 4:
			this.smoothSelect(1);
			break;
		case 5:
			this.smoothSelect(2);
			break;
	};
};

Window_BattleActor.prototype.cursorLeft = function(wrap) {
    const index = this.index();
	switch (index) {
		case 0:
			this.smoothSelect(3);
			break;
		case 1:
			this.smoothSelect(4);
			break;
		case 2:
			this.smoothSelect(5);
			break;
		case 3:
			this.smoothSelect(0);
			break;
		case 4:
			this.smoothSelect(1);
			break;
		case 5:
			this.smoothSelect(2);
			break;
	};
};


//-------------------------------------------
// Updating default icon width/height
//-------------------------------------------
ImageManager.iconWidth = 48;
ImageManager.iconHeight = 48;

//-------------------------------------------
// Add a listener for the middle mouse button
//-------------------------------------------
TouchInput._onMiddleButtonDown = function(event) {
    if (mz3d.mapLoaded) {
		mz3d.blendCameraPitch.setValue(90,0.4);
	}
};

//-------------------------------------------
// Add a listener for aiming up and down using mousewheel
//-------------------------------------------
Scene_Map.prototype.processWheelScroll = function() {
    if (mz3d.mapLoaded) {
        const threshold = 20;
		const increment = mz3d.PITCH_SPEED / 20;
		
        if (TouchInput.wheelY >= threshold) {
            mz3d.blendCameraPitch.setValue(Math.max(15,mz3d.blendCameraPitch.targetValue()-increment),0.1);
        }
        if (TouchInput.wheelY <= -threshold) {
            mz3d.blendCameraPitch.setValue(Math.min(118,mz3d.blendCameraPitch.targetValue()+increment),0.1);
        }
    }
};

//-------------------------------------------
// Disable map clicking to move
//-------------------------------------------
/*
Scene_Map.prototype.processMapTouch = function() {
    if (TouchInput.isTriggered() || this._touchCount > 0) {
        if (TouchInput.isPressed() && !this.isAnyButtonPressed()) {
            if (this._touchCount === 0 || this._touchCount >= 15) {
                //this.onMapTouch();
				console.log("Cancelled map touch.");
            }
            this._touchCount++;
        } else {
            this._touchCount = 0;
        }
    }
};
*/
Game_Temp.prototype.setDestination = function(x, y) {
};

//-------------------------------------------
// Trigger Main Menu common event with RMB or Gamepad
//	check for mousewheel movement
//  check for homekey reset
//-------------------------------------------
(	
	function() {
		var KC_Scene_Map_Update = Scene_Map.prototype.update
		Scene_Map.prototype.update = function() {
			KC_Scene_Map_Update.call(this);

			// Exit pointer lock if:
			// -A cancel was pressed
			// -There's no event in progress
			// -The mouse is locked
			if (TouchInput.isCancelled() && !$gameMap.isEventRunning() && document.pointerLockElement) {
				document.exitPointerLock();
				mz3d._relockPointer=false;
			} else if (TouchInput.isCancelled() && !$gameMap.isEventRunning() && !document.pointerLockElement ) {
				$gameTemp.reserveCommonEvent(11); 
			}
			if (Input.isTriggered("menu") && !$gameMap.isEventRunning()) {
				$gameTemp.reserveCommonEvent(11); 
			}
			if (mz3d.mapLoaded && TouchInput.wheelY) {
				this.processWheelScroll();
			}
			if (mz3d.mapLoaded && TouchInput.wheelY) {
				this.processWheelScroll();
			}
			if (mz3d.mapLoaded && Input.isTriggered('home')) {
				mz3d.blendCameraPitch.setValue(90,0.4);
			}
			if (mz3d.mapLoaded && Input.isTriggered('minimap')) {
				$gameTemp.reserveCommonEvent(7); 
			}
			if (mz3d.mapLoaded && Input.isTriggered('quickturn')) {
				$gameTemp.reserveCommonEvent(53); 
			}
		}
	}
)();

//-------------------------------------------
// SHHHH SEKRIT TITLE
//-------------------------------------------
Scene_Title.prototype.createBackground = function() {

	if ( $gameSystem._lastKnownName != "Kin" ) {
		this._backSprite1 = new Sprite(ImageManager.loadTitle1("title2"));
		if (CycloneSteam.running) {
			CycloneSteam.activateAchievement("YOUR_CHRONICLE");
		};
	} else {
		this._backSprite1 = new Sprite(ImageManager.loadTitle1($dataSystem.title1Name));		
	};

	this._backSprite2 = new Sprite(ImageManager.loadTitle2($dataSystem.title2Name));
	this.addChild(this._backSprite1);
	this.addChild(this._backSprite2);
};


//-------------------------------------------
// Bye bye Loading Spinner
//-------------------------------------------
Graphics.startLoading = function() {
    //if (!document.getElementById("loadingSpinner")) {
    //    document.body.appendChild(this._loadingSpinner);
    //}
	return;
};

/**
 * Erases the loading spinner.
 *
 * @returns {boolean} True if the loading spinner was active.
 */
Graphics.endLoading = function() {
    //if (document.getElementById("loadingSpinner")) {
    //    document.body.removeChild(this._loadingSpinner);
        return true;
    //} else {
    //   return false;
    //}
};

//-------------------------------------------
// Remove Skill Types with no skills
//-------------------------------------------
var MalGame_BattlerBase_addedSkillTypes = Game_BattlerBase.prototype.addedSkillTypes;
Game_BattlerBase.prototype.addedSkillTypes = function() {
    var skillT = MalGame_BattlerBase_addedSkillTypes.call(this);
    var skills = this._skills;
    var skillT2 = [];
    var newSkills = [];
    for (var i = 0; i < skills.length; i++) {
        var type = $dataSkills[skills[i]].stypeId;
        if (!skillT2.contains(type)) {
            skillT2.push(type);
        }
    };
    for (var i = 0; i < skillT.length; i++) {
        if (skillT2.contains(skillT[i])) {
            if (!newSkills.contains(skillT[i])) newSkills.push(skillT[i]);
        }
    };
    return newSkills;
};

//-------------------------------------------
// Remove F5 reload and repurpose as autosave
// Add controller monitor
//-------------------------------------------
SceneManager.onKeyDown = function(event) {
		
    if (!event.ctrlKey && !event.altKey) {
        switch (event.keyCode) {
            case 116: // F5
				if (SceneManager.isSceneMap()) {
					$gameTemp.reserveCommonEvent(6); 
				}
                //this.reloadGame();
                break;
            case 119: // F8
                this.showDevTools();
                break;
        }
    }
};

//-------------------------------------------
// Move battle help window away from edges
//-------------------------------------------
Scene_Battle.prototype.helpWindowRect = function() {
    //const wx = 0;
    //const wy = this.helpAreaTop();
	//const ww = Graphics.boxWidth;
	//const ww = Graphics.boxWidth * 0.60;
    //const wh = this.helpAreaHeight();
	const wx = Graphics.boxWidth * 0.20;
	var wy = 0;
	// Place above Turn Order
	wy = Graphics.height - $gameSystem.mainFontSize() * 2 - 164;
	const ww = Graphics.boxWidth * 0.6;
	const wh = this.calcWindowHeight(2, false);
	return new Rectangle(wx, wy, ww, wh);
};

//-------------------------------------------
// Center help window text
//-------------------------------------------
Window_Help.prototype.setText = function(text) {
    if (this._text !== text) {
        this._text = "<center>" + text;
        this.refresh();
    }
};

//-------------------------------------------
// Extra keys for the Keyboard
//-------------------------------------------
Input.keyMapper = {
    9: "minimap", // tab
    13: "ok", // enter
    16: "shift", // shift
    17: "control", // control
    18: "control", // alt
    27: "escape", // escape
    32: "ok", // space
    33: "pageup", // pageup
    34: "pagedown", // pagedown
	36: "home", // home
    37: "left", // left arrow
    38: "up", // up arrow
    39: "right", // right arrow
    40: "down", // down arrow
    45: "escape", // insert
	49: "ok", // 1
	50: "cancel", // 2
	51: "menu", // 3
	52: "escape", // 4
	53: "shift", // 5
	65: "rotleft", // A
	67: "quickturn", // C
	68: "rotright", // D
	69: "right", // E
	70: "home", // F
	77: "minimap", // M
    81: "left", // Q
	82: "pageup", // R
	83: "down", // S
    86: "pagedown", // V
	87: "up", // W
    88: "escape", // X
    90: "ok", // Z
    96: "escape", // numpad 0
    98: "down", // numpad 2
    100: "left", // numpad 4
    102: "right", // numpad 6
    104: "up", // numpad 8
    120: "debug" // F9
};

//-------------------------------------------
// Extra keys for the GamePad
//-------------------------------------------
Input.gamepadMapper = {
    0: "ok", // A
    1: "cancel", // B
    2: "shift", // X
    3: "menu", // Y
    4: "pageup", // LB
    5: "pagedown", // RB
	6: "rotleft", // L2
	7: "rotright", // R2
	8: "minimap", // Select/Back
	9: "menu", // Start
	10: "quickturn", // L3
	11: "home", // R3
    12: "up", // D-pad up
    13: "down", // D-pad down
    14: "left", // D-pad left
    15: "right" // D-pad right
};

//-------------------------------------------
// Update name input screen layout
//-------------------------------------------
Window_NameEdit.prototype.drawChar = function(index) {
    const rect = this.itemRect(index);
    this.resetTextColor();
    this.drawTextEx("<center>" + this._name[index] || "", rect.x, rect.y, rect.width);
};

