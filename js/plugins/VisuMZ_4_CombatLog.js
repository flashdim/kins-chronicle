//=============================================================================
// VisuStella MZ - Combat Log
// VisuMZ_4_CombatLog.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_CombatLog = true;

var VisuMZ = VisuMZ || {};
VisuMZ.CombatLog = VisuMZ.CombatLog || {};
VisuMZ.CombatLog.version = 1.09;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.09] [CombatLog]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Combat_Log_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Sometimes text appears way too fast in the battle system or sometimes
 * players may miss what kind of information was delivered on-screen. For times
 * like that, being able to access the Combat Log would be important. The
 * Combat Log records all of the text that appears in the battle log window at
 * the top. The player can access the Combat Log display any time during action
 * selection phase or by holding down the designated Hot Key. Sometimes,
 * players can even review over the Combat Log to try and figure out any kinds
 * of patterns enemies may even have.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Record the events that happen in battle into an accessible Combat Log for
 *   players to go back and review.
 * * Access the Combat Log in-battle through the Party Command Window, Actor
 *   Command Window, or by holding down the Hot Key.
 * * Icons are added to help players quickly differentiate between different
 *   types of events.
 * * Combat Log can have its numbers color-coded to quickly determine their
 *   effects towards action targets.
 * * Players can review past Combat Logs from an option in the Main Menu.
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
 * The VisuStella MZ Battle Core's <Battle Commands> notetag can now add in
 * "Combat Log" to its list to have the Combat Log shown as an option to the
 * Actor Command Window. Do remember to have this option enabled in the Plugin
 * Parameters as well.
 * 
 * ---
 *
 * VisuMZ_1_MessageCore
 *
 * By having the VisuStella MZ Message Core installed, you can enable the
 * Auto Color functions for the Combat Log. Do remember to have this option
 * enabled in the Plugin Parameters as well.
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
 * === Bypass-Related Notetags ===
 * 
 * ---
 *
 * <Bypass Combat Log>
 *
 * - Used for: State Notetags
 * - Insert this notetag inside a state to make its state messages ignored.
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
 * === Combat Log Plugin Commands ===
 * 
 * ---
 *
 * Combat Log: Add Text
 * - Adds custom text to the current Combat Log.
 *
 *   Text:
 *   - What text would you like to add to the Combat Log?
 *
 *   Icon:
 *   - What icon would you like to bind to this entry?
 *
 * ---
 *
 * Combat Log: Add Horizontal Line
 * - Adds a horizontal line to the current Combat Log.
 *
 * ---
 *
 * Combat Log: Bypass Text?
 * - Temporarily bypass adding any new text to the Combat Log until this
 *   is turned off?
 *
 *   Bypass?:
 *   - Bypass text from being added to the Combat Log temporarily?
 *
 * ---
 *
 * Combat Log: Hot Key Enable?
 * - Enables/disables the Combat Log hot key in battle?
 *
 *   Enable?:
 *   - Enables/disables the Combat Log hot key in battle.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Show in Main Menu?
 * - Shows/hides CombatLog menu inside the Main Menu.
 *
 *   Show/Hide?:
 *   - Shows/hides Combat Log command inside the Main Menu.
 *   - Note! This command will be disabled if the player does not have any
 *     Combat Logs recorded.
 *
 * ---
 *
 * System: Show in Party Command?
 * - Shows/hides CombatLog menu inside the Window_PartyCommand.
 *
 *   Show/Hide?:
 *   - Shows/hides Combat Log command inside Window_PartyCommand.
 *
 * ---
 *
 * System: Show in Actor Command?
 * - Shows/hides CombatLog menu inside the Window_ActorCommand.
 *
 *   Show/Hide?:
 *   - Shows/hides Combat Log command inside Window_ActorCommand.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General settings for the Combat Log. Determine how the commands appear,
 * the hot key used, and accessibility through the Main Menu, Party Command
 * Window, and Actor Command Window.
 *
 * ---
 *
 * General
 * 
 *   Command Name:
 *   - Name of the 'Combat Log' option in the various menus.
 * 
 *   Icon:
 *   - Icon used for each of the 'Combat Log' options.
 * 
 *   Hot Key:
 *   - This is the key used for quickly opening the Combat Log in battle.
 * 
 *   Stored Logs:
 *   - How many combat logs are stored as a history?
 *   - This affects the Combat Log menu.
 *
 * ---
 *
 * Main Menu
 * 
 *   Show in Main Menu?:
 *   - Add the 'Combat Log' option to the Main Menu by default?
 *   - Note! This command will be disabled if the player does not have any
 *     Combat Logs recorded.
 *
 * ---
 *
 * Window_PartyCommand
 * 
 *   Show in Window?:
 *   - Add the 'Combat Log' option to Window_PartyCommand by default?
 *
 * ---
 *
 * Window_ActorCommand
 * 
 *   Show in Window?:
 *   - Add the 'Combat Log' option to Window_ActorCommand by default?
 * 
 *   Help: Combat Log:
 *   - Help text for Combat Log command.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Combat Log Settings
 * ============================================================================
 *
 * Settings regarding the Combat Log contents. Disable any unwanted information
 * you want from here to prevent them from being displayed.
 *
 * ---
 *
 * General
 * 
 *   Show Icons?:
 *   - Show icons in the Combat Log?
 * 
 *   Auto Color?:
 *   - Use auto colors for the Combat Log?
 *   - Requires VisuMZ_1_MessageCore
 * 
 *   Color Numbers?:
 *   - Color numbers for damage differences?
 *
 * ---
 *
 * Battle Start
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *
 * ---
 *
 * Enemy Emerge
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 *
 * ---
 *
 * Battle Advantages
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Preemptive Icon:
 *   Surprised Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *
 * ---
 *
 * Start Turn
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *   - %1 - Turn Count
 *
 * ---
 *
 * End Turn
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *   - %1 - Turn Count
 *
 * ---
 *
 * Battle Victory
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 *
 * ---
 *
 * Battle Escape
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 *
 * ---
 *
 * Battle Defeat
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 *
 * ---
 *
 * Action Text
 * 
 *   Show Skill Message 1?:
 *   - Show this event in the Combat Log?
 * 
 *   Show Skill Message 2?:
 *   - Show this event in the Combat Log?
 * 
 *   Show Item Message?:
 *   - Show this event in the Combat Log?
 *
 * ---
 *
 * HP Settings
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 *
 * ---
 *
 * HP Settings > HP Heal
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text Color:
 *   - Text color used for this event in the Combat Log.
 *
 * ---
 *
 * HP Settings > HP Damage
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text Color:
 *   - Text color used for this event in the Combat Log.
 *
 * ---
 *
 * HP Settings > No HP Damage
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text Color:
 *   - Text color used for this event in the Combat Log.
 *
 * ---
 *
 * MP Settings
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 *
 * ---
 *
 * MP Settings > MP Heal
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text Color:
 *   - Text color used for this event in the Combat Log.
 *
 * ---
 *
 * MP Settings > MP Damage
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text Color:
 *   - Text color used for this event in the Combat Log.
 *
 * ---
 *
 * MP Settings > No MP Damage
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text Color:
 *   - Text color used for this event in the Combat Log.
 *
 * ---
 *
 * TP Settings
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 *
 * ---
 *
 * TP Settings > TP Heal
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text Color:
 *   - Text color used for this event in the Combat Log.
 *
 * ---
 *
 * TP Settings > TP Damage
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text Color:
 *   - Text color used for this event in the Combat Log.
 *
 * ---
 *
 * TP Settings > No TP Damage
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text Color:
 *   - Text color used for this event in the Combat Log.
 *
 * ---
 *
 * State Settings
 * 
 *   Show State Add?:
 *   - Show this event in the Combat Log?
 * 
 *   Show State Remove?:
 *   - Show this event in the Combat Log?
 * 
 *   Show State Current?:
 *   - Show this event in the Combat Log?
 *
 * ---
 *
 * Buff & Debuff Settings
 * 
 *   Show Add Buff?:
 *   - Show this event in the Combat Log?
 * 
 *   Show Add Debuff?:
 *   - Show this event in the Combat Log?
 * 
 *   Show Erase Buff?:
 *   - Show this event in the Combat Log?
 *
 * ---
 *
 * Counterattack
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 *
 * ---
 *
 * Reflection
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 *
 * ---
 *
 * Substitute
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 *
 * ---
 *
 * Effect Failure
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 *
 * ---
 *
 * Critical Hit
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 *
 * ---
 *
 * Missed Hit
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 *
 * ---
 *
 * Evaded Hit
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Background Settings
 * ============================================================================
 *
 * Background settings for Scene_CombatLog. Pretty up the scene to fit the rest
 * of your game with these settings!
 *
 * ---
 *
 * Settings
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
 * Settings regarding this plugin's windows. These alter how the windows appear
 * in the battle and menu scenes.
 *
 * ---
 *
 * Combat Log (Battle)
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * Combat Log (Menu)
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * Combat History (Menu)
 * 
 *   Latest Command:
 *   - Text displayed for latest battle.
 *   - %1 - Battle Count
 * 
 *   Past Command:
 *   - Text displayed for past battles.
 *   - %1 - Battle Count
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Compatibility Settings
 * ============================================================================
 *
 * These settings are for creating compatibility with the other VisuStella MZ
 * plugins that can benefit from having their effects recorded inside of the
 * Combat Log.
 *
 * ---
 *
 * Battle System - ATB > Interrupt
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *   - %1 - Target Name
 *
 * ---
 *
 * Battle System - CTB > Order Change
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *   - %1 - Target Name
 *
 * ---
 *
 * Battle System - STB > Instant
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *   - %1 - Target Name
 *
 * ---
 *
 * Anti-Damage Barriers > Cancel Barrier
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *   - %1 - Target Name, %2 - State Name
 *
 * ---
 *
 * Anti-Damage Barriers > Nullify Barrier
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *   - %1 - Target Name, %2 - State Name
 *
 * ---
 *
 * Anti-Damage Barriers > Reduction Barrier
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *   - %1 - Target Name, %2 - State Name
 *
 * ---
 *
 * Anti-Damage Barriers > Absorption Barrier
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *   - %1 - Target Name, %2 - State Name, %3 - Damage
 *
 * ---
 *
 * Anti-Damage Barriers > MP Dispersion Barrier
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *   - %1 - Target Name, %2 - State Name, %3 - MP
 *
 * ---
 *
 * Anti-Damage Barriers > TP Dispersion Barrier
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *   - %1 - Target Name, %2 - State Name, %3 - TP
 *
 * ---
 *
 * Life State Effects > Auto Life
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *   - %1 - Target Name
 *
 * ---
 *
 * Life State Effects > Curse
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *   - %1 - Target Name
 *
 * ---
 *
 * Life State Effects > Doom
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *   - %1 - Target Name
 *
 * ---
 *
 * Life State Effects > Fragile
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *   - %1 - Target Name
 *
 * ---
 *
 * Life State Effects > Guts
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *   - %1 - Target Name
 *
 * ---
 *
 * Life State Effects > Undead
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *   - %1 - Target Name
 *
 * ---
 *
 * Steal Items > Steal Text
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
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
 * * Trihan
 * * Arisu
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.09: July 2, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.08: April 9, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Olivia!
 * *** Plugin Parameters > General Settings > Help: Combat Log
 * **** Help text for Combat Log command.
 * 
 * Version 1.07: March 19, 2021
 * * Bug Fixes!
 * ** Combat log should no longer mask some windows from appearing and is now
 *    instead placed as a non-window object. Fix made by Arisu.
 * 
 * Version 1.06: March 12, 2021
 * * Bug Fixes!
 * ** Icons for counters, reflections, and substitutes should now display
 *    properly in the combat log. Fix made by Arisu.
 * ** Turn data should now display properly in TPB-base battle systems.
 *    Fix made by Arisu.
 * ** Switching out to the Options Scene or Party Scene should no longer clear
 *    the Combat Log in-battle. Fix made by Arisu.
 * 
 * Version 1.05: January 22, 2021
 * * Feature Update!
 * ** Dimmed background sprite now expands through the width of the screen
 *    while in battle to no longer display the jagged edges. Update by Irina.
 * 
 * Version 1.04: January 15, 2021
 * * Feature Update!
 * ** Any entries added to the Combat Log with \V[x] will now have their exact
 *    variable data stored at the time instead of displaying their current
 *    variable value. Update made by Irina.
 * 
 * Version 1.03: January 8, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Command added by Irina.
 * *** Plugin Parameters > General Settings > Stored Logs
 * **** How many combat logs are stored as a history?
 * 
 * Version 1.02: January 1, 2021
 * * Bug Fixes!
 * ** Compatibility with the Absorption Barrier should be fixed. Fix made by
 *    Yanfly.
 * 
 * Version 1.01: December 25, 2020
 * * Feature Update!
 * ** Combat Log when opened with the hot key will automatically close itself
 *    if the Message Window is open. Update made by Yanfly.
 *
 * Version 1.00: January 15, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CombatLogAddText
 * @text Combat Log: Add Text
 * @desc Adds custom text to the current Combat Log.
 *
 * @arg Text:str
 * @text Text
 * @desc What text would you like to add to the Combat Log?
 * @default Custom
 *
 * @arg Icon:num
 * @text Icon
 * @desc What icon would you like to bind to this entry?
 * @default 87
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CombatLogAddHorzLine
 * @text Combat Log: Add Horizontal Line
 * @desc Adds a horizontal line to the current Combat Log.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CombatLogBypass
 * @text Combat Log: Bypass Text?
 * @desc Temporarily bypass adding any new text to the Combat Log until this is turned off?
 *
 * @arg Bypass:eval
 * @text Bypass?
 * @type boolean
 * @on Bypass Text
 * @off Add Normally
 * @desc Bypass text from being added to the Combat Log temporarily?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CombatLogEnableHotKey
 * @text Combat Log: Hot Key Enable?
 * @desc Enables/disables the Combat Log hot key in battle?
 *
 * @arg Enable:eval
 * @text Enable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables/disables the Combat Log hot key in battle.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemShowCombatLogMenu
 * @text System: Show in Main Menu?
 * @desc Shows/hides CombatLog menu inside the Main Menu.
 *
 * @arg Show:eval
 * @text Show/Hide?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows/hides Combat Log command inside the Main Menu.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemShowCombatLogParty
 * @text System: Show in Party Command?
 * @desc Shows/hides CombatLog menu inside the Window_PartyCommand.
 *
 * @arg Show:eval
 * @text Show/Hide?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows/hides Combat Log command inside Window_PartyCommand.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemShowCombatLogActor
 * @text System: Show in Actor Command?
 * @desc Shows/hides CombatLog menu inside the Window_ActorCommand.
 *
 * @arg Show:eval
 * @text Show/Hide?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows/hides Combat Log command inside Window_ActorCommand.
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
 * @param CombatLog
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
 * @desc General settings for the Combat Log.
 * @default {"General":"","Name:str":"Combat Log","Icon:num":"189","HotKey:str":"shift","MainMenu":"","ShowMainMenu:eval":"true","PartyCommand":"","ShowPartyCommand:eval":"true","ActorCommand":"","ShowActorCommand:eval":"true"}
 *
 * @param CombatLog:struct
 * @text Combat Log Settings
 * @type struct<CombatLog>
 * @desc Settings regarding the Combat Log contents.
 * @default {"General":"","ShowIcons:eval":"true","AutoColor:eval":"true","ColorNumbers:eval":"true","BattleStart":"","ShowBattleStart:eval":"true","IconBattleStart:num":"97","TextBattleStart:str":"\\C[4]Battle Start!\\C[0]","EnemyEmerge":"","ShowEnemyEmerge:eval":"true","IconEnemyEmerge:num":"5","Advantages":"","ShowAdvantages:eval":"true","IconPreemptive:num":"77","IconSurprise:num":"78","StartTurn":"","ShowStartTurn:eval":"true","IconStartTurn:num":"97","TextStartTurn:str":"\\C[4]Turn \\C[5]%1\\C[4]: \\C[6]Start!","EndTurn":"","ShowEndTurn:eval":"true","IconEndTurn:num":"97","TextEndTurn:str":"\\C[4]Turn \\C[5]%1\\C[4]: \\C[6]End!","Victory":"","ShowVictory:eval":"true","IconVictory:num":"87","Escape":"","ShowEscape:eval":"true","IconEscape:num":"82","Defeat":"","ShowDefeat:eval":"true","IconDefeat:num":"1","Actions":"","ShowSkillMessage1:eval":"true","ShowSkillMessage2:eval":"true","ShowItemMessage:eval":"true","HP":"","ShowHP:eval":"true","HealHP":"","IconHealHP:num":"72","TextColorHealHP:num":"24","DmgHP":"","IconDmgHP:num":"168","TextColorDmgHP:num":"2","NoDmgHP":"","IconNoDmgHP:num":"81","TextColorNoDmgHP:num":"6","MP":"","ShowMP:eval":"true","HealMP":"","IconHealMP:num":"72","TextColorHealMP:num":"4","DmgMP":"","IconDmgMP:num":"171","TextColorDmgMP:num":"5","NoDmgMP":"","IconNoDmgMP:num":"81","TextColorNoDmgMP:num":"6","TP":"","ShowTP:eval":"true","HealTP":"","IconHealTP:num":"164","TextColorHealTP:num":"24","DmgTP":"","IconDmgTP:num":"170","TextColorDmgTP:num":"28","NoDmgTP":"","IconNoDmgTP:num":"81","TextColorNoDmgTP:num":"6","States":"","ShowStateAdd:eval":"true","ShowStateRemove:eval":"true","ShowStateCurrent:eval":"true","Buffs":"","ShowAddBuff:eval":"true","ShowAddDebuff:eval":"true","ShowEraseBuff:eval":"true","Counter":"","ShowCounter:eval":"true","IconCounter:num":"77","Reflect":"","ShowReflect:eval":"true","IconReflect:num":"81","Subst":"","ShowSubst:eval":"true","IconSubst:num":"81","Fail":"","ShowFail:eval":"true","IconFail:num":"166","Critical":"","ShowCritical:eval":"true","IconCritical:num":"87","Miss":"","ShowMiss:eval":"true","IconMiss:num":"82","Evade":"","ShowEvade:eval":"true","IconEvade:num":"82"}
 *
 * @param BgSettings:struct
 * @text Background Settings
 * @type struct<BgSettings>
 * @desc Background settings for Scene_CombatLog.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc Settings regarding this plugin's windows.
 * @default {"CombatLogBattle":"","CombatLogBattle_BgType:num":"1","CombatLogBattle_RectJS:func":"\"const wx = 0;\\nconst wy = 0;\\nconst ww = Graphics.boxWidth;\\nconst wh = Graphics.boxHeight;\\nreturn new Rectangle(wx, wy, ww, wh);\"","CombatLogMenu":"","CombatLogMenu_BgType:num":"0","CombatLogMenu_RectJS:func":"\"const wx = 0;\\nconst wy = this._historyWindow.y + this._historyWindow.height;\\nconst ww = Graphics.boxWidth;\\nconst wh = this.mainAreaHeight() - this._historyWindow.height;\\nreturn new Rectangle(wx, wy, ww, wh);\"","CombatHistory":"","CombatHistoryLatest:str":"Latest","CombatHistoryPrevious:str":"Battle #%1","CombatHistory_BgType:num":"0","CombatHistory_RectJS:func":"\"const ww = Graphics.boxWidth;\\nconst wh = this.calcWindowHeight(1, true);\\nconst wx = 0;\\nconst wy = this.mainAreaTop();\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 * 
 * @param -
 *
 * @param Compatibility:struct
 * @text Compatibility Settings
 * @type struct<Compatibility>
 * @desc Compatibility settings with other VisuStella MZ plugins.
 * @default {"VisuMZ_2_BattleSystemATB":"","VisuMZ_2_BattleSystemATB_Interrupt":"","ShowBattleSysAtbInterrupt:eval":"true","IconBattleSysAtbInterrupt:num":"78","TextBattleSysAtbInterrupt:str":"%1 has been interrupted!","VisuMZ_2_BattleSystemCTB":"","VisuMZ_2_BattleSystemCTB_OrderChange":"","ShowBattleSysCtbOrderChange:eval":"true","IconBattleSysCtbOrderChange:num":"75","TextBattleSysCtbOrderChange:str":"%1's turn order has changed!","VisuMZ_2_BattleSystemSTB":"","VisuMZ_2_BattleSystemSTB_Instant":"","ShowBattleSysStbInstant:eval":"true","IconBattleSysStbInstant:num":"73","TextBattleSysStbInstant:str":"%1's gains an extra action!","VisuMZ_3_AntiDmgBarriers":"","VisuMZ_3_AntiDmgBarriers_Cancel":"","Show_AntiDmgBarrier_Cancel:eval":"true","Text_AntiDmgBarrier_Cancel:str":"%2 cancels damage for %1!","VisuMZ_3_AntiDmgBarriers_Nullify":"","Show_AntiDmgBarrier_Nullify:eval":"true","Text_AntiDmgBarrier_Nullify:str":"%2 nullifies damage for %1!","VisuMZ_3_AntiDmgBarriers_Reduce":"","Show_AntiDmgBarrier_Reduce:eval":"true","Text_AntiDmgBarrier_Reduce:str":"%2 reduces damage for %1!","VisuMZ_3_AntiDmgBarriers_Absorb":"","Show_AntiDmgBarrier_Absorb:eval":"true","Text_AntiDmgBarrier_Absorb:str":"%2 absorbs \\C[5]%2\\C[0] damage for %1!","VisuMZ_3_AntiDmgBarriers_MpDisperse":"","Show_AntiDmgBarrier_MpDisperse:eval":"true","Text_AntiDmgBarrier_MpDisperse:str":"%2 dispersed damage to %1's %3!","VisuMZ_3_AntiDmgBarriers_TpDisperse":"","Show_AntiDmgBarrier_TpDisperse:eval":"true","Text_AntiDmgBarrier_TpDisperse:str":"%2 dispersed damage to %1's %3!","VisuMZ_3_LifeStateEffects":"","VisuMZ_3_LifeStateEffects_AutoLife":"","Show_LifeStateEffects_AutoLife:eval":"true","Icon_LifeStateEffects_AutoLife:num":"70","Text_LifeStateEffects_AutoLife:str":"%1 is automatically revived!","VisuMZ_3_LifeStateEffects_Curse":"","Show_LifeStateEffects_Curse:eval":"true","Icon_LifeStateEffects_Curse:num":"71","Text_LifeStateEffects_Curse:str":"%1's curse takes hold...","VisuMZ_3_LifeStateEffects_Doom":"","Show_LifeStateEffects_Doom:eval":"true","Icon_LifeStateEffects_Doom:num":"1","Text_LifeStateEffects_Doom:str":"%1 has fallen to doom.","VisuMZ_3_LifeStateEffects_Fragile":"","Show_LifeStateEffects_Fragile:eval":"true","Icon_LifeStateEffects_Fragile:num":"166","Text_LifeStateEffects_Fragile:str":"%1 was too fragile!","VisuMZ_3_LifeStateEffects_Guts":"","Show_LifeStateEffects_Guts:eval":"true","Icon_LifeStateEffects_Guts:num":"77","Text_LifeStateEffects_Guts:str":"%1 powers through a fatal blow!","VisuMZ_3_LifeStateEffects_Undead":"","Show_LifeStateEffects_Undead:eval":"true","Icon_LifeStateEffects_Undead:num":"10","Text_LifeStateEffects_Undead:str":"%1 suffers from being undead!","VisuMZ_3_StealItems":"","VisuMZ_3_StealItems_Steal":"","Show_StealItems_Steal:eval":"true","Icon_StealItems_Steal:num":"142"}
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
 * @param Name:str
 * @text Command Name
 * @parent General
 * @desc Name of the 'Combat Log' option in the various menus.
 * @default Combat Log
 *
 * @param Icon:num
 * @text Icon
 * @parent General
 * @desc Icon used for each of the 'Combat Log' options.
 * @default 189
 *
 * @param HotKey:str
 * @text Hot Key
 * @parent General
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc This is the key used for quickly opening the Combat Log in battle.
 * @default shift
 *
 * @param StoredLogs:num
 * @text Stored Logs
 * @parent General
 * @desc How many combat logs are stored as a history?
 * This affects the Combat Log menu.
 * @default 5
 *
 * @param MainMenu
 * @text Main Menu
 *
 * @param ShowMainMenu:eval
 * @text Show in Main Menu?
 * @parent MainMenu
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Add the 'Combat Log' option to the Main Menu by default?
 * @default true
 *
 * @param PartyCommand
 * @text Window_PartyCommand
 *
 * @param ShowPartyCommand:eval
 * @text Show in Window?
 * @parent PartyCommand
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Add the 'Combat Log' option to Window_PartyCommand by default?
 * @default true
 *
 * @param ActorCommand
 * @text Window_ActorCommand
 *
 * @param ShowActorCommand:eval
 * @text Show in Window?
 * @parent ActorCommand
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Add the 'Combat Log' option to Window_ActorCommand by default?
 * @default true
 *
 * @param BattleHelpCombatLog:json
 * @text Help: Combat Log
 * @parent ActorCommand
 * @type note
 * @desc Help text for Combat Log command.
 * Requires VisuMZ_1_BattleCore!
 * @default "View the combat log."
 *
 */
/* ----------------------------------------------------------------------------
 * Combat Log Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~CombatLog:
 *
 * @param General
 *
 * @param ShowIcons:eval
 * @text Show Icons?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show icons in the Combat Log?
 * @default true
 *
 * @param AutoColor:eval
 * @text Auto Color?
 * @parent General
 * @type boolean
 * @on Use Auto Color
 * @off Don't Use
 * @desc Use auto colors for the Combat Log?
 * Requires VisuMZ_1_MessageCore
 * @default true
 *
 * @param ColorNumbers:eval
 * @text Color Numbers?
 * @parent General
 * @type boolean
 * @on Color Numbers
 * @off Don't Color
 * @desc Color numbers for damage differences?
 * @default true
 * 
 * @param BattleStart
 * @text Battle Start
 *
 * @param ShowBattleStart:eval
 * @text Show?
 * @parent BattleStart
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconBattleStart:num
 * @text Icon
 * @parent BattleStart
 * @desc Icon used for this event in the Combat Log.
 * @default 97
 *
 * @param TextBattleStart:str
 * @text Text
 * @parent BattleStart
 * @desc Text displayed for this event in the Combat Log.
 * You may use text codes.
 * @default \C[4]Battle Start!\C[0]
 * 
 * @param EnemyEmerge
 * @text Enemy Emerge
 *
 * @param ShowEnemyEmerge:eval
 * @text Show?
 * @parent EnemyEmerge
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconEnemyEmerge:num
 * @text Icon
 * @parent EnemyEmerge
 * @desc Icon used for this event in the Combat Log.
 * @default 5
 * 
 * @param Advantages
 * @text Battle Advantages
 *
 * @param ShowAdvantages:eval
 * @text Show?
 * @parent Advantages
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconPreemptive:num
 * @text Preemptive Icon
 * @parent Advantages
 * @desc Icon used for this event in the Combat Log.
 * @default 77
 *
 * @param IconSurprise:num
 * @text Surprised Icon
 * @parent Advantages
 * @desc Icon used for this event in the Combat Log.
 * @default 78
 * 
 * @param StartTurn
 * @text Start Turn
 *
 * @param ShowStartTurn:eval
 * @text Show?
 * @parent StartTurn
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconStartTurn:num
 * @text Icon
 * @parent StartTurn
 * @desc Icon used for this event in the Combat Log.
 * @default 97
 *
 * @param TextStartTurn:str
 * @text Text
 * @parent StartTurn
 * @desc Text displayed for this event in the Combat Log.
 * You may use text codes. %1 - Turn Count
 * @default \C[4]Turn \C[5]%1\C[4]: \C[6]Start!
 * 
 * @param EndTurn
 * @text End Turn
 *
 * @param ShowEndTurn:eval
 * @text Show?
 * @parent EndTurn
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconEndTurn:num
 * @text Icon
 * @parent EndTurn
 * @desc Icon used for this event in the Combat Log.
 * @default 97
 *
 * @param TextEndTurn:str
 * @text Text
 * @parent EndTurn
 * @desc Text displayed for this event in the Combat Log.
 * You may use text codes. %1 - Turn Count
 * @default \C[4]Turn \C[5]%1\C[4]: \C[6]End!
 * 
 * @param Victory
 * @text Battle Victory
 *
 * @param ShowVictory:eval
 * @text Show?
 * @parent Victory
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconVictory:num
 * @text Icon
 * @parent Victory
 * @desc Icon used for this event in the Combat Log.
 * @default 87
 * 
 * @param Escape
 * @text Battle Escape
 *
 * @param ShowEscape:eval
 * @text Show?
 * @parent Escape
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconEscape:num
 * @text Icon
 * @parent Escape
 * @desc Icon used for this event in the Combat Log.
 * @default 82
 * 
 * @param Defeat
 * @text Battle Defeat
 *
 * @param ShowDefeat:eval
 * @text Show?
 * @parent Defeat
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconDefeat:num
 * @text Icon
 * @parent Defeat
 * @desc Icon used for this event in the Combat Log.
 * @default 1
 * 
 * @param Actions
 * @text Action Text
 *
 * @param ShowSkillMessage1:eval
 * @text Show Skill Message 1?
 * @parent Actions
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param ShowSkillMessage2:eval
 * @text Show Skill Message 2?
 * @parent Actions
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param ShowItemMessage:eval
 * @text Show Item Message?
 * @parent Actions
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 * 
 * @param HP
 * @text HP Settings
 *
 * @param ShowHP:eval
 * @text Show?
 * @parent HP
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 * 
 * @param HealHP
 * @text HP Heal
 * @parent HP
 *
 * @param IconHealHP:num
 * @text Icon
 * @parent HealHP
 * @desc Icon used for this event in the Combat Log.
 * @default 72
 *
 * @param TextColorHealHP:num
 * @text Text Color
 * @parent HealHP
 * @type number
 * @min 0
 * @max 31
 * @desc Text color used for this event in the Combat Log.
 * @default 24
 * 
 * @param DmgHP
 * @text HP Damage
 * @parent HP
 *
 * @param IconDmgHP:num
 * @text Icon
 * @parent DmgHP
 * @desc Icon used for this event in the Combat Log.
 * @default 168
 *
 * @param TextColorDmgHP:num
 * @text Text Color
 * @parent DmgHP
 * @type number
 * @min 0
 * @max 31
 * @desc Text color used for this event in the Combat Log.
 * @default 2
 * 
 * @param NoDmgHP
 * @text No HP Damage
 * @parent HP
 *
 * @param IconNoDmgHP:num
 * @text Icon
 * @parent NoDmgHP
 * @desc Icon used for this event in the Combat Log.
 * @default 81
 *
 * @param TextColorNoDmgHP:num
 * @text Text Color
 * @parent NoDmgHP
 * @type number
 * @min 0
 * @max 31
 * @desc Text color used for this event in the Combat Log.
 * @default 6
 * 
 * @param MP
 * @text MP Settings
 *
 * @param ShowMP:eval
 * @text Show?
 * @parent MP
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 * 
 * @param HealMP
 * @text MP Heal
 * @parent MP
 *
 * @param IconHealMP:num
 * @text Icon
 * @parent HealMP
 * @desc Icon used for this event in the Combat Log.
 * @default 72
 *
 * @param TextColorHealMP:num
 * @text Text Color
 * @parent HealMP
 * @type number
 * @min 0
 * @max 31
 * @desc Text color used for this event in the Combat Log.
 * @default 4
 * 
 * @param DmgMP
 * @text MP Damage
 * @parent MP
 *
 * @param IconDmgMP:num
 * @text Icon
 * @parent DmgMP
 * @desc Icon used for this event in the Combat Log.
 * @default 171
 *
 * @param TextColorDmgMP:num
 * @text Text Color
 * @parent DmgMP
 * @type number
 * @min 0
 * @max 31
 * @desc Text color used for this event in the Combat Log.
 * @default 5
 * 
 * @param NoDmgMP
 * @text No MP Damage
 * @parent MP
 *
 * @param IconNoDmgMP:num
 * @text Icon
 * @parent NoDmgMP
 * @desc Icon used for this event in the Combat Log.
 * @default 81
 *
 * @param TextColorNoDmgMP:num
 * @text Text Color
 * @parent NoDmgMP
 * @type number
 * @min 0
 * @max 31
 * @desc Text color used for this event in the Combat Log.
 * @default 6
 * 
 * @param TP
 * @text TP Settings
 *
 * @param ShowTP:eval
 * @text Show?
 * @parent TP
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 * 
 * @param HealTP
 * @text TP Heal
 * @parent TP
 *
 * @param IconHealTP:num
 * @text Icon
 * @parent HealTP
 * @desc Icon used for this event in the Combat Log.
 * @default 164
 *
 * @param TextColorHealTP:num
 * @text Text Color
 * @parent HealTP
 * @type number
 * @min 0
 * @max 31
 * @desc Text color used for this event in the Combat Log.
 * @default 24
 * 
 * @param DmgTP
 * @text TP Damage
 * @parent TP
 *
 * @param IconDmgTP:num
 * @text Icon
 * @parent DmgTP
 * @desc Icon used for this event in the Combat Log.
 * @default 170
 *
 * @param TextColorDmgTP:num
 * @text Text Color
 * @parent DmgTP
 * @type number
 * @min 0
 * @max 31
 * @desc Text color used for this event in the Combat Log.
 * @default 28
 * 
 * @param NoDmgTP
 * @text No TP Damage
 * @parent TP
 *
 * @param IconNoDmgTP:num
 * @text Icon
 * @parent NoDmgTP
 * @desc Icon used for this event in the Combat Log.
 * @default 81
 *
 * @param TextColorNoDmgTP:num
 * @text Text Color
 * @parent NoDmgTP
 * @type number
 * @min 0
 * @max 31
 * @desc Text color used for this event in the Combat Log.
 * @default 6
 * 
 * @param States
 * @text State Settings
 *
 * @param ShowStateAdd:eval
 * @text Show State Add?
 * @parent States
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param ShowStateRemove:eval
 * @text Show State Remove?
 * @parent States
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param ShowStateCurrent:eval
 * @text Show State Current?
 * @parent States
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 * 
 * @param Buffs
 * @text Buff & Debuff Settings
 *
 * @param ShowAddBuff:eval
 * @text Show Add Buff?
 * @parent Buffs
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param ShowAddDebuff:eval
 * @text Show Add Debuff?
 * @parent Buffs
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param ShowEraseBuff:eval
 * @text Show Erase Buff?
 * @parent Buffs
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 * 
 * @param Counter
 * @text Counterattack
 *
 * @param ShowCounter:eval
 * @text Show?
 * @parent Counter
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconCounter:num
 * @text Icon
 * @parent Counter
 * @desc Icon used for this event in the Combat Log.
 * @default 77
 * 
 * @param Reflect
 * @text Reflection
 *
 * @param ShowReflect:eval
 * @text Show?
 * @parent Reflect
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconReflect:num
 * @text Icon
 * @parent Reflect
 * @desc Icon used for this event in the Combat Log.
 * @default 81
 * 
 * @param Subst
 * @text Substitute
 *
 * @param ShowSubst:eval
 * @text Show?
 * @parent Subst
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconSubst:num
 * @text Icon
 * @parent Subst
 * @desc Icon used for this event in the Combat Log.
 * @default 81
 * 
 * @param Fail
 * @text Effect Failure
 *
 * @param ShowFail:eval
 * @text Show?
 * @parent Fail
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconFail:num
 * @text Icon
 * @parent Fail
 * @desc Icon used for this event in the Combat Log.
 * @default 166
 * 
 * @param Critical
 * @text Critical Hit
 *
 * @param ShowCritical:eval
 * @text Show?
 * @parent Critical
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconCritical:num
 * @text Icon
 * @parent Critical
 * @desc Icon used for this event in the Combat Log.
 * @default 87
 * 
 * @param Miss
 * @text Missed Hit
 *
 * @param ShowMiss:eval
 * @text Show?
 * @parent Miss
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconMiss:num
 * @text Icon
 * @parent Miss
 * @desc Icon used for this event in the Combat Log.
 * @default 82
 * 
 * @param Evade
 * @text Evaded Hit
 *
 * @param ShowEvade:eval
 * @text Show?
 * @parent Evade
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconEvade:num
 * @text Icon
 * @parent Evade
 * @desc Icon used for this event in the Combat Log.
 * @default 82
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
 * @param CombatLogBattle
 * @text Combat Log (Battle)
 *
 * @param CombatLogBattle_BgType:num
 * @text Background Type
 * @parent CombatLogBattle
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 1
 *
 * @param CombatLogBattle_RectJS:func
 * @text JS: X, Y, W, H
 * @parent CombatLogBattle
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const wx = 0;\nconst wy = 0;\nconst ww = Graphics.boxWidth;\nconst wh = Graphics.boxHeight;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param CombatLogMenu
 * @text Combat Log (Menu)
 *
 * @param CombatLogMenu_BgType:num
 * @text Background Type
 * @parent CombatLogMenu
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
 * @param CombatLogMenu_RectJS:func
 * @text JS: X, Y, W, H
 * @parent CombatLogMenu
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const wx = 0;\nconst wy = this._historyWindow.y + this._historyWindow.height;\nconst ww = Graphics.boxWidth;\nconst wh = this.mainAreaHeight() - this._historyWindow.height;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param CombatHistory
 * @text Combat History (Menu)
 *
 * @param CombatHistoryLatest:str
 * @text Latest Command
 * @parent CombatHistory
 * @desc Text displayed for latest battle.
 * %1 - Battle Count
 * @default Latest
 *
 * @param CombatHistoryPrevious:str
 * @text Past Command
 * @parent CombatHistory
 * @desc Text displayed for past battles.
 * %1 - Battle Count
 * @default Battle #%1
 *
 * @param CombatHistory_BgType:num
 * @text Background Type
 * @parent CombatHistory
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
 * @param CombatHistory_RectJS:func
 * @text JS: X, Y, W, H
 * @parent CombatHistory
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Graphics.boxWidth;\nconst wh = this.calcWindowHeight(1, true);\nconst wx = 0;\nconst wy = this.mainAreaTop();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
/* ----------------------------------------------------------------------------
 * Compatibility Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Compatibility:
 *
 * @param VisuMZ_2_BattleSystemATB
 * @text Battle System - ATB
 * 
 * @param VisuMZ_2_BattleSystemATB_Interrupt
 * @text Interrupt
 * @parent VisuMZ_2_BattleSystemATB
 *
 * @param ShowBattleSysAtbInterrupt:eval
 * @text Show?
 * @parent VisuMZ_2_BattleSystemATB_Interrupt
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconBattleSysAtbInterrupt:num
 * @text Icon
 * @parent VisuMZ_2_BattleSystemATB_Interrupt
 * @desc Icon used for this event in the Combat Log.
 * @default 78
 *
 * @param TextBattleSysAtbInterrupt:str
 * @text Text
 * @parent VisuMZ_2_BattleSystemATB_Interrupt
 * @desc Text displayed for this event in the Combat Log.
 * You may use text codes. %1 - Target Name
 * @default %1 has been interrupted!
 *
 * @param VisuMZ_2_BattleSystemCTB
 * @text Battle System - CTB
 * 
 * @param VisuMZ_2_BattleSystemCTB_OrderChange
 * @text Order Change
 * @parent VisuMZ_2_BattleSystemCTB
 *
 * @param ShowBattleSysCtbOrderChange:eval
 * @text Show?
 * @parent VisuMZ_2_BattleSystemCTB_OrderChange
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconBattleSysCtbOrderChange:num
 * @text Icon
 * @parent VisuMZ_2_BattleSystemCTB_OrderChange
 * @desc Icon used for this event in the Combat Log.
 * @default 75
 *
 * @param TextBattleSysCtbOrderChange:str
 * @text Text
 * @parent VisuMZ_2_BattleSystemCTB_OrderChange
 * @desc Text displayed for this event in the Combat Log.
 * You may use text codes. %1 - Target Name
 * @default %1's turn order has changed!
 *
 * @param VisuMZ_2_BattleSystemSTB
 * @text Battle System - STB
 * 
 * @param VisuMZ_2_BattleSystemSTB_Instant
 * @text Instant
 * @parent VisuMZ_2_BattleSystemSTB
 *
 * @param ShowBattleSysStbInstant:eval
 * @text Show?
 * @parent VisuMZ_2_BattleSystemSTB_Instant
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconBattleSysStbInstant:num
 * @text Icon
 * @parent VisuMZ_2_BattleSystemSTB_Instant
 * @desc Icon used for this event in the Combat Log.
 * @default 73
 *
 * @param TextBattleSysStbInstant:str
 * @text Text
 * @parent VisuMZ_2_BattleSystemSTB_Instant
 * @desc Text displayed for this event in the Combat Log.
 * You may use text codes. %1 - Target Name
 * @default %1's gains an extra action!
 *
 * @param VisuMZ_3_AntiDmgBarriers
 * @text Anti-Damage Barriers
 * 
 * @param VisuMZ_3_AntiDmgBarriers_Cancel
 * @text Cancel Barrier
 * @parent VisuMZ_3_AntiDmgBarriers
 *
 * @param Show_AntiDmgBarrier_Cancel:eval
 * @text Show?
 * @parent VisuMZ_3_AntiDmgBarriers_Cancel
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param Text_AntiDmgBarrier_Cancel:str
 * @text Text
 * @parent VisuMZ_3_AntiDmgBarriers_Cancel
 * @desc Text displayed for this event in the Combat Log.
 * %1 - Target Name, %2 - State Name
 * @default %2 cancels damage for %1!
 * 
 * @param VisuMZ_3_AntiDmgBarriers_Nullify
 * @text Nullify Barrier
 * @parent VisuMZ_3_AntiDmgBarriers
 *
 * @param Show_AntiDmgBarrier_Nullify:eval
 * @text Show?
 * @parent VisuMZ_3_AntiDmgBarriers_Nullify
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param Text_AntiDmgBarrier_Nullify:str
 * @text Text
 * @parent VisuMZ_3_AntiDmgBarriers_Nullify
 * @desc Text displayed for this event in the Combat Log.
 * %1 - Target Name, %2 - State Name
 * @default %2 nullifies damage for %1!
 * 
 * @param VisuMZ_3_AntiDmgBarriers_Reduce
 * @text Reduction Barrier
 * @parent VisuMZ_3_AntiDmgBarriers
 *
 * @param Show_AntiDmgBarrier_Reduce:eval
 * @text Show?
 * @parent VisuMZ_3_AntiDmgBarriers_Reduce
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param Text_AntiDmgBarrier_Reduce:str
 * @text Text
 * @parent VisuMZ_3_AntiDmgBarriers_Reduce
 * @desc Text displayed for this event in the Combat Log.
 * %1 - Target Name, %2 - State Name
 * @default %2 reduces damage for %1!
 * 
 * @param VisuMZ_3_AntiDmgBarriers_Reduce
 * @text Reduction Barrier
 * @parent VisuMZ_3_AntiDmgBarriers
 *
 * @param Show_AntiDmgBarrier_Reduce:eval
 * @text Show?
 * @parent VisuMZ_3_AntiDmgBarriers_Reduce
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param Text_AntiDmgBarrier_Reduce:str
 * @text Text
 * @parent VisuMZ_3_AntiDmgBarriers_Reduce
 * @desc Text displayed for this event in the Combat Log.
 * %1 - Target Name, %2 - State Name
 * @default %2 reduces damage for %1!
 * 
 * @param VisuMZ_3_AntiDmgBarriers_Absorb
 * @text Absorption Barrier
 * @parent VisuMZ_3_AntiDmgBarriers
 *
 * @param Show_AntiDmgBarrier_Absorb:eval
 * @text Show?
 * @parent VisuMZ_3_AntiDmgBarriers_Absorb
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param Text_AntiDmgBarrier_Absorb:str
 * @text Text
 * @parent VisuMZ_3_AntiDmgBarriers_Absorb
 * @desc Text displayed for this event in the Combat Log.
 * %1 - Target Name, %2 - State Name, %3 - Damage
 * @default %2 absorbs \C[5]%2\C[0] damage for %1!
 * 
 * @param VisuMZ_3_AntiDmgBarriers_MpDisperse
 * @text MP Dispersion Barrier
 * @parent VisuMZ_3_AntiDmgBarriers
 *
 * @param Show_AntiDmgBarrier_MpDisperse:eval
 * @text Show?
 * @parent VisuMZ_3_AntiDmgBarriers_MpDisperse
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param Text_AntiDmgBarrier_MpDisperse:str
 * @text Text
 * @parent VisuMZ_3_AntiDmgBarriers_MpDisperse
 * @desc Text displayed for this event in the Combat Log.
 * %1 - Target Name, %2 - State Name, %3 - MP
 * @default %2 dispersed damage to %1's %3!
 * 
 * @param VisuMZ_3_AntiDmgBarriers_TpDisperse
 * @text TP Dispersion Barrier
 * @parent VisuMZ_3_AntiDmgBarriers
 *
 * @param Show_AntiDmgBarrier_TpDisperse:eval
 * @text Show?
 * @parent VisuMZ_3_AntiDmgBarriers_TpDisperse
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param Text_AntiDmgBarrier_TpDisperse:str
 * @text Text
 * @parent VisuMZ_3_AntiDmgBarriers_TpDisperse
 * @desc Text displayed for this event in the Combat Log.
 * %1 - Target Name, %2 - State Name, %3 - TP
 * @default %2 dispersed damage to %1's %3!
 *
 * @param VisuMZ_3_LifeStateEffects
 * @text Life State Effects
 * 
 * @param VisuMZ_3_LifeStateEffects_AutoLife
 * @text Auto Life
 * @parent VisuMZ_3_LifeStateEffects
 *
 * @param Show_LifeStateEffects_AutoLife:eval
 * @text Show?
 * @parent VisuMZ_3_LifeStateEffects_AutoLife
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param Icon_LifeStateEffects_AutoLife:num
 * @text Icon
 * @parent VisuMZ_3_LifeStateEffects_AutoLife
 * @desc Icon used for this event in the Combat Log.
 * @default 70
 *
 * @param Text_LifeStateEffects_AutoLife:str
 * @text Text
 * @parent VisuMZ_3_LifeStateEffects_AutoLife
 * @desc Text displayed for this event in the Combat Log.
 * You may use text codes. %1 - Target Name
 * @default %1 is automatically revived!
 * 
 * @param VisuMZ_3_LifeStateEffects_Curse
 * @text Curse
 * @parent VisuMZ_3_LifeStateEffects
 *
 * @param Show_LifeStateEffects_Curse:eval
 * @text Show?
 * @parent VisuMZ_3_LifeStateEffects_Curse
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param Icon_LifeStateEffects_Curse:num
 * @text Icon
 * @parent VisuMZ_3_LifeStateEffects_Curse
 * @desc Icon used for this event in the Combat Log.
 * @default 71
 *
 * @param Text_LifeStateEffects_Curse:str
 * @text Text
 * @parent VisuMZ_3_LifeStateEffects_Curse
 * @desc Text displayed for this event in the Combat Log.
 * You may use text codes. %1 - Target Name
 * @default %1's curse takes hold...
 * 
 * @param VisuMZ_3_LifeStateEffects_Doom
 * @text Doom
 * @parent VisuMZ_3_LifeStateEffects
 *
 * @param Show_LifeStateEffects_Doom:eval
 * @text Show?
 * @parent VisuMZ_3_LifeStateEffects_Doom
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param Icon_LifeStateEffects_Doom:num
 * @text Icon
 * @parent VisuMZ_3_LifeStateEffects_Doom
 * @desc Icon used for this event in the Combat Log.
 * @default 1
 *
 * @param Text_LifeStateEffects_Doom:str
 * @text Text
 * @parent VisuMZ_3_LifeStateEffects_Doom
 * @desc Text displayed for this event in the Combat Log.
 * You may use text codes. %1 - Target Name
 * @default %1 has fallen to doom.
 * 
 * @param VisuMZ_3_LifeStateEffects_Fragile
 * @text Fragile
 * @parent VisuMZ_3_LifeStateEffects
 *
 * @param Show_LifeStateEffects_Fragile:eval
 * @text Show?
 * @parent VisuMZ_3_LifeStateEffects_Fragile
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param Icon_LifeStateEffects_Fragile:num
 * @text Icon
 * @parent VisuMZ_3_LifeStateEffects_Fragile
 * @desc Icon used for this event in the Combat Log.
 * @default 166
 *
 * @param Text_LifeStateEffects_Fragile:str
 * @text Text
 * @parent VisuMZ_3_LifeStateEffects_Fragile
 * @desc Text displayed for this event in the Combat Log.
 * You may use text codes. %1 - Target Name
 * @default %1 was too fragile!
 * 
 * @param VisuMZ_3_LifeStateEffects_Guts
 * @text Guts
 * @parent VisuMZ_3_LifeStateEffects
 *
 * @param Show_LifeStateEffects_Guts:eval
 * @text Show?
 * @parent VisuMZ_3_LifeStateEffects_Guts
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param Icon_LifeStateEffects_Guts:num
 * @text Icon
 * @parent VisuMZ_3_LifeStateEffects_Guts
 * @desc Icon used for this event in the Combat Log.
 * @default 77
 *
 * @param Text_LifeStateEffects_Guts:str
 * @text Text
 * @parent VisuMZ_3_LifeStateEffects_Guts
 * @desc Text displayed for this event in the Combat Log.
 * You may use text codes. %1 - Target Name
 * @default %1 powers through a fatal blow!
 * 
 * @param VisuMZ_3_LifeStateEffects_Undead
 * @text Undead
 * @parent VisuMZ_3_LifeStateEffects
 *
 * @param Show_LifeStateEffects_Undead:eval
 * @text Show?
 * @parent VisuMZ_3_LifeStateEffects_Undead
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param Icon_LifeStateEffects_Undead:num
 * @text Icon
 * @parent VisuMZ_3_LifeStateEffects_Undead
 * @desc Icon used for this event in the Combat Log.
 * @default 10
 *
 * @param Text_LifeStateEffects_Undead:str
 * @text Text
 * @parent VisuMZ_3_LifeStateEffects_Undead
 * @desc Text displayed for this event in the Combat Log.
 * You may use text codes. %1 - Target Name
 * @default %1 suffers from being undead!
 *
 * @param VisuMZ_3_StealItems
 * @text Steal Items
 * 
 * @param VisuMZ_3_StealItems_Steal
 * @text Steal Text
 * @parent VisuMZ_3_StealItems
 *
 * @param Show_StealItems_Steal:eval
 * @text Show?
 * @parent VisuMZ_3_StealItems_Steal
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param Icon_StealItems_Steal:num
 * @text Icon
 * @parent VisuMZ_3_StealItems_Steal
 * @desc Icon used for this event in the Combat Log.
 * @default 142
 *
 */
//=============================================================================

const _0x57a2=['dimColor2','combatLog_Miss_Icon','Game_Battler_onCtbOrderChange','smoothScrollUp','processDefeat','enemyNoHit','2VmcPZQ','magicEvasion','pageup','addWindow','NoDmg','Show_StealItems_Steal','TextBattleSysCtbOrderChange','JSON','onTouchOk','isActiveTpb','ARRAYEVAL','none','home','getCombatLog','Game_BattlerBase_setTp','Window_PartyCommand_addCustomCommands','push','onEscapeFailure','preemptive','Game_BattlerBase_setMp','Window_BattleLog_displayFailure','combatLog_Substitute_Icon','note','IconReflect','startTurn','AIdZg','constructor','enemyRecovery','Window_PartyCommand_makeCommandList','_combatLog_Latest','isPartyCmdCombatLogVisible','VdjPh','1344693LzPvYE','onEscapeSuccess','down','debuffAdd','victory','ACCESS_BUTTON','TextColorDmgHP','scale','setPartyCmdCombatLogVisible','CombatLog','combatLog_Result_Victory','setCombatLogIndex','combatLog_HP_NoDmg','processVictory','Compatibility','displayCritical','ShowPartyCommand','Game_BattlerBase_eraseBuff','setBypassCombatLog','Window','iconIndex','isSceneBattle','IconNoDmgMP','Game_Battler_onAntiDamageNullificationBarrier','ShowReflect','MPZyF','BgFilename1','isMainMenuCombatLogEnabled','gIFem','IconBattleSysAtbInterrupt','initCombatLogAccess','increaseBuff','SyhDo','Game_Battler_onLifeStateEffect','drawTextEx','combatLogStateChanges','EVAL','isTriggered','setText','YQQHk','=====HORZLINE=====','TextColorNoDmgTP','scaleSprite','974410IcOXok','setHandler','actorNoHit','battleMembers','displayCounter','combatLog_MP_Dmg','Window_BattleLog_displaySubstitute','Window_BattleLog_displayAction','actionFailure','combatLog','QUkuX','SHOW_LINE_BACKGROUND','scrollTo','_backSprite2','combatLog_TP_NoDmg','padding','buffIconIndex','displayAction','end','ShowSubst','startAction','LcORu','BattleManager_onEscapeSuccess','vwggf','Game_Battler_onAntiDamageMpBarrier','splice','openCombatLog','_logWindow','IconMiss','Show_AntiDmgBarrier_Absorb','TextColorHealMP','call','jzspU','SnapshotOpacity','drawBackgroundRect','critical','jwSWx','Window_ActorCommand_addCustomCommands','historyWindowRect','Text_AntiDmgBarrier_MpDisperse','criticalToEnemy','mainMenu','ShowDefeat','_backSprite1','ShowSkillMessage2','replace','isStateAffected','TextColorHealTP','ShowAdvantages','combatLog_Counter_Icon','resetFontSettings','IconVictory','TextBattleStart','isAccessKeyPressed','turnCount','VisuMZ_1_BattleCore','BattleManager_startBattle','QMqHc','_combatLogSilentTp','param','message1','ShowCritical','battleRefresh','yYhPR','stbGainInstant','Window_BattleLog_startTurn','setActorCmdCombatLogVisible','653894WGAWMv','create','COMBATLOG_MAXIMUM_BATTLE_ENTRIES','TextColorDmgTP','gradientFillRect','onAtbInterrupt','BattleManager_onEscapeFailure','displayFailure','combatLog_HP_Heal','setLogWindow','qDLrk','isActor','Window_BattleLog_displayCritical','getBackgroundOpacity','IconFail','registerCommand','physical','Game_Battler_displayAbsorptionBarrierPopup','947GsJMeU','pagedown','Heal','status','Game_BattlerBase_setHp','Scene_Menu_createCommandWindow','_partyCommandWindow','length','active','Text_AntiDmgBarrier_TpDisperse','setMp','pCqsB','createBackground','zxdyx','setMainMenuCombatLogVisible','Game_Battler_onAntiDamageCancelBarrier','itemHeight','hYJDB','bind','setLastWindow','combatLog_BattleCmd_Icon','isBusy','combatLog_Surprise_Icon','enemyDamage','CombatLogBattle_RectJS','makeCommandList','isActorCmdCombatLogVisible','startBattle','ShowEraseBuff','XSQkI','BattleManager_processVictory','max','sMASG','ShowActorCommand','buffRemove','isCombatLogCommandEnabled','TextStartTurn','combatLog_StartTurn','mainAreaTop','QHwzy','Show_AntiDmgBarrier_Cancel','select','combatLog_CriticalHit_Icon','addChild','finishCurrentCombatLog','setTp','ShowVictory','parse','BattleManager_processAbort','combatLog_BattleStart_Icon','Show_AntiDmgBarrier_Nullify','bitmap','escapeStart','_surprise','combatLog_Failure_Icon','Show','XINfK','helpAreaHeight','_combatLogPayment','BIGGER_LINE_HEIGHT','IconBattleSysStbInstant','message4','CombatLogEnableHotKey','removeCombatLogCommand','16495lQferQ','JcHjf','iQSdE','hotkeyOn','_tp','ShowAddBuff','displaySubstitute','Game_Battler_gainSilentTp','cursorDown','match','IconHealTP','name','RegExp','startBattleCombatLog','battleCount','Text_LifeStateEffects_%1','leader','text','displayEvasion','defeat','ElvsV','IconBattleSysCtbOrderChange','IconEnemyEmerge','endTurn','fBKoU','isTimeActive','loadTitle1','commandCombatLog','aOadu','onAntiDamageNullificationBarrier','_buffs','getLastWindow','Text_AntiDmgBarrier_Absorb','ColorNumbers','combatLogName','value','smoothScrollDown','counterAttack','IconBattleStart','_hp','_preemptive','createDisplayObjects','_actorCommandWindow','tGMdF','unshift','AiMfX','magicReflection','BgFilename2','SCROLL_SPEED_CURSOR','Text_AntiDmgBarrier_Nullify','_combatLogs','includes','rHEeQ','ShowBattleStart','addCustomCommands','update','createCustomBackgroundImages','_mp','oAbof','currentSymbol','nHuCF','emerge','refreshDimmerBitmap','ConvertParams','ShowFail','pETFs','13901wpZwvN','split','_cancelButton','Window_MenuCommand_addOriginalCommands','combatLog_Preemptive_Icon','IconHealHP','onAntiDamageCancelBarrier','Icon_StealItems_Steal','smoothScrollTo','AFFkX','decreaseBuff','setBackgroundOpacity','actorNoDamage','abs','addTextToCombatLog','maxScrollY','onAntiDamageTpBarrier','tPUsG','xCvfh','processAbort','combatLog_Reflection_Icon','StoredLogs','isCursorMovable','_commandWindow','ShowStateRemove','actorRecovery','addOriginalCommands','isAutoColorAffected','Window_BattleLog_startAction','close','actorLoss','addHorzLineToCombatLog','CombatLogAddText','boxWidth','vBHpe','\x5cI[%1]%2','initCombatLogBase','Chize','combatLogBuffChanges','Bypass','NIfDD','isOpen','isHit','partyName','Game_Battler_removeState','_windowLayer','xlcal','commandName','combatLog_TP_Dmg','inBattle','ShowBattleSysStbInstant','rveOH','Window_BattleLog_displayMiss','Text_AntiDmgBarrier_Reduce','addLoadListener','message2','SystemShowCombatLogParty','version','ShowHP','_combatLog_HistoryFmt','isCombatLogCommandVisible','isMenuCursorBlacklisted','combatLog_Evasion_Icon','Show_AntiDmgBarrier_Reduce','Dmg','723OwYSgo','refresh','ShowMP','QbSyi','isBypassCombatLog','684CpURJl','addStealText','onCtbOrderChange','STR','WQHKk','actorDamage','Scene_Battle_isAnyInputWindowActive','TextBattleSysStbInstant','TextColorDmgMP','1FPREyD','CHJxG','refreshCombatLog','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','prototype','arfGk','combatLog_TP_Heal','exit','xrEDx','escapeFailure','isTpb','Scene_Battle_isTimeActive','createHistoryWindow','Game_Battler_onAntiDamageTpBarrier','Game_Battler_addState','combatLog_Result_Defeat','onAntiDamageMpBarrier','Window_ActorCommand_makeCommandList','ShowMainMenu','processCursorMove','Icon_LifeStateEffects_%1','centerSprite','CombatLogBattle_BgType','luUvd','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','openness','TextEndTurn','deactivate','TCxjW','combatLog_HP_Dmg','popScene','enemyLoss','activate','BattleManager_processDefeat','onLifeStateEffect','updateTurnEnd','Window_BattleLog_displayCounter','message3','dZoQd','BypassCombatLog','createCombatLogWindow','criticalToActor','enemyNoDamage','combatLogHelp','IconEndTurn','SCROLL_SPEED_PAGEDN','\x5cN[%1]','isCombatLogHotKeyActive','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','_dimmerSprite','BattleManager_endTurn','createCommandWindow','IconDmgMP','Window_BattleLog_displayReflection','IconPreemptive','_bypassAddToCombatLog','height','IconCounter','combatLog_EnemyEmerge_Icon','drawHorzLine','evasion','closeCombatLog','ARRAYSTR','Show_LifeStateEffects_%1','getTotalCombatLogs','combatLog_BattleStart','_lastWindow','ShowIcons','addCommand','combatLog_EndTurn','77wWmVOY','Scene_Battle_createDisplayObjects','useItem','HORZ_LINE_THICKNESS','sjkgX','displayCurrentState','combatLog_MP_NoDmg','_combatLogWindow','prunp','map','combatLog_MP_Heal','ShowTP','combatLog_BattleCmd_Name','displayReflection','open','processCancel','combatLog_StartTurn_Icon','IconNoDmgTP','substitute','BattleManager_updateTurnEnd','filter','Icon','ShowEscape','CombatLogAddHorzLine','Window_ActorCommand_updateHelp','QaBrp','STRUCT','SystemShowCombatLogActor','_scene','Window_BattleLog_displayEvasion','fillRect','getAntiDamageBarrierReduction','displayMiss','applyCombatLogColor','RemoveUnwantedTextCodes','ShowStartTurn','_list','FUNC','Text','format','ShowEndTurn','iowoO','isPressed','vuJOH','partyCmd','IconEscape','trim','description','Game_Battler_useItem','setBackgroundType','CombatHistoryPrevious','Window_BattleLog_addStealText','eraseBuff','success','addState','Settings','adjustSprite','initialize','ShowBattleSysCtbOrderChange','CombatHistory_RectJS','addCombatLogCommand','ioGRk','drawRect','Game_System_initialize','ARRAYFUNC','xEboi','ShowCounter','Window_BattleLog_displayCurrentState','states','Game_Battler_onAtbInterrupt','resize','_actorId','allowShiftScrolling','General','Window_Selectable_allowShiftScrolling','history','anchor','CombatHistory_BgType','displayAbsorptionBarrierPopup','buffAdd','TextColorHealHP','combatLogWindowRect','cursorUp','result','233GVNKPJ','setHp','cSAgJ','width','createDimmerSprite','FbavE','_combatLogIndex','ShowEvade','CombatHistoryLatest','setCombatLogHotKeyActive','isAnyInputWindowActive','updateHelp','Game_BattlerBase_getAntiDamageBarrierReduction','ShowAddDebuff','visible','actorCmd','shift','Game_Battler_stbGainInstant','findSymbol','SystemShowCombatLogMenu','TextBattleSysAtbInterrupt','CombatLogMenu_RectJS','loadTitle2','combatLog_Result_Escape','ShowEnemyEmerge','combatLog_%1_%2','gainSilentTp','ShowStateCurrent','_historyWindow','YViZO','commandStyle','BgSettings','istAr','removeState','_combatLogAccess','ShowStateAdd'];const _0x2acc51=_0x11a3;(function(_0x43871e,_0x1680f5){const _0x5a8feb=_0x11a3;while(!![]){try{const _0x15d496=parseInt(_0x5a8feb(0x1c7))*parseInt(_0x5a8feb(0x325))+-parseInt(_0x5a8feb(0x265))+parseInt(_0x5a8feb(0x245))*parseInt(_0x5a8feb(0x367))+parseInt(_0x5a8feb(0x2e5))*parseInt(_0x5a8feb(0x21b))+parseInt(_0x5a8feb(0x290))+-parseInt(_0x5a8feb(0x173))*-parseInt(_0x5a8feb(0x178))+-parseInt(_0x5a8feb(0x181))*parseInt(_0x5a8feb(0x2d3));if(_0x15d496===_0x1680f5)break;else _0x43871e['push'](_0x43871e['shift']());}catch(_0x4cdcbd){_0x43871e['push'](_0x43871e['shift']());}}}(_0x57a2,0xf16fb));var label=_0x2acc51(0x26e),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x2acc51(0x1db)](function(_0x2bbd38){const _0x59cc4d=_0x2acc51;return _0x2bbd38[_0x59cc4d(0x2e8)]&&_0x2bbd38[_0x59cc4d(0x1f6)][_0x59cc4d(0x358)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0x2acc51(0x1fe)]||{},VisuMZ['ConvertParams']=function(_0x48b7f9,_0x26e096){const _0x22591f=_0x2acc51;for(const _0x1c0f74 in _0x26e096){if(_0x1c0f74[_0x22591f(0x32e)](/(.*):(.*)/i)){const _0x4b9f0e=String(RegExp['$1']),_0x58491a=String(RegExp['$2'])['toUpperCase']()[_0x22591f(0x1f5)]();let _0x41afa8,_0x520c07,_0x10366b;switch(_0x58491a){case'NUM':_0x41afa8=_0x26e096[_0x1c0f74]!==''?Number(_0x26e096[_0x1c0f74]):0x0;break;case'ARRAYNUM':_0x520c07=_0x26e096[_0x1c0f74]!==''?JSON[_0x22591f(0x314)](_0x26e096[_0x1c0f74]):[],_0x41afa8=_0x520c07[_0x22591f(0x1d0)](_0x42031f=>Number(_0x42031f));break;case _0x22591f(0x289):_0x41afa8=_0x26e096[_0x1c0f74]!==''?eval(_0x26e096[_0x1c0f74]):null;break;case _0x22591f(0x24f):_0x520c07=_0x26e096[_0x1c0f74]!==''?JSON[_0x22591f(0x314)](_0x26e096[_0x1c0f74]):[],_0x41afa8=_0x520c07[_0x22591f(0x1d0)](_0x2f1552=>eval(_0x2f1552));break;case _0x22591f(0x24c):_0x41afa8=_0x26e096[_0x1c0f74]!==''?JSON[_0x22591f(0x314)](_0x26e096[_0x1c0f74]):'';break;case'ARRAYJSON':_0x520c07=_0x26e096[_0x1c0f74]!==''?JSON[_0x22591f(0x314)](_0x26e096[_0x1c0f74]):[],_0x41afa8=_0x520c07[_0x22591f(0x1d0)](_0x22bcd7=>JSON[_0x22591f(0x314)](_0x22bcd7));break;case _0x22591f(0x1ec):_0x41afa8=_0x26e096[_0x1c0f74]!==''?new Function(JSON[_0x22591f(0x314)](_0x26e096[_0x1c0f74])):new Function('return\x200');break;case _0x22591f(0x207):_0x520c07=_0x26e096[_0x1c0f74]!==''?JSON[_0x22591f(0x314)](_0x26e096[_0x1c0f74]):[],_0x41afa8=_0x520c07['map'](_0xa1d7f3=>new Function(JSON['parse'](_0xa1d7f3)));break;case _0x22591f(0x17b):_0x41afa8=_0x26e096[_0x1c0f74]!==''?String(_0x26e096[_0x1c0f74]):'';break;case _0x22591f(0x1bf):_0x520c07=_0x26e096[_0x1c0f74]!==''?JSON[_0x22591f(0x314)](_0x26e096[_0x1c0f74]):[],_0x41afa8=_0x520c07['map'](_0x336f16=>String(_0x336f16));break;case _0x22591f(0x1e1):_0x10366b=_0x26e096[_0x1c0f74]!==''?JSON[_0x22591f(0x314)](_0x26e096[_0x1c0f74]):{},_0x41afa8=VisuMZ[_0x22591f(0x364)]({},_0x10366b);break;case'ARRAYSTRUCT':_0x520c07=_0x26e096[_0x1c0f74]!==''?JSON[_0x22591f(0x314)](_0x26e096[_0x1c0f74]):[],_0x41afa8=_0x520c07[_0x22591f(0x1d0)](_0x549352=>VisuMZ[_0x22591f(0x364)]({},JSON[_0x22591f(0x314)](_0x549352)));break;default:continue;}_0x48b7f9[_0x4b9f0e]=_0x41afa8;}}return _0x48b7f9;},(_0x5a30ed=>{const _0x50feb0=_0x2acc51,_0x375418=_0x5a30ed[_0x50feb0(0x330)];for(const _0x227ec0 of dependencies){if(_0x50feb0(0x1e0)==='QaBrp'){if(!Imported[_0x227ec0]){alert(_0x50feb0(0x199)['format'](_0x375418,_0x227ec0)),SceneManager['exit']();break;}}else _0x639d4d=this[_0x50feb0(0x2de)]()?_0x49d258[_0x50feb0(0x385)]:_0x5353b3[_0x50feb0(0x1a0)],_0x2debd9=_0x33c0bd[_0x50feb0(0x295)];}const _0x271cb1=_0x5a30ed[_0x50feb0(0x1f6)];if(_0x271cb1[_0x50feb0(0x32e)](/\[Version[ ](.*?)\]/i)){const _0x152572=Number(RegExp['$1']);_0x152572!==VisuMZ[label][_0x50feb0(0x16b)]&&(alert(_0x50feb0(0x1b1)[_0x50feb0(0x1ee)](_0x375418,_0x152572)),SceneManager[_0x50feb0(0x188)]());}if(_0x271cb1['match'](/\[Tier[ ](\d+)\]/i)){const _0x53bfef=Number(RegExp['$1']);if(_0x53bfef<tier){if(_0x50feb0(0x30c)!=='ozoMQ')alert(_0x50feb0(0x184)[_0x50feb0(0x1ee)](_0x375418,_0x53bfef,tier)),SceneManager['exit']();else{const _0x199ce5=this[_0x50feb0(0x2be)](_0x17b5b5);_0x28611d[_0x50feb0(0x26e)][_0x50feb0(0x393)][_0x50feb0(0x2af)](this,_0x2f563d);const _0x215598=this[_0x50feb0(0x2be)](_0x4761ed);this[_0x50feb0(0x288)](_0x2217b0,_0x199ce5,_0x215598);}}else tier=Math[_0x50feb0(0x304)](_0x53bfef,tier);}VisuMZ[_0x50feb0(0x364)](VisuMZ[label][_0x50feb0(0x1fe)],_0x5a30ed['parameters']);})(pluginData),PluginManager['registerCommand'](pluginData['name'],_0x2acc51(0x387),_0x3d6775=>{const _0x3e3b02=_0x2acc51;VisuMZ['ConvertParams'](_0x3d6775,_0x3d6775);const _0x2ddd94=_0x3d6775[_0x3e3b02(0x1ed)],_0x9c0bf5=_0x3d6775[_0x3e3b02(0x1dc)];$gameSystem[_0x3e3b02(0x375)](_0x2ddd94,_0x9c0bf5);}),PluginManager[_0x2acc51(0x2e2)](pluginData[_0x2acc51(0x330)],_0x2acc51(0x1de),_0x17e091=>{const _0x86bad0=_0x2acc51;VisuMZ[_0x86bad0(0x364)](_0x17e091,_0x17e091),$gameSystem['addHorzLineToCombatLog']();}),PluginManager[_0x2acc51(0x2e2)](pluginData[_0x2acc51(0x330)],'CombatLogBypass',_0x11db46=>{const _0xc52ce9=_0x2acc51;VisuMZ[_0xc52ce9(0x364)](_0x11db46,_0x11db46);const _0x5ae0ba=_0x11db46[_0xc52ce9(0x38e)];$gameSystem[_0xc52ce9(0x277)](_0x5ae0ba);}),PluginManager[_0x2acc51(0x2e2)](pluginData[_0x2acc51(0x330)],_0x2acc51(0x323),_0xa29cc1=>{const _0xe23193=_0x2acc51;VisuMZ[_0xe23193(0x364)](_0xa29cc1,_0xa29cc1);const _0x566128=_0xa29cc1['Enable'];$gameSystem[_0xe23193(0x224)](_0x566128);}),PluginManager[_0x2acc51(0x2e2)](pluginData[_0x2acc51(0x330)],_0x2acc51(0x22e),_0xfbdff=>{const _0xd8c76=_0x2acc51;VisuMZ[_0xd8c76(0x364)](_0xfbdff,_0xfbdff);const _0x1036bf=_0xfbdff[_0xd8c76(0x31c)];$gameSystem[_0xd8c76(0x2f3)](_0x1036bf);}),PluginManager[_0x2acc51(0x2e2)](pluginData[_0x2acc51(0x330)],_0x2acc51(0x16a),_0x51df04=>{const _0x1a6da5=_0x2acc51;VisuMZ[_0x1a6da5(0x364)](_0x51df04,_0x51df04);const _0x1f4fde=_0x51df04[_0x1a6da5(0x31c)];$gameSystem[_0x1a6da5(0x26d)](_0x1f4fde);}),PluginManager[_0x2acc51(0x2e2)](pluginData[_0x2acc51(0x330)],_0x2acc51(0x1e2),_0x967171=>{const _0x2d0c13=_0x2acc51;VisuMZ[_0x2d0c13(0x364)](_0x967171,_0x967171);const _0x273a62=_0x967171[_0x2d0c13(0x31c)];$gameSystem[_0x2d0c13(0x2d2)](_0x273a62);}),VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x331)]={'BypassCombatLog':/<BYPASS COMBAT LOG>/i},ImageManager[_0x2acc51(0x2f9)]=VisuMZ['CombatLog'][_0x2acc51(0x1fe)][_0x2acc51(0x210)][_0x2acc51(0x1dc)],ImageManager[_0x2acc51(0x316)]=VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x1fe)][_0x2acc51(0x26e)][_0x2acc51(0x34b)],ImageManager[_0x2acc51(0x1bb)]=VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x1fe)]['CombatLog'][_0x2acc51(0x33b)],ImageManager[_0x2acc51(0x36b)]=VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x1fe)][_0x2acc51(0x26e)][_0x2acc51(0x1b7)],ImageManager[_0x2acc51(0x2fb)]=VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x1fe)][_0x2acc51(0x26e)]['IconSurprise'],ImageManager['combatLog_StartTurn_Icon']=VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x1fe)][_0x2acc51(0x26e)]['IconStartTurn'],ImageManager['combatLog_EndTurn_Icon']=VisuMZ[_0x2acc51(0x26e)]['Settings'][_0x2acc51(0x26e)][_0x2acc51(0x1ad)],ImageManager['combatLog_Result_Victory']=VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x1fe)][_0x2acc51(0x26e)][_0x2acc51(0x2c3)],ImageManager[_0x2acc51(0x232)]=VisuMZ['CombatLog'][_0x2acc51(0x1fe)]['CombatLog'][_0x2acc51(0x1f4)],ImageManager[_0x2acc51(0x190)]=VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x1fe)]['CombatLog']['IconDefeat'],ImageManager[_0x2acc51(0x2c1)]=VisuMZ['CombatLog']['Settings'][_0x2acc51(0x26e)][_0x2acc51(0x1ba)],ImageManager[_0x2acc51(0x37b)]=VisuMZ['CombatLog'][_0x2acc51(0x1fe)][_0x2acc51(0x26e)][_0x2acc51(0x25c)],ImageManager[_0x2acc51(0x25a)]=VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x1fe)][_0x2acc51(0x26e)]['IconSubst'],ImageManager['combatLog_Failure_Icon']=VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x1fe)][_0x2acc51(0x26e)][_0x2acc51(0x2e1)],ImageManager[_0x2acc51(0x30f)]=VisuMZ[_0x2acc51(0x26e)]['Settings'][_0x2acc51(0x26e)]['IconCritical'],ImageManager['combatLog_Miss_Icon']=VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x1fe)][_0x2acc51(0x26e)][_0x2acc51(0x2ac)],ImageManager[_0x2acc51(0x170)]=VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x1fe)][_0x2acc51(0x26e)]['IconEvade'],ImageManager[_0x2acc51(0x2db)]=VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x1fe)][_0x2acc51(0x26e)][_0x2acc51(0x36c)],ImageManager[_0x2acc51(0x19e)]=VisuMZ[_0x2acc51(0x26e)]['Settings']['CombatLog']['IconDmgHP'],ImageManager[_0x2acc51(0x271)]=VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x1fe)]['CombatLog']['IconNoDmgHP'],ImageManager[_0x2acc51(0x1d1)]=VisuMZ['CombatLog']['Settings'][_0x2acc51(0x26e)]['IconHealMP'],ImageManager[_0x2acc51(0x295)]=VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x1fe)][_0x2acc51(0x26e)][_0x2acc51(0x1b5)],ImageManager[_0x2acc51(0x1cd)]=VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x1fe)][_0x2acc51(0x26e)][_0x2acc51(0x27b)],ImageManager[_0x2acc51(0x187)]=VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x1fe)][_0x2acc51(0x26e)][_0x2acc51(0x32f)],ImageManager['combatLog_TP_Dmg']=VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x1fe)][_0x2acc51(0x26e)]['IconDmgTP'],ImageManager[_0x2acc51(0x29e)]=VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x1fe)]['CombatLog'][_0x2acc51(0x1d8)],TextManager[_0x2acc51(0x1d3)]=VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x1fe)][_0x2acc51(0x210)]['Name'],TextManager[_0x2acc51(0x1c2)]=VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x1fe)][_0x2acc51(0x26e)][_0x2acc51(0x2c4)],TextManager['combatLog_StartTurn']=VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x1fe)]['CombatLog'][_0x2acc51(0x309)],TextManager[_0x2acc51(0x1c6)]=VisuMZ['CombatLog'][_0x2acc51(0x1fe)][_0x2acc51(0x26e)][_0x2acc51(0x19b)],TextManager['combatLogHelp']=VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x1fe)][_0x2acc51(0x210)]['BattleHelpCombatLog']??'View\x20the\x20combat\x20log.',TextManager['_combatLog_Latest']=VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x1fe)][_0x2acc51(0x278)][_0x2acc51(0x223)],TextManager[_0x2acc51(0x16d)]=VisuMZ['CombatLog'][_0x2acc51(0x1fe)][_0x2acc51(0x278)][_0x2acc51(0x1f9)],ColorManager[_0x2acc51(0x2db)]=VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x1fe)][_0x2acc51(0x26e)][_0x2acc51(0x217)],ColorManager[_0x2acc51(0x19e)]=VisuMZ[_0x2acc51(0x26e)]['Settings'][_0x2acc51(0x26e)][_0x2acc51(0x26b)],ColorManager['combatLog_HP_NoDmg']=VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x1fe)][_0x2acc51(0x26e)]['TextColorNoDmgHP'],ColorManager[_0x2acc51(0x1d1)]=VisuMZ[_0x2acc51(0x26e)]['Settings'][_0x2acc51(0x26e)][_0x2acc51(0x2ae)],ColorManager[_0x2acc51(0x295)]=VisuMZ['CombatLog'][_0x2acc51(0x1fe)][_0x2acc51(0x26e)][_0x2acc51(0x180)],ColorManager['combatLog_MP_NoDmg']=VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x1fe)][_0x2acc51(0x26e)][_0x2acc51(0x27b)],ColorManager[_0x2acc51(0x187)]=VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x1fe)][_0x2acc51(0x26e)][_0x2acc51(0x2bf)],ColorManager['combatLog_TP_Dmg']=VisuMZ[_0x2acc51(0x26e)]['Settings'][_0x2acc51(0x26e)][_0x2acc51(0x2d6)],ColorManager[_0x2acc51(0x29e)]=VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x1fe)][_0x2acc51(0x26e)][_0x2acc51(0x28e)],ColorManager[_0x2acc51(0x1e8)]=function(_0x1a5cb6,_0x144205){const _0x3fb939=_0x2acc51;if(!VisuMZ[_0x3fb939(0x26e)][_0x3fb939(0x1fe)][_0x3fb939(0x26e)][_0x3fb939(0x346)])return Math[_0x3fb939(0x374)](_0x144205);const _0x3a5473=_0x3fb939(0x234);let _0x14bceb;if(_0x144205>0x0)_0x14bceb=_0x3a5473[_0x3fb939(0x1ee)](_0x1a5cb6,_0x3fb939(0x2e7));else{if(_0x144205===0x0){if(_0x3fb939(0x189)!==_0x3fb939(0x2b4))_0x14bceb=_0x3a5473[_0x3fb939(0x1ee)](_0x1a5cb6,_0x3fb939(0x249));else{let _0x2f9242=_0x223bd5['evasion'],_0x2f7409=_0x2f9242[_0x3fb939(0x1ee)](_0x2b796d[_0x3fb939(0x347)]()),_0x422dc6=_0x48b03a[_0x3fb939(0x170)];_0x168d02['addTextToCombatLog'](_0x2f7409,_0x422dc6);}}else{if(_0x3fb939(0x341)!==_0x3fb939(0x341)){let _0x251067=_0x130956[_0x3fb939(0x2b8)],_0xfd4184=_0x6c9d3c['combatLog_CriticalHit_Icon'];_0x169f88[_0x3fb939(0x375)](_0x251067,_0xfd4184);}else _0x14bceb=_0x3a5473[_0x3fb939(0x1ee)](_0x1a5cb6,_0x3fb939(0x172));}}_0x144205=Math['abs'](_0x144205);if(ColorManager[_0x14bceb])return'\x5cC[%1]%2\x5cC[0]'[_0x3fb939(0x1ee)](ColorManager[_0x14bceb],_0x144205);else{if(_0x3fb939(0x378)!=='FUqWa')return _0x144205;else{let _0x5dc723=_0x1cc979[_0x3fb939(0x1ee)](this[_0x3fb939(0x347)]()),_0x39eeca=_0x2e5fc2[_0x3fb939(0x279)];_0x26ccfd[_0x3fb939(0x375)](_0x5dc723,_0x39eeca);}}},SceneManager[_0x2acc51(0x27a)]=function(){const _0x63c2ca=_0x2acc51;return this['_scene']&&this['_scene'][_0x63c2ca(0x25f)]===Scene_Battle;},VisuMZ['CombatLog'][_0x2acc51(0x2c8)]=BattleManager[_0x2acc51(0x300)],BattleManager[_0x2acc51(0x300)]=function(){const _0x5aa960=_0x2acc51;VisuMZ[_0x5aa960(0x26e)][_0x5aa960(0x2c8)][_0x5aa960(0x2af)](this),this[_0x5aa960(0x332)]();},BattleManager['startBattleCombatLog']=function(){const _0x52cfbc=_0x2acc51,_0x29c391=VisuMZ['CombatLog']['Settings'][_0x52cfbc(0x26e)];if(_0x29c391[_0x52cfbc(0x35a)]){$gameSystem[_0x52cfbc(0x311)](),$gameSystem['setBypassCombatLog'](![]),$gameSystem[_0x52cfbc(0x386)]();let _0x2f606c=TextManager[_0x52cfbc(0x1c2)],_0xdb138c=ImageManager[_0x52cfbc(0x316)];$gameSystem[_0x52cfbc(0x375)](_0x2f606c,_0xdb138c),$gameSystem[_0x52cfbc(0x386)]();}if(_0x29c391[_0x52cfbc(0x233)])for(const _0x65b0c0 of $gameTroop['aliveMembers']()){let _0x2dccb3=TextManager[_0x52cfbc(0x362)][_0x52cfbc(0x1ee)](_0x65b0c0[_0x52cfbc(0x347)]()),_0x10942a=ImageManager[_0x52cfbc(0x1bb)];$gameSystem[_0x52cfbc(0x375)](_0x2dccb3,_0x10942a);}if(_0x29c391[_0x52cfbc(0x2c0)]){if(_0x52cfbc(0x359)!=='rHEeQ')return _0x5a8fad[_0x52cfbc(0x392)][_0x52cfbc(0x1ee)](this[_0x52cfbc(0x335)]()[_0x52cfbc(0x347)]());else{if(this[_0x52cfbc(0x34d)]){let _0x3a5336=TextManager[_0x52cfbc(0x257)][_0x52cfbc(0x1ee)]($gameParty[_0x52cfbc(0x347)]()),_0x5ae092=ImageManager['combatLog_Preemptive_Icon'];$gameSystem[_0x52cfbc(0x375)](_0x3a5336,_0x5ae092);}else{if(this[_0x52cfbc(0x31a)]){if(_0x52cfbc(0x38f)===_0x52cfbc(0x25e)){const _0x1b8e61=this['itemLineRect'](_0x275e5e),_0x20c854=this[_0x52cfbc(0x396)](_0x5be5a0);_0x20c854===_0x52cfbc(0x28d)?this[_0x52cfbc(0x1bc)](_0x1b8e61):this[_0x52cfbc(0x287)](_0x20c854,_0x1b8e61['x'],_0x1b8e61['y'],_0x1b8e61[_0x52cfbc(0x21e)]);}else{let _0x32c1b9=TextManager['surprise'][_0x52cfbc(0x1ee)]($gameParty[_0x52cfbc(0x347)]()),_0x13b6af=ImageManager[_0x52cfbc(0x2fb)];$gameSystem[_0x52cfbc(0x375)](_0x32c1b9,_0x13b6af);}}}}}},VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x1b3)]=BattleManager[_0x2acc51(0x33c)],BattleManager[_0x2acc51(0x33c)]=function(){const _0x18bfa3=_0x2acc51;if($gameTroop['turnCount']()>0x0&&VisuMZ['CombatLog'][_0x18bfa3(0x1fe)][_0x18bfa3(0x26e)][_0x18bfa3(0x1ef)]){if(_0x18bfa3(0x220)===_0x18bfa3(0x186)){if(this['isBypassCombatLog']())return;if(!_0x37517b)return;_0x448e89=_0xdcded4||0x0,_0x384f36=_0x5e5ec5[_0x18bfa3(0x26e)][_0x18bfa3(0x1e9)](_0x4b57c0);const _0x2acfab=this['getCombatLog'](),_0x5e9e59=_0x57d774[_0x18bfa3(0x368)]('\x0a');while(_0x5e9e59[_0x18bfa3(0x2ec)]>0x0){let _0xc23e69=_0x5e9e59[_0x18bfa3(0x22b)]();_0x8553c3[_0x18bfa3(0x26e)][_0x18bfa3(0x1fe)][_0x18bfa3(0x26e)]['ShowIcons']&&(_0xc23e69=_0x18bfa3(0x38a)[_0x18bfa3(0x1ee)](_0x40920f,_0xc23e69)),_0x291de4=0x0,_0x2acfab[_0x18bfa3(0x255)](_0xc23e69);}this['refreshCombatLog']();}else{$gameSystem[_0x18bfa3(0x386)]();let _0x2ff745=TextManager['combatLog_EndTurn'][_0x18bfa3(0x1ee)]($gameTroop[_0x18bfa3(0x2c6)]()),_0x22b706=ImageManager['combatLog_EndTurn_Icon'];$gameSystem[_0x18bfa3(0x375)](_0x2ff745,_0x22b706),$gameSystem['addHorzLineToCombatLog']();}}VisuMZ['CombatLog'][_0x18bfa3(0x1b3)]['call'](this);},VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x1da)]=BattleManager[_0x2acc51(0x1a4)],BattleManager[_0x2acc51(0x1a4)]=function(){const _0x1b0ae0=_0x2acc51;VisuMZ[_0x1b0ae0(0x26e)][_0x1b0ae0(0x1da)][_0x1b0ae0(0x2af)](this);if(this[_0x1b0ae0(0x18b)]()&&VisuMZ['CombatLog']['Settings'][_0x1b0ae0(0x26e)][_0x1b0ae0(0x1ea)]&&$gameTroop[_0x1b0ae0(0x2c6)]()>0x0){if(_0x1b0ae0(0x2f2)!=='zxdyx'){if(!this['isCombatLogCommandVisible']())return;const _0x4b26ed=_0x18d896[_0x1b0ae0(0x1d3)],_0x1b23d8=this[_0x1b0ae0(0x308)]();this[_0x1b0ae0(0x1c5)](_0x4b26ed,_0x1b0ae0(0x299),_0x1b23d8);}else{$gameSystem[_0x1b0ae0(0x386)]();let _0x52d72b=TextManager[_0x1b0ae0(0x30a)][_0x1b0ae0(0x1ee)]($gameTroop[_0x1b0ae0(0x2c6)]()),_0x3a154d=ImageManager[_0x1b0ae0(0x1d7)];$gameSystem[_0x1b0ae0(0x375)](_0x52d72b,_0x3a154d);}}},VisuMZ['CombatLog'][_0x2acc51(0x303)]=BattleManager['processVictory'],BattleManager[_0x2acc51(0x272)]=function(){const _0x4cbb8c=_0x2acc51;$gameSystem[_0x4cbb8c(0x277)](!![]),VisuMZ[_0x4cbb8c(0x26e)][_0x4cbb8c(0x303)]['call'](this),$gameSystem[_0x4cbb8c(0x277)](![]);if(VisuMZ['CombatLog']['Settings'][_0x4cbb8c(0x26e)][_0x4cbb8c(0x313)]){$gameSystem[_0x4cbb8c(0x386)]();let _0x4b8d01=TextManager['victory'][_0x4cbb8c(0x1ee)]($gameParty[_0x4cbb8c(0x347)]()),_0x4451d6=ImageManager['combatLog_Result_Victory'];$gameSystem['addTextToCombatLog'](_0x4b8d01,_0x4451d6),$gameSystem[_0x4cbb8c(0x386)]();}},VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x315)]=BattleManager[_0x2acc51(0x37a)],BattleManager[_0x2acc51(0x37a)]=function(){const _0x1a5943=_0x2acc51;$gameSystem[_0x1a5943(0x277)](!![]),VisuMZ[_0x1a5943(0x26e)][_0x1a5943(0x315)][_0x1a5943(0x2af)](this),$gameSystem[_0x1a5943(0x277)](![]),$gameSystem['addHorzLineToCombatLog']();},VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x2a6)]=BattleManager[_0x2acc51(0x266)],BattleManager[_0x2acc51(0x266)]=function(){const _0x1b6554=_0x2acc51;VisuMZ[_0x1b6554(0x26e)][_0x1b6554(0x2a6)][_0x1b6554(0x2af)](this);if(VisuMZ['CombatLog'][_0x1b6554(0x1fe)][_0x1b6554(0x26e)]['ShowEscape']){$gameSystem[_0x1b6554(0x386)]();let _0x281b21=TextManager['escapeStart'][_0x1b6554(0x1ee)]($gameParty[_0x1b6554(0x347)]()),_0x28bef5=ImageManager[_0x1b6554(0x232)];$gameSystem[_0x1b6554(0x375)](_0x281b21,_0x28bef5),$gameSystem['addHorzLineToCombatLog']();}},VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x2d9)]=BattleManager[_0x2acc51(0x256)],BattleManager[_0x2acc51(0x256)]=function(){const _0x1c2db1=_0x2acc51;VisuMZ['CombatLog']['BattleManager_onEscapeFailure'][_0x1c2db1(0x2af)](this);if(VisuMZ[_0x1c2db1(0x26e)][_0x1c2db1(0x1fe)]['CombatLog'][_0x1c2db1(0x1dd)]){if(_0x1c2db1(0x28c)!==_0x1c2db1(0x208)){$gameSystem[_0x1c2db1(0x386)]();let _0x94d01b=TextManager[_0x1c2db1(0x319)][_0x1c2db1(0x1ee)]($gameParty[_0x1c2db1(0x347)]()),_0x57cf11=ImageManager[_0x1c2db1(0x232)];$gameSystem[_0x1c2db1(0x375)](_0x94d01b,_0x57cf11),$gameSystem['addTextToCombatLog'](TextManager[_0x1c2db1(0x18a)],_0x57cf11),$gameSystem[_0x1c2db1(0x386)]();}else{if(this['_combatLogAccess']===_0x5993a9)this[_0x1c2db1(0x283)]();return this[_0x1c2db1(0x23d)][_0x1c2db1(0x22a)];}}},VisuMZ[_0x2acc51(0x26e)]['BattleManager_processDefeat']=BattleManager[_0x2acc51(0x243)],BattleManager[_0x2acc51(0x243)]=function(){const _0x8565f1=_0x2acc51;VisuMZ['CombatLog'][_0x8565f1(0x1a2)][_0x8565f1(0x2af)](this);if(VisuMZ[_0x8565f1(0x26e)]['Settings'][_0x8565f1(0x26e)][_0x8565f1(0x2ba)]){$gameSystem[_0x8565f1(0x386)]();let _0x131c73=TextManager[_0x8565f1(0x338)][_0x8565f1(0x1ee)]($gameParty[_0x8565f1(0x347)]()),_0x578997=ImageManager[_0x8565f1(0x190)];$gameSystem['addTextToCombatLog'](_0x131c73,_0x578997),$gameSystem['addHorzLineToCombatLog']();}},VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x206)]=Game_System[_0x2acc51(0x185)][_0x2acc51(0x200)],Game_System['prototype'][_0x2acc51(0x200)]=function(){const _0x158271=_0x2acc51;VisuMZ[_0x158271(0x26e)][_0x158271(0x206)]['call'](this),this['initCombatLogBase'](),this[_0x158271(0x283)]();},Game_System[_0x2acc51(0x2d5)]=VisuMZ['CombatLog'][_0x2acc51(0x1fe)]['General'][_0x2acc51(0x37c)]??0x5,Game_System[_0x2acc51(0x185)][_0x2acc51(0x38b)]=function(){const _0x4501c7=_0x2acc51;this[_0x4501c7(0x357)]=[],this[_0x4501c7(0x1b8)]=![];},Game_System[_0x2acc51(0x185)][_0x2acc51(0x252)]=function(_0x26d28c){const _0x58526f=_0x2acc51;if(this[_0x58526f(0x357)]===undefined)this['initCombatLogBase']();return _0x26d28c=_0x26d28c||0x0,this[_0x58526f(0x357)][_0x26d28c]=this['_combatLogs'][_0x26d28c]||[],this[_0x58526f(0x357)][_0x26d28c];},Game_System[_0x2acc51(0x185)][_0x2acc51(0x375)]=function(_0x3f6a78,_0xac8313){const _0x5b7329=_0x2acc51;if(this[_0x5b7329(0x177)]())return;if(!_0x3f6a78)return;_0xac8313=_0xac8313||0x0,_0x3f6a78=VisuMZ[_0x5b7329(0x26e)]['RemoveUnwantedTextCodes'](_0x3f6a78);const _0x34bcfd=this['getCombatLog'](),_0x539c8d=_0x3f6a78[_0x5b7329(0x368)]('\x0a');while(_0x539c8d['length']>0x0){if(_0x5b7329(0x27e)==='MPZyF'){let _0x5efe49=_0x539c8d[_0x5b7329(0x22b)]();if(VisuMZ[_0x5b7329(0x26e)][_0x5b7329(0x1fe)][_0x5b7329(0x26e)][_0x5b7329(0x1c4)]){if(_0x5b7329(0x29a)===_0x5b7329(0x29a))_0x5efe49=_0x5b7329(0x38a)['format'](_0xac8313,_0x5efe49);else{_0x569532[_0x5b7329(0x277)](!![]),_0x4f9730[_0x5b7329(0x26e)][_0x5b7329(0x303)][_0x5b7329(0x2af)](this),_0x2e26e8[_0x5b7329(0x277)](![]);if(_0x283518['CombatLog'][_0x5b7329(0x1fe)][_0x5b7329(0x26e)]['ShowVictory']){_0xb52546[_0x5b7329(0x386)]();let _0x5a290a=_0x34ee24[_0x5b7329(0x269)][_0x5b7329(0x1ee)](_0x2a8c49[_0x5b7329(0x347)]()),_0x320bd3=_0x3d0b10[_0x5b7329(0x26f)];_0x305ac7['addTextToCombatLog'](_0x5a290a,_0x320bd3),_0x2b6db8['addHorzLineToCombatLog']();}}}_0xac8313=0x0,_0x34bcfd[_0x5b7329(0x255)](_0x5efe49);}else{if(!_0x53aa07[_0x5b7329(0x27a)]())return;const _0x19acd2=_0x481ae3['_scene'][_0x5b7329(0x1ce)];_0x19acd2&&_0x19acd2[_0x5b7329(0x2ce)]();}}this[_0x5b7329(0x183)]();},Game_System[_0x2acc51(0x185)][_0x2acc51(0x386)]=function(){const _0x525bfb=_0x2acc51;if(this[_0x525bfb(0x177)]())return;const _0x40f3de=this['getCombatLog'](),_0x412b29=_0x40f3de[_0x40f3de[_0x525bfb(0x2ec)]-0x1];if(_0x412b29===_0x525bfb(0x28d))return;_0x40f3de[_0x525bfb(0x255)](_0x525bfb(0x28d)),this[_0x525bfb(0x183)]();},VisuMZ[_0x2acc51(0x26e)]['RemoveUnwantedTextCodes']=function(_0x345bfb){const _0x5549d7=_0x2acc51;while(_0x345bfb[_0x5549d7(0x32e)](/\\V\[(\d+)\]/gi)){_0x345bfb=_0x345bfb[_0x5549d7(0x2bd)](/\\V\[(\d+)\]/gi,(_0x3b7a1b,_0x2c7449)=>$gameVariables[_0x5549d7(0x348)](parseInt(_0x2c7449)));}return _0x345bfb;},Game_System[_0x2acc51(0x185)][_0x2acc51(0x311)]=function(){const _0x34dc19=_0x2acc51;if(this[_0x34dc19(0x357)]===undefined)this[_0x34dc19(0x38b)]();this[_0x34dc19(0x357)][_0x34dc19(0x351)]([]);while(this['_combatLogs']['length']>Game_System['COMBATLOG_MAXIMUM_BATTLE_ENTRIES']){this[_0x34dc19(0x357)]['pop']();}},Game_System['prototype'][_0x2acc51(0x1c1)]=function(){const _0x52a38b=_0x2acc51;if(this[_0x52a38b(0x357)]===undefined)this[_0x52a38b(0x38b)]();return this[_0x52a38b(0x357)][_0x52a38b(0x2ec)];},Game_System[_0x2acc51(0x185)][_0x2acc51(0x177)]=function(){const _0x154928=_0x2acc51;if(this['_bypassAddToCombatLog']===undefined)this[_0x154928(0x38b)]();return this[_0x154928(0x1b8)];},Game_System['prototype'][_0x2acc51(0x277)]=function(_0x93ef95){const _0x472e80=_0x2acc51;if(this[_0x472e80(0x1b8)]===undefined)this[_0x472e80(0x38b)]();this[_0x472e80(0x1b8)]=_0x93ef95;;},Game_System[_0x2acc51(0x185)][_0x2acc51(0x183)]=function(){const _0x3d0859=_0x2acc51;if(!SceneManager['isSceneBattle']())return;const _0x5e0019=SceneManager[_0x3d0859(0x1e3)]['_combatLogWindow'];if(_0x5e0019){if(_0x3d0859(0x238)!=='AZEGw')_0x5e0019[_0x3d0859(0x2ce)]();else{const _0x393667=_0x15c547[_0x3d0859(0x1e3)][_0x3d0859(0x1ce)];if(_0x393667&&_0x393667[_0x3d0859(0x390)]())return![];}}},Game_System[_0x2acc51(0x185)]['initCombatLogAccess']=function(){const _0x5a6ddc=_0x2acc51,_0x48dee3=VisuMZ[_0x5a6ddc(0x26e)][_0x5a6ddc(0x1fe)][_0x5a6ddc(0x210)];this[_0x5a6ddc(0x23d)]={'mainMenu':_0x48dee3[_0x5a6ddc(0x193)],'partyCmd':_0x48dee3[_0x5a6ddc(0x275)],'actorCmd':_0x48dee3[_0x5a6ddc(0x306)],'hotkeyOn':!![]};},Game_System['prototype']['isMainMenuCombatLogVisible']=function(){const _0x42ace2=_0x2acc51;if(this[_0x42ace2(0x23d)]===undefined)this[_0x42ace2(0x283)]();return this[_0x42ace2(0x23d)][_0x42ace2(0x2b9)];},Game_System['prototype']['isMainMenuCombatLogEnabled']=function(){const _0x3d3509=_0x2acc51;if(this[_0x3d3509(0x357)]===undefined)this[_0x3d3509(0x38b)]();return this[_0x3d3509(0x1c1)]()>0x0;},Game_System[_0x2acc51(0x185)][_0x2acc51(0x2f3)]=function(_0x4204bc){const _0x1995c6=_0x2acc51;if(this[_0x1995c6(0x23d)]===undefined)this[_0x1995c6(0x283)]();this['_combatLogAccess']['mainMenu']=_0x4204bc;},Game_System[_0x2acc51(0x185)][_0x2acc51(0x263)]=function(){const _0x3665e7=_0x2acc51;if(this[_0x3665e7(0x23d)]===undefined)this['initCombatLogAccess']();return this['_combatLogAccess'][_0x3665e7(0x1f3)];},Game_System['prototype'][_0x2acc51(0x26d)]=function(_0x35348a){const _0x12620d=_0x2acc51;if(this[_0x12620d(0x23d)]===undefined)this[_0x12620d(0x283)]();this[_0x12620d(0x23d)][_0x12620d(0x1f3)]=_0x35348a;},Game_System[_0x2acc51(0x185)][_0x2acc51(0x2ff)]=function(){const _0x182435=_0x2acc51;if(this[_0x182435(0x23d)]===undefined)this['initCombatLogAccess']();return this[_0x182435(0x23d)]['actorCmd'];},Game_System['prototype']['setActorCmdCombatLogVisible']=function(_0x47d340){const _0x425b84=_0x2acc51;if(this[_0x425b84(0x23d)]===undefined)this['initCombatLogAccess']();this[_0x425b84(0x23d)][_0x425b84(0x22a)]=_0x47d340;},Game_System[_0x2acc51(0x185)][_0x2acc51(0x1b0)]=function(){const _0x1d0aea=_0x2acc51;if(this[_0x1d0aea(0x23d)]===undefined)this[_0x1d0aea(0x283)]();return this[_0x1d0aea(0x23d)]['hotkeyOn'];},Game_System[_0x2acc51(0x185)][_0x2acc51(0x224)]=function(_0x4d8491){const _0x1d0f95=_0x2acc51;if(this['_combatLogAccess']===undefined)this[_0x1d0f95(0x283)]();this[_0x1d0f95(0x23d)][_0x1d0f95(0x328)]=_0x4d8491;},VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x2e9)]=Game_BattlerBase[_0x2acc51(0x185)][_0x2acc51(0x21c)],Game_BattlerBase[_0x2acc51(0x185)][_0x2acc51(0x21c)]=function(_0x1fbbf7){const _0x2bba54=_0x2acc51,_0x15ce22=this[_0x2bba54(0x34c)];VisuMZ[_0x2bba54(0x26e)][_0x2bba54(0x2e9)][_0x2bba54(0x2af)](this,_0x1fbbf7);if(!SceneManager[_0x2bba54(0x27a)]())return;if(this[_0x2bba54(0x31f)])return;if(!VisuMZ[_0x2bba54(0x26e)]['Settings'][_0x2bba54(0x26e)][_0x2bba54(0x16c)])return;const _0x24ac20=_0x1fbbf7;let _0x46cf53,_0x5e6950,_0x6f73b0=_0x24ac20-_0x15ce22;if(_0x24ac20>_0x15ce22){if(_0x2bba54(0x350)==='powOh'){const _0x3f7c07=this[_0x2bba54(0x329)];_0x57f6cd['CombatLog'][_0x2bba54(0x253)]['call'](this,_0x343066);if(!_0x24a09b['isSceneBattle']())return;if(this[_0x2bba54(0x31f)])return;if(this[_0x2bba54(0x2ca)])return;if(!_0x17b2d4[_0x2bba54(0x26e)][_0x2bba54(0x1fe)][_0x2bba54(0x26e)][_0x2bba54(0x1d2)])return;const _0x481405=_0x21fd0a;let _0x29383e,_0x4a3ab8,_0xb2f825=_0x481405-_0x3f7c07;if(_0x481405>_0x3f7c07)_0x29383e=this['isActor']()?_0x2fa1f3[_0x2bba54(0x380)]:_0x302b32[_0x2bba54(0x260)],_0x4a3ab8=_0x106397[_0x2bba54(0x187)];else _0x481405===_0x3f7c07?(_0x29383e=this[_0x2bba54(0x2de)]()?_0x4f1230[_0x2bba54(0x385)]:_0x40aa8a['enemyLoss'],_0x4a3ab8=_0x549256[_0x2bba54(0x29e)]):(_0x29383e=this[_0x2bba54(0x2de)]()?_0xc36fbd[_0x2bba54(0x385)]:_0x3f61aa[_0x2bba54(0x1a0)],_0x4a3ab8=_0x4c4668[_0x2bba54(0x397)]);_0xb2f825=_0x5b0833[_0x2bba54(0x1e8)]('TP',_0xb2f825);let _0x184805=_0x29383e['format'](this[_0x2bba54(0x347)](),_0xb2f825,_0x5860e9['tp']);_0x5dccaa[_0x2bba54(0x375)](_0x184805,_0x4a3ab8);}else _0x46cf53=this[_0x2bba54(0x2de)]()?TextManager['actorRecovery']:TextManager[_0x2bba54(0x2fc)],_0x5e6950=ImageManager['combatLog_HP_Heal'];}else{if(_0x24ac20===_0x15ce22){if(_0x2bba54(0x1f2)!==_0x2bba54(0x182))_0x46cf53=this[_0x2bba54(0x2de)]()?TextManager[_0x2bba54(0x373)]:TextManager[_0x2bba54(0x1ab)],_0x5e6950=ImageManager[_0x2bba54(0x271)];else{let _0x196bf1=_0x17a7db[_0x2bba54(0x2ee)];if(_0x196bf1){let _0x253ead=_0x196bf1[_0x2bba54(0x1ee)](this['combatLogName'](),_0x3a05e5[_0x2bba54(0x330)],_0x319da0['tp']),_0x55a6d3=_0x5e2768['iconIndex'];_0x264c37[_0x2bba54(0x375)](_0x253ead,_0x55a6d3);}}}else _0x46cf53=this['isActor']()?TextManager[_0x2bba54(0x17d)]:TextManager[_0x2bba54(0x2fc)],_0x5e6950=ImageManager[_0x2bba54(0x19e)];}_0x6f73b0=ColorManager[_0x2bba54(0x1e8)]('HP',_0x6f73b0);let _0xfeb0c6=_0x46cf53[_0x2bba54(0x1ee)](this[_0x2bba54(0x347)](),_0x6f73b0,TextManager['hp']);$gameSystem[_0x2bba54(0x375)](_0xfeb0c6,_0x5e6950);},VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x258)]=Game_BattlerBase['prototype'][_0x2acc51(0x2ef)],Game_BattlerBase[_0x2acc51(0x185)][_0x2acc51(0x2ef)]=function(_0x3f5c84){const _0x1bdc0b=_0x2acc51,_0x12a466=this[_0x1bdc0b(0x35e)];VisuMZ['CombatLog'][_0x1bdc0b(0x258)][_0x1bdc0b(0x2af)](this,_0x3f5c84);if(!SceneManager[_0x1bdc0b(0x27a)]())return;if(this[_0x1bdc0b(0x31f)])return;if(!VisuMZ[_0x1bdc0b(0x26e)]['Settings'][_0x1bdc0b(0x26e)][_0x1bdc0b(0x175)])return;const _0xd514b5=_0x3f5c84;let _0x356bc4,_0x1133f9,_0xcb5f15=_0xd514b5-_0x12a466;if(_0xd514b5>_0x12a466){if(_0x1bdc0b(0x1a7)===_0x1bdc0b(0x1a7))_0x356bc4=this[_0x1bdc0b(0x2de)]()?TextManager[_0x1bdc0b(0x380)]:TextManager[_0x1bdc0b(0x260)],_0x1133f9=ImageManager[_0x1bdc0b(0x1d1)];else{if(_0x3beaa3['isSceneBattle']()){const _0x39f74b=_0x15e90f[_0x1bdc0b(0x1e3)]['_combatLogWindow'];if(_0x39f74b&&_0x39f74b[_0x1bdc0b(0x390)]())return![];}return _0x9a858c[_0x1bdc0b(0x26e)]['Window_Selectable_allowShiftScrolling'][_0x1bdc0b(0x2af)](this);}}else{if(_0xd514b5===_0x12a466){if(_0x1bdc0b(0x204)!==_0x1bdc0b(0x204)){_0x1652fb[_0x1bdc0b(0x26e)][_0x1bdc0b(0x2d9)][_0x1bdc0b(0x2af)](this);if(_0x4887d0[_0x1bdc0b(0x26e)][_0x1bdc0b(0x1fe)][_0x1bdc0b(0x26e)][_0x1bdc0b(0x1dd)]){_0x2d12bb[_0x1bdc0b(0x386)]();let _0x1b7e7c=_0x22c450[_0x1bdc0b(0x319)]['format'](_0x4e7227['combatLogName']()),_0x2122ff=_0x489b0b['combatLog_Result_Escape'];_0x106432[_0x1bdc0b(0x375)](_0x1b7e7c,_0x2122ff),_0x5388e1[_0x1bdc0b(0x375)](_0x127a47[_0x1bdc0b(0x18a)],_0x2122ff),_0x3cf7fa[_0x1bdc0b(0x386)]();}}else _0x356bc4=this['isActor']()?TextManager['actorLoss']:TextManager[_0x1bdc0b(0x1a0)],_0x1133f9=ImageManager[_0x1bdc0b(0x1cd)];}else _0x356bc4=this[_0x1bdc0b(0x2de)]()?TextManager['actorLoss']:TextManager[_0x1bdc0b(0x1a0)],_0x1133f9=ImageManager['combatLog_MP_Dmg'];}_0xcb5f15=ColorManager[_0x1bdc0b(0x1e8)]('MP',_0xcb5f15);let _0x1bad08=_0x356bc4[_0x1bdc0b(0x1ee)](this[_0x1bdc0b(0x347)](),_0xcb5f15,TextManager['mp']);$gameSystem[_0x1bdc0b(0x375)](_0x1bad08,_0x1133f9);},VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x253)]=Game_BattlerBase[_0x2acc51(0x185)][_0x2acc51(0x312)],Game_BattlerBase[_0x2acc51(0x185)]['setTp']=function(_0x578b81){const _0x289bf1=_0x2acc51,_0x16f3a5=this['_tp'];VisuMZ['CombatLog'][_0x289bf1(0x253)][_0x289bf1(0x2af)](this,_0x578b81);if(!SceneManager[_0x289bf1(0x27a)]())return;if(this[_0x289bf1(0x31f)])return;if(this['_combatLogSilentTp'])return;if(!VisuMZ[_0x289bf1(0x26e)][_0x289bf1(0x1fe)][_0x289bf1(0x26e)][_0x289bf1(0x1d2)])return;const _0x738bbc=_0x578b81;let _0x442951,_0x4cdefe,_0x22570e=_0x738bbc-_0x16f3a5;if(_0x738bbc>_0x16f3a5)'XtOck'===_0x289bf1(0x281)?(_0x5216fd(_0x289bf1(0x1b1)[_0x289bf1(0x1ee)](_0x43a458,_0x194fb7)),_0xc4e3de[_0x289bf1(0x188)]()):(_0x442951=this[_0x289bf1(0x2de)]()?TextManager[_0x289bf1(0x380)]:TextManager[_0x289bf1(0x260)],_0x4cdefe=ImageManager[_0x289bf1(0x187)]);else _0x738bbc===_0x16f3a5?(_0x442951=this[_0x289bf1(0x2de)]()?TextManager['actorLoss']:TextManager[_0x289bf1(0x1a0)],_0x4cdefe=ImageManager[_0x289bf1(0x29e)]):(_0x442951=this['isActor']()?TextManager[_0x289bf1(0x385)]:TextManager[_0x289bf1(0x1a0)],_0x4cdefe=ImageManager[_0x289bf1(0x397)]);_0x22570e=ColorManager[_0x289bf1(0x1e8)]('TP',_0x22570e);let _0x14a760=_0x442951[_0x289bf1(0x1ee)](this[_0x289bf1(0x347)](),_0x22570e,TextManager['tp']);$gameSystem[_0x289bf1(0x375)](_0x14a760,_0x4cdefe);},VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x32c)]=Game_Battler[_0x2acc51(0x185)][_0x2acc51(0x235)],Game_Battler['prototype'][_0x2acc51(0x235)]=function(_0x37b5de){const _0x397a48=_0x2acc51;this[_0x397a48(0x2ca)]=!![],VisuMZ[_0x397a48(0x26e)][_0x397a48(0x32c)][_0x397a48(0x2af)](this,_0x37b5de),this[_0x397a48(0x2ca)]=![];},VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x1f7)]=Game_Battler['prototype'][_0x2acc51(0x1c9)],Game_Battler[_0x2acc51(0x185)]['useItem']=function(_0x319643){const _0x5ec043=_0x2acc51;this[_0x5ec043(0x31f)]=!![],VisuMZ[_0x5ec043(0x26e)][_0x5ec043(0x1f7)]['call'](this,_0x319643),this[_0x5ec043(0x31f)]=![];},VisuMZ['CombatLog'][_0x2acc51(0x18f)]=Game_Battler[_0x2acc51(0x185)][_0x2acc51(0x1fd)],Game_Battler[_0x2acc51(0x185)][_0x2acc51(0x1fd)]=function(_0xa5efbc){const _0x455bc9=_0x2acc51,_0x2ca0c4=this['isStateAffected'](_0xa5efbc);VisuMZ[_0x455bc9(0x26e)][_0x455bc9(0x18f)][_0x455bc9(0x2af)](this,_0xa5efbc);const _0xee9ce4=this[_0x455bc9(0x2be)](_0xa5efbc);this['combatLogStateChanges'](_0xa5efbc,_0x2ca0c4,_0xee9ce4);},VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x393)]=Game_Battler[_0x2acc51(0x185)]['removeState'],Game_Battler[_0x2acc51(0x185)][_0x2acc51(0x23c)]=function(_0x296822){const _0x208e59=_0x2acc51,_0x1d0051=this[_0x208e59(0x2be)](_0x296822);VisuMZ['CombatLog']['Game_Battler_removeState'][_0x208e59(0x2af)](this,_0x296822);const _0x49d229=this[_0x208e59(0x2be)](_0x296822);this[_0x208e59(0x288)](_0x296822,_0x1d0051,_0x49d229);},Game_Battler[_0x2acc51(0x185)]['combatLogStateChanges']=function(_0x6eccb5,_0x597dcc,_0xd26ded){const _0x50544e=_0x2acc51;if(!SceneManager[_0x50544e(0x27a)]())return;const _0x13bb76=$dataStates[_0x6eccb5];if(!_0x13bb76)return;if(_0x13bb76[_0x50544e(0x25b)][_0x50544e(0x32e)](VisuMZ['CombatLog'][_0x50544e(0x331)][_0x50544e(0x1a8)]))return;const _0x2a1871=VisuMZ['CombatLog']['Settings']['CombatLog'];if(!_0x597dcc&&_0xd26ded){let _0x4041c8=this[_0x50544e(0x2de)]()?_0x13bb76['message1']:_0x13bb76['message2'];if(_0x4041c8&&_0x2a1871[_0x50544e(0x23e)]){if(_0x50544e(0x370)==='AFFkX'){let _0x3b4d1b=_0x4041c8[_0x50544e(0x1ee)](this[_0x50544e(0x347)]()),_0x385bd8=_0x13bb76['iconIndex'];$gameSystem[_0x50544e(0x375)](_0x3b4d1b,_0x385bd8);}else{if(_0x401368[_0x50544e(0x298)]&&_0x4cf46e[_0x50544e(0x26e)][_0x50544e(0x1fe)][_0x50544e(0x26e)][_0x50544e(0x365)]){let _0xafbef7=_0x33e219[_0x50544e(0x298)],_0x5b8dcc=_0xafbef7[_0x50544e(0x1ee)](_0x147e03[_0x50544e(0x347)]()),_0x340217=_0x16b132['combatLog_Failure_Icon'];_0x5e43a5[_0x50544e(0x375)](_0x5b8dcc,_0x340217);}}}}if(_0x597dcc&&_0xd26ded){let _0x580c44=_0x13bb76['message3'];if(_0x580c44&&_0x2a1871[_0x50544e(0x236)]){if('xxXxt'!==_0x50544e(0x339)){let _0x1f6702=_0x580c44[_0x50544e(0x1ee)](this['combatLogName']()),_0x27005e=_0x13bb76[_0x50544e(0x279)];$gameSystem[_0x50544e(0x375)](_0x1f6702,_0x27005e);}else{if(_0x57c093[_0x50544e(0x298)]&&_0x27bc87['CombatLog'][_0x50544e(0x1fe)][_0x50544e(0x26e)][_0x50544e(0x365)]){let _0x4d4710=_0x465a17[_0x50544e(0x298)],_0x419ccc=_0x4d4710['format'](_0x3fc6f9[_0x50544e(0x347)]()),_0x187d6b=_0x5eeba8['combatLog_Failure_Icon'];_0x55b026[_0x50544e(0x375)](_0x419ccc,_0x187d6b);}}}}if(_0x597dcc&&!_0xd26ded){let _0x26c502=_0x13bb76[_0x50544e(0x322)];if(_0x26c502&&_0x2a1871[_0x50544e(0x37f)]){let _0x3d68cb=_0x26c502[_0x50544e(0x1ee)](this[_0x50544e(0x347)]()),_0x4b0fce=_0x13bb76[_0x50544e(0x279)];$gameSystem[_0x50544e(0x375)](_0x3d68cb,_0x4b0fce);}}},VisuMZ[_0x2acc51(0x26e)]['Game_BattlerBase_increaseBuff']=Game_BattlerBase[_0x2acc51(0x185)]['increaseBuff'],Game_BattlerBase['prototype'][_0x2acc51(0x284)]=function(_0x1e46f6){const _0x26fb22=_0x2acc51;VisuMZ['CombatLog']['Game_BattlerBase_increaseBuff'][_0x26fb22(0x2af)](this,_0x1e46f6);if(!VisuMZ['CombatLog'][_0x26fb22(0x1fe)][_0x26fb22(0x26e)][_0x26fb22(0x32a)])return;this[_0x26fb22(0x38d)](_0x1e46f6,0x1,TextManager[_0x26fb22(0x216)]);},VisuMZ[_0x2acc51(0x26e)]['Game_BattlerBase_decreaseBuff']=Game_BattlerBase[_0x2acc51(0x185)]['decreaseBuff'],Game_BattlerBase[_0x2acc51(0x185)][_0x2acc51(0x371)]=function(_0x36f7ff){const _0x4524e5=_0x2acc51;VisuMZ['CombatLog']['Game_BattlerBase_decreaseBuff']['call'](this,_0x36f7ff);if(!VisuMZ['CombatLog'][_0x4524e5(0x1fe)][_0x4524e5(0x26e)][_0x4524e5(0x228)])return;this[_0x4524e5(0x38d)](_0x36f7ff,-0x1,TextManager[_0x4524e5(0x268)]);},VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x276)]=Game_BattlerBase[_0x2acc51(0x185)][_0x2acc51(0x1fb)],Game_BattlerBase['prototype'][_0x2acc51(0x1fb)]=function(_0xf71423){const _0x290833=_0x2acc51,_0x4b0ec3=this[_0x290833(0x343)][_0xf71423]||0x0;VisuMZ['CombatLog'][_0x290833(0x276)][_0x290833(0x2af)](this,_0xf71423);const _0x5db607=this[_0x290833(0x343)][_0xf71423]||0x0,_0x3c9698=_0x5db607>_0x4b0ec3?0x1:-0x1;if(!VisuMZ[_0x290833(0x26e)][_0x290833(0x1fe)][_0x290833(0x26e)][_0x290833(0x301)])return;this[_0x290833(0x38d)](_0xf71423,_0x3c9698,TextManager[_0x290833(0x307)]);},Game_Battler[_0x2acc51(0x185)][_0x2acc51(0x38d)]=function(_0x312079,_0xd7cb9b,_0x1d5a07){const _0x171dad=_0x2acc51;if(!SceneManager[_0x171dad(0x27a)]())return;if(!_0x1d5a07)return;const _0x49a190=this[_0x171dad(0x2a0)](_0xd7cb9b||-0x1,_0x312079),_0x545b47=TextManager[_0x171dad(0x2cb)](_0x312079),_0x573bba=_0x1d5a07[_0x171dad(0x1ee)](this[_0x171dad(0x347)](),_0x545b47);$gameSystem[_0x171dad(0x375)](_0x573bba,_0x49a190);},Game_Actor[_0x2acc51(0x185)][_0x2acc51(0x347)]=function(){const _0x519b47=_0x2acc51;return _0x519b47(0x1af)[_0x519b47(0x1ee)](this[_0x519b47(0x20e)]);},Game_Enemy[_0x2acc51(0x185)][_0x2acc51(0x347)]=function(){const _0x437ded=_0x2acc51;return this[_0x437ded(0x330)]();},Game_Party[_0x2acc51(0x185)][_0x2acc51(0x347)]=function(){const _0x272180=_0x2acc51,_0x583330=this[_0x272180(0x293)]()[_0x272180(0x2ec)];if(_0x583330===0x0)return'';else return _0x583330===0x1?this[_0x272180(0x335)]()[_0x272180(0x347)]():TextManager[_0x272180(0x392)]['format'](this[_0x272180(0x335)]()[_0x272180(0x347)]());},VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x2ea)]=Scene_Menu[_0x2acc51(0x185)][_0x2acc51(0x1b4)],Scene_Menu[_0x2acc51(0x185)][_0x2acc51(0x1b4)]=function(){const _0xc1b2a2=_0x2acc51;VisuMZ['CombatLog'][_0xc1b2a2(0x2ea)][_0xc1b2a2(0x2af)](this);const _0x4571c6=this[_0xc1b2a2(0x37e)];_0x4571c6['setHandler']('CombatLog',this['commandCombatLog'][_0xc1b2a2(0x2f7)](this));},Scene_Menu[_0x2acc51(0x185)][_0x2acc51(0x340)]=function(){const _0x5b7b08=_0x2acc51;SceneManager[_0x5b7b08(0x255)](Scene_CombatLog);},VisuMZ['CombatLog'][_0x2acc51(0x1c8)]=Scene_Battle['prototype']['createDisplayObjects'],Scene_Battle[_0x2acc51(0x185)][_0x2acc51(0x34e)]=function(){const _0x5e35c0=_0x2acc51;VisuMZ['CombatLog']['Scene_Battle_createDisplayObjects'][_0x5e35c0(0x2af)](this),this[_0x5e35c0(0x1a9)]();},Scene_Battle[_0x2acc51(0x185)][_0x2acc51(0x1a9)]=function(){const _0x191d39=_0x2acc51,_0x426648=this[_0x191d39(0x218)]();this[_0x191d39(0x1ce)]=new Window_CombatLogDisplay(_0x426648),this[_0x191d39(0x1ce)][_0x191d39(0x270)](0x0),this[_0x191d39(0x310)](this[_0x191d39(0x1ce)]),this[_0x191d39(0x1ce)]['x']=this[_0x191d39(0x394)]['x'],this[_0x191d39(0x1ce)]['y']=this['_windowLayer']['y'],this[_0x191d39(0x1ce)][_0x191d39(0x1f8)](VisuMZ['CombatLog'][_0x191d39(0x1fe)][_0x191d39(0x278)][_0x191d39(0x197)]),this[_0x191d39(0x1ce)][_0x191d39(0x291)](_0x191d39(0x299),this[_0x191d39(0x1be)][_0x191d39(0x2f7)](this)),this[_0x191d39(0x1ce)]['setHandler']('cancel',this[_0x191d39(0x1be)][_0x191d39(0x2f7)](this)),this[_0x191d39(0x2eb)][_0x191d39(0x291)](_0x191d39(0x299),this[_0x191d39(0x2aa)][_0x191d39(0x2f7)](this,this['_partyCommandWindow'])),this[_0x191d39(0x34f)][_0x191d39(0x291)](_0x191d39(0x299),this[_0x191d39(0x2aa)][_0x191d39(0x2f7)](this,this['_actorCommandWindow']));},Scene_Battle[_0x2acc51(0x185)]['combatLogWindowRect']=function(){const _0x5c5b71=_0x2acc51,_0x5555a6=VisuMZ[_0x5c5b71(0x26e)][_0x5c5b71(0x1fe)][_0x5c5b71(0x278)][_0x5c5b71(0x2fd)];if(_0x5555a6)return _0x5555a6[_0x5c5b71(0x2af)](this);const _0x4ecc20=0x0,_0x5e179e=0x0,_0x4cd6a8=Graphics[_0x5c5b71(0x388)],_0x4491ed=Graphics['boxHeight'];return new Rectangle(_0x4ecc20,_0x5e179e,_0x4cd6a8,_0x4491ed);},VisuMZ['CombatLog'][_0x2acc51(0x17e)]=Scene_Battle[_0x2acc51(0x185)][_0x2acc51(0x225)],Scene_Battle[_0x2acc51(0x185)]['isAnyInputWindowActive']=function(){const _0x51e66b=_0x2acc51;if(this['_combatLogWindow']&&this[_0x51e66b(0x1ce)][_0x51e66b(0x2ed)])return!![];return VisuMZ[_0x51e66b(0x26e)]['Scene_Battle_isAnyInputWindowActive'][_0x51e66b(0x2af)](this);},VisuMZ[_0x2acc51(0x26e)]['Scene_Battle_updateCancelButton']=Scene_Battle[_0x2acc51(0x185)]['updateCancelButton'],Scene_Battle[_0x2acc51(0x185)]['updateCancelButton']=function(){const _0x219641=_0x2acc51;VisuMZ['CombatLog']['Scene_Battle_updateCancelButton'][_0x219641(0x2af)](this);if(this['_combatLogWindow']&&this['_combatLogWindow']['openness']>0x0&&this[_0x219641(0x369)]){if(_0x219641(0x2a7)===_0x219641(0x326)){let _0x5ca79c=_0x564b69[_0x219641(0x345)];if(_0x5ca79c){let _0x5c0d14=_0x5ca79c[_0x219641(0x1ee)](this[_0x219641(0x347)](),_0x4b3cc1[_0x219641(0x330)],_0x4554b1),_0x2a2785=_0x39cb10[_0x219641(0x279)];_0x3f6354[_0x219641(0x375)](_0x5c0d14,_0x2a2785);}}else this[_0x219641(0x369)][_0x219641(0x229)]=![];}},VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x18c)]=Scene_Battle[_0x2acc51(0x185)][_0x2acc51(0x33e)],Scene_Battle[_0x2acc51(0x185)]['isTimeActive']=function(){const _0x4efaa8=_0x2acc51;if(BattleManager[_0x4efaa8(0x24e)]()&&this[_0x4efaa8(0x1ce)]&&this[_0x4efaa8(0x1ce)][_0x4efaa8(0x2ed)]){if('LcORu'===_0x4efaa8(0x2a5))return![];else this[_0x4efaa8(0x36f)](0x0,0x0);}else return VisuMZ['CombatLog'][_0x4efaa8(0x18c)][_0x4efaa8(0x2af)](this);},Scene_Battle[_0x2acc51(0x185)]['openCombatLog']=function(_0x2af2fd){const _0x9644c8=_0x2acc51;this['_combatLogWindow']['open'](),this[_0x9644c8(0x1ce)][_0x9644c8(0x1a1)](),this['_combatLogWindow'][_0x9644c8(0x2ce)](),this[_0x9644c8(0x1ce)][_0x9644c8(0x2f8)](_0x2af2fd);},Scene_Battle[_0x2acc51(0x185)][_0x2acc51(0x1be)]=function(){const _0x3ae43c=_0x2acc51;this['_combatLogWindow'][_0x3ae43c(0x384)]();const _0x304a0e=this[_0x3ae43c(0x1ce)]['getLastWindow']();_0x304a0e[_0x3ae43c(0x1a1)]();};function _0x11a3(_0x5b6ae3,_0x345dbc){return _0x11a3=function(_0x57a2ae,_0x11a398){_0x57a2ae=_0x57a2ae-0x163;let _0x103b98=_0x57a2[_0x57a2ae];return _0x103b98;},_0x11a3(_0x5b6ae3,_0x345dbc);}function Scene_CombatLog(){const _0x19caad=_0x2acc51;this[_0x19caad(0x200)](...arguments);}Scene_CombatLog[_0x2acc51(0x185)]=Object[_0x2acc51(0x2d4)](Scene_MenuBase[_0x2acc51(0x185)]),Scene_CombatLog[_0x2acc51(0x185)]['constructor']=Scene_CombatLog,Scene_CombatLog['prototype']['initialize']=function(){const _0x28a4c3=_0x2acc51;Scene_MenuBase[_0x28a4c3(0x185)][_0x28a4c3(0x200)]['call'](this);},Scene_CombatLog['prototype'][_0x2acc51(0x31e)]=function(){return 0x0;},Scene_CombatLog[_0x2acc51(0x185)]['create']=function(){const _0xa5307a=_0x2acc51;Scene_MenuBase[_0xa5307a(0x185)][_0xa5307a(0x2d4)][_0xa5307a(0x2af)](this),this[_0xa5307a(0x18d)](),this[_0xa5307a(0x1a9)]();},Scene_CombatLog[_0x2acc51(0x185)][_0x2acc51(0x18d)]=function(){const _0x5f368a=_0x2acc51,_0x522c4a=this['historyWindowRect']();this[_0x5f368a(0x237)]=new Window_CombatLogHistory(_0x522c4a),this[_0x5f368a(0x237)][_0x5f368a(0x291)]('cancel',this[_0x5f368a(0x19f)][_0x5f368a(0x2f7)](this)),this[_0x5f368a(0x248)](this['_historyWindow']),this[_0x5f368a(0x237)][_0x5f368a(0x1f8)](VisuMZ[_0x5f368a(0x26e)][_0x5f368a(0x1fe)][_0x5f368a(0x278)][_0x5f368a(0x214)]);},Scene_CombatLog['prototype'][_0x2acc51(0x2b6)]=function(){const _0x52bc0c=_0x2acc51,_0x37a0ad=VisuMZ[_0x52bc0c(0x26e)][_0x52bc0c(0x1fe)][_0x52bc0c(0x278)][_0x52bc0c(0x202)];if(_0x37a0ad)return _0x37a0ad['call'](this);const _0x2c0fb9=Graphics['boxWidth'],_0x49f0d2=this['calcWindowHeight'](0x1,!![]),_0x276974=0x0,_0x51e407=this[_0x52bc0c(0x30b)]();return new Rectangle(_0x276974,_0x51e407,_0x2c0fb9,_0x49f0d2);},Scene_CombatLog[_0x2acc51(0x185)][_0x2acc51(0x1a9)]=function(){const _0x1b4f22=_0x2acc51,_0x377dbf=this['combatLogWindowRect']();this[_0x1b4f22(0x1ce)]=new Window_CombatLogDisplay(_0x377dbf),this[_0x1b4f22(0x248)](this[_0x1b4f22(0x1ce)]),this['_historyWindow'][_0x1b4f22(0x2dc)](this[_0x1b4f22(0x1ce)]),this[_0x1b4f22(0x1ce)][_0x1b4f22(0x1f8)](VisuMZ[_0x1b4f22(0x26e)]['Settings']['Window']['CombatLogMenu_BgType']);},Scene_CombatLog['prototype']['combatLogWindowRect']=function(){const _0x53f33d=_0x2acc51,_0x4f15a4=VisuMZ[_0x53f33d(0x26e)][_0x53f33d(0x1fe)][_0x53f33d(0x278)][_0x53f33d(0x230)];if(_0x4f15a4)return _0x4f15a4['call'](this);const _0x3c649c=0x0,_0x524f99=this[_0x53f33d(0x237)]['y']+this['_historyWindow']['height'],_0x2fddff=Graphics[_0x53f33d(0x388)],_0x234ac8=this['mainAreaHeight']()-this[_0x53f33d(0x237)][_0x53f33d(0x1b9)];return new Rectangle(_0x3c649c,_0x524f99,_0x2fddff,_0x234ac8);},Scene_CombatLog[_0x2acc51(0x185)][_0x2acc51(0x2f1)]=function(){const _0x2cf2b6=_0x2acc51;Scene_MenuBase[_0x2cf2b6(0x185)]['createBackground'][_0x2cf2b6(0x2af)](this),this[_0x2cf2b6(0x372)](this[_0x2cf2b6(0x2e0)]()),this[_0x2cf2b6(0x35d)]();},Scene_CombatLog['prototype'][_0x2acc51(0x2e0)]=function(){const _0x2aa01f=_0x2acc51;return VisuMZ[_0x2aa01f(0x26e)][_0x2aa01f(0x1fe)][_0x2aa01f(0x23a)][_0x2aa01f(0x2b1)];},Scene_CombatLog[_0x2acc51(0x185)][_0x2acc51(0x35d)]=function(){const _0x37e03e=_0x2acc51,_0x6332ad=VisuMZ[_0x37e03e(0x26e)][_0x37e03e(0x1fe)][_0x37e03e(0x23a)];_0x6332ad&&(_0x6332ad[_0x37e03e(0x27f)]!==''||_0x6332ad[_0x37e03e(0x354)]!=='')&&(this[_0x37e03e(0x2bb)]=new Sprite(ImageManager['loadTitle1'](_0x6332ad[_0x37e03e(0x27f)])),this['_backSprite2']=new Sprite(ImageManager[_0x37e03e(0x231)](_0x6332ad[_0x37e03e(0x354)])),this[_0x37e03e(0x310)](this[_0x37e03e(0x2bb)]),this[_0x37e03e(0x310)](this['_backSprite2']),this[_0x37e03e(0x2bb)][_0x37e03e(0x318)][_0x37e03e(0x168)](this[_0x37e03e(0x1ff)][_0x37e03e(0x2f7)](this,this[_0x37e03e(0x2bb)])),this['_backSprite2']['bitmap'][_0x37e03e(0x168)](this[_0x37e03e(0x1ff)][_0x37e03e(0x2f7)](this,this[_0x37e03e(0x29d)])));},Scene_CombatLog[_0x2acc51(0x185)][_0x2acc51(0x1ff)]=function(_0x581777){const _0x4fde43=_0x2acc51;this[_0x4fde43(0x28f)](_0x581777),this[_0x4fde43(0x196)](_0x581777);},VisuMZ['CombatLog'][_0x2acc51(0x211)]=Window_Selectable[_0x2acc51(0x185)]['allowShiftScrolling'],Window_Selectable[_0x2acc51(0x185)][_0x2acc51(0x20f)]=function(){const _0x2b4c49=_0x2acc51;if(SceneManager['isSceneBattle']()){const _0x5e23f3=SceneManager[_0x2b4c49(0x1e3)]['_combatLogWindow'];if(_0x5e23f3&&_0x5e23f3[_0x2b4c49(0x390)]()){if(_0x2b4c49(0x2f6)!==_0x2b4c49(0x1cf))return![];else{let _0x430ee6=_0x5e1e2e===0x0?_0x347aef[_0x2b4c49(0x262)]:_0x10c372['_combatLog_HistoryFmt'],_0x208829=_0x430ee6[_0x2b4c49(0x1ee)](_0x8f7a49[_0x2b4c49(0x333)]()-_0x5e2065);this[_0x2b4c49(0x1c5)](_0x208829,_0x2b4c49(0x212),!![],_0x3f166b);}}}return VisuMZ[_0x2b4c49(0x26e)][_0x2b4c49(0x211)][_0x2b4c49(0x2af)](this);},VisuMZ[_0x2acc51(0x26e)]['Window_Selectable_isCursorMovable']=Window_Selectable[_0x2acc51(0x185)][_0x2acc51(0x37d)],Window_Selectable['prototype']['isCursorMovable']=function(){const _0x102659=_0x2acc51;if(SceneManager[_0x102659(0x27a)]()){const _0x258849=SceneManager[_0x102659(0x1e3)][_0x102659(0x1ce)];if(_0x258849&&_0x258849[_0x102659(0x390)]()){if(_0x102659(0x19d)!=='LxLMA')return![];else this[_0x102659(0x357)]=[],this['_bypassAddToCombatLog']=![];}}return VisuMZ[_0x102659(0x26e)]['Window_Selectable_isCursorMovable']['call'](this);},VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x36a)]=Window_MenuCommand['prototype'][_0x2acc51(0x381)],Window_MenuCommand[_0x2acc51(0x185)]['addOriginalCommands']=function(){const _0x5c129a=_0x2acc51;VisuMZ[_0x5c129a(0x26e)]['Window_MenuCommand_addOriginalCommands'][_0x5c129a(0x2af)](this);if(Imported['VisuMZ_1_MainMenuCore'])return;this[_0x5c129a(0x203)]();},Window_MenuCommand[_0x2acc51(0x185)][_0x2acc51(0x203)]=function(){const _0x21a9b5=_0x2acc51;if(!this[_0x21a9b5(0x16e)]())return;const _0x114cb9=TextManager[_0x21a9b5(0x1d3)],_0x4aa79c=this['isCombatLogCommandEnabled']();this[_0x21a9b5(0x1c5)](_0x114cb9,'combatLog',_0x4aa79c);},Window_MenuCommand[_0x2acc51(0x185)]['isCombatLogCommandVisible']=function(){return $gameSystem['isMainMenuCombatLogVisible']();},Window_MenuCommand[_0x2acc51(0x185)][_0x2acc51(0x308)]=function(){const _0x40ed7d=_0x2acc51;return $gameSystem[_0x40ed7d(0x280)]();},VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x2d1)]=Window_BattleLog[_0x2acc51(0x185)][_0x2acc51(0x25d)],Window_BattleLog[_0x2acc51(0x185)][_0x2acc51(0x25d)]=function(){const _0x24c5fb=_0x2acc51;VisuMZ[_0x24c5fb(0x26e)][_0x24c5fb(0x2d1)]['call'](this);if(!VisuMZ[_0x24c5fb(0x26e)]['Settings']['CombatLog']['ShowStartTurn'])return;$gameSystem[_0x24c5fb(0x386)]();let _0x4602b2=TextManager[_0x24c5fb(0x30a)][_0x24c5fb(0x1ee)]($gameTroop[_0x24c5fb(0x2c6)]()),_0x86d78b=ImageManager[_0x24c5fb(0x1d7)];$gameSystem[_0x24c5fb(0x375)](_0x4602b2,_0x86d78b);},VisuMZ['CombatLog']['Window_BattleLog_startAction']=Window_BattleLog[_0x2acc51(0x185)][_0x2acc51(0x2a4)],Window_BattleLog[_0x2acc51(0x185)][_0x2acc51(0x2a4)]=function(_0x33ad08,_0x277858,_0x2541da){const _0xb7b788=_0x2acc51;$gameSystem[_0xb7b788(0x386)](),VisuMZ['CombatLog'][_0xb7b788(0x383)][_0xb7b788(0x2af)](this,_0x33ad08,_0x277858,_0x2541da);},VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x20a)]=Window_BattleLog[_0x2acc51(0x185)][_0x2acc51(0x1cc)],Window_BattleLog[_0x2acc51(0x185)][_0x2acc51(0x1cc)]=function(_0x5b3e7c){const _0x1f55e5=_0x2acc51;VisuMZ[_0x1f55e5(0x26e)][_0x1f55e5(0x20a)][_0x1f55e5(0x2af)](this,_0x5b3e7c);if(!_0x5b3e7c)return;if(!VisuMZ[_0x1f55e5(0x26e)][_0x1f55e5(0x1fe)][_0x1f55e5(0x26e)][_0x1f55e5(0x236)]);const _0x224c11=_0x5b3e7c[_0x1f55e5(0x20b)]();for(const _0x46f6b8 of _0x224c11){if(!_0x46f6b8)continue;if(!_0x46f6b8[_0x1f55e5(0x1a6)])continue;if(_0x46f6b8['note'][_0x1f55e5(0x32e)](VisuMZ[_0x1f55e5(0x26e)][_0x1f55e5(0x331)][_0x1f55e5(0x1a8)]))continue;let _0x5040f1=_0x46f6b8[_0x1f55e5(0x1a6)],_0x4be2da=_0x5040f1['format'](_0x5b3e7c[_0x1f55e5(0x347)]()),_0x477bcf=_0x46f6b8['iconIndex'];$gameSystem[_0x1f55e5(0x375)](_0x4be2da,_0x477bcf);}},VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x297)]=Window_BattleLog[_0x2acc51(0x185)]['displayAction'],Window_BattleLog[_0x2acc51(0x185)][_0x2acc51(0x2a1)]=function(_0x487e61,_0x52fe18){const _0x5207df=_0x2acc51;VisuMZ[_0x5207df(0x26e)][_0x5207df(0x297)][_0x5207df(0x2af)](this,_0x487e61,_0x52fe18);const _0x303c44=VisuMZ[_0x5207df(0x26e)][_0x5207df(0x1fe)]['CombatLog'];if(DataManager['isSkill'](_0x52fe18)){if(_0x52fe18[_0x5207df(0x2cc)]&&_0x303c44['ShowSkillMessage1']){let _0x1b18a6=_0x52fe18[_0x5207df(0x2cc)],_0x395179=_0x1b18a6[_0x5207df(0x1ee)](_0x487e61['combatLogName'](),_0x52fe18[_0x5207df(0x330)]),_0x34f9a0=_0x52fe18[_0x5207df(0x279)];$gameSystem[_0x5207df(0x375)](_0x395179,_0x34f9a0);}if(_0x52fe18['message2']&&_0x303c44[_0x5207df(0x2bc)]){let _0x49bcfe=_0x52fe18[_0x5207df(0x169)],_0x1fa383=_0x49bcfe['format'](_0x487e61[_0x5207df(0x347)](),_0x52fe18['name']),_0x41195c=_0x52fe18[_0x5207df(0x279)];$gameSystem['addTextToCombatLog'](_0x1fa383,_0x41195c);}}else{if('XSQkI'===_0x5207df(0x302)){if(TextManager[_0x5207df(0x1c9)]&&_0x303c44['ShowItemMessage']){let _0x21fb5d=TextManager[_0x5207df(0x1c9)],_0x596684=_0x21fb5d[_0x5207df(0x1ee)](_0x487e61['combatLogName'](),_0x52fe18[_0x5207df(0x330)]),_0x325cdc=_0x52fe18[_0x5207df(0x279)];$gameSystem[_0x5207df(0x375)](_0x596684,_0x325cdc);}}else{const _0x1f6291=_0x335c4b['CombatLog'][_0x5207df(0x1fe)]['BgSettings'];_0x1f6291&&(_0x1f6291['BgFilename1']!==''||_0x1f6291[_0x5207df(0x354)]!=='')&&(this[_0x5207df(0x2bb)]=new _0x100458(_0x5846e6[_0x5207df(0x33f)](_0x1f6291['BgFilename1'])),this['_backSprite2']=new _0xe1d831(_0x1da49f['loadTitle2'](_0x1f6291[_0x5207df(0x354)])),this['addChild'](this[_0x5207df(0x2bb)]),this['addChild'](this[_0x5207df(0x29d)]),this[_0x5207df(0x2bb)][_0x5207df(0x318)][_0x5207df(0x168)](this[_0x5207df(0x1ff)][_0x5207df(0x2f7)](this,this[_0x5207df(0x2bb)])),this[_0x5207df(0x29d)][_0x5207df(0x318)][_0x5207df(0x168)](this[_0x5207df(0x1ff)][_0x5207df(0x2f7)](this,this['_backSprite2'])));}}},VisuMZ['CombatLog'][_0x2acc51(0x1a5)]=Window_BattleLog['prototype'][_0x2acc51(0x294)],Window_BattleLog[_0x2acc51(0x185)][_0x2acc51(0x294)]=function(_0x21a83c){const _0x41ce7c=_0x2acc51;VisuMZ[_0x41ce7c(0x26e)][_0x41ce7c(0x1a5)]['call'](this,_0x21a83c);if(TextManager[_0x41ce7c(0x34a)]&&VisuMZ[_0x41ce7c(0x26e)]['Settings'][_0x41ce7c(0x26e)][_0x41ce7c(0x209)]){let _0x4cb7de=TextManager['counterAttack'],_0x2c1fd4=_0x4cb7de['format'](_0x21a83c[_0x41ce7c(0x347)]()),_0x59ebeb=ImageManager[_0x41ce7c(0x2c1)];$gameSystem[_0x41ce7c(0x375)](_0x2c1fd4,_0x59ebeb);}},VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x1b6)]=Window_BattleLog['prototype'][_0x2acc51(0x1d4)],Window_BattleLog['prototype'][_0x2acc51(0x1d4)]=function(_0x1c338f){const _0x207b0a=_0x2acc51;VisuMZ[_0x207b0a(0x26e)][_0x207b0a(0x1b6)][_0x207b0a(0x2af)](this,_0x1c338f);if(TextManager['magicReflection']&&VisuMZ[_0x207b0a(0x26e)][_0x207b0a(0x1fe)][_0x207b0a(0x26e)][_0x207b0a(0x27d)]){if(_0x207b0a(0x395)===_0x207b0a(0x366))_0x3135bf['prototype']['initialize'][_0x207b0a(0x2af)](this,_0x1ffcf4);else{let _0x5e5508=TextManager['magicReflection'],_0x4dc336=_0x5e5508[_0x207b0a(0x1ee)](_0x1c338f[_0x207b0a(0x347)]()),_0x3407f8=ImageManager[_0x207b0a(0x37b)];$gameSystem[_0x207b0a(0x375)](_0x4dc336,_0x3407f8);}}},VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x296)]=Window_BattleLog[_0x2acc51(0x185)][_0x2acc51(0x32b)],Window_BattleLog[_0x2acc51(0x185)][_0x2acc51(0x32b)]=function(_0x31ab33,_0x15813d){const _0x4822af=_0x2acc51;VisuMZ['CombatLog'][_0x4822af(0x296)][_0x4822af(0x2af)](this,_0x31ab33,_0x15813d);if(TextManager[_0x4822af(0x1d9)]&&VisuMZ[_0x4822af(0x26e)][_0x4822af(0x1fe)][_0x4822af(0x26e)][_0x4822af(0x2a3)]){if(_0x4822af(0x285)==='SyhDo'){const _0x372a49=_0x31ab33['combatLogName']();let _0x88a45a=TextManager['substitute'],_0x41f48f=_0x88a45a['format'](_0x372a49,_0x15813d['combatLogName']()),_0x14a668=ImageManager[_0x4822af(0x25a)];$gameSystem['addTextToCombatLog'](_0x41f48f,_0x14a668);}else this[_0x4822af(0x200)](...arguments);}},VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x259)]=Window_BattleLog[_0x2acc51(0x185)]['displayFailure'],Window_BattleLog[_0x2acc51(0x185)][_0x2acc51(0x2da)]=function(_0x5a0275){const _0x448aed=_0x2acc51;VisuMZ[_0x448aed(0x26e)]['Window_BattleLog_displayFailure'][_0x448aed(0x2af)](this,_0x5a0275);if(_0x5a0275['result']()[_0x448aed(0x391)]()&&!_0x5a0275['result']()[_0x448aed(0x1fc)]){if(TextManager[_0x448aed(0x298)]&&VisuMZ[_0x448aed(0x26e)][_0x448aed(0x1fe)][_0x448aed(0x26e)][_0x448aed(0x365)]){if(_0x448aed(0x198)!==_0x448aed(0x21d)){let _0x97c0d9=TextManager[_0x448aed(0x298)],_0x3140fe=_0x97c0d9['format'](_0x5a0275['combatLogName']()),_0x10fc58=ImageManager[_0x448aed(0x31b)];$gameSystem[_0x448aed(0x375)](_0x3140fe,_0x10fc58);}else _0x27a75f['prototype'][_0x448aed(0x200)][_0x448aed(0x2af)](this,_0x24308b),this[_0x448aed(0x19c)](),_0x50a51e[_0x448aed(0x27a)]()&&(this['openness']=0x0);}}},VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x2df)]=Window_BattleLog[_0x2acc51(0x185)][_0x2acc51(0x274)],Window_BattleLog['prototype'][_0x2acc51(0x274)]=function(_0xcdd8f1){const _0x4f346b=_0x2acc51;VisuMZ[_0x4f346b(0x26e)][_0x4f346b(0x2df)][_0x4f346b(0x2af)](this,_0xcdd8f1);if(_0xcdd8f1[_0x4f346b(0x21a)]()[_0x4f346b(0x2b3)]&&VisuMZ[_0x4f346b(0x26e)][_0x4f346b(0x1fe)][_0x4f346b(0x26e)][_0x4f346b(0x2cd)]){if('haeWZ'===_0x4f346b(0x264)){_0x25cc32[_0x4f346b(0x26e)][_0x4f346b(0x241)]['call'](this,_0x9bc75d);if(_0x4219f5===0x0)return;if(!_0x4c15f8[_0x4f346b(0x27a)]())return;const _0x441471=_0x56d4a0[_0x4f346b(0x26e)]['Settings'][_0x4f346b(0x273)];if(!_0x441471)return;if(!_0x441471[_0x4f346b(0x201)])return;const _0x2786a3=_0x441471[_0x4f346b(0x24b)];if(_0x2786a3){let _0x342120=_0x2786a3['format'](this[_0x4f346b(0x347)]()),_0x4e3353=_0x441471[_0x4f346b(0x33a)];_0x37b80f['addTextToCombatLog'](_0x342120,_0x4e3353);}}else{if(_0xcdd8f1['isActor']()){if(_0x4f346b(0x17c)==='gtWBW'){let _0x8806e1=_0x3db844[_0x4f346b(0x353)],_0x5a0ee1=_0x8806e1['format'](_0x2fee98[_0x4f346b(0x347)]()),_0x4bafe5=_0x332d73[_0x4f346b(0x37b)];_0x39637b[_0x4f346b(0x375)](_0x5a0ee1,_0x4bafe5);}else{if(TextManager[_0x4f346b(0x1aa)]){if(_0x4f346b(0x2dd)!=='qDLrk')this[_0x4f346b(0x369)][_0x4f346b(0x229)]=![];else{let _0x4ea036=TextManager[_0x4f346b(0x1aa)],_0x48ad03=ImageManager['combatLog_CriticalHit_Icon'];$gameSystem[_0x4f346b(0x375)](_0x4ea036,_0x48ad03);}}}}else{if(TextManager[_0x4f346b(0x2b8)]){let _0x493ba8=TextManager[_0x4f346b(0x2b8)],_0x232e0e=ImageManager[_0x4f346b(0x30f)];$gameSystem[_0x4f346b(0x375)](_0x493ba8,_0x232e0e);}}}}},VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x166)]=Window_BattleLog[_0x2acc51(0x185)][_0x2acc51(0x1e7)],Window_BattleLog[_0x2acc51(0x185)][_0x2acc51(0x1e7)]=function(_0x49155b){const _0x508f00=_0x2acc51;VisuMZ[_0x508f00(0x26e)]['Window_BattleLog_displayMiss'][_0x508f00(0x2af)](this,_0x49155b);if(_0x49155b[_0x508f00(0x21a)]()[_0x508f00(0x2e3)]&&VisuMZ[_0x508f00(0x26e)][_0x508f00(0x1fe)]['CombatLog']['ShowMiss']){const _0x1d6912=_0x49155b['isActor']();if(_0x1d6912&&TextManager[_0x508f00(0x292)]){if('xCvfh'===_0x508f00(0x379)){let _0x46dd4f=TextManager[_0x508f00(0x292)],_0x3f3491=_0x46dd4f[_0x508f00(0x1ee)](_0x49155b[_0x508f00(0x347)]()),_0x102b43=ImageManager[_0x508f00(0x240)];$gameSystem[_0x508f00(0x375)](_0x3f3491,_0x102b43);}else{_0x1d65a7[_0x508f00(0x26e)]['Window_BattleLog_displayReflection'][_0x508f00(0x2af)](this,_0x3ad9c0);if(_0xefd584[_0x508f00(0x353)]&&_0x194d77[_0x508f00(0x26e)][_0x508f00(0x1fe)][_0x508f00(0x26e)]['ShowReflect']){let _0x2d64ff=_0x5046b8[_0x508f00(0x353)],_0x162013=_0x2d64ff['format'](_0x95cbcf[_0x508f00(0x347)]()),_0x14f92a=_0x12f00d['combatLog_Reflection_Icon'];_0x25a1d6['addTextToCombatLog'](_0x162013,_0x14f92a);}}}else{if(!_0x1d6912&&TextManager[_0x508f00(0x244)]){let _0x112b53=TextManager[_0x508f00(0x244)],_0x44c220=_0x112b53[_0x508f00(0x1ee)](_0x49155b[_0x508f00(0x347)]()),_0x36f7c4=ImageManager[_0x508f00(0x240)];$gameSystem['addTextToCombatLog'](_0x44c220,_0x36f7c4);}}}else{if(TextManager[_0x508f00(0x298)]&&VisuMZ[_0x508f00(0x26e)][_0x508f00(0x1fe)][_0x508f00(0x26e)][_0x508f00(0x365)]){let _0x2996c6=TextManager[_0x508f00(0x298)],_0x1c4bc4=_0x2996c6[_0x508f00(0x1ee)](_0x49155b[_0x508f00(0x347)]()),_0x11e2f4=ImageManager['combatLog_Failure_Icon'];$gameSystem[_0x508f00(0x375)](_0x1c4bc4,_0x11e2f4);}}},VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x1e4)]=Window_BattleLog[_0x2acc51(0x185)][_0x2acc51(0x337)],Window_BattleLog[_0x2acc51(0x185)]['displayEvasion']=function(_0x58bfd1){const _0x391d42=_0x2acc51;VisuMZ['CombatLog'][_0x391d42(0x1e4)][_0x391d42(0x2af)](this,_0x58bfd1);if(VisuMZ['CombatLog']['Settings']['CombatLog'][_0x391d42(0x222)]){if(_0x58bfd1[_0x391d42(0x21a)]()[_0x391d42(0x2e3)]&&TextManager[_0x391d42(0x1bd)]){let _0x458285=TextManager[_0x391d42(0x1bd)],_0x382ed3=_0x458285['format'](_0x58bfd1[_0x391d42(0x347)]()),_0x45de47=ImageManager[_0x391d42(0x170)];$gameSystem['addTextToCombatLog'](_0x382ed3,_0x45de47);}else{if(TextManager[_0x391d42(0x246)]){let _0x34b743=TextManager[_0x391d42(0x246)],_0x3c6296=_0x34b743[_0x391d42(0x1ee)](_0x58bfd1[_0x391d42(0x347)]()),_0x20d97a=ImageManager[_0x391d42(0x170)];$gameSystem[_0x391d42(0x375)](_0x3c6296,_0x20d97a);}}}},VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x261)]=Window_PartyCommand[_0x2acc51(0x185)][_0x2acc51(0x2fe)],Window_PartyCommand[_0x2acc51(0x185)][_0x2acc51(0x2fe)]=function(){const _0x472151=_0x2acc51;VisuMZ[_0x472151(0x26e)]['Window_PartyCommand_makeCommandList'][_0x472151(0x2af)](this);if(Imported['VisuMZ_1_BattleCore'])return;this[_0x472151(0x203)]();},VisuMZ[_0x2acc51(0x26e)]['Window_PartyCommand_addCustomCommands']=Window_PartyCommand[_0x2acc51(0x185)]['addCustomCommands'],Window_PartyCommand[_0x2acc51(0x185)][_0x2acc51(0x35b)]=function(){const _0x69912=_0x2acc51;VisuMZ['CombatLog'][_0x69912(0x254)]['call'](this),this[_0x69912(0x203)]();},Window_PartyCommand[_0x2acc51(0x185)][_0x2acc51(0x203)]=function(){const _0x1c4821=_0x2acc51;if(!$gameSystem[_0x1c4821(0x263)]())return;if(this['findSymbol'](_0x1c4821(0x299))>=0x0)return;const _0x1c67c8=Imported[_0x1c4821(0x2c7)]?this['commandStyle']():_0x1c4821(0x336),_0xb5de48=TextManager['combatLog_BattleCmd_Name'],_0x3384e4=ImageManager['combatLog_BattleCmd_Icon']||0x0,_0x20d595=_0x1c67c8===_0x1c4821(0x336)?_0xb5de48:_0x1c4821(0x38a)[_0x1c4821(0x1ee)](_0x3384e4,_0xb5de48);this[_0x1c4821(0x1c5)](_0x20d595,_0x1c4821(0x299));},VisuMZ[_0x2acc51(0x26e)]['Window_ActorCommand_makeCommandList']=Window_ActorCommand['prototype'][_0x2acc51(0x2fe)],Window_ActorCommand[_0x2acc51(0x185)][_0x2acc51(0x2fe)]=function(){const _0x5e0eee=_0x2acc51;VisuMZ['CombatLog'][_0x5e0eee(0x192)][_0x5e0eee(0x2af)](this);if(Imported['VisuMZ_1_BattleCore'])return;if(this[_0x5e0eee(0x22d)](_0x5e0eee(0x299))>=0x0)return;this['addCombatLogCommand']();},VisuMZ[_0x2acc51(0x26e)]['Window_ActorCommand_addCustomCommands']=Window_ActorCommand[_0x2acc51(0x185)][_0x2acc51(0x35b)],Window_ActorCommand['prototype']['addCustomCommands']=function(){const _0x283126=_0x2acc51;VisuMZ['CombatLog'][_0x283126(0x2b5)][_0x283126(0x2af)](this),this['addCombatLogCommand']();},Window_ActorCommand[_0x2acc51(0x185)]['addCombatLogCommand']=function(){const _0x5dc497=_0x2acc51;if(!$gameSystem[_0x5dc497(0x2ff)]())return;this['findSymbol'](_0x5dc497(0x299))>=0x0&&this[_0x5dc497(0x324)]();const _0x2a8ba6=Imported[_0x5dc497(0x2c7)]?this[_0x5dc497(0x239)]():_0x5dc497(0x336),_0x3d6021=TextManager[_0x5dc497(0x1d3)],_0x5c8a8b=ImageManager['combatLog_BattleCmd_Icon']||0x0,_0x112aa1=_0x2a8ba6===_0x5dc497(0x336)?_0x3d6021:_0x5dc497(0x38a)['format'](_0x5c8a8b,_0x3d6021);this[_0x5dc497(0x1c5)](_0x112aa1,_0x5dc497(0x299));},VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x1fe)][_0x2acc51(0x1df)]=Window_ActorCommand[_0x2acc51(0x185)][_0x2acc51(0x226)],Window_ActorCommand[_0x2acc51(0x185)][_0x2acc51(0x226)]=function(){const _0x391ac9=_0x2acc51,_0x26c4fd=this[_0x391ac9(0x360)]();switch(_0x26c4fd){case _0x391ac9(0x299):this['_helpWindow'][_0x391ac9(0x28b)](TextManager[_0x391ac9(0x1ac)]);break;default:VisuMZ[_0x391ac9(0x26e)][_0x391ac9(0x1fe)][_0x391ac9(0x1df)][_0x391ac9(0x2af)](this);break;}},Window_ActorCommand[_0x2acc51(0x185)][_0x2acc51(0x324)]=function(){const _0x4e689c=_0x2acc51;while(this[_0x4e689c(0x22d)](_0x4e689c(0x299))>=0x0){if(_0x4e689c(0x2cf)===_0x4e689c(0x31d)){if(this['_combatLogAccess']===_0x2d7ee8)this[_0x4e689c(0x283)]();this['_combatLogAccess'][_0x4e689c(0x2b9)]=_0x4eed81;}else{const _0xfe401c=this[_0x4e689c(0x22d)](_0x4e689c(0x299));this[_0x4e689c(0x1eb)][_0x4e689c(0x2a9)](_0xfe401c,0x1);}}};function Window_CombatLogHistory(){const _0x39f90d=_0x2acc51;this[_0x39f90d(0x200)](...arguments);}Window_CombatLogHistory[_0x2acc51(0x185)]=Object[_0x2acc51(0x2d4)](Window_HorzCommand[_0x2acc51(0x185)]),Window_CombatLogHistory[_0x2acc51(0x185)][_0x2acc51(0x25f)]=Window_CombatLogHistory,Window_CombatLogHistory[_0x2acc51(0x185)][_0x2acc51(0x200)]=function(_0x4c4a73){const _0x405c61=_0x2acc51;Window_HorzCommand[_0x405c61(0x185)][_0x405c61(0x200)]['call'](this,_0x4c4a73);},Window_CombatLogHistory[_0x2acc51(0x185)]['maxCols']=function(){const _0x48447b=_0x2acc51;return $gameSystem[_0x48447b(0x1c1)]();},Window_CombatLogHistory[_0x2acc51(0x185)]['processCursorHomeEndTrigger']=function(){},Window_CombatLogHistory[_0x2acc51(0x185)][_0x2acc51(0x32d)]=function(_0x29d3d7){},Window_CombatLogHistory['prototype'][_0x2acc51(0x219)]=function(_0x3146ee){},Window_CombatLogHistory['prototype'][_0x2acc51(0x35c)]=function(){const _0x49971b=_0x2acc51;Window_HorzCommand[_0x49971b(0x185)][_0x49971b(0x35c)]['call'](this),this[_0x49971b(0x2ab)]&&this[_0x49971b(0x2ab)]['setCombatLogIndex'](this['currentExt']());},Window_CombatLogHistory[_0x2acc51(0x185)][_0x2acc51(0x2dc)]=function(_0x482d96){const _0x553801=_0x2acc51;this[_0x553801(0x2ab)]=_0x482d96;},Window_CombatLogHistory[_0x2acc51(0x185)][_0x2acc51(0x2fe)]=function(){const _0x9727aa=_0x2acc51;let _0x1bffd4=$gameSystem[_0x9727aa(0x1c1)]();for(let _0x5363ba=0x0;_0x5363ba<_0x1bffd4;_0x5363ba++){if(_0x9727aa(0x2f0)===_0x9727aa(0x2f0)){let _0x3aaa19=_0x5363ba===0x0?TextManager[_0x9727aa(0x262)]:TextManager[_0x9727aa(0x16d)],_0x53c8a8=_0x3aaa19[_0x9727aa(0x1ee)]($gameSystem[_0x9727aa(0x333)]()-_0x5363ba);this[_0x9727aa(0x1c5)](_0x53c8a8,_0x9727aa(0x212),!![],_0x5363ba);}else{if(this[_0x9727aa(0x357)]===_0x51b7f2)this[_0x9727aa(0x38b)]();return this[_0x9727aa(0x1c1)]()>0x0;}}};function Window_CombatLogDisplay(){const _0x29ee19=_0x2acc51;this[_0x29ee19(0x200)](...arguments);}Window_CombatLogDisplay['prototype']=Object[_0x2acc51(0x2d4)](Window_Command[_0x2acc51(0x185)]),Window_CombatLogDisplay['prototype'][_0x2acc51(0x25f)]=Window_CombatLogDisplay,Window_CombatLogDisplay[_0x2acc51(0x320)]=![],Window_CombatLogDisplay[_0x2acc51(0x29b)]=![],Window_CombatLogDisplay[_0x2acc51(0x1ca)]=0x4,Window_CombatLogDisplay[_0x2acc51(0x355)]=0.2,Window_CombatLogDisplay[_0x2acc51(0x1ae)]=1.5,Window_CombatLogDisplay[_0x2acc51(0x26a)]=VisuMZ['CombatLog'][_0x2acc51(0x1fe)][_0x2acc51(0x210)]['HotKey']||_0x2acc51(0x250),Window_CombatLogDisplay['prototype'][_0x2acc51(0x200)]=function(_0x5e69e2){const _0x4c093f=_0x2acc51;Window_Command['prototype']['initialize']['call'](this,_0x5e69e2),this[_0x4c093f(0x19c)](),SceneManager[_0x4c093f(0x27a)]()&&(this[_0x4c093f(0x19a)]=0x0);},Window_CombatLogDisplay[_0x2acc51(0x185)]['itemHeight']=function(){const _0x10c507=_0x2acc51;let _0x172730=Window_Scrollable[_0x10c507(0x185)][_0x10c507(0x2f5)][_0x10c507(0x2af)](this);return _0x172730+(Window_CombatLogDisplay[_0x10c507(0x320)]?0x8:0x0);},Window_CombatLogDisplay[_0x2acc51(0x185)][_0x2acc51(0x382)]=function(){const _0x459522=_0x2acc51;return VisuMZ['CombatLog'][_0x459522(0x1fe)][_0x459522(0x26e)]['AutoColor'];},Window_CombatLogDisplay[_0x2acc51(0x185)][_0x2acc51(0x16f)]=function(){return!![];},Window_CombatLogDisplay[_0x2acc51(0x185)][_0x2acc51(0x30e)]=function(_0x72716e){},Window_CombatLogDisplay[_0x2acc51(0x185)]['processOk']=function(){const _0x58d212=_0x2acc51;this[_0x58d212(0x1d6)]();},Window_CombatLogDisplay[_0x2acc51(0x185)][_0x2acc51(0x24d)]=function(){const _0x953421=_0x2acc51;this[_0x953421(0x1d6)]();},Window_CombatLogDisplay['prototype'][_0x2acc51(0x194)]=function(){const _0x2debd0=_0x2acc51;if(SceneManager[_0x2debd0(0x27a)]()&&!this[_0x2debd0(0x2ed)]){if(_0x2debd0(0x2c9)===_0x2debd0(0x2c9))$gameSystem[_0x2debd0(0x1b0)]()&&Window_CombatLogDisplay[_0x2debd0(0x26a)]!==undefined&&(this[_0x2debd0(0x2c5)]()?this[_0x2debd0(0x1d5)]():this[_0x2debd0(0x384)]());else{_0x4712a9[_0x2debd0(0x26e)][_0x2debd0(0x296)][_0x2debd0(0x2af)](this,_0x4c6de6,_0x3e30a4);if(_0x1afa2e[_0x2debd0(0x1d9)]&&_0x5cb647[_0x2debd0(0x26e)][_0x2debd0(0x1fe)]['CombatLog'][_0x2debd0(0x2a3)]){const _0x541a0d=_0x50c204['combatLogName']();let _0x142acb=_0xd6abf5[_0x2debd0(0x1d9)],_0x49c629=_0x142acb['format'](_0x541a0d,_0x454a31[_0x2debd0(0x347)]()),_0x22ee06=_0x3e5854['combatLog_Substitute_Icon'];_0x5d4639[_0x2debd0(0x375)](_0x49c629,_0x22ee06);}}}if(this['isOpen']()){Input['isPressed'](_0x2debd0(0x267))&&this[_0x2debd0(0x349)](Window_CombatLogDisplay['SCROLL_SPEED_CURSOR']);Input['isPressed']('up')&&this[_0x2debd0(0x242)](Window_CombatLogDisplay[_0x2debd0(0x355)]);Input[_0x2debd0(0x1f1)](_0x2debd0(0x2e6))&&this[_0x2debd0(0x349)](Window_CombatLogDisplay[_0x2debd0(0x1ae)]);if(Input[_0x2debd0(0x1f1)](_0x2debd0(0x247))){if('XevwZ'===_0x2debd0(0x389)){let _0x22801b=_0x2f503a[_0x2debd0(0x1ee)](this[_0x2debd0(0x347)]()),_0x49148e=_0x159eec[_0x2debd0(0x321)];_0x5ab5a0[_0x2debd0(0x375)](_0x22801b,_0x49148e);}else this['smoothScrollUp'](Window_CombatLogDisplay[_0x2debd0(0x1ae)]);}Input[_0x2debd0(0x28a)](_0x2debd0(0x251))&&this[_0x2debd0(0x36f)](0x0,0x0),Input[_0x2debd0(0x28a)](_0x2debd0(0x2a2))&&this[_0x2debd0(0x36f)](0x0,this[_0x2debd0(0x376)]());}},Window_CombatLogDisplay[_0x2acc51(0x185)]['isAccessKeyPressed']=function(){const _0x36ae9c=_0x2acc51;if($gameMessage[_0x36ae9c(0x2fa)]())return![];return Input[_0x36ae9c(0x1f1)](Window_CombatLogDisplay[_0x36ae9c(0x26a)]);},Window_CombatLogDisplay['prototype'][_0x2acc51(0x270)]=function(_0x16765a){const _0x29b5d4=_0x2acc51;if(this[_0x29b5d4(0x221)]===_0x16765a)return;this[_0x29b5d4(0x221)]=_0x16765a,this[_0x29b5d4(0x174)](),this['scrollTo'](0x0,0x0);},Window_CombatLogDisplay[_0x2acc51(0x185)][_0x2acc51(0x2fe)]=function(){const _0x58d70a=_0x2acc51;if(this[_0x58d70a(0x221)]===undefined)return;const _0x2ac0e8=$gameSystem[_0x58d70a(0x252)](this[_0x58d70a(0x221)]);for(const _0x4f062e of _0x2ac0e8){if(_0x58d70a(0x23b)===_0x58d70a(0x23b)){if(!_0x4f062e)continue;this[_0x58d70a(0x1c5)](_0x4f062e,_0x58d70a(0x299));}else return this[_0x58d70a(0x1e3)]&&this[_0x58d70a(0x1e3)][_0x58d70a(0x25f)]===_0x2ad654;}const _0x1ce7f5=this[_0x58d70a(0x1eb)][this[_0x58d70a(0x1eb)][_0x58d70a(0x2ec)]-0x1];_0x1ce7f5&&_0x1ce7f5[_0x58d70a(0x330)]!==_0x58d70a(0x28d)&&this[_0x58d70a(0x1c5)](_0x58d70a(0x28d),'combatLog');},Window_CombatLogDisplay[_0x2acc51(0x185)]['drawItemBackground']=function(_0x1cc694){const _0x10ad13=_0x2acc51;if(Window_CombatLogDisplay['SHOW_LINE_BACKGROUND']){if(_0x10ad13(0x38c)!==_0x10ad13(0x33d)){const _0x5e3a57=this['itemRect'](_0x1cc694);this[_0x10ad13(0x2b2)](_0x5e3a57);}else{_0x5024a4['CombatLog'][_0x10ad13(0x1fa)][_0x10ad13(0x2af)](this,_0x479012);if(_0xc48896==='')return;const _0x27eb52=_0x5c3ac5['CombatLog'][_0x10ad13(0x1fe)][_0x10ad13(0x273)];if(_0x27eb52&&_0x27eb52['Show_StealItems_Steal']&&_0x5628c7[_0x10ad13(0x27a)]()){let _0x38f063=_0x27eb52['Icon_StealItems_Steal'];_0x3d95b0[_0x10ad13(0x375)](_0x5043b8,_0x38f063);}}}},Window_CombatLogDisplay[_0x2acc51(0x185)]['drawItem']=function(_0xc1185d){const _0x28075c=_0x2acc51,_0x435cf4=this['itemLineRect'](_0xc1185d),_0x46741a=this[_0x28075c(0x396)](_0xc1185d);if(_0x46741a===_0x28075c(0x28d)){if(_0x28075c(0x35f)===_0x28075c(0x35f))this['drawHorzLine'](_0x435cf4);else{let _0x459e5d=_0x3f0efd[_0x28075c(0x244)],_0x1dc191=_0x459e5d[_0x28075c(0x1ee)](_0xd24200[_0x28075c(0x347)]()),_0x360c2f=_0x4358b0[_0x28075c(0x240)];_0x5c2d64[_0x28075c(0x375)](_0x1dc191,_0x360c2f);}}else{if('nHuCF'===_0x28075c(0x361))this[_0x28075c(0x287)](_0x46741a,_0x435cf4['x'],_0x435cf4['y'],_0x435cf4[_0x28075c(0x21e)]);else{if(_0xc2d98a[_0x28075c(0x2fa)]())return![];return _0x4c2877['isPressed'](_0x209252[_0x28075c(0x26a)]);}}},Window_CombatLogDisplay['prototype'][_0x2acc51(0x1bc)]=function(_0x13e80b){const _0x4e9cae=_0x2acc51;this[_0x4e9cae(0x2c2)]();const _0x34ff56=Window_CombatLogDisplay[_0x4e9cae(0x1ca)],_0x212277=_0x13e80b['y']+(_0x13e80b['height']-_0x34ff56)/0x2;this[_0x4e9cae(0x205)](_0x13e80b['x'],_0x212277,_0x13e80b[_0x4e9cae(0x21e)],_0x34ff56);},Window_CombatLogDisplay[_0x2acc51(0x185)][_0x2acc51(0x2ce)]=function(){const _0x2ef580=_0x2acc51;this[_0x2ef580(0x221)]=0x0,this[_0x2ef580(0x174)](),this[_0x2ef580(0x29c)](0x0,this[_0x2ef580(0x376)]());},Window_CombatLogDisplay[_0x2acc51(0x185)]['setLastWindow']=function(_0x59e17a){const _0x237370=_0x2acc51;this[_0x237370(0x1c3)]=_0x59e17a;},Window_CombatLogDisplay[_0x2acc51(0x185)][_0x2acc51(0x344)]=function(){const _0x351a8b=_0x2acc51;return this[_0x351a8b(0x1c3)];},Window_CombatLogDisplay[_0x2acc51(0x185)][_0x2acc51(0x21f)]=function(){const _0x5b9bc5=_0x2acc51;this[_0x5b9bc5(0x1b2)]=new Sprite(),this[_0x5b9bc5(0x1b2)][_0x5b9bc5(0x318)]=new Bitmap(0x0,0x0),this[_0x5b9bc5(0x1b2)]['x']=-0x4,this['addChildToBack'](this[_0x5b9bc5(0x1b2)]);},Window_CombatLogDisplay[_0x2acc51(0x185)][_0x2acc51(0x363)]=function(){const _0x1a950f=_0x2acc51;if(this[_0x1a950f(0x1b2)]){if('lOHSa'!==_0x1a950f(0x176)){const _0x1b0bb7=this[_0x1a950f(0x1b2)][_0x1a950f(0x318)],_0x54e8e1=this[_0x1a950f(0x21e)]>0x0?this[_0x1a950f(0x21e)]+0x8:0x0,_0x1fd4ad=this['height'],_0x587b82=this[_0x1a950f(0x29f)],_0x367b11=ColorManager['dimColor1'](),_0x3c2f18=ColorManager[_0x1a950f(0x23f)]();_0x1b0bb7[_0x1a950f(0x20d)](_0x54e8e1,_0x1fd4ad),_0x1b0bb7['gradientFillRect'](0x0,0x0,_0x54e8e1,_0x587b82,_0x3c2f18,_0x367b11,!![]),_0x1b0bb7[_0x1a950f(0x1e5)](0x0,_0x587b82,_0x54e8e1,_0x1fd4ad-_0x587b82*0x2,_0x367b11),_0x1b0bb7[_0x1a950f(0x2d7)](0x0,_0x1fd4ad-_0x587b82,_0x54e8e1,_0x587b82,_0x367b11,_0x3c2f18,!![]),this['_dimmerSprite']['setFrame'](0x0,0x0,_0x54e8e1,_0x1fd4ad),$gameParty[_0x1a950f(0x163)]()&&(this[_0x1a950f(0x1b2)][_0x1a950f(0x26c)]['x']=0x64,this['_dimmerSprite'][_0x1a950f(0x213)]['x']=0.5);}else{const _0x9e54bc=_0x5517d8[_0x1a950f(0x26e)][_0x1a950f(0x1fe)]['Compatibility'];if(_0x9e54bc&&_0x9e54bc[_0x1a950f(0x317)]&&_0x833902[_0x1a950f(0x27a)]()){let _0x3973b0=_0x9e54bc[_0x1a950f(0x356)];if(_0x3973b0){let _0x413058=_0x3973b0[_0x1a950f(0x1ee)](this['combatLogName'](),_0x58e7ea[_0x1a950f(0x330)]),_0x5c894d=_0x51d985[_0x1a950f(0x279)];_0xb534ac[_0x1a950f(0x375)](_0x413058,_0x5c894d);}}_0x4493aa[_0x1a950f(0x26e)][_0x1a950f(0x27c)]['call'](this,_0x1e70d3);}}},VisuMZ['CombatLog'][_0x2acc51(0x20c)]=Game_Battler[_0x2acc51(0x185)][_0x2acc51(0x2d8)],Game_Battler[_0x2acc51(0x185)][_0x2acc51(0x2d8)]=function(){const _0x1c30e6=_0x2acc51;VisuMZ[_0x1c30e6(0x26e)][_0x1c30e6(0x20c)]['call'](this);if(!SceneManager[_0x1c30e6(0x27a)]())return;const _0x580ea1=VisuMZ['CombatLog'][_0x1c30e6(0x1fe)]['Compatibility'];if(!_0x580ea1)return;if(!_0x580ea1['ShowBattleSysAtbInterrupt'])return;const _0x2d7e27=_0x580ea1[_0x1c30e6(0x22f)];if(_0x2d7e27){let _0x275c15=_0x2d7e27[_0x1c30e6(0x1ee)](this[_0x1c30e6(0x347)]()),_0x29ba62=_0x580ea1[_0x1c30e6(0x282)];$gameSystem[_0x1c30e6(0x375)](_0x275c15,_0x29ba62);}},VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x241)]=Game_Battler[_0x2acc51(0x185)][_0x2acc51(0x17a)],Game_Battler[_0x2acc51(0x185)][_0x2acc51(0x17a)]=function(_0x42d345){const _0x3817f1=_0x2acc51;VisuMZ[_0x3817f1(0x26e)][_0x3817f1(0x241)][_0x3817f1(0x2af)](this,_0x42d345);if(_0x42d345===0x0)return;if(!SceneManager[_0x3817f1(0x27a)]())return;const _0x32684d=VisuMZ[_0x3817f1(0x26e)][_0x3817f1(0x1fe)]['Compatibility'];if(!_0x32684d)return;if(!_0x32684d[_0x3817f1(0x201)])return;const _0x5ca244=_0x32684d['TextBattleSysCtbOrderChange'];if(_0x5ca244){if('iowoO'!==_0x3817f1(0x1f0))return 0x0;else{let _0x1f271d=_0x5ca244[_0x3817f1(0x1ee)](this[_0x3817f1(0x347)]()),_0x44ca0d=_0x32684d[_0x3817f1(0x33a)];$gameSystem[_0x3817f1(0x375)](_0x1f271d,_0x44ca0d);}}},VisuMZ[_0x2acc51(0x26e)]['Game_Battler_stbGainInstant']=Game_Battler[_0x2acc51(0x185)][_0x2acc51(0x2d0)],Game_Battler[_0x2acc51(0x185)][_0x2acc51(0x2d0)]=function(_0x580a47){const _0x52758d=_0x2acc51;VisuMZ['CombatLog'][_0x52758d(0x22c)][_0x52758d(0x2af)](this,_0x580a47);if(_0x580a47===0x0)return;if(!SceneManager[_0x52758d(0x27a)]())return;const _0x5bb2c6=VisuMZ[_0x52758d(0x26e)][_0x52758d(0x1fe)][_0x52758d(0x273)];if(!_0x5bb2c6)return;if(!_0x5bb2c6[_0x52758d(0x164)])return;const _0x5ed152=_0x5bb2c6[_0x52758d(0x17f)];if(_0x5ed152){if(_0x52758d(0x1cb)==='cymZY')_0x4cf310=_0x21e6d9[_0x52758d(0x1ee)](_0x38da81,_0x52758d(0x2e7));else{let _0x481579=_0x5ed152[_0x52758d(0x1ee)](this[_0x52758d(0x347)]()),_0x351bc9=_0x5bb2c6[_0x52758d(0x321)];$gameSystem[_0x52758d(0x375)](_0x481579,_0x351bc9);}}},VisuMZ['CombatLog'][_0x2acc51(0x27c)]=Game_Battler['prototype'][_0x2acc51(0x342)],Game_Battler['prototype'][_0x2acc51(0x342)]=function(_0x15941b){const _0x3f97f4=_0x2acc51,_0x22a548=VisuMZ['CombatLog'][_0x3f97f4(0x1fe)][_0x3f97f4(0x273)];if(_0x22a548&&_0x22a548[_0x3f97f4(0x317)]&&SceneManager['isSceneBattle']()){let _0x5d2e22=_0x22a548[_0x3f97f4(0x356)];if(_0x5d2e22){if(_0x3f97f4(0x305)===_0x3f97f4(0x2b0))return this[_0x3f97f4(0x330)]();else{let _0x1c8291=_0x5d2e22[_0x3f97f4(0x1ee)](this[_0x3f97f4(0x347)](),_0x15941b[_0x3f97f4(0x330)]),_0x351880=_0x15941b['iconIndex'];$gameSystem[_0x3f97f4(0x375)](_0x1c8291,_0x351880);}}}VisuMZ['CombatLog']['Game_Battler_onAntiDamageNullificationBarrier'][_0x3f97f4(0x2af)](this,_0x15941b);},VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x2f4)]=Game_Battler[_0x2acc51(0x185)][_0x2acc51(0x36d)],Game_Battler[_0x2acc51(0x185)][_0x2acc51(0x36d)]=function(_0x4f4fae){const _0x316c1e=_0x2acc51,_0x2ab6aa=VisuMZ['CombatLog'][_0x316c1e(0x1fe)][_0x316c1e(0x273)];if(_0x2ab6aa&&_0x2ab6aa[_0x316c1e(0x30d)]&&SceneManager[_0x316c1e(0x27a)]()){let _0x13a94d=_0x2ab6aa['Text_AntiDmgBarrier_Cancel'];if(_0x13a94d){let _0x40f33d=_0x13a94d[_0x316c1e(0x1ee)](this[_0x316c1e(0x347)](),_0x4f4fae[_0x316c1e(0x330)]),_0x35a446=_0x4f4fae[_0x316c1e(0x279)];$gameSystem[_0x316c1e(0x375)](_0x40f33d,_0x35a446);}}VisuMZ['CombatLog'][_0x316c1e(0x2f4)][_0x316c1e(0x2af)](this,_0x4f4fae);},VisuMZ[_0x2acc51(0x26e)]['Game_BattlerBase_getAntiDamageBarrierReduction']=Game_BattlerBase[_0x2acc51(0x185)][_0x2acc51(0x1e6)],Game_BattlerBase['prototype'][_0x2acc51(0x1e6)]=function(_0x501a57){const _0x109698=_0x2acc51,_0x10e36c=VisuMZ[_0x109698(0x26e)][_0x109698(0x1fe)][_0x109698(0x273)];if(_0x10e36c&&_0x10e36c[_0x109698(0x171)]&&SceneManager[_0x109698(0x27a)]()){let _0xd1e744=_0x10e36c[_0x109698(0x167)];if(_0xd1e744){let _0x4cf70d=_0xd1e744[_0x109698(0x1ee)](this['combatLogName'](),$dataStates[_0x501a57]['name']),_0x16621c=$dataStates[_0x501a57]['iconIndex'];$gameSystem[_0x109698(0x375)](_0x4cf70d,_0x16621c);}}return VisuMZ[_0x109698(0x26e)][_0x109698(0x227)][_0x109698(0x2af)](this,_0x501a57);},VisuMZ['CombatLog'][_0x2acc51(0x2e4)]=Game_Battler[_0x2acc51(0x185)]['displayAbsorptionBarrierPopup'],Game_Battler[_0x2acc51(0x185)][_0x2acc51(0x215)]=function(_0x3de0c7,_0x4984c6){const _0x27223b=_0x2acc51;VisuMZ[_0x27223b(0x26e)]['Game_Battler_displayAbsorptionBarrierPopup'][_0x27223b(0x2af)](this,_0x3de0c7,_0x4984c6);if(_0x3de0c7===0x0)return;const _0x2577ab=VisuMZ['CombatLog']['Settings']['Compatibility'];if(_0x2577ab&&_0x2577ab[_0x27223b(0x2ad)]&&SceneManager[_0x27223b(0x27a)]()){let _0x39a3b4=_0x2577ab[_0x27223b(0x345)];if(_0x39a3b4){if('omggX'==='omggX'){let _0x1edc4e=_0x39a3b4[_0x27223b(0x1ee)](this[_0x27223b(0x347)](),_0x4984c6[_0x27223b(0x330)],_0x3de0c7),_0x189714=_0x4984c6[_0x27223b(0x279)];$gameSystem[_0x27223b(0x375)](_0x1edc4e,_0x189714);}else{const _0x137bd7=_0x2e5a60['CombatLog']['Settings']['General'];this[_0x27223b(0x23d)]={'mainMenu':_0x137bd7[_0x27223b(0x193)],'partyCmd':_0x137bd7[_0x27223b(0x275)],'actorCmd':_0x137bd7[_0x27223b(0x306)],'hotkeyOn':!![]};}}}},VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x2a8)]=Game_Battler[_0x2acc51(0x185)]['onAntiDamageMpBarrier'],Game_Battler['prototype'][_0x2acc51(0x191)]=function(_0x59c649){const _0x23a8a9=_0x2acc51,_0x30d57d=VisuMZ[_0x23a8a9(0x26e)][_0x23a8a9(0x1fe)][_0x23a8a9(0x273)];if(_0x30d57d&&_0x30d57d['Show_AntiDmgBarrier_MpDisperse']&&SceneManager['isSceneBattle']()){let _0x48ba5c=_0x30d57d[_0x23a8a9(0x2b7)];if(_0x48ba5c){if('rveOH'!==_0x23a8a9(0x165)){if(this[_0x23a8a9(0x23d)]===_0xc3e255)this[_0x23a8a9(0x283)]();this[_0x23a8a9(0x23d)][_0x23a8a9(0x22a)]=_0x5f89fd;}else{let _0x290067=_0x48ba5c['format'](this['combatLogName'](),_0x59c649['name'],TextManager['mp']),_0x59ecf3=_0x59c649[_0x23a8a9(0x279)];$gameSystem[_0x23a8a9(0x375)](_0x290067,_0x59ecf3);}}}VisuMZ[_0x23a8a9(0x26e)][_0x23a8a9(0x2a8)][_0x23a8a9(0x2af)](this,_0x59c649);},VisuMZ['CombatLog'][_0x2acc51(0x18e)]=Game_Battler['prototype']['onAntiDamageTpBarrier'],Game_Battler[_0x2acc51(0x185)][_0x2acc51(0x377)]=function(_0x4f836e){const _0x191331=_0x2acc51,_0x1b6afa=VisuMZ[_0x191331(0x26e)]['Settings'][_0x191331(0x273)];if(_0x1b6afa&&_0x1b6afa['Show_AntiDmgBarrier_TpDisperse']&&SceneManager['isSceneBattle']()){let _0x396ef7=_0x1b6afa['Text_AntiDmgBarrier_TpDisperse'];if(_0x396ef7){if('iQSdE'!==_0x191331(0x327)){_0x109a1e['ConvertParams'](_0x380547,_0x3072fe);const _0x512697=_0x4c5625['Bypass'];_0x18c268['setBypassCombatLog'](_0x512697);}else{let _0x22659c=_0x396ef7[_0x191331(0x1ee)](this[_0x191331(0x347)](),_0x4f836e[_0x191331(0x330)],TextManager['tp']),_0x583a83=_0x4f836e[_0x191331(0x279)];$gameSystem['addTextToCombatLog'](_0x22659c,_0x583a83);}}}VisuMZ[_0x191331(0x26e)]['Game_Battler_onAntiDamageTpBarrier'][_0x191331(0x2af)](this,_0x4f836e);},VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x286)]=Game_Battler[_0x2acc51(0x185)][_0x2acc51(0x1a3)],Game_Battler[_0x2acc51(0x185)][_0x2acc51(0x1a3)]=function(_0x515237){const _0x437c5b=_0x2acc51;VisuMZ[_0x437c5b(0x26e)]['Game_Battler_onLifeStateEffect']['call'](this,_0x515237);if(!SceneManager['isSceneBattle']())return;if(!_0x515237)return;const _0x4430b5=VisuMZ['CombatLog']['Settings'][_0x437c5b(0x273)];if(!_0x4430b5)return;if(!_0x4430b5[_0x437c5b(0x1c0)[_0x437c5b(0x1ee)](_0x515237)])return;let _0x333858=_0x4430b5[_0x437c5b(0x334)[_0x437c5b(0x1ee)](_0x515237)];if(_0x333858){let _0x309cea=_0x333858[_0x437c5b(0x1ee)](this[_0x437c5b(0x347)]()),_0x2c9038=_0x4430b5[_0x437c5b(0x195)[_0x437c5b(0x1ee)](_0x515237)];$gameSystem[_0x437c5b(0x375)](_0x309cea,_0x2c9038);}},VisuMZ[_0x2acc51(0x26e)][_0x2acc51(0x1fa)]=Window_BattleLog[_0x2acc51(0x185)][_0x2acc51(0x179)],Window_BattleLog['prototype'][_0x2acc51(0x179)]=function(_0x32e19a){const _0x33fbef=_0x2acc51;VisuMZ['CombatLog']['Window_BattleLog_addStealText'][_0x33fbef(0x2af)](this,_0x32e19a);if(_0x32e19a==='')return;const _0x3c5e17=VisuMZ[_0x33fbef(0x26e)][_0x33fbef(0x1fe)][_0x33fbef(0x273)];if(_0x3c5e17&&_0x3c5e17[_0x33fbef(0x24a)]&&SceneManager[_0x33fbef(0x27a)]()){if(_0x33fbef(0x352)!==_0x33fbef(0x352))_0x447cac['CombatLog'][_0x33fbef(0x2b5)][_0x33fbef(0x2af)](this),this[_0x33fbef(0x203)]();else{let _0x249166=_0x3c5e17[_0x33fbef(0x36e)];$gameSystem[_0x33fbef(0x375)](_0x32e19a,_0x249166);}}};