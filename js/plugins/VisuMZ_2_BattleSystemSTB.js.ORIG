//=============================================================================
// VisuStella MZ - Battle System - STB - Standard Turn Battle
// VisuMZ_2_BattleSystemSTB.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_BattleSystemSTB = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BattleSystemSTB = VisuMZ.BattleSystemSTB || {};
VisuMZ.BattleSystemSTB.version = 1.09;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.09] [BattleSystemSTB]
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
 *   JS: Initial Speed:
 *   - Code used to calculate initial speed at the start of battle.
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
 * @param Mechanics:struct
 * @text Mechanics Settings
 * @type struct<Mechanics>
 * @desc Determines the mechanics of the STB Battle System.
 * @default {"Speed":"","InitialSpeedJS:func":"\"// Declare Constants\\nconst agi = this.subject().agi;\\n\\n// Create Speed\\nlet speed = agi;\\nif (this.allowRandomSpeed()) {\\n    speed += Math.randomInt(Math.floor(5 + agi / 4));\\n}\\n\\n// Return Speed\\nreturn speed;\"","NextTurnSpeedSpeedJS:func":"\"// Declare Constants\\nconst agi = this.subject().agi;\\n\\n// Create Speed\\nlet speed = agi;\\nif (this.allowRandomSpeed()) {\\n    speed += Math.randomInt(Math.floor(5 + agi / 4));\\n}\\nif (this.item()) {\\n    speed += this.item().speed;\\n}\\nif (this.isAttack()) {\\n    speed += this.subject().attackSpeed();\\n}\\n\\n// Return Speed\\nreturn speed;\""}
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
 * Mechanics Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Mechanics:
 *
 * @param Speed
 *
 * @param InitialSpeedJS:func
 * @text JS: Initial Speed
 * @parent Speed
 * @type note
 * @desc Code used to calculate initial speed at the start of battle.
 * @default "// Declare Constants\nconst agi = this.subject().agi;\n\n// Create Speed\nlet speed = agi;\nif (this.allowRandomSpeed()) {\n    speed += Math.randomInt(Math.floor(5 + agi / 4));\n}\n\n// Return Speed\nreturn speed;"
 *
 * @param NextTurnSpeedSpeedJS:func
 * @text JS: Next Turn Speed
 * @parent Speed
 * @type note
 * @desc Code used to calculate speed for a following turn.
 * @default "// Declare Constants\nconst agi = this.subject().agi;\n\n// Create Speed\nlet speed = agi;\nif (this.allowRandomSpeed()) {\n    speed += Math.randomInt(Math.floor(5 + agi / 4));\n}\nif (this.item()) {\n    speed += this.item().speed;\n}\nif (this.isAttack()) {\n    speed += this.subject().attackSpeed();\n}\n\n// Return Speed\nreturn speed;"
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

const _0x4c40=['165139RyddcV','_turnOrderContainer','hasSvBattler','right','unshift','onTurnEnd','enemy','Game_System_initialize','_partyCommandWindow','remove','createInitialPositions','BattleManager_finishActorInput','BattleManager_battleSys','hide','808474cFnJjY','updateGraphic','processTurn','TurnOrder','version','AnimationID','visible','_graphicEnemy','Scene_Battle_createActorCommandWindow','CannotBeExploited','BattleManager_startInput','%1SystemBorder','Game_BattlerBase_appear','left','makeActionOrders','calcElementRate','format','isTpb','setupTextPopup','SpriteThin','description','ExploitEleRate','drawText','Settings','startInput','_forceAction','item','faceHeight','Mechanics','round','clearSTB','DisplayPosition','_graphicIconIndex','StbTurnOrderActorIcon','aliveMembers','_subject','center','isActor','Game_BattlerBase_initMembers','stepForward','includes','Exploit','changeIconGraphicBitmap','_stbTurnOrderIconIndex','createBattlerSprites','setSTBExploited','ShowMarkerBorder','_scene','sort','createBattlerRect','EnemyBattlerFontSize','startFade','setup','isTurnBased','CenterHorz','EnemyBattlerFaceName','width','updateLetter','defaultPosition','ActorBattlerIcon','currentClass','Game_Battler_makeSpeed','createTurnOrderSTBGraphicIconIndex','battlerName','clearSTBExploit','ARRAYNUM','RepositionTopHelpY','displayExploitedEffects','FlashColor','setSTBGraphicIconIndex','ARRAYEVAL','battleEnd','_fullHeight','setItem','RepositionTopHelpX','close','MaxVertSprites','755031lrzYWC','name','indexOf','areAllActorsExploited','appear','ARRAYJSON','_stbTurnOrderGraphicType','BattleManager_makeActionOrders','BattleManager_processTurn','UpdateFrames','parse','ExploitEleWeakness','blt','battler','addSTBNextTurnSpeed','performSTBExploiter','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','actions','calculateTargetPositions','bitmapWidth','Game_Action_speed','createTestBitmap','STR','setBlendColor','changeFaceGraphicBitmap','StbTurnOrderClearEnemyGraphic','isSTB','opacity','areAllEnemiesExploited','members','getChildIndex','createActorCommandWindowSTB','BattleManager_selectNextActor','_statusWindow','_plural','StbTurnOrderEnemyIcon','faceWidth','SubjectDistance','STRUCT','_helpWindow','loadFace','Game_Party_removeActor','_isAppeared','BattleSystemSTB','Window_Help_setItem','StbTurnOrderActorFace','startActorInput','clear','Scene_Battle_commandFight','initHomePositions','TurnResetExploits','_unit','parameters','EVAL','startTurn','createBackgroundSprite','updateHomePosition','call','EnemyBattlerDrawLetter','updatePadding','TurnOrderSTBGraphicFaceName','_positionDuration','executeDamageSTB','height','JSON','updateSelectionEffect','2MzAVSL','stbGainInstant','stbCannotBeExploited','commandCancelSTB','applyGlobal','133436AsLpum','icon','setSTBNextTurnSpeed','_index','updateSidePosition','createTurnOrderSTBGraphicType','bind','_letterSprite','_graphicType','FUNC','toUpperCase','PopupText','friendsUnit','ParseStateData','_fadeTarget','1048089ebnawX','Scene_Battle_createAllWindows','#000000','commandCancel','TurnOrderSTBGraphicIconIndex','_position','CustomJS','_containerWidth','_homeX','_ogWindowLayerX','_handlers','isActionValid','createBorderSprite','makeSTBSpeed','Game_Actor_selectNextCommand','Game_Battler_onTurnEnd','containerPosition','loadSystem','RepositionTopForHelp','boxHeight','result','mainSprite','Game_BattlerBase_hide','battlerHue','selectNextActor','initialize','changeEnemyGraphicBitmap','removeActionBattlersSTB','_stbTurnOrderWindow','BattleManager_isTpb','endActionSTB','_windowLayer','max','BattleManager_isTurnBased','isAlive','AddedStates','getSTBNextTurnSpeed','battleSys','min','checkOpacity','map','_currentActor','STB','Game_Battler_onBattleStart','makeSpeed','_speed','speed','TurnOrderSTBGraphicFaceIndex','ScreenBuffer','isActiveTpb','cancel','isImmortal','_ogWindowLayerY','addChild','setSTBExploitedFlag','IconSet','updateBattleContainerOrder','_positionTargetY','%1BorderColor','windowRect','TurnOrderSTBGraphicType','canInput','EnemyBattlerFaceIndex','_targetHomeX','addState','_stbTurnOrderVisible','createActorCommandWindow','updateTurnOrderSTB','updateVisibility','padding','isEnemy','FaceName','isPartyCommandWindowDisabled','_stbTurnOrderFaceName','isBattleSystemSTBTurnOrderVisible','floor','InitialSpeedJS','bitmap','maxBattleMembers','selectNextActorSTB','trim','executeDamage','EnemyBattlerType','createSTBTurnOrderWindow','becomeSTBExploited','push','prototype','_backgroundSprite','svBattlerName','isSTBExploited','_inputting','_turnOrderInnerSprite','performActionEndSTB','_stbNextTurnSpeed','ConvertParams','updateTurnOrder','vsEnemiesFullExploit','233072nbHiDx','RepositionLogWindow','_stbExploitAdvantageFlag','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','fontSize','hasSTBExploited','svactor','createGraphicSprite','_stateIDs','setBattleSystemSTBTurnOrderVisible','filter','bitmapHeight','FaceIndex','startActorCommandSelection','ceil','391028QIWHMV','_forcedBattlers','RegExp','processTurnSTB','_phase','Actor','face','split','updateOpacity','BattleManager_isActiveTpb','fontFace','finishActorInput','MaxHorzSprites','DisplayOffsetX','ARRAYSTRUCT','repositionLogWindowSTB','_homeY','constructor','changeSvActorGraphicBitmap','_stbTurnOrderFaceIndex','commandFight','initMembersBattleSystemSTB','vsActorsFullExploit','Enemy','boxWidth','%1BgColor1','_graphicSv','Exploited','%1SystemBg','bottom','selectNextCommand','updatePosition','_isBattleOver','ExtraActions','initMembers','_positionTargetX','fillRect','clearTurnOrderSTBGraphics','compareBattlerSprites','createTurnOrderSTBGraphicFaceIndex','isSTBExploitSystemEnabled','traitObjects','clearRect','SystemTurnOrderVisibility','anchor','_actorCommandWindow','BattleManager_endAction','_stbExploited','isHorz','_graphicFaceName','faceName','Mirror','canMove','applyGlobalBattleSystemSTB','gradientFillRect','ExploiterStates','setText','endAction','clearSTBNextTurnSpeed','getStateIdWithName','update','registerCommand','_surprise','loadEnemy','startInputSTB','_letter','performCollapse','Enemies','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','onBattleStart','selectAllActions','match','reserveCommonEvent','checkPosition','_isAlive','Game_Action_executeDamage','containerWindow','Game_Battler_performCollapse','note','_actionBattlers','stbExploitedStates','Exploiter','processUpdateGraphic','isSceneBattle','performActionEnd','actor','Mute','_fullWidth','loadSvActor','getColor','_graphicSprite','removeActor','Game_Battler_performActionEnd','StbTurnOrderEnemyFace','addLoadListener','IconIndex','getBattleSystem','status','SpriteLength','NUM','EnemyBattlerFontFace','top','_graphicHue','subject','createAllWindows','isAppeared','Actors','stbExploiterStates','stbCannotBeExploiter','_targetHomeY','OrderDirection','addInnerChild','initBattleSystemSTB','_homeDuration','createLetterSprite','length','addChildAt','some','_graphicFaceIndex','updateGraphicHue','StbTurnOrderClearActorGraphic','_fadeDuration','Game_Action_clear'];const _0x22c5=function(_0x41af19,_0x38f6e3){_0x41af19=_0x41af19-0xd7;let _0x4c406e=_0x4c40[_0x41af19];return _0x4c406e;};const _0xf44193=_0x22c5;(function(_0x14fec6,_0x44b1b5){const _0x5bd8fb=_0x22c5;while(!![]){try{const _0x4194c5=parseInt(_0x5bd8fb(0xd7))+parseInt(_0x5bd8fb(0x1df))+-parseInt(_0x5bd8fb(0x1d1))+parseInt(_0x5bd8fb(0x156))+parseInt(_0x5bd8fb(0x22c))+parseInt(_0x5bd8fb(0x26e))*-parseInt(_0x5bd8fb(0x147))+-parseInt(_0x5bd8fb(0xe6));if(_0x4194c5===_0x44b1b5)break;else _0x14fec6['push'](_0x14fec6['shift']());}catch(_0xdf30eb){_0x14fec6['push'](_0x14fec6['shift']());}}}(_0x4c40,0x63c15));var label=_0xf44193(0x257),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0xf44193(0x151)](function(_0x3dd876){const _0x4d48e8=_0xf44193;return _0x3dd876[_0x4d48e8(0x1b7)]&&_0x3dd876[_0x4d48e8(0x1f3)]['includes']('['+label+']');})[0x0];VisuMZ[label][_0xf44193(0x1f6)]=VisuMZ[label]['Settings']||{},VisuMZ[_0xf44193(0x144)]=function(_0x29ba0,_0x5bc92d){const _0x4d77fe=_0xf44193;for(const _0x59a6c0 in _0x5bc92d){if(_0x59a6c0[_0x4d77fe(0x19d)](/(.*):(.*)/i)){const _0x43768a=String(RegExp['$1']),_0x39440d=String(RegExp['$2'])[_0x4d77fe(0xe1)]()['trim']();let _0x59906a,_0x28cb7c,_0x148e65;switch(_0x39440d){case _0x4d77fe(0x1b9):_0x59906a=_0x5bc92d[_0x59a6c0]!==''?Number(_0x5bc92d[_0x59a6c0]):0x0;break;case _0x4d77fe(0x220):_0x28cb7c=_0x5bc92d[_0x59a6c0]!==''?JSON['parse'](_0x5bc92d[_0x59a6c0]):[],_0x59906a=_0x28cb7c['map'](_0x3acec8=>Number(_0x3acec8));break;case _0x4d77fe(0x261):_0x59906a=_0x5bc92d[_0x59a6c0]!==''?eval(_0x5bc92d[_0x59a6c0]):null;break;case _0x4d77fe(0x225):_0x28cb7c=_0x5bc92d[_0x59a6c0]!==''?JSON[_0x4d77fe(0x236)](_0x5bc92d[_0x59a6c0]):[],_0x59906a=_0x28cb7c[_0x4d77fe(0x10e)](_0x297277=>eval(_0x297277));break;case _0x4d77fe(0x26c):_0x59906a=_0x5bc92d[_0x59a6c0]!==''?JSON[_0x4d77fe(0x236)](_0x5bc92d[_0x59a6c0]):'';break;case _0x4d77fe(0x231):_0x28cb7c=_0x5bc92d[_0x59a6c0]!==''?JSON[_0x4d77fe(0x236)](_0x5bc92d[_0x59a6c0]):[],_0x59906a=_0x28cb7c['map'](_0x71e0fd=>JSON[_0x4d77fe(0x236)](_0x71e0fd));break;case _0x4d77fe(0xe0):_0x59906a=_0x5bc92d[_0x59a6c0]!==''?new Function(JSON[_0x4d77fe(0x236)](_0x5bc92d[_0x59a6c0])):new Function('return\x200');break;case'ARRAYFUNC':_0x28cb7c=_0x5bc92d[_0x59a6c0]!==''?JSON[_0x4d77fe(0x236)](_0x5bc92d[_0x59a6c0]):[],_0x59906a=_0x28cb7c[_0x4d77fe(0x10e)](_0x26ab0f=>new Function(JSON[_0x4d77fe(0x236)](_0x26ab0f)));break;case _0x4d77fe(0x242):_0x59906a=_0x5bc92d[_0x59a6c0]!==''?String(_0x5bc92d[_0x59a6c0]):'';break;case'ARRAYSTR':_0x28cb7c=_0x5bc92d[_0x59a6c0]!==''?JSON[_0x4d77fe(0x236)](_0x5bc92d[_0x59a6c0]):[],_0x59906a=_0x28cb7c['map'](_0x27d5b6=>String(_0x27d5b6));break;case _0x4d77fe(0x252):_0x148e65=_0x5bc92d[_0x59a6c0]!==''?JSON[_0x4d77fe(0x236)](_0x5bc92d[_0x59a6c0]):{},_0x59906a=VisuMZ[_0x4d77fe(0x144)]({},_0x148e65);break;case _0x4d77fe(0x164):_0x28cb7c=_0x5bc92d[_0x59a6c0]!==''?JSON[_0x4d77fe(0x236)](_0x5bc92d[_0x59a6c0]):[],_0x59906a=_0x28cb7c[_0x4d77fe(0x10e)](_0x9f376c=>VisuMZ['ConvertParams']({},JSON[_0x4d77fe(0x236)](_0x9f376c)));break;default:continue;}_0x29ba0[_0x43768a]=_0x59906a;}}return _0x29ba0;},(_0x5fec4c=>{const _0x2e0c72=_0xf44193,_0x1c2cf6=_0x5fec4c[_0x2e0c72(0x22d)];for(const _0x192096 of dependencies){if(!Imported[_0x192096]){alert(_0x2e0c72(0x14a)[_0x2e0c72(0x1ef)](_0x1c2cf6,_0x192096)),SceneManager['exit']();break;}}const _0x5dc711=_0x5fec4c[_0x2e0c72(0x1f3)];if(_0x5dc711[_0x2e0c72(0x19d)](/\[Version[ ](.*?)\]/i)){const _0x29410f=Number(RegExp['$1']);_0x29410f!==VisuMZ[label][_0x2e0c72(0x1e3)]&&(alert(_0x2e0c72(0x19a)['format'](_0x1c2cf6,_0x29410f)),SceneManager['exit']());}if(_0x5dc711[_0x2e0c72(0x19d)](/\[Tier[ ](\d+)\]/i)){const _0x53e204=Number(RegExp['$1']);_0x53e204<tier?(alert(_0x2e0c72(0x23c)[_0x2e0c72(0x1ef)](_0x1c2cf6,_0x53e204,tier)),SceneManager['exit']()):tier=Math[_0x2e0c72(0x106)](_0x53e204,tier);}VisuMZ[_0x2e0c72(0x144)](VisuMZ[label][_0x2e0c72(0x1f6)],_0x5fec4c[_0x2e0c72(0x260)]);})(pluginData),PluginManager[_0xf44193(0x193)](pluginData['name'],_0xf44193(0x200),_0x4be0e7=>{const _0xeadba1=_0xf44193;VisuMZ[_0xeadba1(0x144)](_0x4be0e7,_0x4be0e7);const _0x27f290=_0x4be0e7['Actors'],_0x13e3a4=_0x4be0e7['IconIndex'];for(const _0xef5570 of _0x27f290){const _0x229ffc=$gameActors[_0xeadba1(0x1ab)](_0xef5570);if(!_0x229ffc)continue;_0x229ffc['_stbTurnOrderGraphicType']='icon',_0x229ffc[_0xeadba1(0x20a)]=_0x13e3a4;}}),PluginManager['registerCommand'](pluginData[_0xf44193(0x22d)],_0xf44193(0x259),_0x12b778=>{const _0x3e9dce=_0xf44193;VisuMZ[_0x3e9dce(0x144)](_0x12b778,_0x12b778);const _0x42e311=_0x12b778[_0x3e9dce(0x1c0)],_0x5282b6=_0x12b778[_0x3e9dce(0x12d)],_0x42aefb=_0x12b778[_0x3e9dce(0x153)];for(const _0x254e0e of _0x42e311){const _0x2b976f=$gameActors[_0x3e9dce(0x1ab)](_0x254e0e);if(!_0x2b976f)continue;_0x2b976f[_0x3e9dce(0x232)]=_0x3e9dce(0x15c),_0x2b976f[_0x3e9dce(0x12f)]=_0x5282b6,_0x2b976f[_0x3e9dce(0x169)]=_0x42aefb;}}),PluginManager[_0xf44193(0x193)](pluginData[_0xf44193(0x22d)],_0xf44193(0x1ce),_0x2e7930=>{const _0x25c500=_0xf44193;VisuMZ[_0x25c500(0x144)](_0x2e7930,_0x2e7930);const _0x13fc68=_0x2e7930[_0x25c500(0x1c0)];for(const _0x26f267 of _0x13fc68){const _0x57805d=$gameActors[_0x25c500(0x1ab)](_0x26f267);if(!_0x57805d)continue;_0x57805d[_0x25c500(0x17b)]();}}),PluginManager[_0xf44193(0x193)](pluginData[_0xf44193(0x22d)],_0xf44193(0x24f),_0x14d22e=>{const _0x173f2f=_0xf44193;VisuMZ['ConvertParams'](_0x14d22e,_0x14d22e);const _0xe893a7=_0x14d22e[_0x173f2f(0x199)],_0x1423df=_0x14d22e[_0x173f2f(0x1b5)];for(const _0x19a5dc of _0xe893a7){const _0x1cbbf0=$gameTroop[_0x173f2f(0x249)]()[_0x19a5dc];if(!_0x1cbbf0)continue;_0x1cbbf0[_0x173f2f(0x232)]=_0x173f2f(0xd8),_0x1cbbf0[_0x173f2f(0x20a)]=_0x1423df;}}),PluginManager['registerCommand'](pluginData[_0xf44193(0x22d)],_0xf44193(0x1b3),_0x1aef24=>{const _0x4c822d=_0xf44193;VisuMZ['ConvertParams'](_0x1aef24,_0x1aef24);const _0x3d016c=_0x1aef24['Enemies'],_0x5905ee=_0x1aef24['FaceName'],_0x58aa32=_0x1aef24[_0x4c822d(0x153)];for(const _0x2d10da of _0x3d016c){const _0x12d3bb=$gameTroop['members']()[_0x2d10da];if(!_0x12d3bb)continue;_0x12d3bb[_0x4c822d(0x232)]=_0x4c822d(0x15c),_0x12d3bb[_0x4c822d(0x12f)]=_0x5905ee,_0x12d3bb[_0x4c822d(0x169)]=_0x58aa32;}}),PluginManager[_0xf44193(0x193)](pluginData['name'],_0xf44193(0x245),_0x588474=>{const _0x6ba60=_0xf44193;VisuMZ['ConvertParams'](_0x588474,_0x588474);const _0x3bd623=_0x588474['Enemies'];for(const _0x1023b5 of _0x3bd623){const _0x558679=$gameTroop[_0x6ba60(0x249)]()[_0x1023b5];if(!_0x558679)continue;_0x558679['clearTurnOrderSTBGraphics']();}}),PluginManager[_0xf44193(0x193)](pluginData[_0xf44193(0x22d)],_0xf44193(0x181),_0x2c9a44=>{const _0x59ac04=_0xf44193;VisuMZ[_0x59ac04(0x144)](_0x2c9a44,_0x2c9a44);const _0x39423a=_0x2c9a44['Visible'];$gameSystem['setBattleSystemSTBTurnOrderVisible'](_0x39423a);}),VisuMZ[_0xf44193(0x257)][_0xf44193(0x158)]={'Instant':/<STB (?:INSTANT|INSTANT CAST|Instant Use)>/i,'CannotBeExploited':/<STB CANNOT BE EXPLOITED>/i,'CannotBeExploiter':/<STB CANNOT BE EXPLOITER>/i,'ExploitedStates':/<STB EXPLOITED GAIN (?:STATE|STATES):[ ](.*)>/i,'ExploiterStates':/<STB EXPLOITER GAIN (?:STATE|STATES):[ ](.*)>/i},DataManager[_0xf44193(0x191)]=function(_0x555113){const _0x64ebd5=_0xf44193;_0x555113=_0x555113['toUpperCase']()[_0x64ebd5(0x136)](),this[_0x64ebd5(0x14f)]=this['_stateIDs']||{};if(this[_0x64ebd5(0x14f)][_0x555113])return this['_stateIDs'][_0x555113];for(const _0x414f18 of $dataStates){if(!_0x414f18)continue;this[_0x64ebd5(0x14f)][_0x414f18[_0x64ebd5(0x22d)][_0x64ebd5(0xe1)]()[_0x64ebd5(0x136)]()]=_0x414f18['id'];}return this[_0x64ebd5(0x14f)][_0x555113]||0x0;},SceneManager[_0xf44193(0x1a9)]=function(){const _0x166bf5=_0xf44193;return this[_0x166bf5(0x20e)]&&this[_0x166bf5(0x20e)][_0x166bf5(0x167)]===Scene_Battle;},VisuMZ[_0xf44193(0x257)][_0xf44193(0x1dd)]=BattleManager[_0xf44193(0x10b)],BattleManager[_0xf44193(0x10b)]=function(){const _0x5564c2=_0xf44193;if(this[_0x5564c2(0x246)]())return'STB';return VisuMZ['BattleSystemSTB'][_0x5564c2(0x1dd)]['call'](this);},BattleManager[_0xf44193(0x246)]=function(){const _0x1772e8=_0xf44193;return $gameSystem[_0x1772e8(0x1b6)]()===_0x1772e8(0x110);},VisuMZ[_0xf44193(0x257)][_0xf44193(0x103)]=BattleManager[_0xf44193(0x1f0)],BattleManager['isTpb']=function(){const _0x4fb588=_0xf44193;if(this[_0x4fb588(0x246)]())return![];return VisuMZ[_0x4fb588(0x257)]['BattleManager_isTpb'][_0x4fb588(0x265)](this);},VisuMZ[_0xf44193(0x257)]['BattleManager_isActiveTpb']=BattleManager[_0xf44193(0x117)],BattleManager['isActiveTpb']=function(){const _0x35ca12=_0xf44193;if(this[_0x35ca12(0x246)]())return![];return VisuMZ[_0x35ca12(0x257)][_0x35ca12(0x15f)]['call'](this);},VisuMZ[_0xf44193(0x257)][_0xf44193(0x107)]=BattleManager['isTurnBased'],BattleManager[_0xf44193(0x214)]=function(){const _0x4724dc=_0xf44193;if(this[_0x4724dc(0x246)]())return!![];return VisuMZ[_0x4724dc(0x257)][_0x4724dc(0x107)]['call'](this);},VisuMZ[_0xf44193(0x257)][_0xf44193(0x1e9)]=BattleManager['startInput'],BattleManager[_0xf44193(0x1f7)]=function(){const _0x1c5e8d=_0xf44193;VisuMZ['BattleSystemSTB'][_0x1c5e8d(0x1e9)]['call'](this);if(this[_0x1c5e8d(0x246)]()&&$gameParty['canInput']()&&!this[_0x1c5e8d(0x194)])this[_0x1c5e8d(0x196)]();},BattleManager[_0xf44193(0x196)]=function(){const _0x433893=_0xf44193;this[_0x433893(0x262)]();},VisuMZ[_0xf44193(0x257)][_0xf44193(0x234)]=BattleManager[_0xf44193(0x1e1)],BattleManager[_0xf44193(0x1e1)]=function(){const _0x21d5c2=_0xf44193;this[_0x21d5c2(0x246)]()?this[_0x21d5c2(0x159)]():VisuMZ['BattleSystemSTB'][_0x21d5c2(0x234)]['call'](this);},BattleManager[_0xf44193(0x159)]=function(){const _0x359c64=_0xf44193,_0xeec9ab=this[_0x359c64(0x202)];if(_0xeec9ab[_0x359c64(0x204)]()&&_0xeec9ab[_0x359c64(0x123)]()){const _0x35fc1b=_0xeec9ab['currentAction']();if(!_0x35fc1b)VisuMZ[_0x359c64(0x257)][_0x359c64(0x234)][_0x359c64(0x265)](this);else _0x35fc1b[_0x359c64(0x1f8)]?VisuMZ[_0x359c64(0x257)][_0x359c64(0x234)][_0x359c64(0x265)](this):(this['_currentActor']=_0xeec9ab,this[_0x359c64(0x25a)]());}else VisuMZ[_0x359c64(0x257)][_0x359c64(0x234)][_0x359c64(0x265)](this);},VisuMZ['BattleSystemSTB'][_0xf44193(0x1dc)]=BattleManager[_0xf44193(0x161)],BattleManager['finishActorInput']=function(){const _0x25e6d4=_0xf44193;this[_0x25e6d4(0x246)]()?VisuMZ[_0x25e6d4(0x257)][_0x25e6d4(0x234)]['call'](this):VisuMZ['BattleSystemSTB'][_0x25e6d4(0x1dc)]['call'](this);},VisuMZ['BattleSystemSTB'][_0xf44193(0x24c)]=BattleManager[_0xf44193(0xfe)],BattleManager[_0xf44193(0xfe)]=function(){const _0x3a2dfe=_0xf44193;this[_0x3a2dfe(0x246)]()?this[_0x3a2dfe(0x135)]():VisuMZ[_0x3a2dfe(0x257)][_0x3a2dfe(0x24c)]['call'](this);},BattleManager[_0xf44193(0x135)]=function(){const _0x2f4dac=_0xf44193;this[_0x2f4dac(0x10f)]=null,this[_0x2f4dac(0x140)]=![];},VisuMZ[_0xf44193(0x257)][_0xf44193(0x184)]=BattleManager[_0xf44193(0x18f)],BattleManager[_0xf44193(0x18f)]=function(){const _0xfca400=_0xf44193;VisuMZ[_0xfca400(0x257)][_0xfca400(0x184)][_0xfca400(0x265)](this),this[_0xfca400(0x104)]();},BattleManager[_0xf44193(0x104)]=function(){const _0xbaecaa=_0xf44193;if(!this[_0xbaecaa(0x246)]())return;this[_0xbaecaa(0x101)]();this[_0xbaecaa(0x157)][_0xbaecaa(0x1c9)]>0x0&&(this[_0xbaecaa(0x202)]&&(!this['_actionBattlers'][_0xbaecaa(0x207)](this[_0xbaecaa(0x202)])&&this[_0xbaecaa(0x1a5)][_0xbaecaa(0x1d5)](this[_0xbaecaa(0x202)])),this[_0xbaecaa(0x202)]=this['getNextSubject']());;},BattleManager[_0xf44193(0x17e)]=function(){const _0x4f624d=_0xf44193;return VisuMZ[_0x4f624d(0x257)][_0x4f624d(0x1f6)][_0x4f624d(0x208)]['EnableExploit'];},BattleManager[_0xf44193(0x22f)]=function(){const _0x19bc3e=_0xf44193,_0x6633b3=$gameParty[_0x19bc3e(0x201)]()[_0x19bc3e(0x151)](_0x4238e1=>_0x4238e1[_0x19bc3e(0x1bf)]()),_0x4eb5c4=_0x6633b3[_0x19bc3e(0x151)](_0x561bb8=>_0x561bb8['isSTBExploited']());return _0x6633b3[_0x19bc3e(0x1c9)]===_0x4eb5c4['length'];},BattleManager[_0xf44193(0x248)]=function(){const _0x161c8b=_0xf44193,_0x1f2082=$gameTroop[_0x161c8b(0x201)]()[_0x161c8b(0x151)](_0x32f841=>_0x32f841[_0x161c8b(0x1bf)]()),_0x11209f=_0x1f2082[_0x161c8b(0x151)](_0x482c92=>_0x482c92[_0x161c8b(0x13f)]());return _0x1f2082[_0x161c8b(0x1c9)]===_0x11209f[_0x161c8b(0x1c9)];},VisuMZ[_0xf44193(0x257)][_0xf44193(0x233)]=BattleManager[_0xf44193(0x1ed)],BattleManager[_0xf44193(0x1ed)]=function(){const _0x5433d8=_0xf44193;VisuMZ['BattleSystemSTB']['BattleManager_makeActionOrders'][_0x5433d8(0x265)](this),this[_0x5433d8(0x246)]()&&this[_0x5433d8(0x129)]();},BattleManager[_0xf44193(0x101)]=function(){const _0x3040de=_0xf44193;if(!this[_0x3040de(0x246)]())return;this[_0x3040de(0x1a5)]=this[_0x3040de(0x1a5)]||[],this['_actionBattlers']=this[_0x3040de(0x1a5)][_0x3040de(0x151)](_0x5d41e2=>_0x5d41e2&&_0x5d41e2[_0x3040de(0x1bf)]()&&_0x5d41e2['isAlive']()),this[_0x3040de(0x129)]();},BattleManager[_0xf44193(0x129)]=function(_0x257acd){const _0x30f597=_0xf44193;if(!this[_0x30f597(0x246)]())return;const _0x13b8bd=SceneManager[_0x30f597(0x20e)]['_stbTurnOrderWindow'];if(!_0x13b8bd)return;_0x13b8bd[_0x30f597(0x145)](_0x257acd);},VisuMZ[_0xf44193(0x257)]['Game_System_initialize']=Game_System[_0xf44193(0x13c)][_0xf44193(0xff)],Game_System[_0xf44193(0x13c)][_0xf44193(0xff)]=function(){const _0x533d38=_0xf44193;VisuMZ[_0x533d38(0x257)][_0x533d38(0x1d8)][_0x533d38(0x265)](this),this[_0x533d38(0x1c6)]();},Game_System[_0xf44193(0x13c)][_0xf44193(0x1c6)]=function(){const _0x223c00=_0xf44193;this[_0x223c00(0x127)]=!![];},Game_System[_0xf44193(0x13c)][_0xf44193(0x130)]=function(){const _0x305bed=_0xf44193;return this[_0x305bed(0x127)]===undefined&&this['initBattleSystemSTB'](),this['_stbTurnOrderVisible'];},Game_System[_0xf44193(0x13c)][_0xf44193(0x150)]=function(_0x3b04aa){const _0x1857c8=_0xf44193;this[_0x1857c8(0x127)]===undefined&&this['initBattleSystemSTB'](),this['_stbTurnOrderVisible']=_0x3b04aa;},VisuMZ['BattleSystemSTB'][_0xf44193(0x240)]=Game_Action['prototype']['speed'],Game_Action[_0xf44193(0x13c)][_0xf44193(0x114)]=function(){const _0xe36c10=_0xf44193;return BattleManager[_0xe36c10(0x246)]()?0x0:VisuMZ['BattleSystemSTB'][_0xe36c10(0x240)][_0xe36c10(0x265)](this);},VisuMZ[_0xf44193(0x257)]['Game_Action_applyGlobal']=Game_Action[_0xf44193(0x13c)][_0xf44193(0x272)],Game_Action[_0xf44193(0x13c)][_0xf44193(0x272)]=function(){const _0x5c102d=_0xf44193;VisuMZ['BattleSystemSTB']['Game_Action_applyGlobal'][_0x5c102d(0x265)](this),this['applyGlobalBattleSystemSTB']();},Game_Action[_0xf44193(0x13c)][_0xf44193(0x18b)]=function(){const _0x2c5771=_0xf44193;if(!SceneManager[_0x2c5771(0x1a9)]())return;if(!BattleManager[_0x2c5771(0x246)]())return;const _0x47a29c=this[_0x2c5771(0x1f9)](),_0x2c8e3a=VisuMZ[_0x2c5771(0x257)][_0x2c5771(0x158)],_0x21df63=VisuMZ['BattleSystemSTB'][_0x2c5771(0x1f6)][_0x2c5771(0x1fb)];_0x47a29c&&_0x47a29c[_0x2c5771(0x1a4)]['match'](_0x2c8e3a['Instant'])&&this['subject']()[_0x2c5771(0x26f)](0x1);const _0x3d7d8d=_0x21df63['NextTurnSpeedSpeedJS'][_0x2c5771(0x265)](this);this[_0x2c5771(0x1bd)]()[_0x2c5771(0x23a)](_0x3d7d8d);},VisuMZ['BattleSystemSTB'][_0xf44193(0x1d0)]=Game_Action[_0xf44193(0x13c)][_0xf44193(0x25b)],Game_Action[_0xf44193(0x13c)]['clear']=function(){const _0xae15f7=_0xf44193;VisuMZ[_0xae15f7(0x257)][_0xae15f7(0x1d0)][_0xae15f7(0x265)](this),this[_0xae15f7(0x1fd)]();},Game_Action[_0xf44193(0x13c)][_0xf44193(0x1fd)]=function(){const _0x300551=_0xf44193;this[_0x300551(0x149)]=![];},Game_Action['prototype'][_0xf44193(0x14c)]=function(){const _0x53ab31=_0xf44193;return this[_0x53ab31(0x149)]===undefined&&this[_0x53ab31(0x1fd)](),this['_stbExploitAdvantageFlag'];},Game_Action[_0xf44193(0x13c)][_0xf44193(0x11c)]=function(_0x59646e){const _0x5d3c17=_0xf44193;this[_0x5d3c17(0x149)]===undefined&&this[_0x5d3c17(0x1fd)](),this[_0x5d3c17(0x149)]=_0x59646e;},VisuMZ[_0xf44193(0x257)][_0xf44193(0x1a1)]=Game_Action[_0xf44193(0x13c)][_0xf44193(0x137)],Game_Action[_0xf44193(0x13c)][_0xf44193(0x137)]=function(_0x242d70,_0x4dc2ea){const _0x279798=_0xf44193;VisuMZ['BattleSystemSTB']['Game_Action_executeDamage'][_0x279798(0x265)](this,_0x242d70,_0x4dc2ea),this['executeDamageSTB'](_0x242d70);},Game_Action[_0xf44193(0x13c)][_0xf44193(0x26a)]=function(_0xd58608){const _0x4b44e6=_0xf44193;if(!SceneManager['isSceneBattle']())return;if(!BattleManager['isSTB']())return;if(!BattleManager['isSTBExploitSystemEnabled']())return;if(_0xd58608[_0x4b44e6(0xe3)]()===this[_0x4b44e6(0x1bd)]()[_0x4b44e6(0xe3)]())return;const _0x44e613=VisuMZ[_0x4b44e6(0x257)][_0x4b44e6(0x1f6)][_0x4b44e6(0x208)],_0x50f774=_0xd58608[_0x4b44e6(0xfa)]();_0x44e613['ExploitCritical']&&_0x50f774['critical']&&(this[_0x4b44e6(0x1bd)]()[_0x4b44e6(0x23b)](_0xd58608,this),_0xd58608[_0x4b44e6(0x13a)](this[_0x4b44e6(0x1bd)](),this));if(_0x44e613[_0x4b44e6(0x237)]){const _0x63e628=this[_0x4b44e6(0x1ee)](_0xd58608);_0x63e628>=_0x44e613[_0x4b44e6(0x1f4)]&&(this[_0x4b44e6(0x1bd)]()['performSTBExploiter'](_0xd58608,this),_0xd58608['becomeSTBExploited'](this[_0x4b44e6(0x1bd)](),this));}},VisuMZ[_0xf44193(0x257)][_0xf44193(0x205)]=Game_BattlerBase[_0xf44193(0x13c)]['initMembers'],Game_BattlerBase[_0xf44193(0x13c)][_0xf44193(0x178)]=function(){const _0x5d1327=_0xf44193;VisuMZ[_0x5d1327(0x257)][_0x5d1327(0x205)][_0x5d1327(0x265)](this),this[_0x5d1327(0x16b)]();},Game_BattlerBase[_0xf44193(0x13c)]['initMembersBattleSystemSTB']=function(){const _0xac3138=_0xf44193;this[_0xac3138(0x190)](),this[_0xac3138(0x21f)]();},Game_BattlerBase[_0xf44193(0x13c)][_0xf44193(0x190)]=function(){const _0x57476b=_0xf44193;this[_0x57476b(0x143)]=0x0;},Game_BattlerBase[_0xf44193(0x13c)][_0xf44193(0x10a)]=function(){const _0x21d419=_0xf44193;return this[_0x21d419(0x143)]===undefined&&this[_0x21d419(0x16b)](),this[_0x21d419(0x143)];},Game_BattlerBase[_0xf44193(0x13c)][_0xf44193(0xd9)]=function(_0x303d50){const _0x98f883=_0xf44193;this[_0x98f883(0x143)]===undefined&&this[_0x98f883(0x16b)](),this['_stbNextTurnSpeed']=_0x303d50;},Game_BattlerBase[_0xf44193(0x13c)][_0xf44193(0x23a)]=function(_0x5ef3f6){const _0xcd85bf=_0xf44193;this[_0xcd85bf(0x143)]===undefined&&this['initMembersBattleSystemSTB'](),_0x5ef3f6+=this[_0xcd85bf(0x10a)](),this[_0xcd85bf(0xd9)](_0x5ef3f6);},Game_BattlerBase[_0xf44193(0x13c)][_0xf44193(0x21f)]=function(){const _0xda7dd8=_0xf44193;this[_0xda7dd8(0x185)]=![];},Game_BattlerBase[_0xf44193(0x13c)][_0xf44193(0x13f)]=function(){const _0x22a843=_0xf44193;return this['_stbExploited']===undefined&&this['initMembersBattleSystemSTB'](),this[_0x22a843(0x185)];},Game_BattlerBase[_0xf44193(0x13c)][_0xf44193(0x20c)]=function(_0x3c2ccb){const _0x5bd617=_0xf44193;this[_0x5bd617(0x185)]===undefined&&this[_0x5bd617(0x16b)](),this['_stbExploited']=_0x3c2ccb;},Game_BattlerBase[_0xf44193(0x13c)][_0xf44193(0x270)]=function(){const _0x3383ec=_0xf44193,_0x20e57d=VisuMZ[_0x3383ec(0x257)][_0x3383ec(0x158)][_0x3383ec(0x1e8)];return this[_0x3383ec(0x17f)]()[_0x3383ec(0x1cb)](_0x3d4c0a=>_0x3d4c0a['note']['match'](_0x20e57d));},Game_BattlerBase[_0xf44193(0x13c)][_0xf44193(0x1c2)]=function(){const _0x2abb34=_0xf44193,_0x125bfc=VisuMZ[_0x2abb34(0x257)][_0x2abb34(0x158)]['CannotBeExploiter'];return this[_0x2abb34(0x17f)]()[_0x2abb34(0x1cb)](_0x34b2d7=>_0x34b2d7[_0x2abb34(0x1a4)][_0x2abb34(0x19d)](_0x125bfc));},Game_BattlerBase[_0xf44193(0x13c)]['clearTurnOrderSTBGraphics']=function(){const _0xd3a649=_0xf44193;delete this[_0xd3a649(0x232)],delete this['_stbTurnOrderFaceName'],delete this['_stbTurnOrderFaceIndex'],delete this[_0xd3a649(0x20a)];},Game_BattlerBase[_0xf44193(0x13c)][_0xf44193(0x122)]=function(){const _0x1ff08d=_0xf44193;return this[_0x1ff08d(0x232)]===undefined&&(this['_stbTurnOrderGraphicType']=this[_0x1ff08d(0xdc)]()),this[_0x1ff08d(0x232)];},Game_BattlerBase[_0xf44193(0x13c)][_0xf44193(0xdc)]=function(){const _0x46ac5c=_0xf44193;return Window_STB_TurnOrder[_0x46ac5c(0x1f6)][_0x46ac5c(0x138)];},Game_BattlerBase[_0xf44193(0x13c)]['TurnOrderSTBGraphicFaceName']=function(){const _0x283c77=_0xf44193;return this[_0x283c77(0x12f)]===undefined&&(this[_0x283c77(0x12f)]=this['createTurnOrderSTBGraphicFaceName']()),this['_stbTurnOrderFaceName'];},Game_BattlerBase[_0xf44193(0x13c)]['createTurnOrderSTBGraphicFaceName']=function(){const _0x25c74e=_0xf44193;return Window_STB_TurnOrder[_0x25c74e(0x1f6)][_0x25c74e(0x216)];},Game_BattlerBase['prototype'][_0xf44193(0x115)]=function(){const _0x155bba=_0xf44193;return this[_0x155bba(0x169)]===undefined&&(this[_0x155bba(0x169)]=this[_0x155bba(0x17d)]()),this[_0x155bba(0x169)];},Game_BattlerBase[_0xf44193(0x13c)]['createTurnOrderSTBGraphicFaceIndex']=function(){const _0x4910bb=_0xf44193;return Window_STB_TurnOrder[_0x4910bb(0x1f6)][_0x4910bb(0x124)];},Game_BattlerBase[_0xf44193(0x13c)][_0xf44193(0xea)]=function(){const _0x149627=_0xf44193;return this[_0x149627(0x20a)]===undefined&&(this[_0x149627(0x20a)]=this[_0x149627(0x21d)]()),this[_0x149627(0x20a)];},Game_BattlerBase[_0xf44193(0x13c)][_0xf44193(0x21d)]=function(){const _0x486e64=_0xf44193;return Window_STB_TurnOrder[_0x486e64(0x1f6)]['EnemyBattlerIcon'];},Game_BattlerBase['prototype'][_0xf44193(0x224)]=function(_0x1561dd){this['_stbTurnOrderIconIndex']=_0x1561dd;},VisuMZ['BattleSystemSTB']['Game_BattlerBase_hide']=Game_BattlerBase[_0xf44193(0x13c)][_0xf44193(0x1de)],Game_BattlerBase[_0xf44193(0x13c)]['hide']=function(){const _0x239bd8=_0xf44193;VisuMZ[_0x239bd8(0x257)][_0x239bd8(0xfc)][_0x239bd8(0x265)](this),BattleManager[_0x239bd8(0x101)]();},VisuMZ[_0xf44193(0x257)]['Game_BattlerBase_appear']=Game_BattlerBase[_0xf44193(0x13c)][_0xf44193(0x230)],Game_BattlerBase[_0xf44193(0x13c)][_0xf44193(0x230)]=function(){const _0x4e9d71=_0xf44193;VisuMZ[_0x4e9d71(0x257)][_0x4e9d71(0x1eb)]['call'](this),BattleManager['removeActionBattlersSTB']();},VisuMZ['BattleSystemSTB'][_0xf44193(0x1a3)]=Game_Battler[_0xf44193(0x13c)][_0xf44193(0x198)],Game_Battler[_0xf44193(0x13c)][_0xf44193(0x198)]=function(){const _0x509f7c=_0xf44193;VisuMZ['BattleSystemSTB'][_0x509f7c(0x1a3)][_0x509f7c(0x265)](this),BattleManager[_0x509f7c(0x101)]();},VisuMZ['BattleSystemSTB'][_0xf44193(0x111)]=Game_Battler['prototype'][_0xf44193(0x19b)],Game_Battler['prototype'][_0xf44193(0x19b)]=function(_0x53e231){const _0x3cebc7=_0xf44193;VisuMZ[_0x3cebc7(0x257)][_0x3cebc7(0x111)][_0x3cebc7(0x265)](this,_0x53e231),this['onBattleStartSTB'](_0x53e231);},Game_Battler['prototype']['onBattleStartSTB']=function(_0x488dae){const _0x54111a=_0xf44193;if(!BattleManager[_0x54111a(0x246)]())return;this[_0x54111a(0x21f)]();const _0x33ef87=new Game_Action(this),_0x1a5204=VisuMZ[_0x54111a(0x257)][_0x54111a(0x1f6)][_0x54111a(0x1fb)][_0x54111a(0x132)][_0x54111a(0x265)](_0x33ef87);this[_0x54111a(0xd9)](_0x1a5204);},VisuMZ[_0xf44193(0x257)][_0xf44193(0xf5)]=Game_Battler[_0xf44193(0x13c)][_0xf44193(0x1d6)],Game_Battler[_0xf44193(0x13c)]['onTurnEnd']=function(){const _0x4b8c22=_0xf44193;VisuMZ[_0x4b8c22(0x257)][_0x4b8c22(0xf5)][_0x4b8c22(0x265)](this),BattleManager[_0x4b8c22(0x246)]()&&VisuMZ[_0x4b8c22(0x257)][_0x4b8c22(0x1f6)][_0x4b8c22(0x208)][_0x4b8c22(0x25e)]&&this[_0x4b8c22(0x21f)]();},VisuMZ[_0xf44193(0x257)][_0xf44193(0x1b2)]=Game_Battler[_0xf44193(0x13c)][_0xf44193(0x1aa)],Game_Battler['prototype'][_0xf44193(0x1aa)]=function(){const _0x12c804=_0xf44193;VisuMZ[_0x12c804(0x257)][_0x12c804(0x1b2)][_0x12c804(0x265)](this),BattleManager[_0x12c804(0x246)]()&&this[_0x12c804(0x142)]();},Game_Battler[_0xf44193(0x13c)]['performActionEndSTB']=function(){const _0x342ff7=_0xf44193;if(this['numActions']()>0x0&&this===BattleManager[_0x342ff7(0x202)]){const _0x4b162b=BattleManager['_forcedBattlers'];if(_0x4b162b[_0x342ff7(0x1c9)]>0x0&&_0x4b162b[0x0]!==this)return;const _0x2fd858=this['battler']();if(_0x2fd858)_0x2fd858[_0x342ff7(0x206)]();}},VisuMZ['BattleSystemSTB'][_0xf44193(0x21c)]=Game_Battler[_0xf44193(0x13c)][_0xf44193(0x112)],Game_Battler[_0xf44193(0x13c)]['makeSpeed']=function(){const _0x429320=_0xf44193;BattleManager[_0x429320(0x246)]()?this['makeSTBSpeed']():VisuMZ['BattleSystemSTB'][_0x429320(0x21c)][_0x429320(0x265)](this);},Game_Battler[_0xf44193(0x13c)][_0xf44193(0xf3)]=function(){const _0xe4460d=_0xf44193;this[_0xe4460d(0x113)]=this[_0xe4460d(0x10a)](),this['setSTBNextTurnSpeed'](0x0);},Game_Battler['prototype'][_0xf44193(0x1a6)]=function(){const _0x49efaa=_0xf44193,_0x11e01b=this['isActor']()?this[_0x49efaa(0x21b)]()[_0x49efaa(0x1a4)]:this[_0x49efaa(0x1d7)]()[_0x49efaa(0x1a4)];if(_0x11e01b[_0x49efaa(0x19d)](VisuMZ[_0x49efaa(0x257)][_0x49efaa(0x158)]['ExploitedStates']))return VisuMZ[_0x49efaa(0x257)][_0x49efaa(0xe4)](RegExp['$1']);return VisuMZ[_0x49efaa(0x257)][_0x49efaa(0x1f6)][_0x49efaa(0x171)][_0x49efaa(0x109)]||[];},Game_Battler[_0xf44193(0x13c)][_0xf44193(0x1c1)]=function(){const _0x714854=_0xf44193,_0x38eca0=this[_0x714854(0x204)]()?this[_0x714854(0x21b)]()[_0x714854(0x1a4)]:this['enemy']()[_0x714854(0x1a4)];if(_0x38eca0[_0x714854(0x19d)](VisuMZ[_0x714854(0x257)][_0x714854(0x158)][_0x714854(0x18d)]))return VisuMZ[_0x714854(0x257)][_0x714854(0xe4)](RegExp['$1']);return VisuMZ[_0x714854(0x257)][_0x714854(0x1f6)]['Exploiter'][_0x714854(0x109)]||[];},VisuMZ[_0xf44193(0x257)][_0xf44193(0xe4)]=function(_0x236f1e){const _0x55515b=_0xf44193,_0x1d4bd7=_0x236f1e[_0x55515b(0x15d)](','),_0x2e05e2=[];for(let _0x2f9e1b of _0x1d4bd7){_0x2f9e1b=(String(_0x2f9e1b)||'')['trim']();const _0x3a500c=/^\d+$/['test'](_0x2f9e1b);_0x3a500c?_0x2e05e2['push'](Number(_0x2f9e1b)):_0x2e05e2[_0x55515b(0x13b)](DataManager['getStateIdWithName'](_0x2f9e1b));}return _0x2e05e2;},Game_Battler[_0xf44193(0x13c)][_0xf44193(0x13a)]=function(_0x318fab,_0xdee178){const _0x2a3fea=_0xf44193;if(!BattleManager[_0x2a3fea(0x246)]())return;if(!BattleManager['isSTBExploitSystemEnabled']())return;if(this[_0x2a3fea(0x13f)]())return;const _0xa205d6=VisuMZ[_0x2a3fea(0x257)]['Settings']['Exploited'];!_0xa205d6['UnlimitedExploits']&&this[_0x2a3fea(0x20c)](!![]);if(this['stbCannotBeExploited']())return;if(this['hp']<=0x0)return;this[_0x2a3fea(0x222)](_0xa205d6);if(this['hp']>0x0||!this[_0x2a3fea(0x119)]())for(const _0x11e749 of this[_0x2a3fea(0x1a6)]()){if(!$dataStates[_0x11e749])continue;this['addState'](_0x11e749);}_0xa205d6['CustomJS']&&_0xa205d6[_0x2a3fea(0xec)]['call'](this,_0x318fab,_0xdee178);if(this['isActor']()&&BattleManager[_0x2a3fea(0x22f)]()){const _0x4d9cd0=_0xa205d6[_0x2a3fea(0x16c)];_0x4d9cd0>0x0&&$dataCommonEvents[_0x4d9cd0]&&$gameTemp[_0x2a3fea(0x19e)](_0x4d9cd0);}else{if(this['isEnemy']()&&BattleManager['areAllEnemiesExploited']()){const _0x43f333=_0xa205d6[_0x2a3fea(0x146)];_0x43f333>0x0&&$dataCommonEvents[_0x43f333]&&$gameTemp[_0x2a3fea(0x19e)](_0x43f333);}}},Game_Battler[_0xf44193(0x13c)][_0xf44193(0x23b)]=function(_0xdec78f,_0x2b06d0){const _0x384efe=_0xf44193;if(!BattleManager['isSTB']())return;if(!BattleManager[_0x384efe(0x17e)]())return;if(_0x2b06d0['hasSTBExploited']())return;if(_0xdec78f[_0x384efe(0x13f)]())return;const _0x4c9047=VisuMZ[_0x384efe(0x257)][_0x384efe(0x1f6)][_0x384efe(0x1a7)];!_0x4c9047['MultipleExploits']&&_0x2b06d0['setSTBExploitedFlag'](!![]);if(this[_0x384efe(0x1c2)]())return;this[_0x384efe(0x222)](_0x4c9047);_0x4c9047['ExtraActions']>0x0&&this['stbGainInstant'](_0x4c9047[_0x384efe(0x177)]);for(const _0x323d65 of this[_0x384efe(0x1c1)]()){if(!$dataStates[_0x323d65])continue;this[_0x384efe(0x126)](_0x323d65);}_0x4c9047[_0x384efe(0xec)]&&_0x4c9047['CustomJS']['call'](this,_0xdec78f,_0x2b06d0);},Game_Battler[_0xf44193(0x13c)][_0xf44193(0x222)]=function(_0x82f0fd){const _0x496a48=_0xf44193;if(!_0x82f0fd)return;if(_0x82f0fd[_0x496a48(0x1e4)]){const _0x3c37a8=_0x82f0fd[_0x496a48(0x1e4)],_0x41db0d=_0x82f0fd[_0x496a48(0x189)],_0x269639=_0x82f0fd[_0x496a48(0x1ac)];$gameTemp['requestFauxAnimation']([this],_0x3c37a8,_0x41db0d,_0x269639);}if(this[_0x496a48(0x239)]()&&_0x82f0fd[_0x496a48(0xe2)][_0x496a48(0x1c9)]>0x0){const _0x1b6d04=_0x82f0fd[_0x496a48(0xe2)],_0x6efc8d={'textColor':ColorManager[_0x496a48(0x1af)](_0x82f0fd['TextColor']),'flashColor':_0x82f0fd[_0x496a48(0x223)],'flashDuration':_0x82f0fd['FlashDuration']};this[_0x496a48(0x1f1)](_0x1b6d04,_0x6efc8d);}},Game_Battler[_0xf44193(0x13c)]['stbGainInstant']=function(_0x377247){const _0x6fdcb0=_0xf44193;this['_actions']=this['_actions']||[];if(this[_0x6fdcb0(0x18a)]()){for(let _0x30ae38=0x0;_0x30ae38<_0x377247;_0x30ae38++){this['_actions'][_0x6fdcb0(0x13b)](new Game_Action(this));}if(this[_0x6fdcb0(0x12c)]()){const _0x4cdcf1=this[_0x6fdcb0(0x1d7)]()[_0x6fdcb0(0x23d)]['filter'](_0x4bfc93=>this[_0x6fdcb0(0xf1)](_0x4bfc93));_0x4cdcf1[_0x6fdcb0(0x1c9)]>0x0&&this[_0x6fdcb0(0x19c)](_0x4cdcf1);}}},VisuMZ[_0xf44193(0x257)][_0xf44193(0xf4)]=Game_Actor[_0xf44193(0x13c)]['selectNextCommand'],Game_Actor[_0xf44193(0x13c)][_0xf44193(0x174)]=function(){const _0x53a7ad=_0xf44193;if(BattleManager['isSTB']()){if(this[_0x53a7ad(0x239)]())this['battler']()[_0x53a7ad(0x206)]();return![];}return VisuMZ[_0x53a7ad(0x257)][_0x53a7ad(0xf4)][_0x53a7ad(0x265)](this);},Game_Actor[_0xf44193(0x13c)]['createTurnOrderSTBGraphicType']=function(){const _0xf0ec24=_0xf44193,_0x4307=this[_0xf0ec24(0x1ab)]()[_0xf0ec24(0x1a4)];if(_0x4307[_0xf0ec24(0x19d)](/<STB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return _0xf0ec24(0x15c);else{if(_0x4307[_0xf0ec24(0x19d)](/<STB TURN ORDER ICON:[ ](\d+)>/i))return _0xf0ec24(0xd8);}return Window_STB_TurnOrder['Settings']['ActorBattlerType'];},Game_Actor['prototype'][_0xf44193(0x268)]=function(){const _0x409e54=_0xf44193,_0x5c16df=this[_0x409e54(0x1ab)]()[_0x409e54(0x1a4)];if(_0x5c16df[_0x409e54(0x19d)](/<STB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return String(RegExp['$1']);return this[_0x409e54(0x188)]();},Game_Actor[_0xf44193(0x13c)][_0xf44193(0x115)]=function(){const _0x1c653e=_0xf44193,_0x111439=this[_0x1c653e(0x1ab)]()[_0x1c653e(0x1a4)];if(_0x111439[_0x1c653e(0x19d)](/<STB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return Number(RegExp['$2']);return this['faceIndex']();},Game_Actor[_0xf44193(0x13c)][_0xf44193(0x21d)]=function(){const _0x22fcb3=_0xf44193,_0x44728f=this['actor']()['note'];if(_0x44728f['match'](/<STB TURN ORDER ICON:[ ](\d+)>/i))return Number(RegExp['$1']);return Window_STB_TurnOrder[_0x22fcb3(0x1f6)][_0x22fcb3(0x21a)];},Game_Enemy[_0xf44193(0x13c)]['createTurnOrderSTBGraphicType']=function(){const _0x2204a5=_0xf44193,_0x1aa6ed=this[_0x2204a5(0x1d7)]()[_0x2204a5(0x1a4)];if(_0x1aa6ed[_0x2204a5(0x19d)](/<STB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return'face';else{if(_0x1aa6ed[_0x2204a5(0x19d)](/<STB TURN ORDER ICON:[ ](\d+)>/i))return _0x2204a5(0xd8);}return Window_STB_TurnOrder['Settings'][_0x2204a5(0x138)];},Game_Enemy['prototype']['createTurnOrderSTBGraphicFaceName']=function(){const _0xcbf301=_0xf44193,_0x38f73a=this['enemy']()[_0xcbf301(0x1a4)];if(_0x38f73a['match'](/<STB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return String(RegExp['$1']);return Window_STB_TurnOrder[_0xcbf301(0x1f6)][_0xcbf301(0x216)];},Game_Enemy['prototype']['createTurnOrderSTBGraphicFaceIndex']=function(){const _0x4bfa2a=_0xf44193,_0x1574c9=this[_0x4bfa2a(0x1d7)]()[_0x4bfa2a(0x1a4)];if(_0x1574c9[_0x4bfa2a(0x19d)](/<STB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return Number(RegExp['$2']);return Window_STB_TurnOrder[_0x4bfa2a(0x1f6)][_0x4bfa2a(0x124)];},Game_Enemy[_0xf44193(0x13c)][_0xf44193(0x21d)]=function(){const _0x4ba72b=_0xf44193,_0x51e410=this['enemy']()[_0x4ba72b(0x1a4)];if(_0x51e410[_0x4ba72b(0x19d)](/<STB TURN ORDER ICON:[ ](\d+)>/i))return Number(RegExp['$1']);return Window_STB_TurnOrder[_0x4ba72b(0x1f6)]['EnemyBattlerIcon'];},VisuMZ[_0xf44193(0x257)][_0xf44193(0x255)]=Game_Party[_0xf44193(0x13c)][_0xf44193(0x1b1)],Game_Party['prototype'][_0xf44193(0x1b1)]=function(_0x574226){const _0x2f513d=_0xf44193;VisuMZ['BattleSystemSTB'][_0x2f513d(0x255)]['call'](this,_0x574226),SceneManager['isSceneBattle']()&&BattleManager[_0x2f513d(0x246)]()&&BattleManager['_actionBattlers'][_0x2f513d(0x1da)]($gameActors[_0x2f513d(0x1ab)](_0x574226));},VisuMZ[_0xf44193(0x257)][_0xf44193(0x1e7)]=Scene_Battle[_0xf44193(0x13c)][_0xf44193(0x128)],Scene_Battle[_0xf44193(0x13c)][_0xf44193(0x128)]=function(){const _0x1767e4=_0xf44193;VisuMZ['BattleSystemSTB']['Scene_Battle_createActorCommandWindow'][_0x1767e4(0x265)](this),BattleManager[_0x1767e4(0x246)]()&&this[_0x1767e4(0x24b)]();},Scene_Battle[_0xf44193(0x13c)][_0xf44193(0x24b)]=function(){const _0x19b2f7=_0xf44193,_0x2f616a=this[_0x19b2f7(0x183)];this[_0x19b2f7(0x12e)]()&&delete _0x2f616a[_0x19b2f7(0xf0)][_0x19b2f7(0x118)];},VisuMZ[_0xf44193(0x257)]['Scene_Battle_commandCancel']=Scene_Battle[_0xf44193(0x13c)]['commandCancel'],Scene_Battle[_0xf44193(0x13c)][_0xf44193(0xe9)]=function(){const _0x54baec=_0xf44193;BattleManager[_0x54baec(0x246)]()?this[_0x54baec(0x271)]():VisuMZ['BattleSystemSTB']['Scene_Battle_commandCancel'][_0x54baec(0x265)](this);},Scene_Battle['prototype'][_0xf44193(0x271)]=function(){const _0x4f7036=_0xf44193;this[_0x4f7036(0x1d9)][_0x4f7036(0x213)](),this[_0x4f7036(0x183)][_0x4f7036(0x22a)]();},VisuMZ['BattleSystemSTB'][_0xf44193(0x25c)]=Scene_Battle[_0xf44193(0x13c)][_0xf44193(0x16a)],Scene_Battle['prototype'][_0xf44193(0x16a)]=function(){const _0x2f5e36=_0xf44193;BattleManager[_0x2f5e36(0x246)]()?this[_0x2f5e36(0x154)]():VisuMZ[_0x2f5e36(0x257)]['Scene_Battle_commandFight'][_0x2f5e36(0x265)](this);},VisuMZ[_0xf44193(0x257)][_0xf44193(0xe7)]=Scene_Battle[_0xf44193(0x13c)][_0xf44193(0x1be)],Scene_Battle[_0xf44193(0x13c)][_0xf44193(0x1be)]=function(){const _0x10b60a=_0xf44193;VisuMZ['BattleSystemSTB']['Scene_Battle_createAllWindows']['call'](this),this[_0x10b60a(0x139)]();},Scene_Battle[_0xf44193(0x13c)][_0xf44193(0x139)]=function(){const _0x3b0ca0=_0xf44193;if(!BattleManager[_0x3b0ca0(0x246)]())return;this[_0x3b0ca0(0x102)]=new Window_STB_TurnOrder();const _0xb6d6f6=this[_0x3b0ca0(0x24a)](this[_0x3b0ca0(0x105)]);this[_0x3b0ca0(0x1ca)](this[_0x3b0ca0(0x102)],_0xb6d6f6),this[_0x3b0ca0(0x165)](),BattleManager[_0x3b0ca0(0x129)](!![]);},Scene_Battle[_0xf44193(0x13c)][_0xf44193(0x165)]=function(){const _0x18a44a=_0xf44193,_0x27614b=Window_STB_TurnOrder['Settings'];if(_0x27614b[_0x18a44a(0x1fe)]!=='top')return;if(!_0x27614b[_0x18a44a(0x148)])return;if(!this['_logWindow'])return;const _0x4f998e=this[_0x18a44a(0x102)]['y']-Math[_0x18a44a(0x1fc)]((Graphics[_0x18a44a(0x26b)]-Graphics[_0x18a44a(0xf9)])/0x2),_0x2928e6=_0x4f998e+this['_stbTurnOrderWindow'][_0x18a44a(0x26b)];this['_logWindow']['y']=_0x2928e6+_0x27614b[_0x18a44a(0x116)];};function Sprite_STB_TurnOrder_Battler(){const _0x2eb518=_0xf44193;this[_0x2eb518(0xff)](...arguments);}Sprite_STB_TurnOrder_Battler[_0xf44193(0x13c)]=Object['create'](Sprite_Clickable[_0xf44193(0x13c)]),Sprite_STB_TurnOrder_Battler[_0xf44193(0x13c)]['constructor']=Sprite_STB_TurnOrder_Battler,Sprite_STB_TurnOrder_Battler['prototype']['initialize']=function(_0x2f4498,_0x2379fb){const _0x34803b=_0xf44193;this[_0x34803b(0x178)](_0x2f4498,_0x2379fb),Sprite_Clickable['prototype']['initialize']['call'](this),this[_0x34803b(0x247)]=0x0,this['createChildren'](),this['checkOpacity']();},Sprite_STB_TurnOrder_Battler[_0xf44193(0x13c)][_0xf44193(0x178)]=function(_0x5ec4ee,_0x3306a8){const _0xdb0a73=_0xf44193;this[_0xdb0a73(0x25f)]=_0x5ec4ee,this[_0xdb0a73(0xda)]=_0x3306a8;const _0x53f4c5=Window_STB_TurnOrder[_0xdb0a73(0x1f6)],_0x3975c2=this[_0xdb0a73(0x186)](),_0x134f33=this[_0xdb0a73(0x219)]();this[_0xdb0a73(0x269)]=0x0,this[_0xdb0a73(0x179)]=_0x3975c2?_0x53f4c5[_0xdb0a73(0x1f2)]*_0x134f33:0x0,this[_0xdb0a73(0x11f)]=_0x3975c2?0x0:_0x53f4c5[_0xdb0a73(0x1f2)]*_0x134f33,this[_0xdb0a73(0x1cf)]=0x0,this['_fadeTarget']=0xff,this[_0xdb0a73(0x1a0)]=![],this[_0xdb0a73(0x256)]=![],this['_containerWidth']=0x0,this['_containerHeight']=0x0;},Sprite_STB_TurnOrder_Battler[_0xf44193(0x13c)]['createChildren']=function(){const _0x4a00dd=_0xf44193;this[_0x4a00dd(0x1db)](),this['createBackgroundSprite'](),this['createGraphicSprite'](),this[_0x4a00dd(0xf2)](),this[_0x4a00dd(0x1c8)]();},Sprite_STB_TurnOrder_Battler[_0xf44193(0x13c)][_0xf44193(0x1db)]=function(){const _0x11b2cc=_0xf44193;this['x']=this['_positionTargetX'],this['y']=this[_0x11b2cc(0x11f)];},Sprite_STB_TurnOrder_Battler['prototype'][_0xf44193(0x186)]=function(){const _0x3a7eb5=_0xf44193,_0x72f755=Window_STB_TurnOrder[_0x3a7eb5(0x1f6)],_0x97f83a=[_0x3a7eb5(0x1bb),_0x3a7eb5(0x173)][_0x3a7eb5(0x207)](_0x72f755[_0x3a7eb5(0x1fe)]);return _0x97f83a;},Sprite_STB_TurnOrder_Battler[_0xf44193(0x13c)][_0xf44193(0x23f)]=function(){const _0x291e43=_0xf44193,_0x16f85e=Window_STB_TurnOrder[_0x291e43(0x1f6)];return this[_0x291e43(0x186)]()?_0x16f85e[_0x291e43(0x1f2)]:_0x16f85e[_0x291e43(0x1b8)];},Sprite_STB_TurnOrder_Battler[_0xf44193(0x13c)][_0xf44193(0x152)]=function(){const _0x308661=_0xf44193,_0x5ca942=Window_STB_TurnOrder[_0x308661(0x1f6)];return this[_0x308661(0x186)]()?_0x5ca942[_0x308661(0x1b8)]:_0x5ca942[_0x308661(0x1f2)];},Sprite_STB_TurnOrder_Battler[_0xf44193(0x13c)][_0xf44193(0x241)]=function(){const _0x503dcf=_0xf44193;this[_0x503dcf(0x133)]=new Bitmap(0x48,0x24);const _0x1a370a=this[_0x503dcf(0x239)]()?this[_0x503dcf(0x239)]()[_0x503dcf(0x22d)]():'%1\x20%2\x20%3'[_0x503dcf(0x1ef)](this[_0x503dcf(0x25f)],this['_index']);this[_0x503dcf(0x133)][_0x503dcf(0x1f5)](_0x1a370a,0x0,0x0,0x48,0x24,_0x503dcf(0x203));},Sprite_STB_TurnOrder_Battler[_0xf44193(0x13c)][_0xf44193(0x263)]=function(){const _0x1c0e6f=_0xf44193;if(!Window_STB_TurnOrder[_0x1c0e6f(0x1f6)]['ShowMarkerBg'])return;const _0x273a41=Window_STB_TurnOrder[_0x1c0e6f(0x1f6)],_0x40f357=this[_0x1c0e6f(0x25f)]===$gameParty?_0x1c0e6f(0x15b):_0x1c0e6f(0x16d),_0x2f142d=_0x1c0e6f(0x172)[_0x1c0e6f(0x1ef)](_0x40f357),_0x329095=new Sprite();_0x329095[_0x1c0e6f(0x182)]['x']=this[_0x1c0e6f(0x182)]['x'],_0x329095['anchor']['y']=this[_0x1c0e6f(0x182)]['y'];if(_0x273a41[_0x2f142d])_0x329095[_0x1c0e6f(0x133)]=ImageManager[_0x1c0e6f(0xf7)](_0x273a41[_0x2f142d]);else{const _0x432776=this['bitmapWidth'](),_0x2de01b=this[_0x1c0e6f(0x152)]();_0x329095[_0x1c0e6f(0x133)]=new Bitmap(_0x432776,_0x2de01b);const _0x17dfca=ColorManager[_0x1c0e6f(0x1af)](_0x273a41[_0x1c0e6f(0x16f)[_0x1c0e6f(0x1ef)](_0x40f357)]),_0x5e1118=ColorManager[_0x1c0e6f(0x1af)](_0x273a41['%1BgColor2'[_0x1c0e6f(0x1ef)](_0x40f357)]);_0x329095[_0x1c0e6f(0x133)][_0x1c0e6f(0x18c)](0x0,0x0,_0x432776,_0x2de01b,_0x17dfca,_0x5e1118,!![]);}this['_backgroundSprite']=_0x329095,this[_0x1c0e6f(0x11b)](this['_backgroundSprite']),this[_0x1c0e6f(0x217)]=this[_0x1c0e6f(0x13d)][_0x1c0e6f(0x217)],this[_0x1c0e6f(0x26b)]=this['_backgroundSprite']['height'];},Sprite_STB_TurnOrder_Battler[_0xf44193(0x13c)][_0xf44193(0x14e)]=function(){const _0x2a9420=_0xf44193,_0x44eb98=new Sprite();_0x44eb98['anchor']['x']=this['anchor']['x'],_0x44eb98[_0x2a9420(0x182)]['y']=this[_0x2a9420(0x182)]['y'],this[_0x2a9420(0x1b0)]=_0x44eb98,this[_0x2a9420(0x11b)](this[_0x2a9420(0x1b0)]),this[_0x2a9420(0x1a8)]();},Sprite_STB_TurnOrder_Battler[_0xf44193(0x13c)]['createBorderSprite']=function(){const _0x4dc4d4=_0xf44193;if(!Window_STB_TurnOrder[_0x4dc4d4(0x1f6)][_0x4dc4d4(0x20d)])return;const _0x4072d4=Window_STB_TurnOrder[_0x4dc4d4(0x1f6)],_0x2472f1=this[_0x4dc4d4(0x25f)]===$gameParty?_0x4dc4d4(0x15b):_0x4dc4d4(0x16d),_0x4820b0=_0x4dc4d4(0x1ea)['format'](_0x2472f1),_0x5463fc=new Sprite();_0x5463fc[_0x4dc4d4(0x182)]['x']=this[_0x4dc4d4(0x182)]['x'],_0x5463fc['anchor']['y']=this[_0x4dc4d4(0x182)]['y'];if(_0x4072d4[_0x4820b0])_0x5463fc[_0x4dc4d4(0x133)]=ImageManager[_0x4dc4d4(0xf7)](_0x4072d4[_0x4820b0]);else{let _0x1a91cf=this[_0x4dc4d4(0x23f)](),_0x4295ed=this[_0x4dc4d4(0x152)](),_0x3c7188=_0x4072d4['BorderThickness'];_0x5463fc[_0x4dc4d4(0x133)]=new Bitmap(_0x1a91cf,_0x4295ed);const _0x41615d=_0x4dc4d4(0xe8),_0x6fbad9=ColorManager[_0x4dc4d4(0x1af)](_0x4072d4[_0x4dc4d4(0x120)[_0x4dc4d4(0x1ef)](_0x2472f1)]);_0x5463fc[_0x4dc4d4(0x133)]['fillRect'](0x0,0x0,_0x1a91cf,_0x4295ed,_0x41615d),_0x1a91cf-=0x2,_0x4295ed-=0x2,_0x5463fc[_0x4dc4d4(0x133)][_0x4dc4d4(0x17a)](0x1,0x1,_0x1a91cf,_0x4295ed,_0x6fbad9),_0x1a91cf-=_0x3c7188*0x2,_0x4295ed-=_0x3c7188*0x2,_0x5463fc['bitmap'][_0x4dc4d4(0x17a)](0x1+_0x3c7188,0x1+_0x3c7188,_0x1a91cf,_0x4295ed,_0x41615d),_0x1a91cf-=0x2,_0x4295ed-=0x2,_0x3c7188+=0x1,_0x5463fc[_0x4dc4d4(0x133)][_0x4dc4d4(0x180)](0x1+_0x3c7188,0x1+_0x3c7188,_0x1a91cf,_0x4295ed);}this[_0x4dc4d4(0x13d)]=_0x5463fc,this[_0x4dc4d4(0x11b)](this['_backgroundSprite']);},Sprite_STB_TurnOrder_Battler[_0xf44193(0x13c)]['createLetterSprite']=function(){const _0xcb2144=_0xf44193,_0x8fbfff=Window_STB_TurnOrder[_0xcb2144(0x1f6)];if(!_0x8fbfff[_0xcb2144(0x266)])return;if(this[_0xcb2144(0x25f)]===$gameParty)return;const _0x5c49e9=this[_0xcb2144(0x23f)](),_0x19d14b=this[_0xcb2144(0x152)](),_0x222bd6=new Sprite();_0x222bd6['anchor']['x']=this[_0xcb2144(0x182)]['x'],_0x222bd6[_0xcb2144(0x182)]['y']=this[_0xcb2144(0x182)]['y'],_0x222bd6[_0xcb2144(0x133)]=new Bitmap(_0x5c49e9,_0x19d14b),this[_0xcb2144(0xde)]=_0x222bd6,this[_0xcb2144(0x11b)](this['_letterSprite']);},Sprite_STB_TurnOrder_Battler[_0xf44193(0x13c)][_0xf44193(0x239)]=function(){const _0x5666ed=_0xf44193;return this[_0x5666ed(0x25f)]?this['_unit'][_0x5666ed(0x249)]()[this[_0x5666ed(0xda)]]:null;},Sprite_STB_TurnOrder_Battler[_0xf44193(0x13c)]['update']=function(){const _0x57b696=_0xf44193;Sprite_Clickable['prototype'][_0x57b696(0x192)]['call'](this),this[_0x57b696(0x19f)](),this[_0x57b696(0x175)](),this['checkOpacity'](),this[_0x57b696(0x15e)](),this[_0x57b696(0x1e0)](),this[_0x57b696(0x1cd)](),this[_0x57b696(0x218)](),this[_0x57b696(0x26d)]();},Sprite_STB_TurnOrder_Battler[_0xf44193(0x13c)][_0xf44193(0x19f)]=function(){const _0x1a6041=_0xf44193,_0x3f14b6=this['containerPosition']();if(this[_0x1a6041(0xeb)]===_0x3f14b6)return;this[_0x1a6041(0xeb)]=_0x3f14b6;this[_0x1a6041(0x247)]<0xff&&this['battler']()&&_0x3f14b6!==this[_0x1a6041(0x219)]()&&this[_0x1a6041(0x212)](0xff);if(_0x3f14b6===this[_0x1a6041(0x219)]()&&this['_fadeDuration']<=0x0&&this[_0x1a6041(0x247)]>0x0)this['startFade'](0x0);else this[_0x1a6041(0x1cf)]<=0x0&&this[_0x1a6041(0x247)]<0xff&&this[_0x1a6041(0x10d)]();this[_0x1a6041(0x23e)]();},Sprite_STB_TurnOrder_Battler['prototype']['checkTargetPositions']=function(){const _0x5607a9=_0xf44193,_0x59dce3=this[_0x5607a9(0x1a2)]();if(!_0x59dce3)return;let _0x4085ae=![];if(this[_0x5607a9(0xed)]!==_0x59dce3[_0x5607a9(0x217)])_0x4085ae=!![];else this['_containerHeight']!==_0x59dce3[_0x5607a9(0x26b)]&&(_0x4085ae=!![]);_0x4085ae&&this[_0x5607a9(0x23e)]();},Sprite_STB_TurnOrder_Battler[_0xf44193(0x13c)][_0xf44193(0x23e)]=function(){const _0x253a13=_0xf44193,_0x4555c8=Window_STB_TurnOrder[_0x253a13(0x1f6)],_0x1eb9cf=this[_0x253a13(0x186)](),_0x528af7=_0x4555c8['OrderDirection'],_0x1b13ed=_0x4555c8[_0x253a13(0x251)],_0x1392e1=SceneManager[_0x253a13(0x20e)][_0x253a13(0x102)];if(!_0x1392e1)return;const _0x4c71aa=this[_0x253a13(0xf6)]();this[_0x253a13(0x269)]=_0x4555c8[_0x253a13(0x235)],this[_0x253a13(0x179)]=_0x1eb9cf?_0x4555c8[_0x253a13(0x1f2)]*_0x4c71aa:0x0,this[_0x253a13(0x11f)]=_0x1eb9cf?0x0:_0x4555c8[_0x253a13(0x1f2)]*_0x4c71aa,_0x4c71aa>0x0&&(this[_0x253a13(0x179)]+=_0x1eb9cf?_0x1b13ed:0x0,this[_0x253a13(0x11f)]+=_0x1eb9cf?0x0:_0x1b13ed),_0x528af7?this[_0x253a13(0x179)]=_0x1eb9cf?_0x1392e1[_0x253a13(0x217)]-this[_0x253a13(0x179)]-_0x4555c8['SpriteThin']:0x0:this['_positionTargetY']=_0x1eb9cf?0x0:_0x1392e1[_0x253a13(0x26b)]-this[_0x253a13(0x11f)]-_0x4555c8[_0x253a13(0x1f2)];},Sprite_STB_TurnOrder_Battler['prototype']['updatePosition']=function(){const _0x2b7cb5=_0xf44193;if(this[_0x2b7cb5(0x1cf)]>0x0)return;if(this[_0x2b7cb5(0x269)]>0x0){const _0x302bc8=this[_0x2b7cb5(0x269)];this['x']=(this['x']*(_0x302bc8-0x1)+this[_0x2b7cb5(0x179)])/_0x302bc8,this['y']=(this['y']*(_0x302bc8-0x1)+this[_0x2b7cb5(0x11f)])/_0x302bc8,this['_positionDuration']--;}if(this['_positionDuration']<=0x0){this['x']=this['_positionTargetX'],this['y']=this['_positionTargetY'];if(this[_0x2b7cb5(0x247)]<0xff&&!this[_0x2b7cb5(0x176)]&&this[_0x2b7cb5(0x1cf)]<=0x0){const _0x21a2b0=this[_0x2b7cb5(0x239)]();_0x21a2b0&&(this['_fadeTarget']=_0x21a2b0[_0x2b7cb5(0x108)]()&&_0x21a2b0[_0x2b7cb5(0x1bf)]()?0xff:0x0);}}},Sprite_STB_TurnOrder_Battler[_0xf44193(0x13c)][_0xf44193(0x219)]=function(){const _0x1a9449=_0xf44193,_0x43709e=Window_STB_TurnOrder[_0x1a9449(0x1f6)],_0x2b8235=this[_0x1a9449(0x186)]()?_0x43709e[_0x1a9449(0x162)]:_0x43709e[_0x1a9449(0x22b)];return _0x2b8235+0x1;},Sprite_STB_TurnOrder_Battler[_0xf44193(0x13c)][_0xf44193(0x1a2)]=function(){const _0x69ece5=_0xf44193;return SceneManager[_0x69ece5(0x20e)]['_stbTurnOrderWindow'];},Sprite_STB_TurnOrder_Battler[_0xf44193(0x13c)][_0xf44193(0xf6)]=function(){const _0x43fe97=_0xf44193,_0x466a7d=this[_0x43fe97(0x239)]();if(!_0x466a7d)return this[_0x43fe97(0x219)]();if(_0x466a7d===BattleManager['_subject'])return 0x0;if(BattleManager['_actionBattlers']['includes'](_0x466a7d)){const _0x85165a=BattleManager[_0x43fe97(0x1a5)][_0x43fe97(0x22e)](_0x466a7d)+0x1;return _0x85165a;}return this['defaultPosition']();},Sprite_STB_TurnOrder_Battler[_0xf44193(0x13c)]['startFade']=function(_0x52c520){const _0x528a7d=_0xf44193,_0x28dfe9=Window_STB_TurnOrder['Settings'];this['_fadeDuration']=_0x28dfe9['UpdateFrames'],this[_0x528a7d(0xe5)]=_0x52c520;},Sprite_STB_TurnOrder_Battler[_0xf44193(0x13c)][_0xf44193(0x10d)]=function(){const _0x3e18e6=_0xf44193,_0x34dd14=this[_0x3e18e6(0x239)]();if(!_0x34dd14)return;if(this['_isAlive']===_0x34dd14['isAlive']()&&this[_0x3e18e6(0x256)]===_0x34dd14['isAppeared']())return;this[_0x3e18e6(0x1a0)]=_0x34dd14['isAlive'](),this[_0x3e18e6(0x256)]=_0x34dd14[_0x3e18e6(0x1bf)]();let _0x399b3d=this[_0x3e18e6(0x1a0)]&&this[_0x3e18e6(0x256)]?0xff:0x0;this[_0x3e18e6(0x212)](_0x399b3d);},Sprite_STB_TurnOrder_Battler[_0xf44193(0x13c)][_0xf44193(0x15e)]=function(){const _0x58e9a6=_0xf44193;if(this['_fadeDuration']>0x0){const _0x1ca333=this[_0x58e9a6(0x1cf)];this[_0x58e9a6(0x247)]=(this['opacity']*(_0x1ca333-0x1)+this[_0x58e9a6(0xe5)])/_0x1ca333,this[_0x58e9a6(0x1cf)]--,this[_0x58e9a6(0x1cf)]<=0x0&&(this[_0x58e9a6(0x19f)](),this[_0x58e9a6(0x269)]=0x0,this[_0x58e9a6(0x175)](),this[_0x58e9a6(0x247)]=this[_0x58e9a6(0xe5)]);}if(this['_isBattleOver'])return;BattleManager[_0x58e9a6(0x15a)]===_0x58e9a6(0x226)&&(this[_0x58e9a6(0x176)]=!![],this[_0x58e9a6(0x212)](0x0));},Sprite_STB_TurnOrder_Battler[_0xf44193(0x13c)][_0xf44193(0x1e0)]=function(){const _0x113404=_0xf44193,_0x31d160=this[_0x113404(0x239)]();if(!_0x31d160)return;const _0x291b1d=Window_STB_TurnOrder['Settings'],_0x476d2e=this[_0x113404(0x25f)]===$gameParty?_0x113404(0x15b):_0x113404(0x16d);let _0x2cdc59=_0x31d160[_0x113404(0x122)]();if(_0x31d160[_0x113404(0x204)]()&&_0x2cdc59==='enemy')_0x2cdc59=_0x113404(0x15c);else _0x31d160[_0x113404(0x12c)]()&&_0x2cdc59===_0x113404(0x14d)&&(_0x2cdc59=_0x113404(0x1d7));if(this[_0x113404(0xdf)]!==_0x2cdc59)return this['processUpdateGraphic']();switch(this[_0x113404(0xdf)]){case _0x113404(0x15c):if(this[_0x113404(0x187)]!==_0x31d160['TurnOrderSTBGraphicFaceName']())return this[_0x113404(0x1a8)]();if(this[_0x113404(0x1cc)]!==_0x31d160[_0x113404(0x115)]())return this[_0x113404(0x1a8)]();break;case _0x113404(0xd8):if(this[_0x113404(0x1ff)]!==_0x31d160[_0x113404(0xea)]())return this[_0x113404(0x1a8)]();break;case _0x113404(0x1d7):if(_0x31d160[_0x113404(0x1d3)]()){if(this[_0x113404(0x170)]!==_0x31d160[_0x113404(0x13e)]())return this['processUpdateGraphic']();}else{if(this[_0x113404(0x1e6)]!==_0x31d160[_0x113404(0x21e)]())return this[_0x113404(0x1a8)]();}break;case _0x113404(0x14d):if(_0x31d160['isActor']()){if(this[_0x113404(0x170)]!==_0x31d160['battlerName']())return this[_0x113404(0x1a8)]();}else{if(this[_0x113404(0x1e6)]!==_0x31d160[_0x113404(0x21e)]())return this[_0x113404(0x1a8)]();}break;}},Sprite_STB_TurnOrder_Battler[_0xf44193(0x13c)][_0xf44193(0x1a8)]=function(){const _0x121467=_0xf44193,_0x57d442=this[_0x121467(0x239)]();if(!_0x57d442)return;this[_0x121467(0xdf)]=_0x57d442[_0x121467(0x122)]();if(_0x57d442[_0x121467(0x204)]()&&this[_0x121467(0xdf)]===_0x121467(0x1d7))this[_0x121467(0xdf)]='face';else _0x57d442[_0x121467(0x12c)]()&&this['_graphicType']===_0x121467(0x14d)&&(this['_graphicType']=_0x121467(0x1d7));let _0x43aff5;switch(this[_0x121467(0xdf)]){case _0x121467(0x15c):this[_0x121467(0x187)]=_0x57d442[_0x121467(0x268)](),this['_graphicFaceIndex']=_0x57d442[_0x121467(0x115)](),_0x43aff5=ImageManager[_0x121467(0x254)](this[_0x121467(0x187)]),_0x43aff5['addLoadListener'](this[_0x121467(0x244)][_0x121467(0xdd)](this,_0x43aff5));break;case _0x121467(0xd8):this[_0x121467(0x1ff)]=_0x57d442[_0x121467(0x21d)](),_0x43aff5=ImageManager[_0x121467(0xf7)](_0x121467(0x11d)),_0x43aff5['addLoadListener'](this[_0x121467(0x209)][_0x121467(0xdd)](this,_0x43aff5));break;case _0x121467(0x1d7):if(_0x57d442[_0x121467(0x1d3)]())this['_graphicSv']=_0x57d442[_0x121467(0x13e)](),_0x43aff5=ImageManager[_0x121467(0x1ae)](this[_0x121467(0x170)]),_0x43aff5[_0x121467(0x1b4)](this[_0x121467(0x168)][_0x121467(0xdd)](this,_0x43aff5));else $gameSystem['isSideView']()?(this[_0x121467(0x1e6)]=_0x57d442[_0x121467(0x21e)](),_0x43aff5=ImageManager['loadSvEnemy'](this[_0x121467(0x1e6)]),_0x43aff5['addLoadListener'](this[_0x121467(0x100)]['bind'](this,_0x43aff5))):(this[_0x121467(0x1e6)]=_0x57d442['battlerName'](),_0x43aff5=ImageManager[_0x121467(0x195)](this[_0x121467(0x1e6)]),_0x43aff5[_0x121467(0x1b4)](this[_0x121467(0x100)]['bind'](this,_0x43aff5)));break;case _0x121467(0x14d):this[_0x121467(0x170)]=_0x57d442[_0x121467(0x21e)](),_0x43aff5=ImageManager['loadSvActor'](this[_0x121467(0x170)]),_0x43aff5[_0x121467(0x1b4)](this[_0x121467(0x168)][_0x121467(0xdd)](this,_0x43aff5));break;}},Sprite_STB_TurnOrder_Battler[_0xf44193(0x13c)][_0xf44193(0x244)]=function(_0x29153e){const _0x5749d3=_0xf44193,_0x15bfb7=this['_graphicFaceIndex'],_0x2e524b=this[_0x5749d3(0x23f)](),_0x48eabe=this[_0x5749d3(0x152)](),_0x5a685c=Math[_0x5749d3(0x106)](_0x2e524b,_0x48eabe);this['_graphicSprite'][_0x5749d3(0x133)]=new Bitmap(_0x2e524b,_0x48eabe);const _0x4a025b=this[_0x5749d3(0x1b0)]['bitmap'],_0x146c63=ImageManager[_0x5749d3(0x250)],_0x4457e6=ImageManager[_0x5749d3(0x1fa)],_0x3e61b3=_0x5a685c/Math[_0x5749d3(0x106)](_0x146c63,_0x4457e6),_0x3e95da=ImageManager[_0x5749d3(0x250)],_0x5772b4=ImageManager['faceHeight'],_0x6567fb=_0x15bfb7%0x4*_0x146c63+(_0x146c63-_0x3e95da)/0x2,_0x53a5a3=Math[_0x5749d3(0x131)](_0x15bfb7/0x4)*_0x4457e6+(_0x4457e6-_0x5772b4)/0x2,_0x1e4fbd=(_0x2e524b-_0x146c63*_0x3e61b3)/0x2,_0x5518b0=(_0x48eabe-_0x4457e6*_0x3e61b3)/0x2;_0x4a025b[_0x5749d3(0x238)](_0x29153e,_0x6567fb,_0x53a5a3,_0x3e95da,_0x5772b4,_0x1e4fbd,_0x5518b0,_0x5a685c,_0x5a685c);},Sprite_STB_TurnOrder_Battler[_0xf44193(0x13c)][_0xf44193(0x209)]=function(_0x104e42){const _0x1449b7=_0xf44193,_0x3a3f6a=this[_0x1449b7(0x1ff)],_0x3e8c5e=this[_0x1449b7(0x23f)](),_0x60f380=this[_0x1449b7(0x152)]();this[_0x1449b7(0x1b0)][_0x1449b7(0x133)]=new Bitmap(_0x3e8c5e,_0x60f380);const _0x43a2e4=this[_0x1449b7(0x1b0)]['bitmap'],_0x5c259d=ImageManager['iconWidth'],_0xf240e4=ImageManager['iconHeight'],_0x4b0cf7=Math[_0x1449b7(0x10c)](_0x5c259d,_0xf240e4,_0x3e8c5e,_0x60f380),_0xac0127=_0x3a3f6a%0x10*_0x5c259d,_0xe5472f=Math['floor'](_0x3a3f6a/0x10)*_0xf240e4,_0x2be76a=Math[_0x1449b7(0x131)](Math[_0x1449b7(0x106)](_0x3e8c5e-_0x4b0cf7,0x0)/0x2),_0x7f6253=Math[_0x1449b7(0x131)](Math['max'](_0x60f380-_0x4b0cf7,0x0)/0x2);_0x43a2e4['blt'](_0x104e42,_0xac0127,_0xe5472f,_0x5c259d,_0xf240e4,_0x2be76a,_0x7f6253,_0x4b0cf7,_0x4b0cf7);},Sprite_STB_TurnOrder_Battler[_0xf44193(0x13c)]['changeSvActorGraphicBitmap']=function(_0x58f9a6){const _0x3a6d45=_0xf44193,_0x532fb4=this[_0x3a6d45(0x23f)](),_0x524fa6=this['bitmapHeight'](),_0x67a7e9=Math[_0x3a6d45(0x10c)](_0x532fb4,_0x524fa6);this['_graphicSprite']['bitmap']=new Bitmap(_0x532fb4,_0x524fa6);const _0x5e331f=this[_0x3a6d45(0x1b0)]['bitmap'],_0x17d428=0x9,_0x2b9dbb=0x6,_0x2c7b8d=_0x58f9a6[_0x3a6d45(0x217)]/_0x17d428,_0x2eb01b=_0x58f9a6['height']/_0x2b9dbb,_0x4833e5=Math['min'](0x1,_0x67a7e9/_0x2c7b8d,_0x67a7e9/_0x2eb01b),_0x261f7c=_0x2c7b8d*_0x4833e5,_0x498d99=_0x2eb01b*_0x4833e5,_0x40a446=Math[_0x3a6d45(0x1fc)]((_0x532fb4-_0x261f7c)/0x2),_0x851dba=Math[_0x3a6d45(0x1fc)]((_0x524fa6-_0x498d99)/0x2);_0x5e331f[_0x3a6d45(0x238)](_0x58f9a6,0x0,0x0,_0x2c7b8d,_0x2eb01b,_0x40a446,_0x851dba,_0x261f7c,_0x498d99);},Sprite_STB_TurnOrder_Battler['prototype']['changeEnemyGraphicBitmap']=function(_0x340343){const _0x5f42e0=_0xf44193,_0x1c59dd=Window_STB_TurnOrder[_0x5f42e0(0x1f6)],_0x29ba38=this[_0x5f42e0(0x23f)](),_0x1b18dd=this['bitmapHeight'](),_0x286878=Math[_0x5f42e0(0x10c)](_0x29ba38,_0x1b18dd);this[_0x5f42e0(0x1b0)][_0x5f42e0(0x133)]=new Bitmap(_0x29ba38,_0x1b18dd);const _0x130fec=this['_graphicSprite'][_0x5f42e0(0x133)],_0x261670=Math[_0x5f42e0(0x10c)](0x1,_0x286878/_0x340343[_0x5f42e0(0x217)],_0x286878/_0x340343['height']),_0x3e0b4f=_0x340343['width']*_0x261670,_0x3c8a7d=_0x340343[_0x5f42e0(0x26b)]*_0x261670,_0x31ebf0=Math[_0x5f42e0(0x1fc)]((_0x29ba38-_0x3e0b4f)/0x2),_0x237014=Math[_0x5f42e0(0x1fc)]((_0x1b18dd-_0x3c8a7d)/0x2);_0x130fec['blt'](_0x340343,0x0,0x0,_0x340343['width'],_0x340343[_0x5f42e0(0x26b)],_0x31ebf0,_0x237014,_0x3e0b4f,_0x3c8a7d);},Sprite_STB_TurnOrder_Battler[_0xf44193(0x13c)][_0xf44193(0x1cd)]=function(){const _0x81e6b8=_0xf44193,_0xe806f9=this[_0x81e6b8(0x239)]();if(!_0xe806f9)return;if(!_0xe806f9[_0x81e6b8(0x12c)]())return;if(this[_0x81e6b8(0x1bc)]===_0xe806f9[_0x81e6b8(0xfd)]())return;this[_0x81e6b8(0x1bc)]=_0xe806f9['battlerHue']();if(_0xe806f9['hasSvBattler']())this[_0x81e6b8(0x1bc)]=0x0;this[_0x81e6b8(0x1b0)]['setHue'](this[_0x81e6b8(0x1bc)]);},Sprite_STB_TurnOrder_Battler['prototype'][_0xf44193(0x218)]=function(){const _0x641615=_0xf44193;if(!this[_0x641615(0xde)])return;const _0x3b8dcc=this[_0x641615(0x239)]();if(!_0x3b8dcc)return;if(this[_0x641615(0x197)]===_0x3b8dcc[_0x641615(0x197)]&&this[_0x641615(0x24e)]===_0x3b8dcc['_plural'])return;this[_0x641615(0x197)]=_0x3b8dcc['_letter'],this[_0x641615(0x24e)]=_0x3b8dcc[_0x641615(0x24e)];const _0x4319f2=Window_STB_TurnOrder[_0x641615(0x1f6)],_0x137f9d=this['isHorz'](),_0x485318=this[_0x641615(0x23f)](),_0x4eec0c=this['bitmapHeight'](),_0x2ddca4=this[_0x641615(0xde)][_0x641615(0x133)];_0x2ddca4[_0x641615(0x25b)]();if(!this['_plural'])return;_0x2ddca4[_0x641615(0x160)]=_0x4319f2[_0x641615(0x1ba)]||$gameSystem['mainFontFace'](),_0x2ddca4[_0x641615(0x14b)]=_0x4319f2[_0x641615(0x211)]||0x10,_0x137f9d?_0x2ddca4['drawText'](this[_0x641615(0x197)][_0x641615(0x136)](),0x0,_0x4eec0c/0x2,_0x485318,_0x4eec0c/0x2,_0x641615(0x203)):_0x2ddca4[_0x641615(0x1f5)](this[_0x641615(0x197)][_0x641615(0x136)](),0x0,0x2,_0x485318-0x8,_0x4eec0c-0x4,'right');},Sprite_STB_TurnOrder_Battler[_0xf44193(0x13c)][_0xf44193(0x26d)]=function(){const _0x43050c=_0xf44193,_0x2fd726=this['battler']();if(!_0x2fd726)return;const _0x17f3da=_0x2fd726['battler']();if(!_0x17f3da)return;const _0x5de01b=_0x17f3da[_0x43050c(0xfb)]();if(!_0x5de01b)return;this[_0x43050c(0x243)](_0x5de01b['_blendColor']);},Sprite_STB_TurnOrder_Battler[_0xf44193(0x13c)]['getStateTooltipBattler']=function(){const _0x455840=_0xf44193;return this[_0x455840(0x239)]();},VisuMZ[_0xf44193(0x257)]['Window_Help_setItem']=Window_Help[_0xf44193(0x13c)]['setItem'],Window_Help['prototype'][_0xf44193(0x228)]=function(_0x1d4a2a){const _0x474ddd=_0xf44193;BattleManager['isSTB']()&&_0x1d4a2a&&_0x1d4a2a[_0x474ddd(0x1a4)]&&_0x1d4a2a[_0x474ddd(0x1a4)][_0x474ddd(0x19d)](/<(?:STB) HELP>\s*([\s\S]*)\s*<\/(?:STB) HELP>/i)?this[_0x474ddd(0x18e)](String(RegExp['$1'])):VisuMZ[_0x474ddd(0x257)][_0x474ddd(0x258)][_0x474ddd(0x265)](this,_0x1d4a2a);};function Window_STB_TurnOrder(){const _0x402f9d=_0xf44193;this[_0x402f9d(0xff)](...arguments);}Window_STB_TurnOrder[_0xf44193(0x13c)]=Object['create'](Window_Base['prototype']),Window_STB_TurnOrder[_0xf44193(0x13c)][_0xf44193(0x167)]=Window_STB_TurnOrder,Window_STB_TurnOrder[_0xf44193(0x1f6)]=VisuMZ[_0xf44193(0x257)][_0xf44193(0x1f6)][_0xf44193(0x1e2)],Window_STB_TurnOrder[_0xf44193(0x13c)][_0xf44193(0xff)]=function(){const _0x174e0f=_0xf44193,_0x1ee378=this[_0x174e0f(0x121)]();this[_0x174e0f(0x25d)](_0x1ee378),Window_Base[_0x174e0f(0x13c)][_0x174e0f(0xff)][_0x174e0f(0x265)](this,_0x1ee378),this[_0x174e0f(0x20b)](),this[_0x174e0f(0x12a)](),this[_0x174e0f(0x247)]=0x0;},Window_STB_TurnOrder[_0xf44193(0x13c)][_0xf44193(0x121)]=function(){const _0x2e33c8=_0xf44193;return this[_0x2e33c8(0x210)]($gameParty[_0x2e33c8(0x134)](),0x9,!![]);},Window_STB_TurnOrder[_0xf44193(0x13c)]['initHomePositions']=function(_0x29e868){const _0x2521d8=_0xf44193;this['_targetHomeX']=this[_0x2521d8(0xee)]=_0x29e868['x'],this[_0x2521d8(0x1c3)]=this[_0x2521d8(0x166)]=_0x29e868['y'],this[_0x2521d8(0x1ad)]=_0x29e868[_0x2521d8(0x217)],this[_0x2521d8(0x227)]=_0x29e868[_0x2521d8(0x26b)],this[_0x2521d8(0x1c7)]=0x0;},Window_STB_TurnOrder[_0xf44193(0x13c)][_0xf44193(0x210)]=function(_0x18353e,_0x16455f,_0x30f6d7){const _0x242aee=_0xf44193,_0x1c6871=Window_STB_TurnOrder[_0x242aee(0x1f6)],_0x121551=this[_0x242aee(0x186)]()?_0x1c6871[_0x242aee(0x162)]:_0x1c6871[_0x242aee(0x22b)],_0x3c89de=Math[_0x242aee(0x10c)](_0x121551,_0x18353e+_0x16455f),_0x5c5b72=SceneManager[_0x242aee(0x20e)][_0x242aee(0x24d)][_0x242aee(0x26b)],_0xc0041f=SceneManager[_0x242aee(0x20e)][_0x242aee(0x253)][_0x242aee(0x26b)],_0x320ccb=_0x1c6871[_0x242aee(0x251)],_0x32b301=Graphics[_0x242aee(0x26b)]-_0x5c5b72-_0xc0041f;let _0x53c97f=0x0,_0xe277c5=0x0,_0x39f914=0x0,_0x27a1cb=0x0;switch(_0x1c6871['DisplayPosition']){case _0x242aee(0x1bb):_0x53c97f=_0x1c6871[_0x242aee(0x1f2)]*_0x3c89de+_0x320ccb,_0xe277c5=_0x1c6871[_0x242aee(0x1b8)],_0x39f914=Math[_0x242aee(0x155)]((Graphics[_0x242aee(0x217)]-_0x53c97f)/0x2),_0x27a1cb=_0x1c6871['ScreenBuffer'];break;case _0x242aee(0x173):_0x53c97f=_0x1c6871[_0x242aee(0x1f2)]*_0x3c89de+_0x320ccb,_0xe277c5=_0x1c6871['SpriteLength'],_0x39f914=Math[_0x242aee(0x155)]((Graphics['width']-_0x53c97f)/0x2),_0x27a1cb=Graphics[_0x242aee(0x26b)]-_0x5c5b72-_0xe277c5-_0x1c6871[_0x242aee(0x116)];break;case _0x242aee(0x1ec):_0x53c97f=_0x1c6871['SpriteLength'],_0xe277c5=_0x1c6871[_0x242aee(0x1f2)]*_0x3c89de+_0x320ccb,_0x39f914=_0x1c6871[_0x242aee(0x116)],_0x27a1cb=Math['ceil']((_0x32b301-_0xe277c5)/0x2),_0x27a1cb+=_0xc0041f;break;case _0x242aee(0x1d4):_0x53c97f=_0x1c6871[_0x242aee(0x1b8)],_0xe277c5=_0x1c6871[_0x242aee(0x1f2)]*_0x3c89de+_0x320ccb,_0x39f914=Graphics[_0x242aee(0x217)]-_0x53c97f-_0x1c6871[_0x242aee(0x116)],_0x27a1cb=Math[_0x242aee(0x155)]((_0x32b301-_0xe277c5)/0x2),_0x27a1cb+=_0xc0041f;break;}if(!_0x30f6d7){const _0x44f15b=Window_STB_TurnOrder[_0x242aee(0x1f6)][_0x242aee(0x1c4)];let _0x1530f3=Math[_0x242aee(0x10c)](_0x121551,Math[_0x242aee(0x10c)]($gameParty[_0x242aee(0x134)]()+0x8)-_0x3c89de);switch(_0x1c6871[_0x242aee(0x1fe)]){case _0x242aee(0x1bb):case'bottom':_0x44f15b&&(_0x39f914-=_0x1530f3*_0x1c6871[_0x242aee(0x1f2)]);break;}}return _0x39f914+=_0x1c6871[_0x242aee(0x163)],_0x27a1cb+=_0x1c6871['DisplayOffsetY'],new Rectangle(_0x39f914,_0x27a1cb,_0x53c97f,_0xe277c5);},Window_STB_TurnOrder[_0xf44193(0x13c)][_0xf44193(0x267)]=function(){const _0x29a6e7=_0xf44193;this[_0x29a6e7(0x12b)]=0x0;},Window_STB_TurnOrder[_0xf44193(0x13c)][_0xf44193(0x186)]=function(){const _0x49a7cc=_0xf44193,_0x48281a=Window_STB_TurnOrder[_0x49a7cc(0x1f6)],_0x4223ec=[_0x49a7cc(0x1bb),'bottom'][_0x49a7cc(0x207)](_0x48281a[_0x49a7cc(0x1fe)]);return _0x4223ec;},Window_STB_TurnOrder[_0xf44193(0x13c)][_0xf44193(0x20b)]=function(){const _0x30ca36=_0xf44193;this[_0x30ca36(0x141)]=new Sprite(),this[_0x30ca36(0x1c5)](this[_0x30ca36(0x141)]),this[_0x30ca36(0x1d2)]=[];for(let _0x507fba=0x0;_0x507fba<$gameParty[_0x30ca36(0x134)]();_0x507fba++){const _0x152ee8=new Sprite_STB_TurnOrder_Battler($gameParty,_0x507fba);this[_0x30ca36(0x141)][_0x30ca36(0x11b)](_0x152ee8),this[_0x30ca36(0x1d2)]['push'](_0x152ee8);}for(let _0x34df31=0x0;_0x34df31<0x8;_0x34df31++){const _0x37d408=new Sprite_STB_TurnOrder_Battler($gameTroop,_0x34df31);this[_0x30ca36(0x141)][_0x30ca36(0x11b)](_0x37d408),this[_0x30ca36(0x1d2)]['push'](_0x37d408);}},Window_STB_TurnOrder[_0xf44193(0x13c)]['update']=function(){const _0x15f077=_0xf44193;Window_Base['prototype']['update'][_0x15f077(0x265)](this),this['updateHomePosition'](),this[_0x15f077(0x175)](),this[_0x15f077(0xdb)](),this[_0x15f077(0x11e)](),this[_0x15f077(0x12a)]();},Window_STB_TurnOrder[_0xf44193(0x13c)][_0xf44193(0x264)]=function(){const _0x526c9d=_0xf44193;if(this[_0x526c9d(0x1c7)]>0x0){const _0x4e81b2=this['_homeDuration'];this[_0x526c9d(0xee)]=(this[_0x526c9d(0xee)]*(_0x4e81b2-0x1)+this['_targetHomeX'])/_0x4e81b2,this[_0x526c9d(0x166)]=(this['_homeY']*(_0x4e81b2-0x1)+this[_0x526c9d(0x1c3)])/_0x4e81b2,this[_0x526c9d(0x1c7)]--,this[_0x526c9d(0x1c7)]<=0x0&&(this['_homeX']=this[_0x526c9d(0x125)],this['_homeY']=this['_targetHomeY']);}},Window_STB_TurnOrder['prototype']['updatePosition']=function(){const _0x5f52ca=_0xf44193,_0x325f63=Window_STB_TurnOrder['Settings'];if(_0x325f63[_0x5f52ca(0x1fe)]!==_0x5f52ca(0x1bb))return;if(!_0x325f63[_0x5f52ca(0xf8)])return;const _0x25b5e2=SceneManager[_0x5f52ca(0x20e)]['_helpWindow'];if(!_0x25b5e2)return;_0x25b5e2[_0x5f52ca(0x1e5)]?(this['x']=this[_0x5f52ca(0xee)]+(_0x325f63[_0x5f52ca(0x229)]||0x0),this['y']=this[_0x5f52ca(0x166)]+(_0x325f63[_0x5f52ca(0x221)]||0x0)):(this['x']=this[_0x5f52ca(0xee)],this['y']=this[_0x5f52ca(0x166)]);const _0x6a565b=SceneManager[_0x5f52ca(0x20e)][_0x5f52ca(0x105)];this['_ogWindowLayerX']===undefined&&(this[_0x5f52ca(0xef)]=Math['round']((Graphics[_0x5f52ca(0x217)]-Math['min'](Graphics[_0x5f52ca(0x16e)],_0x6a565b[_0x5f52ca(0x217)]))/0x2),this['_ogWindowLayerY']=Math[_0x5f52ca(0x1fc)]((Graphics[_0x5f52ca(0x26b)]-Math[_0x5f52ca(0x10c)](Graphics['boxHeight'],_0x6a565b[_0x5f52ca(0x26b)]))/0x2)),this['x']+=_0x6a565b['x']-this[_0x5f52ca(0xef)],this['y']+=_0x6a565b['y']-this[_0x5f52ca(0x11a)];},Window_STB_TurnOrder[_0xf44193(0x13c)][_0xf44193(0xdb)]=function(){const _0x283704=_0xf44193,_0x50ed3a=Window_STB_TurnOrder[_0x283704(0x1f6)];if([_0x283704(0x1bb)][_0x283704(0x207)](_0x50ed3a[_0x283704(0x1fe)]))return;this['x']=this['_homeX'],this['y']=this[_0x283704(0x166)];const _0x7169ac=SceneManager[_0x283704(0x20e)][_0x283704(0x105)];this['x']+=_0x7169ac['x'],this['y']+=_0x7169ac['y'];},Window_STB_TurnOrder[_0xf44193(0x13c)][_0xf44193(0x11e)]=function(){const _0x288617=_0xf44193;if(!this['_turnOrderInnerSprite'])return;const _0x51097e=this[_0x288617(0x141)]['children'];if(!_0x51097e)return;_0x51097e[_0x288617(0x20f)](this[_0x288617(0x17c)][_0x288617(0xdd)](this));},Window_STB_TurnOrder['prototype'][_0xf44193(0x17c)]=function(_0x5e3cee,_0x3b4d81){const _0xf0cc49=_0xf44193,_0x55de5a=this[_0xf0cc49(0x186)](),_0x555011=Window_STB_TurnOrder[_0xf0cc49(0x1f6)][_0xf0cc49(0x1c4)];if(_0x55de5a&&!_0x555011)return _0x5e3cee['x']-_0x3b4d81['x'];else{if(_0x55de5a&&_0x555011)return _0x3b4d81['x']-_0x5e3cee['x'];else{if(!_0x55de5a&&_0x555011)return _0x5e3cee['y']-_0x3b4d81['y'];else{if(!_0x55de5a&&!_0x555011)return _0x3b4d81['y']-_0x5e3cee['y'];}}}},Window_STB_TurnOrder[_0xf44193(0x13c)][_0xf44193(0x12a)]=function(){const _0x2d9877=_0xf44193;this[_0x2d9877(0x1e5)]=$gameSystem['isBattleSystemSTBTurnOrderVisible']();},Window_STB_TurnOrder[_0xf44193(0x13c)][_0xf44193(0x145)]=function(_0x264777){const _0xdd3b77=_0xf44193;this[_0xdd3b77(0x1d2)][_0xdd3b77(0x20f)]((_0x1fb741,_0x1be1c4)=>{const _0x44336d=_0xdd3b77;return _0x1fb741[_0x44336d(0xf6)]()-_0x1be1c4[_0x44336d(0xf6)]();}),this['recalculateHome']();if(!_0x264777)return;for(const _0xa9bacf of this[_0xdd3b77(0x1d2)]){if(!_0xa9bacf)continue;_0xa9bacf[_0xdd3b77(0x192)](),_0xa9bacf['_positionDuration']=0x0;}},Window_STB_TurnOrder[_0xf44193(0x13c)]['recalculateHome']=function(){const _0x4cfd65=_0xf44193;if(!this[_0x4cfd65(0x186)]())return;const _0x383181=VisuMZ['BattleSystemSTB'][_0x4cfd65(0x1f6)]['TurnOrder'];if(!_0x383181[_0x4cfd65(0x215)])return;const _0xeb2790=$gameParty['members']()[_0x4cfd65(0x151)](_0x3fc44a=>_0x3fc44a&&_0x3fc44a[_0x4cfd65(0x108)]()&&_0x3fc44a[_0x4cfd65(0x1bf)]())[_0x4cfd65(0x1c9)],_0x4fbda0=$gameTroop[_0x4cfd65(0x249)]()[_0x4cfd65(0x151)](_0x223e10=>_0x223e10&&_0x223e10[_0x4cfd65(0x108)]()&&_0x223e10[_0x4cfd65(0x1bf)]())[_0x4cfd65(0x1c9)],_0x437405=this[_0x4cfd65(0x210)](_0xeb2790,_0x4fbda0);this[_0x4cfd65(0x125)]=_0x437405['x'],this['_targetHomeY']=_0x437405['y'],(this['_targetHomeX']!==this['_homeX']||this['_targetHomeY']!==this[_0x4cfd65(0x166)])&&(this[_0x4cfd65(0x1c7)]=_0x383181[_0x4cfd65(0x235)]);};