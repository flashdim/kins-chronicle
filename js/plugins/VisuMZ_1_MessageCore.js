//=============================================================================
// VisuStella MZ - Message Core
// VisuMZ_1_MessageCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_MessageCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.MessageCore = VisuMZ.MessageCore || {};
VisuMZ.MessageCore.version = 1.22;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.22] [MessageCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Message_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Message Core plugin extends and builds upon the message functionality of
 * RPG Maker MZ and allows you, the game dev, to customize the workflow for
 * your game's message system.
 *
 * Features include all (but not limited to) the following:
 *
 * * Control over general message settings.
 * * Auto-Color key words and/or database entries.
 * * Increases the text codes available to perform newer functions/effects.
 * * Ability for you to implement custom Text Code actions.
 * * Ability for you to implement custom Text code string replacements.
 * * Invoke a macro system to speed up the dev process.
 * * Add a Text Speed option to the Options menu.
 * * Add the ever so useful Word Wrap to your message system.
 * * Extend the choice selection process to your liking.
 * * The ability to enable/disable as well as show/hide certain choices.
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
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 * 
 * Dim Background Extension
 * 
 * Before, when using the Dim Background as a part of a Show Text event, its
 * size is only the same as the message window's width itself. This looked
 * really ugly because it had hard edges cutting off while gradients are seen
 * elsewhere. To make it look better, we extended the dimmed background to span
 * the width of the screen instead.
 * 
 * ---
 * 
 * Extended Messages
 * 
 * If you decide to expand the size of the message window to allow for more
 * rows to be displayed, you can type in the data for them by chaining together
 * Show Message events. They will take data from each other and display them in
 * the same message window as long as there are enough rows.
 * 
 * ---
 *
 * Extended Choice Lists
 * 
 * Choice lists can be extended by just chaining one Choice List event after
 * the other in succession along the same indentation. They do not extend if
 * there is any event other than a Choice List option between them on the same
 * indentation level.
 *
 * ---
 *
 * ============================================================================
 * Available Text Codes
 * ============================================================================
 *
 * The following are text codes that you may use with this plugin. Some of
 * these are original text codes provided by RPG Maker MZ, while others are
 * new text codes added through this plugin. You may even add your own text
 * codes through the plugin parameters.
 *
 * === RPG Maker MZ Text Codes ===
 *
 * The following are text codes that come with RPG Maker MZ. These text codes
 * cannot be edited through the Plugin Parameters.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * \V[x]                Replaced by the value of variable 'x'.
 * \N[x]                Replaced by the name of actor 'x'.
 * \P[x]                Replaced by the name of party member 'x'.
 * \C[x]                Draw the subsequent text with window skin color 'x'.
 * \I[x]                Draw icon 'x'.
 *
 * \PX[x]               Moves text x position to 'x'.
 * \PY[x]               Moves text y position to 'y'.
 *
 * \G                   Replaced by the currency unit.
 *
 * \{                   Increase the text font size by one step.
 * \}                   Decrease the text font size by one step.
 * \FS[x]               Changes the text font size to 'x'.
 *
 * \\                   Replaced by the backslash character.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Message Window Only)
 * ------------------   -------------------------------------------------------
 * \$                   Opens the gold window.
 * \.                   Waits a 1/4 second.
 * \|                   Waits a full second.
 * \!                   Waits for button input.
 * \>                   Display remaining text on same line all at once.
 * \<                   Cancel the effect that displays text all at once.
 * \^                   Do not wait for input after displaying text to move on.
 *
 * ---
 *
 * === Message Core Hard-Coded Text Codes ===
 *
 * The following text codes are hard-coded into VisuStella MZ Message Core's
 * code. These text codes cannot be edited through the Plugin Parameters.
 * 
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * <b>                  Makes subsequent text bold.
 * </b>                 Removes bold from subsequent text.
 * <i>                  Makes subsequent text italic.
 * </i>                 Removes italic from subsequent text.
 * 
 * <left>               Makes subsequent text left-aligned.
 * </left>              Removes left-alignment for subsequent text.
 * <center>             Makes subsequent text center-aligned.
 * </center>            Removes center-alignment for subsequent text.
 * <right>              Makes subsequent text right-aligned.
 * </right>             Removes right-alignment for subsequent text.
 *
 * Note1: Use at line-start.
 *
 * <ColorLock>          Text codes can't change text color for subsequent text.
 * </ColorLock>         Removes Color Lock property.
 *
 * <WordWrap>           Enables Word Wrap for this window. *Note2*
 * </WordWrap>          Disables Word Wrap for this window. *Note2*
 * <br>                 Adds a line break. Requires Word Wrap enabled.
 * <line break>         Adds a line break. Requires Word Wrap enabled.
 *
 * Note2: Some windows cannot use Word Wrap such as the Choice Window.
 *
 * \picture<x>          Draws picture x (filename) at current text position.
 * \CenterPicture<x>    Draws picture x (filename) centered at the window.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Message Window Only)
 * ------------------   -------------------------------------------------------
 * \CommonEvent[x]      Runs common event x when text code is reached.
 * \Wait[x]             Makes the message wait x frames before continuing.
 * 
 * <Auto>               Resizes message window dimensions to fit text. *Note3*
 * <Auto Width>         Resizes message window width to fit text. *Note3*
 * <Auto Height>        Resizes message window height to fit text. *Note3*
 * 
 * <Auto Actor: x>      Resizes message window and positions it over actor x
 *                      sprite's head. *Note3*
 * <Auto Party: x>      Resizes message window and positions it over party
 *                      member x sprite's head. *Note3*
 * <Auto Player>        Map-Only. Resizes message window and positions it over
 *                      the player sprite's head. *Note3*
 * <Auto Event: x>      Map-Only. Resizes message window and positions it over
 *                      event x sprite's head. *Note3*
 * <Auto Enemy: x>      Battle-Only. Resizes message window and positions it
 *                      over enemy x sprite's head. *Note3*
 *
 * Note3: Upon using these text codes, the message window's settings will be
 * reset for the upcoming message. These effects do not work with Word Wrap.
 *
 * ---
 *
 * ----------------------------   ---------------------------------------------
 * Text Code                      Effect (Battle Only)
 * ----------------------------   ---------------------------------------------
 * <Current Battle Target>        Replaces text code with the current target of
 *                                an action in battle.
 * <Current Battle User>          Replaces text code with the currently active
 *                                user in battle.
 * <Current Battle Action>        Replaces text code with the current battle
 *                                action's name with an icon in front.
 * <Current Battle Action Name>   Replaces text code with the current battle
 *                                action's name without an icon.
 * 
 * If there is no battle, no target, no user, or no action, then the text code
 * will just be replaced with no text.
 * 
 * These text codes are NOT recommended to be used inside of Help Descriptions.
 * They are best used with "Show Text" event commands.
 *
 * ---
 *
 * -----------------------------  ---------------------------------------------
 * Text Code                      Effect (Choice Window Only)
 * -----------------------------  ---------------------------------------------
 * <Show>                         Choice is always shown.
 * <Show Switch: x>               Choice shown if switch x is ON.
 * <Show Switches: x,x,x>         Choice shown if the x switches are all ON.
 * <Show All Switches: x,x,x>     Choice shown if the x switches are all ON.
 * <Show Any Switches: x,x,x>     Choice shown if any of x switches are ON.
 *
 * <Hide>                         Choice is always hidden.
 * <Hide Switch: x>               Choice hidden if switch x is ON.
 * <Hide Switches: x,x,x>         Choice hidden if the x switches are all ON.
 * <Hide All Switches: x,x,x>     Choice hidden if the x switches are all ON.
 * <Hide Any Switches: x,x,x>     Choice hidden if any of x switches are ON.
 *
 * <Enable>                       Choice is always enabled.
 * <Enable Switch: x>             Choice enabled if switch x is ON.
 * <Enable Switches: x,x,x>       Choice enabled if the x switches are all ON.
 * <Enable All Switches: x,x,x>   Choice enabled if the x switches are all ON.
 * <Enable Any Switches: x,x,x>   Choice enabled if any of x switches are ON.
 *
 * <Disable>                      Choice is always disabled.
 * <Disable Switch: x>            Choice disabled if switch x is ON.
 * <Disable Switches: x,x,x>      Choice disabled if the x switches are all ON.
 * <Disable All Switches: x,x,x>  Choice disabled if the x switches are all ON.
 * <Disable Any Switches: x,x,x>  Choice disabled if any of x switches are ON.
 *
 * ---
 *
 * -----------------  ---------------------------------------------------------
 * Text Code          Effect (Name Window Only)
 * -----------------  ---------------------------------------------------------
 * <Left>             Positions the name box window to the left.
 * <Center>           Positions the name box window to the center.
 * <Right>            Positions the name box window to the right.
 * <Position: x>      Replace 'x' with a number from 0 to 10. This positions
 *                    the name box window on the screen relative to the
 *                    position of the value 'x' represents.
 * \NormalBG          Changes background type of window to normal type.
 * \DimBG             Changes background type of window to dim type.
 * \TransparentBG     Changes background type of window to transparent type.
 *
 * ---
 * 
 * -------------------------------   ------------------------------------------
 * Text Code                         Effect (Message Window Only)
 * -------------------------------   ------------------------------------------
 * 
 * <Position: x, y, width, height>   Forces the message window to exact listed
 *                                   coordinates and dimensions. Replace each
 *                                   of the arguments with numbers. *Note*
 * 
 * <Coordinates: x, y>               Forces the message window to the exact
 *                                   listed coordinates. Replace each of the
 *                                   arguments with numbers. *Note*
 * 
 * <Dimensions: width, height>       Forces the message window size to the
 *                                   exact listed dimensions. Replace each of
 *                                   the arguments with numbers. *Note*
 * 
 * *NOTE* These text codes do not work with Word Wrap.
 * 
 * ---
 *
 * === Message Core Customizable Text Codes ===
 *
 * The following text codes can be altered through the Message Core's various
 * Plugin Parameters to adjust replacements and actions.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * \Class[x]            Draws class x's icon (if have) and name.
 * \ClassName[x]        Draws class x's name only.
 *
 * \Skill[x]            Draws skill x's icon (if have) and name.
 * \SkillName[x]        Draws skill x's name only.
 *
 * \Item[x]             Draws item x's icon (if have) and name.
 * \ItemName[x]         Draws item x's name only.
 * \ItemQuantity[x]     Inserts the number of item x's owned by the party.
 *
 * \Weapon[x]           Draws weapon x's icon (if have) and name.
 * \WeaponName[x]       Draws weapon x's name only.
 * \WeaponQuantity[x]   Inserts the number of weapon x's owned by the party.
 *
 * \Armor[x]            Draws armor x's icon (if have) and name.
 * \ArmorName[x]        Draws armor x's name only.
 * \ArmorQuantity[x]    Inserts the number of armor x's owned by the party.
 *
 * \LastGainObj         Draws the icon + name of the last party-gained object.
 * \LastGainObjName     Draws the name of the last party-gained object.
 * \LastGainObjQuantity Inserts the quantity of the last party-gained object.
 *
 * \State[x]            Draws state x's icon (if have) and name.
 * \StateName[x]        Draws state x's name only.
 *
 * \Enemy[x]            Draws enemy x's icon (if have) and name.
 * \EnemyName[x]        Draws enemy x's name only.
 *
 * \Troop[x]            Draws troop x's icon (if have) and name.
 * \TroopName[x]        Draws troop x's name only.
 *
 * \TroopMember[x]      Draws troop member x's icon (if have) and name. *Note1*
 * \TroopNameMember[x]  Draws troop member x's name only. *Note1*
 * 
 * Note1: Only works in battle.
 *
 * \NormalBG            Changes background type of window to normal type.
 * \DimBG               Changes background type of window to dim type.
 * \TransparentBG       Changes background type of window to transparent type.
 *
 * \FontChange<x>       Changes font face to x font name.
 * \ResetFont           Resets font settings.
 *
 * \ResetColor          Resets color settings.
 * \HexColor<x>         Changes text color to x hex color (ie. #123abc).
 * \OutlineColor[x]     Changes outline color to text color x.
 * \OutlineHexColor<x>  Changes outline color to x hex color (ie. #123abc).
 * \OutlineWidth[x]     Changes outline width to x thickness.
 * 
 * \WindowMoveTo<?>     Moves window to exact coordinates. *Note2*
 * \WindowMoveBy<?>     Moves window by relative values. *Note2*
 * \WindowReset         Resets window position to original position.
 *
 * Note2: Replace '?' with the following format:
 *   targetX, targetY, targetWidth, targetHeight, duration, easingType
 *   Only targetX and targetY are required arguments. These will only alter the
 *   window dimensions when the text has arrived at that point. They will not
 *   alter the window preemptively. This is not used as a window positioner.
 *   Use the <Position: x, y, width, height> text code for that.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Message Window Only)
 * ------------------   -------------------------------------------------------
 * \ActorFace[x]        Inserts actor x's face into the Message Window.
 * \PartyFace[x]        Inserts party member x's face into the Message Window.
 * \ChangeFace<x,y>     Changes message face to x filename, y index.
 * \FaceIndex[x]        Changes message face index to x.
 *
 * \TextDelay[x]        Sets delay in frames between characters to x frames.
 * 
 * ---
 * 
 * As these text codes can be added, removed, and/or altered, their functions
 * may or may not be the same depending on how you've altered them. VisuStella
 * is not responsible for any errors caused by changes made to pre-made text
 * codes nor any new text codes they did not make.
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
 * === Message Plugin Commands ===
 * 
 * ---
 *
 * Message: Properties
 *   Change the various properties of the Message Window.
 *
 *   Rows:
 *   - Change the number of Message Window rows.
 *   - Leave at 0 to keep it unchanged.
 *
 *   Width: 
 *   - Change the Message Window width in pixels.
 *   - Leave at 0 to keep it unchanged.
 *
 *   Center:
 *   - Center the window X after changing its width?
 *
 *   Word Wrap:
 *   - Enable or disable Word Wrap for the Message Window?
 *
 * ---
 * 
 * === Choice Plugin Commands ===
 * 
 * ---
 *
 * Choice: Properties
 *   Change the properties found in the Show Choices event command.
 *
 *   Line Height:
 *   - Change the line height for the show choices.
 *   - Leave at 0 to keep this unchanged.
 *
 *   Max Rows:
 *   - Maximum number of choice rows to be displayed.
 *   - Leave at 0 to keep this unchanged.
 *
 *   Max Columns:
 *   - Maximum number of choice columns to be displayed.
 *   - Leave at 0 to keep this unchanged.
 *
 *   Text Alignment:
 *   - Text alignment for Show Choice window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General settings involving the message system. These settings range from
 * adjust how the Message Window looks to more intricate settings like how
 * some of the default text codes work.
 *
 * ---
 *
 * Message Window
 *
 *   Default Rows:
 *   - Default number of rows to display for the Message Window.
 *
 *   Default Width:
 *   - Default Message Window width in pixels.
 *
 *   Fast Forward Key:
 *   - This is the key used for fast forwarding messages.
 *   - WARNING: If this key is the same as the dash button, this will clear out
 *     any held down inputs upon triggering an event  to prevent players from
 *     skipping potentially useful information stored in messages. If you do
 *     not want the input to be cleared, use a different key.
 *
 *   Text Delay:
 *   - How many frames to wait between characters drawn?
 *   - Use 0 for instant.
 * 
 *   Default Outline Width:
 *   - Changes the default outline width to this many pixels thick.
 *
 * ---
 *
 * Name Box Window
 *
 *   Default Color:
 *   - Default color for the Name Box Window's text.
 *
 *   Offset X:
 *   - How much to offset the name box window X by
 *     (as long as it doesn't go offscreen).
 *
 *   Offset Y:
 *   - How much to offset the name box window Y by
 *     (as long as it doesn't go offscreen).
 *
 * ---
 *
 * Choice List Window
 *
 *   Line Height:
 *   - What is the default line height for Show Choices?
 *
 *   Max Rows:
 *   - Maximum number of rows to visibly display?
 *
 *   Max Columns:
 *   - Maximum number of columns to visibly display?
 *
 *   Text Alignment:
 *   - Default alignment for Show Choice window.
 *
 * ---
 *
 * Default Text Codes
 *
 *   Relative \PX \PY:
 *   - Make \PX[x] and \PY[x] adjust relative starting position than
 *     exact coordinates.
 *
 *   \{ Maximum:
 *   - Determine the maximum size that \{ can reach.
 *
 *   \} Minimum:
 *   - Determine the minimum size that \} can reach.
 *
 *   \{ Change \}
 *   - How much does \{ and \} change font size by?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Auto-Color Settings
 * ============================================================================
 *
 * For certain windows such as the Message Window, Help Window, and Choice
 * Window, Auto-Color is enabled to automatically highlight and color certain
 * database entries, keywords, and just about anything you, the game dev, wants
 * to be automatically colored. This is done to avoid typing out \C[6]Jack\C[0]
 * every time Jack's name is written out as it will be automatically colored in
 * those specific windows.
 *
 * The Plugin Parameters will give you full reign over which database entries
 * and keywords you want to be automatically colored as long as they follow a
 * few rules:
 * 
 * -----------------
 * Auto-Color Rules:
 * -----------------
 *
 * 1. Database names and keywords are case sensitive.
 *    This means if "Potion" is a marked keyword, typing out "potion" will not
 *    prompt the auto-color to highlight "potion". You must add the lowercase
 *    version of the word into the keyword list if you want it to count.
 *
 * 2. Database names and keywords are exact size (for Roman languages)
 *    This means if "Potion" is a marked keyword, typing out "potions" will not
 *    prompt the auto-color to highlight "potions". You must type out all of
 *    the variations of the words you want affected into the keyword list to
 *    prompt the auto-color highlight.
 * 
 *    This does not apply to Japanese, Korean, or Chinese languages.
 *
 * 3. Possessive cases and other language symbols aren't counted.
 *    Symbols such as periods, commas, quotes, parentheses, and similar symbols
 *    do no count towards Rule 2. This means if "Potion" is a marked keyword,
 *    the typing out "(Potion)" will still highlight the "Potion" part of the
 *    word according to the auto-color.
 * 
 * 4. Names with special characters like !, ?, [, ], etc. will be ignored.
 *    These cause conflicts with how auto-colors are detected.
 *
 * ---
 *
 * Database Highlighting
 *
 *   Actors:
 *   Classes:
 *   Skills:
 *   Items:
 *   Weapons:
 *   Armors:
 *   Enemies:
 *   States:
 *   - Any usage of a the selected database entry's name is auto-colored with
 *     the text code number.
 *   - Use 0 to not auto-color.
 *
 * ---
 *
 * Word Highlighting
 *
 *   \C[x]: Color
 *   - These are lists of all the words that will be automatically colored with
 *     the x text color.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Code Actions
 * ============================================================================
 *
 * Text codes are used for one of two things: performing actions or replacing
 * themselves with text data. This Plugin Parameter will focus on the aspect of
 * performing actions. These actions can be done through each JavaScript or by
 * a common event (if it is used in the Message Window). Adequate knowledge of
 * both is recommended before attempting to modify and/or add new Text Code
 * Actions to the Plugin Parameters.
 *
 * Each of the Text Code Actions are formatted in such a way:
 *
 * ---
 *
 * Text Code Action
 *
 *   Match:
 *   - This is what needs to be matched in order for this text code to work.
 *   - This is the primary text marker after the \ in a text code.
 *   - In \N[x], this would be the 'N'.
 *
 *   Type:
 *   - The type of parameter to obtain (none, number, or string).
 *   - This is the way the text code determines the condition type.
 *   - In \N[x], this would be the '[x]'.
 *
 *   Common Event:
 *   - Select a common event to run when this text code is used in a message.
 *
 *   JS: Action:
 *   - JavaScript code used to perform an action when this text code appears.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Code Replacements
 * ============================================================================
 *
 * Text codes are used for one of two things: performing actions or replacing
 * themselves with text data. This Plugin Parameter will focus on the aspect of
 * replacing the text codes with text data. Text data can be replaced with
 * an exact exchange of text or dynamically through JavaScript. Adding a new
 * Text Code Replacement is done through the Plugin Parameters.
 *
 * Each of the Text Code Replacements are formatted in such a way:
 *
 * ---
 *
 * Text Code Replacement
 *
 *   Match:
 *   - This is what needs to be matched in order for this text code to work.
 *   - This is the primary text marker after the \ in a text code.
 *   - In \N[x], this would be the 'N'.
 *
 *   Type:
 *   - The type of parameter to obtain (none, number, or string).
 *   - This is the way the text code determines the condition type.
 *   - In \N[x], this would be the '[x]'.
 *
 *   STR: Text:
 *   - The text that will appear if this match appears.
 *     If this has a value, ignore the JS: Text version.
 *
 *   JS: Text:
 *   - JavaScript code used to determine the text that will appear if this
 *     match appears.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Macros
 * ============================================================================
 *
 * Text macros are used in similar fashion to text codes replacements to
 * replace themselves with text data. The primary difference is that macros are
 * made in a different format with no conditional argument modifiers (ie the
 * [x] that follows a text code).
 *
 * To use a text macro, type in the matching keyword between two [brackets] and
 * it will be replaced by the string data or run the JavaScript code found in
 * the Plugin Parameter settings.
 *
 * For example, if you have the text macro "Leader", made to return the party
 * leader's name, you can type in [Leader] in the Message Window and it will be
 * replaced with the party leader's name. The output can also output text codes
 * into the resulting text.
 * 
 * This does NOT work with \MacroName as it did with Yanfly Engine Plugins.
 * Use the method stated before with the brackets to [MacroName] instead.
 *
 * Each of the Text Macros are formatted in such a way:
 *
 * ---
 *
 * Text Macro
 *
 *   Match:
 *   - This is what needs to be matched in order for this macro to work.
 *   - In [Leader], this would be the 'Leader' text.
 *
 *   STR: Text:
 *   - The replacement text that will appear from the macro.
 *   - If this has a value, ignore the JS: Text version.
 *
 *   JS: Text:
 *   - JavaScript code used to determine the text that will appear if this
 *     macro appears.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Speed Option Settings
 * ============================================================================
 *
 * Modern RPG's on the market have the option to adjust the message speed rate
 * for players. These Plugin Parameters allow you to add that option to the
 * Options Menu as well.
 *
 * ---
 *
 * Text Speed Option Settings
 *
 *   Add Option?:
 *   - Add the 'Text Speed' option to the Options menu?
 *
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 *
 *   Option Name:
 *   - Command name of the option.
 *
 *   Default Value:
 *   - 1 - 10, slowest to fastest.
 *   - 11 is instant value.
 *
 *   Instant Speed:
 *   - Text to show "instant" text.
 *
 * ---
 * 
 * ============================================================================
 * Plugin Parameters: Word Wrap Settings
 * ============================================================================
 *
 * Word wrap is a property that will cause any overflowing text to wrap around
 * and move into the next line. This property can only be enabled inside text
 * that accept text codes, such as the Message Window and Help Window. However,
 * word wrap is disabled for the Choice Window due to the nature of the Choice
 * Window's base properties.
 *
 * Word wrap can be enabled or disabled in three ways. One is by using the text
 * code <WordWrap> to enable it or </WordWrap> to disable it. The second method
 * is by enabling it with the Plugin Command: 'Message: Properties'. The third
 * method is by enabling it by default with the Plugin Parameters.
 *
 * ---
 *
 * Enable Word Wrap
 *
 *   Message Window:
 *   - Automatically enable Word Wrap for this window?
 *
 *   Help Window:
 *   - Automatically enable Word Wrap for this window?
 *
 * ---
 *
 * Rules
 *
 *   Link Break -> Space:
 *   - Convert manually placed (non tagged) line breaks with spaces?
 *   - Line breaks must be inserted using the <br> text code.
 *
 *   Tight Wrap:
 *   - If a face graphic is present in a message, word wrap will be tighter.
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
 * Version 1.22: July 2, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Text Codes added by Irina and sponsored by AndyL:
 * *** <Current Battle Target>
 * *** <Current Battle User>
 * **** Replaces the text code with the current target or current user's name
 *      in-battle. Otherwise, returns nothing.
 * **** Not recommended to be used inside of Help Descriptions. They are best
 *      used with "Show Text" event commands.
 * *** <Current Battle Action>
 * *** <Current Battle Action Name>
 * **** Replaces the text code with the current battle action's name with the
 *      icon or without it respectively. Otherwise, returns nothing.
 * **** Not recommended to be used inside of Help Descriptions. They are best
 *      used with "Show Text" event commands.
 * 
 * Version 1.21: June 4, 2021
 * * Documentation Update!
 * ** Added extra note to the new <Position: x, y, width, height> text codes
 *    that they do not work with Word Wrap.
 * * Feature Update!
 * ** Added fail safe for preventing Common Events that don't exist from being
 *    ran at all by the Message Window. Added by Arisu.
 * 
 * Version 1.20: May 28, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added additional clarity for \WindowMoveTo<?> and \WindowMoveBy<?> and
 *    \WindowReset text codes with "Note 2".
 * *** Replace '?' with the following format: targetX, targetY, targetWidth,
 *     targetHeight, duration, easingType. Only targetX and targetY are
 *     required arguments. These will only alter the window dimensions when the
 *     text has arrived at that point. They will not alter the window
 *     preemptively. This is not used as a window positioner. Use the
 *     <Position: x, y, width, height> text code for that.
 * * New Features!
 * ** New hard-coded text codes added for Message Window Only. Added by Irina.
 * *** <Position: x, y, width, height>
 * *** <Coordinates: x, y>
 * *** <Dimensions: width, height>
 * 
 * Version 1.19: May 14, 2021
 * * Feature Updates!
 * ** <br> line breaks can now be used by Show Choices. Make sure that there is
 *    enough room to contain the text through Plugin Commands. Update by Irina.
 * 
 * Version 1.18: April 30, 2021
 * * Bug Fixes!
 * ** Moving windows with 0 duration via text code should now instantly move
 *    the windows to the desired location with no delay. Fix made by Olivia.
 * 
 * Version 1.17: April 9, 2021
 * * Feature Update!
 * ** <Auto> text codes for message windows will round up calculations for the
 *    message width to the nearest even number for better calculations.
 * 
 * Version 1.16: April 2, 2021
 * * Bug Fixes!
 * ** \CommonEvent[x] text code will no longer run upon message window size
 *    calculation. Fix made by Arisu.
 * * Documentation Update!
 * ** Added further clarification for "Text Macros" section.
 * *** This does NOT work with \MacroName as it did with Yanfly Engine Plugins.
 *     Use the method stated before with the brackets to [MacroName] instead.
 * 
 * Version 1.15: March 5, 2021
 * * Bug Fixes!
 * ** Hidden choices by switches will no longer count towards the maximum line
 *    count for Show Choice options. Fix made by Irina.
 * 
 * Version 1.14: February 12, 2021
 * * Bug Fixes!
 * ** Auto positioned messages in battle will no longer cover the battler in
 *    question. Fix made by Irina.
 * 
 * Version 1.13: February 5, 2021
 * * Bug Fixes!
 * ** Choice List Window with a dimmed background should now have a more
 *    consistent sized dim sprite. Fix made by Irina.
 * 
 * Version 1.12: January 22, 2021
 * * Feature Update!
 * ** Name Box Window Default Color is now disabled by default to 0 because
 *    users do not understand why their names are showing up yellow and did not
 *    bother reading the documentation. If users want this feature turned on,
 *    they will have to do it manually from now on. Update made by Irina.
 * 
 * Version 1.11: January 15, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.10: January 8, 2021
 * * Bug Fixes!
 * ** <Auto Actor: x> and <Auto Party: x> text codes should now work properly.
 *    Fix made by Irina.
 * * Feature Update!
 * ** Auto Color Plugin Parameters now have their default settings set to 0.
 *    This is due to an influx of "bug reports" from users who do not
 *    understand how this feature works, and the VisuStella team has decided it
 *    is better for the feature to default to an inactive state until users
 *    decide to search and utilize it themselves. Update made by Irina.
 * 
 * Version 1.09: January 1, 2021
 * * Feature Update!
 * ** Auto-color no longer applies to database names that are only numbers.
 *    Auto-color entries that are only numbers will also be ignored. This is to
 *    prevent breaking the text code parsing. Update made by Yanfly.
 * 
 * Version 1.08: November 15, 2020
 * * Documentation Update!
 * ** Some text codes left for the Name Box Window have been accidentally left
 *    out. These text codes allow for the positioning of the Name Box Window.
 *    Also, added to this section are the \NormalBG, \DimBG, and \TransparentBG
 *    text codes since people have been asking for how to change the name box
 *    window's background, but have skimmed over those text codes in different
 *    sections of the help file.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.07: November 8, 2020
 * * Bug Fixes!
 * ** When using auto size functions, the message pause symbol will no longer
 *    appear semi-transparent the whole time. Fix made by Irina.
 * 
 * Version 1.06: October 25, 2020
 * * Documentation Update!
 * ** Added a warning message to the Fast Forward Key plugin parameter:
 * *** WARNING: If this key is the same as the dash button, this will clear out
 *     any held down inputs upon triggering an event  to prevent players from
 *     skipping potentially useful information stored in messages. If you do
 *     not want the input to be cleared, use a different key.
 * ** Updated help file for new features.
 * * Feature Update!
 * ** The default Fast Forward Key setting has now been changed from "Shift" to
 *    "Page Down". Change made by Yanfly
 * * New Feature!
 * ** New Plugin Parameter added by Irina.
 * *** Plugin Parameters > General > Default Outline Width
 * **** Changes the default outline width to this many pixels thick.
 * 
 * Version 1.06: September 27, 2020
 * * Bug Fixes!
 * ** Setting an actor's autocolor will now disable it from \N[x] and \P[x]
 *    text codes. Fix made by Irina.
 * 
 * Version 1.05: September 20, 2020
 * * Bug Fixes!
 * ** Auto Position text codes not place positions properly if the screen width
 *    and height differ from the box width and box height. Fix made by Irina.
 * 
 * Version 1.04: September 13, 2020
 * * Bug Fixes!
 * ** Word wrap no longer affects specific battle messages. Fix made by Irina.
 * ** Word wrap now updates properly after using the 'Message: Properties'
 *    Plugin Command. Fix made by Arisu.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** Autoplacement of the name box window now takes its offset Y setting into
 *    account before sending it to the bottom of the message window. Fix made
 *    by Yanfly.
 * ** Added automatic feature setting to turn off word wrap when using the
 *    auto-size and auto-position text codes. This is because the auto-size and
 *    auto-position effects don't work properly with Word Wrap based on how
 *    they both clash when adjusting the window settings. Fix made by Irina.
 * ** New message pages after auto-sizing no longer put out empty messages.
 *    Fix made by Irina and Shiro.
 * * Documentation Update!
 * ** Extended the note for auto-size and auto-position text codes to include
 *    that they do not work with Word Wrap. Added by Irina.
 * 
 * Version 1.02: August 30, 2020
 * * New Features!
 * ** Added new hard-coded text codes for auto-sizing and auto-positioning:
 * *** <Auto>, <Auto Width>, <Auto Height>
 * *** <Auto Actor: x>, <Auto Party: x>, <Auto Enemy: x>
 * *** <Auto Player>, <Auto Actor: x>, <Auto Party: x>, <Auto Event: x>
 * **** New features added by Irina.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** </Wordwrap> now works.
 * ** \ActorFace[x] text code now fixed.
 * *** Users updating from version 1.00 will need to fix this problem by either
 *     removing the plugin from the Plugin Manager list and reinstalling it, or
 *     going to Plugin Parameters > Text Code Replacements > ActorFace >
 *     JS: Text > and changing "$gameActors.actor(1)" to
 *     "$gameActors.actor(actorId)"
 * ** Actors with empty names would cause auto hightlight problems. Fixed!
 * ** Auto-colors now ignore names with special characters like !, ?, [, ], and
 *    so on.
 * ** Line break spacing fixed.
 * * New Features!
 * ** Wordwrap now works with <left>, <center> and <right> alignment tags.
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
 * @command MessageWindowProperties
 * @text Message: Properties
 * @desc Change the various properties of the Message Window.
 *
 * @arg Rows:num
 * @text Rows
 * @type number
 * @min 0
 * @desc Change the number of Message Window rows.
 * Leave at 0 to keep it unchanged.
 * @default 4
 *
 * @arg Width:num
 * @text Width
 * @type number
 * @min 0
 * @desc Change the Message Window width in pixels.
 * Leave at 0 to keep it unchanged.
 * @default 816
 *
 * @arg Center:eval
 * @text Center Window X?
 * @parent Width
 * @type boolean
 * @on Center
 * @off Don't
 * @desc Center the window X after changing its width?
 * @default true
 *
 * @arg WordWrap:str
 * @text Word Wrap
 * @type select
 * @option No Change
 * @value No Change
 * @option Enable
 * @value true
 * @option Disable
 * @value false
 * @desc Enable or disable Word Wrap for the Message Window?
 * @default No Change
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChoiceWindowProperties
 * @text Choices: Properties
 * @desc Change the properties found in the Show Choices event command.
 *
 * @arg LineHeight:num
 * @text Line Height
 * @type number
 * @min 0
 * @desc Change the line height for the show choices.
 * Leave at 0 to keep this unchanged.
 * @default 36
 *
 * @arg MaxRows:num
 * @text Max Rows
 * @type number
 * @min 0
 * @desc Maximum number of choice rows to be displayed.
 * Leave at 0 to keep this unchanged.
 * @default 8
 *
 * @arg MaxCols:num
 * @text Max Columns
 * @type number
 * @min 0
 * @desc Maximum number of choice columns to be displayed.
 * Leave at 0 to keep this unchanged.
 * @default 1
 *
 * @arg TextAlign:str
 * @text Text Alignment
 * @type select
 * @option Default
 * @value default
 * @option Left
 * @value left
 * @option Center
 * @value center
 * @option Right
 * @value right
 * @desc Text alignment for Show Choice window.
 * @default default
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
 * @param MessageCore
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
 * @desc General settings involving the message system.
 * @default {"MessageWindow":"","MessageRows:num":"4","MessageWidth:num":"816","FastForwardKey:str":"pagedown","MessageTextDelay:num":"1","StretchDimmedBg:eval":"true","DefaultOutlineWidth:num":"3","NameBoxWindow":"","NameBoxWindowDefaultColor:num":"0","NameBoxWindowOffsetX:num":"0","NameBoxWindowOffsetY:num":"0","ChoiceListWindow":"","ChoiceWindowLineHeight:num":"36","ChoiceWindowMaxRows:num":"8","ChoiceWindowMaxCols:num":"1","ChoiceWindowTextAlign:str":"default","DefaultTextCodes":"","RelativePXPY:eval":"true","FontBiggerCap:eval":"108","FontSmallerCap:eval":"12","FontChangeValue:eval":"12"}
 *
 * @param AutoColor:struct
 * @text Auto-Color Settings
 * @type struct<AutoColor>
 * @desc Automatically color certain keywords a specific way.
 * @default {"DatabaseHighlighting":"","Actors:str":"0","Classes:str":"0","Skills:str":"0","Items:str":"0","Weapons:str":"0","Armors:str":"0","Enemies:str":"0","States:str":"0","WordHighlighting":"","TextColor1:arraystr":"[]","TextColor2:arraystr":"[]","TextColor3:arraystr":"[]","TextColor4:arraystr":"[]","TextColor5:arraystr":"[]","TextColor6:arraystr":"[]","TextColor7:arraystr":"[]","TextColor8:arraystr":"[]","TextColor9:arraystr":"[]","TextColor10:arraystr":"[]","TextColor11:arraystr":"[]","TextColor12:arraystr":"[]","TextColor13:arraystr":"[]","TextColor14:arraystr":"[]","TextColor15:arraystr":"[]","TextColor16:arraystr":"[]","TextColor17:arraystr":"[]","TextColor18:arraystr":"[]","TextColor19:arraystr":"[]","TextColor20:arraystr":"[]","TextColor21:arraystr":"[]","TextColor22:arraystr":"[]","TextColor23:arraystr":"[]","TextColor24:arraystr":"[]","TextColor25:arraystr":"[]","TextColor26:arraystr":"[]","TextColor27:arraystr":"[]","TextColor28:arraystr":"[]","TextColor29:arraystr":"[]","TextColor30:arraystr":"[]","TextColor31:arraystr":"[]"}
 *
 * @param TextCodeActions:arraystruct
 * @text Text Code Actions
 * @type struct<TextCodeAction>[]
 * @desc Text codes that perform actions.
 * @default ["{\"Match:str\":\"ChangeFace\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst data = this.obtainEscapeString(textState).split(',');\\\\nif (textState.drawing) {\\\\n    const filename = data[0].trim();\\\\n    const index = parseInt(data[1] || '0');\\\\n    $gameMessage.setFaceImage(filename, index);\\\\n    this.loadMessageFace();\\\\n    const rtl = $gameMessage.isRTL();\\\\n    const width = ImageManager.faceWidth;\\\\n    const height = this.innerHeight;\\\\n    const x = rtl ? this.innerWidth - width - 4 : 4;\\\\n    this.contents.clearRect(x, 0, width, height);\\\\n    this._faceBitmap.addLoadListener(this.drawMessageFace.bind(this));\\\\n}\\\"\"}","{\"Match:str\":\"FaceIndex\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst index = this.obtainEscapeParam(textState);\\\\nif (textState.drawing) {\\\\n    const filename = $gameMessage.faceName();\\\\n    $gameMessage.setFaceImage(filename, index);\\\\n    this.loadMessageFace();\\\\n    const rtl = $gameMessage.isRTL();\\\\n    const width = ImageManager.faceWidth;\\\\n    const height = this.innerHeight;\\\\n    const x = rtl ? this.innerWidth - width - 4 : 4;\\\\n    this.contents.clearRect(x, 0, width, height);\\\\n    this._faceBitmap.addLoadListener(this.drawMessageFace.bind(this));\\\\n}\\\"\"}","{\"Match:str\":\"TextDelay\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst delay = this.obtainEscapeParam(textState);\\\\nif (textState.drawing && this.constructor === Window_Message) {\\\\n    this.setTextDelay(delay);\\\\n}\\\"\"}","{\"Match:str\":\"NormalBG\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    this.setBackgroundType(0);\\\\n}\\\"\"}","{\"Match:str\":\"DimBG\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    this.setBackgroundType(1);\\\\n}\\\"\"}","{\"Match:str\":\"TransparentBG\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    this.setBackgroundType(2);\\\\n}\\\"\"}","{\"Match:str\":\"FontChange\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst fontName = this.obtainEscapeString(textState);\\\\nthis.contents.fontFace = fontName;\\\"\"}","{\"Match:str\":\"ResetFont\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"this.resetFontSettings();\\\"\"}","{\"Match:str\":\"ResetColor\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"this.resetTextColor();\\\"\"}","{\"Match:str\":\"HexColor\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst hexColor = this.obtainEscapeString(textState);\\\\nif (!this.isColorLocked() && textState.drawing) {\\\\n    this.changeTextColor(hexColor);\\\\n}\\\"\"}","{\"Match:str\":\"OutlineColor\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst colorIndex = this.obtainEscapeParam(textState);\\\\nif (!this.isColorLocked() && textState.drawing) {\\\\n    this.changeOutlineColor(ColorManager.textColor(colorIndex));\\\\n}\\\"\"}","{\"Match:str\":\"OutlineHexColor\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst hexColor = this.obtainEscapeString(textState);\\\\nif (!this.isColorLocked() && textState.drawing) {\\\\n    this.changeOutlineColor(hexColor);\\\\n}\\\"\"}","{\"Match:str\":\"OutlineWidth\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst width = this.obtainEscapeParam(textState);\\\\nif (textState.drawing) {\\\\n    this.contents.outlineWidth = width;\\\\n}\\\"\"}","{\"Match:str\":\"WindowMoveTo\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst data = this.obtainEscapeString(textState).split(',');\\\\nif (textState.drawing) {\\\\n    const x = !!data[0] ? Number(data[0].trim()) : this.x;\\\\n    const y = !!data[1] ? Number(data[1].trim()) : this.y;\\\\n    const width = !!data[2] ? Number(data[2].trim()) : this.width;\\\\n    const height = !!data[3] ? Number(data[3].trim()) : this.height;\\\\n    const duration = !!data[4] ? Number(data[4].trim()) : 20;\\\\n    const easingType = !!data[5] ? data[5].trim() : 0;\\\\n    this.moveTo(x, y, width, height, duration, easingType);\\\\n}\\\"\"}","{\"Match:str\":\"WindowMoveBy\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst data = this.obtainEscapeString(textState).split(',');\\\\nif (textState.drawing) {\\\\n    const x = !!data[0] ? Number(data[0].trim()) : 0;\\\\n    const y = !!data[1] ? Number(data[1].trim()) : 0;\\\\n    const width = !!data[2] ? Number(data[2].trim()) : 0;\\\\n    const height = !!data[3] ? Number(data[3].trim()) : 0;\\\\n    const duration = !!data[4] ? Number(data[4].trim()) : 20;\\\\n    const easingType = !!data[5] ? data[5].trim() : 0;\\\\n    this.moveBy(x, y, width, height, duration, easingType);\\\\n}\\\"\"}","{\"Match:str\":\"WindowReset\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    const frames = 20;\\\\n    const easingType = 0;\\\\n    this.resetRect(frames, easingType);\\\\n}\\\"\"}"]
 *
 * @param TextCodeReplace:arraystruct
 * @text Text Code Replacements
 * @type struct<TextCodeReplace>[]
 * @desc Text codes that replace themselves with text.
 * @default ["{\"Match:str\":\"ActorFace\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const actorId = parseInt(arguments[1]);\\\\nconst actor = $gameActors.actor(actorId);\\\\nif (this.constructor === Window_Message && actor) {\\\\n    $gameMessage.setFaceImage(\\\\n        actor.faceName(),\\\\n        actor.faceIndex()\\\\n    );\\\\n}\\\\nreturn '';\\\"\"}","{\"Match:str\":\"PartyFace\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const index = parseInt(arguments[1]) - 1;\\\\nconst actor = $gameParty.members()[index];\\\\nif (this.constructor === Window_Message && actor) {\\\\n    $gameMessage.setFaceImage(\\\\n        actor.faceName(),\\\\n        actor.faceIndex()\\\\n    );\\\\n}\\\\nreturn '';\\\"\"}","{\"Match:str\":\"Class\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataClasses;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ClassName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataClasses;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"Skill\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataSkills;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"SkillName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataSkills;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"Item\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ItemName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ItemQuantity\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nreturn $gameParty.numItems(database[id]);\\\"\"}","{\"Match:str\":\"Weapon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"WeaponName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"WeaponQuantity\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nreturn $gameParty.numItems(database[id]);\\\"\"}","{\"Match:str\":\"LastGainObj\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const icon = true;\\\\nreturn this.lastGainedObjectName(icon);\\\"\"}","{\"Match:str\":\"LastGainObjName\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const icon = false;\\\\nreturn this.lastGainedObjectName(icon);\\\"\"}","{\"Match:str\":\"LastGainObjQuantity\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"return this.lastGainedObjectQuantity();\\\"\"}","{\"Match:str\":\"Armor\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ArmorName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ArmorQuantity\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nreturn $gameParty.numItems(database[id]);\\\"\"}","{\"Match:str\":\"State\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataStates;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"StateName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataStates;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"Enemy\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataEnemies;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"EnemyName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataEnemies;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"Troop\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataTroops;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"TroopName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataTroops;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"TroopMember\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"if (!$gameParty.inBattle()) return \\\\\\\"\\\\\\\";\\\\nconst index = (parseInt(arguments[1]) - 1) || 0;\\\\nconst member = $gameTroop.members()[index];\\\\nconst database = $dataEnemies;\\\\nconst id = member ? member.enemyId() : 0;\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"TroopMemberName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"if (!$gameParty.inBattle()) return \\\\\\\"\\\\\\\";\\\\nconst index = (parseInt(arguments[1]) - 1) || 0;\\\\nconst member = $gameTroop.members()[index];\\\\nconst database = $dataEnemies;\\\\nconst id = member ? member.enemyId() : 0;\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}"]
 *
 * @param TextMacros:arraystruct
 * @text Text Macros
 * @type struct<TextMacro>[]
 * @desc Macros that are used to quickly write batches of text.
 * @default ["{\"Match:str\":\"Example Macro\",\"TextStr:str\":\"This is the text that will be displayed when you type [Example Macro].\",\"TextJS:func\":\"\\\"return 'Text';\\\"\"}","{\"Match:str\":\"Leader\",\"TextStr:str\":\"\\\\P[1]\",\"TextJS:func\":\"\\\"return 'Text';\\\"\"}"]
 *
 * @param TextSpeed:struct
 * @text Text Speed Option Settings
 * @type struct<TextSpeed>
 * @desc Text Speed Options Menu settings.
 * @default {"AddOption:eval":"true","AdjustRect:eval":"true","Name:str":"Text Speed","Default:num":"10","Instant:str":"Instant"}
 *
 * @param WordWrap:struct
 * @text Word Wrap Settings
 * @type struct<WordWrap>
 * @desc Settings involving Word Wrap.
 * @default {"EnableWordWrap":"","MessageWindow:eval":"false","HelpWindow:eval":"false","Rules":"","LineBreakSpace:eval":"true","TightWrap:eval":"false"}
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
 * @param MessageWindow
 * @text Message Window
 *
 * @param MessageRows:num
 * @text Default Rows
 * @parent MessageWindow
 * @type num
 * @min 1
 * @desc Default number of rows to display for the Message Window.
 * @default 4
 *
 * @param MessageWidth:num
 * @text Default Width
 * @parent MessageWindow
 * @type num
 * @min 1
 * @desc Default Message Window width in pixels.
 * @default 816
 *
 * @param FastForwardKey:str
 * @text Fast Forward Key
 * @parent MessageWindow
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc This is the key used for fast forwarding messages.
 * @default pagedown
 *
 * @param MessageTextDelay:num
 * @text Text Delay
 * @parent MessageWindow
 * @type number
 * @min 0
 * @desc How many frames to wait between characters drawn?
 * Use 0 for instant.
 * @default 1
 *
 * @param StretchDimmedBg:eval
 * @text Stretch Dimmed BG
 * @parent MessageWindow
 * @type boolean
 * @on Stretch
 * @off Don't
 * @desc Stretch dimmed window background to fit the whole screen.
 * @default true
 *
 * @param DefaultOutlineWidth:num
 * @text Default Outline Width
 * @parent MessageWindow
 * @type number
 * @min 0
 * @desc Changes the default outline width to this many pixels thick.
 * @default 3
 *
 * @param NameBoxWindow
 * @text Name Box Window
 *
 * @param NameBoxWindowDefaultColor:num
 * @text Default Color
 * @parent NameBoxWindow
 * @min 0
 * @max 31
 * @desc Default color for the Name Box Window's text.
 * @default 0
 *
 * @param NameBoxWindowOffsetX:num
 * @text Offset X
 * @parent NameBoxWindow
 * @desc How much to offset the name box window X by (as long as it doesn't go offscreen).
 * @default 0
 *
 * @param NameBoxWindowOffsetY:num
 * @text Offset Y
 * @parent NameBoxWindow
 * @desc How much to offset the name box window Y by (as long as it doesn't go offscreen).
 * @default 0
 *
 * @param ChoiceListWindow
 * @text Choice List Window
 *
 * @param ChoiceWindowLineHeight:num
 * @text Line Height
 * @parent ChoiceListWindow
 * @type number
 * @min 1
 * @desc What is the default line height for Show Choices?
 * @default 36
 *
 * @param ChoiceWindowMaxRows:num
 * @text Max Rows
 * @parent ChoiceListWindow
 * @type number
 * @min 1
 * @desc Maximum number of rows to visibly display?
 * @default 8
 *
 * @param ChoiceWindowMaxCols:num
 * @text Max Columns
 * @parent ChoiceListWindow
 * @type number
 * @min 1
 * @desc Maximum number of columns to visibly display?
 * @default 1
 *
 * @param ChoiceWindowTextAlign:str
 * @text Text Alignment
 * @parent ChoiceListWindow
 * @type select
 * @option Default
 * @value default
 * @option Left
 * @value left
 * @option Center
 * @value center
 * @option Right
 * @value right
 * @desc Default alignment for Show Choice window.
 * @default default
 *
 * @param DefaultTextCodes
 * @text Default Text Codes
 *
 * @param RelativePXPY:eval
 * @text Relative \PX \PY
 * @parent DefaultTextCodes
 * @type boolean
 * @on Better
 * @off Normal
 * @desc Make \PX[x] and \PY[x] adjust relative starting position than exact coordinates.
 * @default true
 *
 * @param FontBiggerCap:eval
 * @text \{ Maximum
 * @parent DefaultTextCodes
 * @type number
 * @min 1
 * @desc Determine the maximum size that \{ can reach.
 * @default 108
 *
 * @param FontSmallerCap:eval
 * @text \} Minimum
 * @parent DefaultTextCodes
 * @type number
 * @min 1
 * @desc Determine the minimum size that \} can reach.
 * @default 12
 *
 * @param FontChangeValue:eval
 * @text \{ Change \}
 * @parent DefaultTextCodes
 * @type number
 * @min 1
 * @desc How much does \{ and \} change font size by?
 * @default 12
 *
 */
/* ----------------------------------------------------------------------------
 * Auto Color Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~AutoColor:
 *
 * @param DatabaseHighlighting
 * @text Database Highlighting
 *
 * @param Actors:str
 * @text Actors
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Actor's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Classes:str
 * @text Classes
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a Class's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Skills:str
 * @text Skills
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a Skill's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Items:str
 * @text Items
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Item's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Weapons:str
 * @text Weapons
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a Weapon's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Armors:str
 * @text Armors
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Armor's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Enemies:str
 * @text Enemies
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Enemy's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param States:str
 * @text States
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a State's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param WordHighlighting
 * @text Word Highlighting
 *
 * @param TextColor1:arraystr
 * @text \C[1]: Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor2:arraystr
 * @text \C[2]: Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor3:arraystr
 * @text \C[3]: Green
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor4:arraystr
 * @text \C[4]: Sky Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor5:arraystr
 * @text \C[5]: Purple
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor6:arraystr
 * @text \C[6]: Yellow
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor7:arraystr
 * @text \C[7]: Gray
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor8:arraystr
 * @text \C[8]: Light Gray
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor9:arraystr
 * @text \C[9]: Dark Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor10:arraystr
 * @text \C[10]: Dark Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor11:arraystr
 * @text \C[11]: Dark Green
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor12:arraystr
 * @text \C[12]: Dark Sky Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor13:arraystr
 * @text \C[13]: Dark Purple
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor14:arraystr
 * @text \C[14]: Solid Yellow
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor15:arraystr
 * @text \C[15]: Black
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor16:arraystr
 * @text \C[16]: System Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor17:arraystr
 * @text \C[17]: Crisis Yellow
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor18:arraystr
 * @text \C[18]: Dead Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor19:arraystr
 * @text \C[19]: Outline Black
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor20:arraystr
 * @text \C[20]: HP Orange 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor21:arraystr
 * @text \C[21]: HP Orange 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor22:arraystr
 * @text \C[22]: MP Blue 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor23:arraystr
 * @text \C[23]: MP Blue 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor24:arraystr
 * @text \C[24]: Param Up Green
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor25:arraystr
 * @text \C[25]: Param Down Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor26:arraystr
 * @text \C[26]: System Purple
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor27:arraystr
 * @text \C[27]: System Pink
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor28:arraystr
 * @text \C[28]: TP Green 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor29:arraystr
 * @text \C[29]: TP Green 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor30:arraystr
 * @text \C[30]: EXP Purple 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor31:arraystr
 * @text \C[31]: EXP Purple 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Text Code Actions
 * ----------------------------------------------------------------------------
 */
/*~struct~TextCodeAction:
 *
 * @param Match:str
 * @text Match
 * @desc This is what needs to be matched in order for this text code to work.
 * @default Key
 *
 * @param Type:str
 * @text Type
 * @type select
 * @option none
 * @value 
 * @option [x] (number)
 * @value \[(\d+)\]
 * @option <x> (string)
 * @value \<(.*?)\>
 * @desc The type of parameter to obtain (none, number, or string).
 * @default 
 *
 * @param CommonEvent:num
 * @text Common Event
 * @type common_event
 * @desc Select a common event to run when this text code is used in a message.
 * @default 0
 *
 * @param ActionJS:func
 * @text JS: Action
 * @type note
 * @desc JavaScript code used to perform an action when this text code appears.
 * @default "const textState = arguments[0];"
 *
 */
/* ----------------------------------------------------------------------------
 * Text Code Replacements
 * ----------------------------------------------------------------------------
 */
/*~struct~TextCodeReplace:
 *
 * @param Match:str
 * @text Match
 * @desc This is what needs to be matched in order for this text code to work.
 * @default Key
 *
 * @param Type:str
 * @text Type
 * @type select
 * @option none
 * @value 
 * @option [x] (number)
 * @value \[(\d+)\]
 * @option <x> (string)
 * @value \<(.*?)\>
 * @desc The type of parameter to obtain (none, number, or string).
 * @default 
 *
 * @param TextStr:str
 * @text STR: Text
 * @desc The text that will appear if this match appears.
 * If this has a value, ignore the JS: Text version.
 * @default Undefined
 *
 * @param TextJS:func
 * @text JS: Text
 * @type note
 * @desc JavaScript code used to determine the text that will appear if this match appears.
 * @default "return 'Text';"
 *
 */
/* ----------------------------------------------------------------------------
 * Text Macro
 * ----------------------------------------------------------------------------
 */
/*~struct~TextMacro:
 *
 * @param Match:str
 * @text Match
 * @desc This is what needs to be matched in order for this macro to work.
 * @default Key
 *
 * @param TextStr:str
 * @text STR: Text
 * @desc The replacement text that will appear from the macro.
 * If this has a value, ignore the JS: Text version.
 * @default Undefined
 *
 * @param TextJS:func
 * @text JS: Text
 * @type note
 * @desc JavaScript code used to determine the text that will appear if this macro appears.
 * @default "return 'Text';"
 *
 */
/* ----------------------------------------------------------------------------
 * Text Speed Options Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TextSpeed:
 *
 * @param AddOption:eval
 * @text Add Option?
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Text Speed' option to the Options menu?
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
 * @default Text Speed
 *
 * @param Default:num
 * @text Default Value
 * @type number
 * @min 1
 * @max 11
 * @desc 1 - 10, slowest to fastest.
 * 11 is instant value.
 * @default 10
 *
 * @param Instant:str
 * @text Instant Speed
 * @desc Text to show "instant" text.
 * @default Instant
 *
 */
/* ----------------------------------------------------------------------------
 * Word Wrap Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~WordWrap:
 *
 * @param EnableWordWrap
 * @text Enable Word Wrap
 *
 * @param MessageWindow:eval
 * @text Message Window
 * @parent EnableWordWrap
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Automatically enable Word Wrap for this window?
 * @default false
 *
 * @param HelpWindow:eval
 * @text Help Window
 * @parent EnableWordWrap
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Automatically enable Word Wrap for this window?
 * @default false
 *
 * @param Rules
 * @text Rules
 *
 * @param LineBreakSpace:eval
 * @text Link Break -> Space
 * @parent Rules
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Convert manually placed (non tagged) line breaks with spaces?
 * @default true
 *
 * @param TightWrap:eval
 * @text Tight Wrap
 * @parent Rules
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc If a face graphic is present in a message, word wrap will be tighter.
 * @default false
 *
 */
//=============================================================================

const _0x28b7=['drawItem','onChoice','Game_Map_updateEvents','value','Enemies','processPreviousColor','makeCommandList','_autoPositionTarget','convertTextAlignmentEscapeCharacters','messageCoreTextSpeed','clampPlacementPosition','\x1bITALIC[0]','inBattle','qFCko','isTriggered','start','convertMessageCoreEscapeActions','_scene','outLineColor','clearCommandList','lastGainedObjectName','hAazd','addContinuousShowChoices','Window_Options_addGeneralOptions','makeFontBigger','addExtraShowChoices','setChoiceListLineHeight','height','process_VisuMZ_MessageCore_TextMacros','XdUrk','zXqKP','prepareForcedPositionEscapeCharacters','Settings','windowPadding','Window_Message_isTriggered','constructor','setChoiceListTextAlign','zGfwb','FontSmallerCap','abuZM','process_VisuMZ_MessageCore_TextCodes_Action','Type','ParseWeaponNotetags','AutoColor','databaseObjectName','convertVariableEscapeCharacters','Scene_Options_maxCommands','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','_moveTargetWidth','isSceneMap','updateForcedPlacement','startX','RelativePXPY','quantity','victory','canMove','drawing','_messageWindow','messageWidth','</COLORLOCK>','_messageCommonEvents','moveTo','setupEvents','kAUdz','iconIndex','OidCr','scale','changeOutlineColor','obtainEscapeParam','TextStr','AutoColorRegExp','\x1bTEXTALIGNMENT[1]','General','_forcedPosition','aPzrB','command101','<CENTER>','_colorLock','convertShowChoiceEscapeCodes','addWrapBreakAfterPunctuation','ActionJS','COMMONEVENT','contentsBack','boxWidth','drawBackCenteredPicture',')))','textSizeExTextAlignment','maxCols','gkRRp','launchMessageCommonEvent','tIFIY','process_VisuMZ_MessageCore_AutoColor','102572OZqzQz','setChoiceListMaxColumns','16OtUvsg','splice','kcLJn','padding','eJeVN','initMessageCore','getChoiceListTextAlign','clearActorNameAutoColor','split','battle\x20enemy','isSceneBattle','HdhdH','[0]','ntvvQ','Classes','toUpperCase','followers','map','startWait','kPdvA','\x1bWrapBreak[0]','xotGo','placeCancelButton','Window_Help_refresh','parseChoiceText','resetWordWrap','itemHeight','STRUCT','isPressed','TextColor%1','setup','updateAutoSizePosition','_moveTargetHeight','name','\x1bTEXTALIGNMENT[0]','\x1bBOLD[0]','substr','kurGL','Window_Base_processNewLine','currentCommand','getChoiceListLineHeight','convertHardcodedEscapeReplacements','changeValue','_autoColorActorNames','drawBackPicture','GfQKc','createContents','NameBoxWindowOffsetY','pjahx','_autoPosRegExp','bSPad','TEXTALIGNMENT','blt','obtainGold','updateOverlappingY','min','registerResetRect','ARRAYJSON','WAIT','CommonEvent','setRelativePosition','Window_Base_processAllText','RDBKg','addLoadListener','ckXUK','hFNEl','361405zHUEdX','<WORDWRAP>','</I>','adjustShowChoiceDefault','_nameBoxWindow','processFsTextCode','fontBold','xPHvd','Window_Options_isVolumeSymbol','setPositionType','statusText','test','commandName','setMessageWindowWordWrap','AbfiF','mainFontSize','updatePlacement','Window_Base_initialize','isMessageWindowWordWrap','add','pPWoY','ObxRg','default','fontSize','choiceCols','\x1bTEXTALIGNMENT','HaVIz','_moveEasingType','refreshDimmerBitmap','isContinuePrepareShowTextCommands','_MessageCoreSettings','max','preConvertEscapeCharacters','AutoColorBypassList','isWeapon','parse','setLastGainedItemData','findTargetSprite','FontChangeValue','WordWrap','UELDE','\x5c%1','Scene_Boot_onDatabaseLoaded','ChoiceWindowMaxCols','rwhHi','Window_Base_changeTextColor','ARRAYEVAL','processCustomWait','</WORDWRAP>','makeFontSmaller','loadPicture','paintOpacity','processControlCharacter','true','gLTCg','event','CreateAutoColorRegExpLists','pyvYl','textSpeed','_moveTargetX','11182PeKdiB','clear','zmWZV','EBSxz','convertFontSettingsEscapeCharacters','battleTargetName','anchor','ParseEnemyNotetags','\x1bCOLORLOCK[1]','getMessageWindowWidth','ParseArmorNotetags','addedWidth','_cancelButton','VpMTG','<LINE\x20BREAK>','resetRect','Game_Map_initialize','FZqwx','isAutoColorAffected','inputtingAction','return\x20\x27','_eventId','outlineWidth','iqFZh','SWITCHES','newPage','sJoma','textWidth','toLowerCase','createTextState','STR','Window_Message_synchronizeNameBox','windowX','maxLines','HbTCQ','setupItemChoice','setHelpWindowWordWrap','setWordWrap','lhPex','541511ssPrmP','ChoiceWindowTextAlign','<B>','_relativePosition','ConvertTextAutoColorRegExpFriendly','processNewLine','processAutoColorWords','Window_NameBox_updatePlacement','DISABLE','textSpeedStatusText','description','startY','HelpWindow','rtl','setColorLock','TextJS','onDatabaseLoaded','jwjBb','choicePositionType','Window_NameBox_refresh','getChoiceListMaxRows','DefaultOutlineWidth','lVjPu','_resetRect','isRunning','emerge','textCodeResult','Undefined','_textColorStack','setMessageWindowWidth','ChoiceWindowLineHeight','Game_Interpreter_setupChoices','obtainExp','code','maxChoiceWidth','_autoSizeCheck','follower','initTextAlignement','ConfigManager_makeData','_moveTargetY','processFontChangeBold','CreateAutoColorRegExpListEntries','processMessageCoreEscapeActions','_target','_textDelay','_moveDuration','includes','applyDatabaseAutoColor','TextCodeActions','cDnRZ','isChoiceEnabled','isInputting','synchronizeNameBox','innerWidth','close','battle\x20actor','LineHeight','<I>','RKkQt','makeData','eRJtJ','ParseAllNotetags','windowWidth','updateRelativePosition','obtainItem','_list','ARRAYSTRUCT','SortObjectByKeyLength','postConvertEscapeCharacters','processCharacter','instantTextSpeed','addMessageCoreCommands','updateTransform','registerActorNameAutoColorChanges','escapeStart','callOkHandler','vWuZt','BOLD','outputHeight','updateMessageCommonEvents','processCommonEvent','_commonEventId','TextColor','filter','initialize','Name','Items','applyData','_index','Skills','\x1bCOLORLOCK[0]','processWrapBreak','members','type','lastGainedObjectQuantity','format','isCommandEnabled','ParseClassNotetags','addContinuousShowTextCommands','messageWindowRect','lineHeight','exit','\x1bTEXTALIGNMENT[3]','bpGAG','setBackground','</CENTER>','_spriteset','AddOption','addGeneralOptions','SWITCH','uLpNE','xEacQ','ARRAYNUM','FontBiggerCap','boxHeight','YDsCn','nextEventCode','changeTextColor','postFlushTextState','updateMove','FUNC','slice','fontItalic','Actors','parameters','\x1bC[%1]%2\x1bPREVCOLOR[0]','returnPreservedFontSettings','normalColor','processFontChangeItalic','addMessageCommonEvent','RHzNk','giJso','updateEvents','battleActionName','prepareWordWrapEscapeCharacters','convertBaseEscapeCharacters','MessageWindowProperties','sort','mCMSX','choiceRows','PICTURE','addCommand','SgnRM','commandSymbol','MessageRows','_autoSizeRegexp','processDrawPicture','processAutoSize','preemptive','changeVolume','maxCommands','actor','ConfigManager_applyData','AOPif','obtainEscapeString','bind','applyMoveEasing','getMessageWindowRows','maxFontSizeInLine','_indent','Default','ctjPV','usoBW','itemRectWithPadding','preFlushTextState','convertTextMacros','Window_Message_updatePlacement','Match','NYDHz','helpWordWrap','push','tgVEh','gHNvv','ceil','Game_Party_initialize','Window_Base_processControlCharacter','clamp','currentExt','HIDE','setTextAlignment','TextMacros','NameBoxWindowDefaultColor','MaxRows','ConvertParams','substring','processAllText','outputWidth','processActorNameAutoColorChanges','updateDimensions','center','mainFontFace','562835nZQixC','CENTERPICTURE','bOSUc','WRAPBREAK','partyMemberName','prepareShowTextFollowups','ParseStateNotetags','eSRdz','changePaintOpacity','Game_System_initialize','cjtsE','<LEFT>','adjustShowChoiceExtension','map\x20actor','prototype','AdjustRect','terminateMessage','nPtwq','<COLORLOCK>','_lastGainedItemData','choice','processPyTextCode','Zaxzh','Window_Message_processEscapeCharacter','indexOf','isItem','SHOW','NUM','LineBreakSpace','725807smTGMk','none','onProcessCharacter','cXWma','NYOsI','getTextAlignment','_wordWrap','_dimmerSprite','getPreservedFontSettings','easeInOut','ParseSkillNotetags','contents','_textDelayCount','trim','shift','processTextAlignmentX','isColorLocked','innerHeight','left','Instant','convertBackslashCharacters','AddAutoColor','(((','updateOffsetPosition','resetTextColor','addedHeight','replace','textCodeCheck','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','gainItem','_targets','FvZtc','choiceLineHeight','textColor','join','prepareShowTextCommand','ZcCuH','Weapons','_texts','MessageCore','clearFlags','false','isVolumeSymbol','indent','choiceTextAlign','Rqjcs','messagePositionReset','adjustShowChoiceCancel','updateBackground','setTextDelay','convertLockColorsEscapeCharacters','updateNameBoxMove','ALL','processPxTextCode','messageRows','Window_Message_terminateMessage','ExEBN','update','_data','open','length','jHbXB','_textAlignment','flushTextState','NIELi','cuHYA','refresh','eVzZl','processAutoPosition','processColorLock','_subject','width','ParseItemNotetags','Rows','cLFDX','registerCommand','\x1bTEXTALIGNMENT[2]','message','Window_Options_statusText','version','messageWordWrap','Game_Map_setupEvents','BXoOe','isRTL','activate','remove','GMYah','makeDeepCopy','text','ANY','getLastGainedItemData','isBreakShowTextCommands','setSpeakerName','Window_Base_processEscapeCharacter','stretchDimmerSprite','Window_ChoiceList_windowX','list','setFaceImage','StretchDimmedBg','MessageWindow','changeTextSpeed','isChoiceVisible','Window_ChoiceList_updatePlacement','vJPiM','gXdAX','ChoiceWindowProperties','calcMoveEasing','itemPadding','actorName','ENABLE','resetPositionX','selectDefault','textSizeEx','Armors','colSpacing','CreateAutoColorFor','\x1bi[%1]%2','States','gZBzr','getConfigValue','Game_Party_gainItem','_interpreter','MessageTextDelay','sBbkx','isHelpWindowWordWrap','map\x20party','faceName','prepareAutoSizeEscapeCharacters','processEscapeCharacter','setMessageWindowRows','battleUserName','TextCodeReplace','TextManager_message','floor','isWordWrapEnabled','FaOVM','xXQcA','UptRM','index','_wholeMoveDuration','QIcmz','19078ObehrD','return\x200','onNewPageMessageCore','fIDXf','EVAL','_messagePositionReset','match','round','ITALIC','ChoiceWindowMaxRows','VisuMZ_0_CoreEngine','EVcPm','CYztN','fontFace','isArmor','ARRAYSTR','processStoredAutoColorChanges','TextSpeed','processTextAlignmentChange','call','ARRAYFUNC','messageCoreWindowX','zLVrs','fcdST','map\x20player','\x1bI[%1]','exec','_centerMessageWindow','Window_Message_clearFlags','gVbPY','battle\x20party','processDrawCenteredPicture','JSON','MHqcG','getChoiceListMaxColumns'];const _0x3e735a=_0x162d;(function(_0x16542b,_0x220eb4){const _0x3aebe9=_0x162d;while(!![]){try{const _0x5c9862=-parseInt(_0x3aebe9(0x22b))+parseInt(_0x3aebe9(0x248))+parseInt(_0x3aebe9(0x2d5))*parseInt(_0x3aebe9(0x356))+parseInt(_0x3aebe9(0x354))+parseInt(_0x3aebe9(0x398))+-parseInt(_0x3aebe9(0x3fb))+-parseInt(_0x3aebe9(0x3d4));if(_0x5c9862===_0x220eb4)break;else _0x16542b['push'](_0x16542b['shift']());}catch(_0x9767a){_0x16542b['push'](_0x16542b['shift']());}}}(_0x28b7,0x5ca70));var label=_0x3e735a(0x26f),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x3e735a(0x44e)](function(_0x113ad7){const _0x1c0b97=_0x3e735a;return _0x113ad7['status']&&_0x113ad7[_0x1c0b97(0x405)][_0x1c0b97(0x429)]('['+label+']');})[0x0];function _0x162d(_0x190a6a,_0x103cc6){return _0x162d=function(_0x28b738,_0x162d86){_0x28b738=_0x28b738-0x1de;let _0x4685b1=_0x28b7[_0x28b738];return _0x4685b1;},_0x162d(_0x190a6a,_0x103cc6);}VisuMZ[label]['Settings']=VisuMZ[label][_0x3e735a(0x318)]||{},VisuMZ[_0x3e735a(0x223)]=function(_0x1a4d33,_0x99b8d1){const _0x55e043=_0x3e735a;for(const _0x59680f in _0x99b8d1){if(_0x59680f[_0x55e043(0x2db)](/(.*):(.*)/i)){if(_0x55e043(0x292)==='cLFDX'){const _0x41d932=String(RegExp['$1']),_0xfc8ccc=String(RegExp['$2'])[_0x55e043(0x365)]()[_0x55e043(0x255)]();let _0xecafb,_0x23a25d,_0x892bb;switch(_0xfc8ccc){case _0x55e043(0x246):_0xecafb=_0x99b8d1[_0x59680f]!==''?Number(_0x99b8d1[_0x59680f]):0x0;break;case _0x55e043(0x46b):_0x23a25d=_0x99b8d1[_0x59680f]!==''?JSON[_0x55e043(0x3bb)](_0x99b8d1[_0x59680f]):[],_0xecafb=_0x23a25d['map'](_0x1df210=>Number(_0x1df210));break;case _0x55e043(0x2d9):_0xecafb=_0x99b8d1[_0x59680f]!==''?eval(_0x99b8d1[_0x59680f]):null;break;case _0x55e043(0x3c6):_0x23a25d=_0x99b8d1[_0x59680f]!==''?JSON[_0x55e043(0x3bb)](_0x99b8d1[_0x59680f]):[],_0xecafb=_0x23a25d['map'](_0x45697a=>eval(_0x45697a));break;case _0x55e043(0x2f5):_0xecafb=_0x99b8d1[_0x59680f]!==''?JSON[_0x55e043(0x3bb)](_0x99b8d1[_0x59680f]):'';break;case _0x55e043(0x38f):_0x23a25d=_0x99b8d1[_0x59680f]!==''?JSON[_0x55e043(0x3bb)](_0x99b8d1[_0x59680f]):[],_0xecafb=_0x23a25d[_0x55e043(0x367)](_0x4eb278=>JSON[_0x55e043(0x3bb)](_0x4eb278));break;case _0x55e043(0x1e4):_0xecafb=_0x99b8d1[_0x59680f]!==''?new Function(JSON[_0x55e043(0x3bb)](_0x99b8d1[_0x59680f])):new Function(_0x55e043(0x2d6));break;case _0x55e043(0x2e9):_0x23a25d=_0x99b8d1[_0x59680f]!==''?JSON[_0x55e043(0x3bb)](_0x99b8d1[_0x59680f]):[],_0xecafb=_0x23a25d[_0x55e043(0x367)](_0xf5a9d6=>new Function(JSON[_0x55e043(0x3bb)](_0xf5a9d6)));break;case _0x55e043(0x3f2):_0xecafb=_0x99b8d1[_0x59680f]!==''?String(_0x99b8d1[_0x59680f]):'';break;case _0x55e043(0x2e4):_0x23a25d=_0x99b8d1[_0x59680f]!==''?JSON[_0x55e043(0x3bb)](_0x99b8d1[_0x59680f]):[],_0xecafb=_0x23a25d[_0x55e043(0x367)](_0x216813=>String(_0x216813));break;case _0x55e043(0x371):_0x892bb=_0x99b8d1[_0x59680f]!==''?JSON[_0x55e043(0x3bb)](_0x99b8d1[_0x59680f]):{},_0x1a4d33[_0x41d932]={},VisuMZ[_0x55e043(0x223)](_0x1a4d33[_0x41d932],_0x892bb);continue;case _0x55e043(0x43d):_0x23a25d=_0x99b8d1[_0x59680f]!==''?JSON[_0x55e043(0x3bb)](_0x99b8d1[_0x59680f]):[],_0xecafb=_0x23a25d[_0x55e043(0x367)](_0x1d5adb=>VisuMZ['ConvertParams']({},JSON['parse'](_0x1d5adb)));break;default:continue;}_0x1a4d33[_0x41d932]=_0xecafb;}else{const _0x295d53=[_0x55e043(0x2e2),_0x55e043(0x3af),'fontBold',_0x55e043(0x1e6),_0x55e043(0x269),'outLineColor',_0x55e043(0x3ea),_0x55e043(0x3cb)];let _0x5ee781={};for(const _0x158061 of _0x295d53){_0x5ee781[_0x158061]=this['contents'][_0x158061];}return _0x5ee781;}}}return _0x1a4d33;},(_0x828e9f=>{const _0x14910d=_0x3e735a,_0x2b2a27=_0x828e9f[_0x14910d(0x377)];for(const _0x282340 of dependencies){if(_0x14910d(0x22d)!=='vmOZz'){if(!Imported[_0x282340]){if(_0x14910d(0x3ee)!=='sJoma')_0x33ca6f['MessageCore'][_0x14910d(0x234)][_0x14910d(0x2e8)](this),this[_0x14910d(0x35b)]();else{alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x14910d(0x45a)](_0x2b2a27,_0x282340)),SceneManager['exit']();break;}}}else this[_0x14910d(0x228)](),this[_0x14910d(0x3a8)](),this[_0x14910d(0x2b6)](),this[_0x14910d(0x443)](),this[_0x14910d(0x253)][_0x14910d(0x3d5)](),this[_0x14910d(0x384)]();}const _0x516a08=_0x828e9f[_0x14910d(0x405)];if(_0x516a08[_0x14910d(0x2db)](/\[Version[ ](.*?)\]/i)){if(_0x14910d(0x3ce)!==_0x14910d(0x3ce))return this[_0x14910d(0x1ff)](_0x90f426,!![],!![]),this['processAutoPosition'](_0x14910d(0x249)),'';else{const _0x1f60ea=Number(RegExp['$1']);_0x1f60ea!==VisuMZ[label][_0x14910d(0x297)]&&(alert(_0x14910d(0x264)[_0x14910d(0x45a)](_0x2b2a27,_0x1f60ea)),SceneManager[_0x14910d(0x460)]());}}if(_0x516a08[_0x14910d(0x2db)](/\[Tier[ ](\d+)\]/i)){const _0x58a80b=Number(RegExp['$1']);if(_0x58a80b<tier)alert(_0x14910d(0x327)['format'](_0x2b2a27,_0x58a80b,tier)),SceneManager[_0x14910d(0x460)]();else{if('KtBui'===_0x14910d(0x46a))return _0x110a74['getChoiceListMaxColumns']();else tier=Math[_0x14910d(0x3b7)](_0x58a80b,tier);}}VisuMZ[_0x14910d(0x223)](VisuMZ[label][_0x14910d(0x318)],_0x828e9f[_0x14910d(0x1e8)]);})(pluginData),PluginManager[_0x3e735a(0x293)](pluginData['name'],_0x3e735a(0x2b1),_0x3f1664=>{const _0x52b686=_0x3e735a;VisuMZ[_0x52b686(0x223)](_0x3f1664,_0x3f1664);const _0x492174=_0x3f1664[_0x52b686(0x433)]||$gameSystem[_0x52b686(0x37e)]()||0x1,_0x4ade83=_0x3f1664[_0x52b686(0x222)]||$gameSystem[_0x52b686(0x40f)]()||0x1,_0x17c7c4=_0x3f1664['MaxCols']||$gameSystem[_0x52b686(0x2f7)]()||0x1,_0x1b0b2c=_0x3f1664['TextAlign'][_0x52b686(0x3f0)]()||_0x52b686(0x3ae);$gameSystem[_0x52b686(0x312)](_0x492174),$gameSystem['setChoiceListMaxRows'](_0x4ade83),$gameSystem[_0x52b686(0x355)](_0x17c7c4),$gameSystem['setChoiceListTextAlign'](_0x1b0b2c);}),PluginManager['registerCommand'](pluginData[_0x3e735a(0x377)],_0x3e735a(0x1f4),_0x3444cf=>{const _0x5b184d=_0x3e735a;VisuMZ[_0x5b184d(0x223)](_0x3444cf,_0x3444cf);const _0x1096e9=_0x3444cf[_0x5b184d(0x291)]||$gameSystem[_0x5b184d(0x209)]()||0x1,_0x543e3d=_0x3444cf['Width']||$gameSystem[_0x5b184d(0x3dd)]()||0x1;$gameTemp[_0x5b184d(0x2f0)]=_0x3444cf['Center']||![];const _0x5bc1b0=_0x3444cf[_0x5b184d(0x3bf)][_0x5b184d(0x3f0)]();$gameSystem[_0x5b184d(0x2c9)](_0x1096e9),$gameSystem[_0x5b184d(0x418)](_0x543e3d);[_0x5b184d(0x3cd),_0x5b184d(0x271)]['includes'](_0x5bc1b0)&&(_0x5b184d(0x397)===_0x5b184d(0x397)?$gameSystem[_0x5b184d(0x3a5)](eval(_0x5bc1b0)):(_0x25f502['MessageCore']['ConfigManager_applyData']['call'](this,_0x39b1f2),'textSpeed'in _0x227a02?this[_0x5b184d(0x3d2)]=_0x2df230(_0x46197f[_0x5b184d(0x3d2)])[_0x5b184d(0x21c)](0x1,0xb):this['textSpeed']=_0x3190b2[_0x5b184d(0x26f)][_0x5b184d(0x318)]['TextSpeed'][_0x5b184d(0x20c)]));const _0x357ffd=SceneManager[_0x5b184d(0x309)][_0x5b184d(0x331)];_0x357ffd&&(_0x357ffd[_0x5b184d(0x36f)](),_0x357ffd[_0x5b184d(0x228)](),_0x357ffd[_0x5b184d(0x384)]());}),VisuMZ['MessageCore'][_0x3e735a(0x3c2)]=Scene_Boot[_0x3e735a(0x239)][_0x3e735a(0x40b)],Scene_Boot[_0x3e735a(0x239)][_0x3e735a(0x40b)]=function(){const _0x798ece=_0x3e735a;VisuMZ[_0x798ece(0x26f)][_0x798ece(0x3c2)][_0x798ece(0x2e8)](this),this[_0x798ece(0x320)](),this['process_VisuMZ_MessageCore_TextCodes_Replace'](),this[_0x798ece(0x314)](),this['process_VisuMZ_MessageCore_AutoColor']();},VisuMZ['MessageCore'][_0x3e735a(0x43e)]=function(_0x26a1b4){const _0x105259=_0x3e735a,_0x4a4d22=VisuMZ[_0x105259(0x26f)]['Settings'][_0x26a1b4];_0x4a4d22['sort']((_0x33adc3,_0x2c2688)=>{const _0x9def6a=_0x105259;if(_0x9def6a(0x2ec)!=='eYxXq'){if(!_0x33adc3||!_0x2c2688)return-0x1;return _0x2c2688[_0x9def6a(0x213)][_0x9def6a(0x284)]-_0x33adc3[_0x9def6a(0x213)][_0x9def6a(0x284)];}else _0x15ad29[_0x9def6a(0x263)]=new _0x280aa7('\x5c['+_0x1c8026[_0x9def6a(0x213)]+'\x5c]','gi'),_0x45250f['TextStr']!==''&&_0x3ae704[_0x9def6a(0x33d)]!==_0x9def6a(0x416)?_0x26b09a[_0x9def6a(0x415)]=new _0x11965d(_0x9def6a(0x3e8)+_0x29ac5d['TextStr'][_0x9def6a(0x262)](/\\/g,'\x1b')+'\x27'):_0x9bc303[_0x9def6a(0x415)]=_0x3d6236[_0x9def6a(0x40a)];});},Scene_Boot[_0x3e735a(0x239)][_0x3e735a(0x320)]=function(){const _0xd2c715=_0x3e735a;VisuMZ['MessageCore'][_0xd2c715(0x43e)](_0xd2c715(0x42b));for(const _0x482e77 of VisuMZ[_0xd2c715(0x26f)][_0xd2c715(0x318)][_0xd2c715(0x42b)]){if('zXdjX'!=='zXdjX')this['_nameBoxWindow']['x']+=this['x']-_0x32a66e['x'],this[_0xd2c715(0x39c)]['y']+=this['y']-_0x5135b9['y'];else{_0x482e77[_0xd2c715(0x213)]=_0x482e77[_0xd2c715(0x213)][_0xd2c715(0x365)](),_0x482e77[_0xd2c715(0x263)]=new RegExp('\x1b'+_0x482e77[_0xd2c715(0x213)],'gi'),_0x482e77[_0xd2c715(0x415)]='\x1b'+_0x482e77['Match'];if(_0x482e77[_0xd2c715(0x321)]==='')_0x482e77[_0xd2c715(0x415)]+=_0xd2c715(0x362);}}},Scene_Boot['prototype']['process_VisuMZ_MessageCore_TextCodes_Replace']=function(){const _0x24ae94=_0x3e735a;VisuMZ[_0x24ae94(0x26f)][_0x24ae94(0x43e)](_0x24ae94(0x2cb));for(const _0x325fd1 of VisuMZ[_0x24ae94(0x26f)][_0x24ae94(0x318)][_0x24ae94(0x2cb)]){_0x325fd1[_0x24ae94(0x263)]=new RegExp('\x1b'+_0x325fd1[_0x24ae94(0x213)]+_0x325fd1[_0x24ae94(0x321)],'gi');if(_0x325fd1[_0x24ae94(0x33d)]!==''&&_0x325fd1[_0x24ae94(0x33d)]!==_0x24ae94(0x416))_0x325fd1[_0x24ae94(0x415)]=new Function(_0x24ae94(0x3e8)+_0x325fd1['TextStr']['replace'](/\\/g,'\x1b')+'\x27');else{if(_0x24ae94(0x29e)!==_0x24ae94(0x3a6))_0x325fd1[_0x24ae94(0x415)]=_0x325fd1[_0x24ae94(0x40a)];else{_0x4971e8[_0x24ae94(0x26f)]['SortObjectByKeyLength'](_0x24ae94(0x2cb));for(const _0x3e98ea of _0x36ca8d[_0x24ae94(0x26f)][_0x24ae94(0x318)][_0x24ae94(0x2cb)]){_0x3e98ea[_0x24ae94(0x263)]=new _0x47e8e4('\x1b'+_0x3e98ea[_0x24ae94(0x213)]+_0x3e98ea[_0x24ae94(0x321)],'gi'),_0x3e98ea[_0x24ae94(0x33d)]!==''&&_0x3e98ea[_0x24ae94(0x33d)]!==_0x24ae94(0x416)?_0x3e98ea[_0x24ae94(0x415)]=new _0x4c4688(_0x24ae94(0x3e8)+_0x3e98ea[_0x24ae94(0x33d)][_0x24ae94(0x262)](/\\/g,'\x1b')+'\x27'):_0x3e98ea[_0x24ae94(0x415)]=_0x3e98ea[_0x24ae94(0x40a)];}}}}},Scene_Boot[_0x3e735a(0x239)][_0x3e735a(0x314)]=function(){const _0x6cc44f=_0x3e735a;for(const _0x3e77a6 of VisuMZ['MessageCore'][_0x6cc44f(0x318)][_0x6cc44f(0x220)]){if(_0x6cc44f(0x3ad)===_0x6cc44f(0x3ad))_0x3e77a6[_0x6cc44f(0x263)]=new RegExp('\x5c['+_0x3e77a6['Match']+'\x5c]','gi'),_0x3e77a6[_0x6cc44f(0x33d)]!==''&&_0x3e77a6[_0x6cc44f(0x33d)]!==_0x6cc44f(0x416)?_0x3e77a6[_0x6cc44f(0x415)]=new Function(_0x6cc44f(0x3e8)+_0x3e77a6[_0x6cc44f(0x33d)]['replace'](/\\/g,'\x1b')+'\x27'):'xYkOc'!=='xYkOc'?this[_0x6cc44f(0x2ff)]=_0x19d606:_0x3e77a6['textCodeResult']=_0x3e77a6['TextJS'];else{const _0x1a93a6=_0x33588a[_0x6cc44f(0x3bb)]('['+_0x3e2b04['$1']['match'](/\d+/g)+']');for(const _0x1bb16e of _0x1a93a6){if(!_0x58aacc[_0x6cc44f(0x2fb)](_0x1bb16e))return![];}return!![];}}},Scene_Boot[_0x3e735a(0x239)][_0x3e735a(0x353)]=function(){const _0xb62aeb=_0x3e735a,_0x147e08=VisuMZ[_0xb62aeb(0x26f)][_0xb62aeb(0x318)][_0xb62aeb(0x323)];!VisuMZ[_0xb62aeb(0x438)]&&(VisuMZ[_0xb62aeb(0x26f)][_0xb62aeb(0x25d)]($dataClasses,_0x147e08[_0xb62aeb(0x364)]),VisuMZ[_0xb62aeb(0x26f)][_0xb62aeb(0x25d)]($dataSkills,_0x147e08['Skills']),VisuMZ[_0xb62aeb(0x26f)]['AddAutoColor']($dataItems,_0x147e08[_0xb62aeb(0x451)]),VisuMZ[_0xb62aeb(0x26f)][_0xb62aeb(0x25d)]($dataWeapons,_0x147e08[_0xb62aeb(0x26d)]),VisuMZ[_0xb62aeb(0x26f)][_0xb62aeb(0x25d)]($dataArmors,_0x147e08[_0xb62aeb(0x2b9)]),VisuMZ['MessageCore'][_0xb62aeb(0x25d)]($dataEnemies,_0x147e08['Enemies']),VisuMZ['MessageCore']['AddAutoColor']($dataStates,_0x147e08[_0xb62aeb(0x2bd)])),VisuMZ[_0xb62aeb(0x26f)][_0xb62aeb(0x3d0)]();},VisuMZ[_0x3e735a(0x26f)][_0x3e735a(0x3b9)]=['V','N','P','C','I','PX','PY','G','{','}','<','>','FS','\x5c','$','.','|','!','<','>','^',_0x3e735a(0x3fd),'</B>',_0x3e735a(0x434),_0x3e735a(0x39a),_0x3e735a(0x236),'</LEFT>',_0x3e735a(0x344),_0x3e735a(0x464),'<RIGHT>','</RIGHT>',_0x3e735a(0x23d),_0x3e735a(0x333),_0x3e735a(0x25e),_0x3e735a(0x34d),_0x3e735a(0x399),_0x3e735a(0x3c8),'<BR>',_0x3e735a(0x3e2),_0x3e735a(0x1f8),_0x3e735a(0x22c),_0x3e735a(0x349),'WAIT',_0x3e735a(0x245),_0x3e735a(0x21e),_0x3e735a(0x2b5),_0x3e735a(0x403),_0x3e735a(0x468),_0x3e735a(0x3ec),_0x3e735a(0x27c),_0x3e735a(0x2a1)],VisuMZ[_0x3e735a(0x26f)]['AddAutoColor']=function(_0x73dd2d,_0x57e86a){const _0x432bc8=_0x3e735a;if(_0x57e86a<=0x0)return;const _0x2d44be=_0x73dd2d;for(const _0x9a6dfa of _0x2d44be){if(!_0x9a6dfa)continue;VisuMZ[_0x432bc8(0x26f)]['CreateAutoColorFor'](_0x9a6dfa,_0x57e86a);}},VisuMZ[_0x3e735a(0x26f)][_0x3e735a(0x3d0)]=function(){const _0x435b86=_0x3e735a;VisuMZ[_0x435b86(0x26f)]['AutoColorRegExp']=[];for(let _0x441820=0x1;_0x441820<=0x1f;_0x441820++){const _0x3a22e8=_0x435b86(0x373)[_0x435b86(0x45a)](_0x441820),_0x24d398=VisuMZ[_0x435b86(0x26f)][_0x435b86(0x318)][_0x435b86(0x323)][_0x3a22e8];_0x24d398[_0x435b86(0x1f5)]((_0x390d14,_0x23de53)=>{const _0x273fdb=_0x435b86;if(_0x273fdb(0x2d0)!=='reFUP'){if(!_0x390d14||!_0x23de53)return-0x1;return _0x23de53[_0x273fdb(0x284)]-_0x390d14[_0x273fdb(0x284)];}else{if(!_0x5efec3['value'](_0x6576be))return![];}}),this[_0x435b86(0x424)](_0x24d398,_0x441820);}},VisuMZ['MessageCore'][_0x3e735a(0x424)]=function(_0x4fb7e2,_0x3079cb){const _0x2111f5=_0x3e735a;for(const _0x5eaf2b of _0x4fb7e2){if(_0x5eaf2b[_0x2111f5(0x284)]<=0x0)continue;if(/^\d+$/[_0x2111f5(0x3a3)](_0x5eaf2b))continue;let _0x5b312b=VisuMZ[_0x2111f5(0x26f)][_0x2111f5(0x3ff)](_0x5eaf2b);if(_0x5eaf2b['match'](/[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B/g)){if(_0x2111f5(0x20e)!=='usoBW'){for(const _0x5854ba of _0x9ab275[_0x2111f5(0x1e8)][0x0]){this[_0x2111f5(0x43c)][_0x5902c8][_0x2111f5(0x1e8)][0x0][_0x2111f5(0x216)](_0x5854ba);}this['_list'][_0x2111f5(0x357)](this[_0x2111f5(0x453)]-0x1,0x2);}else var _0x15e7be=new RegExp(_0x5b312b,'i');}else{if('oTgrm'!==_0x2111f5(0x280))var _0x15e7be=new RegExp('\x5cb'+_0x5b312b+'\x5cb','g');else this[_0x2111f5(0x33c)](_0x205612);}VisuMZ[_0x2111f5(0x26f)][_0x2111f5(0x33e)][_0x2111f5(0x216)]([_0x15e7be,_0x2111f5(0x1e9)[_0x2111f5(0x45a)](_0x3079cb,_0x5eaf2b)]);}},VisuMZ['MessageCore'][_0x3e735a(0x3ff)]=function(_0x324706){const _0x3dc1bb=_0x3e735a;return _0x324706=_0x324706[_0x3dc1bb(0x262)](/(\W)/gi,(_0x5b681b,_0x3c1be5)=>_0x3dc1bb(0x3c1)[_0x3dc1bb(0x45a)](_0x3c1be5)),_0x324706;},VisuMZ[_0x3e735a(0x26f)]['ParseClassNotetags']=VisuMZ['ParseClassNotetags'],VisuMZ[_0x3e735a(0x45c)]=function(_0xf4d25){const _0x102a05=_0x3e735a;VisuMZ[_0x102a05(0x26f)][_0x102a05(0x45c)][_0x102a05(0x2e8)](this,_0xf4d25);const _0xd3c352=VisuMZ[_0x102a05(0x26f)][_0x102a05(0x318)][_0x102a05(0x323)];VisuMZ[_0x102a05(0x26f)][_0x102a05(0x2bb)](_0xf4d25,_0xd3c352[_0x102a05(0x364)]);},VisuMZ[_0x3e735a(0x26f)][_0x3e735a(0x252)]=VisuMZ[_0x3e735a(0x252)],VisuMZ[_0x3e735a(0x252)]=function(_0x5407a3){const _0x2628f0=_0x3e735a;VisuMZ[_0x2628f0(0x26f)]['ParseSkillNotetags'][_0x2628f0(0x2e8)](this,_0x5407a3);const _0x3cd429=VisuMZ[_0x2628f0(0x26f)]['Settings'][_0x2628f0(0x323)];VisuMZ['MessageCore'][_0x2628f0(0x2bb)](_0x5407a3,_0x3cd429[_0x2628f0(0x454)]);},VisuMZ[_0x3e735a(0x26f)][_0x3e735a(0x290)]=VisuMZ[_0x3e735a(0x290)],VisuMZ['ParseItemNotetags']=function(_0x55aad9){const _0x42722c=_0x3e735a;VisuMZ['MessageCore']['ParseItemNotetags'][_0x42722c(0x2e8)](this,_0x55aad9);const _0x90fb9b=VisuMZ[_0x42722c(0x26f)]['Settings'][_0x42722c(0x323)];VisuMZ[_0x42722c(0x26f)][_0x42722c(0x2bb)](_0x55aad9,_0x90fb9b['Items']);},VisuMZ[_0x3e735a(0x26f)][_0x3e735a(0x322)]=VisuMZ[_0x3e735a(0x322)],VisuMZ[_0x3e735a(0x322)]=function(_0x3ec039){const _0x58e137=_0x3e735a;VisuMZ[_0x58e137(0x26f)][_0x58e137(0x322)][_0x58e137(0x2e8)](this,_0x3ec039);const _0x1a673e=VisuMZ[_0x58e137(0x26f)][_0x58e137(0x318)][_0x58e137(0x323)];VisuMZ[_0x58e137(0x26f)]['CreateAutoColorFor'](_0x3ec039,_0x1a673e[_0x58e137(0x26d)]);},VisuMZ['MessageCore'][_0x3e735a(0x3de)]=VisuMZ[_0x3e735a(0x3de)],VisuMZ[_0x3e735a(0x3de)]=function(_0x38ec24){const _0x1425bf=_0x3e735a;VisuMZ[_0x1425bf(0x26f)][_0x1425bf(0x3de)][_0x1425bf(0x2e8)](this,_0x38ec24);const _0x1ecc8d=VisuMZ['MessageCore'][_0x1425bf(0x318)][_0x1425bf(0x323)];VisuMZ[_0x1425bf(0x26f)][_0x1425bf(0x2bb)](_0x38ec24,_0x1ecc8d[_0x1425bf(0x2b9)]);},VisuMZ[_0x3e735a(0x26f)]['ParseEnemyNotetags']=VisuMZ[_0x3e735a(0x3db)],VisuMZ[_0x3e735a(0x3db)]=function(_0x360448){const _0x519d5b=_0x3e735a;VisuMZ[_0x519d5b(0x26f)]['ParseEnemyNotetags'][_0x519d5b(0x2e8)](this,_0x360448);const _0x364fca=VisuMZ['MessageCore'][_0x519d5b(0x318)]['AutoColor'];VisuMZ[_0x519d5b(0x26f)][_0x519d5b(0x2bb)](_0x360448,_0x364fca['Enemies']);},VisuMZ['MessageCore'][_0x3e735a(0x231)]=VisuMZ[_0x3e735a(0x231)],VisuMZ[_0x3e735a(0x231)]=function(_0x41414e){const _0x52f19f=_0x3e735a;VisuMZ[_0x52f19f(0x26f)][_0x52f19f(0x231)][_0x52f19f(0x2e8)](this,_0x41414e);const _0xb03a97=VisuMZ[_0x52f19f(0x26f)][_0x52f19f(0x318)][_0x52f19f(0x323)];VisuMZ[_0x52f19f(0x26f)][_0x52f19f(0x2bb)](_0x41414e,_0xb03a97[_0x52f19f(0x2bd)]);},VisuMZ[_0x3e735a(0x26f)]['CreateAutoColorFor']=function(_0x1d9832,_0x3e825b){const _0x55b98d=_0x3e735a;if(_0x3e825b<=0x0)return;const _0x4dce87=VisuMZ[_0x55b98d(0x26f)][_0x55b98d(0x318)][_0x55b98d(0x323)][_0x55b98d(0x44d)+_0x3e825b];let _0x271cd4=_0x1d9832[_0x55b98d(0x377)]['trim']();if(/^\d+$/[_0x55b98d(0x3a3)](_0x271cd4))return;if(VisuMZ[_0x55b98d(0x26f)][_0x55b98d(0x3b9)][_0x55b98d(0x429)](_0x271cd4[_0x55b98d(0x365)]()))return;_0x271cd4=_0x271cd4[_0x55b98d(0x262)](/\\I\[(\d+)\]/gi,''),_0x271cd4=_0x271cd4['replace'](/\x1bI\[(\d+)\]/gi,'');if(_0x271cd4[_0x55b98d(0x284)]<=0x0)return;if(_0x271cd4[_0x55b98d(0x2db)](/-----/i))return;_0x4dce87[_0x55b98d(0x216)](_0x271cd4);},SceneManager['isSceneBattle']=function(){const _0x53490c=_0x3e735a;return this[_0x53490c(0x309)]&&this['_scene'][_0x53490c(0x31b)]===Scene_Battle;},SceneManager[_0x3e735a(0x329)]=function(){const _0x171d4a=_0x3e735a;return this[_0x171d4a(0x309)]&&this[_0x171d4a(0x309)][_0x171d4a(0x31b)]===Scene_Map;},VisuMZ[_0x3e735a(0x26f)]['TextManager_message']=TextManager[_0x3e735a(0x295)],TextManager[_0x3e735a(0x295)]=function(_0xfc149){const _0x3914f4=_0x3e735a,_0x569bd9=['levelUp',_0x3914f4(0x414),_0x3914f4(0x200),'surprise',_0x3914f4(0x32e),'defeat',_0x3914f4(0x445),_0x3914f4(0x41b),_0x3914f4(0x38b),_0x3914f4(0x43b)];let _0x47cb65=VisuMZ['MessageCore'][_0x3914f4(0x2cc)][_0x3914f4(0x2e8)](this,_0xfc149);return _0x569bd9[_0x3914f4(0x429)](_0xfc149)&&(_0x47cb65=_0x3914f4(0x3c8)+_0x47cb65),_0x47cb65;},ConfigManager['textSpeed']=VisuMZ['MessageCore'][_0x3e735a(0x318)]['TextSpeed'][_0x3e735a(0x20c)],VisuMZ[_0x3e735a(0x26f)]['ConfigManager_makeData']=ConfigManager[_0x3e735a(0x436)],ConfigManager[_0x3e735a(0x436)]=function(){const _0x394ff9=_0x3e735a,_0x26352c=VisuMZ[_0x394ff9(0x26f)][_0x394ff9(0x421)][_0x394ff9(0x2e8)](this);return _0x26352c[_0x394ff9(0x3d2)]=this['textSpeed'],_0x26352c;},VisuMZ['MessageCore'][_0x3e735a(0x204)]=ConfigManager[_0x3e735a(0x452)],ConfigManager['applyData']=function(_0x103ce7){const _0x50e1b1=_0x3e735a;VisuMZ[_0x50e1b1(0x26f)][_0x50e1b1(0x204)][_0x50e1b1(0x2e8)](this,_0x103ce7);if('textSpeed'in _0x103ce7){if(_0x50e1b1(0x26c)!=='RZXjC')this[_0x50e1b1(0x3d2)]=Number(_0x103ce7[_0x50e1b1(0x3d2)])[_0x50e1b1(0x21c)](0x1,0xb);else return this['obtainEscapeParam'](_0x48a5e9);}else this[_0x50e1b1(0x3d2)]=VisuMZ['MessageCore'][_0x50e1b1(0x318)][_0x50e1b1(0x2e6)][_0x50e1b1(0x20c)];},TextManager['messageCoreTextSpeed']=VisuMZ['MessageCore'][_0x3e735a(0x318)][_0x3e735a(0x2e6)][_0x3e735a(0x450)],TextManager[_0x3e735a(0x441)]=VisuMZ['MessageCore'][_0x3e735a(0x318)][_0x3e735a(0x2e6)][_0x3e735a(0x25b)],VisuMZ[_0x3e735a(0x26f)][_0x3e735a(0x234)]=Game_System[_0x3e735a(0x239)]['initialize'],Game_System[_0x3e735a(0x239)]['initialize']=function(){const _0x19ae81=_0x3e735a;VisuMZ[_0x19ae81(0x26f)][_0x19ae81(0x234)]['call'](this),this[_0x19ae81(0x35b)]();},Game_System[_0x3e735a(0x239)]['initMessageCore']=function(){const _0x3929d6=_0x3e735a,_0x1b7a47=VisuMZ[_0x3929d6(0x26f)][_0x3929d6(0x318)]['General'],_0x1c4178=VisuMZ[_0x3929d6(0x26f)]['Settings'][_0x3929d6(0x3bf)];this['_MessageCoreSettings']={'messageRows':_0x1b7a47[_0x3929d6(0x1fc)],'messageWidth':_0x1b7a47['MessageWidth'],'messageWordWrap':_0x1c4178[_0x3929d6(0x2ab)],'helpWordWrap':_0x1c4178[_0x3929d6(0x407)],'choiceLineHeight':_0x1b7a47[_0x3929d6(0x419)],'choiceRows':_0x1b7a47[_0x3929d6(0x2de)],'choiceCols':_0x1b7a47[_0x3929d6(0x3c3)],'choiceTextAlign':_0x1b7a47[_0x3929d6(0x3fc)]};},Game_System[_0x3e735a(0x239)][_0x3e735a(0x209)]=function(){const _0x250cd2=_0x3e735a;if(this['_MessageCoreSettings']===undefined)this['initMessageCore']();if(this[_0x250cd2(0x3b6)][_0x250cd2(0x27e)]===undefined)this[_0x250cd2(0x35b)]();return this[_0x250cd2(0x3b6)][_0x250cd2(0x27e)];},Game_System[_0x3e735a(0x239)][_0x3e735a(0x2c9)]=function(_0x1cf780){const _0x4c27c4=_0x3e735a;if(this[_0x4c27c4(0x3b6)]===undefined)this[_0x4c27c4(0x35b)]();if(this['_MessageCoreSettings'][_0x4c27c4(0x27e)]===undefined)this[_0x4c27c4(0x35b)]();this['_MessageCoreSettings']['messageRows']=_0x1cf780||0x1;},Game_System['prototype'][_0x3e735a(0x3dd)]=function(){const _0xe10a9c=_0x3e735a;if(this['_MessageCoreSettings']===undefined)this[_0xe10a9c(0x35b)]();if(this[_0xe10a9c(0x3b6)]['messageWidth']===undefined)this['initMessageCore']();return this[_0xe10a9c(0x3b6)][_0xe10a9c(0x332)];},Game_System['prototype'][_0x3e735a(0x418)]=function(_0x1d74c6){const _0x4f6bb7=_0x3e735a;if(this[_0x4f6bb7(0x3b6)]===undefined)this[_0x4f6bb7(0x35b)]();if(this[_0x4f6bb7(0x3b6)]['messageWidth']===undefined)this['initMessageCore']();_0x1d74c6=Math['ceil'](_0x1d74c6);if(_0x1d74c6%0x2!==0x0)_0x1d74c6+=0x1;this[_0x4f6bb7(0x3b6)][_0x4f6bb7(0x332)]=_0x1d74c6||0x2;},Game_System[_0x3e735a(0x239)][_0x3e735a(0x3aa)]=function(){const _0x4ac317=_0x3e735a;if(this[_0x4ac317(0x3b6)]===undefined)this[_0x4ac317(0x35b)]();if(this[_0x4ac317(0x3b6)]['messageWordWrap']===undefined)this['initMessageCore']();return this[_0x4ac317(0x3b6)][_0x4ac317(0x298)];},Game_System[_0x3e735a(0x239)]['setMessageWindowWordWrap']=function(_0x5b5389){const _0x49e2ba=_0x3e735a;if(this[_0x49e2ba(0x3b6)]===undefined)this['initMessageCore']();if(this['_MessageCoreSettings'][_0x49e2ba(0x298)]===undefined)this[_0x49e2ba(0x35b)]();this[_0x49e2ba(0x3b6)]['messageWordWrap']=_0x5b5389;},Game_System['prototype'][_0x3e735a(0x2c4)]=function(){const _0x1b6362=_0x3e735a;if(this[_0x1b6362(0x3b6)]===undefined)this[_0x1b6362(0x35b)]();if(this[_0x1b6362(0x3b6)][_0x1b6362(0x215)]===undefined)this['initMessageCore']();return this[_0x1b6362(0x3b6)][_0x1b6362(0x215)];},Game_System[_0x3e735a(0x239)][_0x3e735a(0x3f8)]=function(_0x4f6b28){const _0x24216f=_0x3e735a;if(this[_0x24216f(0x3b6)]===undefined)this[_0x24216f(0x35b)]();if(this['_MessageCoreSettings'][_0x24216f(0x215)]===undefined)this['initMessageCore']();this[_0x24216f(0x3b6)]['helpWordWrap']=_0x4f6b28;},Game_System[_0x3e735a(0x239)]['getChoiceListLineHeight']=function(){const _0x66ee09=_0x3e735a;if(this[_0x66ee09(0x3b6)]===undefined)this[_0x66ee09(0x35b)]();if(this[_0x66ee09(0x3b6)][_0x66ee09(0x268)]===undefined)this['initMessageCore']();return this[_0x66ee09(0x3b6)]['choiceLineHeight'];},Game_System[_0x3e735a(0x239)][_0x3e735a(0x312)]=function(_0x14f647){const _0x18d6db=_0x3e735a;if(this[_0x18d6db(0x3b6)]===undefined)this[_0x18d6db(0x35b)]();if(this[_0x18d6db(0x3b6)]['choiceLineHeight']===undefined)this[_0x18d6db(0x35b)]();this[_0x18d6db(0x3b6)][_0x18d6db(0x268)]=_0x14f647||0x1;},Game_System[_0x3e735a(0x239)][_0x3e735a(0x40f)]=function(){const _0x3f88ff=_0x3e735a;if(this[_0x3f88ff(0x3b6)]===undefined)this[_0x3f88ff(0x35b)]();if(this[_0x3f88ff(0x3b6)][_0x3f88ff(0x1f7)]===undefined)this[_0x3f88ff(0x35b)]();return this[_0x3f88ff(0x3b6)][_0x3f88ff(0x1f7)];},Game_System['prototype']['setChoiceListMaxRows']=function(_0x254be7){const _0x18c606=_0x3e735a;if(this['_MessageCoreSettings']===undefined)this[_0x18c606(0x35b)]();if(this[_0x18c606(0x3b6)][_0x18c606(0x1f7)]===undefined)this[_0x18c606(0x35b)]();this['_MessageCoreSettings'][_0x18c606(0x1f7)]=_0x254be7||0x1;},Game_System[_0x3e735a(0x239)][_0x3e735a(0x2f7)]=function(){const _0x142ac=_0x3e735a;if(this['_MessageCoreSettings']===undefined)this[_0x142ac(0x35b)]();if(this['_MessageCoreSettings'][_0x142ac(0x3b0)]===undefined)this['initMessageCore']();return this[_0x142ac(0x3b6)][_0x142ac(0x3b0)];},Game_System[_0x3e735a(0x239)]['setChoiceListMaxColumns']=function(_0x4968b0){const _0x196e63=_0x3e735a;if(this[_0x196e63(0x3b6)]===undefined)this['initMessageCore']();if(this['_MessageCoreSettings'][_0x196e63(0x3b0)]===undefined)this['initMessageCore']();this['_MessageCoreSettings'][_0x196e63(0x3b0)]=_0x4968b0||0x1;},Game_System[_0x3e735a(0x239)]['getChoiceListTextAlign']=function(){const _0x244ce6=_0x3e735a;if(this[_0x244ce6(0x3b6)]===undefined)this[_0x244ce6(0x35b)]();if(this[_0x244ce6(0x3b6)][_0x244ce6(0x274)]===undefined)this[_0x244ce6(0x35b)]();return this[_0x244ce6(0x3b6)][_0x244ce6(0x274)];},Game_System[_0x3e735a(0x239)][_0x3e735a(0x31c)]=function(_0x2c6686){const _0x13d54b=_0x3e735a;if(this[_0x13d54b(0x3b6)]===undefined)this['initMessageCore']();if(this[_0x13d54b(0x3b6)]['choiceTextAlign']===undefined)this[_0x13d54b(0x35b)]();this['_MessageCoreSettings']['choiceTextAlign']=_0x2c6686[_0x13d54b(0x3f0)]();},VisuMZ[_0x3e735a(0x26f)][_0x3e735a(0x21a)]=Game_Party[_0x3e735a(0x239)]['initialize'],Game_Party[_0x3e735a(0x239)][_0x3e735a(0x44f)]=function(){const _0x5e4d6a=_0x3e735a;VisuMZ[_0x5e4d6a(0x26f)][_0x5e4d6a(0x21a)][_0x5e4d6a(0x2e8)](this),this['initMessageCore']();},Game_Party['prototype'][_0x3e735a(0x35b)]=function(){const _0x51a6b1=_0x3e735a;this[_0x51a6b1(0x23e)]={'type':0x0,'id':0x0,'quantity':0x0};},Game_Party[_0x3e735a(0x239)][_0x3e735a(0x2a2)]=function(){const _0x2f6f00=_0x3e735a;if(this[_0x2f6f00(0x23e)]===undefined)this[_0x2f6f00(0x35b)]();return this[_0x2f6f00(0x23e)];},Game_Party['prototype']['setLastGainedItemData']=function(_0x4ef008,_0x21867d){const _0x29514a=_0x3e735a;if(this[_0x29514a(0x23e)]===undefined)this[_0x29514a(0x35b)]();if(!_0x4ef008)return;if(DataManager[_0x29514a(0x244)](_0x4ef008))this[_0x29514a(0x23e)][_0x29514a(0x458)]=0x0;else{if(DataManager[_0x29514a(0x3ba)](_0x4ef008))this[_0x29514a(0x23e)][_0x29514a(0x458)]=0x1;else DataManager[_0x29514a(0x2e3)](_0x4ef008)&&(this[_0x29514a(0x23e)][_0x29514a(0x458)]=0x2);}this[_0x29514a(0x23e)]['id']=_0x4ef008['id'],this['_lastGainedItemData']['quantity']=_0x21867d;},VisuMZ[_0x3e735a(0x26f)]['Game_Party_gainItem']=Game_Party['prototype'][_0x3e735a(0x265)],Game_Party[_0x3e735a(0x239)][_0x3e735a(0x265)]=function(_0x2b46d8,_0x16420f,_0x5be05e){const _0x4855e1=_0x3e735a;VisuMZ[_0x4855e1(0x26f)][_0x4855e1(0x2c0)][_0x4855e1(0x2e8)](this,_0x2b46d8,_0x16420f,_0x5be05e),_0x16420f>0x0&&this[_0x4855e1(0x3bc)](_0x2b46d8,_0x16420f);},VisuMZ['MessageCore'][_0x3e735a(0x3e4)]=Game_Map['prototype']['initialize'],Game_Map[_0x3e735a(0x239)][_0x3e735a(0x44f)]=function(){const _0x1badf3=_0x3e735a;VisuMZ['MessageCore'][_0x1badf3(0x3e4)][_0x1badf3(0x2e8)](this),this['_messageCommonEvents']=[];},VisuMZ[_0x3e735a(0x26f)][_0x3e735a(0x299)]=Game_Map[_0x3e735a(0x239)][_0x3e735a(0x336)],Game_Map['prototype']['setupEvents']=function(){const _0x282531=_0x3e735a;VisuMZ[_0x282531(0x26f)][_0x282531(0x299)][_0x282531(0x2e8)](this),this[_0x282531(0x334)]=[];},VisuMZ[_0x3e735a(0x26f)]['Game_Map_updateEvents']=Game_Map['prototype'][_0x3e735a(0x1f0)],Game_Map[_0x3e735a(0x239)][_0x3e735a(0x1f0)]=function(){const _0x4b6e64=_0x3e735a;VisuMZ[_0x4b6e64(0x26f)][_0x4b6e64(0x2fa)]['call'](this),this['updateMessageCommonEvents']();},Game_Map[_0x3e735a(0x239)][_0x3e735a(0x1ed)]=function(_0x17eade){const _0x476408=_0x3e735a;if(!$dataCommonEvents[_0x17eade])return;this[_0x476408(0x334)]=this[_0x476408(0x334)]||[];const _0x88cd0=this[_0x476408(0x2c1)][_0x476408(0x3e9)],_0x201e09=new Game_MessageCommonEvent(_0x17eade,_0x88cd0);this[_0x476408(0x334)][_0x476408(0x216)](_0x201e09);},Game_Map[_0x3e735a(0x239)][_0x3e735a(0x44a)]=function(){const _0x1726eb=_0x3e735a;this[_0x1726eb(0x334)]=this[_0x1726eb(0x334)]||[];for(const _0x2e861f of this[_0x1726eb(0x334)]){!_0x2e861f[_0x1726eb(0x2c1)]?this[_0x1726eb(0x334)][_0x1726eb(0x29d)](_0x2e861f):_0x2e861f[_0x1726eb(0x281)]();}},Game_Interpreter[_0x3e735a(0x239)][_0x3e735a(0x343)]=function(_0x403eee){const _0x139b24=_0x3e735a;if($gameMessage['isBusy']())return![];return this[_0x139b24(0x26b)](_0x403eee),this[_0x139b24(0x45d)](_0x403eee),this[_0x139b24(0x230)](_0x403eee),this['setWaitMode'](_0x139b24(0x295)),!![];},Game_Interpreter[_0x3e735a(0x239)]['prepareShowTextCommand']=function(_0x553b99){const _0x37568e=_0x3e735a;$gameMessage[_0x37568e(0x2a9)](_0x553b99[0x0],_0x553b99[0x1]),$gameMessage[_0x37568e(0x463)](_0x553b99[0x2]),$gameMessage[_0x37568e(0x3a1)](_0x553b99[0x3]),$gameMessage[_0x37568e(0x2a4)](_0x553b99[0x4]);},Game_Interpreter[_0x3e735a(0x239)][_0x3e735a(0x45d)]=function(_0x5b05ec){const _0x248ef4=_0x3e735a;while(this[_0x248ef4(0x3b5)]()){this[_0x248ef4(0x453)]++;this[_0x248ef4(0x37d)]()[_0x248ef4(0x41c)]===0x191&&$gameMessage[_0x248ef4(0x3ab)](this[_0x248ef4(0x37d)]()['parameters'][0x0]);if(this[_0x248ef4(0x2a3)]())break;}},Game_Interpreter['prototype'][_0x3e735a(0x3b5)]=function(){const _0x5c9b84=_0x3e735a;return this[_0x5c9b84(0x1e0)]()===0x65&&$gameSystem['getMessageWindowRows']()>0x4?!![]:this['nextEventCode']()===0x191;},Game_Interpreter[_0x3e735a(0x239)][_0x3e735a(0x2a3)]=function(){const _0x226896=_0x3e735a;return $gameMessage[_0x226896(0x26e)][_0x226896(0x284)]>=$gameSystem['getMessageWindowRows']()&&this['nextEventCode']()!==0x191;},Game_Interpreter['prototype']['prepareShowTextFollowups']=function(_0x516e2f){const _0x813a32=_0x3e735a;switch(this['nextEventCode']()){case 0x66:this['_index']++,this['setupChoices'](this[_0x813a32(0x37d)]()[_0x813a32(0x1e8)]);break;case 0x67:this[_0x813a32(0x453)]++,this['setupNumInput'](this[_0x813a32(0x37d)]()[_0x813a32(0x1e8)]);break;case 0x68:this[_0x813a32(0x453)]++,this[_0x813a32(0x3f7)](this['currentCommand']()[_0x813a32(0x1e8)]);break;}},VisuMZ[_0x3e735a(0x26f)][_0x3e735a(0x41a)]=Game_Interpreter[_0x3e735a(0x239)]['setupChoices'],Game_Interpreter[_0x3e735a(0x239)]['setupChoices']=function(_0x41196b){const _0x45b097=_0x3e735a;_0x41196b=this[_0x45b097(0x30e)](),VisuMZ[_0x45b097(0x26f)]['Game_Interpreter_setupChoices']['call'](this,_0x41196b);},Game_Interpreter[_0x3e735a(0x239)][_0x3e735a(0x30e)]=function(){const _0x35addc=_0x3e735a,_0x5c7bc2=this['_index'],_0x38c28a=[];let _0x1006e9=0x0;this[_0x35addc(0x453)]++;while(this[_0x35addc(0x453)]<this[_0x35addc(0x43c)][_0x35addc(0x284)]){if(_0x35addc(0x3e1)!==_0x35addc(0x30d)){if(this[_0x35addc(0x37d)]()[_0x35addc(0x273)]===this[_0x35addc(0x20b)]){if(this[_0x35addc(0x37d)]()[_0x35addc(0x41c)]===0x194&&this[_0x35addc(0x1e0)]()!==0x66){if(_0x35addc(0x3c0)!=='OikeE')break;else _0x50e67b['x']=-_0x7402[_0x35addc(0x28f)]-_0x3f4135;}else{if(this['currentCommand']()[_0x35addc(0x41c)]===0x66)this[_0x35addc(0x237)](_0x1006e9,this[_0x35addc(0x37d)](),_0x5c7bc2),this[_0x35addc(0x453)]-=0x2;else this[_0x35addc(0x37d)]()[_0x35addc(0x41c)]===0x192&&(this[_0x35addc(0x37d)]()[_0x35addc(0x1e8)][0x0]=_0x1006e9,_0x1006e9++);}}this[_0x35addc(0x453)]++;}else this[_0x35addc(0x23e)][_0x35addc(0x458)]=0x2;}return this['_index']=_0x5c7bc2,this[_0x35addc(0x37d)]()['parameters'];},Game_Interpreter[_0x3e735a(0x239)][_0x3e735a(0x237)]=function(_0x50ea46,_0x2e331c,_0x2d253d){const _0xf6dde2=_0x3e735a;this[_0xf6dde2(0x39b)](_0x50ea46,_0x2e331c,_0x2d253d),this['adjustShowChoiceCancel'](_0x50ea46,_0x2e331c,_0x2d253d),this[_0xf6dde2(0x311)](_0x2e331c,_0x2d253d);},Game_Interpreter[_0x3e735a(0x239)][_0x3e735a(0x39b)]=function(_0x5944f8,_0x2731e8,_0x17042f){const _0x5ccd75=_0x3e735a;if(_0x2731e8[_0x5ccd75(0x1e8)][0x2]<0x0)return;const _0x493015=_0x2731e8[_0x5ccd75(0x1e8)][0x2]+_0x5944f8;this['_list'][_0x17042f]['parameters'][0x2]=_0x493015;},Game_Interpreter[_0x3e735a(0x239)][_0x3e735a(0x277)]=function(_0x42cf48,_0xc7135d,_0x31d9a3){const _0x927b0f=_0x3e735a;if(_0xc7135d[_0x927b0f(0x1e8)][0x1]>=0x0){var _0x4757a4=_0xc7135d[_0x927b0f(0x1e8)][0x1]+_0x42cf48;this[_0x927b0f(0x43c)][_0x31d9a3]['parameters'][0x1]=_0x4757a4;}else _0xc7135d[_0x927b0f(0x1e8)][0x1]===-0x2&&('eAxns'==='POGUX'?(_0x3cf8c4=_0x47bdd2[_0x927b0f(0x262)](/[\n\r]+/g,'\x20'),_0x1f0467=_0x16c32b[_0x927b0f(0x262)](/<(?:BR|LINEBREAK)>/gi,'\x20\x0a')):this['_list'][_0x31d9a3][_0x927b0f(0x1e8)][0x1]=_0xc7135d[_0x927b0f(0x1e8)][0x1]);},Game_Interpreter['prototype'][_0x3e735a(0x311)]=function(_0x2014b1,_0x51d4aa){const _0x5d63b0=_0x3e735a;for(const _0x39bce0 of _0x2014b1[_0x5d63b0(0x1e8)][0x0]){if(_0x5d63b0(0x437)!=='nHWJW')this[_0x5d63b0(0x43c)][_0x51d4aa][_0x5d63b0(0x1e8)][0x0][_0x5d63b0(0x216)](_0x39bce0);else return this[_0x5d63b0(0x1ff)](_0x1e6d77,!![],!![]),this[_0x5d63b0(0x28c)]('map\x20event',_0x47dc4c(_0x18ad63)||0x0),'';}this[_0x5d63b0(0x43c)][_0x5d63b0(0x357)](this[_0x5d63b0(0x453)]-0x1,0x2);};function Game_MessageCommonEvent(){const _0x270e6e=_0x3e735a;this[_0x270e6e(0x44f)](...arguments);}Game_MessageCommonEvent[_0x3e735a(0x239)][_0x3e735a(0x44f)]=function(_0x46c80d,_0xbccf37){const _0x47aa75=_0x3e735a;this[_0x47aa75(0x44c)]=_0x46c80d,this['_eventId']=_0xbccf37||0x0,this[_0x47aa75(0x28a)]();},Game_MessageCommonEvent['prototype']['event']=function(){const _0x301e17=_0x3e735a;return $dataCommonEvents[this[_0x301e17(0x44c)]];},Game_MessageCommonEvent['prototype'][_0x3e735a(0x2a8)]=function(){const _0x2459a9=_0x3e735a;return this[_0x2459a9(0x3cf)]()[_0x2459a9(0x2a8)];},Game_MessageCommonEvent[_0x3e735a(0x239)]['refresh']=function(){const _0x418cf3=_0x3e735a;this['_interpreter']=new Game_Interpreter(),this[_0x418cf3(0x2c1)][_0x418cf3(0x374)](this[_0x418cf3(0x2a8)](),this['_eventId']);},Game_MessageCommonEvent[_0x3e735a(0x239)][_0x3e735a(0x281)]=function(){const _0x3bb2ae=_0x3e735a;this[_0x3bb2ae(0x2c1)]&&(this[_0x3bb2ae(0x2c1)][_0x3bb2ae(0x413)]()?this['_interpreter'][_0x3bb2ae(0x281)]():this[_0x3bb2ae(0x3d5)]());},Game_MessageCommonEvent['prototype'][_0x3e735a(0x3d5)]=function(){this['_interpreter']=null;},Scene_Message['prototype'][_0x3e735a(0x45e)]=function(){const _0x1e2592=_0x3e735a,_0x75065a=Math[_0x1e2592(0x38d)](Graphics[_0x1e2592(0x28f)],$gameSystem[_0x1e2592(0x3dd)]()),_0xda4d1e=$gameSystem['getMessageWindowRows'](),_0x8263cd=this['calcWindowHeight'](_0xda4d1e,![]),_0x3a415c=(Graphics[_0x1e2592(0x34b)]-_0x75065a)/0x2,_0x56ef45=0x0;return new Rectangle(_0x3a415c,_0x56ef45,_0x75065a,_0x8263cd);},VisuMZ[_0x3e735a(0x26f)][_0x3e735a(0x326)]=Scene_Options[_0x3e735a(0x239)][_0x3e735a(0x202)],Scene_Options['prototype']['maxCommands']=function(){const _0x6ffa04=_0x3e735a;let _0x147b16=VisuMZ['MessageCore'][_0x6ffa04(0x326)]['call'](this);const _0x320464=VisuMZ['MessageCore'][_0x6ffa04(0x318)];if(_0x320464[_0x6ffa04(0x2e6)]['AddOption']&&_0x320464[_0x6ffa04(0x2e6)][_0x6ffa04(0x23a)])_0x147b16++;return _0x147b16;},VisuMZ['MessageCore'][_0x3e735a(0x3a9)]=Window_Base[_0x3e735a(0x239)]['initialize'],Window_Base[_0x3e735a(0x239)]['initialize']=function(_0x4fc48d){const _0x61b8a5=_0x3e735a;this[_0x61b8a5(0x35b)](_0x4fc48d),VisuMZ[_0x61b8a5(0x26f)]['Window_Base_initialize'][_0x61b8a5(0x2e8)](this,_0x4fc48d);},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x35b)]=function(_0x26c075){const _0x3d6bd1=_0x3e735a;this[_0x3d6bd1(0x420)](),this[_0x3d6bd1(0x36f)](),this[_0x3d6bd1(0x38e)](_0x26c075);},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x420)]=function(){const _0x5c2885=_0x3e735a;this['setTextAlignment'](_0x5c2885(0x3ae));},Window_Base[_0x3e735a(0x239)]['setTextAlignment']=function(_0x3b1db4){const _0x58fb90=_0x3e735a;this[_0x58fb90(0x286)]=_0x3b1db4;},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x24d)]=function(){return this['_textAlignment'];},VisuMZ[_0x3e735a(0x26f)]['Window_Base_textSizeEx']=Window_Base['prototype'][_0x3e735a(0x2b8)],Window_Base[_0x3e735a(0x239)]['textSizeEx']=function(_0x2cd33a){const _0x52f75f=_0x3e735a;return this[_0x52f75f(0x36f)](),VisuMZ['MessageCore']['Window_Base_textSizeEx'][_0x52f75f(0x2e8)](this,_0x2cd33a);},VisuMZ[_0x3e735a(0x26f)][_0x3e735a(0x393)]=Window_Base[_0x3e735a(0x239)]['processAllText'],Window_Base[_0x3e735a(0x239)][_0x3e735a(0x225)]=function(_0x495f0b){const _0x5ab140=_0x3e735a;VisuMZ[_0x5ab140(0x26f)][_0x5ab140(0x393)]['call'](this,_0x495f0b);if(_0x495f0b[_0x5ab140(0x330)])this['setTextAlignment'](_0x5ab140(0x3ae));},Window_Base['prototype'][_0x3e735a(0x36f)]=function(){const _0x44eeaa=_0x3e735a;this[_0x44eeaa(0x3f9)](![]);},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x2ce)]=function(){const _0x330efc=_0x3e735a;return this[_0x330efc(0x24e)];},Window_Base['prototype'][_0x3e735a(0x3f9)]=function(_0x1e11f8){return this['_wordWrap']=_0x1e11f8,'';},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x38e)]=function(_0x292f81){this['_resetRect']=JsonEx['makeDeepCopy'](_0x292f81);},Window_Base[_0x3e735a(0x239)]['resetFontSettings']=function(){const _0x1cfb7d=_0x3e735a;this[_0x1cfb7d(0x253)][_0x1cfb7d(0x2e2)]=$gameSystem[_0x1cfb7d(0x22a)](),this[_0x1cfb7d(0x253)][_0x1cfb7d(0x3af)]=$gameSystem[_0x1cfb7d(0x3a7)](),this['contents'][_0x1cfb7d(0x39e)]=![],this[_0x1cfb7d(0x253)][_0x1cfb7d(0x1e6)]=![],this[_0x1cfb7d(0x260)]();},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x260)]=function(){const _0x482441=_0x3e735a;this[_0x482441(0x1e1)](ColorManager[_0x482441(0x1eb)]()),this[_0x482441(0x33b)](ColorManager['outlineColor']());const _0xebb366=VisuMZ['MessageCore'][_0x482441(0x318)][_0x482441(0x340)];_0xebb366['DefaultOutlineWidth']===undefined&&('kjaBf'==='kjaBf'?_0xebb366[_0x482441(0x410)]=0x3:_0x3bd1e2=this['contents']['fontSize']),this[_0x482441(0x253)]['outlineWidth']=_0xebb366[_0x482441(0x410)],this[_0x482441(0x409)](![]);},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x409)]=function(_0x4eb111){const _0x518eb1=_0x3e735a;this[_0x518eb1(0x345)]=_0x4eb111;},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x258)]=function(){return this['_colorLock'];},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x3e6)]=function(){return![];},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x250)]=function(){const _0x2e2f4c=_0x3e735a,_0x16bfda=[_0x2e2f4c(0x2e2),_0x2e2f4c(0x3af),'fontBold',_0x2e2f4c(0x1e6),_0x2e2f4c(0x269),_0x2e2f4c(0x30a),_0x2e2f4c(0x3ea),_0x2e2f4c(0x3cb)];let _0x50b909={};for(const _0x5457fd of _0x16bfda){_0x2e2f4c(0x339)!==_0x2e2f4c(0x2c3)?_0x50b909[_0x5457fd]=this['contents'][_0x5457fd]:this['_lastGainedItemData'][_0x2e2f4c(0x458)]=0x1;}return _0x50b909;},Window_Base['prototype'][_0x3e735a(0x1ea)]=function(_0x2ceab4){const _0x44a5b7=_0x3e735a;for(const _0x5298f0 in _0x2ceab4){this[_0x44a5b7(0x253)][_0x5298f0]=_0x2ceab4[_0x5298f0];}},VisuMZ[_0x3e735a(0x26f)]['Window_Base_update']=Window_Base[_0x3e735a(0x239)][_0x3e735a(0x281)],Window_Base['prototype'][_0x3e735a(0x281)]=function(){const _0x5016f2=_0x3e735a;VisuMZ['MessageCore']['Window_Base_update']['call'](this),this[_0x5016f2(0x1e3)]();},Window_Base[_0x3e735a(0x239)]['canMove']=function(){return![];},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x1e3)]=function(){const _0xc9ec9c=_0x3e735a;if(this[_0xc9ec9c(0x428)]>0x0){if(this[_0xc9ec9c(0x32f)]()){if(_0xc9ec9c(0x411)===_0xc9ec9c(0x3e5))return _0x511750[_0xc9ec9c(0x26f)][_0xc9ec9c(0x31a)][_0xc9ec9c(0x2e8)](this)||_0x4d8cba[_0xc9ec9c(0x372)](_0x15601a[_0xc9ec9c(0x26f)][_0xc9ec9c(0x318)][_0xc9ec9c(0x340)]['FastForwardKey']);else this['x']=this[_0xc9ec9c(0x208)](this['x'],this[_0xc9ec9c(0x3d3)]),this['y']=this[_0xc9ec9c(0x208)](this['y'],this['_moveTargetY']),this[_0xc9ec9c(0x28f)]=this[_0xc9ec9c(0x208)](this['width'],this['_moveTargetWidth']),this[_0xc9ec9c(0x313)]=this['applyMoveEasing'](this[_0xc9ec9c(0x313)],this[_0xc9ec9c(0x376)]),this[_0xc9ec9c(0x302)]();}this['_moveDuration']--;}},Window_Base['prototype']['clampPlacementPosition']=function(_0x5a92c6,_0x4b3aff){const _0x239395=_0x3e735a;if(!_0x5a92c6){if('Zaxzh'!==_0x239395(0x241)){const _0x341667=_0x9b3684['choices']();let _0xe00380=0x0;for(const _0x4f2ffb of _0x341667){if(this[_0x239395(0x2ad)](_0x4f2ffb)){const _0x286cee=this[_0x239395(0x36e)](_0x4f2ffb),_0x298904=this['isChoiceEnabled'](_0x4f2ffb);this['addCommand'](_0x286cee,_0x239395(0x23f),_0x298904,_0xe00380);}_0xe00380++;}}else this[_0x239395(0x28f)]=Math['min'](this[_0x239395(0x28f)],Graphics[_0x239395(0x28f)]),this[_0x239395(0x313)]=Math[_0x239395(0x38d)](this[_0x239395(0x313)],Graphics[_0x239395(0x313)]);}if(!_0x4b3aff){if(_0x239395(0x462)!==_0x239395(0x337)){const _0x51b3bd=-(Math[_0x239395(0x2cd)](Graphics[_0x239395(0x28f)]-Graphics[_0x239395(0x34b)])/0x2),_0x3a46fd=_0x51b3bd+Graphics[_0x239395(0x28f)]-this[_0x239395(0x28f)],_0x1d4640=-(Math[_0x239395(0x2cd)](Graphics[_0x239395(0x313)]-Graphics[_0x239395(0x1de)])/0x2),_0x4de0ed=_0x1d4640+Graphics['height']-this[_0x239395(0x313)];this['x']=this['x'][_0x239395(0x21c)](_0x51b3bd,_0x3a46fd),this['y']=this['y'][_0x239395(0x21c)](_0x1d4640,_0x4de0ed);}else this['_colorLock']=_0x4e6eb0;}},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x208)]=function(_0xdda95b,_0x167da4){const _0x1c2e7e=_0x3e735a,_0xa8951a=this['_moveDuration'],_0x5d6e8f=this['_wholeMoveDuration'],_0xd4a59e=this[_0x1c2e7e(0x2b2)]((_0x5d6e8f-_0xa8951a)/_0x5d6e8f),_0x3d5cb3=this[_0x1c2e7e(0x2b2)]((_0x5d6e8f-_0xa8951a+0x1)/_0x5d6e8f),_0x584ee2=(_0xdda95b-_0x167da4*_0xd4a59e)/(0x1-_0xd4a59e);return _0x584ee2+(_0x167da4-_0x584ee2)*_0x3d5cb3;},Window_Base['prototype']['calcMoveEasing']=function(_0xa0d52f){const _0x3894b7=_0x3e735a,_0x51158b=0x2;switch(this['_moveEasingType']){case 0x0:return _0xa0d52f;case 0x1:return this['easeIn'](_0xa0d52f,_0x51158b);case 0x2:return this['easeOut'](_0xa0d52f,_0x51158b);case 0x3:return this[_0x3894b7(0x251)](_0xa0d52f,_0x51158b);default:return Imported[_0x3894b7(0x2df)]?'GEhUt'==='tetXa'?0x4:VisuMZ[_0x3894b7(0x208)](_0xa0d52f,this[_0x3894b7(0x3b3)]):_0xa0d52f;}},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x335)]=function(_0x2ee5f0,_0x208de1,_0x54a574,_0x511173,_0x49232c,_0x185551){const _0x56c34a=_0x3e735a;this[_0x56c34a(0x3d3)]=_0x2ee5f0,this[_0x56c34a(0x422)]=_0x208de1,this['_moveTargetWidth']=_0x54a574||this[_0x56c34a(0x28f)],this['_moveTargetHeight']=_0x511173||this[_0x56c34a(0x313)],this[_0x56c34a(0x428)]=_0x49232c||0x1;if(this[_0x56c34a(0x428)]<=0x0)this['_moveDuration']=0x1;this[_0x56c34a(0x2d3)]=this[_0x56c34a(0x428)],this[_0x56c34a(0x3b3)]=_0x185551||0x0;if(_0x49232c<=0x0)this[_0x56c34a(0x1e3)]();},Window_Base[_0x3e735a(0x239)]['moveBy']=function(_0x3fe1c9,_0x5e2e26,_0x328dad,_0x534e4d,_0x42266c,_0xfb82cf){const _0x4f0979=_0x3e735a;this[_0x4f0979(0x3d3)]=this['x']+_0x3fe1c9,this[_0x4f0979(0x422)]=this['y']+_0x5e2e26,this[_0x4f0979(0x328)]=this[_0x4f0979(0x28f)]+(_0x328dad||0x0),this['_moveTargetHeight']=this[_0x4f0979(0x313)]+(_0x534e4d||0x0),this[_0x4f0979(0x428)]=_0x42266c||0x1;if(this['_moveDuration']<=0x0)this[_0x4f0979(0x428)]=0x1;this[_0x4f0979(0x2d3)]=this[_0x4f0979(0x428)],this[_0x4f0979(0x3b3)]=_0xfb82cf||0x0;if(_0x42266c<=0x0)this[_0x4f0979(0x1e3)]();},Window_Base[_0x3e735a(0x239)]['resetRect']=function(_0x5920a0,_0x1767de){const _0x32407e=_0x3e735a;this[_0x32407e(0x335)](this[_0x32407e(0x412)]['x'],this[_0x32407e(0x412)]['y'],this['_resetRect']['width'],this[_0x32407e(0x412)][_0x32407e(0x313)],_0x5920a0,_0x1767de);},VisuMZ[_0x3e735a(0x26f)]['Window_Base_changeTextColor']=Window_Base['prototype'][_0x3e735a(0x1e1)],Window_Base[_0x3e735a(0x239)]['changeTextColor']=function(_0x435e78){const _0x54d931=_0x3e735a;if(this['isColorLocked']())return;_0x435e78=_0x435e78[_0x54d931(0x262)](/\,/g,''),this[_0x54d931(0x417)]=this[_0x54d931(0x417)]||[],this[_0x54d931(0x417)]['unshift'](this[_0x54d931(0x253)][_0x54d931(0x269)]),VisuMZ['MessageCore'][_0x54d931(0x3c5)][_0x54d931(0x2e8)](this,_0x435e78);},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x2fd)]=function(_0x3f04d2){const _0x47b5b0=_0x3e735a;this[_0x47b5b0(0x33c)](_0x3f04d2);if(this[_0x47b5b0(0x258)]())return;_0x3f04d2[_0x47b5b0(0x330)]&&(this['_textColorStack']=this[_0x47b5b0(0x417)]||[],this['contents'][_0x47b5b0(0x269)]=this[_0x47b5b0(0x417)][_0x47b5b0(0x256)]()||ColorManager[_0x47b5b0(0x1eb)]());},Window_Base[_0x3e735a(0x239)]['convertEscapeCharacters']=function(_0x2c08c6){const _0x188bba=_0x3e735a;return _0x2c08c6=this[_0x188bba(0x211)](_0x2c08c6),_0x2c08c6=this['convertBackslashCharacters'](_0x2c08c6),_0x2c08c6=this[_0x188bba(0x325)](_0x2c08c6),_0x2c08c6=this[_0x188bba(0x3b8)](_0x2c08c6),_0x2c08c6=this[_0x188bba(0x346)](_0x2c08c6),_0x2c08c6=this[_0x188bba(0x3d8)](_0x2c08c6),_0x2c08c6=this['convertTextAlignmentEscapeCharacters'](_0x2c08c6),_0x2c08c6=this[_0x188bba(0x27a)](_0x2c08c6),_0x2c08c6=this[_0x188bba(0x1f3)](_0x2c08c6),_0x2c08c6=this[_0x188bba(0x37f)](_0x2c08c6),_0x2c08c6=this[_0x188bba(0x308)](_0x2c08c6),_0x2c08c6=this['convertMessageCoreEscapeReplacements'](_0x2c08c6),_0x2c08c6=this[_0x188bba(0x43f)](_0x2c08c6),_0x2c08c6=this['convertVariableEscapeCharacters'](_0x2c08c6),_0x2c08c6=this[_0x188bba(0x401)](_0x2c08c6),_0x2c08c6=this[_0x188bba(0x1f2)](_0x2c08c6),_0x2c08c6;},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x211)]=function(_0x5eccb8){const _0x176025=_0x3e735a;for(const _0x198d76 of VisuMZ[_0x176025(0x26f)][_0x176025(0x318)][_0x176025(0x220)]){if('spjou'===_0x176025(0x383)){const _0x33aa0c=this[_0x176025(0x428)],_0x4e842a=this[_0x176025(0x2d3)],_0x33c106=this[_0x176025(0x2b2)]((_0x4e842a-_0x33aa0c)/_0x4e842a),_0x75f498=this[_0x176025(0x2b2)]((_0x4e842a-_0x33aa0c+0x1)/_0x4e842a),_0x190939=(_0x27b605-_0x530371*_0x33c106)/(0x1-_0x33c106);return _0x190939+(_0xf20d53-_0x190939)*_0x75f498;}else _0x5eccb8['match'](_0x198d76[_0x176025(0x263)])&&(_0x5eccb8=_0x5eccb8[_0x176025(0x262)](_0x198d76[_0x176025(0x263)],_0x198d76['textCodeResult'][_0x176025(0x207)](this)));}return _0x5eccb8;},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x25c)]=function(_0x1e6a6b){const _0x310748=_0x3e735a;return _0x1e6a6b=_0x1e6a6b['replace'](/\\/g,'\x1b'),_0x1e6a6b=_0x1e6a6b[_0x310748(0x262)](/\x1b\x1b/g,'\x5c'),_0x1e6a6b;},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x325)]=function(_0x42ca8a){const _0x25789b=_0x3e735a;for(;;){if(_0x25789b(0x396)!==_0x25789b(0x386)){if(_0x42ca8a[_0x25789b(0x2db)](/\\V\[(\d+)\]/gi))'fGgvd'!=='fGgvd'?_0x1f23d7[_0x25789b(0x415)]=new _0x297953(_0x25789b(0x3e8)+_0x2ed42f['TextStr']['replace'](/\\/g,'\x1b')+'\x27'):_0x42ca8a=_0x42ca8a[_0x25789b(0x262)](/\\V\[(\d+)\]/gi,(_0x5e2078,_0x4e1df8)=>this[_0x25789b(0x25c)](String($gameVariables[_0x25789b(0x2fb)](parseInt(_0x4e1df8)))));else{if(_0x42ca8a['match'](/\x1bV\[(\d+)\]/gi)){if(_0x25789b(0x2e0)==='EVcPm')_0x42ca8a=_0x42ca8a[_0x25789b(0x262)](/\x1bV\[(\d+)\]/gi,(_0x4c7fca,_0x2f03b8)=>this[_0x25789b(0x25c)](String($gameVariables[_0x25789b(0x2fb)](parseInt(_0x2f03b8)))));else{_0x45ae1e[_0x25789b(0x26f)][_0x25789b(0x231)][_0x25789b(0x2e8)](this,_0x265c10);const _0x483be3=_0x52c546[_0x25789b(0x26f)]['Settings']['AutoColor'];_0x409df0[_0x25789b(0x26f)]['CreateAutoColorFor'](_0x2fa70a,_0x483be3[_0x25789b(0x2bd)]);}}else break;}}else this[_0x25789b(0x2ff)]=_0x964e22['followers']()[_0x25789b(0x41f)](_0x37e22f-0x1);}return _0x42ca8a;},Window_Base['prototype'][_0x3e735a(0x3b8)]=function(_0x27d3a4){const _0x5167f3=_0x3e735a;return this[_0x5167f3(0x444)](),_0x27d3a4;},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x43f)]=function(_0x39956d){return _0x39956d;},Window_Base['prototype'][_0x3e735a(0x346)]=function(_0xf0647b){const _0x485a57=_0x3e735a;return _0xf0647b=_0xf0647b[_0x485a57(0x262)](/<(?:SHOW|HIDE|DISABLE|ENABLE)>/i,''),_0xf0647b=_0xf0647b[_0x485a57(0x262)](/<(?:SHOW|HIDE|DISABLE|ENABLE)[ ](?:SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i,''),_0xf0647b=_0xf0647b[_0x485a57(0x262)](/<(?:SHOW|HIDE|DISABLE|ENABLE)[ ](?:ALL|ANY)[ ](?:SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i,''),_0xf0647b;},Window_Base[_0x3e735a(0x239)]['convertFontSettingsEscapeCharacters']=function(_0x44badd){const _0x4b194b=_0x3e735a;return _0x44badd=_0x44badd['replace'](/<B>/gi,'\x1bBOLD[1]'),_0x44badd=_0x44badd['replace'](/<\/B>/gi,_0x4b194b(0x379)),_0x44badd=_0x44badd[_0x4b194b(0x262)](/<I>/gi,'\x1bITALIC[1]'),_0x44badd=_0x44badd[_0x4b194b(0x262)](/<\/I>/gi,_0x4b194b(0x303)),_0x44badd;},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x300)]=function(_0x44c955){const _0x2d2952=_0x3e735a;return _0x44c955=_0x44c955[_0x2d2952(0x262)](/<LEFT>/gi,_0x2d2952(0x33f)),_0x44c955=_0x44c955[_0x2d2952(0x262)](/<\/LEFT>/gi,_0x2d2952(0x378)),_0x44c955=_0x44c955['replace'](/<CENTER>/gi,_0x2d2952(0x294)),_0x44c955=_0x44c955[_0x2d2952(0x262)](/<\/CENTER>/gi,_0x2d2952(0x378)),_0x44c955=_0x44c955['replace'](/<RIGHT>/gi,_0x2d2952(0x461)),_0x44c955=_0x44c955[_0x2d2952(0x262)](/<\/RIGHT>/gi,_0x2d2952(0x378)),_0x44c955;},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x27a)]=function(_0x5da699){const _0xb87c20=_0x3e735a;return _0x5da699=_0x5da699[_0xb87c20(0x262)](/<COLORLOCK>/gi,_0xb87c20(0x3dc)),_0x5da699=_0x5da699[_0xb87c20(0x262)](/<\/COLORLOCK>/gi,_0xb87c20(0x455)),_0x5da699=_0x5da699[_0xb87c20(0x262)](/\(\(\(/gi,_0xb87c20(0x3dc)),_0x5da699=_0x5da699['replace'](/\)\)\)/gi,_0xb87c20(0x455)),_0x5da699;},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x1f3)]=function(_0x3584fd){const _0x39cc64=_0x3e735a;return _0x3584fd=_0x3584fd['replace'](/\x1bN\[(\d+)\]/gi,(_0x3fc58,_0x2f5780)=>this['actorName'](parseInt(_0x2f5780))),_0x3584fd=_0x3584fd['replace'](/\x1bP\[(\d+)\]/gi,(_0x3f1467,_0x2f51be)=>this['partyMemberName'](parseInt(_0x2f51be))),_0x3584fd=_0x3584fd[_0x39cc64(0x262)](/\x1bG/gi,TextManager['currencyUnit']),_0x3584fd;},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x37f)]=function(_0x71bc53){const _0x5a4c81=_0x3e735a;return _0x71bc53=_0x71bc53[_0x5a4c81(0x262)](/\<(?:BATTLE|CURRENT BATTLE) TARGET\>/gi,this['battleTargetName']()),_0x71bc53=_0x71bc53[_0x5a4c81(0x262)](/\<(?:BATTLE|CURRENT BATTLE) (?:USER|SUBJECT)\>/gi,this[_0x5a4c81(0x2ca)]()),_0x71bc53=_0x71bc53['replace'](/\<(?:BATTLE|CURRENT BATTLE) (?:ITEM|SKILL|ACTION)\>/gi,this[_0x5a4c81(0x1f1)](!![])),_0x71bc53=_0x71bc53[_0x5a4c81(0x262)](/\<(?:BATTLE|CURRENT BATTLE) (?:ITEM|SKILL|ACTION) NAME\>/gi,this['battleActionName'](![])),_0x71bc53;},Window_Base['prototype'][_0x3e735a(0x3d9)]=function(){const _0x792e2b=_0x3e735a;if(!SceneManager[_0x792e2b(0x360)]())return'';if(BattleManager[_0x792e2b(0x426)])return BattleManager['_target'][_0x792e2b(0x377)]();if(BattleManager[_0x792e2b(0x266)][0x0])return BattleManager[_0x792e2b(0x266)][0x0][_0x792e2b(0x377)]();return'';},Window_Base[_0x3e735a(0x239)]['battleUserName']=function(){const _0xe5fbd3=_0x3e735a;if(!SceneManager['isSceneBattle']())return'';let _0x5ebabd=null;return _0x5ebabd=BattleManager[_0xe5fbd3(0x28e)],!_0x5ebabd&&BattleManager[_0xe5fbd3(0x42e)]()&&(_0x5ebabd=BattleManager['actor']()),_0x5ebabd?_0x5ebabd[_0xe5fbd3(0x377)]():'';},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x1f1)]=function(_0x23091c){const _0x1c69f7=_0x3e735a;if(!SceneManager[_0x1c69f7(0x360)]())return'';let _0x253662=BattleManager['_action']||null;!_0x253662&&BattleManager[_0x1c69f7(0x42e)]()&&(_0x253662=BattleManager[_0x1c69f7(0x3e7)]());if(_0x253662){let _0x27e517='';if(_0x23091c)_0x27e517+=_0x1c69f7(0x2ee)[_0x1c69f7(0x45a)](_0x253662['iconIndex']);return _0x27e517+=_0x253662[_0x1c69f7(0x377)],_0x27e517;}return'';},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x308)]=function(_0x4a6ab6){const _0x61c328=_0x3e735a;for(const _0x1a3240 of VisuMZ[_0x61c328(0x26f)][_0x61c328(0x318)][_0x61c328(0x42b)]){_0x4a6ab6[_0x61c328(0x2db)](_0x1a3240[_0x61c328(0x263)])&&(_0x4a6ab6=_0x4a6ab6[_0x61c328(0x262)](_0x1a3240['textCodeCheck'],_0x1a3240[_0x61c328(0x415)]),_0x4a6ab6=this[_0x61c328(0x325)](_0x4a6ab6));}return _0x4a6ab6;},Window_Base[_0x3e735a(0x239)]['convertMessageCoreEscapeReplacements']=function(_0x46a015){const _0x479bfe=_0x3e735a;for(const _0x2c9873 of VisuMZ[_0x479bfe(0x26f)][_0x479bfe(0x318)][_0x479bfe(0x2cb)]){if('MHqcG'!==_0x479bfe(0x2f6)){_0x566dbd['MessageCore'][_0x479bfe(0x290)][_0x479bfe(0x2e8)](this,_0x2f96ac);const _0x2f7865=_0x155c0f['MessageCore'][_0x479bfe(0x318)][_0x479bfe(0x323)];_0x181440['MessageCore']['CreateAutoColorFor'](_0x465383,_0x2f7865[_0x479bfe(0x451)]);}else _0x46a015['match'](_0x2c9873[_0x479bfe(0x263)])&&(_0x46a015=_0x46a015[_0x479bfe(0x262)](_0x2c9873[_0x479bfe(0x263)],_0x2c9873[_0x479bfe(0x415)][_0x479bfe(0x207)](this)),_0x46a015=this['convertVariableEscapeCharacters'](_0x46a015));}return _0x46a015;},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x2b4)]=function(_0x23e574){const _0x320dd4=_0x3e735a,_0x54c5db=_0x23e574>=0x1?$gameActors[_0x320dd4(0x203)](_0x23e574):null,_0x5e5267=_0x54c5db?_0x54c5db[_0x320dd4(0x377)]():'',_0x180a7a=Number(VisuMZ[_0x320dd4(0x26f)]['Settings']['AutoColor']['Actors']);return this[_0x320dd4(0x3e6)]()&&_0x180a7a!==0x0?_0x320dd4(0x1e9)[_0x320dd4(0x45a)](_0x180a7a,_0x5e5267):_0x5e5267;},Window_Base['prototype'][_0x3e735a(0x22f)]=function(_0x152dc7){const _0x432e2b=_0x3e735a,_0x1fcb82=_0x152dc7>=0x1?$gameParty['members']()[_0x152dc7-0x1]:null,_0x167a35=_0x1fcb82?_0x1fcb82[_0x432e2b(0x377)]():'',_0x59b4ed=Number(VisuMZ[_0x432e2b(0x26f)][_0x432e2b(0x318)]['AutoColor'][_0x432e2b(0x1e7)]);if(this[_0x432e2b(0x3e6)]()&&_0x59b4ed!==0x0)return _0x432e2b(0x3d7)===_0x432e2b(0x305)?_0xcd0a33:_0x432e2b(0x1e9)[_0x432e2b(0x45a)](_0x59b4ed,_0x167a35);else{if('sxtJY'==='sxtJY')return _0x167a35;else _0x552cfb=_0x1e55ef['replace'](_0xe9a247[_0x432e2b(0x263)],_0x211c1f[_0x432e2b(0x415)]['bind'](this));}},Window_Base[_0x3e735a(0x239)]['processAutoColorWords']=function(_0xcbff95){const _0x4d9980=_0x3e735a;if(this['isAutoColorAffected']()){if(_0x4d9980(0x3c4)!==_0x4d9980(0x275))_0xcbff95=this[_0x4d9980(0x2e5)](_0xcbff95),_0xcbff95=this[_0x4d9980(0x227)](_0xcbff95);else{if(_0x317e14[_0x4d9980(0x304)]()){}else _0xb9ea28[_0x4d9980(0x1ed)](_0x1b6cbb);}}return _0xcbff95;},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x2e5)]=function(_0x3f0536){const _0x5406da=_0x3e735a;for(autoColor of VisuMZ[_0x5406da(0x26f)][_0x5406da(0x33e)]){if(_0x5406da(0x388)!=='bSPad')return _0x2c60be=_0x22a860['replace'](/(\W)/gi,(_0x2a6707,_0x55d12f)=>_0x5406da(0x3c1)['format'](_0x55d12f)),_0x2c886b;else _0x3f0536=_0x3f0536[_0x5406da(0x262)](autoColor[0x0],autoColor[0x1]);}return _0x3f0536;},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x35d)]=function(){const _0x1db0a1=_0x3e735a;this[_0x1db0a1(0x381)]=[];},Window_Base[_0x3e735a(0x239)]['registerActorNameAutoColorChanges']=function(){const _0x21dbb0=_0x3e735a;this[_0x21dbb0(0x35d)]();const _0x277657=VisuMZ[_0x21dbb0(0x26f)][_0x21dbb0(0x318)]['AutoColor'],_0x538efd=_0x277657[_0x21dbb0(0x1e7)];if(_0x538efd<=0x0)return;for(const _0x1055da of $gameActors[_0x21dbb0(0x282)]){if(!_0x1055da)continue;const _0x41321e=_0x1055da[_0x21dbb0(0x377)]();if(_0x41321e['trim']()[_0x21dbb0(0x284)]<=0x0)continue;if(/^\d+$/[_0x21dbb0(0x3a3)](_0x41321e))continue;if(_0x41321e[_0x21dbb0(0x2db)](/-----/i))continue;let _0x29314b=VisuMZ[_0x21dbb0(0x26f)][_0x21dbb0(0x3ff)](_0x41321e);const _0x3d8106=new RegExp('\x5cb'+_0x29314b+'\x5cb','g'),_0x104b14='\x1bC[%1]%2\x1bPREVCOLOR[0]'['format'](_0x538efd,_0x41321e);this[_0x21dbb0(0x381)][_0x21dbb0(0x216)]([_0x3d8106,_0x104b14]);}},Window_Base[_0x3e735a(0x239)]['processActorNameAutoColorChanges']=function(_0xfb318f){const _0x4103ed=_0x3e735a;this[_0x4103ed(0x381)]===undefined&&this[_0x4103ed(0x444)]();for(autoColor of this['_autoColorActorNames']){if(_0x4103ed(0x2d8)!==_0x4103ed(0x28b))_0xfb318f=_0xfb318f['replace'](autoColor[0x0],autoColor[0x1]);else{const _0x1ce76a=_0x290576(_0x277d52['$1']);_0x1ce76a!==_0x5c7189[_0x3977][_0x4103ed(0x297)]&&(_0x4d39d9(_0x4103ed(0x264)[_0x4103ed(0x45a)](_0x66daae,_0x1ce76a)),_0x5d5911[_0x4103ed(0x460)]());}}return _0xfb318f;},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x324)]=function(_0x191437,_0x189f13,_0x578d5e){const _0x195b4b=_0x3e735a;if(!_0x191437)return'';const _0x1b0866=_0x191437[_0x189f13];let _0x5ba186='';if(_0x1b0866&&_0x578d5e&&_0x1b0866[_0x195b4b(0x338)]){if(_0x195b4b(0x3d6)===_0x195b4b(0x23c))for(const _0x5a43dc in _0x169f3c){this['contents'][_0x5a43dc]=_0x3fbd54[_0x5a43dc];}else{const _0x5638fb=_0x195b4b(0x2bc);_0x5ba186=_0x5638fb['format'](_0x1b0866[_0x195b4b(0x338)],_0x1b0866[_0x195b4b(0x377)]);}}else _0x1b0866?_0x5ba186=_0x1b0866[_0x195b4b(0x377)]:_0x195b4b(0x24c)===_0x195b4b(0x1ef)?(_0x577292(_0x195b4b(0x264)[_0x195b4b(0x45a)](_0x1baac1,_0x518715)),_0x5d6b5c['exit']()):_0x5ba186='';if(this[_0x195b4b(0x3e6)]()){if(_0x195b4b(0x3eb)===_0x195b4b(0x40c)){const _0x4e3c3=-(_0x2ffaf4[_0x195b4b(0x2cd)](_0x2a1bef[_0x195b4b(0x28f)]-_0x1580ab[_0x195b4b(0x34b)])/0x2),_0x21b47c=_0x4e3c3+_0x171751[_0x195b4b(0x28f)]-this[_0x195b4b(0x28f)],_0x403fec=-(_0x1828a5[_0x195b4b(0x2cd)](_0x2d6fe9[_0x195b4b(0x313)]-_0x57dcc3[_0x195b4b(0x1de)])/0x2),_0x24af0e=_0x403fec+_0x297151[_0x195b4b(0x313)]-this[_0x195b4b(0x313)];this['x']=this['x']['clamp'](_0x4e3c3,_0x21b47c),this['y']=this['y']['clamp'](_0x403fec,_0x24af0e);}else _0x5ba186=this[_0x195b4b(0x42a)](_0x5ba186,_0x191437);}return _0x5ba186;},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x30c)]=function(_0x2991ae){const _0xd70357=_0x3e735a,_0x57d105=$gameParty[_0xd70357(0x2a2)]();if(_0x57d105['id']<0x0)return'';let _0x340568=null;if(_0x57d105[_0xd70357(0x458)]===0x0)_0x340568=$dataItems[_0x57d105['id']];if(_0x57d105[_0xd70357(0x458)]===0x1)_0x340568=$dataWeapons[_0x57d105['id']];if(_0x57d105[_0xd70357(0x458)]===0x2)_0x340568=$dataArmors[_0x57d105['id']];if(!_0x340568)return'';return _0x2991ae?'\x1bi[%1]%2'[_0xd70357(0x45a)](_0x340568[_0xd70357(0x338)],_0x340568[_0xd70357(0x377)]):_0x340568['name'];},Window_Base['prototype'][_0x3e735a(0x459)]=function(){const _0x422894=_0x3e735a,_0x53430b=$gameParty[_0x422894(0x2a2)]();if(_0x53430b['id']<=0x0)return'';return _0x53430b[_0x422894(0x32d)];},Window_Base['prototype'][_0x3e735a(0x42a)]=function(_0x444292,_0x4ef5e1){const _0x313fc8=_0x3e735a,_0x42b751=VisuMZ['MessageCore'][_0x313fc8(0x318)]['AutoColor'];let _0x5c7fda=0x0;if(_0x4ef5e1===$dataActors)_0x5c7fda=_0x42b751[_0x313fc8(0x1e7)];if(_0x4ef5e1===$dataClasses)_0x5c7fda=_0x42b751[_0x313fc8(0x364)];if(_0x4ef5e1===$dataSkills)_0x5c7fda=_0x42b751['Skills'];if(_0x4ef5e1===$dataItems)_0x5c7fda=_0x42b751[_0x313fc8(0x451)];if(_0x4ef5e1===$dataWeapons)_0x5c7fda=_0x42b751[_0x313fc8(0x26d)];if(_0x4ef5e1===$dataArmors)_0x5c7fda=_0x42b751[_0x313fc8(0x2b9)];if(_0x4ef5e1===$dataEnemies)_0x5c7fda=_0x42b751['Enemies'];if(_0x4ef5e1===$dataStates)_0x5c7fda=_0x42b751[_0x313fc8(0x2bd)];return _0x5c7fda>0x0&&('qZlvn'!==_0x313fc8(0x36b)?_0x444292=_0x313fc8(0x1e9)[_0x313fc8(0x45a)](_0x5c7fda,_0x444292):_0x41f1c9[_0x313fc8(0x2a0)]=_0x5b65db[_0x313fc8(0x2a0)][_0x313fc8(0x1e5)](0x0,_0x143cbd[_0x313fc8(0x2d2)])+'\x0a'+_0x2cecb4[_0x313fc8(0x2a0)][_0x313fc8(0x37a)](_0x15003d[_0x313fc8(0x2d2)])),_0x444292;},Window_Base['prototype'][_0x3e735a(0x1f2)]=function(_0x3d68fd){const _0x22a4d6=_0x3e735a;_0x3d68fd=_0x3d68fd[_0x22a4d6(0x262)](/<(?:WORDWRAP|WORD WRAP)>/gi,(_0xf59416,_0x2f49db)=>this['setWordWrap'](!![])),_0x3d68fd=_0x3d68fd['replace'](/<(?:NOWORDWRAP|NO WORD WRAP)>/gi,(_0x4acd85,_0x19dc79)=>this[_0x22a4d6(0x3f9)](![])),_0x3d68fd=_0x3d68fd[_0x22a4d6(0x262)](/<\/(?:WORDWRAP|WORD WRAP)>/gi,(_0x55f391,_0x184492)=>this[_0x22a4d6(0x3f9)](![]));if(_0x3d68fd[_0x22a4d6(0x2db)](Window_Message[_0x22a4d6(0x1fd)]))this[_0x22a4d6(0x3f9)](![]);else{if(_0x3d68fd[_0x22a4d6(0x2db)](Window_Message[_0x22a4d6(0x387)])){if(_0x22a4d6(0x3fa)==='pfpnJ')return _0xad5e4b[_0x22a4d6(0x208)](_0x3ed9fa,this['_moveEasingType']);else this[_0x22a4d6(0x3f9)](![]);}}if(!this[_0x22a4d6(0x2ce)]())return _0x3d68fd;if(_0x3d68fd[_0x22a4d6(0x284)]<=0x0)return _0x3d68fd;if(VisuMZ[_0x22a4d6(0x26f)][_0x22a4d6(0x318)][_0x22a4d6(0x3bf)][_0x22a4d6(0x247)]){if(_0x22a4d6(0x342)!==_0x22a4d6(0x342)){if(_0x3dc73c['Match']===_0x5d1af5){if(_0xe96188['Type']==='')this['obtainEscapeParam'](_0x5bb600);_0x5e1efe['ActionJS']['call'](this,_0x37c7d6);if(this[_0x22a4d6(0x31b)]===_0x40cab4){const _0x2fdb86=_0x560123[_0x22a4d6(0x391)]||0x0;if(_0x2fdb86>0x0)this[_0x22a4d6(0x351)](_0x2fdb86);}}}else _0x3d68fd=_0x3d68fd[_0x22a4d6(0x262)](/[\n\r]+/g,'\x20'),_0x3d68fd=_0x3d68fd[_0x22a4d6(0x262)](/<(?:BR|LINEBREAK)>/gi,'\x20\x0a');}else _0x22a4d6(0x20d)!=='lSJOI'?(_0x3d68fd=_0x3d68fd[_0x22a4d6(0x262)](/[\n\r]+/g,''),_0x3d68fd=_0x3d68fd[_0x22a4d6(0x262)](/<(?:BR|LINEBREAK)>/gi,'\x0a')):(this[_0x22a4d6(0x24f)]['x']=_0xdfad3c[_0x22a4d6(0x2dc)](this[_0x22a4d6(0x28f)]/0x2),this[_0x22a4d6(0x24f)]['anchor']['x']=0.5,this['_dimmerSprite'][_0x22a4d6(0x33a)]['x']=_0x10440e[_0x22a4d6(0x28f)]);return _0x3d68fd=this['addWrapBreakAfterPunctuation'](_0x3d68fd),_0x3d68fd=_0x3d68fd[_0x22a4d6(0x35e)]('\x20')[_0x22a4d6(0x26a)](_0x22a4d6(0x36a)),_0x3d68fd=_0x3d68fd[_0x22a4d6(0x262)](/<(?:BR|LINEBREAK)>/gi,'\x0a'),_0x3d68fd=_0x3d68fd[_0x22a4d6(0x262)](/<LINE\x1bWrapBreak[0]BREAK>/gi,'\x0a'),_0x3d68fd;},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x347)]=function(_0x4388e1){return _0x4388e1;},VisuMZ[_0x3e735a(0x26f)][_0x3e735a(0x37c)]=Window_Base[_0x3e735a(0x239)][_0x3e735a(0x400)],Window_Base[_0x3e735a(0x239)][_0x3e735a(0x400)]=function(_0x4b6657){const _0x42c332=_0x3e735a;VisuMZ['MessageCore'][_0x42c332(0x37c)][_0x42c332(0x2e8)](this,_0x4b6657),this[_0x42c332(0x257)](_0x4b6657);},VisuMZ[_0x3e735a(0x26f)][_0x3e735a(0x21b)]=Window_Base[_0x3e735a(0x239)][_0x3e735a(0x3cc)],Window_Base[_0x3e735a(0x239)][_0x3e735a(0x3cc)]=function(_0x331400,_0x271b36){const _0x27f5fc=_0x3e735a;VisuMZ[_0x27f5fc(0x26f)][_0x27f5fc(0x21b)][_0x27f5fc(0x2e8)](this,_0x331400,_0x271b36),_0x271b36==='\x1bWrapBreak[0]'&&this[_0x27f5fc(0x456)](_0x331400);},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x206)]=function(_0x3cbf08){const _0x3b74a3=_0x3e735a;var _0x4604d5=/^\<(.*?)\>/[_0x3b74a3(0x2ef)](_0x3cbf08[_0x3b74a3(0x2a0)][_0x3b74a3(0x1e5)](_0x3cbf08[_0x3b74a3(0x2d2)]));return _0x4604d5?(_0x3cbf08[_0x3b74a3(0x2d2)]+=_0x4604d5[0x0][_0x3b74a3(0x284)],String(_0x4604d5[0x0][_0x3b74a3(0x1e5)](0x1,_0x4604d5[0x0]['length']-0x1))):'';},VisuMZ[_0x3e735a(0x26f)][_0x3e735a(0x2a5)]=Window_Base[_0x3e735a(0x239)]['processEscapeCharacter'],Window_Base[_0x3e735a(0x239)]['processEscapeCharacter']=function(_0x3dcb75,_0x3ceddb){const _0x3e07aa=_0x3e735a;switch(_0x3dcb75){case'C':_0x3ceddb[_0x3e07aa(0x330)]?VisuMZ[_0x3e07aa(0x26f)][_0x3e07aa(0x2a5)][_0x3e07aa(0x2e8)](this,_0x3dcb75,_0x3ceddb):this[_0x3e07aa(0x33c)](_0x3ceddb);break;case'I':case'{':case'}':VisuMZ[_0x3e07aa(0x26f)]['Window_Base_processEscapeCharacter'][_0x3e07aa(0x2e8)](this,_0x3dcb75,_0x3ceddb);break;case'FS':this[_0x3e07aa(0x39d)](_0x3ceddb);break;case'PX':this[_0x3e07aa(0x27d)](_0x3ceddb);break;case'PY':this[_0x3e07aa(0x240)](_0x3ceddb);break;case _0x3e07aa(0x448):this[_0x3e07aa(0x423)](this[_0x3e07aa(0x33c)](_0x3ceddb));break;case _0x3e07aa(0x22c):this[_0x3e07aa(0x2f4)](_0x3ceddb);break;case'COLORLOCK':this['processColorLock'](_0x3ceddb);break;case _0x3e07aa(0x349):this['processCommonEvent'](_0x3ceddb);break;case _0x3e07aa(0x2dd):this[_0x3e07aa(0x1ec)](this[_0x3e07aa(0x33c)](_0x3ceddb));break;case _0x3e07aa(0x1f8):this[_0x3e07aa(0x1fe)](_0x3ceddb);break;case'PREVCOLOR':this['processPreviousColor'](_0x3ceddb);break;case _0x3e07aa(0x389):this[_0x3e07aa(0x2e7)](_0x3ceddb);break;case _0x3e07aa(0x390):this[_0x3e07aa(0x3c7)](_0x3ceddb);break;case _0x3e07aa(0x22e):this[_0x3e07aa(0x456)](_0x3ceddb);break;default:this[_0x3e07aa(0x425)](_0x3dcb75,_0x3ceddb);}},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x425)]=function(_0x2564dc,_0x511d43){const _0x20bfd4=_0x3e735a;for(const _0x50df93 of VisuMZ[_0x20bfd4(0x26f)][_0x20bfd4(0x318)]['TextCodeActions']){if(_0x20bfd4(0x3b2)==='HaVIz'){if(_0x50df93[_0x20bfd4(0x213)]===_0x2564dc){if('HdhdH'!==_0x20bfd4(0x361)){const _0x286758=_0x2ae71e[_0x20bfd4(0x26f)][_0x20bfd4(0x318)][_0x94efa9];_0x286758[_0x20bfd4(0x1f5)]((_0x93f943,_0x37212a)=>{const _0x35c81a=_0x20bfd4;if(!_0x93f943||!_0x37212a)return-0x1;return _0x37212a[_0x35c81a(0x213)]['length']-_0x93f943[_0x35c81a(0x213)]['length'];});}else{if(_0x50df93[_0x20bfd4(0x321)]==='')this[_0x20bfd4(0x33c)](_0x511d43);_0x50df93[_0x20bfd4(0x348)]['call'](this,_0x511d43);if(this[_0x20bfd4(0x31b)]===Window_Message){if(_0x20bfd4(0x352)===_0x20bfd4(0x352)){const _0xc398e8=_0x50df93['CommonEvent']||0x0;if(_0xc398e8>0x0)this[_0x20bfd4(0x351)](_0xc398e8);}else{this[_0x20bfd4(0x3d3)]=this['x']+_0x4abc6c,this[_0x20bfd4(0x422)]=this['y']+_0x287ea1,this['_moveTargetWidth']=this[_0x20bfd4(0x28f)]+(_0x2c9eb2||0x0),this[_0x20bfd4(0x376)]=this[_0x20bfd4(0x313)]+(_0x16f37d||0x0),this['_moveDuration']=_0x338519||0x1;if(this[_0x20bfd4(0x428)]<=0x0)this['_moveDuration']=0x1;this[_0x20bfd4(0x2d3)]=this[_0x20bfd4(0x428)],this[_0x20bfd4(0x3b3)]=_0x150e1a||0x0;if(_0x306357<=0x0)this['updateMove']();}}}}}else this[_0x20bfd4(0x253)][_0x20bfd4(0x1e6)]=!!_0x407d8;}},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x310)]=function(){const _0x495617=_0x3e735a;this['contents'][_0x495617(0x3af)]+=VisuMZ['MessageCore'][_0x495617(0x318)][_0x495617(0x340)][_0x495617(0x3be)],this['contents'][_0x495617(0x3af)]=Math[_0x495617(0x38d)](this[_0x495617(0x253)][_0x495617(0x3af)],VisuMZ[_0x495617(0x26f)][_0x495617(0x318)][_0x495617(0x340)][_0x495617(0x46c)]);},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x3c9)]=function(){const _0x1b148d=_0x3e735a;this[_0x1b148d(0x253)][_0x1b148d(0x3af)]-=VisuMZ[_0x1b148d(0x26f)][_0x1b148d(0x318)][_0x1b148d(0x340)][_0x1b148d(0x3be)],this[_0x1b148d(0x253)][_0x1b148d(0x3af)]=Math['max'](this[_0x1b148d(0x253)][_0x1b148d(0x3af)],VisuMZ[_0x1b148d(0x26f)][_0x1b148d(0x318)][_0x1b148d(0x340)][_0x1b148d(0x31e)]);},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x39d)]=function(_0x4d5079){const _0x534941=_0x3e735a,_0x3fab44=this[_0x534941(0x33c)](_0x4d5079);this[_0x534941(0x253)][_0x534941(0x3af)]=_0x3fab44['clamp'](VisuMZ[_0x534941(0x26f)][_0x534941(0x318)][_0x534941(0x340)][_0x534941(0x31e)],VisuMZ['MessageCore']['Settings']['General'][_0x534941(0x46c)]);},Window_Base['prototype'][_0x3e735a(0x20a)]=function(_0x3ca611){const _0x447b09=_0x3e735a;let _0x154f57=this[_0x447b09(0x253)][_0x447b09(0x3af)];const _0x3c6c72=/\x1b({|}|FS)(\[(\d+)])?/gi;for(;;){const _0x3d2c04=_0x3c6c72[_0x447b09(0x2ef)](_0x3ca611);if(!_0x3d2c04)break;const _0x1882d8=String(_0x3d2c04[0x1])['toUpperCase']();if(_0x1882d8==='{')this[_0x447b09(0x310)]();else{if(_0x1882d8==='}')this[_0x447b09(0x3c9)]();else _0x1882d8==='FS'&&(_0x447b09(0x2b0)!=='HYJvG'?this[_0x447b09(0x253)][_0x447b09(0x3af)]=parseInt(_0x3d2c04[0x3])['clamp'](VisuMZ[_0x447b09(0x26f)][_0x447b09(0x318)][_0x447b09(0x340)][_0x447b09(0x31e)],VisuMZ[_0x447b09(0x26f)][_0x447b09(0x318)]['General'][_0x447b09(0x46c)]):(_0x302120=_0x2ec3b0['replace'](/<(?:AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi,(_0x232a08,_0x47eab3)=>{const _0x2285b4=_0x447b09;return this[_0x2285b4(0x1ff)](_0x4b45db,!![],!![]),this[_0x2285b4(0x28c)](_0x2285b4(0x432),_0x520939(_0x47eab3)||0x1),'';}),_0x39653f=_0x75713c['replace'](/<(?:AUTOPARTY|AUTO PARTY):[ ](.*?)>/gi,(_0x50f6ee,_0x515ba4)=>{const _0x2d055c=_0x447b09;return this[_0x2d055c(0x1ff)](_0x1c139b,!![],!![]),this[_0x2d055c(0x28c)](_0x2d055c(0x2f3),_0x20c205(_0x515ba4)||0x0),'';}),_0x4e25b5=_0x1e9ec0['replace'](/<(?:AUTOENEMY|AUTO ENEMY):[ ](.*?)>/gi,(_0x596409,_0x12c5f1)=>{const _0x5d52cc=_0x447b09;return this[_0x5d52cc(0x1ff)](_0x28908a,!![],!![]),this[_0x5d52cc(0x28c)](_0x5d52cc(0x35f),_0x2f70b2(_0x12c5f1)||0x0),'';})));}if(this['contents']['fontSize']>_0x154f57){if(_0x447b09(0x214)===_0x447b09(0x447)){let _0xb7ce35='';if(_0xf9075a)_0xb7ce35+=_0x447b09(0x2ee)['format'](_0x2bc18[_0x447b09(0x338)]);return _0xb7ce35+=_0x5910e6['name'],_0xb7ce35;}else _0x154f57=this[_0x447b09(0x253)][_0x447b09(0x3af)];}}return _0x154f57;},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x27d)]=function(_0x33e4b5){const _0x687d3c=_0x3e735a;_0x33e4b5['x']=this[_0x687d3c(0x33c)](_0x33e4b5),VisuMZ[_0x687d3c(0x26f)][_0x687d3c(0x318)]['General'][_0x687d3c(0x32c)]&&(_0x33e4b5['x']+=_0x33e4b5[_0x687d3c(0x32b)]);},Window_Base['prototype'][_0x3e735a(0x240)]=function(_0x2a2eec){const _0xddb694=_0x3e735a;_0x2a2eec['y']=this['obtainEscapeParam'](_0x2a2eec);if(VisuMZ['MessageCore'][_0xddb694(0x318)][_0xddb694(0x340)][_0xddb694(0x32c)]){if(_0xddb694(0x35a)!==_0xddb694(0x435))_0x2a2eec['y']+=_0x2a2eec[_0xddb694(0x406)];else{_0x321b21[_0xddb694(0x26f)][_0xddb694(0x27f)][_0xddb694(0x2e8)](this),this[_0xddb694(0x270)]();if(this[_0xddb694(0x2da)])this[_0xddb694(0x276)]();}}},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x423)]=function(_0x1f2027){const _0x23562d=_0x3e735a;this[_0x23562d(0x253)]['fontBold']=!!_0x1f2027;},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x1ec)]=function(_0x5c696c){const _0x375ac5=_0x3e735a;this[_0x375ac5(0x253)][_0x375ac5(0x1e6)]=!!_0x5c696c;},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x2e7)]=function(_0x2d03ac){const _0x571dce=_0x3e735a,_0x253fbc=this['obtainEscapeParam'](_0x2d03ac);if(!_0x2d03ac['drawing'])return;switch(_0x253fbc){case 0x0:this[_0x571dce(0x21f)]('default');return;case 0x1:this['setTextAlignment'](_0x571dce(0x25a));break;case 0x2:this['setTextAlignment'](_0x571dce(0x229));break;case 0x3:this[_0x571dce(0x21f)]('right');break;}this[_0x571dce(0x257)](_0x2d03ac);},Window_Base['prototype'][_0x3e735a(0x257)]=function(_0x340927){const _0x1556b2=_0x3e735a;if(!_0x340927[_0x1556b2(0x330)])return;if(_0x340927[_0x1556b2(0x408)])return;if(this[_0x1556b2(0x24d)]()==='default')return;let _0x37ea56=_0x340927[_0x1556b2(0x2a0)][_0x1556b2(0x243)](_0x1556b2(0x3b1),_0x340927[_0x1556b2(0x2d2)]+0x1),_0x10002c=_0x340927[_0x1556b2(0x2a0)]['indexOf']('\x0a',_0x340927['index']+0x1);if(_0x37ea56<0x0)_0x37ea56=_0x340927[_0x1556b2(0x2a0)][_0x1556b2(0x284)]+0x1;if(_0x10002c>0x0)_0x37ea56=Math[_0x1556b2(0x38d)](_0x37ea56,_0x10002c);const _0x4c5ef2=_0x340927[_0x1556b2(0x2a0)][_0x1556b2(0x224)](_0x340927[_0x1556b2(0x2d2)],_0x37ea56),_0x18a636=this[_0x1556b2(0x34e)](_0x4c5ef2)[_0x1556b2(0x28f)],_0x3b8ead=_0x340927['width']||this[_0x1556b2(0x430)]-0x8,_0x284f08=this['constructor']===Window_Message&&$gameMessage[_0x1556b2(0x2c6)]()!=='';switch(this[_0x1556b2(0x24d)]()){case _0x1556b2(0x25a):_0x340927['x']=_0x340927[_0x1556b2(0x32b)];break;case _0x1556b2(0x229):_0x340927['x']=_0x340927[_0x1556b2(0x32b)],_0x340927['x']+=Math[_0x1556b2(0x2cd)]((_0x3b8ead-_0x18a636)/0x2);_0x284f08&&(_0x340927['x']-=_0x340927[_0x1556b2(0x32b)]/0x2);break;case'right':_0x340927['x']=_0x3b8ead-_0x18a636+_0x340927[_0x1556b2(0x32b)];_0x284f08&&(_0x340927['x']-=_0x340927[_0x1556b2(0x32b)]);break;}},Window_Base[_0x3e735a(0x239)]['textSizeExTextAlignment']=function(_0x45c20d){const _0x1ff372=_0x3e735a;_0x45c20d=_0x45c20d[_0x1ff372(0x262)](/\x1b!/g,''),_0x45c20d=_0x45c20d['replace'](/\x1b\|/g,''),_0x45c20d=_0x45c20d['replace'](/\x1b\./g,'');const _0x4dc3e6=this['createTextState'](_0x45c20d,0x0,0x0,0x0),_0x29f311=this['getPreservedFontSettings']();return _0x4dc3e6['drawing']=![],this['processAllText'](_0x4dc3e6),this[_0x1ff372(0x1ea)](_0x29f311),{'width':_0x4dc3e6[_0x1ff372(0x226)],'height':_0x4dc3e6[_0x1ff372(0x449)]};},Window_Base[_0x3e735a(0x239)]['processWrapBreak']=function(_0x35fe6a){const _0x30a8bc=_0x3e735a,_0xf5afb0=(_0x35fe6a[_0x30a8bc(0x408)]?-0x1:0x1)*this[_0x30a8bc(0x3ef)]('\x20');_0x35fe6a['x']+=_0xf5afb0;if(this[_0x30a8bc(0x33c)](_0x35fe6a)>0x0)_0x35fe6a['x']+=_0xf5afb0;if(_0x35fe6a[_0x30a8bc(0x408)])return;let _0x79f8d8=_0x35fe6a[_0x30a8bc(0x2a0)][_0x30a8bc(0x243)](_0x30a8bc(0x36a),_0x35fe6a['index']+0x1),_0x586590=_0x35fe6a[_0x30a8bc(0x2a0)][_0x30a8bc(0x243)]('\x0a',_0x35fe6a['index']+0x1);if(_0x79f8d8<0x0)_0x79f8d8=_0x35fe6a['text'][_0x30a8bc(0x284)]+0x1;if(_0x586590>0x0)_0x79f8d8=Math[_0x30a8bc(0x38d)](_0x79f8d8,_0x586590);const _0x4f9a0b=_0x35fe6a['text'][_0x30a8bc(0x224)](_0x35fe6a['index'],_0x79f8d8),_0x18d7ce=this['textSizeExWordWrap'](_0x4f9a0b)[_0x30a8bc(0x28f)];let _0x245232=_0x35fe6a[_0x30a8bc(0x28f)]||this['innerWidth'];if(this['constructor']===Window_Message){const _0x198552=$gameMessage[_0x30a8bc(0x2c6)]()===''?0x0:ImageManager['faceWidth']+0x14;_0x245232-=_0x198552,VisuMZ[_0x30a8bc(0x26f)]['Settings'][_0x30a8bc(0x3bf)]['TightWrap']&&(_0x30a8bc(0x2f2)!==_0x30a8bc(0x2f2)?this['contents'][_0x30a8bc(0x39e)]=!!_0x27a98e:_0x245232-=_0x198552);}let _0x2776a2=![];if(_0x35fe6a['x']+_0x18d7ce>_0x35fe6a[_0x30a8bc(0x32b)]+_0x245232)_0x2776a2=!![];if(_0x18d7ce===0x0)_0x2776a2=!![];_0x2776a2&&(_0x35fe6a[_0x30a8bc(0x2a0)]=_0x35fe6a[_0x30a8bc(0x2a0)][_0x30a8bc(0x1e5)](0x0,_0x35fe6a[_0x30a8bc(0x2d2)])+'\x0a'+_0x35fe6a[_0x30a8bc(0x2a0)][_0x30a8bc(0x37a)](_0x35fe6a[_0x30a8bc(0x2d2)]));},Window_Base['prototype']['textSizeExWordWrap']=function(_0x163490){const _0x2e6bca=_0x3e735a,_0x270ce7=this[_0x2e6bca(0x3f1)](_0x163490,0x0,0x0,0x0),_0x260e6b=this[_0x2e6bca(0x250)]();return _0x270ce7[_0x2e6bca(0x330)]=![],this[_0x2e6bca(0x3f9)](![]),this[_0x2e6bca(0x225)](_0x270ce7),this[_0x2e6bca(0x3f9)](!![]),this['returnPreservedFontSettings'](_0x260e6b),{'width':_0x270ce7[_0x2e6bca(0x226)],'height':_0x270ce7[_0x2e6bca(0x449)]};},Window_Base['prototype'][_0x3e735a(0x44b)]=function(_0x1087f9){const _0x54b10e=_0x3e735a;return this[_0x54b10e(0x33c)](_0x1087f9);},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x1fe)]=function(_0x43e077){const _0x327615=_0x3e735a,_0x3ac1c3=this[_0x327615(0x206)](_0x43e077)[_0x327615(0x35e)](',');if(!_0x43e077[_0x327615(0x330)])return;const _0x55cdda=_0x3ac1c3[0x0]['trim'](),_0x37b332=_0x3ac1c3[0x1]||0x0,_0x55f6cc=_0x3ac1c3[0x2]||0x0,_0x4fa3da=ImageManager[_0x327615(0x3ca)](_0x55cdda),_0x37d20e=this[_0x327615(0x253)][_0x327615(0x3cb)];_0x4fa3da['addLoadListener'](this[_0x327615(0x382)][_0x327615(0x207)](this,_0x4fa3da,_0x43e077['x'],_0x43e077['y'],_0x37b332,_0x55f6cc,_0x37d20e));},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x382)]=function(_0x5cf626,_0x4e799a,_0x196714,_0x474275,_0x3a9e1c,_0x1d19c9){const _0x4c0753=_0x3e735a;_0x474275=_0x474275||_0x5cf626[_0x4c0753(0x28f)],_0x3a9e1c=_0x3a9e1c||_0x5cf626['height'],this[_0x4c0753(0x34a)][_0x4c0753(0x3cb)]=_0x1d19c9,this[_0x4c0753(0x34a)][_0x4c0753(0x38a)](_0x5cf626,0x0,0x0,_0x5cf626[_0x4c0753(0x28f)],_0x5cf626[_0x4c0753(0x313)],_0x4e799a,_0x196714,_0x474275,_0x3a9e1c),this['contentsBack'][_0x4c0753(0x3cb)]=0xff;},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x2f4)]=function(_0x52a557){const _0x1fbf75=_0x3e735a,_0xa0ab5=this[_0x1fbf75(0x206)](_0x52a557)[_0x1fbf75(0x35e)](',');if(!_0x52a557[_0x1fbf75(0x330)])return;const _0x5857e7=_0xa0ab5[0x0]['trim'](),_0x2a7dd8=ImageManager['loadPicture'](_0x5857e7),_0x21fb1=JsonEx[_0x1fbf75(0x29f)](_0x52a557),_0x5b698a=this['contents']['paintOpacity'];_0x2a7dd8['addLoadListener'](this[_0x1fbf75(0x34c)][_0x1fbf75(0x207)](this,_0x2a7dd8,_0x21fb1,_0x5b698a));},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x34c)]=function(_0xa2996d,_0x51bed6,_0x227cae){const _0xb0eb73=_0x3e735a,_0xb09219=_0x51bed6[_0xb0eb73(0x28f)]||this[_0xb0eb73(0x430)],_0x1e287c=this['_index']!==undefined?this['itemHeight']():this[_0xb0eb73(0x259)],_0x15e366=_0xb09219/_0xa2996d[_0xb0eb73(0x28f)],_0x3eff4b=_0x1e287c/_0xa2996d[_0xb0eb73(0x313)],_0x423a8f=Math['min'](_0x15e366,_0x3eff4b,0x1),_0xafdb31=this['_index']!==undefined?(this['itemRectWithPadding'](0x0)[_0xb0eb73(0x313)]-this[_0xb0eb73(0x45f)]())/0x2:0x0,_0x4015ee=_0xa2996d[_0xb0eb73(0x28f)]*_0x423a8f,_0x25558b=_0xa2996d[_0xb0eb73(0x313)]*_0x423a8f,_0x362248=Math[_0xb0eb73(0x2cd)]((_0xb09219-_0x4015ee)/0x2)+_0x51bed6[_0xb0eb73(0x32b)],_0x112632=Math[_0xb0eb73(0x2cd)]((_0x1e287c-_0x25558b)/0x2)+_0x51bed6['startY']-_0xafdb31*0x2;this[_0xb0eb73(0x34a)][_0xb0eb73(0x3cb)]=_0x227cae,this[_0xb0eb73(0x34a)][_0xb0eb73(0x38a)](_0xa2996d,0x0,0x0,_0xa2996d[_0xb0eb73(0x28f)],_0xa2996d[_0xb0eb73(0x313)],_0x362248,_0x112632,_0x4015ee,_0x25558b),this[_0xb0eb73(0x34a)][_0xb0eb73(0x3cb)]=0xff;},Window_Base['prototype'][_0x3e735a(0x28d)]=function(_0x40b0fd){const _0x33a69d=_0x3e735a,_0x5e2081=this[_0x33a69d(0x33c)](_0x40b0fd);if(_0x40b0fd[_0x33a69d(0x330)])this[_0x33a69d(0x409)](_0x5e2081>0x0);},Window_Base[_0x3e735a(0x239)][_0x3e735a(0x3c7)]=function(_0x5796d2){const _0x274cee=_0x3e735a,_0xe4bed9=this[_0x274cee(0x33c)](_0x5796d2);this[_0x274cee(0x31b)]===Window_Message&&_0x5796d2[_0x274cee(0x330)]&&this[_0x274cee(0x368)](_0xe4bed9);},Window_Help[_0x3e735a(0x239)][_0x3e735a(0x36f)]=function(){const _0x496087=_0x3e735a;this[_0x496087(0x3f9)]($gameSystem['isHelpWindowWordWrap']());},Window_Help[_0x3e735a(0x239)][_0x3e735a(0x3e6)]=function(){return!![];},VisuMZ[_0x3e735a(0x26f)][_0x3e735a(0x36d)]=Window_Help[_0x3e735a(0x239)]['refresh'],Window_Help[_0x3e735a(0x239)][_0x3e735a(0x28a)]=function(){const _0x175f7f=_0x3e735a;this[_0x175f7f(0x35d)](),VisuMZ[_0x175f7f(0x26f)][_0x175f7f(0x36d)][_0x175f7f(0x2e8)](this),this[_0x175f7f(0x36f)]();},VisuMZ['MessageCore']['Window_Options_addGeneralOptions']=Window_Options['prototype'][_0x3e735a(0x467)],Window_Options['prototype']['addGeneralOptions']=function(){const _0x5e2ece=_0x3e735a;VisuMZ[_0x5e2ece(0x26f)][_0x5e2ece(0x30f)][_0x5e2ece(0x2e8)](this),this[_0x5e2ece(0x442)]();},Window_Options[_0x3e735a(0x239)][_0x3e735a(0x442)]=function(){const _0x258c71=_0x3e735a;VisuMZ[_0x258c71(0x26f)][_0x258c71(0x318)][_0x258c71(0x2e6)][_0x258c71(0x466)]&&this['addMessageCoreTextSpeedCommand']();},Window_Options[_0x3e735a(0x239)]['addMessageCoreTextSpeedCommand']=function(){const _0x52a67a=_0x3e735a,_0x20531a=TextManager[_0x52a67a(0x301)],_0xe64f72='textSpeed';this[_0x52a67a(0x1f9)](_0x20531a,_0xe64f72);},VisuMZ['MessageCore']['Window_Options_statusText']=Window_Options[_0x3e735a(0x239)][_0x3e735a(0x3a2)],Window_Options['prototype'][_0x3e735a(0x3a2)]=function(_0x3761d4){const _0xe2e14b=_0x3e735a,_0x10a86d=this[_0xe2e14b(0x1fb)](_0x3761d4);if(_0x10a86d===_0xe2e14b(0x3d2))return this[_0xe2e14b(0x404)]();return VisuMZ[_0xe2e14b(0x26f)][_0xe2e14b(0x296)]['call'](this,_0x3761d4);},VisuMZ['MessageCore'][_0x3e735a(0x3a0)]=Window_Options[_0x3e735a(0x239)][_0x3e735a(0x272)],Window_Options['prototype']['isVolumeSymbol']=function(_0xa45582){const _0x2cb83c=_0x3e735a;if(_0xa45582==='textSpeed')return!![];return VisuMZ[_0x2cb83c(0x26f)][_0x2cb83c(0x3a0)][_0x2cb83c(0x2e8)](this,_0xa45582);},Window_Options['prototype'][_0x3e735a(0x404)]=function(){const _0x5c3aeb=_0x3e735a,_0x21dd13=this[_0x5c3aeb(0x2bf)](_0x5c3aeb(0x3d2));if(_0x21dd13>0xa){if('IjRwO'!=='wTXVQ')return TextManager['instantTextSpeed'];else{const _0x5167f5=_0x5d3dbb>=0x1?_0x329f82[_0x5c3aeb(0x203)](_0x380965):null,_0x3d1e28=_0x5167f5?_0x5167f5[_0x5c3aeb(0x377)]():'',_0x1acf52=_0x2d01a2(_0x422114[_0x5c3aeb(0x26f)][_0x5c3aeb(0x318)][_0x5c3aeb(0x323)][_0x5c3aeb(0x1e7)]);return this['isAutoColorAffected']()&&_0x1acf52!==0x0?_0x5c3aeb(0x1e9)[_0x5c3aeb(0x45a)](_0x1acf52,_0x3d1e28):_0x3d1e28;}}else return _0x21dd13;},VisuMZ[_0x3e735a(0x26f)]['Window_Options_changeVolume']=Window_Options[_0x3e735a(0x239)]['changeVolume'],Window_Options['prototype'][_0x3e735a(0x201)]=function(_0x3c3763,_0x51b732,_0x5b93e7){const _0xd71534=_0x3e735a;if(_0x3c3763===_0xd71534(0x3d2))return this[_0xd71534(0x2ac)](_0x3c3763,_0x51b732,_0x5b93e7);VisuMZ['MessageCore']['Window_Options_changeVolume'][_0xd71534(0x2e8)](this,_0x3c3763,_0x51b732,_0x5b93e7);},Window_Options['prototype'][_0x3e735a(0x2ac)]=function(_0x44080c,_0x5c27ca,_0x4ec113){const _0x4bf523=_0x3e735a,_0x2d16ad=this[_0x4bf523(0x2bf)](_0x44080c),_0x66a35=0x1,_0x41a06f=_0x2d16ad+(_0x5c27ca?_0x66a35:-_0x66a35);_0x41a06f>0xb&&_0x4ec113?this[_0x4bf523(0x380)](_0x44080c,0x1):this['changeValue'](_0x44080c,_0x41a06f[_0x4bf523(0x21c)](0x1,0xb));},Window_Message[_0x3e735a(0x239)][_0x3e735a(0x3b4)]=function(){const _0x37224a=_0x3e735a;Window_Base[_0x37224a(0x239)][_0x37224a(0x3b4)][_0x37224a(0x2e8)](this),VisuMZ[_0x37224a(0x26f)][_0x37224a(0x318)][_0x37224a(0x340)][_0x37224a(0x2aa)]&&this[_0x37224a(0x2a6)]();},Window_Message[_0x3e735a(0x239)][_0x3e735a(0x2a6)]=function(){const _0x3ccd15=_0x3e735a;this[_0x3ccd15(0x24f)]['x']=Math[_0x3ccd15(0x2dc)](this[_0x3ccd15(0x28f)]/0x2),this[_0x3ccd15(0x24f)][_0x3ccd15(0x3da)]['x']=0.5,this[_0x3ccd15(0x24f)]['scale']['x']=Graphics['width'];},VisuMZ[_0x3e735a(0x26f)]['Window_Message_clearFlags']=Window_Message[_0x3e735a(0x239)]['clearFlags'],Window_Message[_0x3e735a(0x239)]['clearFlags']=function(){const _0x4c7e89=_0x3e735a;VisuMZ[_0x4c7e89(0x26f)][_0x4c7e89(0x2f1)][_0x4c7e89(0x2e8)](this),this[_0x4c7e89(0x35d)](),this[_0x4c7e89(0x36f)](),this['setColorLock'](![]),this[_0x4c7e89(0x21f)](_0x4c7e89(0x3ae)),this['setTextDelay'](VisuMZ['MessageCore']['Settings'][_0x4c7e89(0x340)][_0x4c7e89(0x2c2)]);},Window_Message[_0x3e735a(0x239)][_0x3e735a(0x36f)]=function(){const _0x3537a5=_0x3e735a;this['setWordWrap']($gameSystem[_0x3537a5(0x3aa)]());},Window_Message[_0x3e735a(0x239)]['isAutoColorAffected']=function(){return!![];},Window_Message[_0x3e735a(0x239)][_0x3e735a(0x279)]=function(_0x28226c){const _0x4660a9=_0x3e735a,_0x3d9466=0xb-ConfigManager[_0x4660a9(0x3d2)];_0x28226c=Math[_0x4660a9(0x2dc)](_0x28226c*_0x3d9466),this[_0x4660a9(0x254)]=_0x28226c,this[_0x4660a9(0x427)]=_0x28226c;},VisuMZ['MessageCore'][_0x3e735a(0x31a)]=Window_Message[_0x3e735a(0x239)][_0x3e735a(0x306)],Window_Message[_0x3e735a(0x239)][_0x3e735a(0x306)]=function(){const _0x31c233=_0x3e735a;return VisuMZ[_0x31c233(0x26f)]['Window_Message_isTriggered']['call'](this)||Input['isPressed'](VisuMZ['MessageCore'][_0x31c233(0x318)][_0x31c233(0x340)]['FastForwardKey']);},VisuMZ[_0x3e735a(0x26f)][_0x3e735a(0x212)]=Window_Message[_0x3e735a(0x239)][_0x3e735a(0x3a8)],Window_Message[_0x3e735a(0x239)][_0x3e735a(0x3a8)]=function(){const _0x3ef9bb=_0x3e735a;let _0x1a8809=this['y'];VisuMZ['MessageCore'][_0x3ef9bb(0x212)][_0x3ef9bb(0x2e8)](this);if(this[_0x3ef9bb(0x2ff)])this['y']=_0x1a8809;this[_0x3ef9bb(0x32a)](),this[_0x3ef9bb(0x302)]();},VisuMZ[_0x3e735a(0x26f)]['Window_Message_newPage']=Window_Message['prototype'][_0x3e735a(0x3ed)],Window_Message['prototype']['newPage']=function(_0x4decdf){const _0x550159=_0x3e735a;this['onNewPageMessageCore'](_0x4decdf),VisuMZ['MessageCore']['Window_Message_newPage'][_0x550159(0x2e8)](this,_0x4decdf),this['createContents']();},Window_Message[_0x3e735a(0x239)][_0x3e735a(0x2d7)]=function(_0x257950){const _0xfcc133=_0x3e735a;this[_0xfcc133(0x317)](_0x257950),this[_0xfcc133(0x2c7)](_0x257950),this[_0xfcc133(0x228)]();},VisuMZ[_0x3e735a(0x26f)]['Window_Message_terminateMessage']=Window_Message[_0x3e735a(0x239)]['terminateMessage'],Window_Message[_0x3e735a(0x239)][_0x3e735a(0x23b)]=function(){const _0x127f91=_0x3e735a;VisuMZ[_0x127f91(0x26f)]['Window_Message_terminateMessage'][_0x127f91(0x2e8)](this),this['clearFlags']();if(this[_0x127f91(0x2da)])this['messagePositionReset']();},Window_Message[_0x3e735a(0x239)][_0x3e735a(0x228)]=function(){const _0xe8884c=_0x3e735a;this['width']=$gameSystem[_0xe8884c(0x3dd)]()+this[_0xe8884c(0x3df)]();;this[_0xe8884c(0x28f)]=Math[_0xe8884c(0x38d)](Graphics[_0xe8884c(0x28f)],this[_0xe8884c(0x28f)]);const _0x111215=$gameSystem['getMessageWindowRows']();this[_0xe8884c(0x313)]=SceneManager[_0xe8884c(0x309)]['calcWindowHeight'](_0x111215,![])+this[_0xe8884c(0x261)](),this[_0xe8884c(0x313)]=Math[_0xe8884c(0x38d)](Graphics[_0xe8884c(0x313)],this['height']);if($gameTemp[_0xe8884c(0x2f0)])this[_0xe8884c(0x2b6)]();},Window_Message[_0x3e735a(0x239)]['addedWidth']=function(){return 0x0;},Window_Message[_0x3e735a(0x239)]['addedHeight']=function(){return 0x0;},Window_Message[_0x3e735a(0x239)][_0x3e735a(0x2b6)]=function(){const _0x3ee532=_0x3e735a;this['x']=(Graphics[_0x3ee532(0x34b)]-this[_0x3ee532(0x28f)])/0x2,$gameTemp['_centerMessageWindow']=undefined,this[_0x3ee532(0x302)]();},Window_Message[_0x3e735a(0x239)]['updateMove']=function(){const _0x105383=_0x3e735a,_0x4c7832={'x':this['x'],'y':this['y']};Window_Base['prototype'][_0x105383(0x1e3)][_0x105383(0x2e8)](this),this['updateNameBoxMove'](_0x4c7832);},Window_Message[_0x3e735a(0x239)][_0x3e735a(0x32f)]=function(){return!![];},Window_Message['prototype'][_0x3e735a(0x27b)]=function(_0x23fe80){const _0x1e3d5e=_0x3e735a;this[_0x1e3d5e(0x39c)]&&(this['_nameBoxWindow']['x']+=this['x']-_0x23fe80['x'],this['_nameBoxWindow']['y']+=this['y']-_0x23fe80['y']);},Window_Message[_0x3e735a(0x239)][_0x3e735a(0x3e3)]=function(_0x3fc329,_0x3b21df){const _0x56f009=_0x3e735a;this[_0x56f009(0x335)](this[_0x56f009(0x412)]['x'],this['_positionType']*(Graphics['boxHeight']-this[_0x56f009(0x313)])/0x2,this[_0x56f009(0x412)][_0x56f009(0x28f)],this['_resetRect'][_0x56f009(0x313)],_0x3fc329,_0x3b21df);},Window_Message[_0x3e735a(0x239)][_0x3e735a(0x44b)]=function(_0x27d100){const _0x1d373a=_0x3e735a,_0x2f21a3=Window_Base[_0x1d373a(0x239)][_0x1d373a(0x44b)][_0x1d373a(0x2e8)](this,_0x27d100);_0x27d100['drawing']&&this['launchMessageCommonEvent'](_0x2f21a3);},Window_Message[_0x3e735a(0x239)][_0x3e735a(0x351)]=function(_0x3e9e35){const _0x232340=_0x3e735a;if($gameParty['inBattle']()){}else $gameMap[_0x232340(0x1ed)](_0x3e9e35);},Window_Message[_0x3e735a(0x239)][_0x3e735a(0x440)]=function(_0x94462){const _0x172df8=_0x3e735a;this[_0x172df8(0x254)]--,this['_textDelayCount']<=0x0&&(this[_0x172df8(0x24a)](_0x94462),Window_Base[_0x172df8(0x239)][_0x172df8(0x440)][_0x172df8(0x2e8)](this,_0x94462));},Window_Message[_0x3e735a(0x239)][_0x3e735a(0x24a)]=function(_0x562f19){const _0x4244f7=_0x3e735a;this[_0x4244f7(0x254)]=this[_0x4244f7(0x427)];if(this[_0x4244f7(0x427)]<=0x0)this['_showFast']=!![];},VisuMZ[_0x3e735a(0x26f)]['Window_Message_processEscapeCharacter']=Window_Message[_0x3e735a(0x239)][_0x3e735a(0x2c8)],Window_Message[_0x3e735a(0x239)][_0x3e735a(0x2c8)]=function(_0x37c770,_0x503a3f){const _0xe1b515=_0x3e735a;!_0x503a3f[_0xe1b515(0x330)]?Window_Base['prototype']['processEscapeCharacter'][_0xe1b515(0x2e8)](this,_0x37c770,_0x503a3f):VisuMZ[_0xe1b515(0x26f)][_0xe1b515(0x242)]['call'](this,_0x37c770,_0x503a3f);},Window_Message[_0x3e735a(0x239)][_0x3e735a(0x317)]=function(_0x2d4b21){const _0x3e9bdc=_0x3e735a;let _0x384a05=_0x2d4b21[_0x3e9bdc(0x2a0)];this[_0x3e9bdc(0x341)]={};if(this[_0x3e9bdc(0x2ce)]())return _0x384a05;_0x384a05=_0x384a05[_0x3e9bdc(0x262)](/<POSITION:[ ]*(.*)>/gi,(_0x58b4d3,_0x3f72d6)=>{const _0x50f126=_0x3e9bdc,_0x36ff73=_0x3f72d6['split'](',')[_0x50f126(0x367)](_0x5684f5=>Number(_0x5684f5)||0x0);if(_0x36ff73[0x0]!==undefined)this['_forcedPosition']['x']=Number(_0x36ff73[0x0]);if(_0x36ff73[0x1]!==undefined)this[_0x50f126(0x341)]['y']=Number(_0x36ff73[0x1]);if(_0x36ff73[0x2]!==undefined)this[_0x50f126(0x341)][_0x50f126(0x28f)]=Number(_0x36ff73[0x2]);if(_0x36ff73[0x3]!==undefined)this[_0x50f126(0x341)]['height']=Number(_0x36ff73[0x3]);return'';}),_0x384a05=_0x384a05['replace'](/<COORDINATES:[ ]*(.*)>/gi,(_0x4ac9ab,_0x3f74e7)=>{const _0x89538b=_0x3e9bdc;if('XdUrk'===_0x89538b(0x315)){const _0x3175fe=_0x3f74e7[_0x89538b(0x35e)](',')[_0x89538b(0x367)](_0x5e30ad=>Number(_0x5e30ad)||0x0);if(_0x3175fe[0x0]!==undefined)this['_forcedPosition']['x']=Number(_0x3175fe[0x0]);if(_0x3175fe[0x1]!==undefined)this['_forcedPosition']['y']=Number(_0x3175fe[0x1]);return'';}else{const _0x39587e=this[_0x89538b(0x3f1)](_0xd81b8c,0x0,0x0,0x0),_0xfea994=this[_0x89538b(0x250)]();return _0x39587e['drawing']=![],this[_0x89538b(0x3f9)](![]),this['processAllText'](_0x39587e),this[_0x89538b(0x3f9)](!![]),this[_0x89538b(0x1ea)](_0xfea994),{'width':_0x39587e[_0x89538b(0x226)],'height':_0x39587e[_0x89538b(0x449)]};}}),_0x384a05=_0x384a05['replace'](/<DIMENSIONS:[ ]*(.*)>/gi,(_0x1bdcc1,_0x4bcd9e)=>{const _0x95c34e=_0x3e9bdc;if(_0x95c34e(0x235)!==_0x95c34e(0x235)){if(this[_0x95c34e(0x23e)]===_0x1a1c51)this[_0x95c34e(0x35b)]();return this['_lastGainedItemData'];}else{const _0x1a2dc8=_0x4bcd9e[_0x95c34e(0x35e)](',')[_0x95c34e(0x367)](_0x38ea17=>Number(_0x38ea17)||0x0);if(_0x1a2dc8[0x0]!==undefined)this['_forcedPosition'][_0x95c34e(0x28f)]=Number(_0x1a2dc8[0x2]);if(_0x1a2dc8[0x1]!==undefined)this['_forcedPosition'][_0x95c34e(0x313)]=Number(_0x1a2dc8[0x3]);return'';}}),_0x2d4b21[_0x3e9bdc(0x2a0)]=_0x384a05;},Window_Message[_0x3e735a(0x239)][_0x3e735a(0x32a)]=function(){const _0xc4d749=_0x3e735a;this[_0xc4d749(0x341)]=this[_0xc4d749(0x341)]||{};const _0xba8082=['x','y','width',_0xc4d749(0x313)];for(const _0x247bbc of _0xba8082){_0xc4d749(0x2eb)===_0xc4d749(0x394)?(_0x27311d['MessageCore'][_0xc4d749(0x21b)][_0xc4d749(0x2e8)](this,_0x5e07d8,_0x317870),_0x5b8e09===_0xc4d749(0x36a)&&this[_0xc4d749(0x456)](_0x36b078)):this[_0xc4d749(0x341)][_0x247bbc]!==undefined&&(_0xc4d749(0x37b)!=='LKPQy'?this[_0x247bbc]=Number(this[_0xc4d749(0x341)][_0x247bbc]):(this[_0xc4d749(0x317)](_0x194688),this[_0xc4d749(0x2c7)](_0x166896),this[_0xc4d749(0x228)]()));}},Window_Message[_0x3e735a(0x239)][_0x3e735a(0x2c7)]=function(_0x102206){const _0x2b9d95=_0x3e735a;let _0x5c4c7c=_0x102206[_0x2b9d95(0x2a0)];_0x5c4c7c=_0x5c4c7c[_0x2b9d95(0x262)](/<(?:AUTO|AUTOSIZE|AUTO SIZE)>/gi,()=>{const _0x45412c=_0x2b9d95;if(_0x45412c(0x218)!=='gHNvv'){const _0x101c7d={'x':this['x'],'y':this['y']};_0x2a94b7[_0x45412c(0x239)][_0x45412c(0x1e3)][_0x45412c(0x2e8)](this),this[_0x45412c(0x27b)](_0x101c7d);}else return this['processAutoSize'](_0x5c4c7c,!![],!![]),this['processAutoPosition'](_0x45412c(0x249)),'';}),_0x5c4c7c=_0x5c4c7c[_0x2b9d95(0x262)](/<(?:AUTOWIDTH|AUTO WIDTH)>/gi,()=>{const _0x12e403=_0x2b9d95;return this[_0x12e403(0x1ff)](_0x5c4c7c,!![],![]),this[_0x12e403(0x28c)](_0x12e403(0x249)),'';}),_0x5c4c7c=_0x5c4c7c['replace'](/<(?:AUTOHEIGHT|AUTO HEIGHT)>/gi,()=>{const _0x4438c4=_0x2b9d95;return this['processAutoSize'](_0x5c4c7c,![],!![]),this[_0x4438c4(0x28c)](_0x4438c4(0x249)),'';});if(SceneManager[_0x2b9d95(0x360)]())_0x5c4c7c=_0x5c4c7c[_0x2b9d95(0x262)](/<(?:AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi,(_0x202f05,_0xe25f05)=>{const _0x11f9b0=_0x2b9d95;if(_0x11f9b0(0x3ac)!==_0x11f9b0(0x1fa))return this[_0x11f9b0(0x1ff)](_0x5c4c7c,!![],!![]),this[_0x11f9b0(0x28c)](_0x11f9b0(0x432),Number(_0xe25f05)||0x1),'';else{const _0x4b8de9=_0x5235fd['getLastGainedItemData']();if(_0x4b8de9['id']<0x0)return'';let _0x291060=null;if(_0x4b8de9[_0x11f9b0(0x458)]===0x0)_0x291060=_0xd28729[_0x4b8de9['id']];if(_0x4b8de9[_0x11f9b0(0x458)]===0x1)_0x291060=_0x4661af[_0x4b8de9['id']];if(_0x4b8de9[_0x11f9b0(0x458)]===0x2)_0x291060=_0xfa3583[_0x4b8de9['id']];if(!_0x291060)return'';return _0x4c1555?_0x11f9b0(0x2bc)[_0x11f9b0(0x45a)](_0x291060[_0x11f9b0(0x338)],_0x291060[_0x11f9b0(0x377)]):_0x291060[_0x11f9b0(0x377)];}}),_0x5c4c7c=_0x5c4c7c['replace'](/<(?:AUTOPARTY|AUTO PARTY):[ ](.*?)>/gi,(_0x462428,_0x293ec5)=>{const _0x2c3e94=_0x2b9d95;return this[_0x2c3e94(0x1ff)](_0x5c4c7c,!![],!![]),this[_0x2c3e94(0x28c)](_0x2c3e94(0x2f3),Number(_0x293ec5)||0x0),'';}),_0x5c4c7c=_0x5c4c7c[_0x2b9d95(0x262)](/<(?:AUTOENEMY|AUTO ENEMY):[ ](.*?)>/gi,(_0x3b966d,_0x34e5f9)=>{const _0x4eb0aa=_0x2b9d95;if(_0x4eb0aa(0x2d1)!==_0x4eb0aa(0x2d1)){let _0x52dbfa=_0x1a131e;return _0x52dbfa=_0x52dbfa['replace'](/<(?:BR|LINEBREAK)>/gi,'\x0a'),_0x52dbfa=_0x52dbfa['replace'](/<LINE\x1bWrapBreak[0]BREAK>/gi,'\x0a'),_0x52dbfa;}else return this[_0x4eb0aa(0x1ff)](_0x5c4c7c,!![],!![]),this[_0x4eb0aa(0x28c)](_0x4eb0aa(0x35f),Number(_0x34e5f9)||0x0),'';});else SceneManager['isSceneMap']()&&('TDSrh'===_0x2b9d95(0x29a)?this[_0x2b9d95(0x380)](_0x3f3f07,_0x26e9cd[_0x2b9d95(0x21c)](0x1,0xb)):(_0x5c4c7c=_0x5c4c7c['replace'](/<(?:AUTOPLAYER|AUTO PLAYER)>/gi,(_0x1b558c,_0x3fb89b)=>{const _0x5a3990=_0x2b9d95;return this[_0x5a3990(0x1ff)](_0x5c4c7c,!![],!![]),this[_0x5a3990(0x28c)]('map\x20player',0x0),'';}),_0x5c4c7c=_0x5c4c7c[_0x2b9d95(0x262)](/<(?:AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi,(_0x1235d8,_0x475f4b)=>{const _0x4d6cc7=_0x2b9d95;return this[_0x4d6cc7(0x1ff)](_0x5c4c7c,!![],!![]),this[_0x4d6cc7(0x28c)](_0x4d6cc7(0x238),Number(_0x475f4b)||0x1),'';}),_0x5c4c7c=_0x5c4c7c[_0x2b9d95(0x262)](/<(?:AUTOPARTY|AUTO PARTY):[ ](.*?)>/gi,(_0x42e41a,_0x5e854e)=>{const _0x5b6cc5=_0x2b9d95;return'Oeuaa'!=='gEzEk'?(this[_0x5b6cc5(0x1ff)](_0x5c4c7c,!![],!![]),this[_0x5b6cc5(0x28c)](_0x5b6cc5(0x2c5),Number(_0x5e854e)||0x0),''):_0x40268f;}),_0x5c4c7c=_0x5c4c7c[_0x2b9d95(0x262)](/<(?:AUTOEVENT|AUTO EVENT):[ ](.*?)>/gi,(_0x1bf864,_0x62f50d)=>{const _0x18e6d0=_0x2b9d95;return this[_0x18e6d0(0x1ff)](_0x5c4c7c,!![],!![]),this[_0x18e6d0(0x28c)]('map\x20event',Number(_0x62f50d)||0x0),'';})));_0x102206['text']=_0x5c4c7c;},Window_Message[_0x3e735a(0x1fd)]=/<(?:AUTO|AUTOSIZE|AUTO SIZE|AUTOWIDTH|AUTO WIDTH|AUTOHEIGHT|AUTO HEIGHT|AUTOPLAYER|AUTO PLAYER)>/gi,Window_Message[_0x3e735a(0x387)]=/<(?:AUTOPARTY|AUTO PARTY|AUTOPLAYER|AUTO PLAYER|AUTOEVENT|AUTO EVENT|AUTOENEMY|AUTO ENEMY|AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi,Window_Message[_0x3e735a(0x239)]['processAutoSize']=function(_0x2bfd56,_0xc2a3e9,_0x5d4379){const _0x38d40d=_0x3e735a;_0x2bfd56=_0x2bfd56[_0x38d40d(0x262)](Window_Message[_0x38d40d(0x1fd)],''),_0x2bfd56=_0x2bfd56['replace'](Window_Message['_autoPosRegExp'],''),this['_autoSizeCheck']=!![];const _0x4ac484=this[_0x38d40d(0x2b8)](_0x2bfd56);if(_0xc2a3e9){if('kcLJn'===_0x38d40d(0x358)){let _0x61e543=_0x4ac484[_0x38d40d(0x28f)]+$gameSystem[_0x38d40d(0x319)]()*0x2+0x6;const _0x154e0b=$gameMessage['faceName']()!=='',_0x79a900=ImageManager['faceWidth'],_0x331724=0x14;_0x61e543+=_0x154e0b?_0x79a900+_0x331724:0x4;if(_0x61e543%0x2!==0x0)_0x61e543+=0x1;$gameSystem[_0x38d40d(0x418)](_0x61e543);}else this[_0x38d40d(0x2a6)]();}if(_0x5d4379){let _0x2b9d8a=Math['ceil'](_0x4ac484['height']/this[_0x38d40d(0x45f)]());$gameSystem[_0x38d40d(0x2c9)](_0x2b9d8a);}this[_0x38d40d(0x375)](),this[_0x38d40d(0x41e)]=![],this['_messagePositionReset']=!![];},Window_Message[_0x3e735a(0x239)][_0x3e735a(0x375)]=function(){const _0x40cf8c=_0x3e735a;this[_0x40cf8c(0x228)](),this[_0x40cf8c(0x3a8)](),this[_0x40cf8c(0x2b6)](),this[_0x40cf8c(0x443)](),this['contents'][_0x40cf8c(0x3d5)](),this[_0x40cf8c(0x384)]();},Window_Message['prototype'][_0x3e735a(0x28c)]=function(_0x2486c8,_0x5ce375){const _0xbb4427=_0x3e735a;switch(_0x2486c8[_0xbb4427(0x3f0)]()[_0xbb4427(0x255)]()){case _0xbb4427(0x432):this[_0xbb4427(0x2ff)]=$gameActors[_0xbb4427(0x203)](_0x5ce375);break;case _0xbb4427(0x2f3):this['_autoPositionTarget']=$gameParty[_0xbb4427(0x457)]()[_0x5ce375-0x1];break;case _0xbb4427(0x35f):this['_autoPositionTarget']=$gameTroop[_0xbb4427(0x457)]()[_0x5ce375-0x1];break;case _0xbb4427(0x2ed):this[_0xbb4427(0x2ff)]=$gamePlayer;break;case _0xbb4427(0x238):const _0x56f60f=$gameActors[_0xbb4427(0x203)](_0x5ce375)[_0xbb4427(0x2d2)]();if(_0x56f60f===0x0)this['_autoPositionTarget']=$gamePlayer;else{if('RHzNk'===_0xbb4427(0x1ee))this[_0xbb4427(0x2ff)]=$gamePlayer[_0xbb4427(0x366)]()[_0xbb4427(0x41f)](_0x56f60f-0x1);else return _0x30c6ee=_0x312e94[_0xbb4427(0x262)](/<(?:SHOW|HIDE|DISABLE|ENABLE)>/i,''),_0x40174c=_0x11e4d7[_0xbb4427(0x262)](/<(?:SHOW|HIDE|DISABLE|ENABLE)[ ](?:SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i,''),_0x585bc9=_0x311ae3[_0xbb4427(0x262)](/<(?:SHOW|HIDE|DISABLE|ENABLE)[ ](?:ALL|ANY)[ ](?:SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i,''),_0x3a6050;}break;case _0xbb4427(0x2c5):if(_0x5ce375===0x1)'aDppa'!==_0xbb4427(0x1df)?this['_autoPositionTarget']=$gamePlayer:(this[_0xbb4427(0x253)][_0xbb4427(0x3af)]-=_0x44752d['MessageCore'][_0xbb4427(0x318)][_0xbb4427(0x340)]['FontChangeValue'],this[_0xbb4427(0x253)][_0xbb4427(0x3af)]=_0x13a93b[_0xbb4427(0x3b7)](this[_0xbb4427(0x253)][_0xbb4427(0x3af)],_0x3a5bde[_0xbb4427(0x26f)][_0xbb4427(0x318)][_0xbb4427(0x340)][_0xbb4427(0x31e)]));else{if('CYztN'!==_0xbb4427(0x2e1))return this[_0xbb4427(0x1ff)](_0x379809,!![],![]),this[_0xbb4427(0x28c)]('none'),'';else this[_0xbb4427(0x2ff)]=$gamePlayer[_0xbb4427(0x366)]()['follower'](_0x5ce375-0x2);}break;case'map\x20event':this['_autoPositionTarget']=$gameMap[_0xbb4427(0x3cf)](_0x5ce375);break;}this['_autoPositionTarget']&&this['updateAutoPosition']();},VisuMZ['MessageCore']['Window_Message_synchronizeNameBox']=Window_Message[_0x3e735a(0x239)]['synchronizeNameBox'],Window_Message[_0x3e735a(0x239)][_0x3e735a(0x42f)]=function(){const _0x419df8=_0x3e735a;this['updateAutoPosition'](),VisuMZ[_0x419df8(0x26f)][_0x419df8(0x3f3)][_0x419df8(0x2e8)](this);},Window_Message[_0x3e735a(0x239)]['updateAutoPosition']=function(){const _0x8f55b=_0x3e735a;if(!this[_0x8f55b(0x2ff)])return;const _0x29e7f7=SceneManager[_0x8f55b(0x309)];if(!_0x29e7f7)return;if(!_0x29e7f7[_0x8f55b(0x465)])return;const _0x316ffc=_0x29e7f7[_0x8f55b(0x465)][_0x8f55b(0x3bd)](this[_0x8f55b(0x2ff)]);if(!_0x316ffc)return;let _0x20e6b9=_0x316ffc['x'];_0x20e6b9-=this['width']/0x2,_0x20e6b9-=(Graphics[_0x8f55b(0x28f)]-Graphics[_0x8f55b(0x34b)])/0x2;let _0x63390d=_0x316ffc['y'];_0x63390d-=this[_0x8f55b(0x313)],_0x63390d-=(Graphics[_0x8f55b(0x313)]-Graphics[_0x8f55b(0x1de)])/0x2,_0x63390d-=_0x316ffc[_0x8f55b(0x313)]+0x8,this['x']=Math[_0x8f55b(0x2dc)](_0x20e6b9),this['y']=Math[_0x8f55b(0x2dc)](_0x63390d),this[_0x8f55b(0x302)](!![],![]),this[_0x8f55b(0x39c)][_0x8f55b(0x3a8)]();},Window_Message[_0x3e735a(0x239)]['messagePositionReset']=function(){const _0x2c7734=_0x3e735a;this['_messagePositionReset']=![],this[_0x2c7734(0x2ff)]=undefined,$gameSystem[_0x2c7734(0x35b)](),this[_0x2c7734(0x375)](),this['openness']=0x0;},Window_Message[_0x3e735a(0x239)][_0x3e735a(0x3b8)]=function(_0xba5310){const _0xc9bca7=_0x3e735a;return Window_Base[_0xc9bca7(0x239)]['preConvertEscapeCharacters'][_0xc9bca7(0x2e8)](this,_0xba5310);},Window_Message[_0x3e735a(0x239)][_0x3e735a(0x43f)]=function(_0x5ed7c5){const _0x2780d4=_0x3e735a;return Window_Base['prototype'][_0x2780d4(0x43f)][_0x2780d4(0x2e8)](this,_0x5ed7c5);},Window_Message[_0x3e735a(0x239)]['flushTextState']=function(_0x36cff7){const _0x266c88=_0x3e735a;this[_0x266c88(0x210)](_0x36cff7),Window_Base['prototype'][_0x266c88(0x287)][_0x266c88(0x2e8)](this,_0x36cff7),this[_0x266c88(0x1e2)](_0x36cff7);},Window_Message['prototype'][_0x3e735a(0x210)]=function(_0x54d01e){},Window_Message[_0x3e735a(0x239)][_0x3e735a(0x1e2)]=function(_0x5848f2){},Window_NameBox['prototype'][_0x3e735a(0x3e6)]=function(){return![];},Window_NameBox[_0x3e735a(0x239)]['resetTextColor']=function(){const _0x2ca2cb=_0x3e735a;Window_Base['prototype'][_0x2ca2cb(0x260)][_0x2ca2cb(0x2e8)](this),this[_0x2ca2cb(0x1e1)](this['defaultColor']());},Window_NameBox[_0x3e735a(0x239)]['defaultColor']=function(){const _0x4785a3=_0x3e735a,_0x3cdb4f=VisuMZ[_0x4785a3(0x26f)][_0x4785a3(0x318)]['General'][_0x4785a3(0x221)];return ColorManager[_0x4785a3(0x269)](_0x3cdb4f);},VisuMZ[_0x3e735a(0x26f)][_0x3e735a(0x402)]=Window_NameBox[_0x3e735a(0x239)][_0x3e735a(0x3a8)],Window_NameBox[_0x3e735a(0x239)][_0x3e735a(0x3a8)]=function(){const _0x375615=_0x3e735a;VisuMZ[_0x375615(0x26f)][_0x375615(0x402)][_0x375615(0x2e8)](this),this[_0x375615(0x43a)](),this[_0x375615(0x25f)](),this['clampPlacementPosition'](),this[_0x375615(0x38c)]();},Window_NameBox['prototype'][_0x3e735a(0x3b8)]=function(_0x5d3d3b){const _0xfddcfe=_0x3e735a;return _0x5d3d3b=_0x5d3d3b[_0xfddcfe(0x262)](/<LEFT>/gi,this[_0xfddcfe(0x392)][_0xfddcfe(0x207)](this,0x0)),_0x5d3d3b=_0x5d3d3b[_0xfddcfe(0x262)](/<CENTER>/gi,this['setRelativePosition'][_0xfddcfe(0x207)](this,0x5)),_0x5d3d3b=_0x5d3d3b[_0xfddcfe(0x262)](/<RIGHT>/gi,this[_0xfddcfe(0x392)]['bind'](this,0xa)),_0x5d3d3b=_0x5d3d3b[_0xfddcfe(0x262)](/<POSITION:[ ](\d+)>/gi,(_0x566263,_0x54e35c)=>this[_0xfddcfe(0x392)](parseInt(_0x54e35c))),_0x5d3d3b=_0x5d3d3b['replace'](/<\/LEFT>/gi,''),_0x5d3d3b=_0x5d3d3b['replace'](/<\/CENTER>/gi,''),_0x5d3d3b=_0x5d3d3b[_0xfddcfe(0x262)](/<\/RIGHT>/gi,''),Window_Base[_0xfddcfe(0x239)][_0xfddcfe(0x3b8)][_0xfddcfe(0x2e8)](this,_0x5d3d3b);},Window_NameBox['prototype'][_0x3e735a(0x392)]=function(_0x4e8946){const _0x3a4772=_0x3e735a;return this[_0x3a4772(0x3fe)]=_0x4e8946,'';},Window_NameBox[_0x3e735a(0x239)][_0x3e735a(0x43a)]=function(){const _0x24372a=_0x3e735a;if($gameMessage[_0x24372a(0x29b)]())return;this[_0x24372a(0x3fe)]=this['_relativePosition']||0x0;const _0xf405f1=this[_0x24372a(0x331)],_0x36cc66=Math[_0x24372a(0x2cd)](_0xf405f1['width']*this['_relativePosition']/0xa);this['x']=_0xf405f1['x']+_0x36cc66-Math[_0x24372a(0x2cd)](this['width']/0x2),this['x']=this['x']['clamp'](_0xf405f1['x'],_0xf405f1['x']+_0xf405f1[_0x24372a(0x28f)]-this['width']);},Window_NameBox[_0x3e735a(0x239)]['updateOffsetPosition']=function(){const _0x11c888=_0x3e735a;if($gameMessage['isRTL']())return;this['_relativePosition']=this[_0x11c888(0x3fe)]||0x0;const _0x192633=VisuMZ[_0x11c888(0x26f)]['Settings'][_0x11c888(0x340)]['NameBoxWindowOffsetX'],_0x4f636b=VisuMZ['MessageCore']['Settings'][_0x11c888(0x340)][_0x11c888(0x385)],_0x145632=(0x5-this['_relativePosition'])/0x5;this['x']+=Math[_0x11c888(0x2cd)](_0x192633*_0x145632),this['y']+=_0x4f636b;},Window_NameBox[_0x3e735a(0x239)][_0x3e735a(0x38c)]=function(){const _0x5fa8f=_0x3e735a,_0x485f17=this[_0x5fa8f(0x331)],_0x4ad86a=_0x485f17['y'],_0x17a26c=VisuMZ['MessageCore'][_0x5fa8f(0x318)][_0x5fa8f(0x340)][_0x5fa8f(0x385)];if(_0x4ad86a>this['y']&&_0x4ad86a<this['y']+this[_0x5fa8f(0x313)]-_0x17a26c){if('AjHDX'!=='AjHDX'){if(this[_0x5fa8f(0x3b6)]===_0x60baa4)this[_0x5fa8f(0x35b)]();if(this[_0x5fa8f(0x3b6)]['messageWordWrap']===_0x47d007)this[_0x5fa8f(0x35b)]();this['_MessageCoreSettings'][_0x5fa8f(0x298)]=_0x1ffe77;}else this['y']=_0x485f17['y']+_0x485f17[_0x5fa8f(0x313)];}},VisuMZ[_0x3e735a(0x26f)][_0x3e735a(0x40e)]=Window_NameBox['prototype'][_0x3e735a(0x28a)],Window_NameBox[_0x3e735a(0x239)][_0x3e735a(0x28a)]=function(){this['_relativePosition']=0x0,VisuMZ['MessageCore']['Window_NameBox_refresh']['call'](this);},Window_ChoiceList[_0x3e735a(0x239)][_0x3e735a(0x2ce)]=function(){return![];},Window_ChoiceList['prototype'][_0x3e735a(0x3e6)]=function(){return!![];},Window_ChoiceList['prototype'][_0x3e735a(0x370)]=function(){const _0x128e8c=_0x3e735a;return $gameSystem[_0x128e8c(0x37e)]()+0x8;},Window_ChoiceList['prototype']['maxCols']=function(){const _0x15fafe=_0x3e735a;return $gameSystem[_0x15fafe(0x2f7)]();},Window_ChoiceList[_0x3e735a(0x239)][_0x3e735a(0x307)]=function(){const _0x14b525=_0x3e735a;this[_0x14b525(0x28a)](),this[_0x14b525(0x2b7)](),this[_0x14b525(0x283)](),this[_0x14b525(0x29c)]();},Window_ChoiceList[_0x3e735a(0x239)]['refresh']=function(){const _0x719b37=_0x3e735a;this[_0x719b37(0x30b)](),this[_0x719b37(0x2fe)]();if(this['_messageWindow']){if(_0x719b37(0x267)==='nxRUe')return _0x4918d8=_0x9ef586[_0x719b37(0x262)](/\<(?:BATTLE|CURRENT BATTLE) TARGET\>/gi,this[_0x719b37(0x3d9)]()),_0x4ee69e=_0x13480f['replace'](/\<(?:BATTLE|CURRENT BATTLE) (?:USER|SUBJECT)\>/gi,this[_0x719b37(0x2ca)]()),_0x4d23ed=_0x3bda77[_0x719b37(0x262)](/\<(?:BATTLE|CURRENT BATTLE) (?:ITEM|SKILL|ACTION)\>/gi,this['battleActionName'](!![])),_0xdd6a22=_0x3f9d39['replace'](/\<(?:BATTLE|CURRENT BATTLE) (?:ITEM|SKILL|ACTION) NAME\>/gi,this[_0x719b37(0x1f1)](![])),_0x37ebbd;else this[_0x719b37(0x3a8)](),this[_0x719b37(0x36c)]();}this[_0x719b37(0x384)](),this[_0x719b37(0x278)](),this[_0x719b37(0x3b4)](),Window_Selectable[_0x719b37(0x239)]['refresh'][_0x719b37(0x2e8)](this);},Window_ChoiceList[_0x3e735a(0x239)]['makeCommandList']=function(){const _0x5608e8=_0x3e735a,_0x50d7d1=$gameMessage['choices']();let _0x5eecd4=0x0;for(const _0x29eca8 of _0x50d7d1){if('ffnaW'!=='FpAcy'){if(this[_0x5608e8(0x2ad)](_0x29eca8)){const _0x5b11f2=this[_0x5608e8(0x36e)](_0x29eca8),_0x10609c=this['isChoiceEnabled'](_0x29eca8);this[_0x5608e8(0x1f9)](_0x5b11f2,'choice',_0x10609c,_0x5eecd4);}_0x5eecd4++;}else{if(this[_0x5608e8(0x3b6)]===_0x2b9d04)this[_0x5608e8(0x35b)]();if(this[_0x5608e8(0x3b6)][_0x5608e8(0x3b0)]===_0x5e20fa)this[_0x5608e8(0x35b)]();return this[_0x5608e8(0x3b6)][_0x5608e8(0x3b0)];}}},Window_ChoiceList[_0x3e735a(0x239)]['isChoiceVisible']=function(_0x18cbe6){const _0x179671=_0x3e735a;if(_0x18cbe6['match'](/<HIDE>/i))return![];if(_0x18cbe6[_0x179671(0x2db)](/<SHOW>/i))return!![];if(_0x18cbe6[_0x179671(0x2db)](/<SHOW[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x179671(0x39f)===_0x179671(0x39f)){const _0xd30c94=JSON[_0x179671(0x3bb)]('['+RegExp['$1'][_0x179671(0x2db)](/\d+/g)+']');for(const _0x46ae1b of _0xd30c94){if(_0x179671(0x3d1)===_0x179671(0x3d1)){if(!$gameSwitches[_0x179671(0x2fb)](_0x46ae1b))return![];}else{const _0x3ce00b=this[_0x179671(0x206)](_0x1fcc5f)['split'](',');if(!_0x3fb86b[_0x179671(0x330)])return;const _0x453563=_0x3ce00b[0x0][_0x179671(0x255)](),_0x48f784=_0x3ce00b[0x1]||0x0,_0x44f641=_0x3ce00b[0x2]||0x0,_0x3f90e9=_0x19c817[_0x179671(0x3ca)](_0x453563),_0x52670a=this['contents'][_0x179671(0x3cb)];_0x3f90e9[_0x179671(0x395)](this[_0x179671(0x382)][_0x179671(0x207)](this,_0x3f90e9,_0x1d088f['x'],_0x97f7ef['y'],_0x48f784,_0x44f641,_0x52670a));}}return!![];}else{for(const _0x3922f8 of _0x317af9['MessageCore'][_0x179671(0x318)][_0x179671(0x42b)]){_0x229292['match'](_0x3922f8[_0x179671(0x263)])&&(_0x5de9c2=_0x472be3['replace'](_0x3922f8['textCodeCheck'],_0x3922f8[_0x179671(0x415)]),_0x400a66=this[_0x179671(0x325)](_0x145786));}return _0x30ffc2;}}if(_0x18cbe6['match'](/<SHOW ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x24357f=JSON[_0x179671(0x3bb)]('['+RegExp['$1'][_0x179671(0x2db)](/\d+/g)+']');for(const _0x3d4b82 of _0x24357f){if(_0x179671(0x363)===_0x179671(0x363)){if(!$gameSwitches[_0x179671(0x2fb)](_0x3d4b82))return![];}else _0x241427[_0x179671(0x26f)][_0x179671(0x242)][_0x179671(0x2e8)](this,_0x21f543,_0x34b9e2);}return!![];}if(_0x18cbe6[_0x179671(0x2db)](/<SHOW ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if('NIELi'!==_0x179671(0x288)){const _0x19b9c8=_0x435c0b[_0x179671(0x26f)][_0x179671(0x318)][_0x179671(0x323)];let _0x32cbfd=0x0;if(_0x3d7f16===_0x5862c7)_0x32cbfd=_0x19b9c8[_0x179671(0x1e7)];if(_0x338292===_0x4c16f0)_0x32cbfd=_0x19b9c8['Classes'];if(_0x35580c===_0x45ca3f)_0x32cbfd=_0x19b9c8[_0x179671(0x454)];if(_0x4312a2===_0x4c1e94)_0x32cbfd=_0x19b9c8['Items'];if(_0xf2313e===_0x19c58b)_0x32cbfd=_0x19b9c8['Weapons'];if(_0x240649===_0x325293)_0x32cbfd=_0x19b9c8[_0x179671(0x2b9)];if(_0xa0712c===_0x2bc500)_0x32cbfd=_0x19b9c8[_0x179671(0x2fc)];if(_0x91aae===_0x2a9daf)_0x32cbfd=_0x19b9c8[_0x179671(0x2bd)];return _0x32cbfd>0x0&&(_0x1d28e9=_0x179671(0x1e9)[_0x179671(0x45a)](_0x32cbfd,_0x3cd3ac)),_0x37e637;}else{const _0x222c63=JSON[_0x179671(0x3bb)]('['+RegExp['$1'][_0x179671(0x2db)](/\d+/g)+']');for(const _0x520099 of _0x222c63){if(_0x179671(0x469)!=='wbLNC'){if($gameSwitches[_0x179671(0x2fb)](_0x520099))return!![];}else this[_0x179671(0x2c1)]&&(this[_0x179671(0x2c1)][_0x179671(0x413)]()?this[_0x179671(0x2c1)][_0x179671(0x281)]():this['clear']());}return![];}}if(_0x18cbe6['match'](/<HIDE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x175a5e=JSON['parse']('['+RegExp['$1'][_0x179671(0x2db)](/\d+/g)+']');for(const _0x372ba2 of _0x175a5e){if(!$gameSwitches[_0x179671(0x2fb)](_0x372ba2))return!![];}return![];}if(_0x18cbe6[_0x179671(0x2db)](/<HIDE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0xae96de=JSON['parse']('['+RegExp['$1'][_0x179671(0x2db)](/\d+/g)+']');for(const _0x3f3061 of _0xae96de){if(!$gameSwitches[_0x179671(0x2fb)](_0x3f3061))return!![];}return![];}if(_0x18cbe6[_0x179671(0x2db)](/<HIDE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x124cfe=JSON[_0x179671(0x3bb)]('['+RegExp['$1'][_0x179671(0x2db)](/\d+/g)+']');for(const _0x3f161d of _0x124cfe){if(_0x179671(0x369)!==_0x179671(0x31f)){if($gameSwitches[_0x179671(0x2fb)](_0x3f161d))return![];}else return _0x13763f[_0x179671(0x441)];}return!![];}return!![];},Window_ChoiceList[_0x3e735a(0x239)]['parseChoiceText']=function(_0x1951f6){const _0x8a1c08=_0x3e735a;let _0x3bc131=_0x1951f6;return _0x3bc131=_0x3bc131['replace'](/<(?:BR|LINEBREAK)>/gi,'\x0a'),_0x3bc131=_0x3bc131[_0x8a1c08(0x262)](/<LINE\x1bWrapBreak[0]BREAK>/gi,'\x0a'),_0x3bc131;},Window_ChoiceList[_0x3e735a(0x239)][_0x3e735a(0x42d)]=function(_0xf06705){const _0x2a81c1=_0x3e735a;if(_0xf06705[_0x2a81c1(0x2db)](/<DISABLE>/i))return![];if(_0xf06705[_0x2a81c1(0x2db)](/<ENABLE>/i))return!![];if(_0xf06705[_0x2a81c1(0x2db)](/<ENABLE[ ](?:SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0xe71b92=JSON['parse']('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x3433aa of _0xe71b92){if(_0x2a81c1(0x24b)!==_0x2a81c1(0x24b))return _0x1ddf44;else{if(!$gameSwitches[_0x2a81c1(0x2fb)](_0x3433aa))return![];}}return!![];}if(_0xf06705[_0x2a81c1(0x2db)](/<ENABLE ALL[ ](?:SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x3bd132=JSON['parse']('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0xe2e549 of _0x3bd132){if(_0x2a81c1(0x350)===_0x2a81c1(0x217)){const _0x5d0442=_0x68b43b['parse']('['+_0x4485fa['$1'][_0x2a81c1(0x2db)](/\d+/g)+']');for(const _0x42f8e6 of _0x5d0442){if(!_0x5f5ce9['value'](_0x42f8e6))return![];}return!![];}else{if(!$gameSwitches[_0x2a81c1(0x2fb)](_0xe2e549))return![];}}return!![];}if(_0xf06705['match'](/<ENABLE ANY[ ](?:SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x2a81c1(0x1f6)!==_0x2a81c1(0x1f6))_0x3309a8[_0x2a81c1(0x281)]();else{const _0x9b8a69=JSON['parse']('['+RegExp['$1'][_0x2a81c1(0x2db)](/\d+/g)+']');for(const _0x48b85f of _0x9b8a69){if(_0x2a81c1(0x232)!=='eSRdz')return _0x2a81c1(0x1e9)[_0x2a81c1(0x45a)](_0x4f7c86,_0x387f3f);else{if($gameSwitches[_0x2a81c1(0x2fb)](_0x48b85f))return!![];}}return![];}}if(_0xf06705[_0x2a81c1(0x2db)](/<DISABLE[ ](?:SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x4cfcce=JSON['parse']('['+RegExp['$1'][_0x2a81c1(0x2db)](/\d+/g)+']');for(const _0x3231e4 of _0x4cfcce){if(_0x2a81c1(0x205)===_0x2a81c1(0x316))this[_0x2a81c1(0x23e)]={'type':0x0,'id':0x0,'quantity':0x0};else{if(!$gameSwitches[_0x2a81c1(0x2fb)](_0x3231e4))return!![];}}return![];}if(_0xf06705[_0x2a81c1(0x2db)](/<DISABLE ALL[ ](?:SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x2a81c1(0x31d)!==_0x2a81c1(0x2cf)){const _0x3fda73=JSON[_0x2a81c1(0x3bb)]('['+RegExp['$1'][_0x2a81c1(0x2db)](/\d+/g)+']');for(const _0x33fcc7 of _0x3fda73){if('FGHgt'!==_0x2a81c1(0x42c)){if(!$gameSwitches[_0x2a81c1(0x2fb)](_0x33fcc7))return!![];}else{const _0x319356=_0x2a81c1(0x373)[_0x2a81c1(0x45a)](_0x51df6b),_0x44ffc9=_0x2523ba[_0x2a81c1(0x26f)]['Settings'][_0x2a81c1(0x323)][_0x319356];_0x44ffc9['sort']((_0x1c67d0,_0x4b8584)=>{const _0x3e0d7f=_0x2a81c1;if(!_0x1c67d0||!_0x4b8584)return-0x1;return _0x4b8584[_0x3e0d7f(0x284)]-_0x1c67d0['length'];}),this[_0x2a81c1(0x424)](_0x44ffc9,_0x15b6e1);}}return![];}else _0xb9a1c5=this['addContinuousShowChoices'](),_0x3f35d1[_0x2a81c1(0x26f)][_0x2a81c1(0x41a)][_0x2a81c1(0x2e8)](this,_0x30d015);}if(_0xf06705[_0x2a81c1(0x2db)](/<DISABLE ANY[ ](?:SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x2a81c1(0x2be)!==_0x2a81c1(0x2be))return this[_0x2a81c1(0x1e0)]()===0x65&&_0x14339e[_0x2a81c1(0x209)]()>0x4?!![]:this['nextEventCode']()===0x191;else{const _0x2d881c=JSON['parse']('['+RegExp['$1'][_0x2a81c1(0x2db)](/\d+/g)+']');for(const _0x2f2413 of _0x2d881c){if($gameSwitches['value'](_0x2f2413))return![];}return!![];}}return!![];},VisuMZ[_0x3e735a(0x26f)]['Window_ChoiceList_updatePlacement']=Window_ChoiceList[_0x3e735a(0x239)]['updatePlacement'],Window_ChoiceList[_0x3e735a(0x239)]['updatePlacement']=function(){const _0x164099=_0x3e735a;VisuMZ[_0x164099(0x26f)][_0x164099(0x2ae)][_0x164099(0x2e8)](this),this[_0x164099(0x302)]();},Window_ChoiceList[_0x3e735a(0x239)][_0x3e735a(0x36c)]=function(){const _0x327e82=_0x3e735a;if(!this[_0x327e82(0x3e0)])return;const _0x26016f=0x8,_0x3dc30d=this[_0x327e82(0x3e0)],_0x5c7ed5=this['x']+this[_0x327e82(0x28f)],_0xb671b2=Math['floor']((Graphics['width']-Graphics['boxWidth'])/0x2);_0x5c7ed5>=Graphics[_0x327e82(0x34b)]+_0xb671b2-_0x3dc30d[_0x327e82(0x28f)]+_0x26016f?_0x3dc30d['x']=-_0x3dc30d[_0x327e82(0x28f)]-_0x26016f:_0x3dc30d['x']=this[_0x327e82(0x28f)]+_0x26016f,_0x3dc30d['y']=this[_0x327e82(0x313)]/0x2-_0x3dc30d[_0x327e82(0x313)]/0x2;},VisuMZ[_0x3e735a(0x26f)][_0x3e735a(0x2a7)]=Window_ChoiceList[_0x3e735a(0x239)]['windowX'],Window_ChoiceList[_0x3e735a(0x239)][_0x3e735a(0x3f4)]=function(){const _0x181b92=_0x3e735a;if(this[_0x181b92(0x331)]){if(_0x181b92(0x2d4)!==_0x181b92(0x2d4))_0x538292['x']-=_0x24b75c['startX'];else return this[_0x181b92(0x2ea)]();}else{if(_0x181b92(0x289)!==_0x181b92(0x289)){this[_0x181b92(0x334)]=this[_0x181b92(0x334)]||[];for(const _0x398a9c of this['_messageCommonEvents']){!_0x398a9c['_interpreter']?this[_0x181b92(0x334)][_0x181b92(0x29d)](_0x398a9c):_0x398a9c[_0x181b92(0x281)]();}}else return VisuMZ['MessageCore'][_0x181b92(0x2a7)][_0x181b92(0x2e8)](this);}},Window_ChoiceList[_0x3e735a(0x239)][_0x3e735a(0x2ea)]=function(){const _0x40b81a=_0x3e735a,_0x2482c1=$gameMessage[_0x40b81a(0x40d)]();if(_0x2482c1===0x1)return(Graphics['boxWidth']-this[_0x40b81a(0x439)]())/0x2;else{if(_0x2482c1===0x2){if(_0x40b81a(0x3f6)===_0x40b81a(0x285))this['refresh'](),this[_0x40b81a(0x2b7)](),this[_0x40b81a(0x283)](),this[_0x40b81a(0x29c)]();else return this[_0x40b81a(0x331)]['x']+this[_0x40b81a(0x331)]['width']-this['windowWidth']();}else return this[_0x40b81a(0x331)]['x'];}},Window_ChoiceList[_0x3e735a(0x239)][_0x3e735a(0x439)]=function(){const _0x2247dc=_0x3e735a,_0x3d3e61=(this[_0x2247dc(0x41d)]()+this[_0x2247dc(0x2ba)]())*this[_0x2247dc(0x34f)]()+this[_0x2247dc(0x359)]*0x2;return Math[_0x2247dc(0x38d)](_0x3d3e61,Graphics[_0x2247dc(0x28f)]);},Window_ChoiceList[_0x3e735a(0x239)]['numVisibleRows']=function(){const _0x5c85bd=_0x3e735a,_0x526216=$gameMessage['choices']()['filter'](_0x283a60=>this['isChoiceVisible'](_0x283a60)),_0x46075d=Math[_0x5c85bd(0x219)](_0x526216[_0x5c85bd(0x284)]/this[_0x5c85bd(0x34f)]());return Math[_0x5c85bd(0x3b7)](0x1,Math[_0x5c85bd(0x38d)](_0x46075d,this[_0x5c85bd(0x3f5)]()));},Window_ChoiceList[_0x3e735a(0x239)]['maxLines']=function(){const _0x24eb15=_0x3e735a,_0x434d9f=this[_0x24eb15(0x331)],_0x1273ee=_0x434d9f?_0x434d9f['y']:0x0,_0x55591c=_0x434d9f?_0x434d9f[_0x24eb15(0x313)]:0x0,_0x4befce=Graphics['boxHeight']/0x2;return _0x1273ee<_0x4befce&&_0x1273ee+_0x55591c>_0x4befce?0x4:$gameSystem['getChoiceListMaxRows']();},Window_ChoiceList[_0x3e735a(0x239)][_0x3e735a(0x41d)]=function(){const _0x305e43=_0x3e735a;let _0x4a7581=0x60;for(const _0x4824aa of this['_list']){const _0x201988=_0x4824aa[_0x305e43(0x377)],_0x555c5b=this[_0x305e43(0x2b8)](_0x201988)['width'],_0x24397d=Math['ceil'](_0x555c5b)+this[_0x305e43(0x2b3)]()*0x2;if(_0x4a7581<_0x24397d){if(_0x305e43(0x2af)!==_0x305e43(0x2af)){const _0x3b7499=_0x50e552['split'](',')[_0x305e43(0x367)](_0x4257a7=>_0x52ea98(_0x4257a7)||0x0);if(_0x3b7499[0x0]!==_0x53c12c)this['_forcedPosition'][_0x305e43(0x28f)]=_0x100696(_0x3b7499[0x2]);if(_0x3b7499[0x1]!==_0x501863)this['_forcedPosition'][_0x305e43(0x313)]=_0x72e50f(_0x3b7499[0x3]);return'';}else _0x4a7581=_0x24397d;}}return _0x4a7581;},Window_ChoiceList['prototype'][_0x3e735a(0x2f8)]=function(_0x50de13){const _0x1b10b7=_0x3e735a,_0x20bcc7=this[_0x1b10b7(0x20f)](_0x50de13),_0x344ab5=$gameSystem[_0x1b10b7(0x35c)]()!==_0x1b10b7(0x3ae)?'<%1>'[_0x1b10b7(0x45a)]($gameSystem[_0x1b10b7(0x35c)]()):'',_0x2d5541=_0x344ab5+this[_0x1b10b7(0x3a4)](_0x50de13);this[_0x1b10b7(0x233)](this[_0x1b10b7(0x45b)](_0x50de13));const _0x15fbcb=this[_0x1b10b7(0x2b8)](_0x2d5541)[_0x1b10b7(0x313)],_0x5df77b=Math[_0x1b10b7(0x3b7)](_0x20bcc7['y'],_0x20bcc7['y']+Math[_0x1b10b7(0x2dc)]((_0x20bcc7['height']-_0x15fbcb)/0x2));this['drawTextEx'](_0x2d5541,_0x20bcc7['x'],_0x5df77b,_0x20bcc7[_0x1b10b7(0x28f)]);},Window_ChoiceList[_0x3e735a(0x239)][_0x3e735a(0x446)]=function(){const _0x5507d5=_0x3e735a;$gameMessage[_0x5507d5(0x2f9)](this[_0x5507d5(0x21d)]()),this['_messageWindow'][_0x5507d5(0x23b)](),this[_0x5507d5(0x431)]();};