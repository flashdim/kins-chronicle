//=============================================================================
// VisuStella MZ - Message Core
// VisuMZ_1_MessageCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_MessageCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.MessageCore = VisuMZ.MessageCore || {};
VisuMZ.MessageCore.version = 1.43;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.43] [MessageCore]
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
 * <Next Page>          Ends the current message page at this line. This is
 *                      used for messages when rows are at 5 or above and the
 *                      message lines don't match the amount. This is used to
 *                      prevent grabbing message windows from following message
 *                      events. Any lines following <Next Page> in the same
 *                      message event will be ignored.
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
 * <Choice Width: x>              Sets the minimum text area width to x.
 *                                Applies to whole choice window.
 * <Choice Indent: x>             Sets the indent to x value. Applies to
 *                                current choice selection only.
 * 
 * <BgColor: x>                   Requires VisuMZ_0_CoreEngine! Sets background
 *                                color of this choice to 'x' text color. This
 *                                will be combined with a fading
 * <BgColor: x,y>                 Requires VisuMZ_0_CoreEngine! Sets background
 *                                color of this choice to 'x' to 'y' gradient
 *                                text color.
 * <BgColor: #rrggbb>             Requires VisuMZ_0_CoreEngine! Sets background
 *                                color of this choice to '#rrggbb' color using
 *                                hex color values.
 * <BgColor: #rrggbb, #rrggbb>    Requires VisuMZ_0_CoreEngine! Sets background
 *                                color of this choice to '#rrggbb' gradient
 *                                using hex color values.
 * 
 * <Help> text </Help>            Makes a help window appear and have it show
 *                                'text' in its contents. The help window will
 *                                disappear if no text is displayed.
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
 * <Offset: +x, +y>                  Quickly adjust the message window offset
 * <Offset: -x, -y>                  values to the x and y amounts. The values
 * <Offset: +x, -y>                  will replace the previous offset settings
 * <Offset: -x, +y>                  if there were any.
 * 
 * *NOTE* These text codes do not work with Word Wrap.
 * 
 * ---
 * 
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Requires VisuMZ_0_CoreEngine)
 * ------------------   -------------------------------------------------------
 * <Up Button>          Display's VisuMZ_0_CoreEngine's button assist text.
 * <Left Button>        Display's VisuMZ_0_CoreEngine's button assist text.
 * <Right Button>       Display's VisuMZ_0_CoreEngine's button assist text.
 * <Down Button>        Display's VisuMZ_0_CoreEngine's button assist text.
 * 
 * <Ok Button>          Display's VisuMZ_0_CoreEngine's button assist text.
 * <Cancel Button>      Display's VisuMZ_0_CoreEngine's button assist text.
 * <Shift Button>       Display's VisuMZ_0_CoreEngine's button assist text.
 * <Menu Button>        Display's VisuMZ_0_CoreEngine's button assist text.
 * <Page Up Button>     Display's VisuMZ_0_CoreEngine's button assist text.
 * <Page Down Button>   Display's VisuMZ_0_CoreEngine's button assist text.
 * 
 * ---
 * 
 * === Random Text Pool ===
 * 
 * <RNG> text1 | text2 | text3 </RNG>
 * 
 * Using the above text code format in a Show Message entry, you can get a
 * random result out of the various inserted texts. Use "|" (without quotes) as
 * a separator between text entries. You can have unlimited entries. The result
 * will have any excess white space trimmed.
 * 
 * This text code cannot be inserted into a macro and parsed properly.
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
 *   Word Wrap:
 *   - Enable or disable Word Wrap for the Message Window?
 *
 * ---
 * 
 * Message: X/Y Offsets
 * - Change the X and Y Offsets of the Message Window.
 * - The offset value(s) will be saved and stored.
 * 
 *   Offset X:
 *   - Offset Message Window horizontally.
 *   - Negative: Left; Positive: Right
 *   - Message Window coordinates are still restricted via clamping.
 * 
 *   Offset Y:
 *   - Offset Message Window vertically.
 *   - Negative: Up; Positive: Down
 *   - Message Window coordinates are still restricted via clamping.
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
 * === Select Plugin Commands ===
 * 
 * ---
 * 
 * Select: Weapon
 * - Opens the Event Select Item Window to let the player pick a weapon to
 *   choose from.
 * - Can be opened while the Message Window is open.
 * 
 *   Variable ID:
 *   - This variable will be used to record the ID of the selected weapon.
 *   - It will result in 0 otherwise.
 * 
 *   Weapon Type ID:
 *   - Reduce all the weapons to a specific weapon type.
 *   - Leave at 0 to not use filters.
 * 
 * ---
 * 
 * Select: Armor
 * - Opens the Event Select Item Window to let the player pick an armor to
 *   choose from.
 * - Can be opened while the Message Window is open.
 * 
 *   Variable ID:
 *   - This variable will be used to record the ID of the selected armor.
 *   - It will result in 0 otherwise.
 * 
 *   Armor Type ID:
 *   - Reduce all the armors to a specific armor type.
 *   - Leave at 0 to not use filters.
 * 
 *   Equip Type ID:
 *   - Reduce all the armors to a specific equip type.
 *   - Leave at 0 to not use filters.
 * 
 * ---
 * 
 * Select: Skill
 * - Opens the Event Select Item Window to let the player pick a skill to
 *   choose from.
 * - Requires VisuMZ_1_SkillsStatesCore!
 * - Can be opened while the Message Window is open.
 * - Skills will not be listed if they are hidden by the actor.
 * - Skills will not be listed if the actor lacks access to their Skill Type.
 * 
 *   Variable ID:
 *   - This variable will be used to record the ID of the selected skill.
 *   - It will result in 0 otherwise.
 * 
 *   Actor ID:
 *   - Select an actor to get the skill list from.
 *   - Use 0 to select from the party leader.
 * 
 *   Skill Type ID:
 *   - Reduce all the skills to a specific skill type.
 *   - Leave at 0 to not use filters.
 * 
 * ---
 * 
 * === Picture Plugin Commands ===
 * 
 * ---
 * 
 * Picture: Change Text
 * - Change text for target picture(s) to show.
 * - You may use text codes.
 * - Text will adapt to picture's properties.
 * - Settings will be erased if picture is erased.
 * 
 *   Picture ID(s):
 *   - The ID(s) of the picture(s) to set text to.
 * 
 *   Padding:
 *   - How much padding from the sides should there be?
 * 
 *   Text:
 * 
 *     Upper Left:
 *     Upper Center:
 *     Upper Right:
 *     Middle Left:
 *     Middle Center:
 *     Middle Right:
 *     Lower Left:
 *     Lower Center:
 *     Lower Right:
 *     - The text that's aligned to this picture's side.
 *     - You may use text codes.
 * 
 * ---
 * 
 * Picture: Erase Text
 * - Erase all text for target picture(s).
 * 
 *   Picture ID(s):
 *   - The ID(s) of the picture(s) to erase text for.
 * 
 * ---
 * 
 * Picture: Refresh Text
 * - Refreshes the text used for all on-screen pictures.
 * - To be used if any dynamic text codes are updated like \n[x].
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
 *   Offset X:
 *   Offset Y:
 *   - Offset Message Window horizontally or vertically.
 *   - Horizontal: Left; Positive: Right
 *   - Veritcal: Negative: Up; Positive: Down
 * 
 *   Stretch Dimmed BG:
 *   - Stretch dimmed window background to fit the whole screen.
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
 * Word wrap only supports left-to-right alphabetical languages that utilize
 * spaces. It does not support any Asian languages that do not utilize spaces,
 * such as Chinese, Japanese, Korean, etc.
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
 *   End Padding:
 *   - Add extra padding to your window to make text wrap further away from the
 *     end of the window.
 *   - This will default to 0.
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
 * Version 1.43: April 13, 2023
 * * Compatibility Update!
 * ** Fixed incompatibilities with auto message positioning with the Map Zoom
 *    plugin. Update made by Irina.
 * 
 * Version 1.42: March 16, 2023
 * * Bug Fixes!
 * ** Fixed some text codes that would capture way too much data than intended.
 *    Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New text code added by Irina for Show Choice Window only:
 * *** <Help> text </Help>
 * **** Makes a help window appear and have it show 'text' in its contents.
 * **** The help window will disappear if no text is displayed.
 * ** New Plugin Commands added by Arisu:
 * *** Select: Weapon
 * *** Select: Armor
 * *** Select: Skill
 * **** Opens the Event Select Item Window to let the player pick a weapon,
 *      armor, or skill to choose from. The selected object will have its ID
 *      recorded in a variable. These can be opened while the Message Window is
 *      opened just like the event "Select Item".
 * 
 * Version 1.41: December 15, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New text codes added by Irina!
 * *** For the Choice Window Only text codes:
 * **** <BgColor: x>
 * **** <BgColor: x, y>
 * **** <BgColor: #rrggbb>
 * **** <BgColor: #rrggbb, #rrggbb>
 * ***** Requires VisuMZ_0_CoreEngine! Sets the background color of this choice
 *       to 'x' text color, 'x' to 'y' gradient text color, or using '#rrggbb'
 *       hex color values.
 * 
 * Version 1.40: November 3, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New text code added by Irina:
 * *** <RNG> text1 | text2 | text3 </RNG>
 * **** Using the above text code format in a Show Message entry, you can get a
 *      random result out of the various inserted texts. Use "|" (without
 *      quotes) as a separator between text entries. You can have unlimited
 *      entries. The result will have any excess white space trimmed.
 * **** This text code cannot be inserted into a macro and parsed properly.
 * 
 * Version 1.39: September 22, 2022
 * * Bug Fixes!
 * ** Macros now support quotes (' and ") in the STR: Text. Fix made by Irina.
 * 
 * Version 1.38: July 21, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.37: June 9, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Picture texts with \v[x] text codes are now updated automatically.
 * ** This is the only dynamic text code that updates this way for optimization
 *    purposes and to prevent overabundant CPU usage.
 * ** Everything else will require the new Plugin Command.
 * * New Features!
 * ** New Plugin Command added by Irina:
 * *** Picture: Refresh Text
 * **** Refreshes the text used for all on-screen pictures.
 * **** To be used if any dynamic text codes are updated like \n[x].
 * * New Features!
 * ** New text codes added by Arisu and sponsored by
 *    ImGonnaPutMyGameOnXboxAndYouCantStopMe:
 * *** <Up Button>, <Left Button>, <Right Button>, <Down Button>
 * *** <Ok Button>, <Cancel Button>, <Shift Button>, <Menu Button>
 * *** <Page Up Button>, <Page Down Button>
 * **** Display's VisuMZ_0_CoreEngine's button assist text.
 * 
 * Version 1.36: April 7, 2022
 * * Feature Update!
 * ** Auto size related text codes should now automatically disable word wrap
 *    effects as they should have before. Update made by Irina.
 * 
 * Version 1.35: March 31, 2022
 * * Bug Fixes!
 * ** Bug fixed where if autosizing is used and it goes from a message that is
 *    shorter to longer, an extra key press is needed. This should no longer be
 *    the case. Fix made by Irina.
 * 
 * Version 1.34: February 24, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Choice Window Text Codes made by Irina and sponsored by AndyL:
 * *** <Choice Width: x>
 * **** Sets the minimum text area width to x. Applies to whole choice window.
 * *** <Choice Indent: x>
 * **** Sets the indent to x value. Applies to current choice selection only.
 * 
 * Version 1.33: February 10, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Irina:
 * *** Picture: Change Text
 * **** This new plugin command allows you to place text on top of pictures
 *      (usually in the form of empty pages or cards) to function as stationary
 *      or other uses. Text codes are allowed.
 * **** Text codes are supported.
 * *** Picture: Erase Text
 * **** Removes text from target picture(s).
 * 
 * Version 1.32: January 20, 2022
 * * Bug Fixes!
 * ** Extra Show Choice notetags will now be properly hidden. Fix by Irina.
 * * Compatibility Update!
 * ** Self Switches are now made compatible with work with Show Choices. Update
 *    made by Irina.
 * 
 * Version 1.31: December 9, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New hard-coded message-only text code added by Irina:
 * *** <Next Page>
 * **** Ends the current message page at this line. This is used for messages
 *      when rows are at 5 or above and the message lines don't match the
 *      amount. This is used to prevent grabbing message windows from following
 *      message events. Any lines following <Next Page> in the same message
 *      event will be ignored.
 * 
 * Version 1.30: November 11, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Help file updated for removed "Center Window X" bit.
 * * Feature Update!
 * ** Message: Properties now has "Center Window X?" removed
 * *** Changes will now be automatically centered.
 * *** This change is made for the new Plugin Command added for offsets which
 *     more or less replaces them.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Puddor:
 * *** Message: X/Y Offsets
 * **** Change the X and Y Offsets of the Message Window.
 * **** The offset value(s) will be saved and stored.
 * ** New Plugin Parameters added by Irina and sponsored by Puddor:
 * *** Plugin Parameters > General Settings > Message Window > Offset X
 * *** Plugin Parameters > General Settings > Message Window > Offset Y
 * **** Allows you to offset the horizontal and/or vertical positions of the
 *      message window accordingly.
 * ** New Text Codes added by Irina and sponsored by Puddor:
 * *** <Offset: +x, +y>
 * *** <Offset: -x, -y>
 * *** <Offset: +x, -y>
 * *** <Offset: -x, +y>
 * **** Quickly adjust the message window offset values to the x and y amounts.
 *      The values will replace the previous offset settings if there were any.
 * 
 * Version 1.29: October 21, 2021
 * * Feature Update
 * ** Word Wrap flags are now properly adjusted when converting macros and
 *    adding bypasses towards regular messages. Update by Irina.
 * 
 * Version 1.28: October 14, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.27: October 7, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.26: September 3, 2021
 * * Bug Fixes!
 * ** Macros should now work properly with any \x<n> based text codes.
 *    Fix made by Irina.
 * 
 * Version 1.25: August 27, 2021
 * * Feature Update!
 * ** Macros should now work with the <WordWrap> text code. Update by Irina.
 * 
 * Version 1.24: August 20, 2021
 * * Feature Update!
 * ** Macros should now work with window placement and resize options.
 *    Update made by Irina.
 * ** Macros should now work with choice-related enable and visibility options.
 *    Update made by Irina.
 * 
 * Version 1.23: July 16, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Word Wrap Settings > End Padding
 * **** Add extra padding to your window to make text wrap further away from
 *      the end of the window. This will default to 0.
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
 * @command Separator_Begin
 * @text -
 * @desc -
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
 * @command MessageWindowXyOffsets
 * @text Message: X/Y Offsets
 * @desc Change the X and Y Offsets of the Message Window.
 * The offset value(s) will be saved and stored.
 *
 * @arg OffsetX:eval
 * @text Offset X
 * @desc Offset Message Window horizontally.
 * Negative: Left; Positive: Right
 * @default +0
 *
 * @arg OffsetY:eval
 * @text Offset Y
 * @desc Offset Message Window vertically.
 * Negative: Up; Positive: Down
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Choice
 * @text -
 * @desc -
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
 * @command Separator_Select
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelectWeapon
 * @text Select: Weapon
 * @desc Opens the Event Select Item Window to let the player
 * pick a weapon to choose from.
 *
 * @arg VariableID:num
 * @text Variable ID
 * @type number
 * @min 0
 * @desc This variable will be used to record the ID of the
 * selected weapon. It will result in 0 otherwise.
 * @default 1
 *
 * @arg WeaponTypeID:num
 * @text Weapon Type ID
 * @type number
 * @min 0
 * @max 100
 * @desc Reduce all the weapons to a specific weapon type.
 * Leave at 0 to not use filters.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelectArmor
 * @text Select: Armor
 * @desc Opens the Event Select Item Window to let the player
 * pick an armor to choose from.
 *
 * @arg VariableID:num
 * @text Variable ID
 * @type number
 * @min 0
 * @desc This variable will be used to record the ID of the
 * selected armor. It will result in 0 otherwise.
 * @default 1
 *
 * @arg ArmorTypeID:num
 * @text Armor Type ID
 * @type number
 * @min 0
 * @max 100
 * @desc Reduce all the armors to a specific armor type.
 * Leave at 0 to not use filters.
 * @default 0
 *
 * @arg EquipTypeID:num
 * @text Equip Type ID
 * @type number
 * @min 0
 * @max 100
 * @desc Reduce all the armors to a specific equip type.
 * Leave at 0 to not use filters.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelectSkill
 * @text Select: Skill
 * @desc Opens the Event Select Item Window to let the player
 * pick a skill to choose from. Requires VisuMZ_1_SkillsStatesCore!
 *
 * @arg VariableID:num
 * @text Variable ID
 * @type number
 * @min 0
 * @desc This variable will be used to record the ID of the
 * selected skill. It will result in 0 otherwise.
 * @default 1
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select an actor to get the skill list from.
 * Use 0 to select from the party leader.
 * @default 0
 *
 * @arg SkillTypeID:num
 * @text Skill Type ID
 * @type number
 * @min 0
 * @max 100
 * @desc Reduce all the skills to a specific skill type.
 * Leave at 0 to not use filters.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Picture
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureTextChange
 * @text Picture: Change Text
 * @desc Change text for target picture(s) to show.
 * You may use text codes.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc The ID(s) of the picture(s) to set text to.
 * @default ["1"]
 *
 * @arg Padding:eval
 * @text Padding
 * @parent PictureIDs:arraynum
 * @desc How much padding from the sides should there be?
 * @default $gameSystem.windowPadding()
 * 
 * @arg Text
 *
 * @arg upperleft:json
 * @text Upper Left
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg up:json
 * @text Upper Center
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg upperright:json
 * @text Upper Right
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg left:json
 * @text Middle Left
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg center:json
 * @text Middle Center
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg right:json
 * @text Middle Right
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg lowerleft:json
 * @text Lower Left
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg down:json
 * @text Lower Center
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg lowerright:json
 * @text Lower Right
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureTextErase
 * @text Picture: Erase Text
 * @desc Erase all text for target picture(s).
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc The ID(s) of the picture(s) to erase text for.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureTextRefresh
 * @text Picture: Refresh Text
 * @desc Refreshes the text used for all on-screen pictures.
 * To be used if any dynamic text codes are updated like \n[x].
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
 * @text Text Code Macros
 * @type struct<TextMacro>[]
 * @desc Macros that are used to quickly write batches of text.
 * Format style: [MacroName]
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
 * @default {"EnableWordWrap":"","MessageWindow:eval":"false","HelpWindow:eval":"false","Rules":"","LineBreakSpace:eval":"true","TightWrap:eval":"false","EndPadding:num":"0"}
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
 * @param MsgWindowOffsetX:num
 * @text Offset X
 * @parent MessageWindow
 * @desc Offset Message Window horizontally.
 * Negative: Left; Positive: Right
 * @default +0
 *
 * @param MsgWindowOffsetY:num
 * @text Offset Y
 * @parent MessageWindow
 * @desc Offset Message Window vertically.
 * Negative: Up; Positive: Down
 * @default +0
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
 * @default +0
 *
 * @param NameBoxWindowOffsetY:num
 * @text Offset Y
 * @parent NameBoxWindow
 * @desc How much to offset the name box window Y by (as long as it doesn't go offscreen).
 * @default +0
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
 * @param EndPadding:num
 * @text End Padding
 * @parent Rules
 * @type number
 * @desc Add extra padding to your window to make text wrap further away from the end of the window.
 * @default 0
 *
 */
//=============================================================================

const _0x4ec4b9=_0x5518;function _0x5518(_0x155153,_0x292fb9){const _0x35391f=_0x3539();return _0x5518=function(_0x55181f,_0x491918){_0x55181f=_0x55181f-0x1d9;let _0x594c1c=_0x35391f[_0x55181f];return _0x594c1c;},_0x5518(_0x155153,_0x292fb9);}(function(_0x27cfd1,_0x35f1b9){const _0x5e24c4=_0x5518,_0x23215c=_0x27cfd1();while(!![]){try{const _0xed665a=-parseInt(_0x5e24c4(0x38d))/0x1*(parseInt(_0x5e24c4(0x339))/0x2)+parseInt(_0x5e24c4(0x2e8))/0x3+-parseInt(_0x5e24c4(0x39b))/0x4*(parseInt(_0x5e24c4(0x3d7))/0x5)+parseInt(_0x5e24c4(0x307))/0x6*(-parseInt(_0x5e24c4(0x47f))/0x7)+parseInt(_0x5e24c4(0x38b))/0x8+-parseInt(_0x5e24c4(0x31b))/0x9*(parseInt(_0x5e24c4(0x496))/0xa)+parseInt(_0x5e24c4(0x3dd))/0xb;if(_0xed665a===_0x35f1b9)break;else _0x23215c['push'](_0x23215c['shift']());}catch(_0x559aee){_0x23215c['push'](_0x23215c['shift']());}}}(_0x3539,0x3312b));var label='MessageCore',tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x4ec4b9(0x2f3)](function(_0x56e875){const _0x4261ef=_0x4ec4b9;return _0x56e875[_0x4261ef(0x357)]&&_0x56e875[_0x4261ef(0x3ff)]['includes']('['+label+']');})[0x0];VisuMZ[label][_0x4ec4b9(0x1ee)]=VisuMZ[label][_0x4ec4b9(0x1ee)]||{},VisuMZ[_0x4ec4b9(0x303)]=function(_0x355486,_0x56b646){const _0x2cb5ad=_0x4ec4b9;for(const _0x4b0cff in _0x56b646){if(_0x4b0cff[_0x2cb5ad(0x471)](/(.*):(.*)/i)){const _0x314d2e=String(RegExp['$1']),_0x26686b=String(RegExp['$2'])[_0x2cb5ad(0x33e)]()[_0x2cb5ad(0x47b)]();let _0x1ec7bf,_0x1e6cde,_0x498676;switch(_0x26686b){case _0x2cb5ad(0x32b):_0x1ec7bf=_0x56b646[_0x4b0cff]!==''?Number(_0x56b646[_0x4b0cff]):0x0;break;case'ARRAYNUM':_0x1e6cde=_0x56b646[_0x4b0cff]!==''?JSON[_0x2cb5ad(0x318)](_0x56b646[_0x4b0cff]):[],_0x1ec7bf=_0x1e6cde[_0x2cb5ad(0x297)](_0x4b5a7b=>Number(_0x4b5a7b));break;case _0x2cb5ad(0x320):_0x1ec7bf=_0x56b646[_0x4b0cff]!==''?eval(_0x56b646[_0x4b0cff]):null;break;case'ARRAYEVAL':_0x1e6cde=_0x56b646[_0x4b0cff]!==''?JSON['parse'](_0x56b646[_0x4b0cff]):[],_0x1ec7bf=_0x1e6cde[_0x2cb5ad(0x297)](_0x11516a=>eval(_0x11516a));break;case _0x2cb5ad(0x482):_0x1ec7bf=_0x56b646[_0x4b0cff]!==''?JSON[_0x2cb5ad(0x318)](_0x56b646[_0x4b0cff]):'';break;case _0x2cb5ad(0x32e):_0x1e6cde=_0x56b646[_0x4b0cff]!==''?JSON[_0x2cb5ad(0x318)](_0x56b646[_0x4b0cff]):[],_0x1ec7bf=_0x1e6cde[_0x2cb5ad(0x297)](_0x367c21=>JSON[_0x2cb5ad(0x318)](_0x367c21));break;case _0x2cb5ad(0x2bb):_0x1ec7bf=_0x56b646[_0x4b0cff]!==''?new Function(JSON[_0x2cb5ad(0x318)](_0x56b646[_0x4b0cff])):new Function(_0x2cb5ad(0x2d1));break;case _0x2cb5ad(0x305):_0x1e6cde=_0x56b646[_0x4b0cff]!==''?JSON['parse'](_0x56b646[_0x4b0cff]):[],_0x1ec7bf=_0x1e6cde[_0x2cb5ad(0x297)](_0x4121f5=>new Function(JSON[_0x2cb5ad(0x318)](_0x4121f5)));break;case _0x2cb5ad(0x414):_0x1ec7bf=_0x56b646[_0x4b0cff]!==''?String(_0x56b646[_0x4b0cff]):'';break;case'ARRAYSTR':_0x1e6cde=_0x56b646[_0x4b0cff]!==''?JSON[_0x2cb5ad(0x318)](_0x56b646[_0x4b0cff]):[],_0x1ec7bf=_0x1e6cde[_0x2cb5ad(0x297)](_0x3719e9=>String(_0x3719e9));break;case _0x2cb5ad(0x3f9):_0x498676=_0x56b646[_0x4b0cff]!==''?JSON[_0x2cb5ad(0x318)](_0x56b646[_0x4b0cff]):{},_0x355486[_0x314d2e]={},VisuMZ[_0x2cb5ad(0x303)](_0x355486[_0x314d2e],_0x498676);continue;case _0x2cb5ad(0x395):_0x1e6cde=_0x56b646[_0x4b0cff]!==''?JSON[_0x2cb5ad(0x318)](_0x56b646[_0x4b0cff]):[],_0x1ec7bf=_0x1e6cde[_0x2cb5ad(0x297)](_0xbd89d3=>VisuMZ[_0x2cb5ad(0x303)]({},JSON[_0x2cb5ad(0x318)](_0xbd89d3)));break;default:continue;}_0x355486[_0x314d2e]=_0x1ec7bf;}}return _0x355486;},(_0x390dfa=>{const _0x5e1402=_0x4ec4b9,_0xc4ad6a=_0x390dfa['name'];for(const _0x275919 of dependencies){if(!Imported[_0x275919]){alert(_0x5e1402(0x2ab)[_0x5e1402(0x264)](_0xc4ad6a,_0x275919)),SceneManager[_0x5e1402(0x1de)]();break;}}const _0x1148be=_0x390dfa[_0x5e1402(0x3ff)];if(_0x1148be[_0x5e1402(0x471)](/\[Version[ ](.*?)\]/i)){const _0x584455=Number(RegExp['$1']);_0x584455!==VisuMZ[label][_0x5e1402(0x46f)]&&(alert(_0x5e1402(0x346)[_0x5e1402(0x264)](_0xc4ad6a,_0x584455)),SceneManager[_0x5e1402(0x1de)]());}if(_0x1148be[_0x5e1402(0x471)](/\[Tier[ ](\d+)\]/i)){const _0x52fc1c=Number(RegExp['$1']);_0x52fc1c<tier?(alert(_0x5e1402(0x32a)[_0x5e1402(0x264)](_0xc4ad6a,_0x52fc1c,tier)),SceneManager[_0x5e1402(0x1de)]()):tier=Math[_0x5e1402(0x22e)](_0x52fc1c,tier);}VisuMZ['ConvertParams'](VisuMZ[label]['Settings'],_0x390dfa['parameters']);})(pluginData),PluginManager[_0x4ec4b9(0x445)](pluginData[_0x4ec4b9(0x45e)],_0x4ec4b9(0x3db),_0x4f4259=>{const _0x284db7=_0x4ec4b9;VisuMZ[_0x284db7(0x303)](_0x4f4259,_0x4f4259);const _0x3b7a41=_0x4f4259[_0x284db7(0x2b2)]||$gameSystem['getChoiceListLineHeight']()||0x1,_0x245e3f=_0x4f4259[_0x284db7(0x274)]||$gameSystem['getChoiceListMaxRows']()||0x1,_0x3b28b8=_0x4f4259[_0x284db7(0x405)]||$gameSystem[_0x284db7(0x3e7)]()||0x1,_0x3a1a5b=_0x4f4259[_0x284db7(0x3a6)][_0x284db7(0x34a)]()||_0x284db7(0x4b8);$gameSystem['setChoiceListLineHeight'](_0x3b7a41),$gameSystem['setChoiceListMaxRows'](_0x245e3f),$gameSystem[_0x284db7(0x2bc)](_0x3b28b8),$gameSystem['setChoiceListTextAlign'](_0x3a1a5b);}),PluginManager['registerCommand'](pluginData['name'],_0x4ec4b9(0x22c),_0x16a3b0=>{const _0x24557d=_0x4ec4b9;VisuMZ[_0x24557d(0x303)](_0x16a3b0,_0x16a3b0);const _0x489d5c=_0x16a3b0[_0x24557d(0x4a0)]||$gameSystem['getMessageWindowRows']()||0x1,_0x910e11=_0x16a3b0[_0x24557d(0x299)]||$gameSystem[_0x24557d(0x391)]()||0x1;$gameTemp[_0x24557d(0x42e)]=!![];const _0x510774=_0x16a3b0[_0x24557d(0x28d)]['toLowerCase']();$gameSystem[_0x24557d(0x394)](_0x489d5c),$gameSystem['setMessageWindowWidth'](_0x910e11);['true',_0x24557d(0x294)]['includes'](_0x510774)&&$gameSystem[_0x24557d(0x208)](eval(_0x510774));const _0x3fe7f4=SceneManager[_0x24557d(0x3a4)][_0x24557d(0x45a)];_0x3fe7f4&&(_0x3fe7f4[_0x24557d(0x398)](),_0x3fe7f4[_0x24557d(0x25a)](),_0x3fe7f4['createContents']());}),PluginManager[_0x4ec4b9(0x445)](pluginData[_0x4ec4b9(0x45e)],'MessageWindowXyOffsets',_0x2cfb6c=>{const _0x152ac4=_0x4ec4b9;VisuMZ['ConvertParams'](_0x2cfb6c,_0x2cfb6c),$gameSystem[_0x152ac4(0x3b1)](_0x2cfb6c[_0x152ac4(0x4b4)],_0x2cfb6c['OffsetY']);const _0x3adcc5=SceneManager[_0x152ac4(0x3a4)]['_messageWindow'];_0x3adcc5&&(_0x3adcc5[_0x152ac4(0x398)](),_0x3adcc5[_0x152ac4(0x25a)](),_0x3adcc5['createContents']());}),PluginManager[_0x4ec4b9(0x445)](pluginData[_0x4ec4b9(0x45e)],_0x4ec4b9(0x4aa),_0x2185c1=>{const _0x24e0d3=_0x4ec4b9;VisuMZ[_0x24e0d3(0x303)](_0x2185c1,_0x2185c1),$gameMessage[_0x24e0d3(0x477)](_0x2185c1[_0x24e0d3(0x4b3)]||0x0,_0x2185c1['WeaponTypeID']||0x0);const _0x2ef548=$gameTemp[_0x24e0d3(0x440)]();if(_0x2ef548)_0x2ef548[_0x24e0d3(0x4ac)](_0x24e0d3(0x378));}),PluginManager[_0x4ec4b9(0x445)](pluginData[_0x4ec4b9(0x45e)],_0x4ec4b9(0x438),_0x424343=>{const _0x313512=_0x4ec4b9;VisuMZ['ConvertParams'](_0x424343,_0x424343),$gameMessage[_0x313512(0x3ef)](_0x424343[_0x313512(0x4b3)]||0x0,_0x424343[_0x313512(0x45c)]||0x0,_0x424343[_0x313512(0x29f)]||0x0);const _0x15ca1b=$gameTemp['getLastPluginCommandInterpreter']();if(_0x15ca1b)_0x15ca1b['setWaitMode'](_0x313512(0x378));}),PluginManager[_0x4ec4b9(0x445)](pluginData[_0x4ec4b9(0x45e)],_0x4ec4b9(0x2bd),_0x153e97=>{const _0x2d1faa=_0x4ec4b9;VisuMZ[_0x2d1faa(0x303)](_0x153e97,_0x153e97),$gameMessage[_0x2d1faa(0x419)](_0x153e97[_0x2d1faa(0x4b3)]||0x0,_0x153e97[_0x2d1faa(0x2d7)]||0x0,_0x153e97[_0x2d1faa(0x467)]||0x0);const _0x3abb78=$gameTemp['getLastPluginCommandInterpreter']();if(_0x3abb78)_0x3abb78[_0x2d1faa(0x4ac)](_0x2d1faa(0x378));}),PluginManager[_0x4ec4b9(0x445)](pluginData[_0x4ec4b9(0x45e)],_0x4ec4b9(0x257),_0x132f35=>{const _0xd42ee0=_0x4ec4b9;VisuMZ[_0xd42ee0(0x303)](_0x132f35,_0x132f35);const _0x4f5652=_0x132f35[_0xd42ee0(0x3d4)]||[],_0x28b027=_0x132f35[_0xd42ee0(0x2c2)]||0x0,_0x2498fc=[_0xd42ee0(0x344),'up',_0xd42ee0(0x36b),'left',_0xd42ee0(0x232),'right',_0xd42ee0(0x3e6),_0xd42ee0(0x3c6),'lowerright'];for(const _0x470f60 of _0x4f5652){$gameScreen[_0xd42ee0(0x3a0)](_0x470f60,_0x28b027);for(const _0xe63f9a of _0x2498fc){if(_0x132f35[_0xe63f9a]===undefined)continue;$gameScreen['setPictureText'](_0x470f60,_0x132f35[_0xe63f9a],_0xe63f9a);}}}),PluginManager[_0x4ec4b9(0x445)](pluginData['name'],'PictureTextErase',_0x452981=>{const _0xb4b85c=_0x4ec4b9;VisuMZ[_0xb4b85c(0x303)](_0x452981,_0x452981);const _0x483ccb=_0x452981[_0xb4b85c(0x3d4)]||[];for(const _0x392be7 of _0x483ccb){$gameScreen[_0xb4b85c(0x38c)](_0x392be7),$gameScreen['erasePictureTextBuffer'](_0x392be7);}}),PluginManager[_0x4ec4b9(0x445)](pluginData[_0x4ec4b9(0x45e)],_0x4ec4b9(0x33c),_0x24d39c=>{const _0x4efa07=_0x4ec4b9;$gameScreen[_0x4efa07(0x359)]();}),VisuMZ['MessageCore'][_0x4ec4b9(0x207)]=Scene_Boot['prototype'][_0x4ec4b9(0x233)],Scene_Boot[_0x4ec4b9(0x27c)]['onDatabaseLoaded']=function(){const _0x2dfc55=_0x4ec4b9;VisuMZ[_0x2dfc55(0x33a)][_0x2dfc55(0x207)][_0x2dfc55(0x31d)](this),this['process_VisuMZ_MessageCore_TextCodes_Action'](),this[_0x2dfc55(0x23c)](),this[_0x2dfc55(0x431)](),this[_0x2dfc55(0x399)]();},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x393)]=function(_0x45a92f){const _0x9f155d=_0x4ec4b9,_0x1ef6f8=VisuMZ[_0x9f155d(0x33a)][_0x9f155d(0x1ee)][_0x45a92f];_0x1ef6f8[_0x9f155d(0x4bc)]((_0x3c9395,_0x83e3e1)=>{const _0x3390e5=_0x9f155d;if(!_0x3c9395||!_0x83e3e1)return-0x1;return _0x83e3e1['Match'][_0x3390e5(0x3e2)]-_0x3c9395[_0x3390e5(0x2b8)][_0x3390e5(0x3e2)];});},Scene_Boot['prototype']['process_VisuMZ_MessageCore_TextCodes_Action']=function(){const _0x539ed4=_0x4ec4b9;VisuMZ['MessageCore'][_0x539ed4(0x393)](_0x539ed4(0x300));for(const _0x1d4f61 of VisuMZ[_0x539ed4(0x33a)][_0x539ed4(0x1ee)][_0x539ed4(0x300)]){_0x1d4f61[_0x539ed4(0x2b8)]=_0x1d4f61[_0x539ed4(0x2b8)][_0x539ed4(0x33e)](),_0x1d4f61[_0x539ed4(0x230)]=new RegExp('\x1b'+_0x1d4f61['Match'],'gi'),_0x1d4f61['textCodeResult']='\x1b'+_0x1d4f61['Match'];if(_0x1d4f61[_0x539ed4(0x45f)]==='')_0x1d4f61[_0x539ed4(0x40f)]+='[0]';}},Scene_Boot[_0x4ec4b9(0x27c)][_0x4ec4b9(0x23c)]=function(){const _0x2953e3=_0x4ec4b9;VisuMZ[_0x2953e3(0x33a)][_0x2953e3(0x393)](_0x2953e3(0x41b));for(const _0x16e7b6 of VisuMZ[_0x2953e3(0x33a)][_0x2953e3(0x1ee)]['TextCodeReplace']){_0x16e7b6[_0x2953e3(0x230)]=new RegExp('\x1b'+_0x16e7b6['Match']+_0x16e7b6[_0x2953e3(0x45f)],'gi'),_0x16e7b6[_0x2953e3(0x42a)]!==''&&_0x16e7b6[_0x2953e3(0x42a)]!==_0x2953e3(0x437)?_0x16e7b6[_0x2953e3(0x40f)]=new Function(_0x2953e3(0x3c2)+_0x16e7b6[_0x2953e3(0x42a)][_0x2953e3(0x3ea)](/\\/g,'\x1b')+'\x27'):_0x16e7b6[_0x2953e3(0x40f)]=_0x16e7b6[_0x2953e3(0x281)];}},Scene_Boot[_0x4ec4b9(0x27c)][_0x4ec4b9(0x431)]=function(){const _0x4226de=_0x4ec4b9;for(const _0x5f3931 of VisuMZ[_0x4226de(0x33a)][_0x4226de(0x1ee)][_0x4226de(0x3da)]){_0x5f3931[_0x4226de(0x230)]=new RegExp('\x5c['+_0x5f3931['Match']+'\x5c]','gi');if(_0x5f3931[_0x4226de(0x42a)]!==''&&_0x5f3931[_0x4226de(0x42a)]!==_0x4226de(0x437)){let _0x186667=_0x5f3931[_0x4226de(0x42a)];_0x186667=_0x186667[_0x4226de(0x3ea)](/\\/g,'\x1b'),_0x186667=_0x186667['replace']('\x27','\x5c\x27'),_0x186667=_0x186667[_0x4226de(0x3ea)]('\x22','\x5c\x22'),_0x5f3931[_0x4226de(0x40f)]=new Function(_0x4226de(0x3c2)+_0x186667+'\x27');}else _0x5f3931[_0x4226de(0x40f)]=_0x5f3931[_0x4226de(0x281)];}},Scene_Boot[_0x4ec4b9(0x27c)][_0x4ec4b9(0x399)]=function(){const _0x47b913=_0x4ec4b9,_0x17a3db=VisuMZ['MessageCore'][_0x47b913(0x1ee)][_0x47b913(0x3f5)];!VisuMZ['ParseAllNotetags']&&(VisuMZ[_0x47b913(0x33a)][_0x47b913(0x369)]($dataClasses,_0x17a3db[_0x47b913(0x3d6)]),VisuMZ[_0x47b913(0x33a)][_0x47b913(0x369)]($dataSkills,_0x17a3db[_0x47b913(0x3b8)]),VisuMZ['MessageCore'][_0x47b913(0x369)]($dataItems,_0x17a3db['Items']),VisuMZ[_0x47b913(0x33a)]['AddAutoColor']($dataWeapons,_0x17a3db[_0x47b913(0x424)]),VisuMZ[_0x47b913(0x33a)]['AddAutoColor']($dataArmors,_0x17a3db[_0x47b913(0x3df)]),VisuMZ['MessageCore'][_0x47b913(0x369)]($dataEnemies,_0x17a3db[_0x47b913(0x352)]),VisuMZ[_0x47b913(0x33a)]['AddAutoColor']($dataStates,_0x17a3db[_0x47b913(0x47e)])),VisuMZ[_0x47b913(0x33a)]['CreateAutoColorRegExpLists']();},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x380)]=['V','N','P','C','I','PX','PY','G','{','}','<','>','FS','\x5c','$','.','|','!','<','>','^',_0x4ec4b9(0x36e),'</B>',_0x4ec4b9(0x1fc),'</I>',_0x4ec4b9(0x2cf),_0x4ec4b9(0x475),_0x4ec4b9(0x384),_0x4ec4b9(0x25c),_0x4ec4b9(0x3cc),_0x4ec4b9(0x462),_0x4ec4b9(0x495),'</COLORLOCK>','(((',_0x4ec4b9(0x295),_0x4ec4b9(0x4a3),'</WORDWRAP>',_0x4ec4b9(0x310),_0x4ec4b9(0x2d4),_0x4ec4b9(0x224),'CENTERPICTURE',_0x4ec4b9(0x483),_0x4ec4b9(0x21c),_0x4ec4b9(0x499),_0x4ec4b9(0x2ad),_0x4ec4b9(0x1ef),_0x4ec4b9(0x2ef),_0x4ec4b9(0x2e7),'SWITCHES',_0x4ec4b9(0x448),_0x4ec4b9(0x370)],VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x369)]=function(_0x1faab4,_0x43f7d2){const _0xc3fd8d=_0x4ec4b9;if(_0x43f7d2<=0x0)return;const _0x53cc1c=_0x1faab4;for(const _0x48099c of _0x53cc1c){if(!_0x48099c)continue;VisuMZ[_0xc3fd8d(0x33a)][_0xc3fd8d(0x28a)](_0x48099c,_0x43f7d2);}},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x223)]=function(){const _0x5812eb=_0x4ec4b9;VisuMZ[_0x5812eb(0x33a)][_0x5812eb(0x2a5)]=[];for(let _0x43a742=0x1;_0x43a742<=0x1f;_0x43a742++){const _0x4e61f8=_0x5812eb(0x319)[_0x5812eb(0x264)](_0x43a742),_0x4f2ec2=VisuMZ[_0x5812eb(0x33a)]['Settings']['AutoColor'][_0x4e61f8];_0x4f2ec2[_0x5812eb(0x4bc)]((_0x3d0222,_0x55e23b)=>{const _0x220002=_0x5812eb;if(!_0x3d0222||!_0x55e23b)return-0x1;return _0x55e23b[_0x220002(0x3e2)]-_0x3d0222[_0x220002(0x3e2)];}),this[_0x5812eb(0x30e)](_0x4f2ec2,_0x43a742);}},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x30e)]=function(_0x127002,_0x2128e2){const _0x34fadf=_0x4ec4b9;for(const _0x4b51e6 of _0x127002){if(_0x4b51e6[_0x34fadf(0x3e2)]<=0x0)continue;if(/^\d+$/[_0x34fadf(0x3c4)](_0x4b51e6))continue;let _0x1ee7b9=VisuMZ['MessageCore']['ConvertTextAutoColorRegExpFriendly'](_0x4b51e6);if(_0x4b51e6['match'](/[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B/g))var _0x1a6a4a=new RegExp(_0x1ee7b9,'i');else var _0x1a6a4a=new RegExp('\x5cb'+_0x1ee7b9+'\x5cb','g');VisuMZ[_0x34fadf(0x33a)][_0x34fadf(0x2a5)][_0x34fadf(0x3c9)]([_0x1a6a4a,_0x34fadf(0x425)[_0x34fadf(0x264)](_0x2128e2,_0x4b51e6)]);}},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x2a1)]=function(_0x1fd652){const _0x5c5b50=_0x4ec4b9;return _0x1fd652=_0x1fd652[_0x5c5b50(0x3ea)](/(\W)/gi,(_0x3fad8c,_0x360dd1)=>_0x5c5b50(0x2ce)['format'](_0x360dd1)),_0x1fd652;},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x435)]=VisuMZ[_0x4ec4b9(0x435)],VisuMZ['ParseClassNotetags']=function(_0x40ac6b){const _0x21fc41=_0x4ec4b9;VisuMZ[_0x21fc41(0x33a)][_0x21fc41(0x435)][_0x21fc41(0x31d)](this,_0x40ac6b);const _0x55ee61=VisuMZ['MessageCore'][_0x21fc41(0x1ee)][_0x21fc41(0x3f5)];VisuMZ[_0x21fc41(0x33a)]['CreateAutoColorFor'](_0x40ac6b,_0x55ee61['Classes']);},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x375)]=VisuMZ[_0x4ec4b9(0x375)],VisuMZ['ParseSkillNotetags']=function(_0x3673b3){const _0x2f432b=_0x4ec4b9;VisuMZ[_0x2f432b(0x33a)][_0x2f432b(0x375)][_0x2f432b(0x31d)](this,_0x3673b3);const _0x38306b=VisuMZ[_0x2f432b(0x33a)][_0x2f432b(0x1ee)][_0x2f432b(0x3f5)];VisuMZ[_0x2f432b(0x33a)]['CreateAutoColorFor'](_0x3673b3,_0x38306b[_0x2f432b(0x3b8)]);},0x7,VisuMZ['MessageCore'][_0x4ec4b9(0x2d8)]=VisuMZ[_0x4ec4b9(0x2d8)],VisuMZ[_0x4ec4b9(0x2d8)]=function(_0x13fd72){const _0x24952a=_0x4ec4b9;VisuMZ[_0x24952a(0x33a)]['ParseItemNotetags'][_0x24952a(0x31d)](this,_0x13fd72);const _0x224d3f=VisuMZ[_0x24952a(0x33a)][_0x24952a(0x1ee)][_0x24952a(0x3f5)];VisuMZ[_0x24952a(0x33a)][_0x24952a(0x28a)](_0x13fd72,_0x224d3f[_0x24952a(0x3fd)]);},VisuMZ['MessageCore'][_0x4ec4b9(0x2c8)]=VisuMZ[_0x4ec4b9(0x2c8)],VisuMZ[_0x4ec4b9(0x2c8)]=function(_0x1bc195){const _0xcbf958=_0x4ec4b9;VisuMZ[_0xcbf958(0x33a)][_0xcbf958(0x2c8)]['call'](this,_0x1bc195);const _0x356679=VisuMZ[_0xcbf958(0x33a)][_0xcbf958(0x1ee)][_0xcbf958(0x3f5)];VisuMZ[_0xcbf958(0x33a)][_0xcbf958(0x28a)](_0x1bc195,_0x356679[_0xcbf958(0x424)]);},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x2f9)]=VisuMZ[_0x4ec4b9(0x2f9)],VisuMZ[_0x4ec4b9(0x2f9)]=function(_0x2351b0){const _0x5a9b6b=_0x4ec4b9;VisuMZ[_0x5a9b6b(0x33a)]['ParseArmorNotetags'][_0x5a9b6b(0x31d)](this,_0x2351b0);const _0x3c55da=VisuMZ[_0x5a9b6b(0x33a)]['Settings']['AutoColor'];VisuMZ[_0x5a9b6b(0x33a)][_0x5a9b6b(0x28a)](_0x2351b0,_0x3c55da['Armors']);},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x29a)]=VisuMZ[_0x4ec4b9(0x29a)],VisuMZ[_0x4ec4b9(0x29a)]=function(_0x45350b){const _0x3d0657=_0x4ec4b9;VisuMZ[_0x3d0657(0x33a)][_0x3d0657(0x29a)][_0x3d0657(0x31d)](this,_0x45350b);const _0x45181b=VisuMZ[_0x3d0657(0x33a)][_0x3d0657(0x1ee)][_0x3d0657(0x3f5)];VisuMZ[_0x3d0657(0x33a)][_0x3d0657(0x28a)](_0x45350b,_0x45181b[_0x3d0657(0x352)]);},VisuMZ['MessageCore']['ParseStateNotetags']=VisuMZ[_0x4ec4b9(0x3c3)],VisuMZ[_0x4ec4b9(0x3c3)]=function(_0x3fdb41){const _0x121ff5=_0x4ec4b9;VisuMZ['MessageCore'][_0x121ff5(0x3c3)][_0x121ff5(0x31d)](this,_0x3fdb41);const _0x4eb76a=VisuMZ[_0x121ff5(0x33a)][_0x121ff5(0x1ee)][_0x121ff5(0x3f5)];VisuMZ['MessageCore']['CreateAutoColorFor'](_0x3fdb41,_0x4eb76a[_0x121ff5(0x47e)]);},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x28a)]=function(_0x4a0926,_0x112405){const _0x242cd0=_0x4ec4b9;if(_0x112405<=0x0)return;const _0x105da0=VisuMZ[_0x242cd0(0x33a)][_0x242cd0(0x1ee)]['AutoColor'][_0x242cd0(0x493)+_0x112405];let _0x5cf44a=_0x4a0926[_0x242cd0(0x45e)][_0x242cd0(0x47b)]();if(/^\d+$/[_0x242cd0(0x3c4)](_0x5cf44a))return;if(VisuMZ[_0x242cd0(0x33a)][_0x242cd0(0x380)][_0x242cd0(0x37d)](_0x5cf44a[_0x242cd0(0x33e)]()))return;_0x5cf44a=_0x5cf44a[_0x242cd0(0x3ea)](/\\I\[(\d+)\]/gi,''),_0x5cf44a=_0x5cf44a['replace'](/\x1bI\[(\d+)\]/gi,'');if(_0x5cf44a[_0x242cd0(0x3e2)]<=0x0)return;if(_0x5cf44a[_0x242cd0(0x471)](/-----/i))return;_0x105da0[_0x242cd0(0x3c9)](_0x5cf44a);},SceneManager[_0x4ec4b9(0x26e)]=function(){const _0x476db2=_0x4ec4b9;return this['_scene']&&this[_0x476db2(0x3a4)][_0x476db2(0x1f9)]===Scene_Battle;},SceneManager[_0x4ec4b9(0x3a9)]=function(){const _0x385184=_0x4ec4b9;return this[_0x385184(0x3a4)]&&this[_0x385184(0x3a4)]['constructor']===Scene_Map;},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x267)]=TextManager[_0x4ec4b9(0x378)],TextManager[_0x4ec4b9(0x378)]=function(_0x570e79){const _0x12d81b=_0x4ec4b9,_0x202438=['levelUp',_0x12d81b(0x252),_0x12d81b(0x36c),_0x12d81b(0x214),_0x12d81b(0x40c),_0x12d81b(0x220),'escapeStart',_0x12d81b(0x2f5),_0x12d81b(0x28e),_0x12d81b(0x234)];let _0x23a1f3=VisuMZ[_0x12d81b(0x33a)][_0x12d81b(0x267)][_0x12d81b(0x31d)](this,_0x570e79);return _0x202438['includes'](_0x570e79)&&(_0x23a1f3=_0x12d81b(0x2cc)+_0x23a1f3),_0x23a1f3;},ConfigManager[_0x4ec4b9(0x262)]=VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x1ee)][_0x4ec4b9(0x4ab)]['Default'],VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x1df)]=ConfigManager['makeData'],ConfigManager[_0x4ec4b9(0x3e3)]=function(){const _0x2958b9=_0x4ec4b9,_0xe6807f=VisuMZ['MessageCore'][_0x2958b9(0x1df)][_0x2958b9(0x31d)](this);return _0xe6807f[_0x2958b9(0x262)]=this['textSpeed'],_0xe6807f;},VisuMZ[_0x4ec4b9(0x33a)]['ConfigManager_applyData']=ConfigManager[_0x4ec4b9(0x31e)],ConfigManager['applyData']=function(_0x2c0eb3){const _0x55c421=_0x4ec4b9;VisuMZ[_0x55c421(0x33a)][_0x55c421(0x327)]['call'](this,_0x2c0eb3),_0x55c421(0x262)in _0x2c0eb3?this[_0x55c421(0x262)]=Number(_0x2c0eb3['textSpeed'])[_0x55c421(0x314)](0x1,0xb):this[_0x55c421(0x262)]=VisuMZ['MessageCore'][_0x55c421(0x1ee)][_0x55c421(0x4ab)]['Default'];},TextManager[_0x4ec4b9(0x308)]=VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x1ee)][_0x4ec4b9(0x4ab)][_0x4ec4b9(0x3fc)],TextManager['instantTextSpeed']=VisuMZ[_0x4ec4b9(0x33a)]['Settings'][_0x4ec4b9(0x4ab)][_0x4ec4b9(0x39a)],Game_Temp[_0x4ec4b9(0x27c)][_0x4ec4b9(0x3fa)]=function(_0x11eec5){this['_lastPluginCommandInterpreter']=_0x11eec5;},Game_Temp['prototype']['getLastPluginCommandInterpreter']=function(){return this['_lastPluginCommandInterpreter'];},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x282)]=Game_Interpreter[_0x4ec4b9(0x27c)][_0x4ec4b9(0x400)],Game_Interpreter[_0x4ec4b9(0x27c)][_0x4ec4b9(0x400)]=function(_0x3a6dc3){const _0x5176ca=_0x4ec4b9;return $gameTemp['setLastPluginCommandInterpreter'](this),VisuMZ[_0x5176ca(0x33a)][_0x5176ca(0x282)][_0x5176ca(0x31d)](this,_0x3a6dc3);},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x2b6)]=Game_System['prototype']['initialize'],Game_System['prototype']['initialize']=function(){const _0x1fec67=_0x4ec4b9;VisuMZ[_0x1fec67(0x33a)][_0x1fec67(0x2b6)][_0x1fec67(0x31d)](this),this['initMessageCore']();},Game_System[_0x4ec4b9(0x27c)]['initMessageCore']=function(){const _0x4d2899=_0x4ec4b9,_0x4bbe5e=VisuMZ[_0x4d2899(0x33a)][_0x4d2899(0x1ee)][_0x4d2899(0x3fe)],_0x2881e2=VisuMZ[_0x4d2899(0x33a)][_0x4d2899(0x1ee)][_0x4d2899(0x28d)];this[_0x4d2899(0x3ac)]={'messageRows':_0x4bbe5e[_0x4d2899(0x381)],'messageWidth':_0x4bbe5e[_0x4d2899(0x4ae)],'messageWordWrap':_0x2881e2[_0x4d2899(0x280)],'helpWordWrap':_0x2881e2[_0x4d2899(0x347)],'choiceLineHeight':_0x4bbe5e[_0x4d2899(0x2ca)],'choiceRows':_0x4bbe5e[_0x4d2899(0x259)],'choiceCols':_0x4bbe5e[_0x4d2899(0x48b)],'choiceTextAlign':_0x4bbe5e[_0x4d2899(0x263)]},this[_0x4d2899(0x39f)]===undefined&&(this[_0x4d2899(0x39f)]=_0x4bbe5e[_0x4d2899(0x3d1)],this[_0x4d2899(0x296)]=_0x4bbe5e[_0x4d2899(0x23b)]);},Game_System['prototype']['getMessageWindowRows']=function(){const _0x3f3851=_0x4ec4b9;if(this['_MessageCoreSettings']===undefined)this[_0x3f3851(0x363)]();if(this[_0x3f3851(0x3ac)]['messageRows']===undefined)this[_0x3f3851(0x363)]();return this['_MessageCoreSettings']['messageRows'];},Game_System[_0x4ec4b9(0x27c)][_0x4ec4b9(0x394)]=function(_0x4d88ee){const _0x250926=_0x4ec4b9;if(this[_0x250926(0x3ac)]===undefined)this[_0x250926(0x363)]();if(this[_0x250926(0x3ac)]['messageRows']===undefined)this['initMessageCore']();this['_MessageCoreSettings'][_0x250926(0x1ed)]=_0x4d88ee||0x1;},Game_System['prototype'][_0x4ec4b9(0x391)]=function(){const _0x59fed5=_0x4ec4b9;if(this[_0x59fed5(0x3ac)]===undefined)this[_0x59fed5(0x363)]();if(this['_MessageCoreSettings']['messageWidth']===undefined)this[_0x59fed5(0x363)]();return this[_0x59fed5(0x3ac)][_0x59fed5(0x21e)];},Game_System[_0x4ec4b9(0x27c)][_0x4ec4b9(0x3f3)]=function(_0x2f32c0){const _0x2c3b11=_0x4ec4b9;if(this['_MessageCoreSettings']===undefined)this[_0x2c3b11(0x363)]();if(this[_0x2c3b11(0x3ac)][_0x2c3b11(0x21e)]===undefined)this['initMessageCore']();_0x2f32c0=Math[_0x2c3b11(0x2e9)](_0x2f32c0);if(_0x2f32c0%0x2!==0x0)_0x2f32c0+=0x1;this[_0x2c3b11(0x3ac)][_0x2c3b11(0x21e)]=_0x2f32c0||0x2;},Game_System['prototype'][_0x4ec4b9(0x40b)]=function(){const _0x5dfcca=_0x4ec4b9;if(this[_0x5dfcca(0x3ac)]===undefined)this[_0x5dfcca(0x363)]();if(this[_0x5dfcca(0x3ac)][_0x5dfcca(0x354)]===undefined)this['initMessageCore']();return this['_MessageCoreSettings'][_0x5dfcca(0x354)];},Game_System[_0x4ec4b9(0x27c)]['setMessageWindowWordWrap']=function(_0x58e761){const _0x58206f=_0x4ec4b9;if(this[_0x58206f(0x3ac)]===undefined)this[_0x58206f(0x363)]();if(this[_0x58206f(0x3ac)]['messageWordWrap']===undefined)this[_0x58206f(0x363)]();this[_0x58206f(0x3ac)]['messageWordWrap']=_0x58e761;},Game_System['prototype']['getMessageWindowXyOffsets']=function(){const _0x34057c=_0x4ec4b9;if(this[_0x34057c(0x39f)]===undefined){const _0x2ad608=VisuMZ[_0x34057c(0x33a)]['Settings'][_0x34057c(0x3fe)];this[_0x34057c(0x39f)]=_0x2ad608[_0x34057c(0x3d1)],this[_0x34057c(0x296)]=_0x2ad608['MsgWindowOffsetY'];}return{'x':this[_0x34057c(0x39f)]||0x0,'y':this[_0x34057c(0x296)]||0x0};},Game_System[_0x4ec4b9(0x27c)][_0x4ec4b9(0x3b1)]=function(_0x27e8f1,_0x3008b9){const _0x1cf6d4=_0x4ec4b9;if(this[_0x1cf6d4(0x3ac)]===undefined)this[_0x1cf6d4(0x363)]();this['_messageOffsetX']=_0x27e8f1,this[_0x1cf6d4(0x296)]=_0x3008b9;},Game_System[_0x4ec4b9(0x27c)]['isHelpWindowWordWrap']=function(){const _0x4c10bb=_0x4ec4b9;if(this['_MessageCoreSettings']===undefined)this['initMessageCore']();if(this[_0x4c10bb(0x3ac)][_0x4c10bb(0x42c)]===undefined)this[_0x4c10bb(0x363)]();return this[_0x4c10bb(0x3ac)][_0x4c10bb(0x42c)];},Game_System[_0x4ec4b9(0x27c)]['setHelpWindowWordWrap']=function(_0x4eacfa){const _0x54a1aa=_0x4ec4b9;if(this[_0x54a1aa(0x3ac)]===undefined)this[_0x54a1aa(0x363)]();if(this[_0x54a1aa(0x3ac)]['helpWordWrap']===undefined)this[_0x54a1aa(0x363)]();this[_0x54a1aa(0x3ac)]['helpWordWrap']=_0x4eacfa;},Game_System['prototype']['getChoiceListLineHeight']=function(){const _0x5b4f85=_0x4ec4b9;if(this[_0x5b4f85(0x3ac)]===undefined)this[_0x5b4f85(0x363)]();if(this[_0x5b4f85(0x3ac)][_0x5b4f85(0x44c)]===undefined)this['initMessageCore']();return this[_0x5b4f85(0x3ac)][_0x5b4f85(0x44c)];},Game_System[_0x4ec4b9(0x27c)][_0x4ec4b9(0x355)]=function(_0x1823fa){const _0x2a9567=_0x4ec4b9;if(this[_0x2a9567(0x3ac)]===undefined)this['initMessageCore']();if(this[_0x2a9567(0x3ac)][_0x2a9567(0x44c)]===undefined)this[_0x2a9567(0x363)]();this[_0x2a9567(0x3ac)][_0x2a9567(0x44c)]=_0x1823fa||0x1;},Game_System['prototype'][_0x4ec4b9(0x372)]=function(){const _0x2e155e=_0x4ec4b9;if(this['_MessageCoreSettings']===undefined)this['initMessageCore']();if(this[_0x2e155e(0x3ac)][_0x2e155e(0x1e8)]===undefined)this['initMessageCore']();return this[_0x2e155e(0x3ac)][_0x2e155e(0x1e8)];},Game_System[_0x4ec4b9(0x27c)][_0x4ec4b9(0x3ee)]=function(_0xd16f43){const _0x288c2f=_0x4ec4b9;if(this[_0x288c2f(0x3ac)]===undefined)this[_0x288c2f(0x363)]();if(this['_MessageCoreSettings'][_0x288c2f(0x1e8)]===undefined)this[_0x288c2f(0x363)]();this[_0x288c2f(0x3ac)]['choiceRows']=_0xd16f43||0x1;},Game_System[_0x4ec4b9(0x27c)]['getChoiceListMaxColumns']=function(){const _0x50f550=_0x4ec4b9;if(this['_MessageCoreSettings']===undefined)this[_0x50f550(0x363)]();if(this[_0x50f550(0x3ac)][_0x50f550(0x403)]===undefined)this[_0x50f550(0x363)]();return this[_0x50f550(0x3ac)][_0x50f550(0x403)];},Game_System[_0x4ec4b9(0x27c)]['setChoiceListMaxColumns']=function(_0x439957){const _0x11e789=_0x4ec4b9;if(this[_0x11e789(0x3ac)]===undefined)this['initMessageCore']();if(this[_0x11e789(0x3ac)][_0x11e789(0x403)]===undefined)this['initMessageCore']();this[_0x11e789(0x3ac)][_0x11e789(0x403)]=_0x439957||0x1;},Game_System['prototype'][_0x4ec4b9(0x474)]=function(){const _0x474b94=_0x4ec4b9;if(this[_0x474b94(0x3ac)]===undefined)this[_0x474b94(0x363)]();if(this[_0x474b94(0x3ac)][_0x474b94(0x3ec)]===undefined)this['initMessageCore']();return this[_0x474b94(0x3ac)][_0x474b94(0x3ec)];},Game_System['prototype'][_0x4ec4b9(0x3b0)]=function(_0x34ca62){const _0x3934ef=_0x4ec4b9;if(this[_0x3934ef(0x3ac)]===undefined)this['initMessageCore']();if(this[_0x3934ef(0x3ac)][_0x3934ef(0x3ec)]===undefined)this[_0x3934ef(0x363)]();this[_0x3934ef(0x3ac)][_0x3934ef(0x3ec)]=_0x34ca62[_0x3934ef(0x34a)]();},Game_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x477)]=function(_0x58059f,_0x959058){const _0x5a2fe3=_0x4ec4b9;this['_itemChoiceVariableId']=_0x58059f,this[_0x5a2fe3(0x377)]=_0x5a2fe3(0x335),this[_0x5a2fe3(0x4a2)]=_0x959058,this[_0x5a2fe3(0x23f)]=0x0;},Game_Message[_0x4ec4b9(0x27c)]['itemChoiceWtypeId']=function(){const _0x5568b5=_0x4ec4b9;return this[_0x5568b5(0x4a2)]||0x0;},Game_Message['prototype'][_0x4ec4b9(0x3ef)]=function(_0x42211e,_0x531cdb,_0x5c9a57){const _0x277454=_0x4ec4b9;this[_0x277454(0x277)]=_0x42211e,this['_itemChoiceItypeId']='armor',this[_0x277454(0x306)]=_0x531cdb,this[_0x277454(0x23f)]=_0x5c9a57;},Game_Message[_0x4ec4b9(0x27c)]['itemChoiceAtypeId']=function(){return this['_itemChoiceAtypeId']||0x0;},Game_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x271)]=function(){const _0x3ac7ce=_0x4ec4b9;return this[_0x3ac7ce(0x23f)]||0x0;},Game_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x419)]=function(_0x46756e,_0x248db9,_0x5249ea){const _0xebad1d=_0x4ec4b9;this[_0xebad1d(0x277)]=_0x46756e,this['_itemChoiceItypeId']=_0xebad1d(0x222),this[_0xebad1d(0x2fa)]=_0x248db9,this[_0xebad1d(0x334)]=_0x5249ea;},Game_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x1fd)]=function(){return this['_itemChoiceActorId']||0x0;},Game_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x44a)]=function(){const _0x195755=_0x4ec4b9;return $gameActors[_0x195755(0x20f)](this[_0x195755(0x1fd)]())||$gameParty[_0x195755(0x386)]()||null;},Game_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x2d9)]=function(){const _0x3368a5=_0x4ec4b9;return this[_0x3368a5(0x334)]||0x0;},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x27a)]=Game_Screen[_0x4ec4b9(0x27c)][_0x4ec4b9(0x40a)],Game_Screen[_0x4ec4b9(0x27c)][_0x4ec4b9(0x40a)]=function(){const _0x39aae2=_0x4ec4b9;VisuMZ[_0x39aae2(0x33a)][_0x39aae2(0x27a)][_0x39aae2(0x31d)](this),this[_0x39aae2(0x3b4)]();},Game_Screen[_0x4ec4b9(0x27c)][_0x4ec4b9(0x3b4)]=function(){const _0x458f79=_0x4ec4b9;this[_0x458f79(0x459)]=[],this['_pictureTextBuffer']=[],this[_0x458f79(0x255)]=[];},Game_Screen['prototype'][_0x4ec4b9(0x44f)]=function(_0x5a5028){const _0x4bd9ec=_0x4ec4b9;if(this[_0x4bd9ec(0x459)]===undefined)this[_0x4bd9ec(0x3b4)]();const _0x2d05e4=this['realPictureId'](_0x5a5028);return this[_0x4bd9ec(0x459)][_0x2d05e4]=this[_0x4bd9ec(0x459)][_0x2d05e4]||{},this[_0x4bd9ec(0x459)][_0x2d05e4];},Game_Screen['prototype'][_0x4ec4b9(0x216)]=function(_0x367cbc,_0x66da37){const _0x21c573=_0x4ec4b9;return _0x66da37=_0x66da37[_0x21c573(0x34a)]()[_0x21c573(0x47b)](),this['getPictureTextData'](_0x367cbc)[_0x66da37]||'';},Game_Screen[_0x4ec4b9(0x27c)][_0x4ec4b9(0x434)]=function(_0xdf9be9,_0x4daadf,_0x38dae2){const _0x396f4e=_0x4ec4b9;_0x38dae2=_0x38dae2[_0x396f4e(0x34a)]()[_0x396f4e(0x47b)](),this['getPictureTextData'](_0xdf9be9)[_0x38dae2]=_0x4daadf||'',this['requestPictureTextRefresh'](_0xdf9be9,!![]);},Game_Screen[_0x4ec4b9(0x27c)][_0x4ec4b9(0x38c)]=function(_0x33e525){const _0x523438=_0x4ec4b9;if(this['_pictureText']===undefined)this[_0x523438(0x3b4)]();const _0x303771=this[_0x523438(0x322)](_0x33e525);this[_0x523438(0x459)][_0x303771]=null,this['requestPictureTextRefresh'](_0x33e525,!![]);},Game_Screen[_0x4ec4b9(0x27c)]['getPictureTextBuffer']=function(_0x479b82){const _0x4859b5=_0x4ec4b9;if(this[_0x4859b5(0x459)]===undefined)this['clearAllPictureTexts']();const _0x489d62=this[_0x4859b5(0x322)](_0x479b82);return this[_0x4859b5(0x45d)][_0x489d62]||0x0;},Game_Screen['prototype']['setPictureTextBuffer']=function(_0x2e8299,_0x5535d6){const _0x25b276=_0x4ec4b9;if(this[_0x25b276(0x459)]===undefined)this[_0x25b276(0x3b4)]();const _0x34b36d=this[_0x25b276(0x322)](_0x2e8299);this[_0x25b276(0x45d)][_0x34b36d]=Math['max'](0x0,_0x5535d6);},Game_Screen[_0x4ec4b9(0x27c)][_0x4ec4b9(0x22f)]=function(_0x409e9d){const _0x3dbed2=_0x4ec4b9;if(this[_0x3dbed2(0x459)]===undefined)this[_0x3dbed2(0x3b4)]();const _0x29a9cb=this[_0x3dbed2(0x322)](_0x409e9d);this[_0x3dbed2(0x45d)][_0x29a9cb]=undefined;},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x3af)]=Game_Screen[_0x4ec4b9(0x27c)][_0x4ec4b9(0x43d)],Game_Screen[_0x4ec4b9(0x27c)]['erasePicture']=function(_0x3f2963){const _0x5335d4=_0x4ec4b9;VisuMZ[_0x5335d4(0x33a)][_0x5335d4(0x3af)][_0x5335d4(0x31d)](this,_0x3f2963),this[_0x5335d4(0x38c)](_0x3f2963),this['erasePictureTextBuffer'](_0x3f2963),this['requestPictureTextRefresh'](_0x3f2963,!![]);},Game_Screen[_0x4ec4b9(0x27c)][_0x4ec4b9(0x359)]=function(){const _0x310111=_0x4ec4b9;for(const _0x264fdd of this[_0x310111(0x342)]){if(_0x264fdd){let _0x1035c6=this[_0x310111(0x342)][_0x310111(0x2fc)](_0x264fdd);this[_0x310111(0x324)](_0x1035c6);}}},Game_Screen['prototype'][_0x4ec4b9(0x324)]=function(_0x20c0fe,_0xdfac1b){const _0x42de93=_0x4ec4b9;this[_0x42de93(0x255)]=this['_pictureTextRefresh']||[],(this[_0x42de93(0x2e1)](_0x20c0fe)||_0xdfac1b)&&this[_0x42de93(0x255)][_0x42de93(0x3c9)](_0x20c0fe);},Game_Screen[_0x4ec4b9(0x27c)][_0x4ec4b9(0x2c0)]=function(_0x48097d){const _0x283384=_0x4ec4b9;return this['_pictureTextRefresh']=this['_pictureTextRefresh']||[],this[_0x283384(0x255)][_0x283384(0x37d)](_0x48097d);},Game_Screen[_0x4ec4b9(0x27c)][_0x4ec4b9(0x276)]=function(_0x132b95){const _0x2e0944=_0x4ec4b9;this['_pictureTextRefresh']=this[_0x2e0944(0x255)]||[],this[_0x2e0944(0x255)]['remove'](_0x132b95);},Game_Screen['prototype'][_0x4ec4b9(0x2e1)]=function(_0x5ea0eb){const _0x2b5eef=_0x4ec4b9,_0x173dc4=[_0x2b5eef(0x344),'up','upperright','left',_0x2b5eef(0x232),_0x2b5eef(0x4c9),_0x2b5eef(0x3e6),_0x2b5eef(0x3c6),_0x2b5eef(0x227)];return _0x173dc4[_0x2b5eef(0x48a)](_0x135674=>this[_0x2b5eef(0x216)](_0x5ea0eb,_0x135674)!=='');},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x379)]=Game_Party[_0x4ec4b9(0x27c)][_0x4ec4b9(0x313)],Game_Party[_0x4ec4b9(0x27c)]['initialize']=function(){const _0x55f712=_0x4ec4b9;VisuMZ[_0x55f712(0x33a)][_0x55f712(0x379)]['call'](this),this[_0x55f712(0x363)]();},Game_Party[_0x4ec4b9(0x27c)][_0x4ec4b9(0x363)]=function(){const _0xc752f=_0x4ec4b9;this[_0xc752f(0x20b)]={'type':0x0,'id':0x0,'quantity':0x0};},Game_Party['prototype'][_0x4ec4b9(0x481)]=function(){const _0x1ea7b2=_0x4ec4b9;if(this[_0x1ea7b2(0x20b)]===undefined)this[_0x1ea7b2(0x363)]();return this[_0x1ea7b2(0x20b)];},Game_Party[_0x4ec4b9(0x27c)][_0x4ec4b9(0x376)]=function(_0x590599,_0x13af9f){const _0x3c7527=_0x4ec4b9;if(this[_0x3c7527(0x20b)]===undefined)this[_0x3c7527(0x363)]();if(!_0x590599)return;if(DataManager[_0x3c7527(0x279)](_0x590599))this[_0x3c7527(0x20b)]['type']=0x0;else{if(DataManager[_0x3c7527(0x248)](_0x590599))this[_0x3c7527(0x20b)][_0x3c7527(0x42d)]=0x1;else DataManager[_0x3c7527(0x4af)](_0x590599)&&(this['_lastGainedItemData'][_0x3c7527(0x42d)]=0x2);}this[_0x3c7527(0x20b)]['id']=_0x590599['id'],this[_0x3c7527(0x20b)][_0x3c7527(0x226)]=_0x13af9f;},VisuMZ['MessageCore'][_0x4ec4b9(0x3d2)]=Game_Party[_0x4ec4b9(0x27c)][_0x4ec4b9(0x47d)],Game_Party[_0x4ec4b9(0x27c)]['gainItem']=function(_0x35fe96,_0x57d001,_0x1b7c3b){const _0x4838a8=_0x4ec4b9;VisuMZ[_0x4838a8(0x33a)][_0x4838a8(0x3d2)][_0x4838a8(0x31d)](this,_0x35fe96,_0x57d001,_0x1b7c3b),_0x57d001>0x0&&this[_0x4838a8(0x376)](_0x35fe96,_0x57d001);},VisuMZ['MessageCore']['Game_Map_initialize']=Game_Map[_0x4ec4b9(0x27c)][_0x4ec4b9(0x313)],Game_Map['prototype']['initialize']=function(){const _0x1a3ca5=_0x4ec4b9;VisuMZ[_0x1a3ca5(0x33a)]['Game_Map_initialize']['call'](this),this[_0x1a3ca5(0x3a3)]=[];},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x4c2)]=Game_Map['prototype'][_0x4ec4b9(0x312)],Game_Map[_0x4ec4b9(0x27c)][_0x4ec4b9(0x312)]=function(){const _0x19609f=_0x4ec4b9;VisuMZ['MessageCore'][_0x19609f(0x4c2)][_0x19609f(0x31d)](this),this[_0x19609f(0x3a3)]=[];},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x215)]=Game_Map['prototype']['updateEvents'],Game_Map['prototype'][_0x4ec4b9(0x3ca)]=function(){const _0x5bf8ed=_0x4ec4b9;VisuMZ[_0x5bf8ed(0x33a)]['Game_Map_updateEvents'][_0x5bf8ed(0x31d)](this),this[_0x5bf8ed(0x3a7)]();},Game_Map[_0x4ec4b9(0x27c)]['addMessageCommonEvent']=function(_0x486bd8){const _0x11c96e=_0x4ec4b9;if(!$dataCommonEvents[_0x486bd8])return;this['_messageCommonEvents']=this['_messageCommonEvents']||[];const _0xdb9954=this[_0x11c96e(0x390)]['_eventId'],_0x41cd1a=new Game_MessageCommonEvent(_0x486bd8,_0xdb9954);this['_messageCommonEvents'][_0x11c96e(0x3c9)](_0x41cd1a);},Game_Map[_0x4ec4b9(0x27c)][_0x4ec4b9(0x3a7)]=function(){const _0x47ccc7=_0x4ec4b9;this[_0x47ccc7(0x3a3)]=this['_messageCommonEvents']||[];for(const _0x17b6d3 of this[_0x47ccc7(0x3a3)]){!_0x17b6d3[_0x47ccc7(0x390)]?this[_0x47ccc7(0x3a3)][_0x47ccc7(0x201)](_0x17b6d3):_0x17b6d3['update']();}},VisuMZ[_0x4ec4b9(0x33a)]['Game_Map_refresh']=Game_Map[_0x4ec4b9(0x27c)][_0x4ec4b9(0x29d)],Game_Map[_0x4ec4b9(0x27c)][_0x4ec4b9(0x29d)]=function(){const _0xa9b76e=_0x4ec4b9;VisuMZ[_0xa9b76e(0x33a)][_0xa9b76e(0x1e4)][_0xa9b76e(0x31d)](this),$gameScreen[_0xa9b76e(0x359)]();},Game_Interpreter[_0x4ec4b9(0x20c)]=pluginData[_0x4ec4b9(0x45e)],Game_Interpreter[_0x4ec4b9(0x27c)][_0x4ec4b9(0x3ae)]=function(_0x307dac){const _0x67f61d=_0x4ec4b9;if($gameMessage['isBusy']())return![];return this[_0x67f61d(0x245)](_0x307dac),this[_0x67f61d(0x411)](_0x307dac),this[_0x67f61d(0x1f4)](_0x307dac),this[_0x67f61d(0x4ac)](_0x67f61d(0x378)),!![];},Game_Interpreter[_0x4ec4b9(0x27c)][_0x4ec4b9(0x245)]=function(_0x30c50d){const _0x1ae0ff=_0x4ec4b9;$gameMessage[_0x1ae0ff(0x421)](_0x30c50d[0x0],_0x30c50d[0x1]),$gameMessage[_0x1ae0ff(0x46c)](_0x30c50d[0x2]),$gameMessage[_0x1ae0ff(0x1fe)](_0x30c50d[0x3]),$gameMessage[_0x1ae0ff(0x2c7)](_0x30c50d[0x4]);},Game_Interpreter[_0x4ec4b9(0x27c)][_0x4ec4b9(0x411)]=function(_0xa3cc59){const _0x344145=_0x4ec4b9;while(this[_0x344145(0x478)]()){this[_0x344145(0x2a6)]++;if(this[_0x344145(0x2b7)]()[_0x344145(0x416)]===0x191){let _0x2adbce=this['currentCommand']()[_0x344145(0x204)][0x0];_0x2adbce=VisuMZ[_0x344145(0x33a)][_0x344145(0x463)](_0x2adbce),$gameMessage[_0x344145(0x492)](_0x2adbce);}if(this[_0x344145(0x343)]())break;}},Game_Interpreter[_0x4ec4b9(0x27c)][_0x4ec4b9(0x478)]=function(){const _0x3addf2=_0x4ec4b9;return this[_0x3addf2(0x451)]()===0x65&&$gameSystem['getMessageWindowRows']()>0x4?!![]:this['nextEventCode']()===0x191;},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x463)]=function(_0x1f11d0){const _0x2abf6e=_0x4ec4b9;return _0x1f11d0=_0x1f11d0['replace'](/<(?:NEXT PAGE|NEXTPAGE)>/gi,''),_0x1f11d0=_0x1f11d0['replace'](/<(?:RNG|RAND|RANDOM)>(.*?)<\/(?:RNG|RAND|RANDOM)>/gi,(_0x561fde,_0x4529ce)=>this[_0x2abf6e(0x2a9)](_0x4529ce)),_0x1f11d0;},VisuMZ['MessageCore'][_0x4ec4b9(0x2a9)]=function(_0x149371){const _0x3d12bf=_0x4ec4b9,_0x240fc6=_0x149371[_0x3d12bf(0x1d9)]('|')[_0x3d12bf(0x297)](_0x28f57b=>_0x28f57b[_0x3d12bf(0x47b)]())[_0x3d12bf(0x201)]('')[_0x3d12bf(0x201)](null);return _0x240fc6[Math[_0x3d12bf(0x420)](_0x240fc6[_0x3d12bf(0x3e2)])];},Game_Interpreter[_0x4ec4b9(0x27c)][_0x4ec4b9(0x343)]=function(){const _0x3d21e1=_0x4ec4b9;if(this['currentCommand']()&&this[_0x3d21e1(0x2b7)]()['parameters'][0x0][_0x3d21e1(0x471)](/<(?:NEXT PAGE|NEXTPAGE)>/gi))return!![];return $gameMessage[_0x3d21e1(0x24d)][_0x3d21e1(0x3e2)]>=$gameSystem[_0x3d21e1(0x254)]()&&this[_0x3d21e1(0x451)]()!==0x191;},Game_Interpreter[_0x4ec4b9(0x27c)][_0x4ec4b9(0x1f4)]=function(_0xd78477){const _0xc746db=_0x4ec4b9;switch(this['nextEventCode']()){case 0x66:this[_0xc746db(0x2a6)]++,this[_0xc746db(0x442)](this[_0xc746db(0x2b7)]()['parameters']);break;case 0x67:this[_0xc746db(0x2a6)]++,this[_0xc746db(0x385)](this['currentCommand']()['parameters']);break;case 0x68:this[_0xc746db(0x2a6)]++,this[_0xc746db(0x43a)](this['currentCommand']()[_0xc746db(0x204)]);break;case 0x165:const _0x3c1a1b=this['_list'][this[_0xc746db(0x2a6)]+0x1],_0xe2900=_0x3c1a1b[_0xc746db(0x204)];_0xe2900[0x0]===Game_Interpreter[_0xc746db(0x20c)]&&this[_0xc746db(0x29c)](_0xe2900);break;}},VisuMZ['MessageCore'][_0x4ec4b9(0x46a)]=Game_Interpreter[_0x4ec4b9(0x27c)][_0x4ec4b9(0x442)],Game_Interpreter[_0x4ec4b9(0x27c)][_0x4ec4b9(0x442)]=function(_0x356004){const _0x534961=_0x4ec4b9;_0x356004=this[_0x534961(0x3ab)](),VisuMZ['MessageCore']['Game_Interpreter_setupChoices'][_0x534961(0x31d)](this,_0x356004);},Game_Interpreter[_0x4ec4b9(0x27c)]['addContinuousShowChoices']=function(){const _0x25448a=_0x4ec4b9,_0x339f42=this[_0x25448a(0x2a6)],_0x41026e=[];let _0x8b8f4d=0x0;this[_0x25448a(0x2a6)]++;while(this[_0x25448a(0x2a6)]<this[_0x25448a(0x3f8)]['length']){if(this[_0x25448a(0x2b7)]()[_0x25448a(0x34c)]===this['_indent']){if(this['currentCommand']()[_0x25448a(0x416)]===0x194&&this['nextEventCode']()!==0x66)break;else{if(this[_0x25448a(0x2b7)]()[_0x25448a(0x416)]===0x66)this['adjustShowChoiceExtension'](_0x8b8f4d,this[_0x25448a(0x2b7)](),_0x339f42),this[_0x25448a(0x2a6)]-=0x2;else this[_0x25448a(0x2b7)]()[_0x25448a(0x416)]===0x192&&(this[_0x25448a(0x2b7)]()[_0x25448a(0x204)][0x0]=_0x8b8f4d,_0x8b8f4d++);}}this[_0x25448a(0x2a6)]++;}return this[_0x25448a(0x2a6)]=_0x339f42,this[_0x25448a(0x2b7)]()[_0x25448a(0x204)];},Game_Interpreter[_0x4ec4b9(0x27c)]['adjustShowChoiceExtension']=function(_0x3c4925,_0xc6222a,_0x2863ec){const _0x3c1572=_0x4ec4b9;this[_0x3c1572(0x426)](_0x3c4925,_0xc6222a,_0x2863ec),this[_0x3c1572(0x2ec)](_0x3c4925,_0xc6222a,_0x2863ec),this[_0x3c1572(0x2fd)](_0xc6222a,_0x2863ec);},Game_Interpreter[_0x4ec4b9(0x27c)]['adjustShowChoiceDefault']=function(_0x509f3d,_0x139b99,_0x3d2328){const _0x1d66bc=_0x4ec4b9;if(_0x139b99['parameters'][0x2]<0x0)return;const _0x3929d0=_0x139b99[_0x1d66bc(0x204)][0x2]+_0x509f3d;this[_0x1d66bc(0x3f8)][_0x3d2328]['parameters'][0x2]=_0x3929d0;},Game_Interpreter[_0x4ec4b9(0x27c)][_0x4ec4b9(0x2ec)]=function(_0x5980aa,_0x359f44,_0x291463){const _0x7856e0=_0x4ec4b9;if(_0x359f44[_0x7856e0(0x204)][0x1]>=0x0){var _0x31177c=_0x359f44[_0x7856e0(0x204)][0x1]+_0x5980aa;this[_0x7856e0(0x3f8)][_0x291463][_0x7856e0(0x204)][0x1]=_0x31177c;}else _0x359f44['parameters'][0x1]===-0x2&&(this[_0x7856e0(0x3f8)][_0x291463]['parameters'][0x1]=_0x359f44['parameters'][0x1]);},Game_Interpreter[_0x4ec4b9(0x27c)][_0x4ec4b9(0x2fd)]=function(_0x5d2406,_0x166f27){const _0x120794=_0x4ec4b9;for(const _0xc0b6a7 of _0x5d2406[_0x120794(0x204)][0x0]){this[_0x120794(0x3f8)][_0x166f27][_0x120794(0x204)][0x0][_0x120794(0x3c9)](_0xc0b6a7);}this[_0x120794(0x3f8)][_0x120794(0x34e)](this['_index']-0x1,0x2);},Game_Interpreter[_0x4ec4b9(0x27c)]['prepareShowTextPluginCommandFollowups']=function(_0xcae4){const _0x3df677=_0x4ec4b9,_0x269acf=_0xcae4[0x1];if(_0x269acf===_0x3df677(0x4aa))this[_0x3df677(0x2a6)]++,this[_0x3df677(0x477)](_0xcae4);else{if(_0x269acf===_0x3df677(0x438))this['_index']++,this['setArmorChoice'](_0xcae4);else _0x269acf===_0x3df677(0x2bd)&&Imported[_0x3df677(0x2ac)]&&(this[_0x3df677(0x2a6)]++,this[_0x3df677(0x419)](_0xcae4));}},Game_Interpreter['prototype'][_0x4ec4b9(0x477)]=function(_0x4ffc9b){const _0x1d7eec=_0x4ec4b9,_0x1ff04e=JSON['parse'](JSON[_0x1d7eec(0x24f)](_0x4ffc9b[0x3]));VisuMZ[_0x1d7eec(0x303)](_0x1ff04e,_0x1ff04e),$gameMessage[_0x1d7eec(0x477)](_0x1ff04e[_0x1d7eec(0x4b3)]||0x0,_0x1ff04e['WeaponTypeID']||0x0);},Game_Interpreter[_0x4ec4b9(0x27c)][_0x4ec4b9(0x3ef)]=function(_0x2264f3){const _0x2bc556=_0x4ec4b9,_0x38a857=JSON[_0x2bc556(0x318)](JSON[_0x2bc556(0x24f)](_0x2264f3[0x3]));VisuMZ[_0x2bc556(0x303)](_0x38a857,_0x38a857),$gameMessage[_0x2bc556(0x3ef)](_0x38a857[_0x2bc556(0x4b3)]||0x0,_0x38a857[_0x2bc556(0x45c)]||0x0,_0x38a857[_0x2bc556(0x29f)]||0x0);},Game_Interpreter[_0x4ec4b9(0x27c)][_0x4ec4b9(0x419)]=function(_0x5a0207){const _0x8771ce=_0x4ec4b9,_0x582ab3=JSON['parse'](JSON[_0x8771ce(0x24f)](_0x5a0207[0x3]));VisuMZ[_0x8771ce(0x303)](_0x582ab3,_0x582ab3),$gameMessage['setSkillChoice'](_0x582ab3[_0x8771ce(0x4b3)]||0x0,_0x582ab3['ActorID']||0x0,_0x582ab3[_0x8771ce(0x467)]||0x0);};function Game_MessageCommonEvent(){const _0xf9ef5f=_0x4ec4b9;this[_0xf9ef5f(0x313)](...arguments);}function _0x3539(){const _0x5b5905=['setLastGainedItemData','_itemChoiceItypeId','message','Game_Party_initialize','currencyUnit','windowWidth','gray','includes','\x1bTEXTALIGNMENT[3]','postFlushTextState','AutoColorBypassList','MessageRows','isPressed','unshift','<CENTER>','setupNumInput','leader','textSizeExWordWrap','makeFontBigger','skills','processActorNameAutoColorChanges','2508584lUHEex','eraseAllPictureTexts','20285qCdEXz','addGeneralOptions','anchorPictureText','_interpreter','getMessageWindowWidth','drawItemNumber','SortObjectByKeyLength','setMessageWindowRows','ARRAYSTRUCT','outlineWidth','_pictureTextWidth','resetWordWrap','process_VisuMZ_MessageCore_AutoColor','Instant','796JDEHoO','makeDeepCopy','processPyTextCode','windowX','_messageOffsetX','setPictureTextBuffer','_colorLock','updateOffsetPosition','_messageCommonEvents','_scene','processControlCharacter','TextAlign','updateMessageCommonEvents','isRunning','isSceneMap','anchor','addContinuousShowChoices','_MessageCoreSettings','Window_EventItem_includes','command101','Game_Screen_erasePicture','setChoiceListTextAlign','setMessageWindowXyOffsets','_textDelay','_moveEasingType','clearAllPictureTexts','item','Scene_Options_maxCommands','textColor','Skills','processAutoSize','_data','faceName','Window_ItemList_drawItemNumber','isTriggered','convertChoiceMacros','maxLines','convertShowChoiceEscapeCodes','outputHeight','return\x20\x27','ParseStateNotetags','test','addedHeight','down','placeCancelButton','powerDownColor','push','updateEvents','registerActorNameAutoColorChanges','<RIGHT>','_moveTargetX','processWrapBreak','convertVariableEscapeCharacters','isColorLocked','MsgWindowOffsetX','Game_Party_gainItem','_pictureTextWindow','PictureIDs','updatePlacement','Classes','7895Zuheim','anyPictureTextChanges','_pictureTextCache','TextMacros','ChoiceWindowProperties','Window_Message_updatePlacement','6318389Uiidgn','Scene_Message_createChoiceListWindow','Armors','\x1bWrapBreak[0]','getStartingChoiceWidth','length','makeData','parseChoiceText','partyMemberName','lowerleft','getChoiceListMaxColumns','_textColorStack','Window_ChoiceList_windowX','replace','WRAPBREAK','choiceTextAlign','value','setChoiceListMaxRows','setArmorChoice','processColorLock','\x1bITALIC[0]','battle\x20enemy','setMessageWindowWidth','textSizeExRaw','AutoColor','crisisColor','applyDatabaseAutoColor','_list','STRUCT','setLastPluginCommandInterpreter','drawCustomBackgroundColor','Name','Items','General','description','command357','mainFontSize','prepareWordWrapEscapeCharacters','choiceCols','#ffffff','MaxCols','statusText','_dimmerSprite','processStoredAutoColorChanges','getConfigValue','clearPictures','isMessageWindowWordWrap','victory','Window_Message_clearFlags','updateXyOffsets','textCodeResult','NameBoxWindowOffsetY','addContinuousShowTextCommands','Window_Message_terminateMessage','changeOutlineColor','STR','isChoiceWindow','code','getInputButtonString','resetTextColor','setSkillChoice','processFontChangeBold','TextCodeReplace','StretchDimmedBg','textSizeExTextAlignment','Window_Base_processAllText','convertHardcodedEscapeReplacements','randomInt','setFaceImage','wtypeId','createChoiceListWindow','Weapons','\x1bC[%1]%2\x1bPREVCOLOR[0]','adjustShowChoiceDefault','_textDelayCount','systemColor','callCancelHandler','TextStr','getSkillTypes','helpWordWrap','type','_centerMessageWindow','armor','fontSize','process_VisuMZ_MessageCore_TextMacros','moveBy','convertLockColorsEscapeCharacters','setPictureText','ParseClassNotetags','AddOption','Undefined','SelectArmor','Window_Base_processEscapeCharacter','setupItemChoice','choices','EndPadding','erasePicture','setChoiceListHelpWindow','processDrawCenteredPicture','getLastPluginCommandInterpreter','strokeRect','setupChoices','yes','_autoPositionTarget','registerCommand','left','Window_NameBox_updatePlacement','ALL','Window_Base_initialize','itemChoiceActor','bind','choiceLineHeight','processFontChangeItalic','convertBackslashCharacters','getPictureTextData','setRelativePosition','nextEventCode','_pictureTextSprite','#6dcff6','_moveDuration','calcMoveEasing','_choiceListHelpWindow','clearRect','onProcessCharacter','_pictureText','_messageWindow','map\x20event','ArmorTypeID','_pictureTextBuffer','name','Type','DefaultOutlineWidth','preConvertEscapeCharacters','</RIGHT>','ParseAddedText','blue','postConvertEscapeCharacters','dimColor2','SkillTypeID','#707070','itemHeight','Game_Interpreter_setupChoices','updateAutoPosition','setBackground','processAutoPosition','isCommandEnabled','version','Window_Options_addGeneralOptions','match','textSpeedStatusText','Window_Message_synchronizeNameBox','getChoiceListTextAlign','</LEFT>','getChoiceListLineHeight','setWeaponChoice','isContinuePrepareShowTextCommands','itemRect','clearFlags','trim','applyMoveEasing','gainItem','States','12026KiWtqf','\x1bTEXTALIGNMENT[1]','getLastGainedItemData','JSON','COMMONEVENT','_macroBypassWordWrap','createChoiceListHelpWindow','RelativePXPY','itemBackColor1','getColor','_resetRect','some','ChoiceWindowMaxCols','setHelpWindow','text','addMessageCoreCommands','drawBackPicture','addWrapBreakAfterPunctuation','maxCols','add','TextColor','changeTextSpeed','<COLORLOCK>','10wkYXAQ','battleActionName','boxHeight','SHOW','clear','slice','_autoPosRegExp','addChildAt','contents','convertEscapeCharacters','Rows','Window_Help_refresh','_itemChoiceWtypeId','<WORDWRAP>','members','NameBoxWindowDefaultColor','choiceListHelpWindowRect','lineHeight','updateChoiceListHelpWindowPlacement','drawSkillCost','SelectWeapon','TextSpeed','setWaitMode','list','MessageWidth','isArmor','loadPicture','textWidth','Window_NameBox_refresh','VariableID','OffsetX','fontItalic','event','itemChoiceAtypeId','default','stretchDimmerSprite','resetPositionX','FontSmallerCap','sort','isSkillTypeMatchForUse','drawItem','\x1bTEXTALIGNMENT[2]','system','green','Game_Map_setupEvents','ITALIC','PREVCOLOR','BOLD','returnPreservedFontSettings','\x1bi[%1]%2','synchronizeNameBox','right','split','processPreviousColor','MessageTextDelay','substr','resetRect','exit','ConfigManager_makeData','Window_Options_changeVolume','convertButtonAssistText','registerSelfEvent','easeOut','Game_Map_refresh','black','crisis','itemRectWithPadding','choiceRows','exec','cancel','addLoadListener','NameBoxWindowOffsetX','messageRows','Settings','ENABLE','setTextDelay','move','etypeId','preFlushTextState','prepareShowTextFollowups','lastGainedObjectQuantity','updateMove','Window_Message_isTriggered','\x1bTEXTALIGNMENT','constructor','flushTextState','addMessageCommonEvent','<I>','itemChoiceActorId','setPositionType','boxWidth','\x1bITALIC[1]','remove','processAutoColorWords','isAutoColorAffected','parameters','#c69c6d','close','Scene_Boot_onDatabaseLoaded','setMessageWindowWordWrap','resizePictureText','setWordWrap','_lastGainedItemData','MESSAGE_CORE_PLUGIN_NAME','powerUpColor','currentExt','actor','applyChoiceHelpDescriptions','COLORLOCK','update','#acacac','surprise','Game_Map_updateEvents','getPictureText','updateTransform','clearActorNameAutoColor','createTextState','clampPlacementPosition','convertNewPageTextStateMacros','WAIT','fontFace','messageWidth','addCommand','defeat','getTextAlignment','skill','CreateAutoColorRegExpLists','PICTURE','processTextAlignmentChange','quantity','lowerright','changePaintOpacity','setTextAlignment','hide','createContents','MessageWindowProperties','battle\x20actor','max','erasePictureTextBuffer','textCodeCheck','changeTextColor','center','onDatabaseLoaded','obtainItem','map\x20party','FontBiggerCap','followers','pageup','\x1bBOLD[1]','outputWidth','MsgWindowOffsetY','process_VisuMZ_MessageCore_TextCodes_Replace','changeValue','isSkillHidden','_itemChoiceEtypeId','convertMessageCoreEscapeActions','maxCommands','updateOverlappingY','drawPictureTextZone','isChoiceEnabled','prepareShowTextCommand','drawing','#fff799','isWeapon','ActionJS','Window_Base_update','WORD_WRAP_PADDING','Window_Message_processEscapeCharacter','_texts','contentsHeight','stringify','normalColor','_target','emerge','\x1bCOLORLOCK[0]','getMessageWindowRows','_pictureTextRefresh','_relativePosition','PictureTextChange','Window_Base_changeTextColor','ChoiceWindowMaxRows','updateDimensions','_currentAutoSize','</CENTER>','min','itemBackColor2','setColorLock','convertMessageCoreEscapeReplacements','Window_Options_statusText','textSpeed','ChoiceWindowTextAlign','format','startY','iconIndex','TextManager_message','_choiceListWindow','none','floor','show','textSizeEx','isChoiceVisible','isSceneBattle','#fbaf5d','#a186be','itemChoiceEtypeId','_autoSizeCheck','prepareAutoSizeEscapeCharacters','MaxRows','openness','clearPictureTextRefresh','_itemChoiceVariableId','paintOpacity','isItem','Game_Screen_clearPictures','atypeId','prototype','makeFontSmaller','commandName','processAllText','MessageWindow','TextJS','Game_Interpreter_PluginCommand','_action','\x1bCOLORLOCK[1]','processCommonEvent','fontBold','initTextAlignement','orange','drawBackCenteredPicture','CreateAutoColorFor','FontChangeValue','index','WordWrap','obtainGold','addedWidth','_commonEventId','_autoSizeRegexp','isWordWrapEnabled','addWindow','false',')))','_messageOffsetY','map','innerHeight','Width','ParseEnemyNotetags','CommonEvent','prepareShowTextPluginCommandFollowups','refresh','inputtingAction','EquipTypeID','_pictureTextHeight','ConvertTextAutoColorRegExpFriendly','faceWidth','round','makeCommandList','AutoColorRegExp','_index','_textAlignment','battleUserName','getRandomTextFromPool','updatePictureText','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','VisuMZ_1_SkillsStatesCore','HIDE','Window_ChoiceList_callCancelHandler','newPage','_textMacroFound','actorName','LineHeight','battleTargetName','_nameBoxWindow','isVolumeSymbol','Game_System_initialize','currentCommand','Match','_spriteset','_wholeMoveDuration','FUNC','setChoiceListMaxColumns','SelectSkill','isHelpWindowWordWrap','_subject','needsPictureTextRefresh','\x1bTEXTALIGNMENT[0]','Padding','_eventId','moveTo','processMessageCoreEscapeActions','processFsTextCode','setSpeakerName','ParseWeaponNotetags','_positionType','ChoiceWindowLineHeight','Window_Base_textSizeEx','</WORDWRAP>','map\x20actor','\x5c%1','<LEFT>','processEscapeCharacter','return\x200','_choiceHelpDescriptions','updateForcedPlacement','<LINE\x20BREAK>','red','attachPictureText','ActorID','ParseItemNotetags','itemChoiceStypeId','makeItemList','canMove','Sprite_Picture_update','Actors','isSkill','processCharacter','_forcedPosition','hasPictureText','itemChoiceItypeId','inBattle','clearCommandList','_helpWindow','updateAutoSizePosition','SWITCH','345165VPIEmj','ceil','launchMessageCommonEvent','addMessageCoreTextSpeedCommand','adjustShowChoiceCancel','width','processCustomWait','DISABLE','needsNewPage','getChoiceIndent','getPictureTextBuffer','filter','rtl','obtainExp','terminateMessage','_wordWrap','join','ParseArmorNotetags','_itemChoiceActorId','messagePositionReset','indexOf','addExtraShowChoices','onNewPageMessageCore','blt','TextCodeActions','resetFontSettings','substring','ConvertParams','lastGainedObjectName','ARRAYFUNC','_itemChoiceAtypeId','888xCrEaC','messageCoreTextSpeed','Window_Base_processNewLine','updateRelativePosition','Window_Message_newPage','clearChoiceHelpDescriptions','defaultColor','CreateAutoColorRegExpListEntries','Window_MessageLog','<BR>','makeSkillList','setupEvents','initialize','clamp','colSpacing','_showFast','_moveTargetY','parse','TextColor%1','updateNameBoxMove','1845558sIAkrp','callOkHandler','call','applyData','calcWindowHeight','EVAL','Sprite_Picture_updateBitmap','realPictureId','windowPadding','requestPictureTextRefresh','drawPictureText','startX','ConfigManager_applyData','obtainEscapeParam','getMessageWindowXyOffsets','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','NUM','autoPositionOffsetX','outlineColor','ARRAYJSON','violet','map\x20player','grey','createPictureText','_messagePositionReset','_itemChoiceStypeId','weapon','convertButtonAssistEscapeCharacters','follower','databaseObjectName','2QEumGN','MessageCore','innerWidth','PictureTextRefresh','_cancelButton','toUpperCase','zoomScale','Window_Options_isVolumeSymbol','_autoColorActorNames','_pictures','isBreakShowTextCommands','upperleft','messageCoreWindowX','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','HelpWindow','isInputting','processTextAlignmentX','toLowerCase','#ffc8e0','indent','_moveTargetWidth','splice','menu','processNewLine','changeChoiceBackgroundColor','Enemies','choicePositionType','messageWordWrap','setChoiceListLineHeight','maxFontSizeInLine','status','onChoice','requestPictureTextRefreshAll','Window_Message_needsNewPage','changeVolume','convertFontSettingsEscapeCharacters','contentsBack','_pictureId','visible','obtainEscapeString','Window_ChoiceList_updatePlacement','convertBaseEscapeCharacters','initMessageCore','yellow','\x1bBOLD[0]','_moveTargetHeight','\x1bI[%1]','AdjustRect','AddAutoColor','updateBitmap','upperright','preemptive','VisuMZ_1_EventsMoveCore','<B>','height','ANY','convertTextMacros','getChoiceListMaxRows','drawTextEx','scale','ParseSkillNotetags'];_0x3539=function(){return _0x5b5905;};return _0x3539();}Game_MessageCommonEvent[_0x4ec4b9(0x27c)][_0x4ec4b9(0x313)]=function(_0x530e7e,_0x210aeb){const _0x4eda50=_0x4ec4b9;this[_0x4eda50(0x290)]=_0x530e7e,this[_0x4eda50(0x2c3)]=_0x210aeb||0x0,this[_0x4eda50(0x29d)]();},Game_MessageCommonEvent[_0x4ec4b9(0x27c)][_0x4ec4b9(0x4b6)]=function(){const _0x19069d=_0x4ec4b9;return $dataCommonEvents[this[_0x19069d(0x290)]];},Game_MessageCommonEvent[_0x4ec4b9(0x27c)][_0x4ec4b9(0x4ad)]=function(){const _0x3a5460=_0x4ec4b9;return this[_0x3a5460(0x4b6)]()[_0x3a5460(0x4ad)];},Game_MessageCommonEvent['prototype']['refresh']=function(){const _0x332c16=_0x4ec4b9;this[_0x332c16(0x390)]=new Game_Interpreter(),this[_0x332c16(0x390)]['setup'](this[_0x332c16(0x4ad)](),this['_eventId']);},Game_MessageCommonEvent['prototype'][_0x4ec4b9(0x212)]=function(){const _0x15d72c=_0x4ec4b9;this['_interpreter']&&(this[_0x15d72c(0x390)][_0x15d72c(0x3a8)]()?this[_0x15d72c(0x390)][_0x15d72c(0x212)]():this[_0x15d72c(0x49a)]());},Game_MessageCommonEvent[_0x4ec4b9(0x27c)][_0x4ec4b9(0x49a)]=function(){this['_interpreter']=null;},Scene_Message[_0x4ec4b9(0x27c)]['messageWindowRect']=function(){const _0x30429b=_0x4ec4b9,_0x30b8a6=Math[_0x30429b(0x25d)](Graphics['width'],$gameSystem['getMessageWindowWidth']()),_0x558b8e=$gameSystem[_0x30429b(0x254)](),_0xd87993=this[_0x30429b(0x31f)](_0x558b8e,![]),_0x25447f=(Graphics[_0x30429b(0x1ff)]-_0x30b8a6)/0x2,_0x5da11c=0x0;return new Rectangle(_0x25447f,_0x5da11c,_0x30b8a6,_0xd87993);},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x3de)]=Scene_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x423)],Scene_Message['prototype'][_0x4ec4b9(0x423)]=function(){const _0x568f60=_0x4ec4b9;VisuMZ[_0x568f60(0x33a)][_0x568f60(0x3de)][_0x568f60(0x31d)](this),this['createChoiceListHelpWindow']();},Scene_Message['prototype'][_0x4ec4b9(0x485)]=function(){const _0x2621ef=_0x4ec4b9,_0x2a0394=this[_0x2621ef(0x4a6)](),_0x2ca48b=new Window_Help(_0x2a0394);_0x2ca48b[_0x2621ef(0x22a)](),this[_0x2621ef(0x268)][_0x2621ef(0x48c)](_0x2ca48b),this['_messageWindow'][_0x2621ef(0x43e)](_0x2ca48b),this[_0x2621ef(0x293)](_0x2ca48b),this['_choiceListHelpWindow']=_0x2ca48b;},Scene_Message['prototype']['choiceListHelpWindowRect']=function(){const _0x42777a=_0x4ec4b9,_0x235b5d=0x0,_0x5cf5b1=0x0,_0x1e593b=Graphics[_0x42777a(0x1ff)],_0x486470=this[_0x42777a(0x31f)](0x2,![]);return new Rectangle(_0x235b5d,_0x5cf5b1,_0x1e593b,_0x486470);},Window_Message['prototype'][_0x4ec4b9(0x43e)]=function(_0x34dce6){const _0x1804e8=_0x4ec4b9;this[_0x1804e8(0x456)]=_0x34dce6;},Window_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x4a8)]=function(){const _0xeb3055=_0x4ec4b9;if(!this['_choiceListHelpWindow'])return;const _0x319e83=this[_0xeb3055(0x456)];_0x319e83&&(_0x319e83['y']=this['y']>0x0?0x0:Graphics[_0xeb3055(0x498)]-_0x319e83['height']);},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x3b6)]=Scene_Options[_0x4ec4b9(0x27c)][_0x4ec4b9(0x241)],Scene_Options[_0x4ec4b9(0x27c)][_0x4ec4b9(0x241)]=function(){const _0x5e43d0=_0x4ec4b9;let _0x2d8f5b=VisuMZ[_0x5e43d0(0x33a)]['Scene_Options_maxCommands'][_0x5e43d0(0x31d)](this);const _0xaf7264=VisuMZ[_0x5e43d0(0x33a)]['Settings'];if(_0xaf7264[_0x5e43d0(0x4ab)][_0x5e43d0(0x436)]&&_0xaf7264[_0x5e43d0(0x4ab)][_0x5e43d0(0x368)])_0x2d8f5b++;return _0x2d8f5b;},VisuMZ['MessageCore'][_0x4ec4b9(0x321)]=Sprite_Picture[_0x4ec4b9(0x27c)][_0x4ec4b9(0x36a)],Sprite_Picture['prototype'][_0x4ec4b9(0x36a)]=function(){const _0x3b42d1=_0x4ec4b9;VisuMZ['MessageCore'][_0x3b42d1(0x321)][_0x3b42d1(0x31d)](this),this[_0x3b42d1(0x332)]();},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x2dc)]=Sprite_Picture['prototype'][_0x4ec4b9(0x212)],Sprite_Picture['prototype'][_0x4ec4b9(0x212)]=function(){const _0x22453f=_0x4ec4b9;VisuMZ[_0x22453f(0x33a)][_0x22453f(0x2dc)]['call'](this),this[_0x22453f(0x2aa)]();},Sprite_Picture[_0x4ec4b9(0x27c)][_0x4ec4b9(0x2aa)]=function(){const _0x43fce5=_0x4ec4b9;if(!this[_0x43fce5(0x35f)])return;this[_0x43fce5(0x209)](),this[_0x43fce5(0x38f)](),this[_0x43fce5(0x325)](),this['attachPictureText']();},Sprite_Picture['prototype']['createPictureText']=function(){const _0x57dd2d=_0x4ec4b9;if(this[_0x57dd2d(0x3d3)])return;if(this[_0x57dd2d(0x452)])return;const _0x1020ff=new Rectangle(0x0,0x0,0x0,0x0);this[_0x57dd2d(0x3d3)]=new Window_Base(_0x1020ff),this['_pictureTextWindow']['padding']=0x0,this[_0x57dd2d(0x452)]=new Sprite(),this[_0x57dd2d(0x49d)](this[_0x57dd2d(0x452)],0x0),this[_0x57dd2d(0x397)]=0x0,this[_0x57dd2d(0x2a0)]=0x0,this[_0x57dd2d(0x3d9)]={};},Sprite_Picture['prototype'][_0x4ec4b9(0x209)]=function(){const _0x11c10f=_0x4ec4b9;if(!this[_0x11c10f(0x3d3)])return;if(this['_pictureTextWidth']===this['width']&&this[_0x11c10f(0x2a0)]===this[_0x11c10f(0x36f)])return;this[_0x11c10f(0x397)]=this[_0x11c10f(0x2ed)],this[_0x11c10f(0x2a0)]=this[_0x11c10f(0x36f)],this[_0x11c10f(0x3d9)]={},this['_pictureTextWindow'][_0x11c10f(0x1f1)](0x0,0x0,this[_0x11c10f(0x2ed)],this[_0x11c10f(0x36f)]);},Sprite_Picture['prototype'][_0x4ec4b9(0x38f)]=function(){const _0x334145=_0x4ec4b9;if(!this[_0x334145(0x452)])return;this[_0x334145(0x452)][_0x334145(0x3aa)]['x']=this[_0x334145(0x3aa)]['x'],this[_0x334145(0x452)][_0x334145(0x3aa)]['y']=this[_0x334145(0x3aa)]['y'];},Sprite_Picture['prototype'][_0x4ec4b9(0x325)]=function(){const _0x49f94a=_0x4ec4b9;if(!this[_0x49f94a(0x3d3)])return;if(!this[_0x49f94a(0x3d8)]())return;const _0x3106a2=[_0x49f94a(0x344),'up',_0x49f94a(0x36b),'left',_0x49f94a(0x232),_0x49f94a(0x4c9),'lowerleft',_0x49f94a(0x3c6),'lowerright'];this[_0x49f94a(0x3d3)]['createContents']();for(const _0x2b4062 of _0x3106a2){this[_0x49f94a(0x243)](_0x2b4062);}},Sprite_Picture[_0x4ec4b9(0x27c)]['anyPictureTextChanges']=function(){const _0x3b27af=_0x4ec4b9;if($gameScreen[_0x3b27af(0x2c0)](this[_0x3b27af(0x35e)]))return!![];const _0xdf5275=[_0x3b27af(0x344),'up','upperright',_0x3b27af(0x446),_0x3b27af(0x232),'right',_0x3b27af(0x3e6),_0x3b27af(0x3c6),_0x3b27af(0x227)];for(const _0x231b3d of _0xdf5275){const _0x3c0b11=$gameScreen[_0x3b27af(0x216)](this['_pictureId'],_0x231b3d);if(this['_pictureTextCache'][_0x231b3d]===_0x3c0b11)continue;return!![];}return![];},Sprite_Picture['prototype'][_0x4ec4b9(0x243)]=function(_0x8bbf33){const _0x3a9963=_0x4ec4b9;$gameScreen[_0x3a9963(0x276)](this[_0x3a9963(0x35e)]);const _0x1ee6f4=$gameScreen[_0x3a9963(0x216)](this[_0x3a9963(0x35e)],_0x8bbf33);this[_0x3a9963(0x3d9)][_0x8bbf33]=_0x1ee6f4;const _0x45001d=this[_0x3a9963(0x3d3)]['textSizeEx'](_0x1ee6f4);let _0x5048e6=$gameScreen[_0x3a9963(0x2f2)](this['_pictureId']),_0x390b86=_0x5048e6,_0x223955=_0x5048e6;if(['up',_0x3a9963(0x232),_0x3a9963(0x3c6)][_0x3a9963(0x37d)](_0x8bbf33))_0x390b86=Math[_0x3a9963(0x26a)]((this[_0x3a9963(0x2ed)]-_0x45001d[_0x3a9963(0x2ed)])/0x2);else['upperright',_0x3a9963(0x4c9),_0x3a9963(0x227)]['includes'](_0x8bbf33)&&(_0x390b86=Math[_0x3a9963(0x26a)](this[_0x3a9963(0x2ed)]-_0x45001d[_0x3a9963(0x2ed)]-_0x5048e6));if([_0x3a9963(0x446),'center','right'][_0x3a9963(0x37d)](_0x8bbf33))_0x223955=Math[_0x3a9963(0x26a)]((this[_0x3a9963(0x36f)]-_0x45001d[_0x3a9963(0x36f)])/0x2);else[_0x3a9963(0x3e6),_0x3a9963(0x3c6),'lowerright'][_0x3a9963(0x37d)](_0x8bbf33)&&(_0x223955=Math['floor'](this[_0x3a9963(0x36f)]-_0x45001d[_0x3a9963(0x36f)]-_0x5048e6));this['_pictureTextWindow'][_0x3a9963(0x373)](_0x1ee6f4,_0x390b86,_0x223955);},Sprite_Picture[_0x4ec4b9(0x27c)][_0x4ec4b9(0x2d6)]=function(){const _0x5ce95f=_0x4ec4b9;if(!this[_0x5ce95f(0x3d3)])return;if(!this[_0x5ce95f(0x452)])return;this['_pictureTextSprite']['bitmap']=this['_pictureTextWindow'][_0x5ce95f(0x49e)];},VisuMZ['MessageCore'][_0x4ec4b9(0x449)]=Window_Base['prototype'][_0x4ec4b9(0x313)],Window_Base['prototype'][_0x4ec4b9(0x313)]=function(_0x3f6eca){const _0x1f9a7e=_0x4ec4b9;this[_0x1f9a7e(0x363)](_0x3f6eca),VisuMZ[_0x1f9a7e(0x33a)][_0x1f9a7e(0x449)][_0x1f9a7e(0x31d)](this,_0x3f6eca);},Window_Base[_0x4ec4b9(0x27c)]['initMessageCore']=function(_0x5c3a0a){const _0x203514=_0x4ec4b9;this[_0x203514(0x287)](),this[_0x203514(0x398)](),this['registerResetRect'](_0x5c3a0a);},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x287)]=function(){const _0x2124b1=_0x4ec4b9;this['setTextAlignment'](_0x2124b1(0x4b8));},Window_Base[_0x4ec4b9(0x27c)]['setTextAlignment']=function(_0x349aed){const _0xf5cb99=_0x4ec4b9;this[_0xf5cb99(0x2a7)]=_0x349aed;},Window_Base['prototype'][_0x4ec4b9(0x221)]=function(){const _0xd7df04=_0x4ec4b9;return this[_0xd7df04(0x2a7)];},VisuMZ['MessageCore'][_0x4ec4b9(0x2cb)]=Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x26c)],Window_Base['prototype']['textSizeEx']=function(_0x105932){const _0x4ed9a1=_0x4ec4b9;return this[_0x4ed9a1(0x398)](),VisuMZ[_0x4ed9a1(0x33a)][_0x4ed9a1(0x2cb)][_0x4ed9a1(0x31d)](this,_0x105932);},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x3f4)]=function(_0x288744){const _0x344b3e=_0x4ec4b9;return VisuMZ[_0x344b3e(0x33a)][_0x344b3e(0x2cb)][_0x344b3e(0x31d)](this,_0x288744);},VisuMZ['MessageCore'][_0x4ec4b9(0x41e)]=Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x27f)],Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x27f)]=function(_0x4ad7a2){const _0x48f519=_0x4ec4b9;VisuMZ[_0x48f519(0x33a)]['Window_Base_processAllText'][_0x48f519(0x31d)](this,_0x4ad7a2);if(_0x4ad7a2[_0x48f519(0x246)])this[_0x48f519(0x229)](_0x48f519(0x4b8));},Window_Base[_0x4ec4b9(0x27c)]['resetWordWrap']=function(){const _0x11ba75=_0x4ec4b9;this[_0x11ba75(0x20a)](![]);},Window_Base['prototype'][_0x4ec4b9(0x292)]=function(){const _0x92e8cc=_0x4ec4b9;return this[_0x92e8cc(0x2f7)];},Window_Base['prototype']['setWordWrap']=function(_0xa56d70){const _0xfcf3eb=_0x4ec4b9;return this[_0xfcf3eb(0x2f7)]=_0xa56d70,'';},Window_Base['prototype']['registerResetRect']=function(_0x422d7f){const _0x50e988=_0x4ec4b9;this[_0x50e988(0x489)]=JsonEx['makeDeepCopy'](_0x422d7f);},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x301)]=function(){const _0x55eeb0=_0x4ec4b9;this[_0x55eeb0(0x49e)][_0x55eeb0(0x21d)]=$gameSystem['mainFontFace'](),this[_0x55eeb0(0x49e)][_0x55eeb0(0x430)]=$gameSystem[_0x55eeb0(0x401)](),this[_0x55eeb0(0x49e)]['fontBold']=![],this[_0x55eeb0(0x49e)][_0x55eeb0(0x4b5)]=![],this[_0x55eeb0(0x418)]();},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x418)]=function(){const _0x5c1dc8=_0x4ec4b9;this['changeTextColor'](ColorManager[_0x5c1dc8(0x250)]()),this[_0x5c1dc8(0x413)](ColorManager[_0x5c1dc8(0x32d)]());const _0x1b4a53=VisuMZ['MessageCore'][_0x5c1dc8(0x1ee)][_0x5c1dc8(0x3fe)];_0x1b4a53[_0x5c1dc8(0x460)]===undefined&&(_0x1b4a53[_0x5c1dc8(0x460)]=0x3),this[_0x5c1dc8(0x49e)][_0x5c1dc8(0x396)]=_0x1b4a53['DefaultOutlineWidth'],this[_0x5c1dc8(0x25f)](![]);},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x25f)]=function(_0x58e431){const _0x461cc5=_0x4ec4b9;this[_0x461cc5(0x3a1)]=_0x58e431;},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x3d0)]=function(){const _0x445340=_0x4ec4b9;return this[_0x445340(0x3a1)];},Window_Base['prototype'][_0x4ec4b9(0x203)]=function(){return![];},Window_Base[_0x4ec4b9(0x27c)]['getPreservedFontSettings']=function(){const _0x5bc87a=_0x4ec4b9,_0x1a3a13=[_0x5bc87a(0x21d),_0x5bc87a(0x430),_0x5bc87a(0x286),_0x5bc87a(0x4b5),_0x5bc87a(0x3b7),'outLineColor','outlineWidth',_0x5bc87a(0x278)];let _0xd5c295={};for(const _0x3bb149 of _0x1a3a13){_0xd5c295[_0x3bb149]=this[_0x5bc87a(0x49e)][_0x3bb149];}return _0xd5c295;},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x4c6)]=function(_0x5910cf){for(const _0x59a4e1 in _0x5910cf){this['contents'][_0x59a4e1]=_0x5910cf[_0x59a4e1];}},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x24a)]=Window_Base[_0x4ec4b9(0x27c)]['update'],Window_Base['prototype'][_0x4ec4b9(0x212)]=function(){const _0x1e9b34=_0x4ec4b9;VisuMZ[_0x1e9b34(0x33a)][_0x1e9b34(0x24a)]['call'](this),this[_0x1e9b34(0x1f6)]();},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x2db)]=function(){return![];},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x1f6)]=function(){const _0x2c129c=_0x4ec4b9;this[_0x2c129c(0x454)]>0x0&&(this[_0x2c129c(0x2db)]()&&(this['x']=this[_0x2c129c(0x47c)](this['x'],this['_moveTargetX']),this['y']=this['applyMoveEasing'](this['y'],this[_0x2c129c(0x317)]),this[_0x2c129c(0x2ed)]=this[_0x2c129c(0x47c)](this[_0x2c129c(0x2ed)],this[_0x2c129c(0x34d)]),this[_0x2c129c(0x36f)]=this[_0x2c129c(0x47c)](this[_0x2c129c(0x36f)],this[_0x2c129c(0x366)]),this[_0x2c129c(0x21a)]()),this[_0x2c129c(0x454)]--);},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x21a)]=function(_0xd0ae77,_0x23674c){const _0x16596e=_0x4ec4b9;!_0xd0ae77&&(this[_0x16596e(0x2ed)]=Math['min'](this[_0x16596e(0x2ed)],Graphics[_0x16596e(0x2ed)]),this[_0x16596e(0x36f)]=Math[_0x16596e(0x25d)](this['height'],Graphics['height']));if(!_0x23674c){const _0x3206d1=-(Math[_0x16596e(0x26a)](Graphics[_0x16596e(0x2ed)]-Graphics['boxWidth'])/0x2),_0x2da35f=_0x3206d1+Graphics[_0x16596e(0x2ed)]-this[_0x16596e(0x2ed)],_0x198c9f=-(Math[_0x16596e(0x26a)](Graphics[_0x16596e(0x36f)]-Graphics[_0x16596e(0x498)])/0x2),_0x94558d=_0x198c9f+Graphics[_0x16596e(0x36f)]-this[_0x16596e(0x36f)];this['x']=this['x'][_0x16596e(0x314)](_0x3206d1,_0x2da35f),this['y']=this['y']['clamp'](_0x198c9f,_0x94558d);}},Window_Base[_0x4ec4b9(0x27c)]['applyMoveEasing']=function(_0x3ab284,_0x4e9832){const _0x190477=_0x4ec4b9,_0x7b9031=this[_0x190477(0x454)],_0x26b03c=this['_wholeMoveDuration'],_0x4711ae=this[_0x190477(0x455)]((_0x26b03c-_0x7b9031)/_0x26b03c),_0x510f42=this[_0x190477(0x455)]((_0x26b03c-_0x7b9031+0x1)/_0x26b03c),_0x316f6d=(_0x3ab284-_0x4e9832*_0x4711ae)/(0x1-_0x4711ae);return _0x316f6d+(_0x4e9832-_0x316f6d)*_0x510f42;},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x455)]=function(_0x310ca1){const _0x4a0800=_0x4ec4b9,_0x4fc96c=0x2;switch(this[_0x4a0800(0x3b3)]){case 0x0:return _0x310ca1;case 0x1:return this['easeIn'](_0x310ca1,_0x4fc96c);case 0x2:return this[_0x4a0800(0x1e3)](_0x310ca1,_0x4fc96c);case 0x3:return this['easeInOut'](_0x310ca1,_0x4fc96c);default:return Imported['VisuMZ_0_CoreEngine']?VisuMZ[_0x4a0800(0x47c)](_0x310ca1,this['_moveEasingType']):_0x310ca1;}},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x2c4)]=function(_0x4484cf,_0x3b5fed,_0x2d081a,_0x51ae64,_0x55c643,_0x2f03c1){const _0x53aa86=_0x4ec4b9;this[_0x53aa86(0x3cd)]=_0x4484cf,this['_moveTargetY']=_0x3b5fed,this[_0x53aa86(0x34d)]=_0x2d081a||this[_0x53aa86(0x2ed)],this[_0x53aa86(0x366)]=_0x51ae64||this[_0x53aa86(0x36f)],this[_0x53aa86(0x454)]=_0x55c643||0x1;if(this[_0x53aa86(0x454)]<=0x0)this[_0x53aa86(0x454)]=0x1;this[_0x53aa86(0x2ba)]=this['_moveDuration'],this[_0x53aa86(0x3b3)]=_0x2f03c1||0x0;if(_0x55c643<=0x0)this[_0x53aa86(0x1f6)]();},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x432)]=function(_0xb87655,_0x27a630,_0x75f02d,_0x4aa0fb,_0x77c5e7,_0x62212c){const _0x2302f5=_0x4ec4b9;this[_0x2302f5(0x3cd)]=this['x']+_0xb87655,this[_0x2302f5(0x317)]=this['y']+_0x27a630,this['_moveTargetWidth']=this[_0x2302f5(0x2ed)]+(_0x75f02d||0x0),this[_0x2302f5(0x366)]=this['height']+(_0x4aa0fb||0x0),this['_moveDuration']=_0x77c5e7||0x1;if(this[_0x2302f5(0x454)]<=0x0)this[_0x2302f5(0x454)]=0x1;this['_wholeMoveDuration']=this[_0x2302f5(0x454)],this[_0x2302f5(0x3b3)]=_0x62212c||0x0;if(_0x77c5e7<=0x0)this[_0x2302f5(0x1f6)]();},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x1dd)]=function(_0x1d5b2b,_0x438e3f){const _0x22333e=_0x4ec4b9;this[_0x22333e(0x2c4)](this[_0x22333e(0x489)]['x'],this[_0x22333e(0x489)]['y'],this[_0x22333e(0x489)][_0x22333e(0x2ed)],this[_0x22333e(0x489)][_0x22333e(0x36f)],_0x1d5b2b,_0x438e3f);},VisuMZ[_0x4ec4b9(0x33a)]['Window_Base_changeTextColor']=Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x231)],Window_Base[_0x4ec4b9(0x27c)]['changeTextColor']=function(_0x12fbd1){const _0x326e2a=_0x4ec4b9;if(this[_0x326e2a(0x3d0)]())return;_0x12fbd1=_0x12fbd1[_0x326e2a(0x3ea)](/\,/g,''),this[_0x326e2a(0x3e8)]=this['_textColorStack']||[],this[_0x326e2a(0x3e8)][_0x326e2a(0x383)](this[_0x326e2a(0x49e)][_0x326e2a(0x3b7)]),VisuMZ[_0x326e2a(0x33a)][_0x326e2a(0x258)][_0x326e2a(0x31d)](this,_0x12fbd1);},Window_Base[_0x4ec4b9(0x27c)]['processPreviousColor']=function(_0x530004){const _0x5e938a=_0x4ec4b9;this[_0x5e938a(0x328)](_0x530004);if(this[_0x5e938a(0x3d0)]())return;_0x530004[_0x5e938a(0x246)]&&(this['_textColorStack']=this['_textColorStack']||[],this[_0x5e938a(0x49e)][_0x5e938a(0x3b7)]=this['_textColorStack']['shift']()||ColorManager['normalColor']());},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x49f)]=function(_0x4a8a94){const _0x3f0066=_0x4ec4b9;return _0x4a8a94=this[_0x3f0066(0x371)](_0x4a8a94),_0x4a8a94=this[_0x3f0066(0x44e)](_0x4a8a94),_0x4a8a94=this['convertVariableEscapeCharacters'](_0x4a8a94),_0x4a8a94=this['convertButtonAssistEscapeCharacters'](_0x4a8a94),_0x4a8a94=this[_0x3f0066(0x461)](_0x4a8a94),_0x4a8a94=this['convertShowChoiceEscapeCodes'](_0x4a8a94),_0x4a8a94=this[_0x3f0066(0x35c)](_0x4a8a94),_0x4a8a94=this['convertTextAlignmentEscapeCharacters'](_0x4a8a94),_0x4a8a94=this[_0x3f0066(0x433)](_0x4a8a94),_0x4a8a94=this[_0x3f0066(0x362)](_0x4a8a94),_0x4a8a94=this[_0x3f0066(0x41f)](_0x4a8a94),_0x4a8a94=this[_0x3f0066(0x240)](_0x4a8a94),_0x4a8a94=this[_0x3f0066(0x260)](_0x4a8a94),_0x4a8a94=this['postConvertEscapeCharacters'](_0x4a8a94),_0x4a8a94=this[_0x3f0066(0x3cf)](_0x4a8a94),_0x4a8a94=this[_0x3f0066(0x202)](_0x4a8a94),_0x4a8a94=this['prepareWordWrapEscapeCharacters'](_0x4a8a94),_0x4a8a94;},Window_Base['prototype'][_0x4ec4b9(0x371)]=function(_0x47e840){const _0xb62a1b=_0x4ec4b9;this[_0xb62a1b(0x2b0)]=![];for(const _0x463dc3 of VisuMZ[_0xb62a1b(0x33a)]['Settings']['TextMacros']){_0x47e840[_0xb62a1b(0x471)](_0x463dc3[_0xb62a1b(0x230)])&&(this[_0xb62a1b(0x2b0)]=!![],_0x47e840=_0x47e840[_0xb62a1b(0x3ea)](_0x463dc3[_0xb62a1b(0x230)],_0x463dc3[_0xb62a1b(0x40f)][_0xb62a1b(0x44b)](this)));}return _0x47e840;},Window_Base['prototype'][_0x4ec4b9(0x44e)]=function(_0x167d54){const _0x366c17=_0x4ec4b9;return _0x167d54=_0x167d54[_0x366c17(0x3ea)](/\\/g,'\x1b'),_0x167d54=_0x167d54[_0x366c17(0x3ea)](/\x1b\x1b/g,'\x5c'),_0x167d54;},Window_Base['prototype'][_0x4ec4b9(0x3cf)]=function(_0x4a9535){const _0x595cc0=_0x4ec4b9;for(;;){if(_0x4a9535[_0x595cc0(0x471)](/\\V\[(\d+)\]/gi))_0x4a9535=_0x4a9535[_0x595cc0(0x3ea)](/\\V\[(\d+)\]/gi,(_0x4dedbe,_0x1b06f9)=>this[_0x595cc0(0x44e)](String($gameVariables['value'](parseInt(_0x1b06f9)))));else{if(_0x4a9535[_0x595cc0(0x471)](/\x1bV\[(\d+)\]/gi))_0x4a9535=_0x4a9535[_0x595cc0(0x3ea)](/\x1bV\[(\d+)\]/gi,(_0x560447,_0x381998)=>this[_0x595cc0(0x44e)](String($gameVariables[_0x595cc0(0x3ed)](parseInt(_0x381998)))));else break;}}return _0x4a9535;},Window_Base['prototype'][_0x4ec4b9(0x336)]=function(_0x1f6cd8){const _0x5dfaef=_0x4ec4b9;return Imported['VisuMZ_0_CoreEngine']&&(_0x1f6cd8=_0x1f6cd8[_0x5dfaef(0x3ea)](/<Up (?:KEY|BUTTON)>/gi,this[_0x5dfaef(0x1e1)]('up')),_0x1f6cd8=_0x1f6cd8[_0x5dfaef(0x3ea)](/<Left (?:KEY|BUTTON)>/gi,this[_0x5dfaef(0x1e1)](_0x5dfaef(0x446))),_0x1f6cd8=_0x1f6cd8[_0x5dfaef(0x3ea)](/<Right (?:KEY|BUTTON)>/gi,this[_0x5dfaef(0x1e1)](_0x5dfaef(0x4c9))),_0x1f6cd8=_0x1f6cd8['replace'](/<Down (?:KEY|BUTTON)>/gi,this[_0x5dfaef(0x1e1)](_0x5dfaef(0x3c6))),_0x1f6cd8=_0x1f6cd8['replace'](/<Ok (?:KEY|BUTTON)>/gi,this['convertButtonAssistText']('ok')),_0x1f6cd8=_0x1f6cd8[_0x5dfaef(0x3ea)](/<Cancel (?:KEY|BUTTON)>/gi,this['convertButtonAssistText'](_0x5dfaef(0x1ea))),_0x1f6cd8=_0x1f6cd8[_0x5dfaef(0x3ea)](/<Menu (?:KEY|BUTTON)>/gi,this[_0x5dfaef(0x1e1)](_0x5dfaef(0x34f))),_0x1f6cd8=_0x1f6cd8[_0x5dfaef(0x3ea)](/<Shift (?:KEY|BUTTON)>/gi,this[_0x5dfaef(0x1e1)]('shift')),_0x1f6cd8=_0x1f6cd8[_0x5dfaef(0x3ea)](/<(?:PAGEUP|PAGE UP) (?:KEY|BUTTON)>/gi,this[_0x5dfaef(0x1e1)](_0x5dfaef(0x238))),_0x1f6cd8=_0x1f6cd8[_0x5dfaef(0x3ea)](/<(?:PAGEDOWN|PAGEDN|PAGE DOWN) (?:KEY|BUTTON)>/gi,this['convertButtonAssistText']('pagedown'))),_0x1f6cd8;},Window_Base[_0x4ec4b9(0x27c)]['convertButtonAssistText']=function(_0x13f981){const _0x42d4af=_0x4ec4b9;let _0x31ae9b=TextManager[_0x42d4af(0x417)](_0x13f981)||'';return _0x31ae9b=this[_0x42d4af(0x44e)](_0x31ae9b),_0x31ae9b=this[_0x42d4af(0x3cf)](_0x31ae9b),_0x31ae9b[_0x42d4af(0x47b)]();},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x461)]=function(_0x7dcee3){const _0x5bf471=_0x4ec4b9;return this[_0x5bf471(0x3cb)](),_0x7dcee3;},Window_Base[_0x4ec4b9(0x27c)]['postConvertEscapeCharacters']=function(_0x296d4a){return _0x296d4a;},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x3c0)]=function(_0x4c3f7e){const _0x58ae19=_0x4ec4b9;return this[_0x58ae19(0x415)]()&&(_0x4c3f7e=_0x4c3f7e[_0x58ae19(0x3ea)](/<(?:SHOW|HIDE|DISABLE|ENABLE)>/gi,''),_0x4c3f7e=_0x4c3f7e[_0x58ae19(0x3ea)](/<(?:SHOW|HIDE|DISABLE|ENABLE)[ ](?:SWITCH|SWITCHES):[ ](.*?)>/gi,''),_0x4c3f7e=_0x4c3f7e[_0x58ae19(0x3ea)](/<(?:SHOW|HIDE|DISABLE|ENABLE)[ ](?:ALL|ANY)[ ](?:SWITCH|SWITCHES):[ ](.*?)>/gi,''),_0x4c3f7e=_0x4c3f7e[_0x58ae19(0x3ea)](/<CHOICE WIDTH:[ ](\d+)>/gi,''),_0x4c3f7e=_0x4c3f7e[_0x58ae19(0x3ea)](/<CHOICE INDENT:[ ](\d+)>/gi,''),_0x4c3f7e=_0x4c3f7e[_0x58ae19(0x3ea)](/<(?:BGCOLOR|BG COLOR):[ ](.*?)>/gi,'')),_0x4c3f7e;},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x415)]=function(){const _0x2351ea=_0x4ec4b9,_0x5cb7dc=['Window_ChoiceList',_0x2351ea(0x30f)];return _0x5cb7dc['includes'](this[_0x2351ea(0x1f9)]['name']);},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x35c)]=function(_0x31b858){const _0x5c9152=_0x4ec4b9;return _0x31b858=_0x31b858[_0x5c9152(0x3ea)](/<B>/gi,_0x5c9152(0x239)),_0x31b858=_0x31b858[_0x5c9152(0x3ea)](/<\/B>/gi,_0x5c9152(0x365)),_0x31b858=_0x31b858[_0x5c9152(0x3ea)](/<I>/gi,_0x5c9152(0x200)),_0x31b858=_0x31b858[_0x5c9152(0x3ea)](/<\/I>/gi,_0x5c9152(0x3f1)),_0x31b858;},Window_Base['prototype']['convertTextAlignmentEscapeCharacters']=function(_0x220c0d){const _0x2b89d7=_0x4ec4b9;return _0x220c0d=_0x220c0d[_0x2b89d7(0x3ea)](/<LEFT>/gi,_0x2b89d7(0x480)),_0x220c0d=_0x220c0d[_0x2b89d7(0x3ea)](/<\/LEFT>/gi,_0x2b89d7(0x2c1)),_0x220c0d=_0x220c0d[_0x2b89d7(0x3ea)](/<CENTER>/gi,_0x2b89d7(0x4bf)),_0x220c0d=_0x220c0d[_0x2b89d7(0x3ea)](/<\/CENTER>/gi,_0x2b89d7(0x2c1)),_0x220c0d=_0x220c0d['replace'](/<RIGHT>/gi,_0x2b89d7(0x37e)),_0x220c0d=_0x220c0d[_0x2b89d7(0x3ea)](/<\/RIGHT>/gi,'\x1bTEXTALIGNMENT[0]'),_0x220c0d;},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x433)]=function(_0x32992c){const _0x26209b=_0x4ec4b9;return _0x32992c=_0x32992c[_0x26209b(0x3ea)](/<COLORLOCK>/gi,'\x1bCOLORLOCK[1]'),_0x32992c=_0x32992c['replace'](/<\/COLORLOCK>/gi,_0x26209b(0x253)),_0x32992c=_0x32992c[_0x26209b(0x3ea)](/\(\(\(/gi,_0x26209b(0x284)),_0x32992c=_0x32992c[_0x26209b(0x3ea)](/\)\)\)/gi,'\x1bCOLORLOCK[0]'),_0x32992c;},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x362)]=function(_0x5b151a){const _0x1f775d=_0x4ec4b9;return _0x5b151a=_0x5b151a[_0x1f775d(0x3ea)](/\x1bN\[(\d+)\]/gi,(_0x44bb13,_0x46ebbc)=>this[_0x1f775d(0x2b1)](parseInt(_0x46ebbc))),_0x5b151a=_0x5b151a[_0x1f775d(0x3ea)](/\x1bP\[(\d+)\]/gi,(_0x52da86,_0x38c823)=>this[_0x1f775d(0x3e5)](parseInt(_0x38c823))),_0x5b151a=_0x5b151a['replace'](/\x1bG/gi,TextManager[_0x1f775d(0x37a)]),_0x5b151a;},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x41f)]=function(_0x1ace7b){const _0x141011=_0x4ec4b9;return _0x1ace7b=_0x1ace7b[_0x141011(0x3ea)](/\<(?:BATTLE|CURRENT BATTLE) TARGET\>/gi,this['battleTargetName']()),_0x1ace7b=_0x1ace7b[_0x141011(0x3ea)](/\<(?:BATTLE|CURRENT BATTLE) (?:USER|SUBJECT)\>/gi,this['battleUserName']()),_0x1ace7b=_0x1ace7b['replace'](/\<(?:BATTLE|CURRENT BATTLE) (?:ITEM|SKILL|ACTION)\>/gi,this[_0x141011(0x497)](!![])),_0x1ace7b=_0x1ace7b[_0x141011(0x3ea)](/\<(?:BATTLE|CURRENT BATTLE) (?:ITEM|SKILL|ACTION) NAME\>/gi,this[_0x141011(0x497)](![])),_0x1ace7b;},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x2b3)]=function(){const _0x3c2ab3=_0x4ec4b9;if(!SceneManager[_0x3c2ab3(0x26e)]())return'';if(BattleManager[_0x3c2ab3(0x251)])return BattleManager['_target'][_0x3c2ab3(0x45e)]();if(BattleManager['_targets'][0x0])return BattleManager['_targets'][0x0]['name']();return'';},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x2a8)]=function(){const _0x442f53=_0x4ec4b9;if(!SceneManager['isSceneBattle']())return'';let _0x4b1bba=null;return _0x4b1bba=BattleManager[_0x442f53(0x2bf)],!_0x4b1bba&&BattleManager[_0x442f53(0x348)]()&&(_0x4b1bba=BattleManager[_0x442f53(0x20f)]()),_0x4b1bba?_0x4b1bba[_0x442f53(0x45e)]():'';},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x497)]=function(_0x384623){const _0x35562d=_0x4ec4b9;if(!SceneManager[_0x35562d(0x26e)]())return'';let _0x42df66=BattleManager[_0x35562d(0x283)]||null;!_0x42df66&&BattleManager[_0x35562d(0x348)]()&&(_0x42df66=BattleManager[_0x35562d(0x29e)]());if(_0x42df66&&_0x42df66['item']()){let _0x318e35='';if(_0x384623)_0x318e35+=_0x35562d(0x367)[_0x35562d(0x264)](_0x42df66[_0x35562d(0x3b5)]()['iconIndex']);return _0x318e35+=_0x42df66[_0x35562d(0x3b5)]()[_0x35562d(0x45e)],_0x318e35;}return'';},Window_Base['prototype'][_0x4ec4b9(0x240)]=function(_0x5f10d8){const _0x19af59=_0x4ec4b9;for(const _0x5eaf73 of VisuMZ[_0x19af59(0x33a)]['Settings']['TextCodeActions']){_0x5f10d8['match'](_0x5eaf73[_0x19af59(0x230)])&&(_0x5f10d8=_0x5f10d8['replace'](_0x5eaf73[_0x19af59(0x230)],_0x5eaf73[_0x19af59(0x40f)]),_0x5f10d8=this[_0x19af59(0x3cf)](_0x5f10d8));}return _0x5f10d8;},Window_Base['prototype']['convertMessageCoreEscapeReplacements']=function(_0x1f023a){const _0x2f6a2b=_0x4ec4b9;for(const _0x419c0f of VisuMZ[_0x2f6a2b(0x33a)][_0x2f6a2b(0x1ee)][_0x2f6a2b(0x41b)]){_0x1f023a[_0x2f6a2b(0x471)](_0x419c0f[_0x2f6a2b(0x230)])&&(_0x1f023a=_0x1f023a['replace'](_0x419c0f[_0x2f6a2b(0x230)],_0x419c0f[_0x2f6a2b(0x40f)][_0x2f6a2b(0x44b)](this)),_0x1f023a=this[_0x2f6a2b(0x3cf)](_0x1f023a));}return _0x1f023a;},Window_Base['prototype']['actorName']=function(_0x231709){const _0x14b85d=_0x4ec4b9,_0x2ce09e=_0x231709>=0x1?$gameActors[_0x14b85d(0x20f)](_0x231709):null,_0x6b8f4c=_0x2ce09e?_0x2ce09e[_0x14b85d(0x45e)]():'',_0x48046d=Number(VisuMZ[_0x14b85d(0x33a)][_0x14b85d(0x1ee)]['AutoColor']['Actors']);return this[_0x14b85d(0x203)]()&&_0x48046d!==0x0?'\x1bC[%1]%2\x1bPREVCOLOR[0]'[_0x14b85d(0x264)](_0x48046d,_0x6b8f4c):_0x6b8f4c;},Window_Base['prototype'][_0x4ec4b9(0x3e5)]=function(_0x3e50b1){const _0x135160=_0x4ec4b9,_0x236a69=_0x3e50b1>=0x1?$gameParty[_0x135160(0x4a4)]()[_0x3e50b1-0x1]:null,_0x27ba6b=_0x236a69?_0x236a69[_0x135160(0x45e)]():'',_0x5c8732=Number(VisuMZ[_0x135160(0x33a)][_0x135160(0x1ee)][_0x135160(0x3f5)][_0x135160(0x2dd)]);return this[_0x135160(0x203)]()&&_0x5c8732!==0x0?_0x135160(0x425)['format'](_0x5c8732,_0x27ba6b):_0x27ba6b;},Window_Base[_0x4ec4b9(0x27c)]['processAutoColorWords']=function(_0x4e47e5){const _0x59b64b=_0x4ec4b9;return this[_0x59b64b(0x203)]()&&(_0x4e47e5=this[_0x59b64b(0x408)](_0x4e47e5),_0x4e47e5=this[_0x59b64b(0x38a)](_0x4e47e5)),_0x4e47e5;},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x408)]=function(_0x3a8b89){const _0x4466bb=_0x4ec4b9;for(autoColor of VisuMZ[_0x4466bb(0x33a)][_0x4466bb(0x2a5)]){_0x3a8b89=_0x3a8b89[_0x4466bb(0x3ea)](autoColor[0x0],autoColor[0x1]);}return _0x3a8b89;},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x218)]=function(){const _0x16e1e0=_0x4ec4b9;this[_0x16e1e0(0x341)]=[];},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x3cb)]=function(){const _0x2f73d5=_0x4ec4b9;this['clearActorNameAutoColor']();const _0xae49f2=VisuMZ['MessageCore']['Settings']['AutoColor'],_0x16dbef=_0xae49f2['Actors'];if(_0x16dbef<=0x0)return;for(const _0x422efe of $gameActors[_0x2f73d5(0x3ba)]){if(!_0x422efe)continue;const _0x3e117e=_0x422efe[_0x2f73d5(0x45e)]();if(_0x3e117e[_0x2f73d5(0x47b)]()[_0x2f73d5(0x3e2)]<=0x0)continue;if(/^\d+$/[_0x2f73d5(0x3c4)](_0x3e117e))continue;if(_0x3e117e['match'](/-----/i))continue;let _0x6248b0=VisuMZ[_0x2f73d5(0x33a)][_0x2f73d5(0x2a1)](_0x3e117e);const _0x58ffce=new RegExp('\x5cb'+_0x6248b0+'\x5cb','g'),_0xfe58c0=_0x2f73d5(0x425)[_0x2f73d5(0x264)](_0x16dbef,_0x3e117e);this[_0x2f73d5(0x341)][_0x2f73d5(0x3c9)]([_0x58ffce,_0xfe58c0]);}},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x38a)]=function(_0x5b21e2){const _0xd78e50=_0x4ec4b9;this['_autoColorActorNames']===undefined&&this[_0xd78e50(0x3cb)]();for(autoColor of this['_autoColorActorNames']){_0x5b21e2=_0x5b21e2[_0xd78e50(0x3ea)](autoColor[0x0],autoColor[0x1]);}return _0x5b21e2;},Window_Base['prototype'][_0x4ec4b9(0x338)]=function(_0x5ab755,_0x2b9e78,_0x5ae448){const _0x3fe761=_0x4ec4b9;if(!_0x5ab755)return'';const _0x5f5220=_0x5ab755[_0x2b9e78];let _0x443eb3='';if(_0x5f5220&&_0x5ae448&&_0x5f5220[_0x3fe761(0x266)]){const _0x395424=_0x3fe761(0x4c7);_0x443eb3=_0x395424['format'](_0x5f5220[_0x3fe761(0x266)],_0x5f5220['name']);}else _0x5f5220?_0x443eb3=_0x5f5220[_0x3fe761(0x45e)]:_0x443eb3='';return this['isAutoColorAffected']()&&(_0x443eb3=this[_0x3fe761(0x3f7)](_0x443eb3,_0x5ab755)),_0x443eb3;},Window_Base['prototype'][_0x4ec4b9(0x304)]=function(_0x141801){const _0x5660e9=_0x4ec4b9,_0x1ab274=$gameParty['getLastGainedItemData']();if(_0x1ab274['id']<0x0)return'';let _0x2cff95=null;if(_0x1ab274['type']===0x0)_0x2cff95=$dataItems[_0x1ab274['id']];if(_0x1ab274[_0x5660e9(0x42d)]===0x1)_0x2cff95=$dataWeapons[_0x1ab274['id']];if(_0x1ab274[_0x5660e9(0x42d)]===0x2)_0x2cff95=$dataArmors[_0x1ab274['id']];if(!_0x2cff95)return'';return _0x141801?'\x1bi[%1]%2'['format'](_0x2cff95[_0x5660e9(0x266)],_0x2cff95['name']):_0x2cff95[_0x5660e9(0x45e)];},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x1f5)]=function(){const _0x53f682=_0x4ec4b9,_0x1bd15a=$gameParty[_0x53f682(0x481)]();if(_0x1bd15a['id']<=0x0)return'';return _0x1bd15a['quantity'];},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x3f7)]=function(_0x536296,_0x5a87b5){const _0x3c2755=_0x4ec4b9,_0x197e7f=VisuMZ[_0x3c2755(0x33a)][_0x3c2755(0x1ee)][_0x3c2755(0x3f5)];let _0xb45a93=0x0;if(_0x5a87b5===$dataActors)_0xb45a93=_0x197e7f['Actors'];if(_0x5a87b5===$dataClasses)_0xb45a93=_0x197e7f['Classes'];if(_0x5a87b5===$dataSkills)_0xb45a93=_0x197e7f[_0x3c2755(0x3b8)];if(_0x5a87b5===$dataItems)_0xb45a93=_0x197e7f['Items'];if(_0x5a87b5===$dataWeapons)_0xb45a93=_0x197e7f[_0x3c2755(0x424)];if(_0x5a87b5===$dataArmors)_0xb45a93=_0x197e7f[_0x3c2755(0x3df)];if(_0x5a87b5===$dataEnemies)_0xb45a93=_0x197e7f[_0x3c2755(0x352)];if(_0x5a87b5===$dataStates)_0xb45a93=_0x197e7f[_0x3c2755(0x47e)];return _0xb45a93>0x0&&(_0x536296=_0x3c2755(0x425)[_0x3c2755(0x264)](_0xb45a93,_0x536296)),_0x536296;},Window_Base[_0x4ec4b9(0x27c)]['prepareWordWrapEscapeCharacters']=function(_0x211e86){const _0x3192e9=_0x4ec4b9;_0x211e86=_0x211e86[_0x3192e9(0x3ea)](/<(?:WORDWRAP|WORD WRAP)>/gi,(_0x5b879e,_0x3ef0ff)=>this[_0x3192e9(0x20a)](!![])),_0x211e86=_0x211e86['replace'](/<(?:NOWORDWRAP|NO WORD WRAP)>/gi,(_0x3720bf,_0x342f08)=>this[_0x3192e9(0x20a)](![])),_0x211e86=_0x211e86[_0x3192e9(0x3ea)](/<\/(?:WORDWRAP|WORD WRAP)>/gi,(_0x4f1368,_0x1086cc)=>this[_0x3192e9(0x20a)](![]));if(_0x211e86['match'](Window_Message[_0x3192e9(0x291)]))this['setWordWrap'](![]);else _0x211e86[_0x3192e9(0x471)](Window_Message[_0x3192e9(0x49c)])&&this[_0x3192e9(0x20a)](![]);if(!this[_0x3192e9(0x292)]())return _0x211e86;if(_0x211e86[_0x3192e9(0x3e2)]<=0x0)return _0x211e86;return VisuMZ[_0x3192e9(0x33a)]['Settings'][_0x3192e9(0x28d)]['LineBreakSpace']?(_0x211e86=_0x211e86['replace'](/[\n\r]+/g,'\x20'),_0x211e86=_0x211e86[_0x3192e9(0x3ea)](/<(?:BR|LINEBREAK)>/gi,'\x20\x0a')):(_0x211e86=_0x211e86[_0x3192e9(0x3ea)](/[\n\r]+/g,''),_0x211e86=_0x211e86[_0x3192e9(0x3ea)](/<(?:BR|LINEBREAK)>/gi,'\x0a')),_0x211e86=this[_0x3192e9(0x490)](_0x211e86),_0x211e86=_0x211e86[_0x3192e9(0x1d9)]('\x20')[_0x3192e9(0x2f8)](_0x3192e9(0x3e0)),_0x211e86=_0x211e86[_0x3192e9(0x3ea)](/<(?:BR|LINEBREAK)>/gi,'\x0a'),_0x211e86=_0x211e86[_0x3192e9(0x3ea)](/<LINE\x1bWrapBreak[0]BREAK>/gi,'\x0a'),_0x211e86;},Window_Base['prototype'][_0x4ec4b9(0x490)]=function(_0x50d04a){return _0x50d04a;},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x309)]=Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x350)],Window_Base['prototype'][_0x4ec4b9(0x350)]=function(_0x575e60){const _0xf4def2=_0x4ec4b9;VisuMZ[_0xf4def2(0x33a)]['Window_Base_processNewLine']['call'](this,_0x575e60),this['processTextAlignmentX'](_0x575e60);},VisuMZ[_0x4ec4b9(0x33a)]['Window_Base_processControlCharacter']=Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x3a5)],Window_Base[_0x4ec4b9(0x27c)]['processControlCharacter']=function(_0x5e8fa9,_0x195697){const _0x2ae747=_0x4ec4b9;VisuMZ[_0x2ae747(0x33a)]['Window_Base_processControlCharacter'][_0x2ae747(0x31d)](this,_0x5e8fa9,_0x195697),_0x195697===_0x2ae747(0x3e0)&&this[_0x2ae747(0x3ce)](_0x5e8fa9);},Window_Base['prototype'][_0x4ec4b9(0x360)]=function(_0x1f23b0){const _0x388d18=_0x4ec4b9;var _0x3fbefb=/^\<(.*?)\>/['exec'](_0x1f23b0[_0x388d18(0x48d)][_0x388d18(0x49b)](_0x1f23b0[_0x388d18(0x28c)]));return _0x3fbefb?(_0x1f23b0[_0x388d18(0x28c)]+=_0x3fbefb[0x0]['length'],String(_0x3fbefb[0x0][_0x388d18(0x49b)](0x1,_0x3fbefb[0x0][_0x388d18(0x3e2)]-0x1))):'';},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x439)]=Window_Base['prototype'][_0x4ec4b9(0x2d0)],Window_Base[_0x4ec4b9(0x27c)]['processEscapeCharacter']=function(_0x576825,_0x51c057){const _0x446cbc=_0x4ec4b9;switch(_0x576825){case'C':_0x51c057[_0x446cbc(0x246)]?VisuMZ[_0x446cbc(0x33a)][_0x446cbc(0x439)]['call'](this,_0x576825,_0x51c057):this[_0x446cbc(0x328)](_0x51c057);break;case'I':case'{':case'}':VisuMZ['MessageCore']['Window_Base_processEscapeCharacter'][_0x446cbc(0x31d)](this,_0x576825,_0x51c057);break;case'FS':this['processFsTextCode'](_0x51c057);break;case'PX':this['processPxTextCode'](_0x51c057);break;case'PY':this[_0x446cbc(0x39d)](_0x51c057);break;case _0x446cbc(0x4c5):this[_0x446cbc(0x41a)](this[_0x446cbc(0x328)](_0x51c057));break;case'CENTERPICTURE':this['processDrawCenteredPicture'](_0x51c057);break;case _0x446cbc(0x211):this['processColorLock'](_0x51c057);break;case _0x446cbc(0x483):this[_0x446cbc(0x285)](_0x51c057);break;case _0x446cbc(0x4c3):this[_0x446cbc(0x44d)](this[_0x446cbc(0x328)](_0x51c057));break;case'PICTURE':this['processDrawPicture'](_0x51c057);break;case _0x446cbc(0x4c4):this[_0x446cbc(0x1da)](_0x51c057);break;case'TEXTALIGNMENT':this[_0x446cbc(0x225)](_0x51c057);break;case _0x446cbc(0x21c):this[_0x446cbc(0x2ee)](_0x51c057);break;case _0x446cbc(0x3eb):this[_0x446cbc(0x3ce)](_0x51c057);break;default:this[_0x446cbc(0x2c5)](_0x576825,_0x51c057);}},Window_Base[_0x4ec4b9(0x27c)]['processMessageCoreEscapeActions']=function(_0x1753f2,_0x380425){const _0x227a27=_0x4ec4b9;for(const _0x39faf4 of VisuMZ[_0x227a27(0x33a)][_0x227a27(0x1ee)][_0x227a27(0x300)]){if(_0x39faf4['Match']===_0x1753f2){if(_0x39faf4[_0x227a27(0x45f)]==='')this['obtainEscapeParam'](_0x380425);_0x39faf4[_0x227a27(0x249)][_0x227a27(0x31d)](this,_0x380425);if(this['constructor']===Window_Message){const _0x1e1013=_0x39faf4[_0x227a27(0x29b)]||0x0;if(_0x1e1013>0x0)this[_0x227a27(0x2ea)](_0x1e1013);}}}},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x388)]=function(){const _0x28e4f0=_0x4ec4b9;this['contents'][_0x28e4f0(0x430)]+=VisuMZ['MessageCore'][_0x28e4f0(0x1ee)]['General'][_0x28e4f0(0x28b)],this['contents']['fontSize']=Math['min'](this[_0x28e4f0(0x49e)][_0x28e4f0(0x430)],VisuMZ[_0x28e4f0(0x33a)][_0x28e4f0(0x1ee)][_0x28e4f0(0x3fe)][_0x28e4f0(0x236)]);},Window_Base[_0x4ec4b9(0x27c)]['makeFontSmaller']=function(){const _0x1f804c=_0x4ec4b9;this[_0x1f804c(0x49e)]['fontSize']-=VisuMZ['MessageCore'][_0x1f804c(0x1ee)][_0x1f804c(0x3fe)][_0x1f804c(0x28b)],this[_0x1f804c(0x49e)][_0x1f804c(0x430)]=Math[_0x1f804c(0x22e)](this[_0x1f804c(0x49e)]['fontSize'],VisuMZ[_0x1f804c(0x33a)][_0x1f804c(0x1ee)][_0x1f804c(0x3fe)][_0x1f804c(0x4bb)]);},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x2c6)]=function(_0x514f1){const _0x275b8a=_0x4ec4b9,_0x499291=this['obtainEscapeParam'](_0x514f1);this[_0x275b8a(0x49e)][_0x275b8a(0x430)]=_0x499291[_0x275b8a(0x314)](VisuMZ[_0x275b8a(0x33a)]['Settings'][_0x275b8a(0x3fe)][_0x275b8a(0x4bb)],VisuMZ[_0x275b8a(0x33a)][_0x275b8a(0x1ee)]['General'][_0x275b8a(0x236)]);},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x356)]=function(_0x1b69f7){const _0xb7dd63=_0x4ec4b9;let _0x1fbc29=this[_0xb7dd63(0x49e)]['fontSize'];const _0x2990aa=/\x1b({|}|FS)(\[(\d+)])?/gi;for(;;){const _0x2a5e36=_0x2990aa[_0xb7dd63(0x1e9)](_0x1b69f7);if(!_0x2a5e36)break;const _0xc33d68=String(_0x2a5e36[0x1])[_0xb7dd63(0x33e)]();if(_0xc33d68==='{')this['makeFontBigger']();else{if(_0xc33d68==='}')this[_0xb7dd63(0x27d)]();else _0xc33d68==='FS'&&(this[_0xb7dd63(0x49e)][_0xb7dd63(0x430)]=parseInt(_0x2a5e36[0x3])[_0xb7dd63(0x314)](VisuMZ[_0xb7dd63(0x33a)]['Settings'][_0xb7dd63(0x3fe)][_0xb7dd63(0x4bb)],VisuMZ['MessageCore'][_0xb7dd63(0x1ee)]['General']['FontBiggerCap']));}this[_0xb7dd63(0x49e)][_0xb7dd63(0x430)]>_0x1fbc29&&(_0x1fbc29=this[_0xb7dd63(0x49e)][_0xb7dd63(0x430)]);}return _0x1fbc29;},Window_Base[_0x4ec4b9(0x27c)]['processPxTextCode']=function(_0x1362e1){const _0x344347=_0x4ec4b9;_0x1362e1['x']=this[_0x344347(0x328)](_0x1362e1),VisuMZ[_0x344347(0x33a)]['Settings']['General'][_0x344347(0x486)]&&(_0x1362e1['x']+=_0x1362e1['startX']);},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x39d)]=function(_0x37ffc2){const _0x277d49=_0x4ec4b9;_0x37ffc2['y']=this['obtainEscapeParam'](_0x37ffc2),VisuMZ[_0x277d49(0x33a)]['Settings'][_0x277d49(0x3fe)][_0x277d49(0x486)]&&(_0x37ffc2['y']+=_0x37ffc2['startY']);},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x41a)]=function(_0x35f48e){const _0x46850b=_0x4ec4b9;this[_0x46850b(0x49e)][_0x46850b(0x286)]=!!_0x35f48e;},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x44d)]=function(_0x385407){const _0xb516f9=_0x4ec4b9;this[_0xb516f9(0x49e)][_0xb516f9(0x4b5)]=!!_0x385407;},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x225)]=function(_0x5862db){const _0x83a4b=_0x4ec4b9,_0x27d097=this[_0x83a4b(0x328)](_0x5862db);if(!_0x5862db[_0x83a4b(0x246)])return;switch(_0x27d097){case 0x0:this[_0x83a4b(0x229)](_0x83a4b(0x4b8));return;case 0x1:this[_0x83a4b(0x229)](_0x83a4b(0x446));break;case 0x2:this[_0x83a4b(0x229)](_0x83a4b(0x232));break;case 0x3:this['setTextAlignment']('right');break;}this[_0x83a4b(0x349)](_0x5862db);},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x349)]=function(_0x37711e){const _0x2fb6be=_0x4ec4b9;if(!_0x37711e['drawing'])return;if(_0x37711e[_0x2fb6be(0x2f4)])return;if(this['getTextAlignment']()===_0x2fb6be(0x4b8))return;let _0x22b369=_0x37711e[_0x2fb6be(0x48d)]['indexOf'](_0x2fb6be(0x1f8),_0x37711e[_0x2fb6be(0x28c)]+0x1),_0x1b6cbd=_0x37711e[_0x2fb6be(0x48d)][_0x2fb6be(0x2fc)]('\x0a',_0x37711e[_0x2fb6be(0x28c)]+0x1);if(_0x22b369<0x0)_0x22b369=_0x37711e[_0x2fb6be(0x48d)][_0x2fb6be(0x3e2)]+0x1;if(_0x1b6cbd>0x0)_0x22b369=Math[_0x2fb6be(0x25d)](_0x22b369,_0x1b6cbd);const _0x234362=_0x37711e[_0x2fb6be(0x48d)][_0x2fb6be(0x302)](_0x37711e[_0x2fb6be(0x28c)],_0x22b369),_0x14995d=this[_0x2fb6be(0x41d)](_0x234362)[_0x2fb6be(0x2ed)],_0x3b4877=_0x37711e['width']||this['innerWidth']-0x8,_0x329dcf=this[_0x2fb6be(0x1f9)]===Window_Message&&$gameMessage['faceName']()!=='';switch(this[_0x2fb6be(0x221)]()){case _0x2fb6be(0x446):_0x37711e['x']=_0x37711e[_0x2fb6be(0x326)];break;case _0x2fb6be(0x232):_0x37711e['x']=_0x37711e['startX'],_0x37711e['x']+=Math['floor']((_0x3b4877-_0x14995d)/0x2);_0x329dcf&&(_0x37711e['x']-=_0x37711e['startX']/0x2);break;case _0x2fb6be(0x4c9):_0x37711e['x']=_0x3b4877-_0x14995d+_0x37711e[_0x2fb6be(0x326)];_0x329dcf&&(_0x37711e['x']-=_0x37711e[_0x2fb6be(0x326)]);break;}},Window_Base['prototype'][_0x4ec4b9(0x41d)]=function(_0x52b3d7){const _0x2099ac=_0x4ec4b9;_0x52b3d7=_0x52b3d7['replace'](/\x1b!/g,''),_0x52b3d7=_0x52b3d7[_0x2099ac(0x3ea)](/\x1b\|/g,''),_0x52b3d7=_0x52b3d7[_0x2099ac(0x3ea)](/\x1b\./g,'');const _0x593017=this['createTextState'](_0x52b3d7,0x0,0x0,0x0),_0x4fdeb3=this['getPreservedFontSettings']();return _0x593017['drawing']=![],this['processAllText'](_0x593017),this[_0x2099ac(0x4c6)](_0x4fdeb3),{'width':_0x593017['outputWidth'],'height':_0x593017[_0x2099ac(0x3c1)]};},Window_Base[_0x4ec4b9(0x24b)]=VisuMZ[_0x4ec4b9(0x33a)]['Settings'][_0x4ec4b9(0x28d)][_0x4ec4b9(0x43c)]||0x0,Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x3ce)]=function(_0x3165ac){const _0x1d0ca1=_0x4ec4b9,_0x25b9be=(_0x3165ac[_0x1d0ca1(0x2f4)]?-0x1:0x1)*this[_0x1d0ca1(0x4b1)]('\x20');_0x3165ac['x']+=_0x25b9be;if(this[_0x1d0ca1(0x328)](_0x3165ac)>0x0)_0x3165ac['x']+=_0x25b9be;if(_0x3165ac['rtl'])return;let _0xae092=_0x3165ac[_0x1d0ca1(0x48d)]['indexOf'](_0x1d0ca1(0x3e0),_0x3165ac[_0x1d0ca1(0x28c)]+0x1),_0x2c9443=_0x3165ac['text'][_0x1d0ca1(0x2fc)]('\x0a',_0x3165ac[_0x1d0ca1(0x28c)]+0x1);if(_0xae092<0x0)_0xae092=_0x3165ac[_0x1d0ca1(0x48d)][_0x1d0ca1(0x3e2)]+0x1;if(_0x2c9443>0x0)_0xae092=Math['min'](_0xae092,_0x2c9443);const _0x228a84=_0x3165ac[_0x1d0ca1(0x48d)][_0x1d0ca1(0x302)](_0x3165ac[_0x1d0ca1(0x28c)],_0xae092),_0x5c761a=this[_0x1d0ca1(0x387)](_0x228a84)['width'];let _0x263db0=_0x3165ac[_0x1d0ca1(0x2ed)]||this[_0x1d0ca1(0x33b)];_0x263db0-=Window_Base[_0x1d0ca1(0x24b)];if(this[_0x1d0ca1(0x1f9)]===Window_Message){const _0x591fa4=$gameMessage['faceName']()===''?0x0:ImageManager[_0x1d0ca1(0x2a2)]+0x14;_0x263db0-=_0x591fa4,VisuMZ['MessageCore'][_0x1d0ca1(0x1ee)][_0x1d0ca1(0x28d)]['TightWrap']&&(_0x263db0-=_0x591fa4);}let _0x4165a2=![];if(_0x3165ac['x']+_0x5c761a>_0x3165ac[_0x1d0ca1(0x326)]+_0x263db0)_0x4165a2=!![];if(_0x5c761a===0x0)_0x4165a2=!![];_0x4165a2&&(_0x3165ac[_0x1d0ca1(0x48d)]=_0x3165ac['text'][_0x1d0ca1(0x49b)](0x0,_0x3165ac[_0x1d0ca1(0x28c)])+'\x0a'+_0x3165ac['text'][_0x1d0ca1(0x1dc)](_0x3165ac[_0x1d0ca1(0x28c)]));},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x387)]=function(_0x4a13e2){const _0x9868b7=_0x4ec4b9,_0x4c5b99=this[_0x9868b7(0x219)](_0x4a13e2,0x0,0x0,0x0),_0x28125d=this['getPreservedFontSettings']();return _0x4c5b99[_0x9868b7(0x246)]=![],this[_0x9868b7(0x20a)](![]),this[_0x9868b7(0x27f)](_0x4c5b99),this[_0x9868b7(0x20a)](!![]),this['returnPreservedFontSettings'](_0x28125d),{'width':_0x4c5b99[_0x9868b7(0x23a)],'height':_0x4c5b99[_0x9868b7(0x3c1)]};},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x285)]=function(_0x4e3e28){return this['obtainEscapeParam'](_0x4e3e28);},Window_Base['prototype']['processDrawPicture']=function(_0x429538){const _0x18b94b=_0x4ec4b9,_0x42f538=this[_0x18b94b(0x360)](_0x429538)[_0x18b94b(0x1d9)](',');if(!_0x429538[_0x18b94b(0x246)])return;const _0x5082af=_0x42f538[0x0][_0x18b94b(0x47b)](),_0x53052a=_0x42f538[0x1]||0x0,_0x4d7c2e=_0x42f538[0x2]||0x0,_0x41db7a=ImageManager['loadPicture'](_0x5082af),_0x4c2924=this['contents'][_0x18b94b(0x278)];_0x41db7a[_0x18b94b(0x1eb)](this[_0x18b94b(0x48f)]['bind'](this,_0x41db7a,_0x429538['x'],_0x429538['y'],_0x53052a,_0x4d7c2e,_0x4c2924));},Window_Base['prototype']['drawBackPicture']=function(_0x102aaa,_0x4125f5,_0x3c4765,_0x1ea8fb,_0x4d1235,_0x16ffa2){const _0x4e8c5f=_0x4ec4b9;_0x1ea8fb=_0x1ea8fb||_0x102aaa[_0x4e8c5f(0x2ed)],_0x4d1235=_0x4d1235||_0x102aaa[_0x4e8c5f(0x36f)],this[_0x4e8c5f(0x35d)][_0x4e8c5f(0x278)]=_0x16ffa2,this[_0x4e8c5f(0x35d)][_0x4e8c5f(0x2ff)](_0x102aaa,0x0,0x0,_0x102aaa[_0x4e8c5f(0x2ed)],_0x102aaa[_0x4e8c5f(0x36f)],_0x4125f5,_0x3c4765,_0x1ea8fb,_0x4d1235),this[_0x4e8c5f(0x35d)]['paintOpacity']=0xff;},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x43f)]=function(_0x3f0915){const _0x326ab7=_0x4ec4b9,_0x4d707d=this[_0x326ab7(0x360)](_0x3f0915)[_0x326ab7(0x1d9)](',');if(!_0x3f0915[_0x326ab7(0x246)])return;const _0x3fb53c=_0x4d707d[0x0][_0x326ab7(0x47b)](),_0x4d928c=ImageManager[_0x326ab7(0x4b0)](_0x3fb53c),_0x20b22c=JsonEx[_0x326ab7(0x39c)](_0x3f0915),_0x25a93c=this[_0x326ab7(0x49e)][_0x326ab7(0x278)];_0x4d928c['addLoadListener'](this['drawBackCenteredPicture']['bind'](this,_0x4d928c,_0x20b22c,_0x25a93c));},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x289)]=function(_0x42de65,_0x20b5fb,_0x58ec84){const _0x56404c=_0x4ec4b9,_0x3d96d2=_0x20b5fb[_0x56404c(0x2ed)]||this[_0x56404c(0x33b)],_0x32c37a=this['_index']!==undefined?this[_0x56404c(0x469)]():this[_0x56404c(0x298)],_0x4eb63c=_0x3d96d2/_0x42de65[_0x56404c(0x2ed)],_0x9d3beb=_0x32c37a/_0x42de65[_0x56404c(0x36f)],_0x9e2505=Math[_0x56404c(0x25d)](_0x4eb63c,_0x9d3beb,0x1),_0x32343a=this[_0x56404c(0x2a6)]!==undefined?(this[_0x56404c(0x1e7)](0x0)[_0x56404c(0x36f)]-this[_0x56404c(0x4a7)]())/0x2:0x0,_0x1de49e=_0x42de65[_0x56404c(0x2ed)]*_0x9e2505,_0x189e76=_0x42de65['height']*_0x9e2505,_0x4d0e09=Math[_0x56404c(0x26a)]((_0x3d96d2-_0x1de49e)/0x2)+_0x20b5fb['startX'],_0x42ebac=Math[_0x56404c(0x26a)]((_0x32c37a-_0x189e76)/0x2)+_0x20b5fb[_0x56404c(0x265)]-_0x32343a*0x2;this[_0x56404c(0x35d)][_0x56404c(0x278)]=_0x58ec84,this['contentsBack'][_0x56404c(0x2ff)](_0x42de65,0x0,0x0,_0x42de65[_0x56404c(0x2ed)],_0x42de65[_0x56404c(0x36f)],_0x4d0e09,_0x42ebac,_0x1de49e,_0x189e76),this[_0x56404c(0x35d)][_0x56404c(0x278)]=0xff;},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x3f0)]=function(_0x3775ba){const _0x19ce11=_0x4ec4b9,_0x1e084f=this[_0x19ce11(0x328)](_0x3775ba);if(_0x3775ba['drawing'])this['setColorLock'](_0x1e084f>0x0);},Window_Base[_0x4ec4b9(0x27c)][_0x4ec4b9(0x2ee)]=function(_0x1403f4){const _0x46af36=_0x4ec4b9,_0x25b011=this[_0x46af36(0x328)](_0x1403f4);this[_0x46af36(0x1f9)]===Window_Message&&_0x1403f4[_0x46af36(0x246)]&&this['startWait'](_0x25b011);},Window_Help[_0x4ec4b9(0x27c)][_0x4ec4b9(0x398)]=function(){const _0x503a52=_0x4ec4b9;this['setWordWrap']($gameSystem[_0x503a52(0x2be)]());},Window_Help[_0x4ec4b9(0x27c)][_0x4ec4b9(0x203)]=function(){return!![];},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x4a1)]=Window_Help['prototype'][_0x4ec4b9(0x29d)],Window_Help[_0x4ec4b9(0x27c)][_0x4ec4b9(0x29d)]=function(){const _0x3294ec=_0x4ec4b9;this[_0x3294ec(0x218)](),VisuMZ['MessageCore'][_0x3294ec(0x4a1)]['call'](this),this[_0x3294ec(0x398)]();},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x470)]=Window_Options[_0x4ec4b9(0x27c)][_0x4ec4b9(0x38e)],Window_Options[_0x4ec4b9(0x27c)]['addGeneralOptions']=function(){const _0xff7db0=_0x4ec4b9;VisuMZ['MessageCore'][_0xff7db0(0x470)][_0xff7db0(0x31d)](this),this[_0xff7db0(0x48e)]();},Window_Options[_0x4ec4b9(0x27c)]['addMessageCoreCommands']=function(){const _0x51f5ff=_0x4ec4b9;VisuMZ[_0x51f5ff(0x33a)][_0x51f5ff(0x1ee)][_0x51f5ff(0x4ab)][_0x51f5ff(0x436)]&&this['addMessageCoreTextSpeedCommand']();},Window_Options[_0x4ec4b9(0x27c)][_0x4ec4b9(0x2eb)]=function(){const _0x56e313=_0x4ec4b9,_0x31d3bd=TextManager[_0x56e313(0x308)],_0x13a772=_0x56e313(0x262);this[_0x56e313(0x21f)](_0x31d3bd,_0x13a772);},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x261)]=Window_Options[_0x4ec4b9(0x27c)][_0x4ec4b9(0x406)],Window_Options[_0x4ec4b9(0x27c)][_0x4ec4b9(0x406)]=function(_0x1cb163){const _0x3acd7f=_0x4ec4b9,_0x940fc=this['commandSymbol'](_0x1cb163);if(_0x940fc==='textSpeed')return this[_0x3acd7f(0x472)]();return VisuMZ['MessageCore']['Window_Options_statusText'][_0x3acd7f(0x31d)](this,_0x1cb163);},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x340)]=Window_Options[_0x4ec4b9(0x27c)][_0x4ec4b9(0x2b5)],Window_Options[_0x4ec4b9(0x27c)]['isVolumeSymbol']=function(_0x362aa7){const _0x21e68c=_0x4ec4b9;if(_0x362aa7==='textSpeed')return!![];return VisuMZ[_0x21e68c(0x33a)][_0x21e68c(0x340)][_0x21e68c(0x31d)](this,_0x362aa7);},Window_Options[_0x4ec4b9(0x27c)][_0x4ec4b9(0x472)]=function(){const _0x46b3f1=_0x4ec4b9,_0x461662=this[_0x46b3f1(0x409)]('textSpeed');return _0x461662>0xa?TextManager['instantTextSpeed']:_0x461662;},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x1e0)]=Window_Options[_0x4ec4b9(0x27c)][_0x4ec4b9(0x35b)],Window_Options[_0x4ec4b9(0x27c)]['changeVolume']=function(_0x4c5ab2,_0x30cb41,_0x5608b0){const _0xe85df4=_0x4ec4b9;if(_0x4c5ab2===_0xe85df4(0x262))return this[_0xe85df4(0x494)](_0x4c5ab2,_0x30cb41,_0x5608b0);VisuMZ[_0xe85df4(0x33a)][_0xe85df4(0x1e0)][_0xe85df4(0x31d)](this,_0x4c5ab2,_0x30cb41,_0x5608b0);},Window_Options['prototype'][_0x4ec4b9(0x494)]=function(_0xc652e0,_0x4c8b9e,_0x4bbb1b){const _0x23467f=_0x4ec4b9,_0x466be8=this[_0x23467f(0x409)](_0xc652e0),_0x2e1979=0x1,_0x23a595=_0x466be8+(_0x4c8b9e?_0x2e1979:-_0x2e1979);_0x23a595>0xb&&_0x4bbb1b?this[_0x23467f(0x23d)](_0xc652e0,0x1):this[_0x23467f(0x23d)](_0xc652e0,_0x23a595['clamp'](0x1,0xb));},Window_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x24e)]=function(){const _0x303821=_0x4ec4b9;let _0x4335e6=Window_Base[_0x303821(0x27c)][_0x303821(0x24e)][_0x303821(0x31d)](this);return _0x4335e6-=this[_0x303821(0x3c5)](),_0x4335e6;},Window_Message[_0x4ec4b9(0x27c)]['refreshDimmerBitmap']=function(){const _0x59763d=_0x4ec4b9;Window_Base[_0x59763d(0x27c)]['refreshDimmerBitmap'][_0x59763d(0x31d)](this),VisuMZ[_0x59763d(0x33a)][_0x59763d(0x1ee)]['General'][_0x59763d(0x41c)]&&this[_0x59763d(0x4b9)]();},Window_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x4b9)]=function(){const _0x35338a=_0x4ec4b9;this[_0x35338a(0x407)]['x']=Math[_0x35338a(0x2a3)](this[_0x35338a(0x2ed)]/0x2),this['_dimmerSprite']['anchor']['x']=0.5,this[_0x35338a(0x407)][_0x35338a(0x374)]['x']=Graphics['width'];},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x40d)]=Window_Message[_0x4ec4b9(0x27c)]['clearFlags'],Window_Message[_0x4ec4b9(0x27c)]['clearFlags']=function(){const _0x1a84d4=_0x4ec4b9;VisuMZ[_0x1a84d4(0x33a)][_0x1a84d4(0x40d)]['call'](this),this[_0x1a84d4(0x218)](),this[_0x1a84d4(0x398)](),this[_0x1a84d4(0x25f)](![]),this['setTextAlignment']('default'),this[_0x1a84d4(0x1f0)](VisuMZ['MessageCore']['Settings']['General'][_0x1a84d4(0x1db)]);},Window_Message['prototype'][_0x4ec4b9(0x398)]=function(){const _0x326d4f=_0x4ec4b9;this[_0x326d4f(0x20a)]($gameSystem['isMessageWindowWordWrap']());},Window_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x203)]=function(){return!![];},Window_Message[_0x4ec4b9(0x27c)]['setTextDelay']=function(_0xee649d){const _0x183235=_0x4ec4b9,_0x2e741a=0xb-ConfigManager[_0x183235(0x262)];_0xee649d=Math[_0x183235(0x2a3)](_0xee649d*_0x2e741a),this[_0x183235(0x427)]=_0xee649d,this['_textDelay']=_0xee649d;},VisuMZ['MessageCore'][_0x4ec4b9(0x1f7)]=Window_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x3bd)],Window_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x3bd)]=function(){const _0x3eeff3=_0x4ec4b9;return VisuMZ[_0x3eeff3(0x33a)][_0x3eeff3(0x1f7)][_0x3eeff3(0x31d)](this)||Input[_0x3eeff3(0x382)](VisuMZ[_0x3eeff3(0x33a)][_0x3eeff3(0x1ee)][_0x3eeff3(0x3fe)]['FastForwardKey']);},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x3dc)]=Window_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x3d5)],Window_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x3d5)]=function(){const _0x349cb5=_0x4ec4b9;let _0x2eb86a=this['y'];this['x']=Math[_0x349cb5(0x2a3)]((Graphics[_0x349cb5(0x1ff)]-this[_0x349cb5(0x2ed)])/0x2),VisuMZ[_0x349cb5(0x33a)]['Window_Message_updatePlacement'][_0x349cb5(0x31d)](this);if(this[_0x349cb5(0x444)])this['y']=_0x2eb86a;this[_0x349cb5(0x40e)](),this[_0x349cb5(0x2d3)](),this['clampPlacementPosition'](),this[_0x349cb5(0x4a8)]();},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x30b)]=Window_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x2af)],Window_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x2af)]=function(_0x191d98){const _0x43438b=_0x4ec4b9;this[_0x43438b(0x21b)](_0x191d98),this[_0x43438b(0x2fe)](_0x191d98),VisuMZ[_0x43438b(0x33a)][_0x43438b(0x30b)]['call'](this,_0x191d98),this['createContents']();},Window_Message['prototype'][_0x4ec4b9(0x21b)]=function(_0xc98023){const _0x298ab6=_0x4ec4b9;if(!_0xc98023)return;this[_0x298ab6(0x484)]=![],_0xc98023[_0x298ab6(0x48d)]=this[_0x298ab6(0x371)](_0xc98023[_0x298ab6(0x48d)]),this['_textMacroFound']&&(_0xc98023['text']=this[_0x298ab6(0x402)](_0xc98023[_0x298ab6(0x48d)]),this[_0x298ab6(0x484)]=!![]);},Window_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x402)]=function(_0x206414){const _0x589d99=_0x4ec4b9;if(this['_macroBypassWordWrap'])return _0x206414;return Window_Base['prototype'][_0x589d99(0x402)][_0x589d99(0x31d)](this,_0x206414);},Window_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x2fe)]=function(_0x1968e2){const _0x122922=_0x4ec4b9;this['prepareForcedPositionEscapeCharacters'](_0x1968e2),this[_0x122922(0x273)](_0x1968e2),this[_0x122922(0x25a)]();},VisuMZ[_0x4ec4b9(0x33a)]['Window_Message_terminateMessage']=Window_Message['prototype'][_0x4ec4b9(0x2f6)],Window_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x2f6)]=function(){const _0x43bb05=_0x4ec4b9;VisuMZ[_0x43bb05(0x33a)][_0x43bb05(0x412)][_0x43bb05(0x31d)](this),this[_0x43bb05(0x47a)]();if(this[_0x43bb05(0x333)])this[_0x43bb05(0x2fb)]();},Window_Message[_0x4ec4b9(0x27c)]['updateDimensions']=function(){const _0x3864e4=_0x4ec4b9;this[_0x3864e4(0x2ed)]=$gameSystem[_0x3864e4(0x391)]()+this[_0x3864e4(0x28f)]();;this[_0x3864e4(0x2ed)]=Math['min'](Graphics[_0x3864e4(0x2ed)],this['width']);const _0x3efa2d=$gameSystem[_0x3864e4(0x254)]();this[_0x3864e4(0x36f)]=SceneManager[_0x3864e4(0x3a4)][_0x3864e4(0x31f)](_0x3efa2d,![])+this[_0x3864e4(0x3c5)](),this[_0x3864e4(0x36f)]=Math['min'](Graphics[_0x3864e4(0x36f)],this[_0x3864e4(0x36f)]);if($gameTemp['_centerMessageWindow'])this[_0x3864e4(0x4ba)]();},Window_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x28f)]=function(){return 0x0;},Window_Message[_0x4ec4b9(0x27c)]['addedHeight']=function(){return 0x0;},Window_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x4ba)]=function(){const _0xbe2144=_0x4ec4b9;this['x']=(Graphics[_0xbe2144(0x1ff)]-this[_0xbe2144(0x2ed)])/0x2,$gameTemp[_0xbe2144(0x42e)]=undefined,this['clampPlacementPosition']();},Window_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x1f6)]=function(){const _0x14b985=_0x4ec4b9,_0x52a3a8={'x':this['x'],'y':this['y']};Window_Base[_0x14b985(0x27c)][_0x14b985(0x1f6)][_0x14b985(0x31d)](this),this['updateNameBoxMove'](_0x52a3a8);},Window_Message[_0x4ec4b9(0x27c)]['canMove']=function(){return!![];},Window_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x31a)]=function(_0x1073b9){const _0x128b1b=_0x4ec4b9;this[_0x128b1b(0x2b4)]&&(this[_0x128b1b(0x2b4)]['x']+=this['x']-_0x1073b9['x'],this['_nameBoxWindow']['y']+=this['y']-_0x1073b9['y']);},Window_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x1dd)]=function(_0xb63857,_0x172121){const _0x305c9c=_0x4ec4b9;this[_0x305c9c(0x2c4)](this[_0x305c9c(0x489)]['x'],this[_0x305c9c(0x2c9)]*(Graphics['boxHeight']-this[_0x305c9c(0x36f)])/0x2,this['_resetRect'][_0x305c9c(0x2ed)],this[_0x305c9c(0x489)][_0x305c9c(0x36f)],_0xb63857,_0x172121);},Window_Message['prototype'][_0x4ec4b9(0x285)]=function(_0x1895e5){const _0x36d239=_0x4ec4b9,_0x1686cb=Window_Base[_0x36d239(0x27c)]['processCommonEvent'][_0x36d239(0x31d)](this,_0x1895e5);_0x1895e5[_0x36d239(0x246)]&&this[_0x36d239(0x2ea)](_0x1686cb);},Window_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x2ea)]=function(_0x4e4f41){const _0x61e810=_0x4ec4b9;if($gameParty[_0x61e810(0x2e3)]()){}else $gameMap[_0x61e810(0x1fb)](_0x4e4f41);},Window_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x2df)]=function(_0x1fd493){const _0x55137f=_0x4ec4b9;this['_textDelayCount']--,this[_0x55137f(0x427)]<=0x0&&(this[_0x55137f(0x458)](_0x1fd493),Window_Base[_0x55137f(0x27c)]['processCharacter'][_0x55137f(0x31d)](this,_0x1fd493));},Window_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x458)]=function(_0x592194){const _0xdc7dfa=_0x4ec4b9;this['_textDelayCount']=this[_0xdc7dfa(0x3b2)];if(this['_textDelay']<=0x0)this[_0xdc7dfa(0x316)]=!![];},VisuMZ['MessageCore'][_0x4ec4b9(0x24c)]=Window_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x2d0)],Window_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x2d0)]=function(_0x18df83,_0xdba4b7){const _0x373e2a=_0x4ec4b9;!_0xdba4b7[_0x373e2a(0x246)]?Window_Base[_0x373e2a(0x27c)][_0x373e2a(0x2d0)][_0x373e2a(0x31d)](this,_0x18df83,_0xdba4b7):VisuMZ[_0x373e2a(0x33a)][_0x373e2a(0x24c)]['call'](this,_0x18df83,_0xdba4b7);},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x35a)]=Window_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x2f0)],Window_Message['prototype'][_0x4ec4b9(0x2f0)]=function(_0x4e4c17){const _0x4d59f5=_0x4ec4b9;if(this[_0x4d59f5(0x25b)])return![];return VisuMZ[_0x4d59f5(0x33a)][_0x4d59f5(0x35a)][_0x4d59f5(0x31d)](this,_0x4e4c17);},Window_Message['prototype']['prepareForcedPositionEscapeCharacters']=function(_0x153472){const _0x5525c6=_0x4ec4b9;let _0x43490b=_0x153472['text'];this[_0x5525c6(0x2e0)]={};if(this[_0x5525c6(0x292)]())return _0x43490b;_0x43490b=_0x43490b['replace'](/<POSITION:[ ]*(.*?)>/gi,(_0x75f559,_0x21331a)=>{const _0x53e8ed=_0x5525c6,_0xe8ff67=_0x21331a[_0x53e8ed(0x1d9)](',')[_0x53e8ed(0x297)](_0x4675c2=>Number(_0x4675c2)||0x0);if(_0xe8ff67[0x0]!==undefined)this['_forcedPosition']['x']=Number(_0xe8ff67[0x0]);if(_0xe8ff67[0x1]!==undefined)this[_0x53e8ed(0x2e0)]['y']=Number(_0xe8ff67[0x1]);if(_0xe8ff67[0x2]!==undefined)this['_forcedPosition']['width']=Number(_0xe8ff67[0x2]);if(_0xe8ff67[0x3]!==undefined)this[_0x53e8ed(0x2e0)][_0x53e8ed(0x36f)]=Number(_0xe8ff67[0x3]);return'';}),_0x43490b=_0x43490b[_0x5525c6(0x3ea)](/<COORDINATES:[ ]*(.*?)>/gi,(_0xdcb9f9,_0x5b2f15)=>{const _0x3440b0=_0x5525c6,_0x2b106d=_0x5b2f15['split'](',')[_0x3440b0(0x297)](_0xfc81fd=>Number(_0xfc81fd)||0x0);if(_0x2b106d[0x0]!==undefined)this['_forcedPosition']['x']=Number(_0x2b106d[0x0]);if(_0x2b106d[0x1]!==undefined)this[_0x3440b0(0x2e0)]['y']=Number(_0x2b106d[0x1]);return'';}),_0x43490b=_0x43490b[_0x5525c6(0x3ea)](/<DIMENSIONS:[ ]*(.*?)>/gi,(_0x5a5818,_0x673eb8)=>{const _0x336b62=_0x5525c6,_0x189dfb=_0x673eb8[_0x336b62(0x1d9)](',')[_0x336b62(0x297)](_0x2e0e1a=>Number(_0x2e0e1a)||0x0);if(_0x189dfb[0x0]!==undefined)this[_0x336b62(0x2e0)][_0x336b62(0x2ed)]=Number(_0x189dfb[0x2]);if(_0x189dfb[0x1]!==undefined)this[_0x336b62(0x2e0)][_0x336b62(0x36f)]=Number(_0x189dfb[0x3]);return'';}),_0x43490b=_0x43490b[_0x5525c6(0x3ea)](/<OFFSET:[ ]*(.*?)>/gi,(_0xd2ce3,_0x4381c8)=>{const _0x5df0aa=_0x5525c6,_0x58e2a3=_0x4381c8[_0x5df0aa(0x1d9)](',')[_0x5df0aa(0x297)](_0x521378=>Number(_0x521378)||0x0);let _0x3f47f4=_0x58e2a3[0x0]||0x0,_0x2df00d=_0x58e2a3[0x1]||0x0;return $gameSystem[_0x5df0aa(0x3b1)](_0x3f47f4,_0x2df00d),'';}),_0x153472[_0x5525c6(0x48d)]=_0x43490b;},Window_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x40e)]=function(){const _0x268719=$gameSystem['getMessageWindowXyOffsets']();this['x']+=_0x268719['x'],this['y']+=_0x268719['y'];},Window_Message['prototype']['updateForcedPlacement']=function(){const _0x2644d3=_0x4ec4b9;this[_0x2644d3(0x2e0)]=this[_0x2644d3(0x2e0)]||{};const _0x42beec=['x','y','width',_0x2644d3(0x36f)];for(const _0x25875e of _0x42beec){this[_0x2644d3(0x2e0)][_0x25875e]!==undefined&&(this[_0x25875e]=Number(this[_0x2644d3(0x2e0)][_0x25875e]));}},Window_Message[_0x4ec4b9(0x27c)]['prepareAutoSizeEscapeCharacters']=function(_0x4e7d54){const _0x2ece2f=_0x4ec4b9;this[_0x2ece2f(0x25b)]=![];let _0x588bfc=_0x4e7d54[_0x2ece2f(0x48d)];_0x588bfc=_0x588bfc[_0x2ece2f(0x3ea)](/<(?:AUTO|AUTOSIZE|AUTO SIZE)>/gi,()=>{const _0x4a4192=_0x2ece2f;return this[_0x4a4192(0x3b9)](_0x588bfc,!![],!![]),this[_0x4a4192(0x46d)](_0x4a4192(0x269)),'';}),_0x588bfc=_0x588bfc[_0x2ece2f(0x3ea)](/<(?:AUTOWIDTH|AUTO WIDTH)>/gi,()=>{const _0x26d625=_0x2ece2f;return this[_0x26d625(0x3b9)](_0x588bfc,!![],![]),this['processAutoPosition'](_0x26d625(0x269)),'';}),_0x588bfc=_0x588bfc['replace'](/<(?:AUTOHEIGHT|AUTO HEIGHT)>/gi,()=>{const _0x52d42f=_0x2ece2f;return this[_0x52d42f(0x3b9)](_0x588bfc,![],!![]),this[_0x52d42f(0x46d)]('none'),'';});if(SceneManager[_0x2ece2f(0x26e)]())_0x588bfc=_0x588bfc['replace'](/<(?:AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi,(_0x30dc69,_0x209527)=>{const _0x17363c=_0x2ece2f;return this[_0x17363c(0x3b9)](_0x588bfc,!![],!![]),this[_0x17363c(0x46d)](_0x17363c(0x22d),Number(_0x209527)||0x1),'';}),_0x588bfc=_0x588bfc[_0x2ece2f(0x3ea)](/<(?:AUTOPARTY|AUTO PARTY):[ ](.*?)>/gi,(_0x37c7d6,_0x476374)=>{const _0x3239c0=_0x2ece2f;return this[_0x3239c0(0x3b9)](_0x588bfc,!![],!![]),this[_0x3239c0(0x46d)]('battle\x20party',Number(_0x476374)||0x0),'';}),_0x588bfc=_0x588bfc[_0x2ece2f(0x3ea)](/<(?:AUTOENEMY|AUTO ENEMY):[ ](.*?)>/gi,(_0x159eca,_0x37e290)=>{const _0x202df6=_0x2ece2f;return this[_0x202df6(0x3b9)](_0x588bfc,!![],!![]),this[_0x202df6(0x46d)]('battle\x20enemy',Number(_0x37e290)||0x0),'';});else SceneManager['isSceneMap']()&&(_0x588bfc=_0x588bfc['replace'](/<(?:AUTOPLAYER|AUTO PLAYER)>/gi,(_0x420982,_0x237f0a)=>{const _0x732052=_0x2ece2f;return this['processAutoSize'](_0x588bfc,!![],!![]),this[_0x732052(0x46d)]('map\x20player',0x0),'';}),_0x588bfc=_0x588bfc['replace'](/<(?:AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi,(_0x1f8141,_0x54233f)=>{const _0x4bbf48=_0x2ece2f;return this['processAutoSize'](_0x588bfc,!![],!![]),this['processAutoPosition'](_0x4bbf48(0x2cd),Number(_0x54233f)||0x1),'';}),_0x588bfc=_0x588bfc['replace'](/<(?:AUTOPARTY|AUTO PARTY):[ ](.*?)>/gi,(_0x350abd,_0x38ab96)=>{const _0x539afb=_0x2ece2f;return this[_0x539afb(0x3b9)](_0x588bfc,!![],!![]),this[_0x539afb(0x46d)](_0x539afb(0x235),Number(_0x38ab96)||0x0),'';}),_0x588bfc=_0x588bfc['replace'](/<(?:AUTOEVENT|AUTO EVENT):[ ](.*?)>/gi,(_0x4bc7e3,_0x4dd551)=>{return this['processAutoSize'](_0x588bfc,!![],!![]),this['processAutoPosition']('map\x20event',Number(_0x4dd551)||0x0),'';}));_0x4e7d54[_0x2ece2f(0x48d)]=_0x588bfc;},Window_Message[_0x4ec4b9(0x291)]=/<(?:AUTO|AUTOSIZE|AUTO SIZE|AUTOWIDTH|AUTO WIDTH|AUTOHEIGHT|AUTO HEIGHT|AUTOPLAYER|AUTO PLAYER)>/gi,Window_Message['_autoPosRegExp']=/<(?:AUTOPARTY|AUTO PARTY|AUTOPLAYER|AUTO PLAYER|AUTOEVENT|AUTO EVENT|AUTOENEMY|AUTO ENEMY|AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi,Window_Message['prototype'][_0x4ec4b9(0x3b9)]=function(_0x1b5353,_0x1eb6de,_0x42c372){const _0x4db322=_0x4ec4b9;_0x1b5353=_0x1b5353[_0x4db322(0x3ea)](Window_Message[_0x4db322(0x291)],''),_0x1b5353=_0x1b5353[_0x4db322(0x3ea)](Window_Message[_0x4db322(0x49c)],''),this[_0x4db322(0x272)]=!![],this[_0x4db322(0x25b)]=!![],this['setWordWrap'](![]);const _0x5c0dcd=this['textSizeExRaw'](_0x1b5353);if(_0x1eb6de){let _0x1f6abd=_0x5c0dcd['width']+$gameSystem[_0x4db322(0x323)]()*0x2+0x6;const _0x1dbea4=$gameMessage[_0x4db322(0x3bb)]()!=='',_0x370025=ImageManager['faceWidth'],_0x3ae9e8=0x14;_0x1f6abd+=_0x1dbea4?_0x370025+_0x3ae9e8:0x4;if(_0x1f6abd%0x2!==0x0)_0x1f6abd+=0x1;$gameSystem[_0x4db322(0x3f3)](_0x1f6abd);}if(_0x42c372){let _0xc85e40=Math[_0x4db322(0x2e9)](_0x5c0dcd[_0x4db322(0x36f)]/this[_0x4db322(0x4a7)]());$gameSystem[_0x4db322(0x394)](_0xc85e40);}this[_0x4db322(0x2e6)](),this['_refreshPauseSign'](),this[_0x4db322(0x272)]=![],this[_0x4db322(0x333)]=!![];},Window_Message['prototype'][_0x4ec4b9(0x2e6)]=function(){const _0x34e976=_0x4ec4b9;this[_0x34e976(0x25a)](),this[_0x34e976(0x3d5)](),this[_0x34e976(0x4ba)](),this[_0x34e976(0x217)](),this[_0x34e976(0x49e)]['clear'](),this['createContents']();},Window_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x46d)]=function(_0x1aebbf,_0x44bf31){const _0x1a55b0=_0x4ec4b9;switch(_0x1aebbf[_0x1a55b0(0x34a)]()[_0x1a55b0(0x47b)]()){case _0x1a55b0(0x22d):this['_autoPositionTarget']=$gameActors['actor'](_0x44bf31);break;case'battle\x20party':this[_0x1a55b0(0x444)]=$gameParty['members']()[_0x44bf31-0x1];break;case _0x1a55b0(0x3f2):this[_0x1a55b0(0x444)]=$gameTroop['members']()[_0x44bf31-0x1];break;case _0x1a55b0(0x330):this[_0x1a55b0(0x444)]=$gamePlayer;break;case _0x1a55b0(0x2cd):const _0x369083=$gameActors['actor'](_0x44bf31)[_0x1a55b0(0x28c)]();_0x369083===0x0?this[_0x1a55b0(0x444)]=$gamePlayer:this[_0x1a55b0(0x444)]=$gamePlayer[_0x1a55b0(0x237)]()[_0x1a55b0(0x337)](_0x369083-0x1);break;case _0x1a55b0(0x235):_0x44bf31===0x1?this['_autoPositionTarget']=$gamePlayer:this[_0x1a55b0(0x444)]=$gamePlayer[_0x1a55b0(0x237)]()[_0x1a55b0(0x337)](_0x44bf31-0x2);break;case _0x1a55b0(0x45b):this[_0x1a55b0(0x444)]=$gameMap[_0x1a55b0(0x4b6)](_0x44bf31);break;}this[_0x1a55b0(0x444)]&&this[_0x1a55b0(0x46b)]();},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x473)]=Window_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x4c8)],Window_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x4c8)]=function(){const _0xa79e2e=_0x4ec4b9;this[_0xa79e2e(0x46b)](),VisuMZ[_0xa79e2e(0x33a)][_0xa79e2e(0x473)][_0xa79e2e(0x31d)](this);},Window_Message['prototype'][_0x4ec4b9(0x46b)]=function(){const _0x5587f9=_0x4ec4b9;if(!this[_0x5587f9(0x444)])return;const _0x3abc10=SceneManager['_scene'];if(!_0x3abc10)return;const _0x36bbe1=_0x3abc10[_0x5587f9(0x2b9)];if(!_0x36bbe1)return;const _0x46964d=_0x36bbe1['findTargetSprite'](this[_0x5587f9(0x444)]);if(!_0x46964d)return;let _0x582e3d=_0x46964d['x'];if(SceneManager[_0x5587f9(0x3a9)]())_0x582e3d*=$gameScreen['zoomScale']();else{if(SceneManager[_0x5587f9(0x26e)]()&&Imported['VisuMZ_3_ActSeqCamera']){let _0x3dcc2f=_0x46964d['x']-Graphics['boxWidth']*_0x36bbe1[_0x5587f9(0x3aa)]['x'];_0x582e3d+=_0x3dcc2f*(_0x36bbe1[_0x5587f9(0x374)]['x']-0x1);}}_0x582e3d-=this[_0x5587f9(0x2ed)]/0x2,_0x582e3d-=(Graphics[_0x5587f9(0x2ed)]-Graphics['boxWidth'])/0x2,_0x582e3d+=this['autoPositionOffsetX']();let _0x4c0425=_0x46964d['y'];if(SceneManager[_0x5587f9(0x3a9)]())_0x4c0425-=_0x46964d['height']+0x8,_0x4c0425*=$gameScreen['zoomScale'](),_0x4c0425-=this[_0x5587f9(0x36f)]*$gameScreen[_0x5587f9(0x33f)]();else{if(SceneManager[_0x5587f9(0x26e)]()&&Imported['VisuMZ_3_ActSeqCamera']){let _0x3df87f=_0x46964d[_0x5587f9(0x36f)]*_0x36bbe1['scale']['y'];_0x4c0425-=this[_0x5587f9(0x36f)]*_0x36bbe1[_0x5587f9(0x374)]['y']+_0x3df87f+0x8;let _0x39177a=_0x46964d['y']-Graphics[_0x5587f9(0x498)]*_0x36bbe1[_0x5587f9(0x3aa)]['y'];_0x4c0425+=_0x39177a*(_0x36bbe1['scale']['y']-0x1);}else _0x4c0425-=_0x46964d['height']+0x8,_0x4c0425-=this['height'];}_0x4c0425-=(Graphics['height']-Graphics[_0x5587f9(0x498)])/0x2,_0x4c0425+=this['autoPositionOffsetY']();const _0x4a7b3f=$gameSystem[_0x5587f9(0x329)]();_0x582e3d+=_0x4a7b3f['x'],_0x4c0425+=_0x4a7b3f['y'],this['x']=Math['round'](_0x582e3d),this['y']=Math[_0x5587f9(0x2a3)](_0x4c0425),this['clampPlacementPosition'](!![],![]),this['_forcedPosition']=this[_0x5587f9(0x2e0)]||{},this['_forcedPosition']['x']=this['x'],this[_0x5587f9(0x2e0)]['y']=this['y'],this['_forcedPosition'][_0x5587f9(0x2ed)]=this[_0x5587f9(0x2ed)],this[_0x5587f9(0x2e0)][_0x5587f9(0x36f)]=this[_0x5587f9(0x36f)],this[_0x5587f9(0x2b4)][_0x5587f9(0x3d5)]();},Window_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x32c)]=function(){return 0x0;},Window_Message['prototype']['autoPositionOffsetY']=function(){return 0x0;},Window_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x2fb)]=function(){const _0x5c4ee4=_0x4ec4b9;this[_0x5c4ee4(0x333)]=![],this[_0x5c4ee4(0x444)]=undefined,$gameSystem[_0x5c4ee4(0x363)](),this['updateAutoSizePosition'](),this[_0x5c4ee4(0x275)]=0x0;},Window_Message['prototype'][_0x4ec4b9(0x461)]=function(_0x3729da){const _0x1a09fc=_0x4ec4b9;return Window_Base[_0x1a09fc(0x27c)][_0x1a09fc(0x461)][_0x1a09fc(0x31d)](this,_0x3729da);},Window_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x465)]=function(_0x1a79d2){const _0x53dcee=_0x4ec4b9;return Window_Base[_0x53dcee(0x27c)][_0x53dcee(0x465)][_0x53dcee(0x31d)](this,_0x1a79d2);},Window_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x1fa)]=function(_0x296880){const _0x5269d9=_0x4ec4b9;this[_0x5269d9(0x1f3)](_0x296880),Window_Base[_0x5269d9(0x27c)][_0x5269d9(0x1fa)][_0x5269d9(0x31d)](this,_0x296880),this[_0x5269d9(0x37f)](_0x296880);},Window_Message['prototype'][_0x4ec4b9(0x1f3)]=function(_0x441185){},Window_Message[_0x4ec4b9(0x27c)][_0x4ec4b9(0x37f)]=function(_0x3fb1be){},Window_NameBox[_0x4ec4b9(0x27c)]['isAutoColorAffected']=function(){return![];},Window_NameBox[_0x4ec4b9(0x27c)][_0x4ec4b9(0x418)]=function(){const _0x19b8cc=_0x4ec4b9;Window_Base[_0x19b8cc(0x27c)][_0x19b8cc(0x418)]['call'](this),this[_0x19b8cc(0x231)](this[_0x19b8cc(0x30d)]());},Window_NameBox['prototype']['defaultColor']=function(){const _0x407b3b=_0x4ec4b9,_0xd2e2dc=VisuMZ[_0x407b3b(0x33a)][_0x407b3b(0x1ee)]['General'][_0x407b3b(0x4a5)];return ColorManager[_0x407b3b(0x3b7)](_0xd2e2dc);},VisuMZ['MessageCore'][_0x4ec4b9(0x447)]=Window_NameBox[_0x4ec4b9(0x27c)][_0x4ec4b9(0x3d5)],Window_NameBox[_0x4ec4b9(0x27c)]['updatePlacement']=function(){const _0x32f7de=_0x4ec4b9;VisuMZ[_0x32f7de(0x33a)]['Window_NameBox_updatePlacement']['call'](this),this['updateRelativePosition'](),this[_0x32f7de(0x3a2)](),this[_0x32f7de(0x21a)](),this[_0x32f7de(0x242)]();},Window_NameBox[_0x4ec4b9(0x27c)][_0x4ec4b9(0x461)]=function(_0xd26245){const _0x3de68b=_0x4ec4b9;return _0xd26245=_0xd26245[_0x3de68b(0x3ea)](/<LEFT>/gi,this[_0x3de68b(0x450)]['bind'](this,0x0)),_0xd26245=_0xd26245[_0x3de68b(0x3ea)](/<CENTER>/gi,this[_0x3de68b(0x450)]['bind'](this,0x5)),_0xd26245=_0xd26245[_0x3de68b(0x3ea)](/<RIGHT>/gi,this[_0x3de68b(0x450)]['bind'](this,0xa)),_0xd26245=_0xd26245[_0x3de68b(0x3ea)](/<POSITION:[ ](\d+)>/gi,(_0x3649aa,_0x2b4f5f)=>this[_0x3de68b(0x450)](parseInt(_0x2b4f5f))),_0xd26245=_0xd26245['replace'](/<\/LEFT>/gi,''),_0xd26245=_0xd26245['replace'](/<\/CENTER>/gi,''),_0xd26245=_0xd26245['replace'](/<\/RIGHT>/gi,''),Window_Base[_0x3de68b(0x27c)][_0x3de68b(0x461)][_0x3de68b(0x31d)](this,_0xd26245);},Window_NameBox[_0x4ec4b9(0x27c)]['setRelativePosition']=function(_0x131dd7){const _0x37881b=_0x4ec4b9;return this[_0x37881b(0x256)]=_0x131dd7,'';},Window_NameBox['prototype'][_0x4ec4b9(0x30a)]=function(){const _0x2ac858=_0x4ec4b9;if($gameMessage['isRTL']())return;this['_relativePosition']=this[_0x2ac858(0x256)]||0x0;const _0x48ca0b=this['_messageWindow'],_0x18835e=Math['floor'](_0x48ca0b['width']*this[_0x2ac858(0x256)]/0xa);this['x']=_0x48ca0b['x']+_0x18835e-Math[_0x2ac858(0x26a)](this[_0x2ac858(0x2ed)]/0x2),this['x']=this['x'][_0x2ac858(0x314)](_0x48ca0b['x'],_0x48ca0b['x']+_0x48ca0b[_0x2ac858(0x2ed)]-this[_0x2ac858(0x2ed)]);},Window_NameBox[_0x4ec4b9(0x27c)]['updateOffsetPosition']=function(){const _0x27788f=_0x4ec4b9;if($gameMessage['isRTL']())return;this['_relativePosition']=this[_0x27788f(0x256)]||0x0;const _0x22dc1d=VisuMZ[_0x27788f(0x33a)][_0x27788f(0x1ee)][_0x27788f(0x3fe)][_0x27788f(0x1ec)],_0x8fa5b9=VisuMZ['MessageCore'][_0x27788f(0x1ee)][_0x27788f(0x3fe)][_0x27788f(0x410)],_0x4d64d5=(0x5-this['_relativePosition'])/0x5;this['x']+=Math['floor'](_0x22dc1d*_0x4d64d5),this['y']+=_0x8fa5b9;},Window_NameBox[_0x4ec4b9(0x27c)][_0x4ec4b9(0x242)]=function(){const _0x4c4b3d=_0x4ec4b9,_0x4c9b95=this['_messageWindow'],_0xa9befe=_0x4c9b95['y'],_0x46fab4=VisuMZ[_0x4c4b3d(0x33a)][_0x4c4b3d(0x1ee)][_0x4c4b3d(0x3fe)][_0x4c4b3d(0x410)];_0xa9befe>this['y']&&_0xa9befe<this['y']+this[_0x4c4b3d(0x36f)]-_0x46fab4&&(this['y']=_0x4c9b95['y']+_0x4c9b95[_0x4c4b3d(0x36f)]);},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x4b2)]=Window_NameBox[_0x4ec4b9(0x27c)][_0x4ec4b9(0x29d)],Window_NameBox[_0x4ec4b9(0x27c)]['refresh']=function(){const _0x5a256f=_0x4ec4b9;this[_0x5a256f(0x256)]=0x0,VisuMZ[_0x5a256f(0x33a)]['Window_NameBox_refresh'][_0x5a256f(0x31d)](this);},Window_ChoiceList[_0x4ec4b9(0x27c)][_0x4ec4b9(0x292)]=function(){return![];},Window_ChoiceList[_0x4ec4b9(0x27c)][_0x4ec4b9(0x203)]=function(){return!![];},Window_ChoiceList[_0x4ec4b9(0x27c)][_0x4ec4b9(0x469)]=function(){const _0x3b6f83=_0x4ec4b9;return $gameSystem[_0x3b6f83(0x476)]()+0x8;},Window_ChoiceList[_0x4ec4b9(0x27c)][_0x4ec4b9(0x491)]=function(){return $gameSystem['getChoiceListMaxColumns']();},Window_ChoiceList['prototype']['start']=function(){const _0x279453=_0x4ec4b9;this[_0x279453(0x29d)](),this['selectDefault'](),this['open'](),this['activate']();},Window_ChoiceList[_0x4ec4b9(0x27c)][_0x4ec4b9(0x31c)]=function(){const _0x5ae468=_0x4ec4b9;$gameMessage[_0x5ae468(0x358)](this[_0x5ae468(0x20e)]()),this[_0x5ae468(0x45a)][_0x5ae468(0x2f6)](),this[_0x5ae468(0x206)](),this[_0x5ae468(0x2e5)]&&(this[_0x5ae468(0x2e5)][_0x5ae468(0x49a)](),this[_0x5ae468(0x2e5)][_0x5ae468(0x22a)]());},VisuMZ['MessageCore'][_0x4ec4b9(0x2ae)]=Window_ChoiceList[_0x4ec4b9(0x27c)][_0x4ec4b9(0x429)],Window_ChoiceList[_0x4ec4b9(0x27c)][_0x4ec4b9(0x429)]=function(){const _0x3f79e9=_0x4ec4b9;VisuMZ[_0x3f79e9(0x33a)][_0x3f79e9(0x2ae)][_0x3f79e9(0x31d)](this),this[_0x3f79e9(0x2e5)]&&(this['_helpWindow']['clear'](),this[_0x3f79e9(0x2e5)][_0x3f79e9(0x22a)]());},Window_ChoiceList[_0x4ec4b9(0x27c)][_0x4ec4b9(0x29d)]=function(){const _0x4928c4=_0x4ec4b9;this[_0x4928c4(0x2e4)](),this[_0x4928c4(0x2a4)](),this[_0x4928c4(0x45a)]&&(this[_0x4928c4(0x3d5)](),this[_0x4928c4(0x3c7)]()),this[_0x4928c4(0x22b)](),this['updateBackground'](),this['refreshDimmerBitmap'](),Window_Selectable[_0x4928c4(0x27c)][_0x4928c4(0x29d)][_0x4928c4(0x31d)](this);},Window_ChoiceList[_0x4ec4b9(0x27c)][_0x4ec4b9(0x2a4)]=function(){const _0x21725b=_0x4ec4b9,_0x403054=$gameMessage[_0x21725b(0x43b)]();let _0x22ff8e=0x0;for(let _0x9a0014 of _0x403054){_0x9a0014=this[_0x21725b(0x3be)](_0x9a0014);if(this[_0x21725b(0x26d)](_0x9a0014)){const _0x29149f=this[_0x21725b(0x3e4)](_0x9a0014),_0x46c2d4=this[_0x21725b(0x244)](_0x9a0014);this[_0x21725b(0x21f)](_0x29149f,'choice',_0x46c2d4,_0x22ff8e);}_0x22ff8e++;}this[_0x21725b(0x30c)](),this[_0x21725b(0x210)]();},Window_ChoiceList[_0x4ec4b9(0x27c)]['convertChoiceMacros']=function(_0x546a04){const _0x161b9c=_0x4ec4b9;return Window_Base[_0x161b9c(0x27c)]['convertTextMacros'][_0x161b9c(0x31d)](this,_0x546a04);},Window_ChoiceList[_0x4ec4b9(0x27c)][_0x4ec4b9(0x26d)]=function(_0x329b27){const _0x174f0d=_0x4ec4b9;if(Imported[_0x174f0d(0x36d)])$gameMessage[_0x174f0d(0x1e2)]();if(_0x329b27[_0x174f0d(0x471)](/<HIDE>/i))return![];if(_0x329b27['match'](/<SHOW>/i))return!![];if(_0x329b27['match'](/<SHOW[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x377272=RegExp['$1']['split'](',')[_0x174f0d(0x297)](_0x236807=>Number(_0x236807)||0x0);for(const _0x361000 of _0x377272){if(!$gameSwitches[_0x174f0d(0x3ed)](_0x361000))return![];}return!![];}if(_0x329b27[_0x174f0d(0x471)](/<SHOW ALL[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x460a2f=RegExp['$1'][_0x174f0d(0x1d9)](',')[_0x174f0d(0x297)](_0xf764f=>Number(_0xf764f)||0x0);for(const _0x53cfeb of _0x460a2f){if(!$gameSwitches['value'](_0x53cfeb))return![];}return!![];}if(_0x329b27[_0x174f0d(0x471)](/<SHOW ANY[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x3c5c79=RegExp['$1']['split'](',')[_0x174f0d(0x297)](_0x1e7565=>Number(_0x1e7565)||0x0);for(const _0x13fc56 of _0x3c5c79){if($gameSwitches[_0x174f0d(0x3ed)](_0x13fc56))return!![];}return![];}if(_0x329b27[_0x174f0d(0x471)](/<HIDE[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x41769e=RegExp['$1'][_0x174f0d(0x1d9)](',')[_0x174f0d(0x297)](_0x2ca816=>Number(_0x2ca816)||0x0);for(const _0xbffd71 of _0x41769e){if(!$gameSwitches[_0x174f0d(0x3ed)](_0xbffd71))return!![];}return![];}if(_0x329b27[_0x174f0d(0x471)](/<HIDE ALL[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x19c233=RegExp['$1'][_0x174f0d(0x1d9)](',')[_0x174f0d(0x297)](_0x5ba0b9=>Number(_0x5ba0b9)||0x0);for(const _0x874d2e of _0x19c233){if(!$gameSwitches[_0x174f0d(0x3ed)](_0x874d2e))return!![];}return![];}if(_0x329b27[_0x174f0d(0x471)](/<HIDE ANY[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x24c72f=RegExp['$1'][_0x174f0d(0x1d9)](',')[_0x174f0d(0x297)](_0x20ba3b=>Number(_0x20ba3b)||0x0);for(const _0x494b31 of _0x24c72f){if($gameSwitches['value'](_0x494b31))return![];}return!![];}return!![];},Window_ChoiceList[_0x4ec4b9(0x27c)]['parseChoiceText']=function(_0x393301){const _0x54a2ee=_0x4ec4b9;let _0x40ec24=_0x393301;return _0x40ec24=_0x40ec24['replace'](/<(?:BR|LINEBREAK)>/gi,'\x0a'),_0x40ec24=_0x40ec24[_0x54a2ee(0x3ea)](/<LINE\x1bWrapBreak[0]BREAK>/gi,'\x0a'),_0x40ec24;},Window_ChoiceList[_0x4ec4b9(0x27c)][_0x4ec4b9(0x244)]=function(_0x452c4b){const _0x327c19=_0x4ec4b9;if(Imported[_0x327c19(0x36d)])$gameMessage[_0x327c19(0x1e2)]();if(_0x452c4b[_0x327c19(0x471)](/<DISABLE>/i))return![];if(_0x452c4b[_0x327c19(0x471)](/<ENABLE>/i))return!![];if(_0x452c4b[_0x327c19(0x471)](/<ENABLE[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x4c2373=RegExp['$1'][_0x327c19(0x1d9)](',')[_0x327c19(0x297)](_0x59c187=>Number(_0x59c187)||0x0);for(const _0x289921 of _0x4c2373){if(!$gameSwitches[_0x327c19(0x3ed)](_0x289921))return![];}return!![];}if(_0x452c4b[_0x327c19(0x471)](/<ENABLE ALL[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x2fdd73=RegExp['$1'][_0x327c19(0x1d9)](',')['map'](_0x258456=>Number(_0x258456)||0x0);for(const _0x31fadc of _0x2fdd73){if(!$gameSwitches[_0x327c19(0x3ed)](_0x31fadc))return![];}return!![];}if(_0x452c4b[_0x327c19(0x471)](/<ENABLE ANY[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x120aad=RegExp['$1'][_0x327c19(0x1d9)](',')['map'](_0x53756d=>Number(_0x53756d)||0x0);for(const _0x3d9a3d of _0x120aad){if($gameSwitches[_0x327c19(0x3ed)](_0x3d9a3d))return!![];}return![];}if(_0x452c4b['match'](/<DISABLE[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x15888f=RegExp['$1'][_0x327c19(0x1d9)](',')[_0x327c19(0x297)](_0x2fd643=>Number(_0x2fd643)||0x0);for(const _0x252d85 of _0x15888f){if(!$gameSwitches[_0x327c19(0x3ed)](_0x252d85))return!![];}return![];}if(_0x452c4b[_0x327c19(0x471)](/<DISABLE ALL[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x53bb4b=RegExp['$1']['split'](',')[_0x327c19(0x297)](_0xca2b06=>Number(_0xca2b06)||0x0);for(const _0x384bf9 of _0x53bb4b){if(!$gameSwitches['value'](_0x384bf9))return!![];}return![];}if(_0x452c4b[_0x327c19(0x471)](/<DISABLE ANY[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x4df954=RegExp['$1'][_0x327c19(0x1d9)](',')[_0x327c19(0x297)](_0x267c51=>Number(_0x267c51)||0x0);for(const _0x306791 of _0x4df954){if($gameSwitches[_0x327c19(0x3ed)](_0x306791))return![];}return!![];}return!![];},Window_ChoiceList[_0x4ec4b9(0x27c)][_0x4ec4b9(0x30c)]=function(){const _0x1c6cb3=_0x4ec4b9;this[_0x1c6cb3(0x2d2)]={},this[_0x1c6cb3(0x2e5)]&&(this[_0x1c6cb3(0x2e5)]['clear'](),this[_0x1c6cb3(0x2e5)][_0x1c6cb3(0x22a)]());},Window_ChoiceList[_0x4ec4b9(0x27c)][_0x4ec4b9(0x210)]=function(){const _0x2bf0d7=_0x4ec4b9,_0x504bdf=/<(?:HELP|HELP DESCRIPTION|DESCRIPTION)>\s*([\s\S]*)\s*<\/(?:HELP|HELP DESCRIPTION|DESCRIPTION)>/i;for(const _0x10f988 of this[_0x2bf0d7(0x3f8)]){if(!_0x10f988)continue;const _0x311c1c=this[_0x2bf0d7(0x3f8)][_0x2bf0d7(0x2fc)](_0x10f988);if(_0x10f988['name'][_0x2bf0d7(0x471)](_0x504bdf)){const _0x15202b=String(RegExp['$1']);this[_0x2bf0d7(0x2d2)][_0x311c1c]=_0x15202b[_0x2bf0d7(0x47b)](),_0x10f988[_0x2bf0d7(0x45e)]=_0x10f988[_0x2bf0d7(0x45e)][_0x2bf0d7(0x3ea)](_0x504bdf,'')[_0x2bf0d7(0x47b)]();}else this[_0x2bf0d7(0x2d2)][_0x311c1c]='';}},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x361)]=Window_ChoiceList['prototype']['updatePlacement'],Window_ChoiceList[_0x4ec4b9(0x27c)]['updatePlacement']=function(){const _0x1866c5=_0x4ec4b9;VisuMZ['MessageCore']['Window_ChoiceList_updatePlacement'][_0x1866c5(0x31d)](this),this[_0x1866c5(0x21a)]();},Window_ChoiceList[_0x4ec4b9(0x27c)][_0x4ec4b9(0x3c7)]=function(){const _0x2cb89c=_0x4ec4b9;if(!this['_cancelButton'])return;const _0x2276cf=0x8,_0x3958a8=this[_0x2cb89c(0x33d)],_0x89fa6e=this['x']+this[_0x2cb89c(0x2ed)],_0x2f1052=Math[_0x2cb89c(0x26a)]((Graphics['width']-Graphics['boxWidth'])/0x2);_0x89fa6e>=Graphics[_0x2cb89c(0x1ff)]+_0x2f1052-_0x3958a8[_0x2cb89c(0x2ed)]+_0x2276cf?_0x3958a8['x']=-_0x3958a8[_0x2cb89c(0x2ed)]-_0x2276cf:_0x3958a8['x']=this[_0x2cb89c(0x2ed)]+_0x2276cf,_0x3958a8['y']=this[_0x2cb89c(0x36f)]/0x2-_0x3958a8['height']/0x2;},VisuMZ[_0x4ec4b9(0x33a)]['Window_ChoiceList_windowX']=Window_ChoiceList[_0x4ec4b9(0x27c)][_0x4ec4b9(0x39e)],Window_ChoiceList[_0x4ec4b9(0x27c)]['windowX']=function(){const _0xe41178=_0x4ec4b9;return this[_0xe41178(0x45a)]?this[_0xe41178(0x345)]():VisuMZ[_0xe41178(0x33a)][_0xe41178(0x3e9)][_0xe41178(0x31d)](this);},Window_ChoiceList[_0x4ec4b9(0x27c)][_0x4ec4b9(0x345)]=function(){const _0x4e8ad1=_0x4ec4b9,_0x3a3bb5=$gameMessage[_0x4e8ad1(0x353)]();if(_0x3a3bb5===0x1)return(Graphics[_0x4e8ad1(0x1ff)]-this['windowWidth']())/0x2;else return _0x3a3bb5===0x2?this[_0x4e8ad1(0x45a)]['x']+this[_0x4e8ad1(0x45a)][_0x4e8ad1(0x2ed)]-this[_0x4e8ad1(0x37b)]():this[_0x4e8ad1(0x45a)]['x'];},Window_ChoiceList['prototype']['windowWidth']=function(){const _0x311cdc=_0x4ec4b9,_0x3fc58a=(this['maxChoiceWidth']()+this[_0x311cdc(0x315)]())*this['maxCols']()+this['padding']*0x2;return Math[_0x311cdc(0x25d)](_0x3fc58a,Graphics['width']);},Window_ChoiceList[_0x4ec4b9(0x27c)]['numVisibleRows']=function(){const _0x412d81=_0x4ec4b9,_0x24e282=$gameMessage[_0x412d81(0x43b)]()[_0x412d81(0x297)](_0x4809dd=>this[_0x412d81(0x3be)](_0x4809dd))[_0x412d81(0x2f3)](_0x3907ac=>this[_0x412d81(0x26d)](_0x3907ac)),_0x43271d=Math['ceil'](_0x24e282['length']/this[_0x412d81(0x491)]());return Math[_0x412d81(0x22e)](0x1,Math[_0x412d81(0x25d)](_0x43271d,this[_0x412d81(0x3bf)]()));},Window_ChoiceList[_0x4ec4b9(0x27c)][_0x4ec4b9(0x3bf)]=function(){const _0x3c0a4d=_0x4ec4b9,_0x32f0cd=this[_0x3c0a4d(0x45a)],_0x31eab0=_0x32f0cd?_0x32f0cd['y']:0x0,_0x3117e9=_0x32f0cd?_0x32f0cd['height']:0x0,_0x72bdc8=Graphics[_0x3c0a4d(0x498)]/0x2;return _0x31eab0<_0x72bdc8&&_0x31eab0+_0x3117e9>_0x72bdc8?0x4:$gameSystem[_0x3c0a4d(0x372)]();},Window_ChoiceList[_0x4ec4b9(0x27c)]['maxChoiceWidth']=function(){const _0x38b2be=_0x4ec4b9;let _0x12f466=this[_0x38b2be(0x3e1)]();for(const _0x5c8fd6 of this[_0x38b2be(0x3f8)]){const _0x3341cd=_0x5c8fd6['name'],_0x8b910c=this[_0x38b2be(0x2f1)](_0x3341cd),_0x1a14fc=this[_0x38b2be(0x26c)](_0x3341cd)['width']+_0x8b910c,_0x131f6b=Math[_0x38b2be(0x2e9)](_0x1a14fc)+this['itemPadding']()*0x2;_0x12f466=Math[_0x38b2be(0x22e)](_0x12f466,_0x131f6b);}return _0x12f466;},Window_ChoiceList[_0x4ec4b9(0x27c)][_0x4ec4b9(0x3e1)]=function(){const _0x5aa76a=_0x4ec4b9;let _0x5283f8=0x60;const _0x4d236c=$gameMessage[_0x5aa76a(0x43b)]();for(const _0x40b5ab of _0x4d236c){_0x40b5ab[_0x5aa76a(0x471)](/<CHOICE WIDTH:[ ](\d+)>/gi)&&(_0x5283f8=Math[_0x5aa76a(0x22e)](_0x5283f8,Number(RegExp['$1'])));}return _0x5283f8;},Window_ChoiceList['prototype'][_0x4ec4b9(0x4be)]=function(_0x4462ce){const _0x4c97c1=_0x4ec4b9,_0x577439=this[_0x4c97c1(0x1e7)](_0x4462ce),_0x593374=$gameSystem['getChoiceListTextAlign']()!=='default'?'<%1>'[_0x4c97c1(0x264)]($gameSystem['getChoiceListTextAlign']()):'',_0xf41d03=_0x593374+this[_0x4c97c1(0x27e)](_0x4462ce);this[_0x4c97c1(0x228)](this[_0x4c97c1(0x46e)](_0x4462ce));const _0x3892d7=this[_0x4c97c1(0x26c)](_0xf41d03)['height'],_0x2c4b94=_0x577439['x']+this[_0x4c97c1(0x2f1)](_0xf41d03),_0x2c9328=Math[_0x4c97c1(0x22e)](_0x577439['y'],_0x577439['y']+Math['round']((_0x577439['height']-_0x3892d7)/0x2));this[_0x4c97c1(0x373)](_0xf41d03,_0x2c4b94,_0x2c9328,_0x577439[_0x4c97c1(0x2ed)]),this[_0x4c97c1(0x351)](_0x4462ce);},Window_ChoiceList[_0x4ec4b9(0x27c)]['getChoiceIndent']=function(_0x497997){const _0x4e1b4f=_0x4ec4b9;let _0x325337=0x0;return _0x497997[_0x4e1b4f(0x471)](/<CHOICE INDENT:[ ](\d+)>/gi)&&(_0x325337=Number(RegExp['$1'])),_0x325337;},Window_ChoiceList['prototype'][_0x4ec4b9(0x351)]=function(_0x3c65e8){const _0x34ffbe=_0x4ec4b9;if(!Imported['VisuMZ_0_CoreEngine'])return;const _0x17553f=this[_0x34ffbe(0x27e)](_0x3c65e8);let _0x16d4b1=![],_0x4512fe=![],_0x5361c1=ColorManager[_0x34ffbe(0x487)](),_0x59d708=ColorManager[_0x34ffbe(0x25e)]();if(_0x17553f[_0x34ffbe(0x471)](/<(?:BGCOLOR|BG COLOR):[ ](.*?),(.*?)>/gi))_0x5361c1=ColorManager[_0x34ffbe(0x488)](RegExp['$1'])[_0x34ffbe(0x47b)](),_0x59d708=ColorManager[_0x34ffbe(0x488)](RegExp['$2'])[_0x34ffbe(0x47b)](),_0x16d4b1=!![];else{if(_0x17553f[_0x34ffbe(0x471)](/<(?:BGCOLOR|BG COLOR):[ ](.*?)>/gi)){let _0x350ca0=String(RegExp['$1'])['toLowerCase']()[_0x34ffbe(0x47b)]();switch(_0x350ca0){case _0x34ffbe(0x2d5):_0x5361c1=_0x59d708='#f26c4f',_0x4512fe=!![];break;case _0x34ffbe(0x288):_0x5361c1=_0x59d708=_0x34ffbe(0x26f),_0x4512fe=!![];break;case _0x34ffbe(0x364):_0x5361c1=_0x59d708=_0x34ffbe(0x247),_0x4512fe=!![];break;case _0x34ffbe(0x4c1):_0x5361c1=_0x59d708='#7cc576',_0x4512fe=!![];break;case _0x34ffbe(0x464):_0x5361c1=_0x59d708=_0x34ffbe(0x453),_0x4512fe=!![];break;case'purple':case _0x34ffbe(0x32f):_0x5361c1=_0x59d708=_0x34ffbe(0x270),_0x4512fe=!![];break;case'brown':_0x5361c1=_0x59d708=_0x34ffbe(0x205),_0x4512fe=!![];break;case'pink':_0x5361c1=_0x59d708=_0x34ffbe(0x34b),_0x4512fe=!![];break;case'white':_0x5361c1=_0x59d708=_0x34ffbe(0x404),_0x4512fe=!![];break;case _0x34ffbe(0x37c):case _0x34ffbe(0x331):_0x5361c1=_0x59d708=_0x34ffbe(0x213),_0x4512fe=!![];break;case _0x34ffbe(0x1e5):_0x5361c1=_0x59d708=_0x34ffbe(0x468),_0x4512fe=!![];break;case _0x34ffbe(0x443):_0x5361c1=_0x59d708=ColorManager[_0x34ffbe(0x20d)](),_0x4512fe=!![];break;case'no':_0x5361c1=_0x59d708=ColorManager[_0x34ffbe(0x3c8)](),_0x4512fe=!![];break;case _0x34ffbe(0x4c0):_0x5361c1=_0x59d708=ColorManager[_0x34ffbe(0x428)](),_0x4512fe=!![];break;case _0x34ffbe(0x1e6):_0x5361c1=_0x59d708=ColorManager[_0x34ffbe(0x3f6)](),_0x4512fe=!![];break;default:_0x5361c1=_0x59d708=ColorManager[_0x34ffbe(0x488)](_0x350ca0),_0x4512fe=!![];break;}_0x16d4b1=!![];}}if(!_0x16d4b1)return;const _0x2237a0=this[_0x34ffbe(0x479)](_0x3c65e8);this['contentsBack'][_0x34ffbe(0x457)](_0x2237a0['x'],_0x2237a0['y'],_0x2237a0[_0x34ffbe(0x2ed)],_0x2237a0[_0x34ffbe(0x36f)]),this[_0x34ffbe(0x3fb)](_0x2237a0,_0x5361c1,_0x59d708,_0x4512fe);},Window_ChoiceList[_0x4ec4b9(0x27c)]['drawCustomBackgroundColor']=function(_0x57adba,_0x1f7c1a,_0x4ac375,_0x1bdc84){const _0x3c3f52=_0x4ec4b9,_0x55797e=ColorManager[_0x3c3f52(0x487)](),_0x3ba199=ColorManager[_0x3c3f52(0x466)](),_0x21345d=_0x1f7c1a??ColorManager[_0x3c3f52(0x487)](),_0x2da300=_0x4ac375??_0x1f7c1a,_0x39c1c0=_0x57adba['x'],_0x31b0c3=_0x57adba['y'],_0x2c790c=_0x57adba[_0x3c3f52(0x2ed)],_0x330850=_0x57adba[_0x3c3f52(0x36f)];this[_0x3c3f52(0x35d)]['gradientFillRect'](_0x39c1c0,_0x31b0c3,_0x2c790c,_0x330850,_0x21345d,_0x2da300,!![]),_0x1bdc84&&this[_0x3c3f52(0x35d)]['gradientFillRect'](_0x39c1c0,_0x31b0c3,_0x2c790c,_0x330850,_0x55797e,_0x2da300,!![]),this['contentsBack'][_0x3c3f52(0x441)](_0x39c1c0,_0x31b0c3,_0x2c790c,_0x330850,_0x55797e);},Window_ChoiceList[_0x4ec4b9(0x27c)]['updateHelp']=function(){const _0x5753f0=_0x4ec4b9;this[_0x5753f0(0x2e5)][_0x5753f0(0x49a)]();if(!this[_0x5753f0(0x2d2)])return;const _0x22cd7d=this['index']();this[_0x5753f0(0x2d2)][_0x22cd7d]?(this[_0x5753f0(0x2e5)]['setText'](this[_0x5753f0(0x2d2)][_0x22cd7d]),this['_helpWindow'][_0x5753f0(0x26b)]()):(this[_0x5753f0(0x2e5)]['clear'](),this[_0x5753f0(0x2e5)][_0x5753f0(0x22a)]());},Window_EventItem['prototype']['makeItemList']=function(){const _0x3c9254=_0x4ec4b9,_0x3c54b4=$gameMessage[_0x3c9254(0x2e2)]();_0x3c54b4===_0x3c9254(0x222)&&Imported[_0x3c9254(0x2ac)]?this[_0x3c9254(0x311)]():Window_ItemList[_0x3c9254(0x27c)][_0x3c9254(0x2da)][_0x3c9254(0x31d)](this);},Window_EventItem[_0x4ec4b9(0x27c)][_0x4ec4b9(0x311)]=function(){const _0x11cfb3=_0x4ec4b9,_0x336fac=$gameMessage['itemChoiceActor']();this[_0x11cfb3(0x3ba)]=_0x336fac?_0x336fac[_0x11cfb3(0x389)]()[_0x11cfb3(0x2f3)](_0x17873c=>this[_0x11cfb3(0x37d)](_0x17873c)):[],this[_0x11cfb3(0x37d)](null)&&this[_0x11cfb3(0x3ba)]['push'](null);},VisuMZ['MessageCore'][_0x4ec4b9(0x3ad)]=Window_EventItem[_0x4ec4b9(0x27c)][_0x4ec4b9(0x37d)],Window_EventItem[_0x4ec4b9(0x27c)][_0x4ec4b9(0x37d)]=function(_0x1ce822){const _0x2484b4=_0x4ec4b9,_0x42ce50=$gameMessage['itemChoiceItypeId']();if(_0x42ce50==='weapon'){if(!DataManager[_0x2484b4(0x248)](_0x1ce822))return![];const _0x5479c9=$gameMessage['itemChoiceWtypeId']();if(_0x5479c9>0x0){if(_0x1ce822[_0x2484b4(0x422)]!==_0x5479c9)return![];}return!![];}else{if(_0x42ce50===_0x2484b4(0x42f)){if(!DataManager[_0x2484b4(0x4af)](_0x1ce822))return![];const _0x58ad80=$gameMessage[_0x2484b4(0x4b7)]();if(_0x58ad80>0x0){if(_0x1ce822[_0x2484b4(0x27b)]!==_0x58ad80)return![];}const _0x5c8510=$gameMessage[_0x2484b4(0x271)]();if(_0x5c8510>0x0){if(_0x1ce822[_0x2484b4(0x1f2)]!==_0x5c8510)return![];}return!![];}else{if(_0x42ce50===_0x2484b4(0x222)){if(!DataManager[_0x2484b4(0x2de)](_0x1ce822))return![];const _0x3e3ab5=$gameMessage[_0x2484b4(0x44a)]();if(_0x3e3ab5[_0x2484b4(0x23e)](_0x1ce822))return![];if(!_0x3e3ab5[_0x2484b4(0x4bd)](_0x1ce822))return![];const _0x442563=$gameMessage['itemChoiceStypeId']();if(_0x442563>0x0){const _0x4226c4=DataManager[_0x2484b4(0x42b)](_0x1ce822);if(!_0x4226c4[_0x2484b4(0x37d)](_0x442563))return![];}return!![];}else return VisuMZ['MessageCore'][_0x2484b4(0x3ad)][_0x2484b4(0x31d)](this,_0x1ce822);}}},VisuMZ[_0x4ec4b9(0x33a)][_0x4ec4b9(0x3bc)]=Window_ItemList[_0x4ec4b9(0x27c)][_0x4ec4b9(0x392)],Window_ItemList[_0x4ec4b9(0x27c)][_0x4ec4b9(0x392)]=function(_0x579719,_0xb6e844,_0x207d14,_0x3bbe3d){const _0xa3b18f=_0x4ec4b9,_0x432b7a=$gameMessage['itemChoiceItypeId']();if(_0x432b7a===_0xa3b18f(0x222)){const _0x337375=$gameMessage['itemChoiceActor']();this[_0xa3b18f(0x4a9)](_0x337375,_0x579719,_0xb6e844,_0x207d14,_0x3bbe3d);}else VisuMZ[_0xa3b18f(0x33a)][_0xa3b18f(0x3bc)]['call'](this,_0x579719,_0xb6e844,_0x207d14,_0x3bbe3d);};