//=============================================================================
// VisuStella MZ - Action Sequence Projectiles
// VisuMZ_3_ActSeqProjectiles.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_ActSeqProjectiles = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ActSeqProjectiles = VisuMZ.ActSeqProjectiles || {};
VisuMZ.ActSeqProjectiles.version = 1.07;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.07] [ActSeqProjectiles]
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
 *     Wait For Animation?:
 *     - Wait for animation to finish before going to the next command?
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
 * Version 1.07: August 17, 2023
 * * Compatibility Update!
 * ** Added better compatibility with Action Sequence Camera when using MV
 *    animations for projectiles. Update made by Arisu.
 * 
 * Version 1.06: July 13, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.05: December 30, 2021
 * * Documentation Update!
 * ** Help file updated for updated features.
 * * Updated Feature!
 * ** Updated Plugin Command "PROJECTILE: Animation" by Arisu!
 * *** New Parameter: Wait For Animation?
 * **** Wait for animation to finish before going to the next command?
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

const _0x5088e8=_0x1606;(function(_0x458aa9,_0x5b398a){const _0x2b9753=_0x1606,_0x65d03f=_0x458aa9();while(!![]){try{const _0x52907f=parseInt(_0x2b9753(0xce))/0x1*(parseInt(_0x2b9753(0xef))/0x2)+parseInt(_0x2b9753(0xd5))/0x3*(parseInt(_0x2b9753(0x148))/0x4)+parseInt(_0x2b9753(0x110))/0x5+parseInt(_0x2b9753(0xc9))/0x6*(-parseInt(_0x2b9753(0xd0))/0x7)+parseInt(_0x2b9753(0xed))/0x8+parseInt(_0x2b9753(0xe4))/0x9*(-parseInt(_0x2b9753(0x15a))/0xa)+-parseInt(_0x2b9753(0xf7))/0xb*(parseInt(_0x2b9753(0x143))/0xc);if(_0x52907f===_0x5b398a)break;else _0x65d03f['push'](_0x65d03f['shift']());}catch(_0x32d8c2){_0x65d03f['push'](_0x65d03f['shift']());}}}(_0x58d1,0xe75c6));var label=_0x5088e8(0x76),tier=tier||0x0,dependencies=[],pluginData=$plugins['filter'](function(_0x13033e){const _0x5d1bd5=_0x5088e8;return _0x13033e[_0x5d1bd5(0x9b)]&&_0x13033e['description'][_0x5d1bd5(0xa1)]('['+label+']');})[0x0];function _0x58d1(){const _0x4dc70e=['Scale','isActSeqProjectilesAnimationPlaying','Arc','Hue','ActSeqCamera','_moveDuration','applyAngle','back','push','IconSet','parse','Game_Temp_initialize','setRotation','destroy','removeActSeqProjectilesAnimation','FUNC','extraPositionY','_ActSeqProjectilesAnimationQueue','_easing','1002guxJxj','onpFs','version','Icon','CzyXH','17353plyhQn','vqDTX','17619QPmwkB','volume','_baseX','animationNextDelay','getPeak','3618258UdSyZQ','parent','max','processSoundTimings','Sprite_AnimationMV_update','PictureAngleAdjust','doflG','createBattleFieldContainer','applyProjectileAngle','updateActionSequenceProjectileItemThrow','Sprite_AnimationMV_processTimingData','_projectilesContainer','CreateCoordinates','createBitmap','NUM','6523623dNVvLD','fExho','ASjbE','TargetLocation','ARRAYSTRUCT','addChild','_battlerContainer','_adjustedProjectileRadians','_moveTargetX','4907792aaMjGY','Picture','38bfOxDc','setHue','EasingType','length','loadSystem','setupPictureFrame','ISbXn','Start','154LoMcnT','Settings','iconWidth','setupIconFrame','setup','aWqRf','Spriteset_Battle_adjustFlippedBattlefield','Spriteset_Base_destroy','bitmap','_moveTime','ARRAYNUM','blendMode','OSJHt','shift','createActSeqProjectilesAnimationSprite','ARRAYFUNC','format','_mirror','requestActSeqProjectilesAnimation','filter','_statusWindow','processTimingData','CreateTargetCoordinates','_scene','removeChild','4956090yptccX','startProjectile','initMembers','makeDeepCopy','isMVAnimation','_endReady','remove','Sprite_Animation_processSoundTimings','mirror','updateMove','_battleField','ahSoA','updateSpin','_effectsContainer','animationShouldMirror','MVVZh','Type','bind','Extra','_moveTargetY','_animation','removeAllActSeqProjectilesAnimations','ARRAYJSON','OGuNH','VisuMZ_3_ActSeqCamera','map','front','BlendMode','STRUCT','animationId','_moveBaseY','Duration','fPeON','updateActSeqProjectilesAnimations','match','mFDiq','mQbNK','CheckCompatibility','parameters','AnimationAngleAdjust','exit','NZVNz','createActSeqProjectilesAnimation','adjustFlippedBattlefield','mKEaN','setupCoordinates','updateEffectGeometry','_radianAdjustment','_ActSeqProjectilesAnimationSprites','HHbfJ','mute','276684FjXNIU','_isProjectile','_moveCalcY','head','iconHeight','4suGhrT','floor','isWaitUntilAnimationFinished','_windowLayer','initialize','_animationSprite','middle\x20center','loadPicture','onDatabaseLoaded','endProjectile','_handle','startAnimation','setFrame','LINEAR','rotation','_moveTotalDuration','isAnimationForEach','ARRAYSTR','20VmuEej','return\x200','scale','anchor','uCaHO','toLowerCase','_moveBaseX','ActSeqProjectiles','_settings','ApplyEasing','in\x20order\x20for\x20VisuMZ_3_ActSeqProjectiles\x20to\x20work.','JSON','processActSeqProjectilesAnimationRequests','UpyBw','Sprite_Animation_updateEffectGeometry','Spriteset_Battle_createBattleFieldContainer','call','constructor','setProjectile','CreateActionSequenceTargets','_startReady','targetObjects','isActor','update','prototype','TargetCenter','Spriteset_Base_initialize','_spriteset','LmxSj','ConvertParams','height','endAnimation','battler','VisuMZ_3_ActSeqCamera\x20needs\x20to\x20be\x20updated\x20','ARRAYEVAL','_moveCalcX','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','AnimationID','Scene_Boot_onDatabaseLoaded','addLoadListener','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','znsBk','AngleOffset','setMute','status','Spriteset_Base_update','OffsetX','round','children','SzjFw','includes','trim','Targets','XwBwb','description','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','gGzQF','zRjxu','EVAL','isPlaying','angle','retrieveActSeqProjectilesAnimation','width','VisuMZ_3_ItemThrowSkills','setupAnimation','createActionSequenceProjectile','OffsetY','_muteSound','animationBaseDelay','targets','WHBju'];_0x58d1=function(){return _0x4dc70e;};return _0x58d1();}function _0x1606(_0x3fb020,_0x495eec){const _0x58d180=_0x58d1();return _0x1606=function(_0x160635,_0x329992){_0x160635=_0x160635-0x70;let _0x26e897=_0x58d180[_0x160635];return _0x26e897;},_0x1606(_0x3fb020,_0x495eec);}VisuMZ[label][_0x5088e8(0xf8)]=VisuMZ[label][_0x5088e8(0xf8)]||{},VisuMZ[_0x5088e8(0x8c)]=function(_0xd0abd,_0x3dd4cb){const _0x505ef2=_0x5088e8;for(const _0x1bab37 in _0x3dd4cb){if(_0x1bab37[_0x505ef2(0x132)](/(.*):(.*)/i)){const _0x4e2608=String(RegExp['$1']),_0x317cb9=String(RegExp['$2'])['toUpperCase']()[_0x505ef2(0xa2)]();let _0x2c68c7,_0x3f236e,_0x3d7292;switch(_0x317cb9){case _0x505ef2(0xe3):_0x2c68c7=_0x3dd4cb[_0x1bab37]!==''?Number(_0x3dd4cb[_0x1bab37]):0x0;break;case _0x505ef2(0x101):_0x3f236e=_0x3dd4cb[_0x1bab37]!==''?JSON[_0x505ef2(0xc0)](_0x3dd4cb[_0x1bab37]):[],_0x2c68c7=_0x3f236e[_0x505ef2(0x129)](_0x461da1=>Number(_0x461da1));break;case _0x505ef2(0xa9):_0x2c68c7=_0x3dd4cb[_0x1bab37]!==''?eval(_0x3dd4cb[_0x1bab37]):null;break;case _0x505ef2(0x91):_0x3f236e=_0x3dd4cb[_0x1bab37]!==''?JSON[_0x505ef2(0xc0)](_0x3dd4cb[_0x1bab37]):[],_0x2c68c7=_0x3f236e['map'](_0x86fa86=>eval(_0x86fa86));break;case _0x505ef2(0x7a):_0x2c68c7=_0x3dd4cb[_0x1bab37]!==''?JSON[_0x505ef2(0xc0)](_0x3dd4cb[_0x1bab37]):'';break;case _0x505ef2(0x126):_0x3f236e=_0x3dd4cb[_0x1bab37]!==''?JSON['parse'](_0x3dd4cb[_0x1bab37]):[],_0x2c68c7=_0x3f236e[_0x505ef2(0x129)](_0x15da3e=>JSON[_0x505ef2(0xc0)](_0x15da3e));break;case _0x505ef2(0xc5):_0x2c68c7=_0x3dd4cb[_0x1bab37]!==''?new Function(JSON['parse'](_0x3dd4cb[_0x1bab37])):new Function(_0x505ef2(0x70));break;case _0x505ef2(0x106):_0x3f236e=_0x3dd4cb[_0x1bab37]!==''?JSON['parse'](_0x3dd4cb[_0x1bab37]):[],_0x2c68c7=_0x3f236e[_0x505ef2(0x129)](_0x59ce7a=>new Function(JSON['parse'](_0x59ce7a)));break;case'STR':_0x2c68c7=_0x3dd4cb[_0x1bab37]!==''?String(_0x3dd4cb[_0x1bab37]):'';break;case _0x505ef2(0x159):_0x3f236e=_0x3dd4cb[_0x1bab37]!==''?JSON[_0x505ef2(0xc0)](_0x3dd4cb[_0x1bab37]):[],_0x2c68c7=_0x3f236e[_0x505ef2(0x129)](_0x1d0ff5=>String(_0x1d0ff5));break;case _0x505ef2(0x12c):_0x3d7292=_0x3dd4cb[_0x1bab37]!==''?JSON[_0x505ef2(0xc0)](_0x3dd4cb[_0x1bab37]):{},_0x2c68c7=VisuMZ[_0x505ef2(0x8c)]({},_0x3d7292);break;case _0x505ef2(0xe8):_0x3f236e=_0x3dd4cb[_0x1bab37]!==''?JSON['parse'](_0x3dd4cb[_0x1bab37]):[],_0x2c68c7=_0x3f236e[_0x505ef2(0x129)](_0x5dfa04=>VisuMZ[_0x505ef2(0x8c)]({},JSON['parse'](_0x5dfa04)));break;default:continue;}_0xd0abd[_0x4e2608]=_0x2c68c7;}}return _0xd0abd;},(_0xf3cf1=>{const _0x4abe3c=_0x5088e8,_0x434432=_0xf3cf1['name'];for(const _0xe993b8 of dependencies){if(!Imported[_0xe993b8]){alert(_0x4abe3c(0x97)[_0x4abe3c(0x107)](_0x434432,_0xe993b8)),SceneManager[_0x4abe3c(0x138)]();break;}}const _0x5ef74d=_0xf3cf1[_0x4abe3c(0xa5)];if(_0x5ef74d[_0x4abe3c(0x132)](/\[Version[ ](.*?)\]/i)){const _0x1a2acd=Number(RegExp['$1']);_0x1a2acd!==VisuMZ[label][_0x4abe3c(0xcb)]&&('DECxe'!==_0x4abe3c(0xa7)?(alert(_0x4abe3c(0xa6)['format'](_0x434432,_0x1a2acd)),SceneManager[_0x4abe3c(0x138)]()):(_0x326c0a[_0x4abe3c(0xc4)](this[_0x4abe3c(0x14d)]),delete this[_0x4abe3c(0x14d)]));}if(_0x5ef74d[_0x4abe3c(0x132)](/\[Tier[ ](\d+)\]/i)){const _0x438bd6=Number(RegExp['$1']);_0x438bd6<tier?(alert(_0x4abe3c(0x93)[_0x4abe3c(0x107)](_0x434432,_0x438bd6,tier)),SceneManager[_0x4abe3c(0x138)]()):tier=Math['max'](_0x438bd6,tier);}VisuMZ[_0x4abe3c(0x8c)](VisuMZ[label][_0x4abe3c(0xf8)],_0xf3cf1[_0x4abe3c(0x136)]);})(pluginData),VisuMZ[_0x5088e8(0x76)][_0x5088e8(0x95)]=Scene_Boot[_0x5088e8(0x87)][_0x5088e8(0x150)],Scene_Boot[_0x5088e8(0x87)]['onDatabaseLoaded']=function(){const _0x569703=_0x5088e8;VisuMZ[_0x569703(0x76)][_0x569703(0x95)][_0x569703(0x7f)](this),VisuMZ[_0x569703(0x76)][_0x569703(0x135)]();},VisuMZ[_0x5088e8(0x76)][_0x5088e8(0x135)]=function(){const _0x7a3ce9=_0x5088e8;if(Imported[_0x7a3ce9(0x128)]&&VisuMZ[_0x7a3ce9(0xba)][_0x7a3ce9(0xcb)]<1.12){let _0x55800d='';_0x55800d+=_0x7a3ce9(0x90),_0x55800d+=_0x7a3ce9(0x79),alert(_0x55800d),SceneManager['exit']();}},VisuMZ[_0x5088e8(0x76)][_0x5088e8(0xc1)]=Game_Temp['prototype'][_0x5088e8(0x14c)],Game_Temp[_0x5088e8(0x87)][_0x5088e8(0x14c)]=function(){const _0x110c9c=_0x5088e8;VisuMZ[_0x110c9c(0x76)][_0x110c9c(0xc1)][_0x110c9c(0x7f)](this),this['createActSeqProjectilesAnimationQueue']();},Game_Temp[_0x5088e8(0x87)]['createActSeqProjectilesAnimationQueue']=function(){const _0x3932dd=_0x5088e8;this[_0x3932dd(0xc7)]=[];},Game_Temp[_0x5088e8(0x87)][_0x5088e8(0x109)]=function(_0x49058a,_0x131c64,_0x5726d7,_0x1682e7){const _0x3f44b2=_0x5088e8;_0x5726d7=_0x5726d7||![],_0x1682e7=_0x1682e7||![];if($dataAnimations[_0x131c64]){if('IHCGJ'==='IHCGJ'){const _0x241f9f={'targets':_0x49058a,'animationId':_0x131c64,'mirror':_0x5726d7,'mute':_0x1682e7};this['_ActSeqProjectilesAnimationQueue'][_0x3f44b2(0xbe)](_0x241f9f);for(const _0x55f472 of _0x49058a){_0x55f472[_0x3f44b2(0x153)]&&_0x55f472['startAnimation']();}}else this[_0x3f44b2(0x105)]([_0x1922d9],_0x3c513b,_0x2ac3eb,_0x10e3d4,_0xf6c39),_0x23c19b+=_0x6d14fb;}},Game_Temp[_0x5088e8(0x87)][_0x5088e8(0xac)]=function(){const _0x4ebb6c=_0x5088e8;return this[_0x4ebb6c(0xc7)][_0x4ebb6c(0x104)]();},Sprite_Animation[_0x5088e8(0x87)][_0x5088e8(0x9a)]=function(_0x4e9f96){const _0x5d2066=_0x5088e8;this[_0x5d2066(0xb2)]=_0x4e9f96;},Sprite_Animation[_0x5088e8(0x87)]['setProjectile']=function(_0x5d2e7b){this['_isProjectile']=_0x5d2e7b;},VisuMZ['ActSeqProjectiles'][_0x5088e8(0x117)]=Sprite_Animation[_0x5088e8(0x87)][_0x5088e8(0xd8)],Sprite_Animation[_0x5088e8(0x87)][_0x5088e8(0xd8)]=function(){const _0x36734e=_0x5088e8;if(this[_0x36734e(0xb2)])return;VisuMZ[_0x36734e(0x76)]['Sprite_Animation_processSoundTimings']['call'](this);},VisuMZ['ActSeqProjectiles'][_0x5088e8(0x7d)]=Sprite_Animation[_0x5088e8(0x87)][_0x5088e8(0x13e)],Sprite_Animation[_0x5088e8(0x87)]['updateEffectGeometry']=function(){const _0x135068=_0x5088e8;VisuMZ[_0x135068(0x76)]['Sprite_Animation_updateEffectGeometry'][_0x135068(0x7f)](this);if(this[_0x135068(0xeb)]!==undefined){if(_0x135068(0xcd)!==_0x135068(0xcd)){const _0x2a15b5=_0x403a1d[_0x135068(0x76)][_0x135068(0xf8)][_0x135068(0xda)];this[_0x135068(0x13f)]=_0x2a15b5*(_0x439621['PI']/0xb4),this['startProjectile']();}else this['applyProjectileAngle'](this[_0x135068(0xeb)]);}},Sprite_Animation[_0x5088e8(0x87)][_0x5088e8(0xdd)]=function(_0x10a238){const _0x5115e6=_0x5088e8,_0x28b75a=this['_animation'][_0x5115e6(0x71)]/0x64,_0x280a72=Math['PI']/0xb4,_0x2ad0e4=this['_animation']['rotation']['x']*_0x280a72,_0x3aadb9=this[_0x5115e6(0x124)][_0x5115e6(0x156)]['y']*_0x280a72,_0x2e5481=this['_animation'][_0x5115e6(0x156)]['z']*_0x280a72-_0x10a238;this[_0x5115e6(0x152)]&&this['_handle'][_0x5115e6(0xc2)](_0x2ad0e4,_0x3aadb9,_0x2e5481);},Sprite_AnimationMV[_0x5088e8(0x87)][_0x5088e8(0x9a)]=function(_0xd47e56){const _0x498973=_0x5088e8;this[_0x498973(0xb2)]=_0xd47e56;},Sprite_AnimationMV['prototype'][_0x5088e8(0x81)]=function(_0x1a2752){const _0x4a224e=_0x5088e8;this[_0x4a224e(0x144)]=_0x1a2752;},VisuMZ['ActSeqProjectiles'][_0x5088e8(0xdf)]=Sprite_AnimationMV[_0x5088e8(0x87)][_0x5088e8(0x10c)],Sprite_AnimationMV[_0x5088e8(0x87)][_0x5088e8(0x10c)]=function(_0x3b330a){const _0x1e7080=_0x5088e8;this[_0x1e7080(0xb2)]&&(_0x3b330a=JsonEx[_0x1e7080(0x113)](_0x3b330a),_0x3b330a['se']&&(_0x3b330a['se'][_0x1e7080(0xd1)]=0x0)),VisuMZ[_0x1e7080(0x76)][_0x1e7080(0xdf)][_0x1e7080(0x7f)](this,_0x3b330a);},VisuMZ[_0x5088e8(0x76)][_0x5088e8(0xd9)]=Sprite_AnimationMV['prototype']['update'],Sprite_AnimationMV['prototype'][_0x5088e8(0x86)]=function(){const _0x330c13=_0x5088e8;VisuMZ['ActSeqProjectiles'][_0x330c13(0xd9)][_0x330c13(0x7f)](this),this['_adjustedProjectileRadians']!==undefined&&(this[_0x330c13(0x156)]=this[_0x330c13(0xeb)]);},VisuMZ[_0x5088e8(0x76)]['Spriteset_Base_initialize']=Spriteset_Base[_0x5088e8(0x87)][_0x5088e8(0x14c)],Spriteset_Base[_0x5088e8(0x87)][_0x5088e8(0x14c)]=function(){const _0x3da603=_0x5088e8;VisuMZ['ActSeqProjectiles'][_0x3da603(0x89)][_0x3da603(0x7f)](this),this[_0x3da603(0x140)]=[];},VisuMZ['ActSeqProjectiles'][_0x5088e8(0xfe)]=Spriteset_Base[_0x5088e8(0x87)][_0x5088e8(0xc3)],Spriteset_Base[_0x5088e8(0x87)][_0x5088e8(0xc3)]=function(_0x5e9f5f){const _0x3cf425=_0x5088e8;this[_0x3cf425(0x125)](),VisuMZ[_0x3cf425(0x76)][_0x3cf425(0xfe)][_0x3cf425(0x7f)](this,_0x5e9f5f);},VisuMZ[_0x5088e8(0x76)][_0x5088e8(0x9c)]=Spriteset_Base['prototype']['update'],Spriteset_Base['prototype'][_0x5088e8(0x86)]=function(){const _0x2152c4=_0x5088e8;VisuMZ['ActSeqProjectiles'][_0x2152c4(0x9c)][_0x2152c4(0x7f)](this),this[_0x2152c4(0x131)]();},Spriteset_Base['prototype']['updateActSeqProjectilesAnimations']=function(){const _0x8f1fb6=_0x5088e8;for(const _0x622a34 of this[_0x8f1fb6(0x140)]){if(_0x622a34[_0x8f1fb6(0x115)])continue;!_0x622a34[_0x8f1fb6(0xaa)]()&&this['restartActSeqProjectilesAnimation'](_0x622a34);}this[_0x8f1fb6(0x7b)]();},Spriteset_Base[_0x5088e8(0x87)][_0x5088e8(0x7b)]=function(){const _0x43ce29=_0x5088e8;for(;;){if('zRjxu'===_0x43ce29(0xa8)){const _0x3bd30d=$gameTemp[_0x43ce29(0xac)]();if(_0x3bd30d)this[_0x43ce29(0x13a)](_0x3bd30d);else{if('mKEaN'===_0x43ce29(0x13c))break;else _0x4b815e['ActSeqProjectiles'][_0x43ce29(0x7e)][_0x43ce29(0x7f)](this),this[_0x43ce29(0xe0)]=new _0x50c54a(),this[_0x43ce29(0x11a)][_0x43ce29(0xe9)](this['_projectilesContainer']);}}else this[_0x43ce29(0x14c)](...arguments);}},Spriteset_Base[_0x5088e8(0x87)][_0x5088e8(0x13a)]=function(_0x3a571d){const _0x4df634=_0x5088e8,_0x549062=$dataAnimations[_0x3a571d[_0x4df634(0x12d)]],_0x1ae5aa=_0x3a571d[_0x4df634(0xb4)],_0x21a8ab=_0x3a571d[_0x4df634(0x118)],_0x4bde92=_0x3a571d['mute'];let _0x15aaec=this[_0x4df634(0xb3)]();const _0x1baeed=this[_0x4df634(0xd3)]();if(this[_0x4df634(0x158)](_0x549062)){if('OLYSD'!=='OLYSD'){const _0x424c29=_0x333dbe[_0x547ed3['animationId']],_0x4da7f6=_0x176890[_0x4df634(0xb4)],_0x5753e8=_0x4d7715[_0x4df634(0x118)],_0x3741bc=_0x4593d6[_0x4df634(0x142)];let _0x32dd1c=this[_0x4df634(0xb3)]();const _0x12e82c=this['animationNextDelay']();if(this['isAnimationForEach'](_0x424c29))for(const _0xba93f7 of _0x4da7f6){this[_0x4df634(0x105)]([_0xba93f7],_0x424c29,_0x5753e8,_0x32dd1c,_0x3741bc),_0x32dd1c+=_0x12e82c;}else this[_0x4df634(0x105)](_0x4da7f6,_0x424c29,_0x5753e8,_0x32dd1c);}else for(const _0x2f9e9f of _0x1ae5aa){_0x4df634(0x11b)!==_0x4df634(0x8b)?(this['createActSeqProjectilesAnimationSprite']([_0x2f9e9f],_0x549062,_0x21a8ab,_0x15aaec,_0x4bde92),_0x15aaec+=_0x1baeed):_0x29bfb2[_0x4df634(0x153)]();}}else{if(_0x4df634(0x7c)===_0x4df634(0x103)){this[_0x4df634(0x72)]['x']=0.5,this[_0x4df634(0x72)]['y']=0.5,this['x']=_0x319f8f['width']*-0xa,this['y']=_0x473f4d[_0x4df634(0x8d)]*-0xa,this[_0x4df634(0x100)]=0x0,this['_moveDuration']=this[_0x4df634(0x77)][_0x4df634(0x12f)]||0x0,this[_0x4df634(0x157)]=this[_0x4df634(0xbb)],this[_0x4df634(0xc8)]=_0x4df634(0x155),this[_0x4df634(0x13f)]=0x0,this[_0x4df634(0x83)]=![],this[_0x4df634(0x115)]=![];const _0x1562de=this[_0x4df634(0x77)][_0x4df634(0x122)];if(!_0x1562de)return;this['angle']=_0x1562de[_0x4df634(0x99)]||0x0,this[_0x4df634(0xc8)]=_0x1562de[_0x4df634(0xf1)],!this[_0x4df634(0x77)][_0x4df634(0x94)]&&(this[_0x4df634(0x102)]=_0x1562de[_0x4df634(0x12b)]||0x0,this[_0x4df634(0xf0)](_0x1562de[_0x4df634(0xb9)]||0x0),this[_0x4df634(0x71)]['x']=this[_0x4df634(0x71)]['y']=_0x413e94[_0x4df634(0xd7)](0.001,_0x1562de[_0x4df634(0xb6)]||0.001));}else this[_0x4df634(0x105)](_0x1ae5aa,_0x549062,_0x21a8ab,_0x15aaec);}},Spriteset_Base[_0x5088e8(0x87)][_0x5088e8(0x105)]=function(_0x41bcfb,_0x1ce1ee,_0x512825,_0x51a173,_0x4c5f90){const _0x47da0d=_0x5088e8,_0x17310f=this[_0x47da0d(0x114)](_0x1ce1ee),_0xc14ac9=new(_0x17310f?Sprite_AnimationMV:Sprite_Animation)();_0xc14ac9[_0x47da0d(0x81)](!![]);const _0x80c4b9=_0x41bcfb;return this[_0x47da0d(0x11e)](_0x41bcfb[0x0])&&(_0x512825=!_0x512825),_0xc14ac9['targetObjects']=_0x41bcfb,_0xc14ac9[_0x47da0d(0xfb)](_0x80c4b9,_0x1ce1ee,_0x512825,_0x51a173),_0xc14ac9[_0x47da0d(0x9a)](_0x4c5f90),this[_0x47da0d(0x11d)][_0x47da0d(0xe9)](_0xc14ac9),this[_0x47da0d(0x140)][_0x47da0d(0xbe)](_0xc14ac9),_0xc14ac9;},Spriteset_Base['prototype']['restartActSeqProjectilesAnimation']=function(_0x2883ae){const _0x42d265=_0x5088e8;if(!_0x2883ae)return;const _0x46ece6=_0x2883ae['_targets'],_0x325729=_0x2883ae[_0x42d265(0x124)],_0x2cec20=_0x2883ae[_0x42d265(0x108)],_0x52ae4e=0x0,_0x568a64=_0x2883ae[_0x42d265(0xb2)];this[_0x42d265(0xc4)](_0x2883ae);const _0x11d386=this[_0x42d265(0x105)](_0x46ece6,_0x325729,_0x2cec20,_0x52ae4e,_0x568a64);for(const _0x580bfd of _0x46ece6){_0x580bfd&&(_0x580bfd[_0x42d265(0x14d)]=_0x11d386);}},Spriteset_Base[_0x5088e8(0x87)][_0x5088e8(0xc4)]=function(_0xbd311c){const _0x392f39=_0x5088e8;this[_0x392f39(0x140)][_0x392f39(0x116)](_0xbd311c),this[_0x392f39(0x11d)][_0x392f39(0x10f)](_0xbd311c);for(const _0x278a57 of _0xbd311c[_0x392f39(0x84)]){_0x392f39(0x133)!==_0x392f39(0xe6)?_0x278a57[_0x392f39(0x8e)]&&(_0x392f39(0x134)!==_0x392f39(0x134)?_0x2b3fec-=_0x4cbc13[_0x392f39(0x8f)]()[_0x392f39(0x8d)]:_0x278a57[_0x392f39(0x8e)]()):_0x5d96dd[_0x392f39(0x8e)]();}_0xbd311c[_0x392f39(0xc3)]();},Spriteset_Base[_0x5088e8(0x87)][_0x5088e8(0x125)]=function(){const _0xbde4=_0x5088e8;for(const _0x56e928 of this['_ActSeqProjectilesAnimationSprites']){this[_0xbde4(0xc4)](_0x56e928);}},Spriteset_Base['prototype'][_0x5088e8(0xb7)]=function(){const _0x711542=_0x5088e8;return this[_0x711542(0x140)][_0x711542(0xf2)]>0x0;},VisuMZ['ActSeqProjectiles'][_0x5088e8(0x7e)]=Spriteset_Battle[_0x5088e8(0x87)][_0x5088e8(0xdc)],Spriteset_Battle[_0x5088e8(0x87)][_0x5088e8(0xdc)]=function(){const _0xbdf41e=_0x5088e8;VisuMZ[_0xbdf41e(0x76)][_0xbdf41e(0x7e)]['call'](this),this['_projectilesContainer']=new Sprite(),this['_battleField'][_0xbdf41e(0xe9)](this[_0xbdf41e(0xe0)]);},VisuMZ[_0x5088e8(0x76)][_0x5088e8(0xfd)]=Spriteset_Battle[_0x5088e8(0x87)][_0x5088e8(0x13b)],Spriteset_Battle[_0x5088e8(0x87)][_0x5088e8(0x13b)]=function(){const _0x339e64=_0x5088e8;VisuMZ['ActSeqProjectiles'][_0x339e64(0xfd)][_0x339e64(0x7f)](this),this['_projectilesContainer']&&this[_0x339e64(0xea)]&&(this[_0x339e64(0xe0)][_0x339e64(0x71)]['x']=this['_battlerContainer'][_0x339e64(0x71)]['x'],this['_projectilesContainer'][_0x339e64(0x71)]['y']=this['_battlerContainer'][_0x339e64(0x71)]['y'],this[_0x339e64(0xe0)]['x']=this[_0x339e64(0xea)]['x'],this[_0x339e64(0xe0)]['y']=this[_0x339e64(0xea)]['y']);},Spriteset_Battle[_0x5088e8(0x87)][_0x5088e8(0xb0)]=function(_0x5878b7){const _0x2483c0=_0x5088e8;if(!_0x5878b7)return;_0x5878b7=JsonEx['makeDeepCopy'](_0x5878b7);Imported[_0x2483c0(0xae)]&&(_0x2483c0(0x139)!==_0x2483c0(0x73)?this[_0x2483c0(0xde)](_0x5878b7):(_0x5bdced[_0x2483c0(0x76)][_0x2483c0(0xd9)][_0x2483c0(0x7f)](this),this[_0x2483c0(0xeb)]!==_0x2dcd34&&(this[_0x2483c0(0x156)]=this[_0x2483c0(0xeb)])));const _0x2cb13b=[],_0x498f03=[];VisuMZ[_0x2483c0(0x76)]['CreateCoordinates'](_0x2cb13b,_0x5878b7[_0x2483c0(0xf6)]),VisuMZ[_0x2483c0(0x76)][_0x2483c0(0xe1)](_0x498f03,_0x5878b7['Goal']);const _0x5aa441=this[_0x2483c0(0xe0)];for(const _0x49fc0c of _0x2cb13b){for(const _0x24caa5 of _0x498f03){const _0x40d60e=new Sprite_Projectile(_0x5878b7,_0x49fc0c,_0x24caa5);_0x5aa441[_0x2483c0(0xe9)](_0x40d60e);}}},VisuMZ[_0x5088e8(0x76)]['CreateCoordinates']=function(_0x3a1850,_0x1de578){const _0x263c49=_0x5088e8,_0x22531f=_0x1de578[_0x263c49(0x120)],_0xb3f899=_0x1de578[_0x263c49(0x9d)],_0x58036a=_0x1de578[_0x263c49(0xb1)];_0x22531f==='point'&&_0x3a1850[_0x263c49(0xbe)](new Point(_0x1de578['PointX']+_0xb3f899,_0x1de578['PointY']+_0x58036a));if(_0x22531f==='target'){if(_0x263c49(0x98)===_0x263c49(0x98)){const _0x69ffd0=VisuMZ[_0x263c49(0x82)](_0x1de578[_0x263c49(0xa3)]),_0x56a4c9=_0x69ffd0[_0x263c49(0x10a)](_0x1ec3f5=>_0x1ec3f5&&_0x1ec3f5[_0x263c49(0x8f)]())[_0x263c49(0x129)](_0x3abd6d=>VisuMZ[_0x263c49(0x76)][_0x263c49(0x10d)](_0x3abd6d,_0x1de578));if(!_0x56a4c9)return;if(_0x1de578[_0x263c49(0x88)]){const _0x4739d1=_0x56a4c9[_0x263c49(0xf2)]||0x1;let _0xee2ffc=0x0,_0x76818b=0x0;for(const _0x211ac5 of _0x56a4c9){_0xee2ffc+=_0x211ac5[0x0],_0x76818b+=_0x211ac5[0x1];}_0xee2ffc/=_0x4739d1,_0x76818b/=_0x4739d1,_0x3a1850[_0x263c49(0xbe)](new Point(Math[_0x263c49(0x9e)](_0xee2ffc+_0xb3f899),Math['round'](_0x76818b+_0x58036a)));}else for(const _0x5817cb of _0x56a4c9){_0x3a1850[_0x263c49(0xbe)](new Point(Math[_0x263c49(0x9e)](_0x5817cb[0x0]+_0xb3f899),Math['round'](_0x5817cb[0x1]+_0x58036a)));}}else this[_0x263c49(0xc7)]=[];}},VisuMZ['ActSeqProjectiles'][_0x5088e8(0x10d)]=function(_0x1fef60,_0x260823){const _0xed2d38=_0x5088e8;let _0x477ba2=_0xed2d38(0x14e);_0x260823&&(_0x260823[_0xed2d38(0xe7)]=_0x260823['TargetLocation']||_0xed2d38(0x14e),_0x477ba2=_0x260823[_0xed2d38(0xe7)][_0xed2d38(0x74)]());let _0x297885=_0x1fef60[_0xed2d38(0x8f)]()[_0xed2d38(0xd2)];if(_0x477ba2[_0xed2d38(0xa1)](_0xed2d38(0x12a)))_0x297885+=(_0x1fef60[_0xed2d38(0x85)]()?-0x1:0x1)*_0x1fef60['battler']()[_0xed2d38(0xad)]/0x2;else _0x477ba2['includes'](_0xed2d38(0xbd))&&(_0x297885+=(_0x1fef60[_0xed2d38(0x85)]()?0x1:-0x1)*_0x1fef60[_0xed2d38(0x8f)]()[_0xed2d38(0xad)]/0x2);let _0x496f1d=_0x1fef60['battler']()['_baseY'];_0x496f1d+=_0x1fef60['battler']()[_0xed2d38(0xc6)]();if(_0x477ba2[_0xed2d38(0xa1)]('center'))_0x496f1d-=_0x1fef60[_0xed2d38(0x8f)]()['height']/0x2;else _0x477ba2[_0xed2d38(0xa1)](_0xed2d38(0x146))&&(_0xed2d38(0xb5)!==_0xed2d38(0xb5)?(this[_0xed2d38(0x102)]=_0x50d59f[_0xed2d38(0x12b)]||0x0,this['setHue'](_0x1118ac[_0xed2d38(0xb9)]||0x0),this['scale']['x']=this[_0xed2d38(0x71)]['y']=_0x1fcc5b[_0xed2d38(0xd7)](0.001,_0x5a530f['Scale']||0.001)):_0x496f1d-=_0x1fef60[_0xed2d38(0x8f)]()[_0xed2d38(0x8d)]);if(!$gameSystem['isSideView']()&&_0x1fef60[_0xed2d38(0x85)]()){if(_0xed2d38(0xf5)!==_0xed2d38(0x141)){const _0x4f43d7=SceneManager[_0xed2d38(0x10e)][_0xed2d38(0x10b)],_0x1388c3=SceneManager[_0xed2d38(0x10e)][_0xed2d38(0x14b)];_0x297885+=_0x1388c3['x']+_0x4f43d7['x'],_0x496f1d+=_0x1388c3['y']+_0x4f43d7['y'];}else{const _0x6e3f9d=_0x169cd5[_0xed2d38(0x10e)][_0xed2d38(0x10b)],_0x40ec1d=_0x6be471[_0xed2d38(0x10e)][_0xed2d38(0x14b)];_0x8c7e86+=_0x40ec1d['x']+_0x6e3f9d['x'],_0x5312c0+=_0x40ec1d['y']+_0x6e3f9d['y'];}}return[_0x297885,_0x496f1d];},Spriteset_Battle[_0x5088e8(0x87)]['isAnyProjectilePresent']=function(){const _0xe4e14b=_0x5088e8;if(!this[_0xe4e14b(0xe0)])return!![];return this['_projectilesContainer'][_0xe4e14b(0x9f)]['length']>0x0;};function Sprite_Projectile(){const _0x3f9a32=_0x5088e8;this[_0x3f9a32(0x14c)](...arguments);}Sprite_Projectile[_0x5088e8(0x87)]=Object['create'](Sprite[_0x5088e8(0x87)]),Sprite_Projectile[_0x5088e8(0x87)][_0x5088e8(0x80)]=Sprite_Projectile,Sprite_Projectile[_0x5088e8(0x87)][_0x5088e8(0x14c)]=function(_0x4cb2cb,_0xb9223c,_0x52aae5){const _0x27c5c9=_0x5088e8;this[_0x27c5c9(0x77)]=_0x4cb2cb,this[_0x27c5c9(0x13d)](_0xb9223c,_0x52aae5),Sprite[_0x27c5c9(0x87)][_0x27c5c9(0x14c)][_0x27c5c9(0x7f)](this),this[_0x27c5c9(0x112)](),this[_0x27c5c9(0xe2)]();},Sprite_Projectile[_0x5088e8(0x87)]['setupCoordinates']=function(_0x225caa,_0x253e85){const _0x399c50=_0x5088e8;this['_moveBaseX']=_0x225caa['x'],this[_0x399c50(0x12e)]=_0x225caa['y'],this['_moveCalcX']=_0x225caa['x'],this[_0x399c50(0x145)]=_0x225caa['y'],this[_0x399c50(0xec)]=_0x253e85['x'],this['_moveTargetY']=_0x253e85['y'];},Sprite_Projectile[_0x5088e8(0x87)][_0x5088e8(0x112)]=function(){const _0x45f143=_0x5088e8;this[_0x45f143(0x72)]['x']=0.5,this[_0x45f143(0x72)]['y']=0.5,this['x']=Graphics[_0x45f143(0xad)]*-0xa,this['y']=Graphics[_0x45f143(0x8d)]*-0xa,this['_moveTime']=0x0,this['_moveDuration']=this[_0x45f143(0x77)]['Duration']||0x0,this[_0x45f143(0x157)]=this[_0x45f143(0xbb)],this[_0x45f143(0xc8)]=_0x45f143(0x155),this[_0x45f143(0x13f)]=0x0,this['_startReady']=![],this[_0x45f143(0x115)]=![];const _0x69a480=this[_0x45f143(0x77)]['Extra'];if(!_0x69a480)return;this[_0x45f143(0xab)]=_0x69a480[_0x45f143(0x99)]||0x0,this['_easing']=_0x69a480[_0x45f143(0xf1)],!this[_0x45f143(0x77)][_0x45f143(0x94)]&&(this['blendMode']=_0x69a480[_0x45f143(0x12b)]||0x0,this['setHue'](_0x69a480['Hue']||0x0),this[_0x45f143(0x71)]['x']=this[_0x45f143(0x71)]['y']=Math[_0x45f143(0xd7)](0.001,_0x69a480[_0x45f143(0xb6)]||0.001));},Sprite_Projectile['prototype'][_0x5088e8(0xe2)]=function(){const _0x2cd642=_0x5088e8;if(this['_settings'][_0x2cd642(0x94)])'qmzro'!==_0x2cd642(0xdb)?(this['bitmap']=new Bitmap(0x1,0x1),this[_0x2cd642(0xaf)](),this[_0x2cd642(0x111)]()):(this[_0x2cd642(0x77)]=_0x2d8ea0,this[_0x2cd642(0x13d)](_0x1348ae,_0x597c87),_0x1453ea['prototype'][_0x2cd642(0x14c)]['call'](this),this[_0x2cd642(0x112)](),this[_0x2cd642(0xe2)]());else{if(this[_0x2cd642(0x77)][_0x2cd642(0xcc)])'vqDTX'!==_0x2cd642(0xcf)?(_0x3a4251=_0x1ebca4['makeDeepCopy'](_0xa67995),_0x2c2c12['se']&&(_0x2cd4ea['se'][_0x2cd642(0xd1)]=0x0)):(this[_0x2cd642(0xff)]=ImageManager[_0x2cd642(0xf3)](_0x2cd642(0xbf)),this['bitmap']['addLoadListener'](this[_0x2cd642(0xfa)]['bind'](this)));else this[_0x2cd642(0x77)][_0x2cd642(0xee)]?'XwBwb'===_0x2cd642(0xa4)?(this['bitmap']=ImageManager[_0x2cd642(0x14f)](this[_0x2cd642(0x77)][_0x2cd642(0xee)]),this['bitmap'][_0x2cd642(0x96)](this[_0x2cd642(0xf4)][_0x2cd642(0x121)](this))):_0x12c9d6=_0x5718ad[_0x2cd642(0xd7)](_0x92b885,_0x300a72):_0x2cd642(0xe5)===_0x2cd642(0x130)?(_0x13aea1[_0x2cd642(0xe7)]=_0x115fe9[_0x2cd642(0xe7)]||_0x2cd642(0x14e),_0x4344cf=_0x311f88[_0x2cd642(0xe7)][_0x2cd642(0x74)]()):(this[_0x2cd642(0xff)]=new Bitmap(0x1,0x1),this[_0x2cd642(0x111)]());}},Sprite_Projectile[_0x5088e8(0x87)]['setupAnimation']=function(){const _0x2ba291=_0x5088e8,_0x248b76=VisuMZ[_0x2ba291(0x76)][_0x2ba291(0xf8)][_0x2ba291(0x137)];this[_0x2ba291(0x13f)]=_0x248b76*(Math['PI']/0xb4);const _0x251b0e=BattleManager[_0x2ba291(0x8a)];if(!_0x251b0e)return this[_0x2ba291(0x151)]();const _0x19c794=this[_0x2ba291(0x77)]['AnimationID'],_0x111992=$dataAnimations[_0x19c794];if(!_0x111992)return this[_0x2ba291(0x151)]();const _0x7accd4=![],_0x7065e6=0x0,_0x3630af=!![];this[_0x2ba291(0x14d)]=_0x251b0e[_0x2ba291(0x105)]([this],_0x111992,_0x7accd4,_0x7065e6,_0x3630af),this[_0x2ba291(0x111)]();},Sprite_Projectile[_0x5088e8(0x87)][_0x5088e8(0xfa)]=function(){const _0x20e209=_0x5088e8,_0x1e2b15=VisuMZ[_0x20e209(0x76)]['Settings']['IconAngleAdjust'];this[_0x20e209(0x13f)]=_0x1e2b15*(Math['PI']/0xb4);const _0x12a1d4=this['_settings']['Icon'],_0x4b53dc=ImageManager[_0x20e209(0xf9)],_0x39d490=ImageManager[_0x20e209(0x147)],_0x4a1608=_0x12a1d4%0x10*_0x4b53dc,_0x435c07=Math[_0x20e209(0x149)](_0x12a1d4/0x10)*_0x39d490;this[_0x20e209(0x154)](_0x4a1608,_0x435c07,_0x4b53dc,_0x39d490),this[_0x20e209(0x111)]();},Sprite_Projectile[_0x5088e8(0x87)][_0x5088e8(0xf4)]=function(){const _0x34ec72=_0x5088e8,_0x521f97=VisuMZ[_0x34ec72(0x76)]['Settings'][_0x34ec72(0xda)];this[_0x34ec72(0x13f)]=_0x521f97*(Math['PI']/0xb4),this['startProjectile']();},Sprite_Projectile[_0x5088e8(0x87)]['startProjectile']=function(){const _0x4bcce0=_0x5088e8;this[_0x4bcce0(0x83)]=!![];},Sprite_Projectile[_0x5088e8(0x87)][_0x5088e8(0x86)]=function(){const _0x20090a=_0x5088e8;Sprite[_0x20090a(0x87)][_0x20090a(0x86)][_0x20090a(0x7f)](this);if(!this['_startReady'])return;this[_0x20090a(0x115)]?this[_0x20090a(0x151)]():(this[_0x20090a(0x119)](),this['updateSpin']());},Sprite_Projectile[_0x5088e8(0x87)]['isWaitUntilAnimationFinished']=function(){return this['_settings']['WaitForAnimation']&&this['_animationSprite']&&this['_animationSprite']['isPlaying']();},Sprite_Projectile[_0x5088e8(0x87)][_0x5088e8(0x151)]=function(){const _0x1b51e2=_0x5088e8;if(!this['parent'])return;if(this['isWaitUntilAnimationFinished']()){if('DanRS'!=='stNhn'){this[_0x1b51e2(0x11c)]();return;}else _0x5a2bd6('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x1b51e2(0x107)](_0x221b22,_0x55bf94)),_0x4b22d0[_0x1b51e2(0x138)]();}this['parent'][_0x1b51e2(0x10f)](this);if(this['_animationSprite']){if(_0x1b51e2(0x11f)===_0x1b51e2(0xa0)){const _0x219c31={'targets':_0x561a63,'animationId':_0x34b732,'mirror':_0x32cf69,'mute':_0x3cd82d};this[_0x1b51e2(0xc7)]['push'](_0x219c31);for(const _0x1aeb54 of _0x35fcfa){_0x1aeb54[_0x1b51e2(0x153)]&&_0x1aeb54[_0x1b51e2(0x153)]();}}else{const _0x56f8d2=BattleManager[_0x1b51e2(0x8a)];_0x56f8d2&&(_0x56f8d2[_0x1b51e2(0xc4)](this[_0x1b51e2(0x14d)]),delete this[_0x1b51e2(0x14d)]);}}},Sprite_Projectile[_0x5088e8(0x87)][_0x5088e8(0x119)]=function(){const _0x35f3fd=_0x5088e8;if(this[_0x35f3fd(0xbb)]<0x0)return;this[_0x35f3fd(0x100)]++;var _0x4e5afa=this[_0x35f3fd(0x100)],_0x55a072=this['_moveTotalDuration'],_0x4e3b97=this[_0x35f3fd(0x75)],_0x256e03=this[_0x35f3fd(0x12e)],_0x5260e0=this[_0x35f3fd(0xec)],_0x263bae=this[_0x35f3fd(0x123)];_0x4e5afa/=_0x55a072,_0x4e5afa=VisuMZ[_0x35f3fd(0x78)](_0x4e5afa,this[_0x35f3fd(0xc8)]['toUpperCase']()[_0x35f3fd(0xa2)]());var _0xcb0f49=this[_0x35f3fd(0x92)],_0x4473dc=this['_moveCalcY'];this[_0x35f3fd(0x92)]=_0x4e3b97+_0x4e5afa*(_0x5260e0-_0x4e3b97),this[_0x35f3fd(0x145)]=_0x256e03+_0x4e5afa*(_0x263bae-_0x256e03)-this[_0x35f3fd(0xd4)]();var _0x35fef3=this[_0x35f3fd(0x92)],_0x3fd4a7=this[_0x35f3fd(0x145)];this['applyAngle'](_0xcb0f49,_0x35fef3,_0x4473dc,_0x3fd4a7),this['x']=Math[_0x35f3fd(0x9e)](this[_0x35f3fd(0x92)]),this['y']=Math[_0x35f3fd(0x9e)](this[_0x35f3fd(0x145)]),this['_moveDuration']--;if(this[_0x35f3fd(0xbb)]<0x0){if(_0x35f3fd(0x127)!==_0x35f3fd(0x127)){if(!this[_0x35f3fd(0xd6)])return;if(this[_0x35f3fd(0x14a)]()){this[_0x35f3fd(0x11c)]();return;}this[_0x35f3fd(0xd6)][_0x35f3fd(0x10f)](this);if(this[_0x35f3fd(0x14d)]){const _0x699ad1=_0x380938[_0x35f3fd(0x8a)];_0x699ad1&&(_0x699ad1['removeActSeqProjectilesAnimation'](this[_0x35f3fd(0x14d)]),delete this['_animationSprite']);}}else{this['x']=this[_0x35f3fd(0xec)],this['y']=this[_0x35f3fd(0x123)],this[_0x35f3fd(0x115)]=!![];if(this[_0x35f3fd(0x14d)])this[_0x35f3fd(0x14d)][_0x35f3fd(0x115)]=!![];}}},Sprite_Projectile[_0x5088e8(0x87)][_0x5088e8(0xbc)]=function(_0x3cd20f,_0x3b4ef9,_0x2de831,_0x3bc714){const _0x3d1e84=_0x5088e8;if(this[_0x3d1e84(0x77)][_0x3d1e84(0x122)]&&this[_0x3d1e84(0x77)]['Extra']['AutoAngle']){if('onpFs'===_0x3d1e84(0xca)){var _0x2ea1fa=_0x3b4ef9-_0x3cd20f,_0x234b65=_0x3bc714-_0x2de831,_0x1e7e2b=Math['atan2'](_0x234b65,_0x2ea1fa);_0x1e7e2b+=this[_0x3d1e84(0x77)][_0x3d1e84(0x122)][_0x3d1e84(0x99)]*(Math['PI']/0xb4),this[_0x3d1e84(0x156)]=_0x1e7e2b+this[_0x3d1e84(0x13f)];if(this[_0x3d1e84(0x14d)]){if('aWqRf'===_0x3d1e84(0xfc))this[_0x3d1e84(0x14d)][_0x3d1e84(0xeb)]=this[_0x3d1e84(0x156)];else{_0x2dc3a0['prototype'][_0x3d1e84(0x86)][_0x3d1e84(0x7f)](this);if(!this[_0x3d1e84(0x83)])return;this['_endReady']?this[_0x3d1e84(0x151)]():(this[_0x3d1e84(0x119)](),this['updateSpin']());}}}else this['bitmap']=_0x5ab392[_0x3d1e84(0x14f)](this['_settings'][_0x3d1e84(0xee)]),this[_0x3d1e84(0xff)]['addLoadListener'](this['setupPictureFrame'][_0x3d1e84(0x121)](this));}},Sprite_Projectile['prototype'][_0x5088e8(0xd4)]=function(){const _0x5d5c5c=_0x5088e8;if(!this['_settings'][_0x5d5c5c(0x122)])return 0x0;if(this[_0x5d5c5c(0x77)][_0x5d5c5c(0x122)][_0x5d5c5c(0xb8)]===0x0)return 0x0;var _0x3c2b3f=this[_0x5d5c5c(0x157)]-this[_0x5d5c5c(0xbb)],_0x348466=this['_moveTotalDuration']/0x2,_0x2efcc4=this[_0x5d5c5c(0x77)][_0x5d5c5c(0x122)]?this[_0x5d5c5c(0x77)][_0x5d5c5c(0x122)][_0x5d5c5c(0xb8)]||0x0:0x0,_0x215830=-_0x2efcc4/Math['pow'](_0x348466,0x2),_0x39ceed=_0x215830*Math['pow'](_0x3c2b3f-_0x348466,0x2)+_0x2efcc4;return _0x39ceed;},Sprite_Projectile[_0x5088e8(0x87)][_0x5088e8(0x11c)]=function(){const _0x221289=_0x5088e8;if(!this['_settings']['Extra'])return;this['angle']+=this[_0x221289(0x77)]['Extra']['Spin']||0x0;};