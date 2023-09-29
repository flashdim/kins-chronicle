//=============================================================================
// VisuStella MZ - Gab Window
// VisuMZ_4_GabWindow.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_GabWindow = true;

var VisuMZ = VisuMZ || {};
VisuMZ.GabWindow = VisuMZ.GabWindow || {};
VisuMZ.GabWindow.version = 1.03;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.03] [GabWindow]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Gab_Window_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Sometimes there's random jibber jabber that does not warrant a message box.
 * The Gab Window fulfills that jibber jabber by placing such text outside of
 * the message window box and at the corner of the screen. The gab text will
 * appear briefly and then disappear, not showing up again until the gab text
 * is updated with something else.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Create gab text that does not interrupt gameplay.
 * * Gabs can be queued together to create a streamlined conversation.
 * * Gabs can play sound effects when played, allowing you to attach voices to
 *   them if desired.
 * * Multiple lines can be used per gab to display more text.
 * * Attach faces, map sprites, sideview sprites, and even pictures to gabs.
 * * Gabs can be automatically positioned above specific events, actors, and
 *   even enemies.
 * * Turn on switches after a gab is completed.
 * * Run custom JavaScript code upon displaying or finish a gab.
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
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 * 
 * === Gab Plugin Commands ===
 *
 * ---
 *
 * Gab: Text Only
 * - Show a Gab Window with the specified settings.
 *
 *   Text:
 *   - The text to be shown in the Gab Window.
 *
 *   Force Gab?:
 *   - Forced gabs will clear other gabs and display immediately.
 *
 *   Optional Settings:
 *   - Change the settings you want to override with this gab.
 *     Blank settings will use default Plugin Parameter settings.
 *
 * ---
 *
 * Gab: Gab: Text + Face (Any)
 * - Show a Gab Window with the specified settings.
 * - Any face graphic can be displayed next to text.
 *
 *   Text:
 *   - The text to be shown in the Gab Window.
 *
 *   Filename:
 *   - The filename of the face graphic to use.
 *
 *   Index:
 *   - This is the index of the face graphic.
 *   - Index values start at 0.
 *
 *   Force Gab?:
 *   - Forced gabs will clear other gabs and display immediately.
 *
 *   Optional Settings:
 *   - Change the settings you want to override with this gab.
 *     Blank settings will use default Plugin Parameter settings.
 *
 * ---
 *
 * Gab: Text + Face (Actor)
 * - Show a Gab Window with the specified settings.
 * - Pick an actor's face graphic to show with it.
 *
 *   Text:
 *   - The text to be shown in the Gab Window.
 *
 *   Actor ID:
 *   - This is the ID of the actor you want the face graphic of.
 *
 *   Force Gab?:
 *   - Forced gabs will clear other gabs and display immediately.
 *
 *   Optional Settings:
 *   - Change the settings you want to override with this gab.
 *     Blank settings will use default Plugin Parameter settings.
 *
 * ---
 *
 * Gab: Text + Face (Party)
 * - Show a Gab Window with the specified settings.
 * - Pick a party member's face graphic to show with it.
 *
 *   Text:
 *   - The text to be shown in the Gab Window.
 *
 *   Party Member Index:
 *   - This is the index of the party member you want the face graphic of.
 *   - Index values start at 0.
 *
 *   Force Gab?:
 *   - Forced gabs will clear other gabs and display immediately.
 *
 *   Optional Settings:
 *   - Change the settings you want to override with this gab.
 *     Blank settings will use default Plugin Parameter settings.
 *
 * ---
 *
 * Gab: Text + Map Sprite (Any)
 * - Show a Gab Window with the specified settings.
 * - Any map sprite can be displayed next to text.
 *
 *   Text:
 *   - The text to be shown in the Gab Window.
 *
 *   Filename:
 *   - The filename of the sprite graphic to use.
 *
 *   Index:
 *   - This is the index of the sprite graphic.
 *   - Index values start at 0.
 *
 *   Force Gab?:
 *   - Forced gabs will clear other gabs and display immediately.
 *
 *   Optional Settings:
 *   - Change the settings you want to override with this gab.
 *     Blank settings will use default Plugin Parameter settings.
 *
 * ---
 *
 * Gab: Text + Map Sprite (Actor)
 * - Show a Gab Window with the specified settings.
 * - Pick an actor's sprite graphic to show with it.
 *
 *   Text:
 *   - The text to be shown in the Gab Window.
 *
 *   Actor ID:
 *   - This is the ID of the actor you want the map sprite of.
 *
 *   Force Gab?:
 *   - Forced gabs will clear other gabs and display immediately.
 *
 *   Optional Settings:
 *   - Change the settings you want to override with this gab.
 *     Blank settings will use default Plugin Parameter settings.
 *
 * ---
 *
 * Gab: Text + Map Sprite (Party)
 * - Show a Gab Window with the specified settings.
 * - Pick a party member's sprite graphic to show with it.
 *
 *   Text:
 *   - The text to be shown in the Gab Window.
 *
 *   Party Member Index:
 *   - This is the index of the party member you want the map sprite of.
 *   - Index values start at 0.
 *
 *   Force Gab?:
 *   - Forced gabs will clear other gabs and display immediately.
 *
 *   Optional Settings:
 *   - Change the settings you want to override with this gab.
 *     Blank settings will use default Plugin Parameter settings.
 *
 * ---
 *
 * Gab: Text + Sideview Actor (Any)
 * - Show a Gab Window with the specified settings.
 * - Any Sideview Actor can be displayed next to text.
 *
 *   Text:
 *   - The text to be shown in the Gab Window.
 *
 *   Filename:
 *   - The filename of the Sideview Actor graphic to use.
 *
 *   Force Gab?:
 *   - Forced gabs will clear other gabs and display immediately.
 *
 *   Optional Settings:
 *   - Change the settings you want to override with this gab.
 *     Blank settings will use default Plugin Parameter settings.
 *
 * ---
 *
 * Gab: Text + Sideview Actor (Actor)
 * - Show a Gab Window with the specified settings.
 * - Pick an actor's sideview graphic to show with it.
 *
 *   Text:
 *   - The text to be shown in the Gab Window.
 *
 *   Actor ID:
 *   - This is the ID of the actor you want the sideview graphic of.
 *
 *   Force Gab?:
 *   - Forced gabs will clear other gabs and display immediately.
 *
 *   Optional Settings:
 *   - Change the settings you want to override with this gab.
 *     Blank settings will use default Plugin Parameter settings.
 *
 * ---
 *
 * Gab: Text + Sideview Actor (Party)
 * - Show a Gab Window with the specified settings.
 * - Pick a party member's sideview graphic to show with it.
 *
 *   Text:
 *   - The text to be shown in the Gab Window.
 *
 *   Party Member Index:
 *   - This is the index of the party member you want the sideview graphic of.
 *   - Index values start at 0.
 *
 *   Force Gab?:
 *   - Forced gabs will clear other gabs and display immediately.
 *
 *   Optional Settings:
 *   - Change the settings you want to override with this gab.
 *     Blank settings will use default Plugin Parameter settings.
 *
 * ---
 *
 * Gab: Text + Picture
 * - Show a Gab Window with the specified settings.
 * - Any picture graphic can be displayed next to text.
 *
 *   Text:
 *   - The text to be shown in the Gab Window.
 *
 *   Filename:
 *   - The filename of the face graphic to use.
 *
 *   Stretch Picture:
 *   - Stretch the picture to fit the window?
 *
 *   Force Gab?:
 *   - Forced gabs will clear other gabs and display immediately.
 *
 *   Optional Settings:
 *   - Change the settings you want to override with this gab.
 *     Blank settings will use default Plugin Parameter settings.
 *
 * ---
 * 
 * === Optional Settings ===
 * 
 * These settings appear in the above Gab Plugin Commands. Opening up the
 * Optional Settings will yield the following:
 * 
 * ---
 *
 * DimColor
 * 
 *   Dim Color 1:
 *   Dim Color 2:
 *   - The dim colors to use for this Gab Window.
 *   - Format: rgba(red, green, blue, alpha)
 *
 * ---
 *
 * Fade
 * 
 *   Fade Rate:
 *   - How fast this Gab Window fades away.
 * 
 *   Fade Direction:
 *   - The direction this Gab Window fades out in.
 *
 * ---
 *
 * Font
 * 
 *   Font Name:
 *   - The font name to use for this Gab Window.
 * 
 *   Font Size:
 *   - The font size to use for this Gab Window.
 *
 * ---
 *
 * Position
 * 
 *   Y Location:
 *   - The Y coordinate this Gab Window will appear in.
 *   - Ignore if you are using a locked sprite position.
 * 
 *   Actor ID:
 *   - The ID of the actor to display this Gab Window above.
 *   - For Map/Battle. 
 * 
 *   Party Index:
 *   - Index of the party member to display Gab Window above.
 *   - For Map/Battle. Index values start at 0. Ignore under 0.
 * 
 *   Enemy Index:
 *   - Index of an enemy battler to display Gab Window above.
 *   - Battle only. Index values start at 0. Ignore under 0.
 * 
 *   Event ID:
 *   - The ID of the event to display this Gab Window above.
 *   - Map only.
 *
 * ---
 *
 * On Display
 * 
 *   Bypass Anti-Repeat:
 *   - Allows this gab to bypass the Anti-Repeat settings.
 * 
 *   Sound Filename:
 *   - The filename of the SE to play when the Gab Window shows.
 * 
 *   JS: On Display:
 *   - Runs this code once this Gab Window shows up.
 *
 * ---
 *
 * On Finish
 * 
 *   Gab Switch:
 *   - The specified switch will be turned ON when the Gab Window finishes.
 * 
 *   JS: On Finish:
 *   - Runs this code once this Gab Window finishes.
 *
 * ---
 *
 * Waiting
 * 
 *   Wait Time:
 *   - The number of frames this Gab Window stays visible.
 * 
 *   Time Per Character:
 *   - Frames added per Text Character in this Gab Window.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Clear Gabs
 * - Clears out the current Gab and any which are queued.
 *
 * ---
 *
 * System: Wait For Gab Completion
 * - Causes the game to wait until all gabs are finished playing.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General settings regarding the Gab Window.
 *
 * ---
 *
 * General
 * 
 *   Anti-Repeat:
 *   - Stops gabs of the same settings from being queued.
 * 
 *   Center Graphics:
 *   - Centers graphics vertically if there are multiple lines.
 *
 * ---
 *
 * Fade
 * 
 *   Fade Rate:
 *   - How fast the gab window fades away.
 * 
 *   Fade Direction:
 *   - The direction to move the window in when fading out.
 *
 * ---
 *
 * Font
 * 
 *   Gab Font Name:
 *   - The font name used for the text of the Gab Window
 *   - Leave empty to use the default game's font.
 * 
 *   Gab Font Size:
 *   - The font size used for the text of the Gab Window.
 *   - Default: 28
 *
 * ---
 *
 * Sprites > Character Sprites
 * 
 *   X Position:
 *   - X position of the character.
 * 
 *   Y Position:
 *   - Y position of the character.
 *
 * ---
 *
 * Sprites > Sideview Sprites
 * 
 *   X Position:
 *   - X position of the Sideview Actor.
 * 
 *   Y Position:
 *   - Y position of the Sideview Actor.
 *
 * ---
 *
 * Waiting
 * 
 *   Base Wait Time:
 *   - Minimum frames the Gab Window stays visible.
 *   - Default: 90
 * 
 *   Time Per Character:
 *   - Frames added per Text Character.
 *   - Default: 4
 *
 * ---
 * 
 * JavaScript
 * 
 *   JS: On Display:
 *   - Runs this code once this Gab Window shows up.
 *   - This applies to every single gab.
 * 
 *   JS: On Finish:
 *   - Runs this code once this Gab Window finishes.
 *   - This applies to every single gab.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Map Settings
 * ============================================================================
 *
 * Settings related to the gab window while in the map scene.
 *
 * ---
 *
 * Map
 * 
 *   Y Location:
 *   - This is the Y location of the Gab Window.
 * 
 *   Dim Color 1:
 *   Dim Color 2:
 *   - These are the dim colors used for maps.
 *   - Format: rgba(red, green, blue, alpha)
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Battle Settings
 * ============================================================================
 *
 * Settings related to the gab window while in the battle scene.
 *
 * ---
 *
 * Battle
 * 
 *   Y Location:
 *   - This is the Y location of the Gab Window.
 * 
 *   Dim Color 1:
 *   Dim Color 2:
 *   - These are the dim colors used for battles.
 *   - Format: rgba(red, green, blue, alpha)
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
 * Version 1.03: February 10, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.02: January 1, 2021
 * * Feature Update!
 * ** Changed how graphics are loaded into the gabs to make them more reliable.
 *    Update made by Yanfly.
 * 
 * Version 1.01: September 27, 2020
 * * Bug Fixes!
 * ** Using actor specific gab window settings during battle should no longer
 *    cause crashes. Fix made by Yanfly.
 * ** Gab Window now scales the whole screen width. Fix made by Irina.
 *
 * Version 1.00: September 10, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GabTextOnly
 * @text Gab: Text Only
 * @desc Show a Gab Window with the specified settings.
 * Only text is displayed.
 * 
 * @arg Text:json
 * @text Text
 * @type note
 * @desc The text to be shown in the Gab Window.
 * @default "Hello!"
 * 
 * @arg ForceGab:eval
 * @text Force Gab?
 * @type boolean
 * @on Force this Gab
 * @off Queue this Gab
 * @desc Forced gabs will clear other gabs and display immediately.
 * @default false
 *
 * @arg Override:struct
 * @text Optional Settings
 * @type struct<Override>
 * @desc Change the settings you want to override with this gab.
 * Blank settings will use default Plugin Parameter settings.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GabTextFaceAny
 * @text Gab: Text + Face (Any)
 * @desc Show a Gab Window with the specified settings.
 * Any face graphic can be displayed next to text.
 * 
 * @arg Text:json
 * @text Text
 * @type note
 * @desc The text to be shown in the Gab Window.
 * @default "Hello!"
 * 
 * @arg Filename:str
 * @text Filename
 * @type file
 * @dir img/faces/
 * @desc The filename of the face graphic to use.
 * @default Actor1
 * 
 * @arg ID:num
 * @text Index
 * @parent Filename:str
 * @type number
 * @desc This is the index of the face graphic.
 * Index values start at 0.
 * @default 0
 * 
 * @arg ForceGab:eval
 * @text Force Gab?
 * @type boolean
 * @on Force this Gab
 * @off Queue this Gab
 * @desc Forced gabs will clear other gabs and display immediately.
 * @default false
 *
 * @arg Override:struct
 * @text Optional Settings
 * @type struct<Override>
 * @desc Change the settings you want to override with this gab.
 * Blank settings will use default Plugin Parameter settings.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GabTextFaceActor
 * @text Gab: Text + Face (Actor)
 * @desc Show a Gab Window with the specified settings.
 * Pick an actor's face graphic to show with it.
 * 
 * @arg Text:json
 * @text Text
 * @type note
 * @desc The text to be shown in the Gab Window.
 * @default "Hello!"
 * 
 * @arg ID:num
 * @text Actor ID
 * @type actor
 * @desc This is the ID of the actor you want the face graphic of.
 * @default 1
 * 
 * @arg ForceGab:eval
 * @text Force Gab?
 * @type boolean
 * @on Force this Gab
 * @off Queue this Gab
 * @desc Forced gabs will clear other gabs and display immediately.
 * @default false
 *
 * @arg Override:struct
 * @text Optional Settings
 * @type struct<Override>
 * @desc Change the settings you want to override with this gab.
 * Blank settings will use default Plugin Parameter settings.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GabTextFaceParty
 * @text Gab: Text + Face (Party)
 * @desc Show a Gab Window with the specified settings.
 * Pick a party member's face graphic to show with it.
 * 
 * @arg Text:json
 * @text Text
 * @type note
 * @desc The text to be shown in the Gab Window.
 * @default "Hello!"
 * 
 * @arg ID:num
 * @text Party Member Index
 * @type number
 * @desc This is the index of the party member you want the face
 * graphic of. Index values start at 0.
 * @default 0
 * 
 * @arg ForceGab:eval
 * @text Force Gab?
 * @type boolean
 * @on Force this Gab
 * @off Queue this Gab
 * @desc Forced gabs will clear other gabs and display immediately.
 * @default false
 *
 * @arg Override:struct
 * @text Optional Settings
 * @type struct<Override>
 * @desc Change the settings you want to override with this gab.
 * Blank settings will use default Plugin Parameter settings.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GabTextSpriteAny
 * @text Gab: Text + Map Sprite (Any)
 * @desc Show a Gab Window with the specified settings.
 * Any map sprite can be displayed next to text.
 * 
 * @arg Text:json
 * @text Text
 * @type note
 * @desc The text to be shown in the Gab Window.
 * @default "Hello!"
 * 
 * @arg Filename:str
 * @text Filename
 * @type file
 * @dir img/characters/
 * @desc The filename of the sprite graphic to use.
 * @default Actor1
 * 
 * @arg ID:num
 * @text Index
 * @parent Filename:str
 * @type number
 * @desc This is the index of the sprite graphic.
 * Index values start at 0.
 * @default 0
 * 
 * @arg ForceGab:eval
 * @text Force Gab?
 * @type boolean
 * @on Force this Gab
 * @off Queue this Gab
 * @desc Forced gabs will clear other gabs and display immediately.
 * @default false
 *
 * @arg Override:struct
 * @text Optional Settings
 * @type struct<Override>
 * @desc Change the settings you want to override with this gab.
 * Blank settings will use default Plugin Parameter settings.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GabTextSpriteActor
 * @text Gab: Text + Map Sprite (Actor)
 * @desc Show a Gab Window with the specified settings.
 * Pick an actor's sprite graphic to show with it.
 * 
 * @arg Text:json
 * @text Text
 * @type note
 * @desc The text to be shown in the Gab Window.
 * @default "Hello!"
 * 
 * @arg ID:num
 * @text Actor ID
 * @type actor
 * @desc This is the ID of the actor you want the map sprite of.
 * @default 1
 * 
 * @arg ForceGab:eval
 * @text Force Gab?
 * @type boolean
 * @on Force this Gab
 * @off Queue this Gab
 * @desc Forced gabs will clear other gabs and display immediately.
 * @default false
 *
 * @arg Override:struct
 * @text Optional Settings
 * @type struct<Override>
 * @desc Change the settings you want to override with this gab.
 * Blank settings will use default Plugin Parameter settings.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GabTextSpriteParty
 * @text Gab: Text + Map Sprite (Party)
 * @desc Show a Gab Window with the specified settings.
 * Pick a party member's sprite graphic to show with it.
 * 
 * @arg Text:json
 * @text Text
 * @type note
 * @desc The text to be shown in the Gab Window.
 * @default "Hello!"
 * 
 * @arg ID:num
 * @text Party Member Index
 * @type number
 * @desc This is the index of the party member you want the map
 * sprite of. Index values start at 0.
 * @default 0
 * 
 * @arg ForceGab:eval
 * @text Force Gab?
 * @type boolean
 * @on Force this Gab
 * @off Queue this Gab
 * @desc Forced gabs will clear other gabs and display immediately.
 * @default false
 *
 * @arg Override:struct
 * @text Optional Settings
 * @type struct<Override>
 * @desc Change the settings you want to override with this gab.
 * Blank settings will use default Plugin Parameter settings.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GabTextSvActorAny
 * @text Gab: Text + Sideview Actor (Any)
 * @desc Show a Gab Window with the specified settings.
 * Any Sideview Actor can be displayed next to text.
 * 
 * @arg Text:json
 * @text Text
 * @type note
 * @desc The text to be shown in the Gab Window.
 * @default "Hello!"
 * 
 * @arg Filename:str
 * @text Filename
 * @type file
 * @dir img/sv_actors/
 * @desc The filename of the Sideview Actor graphic to use.
 * @default Actor1_1
 * 
 * @arg ForceGab:eval
 * @text Force Gab?
 * @type boolean
 * @on Force this Gab
 * @off Queue this Gab
 * @desc Forced gabs will clear other gabs and display immediately.
 * @default false
 *
 * @arg Override:struct
 * @text Optional Settings
 * @type struct<Override>
 * @desc Change the settings you want to override with this gab.
 * Blank settings will use default Plugin Parameter settings.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GabTextSvActorActor
 * @text Gab: Text + Sideview Actor (Actor)
 * @desc Show a Gab Window with the specified settings.
 * Pick an actor's sideview graphic to show with it.
 * 
 * @arg Text:json
 * @text Text
 * @type note
 * @desc The text to be shown in the Gab Window.
 * @default "Hello!"
 * 
 * @arg ID:num
 * @text Actor ID
 * @type actor
 * @desc This is the ID of the actor you want the sideview graphic of.
 * @default 1
 * 
 * @arg ForceGab:eval
 * @text Force Gab?
 * @type boolean
 * @on Force this Gab
 * @off Queue this Gab
 * @desc Forced gabs will clear other gabs and display immediately.
 * @default false
 *
 * @arg Override:struct
 * @text Optional Settings
 * @type struct<Override>
 * @desc Change the settings you want to override with this gab.
 * Blank settings will use default Plugin Parameter settings.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GabTextSvActorParty
 * @text Gab: Text + Sideview Actor (Party)
 * @desc Show a Gab Window with the specified settings.
 * Pick a party member's sideview graphic to show with it.
 * 
 * @arg Text:json
 * @text Text
 * @type note
 * @desc The text to be shown in the Gab Window.
 * @default "Hello!"
 * 
 * @arg ID:num
 * @text Party Member Index
 * @type number
 * @desc This is the index of the party member you want the
 * sideview graphic of. Index values start at 0.
 * @default 0
 * 
 * @arg ForceGab:eval
 * @text Force Gab?
 * @type boolean
 * @on Force this Gab
 * @off Queue this Gab
 * @desc Forced gabs will clear other gabs and display immediately.
 * @default false
 *
 * @arg Override:struct
 * @text Optional Settings
 * @type struct<Override>
 * @desc Change the settings you want to override with this gab.
 * Blank settings will use default Plugin Parameter settings.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GabTextPicture
 * @text Gab: Text + Picture
 * @desc Show a Gab Window with the specified settings.
 * Any picture graphic can be displayed next to text.
 * 
 * @arg Text:json
 * @text Text
 * @type note
 * @desc The text to be shown in the Gab Window.
 * @default "Hello!"
 * 
 * @arg Filename:str
 * @text Filename
 * @type file
 * @dir img/pictures/
 * @desc The filename of the face graphic to use.
 * @default Untitled
 * 
 * @arg Stretched:eval
 * @text Stretch Picture
 * @type boolean
 * @on Stretch Picture
 * @off Don't Stretch
 * @desc Stretch the picture to fit the window?
 * @default true
 * 
 * @arg ForceGab:eval
 * @text Force Gab?
 * @type boolean
 * @on Force this Gab
 * @off Queue this Gab
 * @desc Forced gabs will clear other gabs and display immediately.
 * @default false
 *
 * @arg Override:struct
 * @text Optional Settings
 * @type struct<Override>
 * @desc Change the settings you want to override with this gab.
 * Blank settings will use default Plugin Parameter settings.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 * 
 * @command ClearGab
 * @text System: Clear Gabs
 * @desc Clears out the current Gab and any which are queued.
 *
 * @ --------------------------------------------------------------------------
 * 
 * @command WaitForGab
 * @text System: Wait For Gab Completion
 * @desc Causes the game to wait until all gabs are finished playing.
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
 * @param GabWindow
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
 * @desc General settings regarding the Gab Window.
 * @default {"General":"","AntiRepeat:eval":"true","CenterGraphics:eval":"true","Fade":"","FadeRate:num":"16","FadeDirection:str":"None","Font":"","GabFontName:str":"","GabFontSize:num":"28","Sprites":"","Character":"","CharacterXPos:num":"36","CharacterYPos:num":"60","SVActor":"","SvActorXPos:num":"44","SvActorYPos:num":"68","Waiting":"","BaseWaitTime:num":"90","TimePerCharacter:num":"4","JavaScript":"","OnDisplayJS:func":"\"// Declare Constants\\nconst gabWindow = this;\\nconst lastGab = arguments[0];\\n\\n// Perform Actions\\n\"","OnFinishJS:func":"\"// Declare Constants\\nconst gabWindow = this;\\nconst lastGab = arguments[0];\\n\\n// Perform Actions\\n\""}
 *
 * @param Map:struct
 * @text Map Settings
 * @type struct<Map>
 * @desc Settings related to the gab window while in the map scene.
 * @default {"MapYLocation:num":"72","MapDimColor1:str":"rgba(0, 0, 0, 0.6)","MapDimColor2:str":"rgba(0, 0, 0, 0)"}
 *
 * @param Battle:struct
 * @text Battle Settings
 * @type struct<Battle>
 * @desc Settings related to the gab window while in the battle scene.
 * @default {"BattleYLocation:num":"108","BattleDimColor1:str":"rgba(0, 0, 0, 0.6)","BattleDimColor2:str":"rgba(0, 0, 0, 0)"}
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
 * @param AntiRepeat:eval
 * @text Anti-Repeat
 * @parent General
 * @type boolean
 * @on Anti-Repeat
 * @off Allow Repeat
 * @desc Stops gabs of the same settings from being queued.
 * @default true
 * 
 * @param CenterGraphics:eval
 * @text Center Graphics
 * @parent General
 * @type boolean
 * @on Center Graphics
 * @off Align Top
 * @desc Centers graphics vertically if there are multiple lines.
 * @default true
 * 
 * @param Fade
 * 
 * @param FadeRate:num
 * @text Fade Rate
 * @parent Fade
 * @type number
 * @min 1
 * @desc How fast the gab window fades away.
 * Default: 16
 * @default 16
 * 
 * @param FadeDirection:str
 * @text Fade Direction
 * @parent Fade
 * @type select
 * @option None
 * @option Up
 * @option Down
 * @option Left
 * @option Right
 * @desc The direction to move the window in when fading out.
 * @default None
 *
 * @param Font
 * 
 * @param GabFontName:str
 * @text Gab Font Name
 * @parent Font
 * @desc The font name used for the text of the Gab Window
 * Leave empty to use the default game's font.
 * @default 
 * 
 * @param GabFontSize:num
 * @text Gab Font Size
 * @parent Font
 * @type number
 * @min 1
 * @desc The font size used for the text of the Gab Window.
 * Default: 28
 * @default 28
 * 
 * @param Sprites
 * 
 * @param Character
 * @text Character Sprites
 * @parent Sprites
 * 
 * @param CharacterXPos:num
 * @text X Position
 * @parent Character
 * @type number
 * @desc X position of the character.
 * Default: 36
 * @default 36
 * 
 * @param CharacterYPos:num
 * @text Y Position
 * @parent Character
 * @type number
 * @desc Y position of the character.
 * Default: 60
 * @default 60
 * 
 * @param SVActor
 * @text Sideview Sprites
 * @parent Sprites
 * 
 * @param SvActorXPos:num
 * @text X Position
 * @parent SVActor
 * @type number
 * @desc X position of the Sideview Actor.
 * Default: 44
 * @default 44
 * 
 * @param SvActorYPos:num
 * @text Y Position
 * @parent SVActor
 * @type number
 * @desc Y position of the Sideview Actor.
 * Default: 68
 * @default 68
 * 
 * @param Waiting
 * 
 * @param BaseWaitTime:num
 * @text Base Wait Time
 * @parent Waiting
 * @type number
 * @min 0
 * @desc Minimum frames the Gab Window stays visible.
 * Default: 90
 * @default 90
 * 
 * @param TimePerCharacter:num
 * @text Time Per Character
 * @parent Waiting
 * @type number
 * @min 0
 * @desc Frames added per Text Character.
 * Default: 4
 * @default 4
 * 
 * @param JavaScript
 *
 * @param OnDisplayJS:func
 * @text JS: On Display
 * @parent OnDisplay
 * @type note
 * @desc Runs this code once this Gab Window shows up.
 * This applies to every single gab.
 * @default "// Declare Constants\nconst gabWindow = this;\nconst lastGab = arguments[0];\n\n// Perform Actions\n"
 *
 * @param OnFinishJS:func
 * @text JS: On Finish
 * @parent OnFinish
 * @type note
 * @desc Runs this code once this Gab Window finishes.
 * This applies to every single gab.
 * @default "// Declare Constants\nconst gabWindow = this;\nconst lastGab = arguments[0];\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Map Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Map:
 * 
 * @param MapYLocation:num
 * @type number
 * @text Y Location
 * @desc This is the Y location of the Gab Window.
 * Default: 72
 * @default 72
 * 
 * @param MapDimColor1:str
 * @text Dim Color 1
 * @desc This is the dim color 1 used for maps.
 * Default: rgba(0, 0, 0, 0.6)
 * @default rgba(0, 0, 0, 0.6)
 * 
 * @param MapDimColor2:str
 * @text Dim Color 2
 * @desc This is the dim color 2 used for maps.
 * Default: rgba(0, 0, 0, 0)
 * @default rgba(0, 0, 0, 0)
 *
 */
/* ----------------------------------------------------------------------------
 * Battle Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Battle:
 * 
 * @param BattleYLocation:num
 * @type number
 * @text Y Location
 * @desc This is the Y location of the Gab Window.
 * Default: 108
 * @default 108
 * 
 * @param BattleDimColor1:str
 * @text Dim Color 1
 * @desc This is the dim color 1 used for battles.
 * Default: rgba(0, 0, 0, 0.6)
 * @default rgba(0, 0, 0, 0.6)
 * 
 * @param BattleDimColor2:str
 * @text Dim Color 2
 * @desc This is the dim color 2 used for battles.
 * Default: rgba(0, 0, 0, 0)
 * @default rgba(0, 0, 0, 0)
 *
 */
/* ----------------------------------------------------------------------------
 * Override Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Override:
 * 
 * @param DimColor
 * @text Dim Color
 * 
 * @param DimColor1:str
 * @text Dim Color 1
 * @parent DimColor
 * @desc The dim color 1 to use for this Gab Window.
 * Format: rgba(red, green, blue, alpha)
 * @default 
 * 
 * @param DimColor2:str
 * @text Dim Color 2
 * @parent DimColor
 * @desc The dim color 2 to use for this Gab Window.
 * Format: rgba(red, green, blue, alpha)
 * @default 
 * 
 * @param Fade
 * 
 * @param FadeRate:num
 * @text Fade Rate
 * @parent Fade
 * @type number
 * @desc How fast this Gab Window fades away.
 * @default 
 * 
 * @param FadeDirection:str
 * @text Fade Direction
 * @parent Fade
 * @type select
 * @option None
 * @option Up
 * @option Down
 * @option Left
 * @option Right
 * @desc The direction this Gab Window fades out in.
 * @default 
 *
 * @param Font
 * 
 * @param FontName:str
 * @text Font Name
 * @parent Font
 * @desc The font name to use for this Gab Window.
 * @default 
 * 
 * @param FontSize:num
 * @text Font Size
 * @parent Font
 * @type number
 * @desc The font size to use for this Gab Window.
 * @default 
 * 
 * @param Position
 * 
 * @param YLocation:num
 * @text Y Location
 * @parent Position
 * @type number
 * @desc The Y coordinate this Gab Window will appear in.
 * Ignore if you are using a locked sprite position.
 * @default 
 * 
 * @param ActorID:num
 * @text Actor ID
 * @parent Position
 * @type actor
 * @desc The ID of the actor to display this Gab Window above.
 * For Map/Battle. 
 * @default 0
 * 
 * @param PartyIndex:num
 * @text Party Index
 * @parent ActorID:num
 * @desc Index of the party member to display Gab Window above.
 * For Map/Battle. Index values start at 0. Ignore under 0.
 * @default -1
 * 
 * @param EnemyIndex:num
 * @text Enemy Index
 * @parent Position
 * @desc Index of an enemy battler to display Gab Window above.
 * Battle only. Index values start at 0. Ignore under 0.
 * @default -1
 * 
 * @param EventID:num
 * @text Event ID
 * @parent Position
 * @type number
 * @desc The ID of the event to display this Gab Window above.
 * Map only.
 * @default 0
 *
 * @param OnDisplay
 * @text On Display
 * 
 * @param BypassAntiRepeat:eval
 * @text Bypass Anti-Repeat
 * @parent OnDisplay
 * @type boolean
 * @on Bypass
 * @off Use Anti-Repeat
 * @desc Allows this gab to bypass the Anti-Repeat settings.
 * @default false
 * 
 * @param SoundFilename:str
 * @text Sound Filename
 * @parent OnDisplay
 * @type file
 * @dir audio/se
 * @desc The filename of the SE to play when the Gab Window shows.
 * @default 
 *
 * @param OnDisplayJS:func
 * @text JS: On Display
 * @parent OnDisplay
 * @type note
 * @desc Runs this code once this Gab Window shows up.
 * @default 
 *
 * @param OnFinish
 * @text On Finish
 * 
 * @param GabSwitch:num
 * @text Gab Switch
 * @parent OnFinish
 * @type switch
 * @desc The specified switch will be turned ON when the Gab Window finishes.
 * @default 
 *
 * @param OnFinishJS:func
 * @text JS: On Finish
 * @parent OnFinish
 * @type note
 * @desc Runs this code once this Gab Window finishes.
 * @default 
 * 
 * @param Waiting
 * 
 * @param WaitTime:num
 * @text Wait Time
 * @parent Waiting
 * @type number
 * @desc The number of frames this Gab Window stays visible.
 * @default 
 * 
 * @param TimePerCharacter:num
 * @text Time Per Character
 * @parent Waiting
 * @type number
 * @desc Frames added per Text Character in this Gab Window.
 * @default 
 *
 */
//=============================================================================

const _0xb6a06a=_0x2df0;(function(_0x1a8d8f,_0x3d378e){const _0x4c0c52=_0x2df0,_0x398070=_0x1a8d8f();while(!![]){try{const _0x5113da=parseInt(_0x4c0c52(0x178))/0x1+parseInt(_0x4c0c52(0x1df))/0x2*(-parseInt(_0x4c0c52(0x10f))/0x3)+parseInt(_0x4c0c52(0xd8))/0x4*(-parseInt(_0x4c0c52(0x164))/0x5)+-parseInt(_0x4c0c52(0x1de))/0x6*(-parseInt(_0x4c0c52(0x112))/0x7)+parseInt(_0x4c0c52(0x1ea))/0x8+-parseInt(_0x4c0c52(0xff))/0x9+parseInt(_0x4c0c52(0x103))/0xa*(parseInt(_0x4c0c52(0x107))/0xb);if(_0x5113da===_0x3d378e)break;else _0x398070['push'](_0x398070['shift']());}catch(_0x3d823e){_0x398070['push'](_0x398070['shift']());}}}(_0x206c,0xd4bc5));var label=_0xb6a06a(0x16b),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0xb6a06a(0xc9)](function(_0x2da669){const _0x1bfd41=_0xb6a06a;return _0x2da669[_0x1bfd41(0x167)]&&_0x2da669[_0x1bfd41(0xc1)][_0x1bfd41(0x139)]('['+label+']');})[0x0];function _0x2df0(_0xcbeb5b,_0x923539){const _0x206cfa=_0x206c();return _0x2df0=function(_0x2df026,_0x165c95){_0x2df026=_0x2df026-0xb7;let _0xcf364b=_0x206cfa[_0x2df026];return _0xcf364b;},_0x2df0(_0xcbeb5b,_0x923539);}function _0x206c(){const _0xf9b13d=['ConvertParams','_enemyIndex','characterName','faceName','getLastPluginCommandInterpreter','remove','repositionNormal','Override','isRepositionToBattleEnemy','gab','refresh','drawFace','_soundName','PartyIndex','Filename','faceHeight','_graphicName','lineHeight','Text','SoundFilename','bind','registerCommand','setLastPluginCommandInterpreter','min','SmHnM','addChild','startGabWindow','replace','updatePadding','GabSwitch','forceGabData','format','_jsOnFinish','loadSvActor','repositionToTarget','blt','repositionToMapTarget','_scene','1490500ngFaAY','drawGabPicture','name','status','createAllWindows','MxIlJ','checheckLastGab','GabWindow','findTargetSprite','MapDimColor2','push','ARRAYEVAL','reposition','_dimColor2Override','NjVdR','updateWaitMode','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','innerHeight','characterIndex','MapDimColor1','1483294ssDVEi','FUNC','EnemyIndex','_currentGab','Map','FontName','SvActorXPos','_ignoreMask','_graphicLoading','qJQIW','toUpperCase','adjustDimensions','NUM','onDisplayJS','_actorID','DimColor1','TTsqi','DOWN','ZOaiE','TimePerCharacter','startCountdown','FontSize','followers','BypassAntiRepeat','restoreGabs','bKBEc','checkDuplicateGab','QzYRi','EventID','setValue','CenterGraphics','_battle','OnFinishJS','GabTextSpriteActor','inBattle','_lastPluginCommandInterpreter','unshift','actor','ARRAYSTR','BattleYLocation','isRepositionToMapEvent','LEFT','_lockedToTarget','_gabRunning','isHideGabWindow','map','character','waitForGab','command357','width','isRepositionToActor','TFwxk','isSceneBattle','YeFwY','members','_text','RIGHT','initMembers','actorId','clearGabData','update','return\x200','MapYLocation','exit','checkCurrentGab','Battle','picture','drawGabText','height','mode','screenY','_gabLoaded','getPictureScale','innerWidth','fittingHeight','TCdMG','GabTextSvActorAny','Uhash','_currentBattleGab','KDKeb','contentsOpacity','boxWidth','createGabWindow','IytEu','ZGlQY','determineLockToSprite','_currentMapGab','_gabWindow','nfSoQ','screenX','GabTextSvActorActor','JSON','_storedMapGabs','_showCount','parameters','pJpQs','MRBtW','boxHeight','drawGabSvActor','dimColor2','_storedBattleGabs','GTRsi','9072018TdJLxD','3077026HHzIDE','drawBackground','CharacterXPos','svActorHorzCells','_graphicIndex','tgktF','_gabQueue','_spriteset','ActorID','gradientFillRect','uHWoc','651608sGhoeJ','createRect','contents','svActorVertCells','parse','_waitMode','STRUCT','length','_fontNameOverride','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','GabTextFaceAny','Game_Interpreter_updateWaitMode','index','description','GabTextPicture','_lines','drawGabGraphic','_graphicType','repositionToBattleTarget','_eventID','Game_Interpreter_PluginCommand','filter','faceWidth','isSceneMap','_jsOnDisplay','_gabSwitch','vsjBb','legnth','_fadeRateOverride','WaitForGab','battlerName','_yLocOverride','sv_actor','onFinishJS','resetFontSettings','updateFadeIn','16OhEuIt','_victoryPhase','_fadeDirOverride','padding','addGabData','removeLoadingGraphic','_dimColor1Override','loadNewGabData','forceGabWindow','setupLoadGraphic','_widthOVerride','setWaitMode','resetTextColor','_stretchPicture','BattleDimColor1','Stretched','SceneManager_push','drawGabCharacter','fontSize','ADXIJ','BaseWaitTime','addLoadListener','AntiRepeat','itemPadding','Scene_Battle_createAllWindows','ClearGab','updateFadeOut','OnDisplayJS','GabFontSize','call','_widthOverride','SvActorYPos','hpkoo','isStoreGabs','Width','YLocation','EVAL','onChR','Settings','5524308QGTZPs','STR','shift','FadeDirection','11393420uUfZvh','prototype','clear','clearGabWindow','11knHEZE','drawSvActor','DZGcA','WaitTime','drawTextEx','event','esRvS','playSe','3ZNntPo','initialize','loadFace','7pWNhZb','Zdmcw','create','GabTextSpriteAny','_tpcOverride','mainFontFace','turnOnGabSwitch','match','General','PFnHF','trim','kkVzx','GabTextSpriteParty','waBmr','processNewGabData','isGabRunning','none','drawGabBackground','playSound','constructor','faceIndex','DimColor2','face','opacity','ForceGab','follower','ceil','loadCharacter','stringify','rjDvt','_graphicBitmap','Scene_Map_createAllWindows','drawGabFace','_waitTimeOverride','_fontSizeOverride','max','FadeRate','toLowerCase','YHRLf','includes','isSideView','onDisplay','GabFontName','dimColor1'];_0x206c=function(){return _0xf9b13d;};return _0x206c();}VisuMZ[label][_0xb6a06a(0xfe)]=VisuMZ[label][_0xb6a06a(0xfe)]||{},VisuMZ['ConvertParams']=function(_0x59b5a6,_0x3d8c40){const _0x41ed55=_0xb6a06a;for(const _0x4f838a in _0x3d8c40){if(_0x4f838a[_0x41ed55(0x119)](/(.*):(.*)/i)){if(_0x41ed55(0x11f)===_0x41ed55(0x11f)){const _0x24d0f4=String(RegExp['$1']),_0x2385a3=String(RegExp['$2'])[_0x41ed55(0x182)]()['trim']();let _0x994bb7,_0x6c205,_0x4e37d8;switch(_0x2385a3){case _0x41ed55(0x184):_0x994bb7=_0x3d8c40[_0x4f838a]!==''?Number(_0x3d8c40[_0x4f838a]):0x0;break;case'ARRAYNUM':_0x6c205=_0x3d8c40[_0x4f838a]!==''?JSON[_0x41ed55(0xb8)](_0x3d8c40[_0x4f838a]):[],_0x994bb7=_0x6c205[_0x41ed55(0x1a5)](_0x1cedcb=>Number(_0x1cedcb));break;case _0x41ed55(0xfc):_0x994bb7=_0x3d8c40[_0x4f838a]!==''?eval(_0x3d8c40[_0x4f838a]):null;break;case _0x41ed55(0x16f):_0x6c205=_0x3d8c40[_0x4f838a]!==''?JSON[_0x41ed55(0xb8)](_0x3d8c40[_0x4f838a]):[],_0x994bb7=_0x6c205[_0x41ed55(0x1a5)](_0x1593cc=>eval(_0x1593cc));break;case _0x41ed55(0x1d3):_0x994bb7=_0x3d8c40[_0x4f838a]!==''?JSON[_0x41ed55(0xb8)](_0x3d8c40[_0x4f838a]):'';break;case'ARRAYJSON':_0x6c205=_0x3d8c40[_0x4f838a]!==''?JSON['parse'](_0x3d8c40[_0x4f838a]):[],_0x994bb7=_0x6c205['map'](_0x4abaa2=>JSON[_0x41ed55(0xb8)](_0x4abaa2));break;case _0x41ed55(0x179):_0x994bb7=_0x3d8c40[_0x4f838a]!==''?new Function(JSON[_0x41ed55(0xb8)](_0x3d8c40[_0x4f838a])):new Function(_0x41ed55(0x1b5));break;case'ARRAYFUNC':_0x6c205=_0x3d8c40[_0x4f838a]!==''?JSON[_0x41ed55(0xb8)](_0x3d8c40[_0x4f838a]):[],_0x994bb7=_0x6c205['map'](_0x497a7e=>new Function(JSON[_0x41ed55(0xb8)](_0x497a7e)));break;case _0x41ed55(0x100):_0x994bb7=_0x3d8c40[_0x4f838a]!==''?String(_0x3d8c40[_0x4f838a]):'';break;case _0x41ed55(0x19e):_0x6c205=_0x3d8c40[_0x4f838a]!==''?JSON[_0x41ed55(0xb8)](_0x3d8c40[_0x4f838a]):[],_0x994bb7=_0x6c205[_0x41ed55(0x1a5)](_0x2218a4=>String(_0x2218a4));break;case _0x41ed55(0xba):_0x4e37d8=_0x3d8c40[_0x4f838a]!==''?JSON['parse'](_0x3d8c40[_0x4f838a]):{},_0x994bb7=VisuMZ[_0x41ed55(0x13e)]({},_0x4e37d8);break;case'ARRAYSTRUCT':_0x6c205=_0x3d8c40[_0x4f838a]!==''?JSON[_0x41ed55(0xb8)](_0x3d8c40[_0x4f838a]):[],_0x994bb7=_0x6c205[_0x41ed55(0x1a5)](_0x2c0094=>VisuMZ['ConvertParams']({},JSON[_0x41ed55(0xb8)](_0x2c0094)));break;default:continue;}_0x59b5a6[_0x24d0f4]=_0x994bb7;}else this['_lockedToTarget']=_0x511987;}}return _0x59b5a6;},(_0xffe205=>{const _0x16e82f=_0xb6a06a,_0xc8b456=_0xffe205['name'];for(const _0x5f4e59 of dependencies){if(!Imported[_0x5f4e59]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'['format'](_0xc8b456,_0x5f4e59)),SceneManager[_0x16e82f(0x1b7)]();break;}}const _0x3eb748=_0xffe205[_0x16e82f(0xc1)];if(_0x3eb748[_0x16e82f(0x119)](/\[Version[ ](.*?)\]/i)){if(_0x16e82f(0x1d0)!==_0x16e82f(0x1d0)){if(this['_lockedToTarget'])this[_0x16e82f(0x170)]();}else{const _0x1d832=Number(RegExp['$1']);_0x1d832!==VisuMZ[label]['version']&&(alert(_0x16e82f(0xbd)[_0x16e82f(0x15d)](_0xc8b456,_0x1d832)),SceneManager[_0x16e82f(0x1b7)]());}}if(_0x3eb748[_0x16e82f(0x119)](/\[Tier[ ](\d+)\]/i)){if('rMELY'===_0x16e82f(0xeb))this[_0x16e82f(0x1e0)](0x0,0x0,this[_0x16e82f(0x1c1)],this[_0x16e82f(0x175)]);else{const _0x5c6702=Number(RegExp['$1']);_0x5c6702<tier?(alert(_0x16e82f(0x174)[_0x16e82f(0x15d)](_0xc8b456,_0x5c6702,tier)),SceneManager[_0x16e82f(0x1b7)]()):_0x16e82f(0x113)===_0x16e82f(0x113)?tier=Math[_0x16e82f(0x135)](_0x5c6702,tier):(this[_0x16e82f(0x1e5)][_0x16e82f(0x19c)](_0x557844[_0x16e82f(0x1c6)]),delete _0x1d735f[_0x16e82f(0x1c6)]);}}VisuMZ['ConvertParams'](VisuMZ[label][_0x16e82f(0xfe)],_0xffe205[_0x16e82f(0x1d6)]);})(pluginData),PluginManager[_0xb6a06a(0x153)](pluginData[_0xb6a06a(0x166)],'GabTextOnly',_0x5a7152=>{const _0x37ede7=_0xb6a06a;VisuMZ[_0x37ede7(0x13e)](_0x5a7152,_0x5a7152);const _0x8fa486=SceneManager[_0x37ede7(0x163)];if(!_0x8fa486[_0x37ede7(0x1cf)])return;_0x5a7152[_0x37ede7(0x12a)]?_0x8fa486[_0x37ede7(0xe0)](_0x5a7152):'TTsqi'===_0x37ede7(0x188)?_0x8fa486[_0x37ede7(0x158)](_0x5a7152):(this['_gabQueue']=_0x33e449[_0x37ede7(0x1d4)],delete _0x55971f[_0x37ede7(0x1d4)]);}),PluginManager['registerCommand'](pluginData[_0xb6a06a(0x166)],_0xb6a06a(0xbe),_0x730ae0=>{const _0x2c2a3e=_0xb6a06a;VisuMZ['ConvertParams'](_0x730ae0,_0x730ae0);const _0x33a884=SceneManager[_0x2c2a3e(0x163)];if(!_0x33a884[_0x2c2a3e(0x1cf)])return;_0x730ae0[_0x2c2a3e(0x1bd)]=_0x2c2a3e(0x128);if(_0x730ae0['ForceGab'])_0x33a884[_0x2c2a3e(0xe0)](_0x730ae0);else{if(_0x2c2a3e(0x18a)!==_0x2c2a3e(0x18a))return this[_0x2c2a3e(0x19b)];else _0x33a884['startGabWindow'](_0x730ae0);}}),PluginManager[_0xb6a06a(0x153)](pluginData['name'],'GabTextFaceActor',_0x5d1cc1=>{const _0x46e9f4=_0xb6a06a;VisuMZ[_0x46e9f4(0x13e)](_0x5d1cc1,_0x5d1cc1);const _0x5264be=SceneManager[_0x46e9f4(0x163)];if(!_0x5264be['_gabWindow'])return;_0x5d1cc1['mode']='face';const _0x1d7a08=$gameActors[_0x46e9f4(0x19d)](_0x5d1cc1['ID']);_0x1d7a08?(_0x5d1cc1['Filename']=_0x1d7a08[_0x46e9f4(0x141)](),_0x5d1cc1['ID']=_0x1d7a08[_0x46e9f4(0x126)]()):_0x5d1cc1['mode']=_0x46e9f4(0x122);if(_0x5d1cc1[_0x46e9f4(0x12a)])_0x5264be['forceGabWindow'](_0x5d1cc1);else{if(_0x46e9f4(0x191)!==_0x46e9f4(0x191)){let _0x218f40=_0x2a28d6-this[_0x46e9f4(0x1a9)]/0x2,_0x231b9f=_0x544d6b-this[_0x46e9f4(0x1bc)]-0x20;this['x']=_0x218f40,this['y']=_0x231b9f;}else _0x5264be['startGabWindow'](_0x5d1cc1);}}),PluginManager[_0xb6a06a(0x153)](pluginData['name'],'GabTextFaceParty',_0x53ec20=>{const _0x567322=_0xb6a06a;VisuMZ['ConvertParams'](_0x53ec20,_0x53ec20);const _0x1a8d8c=SceneManager['_scene'];if(!_0x1a8d8c[_0x567322(0x1cf)])return;_0x53ec20[_0x567322(0x1bd)]=_0x567322(0x128);const _0x38999e=$gameParty[_0x567322(0x1ae)]()[_0x53ec20['ID']];if(_0x38999e)_0x53ec20[_0x567322(0x14c)]=_0x38999e[_0x567322(0x141)](),_0x53ec20['ID']=_0x38999e[_0x567322(0x126)]();else{if('kkVzx'===_0x567322(0x11d))_0x53ec20[_0x567322(0x1bd)]=_0x567322(0x122);else return this[_0x567322(0x162)]();}_0x53ec20[_0x567322(0x12a)]?_0x1a8d8c[_0x567322(0xe0)](_0x53ec20):_0x567322(0xfd)!==_0x567322(0xfd)?(this[_0x567322(0x1bf)]=![],this[_0x567322(0x129)]=0x0,this[_0x567322(0x1c8)]=0x0,this[_0x567322(0x1af)]='',this[_0x567322(0xc5)]=_0x567322(0x122),this[_0x567322(0x14e)]='',this[_0x567322(0x1e3)]=0x0,this[_0x567322(0x14a)]='',delete this[_0x567322(0x130)],delete this['_fontNameOverride'],delete this['_fontSizeOverride'],delete this[_0x567322(0x133)],delete this['_tpcOverride'],delete this['_yLocOverride'],delete this[_0x567322(0xe2)],delete this[_0x567322(0xde)],delete this[_0x567322(0x171)],delete this[_0x567322(0xcc)]):_0x1a8d8c[_0x567322(0x158)](_0x53ec20);}),PluginManager[_0xb6a06a(0x153)](pluginData[_0xb6a06a(0x166)],_0xb6a06a(0x115),_0x55d32c=>{const _0x3c76f0=_0xb6a06a;VisuMZ[_0x3c76f0(0x13e)](_0x55d32c,_0x55d32c);const _0x4f6b18=SceneManager[_0x3c76f0(0x163)];if(!_0x4f6b18[_0x3c76f0(0x1cf)])return;_0x55d32c[_0x3c76f0(0x1bd)]=_0x3c76f0(0x1a6),_0x55d32c[_0x3c76f0(0x12a)]?_0x4f6b18[_0x3c76f0(0xe0)](_0x55d32c):_0x3c76f0(0x10d)===_0x3c76f0(0xce)?_0x101732[_0x3c76f0(0x158)](_0x2ec361):_0x4f6b18[_0x3c76f0(0x158)](_0x55d32c);}),PluginManager[_0xb6a06a(0x153)](pluginData[_0xb6a06a(0x166)],_0xb6a06a(0x199),_0x597e3a=>{const _0x598a6b=_0xb6a06a;VisuMZ[_0x598a6b(0x13e)](_0x597e3a,_0x597e3a);const _0x435c54=SceneManager[_0x598a6b(0x163)];if(!_0x435c54[_0x598a6b(0x1cf)])return;_0x597e3a['mode']='character';const _0x36046b=$gameActors[_0x598a6b(0x19d)](_0x597e3a['ID']);_0x36046b?_0x598a6b(0x1e9)===_0x598a6b(0x138)?_0x1baa03['startGabWindow'](_0xd9b4ab):(_0x597e3a[_0x598a6b(0x14c)]=_0x36046b[_0x598a6b(0x140)](),_0x597e3a['ID']=_0x36046b[_0x598a6b(0x176)]()):'qcsZs'!==_0x598a6b(0xf8)?_0x597e3a[_0x598a6b(0x1bd)]=_0x598a6b(0x122):(_0x545a8d[_0x598a6b(0x16b)][_0x598a6b(0xf0)]['call'](this),this[_0x598a6b(0x1ca)](!![])),_0x597e3a['ForceGab']?_0x435c54[_0x598a6b(0xe0)](_0x597e3a):_0x435c54[_0x598a6b(0x158)](_0x597e3a);}),PluginManager[_0xb6a06a(0x153)](pluginData[_0xb6a06a(0x166)],_0xb6a06a(0x11e),_0x4ebf6f=>{const _0x347eba=_0xb6a06a;VisuMZ[_0x347eba(0x13e)](_0x4ebf6f,_0x4ebf6f);const _0x44c242=SceneManager[_0x347eba(0x163)];if(!_0x44c242[_0x347eba(0x1cf)])return;_0x4ebf6f[_0x347eba(0x1bd)]='character';const _0x359727=$gameParty['members']()[_0x4ebf6f['ID']];_0x359727?(_0x4ebf6f[_0x347eba(0x14c)]=_0x359727['characterName'](),_0x4ebf6f['ID']=_0x359727[_0x347eba(0x176)]()):_0x4ebf6f['mode']=_0x347eba(0x122),_0x4ebf6f[_0x347eba(0x12a)]?_0x44c242[_0x347eba(0xe0)](_0x4ebf6f):_0x44c242[_0x347eba(0x158)](_0x4ebf6f);}),PluginManager[_0xb6a06a(0x153)](pluginData[_0xb6a06a(0x166)],_0xb6a06a(0x1c4),_0x29b329=>{const _0x515f04=_0xb6a06a;VisuMZ[_0x515f04(0x13e)](_0x29b329,_0x29b329);const _0x5c44a5=SceneManager['_scene'];if(!_0x5c44a5['_gabWindow'])return;_0x29b329[_0x515f04(0x1bd)]=_0x515f04(0xd4),_0x29b329[_0x515f04(0x12a)]?_0x5c44a5[_0x515f04(0xe0)](_0x29b329):_0x5c44a5[_0x515f04(0x158)](_0x29b329);}),PluginManager['registerCommand'](pluginData['name'],_0xb6a06a(0x1d2),_0x435f25=>{const _0x513a4f=_0xb6a06a;VisuMZ['ConvertParams'](_0x435f25,_0x435f25);const _0x2076de=SceneManager[_0x513a4f(0x163)];if(!_0x2076de[_0x513a4f(0x1cf)])return;_0x435f25[_0x513a4f(0x1bd)]=_0x513a4f(0xd4);const _0x317e5=$gameActors['actor'](_0x435f25['ID']);if(_0x317e5){if(_0x513a4f(0x181)===_0x513a4f(0x181))_0x435f25[_0x513a4f(0x14c)]=_0x317e5['battlerName']();else{this[_0x513a4f(0x1af)]=_0x476407[_0x513a4f(0x150)]||'',this[_0x513a4f(0xc3)]=this[_0x513a4f(0x1af)]['split'](/[\r\n]+/)['length'],this['_graphicType']=_0x1dd680[_0x513a4f(0x1bd)]||_0x513a4f(0x122),this['_graphicName']=_0x53ef73[_0x513a4f(0x14c)]||'',this['_graphicIndex']=_0x587ba8['ID']||0x0,this[_0x513a4f(0xe5)]=_0x5bc532['Stretched']||![];const _0x23400f=_0x186a70[_0x513a4f(0x145)]||{};this[_0x513a4f(0x14a)]=_0x23400f[_0x513a4f(0x151)]||'',this[_0x513a4f(0xcc)]=_0x23400f[_0x513a4f(0xf3)]||null,this['_gabSwitch']=_0x23400f[_0x513a4f(0x15b)]||0x0,this[_0x513a4f(0x15e)]=_0x23400f[_0x513a4f(0x198)]||null,this['_fontNameOverride']=_0x23400f[_0x513a4f(0x17d)],this[_0x513a4f(0x134)]=_0x23400f['FontSize'],this['_waitTimeOverride']=_0x23400f['WaitTime'],this[_0x513a4f(0x116)]=_0x23400f['TimePerCharacter'],this[_0x513a4f(0xd0)]=_0x23400f[_0x513a4f(0x136)],this['_fadeDirOverride']=_0x23400f[_0x513a4f(0x102)],this[_0x513a4f(0xd3)]=_0x23400f[_0x513a4f(0xfb)],this[_0x513a4f(0xf6)]=_0x23400f['Width'],this[_0x513a4f(0xde)]=_0x23400f[_0x513a4f(0x187)],this[_0x513a4f(0x171)]=_0x23400f[_0x513a4f(0x127)],this[_0x513a4f(0x186)]=_0x23400f[_0x513a4f(0x1e7)];if(_0x23400f[_0x513a4f(0x14b)]!==_0x341d46&&_0x23400f[_0x513a4f(0x14b)]>=0x0){const _0x1b14d1=_0x23400f[_0x513a4f(0x14b)],_0x336fa8=_0x4f4b53[_0x513a4f(0x1ae)]()[_0x1b14d1];if(_0x336fa8)this[_0x513a4f(0x186)]=_0x336fa8['actorId']();}this[_0x513a4f(0xc7)]=_0x23400f[_0x513a4f(0x194)],this['_enemyIndex']=-0x1,_0x23400f[_0x513a4f(0x17a)]!==_0x1fb3c8&&_0x23400f['EnemyIndex']>=0x0&&(this[_0x513a4f(0x13f)]=_0x23400f[_0x513a4f(0x17a)]);}}else _0x435f25[_0x513a4f(0x1bd)]=_0x513a4f(0x122);_0x435f25[_0x513a4f(0x12a)]?_0x2076de[_0x513a4f(0xe0)](_0x435f25):_0x2076de[_0x513a4f(0x158)](_0x435f25);}),PluginManager['registerCommand'](pluginData['name'],'GabTextSvActorParty',_0x231748=>{const _0x326d6e=_0xb6a06a;VisuMZ['ConvertParams'](_0x231748,_0x231748);const _0x144c25=SceneManager['_scene'];if(!_0x144c25[_0x326d6e(0x1cf)])return;_0x231748['mode']=_0x326d6e(0xd4);const _0x5386e4=$gameParty[_0x326d6e(0x1ae)]()[_0x231748['ID']];_0x5386e4?_0x231748[_0x326d6e(0x14c)]=_0x5386e4[_0x326d6e(0xd2)]():_0x231748[_0x326d6e(0x1bd)]=_0x326d6e(0x122),_0x231748['ForceGab']?_0x144c25[_0x326d6e(0xe0)](_0x231748):_0x144c25[_0x326d6e(0x158)](_0x231748);}),PluginManager[_0xb6a06a(0x153)](pluginData[_0xb6a06a(0x166)],_0xb6a06a(0xc2),_0x17077d=>{const _0x443e40=_0xb6a06a;VisuMZ['ConvertParams'](_0x17077d,_0x17077d);const _0x49cfb8=SceneManager[_0x443e40(0x163)];if(!_0x49cfb8[_0x443e40(0x1cf)])return;_0x17077d['mode']=_0x443e40(0x1ba),_0x17077d[_0x443e40(0x12a)]?'LPtEN'==='CNfaM'?_0x105008[_0x443e40(0xe0)](_0x57c9ed):_0x49cfb8['forceGabWindow'](_0x17077d):_0x443e40(0x1dd)==='lpiVo'?this[_0x443e40(0x110)](...arguments):_0x49cfb8[_0x443e40(0x158)](_0x17077d);}),PluginManager[_0xb6a06a(0x153)](pluginData[_0xb6a06a(0x166)],_0xb6a06a(0xd1),_0x37f68d=>{const _0x1d0016=_0xb6a06a,_0x3539a5=$gameTemp['getLastPluginCommandInterpreter']();_0x3539a5[_0x1d0016(0x1a7)]();}),PluginManager[_0xb6a06a(0x153)](pluginData[_0xb6a06a(0x166)],_0xb6a06a(0xf1),_0x5462b8=>{const _0x53bd0=_0xb6a06a,_0x1e7331=SceneManager[_0x53bd0(0x163)];if(_0x1e7331[_0x53bd0(0x1cf)])_0x1e7331[_0x53bd0(0x106)]();}),VisuMZ[_0xb6a06a(0x16b)][_0xb6a06a(0xe8)]=SceneManager[_0xb6a06a(0x16e)],SceneManager[_0xb6a06a(0x16e)]=function(_0x2f7fd0){const _0x5bafe8=_0xb6a06a;this[_0x5bafe8(0xf9)](_0x2f7fd0)&&(_0x5bafe8(0x1cc)===_0x5bafe8(0x1cc)?this[_0x5bafe8(0x163)][_0x5bafe8(0x1cf)]['storeGabs']():_0x53c143=_0x49ffa8[_0x5bafe8(0x17c)][_0x5bafe8(0x1b6)]),VisuMZ[_0x5bafe8(0x16b)][_0x5bafe8(0xe8)]['call'](this,_0x2f7fd0);},SceneManager[_0xb6a06a(0xf9)]=function(_0x3b6e16){const _0x163b29=_0xb6a06a;return _0x3b6e16===Scene_Map&&!this[_0x163b29(0xcb)]()||_0x3b6e16===Scene_Battle&&this[_0x163b29(0xcb)]();},SceneManager['isSceneBattle']=function(){const _0x984540=_0xb6a06a;return this[_0x984540(0x163)]&&this[_0x984540(0x163)]['constructor']===Scene_Battle;},SceneManager[_0xb6a06a(0xcb)]=function(){const _0x4724fb=_0xb6a06a;return this[_0x4724fb(0x163)]instanceof Scene_Map;},Game_Temp[_0xb6a06a(0x104)][_0xb6a06a(0x154)]=function(_0x4d730b){const _0x5e9e69=_0xb6a06a;this[_0x5e9e69(0x19b)]=_0x4d730b;},Game_Temp[_0xb6a06a(0x104)][_0xb6a06a(0x142)]=function(){const _0x425824=_0xb6a06a;return this[_0x425824(0x19b)];},VisuMZ[_0xb6a06a(0x16b)][_0xb6a06a(0xc8)]=Game_Interpreter['prototype'][_0xb6a06a(0x1a8)],Game_Interpreter[_0xb6a06a(0x104)][_0xb6a06a(0x1a8)]=function(_0xb74d07){const _0x483241=_0xb6a06a;return $gameTemp[_0x483241(0x154)](this),VisuMZ[_0x483241(0x16b)]['Game_Interpreter_PluginCommand']['call'](this,_0xb74d07);},Game_Interpreter[_0xb6a06a(0x104)][_0xb6a06a(0x1a7)]=function(){const _0x2ac920=_0xb6a06a;this[_0x2ac920(0xe3)]('gab');},VisuMZ['GabWindow'][_0xb6a06a(0xbf)]=Game_Interpreter[_0xb6a06a(0x104)][_0xb6a06a(0x173)],Game_Interpreter[_0xb6a06a(0x104)]['updateWaitMode']=function(){const _0x3e2b06=_0xb6a06a;return this[_0x3e2b06(0xb9)]===_0x3e2b06(0x147)?this[_0x3e2b06(0x121)]():VisuMZ['GabWindow']['Game_Interpreter_updateWaitMode'][_0x3e2b06(0xf5)](this);},Game_Interpreter[_0xb6a06a(0x104)][_0xb6a06a(0x121)]=function(){const _0x39aa45=_0xb6a06a,_0x2bc710=SceneManager['_scene'],_0x39a9a7=_0x2bc710[_0x39aa45(0x1cf)];return _0x39a9a7?_0x39a9a7[_0x39aa45(0x1e5)][_0x39aa45(0xbb)]>0x0||_0x39a9a7[_0x39aa45(0x1a3)]:'mzuOJ'==='mzuOJ'?![]:(this[_0x39aa45(0x1a2)]=_0x322aac,!![]);},Scene_Base[_0xb6a06a(0x104)][_0xb6a06a(0x1ca)]=function(_0x577efe){const _0x30e1d1=_0xb6a06a;this['_gabWindow']=new Window_Gab(_0x577efe),this[_0x30e1d1(0x157)](this[_0x30e1d1(0x1cf)]);},Scene_Base['prototype']['startGabWindow']=function(_0x2df0e0){const _0x1b315a=_0xb6a06a;this['_gabWindow'][_0x1b315a(0xdc)](_0x2df0e0);},Scene_Base[_0xb6a06a(0x104)]['forceGabWindow']=function(_0x2a9ed8){const _0x334805=_0xb6a06a;this['_gabWindow'][_0x334805(0x15c)](_0x2a9ed8);},Scene_Base[_0xb6a06a(0x104)][_0xb6a06a(0x106)]=function(){const _0x2d8d4c=_0xb6a06a;this[_0x2d8d4c(0x1cf)][_0x2d8d4c(0x1b3)]();},VisuMZ[_0xb6a06a(0x16b)][_0xb6a06a(0x131)]=Scene_Map['prototype'][_0xb6a06a(0x168)],Scene_Map[_0xb6a06a(0x104)][_0xb6a06a(0x168)]=function(){const _0x254154=_0xb6a06a;VisuMZ[_0x254154(0x16b)][_0x254154(0x131)][_0x254154(0xf5)](this),this[_0x254154(0x1ca)](![]);},VisuMZ[_0xb6a06a(0x16b)][_0xb6a06a(0xf0)]=Scene_Battle['prototype'][_0xb6a06a(0x168)],Scene_Battle['prototype']['createAllWindows']=function(){const _0x39bebc=_0xb6a06a;VisuMZ[_0x39bebc(0x16b)][_0x39bebc(0xf0)][_0x39bebc(0xf5)](this),this[_0x39bebc(0x1ca)](!![]);},ImageManager[_0xb6a06a(0x1e2)]=ImageManager[_0xb6a06a(0x1e2)]||0x9,ImageManager[_0xb6a06a(0xb7)]=ImageManager[_0xb6a06a(0xb7)]||0x6;!Imported['VisuMZ_1_MainMenuCore']&&(Window_Base['prototype'][_0xb6a06a(0x108)]=function(_0x421f10,_0x3e9588,_0xdb88c5){const _0x2b01c9=_0xb6a06a,_0x473ae3=_0x421f10[_0x2b01c9(0x119)](/\$/i),_0x49a00b=ImageManager[_0x2b01c9(0x15f)](_0x421f10),_0xe04125=_0x49a00b[_0x2b01c9(0x1a9)]/(_0x473ae3?0x1:ImageManager[_0x2b01c9(0x1e2)]),_0x4cb668=_0x49a00b['height']/(_0x473ae3?0x1:ImageManager[_0x2b01c9(0xb7)]),_0x3891d8=0x0,_0x136440=0x0;this[_0x2b01c9(0x1ec)]['blt'](_0x49a00b,_0x3891d8,_0x136440,_0xe04125,_0x4cb668,_0x3e9588-_0xe04125/0x2,_0xdb88c5-_0x4cb668);});;function Window_Gab(){const _0xbc140d=_0xb6a06a;this[_0xbc140d(0x110)](...arguments);}Window_Gab[_0xb6a06a(0x104)]=Object[_0xb6a06a(0x114)](Window_Base[_0xb6a06a(0x104)]),Window_Gab[_0xb6a06a(0x104)][_0xb6a06a(0x125)]=Window_Gab,Window_Gab[_0xb6a06a(0x104)][_0xb6a06a(0x110)]=function(_0x5b09c6){const _0x237000=_0xb6a06a;this[_0x237000(0x1b1)](_0x5b09c6);const _0x32027f=this[_0x237000(0x1eb)](_0x5b09c6);this[_0x237000(0x180)]=[],Window_Base[_0x237000(0x104)][_0x237000(0x110)][_0x237000(0xf5)](this,_0x32027f),this[_0x237000(0x190)](),this[_0x237000(0x105)]();},Window_Gab[_0xb6a06a(0x104)][_0xb6a06a(0x1b1)]=function(_0x140791){const _0x108d87=_0xb6a06a;this[_0x108d87(0x197)]=_0x140791,this[_0x108d87(0xcd)]=0x0,this[_0x108d87(0x1d5)]=0x0,this[_0x108d87(0x17f)]=!![],this[_0x108d87(0x1e5)]=[],this['_currentGab']=[],this[_0x108d87(0x1a3)]=![];},Window_Gab['prototype'][_0xb6a06a(0x15a)]=function(){const _0x6b2a8e=_0xb6a06a;this[_0x6b2a8e(0xdb)]=0x0;},Window_Gab[_0xb6a06a(0x104)][_0xb6a06a(0x1c2)]=function(_0x2c69ce){const _0x336d4a=_0xb6a06a;return _0x2c69ce*this['itemHeight']()+this[_0x336d4a(0xdb)]*0x2;},Window_Gab['prototype'][_0xb6a06a(0x1eb)]=function(_0x5269b0){const _0x306a7a=_0xb6a06a,_0x53a2df=this['padding'];let _0x1f06de=_0x53a2df*-0x1,_0x3b7404=0x0;const _0x39cd19=VisuMZ['GabWindow']['Settings'];_0x5269b0?_0x3b7404=_0x39cd19[_0x306a7a(0x1b9)]['BattleYLocation']:_0x3b7404=_0x39cd19[_0x306a7a(0x17c)][_0x306a7a(0x1b6)];_0x3b7404-=this['padding'];let _0x2be007=Graphics[_0x306a7a(0x1a9)]+_0x53a2df*0x2,_0x578e8e=this[_0x306a7a(0x1c2)](0x2);return new Rectangle(_0x1f06de,_0x3b7404,_0x2be007,_0x578e8e);},Window_Gab[_0xb6a06a(0x104)]['clear']=function(){const _0x5ea1ad=_0xb6a06a;this[_0x5ea1ad(0x1bf)]=![],this[_0x5ea1ad(0x129)]=0x0,this[_0x5ea1ad(0x1c8)]=0x0,this['_text']='',this[_0x5ea1ad(0xc5)]=_0x5ea1ad(0x122),this['_graphicName']='',this[_0x5ea1ad(0x1e3)]=0x0,this['_soundName']='',delete this[_0x5ea1ad(0x130)],delete this['_fontNameOverride'],delete this['_fontSizeOverride'],delete this[_0x5ea1ad(0x133)],delete this[_0x5ea1ad(0x116)],delete this[_0x5ea1ad(0xd3)],delete this[_0x5ea1ad(0xe2)],delete this[_0x5ea1ad(0xde)],delete this[_0x5ea1ad(0x171)],delete this[_0x5ea1ad(0xcc)];},Window_Gab[_0xb6a06a(0x104)][_0xb6a06a(0xd6)]=function(){const _0x5ed708=_0xb6a06a,_0x106bbc=VisuMZ[_0x5ed708(0x16b)][_0x5ed708(0xfe)];this['contents']['fontFace']=this['_fontNameOverride']||_0x106bbc['General'][_0x5ed708(0x13c)]||$gameSystem[_0x5ed708(0x117)](),this[_0x5ed708(0x1ec)][_0x5ed708(0xea)]=this[_0x5ed708(0x134)]||_0x106bbc[_0x5ed708(0x11a)][_0x5ed708(0xf4)]||0x1c,this[_0x5ed708(0xe4)]();},Window_Gab['prototype'][_0xb6a06a(0x1b4)]=function(){const _0x1cc484=_0xb6a06a;Window_Base[_0x1cc484(0x104)][_0x1cc484(0x1b4)]['call'](this);if(this[_0x1cc484(0x1c8)]>0x0){if(this[_0x1cc484(0x1a2)])this['reposition']();}if(this[_0x1cc484(0x1a4)]())this['hide']();else{if(this[_0x1cc484(0x1bf)]){if('EdKNb'!=='EdKNb')return this[_0x1cc484(0x1a2)]=_0x23b113['event'](this['_eventID']),!![];else{if(this['_graphicLoading'][_0x1cc484(0xbb)]>0x0)return;this['refresh']();}}else{if(this[_0x1cc484(0x1d5)]>0x0){if(_0x1cc484(0x1ad)!==_0x1cc484(0x156))this[_0x1cc484(0xd7)](),--this['_showCount'];else{const _0x20fc72=_0x5b4f79(_0x3d2a04['$1']);_0x20fc72<_0x11e901?(_0x387fe0(_0x1cc484(0x174)[_0x1cc484(0x15d)](_0x386b7e,_0x20fc72,_0x1e1d46)),_0x393a13[_0x1cc484(0x1b7)]()):_0x41b608=_0x422b08['max'](_0x20fc72,_0x9b8563);}}else{if(this['contentsOpacity']>0x0)this[_0x1cc484(0xf2)]();else this[_0x1cc484(0x1e5)][_0x1cc484(0xbb)]>0x0?this[_0x1cc484(0x120)]():(this[_0x1cc484(0x1a3)]=![],delete this['_eventID']);}}}},Window_Gab['prototype'][_0xb6a06a(0x1a4)]=function(){const _0xfdcd39=_0xb6a06a;if($gameParty[_0xfdcd39(0x19a)]()&&BattleManager[_0xfdcd39(0xd9)])return!![];return![];},Window_Gab[_0xb6a06a(0x104)][_0xb6a06a(0xd7)]=function(){const _0x40ccc9=_0xb6a06a;this[_0x40ccc9(0x1c8)]+=this[_0x40ccc9(0xd0)]||VisuMZ['GabWindow']['Settings'][_0x40ccc9(0x11a)]['FadeRate'];},Window_Gab[_0xb6a06a(0x104)][_0xb6a06a(0xf2)]=function(){const _0x4cfe15=_0xb6a06a,_0x3f4363=this[_0x4cfe15(0xd0)]||VisuMZ['GabWindow']['Settings'][_0x4cfe15(0x11a)][_0x4cfe15(0x136)],_0x6bcc27=this['_fadeDirOverride']||VisuMZ['GabWindow'][_0x4cfe15(0xfe)][_0x4cfe15(0x11a)][_0x4cfe15(0x102)],_0x4c24fb=this[_0x4cfe15(0x1c8)];this[_0x4cfe15(0x1c8)]-=_0x3f4363;switch(_0x6bcc27['toUpperCase']()[_0x4cfe15(0x11c)]()){case'UP':this['y']-=_0x3f4363;break;case _0x4cfe15(0x189):this['y']+=_0x3f4363;break;case _0x4cfe15(0x1a1):this['x']-=_0x3f4363;break;case _0x4cfe15(0x1b0):this['x']+=_0x3f4363;break;}if(this['contentsOpacity']>0x0)return;if(_0x4c24fb>0x0)this['onFinish']();},Window_Gab[_0xb6a06a(0x104)]['onFinish']=function(){const _0xe34bb=_0xb6a06a;this['_lockedToTarget']=null,this[_0xe34bb(0x118)](),this[_0xe34bb(0xd5)]();},Window_Gab['prototype']['turnOnGabSwitch']=function(){const _0x468c52=_0xb6a06a;$gameSwitches[_0x468c52(0x195)](this[_0x468c52(0xcd)],!![]),this[_0x468c52(0xcd)]=0x0;},Window_Gab[_0xb6a06a(0x104)][_0xb6a06a(0xd5)]=function(){const _0x13f6ae=_0xb6a06a;if(this[_0x13f6ae(0x15e)])this['_jsOnFinish'][_0x13f6ae(0xf5)](this);delete this['_jsOnFinish'];const _0x491c45=VisuMZ[_0x13f6ae(0x16b)][_0x13f6ae(0xfe)][_0x13f6ae(0x11a)];if(_0x491c45[_0x13f6ae(0x198)])_0x491c45['OnFinishJS'][_0x13f6ae(0xf5)](this,this[_0x13f6ae(0x17b)]);},Window_Gab[_0xb6a06a(0x104)][_0xb6a06a(0xdc)]=function(_0x47163f){const _0x3aecd1=_0xb6a06a;if(!_0x47163f)return;if(this['checkDuplicateGab'](_0x47163f))return;this[_0x3aecd1(0x1e5)]['push'](_0x47163f);},Window_Gab['prototype'][_0xb6a06a(0x15c)]=function(_0x1f8866){const _0x42ad2a=_0xb6a06a;if(!_0x1f8866)return;this[_0x42ad2a(0x1b3)](),this[_0x42ad2a(0x1e5)][_0x42ad2a(0x16e)](_0x1f8866);},Window_Gab[_0xb6a06a(0x104)][_0xb6a06a(0x1b3)]=function(){const _0x305f13=_0xb6a06a;this['_gabQueue']=[],this[_0x305f13(0x17b)]=[],this[_0x305f13(0x1d5)]=0x0;},Window_Gab[_0xb6a06a(0x104)][_0xb6a06a(0x192)]=function(_0x4bceaf){const _0x1cc23f=_0xb6a06a;if(!VisuMZ['GabWindow'][_0x1cc23f(0xfe)][_0x1cc23f(0x11a)][_0x1cc23f(0xee)])return![];const _0x4c57f=_0x4bceaf[_0x1cc23f(0x145)];if(_0x4c57f&&_0x4c57f[_0x1cc23f(0x18f)])return![];if(this[_0x1cc23f(0x1b8)](_0x4bceaf))return!![];if(this[_0x1cc23f(0x16a)](_0x4bceaf))return!![];return![];},Window_Gab[_0xb6a06a(0x104)][_0xb6a06a(0x1b8)]=function(_0xa88d48){const _0x5d540f=_0xb6a06a;return JSON[_0x5d540f(0x12e)](this['_currentGab'])===JSON[_0x5d540f(0x12e)](_0xa88d48);},Window_Gab['prototype'][_0xb6a06a(0x16a)]=function(_0x54daff){const _0x4f925d=_0xb6a06a;this['_gabQueue']=this[_0x4f925d(0x1e5)]||[];for(const _0x19981c of this[_0x4f925d(0x1e5)]){const _0x1e6a9b=this[_0x4f925d(0x1e5)][this[_0x4f925d(0x1e5)]['length']-0x1]||{};if(JSON[_0x4f925d(0x12e)](_0x1e6a9b)===JSON[_0x4f925d(0x12e)](_0x54daff))return!![];}return![];},Window_Gab['prototype'][_0xb6a06a(0x120)]=function(){const _0x33b8d3=_0xb6a06a,_0x2b19b8=this[_0x33b8d3(0x1e5)][_0x33b8d3(0x101)]();this[_0x33b8d3(0x1a3)]=!![],this[_0x33b8d3(0x17b)]=_0x2b19b8,this[_0x33b8d3(0xdf)](_0x2b19b8),this['setupLoadGraphic'](),this[_0x33b8d3(0x1bf)]=!![];},Window_Gab[_0xb6a06a(0x104)][_0xb6a06a(0xdf)]=function(_0x5eb638){const _0x198ffc=_0xb6a06a;this['_text']=_0x5eb638[_0x198ffc(0x150)]||'',this['_lines']=this[_0x198ffc(0x1af)]['split'](/[\r\n]+/)[_0x198ffc(0xbb)],this[_0x198ffc(0xc5)]=_0x5eb638[_0x198ffc(0x1bd)]||'none',this[_0x198ffc(0x14e)]=_0x5eb638[_0x198ffc(0x14c)]||'',this[_0x198ffc(0x1e3)]=_0x5eb638['ID']||0x0,this[_0x198ffc(0xe5)]=_0x5eb638[_0x198ffc(0xe7)]||![];const _0x215518=_0x5eb638['Override']||{};this[_0x198ffc(0x14a)]=_0x215518[_0x198ffc(0x151)]||'',this[_0x198ffc(0xcc)]=_0x215518[_0x198ffc(0xf3)]||null,this[_0x198ffc(0xcd)]=_0x215518[_0x198ffc(0x15b)]||0x0,this['_jsOnFinish']=_0x215518['OnFinishJS']||null,this[_0x198ffc(0xbc)]=_0x215518[_0x198ffc(0x17d)],this[_0x198ffc(0x134)]=_0x215518[_0x198ffc(0x18d)],this['_waitTimeOverride']=_0x215518[_0x198ffc(0x10a)],this['_tpcOverride']=_0x215518[_0x198ffc(0x18b)],this[_0x198ffc(0xd0)]=_0x215518[_0x198ffc(0x136)],this[_0x198ffc(0xda)]=_0x215518[_0x198ffc(0x102)],this['_yLocOverride']=_0x215518[_0x198ffc(0xfb)],this['_widthOverride']=_0x215518[_0x198ffc(0xfa)],this['_dimColor1Override']=_0x215518['DimColor1'],this[_0x198ffc(0x171)]=_0x215518[_0x198ffc(0x127)],this[_0x198ffc(0x186)]=_0x215518[_0x198ffc(0x1e7)];if(_0x215518[_0x198ffc(0x14b)]!==undefined&&_0x215518[_0x198ffc(0x14b)]>=0x0){if(_0x198ffc(0x1cb)!==_0x198ffc(0x1cb)){if(!this[_0x198ffc(0x130)])return;let _0x16a567=this['getPictureScale']();const _0x59a143=_0x5d3e72[_0x198ffc(0x12c)](this[_0x198ffc(0x130)][_0x198ffc(0x1a9)]*_0x16a567),_0x45f596=_0x43413f[_0x198ffc(0x12c)](this[_0x198ffc(0x130)][_0x198ffc(0x1bc)]*_0x16a567);let _0x13c0a1=0x0,_0x4ccbe0=0x0;const _0x349897=this['_graphicBitmap'];this[_0x198ffc(0x1ec)][_0x198ffc(0x161)](_0x349897,0x0,0x0,_0x349897[_0x198ffc(0x1a9)],_0x349897[_0x198ffc(0x1bc)],_0x13c0a1,_0x4ccbe0,_0x59a143,_0x45f596);}else{const _0x1ee92c=_0x215518[_0x198ffc(0x14b)],_0x5475f7=$gameParty[_0x198ffc(0x1ae)]()[_0x1ee92c];if(_0x5475f7)this[_0x198ffc(0x186)]=_0x5475f7[_0x198ffc(0x1b2)]();}}this[_0x198ffc(0xc7)]=_0x215518[_0x198ffc(0x194)],this[_0x198ffc(0x13f)]=-0x1,_0x215518['EnemyIndex']!==undefined&&_0x215518['EnemyIndex']>=0x0&&(this['_enemyIndex']=_0x215518[_0x198ffc(0x17a)]);},Window_Gab['prototype'][_0xb6a06a(0xe1)]=function(){const _0x4d5a66=_0xb6a06a,_0x1d5bd8=this[_0x4d5a66(0x14e)];switch(this[_0x4d5a66(0xc5)][_0x4d5a66(0x137)]()['trim']()){case'character':this[_0x4d5a66(0x130)]=ImageManager[_0x4d5a66(0x12d)](_0x1d5bd8),this[_0x4d5a66(0x180)][_0x4d5a66(0x16e)](this[_0x4d5a66(0x130)]),this[_0x4d5a66(0x130)][_0x4d5a66(0xed)](this[_0x4d5a66(0xdd)][_0x4d5a66(0x152)](this,this['_graphicBitmap']));break;case'face':this['_graphicBitmap']=ImageManager[_0x4d5a66(0x111)](_0x1d5bd8),this[_0x4d5a66(0x180)][_0x4d5a66(0x16e)](this[_0x4d5a66(0x130)]),this[_0x4d5a66(0x130)][_0x4d5a66(0xed)](this[_0x4d5a66(0xdd)][_0x4d5a66(0x152)](this,this['_graphicBitmap']));break;case _0x4d5a66(0xd4):this[_0x4d5a66(0x130)]=ImageManager[_0x4d5a66(0x15f)](_0x1d5bd8),this[_0x4d5a66(0x180)][_0x4d5a66(0x16e)](this['_graphicBitmap']),this[_0x4d5a66(0x130)][_0x4d5a66(0xed)](this[_0x4d5a66(0xdd)][_0x4d5a66(0x152)](this,this[_0x4d5a66(0x130)]));break;case _0x4d5a66(0x1ba):this['_graphicBitmap']=ImageManager['loadPicture'](_0x1d5bd8),this[_0x4d5a66(0x180)][_0x4d5a66(0x16e)](this[_0x4d5a66(0x130)]),this[_0x4d5a66(0x130)][_0x4d5a66(0xed)](this[_0x4d5a66(0xdd)][_0x4d5a66(0x152)](this,this[_0x4d5a66(0x130)]));break;default:break;}},Window_Gab[_0xb6a06a(0x104)][_0xb6a06a(0xdd)]=function(_0x2e61f1){const _0x5f2f70=_0xb6a06a;this[_0x5f2f70(0x180)][_0x5f2f70(0x143)](_0x2e61f1);},Window_Gab[_0xb6a06a(0x104)][_0xb6a06a(0x148)]=function(){const _0x43b1af=_0xb6a06a;this[_0x43b1af(0x1ec)][_0x43b1af(0x105)](),this[_0x43b1af(0x1cd)](),this[_0x43b1af(0x183)](),this['reposition'](),this['drawGabBackground'](),this[_0x43b1af(0xc4)](),this[_0x43b1af(0x1bb)](),this[_0x43b1af(0x18c)](),this[_0x43b1af(0x13b)](),this[_0x43b1af(0x105)]();},Window_Gab[_0xb6a06a(0x104)][_0xb6a06a(0x1cd)]=function(){const _0x5c5a75=_0xb6a06a;this['_lockedToTarget']=null;if(this[_0x5c5a75(0x1aa)]()){if(_0x5c5a75(0x12f)!==_0x5c5a75(0x1e4))return!![];else _0x348fae[_0x5c5a75(0x14c)]=_0x4f2900[_0x5c5a75(0x140)](),_0x1e2b5d['ID']=_0x27b67c[_0x5c5a75(0x176)]();}else{if(this[_0x5c5a75(0x1a0)]())return!![];else{if(this[_0x5c5a75(0x146)]())return!![];}}return![];},Window_Gab[_0xb6a06a(0x104)][_0xb6a06a(0x1aa)]=function(){const _0x43b823=_0xb6a06a;if(this[_0x43b823(0x186)]<=0x0)return![];const _0x44304f=$gameActors[_0x43b823(0x19d)](this[_0x43b823(0x186)]);if(!_0x44304f)return![];if(!_0x44304f['isBattleMember']())return![];if(SceneManager[_0x43b823(0x1ac)]())return $gameSystem[_0x43b823(0x13a)]()&&_0x44304f['isAppeared']()&&(this[_0x43b823(0x1a2)]=_0x44304f),!![];else{if(SceneManager[_0x43b823(0xcb)]()){if(_0x43b823(0x193)===_0x43b823(0x193)){if(_0x44304f['index']()===0x0)return this[_0x43b823(0x1a2)]=$gamePlayer,!![];if($gamePlayer[_0x43b823(0x18e)]()['isVisible']())return this['_lockedToTarget']=$gamePlayer[_0x43b823(0x18e)]()[_0x43b823(0x12b)](_0x44304f[_0x43b823(0xc0)]()-0x1),!![];}else{const _0x4fa3f6=this[_0x43b823(0x13d)](),_0x554830=this[_0x43b823(0x1a2)]?this[_0x43b823(0x13d)]():this['dimColor2'](),_0x2bae97=_0x58e104['ceil'](_0x19993b*0.25),_0x5db2fe=_0x29b2b0[_0x43b823(0x12c)](_0x197099*0.75);this['contents']['gradientFillRect'](_0x56ae1d,_0x1239ae,_0x2bae97,_0x64255,_0x4fa3f6,_0x4fa3f6),this[_0x43b823(0x1ec)][_0x43b823(0x1e8)](_0x2bae97,_0x13482c,_0x5db2fe,_0x42c0a4,_0x4fa3f6,_0x554830);}}}return![];},Window_Gab[_0xb6a06a(0x104)][_0xb6a06a(0x1a0)]=function(){const _0x71ac08=_0xb6a06a;if(!SceneManager[_0x71ac08(0xcb)]())return![];if(this[_0x71ac08(0xc7)]>0x0&&!!$gameMap[_0x71ac08(0x10c)](this[_0x71ac08(0xc7)]))return this[_0x71ac08(0x1a2)]=$gameMap[_0x71ac08(0x10c)](this['_eventID']),!![];return![];},Window_Gab[_0xb6a06a(0x104)][_0xb6a06a(0x146)]=function(){const _0x39d4d4=_0xb6a06a;if(!SceneManager[_0x39d4d4(0x1ac)]())return![];if(this[_0x39d4d4(0x13f)]>=0x0){if(_0x39d4d4(0x169)!=='MxIlJ'){if(!_0xdf3621[_0x39d4d4(0xcb)]())return![];if(this[_0x39d4d4(0xc7)]>0x0&&!!_0x9ed6a7[_0x39d4d4(0x10c)](this[_0x39d4d4(0xc7)]))return this['_lockedToTarget']=_0x247dad[_0x39d4d4(0x10c)](this[_0x39d4d4(0xc7)]),!![];return![];}else{const _0x561e67=$gameTroop['members']()[this['_enemyIndex']];if(_0x561e67&&_0x561e67['isAppeared']()){if(_0x39d4d4(0x11b)!==_0x39d4d4(0x1ab))return this[_0x39d4d4(0x1a2)]=_0x561e67,!![];else{let _0x1c62fc=this[_0x39d4d4(0xdb)]*-0x1,_0x544a1b=0x0;this[_0x39d4d4(0x197)]?_0x544a1b=_0x2bab50[_0x39d4d4(0x16b)]['Settings'][_0x39d4d4(0x1b9)][_0x39d4d4(0x19f)]:_0x544a1b=_0x389a61[_0x39d4d4(0x16b)][_0x39d4d4(0xfe)]['Map'][_0x39d4d4(0x1b6)],_0x544a1b-=this['padding'],_0x544a1b=this[_0x39d4d4(0xd3)]||_0x544a1b,this['x']=_0x1c62fc,this['y']=_0x544a1b,this[_0x39d4d4(0x1a2)]=null;}}}}return![];},Window_Gab[_0xb6a06a(0x104)][_0xb6a06a(0x183)]=function(){const _0x6ab761=_0xb6a06a,_0x1dce48=this['padding']||0x0;let _0x432b28=Graphics[_0x6ab761(0x1a9)]+_0x1dce48*0x2;this[_0x6ab761(0x1a9)]=this['adjustWidth'](_0x432b28);let _0x7af38b=this['fittingHeight'](this[_0x6ab761(0xc3)]+0x1);this[_0x6ab761(0x1bc)]=_0x7af38b,this['createContents']();},Window_Gab[_0xb6a06a(0x104)]['adjustWidth']=function(_0x33a1e8){const _0x78a64d=_0xb6a06a,_0x4b029b=VisuMZ[_0x78a64d(0x16b)][_0x78a64d(0xfe)];if(this[_0x78a64d(0x1a2)]){_0x33a1e8=this['textSizeEx'](this[_0x78a64d(0x1af)])['width'],_0x33a1e8+=this[_0x78a64d(0xdb)]*0x2,_0x33a1e8+=this['itemPadding']()*0x4;switch(this[_0x78a64d(0xc5)]['toLowerCase']()['trim']()){case _0x78a64d(0x1a6):_0x33a1e8+=_0x4b029b[_0x78a64d(0x11a)][_0x78a64d(0x1e1)]*0x2,_0x33a1e8-=this[_0x78a64d(0xef)]()*0x2;break;case'face':_0x33a1e8+=ImageManager[_0x78a64d(0xca)];break;case _0x78a64d(0xd4):_0x33a1e8+=_0x4b029b[_0x78a64d(0x11a)][_0x78a64d(0x17e)]*0x2,_0x33a1e8-=this[_0x78a64d(0xef)]()*0x2;break;case _0x78a64d(0x1ba):let _0x55f132=this[_0x78a64d(0x130)]?this[_0x78a64d(0x130)]['width']:0x0;this[_0x78a64d(0xe5)]&&(_0x55f132*=this[_0x78a64d(0x1c0)]());_0x33a1e8+=Math[_0x78a64d(0x12c)](_0x55f132);break;}}return _0x33a1e8;},Window_Gab['prototype'][_0xb6a06a(0x170)]=function(){const _0x5bff3c=_0xb6a06a;if(this[_0x5bff3c(0x1a2)]){if(SceneManager[_0x5bff3c(0x1ac)]())return this[_0x5bff3c(0xc6)]();else{if(SceneManager[_0x5bff3c(0xcb)]())return this[_0x5bff3c(0x162)]();}}this[_0x5bff3c(0x144)]();},Window_Gab[_0xb6a06a(0x104)][_0xb6a06a(0xc6)]=function(){const _0x4fd6d0=_0xb6a06a,_0x28d221=SceneManager[_0x4fd6d0(0x163)];if(!_0x28d221)return;const _0x1d35aa=_0x28d221[_0x4fd6d0(0x1e6)];if(!_0x1d35aa)return;const _0x1b486d=_0x1d35aa[_0x4fd6d0(0x16c)](this[_0x4fd6d0(0x1a2)]);if(!_0x1b486d)return;let _0x1760e6=_0x1b486d['x'],_0x455b00=_0x1b486d['y']-_0x1b486d[_0x4fd6d0(0x1bc)];_0x1760e6+=Math[_0x4fd6d0(0x12c)]((Graphics[_0x4fd6d0(0x1a9)]-Graphics[_0x4fd6d0(0x1c9)])/0x2),_0x455b00+=Math[_0x4fd6d0(0x12c)]((Graphics[_0x4fd6d0(0x1bc)]-Graphics[_0x4fd6d0(0x1d9)])/0x2)+this[_0x4fd6d0(0x14f)]()/0x2,this[_0x4fd6d0(0x160)](_0x1760e6,_0x455b00);},Window_Gab['prototype'][_0xb6a06a(0x162)]=function(){const _0x563567=_0xb6a06a,_0x32125e=this[_0x563567(0x1a2)];this[_0x563567(0x160)](_0x32125e['screenX'](),_0x32125e[_0x563567(0x1be)]());},Window_Gab[_0xb6a06a(0x104)]['repositionToMapEvent']=function(){const _0x1abb5f=_0xb6a06a;let _0x53f8b1=$gameMap[_0x1abb5f(0x10c)](this[_0x1abb5f(0xc7)]);this[_0x1abb5f(0x160)](_0x53f8b1[_0x1abb5f(0x1d1)](),_0x53f8b1[_0x1abb5f(0x1be)]());},Window_Gab[_0xb6a06a(0x104)]['repositionToTarget']=function(_0x3b1af1,_0x143636){const _0x3e3a63=_0xb6a06a;let _0x764e6a=_0x3b1af1-this[_0x3e3a63(0x1a9)]/0x2,_0x445430=_0x143636-this[_0x3e3a63(0x1bc)]-0x20;this['x']=_0x764e6a,this['y']=_0x445430;},Window_Gab[_0xb6a06a(0x104)][_0xb6a06a(0x144)]=function(){const _0x8c05f6=_0xb6a06a;let _0xee694b=this[_0x8c05f6(0xdb)]*-0x1,_0x1f60e9=0x0;this[_0x8c05f6(0x197)]?_0x1f60e9=VisuMZ['GabWindow'][_0x8c05f6(0xfe)]['Battle'][_0x8c05f6(0x19f)]:_0x1f60e9=VisuMZ[_0x8c05f6(0x16b)][_0x8c05f6(0xfe)][_0x8c05f6(0x17c)][_0x8c05f6(0x1b6)],_0x1f60e9-=this[_0x8c05f6(0xdb)],_0x1f60e9=this[_0x8c05f6(0xd3)]||_0x1f60e9,this['x']=_0xee694b,this['y']=_0x1f60e9,this['_lockedToTarget']=null;},Window_Gab[_0xb6a06a(0x104)][_0xb6a06a(0x18c)]=function(){const _0x444c59=_0xb6a06a,_0x4a2b3c=VisuMZ[_0x444c59(0x16b)][_0x444c59(0xfe)];this['contentsOpacity']=0xff,this[_0x444c59(0x1d5)]=this[_0x444c59(0x133)]||_0x4a2b3c[_0x444c59(0x11a)][_0x444c59(0xec)]||0x0;const _0x56b2ee=this[_0x444c59(0x1af)][_0x444c59(0x159)](/\\(.*?)\[(.*?)\]/gi,'');this[_0x444c59(0x1d5)]+=_0x56b2ee[_0x444c59(0xbb)]*(this['_tpcOverride']||_0x4a2b3c[_0x444c59(0x11a)][_0x444c59(0x18b)]||0x0);},Window_Gab[_0xb6a06a(0x104)][_0xb6a06a(0x123)]=function(){const _0x402346=_0xb6a06a;this[_0x402346(0x1e0)](0x0,0x0,this[_0x402346(0x1c1)],this[_0x402346(0x175)]);},Window_Gab['prototype'][_0xb6a06a(0x13d)]=function(){const _0x483b33=_0xb6a06a;if($gameParty[_0x483b33(0x19a)]())return this['_dimColor1Override']||VisuMZ[_0x483b33(0x16b)][_0x483b33(0xfe)][_0x483b33(0x1b9)][_0x483b33(0xe6)];else{if('ANfAH'!==_0x483b33(0x1c7))return this[_0x483b33(0xde)]||VisuMZ[_0x483b33(0x16b)]['Settings'][_0x483b33(0x17c)][_0x483b33(0x177)];else{if(!_0x5fa553)return;if(this[_0x483b33(0x192)](_0x36841e))return;this[_0x483b33(0x1e5)]['push'](_0x224dea);}}},Window_Gab[_0xb6a06a(0x104)][_0xb6a06a(0x1db)]=function(){const _0x355c82=_0xb6a06a;return $gameParty[_0x355c82(0x19a)]()?this['_dimColor2Override']||VisuMZ[_0x355c82(0x16b)][_0x355c82(0xfe)][_0x355c82(0x1b9)]['BattleDimColor2']:this[_0x355c82(0x171)]||VisuMZ[_0x355c82(0x16b)][_0x355c82(0xfe)][_0x355c82(0x17c)][_0x355c82(0x16d)];},Window_Gab[_0xb6a06a(0x104)][_0xb6a06a(0x1e0)]=function(_0x480fd5,_0x29f379,_0x286e7f,_0x1b36d6){const _0x3f587f=_0xb6a06a,_0x127c3a=this['dimColor1'](),_0x245cee=this[_0x3f587f(0x1a2)]?this[_0x3f587f(0x13d)]():this[_0x3f587f(0x1db)](),_0x5078de=Math['ceil'](_0x286e7f*0.25),_0x25fa83=Math[_0x3f587f(0x12c)](_0x286e7f*0.75);this[_0x3f587f(0x1ec)][_0x3f587f(0x1e8)](_0x480fd5,_0x29f379,_0x5078de,_0x1b36d6,_0x127c3a,_0x127c3a),this[_0x3f587f(0x1ec)][_0x3f587f(0x1e8)](_0x5078de,_0x29f379,_0x25fa83,_0x1b36d6,_0x127c3a,_0x245cee);},Window_Gab[_0xb6a06a(0x104)][_0xb6a06a(0xc4)]=function(){const _0x5daa9f=_0xb6a06a;if(this[_0x5daa9f(0x14e)]==='')return;switch(this['_graphicType'][_0x5daa9f(0x137)]()['trim']()){case'face':this[_0x5daa9f(0x132)]();break;case _0x5daa9f(0x1a6):this[_0x5daa9f(0xe9)]();break;case _0x5daa9f(0xd4):this['drawGabSvActor']();break;case _0x5daa9f(0x1ba):this[_0x5daa9f(0x165)]();break;}},Window_Gab['prototype'][_0xb6a06a(0x132)]=function(){const _0xbca1b5=_0xb6a06a,_0x47be67=VisuMZ[_0xbca1b5(0x16b)]['Settings'][_0xbca1b5(0x11a)],_0x129b72=0x0;let _0x6a177a=0x0;const _0xe44c43=ImageManager[_0xbca1b5(0xca)];let _0x79def6=this['innerHeight'];if(!_0x47be67[_0xbca1b5(0x196)]){_0x79def6=Math[_0xbca1b5(0x155)](this[_0xbca1b5(0x175)],ImageManager[_0xbca1b5(0x14d)]);if(this[_0xbca1b5(0x175)]>_0x79def6)_0x6a177a=this[_0xbca1b5(0x14f)]()/0x2;}this[_0xbca1b5(0x149)](this[_0xbca1b5(0x14e)],this['_graphicIndex'],_0x129b72,_0x6a177a,_0xe44c43,_0x79def6);},Window_Gab['prototype']['drawGabCharacter']=function(){const _0x415c32=_0xb6a06a,_0x182ab1=VisuMZ[_0x415c32(0x16b)][_0x415c32(0xfe)][_0x415c32(0x11a)],_0x2b2078=_0x182ab1[_0x415c32(0x1e1)];let _0x594d93=_0x182ab1['CharacterYPos'];_0x182ab1['CenterGraphics']&&(_0x594d93+=(this[_0x415c32(0xc3)]-0x1)*this['lineHeight']()/0x2),this['drawCharacter'](this[_0x415c32(0x14e)],this['_graphicIndex'],_0x2b2078,_0x594d93);},Window_Gab[_0xb6a06a(0x104)][_0xb6a06a(0x1da)]=function(){const _0x33fe52=_0xb6a06a,_0x482398=VisuMZ[_0x33fe52(0x16b)][_0x33fe52(0xfe)][_0x33fe52(0x11a)],_0x5d4797=_0x482398[_0x33fe52(0x17e)];let _0x38e8c1=_0x482398[_0x33fe52(0xf7)];_0x482398[_0x33fe52(0x196)]&&(_0x38e8c1+=(this[_0x33fe52(0xc3)]-0x1)*this[_0x33fe52(0x14f)]()/0x2),this[_0x33fe52(0x108)](this['_graphicName'],_0x5d4797,_0x38e8c1);},Window_Gab[_0xb6a06a(0x104)][_0xb6a06a(0x165)]=function(){const _0x128040=_0xb6a06a;if(!this[_0x128040(0x130)])return;let _0x11ebd8=this[_0x128040(0x1c0)]();const _0x389249=Math['ceil'](this[_0x128040(0x130)]['width']*_0x11ebd8),_0x279ab2=Math[_0x128040(0x12c)](this[_0x128040(0x130)][_0x128040(0x1bc)]*_0x11ebd8);let _0x546b8d=0x0,_0x1b0e01=0x0;const _0x3a1d58=this[_0x128040(0x130)];this[_0x128040(0x1ec)]['blt'](_0x3a1d58,0x0,0x0,_0x3a1d58[_0x128040(0x1a9)],_0x3a1d58['height'],_0x546b8d,_0x1b0e01,_0x389249,_0x279ab2);},Window_Gab[_0xb6a06a(0x104)][_0xb6a06a(0x1c0)]=function(){const _0x4d1eeb=_0xb6a06a;if(!this['_graphicBitmap'])return 0x1;if(this['_stretchPicture']){if(_0x4d1eeb(0x1d7)!==_0x4d1eeb(0x172))return Math['min'](this['innerWidth']/this['_graphicBitmap']['width'],this[_0x4d1eeb(0x175)]/this[_0x4d1eeb(0x130)][_0x4d1eeb(0x1bc)]);else _0x3178e3=_0x3c8ad6['max'](_0x246249,_0x545620);}else{if(_0x4d1eeb(0x109)==='DZGcA')return 0x1;else this['hide']();}},Window_Gab['prototype'][_0xb6a06a(0x1bb)]=function(){const _0x3a6e5e=_0xb6a06a,_0x4002a2=VisuMZ['GabWindow'][_0x3a6e5e(0xfe)];let _0x564774=this[_0x3a6e5e(0xef)]()*0x2;switch(this['_graphicType'][_0x3a6e5e(0x137)]()[_0x3a6e5e(0x11c)]()){case'face':_0x564774+=ImageManager[_0x3a6e5e(0xca)];break;case _0x3a6e5e(0x1a6):_0x564774+=_0x4002a2[_0x3a6e5e(0x11a)][_0x3a6e5e(0x1e1)]*0x2,_0x564774-=this[_0x3a6e5e(0xef)]()*0x2;break;case _0x3a6e5e(0xd4):_0x564774+=_0x4002a2['General'][_0x3a6e5e(0x17e)]*0x2,_0x564774-=this['itemPadding']()*0x2;break;case _0x3a6e5e(0x1ba):let _0x4f0c98=this['_graphicBitmap']?this[_0x3a6e5e(0x130)][_0x3a6e5e(0x1a9)]:0x0;_0x4f0c98*=this['getPictureScale'](),_0x564774+=Math[_0x3a6e5e(0x12c)](_0x4f0c98);break;}const _0x32a464=this['lineHeight']()/0x2;this[_0x3a6e5e(0x10b)](this[_0x3a6e5e(0x1af)],_0x564774,_0x32a464);},Window_Gab[_0xb6a06a(0x104)][_0xb6a06a(0x13b)]=function(){const _0x5bf3ec=_0xb6a06a;this[_0x5bf3ec(0x124)](),this[_0x5bf3ec(0x185)]();},Window_Gab['prototype']['playSound']=function(){const _0xddd587=_0xb6a06a;if(this['_soundName']==='')return;const _0x10b29f={'name':this[_0xddd587(0x14a)],'volume':0x5a,'pitch':0x64,'pan':0x0};AudioManager[_0xddd587(0x10e)](_0x10b29f);},Window_Gab['prototype'][_0xb6a06a(0x185)]=function(){const _0x273489=_0xb6a06a;if(this[_0x273489(0xcc)])this[_0x273489(0xcc)][_0x273489(0xf5)](this);const _0x8471ed=VisuMZ['GabWindow'][_0x273489(0xfe)][_0x273489(0x11a)];if(_0x8471ed['OnDisplayJS'])_0x8471ed[_0x273489(0xf3)][_0x273489(0xf5)](this,this[_0x273489(0x17b)]);},Window_Gab['prototype']['storeGabs']=function(){const _0x1a90cf=_0xb6a06a;this['_battle']?_0x1a90cf(0x1c3)==='TCdMG'?($gameTemp[_0x1a90cf(0x1dc)]=this[_0x1a90cf(0x1e5)]['slice'](),$gameTemp[_0x1a90cf(0x1c6)]=this[_0x1a90cf(0x1c8)]>0x0?this[_0x1a90cf(0x17b)]:{}):_0x3cdf33[_0x1a90cf(0x158)](_0x191ea0):($gameTemp[_0x1a90cf(0x1d4)]=this['_gabQueue']['slice'](),$gameTemp[_0x1a90cf(0x1ce)]=this[_0x1a90cf(0x1c8)]>0x0?this[_0x1a90cf(0x17b)]:{});},Window_Gab[_0xb6a06a(0x104)]['restoreGabs']=function(){const _0x50ecc7=_0xb6a06a;if(this[_0x50ecc7(0x197)])$gameTemp[_0x50ecc7(0x1dc)]&&(this[_0x50ecc7(0x1e5)]=$gameTemp[_0x50ecc7(0x1dc)],delete $gameTemp[_0x50ecc7(0x1dc)]),$gameTemp['_currentBattleGab']&&$gameTemp[_0x50ecc7(0x1c6)][_0x50ecc7(0xbb)]>0x0&&(this[_0x50ecc7(0x1e5)][_0x50ecc7(0x19c)]($gameTemp[_0x50ecc7(0x1c6)]),delete $gameTemp[_0x50ecc7(0x1c6)]);else{if('MRBtW'!==_0x50ecc7(0x1d8))return!![];else{if($gameTemp['_storedMapGabs']){if('chfuJ'===_0x50ecc7(0x1c5)){const _0x3f448c=_0x45627e['_scene'];if(_0x3f448c[_0x50ecc7(0x1cf)])_0x3f448c[_0x50ecc7(0x106)]();}else this[_0x50ecc7(0x1e5)]=$gameTemp['_storedMapGabs'],delete $gameTemp[_0x50ecc7(0x1d4)];}$gameTemp[_0x50ecc7(0x1ce)]&&$gameTemp['_currentMapGab'][_0x50ecc7(0xcf)]>0x0&&(this[_0x50ecc7(0x1e5)][_0x50ecc7(0x19c)]($gameTemp['_currentMapGab']),delete $gameTemp[_0x50ecc7(0x1ce)]);}}};