//=============================================================================
// VisuStella MZ - Battle System - STB - Standard Turn Battle
// VisuMZ_2_BattleSystemSTB.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_BattleSystemSTB = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BattleSystemSTB = VisuMZ.BattleSystemSTB || {};
VisuMZ.BattleSystemSTB.version = 1.10;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.10] [BattleSystemSTB]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Battle_System_-_STB_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Standard Turn Battle (STB) system uses RPG Maker MZ's default non-TPB
 * battle system as a base. Action orders are determined by the battler's AGI
 * values and they go from highest to lowest. However, actions are not selected
 * at the start of the turn. Instead, as the turn progresses, actions are then
 * picked as each battler's turn comes up and is executed immediately.
 * 
 * Optional to the battle system but fine tuned to it is the Exploit System.
 * When landing an elemental weakness or critical hit against a foe, the
 * battler can gain bonuses as well as an extra turn while the foe will become
 * stunned or gain any desired state(s). When all enemies are exploited in a
 * single turn, a common event can also be played, too.
 * 
 * A Turn Order Display will also appear on the screen to show the order the
 * battlers will take their turns in. This lets the player plan in advance on
 * how to go about the rest of the turn.
 * 
 * *NOTE* To use this battle system, you will need the updated version of
 * VisuStella's Core Engine. Go into its Plugin Parameters and change the
 * "Battle System" plugin parameter to "stb".
 *
 * Features include all (but not limited to) the following:
 * 
 * * Utilizes the balanced AGI nature of the Default Turn Battle system.
 * * Allows for actions to execute immediately upon selection.
 * * A Turn Order Display to show the player when each battler will have its
 *   turn to perform an action.
 * * Skills and Items can have an "Instant Use" effect, which allows them to
 *   perform an action immediately without using up a turn.
 * * An optional Exploit System that can be disabled if desired, but otherwise,
 *   fine tuned to make use of STB's highly compatible nature.
 * * Landing an elemental weakness or critical hit can allow the active battler
 *   to gain bonuses, ranging from states to extra actions to custom effects
 *   that can be added on through JavaScript plugin parameters.
 * * An exploited enemy can suffer from states and/or custom effects added
 *   through JavaScript plugin parameters.
 * * If all enemies are exploited, a common event can run to allow for a custom
 *   follow up action.
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
 * * VisuMZ_0_CoreEngine
 * * VisuMZ_1_BattleCore
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
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
 * Turn Order Display
 * 
 * The Turn Order Display will capture the battle's currently active battler
 * and any battlers found in the active battlers array for the BattleManager.
 * This does not overwrite any functions, but the Turn Order Display may or may
 * not conflict with any existing HUD elements that are already positioned on
 * the screen. If so, you can choose to offset the Turn Order Display or move
 * it to a different part of the screen through the plugin parameters.
 * 
 * ---
 *
 * Action Speed
 * 
 * For skills and items, action speeds now behave differently now. Because
 * actions are now decided after a turn starts, positioning will no longer be
 * decided from the selected skill/item's action speed for the current turn.
 * 
 * Instead, the action speed used by a skill or item will determine the bonus
 * speed (or speed penalty if negative) for the following turn. Using a Guard
 * action with a +2000 Action Speed will raise the following turn's speed by
 * +2000, whereas what is originally a long charge time skill with -1000 speed
 * will decrease the following action's speed by -1000.
 * 
 * You can also customize how speed is calculated through JS Plugin Parameters
 * found in the Mechanics Settings.
 *
 * ---
 * 
 * Instant Use
 * 
 * Skills and Items can have an "Instant Use" property which allows them to be
 * used immediately without consuming a turn. This can be used for actions that
 * otherwise do not warrant a whole turn. These can be used for minor buffs,
 * debuffs, toggles, etc.
 * 
 * ---
 * 
 * Exploit System
 * 
 * This is an optional system. If you wish to turn it off, you can do so in the
 * plugin parameters.
 * 
 * There are two main ways that battlers can be exploited. One is by receiving
 * damage that strikes an elemental weakness. The other is by receiving damage
 * from a Critical Hit. Exploited battlers can receive penalty states. These
 * states can be adjusted in the plugin parameters. The default penalty state
 * is the Stunned state.
 * 
 * The battler doing the exploiting can receive bonuses instead. This is to
 * reward a power play. These bonuses can range from added states to receiving
 * an extra action and allowing the active battler to immediately attack again.
 * 
 * Each battler can only be exploited once per turn. This means if an enemy
 * would receive multiple attacks to its elemental weakness(es), the exploited
 * effect will only occur once per turn, meaning the penalty states won't stack
 * multiple times over. This limitation is for the sake of game balance, but if
 * you so wish, you can turn off this limitation in the plugin parameters.
 * 
 * Each action can also exploit only once per use and against an unexploited
 * target. This means battlers cannot use the same elemental attacks against
 * the same foes over and over to stack up an infinite amount of turns. If the
 * player wants to gain more bonuses, the player would have to strike against
 * unexploited foes. This limitation is for the sake of game balance, but if
 * you so wish, you can turn off this limitation in the plugin parameters.
 * 
 * When all members of a party/troop are exploited, a common event can be
 * triggered to run, allowing for potential follow up actions. How you wish to
 * make these common events is up to you.
 * 
 * ---
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins. Here is a list
 * of the ones this plugin is not compatible with.
 *
 * ---
 *
 * VisuMZ_4_BreakShields
 * 
 * The Break Shields plugin can be used together with Battle System - STB.
 * However, it cannot be used together with the STB Exploit system. This is
 * because both Break Shields and the Exploit system function under similar
 * mechanics and will conflict. However, if STB's Exploit system is turned off,
 * then you can use all of the Break Shield plugin's features fully.
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
 * === General STB-Related Notetags ===
 * 
 * These notetags are general purpose notetags that have became available
 * through this plugin.
 * 
 * ---
 * 
 * <STB Help>
 *  description
 *  description
 * </STB Help>
 *
 * - Used for: Skill, Item Notetags
 * - If your game happens to support the ability to change battle systems, this
 *   notetag lets you change how the skill/item's help description text will
 *   look under STB.
 * - This is primarily used if the skill behaves differently in STB versus any
 *   other battle system.
 * - Replace 'description' with help text that's only displayed if the game's
 *   battle system is set to STB.
 *
 * ---
 * 
 * === STB Turn Order Display-Related Notetags ===
 * 
 * These notetags affect the STB Turn Order Display
 * 
 * ---
 *
 * <STB Turn Order Icon: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Changes the slot graphic used for the battler to a specific icon.
 * - Replace 'x' with the icon index to be used.
 * 
 * ---
 *
 * <STB Turn Order Face: filename, index>
 *
 * - Used for: Actor, Enemy Notetags
 * - Changes the slot graphic used for the enemy to a specific face.
 * - Replace 'filename' with the filename of the image.
 *   - Do not include the file extension.
 * - Replace 'index' with the index of the face. Index values start at 0.
 * - Example: <STB Turn Order Face: Monster, 1>
 * 
 * ---
 * 
 * === Instant Use-Related Notetags ===
 * 
 * ---
 *
 * <STB Instant>
 * <STB Instant Use>
 * <STB Instant Cast>
 *
 * - Used for: Skill, Item Notetags
 * - Allows the skill/item to be used immediately without consuming a turn.
 *
 * ---
 * 
 * === Exploit-Related Notetags ===
 * 
 * ---
 *
 * <STB Exploited Gain State: id>
 * <STB Exploited Gain State: id, id, id>
 * 
 * <STB Exploited Gain State: name>
 * <STB Exploited Gain State: name, name, name>
 *
 * - Used for: Class, Enemy Notetags
 * - If an actor (with the specified class) or enemy is exploited via elemental
 *   weaknesses or critical hits, apply the listed penalty state(s).
 * - Replace 'id' with a number representing the penalty state ID's you wish
 *   to apply to the exploited battler.
 * - Insert multiple 'id' values to apply multiple penalty states at once.
 * - Replace 'name' with the name of the penalty state you wish to apply to the
 *   exploited battler.
 * - Insert multiple 'name' entries to apply multiple penalty states at once.
 *
 * ---
 *
 * <STB Cannot Be Exploited>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - This prevents the affected battler from being exploited via elemental
 *   weaknesses or critical hits.
 *
 * ---
 *
 * <STB Exploiter Gain State: id>
 * <STB Exploiter Gain State: id, id, id>
 * 
 * <STB Exploiter Gain State: name>
 * <STB Exploiter Gain State: name, name, name>
 *
 * - Used for: Class, Enemy Notetags
 * - If an actor (with the specified class) or enemy exploits an opponent with
 *   an elemental weakness or critical hit, apply the listed bonus state(s).
 * - Replace 'id' with a number representing the bonus state ID's you wish
 *   to apply to the exploited battler.
 * - Insert multiple 'id' values to apply multiple bonus states at once.
 * - Replace 'name' with the name of the bonus state you wish to apply to the
 *   exploited battler.
 * - Insert multiple 'name' entries to apply multiple bonus states at once.
 *
 * ---
 *
 * <STB Cannot Be Exploiter>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - This prevents the affected battler from exploiting any opponents via
 *   elemental weaknesses or critical hits.
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
 * === Actor Plugin Commands ===
 * 
 * ---
 *
 * Actor: Change STB Turn Order Icon
 * - Changes the icons used for the specific actor(s) on the STB Turn Order.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Icon:
 *   - Changes the graphic to this icon.
 *
 * ---
 *
 * Actor: Change STB Turn Order Face
 * - Changes the faces used for the specific actor(s) on the STB Turn Order.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Face Name:
 *   - This is the filename for the target face graphic.
 *
 *   Face Index:
 *   - This is the index for the target face graphic.
 *
 * ---
 *
 * Actor: Clear STB Turn Order Graphic
 * - Clears the STB Turn Order graphics for the actor(s).
 * - The settings will revert to the Plugin Parameter settings.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 * ---
 * 
 * === Enemy Plugin Commands ===
 * 
 * ---
 *
 * Enemy: Change STB Turn Order Icon
 * - Changes the icons used for the specific enemy(ies) on the STB Turn Order.
 *
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 *
 *   Icon:
 *   - Changes the graphic to this icon.
 *
 * ---
 *
 * Enemy: Change STB Turn Order Face
 * - Changes the faces used for the specific enemy(ies) on the STB Turn Order.
 *
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 *
 *   Face Name:
 *   - This is the filename for the target face graphic.
 *
 *   Face Index:
 *   - This is the index for the target face graphic.
 *
 * ---
 *
 * Enemy: Clear STB Turn Order Graphic
 * - Clears the STB Turn Order graphics for the enemy(ies).
 * - The settings will revert to the Plugin Parameter settings.
 *
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: STB Turn Order Visibility
 * - Determine the visibility of the STB Turn Order Display.
 *
 *   Visibility:
 *   - Changes the visibility of the STB Turn Order Display.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Mechanics Settings
 * ============================================================================
 *
 * Determines the mechanics of the STB Battle System.
 *
 * ---
 *
 * Speed
 * 
 *   JS: Finalized Speed:
 *   - Code used to calculate the finalized speed at the start of each turn.
 * 
 *   JS: Next Turn Speed:
 *   - Code used to calculate speed for a following turn.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Exploit System Settings
 * ============================================================================
 *
 * Here, you can adjust the main settings for the Exploit System, including
 * where you can turn it on/off. The Exploited and Exploiter settings are
 * extensions of the Exploit System and are better off with their own sections.
 *
 * ---
 *
 * Settings
 * 
 *   Enable System?:
 *   - Enable the exploit system? 
 *   - If disabled, ignore all the  mechanics regarding the Exploit System.
 * 
 *   Critical Hits:
 *   - Do critical hits exploit the opponent?
 * 
 *   Elemental Weakness:
 *   - Do elemental weaknesses exploit the opponent?
 * 
 *     Minimum Rate:
 *     - What's the minimum rate needed to count as an elemental weakness?
 * 
 *   Reset Each Turn:
 *   - Reset exploits at the end of each turn?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Exploited Effects Settings
 * ============================================================================
 *
 * These are effects for the exploited battlers (the receiving end). Change how
 * you want exploited battlers to behave here.
 *
 * ---
 *
 * Mechanics
 * 
 *   Added States:
 *   - A list of the states that are added when a target is exploited.
 * 
 *   Full Exploit Events:
 *   vs Actors Event:
 *   vs Enemies Event:
 *   - If all actors/enemies have been fully exploited, run this common event.
 *   - Does not work with unlimited exploits.
 * 
 *   Unlimited Exploits:
 *   - Can battlers be exploited endlessly?
 * 
 *   JS: On Exploited:
 *   - Code used when the target has been exploited.
 *
 * ---
 *
 * Animation
 * 
 *   Animation ID:
 *   - Play this animation when the effect activates.
 * 
 *   Mirror Animation:
 *   - Mirror the effect animation?
 * 
 *   Mute Animation:
 *   - Mute the effect animation?
 *
 * ---
 *
 * Popups
 * 
 *   Text:
 *   - Text displayed upon the effect activating.
 * 
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Flash Color:
 *   - Adjust the popup's flash color.
 *   - Format: [red, green, blue, alpha]
 * 
 *   Flash Duration:
 *   - What is the frame duration of the flash effect?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Exploiter Effects Settings
 * ============================================================================
 *
 * These are effects for the battlers doing the exploiting. Change how you want
 * exploiter battlers to behave here.
 *
 * ---
 *
 * Mechanics
 * 
 *   Added States:
 *   - A list of the states that are added when a user exploits a foe.
 * 
 *   Extra Actions:
 *   - Successfully exploiting an enemy will grant the user this many
 *     extra actions.
 * 
 *   Multiple Exploits:
 *   - Can battlers exploit opponents multiple times with one action?
 * 
 *   JS: On Exploiting:
 *   - Code used when the user is exploiting a foe's weakness.
 *
 * ---
 *
 * Animation
 * 
 *   Animation ID:
 *   - Play this animation when the effect activates.
 * 
 *   Mirror Animation:
 *   - Mirror the effect animation?
 * 
 *   Mute Animation:
 *   - Mute the effect animation?
 *
 * ---
 *
 * Popups
 * 
 *   Text:
 *   - Text displayed upon the effect activating.
 * 
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Flash Color:
 *   - Adjust the popup's flash color.
 *   - Format: [red, green, blue, alpha]
 * 
 *   Flash Duration:
 *   - What is the frame duration of the flash effect?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Turn Order Settings
 * ============================================================================
 *
 * Turn Order Display settings used for Battle System STB. These adjust how the
 * visible turn order appears in-game.
 *
 * ---
 *
 * General
 * 
 *   Display Position:
 *   - Select where the Turn Order will appear on the screen.
 * 
 *     Offset X:
 *     - How much to offset the X coordinate by.
 *     - Negative: left. Positive: right.
 * 
 *     Offset Y:
 *     - How much to offset the Y coordinate by.
 *     - Negative: up. Positive: down.
 * 
 *   Center Horizontal?:
 *   - Reposition the Turn Order Display to always be centered if it is a
 *     'top' or 'bottom' position?
 * 
 *   Reposition for Help?:
 *   - If the display position is at the top, reposition the display when the
 *     help window is open?
 * 
 *   Reposition Log?:
 *   - If the display position is at the top, reposition the Battle Log Window
 *     to be lower?
 * 
 *   Forward Direction:
 *   - Decide on the direction of the Turn Order.
 *   - Settings may vary depending on position.
 *   - Left to Right / Down to Up
 *   - Right to Left / Up to Down
 * 
 *   Subject Distance:
 *   - How far do you want the currently active battler to distance itself from
 *     the rest of the Turn Order?
 * 
 *   Screen Buffer:
 *   - What distance do you want the display to be away from the edge of the
 *     screen by?
 *
 * ---
 *
 * Reposition For Help
 * 
 *   Repostion X By:
 *   Repostion Y By:
 *   - Reposition the display's coordinates by this much when the Help Window
 *     is visible.
 *
 * ---
 *
 * Slots
 * 
 *   Max Horizontal:
 *   - Maximum slots you want to display for top and bottom Turn Order Display
 *     positions?
 * 
 *   Max Vertical:
 *   - Maximum slots you want to display for left and right Turn Order Display
 *     positions?
 * 
 *   Length:
 *   - How many pixels long should the slots be on the Turn Order display?
 * 
 *   Thin:
 *   - How many pixels thin should the slots be on the Turn Order display?
 * 
 *   Update Frames:
 *   - How many frames should it take for the slots to update their
 *     positions by?
 *
 * ---
 *
 * Slot Border
 * 
 *   Show Border?:
 *   - Show borders for the slot sprites?
 * 
 *   Border Thickness:
 *   - How many pixels thick should the colored portion of the border be?
 * 
 *   Actors
 *   Enemies
 * 
 *     Border Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 * 
 *     Border Skin:
 *     - Optional. Place a skin on the actor/enemy borders instead of
 *       rendering them?
 *
 * ---
 *
 * Slot Sprites
 * 
 *   Actors
 * 
 *     Sprite Type:
 *     - Select the type of sprite used for the actor graphic.
 *     - Face Graphic - Show the actor's face.
 *     - Icon - Show a specified icon.
 *     - Sideview Actor - Show the actor's sideview battler.
 * 
 *     Default Icon:
 *     - Which icon do you want to use for actors by default?
 * 
 *   Enemies
 * 
 *     Sprite Type:
 *     - Select the type of sprite used for the enemy graphic.
 *     - Face Graphic - Show a specified face graphic.
 *     - Icon - Show a specified icon.
 *     - Enemy - Show the enemy's graphic or sideview battler.
 * 
 *     Default Face Name:
 *     - Use this default face graphic if there is no specified face.
 * 
 *     Default Face Index:
 *     - Use this default face index if there is no specified index.
 * 
 *     Default Icon:
 *     - Which icon do you want to use for enemies by default?
 * 
 *     Match Hue?:
 *     - Match the hue for enemy battlers?
 *     - Does not apply if there's a sideview battler.
 *
 * ---
 *
 * Slot Letter
 * 
 *   Show Enemy Letter?:
 *   - Show the enemy's letter on the slot sprite?
 * 
 *   Font Name:
 *   - The font name used for the text of the Letter.
 *   - Leave empty to use the default game's font.
 * 
 *   Font Size:
 *   - The font size used for the text of the Letter.
 *
 * ---
 *
 * Slot Background
 * 
 *   Show Background?:
 *   - Show the background on the slot sprite?
 * 
 *   Actors
 *   Enemies
 * 
 *     Background Color 1:
 *     Background Color 2:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 * 
 *     Background Skin:
 *     - Optional. Use a skin for the actor background instead of
 *       rendering them?
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
 * Version 1.10: July 2, 2021
 * * Bug Fixes!
 * ** Dead battlers will no longer reappear in the turn order on subsequent
 *    turns. Fix made by Olivia.
 * * Documentation Update!
 * ** Help file updated for updated features.
 * * Feature Update!
 * ** "Mechanics Settings" Plugin Parameters has been updated into
 *    "Speed Mechanics" with updated formulas that will now correlate any
 *    adjusted AGI changes made to battlers to alter the following turn
 *    properly. Update made by Olivia.
 * 
 * Version 1.09: March 26, 2021
 * * Bug Fixes!
 * ** Enemy exploit actions should now associate A.I. properly. Fix by Yanfly.
 * * Documentation Update!
 * ** Added "VisuStella MZ Compatibility" section for detailed compatibility
 *    explanations with the VisuMZ_4_BreakShields plugin.
 * 
 * Version 1.08: March 19, 2021
 * * Feature Update!
 * ** Turn Order Window calculations slightly tweaked for times when the window
 *    layer is bigger than it should be. Update made by Olivia.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.07: January 22, 2021
 * * Feature Update!
 * ** A different kind of end battle check is now made to determine hiding the
 *    turn order display. Update made by Olivia.
 * 
 * Version 1.06: January 1, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.05: December 25, 2020
 * * Bug Fixes!
 * ** Starting battle from a surprise attack will no longer skip turn 1. And
 *    starting battle without any inputtable actors will no longer skip turn 1.
 *    Fix made by Yanfly.
 * 
 * Version 1.04: December 18, 2020
 * * Feature Update!
 * ** Enemies can now benefit from <STB Instant> skills. Update made by Olivia.
 * ** Action End States updating are now handled by Skills and States Core
 *    v1.07+ for proper intended usage. Change from Battle System - STB v1.02
 *    is reverted here to prevent triggering the update twice.
 * 
 * Version 1.03: December 4, 2020
 * * Bug Fixes!
 * ** Select Next Command no longer returns undefined. Fix made by Olivia.
 * 
 * Version 1.02: November 22, 2020
 * * Bug Fixes!
 * ** Action End States now update at the end of each individual action.
 *    Fix made by Yanfly.
 * 
 * Version 1.01: November 15, 2020
 * * Bug Fixes!
 * ** Now compatible with Party Command Window Disable from the Battle Core.
 *    Fix made by Yanfly.
 *
 * Version 1.00 Official Release Date: November 23, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command StbTurnOrderActorIcon
 * @text Actor: Change STB Turn Order Icon
 * @desc Changes the icons used for the specific actor(s) on the STB Turn Order.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg IconIndex:num
 * @text Icon
 * @desc Changes the graphic to this icon.
 * @default 84
 *
 * @ --------------------------------------------------------------------------
 *
 * @command StbTurnOrderActorFace
 * @text Actor: Change STB Turn Order Face
 * @desc Changes the faces used for the specific actor(s) on the STB Turn Order.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg FaceName:str
 * @text Face Name
 * @type file
 * @dir img/faces/
 * @desc This is the filename for the target face graphic.
 * @default Actor1
 *
 * @arg FaceIndex:num
 * @text Face Index
 * @type number
 * @desc This is the index for the target face graphic.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command StbTurnOrderClearActorGraphic
 * @text Actor: Clear STB Turn Order Graphic
 * @desc Clears the STB Turn Order graphics for the actor(s).
 * The settings will revert to the Plugin Parameter settings.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command StbTurnOrderEnemyIcon
 * @text Enemy: Change STB Turn Order Icon
 * @desc Changes the icons used for the specific enemy(ies) on the STB Turn Order.
 *
 * @arg Enemies:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @desc Select which enemy index(es) to affect.
 * @default ["1"]
 *
 * @arg IconIndex:num
 * @text Icon
 * @desc Changes the graphic to this icon.
 * @default 298
 *
 * @ --------------------------------------------------------------------------
 *
 * @command StbTurnOrderEnemyFace
 * @text Enemy: Change STB Turn Order Face
 * @desc Changes the faces used for the specific enemy(ies) on the STB Turn Order.
 *
 * @arg Enemies:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @desc Select which enemy index(es) to affect.
 * @default ["1"]
 *
 * @arg FaceName:str
 * @text Face Name
 * @parent EnemySprite
 * @type file
 * @dir img/faces/
 * @desc This is the filename for the target face graphic.
 * @default Monster
 *
 * @arg FaceIndex:num
 * @text Face Index
 * @parent EnemySprite
 * @type number
 * @desc This is the index for the target face graphic.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command StbTurnOrderClearEnemyGraphic
 * @text Enemy: Clear STB Turn Order Graphic
 * @desc Clears the STB Turn Order graphics for the enemy(ies).
 * The settings will revert to the Plugin Parameter settings.
 *
 * @arg Enemies:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @desc Select which enemy index(es) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemTurnOrderVisibility
 * @text System: STB Turn Order Visibility
 * @desc Determine the visibility of the STB Turn Order Display.
 *
 * @arg Visible:eval
 * @text Visibility
 * @type boolean
 * @on Visible
 * @off Hidden
 * @desc Changes the visibility of the STB Turn Order Display.
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
 * @param BattleSystemSTB
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Speed:struct
 * @text Speed Mechanics
 * @type struct<Speed>
 * @desc Determines the mechanics of the STB Battle System.
 * @default {"Speed":"","InitialSpeedJS:func":"\"// Declare Constants\\nconst user = this;\\nconst agi = user.agi;\\n\\n// Create Base Speed\\nlet speed = agi;\\n\\n// Random Speed Check\\nif (user.allowRandomSpeed()) {\\n    speed += Math.randomInt(Math.floor(5 + agi / 4));\\n}\\n\\n// Add Saved Speed Modifiers from Previous Round\\nspeed += user.getSTBNextTurnSpeed();\\n\\n// Return Speed\\nreturn speed;\"","NextTurnSavedSpeedJS:func":"\"// Create Speed\\nconst action = this;\\nlet speed = 0;\\n\\n// Check Object\\nif (action.item()) {\\n    speed += action.item().speed;\\n}\\n\\n// Check Attack\\nif (action.isAttack()) {\\n    speed += action.subject().attackSpeed();\\n}\\n\\n// Return Speed\\nreturn speed;\""}
 *
 * @param Exploit:struct
 * @text Exploit System
 * @type struct<Exploit>
 * @desc Settings for the STB's Exploit System.
 * @default {"EnableExploit:eval":"true","ExploitCritical:eval":"true","ExploitEleWeakness:eval":"true","ExploitEleRate:num":"1.05","TurnResetExploits:eval":"true"}
 *
 * @param Exploited:struct
 * @text Exploited Effects
 * @parent Exploit:struct
 * @type struct<Exploited>
 * @desc Settings for targets being Exploited.
 * @default {"Mechanics":"","AddedStates:arraynum":"[\"13\"]","FullExploitEvents":"","vsActorsFullExploit:num":"0","vsEnemiesFullExploit:num":"0","UnlimitedExploits:eval":"false","CustomJS:func":"\"// Declare Constants\\nconst target = this;\\nconst user = arguments[0];\\nconst action = arguments[1];\\n\\n// Perform Actions\\n\"","Animation":"","AnimationID:num":"0","Mirror:eval":"false","Mute:eval":"false","Popups":"","PopupText:str":"","TextColor:str":"0","FlashColor:eval":"[255, 255, 255, 160]","FlashDuration:num":"60"}
 *
 * @param Exploiter:struct
 * @text Exploiter Effects
 * @parent Exploit:struct
 * @type struct<Exploiter>
 * @desc Settings for users doing the Exploiting.
 * @default {"Mechanics":"","AddedStates:arraynum":"[]","ExtraActions:num":"1","MultipleExploits:eval":"false","CustomJS:func":"\"// Declare Constants\\nconst user = this;\\nconst target = arguments[0];\\nconst action = arguments[1];\\n\\n// Perform Actions\\n\"","Animation":"","AnimationID:num":"12","Mirror:eval":"false","Mute:eval":"false","Popups":"","PopupText:str":"ONE MORE!","TextColor:str":"0","FlashColor:eval":"[255, 255, 128, 160]","FlashDuration:num":"60"}
 *
 * @param TurnOrder:struct
 * @text Turn Order Display
 * @type struct<TurnOrder>
 * @desc Turn Order Display settings used for Battle System STB.
 * @default {"General":"","DisplayPosition:str":"top","DisplayOffsetX:num":"0","DisplayOffsetY:num":"0","CenterHorz:eval":"true","RepositionTopForHelp:eval":"true","RepositionLogWindow:eval":"true","OrderDirection:eval":"true","SubjectDistance:num":"8","ScreenBuffer:num":"20","Reposition":"","RepositionTopHelpX:num":"0","RepositionTopHelpY:num":"96","Slots":"","MaxHorzSprites:num":"16","MaxVertSprites:num":"10","SpriteLength:num":"72","SpriteThin:num":"36","UpdateFrames:num":"24","Border":"","ShowMarkerBorder:eval":"true","BorderActor":"","ActorBorderColor:str":"4","ActorSystemBorder:str":"","BorderEnemy":"","EnemyBorderColor:str":"2","EnemySystemBorder:str":"","BorderThickness:num":"2","Sprite":"","ActorSprite":"","ActorBattlerType:str":"face","ActorBattlerIcon:num":"84","EnemySprite":"","EnemyBattlerType:str":"enemy","EnemyBattlerFaceName:str":"Monster","EnemyBattlerFaceIndex:num":"1","EnemyBattlerIcon:num":"298","EnemyBattlerMatchHue:eval":"true","Letter":"","EnemyBattlerDrawLetter:eval":"true","EnemyBattlerFontFace:str":"","EnemyBattlerFontSize:num":"16","Background":"","ShowMarkerBg:eval":"true","BackgroundActor":"","ActorBgColor1:str":"19","ActorBgColor2:str":"9","ActorSystemBg:str":"","BackgroundEnemy":"","EnemyBgColor1:str":"19","EnemyBgColor2:str":"18","EnemySystemBg:str":""}
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
 * Speed Mechanics Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Speed:
 *
 * @param Speed
 *
 * @param InitialSpeedJS:func
 * @text JS: Finalized Speed
 * @parent Speed
 * @type note
 * @desc Code used to calculate initial speed at the start of battle.
 * @default "// Declare Constants\nconst user = this;\nconst agi = user.agi;\n\n// Create Base Speed\nlet speed = agi;\n\n// Random Speed Check\nif (user.allowRandomSpeed()) {\n    speed += Math.randomInt(Math.floor(5 + agi / 4));\n}\n\n// Add Saved Speed Modifiers from Previous Round\nspeed += user.getSTBNextTurnSpeed();\n\n// Return Speed\nreturn speed;"
 *
 * @param NextTurnSavedSpeedJS:func
 * @text JS: Next Turn Speed
 * @parent Speed
 * @type note
 * @desc Code used to calculate speed for a following turn.
 * @default "// Create Speed\nconst action = this;\nlet speed = 0;\n\n// Check Object\nif (action.item()) {\n    speed += action.item().speed;\n}\n\n// Check Attack\nif (action.isAttack()) {\n    speed += action.subject().attackSpeed();\n}\n\n// Return Speed\nreturn speed;"
 * 
 */
/* ----------------------------------------------------------------------------
 * Exploit System Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Exploit:
 *
 * @param EnableExploit:eval
 * @text Enable System?
 * @parent Exploit
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable the exploit system? If disabled, ignore all the 
 * mechanics regarding the Exploit System.
 * @default true
 *
 * @param ExploitCritical:eval
 * @text Critical Hits
 * @parent Exploit
 * @type boolean
 * @on Exploit
 * @off Don't Exploit
 * @desc Do critical hits exploit the opponent?
 * @default true
 *
 * @param ExploitEleWeakness:eval
 * @text Elemental Weakness
 * @parent Exploit
 * @type boolean
 * @on Exploit
 * @off Don't Exploit
 * @desc Do elemental weaknesses exploit the opponent?
 * @default true
 *
 * @param ExploitEleRate:num
 * @text Minimum Rate
 * @parent ExploitEleWeakness:eval
 * @desc What's the minimum rate needed to count as an elemental weakness?
 * @default 1.05
 *
 * @param TurnResetExploits:eval
 * @text Reset Each Turn
 * @parent Exploit
 * @type boolean
 * @on Reset Exploits
 * @off Don't Reset
 * @desc Reset exploits at the end of each turn?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Exploited Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Exploited:
 *
 * @param Mechanics
 * 
 * @param AddedStates:arraynum
 * @text Added States
 * @parent Mechanics
 * @type state[]
 * @desc A list of the states that are added when a target is exploited.
 * @default ["13"]
 * 
 * @param FullExploitEvents
 * @text Full Exploit Events
 * @parent Mechanics
 * 
 * @param vsActorsFullExploit:num
 * @text vs Actors Event
 * @parent FullExploitEvents
 * @type common_event
 * @desc If all actors have been fully exploited, run this common
 * event. Does not work with unlimited exploits.
 * @default 0
 * 
 * @param vsEnemiesFullExploit:num
 * @text vs Enemies Event
 * @parent FullExploitEvents
 * @type common_event
 * @desc If all enemies have been fully exploited, run this common
 * event. Does not work with unlimited exploits.
 * @default 0
 *
 * @param UnlimitedExploits:eval
 * @text Unlimited Exploits
 * @parent Mechanics
 * @type boolean
 * @on Unlimited
 * @off Once Per Turn
 * @desc Can battlers be exploited endlessly?
 * @default false
 *
 * @param CustomJS:func
 * @text JS: On Exploited
 * @parent Mechanics
 * @type note
 * @desc Code used when the target has been exploited.
 * @default "// Declare Constants\nconst target = this;\nconst user = arguments[0];\nconst action = arguments[1];\n\n// Perform Actions\n"
 *
 * @param Animation
 *
 * @param AnimationID:num
 * @text Animation ID
 * @parent Animation
 * @type animation
 * @desc Play this animation when the effect activates.
 * @default 0
 *
 * @param Mirror:eval
 * @text Mirror Animation
 * @parent Animation
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the effect animation?
 * @default false
 *
 * @param Mute:eval
 * @text Mute Animation
 * @parent Animation
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the effect animation?
 * @default false
 *
 * @param Popups
 *
 * @param PopupText:str
 * @text Text
 * @parent Popups
 * @desc Text displayed upon the effect activating.
 * @default 
 *
 * @param TextColor:str
 * @text Text Color
 * @parent Popups
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param FlashColor:eval
 * @text Flash Color
 * @parent Popups
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 255, 255, 160]
 * 
 * @param FlashDuration:num
 * @text Flash Duration
 * @parent Popups
 * @type Number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 */
/* ----------------------------------------------------------------------------
 * Exploiter Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Exploiter:
 *
 * @param Mechanics
 * 
 * @param AddedStates:arraynum
 * @text Added States
 * @parent Mechanics
 * @type state[]
 * @desc A list of the states that are added when a user exploits a foe.
 * @default []
 * 
 * @param ExtraActions:num
 * @text Extra Actions
 * @parent Mechanics
 * @type number
 * @desc Successfully exploiting an enemy will grant the user this many extra actions.
 * @default 1
 *
 * @param MultipleExploits:eval
 * @text Multiple Exploits
 * @parent Mechanics
 * @type boolean
 * @on Multiple
 * @off Once Per Action
 * @desc Can battlers exploit opponents multiple times with one action?
 * @default false
 *
 * @param CustomJS:func
 * @text JS: On Exploiting
 * @parent Mechanics
 * @type note
 * @desc Code used when the user is exploiting a foe's weakness.
 * @default ""
 *
 * @param Animation
 *
 * @param AnimationID:num
 * @text Animation ID
 * @parent Animation
 * @type animation
 * @desc Play this animation when the effect activates.
 * @default 12
 *
 * @param Mirror:eval
 * @text Mirror Animation
 * @parent Animation
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the effect animation?
 * @default false
 *
 * @param Mute:eval
 * @text Mute Animation
 * @parent Animation
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the effect animation?
 * @default false
 *
 * @param Popups
 *
 * @param PopupText:str
 * @text Text
 * @parent Popups
 * @desc Text displayed upon the effect activating.
 * @default ONE MORE!
 *
 * @param TextColor:str
 * @text Text Color
 * @parent Popups
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param FlashColor:eval
 * @text Flash Color
 * @parent Popups
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 255, 128, 160]
 * 
 * @param FlashDuration:num
 * @text Flash Duration
 * @parent Popups
 * @type Number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 */
/* ----------------------------------------------------------------------------
 * Turn Order Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TurnOrder:
 *
 * @param General
 *
 * @param DisplayPosition:str
 * @text Display Position
 * @parent General
 * @type select
 * @option top
 * @option bottom
 * @option left
 * @option right
 * @desc Select where the Turn Order will appear on the screen.
 * @default top
 * 
 * @param DisplayOffsetX:num
 * @text Offset X
 * @parent DisplayPosition:str
 * @desc How much to offset the X coordinate by.
 * Negative: left. Positive: right.
 * @default 0
 * 
 * @param DisplayOffsetY:num
 * @text Offset Y
 * @parent DisplayPosition:str
 * @desc How much to offset the Y coordinate by.
 * Negative: up. Positive: down.
 * @default 0
 *
 * @param CenterHorz:eval
 * @text Center Horizontal?
 * @parent DisplayPosition:str
 * @type boolean
 * @on Center
 * @off Stay
 * @desc Reposition the Turn Order Display to always be centered
 * if it is a 'top' or 'bottom' position?
 * @default true
 *
 * @param RepositionTopForHelp:eval
 * @text Reposition for Help?
 * @parent DisplayPosition:str
 * @type boolean
 * @on Reposition
 * @off Stay
 * @desc If the display position is at the top, reposition the
 * display when the help window is open?
 * @default true
 *
 * @param RepositionLogWindow:eval
 * @text Reposition Log?
 * @parent DisplayPosition:str
 * @type boolean
 * @on Reposition
 * @off Stay
 * @desc If the display position is at the top, reposition the
 * Battle Log Window to be lower?
 * @default true
 *
 * @param OrderDirection:eval
 * @text Forward Direction
 * @parent General
 * @type boolean
 * @on Left to Right / Down to Up
 * @off Right to Left / Up to Down
 * @desc Decide on the direction of the Turn Order.
 * Settings may vary depending on position.
 * @default true
 *
 * @param SubjectDistance:num
 * @text Subject Distance
 * @parent General
 * @type number
 * @desc How far do you want the currently active battler to
 * distance itself from the rest of the Turn Order?
 * @default 8
 *
 * @param ScreenBuffer:num
 * @text Screen Buffer
 * @parent General
 * @type number
 * @desc What distance do you want the display to be away
 * from the edge of the screen by?
 * @default 20
 * 
 * @param Reposition
 * @text Reposition For Help
 *
 * @param RepositionTopHelpX:num
 * @text Repostion X By
 * @parent Reposition
 * @desc Reposition the display's X coordinates by this much when
 * the Help Window is visible.
 * @default 0
 *
 * @param RepositionTopHelpY:num
 * @text Repostion Y By
 * @parent Reposition
 * @desc Reposition the display's Y coordinates by this much when
 * the Help Window is visible.
 * @default 96
 * 
 * @param Slots
 *
 * @param MaxHorzSprites:num
 * @text Max Horizontal
 * @parent Slots
 * @type number
 * @min 1
 * @desc Maximum slots you want to display for top and
 * bottom Turn Order Display positions?
 * @default 16
 *
 * @param MaxVertSprites:num
 * @text Max Vertical
 * @parent Slots
 * @type number
 * @min 1
 * @desc Maximum slots you want to display for left and
 * right Turn Order Display positions?
 * @default 10
 *
 * @param SpriteLength:num
 * @text Length
 * @parent Slots
 * @type number
 * @min 1
 * @desc How many pixels long should the slots be on the
 * Turn Order display?
 * @default 72
 *
 * @param SpriteThin:num
 * @text Thin
 * @parent Slots
 * @type number
 * @min 1
 * @desc How many pixels thin should the slots be on the
 * Turn Order display?
 * @default 36
 *
 * @param UpdateFrames:num
 * @text Update Frames
 * @parent Slots
 * @type number
 * @min 1
 * @desc How many frames should it take for the slots to
 * update their positions by?
 * @default 24
 *
 * @param Border
 * @text Slot Border
 *
 * @param ShowMarkerBorder:eval
 * @text Show Border?
 * @parent Border
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show borders for the slot sprites?
 * @default true
 *
 * @param BorderThickness:num
 * @text Border Thickness
 * @parent Markers
 * @type number
 * @min 1
 * @desc How many pixels thick should the colored portion of the border be?
 * @default 2
 *
 * @param BorderActor
 * @text Actors
 * @parent Border
 *
 * @param ActorBorderColor:str
 * @text Border Color
 * @parent BorderActor
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 4
 *
 * @param ActorSystemBorder:str
 * @text Border Skin
 * @parent BorderActor
 * @type file
 * @dir img/system/
 * @desc Optional. Place a skin on the actor borders instead of rendering them?
 * @default 
 *
 * @param BorderEnemy
 * @text Enemies
 * @parent Border
 *
 * @param EnemyBorderColor:str
 * @text Border Color
 * @parent BorderEnemy
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 2
 *
 * @param EnemySystemBorder:str
 * @text Border Skin
 * @parent BorderEnemy
 * @type file
 * @dir img/system/
 * @desc Optional. Place a skin on the enemy borders instead of rendering them?
 * @default 
 *
 * @param Sprite
 * @text Slot Sprites
 *
 * @param ActorSprite
 * @text Actors
 * @parent Sprite
 *
 * @param ActorBattlerType:str
 * @text Sprite Type
 * @parent ActorSprite
 * @type select
 * @option Face Graphic - Show the actor's face.
 * @value face
 * @option Icon - Show a specified icon.
 * @value icon
 * @option Sideview Actor - Show the actor's sideview battler.
 * @value svactor
 * @desc Select the type of sprite used for the actor graphic.
 * @default face
 *
 * @param ActorBattlerIcon:num
 * @text Default Icon
 * @parent ActorSprite
 * @desc Which icon do you want to use for actors by default?
 * @default 84
 *
 * @param EnemySprite
 * @text Enemies
 * @parent Sprite
 *
 * @param EnemyBattlerType:str
 * @text Sprite Type
 * @parent EnemySprite
 * @type select
 * @option Face Graphic - Show a specified face graphic.
 * @value face
 * @option Icon - Show a specified icon.
 * @value icon
 * @option Enemy - Show the enemy's graphic or sideview battler.
 * @value enemy
 * @desc Select the type of sprite used for the enemy graphic.
 * @default enemy
 *
 * @param EnemyBattlerFaceName:str
 * @text Default Face Name
 * @parent EnemySprite
 * @type file
 * @dir img/faces/
 * @desc Use this default face graphic if there is no specified face.
 * @default Monster
 *
 * @param EnemyBattlerFaceIndex:num
 * @text Default Face Index
 * @parent EnemySprite
 * @type number
 * @desc Use this default face index if there is no specified index.
 * @default 1
 *
 * @param EnemyBattlerIcon:num
 * @text Default Icon
 * @parent EnemySprite
 * @desc Which icon do you want to use for enemies by default?
 * @default 298
 *
 * @param EnemyBattlerMatchHue:eval
 * @text Match Hue?
 * @parent EnemySprite
 * @type boolean
 * @on Match
 * @off Don't Match
 * @desc Match the hue for enemy battlers?
 * Does not apply if there's a sideview battler.
 * @default true
 *
 * @param Letter
 * @text Slot Letter
 *
 * @param EnemyBattlerDrawLetter:eval
 * @text Show Enemy Letter?
 * @parent Letter
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the enemy's letter on the slot sprite?
 * @default true
 *
 * @param EnemyBattlerFontFace:str
 * @text Font Name
 * @parent Letter
 * @desc The font name used for the text of the Letter.
 * Leave empty to use the default game's font.
 * @default 
 *
 * @param EnemyBattlerFontSize:num
 * @text Font Size
 * @parent Letter
 * @min 1
 * @desc The font size used for the text of the Letter.
 * @default 16
 *
 * @param Background
 * @text Slot Background
 *
 * @param ShowMarkerBg:eval
 * @text Show Background?
 * @parent Background
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the background on the slot sprite?
 * @default true
 *
 * @param BackgroundActor
 * @text Actors
 * @parent Background
 *
 * @param ActorBgColor1:str
 * @text Background Color 1
 * @parent BackgroundActor
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param ActorBgColor2:str
 * @text Background Color 2
 * @parent BackgroundActor
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 9
 *
 * @param ActorSystemBg:str
 * @text Background Skin
 * @parent BackgroundActor
 * @type file
 * @dir img/system/
 * @desc Optional. Use a skin for the actor background instead of rendering them?
 * @default 
 *
 * @param BackgroundEnemy
 * @text Enemies
 * @parent Background
 *
 * @param EnemyBgColor1:str
 * @text Background Color 1
 * @parent BackgroundEnemy
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param EnemyBgColor2:str
 * @text Background Color 2
 * @parent BackgroundEnemy
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 18
 *
 * @param EnemySystemBg:str
 * @text Background Skin
 * @parent BackgroundEnemy
 * @type file
 * @dir img/system/
 * @desc Optional. Use a skin for the enemy background instead of rendering them?
 * @default 
 *
 */
//=============================================================================

const _0x2578=['_actions','SubjectDistance','oPkcb','SvFIZ','AddedStates','remove','DisplayOffsetX','updatePadding','420018JwbaWT','endActionSTB','traitObjects','Actors','#000000','floor','_isAlive','_letterSprite','ExploiterStates','clearTurnOrderSTBGraphics','checkOpacity','PfELl','qPdYl','width','Visible','%1BgColor2','JSON','numActions','createBattlerSprites','dWDLi','OrderDirection','updatePosition','fXZad','makeSpeed','bsoAT','Game_Action_applyGlobal','updateTurnOrder','reserveCommonEvent','IKKUb','makeSTBSpeed','applyGlobalBattleSystemSTB','onTurnEnd','svactor','_subject','MaxVertSprites','anchor','pEbMf','_position','tWXLV','RuDKN','Exploiter','kNiqu','TurnOrderSTBGraphicFaceName','rqJGX','Game_Battler_makeSpeed','EnemyBattlerFaceName','yUYGc','NextTurnSavedSpeedJS','LVrbj','KqfPf','addSTBNextTurnSpeed','GVyjH','createTurnOrderSTBGraphicType','BattleManager_finishActorInput','gQDUQ','windowRect','removeActionBattlersSTB','isActiveTpb','createSTBTurnOrderWindow','split','addChild','appear','isBattleSystemSTBTurnOrderVisible','prototype','mainFontFace','ARRAYEVAL','enemy','filter','currentClass','BattleManager_isTurnBased','_positionTargetX','_currentActor','clNUa','ARRAYSTR','containerWindow','_scene','getStateIdWithName','TurnResetExploits','icon','FVHiE','STRUCT','SystemTurnOrderVisibility','jJmTg','_inputting','EnemyBattlerFontFace','onBattleStartSTB','vsActorsFullExploit','executeDamageSTB','fontSize','maxBattleMembers','toUpperCase','Game_Battler_onBattleStart','_stbTurnOrderGraphicType','BattleManager_battleSys','Enemy','uqmYE','CenterHorz','_turnOrderContainer','test','13163SqbHBc','max','loadFace','updateVisibility','ExploitEleWeakness','_windowLayer','setSTBExploited','MultipleExploits','makeActionOrders','_stbTurnOrderIconIndex','members','_stbTurnOrderFaceIndex','isHorz','yxwNG','startInputSTB','initMembers','PopupText','becomeSTBExploited','speed','%1\x20%2\x20%3','FlashDuration','YEFAD','faceWidth','constructor','bottom','DisplayPosition','FlashColor','loadSvActor','_positionDuration','left','ParseStateData','fillRect','critical','createLetterSprite','gGrYT','gTwgN','ActorBattlerIcon','_speed','EnemyBattlerDrawLetter','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','eLDCG','uRdKD','addLoadListener','isAppeared','startFade','result','DisplayOffsetY','_unit','11079htoQIs','gradientFillRect','WGUWs','BattleManager_processTurn','battler','Scene_Battle_commandFight','displayExploitedEffects','vxxNw','padding','changeEnemyGraphicBitmap','faceName','ZvrEJ','stbExploitedStates','initBattleSystemSTB','_index','updateLetter','setBattleSystemSTBTurnOrderVisible','StbTurnOrderEnemyFace','clearSTB','clearNextTurnSpeedSTB','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','min','close','trim','Game_BattlerBase_hide','boxHeight','processTurn','updateSelectionEffect','_targetHomeY','InitialSpeedJS','Game_Battler_performCollapse','SpriteThin','MjDOY','createInitialPositions','commandFight','loadSystem','tzkTW','height','bitmapHeight','STB','friendsUnit','Game_Battler_performActionEnd','mainSprite','sort','addInnerChild','BattleManager_makeActionOrders','setText','ceil','aliveMembers','_letter','CustomJS','cynNZ','mMCIQ','ExploitCritical','Scene_Battle_createActorCommandWindow','NcPmr','loadSvEnemy','description','processUpdateGraphic','ugRsZ','_stbNextTurnSpeed','ExtraActions','stbCannotBeExploiter','updateGraphic','FaceIndex','udMUt','clearSTBExploit','ARRAYFUNC','areAllActorsExploited','hide','538010fJSSFW','sXdgS','visible','createBackgroundSprite','_containerWidth','742011myWovB','Instant','ActorBattlerType','svBattlerName','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','_graphicFaceIndex','format','isActionValid','commandCancel','children','version','top','clear','EnemyBattlerIcon','RepositionTopHelpX','KmmuD','Bggij','battleSys','KTmKE','subject','ARRAYNUM','Settings','_stateIDs','TurnOrderSTBGraphicType','stepForward','_stbExploited','clearRect','QQMNz','_plural','blt','getChildIndex','_homeDuration','Actor','_graphicHue','_containerHeight','BattleSystemSTB','actor','commandCancelSTB','AnimationID','Game_BattlerBase_appear','setSTBExploitedFlag','_fadeDuration','createBattlerRect','URtLm','rWTIp','ZdzwQ','executeDamage','dHsaf','aZizF','createGraphicSprite','JjnpY','BattleManager_startInput','areAllEnemiesExploited','addState','initialize','EnableExploit','fDREE','createBorderSprite','center','createTurnOrderSTBGraphicIconIndex','Exploit','Game_Battler_onTurnEnd','isSceneBattle','_isAppeared','createTestBitmap','stbExploiterStates','canMove','_homeX','_fadeTarget','stbGainInstant','battleEnd','Exploited','AllowRandomSpeed','Game_Action_clear','ConvertParams','_forceAction','processTurnSTB','ARRAYJSON','selectNextActor','createTurnOrderSTBGraphicFaceName','ARTzf','boxWidth','CannotBeExploited','unshift','Enemies','_isBattleOver','5UxHFDH','Game_Actor_selectNextCommand','Mute','endAction','isTurnBased','performActionEnd','_stbTurnOrderVisible','setBlendColor','bind','ShowMarkerBg','_backgroundSprite','createAllWindows','EEZqT','recalculateHome','RegExp','battlerHue','indexOf','updateOpacity','BattleManager_selectNextActor','ScreenBuffer','push','IconSet','updateHomePosition','ExploitedStates','startActorInput','length','_ogWindowLayerY','cancel','faceHeight','UpdateFrames','selectNextCommand','StbTurnOrderClearActorGraphic','_graphicEnemy','Window_Help_setItem','checkPosition','SgRgg','77EgAjjv','unetC','TurnOrderSTBGraphicIconIndex','onBattleStart','call','note','getNextSubject','Scene_Battle_createAllWindows','getStateTooltipBattler','name','RepositionTopForHelp','BattleManager_isActiveTpb','right','_graphicIconIndex','face','EnemyBattlerFontSize','Mirror','TextColor','_graphicType','_ogWindowLayerX','createActorCommandWindow','createTurnOrderSTBGraphicFaceIndex','qwsPl','_targetHomeX','QKAMI','%1SystemBg','bitmap','dcxAE','includes','_actorCommandWindow','158820zPtogP','_statusWindow','hasSTBExploited','BattleManager_isTpb','initHomePositions','initMembersBattleSystemSTB','FVBay','changeSvActorGraphicBitmap','%1BgColor1','removeActor','22697NaINIb','_stbExploitAdvantageFlag','Game_Action_executeDamage','battlerName','NUM','_phase','_homeY','create','acfTs','lJokc','isSTBExploitSystemEnabled','match','eAkni','isSTBExploited','SpriteLength','drawText','parse','updateGraphicHue','_turnOrderInnerSprite','_graphicSprite','loadEnemy','_stbTurnOrderFaceName','round','Game_BattlerBase_initMembers','EnemyBattlerFaceIndex','containerPosition','LyqFb','finishActorInput','requestFauxAnimation','_handlers','registerCommand','Game_Party_removeActor','setup','omvAO','setSTBNextTurnSpeed','addChildAt','createActorCommandWindowSTB','getSTBNextTurnSpeed','calcElementRate','_helpWindow','ARRAYSTRUCT','nzknK','YWfCQ','CXRKI','_fullWidth','hasSvBattler','setupTextPopup','23TBvUoi','SXdup','ZZSbg','wyZiX','StbTurnOrderActorFace','STR','setHue','defaultPosition','_actionBattlers','rUqXO','calculateTargetPositions','%1BorderColor','repositionLogWindowSTB','performSTBExploiter','isActor','MPIVV','compareBattlerSprites','isTpb','currentAction','TurnOrderSTBGraphicFaceIndex','Tcgqs','FaceName','performActionEndSTB','return\x200','updateTurnOrderSTB','BorderThickness','Scene_Battle_commandCancel','_surprise','_logWindow','isSideView','IfvXK','startInput','opacity','allBattleMembers','bitmapWidth','TurnOrder','update','changeIconGraphicBitmap','clearSTBNextTurnSpeed','exit','UnlimitedExploits','Game_Action_speed','updateBattleContainerOrder','map','_forcedBattlers','Speed','setItem','_graphicFaceName','GGYug','canInput','status','_positionTargetY','isAlive','_graphicSv','MaxHorzSprites','isSTB','RepositionLogWindow','actions','yqZeE','_stbTurnOrderWindow','caIKc','BattleManager_endAction','QklGn','fyaHs','FeOKX','iconWidth','Game_System_initialize','isEnemy'];function _0x3ece(_0x57892a,_0x57ff7c){return _0x3ece=function(_0x25785e,_0x3ece39){_0x25785e=_0x25785e-0xaa;let _0x25d2ac=_0x2578[_0x25785e];return _0x25d2ac;},_0x3ece(_0x57892a,_0x57ff7c);}const _0x500709=_0x3ece;(function(_0x58a6e5,_0x58ccc2){const _0x29f669=_0x3ece;while(!![]){try{const _0x309dfb=parseInt(_0x29f669(0x1be))+parseInt(_0x29f669(0x143))*-parseInt(_0x29f669(0x28f))+parseInt(_0x29f669(0x256))+-parseInt(_0x29f669(0x214))*parseInt(_0x29f669(0x260))+-parseInt(_0x29f669(0xe0))+-parseInt(_0x29f669(0x1b9))+-parseInt(_0x29f669(0x238))*-parseInt(_0x29f669(0x173));if(_0x309dfb===_0x58ccc2)break;else _0x58a6e5['push'](_0x58a6e5['shift']());}catch(_0x7af947){_0x58a6e5['push'](_0x58a6e5['shift']());}}}(_0x2578,0x5cb04));var label=_0x500709(0x1e1),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x500709(0x123)](function(_0x4318bb){const _0x437e6a=_0x500709;return _0x4318bb[_0x437e6a(0xc6)]&&_0x4318bb[_0x437e6a(0x1ac)]['includes']('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0x500709(0x1d3)]||{},VisuMZ[_0x500709(0x208)]=function(_0x131d52,_0x580fad){const _0x5a1828=_0x500709;for(const _0x319b7b in _0x580fad){if(_0x5a1828(0xce)!=='yqZeE')this['_stbTurnOrderVisible']=!![];else{if(_0x319b7b['match'](/(.*):(.*)/i)){if(_0x5a1828(0x1ce)!==_0x5a1828(0x1ce)){const _0x3a9f7b=this[_0x5a1828(0x117)]();this['initHomePositions'](_0x3a9f7b),_0x288b03[_0x5a1828(0x11f)][_0x5a1828(0x1f4)]['call'](this,_0x3a9f7b),this[_0x5a1828(0xf2)](),this[_0x5a1828(0x146)](),this['opacity']=0x0;}else{const _0xc6819a=String(RegExp['$1']),_0x1cd96f=String(RegExp['$2'])[_0x5a1828(0x13a)]()['trim']();let _0xc32de5,_0x53b8e4,_0x1db2dc;switch(_0x1cd96f){case _0x5a1828(0x264):_0xc32de5=_0x580fad[_0x319b7b]!==''?Number(_0x580fad[_0x319b7b]):0x0;break;case _0x5a1828(0x1d2):_0x53b8e4=_0x580fad[_0x319b7b]!==''?JSON[_0x5a1828(0x270)](_0x580fad[_0x319b7b]):[],_0xc32de5=_0x53b8e4[_0x5a1828(0xbf)](_0x4a97e0=>Number(_0x4a97e0));break;case'EVAL':_0xc32de5=_0x580fad[_0x319b7b]!==''?eval(_0x580fad[_0x319b7b]):null;break;case _0x5a1828(0x121):_0x53b8e4=_0x580fad[_0x319b7b]!==''?JSON[_0x5a1828(0x270)](_0x580fad[_0x319b7b]):[],_0xc32de5=_0x53b8e4[_0x5a1828(0xbf)](_0x595918=>eval(_0x595918));break;case _0x5a1828(0xf0):_0xc32de5=_0x580fad[_0x319b7b]!==''?JSON[_0x5a1828(0x270)](_0x580fad[_0x319b7b]):'';break;case _0x5a1828(0x20b):_0x53b8e4=_0x580fad[_0x319b7b]!==''?JSON['parse'](_0x580fad[_0x319b7b]):[],_0xc32de5=_0x53b8e4[_0x5a1828(0xbf)](_0x3659c6=>JSON[_0x5a1828(0x270)](_0x3659c6));break;case'FUNC':_0xc32de5=_0x580fad[_0x319b7b]!==''?new Function(JSON['parse'](_0x580fad[_0x319b7b])):new Function(_0x5a1828(0xab));break;case _0x5a1828(0x1b6):_0x53b8e4=_0x580fad[_0x319b7b]!==''?JSON[_0x5a1828(0x270)](_0x580fad[_0x319b7b]):[],_0xc32de5=_0x53b8e4['map'](_0x21aef5=>new Function(JSON[_0x5a1828(0x270)](_0x21aef5)));break;case _0x5a1828(0x294):_0xc32de5=_0x580fad[_0x319b7b]!==''?String(_0x580fad[_0x319b7b]):'';break;case _0x5a1828(0x129):_0x53b8e4=_0x580fad[_0x319b7b]!==''?JSON[_0x5a1828(0x270)](_0x580fad[_0x319b7b]):[],_0xc32de5=_0x53b8e4[_0x5a1828(0xbf)](_0x216bfa=>String(_0x216bfa));break;case _0x5a1828(0x130):_0x1db2dc=_0x580fad[_0x319b7b]!==''?JSON[_0x5a1828(0x270)](_0x580fad[_0x319b7b]):{},_0xc32de5=VisuMZ[_0x5a1828(0x208)]({},_0x1db2dc);break;case _0x5a1828(0x288):_0x53b8e4=_0x580fad[_0x319b7b]!==''?JSON[_0x5a1828(0x270)](_0x580fad[_0x319b7b]):[],_0xc32de5=_0x53b8e4[_0x5a1828(0xbf)](_0x44e526=>VisuMZ[_0x5a1828(0x208)]({},JSON['parse'](_0x44e526)));break;default:continue;}_0x131d52[_0xc6819a]=_0xc32de5;}}}}return _0x131d52;},(_0x3a5deb=>{const _0x4c7265=_0x500709,_0x157280=_0x3a5deb[_0x4c7265(0x241)];for(const _0x33cf7e of dependencies){if(!Imported[_0x33cf7e]){alert(_0x4c7265(0x1c2)[_0x4c7265(0x1c4)](_0x157280,_0x33cf7e)),SceneManager['exit']();break;}}const _0x260c29=_0x3a5deb[_0x4c7265(0x1ac)];if(_0x260c29[_0x4c7265(0x26b)](/\[Version[ ](.*?)\]/i)){if(_0x4c7265(0x132)===_0x4c7265(0x132)){const _0x556b16=Number(RegExp['$1']);if(_0x556b16!==VisuMZ[label][_0x4c7265(0x1c8)]){if(_0x4c7265(0x1ee)===_0x4c7265(0x107))return;else alert(_0x4c7265(0x187)[_0x4c7265(0x1c4)](_0x157280,_0x556b16)),SceneManager['exit']();}}else _0x92bc95=_0x52e117[_0x4c7265(0x144)](_0x15e469,_0x3bb5f0);}if(_0x260c29['match'](/\[Tier[ ](\d+)\]/i)){if(_0x4c7265(0x111)!==_0x4c7265(0x111))return _0xd56404[_0x4c7265(0x1e1)][_0x4c7265(0x161)](_0x4cedcf['$1']);else{const _0x460519=Number(RegExp['$1']);if(_0x460519<tier)alert(_0x4c7265(0x16a)['format'](_0x157280,_0x460519,tier)),SceneManager[_0x4c7265(0xbb)]();else{if('CrurX'!=='CrurX'){const _0x340f08=_0x45313d[_0x4c7265(0x1d3)];if(!_0x340f08[_0x4c7265(0x169)])return;if(this[_0x4c7265(0x172)]===_0x13d276)return;const _0x33004f=this[_0x4c7265(0xb6)](),_0x19fe06=this['bitmapHeight'](),_0x7e4b82=new _0x52f57f();_0x7e4b82[_0x4c7265(0x103)]['x']=this['anchor']['x'],_0x7e4b82['anchor']['y']=this[_0x4c7265(0x103)]['y'],_0x7e4b82[_0x4c7265(0x252)]=new _0xf0a5e9(_0x33004f,_0x19fe06),this[_0x4c7265(0xe7)]=_0x7e4b82,this['addChild'](this[_0x4c7265(0xe7)]);}else tier=Math[_0x4c7265(0x144)](_0x460519,tier);}}}VisuMZ['ConvertParams'](VisuMZ[label]['Settings'],_0x3a5deb['parameters']);})(pluginData),PluginManager[_0x500709(0x27e)](pluginData[_0x500709(0x241)],'StbTurnOrderActorIcon',_0x2c0015=>{const _0x5bd371=_0x500709;VisuMZ[_0x5bd371(0x208)](_0x2c0015,_0x2c0015);const _0xc063c5=_0x2c0015[_0x5bd371(0xe3)],_0x1ca8be=_0x2c0015['IconIndex'];for(const _0x361e1e of _0xc063c5){const _0x2d4013=$gameActors[_0x5bd371(0x1e2)](_0x361e1e);if(!_0x2d4013)continue;_0x2d4013['_stbTurnOrderGraphicType']='icon',_0x2d4013[_0x5bd371(0x14c)]=_0x1ca8be;}}),PluginManager[_0x500709(0x27e)](pluginData[_0x500709(0x241)],_0x500709(0x293),_0x5d7b4e=>{const _0x177a4b=_0x500709;VisuMZ[_0x177a4b(0x208)](_0x5d7b4e,_0x5d7b4e);const _0x53215c=_0x5d7b4e[_0x177a4b(0xe3)],_0x2e0878=_0x5d7b4e[_0x177a4b(0x2a4)],_0x51b76f=_0x5d7b4e[_0x177a4b(0x1b3)];for(const _0xe6e106 of _0x53215c){if(_0x177a4b(0x28b)!==_0x177a4b(0x28b))this[_0x177a4b(0x203)](_0x3c854c[_0x177a4b(0x1b0)]);else{const _0x382d15=$gameActors[_0x177a4b(0x1e2)](_0xe6e106);if(!_0x382d15)continue;_0x382d15[_0x177a4b(0x13c)]=_0x177a4b(0x246),_0x382d15[_0x177a4b(0x275)]=_0x2e0878,_0x382d15[_0x177a4b(0x14e)]=_0x51b76f;}}}),PluginManager[_0x500709(0x27e)](pluginData[_0x500709(0x241)],_0x500709(0x233),_0x19e052=>{const _0x47eeaf=_0x500709;VisuMZ['ConvertParams'](_0x19e052,_0x19e052);const _0x2d27ee=_0x19e052[_0x47eeaf(0xe3)];for(const _0x2c32c8 of _0x2d27ee){const _0x2a294c=$gameActors[_0x47eeaf(0x1e2)](_0x2c32c8);if(!_0x2a294c)continue;_0x2a294c[_0x47eeaf(0xe9)]();}}),PluginManager[_0x500709(0x27e)](pluginData[_0x500709(0x241)],'StbTurnOrderEnemyIcon',_0x2fe0bc=>{const _0x28b91f=_0x500709;VisuMZ[_0x28b91f(0x208)](_0x2fe0bc,_0x2fe0bc);const _0x22c300=_0x2fe0bc[_0x28b91f(0x212)],_0x12d5ea=_0x2fe0bc['IconIndex'];for(const _0xb7ef8f of _0x22c300){if(_0x28b91f(0xeb)!=='IrJxp'){const _0x3a4385=$gameTroop['members']()[_0xb7ef8f];if(!_0x3a4385)continue;_0x3a4385[_0x28b91f(0x13c)]=_0x28b91f(0x12e),_0x3a4385[_0x28b91f(0x14c)]=_0x12d5ea;}else{const _0x1a0d96=_0x387127[_0x28b91f(0x11b)](','),_0x433bf8=[];for(let _0x338b1f of _0x1a0d96){_0x338b1f=(_0x3a720c(_0x338b1f)||'')['trim']();const _0x54f90b=/^\d+$/[_0x28b91f(0x142)](_0x338b1f);_0x54f90b?_0x433bf8[_0x28b91f(0x228)](_0x46b7d4(_0x338b1f)):_0x433bf8[_0x28b91f(0x228)](_0x58698c[_0x28b91f(0x12c)](_0x338b1f));}return _0x433bf8;}}}),PluginManager[_0x500709(0x27e)](pluginData[_0x500709(0x241)],_0x500709(0x184),_0x4695a3=>{const _0x3812f3=_0x500709;VisuMZ[_0x3812f3(0x208)](_0x4695a3,_0x4695a3);const _0x551b49=_0x4695a3['Enemies'],_0x3df570=_0x4695a3[_0x3812f3(0x2a4)],_0xaca32a=_0x4695a3[_0x3812f3(0x1b3)];for(const _0x3cdfa9 of _0x551b49){const _0x33c68a=$gameTroop[_0x3812f3(0x14d)]()[_0x3cdfa9];if(!_0x33c68a)continue;_0x33c68a['_stbTurnOrderGraphicType']=_0x3812f3(0x246),_0x33c68a[_0x3812f3(0x275)]=_0x3df570,_0x33c68a[_0x3812f3(0x14e)]=_0xaca32a;}}),PluginManager[_0x500709(0x27e)](pluginData[_0x500709(0x241)],'StbTurnOrderClearEnemyGraphic',_0x5de615=>{const _0x5d5fa0=_0x500709;VisuMZ[_0x5d5fa0(0x208)](_0x5de615,_0x5de615);const _0x4fe34c=_0x5de615['Enemies'];for(const _0x48d33f of _0x4fe34c){const _0x3d8e46=$gameTroop['members']()[_0x48d33f];if(!_0x3d8e46)continue;_0x3d8e46['clearTurnOrderSTBGraphics']();}}),PluginManager[_0x500709(0x27e)](pluginData['name'],_0x500709(0x131),_0x4ef7ab=>{const _0x5cfeae=_0x500709;VisuMZ[_0x5cfeae(0x208)](_0x4ef7ab,_0x4ef7ab);const _0x145c01=_0x4ef7ab[_0x5cfeae(0xee)];$gameSystem[_0x5cfeae(0x183)](_0x145c01);}),VisuMZ[_0x500709(0x1e1)]['RegExp']={'Instant':/<STB (?:INSTANT|INSTANT CAST|Instant Use)>/i,'CannotBeExploited':/<STB CANNOT BE EXPLOITED>/i,'CannotBeExploiter':/<STB CANNOT BE EXPLOITER>/i,'ExploitedStates':/<STB EXPLOITED GAIN (?:STATE|STATES):[ ](.*)>/i,'ExploiterStates':/<STB EXPLOITER GAIN (?:STATE|STATES):[ ](.*)>/i},DataManager[_0x500709(0x12c)]=function(_0x59d125){const _0x1b80fb=_0x500709;_0x59d125=_0x59d125['toUpperCase']()['trim'](),this[_0x1b80fb(0x1d4)]=this[_0x1b80fb(0x1d4)]||{};if(this['_stateIDs'][_0x59d125])return this['_stateIDs'][_0x59d125];for(const _0x18d751 of $dataStates){if(!_0x18d751)continue;this[_0x1b80fb(0x1d4)][_0x18d751[_0x1b80fb(0x241)]['toUpperCase']()['trim']()]=_0x18d751['id'];}return this[_0x1b80fb(0x1d4)][_0x59d125]||0x0;},SceneManager[_0x500709(0x1fc)]=function(){const _0x3a4d12=_0x500709;return this[_0x3a4d12(0x12b)]&&this['_scene'][_0x3a4d12(0x15a)]===Scene_Battle;},VisuMZ['BattleSystemSTB'][_0x500709(0x13d)]=BattleManager[_0x500709(0x1cf)],BattleManager[_0x500709(0x1cf)]=function(){const _0x392711=_0x500709;if(this['isSTB']())return _0x392711(0x19a);return VisuMZ[_0x392711(0x1e1)][_0x392711(0x13d)][_0x392711(0x23c)](this);},BattleManager[_0x500709(0xcb)]=function(){return $gameSystem['getBattleSystem']()==='STB';},VisuMZ['BattleSystemSTB'][_0x500709(0x259)]=BattleManager[_0x500709(0x2a0)],BattleManager['isTpb']=function(){const _0x52745a=_0x500709;if(this[_0x52745a(0xcb)]())return![];return VisuMZ[_0x52745a(0x1e1)][_0x52745a(0x259)][_0x52745a(0x23c)](this);},VisuMZ[_0x500709(0x1e1)][_0x500709(0x243)]=BattleManager['isActiveTpb'],BattleManager[_0x500709(0x119)]=function(){const _0x3d1a0c=_0x500709;if(this[_0x3d1a0c(0xcb)]())return![];return VisuMZ[_0x3d1a0c(0x1e1)][_0x3d1a0c(0x243)][_0x3d1a0c(0x23c)](this);},VisuMZ['BattleSystemSTB'][_0x500709(0x125)]=BattleManager[_0x500709(0x218)],BattleManager[_0x500709(0x218)]=function(){const _0x54c4bf=_0x500709;if(this[_0x54c4bf(0xcb)]())return!![];return VisuMZ[_0x54c4bf(0x1e1)][_0x54c4bf(0x125)][_0x54c4bf(0x23c)](this);},VisuMZ[_0x500709(0x1e1)]['BattleManager_startInput']=BattleManager['startInput'],BattleManager[_0x500709(0xb3)]=function(){const _0x2b19db=_0x500709;VisuMZ[_0x2b19db(0x1e1)][_0x2b19db(0x1f1)][_0x2b19db(0x23c)](this);if(this['isSTB']()&&$gameParty[_0x2b19db(0xc5)]()&&!this[_0x2b19db(0xaf)])this[_0x2b19db(0x151)]();},BattleManager[_0x500709(0x151)]=function(){this['startTurn']();},VisuMZ[_0x500709(0x1e1)][_0x500709(0x176)]=BattleManager[_0x500709(0x18d)],BattleManager[_0x500709(0x18d)]=function(){const _0x26f7c1=_0x500709;this[_0x26f7c1(0xcb)]()?_0x26f7c1(0x28a)===_0x26f7c1(0x28a)?this[_0x26f7c1(0x20a)]():this[_0x26f7c1(0x14c)]=this[_0x26f7c1(0x1f9)]():VisuMZ[_0x26f7c1(0x1e1)]['BattleManager_processTurn'][_0x26f7c1(0x23c)](this);},BattleManager[_0x500709(0x20a)]=function(){const _0x338147=_0x500709,_0x1ca161=this[_0x338147(0x101)];if(_0x1ca161[_0x338147(0x29d)]()&&_0x1ca161[_0x338147(0xc5)]()){if(_0x338147(0x1d0)!==_0x338147(0x1ae)){const _0x5a579f=_0x1ca161[_0x338147(0x2a1)]();if(!_0x5a579f)VisuMZ[_0x338147(0x1e1)]['BattleManager_processTurn'][_0x338147(0x23c)](this);else _0x5a579f[_0x338147(0x209)]?VisuMZ['BattleSystemSTB'][_0x338147(0x176)]['call'](this):(this[_0x338147(0x127)]=_0x1ca161,this[_0x338147(0x22c)]());}else return _0x4f753f['status']&&_0x5a4582['description'][_0x338147(0x254)]('['+_0x543cdd+']');}else VisuMZ['BattleSystemSTB'][_0x338147(0x176)]['call'](this);},VisuMZ[_0x500709(0x1e1)][_0x500709(0x115)]=BattleManager[_0x500709(0x27b)],BattleManager[_0x500709(0x27b)]=function(){const _0x58581e=_0x500709;if(this[_0x58581e(0xcb)]())_0x58581e(0x16b)!==_0x58581e(0x116)?VisuMZ['BattleSystemSTB'][_0x58581e(0x176)][_0x58581e(0x23c)](this):(this['x']=this[_0x58581e(0x126)],this['y']=this[_0x58581e(0xc7)]);else{if(_0x58581e(0xd3)===_0x58581e(0xd3))VisuMZ[_0x58581e(0x1e1)][_0x58581e(0x115)][_0x58581e(0x23c)](this);else{const _0x412621=_0x588c56[_0x58581e(0x1d3)],_0x10ef29=this[_0x58581e(0x14f)]()?_0x412621[_0x58581e(0xca)]:_0x412621[_0x58581e(0x102)];return _0x10ef29+0x1;}}},VisuMZ['BattleSystemSTB'][_0x500709(0x226)]=BattleManager['selectNextActor'],BattleManager[_0x500709(0x20c)]=function(){const _0x5ac118=_0x500709;this[_0x5ac118(0xcb)]()?this['selectNextActorSTB']():VisuMZ[_0x5ac118(0x1e1)][_0x5ac118(0x226)]['call'](this);},BattleManager['selectNextActorSTB']=function(){const _0x3d4d4f=_0x500709;this[_0x3d4d4f(0x127)]=null,this[_0x3d4d4f(0x133)]=![];},VisuMZ[_0x500709(0x1e1)][_0x500709(0xd1)]=BattleManager[_0x500709(0x217)],BattleManager['endAction']=function(){const _0x17aaba=_0x500709;VisuMZ['BattleSystemSTB'][_0x17aaba(0xd1)][_0x17aaba(0x23c)](this),this[_0x17aaba(0xe1)]();},BattleManager[_0x500709(0xe1)]=function(){const _0x5993bd=_0x500709;if(!this[_0x5993bd(0xcb)]())return;this['removeActionBattlersSTB']();this[_0x5993bd(0xc0)][_0x5993bd(0x22d)]>0x0&&(this[_0x5993bd(0x101)]&&(!this[_0x5993bd(0x297)][_0x5993bd(0x254)](this[_0x5993bd(0x101)])&&this[_0x5993bd(0x297)][_0x5993bd(0x211)](this[_0x5993bd(0x101)])),this[_0x5993bd(0x101)]=this[_0x5993bd(0x23e)]());;},BattleManager[_0x500709(0x26a)]=function(){const _0x130662=_0x500709;return VisuMZ[_0x130662(0x1e1)][_0x130662(0x1d3)][_0x130662(0x1fa)][_0x130662(0x1f5)];},BattleManager[_0x500709(0x1b7)]=function(){const _0xe8d907=_0x500709,_0x4c07d2=$gameParty['aliveMembers']()[_0xe8d907(0x123)](_0x56524b=>_0x56524b['isAppeared']()),_0x27b5af=_0x4c07d2[_0xe8d907(0x123)](_0x49de0a=>_0x49de0a[_0xe8d907(0x26d)]());return _0x4c07d2[_0xe8d907(0x22d)]===_0x27b5af[_0xe8d907(0x22d)];},BattleManager[_0x500709(0x1f2)]=function(){const _0x254668=_0x500709,_0x38be0b=$gameTroop['aliveMembers']()[_0x254668(0x123)](_0x421740=>_0x421740[_0x254668(0x16e)]()),_0x4d82b3=_0x38be0b[_0x254668(0x123)](_0x1d22c2=>_0x1d22c2[_0x254668(0x26d)]());return _0x38be0b['length']===_0x4d82b3[_0x254668(0x22d)];},VisuMZ[_0x500709(0x1e1)]['BattleManager_makeActionOrders']=BattleManager[_0x500709(0x14b)],BattleManager[_0x500709(0x14b)]=function(){const _0x59a00f=_0x500709;VisuMZ['BattleSystemSTB'][_0x59a00f(0x1a0)][_0x59a00f(0x23c)](this),this[_0x59a00f(0xcb)]()&&(this['removeActionBattlersSTB'](),this['updateTurnOrderSTB'](),this[_0x59a00f(0x186)]());},BattleManager[_0x500709(0x118)]=function(){const _0x28e233=_0x500709;if(!this[_0x28e233(0xcb)]())return;this[_0x28e233(0x297)]=this[_0x28e233(0x297)]||[],this['_actionBattlers']=this['_actionBattlers']['filter'](_0xa679b2=>_0xa679b2&&_0xa679b2['isAppeared']()&&_0xa679b2[_0x28e233(0xc8)]()),this['updateTurnOrderSTB']();},BattleManager[_0x500709(0xac)]=function(_0x33a05d){const _0x65ebc4=_0x500709;if(!this[_0x65ebc4(0xcb)]())return;const _0x2d3433=SceneManager[_0x65ebc4(0x12b)][_0x65ebc4(0xcf)];if(!_0x2d3433)return;_0x2d3433['updateTurnOrder'](_0x33a05d);},BattleManager['clearNextTurnSpeedSTB']=function(){const _0x1b7842=_0x500709;for(const _0x373099 of this[_0x1b7842(0xb5)]()){if(_0x1b7842(0x27a)!==_0x1b7842(0x27a))return this[_0x1b7842(0x1ad)]();else{if(!_0x373099)continue;_0x373099[_0x1b7842(0x282)](0x0);}}},VisuMZ[_0x500709(0x1e1)]['Game_System_initialize']=Game_System[_0x500709(0x11f)][_0x500709(0x1f4)],Game_System[_0x500709(0x11f)]['initialize']=function(){const _0x126656=_0x500709;VisuMZ[_0x126656(0x1e1)][_0x126656(0xd6)][_0x126656(0x23c)](this),this['initBattleSystemSTB']();},Game_System[_0x500709(0x11f)][_0x500709(0x180)]=function(){const _0xa2061f=_0x500709;this[_0xa2061f(0x21a)]=!![];},Game_System[_0x500709(0x11f)][_0x500709(0x11e)]=function(){const _0x249160=_0x500709;return this[_0x249160(0x21a)]===undefined&&this['initBattleSystemSTB'](),this[_0x249160(0x21a)];},Game_System[_0x500709(0x11f)][_0x500709(0x183)]=function(_0x289b00){const _0x5a0f27=_0x500709;this[_0x5a0f27(0x21a)]===undefined&&this[_0x5a0f27(0x180)](),this['_stbTurnOrderVisible']=_0x289b00;},VisuMZ[_0x500709(0x1e1)][_0x500709(0xbd)]=Game_Action['prototype'][_0x500709(0x155)],Game_Action[_0x500709(0x11f)][_0x500709(0x155)]=function(){const _0x3bdfec=_0x500709;if(BattleManager[_0x3bdfec(0xcb)]())return 0x0;else{if('tQnuH'!=='tQnuH')this[_0x3bdfec(0x16f)](0xff);else return VisuMZ[_0x3bdfec(0x1e1)]['Game_Action_speed'][_0x3bdfec(0x23c)](this);}},VisuMZ['BattleSystemSTB'][_0x500709(0xf9)]=Game_Action[_0x500709(0x11f)]['applyGlobal'],Game_Action['prototype']['applyGlobal']=function(){const _0xc89d05=_0x500709;VisuMZ[_0xc89d05(0x1e1)][_0xc89d05(0xf9)][_0xc89d05(0x23c)](this),this[_0xc89d05(0xfe)]();},Game_Action[_0x500709(0x11f)][_0x500709(0xfe)]=function(){const _0x40f4f1=_0x500709;if(!SceneManager[_0x40f4f1(0x1fc)]())return;if(!BattleManager[_0x40f4f1(0xcb)]())return;const _0x5a7cea=this['item'](),_0x1ae94e=VisuMZ['BattleSystemSTB']['RegExp'],_0x3318bb=VisuMZ[_0x40f4f1(0x1e1)]['Settings'][_0x40f4f1(0xc1)];_0x5a7cea&&_0x5a7cea[_0x40f4f1(0x23d)]['match'](_0x1ae94e[_0x40f4f1(0x1bf)])&&('HQiCG'!==_0x40f4f1(0x269)?this[_0x40f4f1(0x1d1)]()[_0x40f4f1(0x203)](0x1):(_0xfb157a[_0x40f4f1(0x1e1)][_0x40f4f1(0x191)]['call'](this),_0x4d6cf6['removeActionBattlersSTB']()));const _0x5ae945=_0x3318bb[_0x40f4f1(0x10f)]['call'](this);this['subject']()['addSTBNextTurnSpeed'](_0x5ae945);},VisuMZ[_0x500709(0x1e1)]['Game_Action_clear']=Game_Action[_0x500709(0x11f)][_0x500709(0x1ca)],Game_Action[_0x500709(0x11f)][_0x500709(0x1ca)]=function(){const _0x4933dc=_0x500709;VisuMZ['BattleSystemSTB'][_0x4933dc(0x207)]['call'](this),this[_0x4933dc(0x185)]();},Game_Action[_0x500709(0x11f)][_0x500709(0x185)]=function(){const _0x21b9a4=_0x500709;this[_0x21b9a4(0x261)]=![];},Game_Action[_0x500709(0x11f)][_0x500709(0x258)]=function(){const _0xe080f3=_0x500709;return this['_stbExploitAdvantageFlag']===undefined&&(_0xe080f3(0x1cd)===_0xe080f3(0x13f)?_0x5cc327[_0xe080f3(0x1e1)]['Window_Help_setItem']['call'](this,_0x230886):this[_0xe080f3(0x185)]()),this[_0xe080f3(0x261)];},Game_Action['prototype'][_0x500709(0x1e6)]=function(_0x2362be){const _0x40159d=_0x500709;this[_0x40159d(0x261)]===undefined&&(_0x40159d(0x24e)!=='qwsPl'?_0x5895b3[_0x40159d(0x1e1)][_0x40159d(0x176)][_0x40159d(0x23c)](this):this[_0x40159d(0x185)]()),this[_0x40159d(0x261)]=_0x2362be;},VisuMZ[_0x500709(0x1e1)][_0x500709(0x262)]=Game_Action[_0x500709(0x11f)][_0x500709(0x1ec)],Game_Action[_0x500709(0x11f)][_0x500709(0x1ec)]=function(_0xf9fdab,_0x64ebfa){const _0x270d8b=_0x500709;VisuMZ[_0x270d8b(0x1e1)][_0x270d8b(0x262)][_0x270d8b(0x23c)](this,_0xf9fdab,_0x64ebfa),this[_0x270d8b(0x137)](_0xf9fdab);},Game_Action[_0x500709(0x11f)][_0x500709(0x137)]=function(_0x304f3c){const _0x57b278=_0x500709;if(!SceneManager['isSceneBattle']())return;if(!BattleManager['isSTB']())return;if(!BattleManager['isSTBExploitSystemEnabled']())return;if(_0x304f3c[_0x57b278(0x19b)]()===this['subject']()['friendsUnit']())return;const _0xbde388=VisuMZ[_0x57b278(0x1e1)][_0x57b278(0x1d3)][_0x57b278(0x1fa)],_0x2c7869=_0x304f3c[_0x57b278(0x170)]();_0xbde388[_0x57b278(0x1a8)]&&_0x2c7869[_0x57b278(0x163)]&&(_0x57b278(0x17a)===_0x57b278(0x17a)?(this[_0x57b278(0x1d1)]()['performSTBExploiter'](_0x304f3c,this),_0x304f3c[_0x57b278(0x154)](this[_0x57b278(0x1d1)](),this)):_0x352f5e[_0x57b278(0xfb)](_0x2fa137));if(_0xbde388[_0x57b278(0x147)]){if(_0x57b278(0xd0)===_0x57b278(0xfc))this[_0x57b278(0x1d1)]()[_0x57b278(0x29c)](_0x2c71c9,this),_0x44ba4a[_0x57b278(0x154)](this['subject'](),this);else{const _0x1af297=this[_0x57b278(0x286)](_0x304f3c);_0x1af297>=_0xbde388['ExploitEleRate']&&(this['subject']()[_0x57b278(0x29c)](_0x304f3c,this),_0x304f3c[_0x57b278(0x154)](this[_0x57b278(0x1d1)](),this));}}},VisuMZ[_0x500709(0x1e1)][_0x500709(0x277)]=Game_BattlerBase[_0x500709(0x11f)][_0x500709(0x152)],Game_BattlerBase[_0x500709(0x11f)][_0x500709(0x152)]=function(){const _0x3a7b26=_0x500709;VisuMZ[_0x3a7b26(0x1e1)]['Game_BattlerBase_initMembers'][_0x3a7b26(0x23c)](this),this[_0x3a7b26(0x25b)]();},Game_BattlerBase['prototype'][_0x500709(0x25b)]=function(){const _0x59c83a=_0x500709;this[_0x59c83a(0xba)](),this['clearSTBExploit']();},Game_BattlerBase[_0x500709(0x11f)][_0x500709(0xba)]=function(){this['_stbNextTurnSpeed']=0x0;},Game_BattlerBase['prototype'][_0x500709(0x285)]=function(){const _0x4e0b7a=_0x500709;return this[_0x4e0b7a(0x1af)]===undefined&&this['initMembersBattleSystemSTB'](),this[_0x4e0b7a(0x1af)];},Game_BattlerBase[_0x500709(0x11f)][_0x500709(0x282)]=function(_0x1c7af5){const _0x422aa4=_0x500709;this[_0x422aa4(0x1af)]===undefined&&this[_0x422aa4(0x25b)](),this[_0x422aa4(0x1af)]=_0x1c7af5;},Game_BattlerBase['prototype'][_0x500709(0x112)]=function(_0x3d4350){const _0x116e31=_0x500709;this[_0x116e31(0x1af)]===undefined&&this[_0x116e31(0x25b)](),_0x3d4350+=this[_0x116e31(0x285)](),this['setSTBNextTurnSpeed'](_0x3d4350);},Game_BattlerBase[_0x500709(0x11f)][_0x500709(0x1b5)]=function(){this['_stbExploited']=![];},Game_BattlerBase[_0x500709(0x11f)][_0x500709(0x26d)]=function(){const _0x394e5e=_0x500709;return this[_0x394e5e(0x1d7)]===undefined&&this[_0x394e5e(0x25b)](),this[_0x394e5e(0x1d7)];},Game_BattlerBase[_0x500709(0x11f)][_0x500709(0x149)]=function(_0x31ed4d){const _0x1ab0f5=_0x500709;this[_0x1ab0f5(0x1d7)]===undefined&&this['initMembersBattleSystemSTB'](),this[_0x1ab0f5(0x1d7)]=_0x31ed4d;},Game_BattlerBase['prototype']['stbCannotBeExploited']=function(){const _0x19390e=_0x500709,_0x4c9154=VisuMZ[_0x19390e(0x1e1)][_0x19390e(0x222)][_0x19390e(0x210)];return this['traitObjects']()['some'](_0xb70670=>_0xb70670[_0x19390e(0x23d)]['match'](_0x4c9154));},Game_BattlerBase['prototype'][_0x500709(0x1b1)]=function(){const _0x18ba4c=_0x500709,_0x4e8254=VisuMZ['BattleSystemSTB'][_0x18ba4c(0x222)]['CannotBeExploiter'];return this[_0x18ba4c(0xe2)]()['some'](_0x1fe792=>_0x1fe792[_0x18ba4c(0x23d)]['match'](_0x4e8254));},Game_BattlerBase[_0x500709(0x11f)][_0x500709(0xe9)]=function(){delete this['_stbTurnOrderGraphicType'],delete this['_stbTurnOrderFaceName'],delete this['_stbTurnOrderFaceIndex'],delete this['_stbTurnOrderIconIndex'];},Game_BattlerBase[_0x500709(0x11f)][_0x500709(0x1d5)]=function(){const _0x55e72d=_0x500709;if(this[_0x55e72d(0x13c)]===undefined){if(_0x55e72d(0x1a7)!==_0x55e72d(0x1a7))return this[_0x55e72d(0x1af)]===_0x56e8f6&&this[_0x55e72d(0x25b)](),this['_stbNextTurnSpeed'];else this[_0x55e72d(0x13c)]=this[_0x55e72d(0x114)]();}return this[_0x55e72d(0x13c)];},Game_BattlerBase[_0x500709(0x11f)][_0x500709(0x114)]=function(){return Window_STB_TurnOrder['Settings']['EnemyBattlerType'];},Game_BattlerBase[_0x500709(0x11f)][_0x500709(0x10a)]=function(){const _0x56ba9d=_0x500709;if(this['_stbTurnOrderFaceName']===undefined){if(_0x56ba9d(0xda)!==_0x56ba9d(0xda))return this[_0x56ba9d(0x14c)]===_0x1cb949&&(this[_0x56ba9d(0x14c)]=this['createTurnOrderSTBGraphicIconIndex']()),this[_0x56ba9d(0x14c)];else this[_0x56ba9d(0x275)]=this[_0x56ba9d(0x20d)]();}return this[_0x56ba9d(0x275)];},Game_BattlerBase['prototype']['createTurnOrderSTBGraphicFaceName']=function(){const _0x409f9f=_0x500709;return Window_STB_TurnOrder[_0x409f9f(0x1d3)][_0x409f9f(0x10d)];},Game_BattlerBase[_0x500709(0x11f)]['TurnOrderSTBGraphicFaceIndex']=function(){const _0x37e033=_0x500709;return this[_0x37e033(0x14e)]===undefined&&(_0x37e033(0x158)!==_0x37e033(0x25c)?this['_stbTurnOrderFaceIndex']=this[_0x37e033(0x24d)]():(this['_graphicEnemy']=_0x14e3c8[_0x37e033(0x263)](),_0xb43ef=_0x4217a[_0x37e033(0x1ab)](this[_0x37e033(0x234)]),_0x2ae1ab[_0x37e033(0x16d)](this['changeEnemyGraphicBitmap'][_0x37e033(0x21c)](this,_0x44a668)))),this[_0x37e033(0x14e)];},Game_BattlerBase[_0x500709(0x11f)][_0x500709(0x24d)]=function(){const _0x4e896c=_0x500709;return Window_STB_TurnOrder['Settings'][_0x4e896c(0x278)];},Game_BattlerBase[_0x500709(0x11f)]['TurnOrderSTBGraphicIconIndex']=function(){const _0x44d4ac=_0x500709;return this['_stbTurnOrderIconIndex']===undefined&&(this[_0x44d4ac(0x14c)]=this['createTurnOrderSTBGraphicIconIndex']()),this[_0x44d4ac(0x14c)];},Game_BattlerBase[_0x500709(0x11f)][_0x500709(0x1f9)]=function(){const _0x435d0a=_0x500709;return Window_STB_TurnOrder[_0x435d0a(0x1d3)]['EnemyBattlerIcon'];},Game_BattlerBase[_0x500709(0x11f)]['setSTBGraphicIconIndex']=function(_0x449831){const _0x4943bd=_0x500709;this[_0x4943bd(0x14c)]=_0x449831;},VisuMZ[_0x500709(0x1e1)]['Game_BattlerBase_hide']=Game_BattlerBase[_0x500709(0x11f)][_0x500709(0x1b8)],Game_BattlerBase['prototype']['hide']=function(){const _0x9d0c86=_0x500709;VisuMZ[_0x9d0c86(0x1e1)][_0x9d0c86(0x18b)][_0x9d0c86(0x23c)](this),BattleManager['removeActionBattlersSTB']();},VisuMZ['BattleSystemSTB'][_0x500709(0x1e5)]=Game_BattlerBase[_0x500709(0x11f)][_0x500709(0x11d)],Game_BattlerBase[_0x500709(0x11f)][_0x500709(0x11d)]=function(){const _0x18fb7e=_0x500709;VisuMZ[_0x18fb7e(0x1e1)][_0x18fb7e(0x1e5)][_0x18fb7e(0x23c)](this),BattleManager[_0x18fb7e(0x118)]();},VisuMZ[_0x500709(0x1e1)]['Game_Battler_performCollapse']=Game_Battler[_0x500709(0x11f)]['performCollapse'],Game_Battler[_0x500709(0x11f)]['performCollapse']=function(){const _0x45f758=_0x500709;VisuMZ[_0x45f758(0x1e1)][_0x45f758(0x191)][_0x45f758(0x23c)](this),BattleManager[_0x45f758(0x118)]();},VisuMZ[_0x500709(0x1e1)]['Game_Battler_onBattleStart']=Game_Battler['prototype']['onBattleStart'],Game_Battler[_0x500709(0x11f)][_0x500709(0x23b)]=function(_0x199438){const _0x59ca6d=_0x500709;VisuMZ[_0x59ca6d(0x1e1)][_0x59ca6d(0x13b)][_0x59ca6d(0x23c)](this,_0x199438),this['onBattleStartSTB'](_0x199438);},Game_Battler[_0x500709(0x11f)][_0x500709(0x135)]=function(_0x4d577e){const _0x24099e=_0x500709;if(!BattleManager[_0x24099e(0xcb)]())return;this[_0x24099e(0x1b5)]();const _0x22fa94=new Game_Action(this);this[_0x24099e(0x282)](0x0);},VisuMZ[_0x500709(0x1e1)]['Game_Battler_onTurnEnd']=Game_Battler[_0x500709(0x11f)][_0x500709(0xff)],Game_Battler[_0x500709(0x11f)][_0x500709(0xff)]=function(){const _0x591837=_0x500709;VisuMZ[_0x591837(0x1e1)][_0x591837(0x1fb)]['call'](this),BattleManager['isSTB']()&&VisuMZ[_0x591837(0x1e1)]['Settings'][_0x591837(0x1fa)][_0x591837(0x12d)]&&this[_0x591837(0x1b5)]();},VisuMZ[_0x500709(0x1e1)][_0x500709(0x19c)]=Game_Battler['prototype'][_0x500709(0x219)],Game_Battler[_0x500709(0x11f)][_0x500709(0x219)]=function(){const _0x1371c8=_0x500709;VisuMZ[_0x1371c8(0x1e1)][_0x1371c8(0x19c)][_0x1371c8(0x23c)](this);if(BattleManager[_0x1371c8(0xcb)]()){if('tWXLV'===_0x1371c8(0x106))this[_0x1371c8(0xaa)]();else{const _0x887189=_0x132e3c[_0x1371c8(0x1d3)],_0x3232d0=this[_0x1371c8(0xb6)](),_0x232d9e=this['bitmapHeight'](),_0x479018=_0x3ec872[_0x1371c8(0x188)](_0x3232d0,_0x232d9e);this['_graphicSprite'][_0x1371c8(0x252)]=new _0x5d8666(_0x3232d0,_0x232d9e);const _0xcf74cd=this['_graphicSprite'][_0x1371c8(0x252)],_0x42e6b0=_0x1c7b42[_0x1371c8(0x188)](0x1,_0x479018/_0x5bcaba[_0x1371c8(0xed)],_0x479018/_0x43bdb2[_0x1371c8(0x198)]),_0x18b134=_0x3c7745[_0x1371c8(0xed)]*_0x42e6b0,_0x49a9b4=_0x2cd021[_0x1371c8(0x198)]*_0x42e6b0,_0x533331=_0x12de43[_0x1371c8(0x276)]((_0x3232d0-_0x18b134)/0x2),_0xc665a9=_0x168c83[_0x1371c8(0x276)]((_0x232d9e-_0x49a9b4)/0x2);_0xcf74cd[_0x1371c8(0x1db)](_0x205e19,0x0,0x0,_0x4e3d0a[_0x1371c8(0xed)],_0xb034ef[_0x1371c8(0x198)],_0x533331,_0xc665a9,_0x18b134,_0x49a9b4);}}},Game_Battler[_0x500709(0x11f)][_0x500709(0xaa)]=function(){const _0x2484d2=_0x500709;if(this[_0x2484d2(0xf1)]()>0x0&&this===BattleManager[_0x2484d2(0x101)]){const _0x6c6a8a=BattleManager[_0x2484d2(0xc0)];if(_0x6c6a8a[_0x2484d2(0x22d)]>0x0&&_0x6c6a8a[0x0]!==this){if(_0x2484d2(0x1e9)===_0x2484d2(0x110))return this[_0x2484d2(0x14e)]===_0x29137b&&(this[_0x2484d2(0x14e)]=this[_0x2484d2(0x24d)]()),this[_0x2484d2(0x14e)];else return;}const _0x1dea85=this[_0x2484d2(0x177)]();if(_0x1dea85)_0x1dea85['stepForward']();}},Game_Battler[_0x500709(0x11f)]['allowRandomSpeed']=function(){const _0x20e6de=_0x500709;return VisuMZ['BattleCore'][_0x20e6de(0x1d3)]['Mechanics'][_0x20e6de(0x206)];},VisuMZ[_0x500709(0x1e1)][_0x500709(0x10c)]=Game_Battler['prototype'][_0x500709(0xf7)],Game_Battler['prototype'][_0x500709(0xf7)]=function(){const _0x271af6=_0x500709;BattleManager[_0x271af6(0xcb)]()?this['makeSTBSpeed']():VisuMZ['BattleSystemSTB'][_0x271af6(0x10c)][_0x271af6(0x23c)](this);},Game_Battler['prototype'][_0x500709(0xfd)]=function(){const _0x3bd667=_0x500709;this[_0x3bd667(0x168)]=VisuMZ[_0x3bd667(0x1e1)][_0x3bd667(0x1d3)][_0x3bd667(0xc1)][_0x3bd667(0x190)]['call'](this);},Game_Battler['prototype'][_0x500709(0x17f)]=function(){const _0x665a47=_0x500709,_0x2f36e5=this[_0x665a47(0x29d)]()?this[_0x665a47(0x124)]()[_0x665a47(0x23d)]:this['enemy']()[_0x665a47(0x23d)];if(_0x2f36e5['match'](VisuMZ[_0x665a47(0x1e1)][_0x665a47(0x222)][_0x665a47(0x22b)]))return VisuMZ[_0x665a47(0x1e1)][_0x665a47(0x161)](RegExp['$1']);return VisuMZ[_0x665a47(0x1e1)]['Settings']['Exploited'][_0x665a47(0xdc)]||[];},Game_Battler[_0x500709(0x11f)][_0x500709(0x1ff)]=function(){const _0x4faad7=_0x500709,_0x17ccce=this[_0x4faad7(0x29d)]()?this['currentClass']()[_0x4faad7(0x23d)]:this[_0x4faad7(0x122)]()[_0x4faad7(0x23d)];if(_0x17ccce[_0x4faad7(0x26b)](VisuMZ['BattleSystemSTB']['RegExp'][_0x4faad7(0xe8)]))return VisuMZ[_0x4faad7(0x1e1)][_0x4faad7(0x161)](RegExp['$1']);return VisuMZ[_0x4faad7(0x1e1)][_0x4faad7(0x1d3)][_0x4faad7(0x108)][_0x4faad7(0xdc)]||[];},VisuMZ[_0x500709(0x1e1)]['ParseStateData']=function(_0x12bb9c){const _0x11525f=_0x500709,_0xbf2e99=_0x12bb9c[_0x11525f(0x11b)](','),_0x5eee87=[];for(let _0x4664a6 of _0xbf2e99){_0x4664a6=(String(_0x4664a6)||'')[_0x11525f(0x18a)]();const _0x5bf491=/^\d+$/[_0x11525f(0x142)](_0x4664a6);_0x5bf491?_0x5eee87[_0x11525f(0x228)](Number(_0x4664a6)):_0x5eee87[_0x11525f(0x228)](DataManager[_0x11525f(0x12c)](_0x4664a6));}return _0x5eee87;},Game_Battler[_0x500709(0x11f)][_0x500709(0x154)]=function(_0x5c62bc,_0x33bec3){const _0x27b225=_0x500709;if(!BattleManager[_0x27b225(0xcb)]())return;if(!BattleManager[_0x27b225(0x26a)]())return;if(this[_0x27b225(0x26d)]())return;const _0x3298b6=VisuMZ[_0x27b225(0x1e1)]['Settings'][_0x27b225(0x205)];!_0x3298b6[_0x27b225(0xbc)]&&this[_0x27b225(0x149)](!![]);if(this['stbCannotBeExploited']())return;if(this['hp']<=0x0)return;this[_0x27b225(0x179)](_0x3298b6);if(this['hp']>0x0||!this['isImmortal']())for(const _0x5dbe56 of this[_0x27b225(0x17f)]()){if(_0x27b225(0xd4)===_0x27b225(0x1a6))this['initialize'](...arguments);else{if(!$dataStates[_0x5dbe56])continue;this['addState'](_0x5dbe56);}}_0x3298b6[_0x27b225(0x1a5)]&&(_0x27b225(0x128)===_0x27b225(0x1ba)?_0x199a62[_0x27b225(0xcb)]()&&_0x565e79&&_0x1f03d1[_0x27b225(0x23d)]&&_0x1ef941[_0x27b225(0x23d)][_0x27b225(0x26b)](/<(?:STB) HELP>\s*([\s\S]*)\s*<\/(?:STB) HELP>/i)?this['setText'](_0xda9145(_0x1568a3['$1'])):_0x5ea830[_0x27b225(0x1e1)][_0x27b225(0x235)][_0x27b225(0x23c)](this,_0xf5dada):_0x3298b6['CustomJS']['call'](this,_0x5c62bc,_0x33bec3));if(this['isActor']()&&BattleManager[_0x27b225(0x1b7)]()){if(_0x27b225(0x12f)===_0x27b225(0x12f)){const _0x2919ab=_0x3298b6[_0x27b225(0x136)];_0x2919ab>0x0&&$dataCommonEvents[_0x2919ab]&&$gameTemp[_0x27b225(0xfb)](_0x2919ab);}else{if(this[_0x27b225(0xcb)]())return!![];return _0x4cfc1e[_0x27b225(0x1e1)][_0x27b225(0x125)][_0x27b225(0x23c)](this);}}else{if(this[_0x27b225(0xd7)]()&&BattleManager[_0x27b225(0x1f2)]()){if(_0x27b225(0x17e)===_0x27b225(0x193))return this[_0x27b225(0x1ad)]();else{const _0x41ccfc=_0x3298b6['vsEnemiesFullExploit'];if(_0x41ccfc>0x0&&$dataCommonEvents[_0x41ccfc]){if(_0x27b225(0xd2)!==_0x27b225(0x1d9))$gameTemp[_0x27b225(0xfb)](_0x41ccfc);else{this['_turnOrderInnerSprite']=new _0x495aa7(),this[_0x27b225(0x19f)](this['_turnOrderInnerSprite']),this['_turnOrderContainer']=[];for(let _0x44ca92=0x0;_0x44ca92<_0x2dbe3a['maxBattleMembers']();_0x44ca92++){const _0xda7238=new _0x207612(_0x3460c6,_0x44ca92);this[_0x27b225(0x272)]['addChild'](_0xda7238),this[_0x27b225(0x141)][_0x27b225(0x228)](_0xda7238);}for(let _0x6c378f=0x0;_0x6c378f<0x8;_0x6c378f++){const _0x5c27c6=new _0x12c497(_0x1dcd5a,_0x6c378f);this[_0x27b225(0x272)][_0x27b225(0x11c)](_0x5c27c6),this['_turnOrderContainer'][_0x27b225(0x228)](_0x5c27c6);}}}}}}},Game_Battler['prototype']['performSTBExploiter']=function(_0x283a97,_0x395fe4){const _0x517c6d=_0x500709;if(!BattleManager[_0x517c6d(0xcb)]())return;if(!BattleManager[_0x517c6d(0x26a)]())return;if(_0x395fe4['hasSTBExploited']())return;if(_0x283a97[_0x517c6d(0x26d)]())return;const _0x151871=VisuMZ[_0x517c6d(0x1e1)][_0x517c6d(0x1d3)]['Exploiter'];!_0x151871[_0x517c6d(0x14a)]&&_0x395fe4['setSTBExploitedFlag'](!![]);if(this['stbCannotBeExploiter']())return;this[_0x517c6d(0x179)](_0x151871);_0x151871['ExtraActions']>0x0&&this['stbGainInstant'](_0x151871['ExtraActions']);for(const _0x3871f1 of this[_0x517c6d(0x1ff)]()){if(_0x517c6d(0x1ea)!==_0x517c6d(0x113)){if(!$dataStates[_0x3871f1])continue;this[_0x517c6d(0x1f3)](_0x3871f1);}else _0x15b217[_0x517c6d(0x1e1)][_0x517c6d(0x226)][_0x517c6d(0x23c)](this);}_0x151871[_0x517c6d(0x1a5)]&&_0x151871['CustomJS']['call'](this,_0x283a97,_0x395fe4);},Game_Battler[_0x500709(0x11f)][_0x500709(0x179)]=function(_0x25aecf){const _0x1ba631=_0x500709;if(!_0x25aecf)return;if(_0x25aecf[_0x1ba631(0x1e4)]){const _0x3ce7b9=_0x25aecf[_0x1ba631(0x1e4)],_0x226caf=_0x25aecf[_0x1ba631(0x248)],_0x3602a8=_0x25aecf[_0x1ba631(0x216)];$gameTemp[_0x1ba631(0x27c)]([this],_0x3ce7b9,_0x226caf,_0x3602a8);}if(this[_0x1ba631(0x177)]()&&_0x25aecf[_0x1ba631(0x153)]['length']>0x0){const _0x7b4915=_0x25aecf['PopupText'],_0x250f15={'textColor':ColorManager['getColor'](_0x25aecf[_0x1ba631(0x249)]),'flashColor':_0x25aecf[_0x1ba631(0x15d)],'flashDuration':_0x25aecf[_0x1ba631(0x157)]};this[_0x1ba631(0x28e)](_0x7b4915,_0x250f15);}},Game_Battler[_0x500709(0x11f)][_0x500709(0x203)]=function(_0x1bd0c8){const _0x48d4de=_0x500709;this['_actions']=this[_0x48d4de(0xd8)]||[];if(this[_0x48d4de(0x200)]()){if(_0x48d4de(0x29e)===_0x48d4de(0x29e)){for(let _0x4535b6=0x0;_0x4535b6<_0x1bd0c8;_0x4535b6++){this[_0x48d4de(0xd8)]['push'](new Game_Action(this));}if(this[_0x48d4de(0xd7)]()){if(_0x48d4de(0x298)!=='rUqXO')this['_graphicType']=_0x48d4de(0x122);else{const _0x18e896=this[_0x48d4de(0x122)]()[_0x48d4de(0xcd)][_0x48d4de(0x123)](_0x4afadf=>this[_0x48d4de(0x1c5)](_0x4afadf));_0x18e896[_0x48d4de(0x22d)]>0x0&&this['selectAllActions'](_0x18e896);}}}else this['startTurn']();}},VisuMZ['BattleSystemSTB'][_0x500709(0x215)]=Game_Actor['prototype'][_0x500709(0x232)],Game_Actor[_0x500709(0x11f)][_0x500709(0x232)]=function(){const _0x1f9aee=_0x500709;if(BattleManager['isSTB']()){if(this[_0x1f9aee(0x177)]())this[_0x1f9aee(0x177)]()[_0x1f9aee(0x1d6)]();return![];}return VisuMZ[_0x1f9aee(0x1e1)][_0x1f9aee(0x215)][_0x1f9aee(0x23c)](this);},Game_Actor[_0x500709(0x11f)][_0x500709(0x114)]=function(){const _0x55ea53=_0x500709,_0x41636e=this[_0x55ea53(0x1e2)]()[_0x55ea53(0x23d)];if(_0x41636e[_0x55ea53(0x26b)](/<STB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i)){if(_0x55ea53(0x16c)===_0x55ea53(0x16c))return _0x55ea53(0x246);else this[_0x55ea53(0x194)](),this['createBackgroundSprite'](),this[_0x55ea53(0x1ef)](),this[_0x55ea53(0x1f7)](),this[_0x55ea53(0x164)]();}else{if(_0x41636e[_0x55ea53(0x26b)](/<STB TURN ORDER ICON:[ ](\d+)>/i))return _0x55ea53(0x12e);}return Window_STB_TurnOrder[_0x55ea53(0x1d3)][_0x55ea53(0x1c0)];},Game_Actor[_0x500709(0x11f)]['TurnOrderSTBGraphicFaceName']=function(){const _0x480f8f=_0x500709,_0x48a625=this['actor']()[_0x480f8f(0x23d)];if(_0x48a625[_0x480f8f(0x26b)](/<STB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i)){if(_0x480f8f(0x1b4)===_0x480f8f(0xf6)){if(!_0x588434[_0x480f8f(0xcb)]())return;this[_0x480f8f(0xcf)]=new _0x3680bd();const _0x453f75=this['getChildIndex'](this[_0x480f8f(0x148)]);this[_0x480f8f(0x283)](this[_0x480f8f(0xcf)],_0x453f75),this['repositionLogWindowSTB'](),_0x43708a[_0x480f8f(0xac)](!![]);}else return String(RegExp['$1']);}return this[_0x480f8f(0x17d)]();},Game_Actor['prototype'][_0x500709(0x2a2)]=function(){const _0x5d73aa=_0x500709,_0x358f83=this[_0x5d73aa(0x1e2)]()[_0x5d73aa(0x23d)];if(_0x358f83[_0x5d73aa(0x26b)](/<STB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return Number(RegExp['$2']);return this['faceIndex']();},Game_Actor[_0x500709(0x11f)][_0x500709(0x1f9)]=function(){const _0x56bdf7=_0x500709,_0xbf38ea=this[_0x56bdf7(0x1e2)]()[_0x56bdf7(0x23d)];if(_0xbf38ea['match'](/<STB TURN ORDER ICON:[ ](\d+)>/i))return Number(RegExp['$1']);return Window_STB_TurnOrder[_0x56bdf7(0x1d3)]['ActorBattlerIcon'];},Game_Enemy['prototype'][_0x500709(0x114)]=function(){const _0x354927=_0x500709,_0x5bb728=this['enemy']()[_0x354927(0x23d)];if(_0x5bb728[_0x354927(0x26b)](/<STB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i)){if(_0x354927(0x10b)===_0x354927(0x10b))return _0x354927(0x246);else{if(!_0x509410[_0x354927(0x1fc)]())return;if(!_0x2c1de3[_0x354927(0xcb)]())return;const _0x314442=this['item'](),_0xe1c3a=_0x458a8e['BattleSystemSTB'][_0x354927(0x222)],_0x5328aa=_0x13298a[_0x354927(0x1e1)]['Settings'][_0x354927(0xc1)];_0x314442&&_0x314442[_0x354927(0x23d)][_0x354927(0x26b)](_0xe1c3a['Instant'])&&this['subject']()[_0x354927(0x203)](0x1);const _0x14ee8f=_0x5328aa['NextTurnSavedSpeedJS'][_0x354927(0x23c)](this);this[_0x354927(0x1d1)]()[_0x354927(0x112)](_0x14ee8f);}}else{if(_0x5bb728[_0x354927(0x26b)](/<STB TURN ORDER ICON:[ ](\d+)>/i))return'icon';}return Window_STB_TurnOrder['Settings']['EnemyBattlerType'];},Game_Enemy[_0x500709(0x11f)]['createTurnOrderSTBGraphicFaceName']=function(){const _0x647409=_0x500709,_0xf6d126=this['enemy']()[_0x647409(0x23d)];if(_0xf6d126['match'](/<STB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return _0x647409(0x1aa)!=='NcPmr'?_0x50b1fa['y']-_0x4c4942['y']:String(RegExp['$1']);return Window_STB_TurnOrder['Settings']['EnemyBattlerFaceName'];},Game_Enemy[_0x500709(0x11f)][_0x500709(0x24d)]=function(){const _0x106cce=_0x500709,_0x25036f=this[_0x106cce(0x122)]()['note'];if(_0x25036f[_0x106cce(0x26b)](/<STB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i)){if(_0x106cce(0x104)!==_0x106cce(0x104))this[_0x106cce(0x14c)]=_0x5c1d2b;else return Number(RegExp['$2']);}return Window_STB_TurnOrder[_0x106cce(0x1d3)][_0x106cce(0x278)];},Game_Enemy[_0x500709(0x11f)]['createTurnOrderSTBGraphicIconIndex']=function(){const _0x5354c3=_0x500709,_0x515ffd=this[_0x5354c3(0x122)]()['note'];if(_0x515ffd[_0x5354c3(0x26b)](/<STB TURN ORDER ICON:[ ](\d+)>/i)){if(_0x5354c3(0x175)!==_0x5354c3(0x220))return Number(RegExp['$1']);else{if(!this['_letterSprite'])return;const _0x302b34=this[_0x5354c3(0x177)]();if(!_0x302b34)return;if(this[_0x5354c3(0x1a4)]===_0x302b34['_letter']&&this[_0x5354c3(0x1da)]===_0x302b34[_0x5354c3(0x1da)])return;this[_0x5354c3(0x1a4)]=_0x302b34[_0x5354c3(0x1a4)],this[_0x5354c3(0x1da)]=_0x302b34[_0x5354c3(0x1da)];const _0x4892ae=_0x1e3447[_0x5354c3(0x1d3)],_0x1acd8b=this['isHorz'](),_0x27c0df=this[_0x5354c3(0xb6)](),_0x3199d6=this[_0x5354c3(0x199)](),_0x15418b=this[_0x5354c3(0xe7)][_0x5354c3(0x252)];_0x15418b[_0x5354c3(0x1ca)]();if(!this[_0x5354c3(0x1da)])return;_0x15418b['fontFace']=_0x4892ae[_0x5354c3(0x134)]||_0x472d6a[_0x5354c3(0x120)](),_0x15418b[_0x5354c3(0x138)]=_0x4892ae[_0x5354c3(0x247)]||0x10,_0x1acd8b?_0x15418b[_0x5354c3(0x26f)](this[_0x5354c3(0x1a4)][_0x5354c3(0x18a)](),0x0,_0x3199d6/0x2,_0x27c0df,_0x3199d6/0x2,_0x5354c3(0x1f8)):_0x15418b[_0x5354c3(0x26f)](this[_0x5354c3(0x1a4)][_0x5354c3(0x18a)](),0x0,0x2,_0x27c0df-0x8,_0x3199d6-0x4,'right');}}return Window_STB_TurnOrder[_0x5354c3(0x1d3)][_0x5354c3(0x1cb)];},VisuMZ[_0x500709(0x1e1)][_0x500709(0x27f)]=Game_Party[_0x500709(0x11f)]['removeActor'],Game_Party[_0x500709(0x11f)][_0x500709(0x25f)]=function(_0x127257){const _0x561505=_0x500709;VisuMZ[_0x561505(0x1e1)][_0x561505(0x27f)][_0x561505(0x23c)](this,_0x127257),SceneManager[_0x561505(0x1fc)]()&&BattleManager['isSTB']()&&BattleManager[_0x561505(0x297)][_0x561505(0xdd)]($gameActors['actor'](_0x127257));},VisuMZ[_0x500709(0x1e1)][_0x500709(0x1a9)]=Scene_Battle[_0x500709(0x11f)][_0x500709(0x24c)],Scene_Battle[_0x500709(0x11f)][_0x500709(0x24c)]=function(){const _0x4fa247=_0x500709;VisuMZ['BattleSystemSTB'][_0x4fa247(0x1a9)][_0x4fa247(0x23c)](this),BattleManager[_0x4fa247(0xcb)]()&&this['createActorCommandWindowSTB']();},Scene_Battle[_0x500709(0x11f)][_0x500709(0x284)]=function(){const _0xafccad=_0x500709,_0x21e299=this[_0xafccad(0x255)];this['isPartyCommandWindowDisabled']()&&delete _0x21e299[_0xafccad(0x27d)][_0xafccad(0x22f)];},VisuMZ['BattleSystemSTB']['Scene_Battle_commandCancel']=Scene_Battle[_0x500709(0x11f)][_0x500709(0x1c6)],Scene_Battle['prototype'][_0x500709(0x1c6)]=function(){const _0x25e565=_0x500709;if(BattleManager[_0x25e565(0xcb)]()){if(_0x25e565(0x250)!==_0x25e565(0xdb))this[_0x25e565(0x1e3)]();else{let _0x3990a4=this[_0x25e565(0xb6)](),_0x4e99c1=this['bitmapHeight'](),_0x5d040a=_0x3642af[_0x25e565(0xad)];_0x12e90e[_0x25e565(0x252)]=new _0x3c2820(_0x3990a4,_0x4e99c1);const _0x304f60=_0x25e565(0xe4),_0x48f9d6=_0x3b0a80['getColor'](_0x5d453d[_0x25e565(0x29a)[_0x25e565(0x1c4)](_0x43aff)]);_0x5520e2[_0x25e565(0x252)][_0x25e565(0x162)](0x0,0x0,_0x3990a4,_0x4e99c1,_0x304f60),_0x3990a4-=0x2,_0x4e99c1-=0x2,_0x143354[_0x25e565(0x252)][_0x25e565(0x162)](0x1,0x1,_0x3990a4,_0x4e99c1,_0x48f9d6),_0x3990a4-=_0x5d040a*0x2,_0x4e99c1-=_0x5d040a*0x2,_0x525850['bitmap'][_0x25e565(0x162)](0x1+_0x5d040a,0x1+_0x5d040a,_0x3990a4,_0x4e99c1,_0x304f60),_0x3990a4-=0x2,_0x4e99c1-=0x2,_0x5d040a+=0x1,_0x122110[_0x25e565(0x252)][_0x25e565(0x1d8)](0x1+_0x5d040a,0x1+_0x5d040a,_0x3990a4,_0x4e99c1);}}else VisuMZ[_0x25e565(0x1e1)][_0x25e565(0xae)][_0x25e565(0x23c)](this);},Scene_Battle[_0x500709(0x11f)]['commandCancelSTB']=function(){const _0x1fd436=_0x500709;this['_partyCommandWindow'][_0x1fd436(0x280)](),this['_actorCommandWindow'][_0x1fd436(0x189)]();},VisuMZ[_0x500709(0x1e1)]['Scene_Battle_commandFight']=Scene_Battle[_0x500709(0x11f)][_0x500709(0x195)],Scene_Battle[_0x500709(0x11f)][_0x500709(0x195)]=function(){const _0x5606ef=_0x500709;BattleManager[_0x5606ef(0xcb)]()?this['startActorCommandSelection']():VisuMZ[_0x5606ef(0x1e1)][_0x5606ef(0x178)][_0x5606ef(0x23c)](this);},VisuMZ[_0x500709(0x1e1)][_0x500709(0x23f)]=Scene_Battle[_0x500709(0x11f)][_0x500709(0x21f)],Scene_Battle[_0x500709(0x11f)][_0x500709(0x21f)]=function(){const _0x486a4c=_0x500709;VisuMZ['BattleSystemSTB']['Scene_Battle_createAllWindows'][_0x486a4c(0x23c)](this),this[_0x486a4c(0x11a)]();},Scene_Battle['prototype']['createSTBTurnOrderWindow']=function(){const _0x5a96dc=_0x500709;if(!BattleManager[_0x5a96dc(0xcb)]())return;this[_0x5a96dc(0xcf)]=new Window_STB_TurnOrder();const _0x35c4d6=this[_0x5a96dc(0x1dc)](this[_0x5a96dc(0x148)]);this['addChildAt'](this[_0x5a96dc(0xcf)],_0x35c4d6),this[_0x5a96dc(0x29b)](),BattleManager[_0x5a96dc(0xac)](!![]);},Scene_Battle[_0x500709(0x11f)][_0x500709(0x29b)]=function(){const _0xf05e8d=_0x500709,_0x261044=Window_STB_TurnOrder[_0xf05e8d(0x1d3)];if(_0x261044[_0xf05e8d(0x15c)]!==_0xf05e8d(0x1c9))return;if(!_0x261044[_0xf05e8d(0xcc)])return;if(!this[_0xf05e8d(0xb0)])return;const _0x5c8984=this[_0xf05e8d(0xcf)]['y']-Math[_0xf05e8d(0x276)]((Graphics[_0xf05e8d(0x198)]-Graphics[_0xf05e8d(0x18c)])/0x2),_0x64a2df=_0x5c8984+this[_0xf05e8d(0xcf)]['height'];this[_0xf05e8d(0xb0)]['y']=_0x64a2df+_0x261044['ScreenBuffer'];};function Sprite_STB_TurnOrder_Battler(){const _0x460405=_0x500709;this[_0x460405(0x1f4)](...arguments);}Sprite_STB_TurnOrder_Battler['prototype']=Object[_0x500709(0x267)](Sprite_Clickable[_0x500709(0x11f)]),Sprite_STB_TurnOrder_Battler[_0x500709(0x11f)]['constructor']=Sprite_STB_TurnOrder_Battler,Sprite_STB_TurnOrder_Battler[_0x500709(0x11f)][_0x500709(0x1f4)]=function(_0x153413,_0x42893d){const _0x59cf8d=_0x500709;this[_0x59cf8d(0x152)](_0x153413,_0x42893d),Sprite_Clickable[_0x59cf8d(0x11f)]['initialize']['call'](this),this[_0x59cf8d(0xb4)]=0x0,this['createChildren'](),this[_0x59cf8d(0xea)]();},Sprite_STB_TurnOrder_Battler[_0x500709(0x11f)][_0x500709(0x152)]=function(_0x9e6d3b,_0x5db4c3){const _0x4d59fb=_0x500709;this[_0x4d59fb(0x172)]=_0x9e6d3b,this[_0x4d59fb(0x181)]=_0x5db4c3;const _0x5f593b=Window_STB_TurnOrder['Settings'],_0x8e6602=this['isHorz'](),_0x270800=this[_0x4d59fb(0x296)]();this[_0x4d59fb(0x15f)]=0x0,this[_0x4d59fb(0x126)]=_0x8e6602?_0x5f593b['SpriteThin']*_0x270800:0x0,this[_0x4d59fb(0xc7)]=_0x8e6602?0x0:_0x5f593b[_0x4d59fb(0x192)]*_0x270800,this['_fadeDuration']=0x0,this['_fadeTarget']=0xff,this[_0x4d59fb(0xe6)]=![],this[_0x4d59fb(0x1fd)]=![],this['_containerWidth']=0x0,this[_0x4d59fb(0x1e0)]=0x0;},Sprite_STB_TurnOrder_Battler['prototype']['createChildren']=function(){const _0x530d7a=_0x500709;this['createInitialPositions'](),this['createBackgroundSprite'](),this[_0x530d7a(0x1ef)](),this[_0x530d7a(0x1f7)](),this[_0x530d7a(0x164)]();},Sprite_STB_TurnOrder_Battler[_0x500709(0x11f)][_0x500709(0x194)]=function(){const _0x1ae2ef=_0x500709;this['x']=this[_0x1ae2ef(0x126)],this['y']=this['_positionTargetY'];},Sprite_STB_TurnOrder_Battler['prototype'][_0x500709(0x14f)]=function(){const _0x3da389=_0x500709,_0x1e7c0b=Window_STB_TurnOrder['Settings'],_0x3bff27=[_0x3da389(0x1c9),'bottom'][_0x3da389(0x254)](_0x1e7c0b[_0x3da389(0x15c)]);return _0x3bff27;},Sprite_STB_TurnOrder_Battler[_0x500709(0x11f)][_0x500709(0xb6)]=function(){const _0x4b34ae=_0x500709,_0x2b50ac=Window_STB_TurnOrder[_0x4b34ae(0x1d3)];return this[_0x4b34ae(0x14f)]()?_0x2b50ac[_0x4b34ae(0x192)]:_0x2b50ac[_0x4b34ae(0x26e)];},Sprite_STB_TurnOrder_Battler[_0x500709(0x11f)][_0x500709(0x199)]=function(){const _0x38992f=_0x500709,_0x4f2c87=Window_STB_TurnOrder[_0x38992f(0x1d3)];return this[_0x38992f(0x14f)]()?_0x4f2c87[_0x38992f(0x26e)]:_0x4f2c87[_0x38992f(0x192)];},Sprite_STB_TurnOrder_Battler[_0x500709(0x11f)][_0x500709(0x1fe)]=function(){const _0xb4b69c=_0x500709;this[_0xb4b69c(0x252)]=new Bitmap(0x48,0x24);const _0x1d5c49=this['battler']()?this[_0xb4b69c(0x177)]()[_0xb4b69c(0x241)]():_0xb4b69c(0x156)[_0xb4b69c(0x1c4)](this[_0xb4b69c(0x172)],this['_index']);this[_0xb4b69c(0x252)][_0xb4b69c(0x26f)](_0x1d5c49,0x0,0x0,0x48,0x24,'center');},Sprite_STB_TurnOrder_Battler['prototype'][_0x500709(0x1bc)]=function(){const _0xd45730=_0x500709;if(!Window_STB_TurnOrder[_0xd45730(0x1d3)][_0xd45730(0x21d)])return;const _0x374a33=Window_STB_TurnOrder[_0xd45730(0x1d3)],_0x1bce7d=this['_unit']===$gameParty?_0xd45730(0x1de):_0xd45730(0x13e),_0x31609c=_0xd45730(0x251)[_0xd45730(0x1c4)](_0x1bce7d),_0x2c9590=new Sprite();_0x2c9590[_0xd45730(0x103)]['x']=this[_0xd45730(0x103)]['x'],_0x2c9590[_0xd45730(0x103)]['y']=this[_0xd45730(0x103)]['y'];if(_0x374a33[_0x31609c])'bRzsT'!==_0xd45730(0xf3)?_0x2c9590[_0xd45730(0x252)]=ImageManager['loadSystem'](_0x374a33[_0x31609c]):_0x425ed4-=_0x2ad028*_0xe99a4b[_0xd45730(0x192)];else{const _0x50ad0e=this['bitmapWidth'](),_0x4583c5=this['bitmapHeight']();_0x2c9590['bitmap']=new Bitmap(_0x50ad0e,_0x4583c5);const _0x3b6138=ColorManager['getColor'](_0x374a33[_0xd45730(0x25e)['format'](_0x1bce7d)]),_0x119e5a=ColorManager['getColor'](_0x374a33[_0xd45730(0xef)[_0xd45730(0x1c4)](_0x1bce7d)]);_0x2c9590[_0xd45730(0x252)][_0xd45730(0x174)](0x0,0x0,_0x50ad0e,_0x4583c5,_0x3b6138,_0x119e5a,!![]);}this[_0xd45730(0x21e)]=_0x2c9590,this[_0xd45730(0x11c)](this['_backgroundSprite']),this['width']=this[_0xd45730(0x21e)][_0xd45730(0xed)],this['height']=this[_0xd45730(0x21e)]['height'];},Sprite_STB_TurnOrder_Battler[_0x500709(0x11f)][_0x500709(0x1ef)]=function(){const _0x25b5c7=_0x500709,_0x300698=new Sprite();_0x300698['anchor']['x']=this[_0x25b5c7(0x103)]['x'],_0x300698[_0x25b5c7(0x103)]['y']=this[_0x25b5c7(0x103)]['y'],this[_0x25b5c7(0x273)]=_0x300698,this[_0x25b5c7(0x11c)](this[_0x25b5c7(0x273)]),this[_0x25b5c7(0x1ad)]();},Sprite_STB_TurnOrder_Battler[_0x500709(0x11f)][_0x500709(0x1f7)]=function(){const _0x121506=_0x500709;if(!Window_STB_TurnOrder['Settings']['ShowMarkerBorder'])return;const _0x777a95=Window_STB_TurnOrder['Settings'],_0x3aa9b7=this[_0x121506(0x172)]===$gameParty?_0x121506(0x1de):_0x121506(0x13e),_0x456518='%1SystemBorder'['format'](_0x3aa9b7),_0x31e37e=new Sprite();_0x31e37e[_0x121506(0x103)]['x']=this['anchor']['x'],_0x31e37e['anchor']['y']=this['anchor']['y'];if(_0x777a95[_0x456518])_0x31e37e[_0x121506(0x252)]=ImageManager[_0x121506(0x196)](_0x777a95[_0x456518]);else{let _0x1523e2=this['bitmapWidth'](),_0x17e504=this['bitmapHeight'](),_0x25d32a=_0x777a95['BorderThickness'];_0x31e37e[_0x121506(0x252)]=new Bitmap(_0x1523e2,_0x17e504);const _0x2a490b='#000000',_0x24423d=ColorManager['getColor'](_0x777a95[_0x121506(0x29a)[_0x121506(0x1c4)](_0x3aa9b7)]);_0x31e37e[_0x121506(0x252)][_0x121506(0x162)](0x0,0x0,_0x1523e2,_0x17e504,_0x2a490b),_0x1523e2-=0x2,_0x17e504-=0x2,_0x31e37e['bitmap']['fillRect'](0x1,0x1,_0x1523e2,_0x17e504,_0x24423d),_0x1523e2-=_0x25d32a*0x2,_0x17e504-=_0x25d32a*0x2,_0x31e37e[_0x121506(0x252)][_0x121506(0x162)](0x1+_0x25d32a,0x1+_0x25d32a,_0x1523e2,_0x17e504,_0x2a490b),_0x1523e2-=0x2,_0x17e504-=0x2,_0x25d32a+=0x1,_0x31e37e[_0x121506(0x252)]['clearRect'](0x1+_0x25d32a,0x1+_0x25d32a,_0x1523e2,_0x17e504);}this[_0x121506(0x21e)]=_0x31e37e,this[_0x121506(0x11c)](this['_backgroundSprite']);},Sprite_STB_TurnOrder_Battler['prototype']['createLetterSprite']=function(){const _0x14038e=_0x500709,_0x71af58=Window_STB_TurnOrder[_0x14038e(0x1d3)];if(!_0x71af58[_0x14038e(0x169)])return;if(this[_0x14038e(0x172)]===$gameParty)return;const _0x326c92=this[_0x14038e(0xb6)](),_0x516b14=this['bitmapHeight'](),_0x1dac46=new Sprite();_0x1dac46[_0x14038e(0x103)]['x']=this['anchor']['x'],_0x1dac46[_0x14038e(0x103)]['y']=this[_0x14038e(0x103)]['y'],_0x1dac46[_0x14038e(0x252)]=new Bitmap(_0x326c92,_0x516b14),this[_0x14038e(0xe7)]=_0x1dac46,this[_0x14038e(0x11c)](this[_0x14038e(0xe7)]);},Sprite_STB_TurnOrder_Battler[_0x500709(0x11f)]['battler']=function(){const _0x13188a=_0x500709;return this[_0x13188a(0x172)]?this[_0x13188a(0x172)][_0x13188a(0x14d)]()[this[_0x13188a(0x181)]]:null;},Sprite_STB_TurnOrder_Battler[_0x500709(0x11f)][_0x500709(0xb8)]=function(){const _0x493b0c=_0x500709;Sprite_Clickable[_0x493b0c(0x11f)][_0x493b0c(0xb8)]['call'](this),this[_0x493b0c(0x236)](),this['updatePosition'](),this['checkOpacity'](),this['updateOpacity'](),this['updateGraphic'](),this[_0x493b0c(0x271)](),this[_0x493b0c(0x182)](),this[_0x493b0c(0x18e)]();},Sprite_STB_TurnOrder_Battler['prototype'][_0x500709(0x236)]=function(){const _0x3239ac=_0x500709,_0x308429=this[_0x3239ac(0x279)]();if(this[_0x3239ac(0x105)]===_0x308429)return;this[_0x3239ac(0x105)]=_0x308429;this[_0x3239ac(0xb4)]<0xff&&this[_0x3239ac(0x177)]()&&_0x308429!==this[_0x3239ac(0x296)]()&&this[_0x3239ac(0x16f)](0xff);if(_0x308429===this['defaultPosition']()&&this['_fadeDuration']<=0x0&&this['opacity']>0x0)this[_0x3239ac(0x16f)](0x0);else{if(this['_fadeDuration']<=0x0&&this[_0x3239ac(0xb4)]<0xff){if(_0x3239ac(0x109)!==_0x3239ac(0x109)){if(!_0x4c3598[_0x3239ac(0xcb)]())return;this[_0x3239ac(0x1b5)]();const _0x4821d9=new _0x3eb45e(this);this['setSTBNextTurnSpeed'](0x0);}else this['checkOpacity']();}}this[_0x3239ac(0x299)]();},Sprite_STB_TurnOrder_Battler[_0x500709(0x11f)]['checkTargetPositions']=function(){const _0x975802=_0x500709,_0x58821d=this[_0x975802(0x12a)]();if(!_0x58821d)return;let _0x43f54c=![];if(this[_0x975802(0x1bd)]!==_0x58821d[_0x975802(0xed)])_0x43f54c=!![];else this[_0x975802(0x1e0)]!==_0x58821d[_0x975802(0x198)]&&(_0x43f54c=!![]);if(_0x43f54c){if(_0x975802(0x1f0)==='JjnpY')this[_0x975802(0x299)]();else{const _0x5cb8b1=_0xa11c4b[_0x975802(0x1d3)];if(_0x5cb8b1['DisplayPosition']!==_0x975802(0x1c9))return;if(!_0x5cb8b1[_0x975802(0xcc)])return;if(!this[_0x975802(0xb0)])return;const _0x49f6ba=this[_0x975802(0xcf)]['y']-_0x444221[_0x975802(0x276)]((_0x53868f[_0x975802(0x198)]-_0x263eff[_0x975802(0x18c)])/0x2),_0x5c4b7e=_0x49f6ba+this[_0x975802(0xcf)]['height'];this[_0x975802(0xb0)]['y']=_0x5c4b7e+_0x5cb8b1[_0x975802(0x227)];}}},Sprite_STB_TurnOrder_Battler[_0x500709(0x11f)][_0x500709(0x299)]=function(){const _0x4babd4=_0x500709,_0x282431=Window_STB_TurnOrder['Settings'],_0x2b534f=this[_0x4babd4(0x14f)](),_0x8fc0b4=_0x282431[_0x4babd4(0xf4)],_0x3a791c=_0x282431[_0x4babd4(0xd9)],_0x2bcc04=SceneManager['_scene']['_stbTurnOrderWindow'];if(!_0x2bcc04)return;const _0x24517e=this['containerPosition']();this[_0x4babd4(0x15f)]=_0x282431[_0x4babd4(0x231)],this['_positionTargetX']=_0x2b534f?_0x282431[_0x4babd4(0x192)]*_0x24517e:0x0,this[_0x4babd4(0xc7)]=_0x2b534f?0x0:_0x282431[_0x4babd4(0x192)]*_0x24517e,_0x24517e>0x0&&(this['_positionTargetX']+=_0x2b534f?_0x3a791c:0x0,this[_0x4babd4(0xc7)]+=_0x2b534f?0x0:_0x3a791c),_0x8fc0b4?this['_positionTargetX']=_0x2b534f?_0x2bcc04['width']-this[_0x4babd4(0x126)]-_0x282431[_0x4babd4(0x192)]:0x0:this[_0x4babd4(0xc7)]=_0x2b534f?0x0:_0x2bcc04['height']-this[_0x4babd4(0xc7)]-_0x282431[_0x4babd4(0x192)];},Sprite_STB_TurnOrder_Battler[_0x500709(0x11f)]['updatePosition']=function(){const _0x2f8f8b=_0x500709;if(this[_0x2f8f8b(0x1e7)]>0x0)return;if(this['_positionDuration']>0x0){if(_0x2f8f8b(0x197)===_0x2f8f8b(0x197)){const _0x697969=this['_positionDuration'];this['x']=(this['x']*(_0x697969-0x1)+this[_0x2f8f8b(0x126)])/_0x697969,this['y']=(this['y']*(_0x697969-0x1)+this[_0x2f8f8b(0xc7)])/_0x697969,this[_0x2f8f8b(0x15f)]--;}else return _0x126008[_0x2f8f8b(0x12b)][_0x2f8f8b(0xcf)];}if(this[_0x2f8f8b(0x15f)]<=0x0){this['x']=this[_0x2f8f8b(0x126)],this['y']=this[_0x2f8f8b(0xc7)];if(this[_0x2f8f8b(0xb4)]<0xff&&!this[_0x2f8f8b(0x213)]&&this[_0x2f8f8b(0x1e7)]<=0x0){if(_0x2f8f8b(0xec)!==_0x2f8f8b(0xec)){const _0x23b960=this[_0x2f8f8b(0x177)]();if(!_0x23b960)return this['defaultPosition']();if(_0x23b960===_0x280d14[_0x2f8f8b(0x101)])return 0x0;if(_0xd8f34f[_0x2f8f8b(0x297)]['includes'](_0x23b960)){const _0x4e0e37=_0x4fb388[_0x2f8f8b(0x297)][_0x2f8f8b(0x224)](_0x23b960)+0x1;return _0x4e0e37;}return this[_0x2f8f8b(0x296)]();}else{const _0x21fbc6=this['battler']();_0x21fbc6&&(this[_0x2f8f8b(0x202)]=_0x21fbc6['isAlive']()&&_0x21fbc6['isAppeared']()?0xff:0x0);}}}},Sprite_STB_TurnOrder_Battler[_0x500709(0x11f)]['defaultPosition']=function(){const _0x1d36d6=_0x500709,_0x236dc4=Window_STB_TurnOrder['Settings'],_0x49f709=this[_0x1d36d6(0x14f)]()?_0x236dc4['MaxHorzSprites']:_0x236dc4[_0x1d36d6(0x102)];return _0x49f709+0x1;},Sprite_STB_TurnOrder_Battler[_0x500709(0x11f)][_0x500709(0x12a)]=function(){const _0x48954a=_0x500709;return SceneManager[_0x48954a(0x12b)][_0x48954a(0xcf)];},Sprite_STB_TurnOrder_Battler[_0x500709(0x11f)]['containerPosition']=function(){const _0x5a64ee=_0x500709,_0x5945d0=this['battler']();if(!_0x5945d0)return this[_0x5a64ee(0x296)]();if(_0x5945d0===BattleManager['_subject']){if('GAhrj'===_0x5a64ee(0x26c)){const _0x58c64b=_0xb1c9db(_0xe0595f['$1']);_0x58c64b<_0x496ef7?(_0x5debcd(_0x5a64ee(0x16a)[_0x5a64ee(0x1c4)](_0x3ca4b5,_0x58c64b,_0x517ba0)),_0x1ca6d2[_0x5a64ee(0xbb)]()):_0x2abe13=_0x10eab3[_0x5a64ee(0x144)](_0x58c64b,_0x47bf14);}else return 0x0;}if(BattleManager[_0x5a64ee(0x297)][_0x5a64ee(0x254)](_0x5945d0)){if(_0x5a64ee(0x268)!==_0x5a64ee(0xf8)){const _0x469030=BattleManager['_actionBattlers'][_0x5a64ee(0x224)](_0x5945d0)+0x1;return _0x469030;}else this[_0x5a64ee(0x1a1)](_0x5a42c5(_0x18531b['$1']));}return this[_0x5a64ee(0x296)]();},Sprite_STB_TurnOrder_Battler['prototype'][_0x500709(0x16f)]=function(_0x3a3377){const _0x4cc02c=_0x500709,_0x50d45e=Window_STB_TurnOrder[_0x4cc02c(0x1d3)];this['_fadeDuration']=_0x50d45e[_0x4cc02c(0x231)],this['_fadeTarget']=_0x3a3377;},Sprite_STB_TurnOrder_Battler['prototype'][_0x500709(0xea)]=function(){const _0xc11e13=_0x500709,_0x3db390=this[_0xc11e13(0x177)]();if(!_0x3db390)return;if(this[_0xc11e13(0xe6)]===_0x3db390['isAlive']()&&this[_0xc11e13(0x1fd)]===_0x3db390[_0xc11e13(0x16e)]())return;this[_0xc11e13(0xe6)]=_0x3db390[_0xc11e13(0xc8)](),this[_0xc11e13(0x1fd)]=_0x3db390[_0xc11e13(0x16e)]();let _0x48f661=this[_0xc11e13(0xe6)]&&this['_isAppeared']?0xff:0x0;this[_0xc11e13(0x16f)](_0x48f661);},Sprite_STB_TurnOrder_Battler[_0x500709(0x11f)][_0x500709(0x225)]=function(){const _0x385ef2=_0x500709;if(this[_0x385ef2(0x1e7)]>0x0){const _0x2e18cf=this[_0x385ef2(0x1e7)];this[_0x385ef2(0xb4)]=(this[_0x385ef2(0xb4)]*(_0x2e18cf-0x1)+this[_0x385ef2(0x202)])/_0x2e18cf,this['_fadeDuration']--,this['_fadeDuration']<=0x0&&(this[_0x385ef2(0x236)](),this[_0x385ef2(0x15f)]=0x0,this[_0x385ef2(0xf5)](),this['opacity']=this[_0x385ef2(0x202)]);}if(this[_0x385ef2(0x213)])return;BattleManager[_0x385ef2(0x265)]===_0x385ef2(0x204)&&(this[_0x385ef2(0x213)]=!![],this[_0x385ef2(0x16f)](0x0));},Sprite_STB_TurnOrder_Battler['prototype'][_0x500709(0x1b2)]=function(){const _0x1001fc=_0x500709,_0x5919f6=this[_0x1001fc(0x177)]();if(!_0x5919f6)return;const _0x20444d=Window_STB_TurnOrder[_0x1001fc(0x1d3)],_0x13cc97=this['_unit']===$gameParty?_0x1001fc(0x1de):_0x1001fc(0x13e);let _0x4f06fb=_0x5919f6[_0x1001fc(0x1d5)]();if(_0x5919f6[_0x1001fc(0x29d)]()&&_0x4f06fb===_0x1001fc(0x122))_0x4f06fb=_0x1001fc(0x246);else{if(_0x5919f6['isEnemy']()&&_0x4f06fb===_0x1001fc(0x100)){if(_0x1001fc(0x239)==='unetC')_0x4f06fb=_0x1001fc(0x122);else{const _0x132ec4=_0x29f0bc[_0x1001fc(0x1d3)],_0x406329=[_0x1001fc(0x1c9),_0x1001fc(0x15b)]['includes'](_0x132ec4[_0x1001fc(0x15c)]);return _0x406329;}}}if(this[_0x1001fc(0x24a)]!==_0x4f06fb)return this[_0x1001fc(0x1ad)]();switch(this[_0x1001fc(0x24a)]){case _0x1001fc(0x246):if(this[_0x1001fc(0xc3)]!==_0x5919f6[_0x1001fc(0x10a)]())return this[_0x1001fc(0x1ad)]();if(this[_0x1001fc(0x1c3)]!==_0x5919f6[_0x1001fc(0x2a2)]())return this[_0x1001fc(0x1ad)]();break;case _0x1001fc(0x12e):if(this[_0x1001fc(0x245)]!==_0x5919f6[_0x1001fc(0x23a)]()){if('CVbBy'===_0x1001fc(0x1eb)){const _0x3325ce=this['_fadeDuration'];this[_0x1001fc(0xb4)]=(this[_0x1001fc(0xb4)]*(_0x3325ce-0x1)+this['_fadeTarget'])/_0x3325ce,this[_0x1001fc(0x1e7)]--,this['_fadeDuration']<=0x0&&(this[_0x1001fc(0x236)](),this[_0x1001fc(0x15f)]=0x0,this[_0x1001fc(0xf5)](),this[_0x1001fc(0xb4)]=this[_0x1001fc(0x202)]);}else return this[_0x1001fc(0x1ad)]();}break;case _0x1001fc(0x122):if(_0x5919f6[_0x1001fc(0x28d)]()){if(_0x1001fc(0x2a3)!=='mcqec'){if(this[_0x1001fc(0xc9)]!==_0x5919f6['svBattlerName']()){if(_0x1001fc(0xb2)!==_0x1001fc(0xb2))this['commandCancelSTB']();else return this['processUpdateGraphic']();}}else return this['processUpdateGraphic']();}else{if(this[_0x1001fc(0x234)]!==_0x5919f6[_0x1001fc(0x263)]())return this[_0x1001fc(0x1ad)]();}break;case'svactor':if(_0x5919f6['isActor']()){if(_0x1001fc(0x1ed)!==_0x1001fc(0x150)){if(this[_0x1001fc(0xc9)]!==_0x5919f6['battlerName']())return this[_0x1001fc(0x1ad)]();}else this[_0x1001fc(0x1af)]===_0x2cfce7&&this[_0x1001fc(0x25b)](),this['_stbNextTurnSpeed']=_0x21a06f;}else{if(this[_0x1001fc(0x234)]!==_0x5919f6[_0x1001fc(0x263)]()){if(_0x1001fc(0x291)!==_0x1001fc(0x291)){const _0xa5c3ad=this[_0x1001fc(0x29d)]()?this[_0x1001fc(0x124)]()['note']:this[_0x1001fc(0x122)]()[_0x1001fc(0x23d)];if(_0xa5c3ad[_0x1001fc(0x26b)](_0x55b296[_0x1001fc(0x1e1)][_0x1001fc(0x222)]['ExploitedStates']))return _0xb5e7ac['BattleSystemSTB'][_0x1001fc(0x161)](_0x2aa9ab['$1']);return _0x3207ad['BattleSystemSTB']['Settings']['Exploited'][_0x1001fc(0xdc)]||[];}else return this[_0x1001fc(0x1ad)]();}}break;}},Sprite_STB_TurnOrder_Battler[_0x500709(0x11f)]['processUpdateGraphic']=function(){const _0x3834eb=_0x500709,_0xa94873=this[_0x3834eb(0x177)]();if(!_0xa94873)return;this[_0x3834eb(0x24a)]=_0xa94873[_0x3834eb(0x1d5)]();if(_0xa94873[_0x3834eb(0x29d)]()&&this[_0x3834eb(0x24a)]==='enemy')this[_0x3834eb(0x24a)]=_0x3834eb(0x246);else{if(_0xa94873['isEnemy']()&&this['_graphicType']==='svactor'){if(_0x3834eb(0x281)===_0x3834eb(0xc4)){const _0x23a4f2=this[_0x3834eb(0x1e2)]()['note'];if(_0x23a4f2[_0x3834eb(0x26b)](/<STB TURN ORDER ICON:[ ](\d+)>/i))return _0x2d6a22(_0xc77db7['$1']);return _0x516c7a[_0x3834eb(0x1d3)][_0x3834eb(0x167)];}else this[_0x3834eb(0x24a)]=_0x3834eb(0x122);}}let _0x22a211;switch(this[_0x3834eb(0x24a)]){case _0x3834eb(0x246):this[_0x3834eb(0xc3)]=_0xa94873[_0x3834eb(0x10a)](),this['_graphicFaceIndex']=_0xa94873[_0x3834eb(0x2a2)](),_0x22a211=ImageManager[_0x3834eb(0x145)](this[_0x3834eb(0xc3)]),_0x22a211[_0x3834eb(0x16d)](this['changeFaceGraphicBitmap'][_0x3834eb(0x21c)](this,_0x22a211));break;case'icon':this[_0x3834eb(0x245)]=_0xa94873[_0x3834eb(0x1f9)](),_0x22a211=ImageManager['loadSystem'](_0x3834eb(0x229)),_0x22a211['addLoadListener'](this[_0x3834eb(0xb9)][_0x3834eb(0x21c)](this,_0x22a211));break;case _0x3834eb(0x122):if(_0xa94873[_0x3834eb(0x28d)]()){if(_0x3834eb(0x290)!=='SXdup')return this['_stbExploited']===_0x492d58&&this[_0x3834eb(0x25b)](),this[_0x3834eb(0x1d7)];else this[_0x3834eb(0xc9)]=_0xa94873[_0x3834eb(0x1c1)](),_0x22a211=ImageManager[_0x3834eb(0x15e)](this[_0x3834eb(0xc9)]),_0x22a211['addLoadListener'](this[_0x3834eb(0x25d)]['bind'](this,_0x22a211));}else $gameSystem[_0x3834eb(0xb1)]()?(this[_0x3834eb(0x234)]=_0xa94873['battlerName'](),_0x22a211=ImageManager[_0x3834eb(0x1ab)](this['_graphicEnemy']),_0x22a211[_0x3834eb(0x16d)](this[_0x3834eb(0x17c)][_0x3834eb(0x21c)](this,_0x22a211))):(this[_0x3834eb(0x234)]=_0xa94873[_0x3834eb(0x263)](),_0x22a211=ImageManager[_0x3834eb(0x274)](this[_0x3834eb(0x234)]),_0x22a211[_0x3834eb(0x16d)](this['changeEnemyGraphicBitmap'][_0x3834eb(0x21c)](this,_0x22a211)));break;case _0x3834eb(0x100):this[_0x3834eb(0xc9)]=_0xa94873[_0x3834eb(0x263)](),_0x22a211=ImageManager[_0x3834eb(0x15e)](this['_graphicSv']),_0x22a211[_0x3834eb(0x16d)](this['changeSvActorGraphicBitmap'][_0x3834eb(0x21c)](this,_0x22a211));break;}},Sprite_STB_TurnOrder_Battler[_0x500709(0x11f)]['changeFaceGraphicBitmap']=function(_0x136f91){const _0x5e8fa2=_0x500709,_0x565a9d=this[_0x5e8fa2(0x1c3)],_0x1aac28=this[_0x5e8fa2(0xb6)](),_0x3946bb=this[_0x5e8fa2(0x199)](),_0x252a2f=Math[_0x5e8fa2(0x144)](_0x1aac28,_0x3946bb);this['_graphicSprite'][_0x5e8fa2(0x252)]=new Bitmap(_0x1aac28,_0x3946bb);const _0x534579=this['_graphicSprite'][_0x5e8fa2(0x252)],_0x3a5a82=ImageManager[_0x5e8fa2(0x159)],_0x1a470e=ImageManager[_0x5e8fa2(0x230)],_0xe3338f=_0x252a2f/Math['max'](_0x3a5a82,_0x1a470e),_0x5533ca=ImageManager['faceWidth'],_0x516c04=ImageManager[_0x5e8fa2(0x230)],_0x25882c=_0x565a9d%0x4*_0x3a5a82+(_0x3a5a82-_0x5533ca)/0x2,_0x28eca4=Math['floor'](_0x565a9d/0x4)*_0x1a470e+(_0x1a470e-_0x516c04)/0x2,_0x551c0d=(_0x1aac28-_0x3a5a82*_0xe3338f)/0x2,_0x2e5ecb=(_0x3946bb-_0x1a470e*_0xe3338f)/0x2;_0x534579[_0x5e8fa2(0x1db)](_0x136f91,_0x25882c,_0x28eca4,_0x5533ca,_0x516c04,_0x551c0d,_0x2e5ecb,_0x252a2f,_0x252a2f);},Sprite_STB_TurnOrder_Battler[_0x500709(0x11f)][_0x500709(0xb9)]=function(_0x31f251){const _0x11b332=_0x500709,_0x14e177=this[_0x11b332(0x245)],_0x3b24c8=this[_0x11b332(0xb6)](),_0x45e15e=this[_0x11b332(0x199)]();this[_0x11b332(0x273)][_0x11b332(0x252)]=new Bitmap(_0x3b24c8,_0x45e15e);const _0x39a6ae=this[_0x11b332(0x273)][_0x11b332(0x252)],_0x447753=ImageManager[_0x11b332(0xd5)],_0x5b2a9f=ImageManager['iconHeight'],_0x378af6=Math[_0x11b332(0x188)](_0x447753,_0x5b2a9f,_0x3b24c8,_0x45e15e),_0x217196=_0x14e177%0x10*_0x447753,_0x10e102=Math[_0x11b332(0xe5)](_0x14e177/0x10)*_0x5b2a9f,_0x2dfc8b=Math[_0x11b332(0xe5)](Math[_0x11b332(0x144)](_0x3b24c8-_0x378af6,0x0)/0x2),_0x334168=Math['floor'](Math[_0x11b332(0x144)](_0x45e15e-_0x378af6,0x0)/0x2);_0x39a6ae[_0x11b332(0x1db)](_0x31f251,_0x217196,_0x10e102,_0x447753,_0x5b2a9f,_0x2dfc8b,_0x334168,_0x378af6,_0x378af6);},Sprite_STB_TurnOrder_Battler[_0x500709(0x11f)]['changeSvActorGraphicBitmap']=function(_0x186ddf){const _0x1f0fca=_0x500709,_0x419060=this['bitmapWidth'](),_0x464abd=this[_0x1f0fca(0x199)](),_0x48744a=Math[_0x1f0fca(0x188)](_0x419060,_0x464abd);this[_0x1f0fca(0x273)][_0x1f0fca(0x252)]=new Bitmap(_0x419060,_0x464abd);const _0x37c998=this[_0x1f0fca(0x273)][_0x1f0fca(0x252)],_0x50f725=0x9,_0x95dce9=0x6,_0xd41c7b=_0x186ddf[_0x1f0fca(0xed)]/_0x50f725,_0xd5acc7=_0x186ddf[_0x1f0fca(0x198)]/_0x95dce9,_0x1d6238=Math[_0x1f0fca(0x188)](0x1,_0x48744a/_0xd41c7b,_0x48744a/_0xd5acc7),_0x1a585f=_0xd41c7b*_0x1d6238,_0x30dd11=_0xd5acc7*_0x1d6238,_0x3cbbbf=Math[_0x1f0fca(0x276)]((_0x419060-_0x1a585f)/0x2),_0x284bac=Math[_0x1f0fca(0x276)]((_0x464abd-_0x30dd11)/0x2);_0x37c998[_0x1f0fca(0x1db)](_0x186ddf,0x0,0x0,_0xd41c7b,_0xd5acc7,_0x3cbbbf,_0x284bac,_0x1a585f,_0x30dd11);},Sprite_STB_TurnOrder_Battler[_0x500709(0x11f)][_0x500709(0x17c)]=function(_0x14c576){const _0x3a8030=_0x500709,_0x25cb6d=Window_STB_TurnOrder['Settings'],_0x12912d=this[_0x3a8030(0xb6)](),_0x5c5fc5=this[_0x3a8030(0x199)](),_0x3db586=Math[_0x3a8030(0x188)](_0x12912d,_0x5c5fc5);this[_0x3a8030(0x273)][_0x3a8030(0x252)]=new Bitmap(_0x12912d,_0x5c5fc5);const _0x333fd8=this[_0x3a8030(0x273)]['bitmap'],_0x5979c6=Math[_0x3a8030(0x188)](0x1,_0x3db586/_0x14c576[_0x3a8030(0xed)],_0x3db586/_0x14c576['height']),_0x51932f=_0x14c576[_0x3a8030(0xed)]*_0x5979c6,_0x103686=_0x14c576[_0x3a8030(0x198)]*_0x5979c6,_0x561be5=Math['round']((_0x12912d-_0x51932f)/0x2),_0x30a84f=Math[_0x3a8030(0x276)]((_0x5c5fc5-_0x103686)/0x2);_0x333fd8[_0x3a8030(0x1db)](_0x14c576,0x0,0x0,_0x14c576[_0x3a8030(0xed)],_0x14c576[_0x3a8030(0x198)],_0x561be5,_0x30a84f,_0x51932f,_0x103686);},Sprite_STB_TurnOrder_Battler['prototype'][_0x500709(0x271)]=function(){const _0x40c2b9=_0x500709,_0x35de8a=this[_0x40c2b9(0x177)]();if(!_0x35de8a)return;if(!_0x35de8a[_0x40c2b9(0xd7)]())return;if(this[_0x40c2b9(0x1df)]===_0x35de8a['battlerHue']())return;this['_graphicHue']=_0x35de8a[_0x40c2b9(0x223)]();if(_0x35de8a[_0x40c2b9(0x28d)]())this[_0x40c2b9(0x1df)]=0x0;this[_0x40c2b9(0x273)][_0x40c2b9(0x295)](this[_0x40c2b9(0x1df)]);},Sprite_STB_TurnOrder_Battler[_0x500709(0x11f)][_0x500709(0x182)]=function(){const _0x26c4b5=_0x500709;if(!this[_0x26c4b5(0xe7)])return;const _0x2baa43=this[_0x26c4b5(0x177)]();if(!_0x2baa43)return;if(this[_0x26c4b5(0x1a4)]===_0x2baa43['_letter']&&this['_plural']===_0x2baa43[_0x26c4b5(0x1da)])return;this[_0x26c4b5(0x1a4)]=_0x2baa43[_0x26c4b5(0x1a4)],this['_plural']=_0x2baa43[_0x26c4b5(0x1da)];const _0x5aa6aa=Window_STB_TurnOrder['Settings'],_0x302cf9=this['isHorz'](),_0x73cd81=this[_0x26c4b5(0xb6)](),_0x5138bc=this[_0x26c4b5(0x199)](),_0x21c5e8=this[_0x26c4b5(0xe7)]['bitmap'];_0x21c5e8[_0x26c4b5(0x1ca)]();if(!this[_0x26c4b5(0x1da)])return;_0x21c5e8['fontFace']=_0x5aa6aa[_0x26c4b5(0x134)]||$gameSystem[_0x26c4b5(0x120)](),_0x21c5e8['fontSize']=_0x5aa6aa['EnemyBattlerFontSize']||0x10,_0x302cf9?_0x26c4b5(0x1f6)===_0x26c4b5(0x1f6)?_0x21c5e8[_0x26c4b5(0x26f)](this[_0x26c4b5(0x1a4)][_0x26c4b5(0x18a)](),0x0,_0x5138bc/0x2,_0x73cd81,_0x5138bc/0x2,_0x26c4b5(0x1f8)):(this['_stbTurnOrderVisible']===_0x25c57f&&this[_0x26c4b5(0x180)](),this[_0x26c4b5(0x21a)]=_0x430f6b):_0x21c5e8[_0x26c4b5(0x26f)](this[_0x26c4b5(0x1a4)][_0x26c4b5(0x18a)](),0x0,0x2,_0x73cd81-0x8,_0x5138bc-0x4,_0x26c4b5(0x244));},Sprite_STB_TurnOrder_Battler[_0x500709(0x11f)][_0x500709(0x18e)]=function(){const _0x59d738=_0x500709,_0x4c1fac=this['battler']();if(!_0x4c1fac)return;const _0x3b260b=_0x4c1fac['battler']();if(!_0x3b260b)return;const _0x3ba591=_0x3b260b[_0x59d738(0x19d)]();if(!_0x3ba591)return;this[_0x59d738(0x21b)](_0x3ba591['_blendColor']);},Sprite_STB_TurnOrder_Battler[_0x500709(0x11f)][_0x500709(0x240)]=function(){const _0x1f9448=_0x500709;return this[_0x1f9448(0x177)]();},VisuMZ[_0x500709(0x1e1)][_0x500709(0x235)]=Window_Help[_0x500709(0x11f)][_0x500709(0xc2)],Window_Help[_0x500709(0x11f)]['setItem']=function(_0x3b4be4){const _0x3f46fb=_0x500709;BattleManager['isSTB']()&&_0x3b4be4&&_0x3b4be4['note']&&_0x3b4be4[_0x3f46fb(0x23d)][_0x3f46fb(0x26b)](/<(?:STB) HELP>\s*([\s\S]*)\s*<\/(?:STB) HELP>/i)?this[_0x3f46fb(0x1a1)](String(RegExp['$1'])):_0x3f46fb(0x166)!==_0x3f46fb(0x165)?VisuMZ[_0x3f46fb(0x1e1)][_0x3f46fb(0x235)][_0x3f46fb(0x23c)](this,_0x3b4be4):this['makeSTBSpeed']();};function Window_STB_TurnOrder(){this['initialize'](...arguments);}Window_STB_TurnOrder[_0x500709(0x11f)]=Object['create'](Window_Base[_0x500709(0x11f)]),Window_STB_TurnOrder[_0x500709(0x11f)][_0x500709(0x15a)]=Window_STB_TurnOrder,Window_STB_TurnOrder[_0x500709(0x1d3)]=VisuMZ['BattleSystemSTB'][_0x500709(0x1d3)][_0x500709(0xb7)],Window_STB_TurnOrder[_0x500709(0x11f)]['initialize']=function(){const _0x33a84a=_0x500709,_0x512201=this[_0x33a84a(0x117)]();this[_0x33a84a(0x25a)](_0x512201),Window_Base[_0x33a84a(0x11f)]['initialize'][_0x33a84a(0x23c)](this,_0x512201),this[_0x33a84a(0xf2)](),this['updateVisibility'](),this[_0x33a84a(0xb4)]=0x0;},Window_STB_TurnOrder[_0x500709(0x11f)][_0x500709(0x117)]=function(){const _0x5ad121=_0x500709;return this[_0x5ad121(0x1e8)]($gameParty[_0x5ad121(0x139)](),0x9,!![]);},Window_STB_TurnOrder[_0x500709(0x11f)][_0x500709(0x25a)]=function(_0x3e25e1){const _0x5e4d8c=_0x500709;this['_targetHomeX']=this[_0x5e4d8c(0x201)]=_0x3e25e1['x'],this[_0x5e4d8c(0x18f)]=this[_0x5e4d8c(0x266)]=_0x3e25e1['y'],this[_0x5e4d8c(0x28c)]=_0x3e25e1['width'],this['_fullHeight']=_0x3e25e1[_0x5e4d8c(0x198)],this[_0x5e4d8c(0x1dd)]=0x0;},Window_STB_TurnOrder[_0x500709(0x11f)][_0x500709(0x1e8)]=function(_0x825124,_0x5a3b32,_0x426b67){const _0x284e68=_0x500709,_0x393b6d=Window_STB_TurnOrder[_0x284e68(0x1d3)],_0x16dc2a=this[_0x284e68(0x14f)]()?_0x393b6d[_0x284e68(0xca)]:_0x393b6d[_0x284e68(0x102)],_0x41e4a5=Math[_0x284e68(0x188)](_0x16dc2a,_0x825124+_0x5a3b32),_0x5e5307=SceneManager['_scene'][_0x284e68(0x257)][_0x284e68(0x198)],_0x595217=SceneManager[_0x284e68(0x12b)]['_helpWindow'][_0x284e68(0x198)],_0x229fd6=_0x393b6d[_0x284e68(0xd9)],_0x16f224=Graphics[_0x284e68(0x198)]-_0x5e5307-_0x595217;let _0x10b463=0x0,_0x1515e5=0x0,_0x42448b=0x0,_0x17908c=0x0;switch(_0x393b6d[_0x284e68(0x15c)]){case _0x284e68(0x1c9):_0x10b463=_0x393b6d[_0x284e68(0x192)]*_0x41e4a5+_0x229fd6,_0x1515e5=_0x393b6d[_0x284e68(0x26e)],_0x42448b=Math[_0x284e68(0x1a2)]((Graphics[_0x284e68(0xed)]-_0x10b463)/0x2),_0x17908c=_0x393b6d[_0x284e68(0x227)];break;case _0x284e68(0x15b):_0x10b463=_0x393b6d[_0x284e68(0x192)]*_0x41e4a5+_0x229fd6,_0x1515e5=_0x393b6d[_0x284e68(0x26e)],_0x42448b=Math[_0x284e68(0x1a2)]((Graphics[_0x284e68(0xed)]-_0x10b463)/0x2),_0x17908c=Graphics[_0x284e68(0x198)]-_0x5e5307-_0x1515e5-_0x393b6d[_0x284e68(0x227)];break;case _0x284e68(0x160):_0x10b463=_0x393b6d['SpriteLength'],_0x1515e5=_0x393b6d['SpriteThin']*_0x41e4a5+_0x229fd6,_0x42448b=_0x393b6d[_0x284e68(0x227)],_0x17908c=Math[_0x284e68(0x1a2)]((_0x16f224-_0x1515e5)/0x2),_0x17908c+=_0x595217;break;case _0x284e68(0x244):_0x10b463=_0x393b6d[_0x284e68(0x26e)],_0x1515e5=_0x393b6d[_0x284e68(0x192)]*_0x41e4a5+_0x229fd6,_0x42448b=Graphics[_0x284e68(0xed)]-_0x10b463-_0x393b6d[_0x284e68(0x227)],_0x17908c=Math['ceil']((_0x16f224-_0x1515e5)/0x2),_0x17908c+=_0x595217;break;}if(!_0x426b67){const _0x31b16b=Window_STB_TurnOrder[_0x284e68(0x1d3)][_0x284e68(0xf4)];let _0x284294=Math['min'](_0x16dc2a,Math[_0x284e68(0x188)]($gameParty['maxBattleMembers']()+0x8)-_0x41e4a5);switch(_0x393b6d[_0x284e68(0x15c)]){case _0x284e68(0x1c9):case'bottom':_0x31b16b&&(_0x284e68(0x289)!=='QSCcr'?_0x42448b-=_0x284294*_0x393b6d[_0x284e68(0x192)]:(_0x187844[_0x284e68(0x1e1)][_0x284e68(0x277)][_0x284e68(0x23c)](this),this[_0x284e68(0x25b)]()));break;}}return _0x42448b+=_0x393b6d[_0x284e68(0xde)],_0x17908c+=_0x393b6d[_0x284e68(0x171)],new Rectangle(_0x42448b,_0x17908c,_0x10b463,_0x1515e5);},Window_STB_TurnOrder[_0x500709(0x11f)][_0x500709(0xdf)]=function(){const _0x4b6e23=_0x500709;this[_0x4b6e23(0x17b)]=0x0;},Window_STB_TurnOrder['prototype']['isHorz']=function(){const _0x24ce39=_0x500709,_0x2ac823=Window_STB_TurnOrder[_0x24ce39(0x1d3)],_0x27bdaa=['top',_0x24ce39(0x15b)][_0x24ce39(0x254)](_0x2ac823[_0x24ce39(0x15c)]);return _0x27bdaa;},Window_STB_TurnOrder[_0x500709(0x11f)][_0x500709(0xf2)]=function(){const _0x52e757=_0x500709;this['_turnOrderInnerSprite']=new Sprite(),this[_0x52e757(0x19f)](this[_0x52e757(0x272)]),this[_0x52e757(0x141)]=[];for(let _0x3aba93=0x0;_0x3aba93<$gameParty[_0x52e757(0x139)]();_0x3aba93++){if('dcxAE'!==_0x52e757(0x253))_0x3d7f85['BattleSystemSTB'][_0x52e757(0x207)]['call'](this),this[_0x52e757(0x185)]();else{const _0x3fb41c=new Sprite_STB_TurnOrder_Battler($gameParty,_0x3aba93);this[_0x52e757(0x272)][_0x52e757(0x11c)](_0x3fb41c),this[_0x52e757(0x141)][_0x52e757(0x228)](_0x3fb41c);}}for(let _0x2d6aff=0x0;_0x2d6aff<0x8;_0x2d6aff++){const _0xee9d34=new Sprite_STB_TurnOrder_Battler($gameTroop,_0x2d6aff);this[_0x52e757(0x272)][_0x52e757(0x11c)](_0xee9d34),this[_0x52e757(0x141)]['push'](_0xee9d34);}},Window_STB_TurnOrder[_0x500709(0x11f)][_0x500709(0xb8)]=function(){const _0x4d3578=_0x500709;Window_Base[_0x4d3578(0x11f)][_0x4d3578(0xb8)][_0x4d3578(0x23c)](this),this[_0x4d3578(0x22a)](),this[_0x4d3578(0xf5)](),this['updateSidePosition'](),this[_0x4d3578(0xbe)](),this['updateVisibility']();},Window_STB_TurnOrder[_0x500709(0x11f)][_0x500709(0x22a)]=function(){const _0x283836=_0x500709;if(this[_0x283836(0x1dd)]>0x0){const _0x2069c0=this[_0x283836(0x1dd)];this['_homeX']=(this['_homeX']*(_0x2069c0-0x1)+this['_targetHomeX'])/_0x2069c0,this[_0x283836(0x266)]=(this[_0x283836(0x266)]*(_0x2069c0-0x1)+this['_targetHomeY'])/_0x2069c0,this['_homeDuration']--,this['_homeDuration']<=0x0&&(this[_0x283836(0x201)]=this[_0x283836(0x24f)],this[_0x283836(0x266)]=this[_0x283836(0x18f)]);}},Window_STB_TurnOrder[_0x500709(0x11f)]['updatePosition']=function(){const _0x33e53a=_0x500709,_0x4f1e45=Window_STB_TurnOrder[_0x33e53a(0x1d3)];if(_0x4f1e45['DisplayPosition']!=='top')return;if(!_0x4f1e45[_0x33e53a(0x242)])return;const _0x133c61=SceneManager[_0x33e53a(0x12b)][_0x33e53a(0x287)];if(!_0x133c61)return;_0x133c61[_0x33e53a(0x1bb)]?(this['x']=this[_0x33e53a(0x201)]+(_0x4f1e45[_0x33e53a(0x1cc)]||0x0),this['y']=this[_0x33e53a(0x266)]+(_0x4f1e45['RepositionTopHelpY']||0x0)):_0x33e53a(0x292)==='pOsgn'?(_0x406479[_0x33e53a(0x1e1)][_0x33e53a(0xd6)]['call'](this),this['initBattleSystemSTB']()):(this['x']=this['_homeX'],this['y']=this[_0x33e53a(0x266)]);const _0x54aec2=SceneManager[_0x33e53a(0x12b)]['_windowLayer'];this['_ogWindowLayerX']===undefined&&(this[_0x33e53a(0x24b)]=Math[_0x33e53a(0x276)]((Graphics[_0x33e53a(0xed)]-Math[_0x33e53a(0x188)](Graphics[_0x33e53a(0x20f)],_0x54aec2[_0x33e53a(0xed)]))/0x2),this[_0x33e53a(0x22e)]=Math[_0x33e53a(0x276)]((Graphics[_0x33e53a(0x198)]-Math[_0x33e53a(0x188)](Graphics[_0x33e53a(0x18c)],_0x54aec2[_0x33e53a(0x198)]))/0x2)),this['x']+=_0x54aec2['x']-this['_ogWindowLayerX'],this['y']+=_0x54aec2['y']-this[_0x33e53a(0x22e)];},Window_STB_TurnOrder[_0x500709(0x11f)]['updateSidePosition']=function(){const _0xc97961=_0x500709,_0x496fa0=Window_STB_TurnOrder['Settings'];if([_0xc97961(0x1c9)][_0xc97961(0x254)](_0x496fa0[_0xc97961(0x15c)]))return;this['x']=this[_0xc97961(0x201)],this['y']=this[_0xc97961(0x266)];const _0x1a6c02=SceneManager[_0xc97961(0x12b)][_0xc97961(0x148)];this['x']+=_0x1a6c02['x'],this['y']+=_0x1a6c02['y'];},Window_STB_TurnOrder[_0x500709(0x11f)][_0x500709(0xbe)]=function(){const _0x406cdf=_0x500709;if(!this['_turnOrderInnerSprite'])return;const _0x50d460=this[_0x406cdf(0x272)][_0x406cdf(0x1c7)];if(!_0x50d460)return;_0x50d460[_0x406cdf(0x19e)](this[_0x406cdf(0x29f)][_0x406cdf(0x21c)](this));},Window_STB_TurnOrder[_0x500709(0x11f)][_0x500709(0x29f)]=function(_0x58b11,_0x2f85d1){const _0x5ba7da=_0x500709,_0x34e6a9=this[_0x5ba7da(0x14f)](),_0x3120ad=Window_STB_TurnOrder[_0x5ba7da(0x1d3)][_0x5ba7da(0xf4)];if(_0x34e6a9&&!_0x3120ad)return _0x58b11['x']-_0x2f85d1['x'];else{if(_0x34e6a9&&_0x3120ad)return _0x2f85d1['x']-_0x58b11['x'];else{if(!_0x34e6a9&&_0x3120ad)return _0x58b11['y']-_0x2f85d1['y'];else{if(!_0x34e6a9&&!_0x3120ad)return'GLwCV'===_0x5ba7da(0x20e)?this[_0x5ba7da(0x1ad)]():_0x2f85d1['y']-_0x58b11['y'];}}}},Window_STB_TurnOrder[_0x500709(0x11f)][_0x500709(0x146)]=function(){const _0x5268dd=_0x500709;this[_0x5268dd(0x1bb)]=$gameSystem[_0x5268dd(0x11e)]();},Window_STB_TurnOrder['prototype'][_0x500709(0xfa)]=function(_0x2881d5){const _0x4f340e=_0x500709;this['_turnOrderContainer'][_0x4f340e(0x19e)]((_0x226d67,_0x258b7d)=>{const _0x1eae05=_0x4f340e;if(_0x1eae05(0x237)==='jviSU')this[_0x1eae05(0x24a)]=_0x1eae05(0x246);else return _0x226d67[_0x1eae05(0x279)]()-_0x258b7d[_0x1eae05(0x279)]();}),this['recalculateHome']();if(!_0x2881d5)return;for(const _0x2fe800 of this[_0x4f340e(0x141)]){if(!_0x2fe800)continue;_0x2fe800[_0x4f340e(0xb8)](),_0x2fe800['_positionDuration']=0x0;}},Window_STB_TurnOrder[_0x500709(0x11f)][_0x500709(0x221)]=function(){const _0x1527f5=_0x500709;if(!this[_0x1527f5(0x14f)]())return;const _0x3c5f17=VisuMZ['BattleSystemSTB'][_0x1527f5(0x1d3)][_0x1527f5(0xb7)];if(!_0x3c5f17[_0x1527f5(0x140)])return;const _0x2f71dc=$gameParty[_0x1527f5(0x14d)]()['filter'](_0x5a5375=>_0x5a5375&&_0x5a5375[_0x1527f5(0xc8)]()&&_0x5a5375[_0x1527f5(0x16e)]())['length'],_0x142814=$gameTroop['members']()['filter'](_0x19e9a6=>_0x19e9a6&&_0x19e9a6[_0x1527f5(0xc8)]()&&_0x19e9a6[_0x1527f5(0x16e)]())[_0x1527f5(0x22d)],_0x14ea04=this[_0x1527f5(0x1e8)](_0x2f71dc,_0x142814);this[_0x1527f5(0x24f)]=_0x14ea04['x'],this[_0x1527f5(0x18f)]=_0x14ea04['y'];if(this['_targetHomeX']!==this['_homeX']||this[_0x1527f5(0x18f)]!==this[_0x1527f5(0x266)]){if(_0x1527f5(0x10e)==='yUYGc')this['_homeDuration']=_0x3c5f17[_0x1527f5(0x231)];else{const _0x263799=_0xe486ff[_0x1527f5(0x1a3)]()[_0x1527f5(0x123)](_0x1e193a=>_0x1e193a[_0x1527f5(0x16e)]()),_0x4a1c92=_0x263799[_0x1527f5(0x123)](_0x48f0ca=>_0x48f0ca['isSTBExploited']());return _0x263799[_0x1527f5(0x22d)]===_0x4a1c92[_0x1527f5(0x22d)];}}};