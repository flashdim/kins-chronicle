//=============================================================================
// VisuStella MZ - Save Core
// VisuMZ_1_SaveCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_SaveCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.SaveCore = VisuMZ.SaveCore || {};
VisuMZ.SaveCore.version = 1.05;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.05] [SaveCore]
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
 *   Start Enabled?:
 *   - Start with autosave enabled?
 *   - Requires Database => System 1 => [x] Enable Autosave
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
 * @default {"AddOption:eval":"true","AdjustRect:eval":"true","Name:str":"Autosave","Default:num":"true"}
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
 * @param StartEnabled:eval
 * @text Start Enabled?
 * @parent General
 * @type boolean
 * @on Start Enabled
 * @off Start Disabled
 * @desc Start with autosave enabled?
 * Requires Database => System 1 => [x] Enable Autosave
 * @default true
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

const _0x1cbe=['then','yCrOg','smoothSelect','DyLxf','tvxsS','playSave','activate','Scene_Base_requestAutosave','getFullYear','value','drawCurrency','AfterBattle','terminate','STR','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','saveCurrentSlot','join','mAcWS','onSaveCoreLoadFailure','svActorHorzCells','svActorVertCells','1Fgiueq','latestSavefileId','686380XsrpvH','drawSvActor','onSaveCoreSaveFailure','close','setValue','loadFailureConfirmationWindow','drawFace','cBJNo','filePath','drawPlaytime','call','Scene_Menu_commandSave','process_VisuMZ_SaveCore_Settings','drawActorSprites','sHEnD','ActorGraphic','onSaveFailure','_savefileId','GgDfI','commandContinue','savefileId','match','drawText','fadeOutAll','drawSvBattlerSprites','_pickLockedSaveSlot','AutosaveExecute','isEnabled','Scene_Base_onAutosaveFailure','SaveConfirm','OnSaveSuccessJS','exit','ueKtj','file','NUM','Game_Switches_value','contentsOpacity','1554803ZzjuLJ','drawVerticalStyleFileData','prototype','startNewGameLockedSave','Default','EVAL','Duration','refresh','contents','isGlobal','SaveStyle','openSaveConfirmationWindow','current','min','helpWindowText','onAutosaveFailure','DOpsR','ceil','LatestText','LargeContentsJS','AutosaveForce','setMode','drawVerticalStyleContents','getScreenPosition','VertContentsJS','update','addChild','RequestsRequireSaveEnable','drawTitle','Window_Options_addGeneralOptions','process_VisuMZ_SaveCore_Switches_Variables','partyMemberName','onAfterLoad','AutosaveOption','isAutosaveCompatible','drawContents','maxCommands','VocabSaveSuccess','KeyFmt','drawCharacter','height','1617627pyJkBm','file0','LargeFileDataJS','LQuNF','LkWop','isSaveConfirmWindowEnabled','zylfY','sUHGN','FQifJ','replace','_success','drawPicture','globalValue','clear','drawBackground','Autosave','saveStyle','initSaveCore','_active','MaxSaveFiles','getHours','mMupM','#%1','SaveMenu','_colorCache','svbattlersForSaveFile','switches','savePicture','StartEnabled','getSeconds','locked','contentsBack','AddOption','AutosaveEnable','craJC','onLoadSuccess','1VjIJoU','fadeOut','updatePosition','floor','forceAutosave','_bypassAutosave','BrsBY','makeData','popScene','ZkIyz','requestAutosave','openness','format','executeSave','addLoadListener','NgnFT','SpriteWidth','Settings','ScreenPosition','svbattlers','ZiVhX','fileDirectoryPath','ywQsC','fYGdR','Name','TestKey','actorStyle','closeSaveConfirmationWindow','Eponu','globalSwitches','saveFailure','CZEJT','changeTextColor','catch','parse','commandNewGame','setSavePicture','ARRAYEVAL','onSaveSuccess','toUpperCase','_commandWindow','_processingAutosave','center','version','exitMenu','1134170ZsnSKH','ConfigManager_applyData','autosaveOption','FHwiH','AfterMenuCall','setGlobalValue','drawDescription','AdjustRect','onSaveCoreLoadSuccess','GlobalSwitches','saveConfirmationWindowRect','Enable','updateFade','padStart','savefileIdToIndex','variables','blt','menuStyle','isBattleTest','Scene_Save_executeSave','commandSave','trim','closeAutosaveConfirmationWindow','push','ConfigManager_makeData','ATBya','onDatabaseLoaded','Filename','drawLatestMarker','dimColor1','fadeIn','isAutosaveEnabled','kKnHz','Scene_Save_helpWindowText','number','Scene_Base_onAutosaveSuccess','timestamp','faces','Game_Switches_setValue','openAutosaveConfirmationWindow','Scene_Save_onSaveFailure','onLoadFailure','autosaveFailure','_autosaveConfirmWindow','2517565tuKFcR','STRUCT','setWordWrap','saveSuccess','name','_fadeSpeed','innerWidth','RemoveSaveCoreCache','_saveCorePluginCommandSave','width','VocabAutosaveSuccess','addCommand','max','drawContentsLoaded','save','_loadSuccess','getColorDataFromPluginParameters','3CTIuRq','autosaveEnabled','ListCols','GlobalVariables','Xqpvn','onTransferEnd','VocabLoadFailure','svbattler','_saveConfirmWindow','numVisibleRows','textSizeEx','round','characters','SaveCore','getMinutes','drawTextEx','maxBattleMembers','callMenu','drawListStyleContents','inBattle','setSetSuccess','FilenameFmt','Scene_Boot_onDatabaseLoaded','playtime','saveGame','makeSavename','enableAutosave','BoxContentsJS','VertFileDataJS','mainCommandWidth','saveMenuSvBattlerWidth','BoxCols','_stored_latestSavefile','Scene_Options_maxCommands','resetWordWrap','determineAutosaveBypass','Save','getMonth','getTimestamp','return\x200','drawListStyleFileData','length','battlerName','ParseTextCodes','loadPicture','registerCommand','latestSave','Game_System_savefileId','globalVariables','pickLockedSaveSlot','isNwjs','resetFontSettings','createContents','dimColor2','advanced','SaveDescription','transfer','createAutosaveConfirmationWindow','autosaveType','getSavePicture','JSON','drawLargeStyleFileData','loadFailure','onMapLoaded','tigYe','playBuzzer','map','Scene_Title_commandContinue','Scene_Map_onMapLoaded','commandContinueSaveCoreSingle','maxCols','qwfxz','bind','applyData','commandSaveLocked','picture','_SaveCoreSettings','large','textColor','fyYyx','setupNewGame','_scene','onAutosaveSuccess','OnSaveFailureJS','OnAutosaveFailureJS','Scene_Load_onLoadSuccess','lTIeD','gradientFillRect','latestSavefile','autosaveSuccess','DemKi','DyiNU','itemPadding','LocalMode','OnLoadFailureJS','saveMenuSpriteWidth','box','forageKey','open','isLocalMode','includes','SaveCurrentSlot','DataManager_makeSavefileInfo','drawBoxStyleContents','568151kBPSYe','isAutosaveConfirmWindowEnabled','makeSavefileInfo','addSaveCoreAutosaveCommand','onBeforeSave','battle','description','optAutosave','Scene_Map_onTransferEnd','Game_System_initialize','setSavefileId','vertical','shouldAutosave','Window_SavefileList_setMode','isPreviousScene','actorName','ARRAYSTRUCT','drawLargeStyleContents','TingW','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','playLoad','Scene_Title_commandNewGame','Scene_Title_initialize','OnLoadSuccessJS','addSaveCoreCommands','createSaveConfirmationWindow','SavePicture','268695HMZVbn','Game_Variables_setValue','gold','onSaveCoreSaveSuccess','Scene_Menu_create','face','addGeneralOptions','VisuMZ_1_MessageCore','loadSvActor','saveDescription','autosave','drawActors','ARRAYFUNC','cwLBd','getSaveDescription','windowPadding','loadGame','AutosaveConfirm','setFadeSpeed','indexToSavefileId','activateListWindow','Game_Variables_value','ConvertParams','create','executeAutosave','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','VocabLockedSaveSlot','forageTestKey','iXATy','split','isEventTest','removeChild','drawTimestamp','filter','AutosaveMaxCount','right','_listWindow','ListFileDataJS','autosaveConfirmationWindowRect','drawFileData','both','drawActorFaces','left','VertRows','DEvkK','ListRows','selectSavefile','single','commandNewGameSaveCoreLocked','Scene_Title_terminate','initialize'];const _0x491f2d=_0x56ff;function _0x56ff(_0x49e0fa,_0x5c89bd){_0x49e0fa=_0x49e0fa-0x191;let _0x1cbefb=_0x1cbe[_0x49e0fa];return _0x1cbefb;}(function(_0x412a01,_0x3e28e8){const _0x3b1b33=_0x56ff;while(!![]){try{const _0x17e15b=-parseInt(_0x3b1b33(0x2fb))*-parseInt(_0x3b1b33(0x19f))+parseInt(_0x3b1b33(0x271))*-parseInt(_0x3b1b33(0x2d4))+-parseInt(_0x3b1b33(0x1cc))+-parseInt(_0x3b1b33(0x2d6))+-parseInt(_0x3b1b33(0x28c))*-parseInt(_0x3b1b33(0x209))+-parseInt(_0x3b1b33(0x324))+parseInt(_0x3b1b33(0x1f8));if(_0x17e15b===_0x3e28e8)break;else _0x412a01['push'](_0x412a01['shift']());}catch(_0x3650e6){_0x412a01['push'](_0x412a01['shift']());}}}(_0x1cbe,0xd4ebd));var label=_0x491f2d(0x216),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x491f2d(0x2ad)](function(_0x170ac8){return _0x170ac8['status']&&_0x170ac8['description']['includes']('['+label+']');})[0x0];VisuMZ[label][_0x491f2d(0x1b0)]=VisuMZ[label][_0x491f2d(0x1b0)]||{},VisuMZ[_0x491f2d(0x2a2)]=function(_0x48d22c,_0x1e314f){const _0x27a121=_0x491f2d;for(const _0xd1bd20 in _0x1e314f){if(_0x27a121(0x2c2)!==_0x27a121(0x1ec)){if(_0xd1bd20[_0x27a121(0x2eb)](/(.*):(.*)/i)){const _0x4ab77a=String(RegExp['$1']),_0x5b3974=String(RegExp['$2'])[_0x27a121(0x1c6)]()[_0x27a121(0x1e1)]();let _0x1139f8,_0x5f045a,_0x4908cc;switch(_0x5b3974){case _0x27a121(0x2f8):_0x1139f8=_0x1e314f[_0xd1bd20]!==''?Number(_0x1e314f[_0xd1bd20]):0x0;break;case'ARRAYNUM':_0x5f045a=_0x1e314f[_0xd1bd20]!==''?JSON[_0x27a121(0x1c1)](_0x1e314f[_0xd1bd20]):[],_0x1139f8=_0x5f045a[_0x27a121(0x24b)](_0x2d8b68=>Number(_0x2d8b68));break;case _0x27a121(0x300):_0x1139f8=_0x1e314f[_0xd1bd20]!==''?eval(_0x1e314f[_0xd1bd20]):null;break;case _0x27a121(0x1c4):_0x5f045a=_0x1e314f[_0xd1bd20]!==''?JSON['parse'](_0x1e314f[_0xd1bd20]):[],_0x1139f8=_0x5f045a[_0x27a121(0x24b)](_0x56ef6a=>eval(_0x56ef6a));break;case _0x27a121(0x245):_0x1139f8=_0x1e314f[_0xd1bd20]!==''?JSON[_0x27a121(0x1c1)](_0x1e314f[_0xd1bd20]):'';break;case'ARRAYJSON':_0x5f045a=_0x1e314f[_0xd1bd20]!==''?JSON[_0x27a121(0x1c1)](_0x1e314f[_0xd1bd20]):[],_0x1139f8=_0x5f045a[_0x27a121(0x24b)](_0x3f40b0=>JSON[_0x27a121(0x1c1)](_0x3f40b0));break;case'FUNC':_0x1139f8=_0x1e314f[_0xd1bd20]!==''?new Function(JSON[_0x27a121(0x1c1)](_0x1e314f[_0xd1bd20])):new Function(_0x27a121(0x230));break;case _0x27a121(0x298):_0x5f045a=_0x1e314f[_0xd1bd20]!==''?JSON['parse'](_0x1e314f[_0xd1bd20]):[],_0x1139f8=_0x5f045a[_0x27a121(0x24b)](_0x40fcbf=>new Function(JSON['parse'](_0x40fcbf)));break;case _0x27a121(0x2cc):_0x1139f8=_0x1e314f[_0xd1bd20]!==''?String(_0x1e314f[_0xd1bd20]):'';break;case'ARRAYSTR':_0x5f045a=_0x1e314f[_0xd1bd20]!==''?JSON[_0x27a121(0x1c1)](_0x1e314f[_0xd1bd20]):[],_0x1139f8=_0x5f045a[_0x27a121(0x24b)](_0x44773c=>String(_0x44773c));break;case _0x27a121(0x1f9):_0x4908cc=_0x1e314f[_0xd1bd20]!==''?JSON['parse'](_0x1e314f[_0xd1bd20]):{},_0x48d22c[_0x4ab77a]={},VisuMZ[_0x27a121(0x2a2)](_0x48d22c[_0x4ab77a],_0x4908cc);continue;case _0x27a121(0x281):_0x5f045a=_0x1e314f[_0xd1bd20]!==''?JSON[_0x27a121(0x1c1)](_0x1e314f[_0xd1bd20]):[],_0x1139f8=_0x5f045a[_0x27a121(0x24b)](_0x4550bf=>VisuMZ[_0x27a121(0x2a2)]({},JSON[_0x27a121(0x1c1)](_0x4550bf)));break;default:continue;}_0x48d22c[_0x4ab77a]=_0x1139f8;}}else{function _0x239d48(){const _0x35a5af=_0x27a121;_0x46b82a>0x0&&_0x4e6149<_0x531cf7[_0x35a5af(0x195)][_0x35a5af(0x232)]&&(_0x326c9e[_0x35a5af(0x1bc)]=_0x5ba820[_0x35a5af(0x1bc)]||[],_0x2edeae[_0x35a5af(0x1bc)][_0x4b39e3]=_0x47d1e6,_0x367a55[_0x35a5af(0x206)]());}}}return _0x48d22c;},(_0x4ca6a3=>{const _0x47f12a=_0x491f2d,_0xd6bc77=_0x4ca6a3[_0x47f12a(0x1fc)];for(const _0x26fb9c of dependencies){if('CXuPO'!=='pXWPe'){if(!Imported[_0x26fb9c]){if(_0x47f12a(0x327)===_0x47f12a(0x1a8)){function _0x36b0f6(){const _0x6195cf=_0x47f12a;return this['isGlobal'](_0x77e551)?this[_0x6195cf(0x330)](_0x34e4d8):_0x3021c1['SaveCore'][_0x6195cf(0x2a1)][_0x6195cf(0x2e0)](this,_0x1517c9);}}else{alert(_0x47f12a(0x284)[_0x47f12a(0x1ab)](_0xd6bc77,_0x26fb9c)),SceneManager['exit']();break;}}}else{function _0x1c8daa(){const _0x341f05=_0x47f12a,_0x2d7635=_0x2e5f17[_0x341f05(0x235)](_0xbbe239[_0x341f05(0x254)]||'');_0x2d7635['addLoadListener'](this['drawContentsLoaded'][_0x341f05(0x251)](this,_0x32a581,_0x21e94e));}}}const _0x336822=_0x4ca6a3[_0x47f12a(0x277)];if(_0x336822[_0x47f12a(0x2eb)](/\[Version[ ](.*?)\]/i)){if(_0x47f12a(0x249)==='euXsP'){function _0x196505(){return'';}}else{const _0x294834=Number(RegExp['$1']);_0x294834!==VisuMZ[label][_0x47f12a(0x1ca)]&&(alert(_0x47f12a(0x2a5)[_0x47f12a(0x1ab)](_0xd6bc77,_0x294834)),SceneManager[_0x47f12a(0x2f5)]());}}if(_0x336822[_0x47f12a(0x2eb)](/\[Tier[ ](\d+)\]/i)){const _0x34d618=Number(RegExp['$1']);if(_0x34d618<tier)alert(_0x47f12a(0x2cd)[_0x47f12a(0x1ab)](_0xd6bc77,_0x34d618,tier)),SceneManager['exit']();else{if(_0x47f12a(0x1ae)===_0x47f12a(0x1ae))tier=Math[_0x47f12a(0x204)](_0x34d618,tier);else{function _0x5e24d3(){const _0x50a576=_0x47f12a;_0x54bfba[_0x50a576(0x216)]['Scene_Base_requestAutosave'][_0x50a576(0x2e0)](this);}}}}VisuMZ[_0x47f12a(0x2a2)](VisuMZ[label][_0x47f12a(0x1b0)],_0x4ca6a3['parameters']);})(pluginData),PluginManager[_0x491f2d(0x236)](pluginData[_0x491f2d(0x1fc)],_0x491f2d(0x19c),_0xc470d3=>{const _0x428bde=_0x491f2d;if(!DataManager[_0x428bde(0x31d)]())return;VisuMZ[_0x428bde(0x2a2)](_0xc470d3,_0xc470d3);if($gameSystem)$gameSystem[_0x428bde(0x223)](_0xc470d3['Enable']);}),PluginManager['registerCommand'](pluginData[_0x491f2d(0x1fc)],'AutosaveRequest',_0x1a8e3e=>{const _0x3491f2=_0x491f2d;if(!DataManager[_0x3491f2(0x31d)]()||$gameParty['inBattle']())return;SceneManager[_0x3491f2(0x25a)][_0x3491f2(0x1a9)]();}),PluginManager['registerCommand'](pluginData[_0x491f2d(0x1fc)],_0x491f2d(0x2f0),_0x173860=>{const _0x4489b7=_0x491f2d;if(!DataManager['isAutosaveCompatible']()||$gameParty[_0x4489b7(0x21c)]())return;SceneManager[_0x4489b7(0x25a)][_0x4489b7(0x2a4)]();}),PluginManager[_0x491f2d(0x236)](pluginData[_0x491f2d(0x1fc)],_0x491f2d(0x30f),_0x1cb7d7=>{const _0x1eea87=_0x491f2d;if(!DataManager[_0x1eea87(0x31d)]()||$gameParty[_0x1eea87(0x21c)]())return;SceneManager[_0x1eea87(0x25a)][_0x1eea87(0x1a3)]();}),PluginManager['registerCommand'](pluginData[_0x491f2d(0x1fc)],_0x491f2d(0x26e),_0x5b6929=>{SceneManager['_scene']['saveCurrentSlot']();}),PluginManager['registerCommand'](pluginData[_0x491f2d(0x1fc)],_0x491f2d(0x240),_0x4043a5=>{VisuMZ['ConvertParams'](_0x4043a5,_0x4043a5);if($gameSystem)$gameSystem['setSaveDescription'](_0x4043a5['Text']);}),PluginManager[_0x491f2d(0x236)](pluginData[_0x491f2d(0x1fc)],_0x491f2d(0x28b),_0x3cc1d6=>{const _0x8f18ae=_0x491f2d;VisuMZ[_0x8f18ae(0x2a2)](_0x3cc1d6,_0x3cc1d6);if($gameSystem)$gameSystem[_0x8f18ae(0x1c3)](_0x3cc1d6[_0x8f18ae(0x1e7)]);}),VisuMZ[_0x491f2d(0x216)][_0x491f2d(0x21f)]=Scene_Boot[_0x491f2d(0x2fd)][_0x491f2d(0x1e6)],Scene_Boot[_0x491f2d(0x2fd)][_0x491f2d(0x1e6)]=function(){const _0x2c8c95=_0x491f2d;VisuMZ[_0x2c8c95(0x216)]['Scene_Boot_onDatabaseLoaded'][_0x2c8c95(0x2e0)](this),this[_0x2c8c95(0x2e2)](),this[_0x2c8c95(0x319)]();},Scene_Boot['prototype'][_0x491f2d(0x2e2)]=function(){if(StorageManager['saveStyle']()==='single')$dataSystem['optAutosave']=!![];},VisuMZ['GlobalSwitches']=[],VisuMZ[_0x491f2d(0x20c)]=[],Scene_Boot['prototype'][_0x491f2d(0x319)]=function(){const _0x15cfe6=_0x491f2d;for(let _0x163f8f=0x1;_0x163f8f<$dataSystem[_0x15cfe6(0x195)]['length'];_0x163f8f++){if($dataSystem['switches'][_0x163f8f]['match'](/<GLOBAL>/i))VisuMZ['GlobalSwitches'][_0x15cfe6(0x1e3)](_0x163f8f);}for(let _0x549f6a=0x1;_0x549f6a<$dataSystem[_0x15cfe6(0x1db)][_0x15cfe6(0x232)];_0x549f6a++){if($dataSystem[_0x15cfe6(0x1db)][_0x549f6a][_0x15cfe6(0x2eb)](/<GLOBAL>/i))VisuMZ['GlobalVariables'][_0x15cfe6(0x1e3)](_0x549f6a);}},DataManager[_0x491f2d(0x31d)]=function(){const _0x450113=_0x491f2d;return!DataManager['isBattleTest']()&&!DataManager['isEventTest']()&&$dataSystem[_0x450113(0x278)];},DataManager['maxSavefiles']=function(){const _0x4e39c3=_0x491f2d;if(StorageManager[_0x4e39c3(0x334)]()===_0x4e39c3(0x2bb))return 0x1;let _0x2359bc=VisuMZ[_0x4e39c3(0x216)][_0x4e39c3(0x1b0)][_0x4e39c3(0x22d)][_0x4e39c3(0x2ae)]?0x0:0x1;return VisuMZ[_0x4e39c3(0x216)][_0x4e39c3(0x1b0)][_0x4e39c3(0x22d)][_0x4e39c3(0x337)]+_0x2359bc;},DataManager[_0x491f2d(0x222)]=function(_0x4592b7){const _0x424061=_0x491f2d,_0x95ed3e=VisuMZ[_0x424061(0x216)][_0x424061(0x1b0)][_0x424061(0x22d)][_0x424061(0x21e)];return _0x95ed3e[_0x424061(0x1ab)](_0x4592b7);},VisuMZ[_0x491f2d(0x216)]['DataManager_makeSavefileInfo']=DataManager[_0x491f2d(0x273)],DataManager['makeSavefileInfo']=function(){const _0x2a3e59=_0x491f2d,_0x54a016=VisuMZ[_0x2a3e59(0x216)][_0x2a3e59(0x26f)][_0x2a3e59(0x2e0)](this);return VisuMZ[_0x2a3e59(0x216)][_0x2a3e59(0x1b0)][_0x2a3e59(0x192)]['MakeSavefileInfoJS']['call'](this,_0x54a016);},ConfigManager[_0x491f2d(0x296)]=VisuMZ[_0x491f2d(0x216)][_0x491f2d(0x1b0)][_0x491f2d(0x31c)][_0x491f2d(0x2ff)],ConfigManager[_0x491f2d(0x1bc)]=[],ConfigManager['globalVariables']=[],VisuMZ['SaveCore'][_0x491f2d(0x1e4)]=ConfigManager[_0x491f2d(0x1a6)],ConfigManager[_0x491f2d(0x1a6)]=function(){const _0x2fda52=_0x491f2d,_0x3bb5d2=VisuMZ[_0x2fda52(0x216)]['ConfigManager_makeData']['call'](this);return _0x3bb5d2['autosave']=this[_0x2fda52(0x296)]||VisuMZ['SaveCore'][_0x2fda52(0x1b0)]['AutosaveOption']['Default'],_0x3bb5d2[_0x2fda52(0x1bc)]=this['globalSwitches']||[],_0x3bb5d2[_0x2fda52(0x239)]=this[_0x2fda52(0x239)]||[],_0x3bb5d2;},VisuMZ[_0x491f2d(0x216)][_0x491f2d(0x1cd)]=ConfigManager['applyData'],ConfigManager[_0x491f2d(0x252)]=function(_0x340584){const _0x5b71c2=_0x491f2d;VisuMZ[_0x5b71c2(0x216)]['ConfigManager_applyData'][_0x5b71c2(0x2e0)](this,_0x340584),this['autosave']=_0x340584['autosave']!==undefined?_0x340584['autosave']:VisuMZ[_0x5b71c2(0x216)][_0x5b71c2(0x1b0)]['AutosaveOption']['Default'],this['globalSwitches']=_0x340584[_0x5b71c2(0x1bc)]||[],this[_0x5b71c2(0x239)]=_0x340584['globalVariables']||[];},StorageManager[_0x491f2d(0x26c)]=function(){const _0x3dfe85=_0x491f2d;if(Utils[_0x3dfe85(0x23b)]()){if(_0x3dfe85(0x2c0)===_0x3dfe85(0x1e5)){function _0x37481e(){const _0x143224=_0x3dfe85;this[_0x143224(0x22c)](_0x143224(0x1cb)),this[_0x143224(0x1a9)]();}}else return VisuMZ[_0x3dfe85(0x216)]['Settings'][_0x3dfe85(0x22d)][_0x3dfe85(0x266)];}else return![];},StorageManager[_0x491f2d(0x2de)]=function(_0x4804fc){const _0x530e78=_0x491f2d,_0x799a02=this[_0x530e78(0x1b4)](),_0x2503ba=VisuMZ[_0x530e78(0x216)]['Settings'][_0x530e78(0x22d)]['ExtensionFmt'];return _0x799a02+_0x2503ba['format'](_0x4804fc);},StorageManager[_0x491f2d(0x26a)]=function(_0x1b9d5e){const _0x485cd0=_0x491f2d,_0x444abc=$dataSystem[_0x485cd0(0x23f)]['gameId'],_0x2edee4=VisuMZ[_0x485cd0(0x216)]['Settings'][_0x485cd0(0x22d)][_0x485cd0(0x321)];return _0x2edee4[_0x485cd0(0x1ab)](_0x444abc,_0x1b9d5e);},StorageManager[_0x491f2d(0x2a7)]=function(){const _0x441e43=_0x491f2d;return VisuMZ['SaveCore']['Settings']['Save'][_0x441e43(0x1b8)];},StorageManager[_0x491f2d(0x334)]=function(){const _0x244416=_0x491f2d;return VisuMZ[_0x244416(0x216)][_0x244416(0x1b0)]['Save'][_0x244416(0x305)];},StorageManager['autosaveType']=function(){const _0x2d92c0=_0x491f2d;return this[_0x2d92c0(0x334)]()===_0x2d92c0(0x2bb)?'file0':VisuMZ['SaveCore'][_0x2d92c0(0x1b0)][_0x2d92c0(0x333)]['AutosaveType'];},TextManager[_0x491f2d(0x23a)]=VisuMZ[_0x491f2d(0x216)][_0x491f2d(0x1b0)][_0x491f2d(0x22d)][_0x491f2d(0x2a6)],TextManager[_0x491f2d(0x1fb)]=VisuMZ['SaveCore']['Settings'][_0x491f2d(0x2f3)][_0x491f2d(0x320)],TextManager[_0x491f2d(0x1bd)]=VisuMZ['SaveCore'][_0x491f2d(0x1b0)]['SaveConfirm']['VocabSaveFailure'],TextManager[_0x491f2d(0x247)]=VisuMZ[_0x491f2d(0x216)]['Settings'][_0x491f2d(0x2f3)][_0x491f2d(0x20f)],TextManager[_0x491f2d(0x1ce)]=VisuMZ[_0x491f2d(0x216)][_0x491f2d(0x1b0)][_0x491f2d(0x31c)][_0x491f2d(0x1b7)],TextManager[_0x491f2d(0x262)]=VisuMZ[_0x491f2d(0x216)]['Settings'][_0x491f2d(0x29d)][_0x491f2d(0x202)],TextManager[_0x491f2d(0x1f6)]=VisuMZ[_0x491f2d(0x216)][_0x491f2d(0x1b0)]['AutosaveConfirm']['VocabAutosaveFailure'],TextManager[_0x491f2d(0x237)]=VisuMZ[_0x491f2d(0x216)][_0x491f2d(0x1b0)][_0x491f2d(0x192)][_0x491f2d(0x30d)],ColorManager[_0x491f2d(0x261)]=function(){const _0x195da4=_0x491f2d,_0x59cf1f=_0x195da4(0x229);this[_0x195da4(0x193)]=this[_0x195da4(0x193)]||{};if(this[_0x195da4(0x193)][_0x59cf1f])return this[_0x195da4(0x193)][_0x59cf1f];const _0x47cab2=VisuMZ['SaveCore'][_0x195da4(0x1b0)][_0x195da4(0x192)]['LatestColor'];return this[_0x195da4(0x208)](_0x59cf1f,_0x47cab2);},ColorManager['getColorDataFromPluginParameters']=function(_0x13eafb,_0x3cc6fe){const _0x31c95f=_0x491f2d;_0x3cc6fe=String(_0x3cc6fe),this[_0x31c95f(0x193)]=this['_colorCache']||{};if(_0x3cc6fe[_0x31c95f(0x2eb)](/#(.*)/i)){if(_0x31c95f(0x19d)!==_0x31c95f(0x19d)){function _0x1d3f08(){const _0xd46824=_0x31c95f;return _0x5e6a46[_0xd46824(0x216)][_0xd46824(0x1b0)][_0xd46824(0x2e5)];}}else this['_colorCache'][_0x13eafb]=_0x31c95f(0x191)[_0x31c95f(0x1ab)](String(RegExp['$1']));}else this[_0x31c95f(0x193)][_0x13eafb]=this[_0x31c95f(0x257)](Number(_0x3cc6fe));return this[_0x31c95f(0x193)][_0x13eafb];},VisuMZ[_0x491f2d(0x216)][_0x491f2d(0x27a)]=Game_System['prototype'][_0x491f2d(0x2be)],Game_System[_0x491f2d(0x2fd)][_0x491f2d(0x2be)]=function(){const _0x2cfa80=_0x491f2d;VisuMZ[_0x2cfa80(0x216)]['Game_System_initialize'][_0x2cfa80(0x2e0)](this),this[_0x2cfa80(0x335)]();},Game_System[_0x491f2d(0x2fd)]['initSaveCore']=function(){const _0x33e4b3=_0x491f2d;this[_0x33e4b3(0x255)]={'autosaveEnabled':VisuMZ[_0x33e4b3(0x216)][_0x33e4b3(0x1b0)]['Autosave'][_0x33e4b3(0x197)],'saveDescription':'','savePicture':''};},Game_System[_0x491f2d(0x2fd)][_0x491f2d(0x1eb)]=function(){const _0x27b2c6=_0x491f2d;if(!$dataSystem['optAutosave'])return![];if(this[_0x27b2c6(0x255)]===undefined)this[_0x27b2c6(0x335)]();if(this[_0x27b2c6(0x255)]['autosaveEnabled']===undefined)this[_0x27b2c6(0x335)]();return this[_0x27b2c6(0x255)]['autosaveEnabled'];},Game_System[_0x491f2d(0x2fd)]['enableAutosave']=function(_0x57ae10){const _0x576016=_0x491f2d;if(!$dataSystem['optAutosave'])return;if(this[_0x576016(0x255)]===undefined)this[_0x576016(0x335)]();if(this[_0x576016(0x255)][_0x576016(0x20a)]===undefined)this[_0x576016(0x335)]();this['_SaveCoreSettings']['autosaveEnabled']=_0x57ae10;},Game_System[_0x491f2d(0x2fd)][_0x491f2d(0x29a)]=function(){const _0x466f5a=_0x491f2d;if(this[_0x466f5a(0x255)]===undefined)this[_0x466f5a(0x335)]();if(this[_0x466f5a(0x255)][_0x466f5a(0x295)]===undefined)this[_0x466f5a(0x335)]();return this['_SaveCoreSettings'][_0x466f5a(0x295)];},Game_System['prototype']['setSaveDescription']=function(_0x43f402){const _0x407989=_0x491f2d;if(this[_0x407989(0x255)]===undefined)this[_0x407989(0x335)]();if(this['_SaveCoreSettings'][_0x407989(0x295)]===undefined)this[_0x407989(0x335)]();this['_SaveCoreSettings'][_0x407989(0x295)]=VisuMZ[_0x407989(0x216)][_0x407989(0x234)](_0x43f402);},VisuMZ[_0x491f2d(0x216)][_0x491f2d(0x234)]=function(_0x4115c0){const _0x5189b5=_0x491f2d;while(_0x4115c0[_0x5189b5(0x2eb)](/\\V\[(\d+)\]/gi)){if('tQQPL'!=='tQQPL'){function _0x382af4(){const _0x32a439=_0x5189b5;return this[_0x32a439(0x330)](_0x1bfad2);}}else _0x4115c0=_0x4115c0[_0x5189b5(0x32d)](/\\V\[(\d+)\]/gi,(_0x2a330c,_0x1798b1)=>$gameVariables[_0x5189b5(0x2c8)](parseInt(_0x1798b1)));}while(_0x4115c0[_0x5189b5(0x2eb)](/\\N\[(\d+)\]/gi)){_0x4115c0=_0x4115c0[_0x5189b5(0x32d)](/\\N\[(\d+)\]/gi,(_0x34ec8d,_0x416f61)=>Window_Base['prototype'][_0x5189b5(0x280)](parseInt(_0x416f61)));}while(_0x4115c0[_0x5189b5(0x2eb)](/\\P\[(\d+)\]/gi)){if(_0x5189b5(0x250)===_0x5189b5(0x1a5)){function _0xd4c698(){const _0x1dc278=_0x5189b5,_0x4003cd=_0x2ac527['min'](_0x43a28e['characters'][_0x1dc278(0x232)],_0x365e1d[_0x1dc278(0x219)]()),_0x24ae5c=_0x1a87d4[_0x1dc278(0x268)];_0x3d6361=_0x3de735+_0x112f2c[_0x1dc278(0x214)]((_0x27b232-_0x4003cd*_0x24ae5c)/0x2)+_0x24ae5c/0x2,_0x529026=_0x3e94e0+_0x445a40-0x8;for(const _0x521a4a of _0x19f498[_0x1dc278(0x215)]){this[_0x1dc278(0x322)](_0x521a4a[0x0],_0x521a4a[0x1],_0x283e81,_0x121279),_0x32a21f+=_0x24ae5c;}}}else _0x4115c0=_0x4115c0[_0x5189b5(0x32d)](/\\P\[(\d+)\]/gi,(_0x4d2f41,_0x1b1935)=>Window_Base[_0x5189b5(0x2fd)][_0x5189b5(0x31a)](parseInt(_0x1b1935)));}return _0x4115c0;},Game_System[_0x491f2d(0x2fd)][_0x491f2d(0x244)]=function(){const _0x361ad4=_0x491f2d;if(this['_SaveCoreSettings']===undefined)this['initSaveCore']();if(this[_0x361ad4(0x255)]['savePicture']===undefined)this['initSaveCore']();return this[_0x361ad4(0x255)][_0x361ad4(0x196)];},Game_System[_0x491f2d(0x2fd)]['setSavePicture']=function(_0x3c0cde){const _0x39f561=_0x491f2d;if(this['_SaveCoreSettings']===undefined)this['initSaveCore']();if(this[_0x39f561(0x255)][_0x39f561(0x196)]===undefined)this[_0x39f561(0x335)]();this[_0x39f561(0x255)][_0x39f561(0x196)]=_0x3c0cde;},VisuMZ[_0x491f2d(0x216)]['Game_System_savefileId']=Game_System[_0x491f2d(0x2fd)][_0x491f2d(0x2ea)],Game_System[_0x491f2d(0x2fd)][_0x491f2d(0x2ea)]=function(){const _0x46443b=_0x491f2d,_0x259cc3=StorageManager['saveStyle']();switch(_0x259cc3){case _0x46443b(0x199):return VisuMZ[_0x46443b(0x216)][_0x46443b(0x238)][_0x46443b(0x2e0)](this)||0x1;break;case _0x46443b(0x2bb):return 0x0;break;default:return VisuMZ['SaveCore'][_0x46443b(0x238)][_0x46443b(0x2e0)](this);break;}},Game_Switches['prototype'][_0x491f2d(0x304)]=function(_0x308cf4){const _0x5a8bb9=_0x491f2d;return $dataSystem['switches'][_0x308cf4]&&VisuMZ[_0x5a8bb9(0x1d5)][_0x5a8bb9(0x26d)](_0x308cf4);},VisuMZ[_0x491f2d(0x216)][_0x491f2d(0x2f9)]=Game_Switches[_0x491f2d(0x2fd)][_0x491f2d(0x2c8)],Game_Switches[_0x491f2d(0x2fd)][_0x491f2d(0x2c8)]=function(_0xc9545b){const _0x242de1=_0x491f2d;if(this[_0x242de1(0x304)](_0xc9545b))return this['globalValue'](_0xc9545b);else{if(_0x242de1(0x2a8)!==_0x242de1(0x32b))return VisuMZ['SaveCore'][_0x242de1(0x2f9)][_0x242de1(0x2e0)](this,_0xc9545b);else{function _0x4b0937(){const _0x9475d5=_0x242de1;this[_0x9475d5(0x2ec)](_0x3ff798[_0x9475d5(0x296)],_0x2423fc,_0x3fc601,0xb4);}}}},Game_Switches[_0x491f2d(0x2fd)][_0x491f2d(0x330)]=function(_0x58ac95){const _0x168a90=_0x491f2d;return ConfigManager[_0x168a90(0x1bc)]=ConfigManager[_0x168a90(0x1bc)]||[],!!ConfigManager[_0x168a90(0x1bc)][_0x58ac95];},VisuMZ[_0x491f2d(0x216)][_0x491f2d(0x1f2)]=Game_Switches[_0x491f2d(0x2fd)][_0x491f2d(0x2da)],Game_Switches[_0x491f2d(0x2fd)]['setValue']=function(_0x2cf925,_0x499298){const _0x16c139=_0x491f2d;if(this['isGlobal'](_0x2cf925))this[_0x16c139(0x1d1)](_0x2cf925,_0x499298);VisuMZ[_0x16c139(0x216)][_0x16c139(0x1f2)][_0x16c139(0x2e0)](this,_0x2cf925,_0x499298);},Game_Switches[_0x491f2d(0x2fd)][_0x491f2d(0x1d1)]=function(_0x2a0b82,_0x1b155f){const _0x242501=_0x491f2d;_0x2a0b82>0x0&&_0x2a0b82<$dataSystem[_0x242501(0x195)][_0x242501(0x232)]&&(ConfigManager['globalSwitches']=ConfigManager[_0x242501(0x1bc)]||[],ConfigManager[_0x242501(0x1bc)][_0x2a0b82]=_0x1b155f,ConfigManager[_0x242501(0x206)]());},Game_Variables['prototype'][_0x491f2d(0x304)]=function(_0xabd6c){const _0x49983e=_0x491f2d;return $dataSystem[_0x49983e(0x1db)][_0xabd6c]&&VisuMZ[_0x49983e(0x20c)][_0x49983e(0x26d)](_0xabd6c);},VisuMZ[_0x491f2d(0x216)][_0x491f2d(0x2a1)]=Game_Variables[_0x491f2d(0x2fd)][_0x491f2d(0x2c8)],Game_Variables[_0x491f2d(0x2fd)]['value']=function(_0xa16cef){const _0x165bbc=_0x491f2d;return this[_0x165bbc(0x304)](_0xa16cef)?this['globalValue'](_0xa16cef):VisuMZ[_0x165bbc(0x216)][_0x165bbc(0x2a1)][_0x165bbc(0x2e0)](this,_0xa16cef);},Game_Variables[_0x491f2d(0x2fd)][_0x491f2d(0x330)]=function(_0x4892aa){const _0x2abe5e=_0x491f2d;ConfigManager[_0x2abe5e(0x239)]=ConfigManager[_0x2abe5e(0x239)]||[];if(ConfigManager[_0x2abe5e(0x239)][_0x4892aa]===undefined){if(_0x2abe5e(0x25f)!==_0x2abe5e(0x25f)){function _0x11d1a2(){const _0xbf9d9d=_0x2abe5e;_0x3f400a(_0xbf9d9d(0x2a5)[_0xbf9d9d(0x1ab)](_0x5c7199,_0x15c482)),_0xde1ccd['exit']();}}else ConfigManager[_0x2abe5e(0x239)][_0x4892aa]=0x0;}return ConfigManager[_0x2abe5e(0x239)][_0x4892aa];},VisuMZ[_0x491f2d(0x216)][_0x491f2d(0x28d)]=Game_Variables[_0x491f2d(0x2fd)]['setValue'],Game_Variables['prototype'][_0x491f2d(0x2da)]=function(_0x503950,_0x1f72d2){const _0x294b6c=_0x491f2d;if(this['isGlobal'](_0x503950))this['setGlobalValue'](_0x503950,_0x1f72d2);VisuMZ[_0x294b6c(0x216)]['Game_Variables_setValue'][_0x294b6c(0x2e0)](this,_0x503950,_0x1f72d2);},Game_Variables[_0x491f2d(0x2fd)]['setGlobalValue']=function(_0x5b733f,_0x5ee15d){const _0x11acec=_0x491f2d;if(_0x5b733f>0x0&&_0x5b733f<$dataSystem[_0x11acec(0x1db)][_0x11acec(0x232)]){ConfigManager[_0x11acec(0x239)]=ConfigManager[_0x11acec(0x239)]||[];if(typeof _0x5ee15d===_0x11acec(0x1ee))_0x5ee15d=Math[_0x11acec(0x1a2)](_0x5ee15d);ConfigManager[_0x11acec(0x239)][_0x5b733f]=_0x5ee15d,ConfigManager[_0x11acec(0x206)]();}},Game_Party[_0x491f2d(0x2fd)][_0x491f2d(0x194)]=function(){const _0x1fd0ef=_0x491f2d;return this['battleMembers']()['map'](_0x4fc822=>_0x4fc822[_0x1fd0ef(0x233)]());},Scene_Base[_0x491f2d(0x2fd)][_0x491f2d(0x22c)]=function(_0x453105){const _0x2facea=_0x491f2d,_0x38c431=VisuMZ[_0x2facea(0x216)]['Settings'][_0x2facea(0x333)];switch(_0x453105){case _0x2facea(0x276):this[_0x2facea(0x1a4)]=!_0x38c431[_0x2facea(0x2ca)];break;case _0x2facea(0x241):if(!this['shouldAutosave']())return;this[_0x2facea(0x1a4)]=!_0x38c431['AfterTransfer'];break;case'callMenu':this['_bypassAutosave']=!_0x38c431[_0x2facea(0x1d0)];break;case _0x2facea(0x1cb):this[_0x2facea(0x1a4)]=!_0x38c431['AfterExitMenu'];break;}},VisuMZ['SaveCore']['Scene_Base_requestAutosave']=Scene_Base['prototype']['requestAutosave'],Scene_Base[_0x491f2d(0x2fd)][_0x491f2d(0x1a9)]=function(){const _0x1df6e4=_0x491f2d;!this[_0x1df6e4(0x1a4)]&&VisuMZ[_0x1df6e4(0x216)][_0x1df6e4(0x2c6)]['call'](this),this[_0x1df6e4(0x1a4)]=![];},Scene_Base['prototype'][_0x491f2d(0x1eb)]=function(){const _0x1873e0=_0x491f2d;return!DataManager[_0x1873e0(0x1de)]()&&!DataManager[_0x1873e0(0x2aa)]()&&$gameSystem[_0x1873e0(0x1eb)]()&&(VisuMZ[_0x1873e0(0x216)][_0x1873e0(0x1b0)][_0x1873e0(0x333)][_0x1873e0(0x316)]?$gameSystem['isSaveEnabled']():!![]);},Scene_Base[_0x491f2d(0x2fd)][_0x491f2d(0x2a4)]=function(){const _0x1a71ce=_0x491f2d;if(!ConfigManager['autosave'])return;this[_0x1a71ce(0x1a3)]();},Scene_Base[_0x491f2d(0x2fd)][_0x491f2d(0x1a3)]=function(){const _0x284900=_0x491f2d;$gameSystem[_0x284900(0x275)](),this[_0x284900(0x1c8)]=![];const _0x59f929=StorageManager[_0x284900(0x243)]();[_0x284900(0x325),'both'][_0x284900(0x26d)](_0x59f929)&&DataManager[_0x284900(0x221)](0x0)[_0x284900(0x2bf)](()=>this[_0x284900(0x25b)]())[_0x284900(0x1c0)](()=>this[_0x284900(0x30a)]());if([_0x284900(0x307),_0x284900(0x2b4)][_0x284900(0x26d)](_0x59f929)){if(_0x284900(0x2d0)!==_0x284900(0x2d0)){function _0x3030e7(){const _0x13f4a4=_0x284900;if(this[_0x13f4a4(0x304)](_0x168fe6))this[_0x13f4a4(0x1d1)](_0x1ba32e,_0x5a929b);_0x199d69[_0x13f4a4(0x216)][_0x13f4a4(0x28d)][_0x13f4a4(0x2e0)](this,_0x23bd42,_0x269f19);}}else{const _0x12b322=$gameSystem[_0x284900(0x2ea)]();_0x12b322>0x0&&DataManager[_0x284900(0x221)](_0x12b322)[_0x284900(0x2bf)](()=>this[_0x284900(0x25b)]())['catch'](()=>this[_0x284900(0x30a)]());}}this['_processingAutosave']=![];},VisuMZ[_0x491f2d(0x216)][_0x491f2d(0x1ef)]=Scene_Base[_0x491f2d(0x2fd)][_0x491f2d(0x25b)],Scene_Base['prototype']['onAutosaveSuccess']=function(){const _0x512843=_0x491f2d;if(this[_0x512843(0x1c8)])return;VisuMZ[_0x512843(0x216)][_0x512843(0x1ef)][_0x512843(0x2e0)](this),VisuMZ['SaveCore'][_0x512843(0x1b0)][_0x512843(0x333)]['OnAutosaveSuccessJS'][_0x512843(0x2e0)](this),this['openAutosaveConfirmationWindow'](!![]),this['_processingAutosave']=!![];},VisuMZ[_0x491f2d(0x216)][_0x491f2d(0x2f2)]=Scene_Base[_0x491f2d(0x2fd)]['onAutosaveFailure'],Scene_Base[_0x491f2d(0x2fd)][_0x491f2d(0x30a)]=function(){const _0x59f4ee=_0x491f2d;if(this[_0x59f4ee(0x1c8)])return;VisuMZ[_0x59f4ee(0x216)][_0x59f4ee(0x2f2)]['call'](this),VisuMZ['SaveCore'][_0x59f4ee(0x1b0)][_0x59f4ee(0x333)][_0x59f4ee(0x25d)][_0x59f4ee(0x2e0)](this),this[_0x59f4ee(0x1f3)](![]);},Scene_Base[_0x491f2d(0x2fd)]['createSaveConfirmationWindow']=function(){const _0xee940c=_0x491f2d;if(this[_0xee940c(0x211)])return;const _0x2f2a85=this[_0xee940c(0x1d6)]();this[_0xee940c(0x211)]=new Window_Base(_0x2f2a85),this[_0xee940c(0x211)][_0xee940c(0x1aa)]=0x0;},Scene_Base[_0x491f2d(0x2fd)][_0x491f2d(0x1d6)]=function(){const _0x4879cf=_0x491f2d;return VisuMZ[_0x4879cf(0x216)]['Settings']['SaveConfirm']['ConfirmRect']['call'](this);},Scene_Base['prototype'][_0x491f2d(0x329)]=function(){const _0x3adbaa=_0x491f2d;return VisuMZ[_0x3adbaa(0x216)][_0x3adbaa(0x1b0)][_0x3adbaa(0x2f3)][_0x3adbaa(0x1d7)];},Scene_Base[_0x491f2d(0x2fd)]['openSaveConfirmationWindow']=function(_0x106d02,_0x9e3585){const _0x346dd6=_0x491f2d;if(!this[_0x346dd6(0x329)]())return this[_0x346dd6(0x1ba)](_0x106d02);if(!this[_0x346dd6(0x211)])this[_0x346dd6(0x28a)]();const _0x475a0a=this['_saveConfirmWindow'];this[_0x346dd6(0x2ab)](_0x475a0a),this[_0x346dd6(0x315)](_0x475a0a),_0x475a0a[_0x346dd6(0x26b)](),_0x475a0a[_0x346dd6(0x23c)](),_0x475a0a[_0x346dd6(0x303)][_0x346dd6(0x331)]();let _0x701b0='';_0x9e3585?_0x701b0=TextManager[_0x346dd6(0x247)]:_0x701b0=_0x106d02?TextManager[_0x346dd6(0x1fb)]:TextManager[_0x346dd6(0x1bd)];const _0x3fd092=_0x475a0a[_0x346dd6(0x213)](_0x701b0)[_0x346dd6(0x201)],_0x406b93=(_0x475a0a[_0x346dd6(0x1fe)]-_0x3fd092)/0x2;_0x475a0a[_0x346dd6(0x218)](_0x701b0,_0x406b93,0x0,_0x3fd092);const _0x262b7b=VisuMZ[_0x346dd6(0x216)][_0x346dd6(0x1b0)][_0x346dd6(0x2f3)][_0x346dd6(0x301)];setTimeout(this[_0x346dd6(0x1ba)]['bind'](this,_0x106d02),_0x262b7b);},Scene_Base[_0x491f2d(0x2fd)][_0x491f2d(0x2db)]=function(){const _0x3e4f24=_0x491f2d;this[_0x3e4f24(0x306)](![],!![]);},Scene_Base[_0x491f2d(0x2fd)][_0x491f2d(0x1ba)]=function(_0x5ed5fb){const _0x26f074=_0x491f2d;if(this[_0x26f074(0x211)])this[_0x26f074(0x211)][_0x26f074(0x2d9)]();},Scene_Base[_0x491f2d(0x2fd)][_0x491f2d(0x242)]=function(){const _0x591614=_0x491f2d;if(this['_autosaveConfirmWindow'])return;const _0x21904c=this[_0x591614(0x2b2)]();this[_0x591614(0x1f7)]=new Window_AutosaveConfirm(_0x21904c);},Scene_Base[_0x491f2d(0x2fd)][_0x491f2d(0x2b2)]=function(){const _0x267d2d=_0x491f2d,_0x5034f5=this[_0x267d2d(0x226)](),_0x5eacf2=this['calcWindowHeight'](0x1,![]),_0x2cd3de=Graphics['width']-_0x5034f5,_0x4be7e7=Graphics[_0x267d2d(0x323)]-_0x5eacf2;return new Rectangle(_0x2cd3de,_0x4be7e7,_0x5034f5,_0x5eacf2);},Scene_Base[_0x491f2d(0x2fd)][_0x491f2d(0x272)]=function(){const _0x135693=_0x491f2d;return VisuMZ[_0x135693(0x216)][_0x135693(0x1b0)][_0x135693(0x29d)][_0x135693(0x1d7)];},Scene_Base[_0x491f2d(0x2fd)][_0x491f2d(0x1f3)]=function(_0x441f9b){const _0x1d8175=_0x491f2d;if(!this[_0x1d8175(0x272)]())return this[_0x1d8175(0x1e2)](_0x441f9b);if(!this[_0x1d8175(0x1f7)])this[_0x1d8175(0x242)]();const _0x15d94f=this[_0x1d8175(0x1f7)];this[_0x1d8175(0x2ab)](_0x15d94f),this[_0x1d8175(0x315)](_0x15d94f),_0x15d94f[_0x1d8175(0x21d)](_0x441f9b),_0x15d94f[_0x1d8175(0x1ea)]();const _0x230754=VisuMZ['SaveCore'][_0x1d8175(0x1b0)][_0x1d8175(0x2f3)]['Duration'];setTimeout(this[_0x1d8175(0x1e2)][_0x1d8175(0x251)](this,_0x441f9b),_0x230754);},Scene_Base[_0x491f2d(0x2fd)][_0x491f2d(0x1e2)]=function(_0x253d17){const _0x250c69=_0x491f2d;if(this[_0x250c69(0x1f7)])this[_0x250c69(0x1f7)]['fadeOut']();},Scene_Base[_0x491f2d(0x2fd)][_0x491f2d(0x2ce)]=function(){},VisuMZ[_0x491f2d(0x216)][_0x491f2d(0x287)]=Scene_Title[_0x491f2d(0x2fd)][_0x491f2d(0x2be)],Scene_Title[_0x491f2d(0x2fd)][_0x491f2d(0x2be)]=function(){const _0x42f2b4=_0x491f2d;VisuMZ[_0x42f2b4(0x216)][_0x42f2b4(0x287)]['call'](this),this[_0x42f2b4(0x207)]=![];},VisuMZ['SaveCore'][_0x491f2d(0x2bd)]=Scene_Title[_0x491f2d(0x2fd)][_0x491f2d(0x2cb)],Scene_Title[_0x491f2d(0x2fd)][_0x491f2d(0x2cb)]=function(){const _0x3dbc2b=_0x491f2d;VisuMZ[_0x3dbc2b(0x216)][_0x3dbc2b(0x2bd)]['call'](this);if(this[_0x3dbc2b(0x207)])$gameSystem[_0x3dbc2b(0x31b)]();},VisuMZ[_0x491f2d(0x216)][_0x491f2d(0x286)]=Scene_Title[_0x491f2d(0x2fd)][_0x491f2d(0x1c2)],Scene_Title[_0x491f2d(0x2fd)][_0x491f2d(0x1c2)]=function(){const _0x158cf6=_0x491f2d;StorageManager['saveStyle']()===_0x158cf6(0x199)?this[_0x158cf6(0x2bc)]():VisuMZ[_0x158cf6(0x216)][_0x158cf6(0x286)]['call'](this);},Scene_Title['prototype'][_0x491f2d(0x2bc)]=function(){const _0x4d5ed5=_0x491f2d;DataManager[_0x4d5ed5(0x259)](),$gameTemp[_0x4d5ed5(0x2ef)]=!![],this['_commandWindow'][_0x4d5ed5(0x2d9)](),SceneManager[_0x4d5ed5(0x1e3)](Scene_Save);},VisuMZ['SaveCore'][_0x491f2d(0x24c)]=Scene_Title[_0x491f2d(0x2fd)][_0x491f2d(0x2e9)],Scene_Title['prototype'][_0x491f2d(0x2e9)]=function(){const _0x36d080=_0x491f2d;if(StorageManager[_0x36d080(0x334)]()===_0x36d080(0x2bb)){if('Qsfuw'==='Qsfuw')this[_0x36d080(0x24e)]();else{function _0x49d6e1(){const _0x4dfd5d=_0x36d080;_0x33bbaa[_0x4dfd5d(0x216)]['Scene_Title_commandContinue']['call'](this);}}}else VisuMZ['SaveCore'][_0x36d080(0x24c)][_0x36d080(0x2e0)](this);},Scene_Title[_0x491f2d(0x2fd)]['commandContinueSaveCoreSingle']=function(){const _0x34f9c5=_0x491f2d;DataManager[_0x34f9c5(0x29c)](0x0)[_0x34f9c5(0x2bf)](()=>this['onSaveCoreLoadSuccess']())['catch'](()=>this[_0x34f9c5(0x2d1)]());},Scene_Title['prototype'][_0x491f2d(0x1d4)]=function(){const _0x5ad898=_0x491f2d;this[_0x5ad898(0x1c7)][_0x5ad898(0x2d9)](),SoundManager[_0x5ad898(0x285)](),this[_0x5ad898(0x2ed)](),Scene_Load[_0x5ad898(0x2fd)]['reloadMapIfUpdated'](),SceneManager['goto'](Scene_Map),this[_0x5ad898(0x207)]=!![],VisuMZ[_0x5ad898(0x216)][_0x5ad898(0x1b0)][_0x5ad898(0x22d)][_0x5ad898(0x288)][_0x5ad898(0x2e0)](this);},Scene_Title[_0x491f2d(0x2fd)]['onSaveCoreLoadFailure']=function(){const _0x274fe2=_0x491f2d;SoundManager[_0x274fe2(0x24a)](),VisuMZ[_0x274fe2(0x216)][_0x274fe2(0x1b0)][_0x274fe2(0x22d)]['OnLoadFailureJS']['call'](this),this['loadFailureConfirmationWindow']();},Scene_Title[_0x491f2d(0x2fd)][_0x491f2d(0x1ba)]=function(_0x2ff2f6){const _0x303d68=_0x491f2d;Scene_Base[_0x303d68(0x2fd)][_0x303d68(0x1ba)][_0x303d68(0x2e0)](this,_0x2ff2f6),this[_0x303d68(0x1c7)][_0x303d68(0x26b)](),this[_0x303d68(0x1c7)][_0x303d68(0x2c5)]();},VisuMZ[_0x491f2d(0x216)][_0x491f2d(0x24d)]=Scene_Map[_0x491f2d(0x2fd)][_0x491f2d(0x248)],Scene_Map[_0x491f2d(0x2fd)][_0x491f2d(0x248)]=function(){const _0x2089f2=_0x491f2d;VisuMZ['SaveCore'][_0x2089f2(0x24d)][_0x2089f2(0x2e0)](this);if(SceneManager['isPreviousScene'](Scene_Menu)){if(_0x2089f2(0x32a)!==_0x2089f2(0x1be))this[_0x2089f2(0x22c)](_0x2089f2(0x1cb)),this[_0x2089f2(0x1a9)]();else{function _0x5d3e12(){const _0x92788c=_0x2089f2;return _0x3335ad[_0x92788c(0x216)][_0x92788c(0x2a1)]['call'](this,_0xe7688f);}}}else{if(SceneManager['isPreviousScene'](Scene_Battle)){if(_0x2089f2(0x2e4)!==_0x2089f2(0x2e4)){function _0x516313(){const _0x10ed28=_0x2089f2;_0x3da292[_0x10ed28(0x216)][_0x10ed28(0x1b0)]['AutosaveOption'][_0x10ed28(0x19b)]&&this[_0x10ed28(0x274)]();}}else this[_0x2089f2(0x22c)]('battle'),this['requestAutosave']();}}},VisuMZ[_0x491f2d(0x216)][_0x491f2d(0x279)]=Scene_Map[_0x491f2d(0x2fd)]['onTransferEnd'],Scene_Map['prototype'][_0x491f2d(0x20e)]=function(){const _0x14d666=_0x491f2d;if(this[_0x14d666(0x27d)]()){if(_0x14d666(0x1b6)===_0x14d666(0x258)){function _0x4d728b(){const _0x2c200e=_0x14d666;this['x']=-0x1*_0x3e7eea[_0x2c200e(0x29b)]();}}else this[_0x14d666(0x22c)](_0x14d666(0x241));}VisuMZ[_0x14d666(0x216)][_0x14d666(0x279)]['call'](this);},Scene_Map[_0x491f2d(0x2fd)][_0x491f2d(0x2ce)]=function(){const _0x29e675=_0x491f2d;if($gameSystem[_0x29e675(0x200)]){if(_0x29e675(0x339)!=='mMupM'){function _0x1c4e66(){const _0x175bb0=_0x29e675;if(!_0x574a97['svbattlers'])return this[_0x175bb0(0x2e3)](_0x223c64,_0x15560d,_0x3b4312,_0x70186e,_0x30e489);const _0x3330a0=_0x47aad2[_0x175bb0(0x308)](_0x2be523[_0x175bb0(0x1b2)][_0x175bb0(0x232)],_0x294f62['maxBattleMembers']()),_0x51992d=_0x1021a3['saveMenuSvBattlerWidth'];_0x5c21ca=_0x3dd523+_0x6e03d[_0x175bb0(0x214)]((_0x2743b9-_0x3330a0*_0x51992d)/0x2)+_0x51992d/0x2,_0x32756b=_0x16fe80+_0x169347-0x8;for(const _0x25b9ec of _0x46c6e9['svbattlers']){this[_0x175bb0(0x2d7)](_0x25b9ec,_0x3aca87,_0x534ec7),_0x5e914c+=_0x51992d;}}}else return;}const _0x2c4f1b=$gameSystem[_0x29e675(0x2ea)]();if(StorageManager[_0x29e675(0x334)]()!==_0x29e675(0x2bb)&&_0x2c4f1b<=0x0)return;this[_0x29e675(0x336)]=![],$gameSystem[_0x29e675(0x27b)](_0x2c4f1b),$gameSystem[_0x29e675(0x275)](),$gameSystem[_0x29e675(0x200)]=!![],DataManager[_0x29e675(0x221)](_0x2c4f1b)[_0x29e675(0x2bf)](()=>this[_0x29e675(0x1c5)]())[_0x29e675(0x1c0)](()=>this[_0x29e675(0x2e6)]()),$gameSystem[_0x29e675(0x200)]=undefined;},Scene_Map[_0x491f2d(0x2fd)][_0x491f2d(0x1c5)]=function(){const _0x28ae9f=_0x491f2d;SoundManager['playSave'](),VisuMZ[_0x28ae9f(0x216)][_0x28ae9f(0x1b0)][_0x28ae9f(0x22d)][_0x28ae9f(0x2f4)]['call'](this),this['openSaveConfirmationWindow'](!![]);},Scene_Map[_0x491f2d(0x2fd)][_0x491f2d(0x2e6)]=function(){const _0xaa8c14=_0x491f2d;SoundManager['playBuzzer'](),VisuMZ[_0xaa8c14(0x216)][_0xaa8c14(0x1b0)][_0xaa8c14(0x22d)][_0xaa8c14(0x25c)][_0xaa8c14(0x2e0)](this),this[_0xaa8c14(0x306)](![]);},Scene_Map['prototype']['closeSaveConfirmationWindow']=function(_0x3293be){const _0x17f747=_0x491f2d;Scene_Message[_0x17f747(0x2fd)][_0x17f747(0x1ba)]['call'](this,_0x3293be),this['_active']=!![];},VisuMZ[_0x491f2d(0x216)][_0x491f2d(0x290)]=Scene_Menu['prototype'][_0x491f2d(0x2a3)],Scene_Menu[_0x491f2d(0x2fd)][_0x491f2d(0x2a3)]=function(){const _0x3e8da6=_0x491f2d;VisuMZ[_0x3e8da6(0x216)][_0x3e8da6(0x290)][_0x3e8da6(0x2e0)](this);if(SceneManager[_0x3e8da6(0x27f)](Scene_Map)){if(_0x3e8da6(0x1cf)!=='ajkEg')this[_0x3e8da6(0x22c)](_0x3e8da6(0x21a)),this[_0x3e8da6(0x1a9)]();else{function _0x3e9ed9(){const _0x412e4c=_0x3e8da6;if(!this[_0x412e4c(0x329)]())return this[_0x412e4c(0x1ba)](_0x2e35b1);if(!this[_0x412e4c(0x211)])this['createSaveConfirmationWindow']();const _0x4148d5=this[_0x412e4c(0x211)];this['removeChild'](_0x4148d5),this[_0x412e4c(0x315)](_0x4148d5),_0x4148d5[_0x412e4c(0x26b)](),_0x4148d5[_0x412e4c(0x23c)](),_0x4148d5['contents'][_0x412e4c(0x331)]();let _0x56f114='';_0x1fd787?_0x56f114=_0x54187e[_0x412e4c(0x247)]:_0x56f114=_0x1c1053?_0x1d8694[_0x412e4c(0x1fb)]:_0x454db0[_0x412e4c(0x1bd)];const _0x5bfa98=_0x4148d5[_0x412e4c(0x213)](_0x56f114)[_0x412e4c(0x201)],_0xe89c07=(_0x4148d5['innerWidth']-_0x5bfa98)/0x2;_0x4148d5['drawTextEx'](_0x56f114,_0xe89c07,0x0,_0x5bfa98);const _0x4daabc=_0x5d43b1[_0x412e4c(0x216)][_0x412e4c(0x1b0)][_0x412e4c(0x2f3)][_0x412e4c(0x301)];_0x274ae7(this[_0x412e4c(0x1ba)][_0x412e4c(0x251)](this,_0x263b85),_0x4daabc);}}}},VisuMZ[_0x491f2d(0x216)][_0x491f2d(0x2e1)]=Scene_Menu['prototype'][_0x491f2d(0x1e0)],Scene_Menu[_0x491f2d(0x2fd)][_0x491f2d(0x1e0)]=function(){const _0x1d0742=_0x491f2d,_0x38ab69=StorageManager[_0x1d0742(0x334)]();switch(_0x38ab69){case _0x1d0742(0x199):case _0x1d0742(0x2bb):this[_0x1d0742(0x253)]();break;default:VisuMZ[_0x1d0742(0x216)][_0x1d0742(0x2e1)]['call'](this);break;}},Scene_Menu['prototype'][_0x491f2d(0x253)]=function(){const _0xaa808=_0x491f2d,_0x31170e=$gameSystem[_0xaa808(0x2ea)]();$gameSystem[_0xaa808(0x27b)](_0x31170e),$gameSystem['onBeforeSave'](),DataManager[_0xaa808(0x221)](_0x31170e)[_0xaa808(0x2bf)](()=>this[_0xaa808(0x28f)]())['catch'](()=>this['onSaveCoreSaveFailure']());},Scene_Menu['prototype']['onSaveCoreSaveSuccess']=function(){const _0x3f14b7=_0x491f2d;SoundManager[_0x3f14b7(0x2c4)](),VisuMZ[_0x3f14b7(0x216)][_0x3f14b7(0x1b0)][_0x3f14b7(0x22d)][_0x3f14b7(0x2f4)][_0x3f14b7(0x2e0)](this),this[_0x3f14b7(0x306)](!![]);},Scene_Menu[_0x491f2d(0x2fd)][_0x491f2d(0x2d8)]=function(){const _0x2f4c5f=_0x491f2d;SoundManager[_0x2f4c5f(0x24a)](),VisuMZ['SaveCore'][_0x2f4c5f(0x1b0)][_0x2f4c5f(0x22d)]['OnSaveFailureJS'][_0x2f4c5f(0x2e0)](this),this[_0x2f4c5f(0x306)](![]);},Scene_Menu[_0x491f2d(0x2fd)][_0x491f2d(0x1ba)]=function(_0x223192){const _0x58984f=_0x491f2d;Scene_MenuBase[_0x58984f(0x2fd)][_0x58984f(0x1ba)]['call'](this,_0x223192),this[_0x58984f(0x1c7)][_0x58984f(0x2c5)]();},Scene_Battle['prototype'][_0x491f2d(0x1a9)]=function(){},VisuMZ['SaveCore']['Scene_Options_maxCommands']=Scene_Options[_0x491f2d(0x2fd)][_0x491f2d(0x31f)],Scene_Options[_0x491f2d(0x2fd)][_0x491f2d(0x31f)]=function(){const _0x43d087=_0x491f2d;let _0x1d207d=VisuMZ[_0x43d087(0x216)][_0x43d087(0x22a)]['call'](this);const _0x2e2ba6=VisuMZ['SaveCore']['Settings'];if(_0x2e2ba6[_0x43d087(0x31c)][_0x43d087(0x19b)]&&_0x2e2ba6[_0x43d087(0x31c)][_0x43d087(0x1d3)])_0x1d207d++;return _0x1d207d;},Scene_Save[_0x491f2d(0x2fd)][_0x491f2d(0x1c5)]=function(){const _0x3c8c1d=_0x491f2d;SoundManager['playSave'](),VisuMZ[_0x3c8c1d(0x216)][_0x3c8c1d(0x1b0)][_0x3c8c1d(0x22d)][_0x3c8c1d(0x2f4)]['call'](this),this[_0x3c8c1d(0x2b0)][_0x3c8c1d(0x302)](),this['openSaveConfirmationWindow'](!![]);},VisuMZ[_0x491f2d(0x216)][_0x491f2d(0x1f4)]=Scene_Save[_0x491f2d(0x2fd)]['onSaveFailure'],Scene_Save['prototype'][_0x491f2d(0x2e6)]=function(){const _0x4bea03=_0x491f2d;SoundManager[_0x4bea03(0x24a)](),VisuMZ[_0x4bea03(0x216)][_0x4bea03(0x1b0)][_0x4bea03(0x22d)][_0x4bea03(0x25c)][_0x4bea03(0x2e0)](this),this[_0x4bea03(0x306)](![]);},Scene_Save[_0x491f2d(0x2fd)][_0x491f2d(0x1ba)]=function(_0x133ab6){const _0xe3db76=_0x491f2d;Scene_File[_0xe3db76(0x2fd)][_0xe3db76(0x1ba)][_0xe3db76(0x2e0)](this,_0x133ab6),_0x133ab6?this['activateListWindow']():this[_0xe3db76(0x2a0)]();},Scene_Save[_0x491f2d(0x2fd)][_0x491f2d(0x1a7)]=function(){const _0x301591=_0x491f2d;$gameTemp['_pickLockedSaveSlot']=![],Scene_File[_0x301591(0x2fd)][_0x301591(0x1a7)][_0x301591(0x2e0)](this);},VisuMZ[_0x491f2d(0x216)][_0x491f2d(0x1ed)]=Scene_Save['prototype'][_0x491f2d(0x309)],Scene_Save[_0x491f2d(0x2fd)][_0x491f2d(0x309)]=function(){const _0x5b3bf8=_0x491f2d;if($gameTemp[_0x5b3bf8(0x2ef)])return TextManager[_0x5b3bf8(0x23a)];else{if(_0x5b3bf8(0x2b8)==='GTAQV'){function _0x3ac3d4(){const _0x4d8b9b=_0x5b3bf8;if(_0xff7b4b[_0x4d8b9b(0x1db)][_0x6a994a][_0x4d8b9b(0x2eb)](/<GLOBAL>/i))_0x2ebf74[_0x4d8b9b(0x20c)][_0x4d8b9b(0x1e3)](_0x37960d);}}else return VisuMZ[_0x5b3bf8(0x216)][_0x5b3bf8(0x1ed)][_0x5b3bf8(0x2e0)](this);}},VisuMZ['SaveCore'][_0x491f2d(0x1df)]=Scene_Save[_0x491f2d(0x2fd)][_0x491f2d(0x1ac)],Scene_Save[_0x491f2d(0x2fd)]['executeSave']=function(_0x5bb71a){const _0x39ad4c=_0x491f2d;$gameTemp[_0x39ad4c(0x2ef)]?this[_0x39ad4c(0x2fe)](_0x5bb71a):VisuMZ[_0x39ad4c(0x216)][_0x39ad4c(0x1df)]['call'](this,_0x5bb71a);},Scene_Save['prototype']['startNewGameLockedSave']=function(_0x52f686){const _0x4b4914=_0x491f2d;$gameTemp[_0x4b4914(0x2ef)]=![],SoundManager['playLoad'](),$gameSystem[_0x4b4914(0x27b)](_0x52f686),this['fadeOutAll'](),SceneManager['goto'](Scene_Map);},VisuMZ[_0x491f2d(0x216)][_0x491f2d(0x25e)]=Scene_Load['prototype']['onLoadSuccess'],Scene_Load[_0x491f2d(0x2fd)][_0x491f2d(0x19e)]=function(){const _0x2b9290=_0x491f2d;VisuMZ[_0x2b9290(0x216)][_0x2b9290(0x25e)]['call'](this),VisuMZ[_0x2b9290(0x216)][_0x2b9290(0x1b0)][_0x2b9290(0x22d)][_0x2b9290(0x288)][_0x2b9290(0x2e0)](this),setTimeout(VisuMZ[_0x2b9290(0x216)][_0x2b9290(0x1ff)][_0x2b9290(0x251)](this),0x3e8);},Scene_Load[_0x491f2d(0x2fd)][_0x491f2d(0x1f5)]=function(){const _0x42c13d=_0x491f2d;SoundManager[_0x42c13d(0x24a)](),VisuMZ[_0x42c13d(0x216)]['Settings'][_0x42c13d(0x22d)][_0x42c13d(0x267)][_0x42c13d(0x2e0)](this),this[_0x42c13d(0x2db)]();},Scene_Load[_0x491f2d(0x2fd)][_0x491f2d(0x1ba)]=function(_0x304847){const _0x39ea03=_0x491f2d;Scene_File[_0x39ea03(0x2fd)][_0x39ea03(0x1ba)]['call'](this,_0x304847),this[_0x39ea03(0x2a0)]();},VisuMZ['SaveCore'][_0x491f2d(0x1ff)]=function(){const _0x44920f=_0x491f2d;$gameSystem[_0x44920f(0x200)]=undefined;},ImageManager[_0x491f2d(0x2d2)]=ImageManager[_0x491f2d(0x2d2)]||0x9,ImageManager['svActorVertCells']=ImageManager[_0x491f2d(0x2d3)]||0x6,Window_Base['prototype'][_0x491f2d(0x2d7)]=function(_0x137ee2,_0x5bdb51,_0x5cac6f){const _0x69238f=_0x491f2d,_0x263967=ImageManager[_0x69238f(0x294)](_0x137ee2),_0x52f911=_0x263967[_0x69238f(0x201)]/ImageManager['svActorHorzCells'],_0x3e705f=_0x263967[_0x69238f(0x323)]/ImageManager[_0x69238f(0x2d3)],_0x537b6b=0x0,_0x4f82b5=0x0;this[_0x69238f(0x303)]['blt'](_0x263967,_0x537b6b,_0x4f82b5,_0x52f911,_0x3e705f,_0x5bdb51-_0x52f911/0x2,_0x5cac6f-_0x3e705f);},VisuMZ[_0x491f2d(0x216)][_0x491f2d(0x318)]=Window_Options['prototype']['addGeneralOptions'],Window_Options['prototype'][_0x491f2d(0x292)]=function(){const _0x484183=_0x491f2d;VisuMZ['SaveCore'][_0x484183(0x318)][_0x484183(0x2e0)](this),this[_0x484183(0x289)]();},Window_Options[_0x491f2d(0x2fd)][_0x491f2d(0x289)]=function(){const _0x3018b7=_0x491f2d;if(VisuMZ[_0x3018b7(0x216)][_0x3018b7(0x1b0)][_0x3018b7(0x31c)][_0x3018b7(0x19b)]){if(_0x3018b7(0x1bb)===_0x3018b7(0x1b3)){function _0x3fc61a(){const _0x48d06e=_0x3018b7,_0x4b1af7=_0x4e9064['autosaveOption'],_0x234b31=_0x48d06e(0x296);this['addCommand'](_0x4b1af7,_0x234b31);}}else this[_0x3018b7(0x274)]();}},Window_Options[_0x491f2d(0x2fd)][_0x491f2d(0x274)]=function(){const _0x419c10=_0x491f2d,_0x427947=TextManager[_0x419c10(0x1ce)],_0x513c56=_0x419c10(0x296);this[_0x419c10(0x203)](_0x427947,_0x513c56);};function Window_AutosaveConfirm(){const _0x5357e9=_0x491f2d;this[_0x5357e9(0x2be)](...arguments);}Window_AutosaveConfirm[_0x491f2d(0x2fd)]=Object['create'](Window_Base[_0x491f2d(0x2fd)]),Window_AutosaveConfirm[_0x491f2d(0x2fd)]['constructor']=Window_AutosaveConfirm,Window_AutosaveConfirm[_0x491f2d(0x2fd)][_0x491f2d(0x2be)]=function(_0x53c540){const _0x128ae0=_0x491f2d;this[_0x128ae0(0x1fd)]=0x0,Window_Base['prototype'][_0x128ae0(0x2be)][_0x128ae0(0x2e0)](this,_0x53c540),this['opacity']=0x0,this[_0x128ae0(0x2fa)]=0x0;},Window_AutosaveConfirm[_0x491f2d(0x2fd)][_0x491f2d(0x332)]=function(){const _0x5a69f5=_0x491f2d,_0x56260a=0x0,_0xeb6b54=0x0,_0x6c0e3d=this[_0x5a69f5(0x1fe)],_0x34bd02=this['innerHeight'],_0x1a9080=ColorManager[_0x5a69f5(0x1e9)](),_0x25667d=ColorManager[_0x5a69f5(0x23e)](),_0x3d1dc5=_0x6c0e3d/0x2;this[_0x5a69f5(0x303)]['gradientFillRect'](_0x56260a,_0xeb6b54,_0x3d1dc5,_0x34bd02,_0x25667d,_0x1a9080),this[_0x5a69f5(0x303)][_0x5a69f5(0x260)](_0x56260a+_0x3d1dc5,_0xeb6b54,_0x3d1dc5,_0x34bd02,_0x1a9080,_0x25667d);},Window_AutosaveConfirm[_0x491f2d(0x2fd)]['setSetSuccess']=function(_0x56148e){const _0x3acd80=_0x491f2d;this['_success']=_0x56148e,this[_0x3acd80(0x302)]();},Window_AutosaveConfirm['prototype'][_0x491f2d(0x302)]=function(){const _0x1c0a89=_0x491f2d;this[_0x1c0a89(0x303)][_0x1c0a89(0x331)]();const _0x5248a5=this[_0x1c0a89(0x32e)]?TextManager['autosaveSuccess']:TextManager[_0x1c0a89(0x1f6)],_0x5a04dc=Math['ceil'](this[_0x1c0a89(0x213)](_0x5248a5)[_0x1c0a89(0x201)]);this[_0x1c0a89(0x201)]=_0x5a04dc+($gameSystem['windowPadding']()+this[_0x1c0a89(0x265)]())*0x2,this[_0x1c0a89(0x1a1)](),this[_0x1c0a89(0x23d)]();const _0x1eaa4a=Math['floor']((this[_0x1c0a89(0x1fe)]-_0x5a04dc)/0x2);this[_0x1c0a89(0x332)](),this[_0x1c0a89(0x218)](_0x5248a5,_0x1eaa4a,0x0,_0x5a04dc);},Window_AutosaveConfirm[_0x491f2d(0x2fd)][_0x491f2d(0x312)]=function(){const _0x45320a=_0x491f2d;return VisuMZ['SaveCore'][_0x45320a(0x1b0)]['AutosaveConfirm'][_0x45320a(0x1b1)];},Window_AutosaveConfirm[_0x491f2d(0x2fd)][_0x491f2d(0x1a1)]=function(){const _0x130e5f=_0x491f2d,_0x89d068=this[_0x130e5f(0x312)]();if(_0x89d068[_0x130e5f(0x2eb)](/upper/i)){if(_0x130e5f(0x328)!==_0x130e5f(0x299))this['y']=-0x1*$gameSystem[_0x130e5f(0x29b)]();else{function _0x576662(){const _0x2e71f5=_0x130e5f;return _0x3c64ea[_0x2e71f5(0x216)][_0x2e71f5(0x1b0)][_0x2e71f5(0x22d)]['LocalMode'];}}}else _0x89d068[_0x130e5f(0x2eb)](/lower/i)?this['y']=Graphics['height']-this[_0x130e5f(0x323)]+$gameSystem[_0x130e5f(0x29b)]():this['y']=(Graphics[_0x130e5f(0x323)]-this[_0x130e5f(0x323)])/0x2;if(_0x89d068[_0x130e5f(0x2eb)](/left/i)){if('rkCBl'===_0x130e5f(0x32c)){function _0x1215d2(){const _0x23efd3=_0x130e5f;if(!_0x139f81[_0x23efd3(0x296)])return;this[_0x23efd3(0x1a3)]();}}else this['x']=-0x1*$gameSystem[_0x130e5f(0x29b)]();}else{if(_0x89d068[_0x130e5f(0x2eb)](/right/i)){if(_0x130e5f(0x30b)!=='JiFho')this['x']=Graphics[_0x130e5f(0x201)]-this['width']+$gameSystem[_0x130e5f(0x29b)]();else{function _0x3f3131(){const _0x3c6602=_0x130e5f,_0x1fe8ff=this['textSizeEx'](_0x38e108[_0x3c6602(0x277)])[_0x3c6602(0x201)];_0x3a5613=_0xe65b8f||_0x3c6602(0x2b6);if(_0x35dfac===_0x3c6602(0x2af))_0x52081b=_0x1124e4+_0x3960ee-_0x1fe8ff;else _0x39d53e==='center'&&(_0x3af097=_0x51824a+(_0x391642-_0x1fe8ff)/0x2);this[_0x3c6602(0x218)](_0x43442a['description'],_0x5074da,_0x123c1c,_0x39e04a);}}}else this['x']=(Graphics[_0x130e5f(0x201)]-this[_0x130e5f(0x201)])/0x2;}this['x']=Math[_0x130e5f(0x214)](this['x']),this['y']=Math[_0x130e5f(0x214)](this['y']);},Window_AutosaveConfirm[_0x491f2d(0x2fd)][_0x491f2d(0x314)]=function(){const _0x41d052=_0x491f2d;Window_Base[_0x41d052(0x2fd)][_0x41d052(0x314)]['call'](this);if(this[_0x41d052(0x1fd)]!==0x0)this[_0x41d052(0x1d8)]();},Window_AutosaveConfirm['prototype'][_0x491f2d(0x1d8)]=function(){const _0x34fde8=_0x491f2d;this[_0x34fde8(0x2fa)]+=this[_0x34fde8(0x1fd)];if(this[_0x34fde8(0x2fa)]>=0xff||this['contentsOpacity']<=0x0)this[_0x34fde8(0x29e)](0x0);},Window_AutosaveConfirm[_0x491f2d(0x2fd)]['setFadeSpeed']=function(_0x45152c){const _0x14f1b3=_0x491f2d;this[_0x14f1b3(0x1fd)]=_0x45152c;},Window_AutosaveConfirm[_0x491f2d(0x2fd)][_0x491f2d(0x1ea)]=function(){this['setFadeSpeed'](0x10);},Window_AutosaveConfirm[_0x491f2d(0x2fd)][_0x491f2d(0x1a0)]=function(){const _0x54e19b=_0x491f2d;this[_0x54e19b(0x29e)](-0x10);},VisuMZ['SaveCore']['Window_SavefileList_setMode']=Window_SavefileList[_0x491f2d(0x2fd)][_0x491f2d(0x310)],Window_SavefileList['prototype'][_0x491f2d(0x310)]=function(_0x12fc7b,_0x23fba2){const _0x57f93d=_0x491f2d;if(StorageManager[_0x57f93d(0x243)]()===_0x57f93d(0x307))_0x23fba2=![];if($gameTemp[_0x57f93d(0x2ef)])_0x23fba2=![];VisuMZ['SaveCore'][_0x57f93d(0x27e)][_0x57f93d(0x2e0)](this,_0x12fc7b,_0x23fba2);},Window_SavefileList[_0x491f2d(0x2fd)][_0x491f2d(0x212)]=function(){const _0x1c9bf8=_0x491f2d,_0x253700=VisuMZ[_0x1c9bf8(0x216)][_0x1c9bf8(0x1b0)][_0x1c9bf8(0x192)],_0x4717a0=this['menuStyle']();switch(_0x4717a0){case _0x1c9bf8(0x27c):return _0x253700[_0x1c9bf8(0x2b7)];break;case _0x1c9bf8(0x269):return _0x253700['BoxRows'];break;case _0x1c9bf8(0x256):return _0x253700['LargeRows'];break;default:return _0x253700[_0x1c9bf8(0x2b9)];break;}},Window_SavefileList['prototype'][_0x491f2d(0x24f)]=function(){const _0xb65c90=_0x491f2d,_0x1f116d=VisuMZ[_0xb65c90(0x216)][_0xb65c90(0x1b0)]['SaveMenu'],_0x3ef6bb=this[_0xb65c90(0x1dd)]();switch(_0x3ef6bb){case'vertical':return _0x1f116d['VertCols'];break;case'box':return _0x1f116d[_0xb65c90(0x228)];break;case'large':return _0x1f116d['LargeCols'];break;default:return _0x1f116d[_0xb65c90(0x20b)];break;}},Window_SavefileList[_0x491f2d(0x2fd)][_0x491f2d(0x22b)]=function(){const _0xa17809=_0x491f2d;Imported[_0xa17809(0x293)]&&Window_Selectable[_0xa17809(0x2fd)]['resetWordWrap'][_0xa17809(0x2e0)](this);},Window_SavefileList[_0x491f2d(0x2fd)]['setWordWrap']=function(_0x2255d3){const _0x692184=_0x491f2d;if(Imported[_0x692184(0x293)]){if(_0x692184(0x263)!=='DemKi'){function _0x37e9cf(){const _0x12ea33=_0x692184;this[_0x12ea33(0x2a0)]();}}else return Window_Selectable[_0x692184(0x2fd)][_0x692184(0x1fa)][_0x692184(0x2e0)](this,_0x2255d3);}else return'';},Window_SavefileList[_0x491f2d(0x2fd)]['actorStyle']=function(){const _0x494394=_0x491f2d;return VisuMZ[_0x494394(0x216)][_0x494394(0x1b0)]['ActorGraphic'];},Window_SavefileList[_0x491f2d(0x2fd)]['menuStyle']=function(){const _0x1e55c1=_0x491f2d;return VisuMZ['SaveCore'][_0x1e55c1(0x1b0)]['SaveMenuStyle'];},Window_SavefileList[_0x491f2d(0x2fd)][_0x491f2d(0x2ba)]=function(_0x2783f8){const _0x28c81a=_0x491f2d,_0x16de69=Math[_0x28c81a(0x204)](0x0,this[_0x28c81a(0x1da)](_0x2783f8));this[_0x28c81a(0x2c1)](_0x16de69);},Window_SavefileList[_0x491f2d(0x2fd)]['drawItem']=function(_0x42349a){const _0x3409c4=_0x491f2d,_0x3c54ee=this[_0x3409c4(0x29f)](_0x42349a),_0x4280f7=DataManager['savefileInfo'](_0x3c54ee);if(_0x4280f7)_0x4280f7['savefileId']=_0x3c54ee;this[_0x3409c4(0x2e7)]=_0x3c54ee;const _0x34ade9=this['itemRect'](_0x42349a);this[_0x3409c4(0x23c)](),this['changePaintOpacity'](this[_0x3409c4(0x2f1)](_0x3c54ee)),this[_0x3409c4(0x31e)](_0x4280f7,_0x34ade9);},Window_SavefileList['prototype'][_0x491f2d(0x317)]=function(_0x3f5bfe,_0x5f3c2a,_0x339032){const _0x5ddec7=_0x491f2d;if(_0x3f5bfe===0x0){if(_0x5ddec7(0x2c3)!==_0x5ddec7(0x2f6))this[_0x5ddec7(0x2ec)](TextManager[_0x5ddec7(0x296)],_0x5f3c2a,_0x339032,0xb4);else{function _0x552a9a(){const _0x1035cd=_0x5ddec7;_0x5f21d3[_0x1035cd(0x2fd)][_0x1035cd(0x314)][_0x1035cd(0x2e0)](this);if(this[_0x1035cd(0x1fd)]!==0x0)this[_0x1035cd(0x1d8)]();}}}else this['drawText'](TextManager[_0x5ddec7(0x2f7)]+'\x20'+_0x3f5bfe,_0x5f3c2a,_0x339032,0xb4);},Window_SavefileList[_0x491f2d(0x2fd)][_0x491f2d(0x1e8)]=function(_0x2d5567,_0x111e58,_0x35056c){const _0x4d0134=_0x491f2d;if(_0x2d5567===0x0||DataManager[_0x4d0134(0x2d5)]()!==_0x2d5567)return;const _0x3c956c=TextManager[_0x4d0134(0x237)];this[_0x4d0134(0x1bf)](ColorManager['latestSavefile']()),this[_0x4d0134(0x2ec)](_0x3c956c,_0x111e58,_0x35056c,0xb4);},Window_SavefileList[_0x491f2d(0x2fd)][_0x491f2d(0x297)]=function(_0x27bbe1,_0x15b640,_0xb17cd9,_0x4393b8,_0x1ec9dd){const _0x50b9ff=_0x491f2d;if(!_0x27bbe1['characters'])return;const _0x18fced=this[_0x50b9ff(0x1b9)]();switch(_0x18fced){case _0x50b9ff(0x291):this[_0x50b9ff(0x2b5)](_0x27bbe1,_0x15b640,_0xb17cd9,_0x4393b8,_0x1ec9dd);break;case'sprite':this[_0x50b9ff(0x2e3)](_0x27bbe1,_0x15b640,_0xb17cd9,_0x4393b8,_0x1ec9dd);break;case _0x50b9ff(0x210):this[_0x50b9ff(0x2ee)](_0x27bbe1,_0x15b640,_0xb17cd9,_0x4393b8,_0x1ec9dd);break;default:break;}},Window_SavefileList[_0x491f2d(0x2fd)][_0x491f2d(0x2b5)]=function(_0x26aa39,_0x2c6546,_0x2210d6,_0x45dd4c,_0x1f9e61){const _0x4503bf=_0x491f2d,_0x4344c5=Math[_0x4503bf(0x308)](_0x26aa39[_0x4503bf(0x1f1)][_0x4503bf(0x232)],$gameParty[_0x4503bf(0x219)]()),_0x5dc216=Math[_0x4503bf(0x308)](ImageManager['faceWidth'],Math[_0x4503bf(0x1a2)](_0x45dd4c/_0x4344c5));_0x2c6546=_0x2c6546+Math[_0x4503bf(0x214)]((_0x45dd4c-_0x4344c5*_0x5dc216)/0x2);for(const _0x15658e of _0x26aa39[_0x4503bf(0x1f1)]){this[_0x4503bf(0x2dc)](_0x15658e[0x0],_0x15658e[0x1],_0x2c6546,_0x2210d6+0x1,_0x5dc216,_0x1f9e61-0x2),_0x2c6546+=_0x5dc216;}},ImageManager[_0x491f2d(0x268)]=VisuMZ['SaveCore']['Settings'][_0x491f2d(0x192)][_0x491f2d(0x1af)],ImageManager[_0x491f2d(0x227)]=VisuMZ[_0x491f2d(0x216)][_0x491f2d(0x1b0)]['SaveMenu']['SvBattlerWidth'],Window_SavefileList['prototype'][_0x491f2d(0x2e3)]=function(_0x28520b,_0x58a228,_0x35671d,_0x12c77d,_0x305d92){const _0x3026de=_0x491f2d,_0x2c9281=Math[_0x3026de(0x308)](_0x28520b[_0x3026de(0x215)][_0x3026de(0x232)],$gameParty[_0x3026de(0x219)]()),_0x352aac=ImageManager['saveMenuSpriteWidth'];_0x58a228=_0x58a228+Math['round']((_0x12c77d-_0x2c9281*_0x352aac)/0x2)+_0x352aac/0x2,_0x35671d=_0x35671d+_0x305d92-0x8;for(const _0x8ca3f8 of _0x28520b[_0x3026de(0x215)]){this[_0x3026de(0x322)](_0x8ca3f8[0x0],_0x8ca3f8[0x1],_0x58a228,_0x35671d),_0x58a228+=_0x352aac;}},Window_SavefileList[_0x491f2d(0x2fd)][_0x491f2d(0x2ee)]=function(_0xa2c4ef,_0x2ab1c3,_0x58eb7e,_0x28902f,_0x34e517){const _0x3c0792=_0x491f2d;if(!_0xa2c4ef[_0x3c0792(0x1b2)])return this[_0x3c0792(0x2e3)](_0xa2c4ef,_0x2ab1c3,_0x58eb7e,_0x28902f,_0x34e517);const _0x258cbc=Math[_0x3c0792(0x308)](_0xa2c4ef[_0x3c0792(0x1b2)][_0x3c0792(0x232)],$gameParty[_0x3c0792(0x219)]()),_0x29f557=ImageManager[_0x3c0792(0x227)];_0x2ab1c3=_0x2ab1c3+Math[_0x3c0792(0x214)]((_0x28902f-_0x258cbc*_0x29f557)/0x2)+_0x29f557/0x2,_0x58eb7e=_0x58eb7e+_0x34e517-0x8;for(const _0x29bcd6 of _0xa2c4ef[_0x3c0792(0x1b2)]){this[_0x3c0792(0x2d7)](_0x29bcd6,_0x2ab1c3,_0x58eb7e),_0x2ab1c3+=_0x29f557;}},Window_SavefileList[_0x491f2d(0x2fd)][_0x491f2d(0x32f)]=function(_0x39b06b,_0xc9ba02,_0x24c194,_0x1646ab,_0x2b69e9,_0x4c5cb3){const _0x30c3c8=_0x491f2d;if(_0x39b06b==='')return;_0xc9ba02+=0x2,_0x24c194+=0x2,_0x1646ab-=0x4,_0x2b69e9-=0x4;const _0x20c13b=ImageManager['loadPicture'](_0x39b06b),_0x1ecf07=_0x20c13b[_0x30c3c8(0x201)],_0xe4f1a9=_0x20c13b[_0x30c3c8(0x323)],_0x171fcd=Math[_0x30c3c8(0x308)](_0x1646ab/_0x1ecf07,_0x2b69e9/_0xe4f1a9,_0x4c5cb3?0x1:0x3e8),_0x286cec=Math[_0x30c3c8(0x30c)](_0x20c13b[_0x30c3c8(0x201)]*_0x171fcd),_0x2856d2=Math[_0x30c3c8(0x30c)](_0x20c13b['height']*_0x171fcd);this[_0x30c3c8(0x19a)][_0x30c3c8(0x1dc)](_0x20c13b,0x0,0x0,_0x1ecf07,_0xe4f1a9,_0xc9ba02,_0x24c194,_0x286cec,_0x2856d2);},Window_SavefileList[_0x491f2d(0x2fd)]['drawCenteredPicture']=function(_0x171656,_0x1c6478,_0x4b695b,_0x55e497,_0x3d7e2e,_0x2c6396){const _0x1195d6=_0x491f2d;if(_0x171656==='')return;_0x1c6478+=0x2,_0x4b695b+=0x2,_0x55e497-=0x4,_0x3d7e2e-=0x4;const _0x33ff00=ImageManager[_0x1195d6(0x235)](_0x171656),_0x2df51e=_0x33ff00['width'],_0xf439ee=_0x33ff00[_0x1195d6(0x323)],_0x182ca7=Math['min'](_0x55e497/_0x2df51e,_0x3d7e2e/_0xf439ee,_0x2c6396?0x1:0x3e8),_0x43ab7d=Math['ceil'](_0x33ff00[_0x1195d6(0x201)]*_0x182ca7),_0x28bf96=Math[_0x1195d6(0x30c)](_0x33ff00[_0x1195d6(0x323)]*_0x182ca7);_0x1c6478+=(_0x55e497-_0x43ab7d)/0x2,_0x4b695b+=(_0x3d7e2e-_0x28bf96)/0x2,this['contentsBack'][_0x1195d6(0x1dc)](_0x33ff00,0x0,0x0,_0x2df51e,_0xf439ee,_0x1c6478,_0x4b695b,_0x43ab7d,_0x28bf96);},Window_SavefileList[_0x491f2d(0x2fd)][_0x491f2d(0x2df)]=function(_0x5195ef,_0x11ccb9,_0x43e0bb,_0x76828d,_0xe32b6e){const _0xc23aff=_0x491f2d;if(_0x5195ef[_0xc23aff(0x220)]){if('Ammek'===_0xc23aff(0x1b5)){function _0x3f78a5(){const _0x1efe2b=_0xc23aff;if(!_0xaacab2[_0x1efe2b(0x31d)]()||_0x572fd9[_0x1efe2b(0x21c)]())return;_0x36b43e[_0x1efe2b(0x25a)][_0x1efe2b(0x1a9)]();}}else _0xe32b6e=_0xe32b6e||_0xc23aff(0x2b6),this['drawText'](_0x5195ef[_0xc23aff(0x220)],_0x11ccb9,_0x43e0bb,_0x76828d,_0xe32b6e);}},Window_SavefileList[_0x491f2d(0x2fd)][_0x491f2d(0x2ac)]=function(_0x2fc9bb,_0x779d95,_0x484233,_0x452c9b,_0x5105bb){const _0x114b08=_0x491f2d;if(_0x2fc9bb[_0x114b08(0x1f0)]){if(_0x114b08(0x2dd)!=='tVQXS'){_0x5105bb=_0x5105bb||_0x114b08(0x2b6);const _0xbc9da7=this[_0x114b08(0x22f)](_0x2fc9bb);this[_0x114b08(0x2ec)](_0xbc9da7,_0x779d95,_0x484233,_0x452c9b,_0x5105bb);}else{function _0xda4d67(){const _0x10d78c=_0x114b08;this[_0x10d78c(0x2a0)]();}}}},Window_SavefileList[_0x491f2d(0x2fd)][_0x491f2d(0x22f)]=function(_0x857e83){const _0x1ca40e=_0x491f2d,_0x451b21=_0x857e83['timestamp'],_0x4f7aac=new Date(_0x451b21);let _0x240441='[Year].[Month].[Date]\x20[Hour]:[Minute]:[Second]';_0x240441=_0x240441[_0x1ca40e(0x32d)](/\[YEAR\]/gi,'%1'),_0x240441=_0x240441['replace'](/\[MONTH\]/gi,'%2'),_0x240441=_0x240441[_0x1ca40e(0x32d)](/\[DATE\]/gi,'%3'),_0x240441=_0x240441[_0x1ca40e(0x32d)](/\[HOUR\]/gi,'%4'),_0x240441=_0x240441[_0x1ca40e(0x32d)](/\[MINUTE\]/gi,'%5'),_0x240441=_0x240441[_0x1ca40e(0x32d)](/\[SECOND\]/gi,'%6');let _0x1165f5=String(_0x4f7aac[_0x1ca40e(0x2c7)]())[_0x1ca40e(0x2a9)]('')[_0x1ca40e(0x2cf)]('​');return _0x240441['format'](_0x1165f5['padStart'](0x4,'0'),String(_0x4f7aac[_0x1ca40e(0x22e)]()+0x1)[_0x1ca40e(0x1d9)](0x2,'0'),String(_0x4f7aac['getDate']())[_0x1ca40e(0x1d9)](0x2,'0'),String(_0x4f7aac[_0x1ca40e(0x338)]())[_0x1ca40e(0x1d9)](0x2,'0'),String(_0x4f7aac[_0x1ca40e(0x217)]())[_0x1ca40e(0x1d9)](0x2,'0'),String(_0x4f7aac[_0x1ca40e(0x198)]())['padStart'](0x2,'0'));},Window_SavefileList[_0x491f2d(0x2fd)][_0x491f2d(0x2c9)]=function(_0x3af465,_0x62957c,_0x55016f,_0xb6f562){const _0x18105a=_0x491f2d;if(_0x3af465[_0x18105a(0x28e)]===undefined)return;const _0x4fc8d3=_0x3af465[_0x18105a(0x28e)],_0x19ace3=TextManager['currencyUnit'];Window_SavefileList[_0x18105a(0x2fd)]['drawCurrencyValue']['call'](this,_0x4fc8d3,_0x19ace3,_0x62957c,_0x55016f,_0xb6f562);},Window_SavefileList['prototype'][_0x491f2d(0x1d2)]=function(_0x4c9d6b,_0x73a1fd,_0x2521fc,_0x3291a1,_0x34b611){const _0x18f699=_0x491f2d;if(_0x4c9d6b[_0x18f699(0x277)]){if('IIhil'===_0x18f699(0x283)){function _0x21fbc5(){const _0x5b0e0f=_0x18f699;_0x703bc8[_0x5b0e0f(0x216)]['Scene_Title_terminate'][_0x5b0e0f(0x2e0)](this);if(this[_0x5b0e0f(0x207)])_0x809d64[_0x5b0e0f(0x31b)]();}}else{const _0x4090ab=this['textSizeEx'](_0x4c9d6b['description'])['width'];_0x34b611=_0x34b611||_0x18f699(0x2b6);if(_0x34b611==='right')_0x73a1fd=_0x73a1fd+_0x3291a1-_0x4090ab;else _0x34b611===_0x18f699(0x1c9)&&(_0x73a1fd=_0x73a1fd+(_0x3291a1-_0x4090ab)/0x2);this[_0x18f699(0x218)](_0x4c9d6b[_0x18f699(0x277)],_0x73a1fd,_0x2521fc,_0x3291a1);}}},Window_SavefileList[_0x491f2d(0x2fd)][_0x491f2d(0x31e)]=function(_0x214455,_0x20d1bf){const _0x15af4a=_0x491f2d;if(_0x214455){if(_0x15af4a(0x2e8)===_0x15af4a(0x2e8)){const _0x468af4=ImageManager[_0x15af4a(0x235)](_0x214455[_0x15af4a(0x254)]||'');_0x468af4[_0x15af4a(0x1ad)](this[_0x15af4a(0x205)][_0x15af4a(0x251)](this,_0x214455,_0x20d1bf));}else{function _0x4c02d6(){const _0x535ae3=_0x15af4a;_0x17033c[_0x535ae3(0x216)][_0x535ae3(0x290)][_0x535ae3(0x2e0)](this),_0x20f7fe[_0x535ae3(0x27f)](_0x473627)&&(this['determineAutosaveBypass'](_0x535ae3(0x21a)),this['requestAutosave']());}}}else{if(_0x15af4a(0x264)===_0x15af4a(0x20d)){function _0x582ce1(){const _0x1d25e8=_0x15af4a;return _0x5c988e[_0x1d25e8(0x23b)]()?_0x2c43b1[_0x1d25e8(0x216)][_0x1d25e8(0x1b0)][_0x1d25e8(0x22d)][_0x1d25e8(0x266)]:![];}}else this[_0x15af4a(0x2b3)](this[_0x15af4a(0x2e7)],_0x20d1bf);}},Window_SavefileList[_0x491f2d(0x2fd)]['drawContentsLoaded']=function(_0x5c291d,_0x3d531b){const _0x2c514a=_0x491f2d,_0x2794ec=this['menuStyle']();switch(_0x2794ec){case _0x2c514a(0x27c):this['drawVerticalStyleContents'](_0x5c291d,_0x3d531b);break;case _0x2c514a(0x269):this[_0x2c514a(0x270)](_0x5c291d,_0x3d531b);break;case _0x2c514a(0x256):this['drawLargeStyleContents'](_0x5c291d,_0x3d531b);break;default:this[_0x2c514a(0x21b)](_0x5c291d,_0x3d531b);break;}this[_0x2c514a(0x23c)]();const _0x3451ae=_0x5c291d[_0x2c514a(0x2ea)];this[_0x2c514a(0x2b3)](_0x3451ae,_0x3d531b);},Window_SavefileList[_0x491f2d(0x2fd)][_0x491f2d(0x2b3)]=function(_0x34b89a,_0x3dcdc9){const _0x456068=_0x491f2d,_0x2f9db7=this[_0x456068(0x1dd)]();switch(_0x2f9db7){case'vertical':this[_0x456068(0x2fc)](_0x34b89a,_0x3dcdc9);break;case _0x456068(0x269):this['drawBoxStyleFileData'](_0x34b89a,_0x3dcdc9);break;case _0x456068(0x256):this['drawLargeStyleFileData'](_0x34b89a,_0x3dcdc9);break;default:this[_0x456068(0x231)](_0x34b89a,_0x3dcdc9);break;}},Window_SavefileList[_0x491f2d(0x2fd)][_0x491f2d(0x21b)]=function(_0x1e5c2d,_0x37cfcb){const _0x4b4533=_0x491f2d;VisuMZ['SaveCore'][_0x4b4533(0x1b0)][_0x4b4533(0x192)]['ListContentsJS'][_0x4b4533(0x2e0)](this,_0x1e5c2d,_0x37cfcb);},Window_SavefileList[_0x491f2d(0x2fd)][_0x491f2d(0x311)]=function(_0x42b223,_0xeb4a03){const _0x1c17ce=_0x491f2d;VisuMZ['SaveCore']['Settings']['SaveMenu'][_0x1c17ce(0x313)][_0x1c17ce(0x2e0)](this,_0x42b223,_0xeb4a03);},Window_SavefileList[_0x491f2d(0x2fd)]['drawBoxStyleContents']=function(_0x33b9fd,_0x137a79){const _0x179da6=_0x491f2d;VisuMZ[_0x179da6(0x216)][_0x179da6(0x1b0)][_0x179da6(0x192)][_0x179da6(0x224)][_0x179da6(0x2e0)](this,_0x33b9fd,_0x137a79);},Window_SavefileList[_0x491f2d(0x2fd)][_0x491f2d(0x282)]=function(_0x1d3b08,_0xc8ace6){const _0x4c3811=_0x491f2d;VisuMZ[_0x4c3811(0x216)][_0x4c3811(0x1b0)]['SaveMenu'][_0x4c3811(0x30e)]['call'](this,_0x1d3b08,_0xc8ace6);},Window_SavefileList[_0x491f2d(0x2fd)][_0x491f2d(0x231)]=function(_0x2224bd,_0x52ef9d){const _0x46ec2b=_0x491f2d;VisuMZ[_0x46ec2b(0x216)][_0x46ec2b(0x1b0)][_0x46ec2b(0x192)][_0x46ec2b(0x2b1)][_0x46ec2b(0x2e0)](this,_0x2224bd,_0x52ef9d);},Window_SavefileList['prototype'][_0x491f2d(0x2fc)]=function(_0x18fe1a,_0x25f482){const _0x3e8ad1=_0x491f2d;VisuMZ[_0x3e8ad1(0x216)][_0x3e8ad1(0x1b0)]['SaveMenu'][_0x3e8ad1(0x225)][_0x3e8ad1(0x2e0)](this,_0x18fe1a,_0x25f482);},Window_SavefileList['prototype']['drawBoxStyleFileData']=function(_0x4c3660,_0x268c1f){const _0x3f1333=_0x491f2d;VisuMZ[_0x3f1333(0x216)][_0x3f1333(0x1b0)][_0x3f1333(0x192)]['BoxFileDataJS'][_0x3f1333(0x2e0)](this,_0x4c3660,_0x268c1f);},Window_SavefileList[_0x491f2d(0x2fd)][_0x491f2d(0x246)]=function(_0x2c9f77,_0x2a5c56){const _0x1cc876=_0x491f2d;VisuMZ[_0x1cc876(0x216)][_0x1cc876(0x1b0)][_0x1cc876(0x192)][_0x1cc876(0x326)]['call'](this,_0x2c9f77,_0x2a5c56);};