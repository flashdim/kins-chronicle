//=============================================================================
// VisuStella MZ - Action Sequence Projectiles
// VisuMZ_3_ActSeqProjectiles.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_ActSeqProjectiles = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ActSeqProjectiles = VisuMZ.ActSeqProjectiles || {};
VisuMZ.ActSeqProjectiles.version = 1.04;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.04] [ActSeqProjectiles]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Action_Sequence_Projectiles_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin adds projectile control the Battle Core's Action Sequences,
 * allowing you, the game dev, to create entities that fire from one screen
 * location to another screen location. These locations can be either battler
 * targets or exact points on the screen. Projectiles can come in the form of
 * pictures, icons, and animations. Make them spin, make them arc, make them
 * travel at differing speeds across the battlefield!
 *
 * Features include all (but not limited to) the following:
 * 
 * * Create projectiles that can be fired across the battlefield.
 * * Projectiles can be pictures, icons, and/or animations.
 * * Action Sequences give you control over where they come from and where
 *   they go: targets and/or points.
 * * Extra settings that give you extra control over projectiles such as
 *   automatic angles, angle offsets, blend modes, trajectory easy, hues,
 *   scaling, and spin speed.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Required Plugin List ------
 *
 * * VisuMZ_0_CoreEngine
 * * VisuMZ_1_BattleCore
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 *
 * ------ Tier 3 ------
 *
 * This plugin is a Tier 3 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Projectile Types
 * ============================================================================
 *
 * Projectiles come in three types: pictures, icons, and animations. Each have
 * their own properties, but ultimately, work very similar.
 *
 * ---
 *
 * Picture Projectiles
 * 
 * These projectiles use images found in the img/pictures/ folder of your game
 * project. Used as static images, they allow you to create projectiles of any
 * size and dimension to your liking. These offer the most flexibility when it
 * comes to options and extra settings.
 *
 * ---
 * 
 * Icon Projectiles
 * 
 * For those who want to save up on resources and utilize the already loaded
 * icon sheet, you can simply select an icon index to pick an icon as the
 * projectile's image. Like pictures, these offer the most flexibility when it
 * comes to options and extra settings.
 * 
 * ---
 * 
 * Animation Projectiles
 * 
 * Those who want a bit more spice in their projectiles and want something that
 * animates can picture animation projectiles. The animation will play through
 * its frames until it hits its end, after which, the animation restarts.
 * However, because animations are much more complicated than just a static
 * image, some options and extra settings are not available for animations.
 * 
 * ---
 *
 * ============================================================================
 * Action Sequence Plugin Commands
 * ============================================================================
 *
 * The following are Action Sequence Plugin Commands that have been added with
 * this plugin. These are accessible from the Battle Core plugin (not this one)
 * in order to keep all the Action Sequences in place.
 * 
 * Once again, these plugin commands are only accessible through the Battle
 * Core plugin and not this one! Make sure you have the most update to date
 * version of the Battle Core for them.
 * 
 * ---
 * 
 * === Action Sequences - Projectiles ===
 * 
 * Create projectiles on the screen and fire them off at a target.
 * Requires VisuMZ_3_ActSeqProjectiles!
 * 
 * ---
 *
 * PROJECTILE: Animation
 * - Create an animation projectile and fire it at a target.
 * - Requires VisuMZ_3_ActSeqProjectiles!
 *
 *   Coordinates:
 *
 *     Start Location:
 *     - Settings to determine where the projectile(s) start from.
 *
 *       Type:
 *       - Select where the projectile should start from.
 *         - Target - Start from battler target(s)
 *         - Point - Start from a point on the screen
 *
 *         Target(s):
 *         - Select which unit(s) to start the projectile from.
 *
 *           Centralize:
 *           - Create one projectile at the center of the targets?
 *           - Or create a projectile for each target?
 * 
 *           Target Location:
 *           - Select which part of the target to send the projectile from.
 *           - front head
 *           - front center
 *           - front base
 *           - middle head
 *           - middle center
 *           - middle base
 *           - back head
 *           - back center
 *           - back base
 *
 *         Point X:
 *         Point Y:
 *         - Insert the X/Y coordinate to start the projectile at.
 *         - You may use JavaScript code.
 *
 *       Offset X:
 *       Offset Y:
 *       - Insert how many pixels to offset the X/Y coordinate by.
 *       - You may use JavaScript code.
 *
 *     Goal Location:
 *     - Settings to determine where the projectile(s) start from.
 *
 *       Type:
 *       - Select where the projectile should go to.
 *         - Target - Goal is battler target(s)
 *         - Point - Goal is a point on the screen
 *
 *         Target(s):
 *         - Select which unit(s) for projectile to go to.
 *
 *           Centralize:
 *           - Create one projectile at the center of the targets?
 *           - Or create a projectile for each target?
 * 
 *           Target Location:
 *           - Select which part of the target to send the projectile to.
 *           - front head
 *           - front center
 *           - front base
 *           - middle head
 *           - middle center
 *           - middle base
 *           - back head
 *           - back center
 *           - back base
 *
 *         Point X:
 *         Point Y:
 *         - Insert the X/Y coordinate to send the projectile to.
 *         - You may use JavaScript code.
 *
 *       Offset X:
 *       Offset Y:
 *       - Insert how many pixels to offset the X/Y coordinate by.
 *       - You may use JavaScript code.
 *
 *   Settings:
 *
 *     Animation ID:
 *     - Determine which animation to use as a projectile.
 *
 *     Duration:
 *     - Duration for the projectile(s) to travel.
 *
 *     Wait For Projectile?:
 *     - Wait for projectile(s) to reach their destination before going onto
 *       the next command?
 *
 *     Extra Settings:
 *     - Add extra settings to the projectile?
 *
 *       Auto Angle?:
 *       - Automatically angle the projectile to tilt the direction
 *         it's moving?
 *
 *       Angle Offset:
 *       - Alter the projectile's tilt by this many degrees.
 *
 *       Arc Peak:
 *       - This is the height of the project's trajectory arc in pixels.
 *
 *       Easing:
 *       - Select which easing type to apply to the projectile's trajectory.
 *
 *       Spin Speed:
 *       - Determine how much angle the projectile spins per frame.
 *       - Does not work well with "Auto Angle".
 *
 * ---
 *
 * PROJECTILE: Icon
 * - Create an icon projectile and fire it at a target.
 * - Requires VisuMZ_3_ActSeqProjectiles!
 *
 *   Coordinates:
 *
 *     Start Location:
 *     - Settings to determine where the projectile(s) start from.
 *
 *       Type:
 *       - Select where the projectile should start from.
 *         - Target - Start from battler target(s)
 *         - Point - Start from a point on the screen
 *
 *         Target(s):
 *         - Select which unit(s) to start the projectile from.
 *
 *           Centralize:
 *           - Create one projectile at the center of the targets?
 *           - Or create a projectile for each target?
 * 
 *           Target Location:
 *           - Select which part of the target to send the projectile from.
 *           - front head
 *           - front center
 *           - front base
 *           - middle head
 *           - middle center
 *           - middle base
 *           - back head
 *           - back center
 *           - back base
 *
 *         Point X:
 *         Point Y:
 *         - Insert the X/Y coordinate to start the projectile at.
 *         - You may use JavaScript code.
 *
 *       Offset X:
 *       Offset Y:
 *       - Insert how many pixels to offset the X/Y coordinate by.
 *       - You may use JavaScript code.
 *
 *     Goal Location:
 *     - Settings to determine where the projectile(s) start from.
 *
 *       Type:
 *       - Select where the projectile should go to.
 *         - Target - Goal is battler target(s)
 *         - Point - Goal is a point on the screen
 *
 *         Target(s):
 *         - Select which unit(s) for projectile to go to.
 *
 *           Centralize:
 *           - Create one projectile at the center of the targets?
 *           - Or create a projectile for each target?
 * 
 *           Target Location:
 *           - Select which part of the target to send the projectile to.
 *           - front head
 *           - front center
 *           - front base
 *           - middle head
 *           - middle center
 *           - middle base
 *           - back head
 *           - back center
 *           - back base
 *
 *         Point X:
 *         Point Y:
 *         - Insert the X/Y coordinate to send the projectile to.
 *         - You may use JavaScript code.
 *
 *       Offset X:
 *       Offset Y:
 *       - Insert how many pixels to offset the X/Y coordinate by.
 *       - You may use JavaScript code.
 *
 *   Settings:
 *
 *     Icon:
 *     - Determine which icon to use as a projectile.
 *
 *     Duration:
 *     - Duration for the projectile(s) to travel.
 *
 *     Wait For Projectile?:
 *     - Wait for projectile(s) to reach their destination before going onto
 *       the next command?
 *
 *     Extra Settings:
 *     - Add extra settings to the projectile?
 *
 *       Auto Angle?:
 *       - Automatically angle the projectile to tilt the direction
 *         it's moving?
 *
 *       Angle Offset:
 *       - Alter the projectile's tilt by this many degrees.
 *
 *       Arc Peak:
 *       - This is the height of the project's trajectory arc in pixels.
 *
 *       Blend Mode:
 *       - What kind of blend mode do you wish to apply to the projectile?
 *         - Normal
 *         - Additive
 *         - Multiply
 *         - Screen
 *
 *       Easing:
 *       - Select which easing type to apply to the projectile's trajectory.
 *
 *       Hue:
 *       - Adjust the hue of the projectile.
 *       - Insert a number between 0 and 360.
 *
 *       Scale:
 *       - Adjust the size scaling of the projectile.
 *       - Use decimals for exact control.
 *
 *       Spin Speed:
 *       - Determine how much angle the projectile spins per frame.
 *       - Does not work well with "Auto Angle".
 *
 * ---
 *
 * PROJECTILE: Picture
 * - Create a picture projectile and fire it at a target.
 * - Requires VisuMZ_3_ActSeqProjectiles!
 *
 *   Coordinates:
 *
 *     Start Location:
 *     - Settings to determine where the projectile(s) start from.
 *
 *       Type:
 *       - Select where the projectile should start from.
 *         - Target - Start from battler target(s)
 *         - Point - Start from a point on the screen
 *
 *         Target(s):
 *         - Select which unit(s) to start the projectile from.
 *
 *           Centralize:
 *           - Create one projectile at the center of the targets?
 *           - Or create a projectile for each target?
 * 
 *           Target Location:
 *           - Select which part of the target to send the projectile from.
 *           - front head
 *           - front center
 *           - front base
 *           - middle head
 *           - middle center
 *           - middle base
 *           - back head
 *           - back center
 *           - back base
 *
 *         Point X:
 *         Point Y:
 *         - Insert the X/Y coordinate to start the projectile at.
 *         - You may use JavaScript code.
 *
 *       Offset X:
 *       Offset Y:
 *       - Insert how many pixels to offset the X/Y coordinate by.
 *       - You may use JavaScript code.
 *
 *     Goal Location:
 *     - Settings to determine where the projectile(s) start from.
 *
 *       Type:
 *       - Select where the projectile should go to.
 *         - Target - Goal is battler target(s)
 *         - Point - Goal is a point on the screen
 *
 *         Target(s):
 *         - Select which unit(s) for projectile to go to.
 *
 *           Centralize:
 *           - Create one projectile at the center of the targets?
 *           - Or create a projectile for each target?
 * 
 *           Target Location:
 *           - Select which part of the target to send the projectile to.
 *           - front head
 *           - front center
 *           - front base
 *           - middle head
 *           - middle center
 *           - middle base
 *           - back head
 *           - back center
 *           - back base
 *
 *         Point X:
 *         Point Y:
 *         - Insert the X/Y coordinate to send the projectile to.
 *         - You may use JavaScript code.
 *
 *       Offset X:
 *       Offset Y:
 *       - Insert how many pixels to offset the X/Y coordinate by.
 *       - You may use JavaScript code.
 *
 *   Settings:
 *
 *     Picture Filename:
 *     - Determine which picture to use as a projectile.
 *
 *     Duration:
 *     - Duration for the projectile(s) to travel.
 *
 *     Wait For Projectile?:
 *     - Wait for projectile(s) to reach their destination before going onto
 *       the next command?
 *
 *     Extra Settings:
 *     - Add extra settings to the projectile?
 *
 *       Auto Angle?:
 *       - Automatically angle the projectile to tilt the direction
 *         it's moving?
 *
 *       Angle Offset:
 *       - Alter the projectile's tilt by this many degrees.
 *
 *       Arc Peak:
 *       - This is the height of the project's trajectory arc in pixels.
 *
 *       Blend Mode:
 *       - What kind of blend mode do you wish to apply to the projectile?
 *         - Normal
 *         - Additive
 *         - Multiply
 *         - Screen
 *
 *       Easing:
 *       - Select which easing type to apply to the projectile's trajectory.
 *
 *       Hue:
 *       - Adjust the hue of the projectile.
 *       - Insert a number between 0 and 360.
 *
 *       Scale:
 *       - Adjust the size scaling of the projectile.
 *       - Use decimals for exact control.
 *
 *       Spin Speed:
 *       - Determine how much angle the projectile spins per frame.
 *       - Does not work well with "Auto Angle".
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Angle Adjustment Settings
 * ============================================================================
 *
 * These settings are primarily used to automatically adjust the angle of any
 * pictures, icon, and/or animation so that they work with the automatic
 * angling of the projectiles as to always appear aimed at the goal point.
 *
 * ---
 *
 * Angle Adjustments
 * 
 *   Animation Angle:
 *   - Adjust projectile angle for animations by this many degrees.
 * 
 *   Icon Angle:
 *   - Adjust projectile angle for icons by this many degrees.
 * 
 *   Picture Angle:
 *   - Adjust projectile angle for pictures by this many degrees.
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
 * Version 1.04: April 30, 2021
 * * Bug Fixes!
 * ** Added fail safe for older versions of the projectile plugin commands that
 *    have not been updated. Fix made by Yanfly.
 * 
 * Version 1.03: April 23, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** "Start Location" and "Goal Location" now have "Target Location" parameter
 *    to determine which part of the target's body to send the projectile from
 *    or towards. Added by Olivia.
 * ** Requires VisuMZ_1_BattleCore version 1.34 to have affect.
 * 
 * Version 1.02: January 22, 2021
 * * Bug Fixes!
 * ** Projectile start locations and end locations now factor in a target's
 *    additional Y position from jumping and/or floating. Fix made by Irina.
 * 
 * Version 1.01: December 25, 2020
 * * Bug Fixes!
 * ** Settings are no longer cached and are now independent for one another.
 *    Fix made by Yanfly.
 *
 * Version 1.00: January 13, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ActSeqProjectiles
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param AngleAdjustments
 * @text Angle Adjustments
 *
 * @param AnimationAngleAdjust:num
 * @text Animation Angle
 * @parent AngleAdjustments
 * @desc Adjust projectile angle for animations by this many degrees.
 * @default 225
 *
 * @param IconAngleAdjust:num
 * @text Icon Angle
 * @parent AngleAdjustments
 * @desc Adjust projectile angle for icons by this many degrees.
 * @default 135
 *
 * @param PictureAngleAdjust:num
 * @text Picture Angle
 * @parent AngleAdjustments
 * @desc Adjust projectile angle for pictures by this many degrees.
 * @default 135
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
//=============================================================================

const _0x544a=['anchor','STRUCT','middle\x20center','setupIconFrame','IconAngleAdjust','_handle','_battleField','pngPX','requestActSeqProjectilesAnimation','updateEffectGeometry','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','1DiSBYz','animationShouldMirror','parent','_spriteset','Picture','STR','createActSeqProjectilesAnimationQueue','setupPictureFrame','10875vCijgx','_muteSound','_effectsContainer','trim','Settings','Spriteset_Battle_createBattleFieldContainer','version','createActSeqProjectilesAnimationSprite','LINEAR','gdYtv','FmONx','loadSystem','name','Spriteset_Base_update','restartActSeqProjectilesAnimation','iJExm','137554VvUvzG','Duration','mirror','Hue','_moveCalcX','86831hYGWWL','createBattleFieldContainer','setFrame','startProjectile','FMFAn','setHue','setupCoordinates','height','rotation','Sprite_Animation_updateEffectGeometry','children','_moveBaseY','Extra','_endReady','_scene','center','toLowerCase','AnimationAngleAdjust','_ActSeqProjectilesAnimationSprites','FUNC','_startReady','_moveDuration','floor','round','volume','processTimingData','PictureAngleAdjust','ZuKQL','map','extraPositionY','blendMode','CzLcr','aLjQD','setRotation','cmxxs','targetObjects','_statusWindow','TargetLocation','prototype','length','CreateCoordinates','Targets','ApplyEasing','front','format','PointY','AngleOffset','Goal','48BZUeFq','parameters','pow','isAnyProjectilePresent','call','Arc','loadPicture','isActSeqProjectilesAnimationPlaying','Spin','_battlerContainer','_windowLayer','AutoAngle','TargetCenter','isActor','iconHeight','update','battler','ARRAYEVAL','addChild','atan2','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','isPlaying','endAnimation','_easing','_adjustedProjectileRadians','Game_Temp_initialize','angle','_moveTotalDuration','LgqNZ','_settings','createBitmap','Qpuhm','bind','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','309754whlICJ','NRDfz','createActSeqProjectilesAnimation','ConvertParams','target','endProjectile','isMVAnimation','back','_projectilesContainer','fTkfY','parse','_ActSeqProjectilesAnimationQueue','retrieveActSeqProjectilesAnimation','EasingType','ActSeqProjectiles','startAnimation','return\x200','4CYBjJt','400592xhUscV','_moveTargetY','VjOWD','initialize','ZZlVE','ARRAYFUNC','Icon','create','_moveCalcY','max','Spriteset_Base_initialize','Seiam','setMute','mute','match','_radianAdjustment','bitmap','isAnimationForEach','includes','EVAL','Sprite_AnimationMV_processTimingData','_moveTargetX','applyAngle','toUpperCase','_mirror','sqOiZ','makeDeepCopy','_baseX','EIqUD','_moveTime','AnimationID','_animationSprite','description','adjustFlippedBattlefield','Spriteset_Base_destroy','YCuQY','updateMove','CreateActionSequenceTargets','updateSpin','removeActSeqProjectilesAnimation','setupAnimation','getPeak','iconWidth','ARRAYSTRUCT','width','shift','destroy','392594PJscyj','352253ykiBpS','setup','PointX','BlendMode','processActSeqProjectilesAnimationRequests','_targets','constructor','mInqj','addLoadListener','scale','animationNextDelay','CreateTargetCoordinates','exit','removeAllActSeqProjectilesAnimations','push','UEqaC','KCAyE','updateActSeqProjectilesAnimations','_moveBaseX','_animation','filter','Sprite_AnimationMV_update','GugBa','applyProjectileAngle','Spriteset_Battle_adjustFlippedBattlefield','Sprite_Animation_processSoundTimings'];const _0x34f90e=_0x580d;function _0x580d(_0x2453be,_0xbdabc4){_0x2453be=_0x2453be-0xfc;let _0x544a69=_0x544a[_0x2453be];return _0x544a69;}(function(_0x250b09,_0x5a97a6){const _0x1748ae=_0x580d;while(!![]){try{const _0x547c4d=parseInt(_0x1748ae(0x182))*parseInt(_0x1748ae(0x13d))+-parseInt(_0x1748ae(0x152))*parseInt(_0x1748ae(0x1b5))+-parseInt(_0x1748ae(0x10f))*-parseInt(_0x1748ae(0x135))+parseInt(_0x1748ae(0x14d))+-parseInt(_0x1748ae(0x110))+-parseInt(_0x1748ae(0x1b6))+parseInt(_0x1748ae(0x1a4));if(_0x547c4d===_0x5a97a6)break;else _0x250b09['push'](_0x250b09['shift']());}catch(_0xe34be4){_0x250b09['push'](_0x250b09['shift']());}}}(_0x544a,0x3fe65));var label='ActSeqProjectiles',tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x34f90e(0x124)](function(_0x566fa6){return _0x566fa6['status']&&_0x566fa6['description']['includes']('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label]['Settings']||{},VisuMZ[_0x34f90e(0x1a7)]=function(_0x39673b,_0x14d5a0){const _0x52f4cb=_0x34f90e;for(const _0xa84b17 in _0x14d5a0){if(_0xa84b17[_0x52f4cb(0x1c4)](/(.*):(.*)/i)){if(_0x52f4cb(0x156)!==_0x52f4cb(0x156)){function _0xda684(){const _0x27d7c2=_0x52f4cb;for(const _0x44e66a of this[_0x27d7c2(0x164)]){this['removeActSeqProjectilesAnimation'](_0x44e66a);}}}else{const _0x59454b=String(RegExp['$1']),_0x38f8d8=String(RegExp['$2'])[_0x52f4cb(0x1cd)]()[_0x52f4cb(0x140)]();let _0x3b296f,_0x57db63,_0x4baa5e;switch(_0x38f8d8){case'NUM':_0x3b296f=_0x14d5a0[_0xa84b17]!==''?Number(_0x14d5a0[_0xa84b17]):0x0;break;case'ARRAYNUM':_0x57db63=_0x14d5a0[_0xa84b17]!==''?JSON[_0x52f4cb(0x1ae)](_0x14d5a0[_0xa84b17]):[],_0x3b296f=_0x57db63['map'](_0x4317f2=>Number(_0x4317f2));break;case _0x52f4cb(0x1c9):_0x3b296f=_0x14d5a0[_0xa84b17]!==''?eval(_0x14d5a0[_0xa84b17]):null;break;case _0x52f4cb(0x193):_0x57db63=_0x14d5a0[_0xa84b17]!==''?JSON[_0x52f4cb(0x1ae)](_0x14d5a0[_0xa84b17]):[],_0x3b296f=_0x57db63['map'](_0x2f6c03=>eval(_0x2f6c03));break;case'JSON':_0x3b296f=_0x14d5a0[_0xa84b17]!==''?JSON[_0x52f4cb(0x1ae)](_0x14d5a0[_0xa84b17]):'';break;case'ARRAYJSON':_0x57db63=_0x14d5a0[_0xa84b17]!==''?JSON[_0x52f4cb(0x1ae)](_0x14d5a0[_0xa84b17]):[],_0x3b296f=_0x57db63['map'](_0x110eef=>JSON[_0x52f4cb(0x1ae)](_0x110eef));break;case _0x52f4cb(0x165):_0x3b296f=_0x14d5a0[_0xa84b17]!==''?new Function(JSON[_0x52f4cb(0x1ae)](_0x14d5a0[_0xa84b17])):new Function(_0x52f4cb(0x1b4));break;case _0x52f4cb(0x1bb):_0x57db63=_0x14d5a0[_0xa84b17]!==''?JSON[_0x52f4cb(0x1ae)](_0x14d5a0[_0xa84b17]):[],_0x3b296f=_0x57db63['map'](_0x242002=>new Function(JSON[_0x52f4cb(0x1ae)](_0x242002)));break;case _0x52f4cb(0x13a):_0x3b296f=_0x14d5a0[_0xa84b17]!==''?String(_0x14d5a0[_0xa84b17]):'';break;case'ARRAYSTR':_0x57db63=_0x14d5a0[_0xa84b17]!==''?JSON['parse'](_0x14d5a0[_0xa84b17]):[],_0x3b296f=_0x57db63[_0x52f4cb(0x16e)](_0x179bd1=>String(_0x179bd1));break;case _0x52f4cb(0x12b):_0x4baa5e=_0x14d5a0[_0xa84b17]!==''?JSON[_0x52f4cb(0x1ae)](_0x14d5a0[_0xa84b17]):{},_0x3b296f=VisuMZ[_0x52f4cb(0x1a7)]({},_0x4baa5e);break;case _0x52f4cb(0x10b):_0x57db63=_0x14d5a0[_0xa84b17]!==''?JSON[_0x52f4cb(0x1ae)](_0x14d5a0[_0xa84b17]):[],_0x3b296f=_0x57db63[_0x52f4cb(0x16e)](_0x3e9d43=>VisuMZ[_0x52f4cb(0x1a7)]({},JSON['parse'](_0x3e9d43)));break;default:continue;}_0x39673b[_0x59454b]=_0x3b296f;}}}return _0x39673b;},(_0x2dd185=>{const _0x124fe0=_0x34f90e,_0x370727=_0x2dd185[_0x124fe0(0x149)];for(const _0x57b77d of dependencies){if('gIxzM'!==_0x124fe0(0x117)){if(!Imported[_0x57b77d]){if(_0x124fe0(0xfc)==='trFmm'){function _0x1a411a(){const _0x47b890=_0x124fe0;this[_0x47b890(0xff)][_0x47b890(0x19a)]=this['rotation'];}}else{alert(_0x124fe0(0x134)['format'](_0x370727,_0x57b77d)),SceneManager[_0x124fe0(0x11c)]();break;}}}else{function _0x5c99f5(){const _0x5bb4e6=_0x124fe0;this[_0x5bb4e6(0x107)](_0x1a58a4);}}}const _0x494782=_0x2dd185[_0x124fe0(0x100)];if(_0x494782[_0x124fe0(0x1c4)](/\[Version[ ](.*?)\]/i)){if(_0x124fe0(0x1a5)!==_0x124fe0(0x1a5)){function _0x4fafb8(){const _0x2efa3c=_0x124fe0,_0x4b5f1c=_0x11c91d['ActSeqProjectiles'][_0x2efa3c(0x141)][_0x2efa3c(0x12e)];this['_radianAdjustment']=_0x4b5f1c*(_0x362ccf['PI']/0xb4);const _0x4703fb=this[_0x2efa3c(0x19f)][_0x2efa3c(0x1bc)],_0x3c948f=_0x3921a7[_0x2efa3c(0x10a)],_0x4729a1=_0x45e6bb[_0x2efa3c(0x190)],_0x4e1d5e=_0x4703fb%0x10*_0x3c948f,_0x340aeb=_0x5a048d[_0x2efa3c(0x168)](_0x4703fb/0x10)*_0x4729a1;this[_0x2efa3c(0x154)](_0x4e1d5e,_0x340aeb,_0x3c948f,_0x4729a1),this['startProjectile']();}}else{const _0x9f5fae=Number(RegExp['$1']);_0x9f5fae!==VisuMZ[label][_0x124fe0(0x143)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x124fe0(0x17e)](_0x370727,_0x9f5fae)),SceneManager[_0x124fe0(0x11c)]());}}if(_0x494782[_0x124fe0(0x1c4)](/\[Tier[ ](\d+)\]/i)){const _0x4184e3=Number(RegExp['$1']);if(_0x4184e3<tier){if(_0x124fe0(0x1b8)!==_0x124fe0(0x174))alert(_0x124fe0(0x1a3)[_0x124fe0(0x17e)](_0x370727,_0x4184e3,tier)),SceneManager['exit']();else{function _0x2e5f48(){const _0x6238a9=_0x124fe0;_0x14f580-=_0x594472[_0x6238a9(0x192)]()[_0x6238a9(0x159)];}}}else tier=Math[_0x124fe0(0x1bf)](_0x4184e3,tier);}VisuMZ[_0x124fe0(0x1a7)](VisuMZ[label][_0x124fe0(0x141)],_0x2dd185[_0x124fe0(0x183)]);})(pluginData),VisuMZ[_0x34f90e(0x1b2)][_0x34f90e(0x19b)]=Game_Temp[_0x34f90e(0x178)]['initialize'],Game_Temp[_0x34f90e(0x178)]['initialize']=function(){const _0x2b9509=_0x34f90e;VisuMZ[_0x2b9509(0x1b2)][_0x2b9509(0x19b)][_0x2b9509(0x186)](this),this[_0x2b9509(0x13b)]();},Game_Temp[_0x34f90e(0x178)][_0x34f90e(0x13b)]=function(){const _0xb2bb60=_0x34f90e;this[_0xb2bb60(0x1af)]=[];},Game_Temp[_0x34f90e(0x178)][_0x34f90e(0x132)]=function(_0x2519a0,_0x4b2ce3,_0xc8e17c,_0x2f827b){const _0x238ce6=_0x34f90e;_0xc8e17c=_0xc8e17c||![],_0x2f827b=_0x2f827b||![];if($dataAnimations[_0x4b2ce3]){const _0x926755={'targets':_0x2519a0,'animationId':_0x4b2ce3,'mirror':_0xc8e17c,'mute':_0x2f827b};this[_0x238ce6(0x1af)][_0x238ce6(0x11e)](_0x926755);for(const _0x36c20e of _0x2519a0){if(_0x238ce6(0x171)===_0x238ce6(0x14c)){function _0x1397d(){const _0x40fed9=_0x238ce6;_0x4de4a4[_0x40fed9(0x1b2)]['Spriteset_Battle_createBattleFieldContainer'][_0x40fed9(0x186)](this),this[_0x40fed9(0x1ac)]=new _0x19adaa(),this[_0x40fed9(0x130)][_0x40fed9(0x194)](this[_0x40fed9(0x1ac)]);}}else _0x36c20e[_0x238ce6(0x1b3)]&&_0x36c20e['startAnimation']();}}},Game_Temp[_0x34f90e(0x178)]['retrieveActSeqProjectilesAnimation']=function(){const _0x1fc40f=_0x34f90e;return this[_0x1fc40f(0x1af)][_0x1fc40f(0x10d)]();},Sprite_Animation[_0x34f90e(0x178)][_0x34f90e(0x1c2)]=function(_0x5e2445){const _0x28d537=_0x34f90e;this[_0x28d537(0x13e)]=_0x5e2445;},VisuMZ[_0x34f90e(0x1b2)]['Sprite_Animation_processSoundTimings']=Sprite_Animation[_0x34f90e(0x178)]['processSoundTimings'],Sprite_Animation[_0x34f90e(0x178)]['processSoundTimings']=function(){const _0x1b708e=_0x34f90e;if(this[_0x1b708e(0x13e)])return;VisuMZ[_0x1b708e(0x1b2)][_0x1b708e(0x129)]['call'](this);},VisuMZ[_0x34f90e(0x1b2)][_0x34f90e(0x15b)]=Sprite_Animation['prototype'][_0x34f90e(0x133)],Sprite_Animation['prototype'][_0x34f90e(0x133)]=function(){const _0x1a6c21=_0x34f90e;VisuMZ[_0x1a6c21(0x1b2)][_0x1a6c21(0x15b)][_0x1a6c21(0x186)](this),this['_adjustedProjectileRadians']!==undefined&&this['applyProjectileAngle'](this[_0x1a6c21(0x19a)]);},Sprite_Animation[_0x34f90e(0x178)][_0x34f90e(0x127)]=function(_0x49e98a){const _0x509ccb=_0x34f90e,_0x143bc2=this[_0x509ccb(0x123)][_0x509ccb(0x119)]/0x64,_0x4369f1=Math['PI']/0xb4,_0x2cd72b=this[_0x509ccb(0x123)][_0x509ccb(0x15a)]['x']*_0x4369f1,_0x3b96e8=this['_animation'][_0x509ccb(0x15a)]['y']*_0x4369f1,_0x4f4e95=this[_0x509ccb(0x123)][_0x509ccb(0x15a)]['z']*_0x4369f1-_0x49e98a;this['_handle']&&this[_0x509ccb(0x12f)]['setRotation'](_0x2cd72b,_0x3b96e8,_0x4f4e95);},Sprite_AnimationMV[_0x34f90e(0x178)]['setMute']=function(_0x3ec3a6){const _0x39ca4e=_0x34f90e;this[_0x39ca4e(0x13e)]=_0x3ec3a6;},VisuMZ[_0x34f90e(0x1b2)]['Sprite_AnimationMV_processTimingData']=Sprite_AnimationMV[_0x34f90e(0x178)][_0x34f90e(0x16b)],Sprite_AnimationMV[_0x34f90e(0x178)][_0x34f90e(0x16b)]=function(_0x5f2386){const _0x4c786e=_0x34f90e;if(this['_muteSound']){_0x5f2386=JsonEx[_0x4c786e(0x1d0)](_0x5f2386);if(_0x5f2386['se']){if(_0x4c786e(0x16d)===_0x4c786e(0x16d))_0x5f2386['se'][_0x4c786e(0x16a)]=0x0;else{function _0x2fcc31(){const _0x4d2534=_0x4c786e,_0x2fd615=_0x3079bf[_0x4d2534(0x1b2)][_0x4d2534(0x141)][_0x4d2534(0x163)];this['_radianAdjustment']=_0x2fd615*(_0x3388b3['PI']/0xb4);const _0x35b95e=_0x1648b1['_spriteset'];if(!_0x35b95e)return this[_0x4d2534(0x1a9)]();const _0x2d32d9=this[_0x4d2534(0x19f)][_0x4d2534(0xfe)],_0xc99b2d=_0x4a906a[_0x2d32d9];if(!_0xc99b2d)return this[_0x4d2534(0x1a9)]();const _0x50c5db=![],_0x48d052=0x0,_0x7da2a=!![];this['_animationSprite']=_0x35b95e['createActSeqProjectilesAnimationSprite']([this],_0xc99b2d,_0x50c5db,_0x48d052,_0x7da2a),this[_0x4d2534(0x155)]();}}}}VisuMZ[_0x4c786e(0x1b2)][_0x4c786e(0x1ca)][_0x4c786e(0x186)](this,_0x5f2386);},VisuMZ['ActSeqProjectiles'][_0x34f90e(0x125)]=Sprite_AnimationMV['prototype'][_0x34f90e(0x191)],Sprite_AnimationMV[_0x34f90e(0x178)][_0x34f90e(0x191)]=function(){const _0x1b149b=_0x34f90e;VisuMZ['ActSeqProjectiles'][_0x1b149b(0x125)][_0x1b149b(0x186)](this);if(this[_0x1b149b(0x19a)]!==undefined){if('ncSJB'===_0x1b149b(0x1ba)){function _0x4fb0dc(){const _0x3d99e2=_0x1b149b,_0x4e50e7=_0xe98dad['_spriteset'];_0x4e50e7&&(_0x4e50e7[_0x3d99e2(0x107)](this[_0x3d99e2(0xff)]),delete this[_0x3d99e2(0xff)]);}}else this[_0x1b149b(0x15a)]=this[_0x1b149b(0x19a)];}},VisuMZ['ActSeqProjectiles']['Spriteset_Base_initialize']=Spriteset_Base['prototype'][_0x34f90e(0x1b9)],Spriteset_Base['prototype']['initialize']=function(){const _0x40a7de=_0x34f90e;VisuMZ[_0x40a7de(0x1b2)][_0x40a7de(0x1c0)][_0x40a7de(0x186)](this),this[_0x40a7de(0x164)]=[];},VisuMZ[_0x34f90e(0x1b2)][_0x34f90e(0x102)]=Spriteset_Base[_0x34f90e(0x178)][_0x34f90e(0x10e)],Spriteset_Base[_0x34f90e(0x178)][_0x34f90e(0x10e)]=function(_0x45e3e8){const _0xd793f6=_0x34f90e;this[_0xd793f6(0x11d)](),VisuMZ['ActSeqProjectiles']['Spriteset_Base_destroy'][_0xd793f6(0x186)](this,_0x45e3e8);},VisuMZ['ActSeqProjectiles'][_0x34f90e(0x14a)]=Spriteset_Base[_0x34f90e(0x178)][_0x34f90e(0x191)],Spriteset_Base['prototype'][_0x34f90e(0x191)]=function(){const _0x23bd52=_0x34f90e;VisuMZ[_0x23bd52(0x1b2)]['Spriteset_Base_update'][_0x23bd52(0x186)](this),this[_0x23bd52(0x121)]();},Spriteset_Base[_0x34f90e(0x178)][_0x34f90e(0x121)]=function(){const _0x410600=_0x34f90e;for(const _0x4514ad of this[_0x410600(0x164)]){if(_0x410600(0x103)===_0x410600(0x1c1)){function _0x36ecea(){const _0x492d83=_0x410600,_0x8981e2=_0x231412['length']||0x1;let _0x463f76=0x0,_0xcd3349=0x0;for(const _0x109717 of _0x408370){_0x463f76+=_0x109717[0x0],_0xcd3349+=_0x109717[0x1];}_0x463f76/=_0x8981e2,_0xcd3349/=_0x8981e2,_0x52b697[_0x492d83(0x11e)](new _0x26c646(_0x14970d[_0x492d83(0x169)](_0x463f76+_0x470f75),_0x18c48f[_0x492d83(0x169)](_0xcd3349+_0x3c2cfe)));}}else!_0x4514ad[_0x410600(0x197)]()&&this['restartActSeqProjectilesAnimation'](_0x4514ad);}this[_0x410600(0x114)]();},Spriteset_Base[_0x34f90e(0x178)][_0x34f90e(0x114)]=function(){const _0x397410=_0x34f90e;for(;;){const _0x415184=$gameTemp[_0x397410(0x1b0)]();if(_0x415184){if(_0x397410(0x126)!=='RvTqt')this[_0x397410(0x1a6)](_0x415184);else{function _0x9bf6(){const _0x336cdd=_0x397410;_0x5c898e[_0x336cdd(0x198)]&&_0xd2acd2[_0x336cdd(0x198)]();}}}else break;}},Spriteset_Base[_0x34f90e(0x178)][_0x34f90e(0x1a6)]=function(_0x2f7d7f){const _0x2f4ebf=_0x34f90e,_0x7db564=$dataAnimations[_0x2f7d7f['animationId']],_0xb02a77=_0x2f7d7f['targets'],_0x5417f9=_0x2f7d7f[_0x2f4ebf(0x14f)],_0x75d629=_0x2f7d7f[_0x2f4ebf(0x1c3)];let _0x3bef5e=this['animationBaseDelay']();const _0x4beebc=this[_0x2f4ebf(0x11a)]();if(this[_0x2f4ebf(0x1c7)](_0x7db564)){if('aLjQD'===_0x2f4ebf(0x172))for(const _0x27a38f of _0xb02a77){this[_0x2f4ebf(0x144)]([_0x27a38f],_0x7db564,_0x5417f9,_0x3bef5e,_0x75d629),_0x3bef5e+=_0x4beebc;}else{function _0x1bfba6(){const _0x4a3f3f=_0x2f4ebf;this[_0x4a3f3f(0x1c6)]=_0xf7efcf[_0x4a3f3f(0x188)](this[_0x4a3f3f(0x19f)][_0x4a3f3f(0x139)]),this[_0x4a3f3f(0x1c6)][_0x4a3f3f(0x118)](this['setupPictureFrame'][_0x4a3f3f(0x1a2)](this));}}}else{if(_0x2f4ebf(0x1a1)===_0x2f4ebf(0x1a1))this['createActSeqProjectilesAnimationSprite'](_0xb02a77,_0x7db564,_0x5417f9,_0x3bef5e);else{function _0x3090bb(){const _0x488002=_0x2f4ebf;_0x5d84bf(_0x488002(0x196)[_0x488002(0x17e)](_0x4136c7,_0x5620b5)),_0x7d16ea[_0x488002(0x11c)]();}}}},Spriteset_Base[_0x34f90e(0x178)][_0x34f90e(0x144)]=function(_0x4893ed,_0x481f79,_0x5b870d,_0x10c32d,_0xc891fb){const _0x3fd9ee=_0x34f90e,_0x15d96a=this[_0x3fd9ee(0x1aa)](_0x481f79),_0x584708=new(_0x15d96a?Sprite_AnimationMV:Sprite_Animation)(),_0x51d94c=_0x4893ed;return this[_0x3fd9ee(0x136)](_0x4893ed[0x0])&&(_0x5b870d=!_0x5b870d),_0x584708[_0x3fd9ee(0x175)]=_0x4893ed,_0x584708[_0x3fd9ee(0x111)](_0x51d94c,_0x481f79,_0x5b870d,_0x10c32d),_0x584708[_0x3fd9ee(0x1c2)](_0xc891fb),this[_0x3fd9ee(0x13f)][_0x3fd9ee(0x194)](_0x584708),this[_0x3fd9ee(0x164)][_0x3fd9ee(0x11e)](_0x584708),_0x584708;},Spriteset_Base['prototype'][_0x34f90e(0x14b)]=function(_0x543603){const _0x29285e=_0x34f90e;if(!_0x543603)return;const _0x2db6ad=_0x543603[_0x29285e(0x115)],_0x6792ef=_0x543603[_0x29285e(0x123)],_0x378732=_0x543603[_0x29285e(0x1ce)],_0x189925=0x0,_0x2f700e=_0x543603['_muteSound'];this[_0x29285e(0x107)](_0x543603);const _0x1581c7=this[_0x29285e(0x144)](_0x2db6ad,_0x6792ef,_0x378732,_0x189925,_0x2f700e);for(const _0x14488f of _0x2db6ad){if('UVDCA'==='UVDCA'){if(_0x14488f){if('uQjlL'!==_0x29285e(0x19e))_0x14488f[_0x29285e(0xff)]=_0x1581c7;else{function _0x565f58(){const _0x23662d=_0x29285e;_0x3ee5c2[_0x23662d(0x1b2)][_0x23662d(0x14a)][_0x23662d(0x186)](this),this[_0x23662d(0x121)]();}}}}else{function _0x2f43cf(){const _0x44448d=_0x29285e;if(!this[_0x44448d(0x1ac)])return!![];return this[_0x44448d(0x1ac)]['children'][_0x44448d(0x179)]>0x0;}}}},Spriteset_Base[_0x34f90e(0x178)][_0x34f90e(0x107)]=function(_0x574c20){const _0x607a41=_0x34f90e;this[_0x607a41(0x164)]['remove'](_0x574c20),this[_0x607a41(0x13f)]['removeChild'](_0x574c20);for(const _0x199a9f of _0x574c20['targetObjects']){_0x199a9f[_0x607a41(0x198)]&&_0x199a9f['endAnimation']();}_0x574c20[_0x607a41(0x10e)]();},Spriteset_Base[_0x34f90e(0x178)][_0x34f90e(0x11d)]=function(){const _0x4a6c9e=_0x34f90e;for(const _0x43acac of this[_0x4a6c9e(0x164)]){this[_0x4a6c9e(0x107)](_0x43acac);}},Spriteset_Base[_0x34f90e(0x178)][_0x34f90e(0x189)]=function(){const _0x3b5568=_0x34f90e;return this[_0x3b5568(0x164)][_0x3b5568(0x179)]>0x0;},VisuMZ[_0x34f90e(0x1b2)][_0x34f90e(0x142)]=Spriteset_Battle[_0x34f90e(0x178)][_0x34f90e(0x153)],Spriteset_Battle[_0x34f90e(0x178)]['createBattleFieldContainer']=function(){const _0x9f83ec=_0x34f90e;VisuMZ[_0x9f83ec(0x1b2)][_0x9f83ec(0x142)][_0x9f83ec(0x186)](this),this[_0x9f83ec(0x1ac)]=new Sprite(),this[_0x9f83ec(0x130)][_0x9f83ec(0x194)](this[_0x9f83ec(0x1ac)]);},VisuMZ[_0x34f90e(0x1b2)][_0x34f90e(0x128)]=Spriteset_Battle[_0x34f90e(0x178)][_0x34f90e(0x101)],Spriteset_Battle[_0x34f90e(0x178)][_0x34f90e(0x101)]=function(){const _0x4117d5=_0x34f90e;VisuMZ[_0x4117d5(0x1b2)][_0x4117d5(0x128)][_0x4117d5(0x186)](this),this[_0x4117d5(0x1ac)]&&this[_0x4117d5(0x18b)]&&(this[_0x4117d5(0x1ac)][_0x4117d5(0x119)]['x']=this[_0x4117d5(0x18b)][_0x4117d5(0x119)]['x'],this[_0x4117d5(0x1ac)][_0x4117d5(0x119)]['y']=this['_battlerContainer']['scale']['y'],this[_0x4117d5(0x1ac)]['x']=this[_0x4117d5(0x18b)]['x'],this['_projectilesContainer']['y']=this[_0x4117d5(0x18b)]['y']);},Spriteset_Battle[_0x34f90e(0x178)]['createActionSequenceProjectile']=function(_0x5f348b){const _0x5dc53c=_0x34f90e;if(!_0x5f348b)return;_0x5f348b=JsonEx[_0x5dc53c(0x1d0)](_0x5f348b);const _0x22c517=[],_0x580314=[];VisuMZ[_0x5dc53c(0x1b2)]['CreateCoordinates'](_0x22c517,_0x5f348b['Start']),VisuMZ['ActSeqProjectiles'][_0x5dc53c(0x17a)](_0x580314,_0x5f348b[_0x5dc53c(0x181)]);const _0x3a3750=this[_0x5dc53c(0x1ac)];for(const _0x1a382d of _0x22c517){for(const _0x36e72a of _0x580314){const _0x43c164=new Sprite_Projectile(_0x5f348b,_0x1a382d,_0x36e72a);_0x3a3750[_0x5dc53c(0x194)](_0x43c164);}}},VisuMZ[_0x34f90e(0x1b2)][_0x34f90e(0x17a)]=function(_0x58d3b7,_0xd83734){const _0x10b223=_0x34f90e,_0x3e52dc=_0xd83734['Type'],_0x4a7c92=_0xd83734['OffsetX'],_0xb1e3b7=_0xd83734['OffsetY'];_0x3e52dc==='point'&&_0x58d3b7[_0x10b223(0x11e)](new Point(_0xd83734[_0x10b223(0x112)]+_0x4a7c92,_0xd83734[_0x10b223(0x17f)]+_0xb1e3b7));if(_0x3e52dc===_0x10b223(0x1a8)){const _0x7f97da=VisuMZ[_0x10b223(0x105)](_0xd83734[_0x10b223(0x17b)]),_0x320357=_0x7f97da[_0x10b223(0x124)](_0x5e7fb9=>_0x5e7fb9&&_0x5e7fb9[_0x10b223(0x192)]())[_0x10b223(0x16e)](_0x3d1de4=>VisuMZ[_0x10b223(0x1b2)][_0x10b223(0x11b)](_0x3d1de4,_0xd83734));if(!_0x320357)return;if(_0xd83734[_0x10b223(0x18e)]){const _0x235985=_0x320357[_0x10b223(0x179)]||0x1;let _0xf3144=0x0,_0x22220e=0x0;for(const _0x4215ad of _0x320357){_0xf3144+=_0x4215ad[0x0],_0x22220e+=_0x4215ad[0x1];}_0xf3144/=_0x235985,_0x22220e/=_0x235985,_0x58d3b7[_0x10b223(0x11e)](new Point(Math[_0x10b223(0x169)](_0xf3144+_0x4a7c92),Math[_0x10b223(0x169)](_0x22220e+_0xb1e3b7)));}else{if(_0x10b223(0x146)===_0x10b223(0x147)){function _0x51c91e(){const _0x287dff=_0x10b223,_0x36c5ce=_0xfcac04(_0x15822f['$1']);_0x36c5ce!==_0x3debac[_0x4cc6d3]['version']&&(_0x1a9b12(_0x287dff(0x196)[_0x287dff(0x17e)](_0x176313,_0x36c5ce)),_0x28cd2b[_0x287dff(0x11c)]());}}else for(const _0x3dfa94 of _0x320357){_0x58d3b7['push'](new Point(Math[_0x10b223(0x169)](_0x3dfa94[0x0]+_0x4a7c92),Math[_0x10b223(0x169)](_0x3dfa94[0x1]+_0xb1e3b7)));}}}},VisuMZ[_0x34f90e(0x1b2)][_0x34f90e(0x11b)]=function(_0x2f4dbb,_0x3a51de){const _0x9524a2=_0x34f90e;let _0x19bed4=_0x9524a2(0x12c);_0x3a51de&&(_0x3a51de['TargetLocation']=_0x3a51de['TargetLocation']||'middle\x20center',_0x19bed4=_0x3a51de[_0x9524a2(0x177)][_0x9524a2(0x162)]());let _0x26ec87=_0x2f4dbb[_0x9524a2(0x192)]()[_0x9524a2(0x1d1)];if(_0x19bed4[_0x9524a2(0x1c8)](_0x9524a2(0x17d)))_0x26ec87+=(_0x2f4dbb[_0x9524a2(0x18f)]()?-0x1:0x1)*_0x2f4dbb[_0x9524a2(0x192)]()[_0x9524a2(0x10c)]/0x2;else _0x19bed4['includes'](_0x9524a2(0x1ab))&&(_0x26ec87+=(_0x2f4dbb[_0x9524a2(0x18f)]()?0x1:-0x1)*_0x2f4dbb[_0x9524a2(0x192)]()[_0x9524a2(0x10c)]/0x2);let _0x473f49=_0x2f4dbb[_0x9524a2(0x192)]()['_baseY'];_0x473f49+=_0x2f4dbb['battler']()[_0x9524a2(0x16f)]();if(_0x19bed4['includes'](_0x9524a2(0x161)))_0x473f49-=_0x2f4dbb[_0x9524a2(0x192)]()[_0x9524a2(0x159)]/0x2;else _0x19bed4[_0x9524a2(0x1c8)]('head')&&(_0x473f49-=_0x2f4dbb['battler']()[_0x9524a2(0x159)]);if(!$gameSystem['isSideView']()&&_0x2f4dbb[_0x9524a2(0x18f)]()){if(_0x9524a2(0x120)!=='KCAyE'){function _0xdd496f(){const _0x1ba86c=_0x9524a2;_0x23032b[_0x1ba86c(0x198)]();}}else{const _0x55935b=SceneManager[_0x9524a2(0x160)][_0x9524a2(0x176)],_0x5419ef=SceneManager[_0x9524a2(0x160)][_0x9524a2(0x18c)];_0x26ec87+=_0x5419ef['x']+_0x55935b['x'],_0x473f49+=_0x5419ef['y']+_0x55935b['y'];}}return[_0x26ec87,_0x473f49];},Spriteset_Battle[_0x34f90e(0x178)][_0x34f90e(0x185)]=function(){const _0x18acb2=_0x34f90e;if(!this['_projectilesContainer'])return!![];return this[_0x18acb2(0x1ac)][_0x18acb2(0x15c)][_0x18acb2(0x179)]>0x0;};function Sprite_Projectile(){this['initialize'](...arguments);}Sprite_Projectile['prototype']=Object[_0x34f90e(0x1bd)](Sprite[_0x34f90e(0x178)]),Sprite_Projectile['prototype'][_0x34f90e(0x116)]=Sprite_Projectile,Sprite_Projectile['prototype'][_0x34f90e(0x1b9)]=function(_0x38ba80,_0x165df1,_0xe52498){const _0x28f611=_0x34f90e;this[_0x28f611(0x19f)]=_0x38ba80,this[_0x28f611(0x158)](_0x165df1,_0xe52498),Sprite[_0x28f611(0x178)][_0x28f611(0x1b9)][_0x28f611(0x186)](this),this['initMembers'](),this['createBitmap']();},Sprite_Projectile[_0x34f90e(0x178)]['setupCoordinates']=function(_0x555321,_0x284f63){const _0x38b72b=_0x34f90e;this[_0x38b72b(0x122)]=_0x555321['x'],this['_moveBaseY']=_0x555321['y'],this[_0x38b72b(0x151)]=_0x555321['x'],this['_moveCalcY']=_0x555321['y'],this['_moveTargetX']=_0x284f63['x'],this[_0x38b72b(0x1b7)]=_0x284f63['y'];},Sprite_Projectile[_0x34f90e(0x178)]['initMembers']=function(){const _0x568fbb=_0x34f90e;this['anchor']['x']=0.5,this[_0x568fbb(0x12a)]['y']=0.5,this['x']=Graphics[_0x568fbb(0x10c)]*-0xa,this['y']=Graphics[_0x568fbb(0x159)]*-0xa,this[_0x568fbb(0xfd)]=0x0,this[_0x568fbb(0x167)]=this[_0x568fbb(0x19f)][_0x568fbb(0x14e)]||0x0,this['_moveTotalDuration']=this['_moveDuration'],this[_0x568fbb(0x199)]=_0x568fbb(0x145),this[_0x568fbb(0x1c5)]=0x0,this[_0x568fbb(0x166)]=![],this[_0x568fbb(0x15f)]=![];const _0x336b44=this[_0x568fbb(0x19f)][_0x568fbb(0x15e)];if(!_0x336b44)return;this[_0x568fbb(0x19c)]=_0x336b44[_0x568fbb(0x180)]||0x0,this[_0x568fbb(0x199)]=_0x336b44[_0x568fbb(0x1b1)],!this['_settings'][_0x568fbb(0xfe)]&&(this[_0x568fbb(0x170)]=_0x336b44[_0x568fbb(0x113)]||0x0,this[_0x568fbb(0x157)](_0x336b44[_0x568fbb(0x150)]||0x0),this['scale']['x']=this['scale']['y']=Math[_0x568fbb(0x1bf)](0.001,_0x336b44['Scale']||0.001));},Sprite_Projectile[_0x34f90e(0x178)][_0x34f90e(0x1a0)]=function(){const _0x36996b=_0x34f90e;if(this[_0x36996b(0x19f)][_0x36996b(0xfe)]){if(_0x36996b(0x1cf)==='sqOiZ')this[_0x36996b(0x1c6)]=new Bitmap(0x1,0x1),this['setupAnimation'](),this[_0x36996b(0x155)]();else{function _0x5e4c05(){const _0x547322=_0x36996b;_0x48ab0b[_0x547322(0x177)]=_0x171c7f[_0x547322(0x177)]||_0x547322(0x12c),_0x23499f=_0x4bfc0f[_0x547322(0x177)][_0x547322(0x162)]();}}}else{if(this[_0x36996b(0x19f)][_0x36996b(0x1bc)]){if('wNGwZ'!=='ckRcn')this[_0x36996b(0x1c6)]=ImageManager[_0x36996b(0x148)]('IconSet'),this[_0x36996b(0x1c6)][_0x36996b(0x118)](this[_0x36996b(0x12d)][_0x36996b(0x1a2)](this));else{function _0x2a56ea(){const _0x42dc50=_0x36996b;this['x']=this[_0x42dc50(0x1cb)],this['y']=this['_moveTargetY'],this[_0x42dc50(0x15f)]=!![];}}}else this[_0x36996b(0x19f)]['Picture']?(this[_0x36996b(0x1c6)]=ImageManager[_0x36996b(0x188)](this[_0x36996b(0x19f)]['Picture']),this[_0x36996b(0x1c6)][_0x36996b(0x118)](this[_0x36996b(0x13c)]['bind'](this))):(this['bitmap']=new Bitmap(0x1,0x1),this[_0x36996b(0x155)]());}},Sprite_Projectile[_0x34f90e(0x178)][_0x34f90e(0x108)]=function(){const _0x2b2e25=_0x34f90e,_0x3ea829=VisuMZ[_0x2b2e25(0x1b2)]['Settings'][_0x2b2e25(0x163)];this[_0x2b2e25(0x1c5)]=_0x3ea829*(Math['PI']/0xb4);const _0x377814=BattleManager[_0x2b2e25(0x138)];if(!_0x377814)return this[_0x2b2e25(0x1a9)]();const _0x4a71b2=this[_0x2b2e25(0x19f)][_0x2b2e25(0xfe)],_0x29ca79=$dataAnimations[_0x4a71b2];if(!_0x29ca79)return this['endProjectile']();const _0x1b95c9=![],_0x386186=0x0,_0x51ef85=!![];this['_animationSprite']=_0x377814[_0x2b2e25(0x144)]([this],_0x29ca79,_0x1b95c9,_0x386186,_0x51ef85),this[_0x2b2e25(0x155)]();},Sprite_Projectile[_0x34f90e(0x178)][_0x34f90e(0x12d)]=function(){const _0x75c47a=_0x34f90e,_0x8ca335=VisuMZ[_0x75c47a(0x1b2)][_0x75c47a(0x141)][_0x75c47a(0x12e)];this['_radianAdjustment']=_0x8ca335*(Math['PI']/0xb4);const _0x18cc4f=this['_settings'][_0x75c47a(0x1bc)],_0x5a3272=ImageManager[_0x75c47a(0x10a)],_0x2506a7=ImageManager[_0x75c47a(0x190)],_0x33f16f=_0x18cc4f%0x10*_0x5a3272,_0x4c7566=Math[_0x75c47a(0x168)](_0x18cc4f/0x10)*_0x2506a7;this[_0x75c47a(0x154)](_0x33f16f,_0x4c7566,_0x5a3272,_0x2506a7),this['startProjectile']();},Sprite_Projectile[_0x34f90e(0x178)][_0x34f90e(0x13c)]=function(){const _0x4eb643=_0x34f90e,_0x2e5025=VisuMZ[_0x4eb643(0x1b2)][_0x4eb643(0x141)][_0x4eb643(0x16c)];this[_0x4eb643(0x1c5)]=_0x2e5025*(Math['PI']/0xb4),this['startProjectile']();},Sprite_Projectile[_0x34f90e(0x178)][_0x34f90e(0x155)]=function(){const _0x179346=_0x34f90e;this[_0x179346(0x166)]=!![];},Sprite_Projectile[_0x34f90e(0x178)][_0x34f90e(0x191)]=function(){const _0x1c996f=_0x34f90e;Sprite[_0x1c996f(0x178)]['update'][_0x1c996f(0x186)](this);if(!this[_0x1c996f(0x166)])return;if(this[_0x1c996f(0x15f)]){if(_0x1c996f(0x11f)==='eFOFp'){function _0x1b7811(){const _0x2589a4=_0x1c996f;this[_0x2589a4(0x13e)]=_0x3e2598;}}else this[_0x1c996f(0x1a9)]();}else this[_0x1c996f(0x104)](),this[_0x1c996f(0x106)]();},Sprite_Projectile[_0x34f90e(0x178)][_0x34f90e(0x1a9)]=function(){const _0x5c22ae=_0x34f90e;if(!this[_0x5c22ae(0x137)])return;this[_0x5c22ae(0x137)]['removeChild'](this);if(this[_0x5c22ae(0xff)]){if(_0x5c22ae(0x1ad)===_0x5c22ae(0x1ad)){const _0x5acdb9=BattleManager[_0x5c22ae(0x138)];_0x5acdb9&&(_0x5acdb9[_0x5c22ae(0x107)](this[_0x5c22ae(0xff)]),delete this['_animationSprite']);}else{function _0x10ff65(){const _0x291555=_0x5c22ae;_0x3b0528[_0x291555(0x1b2)][_0x291555(0x128)][_0x291555(0x186)](this),this['_projectilesContainer']&&this[_0x291555(0x18b)]&&(this['_projectilesContainer']['scale']['x']=this[_0x291555(0x18b)][_0x291555(0x119)]['x'],this[_0x291555(0x1ac)][_0x291555(0x119)]['y']=this['_battlerContainer'][_0x291555(0x119)]['y'],this[_0x291555(0x1ac)]['x']=this[_0x291555(0x18b)]['x'],this[_0x291555(0x1ac)]['y']=this[_0x291555(0x18b)]['y']);}}}},Sprite_Projectile['prototype'][_0x34f90e(0x104)]=function(){const _0x33e223=_0x34f90e;if(this[_0x33e223(0x167)]<0x0)return;this['_moveTime']++;var _0x414e29=this[_0x33e223(0xfd)],_0x1f41a2=this[_0x33e223(0x19d)],_0xffa97=this[_0x33e223(0x122)],_0x574af8=this[_0x33e223(0x15d)],_0x12fde6=this[_0x33e223(0x1cb)],_0x2f4f3e=this['_moveTargetY'];_0x414e29/=_0x1f41a2,_0x414e29=VisuMZ[_0x33e223(0x17c)](_0x414e29,this[_0x33e223(0x199)][_0x33e223(0x1cd)]()[_0x33e223(0x140)]());var _0x20ce2d=this[_0x33e223(0x151)],_0x528835=this[_0x33e223(0x1be)];this[_0x33e223(0x151)]=_0xffa97+_0x414e29*(_0x12fde6-_0xffa97),this['_moveCalcY']=_0x574af8+_0x414e29*(_0x2f4f3e-_0x574af8)-this[_0x33e223(0x109)]();var _0x107d8e=this['_moveCalcX'],_0x2ec2f5=this['_moveCalcY'];this[_0x33e223(0x1cc)](_0x20ce2d,_0x107d8e,_0x528835,_0x2ec2f5),this['x']=Math['round'](this[_0x33e223(0x151)]),this['y']=Math[_0x33e223(0x169)](this[_0x33e223(0x1be)]),this[_0x33e223(0x167)]--,this[_0x33e223(0x167)]<0x0&&(this['x']=this[_0x33e223(0x1cb)],this['y']=this[_0x33e223(0x1b7)],this[_0x33e223(0x15f)]=!![]);},Sprite_Projectile[_0x34f90e(0x178)][_0x34f90e(0x1cc)]=function(_0x581abe,_0x174b5b,_0x3097bd,_0x5bd439){const _0xc9544f=_0x34f90e;if(this['_settings'][_0xc9544f(0x15e)]&&this[_0xc9544f(0x19f)]['Extra'][_0xc9544f(0x18d)]){var _0x5967a6=_0x174b5b-_0x581abe,_0x21b78d=_0x5bd439-_0x3097bd,_0x437236=Math[_0xc9544f(0x195)](_0x21b78d,_0x5967a6);_0x437236+=this[_0xc9544f(0x19f)][_0xc9544f(0x15e)][_0xc9544f(0x180)]*(Math['PI']/0xb4),this[_0xc9544f(0x15a)]=_0x437236+this[_0xc9544f(0x1c5)];if(this['_animationSprite']){if(_0xc9544f(0x131)==='WfQde'){function _0x4ead1b(){const _0x405981=_0xc9544f;this[_0x405981(0x12f)][_0x405981(0x173)](_0x291148,_0x3da68a,_0x47ba79);}}else this[_0xc9544f(0xff)][_0xc9544f(0x19a)]=this['rotation'];}}},Sprite_Projectile[_0x34f90e(0x178)][_0x34f90e(0x109)]=function(){const _0x3150db=_0x34f90e;if(!this[_0x3150db(0x19f)]['Extra'])return 0x0;if(this[_0x3150db(0x19f)][_0x3150db(0x15e)][_0x3150db(0x187)]===0x0)return 0x0;var _0x24384c=this[_0x3150db(0x19d)]-this['_moveDuration'],_0x47c469=this[_0x3150db(0x19d)]/0x2,_0x2bdf51=this[_0x3150db(0x19f)][_0x3150db(0x15e)]?this[_0x3150db(0x19f)][_0x3150db(0x15e)][_0x3150db(0x187)]||0x0:0x0,_0x3ffd7f=-_0x2bdf51/Math[_0x3150db(0x184)](_0x47c469,0x2),_0x290e95=_0x3ffd7f*Math['pow'](_0x24384c-_0x47c469,0x2)+_0x2bdf51;return _0x290e95;},Sprite_Projectile[_0x34f90e(0x178)]['updateSpin']=function(){const _0xbaa9ba=_0x34f90e;if(!this[_0xbaa9ba(0x19f)][_0xbaa9ba(0x15e)])return;this[_0xbaa9ba(0x19c)]+=this[_0xbaa9ba(0x19f)]['Extra'][_0xbaa9ba(0x18a)]||0x0;};