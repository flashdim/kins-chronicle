//=============================================================================
// VisuStella MZ - Party System
// VisuMZ_2_PartySystem.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_PartySystem = true;

var VisuMZ = VisuMZ || {};
VisuMZ.PartySystem = VisuMZ.PartySystem || {};
VisuMZ.PartySystem.version = 1.20;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.20] [PartySystem]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Party_System_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * RPG Maker MZ only gives game projects the ability to switch party members
 * within the main menu and nothing more. There's no inherent functionality to
 * lock party members, make party members required, and/or give players the
 * ability to switch party members mid-battle.
 *
 * This plugin will add in all of those functions as well as a dedicated scene
 * for switching party members. Party switching will allow party members to be
 * removed, swapped, and sorted. Through the usage of Plugin Commands, party
 * members can also be locked and/or required for party presence.
 *
 * Those using the VisuStella MZ Battle Core will also have access to features
 * in this plugin that aren't available otherwise. These features give players
 * the functionality to switch out the whole party lineup mid-battle and/or
 * individual party member switching.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Custom scene dedicated to party management.
 * * Change the maximum number of party members that can participate in battle.
 * * Plugin Commands to lock party members.
 * * Plugin Commands to make certain party members required.
 * * Added functionality with Battle Core to switch party members mid-battle.
 * * This comes in the form of changing either the whole party at once.
 * * Or switching individual members out one at a time.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Main Menu Formation Command
 *
 * - This command is now changed to send the player to Scene_Party for the
 * player to have a dedicated scene for changing the party.
 *
 * ---
 *
 * Battle Members Array
 *
 * - Previously, the battle members are decided by which actors are lined up
 * first in the party roster. This has been changed to give players the freedom
 * to have a party size less than the maximum. This change is made by changing
 * the way the battle members are determined by using a new array. However, any
 * and all functions utilize the $gameParty.battleMembers() function will still
 * behave as normal.
 *
 * ---
 *
 * Formation Change OK Function
 *
 * - RPG Maker MZ did not do anything with the Game_Actor.isFormationChangeOk
 * function so this plugin overwrote it completely to allow for the new
 * lock and require features to work.
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
 * VisuMZ_1_BattleCore
 *
 * - If the VisuStella MZ Battle Core plugin is present, players are able to 
 * access party switching functionality mid-battle at will. This can be in the
 * form of switching out the entire active party roster at once or individually
 * for each actor.
 *
 * - Switching Entire Rosters: This can be done by going into this plugin's
 * Plugin Parameters => General => Party Command Window => Add Party Command.
 * If the Party Command Window is accessible, the player will be able to see
 * the option between 'Auto Battle' and 'Options'.
 *
 * - Individual Member Switching: This requires going to VisuMZ_1_BattleCore's
 * Plugin Parameters => Actor Command Window => Battle Commands => Command List
 * and add in the "party" option. The "party" option can also be added to the
 * <Battle Commands> notetag.
 *
 * ---
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins or specific
 * features. This section will highlight the main plugins/features that will
 * not be compatible with this plugin or put focus on how the make certain
 * features compatible.
 *
 * ---
 * 
 * VisuMZ_2_BattleSystemOTB
 * 
 * With Battle System - OTB, the player cannot change entire parties at once
 * from the Party Command Window. The feature will be unaccessible while
 * Order Turn Battle is in play. However, the player can still change party
 * members through the Actor Command Window by having actors replace other
 * actors. Party changing is also available through battle events, Common
 * Events, and script calls.
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
 * === Party Plugin Commands ===
 * 
 * ---
 *
 * Party: Call Party Scene
 * - Calls the party changing scene.
 *
 * ---
 *
 * Party: Change Max Battle Members
 * - Changes the number of max battle members possible.
 * - Cannot be use mid-battle.
 *
 *   Max Members:
 *   - Changes the number of max battle members possible.
 *   - Use 0 for the game's default number.
 *
 * ---
 *
 * Party: Lock/Unlock Member(s)
 * - Allows you to lock/unlock a party member.
 * - Locked actors cannot change their party position.
 *
 *   Actor ID(s):
 *   - Select which actor(s) to lock/unlock.
 *   - Locked actors cannot change their party position.
 *
 *   Lock?:
 *   - Lock the selected actor(s)?
 *
 * ---
 * 
 * Party: Move Actor(s) to Active
 * - Map Only.
 * - Moves an actor to the active party if there is room.
 * - The actor needs to have joined the party.
 * 
 *   Actor ID(s):
 *   - Select which actor(s) to move to the active party if there is room.
 * 
 * ---
 * 
 * Party: Move Actor(s) to Reserve
 * - Map Only.
 * - Moves an actor to the reserve party.
 * - Must be 1 actor left.
 * - The actor needs to have joined the party.
 * 
 *   Actor ID(s):
 *   - Select which actor(s) to move to the reserve party.
 * 
 * ---
 * 
 * Party: Move Party Index to Reserve
 * - Map only.
 * - Moves an actor in a specific party index to reserve.
 * - Must be 1 actor left.
 * 
 *   Index:
 *   - Type in which index to move.
 *   - Index values start at 0.
 *   - You may use JavaScript code.
 * 
 * ---
 * 
 * Party: Move Random Reserve to Active
 * - Map only.
 * - Moves a random actor from the reserve party to active.
 * - Must be enough space in active party.
 * 
 * ---
 *
 * Party: Require Member(s)
 * - Allows you to require/free a party member.
 * - Required actors must be in the party to exit the scene.
 *
 *   Actor ID(s):
 *   - Select which actor(s) to require/free.
 *   - Required actors must be in the party to exit the scene.
 *
 *   Require?:
 *   - Make the selected actor(s) required?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These Plugin Parameters control the overall behaviors pertaining to the
 * Party System added with this plugin. These behaviors range from the maximum
 * number of members that can participate in battle to the availability of the
 * party switching mechanics.
 *
 * ---
 *
 * General
 * 
 *   Max Battle Members:
 *   - Maximum number of battle members.
 *
 * ---
 *
 * Party Scene
 * 
 *   Add Remove Command:
 *   - Add the 'Remove' command to the party scene?
 * 
 *   Locked Member Icon:
 *   - Icon used for a locked party member.
 * 
 *   Required Member Icon:
 *   - Icon used for a required party member.
 *
 * ---
 *
 * Party Command Window
 * - These require VisuMZ_1_BattleCore!
 * 
 *   Add Party Command:
 *   - Add the 'Party' command to the Party Command Window?
 * 
 *   Command Cooldown:
 *   - Cooldown (in turns) for this command to be available again.
 *
 * ---
 *
 * Actor Command Window
 * - These require VisuMZ_1_BattleCore!
 * 
 *   Add Switch Command:
 *   - Add the 'Switch' command to the Actor Command Window?
 * 
 *   Command Cooldown:
 *   - Cooldown (in turns) for this command to be available again.
 * 
 *   Switch Out Animation?:
 *   - Show the sprites switching out when using individual party
 *     member switching?
 * 
 *   TPB: Immediate Action:
 *   - Allow actors to immediate act upon switching in for TPB battle systems?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Vocabulary Settings
 * ============================================================================
 *
 * These Plugin Parameters control the text that you see in-game related to the
 * Party System plugin.
 *
 * ---
 *
 * General
 * 
 *   Active Party:
 *   - Vocabulary used to represent the Active Party.
 * 
 *   Reserve Party:
 *   - Vocabulary used to represent the Reserve Party.
 * 
 *   Status:
 *   - Vocabulary used to represent the Status Window.
 * 
 *   Show Back Rectangles?:
 *   - Show back rectangles of darker colors to display information better?
 * 
 *     Back Rectangle Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 *
 * ---
 *
 * Party Scene > Windows
 * 
 *   Empty:
 *   - For the party and status windows when no actor is selected.
 * 
 *   Remove:
 *   - For the remove option.
 *
 * ---
 *
 * Party Scene > Button Assist
 * 
 *   Swap Positions:
 *   - Button assist text for the page up/down commands.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Remove:
 *   - Button assist text for the removal command.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Sort:
 *   - Button assist text for the sort command.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Swap In:
 *   - Button assist text for swapping in actors.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Swap Out:
 *   - Button assist text for swapping out actors.
 *   - Requires VisuMZ_0_CoreEngine!
 *
 * ---
 *
 * Battle Scene
 * 
 *   Party Command:
 *   - Command text for entering Party Scene.
 *   - Requires VisuMZ_1_BattleCore!
 * 
 *   Help: Formation:
 *   - Help text for Formation command.
 *   - Requires VisuMZ_1_BattleCore!
 * 
 *   Queue Message:
 *   - Message to say the Party Scene is queued.
 *   - Requires VisuMZ_1_BattleCore!
 * 
 *   Switch Command:
 *   - Command text for switching out members.
 *   - Requires VisuMZ_1_BattleCore!
 * 
 *   Help: Switch:
 *   - Help text for Switch command.
 *   - Requires VisuMZ_1_BattleCore!
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Background Settings
 * ============================================================================
 *
 * Background settings for Scene_Party.
 *
 * ---
 *
 * Background Settings
 * 
 *   Snapshop Opacity:
 *   - Snapshot opacity for the scene.
 * 
 *   Background 1:
 *   - Filename used for the bottom background image.
 *   - Leave empty if you don't wish to use one.
 * 
 *   Background 2:
 *   - Filename used for the upper background image.
 *   - Leave empty if you don't wish to use one.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * If you don't like the locations of the windows in Scene_Party, change them
 * up with these Plugin Parameters, provided that you have an understanding of
 * JavaScript code.
 *
 * ---
 *
 * Active Party Label
 * Active Party Window
 * Reserve Party Label
 * Reserve Party Window
 * Status Label
 * Status Window
 * Battle Switch Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Columns:
 *   - Available only for the Reserve Party Window.
 *   - How many columns do you want there to be for the window?
 * 
 *   Actor Graphic:
 *   - Available only for Active Party Window and Reserve Party Window.
 *   - Choose how the actor graphics appear in the specific windows.
 *     - Face
 *     - Map Sprite
 *     - Sideview Battler (Requires VisuMZ_1_MainMenuCore)
 * 
 *     Map Sprite:
 *     Sideview Battler:
 * 
 *       Offset X:
 *       Offset Y:
 *       - If showing map sprites, offset the x or y coordinates.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
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
 * Version 1.20: July 2, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.19: June 18, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.18: April 16, 2021
 * * Documentation Update!
 * ** Fixed typo. Fix made by Arisu.
 * 
 * Version 1.17: March 26, 2021
 * * Documentation Update!
 * ** Added "VisuStella MZ Compatibility" section for detailed compatibility
 *    explanations with the VisuMZ_2_BattleSystemOTB plugin.
 * 
 * Version 1.16: March 19, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.15: March 5, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Gneral > Battle Scene > Battle Party Icon
 * **** For some reason, we never had a setting that lets you change the party
 *      icon. Well, now there is!
 * 
 * Version 1.14: February 5, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu!
 * *** Party: Move Party Index to Reserve
 * **** Moves an actor in a specific party index to reserve.
 *      Map only. Must be 1 actor left. You may use code.
 * *** Party: Move Random Reserve to Active
 * **** Moves a random actor from the reserve party to active.
 *      Map only. Must be enough space in active party.
 * 
 * Version 1.13: January 29, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu!
 * *** Party: Move Actor(s) to Active
 * **** Map only. Moves an actor to the active party if there is room.
 * *** Party: Move Actor(s) to Reserve
 * **** Map only. Moves an actor to the reserve party.
 * 
 * Version 1.12: January 15, 2021
 * * Bug Fixes!
 * ** For battle testing, if the number of battle test members exceeds the
 *    maximum battle member slots, trim them until they match. Fix by Olivia.
 * 
 * Version 1.11: January 1, 2021
 * * Compatibility Update
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.10: December 25, 2020
 * * Compatibility Update
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.09: December 18, 2020
 * * Bug Fixes!
 * ** Removing party members in the active party by event command will now be
 *    properly removed from the party. Fix made by Yanfly.
 * 
 * Version 1.08: December 4, 2020
 * * Bug Fixes!
 * ** With TPB battle systems, after switching out party members, the battle
 *    system will no longer carry over any previous active battle members in
 *    the command window. Fix made by Yanfly.
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.07: November 22, 2020
 * * Bug Fixes!
 * ** With Active TPB, switching out a party member mid-action is no longer
 *    possible to prevent bugs. Intead, there party switching action will be
 *    queued and take effect after the action has been completed. Fix made by
 *    Yanfly.
 * * Compatibility Update!
 * ** Game_Party.swapOrder function now works with this plugin. However, keep
 *    in mind that due to how this party system plugin allows you have empty
 *    slots in the active battle party, this function will fill in the empty
 *    slots upon usage. Update made by Yanfly.
 *
 * Version 1.06: November 1, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.05: October 25, 2020
 * * Bug Fixes!
 * ** Plugin Command "Party: Change Max Battle Members" now works again.
 *    Fix made by Arisu.
 *
 * Version 1.04: October 18, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.03: October 11, 2020
 * * Bug Fixes!
 * ** Adding party members during battle through the party window command will
 *    no longer cause crashes after they input an action. Fix made by Yanfly.
 * 
 * Version 1.02: October 4, 2020
 * * Bug Fixes!
 * ** Adding party members during test play should now work again.
 *    Fix made by Irina.
 * ** Changing party members mid-battle through the actor command should now
 *    refresh the party followers afterwards. Fix made by Yanfly.
 * * New Features!
 * ** New Plugin Parameter added by Arisu!
 * *** General > Party Command Window > TPB: Immediate Action
 * **** Allow actors to immediate act upon switching in for TPB battle systems?
 * 
 * Version 1.01: September 27, 2020
 * * Bug Fixes!
 * ** When switching actors with states, buffs, and/or debuffs already applied,
 *    the state icons found in the status window will now switch over properly,
 *    too. Fix made by Arisu.
 *
 * Version 1.00: September 7, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CallPartyScene
 * @text Party: Call Party Scene
 * @desc Calls the party changing scene.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChangeMaxBattleMembers
 * @text Party: Change Max Battle Members
 * @desc Changes the number of max battle members possible.
 * Cannot be use mid-battle.
 *
 * @arg Value:eval
 * @text Max Members
 * @desc Changes the number of max battle members possible.
 * Use 0 for the game's default number.
 * @default 4
 *
 * @ --------------------------------------------------------------------------
 *
 * @command LockPartyMembers
 * @text Party: Lock/Unlock Member(s)
 * @desc Allows you to lock/unlock a party member.
 * Locked actors cannot change their party position.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which actor(s) to lock/unlock.
 * Locked actors cannot change their party position.
 * @default ["1"]
 * 
 * @arg Lock:eval
 * @text Lock?
 * @type boolean
 * @on Lock
 * @off Unlock
 * @desc Lock the selected actor(s)?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MoveActorsToActive
 * @text Party: Move Actor(s) to Active
 * @desc Moves an actor to the active party if there is room.
 * Map only. The actor needs to have joined the party.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which actor(s) to move to the active party if there is room.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MoveActorsToReserve
 * @text Party: Move Actor(s) to Reserve
 * @desc Moves an actor to the reserve party. Must be 1 actor left.
 * Map only. The actor needs to have joined the party.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which actor(s) to move to the reserve party.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MovePartyIndexToReserve
 * @text Party: Move Party Index to Reserve
 * @desc Moves an actor in a specific party index to reserve.
 * Map only. Must be 1 actor left.
 *
 * @arg Index:eval
 * @text Party Index
 * @desc Type in which index to move. Index values start at 0.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MoveRandomToActive
 * @text Party: Move Random Reserve to Active
 * @desc Moves a random actor from the reserve party to active.
 * Map only. Must be enough space in active party.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command RequirePartyMembers
 * @text Party: Require Member(s)
 * @desc Allows you to require/free a party member.
 * Required actors must be in the party to exit the scene.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which actor(s) to require/free.
 * Required actors must be in the party to exit the scene.
 * @default ["1"]
 * 
 * @arg Require:eval
 * @text Require?
 * @type boolean
 * @on Require
 * @off Don't Require
 * @desc Make the selected actor(s) required?
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
 * @param PartySystem
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
 * @desc General settings pertaining to Party-related mechanics.
 * @default {"General":"","MaxBattleMembers:num":"4","PartyScene":"","AddRemoveCmd:eval":"true","LockIcon:num":"195","RequireIcon:num":"87","DrawBackRect:eval":"true","BackRectColor:str":"19","PartyCmdWin":"","PartyCmdWinAddParty:eval":"false","PartyCmdCooldown:num":"1","tpbImmediateAction:eval":"true","ActorCmdWin":"","ActorCmdWinAddParty:eval":"true","ActorCmdCooldown:num":"1","SwitchOutAnimation:eval":"true"}
 *
 * @param Vocab:struct
 * @text Vocabulary Settings
 * @type struct<Vocab>
 * @desc These settings let you adjust the text displayed for this plugin.
 * @default {"General":"","ActiveParty:str":"Active Party","ReserveParty:str":"Reserve Party","Status:str":"Status","PartyScene":"","Windows":"","Empty:str":"- Empty -","Remove:str":"Remove","ButtonAssist":"","AssistSwapPosition:str":"Quick Swap","AssistRemove:str":"Remove","AssistSort:str":"Sort","AssistSwapIn:str":"Swap In","AssistSwapOut:str":"Swap Out","BattleScene":"","BattlePartyCmd:str":"Party","BattleHelpFormation:json":"\"Change up your party formation.\"","QueuePartyScene:str":"%1 Menu queued after action is complete.","BattleSwitchOut:str":"Switch","BattleHelpSwitch:json":"\"Switch out this party member with another.\""}
 *
 * @param BgSettings:struct
 * @text Background Settings
 * @type struct<BgSettings>
 * @desc Background settings for Scene_Party.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc These settings let you control how the windows appear in Scene_Party.
 * @default {"ActivePartyLabel":"","ActivePartyLabelBgType:num":"0","ActivePartyLabelRect:func":"\"const wx = 0;\\nconst wy = this.mainAreaTop();\\nconst ww = Graphics.boxWidth;\\nconst wh = Window_Base.prototype.lineHeight();\\nreturn new Rectangle(wx, wy, ww, wh);\"","ActivePartyWindow":"","ActivePartyWindowBgType:num":"0","ActivePartyGraphic:str":"face","ActivePartyMapSprite":"","ActiveSpriteOffsetX:num":"0","ActiveSpriteOffsetY:num":"4","ActivePartySvBattler":"","ActiveBattlerOffsetX:num":"0","ActiveBattlerOffsetY:num":"4","ActivePartyWindowRect:func":"\"const wx = 0;\\nconst wy = this._activePartyLabel.y + this._activePartyLabel.height;\\nconst ww = Graphics.boxWidth;\\nconst wh = ImageManager.faceHeight + $gameSystem.windowPadding() * 2 + 2;\\nreturn new Rectangle(wx, wy, ww, wh);\"","ReservePartyLabel":"","ReservePartyLabelBgType:num":"0","ReservePartyLabelRect:func":"\"const ww = Math.max(240, Math.min(Graphics.boxWidth - 576, Math.round(Graphics.boxWidth / 2)));\\nconst wx = this.isRightInputMode() ? (Graphics.boxWidth - ww) : 0;\\nconst wy = this._activePartyWindow.y + this._activePartyWindow.height;\\nconst wh = Window_Base.prototype.lineHeight();\\nreturn new Rectangle(wx, wy, ww, wh);\"","ReservePartyWindow":"","ReservePartyWindowBgType:num":"0","ReserveItemThickness:num":"2","ReservePartyGraphic:str":"face","ReservePartyMapSprite":"","ReserveSpriteOffsetX:num":"24","ReserveSpriteOffsetY:num":"4","ReservePartySvBattler":"","ReserveBattlerOffsetX:num":"48","ReserveBattlerOffsetY:num":"4","ReservePartyWindowRect:func":"\"const ww = this._reservePartyLabel.width;\\nconst wx = this._reservePartyLabel.x;\\nconst wy = this._reservePartyLabel.y + this._reservePartyLabel.height;\\nconst wh = this.mainAreaHeight() - this._reservePartyLabel.height - this._activePartyWindow.height - this._activePartyLabel.height;\\nreturn new Rectangle(wx, wy, ww, wh);\"","StatusLabel":"","StatusLabelBgType:num":"0","StatusLabelRect:func":"\"const ww = Graphics.boxWidth - this._reservePartyLabel.width;\\nconst wx = this.isRightInputMode() ? 0 : (Graphics.boxWidth - ww);\\nconst wy = this._activePartyWindow.y + this._activePartyWindow.height;\\nconst wh = Window_Base.prototype.lineHeight();\\nreturn new Rectangle(wx, wy, ww, wh);\"","StatusWindow":"","StatusWindowBgType:num":"0","StatusWindowDraw:func":"\"// Draw Empty\\nif (!this._actor) {\\n    this.drawItemDarkRect(0, 0, this.innerWidth, this.innerHeight);\\n    const y = Math.round((this.innerHeight - this.lineHeight()) / 2);\\n    this.changeTextColor(ColorManager.systemColor());\\n    this.drawText(TextManager.emptyPartyMember, 0, y, this.innerWidth, 'center');\\n    return;\\n}\\n\\n// Draw Face and Simple Status\\nthis.drawActorFace(this._actor, 1, 0, ImageManager.faceWidth, ImageManager.faceHeight);\\nthis.drawActorSimpleStatus(this._actor, ImageManager.faceWidth + 36, 0);\\n\\n// Declare Constants\\nconst lineHeight = this.lineHeight();\\nconst params = this.actorParams();\\nconst paramWidth = Math.round(this.innerWidth / 2);\\nconst paramHeight = Math.ceil(params.length / 2) * lineHeight;\\nconst baseX = 0;\\nlet x = 0;\\nlet y = ImageManager.faceHeight + lineHeight / 2;\\n\\n// Draw Parameters\\nfor (const param of params) {\\n    this.drawItemDarkRect(x, y, paramWidth, lineHeight);\\n    this.drawParamName(param, x, y, paramWidth);\\n    this.drawParamValue(param, x, y, paramWidth);\\n\\n    if (x === baseX) {\\n        x += paramWidth;\\n    } else {\\n        x = baseX;\\n        y += lineHeight;\\n    }\\n}\"","StatusWindowRect:func":"\"const ww = this._statusPartyLabel.width;\\nconst wx = this.isRightInputMode() ? 0 : (Graphics.boxWidth - ww);\\nconst wy = this._reservePartyWindow.y;\\nconst wh = this._reservePartyWindow.height;\\nreturn new Rectangle(wx, wy, ww, wh);\"","BattleSwitchWindow":"","BattleSwitchWindowBgType:num":"0","BattleSwitchWindowRect:func":"\"const padding = $gameSystem.windowPadding() * 2;\\nlet ww = 516 + padding;\\nlet wh = Window_PartyBattleSwitch.prototype.itemHeight() * 4 + padding;\\nlet wx = Math.round(Graphics.boxWidth - ww) / 2;\\nlet wy = Math.round(Graphics.boxHeight - wh - this._statusWindow.height) / 2;\\nwy = wy.clamp(0, Graphics.boxHeight - wh - this._statusWindow.height);\\nreturn new Rectangle(wx, wy, ww, wh);\""}
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
 * @param General
 *
 * @param MaxBattleMembers:num
 * @text Max Battle Members
 * @parent General
 * @type number
 * @min 1
 * @desc Maximum number of battle members.
 * @default 4
 *
 * @param BattleScene
 * @text Battle Scene
 *
 * @param BattlePartyIcon:num
 * @text Battle Party Icon
 * @parent BattleScene
 * @desc Icon used for changing party members.
 * @default 75
 *
 * @param PartyScene
 * @text Party Scene
 *
 * @param AddRemoveCmd:eval
 * @text Add Remove Command
 * @parent PartyScene
 * @type boolean
 * @on Add Command
 * @off Don't Add
 * @desc Add the 'Remove' command to the party scene?
 * @default true
 *
 * @param LockIcon:num
 * @text Locked Member Icon
 * @parent PartyScene
 * @desc Icon used for a locked party member.
 * @default 195
 *
 * @param RequireIcon:num
 * @text Required Member Icon
 * @parent PartyScene
 * @desc Icon used for a required party member.
 * @default 87
 *
 * @param DrawBackRect:eval
 * @text Show Back Rectangles?
 * @parent PartyScene
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Show back rectangles of darker colors to display information better?
 * @default true
 *
 * @param BackRectColor:str
 * @text Back Rectangle Color
 * @parent DrawBackRect:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param PartyCmdWin
 * @text Party Command Window
 *
 * @param PartyCmdWinAddParty:eval
 * @text Add Party Command
 * @parent PartyCmdWin
 * @type boolean
 * @on Add Command
 * @off Don't Add
 * @desc Add the 'Party' command to the Party Command Window?
 * @default false
 *
 * @param PartyCmdCooldown:num
 * @text Command Cooldown
 * @parent PartyCmdWin
 * @desc Cooldown (in turns) for this command to be available again.
 * @default 1
 *
 * @param ActorCmdWin
 * @text Actor Command Window
 *
 * @param ActorCmdWinAddParty:eval
 * @text Add Switch Command
 * @parent ActorCmdWin
 * @type boolean
 * @on Add Command
 * @off Don't Add
 * @desc Add the 'Switch' command to the Actor Command Window?
 * @default true
 *
 * @param ActorCmdCooldown:num
 * @text Command Cooldown
 * @parent ActorCmdWin
 * @desc Cooldown (in turns) for this command to be available again.
 * @default 1
 *
 * @param SwitchOutAnimation:eval
 * @text Switch Out Animation?
 * @parent ActorCmdWin
 * @type boolean
 * @on Show
 * @off Don't
 * @desc Show the sprites switching out when using individual party member switching?
 * @default true
 *
 * @param tpbImmediateAction:eval
 * @text TPB: Immediate Action
 * @parent ActorCmdWin
 * @type boolean
 * @on Immediate Action
 * @off Empty Gauge
 * @desc Allow actors to immediate act upon switching in for TPB battle systems?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Vocabulary Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Vocab:
 *
 * @param General
 *
 * @param ActiveParty:str
 * @text Active Party
 * @parent General
 * @desc Vocabulary used to represent the Active Party.
 * @default Active Party
 *
 * @param ReserveParty:str
 * @text Reserve Party
 * @parent General
 * @desc Vocabulary used to represent the Reserve Party.
 * @default Reserve Party
 *
 * @param Status:str
 * @text Status
 * @parent General
 * @desc Vocabulary used to represent the Status Window.
 * @default Status
 *
 * @param PartyScene
 * @text Party Scene
 *
 * @param Windows
 * @parent PartyScene
 *
 * @param Empty:str
 * @text Empty
 * @parent Windows
 * @desc For the party and status windows when no actor is selected.
 * @default - Empty -
 *
 * @param Remove:str
 * @text Remove
 * @parent Windows
 * @desc For the remove option.
 * @default Remove
 *
 * @param ButtonAssist
 * @text Button Assist
 * @parent PartyScene
 *
 * @param AssistSwapPosition:str
 * @text Swap Positions
 * @parent ButtonAssist
 * @desc Button assist text for the page up/down commands.
 * Requires VisuMZ_0_CoreEngine!
 * @default Quick Swap
 *
 * @param AssistRemove:str
 * @text Remove
 * @parent ButtonAssist
 * @desc Button assist text for the removal command.
 * Requires VisuMZ_0_CoreEngine!
 * @default Remove
 *
 * @param AssistSort:str
 * @text Sort
 * @parent ButtonAssist
 * @desc Button assist text for the sort command.
 * Requires VisuMZ_0_CoreEngine!
 * @default Sort
 *
 * @param AssistSwapIn:str
 * @text Swap In
 * @parent ButtonAssist
 * @desc Button assist text for swapping in actors.
 * Requires VisuMZ_0_CoreEngine!
 * @default Swap In
 *
 * @param AssistSwapOut:str
 * @text Swap Out
 * @parent ButtonAssist
 * @desc Button assist text for swapping out actors.
 * Requires VisuMZ_0_CoreEngine!
 * @default Swap Out
 *
 * @param BattleScene
 * @text Battle Scene
 *
 * @param BattlePartyCmd:str
 * @text Party Command
 * @parent BattleScene
 * @desc Command text for entering Party Scene.
 * Requires VisuMZ_1_BattleCore!
 * @default Party
 *
 * @param BattleHelpFormation:json
 * @text Help: Formation
 * @parent BattlePartyCmd:str
 * @type note
 * @desc Help text for Formation command.
 * Requires VisuMZ_1_BattleCore!
 * @default "Change up your party formation."
 *
 * @param QueuePartyScene:str
 * @text Queue Message
 * @parent BattlePartyCmd:str
 * @desc Message to say the Party Scene is queued.
 * Requires VisuMZ_1_BattleCore!
 * @default %1 Menu queued after action is complete.
 *
 * @param BattleSwitchOut:str
 * @text Switch Command
 * @parent BattleScene
 * @desc Command text for switching out members.
 * Requires VisuMZ_1_BattleCore!
 * @default Switch
 *
 * @param BattleHelpSwitch:json
 * @text Help: Switch
 * @parent BattleSwitchOut:str
 * @type note
 * @desc Help text for Switch command.
 * Requires VisuMZ_1_BattleCore!
 * @default "Switch out this party member with another."
 *
 */
/* ----------------------------------------------------------------------------
 * Background Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~BgSettings:
 *
 * @param SnapshotOpacity:num
 * @text Snapshop Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc Snapshot opacity for the scene.
 * @default 192
 *
 * @param BgFilename1:str
 * @text Background 1
 * @type file
 * @dir img/titles1/
 * @desc Filename used for the bottom background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @param BgFilename2:str
 * @text Background 2
 * @type file
 * @dir img/titles2/
 * @desc Filename used for the upper background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param ActivePartyLabel
 * @text Active Party Label
 *
 * @param ActivePartyLabelBgType:num
 * @text Background Type
 * @parent ActivePartyLabel
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ActivePartyLabelRect:func
 * @text JS: X, Y, W, H
 * @parent ActivePartyLabel
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const wx = 0;\nconst wy = this.mainAreaTop();\nconst ww = Graphics.boxWidth;\nconst wh = Window_Base.prototype.lineHeight();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param ActivePartyWindow
 * @text Active Party Window
 *
 * @param ActivePartyWindowBgType:num
 * @text Background Type
 * @parent ActivePartyWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ActivePartyGraphic:str
 * @text Actor Graphic
 * @parent ActivePartyWindow
 * @type select
 * @option None
 * @value none
 * @option Face
 * @value face
 * @option Map Sprite
 * @value sprite
 * @option Sideview Battler (Requires VisuMZ_1_MainMenuCore)
 * @value svbattler
 * @desc Choose how the actor graphics appear in the active party menu.
 * @default face
 *
 * @param ActivePartyMapSprite
 * @text Map Sprite
 * @parent ActivePartyGraphic:str
 *
 * @param ActiveSpriteOffsetX:num
 * @text Offset X
 * @parent ActivePartyMapSprite
 * @desc If showing map sprites, offset the x coordinate here from center.
 * @default 0
 *
 * @param ActiveSpriteOffsetY:num
 * @text Offset Y
 * @parent ActivePartyMapSprite
 * @desc If showing map sprites, offset the y coordinate here from bottom.
 * @default 4
 *
 * @param ActivePartySvBattler
 * @text Sideview Battler
 * @parent ActivePartyGraphic:str
 *
 * @param ActiveBattlerOffsetX:num
 * @text Offset X
 * @parent ActivePartySvBattler
 * @desc If showing sideview battlers, offset the x coordinate here from center.
 * @default 0
 *
 * @param ActiveBattlerOffsetY:num
 * @text Offset Y
 * @parent ActivePartySvBattler
 * @desc If showing sideview battlers, offset the y coordinate here from bottom.
 * @default 4
 *
 * @param ActivePartyWindowRect:func
 * @text JS: X, Y, W, H
 * @parent ActivePartyWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const wx = 0;\nconst wy = this._activePartyLabel.y + this._activePartyLabel.height;\nconst ww = Graphics.boxWidth;\nconst wh = ImageManager.faceHeight + $gameSystem.windowPadding() * 2 + 2;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param ReservePartyLabel
 * @text Reserve Party Label
 *
 * @param ReservePartyLabelBgType:num
 * @text Background Type
 * @parent ReservePartyLabel
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ReservePartyLabelRect:func
 * @text JS: X, Y, W, H
 * @parent ReservePartyLabel
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.max(240, Math.min(Graphics.boxWidth - 576, Math.round(Graphics.boxWidth / 2)));\nconst wx = this.isRightInputMode() ? (Graphics.boxWidth - ww) : 0;\nconst wy = this._activePartyWindow.y + this._activePartyWindow.height;\nconst wh = Window_Base.prototype.lineHeight();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param ReservePartyWindow
 * @text Reserve Party Window
 *
 * @param ReservePartyWindowBgType:num
 * @text Background Type
 * @parent ReservePartyWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ReserveCol:num
 * @text Columns
 * @parent ReservePartyWindow
 * @type number
 * @min 1
 * @desc How many columns do you want there to be for the window?
 * @default 1
 *
 * @param ReserveItemThickness:num
 * @text Row Thickness
 * @parent ReservePartyWindow
 * @type number
 * @min 1
 * @desc How many rows thick do you want selectable items to be?
 * @default 2
 *
 * @param ReservePartyGraphic:str
 * @text Actor Graphic
 * @parent ReservePartyWindow
 * @type select
 * @option None
 * @value none
 * @option Face
 * @value face
 * @option Map Sprite
 * @value sprite
 * @option Sideview Battler (Requires VisuMZ_1_MainMenuCore)
 * @value svbattler
 * @desc Choose how the actor graphics appear in the reserve party menu.
 * @default face
 *
 * @param ReservePartyMapSprite
 * @text Map Sprite
 * @parent ReservePartyGraphic:str
 *
 * @param ReserveSpriteOffsetX:num
 * @text Offset X
 * @parent ReservePartyMapSprite
 * @desc If showing map sprites, offset the x coordinate here from left.
 * @default 24
 *
 * @param ReserveSpriteOffsetY:num
 * @text Offset Y
 * @parent ReservePartyMapSprite
 * @desc If showing map sprites, offset the y coordinate here from bottom.
 * @default 4
 *
 * @param ReservePartySvBattler
 * @text Sideview Battler
 * @parent ReservePartyGraphic:str
 *
 * @param ReserveBattlerOffsetX:num
 * @text Offset X
 * @parent ReservePartySvBattler
 * @desc If showing sideview battlers, offset the x coordinate here from left.
 * @default 48
 *
 * @param ReserveBattlerOffsetY:num
 * @text Offset Y
 * @parent ReservePartySvBattler
 * @desc If showing sideview battlers, offset the y coordinate here from bottom.
 * @default 4
 *
 * @param ReservePartyWindowRect:func
 * @text JS: X, Y, W, H
 * @parent ReservePartyWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = this._reservePartyLabel.width;\nconst wx = this._reservePartyLabel.x;\nconst wy = this._reservePartyLabel.y + this._reservePartyLabel.height;\nconst wh = this.mainAreaHeight() - this._reservePartyLabel.height - this._activePartyWindow.height - this._activePartyLabel.height;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param StatusLabel
 * @text Status Label
 *
 * @param StatusLabelBgType:num
 * @text Background Type
 * @parent StatusLabel
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusLabelRect:func
 * @text JS: X, Y, W, H
 * @parent StatusLabel
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Graphics.boxWidth - this._reservePartyLabel.width;\nconst wx = this.isRightInputMode() ? 0 : (Graphics.boxWidth - ww);\nconst wy = this._activePartyWindow.y + this._activePartyWindow.height;\nconst wh = Window_Base.prototype.lineHeight();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusWindowBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusWindowDraw:func
 * @text JS: Draw Data
 * @parent StatusWindow
 * @type note
 * @desc Code used to draw the display data in the Status Window.
 * @default "// Draw Empty\nif (!this._actor) {\n    this.drawItemDarkRect(0, 0, this.innerWidth, this.innerHeight);\n    const y = Math.round((this.innerHeight - this.lineHeight()) / 2);\n    this.changeTextColor(ColorManager.systemColor());\n    this.drawText(TextManager.emptyPartyMember, 0, y, this.innerWidth, 'center');\n    return;\n}\n\n// Draw Face and Simple Status\nthis.drawActorFace(this._actor, 1, 0, ImageManager.faceWidth, ImageManager.faceHeight);\nthis.drawActorSimpleStatus(this._actor, ImageManager.faceWidth + 36, 0);\n\n// Declare Constants\nconst lineHeight = this.lineHeight();\nconst params = this.actorParams();\nconst paramWidth = Math.round(this.innerWidth / 2);\nconst paramHeight = Math.ceil(params.length / 2) * lineHeight;\nconst baseX = 0;\nlet x = 0;\nlet y = ImageManager.faceHeight + lineHeight / 2;\n\n// Draw Parameters\nfor (const param of params) {\n    this.drawItemDarkRect(x, y, paramWidth, lineHeight);\n    this.drawParamName(param, x, y, paramWidth);\n    this.drawParamValue(param, x, y, paramWidth);\n\n    if (x === baseX) {\n        x += paramWidth;\n    } else {\n        x = baseX;\n        y += lineHeight;\n    }\n}"
 *
 * @param StatusWindowRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = this._statusPartyLabel.width;\nconst wx = this.isRightInputMode() ? 0 : (Graphics.boxWidth - ww);\nconst wy = this._reservePartyWindow.y;\nconst wh = this._reservePartyWindow.height;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param BattleSwitchWindow
 * @text Battle Switch Window
 *
 * @param BattleSwitchWindowBgType:num
 * @text Background Type
 * @parent BattleSwitchWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param BattleSwitchWindowRect:func
 * @text JS: X, Y, W, H
 * @parent BattleSwitchWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * Does not apply to Border Battle Layout style.
 * @default "const padding = $gameSystem.windowPadding() * 2;\nlet ww = 516 + padding;\nlet wh = Window_PartyBattleSwitch.prototype.itemHeight() * 4 + padding;\nlet wx = Math.round(Graphics.boxWidth - ww) / 2;\nlet wy = Math.round(Graphics.boxHeight - wh - this._statusWindow.height) / 2;\nwy = wy.clamp(0, Graphics.boxHeight - wh - this._statusWindow.height);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
//=============================================================================

const _0x3a10=['setup','initMaxBattleMembers','_partyRequired','BvEfk','dflvM','_clickHandler','BgFilename1','scaleSprite','canSwitchPartyInBattle','partyChangeRefresh','version','reservePartyWindowRect','rWzQf','StatusLabelRect','getPartySystemBackColor','removeActorFromBattleMembers','BPnUI','currentSymbol','clearPartyBattleCommandCooldown','setBattlePartySwitchCooldown','Game_Party_addActor','qOgeQ','drawParamText','padding','otbReturnBattlerToTurnOrders','battlePartyChangeCmdHelp','addRemoveCommand','cursorUp','callPartyMemberSwitch','onBattlePartySwitch','processShiftRemoveShortcut','activePartyLabelRect','buttonAssistText4','cancel','AddRemoveCmd','_scene','DisplayedParams','center','eQIKd','aRdMm','sortActors','anyRequiredPartyMembersInReserve','initialize','BattlePartyIcon','Scene_Battle_isTimeActive','AssistSwapPosition','actor','statusWindowRect','isPreviousScene','defaultMaxBattleMembers','oXBPG','isTpb','removeActor','setText','assistSortPartyMembers','battlePartySwitchCmdHelp','faceName','uMjjC','concat','Actors','isEnabled','ActiveSpriteOffsetX','BattlePartyCmd','drawActorSimpleStatus','charged','isOkEnabled','_otb_actionBattlersNext','HZnAq','fflUK','updateBattlePartySwitchCooldown','call','itemRect','battler','reserveParty','uGGkF','reservePartyLabelRect','Scene_Battle_createPartyCommandWindowBattleCore','open','Index','wZgBj','battlePartyChangeIcon','border','_activePartyWindow','isFormationCommandEnabled','drawItemImageSprite','_lastIndex','18qGmppn','itemLineRect','13592jONdLZ','isSceneBattle','level','isSceneParty','setBattler','isNextSceneBattleTransitionable','tpbImmediateAction','drawActorPartyIcons','Settings','includes','setupBattleTestMembers','CqpED','bind','ReservePartyGraphic','equips','setBackgroundType','push','EVAL','assistSwapInPartyMember','Param','isActiveTpb','changeLevel','drawIcon','snapForBackground','preparePartySwitchMember','loadTitle1','_list','width','processPartySwitchMember','onPartySwitchCancel','createBackground','177377ZxcGNH','isImmediateTpb','windowPadding','parameters','postPartySwitchMenuTurnBased','isBTB','_partySystemSwitchOut','nameStartPosition','indexOf','createCustomBackgroundImages','drawActorCharacter','_battleSystemIncompatibilityError','activePartyWindowRect','applyBattlePartySwitchCooldown','drawParamValue','textColor','iconHeight','isFTB','QYNSs','JSON','ReservePartyWindowBgType','toUpperCase','direction','VisuMZ_2_BattleSystemETB','updateHelp','addNonBattleTestMembers','createActorCommandWindow','playCursorSound','#%1','smoothSelect','aYxOZ','_inputting','processCancel','Vocab','drawSvActor','changeTextColor','findSymbol','uQTII','startSwitchOutAnimation','setupStartingMembers','STRUCT','swapOrderPartySystemPlugin','createInnerSprite','_debug','VisuMZ_2_BattleSystemBTB','nWWCe','ARRAYSTR','setStatusWindow','ReservePartyLabelBgType','contents','removePartyMember','Scene_Battle_createActorCommandWindow','toLowerCase','BTLya','ktFLs','Scene_Battle_updateBattleProcess','Game_Battler_onBattleStart','inBattle','1UNXCZJ','drawItemImage','shift','Game_Actor_setup','createReservePartyLabel','format','addCommand','ARRAYSTRUCT','commandStyle','setActor','isSceneMap','Scene_Battle_isAnyInputWindowActive','Scene_Base_isAutosaveEnabled','round','map','paramValueByName','createAllWindows','battlePartyChangeCmd','teamBasedFirstAvailableMember','isAppeared','_pageupButton','assistSwapOutPartyMember','StatusWindowDraw','onActiveOk','itemRectWithPadding','removeActionBattlersOTB','activate','buttonAssistText3','drawDarkRect','addActorToBattleMembersAtIndex','BattleManager_setup','assistRemovePartyMember','max','dimColor1','Game_Battler_regenerateAll','isAnyInputWindowActive','startOpacity','checkShiftRemoveShortcut','actorId','cursorVisible','onReserveCancel','VisuMZ_2_BattleSystemOTB','maxCols','emptyPartyMember','_actionBattlers','CoreEngine','face','ReservePartyLabelRect','currentActor','stepForward','ActivePartyLabelRect','BgFilename2','drawItem','ReserveSpriteOffsetX','addActorToBattleMembers','refreshAllWindows','setBackgroundOpacity','characterName','update','faceHeight','popScene','Require','_backSprite1','isTimeActive','_partySwitchBattleCommandCooldown','isPlaytest','bitmap','ActiveBattlerOffsetY','_actorCommandWindow','sort','213076Cdhhit','svbattler','_battleMembers','loadFace','dVVeS','addText','clearTpbChargeTime','initPartySystem','StatusWindowBgType','_statusPartyWindow','prototype','processDrawItem','drawItemStatus','drawActorClass','Value','ActivePartyGraphic','onPartySwitchOk','updatePartySwitch','XlZoz','increaseTurn','cursorPageup','swapOrder','createActivePartyLabel','NHiFX','rearrangePartyActors','itemPadding','ORUcY','refreshOG','_partyMemberSwitchWindow','text','followers','ReserveParty','remove','_subject','battleMembers','_pagedownButton','isShowPartySwitchOutAnimation','NRCPd','Status','VisuMZ_2_BattleSystemFTB','ActiveParty','DrawBackRect','drawItemDarkRect','Game_Party_setupBattleTest','status','create','addWindow','shiDB','ActiveTpbFormationMessage','updateBattleProcess','commandPartyMemberSwitch','_tpbSceneChangeCacheActor','isOTB','uSMOw','regenerateAll','startSwitchInAnimation','Game_Party_removeActor','_battleMaxSize','getParamValue','splice','loadFaceImages','setHandler','isFormationChangeOk','refresh','processShiftSortShortcut','length','statusParty','resetFontSettings','allMembers','\x5cI[%1]%2','Game_Party_swapOrder','createStatusLabel','getColor','skillItemWindowRectBorderStyle','addChild','_actorGraphic','isSTB','AssistSwapIn','min','STR','YpEqJ','LockIcon','102728vcRDHW','_statusPartyLabel','_actor','right','_callSceneParty','addPartyCommand','BackRectColor','yZeeh','SHSzo','setPartyRequirement','ReserveItemThickness','getInputButtonString','addFormationCommand','pendingIndex','SceneManager_isNextSceneBattleTransitionable','iconWidth','_actors','faceWidth','Window','_backSprite2','quickSwap','drawItemImageSvActor','random','maxBattleMembers','actor%1-stateIcon','_partyLocked','index','isRightInputMode','createActivePartyWindow','lineHeight','exit','drawItemImageFace','iJVKu','drawText','_partySwitchTargetActor','reselect','Empty','fillRect','PzAxp','innerHeight','BattleSwitchOut','buttonAssistText1','PartySystem','registerCommand','dimColor2','close','updateTurnOrderCTB','paintOpacity','nUrGm','innerWidth','postPartySwitchMenuTpb','SnapshotOpacity','isQueueFormationMenu','startMove','isActor','MoveActorsToReserve','commandFormation','ConvertParams','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','_reservePartyLabel','816818TvGqhF','ARRAYNUM','checkShiftSortShortcut','_partySwitchDuration','buttonAssistKey3','ActorCmdWinAddParty','UWcbc','_reservePartyWindow','sprite','activeParty','deselect','playOkSound','Window_ActorCommand_updateHelp','deactivate','Hiexz','isRequiredInParty','testBattlers','QueuePartyScene','gaugeBackColor','clear','ReserveBattlerOffsetX','callFormation','loadSvActor','isPartyCommandAdded','height','lockPartyMemberIcon','RequireIcon','MoveActorsToActive','Window_PartyCommand_updateHelp','drawParamName','changePaintOpacity','ChangeMaxBattleMembers','drawActorPartyIconsHorz','param','playEquip','_windowLayer','isPreviousSceneBattleTransitionable','ActivePartyWindowRect','AssistRemove','dEESI','onReserveOk','rawBattleMembers','isTriggered','ARRAYEVAL','_partySystemBattleCommandCooldown','initEquips','initBattleMembers','Sprite_Actor_update','requiredPartyMemberIcon','actorParams','getBackgroundOpacity','return\x200','ARRAYJSON','recoverAll','Game_Party_setupStartingMembers','clearPartySwitchCommandCooldown','partySwitchWindowRectStandard','Game_Unit_inBattle','_rowThickness','removePartyCommand','setPartyLock','isAutosaveEnabled','ReserveSpriteOffsetY','BattleHelpSwitch','BattleSwitchWindowRect','isETB','isShiftRemoveShortcutEnabled','battleLayoutStyle','uiMenuStyle','70571OwZbFW','createPageButtons','ummoy','addLoadListener','RequirePartyMembers','updateTurnOrderSTB','_callPartyMemberSwitch','visible','prVQU','PartyCmdCooldown','_tpbChargeTime','name','assistSwapPositions','_currentActor','_statusWindow','isFormationCommandAdded','_partyCommandWindow','createPartyCommandWindowBattleCore','maxItems','itemHeight','Game_Troop_increaseTurn','drawRemoveCommand','formation','isShiftShortcutEnabled','match','uiInputPosition','centerSprite','loadPartyImages','gradientFillRect','1WvtRZY','filter','isCTB','_helpWindow','_spriteset','drawActorFace','systemColor','selectActor','wycYR','157049JSqagF','BgSettings','czwkf','isAlive','changeMaxBattleMembers','constructor','General','NUM','_logWindow','trim','addActor','statusLabelRect','ensureCursorVisible','partySwitchWindowRect','xErvb','isCancelEnabled','_bypassAutoSavePartySystem','drawItemEmpty','JhQxr','description','processCursorMove','ActorCmdCooldown','isCurrentItemEnabled','log','adjustSprite','vRmMF','battlePartySwitchCooldown','members','VisuMZ_2_BattleSystemSTB','parse','checkInitBattleMembers','VisuMZ_1_BattleCore','battlePartySwitchCmd','onBattleStart','drawActorName','SceneManager_isPreviousSceneBattleTransitionable','AssistSwapOut','select','reserveMembers','active','drawActorPartyIconsVert','partySwitchWindowRectBorder','createPartySwitchWindow','QUxsw','updatePadding','callUpdateHelp','hfsHb','terminate','hasBattleSystemIncompatibilities','pop','battlerName','makeActions','_activePartyLabel','createReservePartyWindow'];const _0x2f03b2=_0x44ad;(function(_0x4252b4,_0x589f41){const _0x319aa5=_0x44ad;while(!![]){try{const _0x178777=-parseInt(_0x319aa5(0x1e9))+-parseInt(_0x319aa5(0x1ca))*parseInt(_0x319aa5(0x1c8))+parseInt(_0x319aa5(0x2bb))*-parseInt(_0x319aa5(0x133))+parseInt(_0x319aa5(0x223))*-parseInt(_0x319aa5(0x116))+-parseInt(_0x319aa5(0x269))+parseInt(_0x319aa5(0x13c))+parseInt(_0x319aa5(0xd1));if(_0x178777===_0x589f41)break;else _0x4252b4['push'](_0x4252b4['shift']());}catch(_0x3b1421){_0x4252b4['push'](_0x4252b4['shift']());}}}(_0x3a10,0x28653));var label=_0x2f03b2(0xbf),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x2f03b2(0x134)](function(_0x2b9ad8){const _0x485419=_0x2f03b2;return _0x2b9ad8[_0x485419(0x295)]&&_0x2b9ad8[_0x485419(0x14f)][_0x485419(0x1d3)]('['+label+']');})[0x0];VisuMZ[label][_0x2f03b2(0x1d2)]=VisuMZ[label][_0x2f03b2(0x1d2)]||{},VisuMZ['ConvertParams']=function(_0x113a72,_0x14b156){const _0x14dc7f=_0x2f03b2;for(const _0x3d0540 in _0x14b156){if(_0x3d0540[_0x14dc7f(0x12e)](/(.*):(.*)/i)){const _0x466f61=String(RegExp['$1']),_0x572ae9=String(RegExp['$2'])[_0x14dc7f(0x1fe)]()[_0x14dc7f(0x145)]();let _0x33a7aa,_0x2528c5,_0x9f373e;switch(_0x572ae9){case _0x14dc7f(0x143):_0x33a7aa=_0x14b156[_0x3d0540]!==''?Number(_0x14b156[_0x3d0540]):0x0;break;case _0x14dc7f(0xd2):_0x2528c5=_0x14b156[_0x3d0540]!==''?JSON[_0x14dc7f(0x159)](_0x14b156[_0x3d0540]):[],_0x33a7aa=_0x2528c5['map'](_0x3fb1b7=>Number(_0x3fb1b7));break;case _0x14dc7f(0x1db):_0x33a7aa=_0x14b156[_0x3d0540]!==''?eval(_0x14b156[_0x3d0540]):null;break;case _0x14dc7f(0xfc):_0x2528c5=_0x14b156[_0x3d0540]!==''?JSON['parse'](_0x14b156[_0x3d0540]):[],_0x33a7aa=_0x2528c5[_0x14dc7f(0x231)](_0x5cee90=>eval(_0x5cee90));break;case _0x14dc7f(0x1fc):_0x33a7aa=_0x14b156[_0x3d0540]!==''?JSON[_0x14dc7f(0x159)](_0x14b156[_0x3d0540]):'';break;case _0x14dc7f(0x105):_0x2528c5=_0x14b156[_0x3d0540]!==''?JSON[_0x14dc7f(0x159)](_0x14b156[_0x3d0540]):[],_0x33a7aa=_0x2528c5[_0x14dc7f(0x231)](_0xf33a3a=>JSON[_0x14dc7f(0x159)](_0xf33a3a));break;case'FUNC':_0x33a7aa=_0x14b156[_0x3d0540]!==''?new Function(JSON[_0x14dc7f(0x159)](_0x14b156[_0x3d0540])):new Function(_0x14dc7f(0x104));break;case'ARRAYFUNC':_0x2528c5=_0x14b156[_0x3d0540]!==''?JSON[_0x14dc7f(0x159)](_0x14b156[_0x3d0540]):[],_0x33a7aa=_0x2528c5[_0x14dc7f(0x231)](_0x26e46d=>new Function(JSON[_0x14dc7f(0x159)](_0x26e46d)));break;case _0x14dc7f(0x2b8):_0x33a7aa=_0x14b156[_0x3d0540]!==''?String(_0x14b156[_0x3d0540]):'';break;case _0x14dc7f(0x217):_0x2528c5=_0x14b156[_0x3d0540]!==''?JSON['parse'](_0x14b156[_0x3d0540]):[],_0x33a7aa=_0x2528c5[_0x14dc7f(0x231)](_0x4d6d9a=>String(_0x4d6d9a));break;case _0x14dc7f(0x211):_0x9f373e=_0x14b156[_0x3d0540]!==''?JSON[_0x14dc7f(0x159)](_0x14b156[_0x3d0540]):{},_0x33a7aa=VisuMZ[_0x14dc7f(0xce)]({},_0x9f373e);break;case _0x14dc7f(0x22a):_0x2528c5=_0x14b156[_0x3d0540]!==''?JSON[_0x14dc7f(0x159)](_0x14b156[_0x3d0540]):[],_0x33a7aa=_0x2528c5[_0x14dc7f(0x231)](_0x510712=>VisuMZ[_0x14dc7f(0xce)]({},JSON[_0x14dc7f(0x159)](_0x510712)));break;default:continue;}_0x113a72[_0x466f61]=_0x33a7aa;}}return _0x113a72;},(_0x28ebae=>{const _0xafecba=_0x2f03b2,_0x2444e4=_0x28ebae[_0xafecba(0x121)];for(const _0x49f6fb of dependencies){if(!Imported[_0x49f6fb]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'['format'](_0x2444e4,_0x49f6fb)),SceneManager[_0xafecba(0xb3)]();break;}}const _0x266397=_0x28ebae['description'];if(_0x266397[_0xafecba(0x12e)](/\[Version[ ](.*?)\]/i)){const _0x58326b=Number(RegExp['$1']);if(_0x58326b!==VisuMZ[label][_0xafecba(0x17c)]){if(_0xafecba(0x21e)===_0xafecba(0x21e))alert(_0xafecba(0xcf)[_0xafecba(0x228)](_0x2444e4,_0x58326b)),SceneManager['exit']();else for(const _0x51bfd3 of _0xcca186[_0xafecba(0x2ad)]()){_0x9bbbbe[_0xafecba(0x26c)](_0x51bfd3[_0xafecba(0x1aa)]());}}}if(_0x266397[_0xafecba(0x12e)](/\[Tier[ ](\d+)\]/i)){if('ZCjdC'==='ZCjdC'){const _0x1cddbe=Number(RegExp['$1']);if(_0x1cddbe<tier)alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0xafecba(0x228)](_0x2444e4,_0x1cddbe,tier)),SceneManager[_0xafecba(0xb3)]();else{if(_0xafecba(0xb5)!==_0xafecba(0x176))tier=Math['max'](_0x1cddbe,tier);else{const _0x3639db=this[_0xafecba(0x1a0)](_0x3fe6c6);if(!_0x3639db)return this[_0xafecba(0x12b)](_0x38e2ef);const _0x5b1992=this[_0xafecba(0x1c9)](_0x29493d);this[_0xafecba(0x224)](_0x2ef2fc);const _0x65176f=0xa8,_0x5541d4=_0x57351b[_0xafecba(0x10b)]===0x1,_0x318fb3=_0x4ff8cb['iconWidth']*(_0x5541d4?0x2:0x1),_0x4eb7df=this[_0xafecba(0x1f0)]()+this[_0xafecba(0x282)](),_0x310e42=_0x5b1992[_0xafecba(0x1e5)]-_0x65176f,_0xd866b2=_0x5b1992['x']+_0x318fb3+_0x2904f3[_0xafecba(0x2b7)](_0x4eb7df,_0x310e42),_0x4a809d=_0x5541d4?![]:!![];this['changePaintOpacity'](_0x3639db['isFormationChangeOk']()),this[_0xafecba(0x1d1)](_0x3639db,_0x5b1992['x'],_0x5b1992['y'],_0x4a809d),this[_0xafecba(0x15e)](_0x3639db,_0xd866b2,_0x5b1992['y'],_0x65176f),this[_0xafecba(0xef)](!![]);}}}else this[_0xafecba(0x224)](_0x36dbf7),this['drawItemStatus'](_0x1e1f34);}VisuMZ[_0xafecba(0xce)](VisuMZ[label][_0xafecba(0x1d2)],_0x28ebae[_0xafecba(0x1ec)]);})(pluginData),PluginManager[_0x2f03b2(0xc0)](pluginData[_0x2f03b2(0x121)],'CallPartyScene',_0x1bccb8=>{const _0x36382a=_0x2f03b2;SceneManager[_0x36382a(0x1da)](Scene_Party);}),PluginManager[_0x2f03b2(0xc0)](pluginData[_0x2f03b2(0x121)],_0x2f03b2(0xf0),_0x3c7acf=>{const _0x2f87c8=_0x2f03b2;if($gameParty[_0x2f87c8(0x222)]())return;VisuMZ[_0x2f87c8(0xce)](_0x3c7acf,_0x3c7acf);const _0x106877=_0x3c7acf['Value'];$gameParty['changeMaxBattleMembers'](_0x106877);}),PluginManager[_0x2f03b2(0xc0)](pluginData[_0x2f03b2(0x121)],_0x2f03b2(0xec),_0x24dc9d=>{const _0x1ef999=_0x2f03b2;if(!SceneManager['isSceneMap']())return;VisuMZ[_0x1ef999(0xce)](_0x24dc9d,_0x24dc9d);const _0x107131=_0x24dc9d[_0x1ef999(0x1ad)];for(const _0x4ba0f of _0x107131){_0x1ef999(0xc5)!==_0x1ef999(0x28e)?$gameParty[_0x1ef999(0x259)](_0x4ba0f):this[_0x1ef999(0x263)]=0x0;}$gamePlayer[_0x1ef999(0x2a8)]();}),PluginManager[_0x2f03b2(0xc0)](pluginData[_0x2f03b2(0x121)],_0x2f03b2(0xcc),_0x17faf1=>{const _0x113b4e=_0x2f03b2;if(!SceneManager['isSceneMap']())return;VisuMZ[_0x113b4e(0xce)](_0x17faf1,_0x17faf1);const _0x3aee68=_0x17faf1[_0x113b4e(0x1ad)];for(const _0x5424d5 of _0x3aee68){if(_0x113b4e(0x182)===_0x113b4e(0x14e))return this[_0x113b4e(0x1a0)](this['index']());else{if($gameParty['battleMembers']()[_0x113b4e(0x2aa)]<=0x1)break;$gameParty['removeActorFromBattleMembers'](_0x5424d5);}}$gamePlayer['refresh']();}),PluginManager['registerCommand'](pluginData['name'],'MovePartyIndexToReserve',_0x554a90=>{const _0x154db0=_0x2f03b2;if(!SceneManager[_0x154db0(0x22d)]())return;if($gameParty[_0x154db0(0x28b)]()['length']<=0x1)return;if(!$gameParty[_0x154db0(0x26b)])return;if($gameParty[_0x154db0(0x26b)][_0x154db0(0x2aa)]<=0x0)return;VisuMZ[_0x154db0(0xce)](_0x554a90,_0x554a90);const _0x550e3f=_0x554a90[_0x154db0(0x1c0)],_0x2f36ae=$gameParty[_0x154db0(0x26b)][_0x550e3f];$gameParty['removeActorFromBattleMembers'](_0x2f36ae),$gamePlayer['refresh']();}),PluginManager[_0x2f03b2(0xc0)](pluginData[_0x2f03b2(0x121)],'MoveRandomToActive',_0x18a70c=>{const _0x2f4c91=_0x2f03b2;if(!SceneManager[_0x2f4c91(0x22d)]())return;if($gameParty[_0x2f4c91(0x28b)]()['length']>=$gameParty['maxBattleMembers']())return;if($gameParty[_0x2f4c91(0x162)]()[_0x2f4c91(0x2aa)]<=0x0)return;const _0x3c21cd=$gameParty[_0x2f4c91(0x162)](),_0x2ef318=_0x3c21cd[Math['floor'](Math[_0x2f4c91(0xab)]()*_0x3c21cd[_0x2f4c91(0x2aa)])],_0x494844=_0x2ef318['actorId']();$gameParty[_0x2f4c91(0x259)](_0x494844),$gamePlayer[_0x2f4c91(0x2a8)]();}),PluginManager['registerCommand'](pluginData[_0x2f03b2(0x121)],'LockPartyMembers',_0x8f5049=>{const _0x21d8ad=_0x2f03b2;VisuMZ[_0x21d8ad(0xce)](_0x8f5049,_0x8f5049);const _0x231842=_0x8f5049['Actors']['map'](_0x55ec4c=>$gameActors['actor'](_0x55ec4c))[_0x21d8ad(0x289)](null),_0x3ff096=_0x8f5049['Lock'];for(const _0xc593c8 of _0x231842){if(!_0xc593c8)continue;_0xc593c8[_0x21d8ad(0x10d)](_0x3ff096);}}),PluginManager['registerCommand'](pluginData['name'],_0x2f03b2(0x11a),_0x17eda8=>{const _0x2a3c6c=_0x2f03b2;VisuMZ['ConvertParams'](_0x17eda8,_0x17eda8);const _0x12a137=_0x17eda8[_0x2a3c6c(0x1ad)]['map'](_0x432756=>$gameActors[_0x2a3c6c(0x1a0)](_0x432756))[_0x2a3c6c(0x289)](null),_0x5dcf68=_0x17eda8[_0x2a3c6c(0x260)];for(const _0xc788a1 of _0x12a137){if(!_0xc788a1)continue;_0xc788a1[_0x2a3c6c(0x9e)](_0x5dcf68);}}),ImageManager['lockPartyMemberIcon']=VisuMZ[_0x2f03b2(0xbf)][_0x2f03b2(0x1d2)]['General'][_0x2f03b2(0x2ba)],ImageManager[_0x2f03b2(0x101)]=VisuMZ[_0x2f03b2(0xbf)][_0x2f03b2(0x1d2)][_0x2f03b2(0x142)][_0x2f03b2(0xeb)],TextManager[_0x2f03b2(0xda)]=VisuMZ[_0x2f03b2(0xbf)]['Settings'][_0x2f03b2(0x20a)][_0x2f03b2(0x291)],TextManager[_0x2f03b2(0x1bb)]=VisuMZ['PartySystem'][_0x2f03b2(0x1d2)][_0x2f03b2(0x20a)][_0x2f03b2(0x288)],TextManager[_0x2f03b2(0x2ab)]=VisuMZ[_0x2f03b2(0xbf)][_0x2f03b2(0x1d2)][_0x2f03b2(0x20a)][_0x2f03b2(0x28f)],TextManager['emptyPartyMember']=VisuMZ['PartySystem'][_0x2f03b2(0x1d2)][_0x2f03b2(0x20a)][_0x2f03b2(0xb9)],TextManager[_0x2f03b2(0x21b)]=VisuMZ[_0x2f03b2(0xbf)][_0x2f03b2(0x1d2)][_0x2f03b2(0x20a)]['Remove'],TextManager[_0x2f03b2(0x122)]=VisuMZ[_0x2f03b2(0xbf)][_0x2f03b2(0x1d2)]['Vocab'][_0x2f03b2(0x19f)],TextManager[_0x2f03b2(0x242)]=VisuMZ['PartySystem'][_0x2f03b2(0x1d2)][_0x2f03b2(0x20a)][_0x2f03b2(0xf7)],TextManager[_0x2f03b2(0x1a8)]=VisuMZ[_0x2f03b2(0xbf)]['Settings'][_0x2f03b2(0x20a)]['AssistSort'],TextManager[_0x2f03b2(0x1dc)]=VisuMZ[_0x2f03b2(0xbf)]['Settings'][_0x2f03b2(0x20a)][_0x2f03b2(0x2b6)],TextManager[_0x2f03b2(0x238)]=VisuMZ[_0x2f03b2(0xbf)][_0x2f03b2(0x1d2)]['Vocab'][_0x2f03b2(0x160)],ColorManager[_0x2f03b2(0x2b1)]=function(_0x484ec1){const _0x253a0c=_0x2f03b2;_0x484ec1=String(_0x484ec1);if(_0x484ec1[_0x253a0c(0x12e)](/#(.*)/i)){if('zFlHm'!==_0x253a0c(0xdf))return _0x253a0c(0x205)[_0x253a0c(0x228)](String(RegExp['$1']));else{if(_0x5656c7[_0x253a0c(0x1de)]()){if(this['_partyMemberSwitchWindow']&&this[_0x253a0c(0x285)][_0x253a0c(0x163)])return![];}return _0x13ac98[_0x253a0c(0xbf)]['Scene_Battle_isTimeActive']['call'](this);}}else{if(_0x253a0c(0x21f)!==_0x253a0c(0x21f)){if(!_0xc84bc8)return![];return _0x1036b7[_0x253a0c(0x2a7)]()&&_0x450e65[_0x253a0c(0x13f)]();}else return this[_0x253a0c(0x1f8)](Number(_0x484ec1));}},SceneManager[_0x2f03b2(0x1cd)]=function(){const _0x34561c=_0x2f03b2;return this[_0x34561c(0x195)]&&this[_0x34561c(0x195)][_0x34561c(0x141)]===Scene_Party;},SceneManager[_0x2f03b2(0x22d)]=function(){const _0x3fb63f=_0x2f03b2;return this[_0x3fb63f(0x195)]&&this[_0x3fb63f(0x195)][_0x3fb63f(0x141)]===Scene_Map;},VisuMZ[_0x2f03b2(0xbf)][_0x2f03b2(0x241)]=BattleManager[_0x2f03b2(0x172)],BattleManager['setup']=function(_0x5e4e01,_0xcf45b8,_0x59b924){const _0x12a68d=_0x2f03b2;VisuMZ[_0x12a68d(0xbf)]['BattleManager_setup'][_0x12a68d(0x1b8)](this,_0x5e4e01,_0xcf45b8,_0x59b924),$gameParty['clearPartyBattleCommandCooldown']();},VisuMZ[_0x2f03b2(0xbf)][_0x2f03b2(0x221)]=Game_Battler[_0x2f03b2(0x273)][_0x2f03b2(0x15d)],Game_Battler[_0x2f03b2(0x273)][_0x2f03b2(0x15d)]=function(_0x1798fb){const _0x3b7b52=_0x2f03b2;VisuMZ[_0x3b7b52(0xbf)][_0x3b7b52(0x221)][_0x3b7b52(0x1b8)](this,_0x1798fb);if(this['isActor']())this[_0x3b7b52(0x108)]();},VisuMZ[_0x2f03b2(0xbf)][_0x2f03b2(0x245)]=Game_Battler[_0x2f03b2(0x273)][_0x2f03b2(0x29f)],Game_Battler['prototype'][_0x2f03b2(0x29f)]=function(){const _0x424c62=_0x2f03b2;VisuMZ['PartySystem']['Game_Battler_regenerateAll'][_0x424c62(0x1b8)](this);if(this[_0x424c62(0xcb)]())this[_0x424c62(0x1b7)]();},VisuMZ[_0x2f03b2(0xbf)][_0x2f03b2(0x226)]=Game_Actor[_0x2f03b2(0x273)][_0x2f03b2(0x172)],Game_Actor[_0x2f03b2(0x273)][_0x2f03b2(0x172)]=function(_0x7c9c1e){const _0x3a494d=_0x2f03b2;VisuMZ[_0x3a494d(0xbf)]['Game_Actor_setup']['call'](this,_0x7c9c1e),this[_0x3a494d(0x270)](),this['clearPartySwitchCommandCooldown']();},Game_Actor[_0x2f03b2(0x273)]['initPartySystem']=function(){const _0x3bc5b9=_0x2f03b2;this[_0x3bc5b9(0xae)]=![],this['_partyRequired']=![];},Game_Actor[_0x2f03b2(0x273)]['isFormationChangeOk']=function(){const _0x4bbf21=_0x2f03b2;if(this[_0x4bbf21(0xae)]===undefined)this['initPartySystem']();return!this[_0x4bbf21(0xae)];},Game_Actor[_0x2f03b2(0x273)][_0x2f03b2(0x10d)]=function(_0x40f4c9){const _0x213521=_0x2f03b2;if(this[_0x213521(0xae)]===undefined)this[_0x213521(0x270)]();this[_0x213521(0xae)]=_0x40f4c9;},Game_Actor[_0x2f03b2(0x273)][_0x2f03b2(0xe0)]=function(){const _0x24e750=_0x2f03b2;if(this[_0x24e750(0x174)]===undefined)this[_0x24e750(0x270)]();return this[_0x24e750(0x174)];},Game_Actor[_0x2f03b2(0x273)][_0x2f03b2(0x9e)]=function(_0x4a8908){const _0x4445a6=_0x2f03b2;if(this[_0x4445a6(0x174)]===undefined)this[_0x4445a6(0x270)]();this['_partyRequired']=_0x4a8908;},Game_Actor[_0x2f03b2(0x273)][_0x2f03b2(0x108)]=function(){const _0x57a13b=_0x2f03b2;this[_0x57a13b(0x263)]=0x0;},Game_Actor[_0x2f03b2(0x273)]['canSwitchPartyInBattle']=function(){const _0x404a90=_0x2f03b2;if(this[_0x404a90(0x263)]===undefined)this[_0x404a90(0x108)]();if(!this['isFormationChangeOk']())return![];if(this[_0x404a90(0xe0)]())return![];return this['_partySwitchBattleCommandCooldown']<=0x0;},Game_Actor['prototype']['battlePartySwitchCooldown']=function(){const _0x1b7b5f=_0x2f03b2;if(this[_0x1b7b5f(0x263)]===undefined)this['clearPartySwitchCommandCooldown']();return this[_0x1b7b5f(0x263)];},Game_Actor[_0x2f03b2(0x273)][_0x2f03b2(0x185)]=function(_0x99ef6f){const _0x1c4d99=_0x2f03b2;if(this[_0x1c4d99(0x263)]===undefined)this['clearPartySwitchCommandCooldown']();this[_0x1c4d99(0x263)]=_0x99ef6f||0x0;},Game_Actor[_0x2f03b2(0x273)][_0x2f03b2(0x1f6)]=function(){const _0x1e07da=_0x2f03b2;if(this[_0x1e07da(0x263)]===undefined)this[_0x1e07da(0x108)]();const _0x486be3=VisuMZ[_0x1e07da(0xbf)]['Settings'][_0x1e07da(0x142)][_0x1e07da(0x151)];this['setBattlePartySwitchCooldown'](_0x486be3);},Game_Actor[_0x2f03b2(0x273)][_0x2f03b2(0x1b7)]=function(){const _0x291c29=_0x2f03b2;if(this['_partySwitchBattleCommandCooldown']===undefined)this[_0x291c29(0x108)]();this['_partySwitchBattleCommandCooldown']--;},Game_Actor[_0x2f03b2(0x273)][_0x2f03b2(0x18f)]=function(_0x46b460){const _0x4580af=_0x2f03b2;if(Imported['VisuMZ_2_BattleSystemCTB']&&BattleManager[_0x4580af(0x135)]()){if(_0x4580af(0x298)!==_0x4580af(0x13e))BattleManager[_0x4580af(0xc3)]();else{const _0x2a819e=this[_0x4580af(0x149)]();this[_0x4580af(0x285)]=new _0x53af6d(_0x2a819e),this[_0x4580af(0x297)](this[_0x4580af(0x285)]),this[_0x4580af(0x285)]['setHandler']('ok',this[_0x4580af(0x279)][_0x4580af(0x1d6)](this)),this[_0x4580af(0x285)][_0x4580af(0x2a6)](_0x4580af(0x193),this['onPartySwitchCancel']['bind'](this));}}Imported[_0x4580af(0x158)]&&BattleManager[_0x4580af(0x2b5)]()&&(BattleManager[_0x4580af(0x11b)](),BattleManager['_subject']=this,BattleManager[_0x4580af(0x123)]=this);if(Imported[_0x4580af(0x215)]&&BattleManager['isBTB']()){BattleManager[_0x4580af(0x28a)]=undefined,BattleManager[_0x4580af(0x123)]=this;const _0x1a21d2=BattleManager[_0x4580af(0x24f)][_0x4580af(0x1f1)](_0x46b460);BattleManager[_0x4580af(0x24f)][_0x1a21d2]=this,BattleManager['sortActionOrdersBTB']();}Imported['VisuMZ_2_BattleSystemFTB']&&BattleManager[_0x4580af(0x1fa)]()&&(BattleManager[_0x4580af(0x28a)]=this,BattleManager['_currentActor']=this);if(Imported[_0x4580af(0x24c)]&&BattleManager['isOTB']()){BattleManager['_subject']=this,BattleManager['_currentActor']=this;for(let _0x3bd3f1=0x0;_0x3bd3f1<BattleManager[_0x4580af(0x24f)][_0x4580af(0x2aa)];_0x3bd3f1++){const _0x3adc2a=BattleManager['_actionBattlers'][_0x3bd3f1];if(_0x3adc2a===_0x46b460){if(_0x4580af(0xbb)===_0x4580af(0xbb))BattleManager[_0x4580af(0x24f)][_0x3bd3f1]=this;else{this[_0x4580af(0x15a)]();const _0x2e7313=this['battleMembers']()[_0x4580af(0x1ac)](this[_0x4580af(0x162)]());this[_0x4580af(0xa5)]=_0x2e7313[_0x4580af(0x231)](_0x60b25=>_0x60b25?_0x60b25[_0x4580af(0x249)]():0x0)[_0x4580af(0x289)](0x0);}}}for(let _0x1332cb=0x0;_0x1332cb<BattleManager[_0x4580af(0x1b4)][_0x4580af(0x2aa)];_0x1332cb++){if('JaFvL'==='JaFvL'){const _0x49cb6d=BattleManager[_0x4580af(0x1b4)][_0x1332cb];_0x49cb6d===_0x46b460&&(BattleManager['_otb_actionBattlersNext'][_0x1332cb]=this);}else _0x345100[_0x4580af(0x273)][_0x4580af(0x19c)]['call'](this,_0x5cae81),this[_0x4580af(0x1a7)](_0x775e2);}}},VisuMZ['PartySystem'][_0x2f03b2(0x10a)]=Game_Unit[_0x2f03b2(0x273)][_0x2f03b2(0x222)],Game_Unit[_0x2f03b2(0x273)][_0x2f03b2(0x222)]=function(){const _0x5552e2=_0x2f03b2;if(SceneManager[_0x5552e2(0x1cd)]())return![];return VisuMZ[_0x5552e2(0xbf)][_0x5552e2(0x10a)][_0x5552e2(0x1b8)](this);},Game_Party[_0x2f03b2(0x1a3)]=VisuMZ[_0x2f03b2(0xbf)][_0x2f03b2(0x1d2)][_0x2f03b2(0x142)]['MaxBattleMembers'],VisuMZ[_0x2f03b2(0xbf)]['Game_Party_initialize']=Game_Party['prototype'][_0x2f03b2(0x19c)],Game_Party['prototype'][_0x2f03b2(0x19c)]=function(){const _0xca8db4=_0x2f03b2;VisuMZ[_0xca8db4(0xbf)]['Game_Party_initialize'][_0xca8db4(0x1b8)](this),this['clearPartyBattleCommandCooldown'](),this[_0xca8db4(0x173)](),this['initBattleMembers']();},Game_Party[_0x2f03b2(0x273)][_0x2f03b2(0x184)]=function(){const _0x402f91=_0x2f03b2;this[_0x402f91(0xfd)]=0x0;},Game_Party[_0x2f03b2(0x273)][_0x2f03b2(0x17a)]=function(){const _0x1d56c9=_0x2f03b2;if(this['_partySystemBattleCommandCooldown']===undefined)this[_0x1d56c9(0x184)]();return this[_0x1d56c9(0xfd)]<=0x0;},Game_Party[_0x2f03b2(0x273)][_0x2f03b2(0x156)]=function(){const _0x5c1295=_0x2f03b2;if(this[_0x5c1295(0xfd)]===undefined)this[_0x5c1295(0x184)]();return this[_0x5c1295(0xfd)];},Game_Party[_0x2f03b2(0x273)][_0x2f03b2(0x185)]=function(_0x2b2cca){const _0x81adef=_0x2f03b2;if(this['_partySystemBattleCommandCooldown']===undefined)this[_0x81adef(0x184)]();this['_partySystemBattleCommandCooldown']=_0x2b2cca;},Game_Party[_0x2f03b2(0x273)][_0x2f03b2(0x1f6)]=function(){const _0x176879=_0x2f03b2;if(this['_partySystemBattleCommandCooldown']===undefined)this['clearPartyBattleCommandCooldown']();this[_0x176879(0xfd)]=VisuMZ[_0x176879(0xbf)][_0x176879(0x1d2)][_0x176879(0x142)][_0x176879(0x11f)]||0x0;},Game_Party[_0x2f03b2(0x273)]['updateBattlePartySwitchCooldown']=function(){const _0xebdc8c=_0x2f03b2;if(this['_partySystemBattleCommandCooldown']===undefined)this[_0xebdc8c(0x184)]();this['_partySystemBattleCommandCooldown']--;},Game_Party[_0x2f03b2(0x273)]['initMaxBattleMembers']=function(){const _0x20a694=_0x2f03b2;this[_0x20a694(0x2a2)]=0x0;},Game_Party[_0x2f03b2(0x273)]['changeMaxBattleMembers']=function(_0x211a6f){const _0x1dc00f=_0x2f03b2;this[_0x1dc00f(0x2a2)]=_0x211a6f,this[_0x1dc00f(0xff)](!![]);if($gamePlayer&&$gamePlayer[_0x1dc00f(0x287)]()){if(_0x1dc00f(0xd7)===_0x1dc00f(0x167)){if(!this[_0x1dc00f(0x2bd)])return![];return _0x5d2572[_0x1dc00f(0xbf)][_0x1dc00f(0x1d2)][_0x1dc00f(0x142)]['ActorCmdWinAddParty'];}else $gamePlayer[_0x1dc00f(0x287)]()['changeMaxBattleMembers']();}},Game_Followers[_0x2f03b2(0x273)][_0x2f03b2(0x140)]=function(){const _0x33ce56=_0x2f03b2;if(!SceneManager[_0x33ce56(0x22d)]())return;this[_0x33ce56(0x172)]();const _0x283f4d=$gameMap['mapId'](),_0x31be7a=$gamePlayer['x'],_0x3d455b=$gamePlayer['y'],_0x42ac2d=$gamePlayer[_0x33ce56(0x1ff)]();$gameTemp[_0x33ce56(0x14c)]=!![],$gamePlayer['reserveTransfer'](_0x283f4d,_0x31be7a,_0x3d455b,_0x42ac2d,0x0),setTimeout(this['clearBypassAutoSave']['bind'](this),0x7d0);},Game_Followers[_0x2f03b2(0x273)]['clearBypassAutoSave']=function(){const _0x256a84=_0x2f03b2;$gameTemp[_0x256a84(0x14c)]=![];},VisuMZ[_0x2f03b2(0xbf)][_0x2f03b2(0x22f)]=Scene_Base[_0x2f03b2(0x273)][_0x2f03b2(0x10e)],Scene_Base[_0x2f03b2(0x273)]['isAutosaveEnabled']=function(){const _0x41773f=_0x2f03b2;if($gameTemp[_0x41773f(0x14c)])return![];return VisuMZ['PartySystem'][_0x41773f(0x22f)][_0x41773f(0x1b8)](this);},Game_Party['prototype'][_0x2f03b2(0xac)]=function(){const _0x2a38c5=_0x2f03b2;if(this[_0x2a38c5(0x2a2)]===undefined)this['initBattleMembers']();return this[_0x2a38c5(0x2a2)]||Game_Party['defaultMaxBattleMembers'];},Game_Party['prototype'][_0x2f03b2(0x15a)]=function(){const _0x5a5d45=_0x2f03b2;if(this[_0x5a5d45(0x2a2)]===undefined)this[_0x5a5d45(0xff)]();if(!this[_0x5a5d45(0x26b)])this[_0x5a5d45(0xff)]();while(this[_0x5a5d45(0x26b)][_0x5a5d45(0x2aa)]<this[_0x5a5d45(0x2a2)]){this['_battleMembers']['push'](0x0);}},Game_Party[_0x2f03b2(0x273)][_0x2f03b2(0xff)]=function(_0x35b368){const _0x200325=_0x2f03b2;if(!_0x35b368){if(_0x200325(0x20e)!==_0x200325(0x2b9))this[_0x200325(0x2a2)]=Game_Party['defaultMaxBattleMembers'];else{if(this[_0x200325(0x285)]&&this['_partyMemberSwitchWindow'][_0x200325(0x163)])return!![];if(this['_partySystemSwitchOut'])return!![];if(this[_0x200325(0x11c)])return!![];if(this['_callSceneParty'])return!![];return _0x25d448['PartySystem'][_0x200325(0x22e)][_0x200325(0x1b8)](this);}}this['_battleMembers']=this[_0x200325(0xa5)]['slice'](0x0,this[_0x200325(0x2a2)]);while(this[_0x200325(0x26b)][_0x200325(0x2aa)]<this[_0x200325(0x2a2)]){_0x200325(0x13b)!==_0x200325(0x13b)?(_0x3c8c22[_0x200325(0x273)][_0x200325(0x16b)][_0x200325(0x1b8)](this),_0x5dee5c['partyChangeRefresh']()):this['_battleMembers'][_0x200325(0x1da)](0x0);}if($gamePlayer)$gamePlayer['refresh']();},Game_Party[_0x2f03b2(0x273)][_0x2f03b2(0x28b)]=function(){const _0x5e722e=_0x2f03b2;return this['rawBattleMembers']()[_0x5e722e(0x134)](_0x3be3cd=>!!_0x3be3cd);},Game_Party[_0x2f03b2(0x273)][_0x2f03b2(0xfa)]=function(){const _0x4a5c22=_0x2f03b2;this[_0x4a5c22(0x15a)]();const _0xd64c56=this[_0x4a5c22(0x26b)][_0x4a5c22(0x231)](_0x2edf95=>$gameActors['actor'](_0x2edf95));return SceneManager[_0x4a5c22(0x1cd)]()?_0xd64c56:_0xd64c56[_0x4a5c22(0x134)](_0x69eac0=>_0x69eac0&&_0x69eac0[_0x4a5c22(0x236)]());},Game_Party['prototype'][_0x2f03b2(0x162)]=function(){const _0x4d9f66=_0x2f03b2,_0x4773c1=this[_0x4d9f66(0x28b)]();return this[_0x4d9f66(0x2ad)]()[_0x4d9f66(0x134)](_0x3ad60a=>!_0x4773c1[_0x4d9f66(0x1d3)](_0x3ad60a));},VisuMZ['PartySystem'][_0x2f03b2(0x107)]=Game_Party[_0x2f03b2(0x273)][_0x2f03b2(0x210)],Game_Party[_0x2f03b2(0x273)][_0x2f03b2(0x210)]=function(){const _0x10a384=_0x2f03b2;VisuMZ[_0x10a384(0xbf)][_0x10a384(0x107)][_0x10a384(0x1b8)](this),this[_0x10a384(0xff)]();},VisuMZ[_0x2f03b2(0xbf)][_0x2f03b2(0x294)]=Game_Party[_0x2f03b2(0x273)]['setupBattleTest'],Game_Party[_0x2f03b2(0x273)]['setupBattleTest']=function(){const _0x719e93=_0x2f03b2;VisuMZ[_0x719e93(0xbf)][_0x719e93(0x294)][_0x719e93(0x1b8)](this),this['addNonBattleTestMembers']();},Game_Party['prototype'][_0x2f03b2(0x1d4)]=function(){const _0x6d8ac9=_0x2f03b2;this[_0x6d8ac9(0x2a2)]=Game_Party[_0x6d8ac9(0x1a3)],this['_battleMembers']=[],this[_0x6d8ac9(0xa5)]=[];for(const _0x305947 of $dataSystem[_0x6d8ac9(0xe1)]){const _0x50283f=$gameActors[_0x6d8ac9(0x1a0)](_0x305947[_0x6d8ac9(0x249)]);if(!_0x50283f)continue;_0x50283f[_0x6d8ac9(0x1df)](_0x305947[_0x6d8ac9(0x1cc)],![]),_0x50283f[_0x6d8ac9(0xfe)](_0x305947[_0x6d8ac9(0x1d8)]),_0x50283f[_0x6d8ac9(0x106)](),this[_0x6d8ac9(0x26b)]['push'](_0x305947[_0x6d8ac9(0x249)]),this[_0x6d8ac9(0xa5)][_0x6d8ac9(0x1da)](_0x305947[_0x6d8ac9(0x249)]);}while(this[_0x6d8ac9(0x26b)][_0x6d8ac9(0x2aa)]<this[_0x6d8ac9(0x2a2)]){this[_0x6d8ac9(0x26b)]['push'](0x0);}while(this[_0x6d8ac9(0x26b)][_0x6d8ac9(0x2aa)]>this[_0x6d8ac9(0xac)]()){this[_0x6d8ac9(0x26b)][_0x6d8ac9(0x16d)]();}if($gamePlayer)$gamePlayer[_0x6d8ac9(0x2a8)]();},Game_Party[_0x2f03b2(0x273)][_0x2f03b2(0x202)]=function(){const _0x24bc9b=_0x2f03b2,_0xacbda4=this[_0x24bc9b(0x28b)]();for(let _0x1d8604=0x1;_0x1d8604<$dataActors[_0x24bc9b(0x2aa)];_0x1d8604++){const _0x51880b=$gameActors[_0x24bc9b(0x1a0)](_0x1d8604);if(!_0x51880b)continue;if(_0x51880b[_0x24bc9b(0x121)]()[_0x24bc9b(0x2aa)]<=0x0)continue;if(_0x51880b[_0x24bc9b(0x121)]()[_0x24bc9b(0x12e)](/-----/i))continue;if(_0xacbda4[_0x24bc9b(0x1d3)](_0x51880b))continue;this['_actors'][_0x24bc9b(0x1da)](_0x51880b['actorId']());}},VisuMZ[_0x2f03b2(0xbf)][_0x2f03b2(0x186)]=Game_Party[_0x2f03b2(0x273)]['addActor'],Game_Party[_0x2f03b2(0x273)][_0x2f03b2(0x146)]=function(_0x2b79c4){const _0x55a781=_0x2f03b2;VisuMZ[_0x55a781(0xbf)][_0x55a781(0x186)]['call'](this,_0x2b79c4),this['addActorToBattleMembers'](_0x2b79c4),SceneManager['isSceneBattle']()&&(Imported['VisuMZ_2_BattleSystemOTB']&&BattleManager[_0x55a781(0x29d)]()&&(_0x55a781(0x1b6)===_0x55a781(0x283)?this[_0x55a781(0x18e)]():(BattleManager[_0x55a781(0x23c)](),BattleManager['otbReturnBattlerToTurnOrders']($gameActors[_0x55a781(0x1a0)](_0x2b79c4)))));},Game_Party[_0x2f03b2(0x273)][_0x2f03b2(0x259)]=function(_0x1177dd){const _0x53ff57=_0x2f03b2;this[_0x53ff57(0x15a)]();if(this[_0x53ff57(0x26b)][_0x53ff57(0x1d3)](_0x1177dd))return;if(!this[_0x53ff57(0xa5)][_0x53ff57(0x1d3)](_0x1177dd))return;if(!this[_0x53ff57(0x26b)][_0x53ff57(0x1d3)](0x0))return;const _0x27f447=$gameActors[_0x53ff57(0x1a0)](_0x1177dd);if(!_0x27f447)return;const _0x21817b=this[_0x53ff57(0x26b)][_0x53ff57(0x1f1)](0x0);if(_0x21817b<0x0)return;this[_0x53ff57(0x26b)][_0x21817b]=_0x1177dd,_0x27f447[_0x53ff57(0x16f)](),this['partyChangeRefresh']();},Game_Party[_0x2f03b2(0x273)]['addActorToBattleMembersAtIndex']=function(_0x55f7b3,_0x5f551c){const _0x2cd79d=_0x2f03b2;this[_0x2cd79d(0x15a)]();if(this[_0x2cd79d(0x26b)][_0x2cd79d(0x1d3)](_0x55f7b3))return;if(!this['_battleMembers'][_0x2cd79d(0x1d3)](0x0))return;const _0x447081=$gameActors[_0x2cd79d(0x1a0)](_0x55f7b3);if(!_0x447081)return;this[_0x2cd79d(0x26b)][_0x5f551c]=_0x55f7b3,_0x447081[_0x2cd79d(0x16f)](),this['partyChangeRefresh']();},VisuMZ[_0x2f03b2(0xbf)][_0x2f03b2(0x2a1)]=Game_Party[_0x2f03b2(0x273)][_0x2f03b2(0x1a6)],Game_Party[_0x2f03b2(0x273)][_0x2f03b2(0x1a6)]=function(_0x5a72fb){const _0x131c3c=_0x2f03b2;this[_0x131c3c(0x181)](_0x5a72fb),VisuMZ[_0x131c3c(0xbf)][_0x131c3c(0x2a1)][_0x131c3c(0x1b8)](this,_0x5a72fb);},Game_Party['prototype']['removeActorFromBattleMembers']=function(_0x56477f){const _0x17053d=_0x2f03b2;this[_0x17053d(0x15a)]();if(!this[_0x17053d(0x26b)][_0x17053d(0x1d3)](_0x56477f))return;if(_0x56477f<=0x0)return;const _0xa5d859=this[_0x17053d(0x26b)][_0x17053d(0x1f1)](_0x56477f);this[_0x17053d(0x26b)][_0xa5d859]=0x0,this[_0x17053d(0xa5)][_0x17053d(0x289)](_0x56477f),this[_0x17053d(0xa5)]['push'](_0x56477f),this[_0x17053d(0x17b)]();},Game_Party[_0x2f03b2(0x273)][_0x2f03b2(0x17b)]=function(){const _0x53cd97=_0x2f03b2;this[_0x53cd97(0x281)](),$gamePlayer[_0x53cd97(0x2a8)](),$gameMap['requestRefresh']();},Game_Party[_0x2f03b2(0x273)][_0x2f03b2(0x281)]=function(){const _0x1f215e=_0x2f03b2;this[_0x1f215e(0x15a)]();const _0x15f486=this['battleMembers']()[_0x1f215e(0x1ac)](this[_0x1f215e(0x162)]());this[_0x1f215e(0xa5)]=_0x15f486['map'](_0x405bd1=>_0x405bd1?_0x405bd1[_0x1f215e(0x249)]():0x0)[_0x1f215e(0x289)](0x0);},Game_Party[_0x2f03b2(0x273)][_0x2f03b2(0x19a)]=function(){const _0x2434b2=_0x2f03b2;this[_0x2434b2(0xa5)][_0x2434b2(0x268)]((_0x5504e3,_0x3a91c4)=>_0x5504e3-_0x3a91c4),this[_0x2434b2(0x281)](),this[_0x2434b2(0x17b)]();},Game_Party[_0x2f03b2(0x273)][_0x2f03b2(0x19b)]=function(){const _0x486dcb=_0x2f03b2;for(const _0x4be613 of this[_0x486dcb(0x162)]()){if(_0x486dcb(0x17e)===_0x486dcb(0x17e)){if(!_0x4be613)continue;if(_0x4be613[_0x486dcb(0xe0)]())return!![];}else return _0x3cb672[_0x486dcb(0x250)][_0x486dcb(0x1d2)][_0x486dcb(0x1dd)][_0x486dcb(0x196)];}return![];},VisuMZ[_0x2f03b2(0xbf)]['Game_Party_swapOrder']=Game_Party['prototype'][_0x2f03b2(0x27e)],Game_Party['prototype'][_0x2f03b2(0x27e)]=function(_0x327223,_0xfc733b){const _0x3a00b5=_0x2f03b2;VisuMZ['PartySystem'][_0x3a00b5(0x2af)][_0x3a00b5(0x1b8)](this,_0x327223,_0xfc733b),this[_0x3a00b5(0x212)](_0x327223,_0xfc733b);},Game_Party[_0x2f03b2(0x273)][_0x2f03b2(0x212)]=function(_0x18f78b,_0x32f263){const _0x52c388=_0x2f03b2;this[_0x52c388(0x26b)]=[];for(let _0x4591bc=0x0;_0x4591bc<this[_0x52c388(0xa5)][_0x52c388(0x2aa)];_0x4591bc++){if(this[_0x52c388(0x26b)][_0x52c388(0x2aa)]>=this['maxBattleMembers']()){if(_0x52c388(0x175)!=='PeXOi')break;else _0x5d1421[_0x52c388(0x273)][_0x52c388(0x117)][_0x52c388(0x1b8)](this),this[_0x52c388(0x237)]['_clickHandler']=_0x1abaa2,this['_pagedownButton'][_0x52c388(0x177)]=_0x21cc78;}this[_0x52c388(0x26b)][_0x4591bc]=this['_actors'][_0x4591bc];}$gamePlayer[_0x52c388(0x2a8)]();},VisuMZ[_0x2f03b2(0xbf)][_0x2f03b2(0x12a)]=Game_Troop['prototype']['increaseTurn'],Game_Troop[_0x2f03b2(0x273)][_0x2f03b2(0x27c)]=function(){const _0x31bc98=_0x2f03b2;VisuMZ[_0x31bc98(0xbf)][_0x31bc98(0x12a)][_0x31bc98(0x1b8)](this),$gameParty[_0x31bc98(0x1b7)]();},Scene_Menu[_0x2f03b2(0x273)][_0x2f03b2(0xcd)]=function(){const _0x5a5129=_0x2f03b2;SceneManager[_0x5a5129(0x1da)](Scene_Party);};function Scene_Party(){const _0x40f552=_0x2f03b2;this[_0x40f552(0x19c)](...arguments);}function _0x44ad(_0x1eb9c2,_0x14d391){return _0x44ad=function(_0x3a10dd,_0x44ad87){_0x3a10dd=_0x3a10dd-0x98;let _0x5eba8c=_0x3a10[_0x3a10dd];return _0x5eba8c;},_0x44ad(_0x1eb9c2,_0x14d391);}Scene_Party[_0x2f03b2(0x273)]=Object['create'](Scene_MenuBase[_0x2f03b2(0x273)]),Scene_Party[_0x2f03b2(0x273)][_0x2f03b2(0x141)]=Scene_Party,Scene_Party[_0x2f03b2(0x273)][_0x2f03b2(0x19c)]=function(){const _0x27b99f=_0x2f03b2;this[_0x27b99f(0x131)](),Scene_MenuBase[_0x27b99f(0x273)][_0x27b99f(0x19c)][_0x27b99f(0x1b8)](this);},Scene_Party[_0x2f03b2(0x273)][_0x2f03b2(0xb0)]=function(){const _0x48f018=_0x2f03b2;if(ConfigManager[_0x48f018(0x115)]&&ConfigManager[_0x48f018(0x12f)]!==undefined)return ConfigManager[_0x48f018(0x12f)];else{if(ConfigManager[_0x48f018(0x115)]===![])return _0x48f018(0x1fb)!=='PRqVP'?![]:this[_0x48f018(0xfa)]()[_0x48f018(0x134)](_0x5ebfee=>!!_0x5ebfee);else{if(_0x48f018(0x118)==='ummoy')return Scene_MenuBase[_0x48f018(0x273)][_0x48f018(0xb0)][_0x48f018(0x1b8)](this);else{if(this['_statusWindow'])this[_0x48f018(0x124)]['setActor'](this['actor'](this[_0x48f018(0xaf)]()));}}}},Scene_Party[_0x2f03b2(0x273)]['helpAreaHeight']=function(){return 0x0;},Scene_Party[_0x2f03b2(0x273)]['needsPageButtons']=function(){return!![];},Scene_Party[_0x2f03b2(0x273)]['createPageButtons']=function(){const _0x2c94f3=_0x2f03b2;Scene_MenuBase[_0x2c94f3(0x273)][_0x2c94f3(0x117)]['call'](this),this[_0x2c94f3(0x237)][_0x2c94f3(0x177)]=undefined,this[_0x2c94f3(0x28c)]['_clickHandler']=undefined;},Scene_Party[_0x2f03b2(0x273)][_0x2f03b2(0x131)]=function(){const _0x16a7ec=_0x2f03b2;for(const _0x136d2c of $gameParty['members']()){ImageManager[_0x16a7ec(0x26c)](_0x136d2c[_0x16a7ec(0x1aa)]()),ImageManager['loadCharacter'](_0x136d2c[_0x16a7ec(0x25c)]()),ImageManager[_0x16a7ec(0xe7)](_0x136d2c[_0x16a7ec(0x16e)]());}},Scene_Party[_0x2f03b2(0x273)]['create']=function(){const _0xdc7359=_0x2f03b2;Scene_MenuBase[_0xdc7359(0x273)][_0xdc7359(0x296)][_0xdc7359(0x1b8)](this),this['createActivePartyLabel'](),this['createActivePartyWindow'](),this[_0xdc7359(0x227)](),this[_0xdc7359(0x171)](),this['createStatusLabel'](),this['createStatusWindow']();},Scene_Party['prototype'][_0x2f03b2(0x27f)]=function(){const _0x3f1509=_0x2f03b2,_0x2ade42=this[_0x3f1509(0x191)]();this[_0x3f1509(0x170)]=new Window_PartyLabel(_0x2ade42,TextManager[_0x3f1509(0xda)]),this[_0x3f1509(0x170)][_0x3f1509(0x1d9)](VisuMZ[_0x3f1509(0xbf)][_0x3f1509(0x1d2)][_0x3f1509(0xa7)]['ActivePartyLabelBgType']),this['addWindow'](this['_activePartyLabel']);},Scene_Party[_0x2f03b2(0x273)]['activePartyLabelRect']=function(){const _0x2e77bb=_0x2f03b2;return VisuMZ[_0x2e77bb(0xbf)][_0x2e77bb(0x1d2)][_0x2e77bb(0xa7)][_0x2e77bb(0x255)][_0x2e77bb(0x1b8)](this);},Scene_Party[_0x2f03b2(0x273)][_0x2f03b2(0xb1)]=function(){const _0x29e2f4=_0x2f03b2,_0x433bdd=this['activePartyWindowRect']();this[_0x29e2f4(0x1c4)]=new Window_PartyActive(_0x433bdd),this[_0x29e2f4(0x1c4)][_0x29e2f4(0x1d9)](VisuMZ[_0x29e2f4(0xbf)][_0x29e2f4(0x1d2)][_0x29e2f4(0xa7)]['ActivePartyWindowBgType']),this[_0x29e2f4(0x1c4)][_0x29e2f4(0x2a6)]('ok',this[_0x29e2f4(0x23a)][_0x29e2f4(0x1d6)](this)),this[_0x29e2f4(0x1c4)]['setHandler']('cancel',this[_0x29e2f4(0x25f)][_0x29e2f4(0x1d6)](this)),this[_0x29e2f4(0x297)](this['_activePartyWindow']);},Scene_Party[_0x2f03b2(0x273)][_0x2f03b2(0x1f5)]=function(){const _0x3e7091=_0x2f03b2;return VisuMZ[_0x3e7091(0xbf)][_0x3e7091(0x1d2)][_0x3e7091(0xa7)][_0x3e7091(0xf6)][_0x3e7091(0x1b8)](this);},Scene_Party[_0x2f03b2(0x273)][_0x2f03b2(0x23a)]=function(){const _0x2e67f5=_0x2f03b2;this[_0x2e67f5(0xd8)]['activate'](),this[_0x2e67f5(0xd8)][_0x2e67f5(0xb8)]();},Scene_Party[_0x2f03b2(0x273)][_0x2f03b2(0x227)]=function(){const _0x38163d=_0x2f03b2,_0x47e378=this['reservePartyLabelRect']();this['_reservePartyLabel']=new Window_PartyLabel(_0x47e378,TextManager['reserveParty']),this[_0x38163d(0xd0)][_0x38163d(0x1d9)](VisuMZ['PartySystem']['Settings'][_0x38163d(0xa7)]['ReservePartyLabelBgType']),this[_0x38163d(0x297)](this[_0x38163d(0xd0)]);},Scene_Party['prototype'][_0x2f03b2(0x1bd)]=function(){const _0x37a29b=_0x2f03b2;return VisuMZ[_0x37a29b(0xbf)][_0x37a29b(0x1d2)][_0x37a29b(0xa7)][_0x37a29b(0x252)][_0x37a29b(0x1b8)](this);},Scene_Party[_0x2f03b2(0x273)][_0x2f03b2(0x171)]=function(){const _0x57470c=_0x2f03b2,_0x4f98c6=this[_0x57470c(0x17d)]();this[_0x57470c(0xd8)]=new Window_PartyReserve(_0x4f98c6),this[_0x57470c(0xd8)][_0x57470c(0x1d9)](VisuMZ[_0x57470c(0xbf)][_0x57470c(0x1d2)][_0x57470c(0xa7)][_0x57470c(0x1fd)]),this[_0x57470c(0xd8)][_0x57470c(0x2a6)]('ok',this[_0x57470c(0xf9)][_0x57470c(0x1d6)](this)),this[_0x57470c(0xd8)][_0x57470c(0x2a6)]('cancel',this[_0x57470c(0x24b)]['bind'](this)),this[_0x57470c(0x297)](this['_reservePartyWindow']);},Scene_Party[_0x2f03b2(0x273)][_0x2f03b2(0x17d)]=function(){const _0x31f5c9=_0x2f03b2;return VisuMZ[_0x31f5c9(0xbf)][_0x31f5c9(0x1d2)][_0x31f5c9(0xa7)]['ReservePartyWindowRect'][_0x31f5c9(0x1b8)](this);},Scene_Party[_0x2f03b2(0x273)][_0x2f03b2(0xf9)]=function(){const _0x4f204c=_0x2f03b2,_0x308b33=this[_0x4f204c(0xd8)][_0x4f204c(0xa2)](),_0x239053=this[_0x4f204c(0x1c4)]['currentActor']();if(_0x308b33<0x0){if(_0x239053)$gameParty[_0x4f204c(0x181)](_0x239053['actorId']());}else{const _0x1f1368=this[_0x4f204c(0xd8)][_0x4f204c(0x253)]()[_0x4f204c(0x249)](),_0x56afbe=this[_0x4f204c(0x1c4)][_0x4f204c(0xaf)]();if(_0x239053)$gameParty[_0x4f204c(0x181)](_0x239053['actorId']());$gameParty[_0x4f204c(0x240)](_0x1f1368,_0x56afbe);}this[_0x4f204c(0x25a)](),this['onReserveCancel']();},Scene_Party[_0x2f03b2(0x273)]['refreshAllWindows']=function(){const _0x14f9c4=_0x2f03b2;this[_0x14f9c4(0x1c4)]['refresh'](),this[_0x14f9c4(0xd8)]['refresh']();},Scene_Party['prototype'][_0x2f03b2(0x24b)]=function(){const _0xee225f=_0x2f03b2;this[_0xee225f(0xd8)][_0xee225f(0xde)](),this['_reservePartyWindow'][_0xee225f(0xdb)](),this[_0xee225f(0x1c4)][_0xee225f(0x23d)]();},Scene_Party[_0x2f03b2(0x273)][_0x2f03b2(0x2b0)]=function(){const _0x3c8326=_0x2f03b2,_0x391372=this[_0x3c8326(0x147)]();this[_0x3c8326(0x2bc)]=new Window_PartyLabel(_0x391372,TextManager[_0x3c8326(0x2ab)]),this[_0x3c8326(0x2bc)][_0x3c8326(0x1d9)](VisuMZ[_0x3c8326(0xbf)][_0x3c8326(0x1d2)][_0x3c8326(0xa7)]['StatusLabelBgType']),this[_0x3c8326(0x297)](this[_0x3c8326(0x2bc)]);},Scene_Party[_0x2f03b2(0x273)][_0x2f03b2(0x147)]=function(){const _0x49816a=_0x2f03b2;return VisuMZ[_0x49816a(0xbf)]['Settings']['Window'][_0x49816a(0x17f)][_0x49816a(0x1b8)](this);},Scene_Party[_0x2f03b2(0x273)]['createStatusWindow']=function(){const _0x35935b=_0x2f03b2,_0x129d3d=this[_0x35935b(0x1a1)]();this['_statusPartyWindow']=new Window_PartyStatus(_0x129d3d),this['_statusPartyWindow'][_0x35935b(0x1d9)](VisuMZ[_0x35935b(0xbf)][_0x35935b(0x1d2)]['Window'][_0x35935b(0x271)]),this[_0x35935b(0x297)](this['_statusPartyWindow']),this['_reservePartyWindow']['setStatusWindow'](this[_0x35935b(0x272)]),this[_0x35935b(0x1c4)][_0x35935b(0x218)](this[_0x35935b(0x272)]);},Scene_Party[_0x2f03b2(0x273)][_0x2f03b2(0x1a1)]=function(){const _0x3a54d9=_0x2f03b2;return VisuMZ[_0x3a54d9(0xbf)][_0x3a54d9(0x1d2)][_0x3a54d9(0xa7)]['StatusWindowRect'][_0x3a54d9(0x1b8)](this);},Scene_Party[_0x2f03b2(0x273)][_0x2f03b2(0xd5)]=function(){const _0x2bc4b9=_0x2f03b2;return TextManager[_0x2bc4b9(0xa0)]('shift');},Scene_Party[_0x2f03b2(0x273)][_0x2f03b2(0xbe)]=function(){return TextManager['assistSwapPositions'];},Scene_Party[_0x2f03b2(0x273)][_0x2f03b2(0x23e)]=function(){const _0x256551=_0x2f03b2,_0x4686e5=this[_0x256551(0x1c4)],_0x370988=this[_0x256551(0xd8)];if(_0x4686e5&&_0x4686e5[_0x256551(0x163)]&&_0x4686e5[_0x256551(0x253)]()&&_0x4686e5[_0x256551(0x113)]())return TextManager[_0x256551(0x242)];else{if(_0x370988&&_0x370988['active']&&$gameParty[_0x256551(0x162)]()[_0x256551(0x2aa)]>0x0){if(_0x256551(0x26d)===_0x256551(0x26d))return TextManager['assistSortPartyMembers'];else _0x39b474[_0x256551(0x24c)]&&_0x399bd8['isOTB']()&&(_0x43561b[_0x256551(0x23c)](),_0x4ce988[_0x256551(0x18a)](_0x486f41[_0x256551(0x1a0)](_0x44d22d)));}else return'';}},Scene_Party['prototype']['buttonAssistText4']=function(){const _0x53d7f8=_0x2f03b2;if(this[_0x53d7f8(0x1c4)]&&this[_0x53d7f8(0x1c4)][_0x53d7f8(0x163)]){if(_0x53d7f8(0x27b)==='WFMBy'){const _0x4969b8=this[_0x53d7f8(0x1bd)]();this[_0x53d7f8(0xd0)]=new _0xa1ab2d(_0x4969b8,_0x2fec36[_0x53d7f8(0x1bb)]),this['_reservePartyLabel'][_0x53d7f8(0x1d9)](_0x20b919[_0x53d7f8(0xbf)][_0x53d7f8(0x1d2)][_0x53d7f8(0xa7)][_0x53d7f8(0x219)]),this['addWindow'](this[_0x53d7f8(0xd0)]);}else return TextManager[_0x53d7f8(0x238)];}else{if(this[_0x53d7f8(0xd8)]&&this[_0x53d7f8(0xd8)][_0x53d7f8(0x163)]){if(_0x53d7f8(0x198)===_0x53d7f8(0x198))return TextManager[_0x53d7f8(0x1dc)];else this[_0x53d7f8(0xd4)]=this[_0x53d7f8(0xd4)]||0x0,this[_0x53d7f8(0xd4)]--,this[_0x53d7f8(0xd4)]<=0x0&&this[_0x53d7f8(0x2a0)](this['_partySwitchTargetActor']);}else return Scene_MenuBase[_0x53d7f8(0x273)][_0x53d7f8(0x192)][_0x53d7f8(0x1b8)](this);}},Scene_Party['prototype'][_0x2f03b2(0x1e8)]=function(){const _0x2e9c8c=_0x2f03b2;Scene_MenuBase[_0x2e9c8c(0x273)][_0x2e9c8c(0x1e8)][_0x2e9c8c(0x1b8)](this),this[_0x2e9c8c(0x25b)](this[_0x2e9c8c(0x103)]()),this['createCustomBackgroundImages']();},Scene_Party[_0x2f03b2(0x273)][_0x2f03b2(0x103)]=function(){const _0x2699a6=_0x2f03b2;return VisuMZ[_0x2699a6(0xbf)]['Settings'][_0x2699a6(0x13d)][_0x2699a6(0xc8)];},Scene_Party[_0x2f03b2(0x273)][_0x2f03b2(0x1f2)]=function(){const _0x2860e7=_0x2f03b2,_0x15f374={'BgFilename1':VisuMZ['PartySystem'][_0x2860e7(0x1d2)][_0x2860e7(0x13d)][_0x2860e7(0x178)],'BgFilename2':VisuMZ[_0x2860e7(0xbf)][_0x2860e7(0x1d2)][_0x2860e7(0x13d)][_0x2860e7(0x256)]};_0x15f374&&(_0x15f374[_0x2860e7(0x178)]!==''||_0x15f374[_0x2860e7(0x256)]!=='')&&(this[_0x2860e7(0x261)]=new Sprite(ImageManager[_0x2860e7(0x1e3)](_0x15f374[_0x2860e7(0x178)])),this[_0x2860e7(0xa8)]=new Sprite(ImageManager['loadTitle2'](_0x15f374[_0x2860e7(0x256)])),this[_0x2860e7(0x2b3)](this[_0x2860e7(0x261)]),this[_0x2860e7(0x2b3)](this[_0x2860e7(0xa8)]),this[_0x2860e7(0x261)][_0x2860e7(0x265)][_0x2860e7(0x119)](this['adjustSprite'][_0x2860e7(0x1d6)](this,this[_0x2860e7(0x261)])),this[_0x2860e7(0xa8)][_0x2860e7(0x265)][_0x2860e7(0x119)](this[_0x2860e7(0x154)][_0x2860e7(0x1d6)](this,this['_backSprite2'])));},Scene_Party['prototype'][_0x2f03b2(0x154)]=function(_0x313a23){const _0x5a1422=_0x2f03b2;this[_0x5a1422(0x179)](_0x313a23),this[_0x5a1422(0x130)](_0x313a23);},Scene_Party['prototype'][_0x2f03b2(0x16b)]=function(){const _0x4eefe0=_0x2f03b2;Scene_MenuBase[_0x4eefe0(0x273)][_0x4eefe0(0x16b)][_0x4eefe0(0x1b8)](this),$gameParty[_0x4eefe0(0x17b)]();},Window_StatusBase['prototype'][_0x2f03b2(0x1d1)]=function(_0x3342aa,_0x46ff71,_0x416172,_0xbbaa9a){const _0x27ebb3=_0x2f03b2;if(!_0x3342aa)return;_0xbbaa9a?this[_0x27ebb3(0x164)](_0x3342aa,_0x46ff71,_0x416172):this['drawActorPartyIconsHorz'](_0x3342aa,_0x46ff71,_0x416172);},Window_StatusBase['prototype']['drawActorPartyIconsHorz']=function(_0x335757,_0x306f87,_0x2fd75d){const _0x49fdf6=_0x2f03b2;_0x2fd75d+=Math[_0x49fdf6(0x230)]((this[_0x49fdf6(0xb2)]()-ImageManager[_0x49fdf6(0x1f9)])/0x2),!_0x335757['isFormationChangeOk']()&&(this[_0x49fdf6(0x1e0)](ImageManager['lockPartyMemberIcon'],_0x306f87,_0x2fd75d),_0x306f87+=ImageManager['iconWidth']+0x4),_0x335757[_0x49fdf6(0xe0)]()&&('prVQU'===_0x49fdf6(0x11e)?(this[_0x49fdf6(0x1e0)](ImageManager[_0x49fdf6(0x101)],_0x306f87,_0x2fd75d),_0x306f87+=ImageManager[_0x49fdf6(0xa4)]+0x4):(_0x24cece[_0x49fdf6(0xbf)][_0x49fdf6(0x21c)][_0x49fdf6(0x1b8)](this),this['_actorCommandWindow'][_0x49fdf6(0x2a6)](_0x49fdf6(0x12c),this[_0x49fdf6(0x29b)][_0x49fdf6(0x1d6)](this))));},Window_StatusBase[_0x2f03b2(0x273)][_0x2f03b2(0x164)]=function(_0x3de559,_0x308fa0,_0x438fbe){const _0x19d2bb=_0x2f03b2;let _0x2f1943=0x0;if(!_0x3de559['isFormationChangeOk']())_0x2f1943+=0x1;if(_0x3de559['isRequiredInParty']())_0x2f1943+=0x1;if(_0x2f1943<=0x1)return this[_0x19d2bb(0xf1)](_0x3de559,_0x308fa0,_0x438fbe);_0x438fbe+=Math[_0x19d2bb(0x230)]((this['lineHeight']()-ImageManager[_0x19d2bb(0x1f9)])/0x2),_0x438fbe-=Math['round'](this[_0x19d2bb(0xb2)]()/0x2),this[_0x19d2bb(0x1e0)](ImageManager[_0x19d2bb(0xea)],_0x308fa0,_0x438fbe),_0x438fbe+=this['lineHeight'](),this[_0x19d2bb(0x1e0)](ImageManager[_0x19d2bb(0x101)],_0x308fa0,_0x438fbe);};function Window_PartyLabel(){const _0x4a7e27=_0x2f03b2;this[_0x4a7e27(0x19c)](...arguments);}Window_PartyLabel['prototype']=Object[_0x2f03b2(0x296)](Window_Base[_0x2f03b2(0x273)]),Window_PartyLabel[_0x2f03b2(0x273)][_0x2f03b2(0x141)]=Window_PartyLabel,Window_PartyLabel['prototype'][_0x2f03b2(0x19c)]=function(_0x3ee10b,_0x36f920){const _0x225a31=_0x2f03b2;Window_Base[_0x225a31(0x273)][_0x225a31(0x19c)][_0x225a31(0x1b8)](this,_0x3ee10b),this[_0x225a31(0x1a7)](_0x36f920);},Window_PartyLabel[_0x2f03b2(0x273)][_0x2f03b2(0x168)]=function(){const _0x464f6e=_0x2f03b2;this[_0x464f6e(0x189)]=0x0;},Window_PartyLabel[_0x2f03b2(0x273)]['setText']=function(_0x2fb9a2){const _0x31f7c5=_0x2f03b2;this['contents'][_0x31f7c5(0xe4)](),this[_0x31f7c5(0xb6)](_0x2fb9a2,0x0,0x0,this['innerWidth'],_0x31f7c5(0x197));};function Window_PartyActive(){const _0xd56874=_0x2f03b2;this[_0xd56874(0x19c)](...arguments);}Window_PartyActive['prototype']=Object[_0x2f03b2(0x296)](Window_StatusBase[_0x2f03b2(0x273)]),Window_PartyActive[_0x2f03b2(0x273)][_0x2f03b2(0x141)]=Window_PartyActive,Window_PartyActive['_actorGraphic']=VisuMZ[_0x2f03b2(0xbf)][_0x2f03b2(0x1d2)][_0x2f03b2(0xa7)][_0x2f03b2(0x278)],Window_PartyActive[_0x2f03b2(0x273)]['initialize']=function(_0xafbc82){const _0x36b5ab=_0x2f03b2;Window_StatusBase[_0x36b5ab(0x273)]['initialize'][_0x36b5ab(0x1b8)](this,_0xafbc82),this[_0x36b5ab(0x2a8)](),this[_0x36b5ab(0x23d)](),this[_0x36b5ab(0x206)](0x0);},Window_PartyActive['prototype'][_0x2f03b2(0x18c)]=function(){const _0x3f823f=_0x2f03b2;return VisuMZ[_0x3f823f(0xbf)][_0x3f823f(0x1d2)][_0x3f823f(0x142)][_0x3f823f(0x194)];},Window_PartyActive[_0x2f03b2(0x273)][_0x2f03b2(0x128)]=function(){const _0x26ed32=_0x2f03b2;return $gameParty[_0x26ed32(0xac)]();},Window_PartyActive[_0x2f03b2(0x273)]['maxCols']=function(){const _0x4c55b5=_0x2f03b2;return $gameParty[_0x4c55b5(0xac)]();},Window_PartyActive[_0x2f03b2(0x273)][_0x2f03b2(0x129)]=function(){const _0x44d673=_0x2f03b2;return this[_0x44d673(0xbc)];},Window_PartyActive['prototype']['actor']=function(_0x1be795){return $gameParty['rawBattleMembers']()[_0x1be795];},Window_PartyActive['prototype'][_0x2f03b2(0x253)]=function(){const _0xf2699=_0x2f03b2;return this['actor'](this[_0xf2699(0xaf)]());},Window_PartyActive['prototype'][_0x2f03b2(0x152)]=function(){const _0x1060e1=_0x2f03b2,_0xfc5087=this[_0x1060e1(0x1a0)](this[_0x1060e1(0xaf)]());return _0xfc5087?_0xfc5087[_0x1060e1(0x2a7)]():!![];},Window_PartyActive[_0x2f03b2(0x273)][_0x2f03b2(0x14b)]=function(){const _0xa95d5d=_0x2f03b2;if($gameParty[_0xa95d5d(0x157)]()[_0xa95d5d(0x2aa)]<=0x0)return!![];if($gameParty[_0xa95d5d(0x19b)]())return![];return $gameParty[_0xa95d5d(0x28b)]()['length']>0x0;},Window_PartyActive[_0x2f03b2(0x273)][_0x2f03b2(0x150)]=function(){const _0x5832ce=_0x2f03b2;Window_StatusBase[_0x5832ce(0x273)]['processCursorMove'][_0x5832ce(0x1b8)](this),this[_0x5832ce(0x248)]();},Window_PartyActive['prototype']['cursorDown']=function(_0xeeb5b){const _0x1e1052=_0x2f03b2;if(this[_0x1e1052(0x1b3)]()){if('xHkHD'==='IyVTs')return _0x513076[_0x1e1052(0x295)]&&_0x1f3261[_0x1e1052(0x14f)]['includes']('['+_0x482d78+']');else this['processOk']();}},Window_PartyActive[_0x2f03b2(0x273)]['cursorPagedown']=function(){const _0x1cdd57=_0x2f03b2,_0x45515e=this[_0x1cdd57(0xaf)](),_0x337a81=_0x45515e+0x1>=this['maxItems']()?0x0:_0x45515e+0x1;this[_0x1cdd57(0xa9)](_0x45515e,_0x337a81);},Window_PartyActive[_0x2f03b2(0x273)][_0x2f03b2(0x27d)]=function(){const _0x33d75c=_0x2f03b2,_0x242ca0=this[_0x33d75c(0xaf)](),_0x4ec480=_0x242ca0-0x1<0x0?this['maxItems']()-0x1:_0x242ca0-0x1;this[_0x33d75c(0xa9)](_0x242ca0,_0x4ec480);},Window_PartyActive[_0x2f03b2(0x273)][_0x2f03b2(0xa9)]=function(_0x373b90,_0x303f93){const _0x5769c2=_0x2f03b2,_0x3feabf=this[_0x5769c2(0x1a0)](_0x373b90),_0x53907e=this[_0x5769c2(0x1a0)](_0x303f93);if(_0x3feabf&&!_0x3feabf[_0x5769c2(0x2a7)]())return;if(_0x53907e&&!_0x53907e['isFormationChangeOk']())return;const _0x2cd4b6=$gameParty[_0x5769c2(0x26b)];_0x2cd4b6[_0x373b90]=_0x53907e?_0x53907e[_0x5769c2(0x249)]():0x0,_0x2cd4b6[_0x303f93]=_0x3feabf?_0x3feabf['actorId']():0x0,this[_0x5769c2(0x2a8)](),this[_0x5769c2(0x204)](),this['smoothSelect'](_0x303f93);},Window_PartyActive['prototype'][_0x2f03b2(0x248)]=function(){const _0x290cb6=_0x2f03b2;if(!this[_0x290cb6(0x113)]())return;if(Input[_0x290cb6(0xfb)](_0x290cb6(0x225))){const _0x9b2e89=this[_0x290cb6(0x253)]();this[_0x290cb6(0x190)]();}},Window_PartyActive[_0x2f03b2(0x273)][_0x2f03b2(0x190)]=function(){const _0x328f0f=_0x2f03b2;SoundManager[_0x328f0f(0xf3)]();const _0x47dc40=this[_0x328f0f(0x253)]();$gameParty[_0x328f0f(0x181)](_0x47dc40[_0x328f0f(0x249)]()),this[_0x328f0f(0x169)](),SceneManager['_scene'][_0x328f0f(0x25a)]();},Window_PartyActive['prototype']['isShiftRemoveShortcutEnabled']=function(){const _0x4dc716=_0x2f03b2;if(!this[_0x4dc716(0x18c)]())return![];const _0x4bfde7=this[_0x4dc716(0x253)]();return this[_0x4dc716(0x163)]&&_0x4bfde7&&_0x4bfde7[_0x4dc716(0x2a7)]();},Window_PartyActive[_0x2f03b2(0x273)]['drawItem']=function(_0x54041c){const _0x30301b=_0x2f03b2,_0x2e35cd=this[_0x30301b(0x1a0)](_0x54041c);if(!_0x2e35cd)return this['drawItemEmpty'](_0x54041c);this[_0x30301b(0x2ac)]();const _0x41af6d=this[_0x30301b(0x1b9)](_0x54041c);this[_0x30301b(0x224)](_0x54041c);const _0x31e3d5=_0x41af6d['y']+_0x41af6d[_0x30301b(0xe9)]-this[_0x30301b(0xb2)]();this[_0x30301b(0x23f)](_0x41af6d['x'],_0x31e3d5,_0x41af6d[_0x30301b(0x1e5)],0x2),this['drawActorPartyIcons'](_0x2e35cd,_0x41af6d['x']+0x2,_0x41af6d['y']),this[_0x30301b(0x15e)](_0x2e35cd,_0x41af6d['x'],_0x31e3d5,_0x41af6d[_0x30301b(0x1e5)]);},Window_PartyActive[_0x2f03b2(0x273)][_0x2f03b2(0x14d)]=function(_0x53f5a9){const _0x65e00b=_0x2f03b2;this[_0x65e00b(0x2ac)]();const _0x135703=this[_0x65e00b(0x1b9)](_0x53f5a9);this[_0x65e00b(0x293)](_0x135703['x'],_0x135703['y'],_0x135703[_0x65e00b(0x1e5)],_0x135703['height']);const _0x2dd0b5=_0x135703['y']+Math[_0x65e00b(0x230)]((_0x135703[_0x65e00b(0xe9)]-this[_0x65e00b(0xb2)]())/0x2);this['changeTextColor'](ColorManager[_0x65e00b(0x139)]()),this[_0x65e00b(0xb6)](TextManager['emptyPartyMember'],_0x135703['x'],_0x2dd0b5,_0x135703[_0x65e00b(0x1e5)],_0x65e00b(0x197));},Window_PartyActive[_0x2f03b2(0x273)][_0x2f03b2(0x293)]=function(_0x1fe96e,_0xf0096f,_0x2f828e,_0xf4a8cb,_0x28441b){const _0x2ac3db=_0x2f03b2;_0x28441b=Math[_0x2ac3db(0x243)](_0x28441b||0x1,0x1);while(_0x28441b--){if(_0x2ac3db(0x1ab)!=='uMjjC')return 0x0;else{_0xf4a8cb=_0xf4a8cb||this[_0x2ac3db(0xb2)](),this[_0x2ac3db(0x21a)]['paintOpacity']=0xa0;const _0x3968bb=ColorManager[_0x2ac3db(0xe3)]();this[_0x2ac3db(0x21a)]['fillRect'](_0x1fe96e+0x1,_0xf0096f+0x1,_0x2f828e-0x2,_0xf4a8cb-0x2,_0x3968bb),this[_0x2ac3db(0x21a)]['paintOpacity']=0xff;}}},Window_PartyActive[_0x2f03b2(0x273)][_0x2f03b2(0x224)]=function(_0x4abd89){const _0x2add40=_0x2f03b2;switch(Window_PartyActive[_0x2add40(0x2b4)][_0x2add40(0x21d)]()[_0x2add40(0x145)]()){case _0x2add40(0x251):this[_0x2add40(0xb4)](_0x4abd89);break;case _0x2add40(0xd9):this[_0x2add40(0x1c6)](_0x4abd89);break;case _0x2add40(0x26a):Imported['VisuMZ_1_MainMenuCore']&&this['drawItemImageSvActor'](_0x4abd89);break;};},Window_PartyActive['prototype']['drawItemImageFace']=function(_0x3ecc00){const _0x2354dd=_0x2f03b2,_0x486ca1=this['actor'](_0x3ecc00),_0x407b33=this[_0x2354dd(0x1b9)](_0x3ecc00),_0x2c112f=Math[_0x2354dd(0x2b7)](ImageManager[_0x2354dd(0xa6)],_0x407b33[_0x2354dd(0x1e5)]-0x2),_0x4e3ceb=_0x407b33['height']-0x2;this['changePaintOpacity'](_0x486ca1[_0x2354dd(0x2a7)]());const _0x4e3588=Math[_0x2354dd(0x230)](_0x407b33['x']+(_0x407b33[_0x2354dd(0x1e5)]-_0x2c112f)/0x2);this[_0x2354dd(0x138)](_0x486ca1,_0x4e3588,_0x407b33['y']+0x1,_0x2c112f,_0x4e3ceb),this['changePaintOpacity'](!![]);},Window_PartyActive['prototype']['drawItemImageSprite']=function(_0x422e70){const _0x1fb426=_0x2f03b2,_0x1dce49=this[_0x1fb426(0x1a0)](_0x422e70),_0x329418=this[_0x1fb426(0x1b9)](_0x422e70),_0xf3ff48=VisuMZ[_0x1fb426(0xbf)][_0x1fb426(0x1d2)][_0x1fb426(0xa7)],_0x1853ee=_0x329418['x']+Math['round'](_0x329418[_0x1fb426(0x1e5)]/0x2)+_0xf3ff48[_0x1fb426(0x1af)],_0x4c7f04=_0x329418['y']+_0x329418[_0x1fb426(0xe9)]-this[_0x1fb426(0xb2)]()-_0xf3ff48['ActiveSpriteOffsetY'];this[_0x1fb426(0x1f3)](_0x1dce49,_0x1853ee,_0x4c7f04);},Window_PartyActive[_0x2f03b2(0x273)]['drawItemImageSvActor']=function(_0x50be49){const _0x3670c6=_0x2f03b2,_0x1a0009=this['actor'](_0x50be49),_0x9c8a3a=_0x1a0009['battlerName'](),_0x2bde05=this[_0x3670c6(0x1b9)](_0x50be49),_0x1b4a20=VisuMZ[_0x3670c6(0xbf)][_0x3670c6(0x1d2)][_0x3670c6(0xa7)],_0x4c5f93=_0x2bde05['x']+Math[_0x3670c6(0x230)](_0x2bde05[_0x3670c6(0x1e5)]/0x2)+_0x1b4a20['ActiveBattlerOffsetX'],_0x446453=_0x2bde05['y']+_0x2bde05[_0x3670c6(0xe9)]-this[_0x3670c6(0xb2)]()-_0x1b4a20[_0x3670c6(0x266)];this[_0x3670c6(0x20b)](_0x9c8a3a,_0x4c5f93,_0x446453);},Window_PartyActive[_0x2f03b2(0x273)][_0x2f03b2(0x23f)]=function(_0x1b93b8,_0x1ecfb5,_0x36f3d7,_0x2e59a6){const _0x5e9ea3=_0x2f03b2,_0x56b2e6=ColorManager[_0x5e9ea3(0x244)](),_0x3756ce=ColorManager[_0x5e9ea3(0xc1)](),_0x356cb1=_0x36f3d7/0x2,_0x33b251=this[_0x5e9ea3(0xb2)]();while(_0x2e59a6--){this['contents'][_0x5e9ea3(0x132)](_0x1b93b8,_0x1ecfb5,_0x356cb1,_0x33b251,_0x3756ce,_0x56b2e6),this[_0x5e9ea3(0x21a)]['gradientFillRect'](_0x1b93b8+_0x356cb1,_0x1ecfb5,_0x356cb1,_0x33b251,_0x56b2e6,_0x3756ce);}},Window_PartyActive[_0x2f03b2(0x273)][_0x2f03b2(0x15e)]=function(_0x580330,_0x86a14,_0x516bf3,_0x2ed842){const _0x448bd6=_0x2f03b2;_0x2ed842=_0x2ed842||0xa8,this[_0x448bd6(0x20c)](ColorManager['hpColor'](_0x580330)),this['drawText'](_0x580330[_0x448bd6(0x121)](),_0x86a14,_0x516bf3,_0x2ed842,_0x448bd6(0x197));},Window_PartyActive[_0x2f03b2(0x273)][_0x2f03b2(0x218)]=function(_0x4b0133){const _0x2c4765=_0x2f03b2;this['_statusWindow']=_0x4b0133,this[_0x2c4765(0x169)]();},Window_PartyActive['prototype'][_0x2f03b2(0x169)]=function(){const _0x3dad3a=_0x2f03b2;if(this[_0x3dad3a(0x124)])this[_0x3dad3a(0x124)][_0x3dad3a(0x22c)](this[_0x3dad3a(0x1a0)](this['index']()));};function Window_PartyReserve(){this['initialize'](...arguments);}Window_PartyReserve[_0x2f03b2(0x273)]=Object[_0x2f03b2(0x296)](Window_StatusBase[_0x2f03b2(0x273)]),Window_PartyReserve[_0x2f03b2(0x273)][_0x2f03b2(0x141)]=Window_PartyReserve,Window_PartyReserve[_0x2f03b2(0x2b4)]=VisuMZ[_0x2f03b2(0xbf)]['Settings'][_0x2f03b2(0xa7)][_0x2f03b2(0x1d7)],Window_PartyReserve['_rowThickness']=VisuMZ['PartySystem'][_0x2f03b2(0x1d2)][_0x2f03b2(0xa7)][_0x2f03b2(0x9f)],Window_PartyReserve['prototype'][_0x2f03b2(0x19c)]=function(_0x16d782){const _0x1839b9=_0x2f03b2;Window_StatusBase[_0x1839b9(0x273)]['initialize'][_0x1839b9(0x1b8)](this,_0x16d782),this['_lastIndex']=0x0,this['refresh']();},Window_PartyReserve[_0x2f03b2(0x273)]['maxCols']=function(){const _0x5bd414=_0x2f03b2;return VisuMZ[_0x5bd414(0xbf)][_0x5bd414(0x1d2)]['Window']['ReserveCol']||0x1;},Window_PartyReserve[_0x2f03b2(0x273)][_0x2f03b2(0x129)]=function(){const _0x56935c=_0x2f03b2;return this[_0x56935c(0xb2)]()*Window_PartyReserve['_rowThickness']+0x6;},Window_PartyReserve[_0x2f03b2(0x273)]['addRemoveCommand']=function(){const _0x34d935=_0x2f03b2;return VisuMZ[_0x34d935(0xbf)]['Settings']['General'][_0x34d935(0x194)];},Window_PartyReserve[_0x2f03b2(0x273)][_0x2f03b2(0x128)]=function(){const _0x431902=_0x2f03b2;let _0x7a21df=$gameParty[_0x431902(0x162)]()[_0x431902(0x2aa)];if(this[_0x431902(0x18c)]())_0x7a21df++;return _0x7a21df;},Window_PartyReserve[_0x2f03b2(0x273)][_0x2f03b2(0x1a0)]=function(_0x9c5f22){const _0x5d67e9=_0x2f03b2;return $gameParty[_0x5d67e9(0x162)]()[_0x9c5f22];},Window_PartyReserve[_0x2f03b2(0x273)][_0x2f03b2(0x253)]=function(){const _0x2f944f=_0x2f03b2;return this['actor'](this[_0x2f944f(0xaf)]());},Window_PartyReserve[_0x2f03b2(0x273)][_0x2f03b2(0xdc)]=function(){const _0x48f71d=_0x2f03b2;SoundManager[_0x48f71d(0xf3)]();},Window_PartyReserve[_0x2f03b2(0x273)][_0x2f03b2(0x152)]=function(){const _0x2a6c58=_0x2f03b2,_0xb1255e=this[_0x2a6c58(0x1a0)](this['index']());return _0xb1255e?_0xb1255e[_0x2a6c58(0x2a7)]():!![];},Window_PartyReserve[_0x2f03b2(0x273)][_0x2f03b2(0x150)]=function(){const _0x20a29e=_0x2f03b2;Window_StatusBase[_0x20a29e(0x273)][_0x20a29e(0x150)][_0x20a29e(0x1b8)](this),this['checkShiftSortShortcut']();},Window_PartyReserve['prototype'][_0x2f03b2(0x18d)]=function(_0xae2f1){const _0x3fd3f6=_0x2f03b2;this[_0x3fd3f6(0xaf)]()<=0x0?this[_0x3fd3f6(0x209)]():Window_StatusBase[_0x3fd3f6(0x273)][_0x3fd3f6(0x18d)][_0x3fd3f6(0x1b8)](this,_0xae2f1);},Window_PartyReserve[_0x2f03b2(0x273)]['cursorPagedown']=function(){const _0x3eb11f=_0x2f03b2,_0x49454f=this[_0x3eb11f(0xaf)](),_0x445015=_0x49454f+0x1>=this[_0x3eb11f(0x128)]()-0x1?0x0:_0x49454f+0x1;this['quickSwap'](_0x49454f,_0x445015);},Window_PartyReserve[_0x2f03b2(0x273)][_0x2f03b2(0x27d)]=function(){const _0x108af4=_0x2f03b2,_0x267c71=this['index'](),_0x59f67a=_0x267c71-0x1<0x0?this[_0x108af4(0x128)]()-0x2:_0x267c71-0x1;this[_0x108af4(0xa9)](_0x267c71,_0x59f67a);},Window_PartyReserve[_0x2f03b2(0x273)][_0x2f03b2(0xa9)]=function(_0x39e807,_0x432d1c){const _0x2ae723=_0x2f03b2,_0x1a648c=this[_0x2ae723(0x1a0)](_0x39e807),_0x1c58a=this[_0x2ae723(0x1a0)](_0x432d1c);if(!_0x1a648c?.[_0x2ae723(0x2a7)]()||!_0x1c58a?.['isFormationChangeOk']())return;else{if(!_0x1a648c||!_0x1c58a)return;}const _0x459bbf=$gameParty[_0x2ae723(0xa5)],_0x1dd54a=_0x459bbf['indexOf'](_0x1a648c[_0x2ae723(0x249)]()),_0x4f8e34=_0x459bbf[_0x2ae723(0x1f1)](_0x1c58a[_0x2ae723(0x249)]());_0x459bbf[_0x1dd54a]=_0x1c58a?_0x1c58a[_0x2ae723(0x249)]():0x0,_0x459bbf[_0x4f8e34]=_0x1a648c?_0x1a648c[_0x2ae723(0x249)]():0x0,this['refresh'](),this[_0x2ae723(0x204)](),this[_0x2ae723(0x206)](_0x432d1c);},Window_PartyReserve['prototype'][_0x2f03b2(0xd3)]=function(){const _0xf35da8=_0x2f03b2;if(!this['isShiftShortcutEnabled']())return;if(Input[_0xf35da8(0xfb)](_0xf35da8(0x225))){if(_0xf35da8(0x1bc)!==_0xf35da8(0x1bc)){_0x45ea5f[_0xf35da8(0xbf)]['Game_Battler_regenerateAll'][_0xf35da8(0x1b8)](this);if(this['isActor']())this[_0xf35da8(0x1b7)]();}else this[_0xf35da8(0x2a9)]();}},Window_PartyReserve[_0x2f03b2(0x273)][_0x2f03b2(0x2a9)]=function(){const _0x18e7fd=_0x2f03b2;SoundManager['playEquip'](),$gameParty[_0x18e7fd(0x19a)](),this['smoothSelect'](0x0),SceneManager['_scene'][_0x18e7fd(0x25a)]();},Window_PartyReserve[_0x2f03b2(0x273)][_0x2f03b2(0x12d)]=function(){return this['active'];},Window_PartyReserve[_0x2f03b2(0x273)][_0x2f03b2(0xa2)]=function(){const _0x2f33e1=_0x2f03b2,_0xa34388=this['currentActor']();return _0xa34388?_0xa34388[_0x2f33e1(0xaf)]():-0x1;},Window_PartyReserve['prototype'][_0x2f03b2(0x161)]=function(_0x300182){const _0x2f5097=_0x2f03b2;Window_StatusBase[_0x2f5097(0x273)]['select']['call'](this,_0x300182);if(_0x300182>=0x0)this[_0x2f5097(0x1c7)]=_0x300182;},Window_PartyReserve[_0x2f03b2(0x273)][_0x2f03b2(0xb8)]=function(){const _0xf820f8=_0x2f03b2;this[_0xf820f8(0x1c7)]=Math[_0xf820f8(0x2b7)](this[_0xf820f8(0x1c7)],this[_0xf820f8(0x128)]()-0x1),this['smoothSelect'](this[_0xf820f8(0x1c7)]),this[_0xf820f8(0x148)](!![]),this[_0xf820f8(0x24a)]=!![];},Window_PartyReserve[_0x2f03b2(0x273)][_0x2f03b2(0x257)]=function(_0x53a7e4){const _0x5f5309=_0x2f03b2,_0x66e503=this[_0x5f5309(0x1a0)](_0x53a7e4);if(!_0x66e503)return this[_0x5f5309(0x12b)](_0x53a7e4);const _0x48c414=this['itemLineRect'](_0x53a7e4);this[_0x5f5309(0x224)](_0x53a7e4);const _0x99c4c0=0xa8,_0x2a5322=Window_PartyReserve['_rowThickness']===0x1,_0x354b47=ImageManager[_0x5f5309(0xa4)]*(_0x2a5322?0x2:0x1),_0x260c5f=this[_0x5f5309(0x1f0)]()+this['itemPadding'](),_0x59c1ca=_0x48c414[_0x5f5309(0x1e5)]-_0x99c4c0,_0x281bc7=_0x48c414['x']+_0x354b47+Math['min'](_0x260c5f,_0x59c1ca),_0x42300f=_0x2a5322?![]:!![];this[_0x5f5309(0xef)](_0x66e503['isFormationChangeOk']()),this[_0x5f5309(0x1d1)](_0x66e503,_0x48c414['x'],_0x48c414['y'],_0x42300f),this[_0x5f5309(0x15e)](_0x66e503,_0x281bc7,_0x48c414['y'],_0x99c4c0),this[_0x5f5309(0xef)](!![]);},Window_PartyReserve['prototype'][_0x2f03b2(0x1f0)]=function(){const _0xe419f2=_0x2f03b2,_0x91fa4b=VisuMZ[_0xe419f2(0xbf)][_0xe419f2(0x1d2)][_0xe419f2(0xa7)];switch(Window_PartyReserve['_actorGraphic'][_0xe419f2(0x21d)]()[_0xe419f2(0x145)]()){case _0xe419f2(0x251):return ImageManager[_0xe419f2(0xa6)];case _0xe419f2(0xd9):return _0x91fa4b['ReserveSpriteOffsetX']*0x2;case'svbattler':return _0x91fa4b['ReserveBattlerOffsetX']*0x2;};},Window_PartyReserve[_0x2f03b2(0x273)][_0x2f03b2(0x12b)]=function(_0x587bae){const _0x489f89=_0x2f03b2,_0x110f60=this[_0x489f89(0x1c9)](_0x587bae);this[_0x489f89(0xef)](!![]);const _0x3448b2=TextManager[_0x489f89(0x21b)];this['drawText'](_0x3448b2,_0x110f60['x'],_0x110f60['y'],_0x110f60[_0x489f89(0x1e5)],_0x489f89(0x197));},Window_PartyReserve['prototype']['drawItemImage']=function(_0x2aa50f){const _0x2e9df5=_0x2f03b2;switch(Window_PartyReserve[_0x2e9df5(0x2b4)][_0x2e9df5(0x21d)]()[_0x2e9df5(0x145)]()){case _0x2e9df5(0x251):this['drawItemImageFace'](_0x2aa50f);break;case _0x2e9df5(0xd9):this[_0x2e9df5(0x1c6)](_0x2aa50f);break;case _0x2e9df5(0x26a):Imported['VisuMZ_1_MainMenuCore']&&this[_0x2e9df5(0xaa)](_0x2aa50f);break;};},Window_PartyReserve[_0x2f03b2(0x273)][_0x2f03b2(0xb4)]=function(_0x11713c){const _0x256da2=_0x2f03b2,_0x4439fb=this['actor'](_0x11713c),_0x3daa1e=this[_0x256da2(0x1b9)](_0x11713c),_0x5c93cf=Window_PartyReserve[_0x256da2(0x10b)]===0x1;_0x3daa1e['x']+=ImageManager[_0x256da2(0xa4)]*(_0x5c93cf?0x2:0x1);const _0x51310a=ImageManager['faceWidth'],_0xc42b04=_0x3daa1e[_0x256da2(0xe9)]-0x2;this[_0x256da2(0xef)](_0x4439fb[_0x256da2(0x2a7)]()),this[_0x256da2(0x138)](_0x4439fb,_0x3daa1e['x']+0x1,_0x3daa1e['y']+0x1,_0x51310a,_0xc42b04),this['changePaintOpacity'](!![]);},Window_PartyReserve[_0x2f03b2(0x273)][_0x2f03b2(0x1c6)]=function(_0x1b30d2){const _0xc33767=_0x2f03b2,_0x38eb6c=this[_0xc33767(0x1a0)](_0x1b30d2),_0x5f3a25=this[_0xc33767(0x1b9)](_0x1b30d2),_0x491cdc=Window_PartyReserve[_0xc33767(0x10b)]===0x1;_0x5f3a25['x']+=ImageManager[_0xc33767(0xa4)]*(_0x491cdc?0x2:0x1);const _0x2691c2=VisuMZ[_0xc33767(0xbf)][_0xc33767(0x1d2)]['Window'],_0x333d19=_0x5f3a25['x']+_0x2691c2[_0xc33767(0x258)]+this[_0xc33767(0x282)](),_0x2638fd=_0x5f3a25['y']+_0x5f3a25[_0xc33767(0xe9)]-_0x2691c2[_0xc33767(0x10f)];this[_0xc33767(0x1f3)](_0x38eb6c,_0x333d19,_0x2638fd);},Window_PartyReserve[_0x2f03b2(0x273)][_0x2f03b2(0xaa)]=function(_0x55c443){const _0x1c01df=_0x2f03b2,_0x97d5c2=this['actor'](_0x55c443),_0x4d48f8=_0x97d5c2[_0x1c01df(0x16e)](),_0x400f9d=this[_0x1c01df(0x1b9)](_0x55c443),_0x513224=Window_PartyReserve['_rowThickness']===0x1;_0x400f9d['x']+=ImageManager[_0x1c01df(0xa4)]*(_0x513224?0x2:0x1);const _0x46e122=VisuMZ[_0x1c01df(0xbf)][_0x1c01df(0x1d2)][_0x1c01df(0xa7)],_0x36e152=_0x400f9d['x']+_0x46e122[_0x1c01df(0xe5)]+this[_0x1c01df(0x282)](),_0x582a7f=_0x400f9d['y']+_0x400f9d[_0x1c01df(0xe9)]-_0x46e122['ReserveBattlerOffsetY'];this[_0x1c01df(0x20b)](_0x4d48f8,_0x36e152,_0x582a7f);},Window_PartyReserve[_0x2f03b2(0x273)]['setStatusWindow']=function(_0x1abced){const _0x1e714e=_0x2f03b2;this['_statusWindow']=_0x1abced,this[_0x1e714e(0x169)]();},Window_PartyReserve[_0x2f03b2(0x273)][_0x2f03b2(0x169)]=function(){const _0x213a1f=_0x2f03b2;this[_0x213a1f(0x124)]&&this[_0x213a1f(0x124)][_0x213a1f(0x22c)](this[_0x213a1f(0x1a0)](this[_0x213a1f(0xaf)]()));};function Window_PartyStatus(){const _0x5675ed=_0x2f03b2;this[_0x5675ed(0x19c)](...arguments);}Window_PartyStatus[_0x2f03b2(0x273)]=Object[_0x2f03b2(0x296)](Window_StatusBase['prototype']),Window_PartyStatus['prototype'][_0x2f03b2(0x141)]=Window_PartyStatus,Window_PartyStatus[_0x2f03b2(0x273)][_0x2f03b2(0x19c)]=function(_0x2deccf){const _0x3815d0=_0x2f03b2;this[_0x3815d0(0x2bd)]=null,Window_StatusBase['prototype'][_0x3815d0(0x19c)][_0x3815d0(0x1b8)](this,_0x2deccf);},Window_PartyStatus[_0x2f03b2(0x273)][_0x2f03b2(0x293)]=function(_0x92e221,_0x20ee6b,_0x490049,_0x131ef7,_0x39b354){const _0x51d4ee=_0x2f03b2;if(VisuMZ[_0x51d4ee(0xbf)][_0x51d4ee(0x1d2)]['General'][_0x51d4ee(0x292)]===![])return;_0x39b354=Math[_0x51d4ee(0x243)](_0x39b354||0x1,0x1);while(_0x39b354--){_0x131ef7=_0x131ef7||this[_0x51d4ee(0xb2)](),this['contents'][_0x51d4ee(0xc4)]=0xa0;const _0x5b446d=ColorManager[_0x51d4ee(0x180)]();this['contents'][_0x51d4ee(0xba)](_0x92e221+0x1,_0x20ee6b+0x1,_0x490049-0x2,_0x131ef7-0x2,_0x5b446d),this[_0x51d4ee(0x21a)][_0x51d4ee(0xc4)]=0xff;}},ColorManager['getPartySystemBackColor']=function(){const _0x4396e4=_0x2f03b2,_0x283055=VisuMZ['PartySystem'][_0x4396e4(0x1d2)][_0x4396e4(0x142)];let _0x1cb8bd=_0x283055[_0x4396e4(0x9b)]!==undefined?_0x283055[_0x4396e4(0x9b)]:0x13;return ColorManager['getColor'](_0x1cb8bd);},Window_PartyStatus[_0x2f03b2(0x273)][_0x2f03b2(0x22c)]=function(_0x5b9127){const _0xbe2cae=_0x2f03b2;if(this[_0xbe2cae(0x2bd)]===_0x5b9127)return;this[_0xbe2cae(0x2bd)]=_0x5b9127;if(_0x5b9127){if(_0xbe2cae(0x9c)!==_0xbe2cae(0x9c))for(const _0x1ef4d1 of _0x53ec45[_0xbe2cae(0x157)]()){_0x251919[_0xbe2cae(0x26c)](_0x1ef4d1[_0xbe2cae(0x1aa)]()),_0x45e57c['loadCharacter'](_0x1ef4d1['characterName']()),_0x31e6d1[_0xbe2cae(0xe7)](_0x1ef4d1[_0xbe2cae(0x16e)]());}else{const _0x2cfad3=ImageManager['loadFace'](_0x5b9127[_0xbe2cae(0x1aa)]());_0x2cfad3['addLoadListener'](this[_0xbe2cae(0x2a8)][_0xbe2cae(0x1d6)](this));}}else this[_0xbe2cae(0x2a8)]();},Window_PartyStatus['prototype'][_0x2f03b2(0x2a8)]=function(){const _0x1b872c=_0x2f03b2;Window_StatusBase[_0x1b872c(0x273)]['refresh'][_0x1b872c(0x1b8)](this),this[_0x1b872c(0x21a)]['clear'](),this[_0x1b872c(0x2ac)](),VisuMZ['PartySystem'][_0x1b872c(0x1d2)][_0x1b872c(0xa7)][_0x1b872c(0x239)][_0x1b872c(0x1b8)](this);},Window_PartyStatus[_0x2f03b2(0x273)][_0x2f03b2(0x284)]=function(){const _0x44d37c=_0x2f03b2;if(!this[_0x44d37c(0x2bd)]){if(_0x44d37c(0x199)!==_0x44d37c(0x199))this['_lastIndex']=_0x5d04e1['min'](this[_0x44d37c(0x1c7)],this[_0x44d37c(0x128)]()-0x1),this[_0x44d37c(0x206)](this[_0x44d37c(0x1c7)]),this[_0x44d37c(0x148)](!![]),this[_0x44d37c(0x24a)]=!![];else{this[_0x44d37c(0x293)](0x0,0x0,this[_0x44d37c(0xc6)],this['innerHeight']);const _0x4cacec=Math[_0x44d37c(0x230)]((this[_0x44d37c(0xbc)]-this[_0x44d37c(0xb2)]())/0x2);this[_0x44d37c(0x20c)](ColorManager['systemColor']()),this['drawText'](TextManager[_0x44d37c(0x24e)],0x0,_0x4cacec,this['innerWidth'],'center');return;}}this['drawActorFace'](this[_0x44d37c(0x2bd)],0x1,0x0,ImageManager[_0x44d37c(0xa6)],ImageManager[_0x44d37c(0x25e)]),this[_0x44d37c(0x1b1)](this[_0x44d37c(0x2bd)],ImageManager[_0x44d37c(0xa6)]+0x24,0x0);const _0x2b81c3=this[_0x44d37c(0xb2)](),_0x363613=this[_0x44d37c(0x102)](),_0xaa2586=Math['round'](this['innerWidth']/0x2),_0x5663d5=Math['ceil'](_0x363613[_0x44d37c(0x2aa)]/0x2)*_0x2b81c3,_0x20c20b=0x0;let _0x3b8833=0x0,_0x35e188=ImageManager[_0x44d37c(0x25e)]+_0x2b81c3/0x2;for(const _0x1feb72 of _0x363613){this['drawItemDarkRect'](_0x3b8833,_0x35e188,_0xaa2586,_0x2b81c3),this[_0x44d37c(0xee)](_0x1feb72,_0x3b8833,_0x35e188,_0xaa2586),this[_0x44d37c(0x1f7)](_0x1feb72,_0x3b8833,_0x35e188,_0xaa2586),_0x3b8833===_0x20c20b?_0x3b8833+=_0xaa2586:(_0x3b8833=_0x20c20b,_0x35e188+=_0x2b81c3);}},Window_PartyStatus[_0x2f03b2(0x273)][_0x2f03b2(0x102)]=function(){const _0x2cd0cb=_0x2f03b2;if(Imported['VisuMZ_0_CoreEngine'])return VisuMZ['CoreEngine'][_0x2cd0cb(0x1d2)][_0x2cd0cb(0x1dd)]['DisplayedParams'];else{if(_0x2cd0cb(0x14a)!==_0x2cd0cb(0x207))return[0x2,0x3,0x4,0x5,0x6,0x7];else{const _0x50aa8e=this['index'](),_0x285174=_0x50aa8e-0x1<0x0?this[_0x2cd0cb(0x128)]()-0x2:_0x50aa8e-0x1;this[_0x2cd0cb(0xa9)](_0x50aa8e,_0x285174);}}},Window_PartyStatus[_0x2f03b2(0x273)][_0x2f03b2(0xee)]=function(_0x3dd8bd,_0x241b27,_0x3761be,_0x100607){const _0x1d7901=_0x2f03b2,_0x9b93d2=this[_0x1d7901(0x282)]();_0x100607-=_0x9b93d2*0x2;if(Imported['VisuMZ_0_CoreEngine'])this[_0x1d7901(0x188)](_0x241b27+_0x9b93d2,_0x3761be,_0x100607,_0x3dd8bd,![]);else{const _0x176029=TextManager[_0x1d7901(0xf2)](_0x3dd8bd);this[_0x1d7901(0x20c)](ColorManager['systemColor']()),this[_0x1d7901(0xb6)](_0x176029,_0x241b27+_0x9b93d2,_0x3761be,_0x100607);}},Window_PartyStatus['prototype'][_0x2f03b2(0x1f7)]=function(_0x25bb32,_0x4647cb,_0x89bc2b,_0x98f231){const _0x2764e7=_0x2f03b2;this['resetFontSettings']();const _0x2d5ca6=this[_0x2764e7(0x282)](),_0x1bb083=this[_0x2764e7(0x2a3)](_0x25bb32);this[_0x2764e7(0xb6)](_0x1bb083,_0x4647cb+_0x2d5ca6,_0x89bc2b,_0x98f231-_0x2d5ca6*0x2,_0x2764e7(0x98));},Window_PartyStatus['prototype'][_0x2f03b2(0x2a3)]=function(_0x34c15f){const _0x941d5b=_0x2f03b2,_0x241070=this[_0x941d5b(0x2bd)];return Imported['VisuMZ_0_CoreEngine']?_0x241070[_0x941d5b(0x232)](_0x34c15f,!![]):_0x241070[_0x941d5b(0xf2)](_0x34c15f);};function Window_PartyBattleSwitch(){const _0x5d648f=_0x2f03b2;this[_0x5d648f(0x19c)](...arguments);}Window_PartyBattleSwitch[_0x2f03b2(0x273)]=Object[_0x2f03b2(0x296)](Window_StatusBase[_0x2f03b2(0x273)]),Window_PartyBattleSwitch['prototype'][_0x2f03b2(0x141)]=Window_PartyBattleSwitch,Window_PartyBattleSwitch[_0x2f03b2(0x273)]['initialize']=function(_0x52333c){const _0x5ced81=_0x2f03b2;Window_StatusBase['prototype'][_0x5ced81(0x19c)][_0x5ced81(0x1b8)](this,_0x52333c),this['setBackgroundType'](VisuMZ[_0x5ced81(0xbf)][_0x5ced81(0x1d2)]['Window']['BattleSwitchWindowBgType']),this['openness']=0x0;},Window_PartyBattleSwitch['prototype'][_0x2f03b2(0x2a5)]=function(){const _0x5661a0=_0x2f03b2;for(const _0x29279f of $gameParty[_0x5661a0(0x2ad)]()){_0x5661a0(0x1c1)!==_0x5661a0(0x1c1)?_0xb3f3b5['_actionBattlers'][_0x295e39]=this:ImageManager['loadFace'](_0x29279f['faceName']());}},Window_PartyBattleSwitch[_0x2f03b2(0x273)][_0x2f03b2(0x24d)]=function(){return 0x1;},Window_PartyBattleSwitch[_0x2f03b2(0x273)]['actor']=function(_0x25020b){return $gameParty['reserveMembers']()[_0x25020b];},Window_PartyBattleSwitch[_0x2f03b2(0x273)][_0x2f03b2(0x253)]=function(){const _0x17cc1c=_0x2f03b2;return this[_0x17cc1c(0x1a0)](this[_0x17cc1c(0xaf)]());},Window_PartyBattleSwitch[_0x2f03b2(0x273)][_0x2f03b2(0x129)]=function(){return this['lineHeight']()*0x2+0x8;},Window_PartyBattleSwitch[_0x2f03b2(0x273)][_0x2f03b2(0x128)]=function(){const _0x48cbf5=_0x2f03b2;return $gameParty['reserveMembers']()[_0x48cbf5(0x2aa)];},Window_PartyBattleSwitch[_0x2f03b2(0x273)][_0x2f03b2(0x23d)]=function(){const _0x125d0=_0x2f03b2;Window_StatusBase['prototype']['activate'][_0x125d0(0x1b8)](this),this[_0x125d0(0x1bf)](),this[_0x125d0(0x2a8)](),this[_0x125d0(0x206)](0x0);},Window_PartyBattleSwitch[_0x2f03b2(0x273)][_0x2f03b2(0xde)]=function(){const _0x3b9e6f=_0x2f03b2;Window_StatusBase[_0x3b9e6f(0x273)][_0x3b9e6f(0xde)][_0x3b9e6f(0x1b8)](this),this[_0x3b9e6f(0xc2)]();},Window_PartyBattleSwitch[_0x2f03b2(0x273)]['isCurrentItemEnabled']=function(){const _0xd556b0=_0x2f03b2;return this['isEnabled'](this[_0xd556b0(0x253)]());},Window_PartyBattleSwitch[_0x2f03b2(0x273)]['isEnabled']=function(_0x578b44){const _0x22fb2b=_0x2f03b2;if(!_0x578b44)return![];return _0x578b44[_0x22fb2b(0x2a7)]()&&_0x578b44['isAlive']();},Window_PartyBattleSwitch[_0x2f03b2(0x273)]['drawItem']=function(_0x3c54c9){const _0x446686=_0x2f03b2,_0x3ecd86=this[_0x446686(0x1a0)](_0x3c54c9);if(!_0x3ecd86)return;const _0x4b6292=ImageManager['loadFace'](_0x3ecd86['faceName']());_0x4b6292[_0x446686(0x119)](this[_0x446686(0x274)][_0x446686(0x1d6)](this,_0x3c54c9));},Window_PartyBattleSwitch[_0x2f03b2(0x273)][_0x2f03b2(0x274)]=function(_0x443b21){const _0x49437c=_0x2f03b2;this[_0x49437c(0x224)](_0x443b21),this[_0x49437c(0x275)](_0x443b21);},Window_PartyBattleSwitch['prototype'][_0x2f03b2(0x224)]=function(_0x38678d){const _0x550c63=_0x2f03b2,_0x5ce8de=this['actor'](_0x38678d),_0x5c9f34=this['itemRect'](_0x38678d);this['changePaintOpacity'](this[_0x550c63(0x1ae)](_0x5ce8de)),this[_0x550c63(0x138)](_0x5ce8de,_0x5c9f34['x']+0x1,_0x5c9f34['y']+0x1,ImageManager['faceWidth'],_0x5c9f34['height']-0x2),this[_0x550c63(0xef)](!![]);},Window_PartyBattleSwitch[_0x2f03b2(0x273)]['drawItemStatus']=function(_0x44ab3a){const _0x27d01f=_0x2f03b2,_0x4bf904=this[_0x27d01f(0x1a0)](_0x44ab3a),_0x56396d=this[_0x27d01f(0x23b)](_0x44ab3a),_0x264bea=_0x56396d['x']+ImageManager[_0x27d01f(0xa6)]+0x24,_0x190506=_0x264bea+0xb4;this[_0x27d01f(0xef)](this[_0x27d01f(0x1ae)](_0x4bf904)),this[_0x27d01f(0x15e)](_0x4bf904,_0x264bea,_0x56396d['y']),this[_0x27d01f(0x276)](_0x4bf904,_0x264bea,_0x56396d['y']+this[_0x27d01f(0xb2)]()),this['placeBasicGauges'](_0x4bf904,_0x190506,_0x56396d['y']),this[_0x27d01f(0xef)](!![]);};Imported[_0x2f03b2(0x15b)]&&(ImageManager[_0x2f03b2(0x1c2)]=VisuMZ['PartySystem'][_0x2f03b2(0x1d2)]['General'][_0x2f03b2(0x19d)]??0x4b,TextManager[_0x2f03b2(0x234)]=VisuMZ[_0x2f03b2(0xbf)][_0x2f03b2(0x1d2)]['Vocab'][_0x2f03b2(0x1b0)],TextManager['battlePartyChangeCmdHelp']=VisuMZ[_0x2f03b2(0xbf)]['Settings']['Vocab']['BattleHelpFormation'],TextManager['battlePartySwitchCmd']=VisuMZ[_0x2f03b2(0xbf)]['Settings'][_0x2f03b2(0x20a)][_0x2f03b2(0xbd)],TextManager[_0x2f03b2(0x1a9)]=VisuMZ[_0x2f03b2(0xbf)]['Settings']['Vocab'][_0x2f03b2(0x110)],TextManager[_0x2f03b2(0x299)]=VisuMZ['PartySystem'][_0x2f03b2(0x1d2)][_0x2f03b2(0x20a)][_0x2f03b2(0xe2)],VisuMZ[_0x2f03b2(0xbf)][_0x2f03b2(0x15f)]=SceneManager[_0x2f03b2(0xf5)],SceneManager[_0x2f03b2(0xf5)]=function(){const _0x5019a5=_0x2f03b2;if(SceneManager[_0x5019a5(0x1a2)](Scene_Party))return!![];return VisuMZ['PartySystem'][_0x5019a5(0x15f)][_0x5019a5(0x1b8)](this);},VisuMZ[_0x2f03b2(0xbf)][_0x2f03b2(0xa3)]=SceneManager[_0x2f03b2(0x1cf)],SceneManager['isNextSceneBattleTransitionable']=function(){const _0x3cb9e9=_0x2f03b2;if(SceneManager['isNextScene'](Scene_Party))return!![];return VisuMZ[_0x3cb9e9(0xbf)]['SceneManager_isNextSceneBattleTransitionable'][_0x3cb9e9(0x1b8)](this);},SceneManager[_0x2f03b2(0x22d)]=function(){const _0x3a18f8=_0x2f03b2;return this[_0x3a18f8(0x195)]&&this['_scene'][_0x3a18f8(0x141)]===Scene_Map;},VisuMZ[_0x2f03b2(0xbf)]['Scene_Battle_createAllWindows']=Scene_Battle[_0x2f03b2(0x273)][_0x2f03b2(0x233)],Scene_Battle[_0x2f03b2(0x273)][_0x2f03b2(0x233)]=function(){const _0x643cb7=_0x2f03b2;VisuMZ['PartySystem']['Scene_Battle_createAllWindows'][_0x643cb7(0x1b8)](this),this['createPartySwitchWindow'](),this[_0x643cb7(0xc7)](),this[_0x643cb7(0x1ed)]();},Scene_Battle[_0x2f03b2(0x273)][_0x2f03b2(0x166)]=function(){const _0x46bd5c=_0x2f03b2,_0x383307=this[_0x46bd5c(0x149)]();this[_0x46bd5c(0x285)]=new Window_PartyBattleSwitch(_0x383307),this['addWindow'](this[_0x46bd5c(0x285)]),this['_partyMemberSwitchWindow'][_0x46bd5c(0x2a6)]('ok',this['onPartySwitchOk'][_0x46bd5c(0x1d6)](this)),this['_partyMemberSwitchWindow'][_0x46bd5c(0x2a6)](_0x46bd5c(0x193),this[_0x46bd5c(0x1e7)][_0x46bd5c(0x1d6)](this));},Scene_Battle[_0x2f03b2(0x273)]['partySwitchWindowRect']=function(){const _0x27b38a=_0x2f03b2,_0x22d6de=this[_0x27b38a(0x114)]();if(_0x22d6de===_0x27b38a(0x1c3)){if('hfsHb'!==_0x27b38a(0x16a))this[_0x27b38a(0x19c)](...arguments);else return this[_0x27b38a(0x165)]();}else return this[_0x27b38a(0x109)]();},Scene_Battle[_0x2f03b2(0x273)]['partySwitchWindowRectStandard']=function(){const _0x57ab8f=_0x2f03b2;return VisuMZ['PartySystem'][_0x57ab8f(0x1d2)][_0x57ab8f(0xa7)][_0x57ab8f(0x111)][_0x57ab8f(0x1b8)](this);},Scene_Battle[_0x2f03b2(0x273)]['partySwitchWindowRectBorder']=function(){const _0x36d328=_0x2f03b2,_0x751232=this[_0x36d328(0x2b2)](),_0x312f83=$gameSystem[_0x36d328(0x1eb)]()*0x2;return _0x751232[_0x36d328(0x1e5)]=0x204+_0x312f83,_0x751232;},VisuMZ['PartySystem'][_0x2f03b2(0x22e)]=Scene_Battle[_0x2f03b2(0x273)]['isAnyInputWindowActive'],Scene_Battle[_0x2f03b2(0x273)][_0x2f03b2(0x246)]=function(){const _0xd11196=_0x2f03b2;if(this[_0xd11196(0x285)]&&this[_0xd11196(0x285)][_0xd11196(0x163)])return!![];if(this['_partySystemSwitchOut'])return!![];if(this['_callPartyMemberSwitch'])return!![];if(this[_0xd11196(0x99)])return!![];return VisuMZ[_0xd11196(0xbf)][_0xd11196(0x22e)][_0xd11196(0x1b8)](this);},VisuMZ[_0x2f03b2(0xbf)][_0x2f03b2(0x1be)]=Scene_Battle[_0x2f03b2(0x273)]['createPartyCommandWindowBattleCore'],Scene_Battle['prototype'][_0x2f03b2(0x127)]=function(){const _0x46e676=_0x2f03b2;VisuMZ[_0x46e676(0xbf)][_0x46e676(0x1be)]['call'](this),this[_0x46e676(0x126)][_0x46e676(0x2a6)]('formation',this['commandFormation'][_0x46e676(0x1d6)](this));},Scene_Battle[_0x2f03b2(0x273)][_0x2f03b2(0xcd)]=function(){const _0x510120=_0x2f03b2;this[_0x510120(0xc9)]()?_0x510120(0x9d)==='SHSzo'?(this[_0x510120(0x99)]=!![],this[_0x510120(0x144)][_0x510120(0x26e)](TextManager[_0x510120(0x299)]['format'](TextManager[_0x510120(0x12c)]))):(this[_0x510120(0x11c)]=![],this['_logWindow'][_0x510120(0xe4)](),_0xea840b[_0x510120(0x1a0)]()&&this['_partyMemberSwitchWindow'][_0x510120(0x23d)]()):this['callFormation']();},Scene_Battle[_0x2f03b2(0x273)][_0x2f03b2(0xc9)]=function(){return BattleManager['isActiveTpb']();},Scene_Battle[_0x2f03b2(0x273)][_0x2f03b2(0xe6)]=function(){const _0x23505b=_0x2f03b2;this[_0x23505b(0x99)]=![],this[_0x23505b(0x137)][_0x23505b(0x25d)](),this[_0x23505b(0xf4)][_0x23505b(0x11d)]=![],SceneManager[_0x23505b(0x1e1)](),SceneManager['push'](Scene_Party),$gameParty['applyBattlePartySwitchCooldown'](),BattleManager[_0x23505b(0x1a5)]()&&(BattleManager[_0x23505b(0x29c)]=BattleManager[_0x23505b(0x1a0)]());},VisuMZ[_0x2f03b2(0xbf)][_0x2f03b2(0x220)]=Scene_Battle[_0x2f03b2(0x273)][_0x2f03b2(0x29a)],Scene_Battle[_0x2f03b2(0x273)]['updateBattleProcess']=function(){const _0x24bc5d=_0x2f03b2;VisuMZ[_0x24bc5d(0xbf)][_0x24bc5d(0x220)][_0x24bc5d(0x1b8)](this);if(this[_0x24bc5d(0x99)]&&!BattleManager[_0x24bc5d(0x28a)]){if(_0x24bc5d(0xf8)!=='dEESI'){if(this['_partySwitchBattleCommandCooldown']===_0x15beb4)this[_0x24bc5d(0x108)]();return this[_0x24bc5d(0x263)];}else this[_0x24bc5d(0xe6)]();}this[_0x24bc5d(0x11c)]&&!BattleManager[_0x24bc5d(0x28a)]&&this['callPartyMemberSwitch']();},VisuMZ['PartySystem']['Scene_Battle_isTimeActive']=Scene_Battle[_0x2f03b2(0x273)][_0x2f03b2(0x262)],Scene_Battle[_0x2f03b2(0x273)][_0x2f03b2(0x262)]=function(){const _0x45f958=_0x2f03b2;if(BattleManager[_0x45f958(0x1de)]()){if(_0x45f958(0x216)!==_0x45f958(0x1a4)){if(this[_0x45f958(0x285)]&&this[_0x45f958(0x285)][_0x45f958(0x163)]){if('TMSMG'==='RnXgG')this[_0x45f958(0x19c)](...arguments);else return![];}}else{if(_0x5b19f4[_0x45f958(0x222)]())return;_0x52abba[_0x45f958(0xce)](_0x329d0e,_0x3d87d7);const _0x418c8d=_0x55f5bb[_0x45f958(0x277)];_0x2caac7[_0x45f958(0x140)](_0x418c8d);}}return VisuMZ['PartySystem'][_0x45f958(0x19e)][_0x45f958(0x1b8)](this);},VisuMZ['PartySystem'][_0x2f03b2(0x21c)]=Scene_Battle['prototype'][_0x2f03b2(0x203)],Scene_Battle['prototype'][_0x2f03b2(0x203)]=function(){const _0x233501=_0x2f03b2;VisuMZ[_0x233501(0xbf)][_0x233501(0x21c)][_0x233501(0x1b8)](this),this[_0x233501(0x267)][_0x233501(0x2a6)](_0x233501(0x12c),this[_0x233501(0x29b)][_0x233501(0x1d6)](this));},Scene_Battle[_0x2f03b2(0x273)]['commandPartyMemberSwitch']=function(){const _0x598eb5=_0x2f03b2;this[_0x598eb5(0xc9)]()?(this['_callPartyMemberSwitch']=!![],this[_0x598eb5(0x144)][_0x598eb5(0x26e)](TextManager['ActiveTpbFormationMessage'][_0x598eb5(0x228)](TextManager[_0x598eb5(0x12c)]))):this[_0x598eb5(0x18e)]();},Scene_Battle[_0x2f03b2(0x273)][_0x2f03b2(0x18e)]=function(){const _0x4d5da5=_0x2f03b2;this[_0x4d5da5(0x11c)]=![],this[_0x4d5da5(0x144)][_0x4d5da5(0xe4)](),BattleManager[_0x4d5da5(0x1a0)]()&&this[_0x4d5da5(0x285)][_0x4d5da5(0x23d)]();},Scene_Battle[_0x2f03b2(0x273)][_0x2f03b2(0x279)]=function(){const _0x4e8170=_0x2f03b2,_0x5b3250=this[_0x4e8170(0x285)][_0x4e8170(0x253)]();_0x5b3250?this[_0x4e8170(0x1e2)](_0x5b3250):_0x4e8170(0x1d5)==='KPIOf'?(this[_0x4e8170(0x285)]['deactivate'](),this['_actorCommandWindow'][_0x4e8170(0x23d)](),this['_actorCommandWindow'][_0x4e8170(0x2a8)]()):(this['_partyMemberSwitchWindow']['deactivate'](),this[_0x4e8170(0x267)][_0x4e8170(0x23d)]());},Scene_Battle[_0x2f03b2(0x273)][_0x2f03b2(0x1e2)]=function(_0x4bb43c){const _0x5bdbfa=_0x2f03b2,_0xcffaad=BattleManager['actor'](),_0x451ebb=_0xcffaad[_0x5bdbfa(0x1ba)]();this[_0x5bdbfa(0x285)][_0x5bdbfa(0xde)](),this[_0x5bdbfa(0x28d)]()&&_0x451ebb?(this[_0x5bdbfa(0x1ef)]=!![],_0x451ebb['startSwitchOutAnimation'](_0x4bb43c)):this[_0x5bdbfa(0x1e6)](_0x4bb43c);},Scene_Battle[_0x2f03b2(0x273)][_0x2f03b2(0x28d)]=function(){const _0x26607f=_0x2f03b2;return VisuMZ[_0x26607f(0xbf)][_0x26607f(0x1d2)]['General']['SwitchOutAnimation'];},Scene_Battle[_0x2f03b2(0x273)]['processPartySwitchMember']=function(_0x2b31a9){const _0x42e86b=_0x2f03b2;this[_0x42e86b(0x1ef)]=![];const _0x363151=BattleManager[_0x42e86b(0x1a0)](),_0x469c87=_0x363151[_0x42e86b(0x1ba)]();$gameParty[_0x42e86b(0x26b)][_0x363151['index']()]=_0x2b31a9[_0x42e86b(0x249)](),$gameParty[_0x42e86b(0x17b)]();if(this['isImmediateTpb']()){if(_0x42e86b(0x155)!=='vRmMF'){const _0x53c6ce=this[_0x42e86b(0x1a0)](_0x3d81bd),_0x2205f5=this['actor'](_0x3e10b1);if(!_0x53c6ce?.[_0x42e86b(0x2a7)]()||!_0x2205f5?.[_0x42e86b(0x2a7)]())return;else{if(!_0x53c6ce||!_0x2205f5)return;}const _0x4383b5=_0x42960a[_0x42e86b(0xa5)],_0x175bc2=_0x4383b5[_0x42e86b(0x1f1)](_0x53c6ce['actorId']()),_0x1e8a0f=_0x4383b5['indexOf'](_0x2205f5[_0x42e86b(0x249)]());_0x4383b5[_0x175bc2]=_0x2205f5?_0x2205f5[_0x42e86b(0x249)]():0x0,_0x4383b5[_0x1e8a0f]=_0x53c6ce?_0x53c6ce[_0x42e86b(0x249)]():0x0,this[_0x42e86b(0x2a8)](),this[_0x42e86b(0x204)](),this[_0x42e86b(0x206)](_0x2eab59);}else _0x2b31a9['_tpbChargeTime']=_0x363151[_0x42e86b(0x120)],_0x2b31a9['_tpbState']=_0x42e86b(0x1b2);}else BattleManager[_0x42e86b(0x1a5)]()&&_0x2b31a9[_0x42e86b(0x26f)]();BattleManager[_0x42e86b(0x123)]=_0x2b31a9,_0x2b31a9[_0x42e86b(0x1f6)](),_0x2b31a9[_0x42e86b(0x16f)](),_0x2b31a9[_0x42e86b(0x18f)](_0x363151),_0x469c87&&_0x469c87[_0x42e86b(0x1ce)](_0x2b31a9),this[_0x42e86b(0x124)]['switchStateIconActor'](_0x363151,_0x2b31a9),this[_0x42e86b(0x124)][_0x42e86b(0x2a8)](),this[_0x42e86b(0x267)][_0x42e86b(0x172)](_0x2b31a9),this[_0x42e86b(0x267)][_0x42e86b(0x206)](0x0),this[_0x42e86b(0x267)][_0x42e86b(0x23d)](),this['_actorCommandWindow'][_0x42e86b(0x214)]=!![];},Scene_Battle[_0x2f03b2(0x273)][_0x2f03b2(0x1ea)]=function(){const _0x38b0fa=_0x2f03b2;if(!BattleManager[_0x38b0fa(0x1a5)]())return![];const _0x299563=VisuMZ[_0x38b0fa(0xbf)][_0x38b0fa(0x1d2)][_0x38b0fa(0x142)];return _0x299563[_0x38b0fa(0x1d0)]===undefined&&(_0x299563['tpbImmediateAction']=!![]),_0x299563[_0x38b0fa(0x1d0)];},Window_StatusBase['prototype']['switchStateIconActor']=function(_0x3b4e5f,_0x2743f9){const _0x4e5177=_0x2f03b2,_0x3e14c1=_0x4e5177(0xad)[_0x4e5177(0x228)](_0x3b4e5f[_0x4e5177(0x249)]()),_0x36b335=this[_0x4e5177(0x213)](_0x3e14c1,Sprite_StateIcon);_0x36b335['setup'](_0x2743f9);},Scene_Battle['prototype'][_0x2f03b2(0x1e7)]=function(){const _0x172032=_0x2f03b2;this[_0x172032(0x285)][_0x172032(0xde)](),this[_0x172032(0x267)][_0x172032(0x23d)](),this[_0x172032(0x267)][_0x172032(0x2a8)]();},Scene_Battle[_0x2f03b2(0x273)]['postPartySwitchMenuTpb']=function(){const _0x196dcc=_0x2f03b2;if(!BattleManager[_0x196dcc(0x1a5)]())return;if(!SceneManager[_0x196dcc(0x1a2)](Scene_Party))return;this[_0x196dcc(0x126)][_0x196dcc(0xde)](),this[_0x196dcc(0x126)][_0x196dcc(0xc2)](),this[_0x196dcc(0x267)][_0x196dcc(0xde)](),this[_0x196dcc(0x267)][_0x196dcc(0xc2)](),BattleManager[_0x196dcc(0x123)]=null,BattleManager[_0x196dcc(0x208)]=![];},Scene_Battle[_0x2f03b2(0x273)]['postPartySwitchMenuTurnBased']=function(){const _0x1032d9=_0x2f03b2;if(BattleManager[_0x1032d9(0x1a5)]())return;if(!SceneManager['isPreviousScene'](Scene_Party))return;Imported[_0x1032d9(0x215)]&&BattleManager[_0x1032d9(0x1ee)]()&&BattleManager['makeActionOrders']();Imported[_0x1032d9(0x290)]&&BattleManager[_0x1032d9(0x1fa)]()&&(BattleManager[_0x1032d9(0x123)]=$gameParty['teamBasedFirstAvailableMember'](),BattleManager[_0x1032d9(0x28a)]=BattleManager[_0x1032d9(0x1a0)](),BattleManager['_inputting']=!![],this[_0x1032d9(0x267)][_0x1032d9(0x172)](BattleManager[_0x1032d9(0x1a0)]()),this[_0x1032d9(0x124)][_0x1032d9(0x13a)](BattleManager[_0x1032d9(0x1a0)]()));if(Imported[_0x1032d9(0x200)]&&BattleManager[_0x1032d9(0x112)]()){if(_0x1032d9(0x280)===_0x1032d9(0x187))return _0xb6f777['VisuMZ_0_CoreEngine']?_0x1fc1e7['CoreEngine'][_0x1032d9(0x1d2)]['Param'][_0x1032d9(0x196)]:[0x2,0x3,0x4,0x5,0x6,0x7];else BattleManager[_0x1032d9(0x123)]=$gameParty[_0x1032d9(0x235)](),BattleManager[_0x1032d9(0x28a)]=BattleManager[_0x1032d9(0x1a0)](),BattleManager[_0x1032d9(0x208)]=!![],this[_0x1032d9(0x267)]['setup'](BattleManager[_0x1032d9(0x1a0)]()),this[_0x1032d9(0x124)][_0x1032d9(0x13a)](BattleManager[_0x1032d9(0x1a0)]());}Imported['VisuMZ_2_BattleSystemPTB']&&BattleManager['isPTB']()&&(BattleManager[_0x1032d9(0x123)]=$gameParty['teamBasedFirstAvailableMember'](),BattleManager[_0x1032d9(0x28a)]=BattleManager[_0x1032d9(0x1a0)](),BattleManager[_0x1032d9(0x208)]=!![],this[_0x1032d9(0x267)]['setup'](BattleManager[_0x1032d9(0x1a0)]()),this[_0x1032d9(0x124)]['selectActor'](BattleManager[_0x1032d9(0x1a0)]()));},Game_Party[_0x2f03b2(0x273)][_0x2f03b2(0x235)]=function(){const _0xf2462f=_0x2f03b2;let _0x2c2183=this[_0xf2462f(0x28b)]();return _0x2c2183[0x0];},Sprite_Actor[_0x2f03b2(0xd4)]=0xc,Sprite_Actor[_0x2f03b2(0x273)][_0x2f03b2(0x20f)]=function(_0x43abc1){const _0x4919a6=_0x2f03b2;this['_partySwitchTargetActor']=_0x43abc1;const _0x3a1e7f=Sprite_Actor[_0x4919a6(0xd4)];this[_0x4919a6(0xca)](0x12c,0x0,_0x3a1e7f),this['startOpacity'](0x0,_0x3a1e7f),this[_0x4919a6(0xd4)]=_0x3a1e7f;},Sprite_Actor[_0x2f03b2(0x273)]['startSwitchInAnimation']=function(_0x3863b3){const _0x53fe5b=_0x2f03b2;if(SceneManager[_0x53fe5b(0x1cb)]()){if(_0x53fe5b(0x1b5)!==_0x53fe5b(0x1b5)){const _0x3cbcb4=_0x274c0d[_0x53fe5b(0x244)](),_0x5ce392=_0x30680c[_0x53fe5b(0xc1)](),_0xc4591d=_0x495640/0x2,_0x52fe40=this['lineHeight']();while(_0xe43889--){this[_0x53fe5b(0x21a)][_0x53fe5b(0x132)](_0x1a1388,_0x2c020e,_0xc4591d,_0x52fe40,_0x5ce392,_0x3cbcb4),this[_0x53fe5b(0x21a)][_0x53fe5b(0x132)](_0x3379b0+_0xc4591d,_0x195310,_0xc4591d,_0x52fe40,_0x3cbcb4,_0x5ce392);}}else{SceneManager[_0x53fe5b(0x195)][_0x53fe5b(0x1e6)](_0x3863b3);const _0x275a82=Sprite_Actor['_partySwitchDuration'];this[_0x53fe5b(0x254)](),this[_0x53fe5b(0x247)](0xff,_0x275a82);}}this['_partySwitchTargetActor']=null;},VisuMZ[_0x2f03b2(0xbf)][_0x2f03b2(0x100)]=Sprite_Actor[_0x2f03b2(0x273)][_0x2f03b2(0x25d)],Sprite_Actor['prototype'][_0x2f03b2(0x25d)]=function(){const _0x54869e=_0x2f03b2;VisuMZ[_0x54869e(0xbf)][_0x54869e(0x100)][_0x54869e(0x1b8)](this);if(this[_0x54869e(0xd4)])this[_0x54869e(0x27a)]();},Sprite_Actor[_0x2f03b2(0x273)][_0x2f03b2(0x27a)]=function(){const _0x70a2b0=_0x2f03b2;this[_0x70a2b0(0xd4)]=this[_0x70a2b0(0xd4)]||0x0,this[_0x70a2b0(0xd4)]--,this[_0x70a2b0(0xd4)]<=0x0&&this[_0x70a2b0(0x2a0)](this[_0x70a2b0(0xb7)]);},Window_PartyCommand[_0x2f03b2(0x273)]['addCustomCommands']=function(){const _0x496f14=_0x2f03b2;this[_0x496f14(0xa1)]();},Window_PartyCommand[_0x2f03b2(0x273)][_0x2f03b2(0xa1)]=function(){const _0x44989e=_0x2f03b2;if(!this[_0x44989e(0x125)]())return;if(this[_0x44989e(0x16c)]()){$gameTemp[_0x44989e(0x264)]()&&!BattleManager['_battleSystemIncompatibilityError']&&(console[_0x44989e(0x153)]('WARNING:\x20Party\x20Change\x20command\x20is\x20unavailable\x20for\x20Window_PartyCommand\x20for\x20this\x20Battle\x20System'),BattleManager[_0x44989e(0x1f4)]=!![]);return;}const _0x5480be=this[_0x44989e(0x22b)](),_0x207059=ImageManager['battlePartyChangeIcon'],_0x44bdc9=_0x5480be==='text'?TextManager['battlePartyChangeCmd']:'\x5cI[%1]%2'[_0x44989e(0x228)](_0x207059,TextManager[_0x44989e(0x234)]),_0x8a4e31=this[_0x44989e(0x1c5)]();this[_0x44989e(0x229)](_0x44bdc9,_0x44989e(0x12c),_0x8a4e31);},Window_PartyCommand[_0x2f03b2(0x273)][_0x2f03b2(0x125)]=function(){const _0x34dcdc=_0x2f03b2;if(Imported[_0x34dcdc(0x24c)]&&BattleManager['isOTB']())return![];return VisuMZ['PartySystem']['Settings'][_0x34dcdc(0x142)]['PartyCmdWinAddParty'];},Window_PartyCommand[_0x2f03b2(0x273)][_0x2f03b2(0x16c)]=function(){if(Imported['VisuMZ_2_BattleSystemSTB']&&BattleManager['isSTB']())return!![];return![];},Window_PartyCommand[_0x2f03b2(0x273)][_0x2f03b2(0x1c5)]=function(){const _0x4e62c6=_0x2f03b2;if($gameParty[_0x4e62c6(0x2ad)]()[_0x4e62c6(0x2aa)]<=0x1)return![];if(!$gameParty[_0x4e62c6(0x17a)]())return![];return $gameSystem['isFormationEnabled']();},VisuMZ[_0x2f03b2(0xbf)][_0x2f03b2(0x1d2)][_0x2f03b2(0xed)]=Window_PartyCommand[_0x2f03b2(0x273)][_0x2f03b2(0x201)],Window_PartyCommand[_0x2f03b2(0x273)]['updateHelp']=function(){const _0x3af67c=_0x2f03b2,_0x4aeb24=this[_0x3af67c(0x183)]();switch(_0x4aeb24){case _0x3af67c(0x12c):this[_0x3af67c(0x136)][_0x3af67c(0x1a7)](TextManager[_0x3af67c(0x18b)]);break;default:VisuMZ[_0x3af67c(0xbf)]['Settings'][_0x3af67c(0xed)][_0x3af67c(0x1b8)](this);break;}},Window_ActorCommand[_0x2f03b2(0x273)][_0x2f03b2(0x9a)]=function(){const _0xb50dbd=_0x2f03b2;if(!this['isPartyCommandAdded']())return;this[_0xb50dbd(0x20d)](_0xb50dbd(0x12c))>=0x0&&('RWElO'===_0xb50dbd(0x29e)?this[_0xb50dbd(0x26b)][_0xb50dbd(0x16d)]():this[_0xb50dbd(0x10c)]());const _0x30f810=this['commandStyle'](),_0x61abe9=ImageManager['battlePartyChangeIcon'],_0x880bfc=_0x30f810===_0xb50dbd(0x286)?TextManager[_0xb50dbd(0x15c)]:_0xb50dbd(0x2ae)[_0xb50dbd(0x228)](_0x61abe9,TextManager[_0xb50dbd(0x234)]),_0x3d9cad=this['isPartyCommandEnabled']();this[_0xb50dbd(0x229)](_0x880bfc,_0xb50dbd(0x12c),_0x3d9cad);},Window_ActorCommand[_0x2f03b2(0x273)][_0x2f03b2(0xe8)]=function(){const _0x289634=_0x2f03b2;if(!this[_0x289634(0x2bd)])return![];return VisuMZ['PartySystem']['Settings'][_0x289634(0x142)][_0x289634(0xd6)];},Window_ActorCommand[_0x2f03b2(0x273)]['isPartyCommandEnabled']=function(){const _0x306b10=_0x2f03b2;if($gameParty[_0x306b10(0x2ad)]()['length']<=0x1)return![];if(!this[_0x306b10(0x2bd)])return![];if(!this[_0x306b10(0x2bd)][_0x306b10(0x17a)]())return![];return this['_actor'][_0x306b10(0x2a7)]();},VisuMZ[_0x2f03b2(0xbf)]['Settings'][_0x2f03b2(0xdd)]=Window_ActorCommand[_0x2f03b2(0x273)]['updateHelp'],Window_ActorCommand['prototype'][_0x2f03b2(0x201)]=function(){const _0x35bf73=_0x2f03b2,_0x1c844a=this['currentSymbol']();if(!_0x1c844a)return;switch(_0x1c844a['toLowerCase']()){case _0x35bf73(0x12c):this[_0x35bf73(0x136)][_0x35bf73(0x1a7)](TextManager[_0x35bf73(0x1a9)]);break;default:VisuMZ[_0x35bf73(0xbf)][_0x35bf73(0x1d2)][_0x35bf73(0xdd)][_0x35bf73(0x1b8)](this);break;}},Window_ActorCommand[_0x2f03b2(0x273)][_0x2f03b2(0x10c)]=function(){const _0x3207a2=_0x2f03b2;while(this[_0x3207a2(0x20d)](_0x3207a2(0x12c))>=0x0){const _0x1c3a0e=this['findSymbol'](_0x3207a2(0x12c));this[_0x3207a2(0x1e4)][_0x3207a2(0x2a4)](_0x1c3a0e,0x1);}});;