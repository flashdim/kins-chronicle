//=============================================================================
// VisuStella MZ - Save Core
// VisuMZ_1_SaveCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_SaveCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.SaveCore = VisuMZ.SaveCore || {};
VisuMZ.SaveCore.version = 1.11;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.11] [SaveCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Save_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Save Core plugin adds upon the existing functionality of how saves
 * operate in RPG Maker MZ and how the Save Menu appears in-game. Control over
 * autosaves is also provided by this plugin as well as the ability to make
 * Global Switches and Variables accessible across all game saves (including
 * new games).
 *
 * Features include all (but not limited to) the following:
 * 
 * * Save file technicalities including how filenames are made and or how
 *   forage keys are labeled to distinguish games from one another.
 * * Save types (standard, slot-locked, or single) to change saving to be
 *   suited for each game type.
 * * Save confirmation window added to relay information to player on whether
 *   or not a save has been made successfully.
 * * Global Switches and Variables that span across all saves and new games.
 * * Control over how autosaves handle (their own file, save over existing
 *   files, and/or both).
 * * Plugin Commands that enable/disable autosaves and forcefully activate them
 *   or request them.
 * * Change up how the Save Menu appears with various save styles.
 * * Add descriptions and pictures to the save files.
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
 * Global Switches and Global Variables
 * ============================================================================
 *
 * Global Switches and Global Variables are now added into the game engine via
 * this plugin. Global Switches and Global Variables exist in the same state
 * across all save files. This means if Switch 40 is declared to be a Global
 * Switch and is turned ON, then whether you start up a new game or open a
 * different save file, Switch 40 will be in the ON state. Similar will occur
 * with Global Variables.
 *
 * ---
 *
 * <Global> Switch/Variable Name
 *
 * To declare Global Switches and/or Global Variables, insert <Global> into
 * the Switch/Variable's name. That's all there is to it. Whatever value you
 * change the Global Switch/Variable to after declaring it will be changed
 * across all saves.
 *
 * ---
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <Global>, <JS>, or <Self> simultaneously.
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
 * === Autosave Plugin Commands ===
 * 
 * ---
 *
 * Autosave: Enable/Disable
 * - Enable or Disable Autosave
 * - Requires Database => System 1 => [x] Enable Autosave
 *
 *   Enable or Disable?:
 *   - Enable or disable autosave?
 *
 * ---
 *
 * Autosave: (Stage 1) Request
 * - Autosaves the game at current point if enabled.
 * - Requires Database => System 1 => [x] Enable Autosave
 * - Autosave does not go through if it is neither enabled in the database or
 *   in-game through the "Autosave: Enable/Disable" plugin command.
 * - This Plugin Command will not autosave if the player turned off "Autosave"
 *   in the Options Menu.
 *
 * ---
 *
 * Autosave: (Stage 2) Execute
 * - Executes autosaves the game at the current point.
 * - Requires Database => System 1 => [x] Enable Autosave
 * - This will require autosave to be enabled through the database, but it will
 *   ignore the "Autosave: Enable/Disable" plugin command state.
 * - This Plugin Command will not autosave if the player turned off "Autosave"
 *   in the Options Menu.
 *
 * ---
 *
 * Autosave: (Stage 3) Force
 * - Forces autosaves the game at the current point.
 * - Requires Database => System 1 => [x] Enable Autosave
 * - This will require autosave to be enabled through the database, but it will
 *   ignore the "Autosave: Enable/Disable" plugin command state.
 *
 * ---
 *
 * Save: Current Slot
 * - Process the game's current save at the current point.
 * - Must be outside of battle and on the map.
 *
 * ---
 * 
 * === Save Plugin Commands ===
 * 
 * ---
 *
 * Save: Set Description
 * - Set the description text that will appear in the save files.
 *
 *   Text:
 *   - Insert desired save description text here.
 *   - Text codes supported.
 *   - \V[x], \N[x], \P[x] are save local.
 *   - Other text codes will draw data from the currently active game.
 *
 * ---
 *
 * Save: Set Picture
 * - Set the picture that would appear in the save file.
 *
 *   Filename:
 *   - Input the filename here of the desired picture.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Save Settings
 * ============================================================================
 *
 * These are general settings pertaining to saves and the technicalities behind
 * how saves work in your game.
 *
 * ---
 *
 * General
 * 
 *   Save Style:
 *   - Select a save style for the game. Some of these options may alter other
 *     Plugin Parameter settings.
 *   - Standard: Save freely in any slot.
 *   - Slot-Locked: Select one dedicated slot at New Game.
 *   - Single: Only one slot is available for the game.
 * 
 *   Max Save Files:
 *   - Maximum number of save files for the game.
 * 
 *   Autosave Counts?:
 *   - Count the autosave file towards the max count?
 *
 * ---
 *
 * Local Mode
 * 
 *   Local Mode?:
 *   - When running the game on client, use the Local Mode of saving via files
 *     or store saves to forage keys?
 * 
 *   Filename Format:
 *   - Filename format for save files.
 *   - %1 - Save File ID
 * 
 *   Extension Format:
 *   - Filename extension format for save files.
 *   - %1 - Save Name
 *
 * ---
 *
 * Forage Key
 * 
 *   Forage Key Format:
 *   - Forage Key format when saving to memory.
 *   - %1 - Game ID, %2 - Save Name
 * 
 *   Forage Key Test:
 *   - Key used to test if saving a forage key is possible.
 *
 * ---
 *
 * Vocabulary
 * 
 *   Help: Slot-Locked:
 *   - Help description used for initial slot-locked selection.
 *
 * ---
 *
 * JavaScript
 * 
 *   JS: On Save Success:
 *   - Code to perform when a save is successful.
 * 
 *   JS: On Save Failure:
 *   - Code to perform when a save has failed.
 * 
 *   JS: On Load Success:
 *   - Code to perform when a load is successful.
 * 
 *   JS: On Load Failure:
 *   - Code to perform when a load has failed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Save Confirm Window Settings
 * ============================================================================
 *
 * The Save Confirmation Window is a new feature added through this plugin.
 * It gives the player visual feedback letting the player know that a save is
 * successful or not.
 *
 * ---
 *
 * General
 * 
 *   Enable Window?:
 *   - Enable the Save Confirmation Window?
 * 
 *   Pop Up Duration:
 *   - How long should the window be open for before closing?
 *   - Insert the time in milliseconds.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions of the Save Confirmation Window.
 *
 * ---
 *
 * Vocabulary
 * 
 *   Pop Up: Save Success:
 *   - Text used for a "Save Success" message popup.
 *   - Text codes are allowed.
 * 
 *   Pop Up: Save Failure:
 *   - Text used for a "Save Failure" message popup.
 *   - Text codes are allowed.
 * 
 *   Pop Up: Load Failure:
 *   - Text used for a "Load Failure" message popup.
 *   - Text codes are allowed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Autosave Settings
 * ============================================================================
 *
 * These settings adjust how autosaves work in your game project. The settings
 * will encompass the original autosave settings made by RPG Maker MZ as well
 * as new settings added through this plugin.
 *
 * ---
 *
 * General
 * 
 *   Autosave Type:
 *   - Select autosave type.
 *   - Requires Database => System 1 => [x] Enable Autosave
 *   - Autosave File: Dedicated save file for autosaves.
 *   - Current File: Overwrites the current save file.
 *   - Autosave File + Current File: Both of the above.
 *
 * ---
 *
 * Requests
 * 
 *   Requires Save Enable?:
 *   - Autosave requests require Saving to be enabled?
 * 
 *   Request after Battle?:
 *   - Requests an autosave after battle?
 * 
 *   Request on Transfer?:
 *   - Requests an autosave after a map transfer?
 * 
 *   Request on Menu Open?:
 *   - Requests an autosave after opening the main menu?
 * 
 *   Request on Menu Exit?:
 *   - Requests an autosave after exiting the main menu?
 *
 * ---
 *
 * JavaScript
 * 
 *   JS: On Success:
 *   - Code to perform when an autosave is successful.
 * 
 *   JS: On Failure:
 *   - Code to perform when an autosave has failed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Autosave Confirm Window Settings
 * ============================================================================
 *
 * The Autosave Confirmation Window is a new feature added by this plugin to
 * notify the player whenever autosaving occurs.
 *
 * ---
 *
 * General
 * 
 *   Enable Window?:
 *   - Enable the Autoave Confirmation Window?
 * 
 *   Pop Up Duration:
 *   - How long should the window be open for before closing?
 *   - Insert the time in milliseconds.
 * 
 *   Screen Position:
 *   - Where does this window appear on the screen?
 *   - Lower Left
 *   - Lower Center
 *   - Lower Right
 *   - Middle Left
 *   - Middle Center
 *   - Middle Right
 *   - Upper Left
 *   - Upper Center
 *   - Upper Right
 *
 * ---
 *
 * Vocabulary
 * 
 *   Pop Up: Save Success:
 *   - Text used for an "Autosave Success" message popup.
 *   - Text codes are allowed
 * 
 *   Pop Up: Save Failure:
 *   - Text used for an "Autosave Failure" message popup.
 *   - Text codes are allowed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Autosave Options Settings
 * ============================================================================
 *
 * This plugin adds the "Autosave" option to the Options menu, allowing players
 * to decide if they want autosave enabled or not. This feature can be disabled
 * as well, to better suit games. If the "Autosave" option is turned off by the
 * player, then any Autosave requests and executions.
 *
 * ---
 *
 * Autosave Options
 * 
 *   Add Option?:
 *   - Add the 'Autosave' option to the Options menu?
 * 
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 * 
 *   Option Name:
 *   - Command name of the option.
 *
 *   Default Value:
 *   - Determine the default value of this option.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Actor Graphic Settings
 * ============================================================================
 *
 * This Plugin Parameter lets you select which graphic to use for displaying
 * the actor party found inside the save menu.
 *
 * ---
 *
 * Actor Graphic
 * 
 *   None:
 *   - Don't display any actors.
 * 
 *   Face:
 *   - Display the face graphics for the actors.
 * 
 *   Map Sprite:
 *   - Display the sprite graphics for the actors.
 * 
 *   Sideview Battler:
 *   - Display the SV Battler graphics for the actors.
 *   - Note: If you have an existing save made before this plugin was
 *     installed, you may need to save over the existing ones to see the
 *     Sideview Battler graphics.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Save Menu Styles
 * ============================================================================
 *
 * Save Menu Styles affect how the save files themselves appear to the player,
 * as long horizontal lists, vertical columns, small boxes, or a large file.
 *
 * ---
 *
 * Save Menu Styles
 * 
 *   List:
 *   - Save files stretch horizontally across the screen.
 *   - Save files are listed as rows.
 * 
 *   Vertical:
 *   - Save files are stretched vertically across the screen.
 *   - Save files are depicted as columns.
 * 
 *   Box:
 *   - Save files are small boxes shown on the screen.
 *   - Save files are sign in both rows and columns.
 * 
 *   Large:
 *   - Save files take up the whole screen.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Style Settings
 * ============================================================================
 *
 * These settings allow you, the game dev, to manipulate how the save styles
 * appear in-game if they're not to your liking. JavaScript familiarity is a
 * must to adjust them.
 *
 * ---
 *
 * General
 * 
 *   Latest Text:
 *   - Text used to depict latest save file.
 *   - The "NEW!" text will not appear on auto save slots. This is intentional.
 * 
 *   Latest Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Sprite Width:
 *   - Pixel width of map sprites when drawn in the Save Menu.
 * 
 *   SV Battler Width:
 *   - Pixel width of sv battlers when drawn in the Save Menu.
 *
 *   JS: Save Display Info:
 *   - Code that, upon saving, determines which info is quickly stored
 *     for displaying.
 *
 * ---
 *
 * List Style
 * Vertical Style
 * Box Style
 * Large Style
 * 
 *   Rows:
 *   - Number of rows for this style.
 * 
 *   Columns:
 *   - Number of column for this style.
 * 
 *   JS: Draw Contents:
 *   - Code on how to draw the contents for this style.
 * 
 *   JS: Draw File Data:
 *   - Code on how to draw the file data for this style.
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
 * Version 1.11: September 14, 2023
 * * Bug Fixes!
 * ** Fixed a bug where there is not a soft fade in after using the single slot
 *    loading screen from the VisuMZ Save Core. Fix made by Olivia.
 * 
 * Version 1.10: June 15, 2023
 * * Bug Fixes!
 * ** Fixed a rare bug that prevents plugin commands from saving in the current
 *    save slot upon certain types of loading. Fix made by Arisu.
 * 
 * Version 1.09: February 10, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.08: December 16, 2021
 * * Bug Fixes!
 * ** Fixed default Plugin Parameters where the Autosave option was not
 *    properly working without the Options Core. Fix made by Olivia.
 * * Documentation Update!
 * ** Added further documentation on "Plugin Parameters: Style Settings"
 * ** Removal of "Start Enabled?" setting.
 * *** The "NEW!" text will not appear on auto save slots. This is intentional.
 * * Feature Update!
 * ** Plugin Parameter > Auto Save Settings > Start Enabled? is now removed.
 * *** This is due to it going against what RPG Maker MZ is supposed to behave
 *     like, causing potential misunderstandings when other autosave related
 *     features are utilized. Update made by Olivia.
 * 
 * Version 1.07: October 14, 2021
 * * Bug Fixes!
 * ** Fixed bugs caused by Core Engine's digit grouping that would make dates
 *    appear incorrectly. Fix made by Olivia.
 * 
 * Version 1.06: July 16, 2021
 * * Compatibility Update!
 * ** Compatibility update with Party System's max member change to fit a non-
 *    default amount of party members inside of the window. Update by Irina.
 * 
 * Version 1.05: May 14, 2021
 * * Feature Update!
 * ** Confirmation windows now have rounded coordinates to prevent distortions.
 *    Update made by Arisu.
 * 
 * Version 1.04: March 12, 2021
 * * Bug Fixes!
 * ** Fixed a bug where using the Plugin Command to save the current slot would
 *    not reload properly if the audio file BGM was not synched. Fix made by
 *    Arisu.
 * 
 * Version 1.03: November 29, 2020
 * * Bug Fixes!
 * ** Displayed month should now show the correct numeric value.
 *    Fix made by Arisu.
 * 
 * Version 1.02: September 13, 2020
 * * Compatibility Update!
 * ** Better compatibility for SV Actor graphics.
 * * Documentation Update!
 * ** The Plugin Command 'Save: Set Description' now has updated documentation
 *    for the text codes that are parsed on the local level.
 * * Feature Update!
 * ** The Plugin Command 'Save: Set Description' will now parse text code
 *    data for \V[x], \N[x], \P[x] on a local save file level. Feature updated
 *    by Yanfly.
 * 
 * Version 1.01: September 6, 2020
 * * Bug Fixes!
 * ** Disabling confirmation windows no longer cause crashes.
 *    Fix made by Yanfly.
 * ** Plugin Commands for for setting descriptions and save images work despite
 *    save settings found in the database. Fix made by Yanfly.
 * ** Save Core no longer crashes when going to the Save/Load scenes without
 *    the Core Engine enabled.
 * ** Single and Locked save styles no longer crash the game when loading.
 *    Fix made by Olivia.
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
 * @command Separator_Begin
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AutosaveEnable
 * @text Autosave: Enable/Disable
 * @desc Enable or Disable Autosave
 * Requires Database => System 1 => [x] Enable Autosave
 *
 * @arg Enable:eval
 * @text Enable or Disable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable or disable autosave?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AutosaveRequest
 * @text Autosave: (Stage 1) Request
 * @desc Autosaves the game at current point if enabled.
 * Requires Database => System 1 => [x] Enable Autosave
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AutosaveExecute
 * @text Autosave: (Stage 2) Execute
 * @desc Executes autosaves the game at the current point.
 * Requires Database => System 1 => [x] Enable Autosave
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AutosaveForce
 * @text Autosave: (Stage 3) Force
 * @desc Force autosaves the game at the current point.
 * Requires Database => System 1 => [x] Enable Autosave
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Save
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SaveCurrentSlot
 * @text Save: Current Slot
 * @desc Process the game's current save at the current point.
 * Must be outside of battle and on the map.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SaveDescription
 * @text Save: Set Description
 * @desc Set the description text that will appear in the save files.
 *
 * @arg Text:str
 * @text Text
 * @desc Insert desired save description text here. 
 * Text codes supported. \V[x], \N[x], \P[x] are save local.
 * @default Text
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SavePicture
 * @text Save: Set Picture
 * @desc Set the picture that would appear in the save file.
 *
 * @arg Filename:str
 * @text Filename
 * @type file
 * @dir img/pictures/
 * @desc Input the filename here of the desired picture.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
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
 * @param SaveCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Save:struct
 * @text Save Settings
 * @type struct<Save>
 * @desc General save settings pertaining to the game.
 * @default {"General":"","SaveStyle:str":"standard","MaxSaveFiles:num":"20","AutosaveMaxCount:eval":"false","LocalMode":"","LocalMode:eval":"true","FilenameFmt:str":"file%1","ExtensionFmt:str":"%1.rmmzsave","ForageKey":"","KeyFmt:str":"rmmzsave.%1.%2","TestKey:str":"rmmzsave.test","Vocabulary":"","VocabLockedSaveSlot:str":"Pick a file to start a new game.","JavaScript":"","OnSaveSuccessJS:func":"\"// Declare Constants\\nconst scene = this;\\n\\n// Actions\\n\"","OnSaveFailureJS:func":"\"// Declare Constants\\nconst scene = this;\\n\\n// Actions\\n\"","OnLoadSuccessJS:func":"\"// Declare Constants\\nconst scene = this;\\n\\n// Actions\\n\"","OnLoadFailureJS:func":"\"// Declare Constants\\nconst scene = this;\\n\\n// Actions\\n\""}
 *
 * @param SaveConfirm:struct
 * @text Confirm Window
 * @parent Save:struct
 * @type struct<SaveConfirm>
 * @desc Settings regarding the Save Confirmation Window.
 * @default {"General":"","Enable:eval":"true","Duration:num":"1000","ConfirmRect:func":"\"const width = Graphics.boxWidth / 2;\\nconst height = this.calcWindowHeight(1, false);\\nconst x = (Graphics.width - width) / 2;\\nconst y = (Graphics.height - height) / 2;\\nreturn new Rectangle(x, y, width, height);\"","Vocabulary":"","VocabSaveSuccess:str":"Save Successful!","VocabSaveFailure:str":"Could not save!","VocabLoadFailure:str":"Could not load save file!"}
 *
 * @param Autosave:struct
 * @text Autoave Settings
 * @type struct<Autosave>
 * @desc Game settings related to autosave.
 * @default {"General":"","AutosaveType:str":"file0","StartEnabled:eval":"true","Requests":"","RequestsRequireSaveEnable:eval":"true","AfterBattle:eval":"true","AfterTransfer:eval":"true","AfterMenuCall:eval":"true","AfterExitMenu:eval":"true","JavaScript":"","OnAutosaveSuccessJS:func":"\"// Declare Constants\\nconst scene = this;\\n\\n// Actions\\n\"","OnAutosaveFailureJS:func":"\"// Declare Constants\\nconst scene = this;\\n\\n// Actions\\n\""}
 *
 * @param AutosaveConfirm:struct
 * @text Confirm Window
 * @parent Autosave:struct
 * @type struct<AutosaveConfirm>
 * @desc Settings regarding the Autosave Confirmation Window.
 * @default {"General":"","Enable:eval":"true","Duration:num":"1000","ScreenPosition:str":"lower right","Vocabulary":"","VocabAutosaveSuccess:str":"\\I[193]Autosaved!","VocabAutosaveFailure:str":"\\I[194]Autosave failed!"}
 *
 * @param AutosaveOption:struct
 * @text Options Settings
 * @parent Autosave:struct
 * @type struct<AutosaveOption>
 * @desc Options Menu settings regarding Autosave.
 * @default {"AddOption:eval":"true","AdjustRect:eval":"true","Name:str":"Autosave","Default:eval":"true"}
 *
 * @param StyleBreak
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ActorGraphic:str
 * @text Actor Graphic
 * @type select
 * @option None
 * @value none
 * @option Face
 * @value face
 * @option Map Sprite
 * @value sprite
 * @option Sideview Battler
 * @value svbattler
 * @desc Choose how the actor graphics appear in save menus.
 * @default face
 *
 * @param SaveMenuStyle:str
 * @text Save Menu Style
 * @type select
 * @option List
 * @value list
 * @option Vertical
 * @value vertical
 * @option Box
 * @value box
 * @option Large
 * @value large
 * @desc Choose what kind of style to use for the Save Menu.
 * @default box
 *
 * @param SaveMenu:struct
 * @text Style Settings
 * @parent SaveMenuStyle:str
 * @type struct<SaveMenu>
 * @desc Settings regarding the individual Save Menu styles.
 * @default {"General":"","LatestText:str":"NEW!","LatestColor:str":"#f49ac1","SpriteWidth:num":"48","SvBattlerWidth:num":"64","MakeSavefileInfoJS:func":"\"// Declare Constants\\nconst info = arguments[0];\\n\\n// Store Displayed Save Data\\ninfo.gold = $gameParty.gold();\\ninfo.svbattlers = $gameParty.svbattlersForSaveFile();\\ninfo.description = $gameSystem.getSaveDescription() || '';\\ninfo.picture = $gameSystem.getSavePicture() || '';\\n\\n// Return Save Info\\nreturn info;\"","List":"","ListRows:num":"4","ListCols:num":"1","ListContentsJS:func":"\"// Declare Variables\\nconst info = arguments[0];\\nconst rect = arguments[1];\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst c1 = ColorManager.dimColor1();\\nconst c2 = ColorManager.dimColor2();\\n\\n// Draw Actors\\nconst minimumScale = true;\\nthis.drawCenteredPicture(info.picture, rect.x, rect.y, rect.width, rect.height, minimumScale);\\nlet ch = rect.height;\\nif (this.actorStyle() === 'sprite') {\\n    ch -= lineHeight - 8;\\n} else if (this.actorStyle() === 'svbattler') {\\n    ch -= lineHeight - 12;\\n}\\nthis.drawActors(info, rect.x + padding, rect.y, rect.width - padding * 2, ch);\\n\\n// Draw Gradients\\nthis.contents.gradientFillRect(rect.x, rect.y, rect.width, lineHeight, c2, c1, true);\\nif (info.gold || info.description) {\\n    const gy = rect.y + rect.height - lineHeight;\\n    this.contents.gradientFillRect(rect.x, gy, rect.width, lineHeight, c1, c2, true);\\n}\\n\\n// Draw Data\\nthis.contents.fontSize = 18;\\ny = rect.y;\\nthis.drawPlaytime(info, rect.x + padding, y, rect.width - padding * 2, 'right');\\nthis.drawTimestamp(info, rect.x + padding, y, rect.width - padding * 2, 'center');\\ny = rect.y + rect.height - lineHeight;\\nif (info.gold) {\\n    this.drawCurrency(info, rect.x + padding, y, rect.width - padding * 2);\\n}\\n\\n// Draw Description\\ny = rect.y + rect.height - lineHeight;\\nthis.drawDescription(info, rect.x + padding, y, rect.width - padding * 2, 'left');\"","ListFileDataJS:func":"\"// Declare Constants\\nconst savefileId = arguments[0];\\nconst rect = arguments[1];\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst y2 = rect.y + ((rect.height - lineHeight) / 2);\\n\\n// Draw File Data\\nthis.drawTitle(savefileId, rect.x + padding, rect.y);\\nthis.drawLatestMarker(savefileId, rect.x + padding, y2);\"","Vertical":"","VertRows:num":"1","VertCols:num":"3","VertContentsJS:func":"\"// Declare Variables\\nconst info = arguments[0];\\nconst rect = arguments[1];\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst c1 = ColorManager.dimColor1();\\nconst c2 = ColorManager.dimColor2();\\n\\n// Draw Actors\\nconst minimumScale = true;\\nthis.drawCenteredPicture(info.picture, rect.x, rect.y, rect.width, rect.height, minimumScale);\\nconst ch = this.actorStyle() === 'face' ? ImageManager.faceHeight : ImageManager.saveMenuSvBattlerWidth;\\nconst cy = rect.y + ((rect.height - ch) / 2);\\nthis.drawActors(info, rect.x + padding, cy, rect.width - padding * 2, ch);\\n\\n// Draw Gradients\\nthis.contents.gradientFillRect(rect.x, rect.y, rect.width, lineHeight, c2, c1, true);\\nconst gy = rect.y + rect.height - lineHeight * 2;\\nthis.contents.gradientFillRect(rect.x, gy, rect.width, lineHeight * 2, c1, c2, true);\\n\\n// Draw Description\\ny = rect.y + lineHeight * 2;\\nthis.setWordWrap(true);\\nthis.drawDescription(info, rect.x + padding, y, rect.width - padding * 2, 'left');\\nthis.resetWordWrap(false);\\n\\n// Draw Data\\nthis.contents.fontSize = 18;\\ny = rect.y + rect.height - lineHeight;\\nthis.drawTimestamp(info, rect.x + padding, y, rect.width - padding * 2, 'center');\\ny -= lineHeight;\\nthis.drawPlaytime(info, rect.x + padding, y, rect.width - padding * 2, 'center');\\nif (info.gold) {\\n    y -= lineHeight;\\n    this.drawCurrency(info, rect.x + padding, y, rect.width - padding * 2);\\n}\"","VertFileDataJS:func":"\"// Declare Constants\\nconst savefileId = arguments[0];\\nconst rect = arguments[1];\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\n\\n// Draw File Data\\nthis.drawTitle(savefileId, rect.x + padding, rect.y);\\nconst x2 = rect.x + rect.width - padding - this.textWidth(TextManager.latestSave);\\nthis.drawLatestMarker(savefileId, x2, rect.y);\"","Box":"","BoxRows:num":"2","BoxCols:num":"3","BoxContentsJS:func":"\"// Declare Variables\\nconst info = arguments[0];\\nconst rect = arguments[1];\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst c1 = ColorManager.dimColor1();\\nconst c2 = ColorManager.dimColor2();\\n\\n// Draw Actors\\nconst minimumScale = false;\\nthis.drawCenteredPicture(info.picture, rect.x, rect.y, rect.width, rect.height, minimumScale);\\nconst rh = rect.height - lineHeight * 3;\\nconst ch = ImageManager.faceHeight;\\nconst cy = rect.y + ((rh - ch) / 2) + lineHeight;\\nthis.drawActors(info, rect.x + 1, cy, rect.width - 2, ch);\\n\\n// Draw Gradients\\nthis.contents.gradientFillRect(rect.x, rect.y, rect.width, lineHeight, c2, c1, true);\\nconst gy = rect.y + rect.height - lineHeight * 2;\\nthis.contents.gradientFillRect(rect.x, gy, rect.width, lineHeight * 2, c1, c2, true);\\n\\n// Draw Data\\nthis.contents.fontSize = 18;\\ny = rect.y + lineHeight;\\nthis.contents.gradientFillRect(rect.x, y, rect.width, lineHeight, c2, c1, false);\\nthis.drawTimestamp(info, rect.x + padding, y, rect.width - padding * 2, 'right');\\ny += lineHeight;\\nconst hw = rect.width / 2;\\nthis.contents.gradientFillRect(rect.x + hw, y, hw, lineHeight, c2, c1, false);\\nthis.drawPlaytime(info, rect.x + padding, y, rect.width - padding * 2, 'right');\\nif (info.gold) {\\n    // Ignore drawing gold in this style\\n    // y = rect.y + rect.height - lineHeight * 3;\\n    // this.drawCurrency(info, rect.x + padding, y, rect.width - padding * 2);\\n}\\n\\n// Draw Description\\ny = rect.y + rect.height - lineHeight * 2;\\nthis.setWordWrap(true);\\nthis.drawDescription(info, rect.x + padding, y, rect.width - padding * 2, 'left');\\nthis.resetWordWrap(false);\"","BoxFileDataJS:func":"\"// Declare Constants\\nconst savefileId = arguments[0];\\nconst rect = arguments[1];\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\n\\n// Draw File Data\\nthis.drawTitle(savefileId, rect.x + padding, rect.y);\\nconst x2 = rect.x + rect.width - padding - this.textWidth(TextManager.latestSave);\\nthis.drawLatestMarker(savefileId, x2, rect.y);\"","Large":"","LargeRows:num":"1","LargeCols:num":"1","LargeContentsJS:func":"\"// Declare Variables\\nconst info = arguments[0];\\nconst rect = arguments[1];\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst c1 = ColorManager.dimColor1();\\nconst c2 = ColorManager.dimColor2();\\n\\n// Draw Actors\\nconst minimumScale = false;\\nthis.drawCenteredPicture(info.picture, rect.x, rect.y, rect.width, rect.height, minimumScale);\\nconst ch = this.actorStyle() === 'face' ? ImageManager.faceHeight : ImageManager.saveMenuSvBattlerWidth;\\nconst cy = rect.y + ((rect.height - ch) / 2);\\nthis.drawActors(info, rect.x + padding, cy, rect.width - padding * 2, ch);\\n\\n// Draw Gradients\\nthis.contents.gradientFillRect(rect.x, rect.y, rect.width, lineHeight, c2, c1, true);\\nconst gy = rect.y + rect.height - lineHeight;\\nthis.contents.gradientFillRect(rect.x, gy, rect.width, lineHeight, c1, c2, true);\\n\\n// Draw Description\\ny = rect.y + lineHeight * 1.5;\\nthis.setWordWrap(true);\\nthis.drawDescription(info, rect.x + padding * 4, y, rect.width - padding * 8, 'left');\\nthis.resetWordWrap(false);\\n\\n// Draw Data\\nthis.contents.fontSize = 18;\\nthis.drawTimestamp(info, rect.x + padding, rect.y, rect.width - padding * 2, 'center');\\ny = rect.y + rect.height - lineHeight;\\nthis.drawPlaytime(info, rect.x + padding, y, rect.width - padding * 2, 'center');\\nif (info.gold) {\\n    this.drawCurrency(info, rect.x + padding, y, rect.width - padding * 2);\\n}\"","LargeFileDataJS:func":"\"// Declare Constants\\nconst savefileId = arguments[0];\\nconst rect = arguments[1];\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\n\\n// Draw File Data\\nthis.drawTitle(savefileId, rect.x + padding, rect.y);\\nconst x2 = rect.x + rect.width - padding - this.textWidth(TextManager.latestSave);\\nthis.drawLatestMarker(savefileId, x2, rect.y);\""}
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
 * General Save Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Save:
 *
 * @param General
 *
 * @param SaveStyle:str
 * @text Save Style
 * @parent General
 * @type select
 * @option Standard: Save freely in any slot.
 * @value standard
 * @option Slot-Locked: Select one dedicated slot at New Game.
 * @value locked
 * @option Single: Only one slot is available for the game.
 * @value single
 * @desc Select a save style for the game. Some of these options
 * may alter other Plugin Parameter settings.
 * @default standard
 *
 * @param MaxSaveFiles:num
 * @text Max Save Files
 * @parent General
 * @desc Maximum number of save files for the game.
 * @default 20
 *
 * @param AutosaveMaxCount:eval
 * @text Autosave Counts?
 * @parent General
 * @type boolean
 * @on Counts Towards Max
 * @off Doesn't Count
 * @desc Count the autosave file towards the max count?
 * @default false
 *
 * @param LocalMode
 * @text Local Mode
 *
 * @param LocalMode:eval
 * @text Local Mode?
 * @parent LocalMode
 * @type boolean
 * @on Local File
 * @off Forage Key
 * @desc When running the game on client, use the Local Mode of
 * saving via files or store saves to forage keys?
 * @default true
 *
 * @param FilenameFmt:str
 * @text Filename Format
 * @parent LocalMode
 * @desc Filename format for save files.
 * %1 - Save File ID
 * @default file%1
 *
 * @param ExtensionFmt:str
 * @text Extension Format
 * @parent LocalMode
 * @desc Filename extension format for save files.
 * %1 - Save Name
 * @default %1.rmmzsave
 *
 * @param ForageKey
 * @text Forage Key
 *
 * @param KeyFmt:str
 * @text Forage Key Format
 * @parent ForageKey
 * @desc Forage Key format when saving to memory.
 * %1 - Game ID, %2 - Save Name
 * @default rmmzsave.%1.%2
 *
 * @param TestKey:str
 * @text Forage Key Test
 * @parent ForageKey
 * @desc Key used to test if saving a forage key is possible.
 * @default rmmzsave.test
 *
 * @param Vocabulary
 *
 * @param VocabLockedSaveSlot:str
 * @text Help: Slot-Locked
 * @parent Vocabulary
 * @desc Help description used for initial slot-locked selection.
 * @default Pick a file to start a new game.
 *
 * @param JavaScript
 *
 * @param OnSaveSuccessJS:func
 * @text JS: On Save Success
 * @parent JavaScript
 * @type note
 * @desc Code to perform when a save is successful.
 * @default "// Declare Constants\nconst scene = this;\n\n// Actions\n"
 *
 * @param OnSaveFailureJS:func
 * @text JS: On Save Failure
 * @parent JavaScript
 * @type note
 * @desc Code to perform when a save has failed.
 * @default "// Declare Constants\nconst scene = this;\n\n// Actions\n"
 *
 * @param OnLoadSuccessJS:func
 * @text JS: On Load Success
 * @parent JavaScript
 * @type note
 * @desc Code to perform when a load is successful.
 * @default "// Declare Constants\nconst scene = this;\n\n// Actions\n"
 *
 * @param OnLoadFailureJS:func
 * @text JS: On Load Failure
 * @parent JavaScript
 * @type note
 * @desc Code to perform when a load has failed.
 * @default "// Declare Constants\nconst scene = this;\n\n// Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Save Confirm Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SaveConfirm:
 *
 * @param General
 *
 * @param Enable:eval
 * @text Enable Window?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc Enable the Save Confirmation Window?
 * @default true
 *
 * @param Duration:num
 * @text Pop Up Duration
 * @parent General
 * @type number
 * @min 1
 * @desc How long should the window be open for before closing?
 * Insert the time in milliseconds.
 * @default 1000
 *
 * @param ConfirmRect:func
 * @text JS: X, Y, W, H
 * @parent General
 * @type note
 * @desc Code used to determine the dimensions of the 
 * Save Confirmation Window.
 * @default "const width = Graphics.boxWidth / 2;\nconst height = this.calcWindowHeight(1, false);\nconst x = (Graphics.width - width) / 2;\nconst y = (Graphics.height - height) / 2;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param Vocabulary
 *
 * @param VocabSaveSuccess:str
 * @text Pop Up: Save Success
 * @parent Vocabulary
 * @desc Text used for a "Save Success" message popup.
 * Text codes are allowed.
 * @default Save Successful!
 *
 * @param VocabSaveFailure:str
 * @text Pop Up: Save Failure
 * @parent Vocabulary
 * @desc Text used for a "Save Failure" message popup.
 * Text codes are allowed.
 * @default Could not save!
 *
 * @param VocabLoadFailure:str
 * @text Pop Up: Load Failure
 * @parent Vocabulary
 * @desc Text used for a "Load Failure" message popup.
 * Text codes are allowed.
 * @default Could not load save file!
 *
 */
/* ----------------------------------------------------------------------------
 * Autosave Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Autosave:
 *
 * @param General
 *
 * @param AutosaveType:str
 * @text Autosave Type
 * @parent General
 * @type select
 * @option Autosave File: Dedicated file for autosaves.
 * @value file0
 * @option Current File: Overwrites the current save file.
 * @value current
 * @option Autosave File + Current File: Both of the above.
 * @value both
 * @desc Select autosave type.
 * Requires Database => System 1 => [x] Enable Autosave
 * @default file0
 *
 * @param Requests
 *
 * @param RequestsRequireSaveEnable:eval
 * @text Requires Save Enable?
 * @parent Requests
 * @type boolean
 * @on Requires Save Enable
 * @off Doesn't Require
 * @desc Autosave requests require Saving to be enabled?
 * @default true
 *
 * @param AfterBattle:eval
 * @text Request after Battle?
 * @parent Requests
 * @type boolean
 * @on Autosave
 * @off Don't
 * @desc Requests an autosave after battle?
 * @default true
 *
 * @param AfterTransfer:eval
 * @text Request on Transfer?
 * @parent Requests
 * @type boolean
 * @on Autosave
 * @off Don't
 * @desc Requests an autosave after a map transfer?
 * @default true
 *
 * @param AfterMenuCall:eval
 * @text Request on Menu Open?
 * @parent Requests
 * @type boolean
 * @on Autosave
 * @off Don't
 * @desc Requests an autosave after opening the main menu?
 * @default true
 *
 * @param AfterExitMenu:eval
 * @text Request on Menu Exit?
 * @parent Requests
 * @type boolean
 * @on Autosave
 * @off Don't
 * @desc Requests an autosave after exiting the main menu?
 * @default true
 *
 * @param JavaScript
 *
 * @param OnAutosaveSuccessJS:func
 * @text JS: On Success
 * @parent JavaScript
 * @type note
 * @desc Code to perform when an autosave is successful.
 * @default "// Declare Constants\nconst scene = this;\n\n// Actions\n"
 *
 * @param OnAutosaveFailureJS:func
 * @text JS: On Failure
 * @parent JavaScript
 * @type note
 * @desc Code to perform when an autosave has failed.
 * @default "// Declare Constants\nconst scene = this;\n\n// Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Autosave Confirm Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~AutosaveConfirm:
 *
 * @param General
 *
 * @param Enable:eval
 * @text Enable Window?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc Enable the Autoave Confirmation Window?
 * @default true
 *
 * @param Duration:num
 * @text Pop Up Duration
 * @parent General
 * @type number
 * @min 1
 * @desc How long should the window be open for before closing?
 * Insert the time in milliseconds.
 * @default 1000
 *
 * @param ScreenPosition:str
 * @text Screen Position
 * @parent General
 * @type select
 * @option Lower Left
 * @value lower left
 * @option Lower Center
 * @value lower center
 * @option Lower Right
 * @value lower right
 * @option Middle Left
 * @value middle left
 * @option Middle Center
 * @value middle center
 * @option Middle Right
 * @value middle right
 * @option Upper Left
 * @value upper left
 * @option Upper Center
 * @value upper center
 * @option Upper Right
 * @value upper right
 * @desc Where does this window appear on the screen?
 * @default lower right
 *
 * @param Vocabulary
 *
 * @param VocabAutosaveSuccess:str
 * @text Pop Up: Save Success
 * @parent Vocabulary
 * @desc Text used for an "Autosave Success" message popup.
 * Text codes are allowed.
 * @default \I[193]Autosaved!
 *
 * @param VocabAutosaveFailure:str
 * @text Pop Up: Save Failure
 * @parent Vocabulary
 * @desc Text used for an "Autosave Failure" message popup.
 * Text codes are allowed.
 * @default \I[194]Autosave failed!
 *
 */
/* ----------------------------------------------------------------------------
 * Autosave Options Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~AutosaveOption:
 *
 * @param AddOption:eval
 * @text Add Option?
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Autosave' option to the Options menu?
 * @default true
 *
 * @param AdjustRect:eval
 * @text Adjust Window Height
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param Name:str
 * @text Option Name
 * @desc Command name of the option.
 * @default Autosave
 *
 * @param Default:eval
 * @text Default Value
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Determine the default value of this option.
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Save Menu Style Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SaveMenu:
 *
 * @param General
 *
 * @param LatestText:str
 * @text Latest Text
 * @parent General
 * @desc Text used to depict latest save file.
 * @default NEW!
 *
 * @param LatestColor:str
 * @text Latest Color
 * @parent General
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #f49ac1
 *
 * @param SpriteWidth:num
 * @text Sprite Width
 * @parent General
 * @type number
 * @desc Pixel width of map sprites when drawn in the Save Menu.
 * @default 48
 *
 * @param SvBattlerWidth:num
 * @text SV Battler Width
 * @parent General
 * @type number
 * @desc Pixel width of sv battlers when drawn in the Save Menu.
 * @default 64
 *
 * @param MakeSavefileInfoJS:func
 * @text JS: Save Display Info
 * @parent General
 * @type note
 * @desc Code that, upon saving, determines which info is quickly stored for displaying.
 * @default "// Declare Constants\nconst info = arguments[0];\n\n// Store Displayed Save Data\ninfo.gold = $gameParty.gold();\ninfo.svbattlers = $gameParty.svbattlersForSaveFile();\ninfo.description = $gameSystem.getSaveDescription() || '';\ninfo.picture = $gameSystem.getSavePicture() || '';\n\n// Return Save Info\nreturn info;"
 *
 * @param List
 * @text List Style
 *
 * @param ListRows:num
 * @text Rows
 * @parent List
 * @type number
 * @min 1
 * @desc Number of rows for this style.
 * @default 4
 *
 * @param ListCols:num
 * @text Columns
 * @parent List
 * @type number
 * @min 1
 * @desc Number of column for this style.
 * @default 1
 *
 * @param ListContentsJS:func
 * @text JS: Draw Contents
 * @parent List
 * @type note
 * @desc Code on how to draw the contents for this style.
 * @default "// Declare Variables\nconst info = arguments[0];\nconst rect = arguments[1];\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst c1 = ColorManager.dimColor1();\nconst c2 = ColorManager.dimColor2();\n\n// Draw Actors\nconst minimumScale = true;\nthis.drawCenteredPicture(info.picture, rect.x, rect.y, rect.width, rect.height, minimumScale);\nlet ch = rect.height;\nif (this.actorStyle() === 'sprite') {\n    ch -= lineHeight - 8;\n} else if (this.actorStyle() === 'svbattler') {\n    ch -= lineHeight - 12;\n}\nthis.drawActors(info, rect.x + padding, rect.y, rect.width - padding * 2, ch);\n\n// Draw Gradients\nthis.contents.gradientFillRect(rect.x, rect.y, rect.width, lineHeight, c2, c1, true);\nif (info.gold || info.description) {\n    const gy = rect.y + rect.height - lineHeight;\n    this.contents.gradientFillRect(rect.x, gy, rect.width, lineHeight, c1, c2, true);\n}\n\n// Draw Data\nthis.contents.fontSize = 18;\ny = rect.y;\nthis.drawPlaytime(info, rect.x + padding, y, rect.width - padding * 2, 'right');\nthis.drawTimestamp(info, rect.x + padding, y, rect.width - padding * 2, 'center');\ny = rect.y + rect.height - lineHeight;\nif (info.gold) {\n    this.drawCurrency(info, rect.x + padding, y, rect.width - padding * 2);\n}\n\n// Draw Description\ny = rect.y + rect.height - lineHeight;\nthis.drawDescription(info, rect.x + padding, y, rect.width - padding * 2, 'left');"
 *
 * @param ListFileDataJS:func
 * @text JS: Draw File Data
 * @parent List
 * @type note
 * @desc Code on how to draw the file data for this style.
 * @default "// Declare Constants\nconst savefileId = arguments[0];\nconst rect = arguments[1];\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst y2 = rect.y + ((rect.height - lineHeight) / 2);\n\n// Draw File Data\nthis.drawTitle(savefileId, rect.x + padding, rect.y);\nthis.drawLatestMarker(savefileId, rect.x + padding, y2);"
 *
 * @param Vertical
 * @text Vertical Style
 *
 * @param VertRows:num
 * @text Rows
 * @parent Vertical
 * @type number
 * @min 1
 * @desc Number of rows for this style.
 * @default 1
 *
 * @param VertCols:num
 * @text Columns
 * @parent Vertical
 * @type number
 * @min 1
 * @desc Number of column for this style.
 * @default 3
 *
 * @param VertContentsJS:func
 * @text JS: Draw Contents
 * @parent Vertical
 * @type note
 * @desc Code on how to draw the contents for this style.
 * @default "// Declare Variables\nconst info = arguments[0];\nconst rect = arguments[1];\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst c1 = ColorManager.dimColor1();\nconst c2 = ColorManager.dimColor2();\n\n// Draw Actors\nconst minimumScale = true;\nthis.drawCenteredPicture(info.picture, rect.x, rect.y, rect.width, rect.height, minimumScale);\nconst ch = this.actorStyle() === 'face' ? ImageManager.faceHeight : ImageManager.saveMenuSvBattlerWidth;\nconst cy = rect.y + ((rect.height - ch) / 2);\nthis.drawActors(info, rect.x + padding, cy, rect.width - padding * 2, ch);\n\n// Draw Gradients\nthis.contents.gradientFillRect(rect.x, rect.y, rect.width, lineHeight, c2, c1, true);\nconst gy = rect.y + rect.height - lineHeight * 2;\nthis.contents.gradientFillRect(rect.x, gy, rect.width, lineHeight * 2, c1, c2, true);\n\n// Draw Description\ny = rect.y + lineHeight * 2;\nthis.setWordWrap(true);\nthis.drawDescription(info, rect.x + padding, y, rect.width - padding * 2, 'left');\nthis.resetWordWrap(false);\n\n// Draw Data\nthis.contents.fontSize = 18;\ny = rect.y + rect.height - lineHeight;\nthis.drawTimestamp(info, rect.x + padding, y, rect.width - padding * 2, 'center');\ny -= lineHeight;\nthis.drawPlaytime(info, rect.x + padding, y, rect.width - padding * 2, 'center');\nif (info.gold) {\n    y -= lineHeight;\n    this.drawCurrency(info, rect.x + padding, y, rect.width - padding * 2);\n}"
 *
 * @param VertFileDataJS:func
 * @text JS: Draw File Data
 * @parent Vertical
 * @type note
 * @desc Code on how to draw the file data for this style.
 * @default "// Declare Constants\nconst savefileId = arguments[0];\nconst rect = arguments[1];\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\n\n// Draw File Data\nthis.drawTitle(savefileId, rect.x + padding, rect.y);\nconst x2 = rect.x + rect.width - padding - this.textWidth(TextManager.latestSave);\nthis.drawLatestMarker(savefileId, x2, rect.y);"
 *
 * @param Box
 * @text Box Style
 *
 * @param BoxRows:num
 * @text Rows
 * @parent Box
 * @type number
 * @min 1
 * @desc Number of rows for this style.
 * @default 2
 *
 * @param BoxCols:num
 * @text Columns
 * @parent Box
 * @type number
 * @min 1
 * @desc Number of column for this style.
 * @default 3
 *
 * @param BoxContentsJS:func
 * @text JS: Draw Contents
 * @parent Box
 * @type note
 * @desc Code on how to draw the contents for this style.
 * @default "// Declare Variables\nconst info = arguments[0];\nconst rect = arguments[1];\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst c1 = ColorManager.dimColor1();\nconst c2 = ColorManager.dimColor2();\n\n// Draw Actors\nconst minimumScale = false;\nthis.drawCenteredPicture(info.picture, rect.x, rect.y, rect.width, rect.height, minimumScale);\nconst rh = rect.height - lineHeight * 3;\nconst ch = ImageManager.faceHeight;\nconst cy = rect.y + ((rh - ch) / 2) + lineHeight;\nthis.drawActors(info, rect.x + 1, cy, rect.width - 2, ch);\n\n// Draw Gradients\nthis.contents.gradientFillRect(rect.x, rect.y, rect.width, lineHeight, c2, c1, true);\nconst gy = rect.y + rect.height - lineHeight * 2;\nthis.contents.gradientFillRect(rect.x, gy, rect.width, lineHeight * 2, c1, c2, true);\n\n// Draw Data\nthis.contents.fontSize = 18;\ny = rect.y + lineHeight;\nthis.contents.gradientFillRect(rect.x, y, rect.width, lineHeight, c2, c1, false);\nthis.drawTimestamp(info, rect.x + padding, y, rect.width - padding * 2, 'right');\ny += lineHeight;\nconst hw = rect.width / 2;\nthis.contents.gradientFillRect(rect.x + hw, y, hw, lineHeight, c2, c1, false);\nthis.drawPlaytime(info, rect.x + padding, y, rect.width - padding * 2, 'right');\nif (info.gold) {\n    // Ignore drawing gold in this style\n    // y = rect.y + rect.height - lineHeight * 3;\n    // this.drawCurrency(info, rect.x + padding, y, rect.width - padding * 2);\n}\n\n// Draw Description\ny = rect.y + rect.height - lineHeight * 2;\nthis.setWordWrap(true);\nthis.drawDescription(info, rect.x + padding, y, rect.width - padding * 2, 'left');\nthis.resetWordWrap(false);"
 *
 * @param BoxFileDataJS:func
 * @text JS: Draw File Data
 * @parent Box
 * @type note
 * @desc Code on how to draw the file data for this style.
 * @default "// Declare Constants\nconst savefileId = arguments[0];\nconst rect = arguments[1];\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\n\n// Draw File Data\nthis.drawTitle(savefileId, rect.x + padding, rect.y);\nconst x2 = rect.x + rect.width - padding - this.textWidth(TextManager.latestSave);\nthis.drawLatestMarker(savefileId, x2, rect.y);"
 *
 * @param Large
 * @text Large Style
 *
 * @param LargeRows:num
 * @text Rows
 * @parent Large
 * @type number
 * @min 1
 * @desc Number of rows for this style.
 * @default 1
 *
 * @param LargeCols:num
 * @text Columns
 * @parent Large
 * @type number
 * @min 1
 * @desc Number of column for this style.
 * @default 1
 *
 * @param LargeContentsJS:func
 * @text JS: Draw Contents
 * @parent Large
 * @type note
 * @desc Code on how to draw the contents for this style.
 * @default "// Declare Variables\nconst info = arguments[0];\nconst rect = arguments[1];\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst c1 = ColorManager.dimColor1();\nconst c2 = ColorManager.dimColor2();\n\n// Draw Actors\nconst minimumScale = false;\nthis.drawCenteredPicture(info.picture, rect.x, rect.y, rect.width, rect.height, minimumScale);\nconst ch = this.actorStyle() === 'face' ? ImageManager.faceHeight : ImageManager.saveMenuSvBattlerWidth;\nconst cy = rect.y + ((rect.height - ch) / 2);\nthis.drawActors(info, rect.x + padding, cy, rect.width - padding * 2, ch);\n\n// Draw Gradients\nthis.contents.gradientFillRect(rect.x, rect.y, rect.width, lineHeight, c2, c1, true);\nconst gy = rect.y + rect.height - lineHeight;\nthis.contents.gradientFillRect(rect.x, gy, rect.width, lineHeight, c1, c2, true);\n\n// Draw Description\ny = rect.y + lineHeight * 1.5;\nthis.setWordWrap(true);\nthis.drawDescription(info, rect.x + padding * 4, y, rect.width - padding * 8, 'left');\nthis.resetWordWrap(false);\n\n// Draw Data\nthis.contents.fontSize = 18;\nthis.drawTimestamp(info, rect.x + padding, rect.y, rect.width - padding * 2, 'center');\ny = rect.y + rect.height - lineHeight;\nthis.drawPlaytime(info, rect.x + padding, y, rect.width - padding * 2, 'center');\nif (info.gold) {\n    this.drawCurrency(info, rect.x + padding, y, rect.width - padding * 2);\n}"
 *
 * @param LargeFileDataJS:func
 * @text JS: Draw File Data
 * @parent Large
 * @type note
 * @desc Code on how to draw the file data for this style.
 * @default "// Declare Constants\nconst savefileId = arguments[0];\nconst rect = arguments[1];\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\n\n// Draw File Data\nthis.drawTitle(savefileId, rect.x + padding, rect.y);\nconst x2 = rect.x + rect.width - padding - this.textWidth(TextManager.latestSave);\nthis.drawLatestMarker(savefileId, x2, rect.y);"
 *
 */
//=============================================================================

const _0x1c260b=_0x1537;(function(_0x5ed26e,_0x295928){const _0xfe13b1=_0x1537,_0x4a21ec=_0x5ed26e();while(!![]){try{const _0x3063df=parseInt(_0xfe13b1(0x19d))/0x1*(parseInt(_0xfe13b1(0x10e))/0x2)+parseInt(_0xfe13b1(0x1d0))/0x3*(-parseInt(_0xfe13b1(0x11f))/0x4)+parseInt(_0xfe13b1(0x1e3))/0x5+-parseInt(_0xfe13b1(0xf0))/0x6+-parseInt(_0xfe13b1(0x291))/0x7*(-parseInt(_0xfe13b1(0x101))/0x8)+parseInt(_0xfe13b1(0xf7))/0x9*(parseInt(_0xfe13b1(0x139))/0xa)+parseInt(_0xfe13b1(0x17f))/0xb*(-parseInt(_0xfe13b1(0x156))/0xc);if(_0x3063df===_0x295928)break;else _0x4a21ec['push'](_0x4a21ec['shift']());}catch(_0x50e29c){_0x4a21ec['push'](_0x4a21ec['shift']());}}}(_0xa205,0x8d861));function _0xa205(){const _0x44f7a8=['GTAhw','Scene_Menu_create','#%1','_stored_latestSavefile','addSaveCoreAutosaveCommand','createSaveConfirmationWindow','Scene_Title_commandContinue','setGlobalValue','LaWZt','9161480RqXmIj','_saveCorePluginCommandSave','Window_SavefileList_setMode','ExtensionFmt','drawActorFaces','resetWordWrap','addLoadListener','both','close','SaveDescription','XIqpc','maxCols','drawListStyleFileData','114tmZDQp','Scene_Base_onAutosaveFailure','picture','commandSaveLocked','Filename','large','autosaveOption','clear','registerCommand','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','fadeOutAll','Scene_Base_requestAutosave','drawActorSprites','createGameObjects','FilenameFmt','onDatabaseLoaded','playLoad','116sJlacn','SaveMenu','isAutosaveConfirmWindowEnabled','ParseTextCodes','GlobalSwitches','drawVerticalStyleContents','addChild','terminate','drawBoxStyleFileData','makeSavename','onMapLoaded','shouldAutosave','Autosave','box','saveConfirmationWindowRect','setupNewGame','closeSaveConfirmationWindow','setSavefileId','Scene_Map_onMapLoaded','RequestsRequireSaveEnable','BoxContentsJS','savefileIdToIndex','LargeFileDataJS','onLoadSuccess','ListRows','addGeneralOptions','10zXeJbw','maxCommands','saveSuccess','isSaveConfirmWindowEnabled','svbattler','autosaveSuccess','playBuzzer','RemoveSaveCoreCache','maxSavefiles','Scene_Map_onTransferEnd','commandNewGameSaveCoreLocked','STRUCT','open','onSaveSuccess','getMinutes','globalValue','svActorHorzCells','setFadeSpeed','drawLargeStyleFileData','TestKey','useDigitGrouping','ScreenPosition','RDxjY','onBeforeSave','then','setSetSuccess','length','_SaveCoreSettings','file0','16657488qBPXJu','SvBattlerWidth','executeSave','Enable','ukpqA','smoothSelect','file','create','VertContentsJS','kNkWV','OnAutosaveSuccessJS','isNwjs','Scene_Save_onSaveFailure','loadSvActor','BoxRows','updatePosition','numVisibleRows','Scene_Map_needsFadeIn','face','GEzik','drawPicture','OnLoadSuccessJS','faceWidth','Scene_Save_helpWindowText','onSaveCoreSaveFailure','mainCommandWidth','_colorCache','Game_System_initialize','call','format','callMenu','Game_Switches_setValue','round','aYJmv','gradientFillRect','width','parse','_listWindow','closeAutosaveConfirmationWindow','wuetj','STR','22csTKdF','saveStyle','makeData','onLoadFailure','ceil','menuStyle','LargeRows','loadPicture','makeSavefileInfo','catch','KeyFmt','blt','Scene_Base_onAutosaveSuccess','SaveStyle','_commandWindow','isEnabled','initialize','match','createAutosaveConfirmationWindow','drawTimestamp','drawFileData','autosaveEnabled','OnLoadFailureJS','saveDescription','Duration','saveFailure','getColorDataFromPluginParameters','drawCharacter','left','openness','16776GNZKBf','version','svActorVertCells','AdjustRect','push','dimColor1','autosaveConfirmationWindowRect','LargeContentsJS','drawVerticalStyleFileData','name','_autosaveConfirmWindow','exitMenu','inBattle','setSavePicture','SavePicture','Game_Variables_value','rgZLL','value','RWLXs','isEventTest','jtHOA','vertical','includes','autosaveFailure','drawItem','autosaveType','Default','getTimestamp','BoxCols','AMJDz','EVAL','current','description','isAutosaveCompatible','onSaveCoreSaveSuccess','loadFailureConfirmationWindow','applyData','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','parameters','AfterMenuCall','gameId','locked','join','isBattleTest','drawBackground','activateListWindow','upOzY','Scene_Title_terminate','VisuMZ_0_CoreEngine','czURA','savePicture','37461pcyJwy','_loadSuccess','changePaintOpacity','FVlbe','VXuIJ','initSaveCore','drawTextEx','drawBoxStyleContents','commandNewGame','variables','playSave','windowPadding','autosave','drawCenteredPicture','executeAutosave','goto','_fadeSpeed','cfmnf','DataManager_makeSavefileInfo','3821565yudqEv','VocabAutosaveFailure','Scene_Options_maxCommands','{{%1}}','split','AutosaveForce','transfer','AfterExitMenu','forageTestKey','playtime','openSaveConfirmationWindow','Mcpyn','opacity','LatestColor','SaveConfirm','AutosaveEnable','refresh','DataManager_createGameObjects','ActorGraphic','height','getSeconds','forageKey','CqtYO','gold','WJtHJ','drawActors','contents','openAutosaveConfirmationWindow','pickLockedSaveSlot','Window_Options_addGeneralOptions','BrgGp','latestSavefile','saveGame','etrne','savefileInfo','onSaveFailure','trim','fadeIn','Scene_Title_commandNewGame','onTransferEnd','SaveMenuStyle','YbvEw','Scene_Load_onLoadSuccess','OnSaveSuccessJS','setWordWrap','selectSavefile','drawCurrencyValue','status','saveMenuSvBattlerWidth','getHours','advanced','Game_Switches_value','drawContents','OnSaveFailureJS','ConfirmRect','onSaveCoreLoadFailure','isLocalMode','needsFadeIn','removeChild','Scene_Menu_commandSave','globalVariables','currencyUnit','_bypassAutosave','hqTNk','isGlobal','JewgH','drawSvBattlerSprites','actorName','isAutosaveEnabled','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','onAfterLoad','saveCurrentSlot','commandContinue','setSaveDescription','hWfIY','min','_success','dimColor2','_processingAutosave','_pickLockedSaveSlot','number','Scene_Save_executeSave','AfterTransfer','tLjMw','drawListStyleContents','updateFade','right','onAutosaveSuccess','onAutosaveFailure','MaxSaveFiles','setValue','ARRAYJSON','globalSwitches','saveMenuSpriteWidth','Save','switches','_scene','replace','forceAutosave','changeTextColor','loadGame','MAX_BATTLE_MEMBERS','indexToSavefileId','commandSave','getScreenPosition','_saveConfirmWindow','return\x200','fSUbe','getMonth','requestAutosave','AutosaveOption','max','ConfigManager_applyData','timestamp','VocabLockedSaveSlot','fadeOut','Game_Variables_setValue','drawSvActor','latestSave','VocabAutosaveSuccess','optAutosave','onSaveCoreLoadSuccess','DpOqR','characters','single','startNewGameLockedSave','AfterBattle','drawFace','textSizeEx','ARRAYEVAL','savefileId','GlobalVariables','VocabSaveFailure','AutosaveConfirm','Text','itemPadding','Scene_Boot_onDatabaseLoaded','popScene','map','ConfigManager_makeData','Settings','commandContinueSaveCoreSingle','bind','ListFileDataJS','drawLargeStyleContents','process_VisuMZ_SaveCore_Settings','latestSavefileId','drawLatestMarker','addSaveCoreCommands','loadFailure','padStart','floor','battlerName','cHpnG','activate','constructor','Game_System_savefileId','prototype','drawText','fileDirectoryPath','innerWidth','AddOption','resetFontSettings','NUM','enableAutosave','[Year].[Month].[Date]\x20[Hour]:[Minute]:[Second]','ConvertParams','gPMyr','getSavePicture','SaveCore','drawContentsLoaded','sprite','innerHeight','contentsOpacity','7eoEYKa','VocabLoadFailure','AutosaveRequest','process_VisuMZ_SaveCore_Switches_Variables','_active','599382EtgJxy','filter','exit','save','determineAutosaveBypass','isPreviousScene','contentsBack','8569971oEVEIT'];_0xa205=function(){return _0x44f7a8;};return _0xa205();}var label=_0x1c260b(0x28c),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x1c260b(0xf1)](function(_0x405b6d){const _0x23d4fe=_0x1c260b;return _0x405b6d[_0x23d4fe(0x212)]&&_0x405b6d[_0x23d4fe(0x1bd)][_0x23d4fe(0x1b3)]('['+label+']');})[0x0];function _0x1537(_0x79b9a1,_0x3c726c){const _0xa205cf=_0xa205();return _0x1537=function(_0x1537a1,_0x1603f4){_0x1537a1=_0x1537a1-0xec;let _0x4ffcc4=_0xa205cf[_0x1537a1];return _0x4ffcc4;},_0x1537(_0x79b9a1,_0x3c726c);}VisuMZ[label][_0x1c260b(0x26f)]=VisuMZ[label]['Settings']||{},VisuMZ['ConvertParams']=function(_0x11742e,_0x3ce3b1){const _0x5ce49b=_0x1c260b;for(const _0x599c97 in _0x3ce3b1){if(_0x599c97[_0x5ce49b(0x190)](/(.*):(.*)/i)){const _0x5a6e02=String(RegExp['$1']),_0x1359b9=String(RegExp['$2'])['toUpperCase']()[_0x5ce49b(0x207)]();let _0x769410,_0xde1066,_0x319c92;switch(_0x1359b9){case _0x5ce49b(0x286):_0x769410=_0x3ce3b1[_0x599c97]!==''?Number(_0x3ce3b1[_0x599c97]):0x0;break;case'ARRAYNUM':_0xde1066=_0x3ce3b1[_0x599c97]!==''?JSON[_0x5ce49b(0x17a)](_0x3ce3b1[_0x599c97]):[],_0x769410=_0xde1066[_0x5ce49b(0x26d)](_0x164721=>Number(_0x164721));break;case _0x5ce49b(0x1bb):_0x769410=_0x3ce3b1[_0x599c97]!==''?eval(_0x3ce3b1[_0x599c97]):null;break;case _0x5ce49b(0x264):_0xde1066=_0x3ce3b1[_0x599c97]!==''?JSON['parse'](_0x3ce3b1[_0x599c97]):[],_0x769410=_0xde1066[_0x5ce49b(0x26d)](_0x342dbd=>eval(_0x342dbd));break;case'JSON':_0x769410=_0x3ce3b1[_0x599c97]!==''?JSON[_0x5ce49b(0x17a)](_0x3ce3b1[_0x599c97]):'';break;case _0x5ce49b(0x23e):_0xde1066=_0x3ce3b1[_0x599c97]!==''?JSON[_0x5ce49b(0x17a)](_0x3ce3b1[_0x599c97]):[],_0x769410=_0xde1066[_0x5ce49b(0x26d)](_0x12cf9f=>JSON[_0x5ce49b(0x17a)](_0x12cf9f));break;case'FUNC':_0x769410=_0x3ce3b1[_0x599c97]!==''?new Function(JSON[_0x5ce49b(0x17a)](_0x3ce3b1[_0x599c97])):new Function(_0x5ce49b(0x24d));break;case'ARRAYFUNC':_0xde1066=_0x3ce3b1[_0x599c97]!==''?JSON['parse'](_0x3ce3b1[_0x599c97]):[],_0x769410=_0xde1066[_0x5ce49b(0x26d)](_0x3af94d=>new Function(JSON['parse'](_0x3af94d)));break;case _0x5ce49b(0x17e):_0x769410=_0x3ce3b1[_0x599c97]!==''?String(_0x3ce3b1[_0x599c97]):'';break;case'ARRAYSTR':_0xde1066=_0x3ce3b1[_0x599c97]!==''?JSON['parse'](_0x3ce3b1[_0x599c97]):[],_0x769410=_0xde1066[_0x5ce49b(0x26d)](_0x2e2a49=>String(_0x2e2a49));break;case _0x5ce49b(0x144):_0x319c92=_0x3ce3b1[_0x599c97]!==''?JSON[_0x5ce49b(0x17a)](_0x3ce3b1[_0x599c97]):{},_0x11742e[_0x5a6e02]={},VisuMZ[_0x5ce49b(0x289)](_0x11742e[_0x5a6e02],_0x319c92);continue;case'ARRAYSTRUCT':_0xde1066=_0x3ce3b1[_0x599c97]!==''?JSON[_0x5ce49b(0x17a)](_0x3ce3b1[_0x599c97]):[],_0x769410=_0xde1066[_0x5ce49b(0x26d)](_0x2fe784=>VisuMZ[_0x5ce49b(0x289)]({},JSON[_0x5ce49b(0x17a)](_0x2fe784)));break;default:continue;}_0x11742e[_0x5a6e02]=_0x769410;}}return _0x11742e;},(_0x271e98=>{const _0x2fd49e=_0x1c260b,_0x4d04e8=_0x271e98[_0x2fd49e(0x1a6)];for(const _0x3402eb of dependencies){if(!Imported[_0x3402eb]){if(_0x2fd49e(0x1d3)!==_0x2fd49e(0x1ad)){alert(_0x2fd49e(0x228)[_0x2fd49e(0x173)](_0x4d04e8,_0x3402eb)),SceneManager[_0x2fd49e(0xf2)]();break;}else return this[_0x2fd49e(0x223)](_0xd7b6b2)?this['globalValue'](_0xf0cd6f):_0x348480['SaveCore'][_0x2fd49e(0x1ac)][_0x2fd49e(0x172)](this,_0x42ab2a);}}const _0x13d261=_0x271e98[_0x2fd49e(0x1bd)];if(_0x13d261[_0x2fd49e(0x190)](/\[Version[ ](.*?)\]/i)){const _0x5865df=Number(RegExp['$1']);_0x5865df!==VisuMZ[label][_0x2fd49e(0x19e)]&&(alert(_0x2fd49e(0x1c2)['format'](_0x4d04e8,_0x5865df)),SceneManager[_0x2fd49e(0xf2)]());}if(_0x13d261['match'](/\[Tier[ ](\d+)\]/i)){const _0xa7bfa5=Number(RegExp['$1']);if(_0xa7bfa5<tier)alert(_0x2fd49e(0x117)['format'](_0x4d04e8,_0xa7bfa5,tier)),SceneManager['exit']();else{if(_0x2fd49e(0x1b1)==='BtCUP'){if(!_0x14539b[_0x2fd49e(0x1be)]())return;_0x1e5ee3[_0x2fd49e(0x289)](_0x2e8017,_0x4ff17f);if(_0x130f7d)_0xa01a01['enableAutosave'](_0x46f113['Enable']);}else tier=Math[_0x2fd49e(0x252)](_0xa7bfa5,tier);}}VisuMZ['ConvertParams'](VisuMZ[label][_0x2fd49e(0x26f)],_0x271e98[_0x2fd49e(0x1c3)]);})(pluginData),PluginManager[_0x1c260b(0x116)](pluginData['name'],_0x1c260b(0x1f2),_0x4e94a7=>{const _0x44e92c=_0x1c260b;if(!DataManager['isAutosaveCompatible']())return;VisuMZ['ConvertParams'](_0x4e94a7,_0x4e94a7);if($gameSystem)$gameSystem[_0x44e92c(0x287)](_0x4e94a7['Enable']);}),PluginManager['registerCommand'](pluginData[_0x1c260b(0x1a6)],_0x1c260b(0xed),_0x4d9c8d=>{const _0x2c2aab=_0x1c260b;if(!DataManager[_0x2c2aab(0x1be)]()||$gameParty[_0x2c2aab(0x1a9)]())return;SceneManager['_scene']['requestAutosave']();}),PluginManager[_0x1c260b(0x116)](pluginData['name'],'AutosaveExecute',_0x2ab7a4=>{const _0x37c772=_0x1c260b;if(!DataManager[_0x37c772(0x1be)]()||$gameParty['inBattle']())return;SceneManager[_0x37c772(0x243)][_0x37c772(0x1de)]();}),PluginManager[_0x1c260b(0x116)](pluginData[_0x1c260b(0x1a6)],_0x1c260b(0x1e8),_0x2cce24=>{const _0x44e8ed=_0x1c260b;if(!DataManager[_0x44e8ed(0x1be)]()||$gameParty[_0x44e8ed(0x1a9)]())return;SceneManager[_0x44e8ed(0x243)][_0x44e8ed(0x245)]();}),PluginManager['registerCommand'](pluginData[_0x1c260b(0x1a6)],'SaveCurrentSlot',_0x27ef70=>{const _0xc30dfd=_0x1c260b;SceneManager['_scene'][_0xc30dfd(0x22a)]();}),PluginManager[_0x1c260b(0x116)](pluginData[_0x1c260b(0x1a6)],_0x1c260b(0x10a),_0xf9d0cd=>{const _0x25e6b4=_0x1c260b;VisuMZ[_0x25e6b4(0x289)](_0xf9d0cd,_0xf9d0cd);if($gameSystem)$gameSystem[_0x25e6b4(0x22c)](_0xf9d0cd[_0x25e6b4(0x269)]);}),PluginManager[_0x1c260b(0x116)](pluginData[_0x1c260b(0x1a6)],_0x1c260b(0x1ab),_0x4bd2f2=>{const _0x168bcc=_0x1c260b;VisuMZ['ConvertParams'](_0x4bd2f2,_0x4bd2f2);if($gameSystem)$gameSystem[_0x168bcc(0x1aa)](_0x4bd2f2[_0x168bcc(0x112)]);}),VisuMZ[_0x1c260b(0x28c)]['Scene_Boot_onDatabaseLoaded']=Scene_Boot[_0x1c260b(0x280)][_0x1c260b(0x11d)],Scene_Boot[_0x1c260b(0x280)]['onDatabaseLoaded']=function(){const _0x75331b=_0x1c260b;VisuMZ[_0x75331b(0x28c)][_0x75331b(0x26b)][_0x75331b(0x172)](this),this[_0x75331b(0x274)](),this[_0x75331b(0xee)]();},Scene_Boot[_0x1c260b(0x280)][_0x1c260b(0x274)]=function(){const _0x485653=_0x1c260b;StorageManager[_0x485653(0x180)]()===_0x485653(0x25f)&&($dataSystem[_0x485653(0x25b)]=!![]);},VisuMZ[_0x1c260b(0x123)]=[],VisuMZ[_0x1c260b(0x266)]=[],Scene_Boot['prototype']['process_VisuMZ_SaveCore_Switches_Variables']=function(){const _0xf8816d=_0x1c260b;for(let _0x245d55=0x1;_0x245d55<$dataSystem[_0xf8816d(0x242)][_0xf8816d(0x153)];_0x245d55++){if('YbvEw'===_0xf8816d(0x20c)){if($dataSystem[_0xf8816d(0x242)][_0x245d55][_0xf8816d(0x190)](/<GLOBAL>/i))VisuMZ[_0xf8816d(0x123)][_0xf8816d(0x1a1)](_0x245d55);}else return this['battleMembers']()[_0xf8816d(0x26d)](_0x3fd70b=>_0x3fd70b[_0xf8816d(0x27b)]());}for(let _0x51fad2=0x1;_0x51fad2<$dataSystem[_0xf8816d(0x1d9)][_0xf8816d(0x153)];_0x51fad2++){if($dataSystem[_0xf8816d(0x1d9)][_0x51fad2]['match'](/<GLOBAL>/i))VisuMZ['GlobalVariables'][_0xf8816d(0x1a1)](_0x51fad2);}},VisuMZ['SaveCore']['DataManager_createGameObjects']=DataManager[_0x1c260b(0x11b)],DataManager[_0x1c260b(0x11b)]=function(){const _0x38dbb5=_0x1c260b;VisuMZ[_0x38dbb5(0x28c)][_0x38dbb5(0x1f4)][_0x38dbb5(0x172)](this),Scene_File[_0x38dbb5(0x248)]=$gameParty['maxBattleMembers']();},DataManager[_0x1c260b(0x1be)]=function(){const _0x1a6f8a=_0x1c260b;return!DataManager[_0x1a6f8a(0x1c8)]()&&!DataManager[_0x1a6f8a(0x1b0)]()&&$dataSystem[_0x1a6f8a(0x25b)];},DataManager[_0x1c260b(0x141)]=function(){const _0x5552f9=_0x1c260b;if(StorageManager[_0x5552f9(0x180)]()===_0x5552f9(0x25f))return 0x1;let _0x57d9dc=VisuMZ['SaveCore']['Settings']['Save']['AutosaveMaxCount']?0x0:0x1;return VisuMZ[_0x5552f9(0x28c)][_0x5552f9(0x26f)][_0x5552f9(0x241)][_0x5552f9(0x23c)]+_0x57d9dc;},DataManager[_0x1c260b(0x128)]=function(_0x43a153){const _0x1c743b=_0x1c260b,_0x43ff0a=VisuMZ[_0x1c743b(0x28c)][_0x1c743b(0x26f)][_0x1c743b(0x241)][_0x1c743b(0x11c)];return _0x43ff0a[_0x1c743b(0x173)](_0x43a153);},VisuMZ[_0x1c260b(0x28c)][_0x1c260b(0x1e2)]=DataManager[_0x1c260b(0x187)],DataManager[_0x1c260b(0x187)]=function(){const _0x3c5715=_0x1c260b,_0x5da71a=VisuMZ[_0x3c5715(0x28c)][_0x3c5715(0x1e2)][_0x3c5715(0x172)](this);return VisuMZ[_0x3c5715(0x28c)][_0x3c5715(0x26f)][_0x3c5715(0x120)]['MakeSavefileInfoJS'][_0x3c5715(0x172)](this,_0x5da71a);},ConfigManager[_0x1c260b(0x1dc)]=VisuMZ['SaveCore'][_0x1c260b(0x26f)][_0x1c260b(0x251)]['Default'],ConfigManager[_0x1c260b(0x23f)]=[],ConfigManager[_0x1c260b(0x21f)]=[],VisuMZ['SaveCore'][_0x1c260b(0x26e)]=ConfigManager[_0x1c260b(0x181)],ConfigManager[_0x1c260b(0x181)]=function(){const _0x222894=_0x1c260b,_0x298483=VisuMZ[_0x222894(0x28c)][_0x222894(0x26e)][_0x222894(0x172)](this);return _0x298483['autosave']=this['autosave']||VisuMZ[_0x222894(0x28c)][_0x222894(0x26f)]['AutosaveOption']['Default'],_0x298483[_0x222894(0x23f)]=this[_0x222894(0x23f)]||[],_0x298483[_0x222894(0x21f)]=this[_0x222894(0x21f)]||[],_0x298483;},VisuMZ[_0x1c260b(0x28c)][_0x1c260b(0x253)]=ConfigManager[_0x1c260b(0x1c1)],ConfigManager[_0x1c260b(0x1c1)]=function(_0x4daa90){const _0xb8e3da=_0x1c260b;VisuMZ[_0xb8e3da(0x28c)][_0xb8e3da(0x253)][_0xb8e3da(0x172)](this,_0x4daa90),this[_0xb8e3da(0x1dc)]=_0x4daa90['autosave']!==undefined?_0x4daa90[_0xb8e3da(0x1dc)]:VisuMZ[_0xb8e3da(0x28c)][_0xb8e3da(0x26f)][_0xb8e3da(0x251)][_0xb8e3da(0x1b7)],this[_0xb8e3da(0x23f)]=_0x4daa90[_0xb8e3da(0x23f)]||[],this[_0xb8e3da(0x21f)]=_0x4daa90[_0xb8e3da(0x21f)]||[];},StorageManager[_0x1c260b(0x21b)]=function(){const _0x2d1015=_0x1c260b;if(Utils[_0x2d1015(0x161)]()){if(_0x2d1015(0x204)!==_0x2d1015(0x204))_0x47942c[_0x2d1015(0x28c)][_0x2d1015(0x26f)]['SaveMenu'][_0x2d1015(0x272)][_0x2d1015(0x172)](this,_0x4cbba0,_0x426603);else return VisuMZ['SaveCore'][_0x2d1015(0x26f)][_0x2d1015(0x241)]['LocalMode'];}else return![];},StorageManager['filePath']=function(_0x1e8e8c){const _0x46066b=_0x1c260b,_0x3eef2c=this['fileDirectoryPath'](),_0x47ca9b=VisuMZ[_0x46066b(0x28c)][_0x46066b(0x26f)][_0x46066b(0x241)][_0x46066b(0x104)];return _0x3eef2c+_0x47ca9b['format'](_0x1e8e8c);},StorageManager[_0x1c260b(0x1f8)]=function(_0x3dd484){const _0x1f8ff6=_0x1c260b,_0x329594=$dataSystem[_0x1f8ff6(0x215)][_0x1f8ff6(0x1c5)],_0x52471e=VisuMZ['SaveCore'][_0x1f8ff6(0x26f)]['Save'][_0x1f8ff6(0x189)];return _0x52471e[_0x1f8ff6(0x173)](_0x329594,_0x3dd484);},StorageManager[_0x1c260b(0x1eb)]=function(){const _0x55547f=_0x1c260b;return VisuMZ[_0x55547f(0x28c)]['Settings']['Save'][_0x55547f(0x14c)];},StorageManager[_0x1c260b(0x180)]=function(){const _0x523b56=_0x1c260b;return VisuMZ['SaveCore'][_0x523b56(0x26f)][_0x523b56(0x241)][_0x523b56(0x18c)];},StorageManager[_0x1c260b(0x1b6)]=function(){const _0x4d0fbf=_0x1c260b;return this[_0x4d0fbf(0x180)]()===_0x4d0fbf(0x25f)?_0x4d0fbf(0x155):VisuMZ[_0x4d0fbf(0x28c)][_0x4d0fbf(0x26f)]['Autosave']['AutosaveType'];},TextManager[_0x1c260b(0x1ff)]=VisuMZ[_0x1c260b(0x28c)][_0x1c260b(0x26f)][_0x1c260b(0x241)][_0x1c260b(0x255)],TextManager[_0x1c260b(0x13b)]=VisuMZ[_0x1c260b(0x28c)][_0x1c260b(0x26f)][_0x1c260b(0x1f1)]['VocabSaveSuccess'],TextManager[_0x1c260b(0x198)]=VisuMZ['SaveCore'][_0x1c260b(0x26f)][_0x1c260b(0x1f1)][_0x1c260b(0x267)],TextManager[_0x1c260b(0x278)]=VisuMZ['SaveCore']['Settings'][_0x1c260b(0x1f1)][_0x1c260b(0xec)],TextManager[_0x1c260b(0x114)]=VisuMZ[_0x1c260b(0x28c)][_0x1c260b(0x26f)][_0x1c260b(0x251)]['Name'],TextManager[_0x1c260b(0x13e)]=VisuMZ[_0x1c260b(0x28c)]['Settings']['AutosaveConfirm'][_0x1c260b(0x25a)],TextManager[_0x1c260b(0x1b4)]=VisuMZ[_0x1c260b(0x28c)][_0x1c260b(0x26f)][_0x1c260b(0x268)][_0x1c260b(0x1e4)],TextManager[_0x1c260b(0x259)]=VisuMZ['SaveCore'][_0x1c260b(0x26f)][_0x1c260b(0x120)]['LatestText'],ColorManager[_0x1c260b(0x202)]=function(){const _0x58b2a1=_0x1c260b,_0x53df31=_0x58b2a1(0xfb);this[_0x58b2a1(0x170)]=this[_0x58b2a1(0x170)]||{};if(this['_colorCache'][_0x53df31])return this[_0x58b2a1(0x170)][_0x53df31];const _0x5dfca7=VisuMZ[_0x58b2a1(0x28c)][_0x58b2a1(0x26f)][_0x58b2a1(0x120)][_0x58b2a1(0x1f0)];return this[_0x58b2a1(0x199)](_0x53df31,_0x5dfca7);},ColorManager['getColorDataFromPluginParameters']=function(_0x318950,_0x3f2526){const _0x4a9940=_0x1c260b;_0x3f2526=String(_0x3f2526),this['_colorCache']=this['_colorCache']||{};if(_0x3f2526[_0x4a9940(0x190)](/#(.*)/i))'upOzY'!==_0x4a9940(0x1cb)?_0x12daa0['SaveCore']['Settings']['SaveMenu'][_0x4a9940(0x135)][_0x4a9940(0x172)](this,_0x432d4a,_0x30fd41):this['_colorCache'][_0x318950]=_0x4a9940(0xfa)[_0x4a9940(0x173)](String(RegExp['$1']));else{if('XdmKi'!=='XdmKi'){if(this[_0x4a9940(0x154)]===_0x567cb8)this[_0x4a9940(0x1d5)]();if(this['_SaveCoreSettings'][_0x4a9940(0x1cf)]===_0x59dd0c)this[_0x4a9940(0x1d5)]();this[_0x4a9940(0x154)][_0x4a9940(0x1cf)]=_0x3a3d14;}else this[_0x4a9940(0x170)][_0x318950]=this['textColor'](Number(_0x3f2526));}return this[_0x4a9940(0x170)][_0x318950];},VisuMZ[_0x1c260b(0x28c)][_0x1c260b(0x171)]=Game_System[_0x1c260b(0x280)][_0x1c260b(0x18f)],Game_System[_0x1c260b(0x280)][_0x1c260b(0x18f)]=function(){const _0x267910=_0x1c260b;VisuMZ[_0x267910(0x28c)][_0x267910(0x171)]['call'](this),this[_0x267910(0x1d5)]();},Game_System[_0x1c260b(0x280)][_0x1c260b(0x1d5)]=function(){this['_SaveCoreSettings']={'autosaveEnabled':!![],'saveDescription':'','savePicture':''};},Game_System[_0x1c260b(0x280)]['isAutosaveEnabled']=function(){const _0x4e172b=_0x1c260b;if(!$dataSystem[_0x4e172b(0x25b)])return![];if(this['_SaveCoreSettings']===undefined)this[_0x4e172b(0x1d5)]();if(this['_SaveCoreSettings']['autosaveEnabled']===undefined)this[_0x4e172b(0x1d5)]();return this['_SaveCoreSettings'][_0x4e172b(0x194)];},Game_System['prototype']['enableAutosave']=function(_0x25b01f){const _0x401190=_0x1c260b;if(!$dataSystem['optAutosave'])return;if(this[_0x401190(0x154)]===undefined)this[_0x401190(0x1d5)]();if(this['_SaveCoreSettings'][_0x401190(0x194)]===undefined)this['initSaveCore']();this[_0x401190(0x154)][_0x401190(0x194)]=_0x25b01f;},Game_System['prototype']['getSaveDescription']=function(){const _0x1846e8=_0x1c260b;if(this[_0x1846e8(0x154)]===undefined)this[_0x1846e8(0x1d5)]();if(this[_0x1846e8(0x154)][_0x1846e8(0x196)]===undefined)this['initSaveCore']();return this['_SaveCoreSettings']['saveDescription'];},Game_System[_0x1c260b(0x280)][_0x1c260b(0x22c)]=function(_0xa2751b){const _0x333f8a=_0x1c260b;if(this[_0x333f8a(0x154)]===undefined)this[_0x333f8a(0x1d5)]();if(this[_0x333f8a(0x154)]['saveDescription']===undefined)this[_0x333f8a(0x1d5)]();this[_0x333f8a(0x154)][_0x333f8a(0x196)]=VisuMZ['SaveCore'][_0x333f8a(0x122)](_0xa2751b);},VisuMZ[_0x1c260b(0x28c)]['ParseTextCodes']=function(_0x3ee05e){const _0x3e49eb=_0x1c260b;while(_0x3ee05e[_0x3e49eb(0x190)](/\\V\[(\d+)\]/gi)){'OPisH'!==_0x3e49eb(0x17d)?_0x3ee05e=_0x3ee05e['replace'](/\\V\[(\d+)\]/gi,(_0x300a5c,_0xbda9ca)=>$gameVariables[_0x3e49eb(0x1ae)](parseInt(_0xbda9ca))):_0x2d41c3=_0x5cfb9e+_0x37fe30-_0x5e2db9;}while(_0x3ee05e[_0x3e49eb(0x190)](/\\N\[(\d+)\]/gi)){_0x3ee05e=_0x3ee05e[_0x3e49eb(0x244)](/\\N\[(\d+)\]/gi,(_0x4bcfe4,_0x14aabc)=>Window_Base[_0x3e49eb(0x280)][_0x3e49eb(0x226)](parseInt(_0x14aabc)));}while(_0x3ee05e[_0x3e49eb(0x190)](/\\P\[(\d+)\]/gi)){_0x3ee05e=_0x3ee05e[_0x3e49eb(0x244)](/\\P\[(\d+)\]/gi,(_0x20c966,_0x4a1a26)=>Window_Base['prototype']['partyMemberName'](parseInt(_0x4a1a26)));}return _0x3ee05e;},Game_System[_0x1c260b(0x280)][_0x1c260b(0x28b)]=function(){const _0x1ae3d2=_0x1c260b;if(this[_0x1ae3d2(0x154)]===undefined)this[_0x1ae3d2(0x1d5)]();if(this[_0x1ae3d2(0x154)]['savePicture']===undefined)this[_0x1ae3d2(0x1d5)]();return this[_0x1ae3d2(0x154)][_0x1ae3d2(0x1cf)];},Game_System[_0x1c260b(0x280)]['setSavePicture']=function(_0x12a2fa){const _0x52fe4d=_0x1c260b;if(this[_0x52fe4d(0x154)]===undefined)this[_0x52fe4d(0x1d5)]();if(this[_0x52fe4d(0x154)][_0x52fe4d(0x1cf)]===undefined)this[_0x52fe4d(0x1d5)]();this[_0x52fe4d(0x154)]['savePicture']=_0x12a2fa;},VisuMZ[_0x1c260b(0x28c)]['Game_System_savefileId']=Game_System['prototype'][_0x1c260b(0x265)],Game_System[_0x1c260b(0x280)][_0x1c260b(0x265)]=function(){const _0x134881=_0x1c260b,_0x4eea0c=StorageManager['saveStyle']();switch(_0x4eea0c){case'locked':return VisuMZ[_0x134881(0x28c)][_0x134881(0x27f)]['call'](this)||0x1;break;case _0x134881(0x25f):return 0x0;break;default:return VisuMZ[_0x134881(0x28c)][_0x134881(0x27f)][_0x134881(0x172)](this);break;}},VisuMZ[_0x1c260b(0x28c)]['Game_System_onAfterLoad']=Game_System[_0x1c260b(0x280)][_0x1c260b(0x229)],Game_System[_0x1c260b(0x280)][_0x1c260b(0x229)]=function(){const _0x45415f=_0x1c260b;VisuMZ[_0x45415f(0x28c)]['Game_System_onAfterLoad'][_0x45415f(0x172)](this);const _0x424836=VisuMZ['SaveCore'][_0x45415f(0x26f)][_0x45415f(0x1f1)]['Duration'];setTimeout(VisuMZ[_0x45415f(0x28c)][_0x45415f(0x140)][_0x45415f(0x271)](this),_0x424836+0xa);},Game_Switches[_0x1c260b(0x280)][_0x1c260b(0x223)]=function(_0x3429c4){const _0x2384d8=_0x1c260b;return $dataSystem['switches'][_0x3429c4]&&VisuMZ[_0x2384d8(0x123)][_0x2384d8(0x1b3)](_0x3429c4);},VisuMZ[_0x1c260b(0x28c)][_0x1c260b(0x216)]=Game_Switches[_0x1c260b(0x280)]['value'],Game_Switches[_0x1c260b(0x280)][_0x1c260b(0x1ae)]=function(_0x34ed75){const _0x4e7f76=_0x1c260b;if(this[_0x4e7f76(0x223)](_0x34ed75)){if('GEzik'===_0x4e7f76(0x169))return this[_0x4e7f76(0x148)](_0x34ed75);else _0x47b2cc['SaveCore']['Scene_Title_commandContinue']['call'](this);}else return VisuMZ[_0x4e7f76(0x28c)][_0x4e7f76(0x216)][_0x4e7f76(0x172)](this,_0x34ed75);},Game_Switches[_0x1c260b(0x280)]['globalValue']=function(_0x17a7ca){const _0x55d142=_0x1c260b;return ConfigManager['globalSwitches']=ConfigManager[_0x55d142(0x23f)]||[],!!ConfigManager[_0x55d142(0x23f)][_0x17a7ca];},VisuMZ[_0x1c260b(0x28c)][_0x1c260b(0x175)]=Game_Switches[_0x1c260b(0x280)][_0x1c260b(0x23d)],Game_Switches[_0x1c260b(0x280)][_0x1c260b(0x23d)]=function(_0x2f10f3,_0x14ecd1){const _0x450633=_0x1c260b;if(this[_0x450633(0x223)](_0x2f10f3))this[_0x450633(0xff)](_0x2f10f3,_0x14ecd1);VisuMZ[_0x450633(0x28c)]['Game_Switches_setValue'][_0x450633(0x172)](this,_0x2f10f3,_0x14ecd1);},Game_Switches['prototype'][_0x1c260b(0xff)]=function(_0x58578f,_0x27777e){const _0x3d48a0=_0x1c260b;_0x58578f>0x0&&_0x58578f<$dataSystem['switches'][_0x3d48a0(0x153)]&&(_0x3d48a0(0x236)===_0x3d48a0(0x1fb)?_0x286081[_0x3d48a0(0x203)](0x0)[_0x3d48a0(0x151)](()=>this[_0x3d48a0(0x23a)]())[_0x3d48a0(0x188)](()=>this['onAutosaveFailure']()):(ConfigManager[_0x3d48a0(0x23f)]=ConfigManager[_0x3d48a0(0x23f)]||[],ConfigManager[_0x3d48a0(0x23f)][_0x58578f]=_0x27777e,ConfigManager['save']()));},Game_Variables[_0x1c260b(0x280)][_0x1c260b(0x223)]=function(_0xc431bc){const _0x17d633=_0x1c260b;return $dataSystem[_0x17d633(0x1d9)][_0xc431bc]&&VisuMZ[_0x17d633(0x266)][_0x17d633(0x1b3)](_0xc431bc);},VisuMZ[_0x1c260b(0x28c)][_0x1c260b(0x1ac)]=Game_Variables[_0x1c260b(0x280)]['value'],Game_Variables[_0x1c260b(0x280)]['value']=function(_0x3ddb99){const _0x7c98b8=_0x1c260b;return this[_0x7c98b8(0x223)](_0x3ddb99)?this[_0x7c98b8(0x148)](_0x3ddb99):VisuMZ['SaveCore']['Game_Variables_value']['call'](this,_0x3ddb99);},Game_Variables[_0x1c260b(0x280)][_0x1c260b(0x148)]=function(_0x393191){const _0x388ae4=_0x1c260b;ConfigManager[_0x388ae4(0x21f)]=ConfigManager['globalVariables']||[];if(ConfigManager['globalVariables'][_0x393191]===undefined){if(_0x388ae4(0x15a)!==_0x388ae4(0x15a))return _0x113f6f['VisuMZ_1_MessageCore']?_0x292f1c[_0x388ae4(0x280)][_0x388ae4(0x20f)][_0x388ae4(0x172)](this,_0x584a7f):'';else ConfigManager['globalVariables'][_0x393191]=0x0;}return ConfigManager[_0x388ae4(0x21f)][_0x393191];},VisuMZ['SaveCore']['Game_Variables_setValue']=Game_Variables[_0x1c260b(0x280)][_0x1c260b(0x23d)],Game_Variables['prototype'][_0x1c260b(0x23d)]=function(_0xc07011,_0x41442f){const _0x5bdcb9=_0x1c260b;if(this['isGlobal'](_0xc07011))this[_0x5bdcb9(0xff)](_0xc07011,_0x41442f);VisuMZ[_0x5bdcb9(0x28c)][_0x5bdcb9(0x257)]['call'](this,_0xc07011,_0x41442f);},Game_Variables['prototype']['setGlobalValue']=function(_0x3afbc7,_0x2bf5c2){const _0x4576da=_0x1c260b;if(_0x3afbc7>0x0&&_0x3afbc7<$dataSystem['variables'][_0x4576da(0x153)]){if('LQqpm'!==_0x4576da(0x15f)){ConfigManager[_0x4576da(0x21f)]=ConfigManager[_0x4576da(0x21f)]||[];if(typeof _0x2bf5c2===_0x4576da(0x233))_0x2bf5c2=Math[_0x4576da(0x27a)](_0x2bf5c2);ConfigManager['globalVariables'][_0x3afbc7]=_0x2bf5c2,ConfigManager[_0x4576da(0xf3)]();}else this[_0x4576da(0x19a)](_0x55b653[0x0],_0x3a7c46[0x1],_0x567f96,_0x59933d),_0x5b7bb6+=_0x13ce96;}},Game_Party['prototype']['svbattlersForSaveFile']=function(){const _0x36cc27=_0x1c260b;return this['battleMembers']()[_0x36cc27(0x26d)](_0x18c907=>_0x18c907['battlerName']());},Scene_Base[_0x1c260b(0x280)]['determineAutosaveBypass']=function(_0x22afcf){const _0x3b53a9=_0x1c260b,_0x1be4e8=VisuMZ[_0x3b53a9(0x28c)]['Settings'][_0x3b53a9(0x12b)];switch(_0x22afcf){case'battle':this[_0x3b53a9(0x221)]=!_0x1be4e8[_0x3b53a9(0x261)];break;case _0x3b53a9(0x1e9):if(!this[_0x3b53a9(0x12a)]())return;this[_0x3b53a9(0x221)]=!_0x1be4e8[_0x3b53a9(0x235)];break;case'callMenu':this['_bypassAutosave']=!_0x1be4e8[_0x3b53a9(0x1c4)];break;case _0x3b53a9(0x1a8):this['_bypassAutosave']=!_0x1be4e8[_0x3b53a9(0x1ea)];break;}},VisuMZ['SaveCore'][_0x1c260b(0x119)]=Scene_Base[_0x1c260b(0x280)][_0x1c260b(0x250)],Scene_Base[_0x1c260b(0x280)][_0x1c260b(0x250)]=function(){const _0x1bd310=_0x1c260b;!this[_0x1bd310(0x221)]&&VisuMZ['SaveCore'][_0x1bd310(0x119)]['call'](this),this[_0x1bd310(0x221)]=![];},Scene_Base[_0x1c260b(0x280)][_0x1c260b(0x227)]=function(){const _0x3bdcc1=_0x1c260b;return!DataManager[_0x3bdcc1(0x1c8)]()&&!DataManager[_0x3bdcc1(0x1b0)]()&&$gameSystem['isAutosaveEnabled']()&&(VisuMZ['SaveCore'][_0x3bdcc1(0x26f)][_0x3bdcc1(0x12b)][_0x3bdcc1(0x132)]?$gameSystem['isSaveEnabled']():!![]);},Scene_Base[_0x1c260b(0x280)][_0x1c260b(0x1de)]=function(){const _0x16fa8a=_0x1c260b;if(!ConfigManager[_0x16fa8a(0x1dc)])return;this['forceAutosave']();},Scene_Base[_0x1c260b(0x280)][_0x1c260b(0x245)]=function(){const _0x565d47=_0x1c260b;$gameSystem[_0x565d47(0x150)](),this[_0x565d47(0x231)]=![];const _0xc93e44=StorageManager['autosaveType']();if([_0x565d47(0x155),_0x565d47(0x108)][_0x565d47(0x1b3)](_0xc93e44)){if(_0x565d47(0x177)===_0x565d47(0x177))DataManager[_0x565d47(0x203)](0x0)[_0x565d47(0x151)](()=>this[_0x565d47(0x23a)]())['catch'](()=>this[_0x565d47(0x23b)]());else{if(!_0x591f02['isAutosaveCompatible']()||_0x1bad5b[_0x565d47(0x1a9)]())return;_0x56444c[_0x565d47(0x243)][_0x565d47(0x1de)]();}}if([_0x565d47(0x1bc),'both'][_0x565d47(0x1b3)](_0xc93e44)){const _0x2fca0a=$gameSystem['savefileId']();if(_0x2fca0a>0x0){if('KNdZe'!==_0x565d47(0x28a))DataManager[_0x565d47(0x203)](_0x2fca0a)[_0x565d47(0x151)](()=>this[_0x565d47(0x23a)]())[_0x565d47(0x188)](()=>this['onAutosaveFailure']());else return _0x3c5b2f['SaveCore'][_0x565d47(0x167)][_0x565d47(0x172)](this)||_0x1f1240['isPreviousScene'](_0x118d4c);}}this[_0x565d47(0x231)]=![];},VisuMZ[_0x1c260b(0x28c)][_0x1c260b(0x18b)]=Scene_Base['prototype'][_0x1c260b(0x23a)],Scene_Base[_0x1c260b(0x280)][_0x1c260b(0x23a)]=function(){const _0xab38d5=_0x1c260b;if(this[_0xab38d5(0x231)])return;VisuMZ[_0xab38d5(0x28c)][_0xab38d5(0x18b)][_0xab38d5(0x172)](this),VisuMZ[_0xab38d5(0x28c)][_0xab38d5(0x26f)][_0xab38d5(0x12b)][_0xab38d5(0x160)][_0xab38d5(0x172)](this),this[_0xab38d5(0x1fe)](!![]),this['_processingAutosave']=!![];},VisuMZ[_0x1c260b(0x28c)][_0x1c260b(0x10f)]=Scene_Base[_0x1c260b(0x280)][_0x1c260b(0x23b)],Scene_Base[_0x1c260b(0x280)][_0x1c260b(0x23b)]=function(){const _0xdfb437=_0x1c260b;if(this['_processingAutosave'])return;VisuMZ[_0xdfb437(0x28c)][_0xdfb437(0x10f)][_0xdfb437(0x172)](this),VisuMZ[_0xdfb437(0x28c)][_0xdfb437(0x26f)][_0xdfb437(0x12b)]['OnAutosaveFailureJS'][_0xdfb437(0x172)](this),this['openAutosaveConfirmationWindow'](![]);},Scene_Base[_0x1c260b(0x280)][_0x1c260b(0xfd)]=function(){const _0x3ff458=_0x1c260b;if(this['_saveConfirmWindow'])return;const _0x19ba2f=this[_0x3ff458(0x12d)]();this[_0x3ff458(0x24c)]=new Window_Base(_0x19ba2f),this[_0x3ff458(0x24c)][_0x3ff458(0x19c)]=0x0;},Scene_Base[_0x1c260b(0x280)][_0x1c260b(0x12d)]=function(){const _0x351430=_0x1c260b;return VisuMZ[_0x351430(0x28c)][_0x351430(0x26f)]['SaveConfirm'][_0x351430(0x219)][_0x351430(0x172)](this);},Scene_Base[_0x1c260b(0x280)][_0x1c260b(0x13c)]=function(){const _0x151226=_0x1c260b;return VisuMZ[_0x151226(0x28c)]['Settings'][_0x151226(0x1f1)][_0x151226(0x159)];},Scene_Base[_0x1c260b(0x280)][_0x1c260b(0x1ed)]=function(_0x46ad9c,_0x1c88a1){const _0x449c4d=_0x1c260b;if(!this[_0x449c4d(0x13c)]())return this[_0x449c4d(0x12f)](_0x46ad9c);if(!this['_saveConfirmWindow'])this[_0x449c4d(0xfd)]();const _0x467d36=this['_saveConfirmWindow'];this[_0x449c4d(0x21d)](_0x467d36),this[_0x449c4d(0x125)](_0x467d36),_0x467d36[_0x449c4d(0x145)](),_0x467d36[_0x449c4d(0x285)](),_0x467d36['contents'][_0x449c4d(0x115)]();let _0x2be3fc='';if(_0x1c88a1)_0x2be3fc=TextManager['loadFailure'];else{if(_0x449c4d(0x27c)!==_0x449c4d(0x24e))_0x2be3fc=_0x46ad9c?TextManager[_0x449c4d(0x13b)]:TextManager[_0x449c4d(0x198)];else{const _0x1ce8a5=_0x5491f7[_0x449c4d(0x28c)][_0x449c4d(0x26e)][_0x449c4d(0x172)](this);return _0x1ce8a5['autosave']=this['autosave']||_0x19bae5[_0x449c4d(0x28c)]['Settings']['AutosaveOption'][_0x449c4d(0x1b7)],_0x1ce8a5[_0x449c4d(0x23f)]=this['globalSwitches']||[],_0x1ce8a5[_0x449c4d(0x21f)]=this[_0x449c4d(0x21f)]||[],_0x1ce8a5;}}const _0x3b79cc=_0x467d36[_0x449c4d(0x263)](_0x2be3fc)[_0x449c4d(0x179)],_0x22afb1=(_0x467d36['innerWidth']-_0x3b79cc)/0x2;_0x467d36['drawTextEx'](_0x2be3fc,_0x22afb1,0x0,_0x3b79cc);const _0x15395a=VisuMZ[_0x449c4d(0x28c)][_0x449c4d(0x26f)][_0x449c4d(0x1f1)][_0x449c4d(0x197)];setTimeout(this[_0x449c4d(0x12f)]['bind'](this,_0x46ad9c),_0x15395a);},Scene_Base[_0x1c260b(0x280)][_0x1c260b(0x1c0)]=function(){this['openSaveConfirmationWindow'](![],!![]);},Scene_Base[_0x1c260b(0x280)]['closeSaveConfirmationWindow']=function(_0x34e234){const _0x14ccca=_0x1c260b;if(this['_saveConfirmWindow'])this[_0x14ccca(0x24c)]['close']();},Scene_Base['prototype'][_0x1c260b(0x191)]=function(){const _0x4272c4=_0x1c260b;if(this[_0x4272c4(0x1a7)])return;const _0x434b3b=this[_0x4272c4(0x1a3)]();this['_autosaveConfirmWindow']=new Window_AutosaveConfirm(_0x434b3b);},Scene_Base['prototype'][_0x1c260b(0x1a3)]=function(){const _0x3998d0=_0x1c260b,_0x45f24b=this[_0x3998d0(0x16f)](),_0x570acc=this['calcWindowHeight'](0x1,![]),_0x8c8d03=Graphics[_0x3998d0(0x179)]-_0x45f24b,_0x1814f3=Graphics[_0x3998d0(0x1f6)]-_0x570acc;return new Rectangle(_0x8c8d03,_0x1814f3,_0x45f24b,_0x570acc);},Scene_Base[_0x1c260b(0x280)]['isAutosaveConfirmWindowEnabled']=function(){const _0x352f36=_0x1c260b;return VisuMZ[_0x352f36(0x28c)][_0x352f36(0x26f)]['AutosaveConfirm'][_0x352f36(0x159)];},Scene_Base[_0x1c260b(0x280)][_0x1c260b(0x1fe)]=function(_0x5de443){const _0x218896=_0x1c260b;if(!this[_0x218896(0x121)]())return this[_0x218896(0x17c)](_0x5de443);if(!this[_0x218896(0x1a7)])this[_0x218896(0x191)]();const _0x54df9e=this[_0x218896(0x1a7)];this[_0x218896(0x21d)](_0x54df9e),this[_0x218896(0x125)](_0x54df9e),_0x54df9e[_0x218896(0x152)](_0x5de443),_0x54df9e[_0x218896(0x208)]();const _0x21d29a=VisuMZ['SaveCore'][_0x218896(0x26f)][_0x218896(0x1f1)][_0x218896(0x197)];setTimeout(this[_0x218896(0x17c)]['bind'](this,_0x5de443),_0x21d29a);},Scene_Base[_0x1c260b(0x280)][_0x1c260b(0x17c)]=function(_0x18ff2a){const _0x3bc4f3=_0x1c260b;if(this[_0x3bc4f3(0x1a7)])this[_0x3bc4f3(0x1a7)][_0x3bc4f3(0x256)]();},Scene_Base['prototype'][_0x1c260b(0x22a)]=function(){},VisuMZ[_0x1c260b(0x28c)]['Scene_Title_initialize']=Scene_Title[_0x1c260b(0x280)][_0x1c260b(0x18f)],Scene_Title['prototype'][_0x1c260b(0x18f)]=function(){const _0xfe817f=_0x1c260b;VisuMZ[_0xfe817f(0x28c)]['Scene_Title_initialize'][_0xfe817f(0x172)](this),this['_loadSuccess']=![];},VisuMZ[_0x1c260b(0x28c)]['Scene_Title_terminate']=Scene_Title[_0x1c260b(0x280)][_0x1c260b(0x126)],Scene_Title[_0x1c260b(0x280)][_0x1c260b(0x126)]=function(){const _0x7ce3f=_0x1c260b;VisuMZ['SaveCore'][_0x7ce3f(0x1cc)][_0x7ce3f(0x172)](this);if(this[_0x7ce3f(0x1d1)])$gameSystem[_0x7ce3f(0x229)]();},VisuMZ[_0x1c260b(0x28c)][_0x1c260b(0x209)]=Scene_Title[_0x1c260b(0x280)][_0x1c260b(0x1d8)],Scene_Title[_0x1c260b(0x280)][_0x1c260b(0x1d8)]=function(){const _0x331b4f=_0x1c260b;StorageManager[_0x331b4f(0x180)]()==='locked'?_0x331b4f(0x100)===_0x331b4f(0x100)?this[_0x331b4f(0x143)]():_0x16dc13[_0x331b4f(0x28c)]['Settings']['AutosaveOption'][_0x331b4f(0x284)]&&this[_0x331b4f(0xfc)]():'JGUjW'===_0x331b4f(0x1d4)?_0x28a048[_0x331b4f(0x243)]['saveCurrentSlot']():VisuMZ[_0x331b4f(0x28c)][_0x331b4f(0x209)][_0x331b4f(0x172)](this);},Scene_Title['prototype']['commandNewGameSaveCoreLocked']=function(){const _0x14f4b9=_0x1c260b;DataManager[_0x14f4b9(0x12e)](),$gameTemp[_0x14f4b9(0x232)]=!![],this[_0x14f4b9(0x18d)][_0x14f4b9(0x109)](),SceneManager[_0x14f4b9(0x1a1)](Scene_Save);},VisuMZ[_0x1c260b(0x28c)][_0x1c260b(0xfe)]=Scene_Title[_0x1c260b(0x280)]['commandContinue'],Scene_Title[_0x1c260b(0x280)][_0x1c260b(0x22b)]=function(){const _0x1dfc7d=_0x1c260b;StorageManager[_0x1dfc7d(0x180)]()===_0x1dfc7d(0x25f)?this[_0x1dfc7d(0x270)]():_0x1dfc7d(0x1ee)!==_0x1dfc7d(0x1ee)?this[_0x1dfc7d(0x143)]():VisuMZ[_0x1dfc7d(0x28c)][_0x1dfc7d(0xfe)][_0x1dfc7d(0x172)](this);},Scene_Title[_0x1c260b(0x280)][_0x1c260b(0x270)]=function(){const _0x3e09eb=_0x1c260b;DataManager[_0x3e09eb(0x247)](0x0)[_0x3e09eb(0x151)](()=>this[_0x3e09eb(0x25c)]())[_0x3e09eb(0x188)](()=>this[_0x3e09eb(0x21a)]());},Scene_Title[_0x1c260b(0x280)][_0x1c260b(0x25c)]=function(){const _0x46f929=_0x1c260b;this['_commandWindow'][_0x46f929(0x109)](),SoundManager[_0x46f929(0x11e)](),this[_0x46f929(0x118)](),Scene_Load[_0x46f929(0x280)]['reloadMapIfUpdated'](),SceneManager[_0x46f929(0x1df)](Scene_Map),this[_0x46f929(0x1d1)]=!![],VisuMZ['SaveCore'][_0x46f929(0x26f)][_0x46f929(0x241)][_0x46f929(0x16b)]['call'](this);},Scene_Title[_0x1c260b(0x280)][_0x1c260b(0x21a)]=function(){const _0x191187=_0x1c260b;SoundManager['playBuzzer'](),VisuMZ[_0x191187(0x28c)][_0x191187(0x26f)][_0x191187(0x241)][_0x191187(0x195)][_0x191187(0x172)](this),this['loadFailureConfirmationWindow']();},Scene_Title['prototype'][_0x1c260b(0x12f)]=function(_0x5a23c2){const _0x2997be=_0x1c260b;Scene_Base[_0x2997be(0x280)][_0x2997be(0x12f)][_0x2997be(0x172)](this,_0x5a23c2),this[_0x2997be(0x18d)][_0x2997be(0x145)](),this[_0x2997be(0x18d)][_0x2997be(0x27d)]();},VisuMZ[_0x1c260b(0x28c)][_0x1c260b(0x131)]=Scene_Map[_0x1c260b(0x280)]['onMapLoaded'],Scene_Map[_0x1c260b(0x280)][_0x1c260b(0x129)]=function(){const _0x26c90d=_0x1c260b;VisuMZ[_0x26c90d(0x28c)][_0x26c90d(0x131)][_0x26c90d(0x172)](this);if(SceneManager[_0x26c90d(0xf5)](Scene_Menu))this[_0x26c90d(0xf4)](_0x26c90d(0x1a8)),this['requestAutosave']();else SceneManager[_0x26c90d(0xf5)](Scene_Battle)&&(this[_0x26c90d(0xf4)]('battle'),this[_0x26c90d(0x250)]());},VisuMZ[_0x1c260b(0x28c)][_0x1c260b(0x142)]=Scene_Map[_0x1c260b(0x280)]['onTransferEnd'],Scene_Map[_0x1c260b(0x280)][_0x1c260b(0x20a)]=function(){const _0x5ad1be=_0x1c260b;if(this[_0x5ad1be(0x12a)]()){if(_0x5ad1be(0x1e1)===_0x5ad1be(0x25d)){if(_0x476aa2==='')return;_0x1f61c7+=0x2,_0x2716dc+=0x2,_0x3d4fc8-=0x4,_0x31066d-=0x4;const _0x3faba4=_0x5d188d[_0x5ad1be(0x186)](_0x532163),_0x16657b=_0x3faba4[_0x5ad1be(0x179)],_0x181222=_0x3faba4[_0x5ad1be(0x1f6)],_0x5f4f8b=_0x2e9c1b[_0x5ad1be(0x22e)](_0x5d1eb3/_0x16657b,_0x9c4a33/_0x181222,_0x499c91?0x1:0x3e8),_0x5d9076=_0x389fee[_0x5ad1be(0x183)](_0x3faba4[_0x5ad1be(0x179)]*_0x5f4f8b),_0x16770f=_0x176b02[_0x5ad1be(0x183)](_0x3faba4[_0x5ad1be(0x1f6)]*_0x5f4f8b);this[_0x5ad1be(0xf6)][_0x5ad1be(0x18a)](_0x3faba4,0x0,0x0,_0x16657b,_0x181222,_0x50de19,_0x21a523,_0x5d9076,_0x16770f);}else this[_0x5ad1be(0xf4)](_0x5ad1be(0x1e9));}VisuMZ['SaveCore'][_0x5ad1be(0x142)][_0x5ad1be(0x172)](this);},Scene_Map[_0x1c260b(0x280)][_0x1c260b(0x22a)]=function(){const _0x247fa0=_0x1c260b;if($gameSystem[_0x247fa0(0x102)])return;const _0x1c6d5f=$gameSystem[_0x247fa0(0x265)]();if(StorageManager[_0x247fa0(0x180)]()!==_0x247fa0(0x25f)&&_0x1c6d5f<=0x0)return;this['_active']=![],$gameSystem[_0x247fa0(0x130)](_0x1c6d5f),$gameSystem['onBeforeSave'](),$gameSystem[_0x247fa0(0x102)]=!![],DataManager['saveGame'](_0x1c6d5f)[_0x247fa0(0x151)](()=>this[_0x247fa0(0x146)]())['catch'](()=>this[_0x247fa0(0x206)]()),$gameSystem[_0x247fa0(0x102)]=undefined;},Scene_Map[_0x1c260b(0x280)][_0x1c260b(0x146)]=function(){const _0x5e00ed=_0x1c260b;SoundManager[_0x5e00ed(0x1da)](),VisuMZ[_0x5e00ed(0x28c)][_0x5e00ed(0x26f)][_0x5e00ed(0x241)][_0x5e00ed(0x20e)][_0x5e00ed(0x172)](this),this['openSaveConfirmationWindow'](!![]);},Scene_Map[_0x1c260b(0x280)][_0x1c260b(0x206)]=function(){const _0x48d52d=_0x1c260b;SoundManager[_0x48d52d(0x13f)](),VisuMZ[_0x48d52d(0x28c)][_0x48d52d(0x26f)][_0x48d52d(0x241)][_0x48d52d(0x218)][_0x48d52d(0x172)](this),this[_0x48d52d(0x1ed)](![]);},Scene_Map[_0x1c260b(0x280)][_0x1c260b(0x12f)]=function(_0x595498){const _0x2c3335=_0x1c260b;Scene_Message[_0x2c3335(0x280)]['closeSaveConfirmationWindow'][_0x2c3335(0x172)](this,_0x595498),this[_0x2c3335(0xef)]=!![];},VisuMZ[_0x1c260b(0x28c)][_0x1c260b(0x167)]=Scene_Map[_0x1c260b(0x280)][_0x1c260b(0x21c)],Scene_Map[_0x1c260b(0x280)]['needsFadeIn']=function(){const _0x47d123=_0x1c260b;return VisuMZ[_0x47d123(0x28c)][_0x47d123(0x167)][_0x47d123(0x172)](this)||SceneManager[_0x47d123(0xf5)](Scene_Title);},VisuMZ[_0x1c260b(0x28c)]['Scene_Menu_create']=Scene_Menu[_0x1c260b(0x280)][_0x1c260b(0x15d)],Scene_Menu[_0x1c260b(0x280)]['create']=function(){const _0x46b05f=_0x1c260b;VisuMZ['SaveCore'][_0x46b05f(0xf9)][_0x46b05f(0x172)](this),SceneManager[_0x46b05f(0xf5)](Scene_Map)&&(this['determineAutosaveBypass'](_0x46b05f(0x174)),this[_0x46b05f(0x250)]());},VisuMZ[_0x1c260b(0x28c)][_0x1c260b(0x21e)]=Scene_Menu[_0x1c260b(0x280)][_0x1c260b(0x24a)],Scene_Menu[_0x1c260b(0x280)][_0x1c260b(0x24a)]=function(){const _0x550e04=_0x1c260b,_0x291729=StorageManager['saveStyle']();switch(_0x291729){case _0x550e04(0x1c6):case _0x550e04(0x25f):this[_0x550e04(0x111)]();break;default:VisuMZ[_0x550e04(0x28c)][_0x550e04(0x21e)][_0x550e04(0x172)](this);break;}},Scene_Menu['prototype']['commandSaveLocked']=function(){const _0xf141ef=_0x1c260b,_0x56955d=$gameSystem[_0xf141ef(0x265)]();$gameSystem['setSavefileId'](_0x56955d),$gameSystem[_0xf141ef(0x150)](),DataManager['saveGame'](_0x56955d)[_0xf141ef(0x151)](()=>this['onSaveCoreSaveSuccess']())[_0xf141ef(0x188)](()=>this['onSaveCoreSaveFailure']());},Scene_Menu[_0x1c260b(0x280)][_0x1c260b(0x1bf)]=function(){const _0x24a9cb=_0x1c260b;SoundManager[_0x24a9cb(0x1da)](),VisuMZ[_0x24a9cb(0x28c)][_0x24a9cb(0x26f)][_0x24a9cb(0x241)]['OnSaveSuccessJS'][_0x24a9cb(0x172)](this),this['openSaveConfirmationWindow'](!![]);},Scene_Menu[_0x1c260b(0x280)][_0x1c260b(0x16e)]=function(){const _0x38e7ba=_0x1c260b;SoundManager['playBuzzer'](),VisuMZ[_0x38e7ba(0x28c)]['Settings'][_0x38e7ba(0x241)][_0x38e7ba(0x218)][_0x38e7ba(0x172)](this),this['openSaveConfirmationWindow'](![]);},Scene_Menu['prototype'][_0x1c260b(0x12f)]=function(_0x26c5ea){const _0x453fb0=_0x1c260b;Scene_MenuBase[_0x453fb0(0x280)][_0x453fb0(0x12f)]['call'](this,_0x26c5ea),this['_commandWindow'][_0x453fb0(0x27d)]();},Scene_Battle['prototype'][_0x1c260b(0x250)]=function(){},VisuMZ[_0x1c260b(0x28c)][_0x1c260b(0x1e5)]=Scene_Options[_0x1c260b(0x280)][_0x1c260b(0x13a)],Scene_Options['prototype']['maxCommands']=function(){const _0x5274e1=_0x1c260b;let _0x4573b7=VisuMZ['SaveCore'][_0x5274e1(0x1e5)][_0x5274e1(0x172)](this);const _0x2c3824=VisuMZ['SaveCore'][_0x5274e1(0x26f)];if(_0x2c3824[_0x5274e1(0x251)][_0x5274e1(0x284)]&&_0x2c3824[_0x5274e1(0x251)][_0x5274e1(0x1a0)])_0x4573b7++;return _0x4573b7;},Scene_Save['prototype'][_0x1c260b(0x146)]=function(){const _0x56b162=_0x1c260b;SoundManager[_0x56b162(0x1da)](),VisuMZ['SaveCore'][_0x56b162(0x26f)][_0x56b162(0x241)][_0x56b162(0x20e)][_0x56b162(0x172)](this),this[_0x56b162(0x17b)][_0x56b162(0x1f3)](),this[_0x56b162(0x1ed)](!![]);},VisuMZ[_0x1c260b(0x28c)][_0x1c260b(0x162)]=Scene_Save['prototype'][_0x1c260b(0x206)],Scene_Save[_0x1c260b(0x280)]['onSaveFailure']=function(){const _0x4a8c5b=_0x1c260b;SoundManager[_0x4a8c5b(0x13f)](),VisuMZ[_0x4a8c5b(0x28c)][_0x4a8c5b(0x26f)][_0x4a8c5b(0x241)]['OnSaveFailureJS'][_0x4a8c5b(0x172)](this),this['openSaveConfirmationWindow'](![]);},Scene_Save[_0x1c260b(0x280)][_0x1c260b(0x12f)]=function(_0x56cc8f){const _0x4a3c89=_0x1c260b;Scene_File['prototype'][_0x4a3c89(0x12f)][_0x4a3c89(0x172)](this,_0x56cc8f),_0x56cc8f?this[_0x4a3c89(0x1ca)]():_0x4a3c89(0x1f9)===_0x4a3c89(0x10b)?(_0x495c6b('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'['format'](_0x3aaca3,_0xc9603,_0x46c9ca)),_0x3d6b90[_0x4a3c89(0xf2)]()):this['activateListWindow']();},Scene_Save[_0x1c260b(0x280)][_0x1c260b(0x26c)]=function(){const _0x387587=_0x1c260b;$gameTemp['_pickLockedSaveSlot']=![],Scene_File['prototype'][_0x387587(0x26c)][_0x387587(0x172)](this);},VisuMZ[_0x1c260b(0x28c)][_0x1c260b(0x16d)]=Scene_Save[_0x1c260b(0x280)]['helpWindowText'],Scene_Save[_0x1c260b(0x280)]['helpWindowText']=function(){const _0x11cdbd=_0x1c260b;if($gameTemp['_pickLockedSaveSlot'])return TextManager[_0x11cdbd(0x1ff)];else{if(_0x11cdbd(0x1af)!==_0x11cdbd(0x1af)){const _0x168431=this[_0x11cdbd(0x282)](),_0x5e63fd=_0x395e39[_0x11cdbd(0x28c)][_0x11cdbd(0x26f)][_0x11cdbd(0x241)][_0x11cdbd(0x104)];return _0x168431+_0x5e63fd[_0x11cdbd(0x173)](_0x435e0d);}else return VisuMZ[_0x11cdbd(0x28c)][_0x11cdbd(0x16d)][_0x11cdbd(0x172)](this);}},VisuMZ[_0x1c260b(0x28c)][_0x1c260b(0x234)]=Scene_Save[_0x1c260b(0x280)]['executeSave'],Scene_Save['prototype'][_0x1c260b(0x158)]=function(_0x499042){const _0x439d8c=_0x1c260b;$gameTemp[_0x439d8c(0x232)]?this[_0x439d8c(0x260)](_0x499042):VisuMZ[_0x439d8c(0x28c)][_0x439d8c(0x234)][_0x439d8c(0x172)](this,_0x499042);},Scene_Save[_0x1c260b(0x280)][_0x1c260b(0x260)]=function(_0x1d2e65){const _0x57e03e=_0x1c260b;$gameTemp[_0x57e03e(0x232)]=![],SoundManager['playLoad'](),$gameSystem['setSavefileId'](_0x1d2e65),this[_0x57e03e(0x118)](),SceneManager[_0x57e03e(0x1df)](Scene_Map);},VisuMZ[_0x1c260b(0x28c)][_0x1c260b(0x20d)]=Scene_Load[_0x1c260b(0x280)][_0x1c260b(0x136)],Scene_Load['prototype']['onLoadSuccess']=function(){const _0x19524f=_0x1c260b;VisuMZ[_0x19524f(0x28c)]['Scene_Load_onLoadSuccess']['call'](this),VisuMZ[_0x19524f(0x28c)][_0x19524f(0x26f)]['Save'][_0x19524f(0x16b)][_0x19524f(0x172)](this),setTimeout(VisuMZ[_0x19524f(0x28c)][_0x19524f(0x140)][_0x19524f(0x271)](this),0x3e8);},Scene_Load['prototype'][_0x1c260b(0x182)]=function(){const _0x110bd8=_0x1c260b;SoundManager[_0x110bd8(0x13f)](),VisuMZ[_0x110bd8(0x28c)][_0x110bd8(0x26f)][_0x110bd8(0x241)][_0x110bd8(0x195)][_0x110bd8(0x172)](this),this[_0x110bd8(0x1c0)]();},Scene_Load[_0x1c260b(0x280)]['closeSaveConfirmationWindow']=function(_0x29a8f7){const _0x211687=_0x1c260b;Scene_File[_0x211687(0x280)][_0x211687(0x12f)][_0x211687(0x172)](this,_0x29a8f7),this['activateListWindow']();},VisuMZ[_0x1c260b(0x28c)][_0x1c260b(0x140)]=function(){const _0x1e7ebc=_0x1c260b;$gameSystem[_0x1e7ebc(0x102)]=undefined;},ImageManager[_0x1c260b(0x149)]=ImageManager[_0x1c260b(0x149)]||0x9,ImageManager[_0x1c260b(0x19f)]=ImageManager[_0x1c260b(0x19f)]||0x6;!Imported['VisuMZ_1_MainMenuCore']&&(Window_Base[_0x1c260b(0x280)][_0x1c260b(0x258)]=function(_0x36a538,_0x257aff,_0x5d5ec2){const _0x5aacb5=_0x1c260b,_0x3cd2e5=_0x36a538[_0x5aacb5(0x190)](/\$/i),_0x39d0be=ImageManager[_0x5aacb5(0x163)](_0x36a538),_0x53ffd7=_0x39d0be[_0x5aacb5(0x179)]/(_0x3cd2e5?0x1:ImageManager[_0x5aacb5(0x149)]),_0x5a8205=_0x39d0be[_0x5aacb5(0x1f6)]/(_0x3cd2e5?0x1:ImageManager[_0x5aacb5(0x19f)]),_0x11e367=0x0,_0x3c8a9c=0x0;this['contents']['blt'](_0x39d0be,_0x11e367,_0x3c8a9c,_0x53ffd7,_0x5a8205,_0x257aff-_0x53ffd7/0x2,_0x5d5ec2-_0x5a8205);});;VisuMZ[_0x1c260b(0x28c)][_0x1c260b(0x200)]=Window_Options[_0x1c260b(0x280)][_0x1c260b(0x138)],Window_Options[_0x1c260b(0x280)]['addGeneralOptions']=function(){const _0x2be8f0=_0x1c260b;VisuMZ[_0x2be8f0(0x28c)][_0x2be8f0(0x200)]['call'](this),this[_0x2be8f0(0x277)]();},Window_Options[_0x1c260b(0x280)][_0x1c260b(0x277)]=function(){const _0x51e623=_0x1c260b;VisuMZ[_0x51e623(0x28c)][_0x51e623(0x26f)][_0x51e623(0x251)][_0x51e623(0x284)]&&(_0x51e623(0x1ce)!==_0x51e623(0x1ce)?(this[_0x51e623(0xf4)](_0x51e623(0x174)),this[_0x51e623(0x250)]()):this['addSaveCoreAutosaveCommand']());},Window_Options[_0x1c260b(0x280)][_0x1c260b(0xfc)]=function(){const _0x1e0901=_0x1c260b,_0x26f0ce=TextManager[_0x1e0901(0x114)],_0x355d4f='autosave';this['addCommand'](_0x26f0ce,_0x355d4f);};function Window_AutosaveConfirm(){const _0x5c217a=_0x1c260b;this[_0x5c217a(0x18f)](...arguments);}Window_AutosaveConfirm[_0x1c260b(0x280)]=Object[_0x1c260b(0x15d)](Window_Base['prototype']),Window_AutosaveConfirm[_0x1c260b(0x280)][_0x1c260b(0x27e)]=Window_AutosaveConfirm,Window_AutosaveConfirm[_0x1c260b(0x280)][_0x1c260b(0x18f)]=function(_0x1c0dd9){const _0x48ab8a=_0x1c260b;this[_0x48ab8a(0x1e0)]=0x0,Window_Base['prototype']['initialize']['call'](this,_0x1c0dd9),this[_0x48ab8a(0x1ef)]=0x0,this[_0x48ab8a(0x290)]=0x0;},Window_AutosaveConfirm[_0x1c260b(0x280)]['drawBackground']=function(){const _0x3c7ec2=_0x1c260b,_0x3dbb92=0x0,_0x4fa93e=0x0,_0x2ea76f=this[_0x3c7ec2(0x283)],_0x933fd2=this[_0x3c7ec2(0x28f)],_0x15121e=ColorManager[_0x3c7ec2(0x1a2)](),_0x2b1a69=ColorManager[_0x3c7ec2(0x230)](),_0x4eb2f4=_0x2ea76f/0x2;this[_0x3c7ec2(0x1fd)][_0x3c7ec2(0x178)](_0x3dbb92,_0x4fa93e,_0x4eb2f4,_0x933fd2,_0x2b1a69,_0x15121e),this[_0x3c7ec2(0x1fd)][_0x3c7ec2(0x178)](_0x3dbb92+_0x4eb2f4,_0x4fa93e,_0x4eb2f4,_0x933fd2,_0x15121e,_0x2b1a69);},Window_AutosaveConfirm[_0x1c260b(0x280)][_0x1c260b(0x152)]=function(_0x22cdc7){const _0x43f813=_0x1c260b;this[_0x43f813(0x22f)]=_0x22cdc7,this[_0x43f813(0x1f3)]();},Window_AutosaveConfirm[_0x1c260b(0x280)][_0x1c260b(0x1f3)]=function(){const _0x125b47=_0x1c260b;this[_0x125b47(0x1fd)][_0x125b47(0x115)]();const _0x1776ca=this[_0x125b47(0x22f)]?TextManager[_0x125b47(0x13e)]:TextManager['autosaveFailure'],_0x34a018=Math['ceil'](this[_0x125b47(0x263)](_0x1776ca)[_0x125b47(0x179)]);this[_0x125b47(0x179)]=_0x34a018+($gameSystem[_0x125b47(0x1db)]()+this[_0x125b47(0x26a)]())*0x2,this[_0x125b47(0x165)](),this['createContents']();const _0x320f5f=Math[_0x125b47(0x27a)]((this[_0x125b47(0x283)]-_0x34a018)/0x2);this[_0x125b47(0x1c9)](),this[_0x125b47(0x1d6)](_0x1776ca,_0x320f5f,0x0,_0x34a018);},Window_AutosaveConfirm[_0x1c260b(0x280)]['getScreenPosition']=function(){const _0x3785b7=_0x1c260b;return VisuMZ[_0x3785b7(0x28c)][_0x3785b7(0x26f)][_0x3785b7(0x268)][_0x3785b7(0x14e)];},Window_AutosaveConfirm[_0x1c260b(0x280)][_0x1c260b(0x165)]=function(){const _0x57f570=_0x1c260b,_0x25ab47=this[_0x57f570(0x24b)]();if(_0x25ab47[_0x57f570(0x190)](/upper/i))_0x57f570(0x224)===_0x57f570(0x224)?this['y']=-0x1*$gameSystem[_0x57f570(0x1db)]():(_0x3326d7[_0x57f570(0x1da)](),_0x1e4353[_0x57f570(0x28c)][_0x57f570(0x26f)]['Save']['OnSaveSuccessJS'][_0x57f570(0x172)](this),this[_0x57f570(0x17b)][_0x57f570(0x1f3)](),this[_0x57f570(0x1ed)](!![]));else _0x25ab47[_0x57f570(0x190)](/lower/i)?_0x57f570(0x14f)!==_0x57f570(0x14f)?(_0x8036fb['setupNewGame'](),_0x445e7e[_0x57f570(0x232)]=!![],this['_commandWindow'][_0x57f570(0x109)](),_0x5c296c['push'](_0x40080d)):this['y']=Graphics[_0x57f570(0x1f6)]-this[_0x57f570(0x1f6)]+$gameSystem[_0x57f570(0x1db)]():this['y']=(Graphics[_0x57f570(0x1f6)]-this[_0x57f570(0x1f6)])/0x2;if(_0x25ab47[_0x57f570(0x190)](/left/i))this['x']=-0x1*$gameSystem['windowPadding']();else _0x25ab47[_0x57f570(0x190)](/right/i)?this['x']=Graphics[_0x57f570(0x179)]-this[_0x57f570(0x179)]+$gameSystem[_0x57f570(0x1db)]():this['x']=(Graphics[_0x57f570(0x179)]-this[_0x57f570(0x179)])/0x2;this['x']=Math[_0x57f570(0x176)](this['x']),this['y']=Math[_0x57f570(0x176)](this['y']);},Window_AutosaveConfirm[_0x1c260b(0x280)]['update']=function(){const _0x3093c0=_0x1c260b;Window_Base[_0x3093c0(0x280)]['update'][_0x3093c0(0x172)](this);if(this[_0x3093c0(0x1e0)]!==0x0)this['updateFade']();},Window_AutosaveConfirm['prototype'][_0x1c260b(0x238)]=function(){const _0x46df98=_0x1c260b;this[_0x46df98(0x290)]+=this[_0x46df98(0x1e0)];if(this[_0x46df98(0x290)]>=0xff||this[_0x46df98(0x290)]<=0x0)this[_0x46df98(0x14a)](0x0);},Window_AutosaveConfirm[_0x1c260b(0x280)][_0x1c260b(0x14a)]=function(_0x557bb3){const _0x2757f8=_0x1c260b;this[_0x2757f8(0x1e0)]=_0x557bb3;},Window_AutosaveConfirm[_0x1c260b(0x280)][_0x1c260b(0x208)]=function(){const _0x2d7c67=_0x1c260b;this[_0x2d7c67(0x14a)](0x10);},Window_AutosaveConfirm[_0x1c260b(0x280)]['fadeOut']=function(){this['setFadeSpeed'](-0x10);},VisuMZ['SaveCore'][_0x1c260b(0x103)]=Window_SavefileList[_0x1c260b(0x280)]['setMode'],Window_SavefileList[_0x1c260b(0x280)]['setMode']=function(_0x29a968,_0x4a3ab1){const _0x5e6837=_0x1c260b;if(StorageManager[_0x5e6837(0x1b6)]()===_0x5e6837(0x1bc))_0x4a3ab1=![];if($gameTemp[_0x5e6837(0x232)])_0x4a3ab1=![];VisuMZ[_0x5e6837(0x28c)]['Window_SavefileList_setMode'][_0x5e6837(0x172)](this,_0x29a968,_0x4a3ab1);},Window_SavefileList[_0x1c260b(0x280)][_0x1c260b(0x166)]=function(){const _0x23d6dc=_0x1c260b,_0x311659=VisuMZ[_0x23d6dc(0x28c)][_0x23d6dc(0x26f)][_0x23d6dc(0x120)],_0x4ea922=this[_0x23d6dc(0x184)]();switch(_0x4ea922){case _0x23d6dc(0x1b2):return _0x311659['VertRows'];break;case'box':return _0x311659[_0x23d6dc(0x164)];break;case'large':return _0x311659[_0x23d6dc(0x185)];break;default:return _0x311659[_0x23d6dc(0x137)];break;}},Window_SavefileList['prototype'][_0x1c260b(0x10c)]=function(){const _0x4da9bb=_0x1c260b,_0x5b1aca=VisuMZ[_0x4da9bb(0x28c)][_0x4da9bb(0x26f)][_0x4da9bb(0x120)],_0x2e89e4=this[_0x4da9bb(0x184)]();switch(_0x2e89e4){case _0x4da9bb(0x1b2):return _0x5b1aca['VertCols'];break;case _0x4da9bb(0x12c):return _0x5b1aca[_0x4da9bb(0x1b9)];break;case'large':return _0x5b1aca['LargeCols'];break;default:return _0x5b1aca['ListCols'];break;}},Window_SavefileList[_0x1c260b(0x280)][_0x1c260b(0x106)]=function(){const _0x53d431=_0x1c260b;Imported['VisuMZ_1_MessageCore']&&Window_Selectable[_0x53d431(0x280)][_0x53d431(0x106)][_0x53d431(0x172)](this);},Window_SavefileList[_0x1c260b(0x280)][_0x1c260b(0x20f)]=function(_0x58b07b){const _0x382270=_0x1c260b;if(Imported['VisuMZ_1_MessageCore'])return Window_Selectable[_0x382270(0x280)]['setWordWrap']['call'](this,_0x58b07b);else{if(_0x382270(0x201)===_0x382270(0x201))return'';else this['y']=_0x1b2aea['height']-this[_0x382270(0x1f6)]+_0x5e1c89['windowPadding']();}},Window_SavefileList[_0x1c260b(0x280)]['actorStyle']=function(){const _0x35b364=_0x1c260b;return VisuMZ[_0x35b364(0x28c)][_0x35b364(0x26f)][_0x35b364(0x1f5)];},Window_SavefileList[_0x1c260b(0x280)]['menuStyle']=function(){const _0x49841b=_0x1c260b;return VisuMZ['SaveCore'][_0x49841b(0x26f)][_0x49841b(0x20b)];},Window_SavefileList['prototype'][_0x1c260b(0x210)]=function(_0x187725){const _0x3dd5e5=_0x1c260b,_0x38a086=Math['max'](0x0,this[_0x3dd5e5(0x134)](_0x187725));this[_0x3dd5e5(0x15b)](_0x38a086);},Window_SavefileList[_0x1c260b(0x280)][_0x1c260b(0x1b5)]=function(_0x3fa5ed){const _0x4d5e99=_0x1c260b,_0x2201e9=this[_0x4d5e99(0x249)](_0x3fa5ed),_0x14beb8=DataManager[_0x4d5e99(0x205)](_0x2201e9);if(_0x14beb8)_0x14beb8[_0x4d5e99(0x265)]=_0x2201e9;this['_savefileId']=_0x2201e9;const _0x1db502=this['itemRect'](_0x3fa5ed);this[_0x4d5e99(0x285)](),this[_0x4d5e99(0x1d2)](this[_0x4d5e99(0x18e)](_0x2201e9)),this[_0x4d5e99(0x217)](_0x14beb8,_0x1db502);},Window_SavefileList[_0x1c260b(0x280)]['drawTitle']=function(_0x29164d,_0x3be021,_0x3ef2c0){const _0x37997c=_0x1c260b;if(_0x29164d===0x0)this[_0x37997c(0x281)](TextManager[_0x37997c(0x1dc)],_0x3be021,_0x3ef2c0,0xb4);else{if(_0x37997c(0x1ba)!==_0x37997c(0x1ba)){const _0x3a565c=_0xb7403b['max'](0x0,this[_0x37997c(0x134)](_0x1f3d27));this[_0x37997c(0x15b)](_0x3a565c);}else this['drawText'](TextManager[_0x37997c(0x15c)]+'\x20'+_0x29164d,_0x3be021,_0x3ef2c0,0xb4);}},Window_SavefileList['prototype'][_0x1c260b(0x276)]=function(_0x582db8,_0x17319a,_0x148b1f){const _0x7752c9=_0x1c260b;if(_0x582db8===0x0||DataManager[_0x7752c9(0x275)]()!==_0x582db8)return;const _0x5717f1=TextManager['latestSave'];this[_0x7752c9(0x246)](ColorManager[_0x7752c9(0x202)]()),this['drawText'](_0x5717f1,_0x17319a,_0x148b1f,0xb4);},Window_SavefileList[_0x1c260b(0x280)][_0x1c260b(0x1fc)]=function(_0x670185,_0x547a1a,_0x4667f9,_0x8b9229,_0x2db488){const _0x538a1a=_0x1c260b;if(!_0x670185[_0x538a1a(0x25e)])return;const _0x41ebfe=this['actorStyle']();switch(_0x41ebfe){case _0x538a1a(0x168):this[_0x538a1a(0x105)](_0x670185,_0x547a1a,_0x4667f9,_0x8b9229,_0x2db488);break;case _0x538a1a(0x28e):this[_0x538a1a(0x11a)](_0x670185,_0x547a1a,_0x4667f9,_0x8b9229,_0x2db488);break;case _0x538a1a(0x13d):this[_0x538a1a(0x225)](_0x670185,_0x547a1a,_0x4667f9,_0x8b9229,_0x2db488);break;default:break;}},Window_SavefileList[_0x1c260b(0x280)][_0x1c260b(0x105)]=function(_0x51e8b4,_0x480d25,_0x1a1af6,_0x36b069,_0x335180){const _0x496d68=_0x1c260b;let _0x58fc06=Math['max'](_0x51e8b4['faces'][_0x496d68(0x153)],Scene_File[_0x496d68(0x248)]);const _0x4beb38=Math[_0x496d68(0x22e)](ImageManager[_0x496d68(0x16c)],Math['floor'](_0x36b069/_0x58fc06));_0x480d25=_0x480d25+Math['round']((_0x36b069-_0x58fc06*_0x4beb38)/0x2);for(const _0x15e93b of _0x51e8b4['faces']){this[_0x496d68(0x262)](_0x15e93b[0x0],_0x15e93b[0x1],_0x480d25,_0x1a1af6+0x1,_0x4beb38,_0x335180-0x2),_0x480d25+=_0x4beb38;}},ImageManager[_0x1c260b(0x240)]=VisuMZ[_0x1c260b(0x28c)]['Settings'][_0x1c260b(0x120)]['SpriteWidth'],ImageManager[_0x1c260b(0x213)]=VisuMZ[_0x1c260b(0x28c)]['Settings']['SaveMenu'][_0x1c260b(0x157)],Window_SavefileList[_0x1c260b(0x280)][_0x1c260b(0x11a)]=function(_0x22e74d,_0x2407f7,_0x26ac8b,_0x2733c8,_0xe1842d){const _0x291853=_0x1c260b;let _0x44a480=Math[_0x291853(0x252)](_0x22e74d[_0x291853(0x25e)][_0x291853(0x153)],Scene_File[_0x291853(0x248)]);const _0x5841d4=ImageManager[_0x291853(0x240)];_0x2407f7=_0x2407f7+Math['round']((_0x2733c8-_0x44a480*_0x5841d4)/0x2)+_0x5841d4/0x2,_0x26ac8b=_0x26ac8b+_0xe1842d-0x8;for(const _0x2ae2a1 of _0x22e74d[_0x291853(0x25e)]){if(_0x291853(0x222)===_0x291853(0xf8)){_0x47286a=_0x244b7e||_0x291853(0x19b);let _0x545a87=this[_0x291853(0x1b8)](_0x17b037);_0x30bc5d[_0x291853(0x1cd)]&&this[_0x291853(0x14d)]()&&(_0x545a87=_0x291853(0x1e6)[_0x291853(0x173)](_0x545a87)),this[_0x291853(0x281)](_0x545a87,_0x482265,_0x3cb38a,_0x503cf6,_0x2b8046);}else this['drawCharacter'](_0x2ae2a1[0x0],_0x2ae2a1[0x1],_0x2407f7,_0x26ac8b),_0x2407f7+=_0x5841d4;}},Window_SavefileList[_0x1c260b(0x280)][_0x1c260b(0x225)]=function(_0x1222bd,_0x4f653c,_0x50fd67,_0x48b54c,_0x1d6040){const _0x461be2=_0x1c260b;if(!_0x1222bd['svbattlers'])return this[_0x461be2(0x11a)](_0x1222bd,_0x4f653c,_0x50fd67,_0x48b54c,_0x1d6040);let _0x9732e0=Math[_0x461be2(0x252)](_0x1222bd['svbattlers'][_0x461be2(0x153)],Scene_File[_0x461be2(0x248)]);const _0x19ec39=ImageManager[_0x461be2(0x213)];_0x4f653c=_0x4f653c+Math[_0x461be2(0x176)]((_0x48b54c-_0x9732e0*_0x19ec39)/0x2)+_0x19ec39/0x2,_0x50fd67=_0x50fd67+_0x1d6040-0x8;for(const _0x16823b of _0x1222bd['svbattlers']){this[_0x461be2(0x258)](_0x16823b,_0x4f653c,_0x50fd67),_0x4f653c+=_0x19ec39;}},Window_SavefileList[_0x1c260b(0x280)][_0x1c260b(0x16a)]=function(_0x30da71,_0x4516a1,_0x468bdc,_0x314f1a,_0x139ad4,_0x11c3ff){const _0x594ae8=_0x1c260b;if(_0x30da71==='')return;_0x4516a1+=0x2,_0x468bdc+=0x2,_0x314f1a-=0x4,_0x139ad4-=0x4;const _0x1baade=ImageManager[_0x594ae8(0x186)](_0x30da71),_0x46269d=_0x1baade[_0x594ae8(0x179)],_0x1eb5c8=_0x1baade[_0x594ae8(0x1f6)],_0x1045ee=Math[_0x594ae8(0x22e)](_0x314f1a/_0x46269d,_0x139ad4/_0x1eb5c8,_0x11c3ff?0x1:0x3e8),_0x1c2fc9=Math['ceil'](_0x1baade['width']*_0x1045ee),_0x4a9834=Math[_0x594ae8(0x183)](_0x1baade[_0x594ae8(0x1f6)]*_0x1045ee);this[_0x594ae8(0xf6)]['blt'](_0x1baade,0x0,0x0,_0x46269d,_0x1eb5c8,_0x4516a1,_0x468bdc,_0x1c2fc9,_0x4a9834);},Window_SavefileList['prototype'][_0x1c260b(0x1dd)]=function(_0x1d98ae,_0xcbbf03,_0x3ad9cd,_0x2fd369,_0x4797e5,_0x19da33){const _0x5cde42=_0x1c260b;if(_0x1d98ae==='')return;_0xcbbf03+=0x2,_0x3ad9cd+=0x2,_0x2fd369-=0x4,_0x4797e5-=0x4;const _0x43ca89=ImageManager[_0x5cde42(0x186)](_0x1d98ae),_0x2fd2e5=_0x43ca89[_0x5cde42(0x179)],_0x12f5e2=_0x43ca89[_0x5cde42(0x1f6)],_0x7cde38=Math[_0x5cde42(0x22e)](_0x2fd369/_0x2fd2e5,_0x4797e5/_0x12f5e2,_0x19da33?0x1:0x3e8),_0x31223d=Math[_0x5cde42(0x183)](_0x43ca89[_0x5cde42(0x179)]*_0x7cde38),_0x5853a9=Math[_0x5cde42(0x183)](_0x43ca89[_0x5cde42(0x1f6)]*_0x7cde38);_0xcbbf03+=(_0x2fd369-_0x31223d)/0x2,_0x3ad9cd+=(_0x4797e5-_0x5853a9)/0x2,this[_0x5cde42(0xf6)]['blt'](_0x43ca89,0x0,0x0,_0x2fd2e5,_0x12f5e2,_0xcbbf03,_0x3ad9cd,_0x31223d,_0x5853a9);},Window_SavefileList[_0x1c260b(0x280)]['drawPlaytime']=function(_0x246d4e,_0x2bd277,_0x3585d7,_0x5dd344,_0x643ee5){const _0x35c6f5=_0x1c260b;_0x246d4e['playtime']&&(_0x643ee5=_0x643ee5||_0x35c6f5(0x19b),this['drawText'](_0x246d4e[_0x35c6f5(0x1ec)],_0x2bd277,_0x3585d7,_0x5dd344,_0x643ee5));},Window_SavefileList['prototype'][_0x1c260b(0x192)]=function(_0x38d372,_0x2980a0,_0x20c7b6,_0x4841f3,_0x4f9266){const _0x36589d=_0x1c260b;if(_0x38d372[_0x36589d(0x254)]){_0x4f9266=_0x4f9266||_0x36589d(0x19b);let _0x3e7256=this[_0x36589d(0x1b8)](_0x38d372);if(Imported[_0x36589d(0x1cd)]&&this[_0x36589d(0x14d)]()){if('jmarz'==='uvUgA'){if(_0x14530d===0x0||_0x57678e[_0x36589d(0x275)]()!==_0x2a4792)return;const _0x4178b3=_0x3b3d3c['latestSave'];this['changeTextColor'](_0x481915[_0x36589d(0x202)]()),this['drawText'](_0x4178b3,_0x599815,_0x44f12c,0xb4);}else _0x3e7256='{{%1}}'[_0x36589d(0x173)](_0x3e7256);}this[_0x36589d(0x281)](_0x3e7256,_0x2980a0,_0x20c7b6,_0x4841f3,_0x4f9266);}},Window_SavefileList[_0x1c260b(0x280)][_0x1c260b(0x1b8)]=function(_0x5698f6){const _0x1f3f01=_0x1c260b,_0x3bcc11=_0x5698f6[_0x1f3f01(0x254)],_0x2a7c0d=new Date(_0x3bcc11);let _0x513117=_0x1f3f01(0x288);_0x513117=_0x513117[_0x1f3f01(0x244)](/\[YEAR\]/gi,'%1'),_0x513117=_0x513117[_0x1f3f01(0x244)](/\[MONTH\]/gi,'%2'),_0x513117=_0x513117['replace'](/\[DATE\]/gi,'%3'),_0x513117=_0x513117[_0x1f3f01(0x244)](/\[HOUR\]/gi,'%4'),_0x513117=_0x513117['replace'](/\[MINUTE\]/gi,'%5'),_0x513117=_0x513117[_0x1f3f01(0x244)](/\[SECOND\]/gi,'%6');let _0x374779=String(_0x2a7c0d['getFullYear']())[_0x1f3f01(0x1e7)]('')[_0x1f3f01(0x1c7)]('​'),_0x3c2a4b=String(_0x2a7c0d[_0x1f3f01(0x24f)]()+0x1),_0x4a1501=String(_0x2a7c0d['getDate']())[_0x1f3f01(0x279)](0x2,'0'),_0x41b5f3=String(_0x2a7c0d[_0x1f3f01(0x214)]())[_0x1f3f01(0x279)](0x2,'0'),_0x459ac1=String(_0x2a7c0d[_0x1f3f01(0x147)]())[_0x1f3f01(0x279)](0x2,'0'),_0x4011c8=String(_0x2a7c0d[_0x1f3f01(0x1f7)]())['padStart'](0x2,'0'),_0x1197b6=_0x513117[_0x1f3f01(0x173)](_0x374779,_0x3c2a4b,_0x4a1501,_0x41b5f3,_0x459ac1,_0x4011c8);return _0x1197b6;},Window_SavefileList[_0x1c260b(0x280)]['drawCurrency']=function(_0x909e7a,_0x25f982,_0x2ce205,_0x5ee819){const _0x43d021=_0x1c260b;if(_0x909e7a[_0x43d021(0x1fa)]===undefined)return;const _0x424caa=_0x909e7a[_0x43d021(0x1fa)],_0x213bf1=TextManager[_0x43d021(0x220)];Window_SavefileList[_0x43d021(0x280)][_0x43d021(0x211)][_0x43d021(0x172)](this,_0x424caa,_0x213bf1,_0x25f982,_0x2ce205,_0x5ee819);},Window_SavefileList[_0x1c260b(0x280)]['drawDescription']=function(_0x9d4a07,_0x42b1f2,_0x1c2a55,_0x57da0e,_0x2f4d83){const _0x4dbcfd=_0x1c260b;if(_0x9d4a07[_0x4dbcfd(0x1bd)]){const _0x52e41b=this[_0x4dbcfd(0x263)](_0x9d4a07[_0x4dbcfd(0x1bd)])[_0x4dbcfd(0x179)];_0x2f4d83=_0x2f4d83||'left';if(_0x2f4d83===_0x4dbcfd(0x239))_0x42b1f2=_0x42b1f2+_0x57da0e-_0x52e41b;else{if(_0x2f4d83==='center'){if(_0x4dbcfd(0x22d)==='jgLKT')return![];else _0x42b1f2=_0x42b1f2+(_0x57da0e-_0x52e41b)/0x2;}}this[_0x4dbcfd(0x1d6)](_0x9d4a07[_0x4dbcfd(0x1bd)],_0x42b1f2,_0x1c2a55,_0x57da0e);}},Window_SavefileList['prototype']['drawContents']=function(_0x34d0e5,_0xd9d572){const _0x49d179=_0x1c260b;if(_0x34d0e5){const _0x3fe5ac=ImageManager[_0x49d179(0x186)](_0x34d0e5[_0x49d179(0x110)]||'');_0x3fe5ac[_0x49d179(0x107)](this[_0x49d179(0x28d)]['bind'](this,_0x34d0e5,_0xd9d572));}else this[_0x49d179(0x193)](this['_savefileId'],_0xd9d572);},Window_SavefileList['prototype']['drawContentsLoaded']=function(_0x519916,_0x4fcef4){const _0x120c64=_0x1c260b,_0x54da65=this[_0x120c64(0x184)]();switch(_0x54da65){case'vertical':this[_0x120c64(0x124)](_0x519916,_0x4fcef4);break;case _0x120c64(0x12c):this[_0x120c64(0x1d7)](_0x519916,_0x4fcef4);break;case _0x120c64(0x113):this['drawLargeStyleContents'](_0x519916,_0x4fcef4);break;default:this[_0x120c64(0x237)](_0x519916,_0x4fcef4);break;}this[_0x120c64(0x285)]();const _0x3c8a1d=_0x519916[_0x120c64(0x265)];this['drawFileData'](_0x3c8a1d,_0x4fcef4);},Window_SavefileList[_0x1c260b(0x280)]['drawFileData']=function(_0x28e72e,_0x7cfde2){const _0x4d24b8=_0x1c260b,_0x3511d7=this['menuStyle']();switch(_0x3511d7){case _0x4d24b8(0x1b2):this[_0x4d24b8(0x1a5)](_0x28e72e,_0x7cfde2);break;case _0x4d24b8(0x12c):this[_0x4d24b8(0x127)](_0x28e72e,_0x7cfde2);break;case _0x4d24b8(0x113):this[_0x4d24b8(0x14b)](_0x28e72e,_0x7cfde2);break;default:this[_0x4d24b8(0x10d)](_0x28e72e,_0x7cfde2);break;}},Window_SavefileList['prototype'][_0x1c260b(0x237)]=function(_0x780b4,_0x14c306){const _0x5f4b65=_0x1c260b;VisuMZ[_0x5f4b65(0x28c)][_0x5f4b65(0x26f)][_0x5f4b65(0x120)]['ListContentsJS'][_0x5f4b65(0x172)](this,_0x780b4,_0x14c306);},Window_SavefileList[_0x1c260b(0x280)][_0x1c260b(0x124)]=function(_0x36f3db,_0x305d2e){const _0x1d9011=_0x1c260b;VisuMZ[_0x1d9011(0x28c)]['Settings'][_0x1d9011(0x120)][_0x1d9011(0x15e)][_0x1d9011(0x172)](this,_0x36f3db,_0x305d2e);},Window_SavefileList[_0x1c260b(0x280)][_0x1c260b(0x1d7)]=function(_0x424143,_0x38e00f){const _0x37b7bd=_0x1c260b;VisuMZ[_0x37b7bd(0x28c)][_0x37b7bd(0x26f)][_0x37b7bd(0x120)][_0x37b7bd(0x133)][_0x37b7bd(0x172)](this,_0x424143,_0x38e00f);},Window_SavefileList[_0x1c260b(0x280)][_0x1c260b(0x273)]=function(_0x13b679,_0x56c629){const _0x289d48=_0x1c260b;VisuMZ[_0x289d48(0x28c)]['Settings'][_0x289d48(0x120)][_0x289d48(0x1a4)]['call'](this,_0x13b679,_0x56c629);},Window_SavefileList[_0x1c260b(0x280)]['drawListStyleFileData']=function(_0x4c40b1,_0x1ad895){const _0x274c2f=_0x1c260b;VisuMZ[_0x274c2f(0x28c)]['Settings']['SaveMenu'][_0x274c2f(0x272)][_0x274c2f(0x172)](this,_0x4c40b1,_0x1ad895);},Window_SavefileList[_0x1c260b(0x280)][_0x1c260b(0x1a5)]=function(_0x4135c2,_0xce6647){const _0x380ce9=_0x1c260b;VisuMZ[_0x380ce9(0x28c)][_0x380ce9(0x26f)][_0x380ce9(0x120)]['VertFileDataJS']['call'](this,_0x4135c2,_0xce6647);},Window_SavefileList[_0x1c260b(0x280)][_0x1c260b(0x127)]=function(_0x475072,_0x4d534f){const _0x40dedb=_0x1c260b;VisuMZ[_0x40dedb(0x28c)][_0x40dedb(0x26f)][_0x40dedb(0x120)]['BoxFileDataJS'][_0x40dedb(0x172)](this,_0x475072,_0x4d534f);},Window_SavefileList[_0x1c260b(0x280)][_0x1c260b(0x14b)]=function(_0x1074b0,_0x39d242){const _0x43dfa1=_0x1c260b;VisuMZ[_0x43dfa1(0x28c)][_0x43dfa1(0x26f)][_0x43dfa1(0x120)][_0x43dfa1(0x135)]['call'](this,_0x1074b0,_0x39d242);};