//=============================================================================
// VisuStella MZ - Party System
// VisuMZ_2_PartySystem.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_PartySystem = true;

var VisuMZ = VisuMZ || {};
VisuMZ.PartySystem = VisuMZ.PartySystem || {};
VisuMZ.PartySystem.version = 1.18;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.18] [PartySystem]
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

const _0x239c=['xqgjI','pmDGI','Game_Troop_increaseTurn','addFormationCommand','cursorPagedown','BattleManager_setup','uiMenuStyle','updateTurnOrderCTB','drawActorSimpleStatus','YDIEp','createStatusLabel','_partyRequired','update','members','MoveRandomToActive','assistRemovePartyMember','BattlePartyIcon','IXuii','ReservePartyLabelRect','indexOf','isFormationEnabled','drawParamName','gaugeBackColor','stepForward','ActiveBattlerOffsetX','_actor','innerHeight','drawItemImageSprite','AcqUC','helpAreaHeight','_backSprite1','CallPartyScene','faceName','max','height','setBattler','createCustomBackgroundImages','VisuMZ_2_BattleSystemOTB','round','level','Settings','_debug','addActorToBattleMembers','initMaxBattleMembers','BattleHelpFormation','Scene_Battle_createActorCommandWindow','_lastIndex','setStatusWindow','Empty','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','_partySwitchBattleCommandCooldown','\x5cI[%1]%2','_scene','sdYyX','drawSvActor','pop','createReservePartyWindow','addLoadListener','isActiveTpb','svbattler','RequireIcon','drawRemoveCommand','getInputButtonString','checkShiftRemoveShortcut','pendingIndex','vqorL','concat','addPartyCommand','prototype','isRightInputMode','isOTB','5SJexVb','EVAL','postPartySwitchMenuTurnBased','_subject','defaultMaxBattleMembers','Game_Battler_onBattleStart','ConvertParams','name','drawItemImage','create','playEquip','isShiftRemoveShortcutEnabled','onBattleStart','canSwitchPartyInBattle','setPartyRequirement','loadPartyImages','trim','ActivePartyWindowRect','SwitchOutAnimation','Remove','battleLayoutStyle','Scene_Battle_updateBattleProcess','testBattlers','sprite','_pageupButton','resetFontSettings','drawItemImageFace','isQueueFormationMenu','BRyTW','startOpacity','_reservePartyLabel','applyBattlePartySwitchCooldown','drawItemImageSvActor','HnjGo','Game_Party_setupStartingMembers','addChild','CoreEngine','floor','clearPartyBattleCommandCooldown','_partySystemBattleCommandCooldown','TciBR','449353KJMJEj','param','isPreviousSceneBattleTransitionable','clearTpbChargeTime','callPartyMemberSwitch','activePartyLabelRect','setPartyLock','processPartySwitchMember','onPartySwitchCancel','TXHKE','text','isTriggered','drawActorPartyIcons','checkInitBattleMembers','fillRect','face','51461QGNMYl','setHandler','IEZSj','onReserveOk','setActor','createActivePartyWindow','border','index','mHvzN','increaseTurn','callUpdateHelp','itemRectWithPadding','drawActorPartyIconsVert','drawParamValue','battlePartyChangeCmdHelp','hasBattleSystemIncompatibilities','paintOpacity','468614fpzPXN','faceWidth','refresh','rawBattleMembers','drawIcon','createStatusWindow','switchStateIconActor','battlePartySwitchCmdHelp','reserveMembers','DrawBackRect','swapOrder','assistSwapInPartyMember','Lock','toUpperCase','vIswt','battlerName','sortActionOrdersBTB','deselect','fVDZd','processShiftRemoveShortcut','removeActor','initEquips','_statusPartyWindow','playOkSound','createBackground','lhQFf','isFormationCommandEnabled','width','addNonBattleTestMembers','ActiveSpriteOffsetY','_currentActor','statusParty','commandPartyMemberSwitch','_battleMembers','isShiftShortcutEnabled','isCurrentItemEnabled','Game_Party_removeActor','buttonAssistText4','ReservePartyWindowRect','iconHeight','AssistSwapPosition','isFormationChangeOk','characterName','_actorGraphic','AddRemoveCmd','selectActor','Require','drawParamText','vXtde','WsfoF','loadSvActor','placeBasicGauges','1GusYup','581114wLiSrQ','updatePartySwitch','BQsNr','getBackgroundOpacity','ARRAYNUM','updateBattleProcess','ReserveParty','10eujBiD','parse','processCancel','_partySystemSwitchOut','STR','_partyLocked','battlePartyChangeCmd','_clickHandler','sortActors','_tpbChargeTime','processCursorMove','ReserveItemThickness','startSwitchInAnimation','ReservePartyGraphic','xXHHS','onPartySwitchOk','41347EdTRUm','1RSAQAU','VisuMZ_1_MainMenuCore','PartySystem','BattleSwitchWindowBgType','_tpbState','isEnabled','parameters','startSwitchOutAnimation','changeLevel','dimColor1','log','isAutosaveEnabled','clearPartySwitchCommandCooldown','actor%1-stateIcon','commandFormation','toLowerCase','currentSymbol','map','isFormationCommandAdded','loadFace','isSceneMap','loadCharacter','ChangeMaxBattleMembers','battlePartyChangeIcon','dimColor2','OzASM','skillItemWindowRectBorderStyle','inBattle','isCTB','updateHelp','emptyPartyMember','PwRym','ReservePartyLabelBgType','initPartySystem','_windowLayer','BattleSwitchOut','_helpWindow','Scene_Battle_createAllWindows','sGrCp','Xtedn','ActiveTpbFormationMessage','ZyprS','setText','drawItemStatus','_rowThickness','followers','nameStartPosition','exit','drawActorName','mNAnn','_actors','snapForBackground','drawActorCharacter','setBackgroundOpacity','_backSprite2','_logWindow','PartyCmdWinAddParty','CVBeb','hpColor','allMembers','fYdzb','isShowPartySwitchOutAnimation','swapOrderPartySystemPlugin','itemHeight','windowPadding','Window_ActorCommand_updateHelp','drawActorPartyIconsHorz','SceneManager_isPreviousSceneBattleTransitionable','callFormation','BattleSwitchWindowRect','sort','BattleHelpSwitch','JpNkr','cOvue','ActiveBattlerOffsetY','isPreviousScene','uiKnL','PYVot','maxCols','constructor','ActivePartyLabelBgType','createReservePartyLabel','initBattleMembers','SnapshotOpacity','Game_Actor_setup','requiredPartyMemberIcon','ActiveSpriteOffsetX','isTimeActive','qPrBj','ReserveSpriteOffsetY','PartyCmdCooldown','VisuMZ_1_BattleCore','includes','VisuMZ_0_CoreEngine','maxBattleMembers','call','StatusWindowRect','isTpb','changePaintOpacity','isAppeared','visible','ARRAYSTRUCT','innerWidth','setup','removeActionBattlersOTB','AssistRemove','tzFjf','deactivate','_actorCommandWindow','anyRequiredPartyMembersInReserve','FUNC','playCursorSound','faceHeight','partySwitchWindowRectBorder','battler','currentActor','Game_Battler_regenerateAll','RPkJr','onBattlePartySwitch','adjustSprite','QueuePartyScene','Vocab','slice','OXpof','isOkEnabled','drawItem','contents','center','reserveParty','open','shift','setBattlePartySwitchCooldown','Game_Party_setupBattleTest','_bypassAutoSavePartySystem','padding','version','status','cancel','ActivePartyLabelRect','cursorPageup','itemPadding','_partyMemberSwitchWindow','terminate','ReserveCol','xtUpw','cursorUp','commandStyle','iconWidth','partySwitchWindowRectStandard','42041EUIgXs','_battleMaxSize','_callSceneParty','isPartyCommandAdded','isSceneBattle','MoveActorsToActive','Window','loadTitle1','processDrawItem','changeMaxBattleMembers','BQyAS','bitmap','makeActions','#%1','Game_Party_addActor','systemColor','onReserveCancel','drawItemDarkRect','VisuMZ_2_BattleSystemFTB','partySwitchWindowRect','recoverAll','fAUBy','onActiveOk','isCancelEnabled','itemLineRect','addCustomCommands','joHVO','_statusPartyLabel','lXRUi','cursorVisible','partyChangeRefresh','isSTB','Scene_Battle_isAnyInputWindowActive','setupStartingMembers','Value','xoAoT','addWindow','reservePartyWindowRect','STRUCT','uiInputPosition','ARRAYFUNC','description','assistSortPartyMembers','ceil','AssistSwapIn','actorParams','ARRAYSTR','createActorCommandWindow','mapId','_partyCommandWindow','StatusLabelBgType','activeParty','battlePartySwitchCmd','registerCommand','maxItems','battlePartySwitchCooldown','isFTB','_callPartyMemberSwitch','JSON','Scene_Battle_createPartyCommandWindowBattleCore','clearBypassAutoSave','statusWindowRect','isNextScene','ActivePartyGraphic','activePartyWindowRect','XBVjr','sHUDD','tpbImmediateAction','setBackgroundType','smoothSelect','setupBattleTestMembers','postPartySwitchMenuTpb','AvgwJ','actorId','_partySwitchTargetActor','NUM','IWLVk','changeTextColor','UKzSd','Window_PartyCommand_updateHelp','dcKZr','BgSettings','_reservePartyWindow','102489ENjBpi','BackRectColor','fiQda','vQDxl','oydoK','drawActorFace','reselect','lockPartyMemberIcon','Actors','gradientFillRect','isRequiredInParty','processShiftSortShortcut','addActorToBattleMembersAtIndex','Sprite_Actor_update','_tpbSceneChangeCacheActor','General','rearrangePartyActors','BgFilename1','_activePartyLabel','isActor','isPartyCommandEnabled','isAnyInputWindowActive','VzwTb','_activePartyWindow','filter','active','Game_Unit_inBattle','ReserveSpriteOffsetX','JIGxu','drawText','APUfO','GnjCd','drawItemEmpty','random','battleMembers','IiCte','isImmediateTpb','itemRect','isSceneParty','clear','reservePartyLabelRect','XDmjV','drawDarkRect','_spriteset','activate','createAllWindows','popScene','_statusWindow','_partySwitchDuration','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','formation','woWxg','assistSwapOutPartyMember','updateBattlePartySwitchCooldown','_battleSystemIncompatibilityError','refreshOG','getPartySystemBackColor','ReserveBattlerOffsetX','close','_actionBattlers','actor','loadTitle2','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','createPageButtons','yRMxD','createPartySwitchWindow','removePartyMember','isPlaytest','addCommand','hQAao','gaDpq','ReserveBattlerOffsetY','remove','addRemoveCommand','quickSwap','statusLabelRect','ActivePartyWindowBgType','SceneManager_isNextSceneBattleTransitionable','cjRzW','format','VisuMZ_2_BattleSystemBTB','bind','buttonAssistText3','Status','startMove','cursorDown','Game_Party_initialize','assistSwapPositions','refreshAllWindows','checkShiftSortShortcut','Scene_Base_isAutosaveEnabled','hYtBu','loadFaceImages','push','lineHeight','otbReturnBattlerToTurnOrders','Scene_Battle_isTimeActive','createActivePartyLabel','AssistSwapOut','initialize','Game_Party_swapOrder','match','StatusWindowBgType','getParamValue','min','KuuyB','BgFilename2','length','charged','textColor','_inputting','gHqrG','equips','createPartyCommandWindowBattleCore','kvGZE','removeActorFromBattleMembers','isBTB','isNextSceneBattleTransitionable'];const _0x1df9b9=_0x4e4e;(function(_0x57cb2b,_0xd06a5c){const _0x206148=_0x4e4e;while(!![]){try{const _0x11fb92=-parseInt(_0x206148(0x1e9))+parseInt(_0x206148(0x19f))*parseInt(_0x206148(0x1d8))+-parseInt(_0x206148(0x236))*-parseInt(_0x206148(0xe2))+parseInt(_0x206148(0x2cb))+parseInt(_0x206148(0x21e))+parseInt(_0x206148(0x1c8))*parseInt(_0x206148(0x21d))+-parseInt(_0x206148(0x235))*parseInt(_0x206148(0x225));if(_0x11fb92===_0xd06a5c)break;else _0x57cb2b['push'](_0x57cb2b['shift']());}catch(_0x4a99d3){_0x57cb2b['push'](_0x57cb2b['shift']());}}}(_0x239c,0x8654a));function _0x4e4e(_0x38d6fb,_0x18921b){_0x38d6fb=_0x38d6fb-0xb1;let _0x239c52=_0x239c[_0x38d6fb];return _0x239c52;}var label=_0x1df9b9(0x238),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x1df9b9(0xfa)](function(_0x532d0a){const _0x4a6d9c=_0x1df9b9;return _0x532d0a[_0x4a6d9c(0x2be)]&&_0x532d0a[_0x4a6d9c(0xb8)][_0x4a6d9c(0x292)]('['+label+']');})[0x0];VisuMZ[label][_0x1df9b9(0x180)]=VisuMZ[label][_0x1df9b9(0x180)]||{},VisuMZ[_0x1df9b9(0x1a5)]=function(_0x2481a1,_0x3c4e3a){const _0x22a7e9=_0x1df9b9;for(const _0x5f50c3 in _0x3c4e3a){if(_0x22a7e9(0x2d5)===_0x22a7e9(0x2e5)){function _0x123b41(){const _0x31fc11=_0x22a7e9;_0x9be8bd[_0x31fc11(0x17d)]&&_0x589ade['isOTB']()&&(_0x50e22b[_0x31fc11(0x29e)](),_0x528d48['otbReturnBattlerToTurnOrders'](_0x598f3a[_0x31fc11(0x11e)](_0x5da6d0)));}}else{if(_0x5f50c3['match'](/(.*):(.*)/i)){const _0x26749b=String(RegExp['$1']),_0x408881=String(RegExp['$2'])[_0x22a7e9(0x1f6)]()[_0x22a7e9(0x1af)]();let _0x2c95b2,_0x5605ab,_0x291097;switch(_0x408881){case _0x22a7e9(0xda):_0x2c95b2=_0x3c4e3a[_0x5f50c3]!==''?Number(_0x3c4e3a[_0x5f50c3]):0x0;break;case _0x22a7e9(0x222):_0x5605ab=_0x3c4e3a[_0x5f50c3]!==''?JSON[_0x22a7e9(0x226)](_0x3c4e3a[_0x5f50c3]):[],_0x2c95b2=_0x5605ab[_0x22a7e9(0x247)](_0x4c46ae=>Number(_0x4c46ae));break;case _0x22a7e9(0x1a0):_0x2c95b2=_0x3c4e3a[_0x5f50c3]!==''?eval(_0x3c4e3a[_0x5f50c3]):null;break;case'ARRAYEVAL':_0x5605ab=_0x3c4e3a[_0x5f50c3]!==''?JSON[_0x22a7e9(0x226)](_0x3c4e3a[_0x5f50c3]):[],_0x2c95b2=_0x5605ab['map'](_0x39bb64=>eval(_0x39bb64));break;case _0x22a7e9(0xc9):_0x2c95b2=_0x3c4e3a[_0x5f50c3]!==''?JSON[_0x22a7e9(0x226)](_0x3c4e3a[_0x5f50c3]):'';break;case'ARRAYJSON':_0x5605ab=_0x3c4e3a[_0x5f50c3]!==''?JSON[_0x22a7e9(0x226)](_0x3c4e3a[_0x5f50c3]):[],_0x2c95b2=_0x5605ab[_0x22a7e9(0x247)](_0x5b681a=>JSON['parse'](_0x5b681a));break;case _0x22a7e9(0x2a4):_0x2c95b2=_0x3c4e3a[_0x5f50c3]!==''?new Function(JSON[_0x22a7e9(0x226)](_0x3c4e3a[_0x5f50c3])):new Function('return\x200');break;case _0x22a7e9(0xb7):_0x5605ab=_0x3c4e3a[_0x5f50c3]!==''?JSON[_0x22a7e9(0x226)](_0x3c4e3a[_0x5f50c3]):[],_0x2c95b2=_0x5605ab['map'](_0x2958f3=>new Function(JSON[_0x22a7e9(0x226)](_0x2958f3)));break;case _0x22a7e9(0x229):_0x2c95b2=_0x3c4e3a[_0x5f50c3]!==''?String(_0x3c4e3a[_0x5f50c3]):'';break;case _0x22a7e9(0xbd):_0x5605ab=_0x3c4e3a[_0x5f50c3]!==''?JSON[_0x22a7e9(0x226)](_0x3c4e3a[_0x5f50c3]):[],_0x2c95b2=_0x5605ab['map'](_0x344530=>String(_0x344530));break;case _0x22a7e9(0xb5):_0x291097=_0x3c4e3a[_0x5f50c3]!==''?JSON[_0x22a7e9(0x226)](_0x3c4e3a[_0x5f50c3]):{},_0x2c95b2=VisuMZ[_0x22a7e9(0x1a5)]({},_0x291097);break;case _0x22a7e9(0x29b):_0x5605ab=_0x3c4e3a[_0x5f50c3]!==''?JSON['parse'](_0x3c4e3a[_0x5f50c3]):[],_0x2c95b2=_0x5605ab[_0x22a7e9(0x247)](_0x3483af=>VisuMZ[_0x22a7e9(0x1a5)]({},JSON['parse'](_0x3483af)));break;default:continue;}_0x2481a1[_0x26749b]=_0x2c95b2;}}}return _0x2481a1;},(_0x461497=>{const _0x200d09=_0x1df9b9,_0xfccbd5=_0x461497[_0x200d09(0x1a6)];for(const _0x12366c of dependencies){if(!Imported[_0x12366c]){alert(_0x200d09(0x120)[_0x200d09(0x131)](_0xfccbd5,_0x12366c)),SceneManager[_0x200d09(0x265)]();break;}}const _0xf79e9f=_0x461497[_0x200d09(0xb8)];if(_0xf79e9f[_0x200d09(0x147)](/\[Version[ ](.*?)\]/i)){const _0x1cb550=Number(RegExp['$1']);if(_0x1cb550!==VisuMZ[label][_0x200d09(0x2bd)]){if(_0x200d09(0x25f)!==_0x200d09(0x233))alert(_0x200d09(0x189)[_0x200d09(0x131)](_0xfccbd5,_0x1cb550)),SceneManager[_0x200d09(0x265)]();else{function _0x3dbc7b(){const _0x5955c0=_0x200d09;return _0x5a883f[_0x5955c0(0xb9)];}}}}if(_0xf79e9f['match'](/\[Tier[ ](\d+)\]/i)){const _0x31206d=Number(RegExp['$1']);if(_0x31206d<tier){if(_0x200d09(0x159)!==_0x200d09(0x159)){function _0x59b07d(){const _0x2c33dd=_0x200d09;this[_0x2c33dd(0x1d5)]();const _0x2a3609=this[_0x2c33dd(0x104)]()[_0x2c33dd(0x19a)](this[_0x2c33dd(0x1f1)]());this[_0x2c33dd(0x268)]=_0x2a3609[_0x2c33dd(0x247)](_0x1c26e5=>_0x1c26e5?_0x1c26e5['actorId']():0x0)[_0x2c33dd(0x12a)](0x0);}}else alert(_0x200d09(0x113)['format'](_0xfccbd5,_0x31206d,tier)),SceneManager[_0x200d09(0x265)]();}else tier=Math['max'](_0x31206d,tier);}VisuMZ[_0x200d09(0x1a5)](VisuMZ[label][_0x200d09(0x180)],_0x461497[_0x200d09(0x23c)]);})(pluginData),PluginManager[_0x1df9b9(0xc4)](pluginData['name'],_0x1df9b9(0x177),_0x29f736=>{const _0x47034d=_0x1df9b9;SceneManager[_0x47034d(0x13f)](Scene_Party);}),PluginManager['registerCommand'](pluginData[_0x1df9b9(0x1a6)],_0x1df9b9(0x24c),_0x531911=>{const _0x579165=_0x1df9b9;if($gameParty[_0x579165(0x251)]())return;VisuMZ[_0x579165(0x1a5)](_0x531911,_0x531911);const _0x592662=_0x531911[_0x579165(0xb1)];$gameParty[_0x579165(0x2d4)](_0x592662);}),PluginManager['registerCommand'](pluginData[_0x1df9b9(0x1a6)],_0x1df9b9(0x2d0),_0x18fe44=>{const _0xa4bab4=_0x1df9b9;if(!SceneManager[_0xa4bab4(0x24a)]())return;VisuMZ[_0xa4bab4(0x1a5)](_0x18fe44,_0x18fe44);const _0x22b28f=_0x18fe44[_0xa4bab4(0xea)];for(const _0x10ba0e of _0x22b28f){$gameParty[_0xa4bab4(0x182)](_0x10ba0e);}$gamePlayer[_0xa4bab4(0x1eb)]();}),PluginManager[_0x1df9b9(0xc4)](pluginData[_0x1df9b9(0x1a6)],'MoveActorsToReserve',_0x147349=>{const _0xf952f4=_0x1df9b9;if(!SceneManager[_0xf952f4(0x24a)]())return;VisuMZ[_0xf952f4(0x1a5)](_0x147349,_0x147349);const _0x2c0a29=_0x147349[_0xf952f4(0xea)];for(const _0x552659 of _0x2c0a29){if($gameParty[_0xf952f4(0x104)]()[_0xf952f4(0x14d)]<=0x1)break;$gameParty[_0xf952f4(0x155)](_0x552659);}$gamePlayer[_0xf952f4(0x1eb)]();}),PluginManager[_0x1df9b9(0xc4)](pluginData[_0x1df9b9(0x1a6)],'MovePartyIndexToReserve',_0x4eb45f=>{const _0x261173=_0x1df9b9;if(!SceneManager[_0x261173(0x24a)]())return;if($gameParty[_0x261173(0x104)]()[_0x261173(0x14d)]<=0x1)return;if(!$gameParty[_0x261173(0x20a)])return;if($gameParty[_0x261173(0x20a)][_0x261173(0x14d)]<=0x0)return;VisuMZ[_0x261173(0x1a5)](_0x4eb45f,_0x4eb45f);const _0x204af1=_0x4eb45f['Index'],_0x2a7a35=$gameParty[_0x261173(0x20a)][_0x204af1];$gameParty[_0x261173(0x155)](_0x2a7a35),$gamePlayer['refresh']();}),PluginManager[_0x1df9b9(0xc4)](pluginData['name'],_0x1df9b9(0x166),_0x44ce46=>{const _0x281644=_0x1df9b9;if(!SceneManager[_0x281644(0x24a)]())return;if($gameParty[_0x281644(0x104)]()['length']>=$gameParty[_0x281644(0x294)]())return;if($gameParty['reserveMembers']()[_0x281644(0x14d)]<=0x0)return;const _0x2ac453=$gameParty[_0x281644(0x1f1)](),_0x432e0a=_0x2ac453[Math[_0x281644(0x1c4)](Math[_0x281644(0x103)]()*_0x2ac453[_0x281644(0x14d)])],_0x147cef=_0x432e0a[_0x281644(0xd8)]();$gameParty[_0x281644(0x182)](_0x147cef),$gamePlayer['refresh']();}),PluginManager['registerCommand'](pluginData[_0x1df9b9(0x1a6)],'LockPartyMembers',_0x19b082=>{const _0x5ce178=_0x1df9b9;VisuMZ[_0x5ce178(0x1a5)](_0x19b082,_0x19b082);const _0x3f2bc7=_0x19b082[_0x5ce178(0xea)]['map'](_0x193b9a=>$gameActors[_0x5ce178(0x11e)](_0x193b9a))[_0x5ce178(0x12a)](null),_0x1293ad=_0x19b082[_0x5ce178(0x1f5)];for(const _0x2c0f35 of _0x3f2bc7){if(!_0x2c0f35)continue;_0x2c0f35[_0x5ce178(0x1ce)](_0x1293ad);}}),PluginManager[_0x1df9b9(0xc4)](pluginData[_0x1df9b9(0x1a6)],'RequirePartyMembers',_0x567077=>{const _0x4b463d=_0x1df9b9;VisuMZ[_0x4b463d(0x1a5)](_0x567077,_0x567077);const _0x4ab40d=_0x567077[_0x4b463d(0xea)]['map'](_0x147f85=>$gameActors['actor'](_0x147f85))['remove'](null),_0x519e17=_0x567077[_0x4b463d(0x217)];for(const _0x381e65 of _0x4ab40d){if(!_0x381e65)continue;_0x381e65[_0x4b463d(0x1ad)](_0x519e17);}}),ImageManager[_0x1df9b9(0xe9)]=VisuMZ[_0x1df9b9(0x238)][_0x1df9b9(0x180)][_0x1df9b9(0xf1)]['LockIcon'],ImageManager['requiredPartyMemberIcon']=VisuMZ[_0x1df9b9(0x238)][_0x1df9b9(0x180)][_0x1df9b9(0xf1)][_0x1df9b9(0x194)],TextManager[_0x1df9b9(0xc2)]=VisuMZ['PartySystem'][_0x1df9b9(0x180)][_0x1df9b9(0x2af)]['ActiveParty'],TextManager[_0x1df9b9(0x2b6)]=VisuMZ['PartySystem']['Settings'][_0x1df9b9(0x2af)][_0x1df9b9(0x224)],TextManager[_0x1df9b9(0x208)]=VisuMZ[_0x1df9b9(0x238)]['Settings'][_0x1df9b9(0x2af)][_0x1df9b9(0x135)],TextManager[_0x1df9b9(0x254)]=VisuMZ[_0x1df9b9(0x238)][_0x1df9b9(0x180)][_0x1df9b9(0x2af)][_0x1df9b9(0x188)],TextManager[_0x1df9b9(0x124)]=VisuMZ[_0x1df9b9(0x238)][_0x1df9b9(0x180)][_0x1df9b9(0x2af)][_0x1df9b9(0x1b2)],TextManager[_0x1df9b9(0x139)]=VisuMZ['PartySystem'][_0x1df9b9(0x180)][_0x1df9b9(0x2af)][_0x1df9b9(0x211)],TextManager[_0x1df9b9(0x167)]=VisuMZ[_0x1df9b9(0x238)][_0x1df9b9(0x180)][_0x1df9b9(0x2af)][_0x1df9b9(0x29f)],TextManager[_0x1df9b9(0xb9)]=VisuMZ[_0x1df9b9(0x238)][_0x1df9b9(0x180)]['Vocab']['AssistSort'],TextManager[_0x1df9b9(0x1f4)]=VisuMZ[_0x1df9b9(0x238)][_0x1df9b9(0x180)][_0x1df9b9(0x2af)][_0x1df9b9(0xbb)],TextManager[_0x1df9b9(0x116)]=VisuMZ[_0x1df9b9(0x238)][_0x1df9b9(0x180)][_0x1df9b9(0x2af)][_0x1df9b9(0x144)],ColorManager['getColor']=function(_0x4f2671){const _0x37ab9d=_0x1df9b9;return _0x4f2671=String(_0x4f2671),_0x4f2671['match'](/#(.*)/i)?_0x37ab9d(0x2d8)['format'](String(RegExp['$1'])):this[_0x37ab9d(0x14f)](Number(_0x4f2671));},SceneManager[_0x1df9b9(0x108)]=function(){const _0x5314c8=_0x1df9b9;return this[_0x5314c8(0x18c)]&&this[_0x5314c8(0x18c)][_0x5314c8(0x285)]===Scene_Party;},SceneManager[_0x1df9b9(0x24a)]=function(){const _0x48e0da=_0x1df9b9;return this[_0x48e0da(0x18c)]&&this[_0x48e0da(0x18c)][_0x48e0da(0x285)]===Scene_Map;},VisuMZ['PartySystem'][_0x1df9b9(0x15d)]=BattleManager[_0x1df9b9(0x29d)],BattleManager[_0x1df9b9(0x29d)]=function(_0x28f794,_0x5c3141,_0x329b4a){const _0x2b4551=_0x1df9b9;VisuMZ[_0x2b4551(0x238)][_0x2b4551(0x15d)][_0x2b4551(0x295)](this,_0x28f794,_0x5c3141,_0x329b4a),$gameParty[_0x2b4551(0x1c5)]();},VisuMZ[_0x1df9b9(0x238)][_0x1df9b9(0x1a4)]=Game_Battler['prototype'][_0x1df9b9(0x1ab)],Game_Battler[_0x1df9b9(0x19c)]['onBattleStart']=function(_0x439504){const _0x1b54f3=_0x1df9b9;VisuMZ[_0x1b54f3(0x238)][_0x1b54f3(0x1a4)][_0x1b54f3(0x295)](this,_0x439504);if(this[_0x1b54f3(0xf5)]())this[_0x1b54f3(0x242)]();},VisuMZ[_0x1df9b9(0x238)][_0x1df9b9(0x2aa)]=Game_Battler[_0x1df9b9(0x19c)]['regenerateAll'],Game_Battler[_0x1df9b9(0x19c)]['regenerateAll']=function(){const _0x2fc511=_0x1df9b9;VisuMZ[_0x2fc511(0x238)][_0x2fc511(0x2aa)][_0x2fc511(0x295)](this);if(this[_0x2fc511(0xf5)]())this[_0x2fc511(0x117)]();},VisuMZ['PartySystem'][_0x1df9b9(0x28a)]=Game_Actor['prototype'][_0x1df9b9(0x29d)],Game_Actor[_0x1df9b9(0x19c)][_0x1df9b9(0x29d)]=function(_0x45a17f){const _0x1fe2be=_0x1df9b9;VisuMZ[_0x1fe2be(0x238)][_0x1fe2be(0x28a)][_0x1fe2be(0x295)](this,_0x45a17f),this[_0x1fe2be(0x257)](),this[_0x1fe2be(0x242)]();},Game_Actor[_0x1df9b9(0x19c)][_0x1df9b9(0x257)]=function(){const _0x4ba235=_0x1df9b9;this[_0x4ba235(0x22a)]=![],this[_0x4ba235(0x163)]=![];},Game_Actor[_0x1df9b9(0x19c)][_0x1df9b9(0x212)]=function(){const _0x1fab12=_0x1df9b9;if(this[_0x1fab12(0x22a)]===undefined)this[_0x1fab12(0x257)]();return!this[_0x1fab12(0x22a)];},Game_Actor[_0x1df9b9(0x19c)]['setPartyLock']=function(_0x5a8294){const _0x56d4d2=_0x1df9b9;if(this[_0x56d4d2(0x22a)]===undefined)this['initPartySystem']();this[_0x56d4d2(0x22a)]=_0x5a8294;},Game_Actor[_0x1df9b9(0x19c)]['isRequiredInParty']=function(){const _0x1b1bc9=_0x1df9b9;if(this['_partyRequired']===undefined)this['initPartySystem']();return this[_0x1b1bc9(0x163)];},Game_Actor['prototype'][_0x1df9b9(0x1ad)]=function(_0xf53f32){const _0x5a69f9=_0x1df9b9;if(this['_partyRequired']===undefined)this[_0x5a69f9(0x257)]();this[_0x5a69f9(0x163)]=_0xf53f32;},Game_Actor[_0x1df9b9(0x19c)]['clearPartySwitchCommandCooldown']=function(){const _0x4c34cb=_0x1df9b9;this[_0x4c34cb(0x18a)]=0x0;},Game_Actor[_0x1df9b9(0x19c)][_0x1df9b9(0x1ac)]=function(){const _0xfc42e6=_0x1df9b9;if(this[_0xfc42e6(0x18a)]===undefined)this[_0xfc42e6(0x242)]();if(!this['isFormationChangeOk']())return![];if(this[_0xfc42e6(0xec)]())return![];return this[_0xfc42e6(0x18a)]<=0x0;},Game_Actor[_0x1df9b9(0x19c)][_0x1df9b9(0xc6)]=function(){const _0x553bd2=_0x1df9b9;if(this[_0x553bd2(0x18a)]===undefined)this['clearPartySwitchCommandCooldown']();return this[_0x553bd2(0x18a)];},Game_Actor['prototype']['setBattlePartySwitchCooldown']=function(_0x297d39){const _0x2cb181=_0x1df9b9;if(this[_0x2cb181(0x18a)]===undefined)this['clearPartySwitchCommandCooldown']();this[_0x2cb181(0x18a)]=_0x297d39||0x0;},Game_Actor[_0x1df9b9(0x19c)]['applyBattlePartySwitchCooldown']=function(){const _0x3633ec=_0x1df9b9;if(this['_partySwitchBattleCommandCooldown']===undefined)this[_0x3633ec(0x242)]();const _0x133611=VisuMZ[_0x3633ec(0x238)][_0x3633ec(0x180)][_0x3633ec(0xf1)]['ActorCmdCooldown'];this[_0x3633ec(0x2b9)](_0x133611);},Game_Actor['prototype'][_0x1df9b9(0x117)]=function(){const _0x154dbc=_0x1df9b9;if(this[_0x154dbc(0x18a)]===undefined)this[_0x154dbc(0x242)]();this['_partySwitchBattleCommandCooldown']--;},Game_Actor[_0x1df9b9(0x19c)][_0x1df9b9(0x2ac)]=function(_0x21376a){const _0x21a527=_0x1df9b9;Imported['VisuMZ_2_BattleSystemCTB']&&BattleManager[_0x21a527(0x252)]()&&BattleManager[_0x21a527(0x15f)]();if(Imported['VisuMZ_2_BattleSystemSTB']&&BattleManager[_0x21a527(0x2ea)]()){if(_0x21a527(0x2b1)!==_0x21a527(0xd0))BattleManager['updateTurnOrderSTB'](),BattleManager['_subject']=this,BattleManager['_currentActor']=this;else{function _0x4cc009(){const _0x4435ce=_0x21a527;_0x19a8e3[_0x4435ce(0x19c)][_0x4435ce(0x22f)][_0x4435ce(0x295)](this),this['checkShiftRemoveShortcut']();}}}if(Imported[_0x21a527(0x132)]&&BattleManager[_0x21a527(0x156)]()){BattleManager[_0x21a527(0x1a2)]=undefined,BattleManager['_currentActor']=this;const _0x15b38a=BattleManager[_0x21a527(0x11d)][_0x21a527(0x16b)](_0x21376a);BattleManager[_0x21a527(0x11d)][_0x15b38a]=this,BattleManager[_0x21a527(0x1f9)]();}Imported[_0x21a527(0x2dd)]&&BattleManager[_0x21a527(0xc7)]()&&(BattleManager[_0x21a527(0x1a2)]=this,BattleManager[_0x21a527(0x207)]=this);if(Imported[_0x21a527(0x17d)]&&BattleManager[_0x21a527(0x19e)]()){BattleManager['_subject']=this,BattleManager['_currentActor']=this;for(let _0x1edaae=0x0;_0x1edaae<BattleManager['_actionBattlers']['length'];_0x1edaae++){const _0x42159e=BattleManager[_0x21a527(0x11d)][_0x1edaae];if(_0x42159e===_0x21376a){if(_0x21a527(0x2ab)===_0x21a527(0x2ab))BattleManager['_actionBattlers'][_0x1edaae]=this;else{function _0x5ed4ea(){const _0x1e2b28=_0x21a527,_0x3eaa65=this[_0x1e2b28(0x2de)]();this[_0x1e2b28(0x2c3)]=new _0x3f438e(_0x3eaa65),this['addWindow'](this[_0x1e2b28(0x2c3)]),this[_0x1e2b28(0x2c3)][_0x1e2b28(0x1d9)]('ok',this[_0x1e2b28(0x234)][_0x1e2b28(0x133)](this)),this[_0x1e2b28(0x2c3)][_0x1e2b28(0x1d9)](_0x1e2b28(0x2bf),this[_0x1e2b28(0x1d0)]['bind'](this));}}}}for(let _0x51c41f=0x0;_0x51c41f<BattleManager['_otb_actionBattlersNext'][_0x21a527(0x14d)];_0x51c41f++){if('bEPgM'!==_0x21a527(0x2e0)){const _0x3a06f7=BattleManager['_otb_actionBattlersNext'][_0x51c41f];_0x3a06f7===_0x21376a&&(BattleManager['_otb_actionBattlersNext'][_0x51c41f]=this);}else{function _0x36ec78(){const _0x4ecb20=_0x21a527;if(this[_0x4ecb20(0x1c6)]===_0xe8e80a)this['clearPartyBattleCommandCooldown']();return this[_0x4ecb20(0x1c6)];}}}}},VisuMZ[_0x1df9b9(0x238)][_0x1df9b9(0xfc)]=Game_Unit[_0x1df9b9(0x19c)][_0x1df9b9(0x251)],Game_Unit['prototype'][_0x1df9b9(0x251)]=function(){const _0x3ccf6c=_0x1df9b9;if(SceneManager[_0x3ccf6c(0x108)]())return![];return VisuMZ[_0x3ccf6c(0x238)]['Game_Unit_inBattle'][_0x3ccf6c(0x295)](this);},Game_Party[_0x1df9b9(0x1a3)]=VisuMZ['PartySystem'][_0x1df9b9(0x180)][_0x1df9b9(0xf1)]['MaxBattleMembers'],VisuMZ['PartySystem'][_0x1df9b9(0x138)]=Game_Party[_0x1df9b9(0x19c)]['initialize'],Game_Party[_0x1df9b9(0x19c)]['initialize']=function(){const _0x592e54=_0x1df9b9;VisuMZ['PartySystem'][_0x592e54(0x138)][_0x592e54(0x295)](this),this[_0x592e54(0x1c5)](),this['initMaxBattleMembers'](),this[_0x592e54(0x288)]();},Game_Party[_0x1df9b9(0x19c)][_0x1df9b9(0x1c5)]=function(){const _0x1043a0=_0x1df9b9;this[_0x1043a0(0x1c6)]=0x0;},Game_Party[_0x1df9b9(0x19c)]['canSwitchPartyInBattle']=function(){const _0x38e1fc=_0x1df9b9;if(this[_0x38e1fc(0x1c6)]===undefined)this[_0x38e1fc(0x1c5)]();return this[_0x38e1fc(0x1c6)]<=0x0;},Game_Party[_0x1df9b9(0x19c)][_0x1df9b9(0xc6)]=function(){const _0x479f4e=_0x1df9b9;if(this['_partySystemBattleCommandCooldown']===undefined)this[_0x479f4e(0x1c5)]();return this['_partySystemBattleCommandCooldown'];},Game_Party[_0x1df9b9(0x19c)][_0x1df9b9(0x2b9)]=function(_0x3cea0d){const _0x22f870=_0x1df9b9;if(this[_0x22f870(0x1c6)]===undefined)this['clearPartyBattleCommandCooldown']();this[_0x22f870(0x1c6)]=_0x3cea0d;},Game_Party[_0x1df9b9(0x19c)][_0x1df9b9(0x1be)]=function(){const _0x3bc00f=_0x1df9b9;if(this['_partySystemBattleCommandCooldown']===undefined)this[_0x3bc00f(0x1c5)]();this[_0x3bc00f(0x1c6)]=VisuMZ[_0x3bc00f(0x238)][_0x3bc00f(0x180)][_0x3bc00f(0xf1)][_0x3bc00f(0x290)]||0x0;},Game_Party[_0x1df9b9(0x19c)]['updateBattlePartySwitchCooldown']=function(){const _0x178126=_0x1df9b9;if(this[_0x178126(0x1c6)]===undefined)this[_0x178126(0x1c5)]();this[_0x178126(0x1c6)]--;},Game_Party['prototype'][_0x1df9b9(0x183)]=function(){this['_battleMaxSize']=0x0;},Game_Party['prototype']['changeMaxBattleMembers']=function(_0x44b03e){const _0x333791=_0x1df9b9;this[_0x333791(0x2cc)]=_0x44b03e,this[_0x333791(0x288)](!![]),$gamePlayer&&$gamePlayer[_0x333791(0x263)]()&&$gamePlayer[_0x333791(0x263)]()['changeMaxBattleMembers']();},Game_Followers[_0x1df9b9(0x19c)]['changeMaxBattleMembers']=function(){const _0xfff0e1=_0x1df9b9;if(!SceneManager['isSceneMap']())return;this['setup']();const _0x349868=$gameMap[_0xfff0e1(0xbf)](),_0x2d52d8=$gamePlayer['x'],_0x3c6e09=$gamePlayer['y'],_0x575ec8=$gamePlayer['direction']();$gameTemp[_0xfff0e1(0x2bb)]=!![],$gamePlayer['reserveTransfer'](_0x349868,_0x2d52d8,_0x3c6e09,_0x575ec8,0x0),setTimeout(this[_0xfff0e1(0xcb)][_0xfff0e1(0x133)](this),0x7d0);},Game_Followers['prototype'][_0x1df9b9(0xcb)]=function(){const _0x3d8ffa=_0x1df9b9;$gameTemp[_0x3d8ffa(0x2bb)]=![];},VisuMZ['PartySystem'][_0x1df9b9(0x13c)]=Scene_Base['prototype'][_0x1df9b9(0x241)],Scene_Base[_0x1df9b9(0x19c)]['isAutosaveEnabled']=function(){const _0x1c4971=_0x1df9b9;if($gameTemp[_0x1c4971(0x2bb)])return![];return VisuMZ[_0x1c4971(0x238)][_0x1c4971(0x13c)][_0x1c4971(0x295)](this);},Game_Party['prototype'][_0x1df9b9(0x294)]=function(){const _0xcc1438=_0x1df9b9;if(this[_0xcc1438(0x2cc)]===undefined)this[_0xcc1438(0x288)]();return this[_0xcc1438(0x2cc)]||Game_Party['defaultMaxBattleMembers'];},Game_Party['prototype'][_0x1df9b9(0x1d5)]=function(){const _0x407c35=_0x1df9b9;if(this['_battleMaxSize']===undefined)this['initBattleMembers']();if(!this[_0x407c35(0x20a)])this[_0x407c35(0x288)]();while(this[_0x407c35(0x20a)][_0x407c35(0x14d)]<this[_0x407c35(0x2cc)]){this[_0x407c35(0x20a)][_0x407c35(0x13f)](0x0);}},Game_Party[_0x1df9b9(0x19c)]['initBattleMembers']=function(_0x31317c){const _0x3d5dc3=_0x1df9b9;!_0x31317c&&(this['_battleMaxSize']=Game_Party[_0x3d5dc3(0x1a3)]);this[_0x3d5dc3(0x20a)]=this[_0x3d5dc3(0x268)][_0x3d5dc3(0x2b0)](0x0,this[_0x3d5dc3(0x2cc)]);while(this['_battleMembers'][_0x3d5dc3(0x14d)]<this[_0x3d5dc3(0x2cc)]){this[_0x3d5dc3(0x20a)][_0x3d5dc3(0x13f)](0x0);}if($gamePlayer)$gamePlayer[_0x3d5dc3(0x1eb)]();},Game_Party[_0x1df9b9(0x19c)][_0x1df9b9(0x104)]=function(){const _0x18814f=_0x1df9b9;return this['rawBattleMembers']()[_0x18814f(0xfa)](_0x535c9a=>!!_0x535c9a);},Game_Party[_0x1df9b9(0x19c)][_0x1df9b9(0x1ec)]=function(){const _0x18a143=_0x1df9b9;this[_0x18a143(0x1d5)]();const _0x3365ad=this[_0x18a143(0x20a)][_0x18a143(0x247)](_0x11da7f=>$gameActors[_0x18a143(0x11e)](_0x11da7f));return SceneManager[_0x18a143(0x108)]()?_0x3365ad:_0x3365ad[_0x18a143(0xfa)](_0x7c0365=>_0x7c0365&&_0x7c0365[_0x18a143(0x299)]());},Game_Party[_0x1df9b9(0x19c)]['reserveMembers']=function(){const _0x3d6e76=_0x1df9b9,_0x3ec342=this[_0x3d6e76(0x104)]();return this[_0x3d6e76(0x271)]()['filter'](_0x1ba396=>!_0x3ec342[_0x3d6e76(0x292)](_0x1ba396));},VisuMZ['PartySystem'][_0x1df9b9(0x1c1)]=Game_Party[_0x1df9b9(0x19c)][_0x1df9b9(0x2ec)],Game_Party[_0x1df9b9(0x19c)]['setupStartingMembers']=function(){const _0x11cfe1=_0x1df9b9;VisuMZ[_0x11cfe1(0x238)]['Game_Party_setupStartingMembers'][_0x11cfe1(0x295)](this),this[_0x11cfe1(0x288)]();},VisuMZ[_0x1df9b9(0x238)][_0x1df9b9(0x2ba)]=Game_Party[_0x1df9b9(0x19c)]['setupBattleTest'],Game_Party['prototype']['setupBattleTest']=function(){const _0x40c4a6=_0x1df9b9;VisuMZ[_0x40c4a6(0x238)][_0x40c4a6(0x2ba)][_0x40c4a6(0x295)](this),this[_0x40c4a6(0x205)]();},Game_Party['prototype'][_0x1df9b9(0xd5)]=function(){const _0x3ca997=_0x1df9b9;this[_0x3ca997(0x2cc)]=Game_Party[_0x3ca997(0x1a3)],this['_battleMembers']=[],this[_0x3ca997(0x268)]=[];for(const _0x476598 of $dataSystem[_0x3ca997(0x1b5)]){if('pGvVF'!==_0x3ca997(0x130)){const _0x5e05db=$gameActors[_0x3ca997(0x11e)](_0x476598['actorId']);if(!_0x5e05db)continue;_0x5e05db[_0x3ca997(0x23e)](_0x476598[_0x3ca997(0x17f)],![]),_0x5e05db[_0x3ca997(0x1fe)](_0x476598[_0x3ca997(0x152)]),_0x5e05db[_0x3ca997(0x2df)](),this[_0x3ca997(0x20a)][_0x3ca997(0x13f)](_0x476598[_0x3ca997(0xd8)]),this[_0x3ca997(0x268)][_0x3ca997(0x13f)](_0x476598[_0x3ca997(0xd8)]);}else{function _0x28a6c1(){const _0x127205=_0x3ca997;this[_0x127205(0x20a)][_0x127205(0x13f)](0x0);}}}while(this[_0x3ca997(0x20a)]['length']<this[_0x3ca997(0x2cc)]){this[_0x3ca997(0x20a)]['push'](0x0);}while(this[_0x3ca997(0x20a)][_0x3ca997(0x14d)]>this[_0x3ca997(0x294)]()){if(_0x3ca997(0x158)==='NQTgc'){function _0x2dc536(){const _0x5678d3=_0x3ca997;if(_0x3cebe9[_0x5678d3(0x15e)]&&_0x58c0e5[_0x5678d3(0xb6)]!==_0x393d94)return _0x5ee5a5[_0x5678d3(0xb6)];else return _0x1ee1b1[_0x5678d3(0x15e)]===![]?![]:_0x248a08[_0x5678d3(0x19c)][_0x5678d3(0x19d)][_0x5678d3(0x295)](this);}}else this[_0x3ca997(0x20a)][_0x3ca997(0x18f)]();}if($gamePlayer)$gamePlayer[_0x3ca997(0x1eb)]();},Game_Party[_0x1df9b9(0x19c)][_0x1df9b9(0x205)]=function(){const _0x59c00c=_0x1df9b9,_0x3bfbdb=this[_0x59c00c(0x104)]();for(let _0x33f6b8=0x1;_0x33f6b8<$dataActors['length'];_0x33f6b8++){if(_0x59c00c(0x25c)!==_0x59c00c(0x272)){const _0x3151db=$gameActors[_0x59c00c(0x11e)](_0x33f6b8);if(!_0x3151db)continue;if(_0x3151db['name']()[_0x59c00c(0x14d)]<=0x0)continue;if(_0x3151db[_0x59c00c(0x1a6)]()[_0x59c00c(0x147)](/-----/i))continue;if(_0x3bfbdb[_0x59c00c(0x292)](_0x3151db))continue;this['_actors'][_0x59c00c(0x13f)](_0x3151db[_0x59c00c(0xd8)]());}else{function _0x411300(){const _0x9b2ba3=_0x59c00c;_0x88f65f=_0xcb5a0||this[_0x9b2ba3(0x140)](),this[_0x9b2ba3(0x2b4)][_0x9b2ba3(0x1e8)]=0xa0;const _0x1ed4c2=_0x5d22d4[_0x9b2ba3(0x11a)]();this['contents']['fillRect'](_0x436661+0x1,_0x1883be+0x1,_0x40a0a7-0x2,_0x2f463e-0x2,_0x1ed4c2),this[_0x9b2ba3(0x2b4)]['paintOpacity']=0xff;}}}},VisuMZ[_0x1df9b9(0x238)][_0x1df9b9(0x2d9)]=Game_Party['prototype']['addActor'],Game_Party[_0x1df9b9(0x19c)]['addActor']=function(_0x3f5c59){const _0x1329d8=_0x1df9b9;VisuMZ['PartySystem'][_0x1329d8(0x2d9)]['call'](this,_0x3f5c59),this[_0x1329d8(0x182)](_0x3f5c59);if(SceneManager[_0x1329d8(0x2cf)]()){if(_0x1329d8(0x21a)===_0x1329d8(0x21a))Imported[_0x1329d8(0x17d)]&&BattleManager['isOTB']()&&(BattleManager[_0x1329d8(0x29e)](),BattleManager[_0x1329d8(0x141)]($gameActors[_0x1329d8(0x11e)](_0x3f5c59)));else{function _0x378af7(){const _0x2cc43b=_0x1329d8;this['index']()<=0x0?this['processCancel']():_0x28f318[_0x2cc43b(0x19c)][_0x2cc43b(0x2c7)]['call'](this,_0x4a8107);}}}},Game_Party[_0x1df9b9(0x19c)][_0x1df9b9(0x182)]=function(_0x1bfa03){const _0x24ac8c=_0x1df9b9;this[_0x24ac8c(0x1d5)]();if(this[_0x24ac8c(0x20a)][_0x24ac8c(0x292)](_0x1bfa03))return;if(!this[_0x24ac8c(0x268)][_0x24ac8c(0x292)](_0x1bfa03))return;if(!this[_0x24ac8c(0x20a)]['includes'](0x0))return;const _0x91e05c=$gameActors['actor'](_0x1bfa03);if(!_0x91e05c)return;const _0x36f59e=this[_0x24ac8c(0x20a)]['indexOf'](0x0);if(_0x36f59e<0x0)return;this[_0x24ac8c(0x20a)][_0x36f59e]=_0x1bfa03,_0x91e05c['makeActions'](),this[_0x24ac8c(0x2e9)]();},Game_Party[_0x1df9b9(0x19c)][_0x1df9b9(0xee)]=function(_0x368fce,_0x2a41ab){const _0x403472=_0x1df9b9;this[_0x403472(0x1d5)]();if(this[_0x403472(0x20a)][_0x403472(0x292)](_0x368fce))return;if(!this[_0x403472(0x20a)][_0x403472(0x292)](0x0))return;const _0x58f6b5=$gameActors[_0x403472(0x11e)](_0x368fce);if(!_0x58f6b5)return;this[_0x403472(0x20a)][_0x2a41ab]=_0x368fce,_0x58f6b5[_0x403472(0x2d7)](),this[_0x403472(0x2e9)]();},VisuMZ['PartySystem'][_0x1df9b9(0x20d)]=Game_Party[_0x1df9b9(0x19c)]['removeActor'],Game_Party[_0x1df9b9(0x19c)][_0x1df9b9(0x1fd)]=function(_0x499078){const _0x2c594d=_0x1df9b9;this[_0x2c594d(0x155)](_0x499078),VisuMZ[_0x2c594d(0x238)][_0x2c594d(0x20d)][_0x2c594d(0x295)](this,_0x499078);},Game_Party[_0x1df9b9(0x19c)][_0x1df9b9(0x155)]=function(_0x11c147){const _0x3e5d58=_0x1df9b9;this[_0x3e5d58(0x1d5)]();if(!this[_0x3e5d58(0x20a)]['includes'](_0x11c147))return;if(_0x11c147<=0x0)return;const _0x59ccc4=this[_0x3e5d58(0x20a)][_0x3e5d58(0x16b)](_0x11c147);this['_battleMembers'][_0x59ccc4]=0x0,this['_actors'][_0x3e5d58(0x12a)](_0x11c147),this[_0x3e5d58(0x268)]['push'](_0x11c147),this['partyChangeRefresh']();},Game_Party[_0x1df9b9(0x19c)][_0x1df9b9(0x2e9)]=function(){const _0x19ed0f=_0x1df9b9;this['rearrangePartyActors'](),$gamePlayer[_0x19ed0f(0x1eb)](),$gameMap['requestRefresh']();},Game_Party[_0x1df9b9(0x19c)][_0x1df9b9(0xf2)]=function(){const _0x3824c3=_0x1df9b9;this[_0x3824c3(0x1d5)]();const _0x329890=this['battleMembers']()[_0x3824c3(0x19a)](this[_0x3824c3(0x1f1)]());this[_0x3824c3(0x268)]=_0x329890[_0x3824c3(0x247)](_0x57b507=>_0x57b507?_0x57b507[_0x3824c3(0xd8)]():0x0)['remove'](0x0);},Game_Party[_0x1df9b9(0x19c)][_0x1df9b9(0x22d)]=function(){const _0x586b4d=_0x1df9b9;this[_0x586b4d(0x268)][_0x586b4d(0x27c)]((_0x32b82c,_0x2ae5f3)=>_0x32b82c-_0x2ae5f3),this[_0x586b4d(0xf2)](),this[_0x586b4d(0x2e9)]();},Game_Party[_0x1df9b9(0x19c)][_0x1df9b9(0x2a3)]=function(){const _0x1576e3=_0x1df9b9;for(const _0x302a0d of this['reserveMembers']()){if(!_0x302a0d)continue;if(_0x302a0d[_0x1576e3(0xec)]())return!![];}return![];},VisuMZ[_0x1df9b9(0x238)][_0x1df9b9(0x146)]=Game_Party[_0x1df9b9(0x19c)][_0x1df9b9(0x1f3)],Game_Party['prototype'][_0x1df9b9(0x1f3)]=function(_0x24ca33,_0x1d0f71){const _0x15cb65=_0x1df9b9;VisuMZ[_0x15cb65(0x238)][_0x15cb65(0x146)][_0x15cb65(0x295)](this,_0x24ca33,_0x1d0f71),this[_0x15cb65(0x274)](_0x24ca33,_0x1d0f71);},Game_Party[_0x1df9b9(0x19c)][_0x1df9b9(0x274)]=function(_0x1970d5,_0x1738e6){const _0x6aac4c=_0x1df9b9;this[_0x6aac4c(0x20a)]=[];for(let _0x2c88b2=0x0;_0x2c88b2<this[_0x6aac4c(0x268)][_0x6aac4c(0x14d)];_0x2c88b2++){if(_0x6aac4c(0x10b)===_0x6aac4c(0x154)){function _0x181fbe(){return _0x515267['rawBattleMembers']()[_0x5f0e97];}}else{if(this[_0x6aac4c(0x20a)]['length']>=this[_0x6aac4c(0x294)]())break;this[_0x6aac4c(0x20a)][_0x2c88b2]=this[_0x6aac4c(0x268)][_0x2c88b2];}}$gamePlayer['refresh']();},VisuMZ[_0x1df9b9(0x238)]['Game_Troop_increaseTurn']=Game_Troop[_0x1df9b9(0x19c)][_0x1df9b9(0x1e1)],Game_Troop[_0x1df9b9(0x19c)][_0x1df9b9(0x1e1)]=function(){const _0x4c1621=_0x1df9b9;VisuMZ[_0x4c1621(0x238)][_0x4c1621(0x15a)][_0x4c1621(0x295)](this),$gameParty['updateBattlePartySwitchCooldown']();},Scene_Menu[_0x1df9b9(0x19c)][_0x1df9b9(0x244)]=function(){const _0x491cd4=_0x1df9b9;SceneManager[_0x491cd4(0x13f)](Scene_Party);};function Scene_Party(){const _0x1d04c3=_0x1df9b9;this[_0x1d04c3(0x145)](...arguments);}Scene_Party[_0x1df9b9(0x19c)]=Object[_0x1df9b9(0x1a8)](Scene_MenuBase['prototype']),Scene_Party[_0x1df9b9(0x19c)]['constructor']=Scene_Party,Scene_Party['prototype'][_0x1df9b9(0x145)]=function(){const _0xfafe80=_0x1df9b9;this[_0xfafe80(0x1ae)](),Scene_MenuBase[_0xfafe80(0x19c)][_0xfafe80(0x145)]['call'](this);},Scene_Party['prototype'][_0x1df9b9(0x19d)]=function(){const _0x226eec=_0x1df9b9;if(ConfigManager['uiMenuStyle']&&ConfigManager[_0x226eec(0xb6)]!==undefined){if('lUnSG'===_0x226eec(0x1c7)){function _0x30da27(){_0x447587['push'](_0x3270a8);}}else return ConfigManager[_0x226eec(0xb6)];}else{if(ConfigManager[_0x226eec(0x15e)]===![]){if(_0x226eec(0x255)!=='jhijh')return![];else{function _0x4fc3f3(){const _0x361ef6=_0x226eec;return this[_0x361ef6(0x11e)](this[_0x361ef6(0x1df)]());}}}else return Scene_MenuBase[_0x226eec(0x19c)][_0x226eec(0x19d)][_0x226eec(0x295)](this);}},Scene_Party[_0x1df9b9(0x19c)][_0x1df9b9(0x175)]=function(){return 0x0;},Scene_Party[_0x1df9b9(0x19c)]['needsPageButtons']=function(){return!![];},Scene_Party[_0x1df9b9(0x19c)][_0x1df9b9(0x121)]=function(){const _0x54aab7=_0x1df9b9;Scene_MenuBase[_0x54aab7(0x19c)]['createPageButtons'][_0x54aab7(0x295)](this),this[_0x54aab7(0x1b7)]['_clickHandler']=undefined,this['_pagedownButton'][_0x54aab7(0x22c)]=undefined;},Scene_Party[_0x1df9b9(0x19c)][_0x1df9b9(0x1ae)]=function(){const _0x5ba5b3=_0x1df9b9;for(const _0x2ddefb of $gameParty[_0x5ba5b3(0x165)]()){ImageManager[_0x5ba5b3(0x249)](_0x2ddefb['faceName']()),ImageManager[_0x5ba5b3(0x24b)](_0x2ddefb['characterName']()),ImageManager['loadSvActor'](_0x2ddefb['battlerName']());}},Scene_Party[_0x1df9b9(0x19c)][_0x1df9b9(0x1a8)]=function(){const _0x5e8a85=_0x1df9b9;Scene_MenuBase['prototype'][_0x5e8a85(0x1a8)][_0x5e8a85(0x295)](this),this['createActivePartyLabel'](),this[_0x5e8a85(0x1dd)](),this[_0x5e8a85(0x287)](),this[_0x5e8a85(0x190)](),this[_0x5e8a85(0x162)](),this[_0x5e8a85(0x1ee)]();},Scene_Party[_0x1df9b9(0x19c)][_0x1df9b9(0x143)]=function(){const _0x1bc641=_0x1df9b9,_0x2787c8=this[_0x1bc641(0x1cd)]();this[_0x1bc641(0xf4)]=new Window_PartyLabel(_0x2787c8,TextManager[_0x1bc641(0xc2)]),this[_0x1bc641(0xf4)][_0x1bc641(0xd3)](VisuMZ[_0x1bc641(0x238)][_0x1bc641(0x180)][_0x1bc641(0x2d1)][_0x1bc641(0x286)]),this[_0x1bc641(0xb3)](this['_activePartyLabel']);},Scene_Party[_0x1df9b9(0x19c)]['activePartyLabelRect']=function(){const _0x544c34=_0x1df9b9;return VisuMZ[_0x544c34(0x238)][_0x544c34(0x180)][_0x544c34(0x2d1)][_0x544c34(0x2c0)][_0x544c34(0x295)](this);},Scene_Party[_0x1df9b9(0x19c)]['createActivePartyWindow']=function(){const _0x43f5e7=_0x1df9b9,_0x214e38=this[_0x43f5e7(0xcf)]();this[_0x43f5e7(0xf9)]=new Window_PartyActive(_0x214e38),this[_0x43f5e7(0xf9)]['setBackgroundType'](VisuMZ[_0x43f5e7(0x238)]['Settings']['Window'][_0x43f5e7(0x12e)]),this['_activePartyWindow'][_0x43f5e7(0x1d9)]('ok',this[_0x43f5e7(0x2e1)][_0x43f5e7(0x133)](this)),this[_0x43f5e7(0xf9)][_0x43f5e7(0x1d9)](_0x43f5e7(0x2bf),this[_0x43f5e7(0x110)][_0x43f5e7(0x133)](this)),this['addWindow'](this['_activePartyWindow']);},Scene_Party[_0x1df9b9(0x19c)][_0x1df9b9(0xcf)]=function(){const _0x4f5a37=_0x1df9b9;return VisuMZ['PartySystem']['Settings'][_0x4f5a37(0x2d1)][_0x4f5a37(0x1b0)][_0x4f5a37(0x295)](this);},Scene_Party[_0x1df9b9(0x19c)][_0x1df9b9(0x2e1)]=function(){const _0x5cb9fb=_0x1df9b9;this['_reservePartyWindow'][_0x5cb9fb(0x10e)](),this['_reservePartyWindow'][_0x5cb9fb(0xe8)]();},Scene_Party[_0x1df9b9(0x19c)][_0x1df9b9(0x287)]=function(){const _0x3fbbe6=_0x1df9b9,_0x3fa2d9=this[_0x3fbbe6(0x10a)]();this[_0x3fbbe6(0x1bd)]=new Window_PartyLabel(_0x3fa2d9,TextManager['reserveParty']),this[_0x3fbbe6(0x1bd)][_0x3fbbe6(0xd3)](VisuMZ[_0x3fbbe6(0x238)]['Settings'][_0x3fbbe6(0x2d1)]['ReservePartyLabelBgType']),this[_0x3fbbe6(0xb3)](this['_reservePartyLabel']);},Scene_Party[_0x1df9b9(0x19c)][_0x1df9b9(0x10a)]=function(){const _0x8b2ef=_0x1df9b9;return VisuMZ[_0x8b2ef(0x238)][_0x8b2ef(0x180)][_0x8b2ef(0x2d1)][_0x8b2ef(0x16a)][_0x8b2ef(0x295)](this);},Scene_Party[_0x1df9b9(0x19c)][_0x1df9b9(0x190)]=function(){const _0x7ba9f3=_0x1df9b9,_0x4d2a3e=this['reservePartyWindowRect']();this['_reservePartyWindow']=new Window_PartyReserve(_0x4d2a3e),this[_0x7ba9f3(0xe1)][_0x7ba9f3(0xd3)](VisuMZ[_0x7ba9f3(0x238)][_0x7ba9f3(0x180)][_0x7ba9f3(0x2d1)]['ReservePartyWindowBgType']),this[_0x7ba9f3(0xe1)]['setHandler']('ok',this[_0x7ba9f3(0x1db)][_0x7ba9f3(0x133)](this)),this[_0x7ba9f3(0xe1)][_0x7ba9f3(0x1d9)](_0x7ba9f3(0x2bf),this[_0x7ba9f3(0x2db)]['bind'](this)),this[_0x7ba9f3(0xb3)](this[_0x7ba9f3(0xe1)]);},Scene_Party[_0x1df9b9(0x19c)][_0x1df9b9(0xb4)]=function(){const _0x3c942a=_0x1df9b9;return VisuMZ[_0x3c942a(0x238)][_0x3c942a(0x180)][_0x3c942a(0x2d1)][_0x3c942a(0x20f)][_0x3c942a(0x295)](this);},Scene_Party[_0x1df9b9(0x19c)][_0x1df9b9(0x1db)]=function(){const _0x1be66e=_0x1df9b9,_0x480abb=this['_reservePartyWindow'][_0x1be66e(0x198)](),_0xca2ac6=this[_0x1be66e(0xf9)][_0x1be66e(0x2a9)]();if(_0x480abb<0x0){if(_0x1be66e(0x2c6)===_0x1be66e(0x2c6)){if(_0xca2ac6)$gameParty['removeActorFromBattleMembers'](_0xca2ac6['actorId']());}else{function _0x4520bc(){return _0x12f938['reserveMembers']()[_0x7133fc];}}}else{if('AcqUC'===_0x1be66e(0x174)){const _0x3a9774=this[_0x1be66e(0xe1)][_0x1be66e(0x2a9)]()[_0x1be66e(0xd8)](),_0x52325b=this[_0x1be66e(0xf9)][_0x1be66e(0x1df)]();if(_0xca2ac6)$gameParty[_0x1be66e(0x155)](_0xca2ac6['actorId']());$gameParty[_0x1be66e(0xee)](_0x3a9774,_0x52325b);}else{function _0x1efe78(){const _0x57e89a=_0x1be66e;for(const _0xfebc98 of _0x1cc8bd[_0x57e89a(0x165)]()){_0x553945['loadFace'](_0xfebc98[_0x57e89a(0x178)]()),_0x163743[_0x57e89a(0x24b)](_0xfebc98[_0x57e89a(0x213)]()),_0x4c1c27[_0x57e89a(0x21b)](_0xfebc98[_0x57e89a(0x1f8)]());}}}}this[_0x1be66e(0x13a)](),this['onReserveCancel']();},Scene_Party[_0x1df9b9(0x19c)][_0x1df9b9(0x13a)]=function(){const _0x202a09=_0x1df9b9;this[_0x202a09(0xf9)][_0x202a09(0x1eb)](),this[_0x202a09(0xe1)]['refresh']();},Scene_Party[_0x1df9b9(0x19c)]['onReserveCancel']=function(){const _0x54871d=_0x1df9b9;this[_0x54871d(0xe1)]['deactivate'](),this[_0x54871d(0xe1)][_0x54871d(0x1fa)](),this[_0x54871d(0xf9)]['activate']();},Scene_Party[_0x1df9b9(0x19c)]['createStatusLabel']=function(){const _0x55e6b1=_0x1df9b9,_0x3bfa57=this[_0x55e6b1(0x12d)]();this[_0x55e6b1(0x2e6)]=new Window_PartyLabel(_0x3bfa57,TextManager[_0x55e6b1(0x208)]),this[_0x55e6b1(0x2e6)][_0x55e6b1(0xd3)](VisuMZ[_0x55e6b1(0x238)][_0x55e6b1(0x180)][_0x55e6b1(0x2d1)][_0x55e6b1(0xc1)]),this['addWindow'](this[_0x55e6b1(0x2e6)]);},Scene_Party[_0x1df9b9(0x19c)][_0x1df9b9(0x12d)]=function(){const _0x47200d=_0x1df9b9;return VisuMZ['PartySystem'][_0x47200d(0x180)][_0x47200d(0x2d1)]['StatusLabelRect'][_0x47200d(0x295)](this);},Scene_Party['prototype']['createStatusWindow']=function(){const _0x19268b=_0x1df9b9,_0x51397e=this[_0x19268b(0xcc)]();this['_statusPartyWindow']=new Window_PartyStatus(_0x51397e),this[_0x19268b(0x1ff)][_0x19268b(0xd3)](VisuMZ[_0x19268b(0x238)][_0x19268b(0x180)]['Window'][_0x19268b(0x148)]),this[_0x19268b(0xb3)](this[_0x19268b(0x1ff)]),this[_0x19268b(0xe1)]['setStatusWindow'](this[_0x19268b(0x1ff)]),this[_0x19268b(0xf9)][_0x19268b(0x187)](this[_0x19268b(0x1ff)]);},Scene_Party['prototype'][_0x1df9b9(0xcc)]=function(){const _0xe0e3a4=_0x1df9b9;return VisuMZ[_0xe0e3a4(0x238)][_0xe0e3a4(0x180)][_0xe0e3a4(0x2d1)][_0xe0e3a4(0x296)][_0xe0e3a4(0x295)](this);},Scene_Party[_0x1df9b9(0x19c)]['buttonAssistKey3']=function(){const _0x387313=_0x1df9b9;return TextManager[_0x387313(0x196)](_0x387313(0x2b8));},Scene_Party[_0x1df9b9(0x19c)]['buttonAssistText1']=function(){return TextManager['assistSwapPositions'];},Scene_Party[_0x1df9b9(0x19c)][_0x1df9b9(0x134)]=function(){const _0x1af8ba=_0x1df9b9,_0x3ce9ca=this[_0x1af8ba(0xf9)],_0x32b0cd=this[_0x1af8ba(0xe1)];if(_0x3ce9ca&&_0x3ce9ca['active']&&_0x3ce9ca[_0x1af8ba(0x2a9)]()&&_0x3ce9ca[_0x1af8ba(0x1aa)]())return TextManager['assistRemovePartyMember'];else{if(_0x32b0cd&&_0x32b0cd['active']&&$gameParty[_0x1af8ba(0x1f1)]()[_0x1af8ba(0x14d)]>0x0){if(_0x1af8ba(0x1da)!==_0x1af8ba(0x1da)){function _0x237121(){const _0x356136=_0x1af8ba,_0x425c41=this[_0x356136(0x1cd)]();this[_0x356136(0xf4)]=new _0x1d97d6(_0x425c41,_0x1844bc['activeParty']),this[_0x356136(0xf4)][_0x356136(0xd3)](_0x55333d[_0x356136(0x238)]['Settings']['Window'][_0x356136(0x286)]),this[_0x356136(0xb3)](this[_0x356136(0xf4)]);}}else return TextManager['assistSortPartyMembers'];}else return'';}},Scene_Party[_0x1df9b9(0x19c)][_0x1df9b9(0x20e)]=function(){const _0x88bd71=_0x1df9b9;if(this[_0x88bd71(0xf9)]&&this['_activePartyWindow']['active'])return TextManager['assistSwapOutPartyMember'];else return this[_0x88bd71(0xe1)]&&this[_0x88bd71(0xe1)][_0x88bd71(0xfb)]?TextManager[_0x88bd71(0x1f4)]:Scene_MenuBase['prototype'][_0x88bd71(0x20e)][_0x88bd71(0x295)](this);},Scene_Party[_0x1df9b9(0x19c)][_0x1df9b9(0x201)]=function(){const _0x2c4fc0=_0x1df9b9;Scene_MenuBase[_0x2c4fc0(0x19c)][_0x2c4fc0(0x201)][_0x2c4fc0(0x295)](this),this[_0x2c4fc0(0x26b)](this['getBackgroundOpacity']()),this[_0x2c4fc0(0x17c)]();},Scene_Party[_0x1df9b9(0x19c)][_0x1df9b9(0x221)]=function(){const _0x2918ac=_0x1df9b9;return VisuMZ[_0x2918ac(0x238)]['Settings'][_0x2918ac(0xe0)][_0x2918ac(0x289)];},Scene_Party['prototype'][_0x1df9b9(0x17c)]=function(){const _0x4b4d53=_0x1df9b9,_0x20ce3a={'BgFilename1':VisuMZ[_0x4b4d53(0x238)][_0x4b4d53(0x180)]['BgSettings'][_0x4b4d53(0xf3)],'BgFilename2':VisuMZ[_0x4b4d53(0x238)][_0x4b4d53(0x180)][_0x4b4d53(0xe0)][_0x4b4d53(0x14c)]};_0x20ce3a&&(_0x20ce3a[_0x4b4d53(0xf3)]!==''||_0x20ce3a['BgFilename2']!=='')&&(this[_0x4b4d53(0x176)]=new Sprite(ImageManager[_0x4b4d53(0x2d2)](_0x20ce3a[_0x4b4d53(0xf3)])),this[_0x4b4d53(0x26c)]=new Sprite(ImageManager[_0x4b4d53(0x11f)](_0x20ce3a[_0x4b4d53(0x14c)])),this[_0x4b4d53(0x1c2)](this[_0x4b4d53(0x176)]),this['addChild'](this['_backSprite2']),this[_0x4b4d53(0x176)][_0x4b4d53(0x2d6)]['addLoadListener'](this[_0x4b4d53(0x2ad)][_0x4b4d53(0x133)](this,this[_0x4b4d53(0x176)])),this[_0x4b4d53(0x26c)][_0x4b4d53(0x2d6)][_0x4b4d53(0x191)](this[_0x4b4d53(0x2ad)]['bind'](this,this[_0x4b4d53(0x26c)])));},Scene_Party[_0x1df9b9(0x19c)][_0x1df9b9(0x2ad)]=function(_0x454a0e){this['scaleSprite'](_0x454a0e),this['centerSprite'](_0x454a0e);},Scene_Party[_0x1df9b9(0x19c)]['terminate']=function(){const _0x235a12=_0x1df9b9;Scene_MenuBase['prototype'][_0x235a12(0x2c4)]['call'](this),$gameParty[_0x235a12(0x2e9)]();},Window_StatusBase[_0x1df9b9(0x19c)][_0x1df9b9(0x1d4)]=function(_0x3c48b9,_0x829dec,_0x59bc5b,_0x3f4318){const _0x22efee=_0x1df9b9;if(!_0x3c48b9)return;if(_0x3f4318){if(_0x22efee(0x128)!==_0x22efee(0x128)){function _0x3fd7fc(){const _0x10d220=_0x22efee;return this[_0x10d220(0x11e)](this[_0x10d220(0x1df)]());}}else this[_0x22efee(0x1e4)](_0x3c48b9,_0x829dec,_0x59bc5b);}else{if(_0x22efee(0x151)===_0x22efee(0x151))this[_0x22efee(0x278)](_0x3c48b9,_0x829dec,_0x59bc5b);else{function _0x465428(){const _0x42c546=_0x22efee;this[_0x42c546(0x27a)]();}}}},Window_StatusBase[_0x1df9b9(0x19c)][_0x1df9b9(0x278)]=function(_0x2d0193,_0x906cfe,_0x4886c8){const _0x54100c=_0x1df9b9;_0x4886c8+=Math['round']((this[_0x54100c(0x140)]()-ImageManager[_0x54100c(0x210)])/0x2);if(!_0x2d0193['isFormationChangeOk']()){if(_0x54100c(0x27f)!==_0x54100c(0xd7))this[_0x54100c(0x1ed)](ImageManager[_0x54100c(0xe9)],_0x906cfe,_0x4886c8),_0x906cfe+=ImageManager[_0x54100c(0x2c9)]+0x4;else{function _0x28b0d1(){this['isOkEnabled']()&&this['processOk']();}}}_0x2d0193[_0x54100c(0xec)]()&&(this[_0x54100c(0x1ed)](ImageManager[_0x54100c(0x28b)],_0x906cfe,_0x4886c8),_0x906cfe+=ImageManager[_0x54100c(0x2c9)]+0x4);},Window_StatusBase[_0x1df9b9(0x19c)][_0x1df9b9(0x1e4)]=function(_0x59800f,_0x379830,_0x4c6304){const _0x417be4=_0x1df9b9;let _0xfac6a6=0x0;if(!_0x59800f['isFormationChangeOk']())_0xfac6a6+=0x1;if(_0x59800f[_0x417be4(0xec)]())_0xfac6a6+=0x1;if(_0xfac6a6<=0x1){if(_0x417be4(0xdb)===_0x417be4(0x14b)){function _0x37ceab(){const _0x4cb3ae=_0x417be4;_0x471e71[_0x4cb3ae(0x19c)][_0x4cb3ae(0x145)][_0x4cb3ae(0x295)](this,_0x564c6f),this['_lastIndex']=0x0,this['refresh']();}}else return this[_0x417be4(0x278)](_0x59800f,_0x379830,_0x4c6304);}_0x4c6304+=Math[_0x417be4(0x17e)]((this[_0x417be4(0x140)]()-ImageManager[_0x417be4(0x210)])/0x2),_0x4c6304-=Math[_0x417be4(0x17e)](this[_0x417be4(0x140)]()/0x2),this[_0x417be4(0x1ed)](ImageManager['lockPartyMemberIcon'],_0x379830,_0x4c6304),_0x4c6304+=this[_0x417be4(0x140)](),this['drawIcon'](ImageManager['requiredPartyMemberIcon'],_0x379830,_0x4c6304);};function Window_PartyLabel(){const _0x53da92=_0x1df9b9;this[_0x53da92(0x145)](...arguments);}Window_PartyLabel[_0x1df9b9(0x19c)]=Object[_0x1df9b9(0x1a8)](Window_Base[_0x1df9b9(0x19c)]),Window_PartyLabel[_0x1df9b9(0x19c)][_0x1df9b9(0x285)]=Window_PartyLabel,Window_PartyLabel[_0x1df9b9(0x19c)][_0x1df9b9(0x145)]=function(_0x253212,_0x31c3bf){const _0x239e5d=_0x1df9b9;Window_Base[_0x239e5d(0x19c)][_0x239e5d(0x145)]['call'](this,_0x253212),this[_0x239e5d(0x260)](_0x31c3bf);},Window_PartyLabel[_0x1df9b9(0x19c)]['updatePadding']=function(){const _0x4f75d5=_0x1df9b9;this[_0x4f75d5(0x2bc)]=0x0;},Window_PartyLabel['prototype'][_0x1df9b9(0x260)]=function(_0x37db36){const _0xc27509=_0x1df9b9;this[_0xc27509(0x2b4)]['clear'](),this[_0xc27509(0xff)](_0x37db36,0x0,0x0,this[_0xc27509(0x29c)],_0xc27509(0x2b5));};function Window_PartyActive(){this['initialize'](...arguments);}Window_PartyActive['prototype']=Object[_0x1df9b9(0x1a8)](Window_StatusBase[_0x1df9b9(0x19c)]),Window_PartyActive[_0x1df9b9(0x19c)][_0x1df9b9(0x285)]=Window_PartyActive,Window_PartyActive[_0x1df9b9(0x214)]=VisuMZ['PartySystem']['Settings'][_0x1df9b9(0x2d1)][_0x1df9b9(0xce)],Window_PartyActive[_0x1df9b9(0x19c)]['initialize']=function(_0x56c4f4){const _0x47de8d=_0x1df9b9;Window_StatusBase[_0x47de8d(0x19c)][_0x47de8d(0x145)][_0x47de8d(0x295)](this,_0x56c4f4),this[_0x47de8d(0x1eb)](),this['activate'](),this[_0x47de8d(0xd4)](0x0);},Window_PartyActive['prototype'][_0x1df9b9(0x12b)]=function(){const _0x18d65f=_0x1df9b9;return VisuMZ[_0x18d65f(0x238)][_0x18d65f(0x180)]['General'][_0x18d65f(0x215)];},Window_PartyActive[_0x1df9b9(0x19c)][_0x1df9b9(0xc5)]=function(){const _0x323152=_0x1df9b9;return $gameParty[_0x323152(0x294)]();},Window_PartyActive[_0x1df9b9(0x19c)][_0x1df9b9(0x284)]=function(){return $gameParty['maxBattleMembers']();},Window_PartyActive[_0x1df9b9(0x19c)]['itemHeight']=function(){const _0x2481fd=_0x1df9b9;return this[_0x2481fd(0x172)];},Window_PartyActive[_0x1df9b9(0x19c)][_0x1df9b9(0x11e)]=function(_0x148a7d){const _0x5e639b=_0x1df9b9;return $gameParty[_0x5e639b(0x1ec)]()[_0x148a7d];},Window_PartyActive[_0x1df9b9(0x19c)][_0x1df9b9(0x2a9)]=function(){const _0x433403=_0x1df9b9;return this[_0x433403(0x11e)](this[_0x433403(0x1df)]());},Window_PartyActive[_0x1df9b9(0x19c)][_0x1df9b9(0x20c)]=function(){const _0xd74636=_0x1df9b9,_0x2841d2=this[_0xd74636(0x11e)](this[_0xd74636(0x1df)]());return _0x2841d2?_0x2841d2[_0xd74636(0x212)]():!![];},Window_PartyActive[_0x1df9b9(0x19c)][_0x1df9b9(0x2e2)]=function(){const _0x4e986d=_0x1df9b9;if($gameParty[_0x4e986d(0x165)]()['length']<=0x0)return!![];if($gameParty[_0x4e986d(0x2a3)]())return![];return $gameParty[_0x4e986d(0x104)]()[_0x4e986d(0x14d)]>0x0;},Window_PartyActive[_0x1df9b9(0x19c)][_0x1df9b9(0x22f)]=function(){const _0x4afe31=_0x1df9b9;Window_StatusBase[_0x4afe31(0x19c)]['processCursorMove'][_0x4afe31(0x295)](this),this[_0x4afe31(0x197)]();},Window_PartyActive['prototype'][_0x1df9b9(0x137)]=function(_0x1c1e29){const _0x156892=_0x1df9b9;this[_0x156892(0x2b2)]()&&this['processOk']();},Window_PartyActive[_0x1df9b9(0x19c)][_0x1df9b9(0x15c)]=function(){const _0x36aee0=_0x1df9b9,_0x4ca8d4=this['index'](),_0x4f1662=_0x4ca8d4+0x1>=this['maxItems']()?0x0:_0x4ca8d4+0x1;this[_0x36aee0(0x12c)](_0x4ca8d4,_0x4f1662);},Window_PartyActive[_0x1df9b9(0x19c)]['cursorPageup']=function(){const _0x2d62dc=_0x1df9b9,_0x2bf67e=this[_0x2d62dc(0x1df)](),_0x2276f6=_0x2bf67e-0x1<0x0?this[_0x2d62dc(0xc5)]()-0x1:_0x2bf67e-0x1;this[_0x2d62dc(0x12c)](_0x2bf67e,_0x2276f6);},Window_PartyActive['prototype'][_0x1df9b9(0x12c)]=function(_0x29bf22,_0x5827a3){const _0x115919=_0x1df9b9,_0x239afc=this[_0x115919(0x11e)](_0x29bf22),_0x34498e=this[_0x115919(0x11e)](_0x5827a3);if(_0x239afc&&!_0x239afc[_0x115919(0x212)]())return;if(_0x34498e&&!_0x34498e[_0x115919(0x212)]())return;const _0xdef684=$gameParty[_0x115919(0x20a)];_0xdef684[_0x29bf22]=_0x34498e?_0x34498e['actorId']():0x0,_0xdef684[_0x5827a3]=_0x239afc?_0x239afc['actorId']():0x0,this[_0x115919(0x1eb)](),this[_0x115919(0x2a5)](),this[_0x115919(0xd4)](_0x5827a3);},Window_PartyActive[_0x1df9b9(0x19c)][_0x1df9b9(0x197)]=function(){const _0x18a922=_0x1df9b9;if(!this[_0x18a922(0x1aa)]())return;if(Input['isTriggered'](_0x18a922(0x2b8))){const _0x4dcda0=this[_0x18a922(0x2a9)]();this[_0x18a922(0x1fc)]();}},Window_PartyActive['prototype'][_0x1df9b9(0x1fc)]=function(){const _0x493aae=_0x1df9b9;SoundManager[_0x493aae(0x1a9)]();const _0x4e8d07=this[_0x493aae(0x2a9)]();$gameParty['removeActorFromBattleMembers'](_0x4e8d07[_0x493aae(0xd8)]()),this['callUpdateHelp'](),SceneManager[_0x493aae(0x18c)][_0x493aae(0x13a)]();},Window_PartyActive[_0x1df9b9(0x19c)]['isShiftRemoveShortcutEnabled']=function(){const _0x2d5cc9=_0x1df9b9;if(!this[_0x2d5cc9(0x12b)]())return![];const _0x7a69df=this[_0x2d5cc9(0x2a9)]();return this[_0x2d5cc9(0xfb)]&&_0x7a69df&&_0x7a69df[_0x2d5cc9(0x212)]();},Window_PartyActive[_0x1df9b9(0x19c)][_0x1df9b9(0x2b3)]=function(_0x15bf2e){const _0x1c8fc1=_0x1df9b9,_0x52d106=this['actor'](_0x15bf2e);if(!_0x52d106)return this[_0x1c8fc1(0x102)](_0x15bf2e);this[_0x1c8fc1(0x1b8)]();const _0x428f3b=this[_0x1c8fc1(0x107)](_0x15bf2e);this['drawItemImage'](_0x15bf2e);const _0x4475ef=_0x428f3b['y']+_0x428f3b[_0x1c8fc1(0x17a)]-this[_0x1c8fc1(0x140)]();this['drawDarkRect'](_0x428f3b['x'],_0x4475ef,_0x428f3b[_0x1c8fc1(0x204)],0x2),this[_0x1c8fc1(0x1d4)](_0x52d106,_0x428f3b['x']+0x2,_0x428f3b['y']),this[_0x1c8fc1(0x266)](_0x52d106,_0x428f3b['x'],_0x4475ef,_0x428f3b[_0x1c8fc1(0x204)]);},Window_PartyActive[_0x1df9b9(0x19c)][_0x1df9b9(0x102)]=function(_0x4d5428){const _0xd260f2=_0x1df9b9;this[_0xd260f2(0x1b8)]();const _0x454564=this['itemRect'](_0x4d5428);this[_0xd260f2(0x2dc)](_0x454564['x'],_0x454564['y'],_0x454564[_0xd260f2(0x204)],_0x454564['height']);const _0x589505=_0x454564['y']+Math[_0xd260f2(0x17e)]((_0x454564['height']-this['lineHeight']())/0x2);this['changeTextColor'](ColorManager[_0xd260f2(0x2da)]()),this['drawText'](TextManager['emptyPartyMember'],_0x454564['x'],_0x589505,_0x454564[_0xd260f2(0x204)],_0xd260f2(0x2b5));},Window_PartyActive['prototype'][_0x1df9b9(0x2dc)]=function(_0x111d2a,_0x216d7c,_0x5110b0,_0x343dd9,_0x2e2b0b){const _0x4ee8e8=_0x1df9b9;_0x2e2b0b=Math[_0x4ee8e8(0x179)](_0x2e2b0b||0x1,0x1);while(_0x2e2b0b--){_0x343dd9=_0x343dd9||this[_0x4ee8e8(0x140)](),this[_0x4ee8e8(0x2b4)][_0x4ee8e8(0x1e8)]=0xa0;const _0x35ff72=ColorManager[_0x4ee8e8(0x16e)]();this['contents']['fillRect'](_0x111d2a+0x1,_0x216d7c+0x1,_0x5110b0-0x2,_0x343dd9-0x2,_0x35ff72),this[_0x4ee8e8(0x2b4)][_0x4ee8e8(0x1e8)]=0xff;}},Window_PartyActive['prototype'][_0x1df9b9(0x1a7)]=function(_0x37bf31){const _0x155ad4=_0x1df9b9;switch(Window_PartyActive['_actorGraphic'][_0x155ad4(0x245)]()[_0x155ad4(0x1af)]()){case _0x155ad4(0x1d7):this[_0x155ad4(0x1b9)](_0x37bf31);break;case _0x155ad4(0x1b6):this[_0x155ad4(0x173)](_0x37bf31);break;case _0x155ad4(0x193):if(Imported[_0x155ad4(0x237)]){if(_0x155ad4(0x2a0)!==_0x155ad4(0x2a0)){function _0x2c5ea2(){const _0x39f720=_0x155ad4,_0x3dbb9a=this['actor'](this['index']());return _0x3dbb9a?_0x3dbb9a[_0x39f720(0x212)]():!![];}}else this[_0x155ad4(0x1bf)](_0x37bf31);}break;};},Window_PartyActive['prototype']['drawItemImageFace']=function(_0xbb0124){const _0x137215=_0x1df9b9,_0x5c3b92=this[_0x137215(0x11e)](_0xbb0124),_0x1c1881=this[_0x137215(0x107)](_0xbb0124),_0x4b2dd7=Math[_0x137215(0x14a)](ImageManager['faceWidth'],_0x1c1881[_0x137215(0x204)]-0x2),_0x261464=_0x1c1881[_0x137215(0x17a)]-0x2;this['changePaintOpacity'](_0x5c3b92[_0x137215(0x212)]());const _0x466cbc=Math[_0x137215(0x17e)](_0x1c1881['x']+(_0x1c1881['width']-_0x4b2dd7)/0x2);this[_0x137215(0xe7)](_0x5c3b92,_0x466cbc,_0x1c1881['y']+0x1,_0x4b2dd7,_0x261464),this['changePaintOpacity'](!![]);},Window_PartyActive[_0x1df9b9(0x19c)][_0x1df9b9(0x173)]=function(_0x7a16d2){const _0x18137b=_0x1df9b9,_0x295aea=this['actor'](_0x7a16d2),_0x388a25=this[_0x18137b(0x107)](_0x7a16d2),_0xff09e0=VisuMZ[_0x18137b(0x238)][_0x18137b(0x180)]['Window'],_0x2ec0cd=_0x388a25['x']+Math[_0x18137b(0x17e)](_0x388a25[_0x18137b(0x204)]/0x2)+_0xff09e0[_0x18137b(0x28c)],_0x566bc3=_0x388a25['y']+_0x388a25[_0x18137b(0x17a)]-this[_0x18137b(0x140)]()-_0xff09e0[_0x18137b(0x206)];this[_0x18137b(0x26a)](_0x295aea,_0x2ec0cd,_0x566bc3);},Window_PartyActive[_0x1df9b9(0x19c)][_0x1df9b9(0x1bf)]=function(_0x543d28){const _0x29a7fe=_0x1df9b9,_0x187157=this[_0x29a7fe(0x11e)](_0x543d28),_0x2d5541=_0x187157[_0x29a7fe(0x1f8)](),_0x469f82=this[_0x29a7fe(0x107)](_0x543d28),_0x2f6926=VisuMZ[_0x29a7fe(0x238)]['Settings']['Window'],_0x57f187=_0x469f82['x']+Math[_0x29a7fe(0x17e)](_0x469f82[_0x29a7fe(0x204)]/0x2)+_0x2f6926[_0x29a7fe(0x170)],_0x2d57e7=_0x469f82['y']+_0x469f82[_0x29a7fe(0x17a)]-this[_0x29a7fe(0x140)]()-_0x2f6926[_0x29a7fe(0x280)];this[_0x29a7fe(0x18e)](_0x2d5541,_0x57f187,_0x2d57e7);},Window_PartyActive['prototype'][_0x1df9b9(0x10c)]=function(_0x13fcd0,_0x432a2a,_0x3d322b,_0x570ba6){const _0x4ac7b2=_0x1df9b9,_0x246eab=ColorManager['dimColor1'](),_0x4d545f=ColorManager[_0x4ac7b2(0x24e)](),_0x3aca20=_0x3d322b/0x2,_0x138ddb=this[_0x4ac7b2(0x140)]();while(_0x570ba6--){if(_0x4ac7b2(0x1d1)!==_0x4ac7b2(0x1d1)){function _0xfaca5c(){const _0x2518ce=_0x4ac7b2,_0x592951=this['actor'](_0x267239),_0x5bcfc5=this['itemRect'](_0x5632ae),_0x3afdef=_0x58fcd3[_0x2518ce(0x14a)](_0x430b01[_0x2518ce(0x1ea)],_0x5bcfc5[_0x2518ce(0x204)]-0x2),_0x23eef0=_0x5bcfc5[_0x2518ce(0x17a)]-0x2;this[_0x2518ce(0x298)](_0x592951['isFormationChangeOk']());const _0x508a31=_0x5a024a[_0x2518ce(0x17e)](_0x5bcfc5['x']+(_0x5bcfc5[_0x2518ce(0x204)]-_0x3afdef)/0x2);this['drawActorFace'](_0x592951,_0x508a31,_0x5bcfc5['y']+0x1,_0x3afdef,_0x23eef0),this['changePaintOpacity'](!![]);}}else this[_0x4ac7b2(0x2b4)]['gradientFillRect'](_0x13fcd0,_0x432a2a,_0x3aca20,_0x138ddb,_0x4d545f,_0x246eab),this[_0x4ac7b2(0x2b4)][_0x4ac7b2(0xeb)](_0x13fcd0+_0x3aca20,_0x432a2a,_0x3aca20,_0x138ddb,_0x246eab,_0x4d545f);}},Window_PartyActive[_0x1df9b9(0x19c)][_0x1df9b9(0x266)]=function(_0x5dc7a9,_0x24abe7,_0x31fdcc,_0x3fa433){const _0x28b5f7=_0x1df9b9;_0x3fa433=_0x3fa433||0xa8,this[_0x28b5f7(0xdc)](ColorManager[_0x28b5f7(0x270)](_0x5dc7a9)),this[_0x28b5f7(0xff)](_0x5dc7a9['name'](),_0x24abe7,_0x31fdcc,_0x3fa433,'center');},Window_PartyActive[_0x1df9b9(0x19c)][_0x1df9b9(0x187)]=function(_0x282a5f){this['_statusWindow']=_0x282a5f,this['callUpdateHelp']();},Window_PartyActive['prototype'][_0x1df9b9(0x1e2)]=function(){const _0x5c8da7=_0x1df9b9;if(this['_statusWindow'])this['_statusWindow'][_0x5c8da7(0x1dc)](this[_0x5c8da7(0x11e)](this['index']()));};function Window_PartyReserve(){const _0x1832c0=_0x1df9b9;this[_0x1832c0(0x145)](...arguments);}Window_PartyReserve['prototype']=Object[_0x1df9b9(0x1a8)](Window_StatusBase[_0x1df9b9(0x19c)]),Window_PartyReserve[_0x1df9b9(0x19c)][_0x1df9b9(0x285)]=Window_PartyReserve,Window_PartyReserve[_0x1df9b9(0x214)]=VisuMZ['PartySystem']['Settings']['Window'][_0x1df9b9(0x232)],Window_PartyReserve[_0x1df9b9(0x262)]=VisuMZ[_0x1df9b9(0x238)]['Settings']['Window'][_0x1df9b9(0x230)],Window_PartyReserve['prototype']['initialize']=function(_0x2d18f1){const _0x4a3388=_0x1df9b9;Window_StatusBase[_0x4a3388(0x19c)][_0x4a3388(0x145)][_0x4a3388(0x295)](this,_0x2d18f1),this[_0x4a3388(0x186)]=0x0,this[_0x4a3388(0x1eb)]();},Window_PartyReserve[_0x1df9b9(0x19c)][_0x1df9b9(0x284)]=function(){const _0x146137=_0x1df9b9;return VisuMZ['PartySystem'][_0x146137(0x180)]['Window'][_0x146137(0x2c5)]||0x1;},Window_PartyReserve[_0x1df9b9(0x19c)][_0x1df9b9(0x275)]=function(){const _0xf24887=_0x1df9b9;return this[_0xf24887(0x140)]()*Window_PartyReserve[_0xf24887(0x262)]+0x6;},Window_PartyReserve[_0x1df9b9(0x19c)][_0x1df9b9(0x12b)]=function(){const _0x5af43a=_0x1df9b9;return VisuMZ['PartySystem'][_0x5af43a(0x180)]['General'][_0x5af43a(0x215)];},Window_PartyReserve[_0x1df9b9(0x19c)][_0x1df9b9(0xc5)]=function(){const _0xddb939=_0x1df9b9;let _0x18a053=$gameParty[_0xddb939(0x1f1)]()[_0xddb939(0x14d)];if(this[_0xddb939(0x12b)]())_0x18a053++;return _0x18a053;},Window_PartyReserve[_0x1df9b9(0x19c)][_0x1df9b9(0x11e)]=function(_0x248b68){const _0x1b89b3=_0x1df9b9;return $gameParty[_0x1b89b3(0x1f1)]()[_0x248b68];},Window_PartyReserve[_0x1df9b9(0x19c)][_0x1df9b9(0x2a9)]=function(){const _0x126104=_0x1df9b9;return this[_0x126104(0x11e)](this[_0x126104(0x1df)]());},Window_PartyReserve[_0x1df9b9(0x19c)][_0x1df9b9(0x200)]=function(){SoundManager['playEquip']();},Window_PartyReserve[_0x1df9b9(0x19c)]['isCurrentItemEnabled']=function(){const _0x454069=_0x1df9b9,_0x147b12=this['actor'](this[_0x454069(0x1df)]());return _0x147b12?_0x147b12['isFormationChangeOk']():!![];},Window_PartyReserve[_0x1df9b9(0x19c)]['processCursorMove']=function(){const _0xd970b3=_0x1df9b9;Window_StatusBase['prototype'][_0xd970b3(0x22f)]['call'](this),this[_0xd970b3(0x13b)]();},Window_PartyReserve['prototype'][_0x1df9b9(0x2c7)]=function(_0xd4f86d){const _0x5e87e9=_0x1df9b9;if(this[_0x5e87e9(0x1df)]()<=0x0){if(_0x5e87e9(0x27e)!=='mzQCD')this[_0x5e87e9(0x227)]();else{function _0x2557f7(){const _0x214d65=_0x5e87e9;this[_0x214d65(0x1b8)]();const _0x1f0d3d=this[_0x214d65(0x107)](_0x5973db);this[_0x214d65(0x2dc)](_0x1f0d3d['x'],_0x1f0d3d['y'],_0x1f0d3d[_0x214d65(0x204)],_0x1f0d3d[_0x214d65(0x17a)]);const _0x1ceed5=_0x1f0d3d['y']+_0x3a3bb6['round']((_0x1f0d3d[_0x214d65(0x17a)]-this[_0x214d65(0x140)]())/0x2);this['changeTextColor'](_0x4e9639[_0x214d65(0x2da)]()),this[_0x214d65(0xff)](_0x4c5797[_0x214d65(0x254)],_0x1f0d3d['x'],_0x1ceed5,_0x1f0d3d[_0x214d65(0x204)],_0x214d65(0x2b5));}}}else Window_StatusBase['prototype'][_0x5e87e9(0x2c7)][_0x5e87e9(0x295)](this,_0xd4f86d);},Window_PartyReserve[_0x1df9b9(0x19c)]['cursorPagedown']=function(){const _0x1f7e2d=_0x1df9b9,_0x5ab387=this[_0x1f7e2d(0x1df)](),_0x56110d=_0x5ab387+0x1>=this[_0x1f7e2d(0xc5)]()-0x1?0x0:_0x5ab387+0x1;this[_0x1f7e2d(0x12c)](_0x5ab387,_0x56110d);},Window_PartyReserve['prototype'][_0x1df9b9(0x2c1)]=function(){const _0xfc4827=_0x1df9b9,_0xa664da=this[_0xfc4827(0x1df)](),_0x236c07=_0xa664da-0x1<0x0?this[_0xfc4827(0xc5)]()-0x2:_0xa664da-0x1;this[_0xfc4827(0x12c)](_0xa664da,_0x236c07);},Window_PartyReserve['prototype'][_0x1df9b9(0x12c)]=function(_0x2155e0,_0x45cf54){const _0x33db10=_0x1df9b9,_0x1aebf6=this[_0x33db10(0x11e)](_0x2155e0),_0x4da9e9=this['actor'](_0x45cf54);if(!_0x1aebf6?.[_0x33db10(0x212)]()||!_0x4da9e9?.['isFormationChangeOk']()){if(_0x33db10(0x115)!==_0x33db10(0x199))return;else{function _0x2ced4b(){const _0x3f0b0f=_0x33db10,_0x1488c8=_0x134066[_0x3f0b0f(0x1c9)](_0x2bb1fa);this[_0x3f0b0f(0xdc)](_0x7e209e['systemColor']()),this[_0x3f0b0f(0xff)](_0x1488c8,_0x4c5983+_0x1448c0,_0x44d8f9,_0x43aeb2);}}}else{if(!_0x1aebf6||!_0x4da9e9)return;}const _0x325791=$gameParty[_0x33db10(0x268)],_0x2f9c1a=_0x325791[_0x33db10(0x16b)](_0x1aebf6[_0x33db10(0xd8)]()),_0x3bd02d=_0x325791[_0x33db10(0x16b)](_0x4da9e9['actorId']());_0x325791[_0x2f9c1a]=_0x4da9e9?_0x4da9e9[_0x33db10(0xd8)]():0x0,_0x325791[_0x3bd02d]=_0x1aebf6?_0x1aebf6[_0x33db10(0xd8)]():0x0,this['refresh'](),this[_0x33db10(0x2a5)](),this[_0x33db10(0xd4)](_0x45cf54);},Window_PartyReserve[_0x1df9b9(0x19c)]['checkShiftSortShortcut']=function(){const _0x10f447=_0x1df9b9;if(!this['isShiftShortcutEnabled']())return;if(Input[_0x10f447(0x1d3)](_0x10f447(0x2b8))){if(_0x10f447(0x1e0)!==_0x10f447(0x1e0)){function _0x3c53bd(){this['_partySystemBattleCommandCooldown']=0x0;}}else this[_0x10f447(0xed)]();}},Window_PartyReserve[_0x1df9b9(0x19c)][_0x1df9b9(0xed)]=function(){const _0x465f53=_0x1df9b9;SoundManager[_0x465f53(0x1a9)](),$gameParty[_0x465f53(0x22d)](),this['smoothSelect'](0x0),SceneManager[_0x465f53(0x18c)][_0x465f53(0x13a)]();},Window_PartyReserve[_0x1df9b9(0x19c)]['isShiftShortcutEnabled']=function(){const _0x12d6e1=_0x1df9b9;return this[_0x12d6e1(0xfb)];},Window_PartyReserve[_0x1df9b9(0x19c)][_0x1df9b9(0x198)]=function(){const _0x369eb7=_0x1df9b9,_0x586f5f=this[_0x369eb7(0x2a9)]();return _0x586f5f?_0x586f5f[_0x369eb7(0x1df)]():-0x1;},Window_PartyReserve['prototype']['select']=function(_0x4d7772){const _0x54e9d5=_0x1df9b9;Window_StatusBase[_0x54e9d5(0x19c)]['select'][_0x54e9d5(0x295)](this,_0x4d7772);if(_0x4d7772>=0x0)this[_0x54e9d5(0x186)]=_0x4d7772;},Window_PartyReserve['prototype'][_0x1df9b9(0xe8)]=function(){const _0x3b6a49=_0x1df9b9;this['_lastIndex']=Math[_0x3b6a49(0x14a)](this['_lastIndex'],this[_0x3b6a49(0xc5)]()-0x1),this[_0x3b6a49(0xd4)](this[_0x3b6a49(0x186)]),this['ensureCursorVisible'](!![]),this[_0x3b6a49(0x2e8)]=!![];},Window_PartyReserve[_0x1df9b9(0x19c)]['drawItem']=function(_0x375fb7){const _0x47462d=_0x1df9b9,_0x4399c5=this[_0x47462d(0x11e)](_0x375fb7);if(!_0x4399c5)return this['drawRemoveCommand'](_0x375fb7);const _0x22fcc1=this[_0x47462d(0x2e3)](_0x375fb7);this['drawItemImage'](_0x375fb7);const _0x53c1bb=0xa8,_0x3a585f=Window_PartyReserve[_0x47462d(0x262)]===0x1,_0xfbd66=ImageManager[_0x47462d(0x2c9)]*(_0x3a585f?0x2:0x1),_0x30e71f=this[_0x47462d(0x264)]()+this['itemPadding'](),_0x24cfb5=_0x22fcc1[_0x47462d(0x204)]-_0x53c1bb,_0x10913d=_0x22fcc1['x']+_0xfbd66+Math['min'](_0x30e71f,_0x24cfb5),_0x3849b4=_0x3a585f?![]:!![];this[_0x47462d(0x298)](_0x4399c5['isFormationChangeOk']()),this[_0x47462d(0x1d4)](_0x4399c5,_0x22fcc1['x'],_0x22fcc1['y'],_0x3849b4),this[_0x47462d(0x266)](_0x4399c5,_0x10913d,_0x22fcc1['y'],_0x53c1bb),this[_0x47462d(0x298)](!![]);},Window_PartyReserve['prototype'][_0x1df9b9(0x264)]=function(){const _0xad129=_0x1df9b9,_0x2e1b82=VisuMZ[_0xad129(0x238)]['Settings']['Window'];switch(Window_PartyReserve[_0xad129(0x214)][_0xad129(0x245)]()['trim']()){case _0xad129(0x1d7):return ImageManager[_0xad129(0x1ea)];case'sprite':return _0x2e1b82[_0xad129(0xfd)]*0x2;case'svbattler':return _0x2e1b82[_0xad129(0x11b)]*0x2;};},Window_PartyReserve[_0x1df9b9(0x19c)][_0x1df9b9(0x195)]=function(_0x27c7ee){const _0x4affb7=_0x1df9b9,_0x40b751=this[_0x4affb7(0x2e3)](_0x27c7ee);this[_0x4affb7(0x298)](!![]);const _0x21f267=TextManager['removePartyMember'];this[_0x4affb7(0xff)](_0x21f267,_0x40b751['x'],_0x40b751['y'],_0x40b751['width'],_0x4affb7(0x2b5));},Window_PartyReserve['prototype'][_0x1df9b9(0x1a7)]=function(_0x2c8342){const _0x4d4e12=_0x1df9b9;switch(Window_PartyReserve[_0x4d4e12(0x214)][_0x4d4e12(0x245)]()[_0x4d4e12(0x1af)]()){case _0x4d4e12(0x1d7):this[_0x4d4e12(0x1b9)](_0x2c8342);break;case _0x4d4e12(0x1b6):this[_0x4d4e12(0x173)](_0x2c8342);break;case _0x4d4e12(0x193):if(Imported['VisuMZ_1_MainMenuCore']){if(_0x4d4e12(0xe6)==='oydoK')this[_0x4d4e12(0x1bf)](_0x2c8342);else{function _0xbccfcd(){const _0x1d7c54=_0x4d4e12;_0xdb066[_0x1d7c54(0x238)][_0x1d7c54(0x138)][_0x1d7c54(0x295)](this),this[_0x1d7c54(0x1c5)](),this[_0x1d7c54(0x183)](),this[_0x1d7c54(0x288)]();}}}break;};},Window_PartyReserve['prototype']['drawItemImageFace']=function(_0x5d0279){const _0x5c18af=_0x1df9b9,_0x2f6174=this['actor'](_0x5d0279),_0x305cb3=this[_0x5c18af(0x107)](_0x5d0279),_0x5b61c9=Window_PartyReserve[_0x5c18af(0x262)]===0x1;_0x305cb3['x']+=ImageManager[_0x5c18af(0x2c9)]*(_0x5b61c9?0x2:0x1);const _0xa4c680=ImageManager['faceWidth'],_0x208bfc=_0x305cb3[_0x5c18af(0x17a)]-0x2;this[_0x5c18af(0x298)](_0x2f6174[_0x5c18af(0x212)]()),this['drawActorFace'](_0x2f6174,_0x305cb3['x']+0x1,_0x305cb3['y']+0x1,_0xa4c680,_0x208bfc),this[_0x5c18af(0x298)](!![]);},Window_PartyReserve['prototype']['drawItemImageSprite']=function(_0x579b4c){const _0x40f6d9=_0x1df9b9,_0x344746=this[_0x40f6d9(0x11e)](_0x579b4c),_0x3f737e=this[_0x40f6d9(0x107)](_0x579b4c),_0x286f36=Window_PartyReserve['_rowThickness']===0x1;_0x3f737e['x']+=ImageManager[_0x40f6d9(0x2c9)]*(_0x286f36?0x2:0x1);const _0x9d2325=VisuMZ[_0x40f6d9(0x238)][_0x40f6d9(0x180)][_0x40f6d9(0x2d1)],_0x1639c7=_0x3f737e['x']+_0x9d2325[_0x40f6d9(0xfd)]+this[_0x40f6d9(0x2c2)](),_0x4386f5=_0x3f737e['y']+_0x3f737e[_0x40f6d9(0x17a)]-_0x9d2325[_0x40f6d9(0x28f)];this[_0x40f6d9(0x26a)](_0x344746,_0x1639c7,_0x4386f5);},Window_PartyReserve[_0x1df9b9(0x19c)][_0x1df9b9(0x1bf)]=function(_0x4d93b2){const _0x568998=_0x1df9b9,_0x3b4391=this[_0x568998(0x11e)](_0x4d93b2),_0x188111=_0x3b4391[_0x568998(0x1f8)](),_0x362ca9=this[_0x568998(0x107)](_0x4d93b2),_0x1ce342=Window_PartyReserve[_0x568998(0x262)]===0x1;_0x362ca9['x']+=ImageManager[_0x568998(0x2c9)]*(_0x1ce342?0x2:0x1);const _0x1532b9=VisuMZ[_0x568998(0x238)][_0x568998(0x180)][_0x568998(0x2d1)],_0x87f139=_0x362ca9['x']+_0x1532b9[_0x568998(0x11b)]+this[_0x568998(0x2c2)](),_0x516889=_0x362ca9['y']+_0x362ca9[_0x568998(0x17a)]-_0x1532b9[_0x568998(0x129)];this[_0x568998(0x18e)](_0x188111,_0x87f139,_0x516889);},Window_PartyReserve[_0x1df9b9(0x19c)]['setStatusWindow']=function(_0x23ca14){const _0x245924=_0x1df9b9;this['_statusWindow']=_0x23ca14,this[_0x245924(0x1e2)]();},Window_PartyReserve['prototype'][_0x1df9b9(0x1e2)]=function(){const _0x58f3af=_0x1df9b9;if(this[_0x58f3af(0x111)]){if(_0x58f3af(0x1f7)===_0x58f3af(0x1f7))this[_0x58f3af(0x111)]['setActor'](this[_0x58f3af(0x11e)](this[_0x58f3af(0x1df)]()));else{function _0xeaa200(){const _0x525864=_0x58f3af;this['_partySwitchTargetActor']=_0x1d1205;const _0x4b7b86=_0xc51249['_partySwitchDuration'];this[_0x525864(0x136)](0x12c,0x0,_0x4b7b86),this['startOpacity'](0x0,_0x4b7b86),this['_partySwitchDuration']=_0x4b7b86;}}}};function Window_PartyStatus(){this['initialize'](...arguments);}Window_PartyStatus[_0x1df9b9(0x19c)]=Object['create'](Window_StatusBase[_0x1df9b9(0x19c)]),Window_PartyStatus['prototype'][_0x1df9b9(0x285)]=Window_PartyStatus,Window_PartyStatus['prototype'][_0x1df9b9(0x145)]=function(_0x34d662){const _0x3acf5a=_0x1df9b9;this[_0x3acf5a(0x171)]=null,Window_StatusBase[_0x3acf5a(0x19c)]['initialize'][_0x3acf5a(0x295)](this,_0x34d662);},Window_PartyStatus[_0x1df9b9(0x19c)][_0x1df9b9(0x2dc)]=function(_0x310ba4,_0x569c36,_0xcf763f,_0xf6bf66,_0x50f07d){const _0x5c1a1a=_0x1df9b9;if(VisuMZ[_0x5c1a1a(0x238)][_0x5c1a1a(0x180)][_0x5c1a1a(0xf1)][_0x5c1a1a(0x1f2)]===![])return;_0x50f07d=Math['max'](_0x50f07d||0x1,0x1);while(_0x50f07d--){if(_0x5c1a1a(0x1c0)!==_0x5c1a1a(0x25d)){_0xf6bf66=_0xf6bf66||this['lineHeight'](),this[_0x5c1a1a(0x2b4)][_0x5c1a1a(0x1e8)]=0xa0;const _0x31c3af=ColorManager['getPartySystemBackColor']();this['contents'][_0x5c1a1a(0x1d6)](_0x310ba4+0x1,_0x569c36+0x1,_0xcf763f-0x2,_0xf6bf66-0x2,_0x31c3af),this[_0x5c1a1a(0x2b4)][_0x5c1a1a(0x1e8)]=0xff;}else{function _0x31b656(){const _0x391dc3=_0x5c1a1a;if(!this[_0x391dc3(0x20b)]())return;_0x3dc65b[_0x391dc3(0x1d3)](_0x391dc3(0x2b8))&&this[_0x391dc3(0xed)]();}}}},ColorManager[_0x1df9b9(0x11a)]=function(){const _0xf01b6e=_0x1df9b9,_0x99fb1b=VisuMZ[_0xf01b6e(0x238)][_0xf01b6e(0x180)][_0xf01b6e(0xf1)];let _0x3681ec=_0x99fb1b[_0xf01b6e(0xe3)]!==undefined?_0x99fb1b['BackRectColor']:0x13;return ColorManager['getColor'](_0x3681ec);},Window_PartyStatus[_0x1df9b9(0x19c)]['setActor']=function(_0xc78e77){const _0x366801=_0x1df9b9;if(this['_actor']===_0xc78e77)return;this[_0x366801(0x171)]=_0xc78e77;if(_0xc78e77){if(_0x366801(0x169)!=='cxviE'){const _0x563d3c=ImageManager[_0x366801(0x249)](_0xc78e77[_0x366801(0x178)]());_0x563d3c[_0x366801(0x191)](this[_0x366801(0x1eb)][_0x366801(0x133)](this));}else{function _0x2de06e(){this['preparePartySwitchMember'](_0x5263ad);}}}else{if(_0x366801(0x122)!=='pCQkG')this[_0x366801(0x1eb)]();else{function _0x34305e(){const _0x3e4fd5=_0x366801;if(this[_0x3e4fd5(0x163)]===_0x4507f7)this[_0x3e4fd5(0x257)]();return this[_0x3e4fd5(0x163)];}}}},Window_PartyStatus[_0x1df9b9(0x19c)]['refresh']=function(){const _0x4044b9=_0x1df9b9;Window_StatusBase[_0x4044b9(0x19c)]['refresh'][_0x4044b9(0x295)](this),this['contents'][_0x4044b9(0x109)](),this[_0x4044b9(0x1b8)](),VisuMZ[_0x4044b9(0x238)]['Settings'][_0x4044b9(0x2d1)]['StatusWindowDraw'][_0x4044b9(0x295)](this);},Window_PartyStatus['prototype'][_0x1df9b9(0x119)]=function(){const _0x4cfe21=_0x1df9b9;if(!this['_actor']){this['drawItemDarkRect'](0x0,0x0,this[_0x4cfe21(0x29c)],this[_0x4cfe21(0x172)]);const _0x1cd0a2=Math[_0x4cfe21(0x17e)]((this[_0x4cfe21(0x172)]-this[_0x4cfe21(0x140)]())/0x2);this['changeTextColor'](ColorManager[_0x4cfe21(0x2da)]()),this[_0x4cfe21(0xff)](TextManager['emptyPartyMember'],0x0,_0x1cd0a2,this[_0x4cfe21(0x29c)],_0x4cfe21(0x2b5));return;}this[_0x4cfe21(0xe7)](this[_0x4cfe21(0x171)],0x1,0x0,ImageManager[_0x4cfe21(0x1ea)],ImageManager['faceHeight']),this[_0x4cfe21(0x160)](this[_0x4cfe21(0x171)],ImageManager[_0x4cfe21(0x1ea)]+0x24,0x0);const _0x24125a=this['lineHeight'](),_0x5e4e94=this[_0x4cfe21(0xbc)](),_0x4491cc=Math['round'](this[_0x4cfe21(0x29c)]/0x2),_0x5d990f=Math[_0x4cfe21(0xba)](_0x5e4e94[_0x4cfe21(0x14d)]/0x2)*_0x24125a,_0xe755dd=0x0;let _0xf35832=0x0,_0x15ce31=ImageManager[_0x4cfe21(0x2a6)]+_0x24125a/0x2;for(const _0x89b6b6 of _0x5e4e94){this[_0x4cfe21(0x2dc)](_0xf35832,_0x15ce31,_0x4491cc,_0x24125a),this[_0x4cfe21(0x16d)](_0x89b6b6,_0xf35832,_0x15ce31,_0x4491cc),this[_0x4cfe21(0x1e5)](_0x89b6b6,_0xf35832,_0x15ce31,_0x4491cc);if(_0xf35832===_0xe755dd)_0xf35832+=_0x4491cc;else{if(_0x4cfe21(0xdd)!==_0x4cfe21(0xdd)){function _0x31e3f2(){const _0xdd11f1=_0x4cfe21;return _0x294122[_0xdd11f1(0x238)][_0xdd11f1(0x180)][_0xdd11f1(0x2d1)][_0xdd11f1(0x16a)][_0xdd11f1(0x295)](this);}}else _0xf35832=_0xe755dd,_0x15ce31+=_0x24125a;}}},Window_PartyStatus[_0x1df9b9(0x19c)][_0x1df9b9(0xbc)]=function(){const _0x599705=_0x1df9b9;if(Imported[_0x599705(0x293)]){if(_0x599705(0x267)===_0x599705(0x267))return VisuMZ[_0x599705(0x1c3)][_0x599705(0x180)]['Param']['DisplayedParams'];else{function _0xb25b99(){const _0x2ed6c9=_0x599705;this[_0x2ed6c9(0x2cd)]=!![],this[_0x2ed6c9(0x26d)]['addText'](_0x383be6[_0x2ed6c9(0x25e)][_0x2ed6c9(0x131)](_0x2cebf3[_0x2ed6c9(0x114)]));}}}else{if(_0x599705(0xe5)!==_0x599705(0xe5)){function _0x395f90(){this['initialize'](...arguments);}}else return[0x2,0x3,0x4,0x5,0x6,0x7];}},Window_PartyStatus['prototype'][_0x1df9b9(0x16d)]=function(_0x47747e,_0x56de5c,_0x3f621d,_0x47d939){const _0x131637=_0x1df9b9,_0x4b211a=this[_0x131637(0x2c2)]();_0x47d939-=_0x4b211a*0x2;if(Imported[_0x131637(0x293)]){if(_0x131637(0x282)===_0x131637(0x282))this[_0x131637(0x218)](_0x56de5c+_0x4b211a,_0x3f621d,_0x47d939,_0x47747e,![]);else{function _0x23e811(){_0x407289+=_0x330d7b;}}}else{const _0x2f7aa0=TextManager[_0x131637(0x1c9)](_0x47747e);this['changeTextColor'](ColorManager['systemColor']()),this[_0x131637(0xff)](_0x2f7aa0,_0x56de5c+_0x4b211a,_0x3f621d,_0x47d939);}},Window_PartyStatus[_0x1df9b9(0x19c)]['drawParamValue']=function(_0x3809d3,_0x3b7eaa,_0x51fcb7,_0x3dc62e){const _0x901e5e=_0x1df9b9;this[_0x901e5e(0x1b8)]();const _0x3b2f99=this['itemPadding'](),_0x272389=this[_0x901e5e(0x149)](_0x3809d3);this[_0x901e5e(0xff)](_0x272389,_0x3b7eaa+_0x3b2f99,_0x51fcb7,_0x3dc62e-_0x3b2f99*0x2,'right');},Window_PartyStatus[_0x1df9b9(0x19c)][_0x1df9b9(0x149)]=function(_0x14bcf7){const _0x4825b8=_0x1df9b9,_0x2010e6=this[_0x4825b8(0x171)];if(Imported[_0x4825b8(0x293)])return _0x2010e6['paramValueByName'](_0x14bcf7,!![]);else{if(_0x4825b8(0xdf)!==_0x4825b8(0x127))return _0x2010e6[_0x4825b8(0x1c9)](_0x14bcf7);else{function _0x319694(){const _0x2bfce7=_0x4825b8;if(_0x22ef56[_0x2bfce7(0x17d)]&&_0x4a08aa[_0x2bfce7(0x19e)]())return![];return _0x379e86['PartySystem']['Settings'][_0x2bfce7(0xf1)]['PartyCmdWinAddParty'];}}}};function Window_PartyBattleSwitch(){const _0x4ae780=_0x1df9b9;this[_0x4ae780(0x145)](...arguments);}Window_PartyBattleSwitch[_0x1df9b9(0x19c)]=Object[_0x1df9b9(0x1a8)](Window_StatusBase[_0x1df9b9(0x19c)]),Window_PartyBattleSwitch[_0x1df9b9(0x19c)][_0x1df9b9(0x285)]=Window_PartyBattleSwitch,Window_PartyBattleSwitch['prototype']['initialize']=function(_0x1a8b86){const _0xa3430f=_0x1df9b9;Window_StatusBase[_0xa3430f(0x19c)][_0xa3430f(0x145)]['call'](this,_0x1a8b86),this[_0xa3430f(0xd3)](VisuMZ['PartySystem'][_0xa3430f(0x180)][_0xa3430f(0x2d1)][_0xa3430f(0x239)]),this['openness']=0x0;},Window_PartyBattleSwitch['prototype'][_0x1df9b9(0x13e)]=function(){const _0x37eac4=_0x1df9b9;for(const _0xe5d5b4 of $gameParty[_0x37eac4(0x271)]()){if(_0x37eac4(0x24f)!=='gnqZX')ImageManager[_0x37eac4(0x249)](_0xe5d5b4[_0x37eac4(0x178)]());else{function _0x44d43f(){const _0x37c775=_0x37eac4;_0x6f80d3(_0x37c775(0x189)[_0x37c775(0x131)](_0x21b24a,_0x2487e4)),_0x1b3d8b['exit']();}}}},Window_PartyBattleSwitch[_0x1df9b9(0x19c)][_0x1df9b9(0x284)]=function(){return 0x1;},Window_PartyBattleSwitch['prototype']['actor']=function(_0xb417e8){return $gameParty['reserveMembers']()[_0xb417e8];},Window_PartyBattleSwitch[_0x1df9b9(0x19c)][_0x1df9b9(0x2a9)]=function(){const _0x3b1b22=_0x1df9b9;return this['actor'](this[_0x3b1b22(0x1df)]());},Window_PartyBattleSwitch[_0x1df9b9(0x19c)][_0x1df9b9(0x275)]=function(){return this['lineHeight']()*0x2+0x8;},Window_PartyBattleSwitch['prototype'][_0x1df9b9(0xc5)]=function(){const _0x2aa776=_0x1df9b9;return $gameParty[_0x2aa776(0x1f1)]()[_0x2aa776(0x14d)];},Window_PartyBattleSwitch[_0x1df9b9(0x19c)][_0x1df9b9(0x10e)]=function(){const _0x4ff03e=_0x1df9b9;Window_StatusBase[_0x4ff03e(0x19c)][_0x4ff03e(0x10e)][_0x4ff03e(0x295)](this),this[_0x4ff03e(0x2b7)](),this[_0x4ff03e(0x1eb)](),this[_0x4ff03e(0xd4)](0x0);},Window_PartyBattleSwitch['prototype'][_0x1df9b9(0x2a1)]=function(){const _0x12eb41=_0x1df9b9;Window_StatusBase['prototype']['deactivate']['call'](this),this[_0x12eb41(0x11c)]();},Window_PartyBattleSwitch[_0x1df9b9(0x19c)]['isCurrentItemEnabled']=function(){const _0x87545b=_0x1df9b9;return this[_0x87545b(0x23b)](this['currentActor']());},Window_PartyBattleSwitch['prototype']['isEnabled']=function(_0x33de0f){if(!_0x33de0f)return![];return _0x33de0f['isFormationChangeOk']()&&_0x33de0f['isAlive']();},Window_PartyBattleSwitch[_0x1df9b9(0x19c)][_0x1df9b9(0x2b3)]=function(_0x305bd1){const _0xabaee1=_0x1df9b9,_0x5109fd=this[_0xabaee1(0x11e)](_0x305bd1);if(!_0x5109fd)return;const _0x392424=ImageManager[_0xabaee1(0x249)](_0x5109fd[_0xabaee1(0x178)]());_0x392424[_0xabaee1(0x191)](this[_0xabaee1(0x2d3)]['bind'](this,_0x305bd1));},Window_PartyBattleSwitch[_0x1df9b9(0x19c)][_0x1df9b9(0x2d3)]=function(_0x3cb3e4){const _0x1ae086=_0x1df9b9;this[_0x1ae086(0x1a7)](_0x3cb3e4),this[_0x1ae086(0x261)](_0x3cb3e4);},Window_PartyBattleSwitch['prototype']['drawItemImage']=function(_0x4d919b){const _0x4b5b78=_0x1df9b9,_0x3f06cf=this[_0x4b5b78(0x11e)](_0x4d919b),_0x3e622f=this[_0x4b5b78(0x107)](_0x4d919b);this['changePaintOpacity'](this[_0x4b5b78(0x23b)](_0x3f06cf)),this[_0x4b5b78(0xe7)](_0x3f06cf,_0x3e622f['x']+0x1,_0x3e622f['y']+0x1,ImageManager[_0x4b5b78(0x1ea)],_0x3e622f[_0x4b5b78(0x17a)]-0x2),this[_0x4b5b78(0x298)](!![]);},Window_PartyBattleSwitch[_0x1df9b9(0x19c)][_0x1df9b9(0x261)]=function(_0x3f5664){const _0x3ca940=_0x1df9b9,_0x560120=this[_0x3ca940(0x11e)](_0x3f5664),_0x1f3d70=this[_0x3ca940(0x1e3)](_0x3f5664),_0x38bccf=_0x1f3d70['x']+ImageManager[_0x3ca940(0x1ea)]+0x24,_0x17dc7d=_0x38bccf+0xb4;this[_0x3ca940(0x298)](this[_0x3ca940(0x23b)](_0x560120)),this['drawActorName'](_0x560120,_0x38bccf,_0x1f3d70['y']),this['drawActorClass'](_0x560120,_0x38bccf,_0x1f3d70['y']+this[_0x3ca940(0x140)]()),this[_0x3ca940(0x21c)](_0x560120,_0x17dc7d,_0x1f3d70['y']),this[_0x3ca940(0x298)](!![]);};Imported[_0x1df9b9(0x291)]&&(ImageManager[_0x1df9b9(0x24d)]=VisuMZ['PartySystem'][_0x1df9b9(0x180)]['General'][_0x1df9b9(0x168)]??0x4b,TextManager['battlePartyChangeCmd']=VisuMZ[_0x1df9b9(0x238)][_0x1df9b9(0x180)][_0x1df9b9(0x2af)]['BattlePartyCmd'],TextManager[_0x1df9b9(0x1e6)]=VisuMZ[_0x1df9b9(0x238)][_0x1df9b9(0x180)][_0x1df9b9(0x2af)][_0x1df9b9(0x184)],TextManager[_0x1df9b9(0xc3)]=VisuMZ[_0x1df9b9(0x238)]['Settings']['Vocab'][_0x1df9b9(0x259)],TextManager[_0x1df9b9(0x1f0)]=VisuMZ[_0x1df9b9(0x238)][_0x1df9b9(0x180)]['Vocab'][_0x1df9b9(0x27d)],TextManager['ActiveTpbFormationMessage']=VisuMZ[_0x1df9b9(0x238)][_0x1df9b9(0x180)]['Vocab'][_0x1df9b9(0x2ae)],VisuMZ['PartySystem']['SceneManager_isPreviousSceneBattleTransitionable']=SceneManager[_0x1df9b9(0x1ca)],SceneManager[_0x1df9b9(0x1ca)]=function(){const _0x4bc630=_0x1df9b9;if(SceneManager[_0x4bc630(0x281)](Scene_Party))return!![];return VisuMZ[_0x4bc630(0x238)][_0x4bc630(0x279)][_0x4bc630(0x295)](this);},VisuMZ[_0x1df9b9(0x238)][_0x1df9b9(0x12f)]=SceneManager[_0x1df9b9(0x157)],SceneManager['isNextSceneBattleTransitionable']=function(){const _0x498ddb=_0x1df9b9;if(SceneManager[_0x498ddb(0xcd)](Scene_Party))return!![];return VisuMZ[_0x498ddb(0x238)][_0x498ddb(0x12f)][_0x498ddb(0x295)](this);},SceneManager[_0x1df9b9(0x24a)]=function(){const _0x4c3217=_0x1df9b9;return this['_scene']&&this[_0x4c3217(0x18c)][_0x4c3217(0x285)]===Scene_Map;},VisuMZ[_0x1df9b9(0x238)][_0x1df9b9(0x25b)]=Scene_Battle[_0x1df9b9(0x19c)][_0x1df9b9(0x10f)],Scene_Battle[_0x1df9b9(0x19c)]['createAllWindows']=function(){const _0x284cf7=_0x1df9b9;VisuMZ[_0x284cf7(0x238)]['Scene_Battle_createAllWindows'][_0x284cf7(0x295)](this),this[_0x284cf7(0x123)](),this[_0x284cf7(0xd6)](),this[_0x284cf7(0x1a1)]();},Scene_Battle['prototype']['createPartySwitchWindow']=function(){const _0x12f5f8=_0x1df9b9,_0x483ec1=this[_0x12f5f8(0x2de)]();this[_0x12f5f8(0x2c3)]=new Window_PartyBattleSwitch(_0x483ec1),this['addWindow'](this[_0x12f5f8(0x2c3)]),this[_0x12f5f8(0x2c3)][_0x12f5f8(0x1d9)]('ok',this[_0x12f5f8(0x234)]['bind'](this)),this['_partyMemberSwitchWindow'][_0x12f5f8(0x1d9)]('cancel',this[_0x12f5f8(0x1d0)][_0x12f5f8(0x133)](this));},Scene_Battle[_0x1df9b9(0x19c)][_0x1df9b9(0x2de)]=function(){const _0x373462=_0x1df9b9,_0x467386=this[_0x373462(0x1b3)]();if(_0x467386===_0x373462(0x1de)){if(_0x373462(0x26f)!==_0x373462(0xe4))return this[_0x373462(0x2a7)]();else{function _0xfab533(){const _0x23db6b=_0x373462;return _0x23db6b(0x2d8)[_0x23db6b(0x131)](_0x101f71(_0x5f59f9['$1']));}}}else return this[_0x373462(0x2ca)]();},Scene_Battle[_0x1df9b9(0x19c)]['partySwitchWindowRectStandard']=function(){const _0x321684=_0x1df9b9;return VisuMZ['PartySystem']['Settings'][_0x321684(0x2d1)][_0x321684(0x27b)][_0x321684(0x295)](this);},Scene_Battle[_0x1df9b9(0x19c)]['partySwitchWindowRectBorder']=function(){const _0x17be33=_0x1df9b9,_0x46b6e0=this[_0x17be33(0x250)](),_0x34a4ca=$gameSystem[_0x17be33(0x276)]()*0x2;return _0x46b6e0['width']=0x204+_0x34a4ca,_0x46b6e0;},VisuMZ[_0x1df9b9(0x238)][_0x1df9b9(0x2eb)]=Scene_Battle['prototype'][_0x1df9b9(0xf7)],Scene_Battle[_0x1df9b9(0x19c)][_0x1df9b9(0xf7)]=function(){const _0x4da03a=_0x1df9b9;if(this[_0x4da03a(0x2c3)]&&this['_partyMemberSwitchWindow']['active'])return!![];if(this['_partySystemSwitchOut'])return!![];if(this[_0x4da03a(0xc8)])return!![];if(this['_callSceneParty'])return!![];return VisuMZ['PartySystem']['Scene_Battle_isAnyInputWindowActive']['call'](this);},VisuMZ[_0x1df9b9(0x238)]['Scene_Battle_createPartyCommandWindowBattleCore']=Scene_Battle[_0x1df9b9(0x19c)][_0x1df9b9(0x153)],Scene_Battle[_0x1df9b9(0x19c)][_0x1df9b9(0x153)]=function(){const _0xf9533f=_0x1df9b9;VisuMZ[_0xf9533f(0x238)][_0xf9533f(0xca)]['call'](this),this['_partyCommandWindow'][_0xf9533f(0x1d9)](_0xf9533f(0x114),this[_0xf9533f(0x244)][_0xf9533f(0x133)](this));},Scene_Battle['prototype'][_0x1df9b9(0x244)]=function(){const _0x2bbc7c=_0x1df9b9;if(this['isQueueFormationMenu']()){if(_0x2bbc7c(0xb2)===_0x2bbc7c(0xb2))this[_0x2bbc7c(0x2cd)]=!![],this['_logWindow']['addText'](TextManager[_0x2bbc7c(0x25e)]['format'](TextManager[_0x2bbc7c(0x114)]));else{function _0xfb2be(){const _0x418508=_0x2bbc7c;this[_0x418508(0x2c3)]['activate']();}}}else this['callFormation']();},Scene_Battle[_0x1df9b9(0x19c)][_0x1df9b9(0x1ba)]=function(){const _0x1843b2=_0x1df9b9;return BattleManager[_0x1843b2(0x192)]();},Scene_Battle[_0x1df9b9(0x19c)][_0x1df9b9(0x27a)]=function(){const _0x460f4a=_0x1df9b9;this['_callSceneParty']=![],this[_0x460f4a(0x10d)][_0x460f4a(0x164)](),this[_0x460f4a(0x258)][_0x460f4a(0x29a)]=![],SceneManager[_0x460f4a(0x269)](),SceneManager[_0x460f4a(0x13f)](Scene_Party),$gameParty[_0x460f4a(0x1be)](),BattleManager[_0x460f4a(0x297)]()&&(BattleManager[_0x460f4a(0xf0)]=BattleManager[_0x460f4a(0x11e)]());},VisuMZ[_0x1df9b9(0x238)][_0x1df9b9(0x1b4)]=Scene_Battle[_0x1df9b9(0x19c)][_0x1df9b9(0x223)],Scene_Battle[_0x1df9b9(0x19c)][_0x1df9b9(0x223)]=function(){const _0x40333b=_0x1df9b9;VisuMZ[_0x40333b(0x238)]['Scene_Battle_updateBattleProcess']['call'](this);this[_0x40333b(0x2cd)]&&!BattleManager['_subject']&&this[_0x40333b(0x27a)]();if(this[_0x40333b(0xc8)]&&!BattleManager[_0x40333b(0x1a2)]){if('OAxHr'!==_0x40333b(0x100))this[_0x40333b(0x1cc)]();else{function _0x559721(){const _0x167966=_0x40333b,_0x6ded0d=this['reservePartyLabelRect']();this['_reservePartyLabel']=new _0x4aa120(_0x6ded0d,_0x1fcd33[_0x167966(0x2b6)]),this[_0x167966(0x1bd)][_0x167966(0xd3)](_0x202cd0[_0x167966(0x238)][_0x167966(0x180)][_0x167966(0x2d1)][_0x167966(0x256)]),this['addWindow'](this[_0x167966(0x1bd)]);}}}},VisuMZ[_0x1df9b9(0x238)]['Scene_Battle_isTimeActive']=Scene_Battle[_0x1df9b9(0x19c)][_0x1df9b9(0x28d)],Scene_Battle[_0x1df9b9(0x19c)][_0x1df9b9(0x28d)]=function(){const _0x29eb7a=_0x1df9b9;if(BattleManager[_0x29eb7a(0x192)]()){if(_0x29eb7a(0x105)===_0x29eb7a(0x283)){function _0x546d74(){const _0x4eb53b=_0x29eb7a;for(const _0x4e222a of _0x55281a[_0x4eb53b(0x271)]()){_0x47ee4a[_0x4eb53b(0x249)](_0x4e222a['faceName']());}}}else{if(this['_partyMemberSwitchWindow']&&this[_0x29eb7a(0x2c3)]['active'])return![];}}return VisuMZ[_0x29eb7a(0x238)][_0x29eb7a(0x142)][_0x29eb7a(0x295)](this);},VisuMZ[_0x1df9b9(0x238)][_0x1df9b9(0x185)]=Scene_Battle[_0x1df9b9(0x19c)][_0x1df9b9(0xbe)],Scene_Battle['prototype'][_0x1df9b9(0xbe)]=function(){const _0x35bc07=_0x1df9b9;VisuMZ[_0x35bc07(0x238)][_0x35bc07(0x185)][_0x35bc07(0x295)](this),this[_0x35bc07(0x2a2)][_0x35bc07(0x1d9)]('formation',this[_0x35bc07(0x209)][_0x35bc07(0x133)](this));},Scene_Battle[_0x1df9b9(0x19c)]['commandPartyMemberSwitch']=function(){const _0x166527=_0x1df9b9;this[_0x166527(0x1ba)]()?(this[_0x166527(0xc8)]=!![],this[_0x166527(0x26d)]['addText'](TextManager[_0x166527(0x25e)]['format'](TextManager[_0x166527(0x114)]))):this[_0x166527(0x1cc)]();},Scene_Battle[_0x1df9b9(0x19c)][_0x1df9b9(0x1cc)]=function(){const _0x147564=_0x1df9b9;this[_0x147564(0xc8)]=![],this['_logWindow'][_0x147564(0x109)](),BattleManager[_0x147564(0x11e)]()&&this['_partyMemberSwitchWindow']['activate']();},Scene_Battle[_0x1df9b9(0x19c)][_0x1df9b9(0x234)]=function(){const _0xfeb240=_0x1df9b9,_0x4b4bdb=this[_0xfeb240(0x2c3)][_0xfeb240(0x2a9)]();if(_0x4b4bdb){if(_0xfeb240(0x219)===_0xfeb240(0xd1)){function _0x11e31f(){const _0x510ff0=_0xfeb240;return this[_0x510ff0(0x140)]()*0x2+0x8;}}else this['preparePartySwitchMember'](_0x4b4bdb);}else{if(_0xfeb240(0x18d)===_0xfeb240(0x161)){function _0x3a5e74(){return;}}else this[_0xfeb240(0x2c3)][_0xfeb240(0x2a1)](),this[_0xfeb240(0x2a2)][_0xfeb240(0x10e)]();}},Scene_Battle['prototype']['preparePartySwitchMember']=function(_0x5577e3){const _0x551f0b=_0x1df9b9,_0x1ead33=BattleManager[_0x551f0b(0x11e)](),_0x3a87e9=_0x1ead33[_0x551f0b(0x2a8)]();this[_0x551f0b(0x2c3)][_0x551f0b(0x2a1)]();if(this[_0x551f0b(0x273)]()&&_0x3a87e9){if('hYtBu'!==_0x551f0b(0x13d)){function _0x5273c8(){const _0x214a40=_0x551f0b;_0x4308c4['prototype']['activate'][_0x214a40(0x295)](this),this[_0x214a40(0x2b7)](),this[_0x214a40(0x1eb)](),this[_0x214a40(0xd4)](0x0);}}else this[_0x551f0b(0x228)]=!![],_0x3a87e9[_0x551f0b(0x23d)](_0x5577e3);}else this[_0x551f0b(0x1cf)](_0x5577e3);},Scene_Battle['prototype']['isShowPartySwitchOutAnimation']=function(){const _0x45b93d=_0x1df9b9;return VisuMZ[_0x45b93d(0x238)]['Settings']['General'][_0x45b93d(0x1b1)];},Scene_Battle[_0x1df9b9(0x19c)][_0x1df9b9(0x1cf)]=function(_0x1789ae){const _0x3a6143=_0x1df9b9;this['_partySystemSwitchOut']=![];const _0x13dd39=BattleManager['actor'](),_0x14de0d=_0x13dd39[_0x3a6143(0x2a8)]();$gameParty[_0x3a6143(0x20a)][_0x13dd39[_0x3a6143(0x1df)]()]=_0x1789ae['actorId'](),$gameParty[_0x3a6143(0x2e9)]();if(this[_0x3a6143(0x106)]()){if(_0x3a6143(0x220)!==_0x3a6143(0x220)){function _0x1cb937(){const _0x1e9fed=_0x3a6143;return _0x48381d[_0x1e9fed(0x1f1)]()['length'];}}else _0x1789ae[_0x3a6143(0x22e)]=_0x13dd39['_tpbChargeTime'],_0x1789ae[_0x3a6143(0x23a)]=_0x3a6143(0x14e);}else BattleManager[_0x3a6143(0x297)]()&&_0x1789ae[_0x3a6143(0x1cb)]();BattleManager[_0x3a6143(0x207)]=_0x1789ae,_0x1789ae[_0x3a6143(0x1be)](),_0x1789ae[_0x3a6143(0x2d7)](),_0x1789ae[_0x3a6143(0x2ac)](_0x13dd39);if(_0x14de0d){if(_0x3a6143(0x2e7)===_0x3a6143(0xf8)){function _0x12ea29(){const _0x38059c=_0x3a6143;this[_0x38059c(0x2dc)](_0x2313ab,_0x133ec9,_0x314949,_0x282e16),this[_0x38059c(0x16d)](_0x19bf0f,_0x2fec9e,_0x361466,_0x86a9fc),this['drawParamValue'](_0x3530a6,_0x145a9d,_0xe1f3bc,_0x3892a8),_0x22d4a3===_0x3f35b0?_0x394cdb+=_0x12f194:(_0x6a39cb=_0x1b9bc7,_0x3b11ed+=_0x3c10e6);}}else _0x14de0d[_0x3a6143(0x17b)](_0x1789ae);}this['_statusWindow'][_0x3a6143(0x1ef)](_0x13dd39,_0x1789ae),this[_0x3a6143(0x111)][_0x3a6143(0x1eb)](),this[_0x3a6143(0x2a2)][_0x3a6143(0x29d)](_0x1789ae),this['_actorCommandWindow'][_0x3a6143(0xd4)](0x0),this[_0x3a6143(0x2a2)][_0x3a6143(0x10e)](),this[_0x3a6143(0x2a2)][_0x3a6143(0x181)]=!![];},Scene_Battle[_0x1df9b9(0x19c)][_0x1df9b9(0x106)]=function(){const _0x51404a=_0x1df9b9;if(!BattleManager['isTpb']())return![];const _0x588ed1=VisuMZ[_0x51404a(0x238)][_0x51404a(0x180)][_0x51404a(0xf1)];return _0x588ed1[_0x51404a(0xd2)]===undefined&&(_0x588ed1['tpbImmediateAction']=!![]),_0x588ed1[_0x51404a(0xd2)];},Window_StatusBase[_0x1df9b9(0x19c)][_0x1df9b9(0x1ef)]=function(_0x152995,_0x543144){const _0x23fc4a=_0x1df9b9,_0x405779=_0x23fc4a(0x243)[_0x23fc4a(0x131)](_0x152995[_0x23fc4a(0xd8)]()),_0x166759=this['createInnerSprite'](_0x405779,Sprite_StateIcon);_0x166759[_0x23fc4a(0x29d)](_0x543144);},Scene_Battle[_0x1df9b9(0x19c)][_0x1df9b9(0x1d0)]=function(){const _0x254eb2=_0x1df9b9;this[_0x254eb2(0x2c3)][_0x254eb2(0x2a1)](),this[_0x254eb2(0x2a2)][_0x254eb2(0x10e)](),this[_0x254eb2(0x2a2)][_0x254eb2(0x1eb)]();},Scene_Battle[_0x1df9b9(0x19c)][_0x1df9b9(0xd6)]=function(){const _0x9fe6f9=_0x1df9b9;if(!BattleManager[_0x9fe6f9(0x297)]())return;if(!SceneManager[_0x9fe6f9(0x281)](Scene_Party))return;this[_0x9fe6f9(0xc0)][_0x9fe6f9(0x2a1)](),this['_partyCommandWindow'][_0x9fe6f9(0x11c)](),this[_0x9fe6f9(0x2a2)]['deactivate'](),this[_0x9fe6f9(0x2a2)][_0x9fe6f9(0x11c)](),BattleManager[_0x9fe6f9(0x207)]=null,BattleManager[_0x9fe6f9(0x150)]=![];},Scene_Battle[_0x1df9b9(0x19c)]['postPartySwitchMenuTurnBased']=function(){const _0x1a83a1=_0x1df9b9;if(BattleManager['isTpb']())return;if(!SceneManager['isPreviousScene'](Scene_Party))return;Imported[_0x1a83a1(0x132)]&&BattleManager[_0x1a83a1(0x156)]()&&BattleManager['makeActionOrders']();if(Imported['VisuMZ_2_BattleSystemFTB']&&BattleManager[_0x1a83a1(0xc7)]()){if(_0x1a83a1(0x1fb)===_0x1a83a1(0x202)){function _0x158bc1(){const _0x2073b0=_0x1a83a1;this[_0x2073b0(0x2b4)][_0x2073b0(0xeb)](_0x223291,_0x24e6c1,_0x19f3f1,_0xc4802b,_0x56ee90,_0x1bde21),this[_0x2073b0(0x2b4)][_0x2073b0(0xeb)](_0x13f5c1+_0x4da2f3,_0x8dca93,_0x4e249b,_0x4d5a2f,_0x29c247,_0x5359a9);}}else BattleManager['_currentActor']=$gameParty[_0x1a83a1(0x104)]()[0x0],BattleManager[_0x1a83a1(0x1a2)]=BattleManager[_0x1a83a1(0x11e)](),BattleManager[_0x1a83a1(0x150)]=!![],this['_actorCommandWindow'][_0x1a83a1(0x29d)](BattleManager[_0x1a83a1(0x11e)]()),this[_0x1a83a1(0x111)][_0x1a83a1(0x216)](BattleManager[_0x1a83a1(0x11e)]());}},Sprite_Actor[_0x1df9b9(0x112)]=0xc,Sprite_Actor[_0x1df9b9(0x19c)][_0x1df9b9(0x23d)]=function(_0x38021e){const _0x5193eb=_0x1df9b9;this[_0x5193eb(0xd9)]=_0x38021e;const _0x558bc0=Sprite_Actor[_0x5193eb(0x112)];this[_0x5193eb(0x136)](0x12c,0x0,_0x558bc0),this['startOpacity'](0x0,_0x558bc0),this[_0x5193eb(0x112)]=_0x558bc0;},Sprite_Actor[_0x1df9b9(0x19c)]['startSwitchInAnimation']=function(_0x25043d){const _0xb77149=_0x1df9b9;if(SceneManager[_0xb77149(0x2cf)]()){if(_0xb77149(0x101)!==_0xb77149(0x101)){function _0x53ee9a(){const _0x2d8a9c=_0xb77149;_0x5efb89[_0x2d8a9c(0x22e)]=_0x1641e0['_tpbChargeTime'],_0x31007a[_0x2d8a9c(0x23a)]=_0x2d8a9c(0x14e);}}else{SceneManager[_0xb77149(0x18c)]['processPartySwitchMember'](_0x25043d);const _0x4b404b=Sprite_Actor[_0xb77149(0x112)];this[_0xb77149(0x16f)](),this[_0xb77149(0x1bc)](0xff,_0x4b404b);}}this[_0xb77149(0xd9)]=null;},VisuMZ['PartySystem'][_0x1df9b9(0xef)]=Sprite_Actor['prototype'][_0x1df9b9(0x164)],Sprite_Actor[_0x1df9b9(0x19c)][_0x1df9b9(0x164)]=function(){const _0x42294d=_0x1df9b9;VisuMZ[_0x42294d(0x238)]['Sprite_Actor_update'][_0x42294d(0x295)](this);if(this[_0x42294d(0x112)])this[_0x42294d(0x21f)]();},Sprite_Actor[_0x1df9b9(0x19c)][_0x1df9b9(0x21f)]=function(){const _0x29b012=_0x1df9b9;this[_0x29b012(0x112)]=this['_partySwitchDuration']||0x0,this[_0x29b012(0x112)]--;if(this[_0x29b012(0x112)]<=0x0){if(_0x29b012(0xfe)!==_0x29b012(0xfe)){function _0x15874f(){const _0x50c7fb=_0x29b012,_0x224d38=_0x485dee[_0x50c7fb(0x23f)](),_0x142093=_0x47ee63[_0x50c7fb(0x24e)](),_0x349197=_0x248bca/0x2,_0x6879cb=this[_0x50c7fb(0x140)]();while(_0x326675--){this[_0x50c7fb(0x2b4)][_0x50c7fb(0xeb)](_0x41da75,_0x587ae3,_0x349197,_0x6879cb,_0x142093,_0x224d38),this[_0x50c7fb(0x2b4)][_0x50c7fb(0xeb)](_0x31a463+_0x349197,_0x2b0b7d,_0x349197,_0x6879cb,_0x224d38,_0x142093);}}}else this[_0x29b012(0x231)](this[_0x29b012(0xd9)]);}},Window_PartyCommand[_0x1df9b9(0x19c)][_0x1df9b9(0x2e4)]=function(){const _0x41d0fc=_0x1df9b9;this[_0x41d0fc(0x15b)]();},Window_PartyCommand[_0x1df9b9(0x19c)][_0x1df9b9(0x15b)]=function(){const _0x2f93e6=_0x1df9b9;if(!this['isFormationCommandAdded']())return;if(this[_0x2f93e6(0x1e7)]()){if($gameTemp[_0x2f93e6(0x125)]()&&!BattleManager[_0x2f93e6(0x118)]){if(_0x2f93e6(0x28e)!==_0x2f93e6(0x1bb))console[_0x2f93e6(0x240)]('WARNING:\x20Party\x20Change\x20command\x20is\x20unavailable\x20for\x20Window_PartyCommand\x20for\x20this\x20Battle\x20System'),BattleManager[_0x2f93e6(0x118)]=!![];else{function _0xe6005b(){const _0x56d11e=_0x2f93e6;this['_battleMembers'][_0x56d11e(0x18f)]();}}}return;}const _0x354e5d=this[_0x2f93e6(0x2c8)](),_0x4f48c6=ImageManager[_0x2f93e6(0x24d)],_0x624366=_0x354e5d===_0x2f93e6(0x1d2)?TextManager[_0x2f93e6(0x22b)]:_0x2f93e6(0x18b)['format'](_0x4f48c6,TextManager['battlePartyChangeCmd']),_0x53c5a8=this[_0x2f93e6(0x203)]();this['addCommand'](_0x624366,'formation',_0x53c5a8);},Window_PartyCommand[_0x1df9b9(0x19c)][_0x1df9b9(0x248)]=function(){const _0xe7311d=_0x1df9b9;if(Imported['VisuMZ_2_BattleSystemOTB']&&BattleManager[_0xe7311d(0x19e)]())return![];return VisuMZ[_0xe7311d(0x238)][_0xe7311d(0x180)][_0xe7311d(0xf1)][_0xe7311d(0x26e)];},Window_PartyCommand[_0x1df9b9(0x19c)][_0x1df9b9(0x1e7)]=function(){const _0x391c10=_0x1df9b9;if(Imported['VisuMZ_2_BattleSystemSTB']&&BattleManager[_0x391c10(0x2ea)]())return!![];return![];},Window_PartyCommand[_0x1df9b9(0x19c)]['isFormationCommandEnabled']=function(){const _0x1090ec=_0x1df9b9;if($gameParty['allMembers']()[_0x1090ec(0x14d)]<=0x1)return![];if(!$gameParty['canSwitchPartyInBattle']())return![];return $gameSystem[_0x1090ec(0x16c)]();},VisuMZ[_0x1df9b9(0x238)][_0x1df9b9(0x180)][_0x1df9b9(0xde)]=Window_PartyCommand[_0x1df9b9(0x19c)][_0x1df9b9(0x253)],Window_PartyCommand['prototype'][_0x1df9b9(0x253)]=function(){const _0x2bec2f=_0x1df9b9,_0x308a79=this['currentSymbol']();switch(_0x308a79){case _0x2bec2f(0x114):this[_0x2bec2f(0x25a)][_0x2bec2f(0x260)](TextManager['battlePartyChangeCmdHelp']);break;default:VisuMZ['PartySystem'][_0x2bec2f(0x180)][_0x2bec2f(0xde)][_0x2bec2f(0x295)](this);break;}},Window_ActorCommand[_0x1df9b9(0x19c)][_0x1df9b9(0x19b)]=function(){const _0x12bd1c=_0x1df9b9;if(!this[_0x12bd1c(0x2ce)]())return;const _0x4bfa2b=this[_0x12bd1c(0x2c8)](),_0xe75027=ImageManager[_0x12bd1c(0x24d)],_0x359e5c=_0x4bfa2b===_0x12bd1c(0x1d2)?TextManager[_0x12bd1c(0xc3)]:'\x5cI[%1]%2'[_0x12bd1c(0x131)](_0xe75027,TextManager['battlePartyChangeCmd']),_0x37992b=this[_0x12bd1c(0xf6)]();this[_0x12bd1c(0x126)](_0x359e5c,_0x12bd1c(0x114),_0x37992b);},Window_ActorCommand[_0x1df9b9(0x19c)]['isPartyCommandAdded']=function(){const _0x19253b=_0x1df9b9;if(!this['_actor'])return![];return VisuMZ[_0x19253b(0x238)][_0x19253b(0x180)]['General']['ActorCmdWinAddParty'];},Window_ActorCommand[_0x1df9b9(0x19c)][_0x1df9b9(0xf6)]=function(){const _0x294d16=_0x1df9b9;if($gameParty[_0x294d16(0x271)]()[_0x294d16(0x14d)]<=0x1)return![];if(!this[_0x294d16(0x171)])return![];if(!this['_actor'][_0x294d16(0x1ac)]())return![];return this[_0x294d16(0x171)][_0x294d16(0x212)]();},VisuMZ[_0x1df9b9(0x238)]['Settings'][_0x1df9b9(0x277)]=Window_ActorCommand[_0x1df9b9(0x19c)][_0x1df9b9(0x253)],Window_ActorCommand[_0x1df9b9(0x19c)]['updateHelp']=function(){const _0x5c4c68=_0x1df9b9,_0x10db77=this[_0x5c4c68(0x246)]();if(!_0x10db77)return;switch(_0x10db77[_0x5c4c68(0x245)]()){case'formation':this[_0x5c4c68(0x25a)][_0x5c4c68(0x260)](TextManager[_0x5c4c68(0x1f0)]);break;default:VisuMZ[_0x5c4c68(0x238)][_0x5c4c68(0x180)][_0x5c4c68(0x277)][_0x5c4c68(0x295)](this);break;}});;