//=============================================================================
// VisuStella MZ - Menu Cursor
// VisuMZ_4_MenuCursor.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_MenuCursor = true;

var VisuMZ = VisuMZ || {};
VisuMZ.MenuCursor = VisuMZ.MenuCursor || {};
VisuMZ.MenuCursor.version = 1.05;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.05] [MenuCursor]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Menu_Cursor_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Add a menu cursor that uses an icon or an image from the pictures or system
 * folder to help the player find out which windows are active quicker. The
 * subtle movements of a waving cursor can do wonders to grabbing the player's
 * attention to speed up the process of directing player focus.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Use icons, pictures, or system images as the menu cursor.
 * * Decide on how the cursor is anchored and positioned with offsets to fine
 *   tune its location.
 * * Want to animate the cursor? You can do so by following a specific image
 *   format and name schema.
 * * Oscillate the cursor back and forth from a left to right horizontal bounce
 *   or an up to down vertical bounce. Or if you want, just don't have any kind
 *   of oscillation at all!
 * * Alter the menu cursor mid-game through Plugin Commands, too!
 * * Automatically pad in-game windows to accommodate for cursor oscillation.
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
 * Animated Menu Cursor Instructions
 * ============================================================================
 *
 * Save your animated picture into your game project's img/pictures/ folder or
 * the img/system/ folder depending on which you want to load from.
 * 
 * The filename must be named with the following format:
 *
 * filename[HxV]
 *
 * Replace H in the filename with the number of horizontal cells it has.
 * Replace V in the filename with the number of vertical cells it has.
 * The number of total cells it has available is equal the multiplicative
 * product of the horizontal and vertical cells.
 *
 * For example:
 *
 * "Cursor_Blue[3x2]" will have 3 horizontal cells and 2 vertical cells. This
 * means there are a total of 6 cells that will be used for animating.
 *
 * Animations will be played from left to right, then up to down so please
 * arrange them as such. For example, 4x5 will play like this:
 *
 *  1  2  3  4
 *  5  6  7  8
 *  9 10 11 12
 * 13 14 15 16
 * 17 18 19 20
 *
 * Keep this in mind as you format your animated menu cursor.
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
 * === Menu Cursor Plugin Commands ===
 * 
 * ---
 *
 * Menu Cursor: Change Settings
 * - Changes the settings for the menu cursor's appearance.
 *
 *   Appearance Type:
 *   - Select the appearance type for the menu cursor.
 *
 *     Icon Index:
 *     - If "icon" is selected as the appearance type, use this icon as
 *       the cursor.
 *
 *     Picture Filename:
 *     - If "picture" is selected as the appearance type, use this image from
 *       img/pictures/ as the cursor.
 *
 *     System Filename:
 *     - If "system" is selected as the appearance type, use this image from
 *       img/system/ as the cursor.
 *
 *     Frame Delay:
 *     - The frame delay for any animated "picture" or "system" cursors before
 *       moving onto the next frame.
 * 
 *   Anchor:
 *
 *     Anchor X:
 *     Anchor Y:
 *     - Select the position to determine where the cursor's Anchor
 *       is located.
 * 
 *   Position:
 *
 *     Position X:
 *     Position Y:
 *     - Select the placement to determine where the cursor's Position
 *       is located.
 * 
 *   Offset:
 * 
 *     Offset X:
 *     Offset Y:
 *     - Select how much to offset the cursor's X/Y position by.
 * 
 *   Wave:
 * 
 *     Wave Type:
 *     - Determine how the cursor moves while active.
 * 
 *     Speed:
 *     - Select how fast the cursor oscillates.
 *     - Lower is slower. Higher is faster.
 * 
 *     Distance:
 *     - Select how far the cursor sprite will oscillate from its origin.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Menu Cursor Settings
 * ============================================================================
 *
 * This is where you can change the settings for the menu cursor.
 *
 * ---
 *
 * Appearance Type
 * 
 *   Appearance Type:
 *   - Select the appearance type for the menu cursor.
 *     - Icon - Uses an icon as the cursor
 *     - Picture - Uses a file from img/pictures/ as the cursor
 *     - System - Uses a file from img/system/ as the cursor
 * 
 *   Icon Index:
 *   - If "icon" is selected as the appearance type, use this icon as
 *     the cursor.
 * 
 *   Picture Filename:
 *   - If "picture" is selected as the appearance type, use this image from
 *     img/pictures/ as the cursor.
 * 
 *   System Filename:
 *   - If "system" is selected as the appearance type, use this image from
 *     img/system/ as the cursor.
 * 
 *   Frame Delay:
 *   - The frame delay for any animated "picture" or "system" cursors before
 *     moving onto the next frame.
 *
 * ---
 *
 * Anchor
 * 
 *   Anchor X:
 *   Anchor Y:
 *   - Select the position to determine where the cursor's Anchor X/Y
 *     is located.
 *
 * ---
 *
 * Position
 * 
 *   Position X:
 *   Position Y:
 *   - Select the placement to determine where the cursor's Position X/Y
 *     is located.
 *
 * ---
 *
 * Offset
 * 
 *   Offset X:
 *   Offset Y:
 *   - Select how much to offset the cursor's X position by.
 *     - X: Negative numbers go left. Positive numbers go right.
 *     - Y: Negative numbers go up. Positive numbers go down.
 *
 * ---
 *
 * Wave
 * 
 *   Wave Type:
 *   - Determine how the cursor moves while active.
 *     - Horizontal - Cursor oscillates left and right
 *     - Vertical - Cursor oscillates up and down
 *     - None - Cursor does not oscillate.
 * 
 *   Speed:
 *   - Select how fast the cursor oscillates.
 *   - Lower is slower. Higher is faster.
 * 
 *   Distance:
 *   - Select how far the cursor sprite will oscillate from its origin.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Blacklist Settings
 * ============================================================================
 * 
 * The menu cursor will not appear in these windows.
 * 
 * ---
 * 
 * Settings
 * 
 *   Window Blacklist:
 *   - Insert the names of the windows' constructors here
 *   - Example: Window_ItemCategory
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Padding Settings
 * ============================================================================
 *
 * Make some windows more padded to accommodate for the menu cursor's
 * oscillation. Because of the oscillation, the cursor would sometimes go over
 * the displayed text. These settings help pad the individual entries and shift
 * over the text to make room for the cursor to move back and forth at.
 *
 * ---
 *
 * Window Padding Settings
 * 
 *   All Windows:
 *   - How much extra item padding do you want for all windows?
 * 
 *   Window_MenuCommand:
 *   Window_MenuStatus:
 *   Window_MenuActor:
 *   Window_ItemCategory:
 *   Window_ItemList:
 *   Window_SkillType:
 *   Window_SkillList:
 *   Window_EquipCommand:
 *   Window_EquipSlot:
 *   Window_EquipItem:
 *   Window_Options:
 *   Window_SavefileList:
 *   Window_ShopCommand:
 *   Window_ShopBuy:
 *   Window_ShopSell:
 *   Window_NameInput:
 *   Window_ChoiceList:
 *   Window_EventItem:
 *   Window_PartyCommand:
 *   Window_ActorCommand:
 *   Window_BattleStatus:
 *   Window_BattleActor:
 *   Window_BattleEnemy:
 *   Window_BattleSkill:
 *   Window_BattleItem:
 *   Window_TitleCommand:
 *   Window_GameEnd:
 *   Window_DebugRange:
 *   Window_DebugEdit:
 *   Window_CommonEventMenuList:
 *   Window_QuestCommand:
 *   Window_QuestList:
 *   - How much extra item padding do you want for this window?
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
 * * Harmless
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.05: February 5, 2021
 * * Documentation Update!
 * ** Help file updated for removed feature.
 * * Feature Update!
 * ** "Window_NumberInput" for Window Padding Settings Plugin Parameter is now
 *    removed. This is due to numerous "bug reports" despite the issue of no
 *    numbers being shown having been fixed since v1.01. Since many users did
 *    not do a fresh reinstall of the plugin to fix the problem and continued
 *    to submit it as bug reports, we have decided it would be better to just
 *    hardcode the padding values for this window instead. Update by Irina.
 * 
 * Version 1.04: January 15, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * ** Added "Window_ShopNumber" to the default black list.
 * 
 * Version 1.03: January 8, 2021
 * * Bug Fixes!
 * ** Menu Cursor will no longer show if there is no index selected. Fix made
 *    by Irina.
 * 
 * Version 1.02: January 1, 2021
 * * Feature Update!
 * ** Added "Window_Status" to the default black list.
 * 
 * Version 1.01: December 25, 2020
 * * Bug Fixes!
 * ** Changed the default value of the Window_NumberInput padding amount to 0
 *    from 16 so that numbers don't disappear. Fix made by Yanfly.
 *
 * Version 1.00: January 22, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MenuCursorChangeSettings
 * @text Menu Cursor: Change Settings
 * @desc Changes the settings for the menu cursor's appearance.
 *
 * @arg type:str
 * @text Appearance Type
 * @parent Appearance
 * @type select
 * @option Icon - Uses an icon as the cursor
 * @value icon
 * @option Picture - Uses a file from img/pictures/ as the cursor
 * @value picture
 * @option System - Uses a file from img/system/ as the cursor
 * @value system
 * @desc Select the appearance type for the menu cursor.
 * @default icon
 *
 * @arg iconIndex:num
 * @text Icon Index
 * @parent type:str
 * @desc If "icon" is selected as the appearance type,
 * use this icon as the cursor.
 * @default 112
 *
 * @arg pictureFilename:str
 * @text Picture Filename
 * @parent type:str
 * @type file
 * @dir img/pictures/
 * @desc If "picture" is selected as the appearance type,
 * use this image from img/pictures/ as the cursor.
 * @default 
 *
 * @arg systemFilename:str
 * @text System Filename
 * @parent type:str
 * @type file
 * @dir img/system/
 * @desc If "system" is selected as the appearance type,
 * use this image from img/system/ as the cursor.
 * @default 
 *
 * @arg frameDelay:num
 * @text Frame Delay
 * @parent type:str
 * @desc The frame delay for any animated "picture" or "system"
 * cursors before moving onto the next frame.
 * @default 8
 * 
 * @arg Anchor
 *
 * @arg anchorX:str
 * @text Anchor X
 * @parent Anchor
 * @type select
 * @option left
 * @option center
 * @option right
 * @desc Select the position to determine where the cursor's
 * Anchor X is located.
 * @default center
 *
 * @arg anchorY:str
 * @text Anchor Y
 * @parent Anchor
 * @type select
 * @option top
 * @option middle
 * @option bottom
 * @desc Select the position to determine where the cursor's
 * Anchor Y is located.
 * @default top
 * 
 * @arg Position
 *
 * @arg positionX:str
 * @text Position X
 * @parent Position
 * @type select
 * @option left
 * @option center
 * @option right
 * @desc Select the placement to determine where the cursor's
 * Position X is located.
 * @default left
 *
 * @arg positionY:str
 * @text Position Y
 * @parent Position
 * @type select
 * @option top
 * @option middle
 * @option bottom
 * @desc Select the placement to determine where the cursor's
 * Position Y is located.
 * @default middle
 * 
 * @arg Offset
 *
 * @arg offsetX:num
 * @text Offset X
 * @parent Offset
 * @desc Select how much to offset the cursor's X position by.
 * Negative numbers go left. Positive numbers go right.
 * @default +0
 *
 * @arg offsetY:num
 * @text Offset Y
 * @parent Offset
 * @desc Select how much to offset the cursor's Y position by.
 * Negative numbers go up. Positive numbers go down.
 * @default +0
 * 
 * @arg Wave
 *
 * @arg waveType:str
 * @text Wave Type
 * @parent Wave
 * @type select
 * @option Horizontal - Cursor oscillates left and right
 * @value horz
 * @option Vertical - Cursor oscillates up and down
 * @value vert
 * @option None - Cursor does not oscillate.
 * @value none
 * @desc Determine how the cursor moves while active.
 * @default horz
 *
 * @arg waveSpeed:num
 * @text Speed
 * @parent Wave
 * @desc Select how fast the cursor oscillates.
 * Lower is slower. Higher is faster.
 * @default 0.05
 *
 * @arg waveDistance:num
 * @text Distance
 * @parent Wave
 * @type number
 * @desc Select how far the cursor sprite will oscillate from its origin.
 * @default 10
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
 * @param MenuCursor
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param MenuCursor:struct
 * @text Menu Cursor
 * @type struct<MenuCursor>
 * @desc Default settings for the menu cursor's appearance.
 * @default {"type:str":"icon","iconIndex:num":"112","pictureFilename:str":"","systemFilename:str":"","frameDelay:num":"8","Anchor":"","anchorX:str":"center","anchorY:str":"top","Position":"","positionX:str":"left","positionY:str":"middle","Offset":"","offsetX:num":"+0","offsetY:num":"+0","Wave":"","waveType:str":"horz","waveSpeed:num":"0.05","waveDistance:num":"10"}
 * 
 * @param CursorBlacklist:arraystr
 * @text Window Blacklist
 * @parent MenuCursor:struct
 * @type string[]
 * @desc The menu cursor will not appear in these windows.
 * @default ["Window_ItemCategory","Window_OptionsCategory","Window_Status","Window_ShopNumber"]
 *
 * @param WindowPadding:struct
 * @text Window Padding
 * @type struct<WindowPadding>
 * @desc Make some windows more padded to accommodate for the menu cursor's oscillation.
 * @default {"AllWindows_Padding:num":"0","Window_MenuCommand_Padding:num":"0","Window_MenuStatus_Padding:num":"0","Window_MenuActor_Padding:num":"0","Window_ItemCategory_Padding:num":"0","Window_ItemList_Padding:num":"0","Window_SkillType_Padding:num":"0","Window_SkillList_Padding:num":"0","Window_EquipCommand_Padding:num":"0","Window_EquipSlot_Padding:num":"16","Window_EquipItem_Padding:num":"0","Window_Options_Padding:num":"16","Window_SavefileList_Padding:num":"0","Window_ShopCommand_Padding:num":"0","Window_ShopBuy_Padding:num":"0","Window_ShopSell_Padding:num":"0","Window_NameInput_Padding:num":"0","Window_ChoiceList_Padding:num":"16","Window_EventItem_Padding:num":"0","Window_PartyCommand_Padding:num":"0","Window_ActorCommand_Padding:num":"0","Window_BattleStatus_Padding:num":"0","Window_BattleActor_Padding:num":"0","Window_BattleEnemy_Padding:num":"0","Window_BattleSkill_Padding:num":"0","Window_BattleItem_Padding:num":"0","Window_TitleCommand_Padding:num":"0","Window_GameEnd_Padding:num":"0","Window_DebugRange_Padding:num":"16","Window_DebugEdit_Padding:num":"16","Window_CommonEventMenuList_Padding:num":"0","Window_QuestCommand_Padding:num":"0","Window_QuestList_Padding:num":"16"}
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
 * MenuCursor Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MenuCursor:
 *
 * @param type:str
 * @text Appearance Type
 * @parent Appearance
 * @type select
 * @option Icon - Uses an icon as the cursor
 * @value icon
 * @option Picture - Uses a file from img/pictures/ as the cursor
 * @value picture
 * @option System - Uses a file from img/system/ as the cursor
 * @value system
 * @desc Select the appearance type for the menu cursor.
 * @default icon
 *
 * @param iconIndex:num
 * @text Icon Index
 * @parent type:str
 * @desc If "icon" is selected as the appearance type,
 * use this icon as the cursor.
 * @default 112
 *
 * @param pictureFilename:str
 * @text Picture Filename
 * @parent type:str
 * @type file
 * @dir img/pictures/
 * @desc If "picture" is selected as the appearance type,
 * use this image from img/pictures/ as the cursor.
 * @default 
 *
 * @param systemFilename:str
 * @text System Filename
 * @parent type:str
 * @type file
 * @dir img/system/
 * @desc If "system" is selected as the appearance type,
 * use this image from img/system/ as the cursor.
 * @default 
 *
 * @param frameDelay:num
 * @text Frame Delay
 * @parent type:str
 * @desc The frame delay for any animated "picture" or "system"
 * cursors before moving onto the next frame.
 * @default 8
 * 
 * @param Anchor
 *
 * @param anchorX:str
 * @text Anchor X
 * @parent Anchor
 * @type select
 * @option left
 * @option center
 * @option right
 * @desc Select the position to determine where the cursor's
 * Anchor X is located.
 * @default center
 *
 * @param anchorY:str
 * @text Anchor Y
 * @parent Anchor
 * @type select
 * @option top
 * @option middle
 * @option bottom
 * @desc Select the position to determine where the cursor's
 * Anchor Y is located.
 * @default top
 * 
 * @param Position
 *
 * @param positionX:str
 * @text Position X
 * @parent Position
 * @type select
 * @option left
 * @option center
 * @option right
 * @desc Select the placement to determine where the cursor's
 * Position X is located.
 * @default left
 *
 * @param positionY:str
 * @text Position Y
 * @parent Position
 * @type select
 * @option top
 * @option middle
 * @option bottom
 * @desc Select the placement to determine where the cursor's
 * Position Y is located.
 * @default middle
 * 
 * @param Offset
 *
 * @param offsetX:num
 * @text Offset X
 * @parent Offset
 * @desc Select how much to offset the cursor's X position by.
 * Negative numbers go left. Positive numbers go right.
 * @default +0
 *
 * @param offsetY:num
 * @text Offset Y
 * @parent Offset
 * @desc Select how much to offset the cursor's Y position by.
 * Negative numbers go up. Positive numbers go down.
 * @default +0
 * 
 * @param Wave
 *
 * @param waveType:str
 * @text Wave Type
 * @parent Wave
 * @type select
 * @option Horizontal - Cursor oscillates left and right
 * @value horz
 * @option Vertical - Cursor oscillates up and down
 * @value vert
 * @option None - Cursor does not oscillate.
 * @value none
 * @desc Determine how the cursor moves while active.
 * @default horz
 *
 * @param waveSpeed:num
 * @text Speed
 * @parent Wave
 * @desc Select how fast the cursor oscillates.
 * Lower is slower. Higher is faster.
 * @default 0.05
 *
 * @param waveDistance:num
 * @text Distance
 * @parent Wave
 * @type number
 * @desc Select how far the cursor sprite will oscillate from its origin.
 * @default 10
 *
 */
/* ----------------------------------------------------------------------------
 * Window Padding Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~WindowPadding:
 *
 * @param AllWindows_Padding:num
 * @text All Windows
 * @type number
 * @desc How much extra item padding do you want for all windows?
 * @default 0
 *
 * @param Window_MenuCommand_Padding:num
 * @text Window_MenuCommand
 * @type number
 * @desc How much extra item padding do you want for this window?
 * @default 0
 *
 * @param Window_MenuStatus_Padding:num
 * @text Window_MenuStatus
 * @type number
 * @desc How much extra item padding do you want for this window?
 * @default 0
 *
 * @param Window_MenuActor_Padding:num
 * @text Window_MenuActor
 * @type number
 * @desc How much extra item padding do you want for this window?
 * @default 0
 *
 * @param Window_ItemCategory_Padding:num
 * @text Window_ItemCategory
 * @type number
 * @desc How much extra item padding do you want for this window?
 * @default 0
 *
 * @param Window_ItemList_Padding:num
 * @text Window_ItemList
 * @type number
 * @desc How much extra item padding do you want for this window?
 * @default 0
 *
 * @param Window_SkillType_Padding:num
 * @text Window_SkillType
 * @type number
 * @desc How much extra item padding do you want for this window?
 * @default 0
 *
 * @param Window_SkillList_Padding:num
 * @text Window_SkillList
 * @type number
 * @desc How much extra item padding do you want for this window?
 * @default 0
 *
 * @param Window_EquipCommand_Padding:num
 * @text Window_EquipCommand
 * @type number
 * @desc How much extra item padding do you want for this window?
 * @default 0
 *
 * @param Window_EquipSlot_Padding:num
 * @text Window_EquipSlot
 * @type number
 * @desc How much extra item padding do you want for this window?
 * @default 16
 *
 * @param Window_EquipItem_Padding:num
 * @text Window_EquipItem
 * @type number
 * @desc How much extra item padding do you want for this window?
 * @default 0
 *
 * @param Window_Options_Padding:num
 * @text Window_Options
 * @type number
 * @desc How much extra item padding do you want for this window?
 * @default 16
 *
 * @param Window_SavefileList_Padding:num
 * @text Window_SavefileList
 * @type number
 * @desc How much extra item padding do you want for this window?
 * @default 0
 *
 * @param Window_ShopCommand_Padding:num
 * @text Window_ShopCommand
 * @type number
 * @desc How much extra item padding do you want for this window?
 * @default 0
 *
 * @param Window_ShopBuy_Padding:num
 * @text Window_ShopBuy
 * @type number
 * @desc How much extra item padding do you want for this window?
 * @default 0
 *
 * @param Window_ShopSell_Padding:num
 * @text Window_ShopSell
 * @type number
 * @desc How much extra item padding do you want for this window?
 * @default 0
 *
 * @param Window_NameInput_Padding:num
 * @text Window_NameInput
 * @type number
 * @desc How much extra item padding do you want for this window?
 * @default 0
 *
 * @param Window_ChoiceList_Padding:num
 * @text Window_ChoiceList
 * @type number
 * @desc How much extra item padding do you want for this window?
 * @default 16
 *
 * @param Window_EventItem_Padding:num
 * @text Window_EventItem
 * @type number
 * @desc How much extra item padding do you want for this window?
 * @default 0
 *
 * @param Window_PartyCommand_Padding:num
 * @text Window_PartyCommand
 * @type number
 * @desc How much extra item padding do you want for this window?
 * @default 0
 *
 * @param Window_ActorCommand_Padding:num
 * @text Window_ActorCommand
 * @type number
 * @desc How much extra item padding do you want for this window?
 * @default 0
 *
 * @param Window_BattleStatus_Padding:num
 * @text Window_BattleStatus
 * @type number
 * @desc How much extra item padding do you want for this window?
 * @default 0
 *
 * @param Window_BattleActor_Padding:num
 * @text Window_BattleActor
 * @type number
 * @desc How much extra item padding do you want for this window?
 * @default 0
 *
 * @param Window_BattleEnemy_Padding:num
 * @text Window_BattleEnemy
 * @type number
 * @desc How much extra item padding do you want for this window?
 * @default 0
 *
 * @param Window_BattleSkill_Padding:num
 * @text Window_BattleSkill
 * @type number
 * @desc How much extra item padding do you want for this window?
 * @default 0
 *
 * @param Window_BattleItem_Padding:num
 * @text Window_BattleItem
 * @type number
 * @desc How much extra item padding do you want for this window?
 * @default 0
 *
 * @param Window_TitleCommand_Padding:num
 * @text Window_TitleCommand
 * @type number
 * @desc How much extra item padding do you want for this window?
 * @default 0
 *
 * @param Window_GameEnd_Padding:num
 * @text Window_GameEnd
 * @type number
 * @desc How much extra item padding do you want for this window?
 * @default 0
 *
 * @param Window_DebugRange_Padding:num
 * @text Window_DebugRange
 * @type number
 * @desc How much extra item padding do you want for this window?
 * @default 16
 *
 * @param Window_DebugEdit_Padding:num
 * @text Window_DebugEdit
 * @type number
 * @desc How much extra item padding do you want for this window?
 * @default 16
 *
 * @param Window_CommonEventMenuList_Padding:num
 * @text Window_CommonEventMenuList
 * @type number
 * @desc How much extra item padding do you want for this window?
 * @default 0
 *
 * @param Window_QuestCommand_Padding:num
 * @text Window_QuestCommand
 * @type number
 * @desc How much extra item padding do you want for this window?
 * @default 0
 *
 * @param Window_QuestList_Padding:num
 * @text Window_QuestList
 * @type number
 * @desc How much extra item padding do you want for this window?
 * @default 16
 *
 */
//=============================================================================

const _0x9967=['4OCRPps','setParentWindow','iconHeight','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','_menuCursorData','_frameRows','offsetY','cos','determineFrameColsRows','iconWidth','anchorX','createMenuCursor','scale','updatePosition','loadBitmap','ARRAYEVAL','MenuCursorChangeSettings','left','_frameMax','setMenuCursor','status','updateWave','description','systemFilename','system','offsetX','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','updateFrameColsRows','parse','right','CursorBlacklist','prototype','makeDeepCopy','parent','map','1195697GkBSjT','_menuCursorSprite','_padding','waveDistance','middle','positionY','updateParentWindow','Window_Base_itemPadding','toUpperCase','exit','FUNC','1eBGlss','initMenuCursorSettings','updateScale','max','constructor','initMembers','_cursorSprite','removeChild','create','isMenuCursorBlacklisted','vert','_scene','3164cXekJN','_clientArea','AllWindows_ItemPadding','update','isVisible','registerCommand','Settings','width','_parentWindow','JSON','bottom','log','top','bind','_cache','%1_Padding','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','ARRAYSTR','EVAL','opacity','return\x200','970488IBVJcu','ARRAYSTRUCT','waveType','picture','anchorY','round','bitmap','updateFrameIcon','Window_Selectable_initialize','horz','397869KOIWAL','children','updateFrame','STR','MenuCursor','clamp','addLoadListener','_frameIndex','positionX','1539937tkaHXO','ConvertParams','index','itemPadding','initialize','call','_frameCols','updateAnchor','loadSystem','STRUCT','244EVvzMR','1dFjHTx','refreshMenuCursorChildren','Game_System_initialize','active','parameters','type','includes','format','match','anchor','ARRAYNUM','loadPicture','setFrame','iconIndex','ARRAYJSON','waveSpeed','updateOpacity','name','frameCount','version','height','menuCursor','352070nqcrEt','_settings','3761gIRRIs','NUM'];const _0x4d96=function(_0x1600d7,_0x2232cf){_0x1600d7=_0x1600d7-0x75;let _0x9967b9=_0x9967[_0x1600d7];return _0x9967b9;};const _0x4c0ca5=_0x4d96;(function(_0x4e607f,_0x36390a){const _0x448958=_0x4d96;while(!![]){try{const _0x3b6d8a=-parseInt(_0x448958(0x7a))+-parseInt(_0x448958(0xdc))*parseInt(_0x448958(0x85))+parseInt(_0x448958(0x91))*parseInt(_0x448958(0xc3))+parseInt(_0x448958(0xb9))+parseInt(_0x448958(0xda))+-parseInt(_0x448958(0xde))*parseInt(_0x448958(0xb0))+parseInt(_0x448958(0xc4))*parseInt(_0x448958(0xa6));if(_0x3b6d8a===_0x36390a)break;else _0x4e607f['push'](_0x4e607f['shift']());}catch(_0x106b64){_0x4e607f['push'](_0x4e607f['shift']());}}}(_0x9967,0xcdf39));var label='MenuCursor',tier=tier||0x0,dependencies=[],pluginData=$plugins['filter'](function(_0xc49fe6){const _0x920d8f=_0x4d96;return _0xc49fe6[_0x920d8f(0xf2)]&&_0xc49fe6[_0x920d8f(0xf4)][_0x920d8f(0xca)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0x4c0ca5(0x97)]||{},VisuMZ[_0x4c0ca5(0xba)]=function(_0x2373b4,_0x14245a){const _0x52e681=_0x4c0ca5;for(const _0x12fa2b in _0x14245a){if(_0x12fa2b[_0x52e681(0xcc)](/(.*):(.*)/i)){const _0x2beea9=String(RegExp['$1']),_0x36332a=String(RegExp['$2'])[_0x52e681(0x82)]()['trim']();let _0x4d35df,_0x122bdc,_0x162634;switch(_0x36332a){case _0x52e681(0xdd):_0x4d35df=_0x14245a[_0x12fa2b]!==''?Number(_0x14245a[_0x12fa2b]):0x0;break;case _0x52e681(0xce):_0x122bdc=_0x14245a[_0x12fa2b]!==''?JSON[_0x52e681(0xfa)](_0x14245a[_0x12fa2b]):[],_0x4d35df=_0x122bdc[_0x52e681(0x79)](_0x30b74d=>Number(_0x30b74d));break;case _0x52e681(0xa3):_0x4d35df=_0x14245a[_0x12fa2b]!==''?eval(_0x14245a[_0x12fa2b]):null;break;case _0x52e681(0xed):_0x122bdc=_0x14245a[_0x12fa2b]!==''?JSON[_0x52e681(0xfa)](_0x14245a[_0x12fa2b]):[],_0x4d35df=_0x122bdc[_0x52e681(0x79)](_0x2cf3b5=>eval(_0x2cf3b5));break;case _0x52e681(0x9a):_0x4d35df=_0x14245a[_0x12fa2b]!==''?JSON[_0x52e681(0xfa)](_0x14245a[_0x12fa2b]):'';break;case _0x52e681(0xd2):_0x122bdc=_0x14245a[_0x12fa2b]!==''?JSON[_0x52e681(0xfa)](_0x14245a[_0x12fa2b]):[],_0x4d35df=_0x122bdc['map'](_0x26e6dd=>JSON[_0x52e681(0xfa)](_0x26e6dd));break;case _0x52e681(0x84):_0x4d35df=_0x14245a[_0x12fa2b]!==''?new Function(JSON[_0x52e681(0xfa)](_0x14245a[_0x12fa2b])):new Function(_0x52e681(0xa5));break;case'ARRAYFUNC':_0x122bdc=_0x14245a[_0x12fa2b]!==''?JSON[_0x52e681(0xfa)](_0x14245a[_0x12fa2b]):[],_0x4d35df=_0x122bdc[_0x52e681(0x79)](_0x15e37c=>new Function(JSON[_0x52e681(0xfa)](_0x15e37c)));break;case _0x52e681(0xb3):_0x4d35df=_0x14245a[_0x12fa2b]!==''?String(_0x14245a[_0x12fa2b]):'';break;case _0x52e681(0xa2):_0x122bdc=_0x14245a[_0x12fa2b]!==''?JSON[_0x52e681(0xfa)](_0x14245a[_0x12fa2b]):[],_0x4d35df=_0x122bdc[_0x52e681(0x79)](_0x5e2801=>String(_0x5e2801));break;case _0x52e681(0xc2):_0x162634=_0x14245a[_0x12fa2b]!==''?JSON[_0x52e681(0xfa)](_0x14245a[_0x12fa2b]):{},_0x4d35df=VisuMZ['ConvertParams']({},_0x162634);break;case _0x52e681(0xa7):_0x122bdc=_0x14245a[_0x12fa2b]!==''?JSON[_0x52e681(0xfa)](_0x14245a[_0x12fa2b]):[],_0x4d35df=_0x122bdc[_0x52e681(0x79)](_0x1d17fa=>VisuMZ[_0x52e681(0xba)]({},JSON['parse'](_0x1d17fa)));break;default:continue;}_0x2373b4[_0x2beea9]=_0x4d35df;}}return _0x2373b4;},(_0x2348a7=>{const _0x2d4a12=_0x4c0ca5,_0x42f725=_0x2348a7[_0x2d4a12(0xd5)];for(const _0x36a334 of dependencies){if(!Imported[_0x36a334]){alert(_0x2d4a12(0xf8)[_0x2d4a12(0xcb)](_0x42f725,_0x36a334)),SceneManager[_0x2d4a12(0x83)]();break;}}const _0x29d4ce=_0x2348a7['description'];if(_0x29d4ce['match'](/\[Version[ ](.*?)\]/i)){const _0x4c8b9c=Number(RegExp['$1']);_0x4c8b9c!==VisuMZ[label][_0x2d4a12(0xd7)]&&(alert(_0x2d4a12(0xe1)[_0x2d4a12(0xcb)](_0x42f725,_0x4c8b9c)),SceneManager['exit']());}if(_0x29d4ce[_0x2d4a12(0xcc)](/\[Tier[ ](\d+)\]/i)){const _0x59ac0d=Number(RegExp['$1']);_0x59ac0d<tier?(alert(_0x2d4a12(0xa1)['format'](_0x42f725,_0x59ac0d,tier)),SceneManager[_0x2d4a12(0x83)]()):tier=Math[_0x2d4a12(0x88)](_0x59ac0d,tier);}VisuMZ[_0x2d4a12(0xba)](VisuMZ[label][_0x2d4a12(0x97)],_0x2348a7[_0x2d4a12(0xc8)]);})(pluginData),PluginManager[_0x4c0ca5(0x96)](pluginData[_0x4c0ca5(0xd5)],_0x4c0ca5(0xee),_0x5b3c1e=>{const _0xb4efa6=_0x4c0ca5;VisuMZ[_0xb4efa6(0xba)](_0x5b3c1e,_0x5b3c1e);const _0x4c557b=JsonEx['makeDeepCopy'](_0x5b3c1e);$gameSystem[_0xb4efa6(0xf1)](_0x4c557b);}),VisuMZ[_0x4c0ca5(0xb4)][_0x4c0ca5(0xc6)]=Game_System[_0x4c0ca5(0x76)][_0x4c0ca5(0xbd)],Game_System[_0x4c0ca5(0x76)][_0x4c0ca5(0xbd)]=function(){const _0x5233b7=_0x4c0ca5;VisuMZ[_0x5233b7(0xb4)][_0x5233b7(0xc6)][_0x5233b7(0xbe)](this),this[_0x5233b7(0x86)]();},Game_System[_0x4c0ca5(0x76)][_0x4c0ca5(0x86)]=function(){const _0x51e663=_0x4c0ca5;this['_menuCursorData']=JsonEx[_0x51e663(0x77)](VisuMZ[_0x51e663(0xb4)][_0x51e663(0x97)]['MenuCursor']);},Game_System[_0x4c0ca5(0x76)][_0x4c0ca5(0xd9)]=function(){const _0x4d5861=_0x4c0ca5;if(this[_0x4d5861(0xe2)]===undefined)this[_0x4d5861(0x86)]();return this[_0x4d5861(0xe2)];},Game_System['prototype'][_0x4c0ca5(0xf1)]=function(_0xa67988){const _0x590e4d=_0x4c0ca5;this[_0x590e4d(0xe2)]=_0xa67988,this[_0x590e4d(0xc5)](SceneManager[_0x590e4d(0x90)]);},Game_System[_0x4c0ca5(0x76)][_0x4c0ca5(0xc5)]=function(_0x2db025){const _0xaf585b=_0x4c0ca5;if(!_0x2db025)return;_0x2db025[_0xaf585b(0xe9)]&&_0x2db025['createMenuCursor']();if(_0x2db025[_0xaf585b(0xb1)])for(const _0x443136 of _0x2db025[_0xaf585b(0xb1)]){$gameSystem[_0xaf585b(0xc5)](_0x443136);}};function Sprite_MenuCursor(){const _0x261265=_0x4c0ca5;this[_0x261265(0xbd)](...arguments);}Sprite_MenuCursor[_0x4c0ca5(0x76)]=Object[_0x4c0ca5(0x8d)](Sprite['prototype']),Sprite_MenuCursor[_0x4c0ca5(0x76)][_0x4c0ca5(0x89)]=Sprite_MenuCursor,Sprite_MenuCursor[_0x4c0ca5(0x76)]['initialize']=function(){const _0x3d9962=_0x4c0ca5;Sprite[_0x3d9962(0x76)]['initialize'][_0x3d9962(0xbe)](this),this['initMembers']();},Sprite_MenuCursor[_0x4c0ca5(0x76)][_0x4c0ca5(0x8a)]=function(){const _0x1a60b9=_0x4c0ca5;this[_0x1a60b9(0x99)]=null,this[_0x1a60b9(0xdb)]=null,this[_0x1a60b9(0xb7)]=0x0,this['_frameCols']=0x1,this[_0x1a60b9(0xe3)]=0x1,this[_0x1a60b9(0xf0)]=0x1,this[_0x1a60b9(0x9f)]={'scale':{'x':0x1,'y':0x1}},this[_0x1a60b9(0xa4)]=0x0;},Sprite_MenuCursor[_0x4c0ca5(0x76)][_0x4c0ca5(0xdf)]=function(_0x4d0faf){const _0x2ce916=_0x4c0ca5;if(this[_0x2ce916(0x99)]===_0x4d0faf)return;this[_0x2ce916(0x99)]=_0x4d0faf,this[_0x2ce916(0x99)]?this[_0x2ce916(0x80)]():this[_0x2ce916(0xdb)]=null;},Sprite_MenuCursor['prototype'][_0x4c0ca5(0x80)]=function(){const _0x55e7cc=_0x4c0ca5;this['_settings']=$gameSystem['menuCursor'](),this[_0x55e7cc(0xc0)](),this[_0x55e7cc(0xec)]();},Sprite_MenuCursor[_0x4c0ca5(0x76)][_0x4c0ca5(0xc0)]=function(){const _0x1f9520=_0x4c0ca5;switch(this[_0x1f9520(0xdb)][_0x1f9520(0xe8)]){case _0x1f9520(0xef):this[_0x1f9520(0xcd)]['x']=0x0;break;case'center':this['anchor']['x']=0.5;break;case _0x1f9520(0xfb):this[_0x1f9520(0xcd)]['x']=0x1;break;}switch(this[_0x1f9520(0xdb)][_0x1f9520(0xaa)]){case _0x1f9520(0x9d):this[_0x1f9520(0xcd)]['y']=0x0;break;case'middle':this['anchor']['y']=0.5;break;case'bottom':this[_0x1f9520(0xcd)]['y']=0x1;break;}},Sprite_MenuCursor[_0x4c0ca5(0x76)][_0x4c0ca5(0xec)]=function(){const _0x35c54f=_0x4c0ca5;if(!this['_settings'])return;switch(this[_0x35c54f(0xdb)]['type']){case'icon':this[_0x35c54f(0xac)]=ImageManager[_0x35c54f(0xc1)]('IconSet');break;case'picture':this['bitmap']=ImageManager[_0x35c54f(0xcf)](this['_settings']['pictureFilename']),this[_0x35c54f(0xe6)](this['_settings']['pictureFilename']);break;case _0x35c54f(0xf6):this[_0x35c54f(0xac)]=ImageManager['loadSystem'](this['_settings'][_0x35c54f(0xf5)]),this[_0x35c54f(0xe6)](this[_0x35c54f(0xdb)][_0x35c54f(0xf5)]);break;}this[_0x35c54f(0xb7)]=0x0,this[_0x35c54f(0xac)][_0x35c54f(0xb6)](this['updateFrame'][_0x35c54f(0x9e)](this,!![]));},Sprite_MenuCursor[_0x4c0ca5(0x76)]['determineFrameColsRows']=function(_0x4b9c04){const _0x428584=_0x4c0ca5;_0x4b9c04[_0x428584(0xcc)](/\[(\d+)x(\d+)\]/i)?(this['_frameCols']=Math[_0x428584(0x88)](0x1,Number(RegExp['$1'])),this[_0x428584(0xe3)]=Math[_0x428584(0x88)](0x1,Number(RegExp['$2']))):(this['_frameCols']=0x1,this[_0x428584(0xe3)]=0x1),this['_frameMax']=this[_0x428584(0xbf)]*this[_0x428584(0xe3)];},Sprite_MenuCursor['prototype'][_0x4c0ca5(0x94)]=function(){const _0x47df1b=_0x4c0ca5;Sprite['prototype']['update'][_0x47df1b(0xbe)](this),this[_0x47df1b(0x99)]&&this[_0x47df1b(0xac)]&&this[_0x47df1b(0xac)][_0x47df1b(0x98)]>0x0?(this['updateOpacity'](),this['updateScale'](),this[_0x47df1b(0xb2)](),this['updatePosition'](),this[_0x47df1b(0xf3)]()):this[_0x47df1b(0xa4)]=0x0;},Sprite_MenuCursor['prototype'][_0x4c0ca5(0xd4)]=function(){const _0x2b6bc9=_0x4c0ca5;this[_0x2b6bc9(0xa4)]=this[_0x2b6bc9(0x95)]()?0xff:0x0;},Sprite_MenuCursor[_0x4c0ca5(0x76)]['isVisible']=function(){const _0x354954=_0x4c0ca5,_0x827410=this['_parentWindow'];if(!_0x827410)return![];if(!_0x827410[_0x354954(0xc7)])return![];if(_0x827410[_0x354954(0xbb)]()<0x0)return![];return!![];},Sprite_MenuCursor[_0x4c0ca5(0x76)][_0x4c0ca5(0x87)]=function(){const _0x22ff32=_0x4c0ca5;if(!this[_0x22ff32(0x78)])return;if(this[_0x22ff32(0xa4)]<=0x0)return;if(this[_0x22ff32(0x9f)]['scale']['x']===this[_0x22ff32(0x78)]['scale']['x']&&this[_0x22ff32(0x9f)]['scale']['y']===this[_0x22ff32(0x78)]['scale']['y'])return;this[_0x22ff32(0xea)]['x']=0x1/this[_0x22ff32(0x78)][_0x22ff32(0xea)]['x'],this[_0x22ff32(0xea)]['y']=0x1/this['parent'][_0x22ff32(0xea)]['y'],this[_0x22ff32(0x9f)]['scale']['x']=this['parent'][_0x22ff32(0xea)]['x'],this[_0x22ff32(0x9f)]['scale']['y']=this[_0x22ff32(0x78)][_0x22ff32(0xea)]['y'];},Sprite_MenuCursor['prototype'][_0x4c0ca5(0xb2)]=function(_0x309ecc){const _0x4fc3d4=_0x4c0ca5;if(!_0x309ecc){if(Graphics[_0x4fc3d4(0xd6)]%this[_0x4fc3d4(0xdb)]['frameDelay']>0x0)return;}switch(this[_0x4fc3d4(0xdb)][_0x4fc3d4(0xc9)]){case'icon':this[_0x4fc3d4(0xad)]();break;case _0x4fc3d4(0xa9):case _0x4fc3d4(0xf6):this[_0x4fc3d4(0xf9)]();break;};},Sprite_MenuCursor[_0x4c0ca5(0x76)]['updateFrameIcon']=function(){const _0x590945=_0x4c0ca5,_0x867637=this[_0x590945(0xdb)][_0x590945(0xd1)],_0x37e55e=ImageManager[_0x590945(0xe7)],_0x33bcb2=ImageManager[_0x590945(0xe0)],_0x44679c=_0x867637%0x10*_0x37e55e,_0x558f1a=Math['floor'](_0x867637/0x10)*_0x33bcb2;this[_0x590945(0xd0)](_0x44679c,_0x558f1a,_0x37e55e,_0x33bcb2);},Sprite_MenuCursor['prototype']['updateFrameColsRows']=function(){const _0x2f66bd=_0x4c0ca5;this[_0x2f66bd(0xb7)]++;if(this[_0x2f66bd(0xb7)]>=this['_frameMax'])this['_frameIndex']=0x0;var _0x1044f9=this[_0x2f66bd(0xac)][_0x2f66bd(0x98)]/this['_frameCols'],_0x319153=this['bitmap'][_0x2f66bd(0xd8)]/this[_0x2f66bd(0xe3)],_0x22ce46=this[_0x2f66bd(0xb7)]%this[_0x2f66bd(0xbf)]*_0x1044f9,_0x56b025=Math['floor'](this['_frameIndex']/this['_frameCols'])*_0x319153;this[_0x2f66bd(0xd0)](_0x22ce46,_0x56b025,_0x1044f9,_0x319153);},Sprite_MenuCursor[_0x4c0ca5(0x76)][_0x4c0ca5(0xeb)]=function(){const _0x54bf1e=_0x4c0ca5;if(!this['parent'])return;if(!this['_parentWindow'])return;const _0x359a5c=this['_parentWindow']['_cursorSprite'];if(!_0x359a5c){if(this[_0x54bf1e(0x99)][_0x54bf1e(0x89)]===Window_MenuCommand)console[_0x54bf1e(0x9c)](this[_0x54bf1e(0x8b)]);this['opacity']=0x0;return;}const _0x2e48c5=_0x359a5c[_0x54bf1e(0x98)],_0x3cbee9=_0x359a5c[_0x54bf1e(0xd8)],_0x5b2f02=this[_0x54bf1e(0x99)][_0x54bf1e(0x92)],_0x2d31cf=this[_0x54bf1e(0x99)][_0x54bf1e(0x7c)];switch(this[_0x54bf1e(0xdb)][_0x54bf1e(0xb8)]){case _0x54bf1e(0xef):this['x']=_0x359a5c['x'];break;case'center':this['x']=_0x359a5c['x']+Math['round'](_0x2e48c5/0x2);break;case _0x54bf1e(0xfb):this['x']=_0x359a5c['x']+_0x2e48c5;break;}switch(this['_settings'][_0x54bf1e(0x7f)]){case _0x54bf1e(0x9d):this['y']=_0x359a5c['y'];break;case _0x54bf1e(0x7e):this['y']=_0x359a5c['y']+Math[_0x54bf1e(0xab)](_0x3cbee9/0x2);break;case _0x54bf1e(0x9b):this['y']=_0x359a5c['y']+_0x3cbee9;break;}this['x']+=_0x5b2f02['x'],this['y']+=_0x5b2f02['y'],this['x']+=this[_0x54bf1e(0xdb)][_0x54bf1e(0xf7)],this['y']+=this[_0x54bf1e(0xdb)][_0x54bf1e(0xe4)],this['x']=this['x']['clamp'](_0x2d31cf,this[_0x54bf1e(0x99)][_0x54bf1e(0x98)]-_0x2d31cf),this['y']=this['y'][_0x54bf1e(0xb5)](_0x2d31cf,this[_0x54bf1e(0x99)][_0x54bf1e(0xd8)]-_0x2d31cf);},Sprite_MenuCursor[_0x4c0ca5(0x76)][_0x4c0ca5(0xf3)]=function(){const _0x1da1f2=_0x4c0ca5,_0x1be51f=this['_settings'][_0x1da1f2(0xa8)];if(_0x1be51f==='none')return;if(this['_settings'][_0x1da1f2(0x7d)]<=0x0)return;const _0x4642d0=this[_0x1da1f2(0xdb)][_0x1da1f2(0x7d)],_0x181484=this[_0x1da1f2(0xdb)][_0x1da1f2(0xd3)],_0x47e8d7=Math[_0x1da1f2(0xab)](Math[_0x1da1f2(0xe5)](Graphics[_0x1da1f2(0xd6)]*_0x181484)*_0x4642d0);if(_0x1be51f===_0x1da1f2(0xaf))this['x']+=_0x47e8d7;else _0x1be51f===_0x1da1f2(0x8f)&&(this['y']+=_0x47e8d7);},VisuMZ['MenuCursor'][_0x4c0ca5(0x81)]=Window_Base['prototype'][_0x4c0ca5(0xbc)],Window_Base[_0x4c0ca5(0x76)][_0x4c0ca5(0xbc)]=function(){const _0x5a475e=_0x4c0ca5,_0x298748=VisuMZ['MenuCursor'][_0x5a475e(0x97)]['WindowPadding'];let _0x96343b=_0x298748[_0x5a475e(0x93)]||0x0;return _0x96343b+=_0x298748[_0x5a475e(0xa0)[_0x5a475e(0xcb)](this[_0x5a475e(0x89)][_0x5a475e(0xd5)])]||0x0,VisuMZ[_0x5a475e(0xb4)][_0x5a475e(0x81)]['call'](this)+_0x96343b;},VisuMZ[_0x4c0ca5(0xb4)]['Window_Selectable_initialize']=Window_Selectable[_0x4c0ca5(0x76)][_0x4c0ca5(0xbd)],Window_Selectable[_0x4c0ca5(0x76)][_0x4c0ca5(0xbd)]=function(_0x413bb9){const _0x4f8f41=_0x4c0ca5;VisuMZ[_0x4f8f41(0xb4)][_0x4f8f41(0xae)][_0x4f8f41(0xbe)](this,_0x413bb9),this[_0x4f8f41(0xe9)]();},Window_Selectable['prototype'][_0x4c0ca5(0xe9)]=function(){const _0x59be00=_0x4c0ca5;if(this[_0x59be00(0x8e)]())return;this[_0x59be00(0x7b)]&&(this[_0x59be00(0x8c)](this[_0x59be00(0x7b)]),delete this[_0x59be00(0x7b)]),this['_menuCursorSprite']=new Sprite_MenuCursor(),this['addChild'](this['_menuCursorSprite']),this[_0x59be00(0x7b)][_0x59be00(0xdf)](this);},Window_Selectable[_0x4c0ca5(0x76)][_0x4c0ca5(0x8e)]=function(){const _0x23681d=_0x4c0ca5,_0x4bf68d=VisuMZ['MenuCursor'][_0x23681d(0x97)][_0x23681d(0x75)]||[];return _0x4bf68d[_0x23681d(0xca)](this['constructor'][_0x23681d(0xd5)]);},Window_NumberInput[_0x4c0ca5(0x76)][_0x4c0ca5(0xbc)]=function(){const _0x28d014=_0x4c0ca5;try{return VisuMZ['MenuCursor'][_0x28d014(0x81)][_0x28d014(0xbe)](this);}catch(_0x139ccc){return 0x8;}};