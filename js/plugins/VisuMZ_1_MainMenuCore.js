//=============================================================================
// VisuStella MZ - Main Menu Core
// VisuMZ_1_MainMenuCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_MainMenuCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.MainMenuCore = VisuMZ.MainMenuCore || {};
VisuMZ.MainMenuCore.version = 1.11;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.11] [MainMenuCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Main_Menu_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Main Menu Core plugin is designed to give you more control over the Main
 * Menu outside of RPG Maker MZ's editor's control. Game devs are given control
 * over how commands work, visual aesthetics pertaining to the Main Menu, and 
 * assign menu images to actors as background portraits.
 *
 * Features include all (but not limited to) the following:
 *
 * * Control over general Main Menu settings.
 * * The ability to set Menu Background Portraits for individual actors.
 * * Flexibility in changing which commands appear in the Main Menu.
 * * Add new windows like the Playtime Window and Variable windows.
 * * Change the style of how the windows are arranged in the Main Menu.
 * * Change the way the status list is displayed and the way it's displayed.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 1 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
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
 * <Menu Portrait: filename>
 *
 * - Used for: Actor
 * - This is used with the "Portrait" style Main Menu List.
 * - Sets the menu image for the actor to 'filename'.
 * - Replace 'filename' with a picture found within your game project's
 *   img/pictures/ folder. Filenames are case sensitive. Leave out the filename
 *   extension from the notetag.
 *
 * ---
 * 
 * <Menu Portrait Offset: +x, +y>
 * <Menu Portrait Offset: -x, -y>
 * 
 * <Menu Portrait Offset X: +x>
 * <Menu Portrait Offset X: -x>
 * 
 * <Menu Portrait Offset Y: +y>
 * <Menu Portrait Offset Y: -y>
 *
 * - Used for: Actor
 * - This is used with the "Portrait" style Main Menu List.
 * - Offsets the X and Y coordinates for the menu image.
 * - Replace 'x' with a number value that offsets the x coordinate.
 * - Negative x values offset left. Positive x values offset right.
 * - Replace 'y' with a number value that offsets the y coordinate.
 * - Negative y values offset up. Positive x values offset down.
 * - This only applies to the Main Menu portraits.
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
 * Actor: Change Menu Image (Group)
 * Actor: Change Menu Image (Range)
 * Actor: Change Menu Image (JS)
 * - Changes the actor's Menu Image.
 * - Each version has a different means of selecting Actor ID's.
 *
 *   Step 1: Actor:
 *   - Select which ID(s) to affect.
 *
 *     Single:
 *     - Select which specific ID to affect.
 *
 *     Variable Reference:
 *     - Which variable is used to determine which ID to affect?
 *
 *     Range Start:
 *     - Select where the ID range begins.
 *
 *     Range End:
 *     - Select where the ID range ends.
 *
 *     Group:
 *     - Select which group of ID(s) to affect.
 *
 *     JavaScript:
 *     - JavaScript code to return an array on which ID(s) to affect.
 *
 *   Step 2: Target:
 *   - Select operation on what to change the switch(es) to.
 *   - Depending on what you pick here, one of the following actions are used
 *     in combination with the ID's picked from Step 1.
 *
 *     Filename:
 *     - Selected actor(s) will have their menu images changed to this.
 *
 *     Variable Reference:
 *     - Select the variable used to determine filename used for the selected
 *       actor(s).
 *
 *     JavaScript:
 *     - JavaScript code to determine what filename is used for the selected
 *       actor(s).
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These general settings contain various settings on how the Main Menu scene
 * displays certain windows, alters how specific windows behave, and determines
 * which scenes would display actor menu images as background portraits.
 *
 * ---
 *
 * Gold Window
 * 
 *   Thinner Gold Window:
 *   - Make the Gold Window thinner in the Main Menu?
 *   - Used to match the Playtime and Variable Windows.
 * 
 *   Auto Adjust Height:
 *   - Automatically adjust the height for the thinner Gold Window?
 *
 *   Auto Adjust Y:
 *   - Automatically adjust the Y position for the thinner Gold Window?
 *
 * ---
 * 
 * Status Window
 * 
 *   Select Last?:
 *   - When picking a personal command from the Command Window, select the
 *     last picked actor or always the first?
 * 
 * ---
 *
 * Solo Party
 *
 *   Solo Quick Mode:
 *   - When selecting "Skills", "Equip", or "Status" with one party member,
 *     immediately go to the scene.
 *
 * ---
 *
 * Sub Menus
 *
 *   Menus with Actor BG's:
 *   - A list of the menus that would be compatible with Actor Menu Backgrounds
 *
 *   JS: Actor BG Action:
 *   - Code used to determine how to display the sprites upon loading.
 *
 * ---
 * 
 * Party Window
 * 
 *   Show Reserve Memebers:
 *   - Show reserve members while on the Main Menu scene?
 * 
 *   Hide Main Menu Only
 *   - If reserve members are hidden, hide them only in the main menu or
 *     all scenes?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Command Window List
 * ============================================================================
 *
 * The Command Window functions as a hub to the various scenes linked from the
 * Main Menu. These include 'Item', 'Skill', 'Equip', 'Status', 'Save', and
 * so on. This Plugin Parameter is an array that lets you add, remove, and/or
 * alter the Command Window's various commands, how they're handled, whether or
 * not they're visible, and how they react when selected.
 *
 * These will require knowledge of JavaScript to use them properly.
 *
 * ---
 *
 * Command Window List
 * 
 *   Symbol:
 *   - The symbol used for this command.
 *
 *   Icon:
 *   - Icon used for this command.
 *   - Use 0 for no icon.
 * 
 *   STR: Text:
 *   - Displayed text used for this title command.
 *   - If this has a value, ignore the JS: Text version.
 *
 *   JS: Text:
 *   - JavaScript code used to determine string used for the displayed name.
 * 
 *   JS: Show:
 *   - JavaScript code used to determine if the item is shown or not.
 * 
 *   JS: Enable:
 *   - JavaScript code used to determine if the item is enabled or not.
 * 
 *   JS: Ext:
 *   - JavaScript code used to determine any ext data that should be added.
 * 
 *   JS: Run Code:
 *   - JavaScript code that runs once this command is selected.
 * 
 *   JS: Personal Code:
 *   - JavaScript code that runs once the actor list is selected with this
 *     command highlighted.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Playtime Window
 * ============================================================================
 *
 * The Playtime Window is an optional feature that can be displayed in the
 * Main Menu. As its name suggests, it displays the playtime of the player's
 * current play through.
 *
 * ---
 *
 * Playtime Window
 * 
 *   Enable:
 *   - Use the Playtime Window?
 * 
 *   Adjust Command Window:
 *   - Adjust the command window's height to fit in the Playtime Window?
 *
 *   Background Type:
 *   - Select background type for the Playtime window.
 * 
 *   Font Size:
 *   - Font size used for displaying Gold inside the Playtime window.
 * 
 *   Time Icon:
 *   - Icon displayed for the 'Time' label.
 * 
 *   Time Text:
 *   - Text for the display of 'Time' in the Playtime window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for the Playtime window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Variable Window
 * ============================================================================
 *
 * The Variable Window is an optional feature that can be displayed in the
 * Main Menu. If enabled, the Variable Window will display variables of the
 * game dev's choice in the Main Menu itself.
 *
 * ---
 *
 * Variable Window
 * 
 *   Enable:
 *   - Use the Variable Window?
 * 
 *   Adjust Command Window:
 *   - Adjust the command window's height to fit in the Variable Window?
 *
 *   Background Type:
 *   - Select background type for the Variable window.
 * 
 *   Font Size:
 *   - Font size used for displaying Gold inside the Variable window.
 * 
 *   Variable List:
 *   - Select variables to be displayed into the window.
 *     Use \i[x] to determine their icon.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for the Variable window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Command Window Style & Command Style Settings
 * ============================================================================
 *
 * This determines how the Main Menu appears based on the Command Window Style.
 * If anything but the 'Default' is used, then these settings will take over
 * the window placement settings for the Main Menu. This means that even if you
 * are using VisuStella's Core Engine, the window layouts will be overwritten.
 *
 * ---
 *
 * Command Window Style:
 * - Choose the positioning and style of the Main Menu Command Window.
 * - This will automatically rearrange windows.
 * 
 *   Default Vertical Side Style:
 *   - The default Main Menu layout style.
 *   - Affected by VisuStella's Core Engine's Plugin Parameter settings.
 * 
 *   Top Horizontal Style:
 *   - Puts the Command Window at the top of the screen.
 *   - Gold, Playlist, and Variable Windows are moved to the bottom.
 *   - The Actor List Window is placed in the middle.
 *   - Unaffected by VisuStella's Core Engine's Plugin Parameter settings.
 *
 *   Bottom Horizontal Style:
 *   - Puts the Command Window at the bottom of the screen.
 *   - Gold, Playlist, and Variable Windows are moved to the top.
 *   - The Actor List Window is placed in the middle.
 *   - Unaffected by VisuStella's Core Engine's Plugin Parameter settings.
 * 
 *   Mobile Full Screen Style:
 *   - Puts the Command Window at the center of the screen with larger buttons.
 *   - Gold, Playlist, and Variable Windows are moved to the bottom.
 *   - The Actor List Window is hidden until prompted to be selected.
 *   - Unaffected by VisuStella's Core Engine's Plugin Parameter settings.
 *
 * ---
 *
 * Command Style Settings
 *
 *   Style:
 *   - How do you wish to draw command entries in the Command Window?
 *   - Text Only: displays only text.
 *   - Icon Only: displays only the icon.
 *   - Icon + Text: displays icon first, then text.
 *   - Automatic: determines the best fit for the size
 *
 *   Text Alignment:
 *   - Decide how you want the text to be aligned.
 *   - Left, Center, or Right
 * 
 *   Rows:
 *   - Number of visible rows.
 *   - Applies only to Top, Bottom, and Mobile styles.
 * 
 *   Columns:
 *   - Number of maximum columns.
 *   - Applies only to Top, Bottom, and Mobile styles.
 * 
 *   Mobile Thickness:
 *   - The thickness of the buttons for mobile version.
 *   - Applies only to Top, Bottom, and Mobile styles.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Status Graphic, Status List Style, & List Style Settings
 * ============================================================================
 *
 * Choose how the contents Actor Status List Window in the Main Menu appears.
 * This can range from the which actor graphic is drawn to the style used for
 * the data that's displayed.
 *
 * ---
 *
 * Status Graphic:
 * - Choose how the graphic for actor graphics appear in status-like menus.
 * 
 *   None:
 *   - Don't display any graphic for the actors.
 * 
 *   Face:
 *   - Display the actors' faces. This is the default option in RPG Maker MZ.
 *
 *   Map Sprite:
 *   - Display the actors' map sprites.
 * 
 *   Sideview Battler:
 *   - Display the actors' sideview battlers.
 *
 * ---
 *
 * Main Menu List Style
 * - Choose how the actor status list looks in the Main Menu.
 *
 * Inner-Menu List Style
 * - Choose how the actor status list looks in the inner menus like Scene_Item,
 *   Scene_Skill, etc.
 *
 *   Default Horizontal Style:
 *   - This is the default style found in RPG Maker MZ's Main Menu.
 *
 *   Vertical Style:
 *   - Makes the display for the actor list vertical instead of horizontal.
 *
 *   Portrait Style:
 *   - Similar to the vertical style, except each actor's Menu Image is
 *     displayed in the background instead. Portraits are required.
 *   - If there is no Menu Image used, this will switch over to the Vertical
 *     Style and use a face graphic instead.
 *
 *   Solo Style:
 *   - Used for solo party member games. Extends the whole view of the Status
 *     Window to accomodate a single actor.
 *
 *   Thin Horizontal Style:
 *   - Makes the selectable menu entries for the actors a single line thin.
 *
 *   Thicker Horizontal Style:
 *   - Makes the selectable menu entries for the actors two lines thick.
 *
 * ---
 *
 * List Styles
 *   JavaScript code used to determine how the individual styles are drawn.
 *
 *   JS: Default:
 *   JS: Vertical:
 *   JS: Portrait:
 *   JS: Solo:
 *   JS: Thin:
 *   JS: Thicker:
 *   - Code used to draw the data for these styles.
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
 * Version 1.11: May 14, 2021
 * * Feature Update!
 * ** Updated the default Plugin Parameters for 'Command Window List' to
 *    include a 'Load' command after the 'Save' command.
 * *** This allows players to access the load game screen from the Main Menu.
 * *** Projects with the Main Menu Core already installed will not have this
 *     update, but you can copy over the settings from a new project with the
 *     following steps:
 * **** Create a new project. Install Main Menu Core. Open up the new project's
 *      'Command Window List'. Right click the 'Load' option and click copy.
 *      Go to the target project's Main Menu Core's 'Command Window List'
 *      plugin parameter. Paste the command where you want it to go.
 * 
 * Version 1.10: April 16, 2021
 * * Feature Update!
 * ** Default style for List Styles now have its code updated with the
 *    JS: Default plugin parameter for games whose vertical screen resolution
 *    is larger than normal.
 * *** To update this, do either of the following:
 * **** Open up the Main Menu Core Plugin Parameters. Select and press delete 
 *      on "List Style Settings". Press Enter. New updated settings will be
 *      replaced for the JS: Default settings.
 * **** Or Delete the existing VisuMZ_1_MainMenuCore.js in the Plugin Manager
 *      list and install the newest version.
 * 
 * Version 1.09: March 19, 2021
 * * Documentation Update!
 * ** Added clarity for the "Portrait Style" in Plugin Parameters section for
 *    "Status Graphic, Status List Style, & List Style Settings":
 * *** If there is no Menu Image used, this will switch over to the Vertical
 *     Style and use a face graphic instead.
 * 
 * Version 1.08: February 26, 2021
 * * Feature Update!
 * ** Default Plugin Parameters for the List Style Settings defaults have been
 *    updated with tighter coordinate values to allow for more accurate display
 *    of UI element positioning. Update made by Olivia.
 * 
 * Version 1.07: January 1, 2021
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * ** Removed "<Menu Image: filename>" version of notetag to reduce confusion
 *    and to stick with the norm declared by the Battle Core.
 * * New Features!
 * ** New notetags added by Yanfly:
 * *** <Menu Portrait Offset: +x, +y>
 * *** <Menu Portrait Offset X: +x>
 * *** <Menu Portrait Offset Y: +y>
 * **** This is used with the "Portrait" style Main Menu list.
 * **** Offsets the X and Y coordinates for the menu portrait.
 * 
 * Version 1.06: December 11, 2020
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.05: October 11, 2020
 * * Documentation Update!
 * ** Documentation added for the new plugin parameter.
 * * New Features!
 * ** New plugin parameter added by Yanfly.
 * *** Plugin Parameters > General > Status Window > Select Last?
 * **** When picking a personal command from the Command Window, select the
 *      last picked actor or always the first?
 * 
 * Version 1.04: October 4, 2020
 * * Feature Update!
 * ** Certain windows will now pre-load all associated image types for the
 *    actor upon being created to avoid custom JS drawing problems.
 *    Change made by Irina.
 * ** Failsafes have been added to prevent non-existent variables from crashing
 *    the game if a user does not remove them from the variable list. Change
 *    made by Irina.
 * 
 * Version 1.03: September 20, 2020
 * * Documentation Update!
 * ** Added the alternative notetag <Menu Portrait: filename> that also works
 *    the same way as <Menu Image: filename>.
 * 
 * Version 1.02: September 13, 2020
 * * Compatibility Update!
 * ** Better compatibility for SV Actor graphics.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Skill check plugin parameter for show fixed. Fixed by Yanfly and Shaz.
 * *** Users updating from version 1.00 will need to fix this problem by either
 *     removing the plugin from the Plugin Manager list and reinstalling it, or
 *     going to Plugin Parameters > Command Window List > skill >
 *     JS: Show > and changing 'this.needsCommand("item")' to
 *     'this.needsCommand("skill")'
 *
 * Version 1.00: August 20, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChangeActorMenuImageGroup
 * @text Actor: Change Menu Image (Group)
 * @desc Changes the actor's Menu Image.
 * Select from a group of actor ID's to change.
 *
 * @arg Step1:arraynum
 * @text Step 1: Target ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Step2:str
 * @text Step 2: Filename
 * @type file
 * @dir img/pictures/
 * @desc Selected actor(s) will have their menu images changed to this.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChangeActorMenuImageRange
 * @text Actor: Change Menu Image (Range)
 * @desc Changes the actor's Menu Image.
 * Select from a range of actor ID's to change.
 *
 * @arg Step1
 * @text Step 1: ID Range
 *
 * @arg Step1Start:num
 * @text Range Start
 * @parent Step1
 * @type actor
 * @desc Select which Actor ID to start from.
 * @default 1
 *
 * @arg Step1End:num
 * @text Range End
 * @parent Step1
 * @type actor
 * @desc Select which Actor ID to end at.
 * @default 4
 *
 * @arg Step2:str
 * @text Step 2: Filename
 * @type file
 * @dir img/pictures/
 * @desc Selected actor(s) will have their menu images changed to this.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChangeActorMenuImageJS
 * @text Actor: Change Menu Image (JS)
 * @desc Changes the actor's Menu Image.
 * Select from a group of actor ID's using JavaScript.
 *
 * @arg Step1:arrayeval
 * @text Step 1: Target ID(s)
 * @type string[]
 * @desc Enter which Actor ID(s) to affect.
 * You may use JavaScript code.
 * @default ["$gameVariables.value(1)"]
 *
 * @arg Step2:str
 * @text Step 2: Filename
 * @type file
 * @dir img/pictures/
 * @desc Selected actor(s) will have their menu images changed to this.
 * @default 
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
 * @param MainMenuCore
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
 * @desc General settings pertaining to the Main Menu and related.
 * @default {"GoldWindow":"","ThinGoldWindow:eval":"true","AutoGoldHeight:eval":"true","AutoGoldY:eval":"true","StatusWindow":"","StatusSelectLast:eval":"false","SoloParty":"","SoloQuick:eval":"true","SubMenus":"","ActorBgMenus:arraystr":"[\"Scene_Skill\"]","ActorBgMenuJS:func":"\"this.anchor.x = 0.5;\\nconst scale = 1.25;\\nthis.scale.x = this.scale.y = scale;\\nthis.x = Graphics.width;\\nthis.y = Graphics.height - (this.bitmap.height * Math.abs(scale));\\nthis._targetX = Graphics.width * 3 / 4;\\nthis._targetY = Graphics.height - (this.bitmap.height * Math.abs(scale));\\nthis._duration = 10;\\nthis.opacity = 0;\"","PartyWindow":"","ShowReserve:eval":"true","HideMainMenuOnly:eval":"true"}
 *
 * @param CommandList:arraystruct
 * @text Command Window List
 * @type struct<Command>[]
 * @desc Window commands used by the Main Menu.
 * Add new commands here.
 * @default ["{\"Symbol:str\":\"item\",\"Icon:num\":\"208\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.item;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"item\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandItem();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"classChange\",\"Icon:num\":\"133\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.classChangeMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_2_ClassChangeSystem &&\\\\n    this.isClassChangeCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled() &&\\\\n    this.isClassChangeCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandPersonal();\\\"\",\"PersonalHandlerJS:func\":\"\\\"SceneManager.push(Scene_ClassChange);\\\"\"}","{\"Symbol:str\":\"skill\",\"Icon:num\":\"101\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.skill;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"skill\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandPersonal();\\\"\",\"PersonalHandlerJS:func\":\"\\\"SceneManager.push(Scene_Skill);\\\"\"}","{\"Symbol:str\":\"equip\",\"Icon:num\":\"137\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.equip;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"equip\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandPersonal();\\\"\",\"PersonalHandlerJS:func\":\"\\\"SceneManager.push(Scene_Equip);\\\"\"}","{\"Symbol:str\":\"status\",\"Icon:num\":\"82\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.status;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"status\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandPersonal();\\\"\",\"PersonalHandlerJS:func\":\"\\\"SceneManager.push(Scene_Status);\\\"\"}","{\"Symbol:str\":\"itemCrafting\",\"Icon:num\":\"223\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.ItemCraftingMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_2_ItemCraftingSys &&\\\\n    this.isItemCraftingCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isItemCraftingCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandItemCrafting();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"quest\",\"Icon:num\":\"186\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.questCommandName;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_2_QuestSystem &&\\\\n    this.isQuestCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isQuestCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandQuest();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"combatLog\",\"Icon:num\":\"189\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.combatLog_BattleCmd_Name;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_4_CombatLog &&\\\\n    this.isCombatLogCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isCombatLogCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandCombatLog();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"formation\",\"Icon:num\":\"75\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.formation;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"formation\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.isFormationEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandFormation();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"options\",\"Icon:num\":\"83\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.options;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"options\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.isOptionsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandOptions();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"save\",\"Icon:num\":\"189\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.save;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"save\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.isSaveEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandSave();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"load\",\"Icon:num\":\"191\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return 'Load';\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"save\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return DataManager.isAnySavefileExists();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandLoad();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"commonEvent1\",\"Icon:num\":\"88\",\"TextStr:str\":\"Common Event 1\",\"TextJS:func\":\"\\\"return 'Text';\\\"\",\"ShowJS:func\":\"\\\"return false;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return 1;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandCommonEvent();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"commonEvent2\",\"Icon:num\":\"87\",\"TextStr:str\":\"Common Event 2\",\"TextJS:func\":\"\\\"return 'Text';\\\"\",\"ShowJS:func\":\"\\\"return false;\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return 2;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandPersonal();\\\"\",\"PersonalHandlerJS:func\":\"\\\"// Declare Ext\\\\nconst ext = arguments[0];\\\\n\\\\n// Declare Status Window\\\\nconst statusWindow = SceneManager._scene._statusWindow;\\\\n\\\\n// Declare Actor ID\\\\nconst actorId = statusWindow.actor(statusWindow.index()).actorId();\\\\n\\\\n// Set variable 1 to Actor ID\\\\n$gameVariables.setValue(1, actorId);\\\\n\\\\n// Prepare Common Event ext to run\\\\n$gameTemp.reserveCommonEvent(ext);\\\\n\\\\n// Exit Main Menu\\\\nSceneManager._scene.popScene();\\\"\"}","{\"Symbol:str\":\"gameEnd\",\"Icon:num\":\"187\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.gameEnd;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"gameEnd\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.isGameEndEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandGameEnd();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}"]
 *
 * @param Playtime:struct
 * @text Playtime Window
 * @type struct<Playtime>
 * @desc Settings for the Playtime Window.
 * @default {"Enable:eval":"true","AdjustCommandHeight:func":"true","BgType:num":"0","FontSize:num":"24","Icon:num":"75","Time:str":"Time","WindowRect:func":"\"const rows = 1;\\nconst ww = this.mainCommandWidth();\\nconst wh = this.calcWindowHeight(rows, false);\\nconst wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;\\nlet wy = this.mainAreaBottom() - wh;\\nif (this._goldWindow) wy -= this._goldWindow.height;\\nif (this.canCreateVariableWindow()) wy -= this.variableWindowRect().height;\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 *
 * @param Variable:struct
 * @text Variable Window
 * @type struct<Variable>
 * @desc Settings for the Variable Window.
 * @default {"Enable:eval":"false","AdjustCommandHeight:func":"true","BgType:num":"0","FontSize:num":"24","VarList:arraynum":"[\"1\",\"2\"]","WindowRect:func":"\"const rows = VisuMZ.MainMenuCore.Settings.Variable.VarList.length;\\nconst ww = this.mainCommandWidth();\\nconst wh = this.calcWindowHeight(rows, false);\\nconst wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;\\nlet wy = this.mainAreaBottom() - wh;\\nif (this._goldWindow) wy -= this._goldWindow.height;\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 *
 * @param ParamBreak1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param CommandWindowStyle:str
 * @text Command Window Style
 * @type select
 * @option Default Vertical Side Style
 * @value default
 * @option Top Horizontal Style
 * @value top
 * @option Thin Top Horizontal Style
 * @value thinTop
 * @option Bottom Horizontal Style
 * @value bottom
 * @option Thin Bottom Horizontal Style
 * @value thinBottom
 * @option Mobile Full Screen Style
 * @value mobile
 * @desc Choose the positioning and style of the Main Menu Command Window. This will automatically rearrange windows.
 * @default top
 *
 * @param CustomCmdWin:struct
 * @text Command Style Settings
 * @parent CommandWindowStyle:str
 * @type struct<CustomCmdWin>
 * @desc Settings for the non-default Command Window Styles.
 * @default {"Style:str":"auto","TextAlign:str":"center","Rows:num":"2","Cols:num":"4","MobileThickness:num":"5"}
 *
 * @param ParamBreak2
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param StatusGraphic:str
 * @text Status Graphic
 * @type select
 * @option None
 * @value none
 * @option Face
 * @value face
 * @option Map Sprite
 * @value sprite
 * @option Sideview Battler
 * @value svbattler
 * @desc Choose how the actor graphics appear in status-like menus.
 * @default face
 *
 * @param StatusListStyle:str
 * @text Main Menu List Style
 * @type select
 * @option Default Horizontal Style
 * @value default
 * @option Vertical Style
 * @value vertical
 * @option Portrait Style
 * @value portrait
 * @option Solo Style
 * @value solo
 * @option Thin Horizontal Style
 * @value thin
 * @option Thicker Horizontal Style
 * @value thicker
 * @desc Choose how the actor status list looks in the Main Menu.
 * @default portrait
 *
 * @param InnerMenuListStyle:str
 * @text Inner-Menu List Style
 * @parent StatusListStyle:str
 * @type select
 * @option Default Horizontal Style
 * @value default
 * @option Vertical Style
 * @value vertical
 * @option Portrait Style
 * @value portrait
 * @option Solo Style
 * @value solo
 * @option Thin Horizontal Style
 * @value thin
 * @option Thicker Horizontal Style
 * @value thicker
 * @desc Choose how the actor status list looks in the inner menus
 * like Scene_Item, Scene_Skill, etc.
 * @default default
 *
 * @param ListStyles:struct
 * @text List Style Settings
 * @parent StatusListStyle:str
 * @type struct<ListStyles>
 * @desc JavaScript code used to determine how the individual styles are drawn.
 * @default {"DefaultStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n// Draw Actor Graphic\\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\\nconst gy = rect.y + (this.graphicType() === 'face' ? 1 : 0);\\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\\n\\n// Draw Status Stuff\\nconst sx = rect.x + 180;\\nconst sy = rect.y + rect.height / 2 - this.lineHeight() * 1.5;\\nconst lineHeight = this.lineHeight();\\nconst sx2 = sx + 180;\\nthis.drawActorName(actor, sx, sy);\\nthis.drawActorLevel(actor, sx, sy + lineHeight * 1);\\nthis.drawActorIcons(actor, sx, sy + lineHeight * 2);\\nthis.drawActorClass(actor, sx2, sy);\\n\\n// Place Gauges\\nconst sy2 = sy + lineHeight;\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nthis.placeGauge(actor, \\\"hp\\\", sx2, sy2);\\nthis.placeGauge(actor, \\\"mp\\\", sx2, sy2 + gaugeLineHeight);\\nconst roomForTp = (sy2 + gaugeLineHeight * 3) <= rect.y + rect.height;\\nif ($dataSystem.optDisplayTp && roomForTp) {\\n    this.placeGauge(actor, \\\"tp\\\", sx2, sy2 + gaugeLineHeight * 2);\\n}\\n\\n// Following Requires VisuStella MZ's Core Engine\\n// Draw Additional Parameter Data if Enough Room\\nconst sx3 = sx2 + 180;\\nconst sw = rect.width - sx3 - 2;\\nif (Imported.VisuMZ_0_CoreEngine && sw >= 300) {\\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\\n    const pw = Math.floor(sw / 2) - 24;\\n    let px = sx3;\\n    let py = rect.y + Math.floor((rect.height - (Math.ceil(params.length / 2) * gaugeLineHeight)) / 2);\\n    let counter = 0;\\n    for (const param of params) {\\n        this.resetFontSettings();\\n        this.drawParamText(px, py, pw, param, true);\\n        this.resetTextColor();\\n        this.contents.fontSize -= 8;\\n        const paramValue = actor.paramValueByName(param, true);\\n        this.contents.drawText(paramValue, px, py, pw, gaugeLineHeight, 'right');\\n        counter++;\\n        if (counter % 2 === 0) {\\n            px = sx3;\\n            py += gaugeLineHeight;\\n        } else {\\n            px += pw + 24;\\n        }\\n    }\\n}\"","VerticalStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nconst totalHeight = (lineHeight * 4.5) + (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2));\\n\\n// Draw Actor Graphic\\nconst gw = rect.width;\\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\\nconst gx = rect.x;\\nconst gy = Math.max(rect.y, rect.y + (rect.height - totalHeight - gh) / 2);\\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\\n\\n// Draw Actor Name\\nlet sx = rect.x;\\nlet sy = Math.max(gy + gh, rect.y + (rect.height - totalHeight + gh) / 2);\\nlet sw = rect.width;\\nthis.drawText(actor.name(), sx, sy, sw, 'center');\\n\\n// Draw Actor Level\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.drawActorLevel(actor, sx, sy);\\n\\n// Draw Actor Class\\nconst className = actor.currentClass().name;\\nsx = rect.x + Math.round((rect.width - this.textSizeEx(className).width) / 2);\\nsy += lineHeight;\\nthis.drawTextEx(className, sx, sy, sw);\\n\\n// Draw Actor Icons\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.drawActorIcons(actor, sx, sy);\\n\\n// Draw Gauges\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.placeGauge(actor, \\\"hp\\\", sx, sy);\\nsy += gaugeLineHeight;\\nthis.placeGauge(actor, \\\"mp\\\", sx, sy);\\nsy += gaugeLineHeight;\\nif ($dataSystem.optDisplayTp) {\\n    this.placeGauge(actor, \\\"tp\\\", sx, sy);\\n}\"","PortraitStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n// Make Constants\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nconst totalHeight = (lineHeight * 4.5) + (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2));\\n\\n// Draw Actor Graphic\\nconst gw = rect.width;\\nconst gh = rect.height;\\nconst gx = rect.x;\\nconst gy = rect.y;\\nthis.drawItemActorMenuImage(actor, gx, gy, gw, gh);\\n\\n// Draw Dark Rectangle\\nlet sx = rect.x;\\nlet sy = Math.max(rect.y, rect.y + (rect.height - totalHeight));\\nlet sw = rect.width;\\nlet sh = rect.y + rect.height - sy;\\nthis.contents.fillRect(sx+1, sy+lineHeight/2, sw-2, sh-1-lineHeight/2, ColorManager.dimColor1());\\nthis.contents.gradientFillRect(sx+1, sy-lineHeight/2, sw-2, lineHeight, ColorManager.dimColor2(), ColorManager.dimColor1(), true);\\n\\n// Draw Actor Name\\nthis.drawText(actor.name(), sx, sy, sw, 'center');\\n\\n// Draw Actor Level\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.drawActorLevel(actor, sx, sy);\\n\\n// Draw Actor Class\\nconst className = actor.currentClass().name;\\nsx = rect.x + Math.round((rect.width - this.textSizeEx(className).width) / 2);\\nsy += lineHeight;\\nthis.drawTextEx(className, sx, sy, sw);\\n\\n// Draw Actor Icons\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.drawActorIcons(actor, sx, sy);\\n\\n// Draw Gauges\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.placeGauge(actor, \\\"hp\\\", sx, sy);\\nsy += gaugeLineHeight;\\nthis.placeGauge(actor, \\\"mp\\\", sx, sy);\\nsy += gaugeLineHeight;\\nif ($dataSystem.optDisplayTp) {\\n    this.placeGauge(actor, \\\"tp\\\", sx, sy);\\n}\"","SoloStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n// Make Constants\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\n\\n// Draw Actor Graphic\\nlet sx = rect.x;\\nlet sy = rect.y;\\nlet sw = rect.width;\\nlet sh = rect.height;\\n\\n// Portrait\\nif (actor.getMenuImage() !== '') {\\n    this.drawItemActorMenuImage(actor, rect.x, rect.y, rect.width, rect.height);\\n\\n// Everything Else\\n} else {\\n    const gx = Math.max(0, rect.x + Math.floor(((rect.width / 2) - ImageManager.faceWidth) / 2));\\n    const gy = Math.max(0, rect.y + rect.height - Math.ceil(lineHeight * 4.5) - ImageManager.faceHeight);\\n    this.drawActorGraphic(actor, gx, gy, ImageManager.faceWidth, ImageManager.faceHeight);\\n}\\n\\n// Draw Dark Rectangle\\nsh = Math.ceil(lineHeight * 4.5);\\nsy = rect.y + rect.height - sh;\\nthis.contents.fillRect(sx+1, sy+lineHeight/2, sw-2, sh-1-lineHeight/2, ColorManager.dimColor1());\\nthis.contents.gradientFillRect(sx+1, sy-lineHeight/2, sw-2, lineHeight, ColorManager.dimColor2(), ColorManager.dimColor1(), true);\\n\\n// Draw Actor Name\\nsw = Math.round(rect.width / 2);\\nthis.drawText(actor.name(), sx, sy, sw, 'center');\\n\\n// Draw Actor Level\\nsx = Math.max(0, rect.x + Math.floor(((rect.width / 2) - 128) / 2));\\nsy += lineHeight;\\nthis.drawActorLevel(actor, sx, sy);\\n\\n// Draw Actor Class\\nconst className = actor.currentClass().name;\\nsx = rect.x + Math.round(((rect.width / 2) - this.textSizeEx(className).width) / 2);\\nsy += lineHeight;\\nthis.drawTextEx(className, sx, sy, sw);\\n\\n// Draw Actor Icons\\nsx = rect.x + Math.round(((rect.width / 2) - 128) / 2);\\nsy += lineHeight;\\nthis.drawActorIcons(actor, sx, sy);\\n\\n// Prepare Stat Coordinates\\nsx = rect.x + Math.floor(rect.width / 2);\\nsw = rect.width / 2;\\nsh = rect.height;\\nconst sx3 = sx;\\nconst cw = rect.width - sx3 - 2;\\n\\n// Prepare Total Content Height to vertically center the content.\\nlet totalHeight = gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\\nif (Imported.VisuMZ_0_CoreEngine && cw >= 300) {\\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\\n    totalHeight += lineHeight;\\n    totalHeight += Math.ceil(params.length / 2) * gaugeLineHeight;\\n}\\nconst equips = actor.equips();\\ntotalHeight += lineHeight;\\ntotalHeight += equips.length * lineHeight;\\nsy = Math.max(rect.y, rect.y + Math.floor((rect.height - totalHeight) / 2));\\n\\n// Place Gauges\\nthis.placeGauge(actor, \\\"hp\\\", sx, sy);\\nsy += gaugeLineHeight;\\nthis.placeGauge(actor, \\\"mp\\\", sx, sy);\\nif ($dataSystem.optDisplayTp) {\\n    sy += gaugeLineHeight;\\n    this.placeGauge(actor, \\\"tp\\\", sx, sy);\\n    sy += gaugeLineHeight;\\n}\\nlet ny = sy;\\n\\n// Following Requires VisuStella MZ's Core Engine\\n// Draw Additional Parameter Data if Enough Room\\nif (Imported.VisuMZ_0_CoreEngine && cw >= 300) {\\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\\n    sy += lineHeight;\\n    const pw = Math.floor(cw / 2) - 24;\\n    let px = sx3;\\n    let counter = 0;\\n    for (const param of params) {\\n        this.resetFontSettings();\\n        this.drawParamText(px, sy, pw, param, true);\\n        this.resetTextColor();\\n        this.contents.fontSize -= 8;\\n        const paramValue = actor.paramValueByName(param, true);\\n        this.contents.drawText(paramValue, px, sy, pw, gaugeLineHeight, 'right');\\n        counter++;\\n        if (counter % 2 === 0) {\\n            px = sx3;\\n            sy += gaugeLineHeight;\\n        } else {\\n            px += pw + 24;\\n        }\\n    }\\n    ny += lineHeight;\\n    ny += Math.ceil(params.length / 2) * gaugeLineHeight;\\n}\\n\\n// Draw Actor Equipment\\nthis.resetFontSettings();\\nsx = rect.x + Math.floor(rect.width / 2);\\nsy = ny + lineHeight;\\nsw = rect.width / 2;\\nfor (const equip of equips) {\\n    if (equip) {\\n        this.drawItemName(equip, sx, sy, sw);\\n        sy += lineHeight;\\n        if (sy + lineHeight > rect.y + rect.height) return;\\n    }\\n}\"","ThinStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n// Draw Actor Graphic\\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\\nconst gy = rect.y + (this.graphicType() === 'face' ? 1 : 0);\\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\\n\\n// Draw Status Stuff\\nconst lineHeight = this.lineHeight();\\nlet sx = rect.x + 160;\\nlet sy = rect.y + ((rect.height - lineHeight) / 2) - 2;\\n\\n// Draw Actor Data\\nthis.drawActorName(actor, sx, sy);\\nthis.drawActorLevel(actor, gx+8, rect.y + rect.height - lineHeight +1);\\n\\n// Place Gauges\\nsx += 180;\\nsy += (lineHeight - this.gaugeLineHeight()) / 2;\\nthis.placeGauge(actor, \\\"hp\\\", sx, sy);\\nsx += 140;\\nif ((sx + 128) > rect.x + rect.width) return;\\nthis.placeGauge(actor, \\\"mp\\\", sx, sy);\\nsx += 140;\\nif ((sx + 128) > rect.x + rect.width) return;\\nif ($dataSystem.optDisplayTp) this.placeGauge(actor, \\\"tp\\\", sx, sy);\"","ThickerStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n// Draw Actor Graphic\\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\\nconst gy = rect.y + (this.graphicType() === 'face' ? 1 : 0);\\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\\n\\n// Draw Status Stuff\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nlet sx = rect.x + 160;\\nlet sy = rect.y + ((rect.height - (lineHeight * 2)) / 2) - 2;\\n\\n// Draw Actor Data\\nthis.drawActorLevel(actor, gx+8, rect.y + rect.height - lineHeight +1);\\nthis.drawActorName(actor, sx, sy);\\nthis.drawActorClass(actor, sx, sy + lineHeight);\\n//this.drawActorLevel(actor, sx, sy + lineHeight);\\n\\n// Place Gauges\\nsx += 180;\\nsy = rect.y + ((rect.height - (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2))) / 2) - 2;\\nthis.placeGauge(actor, \\\"hp\\\", sx, sy);\\nthis.placeGauge(actor, \\\"mp\\\", sx, sy + gaugeLineHeight);\\nif ($dataSystem.optDisplayTp) this.placeGauge(actor, \\\"tp\\\", sx, sy + (gaugeLineHeight * 2));\\nsx += 160;\\n\\n// Following Requires VisuStella MZ's Core Engine\\n// Draw Additional Parameter Data if Enough Room\\nconst sx3 = sx;\\nconst sw = rect.width - sx3 - 2;\\nif (Imported.VisuMZ_0_CoreEngine && sw >= 300) {\\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\\n    const pw = Math.floor(sw / 2) - 24;\\n    sy = rect.y + ((rect.height - (gaugeLineHeight * Math.ceil(params.length / 2))) / 2) - 2;\\n    let px = sx3;\\n    let py = rect.y + Math.floor((rect.height - (Math.ceil(params.length / 2) * gaugeLineHeight)) / 2);\\n    let counter = 0;\\n    for (const param of params) {\\n        this.resetFontSettings();\\n        this.drawParamText(px, py, pw, param, true);\\n        this.resetTextColor();\\n        this.contents.fontSize -= 8;\\n        const paramValue = actor.paramValueByName(param, true);\\n        this.contents.drawText(paramValue, px, py, pw, gaugeLineHeight, 'right');\\n        counter++;\\n        if (counter % 2 === 0) {\\n            px = sx3;\\n            py += gaugeLineHeight;\\n        } else {\\n            px += pw + 24;\\n        }\\n    }\\n}\""}
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
 * Commands Struct
 * ----------------------------------------------------------------------------
 */
/*~struct~Command:
 *
 * @param Symbol:str
 * @text Symbol
 * @desc The symbol used for this command.
 * @default Symbol
 *
 * @param Icon:num
 * @text Icon
 * @desc Icon used for this command.
 * Use 0 for no icon.
 * @default 0
 *
 * @param TextStr:str
 * @text STR: Text
 * @desc Displayed text used for this menu command.
 * If this has a value, ignore the JS: Text version.
 * @default Untitled
 *
 * @param TextJS:func
 * @text JS: Text
 * @type note
 * @desc JavaScript code used to determine string used for the displayed name.
 * @default "return 'Text';"
 *
 * @param ShowJS:func
 * @text JS: Show
 * @type note
 * @desc JavaScript code used to determine if the item is shown or not.
 * @default "return true;"
 *
 * @param EnableJS:func
 * @text JS: Enable
 * @type note
 * @desc JavaScript code used to determine if the item is enabled or not.
 * @default "return true;"
 *
 * @param ExtJS:func
 * @text JS: Ext
 * @type note
 * @desc JavaScript code used to determine any ext data that should be added.
 * @default "return null;"
 *
 * @param CallHandlerJS:func
 * @text JS: Run Code
 * @type note
 * @desc JavaScript code that runs once this command is selected.
 * @default "const ext = arguments[0];"
 *
 * @param PersonalHandlerJS:func
 * @text JS: Personal Code
 * @type note
 * @desc JavaScript code that runs once the actor list is selected with this command highlighted.
 * @default "const ext = arguments[0];"
 *
 */
/* ----------------------------------------------------------------------------
 * General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param GoldWindow
 * @text Gold Window
 *
 * @param ThinGoldWindow:eval
 * @text Thinner Gold Window
 * @parent GoldWindow
 * @type boolean
 * @on Thinner
 * @off Normal
 * @desc Make the Gold Window thinner in the Main Menu?
 * Used to match the Playtime and Variable Windows.
 * @default true
 *
 * @param AutoGoldHeight:eval
 * @text Auto Adjust Height
 * @parent GoldWindow
 * @type boolean
 * @on Automatic
 * @off Manual
 * @desc Automatically adjust the height for the thinner Gold Window?
 * @default true
 *
 * @param AutoGoldY:eval
 * @text Auto Adjust Y
 * @parent GoldWindow
 * @type boolean
 * @on Automatic
 * @off Manual
 * @desc Automatically adjust the Y position for the thinner Gold Window?
 * @default true
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusSelectLast:eval
 * @text Select Last?
 * @parent StatusWindow
 * @type boolean
 * @on Last Picked Actor
 * @off Always First Actor
 * @desc When picking a personal command from the Command Window,
 * select the last picked actor or always the first?
 * @default false
 *
 * @param SoloParty
 * @text Solo Party
 *
 * @param SoloQuick:eval
 * @text Solo Quick Mode
 * @parent SoloParty
 * @type boolean
 * @on Quick
 * @off Normal
 * @desc When selecting "Skills", "Equip", or "Status" with one party member, immediately go to the scene.
 * @default true
 *
 * @param SubMenus
 * @text Sub Menus
 *
 * @param ActorBgMenus:arraystr
 * @text Menus with Actor BG's
 * @parent SubMenus
 * @type string[]
 * @desc A list of the menus that would be compatible with Actor Menu Backgrounds.
 * @default ["Scene_Skill","Scene_Equip","Scene_Status"]
 *
 * @param ActorBgMenuJS:func
 * @text JS: Actor BG Action
 * @parent SubMenus
 * @type note
 * @desc Code used to determine how to display the sprites upon loading.
 * @default "this.anchor.x = 0.5;\nconst scale = 1.25;\nthis.scale.x = this.scale.y = scale;\nthis.x = Graphics.width;\nthis.y = Graphics.height - (this.bitmap.height * Math.abs(scale));\nthis._targetX = Graphics.width * 3 / 4;\nthis._targetY = Graphics.height - (this.bitmap.height * Math.abs(scale));\nthis._duration = 10;\nthis.opacity = 0;"
 *
 * @param PartyWindow
 * @text Party Window
 *
 * @param ShowReserve:eval
 * @text Show Reserve Memebers
 * @parent PartyWindow
 * @type boolean
 * @on Show Reserve Members
 * @off Hide Reserve Members
 * @desc Show reserve members while on the Main Menu scene?
 * @default true
 *
 * @param HideMainMenuOnly:eval
 * @text Hide Main Menu Only
 * @parent ShowReserve:eval
 * @type boolean
 * @on Hide in Main Menu Only
 * @off Hide in all Scenes
 * @desc If reserve members are hidden, hide them only in the main menu or all scenes?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Playtime Window
 * ----------------------------------------------------------------------------
 */
/*~struct~Playtime:
 *
 * @param Enable:eval
 * @text Use Window
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc Use the Playtime Window?
 * @default true
 *
 * @param AdjustCommandHeight:func
 * @text Adjust Command Window
 * @type boolean
 * @on Enable
 * @off Normal
 * @desc Adjust the command window's height to fit in the Playtime Window?
 * @default true
 *
 * @param BgType:num
 * @text Background Type
 * @type select
 * @option Window
 * @value 0
 * @option Dim
 * @value 1
 * @option Transparent
 * @value 2
 * @desc Select background type for the Playtime window.
 * @default 0
 *
 * @param FontSize:num
 * @text Font Size
 * @type number
 * @min 1
 * @desc Font size used for displaying Gold inside the Playtime window.
 * Default: 26
 * @default 20
 *
 * @param Icon:num
 * @text Time Icon
 * @desc Icon displayed for the 'Time' label.
 * @default 75
 *
 * @param Time:str
 * @text Time Text
 * @desc Text for the display of 'Time' in the Playtime window.
 * @default Time
 *
 * @param WindowRect:func
 * @text JS: X, Y, W, H
 * @type note
 * @desc Code used to determine the dimensions for the Playtime window.
 * @default "const rows = 1;\nconst ww = this.mainCommandWidth();\nconst wh = this.calcWindowHeight(rows, false);\nconst wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;\nlet wy = this.mainAreaBottom() - wh;\nif (this._goldWindow) wy -= this._goldWindow.height;\nif (this.canCreateVariableWindow()) wy -= this.variableWindowRect().height;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
/* ----------------------------------------------------------------------------
 * Variable Window
 * ----------------------------------------------------------------------------
 */
/*~struct~Variable:
 *
 * @param Enable:eval
 * @text Use Window
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc Use the Variable Window?
 * @default false
 *
 * @param AdjustCommandHeight:func
 * @text Adjust Command Window
 * @type boolean
 * @on Enable
 * @off Normal
 * @desc Adjust the command window's height to fit in the Variable Window?
 * @default true
 *
 * @param BgType:num
 * @text Background Type
 * @type select
 * @option Window
 * @value 0
 * @option Dim
 * @value 1
 * @option Transparent
 * @value 2
 * @desc Select background type for the Variable window.
 * @default 0
 *
 * @param FontSize:num
 * @text Font Size
 * @type number
 * @min 1
 * @desc Font size used for displaying Gold inside the Variable window.
 * Default: 26
 * @default 20
 *
 * @param VarList:arraynum
 * @text Variable List
 * @type variable[]
 * @desc Select variables to be displayed into the window.
 * Use \i[x] to determine their icon.
 * @default ["1","2","3"]
 *
 * @param WindowRect:func
 * @text JS: X, Y, W, H
 * @type note
 * @desc Code used to determine the dimensions for the Variable window.
 * @default "const rows = VisuMZ.MainMenuCore.Settings.Variable.VarList.length;\nconst ww = this.mainCommandWidth();\nconst wh = this.calcWindowHeight(rows, false);\nconst wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;\nlet wy = this.mainAreaBottom() - wh;\nif (this._goldWindow) wy -= this._goldWindow.height;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
/* ----------------------------------------------------------------------------
 * Horizontal Command Window Style
 * ----------------------------------------------------------------------------
 */
/*~struct~CustomCmdWin:
 *
 * @param Style:str
 * @text Command Style
 * @parent MainList
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw command entries in the Command Window?
 * @default auto
 *
 * @param TextAlign:str
 * @text Text Alignment
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Decide how you want the text to be aligned.
 * @default center
 *
 * @param Rows:num
 * @text Rows
 * @type number
 * @min 1
 * @desc Number of visible rows.
 * @default 2
 *
 * @param Cols:num
 * @text Columns
 * @type number
 * @min 1
 * @desc Number of maximum columns.
 * @default 4
 *
 * @param MobileThickness:num
 * @text Mobile Thickness
 * @type number
 * @min 1
 * @desc The thickness of the buttons for mobile version.
 * @default 5
 *
 */
/* ----------------------------------------------------------------------------
 * List Style Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ListStyles:
 *
 * @param DefaultStyle:func
 * @text JS: Default
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n// Draw Actor Graphic\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\nconst gy = rect.y + Math.floor((rect.height - gh) / 2);\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\n\n// Draw Status Stuff\nconst sx = rect.x + 180;\nconst sy = rect.y + rect.height / 2 - this.lineHeight() * 1.5;\nconst lineHeight = this.lineHeight();\nconst sx2 = sx + 180;\nthis.drawActorName(actor, sx, sy);\nthis.drawActorLevel(actor, sx, sy + lineHeight * 1);\nthis.drawActorIcons(actor, sx, sy + lineHeight * 2);\nthis.drawActorClass(actor, sx2, sy);\n\n// Place Gauges\nconst sy2 = sy + lineHeight;\nconst gaugeLineHeight = this.gaugeLineHeight();\nthis.placeGauge(actor, \"hp\", sx2, sy2);\nthis.placeGauge(actor, \"mp\", sx2, sy2 + gaugeLineHeight);\nconst roomForTp = (sy2 + gaugeLineHeight * 3) <= rect.y + rect.height;\nif ($dataSystem.optDisplayTp && roomForTp) {\n    this.placeGauge(actor, \"tp\", sx2, sy2 + gaugeLineHeight * 2);\n}\n\n// Following Requires VisuStella MZ's Core Engine\n// Draw Additional Parameter Data if Enough Room\nconst sx3 = sx2 + 180;\nconst sw = rect.width - sx3 - 2;\nif (Imported.VisuMZ_0_CoreEngine && sw >= 300) {\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\n    const pw = Math.floor(sw / 2) - 24;\n    let px = sx3;\n    let py = rect.y + Math.floor((rect.height - (Math.ceil(params.length / 2) * gaugeLineHeight)) / 2);\n    let counter = 0;\n    for (const param of params) {\n        this.resetFontSettings();\n        this.drawParamText(px, py, pw, param, true);\n        this.resetTextColor();\n        this.contents.fontSize -= 8;\n        const paramValue = actor.paramValueByName(param, true);\n        this.contents.drawText(paramValue, px, py, pw, gaugeLineHeight, 'right');\n        counter++;\n        if (counter % 2 === 0) {\n            px = sx3;\n            py += gaugeLineHeight;\n        } else {\n            px += pw + 24;\n        }\n    }\n}"
 *
 * @param VerticalStyle:func
 * @text JS: Vertical
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\nconst totalHeight = (lineHeight * 4.5) + (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2));\n\n// Draw Actor Graphic\nconst gw = rect.width;\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\nconst gx = rect.x;\nconst gy = Math.max(rect.y, rect.y + (rect.height - totalHeight - gh) / 2);\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\n\n// Draw Actor Name\nlet sx = rect.x;\nlet sy = Math.max(gy + gh, rect.y + (rect.height - totalHeight + gh) / 2);\nlet sw = rect.width;\nthis.drawText(actor.name(), sx, sy, sw, 'center');\n\n// Draw Actor Level\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.drawActorLevel(actor, sx, sy);\n\n// Draw Actor Class\nconst className = actor.currentClass().name;\nsx = rect.x + Math.round((rect.width - this.textSizeEx(className).width) / 2);\nsy += lineHeight;\nthis.drawTextEx(className, sx, sy, sw);\n\n// Draw Actor Icons\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.drawActorIcons(actor, sx, sy);\n\n// Draw Gauges\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.placeGauge(actor, \"hp\", sx, sy);\nsy += gaugeLineHeight;\nthis.placeGauge(actor, \"mp\", sx, sy);\nsy += gaugeLineHeight;\nif ($dataSystem.optDisplayTp) {\n    this.placeGauge(actor, \"tp\", sx, sy);\n}"
 *
 * @param PortraitStyle:func
 * @text JS: Portrait
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n// Make Constants\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\nconst totalHeight = (lineHeight * 4.5) + (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2));\n\n// Draw Actor Graphic\nconst gw = rect.width;\nconst gh = rect.height;\nconst gx = rect.x;\nconst gy = rect.y;\nthis.drawItemActorMenuImage(actor, gx, gy, gw, gh);\n\n// Draw Dark Rectangle\nlet sx = rect.x;\nlet sy = Math.max(rect.y, rect.y + (rect.height - totalHeight));\nlet sw = rect.width;\nlet sh = rect.y + rect.height - sy;\nthis.contents.fillRect(sx+1, sy+lineHeight/2, sw-2, sh-1-lineHeight/2, ColorManager.dimColor1());\nthis.contents.gradientFillRect(sx+1, sy-lineHeight/2, sw-2, lineHeight, ColorManager.dimColor2(), ColorManager.dimColor1(), true);\n\n// Draw Actor Name\nthis.drawText(actor.name(), sx, sy, sw, 'center');\n\n// Draw Actor Level\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.drawActorLevel(actor, sx, sy);\n\n// Draw Actor Class\nconst className = actor.currentClass().name;\nsx = rect.x + Math.round((rect.width - this.textSizeEx(className).width) / 2);\nsy += lineHeight;\nthis.drawTextEx(className, sx, sy, sw);\n\n// Draw Actor Icons\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.drawActorIcons(actor, sx, sy);\n\n// Draw Gauges\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.placeGauge(actor, \"hp\", sx, sy);\nsy += gaugeLineHeight;\nthis.placeGauge(actor, \"mp\", sx, sy);\nsy += gaugeLineHeight;\nif ($dataSystem.optDisplayTp) {\n    this.placeGauge(actor, \"tp\", sx, sy);\n}"
 *
 * @param SoloStyle:func
 * @text JS: Solo
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n// Make Constants\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\n\n// Draw Actor Graphic\nlet sx = rect.x;\nlet sy = rect.y;\nlet sw = rect.width;\nlet sh = rect.height;\n\n// Portrait\nif (actor.getMenuImage() !== '') {\n    this.drawItemActorMenuImage(actor, rect.x, rect.y, rect.width, rect.height);\n\n// Everything Else\n} else {\n    const gx = Math.max(0, rect.x + Math.floor(((rect.width / 2) - ImageManager.faceWidth) / 2));\n    const gy = Math.max(0, rect.y + rect.height - Math.ceil(lineHeight * 4.5) - ImageManager.faceHeight);\n    this.drawActorGraphic(actor, gx, gy, ImageManager.faceWidth, ImageManager.faceHeight);\n}\n\n// Draw Dark Rectangle\nsh = Math.ceil(lineHeight * 4.5);\nsy = rect.y + rect.height - sh;\nthis.contents.fillRect(sx+1, sy+lineHeight/2, sw-2, sh-1-lineHeight/2, ColorManager.dimColor1());\nthis.contents.gradientFillRect(sx+1, sy-lineHeight/2, sw-2, lineHeight, ColorManager.dimColor2(), ColorManager.dimColor1(), true);\n\n// Draw Actor Name\nsw = Math.round(rect.width / 2);\nthis.drawText(actor.name(), sx, sy, sw, 'center');\n\n// Draw Actor Level\nsx = Math.max(0, rect.x + Math.floor(((rect.width / 2) - 128) / 2));\nsy += lineHeight;\nthis.drawActorLevel(actor, sx, sy);\n\n// Draw Actor Class\nconst className = actor.currentClass().name;\nsx = rect.x + Math.round(((rect.width / 2) - this.textSizeEx(className).width) / 2);\nsy += lineHeight;\nthis.drawTextEx(className, sx, sy, sw);\n\n// Draw Actor Icons\nsx = rect.x + Math.round(((rect.width / 2) - 128) / 2);\nsy += lineHeight;\nthis.drawActorIcons(actor, sx, sy);\n\n// Prepare Stat Coordinates\nsx = rect.x + Math.floor(rect.width / 2);\nsw = rect.width / 2;\nsh = rect.height;\nconst sx3 = sx;\nconst cw = rect.width - sx3 - 2;\n\n// Prepare Total Content Height to vertically center the content.\nlet totalHeight = gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\nif (Imported.VisuMZ_0_CoreEngine && cw >= 300) {\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\n    totalHeight += lineHeight;\n    totalHeight += Math.ceil(params.length / 2) * gaugeLineHeight;\n}\nconst equips = actor.equips();\ntotalHeight += lineHeight;\ntotalHeight += equips.length * lineHeight;\nsy = Math.max(rect.y, rect.y + Math.floor((rect.height - totalHeight) / 2));\n\n// Place Gauges\nthis.placeGauge(actor, \"hp\", sx, sy);\nsy += gaugeLineHeight;\nthis.placeGauge(actor, \"mp\", sx, sy);\nif ($dataSystem.optDisplayTp) {\n    sy += gaugeLineHeight;\n    this.placeGauge(actor, \"tp\", sx, sy);\n    sy += gaugeLineHeight;\n}\nlet ny = sy;\n\n// Following Requires VisuStella MZ's Core Engine\n// Draw Additional Parameter Data if Enough Room\nif (Imported.VisuMZ_0_CoreEngine && cw >= 300) {\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\n    sy += lineHeight;\n    const pw = Math.floor(cw / 2) - 24;\n    let px = sx3;\n    let counter = 0;\n    for (const param of params) {\n        this.resetFontSettings();\n        this.drawParamText(px, sy, pw, param, true);\n        this.resetTextColor();\n        this.contents.fontSize -= 8;\n        const paramValue = actor.paramValueByName(param, true);\n        this.contents.drawText(paramValue, px, sy, pw, gaugeLineHeight, 'right');\n        counter++;\n        if (counter % 2 === 0) {\n            px = sx3;\n            sy += gaugeLineHeight;\n        } else {\n            px += pw + 24;\n        }\n    }\n    ny += lineHeight;\n    ny += Math.ceil(params.length / 2) * gaugeLineHeight;\n}\n\n// Draw Actor Equipment\nthis.resetFontSettings();\nsx = rect.x + Math.floor(rect.width / 2);\nsy = ny + lineHeight;\nsw = rect.width / 2;\nfor (const equip of equips) {\n    if (equip) {\n        this.drawItemName(equip, sx, sy, sw);\n        sy += lineHeight;\n        if (sy + lineHeight > rect.y + rect.height) return;\n    }\n}"
 *
 * @param ThinStyle:func
 * @text JS: Thin
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n// Draw Actor Graphic\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\nconst gy = rect.y + (this.graphicType() === 'face' ? 1 : 0);\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\n\n// Draw Status Stuff\nconst lineHeight = this.lineHeight();\nlet sx = rect.x + 160;\nlet sy = rect.y + ((rect.height - lineHeight) / 2) - 2;\n\n// Draw Actor Data\nthis.drawActorName(actor, sx, sy);\nthis.drawActorLevel(actor, gx+8, rect.y + rect.height - lineHeight +1);\n\n// Place Gauges\nsx += 180;\nsy += (lineHeight - this.gaugeLineHeight()) / 2;\nthis.placeGauge(actor, \"hp\", sx, sy);\nsx += 140;\nif ((sx + 128) > rect.x + rect.width) return;\nthis.placeGauge(actor, \"mp\", sx, sy);\nsx += 140;\nif ((sx + 128) > rect.x + rect.width) return;\nif ($dataSystem.optDisplayTp) this.placeGauge(actor, \"tp\", sx, sy);"
 *
 * @param ThickerStyle:func
 * @text JS: Thicker
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n// Draw Actor Graphic\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\nconst gy = rect.y + (this.graphicType() === 'face' ? 1 : 0);\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\n\n// Draw Status Stuff\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\nlet sx = rect.x + 160;\nlet sy = rect.y + ((rect.height - (lineHeight * 2)) / 2) - 2;\n\n// Draw Actor Data\nthis.drawActorLevel(actor, gx+8, rect.y + rect.height - lineHeight +1);\nthis.drawActorName(actor, sx, sy);\nthis.drawActorClass(actor, sx, sy + lineHeight);\n//this.drawActorLevel(actor, sx, sy + lineHeight);\n\n// Place Gauges\nsx += 180;\nsy = rect.y + ((rect.height - (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2))) / 2) - 2;\nthis.placeGauge(actor, \"hp\", sx, sy);\nthis.placeGauge(actor, \"mp\", sx, sy + gaugeLineHeight);\nif ($dataSystem.optDisplayTp) this.placeGauge(actor, \"tp\", sx, sy + (gaugeLineHeight * 2));\nsx += 160;\n\n// Following Requires VisuStella MZ's Core Engine\n// Draw Additional Parameter Data if Enough Room\nconst sx3 = sx;\nconst sw = rect.width - sx3 - 2;\nif (Imported.VisuMZ_0_CoreEngine && sw >= 300) {\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\n    const pw = Math.floor(sw / 2) - 24;\n    sy = rect.y + ((rect.height - (gaugeLineHeight * Math.ceil(params.length / 2))) / 2) - 2;\n    let px = sx3;\n    let py = rect.y + Math.floor((rect.height - (Math.ceil(params.length / 2) * gaugeLineHeight)) / 2);\n    let counter = 0;\n    for (const param of params) {\n        this.resetFontSettings();\n        this.drawParamText(px, py, pw, param, true);\n        this.resetTextColor();\n        this.contents.fontSize -= 8;\n        const paramValue = actor.paramValueByName(param, true);\n        this.contents.drawText(paramValue, px, py, pw, gaugeLineHeight, 'right');\n        counter++;\n        if (counter % 2 === 0) {\n            px = sx3;\n            py += gaugeLineHeight;\n        } else {\n            px += pw + 24;\n        }\n    }\n}"
 *
 */
//=============================================================================

const _0x1185=['GhdLN','opacity','_actorMenuBgSprite','text','canCreateVariableWindow','innerHeight','commandWindowRect','commandNameWindowDrawText','bottom','return\x200','trim','_goldWindow','thinGoldWindow','options','setMenuImage','goldWindowRectTopStyle','match','ThickerStyle','xWNhD','NUM','hIyBk','bind','save','version','onBitmapLoad','PortraitStyle','refresh','floor','statusWindowRectTopStyle','drawItemImage','yXCsx','itemLineRect','Time','Scene_MenuBase_updateActor','_menuImage','portrait','statusWindowRectMobileStyle','_scene','TFumT','Taczr','calcWindowHeight','lhYvm','createGoldWindow','CustomCmdWin','STRUCT','mainAreaTop','kRXVD','systemColor','name','iconWidth','Window_StatusBase_loadFaceImages','addGameEndCommand','JjhAU','callUpdateHelp','formation','Enable','adjustCommandHeightByPlaytime','TextJS','glqvH','hKkyo','drawItemStatusPortraitStyle','setHandler','loadFaceImages','InnerMenuListStyle','_commandList','commandPersonal','initMenuImage','CommandList','addMainCommands','Scene_Menu_create','_dummyWindow','faceWidth','default','Scene_Menu_statusWindowRect','Window_MenuStatus_drawItemImage','wLJxp','ChangeActorMenuImageJS','_bitmapReady','colSpacing','drawItemStatusDefaultStyle','_duration','_variableWindow','drawItemActorSvBattler','utygx','variables','itemRect','Variable','drawItemStatusThickerStyle','pvHRA','faceHeight','_actor','drawItemStatusSoloStyleOnLoad','cancel','createStatusWindow','commandLoad','Scene_Menu_createStatusWindow','mainCommandWidth','getMenuImageOffsetX','setTargetActor','commandWindowRectThinTopStyle','VJrMJ','boxWidth','replace','svActorVertCells','FUNC','thin','Scene_MenuBase_createBackground','concat','mobile','goldWindowRect','getMenuImage','drawItemActorFace','CxVEw','vertical','ARRAYJSON','ARRAYEVAL','statusWindowRectBottomStyle','Step1Start','right','commandWindowRectTopStyle','makeMainMenuCoreCommandList','changePaintOpacity','_timer','ExtJS','Style','commandName','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','drawText','adjustDefaultCommandWindowRect','min','\x5cI[%1]%2','ListStyles','STR','drawItemStatusThinStyle','Pswqt','Scene_Menu_commandPersonal','AutoGoldHeight','topIndex','commandStyle','canCreatePlaytimeWindow','note','thinTop','drawSvActor','drawItemStatusPortraitStyleOnLoad','QapNg','NAmao','141982yMDAQA','Settings','yiffH','updateCommandNameWindow','svbattler','Icon','drawItemStatusVerticalStyle','ARRAYFUNC','onPersonalCancel','StatusSelectLast','includes','DDrwV','TextStr','parse','183729AloclT','drawItemStyleIconText','zZnoX','JMyEl','DefaultStyle','exit','popScene','XIONl','battlerName','JNseX','changeTextColor','Scene_Menu_commandWindowRect','yhckg','_playtimeText','onFormationCancel','showOnlyBattleMembers','commandNameWindowDrawBackground','updatePosition','VarList','14itxdji','Scene_Menu_onFormationCancel','updateDuration','FSwKv','fill','updateTimer','Window_MenuCommand_initialize','ConvertParams','updateOpacity','koIQm','wQkcn','addLoadListener','resetTextColor','ChangeActorMenuImageRange','1oGCyoI','center','createCommandNameWindow','registerCommand','StatusGraphic','height','ChangeActorMenuImageGroup','loadOtherActorImages','pggvd','cXlkL','prototype','BgType','drawIcon','graphicType','uOMoe','solo','openness','commandStyleCheck','maxItems','Step1End','members','playtimeWindowRectTopStyle','isBigCharacter','createCommandWindow','cEeCo','maxBattleMembers','commandWindowRectMobileStyle','Step2','Scene_Menu_goldWindowRect','General','bnwQm','AutoGoldY','fOtCa','setBackgroundType','createVariableWindow','MobileThickness','Playtime','_statusWindow','open','commandWindowRectThinBottomStyle','drawItemStatusSoloStyle','thicker','getMenuImageOffsetY','ohMzP','onPersonalOk','AdjustCommandHeight','lineHeight','icon','Rows','maxCols','setup','listStyle','map','mainAreaHeight','Scene_Menu_commandFormation','297532QjpmNd','createActorMenuBackgroundImageSprite','Scene_Menu_onPersonalCancel','drawTimeLabel','drawItemStyleIcon','format','Window_MenuStatus_itemHeight','51193xEgrin','CommandWindowStyle','commandFormation','update','142210Uxqgcb','variableWindowRect','description','isSoloQuickMode','initialize','loadCharacter','_playtimeWindow','addFormationCommand','length','159947TDtrtP','characterName','variableWindowRectTopStyle','status','createPlaytimeWindow','ARRAYSTR','wNlFC','addChild','isDisplayActorMenuBackgroundImage','itemHeight','iconText','playtimeWindowRectBottomStyle','ceil','ShowReserve','shift','currentExt','uUlzY','BiTso','none','call','_data','isBattleMember','addOptionsCommand','boxHeight','bitmap','updateActor','parameters','top','sprite','toUpperCase','drawTimeIcon','fontSize','XxmVR','ThinStyle','isCommandEnabled','601hQycOT','create','item','Symbol','isArray','VerticalStyle','drawItem','statusWindowRect','PersonalHandlerJS','numVisibleRows','OSaYo','maxVisibleItems','XOHdo','makeCommandList','filter','Untitled','addSaveCommand','close','fittingHeight','drawTextEx','commandWindowRectBottomStyle','actor','auto','isExpGaugeDrawn','left','MbWab','push','mainAreaBottom','svActorHorzCells','blt','goldWindowRectBottomStyle','drawItemBackground','JSON','selectLast','zuAEX','thinBottom','EVAL','createDummyWindow','contents','Game_Actor_setup','Window_MenuStatus_maxItems','commandNameWindowCenter','ARRAYNUM','max','loadSvActor','pDKlJ','width','_commandNameWindow','bVaQO','drawActorFace','clear','drawActorGraphic','1pdCYoz','addWindow','battleMembers','GzKKQ','setActor','value','textSizeEx','playtimeWindowRect','needsDummyWindow','itemTextAlign','tLESw','SoloQuick','loadPicture','oatyc','Window_MenuStatus_selectLast','EnableJS','HideMainMenuOnly','resetFontSettings','fdBcK','zfiRr','drawPlaytime','activate','Mojuy','commandWindowStyle','DVFPN','reserveCommonEvent','WindowRect','playtimeText','iconHeight','addSymbolBridge','Step1','applyThinnerGoldWindowRect','drawItemStatus','385vcGANj','MainMenuCore','loadBitmap','constructor','qHyLy','FontSize','adjustCommandHeightByVariable','_commandWindow','drawItemActorSprite'];const _0xc43fe=_0x262b;(function(_0x1e0415,_0x120fd5){const _0x1d304e=_0x262b;while(!![]){try{const _0x2e028b=parseInt(_0x1d304e(0x2dc))*-parseInt(_0x1d304e(0x19a))+-parseInt(_0x1d304e(0x2bb))+-parseInt(_0x1d304e(0x31e))+-parseInt(_0x1d304e(0x2ad))+-parseInt(_0x1d304e(0x1bd))*parseInt(_0x1d304e(0x212))+parseInt(_0x1d304e(0x313))*parseInt(_0x1d304e(0x1f1))+parseInt(_0x1d304e(0x2ce))*parseInt(_0x1d304e(0x31a));if(_0x2e028b===_0x120fd5)break;else _0x1e0415['push'](_0x1e0415['shift']());}catch(_0x4f3d38){_0x1e0415['push'](_0x1e0415['shift']());}}}(_0x1185,0x25d65));var label=_0xc43fe(0x213),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0xc43fe(0x1cb)](function(_0x26a38e){const _0x30e956=_0xc43fe;return _0x26a38e[_0x30e956(0x19d)]&&_0x26a38e[_0x30e956(0x320)][_0x30e956(0x2b7)]('['+label+']');})[0x0];VisuMZ[label][_0xc43fe(0x2ae)]=VisuMZ[label][_0xc43fe(0x2ae)]||{},VisuMZ[_0xc43fe(0x2d5)]=function(_0x26d32f,_0x5f495c){const _0x54ab59=_0xc43fe;for(const _0x5822be in _0x5f495c){if(_0x54ab59(0x1ba)===_0x54ab59(0x2bd)){function _0x33d4c9(){const _0x897503=_0x54ab59;_0x410d06[_0x897503(0x1c5)][_0x897503(0x1ad)](this,_0x2e4460);return;}}else{if(_0x5822be[_0x54ab59(0x22b)](/(.*):(.*)/i)){const _0x126e3b=String(RegExp['$1']),_0x4a8704=String(RegExp['$2'])[_0x54ab59(0x1b7)]()['trim']();let _0x33958e,_0x10cc3f,_0x2e1402;switch(_0x4a8704){case _0x54ab59(0x22e):_0x33958e=_0x5f495c[_0x5822be]!==''?Number(_0x5f495c[_0x5822be]):0x0;break;case _0x54ab59(0x1e7):_0x10cc3f=_0x5f495c[_0x5822be]!==''?JSON[_0x54ab59(0x2ba)](_0x5f495c[_0x5822be]):[],_0x33958e=_0x10cc3f[_0x54ab59(0x310)](_0x146b94=>Number(_0x146b94));break;case _0x54ab59(0x1e1):_0x33958e=_0x5f495c[_0x5822be]!==''?eval(_0x5f495c[_0x5822be]):null;break;case _0x54ab59(0x28e):_0x10cc3f=_0x5f495c[_0x5822be]!==''?JSON[_0x54ab59(0x2ba)](_0x5f495c[_0x5822be]):[],_0x33958e=_0x10cc3f[_0x54ab59(0x310)](_0x19b1b6=>eval(_0x19b1b6));break;case _0x54ab59(0x1dd):_0x33958e=_0x5f495c[_0x5822be]!==''?JSON[_0x54ab59(0x2ba)](_0x5f495c[_0x5822be]):'';break;case _0x54ab59(0x28d):_0x10cc3f=_0x5f495c[_0x5822be]!==''?JSON[_0x54ab59(0x2ba)](_0x5f495c[_0x5822be]):[],_0x33958e=_0x10cc3f['map'](_0x118c7d=>JSON[_0x54ab59(0x2ba)](_0x118c7d));break;case _0x54ab59(0x283):_0x33958e=_0x5f495c[_0x5822be]!==''?new Function(JSON[_0x54ab59(0x2ba)](_0x5f495c[_0x5822be])):new Function(_0x54ab59(0x224));break;case _0x54ab59(0x2b4):_0x10cc3f=_0x5f495c[_0x5822be]!==''?JSON[_0x54ab59(0x2ba)](_0x5f495c[_0x5822be]):[],_0x33958e=_0x10cc3f['map'](_0x39e7f0=>new Function(JSON[_0x54ab59(0x2ba)](_0x39e7f0)));break;case _0x54ab59(0x29f):_0x33958e=_0x5f495c[_0x5822be]!==''?String(_0x5f495c[_0x5822be]):'';break;case _0x54ab59(0x19f):_0x10cc3f=_0x5f495c[_0x5822be]!==''?JSON['parse'](_0x5f495c[_0x5822be]):[],_0x33958e=_0x10cc3f['map'](_0x555d07=>String(_0x555d07));break;case _0x54ab59(0x247):_0x2e1402=_0x5f495c[_0x5822be]!==''?JSON[_0x54ab59(0x2ba)](_0x5f495c[_0x5822be]):{},_0x26d32f[_0x126e3b]={},VisuMZ['ConvertParams'](_0x26d32f[_0x126e3b],_0x2e1402);continue;case'ARRAYSTRUCT':_0x10cc3f=_0x5f495c[_0x5822be]!==''?JSON['parse'](_0x5f495c[_0x5822be]):[],_0x33958e=_0x10cc3f[_0x54ab59(0x310)](_0x5bc37a=>VisuMZ[_0x54ab59(0x2d5)]({},JSON[_0x54ab59(0x2ba)](_0x5bc37a)));break;default:continue;}_0x26d32f[_0x126e3b]=_0x33958e;}}}return _0x26d32f;},(_0x25aa01=>{const _0xde6c09=_0xc43fe,_0x2f550c=_0x25aa01['name'];for(const _0x4c7003 of dependencies){if('wVwEs'!==_0xde6c09(0x307)){if(!Imported[_0x4c7003]){alert(_0xde6c09(0x299)[_0xde6c09(0x318)](_0x2f550c,_0x4c7003)),SceneManager['exit']();break;}}else{function _0x1b5890(){this['drawItemStyleIcon'](_0x26b7cc);}}}const _0x460ce9=_0x25aa01['description'];if(_0x460ce9['match'](/\[Version[ ](.*?)\]/i)){if(_0xde6c09(0x24f)!=='JjhAU'){function _0x3969d3(){const _0x413f9e=_0xde6c09;this[_0x413f9e(0x202)](),this['changeTextColor'](_0x5ad6ac[_0x413f9e(0x24a)]());const _0x4c12a3=_0x86ff43['MainMenuCore']['Settings'][_0x413f9e(0x300)][_0x413f9e(0x23b)];this['drawText'](_0x4c12a3,_0xa01e6e['x'],_0x4d5b50['y'],_0x1b2d00[_0x413f9e(0x1eb)],_0x413f9e(0x1d5)),this[_0x413f9e(0x2da)]();}}else{const _0x48bc85=Number(RegExp['$1']);if(_0x48bc85!==VisuMZ[label][_0xde6c09(0x232)]){if(_0xde6c09(0x2fa)===_0xde6c09(0x2fa))alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0xde6c09(0x318)](_0x2f550c,_0x48bc85)),SceneManager['exit']();else{function _0x2b58dd(){const _0x4d7b62=_0xde6c09;_0x412579[_0x4d7b62(0x2e1)]=this['calcWindowHeight'](0x1,![]);}}}}}if(_0x460ce9['match'](/\[Tier[ ](\d+)\]/i)){if(_0xde6c09(0x216)===_0xde6c09(0x1c9)){function _0x4fc296(){const _0x23cf7a=_0xde6c09;_0x46e833[_0x23cf7a(0x213)][_0x23cf7a(0x2ae)][_0x23cf7a(0x29e)]['VerticalStyle'][_0x23cf7a(0x1ad)](this,_0x55f701,_0x4db4e9);}}else{const _0x361fe7=Number(RegExp['$1']);if(_0x361fe7<tier){if(_0xde6c09(0x1d6)==='EBCDY'){function _0x3db9a5(){const _0x50c67d=_0xde6c09,_0x145937=_0x44bc90[_0x50c67d(0x213)][_0x50c67d(0x2ae)][_0x50c67d(0x246)][_0x50c67d(0x2ff)];return this[_0x50c67d(0x30a)]()*_0x145937+0x8;}}else alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'['format'](_0x2f550c,_0x361fe7,tier)),SceneManager[_0xde6c09(0x2c0)]();}else{if(_0xde6c09(0x2af)===_0xde6c09(0x21b)){function _0x4313c8(){const _0x176fad=_0xde6c09;if(this[_0x176fad(0x23d)]===_0xdfe46)this['initMenuImage']();this['_menuImage']=_0x59427d;}}else tier=Math[_0xde6c09(0x1e8)](_0x361fe7,tier);}}}VisuMZ[_0xde6c09(0x2d5)](VisuMZ[label][_0xde6c09(0x2ae)],_0x25aa01[_0xde6c09(0x1b4)]);})(pluginData),PluginManager['registerCommand'](pluginData['name'],_0xc43fe(0x2e2),_0x38be00=>{const _0x4970ba=_0xc43fe;VisuMZ['ConvertParams'](_0x38be00,_0x38be00);const _0x5e735c=_0x38be00[_0x4970ba(0x20f)],_0x9e3bf=_0x38be00[_0x4970ba(0x2f7)];for(let _0x55e794 of _0x5e735c){_0x55e794=parseInt(_0x55e794)||0x0;if(_0x55e794<=0x0)continue;const _0x3404ef=$gameActors['actor'](_0x55e794);if(!_0x3404ef)continue;_0x3404ef[_0x4970ba(0x229)](_0x9e3bf);}}),PluginManager[_0xc43fe(0x2df)](pluginData[_0xc43fe(0x24b)],_0xc43fe(0x2db),_0x2647e4=>{const _0x52e69d=_0xc43fe;VisuMZ[_0x52e69d(0x2d5)](_0x2647e4,_0x2647e4);const _0x442f8b=_0x2647e4[_0x52e69d(0x2ef)]>=_0x2647e4['Step1Start']?_0x2647e4[_0x52e69d(0x290)]:_0x2647e4[_0x52e69d(0x2ef)],_0x47ef04=_0x2647e4[_0x52e69d(0x2ef)]>=_0x2647e4['Step1Start']?_0x2647e4[_0x52e69d(0x2ef)]:_0x2647e4[_0x52e69d(0x290)],_0x3f3eba=Array(_0x47ef04-_0x442f8b+0x1)[_0x52e69d(0x2d2)]()['map']((_0x5804cc,_0x3ee2ae)=>_0x442f8b+_0x3ee2ae),_0x4a02e5=_0x2647e4[_0x52e69d(0x2f7)];for(let _0x2cf00f of _0x3f3eba){if(_0x52e69d(0x22d)===_0x52e69d(0x22d)){_0x2cf00f=parseInt(_0x2cf00f)||0x0;if(_0x2cf00f<=0x0)continue;const _0x4e4235=$gameActors[_0x52e69d(0x1d2)](_0x2cf00f);if(!_0x4e4235)continue;_0x4e4235[_0x52e69d(0x229)](_0x4a02e5);}else{function _0x7d9283(){const _0x5bd3ff=_0x52e69d;_0x5552f4[_0x5bd3ff(0x323)](_0x30aed3[_0x5bd3ff(0x19b)]());}}}}),PluginManager['registerCommand'](pluginData['name'],_0xc43fe(0x267),_0x5c7778=>{const _0x482fab=_0xc43fe;VisuMZ[_0x482fab(0x2d5)](_0x5c7778,_0x5c7778);const _0x164a79=_0x5c7778[_0x482fab(0x20f)];let _0x3ec2ef=[];while(_0x164a79[_0x482fab(0x199)]>0x0){const _0x2d9972=_0x164a79[_0x482fab(0x1a8)]();Array[_0x482fab(0x1c1)](_0x2d9972)?_0x3ec2ef=_0x3ec2ef['concat'](_0x2d9972):_0x3ec2ef[_0x482fab(0x1d7)](_0x2d9972);}const _0x9a07b6=_0x5c7778[_0x482fab(0x2f7)];for(let _0x58e111 of _0x3ec2ef){if(_0x482fab(0x204)===_0x482fab(0x1f4)){function _0xc25b7a(){this['drawItemStatusVerticalStyle'](_0x26ddc9,_0x82d90e);}}else{_0x58e111=parseInt(_0x58e111)||0x0;if(_0x58e111<=0x0)continue;const _0x29eeac=$gameActors[_0x482fab(0x1d2)](_0x58e111);if(!_0x29eeac)continue;_0x29eeac[_0x482fab(0x229)](_0x9a07b6);}}}),VisuMZ[_0xc43fe(0x213)]['Game_Actor_setup']=Game_Actor[_0xc43fe(0x2e6)][_0xc43fe(0x30e)],Game_Actor['prototype'][_0xc43fe(0x30e)]=function(_0x17f12f){const _0x5db83d=_0xc43fe;VisuMZ[_0x5db83d(0x213)]['Game_Actor_setup'][_0x5db83d(0x1ad)](this,_0x17f12f),this[_0x5db83d(0x25d)]();},Game_Actor[_0xc43fe(0x2e6)][_0xc43fe(0x25d)]=function(){const _0xf327af=_0xc43fe;this[_0xf327af(0x23d)]='';if(this[_0xf327af(0x1d2)]()&&this[_0xf327af(0x1d2)]()[_0xf327af(0x2a7)]['match'](/<MENU (?:IMAGE|PORTRAIT):[ ](.*)>/i)){if(_0xf327af(0x2be)===_0xf327af(0x2be))this['_menuImage']=String(RegExp['$1']);else{function _0x8331fa(){const _0x27660b=_0xf327af,_0x4a63dc=_0x5dab5f[_0x27660b(0x213)][_0x27660b(0x2ae)][_0x27660b(0x246)][_0x27660b(0x30c)],_0x1b48f8=_0x1921e6[_0x27660b(0x280)],_0xaf2500=this['calcWindowHeight'](_0x4a63dc,!![]),_0x19c357=0x0,_0x966172=this[_0x27660b(0x248)]();return new _0x536a54(_0x19c357,_0x966172,_0x1b48f8,_0xaf2500);}}}},Game_Actor[_0xc43fe(0x2e6)][_0xc43fe(0x289)]=function(){const _0x1f3726=_0xc43fe;if(this[_0x1f3726(0x23d)]===undefined)this[_0x1f3726(0x25d)]();return this[_0x1f3726(0x23d)];},Game_Actor['prototype'][_0xc43fe(0x229)]=function(_0x465e15){const _0x2add89=_0xc43fe;if(this['_menuImage']===undefined)this[_0x2add89(0x25d)]();this[_0x2add89(0x23d)]=_0x465e15;},Game_Actor[_0xc43fe(0x2e6)][_0xc43fe(0x27c)]=function(){const _0xfb8d72=_0xc43fe;if(this[_0xfb8d72(0x1d2)]()[_0xfb8d72(0x2a7)][_0xfb8d72(0x22b)](/<MENU (?:IMAGE|PORTRAIT) OFFSET X:[ ]([\+\-]\d+)>/i))return Number(RegExp['$1']);else{if(this[_0xfb8d72(0x1d2)]()[_0xfb8d72(0x2a7)][_0xfb8d72(0x22b)](/<MENU (?:IMAGE|PORTRAIT) OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i))return Number(RegExp['$1']);}return 0x0;},Game_Actor['prototype']['getMenuImageOffsetY']=function(){const _0x54e7df=_0xc43fe;if(this[_0x54e7df(0x1d2)]()[_0x54e7df(0x2a7)][_0x54e7df(0x22b)](/<MENU (?:IMAGE|PORTRAIT) OFFSET Y:[ ]([\+\-]\d+)>/i))return Number(RegExp['$1']);else{if(this[_0x54e7df(0x1d2)]()[_0x54e7df(0x2a7)][_0x54e7df(0x22b)](/<MENU (?:IMAGE|PORTRAIT) OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)){if(_0x54e7df(0x255)===_0x54e7df(0x1a0)){function _0x5262f8(){const _0x4aec1a=_0x54e7df;return this['_data'][_0x4aec1a(0x199)];}}else return Number(RegExp['$2']);}}return 0x0;},Scene_MenuBase[_0xc43fe(0x2e6)][_0xc43fe(0x1a2)]=function(){const _0x11270f=_0xc43fe;return VisuMZ['MainMenuCore'][_0x11270f(0x2ae)][_0x11270f(0x2f9)]['ActorBgMenus'][_0x11270f(0x2b7)](this[_0x11270f(0x215)]['name']);},VisuMZ[_0xc43fe(0x213)][_0xc43fe(0x285)]=Scene_MenuBase[_0xc43fe(0x2e6)]['createBackground'],Scene_MenuBase[_0xc43fe(0x2e6)]['createBackground']=function(){const _0x10381b=_0xc43fe;VisuMZ['MainMenuCore'][_0x10381b(0x285)][_0x10381b(0x1ad)](this),this[_0x10381b(0x314)]();},Scene_MenuBase[_0xc43fe(0x2e6)][_0xc43fe(0x314)]=function(){const _0x2d7657=_0xc43fe;this[_0x2d7657(0x21d)]=new Sprite_MenuBackgroundActor(),this[_0x2d7657(0x1a1)](this['_actorMenuBgSprite']);},VisuMZ[_0xc43fe(0x213)]['Scene_MenuBase_updateActor']=Scene_MenuBase['prototype']['updateActor'],Scene_MenuBase['prototype'][_0xc43fe(0x1b3)]=function(){const _0x2e97b2=_0xc43fe;VisuMZ['MainMenuCore'][_0x2e97b2(0x23c)]['call'](this);if(this[_0x2e97b2(0x1a2)]()&&this[_0x2e97b2(0x21d)]){if(_0x2e97b2(0x2e5)===_0x2e97b2(0x27f)){function _0x1917e6(){const _0x207904=_0x2e97b2;if(this[_0x207904(0x227)]()){if(_0x56ce1e['MainMenuCore']['Settings'][_0x207904(0x2f9)][_0x207904(0x2fb)]){const _0x148f24=_0x52a5ea[_0x207904(0x2e1)]-this[_0x207904(0x243)](0x1,![]);_0xe5706b['y']+=_0x148f24;}_0x5d4ee9[_0x207904(0x213)]['Settings'][_0x207904(0x2f9)]['AutoGoldHeight']&&(_0xd2ad31['height']=this['calcWindowHeight'](0x1,![]));}}}else this['_actorMenuBgSprite'][_0x2e97b2(0x1f5)](this[_0x2e97b2(0x275)]);}},VisuMZ[_0xc43fe(0x213)][_0xc43fe(0x260)]=Scene_Menu['prototype'][_0xc43fe(0x1be)],Scene_Menu[_0xc43fe(0x2e6)][_0xc43fe(0x1be)]=function(){const _0x1386c9=_0xc43fe;VisuMZ[_0x1386c9(0x213)][_0x1386c9(0x260)][_0x1386c9(0x1ad)](this),this[_0x1386c9(0x19e)](),this[_0x1386c9(0x2fe)](),this[_0x1386c9(0x1e2)]();},Scene_Menu['prototype'][_0xc43fe(0x2f3)]=function(){const _0x156d44=_0xc43fe,_0x1374ce=this[_0x156d44(0x221)](),_0x59ef47=new Window_MenuCommand(_0x1374ce);_0x59ef47[_0x156d44(0x258)](_0x156d44(0x277),this[_0x156d44(0x2c1)][_0x156d44(0x230)](this)),this['addWindow'](_0x59ef47),this[_0x156d44(0x219)]=_0x59ef47;},VisuMZ[_0xc43fe(0x213)][_0xc43fe(0x2c6)]=Scene_Menu[_0xc43fe(0x2e6)][_0xc43fe(0x221)],Scene_Menu[_0xc43fe(0x2e6)]['commandWindowRect']=function(){const _0x3b56fb=_0xc43fe,_0x49f1c8=this['commandWindowStyle']();if(_0x49f1c8==='top'){if('UwQQL'!==_0x3b56fb(0x241))return this['commandWindowRectTopStyle']();else{function _0x180819(){const _0x163abf=_0x3b56fb;return this[_0x163abf(0x1db)]();}}}else{if(_0x49f1c8===_0x3b56fb(0x2a8)){if('OSaYo'===_0x3b56fb(0x1c7))return this[_0x3b56fb(0x27e)]();else{function _0x411240(){const _0x44dc36=_0x3b56fb;_0x411274=_0x44dc36(0x29d)[_0x44dc36(0x318)](_0x5ae521,_0x361515);}}}else{if(_0x49f1c8===_0x3b56fb(0x223)){if('yolIX'!==_0x3b56fb(0x22f))return this['commandWindowRectBottomStyle']();else{function _0x4ea9ec(){const _0x5388a6=_0x3b56fb,_0xeb2038=_0x56eeeb['shift']();_0xd10624[_0x5388a6(0x1c1)](_0xeb2038)?_0xa87490=_0x1f55b6[_0x5388a6(0x286)](_0xeb2038):_0x17100f['push'](_0xeb2038);}}}else{if(_0x49f1c8==='thinBottom'){if(_0x3b56fb(0x2d1)!==_0x3b56fb(0x2d1)){function _0x4f4ea4(){const _0x1c4928=_0x3b56fb;_0x2f7dd7=_0x304dde[_0x1c4928(0x286)](_0x300558);}}else return this[_0x3b56fb(0x303)]();}else{if(_0x49f1c8===_0x3b56fb(0x287))return this['commandWindowRectMobileStyle']();else{const _0xa6cec1=VisuMZ[_0x3b56fb(0x213)]['Scene_Menu_commandWindowRect'][_0x3b56fb(0x1ad)](this);return this[_0x3b56fb(0x29b)](_0xa6cec1),_0xa6cec1;}}}}}},Scene_Menu[_0xc43fe(0x2e6)][_0xc43fe(0x29b)]=function(_0x14d93e){const _0x585edb=_0xc43fe;this[_0x585edb(0x253)]()&&(_0x14d93e[_0x585edb(0x2e1)]-=this[_0x585edb(0x1f8)]()[_0x585edb(0x2e1)]);if(this[_0x585edb(0x218)]()){if(_0x585edb(0x1df)===_0x585edb(0x249)){function _0x272e3c(){this['smoothSelect'](0x0);}}else _0x14d93e[_0x585edb(0x2e1)]-=this['variableWindowRect']()['height'];}},Scene_Menu[_0xc43fe(0x2e6)][_0xc43fe(0x292)]=function(){const _0x4d1f85=_0xc43fe,_0x4ec5b3=VisuMZ[_0x4d1f85(0x213)][_0x4d1f85(0x2ae)][_0x4d1f85(0x246)]['Rows'],_0xe685ab=Graphics[_0x4d1f85(0x280)],_0x469ce5=this[_0x4d1f85(0x243)](_0x4ec5b3,!![]),_0x477f1b=0x0,_0x491713=this['mainAreaTop']();return new Rectangle(_0x477f1b,_0x491713,_0xe685ab,_0x469ce5);},Scene_Menu['prototype'][_0xc43fe(0x27e)]=function(){const _0x1d506e=_0xc43fe,_0x1ce8fa=VisuMZ[_0x1d506e(0x213)][_0x1d506e(0x2ae)][_0x1d506e(0x246)][_0x1d506e(0x30c)],_0x2d92e2=Graphics[_0x1d506e(0x280)],_0x265fa5=this['calcWindowHeight'](0x1,!![]),_0x22fc96=0x0,_0x14110e=this[_0x1d506e(0x248)]();return new Rectangle(_0x22fc96,_0x14110e,_0x2d92e2,_0x265fa5);},Scene_Menu['prototype'][_0xc43fe(0x1d1)]=function(){const _0x2a381a=_0xc43fe,_0x4d7ff9=VisuMZ[_0x2a381a(0x213)][_0x2a381a(0x2ae)]['CustomCmdWin']['Rows'],_0x264941=Graphics[_0x2a381a(0x280)],_0x437f8e=this[_0x2a381a(0x243)](_0x4d7ff9,!![]),_0x3872f3=0x0,_0x5ac30a=this['mainAreaBottom']()-_0x437f8e;return new Rectangle(_0x3872f3,_0x5ac30a,_0x264941,_0x437f8e);},Scene_Menu[_0xc43fe(0x2e6)][_0xc43fe(0x303)]=function(){const _0x4733e5=_0xc43fe,_0x34e747=VisuMZ[_0x4733e5(0x213)][_0x4733e5(0x2ae)][_0x4733e5(0x246)]['Rows'],_0x5d9325=Graphics['boxWidth'],_0x591413=this[_0x4733e5(0x243)](0x1,!![]),_0x547f7d=0x0,_0x4b3a1f=this[_0x4733e5(0x1d8)]()-_0x591413;return new Rectangle(_0x547f7d,_0x4b3a1f,_0x5d9325,_0x591413);},Scene_Menu['prototype'][_0xc43fe(0x2f6)]=function(){const _0x23157f=_0xc43fe,_0x4457a6=VisuMZ['MainMenuCore']['Settings']['CustomCmdWin'][_0x23157f(0x30c)],_0x58e74c=Graphics[_0x23157f(0x280)],_0x506281=Window_MenuCommand[_0x23157f(0x2e6)][_0x23157f(0x1cf)](_0x4457a6),_0x2213ec=0x0,_0xd8d9a6=Math['round']((Graphics[_0x23157f(0x1b1)]-_0x506281)/0x2);return new Rectangle(_0x2213ec,_0xd8d9a6,_0x58e74c,_0x506281);},Scene_Menu[_0xc43fe(0x2e6)][_0xc43fe(0x208)]=function(){const _0xcb3593=_0xc43fe;return VisuMZ[_0xcb3593(0x213)]['Settings'][_0xcb3593(0x31b)];},Scene_Menu['prototype'][_0xc43fe(0x227)]=function(){const _0xdaccaf=_0xc43fe;if(this[_0xdaccaf(0x208)]()!==_0xdaccaf(0x263))return!![];return VisuMZ[_0xdaccaf(0x213)][_0xdaccaf(0x2ae)][_0xdaccaf(0x2f9)]['ThinGoldWindow'];},Scene_Menu[_0xc43fe(0x2e6)][_0xc43fe(0x245)]=function(){const _0x34b16c=_0xc43fe,_0x2d46da=this[_0x34b16c(0x288)]();this[_0x34b16c(0x226)]=this[_0x34b16c(0x227)]()?new Window_ThinGold(_0x2d46da):new Window_Gold(_0x2d46da),this['addWindow'](this[_0x34b16c(0x226)]);},VisuMZ[_0xc43fe(0x213)][_0xc43fe(0x2f8)]=Scene_Menu[_0xc43fe(0x2e6)][_0xc43fe(0x288)],Scene_Menu[_0xc43fe(0x2e6)]['goldWindowRect']=function(){const _0x307740=_0xc43fe,_0x343237=this[_0x307740(0x208)]();if([_0x307740(0x1b5),_0x307740(0x2a8),_0x307740(0x287)][_0x307740(0x2b7)](_0x343237))return this['goldWindowRectTopStyle']();else{if([_0x307740(0x223),_0x307740(0x1e0)]['includes'](_0x343237))return this['goldWindowRectBottomStyle']();else{const _0x1a8701=VisuMZ[_0x307740(0x213)]['Scene_Menu_goldWindowRect']['call'](this);return this[_0x307740(0x210)](_0x1a8701),_0x1a8701;}}},Scene_Menu['prototype'][_0xc43fe(0x210)]=function(_0x397f22){const _0xd64bbc=_0xc43fe;if(this['thinGoldWindow']()){if(VisuMZ[_0xd64bbc(0x213)]['Settings'][_0xd64bbc(0x2f9)]['AutoGoldY']){if('ZprCb'==='nyMJv'){function _0xcb966e(){return _0x335850;}}else{const _0x3d57cc=_0x397f22['height']-this[_0xd64bbc(0x243)](0x1,![]);_0x397f22['y']+=_0x3d57cc;}}VisuMZ[_0xd64bbc(0x213)][_0xd64bbc(0x2ae)]['General'][_0xd64bbc(0x2a3)]&&(_0x397f22[_0xd64bbc(0x2e1)]=this[_0xd64bbc(0x243)](0x1,![]));}},Scene_Menu[_0xc43fe(0x2e6)]['goldWindowRectTopStyle']=function(){const _0x543686=_0xc43fe,_0x16f2d0=this[_0x543686(0x27b)](),_0x46a18f=this[_0x543686(0x243)](0x1,![]),_0xdbf3f4=Graphics[_0x543686(0x280)]-_0x16f2d0,_0x3beb26=this[_0x543686(0x1d8)]()-_0x46a18f;return new Rectangle(_0xdbf3f4,_0x3beb26,_0x16f2d0,_0x46a18f);},Scene_Menu[_0xc43fe(0x2e6)][_0xc43fe(0x1db)]=function(){const _0x318150=_0xc43fe,_0x18b4ad=this[_0x318150(0x27b)](),_0x5c2c9f=this[_0x318150(0x243)](0x1,![]),_0x112e06=Graphics[_0x318150(0x280)]-_0x18b4ad,_0x3e31df=this[_0x318150(0x248)]();return new Rectangle(_0x112e06,_0x3e31df,_0x18b4ad,_0x5c2c9f);},VisuMZ[_0xc43fe(0x213)][_0xc43fe(0x27a)]=Scene_Menu[_0xc43fe(0x2e6)][_0xc43fe(0x278)],Scene_Menu[_0xc43fe(0x2e6)]['createStatusWindow']=function(){const _0x48a4dd=_0xc43fe;VisuMZ[_0x48a4dd(0x213)][_0x48a4dd(0x27a)][_0x48a4dd(0x1ad)](this),this['adjustStatusWindowMobile']();},Scene_Menu[_0xc43fe(0x2e6)]['adjustStatusWindowMobile']=function(){const _0x4bb532=_0xc43fe;this[_0x4bb532(0x208)]()===_0x4bb532(0x287)&&(this['_statusWindow'][_0x4bb532(0x2ec)]=0x0);},VisuMZ[_0xc43fe(0x213)][_0xc43fe(0x264)]=Scene_Menu[_0xc43fe(0x2e6)][_0xc43fe(0x1c4)],Scene_Menu['prototype'][_0xc43fe(0x1c4)]=function(){const _0x49b421=_0xc43fe,_0x37e284=this[_0x49b421(0x208)]();if(['top','thinTop'][_0x49b421(0x2b7)](_0x37e284)){if(_0x49b421(0x1fe)!==_0x49b421(0x2e4))return this[_0x49b421(0x237)]();else{function _0x1f8a8e(){const _0x58110e=_0x49b421;return this[_0x58110e(0x303)]();}}}else{if([_0x49b421(0x223),'thinBottom'][_0x49b421(0x2b7)](_0x37e284)){if(_0x49b421(0x1fb)!==_0x49b421(0x1fb)){function _0x17d528(){const _0xf72414=_0x49b421;return _0xa5a549[_0xf72414(0x213)][_0xf72414(0x2ae)][_0xf72414(0x271)][_0xf72414(0x252)];}}else return this[_0x49b421(0x28f)]();}else{if(_0x37e284===_0x49b421(0x287))return this[_0x49b421(0x23f)]();else{if(_0x49b421(0x273)!==_0x49b421(0x2d7))return VisuMZ[_0x49b421(0x213)]['Scene_Menu_statusWindowRect'][_0x49b421(0x1ad)](this);else{function _0x17db67(){const _0x489539=_0x49b421;_0x20439e[_0x489539(0x1d7)](_0xcb973c);}}}}}},Scene_Menu[_0xc43fe(0x2e6)]['statusWindowRectTopStyle']=function(){const _0x325526=_0xc43fe,_0x2ee67d=Graphics['boxWidth'],_0x3a9f07=this[_0x325526(0x311)]()-this[_0x325526(0x219)][_0x325526(0x2e1)]-this['_goldWindow'][_0x325526(0x2e1)],_0xb494b2=0x0,_0x1522af=this[_0x325526(0x219)]['y']+this[_0x325526(0x219)]['height'];return new Rectangle(_0xb494b2,_0x1522af,_0x2ee67d,_0x3a9f07);},Scene_Menu[_0xc43fe(0x2e6)][_0xc43fe(0x28f)]=function(){const _0x7c5ef9=_0xc43fe,_0x58beea=Graphics[_0x7c5ef9(0x280)],_0x22b45f=this['mainAreaHeight']()-this[_0x7c5ef9(0x219)][_0x7c5ef9(0x2e1)]-this[_0x7c5ef9(0x226)]['height'],_0x13614c=0x0,_0x3ed664=this[_0x7c5ef9(0x226)]['y']+this['_goldWindow']['height'];return new Rectangle(_0x13614c,_0x3ed664,_0x58beea,_0x22b45f);},Scene_Menu[_0xc43fe(0x2e6)][_0xc43fe(0x23f)]=function(){const _0x1fa4a5=_0xc43fe,_0x10ec6e=Graphics[_0x1fa4a5(0x280)],_0x30b7ce=this['mainAreaHeight']()-this[_0x1fa4a5(0x226)][_0x1fa4a5(0x2e1)],_0x26c153=0x0,_0x244750=this['mainAreaBottom']()-this[_0x1fa4a5(0x226)]['height']-_0x30b7ce;return new Rectangle(_0x26c153,_0x244750,_0x10ec6e,_0x30b7ce);},Scene_Menu[_0xc43fe(0x2e6)][_0xc43fe(0x19e)]=function(){const _0x147ead=_0xc43fe;if(!this[_0x147ead(0x2a6)]())return new Rectangle(0x0,0x0,0x0,0x0);const _0x47e8fb=this[_0x147ead(0x1f8)]();this['_playtimeWindow']=new Window_Playtime(_0x47e8fb),this[_0x147ead(0x324)][_0x147ead(0x2fd)](VisuMZ['MainMenuCore'][_0x147ead(0x2ae)][_0x147ead(0x300)][_0x147ead(0x2e7)]),this['addWindow'](this['_playtimeWindow']);},Scene_Menu[_0xc43fe(0x2e6)][_0xc43fe(0x2a6)]=function(){const _0x2002f3=_0xc43fe;return VisuMZ['MainMenuCore'][_0x2002f3(0x2ae)][_0x2002f3(0x300)][_0x2002f3(0x252)];},Scene_Menu[_0xc43fe(0x2e6)][_0xc43fe(0x253)]=function(){const _0x21fe3f=_0xc43fe;return this['canCreatePlaytimeWindow']()&&VisuMZ[_0x21fe3f(0x213)]['Settings'][_0x21fe3f(0x300)][_0x21fe3f(0x309)];},Scene_Menu[_0xc43fe(0x2e6)][_0xc43fe(0x1f8)]=function(){const _0x13c510=_0xc43fe,_0x4648ce=this['commandWindowStyle']();if([_0x13c510(0x1b5),_0x13c510(0x2a8),_0x13c510(0x287)][_0x13c510(0x2b7)](_0x4648ce)){if(_0x13c510(0x2d8)===_0x13c510(0x207)){function _0x10bec1(){const _0x304e1b=_0x13c510;_0x410ece=_0xd97a9b[_0x304e1b(0x1e8)](_0x470bb7,_0x34474e);}}else return this['playtimeWindowRectTopStyle']();}else return[_0x13c510(0x223),_0x13c510(0x1e0)][_0x13c510(0x2b7)](_0x4648ce)?this[_0x13c510(0x1a5)]():VisuMZ[_0x13c510(0x213)]['Settings'][_0x13c510(0x300)][_0x13c510(0x20b)][_0x13c510(0x1ad)](this);},Scene_Menu[_0xc43fe(0x2e6)][_0xc43fe(0x2f1)]=function(){const _0x4bc9b1=_0xc43fe,_0x72e184=this[_0x4bc9b1(0x27b)](),_0x54d53b=this[_0x4bc9b1(0x243)](0x1,![]),_0x35904d=0x0,_0x137602=this[_0x4bc9b1(0x1d8)]()-_0x54d53b;return new Rectangle(_0x35904d,_0x137602,_0x72e184,_0x54d53b);},Scene_Menu[_0xc43fe(0x2e6)][_0xc43fe(0x1a5)]=function(){const _0x3b4dae=_0xc43fe,_0x1b88c7=this[_0x3b4dae(0x27b)](),_0x18d4f5=this[_0x3b4dae(0x243)](0x1,![]),_0x56e93f=0x0,_0x1c2cff=this[_0x3b4dae(0x248)]();return new Rectangle(_0x56e93f,_0x1c2cff,_0x1b88c7,_0x18d4f5);},Scene_Menu[_0xc43fe(0x2e6)][_0xc43fe(0x2fe)]=function(){const _0x69e25e=_0xc43fe;if(!this[_0x69e25e(0x21f)]())return new Rectangle(0x0,0x0,0x0,0x0);const _0xe6dd8b=this[_0x69e25e(0x31f)]();this['_variableWindow']=new Window_MenuVariables(_0xe6dd8b),this[_0x69e25e(0x26c)][_0x69e25e(0x2fd)](VisuMZ['MainMenuCore'][_0x69e25e(0x2ae)]['Variable'][_0x69e25e(0x2e7)]),this['addWindow'](this['_variableWindow']);},Scene_Menu['prototype'][_0xc43fe(0x21f)]=function(){const _0x2a9265=_0xc43fe;return VisuMZ[_0x2a9265(0x213)][_0x2a9265(0x2ae)][_0x2a9265(0x271)]['Enable'];},Scene_Menu['prototype']['adjustCommandHeightByVariable']=function(){const _0x4d4911=_0xc43fe;return this[_0x4d4911(0x21f)]()&&VisuMZ['MainMenuCore'][_0x4d4911(0x2ae)]['Variable'][_0x4d4911(0x309)];},Scene_Menu[_0xc43fe(0x2e6)]['variableWindowRect']=function(){const _0x3e3820=_0xc43fe,_0x29b2c5=this[_0x3e3820(0x208)]();if([_0x3e3820(0x1b5),'thinTop',_0x3e3820(0x287)][_0x3e3820(0x2b7)](_0x29b2c5))return this['variableWindowRectTopStyle']();else return[_0x3e3820(0x223),_0x3e3820(0x1e0)][_0x3e3820(0x2b7)](_0x29b2c5)?this['variableWindowRectBottomStyle']():VisuMZ['MainMenuCore']['Settings'][_0x3e3820(0x271)]['WindowRect'][_0x3e3820(0x1ad)](this);},Scene_Menu[_0xc43fe(0x2e6)][_0xc43fe(0x19c)]=function(){const _0xc9c1ec=_0xc43fe,_0x18e409=Graphics['boxWidth']-this['_goldWindow'][_0xc9c1ec(0x1eb)]-(this[_0xc9c1ec(0x324)]?this[_0xc9c1ec(0x324)][_0xc9c1ec(0x1eb)]:0x0),_0x44976e=this[_0xc9c1ec(0x243)](0x1,![]),_0x4df159=this[_0xc9c1ec(0x226)]['x']-_0x18e409,_0x4900d1=this['mainAreaBottom']()-_0x44976e;return new Rectangle(_0x4df159,_0x4900d1,_0x18e409,_0x44976e);},Scene_Menu[_0xc43fe(0x2e6)]['variableWindowRectBottomStyle']=function(){const _0x5573b4=_0xc43fe,_0x30a4d6=Graphics['boxWidth']-this[_0x5573b4(0x226)][_0x5573b4(0x1eb)]-(this[_0x5573b4(0x324)]?this[_0x5573b4(0x324)][_0x5573b4(0x1eb)]:0x0),_0x404506=this[_0x5573b4(0x243)](0x1,![]),_0x4ea4a0=this['_goldWindow']['x']-_0x30a4d6,_0x40a2b2=this[_0x5573b4(0x248)]();return new Rectangle(_0x4ea4a0,_0x40a2b2,_0x30a4d6,_0x404506);},Scene_Menu[_0xc43fe(0x2e6)][_0xc43fe(0x1e2)]=function(){const _0x33bb84=_0xc43fe;if(!this['needsDummyWindow']())return;const _0x2a10aa=this[_0x33bb84(0x31f)]();this['_dummyWindow']=new Window_Base(_0x2a10aa),this[_0x33bb84(0x261)][_0x33bb84(0x2fd)](VisuMZ[_0x33bb84(0x213)]['Settings'][_0x33bb84(0x271)][_0x33bb84(0x2e7)]),this[_0x33bb84(0x1f2)](this[_0x33bb84(0x261)]);},Scene_Menu[_0xc43fe(0x2e6)][_0xc43fe(0x1f9)]=function(){const _0x4a6252=_0xc43fe;if([_0x4a6252(0x263),_0x4a6252(0x287)][_0x4a6252(0x2b7)](this['commandWindowStyle']()))return![];if(this[_0x4a6252(0x26c)])return![];return!![];},VisuMZ[_0xc43fe(0x213)][_0xc43fe(0x2a2)]=Scene_Menu[_0xc43fe(0x2e6)][_0xc43fe(0x25c)],Scene_Menu['prototype'][_0xc43fe(0x25c)]=function(){const _0x4a8869=_0xc43fe;if(this['isSoloQuickMode']()&&this[_0x4a8869(0x301)])$gameParty[_0x4a8869(0x27d)]($gameParty[_0x4a8869(0x2f0)]()[0x0]),this[_0x4a8869(0x308)]();else{if(this['commandWindowStyle']()===_0x4a8869(0x287))this[_0x4a8869(0x301)][_0x4a8869(0x302)]();VisuMZ['MainMenuCore'][_0x4a8869(0x2a2)][_0x4a8869(0x1ad)](this);}},Scene_Menu[_0xc43fe(0x2e6)][_0xc43fe(0x321)]=function(){const _0x124b75=_0xc43fe;return VisuMZ[_0x124b75(0x213)][_0x124b75(0x2ae)][_0x124b75(0x2f9)][_0x124b75(0x1fc)]&&$gameParty[_0x124b75(0x2f0)]()[_0x124b75(0x199)]<=0x1;},Scene_Menu[_0xc43fe(0x2e6)][_0xc43fe(0x308)]=function(){const _0x502ea8=_0xc43fe,_0x1d4d84=this[_0x502ea8(0x219)]['currentSymbol'](),_0x4e0cd8=this[_0x502ea8(0x219)][_0x502ea8(0x1a9)]();for(const _0x56bf0e of Window_MenuCommand[_0x502ea8(0x25b)]){if(_0x502ea8(0x2ab)!==_0x502ea8(0x2ab)){function _0x3fe2d9(){const _0x4de78a=_0x502ea8;_0x2cccf9=_0x6bcf9c||_0x706029[_0x4de78a(0x262)],_0x2f46c4=_0x72034e||_0x4f7dfb[_0x4de78a(0x274)];const _0x137102=_0x38944f[_0x4de78a(0x1e9)](_0x2c5d11[_0x4de78a(0x2c3)]()),_0x378684=_0x137102[_0x4de78a(0x1eb)]/_0x57998d[_0x4de78a(0x1d9)],_0x39cae8=_0x137102[_0x4de78a(0x2e1)]/_0x214590[_0x4de78a(0x282)],_0x260be6=_0x124dea,_0x15643d=_0x3166a6-0x2,_0x35f6b7=_0x4798f1+_0x4d192f[_0x4de78a(0x236)](_0x260be6/0x2),_0x49eaad=_0x249863+_0x23876d['ceil']((_0x45d29e+_0x39cae8)/0x2);this[_0x4de78a(0x215)]===_0xaf1f53&&this['changePaintOpacity'](_0x51440d[_0x4de78a(0x1af)]());const _0x48932c=_0x5f5da3[_0x4de78a(0x29c)](_0x14743a,_0x378684),_0x27637d=_0x14c8eb[_0x4de78a(0x29c)](_0x4573a9,_0x39cae8),_0x2a4b39=_0x3c7b60['floor'](_0x592f29+_0x56518d[_0x4de78a(0x1e8)](_0x448634-_0x378684,0x0)/0x2),_0x1e32ed=_0xa88218['floor'](_0x34965b+_0x3d2be1['max'](_0x44bcc5-_0x39cae8,0x0)/0x2),_0x3f71df=0x0,_0xa386a=0x0;this[_0x4de78a(0x1e3)][_0x4de78a(0x1da)](_0x137102,_0x3f71df,_0xa386a,_0x48932c,_0x27637d,_0x2a4b39,_0x1e32ed),this[_0x4de78a(0x294)](!![]);}}else{if(_0x56bf0e[_0x502ea8(0x1c0)]===_0x1d4d84){if(_0x502ea8(0x2c2)===_0x502ea8(0x2ac)){function _0x397843(){const _0x4c5e57=_0x502ea8;if(_0x105001[_0x4c5e57(0x289)]()!==''){const _0x5672ea=_0xdb2475['loadPicture'](_0x14a585[_0x4c5e57(0x289)]());_0x5672ea['addLoadListener'](this[_0x4c5e57(0x2aa)][_0x4c5e57(0x230)](this,_0x2eb4d8,_0x166691));}else this[_0x4c5e57(0x2b3)](_0x36affa,_0x3fee86);}}else{_0x56bf0e[_0x502ea8(0x1c5)][_0x502ea8(0x1ad)](this,_0x4e0cd8);return;}}}}},VisuMZ['MainMenuCore'][_0xc43fe(0x315)]=Scene_Menu[_0xc43fe(0x2e6)]['onPersonalCancel'],Scene_Menu['prototype'][_0xc43fe(0x2b5)]=function(){const _0x24728d=_0xc43fe;VisuMZ['MainMenuCore']['Scene_Menu_onPersonalCancel'][_0x24728d(0x1ad)](this);if(this[_0x24728d(0x208)]()===_0x24728d(0x287))this['_statusWindow'][_0x24728d(0x1ce)]();},Scene_Menu[_0xc43fe(0x2e6)]['commandCommonEvent']=function(){const _0x311598=_0xc43fe,_0x3ad9f0=parseInt(this[_0x311598(0x219)][_0x311598(0x1a9)]());if(_0x3ad9f0)$gameTemp[_0x311598(0x20a)](_0x3ad9f0),this[_0x311598(0x2c1)]();else{if(_0x311598(0x1aa)==='jGVAn'){function _0x571d50(){const _0x387d5a=_0x311598,_0x451f6a=_0x181321[_0x387d5a(0x280)]-this[_0x387d5a(0x226)][_0x387d5a(0x1eb)]-(this['_playtimeWindow']?this['_playtimeWindow']['width']:0x0),_0x492ef5=this['calcWindowHeight'](0x1,![]),_0x5a0f11=this[_0x387d5a(0x226)]['x']-_0x451f6a,_0xef748=this[_0x387d5a(0x1d8)]()-_0x492ef5;return new _0x46c858(_0x5a0f11,_0xef748,_0x451f6a,_0x492ef5);}}else this[_0x311598(0x219)][_0x311598(0x206)]();}},VisuMZ[_0xc43fe(0x213)][_0xc43fe(0x312)]=Scene_Menu[_0xc43fe(0x2e6)][_0xc43fe(0x31c)],Scene_Menu[_0xc43fe(0x2e6)][_0xc43fe(0x31c)]=function(){const _0x38f4fe=_0xc43fe;VisuMZ['MainMenuCore'][_0x38f4fe(0x312)][_0x38f4fe(0x1ad)](this);if(this['commandWindowStyle']()==='mobile')this[_0x38f4fe(0x301)][_0x38f4fe(0x302)]();},VisuMZ[_0xc43fe(0x213)][_0xc43fe(0x2cf)]=Scene_Menu['prototype'][_0xc43fe(0x2c9)],Scene_Menu['prototype'][_0xc43fe(0x2c9)]=function(){const _0x220c26=_0xc43fe;VisuMZ[_0x220c26(0x213)][_0x220c26(0x2cf)]['call'](this);if(this[_0x220c26(0x208)]()===_0x220c26(0x287))this[_0x220c26(0x301)][_0x220c26(0x1ce)]();},Scene_Menu[_0xc43fe(0x2e6)][_0xc43fe(0x279)]=function(){const _0x1622ac=_0xc43fe;SceneManager[_0x1622ac(0x1d7)](Scene_Load);};function Sprite_MenuBackgroundActor(){const _0x40a111=_0xc43fe;this[_0x40a111(0x322)](...arguments);}Sprite_MenuBackgroundActor[_0xc43fe(0x2e6)]=Object[_0xc43fe(0x1be)](Sprite['prototype']),Sprite_MenuBackgroundActor[_0xc43fe(0x2e6)][_0xc43fe(0x215)]=Sprite_MenuBackgroundActor,Sprite_MenuBackgroundActor[_0xc43fe(0x2e6)][_0xc43fe(0x322)]=function(){const _0x374e63=_0xc43fe;this[_0x374e63(0x275)]=null,this['_bitmapReady']=![],Sprite['prototype'][_0x374e63(0x322)][_0x374e63(0x1ad)](this),this['x']=Graphics[_0x374e63(0x1eb)];},Sprite_MenuBackgroundActor['prototype']['setActor']=function(_0x539854){const _0x9044e0=_0xc43fe;this[_0x9044e0(0x275)]!==_0x539854&&(this[_0x9044e0(0x275)]=_0x539854,this[_0x9044e0(0x214)]());},Sprite_MenuBackgroundActor[_0xc43fe(0x2e6)]['loadBitmap']=function(){const _0x740cc4=_0xc43fe;this[_0x740cc4(0x268)]=![];if(this[_0x740cc4(0x275)]){if(_0x740cc4(0x1ab)!==_0x740cc4(0x1ab)){function _0x195369(){const _0x336ff0=_0x740cc4;this[_0x336ff0(0x1d0)](_0x182a54,_0x4e660f['x'],_0x55ba5d['y'],_0x1b317b);}}else this[_0x740cc4(0x1b2)]=ImageManager[_0x740cc4(0x1fd)](this[_0x740cc4(0x275)][_0x740cc4(0x289)]()),this[_0x740cc4(0x1b2)][_0x740cc4(0x2d9)](this[_0x740cc4(0x233)][_0x740cc4(0x230)](this));}else this[_0x740cc4(0x1b2)]=new Bitmap(0x1,0x1);},Sprite_MenuBackgroundActor['prototype'][_0xc43fe(0x233)]=function(){const _0x221d9e=_0xc43fe;this['_bitmapReady']=!![],VisuMZ[_0x221d9e(0x213)][_0x221d9e(0x2ae)][_0x221d9e(0x2f9)]['ActorBgMenuJS'][_0x221d9e(0x1ad)](this);},Sprite_MenuBackgroundActor['prototype']['update']=function(){const _0x5b51cd=_0xc43fe;Sprite[_0x5b51cd(0x2e6)][_0x5b51cd(0x31d)][_0x5b51cd(0x1ad)](this);if(this[_0x5b51cd(0x268)]){if('TGzVh'!=='TGzVh'){function _0x138ac9(){const _0x4a7c6e=_0x5b51cd;return _0x32cfb7[_0x4a7c6e(0x19d)]&&_0x20ef2d['description']['includes']('['+_0x30cfc5+']');}}else this['updateOpacity'](),this[_0x5b51cd(0x2cc)](),this[_0x5b51cd(0x2d0)]();}},Sprite_MenuBackgroundActor[_0xc43fe(0x2e6)][_0xc43fe(0x2d6)]=function(){const _0x2d00d9=_0xc43fe;if(this['_duration']>0x0){if(_0x2d00d9(0x2b8)!==_0x2d00d9(0x2b8)){function _0x517640(){const _0x4fc3ec=_0x2d00d9,_0x2435f2=this['mainCommandWidth'](),_0x5eb50d=this['calcWindowHeight'](0x1,![]),_0xf2db8c=0x0,_0x32f2a5=this[_0x4fc3ec(0x1d8)]()-_0x5eb50d;return new _0x12d1c6(_0xf2db8c,_0x32f2a5,_0x2435f2,_0x5eb50d);}}else{const _0x2ef305=this[_0x2d00d9(0x26b)];this['opacity']=(this[_0x2d00d9(0x21c)]*(_0x2ef305-0x1)+0xff)/_0x2ef305;}}},Sprite_MenuBackgroundActor[_0xc43fe(0x2e6)]['updatePosition']=function(){const _0x58606d=_0xc43fe;if(this[_0x58606d(0x26b)]>0x0){if(_0x58606d(0x1ea)==='pDKlJ'){const _0x1ea63c=this[_0x58606d(0x26b)];this['x']=(this['x']*(_0x1ea63c-0x1)+this['_targetX'])/_0x1ea63c,this['y']=(this['y']*(_0x1ea63c-0x1)+this['_targetY'])/_0x1ea63c;}else{function _0x443efd(){const _0x19a725=_0x58606d;return _0x39aa2f[_0x19a725(0x213)][_0x19a725(0x2ae)][_0x19a725(0x246)][_0x19a725(0x297)];}}}},Sprite_MenuBackgroundActor[_0xc43fe(0x2e6)][_0xc43fe(0x2d0)]=function(){const _0x146e12=_0xc43fe;if(this[_0x146e12(0x26b)]>0x0)this[_0x146e12(0x26b)]--;},ImageManager['svActorHorzCells']=ImageManager[_0xc43fe(0x1d9)]||0x9,ImageManager['svActorVertCells']=ImageManager['svActorVertCells']||0x6,Window_Base[_0xc43fe(0x2e6)][_0xc43fe(0x2a9)]=function(_0x2b2c4d,_0x41f290,_0x226517){const _0x2f0434=_0xc43fe,_0x1e52d6=ImageManager[_0x2f0434(0x1e9)](_0x2b2c4d),_0x435315=_0x1e52d6[_0x2f0434(0x1eb)]/ImageManager['svActorHorzCells'],_0x33ded7=_0x1e52d6[_0x2f0434(0x2e1)]/ImageManager[_0x2f0434(0x282)],_0x11b5b8=0x0,_0x4d35ab=0x0;this[_0x2f0434(0x1e3)][_0x2f0434(0x1da)](_0x1e52d6,_0x11b5b8,_0x4d35ab,_0x435315,_0x33ded7,_0x41f290-_0x435315/0x2,_0x226517-_0x33ded7);},Window_MenuCommand[_0xc43fe(0x25b)]=VisuMZ['MainMenuCore'][_0xc43fe(0x2ae)][_0xc43fe(0x25e)],VisuMZ[_0xc43fe(0x213)][_0xc43fe(0x2d4)]=Window_MenuCommand[_0xc43fe(0x2e6)][_0xc43fe(0x322)],Window_MenuCommand['prototype'][_0xc43fe(0x322)]=function(_0x85fccd){const _0x5d624c=_0xc43fe;VisuMZ['MainMenuCore'][_0x5d624c(0x2d4)][_0x5d624c(0x1ad)](this,_0x85fccd),this[_0x5d624c(0x2de)](_0x85fccd);},Window_MenuCommand[_0xc43fe(0x2e6)][_0xc43fe(0x2de)]=function(_0x11cebb){const _0x2e9866=_0xc43fe,_0x272f0b=new Rectangle(0x0,0x0,_0x11cebb[_0x2e9866(0x1eb)],_0x11cebb[_0x2e9866(0x2e1)]);this[_0x2e9866(0x1ec)]=new Window_Base(_0x272f0b),this[_0x2e9866(0x1ec)][_0x2e9866(0x21c)]=0x0,this[_0x2e9866(0x1a1)](this[_0x2e9866(0x1ec)]),this[_0x2e9866(0x2b0)]();},Window_MenuCommand[_0xc43fe(0x2e6)][_0xc43fe(0x250)]=function(){const _0xb4d51e=_0xc43fe;Window_HorzCommand[_0xb4d51e(0x2e6)]['callUpdateHelp'][_0xb4d51e(0x1ad)](this);if(this['_commandNameWindow'])this[_0xb4d51e(0x2b0)]();},Window_MenuCommand[_0xc43fe(0x2e6)][_0xc43fe(0x2b0)]=function(){const _0x1e6bde=_0xc43fe,_0x56a94f=this['_commandNameWindow'];_0x56a94f[_0x1e6bde(0x1e3)][_0x1e6bde(0x1ef)]();const _0x5b04b2=this['commandStyleCheck'](this['index']());if(_0x5b04b2===_0x1e6bde(0x30b)){const _0x11c50e=this[_0x1e6bde(0x23a)](this['index']());let _0x216e2f=this[_0x1e6bde(0x298)](this['index']());_0x216e2f=_0x216e2f[_0x1e6bde(0x281)](/\\I\[(\d+)\]/gi,''),_0x56a94f[_0x1e6bde(0x202)](),this[_0x1e6bde(0x2cb)](_0x216e2f,_0x11c50e),this[_0x1e6bde(0x222)](_0x216e2f,_0x11c50e),this[_0x1e6bde(0x1e6)](_0x216e2f,_0x11c50e);}},Window_MenuCommand[_0xc43fe(0x2e6)][_0xc43fe(0x2cb)]=function(_0x133f08,_0x594b4d){},Window_MenuCommand['prototype'][_0xc43fe(0x222)]=function(_0x5c1aa8,_0x4ed07e){const _0x858a94=_0xc43fe,_0x27ec5b=this[_0x858a94(0x1ec)];_0x27ec5b[_0x858a94(0x29a)](_0x5c1aa8,0x0,_0x4ed07e['y'],_0x27ec5b['innerWidth'],_0x858a94(0x2dd));},Window_MenuCommand[_0xc43fe(0x2e6)][_0xc43fe(0x1e6)]=function(_0x1a60a4,_0x250bf6){const _0x396752=_0xc43fe,_0x3b5c65=this[_0x396752(0x1ec)],_0x189f54=$gameSystem['windowPadding'](),_0x2b207b=_0x250bf6['x']+Math[_0x396752(0x236)](_0x250bf6[_0x396752(0x1eb)]/0x2)+_0x189f54;_0x3b5c65['x']=_0x3b5c65['width']/-0x2+_0x2b207b,_0x3b5c65['y']=Math[_0x396752(0x236)](_0x250bf6[_0x396752(0x2e1)]/0x4);},Window_MenuCommand[_0xc43fe(0x2e6)][_0xc43fe(0x1a3)]=function(){const _0x559edd=_0xc43fe,_0x4e10a5=SceneManager[_0x559edd(0x240)][_0x559edd(0x208)]();if(_0x4e10a5===_0x559edd(0x287)){const _0x4849ff=VisuMZ[_0x559edd(0x213)]['Settings']['CustomCmdWin'][_0x559edd(0x2ff)];return this[_0x559edd(0x30a)]()*_0x4849ff+0x8;}else{if(_0x559edd(0x2c4)===_0x559edd(0x2c4))return Window_Command[_0x559edd(0x2e6)][_0x559edd(0x1a3)]['call'](this);else{function _0x31caab(){const _0x1f3ebb=_0x559edd;if(!this[_0x1f3ebb(0x1f9)]())return;const _0x4e3385=this[_0x1f3ebb(0x31f)]();this[_0x1f3ebb(0x261)]=new _0x34f7bf(_0x4e3385),this[_0x1f3ebb(0x261)][_0x1f3ebb(0x2fd)](_0x2b81ea[_0x1f3ebb(0x213)][_0x1f3ebb(0x2ae)][_0x1f3ebb(0x271)][_0x1f3ebb(0x2e7)]),this[_0x1f3ebb(0x1f2)](this[_0x1f3ebb(0x261)]);}}}},Window_MenuCommand[_0xc43fe(0x2e6)][_0xc43fe(0x1ca)]=function(){const _0x55904d=_0xc43fe;this[_0x55904d(0x293)]();},Window_MenuCommand[_0xc43fe(0x2e6)][_0xc43fe(0x293)]=function(){const _0x445cbe=_0xc43fe;for(const _0x55d75e of Window_MenuCommand[_0x445cbe(0x25b)]){const _0x4cc16e=_0x55d75e['Symbol'];if(_0x55d75e['ShowJS']['call'](this)){if(_0x445cbe(0x1ed)!==_0x445cbe(0x266)){let _0x501baa=_0x55d75e[_0x445cbe(0x2b9)];if(['',_0x445cbe(0x1cc)]['includes'](_0x501baa))_0x501baa=_0x55d75e[_0x445cbe(0x254)][_0x445cbe(0x1ad)](this);const _0x1739e2=_0x55d75e[_0x445cbe(0x2b2)];if(_0x1739e2>0x0&&this[_0x445cbe(0x2a5)]()!==_0x445cbe(0x21e)){if(_0x445cbe(0x26e)===_0x445cbe(0x26e))_0x501baa=_0x445cbe(0x29d)['format'](_0x1739e2,_0x501baa);else{function _0x3d4ecb(){const _0x37b8a7=_0x445cbe;_0x407607[_0x37b8a7(0x213)][_0x37b8a7(0x260)]['call'](this),this[_0x37b8a7(0x19e)](),this['createVariableWindow'](),this[_0x37b8a7(0x1e2)]();}}}const _0x4a9449=_0x55d75e[_0x445cbe(0x200)][_0x445cbe(0x1ad)](this),_0x10a475=_0x55d75e[_0x445cbe(0x296)][_0x445cbe(0x1ad)](this);this['addCommand'](_0x501baa,_0x4cc16e,_0x4a9449,_0x10a475),this[_0x445cbe(0x258)](_0x4cc16e,_0x55d75e['CallHandlerJS'][_0x445cbe(0x230)](this,_0x10a475));}else{function _0x5a0727(){return _0x334dec(_0x27ea31['$1']);}}}this[_0x445cbe(0x20e)](_0x4cc16e);}},Window_MenuCommand[_0xc43fe(0x2e6)]['addSymbolBridge']=function(_0x126891){const _0x39bd1f=_0xc43fe;switch(_0x126891){case _0x39bd1f(0x1bf):this[_0x39bd1f(0x25f)]();break;case _0x39bd1f(0x251):this[_0x39bd1f(0x325)](),this['addOriginalCommands']();break;case _0x39bd1f(0x228):this[_0x39bd1f(0x1b0)]();break;case _0x39bd1f(0x231):this[_0x39bd1f(0x1cd)]();break;case'gameEnd':this['addGameEndCommand']();break;}},Window_MenuCommand[_0xc43fe(0x2e6)][_0xc43fe(0x25f)]=function(){},Window_MenuCommand['prototype'][_0xc43fe(0x325)]=function(){},Window_MenuCommand[_0xc43fe(0x2e6)]['addOriginalCommands']=function(){},Window_MenuCommand['prototype'][_0xc43fe(0x1b0)]=function(){},Window_MenuCommand[_0xc43fe(0x2e6)][_0xc43fe(0x1cd)]=function(){},Window_MenuCommand[_0xc43fe(0x2e6)][_0xc43fe(0x24e)]=function(){},Window_MenuCommand[_0xc43fe(0x2e6)][_0xc43fe(0x30d)]=function(){const _0x5dc088=_0xc43fe,_0x2a0c7c=SceneManager[_0x5dc088(0x240)][_0x5dc088(0x208)]();if(['thinTop','thinBottom'][_0x5dc088(0x2b7)](_0x2a0c7c)){if(_0x5dc088(0x2ea)==='ySTxm'){function _0x52a13e(){const _0x113760=_0x5dc088;_0x542915[_0x113760(0x213)][_0x113760(0x1e4)][_0x113760(0x1ad)](this,_0x234247),this['initMenuImage']();}}else return this['_list']?this[_0x5dc088(0x2ee)]():0x4;}else{if(_0x2a0c7c!==_0x5dc088(0x263)){if('IfZlY'!==_0x5dc088(0x2f4))return VisuMZ[_0x5dc088(0x213)]['Settings'][_0x5dc088(0x246)]['Cols'];else{function _0x5715e4(){return this['playtimeWindowRectBottomStyle']();}}}else return Window_Command[_0x5dc088(0x2e6)][_0x5dc088(0x30d)][_0x5dc088(0x1ad)](this);}},Window_MenuCommand['prototype'][_0xc43fe(0x1fa)]=function(){const _0x3da53d=_0xc43fe;return VisuMZ[_0x3da53d(0x213)][_0x3da53d(0x2ae)][_0x3da53d(0x246)]['TextAlign'];},Window_MenuCommand[_0xc43fe(0x2e6)][_0xc43fe(0x1c3)]=function(_0x3911dd){const _0x3a72e9=_0xc43fe,_0x462fdf=this[_0x3a72e9(0x2ed)](_0x3911dd);if(_0x462fdf===_0x3a72e9(0x1a4)){if('DVFPN'!==_0x3a72e9(0x209)){function _0x12823c(){const _0x2c9d94=_0x3a72e9;_0x2a2edf[_0x2c9d94(0x2e6)][_0x2c9d94(0x31d)][_0x2c9d94(0x1ad)](this),this['_bitmapReady']&&(this['updateOpacity'](),this['updatePosition'](),this[_0x2c9d94(0x2d0)]());}}else this['drawItemStyleIconText'](_0x3911dd);}else _0x462fdf==='icon'?this['drawItemStyleIcon'](_0x3911dd):Window_Command[_0x3a72e9(0x2e6)][_0x3a72e9(0x1c3)][_0x3a72e9(0x1ad)](this,_0x3911dd);},Window_MenuCommand['prototype'][_0xc43fe(0x2a5)]=function(){const _0x556803=_0xc43fe;return VisuMZ[_0x556803(0x213)]['Settings'][_0x556803(0x246)][_0x556803(0x297)];},Window_MenuCommand['prototype'][_0xc43fe(0x2ed)]=function(_0x1ca609){const _0x18df33=_0xc43fe,_0xce47d9=this[_0x18df33(0x2a5)]();if(_0xce47d9!==_0x18df33(0x1d3))return _0xce47d9;else{const _0x5d0f4b=this[_0x18df33(0x298)](_0x1ca609);if(_0x5d0f4b[_0x18df33(0x22b)](/\\I\[(\d+)\]/i)){const _0x4ebb42=this['itemLineRect'](_0x1ca609),_0x26b966=this[_0x18df33(0x1f7)](_0x5d0f4b)[_0x18df33(0x1eb)];return _0x26b966<=_0x4ebb42[_0x18df33(0x1eb)]?'iconText':_0x18df33(0x30b);}else return'text';}},Window_MenuCommand['prototype'][_0xc43fe(0x2bc)]=function(_0x493010){const _0x4987d8=_0xc43fe,_0x29a276=this[_0x4987d8(0x23a)](_0x493010),_0x3b8ec9=this[_0x4987d8(0x298)](_0x493010),_0x47320=this[_0x4987d8(0x1f7)](_0x3b8ec9)['width'];this[_0x4987d8(0x294)](this[_0x4987d8(0x1bc)](_0x493010));let _0x7ff9b2=this['itemTextAlign']();if(_0x7ff9b2===_0x4987d8(0x291)){if(_0x4987d8(0x242)===_0x4987d8(0x242))this[_0x4987d8(0x1d0)](_0x3b8ec9,_0x29a276['x']+_0x29a276[_0x4987d8(0x1eb)]-_0x47320,_0x29a276['y'],_0x47320);else{function _0x7d971d(){const _0x352c68=_0x4987d8;this[_0x352c68(0x322)](...arguments);}}}else{if(_0x7ff9b2===_0x4987d8(0x2dd)){const _0x5dc5c7=_0x29a276['x']+Math[_0x4987d8(0x236)]((_0x29a276[_0x4987d8(0x1eb)]-_0x47320)/0x2);this['drawTextEx'](_0x3b8ec9,_0x5dc5c7,_0x29a276['y'],_0x47320);}else this['drawTextEx'](_0x3b8ec9,_0x29a276['x'],_0x29a276['y'],_0x47320);}},Window_MenuCommand['prototype'][_0xc43fe(0x317)]=function(_0x22af62){const _0x19be58=_0xc43fe;this[_0x19be58(0x298)](_0x22af62)[_0x19be58(0x22b)](/\\I\[(\d+)\]/i);const _0x67bc33=Number(RegExp['$1']),_0x308e6e=this[_0x19be58(0x23a)](_0x22af62),_0x3269e5=_0x308e6e['x']+Math[_0x19be58(0x236)]((_0x308e6e['width']-ImageManager[_0x19be58(0x24c)])/0x2),_0x52e3ea=_0x308e6e['y']+(_0x308e6e['height']-ImageManager[_0x19be58(0x20d)])/0x2;this[_0x19be58(0x2e8)](_0x67bc33,_0x3269e5,_0x52e3ea);},VisuMZ[_0xc43fe(0x213)][_0xc43fe(0x24d)]=Window_StatusBase['prototype'][_0xc43fe(0x259)],Window_StatusBase[_0xc43fe(0x2e6)][_0xc43fe(0x259)]=function(){const _0x25b648=_0xc43fe;VisuMZ[_0x25b648(0x213)][_0x25b648(0x24d)]['call'](this),this['loadOtherActorImages']();},Window_StatusBase[_0xc43fe(0x2e6)][_0xc43fe(0x2e3)]=function(){const _0x3b691c=_0xc43fe;for(const _0x33d4a9 of $gameParty[_0x3b691c(0x2f0)]()){if(!_0x33d4a9)continue;_0x33d4a9[_0x3b691c(0x19b)]()&&ImageManager[_0x3b691c(0x323)](_0x33d4a9['characterName']()),_0x33d4a9[_0x3b691c(0x2c3)]()&&ImageManager[_0x3b691c(0x1e9)](_0x33d4a9[_0x3b691c(0x2c3)]()),_0x33d4a9['getMenuImage']()&&ImageManager[_0x3b691c(0x1fd)](_0x33d4a9[_0x3b691c(0x289)]());}},Window_StatusBase[_0xc43fe(0x2e6)][_0xc43fe(0x2e9)]=function(){const _0x1dd70d=_0xc43fe;return VisuMZ[_0x1dd70d(0x213)][_0x1dd70d(0x2ae)][_0x1dd70d(0x2e0)];},Window_StatusBase[_0xc43fe(0x2e6)][_0xc43fe(0x28a)]=function(_0x22d03e,_0x244947,_0x5d9105,_0x153991,_0x2903d4){const _0xd2cde2=_0xc43fe;_0x153991=_0x153991||ImageManager[_0xd2cde2(0x262)],_0x2903d4=_0x2903d4||ImageManager[_0xd2cde2(0x274)];const _0x23bd06=ImageManager[_0xd2cde2(0x262)],_0x31c651=_0x2903d4-0x2,_0x2d2873=_0x244947+Math[_0xd2cde2(0x236)]((_0x153991-_0x23bd06)/0x2);this[_0xd2cde2(0x215)]===Window_MenuStatus&&this['changePaintOpacity'](_0x22d03e[_0xd2cde2(0x1af)]()),this['drawActorFace'](_0x22d03e,_0x2d2873,_0x5d9105,_0x23bd06,_0x31c651),this[_0xd2cde2(0x294)](!![]);},Window_StatusBase[_0xc43fe(0x2e6)][_0xc43fe(0x21a)]=function(_0x5829f4,_0x5f0bcf,_0x5d09d6,_0x2ebc23,_0x451299){const _0x44ffec=_0xc43fe;_0x2ebc23=_0x2ebc23||ImageManager['faceWidth'],_0x451299=_0x451299||ImageManager[_0x44ffec(0x274)];const _0x5f2353=_0x5829f4['characterName'](),_0x5c08be=_0x5829f4['characterIndex'](),_0x544b46=ImageManager[_0x44ffec(0x323)](_0x5f2353),_0x24a853=ImageManager[_0x44ffec(0x2f2)](_0x5f2353),_0x186c63=_0x544b46[_0x44ffec(0x1eb)]/(_0x24a853?0x3:0xc),_0x16c16f=_0x544b46[_0x44ffec(0x2e1)]/(_0x24a853?0x4:0x8),_0x4155b0=_0x2ebc23,_0x14c27f=_0x451299-0x2,_0x7fcbd7=_0x5f0bcf+Math['floor'](_0x4155b0/0x2),_0x3c3b75=_0x5d09d6+Math[_0x44ffec(0x1a6)]((_0x451299+_0x16c16f)/0x2);this[_0x44ffec(0x215)]===Window_MenuStatus&&this[_0x44ffec(0x294)](_0x5829f4[_0x44ffec(0x1af)]());const _0x3bc204=Math[_0x44ffec(0x29c)](_0x2ebc23,_0x186c63),_0x190fb0=Math[_0x44ffec(0x29c)](_0x451299,_0x16c16f),_0x1146ac=Math['floor'](_0x5f0bcf+Math[_0x44ffec(0x1e8)](_0x2ebc23-_0x186c63,0x0)/0x2),_0x2076de=Math[_0x44ffec(0x236)](_0x5d09d6+Math[_0x44ffec(0x1e8)](_0x451299-_0x16c16f,0x0)/0x2),_0x323960=_0x24a853?0x0:_0x5c08be,_0x4e1390=(_0x323960%0x4*0x3+0x1)*_0x186c63,_0x1e1c2c=Math[_0x44ffec(0x236)](_0x323960/0x4)*0x4*_0x16c16f;this[_0x44ffec(0x1e3)][_0x44ffec(0x1da)](_0x544b46,_0x4e1390,_0x1e1c2c,_0x3bc204,_0x190fb0,_0x1146ac,_0x2076de),this[_0x44ffec(0x294)](!![]);},Window_StatusBase[_0xc43fe(0x2e6)][_0xc43fe(0x26d)]=function(_0x34fde7,_0x31671e,_0x14dfcc,_0x4405f0,_0x3b3a2c){const _0x7f801f=_0xc43fe;_0x4405f0=_0x4405f0||ImageManager[_0x7f801f(0x262)],_0x3b3a2c=_0x3b3a2c||ImageManager[_0x7f801f(0x274)];const _0xf66cc2=ImageManager['loadSvActor'](_0x34fde7[_0x7f801f(0x2c3)]()),_0xd9edcd=_0xf66cc2[_0x7f801f(0x1eb)]/ImageManager[_0x7f801f(0x1d9)],_0x4073e9=_0xf66cc2[_0x7f801f(0x2e1)]/ImageManager['svActorVertCells'],_0x729d4c=_0x4405f0,_0x126593=_0x3b3a2c-0x2,_0x417cad=_0x31671e+Math[_0x7f801f(0x236)](_0x729d4c/0x2),_0x5b9ac2=_0x14dfcc+Math[_0x7f801f(0x1a6)]((_0x3b3a2c+_0x4073e9)/0x2);this[_0x7f801f(0x215)]===Window_MenuStatus&&this[_0x7f801f(0x294)](_0x34fde7[_0x7f801f(0x1af)]());const _0x11358c=Math[_0x7f801f(0x29c)](_0x4405f0,_0xd9edcd),_0x5144e8=Math[_0x7f801f(0x29c)](_0x3b3a2c,_0x4073e9),_0x389915=Math[_0x7f801f(0x236)](_0x31671e+Math[_0x7f801f(0x1e8)](_0x4405f0-_0xd9edcd,0x0)/0x2),_0x5c0eb8=Math[_0x7f801f(0x236)](_0x14dfcc+Math[_0x7f801f(0x1e8)](_0x3b3a2c-_0x4073e9,0x0)/0x2),_0x54dedf=0x0,_0x48ec0a=0x0;this[_0x7f801f(0x1e3)][_0x7f801f(0x1da)](_0xf66cc2,_0x54dedf,_0x48ec0a,_0x11358c,_0x5144e8,_0x389915,_0x5c0eb8),this[_0x7f801f(0x294)](!![]);},Window_StatusBase['prototype']['drawItemActorMenuImage']=function(_0x1bc9f7,_0x236437,_0x3cac22,_0x362034,_0x120863){const _0x4505e5=_0xc43fe,_0x4dd19d=ImageManager[_0x4505e5(0x1fd)](_0x1bc9f7[_0x4505e5(0x289)]());_0x362034=(_0x362034||ImageManager[_0x4505e5(0x262)])-0x2,_0x120863=(_0x120863||ImageManager[_0x4505e5(0x274)])-0x2;const _0xd74d77=_0x4dd19d[_0x4505e5(0x1eb)],_0x5e8a18=_0x4dd19d[_0x4505e5(0x2e1)],_0x213d98=_0x362034,_0x1dddab=_0x120863-0x2,_0x5b07fb=_0x236437+Math['floor'](_0x213d98/0x2),_0x475464=_0x3cac22+Math[_0x4505e5(0x1a6)]((_0x120863+_0x5e8a18)/0x2);if(this[_0x4505e5(0x215)]===Window_MenuStatus){if('UjFnI'!==_0x4505e5(0x239))this[_0x4505e5(0x294)](_0x1bc9f7['isBattleMember']());else{function _0x4bb349(){const _0x2e9c00=_0x4505e5;this[_0x2e9c00(0x219)][_0x2e9c00(0x206)]();}}}const _0x4a19af=Math[_0x4505e5(0x29c)](_0x362034,_0xd74d77),_0x578f2a=Math[_0x4505e5(0x29c)](_0x120863,_0x5e8a18),_0x24cbf2=_0x236437+0x1,_0x3535a6=Math[_0x4505e5(0x1e8)](_0x3cac22+0x1,_0x3cac22+_0x1dddab-_0x5e8a18+0x3);let _0x554b6b=(_0xd74d77-_0x4a19af)/0x2,_0x3972fe=(_0x5e8a18-_0x578f2a)/0x2;_0x554b6b-=_0x1bc9f7[_0x4505e5(0x27c)](),_0x3972fe-=_0x1bc9f7[_0x4505e5(0x306)](),this[_0x4505e5(0x1e3)]['blt'](_0x4dd19d,_0x554b6b,_0x3972fe,_0x4a19af,_0x578f2a,_0x24cbf2,_0x3535a6),this[_0x4505e5(0x294)](!![]);},VisuMZ['MainMenuCore'][_0xc43fe(0x1ff)]=Window_MenuStatus[_0xc43fe(0x2e6)][_0xc43fe(0x1de)],Window_MenuStatus[_0xc43fe(0x2e6)]['selectLast']=function(){const _0x5e74fd=_0xc43fe;if(VisuMZ['MainMenuCore'][_0x5e74fd(0x2ae)][_0x5e74fd(0x2f9)][_0x5e74fd(0x2b6)])VisuMZ['MainMenuCore'][_0x5e74fd(0x1ff)][_0x5e74fd(0x1ad)](this);else{if(_0x5e74fd(0x2fc)===_0x5e74fd(0x2fc))this['smoothSelect'](0x0);else{function _0x31f65c(){const _0x145428=_0x5e74fd;this[_0x145428(0x1dc)](_0x12c5e9),this['drawItem'](_0x377c78);}}}},VisuMZ['MainMenuCore'][_0xc43fe(0x1e5)]=Window_MenuStatus[_0xc43fe(0x2e6)][_0xc43fe(0x2ee)],Window_MenuStatus[_0xc43fe(0x2e6)][_0xc43fe(0x2ee)]=function(){const _0x5db1b6=_0xc43fe;return this[_0x5db1b6(0x2ca)]()?$gameParty[_0x5db1b6(0x1f3)]()[_0x5db1b6(0x199)]:VisuMZ[_0x5db1b6(0x213)][_0x5db1b6(0x1e5)][_0x5db1b6(0x1ad)](this);},Window_MenuStatus[_0xc43fe(0x2e6)][_0xc43fe(0x2ca)]=function(){const _0x400e39=_0xc43fe,_0x590dfc=VisuMZ[_0x400e39(0x213)]['Settings'][_0x400e39(0x2f9)];if(_0x590dfc[_0x400e39(0x1a7)]===undefined)_0x590dfc[_0x400e39(0x1a7)]=!![];const _0x181c54=SceneManager['_scene'];if(!_0x590dfc[_0x400e39(0x1a7)]){if(_0x590dfc[_0x400e39(0x201)])return _0x181c54['constructor']===Scene_Menu;return!![];}return![];},Window_MenuStatus['prototype'][_0xc43fe(0x30f)]=function(){const _0x56c01e=_0xc43fe,_0x4c869d=SceneManager[_0x56c01e(0x240)][_0x56c01e(0x215)];if(_0x4c869d===Scene_Menu)return VisuMZ[_0x56c01e(0x213)][_0x56c01e(0x2ae)]['StatusListStyle'];else{if(_0x56c01e(0x244)!==_0x56c01e(0x244)){function _0xcbf481(){const _0x35c4a2=_0x56c01e;this[_0x35c4a2(0x2bc)](_0x357faf);}}else return VisuMZ[_0x56c01e(0x213)][_0x56c01e(0x2ae)]['InnerMenuListStyle'];}},Window_MenuStatus[_0xc43fe(0x2e6)][_0xc43fe(0x1c6)]=function(){const _0x1c5488=_0xc43fe,_0x5342a8=this[_0x1c5488(0x30f)]();switch(_0x5342a8){case _0x1c5488(0x28c):case _0x1c5488(0x23e):return 0x1;case _0x1c5488(0x2eb):return 0x1;default:return $gameParty[_0x1c5488(0x2f5)]();}},Window_MenuStatus[_0xc43fe(0x2e6)][_0xc43fe(0x30d)]=function(){const _0x585e57=_0xc43fe,_0x3bacbb=this['listStyle']();switch(_0x3bacbb){case _0x585e57(0x28c):case'portrait':return $gameParty['maxBattleMembers']();default:return 0x1;}},VisuMZ[_0xc43fe(0x213)]['Window_MenuStatus_itemHeight']=Window_MenuStatus[_0xc43fe(0x2e6)]['itemHeight'],Window_MenuStatus[_0xc43fe(0x2e6)][_0xc43fe(0x1a3)]=function(){const _0x4b09de=_0xc43fe,_0x110cd4=this[_0x4b09de(0x30f)]();switch(_0x110cd4){case _0x4b09de(0x28c):case _0x4b09de(0x23e):case _0x4b09de(0x2eb):return this[_0x4b09de(0x220)];case _0x4b09de(0x284):return Window_Selectable[_0x4b09de(0x2e6)]['itemHeight'][_0x4b09de(0x1ad)](this);case'thicker':return this[_0x4b09de(0x30a)]()*0x2+0x8;default:return VisuMZ[_0x4b09de(0x213)][_0x4b09de(0x319)][_0x4b09de(0x1ad)](this);}},Window_MenuStatus['prototype'][_0xc43fe(0x1c3)]=function(_0x542d7e){const _0x39185e=_0xc43fe;this['drawPendingItemBackground'](_0x542d7e),this[_0x39185e(0x211)](_0x542d7e);},VisuMZ['MainMenuCore'][_0xc43fe(0x265)]=Window_MenuStatus[_0xc43fe(0x2e6)][_0xc43fe(0x238)],Window_MenuStatus[_0xc43fe(0x2e6)][_0xc43fe(0x1f0)]=function(_0x47d1e5,_0x13340b,_0x39fdc0,_0x4a8d04,_0x25540f){const _0x4280d8=_0xc43fe;switch(this[_0x4280d8(0x2e9)]()){case _0x4280d8(0x1ac):break;case'sprite':this['drawItemActorSprite'](_0x47d1e5,_0x13340b,_0x39fdc0+0x1,_0x4a8d04,_0x25540f-0x2);break;case _0x4280d8(0x2b1):this['drawItemActorSvBattler'](_0x47d1e5,_0x13340b,_0x39fdc0+0x1,_0x4a8d04,_0x25540f-0x2);break;default:this[_0x4280d8(0x28a)](_0x47d1e5,_0x13340b,_0x39fdc0,_0x4a8d04,_0x25540f);break;}},Window_MenuStatus[_0xc43fe(0x2e6)][_0xc43fe(0x211)]=function(_0x5c81b0){const _0x29f09b=_0xc43fe;this[_0x29f09b(0x202)]();const _0x5ad118=this[_0x29f09b(0x1d2)](_0x5c81b0),_0xf60afe=this[_0x29f09b(0x270)](_0x5c81b0),_0x55ac20=this['listStyle']();switch(_0x55ac20){case _0x29f09b(0x28c):this[_0x29f09b(0x2b3)](_0x5ad118,_0xf60afe);break;case _0x29f09b(0x23e):this[_0x29f09b(0x257)](_0x5ad118,_0xf60afe);break;case'solo':this[_0x29f09b(0x304)](_0x5ad118,_0xf60afe);break;case'thin':this['drawItemStatusThinStyle'](_0x5ad118,_0xf60afe);break;case _0x29f09b(0x305):this['drawItemStatusThickerStyle'](_0x5ad118,_0xf60afe);break;default:this[_0x29f09b(0x26a)](_0x5ad118,_0xf60afe);break;}},Window_MenuStatus[_0xc43fe(0x2e6)][_0xc43fe(0x2b3)]=function(_0x2652d6,_0x28dc75){const _0x92dbcb=_0xc43fe;VisuMZ['MainMenuCore']['Settings'][_0x92dbcb(0x29e)][_0x92dbcb(0x1c2)]['call'](this,_0x2652d6,_0x28dc75);},Window_MenuStatus[_0xc43fe(0x2e6)][_0xc43fe(0x257)]=function(_0x3232df,_0x1f60ab){const _0x168459=_0xc43fe;if(_0x3232df['getMenuImage']()!==''){const _0x5caedc=ImageManager[_0x168459(0x1fd)](_0x3232df['getMenuImage']());_0x5caedc['addLoadListener'](this[_0x168459(0x2aa)][_0x168459(0x230)](this,_0x3232df,_0x1f60ab));}else this['drawItemStatusVerticalStyle'](_0x3232df,_0x1f60ab);},Window_MenuStatus['prototype'][_0xc43fe(0x2aa)]=function(_0x170001,_0x12ed9b){const _0x4c564e=_0xc43fe;VisuMZ[_0x4c564e(0x213)][_0x4c564e(0x2ae)][_0x4c564e(0x29e)][_0x4c564e(0x234)][_0x4c564e(0x1ad)](this,_0x170001,_0x12ed9b);},Window_MenuStatus['prototype']['drawItemStatusSoloStyle']=function(_0x1f560e,_0x2f98c1){const _0x4b930f=_0xc43fe,_0x4e5ad8=ImageManager[_0x4b930f(0x1fd)](_0x1f560e[_0x4b930f(0x289)]());_0x4e5ad8[_0x4b930f(0x2d9)](this[_0x4b930f(0x276)][_0x4b930f(0x230)](this,_0x1f560e,_0x2f98c1));},Window_MenuStatus[_0xc43fe(0x2e6)]['drawItemStatusSoloStyleOnLoad']=function(_0x433abc,_0x49764f){const _0x29e4f9=_0xc43fe;VisuMZ[_0x29e4f9(0x213)][_0x29e4f9(0x2ae)]['ListStyles']['SoloStyle']['call'](this,_0x433abc,_0x49764f);},Window_MenuStatus[_0xc43fe(0x2e6)][_0xc43fe(0x2a0)]=function(_0x1f88e3,_0x2db4a4){const _0x344b19=_0xc43fe;VisuMZ[_0x344b19(0x213)][_0x344b19(0x2ae)][_0x344b19(0x29e)][_0x344b19(0x1bb)][_0x344b19(0x1ad)](this,_0x1f88e3,_0x2db4a4);},Window_MenuStatus[_0xc43fe(0x2e6)][_0xc43fe(0x272)]=function(_0x1ee628,_0x5b8990){const _0x349b4c=_0xc43fe;VisuMZ[_0x349b4c(0x213)][_0x349b4c(0x2ae)][_0x349b4c(0x29e)][_0x349b4c(0x22c)][_0x349b4c(0x1ad)](this,_0x1ee628,_0x5b8990);},Window_MenuStatus[_0xc43fe(0x2e6)]['isExpGaugeDrawn']=function(){const _0x252a20=_0xc43fe,_0xf20c29=this[_0x252a20(0x30f)]();if(['thin',_0x252a20(0x305)][_0x252a20(0x2b7)](_0xf20c29))return![];return Window_StatusBase[_0x252a20(0x2e6)][_0x252a20(0x1d4)][_0x252a20(0x1ad)](this);},Window_MenuStatus['prototype'][_0xc43fe(0x26a)]=function(_0x312dd0,_0x295d9f){const _0x2119ff=_0xc43fe;VisuMZ[_0x2119ff(0x213)][_0x2119ff(0x2ae)][_0x2119ff(0x29e)][_0x2119ff(0x2bf)][_0x2119ff(0x1ad)](this,_0x312dd0,_0x295d9f);},Window_SkillStatus['prototype'][_0xc43fe(0x1ee)]=function(_0x584836,_0x131a48,_0x5ead6b,_0x1c7b66,_0x53eee5){const _0x229cf4=_0xc43fe;switch(this['graphicType']()){case _0x229cf4(0x1ac):break;case _0x229cf4(0x1b6):this['drawItemActorSprite'](_0x584836,_0x131a48,_0x5ead6b,_0x1c7b66,_0x53eee5);break;case _0x229cf4(0x2b1):this[_0x229cf4(0x26d)](_0x584836,_0x131a48,_0x5ead6b,_0x1c7b66,_0x53eee5);break;default:Window_StatusBase[_0x229cf4(0x2e6)]['drawActorFace']['call'](this,_0x584836,_0x131a48,_0x5ead6b,_0x1c7b66,_0x53eee5);break;}},Window_EquipStatus[_0xc43fe(0x2e6)][_0xc43fe(0x1ee)]=function(_0x5c09ac,_0xc7af19,_0x26978b,_0x9dbb79,_0x1c8e70){const _0x476706=_0xc43fe;switch(this[_0x476706(0x2e9)]()){case'none':break;case _0x476706(0x1b6):this[_0x476706(0x21a)](_0x5c09ac,_0xc7af19,_0x26978b,_0x9dbb79,_0x1c8e70);break;case'svbattler':this['drawItemActorSvBattler'](_0x5c09ac,_0xc7af19,_0x26978b,_0x9dbb79,_0x1c8e70);break;default:Window_StatusBase[_0x476706(0x2e6)][_0x476706(0x1ee)]['call'](this,_0x5c09ac,_0xc7af19,_0x26978b,_0x9dbb79,_0x1c8e70);break;}};function Window_ThinGold(){this['initialize'](...arguments);}Window_ThinGold[_0xc43fe(0x2e6)]=Object['create'](Window_Gold[_0xc43fe(0x2e6)]),Window_ThinGold[_0xc43fe(0x2e6)][_0xc43fe(0x215)]=Window_ThinGold,Window_ThinGold['prototype'][_0xc43fe(0x1a3)]=function(){const _0xa1761f=_0xc43fe;return this[_0xa1761f(0x30a)]();},Window_ThinGold['prototype'][_0xc43fe(0x269)]=function(){const _0x1a1131=_0xc43fe;return Window_Selectable[_0x1a1131(0x2e6)][_0x1a1131(0x269)][_0x1a1131(0x1ad)](this);};function _0x262b(_0x4391cb,_0x298e71){_0x4391cb=_0x4391cb-0x199;let _0x118508=_0x1185[_0x4391cb];return _0x118508;}function Window_Playtime(){this['initialize'](...arguments);}Window_Playtime[_0xc43fe(0x2e6)]=Object[_0xc43fe(0x1be)](Window_Selectable[_0xc43fe(0x2e6)]),Window_Playtime[_0xc43fe(0x2e6)][_0xc43fe(0x215)]=Window_Playtime,Window_Playtime['prototype'][_0xc43fe(0x322)]=function(_0xcb7e50){const _0x2452be=_0xc43fe;this[_0x2452be(0x2c8)]=$gameSystem[_0x2452be(0x20c)](),this['_timer']=0x3c,Window_Selectable['prototype']['initialize'][_0x2452be(0x1ad)](this,_0xcb7e50),this[_0x2452be(0x235)]();},Window_Playtime[_0xc43fe(0x2e6)][_0xc43fe(0x1a3)]=function(){return this['lineHeight']();},Window_Playtime[_0xc43fe(0x2e6)][_0xc43fe(0x31d)]=function(){const _0xe35cce=_0xc43fe;Window_Selectable[_0xe35cce(0x2e6)][_0xe35cce(0x31d)]['call'](this),this[_0xe35cce(0x2d3)]();},Window_Playtime[_0xc43fe(0x2e6)][_0xc43fe(0x2d3)]=function(){const _0x47762c=_0xc43fe;if(this[_0x47762c(0x295)]-->0x0){if(this[_0x47762c(0x295)]<=0x0)this[_0x47762c(0x235)]();}},Window_Playtime[_0xc43fe(0x2e6)][_0xc43fe(0x235)]=function(){const _0x5df4e3=_0xc43fe;this[_0x5df4e3(0x295)]=0x3c;const _0x36a926=this[_0x5df4e3(0x23a)](0x0),_0x5efba7=_0x36a926['x'],_0x4b413e=_0x36a926['y'],_0x34fb91=_0x36a926[_0x5df4e3(0x1eb)];this[_0x5df4e3(0x1e3)][_0x5df4e3(0x1ef)](),this[_0x5df4e3(0x1b8)](_0x36a926),this[_0x5df4e3(0x316)](_0x36a926),this[_0x5df4e3(0x205)](_0x36a926);},Window_Playtime[_0xc43fe(0x2e6)][_0xc43fe(0x202)]=function(){const _0x26addf=_0xc43fe;Window_Selectable['prototype']['resetFontSettings'][_0x26addf(0x1ad)](this),this[_0x26addf(0x1e3)]['fontSize']=VisuMZ[_0x26addf(0x213)][_0x26addf(0x2ae)][_0x26addf(0x300)]['FontSize'];},Window_Playtime['prototype'][_0xc43fe(0x1b8)]=function(_0x320023){const _0xe9dc8d=_0xc43fe;if(VisuMZ[_0xe9dc8d(0x213)][_0xe9dc8d(0x2ae)]['Playtime']['Icon']>0x0){if('pOTBI'!==_0xe9dc8d(0x2a1)){const _0x445355=VisuMZ[_0xe9dc8d(0x213)][_0xe9dc8d(0x2ae)]['Playtime']['Icon'],_0x1cb5bb=_0x320023['y']+(this[_0xe9dc8d(0x30a)]()-ImageManager[_0xe9dc8d(0x20d)])/0x2;this['drawIcon'](_0x445355,_0x320023['x'],_0x1cb5bb);const _0x330c3e=ImageManager[_0xe9dc8d(0x24c)]+0x4;_0x320023['x']+=_0x330c3e,_0x320023['width']-=_0x330c3e;}else{function _0x22720a(){const _0x2eac37=_0xe9dc8d;return _0x5de0a9[_0x2eac37(0x213)]['Settings'][_0x2eac37(0x25a)];}}}},Window_Playtime[_0xc43fe(0x2e6)][_0xc43fe(0x316)]=function(_0x1a0874){const _0x5771b4=_0xc43fe;this['resetFontSettings'](),this[_0x5771b4(0x2c5)](ColorManager[_0x5771b4(0x24a)]());const _0x1dfde2=VisuMZ[_0x5771b4(0x213)][_0x5771b4(0x2ae)][_0x5771b4(0x300)][_0x5771b4(0x23b)];this[_0x5771b4(0x29a)](_0x1dfde2,_0x1a0874['x'],_0x1a0874['y'],_0x1a0874['width'],_0x5771b4(0x1d5)),this[_0x5771b4(0x2da)]();},Window_Playtime['prototype']['drawPlaytime']=function(_0xd6fe45){const _0x2ebd8c=_0xc43fe,_0x32871a=$gameSystem[_0x2ebd8c(0x20c)]();this['drawText'](_0x32871a,_0xd6fe45['x'],_0xd6fe45['y'],_0xd6fe45[_0x2ebd8c(0x1eb)],'right');};function Window_MenuVariables(){const _0x4513ae=_0xc43fe;this[_0x4513ae(0x322)](...arguments);}Window_MenuVariables[_0xc43fe(0x2e6)]=Object['create'](Window_Selectable[_0xc43fe(0x2e6)]),Window_MenuVariables['prototype'][_0xc43fe(0x215)]=Window_MenuVariables,Window_MenuVariables[_0xc43fe(0x2e6)][_0xc43fe(0x322)]=function(_0x385b9d){const _0x3acf9c=_0xc43fe;Window_Selectable['prototype'][_0x3acf9c(0x322)][_0x3acf9c(0x1ad)](this,_0x385b9d),this['_data']=VisuMZ[_0x3acf9c(0x213)][_0x3acf9c(0x2ae)][_0x3acf9c(0x271)][_0x3acf9c(0x2cd)],this['refresh']();},Window_MenuVariables[_0xc43fe(0x2e6)]['itemHeight']=function(){const _0x415fae=_0xc43fe;return this[_0x415fae(0x30a)]();},Window_MenuVariables[_0xc43fe(0x2e6)][_0xc43fe(0x30d)]=function(){const _0x5ab149=_0xc43fe,_0x3f0585=SceneManager[_0x5ab149(0x240)]['commandWindowStyle']();if(_0x3f0585===_0x5ab149(0x263)){if(_0x5ab149(0x203)!=='fdBcK'){function _0x222aad(){const _0x3dd41c=_0x5ab149,_0x3388e5=this[_0x3dd41c(0x208)]();if([_0x3dd41c(0x1b5),_0x3dd41c(0x2a8),_0x3dd41c(0x287)][_0x3dd41c(0x2b7)](_0x3388e5))return this[_0x3dd41c(0x22a)]();else{if(['bottom',_0x3dd41c(0x1e0)][_0x3dd41c(0x2b7)](_0x3388e5))return this[_0x3dd41c(0x1db)]();else{const _0x4594e8=_0xca264d[_0x3dd41c(0x213)][_0x3dd41c(0x2f8)][_0x3dd41c(0x1ad)](this);return this['applyThinnerGoldWindowRect'](_0x4594e8),_0x4594e8;}}}}else return 0x1;}else{if(_0x5ab149(0x28b)!==_0x5ab149(0x28b)){function _0x380826(){const _0x350da3=_0x5ab149;if(!this[_0x350da3(0x2a6)]())return new _0x4f1528(0x0,0x0,0x0,0x0);const _0x26e330=this[_0x350da3(0x1f8)]();this['_playtimeWindow']=new _0x51e1fa(_0x26e330),this[_0x350da3(0x324)][_0x350da3(0x2fd)](_0xb0adc2['MainMenuCore'][_0x350da3(0x2ae)][_0x350da3(0x300)][_0x350da3(0x2e7)]),this[_0x350da3(0x1f2)](this[_0x350da3(0x324)]);}}else return VisuMZ['MainMenuCore'][_0x5ab149(0x2ae)][_0x5ab149(0x271)][_0x5ab149(0x2cd)][_0x5ab149(0x199)];}},Window_MenuVariables[_0xc43fe(0x2e6)][_0xc43fe(0x202)]=function(){const _0x3008fc=_0xc43fe;Window_Selectable[_0x3008fc(0x2e6)][_0x3008fc(0x202)][_0x3008fc(0x1ad)](this),this[_0x3008fc(0x1e3)][_0x3008fc(0x1b9)]=VisuMZ[_0x3008fc(0x213)][_0x3008fc(0x2ae)]['Variable'][_0x3008fc(0x217)],this[_0x3008fc(0x2c5)](ColorManager['systemColor']());},Window_MenuVariables[_0xc43fe(0x2e6)]['maxItems']=function(){const _0x3bd4bd=_0xc43fe;return this[_0x3bd4bd(0x1ae)][_0x3bd4bd(0x199)];},Window_MenuVariables[_0xc43fe(0x2e6)]['drawAllItems']=function(){const _0x48af9b=_0xc43fe,_0x1b7f9c=this[_0x48af9b(0x2a4)]();for(let _0x4b1cfa=0x0;_0x4b1cfa<this[_0x48af9b(0x1c8)]();_0x4b1cfa++){if('hKkyo'===_0x48af9b(0x256)){const _0x54f196=_0x1b7f9c+_0x4b1cfa;_0x54f196<this[_0x48af9b(0x2ee)]()&&(this[_0x48af9b(0x1dc)](_0x54f196),this[_0x48af9b(0x1c3)](_0x54f196));}else{function _0x5bf7b6(){const _0x4e9335=_0x48af9b;_0x5c367a[_0x4e9335(0x2e6)][_0x4e9335(0x202)][_0x4e9335(0x1ad)](this),this['contents'][_0x4e9335(0x1b9)]=_0x249073[_0x4e9335(0x213)]['Settings'][_0x4e9335(0x300)][_0x4e9335(0x217)];}}}},Window_MenuVariables[_0xc43fe(0x2e6)][_0xc43fe(0x1dc)]=function(_0x10e446){},Window_MenuVariables[_0xc43fe(0x2e6)]['drawItem']=function(_0x2ece33){const _0x4ee823=_0xc43fe,_0x143966=this[_0x4ee823(0x1ae)][_0x2ece33];if(_0x143966<=0x0)return;if(!$dataSystem[_0x4ee823(0x26f)][_0x143966])return;const _0x492341=this['itemLineRect'](_0x2ece33);this[_0x4ee823(0x202)]();let _0x22946d=0x0,_0x147369=$dataSystem[_0x4ee823(0x26f)][_0x143966]['trim']();_0x147369[_0x4ee823(0x22b)](/\\I\[(\d+)\]/i)&&(_0x22946d=Number(RegExp['$1']),_0x147369=_0x147369[_0x4ee823(0x281)](/\\I\[(\d+)\]/i,'')[_0x4ee823(0x225)]());if(_0x22946d>0x0){if(_0x4ee823(0x2c7)!=='yhckg'){function _0x2534d3(){const _0x58caf2=_0x4ee823;this[_0x58caf2(0x294)](_0x227091[_0x58caf2(0x1af)]());}}else{const _0x308820=_0x492341['y']+(this[_0x4ee823(0x30a)]()-ImageManager['iconHeight'])/0x2;this[_0x4ee823(0x2e8)](_0x22946d,_0x492341['x'],_0x308820);const _0x47c1fe=ImageManager[_0x4ee823(0x24c)]+0x4;_0x492341['x']+=_0x47c1fe,_0x492341[_0x4ee823(0x1eb)]-=_0x47c1fe;}}this['drawText'](_0x147369,_0x492341['x'],_0x492341['y'],_0x492341[_0x4ee823(0x1eb)],_0x4ee823(0x1d5)),this['changeTextColor'](ColorManager['normalColor']()),this[_0x4ee823(0x29a)]($gameVariables[_0x4ee823(0x1f6)](_0x143966),_0x492341['x'],_0x492341['y'],_0x492341[_0x4ee823(0x1eb)],'right');};