//=============================================================================
// VisuStella MZ - Weakness Display
// VisuMZ_3_WeaknessDisplay.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_WeaknessDisplay = true;

var VisuMZ = VisuMZ || {};
VisuMZ.WeaknessDisplay = VisuMZ.WeaknessDisplay || {};
VisuMZ.WeaknessDisplay.version = 1.01;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.01] [WeaknessDisplay]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Weakness_Display_VisuStella_MZ
 * @base VisuMZ_1_BattleCore
 * @base VisuMZ_1_ElementStatusCore
 * @orderAfter VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_ElementStatusCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin creates a display in battle to show enemy elemental weaknesses.
 * These weaknesses will start off hidden and will be slowly revealed whenever
 * the respective enemies receive elemental damage of the correct type. This
 * way, your players no longer have to jot down mental notes on what enemies
 * are weak to which elements, and instead, have access to their pool of
 * discovered knowledge right at the screen.
 *
 * Features include all (but not limited to) the following:
 * 
 * * The Weakness Display is a new UI element added below each enemy.
 * * The display will reveal each of the elemental weaknesses an enemy has.
 * * The elements will be hidden at first but will be slowly revealed as the
 *   player hits the enemies with the correct element type.
 * * Players can use Analyze Weakness effects to reveal weaknesses without
 *   needing to hit them directly.
 * * Adjust the positions, icons, and elements for the Weakness Display to fit
 *   your game.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Required Plugin List ------
 *
 * * VisuMZ_1_BattleCore
 * * VisuMZ_1_ElementStatusCore
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 *
 * ------ Tier 3 ------
 *
 * This plugin is a Tier 3 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 *
 * VisuMZ_3_BoostAction
 *
 * The VisuStella MZ Boost Action plugin contains a notetag that allows the
 * Weakness Display's Analyze effect to trigger multiple times. This notetag
 * is <Boost Analyze> and its potency is dependent on the Plugin Parameter
 * settings found in the Boost Action plugin.
 *
 * ---
 * 
 * VisuMZ_4_BreakShields
 * 
 * The VisuStella MZ Break Shields plugin has a game mechanic to protect one's
 * elemental weaknesses. The protected elements will show up in the Weakness
 * Display and have a special icon on top of them.
 * 
 * ---
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * ---
 * 
 * === Analyze-Related Notetags ===
 * 
 * ---
 *
 * <Analyze Weakness: x>
 * <Analyze Weaknesses: x>
 *
 * - Used for: Skill, Item Notetags
 * - Reveals 'x' amount of elemental weaknesses the target enemy may have
 *   without needing to hit the enemy with the said elemental weakness first.
 * - Replace 'x' with a number representing the number of weaknesses to reveal
 *   through this action.
 * - This has no effect on actors.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These are the general settings regarding the Weakness Display plugin. They
 * allow you to adjust which elements appear and which icons to assign to them.
 * They also let you control which icons to use for the various display parts.
 *
 * ---
 *
 * Elements
 * 
 *   Shown Elements:
 *   - This is a list of the Element ID's you wish to display.
 *   - If this is empty, this will show all database elements.
 * 
 *   Element Icons:
 *   - Icon ID's used for each Element ID in order.
 *   - Priority will be given to elements with \I[x] in their names.
 * 
 *     Auto-Assign Icons:
 *     - Automatically assign icons if they do not show up in the
 *       Plugin Parameter settings based on their English names?
 *     - Icons will be automatically assigned based on the default icon sheet
 *       for the following elements if their names are detected:
 *       - Air, Aqua, Axe, Blade, Bow, Claw, Crossbow, Cure, Dagger, Dark,
 *         Earth, Energy, Evil, Fire, Flame, Frost, Glove, Ground, Gun, Heal,
 *         Holy, Ice, Knife, Light, Lightning, Mace, Magic, Mana, Melee,
 *         Polearm, Power, Physical, Sacred, Spear, Staff, Sword, Thunder,
 *         Wand, Water, Whip, Wind
 *       - Unlisted element names will default to icon index 160.
 *
 * ---
 *
 * Icons
 * 
 *   Background Icon:
 *   - Which icon index do you wish to use to assign as the background for the
 *     Weakness Display icons?
 * 
 *   Unknown Icon:
 *   - Which icon index do you wish to use to assign as the unknown marker for
 *     the Weakness Display icons?
 * 
 *   Smooth Icons?:
 *   - Do you wish to smooth out the icons or pixelate them?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Display Settings
 * ============================================================================
 *
 * These are the settings regarding how the Weakness Display UI elements behave
 * in-game. Adjust them to make them fit the visuals for your battle system.
 *
 * ---
 *
 * Display UI
 * 
 *   Icon Scale:
 *   - Scale up or down the display UI.
 *   - Use a number between 0 and 1 for the best results.
 * 
 *   Always Visible?:
 *   - Do you wish to make the Weakness Display always visible?
 * 
 *   Temporary Duration:
 *   - If not always visible, how many frames will the Weakness Display be
 *     temporarily visible?
 *   - 60 frames = 1 second.
 * 
 *   Temporary Selection?:
 *   - Determines the conditions for Weakness Display visibility.
 *     - Visible when Selected
 *     - Visible when Targeting
 *
 * ---
 *
 * Positioning
 * 
 *   Offset X/Y:
 *   - How much to offset the Weakness Display X/Y position by?
 *   - For X: Negative goes left. Positive goes right.
 *   - For Y: Negative goes up. Positive goes down.
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
 * Version 1.01: June 11, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Olivia and sponsored by NSG:
 * *** Display Settings > Always Visible? > Temporary Selection?
 * **** Determines the conditions for Weakness Display visibility.
 * 
 * Version 1.00 Official Release Date: April 28, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PluginCommandFunctionName
 * @text Category: Function Name
 * @desc Plugin Command Description Text
 *
 * @arg Step1:arraynum
 * @text Step 1: Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg option:num
 * @text Option Text
 * @type number
 * @max 1
 * @desc Change the value to this number
 * @default 42069
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemEnableWeaknessDisplayMenu
 * @text System: Enable WeaknessDisplay in Menu?
 * @desc Enables/disables WeaknessDisplay menu inside the main menu.
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables/disables WeaknessDisplay menu inside the main menu.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemShowWeaknessDisplayMenu
 * @text System: Show WeaknessDisplay in Menu?
 * @desc Shows/hides WeaknessDisplay menu inside the main menu.
 *
 * @arg Show:eval
 * @text Show/Hide?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows/hides WeaknessDisplay menu inside the main menu.
 * @default true
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
 * @param WeaknessDisplay
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param General:struct
 * @text General Settings
 * @type struct<General>
 * @desc These are the general settings regarding the Weakness Display.
 * @default {"Elements":"","ShownElements:arraynum":"[]","ElementIcons:arraynum":"[]","AutoIcon:eval":"true","Icons":"","BackgroundIcon:num":"16","UnknownIcon:num":"188","SmoothIcons:eval":"true"}
 *
 * @param Display:struct
 * @text Display Settings
 * @type struct<Display>
 * @desc These are the display settings regarding the Weakness Display UI.
 * @default {"DisplayUI":"","IconScale:num":"0.75","AlwaysVisible:eval":"false","TempDuration:num":"90","Positioning":"","DisplayOffsetX:num":"+0","DisplayOffsetY:num":"+0"}
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
/* ----------------------------------------------------------------------------
 * General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param Elements
 *
 * @param ShownElements:arraynum
 * @text Shown Elements
 * @parent Elements
 * @type number[]
 * @desc This is a list of the Element ID's you wish to display.
 * If this is empty, this will show all elements.
 * @default []
 *
 * @param ElementIcons:arraynum
 * @text Element Icons
 * @parent Elements
 * @type number[]
 * @desc Icon ID's used for each Element ID in order. Priority will
 * be given to elements with \I[x] in their names.
 * @default []
 *
 * @param AutoIcon:eval
 * @text Auto-Assign Icons
 * @parent ElementIcons:arraynum
 * @type boolean
 * @on Auto-Assign
 * @off Nothing
 * @desc Automatically assign icons if they do not show up in the
 * Plugin Parameter settings based on their English names?
 * @default true
 *
 * @param Icons
 *
 * @param BackgroundIcon:num
 * @text Background Icon
 * @parent Icons
 * @desc Which icon index do you wish to use to assign as the
 * background for the Weakness Display icons?
 * @default 16
 *
 * @param UnknownIcon:num
 * @text Unknown Icon
 * @parent Icons
 * @desc Which icon index do you wish to use to assign as the
 * unknown marker for the Weakness Display icons?
 * @default 188
 *
 * @param SmoothIcons:eval
 * @text Smooth Icons?
 * @parent Icons
 * @type boolean
 * @on Smooth
 * @off Pixelate
 * @desc Do you wish to smooth out the icons or pixelate them?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Display Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Display:
 *
 * @param DisplayUI
 * @text Display UI
 *
 * @param IconScale:num
 * @text Icon Scale
 * @parent DisplayUI
 * @desc Scale up or down the display UI.
 * Use a number between 0 and 1 for the best results.
 * @default 0.75
 *
 * @param AlwaysVisible:eval
 * @text Always Visible?
 * @parent DisplayUI
 * @type boolean
 * @on Always Visible
 * @off Temporarily
 * @desc Do you wish to make the Weakness Display always visible?
 * @default false
 *
 * @param TempDuration:num
 * @text Temporary Duration
 * @parent AlwaysVisible:eval
 * @type number
 * @desc If not always visible, how many frames will the Weakness
 * Display be temporarily visible? 60 frames = 1 second.
 * @default 90
 *
 * @param TempSelect:eval
 * @text Temporary Selection?
 * @parent AlwaysVisible:eval
 * @type boolean
 * @on Visible when Selected
 * @off Visible when Targeting
 * @desc Determines the conditions for Weakness Display visibility.
 * @default false
 *
 * @param Positioning
 *
 * @param DisplayOffsetX:num
 * @text Offset X
 * @parent Positioning
 * @desc How much to offset the Weakness Display X position by?
 * Negative goes left. Positive goes right.
 * @default +0
 *
 * @param DisplayOffsetY:num
 * @text Offset Y
 * @parent Positioning
 * @desc How much to offset the Weakness Display Y position by?
 * Negative goes up. Positive goes down.
 * @default +0
 *
 */
//=============================================================================

const _0x153f=['createWeaknessContainerSprites','WEAKNESS_DISPLAY_DURATION','revealWeakness','create','_weaknessDisplayIconSheet','ElementIcons','Game_Action_executeDamage','push','subject','yuuJa','blt','revealWeaknessDisplay','includes','vLcZy','originalElementRate','active','ALWAYS_VISIBLE','enemyId','eKXoR','KmjdN','_weaknessContainer','isIncludedInEnemyWindow','_enemyWindow','ShownElements','OBANm','PTevQ','_showWeaknessDisplayDuration','updateOpacity','iconHeight','nescM','visibilityState','apply','breakShield_ProtectIcon','5BNRtcm','ConvertParams','note','_needRefreshAllEnemyWeaknessWindows','getProtectedWeaknessElements','1196102VBQjmV','NameAlwaysSelectOnly','BoostAction','unshift','JWxpp','WEAKNESS_DISPLAY_SMOOTHING','createChildSpriteContainer','height','applyWeaknessAnalyze','noGGE','_weaknessDisplayUnshiftedElementIcons','SwOIE','Analyze','name','initMembers','wwfoU','61177rRfUEQ','xPfFB','isSceneBattle','isEnemy','_protectionSprite','Spriteset_Battle_update','bitmap','JSON','revealNewWeaknesses','DisplayOffsetY','applyItemUserEffect','dPMyw','BackgroundIcon','BTDuu','createChildrenSprite','WEAKNESS_DISPLAY_SHOWN_ELEMENTS','VisuMZ_1_BattleCore','TocHJ','qYtLJ','members','sVdpd','constructor','max','match','ndSqR','General','isDrain','transferBitmap','_elementID','1sFxMKp','boostAddition','return\x200','format','setPosition','639249bVwHxB','updatePosition','_iconSheet','gPyKa','_battleField','IWzZk','WEAKNESS_DISPLAY_BACKGROUND_ICON','3509dHibsm','5159XiedKJ','vattd','Game_Temp_requestAnimation','getRevealedEnemyWeaknesses','updateLink','_lineHeight','refresh','YcsbU','smooth','addLoadListener','FvALI','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','_iconIndexSprite','_battler','sort','jHONc','initialize','_linkedSprite','IFrCE','Game_BattlerBase_refresh','VisuMZ_4_BreakShields','FMxtV','ARRAYNUM','rpHvU','OFFSET_Y','_backgroundSprite','Game_Action_apply','NUM','93mxYjDF','IconScale','DhILY','AutoIcon','parameters','_scene','AmFxD','contains','setProtected','VisuMZ_3_BoostAction','getWeaknessElements','436847khIeFW','loadSystem','qXkGF','resize','_uiContainer','udreK','width','WEAKNESS_DISPLAY_AUTO_ICONS','ARRAYSTR','isAppeared','RegExp','updateAllWeaknessDisplaySprites','updateChildSprites','_iconIndex','Enemy','DisplayOffsetX','Spriteset_Battle_createLowerLayer','ARRAYSTRUCT','WEAKNESS_DISPLAY_UNKNOWN_ICON','setFrame','addEnemyWeaknessElement','MIDSi','pNtDb','scale','OFFSET_X','ARRAYFUNC','IconSet','refreshAllWeaknessDisplaySprites','exit','_enemies','qPfTT','_customModified','GFivM','Game_Action_applyItemUserEffect','getWeaknessDisplayElementIcon','EVAL','lineHeight','wDUgd','round','children','WeaknessDisplay','JmBXu','WJyoW','Settings','STRUCT','keys','DHECb','PNbzJ','_visibleElements','SmoothIcons','weaknessDisplayTransferBitmap','item','Display','_revealedEnemyWeaknesses','update','weaknessDisplayShownElements','isRecover','boostMultiplier','_childSpriteContainer','lIpap','splice','bind','CkZii','initializeRevealedEnemyWeaknesses','floor','ARRAYEVAL','length','_weaknessDisplayShownElements','description','elementRate','call','CqHAB','YaQUR','addChild','_enemySprites','hZJOg','prototype','BREAK_SHIELDS_MINIMUM_WEAKNESS_RATE','version','opacity','parse','status','iconWidth','WEAKNESS_DISPLAY_ELEMENT_ICONS','FUNC','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','AnalyzeEffect','setRevealed','BattleCore','VisuMZ_1_ElementStatusCore','STR','1641423IjdBWf','setup','_backgroundIndex','UGStc','LwypA','isAlwaysVisible','createLowerLayer','trim','172jCuNYA','filter','elements','map','updateIconFrame','_protectIcon'];const _0x26b580=_0x3a6f;(function(_0x553807,_0x288f08){const _0x4efc03=_0x3a6f;while(!![]){try{const _0x3b94b1=-parseInt(_0x4efc03(0x2a5))*parseInt(_0x4efc03(0x240))+parseInt(_0x4efc03(0x29e))+parseInt(_0x4efc03(0x2cd))+-parseInt(_0x4efc03(0x27c))*-parseInt(_0x4efc03(0x267))+parseInt(_0x4efc03(0x2c2))*parseInt(_0x4efc03(0x2a6))+parseInt(_0x4efc03(0x26c))+-parseInt(_0x4efc03(0x299))*parseInt(_0x4efc03(0x238));if(_0x3b94b1===_0x288f08)break;else _0x553807['push'](_0x553807['shift']());}catch(_0x506b92){_0x553807['push'](_0x553807['shift']());}}}(_0x153f,0xc6763));var label=_0x26b580(0x205),tier=tier||0x0,dependencies=[_0x26b580(0x28c),_0x26b580(0x236)],pluginData=$plugins[_0x26b580(0x241)](function(_0x14e413){const _0x557f0a=_0x26b580;return _0x14e413[_0x557f0a(0x22e)]&&_0x14e413[_0x557f0a(0x221)]['includes']('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0x26b580(0x208)]||{},VisuMZ[_0x26b580(0x268)]=function(_0x224ee3,_0xb9d5d1){const _0x57a6e2=_0x26b580;for(const _0x24dcd8 in _0xb9d5d1){if(_0x57a6e2(0x2b0)==='FvALI'){if(_0x24dcd8[_0x57a6e2(0x293)](/(.*):(.*)/i)){if(_0x57a6e2(0x2b8)!==_0x57a6e2(0x2b8)){function _0x4752e3(){const _0x533a4e=_0x57a6e2;this['_backgroundIndex']=_0xef40c8[_0x533a4e(0x2a4)],this[_0x533a4e(0x2da)]=_0x1e80d2[_0x533a4e(0x1ef)],this[_0x533a4e(0x245)]=0x0;}}else{const _0x3c6f20=String(RegExp['$1']),_0x4535a8=String(RegExp['$2'])['toUpperCase']()[_0x57a6e2(0x23f)]();let _0xb0588a,_0x446255,_0x2ab059;switch(_0x4535a8){case _0x57a6e2(0x2c1):_0xb0588a=_0xb9d5d1[_0x24dcd8]!==''?Number(_0xb9d5d1[_0x24dcd8]):0x0;break;case _0x57a6e2(0x2bc):_0x446255=_0xb9d5d1[_0x24dcd8]!==''?JSON[_0x57a6e2(0x22d)](_0xb9d5d1[_0x24dcd8]):[],_0xb0588a=_0x446255[_0x57a6e2(0x243)](_0x1a0487=>Number(_0x1a0487));break;case _0x57a6e2(0x200):_0xb0588a=_0xb9d5d1[_0x24dcd8]!==''?eval(_0xb9d5d1[_0x24dcd8]):null;break;case _0x57a6e2(0x21e):_0x446255=_0xb9d5d1[_0x24dcd8]!==''?JSON['parse'](_0xb9d5d1[_0x24dcd8]):[],_0xb0588a=_0x446255[_0x57a6e2(0x243)](_0x49e7ef=>eval(_0x49e7ef));break;case _0x57a6e2(0x283):_0xb0588a=_0xb9d5d1[_0x24dcd8]!==''?JSON[_0x57a6e2(0x22d)](_0xb9d5d1[_0x24dcd8]):'';break;case'ARRAYJSON':_0x446255=_0xb9d5d1[_0x24dcd8]!==''?JSON['parse'](_0xb9d5d1[_0x24dcd8]):[],_0xb0588a=_0x446255[_0x57a6e2(0x243)](_0x108162=>JSON[_0x57a6e2(0x22d)](_0x108162));break;case _0x57a6e2(0x231):_0xb0588a=_0xb9d5d1[_0x24dcd8]!==''?new Function(JSON[_0x57a6e2(0x22d)](_0xb9d5d1[_0x24dcd8])):new Function(_0x57a6e2(0x29b));break;case _0x57a6e2(0x1f6):_0x446255=_0xb9d5d1[_0x24dcd8]!==''?JSON[_0x57a6e2(0x22d)](_0xb9d5d1[_0x24dcd8]):[],_0xb0588a=_0x446255[_0x57a6e2(0x243)](_0x4a64fd=>new Function(JSON[_0x57a6e2(0x22d)](_0x4a64fd)));break;case _0x57a6e2(0x237):_0xb0588a=_0xb9d5d1[_0x24dcd8]!==''?String(_0xb9d5d1[_0x24dcd8]):'';break;case _0x57a6e2(0x2d5):_0x446255=_0xb9d5d1[_0x24dcd8]!==''?JSON[_0x57a6e2(0x22d)](_0xb9d5d1[_0x24dcd8]):[],_0xb0588a=_0x446255[_0x57a6e2(0x243)](_0xffdcd1=>String(_0xffdcd1));break;case _0x57a6e2(0x209):_0x2ab059=_0xb9d5d1[_0x24dcd8]!==''?JSON[_0x57a6e2(0x22d)](_0xb9d5d1[_0x24dcd8]):{},_0xb0588a=VisuMZ['ConvertParams']({},_0x2ab059);break;case _0x57a6e2(0x1ee):_0x446255=_0xb9d5d1[_0x24dcd8]!==''?JSON['parse'](_0xb9d5d1[_0x24dcd8]):[],_0xb0588a=_0x446255[_0x57a6e2(0x243)](_0x441dde=>VisuMZ[_0x57a6e2(0x268)]({},JSON[_0x57a6e2(0x22d)](_0x441dde)));break;default:continue;}_0x224ee3[_0x3c6f20]=_0xb0588a;}}}else{function _0x5c9927(){const _0x27cccd=_0x57a6e2;this['_revealedEnemyWeaknesses'][_0x78c7b4][_0x27cccd(0x24d)](_0x204437);}}}return _0x224ee3;},(_0x2676c4=>{const _0x490a98=_0x26b580,_0x2dbc8d=_0x2676c4[_0x490a98(0x279)];for(const _0x267044 of dependencies){if(_0x490a98(0x275)==='FQiJC'){function _0x27f0bc(){const _0x59024d=_0x490a98,_0x4624fa=this[_0x59024d(0x264)]();if(_0x4624fa&&this[_0x59024d(0x22c)]<0xff)this[_0x59024d(0x22c)]+=0x10;else!_0x4624fa&&this[_0x59024d(0x22c)]>0x0&&(this['opacity']-=0x10);}}else{if(!Imported[_0x267044]){alert(_0x490a98(0x232)['format'](_0x2dbc8d,_0x267044)),SceneManager['exit']();break;}}}const _0x1cb1ef=_0x2676c4[_0x490a98(0x221)];if(_0x1cb1ef['match'](/\[Version[ ](.*?)\]/i)){const _0x4c8a0a=Number(RegExp['$1']);if(_0x4c8a0a!==VisuMZ[label][_0x490a98(0x22b)]){if(_0x490a98(0x258)!=='VdXLp')alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x490a98(0x29c)](_0x2dbc8d,_0x4c8a0a)),SceneManager[_0x490a98(0x1f9)]();else{function _0x5bf7d6(){const _0x11e952=_0x490a98;_0x3053c6[_0x11e952(0x284)](_0x12e4c8),_0x23d7ab[_0x11e952(0x24d)](_0x5cdca2['enemyId']());}}}}if(_0x1cb1ef[_0x490a98(0x293)](/\[Tier[ ](\d+)\]/i)){const _0x4f35be=Number(RegExp['$1']);_0x4f35be<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x490a98(0x29c)](_0x2dbc8d,_0x4f35be,tier)),SceneManager['exit']()):tier=Math[_0x490a98(0x292)](_0x4f35be,tier);}VisuMZ[_0x490a98(0x268)](VisuMZ[label][_0x490a98(0x208)],_0x2676c4[_0x490a98(0x2c6)]);})(pluginData),VisuMZ['WeaknessDisplay'][_0x26b580(0x2d7)]={'AnalyzeEffect':/<ANALYZE (?:WEAKNESS|WEAKNESSES): (\d+)>/i},DataManager[_0x26b580(0x28b)]=VisuMZ[_0x26b580(0x205)][_0x26b580(0x208)]['General'][_0x26b580(0x25d)],DataManager['weaknessDisplayShownElements']=function(){const _0x1d9dba=_0x26b580;if(this[_0x1d9dba(0x220)]!==undefined)return this[_0x1d9dba(0x220)];let _0x240191=DataManager['WEAKNESS_DISPLAY_SHOWN_ELEMENTS'];const _0x20cf67=_0x240191[_0x1d9dba(0x21f)]>0x0?_0x240191:[...Array($dataSystem['elements']['length']-0x1)[_0x1d9dba(0x20a)]()]['map'](_0x4f4b3a=>_0x4f4b3a+0x1);return this['_weaknessDisplayShownElements']=_0x20cf67['filter'](_0xe11062=>ImageManager[_0x1d9dba(0x1ff)](_0xe11062)>0x0),this[_0x1d9dba(0x220)];},ImageManager['WEAKNESS_DISPLAY_ELEMENT_ICONS']=VisuMZ[_0x26b580(0x205)][_0x26b580(0x208)]['General'][_0x26b580(0x24b)],ImageManager[_0x26b580(0x2d4)]=VisuMZ[_0x26b580(0x205)][_0x26b580(0x208)][_0x26b580(0x295)][_0x26b580(0x2c5)],ImageManager[_0x26b580(0x2a4)]=VisuMZ[_0x26b580(0x205)][_0x26b580(0x208)][_0x26b580(0x295)][_0x26b580(0x288)],ImageManager[_0x26b580(0x1ef)]=VisuMZ[_0x26b580(0x205)][_0x26b580(0x208)][_0x26b580(0x295)]['UnknownIcon'],ImageManager[_0x26b580(0x271)]=VisuMZ[_0x26b580(0x205)]['Settings'][_0x26b580(0x295)][_0x26b580(0x20e)],ImageManager[_0x26b580(0x1ff)]=function(_0x196333){const _0xba3132=_0x26b580;!this[_0xba3132(0x276)]&&(this['_weaknessDisplayUnshiftedElementIcons']=!![],ImageManager[_0xba3132(0x230)][_0xba3132(0x26f)](0x0));const _0x44e944=$dataSystem['elements'][_0x196333];if(_0x44e944[_0xba3132(0x293)](/\\I\[(\d+)\]/i)){if(_0xba3132(0x24f)!==_0xba3132(0x24f)){function _0x16292f(){return 0x64;}}else return Number(RegExp['$1']);}else{if(ImageManager['WEAKNESS_DISPLAY_ELEMENT_ICONS'][_0x196333])return ImageManager['WEAKNESS_DISPLAY_ELEMENT_ICONS'][_0x196333];else{if(ImageManager[_0xba3132(0x2d4)]){if(_0x44e944['match'](/(?:FIRE|FLAME)/i))return 0x40;else{if(_0x44e944['match'](/(?:ICE|FROST)/i)){if(_0xba3132(0x253)===_0xba3132(0x202)){function _0x218f87(){const _0x15fe30=_0xba3132;_0x19a3f7[_0x15fe30(0x26a)]=!![];}}else return 0x41;}else{if(_0x44e944[_0xba3132(0x293)](/(?:THUNDER|LIGHTNING)/i))return 0x42;else{if(_0x44e944['match'](/(?:WATER|AQUA)/i))return 0x43;else{if(_0x44e944[_0xba3132(0x293)](/(?:EARTH|GROUND)/i))return 0x44;else{if(_0x44e944['match'](/(?:WIND|AIR)/i))return 0x45;else{if(_0x44e944[_0xba3132(0x293)](/(?:HOLY|LIGHT|SACRED)/i))return 0x46;else{if(_0x44e944[_0xba3132(0x293)](/(?:DARK|EVIL)/i)){if('tQWFv'===_0xba3132(0x2a3)){function _0x716d2e(){const _0x1d3e0e=_0xba3132;this[_0x1d3e0e(0x2da)]=_0x3b6cd9[_0x1d3e0e(0x1ff)](this['_elementID']);}}else return 0x47;}else{if(_0x44e944[_0xba3132(0x293)](/(?:HEAL|CURE)/i))return 0x48;else{if(_0x44e944[_0xba3132(0x293)](/(?:PHYS|MELEE)/i))return 0x4d;else{if(_0x44e944[_0xba3132(0x293)](/(?:ENERGY|POWER)/i)){if(_0xba3132(0x27b)==='wJazG'){function _0x40defb(){const _0xe814da=_0xba3132;this[_0xe814da(0x22c)]=0xff,this['x']=_0x127a66['iconWidth']*_0x6dad68;}}else return 0x4e;}else{if(_0x44e944[_0xba3132(0x293)](/(?:MAGIC|MANA)/i))return 0x4f;else{if(_0x44e944['match'](/(?:DAGGER|KNIFE)/i)){if(_0xba3132(0x2a1)!==_0xba3132(0x2a1)){function _0x41242f(){const _0x5eae19=_0xba3132;_0x5e9ef0[_0x5eae19(0x26a)]&&(_0x68d6ff[_0x5eae19(0x26a)]=![],this[_0x5eae19(0x1f8)]());}}else return 0x60;}else{if(_0x44e944[_0xba3132(0x293)](/(?:SWORD|BLADE)/i)){if(_0xba3132(0x2a7)===_0xba3132(0x2a7))return 0x61;else{function _0x3065f6(){const _0x15ef57=_0xba3132;this[_0x15ef57(0x24a)]=new _0x1a20c7();const _0xf3dd7=_0xae4ec2[_0x15ef57(0x2ce)](_0x15ef57(0x1f7));_0xf3dd7['addLoadListener'](this[_0x15ef57(0x20f)][_0x15ef57(0x21a)](this,_0xf3dd7));}}}else{if(_0x44e944['match'](/(?:MACE|MORNING)/i)){if('rmIWr'===_0xba3132(0x2bb)){function _0x4eb415(){const _0x44e49c=_0xba3132;var _0x246f47=_0x26b22a[_0x335234];!_0x39febd[_0x44e49c(0x2c9)](_0x246f47)&&_0x37de4f[_0x44e49c(0x24d)](_0x246f47);}}else return 0x62;}else{if(_0x44e944['match'](/(?:AXE)/i))return 0x63;else{if(_0x44e944[_0xba3132(0x293)](/(?:WHIP)/i)){if('oApud'===_0xba3132(0x20b)){function _0x3f2526(){const _0xf37826=_0xba3132;this[_0xf37826(0x245)]=_0x5d2375[_0xf37826(0x266)];}}else return 0x64;}else{if(_0x44e944[_0xba3132(0x293)](/(?:WAND|STAFF)/i)){if(_0xba3132(0x21b)!=='ESrwy')return 0x65;else{function _0x20f567(){return 0x45;}}}else{if(_0x44e944[_0xba3132(0x293)](/(?:CROSSBOW)/i))return 0x67;else{if(_0x44e944[_0xba3132(0x293)](/(?:BOW)/i))return 0x66;else{if(_0x44e944[_0xba3132(0x293)](/(?:GUN)/i)){if(_0xba3132(0x228)!==_0xba3132(0x225))return 0x68;else{function _0xf2587c(){const _0x38d2c2=_0xba3132;this[_0x38d2c2(0x24a)][_0x38d2c2(0x2d0)](_0x575238['width'],_0x5f5afc['height']),this[_0x38d2c2(0x24a)]['blt'](_0x543bc9,0x0,0x0,_0x455d77['width'],_0x40ee56['height'],0x0,0x0),this[_0x38d2c2(0x24a)][_0x38d2c2(0x2ae)]=_0x484752[_0x38d2c2(0x271)],this['_weaknessDisplayIconSheet'][_0x38d2c2(0x1fc)]=![];}}}else{if(_0x44e944[_0xba3132(0x293)](/(?:CLAW)/i)){if(_0xba3132(0x2b5)!==_0xba3132(0x2b5)){function _0x384fd5(){const _0x266a80=_0xba3132;this['_revealedEnemyWeaknesses']=this[_0x266a80(0x212)]||{};}}else return 0x69;}else{if(_0x44e944[_0xba3132(0x293)](/(?:GLOVE)/i))return 0x6a;else{if(_0x44e944[_0xba3132(0x293)](/(?:SPEAR|POLE)/i))return 0x6b;else{if(_0xba3132(0x2ad)===_0xba3132(0x270)){function _0x2cfe46(){const _0x37b344=_0xba3132;return this[_0x37b344(0x220)];}}else return 0xa0;}}}}}}}}}}}}}}}}}}}}}}}}}else return 0x0;}}},ImageManager['weaknessDisplayIconsheetBitmap']=function(){const _0x544482=_0x26b580;if(!this[_0x544482(0x24a)]){if('dMkpz'==='dMkpz'){this[_0x544482(0x24a)]=new Bitmap();const _0x10c87f=ImageManager[_0x544482(0x2ce)](_0x544482(0x1f7));_0x10c87f[_0x544482(0x2af)](this[_0x544482(0x20f)][_0x544482(0x21a)](this,_0x10c87f));}else{function _0x5c3f4a(){return 0x67;}}}return this['_weaknessDisplayIconSheet'];},ImageManager[_0x26b580(0x20f)]=function(_0xe79824){const _0xd6a0ef=_0x26b580;this[_0xd6a0ef(0x24a)][_0xd6a0ef(0x2d0)](_0xe79824[_0xd6a0ef(0x2d3)],_0xe79824[_0xd6a0ef(0x273)]),this[_0xd6a0ef(0x24a)][_0xd6a0ef(0x250)](_0xe79824,0x0,0x0,_0xe79824[_0xd6a0ef(0x2d3)],_0xe79824['height'],0x0,0x0),this['_weaknessDisplayIconSheet'][_0xd6a0ef(0x2ae)]=ImageManager[_0xd6a0ef(0x271)],this[_0xd6a0ef(0x24a)]['_customModified']=![];},BattleManager[_0x26b580(0x248)]=function(_0x5b590a){const _0x32aa1f=_0x26b580;var _0x2547ad=$gameTroop[_0x32aa1f(0x28f)](),_0x1bb793=[];for(var _0x2f6a4e=0x0;_0x2f6a4e<_0x2547ad[_0x32aa1f(0x21f)];_0x2f6a4e++){var _0x573cc9=_0x2547ad[_0x2f6a4e];!!_0x573cc9&&!_0x1bb793['contains'](_0x573cc9[_0x32aa1f(0x257)]())&&(_0x573cc9[_0x32aa1f(0x284)](_0x5b590a),_0x1bb793[_0x32aa1f(0x24d)](_0x573cc9[_0x32aa1f(0x257)]()));}},VisuMZ[_0x26b580(0x205)][_0x26b580(0x2a8)]=Game_Temp['prototype']['requestAnimation'],Game_Temp[_0x26b580(0x229)]['requestAnimation']=function(_0x4077ac,_0x4d392f,_0x394814=![]){const _0x400fb6=_0x26b580;VisuMZ[_0x400fb6(0x205)][_0x400fb6(0x2a8)][_0x400fb6(0x223)](this,_0x4077ac,_0x4d392f,_0x394814);if(!SceneManager[_0x400fb6(0x27e)]())return;for(const _0x36a974 of _0x4077ac){if(_0x400fb6(0x1fb)===_0x400fb6(0x25f)){function _0x4e506a(){const _0x13ace3=_0x400fb6;if(!_0x4e02c8)return;const _0x3d3a0b=_0x2fe42c[_0x13ace3(0x22f)],_0x3fd035=_0x4becb2['iconHeight'],_0x448bb8=_0x55b57b%0x10*_0x3d3a0b,_0x4d4484=_0x34f107[_0x13ace3(0x21d)](_0x5542ba/0x10)*_0x3fd035;_0x47edd3[_0x13ace3(0x1f0)](_0x448bb8,_0x4d4484,_0x3d3a0b,_0x3fd035);}}else{if(!_0x36a974)continue;if(_0x36a974[_0x400fb6(0x27f)]()){if(_0x400fb6(0x224)!==_0x400fb6(0x224)){function _0x1c3e4d(){return![];}}else _0x36a974[_0x400fb6(0x251)]();}}}},VisuMZ[_0x26b580(0x205)]['Game_System_initialize']=Game_System['prototype'][_0x26b580(0x2b6)],Game_System['prototype'][_0x26b580(0x2b6)]=function(){const _0x43de39=_0x26b580;VisuMZ[_0x43de39(0x205)]['Game_System_initialize'][_0x43de39(0x223)](this),this[_0x43de39(0x21c)]();},Game_System[_0x26b580(0x229)][_0x26b580(0x21c)]=function(){const _0x5e7860=_0x26b580;this[_0x5e7860(0x212)]=this[_0x5e7860(0x212)]||{};},Game_System['prototype'][_0x26b580(0x1f1)]=function(_0x267270,_0x43919b){const _0x3d0742=_0x26b580;if(this[_0x3d0742(0x212)]===undefined){if(_0x3d0742(0x289)===_0x3d0742(0x289))this['initializeRevealedEnemyWeaknesses']();else{function _0x1d718b(){const _0x52adba=_0x3d0742;_0x35adaf[_0x52adba(0x251)]();}}}this['_revealedEnemyWeaknesses'][_0x267270]=this[_0x3d0742(0x212)][_0x267270]||[],!this[_0x3d0742(0x212)][_0x267270][_0x3d0742(0x2c9)](_0x43919b)&&this[_0x3d0742(0x212)][_0x267270][_0x3d0742(0x24d)](_0x43919b),this[_0x3d0742(0x212)][_0x267270][_0x3d0742(0x2b4)](function(_0x58687a,_0xa0dcdc){const _0xf7100e=_0x3d0742;if(_0xf7100e(0x218)===_0xf7100e(0x20c)){function _0x5ba059(){return 0x41;}}else return _0x58687a-_0xa0dcdc;});},Game_System['prototype'][_0x26b580(0x2a9)]=function(_0x231204){const _0x3e9777=_0x26b580;if(this['_revealedEnemyWeaknesses']===undefined){if('EkSDI'===_0x3e9777(0x25e)){function _0x48b568(){const _0x2084eb=_0x3e9777;var _0x3e4c83=_0x422475(_0xc96947['$1']);if(_0x31c56f['VisuMZ_3_BoostAction']&&this[_0x2084eb(0x210)]()[_0x2084eb(0x269)][_0x2084eb(0x293)](_0x4f3c21[_0x2084eb(0x26e)][_0x2084eb(0x2d7)]['BoostAnalyze'])){var _0x49b083=this[_0x2084eb(0x24e)]()[_0x2084eb(0x216)]('Analyze');_0x3e4c83=_0x20f237[_0x2084eb(0x203)](_0x49b083*_0x3e4c83),_0x3e4c83+=this[_0x2084eb(0x24e)]()[_0x2084eb(0x29a)]('Analyze');}_0x14c8cf[_0x2084eb(0x284)](_0x3e4c83);}}else this['initializeRevealedEnemyWeaknesses']();}return this['_revealedEnemyWeaknesses'][_0x231204]=this['_revealedEnemyWeaknesses'][_0x231204]||[],this['_revealedEnemyWeaknesses'][_0x231204];},VisuMZ['WeaknessDisplay'][_0x26b580(0x2c0)]=Game_Action['prototype']['apply'],Game_Action[_0x26b580(0x229)][_0x26b580(0x265)]=function(_0x2af4cb){const _0x3e7ed6=_0x26b580;VisuMZ['WeaknessDisplay'][_0x3e7ed6(0x2c0)][_0x3e7ed6(0x223)](this,_0x2af4cb),_0x2af4cb[_0x3e7ed6(0x251)]();},VisuMZ[_0x26b580(0x205)][_0x26b580(0x24c)]=Game_Action['prototype']['executeDamage'],Game_Action[_0x26b580(0x229)]['executeDamage']=function(_0x165878,_0x50e3ff){const _0x3b61bb=_0x26b580;VisuMZ['WeaknessDisplay'][_0x3b61bb(0x24c)]['call'](this,_0x165878,_0x50e3ff);if(!!_0x165878&&_0x165878[_0x3b61bb(0x27f)]()&&(this['isDamage']()||this[_0x3b61bb(0x215)]()||this[_0x3b61bb(0x296)]())){if(_0x3b61bb(0x2d2)!==_0x3b61bb(0x2d2)){function _0x2728ca(){return 0x69;}}else this[_0x3b61bb(0x1f1)](_0x165878);}},Game_Action[_0x26b580(0x229)][_0x26b580(0x1f1)]=function(_0x2d213f){const _0x4d7600=_0x26b580;for(const _0x532499 of this[_0x4d7600(0x242)]()){if(_0x4d7600(0x27d)==='iehIw'){function _0x66b251(){return 0x44;}}else{if(_0x532499>0x0){if(_0x4d7600(0x2c8)!==_0x4d7600(0x2c8)){function _0x1a5877(){return 0x4d;}}else $gameSystem[_0x4d7600(0x1f1)](_0x2d213f[_0x4d7600(0x257)](),_0x532499);}}}},VisuMZ['WeaknessDisplay'][_0x26b580(0x1fe)]=Game_Action[_0x26b580(0x229)][_0x26b580(0x286)],Game_Action[_0x26b580(0x229)][_0x26b580(0x286)]=function(_0x3d4555){const _0xad005e=_0x26b580;VisuMZ[_0xad005e(0x205)][_0xad005e(0x1fe)][_0xad005e(0x223)](this,_0x3d4555);if(_0x3d4555[_0xad005e(0x27f)]()){if(_0xad005e(0x2cf)===_0xad005e(0x2cf))this[_0xad005e(0x274)](_0x3d4555);else{function _0x4d34be(){const _0xf4002e=_0xad005e;_0x4bb648['addEnemyWeaknessElement'](_0x53949f[_0xf4002e(0x257)](),_0x473c8a);}}}},Game_Action[_0x26b580(0x229)]['applyWeaknessAnalyze']=function(_0x475db9){const _0x1b7c76=_0x26b580,_0x5e2a44=VisuMZ[_0x1b7c76(0x205)][_0x1b7c76(0x2d7)];if(this[_0x1b7c76(0x210)]()[_0x1b7c76(0x269)][_0x1b7c76(0x293)](_0x5e2a44[_0x1b7c76(0x233)])){if(_0x1b7c76(0x277)!==_0x1b7c76(0x263)){var _0x3a39e7=parseInt(RegExp['$1']);if(Imported[_0x1b7c76(0x2cb)]&&this[_0x1b7c76(0x210)]()[_0x1b7c76(0x269)][_0x1b7c76(0x293)](VisuMZ['BoostAction'][_0x1b7c76(0x2d7)]['BoostAnalyze'])){if(_0x1b7c76(0x2c4)!=='DhILY'){function _0x1fef69(){const _0x48cc92=_0x1b7c76;_0x1cd9d0[_0x48cc92(0x229)][_0x48cc92(0x213)][_0x48cc92(0x223)](this),this[_0x48cc92(0x244)](this[_0x48cc92(0x2bf)],this['_backgroundIndex']),this[_0x48cc92(0x244)](this[_0x48cc92(0x2b2)],this[_0x48cc92(0x2da)]),this[_0x48cc92(0x244)](this[_0x48cc92(0x280)],this[_0x48cc92(0x245)]);}}else{var _0x9fa1fd=this[_0x1b7c76(0x24e)]()['boostMultiplier'](_0x1b7c76(0x278));_0x3a39e7=Math['round'](_0x9fa1fd*_0x3a39e7),_0x3a39e7+=this['subject']()[_0x1b7c76(0x29a)](_0x1b7c76(0x278));}}_0x475db9[_0x1b7c76(0x284)](_0x3a39e7);}else{function _0x515b96(){const _0xa8635a=_0x1b7c76;_0x406218[_0xa8635a(0x205)][_0xa8635a(0x24c)][_0xa8635a(0x223)](this,_0x424a53,_0xd5e724),!!_0x214c4a&&_0x494958[_0xa8635a(0x27f)]()&&(this['isDamage']()||this['isRecover']()||this[_0xa8635a(0x296)]())&&this['addEnemyWeaknessElement'](_0x3e13bf);}}}},VisuMZ['WeaknessDisplay'][_0x26b580(0x2b9)]=Game_BattlerBase[_0x26b580(0x229)][_0x26b580(0x2ac)],Game_BattlerBase[_0x26b580(0x229)][_0x26b580(0x2ac)]=function(){const _0x3ea284=_0x26b580;VisuMZ[_0x3ea284(0x205)][_0x3ea284(0x2b9)]['call'](this);if(this[_0x3ea284(0x27f)]()){if('WvKdN'!==_0x3ea284(0x259))$gameTemp['_needRefreshAllEnemyWeaknessWindows']=!![];else{function _0x2104f2(){return 0x63;}}}},Game_Battler[_0x26b580(0x229)][_0x26b580(0x251)]=function(){},Game_Enemy[_0x26b580(0x247)]=VisuMZ[_0x26b580(0x205)][_0x26b580(0x208)][_0x26b580(0x211)]['TempDuration'],Game_Enemy[_0x26b580(0x229)][_0x26b580(0x2cc)]=function(){const _0x37579c=_0x26b580;var _0x137a5f=[];for(const _0x1a80b1 of DataManager['weaknessDisplayShownElements']()){if('pNtDb'===_0x37579c(0x1f3)){const _0x420901=Imported[_0x37579c(0x2ba)]?this[_0x37579c(0x254)](_0x1a80b1):this[_0x37579c(0x222)](_0x1a80b1),_0x222e77=Imported[_0x37579c(0x2ba)]?Game_Action[_0x37579c(0x22a)]:1.05;if(_0x420901>=_0x222e77){if(_0x37579c(0x23c)===_0x37579c(0x290)){function _0x12fd73(){const _0x2536a2=_0x37579c,_0x585138=new _0x510669(_0x23dad7);this[_0x2536a2(0x217)][_0x2536a2(0x226)](_0x585138);}}else _0x137a5f[_0x37579c(0x24d)](_0x1a80b1);}}else{function _0x21fe3e(){const _0x563a95=_0x37579c;_0x288775(_0x563a95(0x2b1)['format'](_0x2fae44,_0x2c2276)),_0x554946[_0x563a95(0x1f9)]();}}}return _0x137a5f;},Game_Enemy[_0x26b580(0x229)]['getRevealedElements']=function(){const _0x5a6aac=_0x26b580;return $gameSystem['getRevealedEnemyWeaknesses'](this[_0x5a6aac(0x257)]());},Game_Enemy[_0x26b580(0x229)][_0x26b580(0x284)]=function(_0x3c6143){const _0x424716=_0x26b580;var _0x10dfe7=this[_0x424716(0x2cc)](),_0x155fb3=$gameSystem[_0x424716(0x2a9)](this[_0x424716(0x257)]()),_0x244609=[];for(var _0x1a423d=0x0;_0x1a423d<_0x10dfe7['length'];_0x1a423d++){var _0x4839a6=_0x10dfe7[_0x1a423d];!_0x155fb3[_0x424716(0x2c9)](_0x4839a6)&&_0x244609[_0x424716(0x24d)](_0x4839a6);}while(_0x3c6143>0x0){if(_0x424716(0x1f2)==='hlHBE'){function _0x14711f(){return 0x43;}}else{if(_0x244609[_0x424716(0x21f)]<=0x0)break;_0x3c6143-=0x1;var _0x2352a2=Math[_0x424716(0x21d)](Math['random']()*_0x244609[_0x424716(0x21f)]),_0x550ed9=_0x244609[_0x2352a2];$gameSystem[_0x424716(0x1f1)](this[_0x424716(0x257)](),_0x550ed9),_0x244609[_0x424716(0x219)](_0x2352a2,0x1);}}this[_0x424716(0x251)](),$gameTemp[_0x424716(0x26a)]=!![];},Game_Enemy[_0x26b580(0x229)][_0x26b580(0x251)]=function(){const _0x2e33ab=_0x26b580;this[_0x2e33ab(0x260)]=Game_Enemy[_0x2e33ab(0x247)];};function _0x3a6f(_0x6bdee7,_0xfc9b4){_0x6bdee7=_0x6bdee7-0x1ee;let _0x153f5c=_0x153f[_0x6bdee7];return _0x153f5c;}function Sprite_WeaknessContainer(){const _0x36f6da=_0x26b580;this[_0x36f6da(0x2b6)](...arguments);}Sprite_WeaknessContainer[_0x26b580(0x229)]=Object[_0x26b580(0x249)](Sprite[_0x26b580(0x229)]),Sprite_WeaknessContainer[_0x26b580(0x229)][_0x26b580(0x291)]=Sprite_WeaknessContainer,Sprite_WeaknessContainer['SCALE_RATE']=VisuMZ[_0x26b580(0x205)][_0x26b580(0x208)][_0x26b580(0x211)][_0x26b580(0x2c3)],Sprite_WeaknessContainer[_0x26b580(0x256)]=VisuMZ['WeaknessDisplay'][_0x26b580(0x208)][_0x26b580(0x211)]['AlwaysVisible'],Sprite_WeaknessContainer['TEMP_SELECT_ONLY']=VisuMZ[_0x26b580(0x205)][_0x26b580(0x208)]['Display']['TempSelect'],Sprite_WeaknessContainer[_0x26b580(0x1f5)]=VisuMZ['WeaknessDisplay'][_0x26b580(0x208)][_0x26b580(0x211)][_0x26b580(0x2dc)],Sprite_WeaknessContainer['OFFSET_Y']=VisuMZ[_0x26b580(0x205)]['Settings'][_0x26b580(0x211)][_0x26b580(0x285)],Sprite_WeaknessContainer['prototype'][_0x26b580(0x2b6)]=function(){const _0x30f7ed=_0x26b580;Sprite[_0x30f7ed(0x229)]['initialize'][_0x30f7ed(0x223)](this),this['initMembers'](),this[_0x30f7ed(0x272)]();},Sprite_WeaknessContainer['prototype'][_0x26b580(0x27a)]=function(){const _0x101039=_0x26b580;this[_0x101039(0x22c)]=0x0,this[_0x101039(0x2b7)]=null,this['_battler']=null,this['scale']['x']=this[_0x101039(0x1f4)]['y']=Sprite_WeaknessContainer['SCALE_RATE'],this[_0x101039(0x20d)]=0x0;},Sprite_WeaknessContainer[_0x26b580(0x229)][_0x26b580(0x272)]=function(){const _0x4327da=_0x26b580;this[_0x4327da(0x217)]=new Sprite(),this[_0x4327da(0x226)](this[_0x4327da(0x217)]);for(const _0x1335f5 of DataManager[_0x4327da(0x214)]()){const _0x412890=new Sprite_WeaknessIcon(_0x1335f5);this[_0x4327da(0x217)][_0x4327da(0x226)](_0x412890);}},Sprite_WeaknessContainer[_0x26b580(0x229)]['linkSprite']=function(_0x2c340d){this['_linkedSprite']=_0x2c340d;},Sprite_WeaknessContainer[_0x26b580(0x229)][_0x26b580(0x239)]=function(_0xdd7af1){const _0xb6aa42=_0x26b580;this[_0xb6aa42(0x2b3)]=_0xdd7af1,this['updateChildSprites']();},Sprite_WeaknessContainer['prototype']['update']=function(){const _0x8c8763=_0x26b580;Sprite[_0x8c8763(0x229)][_0x8c8763(0x213)][_0x8c8763(0x223)](this),this[_0x8c8763(0x2aa)](),this['updatePosition'](),this[_0x8c8763(0x261)]();},Sprite_WeaknessContainer[_0x26b580(0x229)][_0x26b580(0x2aa)]=function(){const _0x4975d8=_0x26b580;if(!this[_0x4975d8(0x2b7)])return;this[_0x4975d8(0x2b3)]!==this[_0x4975d8(0x2b7)][_0x4975d8(0x2b3)]&&this[_0x4975d8(0x239)](this['_linkedSprite'][_0x4975d8(0x2b3)]);},Sprite_WeaknessContainer[_0x26b580(0x229)][_0x26b580(0x29f)]=function(){const _0x1cfe26=_0x26b580;if(!this[_0x1cfe26(0x2b7)])return;this[_0x1cfe26(0x2ab)]=this[_0x1cfe26(0x2ab)]||Window_Base[_0x1cfe26(0x229)][_0x1cfe26(0x201)](),this['x']=this['_linkedSprite']['_baseX'],this['y']=this[_0x1cfe26(0x2b7)]['_baseY']+this[_0x1cfe26(0x2ab)]*0.5,this['x']+=Sprite_WeaknessContainer[_0x1cfe26(0x1f5)]||0x0,this['y']+=Sprite_WeaknessContainer[_0x1cfe26(0x2be)]||0x0;const _0x157fea=this[_0x1cfe26(0x20d)]*ImageManager[_0x1cfe26(0x22f)];this[_0x1cfe26(0x217)]['x']=Math[_0x1cfe26(0x203)](-_0x157fea/0x2);},Sprite_WeaknessContainer[_0x26b580(0x229)]['updateChildSprites']=function(){const _0x40b0dd=_0x26b580;if(this[_0x40b0dd(0x2b3)]&&this[_0x40b0dd(0x217)]){const _0x1d1af5=this[_0x40b0dd(0x2b3)][_0x40b0dd(0x2cc)](),_0x31f836=this[_0x40b0dd(0x2b3)]['getRevealedElements'](),_0x1a0615=Imported['VisuMZ_4_BreakShields']?this[_0x40b0dd(0x2b3)][_0x40b0dd(0x26b)]():[];this[_0x40b0dd(0x20d)]=0x0;let _0x455571=0x0;for(const _0x57c091 of DataManager[_0x40b0dd(0x214)]()){const _0x4f588e=this[_0x40b0dd(0x217)][_0x40b0dd(0x204)][_0x455571];_0x455571++,_0x1d1af5[_0x40b0dd(0x252)](_0x57c091)?(_0x4f588e['setPosition'](this[_0x40b0dd(0x20d)]),_0x4f588e['setRevealed'](_0x31f836[_0x40b0dd(0x252)](_0x57c091)),_0x4f588e[_0x40b0dd(0x2ca)](_0x1a0615[_0x40b0dd(0x252)](_0x57c091)),this[_0x40b0dd(0x20d)]++):_0x4f588e[_0x40b0dd(0x29d)](-0x1);}}else{if(_0x40b0dd(0x207)==='DJEfl'){function _0x2d59f1(){const _0x404508=_0x40b0dd;this[_0x404508(0x276)]=!![],_0x24cd46[_0x404508(0x230)][_0x404508(0x26f)](0x0);}}else this[_0x40b0dd(0x22c)]=0x0;}},Sprite_WeaknessContainer[_0x26b580(0x229)][_0x26b580(0x261)]=function(){const _0x18bfd2=_0x26b580,_0x2bf987=this[_0x18bfd2(0x264)]();if(_0x2bf987&&this[_0x18bfd2(0x22c)]<0xff){if(_0x18bfd2(0x1fd)==='BqGKy'){function _0xde7a87(){const _0x3f7030=_0x18bfd2;var _0x4d2f36=this['subject']()[_0x3f7030(0x216)]('Analyze');_0x409604=_0x53768e[_0x3f7030(0x203)](_0x4d2f36*_0x3a93bb),_0xef3f22+=this['subject']()[_0x3f7030(0x29a)](_0x3f7030(0x278));}}else this[_0x18bfd2(0x22c)]+=0x10;}else!_0x2bf987&&this[_0x18bfd2(0x22c)]>0x0&&(this[_0x18bfd2(0x22c)]-=0x10);},Sprite_WeaknessContainer[_0x26b580(0x229)][_0x26b580(0x264)]=function(){const _0x462f79=_0x26b580;if(!this[_0x462f79(0x2b3)]){if(_0x462f79(0x23b)===_0x462f79(0x2bd)){function _0x2b7afd(){const _0x499488=_0x462f79;return _0x143fc8[_0x499488(0x2c7)]['_enemyWindow']&&_0x50374b['_scene'][_0x499488(0x25c)][_0x499488(0x255)]&&_0x405945[_0x499488(0x2c7)]['_enemyWindow'][_0x499488(0x1fa)][_0x499488(0x252)](this[_0x499488(0x2b3)]);}}else return![];}else{if(this['_battler']['isDead']())return![];else{if(!this[_0x462f79(0x2b3)][_0x462f79(0x2d6)]())return![];else{if(this['isAlwaysVisible']()){if(_0x462f79(0x206)===_0x462f79(0x206))return!![];else{function _0x3a6c57(){return 0x60;}}}else{if(this[_0x462f79(0x2b3)]['_showWeaknessDisplayDuration'])return this[_0x462f79(0x2b3)][_0x462f79(0x260)]--,!![];else{if(this[_0x462f79(0x25b)]())return!![];else{if(this['opacity']>0x0)return![];}}}}}}},Sprite_WeaknessContainer[_0x26b580(0x229)][_0x26b580(0x23d)]=function(){const _0x1f8921=_0x26b580;return Sprite_WeaknessContainer[_0x1f8921(0x256)];},Sprite_WeaknessContainer['prototype'][_0x26b580(0x25b)]=function(){const _0x49760b=_0x26b580;if(VisuMZ[_0x49760b(0x235)][_0x49760b(0x208)][_0x49760b(0x2db)][_0x49760b(0x26d)]){if(_0x49760b(0x294)!==_0x49760b(0x28e))return this[_0x49760b(0x2b3)]['isSelected']();else{function _0x3e0e61(){return!![];}}}else return SceneManager[_0x49760b(0x2c7)][_0x49760b(0x25c)]&&SceneManager[_0x49760b(0x2c7)][_0x49760b(0x25c)][_0x49760b(0x255)]&&SceneManager[_0x49760b(0x2c7)][_0x49760b(0x25c)]['_enemies']['includes'](this['_battler']);};function Sprite_WeaknessIcon(){this['initialize'](...arguments);}Sprite_WeaknessIcon[_0x26b580(0x229)]=Object[_0x26b580(0x249)](Sprite['prototype']),Sprite_WeaknessIcon['prototype'][_0x26b580(0x291)]=Sprite_WeaknessIcon,Sprite_WeaknessIcon[_0x26b580(0x229)][_0x26b580(0x2b6)]=function(_0x6bdb04){const _0x248052=_0x26b580;this[_0x248052(0x298)]=_0x6bdb04,Sprite['prototype'][_0x248052(0x2b6)]['call'](this),this[_0x248052(0x27a)](),this[_0x248052(0x28a)]();},Sprite_WeaknessIcon['prototype'][_0x26b580(0x27a)]=function(){const _0x27f7d5=_0x26b580;this[_0x27f7d5(0x23a)]=ImageManager['WEAKNESS_DISPLAY_BACKGROUND_ICON'],this[_0x27f7d5(0x2da)]=ImageManager['WEAKNESS_DISPLAY_UNKNOWN_ICON'],this[_0x27f7d5(0x245)]=0x0;},Sprite_WeaknessIcon[_0x26b580(0x229)]['createChildrenSprite']=function(){const _0x2e7823=_0x26b580;this[_0x2e7823(0x2a0)]=ImageManager['weaknessDisplayIconsheetBitmap'](),this[_0x2e7823(0x2bf)]=new Sprite(),this[_0x2e7823(0x2bf)][_0x2e7823(0x282)]=this['_iconSheet'],this[_0x2e7823(0x226)](this[_0x2e7823(0x2bf)]),this[_0x2e7823(0x2b2)]=new Sprite(),this[_0x2e7823(0x2b2)][_0x2e7823(0x282)]=this[_0x2e7823(0x2a0)],this[_0x2e7823(0x226)](this[_0x2e7823(0x2b2)]),this[_0x2e7823(0x280)]=new Sprite(),this[_0x2e7823(0x280)][_0x2e7823(0x282)]=this[_0x2e7823(0x2a0)],this[_0x2e7823(0x226)](this['_protectionSprite']);},Sprite_WeaknessIcon[_0x26b580(0x229)][_0x26b580(0x297)]=function(_0x40d11b){const _0x2c1bcf=_0x26b580;this[_0x2c1bcf(0x2a0)][_0x2c1bcf(0x2d0)](_0x40d11b[_0x2c1bcf(0x2d3)],_0x40d11b['height']),this[_0x2c1bcf(0x2a0)][_0x2c1bcf(0x250)](_0x40d11b,0x0,0x0,_0x40d11b['width'],_0x40d11b[_0x2c1bcf(0x273)],0x0,0x0);},Sprite_WeaknessIcon['prototype'][_0x26b580(0x213)]=function(){const _0x5976a4=_0x26b580;Sprite[_0x5976a4(0x229)][_0x5976a4(0x213)][_0x5976a4(0x223)](this),this[_0x5976a4(0x244)](this[_0x5976a4(0x2bf)],this[_0x5976a4(0x23a)]),this[_0x5976a4(0x244)](this[_0x5976a4(0x2b2)],this[_0x5976a4(0x2da)]),this[_0x5976a4(0x244)](this['_protectionSprite'],this[_0x5976a4(0x245)]);},Sprite_WeaknessIcon[_0x26b580(0x229)]['updateIconFrame']=function(_0x5206ba,_0x504cbe){const _0x3a0610=_0x26b580;if(!_0x5206ba)return;const _0x919605=ImageManager[_0x3a0610(0x22f)],_0x55e70c=ImageManager[_0x3a0610(0x262)],_0x54d826=_0x504cbe%0x10*_0x919605,_0x350b1b=Math[_0x3a0610(0x21d)](_0x504cbe/0x10)*_0x55e70c;_0x5206ba[_0x3a0610(0x1f0)](_0x54d826,_0x350b1b,_0x919605,_0x55e70c);},Sprite_WeaknessIcon[_0x26b580(0x229)][_0x26b580(0x29d)]=function(_0x49b6a3){const _0x49d36e=_0x26b580;_0x49b6a3<0x0?this['opacity']=0x0:(this['opacity']=0xff,this['x']=ImageManager[_0x49d36e(0x22f)]*_0x49b6a3);},Sprite_WeaknessIcon['prototype'][_0x26b580(0x234)]=function(_0x1b863a){const _0x47c99c=_0x26b580;_0x1b863a?this[_0x47c99c(0x2da)]=ImageManager['getWeaknessDisplayElementIcon'](this[_0x47c99c(0x298)]):this[_0x47c99c(0x2da)]=ImageManager['WEAKNESS_DISPLAY_UNKNOWN_ICON'];},Sprite_WeaknessIcon['prototype'][_0x26b580(0x2ca)]=function(_0x542e5b){const _0x4fb282=_0x26b580;_0x542e5b&&Imported[_0x4fb282(0x2ba)]?this[_0x4fb282(0x245)]=ImageManager[_0x4fb282(0x266)]:this[_0x4fb282(0x245)]=0x0;},VisuMZ[_0x26b580(0x205)][_0x26b580(0x2dd)]=Spriteset_Battle[_0x26b580(0x229)][_0x26b580(0x23e)],Spriteset_Battle[_0x26b580(0x229)][_0x26b580(0x23e)]=function(){const _0xb974b7=_0x26b580;VisuMZ[_0xb974b7(0x205)][_0xb974b7(0x2dd)][_0xb974b7(0x223)](this),this['createWeaknessContainerSprites']();},Spriteset_Battle[_0x26b580(0x229)][_0x26b580(0x246)]=function(){const _0x8fbc82=_0x26b580;this[_0x8fbc82(0x25a)]=new Sprite();this[_0x8fbc82(0x2d1)]?this[_0x8fbc82(0x2d1)]['addChild'](this[_0x8fbc82(0x25a)]):this[_0x8fbc82(0x2a2)]['addChild'](this['_weaknessContainer']);for(const _0x53a1b8 of this[_0x8fbc82(0x227)]){const _0x1a178b=new Sprite_WeaknessContainer();this[_0x8fbc82(0x25a)][_0x8fbc82(0x226)](_0x1a178b),_0x1a178b['linkSprite'](_0x53a1b8);}},VisuMZ[_0x26b580(0x205)]['Spriteset_Battle_update']=Spriteset_Battle[_0x26b580(0x229)][_0x26b580(0x213)],Spriteset_Battle['prototype']['update']=function(){const _0x3c54c9=_0x26b580;VisuMZ[_0x3c54c9(0x205)][_0x3c54c9(0x281)]['call'](this),this[_0x3c54c9(0x2d8)]();},Spriteset_Battle[_0x26b580(0x229)]['updateAllWeaknessDisplaySprites']=function(){const _0x2f9403=_0x26b580;$gameTemp[_0x2f9403(0x26a)]&&($gameTemp[_0x2f9403(0x26a)]=![],this['refreshAllWeaknessDisplaySprites']());},Spriteset_Battle[_0x26b580(0x229)][_0x26b580(0x1f8)]=function(){const _0x45a93e=_0x26b580;for(const _0x151af6 of this[_0x45a93e(0x25a)][_0x45a93e(0x204)]){if(_0x45a93e(0x287)===_0x45a93e(0x28d)){function _0x5b6bc6(){const _0x4784db=_0x45a93e;_0x2ca0c1[_0x4784db(0x24d)](_0x18bf90);}}else{if(!_0x151af6)continue;_0x151af6[_0x45a93e(0x2d9)]();}}};