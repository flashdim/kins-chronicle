//=============================================================================
// VisuStella MZ - Picture Common Events
// VisuMZ_4_PictureCommonEvents.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_PictureCommonEvents = true;

var VisuMZ = VisuMZ || {};
VisuMZ.PictureCommonEvents = VisuMZ.PictureCommonEvents || {};
VisuMZ.PictureCommonEvents.version = 1.00;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.00] [PictureCommonEvents]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Picture_Common_Events_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * With RPG Maker MZ having better touch support, it's important that almost
 * everything can be interacted with such as pictures. Pictures on the map
 * screen can have a Common Event bound to them, which will launch once clicked
 * (assuming no other events are running). These pictures can also change the
 * Common Events bound to them and/or clear them during the game.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Functionality to bind Common Events to pictures.
 * * Change which Common Events run during a playthrough.
 * * Clear Common Events from pictures to remove any bindings.
 * * Clicked pictures can require clicking on only opaque pixels and not
 *   fully transparent ones.
 * * Include hover effects like blend mode changes and tone shifts to help
 *   players understand when a picture has been selected.
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
 * Compatibility Issues
 * ============================================================================
 *
 * This plugin will most likely have compatibility issues with anything that
 * involves clicking pictures. If you are using another plugin that does
 * something with clicking pictures on the map screen, the likelihood of
 * clashing can occur if these plugins utilize the same pictures and we will
 * not be held accountable for that as it is something within your power to
 * change by simply picking different pictures.
 *
 * ============================================================================
 * Instructions
 * ============================================================================
 *
 * In the Plugin Parameters, you will see a list of all the pictures that you
 * can bind to a Common Event. If that number is something other than 0, then
 * the number associated with it will be the Common Event that will run. If you
 * assign it to a Common Event ID that does not exist, you will get an error so
 * please be wary of that.
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
 * System: Change Picture Common Event
 * - Change the Common Event bound to specific picture(s).
 *
 *   Picture ID(s):
 *   - Select which Picture ID(s) to change.
 *
 *   Common Event ID:
 *   - Change the Common Event bound to specific picture(s).
 * 
 *   Custom
 * 
 *     Opaque Only?
 *     - Ignore clicks on transparent pixels and accept only opaque pixels for
 *       this specific picture.
 * 
 *       Error Margin:
 *       - Error margin when clicking for opaque pixels.
 *       - This value determines the radius.
 * 
 *     Change Tone on Hover?
 *     - Change the tone of the picture on hover?
 * 
 *       Hover Tone:
 *       - Tone settings upon hovering.
 *       - Format: [Red, Green, Blue, Gray]
 * 
 *     Blend Mode on Hover:
 *     - The blend mode used when this picture is hovered over.
 *
 * ---
 *
 * System: Clear All Picture Common Events
 * - Clears all Common Event bound to specific picture(s).
 *
 * ---
 *
 * System: Clear Picture Common Event
 * - Clears any Common Event bound to specific picture(s).
 *
 *   Picture ID(s):
 *   - Select which Picture ID(s) to clear.
 *
 * ---
 *
 * System: Erase & Clear All Pictures
 * - Erases all pictures on the screen and clears their Common Events.
 * 
 * ---
 *
 * System: Erase & Clear Picture
 * - Erases and clears any Common Events attached to specific picture(s).
 *
 *   Picture ID(s):
 *   - Select which Picture ID(s) to erase and clear.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Default Global Settings
 * ============================================================================
 *
 * These Plugin Parameters allow you to adjust which Pictures will trigger
 * which Common Events upon being clicked.
 *
 * ---
 * 
 * General
 * 
 *   Opaque Only?
 *   - Ignore clicks on transparent pixels and accept only opaque pixels for
 *     the Plugin Parameter bindings.
 * 
 *     Error Margin:
 *     - Error margin when clicking for opaque pixels.
 *     - This value determines the radius.
 * 
 *   Change Tone on Hover?
 *   - Change the tone of the picture on hover?
 * 
 *     Hover Tone:
 *     - Tone settings upon hovering.
 *     - Format: [Red, Green, Blue, Gray]
 * 
 *   Blend Mode on Hover:
 *   - The blend mode used when this picture is hovered over.
 * 
 * ---
 * 
 * ============================================================================
 * Plugin Parameters: Picture Settings
 * ============================================================================
 *
 * Each of the 100 picture slots are listed in the Plugin Parameters and can
 * be assigned a default setting that is already set up at the start of the
 * game without needing to assign a Common Event to it by a Plugin Command.
 * 
 * You can still overwrite their settings through a Plugin Command.
 * 
 * ---
 *
 * Pictures #1 through #100
 * 
 *   Picture #1:
 *   through
 *   Picture #100:
 *   - Default Common Event settings to bind to this picture ID.
 *
 * ---
 * 
 * Picture Settings
 *
 *   Common Event ID:
 *   - The common event settings you wish to tie to this picture.
 * 
 *   Custom
 * 
 *     Opaque Only?
 *     - Ignore clicks on transparent pixels and accept only opaque pixels for
 *       this specific picture.
 * 
 *       Error Margin:
 *       - Error margin when clicking for opaque pixels.
 *       - This value determines the radius.
 * 
 *     Change Tone on Hover?
 *     - Change the tone of the picture on hover?
 * 
 *       Hover Tone:
 *       - Tone settings upon hovering.
 *       - Format: [Red, Green, Blue, Gray]
 * 
 *     Blend Mode on Hover:
 *     - The blend mode used when this picture is hovered over.
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
 * - Yanfly
 * - Arisu
 * - Olivia
 * - Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.00: September 4, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChangePictureCommonEvent
 * @text System: Change Picture Common Event
 * @desc Change the Common Event bound to specific picture(s).
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which Picture ID(s) to change.
 * @default ["1"]
 *
 * @arg CommonEventID:num
 * @text Common Event ID
 * @type common_event
 * @desc Change the Common Event bound to specific picture(s).
 * @default 0
 *
 * @arg Custom
 *
 * @arg UseGlobal:eval
 * @text Use Global?
 * @parent Custom
 * @type boolean
 * @on Use Global Settings
 * @off Use Custom Settings
 * @desc If this uses Global Settings, 
 * then ignore the options below.
 * @default true
 *
 * @arg OpaqueOnly:eval
 * @text Opaque Only?
 * @parent Custom
 * @type boolean
 * @on Opaque Only
 * @off Allow Transparency
 * @desc Ignore clicks on transparent pixels and accept only
 * opaque pixels for this specific picture.
 * @default true
 *
 * @arg OpaqueErrorMargin:num
 * @text Error Margin
 * @parent OpaqueOnly:eval
 * @type number
 * @min 0
 * @max 10
 * @desc Error margin when clicking for opaque pixels.
 * This value determines the radius.
 * @default 3
 *
 * @arg ChangeTone:eval
 * @text Change Tone on Hover?
 * @parent Custom
 * @type boolean
 * @on Change Tone
 * @off Don't Change
 * @desc Change the tone of the picture on hover?
 * @default true
 *
 * @arg HoverTone:eval
 * @text Hover Tone
 * @parent ChangeTone:eval
 * @desc Tone settings upon hovering.
 * Format: [Red, Green, Blue, Gray]
 * @default [128, 128, 128, 0]
 *
 * @arg BlendMode:num
 * @text Blend Mode on Hover
 * @parent Custom
 * @type select
 * @option Normal
 * @value 0
 * @option Additive
 * @value 1
 * @option Multiply
 * @value 2
 * @option Screen
 * @value 3
 * @desc The blend mode used when this picture is hovered over.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ClearAllPictureCommonEvents
 * @text System: Clear All Picture Common Events
 * @desc Clears all Common Event bound to specific picture(s).
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ClearPictureCommonEvent
 * @text System: Clear Picture Common Event
 * @desc Clears any Common Event bound to specific picture(s).
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which Picture ID(s) to clear.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EraseClearAllPictures
 * @text System: Erase & Clear All Pictures
 * @desc Erases all pictures on the screen and clears their Common Events.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EraseClearPicture
 * @text System: Erase & Clear Picture
 * @desc Erases and clears any Common Events attached to specific picture(s).
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which Picture ID(s) to erase and clear.
 * @default ["1"]
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
 * @param PictureCommonEvents
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param DefaultGlobal:struct
 * @text Default Global Settings
 * @type struct<DefaultGlobal>
 * @desc Default global settings that are used in general.
 * @default {"OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Set_1_to_10
 * @text #1 through #10
 * @parent Default
 *
 * @param Picture1:struct
 * @text Picture #1
 * @parent Set_1_to_10
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture2:struct
 * @text Picture #2
 * @parent Set_1_to_10
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture3:struct
 * @text Picture #3
 * @parent Set_1_to_10
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture4:struct
 * @text Picture #4
 * @parent Set_1_to_10
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture5:struct
 * @text Picture #5
 * @parent Set_1_to_10
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture6:struct
 * @text Picture #6
 * @parent Set_1_to_10
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture7:struct
 * @text Picture #7
 * @parent Set_1_to_10
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture8:struct
 * @text Picture #8
 * @parent Set_1_to_10
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture9:struct
 * @text Picture #9
 * @parent Set_1_to_10
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture10:struct
 * @text Picture #10
 * @parent Set_1_to_10
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Set_11_to_20
 * @text #11 through #20
 * @parent Default
 *
 * @param Picture11:struct
 * @text Picture #11
 * @parent Set_11_to_20
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture12:struct
 * @text Picture #12
 * @parent Set_11_to_20
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture13:struct
 * @text Picture #13
 * @parent Set_11_to_20
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture14:struct
 * @text Picture #14
 * @parent Set_11_to_20
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture15:struct
 * @text Picture #15
 * @parent Set_11_to_20
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture16:struct
 * @text Picture #16
 * @parent Set_11_to_20
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture17:struct
 * @text Picture #17
 * @parent Set_11_to_20
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture18:struct
 * @text Picture #18
 * @parent Set_11_to_20
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture19:struct
 * @text Picture #19
 * @parent Set_11_to_20
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture20:struct
 * @text Picture #20
 * @parent Set_11_to_20
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Set_21_to_30
 * @text #21 through #30
 * @parent Default
 *
 * @param Picture21:struct
 * @text Picture #21
 * @parent Set_21_to_30
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture22:struct
 * @text Picture #22
 * @parent Set_21_to_30
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture23:struct
 * @text Picture #23
 * @parent Set_21_to_30
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture24:struct
 * @text Picture #24
 * @parent Set_21_to_30
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture25:struct
 * @text Picture #25
 * @parent Set_21_to_30
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture26:struct
 * @text Picture #26
 * @parent Set_21_to_30
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture27:struct
 * @text Picture #27
 * @parent Set_21_to_30
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture28:struct
 * @text Picture #28
 * @parent Set_21_to_30
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture29:struct
 * @text Picture #29
 * @parent Set_21_to_30
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture30:struct
 * @text Picture #30
 * @parent Set_21_to_30
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Set_31_to_40
 * @text #31 through #40
 * @parent Default
 *
 * @param Picture31:struct
 * @text Picture #31
 * @parent Set_31_to_40
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture32:struct
 * @text Picture #32
 * @parent Set_31_to_40
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture33:struct
 * @text Picture #33
 * @parent Set_31_to_40
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture34:struct
 * @text Picture #34
 * @parent Set_31_to_40
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture35:struct
 * @text Picture #35
 * @parent Set_31_to_40
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture36:struct
 * @text Picture #36
 * @parent Set_31_to_40
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture37:struct
 * @text Picture #37
 * @parent Set_31_to_40
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture38:struct
 * @text Picture #38
 * @parent Set_31_to_40
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture39:struct
 * @text Picture #39
 * @parent Set_31_to_40
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture40:struct
 * @text Picture #40
 * @parent Set_31_to_40
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Set_41_to_50
 * @text #41 through #50
 * @parent Default
 *
 * @param Picture41:struct
 * @text Picture #41
 * @parent Set_41_to_50
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture42:struct
 * @text Picture #42
 * @parent Set_41_to_50
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture43:struct
 * @text Picture #43
 * @parent Set_41_to_50
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture44:struct
 * @text Picture #44
 * @parent Set_41_to_50
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture45:struct
 * @text Picture #45
 * @parent Set_41_to_50
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture46:struct
 * @text Picture #46
 * @parent Set_41_to_50
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture47:struct
 * @text Picture #47
 * @parent Set_41_to_50
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture48:struct
 * @text Picture #48
 * @parent Set_41_to_50
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture49:struct
 * @text Picture #49
 * @parent Set_41_to_50
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture50:struct
 * @text Picture #50
 * @parent Set_41_to_50
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Set_51_to_60
 * @text #51 through #60
 * @parent Default
 *
 * @param Picture51:struct
 * @text Picture #51
 * @parent Set_51_to_60
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture52:struct
 * @text Picture #52
 * @parent Set_51_to_60
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture53:struct
 * @text Picture #53
 * @parent Set_51_to_60
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture54:struct
 * @text Picture #54
 * @parent Set_51_to_60
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture55:struct
 * @text Picture #55
 * @parent Set_51_to_60
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture56:struct
 * @text Picture #56
 * @parent Set_51_to_60
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture57:struct
 * @text Picture #57
 * @parent Set_51_to_60
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture58:struct
 * @text Picture #58
 * @parent Set_51_to_60
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture59:struct
 * @text Picture #59
 * @parent Set_51_to_60
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture60:struct
 * @text Picture #60
 * @parent Set_51_to_60
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Set_61_to_70
 * @text #61 through #70
 * @parent Default
 *
 * @param Picture61:struct
 * @text Picture #61
 * @parent Set_61_to_70
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture62:struct
 * @text Picture #62
 * @parent Set_61_to_70
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture63:struct
 * @text Picture #63
 * @parent Set_61_to_70
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture64:struct
 * @text Picture #64
 * @parent Set_61_to_70
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture65:struct
 * @text Picture #65
 * @parent Set_61_to_70
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture66:struct
 * @text Picture #66
 * @parent Set_61_to_70
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture67:struct
 * @text Picture #67
 * @parent Set_61_to_70
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture68:struct
 * @text Picture #68
 * @parent Set_61_to_70
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture69:struct
 * @text Picture #69
 * @parent Set_61_to_70
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture70:struct
 * @text Picture #70
 * @parent Set_61_to_70
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Set_71_to_80
 * @text #71 through #80
 * @parent Default
 *
 * @param Picture71:struct
 * @text Picture #71
 * @parent Set_71_to_80
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture72:struct
 * @text Picture #72
 * @parent Set_71_to_80
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture73:struct
 * @text Picture #73
 * @parent Set_71_to_80
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture74:struct
 * @text Picture #74
 * @parent Set_71_to_80
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture75:struct
 * @text Picture #75
 * @parent Set_71_to_80
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture76:struct
 * @text Picture #76
 * @parent Set_71_to_80
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture77:struct
 * @text Picture #77
 * @parent Set_71_to_80
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture78:struct
 * @text Picture #78
 * @parent Set_71_to_80
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture79:struct
 * @text Picture #79
 * @parent Set_71_to_80
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture80:struct
 * @text Picture #80
 * @parent Set_71_to_80
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Set_81_to_90
 * @text #81 through #90
 * @parent Default
 *
 * @param Picture81:struct
 * @text Picture #81
 * @parent Set_81_to_90
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture82:struct
 * @text Picture #82
 * @parent Set_81_to_90
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture83:struct
 * @text Picture #83
 * @parent Set_81_to_90
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture84:struct
 * @text Picture #84
 * @parent Set_81_to_90
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture85:struct
 * @text Picture #85
 * @parent Set_81_to_90
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture86:struct
 * @text Picture #86
 * @parent Set_81_to_90
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture87:struct
 * @text Picture #87
 * @parent Set_81_to_90
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture88:struct
 * @text Picture #88
 * @parent Set_81_to_90
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture89:struct
 * @text Picture #89
 * @parent Set_81_to_90
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture90:struct
 * @text Picture #90
 * @parent Set_81_to_90
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Set_91_to_100
 * @text #91 through #100
 * @parent Default
 *
 * @param Picture91:struct
 * @text Picture #91
 * @parent Set_91_to_100
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture92:struct
 * @text Picture #92
 * @parent Set_91_to_100
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture93:struct
 * @text Picture #93
 * @parent Set_91_to_100
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture94:struct
 * @text Picture #94
 * @parent Set_91_to_100
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture95:struct
 * @text Picture #95
 * @parent Set_91_to_100
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture96:struct
 * @text Picture #96
 * @parent Set_91_to_100
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture97:struct
 * @text Picture #97
 * @parent Set_91_to_100
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture98:struct
 * @text Picture #98
 * @parent Set_91_to_100
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture99:struct
 * @text Picture #99
 * @parent Set_91_to_100
 * @type struct<Picture>
 * @desc The common event settings you wish to tie to this picture.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture100:struct
 * @text Picture #100
 * @parent Set_91_to_100
 * @type struct<Picture>
 * @desc The common event settings you wish to tie to this picture.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
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
 * Default Global Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~DefaultGlobal:
 *
 * @param OpaqueOnly:eval
 * @text Opaque Only?
 * @parent Global
 * @type boolean
 * @on Opaque Only
 * @off Allow Transparency
 * @desc Ignore clicks on transparent pixels and accept only
 * opaque pixels for the Plugin Parameter bindings.
 * @default true
 *
 * @param OpaqueErrorMargin:num
 * @text Error Margin
 * @parent OpaqueOnly:eval
 * @type number
 * @min 0
 * @max 10
 * @desc Error margin when clicking for opaque pixels.
 * This value determines the radius.
 * @default 3
 *
 * @param ChangeTone:eval
 * @text Change Tone on Hover?
 * @parent Global
 * @type boolean
 * @on Change Tone
 * @off Don't Change
 * @desc Change the tone of the picture on hover?
 * @default true
 *
 * @param HoverTone:eval
 * @text Hover Tone
 * @parent ChangeTone:eval
 * @desc Tone settings upon hovering.
 * Format: [Red, Green, Blue, Gray]
 * @default [128, 128, 128, 0]
 *
 * @param BlendMode:num
 * @text Blend Mode on Hover
 * @parent Global
 * @type select
 * @option Normal
 * @value 0
 * @option Additive
 * @value 1
 * @option Multiply
 * @value 2
 * @option Screen
 * @value 3
 * @desc The blend mode used when this picture is hovered over.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Picture Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Picture:
 *
 * @param CommonEventID:num
 * @text Common Event ID
 * @parent NeededData
 * @type common_event
 * @desc The common event settings you wish to tie to this picture.
 * @default 0
 *
 * @param Custom
 *
 * @param UseGlobal:eval
 * @text Use Global?
 * @parent Custom
 * @type boolean
 * @on Use Global Settings
 * @off Use Custom Settings
 * @desc If this uses Global Settings, 
 * then ignore the options below.
 * @default true
 *
 * @param OpaqueOnly:eval
 * @text Opaque Only?
 * @parent Custom
 * @type boolean
 * @on Opaque Only
 * @off Allow Transparency
 * @desc Ignore clicks on transparent pixels and accept only
 * opaque pixels for this specific picture.
 * @default true
 *
 * @param OpaqueErrorMargin:num
 * @text Error Margin
 * @parent OpaqueOnly:eval
 * @type number
 * @min 0
 * @max 10
 * @desc Error margin when clicking for opaque pixels.
 * This value determines the radius.
 * @default 3
 *
 * @param ChangeTone:eval
 * @text Change Tone on Hover?
 * @parent Custom
 * @type boolean
 * @on Change Tone
 * @off Don't Change
 * @desc Change the tone of the picture on hover?
 * @default true
 *
 * @param HoverTone:eval
 * @text Hover Tone
 * @parent ChangeTone:eval
 * @desc Tone settings upon hovering.
 * Format: [Red, Green, Blue, Gray]
 * @default [128, 128, 128, 0]
 *
 * @param BlendMode:num
 * @text Blend Mode on Hover
 * @parent Custom
 * @type select
 * @option Normal
 * @value 0
 * @option Additive
 * @value 1
 * @option Multiply
 * @value 2
 * @option Screen
 * @value 3
 * @desc The blend mode used when this picture is hovered over.
 * @default 0
 *
 */
//=============================================================================

const _0x4aed=['parameters','createPictureCommonEventData','match','return\x200','OpaqueOnly','includes','_pictureContainer','getPictureCommonEventBlendMode','STR','ChangeTone','PictureCommonEvents','constructor','pictureCommonEventData','inBattle','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','toUpperCase','registerCommand','filter','contains','callCommonEvent','isAnyButtonPressed','PictureIDs','opacity','reserveCommonEvent','DefaultGlobal','onMouseExit','NUM','height','ClearAllPictureCommonEvents','prototype','_pictureCommonEventMouseOver','exit','TemplateSettings','ARRAYFUNC','erasePicture','parse','version','DtGBI','UseGlobal','ARRAYNUM','_pictureCommonEvents','bitmap','TlEmy','BlendMode','isAnyPictureCommonEventPressed','initPictureCommonEvents','_pictureId','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','some','ChangePictureCommonEvent','Scene_Map_isAnyButtonPressed','CommonEventID','status','OpaqueErrorMargin','isPictureCommonEventPressed','ARRAYJSON','Picture%1','UCXnF','clearPictureCommonEventSettings','onClick','round','ConvertParams','isMapTouchOk','pictureCommonEvent','isBusy','doesPictureCommonEventChangeTone','EVAL','hasCommonEvent','HoverTone','makeDeepCopy','Settings','ARRAYSTR','EraseClearPicture','updatePictureCommonEventMouseOver','setPictureCommonEventSettings','map','updateOther','fhMwF','applyInverse','_frame','Game_System_initialize','checkCommonEventOpaqueErrorMargin','ltDeP','getPictureCommonEventHoverTone','isPictureCommonEventOpaqueOnly','isClickEnabled','ARRAYSTRUCT','setColorTone','initialize','isBeingTouched','onMouseEnter','getPictureCommonEventErrorMargin','ftziH','name','gXinN','isPressed','max','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','_spriteset','Sprite_Picture_updateOther','checkCommonEventOpaqueOnly','call','description','sSpps','picture','trim','anchor','TMioQ','blendMode','format','width','JCPHe'];(function(_0x5e420e,_0x4aed69){const _0xdf84e4=function(_0x24cbf6){while(--_0x24cbf6){_0x5e420e['push'](_0x5e420e['shift']());}};_0xdf84e4(++_0x4aed69);}(_0x4aed,0x1f0));const _0xdf84=function(_0x5e420e,_0x4aed69){_0x5e420e=_0x5e420e-0x0;let _0xdf84e4=_0x4aed[_0x5e420e];return _0xdf84e4;};var label=_0xdf84('0x4a'),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0xdf84('0x51')](function(_0x185b14){return _0x185b14[_0xdf84('0x4')]&&_0x185b14[_0xdf84('0x36')][_0xdf84('0x45')]('['+label+']');})[0x0];VisuMZ[label][_0xdf84('0x16')]=VisuMZ[label][_0xdf84('0x16')]||{},VisuMZ[_0xdf84('0xd')]=function(_0xd793a0,_0x5abaae){for(const _0x370ca3 in _0x5abaae){if(_0xdf84('0x65')!==_0xdf84('0x1d')){if(_0x370ca3[_0xdf84('0x42')](/(.*):(.*)/i)){const _0x5c67fc=String(RegExp['$1']),_0xeef918=String(RegExp['$2'])[_0xdf84('0x4f')]()[_0xdf84('0x39')]();let _0x65eedf,_0x2fb362,_0x44168c;switch(_0xeef918){case _0xdf84('0x5a'):_0x65eedf=_0x5abaae[_0x370ca3]!==''?Number(_0x5abaae[_0x370ca3]):0x0;break;case _0xdf84('0x67'):_0x2fb362=_0x5abaae[_0x370ca3]!==''?JSON[_0xdf84('0x63')](_0x5abaae[_0x370ca3]):[],_0x65eedf=_0x2fb362[_0xdf84('0x1b')](_0x5f3d90=>Number(_0x5f3d90));break;case _0xdf84('0x12'):_0x65eedf=_0x5abaae[_0x370ca3]!==''?eval(_0x5abaae[_0x370ca3]):null;break;case'ARRAYEVAL':_0x2fb362=_0x5abaae[_0x370ca3]!==''?JSON['parse'](_0x5abaae[_0x370ca3]):[],_0x65eedf=_0x2fb362[_0xdf84('0x1b')](_0x4b077e=>eval(_0x4b077e));break;case'JSON':_0x65eedf=_0x5abaae[_0x370ca3]!==''?JSON[_0xdf84('0x63')](_0x5abaae[_0x370ca3]):'';break;case _0xdf84('0x7'):_0x2fb362=_0x5abaae[_0x370ca3]!==''?JSON['parse'](_0x5abaae[_0x370ca3]):[],_0x65eedf=_0x2fb362[_0xdf84('0x1b')](_0x57d5be=>JSON[_0xdf84('0x63')](_0x57d5be));break;case'FUNC':_0x65eedf=_0x5abaae[_0x370ca3]!==''?new Function(JSON[_0xdf84('0x63')](_0x5abaae[_0x370ca3])):new Function(_0xdf84('0x43'));break;case _0xdf84('0x61'):_0x2fb362=_0x5abaae[_0x370ca3]!==''?JSON['parse'](_0x5abaae[_0x370ca3]):[],_0x65eedf=_0x2fb362[_0xdf84('0x1b')](_0x47cfac=>new Function(JSON[_0xdf84('0x63')](_0x47cfac)));break;case _0xdf84('0x48'):_0x65eedf=_0x5abaae[_0x370ca3]!==''?String(_0x5abaae[_0x370ca3]):'';break;case _0xdf84('0x17'):_0x2fb362=_0x5abaae[_0x370ca3]!==''?JSON[_0xdf84('0x63')](_0x5abaae[_0x370ca3]):[],_0x65eedf=_0x2fb362[_0xdf84('0x1b')](_0x297ff7=>String(_0x297ff7));break;case'STRUCT':_0x44168c=_0x5abaae[_0x370ca3]!==''?JSON['parse'](_0x5abaae[_0x370ca3]):{},_0x65eedf=VisuMZ[_0xdf84('0xd')]({},_0x44168c);break;case _0xdf84('0x26'):_0x2fb362=_0x5abaae[_0x370ca3]!==''?JSON[_0xdf84('0x63')](_0x5abaae[_0x370ca3]):[],_0x65eedf=_0x2fb362['map'](_0x3f7a99=>VisuMZ[_0xdf84('0xd')]({},JSON[_0xdf84('0x63')](_0x3f7a99)));break;default:continue;}_0xd793a0[_0x5c67fc]=_0x65eedf;}}else{function _0x4ab421(){_0x2cbd16['ConvertParams'](_0x178456,_0x16c902);const _0x2c35df=_0x2973e0[_0xdf84('0x55')];for(const _0x13af67 of _0x2c35df){_0x498f86['clearPictureCommonEventSettings'](_0x13af67);}}}}return _0xd793a0;},(_0x35f741=>{const _0x3dea10=_0x35f741[_0xdf84('0x2d')];for(const _0x40d987 of dependencies){if(!Imported[_0x40d987]){alert(_0xdf84('0x4e')[_0xdf84('0x3d')](_0x3dea10,_0x40d987)),SceneManager[_0xdf84('0x5f')]();break;}}const _0x34169d=_0x35f741[_0xdf84('0x36')];if(_0x34169d[_0xdf84('0x42')](/\[Version[ ](.*?)\]/i)){const _0x2c6548=Number(RegExp['$1']);_0x2c6548!==VisuMZ[label][_0xdf84('0x64')]&&(alert(_0xdf84('0x6f')[_0xdf84('0x3d')](_0x3dea10,_0x2c6548)),SceneManager['exit']());}if(_0x34169d[_0xdf84('0x42')](/\[Tier[ ](\d+)\]/i)){const _0x453a27=Number(RegExp['$1']);_0x453a27<tier?(alert(_0xdf84('0x31')[_0xdf84('0x3d')](_0x3dea10,_0x453a27,tier)),SceneManager[_0xdf84('0x5f')]()):tier=Math[_0xdf84('0x30')](_0x453a27,tier);}VisuMZ[_0xdf84('0xd')](VisuMZ[label][_0xdf84('0x16')],_0x35f741[_0xdf84('0x40')]);})(pluginData),PluginManager[_0xdf84('0x50')](pluginData[_0xdf84('0x2d')],_0xdf84('0x1'),_0x236a57=>{VisuMZ['ConvertParams'](_0x236a57,_0x236a57);const _0x2e9f9f=_0x236a57[_0xdf84('0x55')]||[0x1],_0x35872b={'CommonEventID':_0x236a57[_0xdf84('0x3')],'UseGlobal':_0x236a57['UseGlobal'],'OpaqueOnly':_0x236a57[_0xdf84('0x44')],'OpaqueErrorMargin':_0x236a57['OpaqueErrorMargin'],'ChangeTone':_0x236a57[_0xdf84('0x49')],'HoverTone':_0x236a57[_0xdf84('0x14')],'BlendMode':_0x236a57['BlendMode']};if(_0x35872b['UseGlobal']){const _0x3cec8f=VisuMZ[_0xdf84('0x4a')][_0xdf84('0x16')]['DefaultGlobal'];_0x35872b[_0xdf84('0x44')]=_0x3cec8f['OpaqueOnly'],_0x35872b[_0xdf84('0x5')]=_0x3cec8f['OpaqueErrorMargin'],_0x35872b[_0xdf84('0x49')]=_0x3cec8f['ChangeTone'],_0x35872b[_0xdf84('0x14')]=_0x3cec8f[_0xdf84('0x14')],_0x35872b[_0xdf84('0x6b')]=_0x3cec8f[_0xdf84('0x6b')];}for(const _0x5946b5 of _0x2e9f9f){$gameSystem[_0xdf84('0x1a')](_0x5946b5,JsonEx[_0xdf84('0x15')](_0x35872b));}}),PluginManager['registerCommand'](pluginData[_0xdf84('0x2d')],_0xdf84('0x5c'),_0x186528=>{for(let _0x372443=0x1;_0x372443<=0x64;_0x372443++){if('apFgC'==='HtVLt'){function _0x41dfb6(){this['setColorTone'](_0x4fa273['getPictureCommonEventHoverTone'](this['_pictureId'])||[0x0,0x0,0x0,0x0]);}}else $gameSystem[_0xdf84('0xa')](_0x372443);}}),PluginManager[_0xdf84('0x50')](pluginData[_0xdf84('0x2d')],'ClearPictureCommonEvent',_0x5ab84d=>{VisuMZ['ConvertParams'](_0x5ab84d,_0x5ab84d);const _0x4b2ebe=_0x5ab84d[_0xdf84('0x55')];for(const _0x700bdc of _0x4b2ebe){$gameSystem['clearPictureCommonEventSettings'](_0x700bdc);}}),PluginManager[_0xdf84('0x50')](pluginData[_0xdf84('0x2d')],'EraseClearAllPictures',_0x50b66c=>{$gameSystem['_pictureCommonEvents']={};for(let _0x1b52c0=0x1;_0x1b52c0<=0x64;_0x1b52c0++){if(_0xdf84('0x3b')!==_0xdf84('0x3b')){function _0x2c0626(){if(!_0x458452[_0xdf84('0xe')]())return![];}}else $gameScreen[_0xdf84('0x62')](_0x1b52c0);}}),PluginManager[_0xdf84('0x50')](pluginData[_0xdf84('0x2d')],_0xdf84('0x18'),_0x2c7f59=>{VisuMZ[_0xdf84('0xd')](_0x2c7f59,_0x2c7f59);const _0x46e98b=_0x2c7f59['PictureIDs'];for(const _0x4789f1 of _0x46e98b){$gameScreen[_0xdf84('0x62')](_0x4789f1),$gameSystem[_0xdf84('0xa')](_0x4789f1);}}),VisuMZ[_0xdf84('0x4a')]['Game_System_initialize']=Game_System[_0xdf84('0x5d')][_0xdf84('0x28')],Game_System[_0xdf84('0x5d')][_0xdf84('0x28')]=function(){VisuMZ[_0xdf84('0x4a')][_0xdf84('0x20')]['call'](this),this[_0xdf84('0x6d')]();},Game_System['prototype'][_0xdf84('0x6d')]=function(){this[_0xdf84('0x68')]={};for(let _0x1458e4=0x1;_0x1458e4<=0x64;_0x1458e4++){this[_0xdf84('0x41')](_0x1458e4);}},VisuMZ['PictureCommonEvents'][_0xdf84('0x60')]=function(){return{'CommonEventID':0x0,'UseGlobal':!![],'OpaqueOnly':!![],'OpaqueErrorMargin':0x3,'ChangeTone':!![],'HoverTone':[0x80,0x80,0x80,0x0],'BlendMode':0x0};},Game_System[_0xdf84('0x5d')][_0xdf84('0x41')]=function(_0x2988aa){const _0xfe39ba=VisuMZ['PictureCommonEvents']['Settings'],_0x61811f=VisuMZ[_0xdf84('0x4a')][_0xdf84('0x16')][_0xdf84('0x58')],_0x409c64=_0xdf84('0x8')[_0xdf84('0x3d')](_0x2988aa),_0x408fd0=JsonEx[_0xdf84('0x15')](_0xfe39ba[_0x409c64])||VisuMZ[_0xdf84('0x4a')][_0xdf84('0x60')]();this['_pictureCommonEvents'][_0x2988aa]=_0x408fd0;if(!_0x408fd0[_0xdf84('0x66')])return;_0x408fd0[_0xdf84('0x44')]=_0x61811f[_0xdf84('0x44')],_0x408fd0['OpaqueErrorMargin']=_0x61811f[_0xdf84('0x5')],_0x408fd0[_0xdf84('0x49')]=_0x61811f[_0xdf84('0x49')],_0x408fd0['HoverTone']=_0x61811f[_0xdf84('0x14')],_0x408fd0[_0xdf84('0x6b')]=_0x61811f[_0xdf84('0x6b')];},Game_System['prototype'][_0xdf84('0x4c')]=function(_0x97c8f9){if(this[_0xdf84('0x68')]===undefined){if(_0xdf84('0x2c')===_0xdf84('0x2e')){function _0x4d6466(){_0x175e60[_0xdf84('0x4a')][_0xdf84('0x20')]['call'](this),this[_0xdf84('0x6d')]();}}else this[_0xdf84('0x6d')]();}return this[_0xdf84('0x68')][_0x97c8f9]===undefined&&this[_0xdf84('0x41')](_0x97c8f9),this[_0xdf84('0x68')][_0x97c8f9];},Game_System[_0xdf84('0x5d')][_0xdf84('0xf')]=function(_0x2efade){if(this['_pictureCommonEvents']===undefined)this[_0xdf84('0x6d')]();return this['pictureCommonEventData'](_0x2efade)[_0xdf84('0x3')];},Game_System[_0xdf84('0x5d')][_0xdf84('0xa')]=function(_0x2b2d7f){this['_pictureCommonEvents'][_0x2b2d7f]=VisuMZ[_0xdf84('0x4a')][_0xdf84('0x60')]();},Game_System[_0xdf84('0x5d')][_0xdf84('0x1a')]=function(_0x5286b7,_0x155bcf){if(this[_0xdf84('0x68')]===undefined)this[_0xdf84('0x6d')]();this[_0xdf84('0x68')][_0x5286b7]=_0x155bcf;},Game_System[_0xdf84('0x5d')][_0xdf84('0x24')]=function(_0x350bb9){if(this[_0xdf84('0x68')]===undefined)this[_0xdf84('0x6d')]();return this[_0xdf84('0x4c')](_0x350bb9)[_0xdf84('0x44')];},Game_System['prototype'][_0xdf84('0x2b')]=function(_0x5a90e9){if(this[_0xdf84('0x68')]===undefined)this[_0xdf84('0x6d')]();return this[_0xdf84('0x4c')](_0x5a90e9)[_0xdf84('0x5')];},Game_System[_0xdf84('0x5d')][_0xdf84('0x11')]=function(_0x14328f){if(this[_0xdf84('0x68')]===undefined)this[_0xdf84('0x6d')]();return this[_0xdf84('0x4c')](_0x14328f)[_0xdf84('0x49')];},Game_System['prototype'][_0xdf84('0x23')]=function(_0x401368){if(this[_0xdf84('0x68')]===undefined)this[_0xdf84('0x6d')]();return this[_0xdf84('0x4c')](_0x401368)['HoverTone'];},Game_System[_0xdf84('0x5d')][_0xdf84('0x47')]=function(_0xd9212d){if(this[_0xdf84('0x68')]===undefined)this['initPictureCommonEvents']();return this['pictureCommonEventData'](_0xd9212d)[_0xdf84('0x6b')];},VisuMZ['PictureCommonEvents'][_0xdf84('0x2')]=Scene_Map[_0xdf84('0x5d')]['isAnyButtonPressed'],Scene_Map['prototype'][_0xdf84('0x54')]=function(){return VisuMZ[_0xdf84('0x4a')][_0xdf84('0x2')]['call'](this)||this[_0xdf84('0x32')]['isAnyPictureCommonEventPressed']();},Sprite_Picture['prototype'][_0xdf84('0x25')]=function(){if($gameMessage[_0xdf84('0x10')]())return![];if($gameParty[_0xdf84('0x4d')]())return![];if(!this['visible'])return![];if(this[_0xdf84('0x56')]<=0x0)return![];const _0x2865c4=SceneManager['_scene'];if(_0x2865c4&&_0x2865c4[_0xdf84('0x4b')]===Scene_Map){if(_0xdf84('0x6a')!==_0xdf84('0x9')){if(!_0x2865c4['isMapTouchOk']())return![];}else{function _0x9e69f(){_0x3b60ae[_0xdf84('0x62')](_0x531a4b);}}}return this['picture']()&&$gameSystem['pictureCommonEvent'](this[_0xdf84('0x6e')])>0x0;},Sprite_Picture[_0xdf84('0x5d')]['checkCommonEventOpaqueOnly']=function(){if(!$gameSystem[_0xdf84('0x24')](this['_pictureId']))return!![];const _0x58d87e=new Point(TouchInput['x'],TouchInput['y']),_0x528438=this['worldTransform'][_0xdf84('0x1e')](_0x58d87e);let _0x3e6d75=Math[_0xdf84('0xc')](_0x528438['x']+this[_0xdf84('0x1f')]['x']+this[_0xdf84('0x3a')]['x']*this[_0xdf84('0x69')][_0xdf84('0x3e')]),_0x4baf18=Math[_0xdf84('0xc')](_0x528438['y']+this[_0xdf84('0x1f')]['y']+this[_0xdf84('0x3a')]['y']*this['bitmap'][_0xdf84('0x5b')]);return this[_0xdf84('0x21')](_0x3e6d75,_0x4baf18);},Sprite_Picture['prototype'][_0xdf84('0x21')]=function(_0x14ceea,_0x5979c8){const _0x3dcaee=$gameSystem['getPictureCommonEventErrorMargin'](this[_0xdf84('0x6e')]),_0x5db352=new Rectangle(0x0,0x0,this[_0xdf84('0x69')][_0xdf84('0x3e')],this[_0xdf84('0x69')][_0xdf84('0x5b')]);for(let _0x52aecc=-_0x3dcaee;_0x52aecc<=_0x3dcaee;_0x52aecc++){for(let _0xd9717a=-_0x3dcaee;_0xd9717a<=_0x3dcaee;_0xd9717a++){if(_0xdf84('0x3f')===_0xdf84('0x22')){function _0x2da146(){if(this[_0xdf84('0x68')]===_0x190f67)this[_0xdf84('0x6d')]();return this[_0xdf84('0x4c')](_0x13baf0)[_0xdf84('0x14')];}}else{const _0x3b5ff4=_0x14ceea+_0x52aecc,_0x2f0d77=_0x5979c8+_0xd9717a;if(!_0x5db352[_0xdf84('0x52')](_0x3b5ff4,_0x2f0d77))continue;const _0x1befab=this[_0xdf84('0x69')]['getAlphaPixel'](_0x3b5ff4,_0x2f0d77);if(_0x1befab>0x0)return!![];}}}return![];},Sprite_Picture[_0xdf84('0x5d')][_0xdf84('0x29')]=function(){const _0x1936ff=Sprite_Clickable[_0xdf84('0x5d')][_0xdf84('0x29')][_0xdf84('0x35')](this);return _0x1936ff&&this[_0xdf84('0x34')]();},Sprite_Picture['prototype'][_0xdf84('0x2a')]=function(){Sprite_Clickable[_0xdf84('0x5d')]['onMouseEnter'][_0xdf84('0x35')](this);if(!this[_0xdf84('0x13')]())return;this['_pictureCommonEventMouseOver']=!![];},Sprite_Picture['prototype'][_0xdf84('0x59')]=function(){Sprite_Clickable[_0xdf84('0x5d')]['onMouseExit'][_0xdf84('0x35')](this);if(!this[_0xdf84('0x13')]())return;this[_0xdf84('0x5e')]=![];},Sprite_Picture[_0xdf84('0x5d')][_0xdf84('0xb')]=function(){Sprite_Clickable[_0xdf84('0x5d')][_0xdf84('0xb')][_0xdf84('0x35')](this),this[_0xdf84('0x53')]();},Sprite_Picture[_0xdf84('0x5d')][_0xdf84('0x53')]=function(){if(!this[_0xdf84('0x13')]())return;if(!this[_0xdf84('0x34')]())return;const _0x4f51bf=$gameSystem[_0xdf84('0xf')](this[_0xdf84('0x6e')]);$gameTemp[_0xdf84('0x57')](_0x4f51bf),this[_0xdf84('0x59')]();},Sprite_Picture[_0xdf84('0x5d')]['hasCommonEvent']=function(){const _0x2e84f6=$gameSystem[_0xdf84('0xf')](this[_0xdf84('0x6e')]);return _0x2e84f6>0x0;},VisuMZ[_0xdf84('0x4a')][_0xdf84('0x33')]=Sprite_Picture['prototype'][_0xdf84('0x1c')],Sprite_Picture[_0xdf84('0x5d')]['updateOther']=function(){VisuMZ[_0xdf84('0x4a')][_0xdf84('0x33')]['call'](this),this[_0xdf84('0x19')]();},Sprite_Picture[_0xdf84('0x5d')][_0xdf84('0x19')]=function(){if(!this[_0xdf84('0x5e')])return;this[_0xdf84('0x3c')]=$gameSystem[_0xdf84('0x47')](this['_pictureId'])||0x0;if($gameSystem[_0xdf84('0x11')](this['_pictureId'])){if(_0xdf84('0x37')!=='KSzxJ')this[_0xdf84('0x27')]($gameSystem[_0xdf84('0x23')](this[_0xdf84('0x6e')])||[0x0,0x0,0x0,0x0]);else{function _0x2f0a99(){this[_0xdf84('0x41')](_0x4406f1);}}}},Sprite_Picture[_0xdf84('0x5d')][_0xdf84('0x6')]=function(){if(!this[_0xdf84('0x38')]())return![];if(!this[_0xdf84('0x2f')]())return![];if($gameSystem[_0xdf84('0xf')](this[_0xdf84('0x6e')])<=0x0)return![];if(!this['checkCommonEventOpaqueOnly']())return![];return!![];},Spriteset_Base[_0xdf84('0x5d')][_0xdf84('0x6c')]=function(){return this[_0xdf84('0x46')]['children'][_0xdf84('0x0')](_0x208a5b=>_0x208a5b[_0xdf84('0x6')]());};