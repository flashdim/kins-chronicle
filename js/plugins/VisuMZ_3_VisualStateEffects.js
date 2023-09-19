//=============================================================================
// VisuStella MZ - Visual State Effects
// VisuMZ_3_VisualStateEffects.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_VisualStateEffects = true;

var VisuMZ = VisuMZ || {};
VisuMZ.VisualStateEffects = VisuMZ.VisualStateEffects || {};
VisuMZ.VisualStateEffects.version = 1.14;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.14] [VisualStateEffects]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Visual_State_Effects_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @base VisuMZ_1_SkillsStatesCore
 * @orderAfter VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_SkillsStatesCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * States, buffs, and debuffs are amongst one of the most important aspects of
 * the battle system. Therefore, relaying proper information to the player is
 * extremely important. RPG Maker MZ does relay information to the player about
 * the various states and effects, but it is far from perfect. This plugin
 * allows you to add more detail and visual effects regarding states to relay
 * proper data.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Choose to display State Overlays and State Icons over actors and enemies.
 * * Create text popups for Buffs, Debuffs, and States along with full control
 *   over their color, flash, and flash duration.
 * * Play animations upon receiving or removing Buffs, Debuffs, and States.
 * * States can have repeating animations.
 * * States can change the tone of a sprite.
 * * States can freeze a sprite in place.
 * * States can adjust the opacity of a battler to make them semi-transparent.
 * * Hovering effects that can be visibly applied to trait objects.
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
 * - VisuMZ_0_CoreEngine
 * - VisuMZ_1_BattleCore
 * - VisuMZ_1_SkillsStatesCore
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
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * State Motion Index and State Overlay Index
 * 
 * - The original RPG Maker MZ functions have been overwritten because they
 * only display the motions and overlays of the highest priority state even if
 * it does not have any motions while lower priority states with motions and
 * overlays will be hidden.
 * 
 * - The changed code will now take the highest priority state motion index (or
 * a custom one defined by a notetag) and the highest priority state overlay
 * index to show those instead.
 *
 * ---
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * === State-Related Notetags ===
 * 
 * The following notetags are made for states.
 * 
 * ---
 * 
 * <Hide State Popup>
 *
 * - Used for: State Notetags
 * - Don't display any of the popups for this state.
 * 
 * ---
 * 
 * <State Popup>
 *  text color: c
 *  flash color: r, g, b, a
 *  flash duration: d
 * </State Popup>
 *
 * - Used for: State Notetags
 * - Changes the settings of the state popup from the defaults declared by the
 *   Plugin Parameters. Each of the settings are optional. If the lines do not
 *   appear in the notetag, then the default values from the Plugin Parameters
 *   will be used instead.
 * - Replace 'c' #rrggbb for custom colors or insert a regular number for text
 *   colors from the Window Skin.
 * - Replace 'r', 'g', 'b', 'a' with number values ranging from 0 to 255 for
 *   'red', 'green', 'blue', and 'alpha' to determine the flash color.
 * - Replace 'd' with a number representing the amount of frames you want the
 *   flash duration to last for.
 * 
 * Examples:
 * 
 * <State Popup>
 *  text color: 3
 * </State Popup>
 * 
 * <State Popup>
 *  text color: #abcdef
 *  flash color: 255, 255, 0, 160
 * </State Popup>
 * 
 * <State Popup>
 *  flash color: 0, 255, 255, 160
 *  flash duration: 90
 * </State Popup>
 * 
 * <State Popup>
 *  flash duration: 777
 * </State Popup>
 * 
 * ---
 * 
 * <Add Animation: x>
 *
 * - Used for: State Notetags
 * - Determines the battle animation to play when the state is applied.
 * - Replace 'x' with a number representing the ID of the animation you wish
 *   to play when the state is added.
 * - This does not work for states without icons nor the death state.
 * 
 * ---
 * 
 * <Erase Animation: x>
 *
 * - Used for: State Notetags
 * - Determines the battle animation to play when the state is removed.
 * - Replace 'x' with a number representing the ID of the animation you wish
 *   to play when the state is removed.
 * - This does not work for states without icons nor the death state.
 * 
 * ---
 * 
 * <Repeat Animation: x>
 *
 * - Used for: State Notetags
 * - Determines the battle animation to play in intervals when the battler is
 *   affected by it.
 * - Replace 'x' with a number representing the ID of the animation you wish
 *   to play on repeat while the battler is affected by the state.
 * - The battler will cycle through the various repeating state animations
 *   available through states.
 * - NOTE: Using this with Passive State Conditions will make this effect
 *   update at the next battler refresh cycle. This is due to the effect
 *   being cached in order to prevent lag and overloading the engine.
 * - WARNING: Abusing Repeat Animations can jeopardize game performance.
 * 
 * ---
 * 
 * <Repeat Animation Cycle: x>
 *
 * - Used for: State Notetags
 * - Determines the cycle/duration of this specific state's repeating animation
 *   if you do not wish to use the plugin parameter's default setting.
 * - Replace 'x' with the number of frames you wish to play this animation for
 *   before moving onto the next animation.
 * - WARNING: Lower numbers can jeopardize game performance.
 * 
 * ---
 * 
 * <State Motion: Walk>
 * <State Motion: Wait>
 * <State Motion: Chant>
 * <State Motion: Guard>
 * <State Motion: Damage>
 * <State Motion: Evade>
 * <State Motion: Thrust>
 * <State Motion: Swing>
 * <State Motion: Missile>
 * <State Motion: Skill>
 * <State Motion: Spell>
 * <State Motion: Item>
 * <State Motion: Escape>
 * <State Motion: Victory>
 * <State Motion: Dying>
 * <State Motion: Abnormal>
 * <State Motion: Sleep>
 * <State Motion: Dead>
 *
 * - Used for: State Notetags
 * - Lets you determine what kind of state motion to play when the battler is
 *   affected by the state.
 * - The battler will only play the highest priority state motion.
 * - NOTE: Using this with Passive State Conditions will make this effect
 *   update at the next battler refresh cycle. This is due to the effect
 *   being cached in order to prevent lag and overloading the engine.
 * 
 * ---
 * 
 * <State Motion Lock>
 * 
 * - Used for: State Notetags
 * - If an actor or animated sideview enemy is affected by a state that has
 *   this notetag, their animation will be locked in place while this state
 *   is in effect.
 * - NOTE: Using this with Passive State Conditions will make this effect
 *   update at the next battler refresh cycle. This is due to the effect
 *   being cached in order to prevent lag and overloading the engine.
 * 
 * ---
 * 
 * <State Tone: red, green, blue, gray>
 *
 * - Used for: State Notetags
 * - Tints the battler with a tone determined by the state.
 * - Replace 'red', 'green', 'blue' with a value between -255 and 255.
 * - Replace 'gray' with a value between 0 and 255.
 * - If a battler has multiple states with tones, then the state with the
 *   highest priority value is applied to the battler.
 * - NOTE: Using this with Passive State Conditions will make this effect
 *   update at the next battler refresh cycle. This is due to the effect
 *   being cached in order to prevent lag and overloading the engine.
 * 
 * ---
 * 
 * <Visual Opacity: x>
 * <Visual Opacity: x%>
 * 
 * - Used for: State Notetags
 * - When a battler is affected by this state, change the opacity of their main
 *   battler sprite to 'x' or 'x%'.
 * - Replace 'x' with a number from 0 to 255 representing the opacity level.
 * - Replace 'x%' with a percentage from 0% to 100% representing the opacity.
 * - This does NOT affect UI elements like the HP Gauges, State Icons, or their
 *   positioning markers such as the battler's shadow as this is only to used
 *   to represent a change in their opacity through a state.
 * - To change the whole battler's opacity including everything from the UI
 *   elements, State Icons, etc., use the Action Sequence Plugin Command to
 *   visually alter the whole opacity level instead.
 * - The Visual Opacity level will compound with the opacity level adjusted by
 *   the Action Sequence Plugin Command. Keep this in mind when using both of
 *   them together.
 * - NOTE: Using this with Passive State Conditions will make this effect
 *   update at the next battler refresh cycle. This is due to the effect
 *   being cached in order to prevent lag and overloading the engine.
 * 
 * ---
 * 
 * <Visual Rainbow: +x>
 * <Visual Rainbow: -x>
 * 
 * - Used for: State Notetags
 * - When a battler is affected by this state, the battler has a colorful
 *   rainbow shifting effect.
 * - Replace 'x' with a number representing how fast the colors shift for the
 *   battler. Higher numbers are faster. Lower numbers are slower.
 * - This does NOT affect UI elements like the HP Gauges, State Icons, or their
 *   positioning markers such as the battler's shadow as this is only to used
 *   to represent a change in their opacity through a state.
 * - The Visual Rainbow shift will be stacked on top of any battlers/enemies
 *   that already have a hue change.
 * - NOTE: Using this with Passive State Conditions will make this effect
 *   update at the next battler refresh cycle. This is due to the effect
 *   being cached in order to prevent lag and overloading the engine.
 * 
 * ---
 *
 * === Hover-Related Notetags ===
 * 
 * ---
 * 
 * <Visual Hover Effect>
 *  Base: x
 *  Speed: y
 *  Rate: z
 *  Death: case
 * </Visual Hover Effect>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Creates a hover effect when tied to a trait object.
 * - The 'base' value determines the minimum height above the ground for the
 *   hover effect. Replace 'x' with a number representing the pixel height.
 * - The 'speed' value determines the flat adjustment towards the wobbling
 *   change. Replace 'y' with a number representing the speed. Lower values
 *   move faster while higher values move slower.
 * - The 'rate' determines the fluctuation rate when the hover effect bobbles
 *   up and down. Replace 'z' with a number representing the fluctuation rate.
 * - The 'death' scenario lets you decide if you want the hovering battler to
 *   remain hovering if they're dead or fall down to the floor. Replace 'case'
 *   with 'Hover' or 'Floor'.
 * - NOTE: Using this with Passive State Conditions will make this effect
 *   update at the next battler refresh cycle. This is due to the effect
 *   being cached in order to prevent lag and overloading the engine.
 * 
 * Example:
 * 
 * <Visual Hover Effect>
 *  Base: 100
 *  Speed: 20
 *  Rate: 5.0
 *  Death: floor
 * </Visual Hover Effect>
 * 
 * ---
 *
 * === Breathing-Related Notetags ===
 * 
 * The following notetags are purely EXPERIMENTAL. There is a high likelihood
 * of unintended graphical glitches when using them. Use them at your own risk.
 * 
 * ---
 * 
 * <Visual Breathing Effect>
 *  Speed: x
 *  Speed X: x
 *  Speed Y: x
 *  
 *  Rate: x.y
 *  Rate X: x.y
 *  Rate Y: x.y
 * 
 *  HP Link: On
 *  HP Link: Off
 * </Visual Breathing Effect>
 * 
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Creates a hover effect when tied to a trait object.
 * - The 'speed' value determines how long each cycle is.
 *   - When using 'Speed', this will apply to both 'Speed X' and 'Speed Y'
 *   - 'Speed X' refers to the horizontal breathing cycle
 *   - 'Speed Y' refers to the vertical breathing cycle
 *   - If not declared, both will default to a value of '10'
 * - The 'rate' value determines how exaggerated the breathing distortion looks
 *   for the affected target.
 *   - When using 'Rate', this will apply to both 'Rate X' and 'Rate Y
 *   - 'Rate X' refers to horizontal breathing distortion effect
 *   - 'Rate Y' refers to vertical breathing distortion effect
 *   - If not declared, 'Rate X' will default to 0.000 and 'Rate Y' to 0.020.
 * - HP Link refers to the breathing speed relative to the target's HP rate
 *   where the lower the rate, the slower the speed becomes.
 *   - 'On' means it's enabled.
 *   - 'Off' means it's disabled.
 *   - If not declared, this will default to 'OFF'
 * - NOTE: Using this with Passive State Conditions will make this effect
 *   update at the next battler refresh cycle. This is due to the effect
 *   being cached in order to prevent lag and overloading the engine.
 * 
 * Examples:
 * 
 * <Visual Breathing Effect>
 *  Speed: 10
 *  Rate Y: 0.050
 *  HP Link: On
 * </Visual Breathing Effect>
 * 
 * <Visual Breathing Effect>
 *  Speed X: 15
 *  Speed Y: 10
 *  Rate X: 0.01
 *  Rate Y: 0.050
 * </Visual Breathing Effect>
 * 
 * ---
 * 
 * <No Breathing>
 * 
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Removes any breathing effects for the affected target.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General settings for Visual State Effects.
 *
 * ---
 *
 * Actors
 * 
 *   Show State Overlay?:
 *   - Show state overlays over an actor's head?
 * 
 *   Show State Icons?:
 *   - Show state icons over an actor's head?
 *
 * ---
 *
 * Enemies
 * 
 *   Show State Overlay?:
 *   - Show state overlays over an enemy's head?
 * 
 *   Show State Icons?:
 *   - Show state icons over an enemy's head?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Buff/Debuff Settings Settings
 * ============================================================================
 *
 * Buff/Debuff settings for Visual State Effects.
 *
 * ---
 *
 * Popups
 * 
 *   Show Popups?:
 *   - Show Buff/Debuff Popups when applied?
 * 
 *     Buff Format:
 *     - How do you want the buff text to appear?
 *     - %1 - Parameter Name
 * 
 *       Text Color:
 *       - Use #rrggbb for custom colors or regular numbers for text colors
 *         from the Window Skin.
 * 
 *       Flash Color:
 *       - Adjust the popup's flash color.
 *       - Format: [red, green, blue, alpha]
 * 
 *       Flash Duration:
 *       - What is the frame duration of the flash effect?
 * 
 *     Debuff Format:
 *     - How do you want the debuff text to appear?
 *     - %1 - Parameter Name
 * 
 *       Text Color:
 *       - Use #rrggbb for custom colors or regular numbers for text colors
 *         from the Window Skin.
 * 
 *       Flash Color:
 *       - Adjust the popup's flash color.
 *       - Format: [red, green, blue, alpha]
 * 
 *       Flash Duration:
 *       - What is the frame duration of the flash effect?
 * 
 * ---
 * 
 * Animations
 * 
 *   Show Animations?:
 *   - Show Buff/Debuff Animations when applied?
 * 
 *     Mirror Animations?:
 *     - Mirror animations for buffs/debuffs?
 * 
 *     Mute Animations?:
 *     - Mute animations for buffs/debuffs?
 * 
 * ---
 * 
 * Buff Animations
 * 
 *   MaxHP Buff:
 *   MaxMP Buff:
 *   ATK Buff:
 *   DEF Buff:
 *   MAT Buff:
 *   MDF Buff:
 *   AGI Buff:
 *   LUK Buff:
 *   - Animation played when applying specific Buffs.
 * 
 * Debuff Animations
 * 
 *   MaxHP Debuff:
 *   MaxMP Debuff:
 *   ATK Debuff:
 *   DEF Debuff:
 *   MAT Debuff:
 *   MDF Debuff:
 *   AGI Debuff:
 *   LUK Debuff:
 *   - Animation played when applying specific Debuff.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: State Settings
 * ============================================================================
 *
 * Default State settings for Visual State Effects.
 *
 * ---
 *
 * Popups
 * 
 *   Show Popups?:
 *   - Show States Popups when applied and removed?
 * 
 *     Add State Format:
 *     - How do you want added states to appear?
 *     - %1 - State Name
 * 
 *     Erase State Format:
 *     - How do you want erased states to appear?
 *     - %1 - State Name
 * 
 *     Default Text Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *       Match Turn Count?:
 *       - Match turn count color by default?
 * 
 *     Flash Color:
 *     - Adjust the popup's default flash color.
 *     - Format: [red, green, blue, alpha]
 * 
 *       Flash Duration:
 *       - What is the frame duration of the default flash effect?
 *
 * ---
 *
 * State Animations
 * 
 *   Add/Erase Animations
 * 
 *     Mirror Animations?:
 *     - Mirror animations for states?
 * 
 *     Mute Animations?:
 *     - Mute animations for states?
 * 
 *   Repeating Animations
 * 
 *     Cycle Time:
 *     - The amount of frames to wait before each animation cycle.
 *     - WARNING: Lower numbers can jeopardize game performance.
 * 
 *     Mirror Animations?:
 *     - Mirror repeating animations for states by default?
 * 
 *     Mute Animations?:
 *     - Mute repeating animations for states by default?
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
 * Version 1.14: July 2, 2021
 * * Feature Updates!
 * ** When a battler's sprite opacity is zero, repeating animations are hidden
 *    along with them. Update made by Arisu.
 * 
 * Version 1.13: June 18, 2021
 * * Bug Fixes!
 * ** Repeating animations no longer play on invisible enemies or dead enemies
 *    through passive state effects. Fix made by Arisu.
 * 
 * Version 1.12: June 11, 2021
 * * Documentation Update!
 * ** Added warnings for the following notetags by Irina:
 * *** <Repeat Animation: x>
 * *** <State Motion: x>
 * *** <State Motion Lock>
 * *** <Visual Opacity: x>
 * *** <Visual Rainbow: +/-x>
 * *** <Visual Hover Effect>
 * *** <Visual Breathing Effect>
 * **** NOTE: Using this with Passive State Conditions will make this effect
 *      update at the next battler refresh cycle. This is due to the effect
 *      being cached in order to prevent lag and overloading the engine.
 * 
 * Version 1.11: May 21, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Irina:
 * *** <Visual Breathing Effect>
 * *** <No Breathing>
 * **** Enables/disables breathing effects for your actors and/or enemies.
 *      Refer to the documentation for more details on how to set it up.
 * **** These are EXPERIMENTAL notetags. This means that these effects have the
 *      possibility of creating graphical glitches when used. Use at your own
 *      risk as these are not perfected features.
 * 
 * Version 1.10: January 1, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Yanfly.
 * *** <Visual Rainbow: +x> and <Visual Rainbow: -x>
 * 
 * Version 1.09: December 25, 2020
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Yanfly.
 * *** <Visual Opacity: x> and <Visual Opacity: x%>
 * 
 * Version 1.08: December 18, 2020
 * * Bug Fixes!
 * ** RPG Maker MV animations will no longer crash for unplayable sound
 *    effects. Requires updated Core Engine. Fix made by Yanfly.
 * 
 * Version 1.07: November 22, 2020
 * * Bug Fixes!
 * ** <State Motion: x> now works for sideview enemies. Keep in mind the state
 *    motion does not apply to the active battler during the Input phase. Fix
 *    made by Yanfly.
 * 
 * Version 1.06: November 8, 2020
 * * Bug Fixes!
 * ** <Add Animation: x> and <Erase Animation: x> notetags now work properly.
 *    Fix by Arisu.
 * 
 * Version 1.05: November 1, 2020
 * * Feature Update!
 * ** Upon dying, state removal popups are no longer shown to prevent massive
 *    clutter of the screen. Update by Irina.
 * 
 * Version 1.04: October 25, 2020
 * * Bug Fixes!
 * ** Zooming in should no longer display faint outlines around state sprites.
 *    Fix made by Arisu.
 * * Compatibility Update
 * ** Added compatibility with the Battle Core's new <Battler Sprite Grounded>
 *    notetag. Added by Irina.
 * 
 * Version 1.03: October 11, 2020
 * * Bug Fixes!
 * ** Motion Locked Battlers at the start of battle no longer show their entire
 *    sprite sheet. Fix made by Arisu.
 * 
 * Version 1.02: September 13, 2020
 * * Compatibility Update
 * ** Added compatibility with Battle Core's newest update for the new
 *    distortion effects.
 * 
 * Version 1.01: September 6, 2020
 * * Compatibility Update
 * ** Added compatibility with Battle Core's newest update for the
 *    <Battle UI Offset: +x, +y> notetags. Update made by Yanfly.
 *
 * Version 1.00: September 2, 2020
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
 * @param VisualStateEffects
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
 * @desc General settings for Visual State Effects.
 * @default {"Actors":"","ActorOverlay:eval":"true","ActorStateIcon:eval":"true","Enemies":"","EnemyOverlay:eval":"true","EnemyStateIcon:eval":"true"}
 *
 * @param BuffDebuff:struct
 * @text Buff/Debuff Settings
 * @type struct<BuffDebuff>
 * @desc Buff/Debuff settings for Visual State Effects.
 * @default {"ShowPopups:eval":"true","BuffPopupFmt:str":"%1▲","BuffTextColor:str":"24","BuffFlashColor:eval":"[0, 255, 0, 160]","BuffFlashDuration:num":"60","DebuffPopupFmt:str":"%1▼","DebuffTextColor:str":"27","DebuffFlashColor:eval":"[255, 0, 0, 160]","DebuffFlashDuration:num":"60","ShowAnimations:eval":"true","AnimationMirror:eval":"false","AnimationMute:eval":"false","BuffAnimations":"","Buff0Animation:num":"52","Buff1Animation:num":"53","Buff2Animation:num":"52","Buff3Animation:num":"52","Buff4Animation:num":"53","Buff5Animation:num":"53","Buff6Animation:num":"51","Buff7Animation:num":"51","DebuffAnimations":"","Debuff0Animation:num":"55","Debuff1Animation:num":"56","Debuff2Animation:num":"55","Debuff3Animation:num":"55","Debuff4Animation:num":"56","Debuff5Animation:num":"56","Debuff6Animation:num":"54","Debuff7Animation:num":"54"}
 *
 * @param State:struct
 * @text State Defaults
 * @type struct<State>
 * @desc Default State settings for Visual State Effects.
 * @default {"ShowPopups:eval":"true","AddPopupFmt:str":"+%1","ErasePopupFmt:str":"-%1","TextColor:str":"0","MatchTurnCountColor:eval":"true","FlashColor:eval":"[0, 0, 0, 0]","FlashDuration:num":"60","StateAnimations":"","AddEraseAnimations":"","AnimationMirror:eval":"false","AnimationMute:eval":"false","RepeatingAnimations":"","CycleTime:num":"300","RepeatMirror:eval":"false","RepeatMute:eval":"true"}
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
 * @param Actors
 *
 * @param ActorOverlay:eval
 * @text Show State Overlay?
 * @parent Actors
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show state overlays over an actor's head?
 * @default true
 *
 * @param ActorStateIcon:eval
 * @text Show State Icons?
 * @parent Actors
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show state icons over an actor's head?
 * @default true
 *
 * @param Enemies
 *
 * @param EnemyOverlay:eval
 * @text Show State Overlay?
 * @parent Enemies
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show state overlays over an enemy's head?
 * @default true
 *
 * @param EnemyStateIcon:eval
 * @text Show State Icons?
 * @parent Enemies
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show state icons over an enemy's head?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Buff/Debuff Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~BuffDebuff:
 *
 * @param ShowPopups:eval
 * @text Show Popups?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show Buff/Debuff Popups when applied?
 * @default true
 *
 * @param BuffPopupFmt:str
 * @text Buff Format
 * @parent ShowPopups:eval
 * @desc How do you want the buff text to appear?
 * %1 - Parameter Name
 * @default %1▲
 *
 * @param BuffTextColor:str
 * @text Text Color
 * @parent BuffPopupFmt:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 *
 * @param BuffFlashColor:eval
 * @text Flash Color
 * @parent BuffPopupFmt:str
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [0, 255, 0, 160]
 * 
 * @param BuffFlashDuration:num
 * @text Flash Duration
 * @parent BuffPopupFmt:str
 * @type Number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 * @param DebuffPopupFmt:str
 * @text Debuff Format
 * @parent ShowPopups:eval
 * @desc How do you want the debuff text to appear?
 * %1 - Parameter Name
 * @default %1▼
 *
 * @param DebuffTextColor:str
 * @text Text Color
 * @parent DebuffPopupFmt:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param DebuffFlashColor:eval
 * @text Flash Color
 * @parent DebuffPopupFmt:str
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 0, 0, 160]
 * 
 * @param DebuffFlashDuration:num
 * @text Flash Duration
 * @parent DebuffPopupFmt:str
 * @type Number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 * @param ShowAnimations:eval
 * @text Show Animations?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show Buff/Debuff Animations when applied?
 * @default true
 *
 * @param AnimationMirror:eval
 * @text Mirror Animations?
 * @parent ShowAnimations:eval
 * @type boolean
 * @on Mirror
 * @off Don't
 * @desc Mirror animations for buffs/debuffs?
 * @default false
 *
 * @param AnimationMute:eval
 * @text Mute Animations?
 * @parent ShowAnimations:eval
 * @type boolean
 * @on Mute
 * @off Don't
 * @desc Mute animations for buffs/debuffs?
 * @default false
 * 
 * @param BuffAnimations
 * @text Buff Animations
 * @parent ShowAnimations:eval
 *
 * @param Buff0Animation:num
 * @text MaxHP Buff
 * @parent BuffAnimations
 * @type animation
 * @desc Animation played when applying MaxHP Buffs.
 * @default 52
 *
 * @param Buff1Animation:num
 * @text MaxMP Buff
 * @parent BuffAnimations
 * @type animation
 * @desc Animation played when applying MaxMP Buffs.
 * @default 53
 *
 * @param Buff2Animation:num
 * @text ATK Buff
 * @parent BuffAnimations
 * @type animation
 * @desc Animation played when applying ATK Buffs.
 * @default 52
 *
 * @param Buff3Animation:num
 * @text DEF Buff
 * @parent BuffAnimations
 * @type animation
 * @desc Animation played when applying DEF Buffs.
 * @default 52
 *
 * @param Buff4Animation:num
 * @text MAT Buff
 * @parent BuffAnimations
 * @type animation
 * @desc Animation played when applying MAT Buffs.
 * @default 53
 *
 * @param Buff5Animation:num
 * @text MDF Buff
 * @parent BuffAnimations
 * @type animation
 * @desc Animation played when applying MDF Buffs.
 * @default 53
 *
 * @param Buff6Animation:num
 * @text AGI Buff
 * @parent BuffAnimations
 * @type animation
 * @desc Animation played when applying AGI Buffs.
 * @default 51
 *
 * @param Buff7Animation:num
 * @text LUK Buff
 * @parent BuffAnimations
 * @type animation
 * @desc Animation played when applying LUK Buffs.
 * @default 51
 * 
 * @param DebuffAnimations
 * @text Debuff Animations
 * @parent ShowAnimations:eval
 *
 * @param Debuff0Animation:num
 * @text MaxHP Debuff
 * @parent DebuffAnimations
 * @type animation
 * @desc Animation played when applying MaxHP Debuffs.
 * @default 55
 *
 * @param Debuff1Animation:num
 * @text MaxMP Debuff
 * @parent DebuffAnimations
 * @type animation
 * @desc Animation played when applying MaxMP Debuffs.
 * @default 56
 *
 * @param Debuff2Animation:num
 * @text ATK Debuff
 * @parent DebuffAnimations
 * @type animation
 * @desc Animation played when applying ATK Debuffs.
 * @default 55
 *
 * @param Debuff3Animation:num
 * @text DEF Debuff
 * @parent DebuffAnimations
 * @type animation
 * @desc Animation played when applying DEF Debuffs.
 * @default 55
 *
 * @param Debuff4Animation:num
 * @text MAT Debuff
 * @parent DebuffAnimations
 * @type animation
 * @desc Animation played when applying MAT Debuffs.
 * @default 56
 *
 * @param Debuff5Animation:num
 * @text MDF Debuff
 * @parent DebuffAnimations
 * @type animation
 * @desc Animation played when applying MDF Debuffs.
 * @default 56
 *
 * @param Debuff6Animation:num
 * @text AGI Debuff
 * @parent DebuffAnimations
 * @type animation
 * @desc Animation played when applying AGI Debuffs.
 * @default 54
 *
 * @param Debuff7Animation:num
 * @text LUK Debuff
 * @parent DebuffAnimations
 * @type animation
 * @desc Animation played when applying LUK Debuffs.
 * @default 54
 *
 */
/* ----------------------------------------------------------------------------
 * State Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~State:
 *
 * @param ShowPopups:eval
 * @text Show Popups?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show States Popups when applied and removed?
 * @default true
 *
 * @param AddPopupFmt:str
 * @text Add State Format
 * @parent ShowPopups:eval
 * @desc How do you want added states to appear?
 * %1 - State Name
 * @default +%1
 *
 * @param ErasePopupFmt:str
 * @text Erase State Format
 * @parent ShowPopups:eval
 * @desc How do you want erased states to appear?
 * %1 - State Name
 * @default -%1
 *
 * @param TextColor:str
 * @text Default Text Color
 * @parent ShowPopups:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param MatchTurnCountColor:eval
 * @text Match Turn Count?
 * @parent TextColor:str
 * @type boolean
 * @on Match
 * @off Don't
 * @desc Match turn count color by default?
 * @default true
 *
 * @param FlashColor:eval
 * @text Flash Color
 * @parent ShowPopups:eval
 * @desc Adjust the popup's default flash color.
 * Format: [red, green, blue, alpha]
 * @default [0, 0, 0, 0]
 * 
 * @param FlashDuration:num
 * @text Flash Duration
 * @parent FlashColor:eval
 * @type Number
 * @desc What is the frame duration of the default flash effect?
 * @default 60
 * 
 * @param StateAnimations
 * @text State Animations
 * 
 * @param AddEraseAnimations
 * @text Add/Erase Animations
 * @parent StateAnimations
 *
 * @param AnimationMirror:eval
 * @text Mirror Animations?
 * @parent AddEraseAnimations
 * @type boolean
 * @on Mirror
 * @off Don't
 * @desc Mirror animations for states?
 * @default false
 *
 * @param AnimationMute:eval
 * @text Mute Animations?
 * @parent AddEraseAnimations
 * @type boolean
 * @on Mute
 * @off Don't
 * @desc Mute animations for states?
 * @default false
 * 
 * @param RepeatingAnimations
 * @text Repeating Animations
 * @parent StateAnimations
 *
 * @param CycleTime:num
 * @text Cycle Time
 * @parent RepeatingAnimations
 * @type number
 * @min 1
 * @desc The amount of frames to wait before each animation cycle.
 * WARNING: Lower numbers can jeopardize game performance.
 * @default 300
 *
 * @param RepeatMirror:eval
 * @text Mirror Animations?
 * @parent RepeatingAnimations
 * @type boolean
 * @on Mirror
 * @off Don't
 * @desc Mirror repeating animations for states by default?
 * @default false
 *
 * @param RepeatMute:eval
 * @text Mute Animations?
 * @parent RepeatingAnimations
 * @type boolean
 * @on Mute
 * @off Don't
 * @desc Mute repeating animations for states by default?
 * @default true
 *
 */
//=============================================================================

const _0x105c=['IconSet','GQzON','_cache','Sprite_Enemy_createStateIconSprite','toUpperCase','8NiMUJj','split','sGUfr','TNXng','isInputting','Game_BattlerBase_decreaseBuff','2656414jBeBZg','ShowAnimations','battler','animation','setup','%1FlashDuration','isDead','isSceneBattle','ICON_BUFF_START','FZeel','xdnsP','Sprite_Actor_refreshMotion','Sprite_Battler_extraPositionY','updateFrame','CycleTime','_actor','parameters','_svBattlerSprite','applyBreathingScaleX','BGOSO','ARRAYJSON','YGoDI','RepeatMute','AnimationMirror','updateVisualStateTone','543748nkYyzL','visualRepeatingStateAniCycle','visualRepeatingStateAnimation','hoverData','timeScale','_breathingRand','isEnemy','PxrWq','_stateIconSprite','Game_BattlerBase_refresh','ICON_DEBUFF_START','stateMotionIndex','min','isAlive','push','ARRAYSTRUCT','hpLinked','zqzYX','refresh','floor','onAddState','traitObjects','setColorTone','addChild','textColor','General','setupIconTextPopup','name','setBattler','QTqMY','_distortionSprite','updateVisualStateEffectsIcons','round','_visualStateAnimationRepeatDuration','_mainSprite','match','_frame','startMotion','_dragonbonesSpriteContainer','increaseBuff','wDnYm','trim','siUAu','description','_hoverRand','RepeatMirror','qQTxP','decreaseBuff','getStateOverlayIndex','toLowerCase','Sprite_Battler_mainSpriteScaleX','mainSpriteScaleX','qtUMp','updateVisualStateRainbow','YiFbY','refreshMotion','applyBreathingCalculations','kxbGo','%1FlashColor','updateVisualStateEffectsOverlay','Game_BattlerBase_increaseBuff','constructor','GeMIL','updateDistortionOpacity','smooth','uHZNk','VisuMZ_0_CoreEngine','mslPa','nLGha','Sprite_Battler_initMembers','map','updateOpacity','flashColor','getVisualRepeatingStateAnimationCycle','475779MQOUWB','rateY','clamp','Sprite_SvEnemy_refreshMotion','initVisualHoverEffect','exit','requestFauxAnimation','UxAci','Sprite_Actor_createStateSprite','visualStateRainbow','SUAIb','motion','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','FNDnh','overlay','jebLi','format','states','checkCacheKey','iQvLr','gddZi','MhwUG','isRepeatingVisualStateAnimationShown','prototype','rate','initMembers','vkDyh','createVisualStateTone','update','Buff','yNazi','setupBuffDebuffPopup','customizeStatePopup','createVisualRepeatingStateAnimationCycle','OtZaK','cos','length','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','setupVisualBuffDebuffEffect','rateX','setupVisualStateEffectsPopup','cNYnT','bind','ARRAYSTR','random','Game_Battler_onRemoveState','call','eJKoI','EnemyStateIcon','ARRAYEVAL','battleUIOffsetY','ounxT','977751aFZTiQ','hasSvBattler','setupVisualStateEffect','createVisualBattlerOpacity','createVisualRepeatingStateAnimation','Game_Battler_onAddState','isSpriteVisible','Add','createStateSprite','loadSystem','updateVisualStateEffects','OaaPn','updateDragonbonesTimeScale','visualStateToneTargetSprite','initVisualStateEffects','pRCKj','isStateAffected','_customStateMotion','JxDZf','GzeZm','height','ShowPopups','return\x200','bitmap','stateMotionLock','Sprite_Battler_updateDragonbonesTimeScale','width','UEQtl','Settings','visualBattlerOpacity','frameCount','setHue','flashDuration','scale','status','KOLgh','ConvertParams','State','Sprite_Enemy_setBattler','note','parse','mmTiy','emmqR','onRemoveState','hoverHeight','param','iconIndex','visualStateTone','noBreathing','%1PopupFmt','zhmIt','BuffDebuff','qGJFf','VisuMZ_1_SkillsStatesCore','createStateIconSprite','YcYXM','applyBreathingScaleY','deathHover','opacity','_hoverMinimum','includes','VisuMZ_1_BattleCore','Sprite_Enemy_update','base','1044566PPDpkt','_hue','breathing','%1TextColor','Sprite_Battler_mainSpriteScaleY','setupStateAnimation','addLoadListener','NUM','getVisualStateTone','speedX','hSdBK','686367uQDIfH','stateOverlayIndex','HaUzG','deathStateId','ugVod','Sprite_Battler_updateOpacity','_stateMotionLocked','randomInt','AnimationMute','isActing','Erase','isBattlerGrounded','mainSpriteScaleY','hover','Game_BattlerBase_die','_dragonbones','max','mwLJG','createVisualBreathingData','breathingData','VisualStateEffects','extraPositionY','%1%2Animation','Sprite_SvEnemy','76087QCktwB','createVisualStateRainbow','visible','Sprite_Actor_setBattler','_stateSprite','getVisualRepeatingStateAnimation','die','_visualStateAnimationIndex','speed','_die_bypass_visualStateEffects','Debuff','_battler','getStateMotionLock','getStateMotionIndex','updateRepeatingVisualStateAnimation','speedY','Game_BattlerBase_initMembers'];function _0x4f35(_0x107f9b,_0x235d66){return _0x4f35=function(_0x105cae,_0x4f35b3){_0x105cae=_0x105cae-0x115;let _0x35d1dd=_0x105c[_0x105cae];return _0x35d1dd;},_0x4f35(_0x107f9b,_0x235d66);}const _0x33ef71=_0x4f35;(function(_0x38e4d6,_0x1a7085){const _0x2b09ea=_0x4f35;while(!![]){try{const _0x1a78c6=-parseInt(_0x2b09ea(0x13b))*parseInt(_0x2b09ea(0x151))+-parseInt(_0x2b09ea(0x1ba))+parseInt(_0x2b09ea(0x123))+parseInt(_0x2b09ea(0x170))+-parseInt(_0x2b09ea(0x1ee))+-parseInt(_0x2b09ea(0x118))+parseInt(_0x2b09ea(0x157));if(_0x1a78c6===_0x1a7085)break;else _0x38e4d6['push'](_0x38e4d6['shift']());}catch(_0x1746d1){_0x38e4d6['push'](_0x38e4d6['shift']());}}}(_0x105c,0xbe5d9));var label=_0x33ef71(0x137),tier=tier||0x0,dependencies=[_0x33ef71(0x1b2),_0x33ef71(0x115),_0x33ef71(0x223)],pluginData=$plugins['filter'](function(_0xfd42e){const _0x5c3236=_0x33ef71;return _0xfd42e[_0x5c3236(0x210)]&&_0xfd42e[_0x5c3236(0x19b)][_0x5c3236(0x22a)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0x33ef71(0x20a)]||{},VisuMZ[_0x33ef71(0x212)]=function(_0x3b4d21,_0x1108c3){const _0x3c9fb4=_0x33ef71;for(const _0x5bfdb3 in _0x1108c3){if(_0x3c9fb4(0x1fd)==='DPlfK'){if(this[_0x3c9fb4(0x129)])return;this[_0x3c9fb4(0x129)]=this[_0x3c9fb4(0x192)]['_frame'][_0x3c9fb4(0x208)]>0x0;}else{if(_0x5bfdb3['match'](/(.*):(.*)/i)){const _0x36068e=String(RegExp['$1']),_0x53dbde=String(RegExp['$2'])[_0x3c9fb4(0x150)]()[_0x3c9fb4(0x199)]();let _0x323c35,_0x590914,_0x37af4d;switch(_0x53dbde){case _0x3c9fb4(0x11f):_0x323c35=_0x1108c3[_0x5bfdb3]!==''?Number(_0x1108c3[_0x5bfdb3]):0x0;break;case'ARRAYNUM':_0x590914=_0x1108c3[_0x5bfdb3]!==''?JSON['parse'](_0x1108c3[_0x5bfdb3]):[],_0x323c35=_0x590914[_0x3c9fb4(0x1b6)](_0x5b1f33=>Number(_0x5b1f33));break;case'EVAL':_0x323c35=_0x1108c3[_0x5bfdb3]!==''?eval(_0x1108c3[_0x5bfdb3]):null;break;case _0x3c9fb4(0x1eb):_0x590914=_0x1108c3[_0x5bfdb3]!==''?JSON[_0x3c9fb4(0x216)](_0x1108c3[_0x5bfdb3]):[],_0x323c35=_0x590914[_0x3c9fb4(0x1b6)](_0x276e1a=>eval(_0x276e1a));break;case'JSON':_0x323c35=_0x1108c3[_0x5bfdb3]!==''?JSON[_0x3c9fb4(0x216)](_0x1108c3[_0x5bfdb3]):'';break;case _0x3c9fb4(0x16b):_0x590914=_0x1108c3[_0x5bfdb3]!==''?JSON[_0x3c9fb4(0x216)](_0x1108c3[_0x5bfdb3]):[],_0x323c35=_0x590914[_0x3c9fb4(0x1b6)](_0x5f5d9c=>JSON[_0x3c9fb4(0x216)](_0x5f5d9c));break;case'FUNC':_0x323c35=_0x1108c3[_0x5bfdb3]!==''?new Function(JSON[_0x3c9fb4(0x216)](_0x1108c3[_0x5bfdb3])):new Function(_0x3c9fb4(0x204));break;case'ARRAYFUNC':_0x590914=_0x1108c3[_0x5bfdb3]!==''?JSON[_0x3c9fb4(0x216)](_0x1108c3[_0x5bfdb3]):[],_0x323c35=_0x590914[_0x3c9fb4(0x1b6)](_0x196be6=>new Function(JSON[_0x3c9fb4(0x216)](_0x196be6)));break;case'STR':_0x323c35=_0x1108c3[_0x5bfdb3]!==''?String(_0x1108c3[_0x5bfdb3]):'';break;case _0x3c9fb4(0x1e5):_0x590914=_0x1108c3[_0x5bfdb3]!==''?JSON[_0x3c9fb4(0x216)](_0x1108c3[_0x5bfdb3]):[],_0x323c35=_0x590914['map'](_0x29c91c=>String(_0x29c91c));break;case'STRUCT':_0x37af4d=_0x1108c3[_0x5bfdb3]!==''?JSON['parse'](_0x1108c3[_0x5bfdb3]):{},_0x323c35=VisuMZ[_0x3c9fb4(0x212)]({},_0x37af4d);break;case _0x3c9fb4(0x17f):_0x590914=_0x1108c3[_0x5bfdb3]!==''?JSON[_0x3c9fb4(0x216)](_0x1108c3[_0x5bfdb3]):[],_0x323c35=_0x590914['map'](_0x22791d=>VisuMZ[_0x3c9fb4(0x212)]({},JSON['parse'](_0x22791d)));break;default:continue;}_0x3b4d21[_0x36068e]=_0x323c35;}}}return _0x3b4d21;},(_0x331248=>{const _0x327beb=_0x33ef71,_0x2eadaa=_0x331248['name'];for(const _0x2260b1 of dependencies){if(_0x327beb(0x1ae)!==_0x327beb(0x181)){if(!Imported[_0x2260b1]){alert(_0x327beb(0x1df)[_0x327beb(0x1ca)](_0x2eadaa,_0x2260b1)),SceneManager[_0x327beb(0x1bf)]();break;}}else{if(!this['isRepeatingVisualStateAnimationShown']())return;if(this[_0x327beb(0x191)]>0x0){this['_visualStateAnimationRepeatDuration']--;return;}const _0x4ed96c=this[_0x327beb(0x146)][_0x327beb(0x140)](),_0x27b18c=this['_battler'][_0x327beb(0x1b9)]();if(_0x4ed96c[_0x327beb(0x1de)]<=0x0)return;this[_0x327beb(0x142)]>=_0x4ed96c[_0x327beb(0x1de)]&&(this['_visualStateAnimationIndex']=0x0);const _0x5605e9=_0x4ed96c[this['_visualStateAnimationIndex']],_0x48b9d6=_0x2c80eb['VisualStateEffects']['Settings'][_0x327beb(0x213)],_0x43681c=[this[_0x327beb(0x146)]],_0x573d72=_0x48b9d6['RepeatMirror'],_0x524e9a=_0x48b9d6[_0x327beb(0x16d)];_0x3a30f2[_0x327beb(0x1c0)](_0x43681c,_0x5605e9,_0x573d72,_0x524e9a);const _0x45df62=_0x27b18c[this[_0x327beb(0x142)]]||_0x48b9d6[_0x327beb(0x165)];this[_0x327beb(0x191)]=_0x45df62,this[_0x327beb(0x142)]++;}}const _0x28b133=_0x331248[_0x327beb(0x19b)];if(_0x28b133[_0x327beb(0x193)](/\[Version[ ](.*?)\]/i)){if(_0x327beb(0x218)===_0x327beb(0x218)){const _0x5887dc=Number(RegExp['$1']);if(_0x5887dc!==VisuMZ[label]['version']){if('eJKoI'!==_0x327beb(0x1e9)){if(!_0x1e0cf3[_0x327beb(0x155)]()&&!_0x207824[_0x327beb(0x12c)]())return this[_0x327beb(0x195)](_0x4406bd[_0x327beb(0x1ff)]);}else alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x327beb(0x1ca)](_0x2eadaa,_0x5887dc)),SceneManager[_0x327beb(0x1bf)]();}}else{let _0x2431d8=_0x1bf664[_0x327beb(0x137)][_0x327beb(0x163)][_0x327beb(0x1e8)](this);return _0x2431d8-=_0x153652[_0x327beb(0x183)](this[_0x327beb(0x21a)]()),_0x2431d8;}}if(_0x28b133[_0x327beb(0x193)](/\[Tier[ ](\d+)\]/i)){const _0x2eb0fc=Number(RegExp['$1']);_0x2eb0fc<tier?_0x327beb(0x1d8)==='INpFo'?(this['_stateIconSprite']&&this['updateVisualStateEffectsIcons'](),this[_0x327beb(0x13f)]&&this[_0x327beb(0x1ab)](),this[_0x327beb(0x149)](),this[_0x327beb(0x16f)](),this[_0x327beb(0x1a5)]()):(alert(_0x327beb(0x1c6)[_0x327beb(0x1ca)](_0x2eadaa,_0x2eb0fc,tier)),SceneManager['exit']()):tier=Math[_0x327beb(0x133)](_0x2eb0fc,tier);}VisuMZ['ConvertParams'](VisuMZ[label][_0x327beb(0x20a)],_0x331248[_0x327beb(0x167)]);})(pluginData),VisuMZ[_0x33ef71(0x137)]['Game_BattlerBase_initMembers']=Game_BattlerBase[_0x33ef71(0x1d1)][_0x33ef71(0x1d3)],Game_BattlerBase[_0x33ef71(0x1d1)][_0x33ef71(0x1d3)]=function(){const _0x23f61d=_0x33ef71;this[_0x23f61d(0x14e)]={},VisuMZ[_0x23f61d(0x137)][_0x23f61d(0x14b)]['call'](this);},VisuMZ[_0x33ef71(0x137)][_0x33ef71(0x179)]=Game_BattlerBase[_0x33ef71(0x1d1)]['refresh'],Game_BattlerBase[_0x33ef71(0x1d1)][_0x33ef71(0x182)]=function(){const _0x3ad22e=_0x33ef71;this['_cache']={},VisuMZ[_0x3ad22e(0x137)][_0x3ad22e(0x179)][_0x3ad22e(0x1e8)](this);},Game_BattlerBase[_0x33ef71(0x1d1)][_0x33ef71(0x1cc)]=function(_0x313193){const _0x26f0d0=_0x33ef71;return this[_0x26f0d0(0x14e)]=this[_0x26f0d0(0x14e)]||{},this[_0x26f0d0(0x14e)][_0x313193]!==undefined;},VisuMZ[_0x33ef71(0x137)][_0x33ef71(0x1ac)]=Game_BattlerBase[_0x33ef71(0x1d1)][_0x33ef71(0x197)],Game_BattlerBase[_0x33ef71(0x1d1)][_0x33ef71(0x197)]=function(_0x552fb2){const _0x9ddb15=_0x33ef71;VisuMZ['VisualStateEffects'][_0x9ddb15(0x1ac)][_0x9ddb15(0x1e8)](this,_0x552fb2),this[_0x9ddb15(0x1e0)](_0x552fb2,!![]);},VisuMZ[_0x33ef71(0x137)][_0x33ef71(0x156)]=Game_BattlerBase[_0x33ef71(0x1d1)][_0x33ef71(0x19f)],Game_BattlerBase[_0x33ef71(0x1d1)][_0x33ef71(0x19f)]=function(_0x151db4){const _0x456121=_0x33ef71;VisuMZ[_0x456121(0x137)][_0x456121(0x156)][_0x456121(0x1e8)](this,_0x151db4),this[_0x456121(0x1e0)](_0x151db4,![]);},Game_BattlerBase[_0x33ef71(0x1d1)]['setupVisualBuffDebuffEffect']=function(_0x58ce7e,_0x36cb18){const _0x2a0c0b=_0x33ef71;if(!SceneManager[_0x2a0c0b(0x15e)]())return;if(!this[_0x2a0c0b(0x159)]())return;const _0x3310f6=VisuMZ['VisualStateEffects'][_0x2a0c0b(0x20a)]['BuffDebuff'],_0x2d96f2=_0x36cb18?_0x2a0c0b(0x1d7):_0x2a0c0b(0x145);_0x3310f6[_0x2a0c0b(0x203)]&&this[_0x2a0c0b(0x159)]()[_0x2a0c0b(0x1d9)](_0x58ce7e,_0x36cb18);if(_0x3310f6[_0x2a0c0b(0x158)]){const _0x5d6acd=[this],_0x55b1b3=_0x3310f6[_0x2a0c0b(0x139)[_0x2a0c0b(0x1ca)](_0x2d96f2,_0x58ce7e)]||0x0,_0x179df0=_0x3310f6['AnimationMirror'],_0x251eda=_0x3310f6[_0x2a0c0b(0x12b)];$gameTemp['requestFauxAnimation'](_0x5d6acd,_0x55b1b3,_0x179df0,_0x251eda);}},Game_BattlerBase['prototype'][_0x33ef71(0x1f0)]=function(_0x2bf5b6,_0x24fd3e){const _0x57be8a=_0x33ef71;if(!SceneManager[_0x57be8a(0x15e)]())return;if(_0x2bf5b6===this[_0x57be8a(0x126)]())return;if(_0x24fd3e&&!this[_0x57be8a(0x1fe)](_0x2bf5b6))return;if(!_0x24fd3e&&this[_0x57be8a(0x1fe)](_0x2bf5b6))return;if(!this['battler']())return;const _0x3cebab=VisuMZ[_0x57be8a(0x137)][_0x57be8a(0x20a)][_0x57be8a(0x213)],_0x185ca7=$dataStates[_0x2bf5b6];if(!_0x185ca7)return;_0x3cebab[_0x57be8a(0x203)]&&!_0x185ca7['note'][_0x57be8a(0x193)](/<HIDE STATE POPUP>/i)&&(_0x57be8a(0x1cf)==='XlxkJ'?this[_0x57be8a(0x178)]?_0x4187ca['y']=this[_0x57be8a(0x178)]['y']+_0x178c88[_0x57be8a(0x202)]:_0x305976['y']=-this[_0x57be8a(0x202)]+_0x559ac0[_0x57be8a(0x202)]:this['battler']()[_0x57be8a(0x1e2)](_0x2bf5b6,_0x24fd3e)),VisuMZ[_0x57be8a(0x137)][_0x57be8a(0x11d)](this,_0x185ca7,_0x24fd3e);},VisuMZ['VisualStateEffects'][_0x33ef71(0x11d)]=function(_0x53d5dd,_0x202cda,_0xc6a177){const _0x4faf27=_0x33ef71,_0x41f1dc=VisuMZ[_0x4faf27(0x137)][_0x4faf27(0x20a)][_0x4faf27(0x213)],_0x222aae=_0x41f1dc[_0x4faf27(0x16e)],_0x5a8964=_0x41f1dc[_0x4faf27(0x12b)],_0x2c9b96=_0x202cda[_0x4faf27(0x215)];if(_0xc6a177&&_0x2c9b96[_0x4faf27(0x193)](/(?:ADD|APPLY) ANIMATION:[ ](\d+)/i)){const _0x5c80bb=Number(RegExp['$1']);$gameTemp['requestFauxAnimation']([_0x53d5dd],_0x5c80bb,_0x222aae,_0x5a8964);}if(!_0xc6a177&&_0x2c9b96[_0x4faf27(0x193)](/(?:ERASE|REMOVE) ANIMATION:[ ](\d+)/i)){const _0xb186cf=Number(RegExp['$1']);$gameTemp['requestFauxAnimation']([_0x53d5dd],_0xb186cf,_0x222aae,_0x5a8964);}},Game_BattlerBase[_0x33ef71(0x1d1)][_0x33ef71(0x140)]=function(){const _0x2526b6=_0x33ef71,_0x20b381=_0x2526b6(0x172);if(this[_0x2526b6(0x1cc)](_0x20b381))return this[_0x2526b6(0x14e)][_0x20b381];return this['_cache'][_0x20b381]=this[_0x2526b6(0x1f2)](),this['_cache'][_0x20b381];},Game_BattlerBase[_0x33ef71(0x1d1)][_0x33ef71(0x1f2)]=function(){const _0x4c470c=_0x33ef71;let _0x202582=[];for(const _0x567af0 of this[_0x4c470c(0x1cb)]()){if(!_0x567af0)continue;if(_0x567af0[_0x4c470c(0x215)][_0x4c470c(0x193)](/<(?:REPEAT|REPEATING|CYCLE|STATE) ANIMATION:[ ](\d+)>/i)){if('jLUHZ'==='hPrWy'){const _0x40b1bc=_0x38b76c[_0x4c470c(0x137)]['Settings']['BuffDebuff'],_0x40234d=_0x5a5778?_0x4c470c(0x1d7):_0x4c470c(0x145),_0x43d7b5=_0x5df54d?_0x199024[_0x4c470c(0x15f)]:_0x34a33c[_0x4c470c(0x17a)],_0x2af486=_0x43d7b5+_0x13a5c5,_0x43e842=_0x32d595['param'](_0x387a70),_0x2571ae=_0x40b1bc[_0x4c470c(0x21f)[_0x4c470c(0x1ca)](_0x40234d)];if(_0x2571ae[_0x4c470c(0x1de)]<=0x0)return;let _0x2d1f70=_0x2571ae[_0x4c470c(0x1ca)](_0x43e842);const _0x1df776={'textColor':_0x40b1bc[_0x4c470c(0x11b)[_0x4c470c(0x1ca)](_0x40234d)]||0x0,'flashColor':_0x40b1bc[_0x4c470c(0x1aa)[_0x4c470c(0x1ca)](_0x40234d)]||[0x0,0x0,0x0,0x0],'flashDuration':_0x40b1bc['%1FlashDuration'['format'](_0x40234d)]||0x0},_0x964d50=_0x5e186c[_0x4c470c(0x1f7)](_0x4c470c(0x14c));_0x964d50[_0x4c470c(0x11e)](this[_0x4c470c(0x18a)][_0x4c470c(0x1e4)](this,_0x2af486,_0x2d1f70,_0x1df776));}else _0x202582[_0x4c470c(0x17e)](Number(RegExp['$1'])||0x0);}}return _0x202582;},Game_BattlerBase[_0x33ef71(0x1d1)]['getVisualRepeatingStateAnimationCycle']=function(){const _0x2731f5=_0x33ef71,_0x5e8cd6=_0x2731f5(0x171);if(this[_0x2731f5(0x1cc)](_0x5e8cd6))return this['_cache'][_0x5e8cd6];return this[_0x2731f5(0x14e)][_0x5e8cd6]=this['createVisualRepeatingStateAnimationCycle'](),this[_0x2731f5(0x14e)][_0x5e8cd6];},Game_BattlerBase[_0x33ef71(0x1d1)][_0x33ef71(0x1db)]=function(){const _0x10f392=_0x33ef71;let _0x4ae836=[];for(const _0x4ec471 of this[_0x10f392(0x1cb)]()){if(_0x10f392(0x201)===_0x10f392(0x201)){if(!_0x4ec471)continue;_0x4ec471[_0x10f392(0x215)]['match'](/<(?:REPEAT|REPEATING|CYCLE|STATE) ANIMATION CYCLE:[ ](\d+)>/i)?_0x4ae836[_0x10f392(0x17e)](Number(RegExp['$1'])||0x0):_0x4ae836['push'](VisuMZ[_0x10f392(0x137)][_0x10f392(0x20a)]['State'][_0x10f392(0x165)]);}else _0x49ae76['push'](_0x5769b1(_0x14cd64['$1'])||0x0);}return _0x4ae836;},Game_BattlerBase[_0x33ef71(0x1d1)][_0x33ef71(0x17b)]=function(){const _0x114594=_0x33ef71,_0x404c3c=_0x114594(0x17b);if(this[_0x114594(0x1cc)](_0x404c3c))return this[_0x114594(0x14e)][_0x404c3c];return this['_cache'][_0x404c3c]=this[_0x114594(0x148)](),this[_0x114594(0x14e)][_0x404c3c];},Game_BattlerBase[_0x33ef71(0x1d1)][_0x33ef71(0x148)]=function(){const _0x8b6ebd=_0x33ef71,_0x39cb74=this[_0x8b6ebd(0x1cb)]();for(const _0x50065e of _0x39cb74){if(_0x8b6ebd(0x1ce)===_0x8b6ebd(0x1c1))_0x502561[_0x8b6ebd(0x137)][_0x8b6ebd(0x156)][_0x8b6ebd(0x1e8)](this,_0x5d82e9),this['setupVisualBuffDebuffEffect'](_0x393d38,![]);else{if(!_0x50065e)continue;if(_0x50065e[_0x8b6ebd(0x215)][_0x8b6ebd(0x193)](/<STATE MOTION:[ ](.*)>/i))return this['_customStateMotion']=String(RegExp['$1'])[_0x8b6ebd(0x1a1)]()[_0x8b6ebd(0x199)](),0x4;else{if(_0x50065e[_0x8b6ebd(0x1c5)]!==0x0){if(_0x8b6ebd(0x225)!==_0x8b6ebd(0x1e3))return _0x50065e[_0x8b6ebd(0x1c5)];else _0x296dbb['textColor']=_0x5d19b8(_0x3a0f17['$1'])[_0x8b6ebd(0x199)]();}}}}return 0x0;},Game_BattlerBase[_0x33ef71(0x1d1)][_0x33ef71(0x206)]=function(){const _0x5985de=_0x33ef71,_0x21acad=_0x5985de(0x206);if(this[_0x5985de(0x1cc)](_0x21acad))return this[_0x5985de(0x14e)][_0x21acad];return this[_0x5985de(0x14e)][_0x21acad]=this[_0x5985de(0x147)](),this['_cache'][_0x21acad];},Game_BattlerBase['prototype'][_0x33ef71(0x147)]=function(){const _0x40e183=_0x33ef71,_0x20506e=this[_0x40e183(0x1cb)]();for(const _0x1b4144 of _0x20506e){if(_0x40e183(0x1ed)!==_0x40e183(0x1ed)){if(this['constructor']===_0x315e86)return 0x0;if(!this['_battler'])return 0x0;if(this[_0x40e183(0x146)]['isBattlerGrounded']&&this[_0x40e183(0x146)][_0x40e183(0x12e)]())return 0x0;const _0x17f5e0=this[_0x40e183(0x146)][_0x40e183(0x173)]();let _0x6bc84e=0x0;this[_0x40e183(0x19c)]=this[_0x40e183(0x19c)]||_0x312bf4[_0x40e183(0x183)](_0x131182['random']()*0x2710);const _0x3c085a=_0x3e606b[_0x40e183(0x20c)]+this[_0x40e183(0x19c)],_0x31b0c4=_0x17f5e0[_0x40e183(0x143)],_0x3c1c3a=_0x17f5e0[_0x40e183(0x1d2)];let _0x2947cf=_0x17f5e0[_0x40e183(0x130)];if(_0x2947cf&&this[_0x40e183(0x146)][_0x40e183(0x15d)]())_0x2947cf=_0x17f5e0[_0x40e183(0x227)];if(_0x2947cf){_0x6bc84e+=_0x4977bf[_0x40e183(0x1dd)](_0x3c085a/(_0x31b0c4||0x1))*_0x3c1c3a,_0x6bc84e+=_0x17f5e0[_0x40e183(0x117)];if(this[_0x40e183(0x229)]<0x0)this['_hoverMinimum']=_0x6bc84e;const _0x531bc8=this[_0x40e183(0x229)]+_0x31b0c4/_0x434a36[_0x40e183(0x133)](0x1,_0x3c1c3a**1.5);this[_0x40e183(0x229)]=_0x4f8432[_0x40e183(0x17c)](_0x531bc8,_0x6bc84e);}else{const _0x49390c=this[_0x40e183(0x229)]-_0x31b0c4/_0x16a474[_0x40e183(0x133)](0x1,_0x3c1c3a/0x2);this[_0x40e183(0x229)]=_0x4c4c32[_0x40e183(0x133)](_0x49390c,0x0);}return _0x33bb69['max'](0x0,this['_hoverMinimum']);}else{if(!_0x1b4144)continue;if(_0x1b4144[_0x40e183(0x215)][_0x40e183(0x193)](/<STATE MOTION (?:LOCK|LOCKED)>/i))return!![];}}return![];},Game_BattlerBase[_0x33ef71(0x1d1)][_0x33ef71(0x124)]=function(){const _0x214674=_0x33ef71,_0x953ddb='stateOverlayIndex';if(this['checkCacheKey'](_0x953ddb))return this['_cache'][_0x953ddb];return this[_0x214674(0x14e)][_0x953ddb]=this[_0x214674(0x1a0)](),this[_0x214674(0x14e)][_0x953ddb];},Game_BattlerBase[_0x33ef71(0x1d1)][_0x33ef71(0x1a0)]=function(){const _0x517c14=_0x33ef71,_0xcf137a=this['states']();for(const _0x46f559 of _0xcf137a){if(!_0x46f559)continue;if(_0x46f559[_0x517c14(0x1c8)]!==0x0)return _0x46f559[_0x517c14(0x1c8)];}return 0x0;},Game_BattlerBase[_0x33ef71(0x1d1)][_0x33ef71(0x120)]=function(){const _0x1706ff=_0x33ef71,_0x1b16b0=_0x1706ff(0x21d);if(this[_0x1706ff(0x1cc)](_0x1b16b0))return this['_cache'][_0x1b16b0];return this['_cache'][_0x1b16b0]=this[_0x1706ff(0x1d5)](),this[_0x1706ff(0x14e)][_0x1b16b0];},Game_BattlerBase[_0x33ef71(0x1d1)][_0x33ef71(0x1d5)]=function(){const _0x543d94=_0x33ef71;for(const _0x9893ac of this['states']()){if(!_0x9893ac)continue;if(_0x9893ac[_0x543d94(0x215)][_0x543d94(0x193)](/<STATE TONE:[ ](.*)>/i)){let _0x3e3eea=String(RegExp['$1'])[_0x543d94(0x199)]()[_0x543d94(0x152)](',')[_0x543d94(0x1b6)](_0x49d426=>Number(_0x49d426)||0x0);while(_0x3e3eea['length']<0x4)_0x3e3eea[_0x543d94(0x17e)](0x0);return _0x3e3eea[0x0]=_0x3e3eea[0x0][_0x543d94(0x1bc)](-0xff,0xff),_0x3e3eea[0x1]=_0x3e3eea[0x1]['clamp'](-0xff,0xff),_0x3e3eea[0x2]=_0x3e3eea[0x2][_0x543d94(0x1bc)](-0xff,0xff),_0x3e3eea[0x3]=_0x3e3eea[0x3]['clamp'](0x0,0xff),_0x3e3eea;}}return[0x0,0x0,0x0,0x0];},Game_BattlerBase[_0x33ef71(0x1d1)][_0x33ef71(0x173)]=function(){const _0x123a2f=_0x33ef71,_0x46bccd='hoverData';if(this['checkCacheKey'](_0x46bccd))return this['_cache'][_0x46bccd];return this[_0x123a2f(0x14e)][_0x46bccd]=this['createVisualHoveringData'](),this[_0x123a2f(0x14e)][_0x46bccd];},Game_BattlerBase[_0x33ef71(0x1d1)]['createVisualHoveringData']=function(){const _0x4d025f=_0x33ef71,_0x3e79a7=/<VISUAL (?:HOVER|FLOAT) EFFECT>\s*([\s\S]*)\s*<\/VISUAL (?:HOVER|FLOAT) EFFECT>/i,_0x4dd24f={'hover':![],'base':0x64,'speed':0x14,'rate':0x5,'deathHover':![]};for(const _0x1c46d8 of this[_0x4d025f(0x185)]()){if(_0x4d025f(0x16a)===_0x4d025f(0x1b3))return _0x184e69(_0x46f8f9['$1']);else{if(!_0x1c46d8)continue;if(_0x1c46d8[_0x4d025f(0x215)][_0x4d025f(0x193)](_0x3e79a7)){_0x4dd24f[_0x4d025f(0x130)]=!![];const _0x1b7681=String(RegExp['$1']);if(_0x1b7681[_0x4d025f(0x193)](/BASE:[ ](.*)/i)){if(_0x4d025f(0x122)!==_0x4d025f(0x14d))_0x4dd24f[_0x4d025f(0x117)]=Number(RegExp['$1'])||0x0;else{if(!this[_0x4d025f(0x144)])this[_0x4d025f(0x1f0)](_0x5ada85,![]);_0x8a8342[_0x4d025f(0x137)][_0x4d025f(0x1e7)][_0x4d025f(0x1e8)](this,_0x4cbec5);}}_0x1b7681['match'](/SPEED:[ ](.*)/i)&&(_0x4dd24f[_0x4d025f(0x143)]=Number(RegExp['$1'])||0x0);if(_0x1b7681[_0x4d025f(0x193)](/RATE:[ ](.*)/i)){if(_0x4d025f(0x1cd)!==_0x4d025f(0x1dc))_0x4dd24f[_0x4d025f(0x1d2)]=Number(RegExp['$1'])||0x0;else{const _0x4480a6=_0x7391cc(_0x44eb1b['$1']);_0x4480a6<_0x4ff83a?(_0x5119a4(_0x4d025f(0x1c6)[_0x4d025f(0x1ca)](_0xbe64c9,_0x4480a6,_0x5596d8)),_0x30ad0b[_0x4d025f(0x1bf)]()):_0x4acbd5=_0x81c3f['max'](_0x4480a6,_0x3d5f7e);}}if(_0x1b7681['match'](/DEATH: HOVER/i))_0x4dd24f['deathHover']=!![];else _0x1b7681[_0x4d025f(0x193)](/DEATH: FLOOR/i)&&(_0x4dd24f[_0x4d025f(0x227)]=![]);break;}}}return _0x4dd24f;},Game_BattlerBase[_0x33ef71(0x1d1)]['noBreathing']=function(){const _0x4bf16b=_0x33ef71,_0x315c3d='noBreathing';if(this[_0x4bf16b(0x1cc)](_0x315c3d))return this[_0x4bf16b(0x14e)][_0x315c3d];const _0x15677f=this[_0x4bf16b(0x185)]();return this[_0x4bf16b(0x14e)][_0x315c3d]=_0x15677f['some'](_0x38cec9=>_0x38cec9&&_0x38cec9['note']['match'](/<NO (?:BREATH|BREATHING)>/i)),this[_0x4bf16b(0x14e)][_0x315c3d];},Game_BattlerBase[_0x33ef71(0x1d1)]['breathingData']=function(){const _0x14b8cc=_0x33ef71,_0x25726c='breathingData';if(this[_0x14b8cc(0x1cc)](_0x25726c))return this[_0x14b8cc(0x14e)][_0x25726c];return this['_cache'][_0x25726c]=this['createVisualBreathingData'](),this[_0x14b8cc(0x14e)][_0x25726c];},Game_BattlerBase[_0x33ef71(0x1d1)][_0x33ef71(0x135)]=function(){const _0x4efc38=_0x33ef71,_0x3ebdfc=/<VISUAL (?:BREATH|BREATHING) EFFECT>\s*([\s\S]*)\s*<\/VISUAL (?:BREATH|BREATHING) EFFECT>/i,_0x1d2d08={'breathing':![],'speedX':0xa,'speedY':0xa,'rateX':0x0,'rateY':0.02,'hpLinked':![]};for(const _0x5bfa58 of this[_0x4efc38(0x185)]()){if(_0x4efc38(0x209)!=='cleyj'){if(!_0x5bfa58)continue;if(_0x5bfa58[_0x4efc38(0x215)][_0x4efc38(0x193)](_0x3ebdfc)){if(_0x4efc38(0x1a4)==='iwtcT'){const _0x48de7f=_0x5f114e[_0x4efc38(0x137)][_0x4efc38(0x20a)]['State'],_0x4c66c5=_0x48de7f['AnimationMirror'],_0x97a56e=_0x48de7f[_0x4efc38(0x12b)],_0x4e27c4=_0x2a081f[_0x4efc38(0x215)];if(_0x356514&&_0x4e27c4[_0x4efc38(0x193)](/(?:ADD|APPLY) ANIMATION:[ ](\d+)/i)){const _0x2860d2=_0x37749b(_0xfcd3c8['$1']);_0x4864b4[_0x4efc38(0x1c0)]([_0x5ad882],_0x2860d2,_0x4c66c5,_0x97a56e);}if(!_0x1e7600&&_0x4e27c4[_0x4efc38(0x193)](/(?:ERASE|REMOVE) ANIMATION:[ ](\d+)/i)){const _0x39edf6=_0xb39860(_0x51aad1['$1']);_0x4aa96b[_0x4efc38(0x1c0)]([_0x596f81],_0x39edf6,_0x4c66c5,_0x97a56e);}}else{_0x1d2d08[_0x4efc38(0x11a)]=!![];const _0x4793c0=String(RegExp['$1']);_0x4793c0[_0x4efc38(0x193)](/SPEED:[ ](.*)/i)&&(_0x4efc38(0x200)==='JxDZf'?(_0x1d2d08[_0x4efc38(0x121)]=Number(RegExp['$1'])||0x0,_0x1d2d08[_0x4efc38(0x14a)]=Number(RegExp['$1'])||0x0):this['updateVisualStateEffectsIcons']());_0x4793c0[_0x4efc38(0x193)](/(?:SPEEDX|SPEED X):[ ](.*)/i)&&(_0x1d2d08[_0x4efc38(0x121)]=Number(RegExp['$1'])||0x0);_0x4793c0[_0x4efc38(0x193)](/(?:SPEEDY|SPEED Y):[ ](.*)/i)&&(_0x1d2d08[_0x4efc38(0x14a)]=Number(RegExp['$1'])||0x0);_0x4793c0[_0x4efc38(0x193)](/RATE:[ ](.*)/i)&&('FQGyB'===_0x4efc38(0x160)?(_0x4fcc69[_0x4efc38(0x137)]['Sprite_Battler_updateOpacity']['call'](this),this[_0x4efc38(0x1af)]()):(_0x1d2d08[_0x4efc38(0x1e1)]=Number(RegExp['$1'])||0x0,_0x1d2d08['rateY']=Number(RegExp['$1'])||0x0));if(_0x4793c0['match'](/(?:RATEX|RATE X):[ ](.*)/i)){if(_0x4efc38(0x1b1)!==_0x4efc38(0x1b1)){const _0x143a91=_0xf485b1(_0x2d3af0['$1']);_0x29dfbc[_0x4efc38(0x1c0)]([_0x268b3a],_0x143a91,_0x387a20,_0x1e7bf9);}else _0x1d2d08[_0x4efc38(0x1e1)]=Number(RegExp['$1'])||0x0;}_0x4793c0['match'](/(?:RATEY|RATE Y):[ ](.*)/i)&&(_0x1d2d08[_0x4efc38(0x1bb)]=Number(RegExp['$1'])||0x0);if(_0x4793c0[_0x4efc38(0x193)](/(?:HPLINK|HP LINK|HPLINKED|HP LINKED): ON/i))_0x1d2d08[_0x4efc38(0x180)]=!![];else{if(_0x4793c0[_0x4efc38(0x193)](/(?:HPLINK|HP LINK|HPLINKED|HP LINKED): OFF/i)){if('YGoDI'===_0x4efc38(0x16c))_0x1d2d08[_0x4efc38(0x180)]=![];else{const _0x4371a0=this[_0x4efc38(0x166)];if(!_0x4371a0)return;const _0x44e103=_0x4371a0[_0x4efc38(0x17b)]();if(_0x44e103>=0x4){if(!_0x4371a0[_0x4efc38(0x155)]()&&!_0x4371a0[_0x4efc38(0x12c)]())return this[_0x4efc38(0x195)](_0x4371a0[_0x4efc38(0x1ff)]);}_0x246ec6[_0x4efc38(0x137)]['Sprite_Actor_refreshMotion'][_0x4efc38(0x1e8)](this);}}}break;}}}else{const _0x3e2a64=_0x4efc38(0x136);if(this['checkCacheKey'](_0x3e2a64))return this[_0x4efc38(0x14e)][_0x3e2a64];return this[_0x4efc38(0x14e)][_0x3e2a64]=this[_0x4efc38(0x135)](),this['_cache'][_0x3e2a64];}}return _0x1d2d08;},VisuMZ[_0x33ef71(0x137)][_0x33ef71(0x1f3)]=Game_Battler[_0x33ef71(0x1d1)][_0x33ef71(0x184)],Game_Battler['prototype'][_0x33ef71(0x184)]=function(_0x53c460){const _0x42d121=_0x33ef71;VisuMZ[_0x42d121(0x137)][_0x42d121(0x1f3)][_0x42d121(0x1e8)](this,_0x53c460),this[_0x42d121(0x1f0)](_0x53c460,!![]);},VisuMZ[_0x33ef71(0x137)][_0x33ef71(0x131)]=Game_BattlerBase['prototype'][_0x33ef71(0x141)],Game_BattlerBase['prototype'][_0x33ef71(0x141)]=function(){const _0x2111ba=_0x33ef71;this[_0x2111ba(0x144)]=!![],VisuMZ[_0x2111ba(0x137)][_0x2111ba(0x131)]['call'](this),this[_0x2111ba(0x144)]=undefined;},VisuMZ[_0x33ef71(0x137)][_0x33ef71(0x1e7)]=Game_Battler[_0x33ef71(0x1d1)][_0x33ef71(0x219)],Game_Battler['prototype'][_0x33ef71(0x219)]=function(_0x19df5b){const _0x409153=_0x33ef71;if(!this[_0x409153(0x144)])this[_0x409153(0x1f0)](_0x19df5b,![]);VisuMZ[_0x409153(0x137)]['Game_Battler_onRemoveState'][_0x409153(0x1e8)](this,_0x19df5b);},VisuMZ[_0x33ef71(0x137)]['Sprite_Battler_initMembers']=Sprite_Battler['prototype'][_0x33ef71(0x1d3)],Sprite_Battler[_0x33ef71(0x1d1)][_0x33ef71(0x1d3)]=function(){const _0x1e5949=_0x33ef71;VisuMZ[_0x1e5949(0x137)][_0x1e5949(0x1b5)][_0x1e5949(0x1e8)](this),this[_0x1e5949(0x1fc)](),this[_0x1e5949(0x1be)]();},Sprite_Battler[_0x33ef71(0x1d1)][_0x33ef71(0x1fc)]=function(){const _0x16454e=_0x33ef71;this[_0x16454e(0x191)]=0x0,this[_0x16454e(0x142)]=0x0;},Sprite_Battler['prototype']['setupBuffDebuffPopup']=function(_0x1a3137,_0x43e8a4){const _0x134622=_0x33ef71,_0x31b0f0=VisuMZ['VisualStateEffects'][_0x134622(0x20a)][_0x134622(0x221)],_0x1f693d=_0x43e8a4?_0x134622(0x1d7):_0x134622(0x145),_0xf7caf3=_0x43e8a4?Game_BattlerBase[_0x134622(0x15f)]:Game_BattlerBase[_0x134622(0x17a)],_0x51b697=_0xf7caf3+_0x1a3137,_0x102686=TextManager[_0x134622(0x21b)](_0x1a3137),_0x472b31=_0x31b0f0['%1PopupFmt'[_0x134622(0x1ca)](_0x1f693d)];if(_0x472b31[_0x134622(0x1de)]<=0x0)return;let _0x4331c2=_0x472b31[_0x134622(0x1ca)](_0x102686);const _0x215741={'textColor':_0x31b0f0[_0x134622(0x11b)[_0x134622(0x1ca)](_0x1f693d)]||0x0,'flashColor':_0x31b0f0[_0x134622(0x1aa)[_0x134622(0x1ca)](_0x1f693d)]||[0x0,0x0,0x0,0x0],'flashDuration':_0x31b0f0[_0x134622(0x15c)[_0x134622(0x1ca)](_0x1f693d)]||0x0},_0x209b91=ImageManager['loadSystem']('IconSet');_0x209b91[_0x134622(0x11e)](this['setupIconTextPopup'][_0x134622(0x1e4)](this,_0x51b697,_0x4331c2,_0x215741));},Sprite_Battler[_0x33ef71(0x1d1)][_0x33ef71(0x1e2)]=function(_0x4b8d5d,_0x27cdfe){const _0x54d4c3=_0x33ef71,_0x3b2452=VisuMZ[_0x54d4c3(0x137)][_0x54d4c3(0x20a)][_0x54d4c3(0x213)],_0x5c943f=$dataStates[_0x4b8d5d];if(!_0x5c943f)return;const _0x17f80d=_0x27cdfe?_0x54d4c3(0x1f5):_0x54d4c3(0x12d),_0x1fb485=_0x5c943f[_0x54d4c3(0x21c)];if(_0x1fb485<=0x0)return;const _0x477bd5=_0x3b2452[_0x54d4c3(0x21f)[_0x54d4c3(0x1ca)](_0x17f80d)];if(_0x477bd5['length']<=0x0)return;let _0x2b83a6=_0x477bd5['format'](_0x5c943f[_0x54d4c3(0x18b)]);const _0x3c3572={'textColor':_0x3b2452['TextColor']||0x0,'flashColor':_0x3b2452['FlashColor']||[0x0,0x0,0x0,0x0],'flashDuration':_0x3b2452['FlashDuration']||0x0};_0x3b2452['MatchTurnCountColor']&&(_0x54d4c3(0x19e)==='qQTxP'?_0x3c3572['textColor']=ColorManager['stateColor'](_0x5c943f):(_0xf25ae8['VisualStateEffects']['Sprite_Actor_createStateSprite'][_0x54d4c3(0x1e8)](this),this[_0x54d4c3(0x224)]()));VisuMZ[_0x54d4c3(0x137)][_0x54d4c3(0x1da)](_0x5c943f,_0x3c3572);const _0x2b526f=ImageManager[_0x54d4c3(0x1f7)](_0x54d4c3(0x14c));_0x2b526f[_0x54d4c3(0x11e)](this['setupIconTextPopup'][_0x54d4c3(0x1e4)](this,_0x1fb485,_0x2b83a6,_0x3c3572));},VisuMZ[_0x33ef71(0x137)][_0x33ef71(0x1da)]=function(_0x3d584b,_0x2fd40b){const _0x397d0e=_0x33ef71,_0x2e98c2=_0x3d584b[_0x397d0e(0x215)];if(_0x2e98c2[_0x397d0e(0x193)](/<STATE POPUP>\s*([\s\S]*)\s*<\/STATE POPUP>/i)){const _0x33cd8c=String(RegExp['$1'])[_0x397d0e(0x199)]()[_0x397d0e(0x152)](/[\r\n]+/);for(const _0x29f1f1 of _0x33cd8c){if(_0x397d0e(0x1f9)!==_0x397d0e(0x1f9))_0x39e8b8[_0x397d0e(0x143)]=_0x37c24d(_0x560949['$1'])||0x0;else{_0x29f1f1[_0x397d0e(0x193)](/(?:TEXT COLOR|TEXTCOLOR):[ ](.*)/i)&&(_0x2fd40b[_0x397d0e(0x188)]=String(RegExp['$1'])[_0x397d0e(0x199)]());if(_0x29f1f1[_0x397d0e(0x193)](/(?:FLASH COLOR|FLASHCOLOR):[ ](.*)/i)){_0x2fd40b[_0x397d0e(0x1b8)]=String(RegExp['$1'])[_0x397d0e(0x199)]()['split'](',')[_0x397d0e(0x1b6)](_0x14e35c=>Number(_0x14e35c));while(_0x2fd40b[_0x397d0e(0x1b8)][_0x397d0e(0x1de)]<=0x4){_0x2fd40b[_0x397d0e(0x1b8)][_0x397d0e(0x17e)](0x0);};_0x2fd40b[_0x397d0e(0x20e)]=_0x2fd40b[_0x397d0e(0x20e)]||0x1;}_0x29f1f1[_0x397d0e(0x193)](/(?:FLASH DURATION|FLASHDURATION):[ ](\d+)/i)&&(_0x2fd40b[_0x397d0e(0x20e)]=Number(RegExp['$1']));}}}},Sprite_Battler[_0x33ef71(0x1d1)][_0x33ef71(0x149)]=function(){const _0x318502=_0x33ef71;if(!this['isRepeatingVisualStateAnimationShown']())return;if(this[_0x318502(0x191)]>0x0){this[_0x318502(0x191)]--;return;}const _0x589e7c=this[_0x318502(0x146)][_0x318502(0x140)](),_0x54d4e9=this[_0x318502(0x146)][_0x318502(0x1b9)]();if(_0x589e7c[_0x318502(0x1de)]<=0x0)return;this[_0x318502(0x142)]>=_0x589e7c[_0x318502(0x1de)]&&(_0x318502(0x220)===_0x318502(0x220)?this[_0x318502(0x142)]=0x0:this[_0x318502(0x159)]()[_0x318502(0x1d9)](_0x187426,_0x173fd6));const _0x4e99ea=_0x589e7c[this['_visualStateAnimationIndex']],_0x86183a=VisuMZ[_0x318502(0x137)][_0x318502(0x20a)][_0x318502(0x213)],_0x50d6b3=[this[_0x318502(0x146)]],_0x48be27=_0x86183a[_0x318502(0x19d)],_0x4345f9=_0x86183a['RepeatMute'];$gameTemp[_0x318502(0x1c0)](_0x50d6b3,_0x4e99ea,_0x48be27,_0x4345f9);const _0xca602b=_0x54d4e9[this['_visualStateAnimationIndex']]||_0x86183a['CycleTime'];this['_visualStateAnimationRepeatDuration']=_0xca602b,this[_0x318502(0x142)]++;},Sprite_Battler[_0x33ef71(0x1d1)][_0x33ef71(0x1d0)]=function(){const _0x38cad4=_0x33ef71;if(!this[_0x38cad4(0x146)])return![];if(!this[_0x38cad4(0x146)][_0x38cad4(0x1f4)]())return![];if(!this[_0x38cad4(0x146)]['isAppeared']())return![];if(!this[_0x38cad4(0x146)][_0x38cad4(0x17d)]())return![];if(this['constructor']['name']===_0x38cad4(0x13a))return![];if(this[_0x38cad4(0x228)]<=0x0)return![];return!![];},Sprite_Battler[_0x33ef71(0x1d1)][_0x33ef71(0x1f8)]=function(){const _0x3f638a=_0x33ef71;this['_stateIconSprite']&&this[_0x3f638a(0x18f)](),this['_stateSprite']&&(_0x3f638a(0x134)!=='mwLJG'?_0xec1a02[_0x3f638a(0x1e1)]=_0x2694b5(_0x5056b0['$1'])||0x0:this[_0x3f638a(0x1ab)]()),this['updateRepeatingVisualStateAnimation'](),this[_0x3f638a(0x16f)](),this[_0x3f638a(0x1a5)]();},Sprite_Battler[_0x33ef71(0x1d1)][_0x33ef71(0x18f)]=function(){const _0x243256=_0x33ef71;if(!this['_battler'])return;const _0x5e62d3=VisuMZ[_0x243256(0x137)][_0x243256(0x20a)][_0x243256(0x189)],_0x403e26=this[_0x243256(0x178)];_0x403e26['visible']=this[_0x243256(0x146)]['isActor']()?_0x5e62d3['ActorStateIcon']:_0x5e62d3[_0x243256(0x1ea)];if(this[_0x243256(0x146)]['isActor']()){if(_0x243256(0x154)===_0x243256(0x1a9))_0x4261b9[_0x243256(0x121)]=_0x1cecd3(_0x2ce5b8['$1'])||0x0,_0x39b268['speedY']=_0x1482bc(_0x33b168['$1'])||0x0;else{_0x403e26['x']=0x0;this[_0x243256(0x146)]['battleUIOffsetX']&&(_0x243256(0x217)===_0x243256(0x177)?(this[_0x243256(0x13f)]=new _0x5c3c8f(),this[_0x243256(0x187)](this[_0x243256(0x13f)])):_0x403e26['x']+=this[_0x243256(0x146)]['battleUIOffsetX']());_0x403e26['y']=-Math['round']((this['height']+0x28)*0.9);if(_0x403e26['y']<0x14-this['y']){if(_0x243256(0x198)===_0x243256(0x1b4)){if(!this['_battler'])return 0x0;if(this[_0x243256(0x146)][_0x243256(0x21e)]())return 0x0;const _0x442d19=this['_battler']['breathingData']();if(!_0x442d19)return 0x0;if(!_0x442d19[_0x243256(0x11a)])return 0x0;let _0x178c16=this[_0x243256(0x1a8)](_0x442d19,_0x442d19['speedX'],_0x442d19[_0x243256(0x1e1)]);const _0x1c60fa=this[_0x243256(0x18e)][_0x243256(0x20f)]['x']>0x0?0x1:-0x1;return _0x178c16*_0x1c60fa;}else _0x403e26['y']=0x14-this['y'];}this['_battler'][_0x243256(0x1ec)]&&(_0x403e26['y']+=this[_0x243256(0x146)][_0x243256(0x1ec)]());}}},Sprite_Battler[_0x33ef71(0x1d1)]['updateVisualStateEffectsOverlay']=function(){const _0x33233b=_0x33ef71;if(!this[_0x33233b(0x146)])return;const _0xea6059=VisuMZ['VisualStateEffects'][_0x33233b(0x20a)][_0x33233b(0x189)],_0x2a75f2=this[_0x33233b(0x13f)];_0x2a75f2['visible']=this[_0x33233b(0x146)]['isActor']()?_0xea6059['ActorOverlay']:_0xea6059['EnemyOverlay'];this[_0x33233b(0x168)]&&(this[_0x33233b(0x168)][_0x33233b(0x13f)][_0x33233b(0x13d)]=![]);if(this[_0x33233b(0x146)][_0x33233b(0x176)]()&&!this['_battler'][_0x33233b(0x1ef)]()){if(this[_0x33233b(0x178)])_0x2a75f2['y']=this[_0x33233b(0x178)]['y']+_0x2a75f2[_0x33233b(0x202)];else{if(_0x33233b(0x1d4)!==_0x33233b(0x1d4))return 0x0;else _0x2a75f2['y']=-this[_0x33233b(0x202)]+_0x2a75f2[_0x33233b(0x202)];}};},Sprite_Battler['prototype'][_0x33ef71(0x16f)]=function(){const _0x59206e=_0x33ef71;if(!this[_0x59206e(0x146)])return;const _0x1b9fa6=this['visualStateToneTargetSprite'](),_0x5be3bf=this[_0x59206e(0x146)][_0x59206e(0x120)]();_0x1b9fa6&&_0x1b9fa6['setColorTone'](_0x5be3bf),this[_0x59206e(0x196)]&&this[_0x59206e(0x196)][_0x59206e(0x186)](_0x5be3bf);},Sprite_Battler['prototype'][_0x33ef71(0x1fb)]=function(){const _0x508b1f=_0x33ef71;return this[_0x508b1f(0x192)]||this;},VisuMZ['VisualStateEffects'][_0x33ef71(0x207)]=Sprite_Battler[_0x33ef71(0x1d1)]['updateDragonbonesTimeScale'],Sprite_Battler[_0x33ef71(0x1d1)][_0x33ef71(0x1fa)]=function(){const _0x2e0036=_0x33ef71;if(!this[_0x2e0036(0x132)])return;if(this[_0x2e0036(0x146)][_0x2e0036(0x206)]())this[_0x2e0036(0x132)][_0x2e0036(0x15a)][_0x2e0036(0x174)]=0x0;else{if('tyMrE'===_0x2e0036(0x125)){if(!this['_battler'])return![];if(!this['_battler'][_0x2e0036(0x1f4)]())return![];if(!this[_0x2e0036(0x146)]['isAppeared']())return![];if(!this[_0x2e0036(0x146)][_0x2e0036(0x17d)]())return![];if(this[_0x2e0036(0x1ad)][_0x2e0036(0x18b)]==='Sprite_SvEnemy')return![];if(this[_0x2e0036(0x228)]<=0x0)return![];return!![];}else VisuMZ[_0x2e0036(0x137)][_0x2e0036(0x207)][_0x2e0036(0x1e8)](this);}},Sprite_Battler[_0x33ef71(0x1d1)][_0x33ef71(0x1be)]=function(){const _0x4d1ea5=_0x33ef71;this[_0x4d1ea5(0x229)]=-0x1;},VisuMZ[_0x33ef71(0x137)][_0x33ef71(0x163)]=Sprite_Battler['prototype'][_0x33ef71(0x138)],Sprite_Battler[_0x33ef71(0x1d1)][_0x33ef71(0x138)]=function(){const _0x4de25d=_0x33ef71;let _0x217a33=VisuMZ['VisualStateEffects'][_0x4de25d(0x163)][_0x4de25d(0x1e8)](this);return _0x217a33-=Math['floor'](this[_0x4de25d(0x21a)]()),_0x217a33;},Sprite_Battler[_0x33ef71(0x1d1)][_0x33ef71(0x21a)]=function(){const _0x3d41ef=_0x33ef71;if(this[_0x3d41ef(0x1ad)]===Sprite_SvEnemy)return 0x0;if(!this[_0x3d41ef(0x146)])return 0x0;if(this['_battler'][_0x3d41ef(0x12e)]&&this[_0x3d41ef(0x146)][_0x3d41ef(0x12e)]())return 0x0;const _0x2dcea2=this[_0x3d41ef(0x146)]['hoverData']();let _0x4a7113=0x0;this[_0x3d41ef(0x19c)]=this['_hoverRand']||Math[_0x3d41ef(0x183)](Math[_0x3d41ef(0x1e6)]()*0x2710);const _0x201f03=Graphics[_0x3d41ef(0x20c)]+this[_0x3d41ef(0x19c)],_0x5e1c2f=_0x2dcea2['speed'],_0x6805c6=_0x2dcea2[_0x3d41ef(0x1d2)];let _0x1f656c=_0x2dcea2['hover'];if(_0x1f656c&&this[_0x3d41ef(0x146)][_0x3d41ef(0x15d)]())_0x1f656c=_0x2dcea2[_0x3d41ef(0x227)];if(_0x1f656c){_0x4a7113+=Math[_0x3d41ef(0x1dd)](_0x201f03/(_0x5e1c2f||0x1))*_0x6805c6,_0x4a7113+=_0x2dcea2[_0x3d41ef(0x117)];if(this[_0x3d41ef(0x229)]<0x0)this[_0x3d41ef(0x229)]=_0x4a7113;const _0xaf7403=this[_0x3d41ef(0x229)]+_0x5e1c2f/Math[_0x3d41ef(0x133)](0x1,_0x6805c6**1.5);this['_hoverMinimum']=Math[_0x3d41ef(0x17c)](_0xaf7403,_0x4a7113);}else{const _0x4407f6=this[_0x3d41ef(0x229)]-_0x5e1c2f/Math[_0x3d41ef(0x133)](0x1,_0x6805c6/0x2);this['_hoverMinimum']=Math[_0x3d41ef(0x133)](_0x4407f6,0x0);}return Math['max'](0x0,this[_0x3d41ef(0x229)]);},VisuMZ[_0x33ef71(0x137)]['Sprite_Battler_updateOpacity']=Sprite_Battler['prototype'][_0x33ef71(0x1b7)],Sprite_Battler['prototype'][_0x33ef71(0x1b7)]=function(){const _0x463300=_0x33ef71;VisuMZ['VisualStateEffects'][_0x463300(0x128)][_0x463300(0x1e8)](this),this[_0x463300(0x1af)]();},Sprite_Battler[_0x33ef71(0x1d1)]['updateDistortionOpacity']=function(){const _0x54bb35=_0x33ef71;if(!this[_0x54bb35(0x18e)])return;if(!this[_0x54bb35(0x146)])return;if(this['constructor']===Sprite_SvEnemy)return;const _0x2077e3=this[_0x54bb35(0x146)]['visualBattlerOpacity']();if(this[_0x54bb35(0x18e)][_0x54bb35(0x228)]!==_0x2077e3){if(_0x54bb35(0x1c4)!==_0x54bb35(0x1c4))_0x22be13['y']+=this[_0x54bb35(0x146)][_0x54bb35(0x1ec)]();else{const _0x34cb56=0x8;if(this['_distortionSprite'][_0x54bb35(0x228)]>_0x2077e3){if(_0x54bb35(0x153)===_0x54bb35(0x153))this[_0x54bb35(0x18e)][_0x54bb35(0x228)]=Math[_0x54bb35(0x133)](this[_0x54bb35(0x18e)][_0x54bb35(0x228)]-_0x34cb56,_0x2077e3);else{if(!this[_0x54bb35(0x146)])return 0x0;if(this['_battler']['noBreathing']())return 0x0;const _0x38a8b9=this[_0x54bb35(0x146)][_0x54bb35(0x136)]();if(!_0x38a8b9)return 0x0;if(!_0x38a8b9[_0x54bb35(0x11a)])return 0x0;let _0x36e46c=this[_0x54bb35(0x1a8)](_0x38a8b9,_0x38a8b9[_0x54bb35(0x14a)],_0x38a8b9[_0x54bb35(0x1bb)]);return _0x36e46c;}}else'IBBiH'===_0x54bb35(0x161)?_0x7d99a[_0x54bb35(0x117)]=_0x3a93d9(_0x51e8b1['$1'])||0x0:this[_0x54bb35(0x18e)][_0x54bb35(0x228)]=Math[_0x54bb35(0x17c)](this[_0x54bb35(0x18e)][_0x54bb35(0x228)]+_0x34cb56,_0x2077e3);}}},Game_BattlerBase['prototype'][_0x33ef71(0x20b)]=function(){const _0x4f5993=_0x33ef71,_0x48879a=_0x4f5993(0x20b);if(this[_0x4f5993(0x1cc)](_0x48879a))return this[_0x4f5993(0x14e)][_0x48879a];return this[_0x4f5993(0x14e)][_0x48879a]=this[_0x4f5993(0x1f1)](),this[_0x4f5993(0x14e)][_0x48879a];},Game_BattlerBase['prototype'][_0x33ef71(0x1f1)]=function(){const _0xd6951=_0x33ef71;for(const _0x933d33 of this[_0xd6951(0x1cb)]()){if(_0xd6951(0x222)===_0xd6951(0x1c9)){const _0x10656a=_0x60955d(_0x54bed2['$1'])*0.01;return _0x388630[_0xd6951(0x190)](_0x10656a*0xff)[_0xd6951(0x1bc)](0x0,0xff);}else{if(!_0x933d33)continue;if(_0x933d33[_0xd6951(0x215)][_0xd6951(0x193)](/<VISUAL OPACITY:[ ](\d+)([%％])>/i)){const _0x36f9e2=Number(RegExp['$1'])*0.01;return Math[_0xd6951(0x190)](_0x36f9e2*0xff)[_0xd6951(0x1bc)](0x0,0xff);}if(_0x933d33[_0xd6951(0x215)][_0xd6951(0x193)](/<VISUAL OPACITY:[ ](\d+)>/i))return Number(RegExp['$1'])[_0xd6951(0x1bc)](0x0,0xff);}}return 0xff;},Sprite_Battler[_0x33ef71(0x1d1)][_0x33ef71(0x1a5)]=function(){const _0x33bbc0=_0x33ef71;if(!this[_0x33bbc0(0x146)])return;const _0x334679=this[_0x33bbc0(0x146)][_0x33bbc0(0x1c3)]();if(_0x334679===0x0&&this[_0x33bbc0(0x18e)][_0x33bbc0(0x119)]!==0x0){if(_0x33bbc0(0x18d)===_0x33bbc0(0x18d))this[_0x33bbc0(0x18e)][_0x33bbc0(0x20d)](0x0);else{let _0x4857f2=_0x44e6dd['VisualStateEffects'][_0x33bbc0(0x1a2)]['call'](this);return _0x4857f2+=this[_0x33bbc0(0x169)](),_0x4857f2;}}else{if(_0x33bbc0(0x127)!==_0x33bbc0(0x127))this[_0x33bbc0(0x142)]=0x0;else{let _0x2df4ae=this[_0x33bbc0(0x18e)][_0x33bbc0(0x119)]+_0x334679;_0x2df4ae%=0x168,this['_distortionSprite']['setHue'](_0x2df4ae);}}},Game_BattlerBase[_0x33ef71(0x1d1)][_0x33ef71(0x1c3)]=function(){const _0x377f1e=_0x33ef71,_0x1cadaa=_0x377f1e(0x1c3);if(this['checkCacheKey'](_0x1cadaa))return this['_cache'][_0x1cadaa];return this[_0x377f1e(0x14e)][_0x1cadaa]=this[_0x377f1e(0x13c)](),this['_cache'][_0x1cadaa];},Game_BattlerBase[_0x33ef71(0x1d1)][_0x33ef71(0x13c)]=function(){const _0x13133c=_0x33ef71;for(const _0x12e1ee of this[_0x13133c(0x1cb)]()){if(!_0x12e1ee)continue;if(_0x12e1ee['note']['match'](/<VISUAL RAINBOW:[ ]([\+\-]\d+)>/i))return Number(RegExp['$1']);}return 0x0;},VisuMZ['VisualStateEffects'][_0x33ef71(0x1a2)]=Sprite_Battler['prototype'][_0x33ef71(0x1a3)],Sprite_Battler[_0x33ef71(0x1d1)][_0x33ef71(0x1a3)]=function(){const _0x104a91=_0x33ef71;let _0x5637d0=VisuMZ[_0x104a91(0x137)][_0x104a91(0x1a2)][_0x104a91(0x1e8)](this);return _0x5637d0+=this[_0x104a91(0x169)](),_0x5637d0;},VisuMZ[_0x33ef71(0x137)][_0x33ef71(0x11c)]=Sprite_Battler[_0x33ef71(0x1d1)][_0x33ef71(0x12f)],Sprite_Battler['prototype'][_0x33ef71(0x12f)]=function(){const _0x35a94e=_0x33ef71;let _0xc138b6=VisuMZ[_0x35a94e(0x137)][_0x35a94e(0x11c)][_0x35a94e(0x1e8)](this);return _0xc138b6+=this['applyBreathingScaleY'](),_0xc138b6;},Sprite_Battler['prototype']['applyBreathingScaleX']=function(){const _0x556372=_0x33ef71;if(!this['_battler'])return 0x0;if(this[_0x556372(0x146)][_0x556372(0x21e)]())return 0x0;const _0x3f7934=this[_0x556372(0x146)]['breathingData']();if(!_0x3f7934)return 0x0;if(!_0x3f7934['breathing'])return 0x0;let _0x272ae5=this[_0x556372(0x1a8)](_0x3f7934,_0x3f7934[_0x556372(0x121)],_0x3f7934[_0x556372(0x1e1)]);const _0x4f1f10=this[_0x556372(0x18e)][_0x556372(0x20f)]['x']>0x0?0x1:-0x1;return _0x272ae5*_0x4f1f10;},Sprite_Battler['prototype'][_0x33ef71(0x226)]=function(){const _0x4f3dce=_0x33ef71;if(!this[_0x4f3dce(0x146)])return 0x0;if(this[_0x4f3dce(0x146)][_0x4f3dce(0x21e)]())return 0x0;const _0x12b251=this[_0x4f3dce(0x146)][_0x4f3dce(0x136)]();if(!_0x12b251)return 0x0;if(!_0x12b251[_0x4f3dce(0x11a)])return 0x0;let _0xa19898=this[_0x4f3dce(0x1a8)](_0x12b251,_0x12b251[_0x4f3dce(0x14a)],_0x12b251[_0x4f3dce(0x1bb)]);return _0xa19898;},Sprite_Battler[_0x33ef71(0x1d1)]['applyBreathingCalculations']=function(_0x3439a8,_0x35e0f0,_0x2c56fb){const _0x1d60ee=_0x33ef71;this[_0x1d60ee(0x175)]=this[_0x1d60ee(0x175)]??Math[_0x1d60ee(0x12a)](0x2710);let _0x22f027=Graphics[_0x1d60ee(0x20c)]+this['_breathingRand'];return _0x3439a8[_0x1d60ee(0x180)]&&(_0x1d60ee(0x1a6)===_0x1d60ee(0x211)?_0x4420f8[_0x1d60ee(0x1bb)]=_0x5651d1(_0x49415d['$1'])||0x0:_0x35e0f0/=this[_0x1d60ee(0x146)]['hpRate']()),Math[_0x1d60ee(0x1dd)](_0x22f027/_0x35e0f0)*_0x2c56fb;},VisuMZ['VisualStateEffects'][_0x33ef71(0x1c2)]=Sprite_Actor[_0x33ef71(0x1d1)][_0x33ef71(0x1f6)],Sprite_Actor[_0x33ef71(0x1d1)][_0x33ef71(0x1f6)]=function(){const _0xb0aab2=_0x33ef71;VisuMZ[_0xb0aab2(0x137)][_0xb0aab2(0x1c2)][_0xb0aab2(0x1e8)](this),this['createStateIconSprite']();},Sprite_Actor[_0x33ef71(0x1d1)][_0x33ef71(0x224)]=function(){const _0x4afc63=_0x33ef71;if(this['constructor']!==Sprite_Actor)return;this[_0x4afc63(0x178)]=new Sprite_StateIcon(),this[_0x4afc63(0x187)](this['_stateIconSprite']),this[_0x4afc63(0x178)][_0x4afc63(0x205)][_0x4afc63(0x1b0)]=![];},VisuMZ[_0x33ef71(0x137)][_0x33ef71(0x162)]=Sprite_Actor[_0x33ef71(0x1d1)]['refreshMotion'],Sprite_Actor['prototype'][_0x33ef71(0x1a7)]=function(){const _0x2f4567=_0x33ef71,_0x1b96d6=this['_actor'];if(!_0x1b96d6)return;const _0x1adcaf=_0x1b96d6[_0x2f4567(0x17b)]();if(_0x1adcaf>=0x4){if(_0x2f4567(0x1c7)!==_0x2f4567(0x1c7))this[_0x2f4567(0x14e)]={},_0x17eeb5[_0x2f4567(0x137)]['Game_BattlerBase_initMembers']['call'](this);else{if(!_0x1b96d6[_0x2f4567(0x155)]()&&!_0x1b96d6['isActing']())return this[_0x2f4567(0x195)](_0x1b96d6[_0x2f4567(0x1ff)]);}}VisuMZ['VisualStateEffects'][_0x2f4567(0x162)][_0x2f4567(0x1e8)](this);},VisuMZ[_0x33ef71(0x137)][_0x33ef71(0x1bd)]=Sprite_SvEnemy[_0x33ef71(0x1d1)][_0x33ef71(0x1a7)],Sprite_SvEnemy[_0x33ef71(0x1d1)][_0x33ef71(0x1a7)]=function(){const _0x3eef40=_0x33ef71,_0x18b91c=this[_0x3eef40(0x166)];if(!_0x18b91c)return;const _0x717eaf=_0x18b91c[_0x3eef40(0x17b)]();if(_0x717eaf>=0x4){if(_0x3eef40(0x19a)===_0x3eef40(0x19a)){if(!_0x18b91c[_0x3eef40(0x155)]()&&!_0x18b91c['isActing']())return this['startMotion'](_0x18b91c[_0x3eef40(0x1ff)]);}else _0x528bcc[_0x3eef40(0x137)]['Sprite_Enemy_update'][_0x3eef40(0x1e8)](this),this[_0x3eef40(0x1f8)]();}VisuMZ['VisualStateEffects']['Sprite_SvEnemy_refreshMotion'][_0x3eef40(0x1e8)](this);},VisuMZ[_0x33ef71(0x137)][_0x33ef71(0x13e)]=Sprite_Actor['prototype'][_0x33ef71(0x18c)],Sprite_Actor[_0x33ef71(0x1d1)][_0x33ef71(0x18c)]=function(_0x321e1e){const _0x31843d=_0x33ef71;VisuMZ[_0x31843d(0x137)][_0x31843d(0x13e)][_0x31843d(0x1e8)](this,_0x321e1e);if(this[_0x31843d(0x178)])this['_stateIconSprite'][_0x31843d(0x15b)](_0x321e1e);},VisuMZ[_0x33ef71(0x137)]['Sprite_Actor_update']=Sprite_Actor['prototype']['update'],Sprite_Actor[_0x33ef71(0x1d1)][_0x33ef71(0x1d6)]=function(){const _0x27efeb=_0x33ef71;VisuMZ[_0x27efeb(0x137)]['Sprite_Actor_update'][_0x27efeb(0x1e8)](this),this[_0x27efeb(0x1f8)]();},VisuMZ[_0x33ef71(0x137)]['Sprite_Actor_updateFrame']=Sprite_Actor[_0x33ef71(0x1d1)]['updateFrame'],Sprite_Actor[_0x33ef71(0x1d1)][_0x33ef71(0x164)]=function(){const _0x1a4c5b=_0x33ef71;if(this[_0x1a4c5b(0x146)][_0x1a4c5b(0x206)]()&&this[_0x1a4c5b(0x192)]&&this[_0x1a4c5b(0x192)][_0x1a4c5b(0x205)]){if(this[_0x1a4c5b(0x129)])return;this[_0x1a4c5b(0x129)]=this['_mainSprite'][_0x1a4c5b(0x194)]['width']>0x0;}else this[_0x1a4c5b(0x129)]=![];VisuMZ[_0x1a4c5b(0x137)]['Sprite_Actor_updateFrame']['call'](this);},VisuMZ[_0x33ef71(0x137)][_0x33ef71(0x14f)]=Sprite_Enemy[_0x33ef71(0x1d1)]['createStateIconSprite'],Sprite_Enemy[_0x33ef71(0x1d1)]['createStateIconSprite']=function(){const _0x18778d=_0x33ef71;this[_0x18778d(0x1f6)](),VisuMZ[_0x18778d(0x137)][_0x18778d(0x14f)]['call'](this);},Sprite_Enemy[_0x33ef71(0x1d1)][_0x33ef71(0x1f6)]=function(){const _0x16caac=_0x33ef71;this[_0x16caac(0x13f)]=new Sprite_StateOverlay(),this[_0x16caac(0x187)](this[_0x16caac(0x13f)]);},VisuMZ['VisualStateEffects'][_0x33ef71(0x214)]=Sprite_Enemy[_0x33ef71(0x1d1)][_0x33ef71(0x18c)],Sprite_Enemy[_0x33ef71(0x1d1)]['setBattler']=function(_0xfad2f4){const _0x5258bc=_0x33ef71;VisuMZ[_0x5258bc(0x137)][_0x5258bc(0x214)][_0x5258bc(0x1e8)](this,_0xfad2f4);if(this['_stateSprite'])this[_0x5258bc(0x13f)][_0x5258bc(0x15b)](_0xfad2f4);},VisuMZ[_0x33ef71(0x137)][_0x33ef71(0x116)]=Sprite_Enemy[_0x33ef71(0x1d1)][_0x33ef71(0x1d6)],Sprite_Enemy[_0x33ef71(0x1d1)][_0x33ef71(0x1d6)]=function(){const _0x505036=_0x33ef71;VisuMZ[_0x505036(0x137)][_0x505036(0x116)][_0x505036(0x1e8)](this),this[_0x505036(0x1f8)]();};