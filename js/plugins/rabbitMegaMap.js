/*:
@plugindesc Displays a megamap based on pictures you have saved
@author poorrabbit+flashdim
@version: 1.03f
@target: MZ
@help
============================================================================
rabbitMegaMap - A poorrabbit Games plugin
============================================================================
TERMS OF USE: Free for commercial and non commercial use.
This plugin may be used for all projects commerical or non-commercial.
You may not sell this plugin or modifications to this plugin as your own 
product. 

If you make modifications or bugfixes to this plugin, you must share them
with poorrabbit in the spirit in which this plugin was shared with you.

If you use the rabbitMegaMap plugin in your project you MUST give credit.
I would also LOVE to hear about it.

CREDITS: poorrabbit or poorrabbit Games

I can be reached on rpgmakerweb as user poorrabbit or on itch.io
https://poorrabbit.itch.io/rabbitmap

And finally - I'd like to give a shout out to OcRam, the author of the 
movement plugin which really helps the minimap shine through pseudo-pixel
movement. His plugins can be found at:
https://ocram-codes.net/

Please note that while his plugins are included in the demo project they
are NOT free for commerical use. 
============================================================================

rabbitMegaMap gives you a customizable mini map based on your images. 
By using a mask file it limits the viewable map to the shape of the mask.
The mini map moves in it's little window as your character moves. By default
the minimap will appear in the top left of your screen.

This plugin also increases the number of Picture ID to 1000.
By default, this plugin uses PictureID in the 900s to make sure it doesn't
conflict with whatever you're doing.

Maps by ID Will be found in img/maps
For example. map ID 42 will be searched for as img\maps\Map042.png

The files created by "Save Map Image..." will get the job done and are named 
correctly. You'll need to CREATE the maps directory in the "img" directory.
Such as: ProjectName\img\maps

You can use any image but:

It is important the the x/y ratio of which ever map file you use exactly 
matches the x/y ratio of the in game map. Exactly. If you're using saved
maps from RPG Maker, this should be a non-issue. If you, however, resize
them, be sure to resize both dimensions and MAINTAIN your aspect ratio.
Otherwise, your minimap will not be aligned with the game map and things
will be funky. 

By default a mask circle file "MaskCircle.png" will be loaded 

A background image "BlackCircle" will also be loaded to provide a background
in places where your map is transparent. This ensures that as you get to the 
edge of your screen and your minimap, you won't see the gamemap under the
minimap window.

I have also included a little green player dot image as well as rectangular
versions of the map background and mask, with a couple of color variations
as examples.

All images are available in the demo project and on itch.io.

============================================================================
MAP NOTETAGS
============================================================================

Map notetags will let you customize map file name and x/y scaling per map.
 
<rabbitMegaMap: mapfilename,x-scale,y-scale>

For example this will load the map file "Map042.png" and 
scale the image to 100%:
<rabbitMegaMap: Map042,100,100>

This load the same map image scaling it to 50%:
<rabbitMegaMap: Map042,50,50>

You will almost certainly need to EITHER resize your generated map images
or scale them via notetags, otherwise, the minimap will pretty much 
have the same scale as the in-game map. 

============================================================================
PLUGIN PARAMETERS:
============================================================================
ShowMiniMapSwitch: This switch determines if the minimap is visible or not.
   You must turn this switch on for anything to happen.

maskFile: The name of file (in img\maps) which determines
  the shape of the minimap.

backgroundFile: The name of the file (in img\maps) which lays below the
  minimap to prevent in-game visual from appearing the map

backgroundXOffset: if your background file is larger than the maskFile to,
  for example have a border around it, you'll need to offset it bit 
  so that they line up. This is the X (horizontal) offset.

backgroundYOffset: Same as above: Y (vertical offsaet). 

playerDotFile: The image used to represent the player on the minimap

showPlayerDot: Whether or not to show the player dot. 
  Valid values are 0, 1, true, false, or Javascript such as
  $gameVariables.value(ID)

playerDotXOffet: if your player dot isn't centered the way you like it,
  modify this. This is the X (horizontal) offset.
  Valid values are numbers or Javascript.
	
playerDotYOffset: Same as above. This is the Y (vertical) offset.

xBase: The base X (horizontal) location of the minimap.
  Valid values are numbers or Javascript.
	  
yBase: The base Y (vertical) location of the minimap.
  Valid values are numbers or Javascript.
	   
MapScrollSpeed: The number of frames which it takes for the minimap to move
  from the current location to the next. If you're using a pixel 
  movement plugin, 3 seems like a good number. If you're NOT using
  pixel movement, either 0 or 10 seem to work best.
		
Picture IDs:
 MapBackgroundPictureID
 MiniMapPictureID
 MapMaskPictureID
 PlayerDotPictureID
 
 These picture IDs are to be used by rabbitMegaMap to show the minimap pictures.
 The ABSOLUTELY MUST BE IN THE ORDER PROVIDED because of layering.
 The numbers don't matter, but each must have a higher number than the 
 previous entry. Otherwise they will not display correcrtly.

MVCompat: Turn this switch on if you're using RPG Maker MV.
  It defaults to OFF, which is what it should be set to for MZ.
  
============================================================================
This plugin has NO plugin commands. All settings must be done either via
the plugin options screen or map notetags.
 

============================================================================
This plugin was designed for me to use in conjunction with the
VisuStella Proximity Compass Plugin, found here:
http://www.yanfly.moe/wiki/Proximity_Compass_VisuStella_MZ

Mind you, the Proximity Compass is a PAID plguugin and is in ​no way​ 
required, and I am NOT associated with the VisuStella team. However, if you
are using the Proxmity Compass, rabbitMegaMap can be integrated nicely.

I use the following settings:
Center X: Graphics.width -75 * ConfigManager.compassSize / 100
Center Y: (Graphics.height - 75 * ConfigManager.compassSize / 100 )
Radius: 75
Tile Scale: 0.125
Back Color: #000000
Back Opacity: 0
I have the menu settings for the compass set to NOT DISPLAY
And I have the compass size set to 100%

The settings for rabbitMegaMap with this setup are:
maskFile: MaskCircle
backgroundFile: BlackCircle
bgxoffset: -5
bgyoffset: -5
showPlaterDot: 0
xBase: 1200
yBase: 645
mapScrollSpeed: 3

The above settings should give you a minimap and proximity compass in the 
bottom right hand corner of the screen, nicely merged together.

If your scale is off, the items will appear to float around, sometimes 
quite wildly, from where they are on the actual map. It's been my experience
that using a minimap scale of 50% or 25% usually makes them line up.
It depends on the size of the map, and how large the exported image
turns out to be.

============================================================================
ChangeLog

1.01 Fixed Race Condition where things would crash when 
	no map notes were set on the first map.
	
1.02 Fixed a bug in MV compatibility where rabbitMegaMap would fail to draw
	the map on transfer, crashing the game.
	
1.03 Reworked how mask and bg image size are handled. Minimaps of different
	sizes should behave better now. You will probably need to adjust your
	xBase, yBase and possibly your offsets to account for the new (more
	accurate) handling.
	
1.04 Fix for situation when map is turned off and then back on without
	moving to another map.
============================================================================


@param headerPluginOptions
@text Plugin Options
@type text
@default ------------------------------------

@param ShowMiniMapSwitch
@desc The switch turns on/off mini map
@default 1
@type switch

@param maskFile
@desc The file to use as an "image mask". Needs to be in img/maps
@default MaskCircle
@type text

@param backgroundFile
@desc The file to use as an background image. For when the map is transparent
@default BlackCircleRing
@type text


@param backgroundXOffset
@desc The X offset for the background image
@default -5
@type text

@param backgroundYOffset
@desc The Y offset for the background image
@default -5
@type text

@param playerDotFile
@desc The file to use as an your player on the map. Should be smallish
@default playerdot
@type text

@param showPlayerDot
@desc Should the player dot be shown on the map? (0/1, true/false, JS eval)
@default false
@type text

@param playerDotXOffset
@desc Adjust the player dot x position. Default 0. (JS is evaluated)
@default 0
@type text

@param playerDotYOffset
@desc Adjust the player dot y position. Default 0. (JS is evaluated)
@default 0
@type text

@param xBase
@desc The base X of mini map screen location. Default 75. (JS is evaluated)
@default 80
@type text

@param yBase
@desc The base Y of mini map screen location. Default 78. (JS is evaluated)
@default 80
@type text

@param MapScrollSpeed
@desc The number of frames it takes to move the minimap between steps
@default 0
@type number

@param MapBackgroundPictureID
@desc Picture ID of the map background image. Must be below MapPictureID
@default 989
@type number


@param MiniMapPictureID
@desc Picture ID of the main map image. Must be between BG and Mask
@default 990
@type number

@param MapMaskPictureID
@desc Picture ID of the map mask image. Must be below Player Dot. Default 991
@default 991
@type number

@param PlayDotPictureID
@desc Picture ID of the Player Dot image. Must be above MapMask. Default 992
@default 992
@type number

@param MVCompat
@desc Are you using MV? This might make it work.
@default false
@type boolean

*/

//Declaring constants and defining functions
(() => {
Game_Screen.prototype.maxPictures = function() {
    return 1000; 
};

// Modify rabbitMap definition instead of overwriting
(	
	function() {
		var KC_Spriteset_Map_Update = Spriteset_Map.prototype.update
		Spriteset_Map.prototype.update = function() {
			KC_Spriteset_Map_Update.call(this);
			megaMap();
		}
	}
)();

//pull paramter and defaults setup from plugin options.
"use strict";
const parameters = PluginManager.parameters("rabbitMegaMap");
const showMiniMapSwitch = Number(parameters['ShowMiniMapSwitch'] || 1);
const xBase = (parameters['xBase'] || 80);
const yBase = (parameters['yBase'] || 80);
const maskFile = (parameters['maskFile'] || "MaskCircle");
const backgroundFile = (parameters['backgroundFile'] || "BlackCircleRing");
const mapBGXOffset = (parameters['backgroundXOffset'] || -5);
const mapBGYOffset = (parameters['backgroundYOffset'] || -5);
const playerDotFile = (parameters['playerDotFile'] || "playerdot");
const isShowPlayerDot = (parameters['showPlayerDot'] || false);
const mapBGPictureID = Number(parameters['MapBackgroundPictureID'] || 989);
const mapPictureID = Number(parameters['MiniMapPictureID'] || 990);
const mapMaskPictureID = Number(parameters['MapMaskPictureID'] || 991);
const mapPlayerDotPictureID = Number(parameters['PlayDotPictureID'] || 992);
const mapScrollSpeed = Number(parameters['MapScrollSpeed'] || 0);
const pDXO = (parameters['playerDotXOffset'] || 0);
const pDYO = (parameters['playerDotYOffset'] || 0);
const rabbitMegaMapMVCompat = (parameters['MVCompat'] || false);

if (!rabbitNewMapID) {	var rabbitNewMapID = 0; }
if (!rabbitMegaMapFile) { var rabbitMegaMapFile = "";}
if (!rabbitMegaMapX) { var rabbitMegaMapX = "100";}
if (!rabbitMegaMapY) { var rabbitMegaMapY = "100";}
var rabbitMegaMapRegX = /<rabbitMegaMap: ([a-zA-Z0-9]+),([0-9]+),([0-9]+)>/i;
var isNewMap = 30;


    function rmGetMapInfo (){
        $gameScreen.erasePicture(mapPictureID);
        var rabbitMegaMapNotes = $dataMap.note.match(rabbitMegaMapRegX);
        if (rabbitMegaMapNotes){
        rabbitMegaMapFile = '../pictures/' + rabbitMegaMapNotes[1];
        rabbitMegaMapX = rabbitMegaMapNotes[2];
        rabbitMegaMapY = rabbitMegaMapNotes[3];
        }
        else { 
		let rabbitNewMapID = $gamePlayer.newMapId();
        if (rabbitNewMapID == 0)
		{
			rabbitNewMapID = $gameMap.mapId();
		}
		rabbitMegaMapFile = '../pictures/map%1'.format(rabbitNewMapID.padZero(3)); 
		rabbitMegaMapX = 100;
        rabbitMegaMapY = 100;
        //console.log("no map notes"); 
        }
        rabbitNewMapID = 0; 
    };

    function megaMap () {
        if (SceneManager._scene.constructor.name === "Scene_Map") {
			//don't do anything if we're not on the map
			//switches don't exist until we have a scene....
			var showingMegaMap = $gameSwitches.value(showMiniMapSwitch);
			//if we are on a new map, we show nothing for 30 frames.
			if ($gamePlayer.newMapId() > 0) {
				rabbitNewMapID = $gamePlayer.newMapId();
					isNewMap = 30;
			}
			if (!showingMegaMap) { isNewMap=30;}  //if the map has been turned off, and turned back on, we need a reset
			if (((rabbitNewMapID == $gameMap.mapId()) && (rabbitNewMapID > 0))) {
				rmGetMapInfo();
					isNewMap = 30;
				}
				
			if (rabbitMegaMapFile == ""  && $gameMap.mapId() > 0) {
					rabbitNewMapID = $gameMap.mapId();
					rmGetMapInfo();
						isNewMap = 30;
			};
				
			if (!$gameMessage.isBusy()) {
			try { //in MV it seems to take a couple of extra frames to catch up, so rather than crash, we try/catch out.
					if (showingMegaMap)  {	//are we showing the minimap?
						if ($gamePlayer.newMapId() == 0) { //is this a new map? if NOT, do the thing.
						let tw = (rabbitMegaMapX /100) || 1; //set the X scale based on the Map Notetag (unless it's not set, then 1)
						let th = (rabbitMegaMapY /100) || 1; //set the Y scale based on the Map Notetag (unless it's not set, then 1)
						let pw = tw * (SceneManager._scene._spriteset._pictureContainer.children[mapPictureID - 1].width);  //get the height/width of the minimap image and scale it
						let ph = th * (SceneManager._scene._spriteset._pictureContainer.children[mapPictureID - 1].height);
						let mh = (SceneManager._scene._spriteset._pictureContainer.children[mapMaskPictureID - 1].height);
						let mw = (SceneManager._scene._spriteset._pictureContainer.children[mapMaskPictureID - 1].width);
						let xr = pw / $gameMap.width();  //get ratio of the minimap w/r/t the actual map size
						let yr = ph / $gameMap.height();   
						$gameScreen.showPicture(mapBGPictureID, "../pictures/" + backgroundFile, 0, eval(mapBGXOffset) + eval(xBase) -(mw/2) , eval(mapBGYOffset) + eval(yBase) -(mh/2) , 100, 100, 255, 0); 
						
						if (isNewMap > 0) //if we're on a new map - show nothing for 30 frames (see above)
							{
							$gameScreen.showPicture(mapPictureID, rabbitMegaMapFile, 0, eval(xBase) - xr * $gamePlayer.x -5 , eval(yBase) - yr * $gamePlayer.y -3 , eval(rabbitMegaMapX), eval(rabbitMegaMapY), 0, 0);
							isNewMap -= 1;
						}
						else {
							if (mapScrollSpeed) {  //if the map scrollspeed is set, it "moves" the map to it's next position over that many frames
								$gameScreen.movePicture(mapPictureID, 0, eval(xBase) - xr * $gamePlayer.x -5, eval(yBase) - yr * $gamePlayer.y -3, eval(rabbitMegaMapX), eval(rabbitMegaMapY), 255, 0, mapScrollSpeed);
							}
							else { //otherwise it just plops it where it needs to be
								$gameScreen.showPicture(mapPictureID, rabbitMegaMapFile, 0, eval(xBase) - xr * $gamePlayer.x -5, eval(yBase) - yr * $gamePlayer.y - 3 , eval(rabbitMegaMapX), eval(rabbitMegaMapY), 255, 0);
							}
								
						}
						//this mask file determines the "hole" where the minimap is actually displayed
						$gameScreen.showPicture(mapMaskPictureID, "../pictures/" + maskFile, 0, eval(xBase) - (mw/2)  , eval(yBase) - (mh/2), 100, 100, 255, 0); 
												
						//Are we showing the player dot?
						if ( eval(isShowPlayerDot) == "true" || eval(isShowPlayerDot) > 0 ){
						$gameScreen.showPicture(mapPlayerDotPictureID, "../pictures/" + playerDotFile , 0, eval(xBase) + eval(pDXO) -5 , eval(yBase) + eval(pDYO) -3 , 100, 100, 255, 0); 
						}
						else { $gameScreen.erasePicture(mapPlayerDotPictureID); }
						//attach the mask to the minimap image
						SceneManager._scene._spriteset._pictureContainer.children[mapPictureID-1].mask =
																		SceneManager._scene._spriteset._pictureContainer.children[mapMaskPictureID-1];
						}
						else {
						$gameScreen.erasePicture(mapPictureID);
						}
					} //end of minimap display
			} //end of try
			catch(err) { console.log("can't show map, will try on next frame"); } // this is in case MV hasn't caught up yet.
			
                if (!showingMegaMap) { //if not, delete the picture and mask
						$gameScreen.erasePicture(mapPictureID);
						$gameScreen.erasePicture(mapMaskPictureID);
						$gameScreen.erasePicture(mapPlayerDotPictureID);
						$gameScreen.erasePicture(mapBGPictureID);
                };
            };
        };
    };

    Game_Interpreter.prototype.megaMap = function () {
       return megaMap();
    };

})()