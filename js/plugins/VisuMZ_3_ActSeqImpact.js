//=============================================================================
// VisuStella MZ - ActSeqImpact
// VisuMZ_3_ActSeqImpact.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_ActSeqImpact = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ActSeqImpact = VisuMZ.ActSeqImpact || {};
VisuMZ.ActSeqImpact.version = 1.03;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.03] [ActSeqImpact]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Action_Sequence_Impact_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 * 
 * With the aid of Pixi JS Filters, this plugin adds more impact to battle by
 * producing special on screen filter effects to make certain actions like
 * critical hits, guarding, and dodging more visibly different adding to the
 * flavor of the battle.
 * 
 * This plugin also adds new Action Sequences for the Battle Core, allowing
 * impacting effects like color breaks, motion blurs, shockwaves, motion
 * trails, and zoom blurs.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Creating a color break effect when landing critical hits akin to a
 *   chromatic aberration effect.
 * * A battler who dodges an attack will display a motion blur effect.
 * * Guarding damage will cause a shockwave effect.
 * * Adds new Action Sequences available from the Battle Core Plugin Commands.
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
 * * Pixi JS Filters*
 * * VisuMZ_0_CoreEngine
 * * VisuMZ_1_BattleCore
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 * 
 * *Note* You can download the Pixi JS Filters plugin library from the below
 * URL or from the Action Sequence Impact product page. Install it as a
 * Tier 0 plugin.
 * 
 * *Note2* Pixi JS Filters perform differently on different machines/devices.
 * Please understand that this is outside of VisuStella's control.
 * 
 * URL: https://filters.pixijs.download/v3.1.0/pixi-filters.js
 *
 * ------ Tier 3 ------
 *
 * This plugin is a Tier 3 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * New Effects
 * ============================================================================
 * 
 * The following are new visual effects added through this plugin. These visual
 * effects are added and modified with the sense of adding more impact to
 * visuals in battle.
 *
 * ---
 * 
 * Color Break
 * 
 * When a critical hit occurs, the colors on the screen will break apart into
 * red, green, and blue into random directions and then come back together
 * similar to a chromatic aberration. This creates a sense of weight when
 * delivering a powerful strike.
 * 
 * This is optional and can be disabled.
 * 
 * This effect is also available as an Action Sequence in the Battle Core.
 * 
 * ---
 * 
 * Motion Blur
 * 
 * When a battler dodges an attack (either a miss or evasion proc), then the
 * battler will generate a motion blur effect. Their image splits apart in a
 * blurred manner and then fuses back together to become whole again. This
 * generates the illusion that they're hard to hit.
 * 
 * This is optional and can be disabled.
 * 
 * This effect is also available as an Action Sequence in the Battle Core.
 * There are two versions, one that affects only the battler while another that
 * affects the whole screen.
 * 
 * ---
 * 
 * Shockwave
 * 
 * When a guarding battler would receive HP damage (or manages to defend to 0
 * damage), a shockwave effect occurs to display the impact. The shockwave will
 * ripple out from the battler to the edges of the screen before disappearing.
 * 
 * This is optional and can be disabled.
 * 
 * This effect is also available as an Action Sequence in the Battle Core.
 * 
 * ---
 * 
 * Motion Trail
 * 
 * If motion trails are enabled on a battler, whenever they move, they leave
 * behind a residual sprite of their motion during that particular frame. The
 * motion blurs aid in visualizing the path the battler moved in case the
 * battler's movement trajectory is normally too fast to portray. Motion trails
 * can have different hue and/or tones.
 * 
 * This is an Action Sequence-only effect.
 * 
 * ---
 * 
 * Zoom Blur
 * 
 * A zoom blur will direct its focus at a specific point on the screen and
 * create a visual radial distortion towards that point. The intensity of the
 * zoom effect will diminish over the duration of the zoom blur. This helps
 * draw focus towards specific parts of the screen.
 * 
 * This is an Action Sequence-only effect.
 * 
 * ---
 *
 * ============================================================================
 * Action Sequence - Plugin Commands
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
 * === Action Sequences - Impact ===
 * 
 * These Action Sequences are related to creating impact.
 * Requires VisuMZ_3_ActSeqImpact!
 * 
 * ---
 *
 * IMPACT: Color Break
 * - Breaks the colors on the screen before reassembling.
 * - Requires VisuMZ_3_ActSeqImpact!
 *
 *   Intensity:
 *   - What is the intensity of the color break effect?
 *
 *   Duration:
 *   - What is the duration of the color break effect?
 *
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *
 * ---
 *
 * IMPACT: Motion Blur Screen
 * - Creates a motion blur on the whole screen.
 * - Requires VisuMZ_3_ActSeqImpact!
 *
 *   Angle:
 *   - Determine what angle to make the motion blur at.
 *
 *   Intensity Rate:
 *   - This determines intensity rate of the motion blur.
 *   - Use a number between 0 and 1.
 *
 *   Duration:
 *   - How many frames should the motion blur last?
 *   - What do you want to be its duration?
 *
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *
 * ---
 *
 * IMPACT: Motion Blur Target(s)
 * - Creates a motion blur on selected target(s).
 * - Requires VisuMZ_3_ActSeqImpact!
 *
 *   Targets:
 *   - Select unit(s) to create motion blur effects for.
 *
 *   Angle:
 *   - Determine what angle to make the motion blur at.
 *
 *   Intensity Rate:
 *   - This determines intensity rate of the motion blur.
 *   - Use a number between 0 and 1.
 *
 *   Duration:
 *   - How many frames should the motion blur last?
 *   - What do you want to be its duration?
 *
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *
 * ---
 *
 * IMPACT: Motion Trail Create
 * - Creates a motion trail effect for the target(s).
 * - Requires VisuMZ_3_ActSeqImpact!
 *
 *   Targets:
 *   - Select unit(s) to create motion trail effects for.
 *
 *   Delay:
 *   - How many frames to delay by when creating a motion trail?
 *   - The higher the delay, the less motion trails there are.
 *
 *   Duration:
 *   - How many frames should the motion trail last?
 *   - What do you want to be its duration?
 *
 *   Hue:
 *   - What do you want to be the hue for the motion trail?
 *
 *   Starting Opacity:
 *   - What starting opacity value do you want for the motion trail?
 *   - Opacity values decrease over time.
 *
 *   Tone:
 *   - What tone do you want for the motion trail?
 *   - Format: [Red, Green, Blue, Gray]
 *
 * ---
 *
 * IMPACT: Motion Trail Remove
 * - Removes the motion trail effect from the target(s).
 * - Requires VisuMZ_3_ActSeqImpact!
 *
 *   Targets:
 *   - Select unit(s) to clear motion trail effects for.
 *
 * ---
 *
 * IMPACT: Shockwave at Point
 * - Creates a shockwave at the designated coordinates.
 * - Requires VisuMZ_3_ActSeqImpact!
 *
 *   Point: X:
 *   Point: Y:
 *   - What x/y coordinate do you want to create a shockwave at?
 *   - You can use JavaScript code.
 *
 *   Amplitude:
 *   - What is the aplitude of the shockwave effect?
 *
 *   Wavelength:
 *   - What is the wavelength of the shockwave effect?
 *
 *   Duration:
 *   - What is the duration of the shockwave?
 *
 * ---
 *
 * IMPACT: Shockwave from Each Target(s)
 * - Creates a shockwave at each of the target(s) location(s).
 * - Requires VisuMZ_3_ActSeqImpact!
 *
 *   Targets:
 *   - Select unit(s) to start a shockwave from.
 *
 *   Target Location:
 *   - Select which part target group to start a shockwave from.
 * 
 *     Offset X:
 *     Offset Y:
 *     - How much to offset the shockwave X/Y point by.
 *
 *   Amplitude:
 *   - What is the aplitude of the shockwave effect?
 *
 *   Wavelength:
 *   - What is the wavelength of the shockwave effect?
 *
 *   Duration:
 *   - What is the duration of the shockwave?
 *
 * ---
 *
 * IMPACT: Shockwave from Target(s) Center
 * - Creates a shockwave from the center of the target(s).
 * - Requires VisuMZ_3_ActSeqImpact!
 *
 *   Targets:
 *   - Select unit(s) to start a shockwave from.
 *
 *   Target Location:
 *   - Select which part target group to start a shockwave from.
 * 
 *     Offset X:
 *     Offset Y:
 *     - How much to offset the shockwave X/Y point by.
 *
 *   Amplitude:
 *   - What is the aplitude of the shockwave effect?
 *
 *   Wavelength:
 *   - What is the wavelength of the shockwave effect?
 *
 *   Duration:
 *   - What is the duration of the shockwave?
 *
 * ---
 *
 * IMPACT: Zoom Blur at Point
 * - Creates a zoom blur at the designated coordinates.
 * - Requires VisuMZ_3_ActSeqImpact!
 *
 *   Point: X:
 *   Point: Y:
 *   - What x/y coordinate do you want to focus the zoom at?
 *   - You can use JavaScript code.
 *
 *   Zoom Strength:
 *   - What is the strength of the zoom effect?
 *   - Use a number between 0 and 1.
 *
 *   Visible Radius:
 *   - How much of a radius should be visible from the center?
 *
 *   Duration:
 *   - What is the duration of the zoom blur?
 *
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *
 * ---
 *
 * IMPACT: Zoom Blur at Target(s) Center
 * - Creates a zoom blur at the center of targets.
 * - Requires VisuMZ_3_ActSeqImpact!
 *
 *   Targets:
 *   - Select unit(s) to start a zoom blur from.
 *
 *   Target Location:
 *   - Select which part target group to start a zoom blur from.
 * 
 *     Offset X:
 *     Offset Y:
 *     - How much to offset the zoom blur X/Y point by.
 *
 *   Zoom Strength:
 *   - What is the strength of the zoom effect?
 *   - Use a number between 0 and 1.
 *
 *   Visible Radius:
 *   - How much of a radius should be visible from the center?
 *
 *   Duration:
 *   - What is the duration of the zoom blur?
 *
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Critical Color Break Settings
 * ============================================================================
 *
 * When critical hits occur, you can cause a Color Break effect to occur.
 *
 * ---
 *
 * Settings
 * 
 *   Enable/Disable?:
 *   - Enables/disables the Color Break effect whenever a critical hit occurs?
 * 
 *   Intensity:
 *   - How intense do you want the Color Break effect to be?
 * 
 *   Duration:
 *   - What is the duration of the Color Break effect?
 * 
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Dodge Motion Blur Settings
 * ============================================================================
 *
 * When a battler dodges an attack, you can create a motion blur effect.
 *
 * ---
 *
 * Settings
 * 
 *   Enable/Disable?:
 *   - Enables/disables the Motion Blur effect whenever a battler evades an
 *     attack?
 * 
 *   Intensity Rate:
 *   - This determines intensity rate of the motion blur.
 *   - Use a number between 0 and 1.
 * 
 *   Duration:
 *   - How many frames should the motion blur last?
 *   - What do you want to be its duration?
 * 
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Guard Shockwave Settings
 * ============================================================================
 *
 * When a guarding battler receives damage, you can create a shockwave effect.
 *
 * ---
 *
 * Category
 * 
 *   Enable/Disable?:
 *   - Enables/disables the Shockwave effect whenever a battler is attacked
 *     while guarding?
 * 
 *   Amplitude:
 *   - What is the aplitude of the shockwave effect?
 * 
 *   Wavelength:
 *   - What is the wavelength of the shockwave effect?
 * 
 *   Duration:
 *   - What is the duration of the shockwave?
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
 * Version 1.03: December 11, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * Feature Update!
 * ** Action Sequence Impact Action Sequences "Shockwave from Each Target(s)",
 *    "Shockwave from Target(s) Center", and "Zoom Blur at Target(s) Center"
 *    now have "Offset X" and "Offset Y" plugin parameters. Added by Yanfly.
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.02: December 4, 2020
 * * Bug Fixes!
 * ** Enemies with a SV Battler attached to them will no longer desynch after
 *    using a motion trail effect. Fix made by Irina.
 * 
 * Version 1.01: November 29, 2020
 * * Bug Fixes!
 * ** Motion Trails for Dragonbones armatures are now properly adjusted for
 *    their scale and offset. Fix made by Arisu.
 *
 * Version 1.00: December 2, 2020
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
 * @param ActSeqImpact
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param CriticalColorBreak:struct
 * @text Critical Color Break
 * @type struct<CriticalColorBreak>
 * @desc When critical hits occur, you can cause a Color Break effect to occur.
 * @default {"Enable:eval":"true","Intensity:num":"30","Duration:num":"30","EasingType:str":"OutBack"}
 *
 * @param DodgeMotionBlur:struct
 * @text Dodge Motion Blur
 * @type struct<DodgeMotionBlur>
 * @desc When a battler dodges an attack, you can create a motion blur effect.
 * @default {"Enable:eval":"true","Rate:eval":"0.5","Duration:num":"30","EasingType:str":"InOutSine"}
 *
 * @param GuardShockWave:struct
 * @text Guard Shockwave
 * @type struct<GuardShockWave>
 * @desc When a guarding battler receives damage, you can create a shockwave effect.
 * @default {"Enable:eval":"true","Amp:num":"30","Wave:num":"160","Duration:num":"30"}
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
 * Critical Color Break Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~CriticalColorBreak:
 *
 * @param Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables/disables the Color Break effect whenever a
 * critical hit occurs?
 * @default true
 *
 * @param Intensity:num
 * @text Intensity
 * @type Number
 * @min 1
 * @desc How intense do you want the Color Break effect to be?
 * @default 30
 *
 * @param Duration:num
 * @text Duration
 * @type Number
 * @min 1
 * @desc What is the duration of the Color Break effect?
 * @default 30
 *
 * @param EasingType:str
 * @text Easing Type
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default OutBack
 *
 */
/* ----------------------------------------------------------------------------
 * Dodge Motion Blur Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~DodgeMotionBlur:
 *
 * @param Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables/disables the Motion Blur effect whenever a
 * battler evades an attack?
 * @default true
 *
 * @param Rate:eval
 * @text Intensity Rate
 * @desc This determines intensity rate of the motion blur.
 * Use a number between 0 and 1.
 * @default 0.5
 *
 * @param Duration:num
 * @text Duration
 * @type Number
 * @min 1
 * @desc How many frames should the motion blur last?
 * What do you want to be its duration?
 * @default 30
 *
 * @param EasingType:str
 * @text Easing Type
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default InOutSine
 *
 */
/* ----------------------------------------------------------------------------
 * Guard Shock Wave Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~GuardShockWave:
 *
 * @param Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables/disables the Shockwave effect whenever a
 * battler is attacked while guarding?
 * @default true
 * 
 * @param Amp:num
 * @text Amplitude
 * @type Number
 * @min 1
 * @desc What is the aplitude of the shockwave effect?
 * @default 30
 * 
 * @param Wave:num
 * @text Wavelength
 * @type Number
 * @min 1
 * @desc What is the wavelength of the shockwave effect?
 * @default 160
 * 
 * @param Duration:num
 * @text Duration
 * @type Number
 * @min 1
 * @desc What is the duration of the shockwave?
 * @default 30
 *
 */
//=============================================================================

const _0x12ad=['width','_battlerContainer','createDistortionSprite','exit','lastAnimationState','Gckfb','parse','createDragonbonesArmature','opacity','_rgbSplitImpactFilter','Spriteset_Battle_adjustFlippedBattlefield','Settings','ShockwaveFilter','qJQPf','GrjaY','cos','some','Rate','children','prototype','remove','timeSpeed','_zoomBlurImpactWholeDuration','_battlerMotionTrailData','createBaseFilters','_duration','_baseY','dispose','return\x200','createActSeqImpactBaseFilters','disposeSprite','currentTime','update','pYDPE','visible','Sprite_Damage_setupCriticalEffect','setupMotionBlurImpactFilter','RGBSplitFilter','Wave','_shockwaveImpactFilters','push','_distortionSprite','ARRAYSTRUCT','Spriteset_Battle_createBattleFieldContainer','constructor','VisuMZ_0_CoreEngine','call','applyEasing','setHue','lastAnimationName','center','clearBattlerMotionTrailData','createActSeqImpactFilters','ActSeqImpact','mainSpriteHeight','description','ConvertParams','xubMj','updateNextOpacities','ARRAYJSON','Game_Battler_performMiss','createRgbSplitImpactFilter','armature','performEvasion','_projectilesContainer','sin','version','dragonbonesData','filters','Sprite_Battler_update','isAppeared','adjustFlippedBattlefield','GuardShockWave','NUM','setBattlerMotionTrailData','_baseSprite','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','ZoomBlurFilter','isSceneBattle','setFrame','UcVrC','_zoomBlurImpactFilter','animation','ummpX','_zoomBlurImpactEasing','createZoomBlurImpactFilter','_dragonbones','_sourceData','filter','Spriteset_Battle_updateBattlerContainer','_motionBlurImpactFilter','createArmature','_rgbSplitImpactWholeDuration','randomInt','brightness','updateRgbSplitImpactFilter','onDamageActSeqImpact','performDodgeActSeqImpact','Game_Battler_performEvasion','battler','VisuMZ_2_DragonbonesUnion','skew','format','_sourceSprite','createChildren','updateBaseFilters','tone','updateDuration','_scene','_motionTrailContainer','updateShockwaveImpactFilters','auDWh','scaleX','VOIdk','Spriteset_Base_updateBaseFilters','Linear','innerRadius','height','_battler','parent','blue','uMVut','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','JNQYs','offsetX','initialize','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','trim','setupCriticalEffectActSeqImpact','create','_rgbSplitImpactDuration','setupCriticalEffect','JSON','waveLength','putMotionTrailBattlersOnTop','Duration','scaleY','green','krfZE','_spriteset','TaMlb','STR','rPfiR','angle','nextOpacity','Xfjax','scale','CPHCA','createDefaultBattlerMotionTrailData','setupShockwaveImpactFilter','onDamage','OutBack','hqzkI','Enable','strength','HjRdV','ARRAYNUM','createBattleFieldContainer','_motionBlurImpactDuration','Spriteset_Base_createBaseFilters','max','Sprite_Battler_createDistortionSprite','createMotionBlurImpactFilter','updateMotionBlurImpactFilter','delay','updateActSeqImpactBaseFilters','map','_zoomBlurImpactDuration','MotionBlurFilter','updateBattlerContainer','ARRAYFUNC','time','gotoAndStopByTime','_baseX','hqZwn','frameCount','removeChild','_rgbSplitImpactEasing','VisuMZ_1_BattleCore','setupMotionTrailProperties','performMiss','owMxg','STRUCT','_motionBlurImpactWholeDuration','anchor','addChild','match','_isCreatingMotionTrailSprite','EasingType','isAlive','red','name','matchSpriteProperties','FUNC','mainSpriteWidth','hue','hasMotionTrailSprite','sortMotionTrailBattlers','offsetY','velocity','_battleField','amplitude','_motionBlurImpactEasing','CriticalColorBreak','ApplyEasing','length','DodgeMotionBlur'];(function(_0x594a52,_0x35aa7b){const _0x12ad6a=function(_0x32df98){while(--_0x32df98){_0x594a52['push'](_0x594a52['shift']());}};_0x12ad6a(++_0x35aa7b);}(_0x12ad,0x105));const _0x32df=function(_0x594a52,_0x35aa7b){_0x594a52=_0x594a52-0x15c;let _0x12ad6a=_0x12ad[_0x594a52];return _0x12ad6a;};const _0xf41b2f=_0x32df;var label='ActSeqImpact',tier=tier||0x0,dependencies=[_0xf41b2f(0x222),_0xf41b2f(0x1d8)],pluginData=$plugins[_0xf41b2f(0x17e)](function(_0x1e4342){const _0x433c27=_0xf41b2f;return _0x1e4342['status']&&_0x1e4342[_0x433c27(0x15d)]['includes']('['+label+']');})[0x0];VisuMZ[label][_0xf41b2f(0x200)]=VisuMZ[label]['Settings']||{},VisuMZ[_0xf41b2f(0x15e)]=function(_0x232322,_0x43fa18){const _0x36c314=_0xf41b2f;for(const _0x335d5b in _0x43fa18){if(_0x335d5b[_0x36c314(0x1e0)](/(.*):(.*)/i)){const _0x5aa622=String(RegExp['$1']),_0x12fd91=String(RegExp['$2'])['toUpperCase']()[_0x36c314(0x1a5)]();let _0x3c4ae3,_0x473903,_0x2d0f78;switch(_0x12fd91){case _0x36c314(0x16f):_0x3c4ae3=_0x43fa18[_0x335d5b]!==''?Number(_0x43fa18[_0x335d5b]):0x0;break;case _0x36c314(0x1c2):_0x473903=_0x43fa18[_0x335d5b]!==''?JSON[_0x36c314(0x1fb)](_0x43fa18[_0x335d5b]):[],_0x3c4ae3=_0x473903['map'](_0x5692df=>Number(_0x5692df));break;case'EVAL':_0x3c4ae3=_0x43fa18[_0x335d5b]!==''?eval(_0x43fa18[_0x335d5b]):null;break;case'ARRAYEVAL':_0x473903=_0x43fa18[_0x335d5b]!==''?JSON[_0x36c314(0x1fb)](_0x43fa18[_0x335d5b]):[],_0x3c4ae3=_0x473903[_0x36c314(0x1cc)](_0x28fe5a=>eval(_0x28fe5a));break;case _0x36c314(0x1aa):_0x3c4ae3=_0x43fa18[_0x335d5b]!==''?JSON['parse'](_0x43fa18[_0x335d5b]):'';break;case _0x36c314(0x161):_0x473903=_0x43fa18[_0x335d5b]!==''?JSON[_0x36c314(0x1fb)](_0x43fa18[_0x335d5b]):[],_0x3c4ae3=_0x473903[_0x36c314(0x1cc)](_0x1587e5=>JSON[_0x36c314(0x1fb)](_0x1587e5));break;case _0x36c314(0x1e7):_0x3c4ae3=_0x43fa18[_0x335d5b]!==''?new Function(JSON[_0x36c314(0x1fb)](_0x43fa18[_0x335d5b])):new Function(_0x36c314(0x211));break;case _0x36c314(0x1d0):_0x473903=_0x43fa18[_0x335d5b]!==''?JSON[_0x36c314(0x1fb)](_0x43fa18[_0x335d5b]):[],_0x3c4ae3=_0x473903[_0x36c314(0x1cc)](_0x36e478=>new Function(JSON['parse'](_0x36e478)));break;case _0x36c314(0x1b3):_0x3c4ae3=_0x43fa18[_0x335d5b]!==''?String(_0x43fa18[_0x335d5b]):'';break;case'ARRAYSTR':_0x473903=_0x43fa18[_0x335d5b]!==''?JSON[_0x36c314(0x1fb)](_0x43fa18[_0x335d5b]):[],_0x3c4ae3=_0x473903[_0x36c314(0x1cc)](_0x34dfae=>String(_0x34dfae));break;case _0x36c314(0x1dc):_0x2d0f78=_0x43fa18[_0x335d5b]!==''?JSON[_0x36c314(0x1fb)](_0x43fa18[_0x335d5b]):{},_0x3c4ae3=VisuMZ[_0x36c314(0x15e)]({},_0x2d0f78);break;case _0x36c314(0x21f):_0x473903=_0x43fa18[_0x335d5b]!==''?JSON[_0x36c314(0x1fb)](_0x43fa18[_0x335d5b]):[],_0x3c4ae3=_0x473903[_0x36c314(0x1cc)](_0x3d7299=>VisuMZ[_0x36c314(0x15e)]({},JSON[_0x36c314(0x1fb)](_0x3d7299)));break;default:continue;}_0x232322[_0x5aa622]=_0x3c4ae3;}}return _0x232322;},(_0x4e956a=>{const _0x42a7ee=_0xf41b2f,_0x2608d2=_0x4e956a[_0x42a7ee(0x1e5)];for(const _0x109b11 of dependencies){if(!Imported[_0x109b11]){if('bztig'==='eOuqZ'){function _0x412fa8(){const _0x95736c=_0x42a7ee;_0x49c240[_0x95736c(0x1e4)]=[0x0,0x0],_0x51a907[_0x95736c(0x1af)]=[0x0,0x0],_0x410a6d[_0x95736c(0x19e)]=[0x0,0x0];}}else{alert(_0x42a7ee(0x1a4)[_0x42a7ee(0x18c)](_0x2608d2,_0x109b11)),SceneManager[_0x42a7ee(0x1f8)]();break;}}}const _0x1f7c29=_0x4e956a[_0x42a7ee(0x15d)];if(_0x1f7c29[_0x42a7ee(0x1e0)](/\[Version[ ](.*?)\]/i)){const _0x4fc057=Number(RegExp['$1']);if(_0x4fc057!==VisuMZ[label][_0x42a7ee(0x168)]){if('krfZE'!==_0x42a7ee(0x1b0)){function _0x103bd8(){const _0x5ab42e=_0x42a7ee;this[_0x5ab42e(0x21c)][_0x5ab42e(0x209)](_0x376bd1),this[_0x5ab42e(0x171)]['filters'][_0x5ab42e(0x209)](_0x1804f2);}}else alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x42a7ee(0x18c)](_0x2608d2,_0x4fc057)),SceneManager[_0x42a7ee(0x1f8)]();}}if(_0x1f7c29[_0x42a7ee(0x1e0)](/\[Tier[ ](\d+)\]/i)){if(_0x42a7ee(0x1b4)!==_0x42a7ee(0x1b4)){function _0x1ec229(){const _0xcc186c=_0x42a7ee;this[_0xcc186c(0x163)](),this['_shockwaveImpactFilters']=[],this[_0xcc186c(0x1c8)](),this['createZoomBlurImpactFilter']();}}else{const _0x58c8e7=Number(RegExp['$1']);if(_0x58c8e7<tier){if(_0x42a7ee(0x1b7)!==_0x42a7ee(0x1b7)){function _0x2f2da3(){const _0x25ea17=_0x42a7ee;return this[_0x25ea17(0x20c)];}}else alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x42a7ee(0x18c)](_0x2608d2,_0x58c8e7,tier)),SceneManager[_0x42a7ee(0x1f8)]();}else tier=Math[_0x42a7ee(0x1c6)](_0x58c8e7,tier);}}VisuMZ['ConvertParams'](VisuMZ[label][_0x42a7ee(0x200)],_0x4e956a['parameters']);})(pluginData),Game_BattlerBase[_0xf41b2f(0x208)]['battlerMotionTrailData']=function(){const _0x4ce5f3=_0xf41b2f;if(this['_battlerMotionTrailData']){if(_0x4ce5f3(0x1c1)!=='CBcvI')return this['_battlerMotionTrailData'];else{function _0x426e5a(){const _0x42370e=_0x4ce5f3;if(!_0x327c24[_0x42370e(0x16a)][_0x42370e(0x201)])return;const _0x23cbc6=0x2/_0x172f6a['max'](0x2,_0x2e6519),_0x3485b1=new _0x2e0617[(_0x42370e(0x16a))]['ShockwaveFilter']();_0x3485b1[_0x42370e(0x227)]=[_0x11fc85,_0x511dff],_0x3485b1[_0x42370e(0x1ef)]=_0x5a5788,_0x3485b1[_0x42370e(0x1ab)]=_0x343bd5,_0x3485b1[_0x42370e(0x184)]=0x1,_0x3485b1['radius']=-0x1,_0x3485b1[_0x42370e(0x20a)]=_0x23cbc6,this['_shockwaveImpactFilters'][_0x42370e(0x21d)](_0x3485b1),this[_0x42370e(0x171)]['filters'][_0x42370e(0x21d)](_0x3485b1);}}}return this[_0x4ce5f3(0x20c)]=this[_0x4ce5f3(0x1ba)](),this['_battlerMotionTrailData'];},Game_BattlerBase['prototype'][_0xf41b2f(0x228)]=function(){const _0x2f3395=_0xf41b2f;this[_0x2f3395(0x20c)]=this[_0x2f3395(0x1ba)]();},Game_BattlerBase[_0xf41b2f(0x208)][_0xf41b2f(0x170)]=function(_0x154e63){this['_battlerMotionTrailData']=_0x154e63;},Game_BattlerBase[_0xf41b2f(0x208)][_0xf41b2f(0x1ba)]=function(){return{'delay':0x1,'duration':0x1e,'hue':0x0,'opacityStart':0xc8,'tone':[0x0,0x0,0x0,0x0],'visible':![]};},VisuMZ[_0xf41b2f(0x22a)]['Game_Battler_onDamage']=Game_Battler['prototype'][_0xf41b2f(0x1bc)],Game_Battler['prototype']['onDamage']=function(_0x14f34b){const _0x344e94=_0xf41b2f;VisuMZ[_0x344e94(0x22a)]['Game_Battler_onDamage'][_0x344e94(0x223)](this,_0x14f34b),this[_0x344e94(0x186)](_0x14f34b);},Game_Battler[_0xf41b2f(0x208)][_0xf41b2f(0x186)]=function(_0x133f6b){const _0x2fe58e=_0xf41b2f;if(_0x133f6b<0x0)return;if(!this['isGuard']())return;const _0x2080c5=VisuMZ['ActSeqImpact'][_0x2fe58e(0x200)][_0x2fe58e(0x16e)];if(!_0x2080c5)return;if(!_0x2080c5['Enable'])return;if(!SceneManager[_0x2fe58e(0x174)]())return;const _0x5e6cec=SceneManager[_0x2fe58e(0x192)]['_spriteset'];if(!_0x5e6cec)return;if(!this[_0x2fe58e(0x189)]())return;const _0x26f230=this[_0x2fe58e(0x189)]()[_0x2fe58e(0x1d3)],_0x40a853=this[_0x2fe58e(0x189)]()[_0x2fe58e(0x20f)]-this['battler']()[_0x2fe58e(0x15c)]()/0x2,_0xff808d=_0x2080c5['Amp']||0x1,_0x56cc95=_0x2080c5[_0x2fe58e(0x21b)]||0x1,_0x2e55b0=_0x2080c5[_0x2fe58e(0x1ad)]||0x1;_0x5e6cec['setupShockwaveImpactFilter'](_0x26f230,_0x40a853,_0xff808d,_0x56cc95,_0x2e55b0);},VisuMZ[_0xf41b2f(0x22a)]['Game_Battler_performMiss']=Game_Battler[_0xf41b2f(0x208)]['performMiss'],Game_Battler['prototype'][_0xf41b2f(0x1da)]=function(){const _0x1594f9=_0xf41b2f;VisuMZ[_0x1594f9(0x22a)][_0x1594f9(0x162)]['call'](this),this['performDodgeActSeqImpact']();},VisuMZ['ActSeqImpact'][_0xf41b2f(0x188)]=Game_Battler['prototype'][_0xf41b2f(0x165)],Game_Battler['prototype'][_0xf41b2f(0x165)]=function(){const _0x1ab320=_0xf41b2f;VisuMZ[_0x1ab320(0x22a)][_0x1ab320(0x188)][_0x1ab320(0x223)](this),this[_0x1ab320(0x187)]();},Game_Battler[_0xf41b2f(0x208)][_0xf41b2f(0x187)]=function(){const _0x15e412=_0xf41b2f,_0x95afaf=VisuMZ[_0x15e412(0x22a)][_0x15e412(0x200)][_0x15e412(0x1f4)];if(!_0x95afaf)return;if(!_0x95afaf[_0x15e412(0x1bf)])return;if(!SceneManager['isSceneBattle']())return;const _0x2fe94e=SceneManager[_0x15e412(0x192)][_0x15e412(0x1b1)];if(!_0x2fe94e)return;if(!this[_0x15e412(0x189)]())return;if(this[_0x15e412(0x189)]()['_motionBlurImpactDuration']>0x0)return;const _0x34d3b2=Math[_0x15e412(0x183)](0x168),_0x3f9594=_0x95afaf[_0x15e412(0x206)]||0.1,_0x18e7b0=_0x95afaf['Duration'],_0x2a6521=_0x95afaf[_0x15e412(0x1e2)]||_0x15e412(0x199);this['battler']()[_0x15e412(0x219)](_0x34d3b2,_0x3f9594,_0x18e7b0,_0x2a6521);},VisuMZ[_0xf41b2f(0x22a)]['Sprite_Battler_createDistortionSprite']=Sprite_Battler[_0xf41b2f(0x208)][_0xf41b2f(0x1f7)],Sprite_Battler[_0xf41b2f(0x208)][_0xf41b2f(0x1f7)]=function(){const _0x5f2965=_0xf41b2f;VisuMZ[_0x5f2965(0x22a)][_0x5f2965(0x1c7)][_0x5f2965(0x223)](this),this[_0x5f2965(0x229)]();},Sprite_Battler[_0xf41b2f(0x208)][_0xf41b2f(0x229)]=function(){const _0x52235=_0xf41b2f;if(!this[_0x52235(0x21e)])return;this[_0x52235(0x21e)][_0x52235(0x16a)]=this[_0x52235(0x21e)][_0x52235(0x16a)]||[],this[_0x52235(0x1c8)]();},VisuMZ[_0xf41b2f(0x22a)][_0xf41b2f(0x16b)]=Sprite_Battler[_0xf41b2f(0x208)]['update'],Sprite_Battler['prototype'][_0xf41b2f(0x215)]=function(){const _0x5dad4b=_0xf41b2f;VisuMZ[_0x5dad4b(0x22a)][_0x5dad4b(0x16b)]['call'](this),this['updateMotionTrail'](),this[_0x5dad4b(0x1c9)]();},Sprite_Battler[_0xf41b2f(0x208)]['updateMotionTrail']=function(){const _0x35fd61=_0xf41b2f;if(this[_0x35fd61(0x221)]===Sprite_SvEnemy)return;if(!this['_battler'])return;if(!this[_0x35fd61(0x19c)][_0x35fd61(0x1e3)]())return;if(!this['_battler'][_0x35fd61(0x16c)]())return;if(!this[_0x35fd61(0x19d)])return;if(!this['_distortionSprite'])return;if(this[_0x35fd61(0x1e1)]){if(_0x35fd61(0x1be)===_0x35fd61(0x1be)){this[_0x35fd61(0x1e1)]=![];return;}else{function _0x50fba2(){const _0x406d6b=_0x35fd61,_0x3e001b=_0x5c7bcc(_0x2c6e0c['$1']);_0x3e001b<_0x3da438?(_0x44e024(_0x406d6b(0x1a0)[_0x406d6b(0x18c)](_0x33f3d2,_0x3e001b,_0x9748b7)),_0x1deb1e[_0x406d6b(0x1f8)]()):_0x2fa2cf=_0x173c32[_0x406d6b(0x1c6)](_0x3e001b,_0x1be7fd);}}}if(Imported[_0x35fd61(0x18a)]&&this[_0x35fd61(0x17c)]){}const _0x5b1408=this[_0x35fd61(0x19c)]['battlerMotionTrailData']();if(!_0x5b1408[_0x35fd61(0x217)])return;const _0x4b9802=Math[_0x35fd61(0x1c6)](0x1,_0x5b1408[_0x35fd61(0x1ca)]);if(Graphics[_0x35fd61(0x1d5)]%_0x4b9802!==0x0)return;const _0x4d8ee8=SceneManager[_0x35fd61(0x192)][_0x35fd61(0x1b1)][_0x35fd61(0x193)];if(!_0x4d8ee8){if(_0x35fd61(0x179)===_0x35fd61(0x1b9)){function _0x5c74da(){const _0x189e3b=_0x35fd61;_0x39f9b5[_0x189e3b(0x22a)][_0x189e3b(0x16b)][_0x189e3b(0x223)](this),this['updateMotionTrail'](),this[_0x189e3b(0x1c9)]();}}else return;}this[_0x35fd61(0x1e1)]=!![];const _0x1e1971=new Sprite_BattlerMotionTrail(this,_0x5b1408);_0x4d8ee8[_0x35fd61(0x1df)](_0x1e1971);},Sprite_Battler[_0xf41b2f(0x208)][_0xf41b2f(0x1c8)]=function(){const _0x4dd078=_0xf41b2f;if(!PIXI[_0x4dd078(0x16a)][_0x4dd078(0x1ce)])return;this['_motionBlurImpactDuration']=0x0,this['_motionBlurImpactWholeDuration']=0x0,this[_0x4dd078(0x1f0)]='Linear',this['_motionBlurImpactFilter']=new PIXI[(_0x4dd078(0x16a))][(_0x4dd078(0x1ce))](),this[_0x4dd078(0x180)]['velocity']['x']=0x0,this[_0x4dd078(0x180)][_0x4dd078(0x1ed)]['y']=0x0,this[_0x4dd078(0x21e)][_0x4dd078(0x16a)][_0x4dd078(0x21d)](this[_0x4dd078(0x180)]);},Sprite_Battler['prototype'][_0xf41b2f(0x219)]=function(_0x3a3874,_0x6d82ca,_0x22e0d9,_0x15d775){const _0x857cee=_0xf41b2f;if(!this['_motionBlurImpactFilter'])return;const _0x344a85=this[_0x857cee(0x180)];this[_0x857cee(0x1c4)]=_0x22e0d9,this[_0x857cee(0x1dd)]=_0x22e0d9,this[_0x857cee(0x1f0)]=_0x15d775;const _0x4620bb=this[_0x857cee(0x1e8)]()*_0x6d82ca,_0x210f14=_0x4620bb*Math[_0x857cee(0x204)](_0x3a3874*Math['PI']/0xb4),_0x2a195f=-_0x4620bb*Math[_0x857cee(0x167)](_0x3a3874*Math['PI']/0xb4);_0x344a85['velocity']['x']=_0x210f14,_0x344a85['velocity']['y']=_0x2a195f;},Sprite_Battler[_0xf41b2f(0x208)][_0xf41b2f(0x1c9)]=function(){const _0x417151=_0xf41b2f;if(!this[_0x417151(0x180)])return;if(this[_0x417151(0x1c4)]<=0x0)return;const _0x108131=this[_0x417151(0x180)],_0x36ebd4=this[_0x417151(0x1c4)]||0x0,_0x5accfa=this['_motionBlurImpactWholeDuration']||_0x36ebd4,_0x230a74=0x0,_0x42bbba=this[_0x417151(0x1f0)];_0x108131['velocity']['x']=VisuMZ[_0x417151(0x22a)]['applyEasing'](_0x108131[_0x417151(0x1ed)]['x'],_0x230a74,_0x36ebd4,_0x5accfa,_0x42bbba),_0x108131[_0x417151(0x1ed)]['y']=VisuMZ[_0x417151(0x22a)][_0x417151(0x224)](_0x108131[_0x417151(0x1ed)]['y'],_0x230a74,_0x36ebd4,_0x5accfa,_0x42bbba),this[_0x417151(0x1c4)]--;if(this[_0x417151(0x1c4)]<=0x0){if(_0x417151(0x197)==='ZPunQ'){function _0x89a2b9(){const _0xe9ea94=_0x417151;if(this[_0xe9ea94(0x20c)])return this['_battlerMotionTrailData'];return this[_0xe9ea94(0x20c)]=this['createDefaultBattlerMotionTrailData'](),this[_0xe9ea94(0x20c)];}}else _0x108131[_0x417151(0x1ed)]['x']=0x0,_0x108131[_0x417151(0x1ed)]['y']=0x0;}},VisuMZ[_0xf41b2f(0x22a)][_0xf41b2f(0x218)]=Sprite_Damage['prototype'][_0xf41b2f(0x1a9)],Sprite_Damage[_0xf41b2f(0x208)][_0xf41b2f(0x1a9)]=function(){const _0x3d397b=_0xf41b2f;VisuMZ[_0x3d397b(0x22a)][_0x3d397b(0x218)]['call'](this),this['setupCriticalEffectActSeqImpact']();},Sprite_Damage[_0xf41b2f(0x208)][_0xf41b2f(0x1a6)]=function(){const _0x1e63ac=_0xf41b2f,_0x2ef036=VisuMZ[_0x1e63ac(0x22a)][_0x1e63ac(0x200)][_0x1e63ac(0x1f1)];if(!_0x2ef036)return;if(!_0x2ef036['Enable'])return;const _0x2e8635=SceneManager[_0x1e63ac(0x192)]['_spriteset'];if(!_0x2e8635)return;if(_0x2e8635[_0x1e63ac(0x1a8)]>0x0)return;const _0x5e26f9=_0x2ef036['Intensity']||0x1,_0x958efb=_0x2ef036['Duration']||0x1,_0xdd2602=_0x2ef036[_0x1e63ac(0x1e2)]||_0x1e63ac(0x1bd);_0x2e8635['setupRgbSplitImpactFilter'](_0x5e26f9,_0x958efb,_0xdd2602);};function Sprite_BattlerMotionTrail(){const _0x48babb=_0xf41b2f;this[_0x48babb(0x1a3)](...arguments);}Sprite_BattlerMotionTrail['prototype']=Object[_0xf41b2f(0x1a7)](Sprite[_0xf41b2f(0x208)]),Sprite_BattlerMotionTrail[_0xf41b2f(0x208)][_0xf41b2f(0x221)]=Sprite_BattlerMotionTrail,Sprite_BattlerMotionTrail['prototype'][_0xf41b2f(0x1a3)]=function(_0x44f157,_0x23c24c){const _0xcf15f4=_0xf41b2f;this[_0xcf15f4(0x18d)]=_0x44f157,this[_0xcf15f4(0x17d)]=_0x23c24c,Sprite['prototype'][_0xcf15f4(0x1a3)][_0xcf15f4(0x223)](this),this[_0xcf15f4(0x18e)](),this[_0xcf15f4(0x1d9)]();},Sprite_BattlerMotionTrail[_0xf41b2f(0x208)][_0xf41b2f(0x18e)]=function(){const _0x4b902e=_0xf41b2f,_0x3cd4e7=this[_0x4b902e(0x18d)]['_distortionSprite'];this[_0x4b902e(0x21e)]=new Sprite(),this[_0x4b902e(0x1df)](this['_distortionSprite']),this['matchSpriteProperties'](this['_distortionSprite'],_0x3cd4e7,!![]);},Sprite_BattlerMotionTrail['prototype']['matchSpriteProperties']=function(_0xa3748b,_0x483836,_0x4d0361){const _0x26bb6f=_0xf41b2f;_0xa3748b['bitmap']=_0x483836['bitmap'];const _0x185cc4=_0x483836['_frame'];if(_0x185cc4){if(_0x26bb6f(0x195)!==_0x26bb6f(0x195)){function _0x1d03d2(){const _0x5d4d1e=_0x26bb6f;_0x400fe3(_0x5d4d1e(0x172)[_0x5d4d1e(0x18c)](_0x2d7b28,_0x16164a)),_0x42bb50[_0x5d4d1e(0x1f8)]();}}else _0xa3748b[_0x26bb6f(0x175)](_0x185cc4['x'],_0x185cc4['y'],_0x185cc4[_0x26bb6f(0x1f5)],_0x185cc4['height']);}_0xa3748b[_0x26bb6f(0x1de)]['x']=_0x483836['anchor']['x'],_0xa3748b['anchor']['y']=_0x483836[_0x26bb6f(0x1de)]['y'],_0xa3748b[_0x26bb6f(0x1b8)]['x']=_0x483836['scale']['x'],_0xa3748b[_0x26bb6f(0x1b8)]['y']=_0x483836[_0x26bb6f(0x1b8)]['y'],_0xa3748b[_0x26bb6f(0x1b5)]=_0x483836[_0x26bb6f(0x1b5)],_0xa3748b[_0x26bb6f(0x18b)]['x']=_0x483836[_0x26bb6f(0x18b)]['x'],_0xa3748b[_0x26bb6f(0x18b)]['y']=_0x483836[_0x26bb6f(0x18b)]['y'],_0xa3748b['x']=_0x483836['x'],_0xa3748b['y']=_0x483836['y'],_0xa3748b[_0x26bb6f(0x225)](_0x483836['_hue']);if(_0x4d0361)for(const _0x1f97db of _0x483836[_0x26bb6f(0x207)]){if(!_0x1f97db)continue;if(_0x1f97db[_0x26bb6f(0x164)])this[_0x26bb6f(0x1fc)](_0xa3748b,_0x1f97db);else{if(_0x26bb6f(0x19f)===_0x26bb6f(0x19f)){const _0x45ccbd=new Sprite();_0xa3748b[_0x26bb6f(0x1df)](_0x45ccbd),this[_0x26bb6f(0x1e6)](_0x45ccbd,_0x1f97db,!![]);}else{function _0x36fe61(){const _0x3b2c91=_0x26bb6f;this[_0x3b2c91(0x193)][_0x3b2c91(0x1df)](_0x1e75a1);}}}}},Sprite_BattlerMotionTrail[_0xf41b2f(0x208)][_0xf41b2f(0x1fc)]=function(_0x3ff452,_0x2fded2){const _0x52189c=_0xf41b2f,_0x347db3=this[_0x52189c(0x18d)][_0x52189c(0x19c)][_0x52189c(0x169)]();this['_dragonbones']=DragonbonesManager[_0x52189c(0x181)](_0x347db3[_0x52189c(0x189)]),_0x3ff452[_0x52189c(0x1df)](this[_0x52189c(0x17c)]);const _0x272fbf=_0x2fded2['animation'][_0x52189c(0x226)],_0x369a49=_0x2fded2[_0x52189c(0x178)][_0x52189c(0x1f9)][_0x52189c(0x214)];this['_dragonbones'][_0x52189c(0x178)][_0x52189c(0x1d2)](_0x272fbf,_0x369a49),this[_0x52189c(0x17c)]['x']=_0x347db3[_0x52189c(0x1a2)],this[_0x52189c(0x17c)]['y']=_0x347db3[_0x52189c(0x1ec)],this['_dragonbones'][_0x52189c(0x1b8)]['x']=_0x347db3[_0x52189c(0x196)],this[_0x52189c(0x17c)]['scale']['y']=_0x347db3[_0x52189c(0x1ae)],_0x3ff452[_0x52189c(0x1fd)]=0x0,_0x3ff452['nextOpacity']=0x2,_0x3ff452['update']();},Sprite_BattlerMotionTrail[_0xf41b2f(0x208)][_0xf41b2f(0x1d9)]=function(){const _0x434d35=_0xf41b2f,_0xf35294=this[_0x434d35(0x18d)],_0x2e67d4=this[_0x434d35(0x17d)];this[_0x434d35(0x20e)]=_0x2e67d4['duration'],this['opacity']=_0x2e67d4['opacityStart'],this[_0x434d35(0x1e6)](this,_0xf35294),this[_0x434d35(0x1d3)]=_0xf35294[_0x434d35(0x1d3)],this[_0x434d35(0x20f)]=_0xf35294[_0x434d35(0x20f)],this['setHue'](_0x2e67d4[_0x434d35(0x1e9)]),this['setColorTone'](_0x2e67d4[_0x434d35(0x190)]);},Sprite_BattlerMotionTrail['prototype'][_0xf41b2f(0x215)]=function(){const _0x511d53=_0xf41b2f;Sprite[_0x511d53(0x208)][_0x511d53(0x215)]['call'](this),this['updateNextOpacities'](this[_0x511d53(0x207)]),this[_0x511d53(0x191)]();},Sprite_BattlerMotionTrail[_0xf41b2f(0x208)][_0xf41b2f(0x160)]=function(_0x4563dc){const _0x523c79=_0xf41b2f;if(!_0x4563dc)return;for(const _0x3b82c9 of _0x4563dc){if(_0x523c79(0x1db)!==_0x523c79(0x1a1)){if(!_0x3b82c9)continue;if(_0x3b82c9[_0x523c79(0x1b6)]){if(_0x523c79(0x1b2)!=='TaMlb'){function _0x496a87(){const _0x469881=_0x523c79;if(!this[_0x469881(0x1fe)])return;if(this['_rgbSplitImpactDuration']<=0x0)return;const _0x5eb162=this[_0x469881(0x1fe)],_0x34610d=this[_0x469881(0x1a8)]||0x0,_0x4730dd=this[_0x469881(0x182)]||_0x34610d,_0x7b23a1=0x0,_0x48f34b=this[_0x469881(0x1d7)];_0x5eb162['red'][0x0]=_0x4e0472[_0x469881(0x22a)][_0x469881(0x224)](_0x5eb162[_0x469881(0x1e4)][0x0],_0x7b23a1,_0x34610d,_0x4730dd,_0x48f34b),_0x5eb162['red'][0x1]=_0x36b365[_0x469881(0x22a)]['applyEasing'](_0x5eb162[_0x469881(0x1e4)][0x1],_0x7b23a1,_0x34610d,_0x4730dd,_0x48f34b),_0x5eb162[_0x469881(0x1af)][0x0]=_0x474574[_0x469881(0x22a)]['applyEasing'](_0x5eb162['green'][0x0],_0x7b23a1,_0x34610d,_0x4730dd,_0x48f34b),_0x5eb162[_0x469881(0x1af)][0x1]=_0x4d5bd1[_0x469881(0x22a)][_0x469881(0x224)](_0x5eb162[_0x469881(0x1af)][0x1],_0x7b23a1,_0x34610d,_0x4730dd,_0x48f34b),_0x5eb162[_0x469881(0x19e)][0x0]=_0x2272f0['ActSeqImpact'][_0x469881(0x224)](_0x5eb162[_0x469881(0x19e)][0x0],_0x7b23a1,_0x34610d,_0x4730dd,_0x48f34b),_0x5eb162[_0x469881(0x19e)][0x1]=_0x4e9068[_0x469881(0x22a)]['applyEasing'](_0x5eb162[_0x469881(0x19e)][0x1],_0x7b23a1,_0x34610d,_0x4730dd,_0x48f34b),this[_0x469881(0x1a8)]--,this[_0x469881(0x1a8)]<=0x0&&(_0x5eb162[_0x469881(0x1e4)]=[0x0,0x0],_0x5eb162[_0x469881(0x1af)]=[0x0,0x0],_0x5eb162[_0x469881(0x19e)]=[0x0,0x0]);}}else _0x3b82c9['nextOpacity']--,_0x3b82c9[_0x523c79(0x1b6)]<=0x0&&(_0x3b82c9[_0x523c79(0x1fd)]=0xff,_0x3b82c9[_0x523c79(0x1b6)]=undefined);}this['updateNextOpacities'](_0x3b82c9[_0x523c79(0x207)]);}else{function _0x109cb0(){const _0x37b366=_0x523c79;this[_0x37b366(0x193)]['scale']['x']=this[_0x37b366(0x1f6)]['scale']['x'],this[_0x37b366(0x193)][_0x37b366(0x1b8)]['y']=this[_0x37b366(0x1f6)][_0x37b366(0x1b8)]['y'],this[_0x37b366(0x193)]['x']=this[_0x37b366(0x1f6)]['x'],this[_0x37b366(0x193)]['y']=this[_0x37b366(0x1f6)]['y'];}}}},Sprite_BattlerMotionTrail['prototype'][_0xf41b2f(0x191)]=function(){const _0x2f0d62=_0xf41b2f;if(this[_0x2f0d62(0x20e)]>0x0){const _0x259797=this[_0x2f0d62(0x20e)];this[_0x2f0d62(0x1fd)]=(this['opacity']*(_0x259797-0x1)+0x0)/_0x259797,this[_0x2f0d62(0x20e)]--,this[_0x2f0d62(0x20e)]<=0x0&&this[_0x2f0d62(0x213)]();}},Sprite_BattlerMotionTrail[_0xf41b2f(0x208)]['disposeSprite']=function(){const _0x4cf152=_0xf41b2f;this[_0x4cf152(0x19d)][_0x4cf152(0x1d6)](this);if(this[_0x4cf152(0x17c)]){if(_0x4cf152(0x202)!==_0x4cf152(0x203))this[_0x4cf152(0x17c)][_0x4cf152(0x210)](),this[_0x4cf152(0x17c)]=null;else{function _0x4905e6(){const _0x323bc9=_0x4cf152,_0x4acbd3=_0x5c760e[_0x323bc9(0x1f2)]((_0x5eb2d7-_0x14337d)/_0x406b31,_0x25308a||_0x323bc9(0x199)),_0x416801=_0x312d15[_0x323bc9(0x1f2)]((_0x3a44e1-_0x1190fc+0x1)/_0x290d53,_0x2919da||_0x323bc9(0x199)),_0x9ad26c=(_0x6f34b6-_0x25abcf*_0x4acbd3)/(0x1-_0x4acbd3);return _0x9ad26c+(_0x427ed1-_0x9ad26c)*_0x416801;}}}const _0x32cce1=SceneManager[_0x4cf152(0x192)][_0x4cf152(0x1b1)];if(_0x32cce1&&!_0x32cce1[_0x4cf152(0x1ea)](this['_sourceSprite'])){if(_0x4cf152(0x15f)!==_0x4cf152(0x1fa)){const _0x276487=_0x32cce1['_battlerContainer'];_0x276487[_0x4cf152(0x1df)](this['_sourceSprite']),_0x32cce1[_0x4cf152(0x1cf)]();}else{function _0x192456(){const _0x4ece0b=_0x4cf152;this['_sourceSprite']=_0x12094a,this['_sourceData']=_0x26ddd3,_0x51ad14['prototype'][_0x4ece0b(0x1a3)][_0x4ece0b(0x223)](this),this[_0x4ece0b(0x18e)](),this[_0x4ece0b(0x1d9)]();}}}},VisuMZ['ActSeqImpact']['Spriteset_Base_createBaseFilters']=Spriteset_Base[_0xf41b2f(0x208)][_0xf41b2f(0x20d)],Spriteset_Base[_0xf41b2f(0x208)]['createBaseFilters']=function(){const _0x51508e=_0xf41b2f;VisuMZ['ActSeqImpact'][_0x51508e(0x1c5)][_0x51508e(0x223)](this),this[_0x51508e(0x212)]();},VisuMZ[_0xf41b2f(0x22a)]['Spriteset_Base_updateBaseFilters']=Spriteset_Base[_0xf41b2f(0x208)][_0xf41b2f(0x18f)],Spriteset_Base[_0xf41b2f(0x208)][_0xf41b2f(0x18f)]=function(){const _0xee1a88=_0xf41b2f;VisuMZ['ActSeqImpact'][_0xee1a88(0x198)][_0xee1a88(0x223)](this),this['updateActSeqImpactBaseFilters']();},Spriteset_Base[_0xf41b2f(0x208)]['createActSeqImpactBaseFilters']=function(){const _0x2ab23e=_0xf41b2f;this[_0x2ab23e(0x163)](),this['_shockwaveImpactFilters']=[],this['createMotionBlurImpactFilter'](),this[_0x2ab23e(0x17b)]();},Spriteset_Base['prototype'][_0xf41b2f(0x1cb)]=function(){const _0x53852=_0xf41b2f;this[_0x53852(0x185)](),this[_0x53852(0x194)](),this[_0x53852(0x1c9)](),this['updateZoomBlurImpactFilter']();},VisuMZ[_0xf41b2f(0x22a)][_0xf41b2f(0x224)]=function(_0x1e00a3,_0x27371f,_0xe87b1b,_0x24741e,_0x4f8971){const _0x52a75c=_0xf41b2f,_0x6c7b3a=VisuMZ[_0x52a75c(0x1f2)]((_0x24741e-_0xe87b1b)/_0x24741e,_0x4f8971||_0x52a75c(0x199)),_0x5dc923=VisuMZ[_0x52a75c(0x1f2)]((_0x24741e-_0xe87b1b+0x1)/_0x24741e,_0x4f8971||'Linear'),_0x1b9c84=(_0x1e00a3-_0x27371f*_0x6c7b3a)/(0x1-_0x6c7b3a);return _0x1b9c84+(_0x27371f-_0x1b9c84)*_0x5dc923;},Spriteset_Base[_0xf41b2f(0x208)][_0xf41b2f(0x163)]=function(){const _0x3c4fe8=_0xf41b2f;if(!PIXI[_0x3c4fe8(0x16a)]['RGBSplitFilter'])return;if(this['_rgbSplitImpactFilter'])return;this[_0x3c4fe8(0x1a8)]=0x0,this['_rgbSplitImpactWholeDuration']=0x0,this[_0x3c4fe8(0x1d7)]=_0x3c4fe8(0x199),this['_rgbSplitImpactFilter']=new PIXI[(_0x3c4fe8(0x16a))][(_0x3c4fe8(0x21a))](),this[_0x3c4fe8(0x1fe)]['red']=[0x0,0x0],this[_0x3c4fe8(0x1fe)][_0x3c4fe8(0x1af)]=[0x0,0x0],this['_rgbSplitImpactFilter'][_0x3c4fe8(0x19e)]=[0x0,0x0],this[_0x3c4fe8(0x171)][_0x3c4fe8(0x16a)][_0x3c4fe8(0x21d)](this['_rgbSplitImpactFilter']);},Spriteset_Base['prototype']['setupRgbSplitImpactFilter']=function(_0x29d802,_0xeaedc8,_0x209b1e){const _0x3474d1=_0xf41b2f;if(!this[_0x3474d1(0x1fe)])return;const _0x167b0a=this[_0x3474d1(0x1fe)],_0x367e2c=_0x29d802*0x2;this[_0x3474d1(0x1a8)]=_0xeaedc8,this[_0x3474d1(0x182)]=_0xeaedc8,this['_rgbSplitImpactEasing']=_0x209b1e||_0x3474d1(0x199),_0x167b0a[_0x3474d1(0x1e4)]=[Math[_0x3474d1(0x183)](_0x367e2c)-_0x29d802,Math[_0x3474d1(0x183)](_0x367e2c)-_0x29d802],_0x167b0a[_0x3474d1(0x1af)]=[Math['randomInt'](_0x367e2c)-_0x29d802,Math[_0x3474d1(0x183)](_0x367e2c)-_0x29d802],_0x167b0a[_0x3474d1(0x19e)]=[Math['randomInt'](_0x367e2c)-_0x29d802,Math[_0x3474d1(0x183)](_0x367e2c)-_0x29d802];},Spriteset_Base[_0xf41b2f(0x208)][_0xf41b2f(0x185)]=function(){const _0x1987cf=_0xf41b2f;if(!this[_0x1987cf(0x1fe)])return;if(this[_0x1987cf(0x1a8)]<=0x0)return;const _0x2ae6fc=this[_0x1987cf(0x1fe)],_0x45855a=this[_0x1987cf(0x1a8)]||0x0,_0x21eab2=this[_0x1987cf(0x182)]||_0x45855a,_0x4f8ad4=0x0,_0x411234=this[_0x1987cf(0x1d7)];_0x2ae6fc[_0x1987cf(0x1e4)][0x0]=VisuMZ['ActSeqImpact'][_0x1987cf(0x224)](_0x2ae6fc[_0x1987cf(0x1e4)][0x0],_0x4f8ad4,_0x45855a,_0x21eab2,_0x411234),_0x2ae6fc[_0x1987cf(0x1e4)][0x1]=VisuMZ[_0x1987cf(0x22a)][_0x1987cf(0x224)](_0x2ae6fc[_0x1987cf(0x1e4)][0x1],_0x4f8ad4,_0x45855a,_0x21eab2,_0x411234),_0x2ae6fc[_0x1987cf(0x1af)][0x0]=VisuMZ[_0x1987cf(0x22a)][_0x1987cf(0x224)](_0x2ae6fc['green'][0x0],_0x4f8ad4,_0x45855a,_0x21eab2,_0x411234),_0x2ae6fc[_0x1987cf(0x1af)][0x1]=VisuMZ[_0x1987cf(0x22a)][_0x1987cf(0x224)](_0x2ae6fc[_0x1987cf(0x1af)][0x1],_0x4f8ad4,_0x45855a,_0x21eab2,_0x411234),_0x2ae6fc['blue'][0x0]=VisuMZ[_0x1987cf(0x22a)]['applyEasing'](_0x2ae6fc[_0x1987cf(0x19e)][0x0],_0x4f8ad4,_0x45855a,_0x21eab2,_0x411234),_0x2ae6fc[_0x1987cf(0x19e)][0x1]=VisuMZ[_0x1987cf(0x22a)][_0x1987cf(0x224)](_0x2ae6fc['blue'][0x1],_0x4f8ad4,_0x45855a,_0x21eab2,_0x411234),this['_rgbSplitImpactDuration']--,this['_rgbSplitImpactDuration']<=0x0&&(_0x2ae6fc['red']=[0x0,0x0],_0x2ae6fc[_0x1987cf(0x1af)]=[0x0,0x0],_0x2ae6fc[_0x1987cf(0x19e)]=[0x0,0x0]);},Spriteset_Base[_0xf41b2f(0x208)][_0xf41b2f(0x1bb)]=function(_0x25e14c,_0x1961a9,_0x363f09,_0x2ad562,_0x305312){const _0x566953=_0xf41b2f;if(!PIXI['filters']['ShockwaveFilter'])return;const _0x5ddbfb=0x2/Math[_0x566953(0x1c6)](0x2,_0x305312),_0x37d536=new PIXI['filters'][(_0x566953(0x201))]();_0x37d536[_0x566953(0x227)]=[_0x25e14c,_0x1961a9],_0x37d536['amplitude']=_0x363f09,_0x37d536[_0x566953(0x1ab)]=_0x2ad562,_0x37d536[_0x566953(0x184)]=0x1,_0x37d536['radius']=-0x1,_0x37d536['timeSpeed']=_0x5ddbfb,this[_0x566953(0x21c)][_0x566953(0x21d)](_0x37d536),this[_0x566953(0x171)][_0x566953(0x16a)][_0x566953(0x21d)](_0x37d536);},Spriteset_Base[_0xf41b2f(0x208)]['updateShockwaveImpactFilters']=function(){const _0x2fa7e7=_0xf41b2f;if(!this[_0x2fa7e7(0x21c)])return;if(this[_0x2fa7e7(0x21c)][_0x2fa7e7(0x1f3)]<=0x0)return;for(const _0x50bd4d of this[_0x2fa7e7(0x21c)]){if(!_0x50bd4d)continue;_0x50bd4d[_0x2fa7e7(0x1d1)]+=_0x50bd4d[_0x2fa7e7(0x20a)],_0x50bd4d[_0x2fa7e7(0x1d1)]>=0x2&&(this[_0x2fa7e7(0x21c)][_0x2fa7e7(0x209)](_0x50bd4d),this[_0x2fa7e7(0x171)]['filters'][_0x2fa7e7(0x209)](_0x50bd4d));}},Spriteset_Base['prototype'][_0xf41b2f(0x1c8)]=function(){const _0x5afa91=_0xf41b2f;if(!PIXI['filters'][_0x5afa91(0x1ce)])return;this['_motionBlurImpactDuration']=0x0,this[_0x5afa91(0x1dd)]=0x0,this[_0x5afa91(0x1f0)]=_0x5afa91(0x199),this['_motionBlurImpactFilter']=new PIXI['filters'][(_0x5afa91(0x1ce))](),this['_motionBlurImpactFilter'][_0x5afa91(0x1ed)]['x']=0x0,this['_motionBlurImpactFilter'][_0x5afa91(0x1ed)]['y']=0x0,this['_baseSprite'][_0x5afa91(0x16a)][_0x5afa91(0x21d)](this['_motionBlurImpactFilter']);},Spriteset_Base[_0xf41b2f(0x208)][_0xf41b2f(0x219)]=function(_0x3bbc80,_0x2954d2,_0x4c4171,_0x5f4b10){const _0x19f664=_0xf41b2f;if(!this[_0x19f664(0x180)])return;const _0xcc8f79=this[_0x19f664(0x180)];this[_0x19f664(0x1c4)]=_0x4c4171,this[_0x19f664(0x1dd)]=_0x4c4171,this[_0x19f664(0x1f0)]=_0x5f4b10;const _0x467062=Math[_0x19f664(0x1c6)](this[_0x19f664(0x1f5)],this[_0x19f664(0x19b)])*_0x2954d2,_0x3287e6=_0x467062*Math[_0x19f664(0x204)](_0x3bbc80*Math['PI']/0xb4),_0x1d3fa7=-_0x467062*Math[_0x19f664(0x167)](_0x3bbc80*Math['PI']/0xb4);_0xcc8f79['velocity']['x']=_0x3287e6,_0xcc8f79[_0x19f664(0x1ed)]['y']=_0x1d3fa7;},Spriteset_Base[_0xf41b2f(0x208)][_0xf41b2f(0x1c9)]=function(){const _0x14a365=_0xf41b2f;if(!this[_0x14a365(0x180)])return;if(this[_0x14a365(0x1c4)]<=0x0)return;const _0x51830c=this['_motionBlurImpactFilter'],_0x4a71e2=this[_0x14a365(0x1c4)]||0x0,_0x152ea0=this[_0x14a365(0x1dd)]||_0x4a71e2,_0x5dd1bd=0x0,_0x3e16b4=this[_0x14a365(0x1f0)];_0x51830c[_0x14a365(0x1ed)]['x']=VisuMZ[_0x14a365(0x22a)][_0x14a365(0x224)](_0x51830c['velocity']['x'],_0x5dd1bd,_0x4a71e2,_0x152ea0,_0x3e16b4),_0x51830c[_0x14a365(0x1ed)]['y']=VisuMZ[_0x14a365(0x22a)][_0x14a365(0x224)](_0x51830c[_0x14a365(0x1ed)]['y'],_0x5dd1bd,_0x4a71e2,_0x152ea0,_0x3e16b4),this['_motionBlurImpactDuration']--;if(this[_0x14a365(0x1c4)]<=0x0){if(_0x14a365(0x1d4)==='hqZwn')_0x51830c[_0x14a365(0x1ed)]['x']=0x0,_0x51830c[_0x14a365(0x1ed)]['y']=0x0;else{function _0x3aa079(){const _0x37accb=_0x14a365,_0x40fd3f=_0x2e4f33[_0x37accb(0x1f6)];_0x40fd3f[_0x37accb(0x1df)](this[_0x37accb(0x18d)]),_0x52ad95['updateBattlerContainer']();}}}},Spriteset_Base[_0xf41b2f(0x208)]['createZoomBlurImpactFilter']=function(){const _0x226816=_0xf41b2f;if(!PIXI['filters'][_0x226816(0x173)])return;this['_zoomBlurImpactDuration']=0x0,this['_zoomBlurImpactWholeDuration']=0x0,this[_0x226816(0x17a)]=_0x226816(0x199),this[_0x226816(0x177)]=new PIXI[(_0x226816(0x16a))][(_0x226816(0x173))](),this['_zoomBlurImpactFilter'][_0x226816(0x1c0)]=0x0,this[_0x226816(0x177)][_0x226816(0x227)]['x']=Graphics[_0x226816(0x1f5)]/0x2,this[_0x226816(0x177)][_0x226816(0x227)]['y']=Graphics[_0x226816(0x19b)]/0x2,this['_zoomBlurImpactFilter'][_0x226816(0x19a)]=0x60,this[_0x226816(0x171)][_0x226816(0x16a)][_0x226816(0x21d)](this[_0x226816(0x177)]);},Spriteset_Base[_0xf41b2f(0x208)]['setupZoomBlurImpactFilter']=function(_0x1fd0ab,_0x37a54a,_0x3b7191,_0x23a254,_0x211f81,_0x4f634c){const _0x2ca0b1=_0xf41b2f;if(!this[_0x2ca0b1(0x177)])return;const _0x2c84af=this[_0x2ca0b1(0x177)];this[_0x2ca0b1(0x1cd)]=_0x211f81,this[_0x2ca0b1(0x20b)]=_0x211f81,this[_0x2ca0b1(0x17a)]=_0x4f634c,_0x2c84af[_0x2ca0b1(0x1c0)]=_0x1fd0ab,_0x2c84af[_0x2ca0b1(0x227)]['x']=_0x37a54a,_0x2c84af[_0x2ca0b1(0x227)]['y']=_0x3b7191,_0x2c84af[_0x2ca0b1(0x19a)]=_0x23a254;},Spriteset_Base[_0xf41b2f(0x208)]['updateZoomBlurImpactFilter']=function(){const _0x300724=_0xf41b2f;if(!this[_0x300724(0x177)])return;if(this[_0x300724(0x1cd)]<=0x0)return;const _0x302ca3=this[_0x300724(0x177)],_0x26ce92=this[_0x300724(0x1cd)]||0x0,_0x490b7b=this[_0x300724(0x20b)]||_0x26ce92,_0x2600c4=0x0,_0x33420d=this[_0x300724(0x17a)];_0x302ca3['strength']=VisuMZ[_0x300724(0x22a)][_0x300724(0x224)](_0x302ca3[_0x300724(0x1c0)],_0x2600c4,_0x26ce92,_0x490b7b,_0x33420d),this[_0x300724(0x1cd)]--,this[_0x300724(0x1cd)]<=0x0&&(_0x302ca3[_0x300724(0x1c0)]=0x0);},VisuMZ[_0xf41b2f(0x22a)]['Spriteset_Battle_createBattleFieldContainer']=Spriteset_Battle[_0xf41b2f(0x208)][_0xf41b2f(0x1c3)],Spriteset_Battle[_0xf41b2f(0x208)]['createBattleFieldContainer']=function(){const _0x588ee6=_0xf41b2f;VisuMZ[_0x588ee6(0x22a)][_0x588ee6(0x220)][_0x588ee6(0x223)](this),this[_0x588ee6(0x193)]=new Sprite(),this['_battleField'][_0x588ee6(0x1df)](this[_0x588ee6(0x193)]);if(this[_0x588ee6(0x166)]){if(_0x588ee6(0x176)===_0x588ee6(0x176))this[_0x588ee6(0x1ee)]['addChild'](this['_projectilesContainer']);else{function _0x5eae1f(){const _0x6ba5c3=_0x588ee6;if(!this[_0x6ba5c3(0x180)])return;if(this[_0x6ba5c3(0x1c4)]<=0x0)return;const _0x1108dc=this[_0x6ba5c3(0x180)],_0x396bf0=this['_motionBlurImpactDuration']||0x0,_0x187cd1=this[_0x6ba5c3(0x1dd)]||_0x396bf0,_0x31dd6c=0x0,_0xb0820a=this['_motionBlurImpactEasing'];_0x1108dc['velocity']['x']=_0x56df3a['ActSeqImpact']['applyEasing'](_0x1108dc['velocity']['x'],_0x31dd6c,_0x396bf0,_0x187cd1,_0xb0820a),_0x1108dc['velocity']['y']=_0x3f92b3[_0x6ba5c3(0x22a)]['applyEasing'](_0x1108dc['velocity']['y'],_0x31dd6c,_0x396bf0,_0x187cd1,_0xb0820a),this[_0x6ba5c3(0x1c4)]--,this[_0x6ba5c3(0x1c4)]<=0x0&&(_0x1108dc[_0x6ba5c3(0x1ed)]['x']=0x0,_0x1108dc[_0x6ba5c3(0x1ed)]['y']=0x0);}}}},VisuMZ[_0xf41b2f(0x22a)]['Spriteset_Battle_adjustFlippedBattlefield']=Spriteset_Battle[_0xf41b2f(0x208)][_0xf41b2f(0x16d)],Spriteset_Battle[_0xf41b2f(0x208)][_0xf41b2f(0x16d)]=function(){const _0xaddfb2=_0xf41b2f;VisuMZ[_0xaddfb2(0x22a)][_0xaddfb2(0x1ff)]['call'](this);if(this['_motionTrailContainer']&&this['_battlerContainer']){if('pYDPE'===_0xaddfb2(0x216))this[_0xaddfb2(0x193)][_0xaddfb2(0x1b8)]['x']=this['_battlerContainer'][_0xaddfb2(0x1b8)]['x'],this['_motionTrailContainer']['scale']['y']=this[_0xaddfb2(0x1f6)][_0xaddfb2(0x1b8)]['y'],this['_motionTrailContainer']['x']=this['_battlerContainer']['x'],this[_0xaddfb2(0x193)]['y']=this['_battlerContainer']['y'];else{function _0x294ebf(){const _0x5b461e=_0xaddfb2;this[_0x5b461e(0x1fc)](_0x27956d,_0x37a32d);}}}},VisuMZ['ActSeqImpact'][_0xf41b2f(0x17f)]=Spriteset_Battle[_0xf41b2f(0x208)]['updateBattlerContainer'],Spriteset_Battle[_0xf41b2f(0x208)][_0xf41b2f(0x1cf)]=function(){const _0x4897ac=_0xf41b2f;VisuMZ[_0x4897ac(0x22a)]['Spriteset_Battle_updateBattlerContainer'][_0x4897ac(0x223)](this),this[_0x4897ac(0x1ac)](),this[_0x4897ac(0x1eb)]();},Spriteset_Battle[_0xf41b2f(0x208)][_0xf41b2f(0x1ac)]=function(){const _0x521fa2=_0xf41b2f;for(const _0xa5a246 of this[_0x521fa2(0x1f6)][_0x521fa2(0x207)]){if(!_0xa5a246)continue;this[_0x521fa2(0x1ea)](_0xa5a246)&&this[_0x521fa2(0x193)][_0x521fa2(0x1df)](_0xa5a246);}},Spriteset_Battle[_0xf41b2f(0x208)][_0xf41b2f(0x1ea)]=function(_0x495bd5){const _0x567d86=_0xf41b2f;if(!this[_0x567d86(0x193)])return![];return this[_0x567d86(0x193)][_0x567d86(0x207)][_0x567d86(0x205)](_0x1440e8=>_0x1440e8['_sourceSprite']===_0x495bd5);},Spriteset_Battle[_0xf41b2f(0x208)]['sortMotionTrailBattlers']=function(){const _0x170f93=_0xf41b2f;if(!this[_0x170f93(0x193)])return![];const _0x253bd5=this[_0x170f93(0x193)][_0x170f93(0x207)]['filter'](_0x46f8a6=>_0x46f8a6['constructor']!==Sprite_BattlerMotionTrail);for(const _0x4d4fd2 of _0x253bd5){this[_0x170f93(0x193)][_0x170f93(0x1df)](_0x4d4fd2);}};