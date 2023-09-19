//=============================================================================
// VisuStella MZ - New Game +
// VisuMZ_3_NewGamePlus.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_NewGamePlus = true;

var VisuMZ = VisuMZ || {};
VisuMZ.NewGamePlus = VisuMZ.NewGamePlus || {};
VisuMZ.NewGamePlus.version = 1.03;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.03] [NewGamePlus]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/New_Game_Plus_VisuStella_MZ
 * @base VisuMZ_1_SaveCore
 * @orderAfter VisuMZ_1_SaveCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * New Game+ is a great way to provide replay value for your game. It lets the
 * player re-experience the game in a different way with either carried over
 * items, to carried over party members, to carried over skills, switches, and
 * variables even. There exists many options to change how New Game+ will work
 * for your game.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Select which switches, variables, actor data, party data, and system data
 *   is carried over into a New Game+.
 * * Use notetags to prevent specific items, weapons, armors, or actors from
 *   carrying over their data.
 * * Two different ways of starting a New Game+.
 * * One way is by saving a New Game+ save file and loading upon it.
 * * The second way is by immediately using the current game's save data and
 *   starting a New Game+ with it.
 * * Run a dedicated Common Event after a New Game+ has started.
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
 * * VisuMZ_1_SaveCore
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
 * Instructions
 * ============================================================================
 *
 * So how do you start a New Game+? There are two ways to do it:
 * 
 * ---
 * 
 * Method 1: Save File with New Game+
 * 
 * Use the Plugin Command from this plugin for "Save: New Game+" from the map
 * scene. The save menu will open and prompt the player where to make a save
 * file for the New Game+ file to be at.
 * 
 * When the player loads up that file, a new game will start instead with all
 * of the carry over effects listed in the Plugin Parameters.
 * 
 * ---
 * 
 * Method 2: Transition into New Game+
 * 
 * Use the Plugin Command from this plugin for "Transition: New Game+" from the
 * map scene. The game will immediately fade out and start a new game with all
 * of the carry over effects listed in the Plugin Parameters.
 * 
 * This is useful for the games who have decided to make one save file games.
 * 
 * ---
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
 * VisuMZ_2_ClassChangeSystem
 *
 * VisuMZ_2_SkillLearnSystem
 *
 * This plugin allows the functionality of carrying over AP, CP, JP, SP if you
 * so wish. You can change the settings in this plugin's Plugin Parameters.
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
 * === New Game+-Related Notetags ===
 * 
 * ---
 *
 * <No New Game+ Carry Over>
 *
 * - Used for: Actor, Item, Weapon, Armor Notetags
 * - This will prevent the item, weapon, or armor from being carried over to
 *   New Game+. If this is used on an actor, the actor will be in its default
 *   state as if a new game started.
 *
 * ---
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
 * === Save Plugin Commands ===
 * 
 * ---
 *
 * Save: New Game+
 * - Opens up the Save menu for the player to save a New Game+ file.
 * - Only works from map scene.
 *
 * ---
 * 
 * === Transition Plugin Commands ===
 * 
 * ---
 *
 * Transition: New Game+
 * - Transitions the current game directly into a New Game+.
 * - Only works from map scene.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Actor Data Settings
 * ============================================================================
 *
 * This contains actor data that will be carried over when starting a
 * New Game+.
 *
 * ---
 *
 * General
 * 
 *   Copy Actor?:
 *   - Carry over all of each actor's settings when starting a New Game+?
 * 
 *   EXP:
 *   - Carry over each actor's EXP data when starting a New Game+?
 * 
 *   Skills:
 *   - Carry over each actor's skills data when starting a New Game+?
 *
 * ---
 *
 * Compatibility
 * 
 *   Ability Points:
 *   - Carry over each actor's AP when starting a New Game+?
 *   - Requires VisuMZ_2_SkillLearnSystem
 * 
 *   Class Points:
 *   - Carry over each actor's CP when starting a New Game+?
 *   - Requires VisuMZ_2_ClassChangeSystem
 * 
 *   Job Points:
 *   - Carry over each actor's JP when starting a New Game+?
 *   - Requires VisuMZ_2_ClassChangeSystem
 * 
 *   Skill Points:
 *   - Carry over each actor's SP when starting a New Game+?
 *   - Requires VisuMZ_2_SkillLearnSystem
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Party Data Settings
 * ============================================================================
 *
 * This contains party data that will be carried over when starting a
 * New Game+.
 *
 * ---
 *
 * Settings
 * 
 *   Gold:
 *   - Carry over gold data when starting a New Game+?
 * 
 *   Items:
 *   - Carry over item data when starting a New Game+?
 * 
 *   Weapons:
 *   - Carry over weapon data when starting a New Game+?
 * 
 *   Armors:
 *   - Carry over armor data when starting a New Game+?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: System Data Settings
 * ============================================================================
 *
 * This contains system data that will be carried over when starting a
 * New Game+.
 *
 * ---
 *
 * Settings
 * 
 *   Playtime:
 *   - Carry over playtime data when starting a New Game+?
 * 
 *   Save Count:
 *   - Carry over save count data when starting a New Game+?
 * 
 *   Step Count:
 *   - Carry over step count data when starting a New Game+?
 * 
 *   Battle Count:
 *   - Carry over battle count data when starting a New Game+?
 * 
 *   Victory Count:
 *   - Carry over victory count data when starting a New Game+?
 * 
 *   Escape Count:
 *   - Carry over escape count data when starting a New Game+?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Carry Over Switches and Variables
 * ============================================================================
 *
 * When starting a New Game+, usually all of the data found in Switches and
 * Variables will be cleared out to an OFF flag and 0 value respectively. These
 * settings allow you to set exceptions for certain Switches and Variables to
 * retain their data when going into a New Game+.
 *
 * ---
 *
 * Settings
 * 
 *   Switches:
 *   - A list of switches to be carried over when starting a New Game+.
 * 
 *   Variables:
 *   - A list of variables to be carried over when starting a New Game+.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Scene_Save Settings
 * ============================================================================
 *
 * The settings for the Save Menu for New Game+ related entities.
 *
 * ---
 *
 * Settings
 * 
 *   Title Format:
 *   - Title format for a New Game+ file.
 *   - %1 - Save File ID
 * 
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Save New Game+ Help:
 *   - Text to display in the help file when saving for a New Game+ target.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: New Game+ Common Event Settings
 * ============================================================================
 *
 * When a New Game+ occurs, you can set the game to run a Common Event once
 * loaded into the map.
 *
 * ---
 *
 * Settings
 * 
 *   Common Event:
 *   - Select a Common Event to run after starting a New Game+.
 *   - Use 0 for no Common Event.
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
 * Version 1.03: April 2, 2021
 * * Bug Fixes!
 * ** Carrying over variables for a New Game+ should no longer cause crashes
 *    during the transition phase. Fix made by Arisu.
 * 
 * Version 1.02: February 12, 2021
 * * Bug Fixes!
 * ** Carry-Over Variables Plugin Parameter should now display Variables
 *    instead of Switches. Fix made by Irina.
 * ** Save files will no longer corrupt when carrying over uninitialized
 *    actors. Fix made by Irina.
 * 
 * Version 1.01: January 1, 2021
 * * Compatibility Update
 * ** Plugins should be more compatible with one another.
 *
 * Version 1.00: January 20, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SaveNewGamePlus
 * @text Save: New Game+
 * @desc Opens up the Save menu for the player to save a New Game+ file.
 * Only works from map scene.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command TransitionNewGamePlus
 * @text Transition: New Game+
 * @desc Transitions the current game directly into a New Game+.
 * Only works from map scene.
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
 * @param NewGamePlus
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param CarryOver
 * @text Carry Over
 *
 * @param Actor:struct
 * @text Actor Data
 * @parent CarryOver
 * @type struct<Actor>
 * @desc This contains actor data that will be carried over when starting a New Game+.
 * @default {"General":"","CopyActor:eval":"true","EXP:eval":"true","Skills:eval":"true","Compatibility":"","AbilityPoints:eval":"true","ClassPoints:eval":"true","JobPoints:eval":"true","SkillPoints:eval":"true"}
 *
 * @param Party:struct
 * @text Party Data
 * @parent CarryOver
 * @type struct<Party>
 * @desc This contains party data that will be carried over when starting a New Game+.
 * @default {"Gold:eval":"true","Items:eval":"true","Weapons:eval":"true","Armors:eval":"true"}
 *
 * @param System:struct
 * @text System Data
 * @parent CarryOver
 * @type struct<System>
 * @desc This contains system data that will be carried over when starting a New Game+.
 * @default {"Playtime:eval":"true","SaveCount:eval":"true","StepCount:eval":"true","BattleCount:eval":"true","VictoryCount:eval":"true","EscapeCount:eval":"true"}
 * 
 * @param Switches:arraynum
 * @text Switches
 * @parent CarryOver
 * @type switch[]
 * @desc A list of switches to be carried over when starting a New Game+.
 * @default []
 * 
 * @param Variables:arraynum
 * @text Variables
 * @parent CarryOver
 * @type variable[]
 * @desc A list of variables to be carried over when starting a New Game+.
 * @default []
 *
 * @param SceneSave:struct
 * @text Scene_Save
 * @type struct<SceneSave>
 * @desc The settings for the Save Menu for New Game+ related entities.
 * @default {"TitleFmt:str":"File %1: NEW GAME+","TextColor:str":"6","SaveNewGamePlusHelp:str":"Which file would you like to save New Game+ to?"}
 * 
 * @param CommonEvent:num
 * @text New Game+ Common Event
 * @type common_event
 * @desc Select a Common Event to run after starting a New Game+.
 * Use 0 for no Common Event.
 * @default 0
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
 * Actor Data Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Actor:
 *
 * @param General
 *
 * @param CopyActor:eval
 * @text Copy Actor?
 * @parent General
 * @type boolean
 * @on Carry Over
 * @off Ignore
 * @desc Carry over all of each actor's settings when starting a New Game+?
 * @default true
 *
 * @param EXP:eval
 * @text EXP
 * @parent General
 * @type boolean
 * @on Carry Over
 * @off Ignore
 * @desc Carry over each actor's EXP data when starting a New Game+?
 * @default true
 *
 * @param Skills:eval
 * @text Skills
 * @parent General
 * @type boolean
 * @on Carry Over
 * @off Ignore
 * @desc Carry over each actor's skills data when starting a New Game+?
 * @default true
 * 
 * @param Compatibility
 *
 * @param AbilityPoints:eval
 * @text Ability Points
 * @parent Compatibility
 * @type boolean
 * @on Carry Over
 * @off Ignore
 * @desc Carry over each actor's AP when starting a New Game+?
 * Requires VisuMZ_2_SkillLearnSystem
 * @default true
 *
 * @param ClassPoints:eval
 * @text Class Points
 * @parent Compatibility
 * @type boolean
 * @on Carry Over
 * @off Ignore
 * @desc Carry over each actor's CP when starting a New Game+?
 * Requires VisuMZ_2_ClassChangeSystem
 * @default true
 *
 * @param JobPoints:eval
 * @text Job Points
 * @parent Compatibility
 * @type boolean
 * @on Carry Over
 * @off Ignore
 * @desc Carry over each actor's JP when starting a New Game+?
 * Requires VisuMZ_2_ClassChangeSystem
 * @default true
 *
 * @param SkillPoints:eval
 * @text Skill Points
 * @parent Compatibility
 * @type boolean
 * @on Carry Over
 * @off Ignore
 * @desc Carry over each actor's SP when starting a New Game+?
 * Requires VisuMZ_2_SkillLearnSystem
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Party Data Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Party:
 *
 * @param Gold:eval
 * @text Gold
 * @type boolean
 * @on Carry Over
 * @off Ignore
 * @desc Carry over gold data when starting a New Game+?
 * @default true
 *
 * @param Items:eval
 * @text Items
 * @type boolean
 * @on Carry Over
 * @off Ignore
 * @desc Carry over item data when starting a New Game+?
 * @default true
 *
 * @param Weapons:eval
 * @text Weapons
 * @type boolean
 * @on Carry Over
 * @off Ignore
 * @desc Carry over weapon data when starting a New Game+?
 * @default true
 *
 * @param Armors:eval
 * @text Armors
 * @type boolean
 * @on Carry Over
 * @off Ignore
 * @desc Carry over armor data when starting a New Game+?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * System Data Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~System:
 *
 * @param Playtime:eval
 * @text Playtime
 * @type boolean
 * @on Carry Over
 * @off Ignore
 * @desc Carry over playtime data when starting a New Game+?
 * @default true
 *
 * @param SaveCount:eval
 * @text Save Count
 * @type boolean
 * @on Carry Over
 * @off Ignore
 * @desc Carry over save count data when starting a New Game+?
 * @default true
 *
 * @param StepCount:eval
 * @text Step Count
 * @type boolean
 * @on Carry Over
 * @off Ignore
 * @desc Carry over step count data when starting a New Game+?
 * @default true
 *
 * @param BattleCount:eval
 * @text Battle Count
 * @type boolean
 * @on Carry Over
 * @off Ignore
 * @desc Carry over battle count data when starting a New Game+?
 * @default true
 *
 * @param VictoryCount:eval
 * @text Victory Count
 * @type boolean
 * @on Carry Over
 * @off Ignore
 * @desc Carry over victory count data when starting a New Game+?
 * @default true
 *
 * @param EscapeCount:eval
 * @text Escape Count
 * @type boolean
 * @on Carry Over
 * @off Ignore
 * @desc Carry over escape count data when starting a New Game+?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * SceneSave Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SceneSave:
 *
 * @param TitleFmt:str
 * @text Title Format
 * @parent NewGamePlus
 * @desc Title format for a New Game+ file.
 * %1 - Save File ID
 * @default File %1: NEW GAME+
 * 
 * @param TextColor:str
 * @text Text Color
 * @parent NewGamePlus
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 6
 *
 * @param SaveNewGamePlusHelp:str
 * @text Save New Game+ Help
 * @parent NewGamePlus
 * @desc Text to display in the help file when saving for a New Game+ target.
 * @default Which file would you like to save New Game+ to?
 *
 */
//=============================================================================

const _0x12e7=['_framesOnSave','classId','SceneSave','ARRAYSTR','DataManager_makeSavefileInfo','Skills','currentExp','initAbilityPoints','initialLevel','trim','newGamePlus','actor','status','width','ARRAYJSON','currentLevelExp','push','TextColor','_saveCount','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','fadeOutAll','prepareNewGamePlusData','carryOverNewGamePlusSystemData','levelUp','_classPoints','Scene_Load_onLoadSuccess','clearEquipments','initSkillPoints','_armors','setNewGamePlusLoaded','startNewGamePlus','itemRectWithPadding','_listWindow','#%1','gold','_ngpData','includes','match','create','initNewGamePlusSettings','ARRAYFUNC','savefileInfo','initSkills','initialize','stepcount','carryOverNewGamePlusActors','setNewGamePlusLoops','SkillPoints','carryOverNewGamePlusSwitches','exit','Items','parse','playLoad','TransitionNewGamePlus','reserveCommonEvent','setValue','_winCount','Variables','newGamePlusTitle','getColor','1pLVdiq','canNewGamePlusCarryOver','EXP','System','ARRAYNUM','return\x200','FUNC','EVAL','fileNewGamePlus','format','getNewGamePlusLoops','Armors','needsSlowFadeOut','victorycount','Switches','parameters','AbilityPoints','_newGamePlusLoaded','TitleFmt','_steps','toUpperCase','newGamePlusAdjustLevel','SaveCount','call','2KGBqcs','note','_scene','CopyActor','makeDeepCopy','974871jMPLka','_items','constructor','actors','ClassPoints','weapons','Settings','STRUCT','carryOverNewGamePlusData','variables','gainStartingJobPoints','equips','loops','SaveNewGamePlus','drawTitle','switches','drawNewGamePlusMarker','textColor','prototype','_level','918957yywXXJ','Party','_weapons','Gold','allItems','328109GfFQGm','_exp','Game_System_initialize','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','1rhPjac','drawText','_skills','1099845Nfuljr','9502OcodIY','refresh','helpWindowText','_data','name','_jobPoints','carryOverNewGamePlusVariables','nextLevelExp','removeNewGamePlusNoCarryOverItems','copyNewGamePlusActorData','newGamePlusRefresh','length','JSON','_escapeCount','map','initEquips','VictoryCount','657722tZuEEM','_newGamePlusLoops','isNewGamePlus','StepCount','items','ARRAYEVAL','helpNewGamePlus','isSceneNewGamePlus','gainStartingSkillPoints','setupNewGame','savefileId','_battleCount','JobPoints','onLoadSuccess','battlecount','version','runNewGamePlusCommonEvent','armors','isSceneMap','registerCommand','gainStartingClassPoints','Scene_Map_needsSlowFadeOut','Actor','max','playtime','start','VisuMZ_2_ClassChangeSystem','isNewGamePlusEnabled','NewGamePlus','_skillPoints','SaveNewGamePlusHelp','ConvertParams','goto','makeSavefileInfo','loseItem','136243syckkb','initJobPoints','_abilityPoints','VisuMZ_2_SkillLearnSystem'];const _0x44a6=function(_0x233345,_0x272b36){_0x233345=_0x233345-0x103;let _0x12e76b=_0x12e7[_0x233345];return _0x12e76b;};const _0x5cc649=_0x44a6;(function(_0x571f72,_0x472ad7){const _0xc0c3b=_0x44a6;while(!![]){try{const _0x2b51ca=-parseInt(_0xc0c3b(0x18d))*-parseInt(_0xc0c3b(0x16f))+parseInt(_0xc0c3b(0x195))+-parseInt(_0xc0c3b(0x194))+-parseInt(_0xc0c3b(0x1a6))+parseInt(_0xc0c3b(0x188))+parseInt(_0xc0c3b(0x157))*-parseInt(_0xc0c3b(0x117))+-parseInt(_0xc0c3b(0x191))*-parseInt(_0xc0c3b(0x174));if(_0x2b51ca===_0x472ad7)break;else _0x571f72['push'](_0x571f72['shift']());}catch(_0x21e074){_0x571f72['push'](_0x571f72['shift']());}}}(_0x12e7,0xa288a));var label=_0x5cc649(0x110),tier=tier||0x0,dependencies=['VisuMZ_1_SaveCore'],pluginData=$plugins['filter'](function(_0x11e228){const _0x39a314=_0x5cc649;return _0x11e228[_0x39a314(0x127)]&&_0x11e228['description'][_0x39a314(0x13f)]('['+label+']');})[0x0];VisuMZ[label][_0x5cc649(0x17a)]=VisuMZ[label][_0x5cc649(0x17a)]||{},VisuMZ['ConvertParams']=function(_0x5432d5,_0x172089){const _0x56c12f=_0x5cc649;for(const _0x136451 in _0x172089){if(_0x136451[_0x56c12f(0x140)](/(.*):(.*)/i)){const _0x386efd=String(RegExp['$1']),_0x26d859=String(RegExp['$2'])[_0x56c12f(0x16b)]()[_0x56c12f(0x124)]();let _0x61179c,_0x5e5037,_0x2f5041;switch(_0x26d859){case'NUM':_0x61179c=_0x172089[_0x136451]!==''?Number(_0x172089[_0x136451]):0x0;break;case _0x56c12f(0x15b):_0x5e5037=_0x172089[_0x136451]!==''?JSON[_0x56c12f(0x14e)](_0x172089[_0x136451]):[],_0x61179c=_0x5e5037[_0x56c12f(0x1a3)](_0x1ade7c=>Number(_0x1ade7c));break;case _0x56c12f(0x15e):_0x61179c=_0x172089[_0x136451]!==''?eval(_0x172089[_0x136451]):null;break;case _0x56c12f(0x1ab):_0x5e5037=_0x172089[_0x136451]!==''?JSON[_0x56c12f(0x14e)](_0x172089[_0x136451]):[],_0x61179c=_0x5e5037[_0x56c12f(0x1a3)](_0x840925=>eval(_0x840925));break;case _0x56c12f(0x1a1):_0x61179c=_0x172089[_0x136451]!==''?JSON['parse'](_0x172089[_0x136451]):'';break;case _0x56c12f(0x129):_0x5e5037=_0x172089[_0x136451]!==''?JSON[_0x56c12f(0x14e)](_0x172089[_0x136451]):[],_0x61179c=_0x5e5037[_0x56c12f(0x1a3)](_0x1d622f=>JSON['parse'](_0x1d622f));break;case _0x56c12f(0x15d):_0x61179c=_0x172089[_0x136451]!==''?new Function(JSON['parse'](_0x172089[_0x136451])):new Function(_0x56c12f(0x15c));break;case _0x56c12f(0x143):_0x5e5037=_0x172089[_0x136451]!==''?JSON[_0x56c12f(0x14e)](_0x172089[_0x136451]):[],_0x61179c=_0x5e5037[_0x56c12f(0x1a3)](_0xb86698=>new Function(JSON[_0x56c12f(0x14e)](_0xb86698)));break;case'STR':_0x61179c=_0x172089[_0x136451]!==''?String(_0x172089[_0x136451]):'';break;case _0x56c12f(0x11e):_0x5e5037=_0x172089[_0x136451]!==''?JSON[_0x56c12f(0x14e)](_0x172089[_0x136451]):[],_0x61179c=_0x5e5037[_0x56c12f(0x1a3)](_0x58525d=>String(_0x58525d));break;case _0x56c12f(0x17b):_0x2f5041=_0x172089[_0x136451]!==''?JSON[_0x56c12f(0x14e)](_0x172089[_0x136451]):{},_0x61179c=VisuMZ[_0x56c12f(0x113)]({},_0x2f5041);break;case'ARRAYSTRUCT':_0x5e5037=_0x172089[_0x136451]!==''?JSON[_0x56c12f(0x14e)](_0x172089[_0x136451]):[],_0x61179c=_0x5e5037[_0x56c12f(0x1a3)](_0x2d84db=>VisuMZ[_0x56c12f(0x113)]({},JSON[_0x56c12f(0x14e)](_0x2d84db)));break;default:continue;}_0x5432d5[_0x386efd]=_0x61179c;}}return _0x5432d5;},(_0x433c43=>{const _0x795f5d=_0x5cc649,_0x22a3e7=_0x433c43[_0x795f5d(0x199)];for(const _0x394736 of dependencies){if(!Imported[_0x394736]){alert(_0x795f5d(0x190)['format'](_0x22a3e7,_0x394736)),SceneManager[_0x795f5d(0x14c)]();break;}}const _0x4bbe17=_0x433c43['description'];if(_0x4bbe17['match'](/\[Version[ ](.*?)\]/i)){const _0x2a8098=Number(RegExp['$1']);_0x2a8098!==VisuMZ[label][_0x795f5d(0x103)]&&(alert(_0x795f5d(0x12e)[_0x795f5d(0x160)](_0x22a3e7,_0x2a8098)),SceneManager[_0x795f5d(0x14c)]());}if(_0x4bbe17['match'](/\[Tier[ ](\d+)\]/i)){const _0x2e20da=Number(RegExp['$1']);_0x2e20da<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x795f5d(0x160)](_0x22a3e7,_0x2e20da,tier)),SceneManager[_0x795f5d(0x14c)]()):tier=Math[_0x795f5d(0x10b)](_0x2e20da,tier);}VisuMZ['ConvertParams'](VisuMZ[label][_0x795f5d(0x17a)],_0x433c43[_0x795f5d(0x166)]);})(pluginData),PluginManager[_0x5cc649(0x107)](pluginData[_0x5cc649(0x199)],_0x5cc649(0x181),_0x1e2cc4=>{const _0x174150=_0x5cc649;if(!SceneManager[_0x174150(0x106)]())return;SceneManager[_0x174150(0x12b)](Scene_SaveNewGamePlus);}),PluginManager[_0x5cc649(0x107)](pluginData[_0x5cc649(0x199)],_0x5cc649(0x150),_0x1d6e18=>{const _0x339580=_0x5cc649;if(!SceneManager['isSceneMap']())return;SceneManager[_0x339580(0x12b)](Scene_NewGamePlusTransition);}),DataManager[_0x5cc649(0x158)]=function(_0x37c18e){const _0x3cea74=_0x5cc649;if(!_0x37c18e)return![];if(_0x37c18e[_0x3cea74(0x170)][_0x3cea74(0x140)](/<NO NEW GAME\+ CARRY OVER>/i))return![];return!![];},VisuMZ[_0x5cc649(0x110)][_0x5cc649(0x11f)]=DataManager['makeSavefileInfo'],DataManager[_0x5cc649(0x115)]=function(){const _0x7cee73=_0x5cc649;var _0x55515f=VisuMZ[_0x7cee73(0x110)]['DataManager_makeSavefileInfo'][_0x7cee73(0x16e)](this);return _0x55515f[_0x7cee73(0x125)]=$gameSystem[_0x7cee73(0x10f)](),_0x55515f;},DataManager[_0x5cc649(0x139)]=function(){const _0x629475=_0x5cc649;this[_0x629475(0x130)](),this[_0x629475(0x1af)](),this[_0x629475(0x17c)](),this['runNewGamePlusCommonEvent']();},DataManager[_0x5cc649(0x130)]=function(){const _0x253973=_0x5cc649;var _0xbba416=$gameActors[_0x253973(0x198)][_0x253973(0x1a0)];for(var _0x4ac1bb=0x0;_0x4ac1bb<_0xbba416;++_0x4ac1bb){var _0x431ff8=$gameActors[_0x253973(0x198)][_0x4ac1bb];if(_0x431ff8)_0x431ff8[_0x253973(0x135)]();}this[_0x253973(0x13e)]={'switches':JsonEx[_0x253973(0x173)]($gameSwitches[_0x253973(0x198)]),'variables':JsonEx[_0x253973(0x173)]($gameVariables['_data']),'loops':$gameSystem[_0x253973(0x161)](),'playtime':$gameSystem['_framesOnSave'],'savecount':$gameSystem['saveCount'](),'stepcount':$gameParty['steps'](),'battlecount':$gameSystem[_0x253973(0x1b1)],'victorycount':$gameSystem[_0x253973(0x153)],'escapecount':$gameSystem[_0x253973(0x1a2)],'actors':JsonEx['makeDeepCopy']($gameActors['_data']),'gold':$gameParty['_gold'],'items':JsonEx[_0x253973(0x173)]($gameParty[_0x253973(0x175)]),'weapons':JsonEx['makeDeepCopy']($gameParty[_0x253973(0x18a)]),'armors':JsonEx[_0x253973(0x173)]($gameParty['_armors'])};},DataManager[_0x5cc649(0x17c)]=function(){const _0x53b97a=_0x5cc649;this[_0x53b97a(0x14b)](),this['carryOverNewGamePlusVariables'](),this[_0x53b97a(0x131)](),this[_0x53b97a(0x148)](),this['carryOverNewGamePlusPartyData']();},DataManager['carryOverNewGamePlusSwitches']=function(){const _0x4228bb=_0x5cc649;for(const _0x32c35 of VisuMZ[_0x4228bb(0x110)][_0x4228bb(0x17a)][_0x4228bb(0x165)]){if(_0x32c35<=0x0)continue;$gameSwitches['setValue'](_0x32c35,this[_0x4228bb(0x13e)][_0x4228bb(0x183)][_0x32c35]);}},DataManager[_0x5cc649(0x19b)]=function(){const _0x3c429d=_0x5cc649;for(const _0x6be0ce of VisuMZ[_0x3c429d(0x110)]['Settings'][_0x3c429d(0x154)]){if(_0x6be0ce<=0x0)continue;$gameVariables[_0x3c429d(0x152)](_0x6be0ce,this[_0x3c429d(0x13e)][_0x3c429d(0x17d)][_0x6be0ce]);}},DataManager[_0x5cc649(0x131)]=function(){const _0xb0cab6=_0x5cc649,_0x525691=VisuMZ[_0xb0cab6(0x110)]['Settings'][_0xb0cab6(0x15a)];$gameSystem[_0xb0cab6(0x149)](this['_ngpData'][_0xb0cab6(0x180)]+0x1),$gameSystem['setNewGamePlusLoaded'](!![]),_0x525691['Playtime']&&($gameSystem[_0xb0cab6(0x11b)]=this[_0xb0cab6(0x13e)][_0xb0cab6(0x10c)],Graphics['frameCount']=this[_0xb0cab6(0x13e)]['playtime']),_0x525691[_0xb0cab6(0x16d)]&&($gameSystem[_0xb0cab6(0x12d)]=this['_ngpData']['savecount']),_0x525691[_0xb0cab6(0x1a9)]&&($gameParty[_0xb0cab6(0x16a)]=this[_0xb0cab6(0x13e)][_0xb0cab6(0x147)]),_0x525691['BattleCount']&&($gameSystem[_0xb0cab6(0x1b1)]=this[_0xb0cab6(0x13e)][_0xb0cab6(0x1b4)]),_0x525691[_0xb0cab6(0x1a5)]&&($gameSystem['_winCount']=this[_0xb0cab6(0x13e)][_0xb0cab6(0x164)]),_0x525691['EscapeCount']&&($gameSystem[_0xb0cab6(0x1a2)]=this[_0xb0cab6(0x13e)]['escapecount']);},DataManager['carryOverNewGamePlusActors']=function(){const _0x200298=_0x5cc649;var _0x4abb2c=$gameActors['_data']['length'];for(var _0x5cecbb=0x0;_0x5cecbb<_0x4abb2c;++_0x5cecbb){var _0x4d1e0c=$gameActors[_0x200298(0x126)](_0x5cecbb);_0x4d1e0c&&(_0x4d1e0c=this[_0x200298(0x19e)](_0x4d1e0c,_0x5cecbb),_0x4d1e0c[_0x200298(0x19f)]());}},DataManager[_0x5cc649(0x19e)]=function(_0x2fb830,_0x45e9dd){const _0x5f15f1=_0x5cc649;if(!DataManager['canNewGamePlusCarryOver'](_0x2fb830[_0x5f15f1(0x126)]()))return _0x2fb830;if(!this[_0x5f15f1(0x13e)][_0x5f15f1(0x177)][_0x45e9dd])return _0x2fb830;const _0x5c96c1=VisuMZ[_0x5f15f1(0x110)]['Settings'][_0x5f15f1(0x10a)];return _0x5c96c1[_0x5f15f1(0x172)]&&this[_0x5f15f1(0x13e)]['actors'][_0x45e9dd]&&($gameActors['_data'][_0x45e9dd]=JsonEx[_0x5f15f1(0x173)](this[_0x5f15f1(0x13e)][_0x5f15f1(0x177)][_0x45e9dd]),_0x2fb830=$gameActors['_data'][_0x45e9dd]),_0x5c96c1[_0x5f15f1(0x159)]&&this[_0x5f15f1(0x13e)][_0x5f15f1(0x177)][_0x45e9dd][_0x5f15f1(0x18e)]?(_0x2fb830[_0x5f15f1(0x18e)]=JsonEx[_0x5f15f1(0x173)](this['_ngpData'][_0x5f15f1(0x177)][_0x45e9dd][_0x5f15f1(0x18e)]),_0x2fb830[_0x5f15f1(0x16c)]()):(_0x2fb830[_0x5f15f1(0x187)]=_0x2fb830[_0x5f15f1(0x126)]()[_0x5f15f1(0x123)],_0x2fb830[_0x5f15f1(0x18e)]={},_0x2fb830['initExp']()),_0x5c96c1[_0x5f15f1(0x120)]&&this['_ngpData'][_0x5f15f1(0x177)][_0x45e9dd][_0x5f15f1(0x193)]?_0x2fb830['_skills']=JsonEx[_0x5f15f1(0x173)](this[_0x5f15f1(0x13e)][_0x5f15f1(0x177)][_0x45e9dd][_0x5f15f1(0x193)]):_0x2fb830[_0x5f15f1(0x145)](),Imported[_0x5f15f1(0x11a)]&&(_0x5c96c1[_0x5f15f1(0x167)]&&this[_0x5f15f1(0x13e)][_0x5f15f1(0x177)][_0x45e9dd]['_abilityPoints']?_0x2fb830[_0x5f15f1(0x119)]=JsonEx[_0x5f15f1(0x173)](this['_ngpData'][_0x5f15f1(0x177)][_0x45e9dd][_0x5f15f1(0x119)]):(_0x2fb830[_0x5f15f1(0x122)](),_0x2fb830['gainStartingAbilityPoints']()),_0x5c96c1[_0x5f15f1(0x14a)]&&this['_ngpData'][_0x5f15f1(0x177)][_0x45e9dd][_0x5f15f1(0x111)]?_0x2fb830[_0x5f15f1(0x111)]=JsonEx['makeDeepCopy'](this[_0x5f15f1(0x13e)][_0x5f15f1(0x177)][_0x45e9dd][_0x5f15f1(0x111)]):(_0x2fb830[_0x5f15f1(0x136)](),_0x2fb830[_0x5f15f1(0x1ae)]())),Imported[_0x5f15f1(0x10e)]&&(_0x5c96c1[_0x5f15f1(0x178)]&&this[_0x5f15f1(0x13e)]['actors'][_0x45e9dd]['_classPoints']?_0x2fb830[_0x5f15f1(0x133)]=JsonEx[_0x5f15f1(0x173)](this[_0x5f15f1(0x13e)]['actors'][_0x45e9dd]['_classPoints']):(_0x2fb830['initClassPoints'](),_0x2fb830[_0x5f15f1(0x108)]()),_0x5c96c1[_0x5f15f1(0x1b2)]&&this[_0x5f15f1(0x13e)][_0x5f15f1(0x177)][_0x45e9dd][_0x5f15f1(0x19a)]?_0x2fb830[_0x5f15f1(0x19a)]=JsonEx[_0x5f15f1(0x173)](this[_0x5f15f1(0x13e)][_0x5f15f1(0x177)][_0x45e9dd]['_jobPoints']):(_0x2fb830[_0x5f15f1(0x118)](),_0x2fb830[_0x5f15f1(0x17e)]())),_0x2fb830;},DataManager['carryOverNewGamePlusPartyData']=function(){const _0x3cc87e=_0x5cc649,_0x3a04b7=VisuMZ['NewGamePlus']['Settings'][_0x3cc87e(0x189)];_0x3a04b7[_0x3cc87e(0x18b)]&&($gameParty['_gold']=this[_0x3cc87e(0x13e)][_0x3cc87e(0x13d)]),_0x3a04b7[_0x3cc87e(0x14d)]&&($gameParty['_items']=this['_ngpData'][_0x3cc87e(0x1aa)]),_0x3a04b7['Weapons']&&($gameParty[_0x3cc87e(0x18a)]=this[_0x3cc87e(0x13e)][_0x3cc87e(0x179)]),_0x3a04b7[_0x3cc87e(0x162)]&&($gameParty[_0x3cc87e(0x137)]=this[_0x3cc87e(0x13e)][_0x3cc87e(0x105)]),$gameParty[_0x3cc87e(0x19d)]();},DataManager[_0x5cc649(0x104)]=function(){const _0x14a3a7=_0x5cc649,_0x253cb3=VisuMZ[_0x14a3a7(0x110)]['Settings'],_0x3d348a=_0x253cb3['CommonEvent'];if(_0x3d348a<=0x0)return;$gameTemp[_0x14a3a7(0x151)](_0x3d348a);},TextManager[_0x5cc649(0x15f)]=VisuMZ[_0x5cc649(0x110)][_0x5cc649(0x17a)][_0x5cc649(0x11d)][_0x5cc649(0x169)],TextManager[_0x5cc649(0x1ac)]=VisuMZ[_0x5cc649(0x110)][_0x5cc649(0x17a)][_0x5cc649(0x11d)][_0x5cc649(0x112)],ColorManager[_0x5cc649(0x156)]=function(_0xdd1722){const _0x57e311=_0x5cc649;return _0xdd1722=String(_0xdd1722),_0xdd1722[_0x57e311(0x140)](/#(.*)/i)?_0x57e311(0x13c)['format'](String(RegExp['$1'])):this[_0x57e311(0x185)](Number(_0xdd1722));},ColorManager[_0x5cc649(0x155)]=function(){const _0x31ee98=_0x5cc649;return ColorManager['getColor'](VisuMZ[_0x31ee98(0x110)][_0x31ee98(0x17a)][_0x31ee98(0x11d)][_0x31ee98(0x12c)]);},SceneManager[_0x5cc649(0x106)]=function(){const _0x25f909=_0x5cc649;return this[_0x25f909(0x171)]&&this[_0x25f909(0x171)][_0x25f909(0x176)]===Scene_Map;},SceneManager['isSceneNewGamePlus']=function(){const _0x28cc42=_0x5cc649;return this[_0x28cc42(0x171)]&&this[_0x28cc42(0x171)][_0x28cc42(0x176)]===Scene_SaveNewGamePlus;},VisuMZ['NewGamePlus'][_0x5cc649(0x18f)]=Game_System[_0x5cc649(0x186)]['initialize'],Game_System['prototype'][_0x5cc649(0x146)]=function(){const _0x32df26=_0x5cc649;VisuMZ[_0x32df26(0x110)][_0x32df26(0x18f)][_0x32df26(0x16e)](this),this[_0x32df26(0x142)]();},Game_System[_0x5cc649(0x186)][_0x5cc649(0x142)]=function(){const _0x683ef7=_0x5cc649;this['_newGamePlusEnabled']=![],this['_newGamePlusLoops']=0x0,this[_0x683ef7(0x168)]=![];},Game_System['prototype']['isNewGamePlusEnabled']=function(){const _0x25556a=_0x5cc649;return SceneManager[_0x25556a(0x1ad)]();},Game_System[_0x5cc649(0x186)][_0x5cc649(0x161)]=function(){const _0x4fad4a=_0x5cc649;if(this['_newGamePlusLoops']===undefined)this[_0x4fad4a(0x142)]();return this[_0x4fad4a(0x1a7)];},Game_System[_0x5cc649(0x186)][_0x5cc649(0x149)]=function(_0x1ee76c){const _0x791cf4=_0x5cc649;if(this[_0x791cf4(0x1a7)]===undefined)this['initNewGamePlusSettings']();this[_0x791cf4(0x1a7)]=_0x1ee76c;},Game_System[_0x5cc649(0x186)]['isNewGamePlusLoaded']=function(){const _0x2428d4=_0x5cc649;if(this[_0x2428d4(0x168)]===undefined)this[_0x2428d4(0x142)]();return this['_newGamePlusLoaded'];},Game_System[_0x5cc649(0x186)][_0x5cc649(0x138)]=function(_0x140588){if(this['_newGamePlusLoaded']===undefined)this['initNewGamePlusSettings']();this['_newGamePlusLoaded']=_0x140588;},Game_Actor['prototype']['newGamePlusAdjustLevel']=function(){const _0x5ce0db=_0x5cc649;while(!this['isMaxLevel']()&&this[_0x5ce0db(0x121)]()>=this[_0x5ce0db(0x19c)]()){this[_0x5ce0db(0x132)]();}while(this['currentExp']()<this[_0x5ce0db(0x12a)]()){this['levelDown']();}},Game_Actor['prototype']['newGamePlusRefresh']=function(){const _0x117449=_0x5cc649;var _0x119324=$dataActors[this['_actorId']];this['_classId']=_0x119324[_0x117449(0x11c)],this[_0x117449(0x1a4)](_0x119324[_0x117449(0x17f)]),this[_0x117449(0x196)](),this['recoverAll']();},Game_Party['prototype'][_0x5cc649(0x19d)]=function(){const _0x4686d5=_0x5cc649;var _0x4f7718=$gameParty[_0x4686d5(0x18c)](),_0x23e447=_0x4f7718[_0x4686d5(0x1a0)];for(var _0x21b9cd=0x0;_0x21b9cd<_0x23e447;++_0x21b9cd){var _0x1d7797=_0x4f7718[_0x21b9cd];if(!_0x1d7797)continue;if(DataManager[_0x4686d5(0x158)](_0x1d7797))continue;var _0x14b0bc=$gameParty['numItems'](_0x1d7797);$gameParty[_0x4686d5(0x116)](_0x1d7797,_0x14b0bc);}},VisuMZ[_0x5cc649(0x110)]['Scene_Map_needsSlowFadeOut']=Scene_Map[_0x5cc649(0x186)]['needsSlowFadeOut'],Scene_Map[_0x5cc649(0x186)][_0x5cc649(0x163)]=function(){const _0xdcbdb=_0x5cc649;if(SceneManager['isNextScene'](Scene_NewGamePlusTransition))return!![];return VisuMZ[_0xdcbdb(0x110)][_0xdcbdb(0x109)][_0xdcbdb(0x16e)](this);},VisuMZ[_0x5cc649(0x110)][_0x5cc649(0x134)]=Scene_Load[_0x5cc649(0x186)][_0x5cc649(0x1b3)],Scene_Load[_0x5cc649(0x186)]['onLoadSuccess']=function(){const _0x2b49a7=_0x5cc649;this[_0x2b49a7(0x13b)]&&this[_0x2b49a7(0x13b)][_0x2b49a7(0x1a8)](this['_listWindow'][_0x2b49a7(0x1b0)]())?this[_0x2b49a7(0x139)]():VisuMZ[_0x2b49a7(0x110)][_0x2b49a7(0x134)][_0x2b49a7(0x16e)](this);},Scene_Load[_0x5cc649(0x186)]['startNewGamePlus']=function(){const _0x14cd37=_0x5cc649;SoundManager[_0x14cd37(0x14f)](),DataManager[_0x14cd37(0x139)](),this[_0x14cd37(0x12f)](),SceneManager[_0x14cd37(0x114)](Scene_Map);};function Scene_SaveNewGamePlus(){this['initialize'](...arguments);}Scene_SaveNewGamePlus[_0x5cc649(0x186)]=Object[_0x5cc649(0x141)](Scene_Save[_0x5cc649(0x186)]),Scene_SaveNewGamePlus['prototype'][_0x5cc649(0x176)]=Scene_SaveNewGamePlus,Scene_SaveNewGamePlus[_0x5cc649(0x186)][_0x5cc649(0x197)]=function(){const _0x10b09f=_0x5cc649;return TextManager[_0x10b09f(0x1ac)];};function Scene_NewGamePlusTransition(){const _0x34f174=_0x5cc649;this[_0x34f174(0x146)](...arguments);}Scene_NewGamePlusTransition['prototype']=Object[_0x5cc649(0x141)](Scene_Base[_0x5cc649(0x186)]),Scene_NewGamePlusTransition[_0x5cc649(0x186)][_0x5cc649(0x176)]=Scene_NewGamePlusTransition,Scene_NewGamePlusTransition[_0x5cc649(0x186)][_0x5cc649(0x146)]=function(){const _0x336f02=_0x5cc649;Scene_Base[_0x336f02(0x186)][_0x336f02(0x146)][_0x336f02(0x16e)](this);},Scene_NewGamePlusTransition[_0x5cc649(0x186)][_0x5cc649(0x10d)]=function(){const _0x2c4b2b=_0x5cc649;DataManager['startNewGamePlus'](),SceneManager[_0x2c4b2b(0x114)](Scene_Map);},Window_SavefileList[_0x5cc649(0x186)][_0x5cc649(0x1a8)]=function(_0x3890f3){const _0x32d533=_0x5cc649;if(_0x3890f3===0x0)return![];const _0x5027d3=DataManager[_0x32d533(0x144)](_0x3890f3);return _0x5027d3&&_0x5027d3['newGamePlus'];},VisuMZ[_0x5cc649(0x110)]['Window_SavefileList_drawTitle']=Window_SavefileList[_0x5cc649(0x186)][_0x5cc649(0x182)],Window_SavefileList['prototype'][_0x5cc649(0x182)]=function(_0x11e90c,_0x474e93,_0xb667ee){const _0xd789df=_0x5cc649;this[_0xd789df(0x1a8)](_0x11e90c)?this[_0xd789df(0x184)](_0x11e90c,_0x474e93,_0xb667ee):VisuMZ[_0xd789df(0x110)]['Window_SavefileList_drawTitle'][_0xd789df(0x16e)](this,_0x11e90c,_0x474e93,_0xb667ee);},Window_SavefileList[_0x5cc649(0x186)]['drawNewGamePlusMarker']=function(_0x4ab4df,_0x19f63b,_0x386cfd){const _0x202d0b=_0x5cc649;if(_0x4ab4df===0x0)return;const _0x5408bf=this[_0x202d0b(0x13a)](_0x4ab4df),_0x497960=TextManager[_0x202d0b(0x15f)]['format'](_0x4ab4df);this['changeTextColor'](ColorManager[_0x202d0b(0x155)]()),this[_0x202d0b(0x192)](_0x497960,_0x19f63b,_0x386cfd,Math[_0x202d0b(0x10b)](0xb4,_0x5408bf[_0x202d0b(0x128)]-0xb4));};