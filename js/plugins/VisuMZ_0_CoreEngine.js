//=============================================================================
// VisuStella MZ - Core Engine
// VisuMZ_0_CoreEngine.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_0_CoreEngine = true;

var VisuMZ = VisuMZ || {};
VisuMZ.CoreEngine = VisuMZ.CoreEngine || {};
VisuMZ.CoreEngine.version = 1.41;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 0] [Version 1.41] [CoreEngine]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Core_Engine_VisuStella_MZ
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Core Engine plugin is designed to fix any bugs that may have slipped
 * past RPG Maker MZ's source code and to give game devs more control over
 * RPG Maker MZ's various features, ranging from mechanics to aesthetics to
 * quality of life improvements.
 *
 * Features include all (but not limited to) the following:
 *
 * * Bug fixes for the problems existing in the RPG Maker MZ base code.
 * * Failsafes added for Script Call related event commands.
 * * Lots of Quality of Life Settings that can be activated through the
 *   Plugin Parameters.
 * * Control over the various Text Colors used throughout the game.
 * * Change up the maximum amount of gold carried, give it an icon attached to
 *   the label, and include text for overlap specifics.
 * * Preload images as the game boots up.
 * * Add specific background images for menus found throughout the game.
 * * A button assist window will appear at the top or bottom of the screen,
 *   detailing which buttons do what when inside a menu. This feature can be
 *   turned off.
 * * Choose which in-game battler parameters to display inside menus (ie ATK,
 *   DEF, AGI, etc.) and determine their maximum values, along with plenty of
 *   notetags to give more control over parameter, x-parameter, s-parameter
 *   bonuses through equipment, states, and other trait objects.
 * * Control over how the UI objects appear (such as the menu button, cancel
 *   button, left/right actor switch buttons).
 * * Reposition actors and enemies if the battle resolution is larger.
 * * Allow class names and nicknames to support text codes when displayed.
 * * Determine how windows behave in the game, if they will mask other windows,
 *   their line height properties, and more.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 0 ------
 *
 * This plugin is a Tier 0 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ Plugin library.
 *
 * ============================================================================
 * Important Changes: Bug Fixes
 * ============================================================================
 *
 * This plugin also serves to fix various bugs found in RPG Maker MZ that have
 * been unaddressed or not yet taken care of. The following is a list of bugs
 * that have been fixed by this plugin:
 *
 * ---
 *
 * Attack Skill Trait
 *
 * Enemies are unaffected by the Attack Skill Trait. This means if they have
 * an Attack action, they will always use Attack over and over even if their
 * Attack Skill Trait has been changed. This plugin will change it up so that
 * the Attack skill will comply with whatever their Attack Skill Trait's skill
 * is set to.
 *
 * ---
 *
 * Auto Battle Actor Skill Usage
 *
 * If an actor with Auto Battle has access to a skill but not have any access
 * to that skill's type, that actor will still be able to use the skill during
 * Auto Battle despite the fact that the actor cannot use that skill during
 * manual input.
 *
 * ---
 * 
 * Auto Battle Lock Up
 * 
 * If an auto battle Actor fights against an enemy whose DEF/MDF is too high,
 * they will not use any actions at all. This can cause potential game freezing
 * and softlocks. This plugin will change that and have them default to a
 * regular Attack.
 * 
 * ---
 * 
 * Gamepad Repeat Input
 * 
 * Cleared inputs on gamepads do not have a downtime and will trigger the
 * following input frame. The causes problems with certain RPG Maker MZ menus
 * where the inputs have to be cleared as the next immediate frame will have
 * them inputted again. This plugin changes it so that whenever inputs are
 * cleared, there is a downtime equal to the keyboard clear frames before the
 * gamepad input is registered once more.
 * 
 * ---
 * 
 * Invisible Battle Sprites
 * 
 * If you removed a party member during battle and added that exact party
 * member back into the same slot, their sprite would appear invisible. The
 * VisuStella Core Engine will fix this problem and prevent it from happening.
 * 
 * ---
 *
 * Move Picture, Origin Differences
 *
 * If a Show Picture event command is made with an Origin setting of
 * "Upper Left" and a Move Picture event command is made afterwards with an
 * Origin setting of "Center", RPG Maker MZ would originally have it instantly
 * jump into the new origin setting without making a clean transition between
 * them. This plugin will create that clean transition between origins.
 *
 * ---
 * 
 * Termination Clear Effects
 * 
 * In RPG Maker MZ, requesting an animation while transitioning between
 * scenes, such as going from the map scene to the battle scene, can cause
 * crashes. This is because the animation queue does not take off immediately
 * and will likely register incorrect targets for the scene. This plugin will
 * forcefully clear any registered animations and balloon effects when
 * terminating a scene in order to prevent crashes.
 * 
 * ---
 * 
 * Timer Sprite
 * 
 * By default, RPG Maker MZ adds Sprite_Timer into its spriteset, either for
 * maps or for battles. There is one major problem with this: when spritesets
 * are affected by filters, zooms, and/or blurs, this hinders how readable the
 * timer sprite is, making the information perceived by the player to be much
 * harder than it needs to be. The Core Engine adds the sprite to the parent
 * scene instead of the spriteset to ensure it's unobscured by anything else.
 * 
 * ---
 * 
 * Unusable Battle Items
 * 
 * If any party member is able to use an item in battle, then all party members
 * are able to use said item, even if that party member is supposed to be
 * unable to use that item. This is now changed so that battle items are
 * checked on an individual basis and not on a party-wide basis.
 * 
 * ---
 * 
 * Window Arrows Sprite Tearing
 * 
 * If a window object in RPG Maker MZ were to have an odd number for width size
 * then the arrow elements found for the window would be positioned on a half
 * pixel, giving it a blurry look and also have sprite tearing issues. This is
 * now fixed by rounding the number to the nearest whole number.
 * 
 * ---
 * 
 * Window Client Area Scaling Bug
 * 
 * If the window has a scale value different from 1.0, the client area (the
 * interactable parts) will not scale properly and appear clipped out. This
 * is now fixed by adjusting the client area to the window's scale values and
 * rounding upward to the nearest whole number.
 * 
 * ---
 * 
 * Window Skin Bleeding
 * 
 * This bug is fixed in the core scripts for RPG Maker MZ v1.3.0+.
 * 
 * Since the v1.2.0 update, Window.prototype._refreshBack's frame value has
 * been set from 96 to 95. This results in the window skin bleeding past the
 * window's intended borders. The Core Engine now reverts this change to
 * prevent the bleeding effect from happening.
 * 
 * ---
 *
 * ============================================================================
 * Major Changes: New Hard-Coded Features
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Scroll-Linked Pictures
 *
 * - If a Parallax has a ! at the start of its filename, it is bound to the map
 * scrolling. The same thing now happens with pictures. If a Picture has a ! at
 * the start of its filename, it is bound to the map's scrolling as well.
 *
 * ---
 *
 * Movement Route Scripts
 *
 * - If code in a Movement Route Script command fails, instead of crashing the
 * game, it will now act as if nothing happened except to display the cause of
 * the error inside the console.
 *
 * ---
 * 
 * Script Call Failsafes
 * 
 * - If code found in Conditional Branches, Control Variables, and/or Script
 * Calls fail to activate, instead of crashing the game, it will now act as if
 * nothing happened except to display the cause of the error inside the
 * console.
 * 
 * ---
 * 
 * Digit Grouping
 * 
 * - There exists an option to change how numbers are displayed and converted
 * in your game. This option can be enabled or disabled by going into the
 * Plugin Manager > VisuMZ_0_OptionsCore > Quality of Life Settings >
 * Digit Grouping and toggling on/off whichever ones you want.
 * 
 * - Digit Grouping will follow the rules of whatever country/locale the Plugin
 * Parameters are set to. If it's to default 'en-US', then 1234567.123456 will
 * become 1,234,567.123456. Set it to 'es-ES' and it becomes 1.234.567,123456
 * instead.
 * 
 * - This uses JavaScript's Number.toLocaleString() function and will therefore
 * follow whatever rules it has. This means if there are trailing zeroes at the
 * end of a decimal, it will cut them off. Numbers like 123.45000 will become
 * 123.45 instead. Excess numbers past 6 decimal places will be rounded. A
 * number like 0.123456789 will become 0.123457 instead.
 * 
 * - Numbers in between [ and ], < and > will be excluded from digit grouping
 * in order for text codes to be preserved accurately. \I[1234] will remain as
 * \I[1234].
 * 
 * - If you would like to enter in a number without digit grouping, surround it
 * with {{ and }}. Typing in {{1234567890}} will yield 1234567890.
 * 
 * ---
 * 
 * Show Scrolling Text, additional functionality
 * 
 * The event command "Show Scrolling Text" now has additional functionality as
 * long as the VisuStella MZ Core Engine is installed. If the game dev inserts
 * "// Script Call" (without the quotes) inside the scrolling text, then the
 * entirity of the Show Scrolling Text event command will be ran as a giant
 * script call event command.
 * 
 * The reason why this functionality is added is because the "Script..." event
 * command contains only 12 lines maximum. This means for any script call
 * larger than 12 lines of code cannot be done by normal means as each script
 * call is ran as a separate instance.
 * 
 * By repurposing the "Show Scrolling Text" event command to be able to
 * function as an extended "Script..." event command, such a thing is now
 * possible with less hassle and more lines to code with.
 * 
 * This effect does not occur if the Show Scrolling Text event command does not
 * have "// Script Call" in its contents.
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
 * === Actors ===
 *
 * Parameter limits can be adjusted in the Plugin Parameters, but this won't
 * lift the ability to change the values of an actor's initial or max level
 * past the editor's limits. Instead, this must be done through the usage of
 * notetags to accomplish the feat.
 *
 * ---
 *
 * <Max Level: x>
 *
 * - Used for: Actor Notetags
 * - Replace 'x' with an integer to determine the actor's max level.
 * - This allows you to go over the database limit of 99.
 * - If this notetag isn't used, default to the actor's database value.
 *
 * ---
 *
 * <Initial Level: x>
 *
 * - Used for: Actor Notetags
 * - Replace 'x' with an integer to determine the actor's initial level.
 * - This allows you to go over the database limit of 99.
 * - If this notetag isn't used, default to the actor's database value.
 *
 * ---
 *
 * === Classes ===
 *
 * As actor levels can now surpass 99 due to the notetag system, there may be
 * some skills you wish certain classes can learn upon reaching higher levels
 * past 99, too.
 *
 * ---
 * 
 * <Learn At Level: x>
 *
 * - Used for: Class Skill Learn Notetags
 * - Replace 'x' with an integer to determine the level this class will learn
 *   the associated skill at.
 * - This allows you to go over the database limit of 99.
 * - If this notetag isn't used, default to the class's database value.
 *
 * ---
 *
 * === Enemies ===
 *
 * Enemies are now given levels. The levels don't do anything except to serve
 * as a container for a number value. This way, levels can be used in damage
 * formulas (ie. a.atk - b.level) without causing any errors. To give enemies
 * levels, use the notetags below. These notetags also allow you to adjust the
 * base parameters, EXP, and Gold past the database limitations.
 *
 * ---
 *
 * <Level: x>
 *
 * - Used for: Enemy Notetags
 * - Replace 'x' with an integer to determine the enemy's level.
 * - If no level is declared, the level will default to 1.
 *
 * ---
 *
 * <param: x>
 *
 * - Used for: Enemy Notetags
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to alter.
 *   - This notetag does NOT work with X Parameters, S Parameters, or any
 *     custom parameters. This notetag ONLY works with the base parameters.
 * - Replace 'x' with an integer to set an enemy's 'param' base value.
 * - This will overwrite the enemy's database value and can exceed the original
 *   value limitation in the database.
 * - If these notetags aren't used, default to the enemy's database value.
 *
 * ---
 *
 * <EXP: x>
 * <Gold: x>
 *
 * - Used for: Enemy Notetags
 * - Replace 'x' with an integer to determine the enemy's EXP or Gold values.
 * - This will overwrite the enemy's database value and can exceed the original
 *   value limitation in the database.
 * - If these notetags aren't used, default to the enemy's database value.
 *
 * ---
 * 
 * === Animations ===
 * 
 * Animations in RPG Maker MZ are done by Effekseer and the animation system
 * has been revamped. However, the animations are only centered on the targets
 * now, and cannot be attached to the head or foot. Insert these tags into
 * the names of the animations in the database to adjust their positions.
 * 
 * ---
 * 
 * <Head>
 * <Foot>
 * 
 * - Used for: Animation Name Tags
 * - Will set the animation to anchor on top of the sprite (if <Head> is used)
 *   or at the bottom of the sprite (if <Foot> is used).
 * 
 * ---
 * 
 * <Anchor X: x>
 * <Anchor Y: y>
 * 
 * <Anchor: x, y>
 * 
 * - Used for: Animation Name Tags
 * - Will anchor the animation at a specific point within the sprite based on
 *   the 'x' and 'y' values.
 * - Replace 'x' and 'y' with numeric values representing their positions based
 *   on a rate where 0.0 is the furthest left/up (x, y respectively) to 1.0 for
 *   the furthest right/down (x, y respectively).
 * 
 * Examples:
 * 
 * <Anchor X: 0.4>
 * <Anchor Y: 0.8>
 * 
 * <Anchor: 0.2, 0.9>
 * 
 * ---
 * 
 * <Offset X: +x>
 * <Offset X: -x>
 * <Offset Y: +y>
 * <Offset Y: -y>
 * 
 * <Offset: +x, +y>
 * <Offset: -x, -y>
 * 
 * - Used for: Animation Name Tags
 * - Will anchor the animation to be offset by an exact number of pixels.
 * - This does the same the editor does, except it lets you input values
 *   greater than 999 and lower than -999.
 * - Replace 'x' and 'y' with numeric values the exact number of pixels to
 *   offset the animation's x and y coordinates by.
 * 
 * Examples:
 * 
 * <Offset X: +20>
 * <Offset Y: -50>
 * 
 * <Offset: +10, -30>
 * 
 * ---
 * 
 * <Mirror Offset X>
 * <No Mirror Offset X>
 * 
 * - Used for: Animation Name Tags
 * - If an animation is mirrored, you can choose to have the animation's Offset
 *   X value be mirrored, too (or not at all).
 * - If no name tag is discovered, this will use the setting found in the
 *   Plugin Parameters > QoL Settings > Misc > Ani: Mirror Offset X setting.
 * 
 * ---
 *
 * === Quality of Life ===
 *
 * By default, RPG Maker MZ does not offer an encounter step minimum after a
 * random encounter has finished. This means that one step immediately after
 * finishing a battle, the player can immediately enter another battle. The
 * Quality of Life improvement: Minimum Encounter Steps allows you to set a
 * buffer range between battles for the player to have some breathing room.
 *
 * ---
 *
 * <Minimum Encounter Steps: x>
 *
 * - Used for: Map Notetags
 * - Replace 'x' with the minimum number of steps before the player enters a
 *   random encounter on that map.
 * - If this notetag is not used, then the minimum encounter steps for the map
 *   will default to Quality of Life Settings => Encounter Rate Min.
 *
 * ---
 *
 * Tile shadows are automatically added to certain tiles in the map editor.
 * These tile shadows may or may not fit some types of maps. You can turn them
 * on/off with the Quality of Life Plugin Parameters or you can override the
 * settings with the following notetags:
 *
 * ---
 *
 * <Show Tile Shadows>
 * <Hide Tile Shadows>
 *
 * - Used for: Map Notetags
 * - Use the respective notetag for the function you wish to achieve.
 * - If this notetag is not used, then the minimum encounter steps for the map
 *   will default to Quality of Life Settings => No Tile Shadows.
 *
 * ---
 *
 * === Basic, X, and S Parameters ===
 *
 * A battler's parameters, or stats as some devs know them as, are the values
 * that determine how a battler performs. These settings allow you to alter
 * behaviors and give boosts to trait objects in a more controlled manner.
 *
 * ---
 *
 * <param Plus: +x>
 * <param Plus: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'param' plus value when calculating totals.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with an integer on how much to adjust the parameter by.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <param Rate: x%>
 * <param Rate: x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Changes 'param' rate to 'x' to alter the total 'param' value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <param Flat: +x>
 * <param Flat: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'param' plus value when calculating totals.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with an integer on how much to adjust the parameter by.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <param Max: x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Sets max caps for the 'param' to be 'x'. If there are multiple max caps
 *   available to the unit, then the highest will be selected.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with an integer to determine what the max cap should be.
 *
 * ---
 *
 * <xparam Plus: +x%>
 * <xparam Plus: -x%>
 *
 * <xparam Plus: +x.x>
 * <xparam Plus: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'xparam' plus value when calculating totals.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <xparam Rate: x%>
 * <xparam Rate: x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Changes 'param' rate to 'x' to alter the total 'xparam' value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <xparam Flat: +x%>
 * <xparam Flat: -x%>
 *
 * <xparam Flat: +x.x>
 * <xparam Flat: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'xparam' plus value when calculating totals.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <sparam Plus: +x%>
 * <sparam Plus: -x%>
 *
 * <sparam Plus: +x.x>
 * <sparam Plus: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'sparam' plus value when calculating totals.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <sparam Rate: x%>
 * <sparam Rate: x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Changes 'param' rate to 'x' to alter the total 'sparam' value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <sparam Flat: +x%>
 * <sparam Flat: -x%>
 *
 * <sparam Flat: +x.x>
 * <sparam Flat: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'sparam' plus value when calculating totals.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   S Parameter => Formula.
 *
 * === JavaScript Notetags: Basic, X, and S Parameters ===
 *
 * The following are notetags made for users with JavaScript knowledge. These
 * notetags are primarily aimed at Basic, X, and S Parameters.
 *
 * ---
 *
 * <JS param Plus: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'param' plus value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   plus amount for the parameter's total calculation.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <JS param Rate: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'param' rate value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   param rate amount for the parameter's total calculation.
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <JS param Flat: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'param' flat value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   flat bonus amount for the parameter's total calculation.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <JS param Max: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to determine what the max cap for 'param' should be. If there
 *   are multiple max caps available to the unit, then the highest is selected.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine the max cap for the
 *   desired parameter.
 *
 * ---
 *
 * <JS xparam Plus: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'xparam' plus value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   plus amount for the X parameter's total calculation.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <JS xparam Rate: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'xparam' rate value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   param rate amount for the X parameter's total calculation.
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <JS xparam Flat: code>
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'xparam' flat value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   flat bonus amount for the X parameter's total calculation.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <JS sparam Plus: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'sparam' plus value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   plus amount for the S parameter's total calculation.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <JS sparam Rate: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'sparam' rate value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   param rate amount for the S parameter's total calculation.
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <JS sparam Flat: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'sparam' flat value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   flat bonus amount for the S parameter's total calculation.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 * 
 * === Battle Setting-Related Notetags ===
 * 
 * These tags will change the settings for battle regardless of how the battle
 * system is set up normally. Insert these tags in either the noteboxes of maps
 * or the names of troops for them to take effect. If both are present for a
 * specific battle, then priority goes to the setting found in the troop name.
 * 
 * ---
 * 
 * <FV>
 * <Front View>
 * <Battle View: FV>
 * <Battle View: Front View>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the perspective of battle to front view for this specific map or
 *   battle.
 * - Make sure you have the enemy image files available in the img/enemies/
 *   folder as they will used instead of the "sv_enemies" graphics.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <SV>
 * <Side View>
 * <Battle View: SV>
 * <Battle View: Side View>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the perspective of battle to side view for this specific map or
 *   battle.
 * - Make sure you have the enemy image files available in the img/sv_enemies/
 *   folder as they will used instead of the "enemies" graphics.
 * - Make sure your actors have "sv_actor" graphics attached to them.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <DTB>
 * <Battle System: DTB>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the battle system to the default battle system (DTB).
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <TPB Active>
 * <ATB Active>
 * <Battle System: TPB Active>
 * <Battle System: ATB Active>
 * 
 * <TPB Wait>
 * <ATB Wait>
 * <Battle System: TPB Wait>
 * <Battle System: ATB Wait>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the battle system to the time progress battle system (TPB) or
 *   active turn battle system (ATB) if you have VisuMZ_2_BattleSystemATB
 *   installed for the game project.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <BTB>
 * <Battle System: BTB>
 * 
 * <CTB>
 * <Battle System: CTB>
 * 
 * <ETB>
 * <Battle System: ETB>
 * 
 * <FTB>
 * <Battle System: FTB>
 * 
 * <OTB>
 * <Battle System: OTB>
 * 
 * <PTB>
 * <Battle System: PTB>
 * 
 * <STB>
 * <Battle System: STB>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the battle system to the respective battle system as long as you
 *   have those plugins installed in the current project.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
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
 * === Export Plugin Commands ===
 * 
 * ---
 * 
 * Export: All Maps Text
 * - PLAY TEST ONLY. Exports all of the text from all maps,
 *   their events, event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 * 
 * ---
 * 
 * Export: All Troops Text
 * - PLAY TEST ONLY. Exports all of the text from all troops,
 *   their event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 * 
 * ---
 * 
 * Export: Current Map Text
 * - PLAY TEST ONLY. Exports all of the text on the current map,
 *   its events, the event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 *   - If not in battle, this Plugin Command will not work.
 * 
 * ---
 * 
 * Export: Current Troop Text
 * - PLAY TEST ONLY. Exports all of the text on the current troop,
 *   the troop's event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 *   - If not in battle, this Plugin Command will not work.
 * 
 * ---
 * 
 * === Game Plugin Commands ===
 * 
 * ---
 *
 * Game: Open URL
 * - Opens a website URL from the game.
 *
 *   URL:
 *   - Where do you want to take the player?
 *
 * ---
 * 
 * === Gold Plugin Commands ===
 * 
 * ---
 *
 * Gold: Gain/Lose
 * - Allows you to give/take more gold than the event editor limit.
 *
 *   Value:
 *   - How much gold should the player gain/lose?
 *   - Use negative values to remove gold.
 *
 * ---
 * 
 * === Picture Plugin Commands ===
 * 
 * ---
 *
 * Picture: Easing Type
 * - Changes the easing type to a number of options.
 *
 *   Picture ID:
 *   - Which picture do you wish to apply this easing to?
 *
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *
 *   Instructions:
 *   - Insert this Plugin Command after a "Move Picture" event command.
 *   - Turn off "Wait for Completion" in the "Move Picture" event.
 *   - You may have to add in your own "Wait" event command after.
 *
 * ---
 * 
 * Picture: Erase All
 * - Erases all pictures on the screen because it's extremely tedious to do it
 *   one by one.
 * 
 * ---
 * 
 * Picture: Erase Range
 * - Erases all pictures within a range of numbers because it's extremely
 *   tedious to do it one by one.
 * 
 *   Starting ID:
 *   - The starting ID of the pictures to erase.
 * 
 *   Ending ID:
 *   - The ending ID of the pictures to erase.
 * 
 * ---
 * 
 * Picture: Show Icon
 * - Shows an icon instead of a picture image.
 * - The picture icon can be controlled like any other picture.
 * 
 *   General:
 *
 *     Picture ID Number:
 *     - What is the ID of the picture you wish to show at?
 *     - Use a number between 1 and 100.
 *     - You may use JavaScript code.
 *
 *     Icon Index:
 *     - Select the icon index to use for this picture.
 *     - You may use JavaScript code.
 *
 *     Smooth Icon?:
 *     - This will make the icon smoothed out or pixelated.
 * 
 *   Picture Settings:
 * 
 *     Position:
 *
 *       Origin:
 *       - What is the origin of this picture icon?
 *         - Upper Left
 *         - Center
 *
 *       Position X:
 *       - X coordinate of the picture.
 *       - You may use JavaScript code.
 *
 *       Position Y:
 *       - Y coordinate of the picture.
 *       - You may use JavaScript code.
 * 
 *     Scale:
 *
 *       Width %:
 *       - Horizontal scale of the picture.
 *       - You may use JavaScript code.
 *       - 100 is 100%
 *
 *       Height %:
 *       - Vertical scale of the picture.
 *       - You may use JavaScript code.
 *       - 100 is 100%
 * 
 *     Blend:
 *
 *       Opacity:
 *       - Insert a number to determine opacity level.
 *       - Use a number between 0 and 255.
 *       - You may use JavaScript code.
 *
 *       Blend Mode:
 *       - What kind of blend mode do you wish to apply to the picture?
 * 
 * ---
 * 
 * === Screen Shake Plugin Commands ===
 * 
 * ---
 * 
 * Screen Shake: Custom:
 * - Creates a custom screen shake effect and also sets the following uses of
 *   screen shake to this style.
 * 
 *   Shake Style:
 *   - Select shake style type.
 *   - Original
 *   - Random
 *   - Horizontal
 *   - Vertical
 * 
 *   Power:
 *   - Power level for screen shake.
 * 
 *   Speed:
 *   - Speed level for screen shake.
 * 
 *   Duration:
 *   - Duration of screenshake.
 *   - You can use code as well.
 * 
 *   Wait for Completion:
 *   - Wait until completion before moving onto the next event?
 * 
 * ---
 * 
 * === Switch Plugin Commands ===
 * 
 * ---
 * 
 * Switches: Randomize ID(s)
 * - Select specific Switch ID's to randomize ON/OFF.
 * 
 *   Switch ID(s):
 *   - Select which Switch ID(s) to toggle.
 * 
 *   Chance for ON:
 *   - Chance out of 100 that determines the switches to be ON.
 * 
 * ---
 *
 * Switches: Randomize Range
 * - Select specific Switch ID Range to randomize ON/OFF.
 * - The ratio determines the ON/OFF distribution.
 *
 *   Starting ID:
 *   - The starting ID of the Switch to toggle.
 *
 *   Ending ID:
 *   - The ending ID of the Switch to toggle.
 *
 *   Chance for ON:
 *   - Chance out of 100 that determines the switches to be ON.
 *
 * ---
 *
 * Switches: Toggle ID(s)
 * - Select specific Switch ID's to toggle ON/OFF.
 * - ON becomes OFF. OFF becomes ON.
 *
 *   Switch ID(s):
 *   - Select which Switch ID(s) to toggle.
 *
 * ---
 *
 * Switches: Toggle Range
 * - Select specific Switch ID Range to toggle ON/OFF.
 * - ON becomes OFF. OFF becomes ON.
 *
 *   Starting ID:
 *   - The starting ID of the Switch to toggle.
 *
 *   Ending ID:
 *   - The ending ID of the Switch to toggle.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Battle System Change
 * - Switch to a different battle system in-game.
 *
 *   Change To:
 *   - Choose which battle system to switch to.
 *     - Database Default (Use game database setting)
 *     - -
 *     - DTB: Default Turn Battle
 *     - TPB Active: Time Progress Battle (Active)
 *     - TPB Wait: Time Progress Battle (Wait)
 *     - -
 *     - BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 *     - CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 *     - OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 *     - STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 *
 * ---
 * 
 * System: Load Images
 * - Allows you to (pre) load up images ahead of time.
 *
 *   img/animations/:
 *   img/battlebacks1/:
 *   img/battlebacks2/:
 *   img/enemies/:
 *   img/faces/:
 *   img/parallaxes/:
 *   img/pictures/:
 *   img/sv_actors/:
 *   img/sv_enemies/:
 *   img/system/:
 *   img/tilesets/:
 *   img/titles1/:
 *   img/titles2/:
 *   - Which files do you wish to load from this directory?
 * 
 * ---
 *
 * System: Main Font Size
 * - Set the game's main font size.
 *
 *   Change To:
 *   - Change the font size to this number.
 *
 * ---
 *
 * System: Side View Battle
 * - Switch between Front View or Side View for battle.
 *
 *   Change To:
 *   - Choose which view type to switch to.
 *
 * ---
 *
 * System: Window Padding
 * - Change the game's window padding amount.
 *
 *   Change To:
 *   - Change the game's standard window padding to this value.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Quality of Life Settings
 * ============================================================================
 *
 * A variety of (optional) settings and changes are added with the Core Engine
 * to improve the quality of life for both the game devs and players alike.
 *
 * ---
 *
 * Play Test
 * 
 *   New Game on Boot:
 *   - Automatically start a new game on Play Test?
 *   - Only enabled during Play Test.
 *
 *   No Play Test Mode:
 *   - Force the game to be out of Play Test mode when play testing.
 * 
 *   Open Console on Boot:
 *   - Open the Debug Console upon booting up your game?
 *   - Only enabled during Play Test.
 *
 *   F6: Toggle Sound:
 *   - F6 Key Function: Turn on all sound to 100% or to 0%, toggling between
 *     the two.
 *   - Only enabled during Play Test.
 *
 *   F7: Toggle Fast Mode:
 *   - F7 Key Function: Toggle fast mode.
 *   - Only enabled during Play Test.
 *
 *   New Game > Common Event:
 *   - Runs a common event each time a new game is started.
 *   - Only enabled during Play Test.
 *
 * ---
 * 
 * Battle Test
 * 
 *   Add Item Type:
 *   Add Weapon Type:
 *   Add Armor Type:
 *   - Add copies of each database item, weapon, and/or armor?
 *   - Effective only during battle test.
 * 
 *   Added Quantity:
 *   - Determines how many items are added during a battle test instead of
 *     the maximum amount.
 * 
 * ---
 *
 * Digit Grouping
 *
 *   Standard Text:
 *   - Make numbers like 1234567 appear like 1,234,567 for standard text
 *     inside windows?
 *
 *   Ex Text:
 *   - Make numbers like 1234567 appear like 1,234,567 for ex text,
 *     written through drawTextEx (like messages)?
 *
 *   Damage Sprites:
 *   - Make numbers like 1234567 appear like 1,234,567 for in-battle
 *     damage sprites?
 *
 *   Gauge Sprites:
 *   - Make numbers like 1234567 appear like 1,234,567 for visible gauge
 *     sprites such as HP, MP, and TP gauges?
 * 
 *   Country/Locale
 *   - Base the digit grouping on which country/locale?
 *   - This will follow all of the digit grouping rules found here:
 *     https://www.w3schools.com/JSREF/jsref_tolocalestring_number.asp
 *
 * ---
 *
 * Player Benefit
 *
 *   Encounter Rate Min:
 *   - Minimum number of steps the player can take without any
 *     random encounters.
 *
 *   Escape Always:
 *   - If the player wants to escape a battle, let them escape the battle
 *     with 100% chance.
 *
 *   Accuracy Formula:
 *   - Accuracy formula calculation change to
 *     Skill Hit% * (User HIT - Target EVA) for better results.
 *
 *   Accuracy Boost:
 *   - Boost HIT and EVA rates in favor of the player.
 *
 *   Level Up -> Full HP:
 *   Level Up -> Full MP:
 *   - Recovers full HP or MP when an actor levels up.
 *
 * ---
 *
 * Misc
 * 
 *   Animation: Mirror Offset X:
 *   - When animations are mirrored, mirror their Offset X values, too.
 *   - The animation name tags <Mirror Offset X> and <No Mirror Offset X> will
 *     override this effect for that specific animation.
 * 
 *   Anti-Zoom Pictures:
 *   - If on, prevents pictures from being affected by zoom.
 *
 *   Font Shadows:
 *   - If on, text uses shadows instead of outlines.
 *
 *   Font Smoothing:
 *   - If on, smoothes fonts shown in-game.
 *
 *   Key Item Protection:
 *   - If on, prevents Key Items from being able to be sold and from being
 *     able to be consumed.
 *
 *   Modern Controls:
 *   - If on, allows usage of the Home/End buttons.
 *   - Home would scroll to the first item on a list.
 *   - End would scroll to the last item on a list.
 *   - Shift + Up would page up.
 *   - Shift + Down would page down.
 * 
 *   NewGame > CommonEvent:
 *   - Runs a common event each time a new game during any session is started.
 *   - Applies to all types of sessions, play test or not.
 *
 *   No Tile Shadows:
 *   - Removes tile shadows from being displayed in-game.
 *
 *   Pixel Image Rendering:
 *   - If on, pixelates the image rendering (for pixel games).
 *
 *   Require Focus?
 *   - Requires the game to be focused? If the game isn't focused, it will
 *     pause if it's not the active window.
 *
 *   Smart Event Collision:
 *   - Makes events only able to collide with one another if they're
 *    'Same as characters' priority.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Battle System
 * ============================================================================
 * 
 * Choose which battle system to use for your game.
 * 
 * ---
 * 
 *   Database Default (Use game database setting)
 * 
 *   -
 * 
 *   DTB: Default Turn Battle
 *   TPB Active: Time Progress Battle (Active)
 *   TPB Wait: Time Progress Battle (Wait)
 * 
 *   -
 * 
 *   BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 *   CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 *   ETB: Energy Turn Battle (Req VisuMZ_2_BattleSystemETB)
 *   FTB: Free Turn Battle (Req VisuMZ_2_BattleSystemFTB)
 *   OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 *   PTB: Press Turn Battle (Req VisuMZ_2_BattleSystemPTB)
 *   STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 * 
 *   -
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Color Settings
 * ============================================================================
 *
 * These settings allow you, the game dev, to have more control over which
 * colors appear for what conditions found in the game. You can use regular
 * numbers to use the colors predetermined by the game's Window Skin or you
 * can use the #rrggbb format for a hex color code.
 *
 * You can find out what hex codes belong to which color from this website:
 * https://htmlcolorcodes.com/
 *
 * ---
 *
 * Basic Colors
 * - These are colors that almost never change and are used globally throughout
 *   the in-game engine.
 *
 *   Normal:
 *   System:
 *   Crisis:
 *   Death:
 *   Gauge Back:
 *   HP Gauge:
 *   MP Gauge:
 *   MP Cost:
 *   Power Up:
 *   Power Down:
 *   CT Gauge:
 *   TP Gauge:
 *   Pending Color:
 *   EXP Gauge:
 *   MaxLv Gauge:
 *   - Use #rrggbb for custom colors or regular numbers
 *   for text colors from the Window Skin.
 *
 * ---
 *
 * Alpha Colors:
 * - These are colors that have a bit of transparency to them and are specified
 *   by the 'rgba(red, green, blue, alpha)' format.
 * - Replace 'red' with a number between 0-255 (integer).
 * - Replace 'green' with a number between 0-255 (integer).
 * - Replace 'blue' with a number between 0-255 (integer).
 * - Replace 'alpha' with a number between 0 and 1 (decimal).
 * 
 *   Window Font Outline:
 *   Gauge Number Outline:
 *   Dim Color:
 *   Item Back Color:
 *   - Colors with a bit of alpha settings.
 *   - Format rgba(0-255, 0-255, 0-255, 0-1)
 *
 * ---
 *
 * Conditional Colors:
 * - These require a bit of JavaScript knowledge. These determine what colors
 *   to use under which situations and uses such as different values of HP, MP,
 *   TP, for comparing equipment, and determine damage popup colors.
 * 
 *   JS: Actor HP Color:
 *   JS: Actor MP Color:
 *   JS: Actor TP Color:
 *   - Code used for determining what HP, MP, or TP color to use for actors.
 *
 *   JS: Parameter Change:
 *   - Code used for determining whatcolor to use for parameter changes.
 *
 *   JS: Damage Colors:
 *   - Code used for determining what color to use for damage types.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Gold Settings
 * ============================================================================
 *
 * Gold is the main currency in RPG Maker MZ. The settings provided here will
 * determine how Gold appears in the game and certain behaviors Gold has.
 *
 * ---
 *
 * Gold Settings
 *
 *   Gold Max:
 *   - Maximum amount of Gold the party can hold.
 *   - Default 99999999
 *
 *   Gold Font Size:
 *   - Font size used for displaying Gold inside Gold Windows.
 *   - Default: 26
 *
 *   Gold Icon:
 *   - Icon used to represent Gold.
 *   - Use 0 for no icon.
 *
 *   Gold Overlap:
 *   - Text used too much Gold to fit in the window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Image Loading
 * ============================================================================
 *
 * Not all images are loaded at once in-game. RPG Maker MZ uses asynchronous
 * loading which means images are loaded when needed. This may cause delays in
 * when you want certain images to appear. However, if an image is loaded
 * beforehand, they can be used immediately provided they aren't removed from
 * the image cache.
 *
 * ---
 *
 * Image Loading
 *
 *   img/animations/:
 *   img/battlebacks1/:
 *   img/battlebacks2/:
 *   img/enemies/:
 *   img/faces/:
 *   img/parallaxes/:
 *   img/pictures/:
 *   img/sv_actors/:
 *   img/sv_enemies/:
 *   img/system/:
 *   img/tilesets/:
 *   img/titles1/:
 *   img/titles2/:
 *   - Which files do you wish to load from this directory upon starting
 *     up the game?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Keyboard Input Settings
 * ============================================================================
 *
 * Settings for the game that utilize keyboard input. These are primarily for
 * the name input scene (Scene_Name) and the number input event command. These
 * settings have only been tested on English keyboards and may or may not be
 * compatible with other languages, so please disable these features if they do
 * not fit in with your game.
 * 
 * If a controller is connected upon entering the name change scene, it will
 * use the default manual-entry mode instead of the keyboard-entry mode. If a
 * controller button is pressed during the keyboard-entry mode, it will
 * automatically switch to the manual-entry mode.
 * 
 * This plugin does not provide support for controllers that are undetected by
 * RPG Maker MZ's default controller support.
 *
 * ---
 * 
 * Controls
 * 
 *   WASD Movement:
 *   - Enables or disables WASD movement for your game project.
 *   - Moves the W page down button to E.
 * 
 *   R Button: Dash Toggle:
 *   - Enables or disables R button as an Always Dash option toggle.
 * 
 * ---
 *
 * Name Input
 * 
 *   Enable?:
 *   - Enables keyboard input for name entry.
 *   - Only tested with English keyboards.
 * 
 *   Default Mode:
 *   - Select default mode when entering the scene.
 *     - Default - Uses Arrow Keys to select letters.
 *     - Keyboard - Uses Keyboard to type in letters.
 * 
 *   QWERTY Layout:
 *   - Uses the QWERTY layout for manual entry.
 * 
 *   Keyboard Message:
 *   - The message displayed when allowing keyboard entry.
 *   - You may use text codes here.
 * 
 *   Banned Words:
 *   - Players cannot use these words for names.
 *   - These include words inside the names.
 *   - If a banned word is used, a buzzer sound will play.
 *
 * ---
 *
 * Number Input
 * 
 *   Enable?:
 *   - Enables keyboard input for number entry.
 *   - Only tested with English keyboards.
 *
 * ---
 * 
 * Button Assist
 * 
 *   Switch to Keyboard:
 *   - Text used to describe the keyboard switch.
 * 
 *   Switch To Manual:
 *   - Text used to describe the manual entry switch.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Menu Background Settings
 * ============================================================================
 *
 * These settings in the Plugin Parameters allow you to adjust the background
 * images used for each of the scenes. The images will be taken from the game
 * project folders img/titles1/ and img/titles2/ to load into the game.
 *
 * These settings are only available to scenes found within the Main Menu, the
 * Shop scene, and the Actor Naming scene.
 *
 * ---
 *
 * Menu Background Settings:
 *
 *   Scene_Menu:
 *   Scene_Item:
 *   Scene_Skill:
 *   Scene_Equip:
 *   Scene_Status:
 *   Scene_Options:
 *   Scene_Save:
 *   Scene_Load:
 *   Scene_GameEnd:
 *   Scene_Shop:
 *   Scene_Name:
 *   - Individual background settings for the scene.
 *
 *   Scene_Unlisted
 *   - Individual background settings for any scenes that aren't listed above.
 *
 * ---
 *
 * Background Settings
 *
 *   Snapshop Opacity:
 *   - Snapshot opacity for the scene.
 *
 *   Background 1:
 *   - Filename used for the bottom background image.
 *   - Leave empty if you don't wish to use one.
 *
 *   Background 2:
 *   - Filename used for the upper background image.
 *   - Leave empty if you don't wish to use one.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Menu Button Assist Window
 * ============================================================================
 *
 * In most modern RPG's, there exist small windows on the screen which tell the
 * player what the control schemes are for that scene. This plugin gives you
 * the option to add that window to the menu scenes in the form of a Button
 * Assist Window.
 *
 * ---
 *
 * General
 * 
 *   Enable:
 *   - Enable the Menu Button Assist Window.
 * 
 *   Location:
 *   - Determine the location of the Button Assist Window.
 *   - Requires Plugin Parameters => UI => Side Buttons ON.
 *
 *   Background Type:
 *   - Select background type for this window.
 *
 * ---
 *
 * Text
 * 
 *   Text Format:
 *   - Format on how the buttons are displayed.
 *   - Text codes allowed. %1 - Key, %2 - Text
 * 
 *   Multi-Key Format:
 *   - Format for actions with multiple keys.
 *   - Text codes allowed. %1 - Key 1, %2 - Key 2
 * 
 *   OK Text:
 *   Cancel Text:
 *   Switch Actor Text:
 *   - Default text used to display these various actions.
 *
 * ---
 *
 * Keys
 * 
 *   Key: Unlisted Format:
 *   - If a key is not listed below, use this format.
 *   - Text codes allowed. %1 - Key
 * 
 *   Key: Up:
 *   Key: Down:
 *   Key: Left:
 *   Key: Right:
 *   Key: Shift:
 *   Key: Tab:
 *   Key: A through Z:
 *   - How this key is shown in-game.
 *   - Text codes allowed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Menu Layout Settings
 * ============================================================================
 *
 * These settings allow you to rearrange the positions of the scenes accessible
 * from the Main Menu, the Shop scene, and the Actor Naming scene. This will
 * require you to have some JavaScript knowledge to make the windows work the
 * way you would like.
 *
 * ---
 *
 * Menu Layout Settings
 *
 *   Scene_Title:
 *   Scene_Menu:
 *   Scene_Item:
 *   Scene_Skill:
 *   Scene_Equip:
 *   Scene_Status:
 *   Scene_Options:
 *   Scene_Save:
 *   Scene_Load:
 *   Scene_GameEnd:
 *   Scene_Shop:
 *   Scene_Name:
 *   - Various options on adjusting the selected scene.
 *
 * ---
 *
 * Scene Window Settings
 *
 *   Background Type:
 *   - Selects the background type for the selected window.
 *   - Window
 *   - Dim
 *   - Transparent
 *
 *   JS: X, Y, W, H
 *   - Code used to determine the dimensions for the selected window.
 *
 * ---
 *
 * Scene_Title Settings
 * - The following are settings unique to Scene_Title.
 *
 * Title Screen
 *
 *   Document Title Format:
 *   - Format to display text in document title.
 *   - %1 - Main Title, %2 - Subtitle, %3 - Version
 *
 *   Subtitle:
 *   - Subtitle to be displayed under the title name.
 *   
 *   Version:
 *   - Version to be display in the title screen corner.
 *   
 *   JS: Draw Title:
 *   - Code used to draw the game title.
 *   
 *   JS: Draw Subtitle:
 *   - Code used to draw the game subtitle.
 *   
 *   JS: Draw Version:
 *   - Code used to draw the game version.
 *   
 *   Button Fade Speed:
 *   - Speed at which the buttons fade in at (1-255).
 *
 * ---
 *
 * Scene_GameEnd Settings
 * - The following are settings unique to Scene_GameEnd.
 *   
 *   Command Window List:
 *   - Window commands used by the title screen.
 *   - Add new commands here.
 *
 * ---
 *
 * Command Window List
 * - This is found under Scene_Title and Scene_GameEnd settings.
 *
 *   Symbol:
 *   - The symbol used for this command.
 * 
 *   STR: Text:
 *   - Displayed text used for this title command.
 *   - If this has a value, ignore the JS: Text version.
 * 
 *   JS: Text:
 *   - JavaScript code used to determine string used for the displayed name.
 * 
 *   JS: Show:
 *   - JavaScript code used to determine if the item is shown or not.
 * 
 *   JS: Enable:
 *   - JavaScript code used to determine if the item is enabled or not.
 * 
 *   JS: Ext:
 *   - JavaScript code used to determine any ext data that should be added.
 * 
 *   JS: Run Code:
 *   - JavaScript code that runs once this command is selected.
 * 
 * ---
 *
 * Title Picture Buttons:
 * - This is found under Scene_Title settings.
 * 
 *   Picture's Filename:
 *   - Filename used for the picture.
 *
 *   Button URL:
 *   - URL for the button to go to upon being clicked.
 *
 *   JS: Position:
 *   - JavaScript code that helps determine the button's Position.
 *
 *   JS: On Load:
 *   - JavaScript code that runs once this button bitmap is loaded.
 *
 *   JS: Run Code:
 *   - JavaScript code that runs once this button is pressed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Parameter Settings
 * ============================================================================
 *
 * A battler's parameters, or stats as some devs know them as, are the values
 * that determine how a battler performs. These settings allow you to alter
 * their behaviors and give boosts to trait objects in a controlled manner.
 *
 * ---
 *
 * Parameter Settings
 *
 *   Displayed Parameters
 *   - A list of the parameters that will be displayed in-game.
 *   - Shown in the Equip Menu.
 *   - Shown in the Status Menu.
 *
 *   Extended Parameters
 *   - The list shown in extended scenes (for other VisuStella plugins).
 *
 * ---
 *
 * === Basic Parameters ===
 *
 * MHP - MaxHP
 * - This is the maximum health points value. The amount of health points (HP)
 * a battler has determines whether or not the battler is in a living state or
 * a dead state. If the HP value is above 0, then the battler is living. If it
 * is 0 or below, the battler is in a dead state unless the battler has a way
 * to counteract death (usually through immortality). When the battler takes
 * damage, it is usually dealt to the HP value and reduces it. If the battler
 * is healed, then the HP value is increased. The MaxHP value determines what's
 * the maximum amount the HP value can be held at, meaning the battler cannot
 * be healed past that point.
 *
 * MMP - MaxMP
 * - This is the maximum magic points value. Magic points (MP) are typically
 * used for the cost of skills and spells in battle. If the battler has enough
 * MP to fit the cost of the said skill, the battler is able to use the said
 * skill provided that all of the skill's other conditions are met. If not, the
 * battler is then unable to use the skill. Upon using a skill that costs MP,
 * the battler's MP is reduced. However, the battler's MP can be recovered and
 * results in a gain of MP. The MaxMP value determines what is the maximum
 * amount the MP value can be held at, meaning the battler cannot recover MP
 * past the MaxMP value.
 *
 * ATK - Attack
 * - This is the attack value of the battler. By default, this stat is used for
 * the purpose of damage calculations only, and is typically used to represent
 * the battler's physical attack power. Given normal damage formulas, higher
 * values mean higher damage output for physical attacks.
 *
 * DEF - Defense
 * - This is the defense value of the battler. By default, this stat is used
 * for the purpose of damage calculations only, and is typically used to
 * represent the battler's physical defense. Given normal damage formulas,
 * higher values mean less damage received from physical attacks.
 *
 * MAT - Magic Attack
 * - This is the magic attack value of the battler. By default, this stat is
 * used for the purpose of damage calculations only, and is typically used to
 * represent the battler's magical attack power. Given normal damage formulas,
 * higher values mean higher damage output for magical attacks.
 *
 * MDF - Magic Defense
 * - This is the magic defense value of the battler. By default, this stat is
 * used for the purpose of damage calculations only, and is typically used to
 * represent the battler's magical defense. Given normal damage formulas,
 * higher values mean less damage received from magical attacks.
 *
 * AGI - Agility
 * - This is the agility value of the battler. By default, this stat is used to
 * determine battler's position in the battle turn's order. Given a normal turn
 * calculation formula, the higher the value, the faster the battler is, and
 * the more likely the battler will have its turn earlier in a turn.
 *
 * LUK - Luck
 * - This is the luck value of the battler. By default, this stat is used to
 * affect the success rate of states, buffs, and debuffs applied by the battler
 * and received by the battler. If the user has a higher LUK value, the state,
 * buff, or debuff is more likely to succeed. If the target has a higher LUK
 * value, then the state, buff, or debuff is less likely to succeed.
 *
 * ---
 *
 * Basic Parameters
 *
 *   HP Crisis Rate:
 *   - HP Ratio at which a battler can be considered in crisis mode.
 *
 *   JS: Formula:
 *   - Formula used to determine the total value all 8 basic parameters:
 *   - MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK.
 *
 * Parameter Caps:
 *
 *   MaxHP Cap:
 *   MaxMP Cap:
 *   ATK Cap:
 *   DEF Cap:
 *   MAT Cap:
 *   MDF Cap:
 *   AGI Cap:
 *   LUK Cap:
 *   - Formula used to determine the selected parameter's cap.
 *   - These settings DO NOT raise the editor's maximum values. If you want to
 *     raise an enemy's maximum parameter value past their default cap, use the
 *     associated notetag for them instead.
 *
 * ---
 *
 * === X Parameters ===
 *
 * HIT - Hit Rate%
 * - This determines the physical hit success rate of the any physical action.
 * All physical attacks make a check through the HIT rate to see if the attack
 * will connect. If the HIT value passes the randomizer check, the attack will
 * connect. If the HIT value fails to pass the randomizer check, the attack
 * will be considered a MISS.
 *
 * EVA - Evasion Rate%
 * - This determines the physical evasion rate against any incoming physical
 * actions. If the HIT value passes, the action is then passed to the EVA check
 * through a randomizer check. If the randomizer check passes, the physical
 * attack is evaded and will fail to connect. If the randomizer check passes,
 * the attempt to evade the action will fail and the action connects.
 *
 * CRI - Critical Hit Rate%
 * - Any actions that enable Critical Hits will make a randomizer check with
 * this number. If the randomizer check passes, extra damage will be carried
 * out by the initiated action. If the randomizer check fails, no extra damage
 * will be added upon the action.
 *
 * CEV - Critical Evasion Rate%
 * - This value is put against the Critical Hit Rate% in a multiplicative rate.
 * If the Critical Hit Rate is 90% and the Critical Evasion Rate is
 * 20%, then the randomizer check will make a check against 72% as the values
 * are calculated by the source code as CRI * (1 - CEV), therefore, with values
 * as 0.90 * (1 - 0.20) === 0.72.
 *
 * MEV - Magic Evasion Rate%
 * - Where EVA is the evasion rate against physical actions, MEV is the evasion
 * rate against magical actions. As there is not magical version of HIT, the
 * MEV value will always be bit against when a magical action is initiated. If
 * the randomizer check passes for MEV, the magical action will not connect. If
 * the randomizer check fails for MEV, the magical action will connect.
 *
 * MRF - Magic Reflect Rate%
 * - If a magical action connects and passes, there is a chance the magical
 * action can be bounced back to the caster. That chance is the Magic Reflect
 * Rate. If the randomizer check for the Magic Reflect Rate passes, then the
 * magical action is bounced back to the caster, ignoring the caster's Magic
 * Evasion Rate. If the randomizer check for the Magic Reflect Rate fails, then
 * the magical action will connect with its target.
 *
 * CNT - Counter Attack Rate%
 * - If a physical action connects and passes, there is a chance the physical
 * action can be avoided and a counter attack made by the user will land on the
 * attacking unit. This is the Counter Attack Rate. If the randomizer check for
 * the Counter Attack Rate passes, the physical action is evaded and the target
 * will counter attack the user. If the randomizer check fails, the physical
 * action will connect to the target.
 *
 * HRG - HP% Regeneration
 * - During a battler's regeneration phase, the battler will regenerate this
 * percentage of its MaxHP as gained HP with a 100% success rate.
 *
 * MRG - MP% Regeneration
 * - During a battler's regeneration phase, the battler will regenerate this
 * percentage of its MaxMP as gained MP with a 100% success rate.
 *
 * TRG - TP% Regeneration
 * - During a battler's regeneration phase, the battler will regenerate this
 * percentage of its MaxTP as gained TP with a 100% success rate.
 *
 * ---
 *
 * X Parameters
 *
 *   JS: Formula:
 *   - Formula used to determine the total value all 10 X parameters:
 *   - HIT, EVA, CRI, CEV, MEV, MRF, CNT, HRG, MRG, TRG.
 *
 * Vocabulary
 *
 *   HIT:
 *   EVA:
 *   CRI:
 *   CEV:
 *   MEV:
 *   MRF:
 *   CNT:
 *   HRG:
 *   MRG:
 *   TRG:
 *   - In-game vocabulary used for the selected X Parameter.
 *
 * ---
 *
 * === S Parameters ===
 *
 * TGR - Target Rate
 * - Against the standard enemy, the Target Rate value determines the odds of
 * an enemy specifically targeting the user for a single target attack. At 0%,
 * the enemy will almost never target the user. At 100%, it will have normal
 * targeting opportunity. At 100%+, the user will have an increased chance of
 * being targeted.
 * *NOTE: For those using the Battle A.I. Core, any actions that have specific
 * target conditions will bypass the TGR rate.
 *
 * GRD - Guard Effect
 * - This is the effectiveness of guarding. This affects the guard divisor
 * value of 2. At 100% GRD, damage will become 'damage / (2 * 1.00)'. At 50%
 * GRD, damage will become 'damage / (2 * 0.50)'. At 200% GRD, damage will
 * become 'damage / (2 * 2.00)' and so forth.
 *
 * REC - Recovery Effect
 * - This is how effective heals are towards the user. The higher the REC rate,
 * the more the user is healed. If a spell were to heal for 100 and the user
 * has 300% REC, then the user is healed for 300 instead.
 *
 * PHA - Pharmacology
 * - This is how effective items are when used by the user. The higher the PHA
 * rate, the more effective the item effect. If the user is using a Potion that
 * recovers 100% on a target ally and the user has 300% PHA, then the target
 * ally will receive healing for 300 instead.
 *
 * MCR - MP Cost Rate
 * - This rate affects how much MP skills with an MP Cost will require to use.
 * If the user has 100% MCR, then the MP Cost will be standard. If the user has
 * 50% MCR, then all skills that cost MP will cost only half the required MP.
 * If the user has 200% MCR, then all skills will cost 200% their MP cost.
 *
 * TCR - TP Charge Rate
 * - This rate affects how much TP skills with an TP will charge when gaining
 * TP through various actions. At 100%, TP will charge normally. At 50%, TP
 * will charge at half speed. At 200%, TP will charge twice as fast.
 *
 * PDR - Physical Damage Rate
 * - This rate affects how much damage the user will take from physical damage.
 * If the user has 100% PDR, then the user takes the normal amount. If the user
 * has 50% PDR, then all physical damage dealt to the user is halved. If the
 * user has 200% PDR, then all physical damage dealt to the user is doubled.
 *
 * MDR - Magical Damage Rate
 * - This rate affects how much damage the user will take from magical damage.
 * If the user has 100% MDR, then the user takes the normal amount. If the user
 * has 50% MDR, then all magical damage dealt to the user is halved. If the
 * user has 200% MDR, then all magical damage dealt to the user is doubled.
 *
 * FDR - Floor Damage Rate
 * - On the field map, this alters how much damage the user will take when the
 * player walks over a tile that damages the party. The FDR value only affects
 * the damage dealt to the particular actor and not the whole party. If FDR is
 * at 100%, then the user takes the full damage. If FDR is at 50%, then only
 * half of the damage goes through. If FDR is at 200%, then floor damage is
 * doubled for that actor.
 *
 * EXR - Experience Rate
 * - This determines the amount of experience gain the user whenever the user
 * gains any kind of EXP. At 100% EXR, the rate of experience gain is normal.
 * At 50%, the experience gain is halved. At 200%, the experience gain for the
 * user is doubled.
 *
 * ---
 *
 * S Parameters
 *
 *   JS: Formula
 *   - Formula used to determine the total value all 10 S parameters:
 *   - TGR, GRD, REC, PHA, MCR, TCR, PDR, MDR, FDR, EXR.
 *
 * Vocabulary
 *
 *   TGR:
 *   GRD:
 *   REC:
 *   PHA:
 *   MCR:
 *   TCR:
 *   PDR:
 *   MDR:
 *   FDR:
 *   EXR:
 *   - In-game vocabulary used for the selected S Parameter.
 *
 * ---
 *
 * Icons
 * 
 *   Draw Icons?
 *   - Draw icons next to parameter names?
 *
 *   MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK:
 *   HIT, EVA, CRI, CEV, MEV, MRF, CNT, HRG, MRG, TRG:
 *   TGR, GRD, REC, PHA, MCR, TCR, PDR, MDR, FDR, EXR:
 *   - Icon used for the selected parameter.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Custom Parameters Settings
 * ============================================================================
 *
 * As of version 1.07, you can add Custom Parameters to your game if RPG Maker
 * MZ's default set of parameters isn't enough for you. These parameters can
 * have variable functionality depending on how you code it. More importantly,
 * these are compatible with the VisuStella MZ menus and the VisuStella Core
 * Engine's Parameters settings.
 * 
 * For clarification, these settings do NOT create brand-new parameters for you
 * to use and add to your game nor are the bonuses supported by other plugins
 * in the VisuStella MZ library. These settings exist to function as a bridge
 * for non-VisuStella MZ plugins that have created their own parameter values
 * and to show them inside VisuStella menus.
 *
 * ---
 *
 * Custom Parameter
 * 
 *   Parameter Name:
 *   - What's the parameter's name?
 *   - Used for VisuStella MZ menus.
 * 
 *   Abbreviation:
 *   - What abbreviation do you want to use for the parameter?
 *   - Do not use special characters. Avoid numbers if possible.
 * 
 *   Icon:
 *   - What icon do you want to use to represent this parameter?
 *   - Used for VisuStella MZ menus.
 * 
 *   Type:
 *   - What kind of number value will be returned with this parameter?
 *     - Integer (Whole Numbers Only)
 *     - Float (Decimals are Allowed)
 * 
 *   JS: Value:
 *   - Run this code when this parameter is to be returned.
 *
 * ---
 * 
 * Instructions on Adding Custom Parameters to VisuStella Menus
 * 
 * In the Core Engine and Elements and Status Menu Core plugins, there are
 * plugin parameter fields for you to insert the parameters you want displayed
 * and visible to the player.
 * 
 * Insert in those the abbreviation of the custom parameter. For example, if
 * you want to add the "Strength" custom parameter and the abbreviation is
 * "str", then add "str" to the Core Engine/Elements and Status Menu Core's
 * plugin parameter field for "Strength" to appear in-game. Case does not
 * matter here so you can insert "str" or "STR" and it will register all the
 * same to make them appear in-game.
 * 
 * ---
 * 
 * Instructions on Using Custom Parameters as Mechanics
 * 
 * If you want to use a custom parameter in, say, a damage formula, refer to
 * the abbreviation you have set for the custom parameter. For example, if you
 * want to call upon the "Strength" custom parameter's value and its set
 * abbreviation is "str", then refer to it as such. This is case sensitive.
 * 
 * An example damage formula would be something like the following if using
 * "str" for "Strength" and "con" for "Constitution":
 * 
 *   a.str - b.con
 * 
 * These values are attached to the Game_Battlerbase prototype class.
 * 
 * ---
 * 
 * Instructions on Setting Custom Parameter Values
 * 
 * This requires JavaScript knowledge. There is no way around it. Whatever code
 * you insert into the "JS: Value" field will return the value desired. The
 * 'user' variable will refer to the Game_Battlerbase prototype object in which
 * the information is to be drawn from.
 * 
 * Depending on the "type" you've set for the Custom Parameter, the returned
 * value will be rounded using Math.round for integers and left alone if set as
 * a float number.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Screen Resolution Settings
 * ============================================================================
 *
 * Alter various properties to make the game look better for varying screen
 * resolutions. This is mostly for RPG Maker MZ version 1.3.0 and up where the
 * Troops tab has been updated to match the screen resolution settings found in
 * the System 2 Database tab.
 *
 * ---
 *
 * Troops
 * 
 *   Reposition Actors:
 *   - Update the position of actors in battle if the screen resolution
 *     has changed to become larger than 816x624.
 *   - Ignore if using the VisuStella MZ Battle Core.
 *   - When using the VisuStella MZ Battle Core, adjust the position through
 *     Battle Core > Parameters > Actor Battler Settings > JS: Home Position
 *
 *   Reposition Enemies:
 *   - Update the position of enemies in battle if the screen resolution
 *     has changed to become larger than 816x624.
 * 
 *     For MZ 1.3.0+?:
 *     - Both this parameter and its parent parameter need to be on when using
 *       RPG Maker MZ 1.3.0+.
 *     - If the Core Script is below 1.3.0, this setting is ignored. This does
 *       not take into account what version the editor is on. Pay attention to
 *       that as the plugin will not auto adjust for it.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Screen Shake Settings
 * ============================================================================
 *
 * Get more screen shake effects into your game!
 * 
 * These effects have been added by Aries of Sheratan!
 *
 * ---
 *
 * Settings
 * 
 *   Default Style:
 *   - The default style used for screen shakes.
 *   - Original
 *   - Random
 *   - Horizontal
 *   - Vertical
 * 
 *   JS: Original Style:
 *   JS: Random Style
 *   JS: Horizontal Style
 *   JS: Vertical Style
 *   - This code gives you control over screen shake for this screen
 *     shake style.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Title Command List Settings
 * ============================================================================
 *
 * This plugin parameter allows you to adjust the commands that appear on the
 * title screen. Some JavaScript knowledge is needed.
 *
 * ---
 *
 * Title Command
 * 
 *   Symbol:
 *   - The symbol used for this command.
 * 
 *   STR: Text:
 *   - Displayed text used for this title command.
 *   - If this has a value, ignore the JS: Text version.
 * 
 *   JS: Text:
 *   - JavaScript code used to determine string used for the displayed name.
 * 
 *   JS: Show:
 *   - JavaScript code used to determine if the item is shown or not.
 * 
 *   JS: Enable:
 *   - JavaScript code used to determine if the item is enabled or not.
 * 
 *   JS: Ext:
 *   - JavaScript code used to determine any ext data that should be added.
 * 
 *   JS: Run Code:
 *   - JavaScript code that runs once this command is selected.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Title Picture Buttons Settings
 * ============================================================================
 *
 * These allow you to insert picture buttons on your title screen that can
 * send users to various links on the internet when clicked.
 *
 * ---
 *
 * Settings
 * 
 *   Picture's Filename:
 *   - Filename used for the picture.
 * 
 *   Button URL:
 *   - URL for the button to go to upon being clicked.
 * 
 *   JS: Position:
 *   - JavaScript code that helps determine the button's Position.
 * 
 *   JS: On Load:
 *   - JavaScript code that runs once this button bitmap is loaded.
 * 
 *   JS: Run Code:
 *   - JavaScript code that runs once this button is pressed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: UI Settings
 * ============================================================================
 *
 * In previous iterations of RPG Maker, the Core Engine would allow you to
 * change the screen resolution. In MZ, that functionality is provided by
 * default but a number of UI settings still remain. These settings allow you
 * adjust how certain in-game objects and menus are displayed.
 *
 * ---
 *
 * UI Area
 *
 *   Fade Speed:
 *   - Default fade speed for transitions.
 *
 *   Box Margin:
 *   - Set the margin in pixels for the screen borders.
 *
 *   Command Window Width:
 *   - Sets the width for standard Command Windows.
 *
 *   Bottom Help Window:
 *   - Put the Help Window at the bottom of the screen?
 *
 *   Right Aligned Menus:
 *   - Put most command windows to the right side of the screen.
 *
 *   Show Buttons:
 *   - Show clickable buttons in your game?
 * 
 *     Show Cancel Button:
 *     Show Menu Button:
 *     Show Page Up/Down:
 *     Show Number Buttons:
 *     - Show/hide these respective buttons if the above is enabled.
 *     - If 'Show Buttons' is false, these will be hidden no matter what.
 *
 *   Button Area Height:
 *   - Sets the height for the button area.
 *
 *   Bottom Buttons:
 *   - Put the buttons at the bottom of the screen?
 *
 *   Side Buttons:
 *   - Push buttons to the side of the UI if there is room.
 *
 * ---
 *
 * Larger Resolutions
 *
 * ---
 *
 * Menu Objects
 *
 *   Level -> EXP Gauge:
 *   - Draw an EXP Gauge under the drawn level.
 *
 *   Parameter Arrow:
 *   - The arrow used to show changes in the parameter values.
 *
 * ---
 *
 * Text Code Support
 *
 *   Class Names:
 *   - Make class names support text codes?
 *
 *   Nicknames:
 *   - Make nicknames support text codes?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * Adjust the default settings of the windows in-game. This ranges from things
 * such as the line height (to better fit your font size) to the opacity level
 * (to fit your window skins).
 *
 * ---
 *
 * Window Defaults
 * 
 *   Line Height:
 *   - Default line height used for standard windows.
 * 
 *   Item Height Padding:
 *   - Default padding for selectable items.
 * 
 *   Item Padding:
 *   - Default line padding used for standard windows.
 * 
 *   Back Opacity:
 *   - Default back opacity used for standard windows.
 *   - As of version 1.3.0, this is no longer needed.
 *   - This will still work for lower versions.
 * 
 *   Translucent Opacity:
 *   - Default translucent opacity used for standard windows.
 * 
 *   Window Opening Speed:
 *   - Default open speed used for standard windows.
 *   - Default: 32 (Use a number between 0-255)
 * 
 *   Column Spacing:
 *   - Default column spacing for selectable windows.
 *   - Default: 8
 * 
 *   Row Spacing:
 *   - Default row spacing for selectable windows.
 *   - Default: 4
 *
 * ---
 * 
 * Selectable Items:
 * 
 *   Show Background?:
 *   - Selectable menu items have dark boxes behind them. Show them?
 * 
 *   Item Height Padding:
 *   - Default padding for selectable items.
 * 
 *   JS: Draw Background:
 *   - Code used to draw the background rectangle behind clickable menu objects
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: JS: Quick Functions
 * ============================================================================
 * 
 * WARNING: This feature is highly experimental! Use it at your own risk!
 * 
 * JavaScript Quick Functions allow you to quickly declare functions in the
 * global namespace for ease of access. It's so that these functions can be
 * used in Script Calls, Control Variable Script Inputs, Conditional Branch
 * Script Inputs, Damage Formulas, and more.
 * 
 * ---
 * 
 * JS: Quick Function
 * 
 *   Function Name:
 *   - The function's name in the global namespace.
 *   - Will not overwrite functions/variables of the same name.
 * 
 *   JS: Code:
 *   - Run this code when using the function.
 * 
 * ---
 * 
 * If you have a Function Name of "Example", then typing "Example()" in a
 * Script Call, Conditional Branch Script Input, or similar field will yield
 * whatever the code is instructed to return.
 * 
 * If a function or variable of a similar name already exists in the global
 * namespace, then the quick function will be ignored and not created.
 * 
 * If a quick function contains bad code that would otherwise crash the game,
 * a fail safe has been implemented to prevent it from doing so, display an
 * error log, and then return a 0 value.
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
 * Version 1.41: July 2, 2021
 * * Compatibility Update
 * ** Further compatibility update with RPG Maker MZ 1.3.0+.
 * * Documentation Update
 * ** Added extra notes to "Important Changes: Bug Fixes" section for the
 *    "Window Skin Bleeding" bug:
 * *** This bug is fixed in the core scripts for RPG Maker MZ v1.3.0+.
 * 
 * Version 1.40: June 25, 2021
 * * Compatibility Update
 * ** Compatibility update with RPG Maker MZ 1.3.0+.
 * * Documentation Update:
 * ** Plugin Parameters > Window Settings > Back Opacity
 * *** As of version 1.3.0, this is no longer needed.
 * *** This will still work for lower versions.
 * ** Help file updated for new features.
 * * Feature Updates!
 * ** Window Skin Bleeding fix updated to newest version.
 * * New Plugin Parameters added:
 * ** Plugin Parmaeters > Screen Resolution Settings
 * *** These settings have been moved from the UI settings to be its own thing.
 * **** This is mostly for RPG Maker MZ version 1.3.0 and up where the Troops
 *      tab has been updated to match the screen resolution settings found in
 *      the System 2 Database tab.
 * *** Reposition Enemies > For MZ 1.3.0+?
 * **** Both of these plugin parameters need to be set to true in order for the
 *      repositioning to work for MZ v1.3.0.
 * **** If the Core Script is below 1.3.0, this setting is ignored. This does
 *      not take into account what version the editor is on. Pay attention to
 *      that as the plugin will not auto adjust for it.
 * 
 * Version 1.39: June 18, 2021
 * * Bug Fixes!
 * ** Number Inputs should now work with the controller if keyboard Number
 *    Input is enabled. Fix made by Olivia.
 * ** RPG Maker Bug: Termination Clear Effects
 * *** In RPG Maker MZ, requesting an animation while transitioning between
 *     scenes, such as going from the map scene to the battle scene, can cause
 *     crashes. This is because the animation queue does not take off
 *     immediately and will likely register incorrect targets for the scene.
 *     This plugin will forcefully clear any registered animations and balloon
 *     effects when terminating a scene in order to prevent crashes.
 * * Documentation Update!
 * ** Help file updated for updated features.
 * * Feature Update!
 * ** <Battle View: x> Troop Name tags can now work with comment tags.
 * ** <Battle System: x> Troop Name tags can now work with comment tags.
 * *** Updates made by Irina.
 * 
 * Version 1.38: June 11, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Caz!
 * *** Picture: Show Icon
 * **** Shows an icon instead of a picture image.
 * **** The picture icon can be controlled like any other picture.
 * 
 * Version 1.37: May 21, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu:
 * *** Switches: Randomize ID(s)
 * *** Switches: Randomize Range
 * *** Switches: Toggle ID(s)
 * *** Switches: Toggle Range
 * **** These Plugin Commands allow you to randomize the ON/OFF positions of
 *      switches or toggle them so that they flip their ON/OFF status.
 * 
 * Version 1.36: May 14, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Irina:
 * *** Export: All Maps Text
 * *** Export: All Troops Text
 * *** Export: Current Map Text
 * *** Export: Current Troop Text
 * **** Play Test Only Plugin Commands. These Plugin Commands are used for
 *      extracting all messages, show choices, comments, and scrolling text to
 *      parse and export them as a TXT file. Useful for getting a game's script
 *      to a voice actor or voice actress.
 * 
 * Version 1.35: May 7, 2021
 * * Documentation Update!
 * ** Added the following text to "Parameter Settings" Plugin Parameters for
 *    extra clarity regarding Parameter Caps:
 * *** These settings DO NOT raise the editor's maximum values. If you want to
 *     raise an enemy's maximum parameter value past their default cap, use the
 *     associated notetag for them instead.
 * 
 * Version 1.34: April 23, 2021
 * * Bug Fixes!
 * ** For the vanilla Equip Status window, custom parameters with integer
 *    values will now show up as integers and not percentiles. Fix by Olivia.
 * * Documentation Update!
 * ** Added clarity to the <param: x> notetag for enemies.
 * *** This notetag does NOT work with X Parameters, S Parameters, or any
 *     custom parameters. This notetag ONLY works with the base parameters.
 * 
 * Version 1.33: April 9, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Window Skin Bleeding
 * *** Since the v1.2.0 update, Window.prototype._refreshBack's frame value has
 *     been set from 96 to 95. This results in the window skin bleeding past
 *     the window's intended borders. The Core Engine now reverts this change
 *     to prevent the bleeding effect from happening.
 * * Feature Update!
 * ** "Encounter Rate Minimum" now has a valid minimum value of 1. Update made
 *    by Olivia.
 * 
 * Version 1.32: April 2, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Yanfly:
 * *** Plugin Parameters > QoL Settings > Battle Test > Add Item Type
 * *** Plugin Parameters > QoL Settings > Battle Test > Add Weapon Type
 * *** Plugin Parameters > QoL Settings > Battle Test > Add Armor Type
 * *** Plugin Parameters > QoL Settings > Battle Test > Added Quantity
 * **** By default, RPG Maker MZ only adds 99 of items and not weapons or armor
 *      making it awkward for testing specific battle mechanics. These settings
 *      allow you to add in custom amounts of items, weapons, and/or armors if
 *      you so wish.
 * 
 * Version 1.31: March 26, 2021
 * * Feature Update!
 * ** Title screen buttons will now become fully opaque when hovered over them
 *    instead of only when pressed. Update made by Yanfly.
 * 
 * Version 1.30: March 19, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Invisible Battle Sprites
 * *** If you removed a party member during battle and added that exact party
 *     member back into the same slot, their sprite would appear invisible. The
 *     VisuStella Core Engine will fix this problem and prevent it from
 *     happening. Fix made by Olivia.
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Arisu:
 * *** Plugin Parameters > QoL Settings > Misc > Ani: Mirror Offset
 * **** When animations are mirrored, mirror their Offset X values, too.
 * ** New animation name tags added by Arisu:
 * *** <Mirror Offset X> and <No Mirror Offset X>
 * **** If these text tags are placed in an animation's name, it will cause the
 *      offset X value to be mirrored when the animation is mirrored or have it
 *      ignored despite being mirrored.
 * 
 * Version 1.29: March 12, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Interactable window client area does not conform to the
 *    window's declared scale when the scale is anything but 1.0. This will now
 *    be fixed through this plugin. Fix made by Olivia.
 * * Documentation Update!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * ** Help file updated for updated features.
 * * Feature Update!
 * ** Name Input should be more controller-friendly. If a controller is
 *    connected upon entering the name change scene, it will use the default
 *    manual-entry mode instead of the keyboard-entry mode. If a controller
 *    button is pressed during the keyboard-entry mode, it will automatically
 *    switch to the manual-entry mode.
 * ** This plugin does not provide support for controllers that are undetected
 *    by RPG Maker MZ's default controller support.
 * ** This feature was already implemented since version 1.27 but wasn't
 *    documented so here we are. Update made by Irina.
 * 
 * Version 1.28: March 5, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: The arrows drawn by a window skin will no longer by
 *    placed on a half pixel when a window's size is an odd number. This would
 *    cause sprite tearing problems and look awful. Fix made by Irina.
 * * Documentation Update!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * 
 * Version 1.27: February 26, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Moved "Show Scrolling Text, additional functionality" section from Bug
 *    Fixes to Major Changes as it was placed in the wrong section.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly.
 * *** Plugin Parameters > Keyboard Input > Name Input > Banned Words
 * **** Insert words you don't want your players to use for character names.
 * 
 * Version 1.26: February 19, 2021
 * * Bug Fixes!
 * ** Certain Plugin Parameters no longer have settings that restrict them to
 *    a maximum of 1. Fix made by Arisu.
 * * Feature Update!
 * ** Changed the default value for a New Game > Common Event upon Play Testing
 *    to 0 to prevent confusion. Update made by Arisu.
 * 
 * Version 1.25: February 5, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Show Scrolling Text, additional functionality added by Arisu
 * *** The event command "Show Scrolling Text" now has additional functionality
 *     as long as the VisuStella MZ Core Engine is installed. If the game dev
 *     inserts "// Script Call" (without the quotes) inside the scrolling text,
 *     then the entirity of the Show Scrolling Text event command will be ran
 *     as a giant script call event command.
 * *** The reason why this functionality is added is because the "Script..."
 *     event command contains only 12 lines maximum. This means for any script
 *     call larger than 12 lines of code cannot be done by normal means as each
 *     script call is ran as a separate instance.
 * *** By repurposing the "Show Scrolling Text" event command to be able to
 *     function as an extended "Script..." event command, such a thing is now
 *     possible with less hassle and more lines to code with.
 * *** This effect does not occur if the Show Scrolling Text event command does
 *     not have "// Script Call" in its contents.
 * 
 * Version 1.24: January 29, 2021
 * * Documentation Update!
 * ** Plugin Parameters: Custom Parameters Settings added the following note:
 * *** For clarification, these settings do NOT create brand-new parameters for
 *     you to use and add to your game nor are the bonuses supported by other
 *     plugins in the VisuStella MZ library. These settings exist to function
 *     as a bridge for non-VisuStella MZ plugins that have created their own
 *     parameter values and to show them inside VisuStella menus.
 * * Feature Update!
 * ** Default JS Plugin Parameter for the Title Command: "Shutdown" now has a
 *    note in it that reads: "Do NOT use this command with mobile devices or
 *    browser games. All it does is cause the game to display a blank, black
 *    canvas which the player is unable to do anything with. It does NOT force
 *    close the browser tab nor the app."
 * *** This is also why this command is disabled by default for any non-NodeJS
 *     client deployed game versions.
 * ** Disabled some bug fixes made by the Core Engine for the default RMMZ code
 *    base since the 1.1.1 version now contains those very same fixes.
 * 
 * Version 1.23: January 22, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.22: January 15, 2021
 * * Documentation Update!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Sprite_Timer is added to the spriteset for the parent
 *    scene, making it affected by any filers, zooms, and/or blurs, hindering
 *    its readability.
 * 
 * Version 1.21: January 8, 2021
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Keyboard Input > Controls > WASD Movement
 * *** Plugin Parameters > Keyboard Input > Controls > R Button: Dash Toggle
 * 
 * Version 1.20: January 1, 2021
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.19: December 25, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s) and feature updates!
 * * Bug Fixes!
 * ** Fixed typo inside of the comments inside the JS: Quick Functions.
 * * Feature Update!
 * ** Plugin Parameters > Color Settings > Outline Color is now renamed to
 *    Font Outline.
 * * New Features!
 * ** New Plugin Parameters added by Shaz!
 * *** Plugin Parameters > Color Settings > Gauge Number Outline
 * 
 * Version 1.18: December 18, 2020
 * * Bug Fixes!
 * ** Compatible string text from the Items and Equips Core will no longer
 *    register MaxHP and MaxMP as percentile values for the info window.
 * ** RPG Maker MZ Bug: Gamepads no longer go rapidfire after a cleared input.
 *    There is now a period of delay for gamepads after an input clear.
 * ** RPG Maker MZ Bug: Unusable items on an individual-actor basis will no
 *    longer be overwritten by party-based usability for battle. Fix by Yanfly.
 * ** RPG Maker MV animations will no longer crash for unplayable sound
 *    effects. Fix made by Yanfly.
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * * New Features!
 * ** New Plugin Parameters added by Yanfly!
 * *** Plugin Parameters > Button Assist > Key: Shift
 * *** Plugin Parameters > Button Assist > Key: Tab
 * **** These let you assign text codes to the Shift and Tab buttons for the
 *      Button Assist windows.
 * *** Plugin Parameters > QoL Settings > Misc > NewGame > CommonEvent
 * **** For an all version (including non-play test) common event to start new
 *      games with.
 * 
 * Version 1.17: December 11, 2020
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.16: December 4, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * Feature Update!
 * ** Button Assist Window for the change name scene will now default to "Tab"
 *    for switching between both modes. Update made by Yanfly.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly:
 * *** Plugin Parameters > Keyboard Input > Default Mode
 * **** Select default mode when entering the scene.
 * 
 * Version 1.15: November 29, 2020
 * * Bug Fixes!
 * ** Pressing "Enter" in the change name scene while the actor's name is
 *    completely empty will no longer result in endless buzzer sounds. Fix made
 *    by Arisu.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * Feature Update!
 * ** For the name change scene, the "Tab" key now also lets the user switch
 *    between the two modes. Update made by Yanfly.
 * * New Features!
 * ** Two new plugin parameters added to Keyboard Input:
 * *** "Switch To Keyboard" and "Switch To Manual"
 * **** These determine the text used for the button assist window when
 *      switching between the two modes. Update made by Yanfly.
 * **** Button Assist window now takes into consideration for these texts.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.14: November 22, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New Plugin Command added by Yanfly!
 * *** System: Load Images
 * **** Allows you to (pre) load up images ahead of time.
 * 
 * Version 1.13: November 15, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.12: November 8, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * Feature Update!
 * ** Screen Shake Plugin Parameters and JS: Quick Function Plugin Parameters
 *    have been taken off experimental status.
 * * New Features!
 * ** New plugin parameters added by Arisu.
 * *** Plugin Parameters > Keyboard Input
 * **** Settings for the game that utilize keyboard input. These are primarily
 *      for the name input scene (Scene_Name) and the number input event
 *      command. These settings have only been tested on English keyboards and
 *      may or may not be compatible with other languages, so please disable
 *      these features if they do not fit in with your game.
 * 
 * Version 1.11: November 1, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Feature Update!
 * ** Bitmap smoothing now takes into consideration for rounding coordinates.
 *    Update made by Irina.
 * 
 * Version 1.10: October 25, 2020
 * * Feature Update!
 * ** Sprite animation location now adjusts position relative to the sprite's
 *    scale, too. Update made by Arisu.
 *
 * Version 1.09: October 18, 2020
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Auto Battle Lock Up. Fixed by Yanfly.
 * *** If an auto battle Actor fights against an enemy whose DEF/MDF is too
 *     high, they will not use any actions at all. This can cause potential
 *     game freezing and softlocks. This plugin will change that and have them
 *     default to a regular Attack.
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.08: October 11, 2020
 * * Feature Update!
 * ** Altered sprite bitmaps via the various draw functions will now be marked
 *    as modified and will automatically purge themselves from graphical memory
 *    upon a sprite's removal to free up more resources. Change made by Yanfly.
 * ** Picture Sprite Origin anchors are now tied to the Game_Picture show and
 *    move commands instead of the Game_Interpretter commands. Change by Arisu.
 * 
 * Version 1.07: October 4, 2020
 * * Documentation Update!
 * ** New documentation added for the new Plugin Parameter category:
 *    "Custom Parameters".
 * * New Features!
 * ** New Plugin Parameter "Custom Parameters" added by Yanfly.
 * *** Create custom parameters for your game! These will appear in
 *     VisuStella MZ menus.
 * 
 * Version 1.06: September 27, 2020
 * * Bug Fixes!
 * ** Battler evasion pose can now occur if there is a miss. These were made
 *    separate in RPG Maker MZ and misses didn't enable the evasion pose. Fix
 *    made by Olivia.
 * * New Features!
 * ** New notetags for Maps and name tags for Troops added by Yanfly!
 * *** <Frontview>, <Sideview> to change the battle view for that specific map,
 *     or troop regardless of what other settings are.
 * *** <DTB>, <TPB Active>, <TPB Wait> to change the battle system for that
 *     specific map or troop regardless of what other settings are.
 * 
 * Version 1.05: September 20, 2020
 * * Bug Fixes!
 * ** <Level: x> notetag for enemies is now fixed! Fix made by Arisu.
 * * Documentation Update!
 * ** Documentation added for the new "System: Battle System Change" Plugin
 *    Command and removed the old "System: Set Time Progress Battle".
 * * Feature Update!
 * ** The Plugin Command "System: Set Time Progress Battle" has been replaced
 *    with "System: Battle System Change" instead. This is to accommodate
 *    future plugins that allow for different battle systems. Added by Yanfly.
 * *** If you have previously used "System: Set Time Progress Battle", please
 *     replace them. We apologize for the inconvenience.
 * * New Features!
 * ** In the Core Engine's plugin parameters, you can now set the Battle System
 *    used. This will default to whatever is the game database's setting. This
 *    feature is used for the future when new battle systems are made. Feature
 *    added by Yanfly.
 * 
 * Version 1.04: September 13, 2020
 * * Documentation Update!
 * ** Added new documentation for the "Title Command List" and Title Picture
 *    Buttons" plugin parameters. They now have a dedicated section each.
 * * Feature Updates!
 * ** Moved the "Title Command List" and "Title Picture Buttons" parameters
 *    from the Menu Layout > Title settings. They were far too hidden away and
 *    users had a hard time finding them. Update made by Yanfly.
 * *** Users who have customized these settings before will need to readjust
 *     them again. We apologize for the inconvenience.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** Having QoL > Modern Controls disabled (why would you) used to prevent the
 *    down button from working. It works again. Fix made by Yanfly.
 * * New Feature!
 * ** Plugin default settings now come with a "Game End" option on the title
 *    screen. For those updating from version 1.02 or order, you can add this
 *    in by opening the Core Engine > Plugin Parameters > Menu Layout Settings
 *    > press "delete" on Scene_Title > open it up, then the new settings will
 *    fill in automatically.
 * * New Experimental Feature Added:
 * ** Screen Shake Settings added to the Plugin Parameters.
 * *** Screen Shake: Custom Plugin Command added!
 * *** Credit to Aries of Sheratan, who gave us permission to use her formula.
 * *** We'll be expanding on more screen shaking options in the future.
 * * Optimization Update
 * ** Digit Grouping now works more efficiently.
 * 
 * Version 1.02: August 30, 2020
 * * New Feature!
 * ** New Plugin Command: "Picture: Erase All". Added by Olivia.
 * *** Erases all pictures on the screen because it's extremely tedious to do
 *     it one by one.
 * ** New Plugin Command: "Picture: Erase Range"
 * *** Erases all pictures within a range of numbers because it's extremely
 *     tedious to do it one by one.
 * * Optimization Update
 * ** Added a more accurate means of parsing numbers for Digit Grouping.
 * ** Window_Base.prototype.textSizeEx now stores data to a cache.
 * * Documentation Update
 * ** Added a section to Major Changes: New Hard-Coded Features on
 *    Digit Grouping and explaining its intricacies.
 * ** Added a note to Plugin Parameters > UI > Reposition Actors to ignore the
 *    setting if using the Battle Core.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Digit grouping fixed to allow text codes to detect values larger than
 *    1000. Fix made by Olivia and Yanfly.
 * ** Param Plus, Rate, Flat notetags fixed. Fix made by Yanfly.
 * * New Experimental Feature Added:
 * ** JS: Quick Functions found in the Plugin Parameters
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
 * @command ExportAllMapText
 * @text Export: All Maps Text
 * @desc PLAY TEST ONLY. Exports all of the text from all maps,
 * their events, event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ExportAllTroopText
 * @text Export: All Troops Text
 * @desc PLAY TEST ONLY. Exports all of the text from all troops,
 * their event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ExportCurMapText
 * @text Export: Current Map Text
 * @desc PLAY TEST ONLY. Exports all of the text on the current map,
 * its events, the event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ExportCurTroopText
 * @text Export: Current Troop Text
 * @desc PLAY TEST ONLY. Exports all of the text on the current troop,
 * the troop's event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command OpenURL
 * @text Game: Open URL
 * @desc Opens a website URL from the game.
 *
 * @arg URL:str
 * @text URL
 * @desc Where do you want to take the player?
 * @default https://www.google.com/
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command GoldChange
 * @text Gold: Gain/Lose
 * @desc Allows you to give/take more gold than the event editor limit.
 *
 * @arg value:eval
 * @text Value
 * @desc How much gold should the player gain/lose?
 * Use negative values to remove gold.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureEasingType
 * @text Picture: Easing Type
 * @desc Changes the easing type to a number of options.
 *
 * @arg pictureId:num
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc Which picture do you wish to apply this easing to?
 * @default 1
 *
 * @arg easingType:str
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
 * @default Linear
 *
 * @arg LineBreak
 * @text ------------------------
 * @default --------------------------------
 *
 * @arg Instructions1
 * @text Instructions
 * @default Insert this Plugin Command after
 *
 * @arg Instructions2
 * @text -
 * @default a "Move Picture" event command.
 * 
 * @arg Instructions3
 * @text -
 * @default Turn off "Wait for Completion"
 *
 * @arg Instructions4
 * @text -
 * @default in the "Move Picture" event.
 *
 * @arg Instructions5
 * @text -
 * @default You may have to add in your own
 *
 * @arg Instructions6
 * @text -
 * @default "Wait" event command after.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureEraseAll
 * @text Picture: Erase All
 * @desc Erases all pictures on the screen because it's extremely
 * tedious to do it one by one.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureEraseRange
 * @text Picture: Erase Range
 * @desc Erases all pictures within a range of numbers because it's
 * extremely tedious to do it one by one.
 *
 * @arg StartID:num
 * @text Starting ID
 * @type number
 * @min 1
 * @max 100
 * @desc The starting ID of the pictures to erase.
 * @default 1
 *
 * @arg EndingID:num
 * @text Ending ID
 * @type number
 * @min 1
 * @max 100
 * @desc The ending ID of the pictures to erase.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 * 
 * @command PictureShowIcon
 * @text Picture: Show Icon
 * @desc Shows an icon instead of a picture image.
 * The picture icon can be controlled like any other picture.
 * 
 * @arg General
 * 
 * @arg PictureID:eval
 * @text Picture ID Number
 * @parent General
 * @desc What is the ID of the picture you wish to show at? Use a
 * number between 1 and 100. You may use JavaScript code.
 * @default 1
 * 
 * @arg IconIndex:eval
 * @text Icon Index
 * @parent General
 * @desc Select the icon index to use for this picture.
 * You may use JavaScript code.
 * @default 23
 *
 * @arg Smooth:eval
 * @text Smooth Icon?
 * @parent General
 * @type boolean
 * @on Smooth
 * @off Pixelate
 * @desc This will make the icon smoothed out or pixelated.
 * @default false
 * 
 * @arg PictureSettings
 * @text Picture Settings
 *
 * @arg Settings:struct
 * @text Settings
 * @parent PictureSettings
 * @type struct<ShowPicture>
 * @desc Alter the settings for how the picture will be shown.
 * @default {"Position":"","Origin:num":"0","PositionX:eval":"0","PositionY:eval":"0","Scale":"","ScaleX:eval":"100","ScaleY:eval":"100","Blend":"","Opacity:eval":"255","BlendMode:num":"0"}
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ScreenShake
 * @text Screen Shake: Custom
 * @desc Creates a custom screen shake effect and also sets
 * the following uses of screen shake to this style.
 *
 * @arg Type:str
 * @text Shake Style
 * @type select
 * @option Original
 * @value original
 * @option Random
 * @value random
 * @option Horizontal
 * @value horizontal
 * @option Vertical
 * @value vertical
 * @desc Select shake style type.
 * @default random
 *
 * @arg Power:num
 * @text Power
 * @type number
 * @min 1
 * @max 9
 * @desc Power level for screen shake.
 * @default 5
 *
 * @arg Speed:num
 * @text Speed
 * @type number
 * @min 1
 * @max 9
 * @desc Speed level for screen shake.
 * @default 5
 *
 * @arg Duration:eval
 * @text Duration
 * @desc Duration of screenshake.
 * You can use code as well.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion
 * @parent Duration:eval
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until completion before moving onto the next event?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchRandomizeOne
 * @text Switches: Randomize ID(s)
 * @desc Select specific Switch ID's to randomize ON/OFF.
 *
 * @arg IDs:arraynum
 * @text Switch ID(s)
 * @type switch[]
 * @desc Select which Switch ID(s) to toggle.
 * @default ["1"]
 *
 * @arg Chance:num
 * @text Chance for ON
 * @type number
 * @min 1
 * @max 100
 * @desc Chance out of 100 that determines the switches to be ON.
 * @default 50
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchRandomizeRange
 * @text Switches: Randomize Range
 * @desc Select specific Switch ID Range to randomize ON/OFF.
 * The ratio determines the ON/OFF distribution.
 *
 * @arg StartID:num
 * @text Starting ID
 * @type switch
 * @desc The starting ID of the Switch to toggle.
 * @default 1
 *
 * @arg EndingID:num
 * @text Ending ID
 * @type switch
 * @desc The ending ID of the Switch to toggle.
 * @default 20
 *
 * @arg Chance:num
 * @text Chance for ON
 * @type number
 * @min 1
 * @max 100
 * @desc Chance out of 100 that determines the switches to be ON.
 * @default 50
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchToggleOne
 * @text Switches: Toggle ID(s)
 * @desc Select specific Switch ID's to toggle ON/OFF.
 * ON becomes OFF. OFF becomes ON.
 *
 * @arg IDs:arraynum
 * @text Switch ID(s)
 * @type switch[]
 * @desc Select which Switch ID(s) to toggle.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchToggleRange
 * @text Switches: Toggle Range
 * @desc Select specific Switch ID Range to toggle ON/OFF.
 * ON becomes OFF. OFF becomes ON.
 *
 * @arg StartID:num
 * @text Starting ID
 * @type switch
 * @desc The starting ID of the Switch to toggle.
 * @default 1
 *
 * @arg EndingID:num
 * @text Ending ID
 * @type switch
 * @desc The ending ID of the Switch to toggle.
 * @default 20
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetBattleSystem
 * @text System: Battle System Change
 * @desc Switch to a different battle system in-game.
 *
 * @arg option:str
 * @text Change To
 * @type select
 * @option Database Default (Use game database setting)
 * @value database
 * @option -
 * @value database
 * @option DTB: Default Turn Battle
 * @value dtb
 * @option TPB Active: Time Progress Battle (Active)
 * @value tpb active
 * @option TPB Wait: Time Progress Battle (Wait)
 * @value tpb wait
 * @option -
 * @value database
 * @option BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 * @value btb
 * @option CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 * @value ctb
 * @option ETB: Energy Turn Battle (Req VisuMZ_2_BattleSystemETB)
 * @value etb
 * @option FTB: Free Turn Battle (Req VisuMZ_2_BattleSystemFTB)
 * @value ftb
 * @option OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 * @value otb
 * @option PTB: Press Turn Battle (Req VisuMZ_2_BattleSystemPTB)
 * @value ptb
 * @option STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 * @value stb
 * @desc Choose which battle system to switch to.
 * @default database
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemLoadImages
 * @text System: Load Images
 * @desc Allows you to (pre) load up images ahead of time.
 *
 * @arg animations:arraystr
 * @text img/animations/
 * @type file[]
 * @dir img/animations/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg battlebacks1:arraystr
 * @text img/battlebacks1/
 * @type file[]
 * @dir img/battlebacks1/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg battlebacks2:arraystr
 * @text img/battlebacks2/
 * @type file[]
 * @dir img/battlebacks2/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg characters:arraystr
 * @text img/characters/
 * @type file[]
 * @dir img/characters/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg enemies:arraystr
 * @text img/enemies/
 * @type file[]
 * @dir img/enemies/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg faces:arraystr
 * @text img/faces/
 * @type file[]
 * @dir img/faces/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg parallaxes:arraystr
 * @text img/parallaxes/
 * @type file[]
 * @dir img/parallaxes/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg pictures:arraystr
 * @text img/pictures/
 * @type file[]
 * @dir img/pictures/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg sv_actors:arraystr
 * @text img/sv_actors/
 * @type file[]
 * @dir img/sv_actors/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg sv_enemies:arraystr
 * @text img/sv_enemies/
 * @type file[]
 * @dir img/sv_enemies/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg system:arraystr
 * @text img/system/
 * @type file[]
 * @dir img/system/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg tilesets:arraystr
 * @text img/tilesets/
 * @type file[]
 * @dir img/tilesets/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg titles1:arraystr
 * @text img/titles1/
 * @type file[]
 * @dir img/titles1/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg titles2:arraystr
 * @text img/titles2/
 * @type file[]
 * @dir img/titles2/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetFontSize
 * @text System: Main Font Size
 * @desc Set the game's main font size.
 *
 * @arg option:num
 * @text Change To
 * @type number
 * @min 1
 * @desc Change the font size to this number.
 * @default 26
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetSideView
 * @text System: Side View Battle
 * @desc Switch between Front View or Side View for battle.
 *
 * @arg option:str
 * @text Change To
 * @type select
 * @option Front View
 * @value Front View
 * @option Side View
 * @value Side View
 * @option Toggle
 * @value Toggle
 * @desc Choose which view type to switch to.
 * @default Toggle
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetWindowPadding
 * @text System: Window Padding
 * @desc Change the game's window padding amount.
 *
 * @arg option:num
 * @text Change To
 * @type number
 * @min 1
 * @desc Change the game's standard window padding to this value.
 * Default: 12
 * @default 12
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param CoreEngine
 * @default Plugin Parameters
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param QoL:struct
 * @text Quality of Life Settings
 * @type struct<QoLSettings>
 * @desc Quality of Life settings for both developers and players.
 * @default {"PlayTest":"","NewGameBoot:eval":"false","ForceNoPlayTest:eval":"false","OpenConsole:eval":"true","F6key:eval":"true","F7key:eval":"true","NewGameCommonEvent:num":"0","DigitGrouping":"","DigitGroupingStandardText:eval":"true","DigitGroupingExText:eval":"true","DigitGroupingDamageSprites:eval":"true","DigitGroupingGaugeSprites:eval":"true","DigitGroupingLocale:str":"en-US","PlayerBenefit":"","EncounterRateMinimum:num":"10","EscapeAlways:eval":"true","ImprovedAccuracySystem:eval":"true","AccuracyBoost:eval":"true","LevelUpFullHp:eval":"true","LevelUpFullMp:eval":"true","Misc":"","AntiZoomPictures:eval":"true","AutoStretch:str":"stretch","FontShadows:eval":"false","FontSmoothing:eval":"true","KeyItemProtect:eval":"true","ModernControls:eval":"true","NoTileShadows:eval":"true","PixelateImageRendering:eval":"false","RequireFocus:eval":"true","SmartEventCollisionPriority:eval":"true"}
 * 
 * @param BattleSystem:str
 * @text Battle System
 * @type select
 * @option Database Default (Use game database setting)
 * @value database
 * @option -
 * @value database
 * @option DTB: Default Turn Battle
 * @value dtb
 * @option TPB Active: Time Progress Battle (Active)
 * @value tpb active
 * @option TPB wait: Time Progress Battle (Wait)
 * @value tpb wait
 * @option -
 * @value database
 * @option BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 * @value btb
 * @option CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 * @value ctb
 * @option ETB: Energy Turn Battle (Req VisuMZ_2_BattleSystemETB)
 * @value etb
 * @option FTB: Free Turn Battle (Req VisuMZ_2_BattleSystemFTB)
 * @value ftb
 * @option OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 * @value otb
 * @option PTB: Press Turn Battle (Req VisuMZ_2_BattleSystemPTB)
 * @value ptb
 * @option STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 * @value stb
 * @desc Choose which battle system to use for your game.
 * @default database
 *
 * @param Color:struct
 * @text Color Settings
 * @type struct<Color>
 * @desc Change the colors used for in-game text.
 * @default {"BasicColors":"","ColorNormal:str":"0","ColorSystem:str":"16","ColorCrisis:str":"17","ColorDeath:str":"18","ColorGaugeBack:str":"19","ColorHPGauge1:str":"20","ColorHPGauge2:str":"21","ColorMPGauge1:str":"22","ColorMPGauge2:str":"23","ColorMPCost:str":"23","ColorPowerUp:str":"24","ColorPowerDown:str":"25","ColorCTGauge1:str":"26","ColorCTGauge2:str":"27","ColorTPGauge1:str":"28","ColorTPGauge2:str":"29","ColorTPCost:str":"29","ColorPending:str":"#2a847d","ColorExpGauge1:str":"30","ColorExpGauge2:str":"31","ColorMaxLvGauge1:str":"14","ColorMaxLvGauge2:str":"6","AlphaColors":"","OutlineColor:str":"rgba(0, 0, 0, 0.6)","DimColor1:str":"rgba(0, 0, 0, 0.6)","DimColor2:str":"rgba(0, 0, 0, 0)","ItemBackColor1:str":"rgba(32, 32, 32, 0.5)","ItemBackColor2:str":"rgba(0, 0, 0, 0.5)","ConditionalColors":"","ActorHPColor:func":"\"// Set the variables used in this function.\\nlet actor = arguments[0];\\n\\n// Check if the actor exists. If not, return normal.\\nif (!actor) {\\n    return this.normalColor();\\n\\n// If the actor is dead, return death color.\\n} else if (actor.isDead()) {\\n    return this.deathColor();\\n\\n// If the actor is dying, return crisis color.\\n} else if (actor.isDying()) {\\n    return this.crisisColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","ActorMPColor:func":"\"// Set the variables used in this function.\\nlet actor = arguments[0];\\n\\n// Check if the actor exists. If not, return normal.\\nif (!actor) {\\n    return this.normalColor();\\n\\n// If MP rate is below 25%, return crisis color.\\n} else if (actor.mpRate() < 0.25) {\\n    return this.crisisColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","ActorTPColor:func":"\"// Set the variables used in this function.\\nlet actor = arguments[0];\\n\\n// Check if the actor exists. If not, return normal.\\nif (!actor) {\\n    return this.normalColor();\\n\\n// If TP rate is below 25%, return crisis color.\\n} else if (actor.tpRate() < 0.25) {\\n    return this.crisisColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","ParamChange:func":"\"// Set the variables used in this function.\\nlet change = arguments[0];\\n\\n// If a positive change, use power up color.\\nif (change > 0) {\\n    return this.powerUpColor();\\n\\n// If a negative change, use power down color.\\n} else if (change < 0) {\\n    return this.powerDownColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","DamageColor:func":"\"// Set the variables used in this function.\\nlet colorType = arguments[0];\\n\\n// Check the value of the color type\\n// and return an appropriate color.\\nswitch (colorType) {\\n\\n    case 0: // HP damage\\n        return \\\"#ffffff\\\";\\n\\n    case 1: // HP recover\\n        return \\\"#b9ffb5\\\";\\n\\n    case 2: // MP damage\\n        return \\\"#bb88bb\\\";\\n\\n    case 3: // MP recover\\n        return \\\"#80b0ff\\\";\\n\\n    default:\\n        return \\\"#808080\\\";\\n}\""}
 *
 * @param Gold:struct
 * @text Gold Settings
 * @type struct<Gold>
 * @desc Change up how gold operates and is displayed in-game.
 * @default {"GoldMax:num":"999999999","GoldFontSize:num":"24","GoldIcon:num":"314","GoldOverlap:str":"A Lot","ItemStyle:eval":"true"}
 *
 * @param ImgLoad:struct
 * @text Image Loading
 * @type struct<ImgLoad>
 * @desc Game images that will be loaded upon booting up the game.
 * Use this responsibly!!!
 * @default {"animations:arraystr":"[]","battlebacks1:arraystr":"[]","battlebacks2:arraystr":"[]","characters:arraystr":"[]","enemies:arraystr":"[]","faces:arraystr":"[]","parallaxes:arraystr":"[]","pictures:arraystr":"[]","sv_actors:arraystr":"[]","sv_enemies:arraystr":"[]","system:arraystr":"[\"Balloon\",\"IconSet\"]","tilesets:arraystr":"[]","titles1:arraystr":"[]","titles2:arraystr":"[]"}
 *
 * @param KeyboardInput:struct
 * @text Keyboard Input
 * @type struct<KeyboardInput>
 * @desc Settings for the game that utilize keyboard input.
 * @default {"Controls":"","WASD:eval":"false","DashToggleR:eval":"false","NameInput":"","EnableNameInput:eval":"true","DefaultMode:str":"keyboard","QwertyLayout:eval":"true","NameInputMessage:eval":"\"Type in this character's name.\\nPress \\\\c[5]ENTER\\\\c[0] when you're done.\\n\\n-or-\\n\\nPress \\\\c[5]arrow keys\\\\c[0]/\\\\c[5]TAB\\\\c[0] to switch\\nto manual character entry.\\n\\nPress \\\\c[5]ESC\\\\c[0]/\\\\c[5]TAB\\\\c[0] to use to keyboard.\"","NumberInput":"","EnableNumberInput:eval":"true","ButtonAssist":"","Keyboard:str":"Keyboard","Manual:str":"Manual"}
 *
 * @param MenuBg:struct
 * @text Menu Background Settings
 * @type struct<MenuBg>
 * @desc Change how menu backgrounds look for each scene.
 * @default {"Scene_Menu:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Item:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Skill:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Equip:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Status:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Options:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Save:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Load:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_GameEnd:struct":"{\"SnapshotOpacity:num\":\"128\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Shop:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Name:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Unlisted:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}"}
 *
 * @param ButtonAssist:struct
 * @text Menu Button Assist Window
 * @type struct<ButtonAssist>
 * @desc Settings pertaining to the Button Assist window found in in-game menus.
 * @default {"General":"","Enable:eval":"true","Location:str":"bottom","BgType:num":"0","Text":"","TextFmt:str":"%1:%2","MultiKeyFmt:str":"%1/%2","OkText:str":"Select","CancelText:str":"Back","SwitchActorText:str":"Switch Ally","Keys":"","KeyUnlisted:str":"\\}❪%1❫\\{","KeyUP:str":"^","KeyDOWN:str":"v","KeyLEFT:str":"<<","KeyRIGHT:str":">>","KeySHIFT:str":"\\}❪SHIFT❫\\{","KeyTAB:str":"\\}❪TAB❫\\{","KeyA:str":"A","KeyB:str":"B","KeyC:str":"C","KeyD:str":"D","KeyE:str":"E","KeyF:str":"F","KeyG:str":"G","KeyH:str":"H","KeyI:str":"I","KeyJ:str":"J","KeyK:str":"K","KeyL:str":"L","KeyM:str":"M","KeyN:str":"N","KeyO:str":"O","KeyP:str":"P","KeyQ:str":"Q","KeyR:str":"R","KeyS:str":"S","KeyT:str":"T","KeyU:str":"U","KeyV:str":"V","KeyW:str":"W","KeyX:str":"X","KeyY:str":"Y","KeyZ:str":"Z"}
 *
 * @param MenuLayout:struct
 * @text Menu Layout Settings
 * @type struct<MenuLayout>
 * @desc Change how menu layouts look for each scene.
 * @default {"Title:struct":"{\"TitleScreen\":\"\",\"DocumentTitleFmt:str\":\"%1: %2 - Version %3\",\"Subtitle:str\":\"Subtitle\",\"Version:str\":\"0.00\",\"drawGameTitle:func\":\"\\\"const x = 20;\\\\nconst y = Graphics.height / 4;\\\\nconst maxWidth = Graphics.width - x * 2;\\\\nconst text = $dataSystem.gameTitle;\\\\nconst bitmap = this._gameTitleSprite.bitmap;\\\\nbitmap.fontFace = $gameSystem.mainFontFace();\\\\nbitmap.outlineColor = \\\\\\\"black\\\\\\\";\\\\nbitmap.outlineWidth = 8;\\\\nbitmap.fontSize = 72;\\\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\\\\\"center\\\\\\\");\\\"\",\"drawGameSubtitle:func\":\"\\\"const x = 20;\\\\nconst y = Graphics.height / 4 + 72;\\\\nconst maxWidth = Graphics.width - x * 2;\\\\nconst text = Scene_Title.subtitle;\\\\nconst bitmap = this._gameTitleSprite.bitmap;\\\\nbitmap.fontFace = $gameSystem.mainFontFace();\\\\nbitmap.outlineColor = \\\\\\\"black\\\\\\\";\\\\nbitmap.outlineWidth = 6;\\\\nbitmap.fontSize = 48;\\\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\\\\\"center\\\\\\\");\\\"\",\"drawGameVersion:func\":\"\\\"const bitmap = this._gameTitleSprite.bitmap;\\\\nconst x = 0;\\\\nconst y = Graphics.height - 20;\\\\nconst width = Math.round(Graphics.width / 4);\\\\nconst height = 20;\\\\nconst c1 = ColorManager.dimColor1();\\\\nconst c2 = ColorManager.dimColor2();\\\\nconst text = 'Version ' + Scene_Title.version;\\\\nbitmap.gradientFillRect(x, y, width, height, c1, c2);\\\\nbitmap.fontFace = $gameSystem.mainFontFace();\\\\nbitmap.outlineColor = \\\\\\\"black\\\\\\\";\\\\nbitmap.outlineWidth = 3;\\\\nbitmap.fontSize = 16;\\\\nbitmap.drawText(text, x + 4, y, Graphics.width, height, \\\\\\\"left\\\\\\\");\\\"\",\"CommandRect:func\":\"\\\"const offsetX = $dataSystem.titleCommandWindow.offsetX;\\\\nconst offsetY = $dataSystem.titleCommandWindow.offsetY;\\\\nconst rows = this.commandWindowRows();\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = (Graphics.boxWidth - width) / 2 + offsetX;\\\\nconst y = Graphics.boxHeight - height - 96 + offsetY;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ButtonFadeSpeed:num\":\"4\"}","MainMenu:struct":"{\"CommandWindow\":\"\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const width = this.mainCommandWidth();\\\\nconst height = this.mainAreaHeight() - this.goldWindowRect().height;\\\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"GoldWindow\":\"\",\"GoldBgType:num\":\"0\",\"GoldRect:func\":\"\\\"const rows = 1;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\\\nconst y = this.mainAreaBottom() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const width = Graphics.boxWidth - this.mainCommandWidth();\\\\nconst height = this.mainAreaHeight();\\\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","ItemMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.helpAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.helpAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CategoryWindow\":\"\",\"CategoryBgType:num\":\"0\",\"CategoryRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ItemWindow\":\"\",\"ItemBgType:num\":\"0\",\"ItemRect:func\":\"\\\"const x = 0;\\\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaBottom() - y;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ActorWindow\":\"\",\"ActorBgType:num\":\"0\",\"ActorRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","SkillMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.helpAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.helpAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"SkillTypeWindow\":\"\",\"SkillTypeBgType:num\":\"0\",\"SkillTypeRect:func\":\"\\\"const rows = 3;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const width = Graphics.boxWidth - this.mainCommandWidth();\\\\nconst height = this._skillTypeWindow.height;\\\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ItemWindow\":\"\",\"ItemBgType:num\":\"0\",\"ItemRect:func\":\"\\\"const x = 0;\\\\nconst y = this._statusWindow.y + this._statusWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._statusWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ActorWindow\":\"\",\"ActorBgType:num\":\"0\",\"ActorRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","EquipMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.helpAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.helpAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = this.statusWidth();\\\\nconst height = this.mainAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CommandWindow\":\"\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const x = this.statusWidth();\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"SlotWindow\":\"\",\"SlotBgType:num\":\"0\",\"SlotRect:func\":\"\\\"const commandWindowRect = this.commandWindowRect();\\\\nconst x = this.statusWidth();\\\\nconst y = commandWindowRect.y + commandWindowRect.height;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this.mainAreaHeight() - commandWindowRect.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ItemWindow\":\"\",\"ItemBgType:num\":\"0\",\"ItemRect:func\":\"\\\"return this.slotWindowRect();\\\"\"}","StatusMenu:struct":"{\"ProfileWindow\":\"\",\"ProfileBgType:num\":\"0\",\"ProfileRect:func\":\"\\\"const width = Graphics.boxWidth;\\\\nconst height = this.profileHeight();\\\\nconst x = 0;\\\\nconst y = this.mainAreaBottom() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.statusParamsWindowRect().y - y;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusParamsWindow\":\"\",\"StatusParamsBgType:num\":\"0\",\"StatusParamsRect:func\":\"\\\"const width = this.statusParamsWidth();\\\\nconst height = this.statusParamsHeight();\\\\nconst x = 0;\\\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusEquipWindow\":\"\",\"StatusEquipBgType:num\":\"0\",\"StatusEquipRect:func\":\"\\\"const width = Graphics.boxWidth - this.statusParamsWidth();\\\\nconst height = this.statusParamsHeight();\\\\nconst x = this.statusParamsWidth();\\\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","OptionsMenu:struct":"{\"OptionsWindow\":\"\",\"OptionsBgType:num\":\"0\",\"OptionsRect:func\":\"\\\"const n = Math.min(this.maxCommands(), this.maxVisibleCommands());\\\\nconst width = 400;\\\\nconst height = this.calcWindowHeight(n, true);\\\\nconst x = (Graphics.boxWidth - width) / 2;\\\\nconst y = (Graphics.boxHeight - height) / 2;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","SaveMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, false);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ListWindow\":\"\",\"ListBgType:num\":\"0\",\"ListRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","LoadMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, false);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ListWindow\":\"\",\"ListBgType:num\":\"0\",\"ListRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","GameEnd:struct":"{\"CommandList:arraystruct\":\"[\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"toTitle\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.toTitle;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return null;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CallHandlerJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"SceneManager._scene.commandToTitle();\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"cancel\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.cancel;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return null;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CallHandlerJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"SceneManager._scene.popScene();\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const rows = 2;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = (Graphics.boxWidth - width) / 2;\\\\nconst y = (Graphics.boxHeight - height) / 2;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","ShopMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const wx = 0;\\\\nconst wy = this.helpAreaTop();\\\\nconst ww = Graphics.boxWidth;\\\\nconst wh = this.helpAreaHeight();\\\\nreturn new Rectangle(wx, wy, ww, wh);\\\"\",\"GoldWindow\":\"\",\"GoldBgType:num\":\"0\",\"GoldRect:func\":\"\\\"const rows = 1;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = Graphics.boxWidth - width;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CommandWindow\":\"\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = this._goldWindow.x;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"DummyWindow\":\"\",\"DummyBgType:num\":\"0\",\"DummyRect:func\":\"\\\"const x = 0;\\\\nconst y = this._commandWindow.y + this._commandWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._commandWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"NumberWindow\":\"\",\"NumberBgType:num\":\"0\",\"NumberRect:func\":\"\\\"const x = 0;\\\\nconst y = this._dummyWindow.y;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this._dummyWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const width = this.statusWidth();\\\\nconst height = this._dummyWindow.height;\\\\nconst x = Graphics.boxWidth - width;\\\\nconst y = this._dummyWindow.y;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"BuyWindow\":\"\",\"BuyBgType:num\":\"0\",\"BuyRect:func\":\"\\\"const x = 0;\\\\nconst y = this._dummyWindow.y;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this._dummyWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CategoryWindow\":\"\",\"CategoryBgType:num\":\"0\",\"CategoryRect:func\":\"\\\"const x = 0;\\\\nconst y = this._dummyWindow.y;\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"SellWindow\":\"\",\"SellBgType:num\":\"0\",\"SellRect:func\":\"\\\"const x = 0;\\\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height =\\\\n    this.mainAreaHeight() -\\\\n    this._commandWindow.height -\\\\n    this._categoryWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","NameMenu:struct":"{\"EditWindow\":\"\",\"EditBgType:num\":\"0\",\"EditRect:func\":\"\\\"const rows = 9;\\\\nconst inputWindowHeight = this.calcWindowHeight(rows, true);\\\\nconst padding = $gameSystem.windowPadding();\\\\nconst width = 600;\\\\nconst height = Math.min(ImageManager.faceHeight + padding * 2, this.mainAreaHeight() - inputWindowHeight);\\\\nconst x = (Graphics.boxWidth - width) / 2;\\\\nconst y = (this.mainAreaHeight() - (height + inputWindowHeight)) / 2 + this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"InputWindow\":\"\",\"InputBgType:num\":\"0\",\"InputRect:func\":\"\\\"const x = this._editWindow.x;\\\\nconst y = this._editWindow.y + this._editWindow.height;\\\\nconst rows = 9;\\\\nconst width = this._editWindow.width;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}"}
 *
 * @param Param:struct
 * @text Parameter Settings
 * @type struct<Param>
 * @desc Change up the limits of parameters and how they're calculated.
 * @default {"DisplayedParams:arraystr":"[\"ATK\",\"DEF\",\"MAT\",\"MDF\",\"AGI\",\"LUK\"]","ExtDisplayedParams:arraystr":"[\"MaxHP\",\"MaxMP\",\"ATK\",\"DEF\",\"MAT\",\"MDF\",\"AGI\",\"LUK\"]","BasicParameters":"","CrisisRate:num":"0.25","BasicParameterFormula:func":"\"// Determine the variables used in this calculation.\\nlet paramId = arguments[0];\\nlet base = this.paramBase(paramId);\\nlet plus = this.paramPlus(paramId);\\nlet paramRate = this.paramRate(paramId);\\nlet buffRate = this.paramBuffRate(paramId);\\nlet flatBonus = this.paramFlatBonus(paramId);\\n\\n// Formula to determine total parameter value.\\nlet value = (base + plus) * paramRate * buffRate + flatBonus;\\n\\n// Determine the limits\\nconst maxValue = this.paramMax(paramId);\\nconst minValue = this.paramMin(paramId);\\n\\n// Final value\\nreturn Math.round(value.clamp(minValue, maxValue));\"","BasicParamCaps":"","BasicActorParamCaps":"","BasicActorParamMax0:str":"9999","BasicActorParamMax1:str":"9999","BasicActorParamMax2:str":"999","BasicActorParamMax3:str":"999","BasicActorParamMax4:str":"999","BasicActorParamMax5:str":"999","BasicActorParamMax6:str":"999","BasicActorParamMax7:str":"999","BasicEnemyParamCaps":"","BasicEnemyParamMax0:str":"999999","BasicEnemyParamMax1:str":"9999","BasicEnemyParamMax2:str":"999","BasicEnemyParamMax3:str":"999","BasicEnemyParamMax4:str":"999","BasicEnemyParamMax5:str":"999","BasicEnemyParamMax6:str":"999","BasicEnemyParamMax7:str":"999","XParameters":"","XParameterFormula:func":"\"// Determine the variables used in this calculation.\\nlet xparamId = arguments[0];\\nlet base = this.traitsSum(Game_BattlerBase.TRAIT_XPARAM, xparamId);\\nlet plus = this.xparamPlus(xparamId);\\nlet paramRate = this.xparamRate(xparamId);\\nlet flatBonus = this.xparamFlatBonus(xparamId);\\n\\n// Formula to determine total parameter value.\\nlet value = (base + plus) * paramRate + flatBonus;\\n\\n// Final value\\nreturn value;\"","XParamVocab":"","XParamVocab0:str":"Hit","XParamVocab1:str":"Evasion","XParamVocab2:str":"Critical Rate","XParamVocab3:str":"Critical Evade","XParamVocab4:str":"Magic Evade","XParamVocab5:str":"Magic Reflect","XParamVocab6:str":"Counter","XParamVocab7:str":"HP Regen","XParamVocab8:str":"MP Regen","XParamVocab9:str":"TP Regen","SParameters":"","SParameterFormula:func":"\"// Determine the variables used in this calculation.\\nlet sparamId = arguments[0];\\nlet base = this.traitsPi(Game_BattlerBase.TRAIT_SPARAM, sparamId);\\nlet plus = this.sparamPlus(sparamId);\\nlet paramRate = this.sparamRate(sparamId);\\nlet flatBonus = this.sparamFlatBonus(sparamId);\\n\\n// Formula to determine total parameter value.\\nlet value = (base + plus) * paramRate + flatBonus;\\n\\n// Final value\\nreturn value;\"","SParamVocab":"","SParamVocab0:str":"Aggro","SParamVocab1:str":"Guard","SParamVocab2:str":"Recovery","SParamVocab3:str":"Item Effect","SParamVocab4:str":"MP Cost","SParamVocab5:str":"TP Charge","SParamVocab6:str":"Physical DMG","SParamVocab7:str":"Magical DMG","SParamVocab8:str":"Floor DMG","SParamVocab9:str":"EXP Gain","Icons":"","DrawIcons:eval":"true","IconParam0:str":"84","IconParam1:str":"165","IconParam2:str":"76","IconParam3:str":"81","IconParam4:str":"101","IconParam5:str":"133","IconParam6:str":"140","IconParam7:str":"87","IconXParam0:str":"102","IconXParam1:str":"82","IconXParam2:str":"78","IconXParam3:str":"82","IconXParam4:str":"171","IconXParam5:str":"222","IconXParam6:str":"77","IconXParam7:str":"72","IconXParam8:str":"72","IconXParam9:str":"72","IconSParam0:str":"5","IconSParam1:str":"128","IconSParam2:str":"72","IconSParam3:str":"176","IconSParam4:str":"165","IconSParam5:str":"164","IconSParam6:str":"76","IconSParam7:str":"79","IconSParam8:str":"141","IconSParam9:str":"73"}
 *
 * @param CustomParam:arraystruct
 * @text Custom Parameters
 * @parent Param:struct
 * @type struct<CustomParam>[]
 * @desc Create custom parameters for your game!
 * These will appear in VisuStella MZ menus.
 * @default ["{\"ParamName:str\":\"Strength\",\"Abbreviation:str\":\"str\",\"Icon:num\":\"77\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.atk * 0.75) + (user.def * 0.25);\\\"\"}","{\"ParamName:str\":\"Dexterity\",\"Abbreviation:str\":\"dex\",\"Icon:num\":\"82\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.agi * 0.75) + (user.atk * 0.25);\\\"\"}","{\"ParamName:str\":\"Constitution\",\"Abbreviation:str\":\"con\",\"Icon:num\":\"81\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.def * 0.75) + (user.mdf * 0.25);\\\"\"}","{\"ParamName:str\":\"Intelligence\",\"Abbreviation:str\":\"int\",\"Icon:num\":\"79\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.mat * 0.75) + (user.mdf * 0.25);\\\"\"}","{\"ParamName:str\":\"Wisdom\",\"Abbreviation:str\":\"wis\",\"Icon:num\":\"72\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.mdf * 0.75) + (user.luk * 0.25);\\\"\"}","{\"ParamName:str\":\"Charisma\",\"Abbreviation:str\":\"cha\",\"Icon:num\":\"84\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.luk * 0.75) + (user.agi * 0.25);\\\"\"}"]
 *
 * @param ScreenResolution:struct
 * @text Screen Resolution Settings
 * @type struct<ScreenResolution>
 * @desc Alter various properties to make the game look better for varying screen resolutions.
 * @default {"Troops":"","RepositionActors:eval":"true","RepositionEnemies:eval":"true","RepositionEnemies130:eval":"false"}
 *
 * @param ScreenShake:struct
 * @text Screen Shake Settings
 * @type struct<ScreenShake>
 * @desc Get more screen shake effects into your game!
 * @default {"DefaultStyle:str":"random","originalJS:func":"\"// Calculation\\nthis.x += Math.round($gameScreen.shake());\"","randomJS:func":"\"// Calculation\\n// Original Formula by Aries of Sheratan\\nconst power = $gameScreen._shakePower * 0.75;\\nconst speed = $gameScreen._shakeSpeed * 0.60;\\nconst duration = $gameScreen._shakeDuration;\\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\"","horzJS:func":"\"// Calculation\\n// Original Formula by Aries of Sheratan\\nconst power = $gameScreen._shakePower * 0.75;\\nconst speed = $gameScreen._shakeSpeed * 0.60;\\nconst duration = $gameScreen._shakeDuration;\\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\"","vertJS:func":"\"// Calculation\\n// Original Formula by Aries of Sheratan\\nconst power = $gameScreen._shakePower * 0.75;\\nconst speed = $gameScreen._shakeSpeed * 0.60;\\nconst duration = $gameScreen._shakeDuration;\\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\""}
 *
 * @param TitleCommandList:arraystruct
 * @text Title Command List
 * @type struct<Command>[]
 * @desc Window commands used by the title screen.
 * Add new commands here.
 * @default ["{\"Symbol:str\":\"newGame\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.newGame;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandNewGame();\\\"\"}","{\"Symbol:str\":\"continue\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.continue_;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return DataManager.isAnySavefileExists();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandContinue();\\\"\"}","{\"Symbol:str\":\"options\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.options;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandOptions();\\\"\"}","{\"Symbol:str\":\"shutdown\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.gameEnd;\\\"\",\"ShowJS:func\":\"\\\"return Utils.isNwjs();\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager.exit();\\\\n\\\\n// Note!\\\\n// Do NOT use this command with mobile devices or\\\\n// browser games. All it does is cause the game to\\\\n// display a blank, black canvas which the player\\\\n// is unable to do anything with. It does NOT force\\\\n// close the browser tab nor the app.\\\"\"}"]
 *
 * @param TitlePicButtons:arraystruct
 * @text Title Picture Buttons
 * @type struct<TitlePictureButton>[]
 * @desc Buttons that can be inserted into the title screen.
 * Add new title buttons here.
 * @default []
 *
 * @param UI:struct
 * @text UI Settings
 * @type struct<UI>
 * @desc Change up various in-game UI aspects.
 * @default {"UIArea":"","FadeSpeed:num":"24","BoxMargin:num":"4","CommandWidth:num":"240","BottomHelp:eval":"false","RightMenus:eval":"true","ShowButtons:eval":"true","cancelShowButton:eval":"true","menuShowButton:eval":"true","pagedownShowButton:eval":"true","numberShowButton:eval":"true","ButtonHeight:num":"52","BottomButtons:eval":"false","SideButtons:eval":"true","MenuObjects":"","LvExpGauge:eval":"true","ParamArrow:str":"→","TextCodeSupport":"","TextCodeClassNames:eval":"true","TextCodeNicknames:eval":"true"}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc Adjust various in-game window settings.
 * @default {"WindowDefaults":"","EnableMasking:eval":"false","LineHeight:num":"36","SelectableItems":"","ShowItemBackground:eval":"true","ItemHeight:num":"8","DrawItemBackgroundJS:func":"\"const rect = arguments[0];\\nconst c1 = ColorManager.itemBackColor1();\\nconst c2 = ColorManager.itemBackColor2();\\nconst x = rect.x;\\nconst y = rect.y;\\nconst w = rect.width;\\nconst h = rect.height;\\nthis.contentsBack.gradientFillRect(x, y, w, h, c1, c2, true);\\nthis.contentsBack.strokeRect(x, y, w, h, c1);\"","ItemPadding:num":"8","BackOpacity:num":"192","TranslucentOpacity:num":"160","OpenSpeed:num":"32","ColSpacing:num":"8","RowSpacing:num":"4"}
 *
 * @param jsQuickFunc:arraystruct
 * @text JS: Quick Functions
 * @type struct<jsQuickFunc>[]
 * @desc Create quick JavaScript functions available from the
 * global namespace. Use with caution and moderation!!!
 * @default ["{\"FunctionName:str\":\"Example\",\"CodeJS:json\":\"\\\"// Insert this as a function anywhere you can input code\\\\n// such as Script Calls or Conditional Branch Scripts.\\\\n\\\\n// Process Code\\\\nreturn 'Example';\\\"\"}","{\"FunctionName:str\":\"Bad  Code  Name\",\"CodeJS:json\":\"\\\"// If a function name has spaces in them, the spaces will\\\\n// be removed. \\\\\\\"Bad  Code  Name\\\\\\\" becomes \\\\\\\"BadeCodeName\\\\\\\".\\\\n\\\\n// Process Code\\\\nOhNoItsBadCode()\\\\n\\\\n// If a function has bad code, a fail safe will catch the\\\\n// error and display it in the console.\\\"\"}","{\"FunctionName:str\":\"RandomNumber\",\"CodeJS:json\":\"\\\"// This generates a random number from 0 to itself.\\\\n// Example: RandomNumber(10)\\\\n\\\\n// Process Code\\\\nconst number = (arguments[0] || 0) + 1;\\\\nreturn Math.floor(number * Math.random());\\\"\"}","{\"FunctionName:str\":\"RandomBetween\",\"CodeJS:json\":\"\\\"// This generates a random number between two arguments.\\\\n// Example: RandomNumber(5, 10)\\\\n\\\\n// Process Code\\\\nlet min = Math.min(arguments[0] || 0, arguments[1] || 0);\\\\nlet max = Math.max(arguments[0] || 0, arguments[1] || 0);\\\\nreturn Math.floor(Math.random() * (max - min + 1) + min);\\\"\"}","{\"FunctionName:str\":\"RandomFrom\",\"CodeJS:json\":\"\\\"// Selects a number from the list of inserted numbers.\\\\n// Example: RandomFrom(5, 10, 15, 20)\\\\n\\\\n// Process Code\\\\nreturn arguments[Math.randomInt(arguments.length)];\\\"\"}"]
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
 * Quality of Life Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~QoLSettings:
 *
 * @param PlayTest
 * @text Play Test
 *
 * @param NewGameBoot:eval
 * @text New Game on Boot
 * @parent PlayTest
 * @type boolean
 * @on Start New Game
 * @off Keep Title Screen
 * @desc Automatically start a new game on Play Test?
 * Only enabled during Play Test.
 * @default false
 *
 * @param ForceNoPlayTest:eval
 * @text No Play Test Mode
 * @parent PlayTest
 * @type boolean
 * @on Cancel Play Test
 * @off Keep Play Test
 * @desc Force the game to be out of Play Test mode when play testing.
 * @default false
 *
 * @param OpenConsole:eval
 * @text Open Console on Boot
 * @parent PlayTest
 * @type boolean
 * @on Open
 * @off Don't Open
 * @desc Open the Debug Console upon booting up your game?
 * Only enabled during Play Test.
 * @default true
 *
 * @param F6key:eval
 * @text F6: Toggle Sound
 * @parent PlayTest
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc F6 Key Function: Turn on all sound to 100% or to 0%,
 * toggling between the two.
 * @default true
 *
 * @param F7key:eval
 * @text F7: Toggle Fast Mode
 * @parent PlayTest
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc F7 Key Function: Toggle fast mode.
 * @default true
 *
 * @param NewGameCommonEvent:num
 * @text NewGame > CommonEvent
 * @parent PlayTest
 * @type common_event
 * @desc Runs a common event each time a new game during play test
 * session is started.
 * @default 0
 *
 * @param BattleTest
 * @text Battle Test
 *
 * @param BTestItems:eval
 * @text Add Item Type
 * @parent BattleTest
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add copies of each database item?
 * Effective only during battle test.
 * @default true
 *
 * @param BTestWeapons:eval
 * @text Add Weapon Type
 * @parent BattleTest
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add copies of each database weapon?
 * Effective only during battle test.
 * @default true
 *
 * @param BTestArmors:eval
 * @text Add Armor Type
 * @parent BattleTest
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add copies of each database armor?
 * Effective only during battle test.
 * @default true
 *
 * @param BTestAddedQuantity:num
 * @text Added Quantity
 * @parent BattleTest
 * @type number
 * @min 1
 * @desc Determines how many items are added during a battle test instead of the maximum amount.
 * @default 90
 *
 * @param DigitGrouping
 * @text Digit Grouping
 *
 * @param DigitGroupingStandardText:eval
 * @text Standard Text
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * standard text inside windows?
 * @default true
 *
 * @param DigitGroupingExText:eval
 * @text Ex Text
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * ex text, written through drawTextEx (like messages)?
 * @default true
 *
 * @param DigitGroupingDamageSprites:eval
 * @text Damage Sprites
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * in-battle damage sprites?
 * @default true
 *
 * @param DigitGroupingGaugeSprites:eval
 * @text Gauge Sprites
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * visible gauge sprites such as HP, MP, and TP gauges?
 * @default true
 *
 * @param DigitGroupingLocale:str
 * @text Country/Locale
 * @parent DigitGrouping
 * @type combo
 * @option ar-SA
 * @option bn-BD
 * @option bn-IN
 * @option cs-CZ
 * @option da-DK
 * @option de-AT
 * @option de-CH
 * @option de-DE
 * @option el-GR
 * @option en-AU
 * @option en-CA
 * @option en-GB
 * @option en-IE
 * @option en-IN
 * @option en-NZ
 * @option en-US
 * @option en-ZA
 * @option es-AR
 * @option es-CL
 * @option es-CO
 * @option es-ES
 * @option es-MX
 * @option es-US
 * @option fi-FI
 * @option fr-BE
 * @option fr-CA
 * @option fr-CH
 * @option fr-FR
 * @option he-IL
 * @option hi-IN
 * @option hu-HU
 * @option id-ID
 * @option it-CH
 * @option it-IT
 * @option jp-JP
 * @option ko-KR
 * @option nl-BE
 * @option nl-NL
 * @option no-NO
 * @option pl-PL
 * @option pt-BR
 * @option pt-PT
 * @option ro-RO
 * @option ru-RU
 * @option sk-SK
 * @option sv-SE
 * @option ta-IN
 * @option ta-LK
 * @option th-TH
 * @option tr-TR
 * @option zh-CN
 * @option zh-HK
 * @option zh-TW
 * @desc Base the digit grouping on which country/locale?
 * @default en-US
 *
 * @param PlayerBenefit
 * @text Player Benefit
 *
 * @param EncounterRateMinimum:num
 * @text Encounter Rate Min
 * @parent PlayerBenefit
 * @min 1
 * @desc Minimum number of steps the player can take without any random encounters.
 * @default 10
 *
 * @param EscapeAlways:eval
 * @text Escape Always
 * @parent PlayerBenefit
 * @type boolean
 * @on Always
 * @off Default
 * @desc If the player wants to escape a battle, let them escape the battle with 100% chance.
 * @default true
 *
 * @param ImprovedAccuracySystem:eval
 * @text Accuracy Formula
 * @parent PlayerBenefit
 * @type boolean
 * @on Improve
 * @off Default
 * @desc Accuracy formula calculation change to
 * Skill Hit% * (User HIT - Target EVA) for better results.
 * @default true
 *
 * @param AccuracyBoost:eval
 * @text Accuracy Boost
 * @parent PlayerBenefit
 * @type boolean
 * @on Boost
 * @off Default
 * @desc Boost HIT and EVA rates in favor of the player.
 * @default true
 *
 * @param LevelUpFullHp:eval
 * @text Level Up -> Full HP
 * @parent PlayerBenefit
 * @type boolean
 * @on Heal
 * @off Default
 * @desc Recovers full HP when an actor levels up.
 * @default true
 *
 * @param LevelUpFullMp:eval
 * @text Level Up -> Full MP
 * @parent PlayerBenefit
 * @type boolean
 * @on Heal
 * @off Default
 * @desc Recovers full MP when an actor levels up.
 * @default true
 *
 * @param Misc
 * @text Misc
 *
 * @param AnimationMirrorOffset:eval
 * @text Ani: Mirror Offset
 * @parent Misc
 * @type boolean
 * @on Mirror
 * @off Don't Mirror
 * @desc When animations are mirrored,
 * mirror their Offset X values, too.
 * @default false
 *
 * @param AntiZoomPictures:eval
 * @text Anti-Zoom Pictures
 * @parent Misc
 * @type boolean
 * @on Anti-Zoom
 * @off Normal
 * @desc If on, prevents pictures from being affected by zoom.
 * @default true
 *
 * @param AutoStretch:str
 * @text Auto-Stretch
 * @parent Misc
 * @type select
 * @option Default
 * @value default
 * @option Stretch
 * @value stretch
 * @option Normal
 * @value normal
 * @desc Automatically stretch the game to fit the size of the client?
 * @default default
 *
 * @param FontShadows:eval
 * @text Font Shadows
 * @parent Misc
 * @type boolean
 * @on Shadows
 * @off Outlines
 * @desc If on, text uses shadows instead of outlines.
 * @default false
 *
 * @param FontSmoothing:eval
 * @text Font Smoothing
 * @parent Misc
 * @type boolean
 * @on Smooth
 * @off None
 * @desc If on, smoothes fonts shown in-game.
 * @default true
 *
 * @param KeyItemProtect:eval
 * @text Key Item Protection
 * @parent Misc
 * @type boolean
 * @on Unsellable
 * @off Sellable
 * @desc If on, prevents Key Items from being able to be sold and from being able to be consumed.
 * @default true
 *
 * @param ModernControls:eval
 * @text Modern Controls
 * @parent Misc
 * @type boolean
 * @on Enable
 * @off Default
 * @desc If on, allows usage of the Home/End buttons as well as other modern configs. Affects other VisuStella plugins.
 * @default true
 *
 * @param NewGameCommonEventAll:num
 * @text NewGame > CommonEvent
 * @parent Misc
 * @type common_event
 * @desc Runs a common event each time a new game during any session is started.
 * @default 0
 *
 * @param NoTileShadows:eval
 * @text No Tile Shadows
 * @parent Misc
 * @type boolean
 * @on Disable Tile Shadows
 * @off Default
 * @desc Removes tile shadows from being displayed in-game.
 * @default false
 *
 * @param PixelateImageRendering:eval
 * @text Pixel Image Rendering
 * @parent Misc
 * @type boolean
 * @on Pixelate
 * @off Smooth
 * @desc If on, pixelates the image rendering (for pixel games).
 * @default false
 *
 * @param RequireFocus:eval
 * @text Require Focus?
 * @parent Misc
 * @type boolean
 * @on Require
 * @off No Requirement
 * @desc Requires the game to be focused? If the game isn't
 * focused, it will pause if it's not the active window.
 * @default true
 *
 * @param SmartEventCollisionPriority:eval
 * @text Smart Event Collision
 * @parent Misc
 * @type boolean
 * @on Only Same Level
 * @off Default
 * @desc Makes events only able to collide with one another if they're 'Same as characters' priority.
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Color Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Color:
 *
 * @param BasicColors
 * @text Basic Colors
 *
 * @param ColorNormal:str
 * @text Normal
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param ColorSystem:str
 * @text System
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 16
 *
 * @param ColorCrisis:str
 * @text Crisis
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 17
 *
 * @param ColorDeath:str
 * @text Death
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 18
 *
 * @param ColorGaugeBack:str
 * @text Gauge Back
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param ColorHPGauge1:str
 * @text HP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 20
 *
 * @param ColorHPGauge2:str
 * @text HP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 21
 *
 * @param ColorMPGauge1:str
 * @text MP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 22
 *
 * @param ColorMPGauge2:str
 * @text MP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 23
 *
 * @param ColorMPCost:str
 * @text MP Cost
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 23
 *
 * @param ColorPowerUp:str
 * @text Power Up
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 *
 * @param ColorPowerDown:str
 * @text Power Down
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 25
 *
 * @param ColorCTGauge1:str
 * @text CT Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 26
 *
 * @param ColorCTGauge2:str
 * @text CT Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param ColorTPGauge1:str
 * @text TP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 28
 *
 * @param ColorTPGauge2:str
 * @text TP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 29
 *
 * @param ColorTPCost:str
 * @text TP Cost
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 29
 *
 * @param ColorPending:str
 * @text Pending Color
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #2a847d
 *
 * @param ColorExpGauge1:str
 * @text EXP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 30
 *
 * @param ColorExpGauge2:str
 * @text EXP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 31
 *
 * @param ColorMaxLvGauge1:str
 * @text MaxLv Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 14
 *
 * @param ColorMaxLvGauge2:str
 * @text MaxLv Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 6
 *
 * @param AlphaColors
 * @text Alpha Colors
 *
 * @param OutlineColor:str
 * @text Window Font Outline
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0.6)
 *
 * @param OutlineColorGauge:str
 * @text Gauge Number Outline
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 1.0)
 *
 * @param DimColor1:str
 * @text Dim Color 1
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0.6)
 *
 * @param DimColor2:str
 * @text Dim Color 2
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0)
 *
 * @param ItemBackColor1:str
 * @text Item Back Color 1
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(32, 32, 32, 0.5)
 *
 * @param ItemBackColor2:str
 * @text Item Back Color 2
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0.5)
 *
 * @param ConditionalColors
 * @text Conditional Colors
 *
 * @param ActorHPColor:func
 * @text JS: Actor HP Color
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what HP color to use for actors.
 * @default "// Set the variables used in this function.\nlet actor = arguments[0];\n\n// Check if the actor exists. If not, return normal.\nif (!actor) {\n    return this.normalColor();\n\n// If the actor is dead, return death color.\n} else if (actor.isDead()) {\n    return this.deathColor();\n\n// If the actor is dying, return crisis color.\n} else if (actor.isDying()) {\n    return this.crisisColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param ActorMPColor:func
 * @text JS: Actor MP Color
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what MP color to use for actors.
 * @default "// Set the variables used in this function.\nlet actor = arguments[0];\n\n// Check if the actor exists. If not, return normal.\nif (!actor) {\n    return this.normalColor();\n\n// If MP rate is below 25%, return crisis color.\n} else if (actor.mpRate() < 0.25) {\n    return this.crisisColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param ActorTPColor:func
 * @text JS: Actor TP Color
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what TP color to use for actors.
 * @default "// Set the variables used in this function.\nlet actor = arguments[0];\n\n// Check if the actor exists. If not, return normal.\nif (!actor) {\n    return this.normalColor();\n\n// If TP rate is below 25%, return crisis color.\n} else if (actor.tpRate() < 0.25) {\n    return this.crisisColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param ParamChange:func
 * @text JS: Parameter Change
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining whatcolor to use for parameter changes.
 * @default "// Set the variables used in this function.\nlet change = arguments[0];\n\n// If a positive change, use power up color.\nif (change > 0) {\n    return this.powerUpColor();\n\n// If a negative change, use power down color.\n} else if (change < 0) {\n    return this.powerDownColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param DamageColor:func
 * @text JS: Damage Colors
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what color to use for damage types.
 * @default "// Set the variables used in this function.\nlet colorType = arguments[0];\n\n// Check the value of the color type\n// and return an appropriate color.\nswitch (colorType) {\n\n    case 0: // HP damage\n        return \"#ffffff\";\n\n    case 1: // HP recover\n        return \"#b9ffb5\";\n\n    case 2: // MP damage\n        return \"#bb88bb\";\n\n    case 3: // MP recover\n        return \"#80b0ff\";\n\n    default:\n        return \"#808080\";\n}"
 */
/* ----------------------------------------------------------------------------
 * Gold Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Gold:
 *
 * @param GoldMax:num
 * @text Gold Max
 * @type num
 * @min 1
 * @desc Maximum amount of Gold the party can hold.
 * Default 99999999
 * @default 99999999
 *
 * @param GoldFontSize:num
 * @text Gold Font Size
 * @type number
 * @min 1
 * @desc Font size used for displaying Gold inside Gold Windows.
 * Default: 26
 * @default 24
 *
 * @param GoldIcon:num
 * @text Gold Icon
 * @desc Icon used to represent Gold.
 * Use 0 for no icon.
 * @default 314
 *
 * @param GoldOverlap:str
 * @text Gold Overlap
 * @desc Text used too much Gold to fit in the window.
 * @default A Lot
 *
 * @param ItemStyle:eval
 * @text Item Style
 * @type boolean
 * @on Enable
 * @off Normal
 * @desc Draw gold in the item style?
 * ie: Icon, Label, Value
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Image Loading Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ImgLoad:
 *
 * @param animations:arraystr
 * @text img/animations/
 * @type file[]
 * @dir img/animations/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param battlebacks1:arraystr
 * @text img/battlebacks1/
 * @type file[]
 * @dir img/battlebacks1/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param battlebacks2:arraystr
 * @text img/battlebacks2/
 * @type file[]
 * @dir img/battlebacks2/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param characters:arraystr
 * @text img/characters/
 * @type file[]
 * @dir img/characters/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param enemies:arraystr
 * @text img/enemies/
 * @type file[]
 * @dir img/enemies/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param faces:arraystr
 * @text img/faces/
 * @type file[]
 * @dir img/faces/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param parallaxes:arraystr
 * @text img/parallaxes/
 * @type file[]
 * @dir img/parallaxes/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param pictures:arraystr
 * @text img/pictures/
 * @type file[]
 * @dir img/pictures/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param sv_actors:arraystr
 * @text img/sv_actors/
 * @type file[]
 * @dir img/sv_actors/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param sv_enemies:arraystr
 * @text img/sv_enemies/
 * @type file[]
 * @dir img/sv_enemies/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param system:arraystr
 * @text img/system/
 * @type file[]
 * @dir img/system/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default ["Balloon","IconSet"]
 *
 * @param tilesets:arraystr
 * @text img/tilesets/
 * @type file[]
 * @dir img/tilesets/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param titles1:arraystr
 * @text img/titles1/
 * @type file[]
 * @dir img/titles1/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param titles2:arraystr
 * @text img/titles2/
 * @type file[]
 * @dir img/titles2/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Keyboard Input Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~KeyboardInput:
 *
 * @param Controls
 *
 * @param WASD:eval
 * @text WASD Movement
 * @parent Controls
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables or disables WASD movement for your game project.
 * Moves the W page down button to E.
 * @default false
 *
 * @param DashToggleR:eval
 * @text R Button: Dash Toggle
 * @parent Controls
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables or disables R button as an Always Dash option toggle.
 * @default false
 *
 * @param NameInput
 * @text Name Input
 *
 * @param EnableNameInput:eval
 * @text Enable?
 * @parent NameInput
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables keyboard input for name entry.
 * Only tested with English keyboards.
 * @default true
 * 
 * @param DefaultMode:str
 * @text Default Mode
 * @parent NameInput
 * @type select
 * @option Default - Uses Arrow Keys to select letters.
 * @value default
 * @option Keyboard - Uses Keyboard to type in letters.
 * @value keyboard
 * @desc Select default mode when entering the scene.
 * @default keyboard
 *
 * @param QwertyLayout:eval
 * @text QWERTY Layout
 * @parent NameInput
 * @type boolean
 * @on QWERTY Layout
 * @off ABCDEF Layout
 * @desc Uses the QWERTY layout for manual entry.
 * @default true
 *
 * @param NameInputMessage:eval
 * @text Keyboard Message
 * @parent NameInput
 * @type note
 * @desc The message displayed when allowing keyboard entry.
 * You may use text codes here.
 * @default "Type in this character's name.\nPress \\c[5]ENTER\\c[0] when you're done.\n\n-or-\n\nPress \\c[5]arrow keys\\c[0]/\\c[5]TAB\\c[0] to switch\nto manual character entry.\n\nPress \\c[5]ESC\\c[0]/\\c[5]TAB\\c[0] to use to keyboard."
 * 
 * @param BannedWords:arraystr
 * @text Banned Words
 * @parent NameInput
 * @type string[]
 * @desc Players cannot use these words for names.
 * These include words inside the names.
 * @default []
 *
 * @param NumberInput
 * @text Number Input
 *
 * @param EnableNumberInput:eval
 * @text Enable?
 * @parent NumberInput
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables keyboard input for number entry.
 * Only tested with English keyboards.
 * @default true
 *
 * @param ButtonAssist
 * @text Button Assist
 * 
 * @param Keyboard:str
 * @text Switch To Keyboard
 * @parent ButtonAssist
 * @desc Text used to describe the keyboard switch.
 * @default Keyboard
 * 
 * @param Manual:str
 * @text Switch To Manual
 * @parent ButtonAssist
 * @desc Text used to describe the manual entry switch.
 * @default Manual
 *
 */
/* ----------------------------------------------------------------------------
 * Menu Background Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MenuBg:
 *
 * @param Scene_Menu:struct
 * @text Scene_Menu
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Item:struct
 * @text Scene_Item
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Skill:struct
 * @text Scene_Skill
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Equip:struct
 * @text Scene_Equip
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Status:struct
 * @text Scene_Status
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Options:struct
 * @text Scene_Options
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Save:struct
 * @text Scene_Save
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Load:struct
 * @text Scene_Load
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_GameEnd:struct
 * @text Scene_GameEnd
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"128","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Shop:struct
 * @text Scene_Shop
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Name:struct
 * @text Scene_Name
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Unlisted:struct
 * @text Scene_Unlisted
 * @type struct<BgSettings>
 * @desc The individual background settings for any scenes that aren't listed here.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 */
/* ----------------------------------------------------------------------------
 * Background Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~BgSettings:
 *
 * @param SnapshotOpacity:num
 * @text Snapshop Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc Snapshot opacity for the scene.
 * @default 192
 *
 * @param BgFilename1:str
 * @text Background 1
 * @type file
 * @dir img/titles1/
 * @desc Filename used for the bottom background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @param BgFilename2:str
 * @text Background 2
 * @type file
 * @dir img/titles2/
 * @desc Filename used for the upper background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Menu Button Assist Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ButtonAssist:
 *
 * @param General
 *
 * @param Enable:eval
 * @text Enable
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Enable the Menu Button Assist Window.
 * @default true
 *
 * @param Location:str
 * @text Location
 * @parent General
 * @type select
 * @option Top of Screen
 * @value top
 * @option Bottom of Screen
 * @value bottom
 * @desc Determine the location of the Button Assist Window.
 * Requires Plugin Parameters => UI => Side Buttons ON.
 * @default bottom
 *
 * @param BgType:num
 * @text Background Type
 * @parent General
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param Text
 *
 * @param TextFmt:str
 * @text Text Format
 * @parent Text
 * @desc Format on how the buttons are displayed.
 * Text codes allowed. %1 - Key, %2 - Text
 * @default %1:%2
 *
 * @param MultiKeyFmt:str
 * @text Multi-Key Format
 * @parent Text
 * @desc Format for actions with multiple keys.
 * Text codes allowed. %1 - Key 1, %2 - Key 2
 * @default %1/%2
 *
 * @param OkText:str
 * @text OK Text
 * @parent Text
 * @desc Default text used to display OK Key Action.
 * Text codes allowed.
 * @default Select
 *
 * @param CancelText:str
 * @text Cancel Text
 * @parent Text
 * @desc Default text used to display Cancel Key Action.
 * Text codes allowed.
 * @default Back
 *
 * @param SwitchActorText:str
 * @text Switch Actor Text
 * @parent Text
 * @desc Default text used to display Switch Actor Action.
 * Text codes allowed.
 * @default Switch Ally
 *
 * @param Keys
 *
 * @param KeyUnlisted:str
 * @text Key: Unlisted Format
 * @parent Keys
 * @desc If a key is not listed below, use this format.
 * Text codes allowed. %1 - Key
 * @default \}❪%1❫\{
 *
 * @param KeyUP:str
 * @text Key: Up
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default ^
 *
 * @param KeyDOWN:str
 * @text Key: Down
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default v
 *
 * @param KeyLEFT:str
 * @text Key: Left
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default <<
 *
 * @param KeyRIGHT:str
 * @text Key: Right
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default >>
 *
 * @param KeySHIFT:str
 * @text Key: Shift
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default \}❪SHIFT❫\{
 *
 * @param KeyTAB:str
 * @text Key: Tab
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default \}❪TAB❫\{
 *
 * @param KeyA:str
 * @text Key: A
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default A
 *
 * @param KeyB:str
 * @text Key: B
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default B
 *
 * @param KeyC:str
 * @text Key: C
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default C
 *
 * @param KeyD:str
 * @text Key: D
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default D
 *
 * @param KeyE:str
 * @text Key: E
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default E
 *
 * @param KeyF:str
 * @text Key: F
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default F
 *
 * @param KeyG:str
 * @text Key: G
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default G
 *
 * @param KeyH:str
 * @text Key: H
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default H
 *
 * @param KeyI:str
 * @text Key: I
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default I
 *
 * @param KeyJ:str
 * @text Key: J
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default J
 *
 * @param KeyK:str
 * @text Key: K
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default K
 *
 * @param KeyL:str
 * @text Key: L
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default L
 *
 * @param KeyM:str
 * @text Key: M
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default M
 *
 * @param KeyN:str
 * @text Key: N
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default N
 *
 * @param KeyO:str
 * @text Key: O
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default O
 *
 * @param KeyP:str
 * @text Key: P
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default P
 *
 * @param KeyQ:str
 * @text Key: Q
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default Q
 *
 * @param KeyR:str
 * @text Key: R
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default R
 *
 * @param KeyS:str
 * @text Key: S
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default S
 *
 * @param KeyT:str
 * @text Key: T
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default T
 *
 * @param KeyU:str
 * @text Key: U
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default U
 *
 * @param KeyV:str
 * @text Key: V
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default V
 *
 * @param KeyW:str
 * @text Key: W
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default W
 *
 * @param KeyX:str
 * @text Key: X
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default X
 *
 * @param KeyY:str
 * @text Key: Y
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default Y
 *
 * @param KeyZ:str
 * @text Key: Z
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default Z
 *
 */
/* ----------------------------------------------------------------------------
 * Menu Layout Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MenuLayout:
 *
 * @param Title:struct
 * @text Scene_Title
 * @parent SceneSettings
 * @type struct<Title>
 * @desc Various options on adjusting the Title Scene.
 * @default {"TitleScreen":"","DocumentTitleFmt:str":"%1: %2 - Version %3","Subtitle:str":"Subtitle","Version:str":"0.00","drawGameTitle:func":"\"const x = 20;\\nconst y = Graphics.height / 4;\\nconst maxWidth = Graphics.width - x * 2;\\nconst text = $dataSystem.gameTitle;\\nconst bitmap = this._gameTitleSprite.bitmap;\\nbitmap.fontFace = $gameSystem.mainFontFace();\\nbitmap.outlineColor = \\\"black\\\";\\nbitmap.outlineWidth = 8;\\nbitmap.fontSize = 72;\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\"center\\\");\"","drawGameSubtitle:func":"\"const x = 20;\\nconst y = Graphics.height / 4 + 72;\\nconst maxWidth = Graphics.width - x * 2;\\nconst text = Scene_Title.subtitle;\\nconst bitmap = this._gameTitleSprite.bitmap;\\nbitmap.fontFace = $gameSystem.mainFontFace();\\nbitmap.outlineColor = \\\"black\\\";\\nbitmap.outlineWidth = 6;\\nbitmap.fontSize = 48;\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\"center\\\");\"","drawGameVersion:func":"\"const bitmap = this._gameTitleSprite.bitmap;\\nconst x = 0;\\nconst y = Graphics.height - 20;\\nconst width = Math.round(Graphics.width / 4);\\nconst height = 20;\\nconst c1 = ColorManager.dimColor1();\\nconst c2 = ColorManager.dimColor2();\\nconst text = 'Version ' + Scene_Title.version;\\nbitmap.gradientFillRect(x, y, width, height, c1, c2);\\nbitmap.fontFace = $gameSystem.mainFontFace();\\nbitmap.outlineColor = \\\"black\\\";\\nbitmap.outlineWidth = 3;\\nbitmap.fontSize = 16;\\nbitmap.drawText(text, x + 4, y, Graphics.width, height, \\\"left\\\");\"","CommandRect:func":"\"const offsetX = $dataSystem.titleCommandWindow.offsetX;\\nconst offsetY = $dataSystem.titleCommandWindow.offsetY;\\nconst rows = this.commandWindowRows();\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = (Graphics.boxWidth - width) / 2 + offsetX;\\nconst y = Graphics.boxHeight - height - 96 + offsetY;\\nreturn new Rectangle(x, y, width, height);\"","ButtonFadeSpeed:num":"4"}
 *
 * @param MainMenu:struct
 * @text Scene_Menu
 * @parent SceneSettings
 * @type struct<MainMenu>
 * @desc Various options on adjusting the Main Menu Scene.
 * @default {"CommandWindow":"","CommandBgType:num":"0","CommandRect:func":"\"const width = this.mainCommandWidth();\\nconst height = this.mainAreaHeight() - this.goldWindowRect().height;\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","GoldWindow":"","GoldBgType:num":"0","GoldRect:func":"\"const rows = 1;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\nconst y = this.mainAreaBottom() - height;\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const width = Graphics.boxWidth - this.mainCommandWidth();\\nconst height = this.mainAreaHeight();\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param ItemMenu:struct
 * @text Scene_Item
 * @parent SceneSettings
 * @type struct<ItemMenu>
 * @desc Various options on adjusting the Item Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.helpAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.helpAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","CategoryWindow":"","CategoryBgType:num":"0","CategoryRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","ItemWindow":"","ItemBgType:num":"0","ItemRect:func":"\"const x = 0;\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaBottom() - y;\\nreturn new Rectangle(x, y, width, height);\"","ActorWindow":"","ActorBgType:num":"0","ActorRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight();\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param SkillMenu:struct
 * @text Scene_Skill
 * @parent SceneSettings
 * @type struct<SkillMenu>
 * @desc Various options on adjusting the Skill Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.helpAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.helpAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","SkillTypeWindow":"","SkillTypeBgType:num":"0","SkillTypeRect:func":"\"const rows = 3;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const width = Graphics.boxWidth - this.mainCommandWidth();\\nconst height = this._skillTypeWindow.height;\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","ItemWindow":"","ItemBgType:num":"0","ItemRect:func":"\"const x = 0;\\nconst y = this._statusWindow.y + this._statusWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._statusWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","ActorWindow":"","ActorBgType:num":"0","ActorRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight();\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param EquipMenu:struct
 * @text Scene_Equip
 * @parent SceneSettings
 * @type struct<EquipMenu>
 * @desc Various options on adjusting the Equip Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.helpAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.helpAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = this.statusWidth();\\nconst height = this.mainAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","CommandWindow":"","CommandBgType:num":"0","CommandRect:func":"\"const x = this.statusWidth();\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","SlotWindow":"","SlotBgType:num":"0","SlotRect:func":"\"const commandWindowRect = this.commandWindowRect();\\nconst x = this.statusWidth();\\nconst y = commandWindowRect.y + commandWindowRect.height;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this.mainAreaHeight() - commandWindowRect.height;\\nreturn new Rectangle(x, y, width, height);\"","ItemWindow":"","ItemBgType:num":"0","ItemRect:func":"\"return this.slotWindowRect();\""}
 *
 * @param StatusMenu:struct
 * @text Scene_Status
 * @parent SceneSettings
 * @type struct<StatusMenu>
 * @desc Various options on adjusting the Status Menu Scene.
 * @default {"ProfileWindow":"","ProfileBgType:num":"0","ProfileRect:func":"\"const width = Graphics.boxWidth;\\nconst height = this.profileHeight();\\nconst x = 0;\\nconst y = this.mainAreaBottom() - height;\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.statusParamsWindowRect().y - y;\\nreturn new Rectangle(x, y, width, height);\"","StatusParamsWindow":"","StatusParamsBgType:num":"0","StatusParamsRect:func":"\"const width = this.statusParamsWidth();\\nconst height = this.statusParamsHeight();\\nconst x = 0;\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\nreturn new Rectangle(x, y, width, height);\"","StatusEquipWindow":"","StatusEquipBgType:num":"0","StatusEquipRect:func":"\"const width = Graphics.boxWidth - this.statusParamsWidth();\\nconst height = this.statusParamsHeight();\\nconst x = this.statusParamsWidth();\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param OptionsMenu:struct
 * @text Scene_Options
 * @parent SceneSettings
 * @type struct<OptionsMenu>
 * @desc Various options on adjusting the Options Menu Scene.
 * @default {"OptionsWindow":"","OptionsBgType:num":"0","OptionsRect:func":"\"const n = Math.min(this.maxCommands(), this.maxVisibleCommands());\\nconst width = 400;\\nconst height = this.calcWindowHeight(n, true);\\nconst x = (Graphics.boxWidth - width) / 2;\\nconst y = (Graphics.boxHeight - height) / 2;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param SaveMenu:struct
 * @text Scene_Save
 * @parent SceneSettings
 * @type struct<SaveMenu>
 * @desc Various options on adjusting the Save Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, false);\\nreturn new Rectangle(x, y, width, height);\"","ListWindow":"","ListBgType:num":"0","ListRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param LoadMenu:struct
 * @text Scene_Load
 * @parent SceneSettings
 * @type struct<LoadMenu>
 * @desc Various options on adjusting the Load Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, false);\\nreturn new Rectangle(x, y, width, height);\"","ListWindow":"","ListBgType:num":"0","ListRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param GameEnd:struct
 * @text Scene_GameEnd
 * @parent SceneSettings
 * @type struct<GameEnd>
 * @desc Various options on adjusting the Game End Scene.
 * @default {"CommandList:arraystruct":"[\"{\\\"Symbol:str\\\":\\\"toTitle\\\",\\\"TextStr:str\\\":\\\"Untitled\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return TextManager.toTitle;\\\\\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"return null;\\\\\\\"\\\",\\\"CallHandlerJS:func\\\":\\\"\\\\\\\"SceneManager._scene.commandToTitle();\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"cancel\\\",\\\"TextStr:str\\\":\\\"Untitled\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return TextManager.cancel;\\\\\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"return null;\\\\\\\"\\\",\\\"CallHandlerJS:func\\\":\\\"\\\\\\\"SceneManager._scene.popScene();\\\\\\\"\\\"}\"]","CommandBgType:num":"0","CommandRect:func":"\"const rows = 2;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = (Graphics.boxWidth - width) / 2;\\nconst y = (Graphics.boxHeight - height) / 2;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param ShopMenu:struct
 * @text Scene_Shop
 * @parent SceneSettings
 * @type struct<ShopMenu>
 * @desc Various options on adjusting the Shop Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const wx = 0;\\nconst wy = this.helpAreaTop();\\nconst ww = Graphics.boxWidth;\\nconst wh = this.helpAreaHeight();\\nreturn new Rectangle(wx, wy, ww, wh);\"","GoldWindow":"","GoldBgType:num":"0","GoldRect:func":"\"const rows = 1;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = Graphics.boxWidth - width;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","CommandWindow":"","CommandBgType:num":"0","CommandRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = this._goldWindow.x;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","DummyWindow":"","DummyBgType:num":"0","DummyRect:func":"\"const x = 0;\\nconst y = this._commandWindow.y + this._commandWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._commandWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","NumberWindow":"","NumberBgType:num":"0","NumberRect:func":"\"const x = 0;\\nconst y = this._dummyWindow.y;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this._dummyWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const width = this.statusWidth();\\nconst height = this._dummyWindow.height;\\nconst x = Graphics.boxWidth - width;\\nconst y = this._dummyWindow.y;\\nreturn new Rectangle(x, y, width, height);\"","BuyWindow":"","BuyBgType:num":"0","BuyRect:func":"\"const x = 0;\\nconst y = this._dummyWindow.y;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this._dummyWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","CategoryWindow":"","CategoryBgType:num":"0","CategoryRect:func":"\"const x = 0;\\nconst y = this._dummyWindow.y;\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","SellWindow":"","SellBgType:num":"0","SellRect:func":"\"const x = 0;\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height =\\n    this.mainAreaHeight() -\\n    this._commandWindow.height -\\n    this._categoryWindow.height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param NameMenu:struct
 * @text Scene_Name
 * @parent SceneSettings
 * @type struct<NameMenu>
 * @desc Various options on adjusting the Actor Rename Scene.
 * @default {"EditWindow":"","EditBgType:num":"0","EditRect:func":"\"const rows = 9;\\nconst inputWindowHeight = this.calcWindowHeight(rows, true);\\nconst padding = $gameSystem.windowPadding();\\nconst width = 600;\\nconst height = Math.min(ImageManager.faceHeight + padding * 2, this.mainAreaHeight() - inputWindowHeight);\\nconst x = (Graphics.boxWidth - width) / 2;\\nconst y = (this.mainAreaHeight() - (height + inputWindowHeight)) / 2 + this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","InputWindow":"","InputBgType:num":"0","InputRect:func":"\"const x = this._editWindow.x;\\nconst y = this._editWindow.y + this._editWindow.height;\\nconst rows = 9;\\nconst width = this._editWindow.width;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\""}
 *
 */
/* ----------------------------------------------------------------------------
 * Main Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MainMenu:
 *
 * @param CommandWindow
 * @text Command Window
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = this.mainCommandWidth();\nconst height = this.mainAreaHeight() - this.goldWindowRect().height;\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param GoldWindow
 * @text Gold Window
 *
 * @param GoldBgType:num
 * @text Background Type
 * @parent GoldWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param GoldRect:func
 * @text JS: X, Y, W, H
 * @parent GoldWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 1;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\nconst y = this.mainAreaBottom() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth - this.mainCommandWidth();\nconst height = this.mainAreaHeight();\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Item Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ItemMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.helpAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.helpAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CategoryWindow
 * @text Category Window
 *
 * @param CategoryBgType:num
 * @text Background Type
 * @parent CategoryWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CategoryRect:func
 * @text JS: X, Y, W, H
 * @parent CategoryWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ItemWindow
 * @text Item Window
 *
 * @param ItemBgType:num
 * @text Background Type
 * @parent ItemWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ItemRect:func
 * @text JS: X, Y, W, H
 * @parent ItemWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._categoryWindow.y + this._categoryWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaBottom() - y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ActorWindow
 * @text Actor Window
 *
 * @param ActorBgType:num
 * @text Background Type
 * @parent ActorWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ActorRect:func
 * @text JS: X, Y, W, H
 * @parent ActorWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Skill Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SkillMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.helpAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.helpAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param SkillTypeWindow
 * @text Skill Type Window
 *
 * @param SkillTypeBgType:num
 * @text Background Type
 * @parent SkillTypeWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SkillTypeRect:func
 * @text JS: X, Y, W, H
 * @parent SkillTypeWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 3;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth - this.mainCommandWidth();\nconst height = this._skillTypeWindow.height;\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ItemWindow
 * @text Item Window
 *
 * @param ItemBgType:num
 * @text Background Type
 * @parent ItemWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ItemRect:func
 * @text JS: X, Y, W, H
 * @parent ItemWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._statusWindow.y + this._statusWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._statusWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ActorWindow
 * @text Actor Window
 *
 * @param ActorBgType:num
 * @text Background Type
 * @parent ActorWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ActorRect:func
 * @text JS: X, Y, W, H
 * @parent ActorWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Equip Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~EquipMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.helpAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.helpAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = this.statusWidth();\nconst height = this.mainAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CommandWindow
 * @text Command Window
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = this.statusWidth();\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param SlotWindow
 * @text Slot Window
 *
 * @param SlotBgType:num
 * @text Background Type
 * @parent SlotWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SlotRect:func
 * @text JS: X, Y, W, H
 * @parent SlotWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const commandWindowRect = this.commandWindowRect();\nconst x = this.statusWidth();\nconst y = commandWindowRect.y + commandWindowRect.height;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this.mainAreaHeight() - commandWindowRect.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ItemWindow
 * @text Item Window
 *
 * @param ItemBgType:num
 * @text Background Type
 * @parent ItemWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ItemRect:func
 * @text JS: X, Y, W, H
 * @parent ItemWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "return this.slotWindowRect();"
 *
 */
/* ----------------------------------------------------------------------------
 * Status Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~StatusMenu:
 *
 * @param ProfileWindow
 * @text Profile Window
 *
 * @param ProfileBgType:num
 * @text Background Type
 * @parent ProfileWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ProfileRect:func
 * @text JS: X, Y, W, H
 * @parent ProfileWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth;\nconst height = this.profileHeight();\nconst x = 0;\nconst y = this.mainAreaBottom() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.statusParamsWindowRect().y - y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusParamsWindow
 * @text Parameters Window
 *
 * @param StatusParamsBgType:num
 * @text Background Type
 * @parent StatusParamsWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusParamsRect:func
 * @text JS: X, Y, W, H
 * @parent StatusParamsWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = this.statusParamsWidth();\nconst height = this.statusParamsHeight();\nconst x = 0;\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusEquipWindow
 * @text Equipment Window
 *
 * @param StatusEquipBgType:num
 * @text Background Type
 * @parent StatusEquipWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusEquipRect:func
 * @text JS: X, Y, W, H
 * @parent StatusEquipWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth - this.statusParamsWidth();\nconst height = this.statusParamsHeight();\nconst x = this.statusParamsWidth();\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Options Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~OptionsMenu:
 *
 * @param OptionsWindow
 * @text Options Window
 *
 * @param OptionsBgType:num
 * @text Background Type
 * @parent OptionsWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param OptionsRect:func
 * @text JS: X, Y, W, H
 * @parent OptionsWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const n = Math.min(this.maxCommands(), this.maxVisibleCommands());\nconst width = 400;\nconst height = this.calcWindowHeight(n, true);\nconst x = (Graphics.boxWidth - width) / 2;\nconst y = (Graphics.boxHeight - height) / 2;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Save Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SaveMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, false);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListBgType:num
 * @text Background Type
 * @parent ListWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ListRect:func
 * @text JS: X, Y, W, H
 * @parent ListWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop() + this._helpWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._helpWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Load Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~LoadMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, false);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListBgType:num
 * @text Background Type
 * @parent ListWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ListRect:func
 * @text JS: X, Y, W, H
 * @parent ListWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop() + this._helpWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._helpWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Game End Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~GameEnd:
 *
 * @param CommandList:arraystruct
 * @text Command Window List
 * @type struct<Command>[]
 * @desc Window commands used by the Game End screen.
 * Add new commands here.
 * @default ["{\"Symbol:str\":\"toTitle\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.toTitle;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandToTitle();\\\"\"}","{\"Symbol:str\":\"cancel\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.cancel;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.popScene();\\\"\"}"]
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandList:arraystruct
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandList:arraystruct
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 2;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = (Graphics.boxWidth - width) / 2;\nconst y = (Graphics.boxHeight - height) / 2;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Shop Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ShopMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const wx = 0;\nconst wy = this.helpAreaTop();\nconst ww = Graphics.boxWidth;\nconst wh = this.helpAreaHeight();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param GoldWindow
 * @text Gold Window
 *
 * @param GoldBgType:num
 * @text Background Type
 * @parent GoldWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param GoldRect:func
 * @text JS: X, Y, W, H
 * @parent GoldWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 1;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = Graphics.boxWidth - width;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CommandWindow
 * @text Command Window
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = this._goldWindow.x;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param DummyWindow
 * @text Dummy Window
 *
 * @param DummyBgType:num
 * @text Background Type
 * @parent DummyWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param DummyRect:func
 * @text JS: X, Y, W, H
 * @parent DummyWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._commandWindow.y + this._commandWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._commandWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param NumberWindow
 * @text Number Window
 *
 * @param NumberBgType:num
 * @text Background Type
 * @parent NumberWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param NumberRect:func
 * @text JS: X, Y, W, H
 * @parent NumberWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._dummyWindow.y;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this._dummyWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = this.statusWidth();\nconst height = this._dummyWindow.height;\nconst x = Graphics.boxWidth - width;\nconst y = this._dummyWindow.y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param BuyWindow
 * @text Buy Window
 *
 * @param BuyBgType:num
 * @text Background Type
 * @parent BuyWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param BuyRect:func
 * @text JS: X, Y, W, H
 * @parent BuyWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._dummyWindow.y;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this._dummyWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CategoryWindow
 * @text Category Window
 *
 * @param CategoryBgType:num
 * @text Background Type
 * @parent CategoryWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CategoryRect:func
 * @text JS: X, Y, W, H
 * @parent CategoryWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._dummyWindow.y;\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param SellWindow
 * @text Sell Window
 *
 * @param SellBgType:num
 * @text Background Type
 * @parent SellWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SellRect:func
 * @text JS: X, Y, W, H
 * @parent SellWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._categoryWindow.y + this._categoryWindow.height;\nconst width = Graphics.boxWidth;\nconst height =\n    this.mainAreaHeight() -\n    this._commandWindow.height -\n    this._categoryWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Name Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~NameMenu:
 *
 * @param EditWindow
 * @text Edit Window
 *
 * @param EditBgType:num
 * @text Background Type
 * @parent EditWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param EditRect:func
 * @text JS: X, Y, W, H
 * @parent EditWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 9;\nconst inputWindowHeight = this.calcWindowHeight(rows, true);\nconst padding = $gameSystem.windowPadding();\nconst width = 600;\nconst height = Math.min(ImageManager.faceHeight + padding * 2, this.mainAreaHeight() - inputWindowHeight);\nconst x = (Graphics.boxWidth - width) / 2;\nconst y = (this.mainAreaHeight() - (height + inputWindowHeight)) / 2 + this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param InputWindow
 * @text Input Window
 *
 * @param InputBgType:num
 * @text Background Type
 * @parent InputWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param InputRect:func
 * @text JS: X, Y, W, H
 * @parent InputWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = this._editWindow.x;\nconst y = this._editWindow.y + this._editWindow.height;\nconst rows = 9;\nconst width = this._editWindow.width;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Title Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Title:
 *
 * @param TitleScreen
 * @text Title Screen
 *
 * @param DocumentTitleFmt:str
 * @text Document Title Format
 * @parent TitleScreen
 * @desc Format to display text in document title.
 * %1 - Main Title, %2 - Subtitle, %3 - Version
 * @default %1: %2 - Version %3
 *
 * @param Subtitle:str
 * @text Subtitle
 * @parent TitleScreen
 * @desc Subtitle to be displayed under the title name.
 * @default Subtitle
 *
 * @param Version:str
 * @text Version
 * @parent TitleScreen
 * @desc Version to be display in the title screen corner.
 * @default 0.00
 *
 * @param drawGameTitle:func
 * @text JS: Draw Title
 * @type note
 * @parent TitleScreen
 * @desc Code used to draw the game title.
 * @default "const x = 20;\nconst y = Graphics.height / 4;\nconst maxWidth = Graphics.width - x * 2;\nconst text = $dataSystem.gameTitle;\nconst bitmap = this._gameTitleSprite.bitmap;\nbitmap.fontFace = $gameSystem.mainFontFace();\nbitmap.outlineColor = \"black\";\nbitmap.outlineWidth = 8;\nbitmap.fontSize = 72;\nbitmap.drawText(text, x, y, maxWidth, 48, \"center\");"
 *
 * @param drawGameSubtitle:func
 * @text JS: Draw Subtitle
 * @type note
 * @parent TitleScreen
 * @desc Code used to draw the game subtitle.
 * @default "const x = 20;\nconst y = Graphics.height / 4 + 72;\nconst maxWidth = Graphics.width - x * 2;\nconst text = Scene_Title.subtitle;\nconst bitmap = this._gameTitleSprite.bitmap;\nbitmap.fontFace = $gameSystem.mainFontFace();\nbitmap.outlineColor = \"black\";\nbitmap.outlineWidth = 6;\nbitmap.fontSize = 48;\nbitmap.drawText(text, x, y, maxWidth, 48, \"center\");"
 *
 * @param drawGameVersion:func
 * @text JS: Draw Version
 * @type note
 * @parent TitleScreen
 * @desc Code used to draw the game version.
 * @default "const bitmap = this._gameTitleSprite.bitmap;\nconst x = 0;\nconst y = Graphics.height - 20;\nconst width = Math.round(Graphics.width / 4);\nconst height = 20;\nconst c1 = ColorManager.dimColor1();\nconst c2 = ColorManager.dimColor2();\nconst text = 'Version ' + Scene_Title.version;\nbitmap.gradientFillRect(x, y, width, height, c1, c2);\nbitmap.fontFace = $gameSystem.mainFontFace();\nbitmap.outlineColor = \"black\";\nbitmap.outlineWidth = 3;\nbitmap.fontSize = 16;\nbitmap.drawText(text, x + 4, y, Graphics.width, height, \"left\");"
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent TitleScreen
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const offsetX = $dataSystem.titleCommandWindow.offsetX;\nconst offsetY = $dataSystem.titleCommandWindow.offsetY;\nconst rows = this.commandWindowRows();\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = (Graphics.boxWidth - width) / 2 + offsetX;\nconst y = Graphics.boxHeight - height - 96 + offsetY;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ButtonFadeSpeed:num
 * @text Button Fade Speed
 * @parent TitleScreen
 * @type number
 * @min 1
 * @max 255
 * @desc Speed at which the buttons fade in at (1-255).
 * @default 4
 *
 */
/* ----------------------------------------------------------------------------
 * Parameter Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Param:
 *
 * @param DisplayedParams:arraystr
 * @text Displayed Parameters
 * @type combo[]
 * @option MaxHP
 * @option MaxMP
 * @option ATK
 * @option DEF
 * @option MAT
 * @option MDF
 * @option AGI
 * @option LUK
 * @option HIT
 * @option EVA
 * @option CRI
 * @option CEV
 * @option MEV
 * @option MRF
 * @option CNT
 * @option HRG
 * @option MRG
 * @option TRG
 * @option TGR
 * @option GRD
 * @option REC
 * @option PHA
 * @option MCR
 * @option TCR
 * @option PDR
 * @option MDR
 * @option FDR
 * @option EXR
 * @desc A list of the parameters that will be displayed in-game.
 * @default ["ATK","DEF","MAT","MDF","AGI","LUK"]
 *
 * @param ExtDisplayedParams:arraystr
 * @text Extended Parameters
 * @parent DisplayedParams:arraystr
 * @type combo[]
 * @option MaxHP
 * @option MaxMP
 * @option ATK
 * @option DEF
 * @option MAT
 * @option MDF
 * @option AGI
 * @option LUK
 * @option HIT
 * @option EVA
 * @option CRI
 * @option CEV
 * @option MEV
 * @option MRF
 * @option CNT
 * @option HRG
 * @option MRG
 * @option TRG
 * @option TGR
 * @option GRD
 * @option REC
 * @option PHA
 * @option MCR
 * @option TCR
 * @option PDR
 * @option MDR
 * @option FDR
 * @option EXR
 * @desc The list shown in extended scenes (for other VisuStella plugins).
 * @default ["MaxHP","MaxMP","ATK","DEF","MAT","MDF","AGI","LUK"]
 *
 * @param BasicParameters
 * @text Basic Parameters
 *
 * @param CrisisRate:num
 * @text HP Crisis Rate
 * @parent BasicParameters
 * @desc HP Ratio at which a battler can be considered in crisis mode.
 * @default 0.25
 *
 * @param BasicParameterFormula:func
 * @text JS: Formula
 * @parent BasicParameters
 * @type note
 * @desc Formula used to determine the total value all 8 basic parameters: MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK.
 * @default "// Determine the variables used in this calculation.\nlet paramId = arguments[0];\nlet base = this.paramBase(paramId);\nlet plus = this.paramPlus(paramId);\nlet paramRate = this.paramRate(paramId);\nlet buffRate = this.paramBuffRate(paramId);\nlet flatBonus = this.paramFlatBonus(paramId);\n\n// Formula to determine total parameter value.\nlet value = (base + plus) * paramRate * buffRate + flatBonus;\n\n// Determine the limits\nconst maxValue = this.paramMax(paramId);\nconst minValue = this.paramMin(paramId);\n\n// Final value\nreturn Math.round(value.clamp(minValue, maxValue));"
 *
 * @param BasicParamCaps
 * @text Parameter Caps
 * @parent BasicParameters
 *
 * @param BasicActorParamCaps
 * @text Actors
 * @parent BasicParamCaps
 *
 * @param BasicActorParamMax0:str
 * @text MaxHP Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MaxHP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 9999
 *
 * @param BasicActorParamMax1:str
 * @text MaxMP Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MaxMP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 9999
 *
 * @param BasicActorParamMax2:str
 * @text ATK Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine ATK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax3:str
 * @text DEF Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine DEF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax4:str
 * @text MAT Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MAT cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax5:str
 * @text MDF Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MDF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax6:str
 * @text AGI Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine AGI cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax7:str
 * @text LUK Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine LUK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamCaps
 * @text Enemies
 * @parent BasicParamCaps
 *
 * @param BasicEnemyParamMax0:str
 * @text MaxHP Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MaxHP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999999
 *
 * @param BasicEnemyParamMax1:str
 * @text MaxMP Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MaxMP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 9999
 *
 * @param BasicEnemyParamMax2:str
 * @text ATK Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine ATK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax3:str
 * @text DEF Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine DEF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax4:str
 * @text MAT Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MAT cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax5:str
 * @text MDF Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MDF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax6:str
 * @text AGI Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine AGI cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax7:str
 * @text LUK Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine LUK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param XParameters
 * @text X Parameters
 *
 * @param XParameterFormula:func
 * @text JS: Formula
 * @parent XParameters
 * @type note
 * @desc Formula used to determine the total value all 10 X parameters: HIT, EVA, CRI, CEV, MEV, MRF, CNT, HRG, MRG, TRG.
 * @default "// Determine the variables used in this calculation.\nlet xparamId = arguments[0];\nlet base = this.traitsSum(Game_BattlerBase.TRAIT_XPARAM, xparamId);\nlet plus = this.xparamPlus(xparamId);\nlet paramRate = this.xparamRate(xparamId);\nlet flatBonus = this.xparamFlatBonus(xparamId);\n\n// Formula to determine total parameter value.\nlet value = (base + plus) * paramRate + flatBonus;\n\n// Final value\nreturn value;"
 *
 * @param XParamVocab
 * @text Vocabulary
 * @parent XParameters
 *
 * @param XParamVocab0:str
 * @text HIT
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Hit
 *
 * @param XParamVocab1:str
 * @text EVA
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Evasion
 *
 * @param XParamVocab2:str
 * @text CRI
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Crit.Rate
 *
 * @param XParamVocab3:str
 * @text CEV
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Crit.Evade
 *
 * @param XParamVocab4:str
 * @text MEV
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Magic Evade
 *
 * @param XParamVocab5:str
 * @text MRF
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Magic Reflect
 *
 * @param XParamVocab6:str
 * @text CNT
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Counter
 *
 * @param XParamVocab7:str
 * @text HRG
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default HP Regen
 *
 * @param XParamVocab8:str
 * @text MRG
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default MP Regen
 *
 * @param XParamVocab9:str
 * @text TRG
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default TP Regen
 *
 * @param SParameters
 * @text S Parameters
 *
 * @param SParameterFormula:func
 * @text JS: Formula
 * @parent SParameters
 * @type note
 * @desc Formula used to determine the total value all 10 S parameters: TGR, GRD, REC, PHA, MCR, TCR, PDR, MDR, FDR, EXR.
 * @default "// Determine the variables used in this calculation.\nlet sparamId = arguments[0];\nlet base = this.traitsPi(Game_BattlerBase.TRAIT_SPARAM, sparamId);\nlet plus = this.sparamPlus(sparamId);\nlet paramRate = this.sparamRate(sparamId);\nlet flatBonus = this.sparamFlatBonus(sparamId);\n\n// Formula to determine total parameter value.\nlet value = (base + plus) * paramRate + flatBonus;\n\n// Final value\nreturn value;"
 *
 * @param SParamVocab
 * @text Vocabulary
 * @parent SParameters
 *
 * @param SParamVocab0:str
 * @text TGR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Aggro
 *
 * @param SParamVocab1:str
 * @text GRD
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Guard
 *
 * @param SParamVocab2:str
 * @text REC
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Recovery
 *
 * @param SParamVocab3:str
 * @text PHA
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Item Effect
 *
 * @param SParamVocab4:str
 * @text MCR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default MP Cost
 *
 * @param SParamVocab5:str
 * @text TCR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default TP Charge
 *
 * @param SParamVocab6:str
 * @text PDR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Physical DMG
 *
 * @param SParamVocab7:str
 * @text MDR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Magical DMG
 *
 * @param SParamVocab8:str
 * @text FDR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Floor DMG
 *
 * @param SParamVocab9:str
 * @text EXR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default EXP Gain
 *
 * @param Icons
 * @text Icons
 *
 * @param DrawIcons:eval
 * @text Draw Icons?
 * @parent Icons
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Draw icons next to parameter names?
 * @default true
 *
 * @param IconParam0:str
 * @text MaxHP
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 84
 *
 * @param IconParam1:str
 * @text MaxMP
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 165
 *
 * @param IconParam2:str
 * @text ATK
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 76
 *
 * @param IconParam3:str
 * @text DEF
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 81
 *
 * @param IconParam4:str
 * @text MAT
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 101
 *
 * @param IconParam5:str
 * @text MDF
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 133
 *
 * @param IconParam6:str
 * @text AGI
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 140
 *
 * @param IconParam7:str
 * @text LUK
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 87
 *
 * @param IconXParam0:str
 * @text HIT
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 102
 *
 * @param IconXParam1:str
 * @text EVA
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 82
 *
 * @param IconXParam2:str
 * @text CRI
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 78
 *
 * @param IconXParam3:str
 * @text CEV
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 82
 *
 * @param IconXParam4:str
 * @text MEV
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 171
 *
 * @param IconXParam5:str
 * @text MRF
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 222
 *
 * @param IconXParam6:str
 * @text CNT
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 77
 *
 * @param IconXParam7:str
 * @text HRG
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconXParam8:str
 * @text MRG
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconXParam9:str
 * @text TRG
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconSParam0:str
 * @text TGR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 5
 *
 * @param IconSParam1:str
 * @text GRD
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 128
 *
 * @param IconSParam2:str
 * @text REC
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconSParam3:str
 * @text PHA
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 176
 *
 * @param IconSParam4:str
 * @text MCR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 165
 *
 * @param IconSParam5:str
 * @text TCR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 164
 *
 * @param IconSParam6:str
 * @text PDR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 76
 *
 * @param IconSParam7:str
 * @text MDR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 79
 *
 * @param IconSParam8:str
 * @text FDR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 141
 *
 * @param IconSParam9:str
 * @text EXR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 73
 *
 */
/* ----------------------------------------------------------------------------
 * Commands Struct
 * ----------------------------------------------------------------------------
 */
/*~struct~Command:
 *
 * @param Symbol:str
 * @text Symbol
 * @desc The symbol used for this command.
 * @default Symbol
 *
 * @param TextStr:str
 * @text STR: Text
 * @desc Displayed text used for this title command.
 * If this has a value, ignore the JS: Text version.
 * @default Untitled
 *
 * @param TextJS:func
 * @text JS: Text
 * @type note
 * @desc JavaScript code used to determine string used for the displayed name.
 * @default "return 'Text';"
 *
 * @param ShowJS:func
 * @text JS: Show
 * @type note
 * @desc JavaScript code used to determine if the item is shown or not.
 * @default "return true;"
 *
 * @param EnableJS:func
 * @text JS: Enable
 * @type note
 * @desc JavaScript code used to determine if the item is enabled or not.
 * @default "return true;"
 *
 * @param ExtJS:func
 * @text JS: Ext
 * @type note
 * @desc JavaScript code used to determine any ext data that should be added.
 * @default "return null;"
 *
 * @param CallHandlerJS:func
 * @text JS: Run Code
 * @type note
 * @desc JavaScript code that runs once this command is selected.
 * @default ""
 *
 */
/* ----------------------------------------------------------------------------
 * Title Picture Buttons
 * ----------------------------------------------------------------------------
 */
/*~struct~TitlePictureButton:
 *
 * @param PictureFilename:str
 * @text Picture's Filename
 * @type file
 * @dir img/pictures/
 * @desc Filename used for the picture.
 * @default 
 *
 * @param ButtonURL:str
 * @text Button URL
 * @desc URL for the button to go to upon being clicked.
 * @default https://www.google.com/
 *
 * @param PositionJS:func
 * @text JS: Position
 * @type note
 * @desc JavaScript code that helps determine the button's Position.
 * @default "this.x = Graphics.width - this.bitmap.width - 20;\nthis.y = Graphics.height - this.bitmap.height - 20;"
 *
 * @param OnLoadJS:func
 * @text JS: On Load
 * @type note
 * @desc JavaScript code that runs once this button bitmap is loaded.
 * @default "this.opacity = 0;\nthis.visible = true;"
 *
 * @param CallHandlerJS:func
 * @text JS: Run Code
 * @type note
 * @desc JavaScript code that runs once this button is pressed.
 * @default "const url = this._data.ButtonURL;\nVisuMZ.openURL(url);"
 *
 */
/* ----------------------------------------------------------------------------
 * UI Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~UI:
 *
 * @param UIArea
 * @text UI Area
 *
 * @param FadeSpeed:num
 * @text Fade Speed
 * @parent UIArea
 * @desc Default fade speed for transitions.
 * @default 24
 *
 * @param BoxMargin:num
 * @text Box Margin
 * @parent UIArea
 * @type number
 * @min 0
 * @desc Set the margin in pixels for the screen borders.
 * Default: 4
 * @default 4
 *
 * @param CommandWidth:num
 * @text Command Window Width
 * @parent UIArea
 * @type number
 * @min 1
 * @desc Sets the width for standard Command Windows.
 * Default: 240
 * @default 240
 *
 * @param BottomHelp:eval
 * @text Bottom Help Window
 * @parent UIArea
 * @type boolean
 * @on Bottom
 * @off Top
 * @desc Put the Help Window at the bottom of the screen?
 * @default false
 *
 * @param RightMenus:eval
 * @text Right Aligned Menus
 * @parent UIArea
 * @type boolean
 * @on Right
 * @off Left
 * @desc Put most command windows to the right side of the screen.
 * @default true
 *
 * @param ShowButtons:eval
 * @text Show Buttons
 * @parent UIArea
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show clickable buttons in your game?
 * This will affect all buttons.
 * @default true
 *
 * @param cancelShowButton:eval
 * @text Show Cancel Button
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show cancel button?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param menuShowButton:eval
 * @text Show Menu Button
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show main menu button from the map scene?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param pagedownShowButton:eval
 * @text Show Page Up/Down
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show page up/down buttons?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param numberShowButton:eval
 * @text Show Number Buttons
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show number adjustment buttons?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param ButtonHeight:num
 * @text Button Area Height
 * @parent UIArea
 * @type number
 * @min 1
 * @desc Sets the height for the button area.
 * Default: 52
 * @default 52
 *
 * @param BottomButtons:eval
 * @text Bottom Buttons
 * @parent UIArea
 * @type boolean
 * @on Bottom
 * @off Top
 * @desc Put the buttons at the bottom of the screen?
 * @default false
 *
 * @param SideButtons:eval
 * @text Side Buttons
 * @parent UIArea
 * @type boolean
 * @on Side
 * @off Normal
 * @desc Push buttons to the side of the UI if there is room.
 * @default true
 *
 * @param MenuObjects
 * @text Menu Objects
 *
 * @param LvExpGauge:eval
 * @text Level -> EXP Gauge
 * @parent MenuObjects
 * @type boolean
 * @on Draw Gauge
 * @off Keep As Is
 * @desc Draw an EXP Gauge under the drawn level.
 * @default true
 *
 * @param ParamArrow:str
 * @text Parameter Arrow
 * @parent MenuObjects
 * @desc The arrow used to show changes in the parameter values.
 * @default →
 *
 * @param TextCodeSupport
 * @text Text Code Support
 *
 * @param TextCodeClassNames:eval
 * @text Class Names
 * @parent TextCodeSupport
 * @type boolean
 * @on Suport Text Codes
 * @off Normal Text
 * @desc Make class names support text codes?
 * @default true
 *
 * @param TextCodeNicknames:eval
 * @text Nicknames
 * @parent TextCodeSupport
 * @type boolean
 * @on Suport Text Codes
 * @off Normal Text
 * @desc Make nicknames support text codes?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param WindowDefaults
 * @text Defaults
 *
 * @param EnableMasking:eval
 * @text Enable Masking
 * @parent WindowDefaults
 * @type boolean
 * @on Masking On
 * @off Masking Off
 * @desc Enable window masking (windows hide other windows behind 
 * them)? WARNING: Turning it on can obscure data.
 * @default false
 *
 * @param LineHeight:num
 * @text Line Height
 * @parent WindowDefaults
 * @desc Default line height used for standard windows.
 * Default: 36
 * @default 36
 *
 * @param ItemPadding:num
 * @text Item Padding
 * @parent WindowDefaults
 * @desc Default line padding used for standard windows.
 * Default: 8
 * @default 8
 *
 * @param BackOpacity:num
 * @text Back Opacity
 * @parent WindowDefaults
 * @desc Default back opacity used for standard windows.
 * Default: 192
 * @default 192
 *
 * @param TranslucentOpacity:num
 * @text Translucent Opacity
 * @parent WindowDefaults
 * @desc Default translucent opacity used for standard windows.
 * Default: 160
 * @default 160
 *
 * @param OpenSpeed:num
 * @text Window Opening Speed
 * @parent WindowDefaults
 * @desc Default open speed used for standard windows.
 * Default: 32 (Use a number between 0-255)
 * @default 32
 * @default 24
 *
 * @param ColSpacing:num
 * @text Column Spacing
 * @parent WindowDefaults
 * @desc Default column spacing for selectable windows.
 * Default: 8
 * @default 8
 *
 * @param RowSpacing:num
 * @text Row Spacing
 * @parent WindowDefaults
 * @desc Default row spacing for selectable windows.
 * Default: 4
 * @default 4
 * 
 * @param SelectableItems
 * @text Selectable Items
 *
 * @param ShowItemBackground:eval
 * @text Show Background?
 * @parent SelectableItems
 * @type boolean
 * @on Show Backgrounds
 * @off No backgrounds.
 * @desc Selectable menu items have dark boxes behind them. Show them?
 * @default true
 *
 * @param ItemHeight:num
 * @text Item Height Padding
 * @parent SelectableItems
 * @desc Default padding for selectable items.
 * Default: 8
 * @default 8
 *
 * @param DrawItemBackgroundJS:func
 * @text JS: Draw Background
 * @parent SelectableItems
 * @type note
 * @desc Code used to draw the background rectangle behind clickable menu objects
 * @default "const rect = arguments[0];\nconst c1 = ColorManager.itemBackColor1();\nconst c2 = ColorManager.itemBackColor2();\nconst x = rect.x;\nconst y = rect.y;\nconst w = rect.width;\nconst h = rect.height;\nthis.contentsBack.gradientFillRect(x, y, w, h, c1, c2, true);\nthis.contentsBack.strokeRect(x, y, w, h, c1);"
 */
/* ----------------------------------------------------------------------------
 * Screen Resolution Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ScreenResolution:
 *
 * @param Troops
 *
 * @param RepositionActors:eval
 * @text Reposition Actors
 * @parent Troops
 * @type boolean
 * @on Reposition
 * @off Keep As Is
 * @desc Update the position of actors in battle if the screen resolution has changed. Ignore if using Battle Core.
 * @default true
 *
 * @param RepositionEnemies:eval
 * @text Reposition Enemies
 * @parent Troops
 * @type boolean
 * @on Reposition
 * @off Keep As Is
 * @desc Update the position of enemies in battle if the screen resolution has changed.
 * @default true
 *
 * @param RepositionEnemies130:eval
 * @text For MZ 1.3.0+?
 * @parent RepositionEnemies:eval
 * @type boolean
 * @on Reposition
 * @off Keep As Is
 * @desc Both this parameter and its parent parameter need to be on when using RPG Maker MZ 1.3.0+.
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Screen Shake Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ScreenShake:
 *
 * @param DefaultStyle:str
 * @text Default Style
 * @type select
 * @option Original
 * @value original
 * @option Random
 * @value random
 * @option Horizontal
 * @value horizontal
 * @option Vertical
 * @value vertical
 * @desc The default style used for screen shakes.
 * @default random
 *
 * @param originalJS:func
 * @text JS: Original Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\nthis.x += Math.round($gameScreen.shake());"
 *
 * @param randomJS:func
 * @text JS: Random Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\n// Original Formula by Aries of Sheratan\nconst power = $gameScreen._shakePower * 0.75;\nconst speed = $gameScreen._shakeSpeed * 0.60;\nconst duration = $gameScreen._shakeDuration;\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);"
 *
 * @param horzJS:func
 * @text JS: Horizontal Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\n// Original Formula by Aries of Sheratan\nconst power = $gameScreen._shakePower * 0.75;\nconst speed = $gameScreen._shakeSpeed * 0.60;\nconst duration = $gameScreen._shakeDuration;\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);"
 *
 * @param vertJS:func
 * @text JS: Vertical Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\n// Original Formula by Aries of Sheratan\nconst power = $gameScreen._shakePower * 0.75;\nconst speed = $gameScreen._shakeSpeed * 0.60;\nconst duration = $gameScreen._shakeDuration;\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);"
 *
 */
/* ----------------------------------------------------------------------------
 * Custom Parameter Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~CustomParam:
 *
 * @param ParamName:str
 * @text Parameter Name
 * @desc What's the parameter's name?
 * Used for VisuStella MZ menus.
 * @default Untitled
 *
 * @param Abbreviation:str
 * @text Abbreviation
 * @parent ParamName:str
 * @desc What abbreviation do you want to use for the parameter?
 * Do not use special characters. Avoid numbers if possible.
 * @default unt
 *
 * @param Icon:num
 * @text Icon
 * @parent ParamName:str
 * @desc What icon do you want to use to represent this parameter?
 * Used for VisuStella MZ menus.
 * @default 160
 *
 * @param Type:str
 * @text Type
 * @parent ParamName:str
 * @type select
 * @option Integer (Whole Numbers Only)
 * @value integer
 * @option Float (Decimals are Allowed)
 * @value float
 * @desc What kind of number value will be returned with this parameter?
 * @default integer
 *
 * @param ValueJS:json
 * @text JS: Value
 * @type note
 * @desc Run this code when this parameter is to be returned.
 * @default "// Declare Constants\nconst user = this;\n\n// Calculations\nreturn 1;"
 *
 */
/* ----------------------------------------------------------------------------
 * Show Picture Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ShowPicture:
 * 
 * @param Position
 *
 * @param Origin:num
 * @text Origin
 * @parent Position
 * @type select
 * @option 0 - Upper Left
 * @value 0
 * @option 1 - Center
 * @value 1
 * @desc What is the origin of this picture icon?
 * @default 0
 *
 * @param PositionX:eval
 * @text Position X
 * @parent Position
 * @desc X coordinate of the picture.
 * You may use JavaScript code.
 * @default 0
 *
 * @param PositionY:eval
 * @text Position Y
 * @parent Position
 * @desc Y coordinate of the picture.
 * You may use JavaScript code.
 * @default 0
 * 
 * @param Scale
 *
 * @param ScaleX:eval
 * @text Width %
 * @parent Scale
 * @desc Horizontal scale of the picture.
 * You may use JavaScript code.
 * @default 100
 *
 * @param ScaleY:eval
 * @text Height %
 * @parent Scale
 * @desc Vertical scale of the picture.
 * You may use JavaScript code.
 * @default 100
 * 
 * @param Blend
 *
 * @param Opacity:eval
 * @text Opacity
 * @parent Blend
 * @desc Insert a number to determine opacity level. Use a
 * number between 0 and 255. You may use JavaScript code.
 * @default 255
 *
 * @param BlendMode:num
 * @text Blend Mode
 * @parent Blend
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the picture?
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * JS Quick Function Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~jsQuickFunc:
 *
 * @param FunctionName:str
 * @text Function Name
 * @desc The function's name in the global namespace.
 * Will not overwrite functions/variables of the same name.
 * @default Untitled
 *
 * @param CodeJS:json
 * @text JS: Code
 * @type note
 * @desc Run this code when using the function.
 * @default "// Insert this as a function anywhere you can input code\n// such as Script Calls or Conditional Branch Scripts.\n\n// Process Code\n"
 *
 */
//=============================================================================

const _0x92b6=['BkzJU','\x5c}❪TAB❫\x5c{','TextFmt','keyCode','paramRate','maxBattleMembers','Scene_Map_createSpriteset','ColorExpGauge1','OpenConsole','getInputButtonString','ExportAllTroopText','TranslucentOpacity','wSgjY','nickname','OUTELASTIC','vertical','createFauxAnimation','Game_Picture_move','_realScale','AntiZoomPictures','win32','_repositioned','_width','TextCodeNicknames','ColorHPGauge2','MINUS','TextJS','applyForcedGameTroopSettingsCoreEngine','isArrowPressed','OptionsRect','wait','SlotRect','currentExp','movePageButtonSideButtonLayout','initCoreEngine','processBack','dimColor1','currentLevelExp','Bitmap_fillRect','ParamMax','overrideMimeType','loadBitmap','Duration','setSize','createEnemies','mainCommandWidth','_lastPluginCommandInterpreter','NUMPAD1','name','Game_Character_processMoveCommand','IconSParam6','HANJA','_buttonAssistWindow','LESS_THAN','_customModified','sellWindowRect','PictureShowIcon','drawActorSimpleStatus','updatePositionCoreEngineShakeVert','Input_update','MenuLayout','textColor','Scene_Boot_updateDocumentTitle','command105','_movementWholeDuration','INOUTSINE','_actor','WLKUT','MNpAe','_upArrowSprite','_baseSprite','CTB','mhp','Untitled','_editWindow','avZUA','xRWCU','traitsPi','TRG','processTouch','PJhBm','itypeId','SystemSetSideView','ParseStateNotetags','createDimmerSprite','printError','inBattle','Plus2','Bitmap_clearRect','_sideButtonLayout','itemWindowRect','Show\x20Scrolling\x20Text\x20Script\x20Error','SParamVocab3','min','TextCodeClassNames','setHome','faGnP','dABCY','DimColor2','OTB','drawActorLevel','snapForBackground','loadIconBitmap','flush','createWindowLayer','backgroundBitmap','OUTSINE','_timerSprite','initCoreEngineScreenShake','F11','hDVRD','Scene_MenuBase_helpAreaTop','_troopId','processFauxAnimationRequests','show','SaveMenu','registerCommand','process_VisuMZ_CoreEngine_Functions','_createInternalTextures','toLowerCase','key%1','playBuzzer','processHandling','1yKRIQL','Game_Temp_initialize','zzExS','makeInputButtonString','TVWPq','isPressed','_windowLayer','bgmVolume','OfaTY','fillRect','([\x5c+\x5c-]\x5cd+)>','drawIcon','render','updateAnchor','xjjDG','SCALE_MODES','tilesets','Window_Base_update','kECoo','BTestArmors','buttonAssistOffset3','stencilOp','updatePlayTestF7','_refreshPauseSign','Saved\x20file\x20as\x20%1\x20in\x20project\x20folder.','STENCIL_BUFFER_BIT','BACK_SLASH','InputBgType','Troop%1','xparamFlatBonus','Wvipa','_hovered','SceneManager_onKeyDown','clearCachedKeys','itemHit','moveCancelButtonSideButtonLayout','acLkE','xparamRateJS','rXcnY','calcCoreEasing','createTitleButtons','1616447TMubMz','Game_System_initialize','random','loadMapData','XNWVR','cursorPagedown','pixelated','processCursorMove','JqwyI','IconParam7','mmp','duration','drawTextEx','NameMenu','IconParam1','sqrt','offsetX','_sellWindow','sMCUZ','wUAtP','buttonAssistOffset2','DELETE','loadTitle1','xcsRz','PRESERVCONVERSION(%1)','_commandList','replace','Game_Actor_changeClass','ARRAYSTR','wAKnG','xclRX','vdfrH','NONCONVERT','Scene_Map_updateScene','MenuBg','NumberBgType','keyMapper','battlebacks1','Window_NameInput_cursorLeft','PPxKx','Game_Troop_setup','description','XtZgc','enemy','canUse','EUOrJ','cursorPageup','open','_cacheScaleY','moveRelativeToResolutionChange','_height','BlendMode','smooth','setViewportCoreEngineFix','text','nw.gui','onInputBannedWords','pagedownShowButton','Game_Interpreter_command355','paramMaxJS','adjustPictureAntiZoom','gZoAE','eva','viewport','lntqG','alpha','processKeyboardBackspace','checkCacheKey','_baseTexture','ValueJS','expRate','eWXoH','note','DataManager_setupNewGame','FunctionName','buttonAssistOffset%1','addChild','\x0a\x0a\x0a\x0a\x0a','_battlerName','GyzgZ','getButtonAssistLocation','CIRCUMFLEX','cursorUp','krCGC','vctSi','Sprite_Battler_startMove','EXR','join','makeEncounterCount','Window_NameInput_cursorRight','IDs','targetContentsOpacity','yScrollLinkedOffset','MAX_GL_TEXTURES','Graphics_centerElement','setAnchor','QRSFl','_buttonType','WIN_ICO_CLEAR','HaNsS','playMiss','_hideTileShadows','platform','EnableJS','MULTIPLY','Window','INCUBIC','SYaYn','ySKld','_stored_ctGaugeColor2','ButtonHeight','Graphics','isCursorMovable','gvmSw','STB','vhyiO','ListRect','onXhrError','_colorTone','EVA','ScaleY','substring','command355','_drawTextShadow','MzxBT','LhDzU','connected','createSpriteset','Game_Picture_updateMove','Game_Interpreter_command111','Scene_Skill_create','itemHeight','Bitmap_blt','xScrollLinkedOffset','oARnG','itemLineRect','isWindowMaskingEnabled','Scene_GameEnd_createBackground','TPB\x20WAIT','SEMICOLON','easingType','_cache','nFloy','pagedown','setClickHandler','retreat','ForceNoPlayTest','_balloonQueue','CallHandlerJS','scaleMode','$dataMap','NUMPAD7','remove','Scene_Map_createMenuButton','_isWindow','Sprite_Animation_setViewport','BottomButtons','_stored_hpGaugeColor2','clearZoom','none','AGI','Scene_Name_onInputOk','innerWidth','WIN_OEM_BACKTAB','xsXDc','enableDigitGroupingEx','resize','measureTextWidth','ETB','wazZV','isOptionValid','_spriteset','iCKIc','Window_NameInput_refresh','VisuMZ_2_BattleSystemCTB','sparamFlatJS','QwertyLayout','pages','imageSmoothingEnabled','destroy','39yWawBC','MDR','titles1','Wait','xparamPlus2','home','ApplyEasing','paramRateJS','playTestF7','EditRect','XParamVocab3','Basic','maxTp','listWindowRect','fGwvb','qpEEg','Game_Action_itemEva','usvLZ','areButtonsOutsideMainUI','Sprite_Picture_loadBitmap','ParseActorNotetags','_coreEngineShakeStyle','Game_BattlerBase_initMembers','ceil','IconParam5','GqcfY','SUBTRACT','worldTransform','SParamVocab9','_onKeyDown','_backSprite','〘Show\x20Text〙\x0a','Input_shouldPreventDefault','_encounterCount','addWindow','save','SParamVocab0','MKKSm','GoldMax','battlebacks2','WIN_OEM_RESET','terminate','zvtgC','setBattleSystem','Rate','maxGold','VisuMZ\x20CoreEngine\x20PictureIcon\x20%1\x20%2','GoldOverlap','opacity','_categoryWindow','ctrl','fSWlH','Bitmap_gradientFillRect','drawCurrencyValue','OUTQUART','toFixed','Sprite_Gauge_gaugeRate','_targetOffsetY','Max','TitleCommandList','BoxMargin','EnableNumberInput','RPGMAKER_VERSION','Window_Base_initialize','animationNextDelay','initVisuMZCoreEngine','catchUnknownError','16336HXMLPd','areButtonsHidden','removeChild','WIN_OEM_ENLW','makeTargetSprites','_centerElementCoreEngine','_tempActor','ezuSO','PictureEraseRange','_isButtonHidden','GoldBgType','EnableMasking','missed','updateShadow','charAt','SwitchToggleRange','contents','ParseTilesetNotetags','buttonAssistWindowButtonRect','ButtonFadeSpeed','ColorHPGauge1','number','sparamPlusJS','NaIXy','drawText','RkMeV','_registerKeyInput','LLtNv','pictures','GetParamIcon','battleSystem','IHLzc','OutlineColorDmg','onLoad','vertJS','rgba(0,\x200,\x200,\x201.0)','EVAL','addEventListener','KeyUnlisted','xparamFlatJS','OS_KEY','originalJS','determineSideButtonLayoutValid','animationShouldMirror','evaded','bitmapHeight','textSizeEx','NUMPAD6','Scene_Item_create','_actorWindow','MAXMP','onClick','backspace','sparamFlatBonus','bitmap','MainMenu','isActiveTpb','systemColor','Scene_MenuBase_createPageButtons','CMPAq','EXCLAMATION','StatusParamsBgType','StatusBgType','WindowLayer_render','paramFlatBonus','jBaHj','setupCoreEngine','Window_NameInput_cursorUp','oDWEp','StatusParamsRect','OPEN_PAREN','iconHeight','_stored_deathColor','Jidvl','F19','initMembersCoreEngine','ParamChange','WIN_OEM_FJ_JISHO','pikoO','Input_pollGamepads','getColorDataFromPluginParameters','IconSet','SParameterFormula','EUQTQ','CoreEngine','_playTestFastMode','_targetOffsetX','1619iOZJmS','IconParam2','SideButtons','Export\x20Map\x20Text\x20operation\x20will\x20finish\x20in\x20%1\x20ms(s)','GoldIcon','drawGauge','setAction','filter','SParamVocab8','CustomParamNames','CategoryRect','updateCoreEasing','Flat1','EQUAL','DigitGroupingLocale','uiAreaWidth','setWindowPadding','Spriteset_Battle_createEnemies','processKeyboardDelete','down2','picture','pkuOV','isPlaying','slice','updatePositionCoreEngineShakeOriginal','XVZlk','IconIndex','drawCircle','idAQu','CommandBgType','drawGameVersion','xXRkc','_coreEasing','sparamRate1','gradientFillRect','isSpecialCode','_gamepadWait','startShake','Graphics_defaultStretchMode','return\x200','qyvgC','profileWindowRect','targetObjects','setViewport','_optionsWindow','LhAeJ','F13','Ypusq','_statusEquipWindow','_digitGroupingEx','SOZXA','updateScene','EQUALS','applyCoreEasing','mev','Bitmap_drawTextOutline','ExtJS','1344589TAIKei','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','transform','Window_NameInput_initialize','UjRwi','Window_Selectable_processCursorMove','DocumentTitleFmt','gaugeBackColor','ekHrQ','FHDyh','vrnCe','mainAreaTopSideButtonLayout','XcOrL','ColorTPGauge2','outlineColor','NewGameCommonEvent','LaVqT','PLAY','terms','CLOSE_BRACKET','coreEngineRepositionEnemies','categoryWindowRect','Game_Event_isCollidedWithEvents','rCLAN','drawParamText','RepositionEnemies','dMFAe','consumeItem','_pictureContainer','get','rTgET','skillId','exit','isSideButtonLayout','reserveCommonEvent','move','integer','iconWidth','kcxPx','MAXHP','optSideView','HYPHEN_MINUS','updateClose','_cacheScaleX','kkZHG','kSRme','createFauxAnimationSprite','InputRect','Total','CodeJS','Plus','cancel','Tpdpw','YAJcv','_backSprite2','shake','BattleSystem','CustomParamAbb','AeJBz','IAwGI','apply','_movementDuration','dimColor2','Enable','PRINTSCREEN','UNDERSCORE','ItemRect','xparamRate','processCursorHomeEndTrigger','_effectsContainer','Window_StatusBase_drawActorLevel','DisplayedParams','ExportCurMapText','CrVWJ','levelUpRecovery','eventsXyNt','TCR','item','sv_enemies','_playtestF7Looping','OutlineColorGauge','CvnCY','removeAllFauxAnimations','maxLvGaugeColor1','resetBattleSystem','RegExp','reserveNewGameCommonEvent','tileHeight','Page','FDR','INOUTQUINT','setColorTone','CRSEL','updateDocumentTitle','ObZMj','_statusParamsWindow','updatePositionCoreEngine','INBACK','drawValue','isUseModernControls','isPlaytest','Linear','NUMPAD5','makeAutoBattleActions','processEscape','ItemMenu','IconSParam5','PixelateImageRendering','isTouchedInsideFrame','Export\x20Troop\x20Text\x20operation\x20will\x20finish\x20in\x20%1\x20ms(s)','IconParam3','BlurFilter','updateMove','layoutSettings','ParseSkillNotetags','KxUZr','zSYXe','_profileWindow','OUTQUINT','setActorHomeRepositioned','OnLoadJS','WyGUx','isExpGaugeDrawn','requestFauxAnimation','44nssJrS','goto','targetOpacity','NWmIP','buttonAssistText5','isBusy','isMVAnimation','_opening','ugJmO','BattleManager_processEscape','openURL','destroyed','PictureEraseAll','PGDN','_shakePower','mirror','Game_Action_itemHit','BqeIu','drawSegment','gjXdf','playEscape','buttonAssistText1','Bitmap_drawCircle','SwitchActorText','EncounterRateMinimum','NAifM','ButtonAssist','_pagedownButton','params','maxLevel','ShowButtons','HOME','ColorTPCost','zJOWD','CancelText','skills','Subtitle','CLOSE_CURLY_BRACKET','initMembers','HWrEU','wholeDuration','catchException','_refreshArrows','areTileShadowsHidden','HFTdj','FniRj','updateMotion','Scene_Base_terminateAnimationClearBugFix','Window_NumberInput_processDigitChange','onKeyDownKeysF6F7','OUTBOUNCE','DummyBgType','YRrdX','Key%1','cursorRight','_hideButtons','_stored_expGaugeColor2','XxDya','ScaleX','Rate2','nHJso','initCoreEasing','onEscapeSuccess','_pictureName','ExtractStrFromList','setBackgroundOpacity','VisuMZ_2_BattleSystemSTB','qfMAi','SYomA','fillStyle','TrQNI','command122','SystemSetWindowPadding','outbounce','MRF','SHIFT','HqWhH','IRzwS','JQVDx','result','crisisColor','IconXParam2','gxJMx','ATK','bahaS','Control\x20Variables\x20Script\x20Error','drawItem','《《《\x20Event\x20%1:\x20%2,\x20Page\x20%3\x20》》》\x0a%4\x0a','setMute','stencilFunc','evade','42767tBfWIo','WIN_OEM_CUSEL','_stored_powerUpColor','mpCostColor','_itemWindow','KANA','INQUAD','updateMain','TPB\x20ACTIVE','traitObjects','AutoStretch','_buyWindow','Keyboard','ZTKEy','itemSuccessRate','option','isGamepadConnected','Scene_Unlisted','qkZbf','lZvCC','YKtzl','0.00','code','sparamPlus1','Game_Picture_show','IaQUD','subject','lineHeight','%1〘Choice\x20Cancel〙%1','createCancelButton','Title','subtitle','encounterStep','addLoadListener','onMoveEnd','Scene_MenuBase_mainAreaTop','pow','left','ConvertNumberToString','RpYEc','sparamRate','getCoreEngineScreenShakeStyle','SystemLoadAudio','HxZwF','isClosed','smoothSelect','INOUTQUART','RowSpacing','visible','CustomParamIcons','push','CEV','isCollidedWithEvents','COMMA','INSERT','NUM_LOCK','LEFT','OZCcd','isMaskingEnabled','Origin','StatusMenu','resetTextColor','adGUS','gainItem','refresh','Window_Base_drawFace','YgjFD','ColorMPGauge1','makeCommandList','CLOSE_PAREN','responseText','playCursor','learnings','xparamRate1','VisuMZ_2_BattleSystemFTB','scfNP','LATIN1','_stored_ctGaugeColor1','hpGaugeColor1','Graphics_printError','usableSkills','updateTransform','GoldRect','_maxDigits','setup','SParamVocab1','setupBattleTestItems','ProfileRect','process_VisuMZ_CoreEngine_Notetags','_pauseSignSprite','createChildSprite','LoadError','forceStencil','process_VisuMZ_CoreEngine_RegExp','inbounce','Game_Map_setup','ModernControls','isGamepadTriggered','TextManager_param','F18','xparamRate2','Scene_Boot_loadSystemImages','BuyBgType','smallParamFontSize','process_VisuMZ_CoreEngine_jsQuickFunctions','CloLC','GmTJT','isEnemy','DimColor1','openness','backOpacity','seVolume','FadeSpeed','SceneManager_isGameActive','LineHeight','GhHfi','Window_Selectable_drawBackgroundRect','encounterStepsMinimum','FontSmoothing','deathColor','setSideButtonLayout','button','CONVERT','sIwbQ','pRsra','_changingClass','Opacity','isGameActive','NUMPAD8','max','IconSParam7','HelpRect','isOpen','gold','onInputOk','PositionX','destroyCoreEngineMarkedBitmaps','qJcbA','F6key','isNextScene','_blank','Sprite_Actor_setActorHome','buttonAssistOffset4','FUNC','playTestF6','createCustomBackgroundImages','Settings','OPEN_CURLY_BRACKET','buttonAssistText3','INOUTQUAD','makeFontSmaller','IconXParam5','createBackground','ShowItemBackground','isMagical','INOUTCUBIC','XParamVocab0','GydUQ','ARRAYFUNC','SZPQI','processKeyboardHome','enter','addCommand','yYwGx','pDxZs','faceWidth','mYYxw','font-smooth','helpAreaTop','StatusEquipBgType','mbovE','YkaoC','Window_Selectable_cursorDown','isItemStyle','setMainFontSize','Smooth','forceOutOfPlaytest','targetPosition','dashToggle','uiAreaHeight','PLUS','trim','mfUsx','active','isPhysical','createJsQuickFunction','PDR','asin','_animation','PmYzc','startAutoNewGame','NjJbJ','jbWbs','bind','qVtjS','style','floor','jlZpp','checkSmartEventCollision','_data','UAKiq','DEF','Window_NameInput_cursorDown','paramBase','colSpacing','LevelUpFullMp','Renderer','CustomParamType','ESC','jTwhE','touchUI','fEDlF','_storedStack','bbdvK','Game_Actor_levelUp','CLEAR','PIPE','maxCols','default','PreserveNumbers','QQyqX','Bitmap_measureTextWidth','jsQuickFunc','normal','IconXParam8','NewGameCommonEventAll','UiFTm','fbVvo','XParamVocab6','zaVlk','BTestWeapons','ADD','ARRAYSTRUCT','_currentMap','Game_Action_updateLastTarget','DTB','ImprovedAccuracySystem','filterArea','SCROLL_LOCK','add','powerUpColor','rlUso','_shakeSpeed','StatusEquipRect','_onKeyPress','KXUcD','ColorPowerUp','setActorHome','isNormalPriority','gameTitle','zNkVt','WIN_ICO_00','isActor','_margin','original','oazMa','NUMPAD9','PictureFilename','currencyUnit','calcEasing','round','xxjAt','refreshDimmerBitmap','drawAllParams','CRI','_clickHandler','MAX_SAFE_INTEGER','gaugeHeight','REC','GET','itemBackColor2','processMoveCommand','setBackgroundType','INBOUNCE','Input_setupEventHandlers','uWqTZ','FTB','LINEAR','_pageupButton','actor','ubJHC','WIN_OEM_WSCTRL','maxLvGaugeColor2','oqEBr','Window_NameInput_cursorPageup','buttonAssistText%1','ColorPowerDown','AMPERSAND','itemRect','RevertPreserveNumbers','bitmapWidth','PGUP','IconSParam4','adjustSprite','SkillTypeBgType','_pollGamepads','call','ScreenShake','keyboard','outlineColorDmg','ColorMaxLvGauge2','Script\x20Call\x20Error','makeFontBigger','EyRvi','_mirror','_statusWindow','helpWindowRect','STENCIL_TEST','flGEj','markCoreEngineModified','hideButtonFromView','Window_Selectable_itemRect','numberWindowRect','([\x5c+\x5c-]\x5cd+)([%％])>','Window_NameInput_processHandling','maxItems','paramFlatJS','expGaugeColor2','CategoryBgType','members','isNwjs','Scene_Status_create','FhGAl','Spriteset_Base_update','Scene_Title_drawGameTitle','SystemSetFontSize','ColorSystem','GRD','_clientArea','CIxWM','_downArrowSprite','Scene_Options_create','_screenY','_muteSound','tpCostColor','log','constructor','ColorCrisis','process_VisuMZ_CoreEngine_CustomParameters','tpGaugeColor2','buttonY','enable','children','akvjx','exportAllMapStrings','valueOutlineWidth','〘Common\x20Event\x20%1:\x20%2〙\x20Start','(\x5cd+)>','clearRect','XParamVocab4','paramPlus','processDigitChange','CANCEL','FontShadows','applyEasing','tileWidth','SnapshotOpacity','mainAreaTop','cXHjr','gaugeRate','createTroopNote','873NeiuIf','OptionsMenu','Input_onKeyDown','processSoundTimings','_menuButton','Input_clear','charCode','getColor','length','clear','makeActionList','buttonAssistKey5','aMDnL','param','command111','startMove','setupButtonImage','WIN_OEM_AUTO','Sprite_AnimationMV_processTimingData','fontSize','shift','CONTEXT_MENU','_inputSpecialKeyCode','BTB','stypeId','blockWidth','MDF','Game_Party_consumeItem','_windowskin','_addShadow','RepositionActors','MRG','update','updatePictureAntiZoom','Color','paramValueByName','helpAreaBottom','SPACE','_drawTextOutline','createButtonAssistWindow','SParamVocab7','enemies','loadPicture','randomInt','uQvvC','PKoss','AsEhz','strokeRect','expGaugeColor1','ruwLg','GoldFontSize','up2','targetEvaRate','IoZRJ','HRG','XParamVocab9','》Comment《\x0a%1\x0a','runCombinedScrollingTextAsCode','_skillTypeWindow','WIN_ICO_HELP','_forcedTroopView','blendFunc','ParseArmorNotetags','SideView','WIN_OEM_FJ_TOUROKU','center','_stored_mpGaugeColor2','Scene_Battle_createSpriteset','MCR','mapId','updateOpacity','drawNewParam','EnableNameInput','sparamRateJS','targetScaleX','isRightInputMode','_centerElement','randomJS','dvLFZ','ItemBackColor1','_stored_pendingColor','commandWindowRect','Game_BattlerBase_refresh','Type','nPDlw','Scene_Base_createWindowLayer','hide','_stored_powerDownColor','hpColor','canEquip','_numberWindow','qzoDY','isTriggered','REPLACE','_mode','onKeyDown','buttonAssistOk','application/json','SceneManager_initialize','match','Symbol','〖〖〖\x20Map\x20%1:\x20%2\x20Script\x20〗〗〗\x0a\x0a','setTargetAnchor','itemBackColor1','FontSize','SEPARATOR','stringKeyMap','qNDMu','ShowDevTools','Cmlbv','URL','tab','_targetAnchor','sparam','sgJIP','INQUART','startNormalGame','INOUTBACK','Sprite_destroy','_shakeDuration','_anchor','test','F20','setValue','damageColor','anchorCoreEasing','Manual','SystemLoadImages','Window_Base_drawText','VisuMZ_2_BattleSystemOTB','ItemPadding','editWindowRect','WIN_OEM_ATTN','isSmartEventCollisionOn','MAT','AblLL','updateEffekseer','ENTER','\x0a\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%2\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(\x27JS\x20Quick\x20Function\x20\x22%1\x22\x20Error!\x27);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20','Window_NameInput_processTouch','rmlac','exportAllTroopStrings','sparamPlus','Scene_Battle_update','isRepeated','CNT','reduce','onNameOk','88akvSxk','keyRepeatWait','fFSus','Window_Base_drawIcon','_coreEasingType','qjvJu','nuiHp','ActorMPColor','aQfEc','slotWindowRect','TRcnt','Window_NumberInput_start','_active','maQFB','zUSdh','boxWidth','background','Window_EquipItem_isEnabled','IconXParam9','Bitmap_strokeRect','WASD','ActorTPColor','initialize','AllTroops','xKxOX','prototype','targetBackOpacity','LUK','zXBjx','<%1\x20%2:[\x20]','storeMapData','ListBgType','ENTER_SPECIAL','_scene','setMoveEasingType','KpIFW','contains','Game_Picture_initBasic','tpColor','XParamVocab1','dGvYx','list','isBottomButtonMode','91909JpCDme','FocQa','1.3.0','ColorTPGauge1','fGpeE','NumberRect','NQNky','_inputString','right','GroupDigits','pictureButtons','buttonAreaHeight','WIN_OEM_PA2','OwmrM','_offsetY','drawParamName','xparam','index','Window_Base_drawCharacter','META','darwin','EndingID','resetFontSettings','WIN_OEM_COPY','BaseTexture','ParseEnemyNotetags','setFrame','BgFilename2','onerror','JfvIh','Scene_Menu_create','indexOf','changeTextColor','defaultInputMode','INOUTELASTIC','data/','_helpWindow','PTB','F7key','〖〖〖\x20Troop\x20%1:\x20%2\x20Script\x20〗〗〗\x0a\x0a','HIT','NUMPAD2','updatePositionCoreEngineShakeRand','NUMPAD3','paramBaseAboveLevel99','drawCurrentParam','_bitmap','VOLUME_MUTE','4zZLMpT','isNumpadPressed','cursorDown','_defaultStretchMode','hJVwW','ARRAYJSON','INOUTBOUNCE','gaugeLineHeight','_backSprite1','mainFontSize','JSON','targetScaleY','SkillMenu','RPVJd','itemHitImprovedAccuracy','qZYlW','hit','width','pageup','jrMLd','IconXParam6','INEXPO','CreateBattleSystemID','doesNameContainBannedWords','isAnimationOffsetXMirrored','Scene_Name_create','meVolume','HelpBgType','HwLQM','buttonAssistKey%1','processCursorMoveModernControls','clamp','drawGoldItemStyle','ExtractStrFromMap','(\x5cd+\x5c.?\x5cd+)>','F17','initBasic','updateLastTarget','SellBgType','fPSgr','buttonAssistText2','ColSpacing','TYjOr','IconXParam7','DkWJf','height','contentsBack','IconSParam0','dYdEY','CgyKs','SmartEventCollisionPriority','ColorGaugeBack','isMaxLevel','tpGaugeColor1','Sprite_Button_updateOpacity','_list','Scene_Equip_create','bxiAi','IconParam6','_backgroundFilter','fEUKM','_hp','_storedMapText','GQhIj','lberV','IurUU','INCIRC','sparamPlus2','Gold','ItemHeight','renderNoMask','ConvertParams','isAnimationForEach','ctGaugeColor2','top','anchor','getBattleSystem','_screenX','getCombinedScrollingText','ItemBgType','KEEP','F24','rUHXf','stretch','buttonAssistCancel','vxrBL','_goldWindow','Param','Unnamed','toString','_dimmerSprite','focus','down','_stored_tpCostColor','KeyboardInput','createCustomParameter','updateFauxAnimations','NEAREST','setCoreEngineScreenShakeStyle','OpenURL','boxHeight','Bitmap_resize','SystemSetBattleSystem','wlajv','_number','VisuMZ_1_OptionsCore','Spriteset_Base_destroy','levelUp','ofTNG','DashToggleR','setGuard','gAIaH','goldWindowRect','titles2','drawGameSubtitle','makeDeepCopy','F15','helpAreaTopSideButtonLayout','TAwNT','ACCEPT','cos','_stored_hpGaugeColor1','EvecZ','currentValue','retrieveFauxAnimation','_stored_mpCostColor','gtgae','concat','Sprite_Button_initialize','HASH','Sprite_Picture_updateOrigin','xparamFlat1','keypress','STR','targetSpritePosition','%1/','TextStr','setupNewGame','gIgfK','Game_Interpreter_command122','buttonAssistKey3','zlKdh','HurUR','_slotWindow','tNhCF','Game_Picture_calcEasing','mpGaugeColor1','isKeyItem','cursorLeft','ONE','idFzc','setLastPluginCommandInterpreter','displayX','ExtractStrFromTroop','JUQfj','makeCoreEngineCommandList','_shouldPreventDefault','OOTqr','XParamVocab7','Scene_Map_initialize','version','ZERO','sceneTerminationClearEffects','command357','HtRIo','mpColor','scOaJ','sin','ColorMPCost','ExportAllMapText','blt','AiJew','image-rendering','_CoreEngineSettings','centerSprite','kCQUL','initialLevel','isHandled','SLEEP','isDying','fadeSpeed','F14','onload','onButtonImageLoad','XibLP','sgiiq','useDigitGrouping','_viewportSize','addChildToBack','switchModes','commandWindowRows','qnJGY','context','level','BottomHelp','updatePosition','_forcedBattleSys','ItemBackColor2','updateOpen','isMapScrollLinked','xdg-open','showFauxAnimations','getGamepads','Map%1','padding','BACKSPACE','playCursorSound','heBcg','deselect','OUTEXPO','Scene_MenuBase_mainAreaHeight','xihwq','WIN_OEM_PA1','paramMax','DigitGroupingExText','padZero','VOLUME_UP','buyWindowRect','faces','vAfUl','_stored_tpGaugeColor2','isInstanceOfSceneMap','ActorHPColor','_mp','Window_Base_createTextState','XParamVocab2','isFullDocumentTitle','toUpperCase','qQoVj','ARRAYNUM','windowPadding','%1\x0a','Scene_Shop_create','showDevTools','processAlwaysEscape','Flat','buttonAssistKey1','drawIconBySize','Swnot','WARNING:\x20%1\x20has\x20already\x20been\x20declared\x0aand\x20cannot\x20be\x20used\x20as\x20a\x20Quick\x20JS\x20Function','helpAreaHeight','mainAreaBottom','allowShiftScrolling','contentsOpacity','numActions','drawActorClass','KeyTAB','〘Scrolling\x20Text〙\x0a','buttonAssistKey4','normalColor','MIN_SAFE_INTEGER','cGZef','_backgroundSprite','isSceneBattle','INSINE','nwJJw','repositionEnemiesByResolution','CrisisRate','scaleSprite','Game_Picture_x','equips','ExportCurTroopText','Vpqfv','oOtjR','removeFauxAnimation','reOCc','playOk','split','BbqXg','PmIkK','setSideView','defineProperty','outlineColorGauge','evaluate','HvEQl','process_VisuMZ_CoreEngine_Settings','openingSpeed','BannedWords','Scene_Boot_onDatabaseLoaded','Enemy','DECIMAL','getLastPluginCommandInterpreter','ShowJS','_dummyWindow','showPicture','setEnemyAction','loadTitle2','numberShowButton','Window_ShopSell_isEnabled','VisuMZ_2_BattleSystemPTB','drawActorExpGauge','drawFace','pqUmz','innerHeight','INOUTEXPO','EscapeAlways','makeDocumentTitle','SParamVocab4','ParseItemNotetags','VisuMZ_2_BattleSystemBTB','XParameterFormula','MODECHANGE','isCancelled','repositionCancelButtonSideButtonLayout','rgba(0,\x200,\x200,\x200.7)','onDatabaseLoaded','_stored_maxLvGaugeColor1','startAnimation','Window_Selectable_processTouch','StatusRect','getInputMultiButtonStrings','img/%1/','text%1','currentClass','ColorNormal','_colorCache','KeySHIFT','paramWidth','getBackgroundOpacity','horzJS','AllMaps','zAgGH','Abbreviation','Game_Interpreter_PluginCommand','initialBattleSystem','RIGHT','catchNormalError','child_process','Game_Screen_initialize','value','CAPSLOCK','valueOutlineColor','CommandList','NewGameBoot','filters','vMxng','mainAreaHeight','TGR','paramName','_fauxAnimationQueue','Bitmap_drawText','dRRFa','ScreenResolution','gPVDf','paramFlat','buttonAssistSwitch','skillTypeWindowRect','_stored_mpGaugeColor1','StartID','_animationQueue','ActorRect','wzzyU','select','VisuMZ_2_BattleSystemETB','targetX','titleCommandWindow','subjectHitRate','ItemStyle','_stored_expGaugeColor1','DIVIDE','useDigitGroupingEx','paramY','processKeyboardHandling','tsimD','setCoreEngineUpdateWindowBg','AccuracyBoost','Spriteset_Base_updatePosition','FVHqQ','ALWAYS','ColorCTGauge1','_cancelButton','processKeyboardDigitChange','actorWindowRect','SParamVocab6','isBottomHelpMode','PictureEasingType','Sprite_Animation_processSoundTimings','PictureID','playTestCtrlT','VOLUME_DOWN','isMenuButtonAssistEnabled','parse','RepositionEnemies130','_stored_normalColor','drawCharacter','_isPlaytest','DigitGroupingStandardText','DefaultStyle','erasePicture','ALT','EditBgType','_stored_maxLvGaugeColor2','Scene_Boot_startNormalGame','wxJUq','format','map','_commonEventLayers','%1〘End\x20Choice\x20Selection〙%1','bgm','parameters','BgFilename1','status','TimeProgress','LneiX','setActionState','DamageColor','setSkill','BasicParameterFormula','【%1】\x0a','MEV','setupCoreEasing','([\x5c+\x5c-]\x5cd+\x5c.?\x5cd+)>','#%1','system','_closing','loadGameImagesCoreEngine','paramPlusJS','DwzFN','WIN_OEM_FJ_MASSHOU','ExportStrFromAllTroops','initButtonHidden','isEnabled','_digitGrouping','isGamepadButtonPressed','DefaultMode','FyPcU','sVCEZ','ATTN','toLocaleString','Game_Interpreter_command105','events','origin','Game_Actor_paramBase','Fneeb','animations','isOpenAndActive','pQCbS','ParseClassNotetags','AYyxx','updateKeyText','popScene','〘Common\x20Event\x20%1:\x20%2〙\x20End','GoldChange','suYtY','\x5c}❪SHIFT❫\x5c{','exec','sv_actors','buttonAssistText4','requestMotion','ONE_MINUS_SRC_ALPHA','27273wGAyPV','Scene_Map_updateMainMultiply','drawGameTitle','translucentOpacity','ExportString','performMiss','EquipMenu','AnFwO','bgsVolume','UaEKp','XeqQY','sparamRate2','atbActive','AnimationMirrorOffset','Tilemap_addShadow','BgType','_inputWindow','isItem','%1〘Choice\x20%2〙\x20%3%1','_context','jTuql','ParseWeaponNotetags','Map%1.json','DrawItemBackgroundJS','DATABASE','repeat','lvFIq','DgACM','kSUJs','batch','performEscape','ISgCz','alwaysDash','_setupEventHandlers','updateOrigin','dCyGg','getCustomBackgroundSettings','setupValueFont','loadWindowskin','CommandRect','Padding','oXBeb','start','scale','includes','ParamName','XParamVocab5','_mapNameWindow','Chance','SlotBgType','ParseAllNotetags','changeClass','Location','faceHeight','Window_Gold_refresh','xparamFlat2','clearForcedGameTroopSettingsCoreEngine','advanced','parallaxes','create','DigitGroupingDamageSprites','GameEnd','isSideView','OUTCUBIC','powerDownColor','mainAreaHeightSideButtonLayout','gainGold','Scene_Battle_createCancelButton','_commandWindow','_internalTextures','LQWUg','_stored_tpGaugeColor1','createMenuButton','_offsetX','processTimingData','textWidth','yPrgu','buttonAssistWindowRect','send','statusWindowRect','escape','WIN_OEM_FJ_ROYA','PHA','setHandler','Spriteset_Base_initialize','createTextState','LXinR','createBuffer','bnaSn','end','Scene_MenuBase_createCancelButton','processTouchModernControls','createFauxAnimationQueue','_fauxAnimationSprites','NoTileShadows','QoL','getLevel','<JS\x20%1\x20%2:[\x20](.*)>','itemEva','djFdA','ColorMaxLvGauge1','ColorManager_loadWindowskin','_destroyInternalTextures','endAnimation','ActorBgType','Game_Picture_y','SwitchRandomizeOne','Window_NameInput_cursorPagedown','itemPadding','pEOmV','XugPU','Window_Selectable_cursorUp','enableDigitGrouping','qYHTl','kovsO','characters','SwitchToggleOne','ctGaugeColor1','_listWindow'];const _0x551b1e=_0x586d;(function(_0x65bfca,_0x1288e9){const _0x84b754=_0x586d;while(!![]){try{const _0x334ec1=parseInt(_0x84b754(0x8f5))*-parseInt(_0x84b754(0x312))+parseInt(_0x84b754(0x552))*parseInt(_0x84b754(0x2d9))+parseInt(_0x84b754(0x3e9))*parseInt(_0x84b754(0x23f))+-parseInt(_0x84b754(0x282))*-parseInt(_0x84b754(0x5e6))+-parseInt(_0x84b754(0x803))*-parseInt(_0x84b754(0x641))+parseInt(_0x84b754(0x91e))+parseInt(_0x84b754(0x611))*-parseInt(_0x84b754(0x38e));if(_0x334ec1===_0x1288e9)break;else _0x65bfca['push'](_0x65bfca['shift']());}catch(_0x88ee45){_0x65bfca['push'](_0x65bfca['shift']());}}}(_0x92b6,0xd0f0e));var label=_0x551b1e(0x2d6),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x551b1e(0x2e0)](function(_0x19e2ba){const _0x3d0f38=_0x551b1e;return _0x19e2ba[_0x3d0f38(0x7d2)]&&_0x19e2ba['description'][_0x3d0f38(0x82f)]('['+label+']');})[0x0];VisuMZ[label][_0x551b1e(0x47b)]=VisuMZ[label]['Settings']||{},VisuMZ['ConvertParams']=function(_0x4609fa,_0x39b4f4){const _0x1113a4=_0x551b1e;for(const _0x40c34d in _0x39b4f4){if(_0x40c34d['match'](/(.*):(.*)/i)){const _0x14343a=String(RegExp['$1']),_0x1191b2=String(RegExp['$2'])[_0x1113a4(0x724)]()[_0x1113a4(0x49e)]();let _0x5cb4be,_0x185b4f,_0x3bc9fb;switch(_0x1191b2){case'NUM':_0x5cb4be=_0x39b4f4[_0x40c34d]!==''?Number(_0x39b4f4[_0x40c34d]):0x0;break;case _0x1113a4(0x726):_0x185b4f=_0x39b4f4[_0x40c34d]!==''?JSON['parse'](_0x39b4f4[_0x40c34d]):[],_0x5cb4be=_0x185b4f[_0x1113a4(0x7cc)](_0x1ea02b=>Number(_0x1ea02b));break;case _0x1113a4(0x2a6):_0x5cb4be=_0x39b4f4[_0x40c34d]!==''?eval(_0x39b4f4[_0x40c34d]):null;break;case'ARRAYEVAL':_0x185b4f=_0x39b4f4[_0x40c34d]!==''?JSON[_0x1113a4(0x7be)](_0x39b4f4[_0x40c34d]):[],_0x5cb4be=_0x185b4f['map'](_0x2c09cb=>eval(_0x2c09cb));break;case _0x1113a4(0x64b):_0x5cb4be=_0x39b4f4[_0x40c34d]!==''?JSON[_0x1113a4(0x7be)](_0x39b4f4[_0x40c34d]):'';break;case _0x1113a4(0x646):_0x185b4f=_0x39b4f4[_0x40c34d]!==''?JSON[_0x1113a4(0x7be)](_0x39b4f4[_0x40c34d]):[],_0x5cb4be=_0x185b4f['map'](_0x4d3e63=>JSON[_0x1113a4(0x7be)](_0x4d3e63));break;case _0x1113a4(0x478):_0x5cb4be=_0x39b4f4[_0x40c34d]!==''?new Function(JSON[_0x1113a4(0x7be)](_0x39b4f4[_0x40c34d])):new Function(_0x1113a4(0x300));break;case _0x1113a4(0x487):_0x185b4f=_0x39b4f4[_0x40c34d]!==''?JSON[_0x1113a4(0x7be)](_0x39b4f4[_0x40c34d]):[],_0x5cb4be=_0x185b4f['map'](_0x541f0=>new Function(JSON['parse'](_0x541f0)));break;case _0x1113a4(0x6c6):_0x5cb4be=_0x39b4f4[_0x40c34d]!==''?String(_0x39b4f4[_0x40c34d]):'';break;case _0x1113a4(0x1a7):_0x185b4f=_0x39b4f4[_0x40c34d]!==''?JSON[_0x1113a4(0x7be)](_0x39b4f4[_0x40c34d]):[],_0x5cb4be=_0x185b4f[_0x1113a4(0x7cc)](_0x597cf9=>String(_0x597cf9));break;case'STRUCT':_0x3bc9fb=_0x39b4f4[_0x40c34d]!==''?JSON[_0x1113a4(0x7be)](_0x39b4f4[_0x40c34d]):{},_0x4609fa[_0x14343a]={},VisuMZ['ConvertParams'](_0x4609fa[_0x14343a],_0x3bc9fb);continue;case _0x1113a4(0x4d1):_0x185b4f=_0x39b4f4[_0x40c34d]!==''?JSON[_0x1113a4(0x7be)](_0x39b4f4[_0x40c34d]):[],_0x5cb4be=_0x185b4f['map'](_0x5d31b3=>VisuMZ[_0x1113a4(0x688)]({},JSON[_0x1113a4(0x7be)](_0x5d31b3)));break;default:continue;}_0x4609fa[_0x14343a]=_0x5cb4be;}}return _0x4609fa;},(_0x8590be=>{const _0x4f2d8c=_0x551b1e,_0x50f781=_0x8590be[_0x4f2d8c(0x8aa)];for(const _0x52011f of dependencies){if('cZUxr'===_0x4f2d8c(0x7d4))this[_0x4f2d8c(0x6fe)](_0x4f2d8c(0x4c3));else{if(!Imported[_0x52011f]){if(_0x4f2d8c(0x4e8)!==_0x4f2d8c(0x4e8))this[_0x4f2d8c(0x70d)]=_0x52c5d7[_0x4f2d8c(0x607)][_0x4f2d8c(0x1db)]()!=='button'?0x0:0x8;else{alert(_0x4f2d8c(0x313)[_0x4f2d8c(0x7cb)](_0x50f781,_0x52011f)),SceneManager[_0x4f2d8c(0x332)]();break;}}}}const _0x7ffc4c=_0x8590be[_0x4f2d8c(0x1b4)];if(_0x7ffc4c[_0x4f2d8c(0x5b5)](/\[Version[ ](.*?)\]/i)){if(_0x4f2d8c(0x5ad)!=='weHpV'){const _0x5cfba6=Number(RegExp['$1']);_0x5cfba6!==VisuMZ[label][_0x4f2d8c(0x6e1)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x4f2d8c(0x7cb)](_0x50f781,_0x5cfba6)),SceneManager[_0x4f2d8c(0x332)]());}else _0x5b3104[_0x4f2d8c(0x74f)](!![]);}if(_0x7ffc4c[_0x4f2d8c(0x5b5)](/\[Tier[ ](\d+)\]/i)){const _0x20221f=Number(RegExp['$1']);_0x20221f<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'['format'](_0x50f781,_0x20221f,tier)),SceneManager[_0x4f2d8c(0x332)]()):tier=Math[_0x4f2d8c(0x46a)](_0x20221f,tier);}VisuMZ[_0x4f2d8c(0x688)](VisuMZ[label][_0x4f2d8c(0x47b)],_0x8590be['parameters']);})(pluginData),PluginManager['registerCommand'](pluginData[_0x551b1e(0x8aa)],_0x551b1e(0x6ea),_0x33e09f=>{const _0x4c835a=_0x551b1e;if(!$gameTemp[_0x4c835a(0x376)]())return;if(!Utils['isNwjs']())return;SceneManager[_0x4c835a(0x607)][_0x4c835a(0x5f2)]=![],VisuMZ[_0x4c835a(0x2d6)]['ExportStrFromAllMaps']();}),PluginManager[_0x551b1e(0x8ee)](pluginData[_0x551b1e(0x8aa)],_0x551b1e(0x884),_0x40db98=>{const _0x2c1028=_0x551b1e;if(!$gameTemp[_0x2c1028(0x376)]())return;if(!Utils[_0x2c1028(0x529)]())return;SceneManager[_0x2c1028(0x607)]['_active']=![],VisuMZ[_0x2c1028(0x2d6)][_0x2c1028(0x7e4)]();}),PluginManager[_0x551b1e(0x8ee)](pluginData[_0x551b1e(0x8aa)],_0x551b1e(0x35a),_0x1d3d86=>{const _0x200647=_0x551b1e;if(!$gameTemp[_0x200647(0x376)]())return;if(!Utils['isNwjs']())return;if(!$gameMap)return;if($gameMap['mapId']()<=0x0)return;VisuMZ['ConvertParams'](_0x1d3d86,_0x1d3d86);const _0x5a99fb='Map%1'[_0x200647(0x7cb)]($gameMap[_0x200647(0x597)]()[_0x200647(0x718)](0x3)),_0x36fdac=VisuMZ[_0x200647(0x2d6)][_0x200647(0x662)]($gameMap[_0x200647(0x597)]());VisuMZ[_0x200647(0x2d6)][_0x200647(0x807)](_0x36fdac,_0x5a99fb,!![]);}),PluginManager[_0x551b1e(0x8ee)](pluginData[_0x551b1e(0x8aa)],_0x551b1e(0x746),_0x1d11e4=>{const _0x406797=_0x551b1e;if(!$gameTemp[_0x406797(0x376)]())return;if(!Utils[_0x406797(0x529)]())return;if(!$gameParty[_0x406797(0x8d0)]())return;VisuMZ[_0x406797(0x688)](_0x1d11e4,_0x1d11e4);const _0xdffe55=_0x406797(0x911)[_0x406797(0x7cb)]($gameTroop[_0x406797(0x8ea)][_0x406797(0x718)](0x4)),_0x3c5836=VisuMZ[_0x406797(0x2d6)]['ExtractStrFromTroop']($gameTroop[_0x406797(0x8ea)]);VisuMZ[_0x406797(0x2d6)]['ExportString'](_0x3c5836,_0xdffe55,!![]);}),VisuMZ['CoreEngine']['ExportString']=function(_0x1a34cb,_0x39ca5a,_0x2de722){const _0x3d3383=_0x551b1e,_0x43438a=require('fs');let _0x283ce4='Exported_Script_%1.txt'[_0x3d3383(0x7cb)](_0x39ca5a||'0');_0x43438a['writeFile'](_0x283ce4,_0x1a34cb,_0x33d149=>{const _0x3fc722=_0x3d3383;if(_0x33d149)throw err;else _0x2de722&&alert(_0x3fc722(0x90d)[_0x3fc722(0x7cb)](_0x283ce4));});},VisuMZ[_0x551b1e(0x2d6)]['ExportStrFromAllMaps']=function(){const _0x447aca=_0x551b1e,_0x2d2024=[];for(const _0x4fc65c of $dataMapInfos){if(!_0x4fc65c)continue;_0x2d2024[_0x447aca(0x41b)](_0x4fc65c['id']);}const _0x52a9bc=_0x2d2024[_0x447aca(0x55a)]*0x64+Math[_0x447aca(0x57d)](0x64);alert(_0x447aca(0x2dc)['format'](_0x52a9bc)),this[_0x447aca(0x67f)]=[],this[_0x447aca(0x4d2)]=$dataMap;for(const _0x526fe1 of _0x2d2024){'cXHjr'===_0x447aca(0x54f)?VisuMZ[_0x447aca(0x2d6)][_0x447aca(0x921)](_0x526fe1):this[_0x447aca(0x68e)]-=_0x7e85e5[_0x447aca(0x4ad)]((_0x2d8bb5[_0x447aca(0x652)]-_0x434c99[_0x447aca(0x5f5)])/0x2);}setTimeout(VisuMZ[_0x447aca(0x2d6)][_0x447aca(0x541)][_0x447aca(0x4aa)](this),_0x52a9bc);},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x921)]=function(_0x482250){const _0x5133ca=_0x551b1e,_0x6bccea=_0x5133ca(0x819)[_0x5133ca(0x7cb)](_0x482250[_0x5133ca(0x718)](0x3)),_0x3cfd46=new XMLHttpRequest(),_0x375e65=_0x5133ca(0x634)+_0x6bccea;_0x3cfd46[_0x5133ca(0x1ba)](_0x5133ca(0x4f6),_0x375e65),_0x3cfd46[_0x5133ca(0x8a2)](_0x5133ca(0x5b3)),_0x3cfd46[_0x5133ca(0x6f7)]=()=>this[_0x5133ca(0x604)](_0x3cfd46,_0x482250,_0x6bccea,_0x375e65),_0x3cfd46[_0x5133ca(0x62d)]=()=>DataManager[_0x5133ca(0x200)](_0x5133ca(0x221),_0x6bccea,_0x375e65),_0x3cfd46[_0x5133ca(0x851)]();},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x604)]=function(_0x3e59bc,_0x458634,_0x348f3d,_0x4d0d0f){const _0x45e1c7=_0x551b1e;$dataMap=JSON[_0x45e1c7(0x7be)](_0x3e59bc[_0x45e1c7(0x42f)]),DataManager[_0x45e1c7(0x2a3)]($dataMap),this[_0x45e1c7(0x67f)][_0x458634]=VisuMZ[_0x45e1c7(0x2d6)]['ExtractStrFromMap'](_0x458634),$dataMap=this[_0x45e1c7(0x4d2)];},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x541)]=function(){const _0x5d2edd=_0x551b1e,_0xe5feb2=_0x5d2edd(0x781);this['_storedMapText'][_0x5d2edd(0x223)](undefined)[_0x5d2edd(0x223)]('')[_0x5d2edd(0x223)](null);const _0x3554cc=this[_0x5d2edd(0x67f)][_0x5d2edd(0x1e2)](_0x5d2edd(0x1d8))[_0x5d2edd(0x49e)]();VisuMZ[_0x5d2edd(0x2d6)]['ExportString'](_0x3554cc,_0xe5feb2,!![]),SceneManager[_0x5d2edd(0x607)][_0x5d2edd(0x5f2)]=!![];},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x662)]=function(_0x5c7f1d){const _0x206ec4=_0x551b1e;if(!$dataMap)return'';let _0xf4a9a0='█'[_0x206ec4(0x81c)](0x46)+'\x0a\x0a',_0x26b200='═'[_0x206ec4(0x81c)](0x46)+'\x0a\x0a',_0x21726e='';this[_0x206ec4(0x7cd)]=0x0;for(const _0x4b703c of $dataMap[_0x206ec4(0x7ef)]){if(!_0x4b703c)continue;let _0x1ecd61=_0x4b703c['id'],_0x3f8c62=_0x4b703c[_0x206ec4(0x8aa)],_0x5c8581=_0x4b703c[_0x206ec4(0x23c)];for(const _0x2fc91b of _0x5c8581){if(_0x206ec4(0x91b)===_0x206ec4(0x6cb))this[_0x206ec4(0x6a9)]=_0x5297cd(_0x44afca(this[_0x206ec4(0x6a9)])['substring'](0x1)),this[_0x206ec4(0x6a9)]=_0x1f4359[_0x206ec4(0x46a)](0x0,this['_number']),_0x261c22['clear'](),this['refresh'](),_0x331b58[_0x206ec4(0x430)](),this[_0x206ec4(0x7a1)](this[_0x206ec4(0x43c)]-0x1);else{const _0xa9d59d=_0x5c8581['indexOf'](_0x2fc91b)+0x1;let _0x1cc120=_0x26b200+_0x206ec4(0x3e5),_0x16e22f=VisuMZ[_0x206ec4(0x2d6)]['ExtractStrFromList'](_0x2fc91b[_0x206ec4(0x60f)]);if(_0x16e22f[_0x206ec4(0x55a)]>0x0){if('JUQfj'===_0x206ec4(0x6db)){if(_0x21726e[_0x206ec4(0x55a)]>0x0){if(_0x206ec4(0x849)===_0x206ec4(0x765)){const _0x55d48a=_0x1c8506[_0x206ec4(0x2d6)][_0x206ec4(0x34b)][_0x308465],_0x5c935d=this[_0x55d48a];return _0x2e0481[_0x206ec4(0x2d6)][_0x206ec4(0x4b8)][_0x33c4d3]===_0x206ec4(0x336)?_0x5c935d:_0x43a630?_0x34610b(_0x150f31[_0x206ec4(0x4ed)](_0x5c935d*0x64))+'%':_0x5c935d;}else _0x21726e+=_0x26b200+_0x206ec4(0x1d8);}else{if('EsrXJ'!==_0x206ec4(0x4c5)){const _0x1a2f8f=$dataMapInfos[_0x5c7f1d][_0x206ec4(0x8aa)];_0x21726e+=_0xf4a9a0+_0x206ec4(0x5b7)['format'](_0x5c7f1d,_0x1a2f8f||_0x206ec4(0x699))+_0xf4a9a0;}else{if(!_0xbfb7a7[_0x206ec4(0x376)]())return;if(!_0x3ed8f3['isNwjs']())return;if(!_0x1564bf)return;if(_0x496f70['mapId']()<=0x0)return;_0x2d8625['ConvertParams'](_0xd963f4,_0x369c08);const _0x1afed3=_0x206ec4(0x70c)[_0x206ec4(0x7cb)](_0x38e23b[_0x206ec4(0x597)]()[_0x206ec4(0x718)](0x3)),_0x1be315=_0x2ea01d['CoreEngine']['ExtractStrFromMap'](_0x2ca2d3[_0x206ec4(0x597)]());_0x23ee45[_0x206ec4(0x2d6)]['ExportString'](_0x1be315,_0x1afed3,!![]);}}_0x21726e+=_0x1cc120[_0x206ec4(0x7cb)](_0x1ecd61,_0x3f8c62,_0xa9d59d,_0x16e22f);}else this[_0x206ec4(0x635)]['setBackgroundType'](_0x659e1[_0x206ec4(0x383)][_0x206ec4(0x65c)]);}}}}return _0x21726e[_0x206ec4(0x55a)]>0x0&&(_0x21726e+=_0x26b200),_0x21726e;},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x7e4)]=function(){const _0x123661=_0x551b1e,_0x51f4fc=$dataTroops[_0x123661(0x55a)]*0xa+Math[_0x123661(0x57d)](0xa);alert(_0x123661(0x37f)[_0x123661(0x7cb)](_0x51f4fc));const _0x488d18=[];for(const _0x4c287a of $dataTroops){if('ABpNa'==='ABpNa'){if(!_0x4c287a)continue;const _0x30bff6=_0x4c287a['id'];_0x488d18[_0x30bff6]=VisuMZ[_0x123661(0x2d6)]['ExtractStrFromTroop'](_0x30bff6);}else this[_0x123661(0x5ac)]['setBackgroundType'](_0x4ce975['layoutSettings'][_0x123661(0x1ae)]);}setTimeout(VisuMZ[_0x123661(0x2d6)][_0x123661(0x5df)][_0x123661(0x4aa)](this,_0x488d18),_0x51f4fc);},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x6da)]=function(_0x19aabe){const _0x567bc7=_0x551b1e;if(!$dataTroops[_0x19aabe])return'';let _0x3021e3='█'[_0x567bc7(0x81c)](0x46)+'\x0a\x0a',_0x23d527='═'[_0x567bc7(0x81c)](0x46)+'\x0a\x0a',_0x43b0d4='';this[_0x567bc7(0x7cd)]=0x0;const _0x8ec0ca=$dataTroops[_0x19aabe];let _0x5137fd=_0x8ec0ca[_0x567bc7(0x23c)];for(const _0x598167 of _0x5137fd){if(_0x567bc7(0x7eb)!==_0x567bc7(0x493)){const _0x1fa934=_0x5137fd[_0x567bc7(0x630)](_0x598167)+0x1;let _0x204acf=_0x23d527+'《《《\x20Page\x20%1\x20》》》\x0a%2\x0a',_0x47d5ff=VisuMZ['CoreEngine']['ExtractStrFromList'](_0x598167['list']);if(_0x47d5ff[_0x567bc7(0x55a)]>0x0){if(_0x43b0d4['length']>0x0)_0x43b0d4+=_0x23d527+_0x567bc7(0x1d8);else{if(_0x567bc7(0x8ca)!==_0x567bc7(0x8ca)){var _0xd6ee64=_0x1aa248(_0x5dc7b1['$1']);try{_0x47f29d+=_0x45d114(_0xd6ee64);}catch(_0x1d0255){if(_0x2d9594[_0x567bc7(0x376)]())_0x32be01[_0x567bc7(0x538)](_0x1d0255);}}else _0x43b0d4+=_0x3021e3+_0x567bc7(0x638)[_0x567bc7(0x7cb)](_0x19aabe,_0x8ec0ca[_0x567bc7(0x8aa)]||_0x567bc7(0x699))+_0x3021e3;}_0x43b0d4+=_0x204acf['format'](_0x1fa934,_0x47d5ff);}}else{const _0x417414=_0x2ab68a[_0x567bc7(0x1f1)]=='darwin'?_0x567bc7(0x1ba):_0x34db24[_0x567bc7(0x1f1)]==_0x567bc7(0x88e)?_0x567bc7(0x82d):_0x567bc7(0x709);_0x385106(_0x567bc7(0x788))['exec'](_0x417414+'\x20'+_0x18db06);}}if(_0x43b0d4['length']>0x0){if(_0x567bc7(0x410)!=='RpYEc')return _0xa0b521['layoutSettings']['StatusRect'][_0x567bc7(0x511)](this);else _0x43b0d4+=_0x23d527;}return _0x43b0d4;},VisuMZ['CoreEngine'][_0x551b1e(0x5df)]=function(_0x1235e9){const _0xd91aec=_0x551b1e,_0x45591e=_0xd91aec(0x5fd);_0x1235e9[_0xd91aec(0x223)](undefined)[_0xd91aec(0x223)]('')['remove'](null);const _0x1c458e=_0x1235e9[_0xd91aec(0x1e2)](_0xd91aec(0x1d8))['trim']();VisuMZ[_0xd91aec(0x2d6)][_0xd91aec(0x807)](_0x1c458e,_0x45591e,!![]),SceneManager['_scene']['_active']=!![];},VisuMZ[_0x551b1e(0x2d6)]['ExtractStrFromList']=function(_0x12cd2a){const _0x434ce8=_0x551b1e;let _0x5383e4='\x0a'+'─'[_0x434ce8(0x81c)](0x46)+'\x0a',_0x395146='\x0a'+'┄'[_0x434ce8(0x81c)](0x46)+'\x0a',_0x40e006='';for(const _0x3e4fc6 of _0x12cd2a){if(_0x434ce8(0x725)!==_0x434ce8(0x725))return _0x4313fc[_0x434ce8(0x2d6)][_0x434ce8(0x47b)][_0x434ce8(0x574)][_0x434ce8(0x2ce)]['call'](this,_0x2f7d16);else{if(!_0x3e4fc6)continue;if(_0x3e4fc6[_0x434ce8(0x3ff)]===0x65){if(_0x434ce8(0x2f5)===_0x434ce8(0x2f5)){_0x40e006+=_0x5383e4+'\x0a',_0x40e006+=_0x434ce8(0x25e);if(_0x3e4fc6[_0x434ce8(0x7d0)][0x4]!==''&&_0x3e4fc6[_0x434ce8(0x7d0)][0x4]!==undefined){if(_0x434ce8(0x3fd)!==_0x434ce8(0x3fd)){const _0x41e09e=this[_0x434ce8(0x6fc)],_0x559344=this['_viewportSize'],_0x14b4b5=this[_0x434ce8(0x4a5)][_0x434ce8(0x19b)]*(this[_0x434ce8(0x519)]?-0x1:0x1)-_0x41e09e/0x2,_0x2c787b=this['_animation']['offsetY']-_0x559344/0x2,_0x2b4a02=this[_0x434ce8(0x49a)](_0x33bd28);_0x3f3d43['gl'][_0x434ce8(0x1ca)](_0x14b4b5+_0x2b4a02['x'],_0x2c787b+_0x2b4a02['y'],_0x41e09e,_0x559344);}else _0x40e006+=_0x434ce8(0x7d9)[_0x434ce8(0x7cb)](_0x3e4fc6[_0x434ce8(0x7d0)][0x4]);}}else return _0x37882a[_0x434ce8(0x607)][_0x434ce8(0x213)]();}else{if(_0x3e4fc6[_0x434ce8(0x3ff)]===0x191){if('faGnP'!==_0x434ce8(0x8da)){const _0x2f4051=this[_0x434ce8(0x86f)](),_0x185b10=this[_0x434ce8(0x7aa)](_0x2a1a96);this[_0x434ce8(0x3e4)](_0x2f4051,_0x185b10,_0x344c7b),_0x1d711f++;}else _0x40e006+=_0x434ce8(0x728)['format'](_0x3e4fc6['parameters'][0x0]);}else{if(_0x3e4fc6[_0x434ce8(0x3ff)]===0x192)_0x434ce8(0x57f)===_0x434ce8(0x57f)?(_0x40e006+=_0x5383e4,_0x40e006+=_0x434ce8(0x815)[_0x434ce8(0x7cb)](_0x395146,_0x3e4fc6[_0x434ce8(0x7d0)][0x0]+0x1,_0x3e4fc6[_0x434ce8(0x7d0)][0x1])):(_0x4c4f1b[_0x434ce8(0x8fc)]=0x0,_0x34055e['bgsVolume']=0x0,_0x5eb0e6['meVolume']=0x0,_0x24e9c0['seVolume']=0x0);else{if(_0x3e4fc6['code']===0x193)_0x40e006+=_0x5383e4,_0x40e006+=_0x434ce8(0x405)[_0x434ce8(0x7cb)](_0x395146);else{if(_0x3e4fc6[_0x434ce8(0x3ff)]===0x194)'SNZnl'!==_0x434ce8(0x1cb)?(_0x40e006+=_0x5383e4,_0x40e006+=_0x434ce8(0x7ce)['format'](_0x395146)):this[_0x434ce8(0x749)](_0xe19644);else{if(_0x3e4fc6[_0x434ce8(0x3ff)]===0x69){if(_0x434ce8(0x396)!=='ugJmO')return _0x4ce706[_0x434ce8(0x2d6)][_0x434ce8(0x47b)]['QoL'][_0x434ce8(0x3a6)];else _0x40e006+=_0x5383e4+'\x0a',_0x40e006+=_0x434ce8(0x738);}else{if(_0x3e4fc6[_0x434ce8(0x3ff)]===0x6c)_0x40e006+=_0x5383e4+'\x0a',_0x40e006+=_0x434ce8(0x58a)['format'](_0x3e4fc6['parameters'][0x0]);else{if(_0x3e4fc6[_0x434ce8(0x3ff)]===0x198){if('GqcfY'!==_0x434ce8(0x258)){if(_0x2e6c86&&_0x24fdf[_0x434ce8(0x209)])return!![];}else _0x40e006+=_0x434ce8(0x728)[_0x434ce8(0x7cb)](_0x3e4fc6['parameters'][0x0]);}else{if(_0x3e4fc6['code']===0x75){const _0x22832d=$dataCommonEvents[_0x3e4fc6['parameters'][0x0]];if(_0x22832d&&this[_0x434ce8(0x7cd)]<=0xa){this[_0x434ce8(0x7cd)]++;let _0x41e2fb=VisuMZ[_0x434ce8(0x2d6)][_0x434ce8(0x3ce)](_0x22832d['list']);if(_0x41e2fb['length']>0x0){if(_0x434ce8(0x7e2)==='CMTsC'){if(this['_data'][_0x434ce8(0x8f2)[_0x434ce8(0x7cb)](_0x1587e4)]!==_0x18c21f[_0x434ce8(0x65e)[_0x434ce8(0x7cb)](_0x1a6332)]())return this[_0x434ce8(0x429)]();if(this[_0x434ce8(0x4b0)]['text%1'[_0x434ce8(0x7cb)](_0x2ff648)]!==_0x47d80a[_0x434ce8(0x506)['format'](_0xcf9fa7)]())return this[_0x434ce8(0x429)]();}else _0x40e006+=_0x5383e4,_0x40e006+=_0x395146,_0x40e006+=_0x434ce8(0x543)['format'](_0x22832d['id'],_0x22832d['name']),_0x40e006+=_0x395146,_0x40e006+=_0x41e2fb,_0x40e006+=_0x395146,_0x40e006+=_0x434ce8(0x7fa)[_0x434ce8(0x7cb)](_0x22832d['id'],_0x22832d[_0x434ce8(0x8aa)]),_0x40e006+=_0x395146;}this['_commonEventLayers']--;}}}}}}}}}}}}return _0x40e006[_0x434ce8(0x55a)]>0x0&&(_0x40e006+=_0x5383e4),_0x40e006;},PluginManager[_0x551b1e(0x8ee)](pluginData[_0x551b1e(0x8aa)],_0x551b1e(0x6a4),_0x192788=>{const _0x470798=_0x551b1e;VisuMZ[_0x470798(0x688)](_0x192788,_0x192788);const _0x32ce08=_0x192788['URL'];VisuMZ['openURL'](_0x32ce08);}),PluginManager['registerCommand'](pluginData['name'],_0x551b1e(0x7fb),_0x3db83f=>{const _0x55f57d=_0x551b1e;VisuMZ[_0x55f57d(0x688)](_0x3db83f,_0x3db83f);const _0x2f193a=_0x3db83f[_0x55f57d(0x78a)]||0x0;$gameParty[_0x55f57d(0x845)](_0x2f193a);}),PluginManager[_0x551b1e(0x8ee)](pluginData['name'],_0x551b1e(0x7b8),_0xcd9333=>{const _0x1d517a=_0x551b1e;VisuMZ[_0x1d517a(0x688)](_0xcd9333,_0xcd9333);const _0x28de59=_0xcd9333['pictureId']||0x1,_0x1d891d=_0xcd9333[_0x1d517a(0x217)]||_0x1d517a(0x377),_0xb5c5d5=$gameScreen[_0x1d517a(0x2ed)](_0x28de59);_0xb5c5d5&&_0xb5c5d5['setEasingType'](_0x1d891d);}),PluginManager[_0x551b1e(0x8ee)](pluginData[_0x551b1e(0x8aa)],_0x551b1e(0x39a),_0x19cc5b=>{const _0x520ad1=_0x551b1e;for(let _0x17eb51=0x1;_0x17eb51<=0x64;_0x17eb51++){if('xcsRz'===_0x520ad1(0x1a2))$gameScreen[_0x520ad1(0x7c5)](_0x17eb51);else{if(_0x2709e9)_0x13099e[_0x520ad1(0x62a)](_0x4b865f);}}}),PluginManager[_0x551b1e(0x8ee)](pluginData[_0x551b1e(0x8aa)],_0x551b1e(0x28a),_0x343302=>{const _0x4a7fb1=_0x551b1e;VisuMZ[_0x4a7fb1(0x688)](_0x343302,_0x343302);const _0x22ebc1=Math[_0x4a7fb1(0x8d7)](_0x343302[_0x4a7fb1(0x79d)],_0x343302['EndingID']),_0xb1a5f4=Math[_0x4a7fb1(0x46a)](_0x343302[_0x4a7fb1(0x79d)],_0x343302[_0x4a7fb1(0x626)]);for(let _0x20c9df=_0x22ebc1;_0x20c9df<=_0xb1a5f4;_0x20c9df++){if(_0x4a7fb1(0x8f7)===_0x4a7fb1(0x1ee)){if(_0x3ae832[_0x4a7fb1(0x75b)][_0x4a7fb1(0x511)](this)){const _0x4b32c3=_0x42540d[_0x4a7fb1(0x5b6)];let _0x13ee81=_0x151530[_0x4a7fb1(0x6c9)];if(['','Untitled']['includes'](_0x13ee81))_0x13ee81=_0x4070e5[_0x4a7fb1(0x894)]['call'](this);const _0x34917b=_0x2bdb28[_0x4a7fb1(0x1f2)][_0x4a7fb1(0x511)](this),_0x1e9c73=_0x13d5d2[_0x4a7fb1(0x311)][_0x4a7fb1(0x511)](this);this[_0x4a7fb1(0x48b)](_0x13ee81,_0x4b32c3,_0x34917b,_0x1e9c73),this[_0x4a7fb1(0x856)](_0x4b32c3,_0x235c00['CallHandlerJS'][_0x4a7fb1(0x4aa)](this,_0x1e9c73));}}else $gameScreen['erasePicture'](_0x20c9df);}}),PluginManager[_0x551b1e(0x8ee)](pluginData[_0x551b1e(0x8aa)],_0x551b1e(0x8b2),_0x33c4b8=>{const _0x4c114a=_0x551b1e;VisuMZ[_0x4c114a(0x688)](_0x33c4b8,_0x33c4b8);const _0x21640d=Math[_0x4c114a(0x4ed)](_0x33c4b8[_0x4c114a(0x7ba)])[_0x4c114a(0x660)](0x1,0x64),_0x58624f=_0x33c4b8[_0x4c114a(0x47b)],_0x22d5f9=_0x58624f[_0x4c114a(0x424)][_0x4c114a(0x660)](0x0,0x1),_0x527e4d=Math[_0x4c114a(0x4ed)](_0x58624f[_0x4c114a(0x470)]||0x0),_0x2c7c71=Math['round'](_0x58624f['PositionY']||0x0),_0x2987b8=Math[_0x4c114a(0x4ed)](_0x58624f[_0x4c114a(0x3c8)]||0x0),_0x7a261b=Math[_0x4c114a(0x4ed)](_0x58624f[_0x4c114a(0x203)]||0x0),_0x4cd8af=Math[_0x4c114a(0x4ed)](_0x58624f[_0x4c114a(0x467)])['clamp'](0x0,0xff),_0x1b6f69=_0x58624f[_0x4c114a(0x1be)],_0x1baafc=_0x4c114a(0x26d),_0x3e2785=_0x33c4b8[_0x4c114a(0x498)]?'Smooth':'Pixelated',_0x584ca1=_0x1baafc[_0x4c114a(0x7cb)](_0x33c4b8[_0x4c114a(0x2f3)],_0x3e2785);$gameScreen[_0x4c114a(0x75d)](_0x21640d,_0x584ca1,_0x22d5f9,_0x527e4d,_0x2c7c71,_0x2987b8,_0x7a261b,_0x4cd8af,_0x1b6f69);}),PluginManager[_0x551b1e(0x8ee)](pluginData[_0x551b1e(0x8aa)],'ScreenShake',_0x20cd35=>{const _0x3d6a03=_0x551b1e;VisuMZ[_0x3d6a03(0x688)](_0x20cd35,_0x20cd35);const _0x27fddc=_0x20cd35[_0x3d6a03(0x5a5)]||_0x3d6a03(0x920),_0x30e976=_0x20cd35['Power'][_0x3d6a03(0x660)](0x1,0x9),_0x2539fb=_0x20cd35['Speed'][_0x3d6a03(0x660)](0x1,0x9),_0x38f285=_0x20cd35[_0x3d6a03(0x8a4)]||0x1,_0x2d939d=_0x20cd35[_0x3d6a03(0x242)];$gameScreen[_0x3d6a03(0x6a3)](_0x27fddc),$gameScreen[_0x3d6a03(0x2fe)](_0x30e976,_0x2539fb,_0x38f285);if(_0x2d939d){if(_0x3d6a03(0x289)===_0x3d6a03(0x3dc)){const _0x360810=_0x518011['getLastPluginCommandInterpreter']();if(_0x360810)_0x360810[_0x3d6a03(0x898)](_0x4b4f63);}else{const _0x5e72a0=$gameTemp['getLastPluginCommandInterpreter']();if(_0x5e72a0)_0x5e72a0[_0x3d6a03(0x898)](_0x38f285);}}}),PluginManager[_0x551b1e(0x8ee)](pluginData[_0x551b1e(0x8aa)],_0x551b1e(0x52e),_0x36d824=>{const _0x10e3ce=_0x551b1e;VisuMZ[_0x10e3ce(0x688)](_0x36d824,_0x36d824);const _0x202cbc=_0x36d824['option']||0x1;$gameSystem[_0x10e3ce(0x497)](_0x202cbc);}),PluginManager[_0x551b1e(0x8ee)](pluginData[_0x551b1e(0x8aa)],_0x551b1e(0x8cc),_0xc1547e=>{const _0x4cdb86=_0x551b1e;if($gameParty[_0x4cdb86(0x8d0)]())return;VisuMZ['ConvertParams'](_0xc1547e,_0xc1547e);const _0x1a5e31=_0xc1547e[_0x4cdb86(0x3f8)];if(_0x1a5e31['match'](/Front/i))$gameSystem['setSideView'](![]);else _0x1a5e31[_0x4cdb86(0x5b5)](/Side/i)?$gameSystem[_0x4cdb86(0x74f)](!![]):$gameSystem[_0x4cdb86(0x74f)](!$gameSystem[_0x4cdb86(0x841)]());}),PluginManager[_0x551b1e(0x8ee)](pluginData[_0x551b1e(0x8aa)],_0x551b1e(0x413),_0xb9bc15=>{const _0x4028c8=_0x551b1e;if($gameParty[_0x4028c8(0x8d0)]())return;VisuMZ[_0x4028c8(0x688)](_0xb9bc15,_0xb9bc15);const _0x414dfa=[_0x4028c8(0x7cf),'bgs','me','se'];for(const _0x27b92d of _0x414dfa){if(_0x4028c8(0x65d)!==_0x4028c8(0x386)){const _0x1af276=_0xb9bc15[_0x27b92d],_0x5b4f8c=_0x4028c8(0x6c8)['format'](_0x27b92d);for(const _0x39ecaf of _0x1af276){AudioManager[_0x4028c8(0x85a)](_0x5b4f8c,_0x39ecaf);}}else{const _0x5a7978=_0x538519['CoreEngine'][_0x4028c8(0x47b)][_0x4028c8(0x4c7)];for(const _0x567bcd of _0x5a7978){const _0x22c406=_0x567bcd[_0x4028c8(0x1d5)][_0x4028c8(0x1a5)](/[ ]/g,''),_0x337795=_0x567bcd[_0x4028c8(0x343)];_0x59bf41['CoreEngine'][_0x4028c8(0x4a2)](_0x22c406,_0x337795);}}}}),PluginManager['registerCommand'](pluginData[_0x551b1e(0x8aa)],_0x551b1e(0x5d1),_0x2f23e2=>{const _0x5dcdf6=_0x551b1e;if($gameParty[_0x5dcdf6(0x8d0)]())return;VisuMZ[_0x5dcdf6(0x688)](_0x2f23e2,_0x2f23e2);const _0x969f6e=[_0x5dcdf6(0x7f3),_0x5dcdf6(0x1b0),_0x5dcdf6(0x266),_0x5dcdf6(0x876),_0x5dcdf6(0x57b),'faces',_0x5dcdf6(0x83d),'pictures','sv_actors',_0x5dcdf6(0x360),_0x5dcdf6(0x7de),_0x5dcdf6(0x905),_0x5dcdf6(0x241),_0x5dcdf6(0x6b2)];for(const _0x5f93ef of _0x969f6e){const _0x2d0e82=_0x2f23e2[_0x5f93ef],_0x598c18=_0x5dcdf6(0x778)[_0x5dcdf6(0x7cb)](_0x5f93ef);for(const _0x3bc33c of _0x2d0e82){ImageManager['loadBitmap'](_0x598c18,_0x3bc33c);}}}),PluginManager[_0x551b1e(0x8ee)](pluginData[_0x551b1e(0x8aa)],_0x551b1e(0x86d),_0x185441=>{const _0x1ae117=_0x551b1e;if($gameParty[_0x1ae117(0x8d0)]())return;VisuMZ[_0x1ae117(0x688)](_0x185441,_0x185441);const _0xde82b2=_0x185441[_0x1ae117(0x1e5)],_0x103044=(_0x185441[_0x1ae117(0x833)]||0x0)/0x64;for(const _0xa81f70 of _0xde82b2){if('oXBeb'!==_0x1ae117(0x82c))return _0x29790a[_0x1ae117(0x59f)][_0x1ae117(0x511)](this);else{const _0x41fc44=Math['random']()<=_0x103044;$gameSwitches[_0x1ae117(0x5cd)](_0xa81f70,_0x41fc44);}}}),PluginManager[_0x551b1e(0x8ee)](pluginData['name'],'SwitchRandomizeRange',_0x451d99=>{const _0x2b7059=_0x551b1e;if($gameParty['inBattle']())return;VisuMZ['ConvertParams'](_0x451d99,_0x451d99);const _0x275b3f=Math[_0x2b7059(0x8d7)](_0x451d99['StartID'],_0x451d99[_0x2b7059(0x626)]),_0x2ded7e=Math[_0x2b7059(0x46a)](_0x451d99[_0x2b7059(0x79d)],_0x451d99[_0x2b7059(0x626)]),_0x505f9a=(_0x451d99[_0x2b7059(0x833)]||0x0)/0x64;for(let _0x4895d7=_0x275b3f;_0x4895d7<=_0x2ded7e;_0x4895d7++){if('TJtHa'!==_0x2b7059(0x24d)){const _0x5a4db2=Math['random']()<=_0x505f9a;$gameSwitches[_0x2b7059(0x5cd)](_0x4895d7,_0x5a4db2);}else this[_0x2b7059(0x496)]()?this[_0x2b7059(0x661)]():_0x1f7db4[_0x2b7059(0x2d6)][_0x2b7059(0x839)][_0x2b7059(0x511)](this);}}),PluginManager['registerCommand'](pluginData['name'],_0x551b1e(0x877),_0x5b8ac2=>{const _0x4b19fa=_0x551b1e;if($gameParty[_0x4b19fa(0x8d0)]())return;VisuMZ[_0x4b19fa(0x688)](_0x5b8ac2,_0x5b8ac2);const _0x3f0e68=_0x5b8ac2[_0x4b19fa(0x1e5)];for(const _0x49ca2b of _0x3f0e68){const _0x3d5656=$gameSwitches[_0x4b19fa(0x78a)](_0x49ca2b);$gameSwitches[_0x4b19fa(0x5cd)](_0x49ca2b,!_0x3d5656);}}),PluginManager[_0x551b1e(0x8ee)](pluginData[_0x551b1e(0x8aa)],_0x551b1e(0x291),_0x1f391b=>{const _0x5f0828=_0x551b1e;if($gameParty[_0x5f0828(0x8d0)]())return;VisuMZ[_0x5f0828(0x688)](_0x1f391b,_0x1f391b);const _0xc6f90=Math['min'](_0x1f391b['StartID'],_0x1f391b[_0x5f0828(0x626)]),_0x1d234d=Math[_0x5f0828(0x46a)](_0x1f391b[_0x5f0828(0x79d)],_0x1f391b[_0x5f0828(0x626)]);for(let _0x1619a1=_0xc6f90;_0x1619a1<=_0x1d234d;_0x1619a1++){if(_0x5f0828(0x33e)===_0x5f0828(0x33e)){const _0x4290f4=$gameSwitches[_0x5f0828(0x78a)](_0x1619a1);$gameSwitches['setValue'](_0x1619a1,!_0x4290f4);}else this['createFauxAnimationSprite']([_0x4f5df5],_0x3d6d56,_0x2c18d1,_0xc2c242,_0x4321b5),_0x52444c+=_0x21556d;}}),PluginManager['registerCommand'](pluginData[_0x551b1e(0x8aa)],_0x551b1e(0x6a7),_0x35068a=>{const _0x52ea63=_0x551b1e;if($gameParty['inBattle']())return;VisuMZ['ConvertParams'](_0x35068a,_0x35068a);const _0xb5c863=_0x35068a[_0x52ea63(0x3f8)]['toUpperCase']()[_0x52ea63(0x49e)](),_0x414718=VisuMZ[_0x52ea63(0x2d6)][_0x52ea63(0x657)](_0xb5c863);$gameSystem[_0x52ea63(0x26a)](_0x414718);}),VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x657)]=function(_0x54e0a7){const _0x86f0ca=_0x551b1e;_0x54e0a7=_0x54e0a7||_0x86f0ca(0x81b),_0x54e0a7=String(_0x54e0a7)[_0x86f0ca(0x724)]()[_0x86f0ca(0x49e)]();switch(_0x54e0a7){case _0x86f0ca(0x4d4):return 0x0;case _0x86f0ca(0x3f1):Imported[_0x86f0ca(0x6aa)]&&(ConfigManager[_0x86f0ca(0x80f)]=!![]);return 0x1;case _0x86f0ca(0x215):Imported[_0x86f0ca(0x6aa)]&&(ConfigManager[_0x86f0ca(0x80f)]=![]);return 0x2;case _0x86f0ca(0x8c1):if(Imported['VisuMZ_2_BattleSystemCTB'])return _0x86f0ca(0x8c1);break;case'STB':if(Imported[_0x86f0ca(0x3d0)])return _0x86f0ca(0x402)==='vufPf'?_0x22bc9b['buttonAssistSwitch']:_0x86f0ca(0x1fd);break;case'BTB':if(Imported[_0x86f0ca(0x76c)])return'nzLws'!==_0x86f0ca(0x6e7)?'BTB':_0x4822d8[_0x86f0ca(0x383)][_0x86f0ca(0x1ff)][_0x86f0ca(0x511)](this);break;case _0x86f0ca(0x4fd):if(Imported[_0x86f0ca(0x433)]){if('hnkTJ'==='hnkTJ')return'FTB';else{if(_0x19098b)_0x446625[_0x86f0ca(0x7f6)](_0xe5226);}}break;case _0x86f0ca(0x8dd):if(Imported[_0x86f0ca(0x5d3)])return'OTB';break;case _0x86f0ca(0x233):if(Imported[_0x86f0ca(0x7a2)]){if(_0x86f0ca(0x501)===_0x86f0ca(0x866))this[_0x86f0ca(0x7a1)](-0x1);else return'ETB';}break;case _0x86f0ca(0x636):if(Imported[_0x86f0ca(0x762)])return _0x86f0ca(0x636);break;}return $dataSystem[_0x86f0ca(0x2a0)];},PluginManager['registerCommand'](pluginData[_0x551b1e(0x8aa)],_0x551b1e(0x3d6),_0x4e90d4=>{const _0x5377d4=_0x551b1e;VisuMZ['ConvertParams'](_0x4e90d4,_0x4e90d4);const _0x1b2012=_0x4e90d4['option']||0x1;$gameSystem[_0x5377d4(0x2e9)](_0x1b2012);}),VisuMZ[_0x551b1e(0x2d6)]['Scene_Boot_onDatabaseLoaded']=Scene_Boot['prototype'][_0x551b1e(0x772)],Scene_Boot['prototype'][_0x551b1e(0x772)]=function(){const _0x3ba7ac=_0x551b1e;VisuMZ[_0x3ba7ac(0x2d6)][_0x3ba7ac(0x757)][_0x3ba7ac(0x511)](this),this[_0x3ba7ac(0x446)](),this[_0x3ba7ac(0x441)](),this[_0x3ba7ac(0x754)](),this[_0x3ba7ac(0x8ef)](),this[_0x3ba7ac(0x53b)](),VisuMZ[_0x3ba7ac(0x835)]();},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x367)]={},Scene_Boot[_0x551b1e(0x5ff)]['process_VisuMZ_CoreEngine_RegExp']=function(){const _0x4e47d0=_0x551b1e,_0x307b04=[_0x4e47d0(0x339),_0x4e47d0(0x2b4),_0x4e47d0(0x3e1),_0x4e47d0(0x4b2),_0x4e47d0(0x5d8),'MDF',_0x4e47d0(0x22b),_0x4e47d0(0x601)],_0x5d6b0e=[_0x4e47d0(0x639),_0x4e47d0(0x202),_0x4e47d0(0x4f1),'CEV','MEV',_0x4e47d0(0x3d8),_0x4e47d0(0x5e3),_0x4e47d0(0x588),_0x4e47d0(0x571),_0x4e47d0(0x8c8)],_0x2d5fe8=[_0x4e47d0(0x792),_0x4e47d0(0x530),_0x4e47d0(0x4f5),'PHA',_0x4e47d0(0x596),'TCR',_0x4e47d0(0x4a3),'MDR','FDR',_0x4e47d0(0x1e1)],_0xc853e9=[_0x307b04,_0x5d6b0e,_0x2d5fe8],_0x20aa60=[_0x4e47d0(0x344),'Plus1',_0x4e47d0(0x8d1),_0x4e47d0(0x279),_0x4e47d0(0x26b),'Rate1','Rate2',_0x4e47d0(0x72c),'Flat1','Flat2'];for(const _0xf97397 of _0xc853e9){let _0x736499='';if(_0xf97397===_0x307b04)_0x736499=_0x4e47d0(0x55f);if(_0xf97397===_0x5d6b0e)_0x736499=_0x4e47d0(0x621);if(_0xf97397===_0x2d5fe8)_0x736499=_0x4e47d0(0x5c3);for(const _0x45d4c5 of _0x20aa60){if('hOXPr'===_0x4e47d0(0x66d))return _0x2bd330(_0x3de0cd)[_0x4e47d0(0x7ed)](_0x1b8568,_0x485d9d)+',';else{let _0x1a5fb7='%1%2'[_0x4e47d0(0x7cb)](_0x736499,_0x45d4c5);VisuMZ[_0x4e47d0(0x2d6)]['RegExp'][_0x1a5fb7]=[],VisuMZ[_0x4e47d0(0x2d6)][_0x4e47d0(0x367)][_0x1a5fb7+'JS']=[];let _0xf2f72b=_0x4e47d0(0x603);if([_0x4e47d0(0x344),_0x4e47d0(0x72c)][_0x4e47d0(0x82f)](_0x45d4c5))_0xf2f72b+=_0x4e47d0(0x8ff);else{if(['Plus1',_0x4e47d0(0x2e5)][_0x4e47d0(0x82f)](_0x45d4c5)){if(_0x4e47d0(0x6a8)!==_0x4e47d0(0x3db))_0xf2f72b+=_0x4e47d0(0x522);else{const _0x1649e6=_0x4e47d0(0x7a7);this[_0x4e47d0(0x77c)]=this[_0x4e47d0(0x77c)]||{};if(this[_0x4e47d0(0x77c)][_0x1649e6])return this[_0x4e47d0(0x77c)][_0x1649e6];const _0x43c353=_0x7aa073[_0x4e47d0(0x2d6)]['Settings'][_0x4e47d0(0x574)][_0x4e47d0(0x881)];return this[_0x4e47d0(0x2d2)](_0x1649e6,_0x43c353);}}else{if([_0x4e47d0(0x8d1),'Flat2'][_0x4e47d0(0x82f)](_0x45d4c5))_0xf2f72b+=_0x4e47d0(0x7dc);else{if(_0x45d4c5===_0x4e47d0(0x279))_0xf2f72b+=_0x4e47d0(0x544);else{if(_0x45d4c5==='Rate1')_0xf2f72b+='(\x5cd+)([%％])>';else _0x45d4c5===_0x4e47d0(0x3c9)&&('JHEVQ'==='JHEVQ'?_0xf2f72b+=_0x4e47d0(0x663):this[_0x4e47d0(0x292)][_0x4e47d0(0x565)]-=0x6);}}}}for(const _0x4e1328 of _0xf97397){if(_0x4e47d0(0x8be)!==_0x4e47d0(0x22f)){let _0x1fcd65=_0x45d4c5['replace'](/[\d+]/g,'')[_0x4e47d0(0x724)]();const _0x56ab75=_0xf2f72b[_0x4e47d0(0x7cb)](_0x4e1328,_0x1fcd65);VisuMZ[_0x4e47d0(0x2d6)][_0x4e47d0(0x367)][_0x1a5fb7][_0x4e47d0(0x41b)](new RegExp(_0x56ab75,'i'));const _0x4a718c=_0x4e47d0(0x864)[_0x4e47d0(0x7cb)](_0x4e1328,_0x1fcd65);VisuMZ['CoreEngine'][_0x4e47d0(0x367)][_0x1a5fb7+'JS']['push'](new RegExp(_0x4a718c,'i'));}else return 0x0;}}}}},Scene_Boot[_0x551b1e(0x5ff)][_0x551b1e(0x441)]=function(){const _0x34a801=_0x551b1e;if(VisuMZ[_0x34a801(0x835)])return;},Scene_Boot[_0x551b1e(0x5ff)][_0x551b1e(0x754)]=function(){const _0x9042c1=_0x551b1e;VisuMZ[_0x9042c1(0x2d6)]['Settings'][_0x9042c1(0x862)][_0x9042c1(0x882)]&&('YAJcv'!==_0x9042c1(0x347)?this['_itemWindow'][_0x9042c1(0x4f9)](_0x152972[_0x9042c1(0x383)][_0x9042c1(0x690)]):VisuMZ[_0x9042c1(0x5be)](!![]));VisuMZ[_0x9042c1(0x2d6)][_0x9042c1(0x47b)]['QoL'][_0x9042c1(0x449)]&&(Input[_0x9042c1(0x1af)][0x23]='end',Input[_0x9042c1(0x1af)][0x24]=_0x9042c1(0x244));if(VisuMZ['CoreEngine']['Settings'][_0x9042c1(0x3a8)]){const _0x341ec0=VisuMZ[_0x9042c1(0x2d6)]['Settings'][_0x9042c1(0x3a8)];_0x341ec0['KeySHIFT']=_0x341ec0[_0x9042c1(0x77d)]||_0x9042c1(0x7fd),_0x341ec0[_0x9042c1(0x737)]=_0x341ec0[_0x9042c1(0x737)]||_0x9042c1(0x87b);}if(VisuMZ['CoreEngine'][_0x9042c1(0x47b)]['KeyboardInput'][_0x9042c1(0x5fa)]){if('ZDYhF'!=='ZDYhF'){const _0x349fa8=_0x17b090[_0x9042c1(0x70b)]();if(_0x349fa8)for(const _0x25853f of _0x349fa8){if(_0x25853f&&_0x25853f[_0x9042c1(0x209)])return!![];}}else Input['keyMapper'][0x57]='up',Input[_0x9042c1(0x1af)][0x41]=_0x9042c1(0x40e),Input[_0x9042c1(0x1af)][0x53]='down',Input[_0x9042c1(0x1af)][0x44]=_0x9042c1(0x619),Input[_0x9042c1(0x1af)][0x45]=_0x9042c1(0x21a);}VisuMZ['CoreEngine']['Settings'][_0x9042c1(0x69f)][_0x9042c1(0x6ae)]&&(Input[_0x9042c1(0x1af)][0x52]=_0x9042c1(0x49b));},Scene_Boot['prototype'][_0x551b1e(0x8ef)]=function(){const _0x237db3=_0x551b1e;this[_0x237db3(0x451)]();},Scene_Boot['prototype'][_0x551b1e(0x451)]=function(){const _0x49176d=_0x551b1e,_0x445604=VisuMZ[_0x49176d(0x2d6)][_0x49176d(0x47b)]['jsQuickFunc'];for(const _0x2b8813 of _0x445604){const _0x2f3596=_0x2b8813['FunctionName'][_0x49176d(0x1a5)](/[ ]/g,''),_0x2bb581=_0x2b8813[_0x49176d(0x343)];VisuMZ['CoreEngine'][_0x49176d(0x4a2)](_0x2f3596,_0x2bb581);}},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x4a2)]=function(_0x1b4e94,_0x3436d8){const _0x30307a=_0x551b1e;if(!!window[_0x1b4e94]){if(_0x30307a(0x370)!==_0x30307a(0x370))return this['yScrollLinkedOffset']();else{if($gameTemp['isPlaytest']())console[_0x30307a(0x538)](_0x30307a(0x730)[_0x30307a(0x7cb)](_0x1b4e94));}}const _0x1ba244=_0x30307a(0x5dc)['format'](_0x1b4e94,_0x3436d8);window[_0x1b4e94]=new Function(_0x1ba244);},Scene_Boot[_0x551b1e(0x5ff)][_0x551b1e(0x53b)]=function(){const _0x9fa427=_0x551b1e,_0x3f72b7=VisuMZ[_0x9fa427(0x2d6)][_0x9fa427(0x47b)]['CustomParam'];if(!_0x3f72b7)return;for(const _0x512cfc of _0x3f72b7){if(!_0x512cfc)continue;VisuMZ[_0x9fa427(0x2d6)][_0x9fa427(0x6a0)](_0x512cfc);}},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x2e2)]={},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x41a)]={},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x4b8)]={},VisuMZ[_0x551b1e(0x2d6)]['CustomParamAbb']={},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x6a0)]=function(_0x91558d){const _0xbc939f=_0x551b1e,_0x2f36e6=_0x91558d[_0xbc939f(0x783)],_0x57eeab=_0x91558d[_0xbc939f(0x830)],_0x551161=_0x91558d['Icon'],_0x422493=_0x91558d[_0xbc939f(0x5a5)],_0x5ab64f=new Function(_0x91558d[_0xbc939f(0x1d0)]);VisuMZ['CoreEngine']['CustomParamNames'][_0x2f36e6['toUpperCase']()[_0xbc939f(0x49e)]()]=_0x57eeab,VisuMZ[_0xbc939f(0x2d6)][_0xbc939f(0x41a)][_0x2f36e6[_0xbc939f(0x724)]()['trim']()]=_0x551161,VisuMZ[_0xbc939f(0x2d6)][_0xbc939f(0x4b8)][_0x2f36e6[_0xbc939f(0x724)]()[_0xbc939f(0x49e)]()]=_0x422493,VisuMZ[_0xbc939f(0x2d6)][_0xbc939f(0x34b)][_0x2f36e6[_0xbc939f(0x724)]()['trim']()]=_0x2f36e6,Object[_0xbc939f(0x750)](Game_BattlerBase[_0xbc939f(0x5ff)],_0x2f36e6,{'get'(){const _0x2f4cbe=_0xbc939f;if(_0x2f4cbe(0x62e)===_0x2f4cbe(0x1de))return _0x1a16ed[_0x2f4cbe(0x383)]['DummyRect']['call'](this);else{const _0x15332e=_0x5ab64f[_0x2f4cbe(0x511)](this);return _0x422493===_0x2f4cbe(0x336)?Math[_0x2f4cbe(0x4ed)](_0x15332e):_0x15332e;}}});},VisuMZ[_0x551b1e(0x835)]=function(){const _0x19d9e5=_0x551b1e;for(const _0x2e73b4 of $dataActors){if(_0x2e73b4)VisuMZ[_0x19d9e5(0x253)](_0x2e73b4);}for(const _0x32c049 of $dataClasses){if(_0x19d9e5(0x1d2)!==_0x19d9e5(0x338)){if(_0x32c049)VisuMZ[_0x19d9e5(0x7f6)](_0x32c049);}else{if(_0x33f2ce[_0x53082e]['pressed'])return!![];}}for(const _0x45e706 of $dataSkills){if(_0x45e706)VisuMZ[_0x19d9e5(0x384)](_0x45e706);}for(const _0x169ee8 of $dataItems){if(_0x19d9e5(0x6cf)===_0x19d9e5(0x3b5))this['_sideButtonLayout']=_0x4f142b;else{if(_0x169ee8)VisuMZ[_0x19d9e5(0x76b)](_0x169ee8);}}for(const _0x19f554 of $dataWeapons){if(_0x19f554)VisuMZ[_0x19d9e5(0x818)](_0x19f554);}for(const _0x27760b of $dataArmors){if(_0x27760b)VisuMZ[_0x19d9e5(0x590)](_0x27760b);}for(const _0x227a69 of $dataEnemies){if(_0x19d9e5(0x48c)===_0x19d9e5(0x48c)){if(_0x227a69)VisuMZ[_0x19d9e5(0x62a)](_0x227a69);}else _0x476ff8[_0x19d9e5(0x2d6)]['Game_Interpreter_command111'][_0x19d9e5(0x511)](this,_0x247780);}for(const _0x4fb298 of $dataStates){if(_0x4fb298)VisuMZ[_0x19d9e5(0x8cd)](_0x4fb298);}for(const _0x41d53a of $dataTilesets){if(_0x19d9e5(0x870)===_0x19d9e5(0x264))return this['enemy']()[_0x19d9e5(0x702)];else{if(_0x41d53a)VisuMZ[_0x19d9e5(0x293)](_0x41d53a);}}},VisuMZ[_0x551b1e(0x253)]=function(_0x4748df){},VisuMZ[_0x551b1e(0x7f6)]=function(_0x554b3a){},VisuMZ[_0x551b1e(0x384)]=function(_0x3fd68d){},VisuMZ[_0x551b1e(0x76b)]=function(_0xfe3154){},VisuMZ[_0x551b1e(0x818)]=function(_0x4c9929){},VisuMZ[_0x551b1e(0x590)]=function(_0x15ede7){},VisuMZ[_0x551b1e(0x62a)]=function(_0xae8c6d){},VisuMZ[_0x551b1e(0x8cd)]=function(_0x1f51bf){},VisuMZ['ParseTilesetNotetags']=function(_0x11c4ba){},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x253)]=VisuMZ['ParseActorNotetags'],VisuMZ[_0x551b1e(0x253)]=function(_0x2341ed){const _0x2df500=_0x551b1e;VisuMZ['CoreEngine']['ParseActorNotetags']['call'](this,_0x2341ed);const _0x2c6cec=_0x2341ed['note'];if(_0x2c6cec[_0x2df500(0x5b5)](/<MAX LEVEL:[ ](\d+)>/i)){_0x2341ed[_0x2df500(0x3ab)]=Number(RegExp['$1']);if(_0x2341ed['maxLevel']===0x0)_0x2341ed[_0x2df500(0x3ab)]=Number[_0x2df500(0x4f3)];}_0x2c6cec[_0x2df500(0x5b5)](/<INITIAL LEVEL:[ ](\d+)>/i)&&(_0x2341ed[_0x2df500(0x6f1)]=Math['min'](Number(RegExp['$1']),_0x2341ed[_0x2df500(0x3ab)]));},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x7f6)]=VisuMZ['ParseClassNotetags'],VisuMZ['ParseClassNotetags']=function(_0x24906f){const _0x3d446e=_0x551b1e;VisuMZ[_0x3d446e(0x2d6)][_0x3d446e(0x7f6)][_0x3d446e(0x511)](this,_0x24906f);if(_0x24906f[_0x3d446e(0x431)])for(const _0x37c8e8 of _0x24906f[_0x3d446e(0x431)]){_0x37c8e8[_0x3d446e(0x1d3)][_0x3d446e(0x5b5)](/<LEARN AT LEVEL:[ ](\d+)>/i)&&(_0x37c8e8[_0x3d446e(0x702)]=Math['max'](Number(RegExp['$1']),0x1));}},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x62a)]=VisuMZ[_0x551b1e(0x62a)],VisuMZ[_0x551b1e(0x62a)]=function(_0x1fff89){const _0x150f3c=_0x551b1e;VisuMZ['CoreEngine'][_0x150f3c(0x62a)]['call'](this,_0x1fff89),_0x1fff89[_0x150f3c(0x702)]=0x1;const _0x1ac941=_0x1fff89['note'];if(_0x1ac941[_0x150f3c(0x5b5)](/<LEVEL:[ ](\d+)>/i))_0x1fff89['level']=Number(RegExp['$1']);if(_0x1ac941['match'](/<MAXHP:[ ](\d+)>/i))_0x1fff89[_0x150f3c(0x3aa)][0x0]=Number(RegExp['$1']);if(_0x1ac941[_0x150f3c(0x5b5)](/<MAXMP:[ ](\d+)>/i))_0x1fff89[_0x150f3c(0x3aa)][0x1]=Number(RegExp['$1']);if(_0x1ac941[_0x150f3c(0x5b5)](/<ATK:[ ](\d+)>/i))_0x1fff89[_0x150f3c(0x3aa)][0x2]=Number(RegExp['$1']);if(_0x1ac941[_0x150f3c(0x5b5)](/<DEF:[ ](\d+)>/i))_0x1fff89[_0x150f3c(0x3aa)][0x3]=Number(RegExp['$1']);if(_0x1ac941[_0x150f3c(0x5b5)](/<MAT:[ ](\d+)>/i))_0x1fff89[_0x150f3c(0x3aa)][0x4]=Number(RegExp['$1']);if(_0x1ac941[_0x150f3c(0x5b5)](/<MDF:[ ](\d+)>/i))_0x1fff89[_0x150f3c(0x3aa)][0x5]=Number(RegExp['$1']);if(_0x1ac941[_0x150f3c(0x5b5)](/<AGI:[ ](\d+)>/i))_0x1fff89[_0x150f3c(0x3aa)][0x6]=Number(RegExp['$1']);if(_0x1ac941['match'](/<LUK:[ ](\d+)>/i))_0x1fff89['params'][0x7]=Number(RegExp['$1']);if(_0x1ac941[_0x150f3c(0x5b5)](/<EXP:[ ](\d+)>/i))_0x1fff89['exp']=Number(RegExp['$1']);if(_0x1ac941[_0x150f3c(0x5b5)](/<GOLD:[ ](\d+)>/i))_0x1fff89[_0x150f3c(0x46e)]=Number(RegExp['$1']);},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x2ff)]=Graphics[_0x551b1e(0x644)],Graphics[_0x551b1e(0x644)]=function(){const _0x469faf=_0x551b1e;switch(VisuMZ['CoreEngine'][_0x469faf(0x47b)][_0x469faf(0x862)]['AutoStretch']){case _0x469faf(0x694):return!![];case _0x469faf(0x4c8):return![];default:return VisuMZ[_0x469faf(0x2d6)][_0x469faf(0x2ff)]['call'](this);}},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x438)]=Graphics[_0x551b1e(0x8cf)],Graphics[_0x551b1e(0x8cf)]=function(_0x5addb5,_0x2cfa3d,_0x166cf5=null){const _0x47caf2=_0x551b1e;VisuMZ[_0x47caf2(0x2d6)]['Graphics_printError'][_0x47caf2(0x511)](this,_0x5addb5,_0x2cfa3d,_0x166cf5),VisuMZ[_0x47caf2(0x5be)](![]);},VisuMZ[_0x551b1e(0x2d6)]['Graphics_centerElement']=Graphics[_0x551b1e(0x59e)],Graphics[_0x551b1e(0x59e)]=function(_0x4a5517){const _0x15fe6b=_0x551b1e;VisuMZ[_0x15fe6b(0x2d6)][_0x15fe6b(0x1e9)][_0x15fe6b(0x511)](this,_0x4a5517),this[_0x15fe6b(0x287)](_0x4a5517);},Graphics[_0x551b1e(0x287)]=function(_0x37b246){const _0x4f1443=_0x551b1e;if(VisuMZ['CoreEngine'][_0x4f1443(0x47b)]['QoL'][_0x4f1443(0x45f)]){if(_0x4f1443(0x61e)!==_0x4f1443(0x61e)){let _0x36a80f=_0x314e2c;if(_0x36a80f[0x0]==='0')return _0x36a80f;if(_0x36a80f[_0x36a80f[_0x4f1443(0x55a)]-0x1]==='.')return _0x4f0aaf(_0x36a80f)[_0x4f1443(0x7ed)](_0xa6db8a,_0xc63105)+'.';else return _0x36a80f[_0x36a80f[_0x4f1443(0x55a)]-0x1]===','?_0x3ee8a0(_0x36a80f)[_0x4f1443(0x7ed)](_0x509ecc,_0x2d2a6a)+',':_0x44831f(_0x36a80f)[_0x4f1443(0x7ed)](_0x3a380d,_0x25d9f1);}else _0x37b246[_0x4f1443(0x4ac)]['font-smooth']=_0x4f1443(0x22a);}VisuMZ[_0x4f1443(0x2d6)][_0x4f1443(0x47b)][_0x4f1443(0x862)]['PixelateImageRendering']&&(_0x37b246[_0x4f1443(0x4ac)]['image-rendering']=_0x4f1443(0x924));const _0x153259=Math['max'](0x0,Math[_0x4f1443(0x4ad)](_0x37b246[_0x4f1443(0x652)]*this[_0x4f1443(0x88c)])),_0x6da10d=Math[_0x4f1443(0x46a)](0x0,Math[_0x4f1443(0x4ad)](_0x37b246['height']*this[_0x4f1443(0x88c)]));_0x37b246[_0x4f1443(0x4ac)][_0x4f1443(0x652)]=_0x153259+'px',_0x37b246[_0x4f1443(0x4ac)][_0x4f1443(0x66e)]=_0x6da10d+'px';},Bitmap[_0x551b1e(0x5ff)][_0x551b1e(0x51e)]=function(){const _0x4648dd=_0x551b1e;this[_0x4648dd(0x8b0)]=!![];},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x5c8)]=Sprite[_0x551b1e(0x5ff)][_0x551b1e(0x23e)],Sprite[_0x551b1e(0x5ff)][_0x551b1e(0x23e)]=function(){const _0x533f5b=_0x551b1e;VisuMZ[_0x533f5b(0x2d6)][_0x533f5b(0x5c8)][_0x533f5b(0x511)](this),this['destroyCoreEngineMarkedBitmaps']();},Sprite[_0x551b1e(0x5ff)][_0x551b1e(0x471)]=function(){const _0x15ea86=_0x551b1e;if(!this[_0x15ea86(0x2b8)])return;if(!this['bitmap'][_0x15ea86(0x8b0)])return;this[_0x15ea86(0x2b8)][_0x15ea86(0x1cf)]&&!this[_0x15ea86(0x63f)][_0x15ea86(0x1cf)][_0x15ea86(0x399)]&&this['bitmap'][_0x15ea86(0x23e)]();},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x6a6)]=Bitmap[_0x551b1e(0x5ff)][_0x551b1e(0x231)],Bitmap[_0x551b1e(0x5ff)]['resize']=function(_0x46cded,_0x714604){const _0x9f8580=_0x551b1e;VisuMZ['CoreEngine'][_0x9f8580(0x6a6)][_0x9f8580(0x511)](this,_0x46cded,_0x714604),this[_0x9f8580(0x51e)]();},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x20f)]=Bitmap[_0x551b1e(0x5ff)][_0x551b1e(0x6eb)],Bitmap[_0x551b1e(0x5ff)][_0x551b1e(0x6eb)]=function(_0x5cc3be,_0x253b31,_0x1f777d,_0x407084,_0x104bd2,_0x401d38,_0x55fba2,_0x34ec91,_0x5b9610){const _0x3d9f1b=_0x551b1e;VisuMZ[_0x3d9f1b(0x2d6)][_0x3d9f1b(0x20f)][_0x3d9f1b(0x511)](this,_0x5cc3be,_0x253b31,_0x1f777d,_0x407084,_0x104bd2,_0x401d38,_0x55fba2,_0x34ec91,_0x5b9610),this[_0x3d9f1b(0x51e)]();},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x8d2)]=Bitmap[_0x551b1e(0x5ff)][_0x551b1e(0x545)],Bitmap[_0x551b1e(0x5ff)]['clearRect']=function(_0x336815,_0x31b791,_0x598970,_0xb54b07){const _0x17b6d6=_0x551b1e;VisuMZ[_0x17b6d6(0x2d6)][_0x17b6d6(0x8d2)]['call'](this,_0x336815,_0x31b791,_0x598970,_0xb54b07),this[_0x17b6d6(0x51e)]();},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x8a0)]=Bitmap[_0x551b1e(0x5ff)][_0x551b1e(0x8fe)],Bitmap[_0x551b1e(0x5ff)][_0x551b1e(0x8fe)]=function(_0x283284,_0x1e709f,_0x52fd2e,_0x2ef07d,_0x49224f){const _0x2b85b0=_0x551b1e;VisuMZ[_0x2b85b0(0x2d6)]['Bitmap_fillRect'][_0x2b85b0(0x511)](this,_0x283284,_0x1e709f,_0x52fd2e,_0x2ef07d,_0x49224f),this[_0x2b85b0(0x51e)]();},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x5f9)]=Bitmap['prototype'][_0x551b1e(0x581)],Bitmap[_0x551b1e(0x5ff)][_0x551b1e(0x581)]=function(_0x4c87dd,_0x2d48a9,_0xb02d41,_0x2ff651,_0x29922e){const _0x3edf6e=_0x551b1e;VisuMZ[_0x3edf6e(0x2d6)][_0x3edf6e(0x5f9)]['call'](this,_0x4c87dd,_0x2d48a9,_0xb02d41,_0x2ff651,_0x29922e),this[_0x3edf6e(0x51e)]();},VisuMZ[_0x551b1e(0x2d6)]['Bitmap_gradientFillRect']=Bitmap[_0x551b1e(0x5ff)][_0x551b1e(0x2fb)],Bitmap[_0x551b1e(0x5ff)][_0x551b1e(0x2fb)]=function(_0x4f9546,_0x4ecafc,_0x206e3d,_0x2d7fca,_0x16ed1b,_0x24035f,_0x4cf402){const _0x2e164c=_0x551b1e;VisuMZ[_0x2e164c(0x2d6)][_0x2e164c(0x273)]['call'](this,_0x4f9546,_0x4ecafc,_0x206e3d,_0x2d7fca,_0x16ed1b,_0x24035f,_0x4cf402),this[_0x2e164c(0x51e)]();},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x3a4)]=Bitmap[_0x551b1e(0x5ff)]['drawCircle'],Bitmap[_0x551b1e(0x5ff)][_0x551b1e(0x2f4)]=function(_0x7fe77f,_0x57c3cb,_0x518d99,_0x47f81b){const _0x5e0abe=_0x551b1e;_0x7fe77f=Math[_0x5e0abe(0x4ed)](_0x7fe77f),_0x57c3cb=Math[_0x5e0abe(0x4ed)](_0x57c3cb),_0x518d99=Math[_0x5e0abe(0x4ed)](_0x518d99),VisuMZ[_0x5e0abe(0x2d6)][_0x5e0abe(0x3a4)][_0x5e0abe(0x511)](this,_0x7fe77f,_0x57c3cb,_0x518d99,_0x47f81b),this[_0x5e0abe(0x51e)]();},VisuMZ['CoreEngine']['Bitmap_measureTextWidth']=Bitmap[_0x551b1e(0x5ff)][_0x551b1e(0x232)],Bitmap[_0x551b1e(0x5ff)][_0x551b1e(0x232)]=function(_0x5b4b69){const _0x1fc958=_0x551b1e;return Math[_0x1fc958(0x4ed)](VisuMZ[_0x1fc958(0x2d6)][_0x1fc958(0x4c6)]['call'](this,_0x5b4b69));},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x795)]=Bitmap[_0x551b1e(0x5ff)][_0x551b1e(0x29a)],Bitmap[_0x551b1e(0x5ff)][_0x551b1e(0x29a)]=function(_0x5c6553,_0x1594da,_0x618e,_0x2a774f,_0x41a911,_0xb3f7b3){const _0x42bad8=_0x551b1e;_0x1594da=Math[_0x42bad8(0x4ed)](_0x1594da),_0x618e=Math[_0x42bad8(0x4ed)](_0x618e),_0x2a774f=Math[_0x42bad8(0x4ed)](_0x2a774f),_0x41a911=Math['round'](_0x41a911),VisuMZ['CoreEngine'][_0x42bad8(0x795)]['call'](this,_0x5c6553,_0x1594da,_0x618e,_0x2a774f,_0x41a911,_0xb3f7b3),this[_0x42bad8(0x51e)]();},VisuMZ['CoreEngine'][_0x551b1e(0x310)]=Bitmap[_0x551b1e(0x5ff)][_0x551b1e(0x578)],Bitmap[_0x551b1e(0x5ff)][_0x551b1e(0x578)]=function(_0x22ab56,_0x499b81,_0x5dcfec,_0x508b62){const _0x376ff5=_0x551b1e;VisuMZ[_0x376ff5(0x2d6)][_0x376ff5(0x47b)][_0x376ff5(0x862)][_0x376ff5(0x54a)]?this[_0x376ff5(0x206)](_0x22ab56,_0x499b81,_0x5dcfec,_0x508b62):VisuMZ[_0x376ff5(0x2d6)][_0x376ff5(0x310)][_0x376ff5(0x511)](this,_0x22ab56,_0x499b81,_0x5dcfec,_0x508b62);},Bitmap[_0x551b1e(0x5ff)][_0x551b1e(0x206)]=function(_0x430217,_0xb4f4c,_0x4c8fae,_0x3024cd){const _0x1444ae=_0x551b1e,_0x14831c=this[_0x1444ae(0x701)];_0x14831c[_0x1444ae(0x3d3)]=this[_0x1444ae(0x320)],_0x14831c['fillText'](_0x430217,_0xb4f4c+0x2,_0x4c8fae+0x2,_0x3024cd);},VisuMZ[_0x551b1e(0x2d6)]['Input_clear']=Input[_0x551b1e(0x55b)],Input[_0x551b1e(0x55b)]=function(){const _0x44d50e=_0x551b1e;VisuMZ[_0x44d50e(0x2d6)][_0x44d50e(0x557)][_0x44d50e(0x511)](this),this[_0x44d50e(0x618)]=undefined,this[_0x44d50e(0x568)]=undefined,this['_gamepadWait']=Input['keyRepeatWait'];},VisuMZ[_0x551b1e(0x2d6)]['Input_update']=Input[_0x551b1e(0x572)],Input[_0x551b1e(0x572)]=function(){const _0x1f3f83=_0x551b1e;VisuMZ[_0x1f3f83(0x2d6)][_0x1f3f83(0x8b5)][_0x1f3f83(0x511)](this);if(this[_0x1f3f83(0x2fd)])this[_0x1f3f83(0x2fd)]--;},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x2d1)]=Input[_0x551b1e(0x510)],Input[_0x551b1e(0x510)]=function(){const _0x3a5dd1=_0x551b1e;if(this[_0x3a5dd1(0x2fd)])return;VisuMZ['CoreEngine'][_0x3a5dd1(0x2d1)][_0x3a5dd1(0x511)](this);},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x4fb)]=Input['_setupEventHandlers'],Input[_0x551b1e(0x824)]=function(){const _0x44aa4a=_0x551b1e;VisuMZ[_0x44aa4a(0x2d6)][_0x44aa4a(0x4fb)][_0x44aa4a(0x511)](this),document[_0x44aa4a(0x2a7)](_0x44aa4a(0x6c5),this[_0x44aa4a(0x4dd)][_0x44aa4a(0x4aa)](this));},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x554)]=Input[_0x551b1e(0x25c)],Input[_0x551b1e(0x25c)]=function(_0x58a63b){const _0x4faeb4=_0x551b1e;this['_inputSpecialKeyCode']=_0x58a63b[_0x4faeb4(0x87d)],VisuMZ[_0x4faeb4(0x2d6)]['Input_onKeyDown'][_0x4faeb4(0x511)](this,_0x58a63b);},Input[_0x551b1e(0x4dd)]=function(_0x8b3501){const _0x342b48=_0x551b1e;this[_0x342b48(0x29c)](_0x8b3501);},Input[_0x551b1e(0x29c)]=function(_0x451bc0){const _0xb449e4=_0x551b1e;this[_0xb449e4(0x568)]=_0x451bc0[_0xb449e4(0x87d)];let _0x8e668c=String['fromCharCode'](_0x451bc0[_0xb449e4(0x558)]);if(this['_inputString']===undefined){if('EyRvi'===_0xb449e4(0x518))this[_0xb449e4(0x618)]=_0x8e668c;else{const _0x593dbd=_0xb449e4(0x6ba);this[_0xb449e4(0x77c)]=this['_colorCache']||{};if(this[_0xb449e4(0x77c)][_0x593dbd])return this[_0xb449e4(0x77c)][_0x593dbd];const _0x19284d=_0x56f992[_0xb449e4(0x2d6)][_0xb449e4(0x47b)][_0xb449e4(0x574)][_0xb449e4(0x296)];return this[_0xb449e4(0x2d2)](_0x593dbd,_0x19284d);}}else this[_0xb449e4(0x618)]+=_0x8e668c;},VisuMZ['CoreEngine'][_0x551b1e(0x25f)]=Input[_0x551b1e(0x6dd)],Input[_0x551b1e(0x6dd)]=function(_0x10d909){const _0x252152=_0x551b1e;if(_0x10d909===0x8)return![];return VisuMZ[_0x252152(0x2d6)][_0x252152(0x25f)][_0x252152(0x511)](this,_0x10d909);},Input['isSpecialCode']=function(_0x2c696f){const _0x53fdb8=_0x551b1e;if(_0x2c696f[_0x53fdb8(0x5b5)](/backspace/i))return this[_0x53fdb8(0x568)]===0x8;if(_0x2c696f[_0x53fdb8(0x5b5)](/enter/i))return this[_0x53fdb8(0x568)]===0xd;if(_0x2c696f[_0x53fdb8(0x5b5)](/escape/i))return this[_0x53fdb8(0x568)]===0x1b;},Input[_0x551b1e(0x642)]=function(){const _0x3d9dc5=_0x551b1e;return[0x30,0x31,0x32,0x33,0x34,0x35,0x36,0x37,0x38,0x39][_0x3d9dc5(0x60a)](this[_0x3d9dc5(0x568)]);},Input[_0x551b1e(0x896)]=function(){const _0x3d89c8=_0x551b1e;return[0x25,0x26,0x27,0x28][_0x3d89c8(0x60a)](this[_0x3d89c8(0x568)]);},Input[_0x551b1e(0x3f9)]=function(){const _0x56d029=_0x551b1e;if(navigator[_0x56d029(0x70b)]){if(_0x56d029(0x434)!=='TBXIf'){const _0x205de1=navigator[_0x56d029(0x70b)]();if(_0x205de1)for(const _0x28aeb2 of _0x205de1){if(_0x56d029(0x34c)!==_0x56d029(0x34c)){const _0x112933=_0x384cbd[_0x56d029(0x511)](this);return _0x45f16a==='integer'?_0x522746[_0x56d029(0x4ed)](_0x112933):_0x112933;}else{if(_0x28aeb2&&_0x28aeb2['connected'])return!![];}}}else{const _0x47c576=_0x77478e[_0x56d029(0x4bb)]?(_0x3b6d91[_0x56d029(0x5ff)][_0x56d029(0x56b)]()+0x6)*0x2:0x0,_0x3a70d3=this[_0x56d029(0x53d)](),_0x204e4d=_0x20abea['boxWidth']-_0x47c576*0x2,_0x22197d=this[_0x56d029(0x61c)]();return new _0x4bd398(_0x47c576,_0x3a70d3,_0x204e4d,_0x22197d);}}return![];},Input['isGamepadTriggered']=function(){const _0x10d317=_0x551b1e;if(navigator['getGamepads']){const _0x88bf69=navigator[_0x10d317(0x70b)]();if(_0x88bf69)for(const _0x2e692b of _0x88bf69){if(_0x10d317(0x602)==='IvTkO')return _0x17db5f['PreserveNumbers'](_0x23d017,'','');else{if(_0x2e692b&&_0x2e692b[_0x10d317(0x209)]){if('bWFCU'===_0x10d317(0x682))_0x1c3721+=_0x2f3aa3(_0x581e51);else{if(this['isGamepadButtonPressed'](_0x2e692b))return!![];}}}}}return![];},Input['isGamepadButtonPressed']=function(_0x1569e4){const _0x5bb51e=_0x551b1e,_0x172d33=_0x1569e4['buttons'];for(let _0x4f3d7a=0x0;_0x4f3d7a<_0x172d33[_0x5bb51e(0x55a)];_0x4f3d7a++){if(_0x172d33[_0x4f3d7a]['pressed'])return!![];}return![];},VisuMZ['CoreEngine'][_0x551b1e(0x811)]=Tilemap[_0x551b1e(0x5ff)][_0x551b1e(0x56f)],Tilemap[_0x551b1e(0x5ff)][_0x551b1e(0x56f)]=function(_0xf203c5,_0x27a339,_0x16dcc2,_0x4ec820){const _0x1e411e=_0x551b1e;if($gameMap&&$gameMap['areTileShadowsHidden']())return;VisuMZ['CoreEngine'][_0x1e411e(0x811)][_0x1e411e(0x511)](this,_0xf203c5,_0x27a339,_0x16dcc2,_0x4ec820);},Tilemap[_0x551b1e(0x4b7)][_0x551b1e(0x5ff)][_0x551b1e(0x8f0)]=function(){const _0x411387=_0x551b1e;this[_0x411387(0x869)]();for(let _0x28fadb=0x0;_0x28fadb<Tilemap['Layer'][_0x411387(0x1e8)];_0x28fadb++){const _0x2db33b=new PIXI[(_0x411387(0x629))]();_0x2db33b[_0x411387(0x8a5)](0x800,0x800),VisuMZ[_0x411387(0x2d6)]['Settings'][_0x411387(0x862)][_0x411387(0x37d)]&&(_0x411387(0x7b0)===_0x411387(0x6b0)?(this['_backgroundFilter']=new _0x32c6c6[(_0x411387(0x78f))][(_0x411387(0x381))](_0x118566=!![]),this[_0x411387(0x73d)]=new _0x518a8a(),this[_0x411387(0x73d)][_0x411387(0x2b8)]=_0x724aba['backgroundBitmap'](),this['_backgroundSprite']['filters']=[this['_backgroundFilter']],this[_0x411387(0x8c0)][_0x411387(0x1d7)](this[_0x411387(0x73d)])):_0x2db33b[_0x411387(0x220)]=PIXI[_0x411387(0x904)][_0x411387(0x6a2)]),this[_0x411387(0x848)]['push'](_0x2db33b);}},WindowLayer[_0x551b1e(0x5ff)][_0x551b1e(0x423)]=function(){const _0x269ab0=_0x551b1e;return SceneManager&&SceneManager[_0x269ab0(0x607)]?SceneManager[_0x269ab0(0x607)][_0x269ab0(0x213)]():_0x269ab0(0x700)===_0x269ab0(0x453)?_0x1aa56a[_0x269ab0(0x2d6)][_0x269ab0(0x761)][_0x269ab0(0x511)](this,_0x15e119):!![];},VisuMZ[_0x551b1e(0x2d6)]['WindowLayer_render']=WindowLayer[_0x551b1e(0x5ff)][_0x551b1e(0x901)],WindowLayer[_0x551b1e(0x5ff)][_0x551b1e(0x901)]=function render(_0x1e7715){const _0x38d09c=_0x551b1e;this['isMaskingEnabled']()?_0x38d09c(0x3ba)!==_0x38d09c(0x1b2)?VisuMZ[_0x38d09c(0x2d6)][_0x38d09c(0x2c1)][_0x38d09c(0x511)](this,_0x1e7715):(_0x231b49[_0x38d09c(0x2d6)][_0x38d09c(0x8f6)]['call'](this),this['forceOutOfPlaytest'](),this[_0x38d09c(0x85f)]()):this[_0x38d09c(0x687)](_0x1e7715);},WindowLayer[_0x551b1e(0x5ff)]['renderNoMask']=function render(_0x2027d0){const _0x36f855=_0x551b1e;if(!this[_0x36f855(0x419)])return;const _0x5b1b53=new PIXI[(_0x36f855(0x1fa))](),_0x245b04=_0x2027d0['gl'],_0x509420=this[_0x36f855(0x53f)]['clone']();_0x2027d0['framebuffer'][_0x36f855(0x445)](),_0x5b1b53['transform']=this[_0x36f855(0x314)],_0x2027d0['batch'][_0x36f855(0x8e1)](),_0x245b04[_0x36f855(0x53e)](_0x245b04[_0x36f855(0x51c)]);while(_0x509420[_0x36f855(0x55a)]>0x0){const _0x35b5b6=_0x509420[_0x36f855(0x566)]();_0x35b5b6[_0x36f855(0x225)]&&_0x35b5b6['visible']&&_0x35b5b6[_0x36f855(0x456)]>0x0&&(_0x245b04[_0x36f855(0x3e7)](_0x245b04[_0x36f855(0x2e6)],0x0,~0x0),_0x245b04[_0x36f855(0x90a)](_0x245b04[_0x36f855(0x691)],_0x245b04[_0x36f855(0x691)],_0x245b04[_0x36f855(0x691)]),_0x35b5b6['render'](_0x2027d0),_0x2027d0[_0x36f855(0x820)]['flush'](),_0x5b1b53[_0x36f855(0x55b)](),_0x245b04[_0x36f855(0x3e7)](_0x245b04[_0x36f855(0x7b1)],0x1,~0x0),_0x245b04[_0x36f855(0x90a)](_0x245b04[_0x36f855(0x5af)],_0x245b04[_0x36f855(0x5af)],_0x245b04[_0x36f855(0x5af)]),_0x245b04['blendFunc'](_0x245b04[_0x36f855(0x6e2)],_0x245b04[_0x36f855(0x6d6)]),_0x5b1b53[_0x36f855(0x901)](_0x2027d0),_0x2027d0['batch']['flush'](),_0x245b04[_0x36f855(0x58f)](_0x245b04['ONE'],_0x245b04[_0x36f855(0x802)]));}_0x245b04['disable'](_0x245b04['STENCIL_TEST']),_0x245b04[_0x36f855(0x55b)](_0x245b04[_0x36f855(0x90e)]),_0x245b04['clearStencil'](0x0),_0x2027d0['batch'][_0x36f855(0x8e1)]();for(const _0x164105 of this[_0x36f855(0x53f)]){_0x36f855(0x714)!==_0x36f855(0x714)?_0xfe9d09[_0x36f855(0x2d6)][_0x36f855(0x317)]['call'](this):!_0x164105[_0x36f855(0x225)]&&_0x164105[_0x36f855(0x419)]&&_0x164105['render'](_0x2027d0);}_0x2027d0[_0x36f855(0x820)][_0x36f855(0x8e1)]();},DataManager['isKeyItem']=function(_0x30628f){const _0x2179ee=_0x551b1e;return this[_0x2179ee(0x814)](_0x30628f)&&_0x30628f[_0x2179ee(0x8cb)]===0x2;},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x1d4)]=DataManager[_0x551b1e(0x6ca)],DataManager[_0x551b1e(0x6ca)]=function(){const _0x120bc0=_0x551b1e;VisuMZ[_0x120bc0(0x2d6)]['DataManager_setupNewGame'][_0x120bc0(0x511)](this),this['reservePlayTestNewGameCommonEvent'](),this['reserveNewGameCommonEvent']();},DataManager['reservePlayTestNewGameCommonEvent']=function(){const _0xb0d854=_0x551b1e;if($gameTemp[_0xb0d854(0x376)]()){const _0x1a315e=VisuMZ[_0xb0d854(0x2d6)][_0xb0d854(0x47b)][_0xb0d854(0x862)][_0xb0d854(0x321)];if(_0x1a315e>0x0)$gameTemp[_0xb0d854(0x334)](_0x1a315e);}},DataManager[_0x551b1e(0x368)]=function(){const _0x222f6a=_0x551b1e,_0x2202d5=VisuMZ[_0x222f6a(0x2d6)][_0x222f6a(0x47b)]['QoL'][_0x222f6a(0x4ca)]||0x0;if(_0x2202d5>0x0)$gameTemp[_0x222f6a(0x334)](_0x2202d5);},DataManager['createTroopNote']=function(_0x524343){const _0x413c36=_0x551b1e,_0x2ff24f=$dataTroops[_0x524343];if(!_0x2ff24f)return'';let _0x20b34f='';_0x20b34f+=_0x2ff24f['name'];for(const _0x36c105 of _0x2ff24f['pages']){if(_0x413c36(0x903)===_0x413c36(0x903))for(const _0x2f94fd of _0x36c105['list']){[0x6c,0x198][_0x413c36(0x82f)](_0x2f94fd[_0x413c36(0x3ff)])&&(_0x413c36(0x796)===_0x413c36(0x796)?(_0x20b34f+='\x0a',_0x20b34f+=_0x2f94fd[_0x413c36(0x7d0)][0x0]):_0x389e3f['VisuMZ_2_BattleSystemOTB']&&(this[_0x413c36(0x705)]=_0x413c36(0x8dd)));}else this[_0x413c36(0x8d3)]=![],this[_0x413c36(0x3c5)]=!_0xe7a0b4[_0x413c36(0x2d6)][_0x413c36(0x47b)]['UI'][_0x413c36(0x3ac)];}return _0x20b34f;},TextManager[_0x551b1e(0x5bc)]=['','','',_0x551b1e(0x549),'','','HELP','',_0x551b1e(0x70e),'TAB','','',_0x551b1e(0x4c0),_0x551b1e(0x5db),_0x551b1e(0x606),'',_0x551b1e(0x3d9),'CTRL',_0x551b1e(0x7c6),'PAUSE',_0x551b1e(0x78b),_0x551b1e(0x3ee),'EISU','JUNJA','FINAL',_0x551b1e(0x8ad),'',_0x551b1e(0x4b9),_0x551b1e(0x463),_0x551b1e(0x1ab),_0x551b1e(0x6b8),_0x551b1e(0x76e),_0x551b1e(0x577),_0x551b1e(0x50c),_0x551b1e(0x39b),'END',_0x551b1e(0x3ad),_0x551b1e(0x421),'UP',_0x551b1e(0x786),'DOWN','SELECT','PRINT','EXECUTE',_0x551b1e(0x352),_0x551b1e(0x41f),_0x551b1e(0x1a0),'','0','1','2','3','4','5','6','7','8','9','COLON',_0x551b1e(0x216),_0x551b1e(0x8af),_0x551b1e(0x30d),'GREATER_THAN','QUESTION_MARK','AT','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',_0x551b1e(0x2aa),'',_0x551b1e(0x567),'',_0x551b1e(0x6f3),'NUMPAD0',_0x551b1e(0x8a9),_0x551b1e(0x63a),_0x551b1e(0x63c),'NUMPAD4',_0x551b1e(0x378),_0x551b1e(0x2b1),_0x551b1e(0x222),_0x551b1e(0x469),_0x551b1e(0x4e9),_0x551b1e(0x1f3),_0x551b1e(0x4d0),_0x551b1e(0x5bb),_0x551b1e(0x259),_0x551b1e(0x759),_0x551b1e(0x7a8),'F1','F2','F3','F4','F5','F6','F7','F8','F9','F10',_0x551b1e(0x8e7),'F12',_0x551b1e(0x307),_0x551b1e(0x6f6),_0x551b1e(0x6b5),'F16',_0x551b1e(0x664),_0x551b1e(0x44c),_0x551b1e(0x2cc),_0x551b1e(0x5cc),'F21','F22','F23',_0x551b1e(0x692),'','','','','','','','',_0x551b1e(0x420),_0x551b1e(0x4d7),_0x551b1e(0x2cf),_0x551b1e(0x7e3),_0x551b1e(0x592),'WIN_OEM_FJ_LOYA',_0x551b1e(0x854),'','','','','','','','','',_0x551b1e(0x1dc),_0x551b1e(0x2be),'DOUBLE_QUOTE',_0x551b1e(0x6c2),'DOLLAR','PERCENT',_0x551b1e(0x508),_0x551b1e(0x353),_0x551b1e(0x2c8),_0x551b1e(0x42e),'ASTERISK',_0x551b1e(0x49d),_0x551b1e(0x4c1),_0x551b1e(0x33b),_0x551b1e(0x47c),_0x551b1e(0x3b3),'TILDE','','','','',_0x551b1e(0x640),_0x551b1e(0x7bc),_0x551b1e(0x719),'','',_0x551b1e(0x216),_0x551b1e(0x30d),_0x551b1e(0x41e),_0x551b1e(0x893),'PERIOD','SLASH','BACK_QUOTE','','','','','','','','','','','','','','','','','','','','','','','','','','','OPEN_BRACKET',_0x551b1e(0x90f),_0x551b1e(0x325),'QUOTE','',_0x551b1e(0x624),'ALTGR','',_0x551b1e(0x58d),_0x551b1e(0x4e4),'',_0x551b1e(0x1ed),'','',_0x551b1e(0x267),'WIN_OEM_JUMP',_0x551b1e(0x715),_0x551b1e(0x61d),'WIN_OEM_PA3',_0x551b1e(0x502),_0x551b1e(0x3ea),_0x551b1e(0x5d6),'WIN_OEM_FINISH',_0x551b1e(0x628),_0x551b1e(0x563),_0x551b1e(0x285),_0x551b1e(0x22e),_0x551b1e(0x7ec),_0x551b1e(0x36e),'EXSEL','EREOF',_0x551b1e(0x323),'ZOOM','','PA1','WIN_OEM_CLEAR',''],TextManager[_0x551b1e(0x5b2)]=VisuMZ['CoreEngine'][_0x551b1e(0x47b)][_0x551b1e(0x3a8)]['OkText'],TextManager[_0x551b1e(0x695)]=VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x47b)]['ButtonAssist'][_0x551b1e(0x3b0)],TextManager[_0x551b1e(0x79a)]=VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x47b)][_0x551b1e(0x3a8)][_0x551b1e(0x3a5)],VisuMZ['CoreEngine']['TextManager_param']=TextManager[_0x551b1e(0x55f)],TextManager[_0x551b1e(0x55f)]=function(_0x300f26){const _0x55c022=_0x551b1e;if(typeof _0x300f26===_0x55c022(0x297)){if(_0x55c022(0x494)===_0x55c022(0x886))_0x49e72b=0x0;else return VisuMZ[_0x55c022(0x2d6)][_0x55c022(0x44b)]['call'](this,_0x300f26);}else return this[_0x55c022(0x793)](_0x300f26);},TextManager[_0x551b1e(0x793)]=function(_0x3e54b9){const _0x193f3e=_0x551b1e;_0x3e54b9=String(_0x3e54b9||'')['toUpperCase']();const _0x2b1ac4=VisuMZ['CoreEngine'][_0x193f3e(0x47b)][_0x193f3e(0x698)];if(_0x3e54b9===_0x193f3e(0x339))return $dataSystem[_0x193f3e(0x324)][_0x193f3e(0x3aa)][0x0];if(_0x3e54b9==='MAXMP')return $dataSystem[_0x193f3e(0x324)][_0x193f3e(0x3aa)][0x1];if(_0x3e54b9===_0x193f3e(0x3e1))return $dataSystem['terms'][_0x193f3e(0x3aa)][0x2];if(_0x3e54b9==='DEF')return $dataSystem[_0x193f3e(0x324)][_0x193f3e(0x3aa)][0x3];if(_0x3e54b9===_0x193f3e(0x5d8))return $dataSystem[_0x193f3e(0x324)][_0x193f3e(0x3aa)][0x4];if(_0x3e54b9==='MDF')return $dataSystem[_0x193f3e(0x324)][_0x193f3e(0x3aa)][0x5];if(_0x3e54b9==='AGI')return $dataSystem['terms'][_0x193f3e(0x3aa)][0x6];if(_0x3e54b9===_0x193f3e(0x601))return $dataSystem['terms'][_0x193f3e(0x3aa)][0x7];if(_0x3e54b9===_0x193f3e(0x639))return _0x2b1ac4[_0x193f3e(0x485)];if(_0x3e54b9===_0x193f3e(0x202))return _0x2b1ac4[_0x193f3e(0x60d)];if(_0x3e54b9===_0x193f3e(0x4f1))return _0x2b1ac4[_0x193f3e(0x722)];if(_0x3e54b9===_0x193f3e(0x41c))return _0x2b1ac4[_0x193f3e(0x249)];if(_0x3e54b9===_0x193f3e(0x7da))return _0x2b1ac4[_0x193f3e(0x546)];if(_0x3e54b9===_0x193f3e(0x3d8))return _0x2b1ac4[_0x193f3e(0x831)];if(_0x3e54b9===_0x193f3e(0x5e3))return _0x2b1ac4[_0x193f3e(0x4cd)];if(_0x3e54b9==='HRG')return _0x2b1ac4[_0x193f3e(0x6df)];if(_0x3e54b9==='MRG')return _0x2b1ac4['XParamVocab8'];if(_0x3e54b9==='TRG')return _0x2b1ac4[_0x193f3e(0x589)];if(_0x3e54b9===_0x193f3e(0x792))return _0x2b1ac4[_0x193f3e(0x263)];if(_0x3e54b9==='GRD')return _0x2b1ac4[_0x193f3e(0x43e)];if(_0x3e54b9==='REC')return _0x2b1ac4['SParamVocab2'];if(_0x3e54b9===_0x193f3e(0x855))return _0x2b1ac4[_0x193f3e(0x8d6)];if(_0x3e54b9==='MCR')return _0x2b1ac4[_0x193f3e(0x76a)];if(_0x3e54b9===_0x193f3e(0x35e))return _0x2b1ac4['SParamVocab5'];if(_0x3e54b9===_0x193f3e(0x4a3))return _0x2b1ac4[_0x193f3e(0x7b6)];if(_0x3e54b9===_0x193f3e(0x240))return _0x2b1ac4[_0x193f3e(0x57a)];if(_0x3e54b9===_0x193f3e(0x36b))return _0x2b1ac4[_0x193f3e(0x2e1)];if(_0x3e54b9===_0x193f3e(0x1e1))return _0x2b1ac4[_0x193f3e(0x25b)];if(VisuMZ[_0x193f3e(0x2d6)][_0x193f3e(0x2e2)][_0x3e54b9])return _0x193f3e(0x29b)===_0x193f3e(0x2bd)?0x0:VisuMZ[_0x193f3e(0x2d6)]['CustomParamNames'][_0x3e54b9];return'';},TextManager[_0x551b1e(0x883)]=function(_0x1c2e7f){const _0x1fda97=_0x551b1e;if(_0x1c2e7f===_0x1fda97(0x345))_0x1c2e7f=_0x1fda97(0x853);let _0x14d5a3=[];for(let _0x20224f in Input[_0x1fda97(0x1af)]){if(_0x1fda97(0x301)!=='aFXkZ'){_0x20224f=Number(_0x20224f);if(_0x20224f>=0x60&&_0x20224f<=0x69)continue;if([0x12,0x20]['includes'](_0x20224f))continue;_0x1c2e7f===Input[_0x1fda97(0x1af)][_0x20224f]&&_0x14d5a3[_0x1fda97(0x41b)](_0x20224f);}else return 0x0;}for(let _0xb96fcd=0x0;_0xb96fcd<_0x14d5a3[_0x1fda97(0x55a)];_0xb96fcd++){'TYjOr'===_0x1fda97(0x66b)?_0x14d5a3[_0xb96fcd]=TextManager[_0x1fda97(0x5bc)][_0x14d5a3[_0xb96fcd]]:this[_0x1fda97(0x4f2)]=_0x257cfc;}return this[_0x1fda97(0x8f8)](_0x14d5a3);},TextManager[_0x551b1e(0x8f8)]=function(_0x3ba59a){const _0x2492e6=_0x551b1e,_0x7dd66c=VisuMZ[_0x2492e6(0x2d6)]['Settings']['ButtonAssist'],_0x574735=_0x7dd66c[_0x2492e6(0x2a8)],_0x45b9ed=_0x3ba59a['pop'](),_0x35f28c=_0x2492e6(0x3c3)[_0x2492e6(0x7cb)](_0x45b9ed);return _0x7dd66c[_0x35f28c]?_0x7dd66c[_0x35f28c]:_0x574735['format'](_0x45b9ed);},TextManager[_0x551b1e(0x777)]=function(_0x49dada,_0x54a1ae){const _0x5ecee8=_0x551b1e,_0x3420a0=VisuMZ[_0x5ecee8(0x2d6)][_0x5ecee8(0x47b)]['ButtonAssist'],_0x318e5b=_0x3420a0['MultiKeyFmt'],_0x199d61=this[_0x5ecee8(0x883)](_0x49dada),_0x4963b5=this[_0x5ecee8(0x883)](_0x54a1ae);return _0x318e5b['format'](_0x199d61,_0x4963b5);},VisuMZ['CoreEngine']['ColorManager_loadWindowskin']=ColorManager[_0x551b1e(0x829)],ColorManager[_0x551b1e(0x829)]=function(){const _0x9e2685=_0x551b1e;VisuMZ[_0x9e2685(0x2d6)][_0x9e2685(0x868)]['call'](this),this['_colorCache']=this[_0x9e2685(0x77c)]||{};},ColorManager[_0x551b1e(0x2d2)]=function(_0x2c6863,_0x85c896){const _0x361a17=_0x551b1e;_0x85c896=String(_0x85c896),this[_0x361a17(0x77c)]=this[_0x361a17(0x77c)]||{};if(_0x85c896[_0x361a17(0x5b5)](/#(.*)/i))this['_colorCache'][_0x2c6863]=_0x361a17(0x7dd)['format'](String(RegExp['$1']));else{if(_0x361a17(0x748)!==_0x361a17(0x748)){if(this[_0x361a17(0x5b0)]===_0x361a17(0x513)&&!_0x49c730[_0x361a17(0x896)]())return;if(_0x3366a1['isNumpadPressed']())return;_0x577075['CoreEngine'][_0x361a17(0x4b3)][_0x361a17(0x511)](this,_0x4ca848),this[_0x361a17(0x6fe)](_0x361a17(0x4c3));}else this[_0x361a17(0x77c)][_0x2c6863]=this[_0x361a17(0x8b7)](Number(_0x85c896));}return this[_0x361a17(0x77c)][_0x2c6863];},ColorManager[_0x551b1e(0x559)]=function(_0x370207){const _0x19e028=_0x551b1e;return _0x370207=String(_0x370207),_0x370207[_0x19e028(0x5b5)](/#(.*)/i)?'#%1'[_0x19e028(0x7cb)](String(RegExp['$1'])):this[_0x19e028(0x8b7)](Number(_0x370207));},ColorManager[_0x551b1e(0x916)]=function(){const _0x511938=_0x551b1e;this[_0x511938(0x77c)]={};},ColorManager[_0x551b1e(0x73a)]=function(){const _0x2741dd=_0x551b1e,_0x5dd5db=_0x2741dd(0x7c0);this[_0x2741dd(0x77c)]=this[_0x2741dd(0x77c)]||{};if(this['_colorCache'][_0x5dd5db])return this[_0x2741dd(0x77c)][_0x5dd5db];const _0x1db804=VisuMZ['CoreEngine']['Settings'][_0x2741dd(0x574)][_0x2741dd(0x77b)];return this['getColorDataFromPluginParameters'](_0x5dd5db,_0x1db804);},ColorManager[_0x551b1e(0x2bb)]=function(){const _0x79ded2=_0x551b1e,_0x2d907e='_stored_systemColor';this[_0x79ded2(0x77c)]=this['_colorCache']||{};if(this[_0x79ded2(0x77c)][_0x2d907e])return this['_colorCache'][_0x2d907e];const _0x5cb358=VisuMZ[_0x79ded2(0x2d6)][_0x79ded2(0x47b)]['Color'][_0x79ded2(0x52f)];return this['getColorDataFromPluginParameters'](_0x2d907e,_0x5cb358);},ColorManager[_0x551b1e(0x3de)]=function(){const _0x37c593=_0x551b1e,_0xfdef4e='_stored_crisisColor';this[_0x37c593(0x77c)]=this[_0x37c593(0x77c)]||{};if(this['_colorCache'][_0xfdef4e])return this[_0x37c593(0x77c)][_0xfdef4e];const _0x351b4e=VisuMZ[_0x37c593(0x2d6)][_0x37c593(0x47b)][_0x37c593(0x574)][_0x37c593(0x53a)];return this['getColorDataFromPluginParameters'](_0xfdef4e,_0x351b4e);},ColorManager[_0x551b1e(0x460)]=function(){const _0x439f5f=_0x551b1e,_0x45a66e=_0x439f5f(0x2ca);this['_colorCache']=this['_colorCache']||{};if(this['_colorCache'][_0x45a66e])return this[_0x439f5f(0x77c)][_0x45a66e];const _0x34bb75=VisuMZ[_0x439f5f(0x2d6)][_0x439f5f(0x47b)][_0x439f5f(0x574)]['ColorDeath'];return this[_0x439f5f(0x2d2)](_0x45a66e,_0x34bb75);},ColorManager[_0x551b1e(0x319)]=function(){const _0x2ef79a=_0x551b1e,_0x1a19df='_stored_gaugeBackColor';this[_0x2ef79a(0x77c)]=this[_0x2ef79a(0x77c)]||{};if(this['_colorCache'][_0x1a19df])return this[_0x2ef79a(0x77c)][_0x1a19df];const _0x37bc58=VisuMZ[_0x2ef79a(0x2d6)][_0x2ef79a(0x47b)]['Color']['ColorGaugeBack'];return this[_0x2ef79a(0x2d2)](_0x1a19df,_0x37bc58);},ColorManager[_0x551b1e(0x437)]=function(){const _0x4b01e7=_0x551b1e,_0x2b135a=_0x4b01e7(0x6ba);this[_0x4b01e7(0x77c)]=this[_0x4b01e7(0x77c)]||{};if(this[_0x4b01e7(0x77c)][_0x2b135a])return this['_colorCache'][_0x2b135a];const _0x165b0e=VisuMZ[_0x4b01e7(0x2d6)][_0x4b01e7(0x47b)]['Color']['ColorHPGauge1'];return this[_0x4b01e7(0x2d2)](_0x2b135a,_0x165b0e);},ColorManager['hpGaugeColor2']=function(){const _0x215167=_0x551b1e,_0x3a8a47=_0x215167(0x228);this[_0x215167(0x77c)]=this[_0x215167(0x77c)]||{};if(this[_0x215167(0x77c)][_0x3a8a47])return this[_0x215167(0x77c)][_0x3a8a47];const _0x1004e0=VisuMZ['CoreEngine'][_0x215167(0x47b)][_0x215167(0x574)][_0x215167(0x892)];return this[_0x215167(0x2d2)](_0x3a8a47,_0x1004e0);},ColorManager[_0x551b1e(0x6d3)]=function(){const _0x1995c7=_0x551b1e,_0x293482=_0x1995c7(0x79c);this['_colorCache']=this[_0x1995c7(0x77c)]||{};if(this[_0x1995c7(0x77c)][_0x293482])return this[_0x1995c7(0x77c)][_0x293482];const _0x34f8f0=VisuMZ['CoreEngine'][_0x1995c7(0x47b)][_0x1995c7(0x574)][_0x1995c7(0x42c)];return this[_0x1995c7(0x2d2)](_0x293482,_0x34f8f0);},ColorManager['mpGaugeColor2']=function(){const _0x1aec87=_0x551b1e,_0xae935f=_0x1aec87(0x594);this[_0x1aec87(0x77c)]=this['_colorCache']||{};if(this[_0x1aec87(0x77c)][_0xae935f])return this[_0x1aec87(0x77c)][_0xae935f];const _0x5d8be1=VisuMZ[_0x1aec87(0x2d6)][_0x1aec87(0x47b)][_0x1aec87(0x574)]['ColorMPGauge2'];return this[_0x1aec87(0x2d2)](_0xae935f,_0x5d8be1);},ColorManager[_0x551b1e(0x3ec)]=function(){const _0x14f948=_0x551b1e,_0x2c1da4=_0x14f948(0x6be);this[_0x14f948(0x77c)]=this[_0x14f948(0x77c)]||{};if(this[_0x14f948(0x77c)][_0x2c1da4])return this[_0x14f948(0x77c)][_0x2c1da4];const _0x26bb04=VisuMZ[_0x14f948(0x2d6)][_0x14f948(0x47b)][_0x14f948(0x574)][_0x14f948(0x6e9)];return this['getColorDataFromPluginParameters'](_0x2c1da4,_0x26bb04);},ColorManager[_0x551b1e(0x4d9)]=function(){const _0x23d35d=_0x551b1e,_0x4192fb=_0x23d35d(0x3eb);this[_0x23d35d(0x77c)]=this[_0x23d35d(0x77c)]||{};if(this[_0x23d35d(0x77c)][_0x4192fb])return this[_0x23d35d(0x77c)][_0x4192fb];const _0x4e2699=VisuMZ[_0x23d35d(0x2d6)][_0x23d35d(0x47b)]['Color'][_0x23d35d(0x4df)];return this[_0x23d35d(0x2d2)](_0x4192fb,_0x4e2699);},ColorManager[_0x551b1e(0x843)]=function(){const _0x1e6ee7=_0x551b1e,_0x1fe29d=_0x1e6ee7(0x5a9);this[_0x1e6ee7(0x77c)]=this['_colorCache']||{};if(this[_0x1e6ee7(0x77c)][_0x1fe29d])return this[_0x1e6ee7(0x77c)][_0x1fe29d];const _0x3e7598=VisuMZ[_0x1e6ee7(0x2d6)][_0x1e6ee7(0x47b)]['Color'][_0x1e6ee7(0x507)];return this[_0x1e6ee7(0x2d2)](_0x1fe29d,_0x3e7598);},ColorManager[_0x551b1e(0x878)]=function(){const _0x3c9380=_0x551b1e,_0x22510c=_0x3c9380(0x436);this[_0x3c9380(0x77c)]=this[_0x3c9380(0x77c)]||{};if(this[_0x3c9380(0x77c)][_0x22510c])return this[_0x3c9380(0x77c)][_0x22510c];const _0x527c5a=VisuMZ[_0x3c9380(0x2d6)][_0x3c9380(0x47b)][_0x3c9380(0x574)][_0x3c9380(0x7b2)];return this[_0x3c9380(0x2d2)](_0x22510c,_0x527c5a);},ColorManager[_0x551b1e(0x68a)]=function(){const _0x2cdc84=_0x551b1e,_0x3d3a1=_0x2cdc84(0x1f8);this[_0x2cdc84(0x77c)]=this[_0x2cdc84(0x77c)]||{};if(this['_colorCache'][_0x3d3a1])return this[_0x2cdc84(0x77c)][_0x3d3a1];const _0x4af8ad=VisuMZ[_0x2cdc84(0x2d6)][_0x2cdc84(0x47b)][_0x2cdc84(0x574)]['ColorCTGauge2'];return this[_0x2cdc84(0x2d2)](_0x3d3a1,_0x4af8ad);},ColorManager[_0x551b1e(0x676)]=function(){const _0x4ff73b=_0x551b1e,_0x49c175=_0x4ff73b(0x84a);this[_0x4ff73b(0x77c)]=this[_0x4ff73b(0x77c)]||{};if(this[_0x4ff73b(0x77c)][_0x49c175])return this[_0x4ff73b(0x77c)][_0x49c175];const _0xd57891=VisuMZ[_0x4ff73b(0x2d6)][_0x4ff73b(0x47b)]['Color'][_0x4ff73b(0x614)];return this[_0x4ff73b(0x2d2)](_0x49c175,_0xd57891);},ColorManager[_0x551b1e(0x53c)]=function(){const _0x54e8c7=_0x551b1e,_0x317aef=_0x54e8c7(0x71d);this[_0x54e8c7(0x77c)]=this[_0x54e8c7(0x77c)]||{};if(this[_0x54e8c7(0x77c)][_0x317aef])return this[_0x54e8c7(0x77c)][_0x317aef];const _0x2948a5=VisuMZ[_0x54e8c7(0x2d6)][_0x54e8c7(0x47b)]['Color'][_0x54e8c7(0x31f)];return this[_0x54e8c7(0x2d2)](_0x317aef,_0x2948a5);},ColorManager[_0x551b1e(0x537)]=function(){const _0x46dc4b=_0x551b1e,_0x79fcaa=_0x46dc4b(0x69e);this[_0x46dc4b(0x77c)]=this[_0x46dc4b(0x77c)]||{};if(this[_0x46dc4b(0x77c)][_0x79fcaa])return this[_0x46dc4b(0x77c)][_0x79fcaa];const _0x4ae843=VisuMZ[_0x46dc4b(0x2d6)][_0x46dc4b(0x47b)][_0x46dc4b(0x574)]['ColorTPCost'];return this[_0x46dc4b(0x2d2)](_0x79fcaa,_0x4ae843);},ColorManager['pendingColor']=function(){const _0x1c2ec2=_0x551b1e,_0x3fd260=_0x1c2ec2(0x5a2);this[_0x1c2ec2(0x77c)]=this['_colorCache']||{};if(this[_0x1c2ec2(0x77c)][_0x3fd260])return this['_colorCache'][_0x3fd260];const _0x5e60db=VisuMZ[_0x1c2ec2(0x2d6)][_0x1c2ec2(0x47b)]['Color']['ColorTPCost'];return this[_0x1c2ec2(0x2d2)](_0x3fd260,_0x5e60db);},ColorManager['expGaugeColor1']=function(){const _0xcaab75=_0x551b1e,_0x3bd193='_stored_expGaugeColor1';this['_colorCache']=this[_0xcaab75(0x77c)]||{};if(this['_colorCache'][_0x3bd193])return this['_colorCache'][_0x3bd193];const _0x4c0803=VisuMZ[_0xcaab75(0x2d6)][_0xcaab75(0x47b)]['Color']['ColorExpGauge1'];return this[_0xcaab75(0x2d2)](_0x3bd193,_0x4c0803);},ColorManager[_0x551b1e(0x526)]=function(){const _0x1b6e6b=_0x551b1e,_0x58e7a5=_0x1b6e6b(0x3c6);this['_colorCache']=this[_0x1b6e6b(0x77c)]||{};if(this[_0x1b6e6b(0x77c)][_0x58e7a5])return this[_0x1b6e6b(0x77c)][_0x58e7a5];const _0x18018f=VisuMZ[_0x1b6e6b(0x2d6)][_0x1b6e6b(0x47b)][_0x1b6e6b(0x574)]['ColorExpGauge2'];return this['getColorDataFromPluginParameters'](_0x58e7a5,_0x18018f);},ColorManager['maxLvGaugeColor1']=function(){const _0x147ddd=_0x551b1e,_0x3743d2=_0x147ddd(0x773);this[_0x147ddd(0x77c)]=this['_colorCache']||{};if(this[_0x147ddd(0x77c)][_0x3743d2])return this[_0x147ddd(0x77c)][_0x3743d2];const _0x67aca0=VisuMZ[_0x147ddd(0x2d6)]['Settings'][_0x147ddd(0x574)][_0x147ddd(0x867)];return this[_0x147ddd(0x2d2)](_0x3743d2,_0x67aca0);},ColorManager[_0x551b1e(0x503)]=function(){const _0x1ddbee=_0x551b1e,_0x485f4f=_0x1ddbee(0x7c8);this[_0x1ddbee(0x77c)]=this[_0x1ddbee(0x77c)]||{};if(this[_0x1ddbee(0x77c)][_0x485f4f])return this[_0x1ddbee(0x77c)][_0x485f4f];const _0x2906ef=VisuMZ[_0x1ddbee(0x2d6)][_0x1ddbee(0x47b)]['Color'][_0x1ddbee(0x515)];return this[_0x1ddbee(0x2d2)](_0x485f4f,_0x2906ef);},ColorManager[_0x551b1e(0x5aa)]=function(_0xbb838d){const _0x570157=_0x551b1e;return VisuMZ[_0x570157(0x2d6)][_0x570157(0x47b)][_0x570157(0x574)][_0x570157(0x71f)]['call'](this,_0xbb838d);},ColorManager[_0x551b1e(0x6e6)]=function(_0x1a38e6){const _0x5aded9=_0x551b1e;return VisuMZ[_0x5aded9(0x2d6)]['Settings'][_0x5aded9(0x574)][_0x5aded9(0x5ed)]['call'](this,_0x1a38e6);},ColorManager[_0x551b1e(0x60c)]=function(_0x5d339c){const _0xdc6f3f=_0x551b1e;return VisuMZ[_0xdc6f3f(0x2d6)][_0xdc6f3f(0x47b)][_0xdc6f3f(0x574)][_0xdc6f3f(0x5fb)]['call'](this,_0x5d339c);},ColorManager['paramchangeTextColor']=function(_0x20369a){const _0x4e4b91=_0x551b1e;return VisuMZ[_0x4e4b91(0x2d6)][_0x4e4b91(0x47b)][_0x4e4b91(0x574)][_0x4e4b91(0x2ce)][_0x4e4b91(0x511)](this,_0x20369a);},ColorManager[_0x551b1e(0x5ce)]=function(_0x37877a){const _0x18689f=_0x551b1e;return VisuMZ[_0x18689f(0x2d6)][_0x18689f(0x47b)][_0x18689f(0x574)][_0x18689f(0x7d6)]['call'](this,_0x37877a);},ColorManager['outlineColor']=function(){const _0x30192e=_0x551b1e;return VisuMZ[_0x30192e(0x2d6)][_0x30192e(0x47b)][_0x30192e(0x574)]['OutlineColor'];},ColorManager[_0x551b1e(0x514)]=function(){const _0x5a0e93=_0x551b1e;return VisuMZ[_0x5a0e93(0x2d6)][_0x5a0e93(0x47b)][_0x5a0e93(0x574)][_0x5a0e93(0x2a2)]||_0x5a0e93(0x771);},ColorManager[_0x551b1e(0x751)]=function(){const _0x2fd62d=_0x551b1e;return VisuMZ[_0x2fd62d(0x2d6)][_0x2fd62d(0x47b)][_0x2fd62d(0x574)][_0x2fd62d(0x362)]||_0x2fd62d(0x2a5);},ColorManager[_0x551b1e(0x89e)]=function(){const _0x5752a8=_0x551b1e;return VisuMZ[_0x5752a8(0x2d6)][_0x5752a8(0x47b)][_0x5752a8(0x574)][_0x5752a8(0x455)];},ColorManager['dimColor2']=function(){const _0x481ed1=_0x551b1e;return VisuMZ[_0x481ed1(0x2d6)][_0x481ed1(0x47b)][_0x481ed1(0x574)][_0x481ed1(0x8dc)];},ColorManager[_0x551b1e(0x5b9)]=function(){const _0x211eb2=_0x551b1e;return VisuMZ[_0x211eb2(0x2d6)][_0x211eb2(0x47b)][_0x211eb2(0x574)][_0x211eb2(0x5a1)];},ColorManager[_0x551b1e(0x4f7)]=function(){const _0x22d85e=_0x551b1e;return VisuMZ['CoreEngine'][_0x22d85e(0x47b)][_0x22d85e(0x574)][_0x22d85e(0x706)];},SceneManager[_0x551b1e(0x4bd)]=[],SceneManager[_0x551b1e(0x73e)]=function(){const _0x36d9df=_0x551b1e;return this[_0x36d9df(0x607)]&&this[_0x36d9df(0x607)][_0x36d9df(0x539)]===Scene_Battle;},SceneManager['isSceneMap']=function(){const _0x9acce4=_0x551b1e;return this[_0x9acce4(0x607)]&&this[_0x9acce4(0x607)][_0x9acce4(0x539)]===Scene_Map;},SceneManager[_0x551b1e(0x71e)]=function(){const _0x42f7dc=_0x551b1e;return this['_scene']&&this[_0x42f7dc(0x607)]instanceof Scene_Map;},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x5b4)]=SceneManager[_0x551b1e(0x5fc)],SceneManager[_0x551b1e(0x5fc)]=function(){const _0x379666=_0x551b1e;VisuMZ[_0x379666(0x2d6)]['SceneManager_initialize'][_0x379666(0x511)](this),this[_0x379666(0x280)]();},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x915)]=SceneManager['onKeyDown'],SceneManager[_0x551b1e(0x5b1)]=function(_0x46dfcb){const _0x150a51=_0x551b1e;if($gameTemp)this[_0x150a51(0x3bf)](_0x46dfcb);VisuMZ[_0x150a51(0x2d6)][_0x150a51(0x915)]['call'](this,_0x46dfcb);},SceneManager[_0x551b1e(0x3bf)]=function(_0x47dd1b){const _0x38e292=_0x551b1e;if(!_0x47dd1b['ctrlKey']&&!_0x47dd1b['altKey']){if('zMksV'!=='SSVXg')switch(_0x47dd1b[_0x38e292(0x87d)]){case 0x54:this[_0x38e292(0x7bb)]();break;case 0x75:this[_0x38e292(0x479)]();break;case 0x76:if(Input[_0x38e292(0x8fa)](_0x38e292(0x566))||Input[_0x38e292(0x8fa)](_0x38e292(0x271)))return;this[_0x38e292(0x247)]();break;}else this[_0x38e292(0x705)]='ETB';}},SceneManager['playTestF6']=function(){const _0x17ba93=_0x551b1e;if($gameTemp['isPlaytest']()&&VisuMZ[_0x17ba93(0x2d6)][_0x17ba93(0x47b)][_0x17ba93(0x862)][_0x17ba93(0x473)]){if(_0x17ba93(0x472)!==_0x17ba93(0x31e)){ConfigManager[_0x17ba93(0x458)]!==0x0?(ConfigManager[_0x17ba93(0x8fc)]=0x0,ConfigManager[_0x17ba93(0x80b)]=0x0,ConfigManager[_0x17ba93(0x65b)]=0x0,ConfigManager[_0x17ba93(0x458)]=0x0):_0x17ba93(0x913)===_0x17ba93(0x913)?(ConfigManager[_0x17ba93(0x8fc)]=0x64,ConfigManager[_0x17ba93(0x80b)]=0x64,ConfigManager[_0x17ba93(0x65b)]=0x64,ConfigManager[_0x17ba93(0x458)]=0x64):_0x464b64[_0x17ba93(0x5ff)]['processCursorMove'][_0x17ba93(0x511)](this);ConfigManager[_0x17ba93(0x262)]();if(this[_0x17ba93(0x607)][_0x17ba93(0x539)]===Scene_Options){if(_0x17ba93(0x6bb)!=='bWAew'){if(this['_scene']['_optionsWindow'])this[_0x17ba93(0x607)][_0x17ba93(0x305)][_0x17ba93(0x429)]();if(this[_0x17ba93(0x607)][_0x17ba93(0x879)])this[_0x17ba93(0x607)]['_listWindow'][_0x17ba93(0x429)]();}else return this[_0x17ba93(0x5ca)];}}else{const _0x1f5e5a=new _0x25831e(_0x43666e);this[_0x17ba93(0x1d7)](_0x1f5e5a);}}},SceneManager['playTestF7']=function(){const _0x4fe3c8=_0x551b1e;if($gameTemp[_0x4fe3c8(0x376)]()&&VisuMZ[_0x4fe3c8(0x2d6)][_0x4fe3c8(0x47b)][_0x4fe3c8(0x862)][_0x4fe3c8(0x637)]){if(_0x4fe3c8(0x4de)!==_0x4fe3c8(0x671))$gameTemp[_0x4fe3c8(0x2d7)]=!$gameTemp[_0x4fe3c8(0x2d7)];else{if(this[_0x4fe3c8(0x38c)]())this[_0x4fe3c8(0x763)](_0x489afb,_0x1043ff,_0x21946d);_0x169c50[_0x4fe3c8(0x2d6)][_0x4fe3c8(0x358)][_0x4fe3c8(0x511)](this,_0x14897f,_0x491e86,_0x183b7a);}}},SceneManager[_0x551b1e(0x7bb)]=function(){const _0x2d4d9d=_0x551b1e;if(!$gameTemp[_0x2d4d9d(0x376)]())return;if(!SceneManager[_0x2d4d9d(0x73e)]())return;for(const _0x4c4eb1 of $gameParty[_0x2d4d9d(0x528)]()){if(_0x2d4d9d(0x6bf)===_0x2d4d9d(0x6bf)){if(!_0x4c4eb1)continue;_0x4c4eb1['gainSilentTp'](_0x4c4eb1[_0x2d4d9d(0x24b)]());}else this[_0x2d4d9d(0x416)](this[_0x2d4d9d(0x524)]()-0x1);}},SceneManager[_0x551b1e(0x280)]=function(){const _0x49dfeb=_0x551b1e;this['_sideButtonLayout']=![],this[_0x49dfeb(0x3c5)]=!VisuMZ[_0x49dfeb(0x2d6)][_0x49dfeb(0x47b)]['UI']['ShowButtons'];},SceneManager[_0x551b1e(0x461)]=function(_0x2bed2a){const _0xa18b0a=_0x551b1e;VisuMZ[_0xa18b0a(0x2d6)][_0xa18b0a(0x47b)]['UI'][_0xa18b0a(0x2db)]&&(_0xa18b0a(0x4be)!==_0xa18b0a(0x80c)?this[_0xa18b0a(0x8d3)]=_0x2bed2a:this['renderNoMask'](_0x2a519d));},SceneManager[_0x551b1e(0x333)]=function(){const _0x397a4e=_0x551b1e;return this[_0x397a4e(0x8d3)];},SceneManager[_0x551b1e(0x283)]=function(){const _0x2e1546=_0x551b1e;return this[_0x2e1546(0x3c5)];},SceneManager[_0x551b1e(0x251)]=function(){const _0x3218a3=_0x551b1e;return this[_0x3218a3(0x283)]()||this[_0x3218a3(0x333)]();},VisuMZ['CoreEngine']['SceneManager_isGameActive']=SceneManager[_0x551b1e(0x468)],SceneManager['isGameActive']=function(){const _0x4233f6=_0x551b1e;if(VisuMZ['CoreEngine'][_0x4233f6(0x47b)][_0x4233f6(0x862)]['RequireFocus'])return VisuMZ[_0x4233f6(0x2d6)][_0x4233f6(0x45a)][_0x4233f6(0x511)](this);else{if('jGGKB'!=='njhly')return!![];else this[_0x4233f6(0x5ca)]['x']=this[_0x4233f6(0x54b)](this['_anchor']['x'],this[_0x4233f6(0x5c2)]['x']),this['_anchor']['y']=this['applyEasing'](this[_0x4233f6(0x5ca)]['y'],this[_0x4233f6(0x5c2)]['y']);}},SceneManager[_0x551b1e(0x3b7)]=function(_0x31e308){const _0xa182eb=_0x551b1e;if(_0x31e308 instanceof Error)this[_0xa182eb(0x787)](_0x31e308);else _0x31e308 instanceof Array&&_0x31e308[0x0]===_0xa182eb(0x444)?this['catchLoadError'](_0x31e308):_0xa182eb(0x7f2)!==_0xa182eb(0x7f2)?(_0x979b5f[_0xa182eb(0x55a)]>0x0?_0x44093c+=_0x51bf49+'\x0a\x0a\x0a\x0a\x0a':_0x143412+=_0x16e49c+'〖〖〖\x20Troop\x20%1:\x20%2\x20Script\x20〗〗〗\x0a\x0a'[_0xa182eb(0x7cb)](_0x41f4f7,_0xd78bf6[_0xa182eb(0x8aa)]||_0xa182eb(0x699))+_0x1b6407,_0x2a1976+=_0x430007[_0xa182eb(0x7cb)](_0x3f547a,_0x4e993a)):this[_0xa182eb(0x281)](_0x31e308);this['stop']();},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x397)]=BattleManager[_0x551b1e(0x37a)],BattleManager[_0x551b1e(0x37a)]=function(){const _0x3a656c=_0x551b1e;if(VisuMZ[_0x3a656c(0x2d6)][_0x3a656c(0x47b)][_0x3a656c(0x862)][_0x3a656c(0x768)]){if(_0x3a656c(0x464)!==_0x3a656c(0x391))this[_0x3a656c(0x72b)]();else{var _0x217748=_0x82bc0e(_0xe118e8['$1']);try{_0x181bd2+=_0x501d7c(_0x217748);}catch(_0x57bd89){if(_0x1373a2[_0x3a656c(0x376)]())_0x293f7f[_0x3a656c(0x538)](_0x57bd89);}}}else return VisuMZ['CoreEngine'][_0x3a656c(0x397)][_0x3a656c(0x511)](this);},BattleManager[_0x551b1e(0x72b)]=function(){const _0x164515=_0x551b1e;return $gameParty[_0x164515(0x821)](),SoundManager[_0x164515(0x3a2)](),this[_0x164515(0x3cc)](),!![];},BattleManager['isTpb']=function(){const _0x1c9768=_0x551b1e;return $gameSystem[_0x1c9768(0x68d)]()>=0x1;},BattleManager[_0x551b1e(0x2ba)]=function(){return $gameSystem['getBattleSystem']()===0x1;},VisuMZ['CoreEngine'][_0x551b1e(0x8f6)]=Game_Temp[_0x551b1e(0x5ff)][_0x551b1e(0x5fc)],Game_Temp['prototype'][_0x551b1e(0x5fc)]=function(){const _0x400a1d=_0x551b1e;VisuMZ[_0x400a1d(0x2d6)][_0x400a1d(0x8f6)][_0x400a1d(0x511)](this),this[_0x400a1d(0x499)](),this[_0x400a1d(0x85f)]();},Game_Temp[_0x551b1e(0x5ff)][_0x551b1e(0x499)]=function(){const _0x5ea73f=_0x551b1e;if(VisuMZ['CoreEngine'][_0x5ea73f(0x47b)][_0x5ea73f(0x862)][_0x5ea73f(0x21d)]){if(_0x5ea73f(0x85b)!==_0x5ea73f(0x73c))this[_0x5ea73f(0x7c2)]=![];else return 7.5625*_0x644149*_0x3c1d3b;}},Game_Temp['prototype'][_0x551b1e(0x85f)]=function(){const _0x522764=_0x551b1e;this[_0x522764(0x794)]=[];},Game_Temp[_0x551b1e(0x5ff)][_0x551b1e(0x38d)]=function(_0x2a2eae,_0xdb187c,_0x329dc4,_0x1bca6e){const _0x147ed8=_0x551b1e;if(!this[_0x147ed8(0x70a)]())return;_0x329dc4=_0x329dc4||![],_0x1bca6e=_0x1bca6e||![];if($dataAnimations[_0xdb187c]){const _0x3dd753={'targets':_0x2a2eae,'animationId':_0xdb187c,'mirror':_0x329dc4,'mute':_0x1bca6e};this[_0x147ed8(0x794)][_0x147ed8(0x41b)](_0x3dd753);for(const _0x1d2f8a of _0x2a2eae){if(_0x147ed8(0x80a)===_0x147ed8(0x80a))_0x1d2f8a[_0x147ed8(0x774)]&&(_0x147ed8(0x7ac)!==_0x147ed8(0x7ac)?(_0x3d5459>=_0xdd861c||_0x1f082d&&_0x25f836===0x1)&&this['smoothSelect']((_0x11b2de-_0x4ae351+_0x1ebc4a)%_0x257bc0):_0x1d2f8a[_0x147ed8(0x774)]());else return this[_0x147ed8(0x8b7)](_0x2e7793(_0x18c90e));}}},Game_Temp[_0x551b1e(0x5ff)][_0x551b1e(0x70a)]=function(){return!![];},Game_Temp[_0x551b1e(0x5ff)][_0x551b1e(0x6bd)]=function(){const _0x3ad63f=_0x551b1e;return this[_0x3ad63f(0x794)][_0x3ad63f(0x566)]();},Game_Temp['prototype'][_0x551b1e(0x6d8)]=function(_0x2af2f5){const _0x3242d3=_0x551b1e;this[_0x3242d3(0x8a8)]=_0x2af2f5;},Game_Temp[_0x551b1e(0x5ff)][_0x551b1e(0x75a)]=function(){const _0x36482d=_0x551b1e;return this[_0x36482d(0x8a8)];},Game_Temp[_0x551b1e(0x5ff)]['clearForcedGameTroopSettingsCoreEngine']=function(){const _0x3a4b76=_0x551b1e;this[_0x3a4b76(0x58e)]=undefined,this[_0x3a4b76(0x705)]=undefined;},Game_Temp[_0x551b1e(0x5ff)][_0x551b1e(0x895)]=function(_0x5aab8e){const _0x57cce8=_0x551b1e;$gameMap&&$dataMap&&$dataMap[_0x57cce8(0x1d3)]&&this['parseForcedGameTroopSettingsCoreEngine']($dataMap[_0x57cce8(0x1d3)]);const _0x5e638c=$dataTroops[_0x5aab8e];if(_0x5e638c){if(_0x57cce8(0x74e)===_0x57cce8(0x31a))this[_0x57cce8(0x8c4)][_0x57cce8(0x4f9)](_0x27127f['layoutSettings'][_0x57cce8(0x7c7)]);else{let _0x56f084=DataManager[_0x57cce8(0x551)](_0x5e638c['id']);this['parseForcedGameTroopSettingsCoreEngine'](_0x56f084);}}},Game_Temp[_0x551b1e(0x5ff)]['parseForcedGameTroopSettingsCoreEngine']=function(_0x2a618d){const _0x3825a4=_0x551b1e;if(!_0x2a618d)return;if(_0x2a618d['match'](/<(?:FRONTVIEW|FRONT VIEW|FV)>/i)){if('sgiiq'===_0x3825a4(0x6fa))this[_0x3825a4(0x58e)]='FV';else return _0x19db60&&this[_0x3825a4(0x8bc)]?this[_0x3825a4(0x8bc)][_0x3825a4(0x5ab)](_0x32a044):_0x4ab5d5[_0x3825a4(0x2d6)]['Window_EquipItem_isEnabled'][_0x3825a4(0x511)](this,_0x2ae02b);}else{if(_0x2a618d[_0x3825a4(0x5b5)](/<(?:SIDEVIEW|SIDE VIEW|SV)>/i))_0x3825a4(0x64e)===_0x3825a4(0x64e)?this[_0x3825a4(0x58e)]='SV':(this[_0x3825a4(0x535)]+=_0x1c7773['round']((_0x10d8be[_0x3825a4(0x66e)]-0x270)/0x2),this[_0x3825a4(0x535)]-=_0x3af00a[_0x3825a4(0x4ad)]((_0x341913[_0x3825a4(0x66e)]-_0x4960a9[_0x3825a4(0x6a5)])/0x2),_0x8443c2[_0x3825a4(0x841)]()?this[_0x3825a4(0x68e)]-=_0x1d89e6[_0x3825a4(0x4ad)]((_0x298061[_0x3825a4(0x652)]-_0x543bc4['boxWidth'])/0x2):this[_0x3825a4(0x68e)]+=_0x4718ca[_0x3825a4(0x4ed)]((_0x2ebf8d['boxWidth']-0x330)/0x2));else{if(_0x2a618d[_0x3825a4(0x5b5)](/<(?:BATTLEVIEW|BATTLE VIEW):[ ](.*)>/i)){const _0x452618=String(RegExp['$1']);if(_0x452618[_0x3825a4(0x5b5)](/(?:FRONTVIEW|FRONT VIEW|FV)/i))_0x3825a4(0x7f7)===_0x3825a4(0x7f7)?this['_forcedTroopView']='FV':_0x38e85d=_0x4d67c7[_0x3825a4(0x46a)](_0x4781d3,_0x270a9b(_0x5dba1e(_0xd4727b)));else _0x452618[_0x3825a4(0x5b5)](/(?:SIDEVIEW|SIDE VIEW|SV)/i)&&(this[_0x3825a4(0x58e)]='SV');}}}if(_0x2a618d['match'](/<(?:DTB)>/i))this[_0x3825a4(0x705)]=0x0;else{if(_0x2a618d[_0x3825a4(0x5b5)](/<(?:TPB|ATB)[ ]ACTIVE>/i)){if(_0x3825a4(0x8fd)===_0x3825a4(0x8fd))this['_forcedBattleSys']=0x1;else{const _0x10590f=_0x20e429[_0x3825a4(0x245)]((_0x3a7fec-_0x4c2a73)/_0x405451,_0x2076c4||'Linear'),_0x19cbf0=_0x12f775[_0x3825a4(0x245)]((_0x497133-_0x31babf+0x1)/_0x1b6e20,_0x9a6588||'Linear'),_0x3b47f9=(_0x22640a-_0x30b027*_0x10590f)/(0x1-_0x10590f);return _0x3b47f9+(_0x5f1bcf-_0x3b47f9)*_0x19cbf0;}}else{if(_0x2a618d[_0x3825a4(0x5b5)](/<(?:TPB|ATB)[ ]WAIT>/i))this[_0x3825a4(0x705)]=0x2;else{if(_0x2a618d[_0x3825a4(0x5b5)](/<(?:CTB)>/i))Imported['VisuMZ_2_BattleSystemCTB']&&(this[_0x3825a4(0x705)]=_0x3825a4(0x8c1));else{if(_0x2a618d[_0x3825a4(0x5b5)](/<(?:STB)>/i))Imported[_0x3825a4(0x3d0)]&&(this['_forcedBattleSys']=_0x3825a4(0x1fd));else{if(_0x2a618d[_0x3825a4(0x5b5)](/<(?:BTB)>/i)){if(Imported[_0x3825a4(0x76c)]){if('AibDj'!=='AibDj'){if(_0xbc17f8[_0x3825a4(0x376)]())_0x289429[_0x3825a4(0x538)](_0x53595f);}else this[_0x3825a4(0x705)]=_0x3825a4(0x569);}}else{if(_0x2a618d['match'](/<(?:FTB)>/i)){if('IrjzK'!=='IrjzK'){if(_0x54f2a2[_0x3825a4(0x5b5)](/backspace/i))return this[_0x3825a4(0x568)]===0x8;if(_0x423409['match'](/enter/i))return this['_inputSpecialKeyCode']===0xd;if(_0xef4090[_0x3825a4(0x5b5)](/escape/i))return this[_0x3825a4(0x568)]===0x1b;}else Imported[_0x3825a4(0x433)]&&(this[_0x3825a4(0x705)]=_0x3825a4(0x4fd));}else{if(_0x2a618d[_0x3825a4(0x5b5)](/<(?:OTB)>/i)){if(Imported['VisuMZ_2_BattleSystemOTB']){if('PrjqZ'!==_0x3825a4(0x874))this[_0x3825a4(0x705)]='OTB';else return _0x42e133['layoutSettings'][_0x3825a4(0x616)][_0x3825a4(0x511)](this);}}else{if(_0x2a618d[_0x3825a4(0x5b5)](/<(?:ETB)>/i))Imported[_0x3825a4(0x7a2)]&&(this['_forcedBattleSys']=_0x3825a4(0x233));else{if(_0x2a618d[_0x3825a4(0x5b5)](/<(?:PTB)>/i)){if(Imported[_0x3825a4(0x762)]){if(_0x3825a4(0x5bf)===_0x3825a4(0x6ce)){_0x1250e5['CoreEngine'][_0x3825a4(0x4d3)][_0x3825a4(0x511)](this,_0x170779);if(_0x59c0c8[_0x3825a4(0x2d6)][_0x3825a4(0x47b)][_0x3825a4(0x862)][_0x3825a4(0x4d5)])return;const _0x55e96f=_0x162302['result']();_0x55e96f[_0x3825a4(0x28e)]&&(0x1-this[_0x3825a4(0x865)](_0xb24d5d)>this[_0x3825a4(0x917)](_0x22cb61)&&(_0x55e96f[_0x3825a4(0x28e)]=![],_0x55e96f[_0x3825a4(0x2ae)]=!![]));}else this['_forcedBattleSys']=_0x3825a4(0x636);}}else{if(_0x2a618d['match'](/<(?:BATTLEVIEW|BATTLE VIEW):[ ](.*)>/i)){if(_0x3825a4(0x363)!==_0x3825a4(0x363))return _0x3825a4(0x4fd);else{const _0x5539=String(RegExp['$1']);if(_0x5539[_0x3825a4(0x5b5)](/DTB/i))this[_0x3825a4(0x705)]=0x0;else{if(_0x5539[_0x3825a4(0x5b5)](/(?:TPB|ATB)[ ]ACTIVE/i))this[_0x3825a4(0x705)]=0x1;else{if(_0x5539['match'](/(?:TPB|ATB)[ ]WAIT/i))this['_forcedBattleSys']=0x2;else{if(_0x5539['match'](/CTB/i))Imported[_0x3825a4(0x239)]&&(this['_forcedBattleSys']=_0x3825a4(0x8c1));else{if(_0x5539['match'](/STB/i))Imported[_0x3825a4(0x3d0)]&&(this[_0x3825a4(0x705)]='STB');else{if(_0x5539[_0x3825a4(0x5b5)](/BTB/i)){if(Imported[_0x3825a4(0x76c)]){if('IAwGI'!==_0x3825a4(0x34d))return _0x3c686d[_0x3825a4(0x383)]['OptionsRect'][_0x3825a4(0x511)](this);else this[_0x3825a4(0x705)]=_0x3825a4(0x569);}}else{if(_0x5539[_0x3825a4(0x5b5)](/FTB/i)){if(_0x3825a4(0x1fc)!==_0x3825a4(0x1fc)){var _0x51750=_0x1a5f5a(_0x2162fd['$1']);_0x3ebf06*=_0x51750;}else{if(Imported[_0x3825a4(0x433)]){if(_0x3825a4(0x3af)!==_0x3825a4(0x650))this['_forcedBattleSys']=_0x3825a4(0x4fd);else return _0x3a8cda[_0x3825a4(0x3f5)]||_0x3825a4(0x3f5);}}}else{if(_0x5539[_0x3825a4(0x5b5)](/OTB/i))Imported[_0x3825a4(0x5d3)]&&(this[_0x3825a4(0x705)]=_0x3825a4(0x8dd));else{if(_0x5539[_0x3825a4(0x5b5)](/ETB/i))Imported['VisuMZ_2_BattleSystemETB']&&(this[_0x3825a4(0x705)]=_0x3825a4(0x233));else _0x5539['match'](/PTB/i)&&(Imported['VisuMZ_2_BattleSystemPTB']&&(this[_0x3825a4(0x705)]=_0x3825a4(0x636)));}}}}}}}}}}}}}}}}}}}}},VisuMZ['CoreEngine']['Game_System_initialize']=Game_System[_0x551b1e(0x5ff)][_0x551b1e(0x5fc)],Game_System[_0x551b1e(0x5ff)][_0x551b1e(0x5fc)]=function(){const _0x4bc577=_0x551b1e;VisuMZ['CoreEngine'][_0x4bc577(0x91f)]['call'](this),this['initCoreEngine']();},Game_System['prototype'][_0x551b1e(0x89c)]=function(){const _0xc69773=_0x551b1e;this[_0xc69773(0x6ee)]={'SideView':$dataSystem[_0xc69773(0x33a)],'BattleSystem':this['initialBattleSystem'](),'FontSize':$dataSystem['advanced']['fontSize'],'Padding':0xc};},Game_System[_0x551b1e(0x5ff)][_0x551b1e(0x841)]=function(){const _0x18848a=_0x551b1e;if($gameTemp[_0x18848a(0x58e)]==='SV')return!![];else{if($gameTemp[_0x18848a(0x58e)]==='FV')return'LCtpV'===_0x18848a(0x871)?_0x9aca39[_0x18848a(0x2d6)][_0x18848a(0x24f)]['call'](this,_0x565c8f):![];}if(this['_CoreEngineSettings']===undefined)this['initCoreEngine']();if(this[_0x18848a(0x6ee)][_0x18848a(0x591)]===undefined)this['initCoreEngine']();return this['_CoreEngineSettings'][_0x18848a(0x591)];},Game_System['prototype'][_0x551b1e(0x74f)]=function(_0x5137f5){const _0x170068=_0x551b1e;if(this[_0x170068(0x6ee)]===undefined)this[_0x170068(0x89c)]();if(this['_CoreEngineSettings'][_0x170068(0x591)]===undefined)this[_0x170068(0x89c)]();this['_CoreEngineSettings'][_0x170068(0x591)]=_0x5137f5;},Game_System['prototype']['resetBattleSystem']=function(){const _0x5c13dc=_0x551b1e;if(this['_CoreEngineSettings']===undefined)this[_0x5c13dc(0x89c)]();this[_0x5c13dc(0x6ee)][_0x5c13dc(0x34a)]=this['initialBattleSystem']();},Game_System['prototype'][_0x551b1e(0x785)]=function(){const _0x363dc6=_0x551b1e,_0x4b9572=(VisuMZ[_0x363dc6(0x2d6)][_0x363dc6(0x47b)][_0x363dc6(0x34a)]||_0x363dc6(0x81b))[_0x363dc6(0x724)]()['trim']();return VisuMZ[_0x363dc6(0x2d6)][_0x363dc6(0x657)](_0x4b9572);},Game_System[_0x551b1e(0x5ff)]['getBattleSystem']=function(){const _0x5597a0=_0x551b1e;if($gameTemp[_0x5597a0(0x705)]!==undefined)return'LhAeJ'!==_0x5597a0(0x306)?this[_0x5597a0(0x3b1)]()['filter'](_0x221faa=>this[_0x5597a0(0x1b7)](_0x221faa)&&this['skillTypes']()[_0x5597a0(0x82f)](_0x221faa[_0x5597a0(0x56a)])):$gameTemp[_0x5597a0(0x705)];if(this[_0x5597a0(0x6ee)]===undefined)this[_0x5597a0(0x89c)]();if(this[_0x5597a0(0x6ee)][_0x5597a0(0x34a)]===undefined)this[_0x5597a0(0x366)]();return this[_0x5597a0(0x6ee)][_0x5597a0(0x34a)];},Game_System[_0x551b1e(0x5ff)]['setBattleSystem']=function(_0x263c6e){const _0x382f79=_0x551b1e;if(this[_0x382f79(0x6ee)]===undefined)this[_0x382f79(0x89c)]();if(this[_0x382f79(0x6ee)][_0x382f79(0x34a)]===undefined)this['resetBattleSystem']();this[_0x382f79(0x6ee)][_0x382f79(0x34a)]=_0x263c6e;},Game_System[_0x551b1e(0x5ff)][_0x551b1e(0x64a)]=function(){const _0x4b3e03=_0x551b1e;if(this[_0x4b3e03(0x6ee)]===undefined)this[_0x4b3e03(0x89c)]();if(this[_0x4b3e03(0x6ee)][_0x4b3e03(0x5ba)]===undefined)this[_0x4b3e03(0x89c)]();return this['_CoreEngineSettings'][_0x4b3e03(0x5ba)];},Game_System[_0x551b1e(0x5ff)][_0x551b1e(0x497)]=function(_0x3b72a2){const _0x9f7bd5=_0x551b1e;if(this[_0x9f7bd5(0x6ee)]===undefined)this[_0x9f7bd5(0x89c)]();if(this['_CoreEngineSettings'][_0x9f7bd5(0x7d3)]===undefined)this[_0x9f7bd5(0x89c)]();this[_0x9f7bd5(0x6ee)][_0x9f7bd5(0x5ba)]=_0x3b72a2;},Game_System['prototype'][_0x551b1e(0x727)]=function(){const _0x172012=_0x551b1e;if(this[_0x172012(0x6ee)]===undefined)this[_0x172012(0x89c)]();if(this['_CoreEngineSettings'][_0x172012(0x82b)]===undefined)this[_0x172012(0x89c)]();return this[_0x172012(0x6ee)][_0x172012(0x82b)];},Game_System[_0x551b1e(0x5ff)]['setWindowPadding']=function(_0x145ebb){const _0x5b7e89=_0x551b1e;if(this[_0x5b7e89(0x6ee)]===undefined)this['initCoreEngine']();if(this[_0x5b7e89(0x6ee)][_0x5b7e89(0x7d3)]===undefined)this['initCoreEngine']();this[_0x5b7e89(0x6ee)][_0x5b7e89(0x82b)]=_0x145ebb;},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x789)]=Game_Screen[_0x551b1e(0x5ff)][_0x551b1e(0x5fc)],Game_Screen[_0x551b1e(0x5ff)][_0x551b1e(0x5fc)]=function(){const _0xd87689=_0x551b1e;VisuMZ[_0xd87689(0x2d6)]['Game_Screen_initialize'][_0xd87689(0x511)](this),this[_0xd87689(0x8e6)]();},Game_Screen[_0x551b1e(0x5ff)][_0x551b1e(0x8e6)]=function(){const _0x34ecb6=_0x551b1e,_0xc3f8fd=VisuMZ['CoreEngine'][_0x34ecb6(0x47b)][_0x34ecb6(0x512)];this[_0x34ecb6(0x254)]=_0xc3f8fd?.[_0x34ecb6(0x7c4)]||_0x34ecb6(0x920);},Game_Screen[_0x551b1e(0x5ff)]['getCoreEngineScreenShakeStyle']=function(){const _0x376513=_0x551b1e;if(this[_0x376513(0x254)]===undefined)this[_0x376513(0x8e6)]();return this[_0x376513(0x254)];},Game_Screen[_0x551b1e(0x5ff)][_0x551b1e(0x6a3)]=function(_0x286847){const _0x500867=_0x551b1e;if(this[_0x500867(0x254)]===undefined)this['initCoreEngineScreenShake']();this[_0x500867(0x254)]=_0x286847[_0x500867(0x8f1)]()[_0x500867(0x49e)]();},Game_Picture[_0x551b1e(0x5ff)]['isMapScrollLinked']=function(){const _0x10a859=_0x551b1e;if($gameParty['inBattle']())return![];return this['name']()&&this['name']()[_0x10a859(0x290)](0x0)==='!';},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x744)]=Game_Picture[_0x551b1e(0x5ff)]['x'],Game_Picture['prototype']['x']=function(){const _0x33a001=_0x551b1e;if(this[_0x33a001(0x708)]()){if('WMipT'!==_0x33a001(0x1fe))return this[_0x33a001(0x210)]();else _0x3862ee=_0x5d65bd[_0x33a001(0x6a5)]-_0x3fd7ed;}else return _0x33a001(0x308)===_0x33a001(0x208)?_0x45abae[_0x33a001(0x2d6)][_0x33a001(0x47b)][_0x33a001(0x685)][_0x33a001(0x265)]:VisuMZ[_0x33a001(0x2d6)][_0x33a001(0x744)][_0x33a001(0x511)](this);},Game_Picture['prototype'][_0x551b1e(0x210)]=function(){const _0x1241f1=_0x551b1e,_0xeadf5d=$gameMap[_0x1241f1(0x6d9)]()*$gameMap[_0x1241f1(0x54c)]();return this['_x']-_0xeadf5d;},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x86c)]=Game_Picture[_0x551b1e(0x5ff)]['y'],Game_Picture[_0x551b1e(0x5ff)]['y']=function(){const _0x43efab=_0x551b1e;if(this[_0x43efab(0x708)]()){if(_0x43efab(0x1da)==='boerU')this[_0x43efab(0x705)]='STB';else return this[_0x43efab(0x1e7)]();}else return VisuMZ[_0x43efab(0x2d6)][_0x43efab(0x86c)][_0x43efab(0x511)](this);},Game_Picture[_0x551b1e(0x5ff)][_0x551b1e(0x1e7)]=function(){const _0xf5d83=_0x551b1e,_0x3c53a6=$gameMap['displayY']()*$gameMap[_0xf5d83(0x369)]();return this['_y']-_0x3c53a6;},Game_Picture[_0x551b1e(0x5ff)]['setEasingType']=function(_0x58cd9d){const _0x461d23=_0x551b1e;this[_0x461d23(0x5ea)]=_0x58cd9d;},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x6d2)]=Game_Picture['prototype'][_0x551b1e(0x4ec)],Game_Picture[_0x551b1e(0x5ff)][_0x551b1e(0x4ec)]=function(_0x1818c5){const _0x130f31=_0x551b1e;this[_0x130f31(0x5ea)]=this[_0x130f31(0x5ea)]||0x0;if([0x0,0x1,0x2,0x3]['includes'](this['_coreEasingType'])){if(_0x130f31(0x4e3)==='EmzfO'){if(_0x3c1d6e[_0x130f31(0x3f9)]())return'default';return _0x40020a[_0x130f31(0x2d6)][_0x130f31(0x47b)]['KeyboardInput'][_0x130f31(0x7e9)]||_0x130f31(0x513);}else return VisuMZ[_0x130f31(0x2d6)]['Game_Picture_calcEasing'][_0x130f31(0x511)](this,_0x1818c5);}else return VisuMZ[_0x130f31(0x245)](_0x1818c5,this[_0x130f31(0x5ea)]);},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x39e)]=Game_Action[_0x551b1e(0x5ff)][_0x551b1e(0x917)],Game_Action[_0x551b1e(0x5ff)][_0x551b1e(0x917)]=function(_0xd75f6){const _0x1efa94=_0x551b1e;return VisuMZ[_0x1efa94(0x2d6)]['Settings'][_0x1efa94(0x862)]['ImprovedAccuracySystem']?this[_0x1efa94(0x64f)](_0xd75f6):_0x1efa94(0x583)!=='raxRh'?VisuMZ[_0x1efa94(0x2d6)][_0x1efa94(0x39e)][_0x1efa94(0x511)](this,_0xd75f6):_0x1efa94(0x569);},Game_Action['prototype'][_0x551b1e(0x64f)]=function(_0x1c0f03){const _0x484459=_0x551b1e,_0x1c331c=this[_0x484459(0x3f7)](_0x1c0f03),_0x37af19=this[_0x484459(0x7a5)](_0x1c0f03),_0x4c621e=this[_0x484459(0x586)](_0x1c0f03);return _0x1c331c*(_0x37af19-_0x4c621e);},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x24f)]=Game_Action['prototype'][_0x551b1e(0x865)],Game_Action[_0x551b1e(0x5ff)][_0x551b1e(0x865)]=function(_0x33524d){const _0x426e50=_0x551b1e;return VisuMZ[_0x426e50(0x2d6)]['Settings'][_0x426e50(0x862)][_0x426e50(0x4d5)]?_0x426e50(0x74a)==='reOCc'?0x0:this[_0x426e50(0x429)]():_0x426e50(0x6d1)===_0x426e50(0x4fc)?_0x5b35c9(_0x482812)[_0x426e50(0x7ed)](_0x15a810,_0x13ffa3)+'.':VisuMZ[_0x426e50(0x2d6)][_0x426e50(0x24f)][_0x426e50(0x511)](this,_0x33524d);},Game_Action['prototype'][_0x551b1e(0x3f7)]=function(_0xcc38c1){const _0x25128b=_0x551b1e;return this[_0x25128b(0x35f)]()['successRate']*0.01;},Game_Action[_0x551b1e(0x5ff)][_0x551b1e(0x7a5)]=function(_0x1d2865){const _0x410a7b=_0x551b1e;if(VisuMZ[_0x410a7b(0x2d6)][_0x410a7b(0x47b)]['QoL'][_0x410a7b(0x7ae)]&&this[_0x410a7b(0x814)]())return 0x1;if(this['isPhysical']()){if('cmqSa'!==_0x410a7b(0x74d)){if(VisuMZ[_0x410a7b(0x2d6)][_0x410a7b(0x47b)][_0x410a7b(0x862)]['AccuracyBoost']&&this[_0x410a7b(0x403)]()['isActor']()){if(_0x410a7b(0x48f)!==_0x410a7b(0x48f)){var _0x5b1ec5=_0x4f5e6e(_0x1697fc['$1'])/0x64;_0x5b2bfc+=_0x5b1ec5;}else return this[_0x410a7b(0x403)]()[_0x410a7b(0x651)]+0.05;}else return this[_0x410a7b(0x403)]()[_0x410a7b(0x651)];}else{if(this[_0x410a7b(0x607)][_0x410a7b(0x305)])this[_0x410a7b(0x607)]['_optionsWindow']['refresh']();if(this['_scene'][_0x410a7b(0x879)])this[_0x410a7b(0x607)][_0x410a7b(0x879)][_0x410a7b(0x429)]();}}else return 0x1;},Game_Action['prototype'][_0x551b1e(0x586)]=function(_0x42748c){const _0xcdca46=_0x551b1e;if(this['subject']()[_0xcdca46(0x4e5)]()===_0x42748c[_0xcdca46(0x4e5)]())return 0x0;if(this[_0xcdca46(0x4a1)]()){if(VisuMZ[_0xcdca46(0x2d6)]['Settings'][_0xcdca46(0x862)][_0xcdca46(0x7ae)]&&_0x42748c[_0xcdca46(0x454)]())return _0x42748c[_0xcdca46(0x1c9)]-0.05;else{if(_0xcdca46(0x859)==='LXinR')return _0x42748c['eva'];else _0x2f7100[_0xcdca46(0x2d6)][_0xcdca46(0x6c3)][_0xcdca46(0x511)](this);}}else return this[_0xcdca46(0x483)]()?_0x42748c[_0xcdca46(0x30f)]:0x0;},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x4d3)]=Game_Action[_0x551b1e(0x5ff)][_0x551b1e(0x666)],Game_Action['prototype']['updateLastTarget']=function(_0xfe4c2f){const _0x49d0a6=_0x551b1e;VisuMZ[_0x49d0a6(0x2d6)][_0x49d0a6(0x4d3)][_0x49d0a6(0x511)](this,_0xfe4c2f);if(VisuMZ[_0x49d0a6(0x2d6)][_0x49d0a6(0x47b)][_0x49d0a6(0x862)][_0x49d0a6(0x4d5)])return;const _0x26ce3c=_0xfe4c2f[_0x49d0a6(0x3dd)]();_0x26ce3c[_0x49d0a6(0x28e)]&&(0x1-this['itemEva'](_0xfe4c2f)>this[_0x49d0a6(0x917)](_0xfe4c2f)&&(_0x26ce3c[_0x49d0a6(0x28e)]=![],_0x26ce3c[_0x49d0a6(0x2ae)]=!![]));},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x255)]=Game_BattlerBase['prototype'][_0x551b1e(0x3b4)],Game_BattlerBase['prototype']['initMembers']=function(){const _0x444d81=_0x551b1e;this['_cache']={},VisuMZ[_0x444d81(0x2d6)][_0x444d81(0x255)][_0x444d81(0x511)](this);},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x5a4)]=Game_BattlerBase[_0x551b1e(0x5ff)][_0x551b1e(0x429)],Game_BattlerBase[_0x551b1e(0x5ff)][_0x551b1e(0x429)]=function(){const _0x19411c=_0x551b1e;this[_0x19411c(0x218)]={},VisuMZ['CoreEngine'][_0x19411c(0x5a4)][_0x19411c(0x511)](this);},Game_BattlerBase[_0x551b1e(0x5ff)]['checkCacheKey']=function(_0x3cc652){const _0x348fc3=_0x551b1e;return this[_0x348fc3(0x218)]=this[_0x348fc3(0x218)]||{},this[_0x348fc3(0x218)][_0x3cc652]!==undefined;},Game_BattlerBase[_0x551b1e(0x5ff)][_0x551b1e(0x547)]=function(_0x15f5bd){const _0x4ef022=(_0x54a961,_0x53523b)=>{const _0x3f3a41=_0x586d;if(!_0x53523b)return _0x54a961;if(_0x53523b[_0x3f3a41(0x1d3)][_0x3f3a41(0x5b5)](VisuMZ[_0x3f3a41(0x2d6)][_0x3f3a41(0x367)][_0x3f3a41(0x547)][_0x15f5bd])){var _0x216835=Number(RegExp['$1']);_0x54a961+=_0x216835;}if(_0x53523b[_0x3f3a41(0x1d3)]['match'](VisuMZ[_0x3f3a41(0x2d6)][_0x3f3a41(0x367)][_0x3f3a41(0x7e1)][_0x15f5bd])){var _0x2ded9d=String(RegExp['$1']);try{_0x54a961+=eval(_0x2ded9d);}catch(_0x534641){if(_0x3f3a41(0x346)===_0x3f3a41(0x3e2))_0x5ef725[_0x3f3a41(0x86a)]();else{if($gameTemp[_0x3f3a41(0x376)]())console[_0x3f3a41(0x538)](_0x534641);}}}return _0x54a961;};return this['traitObjects']()['reduce'](_0x4ef022,this['_paramPlus'][_0x15f5bd]);},Game_BattlerBase[_0x551b1e(0x5ff)][_0x551b1e(0x716)]=function(_0x1c3fc4){const _0x2394a6=_0x551b1e;var _0x8149fc=_0x2394a6(0x24a)+(this['isActor']()?'Actor':_0x2394a6(0x758))+_0x2394a6(0x8a1)+_0x1c3fc4;if(this[_0x2394a6(0x1ce)](_0x8149fc))return this[_0x2394a6(0x218)][_0x8149fc];this[_0x2394a6(0x218)][_0x8149fc]=eval(VisuMZ['CoreEngine']['Settings'][_0x2394a6(0x698)][_0x8149fc]);const _0x3fbeda=(_0x934ae4,_0x4576e8)=>{const _0x577954=_0x2394a6;if(_0x577954(0x4a6)===_0x577954(0x4a6)){if(!_0x4576e8)return _0x934ae4;if(_0x4576e8['note'][_0x577954(0x5b5)](VisuMZ[_0x577954(0x2d6)][_0x577954(0x367)][_0x577954(0x716)][_0x1c3fc4])){var _0x44737c=Number(RegExp['$1']);if(_0x44737c===0x0)_0x44737c=Number[_0x577954(0x4f3)];_0x934ae4=Math[_0x577954(0x46a)](_0x934ae4,_0x44737c);}if(_0x4576e8['note'][_0x577954(0x5b5)](VisuMZ['CoreEngine'][_0x577954(0x367)][_0x577954(0x1c6)][_0x1c3fc4])){if('ZJfaL'!=='ZJfaL')return this[_0x577954(0x607)]&&this[_0x577954(0x607)][_0x577954(0x539)]===_0x2c9823;else{var _0x28afa7=String(RegExp['$1']);try{_0x577954(0x5bd)!==_0x577954(0x680)?_0x934ae4=Math[_0x577954(0x46a)](_0x934ae4,Number(eval(_0x28afa7))):(this[_0x577954(0x7e7)]=_0x9a798c[_0x577954(0x2d6)]['Settings'][_0x577954(0x862)][_0x577954(0x7c3)],this[_0x577954(0x30a)]=_0x2c57f8['CoreEngine'][_0x577954(0x47b)][_0x577954(0x862)][_0x577954(0x717)]);}catch(_0x568327){if($gameTemp[_0x577954(0x376)]())console['log'](_0x568327);}}}return _0x934ae4;}else throw _0x28c2ce;};if(this[_0x2394a6(0x218)][_0x8149fc]===0x0)this[_0x2394a6(0x218)][_0x8149fc]=Number[_0x2394a6(0x4f3)];return this[_0x2394a6(0x218)][_0x8149fc]=this[_0x2394a6(0x3f2)]()['reduce'](_0x3fbeda,this['_cache'][_0x8149fc]),this['_cache'][_0x8149fc];},Game_BattlerBase[_0x551b1e(0x5ff)][_0x551b1e(0x87e)]=function(_0x526f57){const _0x261261=_0x551b1e,_0x1ddc4f=this[_0x261261(0x8c7)](Game_BattlerBase['TRAIT_PARAM'],_0x526f57),_0x49402a=(_0x1e49c7,_0x1091b8)=>{const _0x3778da=_0x261261;if('Zdkkg'!==_0x3778da(0x2cb)){if(!_0x1091b8)return _0x1e49c7;if(_0x1091b8[_0x3778da(0x1d3)][_0x3778da(0x5b5)](VisuMZ['CoreEngine'][_0x3778da(0x367)]['paramRate1'][_0x526f57])){var _0x1d062d=Number(RegExp['$1'])/0x64;_0x1e49c7*=_0x1d062d;}if(_0x1091b8[_0x3778da(0x1d3)]['match'](VisuMZ[_0x3778da(0x2d6)][_0x3778da(0x367)]['paramRate2'][_0x526f57])){var _0x1d062d=Number(RegExp['$1']);_0x1e49c7*=_0x1d062d;}if(_0x1091b8[_0x3778da(0x1d3)]['match'](VisuMZ[_0x3778da(0x2d6)][_0x3778da(0x367)][_0x3778da(0x246)][_0x526f57])){var _0x1adbf9=String(RegExp['$1']);try{_0x1e49c7*=eval(_0x1adbf9);}catch(_0x23a5e3){if($gameTemp[_0x3778da(0x376)]())console[_0x3778da(0x538)](_0x23a5e3);}}return _0x1e49c7;}else return _0x18fd08[_0x3778da(0x383)][_0x3778da(0x776)][_0x3778da(0x511)](this);};return this[_0x261261(0x3f2)]()['reduce'](_0x49402a,_0x1ddc4f);},Game_BattlerBase['prototype'][_0x551b1e(0x2c2)]=function(_0x14e133){const _0x6a4599=_0x551b1e,_0x2bc8e=(_0x2b45ab,_0x50bd90)=>{const _0x410405=_0x586d;if(!_0x50bd90)return _0x2b45ab;if(_0x50bd90[_0x410405(0x1d3)][_0x410405(0x5b5)](VisuMZ[_0x410405(0x2d6)][_0x410405(0x367)][_0x410405(0x799)][_0x14e133])){var _0x5026ba=Number(RegExp['$1']);_0x2b45ab+=_0x5026ba;}if(_0x50bd90[_0x410405(0x1d3)][_0x410405(0x5b5)](VisuMZ['CoreEngine'][_0x410405(0x367)][_0x410405(0x525)][_0x14e133])){var _0x20a801=String(RegExp['$1']);try{_0x2b45ab+=eval(_0x20a801);}catch(_0x6107c4){if($gameTemp[_0x410405(0x376)]())console[_0x410405(0x538)](_0x6107c4);}}return _0x2b45ab;};return this[_0x6a4599(0x3f2)]()[_0x6a4599(0x5e4)](_0x2bc8e,0x0);},Game_BattlerBase[_0x551b1e(0x5ff)][_0x551b1e(0x55f)]=function(_0x319656){const _0xba2a89=_0x551b1e;let _0x374a12=_0xba2a89(0x55f)+_0x319656+_0xba2a89(0x342);if(this[_0xba2a89(0x1ce)](_0x374a12))return this[_0xba2a89(0x218)][_0x374a12];return this[_0xba2a89(0x218)][_0x374a12]=Math[_0xba2a89(0x4ed)](VisuMZ['CoreEngine'][_0xba2a89(0x47b)][_0xba2a89(0x698)][_0xba2a89(0x7d8)][_0xba2a89(0x511)](this,_0x319656)),this[_0xba2a89(0x218)][_0x374a12];},Game_BattlerBase[_0x551b1e(0x5ff)]['xparamPlus']=function(_0x22d053){const _0x411222=_0x551b1e,_0x457a41=(_0x4793a9,_0x421a90)=>{const _0x537f37=_0x586d;if(!_0x421a90)return _0x4793a9;if(_0x421a90[_0x537f37(0x1d3)][_0x537f37(0x5b5)](VisuMZ[_0x537f37(0x2d6)][_0x537f37(0x367)]['xparamPlus1'][_0x22d053])){var _0x3e2862=Number(RegExp['$1'])/0x64;_0x4793a9+=_0x3e2862;}if(_0x421a90[_0x537f37(0x1d3)]['match'](VisuMZ['CoreEngine']['RegExp'][_0x537f37(0x243)][_0x22d053])){var _0x3e2862=Number(RegExp['$1']);_0x4793a9+=_0x3e2862;}if(_0x421a90['note'][_0x537f37(0x5b5)](VisuMZ[_0x537f37(0x2d6)][_0x537f37(0x367)]['xparamPlusJS'][_0x22d053])){var _0xa3e6de=String(RegExp['$1']);try{_0x4793a9+=eval(_0xa3e6de);}catch(_0x1b2e20){if($gameTemp[_0x537f37(0x376)]())console[_0x537f37(0x538)](_0x1b2e20);}}return _0x4793a9;};return this[_0x411222(0x3f2)]()['reduce'](_0x457a41,0x0);},Game_BattlerBase[_0x551b1e(0x5ff)][_0x551b1e(0x355)]=function(_0x4c2612){const _0x4c6eb5=_0x551b1e,_0xd9480e=(_0x44d468,_0x3db97c)=>{const _0x170eae=_0x586d;if(!_0x3db97c)return _0x44d468;if(_0x3db97c['note'][_0x170eae(0x5b5)](VisuMZ[_0x170eae(0x2d6)][_0x170eae(0x367)][_0x170eae(0x432)][_0x4c2612])){var _0x4d7d53=Number(RegExp['$1'])/0x64;_0x44d468*=_0x4d7d53;}if(_0x3db97c[_0x170eae(0x1d3)][_0x170eae(0x5b5)](VisuMZ[_0x170eae(0x2d6)][_0x170eae(0x367)][_0x170eae(0x44d)][_0x4c2612])){var _0x4d7d53=Number(RegExp['$1']);_0x44d468*=_0x4d7d53;}if(_0x3db97c[_0x170eae(0x1d3)][_0x170eae(0x5b5)](VisuMZ[_0x170eae(0x2d6)][_0x170eae(0x367)][_0x170eae(0x91a)][_0x4c2612])){var _0x162679=String(RegExp['$1']);try{_0x170eae(0x6b7)!==_0x170eae(0x5c4)?_0x44d468*=eval(_0x162679):_0x4d1ebd+=_0x41dd5c;}catch(_0x4130bc){if(_0x170eae(0x2ee)==='jbQyb')this['_forcedBattleSys']=_0x170eae(0x8c1);else{if($gameTemp['isPlaytest']())console['log'](_0x4130bc);}}}return _0x44d468;};return this[_0x4c6eb5(0x3f2)]()['reduce'](_0xd9480e,0x1);},Game_BattlerBase[_0x551b1e(0x5ff)][_0x551b1e(0x912)]=function(_0x4549b2){const _0x187d41=_0x551b1e,_0x2ca1b1=(_0x354e5b,_0x541b89)=>{const _0x91c69=_0x586d;if(!_0x541b89)return _0x354e5b;if(_0x541b89['note']['match'](VisuMZ[_0x91c69(0x2d6)][_0x91c69(0x367)][_0x91c69(0x6c4)][_0x4549b2])){var _0x5e2516=Number(RegExp['$1'])/0x64;_0x354e5b+=_0x5e2516;}if(_0x541b89[_0x91c69(0x1d3)]['match'](VisuMZ[_0x91c69(0x2d6)][_0x91c69(0x367)][_0x91c69(0x83a)][_0x4549b2])){var _0x5e2516=Number(RegExp['$1']);_0x354e5b+=_0x5e2516;}if(_0x541b89['note'][_0x91c69(0x5b5)](VisuMZ['CoreEngine']['RegExp'][_0x91c69(0x2a9)][_0x4549b2])){var _0x1c2dec=String(RegExp['$1']);try{if(_0x91c69(0x35b)===_0x91c69(0x35b))_0x354e5b+=eval(_0x1c2dec);else{if(_0x357455)_0x5d7b49[_0x91c69(0x384)](_0x165e31);}}catch(_0xb3a432){if($gameTemp[_0x91c69(0x376)]())console[_0x91c69(0x538)](_0xb3a432);}}return _0x354e5b;};return this['traitObjects']()[_0x187d41(0x5e4)](_0x2ca1b1,0x0);},Game_BattlerBase[_0x551b1e(0x5ff)][_0x551b1e(0x621)]=function(_0x10c2a8){const _0x4dbf2c=_0x551b1e;let _0x8ce3bb='xparam'+_0x10c2a8+_0x4dbf2c(0x342);if(this[_0x4dbf2c(0x1ce)](_0x8ce3bb))return this[_0x4dbf2c(0x218)][_0x8ce3bb];return this['_cache'][_0x8ce3bb]=VisuMZ[_0x4dbf2c(0x2d6)][_0x4dbf2c(0x47b)][_0x4dbf2c(0x698)][_0x4dbf2c(0x76d)]['call'](this,_0x10c2a8),this[_0x4dbf2c(0x218)][_0x8ce3bb];},Game_BattlerBase[_0x551b1e(0x5ff)][_0x551b1e(0x5e0)]=function(_0x5f3d5d){const _0x36b549=_0x551b1e,_0x10612a=(_0x571d19,_0x3a29ee)=>{const _0x1eba67=_0x586d;if('nGvOQ'!=='EMPHk'){if(!_0x3a29ee)return _0x571d19;if(_0x3a29ee[_0x1eba67(0x1d3)][_0x1eba67(0x5b5)](VisuMZ['CoreEngine'][_0x1eba67(0x367)][_0x1eba67(0x400)][_0x5f3d5d])){if(_0x1eba67(0x740)===_0x1eba67(0x2f2))return _0x70d0d2[_0x1eba67(0x2d6)][_0x1eba67(0x47b)]['ButtonAssist']['Enable'];else{var _0x577fd5=Number(RegExp['$1'])/0x64;_0x571d19+=_0x577fd5;}}if(_0x3a29ee[_0x1eba67(0x1d3)][_0x1eba67(0x5b5)](VisuMZ[_0x1eba67(0x2d6)][_0x1eba67(0x367)][_0x1eba67(0x684)][_0x5f3d5d])){var _0x577fd5=Number(RegExp['$1']);_0x571d19+=_0x577fd5;}if(_0x3a29ee['note']['match'](VisuMZ[_0x1eba67(0x2d6)][_0x1eba67(0x367)][_0x1eba67(0x298)][_0x5f3d5d])){var _0x508f8a=String(RegExp['$1']);try{if(_0x1eba67(0x8f9)===_0x1eba67(0x8f9))_0x571d19+=eval(_0x508f8a);else{const _0x141245=this[_0x1eba67(0x212)](_0x30f72d),_0xa42746=_0x5f0e2c[_0x1eba67(0x2d6)][_0x1eba67(0x47b)][_0x1eba67(0x698)][_0x1eba67(0x359)][_0x3da8e5],_0x24510d=_0x41340f[_0x1eba67(0x55f)](_0xa42746),_0x15196f=this[_0x1eba67(0x8bc)][_0x1eba67(0x575)](_0xa42746,!![]);this[_0x1eba67(0x32a)](_0x141245['x'],_0x141245['y'],0xa0,_0xa42746,![]),this[_0x1eba67(0x426)](),this[_0x1eba67(0x29a)](_0x15196f,_0x141245['x']+0xa0,_0x141245['y'],0x3c,_0x1eba67(0x619));}}catch(_0x1176b2){if(_0x1eba67(0x3a1)===_0x1eba67(0x3a1)){if($gameTemp[_0x1eba67(0x376)]())console[_0x1eba67(0x538)](_0x1176b2);}else{let _0x3aa891=_0x5ac798[_0x59cdef],_0x41e96=this[_0x1eba67(0x2b0)](_0x3aa891)[_0x1eba67(0x652)],_0x4957cb=_0x130697['floor']((this[_0x1eba67(0x292)][_0x1eba67(0x652)]-_0x41e96)/0x2);this['drawTextEx'](_0x3aa891,_0x4957cb,_0x3b46a9),_0x1d3421+=this[_0x1eba67(0x404)]();}}}return _0x571d19;}else{if(this[_0x1eba67(0x536)])return;_0x1490a6[_0x1eba67(0x2d6)][_0x1eba67(0x7b9)][_0x1eba67(0x511)](this);}};return this[_0x36b549(0x3f2)]()[_0x36b549(0x5e4)](_0x10612a,0x0);},Game_BattlerBase[_0x551b1e(0x5ff)][_0x551b1e(0x411)]=function(_0x433546){const _0x463306=_0x551b1e,_0x5d7adb=(_0x1f4637,_0x13a01d)=>{const _0x49dcf3=_0x586d;if(_0x49dcf3(0x826)===_0x49dcf3(0x645)){if(_0x19a091[_0x49dcf3(0x376)]())_0x2ca919['log'](_0x1c4f75);}else{if(!_0x13a01d)return _0x1f4637;if(_0x13a01d[_0x49dcf3(0x1d3)][_0x49dcf3(0x5b5)](VisuMZ[_0x49dcf3(0x2d6)][_0x49dcf3(0x367)][_0x49dcf3(0x2fa)][_0x433546])){var _0x1af0c4=Number(RegExp['$1'])/0x64;_0x1f4637*=_0x1af0c4;}if(_0x13a01d[_0x49dcf3(0x1d3)][_0x49dcf3(0x5b5)](VisuMZ[_0x49dcf3(0x2d6)][_0x49dcf3(0x367)][_0x49dcf3(0x80e)][_0x433546])){var _0x1af0c4=Number(RegExp['$1']);_0x1f4637*=_0x1af0c4;}if(_0x13a01d[_0x49dcf3(0x1d3)][_0x49dcf3(0x5b5)](VisuMZ[_0x49dcf3(0x2d6)][_0x49dcf3(0x367)][_0x49dcf3(0x59b)][_0x433546])){if(_0x49dcf3(0x45c)==='GhHfi'){var _0x24c719=String(RegExp['$1']);try{_0x1f4637*=eval(_0x24c719);}catch(_0x42343f){if($gameTemp[_0x49dcf3(0x376)]())console['log'](_0x42343f);}}else return!![];}return _0x1f4637;}};return this[_0x463306(0x3f2)]()[_0x463306(0x5e4)](_0x5d7adb,0x1);},Game_BattlerBase['prototype'][_0x551b1e(0x2b7)]=function(_0x328fec){const _0x3165e7=_0x551b1e,_0x255059=(_0x5c9674,_0x391aad)=>{const _0x4197a0=_0x586d;if(!_0x391aad)return _0x5c9674;if(_0x391aad[_0x4197a0(0x1d3)][_0x4197a0(0x5b5)](VisuMZ[_0x4197a0(0x2d6)][_0x4197a0(0x367)]['sparamFlat1'][_0x328fec])){var _0x38ff97=Number(RegExp['$1'])/0x64;_0x5c9674+=_0x38ff97;}if(_0x391aad['note'][_0x4197a0(0x5b5)](VisuMZ[_0x4197a0(0x2d6)][_0x4197a0(0x367)]['sparamFlat2'][_0x328fec])){var _0x38ff97=Number(RegExp['$1']);_0x5c9674+=_0x38ff97;}if(_0x391aad[_0x4197a0(0x1d3)][_0x4197a0(0x5b5)](VisuMZ['CoreEngine'][_0x4197a0(0x367)][_0x4197a0(0x23a)][_0x328fec])){var _0x5d4efd=String(RegExp['$1']);try{_0x5c9674+=eval(_0x5d4efd);}catch(_0x4dd157){if($gameTemp[_0x4197a0(0x376)]())console[_0x4197a0(0x538)](_0x4dd157);}}return _0x5c9674;};return this['traitObjects']()[_0x3165e7(0x5e4)](_0x255059,0x0);},Game_BattlerBase[_0x551b1e(0x5ff)][_0x551b1e(0x5c3)]=function(_0x2f3262){const _0x4d263b=_0x551b1e;let _0x1d36dc=_0x4d263b(0x5c3)+_0x2f3262+'Total';if(this[_0x4d263b(0x1ce)](_0x1d36dc))return this[_0x4d263b(0x218)][_0x1d36dc];return this[_0x4d263b(0x218)][_0x1d36dc]=VisuMZ[_0x4d263b(0x2d6)][_0x4d263b(0x47b)]['Param'][_0x4d263b(0x2d4)][_0x4d263b(0x511)](this,_0x2f3262),this['_cache'][_0x1d36dc];},Game_BattlerBase[_0x551b1e(0x5ff)][_0x551b1e(0x575)]=function(_0x294981,_0x59bcca){const _0x5e6891=_0x551b1e;if(typeof paramId===_0x5e6891(0x297))return this[_0x5e6891(0x55f)](_0x294981);_0x294981=String(_0x294981||'')['toUpperCase']();if(_0x294981===_0x5e6891(0x339))return this[_0x5e6891(0x55f)](0x0);if(_0x294981===_0x5e6891(0x2b4))return this['param'](0x1);if(_0x294981===_0x5e6891(0x3e1))return this[_0x5e6891(0x55f)](0x2);if(_0x294981===_0x5e6891(0x4b2))return this['param'](0x3);if(_0x294981===_0x5e6891(0x5d8))return this[_0x5e6891(0x55f)](0x4);if(_0x294981===_0x5e6891(0x56c))return this[_0x5e6891(0x55f)](0x5);if(_0x294981===_0x5e6891(0x22b))return this[_0x5e6891(0x55f)](0x6);if(_0x294981===_0x5e6891(0x601))return this[_0x5e6891(0x55f)](0x7);if(_0x294981===_0x5e6891(0x639))return _0x59bcca?String(Math[_0x5e6891(0x4ed)](this[_0x5e6891(0x621)](0x0)*0x64))+'%':this[_0x5e6891(0x621)](0x0);if(_0x294981===_0x5e6891(0x202))return _0x59bcca?String(Math[_0x5e6891(0x4ed)](this[_0x5e6891(0x621)](0x1)*0x64))+'%':this[_0x5e6891(0x621)](0x1);if(_0x294981===_0x5e6891(0x4f1))return _0x59bcca?String(Math[_0x5e6891(0x4ed)](this[_0x5e6891(0x621)](0x2)*0x64))+'%':this['xparam'](0x2);if(_0x294981===_0x5e6891(0x41c))return _0x59bcca?String(Math[_0x5e6891(0x4ed)](this[_0x5e6891(0x621)](0x3)*0x64))+'%':this[_0x5e6891(0x621)](0x3);if(_0x294981===_0x5e6891(0x7da))return _0x59bcca?String(Math[_0x5e6891(0x4ed)](this['xparam'](0x4)*0x64))+'%':this[_0x5e6891(0x621)](0x4);if(_0x294981===_0x5e6891(0x3d8))return _0x59bcca?String(Math[_0x5e6891(0x4ed)](this[_0x5e6891(0x621)](0x5)*0x64))+'%':this[_0x5e6891(0x621)](0x5);if(_0x294981===_0x5e6891(0x5e3))return _0x59bcca?String(Math['round'](this[_0x5e6891(0x621)](0x6)*0x64))+'%':this['xparam'](0x6);if(_0x294981===_0x5e6891(0x588))return _0x59bcca?String(Math[_0x5e6891(0x4ed)](this['xparam'](0x7)*0x64))+'%':this[_0x5e6891(0x621)](0x7);if(_0x294981==='MRG')return _0x59bcca?String(Math['round'](this[_0x5e6891(0x621)](0x8)*0x64))+'%':this[_0x5e6891(0x621)](0x8);if(_0x294981===_0x5e6891(0x8c8))return _0x59bcca?String(Math[_0x5e6891(0x4ed)](this[_0x5e6891(0x621)](0x9)*0x64))+'%':this[_0x5e6891(0x621)](0x9);if(_0x294981===_0x5e6891(0x792))return _0x59bcca?String(Math['round'](this[_0x5e6891(0x5c3)](0x0)*0x64))+'%':this['sparam'](0x0);if(_0x294981===_0x5e6891(0x530))return _0x59bcca?String(Math[_0x5e6891(0x4ed)](this[_0x5e6891(0x5c3)](0x1)*0x64))+'%':this['sparam'](0x1);if(_0x294981===_0x5e6891(0x4f5))return _0x59bcca?String(Math['round'](this[_0x5e6891(0x5c3)](0x2)*0x64))+'%':this[_0x5e6891(0x5c3)](0x2);if(_0x294981===_0x5e6891(0x855))return _0x59bcca?String(Math['round'](this[_0x5e6891(0x5c3)](0x3)*0x64))+'%':this[_0x5e6891(0x5c3)](0x3);if(_0x294981===_0x5e6891(0x596))return _0x59bcca?String(Math['round'](this[_0x5e6891(0x5c3)](0x4)*0x64))+'%':this[_0x5e6891(0x5c3)](0x4);if(_0x294981===_0x5e6891(0x35e))return _0x59bcca?String(Math[_0x5e6891(0x4ed)](this[_0x5e6891(0x5c3)](0x5)*0x64))+'%':this[_0x5e6891(0x5c3)](0x5);if(_0x294981===_0x5e6891(0x4a3))return _0x59bcca?String(Math[_0x5e6891(0x4ed)](this['sparam'](0x6)*0x64))+'%':this[_0x5e6891(0x5c3)](0x6);if(_0x294981===_0x5e6891(0x240))return _0x59bcca?String(Math[_0x5e6891(0x4ed)](this[_0x5e6891(0x5c3)](0x7)*0x64))+'%':this['sparam'](0x7);if(_0x294981==='FDR')return _0x59bcca?String(Math[_0x5e6891(0x4ed)](this['sparam'](0x8)*0x64))+'%':this['sparam'](0x8);if(_0x294981===_0x5e6891(0x1e1))return _0x59bcca?String(Math[_0x5e6891(0x4ed)](this['sparam'](0x9)*0x64))+'%':this[_0x5e6891(0x5c3)](0x9);if(VisuMZ[_0x5e6891(0x2d6)][_0x5e6891(0x34b)][_0x294981]){const _0x11bf8e=VisuMZ[_0x5e6891(0x2d6)][_0x5e6891(0x34b)][_0x294981],_0x4eb7ee=this[_0x11bf8e];return VisuMZ[_0x5e6891(0x2d6)][_0x5e6891(0x4b8)][_0x294981]===_0x5e6891(0x336)?_0x4eb7ee:_0x59bcca?String(Math[_0x5e6891(0x4ed)](_0x4eb7ee*0x64))+'%':_0x4eb7ee;}return'';},Game_BattlerBase[_0x551b1e(0x5ff)][_0x551b1e(0x6f4)]=function(){const _0x51f9d1=_0x551b1e;return this['isAlive']()&&this[_0x51f9d1(0x67e)]<this[_0x51f9d1(0x8c2)]*VisuMZ[_0x51f9d1(0x2d6)][_0x51f9d1(0x47b)][_0x51f9d1(0x698)][_0x51f9d1(0x742)];},Game_Battler[_0x551b1e(0x5ff)][_0x551b1e(0x808)]=function(){const _0x123cad=_0x551b1e;SoundManager[_0x123cad(0x1ef)](),this[_0x123cad(0x801)](_0x123cad(0x3e8));},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x7f1)]=Game_Actor[_0x551b1e(0x5ff)][_0x551b1e(0x4b4)],Game_Actor['prototype'][_0x551b1e(0x4b4)]=function(_0x24452d){const _0x308fae=_0x551b1e;if(this['level']>0x63)return this[_0x308fae(0x63d)](_0x24452d);return VisuMZ[_0x308fae(0x2d6)][_0x308fae(0x7f1)][_0x308fae(0x511)](this,_0x24452d);},Game_Actor[_0x551b1e(0x5ff)][_0x551b1e(0x63d)]=function(_0x42c916){const _0x11a1d6=_0x551b1e,_0x210aff=this[_0x11a1d6(0x77a)]()['params'][_0x42c916][0x63],_0x40a5e5=this[_0x11a1d6(0x77a)]()['params'][_0x42c916][0x62];return _0x210aff+(_0x210aff-_0x40a5e5)*(this[_0x11a1d6(0x702)]-0x63);},VisuMZ[_0x551b1e(0x2d6)]['Game_Actor_changeClass']=Game_Actor['prototype'][_0x551b1e(0x836)],Game_Actor[_0x551b1e(0x5ff)]['changeClass']=function(_0x54be9f,_0x2f88ba){const _0x53b4c1=_0x551b1e;$gameTemp[_0x53b4c1(0x466)]=!![],VisuMZ[_0x53b4c1(0x2d6)][_0x53b4c1(0x1a6)][_0x53b4c1(0x511)](this,_0x54be9f,_0x2f88ba),$gameTemp[_0x53b4c1(0x466)]=undefined;},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x4bf)]=Game_Actor['prototype'][_0x551b1e(0x6ac)],Game_Actor[_0x551b1e(0x5ff)][_0x551b1e(0x6ac)]=function(){const _0x3d7a5e=_0x551b1e;VisuMZ['CoreEngine'][_0x3d7a5e(0x4bf)][_0x3d7a5e(0x511)](this);if(!$gameTemp[_0x3d7a5e(0x466)])this[_0x3d7a5e(0x35c)]();},Game_Actor['prototype']['levelUpRecovery']=function(){const _0x49b442=_0x551b1e;this[_0x49b442(0x218)]={};if(VisuMZ[_0x49b442(0x2d6)][_0x49b442(0x47b)]['QoL']['LevelUpFullHp'])this[_0x49b442(0x67e)]=this[_0x49b442(0x8c2)];if(VisuMZ[_0x49b442(0x2d6)][_0x49b442(0x47b)][_0x49b442(0x862)][_0x49b442(0x4b6)])this[_0x49b442(0x720)]=this[_0x49b442(0x195)];},Game_Actor[_0x551b1e(0x5ff)][_0x551b1e(0x1d1)]=function(){const _0xc5caa3=_0x551b1e;if(this[_0xc5caa3(0x675)]())return 0x1;const _0x551f2b=this['nextLevelExp']()-this['currentLevelExp'](),_0x588a68=this[_0xc5caa3(0x89a)]()-this[_0xc5caa3(0x89f)]();return(_0x588a68/_0x551f2b)[_0xc5caa3(0x660)](0x0,0x1);},Game_Actor[_0x551b1e(0x5ff)][_0x551b1e(0x3f2)]=function(){const _0x344ec2=_0x551b1e,_0x4a8f20=Game_Battler[_0x344ec2(0x5ff)][_0x344ec2(0x3f2)][_0x344ec2(0x511)](this);for(const _0x36a023 of this[_0x344ec2(0x745)]()){_0x344ec2(0x580)!=='AsEhz'?this['moveMenuButtonSideButtonLayout']():_0x36a023&&_0x4a8f20[_0x344ec2(0x41b)](_0x36a023);}return _0x4a8f20[_0x344ec2(0x41b)](this['currentClass'](),this[_0x344ec2(0x500)]()),_0x4a8f20;},Object[_0x551b1e(0x750)](Game_Enemy['prototype'],_0x551b1e(0x702),{'get':function(){return this['getLevel']();},'configurable':!![]}),Game_Enemy[_0x551b1e(0x5ff)][_0x551b1e(0x863)]=function(){const _0x4fc405=_0x551b1e;return this[_0x4fc405(0x1b6)]()[_0x4fc405(0x702)];},Game_Enemy['prototype'][_0x551b1e(0x1bc)]=function(){const _0xaa32c5=_0x551b1e;!this[_0xaa32c5(0x88f)]&&(this[_0xaa32c5(0x535)]+=Math['round']((Graphics[_0xaa32c5(0x66e)]-0x270)/0x2),this[_0xaa32c5(0x535)]-=Math[_0xaa32c5(0x4ad)]((Graphics[_0xaa32c5(0x66e)]-Graphics[_0xaa32c5(0x6a5)])/0x2),$gameSystem[_0xaa32c5(0x841)]()?this[_0xaa32c5(0x68e)]-=Math[_0xaa32c5(0x4ad)]((Graphics[_0xaa32c5(0x652)]-Graphics[_0xaa32c5(0x5f5)])/0x2):this[_0xaa32c5(0x68e)]+=Math['round']((Graphics[_0xaa32c5(0x5f5)]-0x330)/0x2)),this[_0xaa32c5(0x88f)]=!![];},Game_Party['prototype'][_0x551b1e(0x26c)]=function(){const _0x38e505=_0x551b1e;return VisuMZ[_0x38e505(0x2d6)]['Settings'][_0x38e505(0x685)][_0x38e505(0x265)];},VisuMZ['CoreEngine'][_0x551b1e(0x56d)]=Game_Party['prototype'][_0x551b1e(0x32d)],Game_Party[_0x551b1e(0x5ff)][_0x551b1e(0x32d)]=function(_0x3d0c18){const _0x57ef16=_0x551b1e;if(VisuMZ[_0x57ef16(0x2d6)]['Settings'][_0x57ef16(0x862)]['KeyItemProtect']&&DataManager['isKeyItem'](_0x3d0c18))return;VisuMZ['CoreEngine']['Game_Party_consumeItem'][_0x57ef16(0x511)](this,_0x3d0c18);},Game_Party[_0x551b1e(0x5ff)][_0x551b1e(0x43f)]=function(){const _0x27ef20=_0x551b1e,_0x5000a6=VisuMZ[_0x27ef20(0x2d6)]['Settings']['QoL'],_0x2bc3ad=_0x5000a6['BTestAddedQuantity']??0x63;let _0xd54939=[];(_0x5000a6['BTestItems']??!![])&&(_0xd54939=_0xd54939[_0x27ef20(0x6c0)]($dataItems));(_0x5000a6[_0x27ef20(0x4cf)]??!![])&&(_0xd54939=_0xd54939[_0x27ef20(0x6c0)]($dataWeapons));(_0x5000a6[_0x27ef20(0x908)]??!![])&&(_0xd54939=_0xd54939['concat']($dataArmors));for(const _0xf2268c of _0xd54939){if('hbzPS'==='hbzPS'){if(!_0xf2268c)continue;if(_0xf2268c[_0x27ef20(0x8aa)]['trim']()<=0x0)continue;if(_0xf2268c['name'][_0x27ef20(0x5b5)](/-----/i))continue;this[_0x27ef20(0x428)](_0xf2268c,_0x2bc3ad);}else _0x45cf61=_0x2c3faf(_0xd235d6['$1'])*_0xed9d1e[_0x27ef20(0x652)],_0x258ce9=(0x1-_0xef389(_0x45771d['$2']))*-_0x2e8d56;}},VisuMZ['CoreEngine'][_0x551b1e(0x1b3)]=Game_Troop[_0x551b1e(0x5ff)][_0x551b1e(0x43d)],Game_Troop['prototype'][_0x551b1e(0x43d)]=function(_0x596c09){const _0x116a31=_0x551b1e;$gameTemp['clearForcedGameTroopSettingsCoreEngine'](),$gameTemp['applyForcedGameTroopSettingsCoreEngine'](_0x596c09),VisuMZ[_0x116a31(0x2d6)][_0x116a31(0x1b3)][_0x116a31(0x511)](this,_0x596c09);},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x448)]=Game_Map[_0x551b1e(0x5ff)][_0x551b1e(0x43d)],Game_Map['prototype'][_0x551b1e(0x43d)]=function(_0x3c8f4f){const _0x3a7f82=_0x551b1e;VisuMZ[_0x3a7f82(0x2d6)][_0x3a7f82(0x448)][_0x3a7f82(0x511)](this,_0x3c8f4f),this[_0x3a7f82(0x2c4)](_0x3c8f4f);},Game_Map[_0x551b1e(0x5ff)][_0x551b1e(0x2c4)]=function(){const _0x309518=_0x551b1e;this['_hideTileShadows']=VisuMZ[_0x309518(0x2d6)][_0x309518(0x47b)][_0x309518(0x862)][_0x309518(0x861)]||![];if($dataMap&&$dataMap[_0x309518(0x1d3)]){if($dataMap['note'][_0x309518(0x5b5)](/<SHOW TILE SHADOWS>/i))this[_0x309518(0x1f0)]=![];if($dataMap[_0x309518(0x1d3)]['match'](/<HIDE TILE SHADOWS>/i))this[_0x309518(0x1f0)]=!![];}},Game_Map[_0x551b1e(0x5ff)][_0x551b1e(0x3b9)]=function(){const _0x125c00=_0x551b1e;if(this['_hideTileShadows']===undefined)this[_0x125c00(0x2c4)]();return this[_0x125c00(0x1f0)];},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x8ab)]=Game_Character[_0x551b1e(0x5ff)][_0x551b1e(0x4f8)],Game_Character[_0x551b1e(0x5ff)][_0x551b1e(0x4f8)]=function(_0x30fb28){const _0x427411=_0x551b1e;try{VisuMZ[_0x427411(0x2d6)][_0x427411(0x8ab)][_0x427411(0x511)](this,_0x30fb28);}catch(_0x31004b){if(_0x427411(0x587)===_0x427411(0x587)){if($gameTemp[_0x427411(0x376)]())console['log'](_0x31004b);}else return _0x1f0add['CoreEngine'][_0x427411(0x7ee)][_0x427411(0x511)](this,_0x17d9dd);}},Game_Player[_0x551b1e(0x5ff)][_0x551b1e(0x1e3)]=function(){const _0x4da2c9=_0x551b1e,_0x2162c2=$gameMap[_0x4da2c9(0x409)]();this[_0x4da2c9(0x260)]=Math[_0x4da2c9(0x57d)](_0x2162c2)+Math[_0x4da2c9(0x57d)](_0x2162c2)+this[_0x4da2c9(0x45e)]();},Game_Player['prototype']['encounterStepsMinimum']=function(){const _0x2caced=_0x551b1e;if($dataMap&&$dataMap[_0x2caced(0x1d3)]&&$dataMap[_0x2caced(0x1d3)][_0x2caced(0x5b5)](/<MINIMUM ENCOUNTER STEPS:[ ](\d+)>/i))return Number(RegExp['$1']);else{if('pPwUj'!==_0x2caced(0x3d1))return VisuMZ['CoreEngine'][_0x2caced(0x47b)][_0x2caced(0x862)][_0x2caced(0x3a6)];else{_0x3a2f73['CoreEngine']['Game_Actor_levelUp'][_0x2caced(0x511)](this);if(!_0x31f2f3[_0x2caced(0x466)])this['levelUpRecovery']();}}},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x328)]=Game_Event[_0x551b1e(0x5ff)][_0x551b1e(0x41d)],Game_Event[_0x551b1e(0x5ff)][_0x551b1e(0x41d)]=function(_0x32e485,_0x553ce7){const _0x29175f=_0x551b1e;if(this['isSmartEventCollisionOn']()){if(_0x29175f(0x52b)===_0x29175f(0x4ab))this['_helpWindow'][_0x29175f(0x4f9)](_0x236b66['layoutSettings']['HelpBgType']);else return this[_0x29175f(0x4af)](_0x32e485,_0x553ce7);}else{if(_0x29175f(0x4ee)!==_0x29175f(0x672))return VisuMZ[_0x29175f(0x2d6)]['Game_Event_isCollidedWithEvents'][_0x29175f(0x511)](this,_0x32e485,_0x553ce7);else _0x5cafb0[_0x29175f(0x2d6)][_0x29175f(0x310)][_0x29175f(0x511)](this,_0x348bb4,_0x5ae452,_0x27d54b,_0x4b487f);}},Game_Event[_0x551b1e(0x5ff)][_0x551b1e(0x5d7)]=function(){const _0x95d8cf=_0x551b1e;return VisuMZ[_0x95d8cf(0x2d6)][_0x95d8cf(0x47b)]['QoL'][_0x95d8cf(0x673)];},Game_Event[_0x551b1e(0x5ff)][_0x551b1e(0x4af)]=function(_0x4ea4e0,_0x55e761){const _0x37c41d=_0x551b1e;if(!this[_0x37c41d(0x4e1)]())return![];else{if(_0x37c41d(0x907)===_0x37c41d(0x5ec))this[_0x37c41d(0x456)]-=this[_0x37c41d(0x755)](),this['isClosed']()&&(this[_0x37c41d(0x7df)]=![]);else{const _0x21ed04=$gameMap['eventsXyNt'](_0x4ea4e0,_0x55e761)[_0x37c41d(0x2e0)](_0x4cb293=>_0x4cb293[_0x37c41d(0x4e1)]());return _0x21ed04['length']>0x0;}}},VisuMZ['CoreEngine']['Game_Interpreter_command105']=Game_Interpreter[_0x551b1e(0x5ff)][_0x551b1e(0x8b9)],Game_Interpreter['prototype'][_0x551b1e(0x8b9)]=function(_0x1b4032){const _0x2fdd8a=_0x551b1e,_0x467aa3=this[_0x2fdd8a(0x68f)]();if(_0x467aa3[_0x2fdd8a(0x5b5)](/\/\/[ ]SCRIPT[ ]CALL/i)){if(_0x2fdd8a(0x5f3)===_0x2fdd8a(0x5f3))return this[_0x2fdd8a(0x58b)](_0x467aa3);else this['_muteSound']&&(_0x2398b1=_0x3b7933[_0x2fdd8a(0x6b4)](_0x427f16),_0x38471a['se']&&(_0x5eac2b['se']['volume']=0x0)),_0x4ff2e6[_0x2fdd8a(0x2d6)][_0x2fdd8a(0x564)][_0x2fdd8a(0x511)](this,_0x2bec29);}else return VisuMZ[_0x2fdd8a(0x2d6)]['Game_Interpreter_command105'][_0x2fdd8a(0x511)](this,_0x1b4032);},Game_Interpreter[_0x551b1e(0x5ff)]['getCombinedScrollingText']=function(){const _0x5581b5=_0x551b1e;let _0x3d99e0='',_0x5063f4=this['_index']+0x1;while(this['_list'][_0x5063f4]&&this['_list'][_0x5063f4]['code']===0x195){_0x5581b5(0x2d0)===_0x5581b5(0x2d5)?this['_forcedBattleSys']=_0x5581b5(0x8c1):(_0x3d99e0+=this[_0x5581b5(0x678)][_0x5063f4][_0x5581b5(0x7d0)][0x0]+'\x0a',_0x5063f4++);}return _0x3d99e0;},Game_Interpreter[_0x551b1e(0x5ff)]['runCombinedScrollingTextAsCode']=function(_0x11802b){const _0x2c512c=_0x551b1e;try{eval(_0x11802b);}catch(_0x4f4aee){$gameTemp['isPlaytest']()&&('SCWkf'===_0x2c512c(0x4b1)?_0x12ddf4['areButtonsHidden']()||this[_0x2c512c(0x28b)]?this[_0x2c512c(0x51f)]():_0x595bfd[_0x2c512c(0x2d6)]['Sprite_Button_updateOpacity'][_0x2c512c(0x511)](this):(console[_0x2c512c(0x538)](_0x2c512c(0x8d5)),console[_0x2c512c(0x538)](_0x4f4aee)));}return!![];},VisuMZ['CoreEngine'][_0x551b1e(0x20c)]=Game_Interpreter[_0x551b1e(0x5ff)][_0x551b1e(0x560)],Game_Interpreter[_0x551b1e(0x5ff)][_0x551b1e(0x560)]=function(_0x1814a6){const _0x55c822=_0x551b1e;try{VisuMZ[_0x55c822(0x2d6)][_0x55c822(0x20c)]['call'](this,_0x1814a6);}catch(_0x14f957){if($gameTemp[_0x55c822(0x376)]()){if(_0x55c822(0x790)===_0x55c822(0x790))console[_0x55c822(0x538)]('Conditional\x20Branch\x20Script\x20Error'),console[_0x55c822(0x538)](_0x14f957);else{const _0x1b979a=this[_0x55c822(0x443)](_0x254718,_0x122549);_0x1b979a['bitmap']['drawText'](_0x2c6191[_0x144902],0x0,0x0,_0x8127e6,_0x45c9c2,_0x55c822(0x593)),_0x1b979a['x']=(_0x9601d2-(_0x7e72f4[_0x55c822(0x55a)]-0x1)/0x2)*_0x7b3543,_0x1b979a['dy']=-_0x4b9a5d;}}this['skipBranch']();}return!![];},VisuMZ['CoreEngine'][_0x551b1e(0x6cc)]=Game_Interpreter['prototype'][_0x551b1e(0x3d5)],Game_Interpreter[_0x551b1e(0x5ff)][_0x551b1e(0x3d5)]=function(_0x5df7c8){const _0x4b52e1=_0x551b1e;try{VisuMZ[_0x4b52e1(0x2d6)]['Game_Interpreter_command122'][_0x4b52e1(0x511)](this,_0x5df7c8);}catch(_0x2eec2f){if(_0x4b52e1(0x48d)!=='pDxZs'){const _0x3ad10a=_0x66ef1a[_0x4b52e1(0x70b)]();if(_0x3ad10a)for(const _0x4a5b9a of _0x3ad10a){if(_0x4a5b9a&&_0x4a5b9a[_0x4b52e1(0x209)]){if(this['isGamepadButtonPressed'](_0x4a5b9a))return!![];}}}else $gameTemp[_0x4b52e1(0x376)]()&&(console['log'](_0x4b52e1(0x3e3)),console[_0x4b52e1(0x538)](_0x2eec2f));}return!![];},VisuMZ[_0x551b1e(0x2d6)]['Game_Interpreter_command355']=Game_Interpreter[_0x551b1e(0x5ff)]['command355'],Game_Interpreter['prototype'][_0x551b1e(0x205)]=function(){const _0x3e716b=_0x551b1e;try{VisuMZ[_0x3e716b(0x2d6)][_0x3e716b(0x1c5)][_0x3e716b(0x511)](this);}catch(_0x376c39){$gameTemp[_0x3e716b(0x376)]()&&(_0x3e716b(0x427)===_0x3e716b(0x696)?_0x277335=!_0x1ed4f3:(console[_0x3e716b(0x538)](_0x3e716b(0x516)),console[_0x3e716b(0x538)](_0x376c39)));}return!![];},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x784)]=Game_Interpreter[_0x551b1e(0x5ff)][_0x551b1e(0x6e4)],Game_Interpreter[_0x551b1e(0x5ff)][_0x551b1e(0x6e4)]=function(_0x4fa209){const _0x4bbc7d=_0x551b1e;return $gameTemp['setLastPluginCommandInterpreter'](this),VisuMZ[_0x4bbc7d(0x2d6)]['Game_Interpreter_PluginCommand'][_0x4bbc7d(0x511)](this,_0x4fa209);},Scene_Base[_0x551b1e(0x5ff)][_0x551b1e(0x6f5)]=function(){const _0x21e9d3=_0x551b1e;return VisuMZ[_0x21e9d3(0x2d6)]['Settings']['UI'][_0x21e9d3(0x459)];},Scene_Base[_0x551b1e(0x5ff)][_0x551b1e(0x7b7)]=function(){const _0x1b1a48=_0x551b1e;return VisuMZ['CoreEngine'][_0x1b1a48(0x47b)]['UI'][_0x1b1a48(0x703)];},Scene_Base[_0x551b1e(0x5ff)][_0x551b1e(0x610)]=function(){const _0x22cacd=_0x551b1e;return VisuMZ[_0x22cacd(0x2d6)][_0x22cacd(0x47b)]['UI'][_0x22cacd(0x227)];},Scene_Base[_0x551b1e(0x5ff)][_0x551b1e(0x59d)]=function(){const _0x54a673=_0x551b1e;return VisuMZ[_0x54a673(0x2d6)]['Settings']['UI']['RightMenus'];},Scene_Base['prototype'][_0x551b1e(0x8a7)]=function(){const _0x2e55b4=_0x551b1e;return VisuMZ[_0x2e55b4(0x2d6)][_0x2e55b4(0x47b)]['UI']['CommandWidth'];},Scene_Base['prototype'][_0x551b1e(0x61c)]=function(){const _0x2c8e62=_0x551b1e;return VisuMZ['CoreEngine'][_0x2c8e62(0x47b)]['UI'][_0x2c8e62(0x1f9)];},Scene_Base[_0x551b1e(0x5ff)][_0x551b1e(0x213)]=function(){const _0x524e5a=_0x551b1e;return VisuMZ[_0x524e5a(0x2d6)][_0x524e5a(0x47b)]['Window'][_0x524e5a(0x28d)];},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x5a7)]=Scene_Base['prototype']['createWindowLayer'],Scene_Base[_0x551b1e(0x5ff)][_0x551b1e(0x8e2)]=function(){const _0x1cc287=_0x551b1e;VisuMZ['CoreEngine'][_0x1cc287(0x5a7)][_0x1cc287(0x511)](this),this[_0x1cc287(0x579)](),this[_0x1cc287(0x8fb)]['x']=Math['round'](this[_0x1cc287(0x8fb)]['x']),this[_0x1cc287(0x8fb)]['y']=Math['round'](this[_0x1cc287(0x8fb)]['y']);},Scene_Base[_0x551b1e(0x5ff)]['createButtonAssistWindow']=function(){},Scene_Base[_0x551b1e(0x5ff)][_0x551b1e(0x72d)]=function(){const _0x472939=_0x551b1e;return TextManager[_0x472939(0x777)](_0x472939(0x653),_0x472939(0x21a));},Scene_Base['prototype']['buttonAssistKey2']=function(){const _0x38630b=_0x551b1e;return TextManager[_0x38630b(0x883)]('tab');},Scene_Base[_0x551b1e(0x5ff)][_0x551b1e(0x6cd)]=function(){const _0x3024c1=_0x551b1e;return TextManager['getInputButtonString'](_0x3024c1(0x566));},Scene_Base[_0x551b1e(0x5ff)][_0x551b1e(0x739)]=function(){const _0x161e22=_0x551b1e;return TextManager[_0x161e22(0x883)]('ok');},Scene_Base[_0x551b1e(0x5ff)][_0x551b1e(0x55d)]=function(){const _0x4e1cae=_0x551b1e;return TextManager['getInputButtonString'](_0x4e1cae(0x345));},Scene_Base['prototype'][_0x551b1e(0x3a3)]=function(){const _0x2af1e6=_0x551b1e;if(this[_0x2af1e6(0x4ff)]&&this['_pageupButton']['visible'])return TextManager[_0x2af1e6(0x79a)];else{if('gsXfp'===_0x2af1e6(0x72f))_0x4f06ac['clear'](),this[_0x2af1e6(0x5b0)]==='keyboard'?this[_0x2af1e6(0x6fe)](_0x2af1e6(0x4c3)):this['switchModes'](_0x2af1e6(0x513));else return'';}},Scene_Base[_0x551b1e(0x5ff)][_0x551b1e(0x669)]=function(){return'';},Scene_Base[_0x551b1e(0x5ff)][_0x551b1e(0x47d)]=function(){return'';},Scene_Base[_0x551b1e(0x5ff)][_0x551b1e(0x800)]=function(){const _0x55bf19=_0x551b1e;return TextManager[_0x55bf19(0x5b2)];},Scene_Base[_0x551b1e(0x5ff)][_0x551b1e(0x392)]=function(){return TextManager['buttonAssistCancel'];},Scene_Base[_0x551b1e(0x5ff)]['buttonAssistOffset1']=function(){return 0x0;},Scene_Base[_0x551b1e(0x5ff)][_0x551b1e(0x19f)]=function(){return 0x0;},Scene_Base[_0x551b1e(0x5ff)][_0x551b1e(0x909)]=function(){return 0x0;},Scene_Base[_0x551b1e(0x5ff)][_0x551b1e(0x477)]=function(){return 0x0;},Scene_Base[_0x551b1e(0x5ff)]['buttonAssistOffset5']=function(){return 0x0;},VisuMZ[_0x551b1e(0x2d6)]['Scene_Boot_loadSystemImages']=Scene_Boot[_0x551b1e(0x5ff)]['loadSystemImages'],Scene_Boot['prototype']['loadSystemImages']=function(){const _0x32f11b=_0x551b1e;VisuMZ[_0x32f11b(0x2d6)][_0x32f11b(0x44e)][_0x32f11b(0x511)](this),this[_0x32f11b(0x7e0)]();},Scene_Boot[_0x551b1e(0x5ff)][_0x551b1e(0x7e0)]=function(){const _0x28b6d4=_0x551b1e,_0x55049c=[_0x28b6d4(0x7f3),_0x28b6d4(0x1b0),'battlebacks2','characters',_0x28b6d4(0x57b),_0x28b6d4(0x71b),_0x28b6d4(0x83d),_0x28b6d4(0x29e),_0x28b6d4(0x7ff),_0x28b6d4(0x360),_0x28b6d4(0x7de),'tilesets',_0x28b6d4(0x241),'titles2'];for(const _0x4d96d5 of _0x55049c){const _0x12bf90=VisuMZ[_0x28b6d4(0x2d6)][_0x28b6d4(0x47b)]['ImgLoad'][_0x4d96d5],_0x4bbd1d=_0x28b6d4(0x778)[_0x28b6d4(0x7cb)](_0x4d96d5);for(const _0x2e946d of _0x12bf90){_0x28b6d4(0x1a8)!=='lvQND'?ImageManager[_0x28b6d4(0x8a3)](_0x4bbd1d,_0x2e946d):this[_0x28b6d4(0x787)](_0x3c0483);}}},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x7c9)]=Scene_Boot[_0x551b1e(0x5ff)][_0x551b1e(0x5c6)],Scene_Boot[_0x551b1e(0x5ff)][_0x551b1e(0x5c6)]=function(){const _0x165e79=_0x551b1e;Utils[_0x165e79(0x235)](_0x165e79(0x5cb))&&VisuMZ[_0x165e79(0x2d6)]['Settings'][_0x165e79(0x862)][_0x165e79(0x78e)]?this['startAutoNewGame']():VisuMZ['CoreEngine'][_0x165e79(0x7c9)][_0x165e79(0x511)](this);},Scene_Boot[_0x551b1e(0x5ff)][_0x551b1e(0x4a7)]=function(){const _0x2c0b77=_0x551b1e;DataManager[_0x2c0b77(0x6ca)](),SceneManager[_0x2c0b77(0x38f)](Scene_Map);},Scene_Boot[_0x551b1e(0x5ff)]['adjustBoxSize']=function(){const _0x16113c=_0x551b1e,_0x1efbed=$dataSystem[_0x16113c(0x83c)][_0x16113c(0x2e8)],_0x42159c=$dataSystem[_0x16113c(0x83c)][_0x16113c(0x49c)],_0x8d91b9=VisuMZ[_0x16113c(0x2d6)]['Settings']['UI'][_0x16113c(0x27b)];Graphics[_0x16113c(0x5f5)]=_0x1efbed-_0x8d91b9*0x2,Graphics[_0x16113c(0x6a5)]=_0x42159c-_0x8d91b9*0x2,this[_0x16113c(0x2ac)]();},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x8b8)]=Scene_Boot['prototype']['updateDocumentTitle'],Scene_Boot[_0x551b1e(0x5ff)][_0x551b1e(0x36f)]=function(){const _0x1b8100=_0x551b1e;this['isFullDocumentTitle']()?this['makeDocumentTitle']():_0x1b8100(0x5ee)===_0x1b8100(0x71c)?this[_0x1b8100(0x51a)]['setBackgroundType'](_0x1bea2b[_0x1b8100(0x383)][_0x1b8100(0x2c0)]):VisuMZ[_0x1b8100(0x2d6)][_0x1b8100(0x8b8)]['call'](this);},Scene_Boot[_0x551b1e(0x5ff)][_0x551b1e(0x723)]=function(){const _0x4291d8=_0x551b1e;if(Scene_Title['subtitle']==='')return![];if(Scene_Title[_0x4291d8(0x408)]==='Subtitle')return![];if(Scene_Title[_0x4291d8(0x6e1)]==='')return![];if(Scene_Title[_0x4291d8(0x6e1)]===_0x4291d8(0x3fe))return![];return!![];},Scene_Boot[_0x551b1e(0x5ff)][_0x551b1e(0x769)]=function(){const _0x472e75=_0x551b1e,_0x3c2808=$dataSystem[_0x472e75(0x4e2)],_0x428691=Scene_Title['subtitle']||'',_0x10a1d7=Scene_Title[_0x472e75(0x6e1)]||'',_0x14dec5=VisuMZ['CoreEngine'][_0x472e75(0x47b)][_0x472e75(0x8b6)][_0x472e75(0x407)][_0x472e75(0x318)],_0x90608=_0x14dec5[_0x472e75(0x7cb)](_0x3c2808,_0x428691,_0x10a1d7);document['title']=_0x90608;},Scene_Boot[_0x551b1e(0x5ff)][_0x551b1e(0x2ac)]=function(){const _0x32bb1b=_0x551b1e;if(VisuMZ[_0x32bb1b(0x2d6)][_0x32bb1b(0x47b)]['UI'][_0x32bb1b(0x2db)]){const _0x4a38ab=Graphics[_0x32bb1b(0x652)]-Graphics[_0x32bb1b(0x5f5)]-VisuMZ[_0x32bb1b(0x2d6)][_0x32bb1b(0x47b)]['UI'][_0x32bb1b(0x27b)]*0x2,_0x4c6c46=Sprite_Button[_0x32bb1b(0x5ff)][_0x32bb1b(0x56b)][_0x32bb1b(0x511)](this)*0x4;if(_0x4a38ab>=_0x4c6c46)SceneManager['setSideButtonLayout'](!![]);}},Scene_Title[_0x551b1e(0x408)]=VisuMZ['CoreEngine']['Settings']['MenuLayout'][_0x551b1e(0x407)][_0x551b1e(0x3b2)],Scene_Title[_0x551b1e(0x6e1)]=VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x47b)][_0x551b1e(0x8b6)][_0x551b1e(0x407)]['Version'],Scene_Title[_0x551b1e(0x61b)]=VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x47b)]['TitlePicButtons'],VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x52d)]=Scene_Title[_0x551b1e(0x5ff)][_0x551b1e(0x805)],Scene_Title[_0x551b1e(0x5ff)][_0x551b1e(0x805)]=function(){const _0x26e574=_0x551b1e;VisuMZ[_0x26e574(0x2d6)]['Settings'][_0x26e574(0x8b6)][_0x26e574(0x407)][_0x26e574(0x805)][_0x26e574(0x511)](this);if(Scene_Title[_0x26e574(0x408)]!==''&&Scene_Title[_0x26e574(0x408)]!==_0x26e574(0x3b2))this['drawGameSubtitle']();if(Scene_Title[_0x26e574(0x6e1)]!==''&&Scene_Title[_0x26e574(0x6e1)]!==_0x26e574(0x3fe))this[_0x26e574(0x2f7)]();},Scene_Title['prototype']['drawGameSubtitle']=function(){const _0x4b80d2=_0x551b1e;VisuMZ['CoreEngine'][_0x4b80d2(0x47b)]['MenuLayout'][_0x4b80d2(0x407)][_0x4b80d2(0x6b3)][_0x4b80d2(0x511)](this);},Scene_Title['prototype']['drawGameVersion']=function(){const _0x138630=_0x551b1e;VisuMZ[_0x138630(0x2d6)][_0x138630(0x47b)][_0x138630(0x8b6)][_0x138630(0x407)][_0x138630(0x2f7)][_0x138630(0x511)](this);},Scene_Title[_0x551b1e(0x5ff)]['createCommandWindow']=function(){const _0x21b5fd=_0x551b1e;this[_0x21b5fd(0x91d)]();const _0x1b742e=$dataSystem[_0x21b5fd(0x7a4)][_0x21b5fd(0x5f6)],_0x4deb55=this[_0x21b5fd(0x5a3)]();this[_0x21b5fd(0x847)]=new Window_TitleCommand(_0x4deb55),this[_0x21b5fd(0x847)]['setBackgroundType'](_0x1b742e);const _0x340697=this[_0x21b5fd(0x5a3)]();this[_0x21b5fd(0x847)]['move'](_0x340697['x'],_0x340697['y'],_0x340697[_0x21b5fd(0x652)],_0x340697[_0x21b5fd(0x66e)]),this[_0x21b5fd(0x261)](this[_0x21b5fd(0x847)]);},Scene_Title[_0x551b1e(0x5ff)][_0x551b1e(0x6ff)]=function(){const _0x3011e5=_0x551b1e;return this[_0x3011e5(0x847)]?_0x3011e5(0x87a)===_0x3011e5(0x87a)?this[_0x3011e5(0x847)][_0x3011e5(0x524)]():_0x531c9[_0x3011e5(0x383)][_0x3011e5(0x82a)]['call'](this):VisuMZ[_0x3011e5(0x2d6)]['Settings'][_0x3011e5(0x27a)][_0x3011e5(0x55a)];},Scene_Title[_0x551b1e(0x5ff)][_0x551b1e(0x5a3)]=function(){const _0x1b1fc3=_0x551b1e;return VisuMZ[_0x1b1fc3(0x2d6)]['Settings'][_0x1b1fc3(0x8b6)]['Title'][_0x1b1fc3(0x82a)][_0x1b1fc3(0x511)](this);},Scene_Title[_0x551b1e(0x5ff)]['createTitleButtons']=function(){const _0x3a7401=_0x551b1e;for(const _0x3b4265 of Scene_Title[_0x3a7401(0x61b)]){const _0x23d3a5=new Sprite_TitlePictureButton(_0x3b4265);this[_0x3a7401(0x1d7)](_0x23d3a5);}},VisuMZ['CoreEngine'][_0x551b1e(0x6e0)]=Scene_Map['prototype'][_0x551b1e(0x5fc)],Scene_Map[_0x551b1e(0x5ff)][_0x551b1e(0x5fc)]=function(){const _0x3bb1b2=_0x551b1e;VisuMZ['CoreEngine']['Scene_Map_initialize'][_0x3bb1b2(0x511)](this),$gameTemp[_0x3bb1b2(0x83b)]();},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x804)]=Scene_Map[_0x551b1e(0x5ff)]['updateMainMultiply'],Scene_Map[_0x551b1e(0x5ff)]['updateMainMultiply']=function(){const _0x58a751=_0x551b1e;VisuMZ[_0x58a751(0x2d6)][_0x58a751(0x804)][_0x58a751(0x511)](this);if($gameTemp[_0x58a751(0x2d7)]&&!$gameMessage[_0x58a751(0x393)]()){if(_0x58a751(0x747)!=='RFuty')this[_0x58a751(0x3f0)](),SceneManager['updateEffekseer']();else return _0x5e86eb[_0x58a751(0x383)][_0x58a751(0x43b)][_0x58a751(0x511)](this);}},Scene_Map[_0x551b1e(0x5ff)][_0x551b1e(0x268)]=function(){const _0xbc6b69=_0x551b1e;Scene_Message['prototype'][_0xbc6b69(0x268)][_0xbc6b69(0x511)](this),!SceneManager[_0xbc6b69(0x474)](Scene_Battle)&&(this[_0xbc6b69(0x236)]['update'](),this[_0xbc6b69(0x832)][_0xbc6b69(0x5a8)](),this[_0xbc6b69(0x8fb)][_0xbc6b69(0x419)]=![],SceneManager[_0xbc6b69(0x8df)]()),$gameScreen[_0xbc6b69(0x229)]();},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x224)]=Scene_Map[_0x551b1e(0x5ff)][_0x551b1e(0x84b)],Scene_Map[_0x551b1e(0x5ff)][_0x551b1e(0x84b)]=function(){const _0x5f0977=_0x551b1e;VisuMZ['CoreEngine'][_0x5f0977(0x224)][_0x5f0977(0x511)](this),SceneManager['isSideButtonLayout']()&&this['moveMenuButtonSideButtonLayout']();},Scene_Map[_0x551b1e(0x5ff)]['moveMenuButtonSideButtonLayout']=function(){const _0x2bb317=_0x551b1e;this[_0x2bb317(0x556)]['x']=Graphics[_0x2bb317(0x5f5)]+0x4;},VisuMZ['CoreEngine'][_0x551b1e(0x1ac)]=Scene_Map['prototype'][_0x551b1e(0x30c)],Scene_Map[_0x551b1e(0x5ff)]['updateScene']=function(){const _0x4b711d=_0x551b1e;VisuMZ[_0x4b711d(0x2d6)][_0x4b711d(0x1ac)]['call'](this),this['updateDashToggle']();},Scene_Map[_0x551b1e(0x5ff)]['updateDashToggle']=function(){const _0x5de542=_0x551b1e;Input[_0x5de542(0x5ae)](_0x5de542(0x49b))&&(ConfigManager[_0x5de542(0x823)]=!ConfigManager['alwaysDash'],ConfigManager[_0x5de542(0x262)]());},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x8e9)]=Scene_MenuBase[_0x551b1e(0x5ff)][_0x551b1e(0x491)],Scene_MenuBase[_0x551b1e(0x5ff)][_0x551b1e(0x491)]=function(){const _0x3f0ed0=_0x551b1e;let _0x383cc2=0x0;if(SceneManager['areButtonsOutsideMainUI']()){if(_0x3f0ed0(0x3d4)!==_0x3f0ed0(0x3d4)){if(_0x543c5f['isPlaytest']())_0x52c832[_0x3f0ed0(0x538)](_0x26e949);}else _0x383cc2=this['helpAreaTopSideButtonLayout']();}else _0x383cc2=VisuMZ[_0x3f0ed0(0x2d6)][_0x3f0ed0(0x8e9)][_0x3f0ed0(0x511)](this);return this[_0x3f0ed0(0x7bd)]()&&this[_0x3f0ed0(0x1db)]()===_0x3f0ed0(0x68b)&&(_0x383cc2+=Window_ButtonAssist['prototype'][_0x3f0ed0(0x404)]()),_0x383cc2;},Scene_MenuBase[_0x551b1e(0x5ff)][_0x551b1e(0x6b6)]=function(){const _0x4ddfa0=_0x551b1e;if(this['isBottomHelpMode']()){if('IJTqp'===_0x4ddfa0(0x7ea))this[_0x4ddfa0(0x395)]=![];else return this[_0x4ddfa0(0x732)]();}else return _0x4ddfa0(0x207)!==_0x4ddfa0(0x681)?0x0:0x1;},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x40c)]=Scene_MenuBase[_0x551b1e(0x5ff)][_0x551b1e(0x54e)],Scene_MenuBase['prototype'][_0x551b1e(0x54e)]=function(){const _0x4c2fb2=_0x551b1e;return SceneManager['areButtonsOutsideMainUI']()?this[_0x4c2fb2(0x31d)]():VisuMZ['CoreEngine'][_0x4c2fb2(0x40c)][_0x4c2fb2(0x511)](this);},Scene_MenuBase[_0x551b1e(0x5ff)][_0x551b1e(0x31d)]=function(){const _0xd18d4f=_0x551b1e;return!this[_0xd18d4f(0x7b7)]()?this[_0xd18d4f(0x576)]():0x0;},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x713)]=Scene_MenuBase['prototype'][_0x551b1e(0x791)],Scene_MenuBase[_0x551b1e(0x5ff)][_0x551b1e(0x791)]=function(){const _0xf58b5d=_0x551b1e;let _0x5c85b7=0x0;if(SceneManager[_0xf58b5d(0x251)]())_0x5c85b7=this[_0xf58b5d(0x844)]();else{if(_0xf58b5d(0x488)===_0xf58b5d(0x488))_0x5c85b7=VisuMZ['CoreEngine'][_0xf58b5d(0x713)][_0xf58b5d(0x511)](this);else{const _0x46546f=_0xf58b5d(0x5a2);this[_0xf58b5d(0x77c)]=this[_0xf58b5d(0x77c)]||{};if(this[_0xf58b5d(0x77c)][_0x46546f])return this[_0xf58b5d(0x77c)][_0x46546f];const _0x4a8c29=_0x5eaa65['CoreEngine'][_0xf58b5d(0x47b)][_0xf58b5d(0x574)][_0xf58b5d(0x3ae)];return this['getColorDataFromPluginParameters'](_0x46546f,_0x4a8c29);}}return this[_0xf58b5d(0x7bd)]()&&this[_0xf58b5d(0x1db)]()!=='button'&&(_0x5c85b7-=Window_ButtonAssist['prototype'][_0xf58b5d(0x404)]()),_0x5c85b7;},Scene_MenuBase[_0x551b1e(0x5ff)]['mainAreaHeightSideButtonLayout']=function(){const _0x31b886=_0x551b1e;return Graphics[_0x31b886(0x6a5)]-this[_0x31b886(0x731)]();},VisuMZ[_0x551b1e(0x2d6)]['Scene_MenuBase_createBackground']=Scene_MenuBase[_0x551b1e(0x5ff)]['createBackground'],Scene_MenuBase[_0x551b1e(0x5ff)]['createBackground']=function(){const _0x449bca=_0x551b1e;this[_0x449bca(0x67c)]=new PIXI[(_0x449bca(0x78f))][(_0x449bca(0x381))](clamp=!![]),this[_0x449bca(0x73d)]=new Sprite(),this['_backgroundSprite']['bitmap']=SceneManager[_0x449bca(0x8e3)](),this[_0x449bca(0x73d)][_0x449bca(0x78f)]=[this[_0x449bca(0x67c)]],this[_0x449bca(0x1d7)](this[_0x449bca(0x73d)]),this['setBackgroundOpacity'](0xc0),this[_0x449bca(0x3cf)](this[_0x449bca(0x77f)]()),this[_0x449bca(0x47a)]();},Scene_MenuBase['prototype'][_0x551b1e(0x77f)]=function(){const _0x4d6428=_0x551b1e,_0x4aecc4=String(this[_0x4d6428(0x539)][_0x4d6428(0x8aa)]),_0x2c8db8=this[_0x4d6428(0x827)](_0x4aecc4);if(_0x2c8db8)return _0x2c8db8[_0x4d6428(0x54d)];else{if(_0x4d6428(0x4cc)==='VkDZI')this[_0x4d6428(0x8c4)][_0x4d6428(0x4d8)](_0x411fb1[_0x566728])?_0x210093[_0x4d6428(0x74b)]():_0x5c190b[_0x4d6428(0x8f3)]();else return 0xc0;}},Scene_MenuBase[_0x551b1e(0x5ff)][_0x551b1e(0x47a)]=function(){const _0x2c229a=_0x551b1e,_0xb83643=String(this['constructor'][_0x2c229a(0x8aa)]),_0x3f40c9=this[_0x2c229a(0x827)](_0xb83643);_0x3f40c9&&(_0x3f40c9[_0x2c229a(0x7d1)]!==''||_0x3f40c9[_0x2c229a(0x62c)]!=='')&&(this[_0x2c229a(0x649)]=new Sprite(ImageManager[_0x2c229a(0x1a1)](_0x3f40c9[_0x2c229a(0x7d1)])),this[_0x2c229a(0x348)]=new Sprite(ImageManager[_0x2c229a(0x75f)](_0x3f40c9['BgFilename2'])),this[_0x2c229a(0x1d7)](this[_0x2c229a(0x649)]),this[_0x2c229a(0x1d7)](this[_0x2c229a(0x348)]),this['_backSprite1'][_0x2c229a(0x2b8)][_0x2c229a(0x40a)](this[_0x2c229a(0x50e)][_0x2c229a(0x4aa)](this,this[_0x2c229a(0x649)])),this[_0x2c229a(0x348)]['bitmap']['addLoadListener'](this[_0x2c229a(0x50e)][_0x2c229a(0x4aa)](this,this[_0x2c229a(0x348)])));},Scene_MenuBase[_0x551b1e(0x5ff)][_0x551b1e(0x827)]=function(_0x27dd9a){const _0x2647d9=_0x551b1e;return VisuMZ['CoreEngine'][_0x2647d9(0x47b)][_0x2647d9(0x1ad)][_0x27dd9a]||VisuMZ['CoreEngine'][_0x2647d9(0x47b)][_0x2647d9(0x1ad)][_0x2647d9(0x3fa)];},Scene_MenuBase['prototype'][_0x551b1e(0x50e)]=function(_0x396622){const _0x977c82=_0x551b1e;this[_0x977c82(0x743)](_0x396622),this[_0x977c82(0x6ef)](_0x396622);},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x85d)]=Scene_MenuBase[_0x551b1e(0x5ff)][_0x551b1e(0x406)],Scene_MenuBase[_0x551b1e(0x5ff)]['createCancelButton']=function(){const _0x1c3435=_0x551b1e;VisuMZ[_0x1c3435(0x2d6)][_0x1c3435(0x85d)][_0x1c3435(0x511)](this),SceneManager[_0x1c3435(0x333)]()&&this[_0x1c3435(0x918)]();},Scene_MenuBase[_0x551b1e(0x5ff)][_0x551b1e(0x918)]=function(){const _0x1cabdc=_0x551b1e;this[_0x1cabdc(0x7b3)]['x']=Graphics[_0x1cabdc(0x5f5)]+0x4;},VisuMZ['CoreEngine']['Scene_MenuBase_createPageButtons']=Scene_MenuBase[_0x551b1e(0x5ff)]['createPageButtons'],Scene_MenuBase[_0x551b1e(0x5ff)]['createPageButtons']=function(){const _0x57c2d2=_0x551b1e;VisuMZ[_0x57c2d2(0x2d6)][_0x57c2d2(0x2bc)][_0x57c2d2(0x511)](this),SceneManager[_0x57c2d2(0x333)]()&&(_0x57c2d2(0x617)!=='fdcHo'?this[_0x57c2d2(0x89b)]():this[_0x57c2d2(0x375)]()?this[_0x57c2d2(0x85e)]():_0x14126f[_0x57c2d2(0x2d6)][_0x57c2d2(0x775)][_0x57c2d2(0x511)](this));},Scene_MenuBase[_0x551b1e(0x5ff)][_0x551b1e(0x89b)]=function(){const _0x302436=_0x551b1e;this[_0x302436(0x4ff)]['x']=-0x1*(this['_pageupButton'][_0x302436(0x652)]+this[_0x302436(0x3a9)][_0x302436(0x652)]+0x8),this['_pagedownButton']['x']=-0x1*(this[_0x302436(0x3a9)][_0x302436(0x652)]+0x4);},Scene_MenuBase[_0x551b1e(0x5ff)][_0x551b1e(0x7bd)]=function(){const _0x2ace04=_0x551b1e;return VisuMZ['CoreEngine'][_0x2ace04(0x47b)][_0x2ace04(0x3a8)][_0x2ace04(0x351)];},Scene_MenuBase['prototype'][_0x551b1e(0x1db)]=function(){const _0x56ed7e=_0x551b1e;if(SceneManager['isSideButtonLayout']()||SceneManager[_0x56ed7e(0x283)]()){if(_0x56ed7e(0x6ad)!==_0x56ed7e(0x1a9))return VisuMZ['CoreEngine'][_0x56ed7e(0x47b)]['ButtonAssist'][_0x56ed7e(0x837)];else{const _0x148b31='_stored_gaugeBackColor';this['_colorCache']=this['_colorCache']||{};if(this[_0x56ed7e(0x77c)][_0x148b31])return this[_0x56ed7e(0x77c)][_0x148b31];const _0x34ea07=_0x5ec85b[_0x56ed7e(0x2d6)]['Settings'][_0x56ed7e(0x574)][_0x56ed7e(0x674)];return this[_0x56ed7e(0x2d2)](_0x148b31,_0x34ea07);}}else{if(_0x56ed7e(0x822)===_0x56ed7e(0x1b5))_0x4c33e6[_0x56ed7e(0x2d6)][_0x56ed7e(0x20f)]['call'](this,_0x444ee1,_0x4e1478,_0x2d019e,_0x23ac2a,_0x25d1af,_0x58f8a7,_0x187593,_0x40c581,_0xdc35cc),this[_0x56ed7e(0x51e)]();else return'button';}},Scene_MenuBase['prototype'][_0x551b1e(0x579)]=function(){const _0x57239c=_0x551b1e;if(!this['isMenuButtonAssistEnabled']())return;const _0x1b1b30=this[_0x57239c(0x850)]();this[_0x57239c(0x8ae)]=new Window_ButtonAssist(_0x1b1b30),this['addWindow'](this['_buttonAssistWindow']);},Scene_MenuBase[_0x551b1e(0x5ff)][_0x551b1e(0x850)]=function(){const _0x25766b=_0x551b1e;return this[_0x25766b(0x1db)]()===_0x25766b(0x462)?this[_0x25766b(0x294)]():this['buttonAssistWindowSideRect']();},Scene_MenuBase[_0x551b1e(0x5ff)][_0x551b1e(0x294)]=function(){const _0x9ade84=_0x551b1e,_0x2fe7c7=ConfigManager['touchUI']?(Sprite_Button['prototype'][_0x9ade84(0x56b)]()+0x6)*0x2:0x0,_0x4198c6=this[_0x9ade84(0x53d)](),_0x4fda00=Graphics['boxWidth']-_0x2fe7c7*0x2,_0x4983a4=this[_0x9ade84(0x61c)]();return new Rectangle(_0x2fe7c7,_0x4198c6,_0x4fda00,_0x4983a4);},Scene_MenuBase[_0x551b1e(0x5ff)]['buttonAssistWindowSideRect']=function(){const _0x46c073=_0x551b1e,_0x20a0fd=Graphics[_0x46c073(0x5f5)],_0x56aa37=Window_ButtonAssist[_0x46c073(0x5ff)][_0x46c073(0x404)](),_0x22958e=0x0;let _0x5373a4=0x0;if(this['getButtonAssistLocation']()==='top'){if('AblLL'!==_0x46c073(0x5d9)){const _0x2b4281=this[_0x46c073(0x4e6)],_0x28e968=_0x330abd[_0x46c073(0x46a)](0x0,this[_0x46c073(0x890)]-_0x2b4281*0x2),_0x4076f4=_0x2a2a36[_0x46c073(0x46a)](0x0,this[_0x46c073(0x1bd)]-_0x2b4281*0x2),_0x1a979c=this[_0x46c073(0x25d)],_0x5de72c=_0x1a979c[_0x46c073(0x53f)][0x0];_0x1a979c[_0x46c073(0x2b8)]=this['_windowskin'],_0x1a979c[_0x46c073(0x62b)](0x0,0x0,0x60,0x60),_0x1a979c['move'](_0x2b4281,_0x2b4281),_0x1a979c[_0x46c073(0x82e)]['x']=_0x28e968/0x60,_0x1a979c[_0x46c073(0x82e)]['y']=_0x4076f4/0x60,_0x5de72c['bitmap']=this[_0x46c073(0x56e)],_0x5de72c[_0x46c073(0x62b)](0x0,0x60,0x60,0x60),_0x5de72c[_0x46c073(0x335)](0x0,0x0,_0x28e968,_0x4076f4),_0x5de72c['scale']['x']=0x1/_0x1a979c[_0x46c073(0x82e)]['x'],_0x5de72c[_0x46c073(0x82e)]['y']=0x1/_0x1a979c[_0x46c073(0x82e)]['y'],_0x1a979c[_0x46c073(0x36d)](this[_0x46c073(0x201)]);}else _0x5373a4=0x0;}else _0x46c073(0x55e)!=='aMDnL'?(_0x10420e[_0x46c073(0x2d6)][_0x46c073(0x789)][_0x46c073(0x511)](this),this[_0x46c073(0x8e6)]()):_0x5373a4=Graphics[_0x46c073(0x6a5)]-_0x56aa37;return new Rectangle(_0x22958e,_0x5373a4,_0x20a0fd,_0x56aa37);},Scene_Menu['layoutSettings']=VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x47b)][_0x551b1e(0x8b6)][_0x551b1e(0x2b9)],VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x62f)]=Scene_Menu[_0x551b1e(0x5ff)][_0x551b1e(0x83e)],Scene_Menu['prototype'][_0x551b1e(0x83e)]=function(){const _0x1586a2=_0x551b1e;VisuMZ['CoreEngine'][_0x1586a2(0x62f)][_0x1586a2(0x511)](this),this['setCoreEngineUpdateWindowBg']();},Scene_Menu[_0x551b1e(0x5ff)]['setCoreEngineUpdateWindowBg']=function(){const _0x4a2e54=_0x551b1e;if(this[_0x4a2e54(0x847)]){if('jTwhE'!==_0x4a2e54(0x4ba)){const _0x370a76=_0x373b1f(this[_0x4a2e54(0x539)][_0x4a2e54(0x8aa)]),_0x4ee6a2=this[_0x4a2e54(0x827)](_0x370a76);return _0x4ee6a2?_0x4ee6a2[_0x4a2e54(0x54d)]:0xc0;}else this['_commandWindow'][_0x4a2e54(0x4f9)](Scene_Menu[_0x4a2e54(0x383)]['CommandBgType']);}this['_goldWindow']&&(_0x4a2e54(0x465)===_0x4a2e54(0x299)?(this['removeAllFauxAnimations'](),_0x438fdc[_0x4a2e54(0x2d6)][_0x4a2e54(0x6ab)][_0x4a2e54(0x511)](this,_0x17c8b8)):this[_0x4a2e54(0x697)][_0x4a2e54(0x4f9)](Scene_Menu[_0x4a2e54(0x383)][_0x4a2e54(0x28c)]));if(this[_0x4a2e54(0x51a)]){if('unNna'!=='unNna'){const _0x3db1e8=_0x307d54[_0x3a3b37],_0x54bf9c=_0x4a2e54(0x6c8)[_0x4a2e54(0x7cb)](_0x469918);for(const _0x2e4a52 of _0x3db1e8){_0x1c7d10[_0x4a2e54(0x85a)](_0x54bf9c,_0x2e4a52);}}else this[_0x4a2e54(0x51a)][_0x4a2e54(0x4f9)](Scene_Menu[_0x4a2e54(0x383)][_0x4a2e54(0x2c0)]);}},Scene_Menu[_0x551b1e(0x5ff)][_0x551b1e(0x5a3)]=function(){const _0x49cb17=_0x551b1e;return Scene_Menu[_0x49cb17(0x383)][_0x49cb17(0x82a)][_0x49cb17(0x511)](this);},Scene_Menu['prototype']['goldWindowRect']=function(){const _0x4c8d9c=_0x551b1e;return Scene_Menu['layoutSettings'][_0x4c8d9c(0x43b)][_0x4c8d9c(0x511)](this);},Scene_Menu[_0x551b1e(0x5ff)][_0x551b1e(0x852)]=function(){const _0xa73dfa=_0x551b1e;return Scene_Menu[_0xa73dfa(0x383)][_0xa73dfa(0x776)][_0xa73dfa(0x511)](this);},Scene_Item[_0x551b1e(0x383)]=VisuMZ[_0x551b1e(0x2d6)]['Settings']['MenuLayout'][_0x551b1e(0x37b)],VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x2b2)]=Scene_Item['prototype'][_0x551b1e(0x83e)],Scene_Item[_0x551b1e(0x5ff)][_0x551b1e(0x83e)]=function(){const _0x46455c=_0x551b1e;VisuMZ['CoreEngine']['Scene_Item_create'][_0x46455c(0x511)](this),this['setCoreEngineUpdateWindowBg']();},Scene_Item[_0x551b1e(0x5ff)][_0x551b1e(0x7ad)]=function(){const _0x3e9d99=_0x551b1e;this[_0x3e9d99(0x635)]&&this[_0x3e9d99(0x635)]['setBackgroundType'](Scene_Item[_0x3e9d99(0x383)][_0x3e9d99(0x65c)]),this[_0x3e9d99(0x270)]&&this['_categoryWindow'][_0x3e9d99(0x4f9)](Scene_Item[_0x3e9d99(0x383)][_0x3e9d99(0x527)]),this[_0x3e9d99(0x3ed)]&&this[_0x3e9d99(0x3ed)][_0x3e9d99(0x4f9)](Scene_Item[_0x3e9d99(0x383)][_0x3e9d99(0x690)]),this[_0x3e9d99(0x2b3)]&&(_0x3e9d99(0x1eb)==='QRSFl'?this['_actorWindow'][_0x3e9d99(0x4f9)](Scene_Item['layoutSettings'][_0x3e9d99(0x86b)]):_0x55da91[_0x3e9d99(0x2d6)][_0x3e9d99(0x47b)][_0x3e9d99(0x8b6)][_0x3e9d99(0x407)][_0x3e9d99(0x6b3)]['call'](this));},Scene_Item[_0x551b1e(0x5ff)][_0x551b1e(0x51b)]=function(){const _0x51ed27=_0x551b1e;return Scene_Item[_0x51ed27(0x383)][_0x51ed27(0x46c)][_0x51ed27(0x511)](this);},Scene_Item['prototype']['categoryWindowRect']=function(){const _0x901dfb=_0x551b1e;return Scene_Item['layoutSettings'][_0x901dfb(0x2e3)][_0x901dfb(0x511)](this);},Scene_Item[_0x551b1e(0x5ff)][_0x551b1e(0x8d4)]=function(){const _0x5bba34=_0x551b1e;return Scene_Item['layoutSettings'][_0x5bba34(0x354)]['call'](this);},Scene_Item[_0x551b1e(0x5ff)][_0x551b1e(0x7b5)]=function(){const _0x3d6aac=_0x551b1e;return Scene_Item[_0x3d6aac(0x383)][_0x3d6aac(0x79f)][_0x3d6aac(0x511)](this);},Scene_Skill[_0x551b1e(0x383)]=VisuMZ['CoreEngine'][_0x551b1e(0x47b)][_0x551b1e(0x8b6)][_0x551b1e(0x64d)],VisuMZ[_0x551b1e(0x2d6)]['Scene_Skill_create']=Scene_Skill[_0x551b1e(0x5ff)][_0x551b1e(0x83e)],Scene_Skill['prototype'][_0x551b1e(0x83e)]=function(){const _0x253192=_0x551b1e;VisuMZ[_0x253192(0x2d6)]['Scene_Skill_create'][_0x253192(0x511)](this),this[_0x253192(0x7ad)]();},Scene_Skill['prototype'][_0x551b1e(0x7ad)]=function(){const _0x15dd27=_0x551b1e;this[_0x15dd27(0x635)]&&(_0x15dd27(0x81f)!==_0x15dd27(0x81f)?_0xbc7a2a[_0x15dd27(0x239)]&&(this[_0x15dd27(0x705)]=_0x15dd27(0x8c1)):this[_0x15dd27(0x635)]['setBackgroundType'](Scene_Skill[_0x15dd27(0x383)][_0x15dd27(0x65c)]));this['_skillTypeWindow']&&this[_0x15dd27(0x58c)][_0x15dd27(0x4f9)](Scene_Skill[_0x15dd27(0x383)][_0x15dd27(0x50f)]);this['_statusWindow']&&this['_statusWindow']['setBackgroundType'](Scene_Skill[_0x15dd27(0x383)][_0x15dd27(0x2c0)]);if(this[_0x15dd27(0x3ed)]){if('bzSJt'!=='jpgFP')this[_0x15dd27(0x3ed)][_0x15dd27(0x4f9)](Scene_Skill['layoutSettings']['ItemBgType']);else{const _0x21c451='_stored_mpCostColor';this[_0x15dd27(0x77c)]=this[_0x15dd27(0x77c)]||{};if(this[_0x15dd27(0x77c)][_0x21c451])return this[_0x15dd27(0x77c)][_0x21c451];const _0x618792=_0x30581c[_0x15dd27(0x2d6)][_0x15dd27(0x47b)][_0x15dd27(0x574)]['ColorMPCost'];return this[_0x15dd27(0x2d2)](_0x21c451,_0x618792);}}if(this[_0x15dd27(0x2b3)]){if(_0x15dd27(0x19d)===_0x15dd27(0x19d))this[_0x15dd27(0x2b3)][_0x15dd27(0x4f9)](Scene_Skill['layoutSettings']['ActorBgType']);else switch(_0x21dbe9[_0x15dd27(0x2d6)]['Settings'][_0x15dd27(0x862)][_0x15dd27(0x3f3)]){case _0x15dd27(0x694):return!![];case _0x15dd27(0x4c8):return![];default:return _0xfa2c89[_0x15dd27(0x2d6)][_0x15dd27(0x2ff)]['call'](this);}}},Scene_Skill[_0x551b1e(0x5ff)][_0x551b1e(0x51b)]=function(){const _0x38c8a3=_0x551b1e;return Scene_Skill['layoutSettings']['HelpRect'][_0x38c8a3(0x511)](this);},Scene_Skill[_0x551b1e(0x5ff)][_0x551b1e(0x79b)]=function(){return Scene_Skill['layoutSettings']['SkillTypeRect']['call'](this);},Scene_Skill[_0x551b1e(0x5ff)][_0x551b1e(0x852)]=function(){const _0x592915=_0x551b1e;return Scene_Skill['layoutSettings']['StatusRect'][_0x592915(0x511)](this);},Scene_Skill[_0x551b1e(0x5ff)][_0x551b1e(0x8d4)]=function(){const _0x1a1c1b=_0x551b1e;return Scene_Skill[_0x1a1c1b(0x383)][_0x1a1c1b(0x354)][_0x1a1c1b(0x511)](this);},Scene_Skill[_0x551b1e(0x5ff)][_0x551b1e(0x7b5)]=function(){const _0x2d3a88=_0x551b1e;return Scene_Skill[_0x2d3a88(0x383)][_0x2d3a88(0x79f)][_0x2d3a88(0x511)](this);},Scene_Equip[_0x551b1e(0x383)]=VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x47b)][_0x551b1e(0x8b6)][_0x551b1e(0x809)],VisuMZ['CoreEngine'][_0x551b1e(0x679)]=Scene_Equip[_0x551b1e(0x5ff)][_0x551b1e(0x83e)],Scene_Equip['prototype'][_0x551b1e(0x83e)]=function(){const _0x41d7a2=_0x551b1e;VisuMZ[_0x41d7a2(0x2d6)][_0x41d7a2(0x679)][_0x41d7a2(0x511)](this),this[_0x41d7a2(0x7ad)]();},Scene_Equip['prototype']['setCoreEngineUpdateWindowBg']=function(){const _0x5c6275=_0x551b1e;this[_0x5c6275(0x635)]&&this[_0x5c6275(0x635)]['setBackgroundType'](Scene_Equip['layoutSettings'][_0x5c6275(0x65c)]);this[_0x5c6275(0x51a)]&&this['_statusWindow'][_0x5c6275(0x4f9)](Scene_Equip[_0x5c6275(0x383)]['StatusBgType']);this[_0x5c6275(0x847)]&&this[_0x5c6275(0x847)][_0x5c6275(0x4f9)](Scene_Equip[_0x5c6275(0x383)][_0x5c6275(0x2f6)]);this[_0x5c6275(0x6d0)]&&this[_0x5c6275(0x6d0)]['setBackgroundType'](Scene_Equip[_0x5c6275(0x383)][_0x5c6275(0x834)]);if(this[_0x5c6275(0x3ed)]){if(_0x5c6275(0x4a9)===_0x5c6275(0x272))return _0x5ed7d9['CoreEngine'][_0x5c6275(0x4b8)][_0x2d8a4e]===_0x5c6275(0x336)?_0x117df3:_0x5e0446((_0x3f50da*0x64)[_0x5c6275(0x276)](_0x1839c1))+'%';else this[_0x5c6275(0x3ed)]['setBackgroundType'](Scene_Equip[_0x5c6275(0x383)]['ItemBgType']);}},Scene_Equip[_0x551b1e(0x5ff)][_0x551b1e(0x51b)]=function(){const _0x32919d=_0x551b1e;return Scene_Equip[_0x32919d(0x383)]['HelpRect'][_0x32919d(0x511)](this);},Scene_Equip[_0x551b1e(0x5ff)][_0x551b1e(0x852)]=function(){const _0x1f1bed=_0x551b1e;return Scene_Equip[_0x1f1bed(0x383)][_0x1f1bed(0x776)]['call'](this);},Scene_Equip['prototype']['commandWindowRect']=function(){const _0x18a074=_0x551b1e;return Scene_Equip[_0x18a074(0x383)][_0x18a074(0x82a)][_0x18a074(0x511)](this);},Scene_Equip['prototype'][_0x551b1e(0x5ef)]=function(){const _0x3917c9=_0x551b1e;return Scene_Equip[_0x3917c9(0x383)][_0x3917c9(0x899)][_0x3917c9(0x511)](this);},Scene_Equip['prototype']['itemWindowRect']=function(){const _0xd011a2=_0x551b1e;return Scene_Equip['layoutSettings'][_0xd011a2(0x354)][_0xd011a2(0x511)](this);},Scene_Status[_0x551b1e(0x383)]=VisuMZ[_0x551b1e(0x2d6)]['Settings'][_0x551b1e(0x8b6)][_0x551b1e(0x425)],VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x52a)]=Scene_Status[_0x551b1e(0x5ff)][_0x551b1e(0x83e)],Scene_Status['prototype']['create']=function(){const _0x5125eb=_0x551b1e;VisuMZ[_0x5125eb(0x2d6)][_0x5125eb(0x52a)][_0x5125eb(0x511)](this),this[_0x5125eb(0x7ad)]();},Scene_Status[_0x551b1e(0x5ff)][_0x551b1e(0x7ad)]=function(){const _0x187285=_0x551b1e;this[_0x187285(0x387)]&&this[_0x187285(0x387)][_0x187285(0x4f9)](Scene_Status['layoutSettings']['ProfileBgType']);this[_0x187285(0x51a)]&&this[_0x187285(0x51a)][_0x187285(0x4f9)](Scene_Status['layoutSettings'][_0x187285(0x2c0)]);this[_0x187285(0x371)]&&this['_statusParamsWindow'][_0x187285(0x4f9)](Scene_Status[_0x187285(0x383)][_0x187285(0x2bf)]);if(this[_0x187285(0x309)]){if('VCUDq'===_0x187285(0x3d2))return _0x1453f7[_0x187285(0x6d8)](this),_0x2178d3[_0x187285(0x2d6)][_0x187285(0x784)][_0x187285(0x511)](this,_0xa3b72d);else this['_statusEquipWindow'][_0x187285(0x4f9)](Scene_Status[_0x187285(0x383)][_0x187285(0x492)]);}},Scene_Status[_0x551b1e(0x5ff)][_0x551b1e(0x302)]=function(){const _0x393a14=_0x551b1e;return Scene_Status[_0x393a14(0x383)][_0x393a14(0x440)][_0x393a14(0x511)](this);},Scene_Status[_0x551b1e(0x5ff)][_0x551b1e(0x852)]=function(){const _0x5693a4=_0x551b1e;return Scene_Status['layoutSettings'][_0x5693a4(0x776)][_0x5693a4(0x511)](this);},Scene_Status[_0x551b1e(0x5ff)]['statusParamsWindowRect']=function(){const _0x263199=_0x551b1e;return Scene_Status['layoutSettings'][_0x263199(0x2c7)]['call'](this);},Scene_Status[_0x551b1e(0x5ff)]['statusEquipWindowRect']=function(){const _0x49ea39=_0x551b1e;return Scene_Status['layoutSettings'][_0x49ea39(0x4dc)][_0x49ea39(0x511)](this);},Scene_Options['layoutSettings']=VisuMZ['CoreEngine'][_0x551b1e(0x47b)][_0x551b1e(0x8b6)][_0x551b1e(0x553)],VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x534)]=Scene_Options[_0x551b1e(0x5ff)][_0x551b1e(0x83e)],Scene_Options[_0x551b1e(0x5ff)]['create']=function(){const _0x33feee=_0x551b1e;VisuMZ[_0x33feee(0x2d6)][_0x33feee(0x534)][_0x33feee(0x511)](this),this['setCoreEngineUpdateWindowBg']();},Scene_Options[_0x551b1e(0x5ff)][_0x551b1e(0x7ad)]=function(){const _0x3e66b5=_0x551b1e;this[_0x3e66b5(0x305)]&&this[_0x3e66b5(0x305)][_0x3e66b5(0x4f9)](Scene_Options[_0x3e66b5(0x383)]['OptionsBgType']);},Scene_Options[_0x551b1e(0x5ff)]['optionsWindowRect']=function(){const _0x1dbeea=_0x551b1e;return Scene_Options[_0x1dbeea(0x383)][_0x1dbeea(0x897)]['call'](this);},Scene_Save[_0x551b1e(0x383)]=VisuMZ['CoreEngine'][_0x551b1e(0x47b)][_0x551b1e(0x8b6)][_0x551b1e(0x8ed)],Scene_Save[_0x551b1e(0x5ff)][_0x551b1e(0x83e)]=function(){const _0x122106=_0x551b1e;Scene_File[_0x122106(0x5ff)]['create'][_0x122106(0x511)](this),this['setCoreEngineUpdateWindowBg']();},Scene_Save[_0x551b1e(0x5ff)][_0x551b1e(0x7ad)]=function(){const _0x4b7b6f=_0x551b1e;if(this['_helpWindow']){if(_0x4b7b6f(0x4ce)!==_0x4b7b6f(0x3a7))this[_0x4b7b6f(0x635)][_0x4b7b6f(0x4f9)](Scene_Save[_0x4b7b6f(0x383)][_0x4b7b6f(0x65c)]);else return this[_0x4b7b6f(0x64f)](_0x224edd);}this[_0x4b7b6f(0x879)]&&this[_0x4b7b6f(0x879)][_0x4b7b6f(0x4f9)](Scene_Save[_0x4b7b6f(0x383)][_0x4b7b6f(0x605)]);},Scene_Save[_0x551b1e(0x5ff)][_0x551b1e(0x51b)]=function(){const _0x330b33=_0x551b1e;return Scene_Save[_0x330b33(0x383)][_0x330b33(0x46c)][_0x330b33(0x511)](this);},Scene_Save[_0x551b1e(0x5ff)][_0x551b1e(0x24c)]=function(){const _0x4f7292=_0x551b1e;return Scene_Save[_0x4f7292(0x383)][_0x4f7292(0x1ff)][_0x4f7292(0x511)](this);},Scene_Load[_0x551b1e(0x383)]=VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x47b)]['MenuLayout']['LoadMenu'],Scene_Load[_0x551b1e(0x5ff)][_0x551b1e(0x83e)]=function(){const _0x391af0=_0x551b1e;Scene_File['prototype'][_0x391af0(0x83e)]['call'](this),this[_0x391af0(0x7ad)]();},Scene_Load[_0x551b1e(0x5ff)][_0x551b1e(0x7ad)]=function(){const _0xa4abe9=_0x551b1e;this[_0xa4abe9(0x635)]&&this[_0xa4abe9(0x635)][_0xa4abe9(0x4f9)](Scene_Load[_0xa4abe9(0x383)][_0xa4abe9(0x65c)]),this[_0xa4abe9(0x879)]&&this[_0xa4abe9(0x879)]['setBackgroundType'](Scene_Load[_0xa4abe9(0x383)][_0xa4abe9(0x605)]);},Scene_Load[_0x551b1e(0x5ff)][_0x551b1e(0x51b)]=function(){const _0xc9315a=_0x551b1e;return Scene_Load[_0xc9315a(0x383)][_0xc9315a(0x46c)][_0xc9315a(0x511)](this);},Scene_Load[_0x551b1e(0x5ff)]['listWindowRect']=function(){const _0x1e444a=_0x551b1e;return Scene_Load[_0x1e444a(0x383)]['ListRect'][_0x1e444a(0x511)](this);},Scene_GameEnd['layoutSettings']=VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x47b)][_0x551b1e(0x8b6)][_0x551b1e(0x840)],VisuMZ['CoreEngine'][_0x551b1e(0x214)]=Scene_GameEnd[_0x551b1e(0x5ff)][_0x551b1e(0x481)],Scene_GameEnd[_0x551b1e(0x5ff)][_0x551b1e(0x481)]=function(){const _0x1b6654=_0x551b1e;Scene_MenuBase[_0x1b6654(0x5ff)][_0x1b6654(0x481)]['call'](this);},Scene_GameEnd[_0x551b1e(0x5ff)]['createCommandWindow']=function(){const _0x5b55dc=_0x551b1e,_0xf089ed=this['commandWindowRect']();this[_0x5b55dc(0x847)]=new Window_GameEnd(_0xf089ed),this['_commandWindow']['setHandler'](_0x5b55dc(0x345),this[_0x5b55dc(0x7f9)][_0x5b55dc(0x4aa)](this)),this[_0x5b55dc(0x261)](this[_0x5b55dc(0x847)]),this['_commandWindow'][_0x5b55dc(0x4f9)](Scene_GameEnd['layoutSettings'][_0x5b55dc(0x2f6)]);},Scene_GameEnd[_0x551b1e(0x5ff)][_0x551b1e(0x5a3)]=function(){const _0x1e41ef=_0x551b1e;return Scene_GameEnd[_0x1e41ef(0x383)][_0x1e41ef(0x82a)][_0x1e41ef(0x511)](this);},Scene_Shop[_0x551b1e(0x383)]=VisuMZ[_0x551b1e(0x2d6)]['Settings']['MenuLayout']['ShopMenu'],VisuMZ['CoreEngine'][_0x551b1e(0x729)]=Scene_Shop[_0x551b1e(0x5ff)][_0x551b1e(0x83e)],Scene_Shop[_0x551b1e(0x5ff)]['create']=function(){const _0xab3ba8=_0x551b1e;VisuMZ[_0xab3ba8(0x2d6)][_0xab3ba8(0x729)]['call'](this),this['setCoreEngineUpdateWindowBg']();},Scene_Shop[_0x551b1e(0x5ff)]['setCoreEngineUpdateWindowBg']=function(){const _0x3d1d2e=_0x551b1e;this[_0x3d1d2e(0x635)]&&('dvLFZ'===_0x3d1d2e(0x5a0)?this['_helpWindow'][_0x3d1d2e(0x4f9)](Scene_Shop[_0x3d1d2e(0x383)][_0x3d1d2e(0x65c)]):this[_0x3d1d2e(0x6dc)]());this['_goldWindow']&&(_0x3d1d2e(0x3fb)!==_0x3d1d2e(0x3fb)?_0x219d82[_0x3d1d2e(0x4ac)][_0x3d1d2e(0x490)]='none':this[_0x3d1d2e(0x697)][_0x3d1d2e(0x4f9)](Scene_Shop[_0x3d1d2e(0x383)][_0x3d1d2e(0x28c)]));if(this[_0x3d1d2e(0x847)]){if(_0x3d1d2e(0x316)!=='UjRwi')return _0x5efecc[_0x3d1d2e(0x2d6)][_0x3d1d2e(0x47b)][_0x3d1d2e(0x862)][_0x3d1d2e(0x4d5)]?this[_0x3d1d2e(0x64f)](_0x4c47b6):_0x197d37[_0x3d1d2e(0x2d6)][_0x3d1d2e(0x39e)][_0x3d1d2e(0x511)](this,_0x106892);else this[_0x3d1d2e(0x847)][_0x3d1d2e(0x4f9)](Scene_Shop['layoutSettings']['CommandBgType']);}this[_0x3d1d2e(0x75c)]&&this['_dummyWindow'][_0x3d1d2e(0x4f9)](Scene_Shop[_0x3d1d2e(0x383)][_0x3d1d2e(0x3c1)]),this[_0x3d1d2e(0x5ac)]&&this[_0x3d1d2e(0x5ac)][_0x3d1d2e(0x4f9)](Scene_Shop['layoutSettings']['NumberBgType']),this[_0x3d1d2e(0x51a)]&&this[_0x3d1d2e(0x51a)]['setBackgroundType'](Scene_Shop[_0x3d1d2e(0x383)]['StatusBgType']),this[_0x3d1d2e(0x3f4)]&&this[_0x3d1d2e(0x3f4)]['setBackgroundType'](Scene_Shop[_0x3d1d2e(0x383)][_0x3d1d2e(0x44f)]),this[_0x3d1d2e(0x270)]&&(_0x3d1d2e(0x193)!=='JqwyI'?(this[_0x3d1d2e(0x635)]&&this[_0x3d1d2e(0x635)]['setBackgroundType'](_0x19da04[_0x3d1d2e(0x383)][_0x3d1d2e(0x65c)]),this[_0x3d1d2e(0x879)]&&this[_0x3d1d2e(0x879)][_0x3d1d2e(0x4f9)](_0x5b75f0[_0x3d1d2e(0x383)][_0x3d1d2e(0x605)])):this[_0x3d1d2e(0x270)]['setBackgroundType'](Scene_Shop[_0x3d1d2e(0x383)][_0x3d1d2e(0x527)])),this[_0x3d1d2e(0x19c)]&&this[_0x3d1d2e(0x19c)][_0x3d1d2e(0x4f9)](Scene_Shop['layoutSettings'][_0x3d1d2e(0x667)]);},Scene_Shop['prototype'][_0x551b1e(0x51b)]=function(){const _0x14cf0c=_0x551b1e;return Scene_Shop[_0x14cf0c(0x383)]['HelpRect'][_0x14cf0c(0x511)](this);},Scene_Shop['prototype'][_0x551b1e(0x6b1)]=function(){const _0x20e96e=_0x551b1e;return Scene_Shop[_0x20e96e(0x383)]['GoldRect']['call'](this);},Scene_Shop[_0x551b1e(0x5ff)][_0x551b1e(0x5a3)]=function(){const _0x2aa8d5=_0x551b1e;return Scene_Shop[_0x2aa8d5(0x383)][_0x2aa8d5(0x82a)][_0x2aa8d5(0x511)](this);},Scene_Shop[_0x551b1e(0x5ff)]['dummyWindowRect']=function(){const _0x2a7173=_0x551b1e;return Scene_Shop[_0x2a7173(0x383)]['DummyRect'][_0x2a7173(0x511)](this);},Scene_Shop[_0x551b1e(0x5ff)][_0x551b1e(0x521)]=function(){const _0x301391=_0x551b1e;return Scene_Shop[_0x301391(0x383)]['NumberRect'][_0x301391(0x511)](this);},Scene_Shop[_0x551b1e(0x5ff)][_0x551b1e(0x852)]=function(){const _0x43b995=_0x551b1e;return Scene_Shop['layoutSettings'][_0x43b995(0x776)][_0x43b995(0x511)](this);},Scene_Shop[_0x551b1e(0x5ff)][_0x551b1e(0x71a)]=function(){const _0x4edea1=_0x551b1e;return Scene_Shop[_0x4edea1(0x383)]['BuyRect'][_0x4edea1(0x511)](this);},Scene_Shop[_0x551b1e(0x5ff)][_0x551b1e(0x327)]=function(){const _0x13cf6b=_0x551b1e;return Scene_Shop[_0x13cf6b(0x383)][_0x13cf6b(0x2e3)][_0x13cf6b(0x511)](this);},Scene_Shop[_0x551b1e(0x5ff)][_0x551b1e(0x8b1)]=function(){const _0x427372=_0x551b1e;return Scene_Shop[_0x427372(0x383)]['SellRect'][_0x427372(0x511)](this);},Scene_Name[_0x551b1e(0x383)]=VisuMZ['CoreEngine']['Settings'][_0x551b1e(0x8b6)][_0x551b1e(0x198)],VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x65a)]=Scene_Name['prototype']['create'],Scene_Name['prototype'][_0x551b1e(0x83e)]=function(){const _0x35ecae=_0x551b1e;VisuMZ[_0x35ecae(0x2d6)]['Scene_Name_create'][_0x35ecae(0x511)](this),this['setCoreEngineUpdateWindowBg']();},Scene_Name['prototype'][_0x551b1e(0x7ad)]=function(){const _0x4ee213=_0x551b1e;if(this[_0x4ee213(0x8c4)]){if(_0x4ee213(0x250)!==_0x4ee213(0x4cb))this[_0x4ee213(0x8c4)][_0x4ee213(0x4f9)](Scene_Name[_0x4ee213(0x383)]['EditBgType']);else{var _0x131ff9=_0x1a1c76(_0x5dd81f['$1']);try{_0x3622e0+=_0x29a918(_0x131ff9);}catch(_0x1e68d9){if(_0x23d2cb[_0x4ee213(0x376)]())_0x26e313['log'](_0x1e68d9);}}}this[_0x4ee213(0x813)]&&this[_0x4ee213(0x813)][_0x4ee213(0x4f9)](Scene_Name[_0x4ee213(0x383)][_0x4ee213(0x910)]);},Scene_Name[_0x551b1e(0x5ff)][_0x551b1e(0x731)]=function(){return 0x0;},Scene_Name[_0x551b1e(0x5ff)][_0x551b1e(0x5d5)]=function(){const _0x39c6ee=_0x551b1e;return Scene_Name['layoutSettings'][_0x39c6ee(0x248)]['call'](this);},Scene_Name[_0x551b1e(0x5ff)]['inputWindowRect']=function(){const _0x3f4c97=_0x551b1e;return Scene_Name[_0x3f4c97(0x383)][_0x3f4c97(0x341)]['call'](this);},Scene_Name[_0x551b1e(0x5ff)]['EnableNameInput']=function(){const _0x7436a5=_0x551b1e;if(!this[_0x7436a5(0x813)])return![];return VisuMZ[_0x7436a5(0x2d6)][_0x7436a5(0x47b)][_0x7436a5(0x69f)]['EnableNameInput'];},Scene_Name['prototype'][_0x551b1e(0x72d)]=function(){const _0x50fae4=_0x551b1e;if(this['EnableNameInput']()){if('oAibY'!==_0x50fae4(0x60e))return TextManager[_0x50fae4(0x883)](_0x50fae4(0x5c1));else{if(this[_0x50fae4(0x6ee)]===_0x589fa9)this['initCoreEngine']();if(this[_0x50fae4(0x6ee)][_0x50fae4(0x5ba)]===_0x5c8bb4)this[_0x50fae4(0x89c)]();return this['_CoreEngineSettings']['FontSize'];}}else{if(_0x50fae4(0x81e)===_0x50fae4(0x81e))return Scene_MenuBase[_0x50fae4(0x5ff)]['buttonAssistKey1']['call'](this);else _0x2f0ba7['bgmVolume']=0x64,_0x28bcfc['bgsVolume']=0x64,_0x348b81['meVolume']=0x64,_0x1418a6[_0x50fae4(0x458)]=0x64;}},Scene_Name[_0x551b1e(0x5ff)][_0x551b1e(0x3a3)]=function(){const _0x564f24=_0x551b1e;if(this[_0x564f24(0x59a)]()){const _0xe2e6f8=VisuMZ['CoreEngine']['Settings'][_0x564f24(0x69f)];if(this[_0x564f24(0x813)][_0x564f24(0x5b0)]==='keyboard')return'dABCY'!==_0x564f24(0x8db)?_0x3b8fa7[_0x564f24(0x2d6)][_0x564f24(0x47b)]['QoL'][_0x564f24(0x83f)]:_0xe2e6f8[_0x564f24(0x3f5)]||_0x564f24(0x3f5);else{if(_0x564f24(0x67d)===_0x564f24(0x31c))this[_0x564f24(0x51a)][_0x564f24(0x4f9)](_0x177600[_0x564f24(0x383)][_0x564f24(0x2c0)]);else return _0xe2e6f8['Manual']||_0x564f24(0x5d0);}}else return Scene_MenuBase[_0x564f24(0x5ff)][_0x564f24(0x3a3)][_0x564f24(0x511)](this);},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x22c)]=Scene_Name[_0x551b1e(0x5ff)][_0x551b1e(0x46f)],Scene_Name[_0x551b1e(0x5ff)][_0x551b1e(0x46f)]=function(){const _0x29ffbd=_0x551b1e;if(this[_0x29ffbd(0x658)]())_0x29ffbd(0x3e0)===_0x29ffbd(0x3e0)?this['onInputBannedWords']():_0x6314ee[_0x29ffbd(0x2d6)]['Settings']['UI'][_0x29ffbd(0x570)]?this[_0x29ffbd(0x389)](_0x1e1ec2):_0xa1cd0a[_0x29ffbd(0x2d6)]['Sprite_Actor_setActorHome'][_0x29ffbd(0x511)](this,_0x27871e);else{if(_0x29ffbd(0x57e)===_0x29ffbd(0x84f)){const _0x2d8bdf=this[_0x29ffbd(0x55c)]();let _0xfa4949=_0x33a02d['MIN_SAFE_INTEGER'];this[_0x29ffbd(0x2df)](_0x14c624,_0x2d8bdf[0x0]);for(const _0x4606f7 of _0x2d8bdf){const _0x4d7777=_0x4606f7[_0x29ffbd(0x752)]();_0x4d7777>_0xfa4949&&(_0xfa4949=_0x4d7777,this[_0x29ffbd(0x2df)](_0xfccaa4,_0x4606f7));}}else VisuMZ[_0x29ffbd(0x2d6)][_0x29ffbd(0x22c)][_0x29ffbd(0x511)](this);}},Scene_Name[_0x551b1e(0x5ff)][_0x551b1e(0x658)]=function(){const _0x355c0d=_0x551b1e,_0x5510e0=VisuMZ['CoreEngine'][_0x355c0d(0x47b)]['KeyboardInput'];if(!_0x5510e0)return![];const _0x4c2765=_0x5510e0[_0x355c0d(0x756)];if(!_0x4c2765)return![];const _0x437e27=this[_0x355c0d(0x8c4)][_0x355c0d(0x8aa)]()[_0x355c0d(0x8f1)]();for(const _0x5eccc8 of _0x4c2765){if(_0x355c0d(0x6f0)===_0x355c0d(0x8bd))return!![];else{if(_0x437e27['includes'](_0x5eccc8['toLowerCase']()))return!![];}}return![];},Scene_Name[_0x551b1e(0x5ff)][_0x551b1e(0x1c3)]=function(){SoundManager['playBuzzer']();},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x5e1)]=Scene_Battle['prototype'][_0x551b1e(0x572)],Scene_Battle[_0x551b1e(0x5ff)]['update']=function(){const _0x4ec755=_0x551b1e;VisuMZ[_0x4ec755(0x2d6)][_0x4ec755(0x5e1)][_0x4ec755(0x511)](this);if($gameTemp[_0x4ec755(0x2d7)])this['updatePlayTestF7']();},Scene_Battle['prototype'][_0x551b1e(0x90b)]=function(){const _0x37f983=_0x551b1e;!BattleManager['isInputting']()&&!this[_0x37f983(0x361)]&&!$gameMessage[_0x37f983(0x393)]()&&('fHfdF'!==_0x37f983(0x6ec)?(this[_0x37f983(0x361)]=!![],this[_0x37f983(0x572)](),SceneManager[_0x37f983(0x5da)](),this[_0x37f983(0x361)]=![]):(_0x24375e['CoreEngine'][_0x37f983(0x20d)][_0x37f983(0x511)](this),this[_0x37f983(0x7ad)]()));},VisuMZ['CoreEngine'][_0x551b1e(0x846)]=Scene_Battle[_0x551b1e(0x5ff)][_0x551b1e(0x406)],Scene_Battle[_0x551b1e(0x5ff)][_0x551b1e(0x406)]=function(){const _0x119b01=_0x551b1e;VisuMZ['CoreEngine'][_0x119b01(0x846)]['call'](this),SceneManager['isSideButtonLayout']()&&this[_0x119b01(0x770)]();},Scene_Battle[_0x551b1e(0x5ff)][_0x551b1e(0x770)]=function(){const _0x4ce3c6=_0x551b1e;this[_0x4ce3c6(0x7b3)]['x']=Graphics[_0x4ce3c6(0x5f5)]+0x4;if(this['isBottomButtonMode']()){if('hnZDc'!=='hnZDc')try{_0x390251['CoreEngine'][_0x4ce3c6(0x8ab)][_0x4ce3c6(0x511)](this,_0x584bb0);}catch(_0x349f6a){if(_0x27b81a['isPlaytest']())_0x3a801d[_0x4ce3c6(0x538)](_0x349f6a);}else this['_cancelButton']['y']=Graphics[_0x4ce3c6(0x6a5)]-this['buttonAreaHeight']();}else this[_0x4ce3c6(0x7b3)]['y']=0x0;},VisuMZ['CoreEngine'][_0x551b1e(0x6c1)]=Sprite_Button[_0x551b1e(0x5ff)]['initialize'],Sprite_Button[_0x551b1e(0x5ff)][_0x551b1e(0x5fc)]=function(_0xa77366){const _0x3bce9c=_0x551b1e;VisuMZ['CoreEngine'][_0x3bce9c(0x6c1)][_0x3bce9c(0x511)](this,_0xa77366),this[_0x3bce9c(0x7e5)]();},Sprite_Button[_0x551b1e(0x5ff)][_0x551b1e(0x7e5)]=function(){const _0x473705=_0x551b1e,_0xb295b5=VisuMZ[_0x473705(0x2d6)][_0x473705(0x47b)]['UI'];this[_0x473705(0x28b)]=![];switch(this[_0x473705(0x1ec)]){case'cancel':this['_isButtonHidden']=!_0xb295b5['cancelShowButton'];break;case _0x473705(0x653):case _0x473705(0x21a):this[_0x473705(0x28b)]=!_0xb295b5[_0x473705(0x1c4)];break;case _0x473705(0x69d):case'up':case _0x473705(0x2ec):case _0x473705(0x585):case'ok':this[_0x473705(0x28b)]=!_0xb295b5[_0x473705(0x760)];break;case'menu':this[_0x473705(0x28b)]=!_0xb295b5['menuShowButton'];break;}},VisuMZ['CoreEngine'][_0x551b1e(0x677)]=Sprite_Button[_0x551b1e(0x5ff)][_0x551b1e(0x598)],Sprite_Button[_0x551b1e(0x5ff)][_0x551b1e(0x598)]=function(){const _0x510a17=_0x551b1e;SceneManager[_0x510a17(0x283)]()||this[_0x510a17(0x28b)]?_0x510a17(0x237)===_0x510a17(0x237)?this['hideButtonFromView']():(this[_0x510a17(0x361)]=!![],this[_0x510a17(0x572)](),_0x8571aa['updateEffekseer'](),this[_0x510a17(0x361)]=![]):VisuMZ['CoreEngine']['Sprite_Button_updateOpacity'][_0x510a17(0x511)](this);},Sprite_Button['prototype'][_0x551b1e(0x51f)]=function(){const _0x5f0179=_0x551b1e;this[_0x5f0179(0x419)]=![],this['opacity']=0x0,this['x']=Graphics[_0x5f0179(0x652)]*0xa,this['y']=Graphics[_0x5f0179(0x66e)]*0xa;},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x1e0)]=Sprite_Battler[_0x551b1e(0x5ff)]['startMove'],Sprite_Battler[_0x551b1e(0x5ff)][_0x551b1e(0x561)]=function(_0x24a1d1,_0x445172,_0x262b84){const _0x3f12e4=_0x551b1e;(this[_0x3f12e4(0x2d8)]!==_0x24a1d1||this[_0x3f12e4(0x278)]!==_0x445172)&&(this['setMoveEasingType']('Linear'),this[_0x3f12e4(0x8ba)]=_0x262b84),VisuMZ[_0x3f12e4(0x2d6)][_0x3f12e4(0x1e0)][_0x3f12e4(0x511)](this,_0x24a1d1,_0x445172,_0x262b84);},Sprite_Battler[_0x551b1e(0x5ff)][_0x551b1e(0x608)]=function(_0x3b467b){this['_moveEasingType']=_0x3b467b;},Sprite_Battler[_0x551b1e(0x5ff)]['updateMove']=function(){const _0x4e61ce=_0x551b1e;if(this['_movementDuration']<=0x0)return;const _0x17a54f=this[_0x4e61ce(0x34f)],_0x2a9672=this[_0x4e61ce(0x8ba)],_0xad90ea=this['_moveEasingType'];this[_0x4e61ce(0x84c)]=this[_0x4e61ce(0x54b)](this['_offsetX'],this[_0x4e61ce(0x2d8)],_0x17a54f,_0x2a9672,_0xad90ea),this[_0x4e61ce(0x61f)]=this[_0x4e61ce(0x54b)](this['_offsetY'],this['_targetOffsetY'],_0x17a54f,_0x2a9672,_0xad90ea),this[_0x4e61ce(0x34f)]--;if(this[_0x4e61ce(0x34f)]<=0x0)this[_0x4e61ce(0x40b)]();},Sprite_Battler[_0x551b1e(0x5ff)][_0x551b1e(0x54b)]=function(_0x302ba5,_0x14e384,_0x948add,_0x400e20,_0x2d0715){const _0x19cd4e=_0x551b1e,_0x42ab99=VisuMZ[_0x19cd4e(0x245)]((_0x400e20-_0x948add)/_0x400e20,_0x2d0715||_0x19cd4e(0x377)),_0x30b56b=VisuMZ[_0x19cd4e(0x245)]((_0x400e20-_0x948add+0x1)/_0x400e20,_0x2d0715||_0x19cd4e(0x377)),_0x1aa468=(_0x302ba5-_0x14e384*_0x42ab99)/(0x1-_0x42ab99);return _0x1aa468+(_0x14e384-_0x1aa468)*_0x30b56b;},VisuMZ[_0x551b1e(0x2d6)]['Sprite_Actor_setActorHome']=Sprite_Actor[_0x551b1e(0x5ff)][_0x551b1e(0x4e0)],Sprite_Actor[_0x551b1e(0x5ff)]['setActorHome']=function(_0x49052b){const _0x17ed28=_0x551b1e;if(VisuMZ['CoreEngine'][_0x17ed28(0x47b)]['UI'][_0x17ed28(0x570)]){if(_0x17ed28(0x753)==='Llxor'){const _0x776c9f=_0x46f446['Symbol'];let _0x4cb83d=_0x4b559a[_0x17ed28(0x6c9)];if(['',_0x17ed28(0x8c3)]['includes'](_0x4cb83d))_0x4cb83d=_0x5a4e6e[_0x17ed28(0x894)][_0x17ed28(0x511)](this);const _0x53e592=_0x1cfddd[_0x17ed28(0x1f2)][_0x17ed28(0x511)](this),_0x4fcaa9=_0x8dbfd[_0x17ed28(0x311)][_0x17ed28(0x511)](this);this['addCommand'](_0x4cb83d,_0x776c9f,_0x53e592,_0x4fcaa9),this['setHandler'](_0x776c9f,_0x239178[_0x17ed28(0x21f)][_0x17ed28(0x4aa)](this,_0x4fcaa9));}else this[_0x17ed28(0x389)](_0x49052b);}else VisuMZ['CoreEngine'][_0x17ed28(0x476)]['call'](this,_0x49052b);},Sprite_Actor[_0x551b1e(0x5ff)][_0x551b1e(0x389)]=function(_0x108a21){const _0x532f11=_0x551b1e;let _0x42db48=Math['round'](Graphics[_0x532f11(0x652)]/0x2+0xc0);_0x42db48-=Math[_0x532f11(0x4ad)]((Graphics[_0x532f11(0x652)]-Graphics['boxWidth'])/0x2),_0x42db48+=_0x108a21*0x20;let _0x41ec44=Graphics[_0x532f11(0x66e)]-0xc8-$gameParty[_0x532f11(0x87f)]()*0x30;_0x41ec44-=Math[_0x532f11(0x4ad)]((Graphics['height']-Graphics[_0x532f11(0x6a5)])/0x2),_0x41ec44+=_0x108a21*0x30,this[_0x532f11(0x8d9)](_0x42db48,_0x41ec44);},Sprite_Actor['prototype'][_0x551b1e(0x21c)]=function(){const _0x26fb4b=_0x551b1e;this[_0x26fb4b(0x561)](0x4b0,0x0,0x78);},Sprite_Animation[_0x551b1e(0x5ff)]['setMute']=function(_0x160b57){const _0x389620=_0x551b1e;this[_0x389620(0x536)]=_0x160b57;},VisuMZ['CoreEngine'][_0x551b1e(0x7b9)]=Sprite_Animation[_0x551b1e(0x5ff)][_0x551b1e(0x555)],Sprite_Animation['prototype'][_0x551b1e(0x555)]=function(){const _0x5cc85f=_0x551b1e;if(this['_muteSound'])return;VisuMZ[_0x5cc85f(0x2d6)][_0x5cc85f(0x7b9)][_0x5cc85f(0x511)](this);},VisuMZ['CoreEngine'][_0x551b1e(0x226)]=Sprite_Animation['prototype']['setViewport'],Sprite_Animation[_0x551b1e(0x5ff)][_0x551b1e(0x304)]=function(_0xe8da92){const _0x1ff449=_0x551b1e;this['isAnimationOffsetXMirrored']()?this['setViewportCoreEngineFix'](_0xe8da92):VisuMZ[_0x1ff449(0x2d6)][_0x1ff449(0x226)][_0x1ff449(0x511)](this,_0xe8da92);},Sprite_Animation[_0x551b1e(0x5ff)][_0x551b1e(0x659)]=function(){const _0x379552=_0x551b1e;if(!this['_animation'])return![];const _0x4056b9=this[_0x379552(0x4a5)][_0x379552(0x8aa)]||'';if(_0x4056b9[_0x379552(0x5b5)](/<MIRROR OFFSET X>/i))return!![];if(_0x4056b9[_0x379552(0x5b5)](/<NO MIRROR OFFSET X>/i))return![];return VisuMZ['CoreEngine'][_0x379552(0x47b)][_0x379552(0x862)][_0x379552(0x810)];},Sprite_Animation[_0x551b1e(0x5ff)][_0x551b1e(0x1c0)]=function(_0x43b441){const _0x6f4620=_0x551b1e,_0x2d3093=this['_viewportSize'],_0x36893f=this[_0x6f4620(0x6fc)],_0xf01b94=this['_animation'][_0x6f4620(0x19b)]*(this['_mirror']?-0x1:0x1)-_0x2d3093/0x2,_0x4028e0=this['_animation']['offsetY']-_0x36893f/0x2,_0x61d88d=this['targetPosition'](_0x43b441);_0x43b441['gl'][_0x6f4620(0x1ca)](_0xf01b94+_0x61d88d['x'],_0x4028e0+_0x61d88d['y'],_0x2d3093,_0x36893f);},Sprite_Animation[_0x551b1e(0x5ff)][_0x551b1e(0x6c7)]=function(_0x25bab5){const _0x20c9c9=_0x551b1e;if(_0x25bab5['_mainSprite']){}const _0x485fc5=this[_0x20c9c9(0x4a5)][_0x20c9c9(0x8aa)];let _0x18a061=_0x25bab5['height']*_0x25bab5[_0x20c9c9(0x82e)]['y'],_0x5a3451=0x0,_0x6cfd07=-_0x18a061/0x2;if(_0x485fc5['match'](/<(?:HEAD|HEADER|TOP)>/i))_0x6cfd07=-_0x18a061;if(_0x485fc5[_0x20c9c9(0x5b5)](/<(?:FOOT|FOOTER|BOTTOM)>/i))_0x6cfd07=0x0;if(_0x485fc5[_0x20c9c9(0x5b5)](/<(?:LEFT)>/i))_0x5a3451=-_0x25bab5[_0x20c9c9(0x652)]/0x2;if(_0x485fc5['match'](/<(?:RIGHT)>/i))_0x6cfd07=_0x25bab5['width']/0x2;if(_0x485fc5[_0x20c9c9(0x5b5)](/<ANCHOR X:[ ](\d+\.?\d*)>/i))_0x5a3451=Number(RegExp['$1'])*_0x25bab5['width'];_0x485fc5['match'](/<ANCHOR Y:[ ](\d+\.?\d*)>/i)&&(_0x6cfd07=(0x1-Number(RegExp['$1']))*-_0x18a061);if(_0x485fc5[_0x20c9c9(0x5b5)](/<ANCHOR:[ ](\d+\.?\d*),[ ](\d+\.?\d*)>/i)){if(_0x20c9c9(0x3c2)!==_0x20c9c9(0x3c2))return _0x589d51[_0x20c9c9(0x2d6)][_0x20c9c9(0x86c)][_0x20c9c9(0x511)](this);else _0x5a3451=Number(RegExp['$1'])*_0x25bab5[_0x20c9c9(0x652)],_0x6cfd07=(0x1-Number(RegExp['$2']))*-_0x18a061;}if(_0x485fc5[_0x20c9c9(0x5b5)](/<OFFSET X:[ ]([\+\-]\d+)>/i))_0x5a3451+=Number(RegExp['$1']);if(_0x485fc5[_0x20c9c9(0x5b5)](/<OFFSET Y:[ ]([\+\-]\d+)>/i))_0x6cfd07+=Number(RegExp['$1']);_0x485fc5['match'](/<OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(_0x5a3451+=Number(RegExp['$1']),_0x6cfd07+=Number(RegExp['$2']));const _0x41909f=new Point(_0x5a3451,_0x6cfd07);return _0x25bab5[_0x20c9c9(0x43a)](),_0x25bab5[_0x20c9c9(0x25a)][_0x20c9c9(0x34e)](_0x41909f);},Sprite_AnimationMV[_0x551b1e(0x5ff)][_0x551b1e(0x3e6)]=function(_0x1ff248){const _0x2cb273=_0x551b1e;this[_0x2cb273(0x536)]=_0x1ff248;},VisuMZ[_0x551b1e(0x2d6)]['Sprite_AnimationMV_processTimingData']=Sprite_AnimationMV[_0x551b1e(0x5ff)][_0x551b1e(0x84d)],Sprite_AnimationMV[_0x551b1e(0x5ff)][_0x551b1e(0x84d)]=function(_0xb37ac0){const _0x36c3bf=_0x551b1e;this[_0x36c3bf(0x536)]&&(_0xb37ac0=JsonEx[_0x36c3bf(0x6b4)](_0xb37ac0),_0xb37ac0['se']&&(_0xb37ac0['se']['volume']=0x0)),VisuMZ[_0x36c3bf(0x2d6)][_0x36c3bf(0x564)]['call'](this,_0xb37ac0);},Sprite_Damage[_0x551b1e(0x5ff)]['createDigits']=function(_0x5d6799){const _0x508f11=_0x551b1e;let _0x768262=Math['abs'](_0x5d6799)[_0x508f11(0x69a)]();this['useDigitGrouping']()&&(_0x768262=VisuMZ[_0x508f11(0x61a)](_0x768262));const _0x5a8d4f=this['fontSize'](),_0x41434b=Math[_0x508f11(0x4ad)](_0x5a8d4f*0.75);for(let _0x192b68=0x0;_0x192b68<_0x768262['length'];_0x192b68++){const _0x42d312=this[_0x508f11(0x443)](_0x41434b,_0x5a8d4f);_0x42d312[_0x508f11(0x2b8)][_0x508f11(0x29a)](_0x768262[_0x192b68],0x0,0x0,_0x41434b,_0x5a8d4f,_0x508f11(0x593)),_0x42d312['x']=(_0x192b68-(_0x768262['length']-0x1)/0x2)*_0x41434b,_0x42d312['dy']=-_0x192b68;}},Sprite_Damage[_0x551b1e(0x5ff)][_0x551b1e(0x6fb)]=function(){const _0x418f86=_0x551b1e;return VisuMZ[_0x418f86(0x2d6)][_0x418f86(0x47b)]['QoL'][_0x418f86(0x83f)];},Sprite_Damage[_0x551b1e(0x5ff)][_0x551b1e(0x78c)]=function(){const _0x49f4bd=_0x551b1e;return ColorManager[_0x49f4bd(0x514)]();},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x277)]=Sprite_Gauge[_0x551b1e(0x5ff)][_0x551b1e(0x550)],Sprite_Gauge[_0x551b1e(0x5ff)][_0x551b1e(0x550)]=function(){const _0x14178d=_0x551b1e;return VisuMZ['CoreEngine'][_0x14178d(0x277)][_0x14178d(0x511)](this)[_0x14178d(0x660)](0x0,0x1);},VisuMZ[_0x551b1e(0x2d6)]['Sprite_Gauge_currentValue']=Sprite_Gauge[_0x551b1e(0x5ff)]['currentValue'],Sprite_Gauge[_0x551b1e(0x5ff)][_0x551b1e(0x6bc)]=function(){const _0x3607bb=_0x551b1e;let _0x3f8bb2=VisuMZ[_0x3607bb(0x2d6)]['Sprite_Gauge_currentValue'][_0x3607bb(0x511)](this);return _0x3f8bb2;},Sprite_Gauge[_0x551b1e(0x5ff)][_0x551b1e(0x374)]=function(){const _0x42f952=_0x551b1e;let _0x18e058=this['currentValue']();this[_0x42f952(0x6fb)]()&&(_0x18e058=VisuMZ[_0x42f952(0x61a)](_0x18e058));const _0x5a5e35=this[_0x42f952(0x50b)]()-0x1,_0x18309a=this[_0x42f952(0x2af)]();this[_0x42f952(0x828)](),this[_0x42f952(0x2b8)][_0x42f952(0x29a)](_0x18e058,0x0,0x0,_0x5a5e35,_0x18309a,_0x42f952(0x619));},Sprite_Gauge[_0x551b1e(0x5ff)][_0x551b1e(0x542)]=function(){return 0x3;},Sprite_Gauge[_0x551b1e(0x5ff)][_0x551b1e(0x6fb)]=function(){const _0x46a284=_0x551b1e;return VisuMZ[_0x46a284(0x2d6)]['Settings'][_0x46a284(0x862)]['DigitGroupingGaugeSprites'];},Sprite_Gauge[_0x551b1e(0x5ff)][_0x551b1e(0x78c)]=function(){return ColorManager['outlineColorGauge']();},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x252)]=Sprite_Picture[_0x551b1e(0x5ff)][_0x551b1e(0x8a3)],Sprite_Picture[_0x551b1e(0x5ff)][_0x551b1e(0x8a3)]=function(){const _0x529957=_0x551b1e;this[_0x529957(0x3cd)][_0x529957(0x5b5)](/VisuMZ CoreEngine PictureIcon (\d+)/i)?this[_0x529957(0x8e0)](Number(RegExp['$1'])):VisuMZ[_0x529957(0x2d6)][_0x529957(0x252)][_0x529957(0x511)](this);},Sprite_Picture[_0x551b1e(0x5ff)]['loadIconBitmap']=function(_0x38f11f){const _0x52c45e=_0x551b1e,_0x18992d=ImageManager[_0x52c45e(0x337)],_0x49bd5c=ImageManager[_0x52c45e(0x2c9)],_0x190638=this[_0x52c45e(0x3cd)][_0x52c45e(0x5b5)](/SMOOTH/i);this[_0x52c45e(0x2b8)]=new Bitmap(_0x18992d,_0x49bd5c);const _0x46d466=ImageManager['loadSystem'](_0x52c45e(0x2d3)),_0xec8998=_0x38f11f%0x10*_0x18992d,_0x4ba138=Math['floor'](_0x38f11f/0x10)*_0x49bd5c;this[_0x52c45e(0x2b8)][_0x52c45e(0x1bf)]=_0x190638,this['bitmap'][_0x52c45e(0x6eb)](_0x46d466,_0xec8998,_0x4ba138,_0x18992d,_0x49bd5c,0x0,0x0,_0x18992d,_0x49bd5c);};function Sprite_TitlePictureButton(){const _0x4019de=_0x551b1e;this[_0x4019de(0x5fc)](...arguments);}Sprite_TitlePictureButton[_0x551b1e(0x5ff)]=Object[_0x551b1e(0x83e)](Sprite_Clickable['prototype']),Sprite_TitlePictureButton[_0x551b1e(0x5ff)][_0x551b1e(0x539)]=Sprite_TitlePictureButton,Sprite_TitlePictureButton[_0x551b1e(0x5ff)][_0x551b1e(0x5fc)]=function(_0x59f4a0){const _0x4b82eb=_0x551b1e;Sprite_Clickable['prototype'][_0x4b82eb(0x5fc)]['call'](this),this['_data']=_0x59f4a0,this['_clickHandler']=null,this[_0x4b82eb(0x43d)]();},Sprite_TitlePictureButton[_0x551b1e(0x5ff)]['setup']=function(){const _0x20b4b6=_0x551b1e;this['x']=Graphics[_0x20b4b6(0x652)],this['y']=Graphics[_0x20b4b6(0x66e)],this[_0x20b4b6(0x419)]=![],this[_0x20b4b6(0x562)]();},Sprite_TitlePictureButton[_0x551b1e(0x5ff)]['setupButtonImage']=function(){const _0x1cfeb2=_0x551b1e;this[_0x1cfeb2(0x2b8)]=ImageManager[_0x1cfeb2(0x57c)](this[_0x1cfeb2(0x4b0)][_0x1cfeb2(0x4ea)]),this[_0x1cfeb2(0x2b8)]['addLoadListener'](this[_0x1cfeb2(0x6f8)][_0x1cfeb2(0x4aa)](this));},Sprite_TitlePictureButton[_0x551b1e(0x5ff)]['onButtonImageLoad']=function(){const _0x12bd12=_0x551b1e;this[_0x12bd12(0x4b0)][_0x12bd12(0x38a)][_0x12bd12(0x511)](this),this[_0x12bd12(0x4b0)]['PositionJS']['call'](this),this[_0x12bd12(0x21b)](this[_0x12bd12(0x4b0)][_0x12bd12(0x21f)][_0x12bd12(0x4aa)](this));},Sprite_TitlePictureButton[_0x551b1e(0x5ff)][_0x551b1e(0x572)]=function(){const _0x2330ce=_0x551b1e;Sprite_Clickable[_0x2330ce(0x5ff)][_0x2330ce(0x572)][_0x2330ce(0x511)](this),this['updateOpacity'](),this[_0x2330ce(0x8c9)]();},Sprite_TitlePictureButton[_0x551b1e(0x5ff)][_0x551b1e(0x6f5)]=function(){const _0x47f578=_0x551b1e;return VisuMZ[_0x47f578(0x2d6)][_0x47f578(0x47b)]['MenuLayout'][_0x47f578(0x407)][_0x47f578(0x295)];},Sprite_TitlePictureButton['prototype'][_0x551b1e(0x598)]=function(){const _0x3c4a3c=_0x551b1e;if(this['_pressed']||this[_0x3c4a3c(0x914)])this['opacity']=0xff;else{if(_0x3c4a3c(0x1aa)===_0x3c4a3c(0x385))return 0.5*_0x365e07*_0x43dcc2*((_0x26107c+0x1)*_0x4b420d-_0x29fd27);else this[_0x3c4a3c(0x26f)]+=this['visible']?this[_0x3c4a3c(0x6f5)]():-0x1*this[_0x3c4a3c(0x6f5)](),this[_0x3c4a3c(0x26f)]=Math['min'](0xc0,this[_0x3c4a3c(0x26f)]);}},Sprite_TitlePictureButton[_0x551b1e(0x5ff)][_0x551b1e(0x21b)]=function(_0x4730cd){const _0x13814e=_0x551b1e;this[_0x13814e(0x4f2)]=_0x4730cd;},Sprite_TitlePictureButton['prototype'][_0x551b1e(0x2b5)]=function(){const _0x3462bd=_0x551b1e;this['_clickHandler']&&(_0x3462bd(0x211)===_0x3462bd(0x211)?this[_0x3462bd(0x4f2)]():this[_0x3462bd(0x741)]());},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x857)]=Spriteset_Base[_0x551b1e(0x5ff)]['initialize'],Spriteset_Base[_0x551b1e(0x5ff)]['initialize']=function(){const _0x3051c2=_0x551b1e;VisuMZ[_0x3051c2(0x2d6)][_0x3051c2(0x857)][_0x3051c2(0x511)](this),this[_0x3051c2(0x2cd)]();},Spriteset_Base[_0x551b1e(0x5ff)][_0x551b1e(0x2cd)]=function(){const _0x4716aa=_0x551b1e;this[_0x4716aa(0x860)]=[],this['_cacheScaleX']=this[_0x4716aa(0x82e)]['x'],this['_cacheScaleY']=this[_0x4716aa(0x82e)]['y'];},VisuMZ[_0x551b1e(0x2d6)]['Spriteset_Base_destroy']=Spriteset_Base[_0x551b1e(0x5ff)]['destroy'],Spriteset_Base[_0x551b1e(0x5ff)][_0x551b1e(0x23e)]=function(_0x1bba15){const _0x324e72=_0x551b1e;this[_0x324e72(0x364)](),VisuMZ[_0x324e72(0x2d6)]['Spriteset_Base_destroy'][_0x324e72(0x511)](this,_0x1bba15);},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x52c)]=Spriteset_Base[_0x551b1e(0x5ff)]['update'],Spriteset_Base[_0x551b1e(0x5ff)]['update']=function(){const _0x21919c=_0x551b1e;VisuMZ[_0x21919c(0x2d6)]['Spriteset_Base_update'][_0x21919c(0x511)](this),this[_0x21919c(0x573)](),this[_0x21919c(0x6a1)]();},Spriteset_Base[_0x551b1e(0x5ff)][_0x551b1e(0x573)]=function(){const _0x140b64=_0x551b1e;if(!VisuMZ[_0x140b64(0x2d6)][_0x140b64(0x47b)][_0x140b64(0x862)][_0x140b64(0x88d)])return;if(this[_0x140b64(0x33d)]===this[_0x140b64(0x82e)]['x']&&this['_cacheScaleY']===this['scale']['y'])return;this[_0x140b64(0x1c7)](),this[_0x140b64(0x33d)]=this['scale']['x'],this[_0x140b64(0x1bb)]=this[_0x140b64(0x82e)]['y'];},Spriteset_Base[_0x551b1e(0x5ff)][_0x551b1e(0x1c7)]=function(){const _0x227e36=_0x551b1e;this[_0x227e36(0x82e)]['x']!==0x0&&(this['_pictureContainer']['scale']['x']=0x1/this[_0x227e36(0x82e)]['x'],this['_pictureContainer']['x']=-(this['x']/this[_0x227e36(0x82e)]['x']));if(this[_0x227e36(0x82e)]['y']!==0x0){if(_0x227e36(0x654)!=='jrMLd'){const _0x575562=_0x8d88da[_0x227e36(0x2d6)]['Settings'][_0x227e36(0x512)];if(_0x575562&&_0x575562[_0x227e36(0x780)])return _0x575562['horzJS'][_0x227e36(0x511)](this);const _0x2ec06a=_0x1d0c39[_0x227e36(0x39c)]*0.75,_0xd5fb18=_0x5c0ee0[_0x227e36(0x4db)]*0.6,_0x32cf35=_0x5b07f7[_0x227e36(0x5c9)];this['x']+=_0x17d44e[_0x227e36(0x4ed)](_0x5a0d4c[_0x227e36(0x57d)](_0x2ec06a)-_0x3b3807[_0x227e36(0x57d)](_0xd5fb18))*(_0x28257d[_0x227e36(0x8d7)](_0x32cf35,0x1e)*0.5);}else this['_pictureContainer'][_0x227e36(0x82e)]['y']=0x1/this['scale']['y'],this[_0x227e36(0x32e)]['y']=-(this['y']/this['scale']['y']);}},Spriteset_Base['prototype'][_0x551b1e(0x6a1)]=function(){const _0x44d4b1=_0x551b1e;for(const _0x2226f4 of this[_0x44d4b1(0x860)]){if('tDkoZ'!==_0x44d4b1(0x80d)){if(!_0x2226f4[_0x44d4b1(0x2ef)]()){if('QNzIc'===_0x44d4b1(0x2a1)){const _0x4a46d6=_0x1f7659[_0x44d4b1(0x83c)]['uiAreaWidth'],_0x18309e=_0x56347a['advanced'][_0x44d4b1(0x49c)],_0x1587eb=_0x41176b['CoreEngine']['Settings']['UI'][_0x44d4b1(0x27b)];_0x4aaa81['boxWidth']=_0x4a46d6-_0x1587eb*0x2,_0x4f0c83[_0x44d4b1(0x6a5)]=_0x18309e-_0x1587eb*0x2,this[_0x44d4b1(0x2ac)]();}else this[_0x44d4b1(0x749)](_0x2226f4);}}else this['updateMotion']();}this[_0x44d4b1(0x8eb)]();},Spriteset_Base['prototype']['processFauxAnimationRequests']=function(){const _0x340fe2=_0x551b1e;for(;;){if(_0x340fe2(0x7ca)===_0x340fe2(0x234)){return _0x3a877a[_0x340fe2(0x5ff)][_0x340fe2(0x20e)][_0x340fe2(0x511)](this)+_0x4f3400['CoreEngine'][_0x340fe2(0x47b)]['Window']['ItemHeight'];;}else{const _0x1b0baf=$gameTemp[_0x340fe2(0x6bd)]();if(_0x1b0baf)this['createFauxAnimation'](_0x1b0baf);else{if('dMFAe'!==_0x340fe2(0x32c))this['catchUnknownError'](_0x47ef90);else break;}}}},Spriteset_Base['prototype'][_0x551b1e(0x88a)]=function(_0xadb8af){const _0x1eea32=_0x551b1e,_0x24b215=$dataAnimations[_0xadb8af['animationId']],_0x4908ba=_0xadb8af['targets'],_0x39f3fb=_0xadb8af[_0x1eea32(0x39d)],_0x1bfe03=_0xadb8af['mute'];let _0x1f5fde=this['animationBaseDelay']();const _0x537396=this[_0x1eea32(0x27f)]();if(this[_0x1eea32(0x689)](_0x24b215))for(const _0x3e5e1e of _0x4908ba){this[_0x1eea32(0x340)]([_0x3e5e1e],_0x24b215,_0x39f3fb,_0x1f5fde,_0x1bfe03),_0x1f5fde+=_0x537396;}else this['createFauxAnimationSprite'](_0x4908ba,_0x24b215,_0x39f3fb,_0x1f5fde,_0x1bfe03);},Spriteset_Base[_0x551b1e(0x5ff)]['createFauxAnimationSprite']=function(_0x22184b,_0x51a6cc,_0x117fcb,_0x39e794,_0xd76976){const _0xd059ac=_0x551b1e,_0x1ea87f=this['isMVAnimation'](_0x51a6cc),_0x43d17c=new(_0x1ea87f?Sprite_AnimationMV:Sprite_Animation)(),_0x353a01=this[_0xd059ac(0x286)](_0x22184b);this['animationShouldMirror'](_0x22184b[0x0])&&(_0x117fcb=!_0x117fcb),_0x43d17c[_0xd059ac(0x303)]=_0x22184b,_0x43d17c[_0xd059ac(0x43d)](_0x353a01,_0x51a6cc,_0x117fcb,_0x39e794),_0x43d17c[_0xd059ac(0x3e6)](_0xd76976),this['_effectsContainer'][_0xd059ac(0x1d7)](_0x43d17c),this[_0xd059ac(0x860)][_0xd059ac(0x41b)](_0x43d17c);},Spriteset_Base[_0x551b1e(0x5ff)][_0x551b1e(0x749)]=function(_0x37df44){const _0x5af5ad=_0x551b1e;this[_0x5af5ad(0x860)][_0x5af5ad(0x223)](_0x37df44),this[_0x5af5ad(0x357)][_0x5af5ad(0x284)](_0x37df44);for(const _0x1a176d of _0x37df44[_0x5af5ad(0x303)]){_0x1a176d[_0x5af5ad(0x86a)]&&_0x1a176d[_0x5af5ad(0x86a)]();}_0x37df44[_0x5af5ad(0x23e)]();},Spriteset_Base[_0x551b1e(0x5ff)][_0x551b1e(0x364)]=function(){for(const _0x57d4ff of this['_fauxAnimationSprites']){this['removeFauxAnimation'](_0x57d4ff);}},Spriteset_Base['prototype']['isFauxAnimationPlaying']=function(){const _0x4dff3d=_0x551b1e;return this[_0x4dff3d(0x860)][_0x4dff3d(0x55a)]>0x0;},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x7af)]=Spriteset_Base[_0x551b1e(0x5ff)]['updatePosition'],Spriteset_Base[_0x551b1e(0x5ff)][_0x551b1e(0x704)]=function(){const _0x172021=_0x551b1e;VisuMZ['CoreEngine'][_0x172021(0x7af)]['call'](this),this['updatePositionCoreEngine']();},Spriteset_Base['prototype'][_0x551b1e(0x372)]=function(){const _0x48db35=_0x551b1e;if(!$gameScreen)return;if($gameScreen[_0x48db35(0x5c9)]<=0x0)return;this['x']-=Math[_0x48db35(0x4ed)]($gameScreen[_0x48db35(0x349)]());const _0x3d6be5=$gameScreen[_0x48db35(0x412)]();switch($gameScreen[_0x48db35(0x412)]()){case _0x48db35(0x4e7):this[_0x48db35(0x2f1)]();break;case'horizontal':this['updatePositionCoreEngineShakeHorz']();break;case _0x48db35(0x889):this[_0x48db35(0x8b4)]();break;default:this[_0x48db35(0x63b)]();break;}},Spriteset_Base[_0x551b1e(0x5ff)][_0x551b1e(0x2f1)]=function(){const _0x4df116=_0x551b1e,_0x43f450=VisuMZ[_0x4df116(0x2d6)][_0x4df116(0x47b)][_0x4df116(0x512)];if(_0x43f450&&_0x43f450[_0x4df116(0x2ab)]){if(_0x4df116(0x67a)==='JerxM'){_0x3f7f67[_0x4df116(0x688)](_0x55fbc9,_0x581f96);const _0x3101aa=_0x1af363[_0x4df116(0x5c0)];_0x310b42[_0x4df116(0x398)](_0x3101aa);}else return _0x43f450[_0x4df116(0x2ab)]['call'](this);}this['x']+=Math[_0x4df116(0x4ed)]($gameScreen[_0x4df116(0x349)]());},Spriteset_Base['prototype']['updatePositionCoreEngineShakeRand']=function(){const _0x55edff=_0x551b1e,_0x5c2e3c=VisuMZ[_0x55edff(0x2d6)][_0x55edff(0x47b)]['ScreenShake'];if(_0x5c2e3c&&_0x5c2e3c[_0x55edff(0x59f)])return _0x5c2e3c[_0x55edff(0x59f)][_0x55edff(0x511)](this);const _0x122107=$gameScreen[_0x55edff(0x39c)]*0.75,_0x5e6547=$gameScreen['_shakeSpeed']*0.6,_0x26d933=$gameScreen[_0x55edff(0x5c9)];this['x']+=Math[_0x55edff(0x4ed)](Math['randomInt'](_0x122107)-Math[_0x55edff(0x57d)](_0x5e6547))*(Math[_0x55edff(0x8d7)](_0x26d933,0x1e)*0.5),this['y']+=Math[_0x55edff(0x4ed)](Math[_0x55edff(0x57d)](_0x122107)-Math['randomInt'](_0x5e6547))*(Math['min'](_0x26d933,0x1e)*0.5);},Spriteset_Base[_0x551b1e(0x5ff)]['updatePositionCoreEngineShakeHorz']=function(){const _0x3295a4=_0x551b1e,_0x3a944c=VisuMZ[_0x3295a4(0x2d6)]['Settings']['ScreenShake'];if(_0x3a944c&&_0x3a944c['horzJS'])return _0x3a944c[_0x3295a4(0x780)][_0x3295a4(0x511)](this);const _0x40860d=$gameScreen[_0x3295a4(0x39c)]*0.75,_0x16aa68=$gameScreen[_0x3295a4(0x4db)]*0.6,_0x52f6c2=$gameScreen['_shakeDuration'];this['x']+=Math[_0x3295a4(0x4ed)](Math[_0x3295a4(0x57d)](_0x40860d)-Math[_0x3295a4(0x57d)](_0x16aa68))*(Math[_0x3295a4(0x8d7)](_0x52f6c2,0x1e)*0.5);},Spriteset_Base[_0x551b1e(0x5ff)][_0x551b1e(0x8b4)]=function(){const _0x3cb138=_0x551b1e,_0x2c63a8=VisuMZ[_0x3cb138(0x2d6)][_0x3cb138(0x47b)][_0x3cb138(0x512)];if(_0x2c63a8&&_0x2c63a8[_0x3cb138(0x2a4)])return _0x2c63a8[_0x3cb138(0x2a4)][_0x3cb138(0x511)](this);const _0x1ba909=$gameScreen[_0x3cb138(0x39c)]*0.75,_0x104d73=$gameScreen['_shakeSpeed']*0.6,_0x4e559b=$gameScreen[_0x3cb138(0x5c9)];this['y']+=Math[_0x3cb138(0x4ed)](Math[_0x3cb138(0x57d)](_0x1ba909)-Math['randomInt'](_0x104d73))*(Math['min'](_0x4e559b,0x1e)*0.5);},Spriteset_Battle['prototype'][_0x551b1e(0x481)]=function(){const _0x2fe1aa=_0x551b1e;this[_0x2fe1aa(0x67c)]=new PIXI[(_0x2fe1aa(0x78f))][(_0x2fe1aa(0x381))](clamp=!![]),this['_backgroundSprite']=new Sprite(),this[_0x2fe1aa(0x73d)][_0x2fe1aa(0x2b8)]=SceneManager[_0x2fe1aa(0x8e3)](),this[_0x2fe1aa(0x73d)][_0x2fe1aa(0x78f)]=[this[_0x2fe1aa(0x67c)]],this[_0x2fe1aa(0x8c0)][_0x2fe1aa(0x1d7)](this[_0x2fe1aa(0x73d)]);},VisuMZ['CoreEngine']['Spriteset_Battle_createEnemies']=Spriteset_Battle[_0x551b1e(0x5ff)]['createEnemies'],Spriteset_Battle[_0x551b1e(0x5ff)][_0x551b1e(0x8a6)]=function(){const _0x3969fa=_0x551b1e;this[_0x3969fa(0x326)]()&&this[_0x3969fa(0x741)](),VisuMZ[_0x3969fa(0x2d6)][_0x3969fa(0x2ea)][_0x3969fa(0x511)](this);},Spriteset_Battle[_0x551b1e(0x5ff)]['coreEngineRepositionEnemies']=function(){const _0x3a509d=_0x551b1e,_0x1489bc=VisuMZ['CoreEngine'][_0x3a509d(0x47b)][_0x3a509d(0x797)];if(!_0x1489bc)return![];if(Utils[_0x3a509d(0x27d)]>=_0x3a509d(0x613)&&!_0x1489bc[_0x3a509d(0x7bf)])return![];return _0x1489bc[_0x3a509d(0x32b)];},Spriteset_Battle[_0x551b1e(0x5ff)][_0x551b1e(0x741)]=function(){const _0xcc3293=_0x551b1e;for(member of $gameTroop[_0xcc3293(0x528)]()){member['moveRelativeToResolutionChange']();}},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x27e)]=Window_Base[_0x551b1e(0x5ff)]['initialize'],Window_Base[_0x551b1e(0x5ff)]['initialize']=function(_0x4025b8){const _0x117ed3=_0x551b1e;_0x4025b8['x']=Math[_0x117ed3(0x4ed)](_0x4025b8['x']),_0x4025b8['y']=Math['round'](_0x4025b8['y']),_0x4025b8[_0x117ed3(0x652)]=Math[_0x117ed3(0x4ed)](_0x4025b8[_0x117ed3(0x652)]),_0x4025b8['height']=Math[_0x117ed3(0x4ed)](_0x4025b8[_0x117ed3(0x66e)]),this['initDigitGrouping'](),VisuMZ[_0x117ed3(0x2d6)][_0x117ed3(0x27e)][_0x117ed3(0x511)](this,_0x4025b8),this[_0x117ed3(0x3cb)]();},Window_Base[_0x551b1e(0x5ff)]['initDigitGrouping']=function(){const _0x366755=_0x551b1e;this['_digitGrouping']=VisuMZ['CoreEngine'][_0x366755(0x47b)]['QoL'][_0x366755(0x7c3)],this[_0x366755(0x30a)]=VisuMZ[_0x366755(0x2d6)]['Settings'][_0x366755(0x862)][_0x366755(0x717)];},Window_Base['prototype']['lineHeight']=function(){const _0x255cd7=_0x551b1e;return VisuMZ[_0x255cd7(0x2d6)][_0x255cd7(0x47b)]['Window'][_0x255cd7(0x45b)];},Window_Base[_0x551b1e(0x5ff)][_0x551b1e(0x86f)]=function(){const _0x29600c=_0x551b1e;return VisuMZ['CoreEngine'][_0x29600c(0x47b)]['Window'][_0x29600c(0x5d4)];},Window_Base[_0x551b1e(0x5ff)]['updateBackOpacity']=function(){const _0x564d83=_0x551b1e;if($gameSystem['windowOpacity']){if(_0x564d83(0x693)!=='wWlBp')this[_0x564d83(0x457)]=$gameSystem['windowOpacity']();else{var _0x305bf9=_0x28902e(_0x239e92['$1']);try{_0x22d609*=_0x1b38d0(_0x305bf9);}catch(_0x590c94){if(_0x52a65b['isPlaytest']())_0x19fcbb[_0x564d83(0x538)](_0x590c94);}}}else this['backOpacity']=VisuMZ[_0x564d83(0x2d6)][_0x564d83(0x47b)][_0x564d83(0x1f4)]['BackOpacity'];},Window_Base[_0x551b1e(0x5ff)][_0x551b1e(0x806)]=function(){const _0x1f923c=_0x551b1e;return VisuMZ[_0x1f923c(0x2d6)][_0x1f923c(0x47b)][_0x1f923c(0x1f4)][_0x1f923c(0x885)];},Window_Base[_0x551b1e(0x5ff)][_0x551b1e(0x755)]=function(){const _0x3c3281=_0x551b1e;return VisuMZ[_0x3c3281(0x2d6)][_0x3c3281(0x47b)][_0x3c3281(0x1f4)]['OpenSpeed'];},VisuMZ['CoreEngine'][_0x551b1e(0x906)]=Window_Base[_0x551b1e(0x5ff)][_0x551b1e(0x572)],Window_Base[_0x551b1e(0x5ff)][_0x551b1e(0x572)]=function(){const _0x3ebe20=_0x551b1e;VisuMZ[_0x3ebe20(0x2d6)]['Window_Base_update'][_0x3ebe20(0x511)](this),this[_0x3ebe20(0x2e4)]();},Window_Base[_0x551b1e(0x5ff)][_0x551b1e(0x707)]=function(){const _0x4fd785=_0x551b1e;if(this[_0x4fd785(0x395)]){if('WyGUx'!==_0x4fd785(0x38b)){if(this[_0x4fd785(0x7e8)](_0x338f9d))return!![];}else this[_0x4fd785(0x456)]+=this[_0x4fd785(0x755)](),this['isOpen']()&&(this['_opening']=![]);}},Window_Base['prototype'][_0x551b1e(0x33c)]=function(){const _0x386fa9=_0x551b1e;this[_0x386fa9(0x7df)]&&(this[_0x386fa9(0x456)]-=this[_0x386fa9(0x755)](),this[_0x386fa9(0x415)]()&&(this[_0x386fa9(0x7df)]=![]));},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x5d2)]=Window_Base[_0x551b1e(0x5ff)][_0x551b1e(0x29a)],Window_Base['prototype']['drawText']=function(_0x112258,_0x3b84b8,_0x1eb0af,_0x1fc8c3,_0x30117a){const _0xa1ec5a=_0x551b1e;if(this[_0xa1ec5a(0x6fb)]())_0x112258=VisuMZ[_0xa1ec5a(0x61a)](_0x112258);VisuMZ['CoreEngine']['Window_Base_drawText'][_0xa1ec5a(0x511)](this,_0x112258,_0x3b84b8,_0x1eb0af,_0x1fc8c3,_0x30117a);},Window_Base[_0x551b1e(0x5ff)][_0x551b1e(0x6fb)]=function(){const _0x4599fe=_0x551b1e;return this[_0x4599fe(0x7e7)];},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x721)]=Window_Base['prototype']['createTextState'],Window_Base['prototype'][_0x551b1e(0x858)]=function(_0x1965a4,_0x18325a,_0x47cff8,_0x13d7e7){const _0x57d2c5=_0x551b1e;var _0x184319=VisuMZ[_0x57d2c5(0x2d6)][_0x57d2c5(0x721)]['call'](this,_0x1965a4,_0x18325a,_0x47cff8,_0x13d7e7);if(this[_0x57d2c5(0x7a9)]())_0x184319[_0x57d2c5(0x1c1)]=VisuMZ[_0x57d2c5(0x61a)](_0x184319[_0x57d2c5(0x1c1)]);return _0x184319;},Window_Base['prototype'][_0x551b1e(0x7a9)]=function(){const _0x31af51=_0x551b1e;return this[_0x31af51(0x30a)];},Window_Base[_0x551b1e(0x5ff)][_0x551b1e(0x873)]=function(_0x566a2b){const _0x2ae361=_0x551b1e;this[_0x2ae361(0x7e7)]=_0x566a2b;},Window_Base[_0x551b1e(0x5ff)][_0x551b1e(0x230)]=function(_0x5d36bc){this['_digitGroupingEx']=_0x5d36bc;},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x5e9)]=Window_Base[_0x551b1e(0x5ff)]['drawIcon'],Window_Base['prototype'][_0x551b1e(0x900)]=function(_0x3d9552,_0x50ea0a,_0x52da0c){const _0x29d2c3=_0x551b1e;_0x50ea0a=Math[_0x29d2c3(0x4ed)](_0x50ea0a),_0x52da0c=Math[_0x29d2c3(0x4ed)](_0x52da0c),VisuMZ[_0x29d2c3(0x2d6)]['Window_Base_drawIcon'][_0x29d2c3(0x511)](this,_0x3d9552,_0x50ea0a,_0x52da0c);},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x42a)]=Window_Base[_0x551b1e(0x5ff)][_0x551b1e(0x764)],Window_Base['prototype'][_0x551b1e(0x764)]=function(_0x4c6826,_0x568676,_0x383a08,_0x437fe4,_0x2200c4,_0x5473f8){const _0x1e6940=_0x551b1e;_0x2200c4=_0x2200c4||ImageManager[_0x1e6940(0x48e)],_0x5473f8=_0x5473f8||ImageManager[_0x1e6940(0x838)],_0x383a08=Math[_0x1e6940(0x4ed)](_0x383a08),_0x437fe4=Math[_0x1e6940(0x4ed)](_0x437fe4),_0x2200c4=Math[_0x1e6940(0x4ed)](_0x2200c4),_0x5473f8=Math[_0x1e6940(0x4ed)](_0x5473f8),VisuMZ['CoreEngine'][_0x1e6940(0x42a)][_0x1e6940(0x511)](this,_0x4c6826,_0x568676,_0x383a08,_0x437fe4,_0x2200c4,_0x5473f8);},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x623)]=Window_Base[_0x551b1e(0x5ff)][_0x551b1e(0x7c1)],Window_Base[_0x551b1e(0x5ff)]['drawCharacter']=function(_0x3e6b45,_0x5dd10e,_0x3da3b0,_0x1e8d07){const _0x3714a2=_0x551b1e;_0x3da3b0=Math['round'](_0x3da3b0),_0x1e8d07=Math[_0x3714a2(0x4ed)](_0x1e8d07),VisuMZ[_0x3714a2(0x2d6)]['Window_Base_drawCharacter']['call'](this,_0x3e6b45,_0x5dd10e,_0x3da3b0,_0x1e8d07);},VisuMZ[_0x551b1e(0x2d6)]['Window_Selectable_itemRect']=Window_Selectable[_0x551b1e(0x5ff)][_0x551b1e(0x509)],Window_Selectable[_0x551b1e(0x5ff)][_0x551b1e(0x509)]=function(_0x294e0f){const _0x2c11c0=_0x551b1e;let _0x573702=VisuMZ[_0x2c11c0(0x2d6)][_0x2c11c0(0x520)][_0x2c11c0(0x511)](this,_0x294e0f);return _0x573702['x']=Math[_0x2c11c0(0x4ed)](_0x573702['x']),_0x573702['y']=Math['round'](_0x573702['y']),_0x573702['width']=Math[_0x2c11c0(0x4ed)](_0x573702[_0x2c11c0(0x652)]),_0x573702['height']=Math[_0x2c11c0(0x4ed)](_0x573702['height']),_0x573702;},VisuMZ['CoreEngine']['Window_StatusBase_drawActorSimpleStatus']=Window_StatusBase['prototype']['drawActorSimpleStatus'],Window_StatusBase['prototype'][_0x551b1e(0x8b3)]=function(_0x208cd4,_0x4ddff4,_0x2626ba){const _0x81f452=_0x551b1e;_0x4ddff4=Math[_0x81f452(0x4ed)](_0x4ddff4),_0x2626ba=Math[_0x81f452(0x4ed)](_0x2626ba),VisuMZ['CoreEngine']['Window_StatusBase_drawActorSimpleStatus'][_0x81f452(0x511)](this,_0x208cd4,_0x4ddff4,_0x2626ba);},Window_Base[_0x551b1e(0x5ff)]['initCoreEasing']=function(){const _0x4389d8=_0x551b1e;this[_0x4389d8(0x2f9)]={'duration':0x0,'wholeDuration':0x0,'type':_0x4389d8(0x4fe),'targetX':this['x'],'targetY':this['y'],'targetScaleX':this['scale']['x'],'targetScaleY':this[_0x4389d8(0x82e)]['y'],'targetOpacity':this[_0x4389d8(0x26f)],'targetBackOpacity':this[_0x4389d8(0x457)],'targetContentsOpacity':this[_0x4389d8(0x734)]};},Window_Base['prototype'][_0x551b1e(0x2e4)]=function(){const _0x784669=_0x551b1e;if(!this[_0x784669(0x2f9)])return;if(this[_0x784669(0x2f9)][_0x784669(0x196)]<=0x0)return;this['x']=this[_0x784669(0x30e)](this['x'],this['_coreEasing']['targetX']),this['y']=this['applyCoreEasing'](this['y'],this[_0x784669(0x2f9)]['targetY']),this['scale']['x']=this[_0x784669(0x30e)](this[_0x784669(0x82e)]['x'],this[_0x784669(0x2f9)][_0x784669(0x59c)]),this[_0x784669(0x82e)]['y']=this[_0x784669(0x30e)](this[_0x784669(0x82e)]['y'],this[_0x784669(0x2f9)][_0x784669(0x64c)]),this['opacity']=this[_0x784669(0x30e)](this[_0x784669(0x26f)],this[_0x784669(0x2f9)][_0x784669(0x390)]),this[_0x784669(0x457)]=this[_0x784669(0x30e)](this[_0x784669(0x457)],this[_0x784669(0x2f9)][_0x784669(0x600)]),this['contentsOpacity']=this[_0x784669(0x30e)](this[_0x784669(0x734)],this['_coreEasing'][_0x784669(0x1e6)]),this[_0x784669(0x2f9)][_0x784669(0x196)]--;},Window_Base[_0x551b1e(0x5ff)][_0x551b1e(0x30e)]=function(_0x3349b2,_0x397d8c){const _0x2d2a39=_0x551b1e;if(!this['_coreEasing'])return _0x397d8c;const _0x4726e3=this[_0x2d2a39(0x2f9)][_0x2d2a39(0x196)],_0x49d8e2=this[_0x2d2a39(0x2f9)][_0x2d2a39(0x3b6)],_0x1ad8ff=this[_0x2d2a39(0x91c)]((_0x49d8e2-_0x4726e3)/_0x49d8e2),_0x185d6a=this[_0x2d2a39(0x91c)]((_0x49d8e2-_0x4726e3+0x1)/_0x49d8e2),_0x1960ef=(_0x3349b2-_0x397d8c*_0x1ad8ff)/(0x1-_0x1ad8ff);return _0x1960ef+(_0x397d8c-_0x1960ef)*_0x185d6a;},Window_Base['prototype'][_0x551b1e(0x91c)]=function(_0x4a5cba){const _0x1064c9=_0x551b1e;if(!this['_coreEasing'])return _0x4a5cba;return VisuMZ['ApplyEasing'](_0x4a5cba,this[_0x1064c9(0x2f9)]['type']||_0x1064c9(0x4fe));},Window_Base[_0x551b1e(0x5ff)][_0x551b1e(0x5cf)]=function(_0x23e8c0,_0x46b8ae){const _0x49e76e=_0x551b1e;if(!this['_coreEasing'])return;this['x']=this[_0x49e76e(0x2f9)][_0x49e76e(0x7a3)],this['y']=this[_0x49e76e(0x2f9)]['targetY'],this[_0x49e76e(0x82e)]['x']=this[_0x49e76e(0x2f9)][_0x49e76e(0x59c)],this[_0x49e76e(0x82e)]['y']=this[_0x49e76e(0x2f9)]['targetScaleY'],this[_0x49e76e(0x26f)]=this['_coreEasing'][_0x49e76e(0x390)],this[_0x49e76e(0x457)]=this[_0x49e76e(0x2f9)]['targetBackOpacity'],this[_0x49e76e(0x734)]=this[_0x49e76e(0x2f9)][_0x49e76e(0x1e6)],this[_0x49e76e(0x7db)](_0x23e8c0,_0x46b8ae,this['x'],this['y'],this[_0x49e76e(0x82e)]['x'],this[_0x49e76e(0x82e)]['y'],this['opacity'],this[_0x49e76e(0x457)],this[_0x49e76e(0x734)]);},Window_Base['prototype'][_0x551b1e(0x7db)]=function(_0xc2b99f,_0x558804,_0x426d98,_0x7f9fce,_0x371a03,_0x3cc517,_0x5e54bf,_0x4fd573,_0x209fb9){const _0x37083d=_0x551b1e;this[_0x37083d(0x2f9)]={'duration':_0xc2b99f,'wholeDuration':_0xc2b99f,'type':_0x558804,'targetX':_0x426d98,'targetY':_0x7f9fce,'targetScaleX':_0x371a03,'targetScaleY':_0x3cc517,'targetOpacity':_0x5e54bf,'targetBackOpacity':_0x4fd573,'targetContentsOpacity':_0x209fb9};},Window_Base[_0x551b1e(0x5ff)][_0x551b1e(0x274)]=function(_0x33e36a,_0x2a81b6,_0xe45059,_0x527c1a,_0x121658){const _0x16634d=_0x551b1e;this[_0x16634d(0x627)](),this['contents'][_0x16634d(0x565)]=VisuMZ[_0x16634d(0x2d6)][_0x16634d(0x47b)][_0x16634d(0x685)][_0x16634d(0x584)];const _0x5d5b77=VisuMZ[_0x16634d(0x2d6)]['Settings'][_0x16634d(0x685)][_0x16634d(0x2dd)];if(_0x5d5b77>0x0&&_0x2a81b6===TextManager[_0x16634d(0x4eb)]){const _0xfa4349=_0x527c1a+(this[_0x16634d(0x404)]()-ImageManager[_0x16634d(0x2c9)])/0x2;this[_0x16634d(0x900)](_0x5d5b77,_0xe45059+(_0x121658-ImageManager['iconWidth']),_0xfa4349),_0x121658-=ImageManager[_0x16634d(0x337)]+0x4;}else this[_0x16634d(0x631)](ColorManager['systemColor']()),this[_0x16634d(0x29a)](_0x2a81b6,_0xe45059,_0x527c1a,_0x121658,_0x16634d(0x619)),_0x121658-=this[_0x16634d(0x84e)](_0x2a81b6)+0x6;this[_0x16634d(0x426)]();const _0x24b95c=this['textWidth'](this['_digitGrouping']?VisuMZ[_0x16634d(0x61a)](_0x33e36a):_0x33e36a);_0x24b95c>_0x121658?this[_0x16634d(0x29a)](VisuMZ[_0x16634d(0x2d6)][_0x16634d(0x47b)][_0x16634d(0x685)][_0x16634d(0x26e)],_0xe45059,_0x527c1a,_0x121658,_0x16634d(0x619)):this[_0x16634d(0x29a)](_0x33e36a,_0xe45059,_0x527c1a,_0x121658,_0x16634d(0x619)),this['resetFontSettings']();},Window_Base[_0x551b1e(0x5ff)][_0x551b1e(0x72e)]=function(_0x21fdd1,_0x286725,_0x371198,_0x119e64,_0x194229){const _0x3e6525=_0x551b1e,_0x423737=ImageManager['loadSystem'](_0x3e6525(0x2d3)),_0x108fd1=ImageManager[_0x3e6525(0x337)],_0x1e0de8=ImageManager['iconHeight'],_0xbef69f=_0x21fdd1%0x10*_0x108fd1,_0x45ba8d=Math['floor'](_0x21fdd1/0x10)*_0x1e0de8,_0x54e2e3=_0x119e64,_0x3058c0=_0x119e64;this[_0x3e6525(0x292)][_0x3e6525(0x816)][_0x3e6525(0x23d)]=_0x194229,this['contents'][_0x3e6525(0x6eb)](_0x423737,_0xbef69f,_0x45ba8d,_0x108fd1,_0x1e0de8,_0x286725,_0x371198,_0x54e2e3,_0x3058c0),this[_0x3e6525(0x292)][_0x3e6525(0x816)]['imageSmoothingEnabled']=!![];},Window_Base[_0x551b1e(0x5ff)][_0x551b1e(0x2de)]=function(_0x56399a,_0x553c6b,_0x95d739,_0x352624,_0x43531d,_0x5b7214){const _0x2a7134=_0x551b1e,_0x4c2dcd=Math[_0x2a7134(0x4ad)]((_0x95d739-0x2)*_0x352624),_0x38833e=Sprite_Gauge[_0x2a7134(0x5ff)][_0x2a7134(0x4f4)][_0x2a7134(0x511)](this),_0x26dbdc=_0x553c6b+this[_0x2a7134(0x404)]()-_0x38833e-0x2;this[_0x2a7134(0x292)][_0x2a7134(0x8fe)](_0x56399a,_0x26dbdc,_0x95d739,_0x38833e,ColorManager[_0x2a7134(0x319)]()),this[_0x2a7134(0x292)][_0x2a7134(0x2fb)](_0x56399a+0x1,_0x26dbdc+0x1,_0x4c2dcd,_0x38833e-0x2,_0x43531d,_0x5b7214);},Window_Selectable[_0x551b1e(0x5ff)][_0x551b1e(0x643)]=function(_0x4f7f72){const _0x2cbe04=_0x551b1e;let _0x5d8d9e=this['index']();const _0x2a3bc4=this[_0x2cbe04(0x524)](),_0x4d23bf=this[_0x2cbe04(0x4c2)]();if(this[_0x2cbe04(0x375)]()&&(_0x5d8d9e<_0x2a3bc4||_0x4f7f72&&_0x4d23bf===0x1)){if(_0x2cbe04(0x504)===_0x2cbe04(0x3da)){const _0xfac868=_0x2cbe04(0x3c6);this[_0x2cbe04(0x77c)]=this[_0x2cbe04(0x77c)]||{};if(this[_0x2cbe04(0x77c)][_0xfac868])return this['_colorCache'][_0xfac868];const _0x41f1b7=_0x54198c[_0x2cbe04(0x2d6)]['Settings'][_0x2cbe04(0x574)]['ColorExpGauge2'];return this[_0x2cbe04(0x2d2)](_0xfac868,_0x41f1b7);}else{_0x5d8d9e+=_0x4d23bf;if(_0x5d8d9e>=_0x2a3bc4)_0x5d8d9e=_0x2a3bc4-0x1;this[_0x2cbe04(0x416)](_0x5d8d9e);}}else{if(!this['isUseModernControls']()){if('OcKnP'===_0x2cbe04(0x8c5)){const _0x453b6f=_0x2cbe04(0x781);this[_0x2cbe04(0x67f)][_0x2cbe04(0x223)](_0x17ad08)[_0x2cbe04(0x223)]('')['remove'](null);const _0x51d71e=this[_0x2cbe04(0x67f)][_0x2cbe04(0x1e2)](_0x2cbe04(0x1d8))[_0x2cbe04(0x49e)]();_0x15f393['CoreEngine'][_0x2cbe04(0x807)](_0x51d71e,_0x453b6f,!![]),_0x5f03af[_0x2cbe04(0x607)][_0x2cbe04(0x5f2)]=!![];}else{if(_0x5d8d9e<_0x2a3bc4-_0x4d23bf||_0x4f7f72&&_0x4d23bf===0x1){if(_0x2cbe04(0x6de)!==_0x2cbe04(0x6de))return _0x185c9d[_0x2cbe04(0x2d6)][_0x2cbe04(0x5f7)]['call'](this,_0x30f1d0);else this[_0x2cbe04(0x416)]((_0x5d8d9e+_0x4d23bf)%_0x2a3bc4);}}}}},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x495)]=Window_Selectable[_0x551b1e(0x5ff)][_0x551b1e(0x643)],Window_Selectable[_0x551b1e(0x5ff)][_0x551b1e(0x643)]=function(_0x182374){const _0x11e2d8=_0x551b1e;this[_0x11e2d8(0x375)]()&&_0x182374&&this[_0x11e2d8(0x4c2)]()===0x1&&this[_0x11e2d8(0x622)]()===this[_0x11e2d8(0x524)]()-0x1?this[_0x11e2d8(0x416)](0x0):VisuMZ[_0x11e2d8(0x2d6)][_0x11e2d8(0x495)][_0x11e2d8(0x511)](this,_0x182374);},Window_Selectable[_0x551b1e(0x5ff)]['cursorUp']=function(_0x2ddfe8){const _0x472581=_0x551b1e;let _0x506709=Math['max'](0x0,this[_0x472581(0x622)]());const _0x3f82dd=this[_0x472581(0x524)](),_0x367aec=this[_0x472581(0x4c2)]();if(this[_0x472581(0x375)]()&&_0x506709>0x0||_0x2ddfe8&&_0x367aec===0x1){_0x506709-=_0x367aec;if(_0x506709<=0x0)_0x506709=0x0;this[_0x472581(0x416)](_0x506709);}else!this[_0x472581(0x375)]()&&((_0x506709>=_0x367aec||_0x2ddfe8&&_0x367aec===0x1)&&this['smoothSelect']((_0x506709-_0x367aec+_0x3f82dd)%_0x3f82dd));},VisuMZ[_0x551b1e(0x2d6)]['Window_Selectable_cursorUp']=Window_Selectable[_0x551b1e(0x5ff)][_0x551b1e(0x1dd)],Window_Selectable[_0x551b1e(0x5ff)]['cursorUp']=function(_0x7e73bb){const _0x2c6ca0=_0x551b1e;if(this[_0x2c6ca0(0x375)]()&&_0x7e73bb&&this['maxCols']()===0x1&&this[_0x2c6ca0(0x622)]()===0x0){if(_0x2c6ca0(0x31b)!=='FHDyh'){var _0xdae160=_0x15f1fc(_0x11413b['$1']);try{_0x442fe9*=_0x49e24b(_0xdae160);}catch(_0x562aea){if(_0x13ee60[_0x2c6ca0(0x376)]())_0x2abc0e[_0x2c6ca0(0x538)](_0x562aea);}}else this['smoothSelect'](this[_0x2c6ca0(0x524)]()-0x1);}else VisuMZ[_0x2c6ca0(0x2d6)]['Window_Selectable_cursorUp'][_0x2c6ca0(0x511)](this,_0x7e73bb);},Window_Selectable[_0x551b1e(0x5ff)]['isUseModernControls']=function(){const _0x135bc7=_0x551b1e;return VisuMZ['CoreEngine'][_0x135bc7(0x47b)][_0x135bc7(0x862)][_0x135bc7(0x449)];},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x317)]=Window_Selectable[_0x551b1e(0x5ff)]['processCursorMove'],Window_Selectable[_0x551b1e(0x5ff)][_0x551b1e(0x192)]=function(){const _0x4445ad=_0x551b1e;if(this['isUseModernControls']()){if('xRWCU'!==_0x4445ad(0x8c6)){_0x5a3b4d[_0x4445ad(0x2d6)][_0x4445ad(0x47b)][_0x4445ad(0x8b6)][_0x4445ad(0x407)][_0x4445ad(0x805)][_0x4445ad(0x511)](this);if(_0x164f7a['subtitle']!==''&&_0x40d68c['subtitle']!==_0x4445ad(0x3b2))this[_0x4445ad(0x6b3)]();if(_0x4ed684['version']!==''&&_0x16c147[_0x4445ad(0x6e1)]!==_0x4445ad(0x3fe))this['drawGameVersion']();}else this[_0x4445ad(0x65f)](),this[_0x4445ad(0x356)]();}else VisuMZ[_0x4445ad(0x2d6)][_0x4445ad(0x317)]['call'](this);},Window_Selectable[_0x551b1e(0x5ff)][_0x551b1e(0x733)]=function(){return!![];},Window_Selectable['prototype']['processCursorMoveModernControls']=function(){const _0x114052=_0x551b1e;if(this['isCursorMovable']()){if(_0x114052(0x4da)===_0x114052(0x2c6))this[_0x114052(0x29a)](this[_0x114052(0x78a)](),_0x4bee9e['x'],_0x34a758['y'],_0x4dba67[_0x114052(0x652)],_0x114052(0x619));else{const _0x37c73e=this[_0x114052(0x622)]();Input[_0x114052(0x5e2)](_0x114052(0x69d))&&(Input[_0x114052(0x8fa)](_0x114052(0x566))&&this[_0x114052(0x733)]()?this['cursorPagedown']():_0x114052(0x5de)===_0x114052(0x5de)?this[_0x114052(0x643)](Input[_0x114052(0x5ae)]('down')):_0x36734f[_0x114052(0x4ac)][_0x114052(0x6ed)]=_0x114052(0x924));Input[_0x114052(0x5e2)]('up')&&(_0x114052(0x19e)==='wUAtP'?Input['isPressed']('shift')&&this[_0x114052(0x733)]()?this[_0x114052(0x1b9)]():_0x114052(0x5fe)!==_0x114052(0x330)?this[_0x114052(0x1dd)](Input[_0x114052(0x5ae)]('up')):(_0x4b147f=_0x394ce5[_0x114052(0x4ed)](_0x1eadb9),_0x2ddb56=_0x4d4482['round'](_0x4063b3),_0x37cc74[_0x114052(0x2d6)][_0x114052(0x5e9)]['call'](this,_0x1d4f8b,_0xb506ea,_0xdb9cb)):_0x3b0e2c+='%1\x0a'[_0x114052(0x7cb)](_0x3520bf['parameters'][0x0]));Input[_0x114052(0x5e2)](_0x114052(0x619))&&(_0x114052(0x39f)!=='BqeIu'?this[_0x114052(0x58e)]='SV':this[_0x114052(0x3c4)](Input[_0x114052(0x5ae)](_0x114052(0x619))));Input[_0x114052(0x5e2)](_0x114052(0x40e))&&this[_0x114052(0x6d5)](Input[_0x114052(0x5ae)](_0x114052(0x40e)));!this[_0x114052(0x6f2)](_0x114052(0x21a))&&Input[_0x114052(0x5e2)](_0x114052(0x21a))&&this[_0x114052(0x923)]();!this[_0x114052(0x6f2)](_0x114052(0x653))&&Input[_0x114052(0x5e2)]('pageup')&&this[_0x114052(0x1b9)]();if(this[_0x114052(0x622)]()!==_0x37c73e){if(_0x114052(0x710)!==_0x114052(0x6d7))this[_0x114052(0x70f)]();else{if(this[_0x114052(0x702)]>0x63)return this[_0x114052(0x63d)](_0xfcb7a2);return _0x329a7f[_0x114052(0x2d6)][_0x114052(0x7f1)]['call'](this,_0x2d4712);}}}}},Window_Selectable['prototype'][_0x551b1e(0x356)]=function(){const _0x39c495=_0x551b1e;if(this[_0x39c495(0x1fb)]()){const _0x132c9e=this[_0x39c495(0x622)]();if(Input[_0x39c495(0x5ae)](_0x39c495(0x244))){if(_0x39c495(0x1f7)!=='ySKld'){if(_0xc91e6e[_0x39c495(0x8d0)]())return;_0x17957c[_0x39c495(0x688)](_0x580fa4,_0xbfe3da);const _0x2becd9=_0x31f49a[_0x39c495(0x8d7)](_0x1827b3['StartID'],_0x2f65dc[_0x39c495(0x626)]),_0x1c5f37=_0x5131f1[_0x39c495(0x46a)](_0x58b85c[_0x39c495(0x79d)],_0x2428d3[_0x39c495(0x626)]),_0x18dc8f=(_0x164b5b[_0x39c495(0x833)]||0x0)/0x64;for(let _0x5729fe=_0x2becd9;_0x5729fe<=_0x1c5f37;_0x5729fe++){const _0x2ada72=_0x32d746['random']()<=_0x18dc8f;_0x49d795[_0x39c495(0x5cd)](_0x5729fe,_0x2ada72);}}else this['smoothSelect'](Math[_0x39c495(0x8d7)](this[_0x39c495(0x622)](),0x0));}Input['isTriggered'](_0x39c495(0x85c))&&this[_0x39c495(0x416)](Math[_0x39c495(0x46a)](this[_0x39c495(0x622)](),this[_0x39c495(0x524)]()-0x1)),this[_0x39c495(0x622)]()!==_0x132c9e&&(_0x39c495(0x782)!==_0x39c495(0x5f4)?this[_0x39c495(0x70f)]():_0x81b99a[_0x39c495(0x5d3)]&&(this[_0x39c495(0x705)]=_0x39c495(0x8dd)));}},VisuMZ[_0x551b1e(0x2d6)]['Window_Selectable_processTouch']=Window_Selectable[_0x551b1e(0x5ff)][_0x551b1e(0x8c9)],Window_Selectable[_0x551b1e(0x5ff)][_0x551b1e(0x8c9)]=function(){const _0x36a202=_0x551b1e;this['isUseModernControls']()?_0x36a202(0x2c3)==='shyHb'?this[_0x36a202(0x923)]():this[_0x36a202(0x85e)]():VisuMZ[_0x36a202(0x2d6)][_0x36a202(0x775)][_0x36a202(0x511)](this);},Window_Selectable[_0x551b1e(0x5ff)][_0x551b1e(0x85e)]=function(){const _0xd1a001=_0x551b1e;VisuMZ[_0xd1a001(0x2d6)][_0xd1a001(0x775)][_0xd1a001(0x511)](this);},Window_Selectable[_0x551b1e(0x5ff)][_0x551b1e(0x4b5)]=function(){const _0x10ae1b=_0x551b1e;return VisuMZ[_0x10ae1b(0x2d6)][_0x10ae1b(0x47b)]['Window'][_0x10ae1b(0x66a)];},Window_Selectable['prototype']['rowSpacing']=function(){const _0x279495=_0x551b1e;return VisuMZ[_0x279495(0x2d6)]['Settings']['Window'][_0x279495(0x418)];},Window_Selectable[_0x551b1e(0x5ff)][_0x551b1e(0x20e)]=function(){const _0x1eb388=_0x551b1e;return Window_Scrollable[_0x1eb388(0x5ff)][_0x1eb388(0x20e)][_0x1eb388(0x511)](this)+VisuMZ['CoreEngine']['Settings'][_0x1eb388(0x1f4)][_0x1eb388(0x686)];;},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x45d)]=Window_Selectable[_0x551b1e(0x5ff)]['drawBackgroundRect'],Window_Selectable[_0x551b1e(0x5ff)]['drawBackgroundRect']=function(_0x382ed5){const _0x321af0=_0x551b1e,_0x40e2c5=VisuMZ[_0x321af0(0x2d6)][_0x321af0(0x47b)][_0x321af0(0x1f4)];if(_0x40e2c5[_0x321af0(0x482)]===![])return;_0x40e2c5[_0x321af0(0x81a)]?_0x40e2c5[_0x321af0(0x81a)][_0x321af0(0x511)](this,_0x382ed5):VisuMZ[_0x321af0(0x2d6)][_0x321af0(0x45d)][_0x321af0(0x511)](this,_0x382ed5);},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x839)]=Window_Gold[_0x551b1e(0x5ff)][_0x551b1e(0x429)],Window_Gold[_0x551b1e(0x5ff)]['refresh']=function(){const _0x3c2291=_0x551b1e;this[_0x3c2291(0x496)]()?this['drawGoldItemStyle']():VisuMZ[_0x3c2291(0x2d6)][_0x3c2291(0x839)][_0x3c2291(0x511)](this);},Window_Gold['prototype'][_0x551b1e(0x496)]=function(){const _0x2af7ae=_0x551b1e;if(TextManager[_0x2af7ae(0x4eb)]!==this[_0x2af7ae(0x4eb)]())return![];return VisuMZ[_0x2af7ae(0x2d6)][_0x2af7ae(0x47b)]['Gold'][_0x2af7ae(0x7a6)];},Window_Gold[_0x551b1e(0x5ff)][_0x551b1e(0x661)]=function(){const _0x2e7c93=_0x551b1e;this[_0x2e7c93(0x627)](),this[_0x2e7c93(0x292)]['clear'](),this[_0x2e7c93(0x292)][_0x2e7c93(0x565)]=VisuMZ['CoreEngine'][_0x2e7c93(0x47b)]['Gold'][_0x2e7c93(0x584)];const _0x3eb16d=VisuMZ[_0x2e7c93(0x2d6)][_0x2e7c93(0x47b)][_0x2e7c93(0x685)][_0x2e7c93(0x2dd)],_0x25174e=this[_0x2e7c93(0x212)](0x0);if(_0x3eb16d>0x0){const _0x346646=_0x25174e['y']+(this[_0x2e7c93(0x404)]()-ImageManager['iconHeight'])/0x2;this[_0x2e7c93(0x900)](_0x3eb16d,_0x25174e['x'],_0x346646);const _0x541725=ImageManager['iconWidth']+0x4;_0x25174e['x']+=_0x541725,_0x25174e[_0x2e7c93(0x652)]-=_0x541725;}this[_0x2e7c93(0x631)](ColorManager[_0x2e7c93(0x2bb)]()),this[_0x2e7c93(0x29a)](this[_0x2e7c93(0x4eb)](),_0x25174e['x'],_0x25174e['y'],_0x25174e[_0x2e7c93(0x652)],_0x2e7c93(0x40e));const _0x1b526e=this['textWidth'](this[_0x2e7c93(0x4eb)]())+0x6;;_0x25174e['x']+=_0x1b526e,_0x25174e[_0x2e7c93(0x652)]-=_0x1b526e,this[_0x2e7c93(0x426)]();const _0x5af84e=this['value'](),_0x2e541a=this['textWidth'](this[_0x2e7c93(0x7e7)]?VisuMZ[_0x2e7c93(0x61a)](this[_0x2e7c93(0x78a)]()):this[_0x2e7c93(0x78a)]());_0x2e541a>_0x25174e[_0x2e7c93(0x652)]?this['drawText'](VisuMZ['CoreEngine'][_0x2e7c93(0x47b)][_0x2e7c93(0x685)][_0x2e7c93(0x26e)],_0x25174e['x'],_0x25174e['y'],_0x25174e[_0x2e7c93(0x652)],_0x2e7c93(0x619)):this[_0x2e7c93(0x29a)](this[_0x2e7c93(0x78a)](),_0x25174e['x'],_0x25174e['y'],_0x25174e[_0x2e7c93(0x652)],_0x2e7c93(0x619)),this[_0x2e7c93(0x627)]();},Window_StatusBase[_0x551b1e(0x5ff)][_0x551b1e(0x32a)]=function(_0x228bb6,_0x14cbae,_0x3e3e18,_0x266228,_0x4794a5){const _0xf6ef4b=_0x551b1e;_0x266228=String(_0x266228||'')[_0xf6ef4b(0x724)]();if(VisuMZ[_0xf6ef4b(0x2d6)]['Settings'][_0xf6ef4b(0x698)]['DrawIcons']){const _0x158647=VisuMZ['GetParamIcon'](_0x266228);_0x4794a5?(this[_0xf6ef4b(0x72e)](_0x158647,_0x228bb6,_0x14cbae,this['gaugeLineHeight']()),_0x3e3e18-=this[_0xf6ef4b(0x648)]()+0x2,_0x228bb6+=this[_0xf6ef4b(0x648)]()+0x2):(this['drawIcon'](_0x158647,_0x228bb6+0x2,_0x14cbae+0x2),_0x3e3e18-=ImageManager[_0xf6ef4b(0x337)]+0x4,_0x228bb6+=ImageManager[_0xf6ef4b(0x337)]+0x4);}const _0x11e484=TextManager[_0xf6ef4b(0x55f)](_0x266228);this[_0xf6ef4b(0x627)](),this['changeTextColor'](ColorManager['systemColor']()),_0x4794a5?(this[_0xf6ef4b(0x292)][_0xf6ef4b(0x565)]=this[_0xf6ef4b(0x450)](),this[_0xf6ef4b(0x292)]['drawText'](_0x11e484,_0x228bb6,_0x14cbae,_0x3e3e18,this['gaugeLineHeight'](),'left')):this[_0xf6ef4b(0x29a)](_0x11e484,_0x228bb6,_0x14cbae,_0x3e3e18),this['resetFontSettings']();},Window_StatusBase['prototype'][_0x551b1e(0x450)]=function(){const _0x522eb0=_0x551b1e;return $gameSystem[_0x522eb0(0x64a)]()-0x8;},Window_StatusBase[_0x551b1e(0x5ff)][_0x551b1e(0x736)]=function(_0x4bd50c,_0x562577,_0x2485ee,_0x4c2367){const _0x51a140=_0x551b1e;_0x4c2367=_0x4c2367||0xa8,this[_0x51a140(0x426)]();if(VisuMZ[_0x51a140(0x2d6)][_0x51a140(0x47b)]['UI'][_0x51a140(0x8d8)])this[_0x51a140(0x197)](_0x4bd50c[_0x51a140(0x77a)]()['name'],_0x562577,_0x2485ee,_0x4c2367);else{const _0xcc47b2=_0x4bd50c[_0x51a140(0x77a)]()[_0x51a140(0x8aa)][_0x51a140(0x1a5)](/\\I\[(\d+)\]/gi,'');this[_0x51a140(0x29a)](_0xcc47b2,_0x562577,_0x2485ee,_0x4c2367);}},Window_StatusBase['prototype']['drawActorNickname']=function(_0x4c6cd8,_0x34777b,_0x889bd7,_0x9abac1){const _0x27f763=_0x551b1e;_0x9abac1=_0x9abac1||0x10e,this['resetTextColor']();if(VisuMZ[_0x27f763(0x2d6)][_0x27f763(0x47b)]['UI'][_0x27f763(0x891)])this[_0x27f763(0x197)](_0x4c6cd8[_0x27f763(0x887)](),_0x34777b,_0x889bd7,_0x9abac1);else{const _0x18aacb=_0x4c6cd8[_0x27f763(0x887)]()[_0x27f763(0x1a5)](/\\I\[(\d+)\]/gi,'');this['drawText'](_0x4c6cd8['nickname'](),_0x34777b,_0x889bd7,_0x9abac1);}},VisuMZ[_0x551b1e(0x2d6)]['Window_StatusBase_drawActorLevel']=Window_StatusBase[_0x551b1e(0x5ff)]['drawActorLevel'],Window_StatusBase[_0x551b1e(0x5ff)][_0x551b1e(0x8de)]=function(_0x20d22a,_0x264714,_0x1171d2){const _0x418a32=_0x551b1e;if(this[_0x418a32(0x38c)]())this[_0x418a32(0x763)](_0x20d22a,_0x264714,_0x1171d2);VisuMZ['CoreEngine']['Window_StatusBase_drawActorLevel'][_0x418a32(0x511)](this,_0x20d22a,_0x264714,_0x1171d2);},Window_StatusBase['prototype']['isExpGaugeDrawn']=function(){const _0x35ce63=_0x551b1e;return VisuMZ[_0x35ce63(0x2d6)][_0x35ce63(0x47b)]['UI']['LvExpGauge'];},Window_StatusBase[_0x551b1e(0x5ff)]['drawActorExpGauge']=function(_0x67d239,_0x1e864d,_0x4f4946){const _0x4f6d4d=_0x551b1e;if(!_0x67d239)return;if(!_0x67d239[_0x4f6d4d(0x4e5)]())return;const _0x112342=0x80,_0x5a3862=_0x67d239['expRate']();let _0x12a191=ColorManager[_0x4f6d4d(0x582)](),_0x4dcafb=ColorManager[_0x4f6d4d(0x526)]();_0x5a3862>=0x1&&('nFloy'!==_0x4f6d4d(0x219)?(this[_0x4f6d4d(0x635)]&&this[_0x4f6d4d(0x635)][_0x4f6d4d(0x4f9)](_0x1c90ae[_0x4f6d4d(0x383)][_0x4f6d4d(0x65c)]),this[_0x4f6d4d(0x879)]&&this['_listWindow'][_0x4f6d4d(0x4f9)](_0x33e2a7[_0x4f6d4d(0x383)][_0x4f6d4d(0x605)])):(_0x12a191=ColorManager[_0x4f6d4d(0x365)](),_0x4dcafb=ColorManager[_0x4f6d4d(0x503)]())),this[_0x4f6d4d(0x2de)](_0x1e864d,_0x4f4946,_0x112342,_0x5a3862,_0x12a191,_0x4dcafb);},Window_EquipStatus[_0x551b1e(0x5ff)][_0x551b1e(0x4f0)]=function(){const _0x40660f=_0x551b1e;let _0x48bfb9=0x0;for(const _0x133aab of VisuMZ[_0x40660f(0x2d6)][_0x40660f(0x47b)][_0x40660f(0x698)][_0x40660f(0x359)]){const _0x41ab86=this[_0x40660f(0x86f)](),_0x41e008=this['paramY'](_0x48bfb9);this[_0x40660f(0x3e4)](_0x41ab86,_0x41e008,_0x133aab),_0x48bfb9++;}},Window_EquipStatus['prototype'][_0x551b1e(0x620)]=function(_0x2291a9,_0x249ba5,_0x485823){const _0x1af92b=_0x551b1e,_0x28c4b4=this['paramX']()-this[_0x1af92b(0x86f)]()*0x2;this[_0x1af92b(0x32a)](_0x2291a9,_0x249ba5,_0x28c4b4,_0x485823,![]);},Window_EquipStatus[_0x551b1e(0x5ff)][_0x551b1e(0x63e)]=function(_0x45b738,_0x516dc2,_0x56e70e){const _0x2765f9=_0x551b1e,_0xb1496c=this['paramWidth']();this[_0x2765f9(0x426)](),this['drawText'](this[_0x2765f9(0x8bc)]['paramValueByName'](_0x56e70e,!![]),_0x45b738,_0x516dc2,_0xb1496c,'right');},Window_EquipStatus['prototype']['drawRightArrow']=function(_0x3d3e8e,_0x1ef578){const _0x2bf8b1=_0x551b1e,_0x5ed719=this['rightArrowWidth']();this[_0x2bf8b1(0x631)](ColorManager[_0x2bf8b1(0x2bb)]());const _0x190a46=VisuMZ[_0x2bf8b1(0x2d6)][_0x2bf8b1(0x47b)]['UI']['ParamArrow'];this[_0x2bf8b1(0x29a)](_0x190a46,_0x3d3e8e,_0x1ef578,_0x5ed719,_0x2bf8b1(0x593));},Window_EquipStatus[_0x551b1e(0x5ff)][_0x551b1e(0x599)]=function(_0x444e7c,_0x15059b,_0x7b3279){const _0x325edd=_0x551b1e,_0x51ef7f=this[_0x325edd(0x77e)](),_0x40e4cd=this[_0x325edd(0x288)][_0x325edd(0x575)](_0x7b3279),_0x57417d=_0x40e4cd-this[_0x325edd(0x8bc)][_0x325edd(0x575)](_0x7b3279);this[_0x325edd(0x631)](ColorManager['paramchangeTextColor'](_0x57417d)),this['drawText'](this[_0x325edd(0x288)][_0x325edd(0x575)](_0x7b3279,!![]),_0x444e7c,_0x15059b,_0x51ef7f,_0x325edd(0x619));},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x5f7)]=Window_EquipItem[_0x551b1e(0x5ff)]['isEnabled'],Window_EquipItem[_0x551b1e(0x5ff)]['isEnabled']=function(_0xa1838f){const _0x38b4f2=_0x551b1e;return _0xa1838f&&this[_0x38b4f2(0x8bc)]?this[_0x38b4f2(0x8bc)]['canEquip'](_0xa1838f):VisuMZ['CoreEngine'][_0x38b4f2(0x5f7)][_0x38b4f2(0x511)](this,_0xa1838f);},Window_StatusParams[_0x551b1e(0x5ff)][_0x551b1e(0x524)]=function(){const _0x4695f7=_0x551b1e;return VisuMZ[_0x4695f7(0x2d6)][_0x4695f7(0x47b)]['Param'][_0x4695f7(0x359)][_0x4695f7(0x55a)];},Window_StatusParams[_0x551b1e(0x5ff)][_0x551b1e(0x3e4)]=function(_0x47a304){const _0x58af19=_0x551b1e,_0x5d233a=this[_0x58af19(0x212)](_0x47a304),_0x12daba=VisuMZ[_0x58af19(0x2d6)][_0x58af19(0x47b)][_0x58af19(0x698)][_0x58af19(0x359)][_0x47a304],_0x497eed=TextManager[_0x58af19(0x55f)](_0x12daba),_0x399b7c=this[_0x58af19(0x8bc)][_0x58af19(0x575)](_0x12daba,!![]);this[_0x58af19(0x32a)](_0x5d233a['x'],_0x5d233a['y'],0xa0,_0x12daba,![]),this['resetTextColor'](),this['drawText'](_0x399b7c,_0x5d233a['x']+0xa0,_0x5d233a['y'],0x3c,'right');};if(VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x47b)][_0x551b1e(0x69f)][_0x551b1e(0x59a)]){VisuMZ['CoreEngine'][_0x551b1e(0x47b)][_0x551b1e(0x69f)][_0x551b1e(0x23b)]&&(Window_NameInput[_0x551b1e(0x435)]=['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','\x27','`','Z','X','C','V','B','N','M',',','.','q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l',':','~','z','x','c','v','b','n','m','\x22',';','1','2','3','4','5','6','7','8','9','0','!','@','#','$','%','^','&','*','(',')','<','>','[',']','-','_','/','\x20',_0x551b1e(0x36a),'OK']);;VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x315)]=Window_NameInput[_0x551b1e(0x5ff)]['initialize'],Window_NameInput[_0x551b1e(0x5ff)][_0x551b1e(0x5fc)]=function(_0x4e4129){const _0xe2a5c1=_0x551b1e;this['_mode']=this[_0xe2a5c1(0x632)](),VisuMZ['CoreEngine'][_0xe2a5c1(0x315)][_0xe2a5c1(0x511)](this,_0x4e4129),this[_0xe2a5c1(0x5b0)]===_0xe2a5c1(0x4c3)?this['select'](0x0):(Input[_0xe2a5c1(0x55b)](),this[_0xe2a5c1(0x711)]());},Window_NameInput[_0x551b1e(0x5ff)]['defaultInputMode']=function(){const _0xff3b1c=_0x551b1e;if(Input[_0xff3b1c(0x3f9)]())return _0xff3b1c(0x4c3);return VisuMZ[_0xff3b1c(0x2d6)][_0xff3b1c(0x47b)][_0xff3b1c(0x69f)][_0xff3b1c(0x7e9)]||'keyboard';},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x523)]=Window_NameInput[_0x551b1e(0x5ff)]['processHandling'],Window_NameInput[_0x551b1e(0x5ff)][_0x551b1e(0x8f4)]=function(){const _0x45b40d=_0x551b1e;if(!this[_0x45b40d(0x46d)]())return;if(!this[_0x45b40d(0x4a0)])return;if(this[_0x45b40d(0x5b0)]==='keyboard'&&Input[_0x45b40d(0x44a)]())this[_0x45b40d(0x6fe)](_0x45b40d(0x4c3));else{if(Input[_0x45b40d(0x2fc)](_0x45b40d(0x2b6))){if(_0x45b40d(0x329)!=='UtsxG')Input['clear'](),this[_0x45b40d(0x89d)]();else{const _0x23c11e=this[_0x45b40d(0x531)][_0x45b40d(0x25a)][_0x45b40d(0x34e)](new _0x134984(0x0,0x0)),_0xf70059=this['_clientArea'][_0x45b40d(0x4d6)];_0xf70059['x']=_0x23c11e['x']+this[_0x45b40d(0x7f0)]['x'],_0xf70059['y']=_0x23c11e['y']+this[_0x45b40d(0x7f0)]['y'],_0xf70059[_0x45b40d(0x652)]=_0x523572[_0x45b40d(0x256)](this[_0x45b40d(0x22d)]*this[_0x45b40d(0x82e)]['x']),_0xf70059[_0x45b40d(0x66e)]=_0xac525a[_0x45b40d(0x256)](this[_0x45b40d(0x766)]*this[_0x45b40d(0x82e)]['y']);}}else{if(Input[_0x45b40d(0x5ae)]('tab')){if(_0x45b40d(0x1b8)!==_0x45b40d(0x1b8))_0x53920e[_0x45b40d(0x2d6)][_0x45b40d(0x226)][_0x45b40d(0x511)](this,_0x5c7792);else{Input[_0x45b40d(0x55b)]();if(this[_0x45b40d(0x5b0)]===_0x45b40d(0x513)){if(_0x45b40d(0x875)===_0x45b40d(0x875))this[_0x45b40d(0x6fe)](_0x45b40d(0x4c3));else{const _0x240f70=_0xec24a2[_0x45b40d(0x2d6)][_0x45b40d(0x47b)]['Window'];if(_0x240f70[_0x45b40d(0x482)]===![])return;_0x240f70['DrawItemBackgroundJS']?_0x240f70[_0x45b40d(0x81a)][_0x45b40d(0x511)](this,_0x574c32):_0x440a38[_0x45b40d(0x2d6)][_0x45b40d(0x45d)]['call'](this,_0x24f7e6);}}else this[_0x45b40d(0x6fe)](_0x45b40d(0x513));}}else{if(this[_0x45b40d(0x5b0)]===_0x45b40d(0x513))this[_0x45b40d(0x7ab)]();else Input['isSpecialCode']('escape')?(Input[_0x45b40d(0x55b)](),this[_0x45b40d(0x6fe)](_0x45b40d(0x513))):VisuMZ['CoreEngine'][_0x45b40d(0x523)][_0x45b40d(0x511)](this);}}}},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x5dd)]=Window_NameInput['prototype'][_0x551b1e(0x8c9)],Window_NameInput[_0x551b1e(0x5ff)]['processTouch']=function(){const _0x448bd1=_0x551b1e;if(!this['isOpenAndActive']())return;if(this[_0x448bd1(0x5b0)]===_0x448bd1(0x513)){if(_0x448bd1(0x4ae)===_0x448bd1(0x7fc)){if(_0x53347e[_0x448bd1(0x8d0)]())return;_0x49141a[_0x448bd1(0x688)](_0x3ea76d,_0x2896d8);const _0x2c2989=['bgm','bgs','me','se'];for(const _0x1565c3 of _0x2c2989){const _0x3aae0c=_0xda3624[_0x1565c3],_0x514260=_0x448bd1(0x6c8)[_0x448bd1(0x7cb)](_0x1565c3);for(const _0x4bb86e of _0x3aae0c){_0x45be95[_0x448bd1(0x85a)](_0x514260,_0x4bb86e);}}}else{if(TouchInput[_0x448bd1(0x5ae)]()&&this[_0x448bd1(0x37e)]())this[_0x448bd1(0x6fe)](_0x448bd1(0x4c3));else TouchInput[_0x448bd1(0x76f)]()&&this[_0x448bd1(0x6fe)](_0x448bd1(0x4c3));}}else VisuMZ[_0x448bd1(0x2d6)][_0x448bd1(0x5dd)][_0x448bd1(0x511)](this);},Window_NameInput[_0x551b1e(0x5ff)][_0x551b1e(0x7ab)]=function(){const _0x571163=_0x551b1e;if(Input['isSpecialCode'](_0x571163(0x48a))){if(_0x571163(0x30b)===_0x571163(0x798)){const _0x4a7e11=_0x274ab3[_0x571163(0x35d)](_0xf6e865,_0x43ab2a)[_0x571163(0x2e0)](_0x43a8e=>_0x43a8e[_0x571163(0x4e1)]());return _0x4a7e11[_0x571163(0x55a)]>0x0;}else Input[_0x571163(0x55b)](),this[_0x571163(0x5e5)]();}else{if(Input[_0x571163(0x618)]!==undefined){if(_0x571163(0x7a0)!==_0x571163(0x5f0)){let _0x1f106a=Input[_0x571163(0x618)],_0x3e19b3=_0x1f106a[_0x571163(0x55a)];for(let _0x26b090=0x0;_0x26b090<_0x3e19b3;++_0x26b090){this[_0x571163(0x8c4)]['add'](_0x1f106a[_0x26b090])?SoundManager[_0x571163(0x74b)]():'QNdGJ'!==_0x571163(0x4bc)?SoundManager[_0x571163(0x8f3)]():_0xa7b5df+=_0x571163(0x728)[_0x571163(0x7cb)](_0x1d2376['parameters'][0x0]);}Input['clear']();}else this[_0x571163(0x5ea)]=_0x380860;}}},Window_NameInput[_0x551b1e(0x5ff)][_0x551b1e(0x6fe)]=function(_0x6f93fa){const _0x1bcefd=_0x551b1e;let _0x134f00=this['_mode'];this['_mode']=_0x6f93fa,_0x134f00!==this['_mode']&&(this[_0x1bcefd(0x429)](),SoundManager['playOk'](),this[_0x1bcefd(0x5b0)]===_0x1bcefd(0x4c3)?this[_0x1bcefd(0x7a1)](0x0):this[_0x1bcefd(0x7a1)](-0x1));},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x4b3)]=Window_NameInput['prototype']['cursorDown'],Window_NameInput[_0x551b1e(0x5ff)][_0x551b1e(0x643)]=function(_0x329f87){const _0x7e2199=_0x551b1e;if(this[_0x7e2199(0x5b0)]===_0x7e2199(0x513)&&!Input['isArrowPressed']())return;if(Input[_0x7e2199(0x642)]())return;VisuMZ[_0x7e2199(0x2d6)][_0x7e2199(0x4b3)]['call'](this,_0x329f87),this[_0x7e2199(0x6fe)](_0x7e2199(0x4c3));},VisuMZ['CoreEngine'][_0x551b1e(0x2c5)]=Window_NameInput[_0x551b1e(0x5ff)][_0x551b1e(0x1dd)],Window_NameInput[_0x551b1e(0x5ff)][_0x551b1e(0x1dd)]=function(_0x2db7b2){const _0x11f9a6=_0x551b1e;if(this['_mode']===_0x11f9a6(0x513)&&!Input[_0x11f9a6(0x896)]())return;if(Input['isNumpadPressed']())return;VisuMZ[_0x11f9a6(0x2d6)][_0x11f9a6(0x2c5)][_0x11f9a6(0x511)](this,_0x2db7b2),this['switchModes'](_0x11f9a6(0x4c3));},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x1e4)]=Window_NameInput[_0x551b1e(0x5ff)]['cursorRight'],Window_NameInput['prototype']['cursorRight']=function(_0x493b81){const _0x3a8c67=_0x551b1e;if(this[_0x3a8c67(0x5b0)]==='keyboard'&&!Input['isArrowPressed']())return;if(Input[_0x3a8c67(0x642)]())return;VisuMZ[_0x3a8c67(0x2d6)][_0x3a8c67(0x1e4)][_0x3a8c67(0x511)](this,_0x493b81),this[_0x3a8c67(0x6fe)](_0x3a8c67(0x4c3));},VisuMZ['CoreEngine']['Window_NameInput_cursorLeft']=Window_NameInput[_0x551b1e(0x5ff)][_0x551b1e(0x6d5)],Window_NameInput['prototype'][_0x551b1e(0x6d5)]=function(_0x39c9f2){const _0x5814b3=_0x551b1e;if(this[_0x5814b3(0x5b0)]===_0x5814b3(0x513)&&!Input[_0x5814b3(0x896)]())return;if(Input[_0x5814b3(0x642)]())return;VisuMZ['CoreEngine'][_0x5814b3(0x1b1)]['call'](this,_0x39c9f2),this[_0x5814b3(0x6fe)](_0x5814b3(0x4c3));},VisuMZ['CoreEngine'][_0x551b1e(0x86e)]=Window_NameInput['prototype']['cursorPagedown'],Window_NameInput[_0x551b1e(0x5ff)]['cursorPagedown']=function(){const _0x30e55b=_0x551b1e;if(this[_0x30e55b(0x5b0)]===_0x30e55b(0x513))return;if(Input[_0x30e55b(0x642)]())return;VisuMZ[_0x30e55b(0x2d6)]['Window_NameInput_cursorPagedown'][_0x30e55b(0x511)](this),this[_0x30e55b(0x6fe)](_0x30e55b(0x4c3));},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x505)]=Window_NameInput[_0x551b1e(0x5ff)][_0x551b1e(0x1b9)],Window_NameInput[_0x551b1e(0x5ff)][_0x551b1e(0x1b9)]=function(){const _0x26e544=_0x551b1e;if(this[_0x26e544(0x5b0)]===_0x26e544(0x513))return;if(Input['isNumpadPressed']())return;VisuMZ[_0x26e544(0x2d6)][_0x26e544(0x505)][_0x26e544(0x511)](this),this[_0x26e544(0x6fe)](_0x26e544(0x4c3));},VisuMZ['CoreEngine'][_0x551b1e(0x238)]=Window_NameInput['prototype'][_0x551b1e(0x429)],Window_NameInput[_0x551b1e(0x5ff)][_0x551b1e(0x429)]=function(){const _0x184db4=_0x551b1e;if(this[_0x184db4(0x5b0)]==='keyboard'){if(_0x184db4(0x42b)===_0x184db4(0x24e))return this[_0x184db4(0x732)]();else{this[_0x184db4(0x292)][_0x184db4(0x55b)](),this[_0x184db4(0x66f)]['clear'](),this['resetTextColor']();let _0x1e923f=VisuMZ[_0x184db4(0x2d6)][_0x184db4(0x47b)][_0x184db4(0x69f)]['NameInputMessage'][_0x184db4(0x74c)]('\x0a'),_0x33b841=_0x1e923f[_0x184db4(0x55a)],_0x374075=(this[_0x184db4(0x766)]-_0x33b841*this[_0x184db4(0x404)]())/0x2;for(let _0x3ed91c=0x0;_0x3ed91c<_0x33b841;++_0x3ed91c){if('CIxWM'===_0x184db4(0x532)){let _0x14d76a=_0x1e923f[_0x3ed91c],_0x19056b=this[_0x184db4(0x2b0)](_0x14d76a)[_0x184db4(0x652)],_0x276560=Math[_0x184db4(0x4ad)]((this[_0x184db4(0x292)][_0x184db4(0x652)]-_0x19056b)/0x2);this['drawTextEx'](_0x14d76a,_0x276560,_0x374075),_0x374075+=this['lineHeight']();}else _0x1ae372['erasePicture'](_0x2f334c);}}}else VisuMZ[_0x184db4(0x2d6)]['Window_NameInput_refresh'][_0x184db4(0x511)](this);};};VisuMZ[_0x551b1e(0x2d6)]['Window_ShopSell_isEnabled']=Window_ShopSell[_0x551b1e(0x5ff)][_0x551b1e(0x7e6)],Window_ShopSell[_0x551b1e(0x5ff)][_0x551b1e(0x7e6)]=function(_0x1565d2){const _0x3aab8d=_0x551b1e;return VisuMZ[_0x3aab8d(0x2d6)][_0x3aab8d(0x47b)][_0x3aab8d(0x862)]['KeyItemProtect']&&DataManager[_0x3aab8d(0x6d4)](_0x1565d2)?![]:VisuMZ[_0x3aab8d(0x2d6)][_0x3aab8d(0x761)][_0x3aab8d(0x511)](this,_0x1565d2);},Window_NumberInput[_0x551b1e(0x5ff)]['isUseModernControls']=function(){return![];};VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x47b)]['KeyboardInput'][_0x551b1e(0x27c)]&&(VisuMZ[_0x551b1e(0x2d6)]['Window_NumberInput_start']=Window_NumberInput[_0x551b1e(0x5ff)]['start'],Window_NumberInput[_0x551b1e(0x5ff)][_0x551b1e(0x82d)]=function(){const _0x1e2e96=_0x551b1e;VisuMZ[_0x1e2e96(0x2d6)][_0x1e2e96(0x5f1)][_0x1e2e96(0x511)](this),this[_0x1e2e96(0x7a1)](this['_maxDigits']-0x1),Input['clear']();},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x3be)]=Window_NumberInput['prototype'][_0x551b1e(0x548)],Window_NumberInput[_0x551b1e(0x5ff)]['processDigitChange']=function(){const _0x4f682b=_0x551b1e;if(!this[_0x4f682b(0x7f4)]())return;if(Input['isNumpadPressed']())this[_0x4f682b(0x7b4)]();else{if(Input[_0x4f682b(0x2fc)](_0x4f682b(0x2b6)))'pTRLV'==='WgRFo'?(_0x3050ed[_0x4f682b(0x2d6)]['Scene_Map_updateMainMultiply'][_0x4f682b(0x511)](this),_0xdb4538[_0x4f682b(0x2d7)]&&!_0x406b46[_0x4f682b(0x393)]()&&(this[_0x4f682b(0x3f0)](),_0x4c0067[_0x4f682b(0x5da)]())):this[_0x4f682b(0x1cd)]();else{if(Input[_0x4f682b(0x568)]===0x2e)this['processKeyboardDelete']();else{if(Input[_0x4f682b(0x568)]===0x24)this[_0x4f682b(0x489)]();else{if(Input['_inputSpecialKeyCode']===0x23)this['processKeyboardEnd']();else{if(_0x4f682b(0x5e8)!==_0x4f682b(0x5e8)){_0x2bf869['maxLevel']=_0x1104db(_0x252e7d['$1']);if(_0xc65c94[_0x4f682b(0x3ab)]===0x0)_0x40bb56[_0x4f682b(0x3ab)]=_0x3c1f89[_0x4f682b(0x4f3)];}else VisuMZ[_0x4f682b(0x2d6)][_0x4f682b(0x3be)][_0x4f682b(0x511)](this);}}}}}},Window_NumberInput[_0x551b1e(0x5ff)]['processCursorMove']=function(){const _0x233131=_0x551b1e;if(!this[_0x233131(0x1fb)]())return;Input[_0x233131(0x642)]()?this[_0x233131(0x7b4)]():Window_Selectable[_0x233131(0x5ff)][_0x233131(0x192)][_0x233131(0x511)](this);},Window_NumberInput[_0x551b1e(0x5ff)][_0x551b1e(0x356)]=function(){},Window_NumberInput['prototype'][_0x551b1e(0x7b4)]=function(){const _0xf6fb4e=_0x551b1e;if(String(this[_0xf6fb4e(0x6a9)])[_0xf6fb4e(0x55a)]>=this[_0xf6fb4e(0x43c)])return;this[_0xf6fb4e(0x6a9)]=Number(String(this['_number'])+Input[_0xf6fb4e(0x618)]);const _0x310f41='9'[_0xf6fb4e(0x81c)](this[_0xf6fb4e(0x43c)]);this['_number']=this[_0xf6fb4e(0x6a9)][_0xf6fb4e(0x660)](0x0,_0x310f41),Input[_0xf6fb4e(0x55b)](),this[_0xf6fb4e(0x429)](),SoundManager[_0xf6fb4e(0x430)](),this[_0xf6fb4e(0x7a1)](this[_0xf6fb4e(0x43c)]-0x1);},Window_NumberInput[_0x551b1e(0x5ff)][_0x551b1e(0x1cd)]=function(){const _0x488910=_0x551b1e;this[_0x488910(0x6a9)]=Number(String(this[_0x488910(0x6a9)])[_0x488910(0x2f0)](0x0,-0x1)),this['_number']=Math['max'](0x0,this[_0x488910(0x6a9)]),Input['clear'](),this[_0x488910(0x429)](),SoundManager['playCursor'](),this[_0x488910(0x7a1)](this['_maxDigits']-0x1);},Window_NumberInput[_0x551b1e(0x5ff)][_0x551b1e(0x2eb)]=function(){const _0x389186=_0x551b1e;this['_number']=Number(String(this[_0x389186(0x6a9)])[_0x389186(0x204)](0x1)),this[_0x389186(0x6a9)]=Math[_0x389186(0x46a)](0x0,this['_number']),Input['clear'](),this[_0x389186(0x429)](),SoundManager[_0x389186(0x430)](),this['select'](this['_maxDigits']-0x1);});;function _0x586d(_0x2030cf,_0x2499c1){return _0x586d=function(_0x92b6db,_0x586d8e){_0x92b6db=_0x92b6db-0x192;let _0x2c057a=_0x92b6[_0x92b6db];return _0x2c057a;},_0x586d(_0x2030cf,_0x2499c1);}Window_TitleCommand[_0x551b1e(0x1a4)]=VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x47b)][_0x551b1e(0x27a)],Window_TitleCommand[_0x551b1e(0x5ff)]['makeCommandList']=function(){const _0x219b36=_0x551b1e;this[_0x219b36(0x6dc)]();},Window_TitleCommand[_0x551b1e(0x5ff)]['makeCoreEngineCommandList']=function(){const _0x1d3cf4=_0x551b1e;for(const _0x5323c3 of Window_TitleCommand['_commandList']){if(_0x1d3cf4(0x452)!==_0x1d3cf4(0x452))_0x26fb55[_0x1d3cf4(0x5ff)][_0x1d3cf4(0x268)][_0x1d3cf4(0x511)](this),!_0x450a77['isNextScene'](_0x28724b)&&(this['_spriteset'][_0x1d3cf4(0x572)](),this['_mapNameWindow'][_0x1d3cf4(0x5a8)](),this[_0x1d3cf4(0x8fb)][_0x1d3cf4(0x419)]=![],_0x595685[_0x1d3cf4(0x8df)]()),_0x406446[_0x1d3cf4(0x229)]();else{if(_0x5323c3[_0x1d3cf4(0x75b)][_0x1d3cf4(0x511)](this)){const _0x324e48=_0x5323c3['Symbol'];let _0x4697cf=_0x5323c3['TextStr'];if(['',_0x1d3cf4(0x8c3)][_0x1d3cf4(0x82f)](_0x4697cf))_0x4697cf=_0x5323c3[_0x1d3cf4(0x894)]['call'](this);const _0x2fd63f=_0x5323c3[_0x1d3cf4(0x1f2)][_0x1d3cf4(0x511)](this),_0x5ac3d4=_0x5323c3[_0x1d3cf4(0x311)][_0x1d3cf4(0x511)](this);this[_0x1d3cf4(0x48b)](_0x4697cf,_0x324e48,_0x2fd63f,_0x5ac3d4),this[_0x1d3cf4(0x856)](_0x324e48,_0x5323c3[_0x1d3cf4(0x21f)]['bind'](this,_0x5ac3d4));}}}},Window_GameEnd[_0x551b1e(0x1a4)]=VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x47b)][_0x551b1e(0x8b6)][_0x551b1e(0x840)][_0x551b1e(0x78d)],Window_GameEnd[_0x551b1e(0x5ff)][_0x551b1e(0x42d)]=function(){const _0x549549=_0x551b1e;this[_0x549549(0x6dc)]();},Window_GameEnd[_0x551b1e(0x5ff)][_0x551b1e(0x6dc)]=function(){const _0x1f3a00=_0x551b1e;for(const _0x20f189 of Window_GameEnd['_commandList']){if(_0x20f189[_0x1f3a00(0x75b)][_0x1f3a00(0x511)](this)){const _0xea348d=_0x20f189['Symbol'];let _0x12b6d0=_0x20f189[_0x1f3a00(0x6c9)];if(['','Untitled'][_0x1f3a00(0x82f)](_0x12b6d0))_0x12b6d0=_0x20f189[_0x1f3a00(0x894)][_0x1f3a00(0x511)](this);const _0x3c8484=_0x20f189[_0x1f3a00(0x1f2)][_0x1f3a00(0x511)](this),_0x561d34=_0x20f189[_0x1f3a00(0x311)][_0x1f3a00(0x511)](this);this['addCommand'](_0x12b6d0,_0xea348d,_0x3c8484,_0x561d34),this[_0x1f3a00(0x856)](_0xea348d,_0x20f189[_0x1f3a00(0x21f)][_0x1f3a00(0x4aa)](this,_0x561d34));}}};function Window_ButtonAssist(){const _0x3dab55=_0x551b1e;this[_0x3dab55(0x5fc)](...arguments);}Window_ButtonAssist['prototype']=Object[_0x551b1e(0x83e)](Window_Base[_0x551b1e(0x5ff)]),Window_ButtonAssist['prototype']['constructor']=Window_ButtonAssist,Window_ButtonAssist[_0x551b1e(0x5ff)][_0x551b1e(0x5fc)]=function(_0x48193b){const _0x17b3a4=_0x551b1e;this[_0x17b3a4(0x4b0)]={},Window_Base[_0x17b3a4(0x5ff)][_0x17b3a4(0x5fc)][_0x17b3a4(0x511)](this,_0x48193b),this[_0x17b3a4(0x4f9)](VisuMZ['CoreEngine'][_0x17b3a4(0x47b)][_0x17b3a4(0x3a8)][_0x17b3a4(0x812)]||0x0),this[_0x17b3a4(0x429)]();},Window_ButtonAssist[_0x551b1e(0x5ff)][_0x551b1e(0x517)]=function(){const _0x2b01bd=_0x551b1e;this[_0x2b01bd(0x292)][_0x2b01bd(0x565)]<=0x60&&(this[_0x2b01bd(0x292)][_0x2b01bd(0x565)]+=0x6);},Window_ButtonAssist['prototype'][_0x551b1e(0x47f)]=function(){const _0x32a4b7=_0x551b1e;this[_0x32a4b7(0x292)][_0x32a4b7(0x565)]>=0x18&&(this['contents'][_0x32a4b7(0x565)]-=0x6);},Window_ButtonAssist[_0x551b1e(0x5ff)]['update']=function(){const _0x5d6bf7=_0x551b1e;Window_Base[_0x5d6bf7(0x5ff)][_0x5d6bf7(0x572)][_0x5d6bf7(0x511)](this),this['updateKeyText']();},Window_ButtonAssist[_0x551b1e(0x5ff)]['updatePadding']=function(){const _0x56ce8f=_0x551b1e;this['padding']=SceneManager[_0x56ce8f(0x607)][_0x56ce8f(0x1db)]()!==_0x56ce8f(0x462)?0x0:0x8;},Window_ButtonAssist['prototype'][_0x551b1e(0x7f8)]=function(){const _0x428b04=_0x551b1e,_0x1c0b66=SceneManager['_scene'];for(let _0xc4f519=0x1;_0xc4f519<=0x5;_0xc4f519++){if(this[_0x428b04(0x4b0)][_0x428b04(0x8f2)[_0x428b04(0x7cb)](_0xc4f519)]!==_0x1c0b66[_0x428b04(0x65e)[_0x428b04(0x7cb)](_0xc4f519)]())return this[_0x428b04(0x429)]();if(this[_0x428b04(0x4b0)]['text%1'[_0x428b04(0x7cb)](_0xc4f519)]!==_0x1c0b66[_0x428b04(0x506)['format'](_0xc4f519)]()){if(_0x428b04(0x49f)!==_0x428b04(0x5a6))return this['refresh']();else this[_0x428b04(0x705)]='FTB';}}},Window_ButtonAssist[_0x551b1e(0x5ff)]['refresh']=function(){const _0x46919b=_0x551b1e;this[_0x46919b(0x292)]['clear']();for(let _0x1867b4=0x1;_0x1867b4<=0x5;_0x1867b4++){if(_0x46919b(0x668)!==_0x46919b(0x668))return _0x2064b2[_0x46919b(0x2d6)][_0x46919b(0x47b)][_0x46919b(0x1f4)]['RowSpacing'];else this[_0x46919b(0x3a0)](_0x1867b4);}},Window_ButtonAssist[_0x551b1e(0x5ff)][_0x551b1e(0x3a0)]=function(_0x57f093){const _0x46a41a=_0x551b1e,_0x50b250=this['innerWidth']/0x5,_0x3de935=SceneManager[_0x46a41a(0x607)],_0x4d8634=_0x3de935['buttonAssistKey%1'[_0x46a41a(0x7cb)](_0x57f093)](),_0xfd546c=_0x3de935[_0x46a41a(0x506)[_0x46a41a(0x7cb)](_0x57f093)]();this[_0x46a41a(0x4b0)][_0x46a41a(0x8f2)[_0x46a41a(0x7cb)](_0x57f093)]=_0x4d8634,this['_data'][_0x46a41a(0x779)[_0x46a41a(0x7cb)](_0x57f093)]=_0xfd546c;if(_0x4d8634==='')return;if(_0xfd546c==='')return;const _0x11e4e2=_0x3de935[_0x46a41a(0x1d6)[_0x46a41a(0x7cb)](_0x57f093)](),_0x42e228=this[_0x46a41a(0x86f)](),_0x31dfc5=_0x50b250*(_0x57f093-0x1)+_0x42e228+_0x11e4e2,_0xd12a92=VisuMZ[_0x46a41a(0x2d6)][_0x46a41a(0x47b)][_0x46a41a(0x3a8)][_0x46a41a(0x87c)];this[_0x46a41a(0x197)](_0xd12a92[_0x46a41a(0x7cb)](_0x4d8634,_0xfd546c),_0x31dfc5,0x0,_0x50b250-_0x42e228*0x2);},VisuMZ[_0x551b1e(0x5be)]=function(_0x226f00){const _0x133174=_0x551b1e;if(Utils[_0x133174(0x235)]('test')){var _0x2d7b4a=require(_0x133174(0x1c2))[_0x133174(0x1f4)][_0x133174(0x32f)]();SceneManager[_0x133174(0x72a)]();if(_0x226f00)setTimeout(_0x2d7b4a[_0x133174(0x69c)][_0x133174(0x4aa)](_0x2d7b4a),0x190);}},VisuMZ['ApplyEasing']=function(_0x39ee37,_0x4d5a87){const _0x46ff5e=_0x551b1e;_0x4d5a87=_0x4d5a87[_0x46ff5e(0x724)]();var _0xbda129=1.70158,_0x2df142=0.7;switch(_0x4d5a87){case'LINEAR':return _0x39ee37;case _0x46ff5e(0x73f):return-0x1*Math[_0x46ff5e(0x6b9)](_0x39ee37*(Math['PI']/0x2))+0x1;case _0x46ff5e(0x8e4):return Math[_0x46ff5e(0x6e8)](_0x39ee37*(Math['PI']/0x2));case _0x46ff5e(0x8bb):return-0.5*(Math[_0x46ff5e(0x6b9)](Math['PI']*_0x39ee37)-0x1);case _0x46ff5e(0x3ef):return _0x39ee37*_0x39ee37;case'OUTQUAD':return _0x39ee37*(0x2-_0x39ee37);case _0x46ff5e(0x47e):return _0x39ee37<0.5?0x2*_0x39ee37*_0x39ee37:-0x1+(0x4-0x2*_0x39ee37)*_0x39ee37;case _0x46ff5e(0x1f5):return _0x39ee37*_0x39ee37*_0x39ee37;case _0x46ff5e(0x842):var _0x12beb7=_0x39ee37-0x1;return _0x12beb7*_0x12beb7*_0x12beb7+0x1;case _0x46ff5e(0x484):return _0x39ee37<0.5?0x4*_0x39ee37*_0x39ee37*_0x39ee37:(_0x39ee37-0x1)*(0x2*_0x39ee37-0x2)*(0x2*_0x39ee37-0x2)+0x1;case _0x46ff5e(0x5c5):return _0x39ee37*_0x39ee37*_0x39ee37*_0x39ee37;case _0x46ff5e(0x275):var _0x12beb7=_0x39ee37-0x1;return 0x1-_0x12beb7*_0x12beb7*_0x12beb7*_0x12beb7;case _0x46ff5e(0x417):var _0x12beb7=_0x39ee37-0x1;return _0x39ee37<0.5?0x8*_0x39ee37*_0x39ee37*_0x39ee37*_0x39ee37:0x1-0x8*_0x12beb7*_0x12beb7*_0x12beb7*_0x12beb7;case'INQUINT':return _0x39ee37*_0x39ee37*_0x39ee37*_0x39ee37*_0x39ee37;case _0x46ff5e(0x388):var _0x12beb7=_0x39ee37-0x1;return 0x1+_0x12beb7*_0x12beb7*_0x12beb7*_0x12beb7*_0x12beb7;case _0x46ff5e(0x36c):var _0x12beb7=_0x39ee37-0x1;return _0x39ee37<0.5?0x10*_0x39ee37*_0x39ee37*_0x39ee37*_0x39ee37*_0x39ee37:0x1+0x10*_0x12beb7*_0x12beb7*_0x12beb7*_0x12beb7*_0x12beb7;case _0x46ff5e(0x656):if(_0x39ee37===0x0)return 0x0;return Math[_0x46ff5e(0x40d)](0x2,0xa*(_0x39ee37-0x1));case _0x46ff5e(0x712):if(_0x39ee37===0x1)return 0x1;return-Math[_0x46ff5e(0x40d)](0x2,-0xa*_0x39ee37)+0x1;case _0x46ff5e(0x767):if(_0x39ee37===0x0||_0x39ee37===0x1)return _0x39ee37;var _0x20f3dd=_0x39ee37*0x2,_0xeed516=_0x20f3dd-0x1;if(_0x20f3dd<0x1){if('ohgnV'===_0x46ff5e(0x3ca)){const _0x141ed5='_stored_hpGaugeColor2';this['_colorCache']=this['_colorCache']||{};if(this[_0x46ff5e(0x77c)][_0x141ed5])return this[_0x46ff5e(0x77c)][_0x141ed5];const _0x50f849=_0x1e7e3f['CoreEngine'][_0x46ff5e(0x47b)][_0x46ff5e(0x574)][_0x46ff5e(0x892)];return this[_0x46ff5e(0x2d2)](_0x141ed5,_0x50f849);}else return 0.5*Math['pow'](0x2,0xa*_0xeed516);}return 0.5*(-Math[_0x46ff5e(0x40d)](0x2,-0xa*_0xeed516)+0x2);case _0x46ff5e(0x683):var _0x20f3dd=_0x39ee37/0x1;return-0x1*(Math[_0x46ff5e(0x19a)](0x1-_0x20f3dd*_0x39ee37)-0x1);case'OUTCIRC':var _0x12beb7=_0x39ee37-0x1;return Math['sqrt'](0x1-_0x12beb7*_0x12beb7);case'INOUTCIRC':var _0x20f3dd=_0x39ee37*0x2,_0xeed516=_0x20f3dd-0x2;if(_0x20f3dd<0x1){if(_0x46ff5e(0x817)!==_0x46ff5e(0x6e5))return-0.5*(Math[_0x46ff5e(0x19a)](0x1-_0x20f3dd*_0x20f3dd)-0x1);else this[_0x46ff5e(0x3c4)](_0x4f5d0d[_0x46ff5e(0x5ae)](_0x46ff5e(0x619)));}return 0.5*(Math[_0x46ff5e(0x19a)](0x1-_0xeed516*_0xeed516)+0x1);case _0x46ff5e(0x373):return _0x39ee37*_0x39ee37*((_0xbda129+0x1)*_0x39ee37-_0xbda129);case'OUTBACK':var _0x20f3dd=_0x39ee37/0x1-0x1;return _0x20f3dd*_0x20f3dd*((_0xbda129+0x1)*_0x20f3dd+_0xbda129)+0x1;break;case _0x46ff5e(0x5c7):var _0x20f3dd=_0x39ee37*0x2,_0xca10ee=_0x20f3dd-0x2,_0x5dce8f=_0xbda129*1.525;if(_0x20f3dd<0x1)return 0.5*_0x20f3dd*_0x20f3dd*((_0x5dce8f+0x1)*_0x20f3dd-_0x5dce8f);return 0.5*(_0xca10ee*_0xca10ee*((_0x5dce8f+0x1)*_0xca10ee+_0x5dce8f)+0x2);case'INELASTIC':if(_0x39ee37===0x0||_0x39ee37===0x1)return _0x39ee37;var _0x20f3dd=_0x39ee37/0x1,_0xeed516=_0x20f3dd-0x1,_0x39dd4c=0x1-_0x2df142,_0x5dce8f=_0x39dd4c/(0x2*Math['PI'])*Math[_0x46ff5e(0x4a4)](0x1);return-(Math[_0x46ff5e(0x40d)](0x2,0xa*_0xeed516)*Math[_0x46ff5e(0x6e8)]((_0xeed516-_0x5dce8f)*(0x2*Math['PI'])/_0x39dd4c));case _0x46ff5e(0x888):var _0x39dd4c=0x1-_0x2df142,_0x20f3dd=_0x39ee37*0x2;if(_0x39ee37===0x0||_0x39ee37===0x1)return _0x39ee37;var _0x5dce8f=_0x39dd4c/(0x2*Math['PI'])*Math[_0x46ff5e(0x4a4)](0x1);return Math[_0x46ff5e(0x40d)](0x2,-0xa*_0x20f3dd)*Math[_0x46ff5e(0x6e8)]((_0x20f3dd-_0x5dce8f)*(0x2*Math['PI'])/_0x39dd4c)+0x1;case _0x46ff5e(0x633):var _0x39dd4c=0x1-_0x2df142;if(_0x39ee37===0x0||_0x39ee37===0x1){if(_0x46ff5e(0x7f5)!==_0x46ff5e(0x1df))return _0x39ee37;else _0x3abc79['CoreEngine'][_0x46ff5e(0x438)][_0x46ff5e(0x511)](this,_0x51893d,_0x4c7654,_0x183b95),_0x37dbbe['ShowDevTools'](![]);}var _0x20f3dd=_0x39ee37*0x2,_0xeed516=_0x20f3dd-0x1,_0x5dce8f=_0x39dd4c/(0x2*Math['PI'])*Math['asin'](0x1);if(_0x20f3dd<0x1){if(_0x46ff5e(0x8e8)!==_0x46ff5e(0x8e8))this[_0x46ff5e(0x813)][_0x46ff5e(0x4f9)](_0xdddeca[_0x46ff5e(0x383)][_0x46ff5e(0x910)]);else return-0.5*(Math[_0x46ff5e(0x40d)](0x2,0xa*_0xeed516)*Math[_0x46ff5e(0x6e8)]((_0xeed516-_0x5dce8f)*(0x2*Math['PI'])/_0x39dd4c));}return Math['pow'](0x2,-0xa*_0xeed516)*Math[_0x46ff5e(0x6e8)]((_0xeed516-_0x5dce8f)*(0x2*Math['PI'])/_0x39dd4c)*0.5+0x1;case _0x46ff5e(0x3c0):var _0x20f3dd=_0x39ee37/0x1;if(_0x20f3dd<0x1/2.75)return 7.5625*_0x20f3dd*_0x20f3dd;else{if(_0x20f3dd<0x2/2.75){if('qjvJu'!==_0x46ff5e(0x5eb))this[_0x46ff5e(0x568)]=_0x353753['keyCode'],_0x246502['CoreEngine'][_0x46ff5e(0x554)][_0x46ff5e(0x511)](this,_0x26a7e8);else{var _0xca10ee=_0x20f3dd-1.5/2.75;return 7.5625*_0xca10ee*_0xca10ee+0.75;}}else{if(_0x20f3dd<2.5/2.75){if('aKcFb'===_0x46ff5e(0x269))_0x16661e=_0x2519c3[_0x46ff5e(0x61a)](_0x5e07f8);else{var _0xca10ee=_0x20f3dd-2.25/2.75;return 7.5625*_0xca10ee*_0xca10ee+0.9375;}}else{var _0xca10ee=_0x20f3dd-2.625/2.75;return 7.5625*_0xca10ee*_0xca10ee+0.984375;}}}case _0x46ff5e(0x4fa):var _0x3cb2eb=0x1-VisuMZ[_0x46ff5e(0x245)](0x1-_0x39ee37,_0x46ff5e(0x3d7));return _0x3cb2eb;case _0x46ff5e(0x647):if(_0x39ee37<0.5)var _0x3cb2eb=VisuMZ[_0x46ff5e(0x245)](_0x39ee37*0x2,_0x46ff5e(0x447))*0.5;else{if(_0x46ff5e(0x3fc)===_0x46ff5e(0x81d))_0x130cde+=_0x215f54,_0x4165c8+='%1〘End\x20Choice\x20Selection〙%1'[_0x46ff5e(0x7cb)](_0x945e12);else var _0x3cb2eb=VisuMZ[_0x46ff5e(0x245)](_0x39ee37*0x2-0x1,_0x46ff5e(0x3d7))*0.5+0.5;}return _0x3cb2eb;default:return _0x39ee37;}},VisuMZ[_0x551b1e(0x29f)]=function(_0x44a8b3){const _0x9fb4a9=_0x551b1e;_0x44a8b3=String(_0x44a8b3)[_0x9fb4a9(0x724)]();const _0x22ceb6=VisuMZ[_0x9fb4a9(0x2d6)][_0x9fb4a9(0x47b)][_0x9fb4a9(0x698)];if(_0x44a8b3==='MAXHP')return _0x22ceb6['IconParam0'];if(_0x44a8b3===_0x9fb4a9(0x2b4))return _0x22ceb6[_0x9fb4a9(0x199)];if(_0x44a8b3===_0x9fb4a9(0x3e1))return _0x22ceb6[_0x9fb4a9(0x2da)];if(_0x44a8b3===_0x9fb4a9(0x4b2))return _0x22ceb6[_0x9fb4a9(0x380)];if(_0x44a8b3===_0x9fb4a9(0x5d8))return _0x22ceb6['IconParam4'];if(_0x44a8b3===_0x9fb4a9(0x56c))return _0x22ceb6[_0x9fb4a9(0x257)];if(_0x44a8b3===_0x9fb4a9(0x22b))return _0x22ceb6[_0x9fb4a9(0x67b)];if(_0x44a8b3===_0x9fb4a9(0x601))return _0x22ceb6[_0x9fb4a9(0x194)];if(_0x44a8b3==='HIT')return _0x22ceb6['IconXParam0'];if(_0x44a8b3==='EVA')return _0x22ceb6['IconXParam1'];if(_0x44a8b3===_0x9fb4a9(0x4f1))return _0x22ceb6[_0x9fb4a9(0x3df)];if(_0x44a8b3===_0x9fb4a9(0x41c))return _0x22ceb6['IconXParam3'];if(_0x44a8b3===_0x9fb4a9(0x7da))return _0x22ceb6['IconXParam4'];if(_0x44a8b3===_0x9fb4a9(0x3d8))return _0x22ceb6[_0x9fb4a9(0x480)];if(_0x44a8b3===_0x9fb4a9(0x5e3))return _0x22ceb6[_0x9fb4a9(0x655)];if(_0x44a8b3===_0x9fb4a9(0x588))return _0x22ceb6[_0x9fb4a9(0x66c)];if(_0x44a8b3===_0x9fb4a9(0x571))return _0x22ceb6[_0x9fb4a9(0x4c9)];if(_0x44a8b3===_0x9fb4a9(0x8c8))return _0x22ceb6[_0x9fb4a9(0x5f8)];if(_0x44a8b3==='TGR')return _0x22ceb6[_0x9fb4a9(0x670)];if(_0x44a8b3===_0x9fb4a9(0x530))return _0x22ceb6['IconSParam1'];if(_0x44a8b3==='REC')return _0x22ceb6['IconSParam2'];if(_0x44a8b3===_0x9fb4a9(0x855))return _0x22ceb6['IconSParam3'];if(_0x44a8b3==='MCR')return _0x22ceb6[_0x9fb4a9(0x50d)];if(_0x44a8b3===_0x9fb4a9(0x35e))return _0x22ceb6[_0x9fb4a9(0x37c)];if(_0x44a8b3===_0x9fb4a9(0x4a3))return _0x22ceb6[_0x9fb4a9(0x8ac)];if(_0x44a8b3===_0x9fb4a9(0x240))return _0x22ceb6[_0x9fb4a9(0x46b)];if(_0x44a8b3==='FDR')return _0x22ceb6['IconSParam8'];if(_0x44a8b3===_0x9fb4a9(0x1e1))return _0x22ceb6['IconSParam9'];if(VisuMZ[_0x9fb4a9(0x2d6)][_0x9fb4a9(0x41a)][_0x44a8b3]){if(_0x9fb4a9(0x4a8)!==_0x9fb4a9(0x922))return VisuMZ[_0x9fb4a9(0x2d6)][_0x9fb4a9(0x41a)][_0x44a8b3]||0x0;else _0xde487+='\x0a',_0x266d32+=_0x20d693[_0x9fb4a9(0x7d0)][0x0];}return 0x0;},VisuMZ[_0x551b1e(0x40f)]=function(_0x44a65a,_0x153e51,_0x979f24){const _0x22e5bf=_0x551b1e;if(_0x979f24===undefined&&_0x44a65a%0x1===0x0)return _0x44a65a;if(_0x979f24!==undefined&&[_0x22e5bf(0x339),_0x22e5bf(0x2b4),_0x22e5bf(0x3e1),_0x22e5bf(0x4b2),_0x22e5bf(0x5d8),_0x22e5bf(0x56c),_0x22e5bf(0x22b),_0x22e5bf(0x601)][_0x22e5bf(0x82f)](String(_0x979f24)[_0x22e5bf(0x724)]()['trim']()))return _0x44a65a;_0x153e51=_0x153e51||0x0;if(VisuMZ[_0x22e5bf(0x2d6)][_0x22e5bf(0x34b)][_0x979f24]){if(VisuMZ[_0x22e5bf(0x2d6)][_0x22e5bf(0x4b8)][_0x979f24]===_0x22e5bf(0x336))return _0x44a65a;else{if(_0x22e5bf(0x615)===_0x22e5bf(0x615))return String((_0x44a65a*0x64)[_0x22e5bf(0x276)](_0x153e51))+'%';else _0x395cbd[_0x22e5bf(0x86a)]&&_0x3806e9['endAnimation']();}}return String((_0x44a65a*0x64)[_0x22e5bf(0x276)](_0x153e51))+'%';},VisuMZ['GroupDigits']=function(_0x38aee2){const _0x28f43d=_0x551b1e;_0x38aee2=String(_0x38aee2);if(!_0x38aee2)return _0x38aee2;if(typeof _0x38aee2!=='string')return _0x38aee2;const _0x191030=VisuMZ['CoreEngine'][_0x28f43d(0x47b)]['QoL'][_0x28f43d(0x2e7)]||'en-US',_0x3d0edf={'maximumFractionDigits':0x6};_0x38aee2=_0x38aee2[_0x28f43d(0x1a5)](/\[(.*?)\]/g,(_0xbe92c,_0x2dc1da)=>{const _0x2c13bc=_0x28f43d;return VisuMZ[_0x2c13bc(0x4c4)](_0x2dc1da,'[',']');}),_0x38aee2=_0x38aee2['replace'](/<(.*?)>/g,(_0x18749f,_0x2daeb7)=>{const _0x27586f=_0x28f43d;return VisuMZ[_0x27586f(0x4c4)](_0x2daeb7,'<','>');}),_0x38aee2=_0x38aee2['replace'](/\{\{(.*?)\}\}/g,(_0x61efe7,_0x5df625)=>{const _0x51a398=_0x28f43d;return _0x51a398(0x1f6)!==_0x51a398(0x1f6)?this[_0x51a398(0x793)](_0x5d9338):VisuMZ[_0x51a398(0x4c4)](_0x5df625,'','');}),_0x38aee2=_0x38aee2[_0x28f43d(0x1a5)](/(\d+\.?\d*)/g,(_0x303c6d,_0x474371)=>{const _0x4dd8b6=_0x28f43d;let _0x5aed5c=_0x474371;if(_0x5aed5c[0x0]==='0')return _0x5aed5c;if(_0x5aed5c[_0x5aed5c[_0x4dd8b6(0x55a)]-0x1]==='.')return Number(_0x5aed5c)['toLocaleString'](_0x191030,_0x3d0edf)+'.';else{if(_0x5aed5c[_0x5aed5c[_0x4dd8b6(0x55a)]-0x1]===',')return Number(_0x5aed5c)[_0x4dd8b6(0x7ed)](_0x191030,_0x3d0edf)+',';else{if(_0x4dd8b6(0x3f6)!=='KbkWg')return Number(_0x5aed5c)['toLocaleString'](_0x191030,_0x3d0edf);else this[_0x4dd8b6(0x631)](_0x4ae2e8['systemColor']()),this[_0x4dd8b6(0x29a)](_0x5bbb31,_0x130538,_0x59a260,_0x396b38,_0x4dd8b6(0x619)),_0xdf2873-=this[_0x4dd8b6(0x84e)](_0xecfe5e)+0x6;}}});let _0x2a334f=0x3;while(_0x2a334f--){if(_0x28f43d(0x422)===_0x28f43d(0x2f8)){const _0x9a4d83=this[_0x28f43d(0x394)](_0x4eeab5),_0x3a78ce=new(_0x9a4d83?_0x3938d3:_0x54daf8)(),_0x3a3808=this[_0x28f43d(0x286)](_0x587b42);this[_0x28f43d(0x2ad)](_0x472cc4[0x0])&&(_0x4b075a=!_0x2152e5),_0x3a78ce[_0x28f43d(0x303)]=_0x41429e,_0x3a78ce[_0x28f43d(0x43d)](_0x3a3808,_0x5b9087,_0x40bc88,_0x2eb65f),_0x3a78ce[_0x28f43d(0x3e6)](_0x2a0b73),this[_0x28f43d(0x357)][_0x28f43d(0x1d7)](_0x3a78ce),this[_0x28f43d(0x860)][_0x28f43d(0x41b)](_0x3a78ce);}else _0x38aee2=VisuMZ[_0x28f43d(0x50a)](_0x38aee2);}return _0x38aee2;},VisuMZ['PreserveNumbers']=function(_0x5c53ab,_0x17986f,_0x2b0736){const _0x1ca5ca=_0x551b1e;return _0x5c53ab=_0x5c53ab[_0x1ca5ca(0x1a5)](/(\d)/gi,(_0x4f2c57,_0x2ee7be)=>_0x1ca5ca(0x1a3)['format'](Number(_0x2ee7be))),'%2%1%3'['format'](_0x5c53ab,_0x17986f,_0x2b0736);},VisuMZ[_0x551b1e(0x50a)]=function(_0x2fbee7){return _0x2fbee7=_0x2fbee7['replace'](/PRESERVCONVERSION\((\d+)\)/gi,(_0x1a209b,_0x2f65dd)=>Number(parseInt(_0x2f65dd))),_0x2fbee7;},VisuMZ[_0x551b1e(0x398)]=function(_0x1b2448){const _0x3caac5=_0x551b1e;SoundManager['playOk']();if(!Utils[_0x3caac5(0x529)]()){const _0x14fdfe=window[_0x3caac5(0x1ba)](_0x1b2448,_0x3caac5(0x475));}else{const _0x35044b=process[_0x3caac5(0x1f1)]==_0x3caac5(0x625)?'open':process[_0x3caac5(0x1f1)]=='win32'?_0x3caac5(0x82d):_0x3caac5(0x709);require('child_process')[_0x3caac5(0x7fe)](_0x35044b+'\x20'+_0x1b2448);}},Game_Picture[_0x551b1e(0x5ff)][_0x551b1e(0x68c)]=function(){const _0x3a19fd=_0x551b1e;return this[_0x3a19fd(0x5ca)];},VisuMZ['CoreEngine'][_0x551b1e(0x60b)]=Game_Picture['prototype'][_0x551b1e(0x665)],Game_Picture[_0x551b1e(0x5ff)]['initBasic']=function(){const _0x1d1004=_0x551b1e;VisuMZ[_0x1d1004(0x2d6)][_0x1d1004(0x60b)]['call'](this),this['_anchor']={'x':0x0,'y':0x0},this['_targetAnchor']={'x':0x0,'y':0x0};},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x20b)]=Game_Picture[_0x551b1e(0x5ff)][_0x551b1e(0x382)],Game_Picture[_0x551b1e(0x5ff)][_0x551b1e(0x382)]=function(){const _0x160b8d=_0x551b1e;this[_0x160b8d(0x902)](),VisuMZ['CoreEngine'][_0x160b8d(0x20b)]['call'](this);},VisuMZ['CoreEngine'][_0x551b1e(0x401)]=Game_Picture['prototype'][_0x551b1e(0x8ec)],Game_Picture['prototype'][_0x551b1e(0x8ec)]=function(_0x5bed5c,_0x1ae39b,_0x47b1e0,_0x84e5b9,_0x1f2b36,_0x4b4675,_0x14acec,_0x2c5dfd){const _0x3b8264=_0x551b1e;VisuMZ['CoreEngine'][_0x3b8264(0x401)]['call'](this,_0x5bed5c,_0x1ae39b,_0x47b1e0,_0x84e5b9,_0x1f2b36,_0x4b4675,_0x14acec,_0x2c5dfd),this[_0x3b8264(0x1ea)]([{'x':0x0,'y':0x0},{'x':0.5,'y':0.5}][_0x1ae39b]||{'x':0x0,'y':0x0});},VisuMZ[_0x551b1e(0x2d6)]['Game_Picture_move']=Game_Picture['prototype'][_0x551b1e(0x335)],Game_Picture['prototype'][_0x551b1e(0x335)]=function(_0x38a88b,_0x175cd1,_0x4ad14b,_0x45409e,_0x5c38f5,_0x282fe1,_0x25b637,_0x510ed1,_0x38aefe){const _0x19d8f4=_0x551b1e;VisuMZ[_0x19d8f4(0x2d6)][_0x19d8f4(0x88b)][_0x19d8f4(0x511)](this,_0x38a88b,_0x175cd1,_0x4ad14b,_0x45409e,_0x5c38f5,_0x282fe1,_0x25b637,_0x510ed1,_0x38aefe),this[_0x19d8f4(0x5b8)]([{'x':0x0,'y':0x0},{'x':0.5,'y':0.5}][_0x38a88b]||{'x':0x0,'y':0x0});},Game_Picture[_0x551b1e(0x5ff)][_0x551b1e(0x902)]=function(){const _0x55b63f=_0x551b1e;this['_duration']>0x0&&(_0x55b63f(0x919)===_0x55b63f(0x919)?(this[_0x55b63f(0x5ca)]['x']=this[_0x55b63f(0x54b)](this['_anchor']['x'],this[_0x55b63f(0x5c2)]['x']),this['_anchor']['y']=this[_0x55b63f(0x54b)](this[_0x55b63f(0x5ca)]['y'],this[_0x55b63f(0x5c2)]['y'])):_0x14abcf[_0x55b63f(0x2d6)]['Window_Selectable_cursorDown'][_0x55b63f(0x511)](this,_0x199a6e));},Game_Picture[_0x551b1e(0x5ff)][_0x551b1e(0x1ea)]=function(_0x2b5656){const _0x36545b=_0x551b1e;this['_anchor']=_0x2b5656,this[_0x36545b(0x5c2)]=JsonEx[_0x36545b(0x6b4)](this[_0x36545b(0x5ca)]);},Game_Picture['prototype'][_0x551b1e(0x5b8)]=function(_0x50a1c4){const _0x84b278=_0x551b1e;this[_0x84b278(0x5c2)]=_0x50a1c4;},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x6c3)]=Sprite_Picture[_0x551b1e(0x5ff)][_0x551b1e(0x825)],Sprite_Picture['prototype']['updateOrigin']=function(){const _0x12f134=_0x551b1e,_0x589e75=this[_0x12f134(0x2ed)]();if(!_0x589e75[_0x12f134(0x68c)]())_0x12f134(0x3bb)!==_0x12f134(0x3bb)?this[_0x12f134(0x705)]=_0x12f134(0x1fd):VisuMZ[_0x12f134(0x2d6)]['Sprite_Picture_updateOrigin'][_0x12f134(0x511)](this);else{if('Okvyd'!==_0x12f134(0x486))this[_0x12f134(0x68c)]['x']=_0x589e75[_0x12f134(0x68c)]()['x'],this['anchor']['y']=_0x589e75['anchor']()['y'];else return _0x12f134(0x233);}},Game_Action[_0x551b1e(0x5ff)][_0x551b1e(0x75e)]=function(_0x84aa0e){const _0x408795=_0x551b1e;if(_0x84aa0e){const _0x41fe26=_0x84aa0e[_0x408795(0x331)];if(_0x41fe26===0x1&&this[_0x408795(0x403)]()['attackSkillId']()!==0x1){if('XxDya'===_0x408795(0x3c7))this['setAttack']();else return _0x32d28c[_0x408795(0x883)](_0x408795(0x5c1));}else _0x41fe26===0x2&&this[_0x408795(0x403)]()['guardSkillId']()!==0x2?_0x408795(0x6f9)==='XibLP'?this[_0x408795(0x6af)]():this[_0x408795(0x7e7)]=_0x5937cd:this[_0x408795(0x7d7)](_0x41fe26);}else this['clear']();},Game_Actor['prototype'][_0x551b1e(0x439)]=function(){const _0x606ba4=_0x551b1e;return this[_0x606ba4(0x3b1)]()[_0x606ba4(0x2e0)](_0x39f29c=>this[_0x606ba4(0x1b7)](_0x39f29c)&&this['skillTypes']()['includes'](_0x39f29c[_0x606ba4(0x56a)]));},Window_Base['prototype'][_0x551b1e(0x8ce)]=function(){const _0x26aaed=_0x551b1e;this[_0x26aaed(0x69b)]=new Sprite(),this[_0x26aaed(0x69b)][_0x26aaed(0x2b8)]=new Bitmap(0x0,0x0),this[_0x26aaed(0x69b)]['x']=0x0,this[_0x26aaed(0x6fd)](this['_dimmerSprite']);},Window_Base['prototype'][_0x551b1e(0x4ef)]=function(){const _0x5e389e=_0x551b1e;if(this[_0x5e389e(0x69b)]){const _0x142377=this[_0x5e389e(0x69b)][_0x5e389e(0x2b8)],_0x50ef9a=this[_0x5e389e(0x652)],_0xaf2b3e=this['height'],_0x325bcf=this[_0x5e389e(0x70d)],_0x5a28d3=ColorManager[_0x5e389e(0x89e)](),_0x56bb88=ColorManager[_0x5e389e(0x350)]();_0x142377['resize'](_0x50ef9a,_0xaf2b3e),_0x142377[_0x5e389e(0x2fb)](0x0,0x0,_0x50ef9a,_0x325bcf,_0x56bb88,_0x5a28d3,!![]),_0x142377[_0x5e389e(0x8fe)](0x0,_0x325bcf,_0x50ef9a,_0xaf2b3e-_0x325bcf*0x2,_0x5a28d3),_0x142377[_0x5e389e(0x2fb)](0x0,_0xaf2b3e-_0x325bcf,_0x50ef9a,_0x325bcf,_0x5a28d3,_0x56bb88,!![]),this[_0x5e389e(0x69b)]['setFrame'](0x0,0x0,_0x50ef9a,_0xaf2b3e);}},Game_Actor[_0x551b1e(0x5ff)][_0x551b1e(0x379)]=function(){const _0x4f7de3=_0x551b1e;for(let _0x203e1b=0x0;_0x203e1b<this[_0x4f7de3(0x735)]();_0x203e1b++){const _0x1efa20=this[_0x4f7de3(0x55c)]();let _0xf254ad=Number[_0x4f7de3(0x73b)];this['setAction'](_0x203e1b,_0x1efa20[0x0]);for(const _0x10b424 of _0x1efa20){const _0x15dcea=_0x10b424[_0x4f7de3(0x752)]();_0x15dcea>_0xf254ad&&(_0x4f7de3(0x322)!==_0x4f7de3(0x540)?(_0xf254ad=_0x15dcea,this[_0x4f7de3(0x2df)](_0x203e1b,_0x10b424)):_0x5c1b73[_0x4f7de3(0x2d6)][_0x4f7de3(0x872)][_0x4f7de3(0x511)](this,_0x2fe0bc));}}this[_0x4f7de3(0x7d5)]('waiting');},Window_BattleItem['prototype']['isEnabled']=function(_0x4e7e94){const _0x98b29f=_0x551b1e;if(BattleManager['actor']()){if(_0x98b29f(0x51d)===_0x98b29f(0x414))_0x247e56[_0x98b29f(0x2d6)][_0x98b29f(0x557)][_0x98b29f(0x511)](this),this[_0x98b29f(0x618)]=_0x2fd4c7,this[_0x98b29f(0x568)]=_0x3263d9,this[_0x98b29f(0x2fd)]=_0x204cdd[_0x98b29f(0x5e7)];else return BattleManager['actor']()[_0x98b29f(0x1b7)](_0x4e7e94);}else{if(_0x98b29f(0x612)===_0x98b29f(0x1c8)){var _0x2988d7=_0x42d396(_0x4c230a['$1']);_0x5a1c62+=_0x2988d7;}else return Window_ItemList[_0x98b29f(0x5ff)][_0x98b29f(0x7e6)][_0x98b29f(0x511)](this,_0x4e7e94);}},VisuMZ[_0x551b1e(0x2d6)]['Scene_Map_createSpriteset']=Scene_Map[_0x551b1e(0x5ff)][_0x551b1e(0x20a)],Scene_Map[_0x551b1e(0x5ff)]['createSpriteset']=function(){const _0x5b56c8=_0x551b1e;VisuMZ['CoreEngine'][_0x5b56c8(0x880)][_0x5b56c8(0x511)](this);const _0x2065ba=this[_0x5b56c8(0x236)][_0x5b56c8(0x8e5)];if(_0x2065ba)this[_0x5b56c8(0x1d7)](_0x2065ba);},VisuMZ[_0x551b1e(0x2d6)][_0x551b1e(0x595)]=Scene_Battle[_0x551b1e(0x5ff)][_0x551b1e(0x20a)],Scene_Battle[_0x551b1e(0x5ff)][_0x551b1e(0x20a)]=function(){const _0x209d15=_0x551b1e;VisuMZ[_0x209d15(0x2d6)][_0x209d15(0x595)]['call'](this);const _0xee6843=this[_0x209d15(0x236)]['_timerSprite'];if(_0xee6843)this[_0x209d15(0x1d7)](_0xee6843);},Sprite_Actor[_0x551b1e(0x5ff)][_0x551b1e(0x572)]=function(){const _0x11e7aa=_0x551b1e;Sprite_Battler[_0x11e7aa(0x5ff)][_0x11e7aa(0x572)][_0x11e7aa(0x511)](this),this[_0x11e7aa(0x28f)]();if(this['_actor']){if(_0x11e7aa(0x33f)===_0x11e7aa(0x33f))this[_0x11e7aa(0x3bc)]();else return _0x2fe536[_0x11e7aa(0x2ab)][_0x11e7aa(0x511)](this);}else{if(this[_0x11e7aa(0x1d9)]!==''){if(_0x11e7aa(0x609)===_0x11e7aa(0x29d)){if(_0x86ed3d[_0x11e7aa(0x835)])return;}else this[_0x11e7aa(0x1d9)]='';}}},Window[_0x551b1e(0x5ff)][_0x551b1e(0x3b8)]=function(){const _0x482109=_0x551b1e,_0x23bf2e=this[_0x482109(0x890)],_0x2d0294=this['_height'],_0x296004=0x18,_0x1296d9=_0x296004/0x2,_0x15b488=0x60+_0x296004,_0x14bab4=0x0+_0x296004;this['_downArrowSprite'][_0x482109(0x2b8)]=this[_0x482109(0x56e)],this[_0x482109(0x533)]['anchor']['x']=0.5,this[_0x482109(0x533)][_0x482109(0x68c)]['y']=0.5,this[_0x482109(0x533)]['setFrame'](_0x15b488+_0x1296d9,_0x14bab4+_0x1296d9+_0x296004,_0x296004,_0x1296d9),this[_0x482109(0x533)][_0x482109(0x335)](Math['round'](_0x23bf2e/0x2),Math[_0x482109(0x4ed)](_0x2d0294-_0x1296d9)),this[_0x482109(0x8bf)]['bitmap']=this[_0x482109(0x56e)],this[_0x482109(0x8bf)][_0x482109(0x68c)]['x']=0.5,this[_0x482109(0x8bf)][_0x482109(0x68c)]['y']=0.5,this['_upArrowSprite'][_0x482109(0x62b)](_0x15b488+_0x1296d9,_0x14bab4,_0x296004,_0x1296d9),this[_0x482109(0x8bf)][_0x482109(0x335)](Math[_0x482109(0x4ed)](_0x23bf2e/0x2),Math[_0x482109(0x4ed)](_0x1296d9));},Window['prototype'][_0x551b1e(0x90c)]=function(){const _0x2f388d=_0x551b1e,_0x408b4f=0x90,_0x521cd9=0x60,_0x2ada11=0x18;this[_0x2f388d(0x442)][_0x2f388d(0x2b8)]=this[_0x2f388d(0x56e)],this[_0x2f388d(0x442)][_0x2f388d(0x68c)]['x']=0.5,this[_0x2f388d(0x442)][_0x2f388d(0x68c)]['y']=0x1,this[_0x2f388d(0x442)][_0x2f388d(0x335)](Math['round'](this[_0x2f388d(0x890)]/0x2),this['_height']),this[_0x2f388d(0x442)][_0x2f388d(0x62b)](_0x408b4f,_0x521cd9,_0x2ada11,_0x2ada11),this['_pauseSignSprite'][_0x2f388d(0x1cc)]=0xff;},Window['prototype']['_updateFilterArea']=function(){const _0xf62d70=_0x551b1e,_0x3d0f4f=this[_0xf62d70(0x531)][_0xf62d70(0x25a)]['apply'](new Point(0x0,0x0)),_0x568d58=this['_clientArea'][_0xf62d70(0x4d6)];_0x568d58['x']=_0x3d0f4f['x']+this[_0xf62d70(0x7f0)]['x'],_0x568d58['y']=_0x3d0f4f['y']+this[_0xf62d70(0x7f0)]['y'],_0x568d58['width']=Math[_0xf62d70(0x256)](this[_0xf62d70(0x22d)]*this['scale']['x']),_0x568d58['height']=Math[_0xf62d70(0x256)](this[_0xf62d70(0x766)]*this[_0xf62d70(0x82e)]['y']);},Window['prototype']['_refreshBack']=function(){const _0xa7285f=_0x551b1e,_0x995221=this[_0xa7285f(0x4e6)],_0x1e2f77=Math[_0xa7285f(0x46a)](0x0,this[_0xa7285f(0x890)]-_0x995221*0x2),_0x128e9b=Math['max'](0x0,this[_0xa7285f(0x1bd)]-_0x995221*0x2),_0x4948d7=this[_0xa7285f(0x25d)],_0x3feadb=_0x4948d7['children'][0x0];_0x4948d7[_0xa7285f(0x2b8)]=this[_0xa7285f(0x56e)],_0x4948d7[_0xa7285f(0x62b)](0x0,0x0,0x60,0x60),_0x4948d7[_0xa7285f(0x335)](_0x995221,_0x995221),_0x4948d7[_0xa7285f(0x82e)]['x']=_0x1e2f77/0x60,_0x4948d7[_0xa7285f(0x82e)]['y']=_0x128e9b/0x60,_0x3feadb[_0xa7285f(0x2b8)]=this[_0xa7285f(0x56e)],_0x3feadb[_0xa7285f(0x62b)](0x0,0x60,0x60,0x60),_0x3feadb[_0xa7285f(0x335)](0x0,0x0,_0x1e2f77,_0x128e9b),_0x3feadb[_0xa7285f(0x82e)]['x']=0x1/_0x4948d7[_0xa7285f(0x82e)]['x'],_0x3feadb[_0xa7285f(0x82e)]['y']=0x1/_0x4948d7[_0xa7285f(0x82e)]['y'],_0x4948d7['setColorTone'](this[_0xa7285f(0x201)]);},Game_Temp[_0x551b1e(0x5ff)][_0x551b1e(0x6e3)]=function(){const _0x230abe=_0x551b1e;this[_0x230abe(0x79e)]=[],this[_0x230abe(0x794)]=[],this[_0x230abe(0x21e)]=[];},VisuMZ['CoreEngine'][_0x551b1e(0x3bd)]=Scene_Base[_0x551b1e(0x5ff)][_0x551b1e(0x268)],Scene_Base[_0x551b1e(0x5ff)][_0x551b1e(0x268)]=function(){const _0x20c12d=_0x551b1e;VisuMZ[_0x20c12d(0x2d6)][_0x20c12d(0x3bd)][_0x20c12d(0x511)](this),$gameTemp[_0x20c12d(0x6e3)]();};