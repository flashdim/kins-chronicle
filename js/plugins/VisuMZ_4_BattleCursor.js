//=============================================================================
// VisuStella MZ - Battle Cursor
// VisuMZ_4_BattleCursor.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_BattleCursor = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BattleCursor = VisuMZ.BattleCursor || {};
VisuMZ.BattleCursor.version = 1.02;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.02] [BattleCursor]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Battle_Cursor_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin allows you to set custom cursors when selecting allies and/or
 * enemies for targeting while in battle. This is to help with better visual
 * cues when picking a target if the flashing battler isn't enough.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Use icons, pictures, or system images as battle cursors for selected
 *   actors and enemies.
 * * Decide on how the cursor is anchored and positioned with offsets to fine
 *   tune its location.
 * * Want to animate the cursor? You can do so by following a specific image
 *   format and name schema.
 * * Oscillate the cursor back and forth from a left to right horizontal bounce
 *   or an up to down vertical bounce. Or if you want, just don't have any kind
 *   of oscillation at all!
 * * Customize the battle cursor to appear differently for various actors
 *   and/or enemies through notetags!
 * * Alter the battle cursor mid-battle through Plugin Commands, too!
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
 * Animated Battle Cursor Instructions
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
 * Keep this in mind as you format your animated battle selection cursors.
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
 * === Cursor Appearance-Related Notetags ===
 * 
 * ---
 *
 * <Battle Cursor Icon: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Changes the battle select cursor into the specific icon.
 * - Replace 'x' with the icon index you wish to use.
 *
 * ---
 *
 * <Battle Cursor Picture: filename>
 * <Battle Cursor System: filename>
 *
 * - Used for: Actor, Enemy Notetags
 * - Changes the battle select cursor into the specific image.
 * - The 'Picture' variant loads images from img/pictures/.
 * - The 'System' variant loads images from img/system/.
 * - Replace 'filename' with the filename of the image found in the specific
 *   target folder.
 *   - Do not include the file extension.
 *
 * ---
 *
 * <Battle Cursor Frame Delay: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - If using a 'picture' or 'system' image that has the animated format, you
 *   can adjust how much delay there is between each animated frame.
 * - Replace 'x' with a number representing the delay between frames.
 *   Lower is faster. Higher is slower.
 *
 * ---
 * 
 * === Cursor Location-Related Notetags ===
 * 
 * ---
 *
 * <Battle Cursor Anchor X: Left>
 * <Battle Cursor Anchor X: Center>
 * <Battle Cursor Anchor X: Right>
 *
 * - Used for: Actor, Enemy Notetags
 * - Determines the origin/anchor X location of the battle cursor sprite for
 *   this specific actor/enemy.
 * 
 * ---
 *
 * <Battle Cursor Anchor Y: Top>
 * <Battle Cursor Anchor Y: Middle>
 * <Battle Cursor Anchor Y: Bottom>
 *
 * - Used for: Actor, Enemy Notetags
 * - Determines the origin/anchor Y location of the battle cursor sprite for
 *   this specific actor/enemy.
 *
 * ---
 *
 * <Battle Cursor Position X: Left>
 * <Battle Cursor Position X: Center>
 * <Battle Cursor Position X: Right>
 *
 * - Used for: Actor, Enemy Notetags
 * - Determines the position X location of where the battle cursor sprite
 *   appears on the actor or enemy sprite when targeting them.
 * 
 * ---
 *
 * <Battle Cursor Position Y: Top>
 * <Battle Cursor Position Y: Middle>
 * <Battle Cursor Position Y: Bottom>
 *
 * - Used for: Actor, Enemy Notetags
 * - Determines the position Y location of where the battle cursor sprite
 *   appears on the actor or enemy sprite when targeting them.
 *
 * ---
 *
 * <Battle Cursor Offset X: +x>
 * <Battle Cursor Offset X: -x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Offsets the X position of the battle cursor sprite by pixels.
 * - Replace 'x' with a number representing the pixels to offset the battle
 *   cursor sprite by.
 *   - Negative numbers go left.
 *   - Positive numbers go right.
 *
 * ---
 *
 * <Battle Cursor Offset Y: +y>
 * <Battle Cursor Offset Y: -y>
 *
 * - Used for: Actor, Enemy Notetags
 * - Offsets the Y position of the battle cursor sprite by pixels.
 * - Replace 'y' with a number representing the pixels to offset the battle
 *   cursor sprite by.
 *   - Negative numbers go up.
 *   - Positive numbers go down.
 *
 * ---
 *
 * === Cursor Wave-Related Notetags ===
 * 
 * ---
 *
 * <Battle Cursor No Wave>
 *
 * - Used for: Actor, Enemy Notetags
 * - Removes any oscillation from the battle cursor.
 *
 * ---
 *
 * <Battle Cursor Horizontal Wave: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - The battle cursor will oscillate back and forth horizontally from the
 *   left to the right.
 * - Replace 'x' with a number representing the pixel distance to oscillate.
 *
 * ---
 *
 * <Battle Cursor Vertical Wave: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - The battle cursor will oscillate back and forth vertically from the
 *   top to the bottom.
 * - Replace 'x' with a number representing the pixel distance to oscillate.
 *
 * ---
 *
 * <Battle Cursor Wave Speed: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Select how fast the cursor oscillates.
 * - Lower is slower. Higher is faster.
 * - Replace 'x' with a number representing the speed at which the cursor will
 *   oscillate at.
 * - Use decimal values between 0 and 1 for the best results.
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
 * === Battle Cursor Plugin Commands ===
 * 
 * ---
 *
 * Battle Cursor: Change Actor Cursor
 * - Change target actor's battle cursor settings.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Appearance Type:
 *   - Select the appearance type for the battle select cursor.
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
 * Battle Cursor: Change Party Member Cursor
 * - Change target party member's battle cursor settings.
 *
 *   Party Index(es):
 *   - Select which party member index(es) to affect.
 *
 *   Appearance Type:
 *   - Select the appearance type for the battle select cursor.
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
 * Battle Cursor: Change Enemy Member Cursor
 * - Change target enemy's battle cursor settings.
 *
 *   Enemy Index(es):
 *   - Select which enemy troop index(es) to affect.
 *
 *   Appearance Type:
 *   - Select the appearance type for the battle select cursor.
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
 * Plugin Parameters: Actor and Enemy Cursor Settings
 * ============================================================================
 *
 * These are the default battle select cursor settings for actors and enemies.
 * All actors will have the same settings as one another unless notetags are
 * used to customize their settings. The same goes for enemies.
 *
 * ---
 *
 * Appearance Type
 * 
 *   Appearance Type:
 *   - Select the appearance type for the battle select cursor.
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
 * Version 1.02: June 11, 2021
 * * Bug Fixes!
 * ** Battle Cursor now properly aligns itself when target battlers are not
 *    scaled properly and/or hovering. Fix made by Olivia.
 * 
 * Version 1.01: March 19, 2021
 * * Bug Fixes!
 * ** When using the Battle Cursor for front view actors, the cursor no longer
 *    appears out of synch from the sprite positions in the battle status
 *    window area. Fix made by Irina.
 *
 * Version 1.00: January 8, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BattleCursorChangeActorSettings
 * @text Battle Cursor: Change Actor Cursor
 * @desc Change target actor's battle cursor settings.
 *
 * @arg ActorIDs:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
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
 * @desc Select the appearance type for the battle select cursor.
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
 * @default right
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
 * @default middle
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
 * @command BattleCursorChangePartySettings
 * @text Battle Cursor: Change Party Member Cursor
 * @desc Change target party member's battle cursor settings.
 *
 * @arg PartyIndex:arraynum
 * @text Party Index(es)
 * @type number[]
 * @desc Select which party member index(es) to affect.
 * @default ["0"]
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
 * @desc Select the appearance type for the battle select cursor.
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
 * @default right
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
 * @default middle
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
 * @command BattleCursorChangeEnemySettings
 * @text Battle Cursor: Change Enemy Member Cursor
 * @desc Change target enemy's battle cursor settings.
 * In-battle only!
 *
 * @arg EnemyIndex:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @desc Select which enemy troop index(es) to affect.
 * @default ["0"]
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
 * @desc Select the appearance type for the battle select cursor.
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
 * @default right
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
 * @default middle
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
 * @min 1
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
 * @param BattleCursor
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ActorCursor:struct
 * @text Actor Cursor
 * @type struct<BattleCursor>
 * @desc Default battle select cursor settings for actors.
 * @default {"type:str":"icon","iconIndex:num":"112","pictureFilename:str":"","systemFilename:str":"","frameDelay:num":"8","Anchor":"","anchorX:str":"right","anchorY:str":"middle","Position":"","positionX:str":"left","positionY:str":"middle","Offset":"","offsetX:num":"+0","offsetY:num":"+0","Wave":"","waveType:str":"horz","waveSpeed:num":"0.05","waveDistance:num":"10"}
 *
 * @param EnemyCursor:struct
 * @text Enemy Cursor
 * @type struct<BattleCursor>
 * @desc Default battle select cursor settings for enemies.
 * @default {"type:str":"icon","iconIndex:num":"112","pictureFilename:str":"","systemFilename:str":"","frameDelay:num":"8","Anchor":"","anchorX:str":"right","anchorY:str":"middle","Position":"","positionX:str":"left","positionY:str":"middle","Offset":"","offsetX:num":"+0","offsetY:num":"+0","Wave":"","waveType:str":"horz","waveSpeed:num":"0.05","waveDistance:num":"10"}
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
 * BattleCursor Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~BattleCursor:
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
 * @desc Select the appearance type for the battle select cursor.
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
 * @default right
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
 * @default middle
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
 * @min 1
 * @desc Select how far the cursor sprite will oscillate from its origin.
 * @default 10
 *
 */
//=============================================================================

const _0x4769=['updateBattleCursorContainer','YomSj','setFrame','1YCcfXa','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','updateFrameIcon','anchorX','scale','exit','pictureFilename','ActorCursor','includes','toLowerCase','opacity','loadBitmap','_baseSprite','extraPositionY','width','iconHeight','EnemyCursor','icon','DMyrE','loadSystem','1379307OUpYGP','lDhxz','type','STR','JSON','none','TYYnu','Spriteset_Battle_update','vert','_distortionSprite','waveDistance','_frameCols','setBase','actor','createBattleSelectCursor','_frameIndex','iconIndex','anchorY','systemFilename','PartyIndex','BattleCursorChangeActorSettings','Tvkxc','note','cos','members','initMembers','createBattleFieldContainer','1692144tNpZuf','skfnw','eAQmC','EnemyIndex','status','offsetY','iconWidth','max','zUVND','fwTKG','XKCWg','updateBattleSelectCursor','Sprite_Enemy_initMembers','Spriteset_Battle_createBattleFieldContainer','bottom','positionY','ARRAYSTRUCT','ConvertParams','DOcve','call','_enemySprites','description','_actorSprites','frameCount','map','trim','KcOuL','BattleCursorChangeEnemySettings','VisuMZ_1_BattleCore','update','ARRAYEVAL','version','name','BMDaW','_frameMax','registerCommand','ARRAYNUM','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','1725364WlXpAt','return\x200','updatePosition','concat','_cache','waveSpeed','adjustFlippedBattlefield','makeDeepCopy','1109888WZawuB','setBattler','BQClU','create','_battler','HrgAX','_frameRows','hlCIl','ARRAYSTR','WwyzO','prototype','CifoZ','oLBhg','_settings','offsetX','right','filter','parse','constructor','_battleSelectCursorSprite','findTargetSprite','_baseY','center','updateBattler','Sprite_Actor_initMembers','_battleCursorData','isSideView','floor','format','TIgxY','applyBattleCursorNotetags','HSvgZ','JgFpv','ARRAYFUNC','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','addChild','determineFrameColsRows','isSceneBattle','initialize','round','Sprite_Battler_setBattler','ActorIDs','updateOpacity','NUM','anchor','IconSet','1517610vHCmSz','parent','BattleCursor','Settings','bjqMb','TcysG','HLaWD','system','horz','ARRAYJSON','updateFrame','top','Spriteset_Battle_adjustFlippedBattlefield','parameters','_battleCursorContainer','loadPicture','waveType','picture','createBattleCursorData','_baseX','updateScale','left','_battlerContainer','1315643pUfTCh','Amkvc','battleCursor','updateAnchor','match','updateWave','_spriteset','AUCXQ','_scene','1805463oRfAcE','middle','setBattleCursor','height','EVAL','bitmap','frameDelay'];const _0x550623=_0x4028;(function(_0x19f26a,_0x17da30){const _0x373846=_0x4028;while(!![]){try{const _0x26ecf3=parseInt(_0x373846(0x14d))+parseInt(_0x373846(0x104))+parseInt(_0x373846(0x145))+-parseInt(_0x373846(0xf0))*parseInt(_0x373846(0xdd))+parseInt(_0x373846(0x17b))+-parseInt(_0x373846(0xe6))+-parseInt(_0x373846(0x11f));if(_0x26ecf3===_0x17da30)break;else _0x19f26a['push'](_0x19f26a['shift']());}catch(_0x317c68){_0x19f26a['push'](_0x19f26a['shift']());}}}(_0x4769,0xe0587));function _0x4028(_0x2963e2,_0x577e96){_0x2963e2=_0x2963e2-0xd7;let _0x4769da=_0x4769[_0x2963e2];return _0x4769da;}var label=_0x550623(0x17d),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x550623(0x15d)](function(_0x258d90){const _0x2e9e32=_0x550623;return _0x258d90[_0x2e9e32(0x123)]&&_0x258d90[_0x2e9e32(0x134)][_0x2e9e32(0xf8)]('['+label+']');})[0x0];VisuMZ[label][_0x550623(0x17e)]=VisuMZ[label][_0x550623(0x17e)]||{},VisuMZ[_0x550623(0x130)]=function(_0x33e8d5,_0x381153){const _0x557f51=_0x550623;for(const _0x26d801 in _0x381153){if(_0x557f51(0xe4)!==_0x557f51(0x127)){if(_0x26d801['match'](/(.*):(.*)/i)){const _0xcab532=String(RegExp['$1']),_0x5cf63f=String(RegExp['$2'])['toUpperCase']()['trim']();let _0x1202df,_0x341c7f,_0x15df8f;switch(_0x5cf63f){case _0x557f51(0x178):_0x1202df=_0x381153[_0x26d801]!==''?Number(_0x381153[_0x26d801]):0x0;break;case _0x557f51(0x143):_0x341c7f=_0x381153[_0x26d801]!==''?JSON[_0x557f51(0x15e)](_0x381153[_0x26d801]):[],_0x1202df=_0x341c7f['map'](_0x1469f9=>Number(_0x1469f9));break;case _0x557f51(0xea):_0x1202df=_0x381153[_0x26d801]!==''?eval(_0x381153[_0x26d801]):null;break;case _0x557f51(0x13d):_0x341c7f=_0x381153[_0x26d801]!==''?JSON['parse'](_0x381153[_0x26d801]):[],_0x1202df=_0x341c7f[_0x557f51(0x137)](_0x3cd913=>eval(_0x3cd913));break;case _0x557f51(0x108):_0x1202df=_0x381153[_0x26d801]!==''?JSON[_0x557f51(0x15e)](_0x381153[_0x26d801]):'';break;case _0x557f51(0x184):_0x341c7f=_0x381153[_0x26d801]!==''?JSON[_0x557f51(0x15e)](_0x381153[_0x26d801]):[],_0x1202df=_0x341c7f['map'](_0x5791b4=>JSON[_0x557f51(0x15e)](_0x5791b4));break;case'FUNC':_0x1202df=_0x381153[_0x26d801]!==''?new Function(JSON[_0x557f51(0x15e)](_0x381153[_0x26d801])):new Function(_0x557f51(0x146));break;case _0x557f51(0x16e):_0x341c7f=_0x381153[_0x26d801]!==''?JSON[_0x557f51(0x15e)](_0x381153[_0x26d801]):[],_0x1202df=_0x341c7f[_0x557f51(0x137)](_0x2c9170=>new Function(JSON[_0x557f51(0x15e)](_0x2c9170)));break;case _0x557f51(0x107):_0x1202df=_0x381153[_0x26d801]!==''?String(_0x381153[_0x26d801]):'';break;case _0x557f51(0x155):_0x341c7f=_0x381153[_0x26d801]!==''?JSON[_0x557f51(0x15e)](_0x381153[_0x26d801]):[],_0x1202df=_0x341c7f[_0x557f51(0x137)](_0x2c9e84=>String(_0x2c9e84));break;case'STRUCT':_0x15df8f=_0x381153[_0x26d801]!==''?JSON[_0x557f51(0x15e)](_0x381153[_0x26d801]):{},_0x1202df=VisuMZ[_0x557f51(0x130)]({},_0x15df8f);break;case _0x557f51(0x12f):_0x341c7f=_0x381153[_0x26d801]!==''?JSON[_0x557f51(0x15e)](_0x381153[_0x26d801]):[],_0x1202df=_0x341c7f['map'](_0x46cd71=>VisuMZ[_0x557f51(0x130)]({},JSON[_0x557f51(0x15e)](_0x46cd71)));break;default:continue;}_0x33e8d5[_0xcab532]=_0x1202df;}}else{function _0x4c60c1(){const _0x174cd0=_0x557f51;_0xa25321['BattleCursor']['Sprite_Battler_setBattler'][_0x174cd0(0x132)](this,_0x56f7af),this[_0x174cd0(0x160)]&&this[_0x174cd0(0x160)][_0x174cd0(0x14e)](_0x4f58b5);}}}return _0x33e8d5;},(_0x1238cc=>{const _0x41c528=_0x550623,_0xc0bb96=_0x1238cc[_0x41c528(0x13f)];for(const _0x18c578 of dependencies){if(!Imported[_0x18c578]){alert(_0x41c528(0x144)[_0x41c528(0x169)](_0xc0bb96,_0x18c578)),SceneManager[_0x41c528(0xf5)]();break;}}const _0x1c7a0f=_0x1238cc[_0x41c528(0x134)];if(_0x1c7a0f['match'](/\[Version[ ](.*?)\]/i)){const _0x3bd8c5=Number(RegExp['$1']);if(_0x3bd8c5!==VisuMZ[label][_0x41c528(0x13e)]){if('Amkvc'!==_0x41c528(0xde)){function _0x362ed9(){const _0x4caa5d=_0x41c528;this[_0x4caa5d(0x166)][_0x4caa5d(0x18b)]='none',this[_0x4caa5d(0x166)]['waveDistance']=0x1;}}else alert(_0x41c528(0xf1)[_0x41c528(0x169)](_0xc0bb96,_0x3bd8c5)),SceneManager[_0x41c528(0xf5)]();}}if(_0x1c7a0f[_0x41c528(0xe1)](/\[Tier[ ](\d+)\]/i)){const _0x42ce8f=Number(RegExp['$1']);if(_0x42ce8f<tier)alert(_0x41c528(0x16f)[_0x41c528(0x169)](_0xc0bb96,_0x42ce8f,tier)),SceneManager[_0x41c528(0xf5)]();else{if(_0x41c528(0x128)!==_0x41c528(0x102))tier=Math[_0x41c528(0x126)](_0x42ce8f,tier);else{function _0x5e6862(){const _0x19cb68=_0x41c528;this[_0x19cb68(0x15a)]=null;}}}}VisuMZ[_0x41c528(0x130)](VisuMZ[label][_0x41c528(0x17e)],_0x1238cc[_0x41c528(0x188)]);})(pluginData),PluginManager[_0x550623(0x142)](pluginData[_0x550623(0x13f)],_0x550623(0x118),_0x5947d1=>{const _0x501d42=_0x550623;VisuMZ[_0x501d42(0x130)](_0x5947d1,_0x5947d1);const _0x31f753=JsonEx[_0x501d42(0x14c)](_0x5947d1);_0x31f753['ActorIDs']=undefined;const _0x29ab9d=_0x5947d1[_0x501d42(0x176)][_0x501d42(0x137)](_0x47d003=>$gameActors[_0x501d42(0x111)](_0x47d003));for(const _0x44636d of _0x29ab9d){if('RqepK'===_0x501d42(0x120)){function _0x2ea5b2(){this['x']-=_0x35cb18['x'],this['y']-=_0x1a2252['y'];}}else{if(!_0x44636d)continue;_0x44636d[_0x501d42(0xe8)](_0x31f753);if(SceneManager[_0x501d42(0x172)]()){const _0x4e18cd=SceneManager[_0x501d42(0xe5)];if(!_0x4e18cd)continue;const _0xa05b61=_0x4e18cd['_spriteset'];if(!_0xa05b61)continue;const _0x2cdb51=_0xa05b61['findTargetSprite'](_0x44636d);if(_0x2cdb51)_0x2cdb51[_0x501d42(0x12a)]();}}}}),PluginManager[_0x550623(0x142)](pluginData['name'],'BattleCursorChangePartySettings',_0x1e6f3a=>{const _0x36a29e=_0x550623;VisuMZ['ConvertParams'](_0x1e6f3a,_0x1e6f3a);const _0x5c13cf=JsonEx[_0x36a29e(0x14c)](_0x1e6f3a);_0x5c13cf[_0x36a29e(0x117)]=undefined;const _0x2f1266=_0x1e6f3a[_0x36a29e(0x117)][_0x36a29e(0x137)](_0x395d97=>$gameParty[_0x36a29e(0x11c)]()[_0x395d97]);for(const _0x493a84 of _0x2f1266){if(!_0x493a84)continue;_0x493a84['setBattleCursor'](_0x5c13cf);if(SceneManager['isSceneBattle']()){if(_0x36a29e(0x16c)===_0x36a29e(0x16c)){const _0x4b7623=SceneManager['_scene'];if(!_0x4b7623)continue;const _0x1c82d0=_0x4b7623['_spriteset'];if(!_0x1c82d0)continue;const _0x48951c=_0x1c82d0[_0x36a29e(0x161)](_0x493a84);if(_0x48951c)_0x48951c[_0x36a29e(0x12a)]();}else{function _0x514a01(){const _0x1cecb8=_0x36a29e;this[_0x1cecb8(0x177)](),this[_0x1cecb8(0xda)](),this[_0x1cecb8(0x185)](),this[_0x1cecb8(0x147)](),this[_0x1cecb8(0xe2)]();}}}}}),PluginManager[_0x550623(0x142)](pluginData['name'],_0x550623(0x13a),_0x1ecf03=>{const _0x30a27d=_0x550623;if(!SceneManager['isSceneBattle']())return;VisuMZ[_0x30a27d(0x130)](_0x1ecf03,_0x1ecf03);const _0x279cfe=JsonEx[_0x30a27d(0x14c)](_0x1ecf03);_0x279cfe[_0x30a27d(0x122)]=undefined;const _0x59b76d=_0x1ecf03[_0x30a27d(0x122)]['map'](_0x5423e1=>$gameTroop['members']()[_0x5423e1]);for(const _0x4b3a04 of _0x59b76d){if(!_0x4b3a04)continue;_0x4b3a04['setBattleCursor'](_0x279cfe);if(SceneManager[_0x30a27d(0x172)]()){if(_0x30a27d(0x105)!==_0x30a27d(0x105)){function _0x20dd51(){const _0x503153=_0x30a27d;if(_0x325df5[_0x503153(0x136)]%this[_0x503153(0x15a)][_0x503153(0xec)]>0x0)return;}}else{const _0x55d07c=SceneManager[_0x30a27d(0xe5)];if(!_0x55d07c)continue;const _0x574f02=_0x55d07c[_0x30a27d(0xe3)];if(!_0x574f02)continue;const _0x1e5405=_0x574f02['findTargetSprite'](_0x4b3a04);if(_0x1e5405)_0x1e5405[_0x30a27d(0x12a)]();}}}}),SceneManager['isSceneBattle']=function(){const _0x4952a3=_0x550623;return this[_0x4952a3(0xe5)]&&this[_0x4952a3(0xe5)][_0x4952a3(0x15f)]===Scene_Battle;},Game_BattlerBase[_0x550623(0x157)][_0x550623(0xdf)]=function(){const _0x44a58c=_0x550623;return!this[_0x44a58c(0x166)]&&this[_0x44a58c(0xd8)](),this[_0x44a58c(0x166)];},Game_BattlerBase[_0x550623(0x157)]['createBattleCursorData']=function(){const _0x2af060=_0x550623;this[_0x2af060(0x166)]={'type':_0x2af060(0x101),'iconIndex':0x70,'pictureFilename':'','systemFilename':'','frameDelay':0xf4240,'anchorX':_0x2af060(0x15c),'anchorY':_0x2af060(0xe7),'positionX':_0x2af060(0xdb),'positionY':_0x2af060(0xe7),'offsetX':0x0,'offsetY':0x0,'waveType':_0x2af060(0x183),'waveSpeed':0.05,'waveDistance':0xa};},Game_BattlerBase[_0x550623(0x157)][_0x550623(0xe8)]=function(_0x3d9318){const _0x2a58c8=_0x550623;this[_0x2a58c8(0x166)]=_0x3d9318;},Game_Battler['prototype'][_0x550623(0x16b)]=function(_0x54091f){const _0x2c6160=_0x550623;if(!_0x54091f)return;const _0x1588d1=this[_0x2c6160(0x166)];if(_0x54091f[_0x2c6160(0xe1)](/<BATTLE (?:SELECT CURSOR|CURSOR) ICON:[ ](.*)>/i)){if('wPTWy'===_0x2c6160(0x17f)){function _0x497ab4(){this['_battleSelectCursorSprite']['setBattler'](_0x2e9542);}}else this[_0x2c6160(0x166)]['type']=_0x2c6160(0x101),this[_0x2c6160(0x166)]['iconIndex']=Number(RegExp['$1']);}if(_0x54091f[_0x2c6160(0xe1)](/<BATTLE (?:SELECT CURSOR|CURSOR) PICTURE:[ ](.*)>/i)){if(_0x2c6160(0x119)===_0x2c6160(0x119))this[_0x2c6160(0x166)][_0x2c6160(0x106)]='picture',this['_battleCursorData'][_0x2c6160(0xf6)]=String(RegExp['$1'])['trim']();else{function _0x1d65c0(){const _0x4fc8e9=_0x2c6160;this[_0x4fc8e9(0x10f)]=_0x35c45a['max'](0x1,_0x388128(_0x3bd8dd['$1'])),this['_frameRows']=_0x3b94fb['max'](0x1,_0x3d921b(_0x348779['$2']));}}}_0x54091f[_0x2c6160(0xe1)](/<BATTLE (?:SELECT CURSOR|CURSOR) SYSTEM:[ ](.*)>/i)&&(this[_0x2c6160(0x166)][_0x2c6160(0x106)]=_0x2c6160(0x182),this[_0x2c6160(0x166)][_0x2c6160(0x116)]=String(RegExp['$1'])[_0x2c6160(0x138)]());if(_0x54091f[_0x2c6160(0xe1)](/<BATTLE (?:SELECT CURSOR|CURSOR) FRAME DELAY:[ ](.*)>/i)){if(_0x2c6160(0xee)===_0x2c6160(0xee))this[_0x2c6160(0x166)][_0x2c6160(0xec)]=Number(RegExp['$1']);else{function _0x1f685f(){this['_battleSelectCursorSprite']=new _0x369cdf(),this['_battleSelectCursorSprite']['setBase'](this),this['addChild'](this['_battleSelectCursorSprite']);}}}if(_0x54091f[_0x2c6160(0xe1)](/<BATTLE (?:SELECT CURSOR|CURSOR) ANCHOR X:[ ](.*)>/i)){const _0x5b0e99=String(RegExp['$1'])[_0x2c6160(0xf9)]()[_0x2c6160(0x138)]();[_0x2c6160(0xdb),_0x2c6160(0x163),_0x2c6160(0x15c)][_0x2c6160(0xf8)](_0x5b0e99)&&(this[_0x2c6160(0x166)][_0x2c6160(0xf3)]=_0x5b0e99);}if(_0x54091f[_0x2c6160(0xe1)](/<BATTLE (?:SELECT CURSOR|CURSOR) ANCHOR Y:[ ](.*)>/i)){if('sgKMx'===_0x2c6160(0x16a)){function _0x14ffef(){const _0x1fc0b5=_0x2c6160;this[_0x1fc0b5(0x173)](...arguments);}}else{const _0x52f8d5=String(RegExp['$1'])[_0x2c6160(0xf9)]()[_0x2c6160(0x138)]();if([_0x2c6160(0x186),_0x2c6160(0xe7),'bottom']['includes'](_0x52f8d5)){if(_0x2c6160(0x180)!==_0x2c6160(0x180)){function _0x19df2e(){const _0x4d5cfa=_0x2c6160;this[_0x4d5cfa(0x166)]=_0x26b54f['makeDeepCopy'](_0xcee3ef[_0x4d5cfa(0x17d)][_0x4d5cfa(0x17e)]['ActorCursor']),this['applyBattleCursorNotetags'](this[_0x4d5cfa(0x111)]()[_0x4d5cfa(0x11a)]);}}else this['_battleCursorData'][_0x2c6160(0x115)]=_0x52f8d5;}}}if(_0x54091f[_0x2c6160(0xe1)](/<BATTLE (?:SELECT CURSOR|CURSOR) POSITION X:[ ](.*)>/i)){const _0x23d94b=String(RegExp['$1'])[_0x2c6160(0xf9)]()['trim']();if([_0x2c6160(0xdb),_0x2c6160(0x163),'right'][_0x2c6160(0xf8)](_0x23d94b)){if(_0x2c6160(0x159)!=='PxfbA')this[_0x2c6160(0x166)]['positionX']=_0x23d94b;else{function _0x1878e4(){const _0x4a6578=_0x2c6160;_0x13a3fc['BattleCursor'][_0x4a6578(0x10b)][_0x4a6578(0x132)](this),this[_0x4a6578(0xed)]();}}}}if(_0x54091f[_0x2c6160(0xe1)](/<BATTLE (?:SELECT CURSOR|CURSOR) POSITION Y:[ ](.*)>/i)){const _0x4a17b5=String(RegExp['$1'])[_0x2c6160(0xf9)]()[_0x2c6160(0x138)]();if([_0x2c6160(0x186),_0x2c6160(0xe7),_0x2c6160(0x12d)][_0x2c6160(0xf8)](_0x4a17b5)){if('CifoZ'!==_0x2c6160(0x158)){function _0x4779fe(){const _0x58b886=_0x2c6160;_0x7f65bc(_0x58b886(0xf1)[_0x58b886(0x169)](_0x198530,_0x30b271)),_0x32ba77['exit']();}}else this['_battleCursorData'][_0x2c6160(0x12e)]=_0x4a17b5;}}if(_0x54091f['match'](/<BATTLE (?:SELECT CURSOR|CURSOR) OFFSET X:[ ](.*)>/i)){if(_0x2c6160(0x16d)===_0x2c6160(0x156)){function _0x2522de(){const _0x105631=_0x2c6160,_0x29ecd3=this[_0x105631(0x15a)]['waveType'];if(_0x29ecd3===_0x105631(0x109))return;if(this[_0x105631(0x15a)][_0x105631(0x10e)]<=0x0)return;const _0x243a5c=this[_0x105631(0x15a)][_0x105631(0x10e)],_0x4d5310=this['_settings']['waveSpeed'],_0x1de904=_0xa15c40[_0x105631(0x174)](_0x261d6f['cos'](_0x4e7b83[_0x105631(0x136)]*_0x4d5310)*_0x243a5c);if(_0x29ecd3===_0x105631(0x183))this['x']+=_0x1de904;else _0x29ecd3===_0x105631(0x10c)&&(this['y']+=_0x1de904);}}else this['_battleCursorData'][_0x2c6160(0x15b)]=Number(RegExp['$1']);}if(_0x54091f[_0x2c6160(0xe1)](/<BATTLE (?:SELECT CURSOR|CURSOR) OFFSET Y:[ ](.*)>/i)){if(_0x2c6160(0x121)!==_0x2c6160(0x139))this[_0x2c6160(0x166)]['offsetY']=Number(RegExp['$1']);else{function _0x3faff9(){const _0x1fbbad=_0x2c6160;_0x2cc210*=_0x453a49['_distortionSprite'][_0x1fbbad(0xf4)]['x'],_0xf92325*=_0x5dfc4a[_0x1fbbad(0x10d)]['scale']['y'],_0x308e7f+=_0x4e339d[_0x1fbbad(0xfd)]();}}}_0x54091f[_0x2c6160(0xe1)](/<BATTLE (?:SELECT CURSOR|CURSOR) (?:NO|NONE) WAVE>/i)&&(this['_battleCursorData'][_0x2c6160(0x18b)]=_0x2c6160(0x109),this['_battleCursorData'][_0x2c6160(0x10e)]=0x1);if(_0x54091f[_0x2c6160(0xe1)](/<BATTLE (?:SELECT CURSOR|CURSOR) (?:HORZ|HORIZONTAL) WAVE:[ ](.*)>/i)){if('rZroi'===_0x2c6160(0x131)){function _0x263c91(){const _0x2743c0=_0x2c6160;this[_0x2743c0(0x166)]={'type':'icon','iconIndex':0x70,'pictureFilename':'','systemFilename':'','frameDelay':0xf4240,'anchorX':_0x2743c0(0x15c),'anchorY':_0x2743c0(0xe7),'positionX':_0x2743c0(0xdb),'positionY':_0x2743c0(0xe7),'offsetX':0x0,'offsetY':0x0,'waveType':_0x2743c0(0x183),'waveSpeed':0.05,'waveDistance':0xa};}}else this[_0x2c6160(0x166)][_0x2c6160(0x18b)]=_0x2c6160(0x183),this[_0x2c6160(0x166)][_0x2c6160(0x10e)]=Number(RegExp['$1']);}if(_0x54091f[_0x2c6160(0xe1)](/<BATTLE (?:SELECT CURSOR|CURSOR) (?:VERT|VERTICAL) WAVE:[ ](.*)>/i)){if(_0x2c6160(0x154)!==_0x2c6160(0x154)){function _0xb214ed(){const _0x1c48d4=_0x2c6160;return this[_0x1c48d4(0xe5)]&&this[_0x1c48d4(0xe5)][_0x1c48d4(0x15f)]===_0x50b6a9;}}else this['_battleCursorData'][_0x2c6160(0x18b)]=_0x2c6160(0x10c),this['_battleCursorData'][_0x2c6160(0x10e)]=Number(RegExp['$1']);}if(_0x54091f['match'](/<BATTLE (?:SELECT CURSOR|CURSOR) WAVE SPEED:[ ](.*)>/i)){if(_0x2c6160(0x152)===_0x2c6160(0x152))this['_battleCursorData'][_0x2c6160(0x14a)]=Number(RegExp['$1']);else{function _0x3b5317(){return;}}}this['_battleCursorData'][_0x2c6160(0xec)]=Math[_0x2c6160(0x126)](0x1,this[_0x2c6160(0x166)]['frameDelay']),this[_0x2c6160(0x166)][_0x2c6160(0x106)]===_0x2c6160(0x101)&&(this[_0x2c6160(0x166)][_0x2c6160(0xec)]=0x186a0);},Game_Actor[_0x550623(0x157)][_0x550623(0xd8)]=function(){const _0x9020e5=_0x550623;this[_0x9020e5(0x166)]=JsonEx['makeDeepCopy'](VisuMZ[_0x9020e5(0x17d)]['Settings'][_0x9020e5(0xf7)]),this[_0x9020e5(0x16b)](this['actor']()[_0x9020e5(0x11a)]);},Game_Enemy[_0x550623(0x157)][_0x550623(0xd8)]=function(){const _0x4a1584=_0x550623;this[_0x4a1584(0x166)]=JsonEx[_0x4a1584(0x14c)](VisuMZ[_0x4a1584(0x17d)][_0x4a1584(0x17e)][_0x4a1584(0x100)]),this[_0x4a1584(0x16b)](this['enemy']()[_0x4a1584(0x11a)]);},Sprite_Battler[_0x550623(0x157)]['createBattleSelectCursor']=function(){const _0x5000eb=_0x550623;this[_0x5000eb(0x160)]=new Sprite_BattleSelectCursor(),this[_0x5000eb(0x160)][_0x5000eb(0x110)](this),this[_0x5000eb(0x170)](this[_0x5000eb(0x160)]);},VisuMZ['BattleCursor'][_0x550623(0x175)]=Sprite_Battler[_0x550623(0x157)][_0x550623(0x14e)],Sprite_Battler['prototype'][_0x550623(0x14e)]=function(_0x2a4916){const _0x85d466=_0x550623;VisuMZ[_0x85d466(0x17d)][_0x85d466(0x175)]['call'](this,_0x2a4916);if(this[_0x85d466(0x160)]){if('ApRAf'==='ApRAf')this['_battleSelectCursorSprite'][_0x85d466(0x14e)](_0x2a4916);else{function _0xcac313(){const _0x1e5b5e=_0x85d466;_0x1eca53[_0x1e5b5e(0xe1)](/\[(\d+)x(\d+)\]/i)?(this[_0x1e5b5e(0x10f)]=_0x5e1b8c[_0x1e5b5e(0x126)](0x1,_0x440592(_0x3be883['$1'])),this[_0x1e5b5e(0x153)]=_0x362afe['max'](0x1,_0x9e537b(_0x305e23['$2']))):(this[_0x1e5b5e(0x10f)]=0x1,this[_0x1e5b5e(0x153)]=0x1),this[_0x1e5b5e(0x141)]=this[_0x1e5b5e(0x10f)]*this[_0x1e5b5e(0x153)];}}}},Sprite_Battler[_0x550623(0x157)][_0x550623(0x12a)]=function(){const _0x135af8=_0x550623;if(!this[_0x135af8(0x160)])return;this[_0x135af8(0x160)][_0x135af8(0x164)]();},VisuMZ[_0x550623(0x17d)][_0x550623(0x165)]=Sprite_Actor[_0x550623(0x157)][_0x550623(0x11d)],Sprite_Actor[_0x550623(0x157)]['initMembers']=function(){const _0x29ce9b=_0x550623;VisuMZ['BattleCursor'][_0x29ce9b(0x165)][_0x29ce9b(0x132)](this);if(Imported[_0x29ce9b(0x13b)]&&this[_0x29ce9b(0x15f)]===Sprite_SvEnemy)return;this[_0x29ce9b(0x112)]();},VisuMZ[_0x550623(0x17d)][_0x550623(0x12b)]=Sprite_Enemy[_0x550623(0x157)][_0x550623(0x11d)],Sprite_Enemy[_0x550623(0x157)]['initMembers']=function(){const _0x285eba=_0x550623;VisuMZ[_0x285eba(0x17d)][_0x285eba(0x12b)][_0x285eba(0x132)](this),this[_0x285eba(0x112)]();},VisuMZ[_0x550623(0x17d)][_0x550623(0x12c)]=Spriteset_Battle['prototype'][_0x550623(0x11e)],Spriteset_Battle[_0x550623(0x157)][_0x550623(0x11e)]=function(){const _0x415a99=_0x550623;VisuMZ[_0x415a99(0x17d)][_0x415a99(0x12c)][_0x415a99(0x132)](this),this['_battleCursorContainer']=new Sprite(),this['_battleField']['addChild'](this[_0x415a99(0x189)]);},VisuMZ[_0x550623(0x17d)][_0x550623(0x187)]=Spriteset_Battle[_0x550623(0x157)][_0x550623(0x14b)],Spriteset_Battle[_0x550623(0x157)][_0x550623(0x14b)]=function(){const _0x48948c=_0x550623;VisuMZ[_0x48948c(0x17d)]['Spriteset_Battle_adjustFlippedBattlefield'][_0x48948c(0x132)](this),this[_0x48948c(0x189)]&&this['_battlerContainer']&&(this['_battleCursorContainer'][_0x48948c(0xf4)]['x']=this[_0x48948c(0xdc)]['scale']['x'],this[_0x48948c(0x189)]['scale']['y']=this['_battlerContainer'][_0x48948c(0xf4)]['y'],this[_0x48948c(0x189)]['x']=this['_battlerContainer']['x'],this[_0x48948c(0x189)]['y']=this[_0x48948c(0xdc)]['y']);},VisuMZ[_0x550623(0x17d)][_0x550623(0x10b)]=Spriteset_Battle['prototype']['update'],Spriteset_Battle['prototype'][_0x550623(0x13c)]=function(){const _0x26ae9d=_0x550623;VisuMZ[_0x26ae9d(0x17d)][_0x26ae9d(0x10b)][_0x26ae9d(0x132)](this),this[_0x26ae9d(0xed)]();},Spriteset_Battle[_0x550623(0x157)]['updateBattleCursorContainer']=function(){const _0x240f43=_0x550623;if(!this['_battleCursorContainer'])return;let _0x2da41a=this[_0x240f43(0x133)];$gameSystem[_0x240f43(0x167)]()&&(_0x2da41a=_0x2da41a[_0x240f43(0x148)](this[_0x240f43(0x135)]));for(const _0xe269af of _0x2da41a){if(!_0xe269af)continue;const _0x4b1b69=_0xe269af[_0x240f43(0x160)];_0x4b1b69&&this[_0x240f43(0x189)][_0x240f43(0x170)](_0x4b1b69);}};function Sprite_BattleSelectCursor(){const _0x2b05fb=_0x550623;this[_0x2b05fb(0x173)](...arguments);}Sprite_BattleSelectCursor[_0x550623(0x157)]=Object[_0x550623(0x150)](Sprite[_0x550623(0x157)]),Sprite_BattleSelectCursor[_0x550623(0x157)][_0x550623(0x15f)]=Sprite_BattleSelectCursor,Sprite_BattleSelectCursor['prototype'][_0x550623(0x173)]=function(){const _0x17a1bf=_0x550623;Sprite['prototype'][_0x17a1bf(0x173)][_0x17a1bf(0x132)](this),this[_0x17a1bf(0x11d)]();},Sprite_BattleSelectCursor[_0x550623(0x157)]['initMembers']=function(){const _0x24644c=_0x550623;this[_0x24644c(0x151)]=null,this[_0x24644c(0x15a)]=null,this[_0x24644c(0x113)]=0x0,this[_0x24644c(0x10f)]=0x1,this[_0x24644c(0x153)]=0x1,this[_0x24644c(0x141)]=0x1,this[_0x24644c(0x149)]={'scale':{'x':0x1,'y':0x1}},this['opacity']=0x0;},Sprite_BattleSelectCursor['prototype']['setBase']=function(_0x28672b){const _0x9fcab7=_0x550623;this[_0x9fcab7(0xfc)]=_0x28672b;},Sprite_BattleSelectCursor[_0x550623(0x157)][_0x550623(0x14e)]=function(_0x3b1215){const _0x4c6b60=_0x550623;if(this[_0x4c6b60(0x151)]===_0x3b1215)return;this[_0x4c6b60(0x151)]=_0x3b1215,this[_0x4c6b60(0x151)]?this[_0x4c6b60(0x164)]():this[_0x4c6b60(0x15a)]=null;},Sprite_BattleSelectCursor[_0x550623(0x157)][_0x550623(0x164)]=function(){const _0x3a85d3=_0x550623;this['_settings']=this[_0x3a85d3(0x151)]['battleCursor'](),this[_0x3a85d3(0xe0)](),this[_0x3a85d3(0xfb)]();},Sprite_BattleSelectCursor[_0x550623(0x157)][_0x550623(0xe0)]=function(){const _0x1156eb=_0x550623;switch(this[_0x1156eb(0x15a)][_0x1156eb(0xf3)]){case _0x1156eb(0xdb):this[_0x1156eb(0x179)]['x']=0x0;break;case _0x1156eb(0x163):this[_0x1156eb(0x179)]['x']=0.5;break;case _0x1156eb(0x15c):this['anchor']['x']=0x1;break;}switch(this[_0x1156eb(0x15a)][_0x1156eb(0x115)]){case _0x1156eb(0x186):this[_0x1156eb(0x179)]['y']=0x0;break;case _0x1156eb(0xe7):this[_0x1156eb(0x179)]['y']=0.5;break;case _0x1156eb(0x12d):this['anchor']['y']=0x1;break;}},Sprite_BattleSelectCursor[_0x550623(0x157)][_0x550623(0xfb)]=function(){const _0x4936d4=_0x550623;if(!this[_0x4936d4(0x15a)])return;switch(this[_0x4936d4(0x15a)][_0x4936d4(0x106)]){case _0x4936d4(0x101):this['bitmap']=ImageManager['loadSystem'](_0x4936d4(0x17a));break;case _0x4936d4(0xd7):this['bitmap']=ImageManager[_0x4936d4(0x18a)](this[_0x4936d4(0x15a)]['pictureFilename']),this[_0x4936d4(0x171)](this[_0x4936d4(0x15a)][_0x4936d4(0xf6)]);break;case _0x4936d4(0x182):this[_0x4936d4(0xeb)]=ImageManager[_0x4936d4(0x103)](this[_0x4936d4(0x15a)][_0x4936d4(0x116)]),this[_0x4936d4(0x171)](this[_0x4936d4(0x15a)][_0x4936d4(0x116)]);break;}this['_frameIndex']=0x0,this[_0x4936d4(0xeb)]['addLoadListener'](this['updateFrame']['bind'](this,!![]));},Sprite_BattleSelectCursor[_0x550623(0x157)]['determineFrameColsRows']=function(_0x31330a){const _0x393c91=_0x550623;_0x31330a['match'](/\[(\d+)x(\d+)\]/i)?(this[_0x393c91(0x10f)]=Math[_0x393c91(0x126)](0x1,Number(RegExp['$1'])),this['_frameRows']=Math[_0x393c91(0x126)](0x1,Number(RegExp['$2']))):(this[_0x393c91(0x10f)]=0x1,this[_0x393c91(0x153)]=0x1),this['_frameMax']=this[_0x393c91(0x10f)]*this[_0x393c91(0x153)];},Sprite_BattleSelectCursor[_0x550623(0x157)][_0x550623(0x13c)]=function(){const _0x46ac67=_0x550623;Sprite[_0x46ac67(0x157)][_0x46ac67(0x13c)][_0x46ac67(0x132)](this);if(this[_0x46ac67(0x151)]&&this[_0x46ac67(0xeb)]&&this[_0x46ac67(0xeb)][_0x46ac67(0xfe)]>0x0){if(_0x46ac67(0x140)!=='BMDaW'){function _0x4104ce(){const _0x371a7e=_0x46ac67,_0x2ca0d8=_0x301df5(_0x188360['$1'])[_0x371a7e(0xf9)]()[_0x371a7e(0x138)]();['top','middle',_0x371a7e(0x12d)][_0x371a7e(0xf8)](_0x2ca0d8)&&(this[_0x371a7e(0x166)][_0x371a7e(0x115)]=_0x2ca0d8);}}else this[_0x46ac67(0x177)](),this[_0x46ac67(0xda)](),this[_0x46ac67(0x185)](),this[_0x46ac67(0x147)](),this[_0x46ac67(0xe2)]();}else this['opacity']=0x0;},Sprite_BattleSelectCursor[_0x550623(0x157)]['updateOpacity']=function(){const _0x2b5d2d=_0x550623;this[_0x2b5d2d(0xfa)]=this[_0x2b5d2d(0x151)]['isSelected']()?0xff:0x0;},Sprite_BattleSelectCursor[_0x550623(0x157)][_0x550623(0xda)]=function(){const _0x4550cc=_0x550623;if(!this[_0x4550cc(0x17c)])return;if(this[_0x4550cc(0xfa)]<=0x0)return;if(this['_cache'][_0x4550cc(0xf4)]['x']===this[_0x4550cc(0x17c)][_0x4550cc(0xf4)]['x']&&this[_0x4550cc(0x149)][_0x4550cc(0xf4)]['y']===this[_0x4550cc(0x17c)]['scale']['y'])return;this[_0x4550cc(0xf4)]['x']=0x1/this[_0x4550cc(0x17c)]['scale']['x'],this[_0x4550cc(0xf4)]['y']=0x1/this[_0x4550cc(0x17c)][_0x4550cc(0xf4)]['y'],this['_cache'][_0x4550cc(0xf4)]['x']=this[_0x4550cc(0x17c)]['scale']['x'],this[_0x4550cc(0x149)][_0x4550cc(0xf4)]['y']=this[_0x4550cc(0x17c)][_0x4550cc(0xf4)]['y'];},Sprite_BattleSelectCursor[_0x550623(0x157)][_0x550623(0x185)]=function(_0x8c2e45){const _0x5b7b72=_0x550623;if(!_0x8c2e45){if(_0x5b7b72(0x14f)!=='ZkpZn'){if(Graphics[_0x5b7b72(0x136)]%this[_0x5b7b72(0x15a)][_0x5b7b72(0xec)]>0x0)return;}else{function _0x261e24(){const _0xabf399=_0x5b7b72;this[_0xabf399(0x166)][_0xabf399(0xec)]=0x186a0;}}}switch(this['_settings'][_0x5b7b72(0x106)]){case _0x5b7b72(0x101):this[_0x5b7b72(0xf2)]();break;case'picture':case _0x5b7b72(0x182):this['updateFrameColsRows']();break;};},Sprite_BattleSelectCursor['prototype'][_0x550623(0xf2)]=function(){const _0x41042b=_0x550623,_0x9bbf05=this[_0x41042b(0x15a)][_0x41042b(0x114)],_0x391572=ImageManager[_0x41042b(0x125)],_0x37c243=ImageManager[_0x41042b(0xff)],_0x3a4720=_0x9bbf05%0x10*_0x391572,_0x352003=Math['floor'](_0x9bbf05/0x10)*_0x37c243;this[_0x41042b(0xef)](_0x3a4720,_0x352003,_0x391572,_0x37c243);},Sprite_BattleSelectCursor['prototype']['updateFrameColsRows']=function(){const _0x47e980=_0x550623;this[_0x47e980(0x113)]++;if(this[_0x47e980(0x113)]>=this[_0x47e980(0x141)])this['_frameIndex']=0x0;var _0x2025de=this[_0x47e980(0xeb)][_0x47e980(0xfe)]/this['_frameCols'],_0x3d1266=this[_0x47e980(0xeb)][_0x47e980(0xe9)]/this[_0x47e980(0x153)],_0x29e0c2=this[_0x47e980(0x113)]%this[_0x47e980(0x10f)]*_0x2025de,_0x572228=Math[_0x47e980(0x168)](this['_frameIndex']/this[_0x47e980(0x10f)])*_0x3d1266;this[_0x47e980(0xef)](_0x29e0c2,_0x572228,_0x2025de,_0x3d1266);},Sprite_BattleSelectCursor[_0x550623(0x157)][_0x550623(0x147)]=function(){const _0x490d15=_0x550623;if(!this[_0x490d15(0x17c)])return;const _0x15be60=this[_0x490d15(0xfc)]?this[_0x490d15(0xfc)]:this[_0x490d15(0x17c)];let _0x4a19f0=_0x15be60[_0x490d15(0xfe)],_0x10aae4=_0x15be60[_0x490d15(0xe9)],_0x42e327=_0x15be60[_0x490d15(0xd9)]??_0x15be60['x'],_0x2d7250=_0x15be60[_0x490d15(0x162)]??_0x15be60['y'];Imported[_0x490d15(0x13b)]&&_0x15be60['_distortionSprite']&&(_0x4a19f0*=_0x15be60[_0x490d15(0x10d)][_0x490d15(0xf4)]['x'],_0x10aae4*=_0x15be60[_0x490d15(0x10d)][_0x490d15(0xf4)]['y'],_0x2d7250+=_0x15be60[_0x490d15(0xfd)]());switch(this['_settings']['positionX']){case _0x490d15(0xdb):this['x']=_0x42e327+_0x4a19f0/-0x2;break;case _0x490d15(0x163):this['x']=_0x42e327+0x0;break;case _0x490d15(0x15c):this['x']=_0x42e327+_0x4a19f0/0x2;break;}switch(this[_0x490d15(0x15a)][_0x490d15(0x12e)]){case _0x490d15(0x186):this['y']=_0x2d7250+_0x10aae4*-0x1;break;case _0x490d15(0xe7):this['y']=_0x2d7250+_0x10aae4/-0x2;break;case _0x490d15(0x12d):this['y']=_0x2d7250+0x0;break;}if(_0x15be60&&_0x15be60[_0x490d15(0x151)]&&_0x15be60[_0x490d15(0x151)]['isActor']()&&!$gameSystem[_0x490d15(0x167)]()){if(_0x490d15(0x181)===_0x490d15(0x181))this['x']-=_0x15be60['x'],this['y']-=_0x15be60['y'];else{function _0x514ce8(){const _0x5de36a=_0x490d15;this[_0x5de36a(0x166)][_0x5de36a(0x15b)]=_0x3668f9(_0x948ed6['$1']);}}}this['x']+=this[_0x490d15(0x15a)]['offsetX'],this['y']+=this['_settings'][_0x490d15(0x124)];},Sprite_BattleSelectCursor[_0x550623(0x157)][_0x550623(0xe2)]=function(){const _0x35a47d=_0x550623,_0x35e4f0=this[_0x35a47d(0x15a)]['waveType'];if(_0x35e4f0===_0x35a47d(0x109))return;if(this[_0x35a47d(0x15a)][_0x35a47d(0x10e)]<=0x0)return;const _0x470756=this[_0x35a47d(0x15a)][_0x35a47d(0x10e)],_0x300313=this['_settings'][_0x35a47d(0x14a)],_0x3d109b=Math[_0x35a47d(0x174)](Math[_0x35a47d(0x11b)](Graphics[_0x35a47d(0x136)]*_0x300313)*_0x470756);if(_0x35e4f0===_0x35a47d(0x183)){if('VFqdz'===_0x35a47d(0x129)){function _0x842c47(){const _0x23003c=_0x35a47d;this[_0x23003c(0xfa)]=0x0;}}else this['x']+=_0x3d109b;}else{if(_0x35e4f0===_0x35a47d(0x10c)){if('TYYnu'!==_0x35a47d(0x10a)){function _0x10f10e(){const _0x567ccd=_0x35a47d;if(this[_0x567ccd(0x151)]===_0x3f685a)return;this[_0x567ccd(0x151)]=_0x37e299,this[_0x567ccd(0x151)]?this[_0x567ccd(0x164)]():this[_0x567ccd(0x15a)]=null;}}else this['y']+=_0x3d109b;}}};