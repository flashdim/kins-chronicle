//=============================================================================
// VisuStella MZ - Animated Pictures
// VisuMZ_X_AnimatedPictures.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_AnimatedPictures = true;

var VisuMZ = VisuMZ || {};
VisuMZ.AnimatedPictures = VisuMZ.AnimatedPictures || {};
VisuMZ.AnimatedPictures.version = 1.01;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.01] [AnimatedPictures]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Animated_Pictures_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This is a RPG Maker MZ plugin that gives functionality to Show Picture
 * events to display animated pictures. Animated pictures are shown in a sprite
 * sheet format. There are looping controls and speed controls that can be used
 * with these animated pictures.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Functionality to make pictures animated as long as they follow the
 *   animated cell format.
 * * Control the looping properties and speed of the animated picture through
 *   the usage of plugin commands.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 4 ------
 *
 * This plugin is a Tier 4 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Instructions
 * ============================================================================
 *
 * Save your animated picture into your game project's img/pictures folder.
 * The filename must be named with the following format:
 *
 * filename[ANI][HxV]
 *
 * Replace H in the filename with the number of horizontal cells it has.
 * Replace V in the filename with the number of vertical cells it has.
 * The number of total cells it has available is equal the multiplicative
 * product of the horizontal and vertical cells.
 *
 * For example:
 *
 * "Parrot[ANI][3x2]" will have 3 horizontal cells and 2 vertical cells. This
 * means there are a total of 6 cells that will be used for animating.
 *
 * Animations will be played from left to right, then up to down so please
 * arrange them as such. For example, 4x5 will play like this:
 *
 *  1  2  3  4
 *  5  6  7  8
 *  9 10 11 12
 * 13 14 15 16
 * 17 18 19 20
 *
 * Keep this in mind as you format your animated pictures.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 *
 * Animated Picture: Change Properties
 * - Changes the properties used for the animated picture.
 *
 *   Picture ID:
 *   - Select which Picture ID to affect.
 *
 *   Loop?:
 *   - Animated pictures will loop back to beginning once it reaches the
 *     last frame.
 *
 *   Wait Frames:
 *   - Number of frames to wait before moving to next picture cell.
 *
 * ---
 *
 * ============================================================================
 * Good Practices
 * ============================================================================
 *
 * Animated pictures, if used incorrectly, can bog down the game client. Here
 * are some good practices that you can follow when making animated pictures
 * to make them run more smoothly in-game.
 *
 * ---
 *
 * 1. Use animated pictures sparingly if possible. RPG Maker MZ's cache has a
 * limited size to it, which means the more animated pictures you use, the
 * faster it will fill up. And the faster it fills up, the more it needs to be
 * emptied to allow other assets in your game to load at all.
 *
 * ---
 *
 * 2. If you do use animated pictures, trim down as much empty space as
 * possible and keep picture cells to a minimum size to reduce bloating
 * the cache.
 *
 * ---
 *
 * 3. If it is practical, make your sprite sheet cells work towards a power of
 * 2 (ie: sizes of 32x32, 64x64, 128x128, 256x256, etc). Bitmaps render best
 * when it works in this cell range. This is not necessary, but it is a thing
 * to keep in mind.
 *
 * ---
 *
 * 4. Limit the amount of colors used in the animated picture to reduce the
 * filesize of the image and reduce the strain on the cache. Use more flat
 * colors instead of gradients. These work better for the engine.
 *
 * ---
 *
 * 5. When you are done using the animated picture, use the Erase Picture
 * command to clear the picture from use. This will stop the animation frame
 * calculating and reduce strain on your game.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These Plugin Parameters are the only ones available with this plugin. These
 * adjust the default settings of animated pictures. If you wish to change how
 * some animated pictures behave from others, 
 *
 * ---
 *
 * Defaults
 * 
 *   Default Loop?:
 *   - Animated pictures will loop back to beginning by default once it reaches
 *     the last frame.
 * 
 *   Default Wait Frames:
 *   - Default number of frames to wait before moving to next picture cell.
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 * 
 * 7. If this VisuStella MZ plugin is a paid product, all project team members
 * must purchase their own individual copies of the paid product if they are to
 * use it. Usage includes working on related game mechanics, managing related
 * code, and/or using related Plugin Commands and features. Redistribution of
 * the plugin and/or its code to other members of the team is NOT allowed
 * unless they own the plugin itself as that conflicts with Article 4.
 * 
 * 8. Any extensions and/or addendums made to this plugin's Terms of Use can be
 * found on VisuStella.com and must be followed.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.01: December 4, 2020
 * * Bug Fixes!
 * ** Plugin Command "Animated Picture: Change Properties" wait frames will no
 *    longer cap at 1 frame. Fixed by Irina and Shaz.
 *
 * Version 1.00: October 30, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChangeProperties
 * @text Animated Picture: Change Properties
 * @desc Changes the properties used for the animated picture.
 *
 * @arg PictureID:num
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc Select which Picture ID to affect.
 * @default 1
 *
 * @arg Loop:eval
 * @text Loop?
 * @parent PictureID:num
 * @type boolean
 * @on ON
 * @off OFF
 * @desc Animated pictures will loop back to beginning once it reaches the last frame.
 * @default true
 *
 * @arg WaitFrames:num
 * @text Wait Frames
 * @parent PictureID:num
 * @type number
 * @min 1
 * @desc Number of frames to wait before moving to next picture cell.
 * @default 4
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param AnimatedPictures
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Loop:eval
 * @text Default Loop?
 * @type boolean
 * @on ON
 * @off OFF
 * @desc Animated pictures will loop back to beginning by default once it reaches the last frame.
 * @default true
 *
 * @param WaitFrames:num
 * @text Default Wait Frames
 * @desc Default number of frames to wait before moving to next picture cell.
 * @default 4
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
//=============================================================================

const _0x3371=['updateAnimatedPictureFrame','return\x200','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','_animationCount','max','ConvertParams','getAnimatedPictureWaitFrames','updateAnimatedPictureCount','update','FUNC','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','ARRAYJSON','name','realPictureId','Sprite_Picture_loadBitmap','tVEbS','qwiCu','loadBitmap','setAnimatedPictureLooping','bitmap','_animatedPictureWait','addLoadListener','ARRAYNUM','isAnimatedPicture','setAnimatedPictureWaitFrames','AnimatedPictures','_animatedPictureLoop','viQIW','map','exit','STR','parameters','JSON','setupAnimatedPictureData','initialize','floor','status','WaitFrames','animationWaitFrames','dFUAZ','_pictureId','visible','_animationIndex','JBodV','width','call','Game_Screen_initialize','initAnimatedPicture','ARRAYSTRUCT','Sprite_Picture_initialize','VylrB','isAnimatedPictureLooping','setFrame','initAnimatedPictureSettings','_animationVertCells','_pictureName','Sprite_Picture_update','ARRAYSTR','version','_isAnimatedPicture','bind','Settings','Loop','_animationHorzCells','description','format','registerCommand','kTsJK','NLMFB','daEyR','parse','STRUCT','match','PictureID','toUpperCase','prototype','filter','_animationMaxCells','trim','height','NUM','isAnimationLooping','cUjmM'];(function(_0x136492,_0xd6ffa6){const _0x337112=function(_0x423e38){while(--_0x423e38){_0x136492['push'](_0x136492['shift']());}};_0x337112(++_0xd6ffa6);}(_0x3371,0xd4));const _0x423e=function(_0x136492,_0xd6ffa6){_0x136492=_0x136492-0x11b;let _0x337112=_0x3371[_0x136492];return _0x337112;};const _0x5dc778=_0x423e;var label=_0x5dc778(0x159),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x5dc778(0x139)](function(_0x5dcf41){const _0x166190=_0x5dc778;return _0x5dcf41[_0x166190(0x164)]&&_0x5dcf41['description']['includes']('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0x5dc778(0x12a)]||{},VisuMZ[_0x5dc778(0x145)]=function(_0x42aeb8,_0x22cde8){const _0x56748d=_0x5dc778;for(const _0x1deeef in _0x22cde8){if('zRjHy'!==_0x56748d(0x131)){if(_0x1deeef[_0x56748d(0x135)](/(.*):(.*)/i)){if(_0x56748d(0x130)==='kTsJK'){const _0x5a1bb5=String(RegExp['$1']),_0x2bef47=String(RegExp['$2'])[_0x56748d(0x137)]()[_0x56748d(0x13b)]();let _0x3b1f18,_0x3f3c60,_0x1bc7db;switch(_0x2bef47){case _0x56748d(0x13d):_0x3b1f18=_0x22cde8[_0x1deeef]!==''?Number(_0x22cde8[_0x1deeef]):0x0;break;case _0x56748d(0x156):_0x3f3c60=_0x22cde8[_0x1deeef]!==''?JSON[_0x56748d(0x133)](_0x22cde8[_0x1deeef]):[],_0x3b1f18=_0x3f3c60[_0x56748d(0x15c)](_0x2f4af3=>Number(_0x2f4af3));break;case'EVAL':_0x3b1f18=_0x22cde8[_0x1deeef]!==''?eval(_0x22cde8[_0x1deeef]):null;break;case'ARRAYEVAL':_0x3f3c60=_0x22cde8[_0x1deeef]!==''?JSON[_0x56748d(0x133)](_0x22cde8[_0x1deeef]):[],_0x3b1f18=_0x3f3c60['map'](_0x1911d8=>eval(_0x1911d8));break;case _0x56748d(0x160):_0x3b1f18=_0x22cde8[_0x1deeef]!==''?JSON['parse'](_0x22cde8[_0x1deeef]):'';break;case _0x56748d(0x14b):_0x3f3c60=_0x22cde8[_0x1deeef]!==''?JSON['parse'](_0x22cde8[_0x1deeef]):[],_0x3b1f18=_0x3f3c60['map'](_0x188e19=>JSON[_0x56748d(0x133)](_0x188e19));break;case _0x56748d(0x149):_0x3b1f18=_0x22cde8[_0x1deeef]!==''?new Function(JSON[_0x56748d(0x133)](_0x22cde8[_0x1deeef])):new Function(_0x56748d(0x141));break;case'ARRAYFUNC':_0x3f3c60=_0x22cde8[_0x1deeef]!==''?JSON[_0x56748d(0x133)](_0x22cde8[_0x1deeef]):[],_0x3b1f18=_0x3f3c60[_0x56748d(0x15c)](_0x101553=>new Function(JSON[_0x56748d(0x133)](_0x101553)));break;case _0x56748d(0x15e):_0x3b1f18=_0x22cde8[_0x1deeef]!==''?String(_0x22cde8[_0x1deeef]):'';break;case _0x56748d(0x126):_0x3f3c60=_0x22cde8[_0x1deeef]!==''?JSON[_0x56748d(0x133)](_0x22cde8[_0x1deeef]):[],_0x3b1f18=_0x3f3c60['map'](_0xa1d35a=>String(_0xa1d35a));break;case _0x56748d(0x134):_0x1bc7db=_0x22cde8[_0x1deeef]!==''?JSON[_0x56748d(0x133)](_0x22cde8[_0x1deeef]):{},_0x3b1f18=VisuMZ['ConvertParams']({},_0x1bc7db);break;case _0x56748d(0x11d):_0x3f3c60=_0x22cde8[_0x1deeef]!==''?JSON[_0x56748d(0x133)](_0x22cde8[_0x1deeef]):[],_0x3b1f18=_0x3f3c60['map'](_0xbf808f=>VisuMZ[_0x56748d(0x145)]({},JSON[_0x56748d(0x133)](_0xbf808f)));break;default:continue;}_0x42aeb8[_0x5a1bb5]=_0x3b1f18;}else{function _0xdea751(){const _0x4b6499=_0x56748d;this[_0x4b6499(0x15a)]===_0x1c12d4&&this[_0x4b6499(0x122)]();const _0x210971=this[_0x4b6499(0x14d)](_0x574793);this[_0x4b6499(0x15a)][_0x210971]=_0x4ae35e;}}}}else{function _0x53b007(){const _0x47c08e=_0x56748d,_0x550897=this[_0x47c08e(0x153)][_0x47c08e(0x16c)]/this[_0x47c08e(0x12c)],_0x4c9ee0=this[_0x47c08e(0x153)][_0x47c08e(0x13c)]/this[_0x47c08e(0x123)],_0x388507=this[_0x47c08e(0x16a)]%this['_animationHorzCells']*_0x550897,_0x5cd238=_0x2d5839[_0x47c08e(0x163)](this[_0x47c08e(0x16a)]/this['_animationHorzCells'])*_0x4c9ee0;this[_0x47c08e(0x121)](_0x388507,_0x5cd238,_0x550897,_0x4c9ee0);}}}return _0x42aeb8;},(_0x1ee324=>{const _0x5b7a12=_0x5dc778,_0x18a173=_0x1ee324['name'];for(const _0x475ba6 of dependencies){if(_0x5b7a12(0x167)===_0x5b7a12(0x167)){if(!Imported[_0x475ba6]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'['format'](_0x18a173,_0x475ba6)),SceneManager['exit']();break;}}else{function _0x465f38(){this['initAnimatedPictureSettings']();}}}const _0xef0f94=_0x1ee324[_0x5b7a12(0x12d)];if(_0xef0f94[_0x5b7a12(0x135)](/\[Version[ ](.*?)\]/i)){const _0x50398a=Number(RegExp['$1']);if(_0x50398a!==VisuMZ[label][_0x5b7a12(0x127)]){if('JBodV'!==_0x5b7a12(0x16b)){function _0x33b6f9(){const _0x52614a=_0x5b7a12;this[_0x52614a(0x15a)]===_0x3b55a7&&this[_0x52614a(0x122)]();const _0x3fa3c2=this[_0x52614a(0x14d)](_0x363878);return this['_animatedPictureLoop'][_0x3fa3c2]===_0x5e1695&&(this[_0x52614a(0x15a)][_0x3fa3c2]=_0x361ac1['AnimatedPictures'][_0x52614a(0x12a)][_0x52614a(0x12b)]),this[_0x52614a(0x15a)][_0x3fa3c2];}}else alert(_0x5b7a12(0x14a)[_0x5b7a12(0x12e)](_0x18a173,_0x50398a)),SceneManager[_0x5b7a12(0x15d)]();}}if(_0xef0f94[_0x5b7a12(0x135)](/\[Tier[ ](\d+)\]/i)){if(_0x5b7a12(0x14f)!==_0x5b7a12(0x14f)){function _0x448e23(){const _0x31dbd0=_0x5b7a12;this['_isAnimatedPicture']=![],this['_animationHorzCells']=0x1,this[_0x31dbd0(0x123)]=0x1,this[_0x31dbd0(0x13a)]=0x1;}}else{const _0x5f0b3b=Number(RegExp['$1']);_0x5f0b3b<tier?(alert(_0x5b7a12(0x142)[_0x5b7a12(0x12e)](_0x18a173,_0x5f0b3b,tier)),SceneManager['exit']()):tier=Math[_0x5b7a12(0x144)](_0x5f0b3b,tier);}}VisuMZ[_0x5b7a12(0x145)](VisuMZ[label][_0x5b7a12(0x12a)],_0x1ee324[_0x5b7a12(0x15f)]);})(pluginData),PluginManager[_0x5dc778(0x12f)](pluginData[_0x5dc778(0x14c)],'ChangeProperties',_0x45c191=>{const _0xa3a5a7=_0x5dc778;VisuMZ[_0xa3a5a7(0x145)](_0x45c191,_0x45c191);const _0x1998f6=_0x45c191[_0xa3a5a7(0x136)],_0x3b39f9=_0x45c191[_0xa3a5a7(0x12b)],_0x20202=_0x45c191[_0xa3a5a7(0x165)];$gameScreen[_0xa3a5a7(0x152)](_0x1998f6,_0x3b39f9),$gameScreen[_0xa3a5a7(0x158)](_0x1998f6,_0x20202);}),VisuMZ['AnimatedPictures']['Game_Screen_initialize']=Game_Screen[_0x5dc778(0x138)]['initialize'],Game_Screen[_0x5dc778(0x138)][_0x5dc778(0x162)]=function(){const _0x23eb53=_0x5dc778;VisuMZ['AnimatedPictures'][_0x23eb53(0x11b)][_0x23eb53(0x16d)](this),this['initAnimatedPictureSettings']();},Game_Screen[_0x5dc778(0x138)]['initAnimatedPictureSettings']=function(){const _0x4e966e=_0x5dc778;this[_0x4e966e(0x15a)]=[],this[_0x4e966e(0x154)]=[];},Game_Screen[_0x5dc778(0x138)][_0x5dc778(0x120)]=function(_0x38cd93){const _0x22b74f=_0x5dc778;if(this['_animatedPictureLoop']===undefined){if('TIDMZ'!==_0x22b74f(0x11f))this[_0x22b74f(0x122)]();else{function _0x479bb9(){const _0x41f492=_0x22b74f;_0x411f4c[_0x41f492(0x159)][_0x41f492(0x125)]['call'](this),this[_0x41f492(0x169)]&&this[_0x41f492(0x157)]()&&this[_0x41f492(0x147)]();}}}const _0x4c79fc=this[_0x22b74f(0x14d)](_0x38cd93);return this[_0x22b74f(0x15a)][_0x4c79fc]===undefined&&(this[_0x22b74f(0x15a)][_0x4c79fc]=VisuMZ['AnimatedPictures']['Settings'][_0x22b74f(0x12b)]),this[_0x22b74f(0x15a)][_0x4c79fc];},Game_Screen[_0x5dc778(0x138)][_0x5dc778(0x152)]=function(_0x3685a3,_0x79ee0c){const _0x1819a5=_0x5dc778;this['_animatedPictureLoop']===undefined&&this[_0x1819a5(0x122)]();const _0x1b629c=this[_0x1819a5(0x14d)](_0x3685a3);this['_animatedPictureLoop'][_0x1b629c]=_0x79ee0c;},Game_Screen[_0x5dc778(0x138)][_0x5dc778(0x146)]=function(_0x41230e){const _0x370439=_0x5dc778;if(this['_animatedPictureWait']===undefined){if(_0x370439(0x132)!==_0x370439(0x132)){function _0x49010a(){const _0x386231=_0x370439;_0x1b8490(_0x386231(0x14a)[_0x386231(0x12e)](_0x45c34b,_0x2970af)),_0x131098[_0x386231(0x15d)]();}}else this[_0x370439(0x122)]();}const _0x2e5f23=this[_0x370439(0x14d)](_0x41230e);if(this['_animatedPictureWait'][_0x2e5f23]===undefined){if(_0x370439(0x13f)==='eSGbR'){function _0x4a25d9(){const _0x11e733=_0x370439;return _0x35849d[_0x11e733(0x146)](this['_pictureId']);}}else this[_0x370439(0x154)][_0x2e5f23]=VisuMZ['AnimatedPictures']['Settings']['WaitFrames'];}return this[_0x370439(0x154)][_0x2e5f23];},Game_Screen[_0x5dc778(0x138)][_0x5dc778(0x158)]=function(_0xdade5c,_0x3751ca){const _0x43dafa=_0x5dc778;this['_animatedPictureWait']===undefined&&this['initAnimatedPictureSettings']();const _0x1161fa=this['realPictureId'](_0xdade5c);this[_0x43dafa(0x154)][_0x1161fa]=_0x3751ca;},VisuMZ[_0x5dc778(0x159)][_0x5dc778(0x11e)]=Sprite_Picture[_0x5dc778(0x138)]['initialize'],Sprite_Picture[_0x5dc778(0x138)][_0x5dc778(0x162)]=function(_0x5ca85a){const _0x3acac7=_0x5dc778;this[_0x3acac7(0x11c)](),VisuMZ['AnimatedPictures'][_0x3acac7(0x11e)][_0x3acac7(0x16d)](this,_0x5ca85a);},Sprite_Picture[_0x5dc778(0x138)][_0x5dc778(0x11c)]=function(){const _0x350ba8=_0x5dc778;this[_0x350ba8(0x128)]=![],this[_0x350ba8(0x12c)]=0x1,this[_0x350ba8(0x123)]=0x1,this['_animationMaxCells']=0x1,this[_0x350ba8(0x143)]=0x0,this[_0x350ba8(0x16a)]=0x0;},Sprite_Picture[_0x5dc778(0x138)][_0x5dc778(0x157)]=function(){const _0x40a338=_0x5dc778;if(this['_isAnimatedPicture']===undefined)this[_0x40a338(0x11c)]();return this[_0x40a338(0x128)];},VisuMZ[_0x5dc778(0x159)]['Sprite_Picture_loadBitmap']=Sprite_Picture['prototype'][_0x5dc778(0x151)],Sprite_Picture['prototype']['loadBitmap']=function(){const _0xd96605=_0x5dc778;this[_0xd96605(0x161)](),VisuMZ['AnimatedPictures'][_0xd96605(0x14e)]['call'](this);if(this[_0xd96605(0x157)]()){if('PiAMR'===_0xd96605(0x150)){function _0xcfde7e(){const _0x39337a=_0xd96605;this[_0x39337a(0x154)]===_0x53f085&&this[_0x39337a(0x122)]();const _0x2940f8=this[_0x39337a(0x14d)](_0x1f1629);return this[_0x39337a(0x154)][_0x2940f8]===_0x2fcd87&&(this[_0x39337a(0x154)][_0x2940f8]=_0x175853[_0x39337a(0x159)][_0x39337a(0x12a)][_0x39337a(0x165)]),this['_animatedPictureWait'][_0x2940f8];}}else this[_0xd96605(0x153)][_0xd96605(0x155)](this['updateAnimatedPictureFrame']['bind'](this));}else{if(_0xd96605(0x15b)!==_0xd96605(0x15b)){function _0x2c4796(){const _0x20e7d3=_0xd96605;this[_0x20e7d3(0x128)]=![],this[_0x20e7d3(0x12c)]=0x1,this[_0x20e7d3(0x123)]=0x1,this['_animationMaxCells']=0x1,this[_0x20e7d3(0x143)]=0x0,this[_0x20e7d3(0x16a)]=0x0;}}else this[_0xd96605(0x153)][_0xd96605(0x155)](this['resetFrame'][_0xd96605(0x129)](this));}},Sprite_Picture[_0x5dc778(0x138)]['resetFrame']=function(){const _0x18856d=_0x5dc778;this[_0x18856d(0x121)](0x0,0x0,this[_0x18856d(0x153)][_0x18856d(0x16c)],this[_0x18856d(0x153)][_0x18856d(0x13c)]);},Sprite_Picture[_0x5dc778(0x138)][_0x5dc778(0x161)]=function(){const _0x773917=_0x5dc778;this[_0x773917(0x124)][_0x773917(0x135)](/\[ANI\]\[(\d+)x(\d+)\]/i)?(this[_0x773917(0x128)]=!![],this[_0x773917(0x12c)]=Math[_0x773917(0x144)](0x1,parseInt(RegExp['$1'])),this[_0x773917(0x123)]=Math[_0x773917(0x144)](0x1,parseInt(RegExp['$2'])),this[_0x773917(0x13a)]=this[_0x773917(0x12c)]*this[_0x773917(0x123)]):(this[_0x773917(0x128)]=![],this[_0x773917(0x12c)]=0x1,this[_0x773917(0x123)]=0x1,this[_0x773917(0x13a)]=0x1),this[_0x773917(0x143)]=0x0,this[_0x773917(0x16a)]=0x0;},VisuMZ['AnimatedPictures'][_0x5dc778(0x125)]=Sprite_Picture[_0x5dc778(0x138)][_0x5dc778(0x148)],Sprite_Picture[_0x5dc778(0x138)][_0x5dc778(0x148)]=function(){const _0x27e1f9=_0x5dc778;VisuMZ[_0x27e1f9(0x159)][_0x27e1f9(0x125)][_0x27e1f9(0x16d)](this),this[_0x27e1f9(0x169)]&&this[_0x27e1f9(0x157)]()&&this[_0x27e1f9(0x147)]();},Sprite_Picture[_0x5dc778(0x138)]['updateAnimatedPictureCount']=function(){const _0x1de592=_0x5dc778;this[_0x1de592(0x143)]+=0x1,this[_0x1de592(0x143)]>=this[_0x1de592(0x166)]()&&(this[_0x1de592(0x143)]=0x0,this[_0x1de592(0x16a)]+=0x1,this['_animationIndex']>=this[_0x1de592(0x13a)]&&(this['isAnimationLooping']()?this[_0x1de592(0x16a)]=0x0:this[_0x1de592(0x16a)]=this[_0x1de592(0x13a)]-0x1),this[_0x1de592(0x140)]());},Sprite_Picture[_0x5dc778(0x138)][_0x5dc778(0x140)]=function(){const _0x13c12d=_0x5dc778,_0xfd3c0d=this[_0x13c12d(0x153)][_0x13c12d(0x16c)]/this[_0x13c12d(0x12c)],_0x41442=this[_0x13c12d(0x153)][_0x13c12d(0x13c)]/this['_animationVertCells'],_0x4f4d83=this[_0x13c12d(0x16a)]%this['_animationHorzCells']*_0xfd3c0d,_0x5dd5b9=Math[_0x13c12d(0x163)](this['_animationIndex']/this[_0x13c12d(0x12c)])*_0x41442;this[_0x13c12d(0x121)](_0x4f4d83,_0x5dd5b9,_0xfd3c0d,_0x41442);},Sprite_Picture[_0x5dc778(0x138)][_0x5dc778(0x13e)]=function(){const _0x4fb70d=_0x5dc778;return $gameScreen['isAnimatedPictureLooping'](this[_0x4fb70d(0x168)]);},Sprite_Picture[_0x5dc778(0x138)]['animationWaitFrames']=function(){const _0x1defdc=_0x5dc778;return $gameScreen[_0x1defdc(0x146)](this[_0x1defdc(0x168)]);};