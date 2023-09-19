//=============================================================================
// VisuStella MZ - Weakness Popups
// VisuMZ_4_WeaknessPopups.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_WeaknessPopups = true;

var VisuMZ = VisuMZ || {};
VisuMZ.WeaknessPopups = VisuMZ.WeaknessPopups || {};
VisuMZ.WeaknessPopups.version = 1.02;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.02] [WeaknessPopups]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Weakness_Popups_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * When striking enemies with elemental attacks, it's difficult for the player
 * to know at first glance if he or she has hit a weakness or resistance,
 * especially if they are unfamiliar with how much damage the enemy should take
 * normally. This plugin creates popups that appear upon being hit at various
 * elemental rates, from 200% to 101% for Weaknesses, 99% to 1% for resistance,
 * 0% for immunity, and under that for absorption.
 * 
 * Critical hits also gain an extra popup effect to indicate landing a critical
 * hit in case they've missed the extra flash that comes with one by default.
 * This plugin helps relay information to the player in a more visible form.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Create popups that appear in battle whenever battlers take elemental
 *   damage that results in weaknesses, resistances, immunities, or absorption.
 * * Critical hits will also generate popups.
 * * Popups can use images or generate bitmap text on the spot.
 * * Move the popups through various means like scaling and acceleration.
 * * Elemental rates can generate different popups depending on the rate.
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
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 *
 * VisuMZ_1_BattleCore
 *
 * If you decide to use front view with the VisuStella MZ Battle Core, Weakness
 * Popups will show up for actors above the Battle Status Window. Normally,
 * they would not appear in front view without the Battle Core because normal
 * damage popups don't appear there either.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Popup Settings
 * ============================================================================
 *
 * Popups are created from a similar template. These are used for Critical Hits
 * and Elemental Rates. The Critical Hit popups will only appear once critical
 * hits are applied in battle. Elemental Rate popups will only appear once
 * certain damage thresholds are met through the element rate calculations.
 *
 * ---
 *
 * General
 * 
 *   Enabled:
 *   - Is this popup enabled?
 *
 * ---
 *
 * Custom Image
 * 
 *   Filename:
 *   - Select an image from img/system/ to use as a custom image popup.
 *   - If you use this, ignore the Render settings.
 *
 * ---
 *
 * Render
 * 
 *   Text:
 *   - Type in the text you want displayed for the popup.
 * 
 *   Bitmap Width:
 *   Bitmap Height:
 *   - What is the maximum width/height of this popup?
 * 
 *   Font Name:
 *   - What font do you wish to use for this popup?
 * 
 *   Font Size:
 *   - What's the font size to use for the popup text?
 * 
 *   Bold?:
 *   Italic?
 *   - Do you wish to make the text bold/italic?
 * 
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Outline Size:
 *   - What size do you want to use for the outline?
 * 
 *   Outline Color:
 *   - Colors with a bit of alpha settings.
 *   - Format rgba(0-255, 0-255, 0-255, 0-1)
 *
 * ---
 *
 * Offset
 * 
 *   Offset: X:
 *   Offset: Y:
 *   - How much do you wish to offset the X/Y position by?
 * 
 *   Variance:
 *   - How much variance should be given to offset X?
 *
 * ---
 *
 * Scale
 * 
 *   Duration:
 *   - How many frames should it take the scaling to reach the target scale?
 * 
 *   Starting Scale: X:
 *   Starting Scale: Y:
 *   - What scale X/Y value should the popup start at?
 * 
 *   Target Scale: X:
 *   Target Scale: Y:
 *   - What scale X/Y value should the popup end at?
 *
 * ---
 *
 * Acceleration
 * 
 *   Starting Speed: X:
 *   Starting Speed: Y:
 *   - How much should the starting X/Y speed of the popup be?
 * 
 *   Delta Speed: X:
 *   Delta Speed: Y:
 *   - How much should the growing X/Y speed of the popup be?
 *
 * ---
 *
 * Fading
 * 
 *   Opaque Duration:
 *   - How many frames should the popup stay opaque?
 * 
 *   Fade Duration:
 *   - After the opaque duration wears off, how many frames will it take for
 *     the popup to vanish?
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
 * Version 1.02: March 5, 2021
 * * Bug Fixes!
 * ** Weakness Popups for front view actors will no longer appear at the top
 *    of the screen. Fix made by Irina.
 * ** Weakness Popups will no longer shift positions prior to an actor's status
 *    window positioning anchor. Fix made by Irina.
 * * Documentation Update!
 * ** Added "Extra Features" section for more clarity on what having the Battle
 *    Core enables for Front View games.
 * 
 * Version 1.01: January 1, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** Plugin Parameters for the Popup Settings now have a Variance factor for
 *    Offset X and Offset Y. Added by Yanfly.
 *
 * Version 1.00: November 27, 2020
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
 * @param WeaknessPopups
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param Critical
 *
 * @param Critical:struct
 * @text Critical Popup Settings
 * @parent Critical
 * @type struct<Popup>
 * @desc Settings for the Critical Popup!
 * @default {"General":"","enabled:eval":"true","Image":"","filename:str":"","Render":"","text:str":"CRITICAL!","bitmapWidth:num":"600","bitmapHeight:num":"200","fontFace:str":"Impact","fontSize:num":"48","fontBold:eval":"true","fontItalic:eval":"false","textColor:str":"#ec008c","outlineSize:num":"5","outlineColor:str":"rgba(255, 255, 255, 1.0)","Offset":"","offsetX:num":"0","offsetY:num":"-25","Scale":"","scaleDuration:num":"20","startScaleX:num":"2.0","startScaleY:num":"2.0","targetScaleX:num":"1.0","targetScaleY:num":"1.0","Acceleration":"","startSpeedX:num":"0","startSpeedY:num":"0","deltaSpeedX:num":"-0.10","deltaSpeedY:num":"0","Fading":"","opaqueDuration:num":"40","fadeDuration:num":"20"}
 * 
 * @param Element
 * @text Element Rates
 *
 * @param Element200:struct
 * @text Rate >= 200%
 * @parent Element
 * @type struct<Popup>
 * @desc Settings for the Popup when Element Rate is at least 200%!
 * @default {"General":"","enabled:eval":"true","Image":"","filename:str":"","Render":"","text:str":"WEAKNESS!","bitmapWidth:num":"600","bitmapHeight:num":"200","fontFace:str":"Impact","fontSize:num":"48","fontBold:eval":"true","fontItalic:eval":"false","textColor:str":"#ed1c24","outlineSize:num":"5","outlineColor:str":"rgba(0, 0, 0, 1.0)","Offset":"","offsetX:num":"0","offsetY:num":"0","Scale":"","scaleDuration:num":"20","startScaleX:num":"2.0","startScaleY:num":"2.0","targetScaleX:num":"1.0","targetScaleY:num":"1.0","Acceleration":"","startSpeedX:num":"0","startSpeedY:num":"0","deltaSpeedX:num":"-0.05","deltaSpeedY:num":"0","Fading":"","opaqueDuration:num":"40","fadeDuration:num":"20"}
 *
 * @param Element175:struct
 * @text Rate >= 175%
 * @parent Element
 * @type struct<Popup>
 * @desc Settings for the Popup when Element Rate is at least 150%!
 * @default {"General":"","enabled:eval":"true","Image":"","filename:str":"","Render":"","text:str":"WEAKNESS!","bitmapWidth:num":"600","bitmapHeight:num":"200","fontFace:str":"Impact","fontSize:num":"46","fontBold:eval":"true","fontItalic:eval":"false","textColor:str":"#ed1c24","outlineSize:num":"5","outlineColor:str":"rgba(0, 0, 0, 1.0)","Offset":"","offsetX:num":"0","offsetY:num":"0","Scale":"","scaleDuration:num":"20","startScaleX:num":"2.0","startScaleY:num":"2.0","targetScaleX:num":"1.0","targetScaleY:num":"1.0","Acceleration":"","startSpeedX:num":"0","startSpeedY:num":"0","deltaSpeedX:num":"-0.05","deltaSpeedY:num":"0","Fading":"","opaqueDuration:num":"40","fadeDuration:num":"20"}
 *
 * @param Element150:struct
 * @text Rate >= 150%
 * @parent Element
 * @type struct<Popup>
 * @desc Settings for the Popup when Element Rate is at least 150%!
 * @default {"General":"","enabled:eval":"true","Image":"","filename:str":"","Render":"","text:str":"WEAKNESS!","bitmapWidth:num":"600","bitmapHeight:num":"200","fontFace:str":"Impact","fontSize:num":"44","fontBold:eval":"true","fontItalic:eval":"false","textColor:str":"#ed1c24","outlineSize:num":"5","outlineColor:str":"rgba(0, 0, 0, 1.0)","Offset":"","offsetX:num":"0","offsetY:num":"0","Scale":"","scaleDuration:num":"20","startScaleX:num":"2.0","startScaleY:num":"2.0","targetScaleX:num":"1.0","targetScaleY:num":"1.0","Acceleration":"","startSpeedX:num":"0","startSpeedY:num":"0","deltaSpeedX:num":"-0.05","deltaSpeedY:num":"0","Fading":"","opaqueDuration:num":"40","fadeDuration:num":"20"}
 *
 * @param Element125:struct
 * @text Rate >= 125%
 * @parent Element
 * @type struct<Popup>
 * @desc Settings for the Popup when Element Rate is at least 125%!
 * @default {"General":"","enabled:eval":"true","Image":"","filename:str":"","Render":"","text:str":"WEAKNESS!","bitmapWidth:num":"600","bitmapHeight:num":"200","fontFace:str":"Impact","fontSize:num":"42","fontBold:eval":"true","fontItalic:eval":"false","textColor:str":"#ed1c24","outlineSize:num":"5","outlineColor:str":"rgba(0, 0, 0, 1.0)","Offset":"","offsetX:num":"0","offsetY:num":"0","Scale":"","scaleDuration:num":"20","startScaleX:num":"2.0","startScaleY:num":"2.0","targetScaleX:num":"1.0","targetScaleY:num":"1.0","Acceleration":"","startSpeedX:num":"0","startSpeedY:num":"0","deltaSpeedX:num":"-0.05","deltaSpeedY:num":"0","Fading":"","opaqueDuration:num":"40","fadeDuration:num":"20"}
 *
 * @param Element110:struct
 * @text Rate >= 110%
 * @parent Element
 * @type struct<Popup>
 * @desc Settings for the Popup when Element Rate is at least 110%!
 * @default {"General":"","enabled:eval":"true","Image":"","filename:str":"","Render":"","text:str":"WEAKNESS!","bitmapWidth:num":"600","bitmapHeight:num":"200","fontFace:str":"Impact","fontSize:num":"40","fontBold:eval":"true","fontItalic:eval":"false","textColor:str":"#ed1c24","outlineSize:num":"5","outlineColor:str":"rgba(0, 0, 0, 1.0)","Offset":"","offsetX:num":"0","offsetY:num":"0","Scale":"","scaleDuration:num":"20","startScaleX:num":"2.0","startScaleY:num":"2.0","targetScaleX:num":"1.0","targetScaleY:num":"1.0","Acceleration":"","startSpeedX:num":"0","startSpeedY:num":"0","deltaSpeedX:num":"-0.05","deltaSpeedY:num":"0","Fading":"","opaqueDuration:num":"40","fadeDuration:num":"20"}
 *
 * @param Element105:struct
 * @text Rate >= 105%
 * @parent Element
 * @type struct<Popup>
 * @desc Settings for the Popup when Element Rate is at least 105%!
 * @default {"General":"","enabled:eval":"true","Image":"","filename:str":"","Render":"","text:str":"WEAKNESS!","bitmapWidth:num":"600","bitmapHeight:num":"200","fontFace:str":"Impact","fontSize:num":"38","fontBold:eval":"true","fontItalic:eval":"false","textColor:str":"#ed1c24","outlineSize:num":"5","outlineColor:str":"rgba(0, 0, 0, 1.0)","Offset":"","offsetX:num":"0","offsetY:num":"0","Scale":"","scaleDuration:num":"20","startScaleX:num":"2.0","startScaleY:num":"2.0","targetScaleX:num":"1.0","targetScaleY:num":"1.0","Acceleration":"","startSpeedX:num":"0","startSpeedY:num":"0","deltaSpeedX:num":"-0.05","deltaSpeedY:num":"0","Fading":"","opaqueDuration:num":"40","fadeDuration:num":"20"}
 *
 * @param Element101:struct
 * @text Rate >= 101%
 * @parent Element
 * @type struct<Popup>
 * @desc Settings for the Popup when Element Rate is at least 105%!
 * @default {"General":"","enabled:eval":"false","Image":"","filename:str":"","Render":"","text:str":"DISABLED","bitmapWidth:num":"600","bitmapHeight:num":"200","fontFace:str":"Impact","fontSize:num":"48","fontBold:eval":"true","fontItalic:eval":"false","textColor:str":"2","outlineSize:num":"5","outlineColor:str":"rgba(0, 0, 0, 1)","Offset":"","offsetX:num":"0","offsetY:num":"0","Scale":"","scaleDuration:num":"20","startScaleX:num":"2.0","startScaleY:num":"2.0","targetScaleX:num":"1.0","targetScaleY:num":"1.0","Acceleration":"","startSpeedX:num":"0","startSpeedY:num":"0","deltaSpeedX:num":"-0.10","deltaSpeedY:num":"0","Fading":"","opaqueDuration:num":"40","fadeDuration:num":"20"}
 *
 * @param Element99:struct
 * @text Rate <= 99%
 * @parent Element
 * @type struct<Popup>
 * @desc Settings for the Popup when Element Rate is at most 95%!
 * @default {"General":"","enabled:eval":"false","Image":"","filename:str":"","Render":"","text:str":"DISABLED","bitmapWidth:num":"600","bitmapHeight:num":"200","fontFace:str":"Impact","fontSize:num":"48","fontBold:eval":"true","fontItalic:eval":"false","textColor:str":"2","outlineSize:num":"5","outlineColor:str":"rgba(0, 0, 0, 1)","Offset":"","offsetX:num":"0","offsetY:num":"0","Scale":"","scaleDuration:num":"20","startScaleX:num":"2.0","startScaleY:num":"2.0","targetScaleX:num":"1.0","targetScaleY:num":"1.0","Acceleration":"","startSpeedX:num":"0","startSpeedY:num":"0","deltaSpeedX:num":"-0.10","deltaSpeedY:num":"0","Fading":"","opaqueDuration:num":"40","fadeDuration:num":"20"}
 *
 * @param Element95:struct
 * @text Rate <= 95%
 * @parent Element
 * @type struct<Popup>
 * @desc Settings for the Popup when Element Rate is at most 95%!
 * @default {"General":"","enabled:eval":"true","Image":"","filename:str":"","Render":"","text:str":"RESIST!","bitmapWidth:num":"600","bitmapHeight:num":"200","fontFace:str":"Impact","fontSize:num":"38","fontBold:eval":"true","fontItalic:eval":"false","textColor:str":"#82ca9c","outlineSize:num":"5","outlineColor:str":"rgba(0, 0, 0, 1.0)","Offset":"","offsetX:num":"0","offsetY:num":"0","Scale":"","scaleDuration:num":"20","startScaleX:num":"2.0","startScaleY:num":"2.0","targetScaleX:num":"1.0","targetScaleY:num":"1.0","Acceleration":"","startSpeedX:num":"0","startSpeedY:num":"0","deltaSpeedX:num":"-0.05","deltaSpeedY:num":"0","Fading":"","opaqueDuration:num":"40","fadeDuration:num":"20"}
 *
 * @param Element90:struct
 * @text Rate <= 90%
 * @parent Element
 * @type struct<Popup>
 * @desc Settings for the Popup when Element Rate is at most 90%!
 * @default {"General":"","enabled:eval":"true","Image":"","filename:str":"","Render":"","text:str":"RESIST!","bitmapWidth:num":"600","bitmapHeight:num":"200","fontFace:str":"Impact","fontSize:num":"40","fontBold:eval":"true","fontItalic:eval":"false","textColor:str":"#82ca9c","outlineSize:num":"5","outlineColor:str":"rgba(0, 0, 0, 1.0)","Offset":"","offsetX:num":"0","offsetY:num":"0","Scale":"","scaleDuration:num":"20","startScaleX:num":"2.0","startScaleY:num":"2.0","targetScaleX:num":"1.0","targetScaleY:num":"1.0","Acceleration":"","startSpeedX:num":"0","startSpeedY:num":"0","deltaSpeedX:num":"-0.05","deltaSpeedY:num":"0","Fading":"","opaqueDuration:num":"40","fadeDuration:num":"20"}
 *
 * @param Element75:struct
 * @text Rate <= 75%
 * @parent Element
 * @type struct<Popup>
 * @desc Settings for the Popup when Element Rate is at most 75%!
 * @default {"General":"","enabled:eval":"true","Image":"","filename:str":"","Render":"","text:str":"RESIST!","bitmapWidth:num":"600","bitmapHeight:num":"200","fontFace:str":"Impact","fontSize:num":"42","fontBold:eval":"true","fontItalic:eval":"false","textColor:str":"#82ca9c","outlineSize:num":"5","outlineColor:str":"rgba(0, 0, 0, 1.0)","Offset":"","offsetX:num":"0","offsetY:num":"0","Scale":"","scaleDuration:num":"20","startScaleX:num":"2.0","startScaleY:num":"2.0","targetScaleX:num":"1.0","targetScaleY:num":"1.0","Acceleration":"","startSpeedX:num":"0","startSpeedY:num":"0","deltaSpeedX:num":"-0.05","deltaSpeedY:num":"0","Fading":"","opaqueDuration:num":"40","fadeDuration:num":"20"}
 *
 * @param Element50:struct
 * @text Rate <= 50%
 * @parent Element
 * @type struct<Popup>
 * @desc Settings for the Popup when Element Rate is at most 50%!
 * @default {"General":"","enabled:eval":"true","Image":"","filename:str":"","Render":"","text:str":"RESIST!","bitmapWidth:num":"600","bitmapHeight:num":"200","fontFace:str":"Impact","fontSize:num":"44","fontBold:eval":"true","fontItalic:eval":"false","textColor:str":"#82ca9c","outlineSize:num":"5","outlineColor:str":"rgba(0, 0, 0, 1.0)","Offset":"","offsetX:num":"0","offsetY:num":"0","Scale":"","scaleDuration:num":"20","startScaleX:num":"2.0","startScaleY:num":"2.0","targetScaleX:num":"1.0","targetScaleY:num":"1.0","Acceleration":"","startSpeedX:num":"0","startSpeedY:num":"0","deltaSpeedX:num":"-0.05","deltaSpeedY:num":"0","Fading":"","opaqueDuration:num":"40","fadeDuration:num":"20"}
 *
 * @param Element25:struct
 * @text Rate <= 25%
 * @parent Element
 * @type struct<Popup>
 * @desc Settings for the Popup when Element Rate is at most 25%!
 * @default {"General":"","enabled:eval":"true","Image":"","filename:str":"","Render":"","text:str":"RESIST!","bitmapWidth:num":"600","bitmapHeight:num":"200","fontFace:str":"Impact","fontSize:num":"46","fontBold:eval":"true","fontItalic:eval":"false","textColor:str":"#82ca9c","outlineSize:num":"5","outlineColor:str":"rgba(0, 0, 0, 1.0)","Offset":"","offsetX:num":"0","offsetY:num":"0","Scale":"","scaleDuration:num":"20","startScaleX:num":"2.0","startScaleY:num":"2.0","targetScaleX:num":"1.0","targetScaleY:num":"1.0","Acceleration":"","startSpeedX:num":"0","startSpeedY:num":"0","deltaSpeedX:num":"-0.05","deltaSpeedY:num":"0","Fading":"","opaqueDuration:num":"40","fadeDuration:num":"20"}
 *
 * @param Element0:struct
 * @text Rate = 0%
 * @parent Element
 * @type struct<Popup>
 * @desc Settings for the Popup when Element Rate is exactly 0%!
 * @default {"General":"","enabled:eval":"true","Image":"","filename:str":"","Render":"","text:str":"IMMUNE!","bitmapWidth:num":"600","bitmapHeight:num":"200","fontFace:str":"Impact","fontSize:num":"48","fontBold:eval":"true","fontItalic:eval":"false","textColor:str":"#6dcff6","outlineSize:num":"5","outlineColor:str":"rgba(0, 0, 0, 1.0)","Offset":"","offsetX:num":"0","offsetY:num":"0","Scale":"","scaleDuration:num":"20","startScaleX:num":"2.0","startScaleY:num":"2.0","targetScaleX:num":"1.0","targetScaleY:num":"1.0","Acceleration":"","startSpeedX:num":"0","startSpeedY:num":"0","deltaSpeedX:num":"-0.05","deltaSpeedY:num":"0","Fading":"","opaqueDuration:num":"40","fadeDuration:num":"20"}
 *
 * @param ElementNegative:struct
 * @text Rate < 0%
 * @parent Element
 * @type struct<Popup>
 * @desc Settings for the Popup when Element Rate is under 0%!
 * @default {"General":"","enabled:eval":"true","Image":"","filename:str":"","Render":"","text:str":"ABSORB!","bitmapWidth:num":"600","bitmapHeight:num":"200","fontFace:str":"Impact","fontSize:num":"48","fontBold:eval":"true","fontItalic:eval":"false","textColor:str":"#bd8cbf","outlineSize:num":"5","outlineColor:str":"rgba(0, 0, 0, 1.0)","Offset":"","offsetX:num":"0","offsetY:num":"0","Scale":"","scaleDuration:num":"20","startScaleX:num":"2.0","startScaleY:num":"2.0","targetScaleX:num":"1.0","targetScaleY:num":"1.0","Acceleration":"","startSpeedX:num":"0","startSpeedY:num":"0","deltaSpeedX:num":"-0.05","deltaSpeedY:num":"0","Fading":"","opaqueDuration:num":"40","fadeDuration:num":"20"}
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
 * Popup Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Popup:
 *
 * @param General
 *
 * @param enabled:eval
 * @text Enabled
 * @parent General
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @desc Is this popup enabled?
 * @default true
 *
 * @param Image
 * @text Custom Image
 *
 * @param filename:str
 * @text Filename
 * @parent Image
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Select an image from img/system/ to use as a custom image
 * popup. If you use this, ignore the Render settings.
 * @default 
 *
 * @param Render
 *
 * @param text:str
 * @text Text
 * @parent Render
 * @desc Type in the text you want displayed for the popup.
 * @default Text!
 *
 * @param bitmapWidth:num
 * @text Bitmap Width
 * @parent Render
 * @type number
 * @min 1
 * @desc What is the maximum width of this popup?
 * @default 600
 *
 * @param bitmapHeight:num
 * @text Bitmap Height
 * @parent Render
 * @type number
 * @min 1
 * @desc What is the maximum height of this popup?
 * @default 200
 *
 * @param fontFace:str
 * @text Font Name
 * @parent Render
 * @desc What font do you wish to use for this popup?
 * @default Impact
 *
 * @param fontSize:num
 * @text Font Size
 * @parent fontFace:str
 * @type number
 * @min 1
 * @desc What's the font size to use for the popup text?
 * @default 48
 *
 * @param fontBold:eval
 * @text Bold?
 * @parent fontFace:str
 * @type boolean
 * @on Bold
 * @off Normal
 * @desc Do you wish to make the text bold?
 * @default true
 *
 * @param fontItalic:eval
 * @text Italic?
 * @parent fontFace:str
 * @type boolean
 * @on Italic
 * @off Normal
 * @desc Do you wish to make the text italic?
 * @default false
 *
 * @param textColor:str
 * @text Text Color
 * @parent Render
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 2
 *
 * @param outlineSize:num
 * @text Outline Size
 * @parent Render
 * @type number
 * @min 0
 * @desc What size do you want to use for the outline?
 * @default 5
 *
 * @param outlineColor:str
 * @text Outline Color
 * @parent outlineSize:num
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 1)
 *
 * @param Offset
 *
 * @param offsetX:num
 * @text Offset: X
 * @parent Offset
 * @desc How much do you wish to offset the X position by?
 * @default 0
 *
 * @param offsetXvariance:num
 * @text Variance
 * @type number
 * @parent offsetX:num
 * @desc How much variance should be given to offset X?
 * @default 0
 *
 * @param offsetY:num
 * @text Offset: Y
 * @parent Offset
 * @desc How much do you wish to offset the Y position by?
 * @default 0
 *
 * @param offsetYvariance:num
 * @text Variance
 * @type number
 * @parent offsetY:num
 * @desc How much variance should be given to offset Y?
 * @default 0
 *
 * @param Scale
 *
 * @param scaleDuration:num
 * @text Duration
 * @parent Scale
 * @type number
 * @min 1
 * @desc How many frames should it take the scaling to reach the target scale?
 * @default 20
 *
 * @param startScaleX:num
 * @text Starting Scale: X
 * @parent Scale
 * @desc What scale X value should the popup start at?
 * @default 2.0
 *
 * @param startScaleY:num
 * @text Starting Scale: Y
 * @parent Scale
 * @desc What scale Y value should the popup start at?
 * @default 2.0
 *
 * @param targetScaleX:num
 * @text Target Scale: X
 * @parent Scale
 * @desc What scale X value should the popup end at?
 * @default 1.0
 *
 * @param targetScaleY:num
 * @text Target Scale: Y
 * @parent Scale
 * @desc What scale Y value should the popup end at?
 * @default 1.0
 *
 * @param Acceleration
 *
 * @param startSpeedX:num
 * @text Starting Speed: X
 * @parent Acceleration
 * @desc How much should the starting X speed of the popup be?
 * Negative: Left, Positive: Right
 * @default 0
 *
 * @param startSpeedY:num
 * @text Starting Speed: Y
 * @parent Acceleration
 * @desc How much should the starting Y speed of the popup be?
 * Negative: Up, Positive: Down
 * @default 0
 *
 * @param deltaSpeedX:num
 * @text Delta Speed: X
 * @parent Acceleration
 * @desc How much should the growing X speed of the popup be?
 * Negative: Left, Positive: Right
 * @default -0.10
 *
 * @param deltaSpeedY:num
 * @text Delta Speed: Y
 * @parent Acceleration
 * @desc How much should the growing Y speed of the popup be?
 * Negative: Up, Positive: Down
 * @default 0
 *
 * @param Fading
 *
 * @param opaqueDuration:num
 * @text Opaque Duration
 * @parent Fading
 * @type number
 * @min 1
 * @desc How many frames should the popup stay opaque?
 * @default 40
 *
 * @param fadeDuration:num
 * @text Fade Duration
 * @parent Fading
 * @type number
 * @min 1
 * @desc After the opaque duration wears off, how many frames will
 * it take for the popup to vanish?
 * @default 20
 *
 */
//=============================================================================

const _0x4ba7=['destroy','offsetX','initMembers','parameters','match','name','_speedX','centerFrontViewSprite','updateWeaknessPopupsContainer','createWeaknessPopupsForCritical','max','loadWeaknessPopupBitmap','Element25','enabled','_speedY','scale','scaleDuration','textColor','JSON','none','isSceneBattle','253mZqDsL','includes','status','exit','500ZNZtWP','call','offsetY','update','_weaknessPopupContainer','startScaleY','_fadeDuration','result','_targetScaleY','43GnWLXl','isSideView','create','fontItalic','ConvertParams','createWeaknessPopupsForElementRate','Element90','prototype','Element125','loadSystem','executeDamage','updateScaling','#%1','FUNC','bitmap','initialize','width','filename','fontBold','806664uPzuov','Element105','ARRAYNUM','filter','_targetScaleX','outlineSize','index','parent','_weaknessPopupsContainer','_opaqueDuration','offsetXvariance','createBattleField','startSpeedX','ARRAYJSON','getWeaknessPopupContainer','Element101','#ffffff','adjustFlippedBattlefield','createBitmapImage','addChild','475539pbHszD','bitmapHeight','462654kXOjbb','ARRAYSTR','2ZzbsWK','initPosition','createWeaknessPopupsContainer','Settings','offsetYvariance','deltaSpeedX','_battleField','fadeDuration','Impact','_createDamageContainer','targetScaleX','Element0','Element110','description','_damageContainer','constructor','Game_Action_executeDamage','updateOpacity','Window_BattleStatus_createDamageContainer','targetScaleY','center','createWeaknessPopup','Element75','_createWeaknessPopupContainer','30648WbnDHi','map','Element175','ARRAYEVAL','parse','WeaknessPopups','isFlipped','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','_data','_battler','NUM','getColor','deltaSpeedY','1620mucStX','createWeaknessPopupType','_scaleDuration','startScaleX','Critical','return\x200','Spriteset_Battle_update','drawText','_spriteset','createBitmap','updatePosition','Element200','_scene','2327qHZGCt','createWeaknessPopups','isActor','VisuMZ_1_BattleCore','Spriteset_Battle_createBattleField','text','trim','critical','outlineColor','ElementNegative','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','_statusWindow','_baseY','format','4063ttUpRJ','isDamage','EVAL','Spriteset_Battle_adjustFlippedBattlefield'];const _0x4e35=function(_0x538b3a,_0x5ad3d0){_0x538b3a=_0x538b3a-0x1f0;let _0x4ba70f=_0x4ba7[_0x538b3a];return _0x4ba70f;};const _0x3a1656=_0x4e35;(function(_0x18df0c,_0x8ed065){const _0x1e5008=_0x4e35;while(!![]){try{const _0x5c0756=-parseInt(_0x1e5008(0x237))+-parseInt(_0x1e5008(0x223))+-parseInt(_0x1e5008(0x23b))*parseInt(_0x1e5008(0x253))+parseInt(_0x1e5008(0x210))*parseInt(_0x1e5008(0x27b))+parseInt(_0x1e5008(0x260))*parseInt(_0x1e5008(0x207))+parseInt(_0x1e5008(0x239))+-parseInt(_0x1e5008(0x26d))*-parseInt(_0x1e5008(0x203));if(_0x5c0756===_0x8ed065)break;else _0x18df0c['push'](_0x18df0c['shift']());}catch(_0x1e9dee){_0x18df0c['push'](_0x18df0c['shift']());}}}(_0x4ba7,0xa9173));var label=_0x3a1656(0x258),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x3a1656(0x226)](function(_0x566414){const _0x48f292=_0x3a1656;return _0x566414[_0x48f292(0x205)]&&_0x566414[_0x48f292(0x248)][_0x48f292(0x204)]('['+label+']');})[0x0];VisuMZ[label][_0x3a1656(0x23e)]=VisuMZ[label][_0x3a1656(0x23e)]||{},VisuMZ[_0x3a1656(0x214)]=function(_0x2d321c,_0x41ef4a){const _0x443ce0=_0x3a1656;for(const _0x1ca485 in _0x41ef4a){if(_0x1ca485[_0x443ce0(0x1f2)](/(.*):(.*)/i)){const _0x4210f2=String(RegExp['$1']),_0x4aea4d=String(RegExp['$2'])['toUpperCase']()[_0x443ce0(0x273)]();let _0x5ab471,_0x56e883,_0x4f6f06;switch(_0x4aea4d){case _0x443ce0(0x25d):_0x5ab471=_0x41ef4a[_0x1ca485]!==''?Number(_0x41ef4a[_0x1ca485]):0x0;break;case _0x443ce0(0x225):_0x56e883=_0x41ef4a[_0x1ca485]!==''?JSON[_0x443ce0(0x257)](_0x41ef4a[_0x1ca485]):[],_0x5ab471=_0x56e883[_0x443ce0(0x254)](_0xc594d7=>Number(_0xc594d7));break;case _0x443ce0(0x27d):_0x5ab471=_0x41ef4a[_0x1ca485]!==''?eval(_0x41ef4a[_0x1ca485]):null;break;case _0x443ce0(0x256):_0x56e883=_0x41ef4a[_0x1ca485]!==''?JSON['parse'](_0x41ef4a[_0x1ca485]):[],_0x5ab471=_0x56e883['map'](_0x48c04a=>eval(_0x48c04a));break;case _0x443ce0(0x200):_0x5ab471=_0x41ef4a[_0x1ca485]!==''?JSON[_0x443ce0(0x257)](_0x41ef4a[_0x1ca485]):'';break;case _0x443ce0(0x230):_0x56e883=_0x41ef4a[_0x1ca485]!==''?JSON[_0x443ce0(0x257)](_0x41ef4a[_0x1ca485]):[],_0x5ab471=_0x56e883[_0x443ce0(0x254)](_0x34bbf1=>JSON[_0x443ce0(0x257)](_0x34bbf1));break;case _0x443ce0(0x21d):_0x5ab471=_0x41ef4a[_0x1ca485]!==''?new Function(JSON[_0x443ce0(0x257)](_0x41ef4a[_0x1ca485])):new Function(_0x443ce0(0x265));break;case'ARRAYFUNC':_0x56e883=_0x41ef4a[_0x1ca485]!==''?JSON[_0x443ce0(0x257)](_0x41ef4a[_0x1ca485]):[],_0x5ab471=_0x56e883['map'](_0x4a94d2=>new Function(JSON['parse'](_0x4a94d2)));break;case'STR':_0x5ab471=_0x41ef4a[_0x1ca485]!==''?String(_0x41ef4a[_0x1ca485]):'';break;case _0x443ce0(0x23a):_0x56e883=_0x41ef4a[_0x1ca485]!==''?JSON[_0x443ce0(0x257)](_0x41ef4a[_0x1ca485]):[],_0x5ab471=_0x56e883[_0x443ce0(0x254)](_0x4b0bb5=>String(_0x4b0bb5));break;case'STRUCT':_0x4f6f06=_0x41ef4a[_0x1ca485]!==''?JSON[_0x443ce0(0x257)](_0x41ef4a[_0x1ca485]):{},_0x5ab471=VisuMZ['ConvertParams']({},_0x4f6f06);break;case'ARRAYSTRUCT':_0x56e883=_0x41ef4a[_0x1ca485]!==''?JSON['parse'](_0x41ef4a[_0x1ca485]):[],_0x5ab471=_0x56e883['map'](_0xf66e0e=>VisuMZ['ConvertParams']({},JSON[_0x443ce0(0x257)](_0xf66e0e)));break;default:continue;}_0x2d321c[_0x4210f2]=_0x5ab471;}}return _0x2d321c;},(_0x15f220=>{const _0x37ab47=_0x3a1656,_0x326f41=_0x15f220[_0x37ab47(0x1f3)];for(const _0x572446 of dependencies){if(!Imported[_0x572446]){alert(_0x37ab47(0x277)[_0x37ab47(0x27a)](_0x326f41,_0x572446)),SceneManager[_0x37ab47(0x206)]();break;}}const _0x513994=_0x15f220[_0x37ab47(0x248)];if(_0x513994['match'](/\[Version[ ](.*?)\]/i)){const _0x352a06=Number(RegExp['$1']);_0x352a06!==VisuMZ[label]['version']&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x37ab47(0x27a)](_0x326f41,_0x352a06)),SceneManager[_0x37ab47(0x206)]());}if(_0x513994['match'](/\[Tier[ ](\d+)\]/i)){const _0x5d1d9f=Number(RegExp['$1']);_0x5d1d9f<tier?(alert(_0x37ab47(0x25a)[_0x37ab47(0x27a)](_0x326f41,_0x5d1d9f,tier)),SceneManager[_0x37ab47(0x206)]()):tier=Math[_0x37ab47(0x1f8)](_0x5d1d9f,tier);}VisuMZ[_0x37ab47(0x214)](VisuMZ[label][_0x37ab47(0x23e)],_0x15f220[_0x37ab47(0x1f1)]);})(pluginData),ColorManager['getColor']=function(_0x382c8f){const _0x2a9452=_0x3a1656;return _0x382c8f=String(_0x382c8f),_0x382c8f[_0x2a9452(0x1f2)](/#(.*)/i)?_0x2a9452(0x21c)[_0x2a9452(0x27a)](String(RegExp['$1'])):this[_0x2a9452(0x1ff)](Number(_0x382c8f));},SceneManager[_0x3a1656(0x202)]=function(){const _0x5c7f4c=_0x3a1656;return this[_0x5c7f4c(0x26c)]&&this['_scene'][_0x5c7f4c(0x24a)]===Scene_Battle;},VisuMZ['WeaknessPopups'][_0x3a1656(0x24b)]=Game_Action[_0x3a1656(0x217)][_0x3a1656(0x21a)],Game_Action[_0x3a1656(0x217)][_0x3a1656(0x21a)]=function(_0x29eb49,_0x1a26db){const _0xe47b79=_0x3a1656;VisuMZ['WeaknessPopups']['Game_Action_executeDamage'][_0xe47b79(0x208)](this,_0x29eb49,_0x1a26db),this[_0xe47b79(0x26e)](_0x29eb49,_0x1a26db);},Game_Action['prototype'][_0x3a1656(0x26e)]=function(_0x4e6ed0,_0x1ec020){const _0x3b4af7=_0x3a1656;if(!SceneManager[_0x3b4af7(0x202)]())return;if(!this[_0x3b4af7(0x27c)]())return;this[_0x3b4af7(0x1f7)](_0x4e6ed0,_0x1ec020),this[_0x3b4af7(0x215)](_0x4e6ed0,_0x1ec020);},Game_Action[_0x3a1656(0x217)][_0x3a1656(0x1f7)]=function(_0x33ecba,_0x4d9d66){const _0x515651=_0x3a1656,_0x343479=_0x33ecba[_0x515651(0x20e)]();if(!_0x343479[_0x515651(0x274)])return;const _0x2415b9=SceneManager[_0x515651(0x26c)][_0x515651(0x268)];if(!_0x2415b9)return;_0x2415b9[_0x515651(0x261)](_0x33ecba,_0x515651(0x264));},Game_Action[_0x3a1656(0x217)][_0x3a1656(0x215)]=function(_0x53f562,_0x18bf86){const _0x37e3fd=_0x3a1656,_0x3d0ad1=SceneManager[_0x37e3fd(0x26c)][_0x37e3fd(0x268)];if(!_0x3d0ad1)return;const _0x4e04ed=this['calcElementRate'](_0x53f562);let _0x2305d2=_0x37e3fd(0x201);if(_0x4e04ed===0x0)_0x2305d2=_0x37e3fd(0x246);else{if(_0x4e04ed<0x0)_0x2305d2=_0x37e3fd(0x276);else{if(_0x4e04ed>=0x2)_0x2305d2=_0x37e3fd(0x26b);else{if(_0x4e04ed>=1.75)_0x2305d2=_0x37e3fd(0x255);else{if(_0x4e04ed>=1.5)_0x2305d2='Element150';else{if(_0x4e04ed>=1.25)_0x2305d2=_0x37e3fd(0x218);else{if(_0x4e04ed>=1.1)_0x2305d2=_0x37e3fd(0x247);else{if(_0x4e04ed>=1.05)_0x2305d2=_0x37e3fd(0x224);else{if(_0x4e04ed>=1.01)_0x2305d2=_0x37e3fd(0x232);else{if(_0x4e04ed<=0.25)_0x2305d2=_0x37e3fd(0x1fa);else{if(_0x4e04ed<=0.5)_0x2305d2=_0x37e3fd(0x251);else{if(_0x4e04ed<=0.75)_0x2305d2=_0x37e3fd(0x216);else{if(_0x4e04ed<=0.9)_0x2305d2='Element95';else _0x4e04ed<=0.99&&(_0x2305d2='Element99');}}}}}}}}}}}}_0x3d0ad1[_0x37e3fd(0x261)](_0x53f562,_0x2305d2);};function Sprite_WeaknessPopup(){this['initialize'](...arguments);}Sprite_WeaknessPopup[_0x3a1656(0x217)]=Object[_0x3a1656(0x212)](Sprite['prototype']),Sprite_WeaknessPopup[_0x3a1656(0x217)]['constructor']=Sprite_WeaknessPopup,Sprite_WeaknessPopup[_0x3a1656(0x217)][_0x3a1656(0x21f)]=function(_0x4b5655,_0x44026b){const _0x172c17=_0x3a1656;this[_0x172c17(0x25c)]=_0x4b5655,this['_data']=_0x44026b,this[_0x172c17(0x1f0)](),Sprite[_0x172c17(0x217)][_0x172c17(0x21f)][_0x172c17(0x208)](this),this[_0x172c17(0x269)](),this[_0x172c17(0x23c)]();},Sprite_WeaknessPopup[_0x3a1656(0x217)]['createBitmap']=function(){const _0x5e9107=_0x3a1656;this[_0x5e9107(0x25b)][_0x5e9107(0x221)]?this[_0x5e9107(0x1f9)]():this['createBitmapImage']();},Sprite_WeaknessPopup[_0x3a1656(0x217)][_0x3a1656(0x1f9)]=function(){const _0x1ff96c=_0x3a1656;this[_0x1ff96c(0x21e)]=ImageManager[_0x1ff96c(0x219)](this['_data']['filename']);},Sprite_WeaknessPopup[_0x3a1656(0x217)][_0x3a1656(0x235)]=function(){const _0x503549=_0x3a1656;this[_0x503549(0x21e)]=new Bitmap(this[_0x503549(0x25b)]['bitmapWidth'],this['_data'][_0x503549(0x238)]),this[_0x503549(0x21e)]['fontFace']=this[_0x503549(0x25b)]['fontFace'],this[_0x503549(0x21e)]['fontSize']=this[_0x503549(0x25b)]['fontSize'],this[_0x503549(0x21e)]['fontBold']=this[_0x503549(0x25b)][_0x503549(0x222)],this[_0x503549(0x21e)][_0x503549(0x213)]=this[_0x503549(0x25b)][_0x503549(0x213)],this[_0x503549(0x21e)][_0x503549(0x1ff)]=ColorManager[_0x503549(0x25e)](this[_0x503549(0x25b)][_0x503549(0x1ff)]),this[_0x503549(0x21e)]['outlineSize']=this[_0x503549(0x25b)][_0x503549(0x228)],this[_0x503549(0x21e)][_0x503549(0x275)]=this['_data'][_0x503549(0x275)],this[_0x503549(0x21e)][_0x503549(0x267)](this[_0x503549(0x25b)][_0x503549(0x272)],0x0,0x0,this[_0x503549(0x21e)][_0x503549(0x220)],this[_0x503549(0x21e)]['height'],_0x503549(0x24f));},Sprite_WeaknessPopup['prototype'][_0x3a1656(0x1f0)]=function(){const _0x440885=_0x3a1656;this[_0x440885(0x1f4)]=this[_0x440885(0x25b)][_0x440885(0x22f)],this['_speedY']=this[_0x440885(0x25b)]['startSpeedY'],this['_opaqueDuration']=this[_0x440885(0x25b)]['opaqueDuration'],this[_0x440885(0x20d)]=this[_0x440885(0x25b)][_0x440885(0x242)],this[_0x440885(0x262)]=this[_0x440885(0x25b)][_0x440885(0x1fe)];},Sprite_WeaknessPopup[_0x3a1656(0x217)][_0x3a1656(0x23c)]=function(){const _0x29578c=_0x3a1656,_0x24c52e=SceneManager[_0x29578c(0x26c)]['_statusWindow'];!$gameSystem[_0x29578c(0x211)]()&&this[_0x29578c(0x25c)][_0x29578c(0x25c)][_0x29578c(0x26f)]()&&(Imported[_0x29578c(0x270)]&&_0x24c52e[_0x29578c(0x1f5)](this['_battler'][_0x29578c(0x25c)][_0x29578c(0x229)]()));this['x']=this[_0x29578c(0x25c)]['_baseX']||this['_battler']['x'],this['x']+=this['_data'][_0x29578c(0x280)],this['y']=this[_0x29578c(0x25c)][_0x29578c(0x279)]||this['_battler']['y'],this['y']-=this['_battler']['height']*this[_0x29578c(0x25c)]['scale']['y'],this['y']+=this[_0x29578c(0x25b)][_0x29578c(0x209)];const _0x273d9f=this[_0x29578c(0x25b)][_0x29578c(0x22d)]||0x0,_0x4db375=this[_0x29578c(0x25b)][_0x29578c(0x23f)]||0x0;this['x']+=Math['randomInt'](_0x273d9f*0x2)-_0x273d9f,this['y']+=Math['randomInt'](_0x4db375*0x2)-_0x4db375,this['anchor']['x']=0.5,this['anchor']['y']=0.5,this[_0x29578c(0x1fd)]['x']=this[_0x29578c(0x25b)][_0x29578c(0x263)],this[_0x29578c(0x1fd)]['y']=this[_0x29578c(0x25b)][_0x29578c(0x20c)],this[_0x29578c(0x227)]=this[_0x29578c(0x25b)][_0x29578c(0x245)],this[_0x29578c(0x20f)]=this[_0x29578c(0x25b)][_0x29578c(0x24e)];},Sprite_WeaknessPopup[_0x3a1656(0x217)][_0x3a1656(0x20a)]=function(){const _0x93a038=_0x3a1656;Sprite[_0x93a038(0x217)][_0x93a038(0x20a)][_0x93a038(0x208)](this),this[_0x93a038(0x26a)](),this['updateScaling'](),this[_0x93a038(0x24c)]();},Sprite_WeaknessPopup['prototype'][_0x3a1656(0x26a)]=function(){const _0x51fa13=_0x3a1656;this['x']+=this[_0x51fa13(0x1f4)],this['y']+=this['_speedY'],this[_0x51fa13(0x1f4)]+=this[_0x51fa13(0x25b)][_0x51fa13(0x240)],this[_0x51fa13(0x1fc)]+=this[_0x51fa13(0x25b)][_0x51fa13(0x25f)];},Sprite_WeaknessPopup[_0x3a1656(0x217)][_0x3a1656(0x21b)]=function(){const _0x180474=_0x3a1656;if(this['_scaleDuration']>0x0){const _0x8d190b=this['_scaleDuration'];this[_0x180474(0x1fd)]['x']=(this['scale']['x']*(_0x8d190b-0x1)+this[_0x180474(0x227)])/_0x8d190b,this['scale']['y']=(this[_0x180474(0x1fd)]['y']*(_0x8d190b-0x1)+this['_targetScaleY'])/_0x8d190b,this[_0x180474(0x262)]--;}else this[_0x180474(0x1fd)]['x']=0x1,this['scale']['y']=0x1;},Sprite_WeaknessPopup[_0x3a1656(0x217)][_0x3a1656(0x24c)]=function(){const _0x1769fe=_0x3a1656;if(this[_0x1769fe(0x22c)]-->0x0)return;if(this[_0x1769fe(0x20d)]>0x0){const _0x4ae450=this[_0x1769fe(0x20d)];this['opacity']=(this['opacity']*(_0x4ae450-0x1)+0x0)/_0x4ae450,this[_0x1769fe(0x20d)]--;}else{const _0x4344eb=this[_0x1769fe(0x22a)];_0x4344eb&&(_0x4344eb['removeChild'](this),this[_0x1769fe(0x27f)]());}},VisuMZ[_0x3a1656(0x258)]['Spriteset_Battle_createBattleField']=Spriteset_Battle[_0x3a1656(0x217)]['createBattleField'],Spriteset_Battle['prototype'][_0x3a1656(0x22e)]=function(){const _0x1f7259=_0x3a1656;VisuMZ['WeaknessPopups'][_0x1f7259(0x271)][_0x1f7259(0x208)](this),this['createWeaknessPopupsContainer']();},Spriteset_Battle[_0x3a1656(0x217)]['createWeaknessPopupsContainer']=function(){const _0x13545e=_0x3a1656;if(this[_0x13545e(0x22b)])return;this['_weaknessPopupsContainer']=new Sprite(),this[_0x13545e(0x22b)]['x']=this[_0x13545e(0x241)]['x'],this[_0x13545e(0x22b)]['y']=this['_battleField']['y'],this['addChild'](this[_0x13545e(0x22b)]);},VisuMZ[_0x3a1656(0x258)][_0x3a1656(0x27e)]=Spriteset_Battle[_0x3a1656(0x217)]['adjustFlippedBattlefield'],Spriteset_Battle[_0x3a1656(0x217)][_0x3a1656(0x234)]=function(){const _0x55395c=_0x3a1656;VisuMZ[_0x55395c(0x258)][_0x55395c(0x27e)]['call'](this);!this[_0x55395c(0x22b)]&&this[_0x55395c(0x23d)]();if(!this[_0x55395c(0x259)]())return;this[_0x55395c(0x22b)][_0x55395c(0x1fd)]['x']=-0x1,this['_weaknessPopupsContainer']['x']=this[_0x55395c(0x241)]['x']+this[_0x55395c(0x241)][_0x55395c(0x220)];},VisuMZ[_0x3a1656(0x258)]['Spriteset_Battle_update']=Spriteset_Battle['prototype'][_0x3a1656(0x20a)],Spriteset_Battle[_0x3a1656(0x217)][_0x3a1656(0x20a)]=function(){const _0x5a2016=_0x3a1656;VisuMZ[_0x5a2016(0x258)][_0x5a2016(0x266)][_0x5a2016(0x208)](this),this[_0x5a2016(0x1f6)]();},Spriteset_Battle[_0x3a1656(0x217)]['updateWeaknessPopupsContainer']=function(){const _0x5ec1f5=_0x3a1656;if(!this['_weaknessPopupsContainer'])return;if(!this[_0x5ec1f5(0x249)])return;this[_0x5ec1f5(0x22b)]['x']=this['_damageContainer']['x'],this[_0x5ec1f5(0x22b)]['y']=this[_0x5ec1f5(0x249)]['y'];},Spriteset_Battle[_0x3a1656(0x217)][_0x3a1656(0x261)]=function(_0x1caf4f,_0x2ebb91){const _0x4da755=_0x3a1656;if(!_0x1caf4f)return;if(!this[_0x4da755(0x22b)])return;const _0x16350f=this['getWeaknessPopupData'](_0x2ebb91);if(!_0x16350f)return;if(!_0x16350f[_0x4da755(0x1fb)])return;this[_0x4da755(0x250)](_0x1caf4f,_0x16350f);},VisuMZ[_0x3a1656(0x258)]['DefaultPopupSettings']=function(){const _0x38340d=_0x3a1656;return{'enabled':!![],'filename':'','text':'TEXT','bitmapWidth':0x258,'bitmapHeight':0xc8,'fontFace':_0x38340d(0x243),'fontSize':0x24,'fontBold':![],'fontItalic':![],'textColor':_0x38340d(0x233),'outlineSize':0x5,'outlineColor':'rgba(1,\x201,\x201,\x201)','offsetX':0x0,'offsetY':0x0,'scaleDuration':0x14,'startScaleX':0x2,'startScaleY':0x2,'targetScaleX':0x1,'targetScaleY':0x1,'startSpeedX':0x0,'startSpeedY':0x0,'deltaSpeedX':0x0,'deltaSpeedY':0x0,'opaqueDuration':0x28,'fadeDuration':0x14};},Spriteset_Battle[_0x3a1656(0x217)]['getWeaknessPopupData']=function(_0x3dc945){const _0x407739=_0x3a1656,_0x2d7796=VisuMZ[_0x407739(0x258)][_0x407739(0x23e)];if(!_0x2d7796)return null;return _0x2d7796[_0x3dc945];},Spriteset_Battle[_0x3a1656(0x217)][_0x3a1656(0x250)]=function(_0x341eca,_0x1e900){const _0x101b6e=_0x3a1656;if(!_0x341eca)return;if(!_0x1e900)return;if(!_0x1e900['enabled'])return;if(!this[_0x101b6e(0x22b)])return;if(!Imported[_0x101b6e(0x270)]&&_0x341eca['isActor']()&&!$gameSystem[_0x101b6e(0x211)]())return;const _0xb67883=this['findTargetSprite'](_0x341eca);if(!_0xb67883)return;const _0x480699=new Sprite_WeaknessPopup(_0xb67883,_0x1e900),_0x1bb9e7=this[_0x101b6e(0x231)](_0xb67883);_0x1bb9e7['addChild'](_0x480699);},Spriteset_Battle[_0x3a1656(0x217)]['getWeaknessPopupContainer']=function(_0x1a9d0d){const _0x37ee1d=_0x3a1656;return!$gameSystem[_0x37ee1d(0x211)]()&&_0x1a9d0d['_battler'][_0x37ee1d(0x26f)]()?SceneManager[_0x37ee1d(0x26c)][_0x37ee1d(0x278)][_0x37ee1d(0x20b)]:this[_0x37ee1d(0x22b)];},VisuMZ[_0x3a1656(0x258)][_0x3a1656(0x24d)]=Window_BattleStatus['prototype'][_0x3a1656(0x244)],Window_BattleStatus[_0x3a1656(0x217)][_0x3a1656(0x244)]=function(){const _0x1cba8c=_0x3a1656;this[_0x1cba8c(0x252)](),VisuMZ[_0x1cba8c(0x258)][_0x1cba8c(0x24d)][_0x1cba8c(0x208)](this);},Window_BattleStatus[_0x3a1656(0x217)]['_createWeaknessPopupContainer']=function(){const _0x456e47=_0x3a1656;this[_0x456e47(0x20b)]=new Sprite(),this[_0x456e47(0x236)](this[_0x456e47(0x20b)]);};