//=============================================================================
// VisuStella MZ - Core Engine
// VisuMZ_0_CoreEngine.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_0_CoreEngine = true;

var VisuMZ = VisuMZ || {};
VisuMZ.CoreEngine = VisuMZ.CoreEngine || {};
VisuMZ.CoreEngine.version = 1.39;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 0] [Version 1.39] [CoreEngine]
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
 * @default {"UIArea":"","FadeSpeed:num":"24","BoxMargin:num":"4","CommandWidth:num":"240","BottomHelp:eval":"false","RightMenus:eval":"true","ShowButtons:eval":"true","cancelShowButton:eval":"true","menuShowButton:eval":"true","pagedownShowButton:eval":"true","numberShowButton:eval":"true","ButtonHeight:num":"52","BottomButtons:eval":"false","SideButtons:eval":"true","LargerResolution":"","RepositionActors:eval":"true","RepositionEnemies:eval":"true","MenuObjects":"","LvExpGauge:eval":"true","ParamArrow:str":"→","TextCodeSupport":"","TextCodeClassNames:eval":"true","TextCodeNicknames:eval":"true"}
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
 * @param LargerResolution
 * @text Larger Resolution
 *
 * @param RepositionActors:eval
 * @text Reposition Actors
 * @parent LargerResolution
 * @type boolean
 * @on Reposition
 * @off Keep As Is
 * @desc Update the position of actors in battle if the screen resolution has changed. Ignore if using Battle Core.
 * @default true
 *
 * @param RepositionEnemies:eval
 * @text Reposition Enemies
 * @parent LargerResolution
 * @type boolean
 * @on Reposition
 * @off Keep As Is
 * @desc Update the position of enemies in battle if the screen resolution has changed.
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
//=============================================================================

const _0x21ab=['DashToggleR','OUTQUART','sparamRate1','catchUnknownError','isActor','Pixelated','ListRect','ltxyn','processKeyboardHome','WindowLayer_render','isPressed','IconParam3','paramRate1','xScrollLinkedOffset','BACK_SLASH','Xninj','fgbtF','NUMPAD3','pKOuQ','Tilemap_addShadow','yJdHl','mirror','rgrTS','_forcedTroopView','InputRect','successRate','encounterStepsMinimum','keypress','ButtonAssist','style','applyEasing','XParamVocab1','bumcS','NUMPAD8','CrJkE','initCoreEasing','command357','DisplayedParams','foNen','BgFilename2','CustomParam','layoutSettings','_digitGrouping','makeCoreEngineCommandList','NameInputMessage','buttonAssistText5','_defaultStretchMode','toLowerCase','Basic','loadSystem','F19','processHandling','initBasic','destroyCoreEngineMarkedBitmaps','SEMICOLON','mainAreaTopSideButtonLayout','xparamFlatJS','ColorMaxLvGauge2','Scene_Equip_create','ScreenShake','isNextScene','_statusParamsWindow','kpRrN','ExportCurTroopText','titles2','adjustSprite','Scene_Menu_create','startAutoNewGame','gMmVd','fillStyle','Param','loadBitmap','〖〖〖\x20Troop\x20%1:\x20%2\x20Script\x20〗〗〗\x0a\x0a','backOpacity','setClickHandler','ATK','setMainFontSize','fadeSpeed','processKeyboardHandling','processKeyboardDigitChange','SaveMenu','PGUP','buttonAssistKey2','optionsWindowRect','return\x200','paramchangeTextColor','NewGameCommonEvent','_categoryWindow','Window_NameInput_initialize','cursorDown','onButtonImageLoad','loadTitle2','setActorHomeRepositioned','platform','itemPadding','updateKeyText','isGameActive','_mode','SkillTypeBgType','_centerElement','_mainSprite','IconParam2','Export\x20Map\x20Text\x20operation\x20will\x20finish\x20in\x20%1\x20ms(s)','SwitchActorText','NEAREST','_hp','openURL','retreat','288107wICopz','874XHFNvy','inbounce','NFald','playTestF7','sparamPlus1','Bdigj','Game_Interpreter_command111','TPB\x20ACTIVE','_opening','makeDeepCopy','maxCols','setAnchor','HIT','createCancelButton','\x0a\x0a\x0a\x0a\x0a','Game_Actor_paramBase','ColorTPGauge1','animationNextDelay','win32','isItemStyle','wFacT','onload','jXOdW','responseText','DefaultStyle','applyForcedGameTroopSettingsCoreEngine','%1\x0a','SPACE','SceneManager_onKeyDown','Subtitle','ParseTilesetNotetags','_stored_tpGaugeColor2','sEOtA','_movementDuration','DamageColor','CLOSE_BRACKET','rnyhZ','_dimmerSprite','paramWidth','_registerKeyInput','currencyUnit','drawIconBySize','number','_animationQueue','loadTitle1','WIN_OEM_CUSEL','pictures','initDigitGrouping','BMTHE','BottomButtons','_storedMapText','removeAllFauxAnimations','updateScene','qibQp','Duration','Saved\x20file\x20as\x20%1\x20in\x20project\x20folder.','Input_clear','setGuard','gainItem','hit','JUNJA','rightArrowWidth','RequireFocus','application/json','isPlaying','Sprite_Picture_updateOrigin','default','SellBgType','LUK','Game_Event_isCollidedWithEvents','img/%1/','XParamVocab3','updatePositionCoreEngine','WBsXa','_stored_powerDownColor','_backSprite1','ceil','Input_update','updateOpacity','TRAIT_PARAM','createTextState','command355','MAXHP','loadSystemImages','createDigits','xparamRate1','KeySHIFT','OutlineColorDmg','xparamRate2','ParseAllNotetags','_stored_pendingColor','drawActorClass','loadGameImagesCoreEngine','touchUI','%1/','targetPosition','PNnwb','isPlaytest','createFauxAnimation','evaluate','tileWidth','paramName','drawParamName','onNameOk','updatePosition','OTB','BsqaF','Window_Selectable_drawBackgroundRect','NUMPAD1','initVisuMZCoreEngine','isItem','eGVhS','_stored_tpCostColor','openingSpeed','cursorRight','mhp','IconParam0','PictureID','EXECUTE','PixelateImageRendering','Linear','WIN_OEM_PA2','SystemSetBattleSystem','VisuMZ_2_BattleSystemCTB','HANJA','PERCENT','_listWindow','ALT','up2','Max','Xyfgf','Jtdqu','inputWindowRect','VisuMZ_2_BattleSystemSTB','_stored_expGaugeColor2','clearRect','qLbXV','isSideButtonLayout','itemRect','hqmRg','Settings','showDevTools','DLWMl','_hideButtons','skillTypes','axCPn','Scene_Base_terminateAnimationClearBugFix','item','BigZH','ppLIW','GameEnd','IconXParam2','FuXsr','buttonAssistSwitch','CrisisRate','gold','WIN_ICO_00','MainMenu','process_VisuMZ_CoreEngine_Notetags','TCR','Flat1','_optionsWindow','processEscape','cursorPageup','opacity','areButtonsOutsideMainUI','ActorMPColor','processMoveCommand','F7key','drawText','isGamepadConnected','([\x5c+\x5c-]\x5cd+)>','GoldIcon','SceneManager_isGameActive','QTWyR','qsJYt','_cacheScaleX','ColorExpGauge1','getLevel','refreshDimmerBitmap','onKeyDown','Scene_Item_create','isNwjs','ONE','RowSpacing','MAX_GL_TEXTURES','QCHtc','hsMYR','checkSmartEventCollision','onInputBannedWords','setAttack','systemColor','image-rendering','updateClose','clearForcedGameTroopSettingsCoreEngine','zZefx','_effectsContainer','F14','createTroopNote','LEFT','AutoStretch','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','members','Origin','ImgLoad','_list','AGMvA','changeTextColor','sFAJr','STfmk','EQUAL','drawIcon','VisuMZ_2_BattleSystemBTB','pictureId','BasicParameterFormula','_isPlaytest','isSideView','IconXParam4','makeDocumentTitle','DimColor2','updatePadding','height','Window','setCoreEngineScreenShakeStyle','NUMPAD5','_drawTextOutline','remove','eimke','makeInputButtonString','bitmap','TXPyw','_lastPluginCommandInterpreter','evade','outlineColorDmg','ALTGR','statusEquipWindowRect','Plus1','StatusBgType','targetY','doesNameContainBannedWords','createBackground','ActorTPColor','ShowButtons','isFullDocumentTitle','DimColor1','_cancelButton','loadWindowskin','Game_Picture_x','JBtlY','vKWgc','PLAY','renderNoMask','Bitmap_strokeRect','processCursorHomeEndTrigger','XParamVocab9','WIN_OEM_FJ_JISHO','_pagedownButton','contentsOpacity','openness','INELASTIC','ParseClassNotetags','wsgxR','targetX','playEscape','Igrrn','Window_Selectable_cursorDown','INCUBIC','outlineColorGauge','processBack','performEscape','nickname','SystemLoadImages','isNormalPriority','Troop%1','OUTBOUNCE','levelUpRecovery','Scene_Skill_create','NONCONVERT','ItemStyle','_number','gaugeRate','update','yETyJ','ExportAllTroopText','save','targetBackOpacity','RZHdr','battlebacks1','processKeyboardBackspace','dimColor2','BDJZb','Manual','none','cursorPagedown','Actor','mxOLr','isCancelled','ExtractStrFromMap','Bitmap_blt','onEscapeSuccess','_margin','Scene_Map_updateScene','clamp','_windowLayer','QUOTE','Type','InputBgType','rgALH','setViewport','_editWindow','_shouldPreventDefault','registerCommand','categoryWindowRect','ALRzm','MIN_SAFE_INTEGER','bitmapWidth','name','OHoAN','randomJS','UfrGS','drawCurrencyValue','TimeProgress','Window_NameInput_processTouch','_updateFilterArea','701089xbmKeK','_currentMap','_stored_maxLvGaugeColor2','startShake','processTouchModernControls','_pressed','KANA','JpjgE','sMRpv','top','parseForcedGameTroopSettingsCoreEngine','OpenSpeed','makeAutoBattleActions','SParamVocab5','Input_setupEventHandlers','exportAllMapStrings','ItemHeight','makeFontSmaller','IconSParam0','Game_BattlerBase_refresh','paramFlatJS','lMqHK','mWjlJ','drawNewParam','currentLevelExp','Chance','eva','DefaultMode','cursorLeft','isGamepadTriggered','KeyUnlisted','_forcedBattleSys','nSgzm','CommandRect','ncXIs','205hrNAZj','ColorExpGauge2','repositionCancelButtonSideButtonLayout','_isWindow','Bitmap_clearRect','showFauxAnimations','xBYpL','paramPlus','WIN_OEM_WSCTRL','ParseEnemyNotetags','ButtonHeight','F22','destroy','rMCAL','_stored_ctGaugeColor2','INOUTQUINT','Map%1','keyRepeatWait','TextJS','Scene_Map_createSpriteset','colSpacing','ExtractStrFromList','call','changeClass','retrieveFauxAnimation','rjRrX','ARRAYSTRUCT','buttonAssistOffset5','optSideView','MODECHANGE','ColSpacing','KeyItemProtect','dashToggle','ExportStrFromAllTroops','MOPWe','isInputting','_maxDigits','BoxMargin','getCoreEngineScreenShakeStyle','_colorCache','vIjNT','wqUZy','ENTER_SPECIAL','CTB','outbounce','updatePositionCoreEngineShakeHorz','FontShadows','buttonAssistText3','drawGauge','Untitled','setMoveEasingType','gGRkU','expRate','tilesets','AllMaps','CNT','enemies','onLoad','OwhwR','ColorCTGauge1','Game_Map_setup','PwaaT','SlSLW','NoTileShadows','helpAreaHeight','ProfileRect','HELP','_refreshBack','GroupDigits','offsetY','waiting','PictureEraseRange','PRINT','addCommand','paramValueByName','RPtbB','INOUTBACK','EscapeAlways','createButtonAssistWindow','Window_Selectable_processCursorMove','get','GoldOverlap','ActorBgType','LineHeight','_addShadow','processDigitChange','buttonAssistText2','_stored_ctGaugeColor1','createBuffer','paramBase','updatePlayTestF7','Game_Actor_changeClass','LESS_THAN','owYCW','CRI','_targetOffsetY','abs','child_process','pixelated','ListBgType','ShowDevTools','Scene_Map_updateMainMultiply','CommandBgType','command122','XParameterFormula','\x5c}❪SHIFT❫\x5c{','SParamVocab6','_coreEasing','moveMenuButtonSideButtonLayout','SLEEP','attackSkillId','ylQBp','QdAfP','SnapshotOpacity','SwitchToggleRange','list','_backSprite','characters','onKeyDownKeysF6F7','OLGsa','CustomParamNames','SCALE_MODES','_customModified','ColorTPCost','OUTSINE','toLocaleString','framebuffer','boxWidth','SystemSetSideView','popScene','mMbEX','HVsRN','bDkon','Game_Picture_show','CustomParamType','KeyTAB','SideView','keyMapper','nw.gui','_actor','match','GXIvi','initCoreEngine','TItfu','_balloonQueue','setCoreEngineUpdateWindowBg','contains','cancel','deathColor','_refreshArrows','setupCoreEasing','xparamFlat1','BbXXN','gYbQC','getColorDataFromPluginParameters','LvExpGauge','MAX_SAFE_INTEGER','random','SystemSetWindowPadding','setupNewGame','bysst','Opacity','blendFunc','WIN_OEM_CLEAR','IconXParam9','resetTextColor','SnooK','_shakeDuration','Bitmap_resize','_mapNameWindow','CEV','_pauseSignSprite','isRepeated','map','powerUpColor','isHandled','textWidth','ColorPowerDown','STB','statusParamsWindowRect','gameTitle','Speed','TextStr','FngYD','Spriteset_Base_destroy','getCombinedScrollingText','GoldRect','F6key','requestMotion','animationBaseDelay','GwJfh','_coreEasingType','DELETE','TitlePicButtons','worldTransform','PERIOD','processAlwaysEscape','code','INOUTEXPO','Window_StatusBase_drawActorLevel','Scene_Options_create','getLastPluginCommandInterpreter','CLOSE_PAREN','lhTdr','createJsQuickFunction','IconXParam5','VOLUME_UP','CxnQT','Window_Base_drawCharacter','Color','STENCIL_TEST','resetBattleSystem','buttonAssistOk','BaseTexture','targetScaleX','isAnimationForEach','_colorTone','OkText','atTuP','bgm','sparamRate','statusWindowRect','focus','yaXcX','dimColor1','mpGaugeColor2','_backgroundFilter','skipBranch','ActorRect','sJNiF','randomInt','EYuDQ','textColor','<JS\x20%1\x20%2:[\x20](.*)>','uYTza','SADHr','faceHeight','bPsWJ','originalJS','visible','setupValueFont','Key%1','ColorSystem','integer','ichag','numberShowButton','_buttonType','OUTCUBIC','sparamPlus','cujLd','_pageupButton','paramFlat','EnableMasking','ModernControls','erasePicture','targetObjects','drawParamText','isSpecialCode','trim','applyCoreEasing','SwitchToggleOne','createFauxAnimationQueue','EISU','Power','ParamChange','itypeId','ItemMenu','ConvertParams','EncounterRateMinimum','_inputWindow','_slotWindow','listWindowRect','F15','hLRXq','CZGrm','oXdBK','%1%2','fontSize','_offsetX','EREOF','TGR','vertical','_screenY','maxGold','_index','gVekr','Sprite_Battler_startMove','XParamVocab7','constructor','BlendMode','StartID','KnBRb','SuvaA','PRZiY','transform','playCursorSound','startNormalGame','XHMqM','children','PzBSW','printError','BattleManager_processEscape','HPLGs','dummyWindowRect','open','Scene_Battle_update','WIN_OEM_AUTO','buttons','CustomParamAbb','Window_NameInput_cursorLeft','IconParam7','enable','F18','SUBTRACT','isClosed','QDyjb','Bitmap_drawTextOutline','setWindowPadding','down2','CommandWidth','Scene_Battle_createCancelButton','updatePositionCoreEngineShakeVert','filters','sparamRateJS','IconParam5','clearStencil','URL','buttonAssistText%1','width','loadMapData','EXR','faceWidth','EQUALS','calcCoreEasing','_buttonAssistWindow','wWbGl','updateCoreEasing','mainAreaHeightSideButtonLayout','setEasingType','_stored_systemColor','_duration','BattleSystem','FDR','rYChx','Window_Selectable_itemRect','helpAreaTop','Spriteset_Base_initialize','isCollidedWithEvents','ZOOM','Game_Action_itemHit','RepositionActors','UNBdV','Scene_Name_create','events','ExtJS','drawRightArrow','SParamVocab9','vertJS','isMaxLevel','parameters','eMLcI','TextManager_param','AccuracyBoost','isFauxAnimationPlaying','CreateBattleSystemID','join','snapForBackground','paramRate2','gaugeBackColor','setActionState','getBattleSystem','menuShowButton','PfJOt','flush','targetEvaRate','DataManager_setupNewGame','BACK_QUOTE','createCustomBackgroundImages','volume','actorWindowRect','updatePositionCoreEngineShakeOriginal','Unnamed','ASTERISK','Scene_MenuBase_mainAreaHeight','currentClass','TDqip','bind','EndingID','performMiss','titles1','0.00','imageSmoothingEnabled','skills','jiDYM','_repositioned','fsWLm','Uwwjn','_fauxAnimationQueue','isKeyItem','OptionsMenu','_pictureContainer','addChild','setActorHome','Graphics_centerElement','CancelText','_pollGamepads','log','JIZcJ','OUTELASTIC','AnimationMirrorOffset','vUjlk','processFauxAnimationRequests','SLASH','_goldWindow','UgigA','goldWindowRect','_dummyWindow','WASD','INBACK','NumberBgType','setupButtonImage','NumberRect','AllTroops','Conditional\x20Branch\x20Script\x20Error','ColorMaxLvGauge1','_targetAnchor','CONVERT','gJaDP','drawActorExpGauge','Game_System_initialize','Input_onKeyDown','background','EnableNameInput','GdKUY','YeCQp','_commonEventLayers','BottomHelp','_cache','_shakePower','buttonAreaHeight','TPB\x20WAIT','Graphics_printError','buttonAssistOffset%1','SmartEventCollisionPriority','RevertPreserveNumbers','OutlineColor','round','Title','SHIFT','Window_NameInput_refresh','RlqPP','_scene','subjectHitRate','gainGold','NUMPAD7','taZzF','NUMPAD0','initMembersCoreEngine','animationId','LevelUpFullMp','targetScaleY','encounterStep','twvma','ANvse','buttonAssistWindowRect','IconSParam5','test','TdnaW','tpGaugeColor1','_movementWholeDuration','sparamPlus2','subtitle','drawTextEx','XParamVocab5','SideButtons','isSmartEventCollisionOn','KeyboardInput','SceneManager_initialize','doGwn','10lGOUCn','maxLvGaugeColor2','yScrollLinkedOffset','RjPxH','numberWindowRect','buttonAssistKey4','AGI','mQVok','Export\x20Troop\x20Text\x20operation\x20will\x20finish\x20in\x20%1\x20ms(s)','OPEN_PAREN','playOk','SellRect','HelpRect','XParamVocab8','czDVs','setValue','_coreEngineShakeStyle','contents','pbMnN','rgba(0,\x200,\x200,\x200.7)','Bitmap_fillRect','ItemRect','mpCostColor','updateMove','start','sqrt','Knyih','gEqvd','yQWSv','equips','mainCommandWidth','LheVp','canUse','cObne','charAt','displayX','DigitGroupingExText','$dataMap','wholeDuration','_fauxAnimationSprites','currentValue','addEventListener','smoothSelect','qIxwj','setBackgroundType','resetFontSettings','ColorMPGauge1','iLwRJ','StatusMenu','GRD','paramRate','drawGoldItemStyle','terms','FUNC','setAction','catchLoadError','GoldChange','keyboard','sparamPlusJS','nzKxt','PzqfT','hpYNO','enter','onInputOk','ColorCTGauge2','buttonAssistKey%1','Srdpz','SCesy','consumeItem','Window_Gold_refresh','updateDashToggle','ColorHPGauge2','BxJrC','EVA','LNtGc','wxTuf','markCoreEngineModified','_height','3269zUOzkf','xECtB','level','createChildSprite','setupCoreEngine','_screenX','_stored_mpGaugeColor2','movePageButtonSideButtonLayout','BUBCO','_mirror','adjustPictureAntiZoom','EXCLAMATION','DOUBLE_QUOTE','menu','IconIndex','vSKZe','requestFauxAnimation','INCIRC','PHA','TextFmt','_targetOffsetX','Scene_Boot_startNormalGame','ctGaugeColor2','_baseTexture','Scene_Boot_onDatabaseLoaded','WIN_ICO_HELP','blockWidth','Scene_Boot_loadSystemImages','pressed','INOUTELASTIC','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','PositionY','Scene_MenuBase_createPageButtons','COMMA','version','DfbOO','EnableJS','LATIN1','sparam','Scene_MenuBase_createCancelButton','left','CodeJS','〘Show\x20Text〙\x0a','updateTransform','mmp','F21','REC','IconSParam9','setBattleSystem','XNjvW','BannedWords','_sellWindow','getGamepads','create','switchModes','DocumentTitleFmt','buyWindowRect','NewGameBoot','evaded','CategoryRect','ExportAllMapText','FINAL','qxtqM','setEnemyAction','150133GnPePA','toFixed','contentsBack','ColorMPGauge2','EditBgType','status','EVAL','wKWVK','escape','hpGaugeColor1','gcMtk','Game_Action_updateLastTarget','SkillTypeRect','move','process_VisuMZ_CoreEngine_RegExp','filterArea','Scene_MenuBase_mainAreaTop','advanced','calcEasing','GET','UILqE','XOuiH','SCROLL_LOCK','SELECT','Game_Picture_initBasic','process_VisuMZ_CoreEngine_Settings','RepositionEnemies','buttonAssistKey5','BlurFilter','powerDownColor','ctrlKey','isRightInputMode','onClick','traitsPi','translucentOpacity','drawActorNickname','RkCuf','xparam','ruGgZ','PLUS','ParseStateNotetags','_stored_mpCostColor','runCombinedScrollingTextAsCode','%2%1%3','_muteSound','Version','RyXrr','catchNormalError','_setupEventHandlers','Sprite_AnimationMV_processTimingData','majMu','kczyf','TextCodeClassNames','YQHir','offsetX','XZNtW','_cacheScaleY','enableDigitGroupingEx','Show\x20Scrolling\x20Text\x20Script\x20Error','Spriteset_Base_updatePosition','IconSParam3','buttonAssistOffset2','isDying','helpWindowRect','_stored_normalColor','isMenuButtonAssistEnabled','jsQuickFunc','home','maxLvGaugeColor1','itemSuccessRate','tab','LoadError','uxFkm','INQUAD','render','skillTypeWindowRect','addWindow','kDgaa','forceOutOfPlaytest','Window_NameInput_cursorPageup','setColorTone','Vggko','INOUTQUART','stypeId','TitleCommandList','_context','Zgpdc','yJGwk','exit','Map%1.json','ETB','catchException','paramMax','parse','Layer','QwertyLayout','IconSParam2','WIN_OEM_ATTN','initialBattleSystem','value','repeat','text','kMKtX','Smooth','makeFontBigger','〘Common\x20Event\x20%1:\x20%2〙\x20Start','Game_Picture_updateMove','IconSParam7','processSoundTimings','onXhrError','targets','FontSize','connected','PTB','processCursorMove','storeMapData','string','SParamVocab8','actor','pBvEL','IconSet','Scene_Shop_create','PGDN','pagedown','_changingClass','Input_shouldPreventDefault','IconParam6','JJeRe','OrtSq','writeFile','updatePositionCoreEngineShakeRand','bgsVolume','jLpuZ','shift','Window_EquipItem_isEnabled','QKfpj','([\x5c+\x5c-]\x5cd+\x5c.?\x5cd+)>','_clickHandler','initButtonHidden','RClIq','numActions','setHome','mvfmK','option','ZEKkw','useDigitGrouping','DTB','ForceNoPlayTest','IconParam4','mev','startAnimation','Scene_Battle_createSpriteset','IUpQE','LRBqM','showPicture','VisuMZ_2_BattleSystemFTB','defineProperty','Control\x20Variables\x20Script\x20Error','sXPeG','gHlTH','NameMenu','_blank','outlineColor','_inputString','initMembers','targetContentsOpacity','sin','_viewportSize','ShowJS','oYJcw','meVolume','_centerElementCoreEngine','NUMPAD6','NkGgR','_offsetY','buttonY','rowSpacing','_commandList','xawtw','_actorWindow','updateMainMultiply','soNwx','setSideButtonLayout','ParseSkillNotetags','includes','determineSideButtonLayoutValid','ONE_MINUS_SRC_ALPHA','PRINTSCREEN','_clientArea','Jlaly','OmGNC','sparamFlatJS','normalColor','SParamVocab2','cursorUp','isArrowPressed','MenuLayout','GREATER_THAN','replace','getInputButtonString','Window_Base_drawIcon','createCustomParameter','helpAreaBottom','_stored_expGaugeColor1','isTouchedInsideFrame','scymZ','expGaugeColor1','smallParamFontSize','text%1','Padding','Scene_Base_createWindowLayer','Window_Base_update','buttonAssistText1','ActorHPColor','ZlFsV','mpColor','MDF','VisuMZ\x20CoreEngine\x20PictureIcon\x20%1\x20%2','padding','stop','en-US','original','removeFauxAnimation','Keyboard','hideButtonFromView','itemEva','processKeyboardDelete','ItemPadding','gEIDr','EMVhq','canEquip','sKkIP','_playTestFastMode','VisuMZ_2_BattleSystemPTB','refresh','SParamVocab0','TzAWd','Game_Troop_setup','INOUTCIRC','mainAreaTop','backspace','lggTt','_stored_maxLvGaugeColor1','smoZw','initialLevel','smooth','Sprite_Picture_loadBitmap','_CoreEngineSettings','keyCode','Window_Base_createTextState','Game_Picture_y','pow','Spriteset_Battle_createEnemies','oIAyZ','ItemBgType','xparamPlus1','buttonAssistWindowSideRect','GetParamIcon','%1〘Choice\x20Cancel〙%1','ParseActorNotetags','strokeRect','xparamRate','Game_Action_itemEva','NUM','pxCPr','_timerSprite','BTestAddedQuantity','DigitGroupingGaugeSprites','isBusy','_sideButtonLayout','isMagical','【%1】\x0a','drawBackgroundRect','alwaysDash','type','createEnemies','nOgku','isTriggered','_width','asin','disja','ImprovedAccuracySystem','resize','setFrame','exec','Scene_MenuBase_helpAreaTop','JlNYG','duration','paramBaseAboveLevel99','drawGameSubtitle','fromCharCode','VisuMZ_2_BattleSystemOTB','APLVA','F13','AMPERSAND','jqBwE','targetSpritePosition','MRF','CategoryBgType','_statusWindow','bkZMY','levelUp','note','IDs','NUMPAD4','UMoKM','iconHeight','uiAreaWidth','viewport','LUxhq','iVxlu','HOME','Game_Interpreter_PluginCommand','system','Flat','SParameterFormula','add','_stored_tpGaugeColor1','origin','createTitleButtons','MCR','XParamVocab4','kHZoT','ekePW','OPEN_BRACKET','_windowskin','qmjOM','Wait','fillText','Plus2','Game_Interpreter_command105','\x0a\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%2\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(\x27JS\x20Quick\x20Function\x20\x22%1\x22\x20Error!\x27);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20','paramPlusJS','UNDERSCORE','onHSW','SEPARATOR','batch','_profileWindow','paramFlatBonus','clearCachedKeys','zeeGQ','(\x5cd+)([%％])>','Rate2','INSERT','blt','_onKeyDown','《《《\x20Page\x20%1\x20》》》\x0a%2\x0a','ExportStrFromAllMaps','Script\x20Call\x20Error','initialize','backgroundBitmap','disable','_buyWindow','WIN_OEM_PA1','Window_NameInput_cursorRight','sv_actors','Window_Selectable_cursorUp','_backSprite2','WIN_OEM_JUMP','qEJAQ','ParseWeaponNotetags','_stored_gaugeBackColor','_paramPlus','〖〖〖\x20Map\x20%1:\x20%2\x20Script\x20〗〗〗\x0a\x0a','JSON','PASRh','process_VisuMZ_CoreEngine_CustomParameters','VOLUME_DOWN','wGBtc','itemHit','push','stencilFunc','drawAllParams','FunctionName','COLON','QoL','anchor','LoadMenu','setSideView','drawItem','UGDVU','qYDEO','XParamVocab2','lineHeight','_helpWindow','_stored_deathColor','_itemWindow','isEnabled','Graphics','QHEUc','pageup','tileHeight','#%1','WIN_OEM_FJ_LOYA','Sprite_Gauge_currentValue','setViewportCoreEngineFix','traitObjects','Bitmap_gradientFillRect','_stored_mpGaugeColor1','processTouch','MAT','StatusParamsBgType','Aosda','max','Window_StatusBase_drawActorSimpleStatus','maxLevel','_spriteset','floor','reduce','RrOSA','HelpBgType','RightMenus','_moveEasingType','scaleMode','params','IconSParam8','substring','_closing','Window_NumberInput_start','Rate','_active','checkCacheKey','Window_Base_initialize','CoreEngine','Plus','PreserveNumbers','Scene_Title_drawGameTitle','BgFilename1','wdWBe','min','button','PositionJS','textSizeEx','right','AkWtq','META','animations','Location','useDigitGroupingEx','fLLzM','parallaxes','VqBHk','playBuzzer','Bitmap_measureTextWidth','ENTER','scale','ColorHPGauge1','startMove','_bitmap','select','_data','drawCharacter','ColorNormal','PA1','isAlive','crisisColor','SlotRect','defaultInputMode','createCommandWindow','STR','apply','ParseArmorNotetags','CallHandlerJS','atbActive','param','INOUTQUAD','KEEP','sparamRate2','updateEffekseer','initCoreEngineScreenShake','isOptionValid','_troopId','padZero','IconSParam6','sparamFlat2','CTRL','valueOutlineColor','setLastPluginCommandInterpreter','QBaBJ','playMiss','createPageButtons','battlebacks2','itemBackColor1','_backgroundSprite','measureTextWidth','drawSegment','\x5c}❪TAB❫\x5c{','rPxMD','wgagS','kvWrK','itemBackColor2','concat','TRG','dgOin','MenuBg','ARRAYSTR','_gamepadWait','Graphics_defaultStretchMode','PictureFilename','Flat2','BackOpacity','mainAreaHeight','CLEAR','playCursor','length','itemLineRect','isUseModernControls','forceStencil','Scene_Name_onInputOk','maxItems','131466xJiXFf','_animation','isWindowMaskingEnabled','WARNING:\x20%1\x20has\x20already\x20been\x20declared\x0aand\x20cannot\x20be\x20used\x20as\x20a\x20Quick\x20JS\x20Function','ApplyEasing','VBOTg','WIN_OEM_BACKTAB','ExtractStrFromTroop','SParamVocab7','DvmDe','Sprite_Gauge_gaugeRate','DEF','format','send','UXYqe','eVJCc','PositionX','Window_NameInput_cursorDown','vVKZl','BTestWeapons','Scene_Unlisted','SyGfa','iconWidth','hHuZg','Sprite_Animation_setViewport','RegExp','updateLastTarget','OUTQUINT','mUaWE','fillRect','BTB','missed','innerHeight','ConvertNumberToString','_inputSpecialKeyCode','goto','command105','updateFauxAnimations','usableSkills','IconXParam7','moveRelativeToResolutionChange','NewGameCommonEventAll','itemHeight','Game_Picture_calcEasing','TAB','OptionsBgType','picture','Window_NameInput_cursorUp','_tempActor','F17','mpGaugeColor1','xdg-open','createFauxAnimationSprite','prototype','DwEfH','createMenuButton','setupBattleTestItems','isOpen','PAUSE','ShopMenu','updateAnchor','Sprite_Actor_setActorHome','center','DECIMAL','fYLwx','drawFace','Scene_Map_initialize','XParamVocab6','INEXPO','makeActionList','XParamVocab0','processCursorMoveModernControls','ycKgY','darwin','mapId','updateOpen','gaugeLineHeight','slJZT','SParamVocab4','innerWidth','Game_Picture_move','down','IconXParam3','RIGHT','indexOf','destroyed','learnings','ColorTPGauge2','addLoadListener','charCode','CcIwd','valueOutlineWidth','OptionsRect','EhWWD','HRG','VisuMZ_2_BattleSystemETB','MEV','IconSParam4','PjwCW','LpCVR','removeChild','itemWindowRect','FQCqF','PDR','currentExp','([\x5c+\x5c-]\x5cd+)([%％])>','Input_pollGamepads','makeCommandList','areTileShadowsHidden','ParseItemNotetags','MsXfm','CANCEL','pages','_playtestF7Looping','subject','enableDigitGrouping','ProfileBgType','xparamRateJS','MRG','jEmIi','description','_upArrowSprite','NUM_LOCK','gradientFillRect','EnableNumberInput','Scene_MenuBase_createBackground','_refreshPauseSign','titleCommandWindow','_pictureName','stringKeyMap','profileWindowRect','iktXH','expGaugeColor2','nzlRL','reserveCommonEvent','Sprite_destroy','Game_Party_consumeItem','Scene_Map_createMenuButton','createWindowLayer','ColorDeath','Bitmap_drawText','moveCancelButtonSideButtonLayout','Symbol','battleSystem','exp','filter','isMaskingEnabled','terminate','OUTEXPO','updateMotion','FTB','KYdvX','IconXParam1','ItemBackColor2','deselect','MDR','Total','buttonAssistCancel','reserveNewGameCommonEvent','boxHeight','ColorManager_loadWindowskin','drawActorLevel','LINEAR','drawCircle','bAmNF','Game_Actor_levelUp','ESC','Page','WIN_OEM_COPY','makeTargetSprites','ParamName','setMute','gaugeHeight','BrpZP','TranslucentOpacity','_numberWindow','KAtaX','OnLoadJS','Gold','commandWindowRect','ALWAYS','allowShiftScrolling','DrawIcons','zVFxQ','ShowItemBackground','NUMPAD9','TextCodeNicknames','Window_Base_drawText','17289vSLyDN','onDatabaseLoaded','ExportString','targetOpacity','getCustomBackgroundSettings','MULTIPLY','LkSQI','inBattle','hpGaugeColor2','vCdeU','SystemLoadAudio','Icon','GoldFontSize','Scene_Status_create','setBackgroundOpacity','tqUwn','_stored_powerUpColor','toUpperCase','endAnimation','drawActorSimpleStatus','_realScale','<%1\x20%2:[\x20]','aWsjG','processTimingData','index','DATABASE','_hideTileShadows','buttonAssistWindowButtonRect','bitmapHeight','YWDyf','isMVAnimation','Game_Temp_initialize','GfgFi','areButtonsHidden','setTargetAnchor','INBOUNCE','psOYf','mainAreaBottom','F12','ATTN','Sprite_Button_initialize','GASVx','setup','bgmVolume','ctGaugeColor1','REPLACE','CAPSLOCK','eventsXyNt','isPhysical','seVolume','end','_anchor','_downArrowSprite','faces','setSize','_isButtonHidden','pictureButtons','_commandWindow','isCursorMovable','split','drawGameTitle','loadIconBitmap','Game_Screen_initialize','Renderer','adjustBoxSize','_skillTypeWindow','isAnimationOffsetXMirrored','sv_enemies','skillId','PictureEasingType','xparamPlus2','mainFontSize','CustomParamIcons','iQJeV','editWindowRect','result','process_VisuMZ_CoreEngine_jsQuickFunctions','exportAllTroopStrings','isNumpadPressed','process_VisuMZ_CoreEngine_Functions','createSpriteset','reservePlayTestNewGameCommonEvent','clear','Window_NumberInput_processDigitChange','isExpGaugeDrawn','setHandler','IconSParam1','Window_NameInput_cursorPagedown','ARRAYEVAL','rqvYK','_digitGroupingEx','helpAreaTopSideButtonLayout','Game_Character_processMoveCommand','IconXParam6','windowPadding','Game_Interpreter_command355','sceneTerminationClearEffects','Game_Interpreter_command122','Window_Selectable_processTouch','updatePictureAntiZoom','MAXMP','onMoveEnd','_shakeSpeed','buttonAssistKey1','SMNWd','WIN_OEM_RESET','END','tpColor','isMapScrollLinked','updateDocumentTitle','command111','getButtonAssistLocation','show','zRxZg','playTestF6','StatusRect','WTVFC'];const _0x420e26=_0x2320;(function(_0x550fdd,_0x427da4){const _0x1207cf=_0x2320;while(!![]){try{const _0x2ce2b1=parseInt(_0x1207cf(0x476))+-parseInt(_0x1207cf(0x674))+-parseInt(_0x1207cf(0x730))+parseInt(_0x1207cf(0x436))*-parseInt(_0x1207cf(0x3e8))+parseInt(_0x1207cf(0x209))*-parseInt(_0x1207cf(0x812))+-parseInt(_0x1207cf(0x811))+parseInt(_0x1207cf(0x1e6));if(_0x2ce2b1===_0x427da4)break;else _0x550fdd['push'](_0x550fdd['shift']());}catch(_0x3376eb){_0x550fdd['push'](_0x550fdd['shift']());}}}(_0x21ab,0x31704));var label=_0x420e26(0x61d),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x420e26(0x705)](function(_0x25cd66){const _0x1db34b=_0x420e26;return _0x25cd66[_0x1db34b(0x47b)]&&_0x25cd66[_0x1db34b(0x6ec)][_0x1db34b(0x52e)]('['+label+']');})[0x0];function _0x2320(_0xe8bffe,_0x5bb386){return _0x2320=function(_0x21abfb,_0x2320e5){_0x21abfb=_0x21abfb-0x102;let _0x4c216a=_0x21ab[_0x21abfb];return _0x4c216a;},_0x2320(_0xe8bffe,_0x5bb386);}VisuMZ[label][_0x420e26(0x12e)]=VisuMZ[label][_0x420e26(0x12e)]||{},VisuMZ[_0x420e26(0x314)]=function(_0x1b8204,_0x51ebda){const _0x4c293a=_0x420e26;for(const _0x155dce in _0x51ebda){if(_0x155dce[_0x4c293a(0x295)](/(.*):(.*)/i)){const _0xd03681=String(RegExp['$1']),_0x33c3d0=String(RegExp['$2'])['toUpperCase']()[_0x4c293a(0x30b)]();let _0x396970,_0x1a43b3,_0x3ad114;switch(_0x33c3d0){case _0x4c293a(0x57d):_0x396970=_0x51ebda[_0x155dce]!==''?Number(_0x51ebda[_0x155dce]):0x0;break;case'ARRAYNUM':_0x1a43b3=_0x51ebda[_0x155dce]!==''?JSON['parse'](_0x51ebda[_0x155dce]):[],_0x396970=_0x1a43b3[_0x4c293a(0x2b6)](_0x1fc935=>Number(_0x1fc935));break;case _0x4c293a(0x47c):_0x396970=_0x51ebda[_0x155dce]!==''?eval(_0x51ebda[_0x155dce]):null;break;case _0x4c293a(0x788):_0x1a43b3=_0x51ebda[_0x155dce]!==''?JSON[_0x4c293a(0x4d3)](_0x51ebda[_0x155dce]):[],_0x396970=_0x1a43b3[_0x4c293a(0x2b6)](_0x2ae8dc=>eval(_0x2ae8dc));break;case _0x4c293a(0x5e2):_0x396970=_0x51ebda[_0x155dce]!==''?JSON['parse'](_0x51ebda[_0x155dce]):'';break;case'ARRAYJSON':_0x1a43b3=_0x51ebda[_0x155dce]!==''?JSON['parse'](_0x51ebda[_0x155dce]):[],_0x396970=_0x1a43b3[_0x4c293a(0x2b6)](_0x347423=>JSON['parse'](_0x347423));break;case _0x4c293a(0x41d):_0x396970=_0x51ebda[_0x155dce]!==''?new Function(JSON[_0x4c293a(0x4d3)](_0x51ebda[_0x155dce])):new Function(_0x4c293a(0x7f9));break;case'ARRAYFUNC':_0x1a43b3=_0x51ebda[_0x155dce]!==''?JSON['parse'](_0x51ebda[_0x155dce]):[],_0x396970=_0x1a43b3['map'](_0x53fc31=>new Function(JSON[_0x4c293a(0x4d3)](_0x53fc31)));break;case _0x4c293a(0x641):_0x396970=_0x51ebda[_0x155dce]!==''?String(_0x51ebda[_0x155dce]):'';break;case _0x4c293a(0x665):_0x1a43b3=_0x51ebda[_0x155dce]!==''?JSON[_0x4c293a(0x4d3)](_0x51ebda[_0x155dce]):[],_0x396970=_0x1a43b3[_0x4c293a(0x2b6)](_0x59714a=>String(_0x59714a));break;case'STRUCT':_0x3ad114=_0x51ebda[_0x155dce]!==''?JSON[_0x4c293a(0x4d3)](_0x51ebda[_0x155dce]):{},_0x1b8204[_0xd03681]={},VisuMZ[_0x4c293a(0x314)](_0x1b8204[_0xd03681],_0x3ad114);continue;case _0x4c293a(0x223):_0x1a43b3=_0x51ebda[_0x155dce]!==''?JSON[_0x4c293a(0x4d3)](_0x51ebda[_0x155dce]):[],_0x396970=_0x1a43b3[_0x4c293a(0x2b6)](_0x42f3ef=>VisuMZ[_0x4c293a(0x314)]({},JSON[_0x4c293a(0x4d3)](_0x42f3ef)));break;default:continue;}_0x1b8204[_0xd03681]=_0x396970;}}return _0x1b8204;},(_0x137ab4=>{const _0x1f5caa=_0x420e26,_0xc4d85b=_0x137ab4[_0x1f5caa(0x1de)];for(const _0x53eb7c of dependencies){if(_0x1f5caa(0x724)==='BZZxu')(this[_0x1f5caa(0x44a)]!==_0x2b0c8b||this[_0x1f5caa(0x268)]!==_0x28bcca)&&(this[_0x1f5caa(0x23b)](_0x1f5caa(0x11a)),this[_0x1f5caa(0x3de)]=_0x26d769),_0x500fab['CoreEngine'][_0x1f5caa(0x327)][_0x1f5caa(0x21f)](this,_0x33cf67,_0x290ffc,_0x46528c);else{if(!Imported[_0x53eb7c]){if(_0x1f5caa(0x298)!=='foLti'){alert(_0x1f5caa(0x16b)[_0x1f5caa(0x680)](_0xc4d85b,_0x53eb7c)),SceneManager[_0x1f5caa(0x4ce)]();break;}else this[_0x1f5caa(0x839)](_0x2ca3d1);}}}const _0x247152=_0x137ab4['description'];if(_0x247152[_0x1f5caa(0x295)](/\[Version[ ](.*?)\]/i)){const _0x36a0fc=Number(RegExp['$1']);_0x36a0fc!==VisuMZ[label][_0x1f5caa(0x458)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x1f5caa(0x680)](_0xc4d85b,_0x36a0fc)),SceneManager[_0x1f5caa(0x4ce)]());}if(_0x247152[_0x1f5caa(0x295)](/\[Tier[ ](\d+)\]/i)){const _0x454750=Number(RegExp['$1']);_0x454750<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x1f5caa(0x680)](_0xc4d85b,_0x454750,tier)),SceneManager['exit']()):_0x1f5caa(0x185)!==_0x1f5caa(0x185)?this['moveMenuButtonSideButtonLayout']():tier=Math['max'](_0x454750,tier);}VisuMZ[_0x1f5caa(0x314)](VisuMZ[label][_0x1f5caa(0x12e)],_0x137ab4[_0x1f5caa(0x370)]);})(pluginData),PluginManager[_0x420e26(0x1d9)](pluginData[_0x420e26(0x1de)],_0x420e26(0x472),_0x4f9ed9=>{const _0x4ff8cf=_0x420e26;if(!$gameTemp[_0x4ff8cf(0x103)]())return;if(!Utils['isNwjs']())return;SceneManager[_0x4ff8cf(0x3cc)][_0x4ff8cf(0x61a)]=![],VisuMZ[_0x4ff8cf(0x61d)][_0x4ff8cf(0x5d1)]();}),PluginManager[_0x420e26(0x1d9)](pluginData[_0x420e26(0x1de)],_0x420e26(0x1bd),_0x5218d7=>{const _0x1c041f=_0x420e26;if(!$gameTemp[_0x1c041f(0x103)]())return;if(!Utils[_0x1c041f(0x158)]())return;SceneManager['_scene'][_0x1c041f(0x61a)]=![],VisuMZ['CoreEngine'][_0x1c041f(0x22a)]();}),PluginManager[_0x420e26(0x1d9)](pluginData[_0x420e26(0x1de)],'ExportCurMapText',_0x556f76=>{const _0x30f129=_0x420e26;if(!$gameTemp[_0x30f129(0x103)]())return;if(!Utils[_0x30f129(0x158)]())return;if(!$gameMap)return;if($gameMap[_0x30f129(0x6be)]()<=0x0)return;VisuMZ[_0x30f129(0x314)](_0x556f76,_0x556f76);const _0x360c17=_0x30f129(0x219)['format']($gameMap[_0x30f129(0x6be)]()['padZero'](0x3)),_0x57eee3=VisuMZ['CoreEngine'][_0x30f129(0x1cb)]($gameMap[_0x30f129(0x6be)]());VisuMZ[_0x30f129(0x61d)][_0x30f129(0x732)](_0x57eee3,_0x360c17,!![]);}),PluginManager[_0x420e26(0x1d9)](pluginData[_0x420e26(0x1de)],_0x420e26(0x7e4),_0x11cf62=>{const _0xefc472=_0x420e26;if(!$gameTemp[_0xefc472(0x103)]())return;if(!Utils[_0xefc472(0x158)]())return;if(!$gameParty[_0xefc472(0x737)]())return;VisuMZ[_0xefc472(0x314)](_0x11cf62,_0x11cf62);const _0x287129=_0xefc472(0x1b3)[_0xefc472(0x680)]($gameTroop[_0xefc472(0x64d)][_0xefc472(0x64e)](0x4)),_0x2c6152=VisuMZ[_0xefc472(0x61d)][_0xefc472(0x67b)]($gameTroop[_0xefc472(0x64d)]);VisuMZ[_0xefc472(0x61d)][_0xefc472(0x732)](_0x2c6152,_0x287129,!![]);}),VisuMZ['CoreEngine'][_0x420e26(0x732)]=function(_0x27fe04,_0xc115d9,_0x40fd73){const _0xa2e4de=_0x420e26,_0x2be8ac=require('fs');let _0x1ba2f9='Exported_Script_%1.txt'[_0xa2e4de(0x680)](_0xc115d9||'0');_0x2be8ac[_0xa2e4de(0x4f7)](_0x1ba2f9,_0x27fe04,_0x1210ae=>{const _0x1888b7=_0xa2e4de;if(_0x1210ae)throw err;else _0x40fd73&&alert(_0x1888b7(0x849)[_0x1888b7(0x680)](_0x1ba2f9));});},VisuMZ['CoreEngine'][_0x420e26(0x5d1)]=function(){const _0x84fbf0=_0x420e26,_0x36ee5b=[];for(const _0x24209d of $dataMapInfos){if(!_0x24209d)continue;_0x36ee5b[_0x84fbf0(0x5e8)](_0x24209d['id']);}const _0x4fc37c=_0x36ee5b['length']*0x64+Math[_0x84fbf0(0x2ef)](0x64);alert(_0x84fbf0(0x80b)['format'](_0x4fc37c)),this[_0x84fbf0(0x844)]=[],this[_0x84fbf0(0x1e7)]=$dataMap;for(const _0x10aaea of _0x36ee5b){VisuMZ['CoreEngine'][_0x84fbf0(0x352)](_0x10aaea);}setTimeout(VisuMZ['CoreEngine'][_0x84fbf0(0x1f5)][_0x84fbf0(0x38b)](this),_0x4fc37c);},VisuMZ[_0x420e26(0x61d)]['loadMapData']=function(_0x434ffa){const _0x22e4f8=_0x420e26,_0x127c55=_0x22e4f8(0x4cf)['format'](_0x434ffa[_0x22e4f8(0x64e)](0x3)),_0x26344a=new XMLHttpRequest(),_0x3e61fd='data/'+_0x127c55;_0x26344a['open'](_0x22e4f8(0x489),_0x3e61fd),_0x26344a['overrideMimeType'](_0x22e4f8(0x851)),_0x26344a[_0x22e4f8(0x827)]=()=>this[_0x22e4f8(0x4e9)](_0x26344a,_0x434ffa,_0x127c55,_0x3e61fd),_0x26344a['onerror']=()=>DataManager[_0x22e4f8(0x4e3)](_0x22e4f8(0x40d),_0x127c55,_0x3e61fd),_0x26344a[_0x22e4f8(0x681)]();},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x4e9)]=function(_0x310490,_0x49adb7,_0x2312a6,_0x1ad595){const _0x51bded=_0x420e26;$dataMap=JSON[_0x51bded(0x4d3)](_0x310490[_0x51bded(0x829)]),DataManager[_0x51bded(0x242)]($dataMap),this[_0x51bded(0x844)][_0x49adb7]=VisuMZ[_0x51bded(0x61d)][_0x51bded(0x1cb)](_0x49adb7),$dataMap=this[_0x51bded(0x1e7)];},VisuMZ[_0x420e26(0x61d)]['exportAllMapStrings']=function(){const _0xef199f=_0x420e26,_0x2f11c4=_0xef199f(0x23f);this[_0xef199f(0x844)][_0xef199f(0x184)](undefined)[_0xef199f(0x184)]('')[_0xef199f(0x184)](null);const _0x3ad185=this[_0xef199f(0x844)][_0xef199f(0x376)]('\x0a\x0a\x0a\x0a\x0a')[_0xef199f(0x30b)]();VisuMZ[_0xef199f(0x61d)][_0xef199f(0x732)](_0x3ad185,_0x2f11c4,!![]),SceneManager[_0xef199f(0x3cc)][_0xef199f(0x61a)]=!![];},VisuMZ['CoreEngine']['ExtractStrFromMap']=function(_0x4b4adf){const _0x2ef6f1=_0x420e26;if(!$dataMap)return'';let _0x28c51d='█'['repeat'](0x46)+'\x0a\x0a',_0xcb13dd='═'[_0x2ef6f1(0x4da)](0x46)+'\x0a\x0a',_0xa07740='';this['_commonEventLayers']=0x0;for(const _0x73cdf2 of $dataMap[_0x2ef6f1(0x36a)]){if(_0x2ef6f1(0x736)!==_0x2ef6f1(0x65e)){if(!_0x73cdf2)continue;let _0x36a4ca=_0x73cdf2['id'],_0x18a6e1=_0x73cdf2[_0x2ef6f1(0x1de)],_0x3ded28=_0x73cdf2['pages'];for(const _0xf337ac of _0x3ded28){const _0x26ceaa=_0x3ded28[_0x2ef6f1(0x6c8)](_0xf337ac)+0x1;let _0xcc7da8=_0xcb13dd+'《《《\x20Event\x20%1:\x20%2,\x20Page\x20%3\x20》》》\x0a%4\x0a',_0x3f0387=VisuMZ[_0x2ef6f1(0x61d)]['ExtractStrFromList'](_0xf337ac[_0x2ef6f1(0x27c)]);if(_0x3f0387[_0x2ef6f1(0x66e)]>0x0){if(_0xa07740[_0x2ef6f1(0x66e)]>0x0)_0xa07740+=_0xcb13dd+_0x2ef6f1(0x820);else{const _0x10210f=$dataMapInfos[_0x4b4adf][_0x2ef6f1(0x1de)];_0xa07740+=_0x28c51d+'〖〖〖\x20Map\x20%1:\x20%2\x20Script\x20〗〗〗\x0a\x0a'[_0x2ef6f1(0x680)](_0x4b4adf,_0x10210f||_0x2ef6f1(0x386))+_0x28c51d;}_0xa07740+=_0xcc7da8['format'](_0x36a4ca,_0x18a6e1,_0x26ceaa,_0x3f0387);}}}else{const _0xf355b1=_0x26884d['CoreEngine']['Settings'][_0x2ef6f1(0x3e5)];return this['_inputWindow'][_0x2ef6f1(0x806)]==='keyboard'?_0xf355b1[_0x2ef6f1(0x555)]||'Keyboard':_0xf355b1['Manual']||'Manual';}}return _0xa07740['length']>0x0&&(_0x2ef6f1(0x404)===_0x2ef6f1(0x404)?_0xa07740+=_0xcb13dd:this[_0x2ef6f1(0x35d)]>0x0&&(this[_0x2ef6f1(0x763)]['x']=this[_0x2ef6f1(0x7c3)](this[_0x2ef6f1(0x763)]['x'],this[_0x2ef6f1(0x3b2)]['x']),this[_0x2ef6f1(0x763)]['y']=this[_0x2ef6f1(0x7c3)](this['_anchor']['y'],this['_targetAnchor']['y']))),_0xa07740;},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x22a)]=function(){const _0x2fbb09=_0x420e26,_0x293d69=$dataTroops[_0x2fbb09(0x66e)]*0xa+Math[_0x2fbb09(0x2ef)](0xa);alert(_0x2fbb09(0x3f0)['format'](_0x293d69));const _0x327ef9=[];for(const _0x1f0bf7 of $dataTroops){if(_0x2fbb09(0x125)==='Jtdqu'){if(!_0x1f0bf7)continue;const _0x7fc3ef=_0x1f0bf7['id'];_0x327ef9[_0x7fc3ef]=VisuMZ[_0x2fbb09(0x61d)]['ExtractStrFromTroop'](_0x7fc3ef);}else return _0x15bbf4;}setTimeout(VisuMZ['CoreEngine'][_0x2fbb09(0x77d)][_0x2fbb09(0x38b)](this,_0x327ef9),_0x293d69);},VisuMZ['CoreEngine']['ExtractStrFromTroop']=function(_0x5c3a8b){const _0x245f6a=_0x420e26;if(!$dataTroops[_0x5c3a8b])return'';let _0xf25a07='█'['repeat'](0x46)+'\x0a\x0a',_0x377817='═'[_0x245f6a(0x4da)](0x46)+'\x0a\x0a',_0x2a4f11='';this[_0x245f6a(0x3bc)]=0x0;const _0x27abe8=$dataTroops[_0x5c3a8b];let _0x4d820c=_0x27abe8['pages'];for(const _0x5c7c31 of _0x4d820c){const _0x530b5f=_0x4d820c['indexOf'](_0x5c7c31)+0x1;let _0x85a623=_0x377817+_0x245f6a(0x5d0),_0x3363bf=VisuMZ[_0x245f6a(0x61d)][_0x245f6a(0x21e)](_0x5c7c31[_0x245f6a(0x27c)]);if(_0x3363bf['length']>0x0){if('MslDr'===_0x245f6a(0x789)){if(_0xb7ec96[_0x245f6a(0x737)]())return;_0x51979e['ConvertParams'](_0x1d4f89,_0x58d60e);const _0x1e1e60=_0x47bd00[_0x245f6a(0x5a5)];for(const _0x128133 of _0x1e1e60){const _0x2c9b6e=_0x2ef42b['value'](_0x128133);_0x1ba22b['setValue'](_0x128133,!_0x2c9b6e);}}else _0x2a4f11[_0x245f6a(0x66e)]>0x0?_0x245f6a(0x5b9)!==_0x245f6a(0x7c5)?_0x2a4f11+=_0x377817+_0x245f6a(0x820):(_0x1d3060=_0x36209e[_0x245f6a(0x4d3)](_0xcdcf26[_0x245f6a(0x829)]),_0x1d3296[_0x245f6a(0x242)](_0x44093c),this[_0x245f6a(0x844)][_0x4e93c6]=_0x2e0847[_0x245f6a(0x61d)][_0x245f6a(0x1cb)](_0x17de10),_0x20eb8b=this['_currentMap']):_0x2a4f11+=_0xf25a07+'〖〖〖\x20Troop\x20%1:\x20%2\x20Script\x20〗〗〗\x0a\x0a'['format'](_0x5c3a8b,_0x27abe8['name']||_0x245f6a(0x386))+_0xf25a07,_0x2a4f11+=_0x85a623[_0x245f6a(0x680)](_0x530b5f,_0x3363bf);}}return _0x2a4f11[_0x245f6a(0x66e)]>0x0&&(_0x2a4f11+=_0x377817),_0x2a4f11;},VisuMZ['CoreEngine'][_0x420e26(0x77d)]=function(_0x53a60a){const _0x5c7130=_0x420e26,_0x29c9ff=_0x5c7130(0x3af);_0x53a60a[_0x5c7130(0x184)](undefined)[_0x5c7130(0x184)]('')['remove'](null);const _0x5e1fdd=_0x53a60a[_0x5c7130(0x376)](_0x5c7130(0x820))[_0x5c7130(0x30b)]();VisuMZ[_0x5c7130(0x61d)]['ExportString'](_0x5e1fdd,_0x29c9ff,!![]),SceneManager['_scene'][_0x5c7130(0x61a)]=!![];},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x21e)]=function(_0x4459aa){const _0x166198=_0x420e26;let _0x15e29d='\x0a'+'─'[_0x166198(0x4da)](0x46)+'\x0a',_0x4e208a='\x0a'+'┄'[_0x166198(0x4da)](0x46)+'\x0a',_0x1892a9='';for(const _0xd2f38 of _0x4459aa){if(_0x166198(0x280)!==_0x166198(0x280))_0x2c6c70['VisuMZ_2_BattleSystemFTB']&&(this[_0x166198(0x205)]=_0x166198(0x70a));else{if(!_0xd2f38)continue;if(_0xd2f38[_0x166198(0x2ce)]===0x65)_0x1892a9+=_0x15e29d+'\x0a',_0x1892a9+=_0x166198(0x460),_0xd2f38[_0x166198(0x370)][0x4]!==''&&_0xd2f38[_0x166198(0x370)][0x4]!==undefined&&(_0x1892a9+=_0x166198(0x585)[_0x166198(0x680)](_0xd2f38[_0x166198(0x370)][0x4]));else{if(_0xd2f38[_0x166198(0x2ce)]===0x191){if('OwhwR'===_0x166198(0x243))_0x1892a9+=_0x166198(0x82c)[_0x166198(0x680)](_0xd2f38['parameters'][0x0]);else return 0.5*_0x5bbb8c[_0x166198(0x571)](0x2,0xa*_0x2cb4f5);}else{if(_0xd2f38['code']===0x192)_0x1892a9+=_0x15e29d,_0x1892a9+='%1〘Choice\x20%2〙\x20%3%1'[_0x166198(0x680)](_0x4e208a,_0xd2f38[_0x166198(0x370)][0x0]+0x1,_0xd2f38[_0x166198(0x370)][0x1]);else{if(_0xd2f38[_0x166198(0x2ce)]===0x193)_0x166198(0x534)!==_0x166198(0x55b)?(_0x1892a9+=_0x15e29d,_0x1892a9+=_0x166198(0x578)[_0x166198(0x680)](_0x4e208a)):_0x448d58+=_0x166198(0x14d);else{if(_0xd2f38[_0x166198(0x2ce)]===0x194){if('UfrGS'===_0x166198(0x1e1))_0x1892a9+=_0x15e29d,_0x1892a9+='%1〘End\x20Choice\x20Selection〙%1'[_0x166198(0x680)](_0x4e208a);else{if(_0x474460['length']>0x0)_0x460cc9+=_0x506aaa+_0x166198(0x820);else{const _0x2202d4=_0x2dd7c0[_0x2735c6]['name'];_0x34aa66+=_0xefaffd+_0x166198(0x5e1)['format'](_0x15d708,_0x2202d4||_0x166198(0x386))+_0x34d8ae;}_0x5c1a1f+=_0x382764[_0x166198(0x680)](_0x545ee4,_0x837d0d,_0x4f5388,_0x68a84c);}}else{if(_0xd2f38[_0x166198(0x2ce)]===0x69)_0x1892a9+=_0x15e29d+'\x0a',_0x1892a9+='〘Scrolling\x20Text〙\x0a';else{if(_0xd2f38[_0x166198(0x2ce)]===0x6c)_0x1892a9+=_0x15e29d+'\x0a',_0x1892a9+='》Comment《\x0a%1\x0a'[_0x166198(0x680)](_0xd2f38[_0x166198(0x370)][0x0]);else{if(_0xd2f38['code']===0x198)_0x1892a9+=_0x166198(0x82c)[_0x166198(0x680)](_0xd2f38[_0x166198(0x370)][0x0]);else{if(_0xd2f38[_0x166198(0x2ce)]===0x75){const _0x15ca9b=$dataCommonEvents[_0xd2f38[_0x166198(0x370)][0x0]];if(_0x15ca9b&&this[_0x166198(0x3bc)]<=0xa){if('AuLEk'===_0x166198(0x150))return _0x3548e8[_0x166198(0x61d)][_0x166198(0x12e)]['UI'][_0x166198(0x2a4)];else{this[_0x166198(0x3bc)]++;let _0x417897=VisuMZ['CoreEngine'][_0x166198(0x21e)](_0x15ca9b[_0x166198(0x27c)]);_0x417897['length']>0x0&&(_0x1892a9+=_0x15e29d,_0x1892a9+=_0x4e208a,_0x1892a9+=_0x166198(0x4df)[_0x166198(0x680)](_0x15ca9b['id'],_0x15ca9b[_0x166198(0x1de)]),_0x1892a9+=_0x4e208a,_0x1892a9+=_0x417897,_0x1892a9+=_0x4e208a,_0x1892a9+='〘Common\x20Event\x20%1:\x20%2〙\x20End'[_0x166198(0x680)](_0x15ca9b['id'],_0x15ca9b[_0x166198(0x1de)]),_0x1892a9+=_0x4e208a),this[_0x166198(0x3bc)]--;}}}}}}}}}}}}}return _0x1892a9[_0x166198(0x66e)]>0x0&&(_0x1892a9+=_0x15e29d),_0x1892a9;},PluginManager['registerCommand'](pluginData['name'],'OpenURL',_0x4ab5d6=>{const _0x5e66ed=_0x420e26;VisuMZ['ConvertParams'](_0x4ab5d6,_0x4ab5d6);const _0x189bea=_0x4ab5d6[_0x5e66ed(0x34f)];VisuMZ[_0x5e66ed(0x80f)](_0x189bea);}),PluginManager[_0x420e26(0x1d9)](pluginData[_0x420e26(0x1de)],_0x420e26(0x420),_0x26f488=>{const _0x3a75ac=_0x420e26;VisuMZ[_0x3a75ac(0x314)](_0x26f488,_0x26f488);const _0x3e999e=_0x26f488[_0x3a75ac(0x4d9)]||0x0;$gameParty[_0x3a75ac(0x3ce)](_0x3e999e);}),PluginManager[_0x420e26(0x1d9)](pluginData[_0x420e26(0x1de)],_0x420e26(0x775),_0x5007bd=>{const _0x41ec67=_0x420e26;VisuMZ[_0x41ec67(0x314)](_0x5007bd,_0x5007bd);const _0x2cc8e8=_0x5007bd[_0x41ec67(0x177)]||0x1,_0x23ab48=_0x5007bd['easingType']||'Linear',_0x5e61d6=$gameScreen[_0x41ec67(0x6a2)](_0x2cc8e8);_0x5e61d6&&_0x5e61d6[_0x41ec67(0x35b)](_0x23ab48);}),PluginManager[_0x420e26(0x1d9)](pluginData[_0x420e26(0x1de)],'PictureEraseAll',_0x3c002b=>{const _0x36fdc8=_0x420e26;for(let _0x361e53=0x1;_0x361e53<=0x64;_0x361e53++){if(_0x36fdc8(0x2c7)==='dITTQ')return this[_0x36fdc8(0x769)][_0x36fdc8(0x673)]();else $gameScreen[_0x36fdc8(0x307)](_0x361e53);}}),PluginManager[_0x420e26(0x1d9)](pluginData['name'],_0x420e26(0x250),_0x205d40=>{const _0x39a008=_0x420e26;VisuMZ[_0x39a008(0x314)](_0x205d40,_0x205d40);const _0x112f0a=Math[_0x39a008(0x623)](_0x205d40[_0x39a008(0x32b)],_0x205d40[_0x39a008(0x38c)]),_0x4a0c3b=Math[_0x39a008(0x609)](_0x205d40[_0x39a008(0x32b)],_0x205d40['EndingID']);for(let _0x2317fd=_0x112f0a;_0x2317fd<=_0x4a0c3b;_0x2317fd++){if('gvAMt'==='gvAMt')$gameScreen[_0x39a008(0x307)](_0x2317fd);else{if(_0x237175)this['onKeyDownKeysF6F7'](_0x2d2970);_0x10bcb6[_0x39a008(0x61d)][_0x39a008(0x82e)]['call'](this,_0x34eb16);}}}),PluginManager[_0x420e26(0x1d9)](pluginData['name'],'PictureShowIcon',_0x31e4ea=>{const _0x400f57=_0x420e26;VisuMZ['ConvertParams'](_0x31e4ea,_0x31e4ea);const _0x5a8234=Math[_0x400f57(0x3c7)](_0x31e4ea[_0x400f57(0x117)])[_0x400f57(0x1d0)](0x1,0x64),_0x31ce82=_0x31e4ea['Settings'],_0x2c10ff=_0x31ce82[_0x400f57(0x16d)][_0x400f57(0x1d0)](0x0,0x1),_0x2afd6e=Math[_0x400f57(0x3c7)](_0x31ce82[_0x400f57(0x684)]||0x0),_0x2a5ab1=Math['round'](_0x31ce82[_0x400f57(0x455)]||0x0),_0x460c72=Math[_0x400f57(0x3c7)](_0x31ce82['ScaleX']||0x0),_0xe887e5=Math[_0x400f57(0x3c7)](_0x31ce82['ScaleY']||0x0),_0x1c28db=Math[_0x400f57(0x3c7)](_0x31ce82[_0x400f57(0x2aa)])[_0x400f57(0x1d0)](0x0,0xff),_0x170075=_0x31ce82[_0x400f57(0x32a)],_0x8731c3=_0x400f57(0x54f),_0x49bac4=_0x31e4ea[_0x400f57(0x4dd)]?'Smooth':_0x400f57(0x7aa),_0x284761=_0x8731c3[_0x400f57(0x680)](_0x31e4ea[_0x400f57(0x444)],_0x49bac4);$gameScreen[_0x400f57(0x510)](_0x5a8234,_0x284761,_0x2c10ff,_0x2afd6e,_0x2a5ab1,_0x460c72,_0xe887e5,_0x1c28db,_0x170075);}),PluginManager[_0x420e26(0x1d9)](pluginData[_0x420e26(0x1de)],_0x420e26(0x7e0),_0x55f770=>{const _0x1bbfbf=_0x420e26;VisuMZ[_0x1bbfbf(0x314)](_0x55f770,_0x55f770);const _0x48dabf=_0x55f770[_0x1bbfbf(0x1d3)]||_0x1bbfbf(0x2a6),_0x4d72a7=_0x55f770[_0x1bbfbf(0x310)][_0x1bbfbf(0x1d0)](0x1,0x9),_0x326f25=_0x55f770['Speed'][_0x1bbfbf(0x1d0)](0x1,0x9),_0x403f6a=_0x55f770[_0x1bbfbf(0x848)]||0x1,_0x4e7df0=_0x55f770[_0x1bbfbf(0x5bd)];$gameScreen[_0x1bbfbf(0x181)](_0x48dabf),$gameScreen[_0x1bbfbf(0x1e9)](_0x4d72a7,_0x326f25,_0x403f6a);if(_0x4e7df0){const _0x1c50cf=$gameTemp[_0x1bbfbf(0x2d2)]();if(_0x1c50cf)_0x1c50cf['wait'](_0x403f6a);}}),PluginManager[_0x420e26(0x1d9)](pluginData[_0x420e26(0x1de)],'SystemSetFontSize',_0x5230c4=>{const _0x4e6f4b=_0x420e26;VisuMZ[_0x4e6f4b(0x314)](_0x5230c4,_0x5230c4);const _0x36ebda=_0x5230c4[_0x4e6f4b(0x505)]||0x1;$gameSystem[_0x4e6f4b(0x7f1)](_0x36ebda);}),PluginManager['registerCommand'](pluginData[_0x420e26(0x1de)],_0x420e26(0x289),_0x44dcea=>{const _0x5e2294=_0x420e26;if($gameParty['inBattle']())return;VisuMZ[_0x5e2294(0x314)](_0x44dcea,_0x44dcea);const _0x57c74f=_0x44dcea[_0x5e2294(0x505)];if(_0x57c74f[_0x5e2294(0x295)](/Front/i))$gameSystem[_0x5e2294(0x5f0)](![]);else{if(_0x57c74f[_0x5e2294(0x295)](/Side/i))$gameSystem[_0x5e2294(0x5f0)](!![]);else{if(_0x5e2294(0x683)===_0x5e2294(0x254)){if(_0x54f355[_0x5e2294(0x64c)](_0x5e2294(0x3db))){var _0x2bbf32=_0x1da873(_0x5e2294(0x293))['Window'][_0x5e2294(0x259)]();_0x4f41ba[_0x5e2294(0x12f)]();if(_0x40b1ac)_0x3b1655(_0x2bbf32[_0x5e2294(0x2e7)][_0x5e2294(0x38b)](_0x2bbf32),0x190);}}else $gameSystem['setSideView'](!$gameSystem[_0x5e2294(0x17a)]());}}}),PluginManager[_0x420e26(0x1d9)](pluginData[_0x420e26(0x1de)],_0x420e26(0x73a),_0x4ad622=>{const _0x8ec603=_0x420e26;if($gameParty[_0x8ec603(0x737)]())return;VisuMZ[_0x8ec603(0x314)](_0x4ad622,_0x4ad622);const _0x3ae02d=[_0x8ec603(0x2e4),'bgs','me','se'];for(const _0x275b65 of _0x3ae02d){if(_0x8ec603(0x151)===_0x8ec603(0x151)){const _0x169650=_0x4ad622[_0x275b65],_0x15b7d3=_0x8ec603(0x870)[_0x8ec603(0x680)](_0x275b65);for(const _0xa0f511 of _0x169650){AudioManager['createBuffer'](_0x15b7d3,_0xa0f511);}}else return _0x340fb1[_0x8ec603(0x61d)][_0x8ec603(0x12e)]['Window'][_0x8ec603(0x305)];}}),PluginManager[_0x420e26(0x1d9)](pluginData[_0x420e26(0x1de)],_0x420e26(0x1b1),_0x24c39a=>{const _0x4edf12=_0x420e26;if($gameParty[_0x4edf12(0x737)]())return;VisuMZ[_0x4edf12(0x314)](_0x24c39a,_0x24c39a);const _0x3aeed0=[_0x4edf12(0x62a),_0x4edf12(0x1c1),_0x4edf12(0x657),'characters',_0x4edf12(0x241),_0x4edf12(0x765),'parallaxes',_0x4edf12(0x840),_0x4edf12(0x5d9),_0x4edf12(0x773),_0x4edf12(0x5af),'tilesets',_0x4edf12(0x38e),_0x4edf12(0x7e5)];for(const _0x16643a of _0x3aeed0){if(_0x4edf12(0x70b)!==_0x4edf12(0x70b))return 0x0;else{const _0x41d50b=_0x24c39a[_0x16643a],_0x17cf8f=_0x4edf12(0x858)[_0x4edf12(0x680)](_0x16643a);for(const _0x30d6b2 of _0x41d50b){if('zRxZg'===_0x4edf12(0x7a1))ImageManager[_0x4edf12(0x7ec)](_0x17cf8f,_0x30d6b2);else{if(this[_0x4edf12(0x806)]==='keyboard')return;if(_0x55792c[_0x4edf12(0x77e)]())return;_0x75a99b[_0x4edf12(0x61d)][_0x4edf12(0x787)][_0x4edf12(0x21f)](this),this[_0x4edf12(0x46c)](_0x4edf12(0x854));}}}}}),PluginManager['registerCommand'](pluginData[_0x420e26(0x1de)],'SwitchRandomizeOne',_0x3587e=>{const _0x1b5aae=_0x420e26;if($gameParty[_0x1b5aae(0x737)]())return;VisuMZ[_0x1b5aae(0x314)](_0x3587e,_0x3587e);const _0x37dadd=_0x3587e[_0x1b5aae(0x5a5)],_0x68d7b7=(_0x3587e[_0x1b5aae(0x1ff)]||0x0)/0x64;for(const _0x2deaf9 of _0x37dadd){if(_0x1b5aae(0x28c)==='HVsRN'){const _0x16a4e9=Math['random']()<=_0x68d7b7;$gameSwitches['setValue'](_0x2deaf9,_0x16a4e9);}else this[_0x1b5aae(0x806)]=this['defaultInputMode'](),_0x1651d9[_0x1b5aae(0x61d)][_0x1b5aae(0x7fd)][_0x1b5aae(0x21f)](this,_0x1253d6),this[_0x1b5aae(0x806)]==='default'?this[_0x1b5aae(0x637)](0x0):(_0x3a53a9[_0x1b5aae(0x782)](),this[_0x1b5aae(0x70e)]());}}),PluginManager[_0x420e26(0x1d9)](pluginData[_0x420e26(0x1de)],'SwitchRandomizeRange',_0x316276=>{const _0x596e19=_0x420e26;if($gameParty[_0x596e19(0x737)]())return;VisuMZ[_0x596e19(0x314)](_0x316276,_0x316276);const _0x3812b8=Math[_0x596e19(0x623)](_0x316276['StartID'],_0x316276[_0x596e19(0x38c)]),_0x3850dd=Math[_0x596e19(0x609)](_0x316276[_0x596e19(0x32b)],_0x316276['EndingID']),_0x2838af=(_0x316276['Chance']||0x0)/0x64;for(let _0xd2fa01=_0x3812b8;_0xd2fa01<=_0x3850dd;_0xd2fa01++){if('UILqE'===_0x596e19(0x48a)){const _0x5e698b=Math[_0x596e19(0x2a6)]()<=_0x2838af;$gameSwitches[_0x596e19(0x3f7)](_0xd2fa01,_0x5e698b);}else return _0x198669[_0x596e19(0x1ad)]();}}),PluginManager[_0x420e26(0x1d9)](pluginData[_0x420e26(0x1de)],_0x420e26(0x30d),_0x5f5756=>{const _0x1c90a9=_0x420e26;if($gameParty[_0x1c90a9(0x737)]())return;VisuMZ[_0x1c90a9(0x314)](_0x5f5756,_0x5f5756);const _0x5743b4=_0x5f5756[_0x1c90a9(0x5a5)];for(const _0xa20a31 of _0x5743b4){if('ckbHj'!==_0x1c90a9(0x1a7)){const _0xc403d9=$gameSwitches[_0x1c90a9(0x4d9)](_0xa20a31);$gameSwitches[_0x1c90a9(0x3f7)](_0xa20a31,!_0xc403d9);}else return _0x358f15[_0x1c90a9(0x713)]-this[_0x1c90a9(0x249)]();}}),PluginManager['registerCommand'](pluginData['name'],_0x420e26(0x27b),_0x53956b=>{const _0x4e8e39=_0x420e26;if($gameParty[_0x4e8e39(0x737)]())return;VisuMZ[_0x4e8e39(0x314)](_0x53956b,_0x53956b);const _0x1adecd=Math['min'](_0x53956b['StartID'],_0x53956b[_0x4e8e39(0x38c)]),_0x3d9c9d=Math[_0x4e8e39(0x609)](_0x53956b['StartID'],_0x53956b[_0x4e8e39(0x38c)]);for(let _0x1a042c=_0x1adecd;_0x1a042c<=_0x3d9c9d;_0x1a042c++){const _0x14158c=$gameSwitches[_0x4e8e39(0x4d9)](_0x1a042c);$gameSwitches[_0x4e8e39(0x3f7)](_0x1a042c,!_0x14158c);}}),PluginManager['registerCommand'](pluginData[_0x420e26(0x1de)],_0x420e26(0x11c),_0x3bda76=>{const _0x20843d=_0x420e26;if($gameParty['inBattle']())return;VisuMZ[_0x20843d(0x314)](_0x3bda76,_0x3bda76);const _0x4df9c4=_0x3bda76[_0x20843d(0x505)][_0x20843d(0x741)]()[_0x20843d(0x30b)](),_0x123450=VisuMZ[_0x20843d(0x61d)][_0x20843d(0x375)](_0x4df9c4);$gameSystem[_0x20843d(0x466)](_0x123450);}),VisuMZ[_0x420e26(0x61d)]['CreateBattleSystemID']=function(_0xaaa74d){const _0x4d5ccd=_0x420e26;_0xaaa74d=_0xaaa74d||'DATABASE',_0xaaa74d=String(_0xaaa74d)['toUpperCase']()['trim']();switch(_0xaaa74d){case _0x4d5ccd(0x508):return 0x0;case _0x4d5ccd(0x819):Imported['VisuMZ_1_OptionsCore']&&(ConfigManager['atbActive']=!![]);return 0x1;case _0x4d5ccd(0x3c1):if(Imported['VisuMZ_1_OptionsCore']){if(_0x4d5ccd(0x395)!=='Uwwjn'){const _0x57e973=this['_clientArea'][_0x4d5ccd(0x2cb)]['apply'](new _0x2a92dd(0x0,0x0)),_0x284ae6=this['_clientArea'][_0x4d5ccd(0x485)];_0x284ae6['x']=_0x57e973['x']+this[_0x4d5ccd(0x5b4)]['x'],_0x284ae6['y']=_0x57e973['y']+this[_0x4d5ccd(0x5b4)]['y'],_0x284ae6[_0x4d5ccd(0x351)]=_0x5e967e[_0x4d5ccd(0x85e)](this[_0x4d5ccd(0x6c3)]*this[_0x4d5ccd(0x633)]['x']),_0x284ae6[_0x4d5ccd(0x17f)]=_0x2f4a44[_0x4d5ccd(0x85e)](this[_0x4d5ccd(0x694)]*this[_0x4d5ccd(0x633)]['y']);}else ConfigManager[_0x4d5ccd(0x645)]=![];}return 0x2;case _0x4d5ccd(0x234):if(Imported[_0x4d5ccd(0x11d)])return _0x4d5ccd(0x234);break;case _0x4d5ccd(0x2bb):if(Imported['VisuMZ_2_BattleSystemSTB'])return _0x4d5ccd(0x392)!==_0x4d5ccd(0x392)?0x0:_0x4d5ccd(0x2bb);break;case _0x4d5ccd(0x692):if(Imported[_0x4d5ccd(0x176)]){if(_0x4d5ccd(0x2f4)!=='SADHr')this[_0x4d5ccd(0x114)](_0x62e5a4['isTriggered'](_0x4d5ccd(0x627)));else return _0x4d5ccd(0x692);}break;case'FTB':if(Imported['VisuMZ_2_BattleSystemFTB'])return'FTB';break;case _0x4d5ccd(0x10b):if(Imported[_0x4d5ccd(0x599)]){if('RyXrr'!==_0x4d5ccd(0x4a4))_0x86c758[_0x4d5ccd(0x6a9)][_0x4d5ccd(0x46b)][_0x4d5ccd(0x21f)](this),this['setCoreEngineUpdateWindowBg']();else return'OTB';}break;case _0x4d5ccd(0x4d0):if(Imported[_0x4d5ccd(0x6d3)])return _0x4d5ccd(0x4d0);break;case _0x4d5ccd(0x4e7):if(Imported[_0x4d5ccd(0x55f)])return _0x4d5ccd(0x4e7);break;}return $dataSystem[_0x4d5ccd(0x703)];},PluginManager[_0x420e26(0x1d9)](pluginData[_0x420e26(0x1de)],_0x420e26(0x2a7),_0x281e65=>{const _0x155f8b=_0x420e26;VisuMZ[_0x155f8b(0x314)](_0x281e65,_0x281e65);const _0x14b007=_0x281e65['option']||0x1;$gameSystem[_0x155f8b(0x346)](_0x14b007);}),VisuMZ['CoreEngine'][_0x420e26(0x44e)]=Scene_Boot['prototype'][_0x420e26(0x731)],Scene_Boot[_0x420e26(0x6a9)][_0x420e26(0x731)]=function(){const _0x57e631=_0x420e26;VisuMZ[_0x57e631(0x61d)]['Scene_Boot_onDatabaseLoaded'][_0x57e631(0x21f)](this),this[_0x57e631(0x484)](),this[_0x57e631(0x140)](),this[_0x57e631(0x48f)](),this['process_VisuMZ_CoreEngine_Functions'](),this['process_VisuMZ_CoreEngine_CustomParameters'](),VisuMZ[_0x57e631(0x86b)]();},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x68d)]={},Scene_Boot[_0x420e26(0x6a9)]['process_VisuMZ_CoreEngine_RegExp']=function(){const _0x100926=_0x420e26,_0x20e0ac=[_0x100926(0x864),_0x100926(0x794),'ATK',_0x100926(0x67f),_0x100926(0x606),_0x100926(0x54e),'AGI','LUK'],_0x9e252c=['HIT',_0x100926(0x431),_0x100926(0x267),_0x100926(0x2b3),_0x100926(0x6d4),_0x100926(0x59f),'CNT','HRG',_0x100926(0x6ea),'TRG'],_0x4fa75c=[_0x100926(0x321),_0x100926(0x419),_0x100926(0x464),'PHA',_0x100926(0x5b6),_0x100926(0x141),_0x100926(0x6db),_0x100926(0x70f),_0x100926(0x35f),_0x100926(0x353)],_0x38f8e5=[_0x20e0ac,_0x9e252c,_0x4fa75c],_0x143add=['Plus',_0x100926(0x18e),_0x100926(0x5bf),_0x100926(0x123),_0x100926(0x619),'Rate1',_0x100926(0x5cc),'Flat','Flat1',_0x100926(0x669)];for(const _0x237ae7 of _0x38f8e5){let _0x121ad7='';if(_0x237ae7===_0x20e0ac)_0x121ad7=_0x100926(0x646);if(_0x237ae7===_0x9e252c)_0x121ad7=_0x100926(0x49b);if(_0x237ae7===_0x4fa75c)_0x121ad7=_0x100926(0x45c);for(const _0x1c1066 of _0x143add){if('UAZsB'!=='UAZsB'){if(_0x14d1ba[_0x100926(0x737)]())return;_0x558f53[_0x100926(0x314)](_0x28097e,_0x3a3fd5);const _0x2537ad=[_0x100926(0x62a),_0x100926(0x1c1),'battlebacks2','characters',_0x100926(0x241),_0x100926(0x765),_0x100926(0x62e),_0x100926(0x840),_0x100926(0x5d9),_0x100926(0x773),_0x100926(0x5af),_0x100926(0x23e),_0x100926(0x38e),'titles2'];for(const _0x13777e of _0x2537ad){const _0x30c80e=_0x3a36af[_0x13777e],_0x1da031=_0x100926(0x858)[_0x100926(0x680)](_0x13777e);for(const _0x49463a of _0x30c80e){_0x2b31b9[_0x100926(0x7ec)](_0x1da031,_0x49463a);}}}else{let _0xa310f2=_0x100926(0x31d)[_0x100926(0x680)](_0x121ad7,_0x1c1066);VisuMZ['CoreEngine']['RegExp'][_0xa310f2]=[],VisuMZ[_0x100926(0x61d)][_0x100926(0x68d)][_0xa310f2+'JS']=[];let _0xe1f5fc=_0x100926(0x745);if([_0x100926(0x61e),_0x100926(0x5b0)][_0x100926(0x52e)](_0x1c1066))_0x100926(0x3a7)===_0x100926(0x3a7)?_0xe1f5fc+=_0x100926(0x14d):_0xceaea4[_0x100926(0x613)]=_0x4ccb01['SCALE_MODES'][_0x100926(0x80d)];else{if([_0x100926(0x18e),_0x100926(0x142)][_0x100926(0x52e)](_0x1c1066))_0xe1f5fc+=_0x100926(0x6dd);else{if([_0x100926(0x5bf),_0x100926(0x669)]['includes'](_0x1c1066))_0xe1f5fc+=_0x100926(0x4fe);else{if(_0x1c1066===_0x100926(0x123))_0xe1f5fc+='(\x5cd+)>';else{if(_0x1c1066==='Rate1')_0x100926(0x437)==='xECtB'?_0xe1f5fc+=_0x100926(0x5cb):_0x4ede72[_0x100926(0x61d)][_0x100926(0x853)][_0x100926(0x21f)](this);else{if(_0x1c1066===_0x100926(0x5cc)){if(_0x100926(0x798)!==_0x100926(0x2fd))_0xe1f5fc+='(\x5cd+\x5c.?\x5cd+)>';else return _0x201f9d[_0x100926(0x61d)][_0x100926(0x14f)][_0x100926(0x21f)](this);}}}}}}for(const _0x620181 of _0x237ae7){let _0x2a4561=_0x1c1066['replace'](/[\d+]/g,'')[_0x100926(0x741)]();const _0x3a3278=_0xe1f5fc[_0x100926(0x680)](_0x620181,_0x2a4561);VisuMZ[_0x100926(0x61d)][_0x100926(0x68d)][_0xa310f2][_0x100926(0x5e8)](new RegExp(_0x3a3278,'i'));const _0x55df1c=_0x100926(0x2f2)[_0x100926(0x680)](_0x620181,_0x2a4561);VisuMZ[_0x100926(0x61d)][_0x100926(0x68d)][_0xa310f2+'JS'][_0x100926(0x5e8)](new RegExp(_0x55df1c,'i'));}}}}},Scene_Boot[_0x420e26(0x6a9)][_0x420e26(0x140)]=function(){const _0x1d3f4b=_0x420e26;if(VisuMZ[_0x1d3f4b(0x86b)])return;},Scene_Boot[_0x420e26(0x6a9)]['process_VisuMZ_CoreEngine_Settings']=function(){const _0x229f30=_0x420e26;VisuMZ[_0x229f30(0x61d)][_0x229f30(0x12e)]['QoL']['OpenConsole']&&('hFOqZ'==='hFOqZ'?VisuMZ[_0x229f30(0x26d)](!![]):_0xf10c52[_0x229f30(0x307)](_0x33712a));VisuMZ[_0x229f30(0x61d)][_0x229f30(0x12e)][_0x229f30(0x5ed)][_0x229f30(0x306)]&&(Input[_0x229f30(0x292)][0x23]='end',Input[_0x229f30(0x292)][0x24]=_0x229f30(0x4b9));if(VisuMZ[_0x229f30(0x61d)]['Settings']['ButtonAssist']){const _0x2086e7=VisuMZ['CoreEngine'][_0x229f30(0x12e)]['ButtonAssist'];_0x2086e7[_0x229f30(0x868)]=_0x2086e7[_0x229f30(0x868)]||_0x229f30(0x272),_0x2086e7[_0x229f30(0x290)]=_0x2086e7[_0x229f30(0x290)]||_0x229f30(0x65c);}VisuMZ['CoreEngine'][_0x229f30(0x12e)][_0x229f30(0x3e5)][_0x229f30(0x3aa)]&&('SFQlo'!=='SFQlo'?_0x475665=_0x4458e7[_0x229f30(0x3c5)](_0x5c6004):(Input[_0x229f30(0x292)][0x57]='up',Input['keyMapper'][0x41]=_0x229f30(0x45e),Input[_0x229f30(0x292)][0x53]=_0x229f30(0x6c5),Input['keyMapper'][0x44]='right',Input[_0x229f30(0x292)][0x45]=_0x229f30(0x4f1))),VisuMZ[_0x229f30(0x61d)][_0x229f30(0x12e)][_0x229f30(0x3e5)][_0x229f30(0x7a5)]&&(_0x229f30(0x48b)!==_0x229f30(0x6aa)?Input[_0x229f30(0x292)][0x52]=_0x229f30(0x229):this[_0x229f30(0x4a2)]=_0x4f15a4);},Scene_Boot[_0x420e26(0x6a9)][_0x420e26(0x77f)]=function(){this['process_VisuMZ_CoreEngine_jsQuickFunctions']();},Scene_Boot[_0x420e26(0x6a9)][_0x420e26(0x77c)]=function(){const _0x2e7c5d=_0x420e26,_0x372a35=VisuMZ['CoreEngine'][_0x2e7c5d(0x12e)][_0x2e7c5d(0x4b8)];for(const _0x40ac9e of _0x372a35){if('wxTuf'!==_0x2e7c5d(0x433))_0x3a5bd8[_0x2e7c5d(0x2a8)](),_0x2a7312['goto'](_0x251e5e);else{const _0x3f9503=_0x40ac9e[_0x2e7c5d(0x5eb)][_0x2e7c5d(0x53c)](/[ ]/g,''),_0x33ab0d=_0x40ac9e[_0x2e7c5d(0x45f)];VisuMZ['CoreEngine']['createJsQuickFunction'](_0x3f9503,_0x33ab0d);}}},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x2d5)]=function(_0x542f29,_0x111111){const _0x3a97a4=_0x420e26;if(!!window[_0x542f29]){if('xaglt'===_0x3a97a4(0x4cd))_0x3ce0a0[_0x3a97a4(0x61d)][_0x3a97a4(0x548)]['call'](this),this['createButtonAssistWindow'](),this['_windowLayer']['x']=_0x2c9c6d[_0x3a97a4(0x3c7)](this[_0x3a97a4(0x1d1)]['x']),this[_0x3a97a4(0x1d1)]['y']=_0x4e2984[_0x3a97a4(0x3c7)](this['_windowLayer']['y']);else{if($gameTemp['isPlaytest']())console['log'](_0x3a97a4(0x677)['format'](_0x542f29));}}const _0x123795=_0x3a97a4(0x5c1)[_0x3a97a4(0x680)](_0x542f29,_0x111111);window[_0x542f29]=new Function(_0x123795);},Scene_Boot[_0x420e26(0x6a9)][_0x420e26(0x5e4)]=function(){const _0x134452=_0x420e26,_0x52303=VisuMZ[_0x134452(0x61d)][_0x134452(0x12e)][_0x134452(0x7cd)];if(!_0x52303)return;for(const _0x2c0445 of _0x52303){if(!_0x2c0445)continue;VisuMZ[_0x134452(0x61d)][_0x134452(0x53f)](_0x2c0445);}},VisuMZ['CoreEngine'][_0x420e26(0x281)]={},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x778)]={},VisuMZ['CoreEngine'][_0x420e26(0x28f)]={},VisuMZ['CoreEngine'][_0x420e26(0x33d)]={},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x53f)]=function(_0x145e98){const _0x8b57d6=_0x420e26,_0x47f7ac=_0x145e98['Abbreviation'],_0x24370d=_0x145e98['ParamName'],_0x40dd9f=_0x145e98[_0x8b57d6(0x73b)],_0x3232f8=_0x145e98['Type'],_0x2e9614=new Function(_0x145e98['ValueJS']);VisuMZ[_0x8b57d6(0x61d)][_0x8b57d6(0x281)][_0x47f7ac['toUpperCase']()['trim']()]=_0x24370d,VisuMZ[_0x8b57d6(0x61d)][_0x8b57d6(0x778)][_0x47f7ac[_0x8b57d6(0x741)]()[_0x8b57d6(0x30b)]()]=_0x40dd9f,VisuMZ[_0x8b57d6(0x61d)][_0x8b57d6(0x28f)][_0x47f7ac[_0x8b57d6(0x741)]()[_0x8b57d6(0x30b)]()]=_0x3232f8,VisuMZ[_0x8b57d6(0x61d)]['CustomParamAbb'][_0x47f7ac[_0x8b57d6(0x741)]()['trim']()]=_0x47f7ac,Object[_0x8b57d6(0x512)](Game_BattlerBase['prototype'],_0x47f7ac,{'get'(){const _0x153fcd=_0x8b57d6;if(_0x153fcd(0x28b)!=='ykkgb'){const _0x35a0a8=_0x2e9614[_0x153fcd(0x21f)](this);return _0x3232f8===_0x153fcd(0x2fc)?Math[_0x153fcd(0x3c7)](_0x35a0a8):_0x35a0a8;}else{_0x5bbc00['CoreEngine']['ParseActorNotetags'][_0x153fcd(0x21f)](this,_0x12232a);const _0x1ce5df=_0x48c9b8[_0x153fcd(0x5a4)];if(_0x1ce5df[_0x153fcd(0x295)](/<MAX LEVEL:[ ](\d+)>/i)){_0x27b337[_0x153fcd(0x60b)]=_0x4656c9(_0xf33110['$1']);if(_0x1e254c[_0x153fcd(0x60b)]===0x0)_0x41a2df['maxLevel']=_0x125bf9[_0x153fcd(0x2a5)];}_0x1ce5df[_0x153fcd(0x295)](/<INITIAL LEVEL:[ ](\d+)>/i)&&(_0x56a65d[_0x153fcd(0x56a)]=_0x1cad31[_0x153fcd(0x623)](_0x428c50(_0x1831c2['$1']),_0x1cd3d7['maxLevel']));}}});},VisuMZ[_0x420e26(0x86b)]=function(){const _0x6e8579=_0x420e26;for(const _0xf39b75 of $dataActors){if(_0xf39b75)VisuMZ[_0x6e8579(0x579)](_0xf39b75);}for(const _0x965707 of $dataClasses){if(_0x965707)VisuMZ['ParseClassNotetags'](_0x965707);}for(const _0x22c287 of $dataSkills){if(_0x22c287)VisuMZ[_0x6e8579(0x52d)](_0x22c287);}for(const _0x2f14ad of $dataItems){if(_0x6e8579(0x50f)!==_0x6e8579(0x7b7)){if(_0x2f14ad)VisuMZ[_0x6e8579(0x6e1)](_0x2f14ad);}else _0x4bf974['CoreEngine'][_0x6e8579(0x1cc)]['call'](this,_0x5d3802,_0x199eac,_0x199990,_0x315c4e,_0x2f53e0,_0x1828df,_0x4f73c4,_0x37ea4c,_0x90ed43),this[_0x6e8579(0x434)]();}for(const _0x38203d of $dataWeapons){if(_0x38203d)VisuMZ[_0x6e8579(0x5de)](_0x38203d);}for(const _0x6bd789 of $dataArmors){if(_0x6bd789)VisuMZ[_0x6e8579(0x643)](_0x6bd789);}for(const _0x514275 of $dataEnemies){if(_0x514275)VisuMZ[_0x6e8579(0x212)](_0x514275);}for(const _0x4c4877 of $dataStates){if(_0x4c4877)VisuMZ[_0x6e8579(0x49e)](_0x4c4877);}for(const _0x31ffb1 of $dataTilesets){if(_0x31ffb1)VisuMZ[_0x6e8579(0x830)](_0x31ffb1);}},VisuMZ[_0x420e26(0x579)]=function(_0x3eb8d9){},VisuMZ[_0x420e26(0x1a6)]=function(_0x7e2896){},VisuMZ[_0x420e26(0x52d)]=function(_0x500b23){},VisuMZ['ParseItemNotetags']=function(_0x28c31c){},VisuMZ[_0x420e26(0x5de)]=function(_0x4d7019){},VisuMZ[_0x420e26(0x643)]=function(_0x466220){},VisuMZ['ParseEnemyNotetags']=function(_0x2f86fb){},VisuMZ[_0x420e26(0x49e)]=function(_0x22fe55){},VisuMZ['ParseTilesetNotetags']=function(_0x38d323){},VisuMZ[_0x420e26(0x61d)]['ParseActorNotetags']=VisuMZ[_0x420e26(0x579)],VisuMZ['ParseActorNotetags']=function(_0x3d76a3){const _0x310ecc=_0x420e26;VisuMZ[_0x310ecc(0x61d)][_0x310ecc(0x579)][_0x310ecc(0x21f)](this,_0x3d76a3);const _0x263d51=_0x3d76a3[_0x310ecc(0x5a4)];if(_0x263d51[_0x310ecc(0x295)](/<MAX LEVEL:[ ](\d+)>/i)){_0x3d76a3[_0x310ecc(0x60b)]=Number(RegExp['$1']);if(_0x3d76a3['maxLevel']===0x0)_0x3d76a3[_0x310ecc(0x60b)]=Number['MAX_SAFE_INTEGER'];}_0x263d51[_0x310ecc(0x295)](/<INITIAL LEVEL:[ ](\d+)>/i)&&(_0x3d76a3[_0x310ecc(0x56a)]=Math['min'](Number(RegExp['$1']),_0x3d76a3[_0x310ecc(0x60b)]));},VisuMZ[_0x420e26(0x61d)]['ParseClassNotetags']=VisuMZ[_0x420e26(0x1a6)],VisuMZ[_0x420e26(0x1a6)]=function(_0x550fce){const _0x35b228=_0x420e26;VisuMZ[_0x35b228(0x61d)][_0x35b228(0x1a6)][_0x35b228(0x21f)](this,_0x550fce);if(_0x550fce[_0x35b228(0x6ca)]){if(_0x35b228(0x52b)===_0x35b228(0x52b))for(const _0x968d29 of _0x550fce['learnings']){_0x968d29[_0x35b228(0x5a4)][_0x35b228(0x295)](/<LEARN AT LEVEL:[ ](\d+)>/i)&&(_0x968d29[_0x35b228(0x438)]=Math[_0x35b228(0x609)](Number(RegExp['$1']),0x1));}else this[_0x35b228(0x205)]=_0x35b228(0x692);}},VisuMZ[_0x420e26(0x61d)]['ParseEnemyNotetags']=VisuMZ[_0x420e26(0x212)],VisuMZ[_0x420e26(0x212)]=function(_0x48503e){const _0x3e1d2d=_0x420e26;VisuMZ[_0x3e1d2d(0x61d)]['ParseEnemyNotetags'][_0x3e1d2d(0x21f)](this,_0x48503e),_0x48503e['level']=0x1;const _0x4026fe=_0x48503e[_0x3e1d2d(0x5a4)];if(_0x4026fe[_0x3e1d2d(0x295)](/<LEVEL:[ ](\d+)>/i))_0x48503e['level']=Number(RegExp['$1']);if(_0x4026fe[_0x3e1d2d(0x295)](/<MAXHP:[ ](\d+)>/i))_0x48503e[_0x3e1d2d(0x614)][0x0]=Number(RegExp['$1']);if(_0x4026fe[_0x3e1d2d(0x295)](/<MAXMP:[ ](\d+)>/i))_0x48503e[_0x3e1d2d(0x614)][0x1]=Number(RegExp['$1']);if(_0x4026fe['match'](/<ATK:[ ](\d+)>/i))_0x48503e[_0x3e1d2d(0x614)][0x2]=Number(RegExp['$1']);if(_0x4026fe[_0x3e1d2d(0x295)](/<DEF:[ ](\d+)>/i))_0x48503e[_0x3e1d2d(0x614)][0x3]=Number(RegExp['$1']);if(_0x4026fe[_0x3e1d2d(0x295)](/<MAT:[ ](\d+)>/i))_0x48503e[_0x3e1d2d(0x614)][0x4]=Number(RegExp['$1']);if(_0x4026fe[_0x3e1d2d(0x295)](/<MDF:[ ](\d+)>/i))_0x48503e['params'][0x5]=Number(RegExp['$1']);if(_0x4026fe['match'](/<AGI:[ ](\d+)>/i))_0x48503e[_0x3e1d2d(0x614)][0x6]=Number(RegExp['$1']);if(_0x4026fe['match'](/<LUK:[ ](\d+)>/i))_0x48503e[_0x3e1d2d(0x614)][0x7]=Number(RegExp['$1']);if(_0x4026fe[_0x3e1d2d(0x295)](/<EXP:[ ](\d+)>/i))_0x48503e[_0x3e1d2d(0x704)]=Number(RegExp['$1']);if(_0x4026fe['match'](/<GOLD:[ ](\d+)>/i))_0x48503e[_0x3e1d2d(0x13d)]=Number(RegExp['$1']);},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x667)]=Graphics[_0x420e26(0x7d3)],Graphics[_0x420e26(0x7d3)]=function(){const _0x277ed6=_0x420e26;switch(VisuMZ[_0x277ed6(0x61d)][_0x277ed6(0x12e)]['QoL'][_0x277ed6(0x16a)]){case'stretch':return!![];case'normal':return![];default:return VisuMZ[_0x277ed6(0x61d)][_0x277ed6(0x667)][_0x277ed6(0x21f)](this);}},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x3c2)]=Graphics[_0x420e26(0x335)],Graphics[_0x420e26(0x335)]=function(_0x250479,_0x1b24bc,_0x120b72=null){const _0x41b927=_0x420e26;VisuMZ['CoreEngine'][_0x41b927(0x3c2)][_0x41b927(0x21f)](this,_0x250479,_0x1b24bc,_0x120b72),VisuMZ[_0x41b927(0x26d)](![]);},VisuMZ['CoreEngine']['Graphics_centerElement']=Graphics[_0x420e26(0x808)],Graphics[_0x420e26(0x808)]=function(_0x3b6119){const _0x43d3ca=_0x420e26;VisuMZ[_0x43d3ca(0x61d)][_0x43d3ca(0x39c)]['call'](this,_0x3b6119),this[_0x43d3ca(0x521)](_0x3b6119);},Graphics[_0x420e26(0x521)]=function(_0x500a2e){const _0x48e7d8=_0x420e26;VisuMZ[_0x48e7d8(0x61d)][_0x48e7d8(0x12e)][_0x48e7d8(0x5ed)]['FontSmoothing']&&(_0x500a2e['style']['font-smooth']=_0x48e7d8(0x1c6));VisuMZ[_0x48e7d8(0x61d)][_0x48e7d8(0x12e)][_0x48e7d8(0x5ed)][_0x48e7d8(0x119)]&&(_0x500a2e[_0x48e7d8(0x7c2)][_0x48e7d8(0x162)]=_0x48e7d8(0x26b));const _0x5657e1=Math['max'](0x0,Math[_0x48e7d8(0x60d)](_0x500a2e['width']*this[_0x48e7d8(0x744)])),_0x4ffdfe=Math['max'](0x0,Math['floor'](_0x500a2e[_0x48e7d8(0x17f)]*this['_realScale']));_0x500a2e['style'][_0x48e7d8(0x351)]=_0x5657e1+'px',_0x500a2e[_0x48e7d8(0x7c2)]['height']=_0x4ffdfe+'px';},Bitmap[_0x420e26(0x6a9)]['markCoreEngineModified']=function(){this['_customModified']=!![];},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x6fb)]=Sprite[_0x420e26(0x6a9)]['destroy'],Sprite[_0x420e26(0x6a9)][_0x420e26(0x215)]=function(){const _0x5d5a19=_0x420e26;VisuMZ[_0x5d5a19(0x61d)]['Sprite_destroy'][_0x5d5a19(0x21f)](this),this[_0x5d5a19(0x7da)]();},Sprite['prototype']['destroyCoreEngineMarkedBitmaps']=function(){const _0x288254=_0x420e26;if(!this[_0x288254(0x187)])return;if(!this[_0x288254(0x187)][_0x288254(0x283)])return;this['bitmap'][_0x288254(0x44d)]&&!this['_bitmap'][_0x288254(0x44d)][_0x288254(0x6c9)]&&('xwIaE'===_0x288254(0x750)?_0x32ec06[_0x288254(0x261)](_0x572cb0,_0x4004f2):this[_0x288254(0x187)]['destroy']());},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x2b1)]=Bitmap[_0x420e26(0x6a9)][_0x420e26(0x590)],Bitmap[_0x420e26(0x6a9)][_0x420e26(0x590)]=function(_0x2db6f7,_0x28e354){const _0x4216a3=_0x420e26;VisuMZ[_0x4216a3(0x61d)][_0x4216a3(0x2b1)][_0x4216a3(0x21f)](this,_0x2db6f7,_0x28e354),this['markCoreEngineModified']();},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x1cc)]=Bitmap['prototype'][_0x420e26(0x5ce)],Bitmap[_0x420e26(0x6a9)]['blt']=function(_0x1ca6b1,_0x206b96,_0x481ff0,_0x4ccbb3,_0xcb7812,_0x127bf2,_0x3cd044,_0x3f9962,_0x1228f6){const _0x5209f5=_0x420e26;VisuMZ[_0x5209f5(0x61d)][_0x5209f5(0x1cc)][_0x5209f5(0x21f)](this,_0x1ca6b1,_0x206b96,_0x481ff0,_0x4ccbb3,_0xcb7812,_0x127bf2,_0x3cd044,_0x3f9962,_0x1228f6),this[_0x5209f5(0x434)]();},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x20d)]=Bitmap[_0x420e26(0x6a9)][_0x420e26(0x129)],Bitmap['prototype'][_0x420e26(0x129)]=function(_0x17cc68,_0x2b40e2,_0x26a744,_0x33d195){const _0x3cbf8a=_0x420e26;VisuMZ[_0x3cbf8a(0x61d)][_0x3cbf8a(0x20d)]['call'](this,_0x17cc68,_0x2b40e2,_0x26a744,_0x33d195),this[_0x3cbf8a(0x434)]();},VisuMZ['CoreEngine'][_0x420e26(0x3fc)]=Bitmap['prototype'][_0x420e26(0x691)],Bitmap[_0x420e26(0x6a9)]['fillRect']=function(_0x5a0233,_0x506f98,_0x434359,_0x2c6c6f,_0x15bfd5){const _0x17ba70=_0x420e26;VisuMZ[_0x17ba70(0x61d)][_0x17ba70(0x3fc)]['call'](this,_0x5a0233,_0x506f98,_0x434359,_0x2c6c6f,_0x15bfd5),this[_0x17ba70(0x434)]();},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x19e)]=Bitmap[_0x420e26(0x6a9)]['strokeRect'],Bitmap[_0x420e26(0x6a9)][_0x420e26(0x57a)]=function(_0x288e3e,_0x438381,_0x3df692,_0x2d9038,_0x56d592){const _0x2124d0=_0x420e26;VisuMZ[_0x2124d0(0x61d)][_0x2124d0(0x19e)]['call'](this,_0x288e3e,_0x438381,_0x3df692,_0x2d9038,_0x56d592),this[_0x2124d0(0x434)]();},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x603)]=Bitmap[_0x420e26(0x6a9)][_0x420e26(0x6ef)],Bitmap[_0x420e26(0x6a9)][_0x420e26(0x6ef)]=function(_0x326eec,_0x1e1000,_0x52b56d,_0x28a4ae,_0x304366,_0x1aa7d1,_0x299aed){const _0x1366c1=_0x420e26;VisuMZ[_0x1366c1(0x61d)][_0x1366c1(0x603)][_0x1366c1(0x21f)](this,_0x326eec,_0x1e1000,_0x52b56d,_0x28a4ae,_0x304366,_0x1aa7d1,_0x299aed),this[_0x1366c1(0x434)]();},VisuMZ[_0x420e26(0x61d)]['Bitmap_drawCircle']=Bitmap[_0x420e26(0x6a9)][_0x420e26(0x717)],Bitmap[_0x420e26(0x6a9)]['drawCircle']=function(_0xca0a40,_0x5cce48,_0x41c80e,_0x26f0de){const _0x52b00b=_0x420e26;_0xca0a40=Math['round'](_0xca0a40),_0x5cce48=Math[_0x52b00b(0x3c7)](_0x5cce48),_0x41c80e=Math[_0x52b00b(0x3c7)](_0x41c80e),VisuMZ[_0x52b00b(0x61d)]['Bitmap_drawCircle'][_0x52b00b(0x21f)](this,_0xca0a40,_0x5cce48,_0x41c80e,_0x26f0de),this['markCoreEngineModified']();},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x631)]=Bitmap[_0x420e26(0x6a9)]['measureTextWidth'],Bitmap['prototype'][_0x420e26(0x65a)]=function(_0x65d371){const _0x51ef0b=_0x420e26;return Math[_0x51ef0b(0x3c7)](VisuMZ[_0x51ef0b(0x61d)]['Bitmap_measureTextWidth']['call'](this,_0x65d371));},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x700)]=Bitmap[_0x420e26(0x6a9)][_0x420e26(0x14b)],Bitmap[_0x420e26(0x6a9)][_0x420e26(0x14b)]=function(_0x3e430d,_0x10f425,_0x383bf5,_0x4929f2,_0x3e3e8f,_0x2c0539){const _0x34afe0=_0x420e26;_0x10f425=Math[_0x34afe0(0x3c7)](_0x10f425),_0x383bf5=Math[_0x34afe0(0x3c7)](_0x383bf5),_0x4929f2=Math[_0x34afe0(0x3c7)](_0x4929f2),_0x3e3e8f=Math[_0x34afe0(0x3c7)](_0x3e3e8f),VisuMZ[_0x34afe0(0x61d)][_0x34afe0(0x700)][_0x34afe0(0x21f)](this,_0x3e430d,_0x10f425,_0x383bf5,_0x4929f2,_0x3e3e8f,_0x2c0539),this['markCoreEngineModified']();},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x345)]=Bitmap[_0x420e26(0x6a9)][_0x420e26(0x183)],Bitmap[_0x420e26(0x6a9)][_0x420e26(0x183)]=function(_0x1eaa44,_0x44cf1d,_0xf934a,_0x77a324){const _0x2fba86=_0x420e26;VisuMZ[_0x2fba86(0x61d)]['Settings'][_0x2fba86(0x5ed)][_0x2fba86(0x237)]?this['_drawTextShadow'](_0x1eaa44,_0x44cf1d,_0xf934a,_0x77a324):VisuMZ[_0x2fba86(0x61d)]['Bitmap_drawTextOutline'][_0x2fba86(0x21f)](this,_0x1eaa44,_0x44cf1d,_0xf934a,_0x77a324);},Bitmap[_0x420e26(0x6a9)]['_drawTextShadow']=function(_0x3a33b6,_0x49fbf9,_0x2abe97,_0xc952fe){const _0x4ebe20=_0x420e26,_0x4a03a3=this['context'];_0x4a03a3[_0x4ebe20(0x7ea)]=this[_0x4ebe20(0x518)],_0x4a03a3[_0x4ebe20(0x5be)](_0x3a33b6,_0x49fbf9+0x2,_0x2abe97+0x2,_0xc952fe);},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x84a)]=Input[_0x420e26(0x782)],Input[_0x420e26(0x782)]=function(){const _0x42d9c9=_0x420e26;VisuMZ[_0x42d9c9(0x61d)][_0x42d9c9(0x84a)][_0x42d9c9(0x21f)](this),this[_0x42d9c9(0x519)]=undefined,this[_0x42d9c9(0x696)]=undefined,this[_0x42d9c9(0x666)]=Input[_0x42d9c9(0x21a)];},VisuMZ['CoreEngine']['Input_update']=Input['update'],Input[_0x420e26(0x1bb)]=function(){const _0x3ff647=_0x420e26;VisuMZ['CoreEngine'][_0x3ff647(0x85f)][_0x3ff647(0x21f)](this);if(this['_gamepadWait'])this['_gamepadWait']--;},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x6de)]=Input[_0x420e26(0x39e)],Input['_pollGamepads']=function(){const _0x3eae09=_0x420e26;if(this[_0x3eae09(0x666)])return;VisuMZ[_0x3eae09(0x61d)][_0x3eae09(0x6de)][_0x3eae09(0x21f)](this);},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x1f4)]=Input[_0x420e26(0x4a6)],Input[_0x420e26(0x4a6)]=function(){const _0x650f98=_0x420e26;VisuMZ['CoreEngine'][_0x650f98(0x1f4)][_0x650f98(0x21f)](this),document[_0x650f98(0x411)](_0x650f98(0x7c0),this['_onKeyPress']['bind'](this));},VisuMZ[_0x420e26(0x61d)]['Input_onKeyDown']=Input[_0x420e26(0x5cf)],Input[_0x420e26(0x5cf)]=function(_0x430fa4){const _0x37f311=_0x420e26;this[_0x37f311(0x696)]=_0x430fa4[_0x37f311(0x56e)],VisuMZ['CoreEngine'][_0x37f311(0x3b7)][_0x37f311(0x21f)](this,_0x430fa4);},Input['_onKeyPress']=function(_0xedee38){const _0x4e405e=_0x420e26;this[_0x4e405e(0x839)](_0xedee38);},Input['_registerKeyInput']=function(_0x2e37a3){const _0x5f6e86=_0x420e26;this['_inputSpecialKeyCode']=_0x2e37a3[_0x5f6e86(0x56e)];let _0x91af50=String[_0x5f6e86(0x598)](_0x2e37a3[_0x5f6e86(0x6cd)]);this[_0x5f6e86(0x519)]===undefined?this[_0x5f6e86(0x519)]=_0x91af50:'nKwlu'!=='IWpPV'?this[_0x5f6e86(0x519)]+=_0x91af50:this['_screenX']-=_0x47cff5['floor']((_0x3aa8f8[_0x5f6e86(0x351)]-_0x32a857['boxWidth'])/0x2);},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x4f3)]=Input[_0x420e26(0x1d8)],Input[_0x420e26(0x1d8)]=function(_0x3ae1b6){const _0x2c52fb=_0x420e26;if(_0x3ae1b6===0x8)return![];return VisuMZ[_0x2c52fb(0x61d)][_0x2c52fb(0x4f3)][_0x2c52fb(0x21f)](this,_0x3ae1b6);},Input[_0x420e26(0x30a)]=function(_0x14eb4a){const _0x2dc3f6=_0x420e26;if(_0x14eb4a[_0x2dc3f6(0x295)](/backspace/i))return this[_0x2dc3f6(0x696)]===0x8;if(_0x14eb4a[_0x2dc3f6(0x295)](/enter/i))return this[_0x2dc3f6(0x696)]===0xd;if(_0x14eb4a[_0x2dc3f6(0x295)](/escape/i))return this[_0x2dc3f6(0x696)]===0x1b;},Input[_0x420e26(0x77e)]=function(){const _0x418387=_0x420e26;return[0x30,0x31,0x32,0x33,0x34,0x35,0x36,0x37,0x38,0x39]['contains'](this[_0x418387(0x696)]);},Input[_0x420e26(0x539)]=function(){const _0x1bcc86=_0x420e26;return[0x25,0x26,0x27,0x28][_0x1bcc86(0x29b)](this['_inputSpecialKeyCode']);},Input[_0x420e26(0x14c)]=function(){const _0x2c3ea0=_0x420e26;if(navigator['getGamepads']){if(_0x2c3ea0(0x1ed)!==_0x2c3ea0(0x50e)){const _0x19051f=navigator[_0x2c3ea0(0x46a)]();if(_0x19051f)for(const _0x4c29eb of _0x19051f){if(_0x4c29eb&&_0x4c29eb[_0x2c3ea0(0x4e6)]){if(_0x2c3ea0(0x111)===_0x2c3ea0(0x111))return!![];else this[_0x2c3ea0(0x5f6)][_0x2c3ea0(0x414)](_0x3a23b2[_0x2c3ea0(0x7ce)][_0x2c3ea0(0x610)]);}}}else{const _0x27ff6e=_0x2c3ea0(0x1e8);this[_0x2c3ea0(0x230)]=this[_0x2c3ea0(0x230)]||{};if(this[_0x2c3ea0(0x230)][_0x27ff6e])return this[_0x2c3ea0(0x230)][_0x27ff6e];const _0xc38f21=_0x4b8762['CoreEngine']['Settings']['Color'][_0x2c3ea0(0x7de)];return this['getColorDataFromPluginParameters'](_0x27ff6e,_0xc38f21);}}return![];},Input[_0x420e26(0x203)]=function(){const _0x5a2b25=_0x420e26;if(navigator[_0x5a2b25(0x46a)]){const _0x3e2099=navigator[_0x5a2b25(0x46a)]();if(_0x3e2099)for(const _0x4dd160 of _0x3e2099){if(_0x5a2b25(0x7cb)==='JHFDI'){if(_0x32b621[_0x5a2b25(0x103)]())_0x5cb43f[_0x5a2b25(0x39f)](_0x24681e);}else{if(_0x4dd160&&_0x4dd160['connected']){if(this['isGamepadButtonPressed'](_0x4dd160))return!![];}}}}return![];},Input['isGamepadButtonPressed']=function(_0x5bfe06){const _0x29b187=_0x420e26,_0x5c1c53=_0x5bfe06[_0x29b187(0x33c)];for(let _0x56ea79=0x0;_0x56ea79<_0x5c1c53['length'];_0x56ea79++){if(_0x5c1c53[_0x56ea79][_0x29b187(0x452)])return!![];}return![];},VisuMZ[_0x420e26(0x61d)]['Tilemap_addShadow']=Tilemap['prototype'][_0x420e26(0x25d)],Tilemap[_0x420e26(0x6a9)][_0x420e26(0x25d)]=function(_0x531099,_0x4cf399,_0x594ba1,_0x32aaee){const _0x496fb0=_0x420e26;if($gameMap&&$gameMap[_0x496fb0(0x6e0)]())return;VisuMZ[_0x496fb0(0x61d)][_0x496fb0(0x7b8)]['call'](this,_0x531099,_0x4cf399,_0x594ba1,_0x32aaee);},Tilemap[_0x420e26(0x76f)][_0x420e26(0x6a9)]['_createInternalTextures']=function(){const _0x212ec2=_0x420e26;this['_destroyInternalTextures']();for(let _0x44c607=0x0;_0x44c607<Tilemap[_0x212ec2(0x4d4)][_0x212ec2(0x15b)];_0x44c607++){const _0xfb9472=new PIXI[(_0x212ec2(0x2de))]();_0xfb9472[_0x212ec2(0x766)](0x800,0x800),VisuMZ[_0x212ec2(0x61d)][_0x212ec2(0x12e)]['QoL']['PixelateImageRendering']&&(_0xfb9472[_0x212ec2(0x613)]=PIXI[_0x212ec2(0x282)]['NEAREST']),this['_internalTextures'][_0x212ec2(0x5e8)](_0xfb9472);}},WindowLayer['prototype'][_0x420e26(0x706)]=function(){const _0x2f33e3=_0x420e26;if(SceneManager&&SceneManager[_0x2f33e3(0x3cc)]){if(_0x2f33e3(0x102)===_0x2f33e3(0x28d)){const _0x1aaddd=_0xc5a60f[_0x2f33e3(0x61d)][_0x2f33e3(0x33d)][_0x57a627],_0x44d0bf=this[_0x1aaddd];return _0x5abe74[_0x2f33e3(0x61d)][_0x2f33e3(0x28f)][_0x4e9ec7]==='integer'?_0x44d0bf:_0xe3efd2?_0x4f6dac(_0x2602aa[_0x2f33e3(0x3c7)](_0x44d0bf*0x64))+'%':_0x44d0bf;}else return SceneManager[_0x2f33e3(0x3cc)][_0x2f33e3(0x676)]();}else{if(_0x2f33e3(0x4c7)!==_0x2f33e3(0x394))return!![];else this[_0x2f33e3(0x120)][_0x2f33e3(0x414)](_0x5e84bd['layoutSettings'][_0x2f33e3(0x26c)]);}},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x7ae)]=WindowLayer[_0x420e26(0x6a9)]['render'],WindowLayer[_0x420e26(0x6a9)][_0x420e26(0x4c0)]=function render(_0x2800f5){const _0x32e3ff=_0x420e26;this['isMaskingEnabled']()?VisuMZ['CoreEngine'][_0x32e3ff(0x7ae)][_0x32e3ff(0x21f)](this,_0x2800f5):_0x32e3ff(0x3cb)==='lDGNT'?this['processAlwaysEscape']():this['renderNoMask'](_0x2800f5);},WindowLayer[_0x420e26(0x6a9)][_0x420e26(0x19d)]=function render(_0x412f9d){const _0x4279f6=_0x420e26;if(!this[_0x4279f6(0x2f8)])return;const _0x2a728a=new PIXI[(_0x4279f6(0x5fa))](),_0xdbd69a=_0x412f9d['gl'],_0x357c8f=this[_0x4279f6(0x333)]['clone']();_0x412f9d[_0x4279f6(0x287)][_0x4279f6(0x671)](),_0x2a728a[_0x4279f6(0x32f)]=this[_0x4279f6(0x32f)],_0x412f9d[_0x4279f6(0x5c6)][_0x4279f6(0x37e)](),_0xdbd69a[_0x4279f6(0x340)](_0xdbd69a[_0x4279f6(0x2db)]);while(_0x357c8f[_0x4279f6(0x66e)]>0x0){if(_0x4279f6(0x836)!==_0x4279f6(0x358)){const _0x3e881a=_0x357c8f[_0x4279f6(0x4fb)]();_0x3e881a[_0x4279f6(0x20c)]&&_0x3e881a['visible']&&_0x3e881a[_0x4279f6(0x1a4)]>0x0&&(_0xdbd69a[_0x4279f6(0x5e9)](_0xdbd69a[_0x4279f6(0x174)],0x0,~0x0),_0xdbd69a['stencilOp'](_0xdbd69a[_0x4279f6(0x648)],_0xdbd69a[_0x4279f6(0x648)],_0xdbd69a[_0x4279f6(0x648)]),_0x3e881a['render'](_0x412f9d),_0x412f9d['batch'][_0x4279f6(0x37e)](),_0x2a728a['clear'](),_0xdbd69a[_0x4279f6(0x5e9)](_0xdbd69a[_0x4279f6(0x728)],0x1,~0x0),_0xdbd69a['stencilOp'](_0xdbd69a[_0x4279f6(0x75d)],_0xdbd69a[_0x4279f6(0x75d)],_0xdbd69a[_0x4279f6(0x75d)]),_0xdbd69a['blendFunc'](_0xdbd69a['ZERO'],_0xdbd69a[_0x4279f6(0x159)]),_0x2a728a[_0x4279f6(0x4c0)](_0x412f9d),_0x412f9d[_0x4279f6(0x5c6)][_0x4279f6(0x37e)](),_0xdbd69a[_0x4279f6(0x2ab)](_0xdbd69a[_0x4279f6(0x159)],_0xdbd69a[_0x4279f6(0x530)]));}else{if(_0x585cea)_0x45c599['ParseClassNotetags'](_0x548512);}}_0xdbd69a[_0x4279f6(0x5d5)](_0xdbd69a['STENCIL_TEST']),_0xdbd69a[_0x4279f6(0x782)](_0xdbd69a['STENCIL_BUFFER_BIT']),_0xdbd69a[_0x4279f6(0x34e)](0x0),_0x412f9d['batch'][_0x4279f6(0x37e)]();for(const _0x2ab8f8 of this[_0x4279f6(0x333)]){if(_0x4279f6(0x7a4)===_0x4279f6(0x480)){const _0x2338fe=_0x220aad(this[_0x4279f6(0x329)][_0x4279f6(0x1de)]),_0x551374=this[_0x4279f6(0x734)](_0x2338fe);_0x551374&&(_0x551374['BgFilename1']!==''||_0x551374['BgFilename2']!=='')&&(this[_0x4279f6(0x85d)]=new _0x217cef(_0xfc3536[_0x4279f6(0x83e)](_0x551374['BgFilename1'])),this[_0x4279f6(0x5db)]=new _0x5f10bf(_0x4e80a3[_0x4279f6(0x800)](_0x551374['BgFilename2'])),this[_0x4279f6(0x39a)](this[_0x4279f6(0x85d)]),this[_0x4279f6(0x39a)](this['_backSprite2']),this[_0x4279f6(0x85d)][_0x4279f6(0x187)][_0x4279f6(0x6cc)](this[_0x4279f6(0x7e6)][_0x4279f6(0x38b)](this,this[_0x4279f6(0x85d)])),this[_0x4279f6(0x5db)][_0x4279f6(0x187)][_0x4279f6(0x6cc)](this['adjustSprite'][_0x4279f6(0x38b)](this,this[_0x4279f6(0x5db)])));}else!_0x2ab8f8['_isWindow']&&_0x2ab8f8[_0x4279f6(0x2f8)]&&_0x2ab8f8['render'](_0x412f9d);}_0x412f9d['batch'][_0x4279f6(0x37e)]();},DataManager[_0x420e26(0x397)]=function(_0x30ca94){const _0x1167f2=_0x420e26;return this[_0x1167f2(0x110)](_0x30ca94)&&_0x30ca94[_0x1167f2(0x312)]===0x2;},VisuMZ['CoreEngine'][_0x420e26(0x380)]=DataManager[_0x420e26(0x2a8)],DataManager['setupNewGame']=function(){const _0x4e1c86=_0x420e26;VisuMZ[_0x4e1c86(0x61d)][_0x4e1c86(0x380)][_0x4e1c86(0x21f)](this),this[_0x4e1c86(0x781)](),this[_0x4e1c86(0x712)]();},DataManager['reservePlayTestNewGameCommonEvent']=function(){const _0x3940c5=_0x420e26;if($gameTemp[_0x3940c5(0x103)]()){if(_0x3940c5(0x663)!=='JPsIw'){const _0x37ec8c=VisuMZ[_0x3940c5(0x61d)][_0x3940c5(0x12e)][_0x3940c5(0x5ed)][_0x3940c5(0x7fb)];if(_0x37ec8c>0x0)$gameTemp[_0x3940c5(0x6fa)](_0x37ec8c);}else _0x52cb42['VisuMZ_2_BattleSystemPTB']&&(this[_0x3940c5(0x205)]=_0x3940c5(0x4e7));}},DataManager[_0x420e26(0x712)]=function(){const _0x55c59f=_0x420e26,_0xa867c4=VisuMZ[_0x55c59f(0x61d)][_0x55c59f(0x12e)][_0x55c59f(0x5ed)][_0x55c59f(0x69d)]||0x0;if(_0xa867c4>0x0)$gameTemp[_0x55c59f(0x6fa)](_0xa867c4);},DataManager[_0x420e26(0x168)]=function(_0x46f62a){const _0x5a0940=_0x420e26,_0x1a0a5d=$dataTroops[_0x46f62a];if(!_0x1a0a5d)return'';let _0x2353f5='';_0x2353f5+=_0x1a0a5d[_0x5a0940(0x1de)];for(const _0x765190 of _0x1a0a5d['pages']){for(const _0x310c12 of _0x765190[_0x5a0940(0x27c)]){[0x6c,0x198][_0x5a0940(0x52e)](_0x310c12[_0x5a0940(0x2ce)])&&(_0x2353f5+='\x0a',_0x2353f5+=_0x310c12[_0x5a0940(0x370)][0x0]);}}return _0x2353f5;},TextManager[_0x420e26(0x6f5)]=['','','',_0x420e26(0x6e3),'','',_0x420e26(0x24b),'','BACKSPACE',_0x420e26(0x6a0),'','',_0x420e26(0x66c),_0x420e26(0x632),_0x420e26(0x233),'',_0x420e26(0x3c9),_0x420e26(0x651),_0x420e26(0x121),_0x420e26(0x6ae),_0x420e26(0x75e),_0x420e26(0x1ec),_0x420e26(0x30f),_0x420e26(0x84e),_0x420e26(0x473),_0x420e26(0x11e),'',_0x420e26(0x71a),_0x420e26(0x3b3),_0x420e26(0x1b7),'ACCEPT',_0x420e26(0x226),_0x420e26(0x82d),_0x420e26(0x7f6),_0x420e26(0x4f0),_0x420e26(0x79a),_0x420e26(0x5ad),_0x420e26(0x169),'UP',_0x420e26(0x6c7),'DOWN',_0x420e26(0x48d),_0x420e26(0x251),_0x420e26(0x118),_0x420e26(0x531),_0x420e26(0x5cd),_0x420e26(0x2c9),'','0','1','2','3','4','5','6','7','8','9',_0x420e26(0x5ec),_0x420e26(0x7db),_0x420e26(0x265),_0x420e26(0x355),_0x420e26(0x53b),'QUESTION_MARK','AT','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','OS_KEY','','CONTEXT_MENU','',_0x420e26(0x276),_0x420e26(0x3d1),_0x420e26(0x10e),'NUMPAD2',_0x420e26(0x7b6),_0x420e26(0x5a6),_0x420e26(0x182),_0x420e26(0x522),_0x420e26(0x3cf),_0x420e26(0x7c6),_0x420e26(0x72d),_0x420e26(0x735),'ADD',_0x420e26(0x5c5),_0x420e26(0x342),_0x420e26(0x6b3),'DIVIDE','F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11',_0x420e26(0x756),_0x420e26(0x59b),_0x420e26(0x167),_0x420e26(0x319),'F16',_0x420e26(0x6a5),_0x420e26(0x341),_0x420e26(0x7d7),'F20',_0x420e26(0x463),_0x420e26(0x214),'F23','F24','','','','','','','','',_0x420e26(0x6ee),_0x420e26(0x48c),_0x420e26(0x1a1),'WIN_OEM_FJ_MASSHOU','WIN_OEM_FJ_TOUROKU',_0x420e26(0x5ff),'WIN_OEM_FJ_ROYA','','','','','','','','','','CIRCUMFLEX',_0x420e26(0x441),_0x420e26(0x442),'HASH','DOLLAR',_0x420e26(0x11f),_0x420e26(0x59c),_0x420e26(0x5c3),_0x420e26(0x3f1),_0x420e26(0x2d3),_0x420e26(0x387),_0x420e26(0x49d),'PIPE','HYPHEN_MINUS','OPEN_CURLY_BRACKET','CLOSE_CURLY_BRACKET','TILDE','','','','','VOLUME_MUTE',_0x420e26(0x5e5),_0x420e26(0x2d7),'','',_0x420e26(0x7db),_0x420e26(0x355),_0x420e26(0x457),'MINUS',_0x420e26(0x2cc),_0x420e26(0x3a5),_0x420e26(0x381),'','','','','','','','','','','','','','','','','','','','','','','','','','',_0x420e26(0x5ba),_0x420e26(0x7b3),_0x420e26(0x835),_0x420e26(0x1d2),'',_0x420e26(0x629),_0x420e26(0x18c),'',_0x420e26(0x44f),_0x420e26(0x13e),'','WIN_ICO_CLEAR','','',_0x420e26(0x799),_0x420e26(0x5dc),_0x420e26(0x5d7),_0x420e26(0x11b),'WIN_OEM_PA3',_0x420e26(0x211),_0x420e26(0x83f),_0x420e26(0x4d7),'WIN_OEM_FINISH',_0x420e26(0x71c),_0x420e26(0x33b),'WIN_OEM_ENLW',_0x420e26(0x67a),_0x420e26(0x757),'CRSEL','EXSEL',_0x420e26(0x320),_0x420e26(0x19c),_0x420e26(0x365),'',_0x420e26(0x63b),_0x420e26(0x2ac),''],TextManager[_0x420e26(0x2dd)]=VisuMZ['CoreEngine'][_0x420e26(0x12e)][_0x420e26(0x7c1)][_0x420e26(0x2e2)],TextManager[_0x420e26(0x711)]=VisuMZ['CoreEngine'][_0x420e26(0x12e)]['ButtonAssist'][_0x420e26(0x39d)],TextManager[_0x420e26(0x13b)]=VisuMZ[_0x420e26(0x61d)]['Settings'][_0x420e26(0x7c1)][_0x420e26(0x80c)],VisuMZ[_0x420e26(0x61d)][_0x420e26(0x372)]=TextManager[_0x420e26(0x646)],TextManager[_0x420e26(0x646)]=function(_0x260b21){const _0x422265=_0x420e26;return typeof _0x260b21===_0x422265(0x83c)?VisuMZ[_0x422265(0x61d)]['TextManager_param']['call'](this,_0x260b21):this['paramName'](_0x260b21);},TextManager[_0x420e26(0x107)]=function(_0x43001d){const _0x531fcd=_0x420e26;_0x43001d=String(_0x43001d||'')[_0x531fcd(0x741)]();const _0x166d6e=VisuMZ[_0x531fcd(0x61d)][_0x531fcd(0x12e)]['Param'];if(_0x43001d===_0x531fcd(0x864))return $dataSystem['terms'][_0x531fcd(0x614)][0x0];if(_0x43001d===_0x531fcd(0x794))return $dataSystem['terms']['params'][0x1];if(_0x43001d===_0x531fcd(0x7f0))return $dataSystem['terms'][_0x531fcd(0x614)][0x2];if(_0x43001d==='DEF')return $dataSystem[_0x531fcd(0x41c)][_0x531fcd(0x614)][0x3];if(_0x43001d===_0x531fcd(0x606))return $dataSystem['terms'][_0x531fcd(0x614)][0x4];if(_0x43001d===_0x531fcd(0x54e))return $dataSystem['terms'][_0x531fcd(0x614)][0x5];if(_0x43001d==='AGI')return $dataSystem[_0x531fcd(0x41c)][_0x531fcd(0x614)][0x6];if(_0x43001d===_0x531fcd(0x856))return $dataSystem[_0x531fcd(0x41c)]['params'][0x7];if(_0x43001d===_0x531fcd(0x81e))return _0x166d6e[_0x531fcd(0x6ba)];if(_0x43001d===_0x531fcd(0x431))return _0x166d6e[_0x531fcd(0x7c4)];if(_0x43001d===_0x531fcd(0x267))return _0x166d6e[_0x531fcd(0x5f4)];if(_0x43001d===_0x531fcd(0x2b3))return _0x166d6e[_0x531fcd(0x859)];if(_0x43001d===_0x531fcd(0x6d4))return _0x166d6e[_0x531fcd(0x5b7)];if(_0x43001d==='MRF')return _0x166d6e[_0x531fcd(0x3e2)];if(_0x43001d===_0x531fcd(0x240))return _0x166d6e[_0x531fcd(0x6b7)];if(_0x43001d===_0x531fcd(0x6d2))return _0x166d6e[_0x531fcd(0x328)];if(_0x43001d===_0x531fcd(0x6ea))return _0x166d6e[_0x531fcd(0x3f5)];if(_0x43001d===_0x531fcd(0x662))return _0x166d6e[_0x531fcd(0x1a0)];if(_0x43001d===_0x531fcd(0x321))return _0x166d6e[_0x531fcd(0x561)];if(_0x43001d===_0x531fcd(0x419))return _0x166d6e['SParamVocab1'];if(_0x43001d===_0x531fcd(0x464))return _0x166d6e[_0x531fcd(0x537)];if(_0x43001d==='PHA')return _0x166d6e['SParamVocab3'];if(_0x43001d===_0x531fcd(0x5b6))return _0x166d6e[_0x531fcd(0x6c2)];if(_0x43001d==='TCR')return _0x166d6e[_0x531fcd(0x1f3)];if(_0x43001d===_0x531fcd(0x6db))return _0x166d6e[_0x531fcd(0x273)];if(_0x43001d==='MDR')return _0x166d6e[_0x531fcd(0x67c)];if(_0x43001d===_0x531fcd(0x35f))return _0x166d6e[_0x531fcd(0x4eb)];if(_0x43001d==='EXR')return _0x166d6e[_0x531fcd(0x36d)];if(VisuMZ['CoreEngine'][_0x531fcd(0x281)][_0x43001d])return VisuMZ['CoreEngine'][_0x531fcd(0x281)][_0x43001d];return'';},TextManager[_0x420e26(0x53d)]=function(_0x3cd843){const _0x2e3c29=_0x420e26;if(_0x3cd843==='cancel')_0x3cd843=_0x2e3c29(0x47e);let _0x2c9e1e=[];for(let _0x5c2272 in Input['keyMapper']){if(_0x2e3c29(0x74d)===_0x2e3c29(0x74d)){_0x5c2272=Number(_0x5c2272);if(_0x5c2272>=0x60&&_0x5c2272<=0x69)continue;if([0x12,0x20][_0x2e3c29(0x52e)](_0x5c2272))continue;_0x3cd843===Input[_0x2e3c29(0x292)][_0x5c2272]&&_0x2c9e1e[_0x2e3c29(0x5e8)](_0x5c2272);}else this[_0x2e3c29(0x550)]=_0x4bb8ed[_0x2e3c29(0x3cc)][_0x2e3c29(0x79f)]()!==_0x2e3c29(0x624)?0x0:0x8;}for(let _0x54f66f=0x0;_0x54f66f<_0x2c9e1e[_0x2e3c29(0x66e)];_0x54f66f++){_0x2c9e1e[_0x54f66f]=TextManager[_0x2e3c29(0x6f5)][_0x2c9e1e[_0x54f66f]];}return this['makeInputButtonString'](_0x2c9e1e);},TextManager[_0x420e26(0x186)]=function(_0x562b46){const _0x31262=_0x420e26,_0x1d6a60=VisuMZ[_0x31262(0x61d)][_0x31262(0x12e)]['ButtonAssist'],_0x369c59=_0x1d6a60[_0x31262(0x204)],_0x2bb1b4=_0x562b46['pop'](),_0x4fee90=_0x31262(0x2fa)['format'](_0x2bb1b4);return _0x1d6a60[_0x4fee90]?_0x1d6a60[_0x4fee90]:_0x369c59[_0x31262(0x680)](_0x2bb1b4);},TextManager['getInputMultiButtonStrings']=function(_0x52a3cb,_0x5513b0){const _0x1ceaef=_0x420e26,_0x47dda5=VisuMZ[_0x1ceaef(0x61d)]['Settings'][_0x1ceaef(0x7c1)],_0x1209a3=_0x47dda5['MultiKeyFmt'],_0x136187=this[_0x1ceaef(0x53d)](_0x52a3cb),_0x3c6ed0=this['getInputButtonString'](_0x5513b0);return _0x1209a3['format'](_0x136187,_0x3c6ed0);},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x714)]=ColorManager['loadWindowskin'],ColorManager[_0x420e26(0x198)]=function(){const _0x4f591c=_0x420e26;VisuMZ['CoreEngine'][_0x4f591c(0x714)][_0x4f591c(0x21f)](this),this[_0x4f591c(0x230)]=this[_0x4f591c(0x230)]||{};},ColorManager[_0x420e26(0x2a3)]=function(_0x3aa933,_0x4a2855){const _0x3f044c=_0x420e26;_0x4a2855=String(_0x4a2855),this[_0x3f044c(0x230)]=this[_0x3f044c(0x230)]||{};if(_0x4a2855[_0x3f044c(0x295)](/#(.*)/i)){if('SnooK'===_0x3f044c(0x2af))this[_0x3f044c(0x230)][_0x3aa933]=_0x3f044c(0x5fe)[_0x3f044c(0x680)](String(RegExp['$1']));else{if(this[_0x3f044c(0x806)]===_0x3f044c(0x421)&&!_0x4b5370[_0x3f044c(0x539)]())return;if(_0x56d806['isNumpadPressed']())return;_0x5bee74['CoreEngine'][_0x3f044c(0x33e)]['call'](this,_0x4a1ec7),this[_0x3f044c(0x46c)](_0x3f044c(0x854));}}else{if(_0x3f044c(0x506)!==_0x3f044c(0x7b4))this[_0x3f044c(0x230)][_0x3aa933]=this[_0x3f044c(0x2f1)](Number(_0x4a2855));else{const _0x204dd2=_0x2877b2[_0x3f044c(0x61d)][_0x3f044c(0x12e)][_0x3f044c(0x4b8)];for(const _0x3d9577 of _0x204dd2){const _0x19b3d4=_0x3d9577[_0x3f044c(0x5eb)][_0x3f044c(0x53c)](/[ ]/g,''),_0x1568b2=_0x3d9577[_0x3f044c(0x45f)];_0x1c56e9[_0x3f044c(0x61d)][_0x3f044c(0x2d5)](_0x19b3d4,_0x1568b2);}}}return this['_colorCache'][_0x3aa933];},ColorManager['getColor']=function(_0x59f62b){const _0x569257=_0x420e26;_0x59f62b=String(_0x59f62b);if(_0x59f62b[_0x569257(0x295)](/#(.*)/i)){if('hZbhz'!=='yFlVP')return _0x569257(0x5fe)[_0x569257(0x680)](String(RegExp['$1']));else{const _0x102ad7=_0x3eceee[_0x57b1af],_0x5460aa=_0x569257(0x858)['format'](_0x58497f);for(const _0x4ab078 of _0x102ad7){_0x45add1['loadBitmap'](_0x5460aa,_0x4ab078);}}}else{if('eZNpA'===_0x569257(0x3dc)){if(this[_0x569257(0x3f8)]===_0x577a21)this['initCoreEngineScreenShake']();this[_0x569257(0x3f8)]=_0x5be43a[_0x569257(0x7d4)]()[_0x569257(0x30b)]();}else return this[_0x569257(0x2f1)](Number(_0x59f62b));}},ColorManager[_0x420e26(0x5c9)]=function(){const _0x3d0031=_0x420e26;this[_0x3d0031(0x230)]={};},ColorManager[_0x420e26(0x536)]=function(){const _0x2b427e=_0x420e26,_0x54553f=_0x2b427e(0x4b6);this[_0x2b427e(0x230)]=this[_0x2b427e(0x230)]||{};if(this['_colorCache'][_0x54553f])return this[_0x2b427e(0x230)][_0x54553f];const _0x348d6d=VisuMZ[_0x2b427e(0x61d)][_0x2b427e(0x12e)]['Color'][_0x2b427e(0x63a)];return this['getColorDataFromPluginParameters'](_0x54553f,_0x348d6d);},ColorManager[_0x420e26(0x161)]=function(){const _0x239a7a=_0x420e26,_0x3a5571=_0x239a7a(0x35c);this[_0x239a7a(0x230)]=this[_0x239a7a(0x230)]||{};if(this[_0x239a7a(0x230)][_0x3a5571])return this['_colorCache'][_0x3a5571];const _0x5878e3=VisuMZ[_0x239a7a(0x61d)][_0x239a7a(0x12e)][_0x239a7a(0x2da)][_0x239a7a(0x2fb)];return this[_0x239a7a(0x2a3)](_0x3a5571,_0x5878e3);},ColorManager[_0x420e26(0x63d)]=function(){const _0x28726b=_0x420e26,_0x30af4b='_stored_crisisColor';this['_colorCache']=this[_0x28726b(0x230)]||{};if(this['_colorCache'][_0x30af4b])return this[_0x28726b(0x230)][_0x30af4b];const _0x5cab07=VisuMZ[_0x28726b(0x61d)]['Settings'][_0x28726b(0x2da)]['ColorCrisis'];return this[_0x28726b(0x2a3)](_0x30af4b,_0x5cab07);},ColorManager[_0x420e26(0x29d)]=function(){const _0x3af05b=_0x420e26,_0x366114=_0x3af05b(0x5f7);this['_colorCache']=this[_0x3af05b(0x230)]||{};if(this['_colorCache'][_0x366114])return this[_0x3af05b(0x230)][_0x366114];const _0x2832f9=VisuMZ[_0x3af05b(0x61d)]['Settings']['Color'][_0x3af05b(0x6ff)];return this[_0x3af05b(0x2a3)](_0x366114,_0x2832f9);},ColorManager[_0x420e26(0x379)]=function(){const _0x3269e6=_0x420e26,_0x4c3b41=_0x3269e6(0x5df);this[_0x3269e6(0x230)]=this[_0x3269e6(0x230)]||{};if(this['_colorCache'][_0x4c3b41])return this[_0x3269e6(0x230)][_0x4c3b41];const _0x54c1a1=VisuMZ[_0x3269e6(0x61d)][_0x3269e6(0x12e)][_0x3269e6(0x2da)]['ColorGaugeBack'];return this[_0x3269e6(0x2a3)](_0x4c3b41,_0x54c1a1);},ColorManager[_0x420e26(0x47f)]=function(){const _0x2f4307=_0x420e26,_0x12f320='_stored_hpGaugeColor1';this['_colorCache']=this[_0x2f4307(0x230)]||{};if(this[_0x2f4307(0x230)][_0x12f320])return this['_colorCache'][_0x12f320];const _0x395326=VisuMZ[_0x2f4307(0x61d)][_0x2f4307(0x12e)]['Color'][_0x2f4307(0x634)];return this[_0x2f4307(0x2a3)](_0x12f320,_0x395326);},ColorManager[_0x420e26(0x738)]=function(){const _0x4c2b48=_0x420e26,_0x563f38='_stored_hpGaugeColor2';this[_0x4c2b48(0x230)]=this[_0x4c2b48(0x230)]||{};if(this[_0x4c2b48(0x230)][_0x563f38])return this[_0x4c2b48(0x230)][_0x563f38];const _0x35ad2c=VisuMZ[_0x4c2b48(0x61d)][_0x4c2b48(0x12e)][_0x4c2b48(0x2da)][_0x4c2b48(0x42f)];return this['getColorDataFromPluginParameters'](_0x563f38,_0x35ad2c);},ColorManager[_0x420e26(0x6a6)]=function(){const _0x5c221d=_0x420e26,_0x489048=_0x5c221d(0x604);this['_colorCache']=this[_0x5c221d(0x230)]||{};if(this['_colorCache'][_0x489048])return this[_0x5c221d(0x230)][_0x489048];const _0x767ba=VisuMZ[_0x5c221d(0x61d)]['Settings'][_0x5c221d(0x2da)][_0x5c221d(0x416)];return this[_0x5c221d(0x2a3)](_0x489048,_0x767ba);},ColorManager[_0x420e26(0x2ea)]=function(){const _0x4875c8=_0x420e26,_0x26387a=_0x4875c8(0x43c);this[_0x4875c8(0x230)]=this[_0x4875c8(0x230)]||{};if(this[_0x4875c8(0x230)][_0x26387a])return this[_0x4875c8(0x230)][_0x26387a];const _0x25657c=VisuMZ[_0x4875c8(0x61d)][_0x4875c8(0x12e)][_0x4875c8(0x2da)][_0x4875c8(0x479)];return this[_0x4875c8(0x2a3)](_0x26387a,_0x25657c);},ColorManager[_0x420e26(0x3fe)]=function(){const _0x42b524=_0x420e26,_0x277763=_0x42b524(0x49f);this[_0x42b524(0x230)]=this['_colorCache']||{};if(this['_colorCache'][_0x277763])return this['_colorCache'][_0x277763];const _0x22eff0=VisuMZ[_0x42b524(0x61d)][_0x42b524(0x12e)]['Color']['ColorMPCost'];return this[_0x42b524(0x2a3)](_0x277763,_0x22eff0);},ColorManager[_0x420e26(0x2b7)]=function(){const _0x8575d4=_0x420e26,_0x20faad=_0x8575d4(0x740);this[_0x8575d4(0x230)]=this[_0x8575d4(0x230)]||{};if(this[_0x8575d4(0x230)][_0x20faad])return this['_colorCache'][_0x20faad];const _0x3e3e79=VisuMZ[_0x8575d4(0x61d)][_0x8575d4(0x12e)]['Color']['ColorPowerUp'];return this[_0x8575d4(0x2a3)](_0x20faad,_0x3e3e79);},ColorManager[_0x420e26(0x493)]=function(){const _0x53fab0=_0x420e26,_0x46ca9b=_0x53fab0(0x85c);this[_0x53fab0(0x230)]=this[_0x53fab0(0x230)]||{};if(this[_0x53fab0(0x230)][_0x46ca9b])return this['_colorCache'][_0x46ca9b];const _0x1c0ffc=VisuMZ[_0x53fab0(0x61d)][_0x53fab0(0x12e)][_0x53fab0(0x2da)][_0x53fab0(0x2ba)];return this[_0x53fab0(0x2a3)](_0x46ca9b,_0x1c0ffc);},ColorManager[_0x420e26(0x75c)]=function(){const _0x593dc1=_0x420e26,_0x3e4de5=_0x593dc1(0x260);this[_0x593dc1(0x230)]=this[_0x593dc1(0x230)]||{};if(this['_colorCache'][_0x3e4de5])return this['_colorCache'][_0x3e4de5];const _0x3c20b9=VisuMZ[_0x593dc1(0x61d)][_0x593dc1(0x12e)][_0x593dc1(0x2da)][_0x593dc1(0x244)];return this[_0x593dc1(0x2a3)](_0x3e4de5,_0x3c20b9);},ColorManager[_0x420e26(0x44c)]=function(){const _0x1d97a1=_0x420e26,_0x3ca152=_0x1d97a1(0x217);this[_0x1d97a1(0x230)]=this[_0x1d97a1(0x230)]||{};if(this[_0x1d97a1(0x230)][_0x3ca152])return this[_0x1d97a1(0x230)][_0x3ca152];const _0x532a4f=VisuMZ['CoreEngine'][_0x1d97a1(0x12e)]['Color'][_0x1d97a1(0x428)];return this[_0x1d97a1(0x2a3)](_0x3ca152,_0x532a4f);},ColorManager[_0x420e26(0x3dd)]=function(){const _0x5f0399=_0x420e26,_0x5ea35e=_0x5f0399(0x5b3);this[_0x5f0399(0x230)]=this[_0x5f0399(0x230)]||{};if(this[_0x5f0399(0x230)][_0x5ea35e])return this[_0x5f0399(0x230)][_0x5ea35e];const _0x38a41c=VisuMZ[_0x5f0399(0x61d)][_0x5f0399(0x12e)][_0x5f0399(0x2da)][_0x5f0399(0x822)];return this[_0x5f0399(0x2a3)](_0x5ea35e,_0x38a41c);},ColorManager['tpGaugeColor2']=function(){const _0x207a8e=_0x420e26,_0x4f7a0e=_0x207a8e(0x831);this[_0x207a8e(0x230)]=this[_0x207a8e(0x230)]||{};if(this[_0x207a8e(0x230)][_0x4f7a0e])return this['_colorCache'][_0x4f7a0e];const _0x1eb3bb=VisuMZ[_0x207a8e(0x61d)][_0x207a8e(0x12e)][_0x207a8e(0x2da)][_0x207a8e(0x6cb)];return this[_0x207a8e(0x2a3)](_0x4f7a0e,_0x1eb3bb);},ColorManager['tpCostColor']=function(){const _0x286dc2=_0x420e26,_0x174ae4=_0x286dc2(0x112);this[_0x286dc2(0x230)]=this[_0x286dc2(0x230)]||{};if(this[_0x286dc2(0x230)][_0x174ae4])return this['_colorCache'][_0x174ae4];const _0xbbde48=VisuMZ[_0x286dc2(0x61d)][_0x286dc2(0x12e)][_0x286dc2(0x2da)][_0x286dc2(0x284)];return this[_0x286dc2(0x2a3)](_0x174ae4,_0xbbde48);},ColorManager['pendingColor']=function(){const _0xeca854=_0x420e26,_0x44d6ce=_0xeca854(0x86c);this['_colorCache']=this['_colorCache']||{};if(this[_0xeca854(0x230)][_0x44d6ce])return this[_0xeca854(0x230)][_0x44d6ce];const _0xc09712=VisuMZ[_0xeca854(0x61d)][_0xeca854(0x12e)][_0xeca854(0x2da)][_0xeca854(0x284)];return this[_0xeca854(0x2a3)](_0x44d6ce,_0xc09712);},ColorManager[_0x420e26(0x544)]=function(){const _0x412464=_0x420e26,_0x1cf1d7=_0x412464(0x541);this[_0x412464(0x230)]=this[_0x412464(0x230)]||{};if(this[_0x412464(0x230)][_0x1cf1d7])return this[_0x412464(0x230)][_0x1cf1d7];const _0x31a83b=VisuMZ['CoreEngine'][_0x412464(0x12e)][_0x412464(0x2da)][_0x412464(0x153)];return this['getColorDataFromPluginParameters'](_0x1cf1d7,_0x31a83b);},ColorManager[_0x420e26(0x6f8)]=function(){const _0x2bb647=_0x420e26,_0x2ed1e7=_0x2bb647(0x128);this['_colorCache']=this['_colorCache']||{};if(this[_0x2bb647(0x230)][_0x2ed1e7])return this[_0x2bb647(0x230)][_0x2ed1e7];const _0x25e387=VisuMZ[_0x2bb647(0x61d)][_0x2bb647(0x12e)]['Color'][_0x2bb647(0x20a)];return this['getColorDataFromPluginParameters'](_0x2ed1e7,_0x25e387);},ColorManager[_0x420e26(0x4ba)]=function(){const _0x4a029b=_0x420e26,_0x1f9d2b=_0x4a029b(0x568);this['_colorCache']=this[_0x4a029b(0x230)]||{};if(this[_0x4a029b(0x230)][_0x1f9d2b])return this[_0x4a029b(0x230)][_0x1f9d2b];const _0x1283cf=VisuMZ[_0x4a029b(0x61d)]['Settings']['Color'][_0x4a029b(0x3b1)];return this['getColorDataFromPluginParameters'](_0x1f9d2b,_0x1283cf);},ColorManager[_0x420e26(0x3e9)]=function(){const _0x225cc5=_0x420e26,_0x4df8c9=_0x225cc5(0x1e8);this['_colorCache']=this['_colorCache']||{};if(this[_0x225cc5(0x230)][_0x4df8c9])return this[_0x225cc5(0x230)][_0x4df8c9];const _0xcb8d2f=VisuMZ['CoreEngine'][_0x225cc5(0x12e)][_0x225cc5(0x2da)][_0x225cc5(0x7de)];return this[_0x225cc5(0x2a3)](_0x4df8c9,_0xcb8d2f);},ColorManager['hpColor']=function(_0x205b25){const _0x5e90e6=_0x420e26;return VisuMZ[_0x5e90e6(0x61d)][_0x5e90e6(0x12e)][_0x5e90e6(0x2da)][_0x5e90e6(0x54b)][_0x5e90e6(0x21f)](this,_0x205b25);},ColorManager[_0x420e26(0x54d)]=function(_0x2d4672){const _0x10490f=_0x420e26;return VisuMZ[_0x10490f(0x61d)][_0x10490f(0x12e)][_0x10490f(0x2da)][_0x10490f(0x148)][_0x10490f(0x21f)](this,_0x2d4672);},ColorManager[_0x420e26(0x79b)]=function(_0x4224a6){const _0x43c521=_0x420e26;return VisuMZ[_0x43c521(0x61d)][_0x43c521(0x12e)][_0x43c521(0x2da)][_0x43c521(0x193)]['call'](this,_0x4224a6);},ColorManager[_0x420e26(0x7fa)]=function(_0x1060f6){const _0x5aaa96=_0x420e26;return VisuMZ[_0x5aaa96(0x61d)][_0x5aaa96(0x12e)][_0x5aaa96(0x2da)][_0x5aaa96(0x311)]['call'](this,_0x1060f6);},ColorManager['damageColor']=function(_0x3b3ebd){const _0x259265=_0x420e26;return VisuMZ[_0x259265(0x61d)][_0x259265(0x12e)][_0x259265(0x2da)][_0x259265(0x834)][_0x259265(0x21f)](this,_0x3b3ebd);},ColorManager[_0x420e26(0x518)]=function(){const _0x3c93ee=_0x420e26;return VisuMZ[_0x3c93ee(0x61d)][_0x3c93ee(0x12e)]['Color'][_0x3c93ee(0x3c6)];},ColorManager['outlineColorDmg']=function(){const _0x80a6cd=_0x420e26;return VisuMZ[_0x80a6cd(0x61d)][_0x80a6cd(0x12e)][_0x80a6cd(0x2da)][_0x80a6cd(0x869)]||_0x80a6cd(0x3fb);},ColorManager['outlineColorGauge']=function(){const _0x1b26c2=_0x420e26;return VisuMZ[_0x1b26c2(0x61d)][_0x1b26c2(0x12e)][_0x1b26c2(0x2da)]['OutlineColorGauge']||'rgba(0,\x200,\x200,\x201.0)';},ColorManager['dimColor1']=function(){const _0xb411fe=_0x420e26;return VisuMZ['CoreEngine'][_0xb411fe(0x12e)][_0xb411fe(0x2da)][_0xb411fe(0x196)];},ColorManager['dimColor2']=function(){const _0x2e2445=_0x420e26;return VisuMZ[_0x2e2445(0x61d)]['Settings'][_0x2e2445(0x2da)][_0x2e2445(0x17d)];},ColorManager[_0x420e26(0x658)]=function(){const _0x2b2799=_0x420e26;return VisuMZ[_0x2b2799(0x61d)]['Settings'][_0x2b2799(0x2da)]['ItemBackColor1'];},ColorManager[_0x420e26(0x660)]=function(){const _0x33b570=_0x420e26;return VisuMZ[_0x33b570(0x61d)][_0x33b570(0x12e)]['Color'][_0x33b570(0x70d)];},SceneManager['_storedStack']=[],VisuMZ[_0x420e26(0x61d)][_0x420e26(0x3e6)]=SceneManager['initialize'],SceneManager[_0x420e26(0x5d3)]=function(){const _0x27a9cd=_0x420e26;VisuMZ[_0x27a9cd(0x61d)][_0x27a9cd(0x3e6)][_0x27a9cd(0x21f)](this),this[_0x27a9cd(0x10f)]();},VisuMZ['CoreEngine'][_0x420e26(0x82e)]=SceneManager[_0x420e26(0x156)],SceneManager[_0x420e26(0x156)]=function(_0x352544){const _0x351acf=_0x420e26;if($gameTemp)this['onKeyDownKeysF6F7'](_0x352544);VisuMZ[_0x351acf(0x61d)][_0x351acf(0x82e)][_0x351acf(0x21f)](this,_0x352544);},SceneManager[_0x420e26(0x27f)]=function(_0x379b29){const _0x3324ef=_0x420e26;if(!_0x379b29[_0x3324ef(0x494)]&&!_0x379b29['altKey'])switch(_0x379b29['keyCode']){case 0x75:this['playTestF6']();break;case 0x76:if(Input['isPressed'](_0x3324ef(0x4fb))||Input[_0x3324ef(0x7af)]('ctrl'))return;this['playTestF7']();break;}},SceneManager[_0x420e26(0x7a2)]=function(){const _0x4a45b4=_0x420e26;if($gameTemp[_0x4a45b4(0x103)]()&&VisuMZ['CoreEngine']['Settings'][_0x4a45b4(0x5ed)][_0x4a45b4(0x2c4)]){if('OPdJy'!==_0x4a45b4(0x7bb)){ConfigManager[_0x4a45b4(0x761)]!==0x0?_0x4a45b4(0x173)!=='uOKlX'?(ConfigManager[_0x4a45b4(0x75b)]=0x0,ConfigManager[_0x4a45b4(0x4f9)]=0x0,ConfigManager[_0x4a45b4(0x520)]=0x0,ConfigManager[_0x4a45b4(0x761)]=0x0):this['cursorPageup']():(ConfigManager[_0x4a45b4(0x75b)]=0x64,ConfigManager[_0x4a45b4(0x4f9)]=0x64,ConfigManager[_0x4a45b4(0x520)]=0x64,ConfigManager[_0x4a45b4(0x761)]=0x64);ConfigManager['save']();if(this[_0x4a45b4(0x3cc)]['constructor']===Scene_Options){if(this[_0x4a45b4(0x3cc)]['_optionsWindow'])this[_0x4a45b4(0x3cc)][_0x4a45b4(0x143)][_0x4a45b4(0x560)]();if(this[_0x4a45b4(0x3cc)][_0x4a45b4(0x120)])this['_scene'][_0x4a45b4(0x120)][_0x4a45b4(0x560)]();}}else{const _0xda9417=_0x292138['Abbreviation'],_0x56967c=_0x44b398[_0x4a45b4(0x71e)],_0x5b66a0=_0x4cae71[_0x4a45b4(0x73b)],_0x211238=_0x306392[_0x4a45b4(0x1d3)],_0x302298=new _0xe75c4c(_0x38850b['ValueJS']);_0x5567ef[_0x4a45b4(0x61d)][_0x4a45b4(0x281)][_0xda9417['toUpperCase']()['trim']()]=_0x56967c,_0x2e3fbe[_0x4a45b4(0x61d)][_0x4a45b4(0x778)][_0xda9417[_0x4a45b4(0x741)]()['trim']()]=_0x5b66a0,_0x50bda3[_0x4a45b4(0x61d)][_0x4a45b4(0x28f)][_0xda9417[_0x4a45b4(0x741)]()[_0x4a45b4(0x30b)]()]=_0x211238,_0x219bc4[_0x4a45b4(0x61d)][_0x4a45b4(0x33d)][_0xda9417['toUpperCase']()[_0x4a45b4(0x30b)]()]=_0xda9417,_0x2189bf['defineProperty'](_0x236bbe[_0x4a45b4(0x6a9)],_0xda9417,{'get'(){const _0x4a3840=_0x4a45b4,_0x28d42a=_0x302298[_0x4a3840(0x21f)](this);return _0x211238==='integer'?_0x3ac5e5['round'](_0x28d42a):_0x28d42a;}});}}},SceneManager[_0x420e26(0x815)]=function(){const _0x42c4e5=_0x420e26;$gameTemp[_0x42c4e5(0x103)]()&&VisuMZ[_0x42c4e5(0x61d)]['Settings'][_0x42c4e5(0x5ed)][_0x42c4e5(0x14a)]&&($gameTemp[_0x42c4e5(0x55e)]=!$gameTemp[_0x42c4e5(0x55e)]);},SceneManager[_0x420e26(0x10f)]=function(){const _0x4ca631=_0x420e26;this[_0x4ca631(0x583)]=![],this[_0x4ca631(0x131)]=!VisuMZ[_0x4ca631(0x61d)][_0x4ca631(0x12e)]['UI'][_0x4ca631(0x194)];},SceneManager[_0x420e26(0x52c)]=function(_0x30fc0c){const _0x147f40=_0x420e26;VisuMZ[_0x147f40(0x61d)][_0x147f40(0x12e)]['UI']['SideButtons']&&(this[_0x147f40(0x583)]=_0x30fc0c);},SceneManager[_0x420e26(0x12b)]=function(){const _0x45b9d8=_0x420e26;return this[_0x45b9d8(0x583)];},SceneManager[_0x420e26(0x751)]=function(){const _0x1b4de7=_0x420e26;return this[_0x1b4de7(0x131)];},SceneManager['areButtonsOutsideMainUI']=function(){const _0x2854eb=_0x420e26;return this[_0x2854eb(0x751)]()||this['isSideButtonLayout']();},VisuMZ[_0x420e26(0x61d)]['SceneManager_isGameActive']=SceneManager[_0x420e26(0x805)],SceneManager[_0x420e26(0x805)]=function(){const _0x591684=_0x420e26;return VisuMZ[_0x591684(0x61d)][_0x591684(0x12e)]['QoL'][_0x591684(0x850)]?VisuMZ[_0x591684(0x61d)][_0x591684(0x14f)][_0x591684(0x21f)](this):!![];},SceneManager[_0x420e26(0x4d1)]=function(_0x818067){const _0x53445d=_0x420e26;if(_0x818067 instanceof Error)_0x53445d(0x3bb)===_0x53445d(0x3bb)?this['catchNormalError'](_0x818067):_0x268b64+=_0x67b1eb[_0x53445d(0x6a9)][_0x53445d(0x5f5)]();else{if(_0x818067 instanceof Array&&_0x818067[0x0]===_0x53445d(0x4bd)){if(_0x53445d(0x628)===_0x53445d(0x528))return _0x2410dd(_0x1c0a91)[_0x53445d(0x286)](_0x133c10,_0x2b9f7c)+',';else this['catchLoadError'](_0x818067);}else this[_0x53445d(0x7a8)](_0x818067);}this[_0x53445d(0x551)]();},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x336)]=BattleManager['processEscape'],BattleManager[_0x420e26(0x144)]=function(){const _0x5e58a9=_0x420e26;if(VisuMZ[_0x5e58a9(0x61d)][_0x5e58a9(0x12e)][_0x5e58a9(0x5ed)][_0x5e58a9(0x256)])this[_0x5e58a9(0x2cd)]();else{if(_0x5e58a9(0x407)==='LheVp')return VisuMZ[_0x5e58a9(0x61d)][_0x5e58a9(0x336)]['call'](this);else{const _0x32538e=_0x465f48[_0x5e58a9(0x6c8)](_0x2627a9)+0x1;let _0x3752e2=_0x216a98+'《《《\x20Event\x20%1:\x20%2,\x20Page\x20%3\x20》》》\x0a%4\x0a',_0x3b238=_0x34c77e[_0x5e58a9(0x61d)][_0x5e58a9(0x21e)](_0x13c671[_0x5e58a9(0x27c)]);if(_0x3b238[_0x5e58a9(0x66e)]>0x0){if(_0x41c45a[_0x5e58a9(0x66e)]>0x0)_0x5bf1a2+=_0x4a6e4c+'\x0a\x0a\x0a\x0a\x0a';else{const _0x331ff9=_0x484c4d[_0x340d5e][_0x5e58a9(0x1de)];_0x159cc4+=_0x433ca9+_0x5e58a9(0x5e1)[_0x5e58a9(0x680)](_0x16e8f4,_0x331ff9||_0x5e58a9(0x386))+_0x196fed;}_0x39dc5c+=_0x3752e2[_0x5e58a9(0x680)](_0x40bb8b,_0x429868,_0x32538e,_0x3b238);}}}},BattleManager[_0x420e26(0x2cd)]=function(){const _0x129060=_0x420e26;return $gameParty[_0x129060(0x1af)](),SoundManager[_0x129060(0x1a9)](),this[_0x129060(0x1cd)](),!![];},BattleManager['isTpb']=function(){const _0x4ebadd=_0x420e26;return $gameSystem[_0x4ebadd(0x37b)]()>=0x1;},BattleManager['isActiveTpb']=function(){const _0x48842e=_0x420e26;return $gameSystem[_0x48842e(0x37b)]()===0x1;},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x74f)]=Game_Temp['prototype'][_0x420e26(0x5d3)],Game_Temp[_0x420e26(0x6a9)][_0x420e26(0x5d3)]=function(){const _0xe9bb9b=_0x420e26;VisuMZ[_0xe9bb9b(0x61d)][_0xe9bb9b(0x74f)]['call'](this),this[_0xe9bb9b(0x4c4)](),this[_0xe9bb9b(0x30e)]();},Game_Temp[_0x420e26(0x6a9)][_0x420e26(0x4c4)]=function(){const _0x528830=_0x420e26;VisuMZ[_0x528830(0x61d)]['Settings']['QoL'][_0x528830(0x509)]&&(this['_isPlaytest']=![]);},Game_Temp[_0x420e26(0x6a9)][_0x420e26(0x30e)]=function(){const _0x23267c=_0x420e26;this[_0x23267c(0x396)]=[];},Game_Temp['prototype'][_0x420e26(0x446)]=function(_0x4f0cd5,_0x327478,_0x5c8a1a,_0x4a693a){const _0x26b0f9=_0x420e26;if(!this['showFauxAnimations']())return;_0x5c8a1a=_0x5c8a1a||![],_0x4a693a=_0x4a693a||![];if($dataAnimations[_0x327478]){const _0x27f2ba={'targets':_0x4f0cd5,'animationId':_0x327478,'mirror':_0x5c8a1a,'mute':_0x4a693a};this['_fauxAnimationQueue']['push'](_0x27f2ba);for(const _0x52b7c5 of _0x4f0cd5){_0x52b7c5[_0x26b0f9(0x50c)]&&_0x52b7c5['startAnimation']();}}},Game_Temp['prototype'][_0x420e26(0x20e)]=function(){return!![];},Game_Temp['prototype'][_0x420e26(0x221)]=function(){const _0x34a0f2=_0x420e26;return this['_fauxAnimationQueue'][_0x34a0f2(0x4fb)]();},Game_Temp['prototype']['setLastPluginCommandInterpreter']=function(_0x3e4986){const _0x247a15=_0x420e26;this[_0x247a15(0x189)]=_0x3e4986;},Game_Temp[_0x420e26(0x6a9)][_0x420e26(0x2d2)]=function(){const _0x2141e9=_0x420e26;return this[_0x2141e9(0x189)];},Game_Temp['prototype'][_0x420e26(0x164)]=function(){const _0x1db1c5=_0x420e26;this[_0x1db1c5(0x7bc)]=undefined,this[_0x1db1c5(0x205)]=undefined;},Game_Temp[_0x420e26(0x6a9)][_0x420e26(0x82b)]=function(_0x46c231){const _0x8a07d2=_0x420e26;if($gameMap&&$dataMap&&$dataMap['note']){if(_0x8a07d2(0x814)==='anUZl')return this[_0x8a07d2(0x763)];else this['parseForcedGameTroopSettingsCoreEngine']($dataMap['note']);}const _0x1d5adf=$dataTroops[_0x46c231];if(_0x1d5adf){if('wKWVK'!==_0x8a07d2(0x47d))this['openness']+=this[_0x8a07d2(0x113)](),this[_0x8a07d2(0x6ad)]()&&(this[_0x8a07d2(0x81a)]=![]);else{let _0x3253ff=DataManager[_0x8a07d2(0x168)](_0x1d5adf['id']);this[_0x8a07d2(0x1f0)](_0x3253ff);}}},Game_Temp[_0x420e26(0x6a9)][_0x420e26(0x1f0)]=function(_0x879706){const _0x317e8d=_0x420e26;if(!_0x879706)return;if(_0x879706[_0x317e8d(0x295)](/<(?:FRONTVIEW|FRONT VIEW|FV)>/i))_0x317e8d(0x42b)!==_0x317e8d(0x832)?this['_forcedTroopView']='FV':(_0x3f1f7b[_0x317e8d(0x61d)]['Bitmap_strokeRect'][_0x317e8d(0x21f)](this,_0x2581f0,_0x480869,_0x1b7a6f,_0x143197,_0xa51a48),this['markCoreEngineModified']());else{if(_0x879706[_0x317e8d(0x295)](/<(?:SIDEVIEW|SIDE VIEW|SV)>/i))this[_0x317e8d(0x7bc)]='SV';else{if(_0x879706['match'](/<(?:BATTLEVIEW|BATTLE VIEW):[ ](.*)>/i)){if(_0x317e8d(0x5dd)!==_0x317e8d(0x5dd))return this[_0x317e8d(0x560)]();else{const _0xe9f155=String(RegExp['$1']);if(_0xe9f155['match'](/(?:FRONTVIEW|FRONT VIEW|FV)/i))this[_0x317e8d(0x7bc)]='FV';else _0xe9f155[_0x317e8d(0x295)](/(?:SIDEVIEW|SIDE VIEW|SV)/i)&&(this[_0x317e8d(0x7bc)]='SV');}}}}if(_0x879706['match'](/<(?:DTB)>/i))this[_0x317e8d(0x205)]=0x0;else{if(_0x879706[_0x317e8d(0x295)](/<(?:TPB|ATB)[ ]ACTIVE>/i))this[_0x317e8d(0x205)]=0x1;else{if(_0x879706[_0x317e8d(0x295)](/<(?:TPB|ATB)[ ]WAIT>/i))_0x317e8d(0x15c)!==_0x317e8d(0x15c)?this[_0x317e8d(0x5a1)][_0x317e8d(0x414)](_0x46028a[_0x317e8d(0x7ce)][_0x317e8d(0x18f)]):this['_forcedBattleSys']=0x2;else{if(_0x879706['match'](/<(?:CTB)>/i))Imported[_0x317e8d(0x11d)]&&(this[_0x317e8d(0x205)]='CTB');else{if(_0x879706[_0x317e8d(0x295)](/<(?:STB)>/i))Imported[_0x317e8d(0x127)]&&(this[_0x317e8d(0x205)]='STB');else{if(_0x879706[_0x317e8d(0x295)](/<(?:BTB)>/i)){if(_0x317e8d(0x1c4)!==_0x317e8d(0x1c4))return 0x0;else Imported['VisuMZ_2_BattleSystemBTB']&&(this['_forcedBattleSys']=_0x317e8d(0x692));}else{if(_0x879706[_0x317e8d(0x295)](/<(?:FTB)>/i))Imported['VisuMZ_2_BattleSystemFTB']&&(_0x317e8d(0x302)!==_0x317e8d(0x302)?(_0x820a55[_0x317e8d(0x61d)][_0x317e8d(0x39c)]['call'](this,_0x32efab),this[_0x317e8d(0x521)](_0x5a1ead)):this[_0x317e8d(0x205)]=_0x317e8d(0x70a));else{if(_0x879706[_0x317e8d(0x295)](/<(?:OTB)>/i))_0x317e8d(0x232)===_0x317e8d(0x337)?_0x5a2893(_0x4579fc):Imported[_0x317e8d(0x599)]&&(this[_0x317e8d(0x205)]=_0x317e8d(0x10b));else{if(_0x879706[_0x317e8d(0x295)](/<(?:ETB)>/i))Imported['VisuMZ_2_BattleSystemETB']&&(this['_forcedBattleSys']='ETB');else{if(_0x879706['match'](/<(?:PTB)>/i)){if(_0x317e8d(0x1db)===_0x317e8d(0x206))return-0.5*(_0xea927b[_0x317e8d(0x401)](0x1-_0xc1fb06*_0x549160)-0x1);else{if(Imported[_0x317e8d(0x55f)]){if(_0x317e8d(0x42a)!==_0x317e8d(0x31a))this[_0x317e8d(0x205)]='PTB';else{var _0x44e0ba=_0x57f8d6(_0x37929a['$1']);try{_0xbcafb1+=_0x27a79a(_0x44e0ba);}catch(_0x1a3eb2){if(_0x3c2df9[_0x317e8d(0x103)]())_0x4ec106[_0x317e8d(0x39f)](_0x1a3eb2);}}}}}else{if(_0x879706['match'](/<(?:BATTLEVIEW|BATTLE VIEW):[ ](.*)>/i)){if(_0x317e8d(0x1aa)===_0x317e8d(0x754))return 0xc0;else{const _0x149d3c=String(RegExp['$1']);if(_0x149d3c['match'](/DTB/i))this['_forcedBattleSys']=0x0;else{if(_0x149d3c[_0x317e8d(0x295)](/(?:TPB|ATB)[ ]ACTIVE/i))this[_0x317e8d(0x205)]=0x1;else{if(_0x149d3c[_0x317e8d(0x295)](/(?:TPB|ATB)[ ]WAIT/i))this[_0x317e8d(0x205)]=0x2;else{if(_0x149d3c['match'](/CTB/i)){if(Imported[_0x317e8d(0x11d)]){if(_0x317e8d(0x124)===_0x317e8d(0x188)){const _0x293334=_0x47ec5f[_0x317e8d(0x6c8)](_0x389db8)+0x1;let _0x11d3b8=_0x29c43a+_0x317e8d(0x5d0),_0x2e6d5f=_0x4ee30e[_0x317e8d(0x61d)]['ExtractStrFromList'](_0x326cc8[_0x317e8d(0x27c)]);_0x2e6d5f[_0x317e8d(0x66e)]>0x0&&(_0x4c3bf9[_0x317e8d(0x66e)]>0x0?_0x5ce2be+=_0x1114d4+'\x0a\x0a\x0a\x0a\x0a':_0x430263+=_0xf76895+'〖〖〖\x20Troop\x20%1:\x20%2\x20Script\x20〗〗〗\x0a\x0a'[_0x317e8d(0x680)](_0x57ea64,_0x3fb173[_0x317e8d(0x1de)]||_0x317e8d(0x386))+_0x243b47,_0x48a34d+=_0x11d3b8[_0x317e8d(0x680)](_0x293334,_0x2e6d5f));}else this[_0x317e8d(0x205)]='CTB';}}else{if(_0x149d3c[_0x317e8d(0x295)](/STB/i))'qmjOM'===_0x317e8d(0x5bc)?Imported[_0x317e8d(0x127)]&&(_0x317e8d(0x1df)!=='MuBFP'?this[_0x317e8d(0x205)]=_0x317e8d(0x2bb):this['_forcedBattleSys']=_0x317e8d(0x10b)):(_0x551204[_0x317e8d(0x6a9)][_0x317e8d(0x1bb)][_0x317e8d(0x21f)](this),this[_0x317e8d(0x804)]());else{if(_0x149d3c[_0x317e8d(0x295)](/BTB/i))Imported[_0x317e8d(0x176)]&&(this[_0x317e8d(0x205)]=_0x317e8d(0x692));else{if(_0x149d3c[_0x317e8d(0x295)](/FTB/i))Imported[_0x317e8d(0x511)]&&(this[_0x317e8d(0x205)]='FTB');else{if(_0x149d3c['match'](/OTB/i))Imported[_0x317e8d(0x599)]&&(this[_0x317e8d(0x205)]=_0x317e8d(0x10b));else{if(_0x149d3c[_0x317e8d(0x295)](/ETB/i))Imported[_0x317e8d(0x6d3)]&&(this[_0x317e8d(0x205)]=_0x317e8d(0x4d0));else{if(_0x149d3c[_0x317e8d(0x295)](/PTB/i)){if(Imported[_0x317e8d(0x55f)]){if(_0x317e8d(0x334)===_0x317e8d(0x3b4)){if(_0x16f47a[_0x317e8d(0x51e)][_0x317e8d(0x21f)](this)){const _0x514b43=_0x3ae883[_0x317e8d(0x702)];let _0x564db3=_0x641bca[_0x317e8d(0x2bf)];if(['',_0x317e8d(0x23a)][_0x317e8d(0x52e)](_0x564db3))_0x564db3=_0x4368ef[_0x317e8d(0x21b)][_0x317e8d(0x21f)](this);const _0x1c964b=_0x141f56[_0x317e8d(0x45a)][_0x317e8d(0x21f)](this),_0x5460f2=_0x3d3666['ExtJS']['call'](this);this[_0x317e8d(0x252)](_0x564db3,_0x514b43,_0x1c964b,_0x5460f2),this[_0x317e8d(0x785)](_0x514b43,_0x13fad1[_0x317e8d(0x644)][_0x317e8d(0x38b)](this,_0x5460f2));}}else this['_forcedBattleSys']=_0x317e8d(0x4e7);}}}}}}}}}}}}}}}}}}}}}}}},VisuMZ[_0x420e26(0x61d)]['Game_System_initialize']=Game_System[_0x420e26(0x6a9)]['initialize'],Game_System[_0x420e26(0x6a9)][_0x420e26(0x5d3)]=function(){const _0x1cb84c=_0x420e26;VisuMZ['CoreEngine'][_0x1cb84c(0x3b6)][_0x1cb84c(0x21f)](this),this[_0x1cb84c(0x297)]();},Game_System[_0x420e26(0x6a9)][_0x420e26(0x297)]=function(){const _0x3b85b9=_0x420e26;this['_CoreEngineSettings']={'SideView':$dataSystem[_0x3b85b9(0x225)],'BattleSystem':this[_0x3b85b9(0x4d8)](),'FontSize':$dataSystem[_0x3b85b9(0x487)][_0x3b85b9(0x31e)],'Padding':0xc};},Game_System[_0x420e26(0x6a9)][_0x420e26(0x17a)]=function(){const _0x46e000=_0x420e26;if($gameTemp[_0x46e000(0x7bc)]==='SV'){if(_0x46e000(0x72b)!=='zVFxQ'){const _0x57de51=_0x46e000(0x604);this['_colorCache']=this[_0x46e000(0x230)]||{};if(this['_colorCache'][_0x57de51])return this[_0x46e000(0x230)][_0x57de51];const _0x23dff6=_0x5d49ba['CoreEngine']['Settings'][_0x46e000(0x2da)][_0x46e000(0x416)];return this[_0x46e000(0x2a3)](_0x57de51,_0x23dff6);}else return!![];}else{if($gameTemp[_0x46e000(0x7bc)]==='FV')return![];}if(this[_0x46e000(0x56d)]===undefined)this[_0x46e000(0x297)]();if(this['_CoreEngineSettings']['SideView']===undefined)this['initCoreEngine']();return this['_CoreEngineSettings'][_0x46e000(0x291)];},Game_System[_0x420e26(0x6a9)][_0x420e26(0x5f0)]=function(_0x1b6864){const _0x3147c3=_0x420e26;if(this['_CoreEngineSettings']===undefined)this[_0x3147c3(0x297)]();if(this['_CoreEngineSettings']['SideView']===undefined)this[_0x3147c3(0x297)]();this['_CoreEngineSettings'][_0x3147c3(0x291)]=_0x1b6864;},Game_System[_0x420e26(0x6a9)][_0x420e26(0x2dc)]=function(){const _0x30d3f4=_0x420e26;if(this[_0x30d3f4(0x56d)]===undefined)this[_0x30d3f4(0x297)]();this[_0x30d3f4(0x56d)][_0x30d3f4(0x35e)]=this[_0x30d3f4(0x4d8)]();},Game_System[_0x420e26(0x6a9)]['initialBattleSystem']=function(){const _0x1f52cd=_0x420e26,_0x340821=(VisuMZ['CoreEngine']['Settings'][_0x1f52cd(0x35e)]||_0x1f52cd(0x749))[_0x1f52cd(0x741)]()[_0x1f52cd(0x30b)]();return VisuMZ[_0x1f52cd(0x61d)][_0x1f52cd(0x375)](_0x340821);},Game_System[_0x420e26(0x6a9)][_0x420e26(0x37b)]=function(){const _0x1ecbe8=_0x420e26;if($gameTemp['_forcedBattleSys']!==undefined){if(_0x1ecbe8(0x3a3)===_0x1ecbe8(0x817))throw _0x4216a7;else return $gameTemp[_0x1ecbe8(0x205)];}if(this[_0x1ecbe8(0x56d)]===undefined)this[_0x1ecbe8(0x297)]();if(this['_CoreEngineSettings'][_0x1ecbe8(0x35e)]===undefined)this[_0x1ecbe8(0x2dc)]();return this['_CoreEngineSettings'][_0x1ecbe8(0x35e)];},Game_System[_0x420e26(0x6a9)]['setBattleSystem']=function(_0x3f253c){const _0x42b893=_0x420e26;if(this['_CoreEngineSettings']===undefined)this[_0x42b893(0x297)]();if(this[_0x42b893(0x56d)]['BattleSystem']===undefined)this[_0x42b893(0x2dc)]();this[_0x42b893(0x56d)][_0x42b893(0x35e)]=_0x3f253c;},Game_System['prototype'][_0x420e26(0x777)]=function(){const _0x4b99dd=_0x420e26;if(this[_0x4b99dd(0x56d)]===undefined)this[_0x4b99dd(0x297)]();if(this[_0x4b99dd(0x56d)][_0x4b99dd(0x4e5)]===undefined)this[_0x4b99dd(0x297)]();return this[_0x4b99dd(0x56d)]['FontSize'];},Game_System[_0x420e26(0x6a9)][_0x420e26(0x7f1)]=function(_0x289816){const _0x33c0ec=_0x420e26;if(this[_0x33c0ec(0x56d)]===undefined)this[_0x33c0ec(0x297)]();if(this[_0x33c0ec(0x56d)][_0x33c0ec(0x1e3)]===undefined)this[_0x33c0ec(0x297)]();this[_0x33c0ec(0x56d)][_0x33c0ec(0x4e5)]=_0x289816;},Game_System[_0x420e26(0x6a9)][_0x420e26(0x78e)]=function(){const _0x16630a=_0x420e26;if(this['_CoreEngineSettings']===undefined)this[_0x16630a(0x297)]();if(this[_0x16630a(0x56d)][_0x16630a(0x547)]===undefined)this[_0x16630a(0x297)]();return this[_0x16630a(0x56d)][_0x16630a(0x547)];},Game_System['prototype'][_0x420e26(0x346)]=function(_0x8256ef){const _0x4f150f=_0x420e26;if(this[_0x4f150f(0x56d)]===undefined)this['initCoreEngine']();if(this[_0x4f150f(0x56d)][_0x4f150f(0x1e3)]===undefined)this['initCoreEngine']();this['_CoreEngineSettings'][_0x4f150f(0x547)]=_0x8256ef;},VisuMZ['CoreEngine']['Game_Screen_initialize']=Game_Screen[_0x420e26(0x6a9)][_0x420e26(0x5d3)],Game_Screen[_0x420e26(0x6a9)]['initialize']=function(){const _0x1d5487=_0x420e26;VisuMZ[_0x1d5487(0x61d)][_0x1d5487(0x76e)][_0x1d5487(0x21f)](this),this['initCoreEngineScreenShake']();},Game_Screen[_0x420e26(0x6a9)][_0x420e26(0x64b)]=function(){const _0x2a5c28=_0x420e26,_0xfc7bac=VisuMZ['CoreEngine'][_0x2a5c28(0x12e)]['ScreenShake'];this['_coreEngineShakeStyle']=_0xfc7bac?.[_0x2a5c28(0x82a)]||'random';},Game_Screen[_0x420e26(0x6a9)][_0x420e26(0x22f)]=function(){const _0x15be9a=_0x420e26;if(this['_coreEngineShakeStyle']===undefined)this[_0x15be9a(0x64b)]();return this[_0x15be9a(0x3f8)];},Game_Screen['prototype']['setCoreEngineScreenShakeStyle']=function(_0x1ef9b0){const _0x385e53=_0x420e26;if(this[_0x385e53(0x3f8)]===undefined)this[_0x385e53(0x64b)]();this['_coreEngineShakeStyle']=_0x1ef9b0[_0x385e53(0x7d4)]()['trim']();},Game_Picture[_0x420e26(0x6a9)]['isMapScrollLinked']=function(){const _0x1e7591=_0x420e26;if($gameParty[_0x1e7591(0x737)]())return![];return this[_0x1e7591(0x1de)]()&&this[_0x1e7591(0x1de)]()[_0x1e7591(0x40a)](0x0)==='!';},VisuMZ[_0x420e26(0x61d)]['Game_Picture_x']=Game_Picture['prototype']['x'],Game_Picture[_0x420e26(0x6a9)]['x']=function(){const _0x2a2677=_0x420e26;return this['isMapScrollLinked']()?_0x2a2677(0x4a8)!==_0x2a2677(0x4a8)?this[_0x2a2677(0x576)]():this[_0x2a2677(0x7b2)]():VisuMZ[_0x2a2677(0x61d)][_0x2a2677(0x199)][_0x2a2677(0x21f)](this);},Game_Picture[_0x420e26(0x6a9)][_0x420e26(0x7b2)]=function(){const _0xbdc557=_0x420e26,_0x396337=$gameMap[_0xbdc557(0x40b)]()*$gameMap[_0xbdc557(0x106)]();return this['_x']-_0x396337;},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x570)]=Game_Picture['prototype']['y'],Game_Picture[_0x420e26(0x6a9)]['y']=function(){const _0x242036=_0x420e26;return this[_0x242036(0x79c)]()?this[_0x242036(0x3ea)]():_0x242036(0x170)!==_0x242036(0x842)?VisuMZ[_0x242036(0x61d)][_0x242036(0x570)][_0x242036(0x21f)](this):_0x3bad53['Manual']||_0x242036(0x1c5);},Game_Picture[_0x420e26(0x6a9)][_0x420e26(0x3ea)]=function(){const _0x115e2c=_0x420e26,_0x635ca3=$gameMap['displayY']()*$gameMap[_0x115e2c(0x5fd)]();return this['_y']-_0x635ca3;},Game_Picture[_0x420e26(0x6a9)]['setEasingType']=function(_0x49f28f){const _0x5b192b=_0x420e26;this[_0x5b192b(0x2c8)]=_0x49f28f;},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x69f)]=Game_Picture[_0x420e26(0x6a9)][_0x420e26(0x488)],Game_Picture[_0x420e26(0x6a9)][_0x420e26(0x488)]=function(_0xb20c8c){const _0x59e01a=_0x420e26;return this[_0x59e01a(0x2c8)]=this['_coreEasingType']||0x0,[0x0,0x1,0x2,0x3][_0x59e01a(0x52e)](this[_0x59e01a(0x2c8)])?VisuMZ[_0x59e01a(0x61d)][_0x59e01a(0x69f)][_0x59e01a(0x21f)](this,_0xb20c8c):VisuMZ[_0x59e01a(0x678)](_0xb20c8c,this['_coreEasingType']);},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x366)]=Game_Action[_0x420e26(0x6a9)]['itemHit'],Game_Action['prototype'][_0x420e26(0x5e7)]=function(_0xc46313){const _0x47a5d5=_0x420e26;return VisuMZ[_0x47a5d5(0x61d)][_0x47a5d5(0x12e)][_0x47a5d5(0x5ed)]['ImprovedAccuracySystem']?this['itemHitImprovedAccuracy'](_0xc46313):VisuMZ[_0x47a5d5(0x61d)]['Game_Action_itemHit'][_0x47a5d5(0x21f)](this,_0xc46313);},Game_Action[_0x420e26(0x6a9)]['itemHitImprovedAccuracy']=function(_0x9192fb){const _0x3f8a71=_0x420e26,_0x6a94f5=this[_0x3f8a71(0x4bb)](_0x9192fb),_0x5186a4=this[_0x3f8a71(0x3cd)](_0x9192fb),_0x8e3025=this['targetEvaRate'](_0x9192fb);return _0x6a94f5*(_0x5186a4-_0x8e3025);},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x57c)]=Game_Action[_0x420e26(0x6a9)][_0x420e26(0x557)],Game_Action[_0x420e26(0x6a9)]['itemEva']=function(_0x23cb71){const _0xce55e9=_0x420e26;return VisuMZ['CoreEngine'][_0xce55e9(0x12e)][_0xce55e9(0x5ed)][_0xce55e9(0x58f)]?0x0:VisuMZ['CoreEngine']['Game_Action_itemEva']['call'](this,_0x23cb71);},Game_Action[_0x420e26(0x6a9)][_0x420e26(0x4bb)]=function(_0x497892){const _0x50255e=_0x420e26;return this[_0x50255e(0x135)]()[_0x50255e(0x7be)]*0.01;},Game_Action['prototype'][_0x420e26(0x3cd)]=function(_0x3ee58c){const _0x3be18d=_0x420e26;if(VisuMZ[_0x3be18d(0x61d)][_0x3be18d(0x12e)][_0x3be18d(0x5ed)]['AccuracyBoost']&&this[_0x3be18d(0x110)]())return 0x1;return this[_0x3be18d(0x760)]()?VisuMZ[_0x3be18d(0x61d)][_0x3be18d(0x12e)]['QoL'][_0x3be18d(0x373)]&&this['subject']()[_0x3be18d(0x7a9)]()?this[_0x3be18d(0x6e6)]()['hit']+0.05:this[_0x3be18d(0x6e6)]()[_0x3be18d(0x84d)]:0x1;},Game_Action[_0x420e26(0x6a9)]['targetEvaRate']=function(_0x3a7ed8){const _0xad14eb=_0x420e26;if(this[_0xad14eb(0x6e6)]()[_0xad14eb(0x7a9)]()===_0x3a7ed8[_0xad14eb(0x7a9)]())return 0x0;if(this['isPhysical']())return VisuMZ[_0xad14eb(0x61d)][_0xad14eb(0x12e)][_0xad14eb(0x5ed)][_0xad14eb(0x373)]&&_0x3a7ed8['isEnemy']()?_0x3a7ed8[_0xad14eb(0x200)]-0.05:_0x3a7ed8[_0xad14eb(0x200)];else return this[_0xad14eb(0x584)]()?_0x3a7ed8[_0xad14eb(0x50b)]:0x0;},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x481)]=Game_Action[_0x420e26(0x6a9)][_0x420e26(0x68e)],Game_Action[_0x420e26(0x6a9)]['updateLastTarget']=function(_0x2bfeff){const _0x395557=_0x420e26;VisuMZ['CoreEngine']['Game_Action_updateLastTarget'][_0x395557(0x21f)](this,_0x2bfeff);if(VisuMZ[_0x395557(0x61d)]['Settings']['QoL'][_0x395557(0x58f)])return;const _0x5a9148=_0x2bfeff[_0x395557(0x77b)]();if(_0x5a9148['missed']){if(_0x395557(0x6d1)===_0x395557(0x6d6)){if(!this[_0x395557(0x76a)]())return;_0x97a94d[_0x395557(0x77e)]()?this[_0x395557(0x7f4)]():_0x45f056[_0x395557(0x6a9)]['processCursorMove']['call'](this);}else 0x1-this[_0x395557(0x557)](_0x2bfeff)>this[_0x395557(0x5e7)](_0x2bfeff)&&(_0x5a9148[_0x395557(0x693)]=![],_0x5a9148[_0x395557(0x470)]=!![]);}},VisuMZ[_0x420e26(0x61d)]['Game_BattlerBase_initMembers']=Game_BattlerBase[_0x420e26(0x6a9)][_0x420e26(0x51a)],Game_BattlerBase[_0x420e26(0x6a9)]['initMembers']=function(){const _0x4ff279=_0x420e26;this[_0x4ff279(0x3be)]={},VisuMZ['CoreEngine']['Game_BattlerBase_initMembers'][_0x4ff279(0x21f)](this);},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x1f9)]=Game_BattlerBase[_0x420e26(0x6a9)][_0x420e26(0x560)],Game_BattlerBase['prototype'][_0x420e26(0x560)]=function(){const _0x1adb6f=_0x420e26;this['_cache']={},VisuMZ[_0x1adb6f(0x61d)]['Game_BattlerBase_refresh'][_0x1adb6f(0x21f)](this);},Game_BattlerBase[_0x420e26(0x6a9)][_0x420e26(0x61b)]=function(_0x4f294e){const _0x5dc420=_0x420e26;return this[_0x5dc420(0x3be)]=this[_0x5dc420(0x3be)]||{},this[_0x5dc420(0x3be)][_0x4f294e]!==undefined;},Game_BattlerBase[_0x420e26(0x6a9)]['paramPlus']=function(_0x1cae7c){const _0x32a639=_0x420e26,_0x7921ac=(_0x480b55,_0x1f8697)=>{const _0x3cb762=_0x2320;if(_0x3cb762(0x172)==='sFAJr'){if(!_0x1f8697)return _0x480b55;if(_0x1f8697[_0x3cb762(0x5a4)][_0x3cb762(0x295)](VisuMZ[_0x3cb762(0x61d)][_0x3cb762(0x68d)][_0x3cb762(0x210)][_0x1cae7c])){if(_0x3cb762(0x594)!=='JlNYG'){if(this['_mode']===_0x3cb762(0x421)&&!_0x3c86f8[_0x3cb762(0x539)]())return;if(_0x419071[_0x3cb762(0x77e)]())return;_0x203d4c[_0x3cb762(0x61d)][_0x3cb762(0x6a3)][_0x3cb762(0x21f)](this,_0x26b99b),this['switchModes']('default');}else{var _0x25a47d=Number(RegExp['$1']);_0x480b55+=_0x25a47d;}}if(_0x1f8697[_0x3cb762(0x5a4)][_0x3cb762(0x295)](VisuMZ[_0x3cb762(0x61d)]['RegExp'][_0x3cb762(0x5c2)][_0x1cae7c])){if('vAUnd'===_0x3cb762(0x13a)){if(this[_0x3cb762(0x666)])return;_0x3176d3[_0x3cb762(0x61d)]['Input_pollGamepads'][_0x3cb762(0x21f)](this);}else{var _0xca5d9b=String(RegExp['$1']);try{_0x480b55+=eval(_0xca5d9b);}catch(_0x1c8058){if($gameTemp['isPlaytest']())console[_0x3cb762(0x39f)](_0x1c8058);}}}return _0x480b55;}else return _0x567ba5&&_0x1364b1['_scene']?_0x53f61f[_0x3cb762(0x3cc)]['isWindowMaskingEnabled']():!![];};return this[_0x32a639(0x602)]()[_0x32a639(0x60e)](_0x7921ac,this[_0x32a639(0x5e0)][_0x1cae7c]);},Game_BattlerBase[_0x420e26(0x6a9)][_0x420e26(0x4d2)]=function(_0x1cf6eb){const _0x3147d8=_0x420e26;var _0x311292=_0x3147d8(0x7d5)+(this[_0x3147d8(0x7a9)]()?_0x3147d8(0x1c8):'Enemy')+'ParamMax'+_0x1cf6eb;if(this[_0x3147d8(0x61b)](_0x311292))return this[_0x3147d8(0x3be)][_0x311292];this[_0x3147d8(0x3be)][_0x311292]=eval(VisuMZ[_0x3147d8(0x61d)]['Settings'][_0x3147d8(0x7eb)][_0x311292]);const _0x3d3d0a=(_0x188a5b,_0x308ff2)=>{const _0x3dde1a=_0x3147d8;if(_0x3dde1a(0x62d)===_0x3dde1a(0x62d)){if(!_0x308ff2)return _0x188a5b;if(_0x308ff2[_0x3dde1a(0x5a4)]['match'](VisuMZ[_0x3dde1a(0x61d)][_0x3dde1a(0x68d)][_0x3dde1a(0x4d2)][_0x1cf6eb])){if(_0x3dde1a(0x49c)===_0x3dde1a(0x533))this[_0x3dde1a(0x143)]&&this[_0x3dde1a(0x143)][_0x3dde1a(0x414)](_0x748227[_0x3dde1a(0x7ce)][_0x3dde1a(0x6a1)]);else{var _0x4fcc80=Number(RegExp['$1']);if(_0x4fcc80===0x0)_0x4fcc80=Number[_0x3dde1a(0x2a5)];_0x188a5b=Math[_0x3dde1a(0x609)](_0x188a5b,_0x4fcc80);}}if(_0x308ff2[_0x3dde1a(0x5a4)][_0x3dde1a(0x295)](VisuMZ[_0x3dde1a(0x61d)][_0x3dde1a(0x68d)]['paramMaxJS'][_0x1cf6eb])){var _0x30b5c4=String(RegExp['$1']);try{_0x3dde1a(0x6b4)!==_0x3dde1a(0x6b4)?this[_0x3dde1a(0x412)](_0x201e31[_0x3dde1a(0x623)](this[_0x3dde1a(0x748)](),0x0)):_0x188a5b=Math[_0x3dde1a(0x609)](_0x188a5b,Number(eval(_0x30b5c4)));}catch(_0x57f678){if(_0x3dde1a(0x6eb)===_0x3dde1a(0x5e6))this[_0x3dde1a(0x7bc)]='SV';else{if($gameTemp[_0x3dde1a(0x103)]())console[_0x3dde1a(0x39f)](_0x57f678);}}}return _0x188a5b;}else return this[_0x3dde1a(0x3b9)]()?_0x1686ad[_0x3dde1a(0x53d)](_0x3dde1a(0x4bc)):_0x1e1091[_0x3dde1a(0x6a9)]['buttonAssistKey1'][_0x3dde1a(0x21f)](this);};if(this[_0x3147d8(0x3be)][_0x311292]===0x0)this[_0x3147d8(0x3be)][_0x311292]=Number[_0x3147d8(0x2a5)];return this['_cache'][_0x311292]=this[_0x3147d8(0x602)]()['reduce'](_0x3d3d0a,this[_0x3147d8(0x3be)][_0x311292]),this[_0x3147d8(0x3be)][_0x311292];},Game_BattlerBase[_0x420e26(0x6a9)][_0x420e26(0x41a)]=function(_0x441ae4){const _0x2769d9=_0x420e26,_0x335ded=this[_0x2769d9(0x497)](Game_BattlerBase[_0x2769d9(0x861)],_0x441ae4),_0x117e8a=(_0x5962db,_0x32ea7e)=>{const _0x42c007=_0x2769d9;if(_0x42c007(0x332)===_0x42c007(0x22b))return _0x2de8b5['layoutSettings'][_0x42c007(0x207)][_0x42c007(0x21f)](this);else{if(!_0x32ea7e)return _0x5962db;if(_0x32ea7e['note'][_0x42c007(0x295)](VisuMZ['CoreEngine']['RegExp'][_0x42c007(0x7b1)][_0x441ae4])){if('nLMvk'==='mBYrr'){let _0x27d1af=0x0;return _0x57a431[_0x42c007(0x147)]()?_0x27d1af=this[_0x42c007(0x35a)]():_0x27d1af=_0x58d5bc['CoreEngine'][_0x42c007(0x388)][_0x42c007(0x21f)](this),this[_0x42c007(0x4b7)]()&&this[_0x42c007(0x79f)]()!==_0x42c007(0x624)&&(_0x27d1af-=_0xd51bf6['prototype'][_0x42c007(0x5f5)]()),_0x27d1af;}else{var _0x3f3d42=Number(RegExp['$1'])/0x64;_0x5962db*=_0x3f3d42;}}if(_0x32ea7e['note'][_0x42c007(0x295)](VisuMZ[_0x42c007(0x61d)][_0x42c007(0x68d)][_0x42c007(0x378)][_0x441ae4])){if(_0x42c007(0x2f0)!==_0x42c007(0x2f0))_0x51b55f=_0x5f0a12[_0x42c007(0x24d)](_0x3e3a4b);else{var _0x3f3d42=Number(RegExp['$1']);_0x5962db*=_0x3f3d42;}}if(_0x32ea7e[_0x42c007(0x5a4)][_0x42c007(0x295)](VisuMZ[_0x42c007(0x61d)]['RegExp']['paramRateJS'][_0x441ae4])){if(_0x42c007(0x5a2)===_0x42c007(0x5a2)){var _0x4c31d8=String(RegExp['$1']);try{_0x5962db*=eval(_0x4c31d8);}catch(_0x5dd70c){if($gameTemp[_0x42c007(0x103)]())console['log'](_0x5dd70c);}}else _0x4a8327['prototype'][_0x42c007(0x192)][_0x42c007(0x21f)](this);}return _0x5962db;}};return this[_0x2769d9(0x602)]()[_0x2769d9(0x60e)](_0x117e8a,_0x335ded);},Game_BattlerBase['prototype'][_0x420e26(0x5c8)]=function(_0x5526e9){const _0x3a047b=_0x420e26,_0x5aaed0=(_0x4c4eba,_0x324bbb)=>{const _0xc59524=_0x2320;if(!_0x324bbb)return _0x4c4eba;if(_0x324bbb[_0xc59524(0x5a4)][_0xc59524(0x295)](VisuMZ[_0xc59524(0x61d)][_0xc59524(0x68d)][_0xc59524(0x304)][_0x5526e9])){var _0x29ee0e=Number(RegExp['$1']);_0x4c4eba+=_0x29ee0e;}if(_0x324bbb[_0xc59524(0x5a4)]['match'](VisuMZ[_0xc59524(0x61d)]['RegExp'][_0xc59524(0x1fa)][_0x5526e9])){var _0x4df3f5=String(RegExp['$1']);try{_0x4c4eba+=eval(_0x4df3f5);}catch(_0xf99039){if($gameTemp[_0xc59524(0x103)]())console[_0xc59524(0x39f)](_0xf99039);}}return _0x4c4eba;};return this[_0x3a047b(0x602)]()[_0x3a047b(0x60e)](_0x5aaed0,0x0);},Game_BattlerBase[_0x420e26(0x6a9)]['param']=function(_0x49d264){const _0x3970b3=_0x420e26;let _0x4a2a43='param'+_0x49d264+'Total';if(this[_0x3970b3(0x61b)](_0x4a2a43))return this[_0x3970b3(0x3be)][_0x4a2a43];return this['_cache'][_0x4a2a43]=Math[_0x3970b3(0x3c7)](VisuMZ[_0x3970b3(0x61d)]['Settings'][_0x3970b3(0x7eb)][_0x3970b3(0x178)][_0x3970b3(0x21f)](this,_0x49d264)),this[_0x3970b3(0x3be)][_0x4a2a43];},Game_BattlerBase[_0x420e26(0x6a9)]['xparamPlus']=function(_0x5dc731){const _0x3ddbb2=_0x420e26,_0x2acd14=(_0x4cef60,_0x439d53)=>{const _0x5011cb=_0x2320;if(!_0x439d53)return _0x4cef60;if(_0x439d53[_0x5011cb(0x5a4)][_0x5011cb(0x295)](VisuMZ['CoreEngine'][_0x5011cb(0x68d)][_0x5011cb(0x575)][_0x5dc731])){if(_0x5011cb(0x344)!==_0x5011cb(0x19a)){var _0x60ad19=Number(RegExp['$1'])/0x64;_0x4cef60+=_0x60ad19;}else return this[_0x5011cb(0x769)]?this['_commandWindow']['maxItems']():_0x2a230e[_0x5011cb(0x61d)][_0x5011cb(0x12e)][_0x5011cb(0x4ca)][_0x5011cb(0x66e)];}if(_0x439d53[_0x5011cb(0x5a4)]['match'](VisuMZ[_0x5011cb(0x61d)]['RegExp'][_0x5011cb(0x776)][_0x5dc731])){if(_0x5011cb(0x608)===_0x5011cb(0x608)){var _0x60ad19=Number(RegExp['$1']);_0x4cef60+=_0x60ad19;}else this['_itemWindow']['setBackgroundType'](_0x445241[_0x5011cb(0x7ce)][_0x5011cb(0x574)]);}if(_0x439d53[_0x5011cb(0x5a4)][_0x5011cb(0x295)](VisuMZ[_0x5011cb(0x61d)][_0x5011cb(0x68d)]['xparamPlusJS'][_0x5dc731])){if(_0x5011cb(0x6e2)==='LCJGg')this['refresh'](),_0x545d22['playOk'](),this[_0x5011cb(0x806)]===_0x5011cb(0x854)?this[_0x5011cb(0x637)](0x0):this[_0x5011cb(0x637)](-0x1);else{var _0x3075e2=String(RegExp['$1']);try{_0x4cef60+=eval(_0x3075e2);}catch(_0x5199a7){if(_0x5011cb(0x4cc)!==_0x5011cb(0x4cc))_0xc5d870=!_0xa52a4b;else{if($gameTemp[_0x5011cb(0x103)]())console[_0x5011cb(0x39f)](_0x5199a7);}}}}return _0x4cef60;};return this[_0x3ddbb2(0x602)]()[_0x3ddbb2(0x60e)](_0x2acd14,0x0);},Game_BattlerBase[_0x420e26(0x6a9)][_0x420e26(0x57b)]=function(_0x295bf5){const _0x2807a2=_0x420e26,_0x9a6802=(_0x37dc28,_0x26d841)=>{const _0x3d2cc4=_0x2320;if(_0x3d2cc4(0x2a1)===_0x3d2cc4(0x5f2))_0x5d3cb8[_0x3d2cc4(0x61d)][_0x3d2cc4(0x2d1)][_0x3d2cc4(0x21f)](this),this[_0x3d2cc4(0x29a)]();else{if(!_0x26d841)return _0x37dc28;if(_0x26d841[_0x3d2cc4(0x5a4)][_0x3d2cc4(0x295)](VisuMZ['CoreEngine'][_0x3d2cc4(0x68d)][_0x3d2cc4(0x867)][_0x295bf5])){if(_0x3d2cc4(0x5f3)!==_0x3d2cc4(0x68b)){var _0x2d2d74=Number(RegExp['$1'])/0x64;_0x37dc28*=_0x2d2d74;}else _0x32bc36[_0x3d2cc4(0x7ec)](_0x32aeb8,_0x48d49a);}if(_0x26d841[_0x3d2cc4(0x5a4)][_0x3d2cc4(0x295)](VisuMZ[_0x3d2cc4(0x61d)][_0x3d2cc4(0x68d)][_0x3d2cc4(0x86a)][_0x295bf5])){if(_0x3d2cc4(0x523)!==_0x3d2cc4(0x6ce)){var _0x2d2d74=Number(RegExp['$1']);_0x37dc28*=_0x2d2d74;}else return _0x3d2cc4(0x70a);}if(_0x26d841[_0x3d2cc4(0x5a4)]['match'](VisuMZ[_0x3d2cc4(0x61d)][_0x3d2cc4(0x68d)][_0x3d2cc4(0x6e9)][_0x295bf5])){var _0x30b15b=String(RegExp['$1']);try{_0x37dc28*=eval(_0x30b15b);}catch(_0x157156){if($gameTemp[_0x3d2cc4(0x103)]())console[_0x3d2cc4(0x39f)](_0x157156);}}return _0x37dc28;}};return this[_0x2807a2(0x602)]()[_0x2807a2(0x60e)](_0x9a6802,0x1);},Game_BattlerBase['prototype']['xparamFlatBonus']=function(_0x5c47b2){const _0x42eb47=_0x420e26,_0x1e410b=(_0x887159,_0x894c88)=>{const _0x9318e5=_0x2320;if(!_0x894c88)return _0x887159;if(_0x894c88['note']['match'](VisuMZ[_0x9318e5(0x61d)][_0x9318e5(0x68d)][_0x9318e5(0x2a0)][_0x5c47b2])){if(_0x9318e5(0x6bc)!==_0x9318e5(0x679)){var _0x3277c3=Number(RegExp['$1'])/0x64;_0x887159+=_0x3277c3;}else{const _0x493c9c=_0x53dd89['FunctionName'][_0x9318e5(0x53c)](/[ ]/g,''),_0x4514e5=_0x285848[_0x9318e5(0x45f)];_0x3b3241['CoreEngine'][_0x9318e5(0x2d5)](_0x493c9c,_0x4514e5);}}if(_0x894c88['note'][_0x9318e5(0x295)](VisuMZ['CoreEngine'][_0x9318e5(0x68d)]['xparamFlat2'][_0x5c47b2])){if(_0x9318e5(0x4f6)!=='OrtSq')_0x1de839[_0x9318e5(0x50c)]&&_0xfd40cc[_0x9318e5(0x50c)]();else{var _0x3277c3=Number(RegExp['$1']);_0x887159+=_0x3277c3;}}if(_0x894c88[_0x9318e5(0x5a4)][_0x9318e5(0x295)](VisuMZ[_0x9318e5(0x61d)][_0x9318e5(0x68d)][_0x9318e5(0x7dd)][_0x5c47b2])){var _0x3325a6=String(RegExp['$1']);try{_0x887159+=eval(_0x3325a6);}catch(_0x3e8d0d){if($gameTemp['isPlaytest']())console[_0x9318e5(0x39f)](_0x3e8d0d);}}return _0x887159;};return this[_0x42eb47(0x602)]()[_0x42eb47(0x60e)](_0x1e410b,0x0);},Game_BattlerBase['prototype'][_0x420e26(0x49b)]=function(_0xf4cb64){const _0x2a3dcf=_0x420e26;let _0x4e16dd=_0x2a3dcf(0x49b)+_0xf4cb64+_0x2a3dcf(0x710);if(this[_0x2a3dcf(0x61b)](_0x4e16dd))return this[_0x2a3dcf(0x3be)][_0x4e16dd];return this[_0x2a3dcf(0x3be)][_0x4e16dd]=VisuMZ[_0x2a3dcf(0x61d)][_0x2a3dcf(0x12e)][_0x2a3dcf(0x7eb)][_0x2a3dcf(0x271)][_0x2a3dcf(0x21f)](this,_0xf4cb64),this['_cache'][_0x4e16dd];},Game_BattlerBase[_0x420e26(0x6a9)][_0x420e26(0x301)]=function(_0x253957){const _0x18a2ec=_0x420e26,_0x2d44a2=(_0x58e1d0,_0x25e989)=>{const _0x4b67c6=_0x2320;if(!_0x25e989)return _0x58e1d0;if(_0x25e989['note'][_0x4b67c6(0x295)](VisuMZ[_0x4b67c6(0x61d)]['RegExp'][_0x4b67c6(0x816)][_0x253957])){if('wdWBe'===_0x4b67c6(0x622)){var _0x2307ce=Number(RegExp['$1'])/0x64;_0x58e1d0+=_0x2307ce;}else _0x3b6532['isOptionValid'](_0x4b67c6(0x3db))&&_0x126249[_0x4b67c6(0x61d)][_0x4b67c6(0x12e)]['QoL'][_0x4b67c6(0x46f)]?this[_0x4b67c6(0x7e8)]():_0x2c3927[_0x4b67c6(0x61d)][_0x4b67c6(0x44b)][_0x4b67c6(0x21f)](this);}if(_0x25e989['note'][_0x4b67c6(0x295)](VisuMZ[_0x4b67c6(0x61d)]['RegExp'][_0x4b67c6(0x3df)][_0x253957])){if(_0x4b67c6(0x58a)===_0x4b67c6(0x58a)){var _0x2307ce=Number(RegExp['$1']);_0x58e1d0+=_0x2307ce;}else this['_muteSound']=_0x5ec7e6;}if(_0x25e989[_0x4b67c6(0x5a4)][_0x4b67c6(0x295)](VisuMZ[_0x4b67c6(0x61d)][_0x4b67c6(0x68d)][_0x4b67c6(0x422)][_0x253957])){var _0x150cf2=String(RegExp['$1']);try{_0x4b67c6(0x4a9)===_0x4b67c6(0x4a9)?_0x58e1d0+=eval(_0x150cf2):_0x52cb8b+=_0x4b67c6(0x585)[_0x4b67c6(0x680)](_0x3b6013[_0x4b67c6(0x370)][0x4]);}catch(_0x46add4){if(_0x4b67c6(0x2c0)!==_0x4b67c6(0x2c0))return _0x115ef4[_0x4b67c6(0x7ce)][_0x4b67c6(0x7a3)]['call'](this);else{if($gameTemp[_0x4b67c6(0x103)]())console[_0x4b67c6(0x39f)](_0x46add4);}}}return _0x58e1d0;};return this[_0x18a2ec(0x602)]()[_0x18a2ec(0x60e)](_0x2d44a2,0x0);},Game_BattlerBase['prototype'][_0x420e26(0x2e5)]=function(_0x4a6772){const _0x521698=_0x420e26,_0x1c1f21=(_0x39b46c,_0x2c67c8)=>{const _0x30450d=_0x2320;if(!_0x2c67c8)return _0x39b46c;if(_0x2c67c8['note'][_0x30450d(0x295)](VisuMZ[_0x30450d(0x61d)][_0x30450d(0x68d)][_0x30450d(0x7a7)][_0x4a6772])){if(_0x30450d(0x296)==='GXIvi'){var _0x124aea=Number(RegExp['$1'])/0x64;_0x39b46c*=_0x124aea;}else{const _0x3560f0=_0xeb64e6['y']+(this[_0x30450d(0x5f5)]()-_0x214fd2[_0x30450d(0x5a8)])/0x2;this['drawIcon'](_0x22bd1b,_0x22ee7a['x'],_0x3560f0);const _0x456b05=_0x5307aa[_0x30450d(0x68a)]+0x4;_0x22d836['x']+=_0x456b05,_0x1f3228[_0x30450d(0x351)]-=_0x456b05;}}if(_0x2c67c8['note'][_0x30450d(0x295)](VisuMZ['CoreEngine'][_0x30450d(0x68d)][_0x30450d(0x649)][_0x4a6772])){if(_0x30450d(0x718)!=='eCmoc'){var _0x124aea=Number(RegExp['$1']);_0x39b46c*=_0x124aea;}else this['repositionEnemiesByResolution']();}if(_0x2c67c8['note']['match'](VisuMZ[_0x30450d(0x61d)]['RegExp'][_0x30450d(0x34c)][_0x4a6772])){var _0x410af5=String(RegExp['$1']);try{_0x30450d(0x4ed)!==_0x30450d(0x759)?_0x39b46c*=eval(_0x410af5):(_0x225ff7[_0x30450d(0x61d)][_0x30450d(0x157)]['call'](this),this['setCoreEngineUpdateWindowBg']());}catch(_0x4ba617){if($gameTemp[_0x30450d(0x103)]())console['log'](_0x4ba617);}}return _0x39b46c;};return this[_0x521698(0x602)]()[_0x521698(0x60e)](_0x1c1f21,0x1);},Game_BattlerBase[_0x420e26(0x6a9)]['sparamFlatBonus']=function(_0x2f8e21){const _0x3ab5db=_0x420e26,_0x523767=(_0x28a416,_0x1a975a)=>{const _0x448aa7=_0x2320;if(!_0x1a975a)return _0x28a416;if(_0x1a975a[_0x448aa7(0x5a4)][_0x448aa7(0x295)](VisuMZ['CoreEngine']['RegExp']['sparamFlat1'][_0x2f8e21])){var _0x39f40e=Number(RegExp['$1'])/0x64;_0x28a416+=_0x39f40e;}if(_0x1a975a['note'][_0x448aa7(0x295)](VisuMZ[_0x448aa7(0x61d)][_0x448aa7(0x68d)][_0x448aa7(0x650)][_0x2f8e21])){if(_0x448aa7(0x3fa)!==_0x448aa7(0x326)){var _0x39f40e=Number(RegExp['$1']);_0x28a416+=_0x39f40e;}else{var _0x530b87=_0x5ef198(_0x355464['$1']);_0x267986+=_0x530b87;}}if(_0x1a975a[_0x448aa7(0x5a4)][_0x448aa7(0x295)](VisuMZ[_0x448aa7(0x61d)][_0x448aa7(0x68d)][_0x448aa7(0x535)][_0x2f8e21])){var _0x639a98=String(RegExp['$1']);try{_0x28a416+=eval(_0x639a98);}catch(_0x25f684){if($gameTemp[_0x448aa7(0x103)]())console['log'](_0x25f684);}}return _0x28a416;};return this['traitObjects']()[_0x3ab5db(0x60e)](_0x523767,0x0);},Game_BattlerBase['prototype'][_0x420e26(0x45c)]=function(_0x365d15){const _0x4604dd=_0x420e26;let _0x1f75fe='sparam'+_0x365d15+_0x4604dd(0x710);if(this[_0x4604dd(0x61b)](_0x1f75fe))return this[_0x4604dd(0x3be)][_0x1f75fe];return this['_cache'][_0x1f75fe]=VisuMZ['CoreEngine'][_0x4604dd(0x12e)]['Param'][_0x4604dd(0x5b1)][_0x4604dd(0x21f)](this,_0x365d15),this[_0x4604dd(0x3be)][_0x1f75fe];},Game_BattlerBase[_0x420e26(0x6a9)]['paramValueByName']=function(_0x370c89,_0x4cee21){const _0x1c6bf7=_0x420e26;if(typeof paramId===_0x1c6bf7(0x83c))return this[_0x1c6bf7(0x646)](_0x370c89);_0x370c89=String(_0x370c89||'')['toUpperCase']();if(_0x370c89===_0x1c6bf7(0x864))return this[_0x1c6bf7(0x646)](0x0);if(_0x370c89===_0x1c6bf7(0x794))return this[_0x1c6bf7(0x646)](0x1);if(_0x370c89===_0x1c6bf7(0x7f0))return this[_0x1c6bf7(0x646)](0x2);if(_0x370c89===_0x1c6bf7(0x67f))return this['param'](0x3);if(_0x370c89===_0x1c6bf7(0x606))return this['param'](0x4);if(_0x370c89===_0x1c6bf7(0x54e))return this[_0x1c6bf7(0x646)](0x5);if(_0x370c89==='AGI')return this[_0x1c6bf7(0x646)](0x6);if(_0x370c89===_0x1c6bf7(0x856))return this[_0x1c6bf7(0x646)](0x7);if(_0x370c89===_0x1c6bf7(0x81e))return _0x4cee21?String(Math[_0x1c6bf7(0x3c7)](this['xparam'](0x0)*0x64))+'%':this[_0x1c6bf7(0x49b)](0x0);if(_0x370c89===_0x1c6bf7(0x431))return _0x4cee21?String(Math[_0x1c6bf7(0x3c7)](this[_0x1c6bf7(0x49b)](0x1)*0x64))+'%':this[_0x1c6bf7(0x49b)](0x1);if(_0x370c89===_0x1c6bf7(0x267))return _0x4cee21?String(Math['round'](this[_0x1c6bf7(0x49b)](0x2)*0x64))+'%':this[_0x1c6bf7(0x49b)](0x2);if(_0x370c89===_0x1c6bf7(0x2b3))return _0x4cee21?String(Math[_0x1c6bf7(0x3c7)](this[_0x1c6bf7(0x49b)](0x3)*0x64))+'%':this[_0x1c6bf7(0x49b)](0x3);if(_0x370c89===_0x1c6bf7(0x6d4))return _0x4cee21?String(Math['round'](this[_0x1c6bf7(0x49b)](0x4)*0x64))+'%':this[_0x1c6bf7(0x49b)](0x4);if(_0x370c89===_0x1c6bf7(0x59f))return _0x4cee21?String(Math['round'](this[_0x1c6bf7(0x49b)](0x5)*0x64))+'%':this['xparam'](0x5);if(_0x370c89===_0x1c6bf7(0x240))return _0x4cee21?String(Math['round'](this[_0x1c6bf7(0x49b)](0x6)*0x64))+'%':this['xparam'](0x6);if(_0x370c89===_0x1c6bf7(0x6d2))return _0x4cee21?String(Math[_0x1c6bf7(0x3c7)](this[_0x1c6bf7(0x49b)](0x7)*0x64))+'%':this[_0x1c6bf7(0x49b)](0x7);if(_0x370c89==='MRG')return _0x4cee21?String(Math[_0x1c6bf7(0x3c7)](this['xparam'](0x8)*0x64))+'%':this[_0x1c6bf7(0x49b)](0x8);if(_0x370c89===_0x1c6bf7(0x662))return _0x4cee21?String(Math[_0x1c6bf7(0x3c7)](this[_0x1c6bf7(0x49b)](0x9)*0x64))+'%':this[_0x1c6bf7(0x49b)](0x9);if(_0x370c89===_0x1c6bf7(0x321))return _0x4cee21?String(Math[_0x1c6bf7(0x3c7)](this[_0x1c6bf7(0x45c)](0x0)*0x64))+'%':this['sparam'](0x0);if(_0x370c89===_0x1c6bf7(0x419))return _0x4cee21?String(Math[_0x1c6bf7(0x3c7)](this[_0x1c6bf7(0x45c)](0x1)*0x64))+'%':this['sparam'](0x1);if(_0x370c89===_0x1c6bf7(0x464))return _0x4cee21?String(Math['round'](this[_0x1c6bf7(0x45c)](0x2)*0x64))+'%':this[_0x1c6bf7(0x45c)](0x2);if(_0x370c89===_0x1c6bf7(0x448))return _0x4cee21?String(Math[_0x1c6bf7(0x3c7)](this['sparam'](0x3)*0x64))+'%':this[_0x1c6bf7(0x45c)](0x3);if(_0x370c89===_0x1c6bf7(0x5b6))return _0x4cee21?String(Math[_0x1c6bf7(0x3c7)](this['sparam'](0x4)*0x64))+'%':this[_0x1c6bf7(0x45c)](0x4);if(_0x370c89===_0x1c6bf7(0x141))return _0x4cee21?String(Math[_0x1c6bf7(0x3c7)](this[_0x1c6bf7(0x45c)](0x5)*0x64))+'%':this[_0x1c6bf7(0x45c)](0x5);if(_0x370c89===_0x1c6bf7(0x6db))return _0x4cee21?String(Math[_0x1c6bf7(0x3c7)](this[_0x1c6bf7(0x45c)](0x6)*0x64))+'%':this[_0x1c6bf7(0x45c)](0x6);if(_0x370c89===_0x1c6bf7(0x70f))return _0x4cee21?String(Math[_0x1c6bf7(0x3c7)](this[_0x1c6bf7(0x45c)](0x7)*0x64))+'%':this[_0x1c6bf7(0x45c)](0x7);if(_0x370c89===_0x1c6bf7(0x35f))return _0x4cee21?String(Math[_0x1c6bf7(0x3c7)](this[_0x1c6bf7(0x45c)](0x8)*0x64))+'%':this[_0x1c6bf7(0x45c)](0x8);if(_0x370c89===_0x1c6bf7(0x353))return _0x4cee21?String(Math['round'](this[_0x1c6bf7(0x45c)](0x9)*0x64))+'%':this[_0x1c6bf7(0x45c)](0x9);if(VisuMZ[_0x1c6bf7(0x61d)]['CustomParamAbb'][_0x370c89]){const _0x2034be=VisuMZ['CoreEngine'][_0x1c6bf7(0x33d)][_0x370c89],_0x5db63b=this[_0x2034be];if(VisuMZ[_0x1c6bf7(0x61d)][_0x1c6bf7(0x28f)][_0x370c89]===_0x1c6bf7(0x2fc)){if('oIAyZ'!==_0x1c6bf7(0x573)){_0x5137af[_0x1c6bf7(0x314)](_0x33ab18,_0x2ce4bc);const _0xa72b78=_0xd0482b[_0x1c6bf7(0x1d3)]||'random',_0x52dd56=_0x35c577[_0x1c6bf7(0x310)][_0x1c6bf7(0x1d0)](0x1,0x9),_0xd646f0=_0x5a66e4[_0x1c6bf7(0x2be)]['clamp'](0x1,0x9),_0x108657=_0xd3a1b7[_0x1c6bf7(0x848)]||0x1,_0x3726b9=_0x323305[_0x1c6bf7(0x5bd)];_0x5e1237[_0x1c6bf7(0x181)](_0xa72b78),_0x5a33d8[_0x1c6bf7(0x1e9)](_0x52dd56,_0xd646f0,_0x108657);if(_0x3726b9){const _0x3dacc0=_0x112f71[_0x1c6bf7(0x2d2)]();if(_0x3dacc0)_0x3dacc0['wait'](_0x108657);}}else return _0x5db63b;}else return _0x4cee21?String(Math[_0x1c6bf7(0x3c7)](_0x5db63b*0x64))+'%':_0x5db63b;}return'';},Game_BattlerBase[_0x420e26(0x6a9)][_0x420e26(0x4b4)]=function(){const _0x214fd1=_0x420e26;return this[_0x214fd1(0x63c)]()&&this['_hp']<this[_0x214fd1(0x115)]*VisuMZ[_0x214fd1(0x61d)][_0x214fd1(0x12e)]['Param'][_0x214fd1(0x13c)];},Game_Battler[_0x420e26(0x6a9)][_0x420e26(0x38d)]=function(){SoundManager['playMiss'](),this['requestMotion']('evade');},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x821)]=Game_Actor[_0x420e26(0x6a9)][_0x420e26(0x262)],Game_Actor[_0x420e26(0x6a9)][_0x420e26(0x262)]=function(_0x3c7295){const _0x4ded0a=_0x420e26;if(this[_0x4ded0a(0x438)]>0x63)return this[_0x4ded0a(0x596)](_0x3c7295);return VisuMZ[_0x4ded0a(0x61d)][_0x4ded0a(0x821)][_0x4ded0a(0x21f)](this,_0x3c7295);},Game_Actor[_0x420e26(0x6a9)][_0x420e26(0x596)]=function(_0x39799e){const _0x18a211=_0x420e26,_0x116c65=this[_0x18a211(0x389)]()[_0x18a211(0x614)][_0x39799e][0x63],_0x4e312b=this[_0x18a211(0x389)]()[_0x18a211(0x614)][_0x39799e][0x62];return _0x116c65+(_0x116c65-_0x4e312b)*(this[_0x18a211(0x438)]-0x63);},VisuMZ['CoreEngine'][_0x420e26(0x264)]=Game_Actor['prototype'][_0x420e26(0x220)],Game_Actor[_0x420e26(0x6a9)][_0x420e26(0x220)]=function(_0x34aca0,_0x551527){const _0x46de4f=_0x420e26;$gameTemp['_changingClass']=!![],VisuMZ[_0x46de4f(0x61d)]['Game_Actor_changeClass'][_0x46de4f(0x21f)](this,_0x34aca0,_0x551527),$gameTemp[_0x46de4f(0x4f2)]=undefined;},VisuMZ['CoreEngine'][_0x420e26(0x719)]=Game_Actor[_0x420e26(0x6a9)][_0x420e26(0x5a3)],Game_Actor[_0x420e26(0x6a9)]['levelUp']=function(){const _0x624cda=_0x420e26;VisuMZ[_0x624cda(0x61d)][_0x624cda(0x719)][_0x624cda(0x21f)](this);if(!$gameTemp['_changingClass'])this[_0x624cda(0x1b5)]();},Game_Actor[_0x420e26(0x6a9)]['levelUpRecovery']=function(){const _0x50318f=_0x420e26;this['_cache']={};if(VisuMZ['CoreEngine']['Settings']['QoL']['LevelUpFullHp'])this[_0x50318f(0x80e)]=this[_0x50318f(0x115)];if(VisuMZ['CoreEngine'][_0x50318f(0x12e)][_0x50318f(0x5ed)][_0x50318f(0x3d4)])this['_mp']=this[_0x50318f(0x462)];},Game_Actor[_0x420e26(0x6a9)]['expRate']=function(){const _0x8dcdcb=_0x420e26;if(this[_0x8dcdcb(0x36f)]())return 0x1;const _0x11dd72=this['nextLevelExp']()-this[_0x8dcdcb(0x1fe)](),_0x439000=this[_0x8dcdcb(0x6dc)]()-this[_0x8dcdcb(0x1fe)]();return(_0x439000/_0x11dd72)[_0x8dcdcb(0x1d0)](0x0,0x1);},Game_Actor['prototype'][_0x420e26(0x602)]=function(){const _0x426f63=_0x420e26,_0x12c0f1=Game_Battler[_0x426f63(0x6a9)][_0x426f63(0x602)]['call'](this);for(const _0x32001e of this['equips']()){_0x32001e&&_0x12c0f1['push'](_0x32001e);}return _0x12c0f1[_0x426f63(0x5e8)](this['currentClass'](),this[_0x426f63(0x4ec)]()),_0x12c0f1;},Object[_0x420e26(0x512)](Game_Enemy[_0x420e26(0x6a9)],'level',{'get':function(){const _0x592425=_0x420e26;return this[_0x592425(0x154)]();},'configurable':!![]}),Game_Enemy[_0x420e26(0x6a9)]['getLevel']=function(){const _0x1b34c9=_0x420e26;return this['enemy']()[_0x1b34c9(0x438)];},Game_Enemy[_0x420e26(0x6a9)]['moveRelativeToResolutionChange']=function(){const _0x2356cc=_0x420e26;!this['_repositioned']&&(this['_screenY']+=Math[_0x2356cc(0x3c7)]((Graphics[_0x2356cc(0x17f)]-0x270)/0x2),this[_0x2356cc(0x323)]-=Math[_0x2356cc(0x60d)]((Graphics[_0x2356cc(0x17f)]-Graphics['boxHeight'])/0x2),$gameSystem[_0x2356cc(0x17a)]()?this[_0x2356cc(0x43b)]-=Math['floor']((Graphics[_0x2356cc(0x351)]-Graphics['boxWidth'])/0x2):this[_0x2356cc(0x43b)]+=Math[_0x2356cc(0x3c7)]((Graphics[_0x2356cc(0x288)]-0x330)/0x2)),this[_0x2356cc(0x393)]=!![];},Game_Party[_0x420e26(0x6a9)][_0x420e26(0x324)]=function(){const _0x3d5071=_0x420e26;return VisuMZ['CoreEngine']['Settings'][_0x3d5071(0x726)]['GoldMax'];},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x6fc)]=Game_Party[_0x420e26(0x6a9)][_0x420e26(0x42c)],Game_Party[_0x420e26(0x6a9)][_0x420e26(0x42c)]=function(_0x48e138){const _0x28f006=_0x420e26;if(VisuMZ[_0x28f006(0x61d)][_0x28f006(0x12e)][_0x28f006(0x5ed)][_0x28f006(0x228)]&&DataManager[_0x28f006(0x397)](_0x48e138))return;VisuMZ['CoreEngine'][_0x28f006(0x6fc)]['call'](this,_0x48e138);},Game_Party[_0x420e26(0x6a9)][_0x420e26(0x6ac)]=function(){const _0x426ece=_0x420e26,_0x4a6084=VisuMZ['CoreEngine'][_0x426ece(0x12e)]['QoL'],_0x13f0c3=_0x4a6084[_0x426ece(0x580)]??0x63;let _0x5024dc=[];if(_0x4a6084['BTestItems']??!![]){if('MmjgU'!==_0x426ece(0x279))_0x5024dc=_0x5024dc[_0x426ece(0x661)]($dataItems);else return _0x459f67[_0x426ece(0x7ce)][_0x426ece(0x471)]['call'](this);}(_0x4a6084[_0x426ece(0x687)]??!![])&&(_0x5024dc=_0x5024dc[_0x426ece(0x661)]($dataWeapons));(_0x4a6084['BTestArmors']??!![])&&(_0x5024dc=_0x5024dc['concat']($dataArmors));for(const _0x21e370 of _0x5024dc){if(!_0x21e370)continue;if(_0x21e370[_0x426ece(0x1de)]['trim']()<=0x0)continue;if(_0x21e370[_0x426ece(0x1de)][_0x426ece(0x295)](/-----/i))continue;this[_0x426ece(0x84c)](_0x21e370,_0x13f0c3);}},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x563)]=Game_Troop[_0x420e26(0x6a9)]['setup'],Game_Troop[_0x420e26(0x6a9)][_0x420e26(0x75a)]=function(_0x545127){const _0x959833=_0x420e26;$gameTemp[_0x959833(0x164)](),$gameTemp[_0x959833(0x82b)](_0x545127),VisuMZ[_0x959833(0x61d)]['Game_Troop_setup']['call'](this,_0x545127);},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x245)]=Game_Map[_0x420e26(0x6a9)][_0x420e26(0x75a)],Game_Map[_0x420e26(0x6a9)][_0x420e26(0x75a)]=function(_0x76c497){const _0x3f2891=_0x420e26;VisuMZ['CoreEngine']['Game_Map_setup'][_0x3f2891(0x21f)](this,_0x76c497),this[_0x3f2891(0x43a)](_0x76c497);},Game_Map['prototype'][_0x420e26(0x43a)]=function(){const _0x4d7616=_0x420e26;this['_hideTileShadows']=VisuMZ['CoreEngine'][_0x4d7616(0x12e)][_0x4d7616(0x5ed)][_0x4d7616(0x248)]||![];if($dataMap&&$dataMap[_0x4d7616(0x5a4)]){if('RIWJY'===_0x4d7616(0x23c)){if(_0x2e3295&&_0x2b3dc6[_0x4d7616(0x6e0)]())return;_0x530d6b[_0x4d7616(0x61d)]['Tilemap_addShadow'][_0x4d7616(0x21f)](this,_0x3d194d,_0x3ce3a7,_0x475fda,_0x49613b);}else{if($dataMap[_0x4d7616(0x5a4)][_0x4d7616(0x295)](/<SHOW TILE SHADOWS>/i))this['_hideTileShadows']=![];if($dataMap[_0x4d7616(0x5a4)]['match'](/<HIDE TILE SHADOWS>/i))this[_0x4d7616(0x74a)]=!![];}}},Game_Map['prototype'][_0x420e26(0x6e0)]=function(){const _0x76c0b3=_0x420e26;if(this['_hideTileShadows']===undefined)this[_0x76c0b3(0x43a)]();return this[_0x76c0b3(0x74a)];},VisuMZ[_0x420e26(0x61d)]['Game_Character_processMoveCommand']=Game_Character['prototype']['processMoveCommand'],Game_Character[_0x420e26(0x6a9)][_0x420e26(0x149)]=function(_0x137933){const _0x5b3412=_0x420e26;try{if(_0x5b3412(0x208)===_0x5b3412(0x67d)){const _0x283a64=this['picture']();!_0x283a64[_0x5b3412(0x5ee)]()?_0x3286d5['CoreEngine']['Sprite_Picture_updateOrigin'][_0x5b3412(0x21f)](this):(this['anchor']['x']=_0x283a64['anchor']()['x'],this[_0x5b3412(0x5ee)]['y']=_0x283a64['anchor']()['y']);}else VisuMZ['CoreEngine']['Game_Character_processMoveCommand'][_0x5b3412(0x21f)](this,_0x137933);}catch(_0x3df068){if($gameTemp[_0x5b3412(0x103)]())console['log'](_0x3df068);}},Game_Player[_0x420e26(0x6a9)]['makeEncounterCount']=function(){const _0x3a8e10=_0x420e26,_0x2aae59=$gameMap[_0x3a8e10(0x3d6)]();this['_encounterCount']=Math[_0x3a8e10(0x2ef)](_0x2aae59)+Math[_0x3a8e10(0x2ef)](_0x2aae59)+this[_0x3a8e10(0x7bf)]();},Game_Player[_0x420e26(0x6a9)][_0x420e26(0x7bf)]=function(){const _0x56e24c=_0x420e26;return $dataMap&&$dataMap[_0x56e24c(0x5a4)]&&$dataMap[_0x56e24c(0x5a4)][_0x56e24c(0x295)](/<MINIMUM ENCOUNTER STEPS:[ ](\d+)>/i)?Number(RegExp['$1']):VisuMZ[_0x56e24c(0x61d)][_0x56e24c(0x12e)][_0x56e24c(0x5ed)][_0x56e24c(0x315)];},VisuMZ['CoreEngine'][_0x420e26(0x857)]=Game_Event[_0x420e26(0x6a9)]['isCollidedWithEvents'],Game_Event[_0x420e26(0x6a9)][_0x420e26(0x364)]=function(_0xa30fe1,_0x28c32c){const _0xe4aaf7=_0x420e26;return this['isSmartEventCollisionOn']()?this[_0xe4aaf7(0x15e)](_0xa30fe1,_0x28c32c):VisuMZ[_0xe4aaf7(0x61d)]['Game_Event_isCollidedWithEvents'][_0xe4aaf7(0x21f)](this,_0xa30fe1,_0x28c32c);},Game_Event[_0x420e26(0x6a9)][_0x420e26(0x3e4)]=function(){const _0x2a377f=_0x420e26;return VisuMZ[_0x2a377f(0x61d)][_0x2a377f(0x12e)][_0x2a377f(0x5ed)]['SmartEventCollisionPriority'];},Game_Event[_0x420e26(0x6a9)][_0x420e26(0x15e)]=function(_0x5e64b2,_0x13b456){const _0x9567b5=_0x420e26;if(!this[_0x9567b5(0x1b2)]())return![];else{const _0xcf9cff=$gameMap[_0x9567b5(0x75f)](_0x5e64b2,_0x13b456)[_0x9567b5(0x705)](_0x3f9bd7=>_0x3f9bd7['isNormalPriority']());return _0xcf9cff[_0x9567b5(0x66e)]>0x0;}},VisuMZ['CoreEngine'][_0x420e26(0x5c0)]=Game_Interpreter[_0x420e26(0x6a9)]['command105'],Game_Interpreter[_0x420e26(0x6a9)][_0x420e26(0x698)]=function(_0x5db500){const _0x54014f=_0x420e26,_0x5ee141=this[_0x54014f(0x2c2)]();if(_0x5ee141[_0x54014f(0x295)](/\/\/[ ]SCRIPT[ ]CALL/i)){if('zeeGQ'!==_0x54014f(0x5ca))this[_0x54014f(0x19d)](_0x27a49b);else return this[_0x54014f(0x4a0)](_0x5ee141);}else return VisuMZ[_0x54014f(0x61d)]['Game_Interpreter_command105'][_0x54014f(0x21f)](this,_0x5db500);},Game_Interpreter[_0x420e26(0x6a9)][_0x420e26(0x2c2)]=function(){const _0x3dab76=_0x420e26;let _0x5028cb='',_0xfd2274=this[_0x3dab76(0x325)]+0x1;while(this[_0x3dab76(0x16f)][_0xfd2274]&&this[_0x3dab76(0x16f)][_0xfd2274][_0x3dab76(0x2ce)]===0x195){_0x5028cb+=this[_0x3dab76(0x16f)][_0xfd2274]['parameters'][0x0]+'\x0a',_0xfd2274++;}return _0x5028cb;},Game_Interpreter[_0x420e26(0x6a9)]['runCombinedScrollingTextAsCode']=function(_0x96d2d7){const _0x54c018=_0x420e26;try{eval(_0x96d2d7);}catch(_0x5a00a2){if($gameTemp[_0x54c018(0x103)]()){if(_0x54c018(0x32e)!==_0x54c018(0x32e))var _0x3c9c11=_0x248dde['ApplyEasing'](_0x4d5ff2*0x2-0x1,_0x54c018(0x235))*0.5+0.5;else console['log'](_0x54c018(0x4b0)),console[_0x54c018(0x39f)](_0x5a00a2);}}return!![];},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x818)]=Game_Interpreter[_0x420e26(0x6a9)][_0x420e26(0x79e)],Game_Interpreter['prototype'][_0x420e26(0x79e)]=function(_0xa7f87e){const _0x53134c=_0x420e26;try{VisuMZ['CoreEngine']['Game_Interpreter_command111'][_0x53134c(0x21f)](this,_0xa7f87e);}catch(_0x304be9){$gameTemp[_0x53134c(0x103)]()&&(console[_0x53134c(0x39f)](_0x53134c(0x3b0)),console[_0x53134c(0x39f)](_0x304be9)),this[_0x53134c(0x2ec)]();}return!![];},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x791)]=Game_Interpreter[_0x420e26(0x6a9)][_0x420e26(0x270)],Game_Interpreter[_0x420e26(0x6a9)][_0x420e26(0x270)]=function(_0x834a02){const _0x6845de=_0x420e26;try{VisuMZ[_0x6845de(0x61d)][_0x6845de(0x791)][_0x6845de(0x21f)](this,_0x834a02);}catch(_0x1c8772){if(_0x6845de(0x1fb)==='vaWKs')return _0x5ad45['CoreEngine'][_0x6845de(0x366)][_0x6845de(0x21f)](this,_0x4041b3);else $gameTemp[_0x6845de(0x103)]()&&(console[_0x6845de(0x39f)](_0x6845de(0x513)),console['log'](_0x1c8772));}return!![];},VisuMZ['CoreEngine'][_0x420e26(0x78f)]=Game_Interpreter['prototype'][_0x420e26(0x863)],Game_Interpreter[_0x420e26(0x6a9)]['command355']=function(){const _0x3d8458=_0x420e26;try{'JTlCc'==='JTlCc'?VisuMZ[_0x3d8458(0x61d)][_0x3d8458(0x78f)][_0x3d8458(0x21f)](this):this[_0x3d8458(0x1d7)][_0x3d8458(0x414)](_0x4f6ee3[_0x3d8458(0x7ce)][_0x3d8458(0x47a)]);}catch(_0xbd9fa3){$gameTemp[_0x3d8458(0x103)]()&&(console[_0x3d8458(0x39f)](_0x3d8458(0x5d2)),console['log'](_0xbd9fa3));}return!![];},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x5ae)]=Game_Interpreter[_0x420e26(0x6a9)][_0x420e26(0x7c9)],Game_Interpreter[_0x420e26(0x6a9)][_0x420e26(0x7c9)]=function(_0x5ec4c6){const _0x5ca020=_0x420e26;return $gameTemp[_0x5ca020(0x653)](this),VisuMZ[_0x5ca020(0x61d)][_0x5ca020(0x5ae)][_0x5ca020(0x21f)](this,_0x5ec4c6);},Scene_Base[_0x420e26(0x6a9)][_0x420e26(0x7f2)]=function(){const _0xa2614a=_0x420e26;return VisuMZ[_0xa2614a(0x61d)][_0xa2614a(0x12e)]['UI']['FadeSpeed'];},Scene_Base[_0x420e26(0x6a9)]['isBottomHelpMode']=function(){const _0x3e9810=_0x420e26;return VisuMZ['CoreEngine'][_0x3e9810(0x12e)]['UI'][_0x3e9810(0x3bd)];},Scene_Base[_0x420e26(0x6a9)]['isBottomButtonMode']=function(){const _0x49f73d=_0x420e26;return VisuMZ[_0x49f73d(0x61d)][_0x49f73d(0x12e)]['UI'][_0x49f73d(0x843)];},Scene_Base[_0x420e26(0x6a9)][_0x420e26(0x495)]=function(){const _0x53e4c5=_0x420e26;return VisuMZ[_0x53e4c5(0x61d)][_0x53e4c5(0x12e)]['UI'][_0x53e4c5(0x611)];},Scene_Base[_0x420e26(0x6a9)][_0x420e26(0x406)]=function(){const _0x39436c=_0x420e26;return VisuMZ[_0x39436c(0x61d)][_0x39436c(0x12e)]['UI'][_0x39436c(0x348)];},Scene_Base['prototype']['buttonAreaHeight']=function(){const _0x2ecf54=_0x420e26;return VisuMZ['CoreEngine'][_0x2ecf54(0x12e)]['UI'][_0x2ecf54(0x213)];},Scene_Base[_0x420e26(0x6a9)][_0x420e26(0x676)]=function(){const _0x52fcd2=_0x420e26;return VisuMZ[_0x52fcd2(0x61d)]['Settings'][_0x52fcd2(0x180)][_0x52fcd2(0x305)];},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x548)]=Scene_Base['prototype'][_0x420e26(0x6fe)],Scene_Base['prototype'][_0x420e26(0x6fe)]=function(){const _0x3e2121=_0x420e26;VisuMZ[_0x3e2121(0x61d)][_0x3e2121(0x548)][_0x3e2121(0x21f)](this),this[_0x3e2121(0x257)](),this[_0x3e2121(0x1d1)]['x']=Math[_0x3e2121(0x3c7)](this[_0x3e2121(0x1d1)]['x']),this[_0x3e2121(0x1d1)]['y']=Math[_0x3e2121(0x3c7)](this['_windowLayer']['y']);},Scene_Base[_0x420e26(0x6a9)][_0x420e26(0x257)]=function(){},Scene_Base[_0x420e26(0x6a9)][_0x420e26(0x797)]=function(){const _0x520719=_0x420e26;return TextManager['getInputMultiButtonStrings'](_0x520719(0x5fc),_0x520719(0x4f1));},Scene_Base[_0x420e26(0x6a9)][_0x420e26(0x7f7)]=function(){const _0x523dc8=_0x420e26;return TextManager['getInputButtonString'](_0x523dc8(0x4bc));},Scene_Base[_0x420e26(0x6a9)]['buttonAssistKey3']=function(){const _0x5d9b89=_0x420e26;return TextManager['getInputButtonString'](_0x5d9b89(0x4fb));},Scene_Base['prototype'][_0x420e26(0x3ed)]=function(){const _0x21570b=_0x420e26;return TextManager[_0x21570b(0x53d)]('ok');},Scene_Base['prototype'][_0x420e26(0x491)]=function(){const _0x24c87b=_0x420e26;return TextManager[_0x24c87b(0x53d)](_0x24c87b(0x29c));},Scene_Base[_0x420e26(0x6a9)][_0x420e26(0x54a)]=function(){const _0xa956ed=_0x420e26;return this[_0xa956ed(0x303)]&&this[_0xa956ed(0x303)][_0xa956ed(0x2f8)]?'APLVA'===_0xa956ed(0x59a)?TextManager[_0xa956ed(0x13b)]:this[_0xa956ed(0x560)]():'';},Scene_Base[_0x420e26(0x6a9)][_0x420e26(0x25f)]=function(){return'';},Scene_Base[_0x420e26(0x6a9)][_0x420e26(0x238)]=function(){return'';},Scene_Base[_0x420e26(0x6a9)]['buttonAssistText4']=function(){const _0x41d387=_0x420e26;return TextManager[_0x41d387(0x2dd)];},Scene_Base[_0x420e26(0x6a9)][_0x420e26(0x7d2)]=function(){return TextManager['buttonAssistCancel'];},Scene_Base[_0x420e26(0x6a9)]['buttonAssistOffset1']=function(){return 0x0;},Scene_Base[_0x420e26(0x6a9)][_0x420e26(0x4b3)]=function(){return 0x0;},Scene_Base['prototype']['buttonAssistOffset3']=function(){return 0x0;},Scene_Base[_0x420e26(0x6a9)]['buttonAssistOffset4']=function(){return 0x0;},Scene_Base[_0x420e26(0x6a9)][_0x420e26(0x224)]=function(){return 0x0;},VisuMZ['CoreEngine'][_0x420e26(0x451)]=Scene_Boot[_0x420e26(0x6a9)][_0x420e26(0x865)],Scene_Boot[_0x420e26(0x6a9)][_0x420e26(0x865)]=function(){const _0xb84c45=_0x420e26;VisuMZ[_0xb84c45(0x61d)][_0xb84c45(0x451)][_0xb84c45(0x21f)](this),this[_0xb84c45(0x86e)]();},Scene_Boot[_0x420e26(0x6a9)][_0x420e26(0x86e)]=function(){const _0x40e9fd=_0x420e26,_0x36cc61=['animations','battlebacks1','battlebacks2',_0x40e9fd(0x27e),'enemies',_0x40e9fd(0x765),_0x40e9fd(0x62e),_0x40e9fd(0x840),'sv_actors',_0x40e9fd(0x773),_0x40e9fd(0x5af),_0x40e9fd(0x23e),'titles1',_0x40e9fd(0x7e5)];for(const _0x1a5900 of _0x36cc61){if(_0x40e9fd(0x4dc)!=='MEFVI'){const _0x383a88=VisuMZ['CoreEngine'][_0x40e9fd(0x12e)][_0x40e9fd(0x16e)][_0x1a5900],_0x5cc0d4='img/%1/'[_0x40e9fd(0x680)](_0x1a5900);for(const _0x3e84df of _0x383a88){ImageManager[_0x40e9fd(0x7ec)](_0x5cc0d4,_0x3e84df);}}else(_0x472135>=_0x52f54f||_0xa1877b&&_0x3afd53===0x1)&&this['smoothSelect']((_0x1c2e5a-_0x5607c4+_0x4973c5)%_0x40f80b);}},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x44b)]=Scene_Boot[_0x420e26(0x6a9)]['startNormalGame'],Scene_Boot[_0x420e26(0x6a9)][_0x420e26(0x331)]=function(){const _0x1f5559=_0x420e26;if(Utils['isOptionValid'](_0x1f5559(0x3db))&&VisuMZ['CoreEngine'][_0x1f5559(0x12e)][_0x1f5559(0x5ed)][_0x1f5559(0x46f)])this[_0x1f5559(0x7e8)]();else{if(_0x1f5559(0x562)!==_0x1f5559(0x562)){if(_0x2d0c26[_0x1f5559(0x737)]())return![];return this[_0x1f5559(0x1de)]()&&this[_0x1f5559(0x1de)]()[_0x1f5559(0x40a)](0x0)==='!';}else VisuMZ[_0x1f5559(0x61d)][_0x1f5559(0x44b)][_0x1f5559(0x21f)](this);}},Scene_Boot[_0x420e26(0x6a9)][_0x420e26(0x7e8)]=function(){const _0xdb1365=_0x420e26;DataManager[_0xdb1365(0x2a8)](),SceneManager[_0xdb1365(0x697)](Scene_Map);},Scene_Boot[_0x420e26(0x6a9)][_0x420e26(0x770)]=function(){const _0xdd2c55=_0x420e26,_0x407b29=$dataSystem['advanced'][_0xdd2c55(0x5a9)],_0x1e6167=$dataSystem['advanced']['uiAreaHeight'],_0x5bd387=VisuMZ['CoreEngine'][_0xdd2c55(0x12e)]['UI'][_0xdd2c55(0x22e)];Graphics['boxWidth']=_0x407b29-_0x5bd387*0x2,Graphics['boxHeight']=_0x1e6167-_0x5bd387*0x2,this[_0xdd2c55(0x52f)]();},VisuMZ[_0x420e26(0x61d)]['Scene_Boot_updateDocumentTitle']=Scene_Boot[_0x420e26(0x6a9)][_0x420e26(0x79d)],Scene_Boot[_0x420e26(0x6a9)]['updateDocumentTitle']=function(){const _0x3039f2=_0x420e26;this[_0x3039f2(0x195)]()?this[_0x3039f2(0x17c)]():VisuMZ['CoreEngine']['Scene_Boot_updateDocumentTitle'][_0x3039f2(0x21f)](this);},Scene_Boot[_0x420e26(0x6a9)][_0x420e26(0x195)]=function(){const _0x5bb805=_0x420e26;if(Scene_Title['subtitle']==='')return![];if(Scene_Title['subtitle']==='Subtitle')return![];if(Scene_Title[_0x5bb805(0x458)]==='')return![];if(Scene_Title[_0x5bb805(0x458)]===_0x5bb805(0x38f))return![];return!![];},Scene_Boot[_0x420e26(0x6a9)]['makeDocumentTitle']=function(){const _0x292d63=_0x420e26,_0x22d57e=$dataSystem[_0x292d63(0x2bd)],_0x127bae=Scene_Title[_0x292d63(0x3e0)]||'',_0x1744b8=Scene_Title['version']||'',_0x32caa7=VisuMZ[_0x292d63(0x61d)][_0x292d63(0x12e)][_0x292d63(0x53a)][_0x292d63(0x3c8)][_0x292d63(0x46d)],_0x3764b5=_0x32caa7[_0x292d63(0x680)](_0x22d57e,_0x127bae,_0x1744b8);document['title']=_0x3764b5;},Scene_Boot[_0x420e26(0x6a9)]['determineSideButtonLayoutValid']=function(){const _0x39fb40=_0x420e26;if(VisuMZ['CoreEngine'][_0x39fb40(0x12e)]['UI'][_0x39fb40(0x3e3)]){const _0x397c5e=Graphics[_0x39fb40(0x351)]-Graphics[_0x39fb40(0x288)]-VisuMZ['CoreEngine'][_0x39fb40(0x12e)]['UI'][_0x39fb40(0x22e)]*0x2,_0xc10e9e=Sprite_Button['prototype'][_0x39fb40(0x450)][_0x39fb40(0x21f)](this)*0x4;if(_0x397c5e>=_0xc10e9e)SceneManager['setSideButtonLayout'](!![]);}},Scene_Title[_0x420e26(0x3e0)]=VisuMZ['CoreEngine']['Settings']['MenuLayout'][_0x420e26(0x3c8)][_0x420e26(0x82f)],Scene_Title['version']=VisuMZ[_0x420e26(0x61d)][_0x420e26(0x12e)][_0x420e26(0x53a)]['Title'][_0x420e26(0x4a3)],Scene_Title['pictureButtons']=VisuMZ[_0x420e26(0x61d)][_0x420e26(0x12e)][_0x420e26(0x2ca)],VisuMZ[_0x420e26(0x61d)][_0x420e26(0x620)]=Scene_Title[_0x420e26(0x6a9)]['drawGameTitle'],Scene_Title[_0x420e26(0x6a9)][_0x420e26(0x76c)]=function(){const _0x53eb66=_0x420e26;VisuMZ['CoreEngine'][_0x53eb66(0x12e)][_0x53eb66(0x53a)][_0x53eb66(0x3c8)][_0x53eb66(0x76c)][_0x53eb66(0x21f)](this);if(Scene_Title[_0x53eb66(0x3e0)]!==''&&Scene_Title[_0x53eb66(0x3e0)]!==_0x53eb66(0x82f))this[_0x53eb66(0x597)]();if(Scene_Title[_0x53eb66(0x458)]!==''&&Scene_Title[_0x53eb66(0x458)]!==_0x53eb66(0x38f))this['drawGameVersion']();},Scene_Title[_0x420e26(0x6a9)][_0x420e26(0x597)]=function(){const _0x10843f=_0x420e26;VisuMZ[_0x10843f(0x61d)][_0x10843f(0x12e)][_0x10843f(0x53a)]['Title']['drawGameSubtitle']['call'](this);},Scene_Title[_0x420e26(0x6a9)]['drawGameVersion']=function(){const _0x83f5ad=_0x420e26;VisuMZ['CoreEngine'][_0x83f5ad(0x12e)][_0x83f5ad(0x53a)][_0x83f5ad(0x3c8)]['drawGameVersion'][_0x83f5ad(0x21f)](this);},Scene_Title['prototype'][_0x420e26(0x640)]=function(){const _0x5eea20=_0x420e26;this[_0x5eea20(0x5b5)]();const _0x287972=$dataSystem[_0x5eea20(0x6f3)][_0x5eea20(0x3b8)],_0x535e19=this[_0x5eea20(0x727)]();this[_0x5eea20(0x769)]=new Window_TitleCommand(_0x535e19),this[_0x5eea20(0x769)][_0x5eea20(0x414)](_0x287972);const _0x563b7b=this['commandWindowRect']();this[_0x5eea20(0x769)]['move'](_0x563b7b['x'],_0x563b7b['y'],_0x563b7b[_0x5eea20(0x351)],_0x563b7b['height']),this[_0x5eea20(0x4c2)](this[_0x5eea20(0x769)]);},Scene_Title[_0x420e26(0x6a9)]['commandWindowRows']=function(){const _0x44e5e1=_0x420e26;return this[_0x44e5e1(0x769)]?this[_0x44e5e1(0x769)][_0x44e5e1(0x673)]():VisuMZ[_0x44e5e1(0x61d)][_0x44e5e1(0x12e)][_0x44e5e1(0x4ca)][_0x44e5e1(0x66e)];},Scene_Title[_0x420e26(0x6a9)][_0x420e26(0x727)]=function(){const _0x140181=_0x420e26;return VisuMZ[_0x140181(0x61d)][_0x140181(0x12e)][_0x140181(0x53a)][_0x140181(0x3c8)][_0x140181(0x207)]['call'](this);},Scene_Title['prototype'][_0x420e26(0x5b5)]=function(){const _0x48de05=_0x420e26;for(const _0x2a962b of Scene_Title[_0x48de05(0x768)]){if(_0x48de05(0x7e3)==='Aunkf')return this[_0x48de05(0x303)]&&this[_0x48de05(0x303)][_0x48de05(0x2f8)]?_0x39000b[_0x48de05(0x13b)]:'';else{const _0x13a7ea=new Sprite_TitlePictureButton(_0x2a962b);this[_0x48de05(0x39a)](_0x13a7ea);}}},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x6b6)]=Scene_Map[_0x420e26(0x6a9)][_0x420e26(0x5d3)],Scene_Map[_0x420e26(0x6a9)][_0x420e26(0x5d3)]=function(){const _0x4a35f9=_0x420e26;VisuMZ[_0x4a35f9(0x61d)][_0x4a35f9(0x6b6)][_0x4a35f9(0x21f)](this),$gameTemp['clearForcedGameTroopSettingsCoreEngine']();},VisuMZ[_0x420e26(0x61d)]['Scene_Map_updateMainMultiply']=Scene_Map['prototype'][_0x420e26(0x52a)],Scene_Map[_0x420e26(0x6a9)][_0x420e26(0x52a)]=function(){const _0x1c9848=_0x420e26;VisuMZ[_0x1c9848(0x61d)][_0x1c9848(0x26e)]['call'](this),$gameTemp[_0x1c9848(0x55e)]&&!$gameMessage[_0x1c9848(0x582)]()&&(this['updateMain'](),SceneManager[_0x1c9848(0x64a)]());},Scene_Map[_0x420e26(0x6a9)][_0x420e26(0x707)]=function(){const _0x54f08d=_0x420e26;Scene_Message[_0x54f08d(0x6a9)][_0x54f08d(0x707)]['call'](this),!SceneManager[_0x54f08d(0x7e1)](Scene_Battle)&&(this[_0x54f08d(0x60c)]['update'](),this[_0x54f08d(0x2b2)]['hide'](),this['_windowLayer'][_0x54f08d(0x2f8)]=![],SceneManager['snapForBackground']()),$gameScreen['clearZoom']();},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x6fd)]=Scene_Map[_0x420e26(0x6a9)][_0x420e26(0x6ab)],Scene_Map[_0x420e26(0x6a9)][_0x420e26(0x6ab)]=function(){const _0x6337f0=_0x420e26;VisuMZ[_0x6337f0(0x61d)][_0x6337f0(0x6fd)]['call'](this),SceneManager['isSideButtonLayout']()&&this[_0x6337f0(0x275)]();},Scene_Map[_0x420e26(0x6a9)][_0x420e26(0x275)]=function(){const _0x27f345=_0x420e26;this['_menuButton']['x']=Graphics[_0x27f345(0x288)]+0x4;},VisuMZ['CoreEngine'][_0x420e26(0x1cf)]=Scene_Map[_0x420e26(0x6a9)][_0x420e26(0x846)],Scene_Map[_0x420e26(0x6a9)][_0x420e26(0x846)]=function(){const _0x379f2a=_0x420e26;VisuMZ['CoreEngine'][_0x379f2a(0x1cf)][_0x379f2a(0x21f)](this),this[_0x379f2a(0x42e)]();},Scene_Map[_0x420e26(0x6a9)][_0x420e26(0x42e)]=function(){const _0x3aeee4=_0x420e26;Input[_0x3aeee4(0x58b)](_0x3aeee4(0x229))&&(ConfigManager['alwaysDash']=!ConfigManager[_0x3aeee4(0x587)],ConfigManager[_0x3aeee4(0x1be)]());},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x593)]=Scene_MenuBase[_0x420e26(0x6a9)][_0x420e26(0x362)],Scene_MenuBase[_0x420e26(0x6a9)][_0x420e26(0x362)]=function(){const _0x205486=_0x420e26;let _0x3d23b2=0x0;return SceneManager[_0x205486(0x147)]()?_0x3d23b2=this['helpAreaTopSideButtonLayout']():_0x3d23b2=VisuMZ[_0x205486(0x61d)][_0x205486(0x593)][_0x205486(0x21f)](this),this[_0x205486(0x4b7)]()&&this[_0x205486(0x79f)]()===_0x205486(0x1ef)&&(_0x205486(0x2a9)===_0x205486(0x2a9)?_0x3d23b2+=Window_ButtonAssist['prototype'][_0x205486(0x5f5)]():_0x4bbeeb=0x0),_0x3d23b2;},Scene_MenuBase[_0x420e26(0x6a9)][_0x420e26(0x78b)]=function(){const _0x582777=_0x420e26;if(this['isBottomHelpMode']()){if(_0x582777(0x247)!=='WWrHa')return this[_0x582777(0x755)]();else _0xf28612=_0x420c92[_0x582777(0x609)](_0x581d8f,_0x318260(_0x1a3808(_0x2742de)));}else return 0x0;},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x486)]=Scene_MenuBase[_0x420e26(0x6a9)][_0x420e26(0x565)],Scene_MenuBase[_0x420e26(0x6a9)][_0x420e26(0x565)]=function(){const _0x5cbab8=_0x420e26;return SceneManager[_0x5cbab8(0x147)]()?this[_0x5cbab8(0x7dc)]():VisuMZ[_0x5cbab8(0x61d)][_0x5cbab8(0x486)][_0x5cbab8(0x21f)](this);},Scene_MenuBase[_0x420e26(0x6a9)]['mainAreaTopSideButtonLayout']=function(){const _0x4e7d74=_0x420e26;return!this['isBottomHelpMode']()?this[_0x4e7d74(0x540)]():0x0;},VisuMZ[_0x420e26(0x61d)]['Scene_MenuBase_mainAreaHeight']=Scene_MenuBase['prototype'][_0x420e26(0x66b)],Scene_MenuBase['prototype'][_0x420e26(0x66b)]=function(){const _0x29b0b2=_0x420e26;let _0x44e27f=0x0;return SceneManager['areButtonsOutsideMainUI']()?_0x29b0b2(0x4be)!==_0x29b0b2(0x5a7)?_0x44e27f=this['mainAreaHeightSideButtonLayout']():this[_0x29b0b2(0x274)]={'duration':_0xe5c83b,'wholeDuration':_0x2917a6,'type':_0x3762de,'targetX':_0x25651c,'targetY':_0x57267e,'targetScaleX':_0x270c9c,'targetScaleY':_0xb0c700,'targetOpacity':_0x46fcad,'targetBackOpacity':_0x549f97,'targetContentsOpacity':_0x152e2f}:_0x44e27f=VisuMZ[_0x29b0b2(0x61d)][_0x29b0b2(0x388)][_0x29b0b2(0x21f)](this),this['isMenuButtonAssistEnabled']()&&this[_0x29b0b2(0x79f)]()!==_0x29b0b2(0x624)&&(_0x44e27f-=Window_ButtonAssist[_0x29b0b2(0x6a9)][_0x29b0b2(0x5f5)]()),_0x44e27f;},Scene_MenuBase[_0x420e26(0x6a9)][_0x420e26(0x35a)]=function(){const _0x3a6065=_0x420e26;return Graphics[_0x3a6065(0x713)]-this['helpAreaHeight']();},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x6f1)]=Scene_MenuBase[_0x420e26(0x6a9)][_0x420e26(0x192)],Scene_MenuBase[_0x420e26(0x6a9)][_0x420e26(0x192)]=function(){const _0x36395d=_0x420e26;this['_backgroundFilter']=new PIXI[(_0x36395d(0x34b))][(_0x36395d(0x492))](clamp=!![]),this[_0x36395d(0x659)]=new Sprite(),this[_0x36395d(0x659)][_0x36395d(0x187)]=SceneManager[_0x36395d(0x5d4)](),this[_0x36395d(0x659)]['filters']=[this['_backgroundFilter']],this[_0x36395d(0x39a)](this[_0x36395d(0x659)]),this[_0x36395d(0x73e)](0xc0),this[_0x36395d(0x73e)](this['getBackgroundOpacity']()),this[_0x36395d(0x382)]();},Scene_MenuBase[_0x420e26(0x6a9)]['getBackgroundOpacity']=function(){const _0x3e167d=_0x420e26,_0x39092d=String(this[_0x3e167d(0x329)][_0x3e167d(0x1de)]),_0x54a89b=this[_0x3e167d(0x734)](_0x39092d);return _0x54a89b?_0x54a89b[_0x3e167d(0x27a)]:0xc0;},Scene_MenuBase[_0x420e26(0x6a9)][_0x420e26(0x382)]=function(){const _0x537489=_0x420e26,_0x548680=String(this[_0x537489(0x329)][_0x537489(0x1de)]),_0x10edd9=this[_0x537489(0x734)](_0x548680);_0x10edd9&&(_0x10edd9['BgFilename1']!==''||_0x10edd9[_0x537489(0x7cc)]!=='')&&(this[_0x537489(0x85d)]=new Sprite(ImageManager[_0x537489(0x83e)](_0x10edd9[_0x537489(0x621)])),this[_0x537489(0x5db)]=new Sprite(ImageManager[_0x537489(0x800)](_0x10edd9[_0x537489(0x7cc)])),this[_0x537489(0x39a)](this[_0x537489(0x85d)]),this[_0x537489(0x39a)](this[_0x537489(0x5db)]),this[_0x537489(0x85d)][_0x537489(0x187)][_0x537489(0x6cc)](this[_0x537489(0x7e6)][_0x537489(0x38b)](this,this[_0x537489(0x85d)])),this['_backSprite2']['bitmap'][_0x537489(0x6cc)](this[_0x537489(0x7e6)][_0x537489(0x38b)](this,this[_0x537489(0x5db)])));},Scene_MenuBase[_0x420e26(0x6a9)]['getCustomBackgroundSettings']=function(_0x3fc60f){const _0x377c17=_0x420e26;return VisuMZ[_0x377c17(0x61d)][_0x377c17(0x12e)][_0x377c17(0x664)][_0x3fc60f]||VisuMZ['CoreEngine']['Settings'][_0x377c17(0x664)][_0x377c17(0x688)];},Scene_MenuBase[_0x420e26(0x6a9)]['adjustSprite']=function(_0x27cc57){this['scaleSprite'](_0x27cc57),this['centerSprite'](_0x27cc57);},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x45d)]=Scene_MenuBase[_0x420e26(0x6a9)][_0x420e26(0x81f)],Scene_MenuBase[_0x420e26(0x6a9)][_0x420e26(0x81f)]=function(){const _0x2a3ceb=_0x420e26;VisuMZ[_0x2a3ceb(0x61d)]['Scene_MenuBase_createCancelButton']['call'](this),SceneManager[_0x2a3ceb(0x12b)]()&&this[_0x2a3ceb(0x701)]();},Scene_MenuBase[_0x420e26(0x6a9)]['moveCancelButtonSideButtonLayout']=function(){const _0x573f87=_0x420e26;this[_0x573f87(0x197)]['x']=Graphics[_0x573f87(0x288)]+0x4;},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x456)]=Scene_MenuBase[_0x420e26(0x6a9)][_0x420e26(0x656)],Scene_MenuBase[_0x420e26(0x6a9)][_0x420e26(0x656)]=function(){const _0x45bce4=_0x420e26;VisuMZ['CoreEngine'][_0x45bce4(0x456)]['call'](this);if(SceneManager[_0x45bce4(0x12b)]()){if('vjcWv'!==_0x45bce4(0x59d))this[_0x45bce4(0x43d)]();else{_0x1e7720-=_0x245d37;if(_0x2ef42d<=0x0)_0x31237e=0x0;this[_0x45bce4(0x412)](_0x24ec32);}}},Scene_MenuBase['prototype'][_0x420e26(0x43d)]=function(){const _0x419878=_0x420e26;this[_0x419878(0x303)]['x']=-0x1*(this[_0x419878(0x303)]['width']+this[_0x419878(0x1a2)]['width']+0x8),this[_0x419878(0x1a2)]['x']=-0x1*(this[_0x419878(0x1a2)][_0x419878(0x351)]+0x4);},Scene_MenuBase[_0x420e26(0x6a9)][_0x420e26(0x4b7)]=function(){const _0x1e6d81=_0x420e26;return VisuMZ[_0x1e6d81(0x61d)][_0x1e6d81(0x12e)][_0x1e6d81(0x7c1)]['Enable'];},Scene_MenuBase[_0x420e26(0x6a9)][_0x420e26(0x79f)]=function(){const _0x1bf1a0=_0x420e26;return SceneManager[_0x1bf1a0(0x12b)]()||SceneManager['areButtonsHidden']()?VisuMZ[_0x1bf1a0(0x61d)][_0x1bf1a0(0x12e)][_0x1bf1a0(0x7c1)][_0x1bf1a0(0x62b)]:_0x1bf1a0(0x624);},Scene_MenuBase[_0x420e26(0x6a9)]['createButtonAssistWindow']=function(){const _0x1b05e8=_0x420e26;if(!this[_0x1b05e8(0x4b7)]())return;const _0x36e5d3=this[_0x1b05e8(0x3d9)]();this[_0x1b05e8(0x357)]=new Window_ButtonAssist(_0x36e5d3),this['addWindow'](this[_0x1b05e8(0x357)]);},Scene_MenuBase[_0x420e26(0x6a9)]['buttonAssistWindowRect']=function(){const _0x3ec582=_0x420e26;return this['getButtonAssistLocation']()==='button'?this['buttonAssistWindowButtonRect']():_0x3ec582(0x4f5)===_0x3ec582(0x1c9)?_0x25f07e[_0x3ec582(0x61d)][_0x3ec582(0x57c)][_0x3ec582(0x21f)](this,_0x2b9301):this[_0x3ec582(0x576)]();},Scene_MenuBase[_0x420e26(0x6a9)][_0x420e26(0x74b)]=function(){const _0x565ada=_0x420e26,_0x5df77d=ConfigManager[_0x565ada(0x86f)]?(Sprite_Button[_0x565ada(0x6a9)]['blockWidth']()+0x6)*0x2:0x0,_0x595b73=this['buttonY'](),_0x5affa1=Graphics[_0x565ada(0x288)]-_0x5df77d*0x2,_0x487015=this[_0x565ada(0x3c0)]();return new Rectangle(_0x5df77d,_0x595b73,_0x5affa1,_0x487015);},Scene_MenuBase[_0x420e26(0x6a9)]['buttonAssistWindowSideRect']=function(){const _0x1fada4=_0x420e26,_0xc93009=Graphics[_0x1fada4(0x288)],_0x2f7ddf=Window_ButtonAssist[_0x1fada4(0x6a9)]['lineHeight'](),_0x5ef4a1=0x0;let _0x5460b2=0x0;return this[_0x1fada4(0x79f)]()===_0x1fada4(0x1ef)?_0x5460b2=0x0:_0x5460b2=Graphics['boxHeight']-_0x2f7ddf,new Rectangle(_0x5ef4a1,_0x5460b2,_0xc93009,_0x2f7ddf);},Scene_Menu[_0x420e26(0x7ce)]=VisuMZ['CoreEngine'][_0x420e26(0x12e)][_0x420e26(0x53a)][_0x420e26(0x13f)],VisuMZ[_0x420e26(0x61d)][_0x420e26(0x7e7)]=Scene_Menu[_0x420e26(0x6a9)][_0x420e26(0x46b)],Scene_Menu[_0x420e26(0x6a9)]['create']=function(){const _0x353433=_0x420e26;VisuMZ[_0x353433(0x61d)][_0x353433(0x7e7)][_0x353433(0x21f)](this),this[_0x353433(0x29a)]();},Scene_Menu[_0x420e26(0x6a9)][_0x420e26(0x29a)]=function(){const _0x5e2e5f=_0x420e26;this['_commandWindow']&&this[_0x5e2e5f(0x769)][_0x5e2e5f(0x414)](Scene_Menu[_0x5e2e5f(0x7ce)][_0x5e2e5f(0x26f)]);this[_0x5e2e5f(0x3a6)]&&(_0x5e2e5f(0x501)!==_0x5e2e5f(0x501)?(this[_0x5e2e5f(0x83d)]=[],this[_0x5e2e5f(0x396)]=[],this['_balloonQueue']=[]):this[_0x5e2e5f(0x3a6)]['setBackgroundType'](Scene_Menu['layoutSettings']['GoldBgType']));if(this[_0x5e2e5f(0x5a1)]){if(_0x5e2e5f(0x6c1)!==_0x5e2e5f(0x49a))this[_0x5e2e5f(0x5a1)][_0x5e2e5f(0x414)](Scene_Menu[_0x5e2e5f(0x7ce)][_0x5e2e5f(0x18f)]);else{const _0x5c291f='_stored_ctGaugeColor2';this[_0x5e2e5f(0x230)]=this[_0x5e2e5f(0x230)]||{};if(this[_0x5e2e5f(0x230)][_0x5c291f])return this['_colorCache'][_0x5c291f];const _0x35fc59=_0xe6aa2a[_0x5e2e5f(0x61d)][_0x5e2e5f(0x12e)][_0x5e2e5f(0x2da)][_0x5e2e5f(0x428)];return this['getColorDataFromPluginParameters'](_0x5c291f,_0x35fc59);}}},Scene_Menu['prototype'][_0x420e26(0x727)]=function(){const _0x4ee5a6=_0x420e26;return Scene_Menu['layoutSettings'][_0x4ee5a6(0x207)][_0x4ee5a6(0x21f)](this);},Scene_Menu[_0x420e26(0x6a9)][_0x420e26(0x3a8)]=function(){const _0x4f988f=_0x420e26;return Scene_Menu['layoutSettings']['GoldRect'][_0x4f988f(0x21f)](this);},Scene_Menu[_0x420e26(0x6a9)][_0x420e26(0x2e6)]=function(){const _0x6ed194=_0x420e26;return Scene_Menu['layoutSettings'][_0x6ed194(0x7a3)][_0x6ed194(0x21f)](this);},Scene_Item['layoutSettings']=VisuMZ['CoreEngine'][_0x420e26(0x12e)][_0x420e26(0x53a)][_0x420e26(0x313)],VisuMZ[_0x420e26(0x61d)]['Scene_Item_create']=Scene_Item[_0x420e26(0x6a9)]['create'],Scene_Item['prototype'][_0x420e26(0x46b)]=function(){const _0x2b651f=_0x420e26;VisuMZ[_0x2b651f(0x61d)][_0x2b651f(0x157)][_0x2b651f(0x21f)](this),this[_0x2b651f(0x29a)]();},Scene_Item[_0x420e26(0x6a9)][_0x420e26(0x29a)]=function(){const _0x1dcf98=_0x420e26;this[_0x1dcf98(0x5f6)]&&this[_0x1dcf98(0x5f6)]['setBackgroundType'](Scene_Item['layoutSettings'][_0x1dcf98(0x610)]);if(this[_0x1dcf98(0x7fc)]){if(_0x1dcf98(0x65d)===_0x1dcf98(0x3ba))return _0x566e01[_0x1dcf98(0x7ce)][_0x1dcf98(0x2c3)][_0x1dcf98(0x21f)](this);else this[_0x1dcf98(0x7fc)][_0x1dcf98(0x414)](Scene_Item[_0x1dcf98(0x7ce)][_0x1dcf98(0x5a0)]);}if(this['_itemWindow']){if(_0x1dcf98(0x246)!==_0x1dcf98(0x246))return!![];else this[_0x1dcf98(0x5f8)]['setBackgroundType'](Scene_Item[_0x1dcf98(0x7ce)]['ItemBgType']);}if(this[_0x1dcf98(0x529)]){if(_0x1dcf98(0x4fa)==='jLpuZ')this[_0x1dcf98(0x529)][_0x1dcf98(0x414)](Scene_Item[_0x1dcf98(0x7ce)][_0x1dcf98(0x25b)]);else return _0x3b0194[_0x1dcf98(0x61d)][_0x1dcf98(0x12e)]['Color'][_0x1dcf98(0x54b)]['call'](this,_0x30afec);}},Scene_Item[_0x420e26(0x6a9)][_0x420e26(0x4b5)]=function(){const _0x3f29d7=_0x420e26;return Scene_Item['layoutSettings'][_0x3f29d7(0x3f4)][_0x3f29d7(0x21f)](this);},Scene_Item[_0x420e26(0x6a9)][_0x420e26(0x1da)]=function(){const _0x517cbb=_0x420e26;return Scene_Item[_0x517cbb(0x7ce)]['CategoryRect'][_0x517cbb(0x21f)](this);},Scene_Item['prototype'][_0x420e26(0x6d9)]=function(){const _0x223f95=_0x420e26;return Scene_Item['layoutSettings'][_0x223f95(0x3fd)][_0x223f95(0x21f)](this);},Scene_Item['prototype'][_0x420e26(0x384)]=function(){const _0x4701a1=_0x420e26;return Scene_Item[_0x4701a1(0x7ce)]['ActorRect']['call'](this);},Scene_Skill[_0x420e26(0x7ce)]=VisuMZ[_0x420e26(0x61d)]['Settings'][_0x420e26(0x53a)]['SkillMenu'],VisuMZ[_0x420e26(0x61d)][_0x420e26(0x1b6)]=Scene_Skill[_0x420e26(0x6a9)]['create'],Scene_Skill['prototype']['create']=function(){const _0x2ca546=_0x420e26;VisuMZ['CoreEngine'][_0x2ca546(0x1b6)][_0x2ca546(0x21f)](this),this[_0x2ca546(0x29a)]();},Scene_Skill[_0x420e26(0x6a9)][_0x420e26(0x29a)]=function(){const _0x35b32a=_0x420e26;this[_0x35b32a(0x5f6)]&&this[_0x35b32a(0x5f6)][_0x35b32a(0x414)](Scene_Skill['layoutSettings']['HelpBgType']);this[_0x35b32a(0x771)]&&this['_skillTypeWindow'][_0x35b32a(0x414)](Scene_Skill[_0x35b32a(0x7ce)][_0x35b32a(0x807)]);this[_0x35b32a(0x5a1)]&&this[_0x35b32a(0x5a1)]['setBackgroundType'](Scene_Skill[_0x35b32a(0x7ce)]['StatusBgType']);this[_0x35b32a(0x5f8)]&&this[_0x35b32a(0x5f8)][_0x35b32a(0x414)](Scene_Skill[_0x35b32a(0x7ce)][_0x35b32a(0x574)]);if(this['_actorWindow']){if(_0x35b32a(0x5e3)==='PASRh')this[_0x35b32a(0x529)][_0x35b32a(0x414)](Scene_Skill['layoutSettings']['ActorBgType']);else{let _0x50fb98=this[_0x35b32a(0x806)];this[_0x35b32a(0x806)]=_0x3290d0,_0x50fb98!==this[_0x35b32a(0x806)]&&(this[_0x35b32a(0x560)](),_0x1f7446[_0x35b32a(0x3f2)](),this[_0x35b32a(0x806)]===_0x35b32a(0x854)?this[_0x35b32a(0x637)](0x0):this[_0x35b32a(0x637)](-0x1));}}},Scene_Skill['prototype'][_0x420e26(0x4b5)]=function(){const _0x150efe=_0x420e26;return Scene_Skill['layoutSettings']['HelpRect'][_0x150efe(0x21f)](this);},Scene_Skill[_0x420e26(0x6a9)][_0x420e26(0x4c1)]=function(){const _0x5e9766=_0x420e26;return Scene_Skill[_0x5e9766(0x7ce)][_0x5e9766(0x482)][_0x5e9766(0x21f)](this);},Scene_Skill[_0x420e26(0x6a9)][_0x420e26(0x2e6)]=function(){const _0x4a3f2d=_0x420e26;return Scene_Skill[_0x4a3f2d(0x7ce)]['StatusRect'][_0x4a3f2d(0x21f)](this);},Scene_Skill[_0x420e26(0x6a9)]['itemWindowRect']=function(){const _0xf307d2=_0x420e26;return Scene_Skill[_0xf307d2(0x7ce)]['ItemRect'][_0xf307d2(0x21f)](this);},Scene_Skill[_0x420e26(0x6a9)]['actorWindowRect']=function(){const _0x4ae9e6=_0x420e26;return Scene_Skill[_0x4ae9e6(0x7ce)][_0x4ae9e6(0x2ed)][_0x4ae9e6(0x21f)](this);},Scene_Equip[_0x420e26(0x7ce)]=VisuMZ[_0x420e26(0x61d)][_0x420e26(0x12e)][_0x420e26(0x53a)]['EquipMenu'],VisuMZ[_0x420e26(0x61d)]['Scene_Equip_create']=Scene_Equip[_0x420e26(0x6a9)][_0x420e26(0x46b)],Scene_Equip[_0x420e26(0x6a9)][_0x420e26(0x46b)]=function(){const _0x4dc164=_0x420e26;VisuMZ['CoreEngine'][_0x4dc164(0x7df)]['call'](this),this['setCoreEngineUpdateWindowBg']();},Scene_Equip[_0x420e26(0x6a9)]['setCoreEngineUpdateWindowBg']=function(){const _0x107fd5=_0x420e26;this['_helpWindow']&&this[_0x107fd5(0x5f6)][_0x107fd5(0x414)](Scene_Equip['layoutSettings'][_0x107fd5(0x610)]);this[_0x107fd5(0x5a1)]&&this[_0x107fd5(0x5a1)][_0x107fd5(0x414)](Scene_Equip['layoutSettings'][_0x107fd5(0x18f)]);if(this[_0x107fd5(0x769)]){if(_0x107fd5(0x4c3)==='kDgaa')this[_0x107fd5(0x769)][_0x107fd5(0x414)](Scene_Equip['layoutSettings']['CommandBgType']);else{const _0x1a4fd4=_0x1c14db[_0x107fd5(0x105)]();_0x1a4fd4>_0x2e2f15&&(_0x43b256=_0x1a4fd4,this[_0x107fd5(0x41e)](_0x394611,_0x20ee3f));}}this[_0x107fd5(0x317)]&&this[_0x107fd5(0x317)][_0x107fd5(0x414)](Scene_Equip[_0x107fd5(0x7ce)]['SlotBgType']),this[_0x107fd5(0x5f8)]&&(_0x107fd5(0x5ac)!==_0x107fd5(0x5ac)?_0x446696[_0x107fd5(0x103)]()&&(_0x289a00[_0x107fd5(0x39f)](_0x107fd5(0x5d2)),_0x22bd97[_0x107fd5(0x39f)](_0x45b341)):this[_0x107fd5(0x5f8)][_0x107fd5(0x414)](Scene_Equip[_0x107fd5(0x7ce)][_0x107fd5(0x574)]));},Scene_Equip['prototype']['helpWindowRect']=function(){const _0x488903=_0x420e26;return Scene_Equip[_0x488903(0x7ce)][_0x488903(0x3f4)][_0x488903(0x21f)](this);},Scene_Equip[_0x420e26(0x6a9)][_0x420e26(0x2e6)]=function(){const _0x1b2be7=_0x420e26;return Scene_Equip[_0x1b2be7(0x7ce)][_0x1b2be7(0x7a3)][_0x1b2be7(0x21f)](this);},Scene_Equip['prototype'][_0x420e26(0x727)]=function(){return Scene_Equip['layoutSettings']['CommandRect']['call'](this);},Scene_Equip[_0x420e26(0x6a9)]['slotWindowRect']=function(){const _0x1f3de7=_0x420e26;return Scene_Equip['layoutSettings'][_0x1f3de7(0x63e)][_0x1f3de7(0x21f)](this);},Scene_Equip[_0x420e26(0x6a9)][_0x420e26(0x6d9)]=function(){const _0x539cdb=_0x420e26;return Scene_Equip['layoutSettings'][_0x539cdb(0x3fd)][_0x539cdb(0x21f)](this);},Scene_Status[_0x420e26(0x7ce)]=VisuMZ[_0x420e26(0x61d)][_0x420e26(0x12e)][_0x420e26(0x53a)][_0x420e26(0x418)],VisuMZ[_0x420e26(0x61d)][_0x420e26(0x73d)]=Scene_Status[_0x420e26(0x6a9)][_0x420e26(0x46b)],Scene_Status[_0x420e26(0x6a9)][_0x420e26(0x46b)]=function(){const _0x4e2bfb=_0x420e26;VisuMZ[_0x4e2bfb(0x61d)][_0x4e2bfb(0x73d)][_0x4e2bfb(0x21f)](this),this[_0x4e2bfb(0x29a)]();},Scene_Status[_0x420e26(0x6a9)][_0x420e26(0x29a)]=function(){const _0x5eba4c=_0x420e26;this[_0x5eba4c(0x5c7)]&&this[_0x5eba4c(0x5c7)][_0x5eba4c(0x414)](Scene_Status['layoutSettings'][_0x5eba4c(0x6e8)]),this[_0x5eba4c(0x5a1)]&&this[_0x5eba4c(0x5a1)]['setBackgroundType'](Scene_Status['layoutSettings'][_0x5eba4c(0x18f)]),this[_0x5eba4c(0x7e2)]&&(_0x5eba4c(0x847)!==_0x5eba4c(0x847)?(!this[_0x5eba4c(0x393)]&&(this['_screenY']+=_0x1f81e7[_0x5eba4c(0x3c7)]((_0x25ce4a['height']-0x270)/0x2),this[_0x5eba4c(0x323)]-=_0x4f0683[_0x5eba4c(0x60d)]((_0x19773a[_0x5eba4c(0x17f)]-_0x1a8f94['boxHeight'])/0x2),_0x42a74c[_0x5eba4c(0x17a)]()?this[_0x5eba4c(0x43b)]-=_0x129894[_0x5eba4c(0x60d)]((_0x55e697[_0x5eba4c(0x351)]-_0x4985df[_0x5eba4c(0x288)])/0x2):this[_0x5eba4c(0x43b)]+=_0x3496ca[_0x5eba4c(0x3c7)]((_0x3cbcb5[_0x5eba4c(0x288)]-0x330)/0x2)),this['_repositioned']=!![]):this['_statusParamsWindow']['setBackgroundType'](Scene_Status['layoutSettings'][_0x5eba4c(0x607)])),this['_statusEquipWindow']&&('PfJOt'===_0x5eba4c(0x37d)?this['_statusEquipWindow'][_0x5eba4c(0x414)](Scene_Status['layoutSettings']['StatusEquipBgType']):_0x4d088c[_0x5eba4c(0x61d)][_0x5eba4c(0x78c)][_0x5eba4c(0x21f)](this,_0x39f7c5));},Scene_Status[_0x420e26(0x6a9)][_0x420e26(0x6f6)]=function(){const _0x522b6f=_0x420e26;return Scene_Status[_0x522b6f(0x7ce)][_0x522b6f(0x24a)][_0x522b6f(0x21f)](this);},Scene_Status[_0x420e26(0x6a9)]['statusWindowRect']=function(){const _0xb9551f=_0x420e26;return Scene_Status[_0xb9551f(0x7ce)][_0xb9551f(0x7a3)][_0xb9551f(0x21f)](this);},Scene_Status['prototype'][_0x420e26(0x2bc)]=function(){const _0x1f876e=_0x420e26;return Scene_Status['layoutSettings']['StatusParamsRect'][_0x1f876e(0x21f)](this);},Scene_Status['prototype'][_0x420e26(0x18d)]=function(){const _0x54a112=_0x420e26;return Scene_Status[_0x54a112(0x7ce)]['StatusEquipRect'][_0x54a112(0x21f)](this);},Scene_Options[_0x420e26(0x7ce)]=VisuMZ[_0x420e26(0x61d)]['Settings'][_0x420e26(0x53a)][_0x420e26(0x398)],VisuMZ[_0x420e26(0x61d)][_0x420e26(0x2d1)]=Scene_Options[_0x420e26(0x6a9)][_0x420e26(0x46b)],Scene_Options[_0x420e26(0x6a9)]['create']=function(){const _0x453558=_0x420e26;VisuMZ[_0x453558(0x61d)][_0x453558(0x2d1)][_0x453558(0x21f)](this),this[_0x453558(0x29a)]();},Scene_Options[_0x420e26(0x6a9)][_0x420e26(0x29a)]=function(){const _0x3f0b1e=_0x420e26;this['_optionsWindow']&&this[_0x3f0b1e(0x143)][_0x3f0b1e(0x414)](Scene_Options[_0x3f0b1e(0x7ce)]['OptionsBgType']);},Scene_Options[_0x420e26(0x6a9)][_0x420e26(0x7f8)]=function(){const _0x3e0f86=_0x420e26;return Scene_Options[_0x3e0f86(0x7ce)][_0x3e0f86(0x6d0)][_0x3e0f86(0x21f)](this);},Scene_Save[_0x420e26(0x7ce)]=VisuMZ[_0x420e26(0x61d)][_0x420e26(0x12e)][_0x420e26(0x53a)][_0x420e26(0x7f5)],Scene_Save[_0x420e26(0x6a9)]['create']=function(){const _0x326d92=_0x420e26;Scene_File[_0x326d92(0x6a9)][_0x326d92(0x46b)][_0x326d92(0x21f)](this),this['setCoreEngineUpdateWindowBg']();},Scene_Save['prototype'][_0x420e26(0x29a)]=function(){const _0x52c0dc=_0x420e26;this['_helpWindow']&&this['_helpWindow'][_0x52c0dc(0x414)](Scene_Save[_0x52c0dc(0x7ce)][_0x52c0dc(0x610)]);if(this[_0x52c0dc(0x120)]){if('CxnQT'!==_0x52c0dc(0x2d8))return _0x1ee1e1[_0x52c0dc(0x61d)]['Settings']['Color'][_0x52c0dc(0x148)][_0x52c0dc(0x21f)](this,_0x381ab6);else this[_0x52c0dc(0x120)][_0x52c0dc(0x414)](Scene_Save[_0x52c0dc(0x7ce)][_0x52c0dc(0x26c)]);}},Scene_Save[_0x420e26(0x6a9)]['helpWindowRect']=function(){const _0x418ce7=_0x420e26;return Scene_Save['layoutSettings'][_0x418ce7(0x3f4)]['call'](this);},Scene_Save[_0x420e26(0x6a9)][_0x420e26(0x318)]=function(){const _0x491870=_0x420e26;return Scene_Save['layoutSettings'][_0x491870(0x7ab)]['call'](this);},Scene_Load[_0x420e26(0x7ce)]=VisuMZ[_0x420e26(0x61d)]['Settings'][_0x420e26(0x53a)][_0x420e26(0x5ef)],Scene_Load[_0x420e26(0x6a9)][_0x420e26(0x46b)]=function(){const _0x2690e6=_0x420e26;Scene_File['prototype']['create'][_0x2690e6(0x21f)](this),this[_0x2690e6(0x29a)]();},Scene_Load['prototype'][_0x420e26(0x29a)]=function(){const _0x50ff8b=_0x420e26;if(this[_0x50ff8b(0x5f6)]){if(_0x50ff8b(0x7c7)==='CrJkE')this[_0x50ff8b(0x5f6)][_0x50ff8b(0x414)](Scene_Load['layoutSettings']['HelpBgType']);else return![];}this[_0x50ff8b(0x120)]&&this[_0x50ff8b(0x120)][_0x50ff8b(0x414)](Scene_Load['layoutSettings']['ListBgType']);},Scene_Load['prototype']['helpWindowRect']=function(){const _0x825077=_0x420e26;return Scene_Load[_0x825077(0x7ce)]['HelpRect'][_0x825077(0x21f)](this);},Scene_Load[_0x420e26(0x6a9)][_0x420e26(0x318)]=function(){const _0x34b79f=_0x420e26;return Scene_Load[_0x34b79f(0x7ce)][_0x34b79f(0x7ab)][_0x34b79f(0x21f)](this);},Scene_GameEnd[_0x420e26(0x7ce)]=VisuMZ[_0x420e26(0x61d)]['Settings']['MenuLayout'][_0x420e26(0x138)],VisuMZ['CoreEngine']['Scene_GameEnd_createBackground']=Scene_GameEnd['prototype'][_0x420e26(0x192)],Scene_GameEnd[_0x420e26(0x6a9)][_0x420e26(0x192)]=function(){const _0x2b9d1e=_0x420e26;Scene_MenuBase[_0x2b9d1e(0x6a9)][_0x2b9d1e(0x192)][_0x2b9d1e(0x21f)](this);},Scene_GameEnd[_0x420e26(0x6a9)][_0x420e26(0x640)]=function(){const _0x407cea=_0x420e26,_0x52ea14=this[_0x407cea(0x727)]();this[_0x407cea(0x769)]=new Window_GameEnd(_0x52ea14),this[_0x407cea(0x769)][_0x407cea(0x785)](_0x407cea(0x29c),this[_0x407cea(0x28a)]['bind'](this)),this[_0x407cea(0x4c2)](this[_0x407cea(0x769)]),this[_0x407cea(0x769)]['setBackgroundType'](Scene_GameEnd['layoutSettings'][_0x407cea(0x26f)]);},Scene_GameEnd['prototype'][_0x420e26(0x727)]=function(){const _0x3517d9=_0x420e26;return Scene_GameEnd[_0x3517d9(0x7ce)][_0x3517d9(0x207)][_0x3517d9(0x21f)](this);},Scene_Shop[_0x420e26(0x7ce)]=VisuMZ[_0x420e26(0x61d)][_0x420e26(0x12e)][_0x420e26(0x53a)][_0x420e26(0x6af)],VisuMZ[_0x420e26(0x61d)]['Scene_Shop_create']=Scene_Shop[_0x420e26(0x6a9)][_0x420e26(0x46b)],Scene_Shop[_0x420e26(0x6a9)][_0x420e26(0x46b)]=function(){const _0x2508a7=_0x420e26;VisuMZ[_0x2508a7(0x61d)][_0x2508a7(0x4ef)][_0x2508a7(0x21f)](this),this[_0x2508a7(0x29a)]();},Scene_Shop['prototype'][_0x420e26(0x29a)]=function(){const _0x3bbbee=_0x420e26;this['_helpWindow']&&this[_0x3bbbee(0x5f6)]['setBackgroundType'](Scene_Shop['layoutSettings'][_0x3bbbee(0x610)]);this[_0x3bbbee(0x3a6)]&&this[_0x3bbbee(0x3a6)]['setBackgroundType'](Scene_Shop[_0x3bbbee(0x7ce)]['GoldBgType']);if(this['_commandWindow']){if(_0x3bbbee(0x3d0)!==_0x3bbbee(0x3d0))return _0x5ae9e0[_0x3bbbee(0x7ce)][_0x3bbbee(0x207)]['call'](this);else this['_commandWindow'][_0x3bbbee(0x414)](Scene_Shop['layoutSettings'][_0x3bbbee(0x26f)]);}this[_0x3bbbee(0x3a9)]&&this[_0x3bbbee(0x3a9)][_0x3bbbee(0x414)](Scene_Shop[_0x3bbbee(0x7ce)]['DummyBgType']);if(this[_0x3bbbee(0x723)]){if(_0x3bbbee(0x6d7)==='LpCVR')this[_0x3bbbee(0x723)][_0x3bbbee(0x414)](Scene_Shop['layoutSettings'][_0x3bbbee(0x3ac)]);else return _0x2b06aa[_0x3bbbee(0x53d)](_0x3bbbee(0x4bc));}if(this[_0x3bbbee(0x5a1)]){if(_0x3bbbee(0x368)!==_0x3bbbee(0x368))return _0x24d74e['PreserveNumbers'](_0x3f3cc9,'<','>');else this['_statusWindow'][_0x3bbbee(0x414)](Scene_Shop[_0x3bbbee(0x7ce)][_0x3bbbee(0x18f)]);}this[_0x3bbbee(0x5d6)]&&this['_buyWindow']['setBackgroundType'](Scene_Shop[_0x3bbbee(0x7ce)]['BuyBgType']),this['_categoryWindow']&&('sXPeG'!==_0x3bbbee(0x514)?this['processKeyboardHome']():this[_0x3bbbee(0x7fc)]['setBackgroundType'](Scene_Shop[_0x3bbbee(0x7ce)][_0x3bbbee(0x5a0)])),this[_0x3bbbee(0x469)]&&this[_0x3bbbee(0x469)]['setBackgroundType'](Scene_Shop[_0x3bbbee(0x7ce)][_0x3bbbee(0x855)]);},Scene_Shop[_0x420e26(0x6a9)]['helpWindowRect']=function(){const _0xec8959=_0x420e26;return Scene_Shop[_0xec8959(0x7ce)][_0xec8959(0x3f4)][_0xec8959(0x21f)](this);},Scene_Shop[_0x420e26(0x6a9)][_0x420e26(0x3a8)]=function(){const _0x325948=_0x420e26;return Scene_Shop[_0x325948(0x7ce)]['GoldRect'][_0x325948(0x21f)](this);},Scene_Shop[_0x420e26(0x6a9)][_0x420e26(0x727)]=function(){const _0x2d005a=_0x420e26;return Scene_Shop[_0x2d005a(0x7ce)]['CommandRect'][_0x2d005a(0x21f)](this);},Scene_Shop[_0x420e26(0x6a9)][_0x420e26(0x338)]=function(){const _0x3413b4=_0x420e26;return Scene_Shop[_0x3413b4(0x7ce)]['DummyRect'][_0x3413b4(0x21f)](this);},Scene_Shop[_0x420e26(0x6a9)][_0x420e26(0x3ec)]=function(){const _0x36a332=_0x420e26;return Scene_Shop[_0x36a332(0x7ce)][_0x36a332(0x3ae)][_0x36a332(0x21f)](this);},Scene_Shop[_0x420e26(0x6a9)][_0x420e26(0x2e6)]=function(){const _0x45c4db=_0x420e26;return Scene_Shop[_0x45c4db(0x7ce)]['StatusRect'][_0x45c4db(0x21f)](this);},Scene_Shop[_0x420e26(0x6a9)][_0x420e26(0x46e)]=function(){const _0x55958b=_0x420e26;return Scene_Shop[_0x55958b(0x7ce)]['BuyRect'][_0x55958b(0x21f)](this);},Scene_Shop[_0x420e26(0x6a9)][_0x420e26(0x1da)]=function(){const _0x4494fb=_0x420e26;return Scene_Shop['layoutSettings'][_0x4494fb(0x471)][_0x4494fb(0x21f)](this);},Scene_Shop['prototype']['sellWindowRect']=function(){const _0x3b5ef6=_0x420e26;return Scene_Shop[_0x3b5ef6(0x7ce)][_0x3b5ef6(0x3f3)][_0x3b5ef6(0x21f)](this);},Scene_Name[_0x420e26(0x7ce)]=VisuMZ[_0x420e26(0x61d)]['Settings'][_0x420e26(0x53a)][_0x420e26(0x516)],VisuMZ[_0x420e26(0x61d)][_0x420e26(0x369)]=Scene_Name[_0x420e26(0x6a9)][_0x420e26(0x46b)],Scene_Name[_0x420e26(0x6a9)]['create']=function(){const _0x278f19=_0x420e26;VisuMZ[_0x278f19(0x61d)][_0x278f19(0x369)][_0x278f19(0x21f)](this),this[_0x278f19(0x29a)]();},Scene_Name[_0x420e26(0x6a9)][_0x420e26(0x29a)]=function(){const _0x3cbff2=_0x420e26;if(this['_editWindow']){if(_0x3cbff2(0x32d)===_0x3cbff2(0x6f7)){if(_0x201ef5)_0x2896c0[_0x3cbff2(0x5de)](_0x381760);}else this[_0x3cbff2(0x1d7)]['setBackgroundType'](Scene_Name['layoutSettings'][_0x3cbff2(0x47a)]);}if(this['_inputWindow']){if(_0x3cbff2(0x739)!==_0x3cbff2(0x739)){const _0x2d5e8b=_0x36a949(_0x48cdcc['$1']);_0x2d5e8b!==_0x416e56[_0x12355e]['version']&&(_0x4f1fab(_0x3cbff2(0x454)[_0x3cbff2(0x680)](_0x268f66,_0x2d5e8b)),_0x33e59e[_0x3cbff2(0x4ce)]());}else this[_0x3cbff2(0x316)]['setBackgroundType'](Scene_Name[_0x3cbff2(0x7ce)][_0x3cbff2(0x1d4)]);}},Scene_Name[_0x420e26(0x6a9)][_0x420e26(0x249)]=function(){return 0x0;},Scene_Name[_0x420e26(0x6a9)][_0x420e26(0x77a)]=function(){const _0x593cbb=_0x420e26;return Scene_Name[_0x593cbb(0x7ce)]['EditRect'][_0x593cbb(0x21f)](this);},Scene_Name[_0x420e26(0x6a9)][_0x420e26(0x126)]=function(){const _0x18da90=_0x420e26;return Scene_Name[_0x18da90(0x7ce)][_0x18da90(0x7bd)][_0x18da90(0x21f)](this);},Scene_Name['prototype'][_0x420e26(0x3b9)]=function(){const _0x3a74bf=_0x420e26;if(!this[_0x3a74bf(0x316)])return![];return VisuMZ[_0x3a74bf(0x61d)][_0x3a74bf(0x12e)][_0x3a74bf(0x3e5)][_0x3a74bf(0x3b9)];},Scene_Name[_0x420e26(0x6a9)][_0x420e26(0x797)]=function(){const _0x12fc5b=_0x420e26;if(this[_0x12fc5b(0x3b9)]()){if('PzqfT'===_0x12fc5b(0x424))return TextManager['getInputButtonString'](_0x12fc5b(0x4bc));else{const _0x5328ae=_0x56700b[_0x4c791d];if(!_0x5328ae)return'';let _0x30cf3a='';_0x30cf3a+=_0x5328ae[_0x12fc5b(0x1de)];for(const _0x3bae66 of _0x5328ae[_0x12fc5b(0x6e4)]){for(const _0x3276d7 of _0x3bae66[_0x12fc5b(0x27c)]){[0x6c,0x198][_0x12fc5b(0x52e)](_0x3276d7[_0x12fc5b(0x2ce)])&&(_0x30cf3a+='\x0a',_0x30cf3a+=_0x3276d7[_0x12fc5b(0x370)][0x0]);}}return _0x30cf3a;}}else return Scene_MenuBase['prototype'][_0x12fc5b(0x797)]['call'](this);},Scene_Name[_0x420e26(0x6a9)][_0x420e26(0x54a)]=function(){const _0x54e41a=_0x420e26;if(this[_0x54e41a(0x3b9)]()){const _0x2efbd6=VisuMZ[_0x54e41a(0x61d)][_0x54e41a(0x12e)][_0x54e41a(0x3e5)];if(this['_inputWindow'][_0x54e41a(0x806)]===_0x54e41a(0x421)){if(_0x54e41a(0x85b)!==_0x54e41a(0x58e))return _0x2efbd6[_0x54e41a(0x555)]||_0x54e41a(0x555);else _0x5d6f4b=_0x21ddcc[_0x54e41a(0x3c7)](_0x442945),_0x2ebd4f=_0x50fa21[_0x54e41a(0x3c7)](_0x119631),_0x37dd01['CoreEngine'][_0x54e41a(0x60a)][_0x54e41a(0x21f)](this,_0x399516,_0x4daee1,_0x41e1f3);}else{if(_0x54e41a(0x371)===_0x54e41a(0x31c)){const _0x3393a0=_0x41b301[_0x54e41a(0x6a9)]['traitObjects'][_0x54e41a(0x21f)](this);for(const _0x54ce8c of this[_0x54e41a(0x405)]()){_0x54ce8c&&_0x3393a0['push'](_0x54ce8c);}return _0x3393a0[_0x54e41a(0x5e8)](this[_0x54e41a(0x389)](),this['actor']()),_0x3393a0;}else return _0x2efbd6[_0x54e41a(0x1c5)]||_0x54e41a(0x1c5);}}else return Scene_MenuBase['prototype'][_0x54e41a(0x54a)][_0x54e41a(0x21f)](this);},VisuMZ[_0x420e26(0x61d)]['Scene_Name_onInputOk']=Scene_Name['prototype'][_0x420e26(0x427)],Scene_Name[_0x420e26(0x6a9)]['onInputOk']=function(){const _0x633d4d=_0x420e26;this[_0x633d4d(0x191)]()?_0x633d4d(0x55d)===_0x633d4d(0x55d)?this[_0x633d4d(0x15f)]():!_0x2db8ad[_0x633d4d(0x20c)]&&_0x38cd8f[_0x633d4d(0x2f8)]&&_0x582beb[_0x633d4d(0x4c0)](_0x4e1318):VisuMZ[_0x633d4d(0x61d)][_0x633d4d(0x672)][_0x633d4d(0x21f)](this);},Scene_Name[_0x420e26(0x6a9)][_0x420e26(0x191)]=function(){const _0x45210c=_0x420e26,_0x1ea397=VisuMZ[_0x45210c(0x61d)][_0x45210c(0x12e)]['KeyboardInput'];if(!_0x1ea397)return![];const _0x2b0955=_0x1ea397[_0x45210c(0x468)];if(!_0x2b0955)return![];const _0x1c0023=this[_0x45210c(0x1d7)][_0x45210c(0x1de)]()[_0x45210c(0x7d4)]();for(const _0x110f6e of _0x2b0955){if(_0x1c0023[_0x45210c(0x52e)](_0x110f6e[_0x45210c(0x7d4)]()))return!![];}return![];},Scene_Name[_0x420e26(0x6a9)][_0x420e26(0x15f)]=function(){const _0x434289=_0x420e26;SoundManager[_0x434289(0x630)]();},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x33a)]=Scene_Battle[_0x420e26(0x6a9)][_0x420e26(0x1bb)],Scene_Battle[_0x420e26(0x6a9)][_0x420e26(0x1bb)]=function(){const _0x395052=_0x420e26;VisuMZ[_0x395052(0x61d)][_0x395052(0x33a)]['call'](this);if($gameTemp[_0x395052(0x55e)])this[_0x395052(0x263)]();},Scene_Battle[_0x420e26(0x6a9)][_0x420e26(0x263)]=function(){const _0x193a66=_0x420e26;!BattleManager[_0x193a66(0x22c)]()&&!this[_0x193a66(0x6e5)]&&!$gameMessage[_0x193a66(0x582)]()&&(this['_playtestF7Looping']=!![],this[_0x193a66(0x1bb)](),SceneManager[_0x193a66(0x64a)](),this[_0x193a66(0x6e5)]=![]);},VisuMZ['CoreEngine'][_0x420e26(0x349)]=Scene_Battle[_0x420e26(0x6a9)]['createCancelButton'],Scene_Battle[_0x420e26(0x6a9)]['createCancelButton']=function(){const _0x429cf3=_0x420e26;VisuMZ['CoreEngine'][_0x429cf3(0x349)][_0x429cf3(0x21f)](this),SceneManager['isSideButtonLayout']()&&(_0x429cf3(0x2ee)===_0x429cf3(0x2ee)?this[_0x429cf3(0x20b)]():(_0x38464c[_0x429cf3(0x292)][0x57]='up',_0x51b965[_0x429cf3(0x292)][0x41]=_0x429cf3(0x45e),_0x1588f0[_0x429cf3(0x292)][0x53]='down',_0x555961[_0x429cf3(0x292)][0x44]=_0x429cf3(0x627),_0x5dc971[_0x429cf3(0x292)][0x45]=_0x429cf3(0x4f1)));},Scene_Battle[_0x420e26(0x6a9)][_0x420e26(0x20b)]=function(){const _0xa8b73=_0x420e26;this[_0xa8b73(0x197)]['x']=Graphics[_0xa8b73(0x288)]+0x4;if(this['isBottomButtonMode']()){if(_0xa8b73(0x15d)!==_0xa8b73(0x15d)){var _0x27dde8=_0x206817(_0x28ea3f['$1']);_0x34e5ff+=_0x27dde8;}else this['_cancelButton']['y']=Graphics[_0xa8b73(0x713)]-this[_0xa8b73(0x3c0)]();}else{if(_0xa8b73(0x2d4)!==_0xa8b73(0x222))this[_0xa8b73(0x197)]['y']=0x0;else{if(!this[_0xa8b73(0x274)])return _0xf7cfdb;return _0x5ef3ad[_0xa8b73(0x678)](_0x4f79f3,this[_0xa8b73(0x274)][_0xa8b73(0x588)]||_0xa8b73(0x716));}}},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x758)]=Sprite_Button[_0x420e26(0x6a9)]['initialize'],Sprite_Button[_0x420e26(0x6a9)][_0x420e26(0x5d3)]=function(_0x2ae1d2){const _0x53533c=_0x420e26;VisuMZ[_0x53533c(0x61d)][_0x53533c(0x758)][_0x53533c(0x21f)](this,_0x2ae1d2),this[_0x53533c(0x500)]();},Sprite_Button['prototype'][_0x420e26(0x500)]=function(){const _0x28329f=_0x420e26,_0xa12dcb=VisuMZ[_0x28329f(0x61d)][_0x28329f(0x12e)]['UI'];this[_0x28329f(0x767)]=![];switch(this[_0x28329f(0x2ff)]){case _0x28329f(0x29c):this[_0x28329f(0x767)]=!_0xa12dcb['cancelShowButton'];break;case'pageup':case _0x28329f(0x4f1):this[_0x28329f(0x767)]=!_0xa12dcb['pagedownShowButton'];break;case _0x28329f(0x6c5):case'up':case _0x28329f(0x347):case _0x28329f(0x122):case'ok':this['_isButtonHidden']=!_0xa12dcb[_0x28329f(0x2fe)];break;case _0x28329f(0x443):this[_0x28329f(0x767)]=!_0xa12dcb[_0x28329f(0x37c)];break;}},VisuMZ[_0x420e26(0x61d)]['Sprite_Button_updateOpacity']=Sprite_Button[_0x420e26(0x6a9)][_0x420e26(0x860)],Sprite_Button[_0x420e26(0x6a9)][_0x420e26(0x860)]=function(){const _0x1cca44=_0x420e26;if(SceneManager[_0x1cca44(0x751)]()||this['_isButtonHidden']){if(_0x1cca44(0x130)!==_0x1cca44(0x6f9))this['hideButtonFromView']();else{const _0x14ecc8=_0x3a5dae['touchUI']?(_0x3455dd['prototype']['blockWidth']()+0x6)*0x2:0x0,_0x43b7e1=this[_0x1cca44(0x525)](),_0x3b611e=_0x5359b9[_0x1cca44(0x288)]-_0x14ecc8*0x2,_0x189343=this[_0x1cca44(0x3c0)]();return new _0x274fb8(_0x14ecc8,_0x43b7e1,_0x3b611e,_0x189343);}}else _0x1cca44(0x38a)!=='TDqip'?_0x2d0a8f[_0x1cca44(0x61d)][_0x1cca44(0x792)]['call'](this):VisuMZ[_0x1cca44(0x61d)]['Sprite_Button_updateOpacity'][_0x1cca44(0x21f)](this);},Sprite_Button[_0x420e26(0x6a9)][_0x420e26(0x556)]=function(){const _0x3e0557=_0x420e26;this[_0x3e0557(0x2f8)]=![],this[_0x3e0557(0x146)]=0x0,this['x']=Graphics[_0x3e0557(0x351)]*0xa,this['y']=Graphics[_0x3e0557(0x17f)]*0xa;},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x327)]=Sprite_Battler[_0x420e26(0x6a9)]['startMove'],Sprite_Battler[_0x420e26(0x6a9)][_0x420e26(0x635)]=function(_0x28f650,_0x47b016,_0x4f081e){const _0x5f1c91=_0x420e26;(this[_0x5f1c91(0x44a)]!==_0x28f650||this[_0x5f1c91(0x268)]!==_0x47b016)&&(this[_0x5f1c91(0x23b)](_0x5f1c91(0x11a)),this[_0x5f1c91(0x3de)]=_0x4f081e),VisuMZ[_0x5f1c91(0x61d)][_0x5f1c91(0x327)][_0x5f1c91(0x21f)](this,_0x28f650,_0x47b016,_0x4f081e);},Sprite_Battler[_0x420e26(0x6a9)]['setMoveEasingType']=function(_0x4bf0dc){this['_moveEasingType']=_0x4bf0dc;},Sprite_Battler[_0x420e26(0x6a9)][_0x420e26(0x3ff)]=function(){const _0x3cd186=_0x420e26;if(this[_0x3cd186(0x833)]<=0x0)return;const _0x35fda1=this[_0x3cd186(0x833)],_0x4045d2=this[_0x3cd186(0x3de)],_0x56fcd6=this[_0x3cd186(0x612)];this[_0x3cd186(0x31f)]=this[_0x3cd186(0x7c3)](this[_0x3cd186(0x31f)],this['_targetOffsetX'],_0x35fda1,_0x4045d2,_0x56fcd6),this[_0x3cd186(0x524)]=this[_0x3cd186(0x7c3)](this[_0x3cd186(0x524)],this[_0x3cd186(0x268)],_0x35fda1,_0x4045d2,_0x56fcd6),this[_0x3cd186(0x833)]--;if(this[_0x3cd186(0x833)]<=0x0)this[_0x3cd186(0x795)]();},Sprite_Battler[_0x420e26(0x6a9)][_0x420e26(0x7c3)]=function(_0x369a64,_0x331a5,_0x1e3fbb,_0x367b46,_0x4da256){const _0x2bf9aa=_0x420e26,_0x1629c9=VisuMZ[_0x2bf9aa(0x678)]((_0x367b46-_0x1e3fbb)/_0x367b46,_0x4da256||_0x2bf9aa(0x11a)),_0x432171=VisuMZ[_0x2bf9aa(0x678)]((_0x367b46-_0x1e3fbb+0x1)/_0x367b46,_0x4da256||'Linear'),_0x23fd0b=(_0x369a64-_0x331a5*_0x1629c9)/(0x1-_0x1629c9);return _0x23fd0b+(_0x331a5-_0x23fd0b)*_0x432171;},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x6b1)]=Sprite_Actor[_0x420e26(0x6a9)][_0x420e26(0x39b)],Sprite_Actor[_0x420e26(0x6a9)][_0x420e26(0x39b)]=function(_0x1af33a){const _0x112a6d=_0x420e26;if(VisuMZ[_0x112a6d(0x61d)]['Settings']['UI'][_0x112a6d(0x367)])this[_0x112a6d(0x801)](_0x1af33a);else{if(_0x112a6d(0x467)===_0x112a6d(0x3eb)){if(this[_0x112a6d(0x438)]>0x63)return this[_0x112a6d(0x596)](_0xc95b89);return _0x5c4a38[_0x112a6d(0x61d)]['Game_Actor_paramBase'][_0x112a6d(0x21f)](this,_0xdde58c);}else VisuMZ['CoreEngine'][_0x112a6d(0x6b1)]['call'](this,_0x1af33a);}},Sprite_Actor[_0x420e26(0x6a9)][_0x420e26(0x801)]=function(_0x5b274c){const _0x57b026=_0x420e26;let _0x3dd231=Math[_0x57b026(0x3c7)](Graphics[_0x57b026(0x351)]/0x2+0xc0);_0x3dd231-=Math['floor']((Graphics['width']-Graphics[_0x57b026(0x288)])/0x2),_0x3dd231+=_0x5b274c*0x20;let _0x199c6e=Graphics[_0x57b026(0x17f)]-0xc8-$gameParty['maxBattleMembers']()*0x30;_0x199c6e-=Math[_0x57b026(0x60d)]((Graphics[_0x57b026(0x17f)]-Graphics[_0x57b026(0x713)])/0x2),_0x199c6e+=_0x5b274c*0x30,this[_0x57b026(0x503)](_0x3dd231,_0x199c6e);},Sprite_Actor['prototype'][_0x420e26(0x810)]=function(){const _0x1d2dc4=_0x420e26;this[_0x1d2dc4(0x635)](0x4b0,0x0,0x78);},Sprite_Animation['prototype'][_0x420e26(0x71f)]=function(_0x3e1669){this['_muteSound']=_0x3e1669;},VisuMZ['CoreEngine']['Sprite_Animation_processSoundTimings']=Sprite_Animation[_0x420e26(0x6a9)]['processSoundTimings'],Sprite_Animation[_0x420e26(0x6a9)][_0x420e26(0x4e2)]=function(){const _0x2ff0e9=_0x420e26;if(this[_0x2ff0e9(0x4a2)])return;VisuMZ['CoreEngine']['Sprite_Animation_processSoundTimings'][_0x2ff0e9(0x21f)](this);},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x68c)]=Sprite_Animation[_0x420e26(0x6a9)][_0x420e26(0x1d6)],Sprite_Animation[_0x420e26(0x6a9)][_0x420e26(0x1d6)]=function(_0x32905e){const _0x14aecc=_0x420e26;this[_0x14aecc(0x772)]()?this['setViewportCoreEngineFix'](_0x32905e):_0x14aecc(0x402)!==_0x14aecc(0x402)?(this['_forcedTroopView']=_0x24ed3a,this[_0x14aecc(0x205)]=_0x28da87):VisuMZ[_0x14aecc(0x61d)]['Sprite_Animation_setViewport'][_0x14aecc(0x21f)](this,_0x32905e);},Sprite_Animation[_0x420e26(0x6a9)][_0x420e26(0x772)]=function(){const _0x4cafa8=_0x420e26;if(!this[_0x4cafa8(0x675)])return![];const _0x538fa4=this[_0x4cafa8(0x675)]['name']||'';if(_0x538fa4[_0x4cafa8(0x295)](/<MIRROR OFFSET X>/i))return!![];if(_0x538fa4['match'](/<NO MIRROR OFFSET X>/i))return![];return VisuMZ[_0x4cafa8(0x61d)][_0x4cafa8(0x12e)][_0x4cafa8(0x5ed)][_0x4cafa8(0x3a2)];},Sprite_Animation[_0x420e26(0x6a9)][_0x420e26(0x601)]=function(_0x1e9590){const _0xd1e26a=_0x420e26,_0x3d5200=this[_0xd1e26a(0x51d)],_0x311dd2=this[_0xd1e26a(0x51d)],_0xf5cb75=this['_animation'][_0xd1e26a(0x4ac)]*(this[_0xd1e26a(0x43f)]?-0x1:0x1)-_0x3d5200/0x2,_0x4cf101=this['_animation'][_0xd1e26a(0x24e)]-_0x311dd2/0x2,_0x3b4e83=this[_0xd1e26a(0x871)](_0x1e9590);_0x1e9590['gl'][_0xd1e26a(0x5aa)](_0xf5cb75+_0x3b4e83['x'],_0x4cf101+_0x3b4e83['y'],_0x3d5200,_0x311dd2);},Sprite_Animation[_0x420e26(0x6a9)][_0x420e26(0x59e)]=function(_0x47e9d8){const _0x449113=_0x420e26;if(_0x47e9d8[_0x449113(0x809)]){}const _0x103bbe=this[_0x449113(0x675)]['name'];let _0x8880d0=_0x47e9d8[_0x449113(0x17f)]*_0x47e9d8[_0x449113(0x633)]['y'],_0x7d5915=0x0,_0x3f2b23=-_0x8880d0/0x2;if(_0x103bbe[_0x449113(0x295)](/<(?:HEAD|HEADER|TOP)>/i))_0x3f2b23=-_0x8880d0;if(_0x103bbe['match'](/<(?:FOOT|FOOTER|BOTTOM)>/i))_0x3f2b23=0x0;if(_0x103bbe[_0x449113(0x295)](/<(?:LEFT)>/i))_0x7d5915=-_0x47e9d8[_0x449113(0x351)]/0x2;if(_0x103bbe[_0x449113(0x295)](/<(?:RIGHT)>/i))_0x3f2b23=_0x47e9d8[_0x449113(0x351)]/0x2;if(_0x103bbe[_0x449113(0x295)](/<ANCHOR X:[ ](\d+\.?\d*)>/i))_0x7d5915=Number(RegExp['$1'])*_0x47e9d8[_0x449113(0x351)];_0x103bbe[_0x449113(0x295)](/<ANCHOR Y:[ ](\d+\.?\d*)>/i)&&(_0x3f2b23=(0x1-Number(RegExp['$1']))*-_0x8880d0);_0x103bbe[_0x449113(0x295)](/<ANCHOR:[ ](\d+\.?\d*),[ ](\d+\.?\d*)>/i)&&(_0x7d5915=Number(RegExp['$1'])*_0x47e9d8['width'],_0x3f2b23=(0x1-Number(RegExp['$2']))*-_0x8880d0);if(_0x103bbe[_0x449113(0x295)](/<OFFSET X:[ ]([\+\-]\d+)>/i))_0x7d5915+=Number(RegExp['$1']);if(_0x103bbe[_0x449113(0x295)](/<OFFSET Y:[ ]([\+\-]\d+)>/i))_0x3f2b23+=Number(RegExp['$1']);_0x103bbe[_0x449113(0x295)](/<OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(_0x7d5915+=Number(RegExp['$1']),_0x3f2b23+=Number(RegExp['$2']));const _0x4cdab4=new Point(_0x7d5915,_0x3f2b23);return _0x47e9d8[_0x449113(0x461)](),_0x47e9d8[_0x449113(0x2cb)][_0x449113(0x642)](_0x4cdab4);},Sprite_AnimationMV['prototype'][_0x420e26(0x71f)]=function(_0x535927){const _0x4c085e=_0x420e26;this[_0x4c085e(0x4a2)]=_0x535927;},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x4a7)]=Sprite_AnimationMV[_0x420e26(0x6a9)][_0x420e26(0x747)],Sprite_AnimationMV[_0x420e26(0x6a9)]['processTimingData']=function(_0x811578){const _0x5ce7b4=_0x420e26;this[_0x5ce7b4(0x4a2)]&&(_0x5ce7b4(0x2a2)!==_0x5ce7b4(0x2a2)?_0x2322a2=_0x20bc6b['CoreEngine'][_0x5ce7b4(0x593)]['call'](this):(_0x811578=JsonEx[_0x5ce7b4(0x81b)](_0x811578),_0x811578['se']&&(_0x811578['se'][_0x5ce7b4(0x383)]=0x0))),VisuMZ['CoreEngine']['Sprite_AnimationMV_processTimingData'][_0x5ce7b4(0x21f)](this,_0x811578);},Sprite_Damage[_0x420e26(0x6a9)][_0x420e26(0x866)]=function(_0x508f21){const _0x12d0e3=_0x420e26;let _0x10b1dd=Math[_0x12d0e3(0x269)](_0x508f21)['toString']();this[_0x12d0e3(0x507)]()&&(_0x10b1dd=VisuMZ[_0x12d0e3(0x24d)](_0x10b1dd));const _0x2705f3=this[_0x12d0e3(0x31e)](),_0xe39432=Math[_0x12d0e3(0x60d)](_0x2705f3*0.75);for(let _0x4fecde=0x0;_0x4fecde<_0x10b1dd[_0x12d0e3(0x66e)];_0x4fecde++){const _0x3dacd1=this[_0x12d0e3(0x439)](_0xe39432,_0x2705f3);_0x3dacd1[_0x12d0e3(0x187)]['drawText'](_0x10b1dd[_0x4fecde],0x0,0x0,_0xe39432,_0x2705f3,_0x12d0e3(0x6b2)),_0x3dacd1['x']=(_0x4fecde-(_0x10b1dd[_0x12d0e3(0x66e)]-0x1)/0x2)*_0xe39432,_0x3dacd1['dy']=-_0x4fecde;}},Sprite_Damage[_0x420e26(0x6a9)][_0x420e26(0x507)]=function(){const _0x30e533=_0x420e26;return VisuMZ[_0x30e533(0x61d)][_0x30e533(0x12e)]['QoL']['DigitGroupingDamageSprites'];},Sprite_Damage['prototype'][_0x420e26(0x652)]=function(){const _0x107973=_0x420e26;return ColorManager[_0x107973(0x18b)]();},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x67e)]=Sprite_Gauge[_0x420e26(0x6a9)][_0x420e26(0x1ba)],Sprite_Gauge[_0x420e26(0x6a9)]['gaugeRate']=function(){const _0x667080=_0x420e26;return VisuMZ['CoreEngine'][_0x667080(0x67e)][_0x667080(0x21f)](this)[_0x667080(0x1d0)](0x0,0x1);},VisuMZ[_0x420e26(0x61d)]['Sprite_Gauge_currentValue']=Sprite_Gauge[_0x420e26(0x6a9)][_0x420e26(0x410)],Sprite_Gauge[_0x420e26(0x6a9)][_0x420e26(0x410)]=function(){const _0x53a5ae=_0x420e26;let _0x59ff77=VisuMZ['CoreEngine'][_0x53a5ae(0x600)][_0x53a5ae(0x21f)](this);return _0x59ff77;},Sprite_Gauge[_0x420e26(0x6a9)]['drawValue']=function(){const _0x367def=_0x420e26;let _0x92a3c9=this[_0x367def(0x410)]();this[_0x367def(0x507)]()&&('tqUwn'===_0x367def(0x73f)?_0x92a3c9=VisuMZ[_0x367def(0x24d)](_0x92a3c9):(this[_0x367def(0x5ee)]['x']=_0x76ecc4[_0x367def(0x5ee)]()['x'],this[_0x367def(0x5ee)]['y']=_0x260313['anchor']()['y']));const _0x3eda83=this[_0x367def(0x1dd)]()-0x1,_0x24a0d8=this[_0x367def(0x74c)]();this[_0x367def(0x2f9)](),this[_0x367def(0x187)][_0x367def(0x14b)](_0x92a3c9,0x0,0x0,_0x3eda83,_0x24a0d8,_0x367def(0x627));},Sprite_Gauge[_0x420e26(0x6a9)][_0x420e26(0x6cf)]=function(){return 0x3;},Sprite_Gauge['prototype'][_0x420e26(0x507)]=function(){const _0x35b0b8=_0x420e26;return VisuMZ[_0x35b0b8(0x61d)]['Settings'][_0x35b0b8(0x5ed)][_0x35b0b8(0x581)];},Sprite_Gauge['prototype'][_0x420e26(0x652)]=function(){const _0x121176=_0x420e26;return ColorManager[_0x121176(0x1ad)]();},VisuMZ['CoreEngine'][_0x420e26(0x56c)]=Sprite_Picture[_0x420e26(0x6a9)][_0x420e26(0x7ec)],Sprite_Picture['prototype'][_0x420e26(0x7ec)]=function(){const _0x4a61da=_0x420e26;this[_0x4a61da(0x6f4)][_0x4a61da(0x295)](/VisuMZ CoreEngine PictureIcon (\d+)/i)?this[_0x4a61da(0x76d)](Number(RegExp['$1'])):VisuMZ[_0x4a61da(0x61d)][_0x4a61da(0x56c)][_0x4a61da(0x21f)](this);},Sprite_Picture[_0x420e26(0x6a9)][_0x420e26(0x76d)]=function(_0x673f14){const _0x21bcd6=_0x420e26,_0x400f60=ImageManager[_0x21bcd6(0x68a)],_0xb197b3=ImageManager['iconHeight'],_0x1e8607=this[_0x21bcd6(0x6f4)][_0x21bcd6(0x295)](/SMOOTH/i);this[_0x21bcd6(0x187)]=new Bitmap(_0x400f60,_0xb197b3);const _0x5f0b2d=ImageManager[_0x21bcd6(0x7d6)](_0x21bcd6(0x4ee)),_0x298816=_0x673f14%0x10*_0x400f60,_0x4768ee=Math['floor'](_0x673f14/0x10)*_0xb197b3;this[_0x21bcd6(0x187)][_0x21bcd6(0x56b)]=_0x1e8607,this[_0x21bcd6(0x187)][_0x21bcd6(0x5ce)](_0x5f0b2d,_0x298816,_0x4768ee,_0x400f60,_0xb197b3,0x0,0x0,_0x400f60,_0xb197b3);};function Sprite_TitlePictureButton(){const _0x3cdadb=_0x420e26;this[_0x3cdadb(0x5d3)](...arguments);}Sprite_TitlePictureButton['prototype']=Object[_0x420e26(0x46b)](Sprite_Clickable[_0x420e26(0x6a9)]),Sprite_TitlePictureButton[_0x420e26(0x6a9)]['constructor']=Sprite_TitlePictureButton,Sprite_TitlePictureButton[_0x420e26(0x6a9)]['initialize']=function(_0x3cc02e){const _0x14a921=_0x420e26;Sprite_Clickable[_0x14a921(0x6a9)][_0x14a921(0x5d3)][_0x14a921(0x21f)](this),this[_0x14a921(0x638)]=_0x3cc02e,this[_0x14a921(0x4ff)]=null,this['setup']();},Sprite_TitlePictureButton[_0x420e26(0x6a9)]['setup']=function(){const _0x2d4d5e=_0x420e26;this['x']=Graphics[_0x2d4d5e(0x351)],this['y']=Graphics[_0x2d4d5e(0x17f)],this[_0x2d4d5e(0x2f8)]=![],this['setupButtonImage']();},Sprite_TitlePictureButton[_0x420e26(0x6a9)][_0x420e26(0x3ad)]=function(){const _0x44d40d=_0x420e26;this[_0x44d40d(0x187)]=ImageManager['loadPicture'](this[_0x44d40d(0x638)][_0x44d40d(0x668)]),this[_0x44d40d(0x187)][_0x44d40d(0x6cc)](this[_0x44d40d(0x7ff)][_0x44d40d(0x38b)](this));},Sprite_TitlePictureButton[_0x420e26(0x6a9)][_0x420e26(0x7ff)]=function(){const _0x3d9ca0=_0x420e26;this[_0x3d9ca0(0x638)][_0x3d9ca0(0x725)][_0x3d9ca0(0x21f)](this),this[_0x3d9ca0(0x638)][_0x3d9ca0(0x625)][_0x3d9ca0(0x21f)](this),this[_0x3d9ca0(0x7ef)](this[_0x3d9ca0(0x638)][_0x3d9ca0(0x644)]['bind'](this));},Sprite_TitlePictureButton['prototype']['update']=function(){const _0x11bce2=_0x420e26;Sprite_Clickable[_0x11bce2(0x6a9)]['update'][_0x11bce2(0x21f)](this),this[_0x11bce2(0x860)](),this[_0x11bce2(0x605)]();},Sprite_TitlePictureButton[_0x420e26(0x6a9)][_0x420e26(0x7f2)]=function(){const _0x3ef65a=_0x420e26;return VisuMZ[_0x3ef65a(0x61d)]['Settings'][_0x3ef65a(0x53a)][_0x3ef65a(0x3c8)]['ButtonFadeSpeed'];},Sprite_TitlePictureButton['prototype'][_0x420e26(0x860)]=function(){const _0x4b4626=_0x420e26;this[_0x4b4626(0x1eb)]||this['_hovered']?this[_0x4b4626(0x146)]=0xff:(this[_0x4b4626(0x146)]+=this[_0x4b4626(0x2f8)]?this['fadeSpeed']():-0x1*this[_0x4b4626(0x7f2)](),this['opacity']=Math[_0x4b4626(0x623)](0xc0,this['opacity']));},Sprite_TitlePictureButton[_0x420e26(0x6a9)][_0x420e26(0x7ef)]=function(_0x423609){const _0x315569=_0x420e26;this[_0x315569(0x4ff)]=_0x423609;},Sprite_TitlePictureButton[_0x420e26(0x6a9)][_0x420e26(0x496)]=function(){const _0x2ae139=_0x420e26;this[_0x2ae139(0x4ff)]&&this['_clickHandler']();},VisuMZ['CoreEngine']['Spriteset_Base_initialize']=Spriteset_Base[_0x420e26(0x6a9)][_0x420e26(0x5d3)],Spriteset_Base[_0x420e26(0x6a9)]['initialize']=function(){const _0x505276=_0x420e26;VisuMZ[_0x505276(0x61d)][_0x505276(0x363)]['call'](this),this[_0x505276(0x3d2)]();},Spriteset_Base[_0x420e26(0x6a9)][_0x420e26(0x3d2)]=function(){const _0x2be225=_0x420e26;this['_fauxAnimationSprites']=[],this[_0x2be225(0x152)]=this[_0x2be225(0x633)]['x'],this[_0x2be225(0x4ae)]=this[_0x2be225(0x633)]['y'];},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x2c1)]=Spriteset_Base['prototype'][_0x420e26(0x215)],Spriteset_Base[_0x420e26(0x6a9)][_0x420e26(0x215)]=function(_0x169441){const _0x187b32=_0x420e26;this['removeAllFauxAnimations'](),VisuMZ[_0x187b32(0x61d)][_0x187b32(0x2c1)][_0x187b32(0x21f)](this,_0x169441);},VisuMZ[_0x420e26(0x61d)]['Spriteset_Base_update']=Spriteset_Base[_0x420e26(0x6a9)][_0x420e26(0x1bb)],Spriteset_Base[_0x420e26(0x6a9)][_0x420e26(0x1bb)]=function(){const _0x5e0815=_0x420e26;VisuMZ[_0x5e0815(0x61d)]['Spriteset_Base_update'][_0x5e0815(0x21f)](this),this['updatePictureAntiZoom'](),this[_0x5e0815(0x699)]();},Spriteset_Base[_0x420e26(0x6a9)][_0x420e26(0x793)]=function(){const _0x501024=_0x420e26;if(!VisuMZ[_0x501024(0x61d)][_0x501024(0x12e)][_0x501024(0x5ed)]['AntiZoomPictures'])return;if(this['_cacheScaleX']===this[_0x501024(0x633)]['x']&&this[_0x501024(0x4ae)]===this[_0x501024(0x633)]['y'])return;this['adjustPictureAntiZoom'](),this[_0x501024(0x152)]=this[_0x501024(0x633)]['x'],this[_0x501024(0x4ae)]=this[_0x501024(0x633)]['y'];},Spriteset_Base['prototype'][_0x420e26(0x440)]=function(){const _0x5abd0e=_0x420e26;this[_0x5abd0e(0x633)]['x']!==0x0&&(_0x5abd0e(0x7b9)!==_0x5abd0e(0x7b9)?_0x8e0d2e+=_0xfcb9ea+_0x5abd0e(0x7ed)[_0x5abd0e(0x680)](_0x456ddc,_0xe79c66[_0x5abd0e(0x1de)]||_0x5abd0e(0x386))+_0x2ab7d5:(this[_0x5abd0e(0x399)][_0x5abd0e(0x633)]['x']=0x1/this[_0x5abd0e(0x633)]['x'],this['_pictureContainer']['x']=-(this['x']/this[_0x5abd0e(0x633)]['x']))),this['scale']['y']!==0x0&&(this['_pictureContainer'][_0x5abd0e(0x633)]['y']=0x1/this['scale']['y'],this[_0x5abd0e(0x399)]['y']=-(this['y']/this[_0x5abd0e(0x633)]['y']));},Spriteset_Base[_0x420e26(0x6a9)][_0x420e26(0x699)]=function(){const _0x15b60f=_0x420e26;for(const _0x32a8a9 of this[_0x15b60f(0x40f)]){!_0x32a8a9[_0x15b60f(0x852)]()&&this[_0x15b60f(0x554)](_0x32a8a9);}this['processFauxAnimationRequests']();},Spriteset_Base[_0x420e26(0x6a9)][_0x420e26(0x3a4)]=function(){const _0x432ecb=_0x420e26;for(;;){const _0x35b55d=$gameTemp[_0x432ecb(0x221)]();if(_0x35b55d){if(_0x432ecb(0x60f)===_0x432ecb(0x57e)){var _0x5c7e3f=_0x4f4c90-2.25/2.75;return 7.5625*_0x5c7e3f*_0x5c7e3f+0.9375;}else this[_0x432ecb(0x104)](_0x35b55d);}else break;}},Spriteset_Base[_0x420e26(0x6a9)][_0x420e26(0x104)]=function(_0x115b03){const _0x975346=_0x420e26,_0x278cf1=$dataAnimations[_0x115b03[_0x975346(0x3d3)]],_0x2c7a82=_0x115b03[_0x975346(0x4e4)],_0x55e53e=_0x115b03[_0x975346(0x7ba)],_0x4734a5=_0x115b03['mute'];let _0x16ab9b=this[_0x975346(0x2c6)]();const _0x3acebf=this[_0x975346(0x823)]();if(this[_0x975346(0x2e0)](_0x278cf1))for(const _0x4bcf61 of _0x2c7a82){this[_0x975346(0x6a8)]([_0x4bcf61],_0x278cf1,_0x55e53e,_0x16ab9b,_0x4734a5),_0x16ab9b+=_0x3acebf;}else this[_0x975346(0x6a8)](_0x2c7a82,_0x278cf1,_0x55e53e,_0x16ab9b,_0x4734a5);},Spriteset_Base[_0x420e26(0x6a9)]['createFauxAnimationSprite']=function(_0x2a140e,_0x23674b,_0x29d80b,_0x1544a3,_0x2cb8f4){const _0x3107fb=_0x420e26,_0x2509c7=this[_0x3107fb(0x74e)](_0x23674b),_0x2b4710=new(_0x2509c7?Sprite_AnimationMV:Sprite_Animation)(),_0x54347e=this[_0x3107fb(0x71d)](_0x2a140e);this['animationShouldMirror'](_0x2a140e[0x0])&&(_0x29d80b=!_0x29d80b),_0x2b4710['targetObjects']=_0x2a140e,_0x2b4710[_0x3107fb(0x75a)](_0x54347e,_0x23674b,_0x29d80b,_0x1544a3),_0x2b4710['setMute'](_0x2cb8f4),this[_0x3107fb(0x166)]['addChild'](_0x2b4710),this[_0x3107fb(0x40f)][_0x3107fb(0x5e8)](_0x2b4710);},Spriteset_Base[_0x420e26(0x6a9)]['removeFauxAnimation']=function(_0x11f2ac){const _0x1ac7da=_0x420e26;this[_0x1ac7da(0x40f)][_0x1ac7da(0x184)](_0x11f2ac),this[_0x1ac7da(0x166)][_0x1ac7da(0x6d8)](_0x11f2ac);for(const _0x4c96f4 of _0x11f2ac[_0x1ac7da(0x308)]){_0x4c96f4['endAnimation']&&_0x4c96f4[_0x1ac7da(0x742)]();}_0x11f2ac['destroy']();},Spriteset_Base['prototype'][_0x420e26(0x845)]=function(){const _0x4bda5e=_0x420e26;for(const _0x28b0d1 of this[_0x4bda5e(0x40f)]){this[_0x4bda5e(0x554)](_0x28b0d1);}},Spriteset_Base[_0x420e26(0x6a9)][_0x420e26(0x374)]=function(){const _0x123db8=_0x420e26;return this[_0x123db8(0x40f)]['length']>0x0;},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x4b1)]=Spriteset_Base[_0x420e26(0x6a9)][_0x420e26(0x10a)],Spriteset_Base[_0x420e26(0x6a9)]['updatePosition']=function(){const _0x440465=_0x420e26;VisuMZ[_0x440465(0x61d)][_0x440465(0x4b1)][_0x440465(0x21f)](this),this['updatePositionCoreEngine']();},Spriteset_Base[_0x420e26(0x6a9)][_0x420e26(0x85a)]=function(){const _0x5e1293=_0x420e26;if(!$gameScreen)return;if($gameScreen['_shakeDuration']<=0x0)return;this['x']-=Math[_0x5e1293(0x3c7)]($gameScreen['shake']());const _0x5d4044=$gameScreen[_0x5e1293(0x22f)]();switch($gameScreen[_0x5e1293(0x22f)]()){case _0x5e1293(0x553):this[_0x5e1293(0x385)]();break;case'horizontal':this[_0x5e1293(0x236)]();break;case _0x5e1293(0x322):this[_0x5e1293(0x34a)]();break;default:this[_0x5e1293(0x4f8)]();break;}},Spriteset_Base[_0x420e26(0x6a9)][_0x420e26(0x385)]=function(){const _0x2f9e99=_0x420e26,_0x15580a=VisuMZ['CoreEngine'][_0x2f9e99(0x12e)][_0x2f9e99(0x7e0)];if(_0x15580a&&_0x15580a[_0x2f9e99(0x2f7)])return _0x15580a['originalJS'][_0x2f9e99(0x21f)](this);this['x']+=Math[_0x2f9e99(0x3c7)]($gameScreen['shake']());},Spriteset_Base[_0x420e26(0x6a9)][_0x420e26(0x4f8)]=function(){const _0x2342a7=_0x420e26,_0x538c53=VisuMZ[_0x2342a7(0x61d)]['Settings'][_0x2342a7(0x7e0)];if(_0x538c53&&_0x538c53['randomJS'])return _0x538c53[_0x2342a7(0x1e0)]['call'](this);const _0x39038d=$gameScreen['_shakePower']*0.75,_0x4e5f46=$gameScreen['_shakeSpeed']*0.6,_0x5d22a1=$gameScreen[_0x2342a7(0x2b0)];this['x']+=Math[_0x2342a7(0x3c7)](Math[_0x2342a7(0x2ef)](_0x39038d)-Math[_0x2342a7(0x2ef)](_0x4e5f46))*(Math[_0x2342a7(0x623)](_0x5d22a1,0x1e)*0.5),this['y']+=Math[_0x2342a7(0x3c7)](Math[_0x2342a7(0x2ef)](_0x39038d)-Math[_0x2342a7(0x2ef)](_0x4e5f46))*(Math['min'](_0x5d22a1,0x1e)*0.5);},Spriteset_Base[_0x420e26(0x6a9)][_0x420e26(0x236)]=function(){const _0x1a8cc6=_0x420e26,_0x3a98a7=VisuMZ['CoreEngine'][_0x1a8cc6(0x12e)][_0x1a8cc6(0x7e0)];if(_0x3a98a7&&_0x3a98a7['horzJS'])return _0x3a98a7['horzJS'][_0x1a8cc6(0x21f)](this);const _0x17cb8c=$gameScreen[_0x1a8cc6(0x3bf)]*0.75,_0x4841b5=$gameScreen['_shakeSpeed']*0.6,_0x1b85c1=$gameScreen[_0x1a8cc6(0x2b0)];this['x']+=Math[_0x1a8cc6(0x3c7)](Math[_0x1a8cc6(0x2ef)](_0x17cb8c)-Math[_0x1a8cc6(0x2ef)](_0x4841b5))*(Math[_0x1a8cc6(0x623)](_0x1b85c1,0x1e)*0.5);},Spriteset_Base[_0x420e26(0x6a9)][_0x420e26(0x34a)]=function(){const _0x2a3a89=_0x420e26,_0x39b3ed=VisuMZ['CoreEngine']['Settings'][_0x2a3a89(0x7e0)];if(_0x39b3ed&&_0x39b3ed[_0x2a3a89(0x36e)]){if(_0x2a3a89(0x4ab)!==_0x2a3a89(0x4ab))_0x55a13e[_0x2a3a89(0x66e)]>0x0?_0x42b177+=_0x388590+_0x2a3a89(0x820):_0xac91fe+=_0x359c9d+'〖〖〖\x20Troop\x20%1:\x20%2\x20Script\x20〗〗〗\x0a\x0a'[_0x2a3a89(0x680)](_0x445aae,_0x34c634['name']||_0x2a3a89(0x386))+_0x29ec61,_0x3ffa1a+=_0x11bdd2[_0x2a3a89(0x680)](_0x3df007,_0x45f713);else return _0x39b3ed[_0x2a3a89(0x36e)][_0x2a3a89(0x21f)](this);}const _0xccaf99=$gameScreen[_0x2a3a89(0x3bf)]*0.75,_0x4ca384=$gameScreen[_0x2a3a89(0x796)]*0.6,_0x835bff=$gameScreen['_shakeDuration'];this['y']+=Math[_0x2a3a89(0x3c7)](Math[_0x2a3a89(0x2ef)](_0xccaf99)-Math[_0x2a3a89(0x2ef)](_0x4ca384))*(Math[_0x2a3a89(0x623)](_0x835bff,0x1e)*0.5);},Spriteset_Battle['prototype']['createBackground']=function(){const _0x16c6fb=_0x420e26;this[_0x16c6fb(0x2eb)]=new PIXI[(_0x16c6fb(0x34b))][(_0x16c6fb(0x492))](clamp=!![]),this[_0x16c6fb(0x659)]=new Sprite(),this['_backgroundSprite'][_0x16c6fb(0x187)]=SceneManager['backgroundBitmap'](),this[_0x16c6fb(0x659)][_0x16c6fb(0x34b)]=[this[_0x16c6fb(0x2eb)]],this['_baseSprite'][_0x16c6fb(0x39a)](this[_0x16c6fb(0x659)]);},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x572)]=Spriteset_Battle[_0x420e26(0x6a9)]['createEnemies'],Spriteset_Battle[_0x420e26(0x6a9)][_0x420e26(0x589)]=function(){const _0x2840e5=_0x420e26;VisuMZ[_0x2840e5(0x61d)][_0x2840e5(0x12e)]['UI'][_0x2840e5(0x490)]&&this['repositionEnemiesByResolution'](),VisuMZ[_0x2840e5(0x61d)][_0x2840e5(0x572)][_0x2840e5(0x21f)](this);},Spriteset_Battle[_0x420e26(0x6a9)]['repositionEnemiesByResolution']=function(){const _0x26407c=_0x420e26;for(member of $gameTroop[_0x26407c(0x16c)]()){if(_0x26407c(0x133)!==_0x26407c(0x2e3))member[_0x26407c(0x69c)]();else return _0x26407c(0x10b);}},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x61c)]=Window_Base['prototype'][_0x420e26(0x5d3)],Window_Base['prototype'][_0x420e26(0x5d3)]=function(_0x2cdfa6){const _0x4249fb=_0x420e26;_0x2cdfa6['x']=Math[_0x4249fb(0x3c7)](_0x2cdfa6['x']),_0x2cdfa6['y']=Math[_0x4249fb(0x3c7)](_0x2cdfa6['y']),_0x2cdfa6[_0x4249fb(0x351)]=Math[_0x4249fb(0x3c7)](_0x2cdfa6[_0x4249fb(0x351)]),_0x2cdfa6['height']=Math[_0x4249fb(0x3c7)](_0x2cdfa6[_0x4249fb(0x17f)]),this[_0x4249fb(0x841)](),VisuMZ[_0x4249fb(0x61d)][_0x4249fb(0x61c)][_0x4249fb(0x21f)](this,_0x2cdfa6),this[_0x4249fb(0x7c8)]();},Window_Base[_0x420e26(0x6a9)]['initDigitGrouping']=function(){const _0x3a359b=_0x420e26;this['_digitGrouping']=VisuMZ[_0x3a359b(0x61d)][_0x3a359b(0x12e)][_0x3a359b(0x5ed)]['DigitGroupingStandardText'],this[_0x3a359b(0x78a)]=VisuMZ[_0x3a359b(0x61d)][_0x3a359b(0x12e)][_0x3a359b(0x5ed)][_0x3a359b(0x40c)];},Window_Base['prototype'][_0x420e26(0x5f5)]=function(){const _0x27140e=_0x420e26;return VisuMZ[_0x27140e(0x61d)][_0x27140e(0x12e)][_0x27140e(0x180)][_0x27140e(0x25c)];},Window_Base['prototype'][_0x420e26(0x803)]=function(){const _0x15b2fd=_0x420e26;return VisuMZ[_0x15b2fd(0x61d)]['Settings'][_0x15b2fd(0x180)][_0x15b2fd(0x559)];},Window_Base[_0x420e26(0x6a9)]['updateBackOpacity']=function(){const _0x3eae8e=_0x420e26;this['backOpacity']=VisuMZ[_0x3eae8e(0x61d)][_0x3eae8e(0x12e)][_0x3eae8e(0x180)][_0x3eae8e(0x66a)];},Window_Base[_0x420e26(0x6a9)][_0x420e26(0x498)]=function(){const _0x35a3f5=_0x420e26;return VisuMZ['CoreEngine'][_0x35a3f5(0x12e)][_0x35a3f5(0x180)]['TranslucentOpacity'];},Window_Base['prototype'][_0x420e26(0x113)]=function(){const _0x50a585=_0x420e26;return VisuMZ[_0x50a585(0x61d)]['Settings'][_0x50a585(0x180)][_0x50a585(0x1f1)];},VisuMZ[_0x420e26(0x61d)]['Window_Base_update']=Window_Base[_0x420e26(0x6a9)][_0x420e26(0x1bb)],Window_Base[_0x420e26(0x6a9)]['update']=function(){const _0x10e925=_0x420e26;VisuMZ[_0x10e925(0x61d)][_0x10e925(0x549)][_0x10e925(0x21f)](this),this[_0x10e925(0x359)]();},Window_Base[_0x420e26(0x6a9)][_0x420e26(0x6bf)]=function(){const _0x1309d7=_0x420e26;this[_0x1309d7(0x81a)]&&(this[_0x1309d7(0x1a4)]+=this[_0x1309d7(0x113)](),this[_0x1309d7(0x6ad)]()&&(this[_0x1309d7(0x81a)]=![]));},Window_Base['prototype'][_0x420e26(0x163)]=function(){const _0x4f411d=_0x420e26;this['_closing']&&(this[_0x4f411d(0x1a4)]-=this[_0x4f411d(0x113)](),this[_0x4f411d(0x343)]()&&(this[_0x4f411d(0x617)]=![]));},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x72f)]=Window_Base[_0x420e26(0x6a9)][_0x420e26(0x14b)],Window_Base[_0x420e26(0x6a9)][_0x420e26(0x14b)]=function(_0xe054ee,_0x35943b,_0x4ff865,_0x18356f,_0x1ee1bf){const _0x8e03b7=_0x420e26;if(this[_0x8e03b7(0x507)]())_0xe054ee=VisuMZ[_0x8e03b7(0x24d)](_0xe054ee);VisuMZ[_0x8e03b7(0x61d)]['Window_Base_drawText'][_0x8e03b7(0x21f)](this,_0xe054ee,_0x35943b,_0x4ff865,_0x18356f,_0x1ee1bf);},Window_Base[_0x420e26(0x6a9)][_0x420e26(0x507)]=function(){const _0x3270aa=_0x420e26;return this[_0x3270aa(0x7cf)];},VisuMZ['CoreEngine'][_0x420e26(0x56f)]=Window_Base[_0x420e26(0x6a9)][_0x420e26(0x862)],Window_Base[_0x420e26(0x6a9)][_0x420e26(0x862)]=function(_0x51b26b,_0x30bf16,_0x2e2616,_0x17724f){const _0x31928b=_0x420e26;var _0x51451e=VisuMZ[_0x31928b(0x61d)][_0x31928b(0x56f)][_0x31928b(0x21f)](this,_0x51b26b,_0x30bf16,_0x2e2616,_0x17724f);if(this[_0x31928b(0x62c)]())_0x51451e[_0x31928b(0x4db)]=VisuMZ['GroupDigits'](_0x51451e['text']);return _0x51451e;},Window_Base[_0x420e26(0x6a9)][_0x420e26(0x62c)]=function(){const _0x143ee6=_0x420e26;return this[_0x143ee6(0x78a)];},Window_Base[_0x420e26(0x6a9)][_0x420e26(0x6e7)]=function(_0x1e1ee0){const _0x385d61=_0x420e26;this[_0x385d61(0x7cf)]=_0x1e1ee0;},Window_Base[_0x420e26(0x6a9)][_0x420e26(0x4af)]=function(_0x4fcec5){const _0x3f3ace=_0x420e26;this[_0x3f3ace(0x78a)]=_0x4fcec5;},VisuMZ['CoreEngine'][_0x420e26(0x53e)]=Window_Base[_0x420e26(0x6a9)][_0x420e26(0x175)],Window_Base['prototype'][_0x420e26(0x175)]=function(_0x35d377,_0x3dbb10,_0x521f62){const _0x109423=_0x420e26;_0x3dbb10=Math[_0x109423(0x3c7)](_0x3dbb10),_0x521f62=Math[_0x109423(0x3c7)](_0x521f62),VisuMZ[_0x109423(0x61d)][_0x109423(0x53e)][_0x109423(0x21f)](this,_0x35d377,_0x3dbb10,_0x521f62);},VisuMZ[_0x420e26(0x61d)]['Window_Base_drawFace']=Window_Base[_0x420e26(0x6a9)]['drawFace'],Window_Base[_0x420e26(0x6a9)][_0x420e26(0x6b5)]=function(_0x3d2f6d,_0x3db5e2,_0x2cea98,_0x5544aa,_0x276848,_0x40fe35){const _0x6952ec=_0x420e26;_0x276848=_0x276848||ImageManager[_0x6952ec(0x354)],_0x40fe35=_0x40fe35||ImageManager[_0x6952ec(0x2f5)],_0x2cea98=Math[_0x6952ec(0x3c7)](_0x2cea98),_0x5544aa=Math[_0x6952ec(0x3c7)](_0x5544aa),_0x276848=Math[_0x6952ec(0x3c7)](_0x276848),_0x40fe35=Math[_0x6952ec(0x3c7)](_0x40fe35),VisuMZ[_0x6952ec(0x61d)]['Window_Base_drawFace'][_0x6952ec(0x21f)](this,_0x3d2f6d,_0x3db5e2,_0x2cea98,_0x5544aa,_0x276848,_0x40fe35);},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x2d9)]=Window_Base[_0x420e26(0x6a9)][_0x420e26(0x639)],Window_Base[_0x420e26(0x6a9)][_0x420e26(0x639)]=function(_0x309ba5,_0x456aa7,_0x58da73,_0x14de81){const _0x35bf41=_0x420e26;_0x58da73=Math['round'](_0x58da73),_0x14de81=Math[_0x35bf41(0x3c7)](_0x14de81),VisuMZ[_0x35bf41(0x61d)][_0x35bf41(0x2d9)][_0x35bf41(0x21f)](this,_0x309ba5,_0x456aa7,_0x58da73,_0x14de81);},VisuMZ['CoreEngine'][_0x420e26(0x361)]=Window_Selectable[_0x420e26(0x6a9)][_0x420e26(0x12c)],Window_Selectable[_0x420e26(0x6a9)][_0x420e26(0x12c)]=function(_0x35c045){const _0x14e49e=_0x420e26;let _0x9f02c5=VisuMZ[_0x14e49e(0x61d)][_0x14e49e(0x361)][_0x14e49e(0x21f)](this,_0x35c045);return _0x9f02c5['x']=Math[_0x14e49e(0x3c7)](_0x9f02c5['x']),_0x9f02c5['y']=Math[_0x14e49e(0x3c7)](_0x9f02c5['y']),_0x9f02c5['width']=Math[_0x14e49e(0x3c7)](_0x9f02c5[_0x14e49e(0x351)]),_0x9f02c5['height']=Math[_0x14e49e(0x3c7)](_0x9f02c5[_0x14e49e(0x17f)]),_0x9f02c5;},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x60a)]=Window_StatusBase[_0x420e26(0x6a9)][_0x420e26(0x743)],Window_StatusBase['prototype']['drawActorSimpleStatus']=function(_0x2489e4,_0xa72d64,_0xb041e4){const _0x3c4a84=_0x420e26;_0xa72d64=Math[_0x3c4a84(0x3c7)](_0xa72d64),_0xb041e4=Math[_0x3c4a84(0x3c7)](_0xb041e4),VisuMZ['CoreEngine'][_0x3c4a84(0x60a)][_0x3c4a84(0x21f)](this,_0x2489e4,_0xa72d64,_0xb041e4);},Window_Base[_0x420e26(0x6a9)][_0x420e26(0x7c8)]=function(){const _0xb2ac4f=_0x420e26;this[_0xb2ac4f(0x274)]={'duration':0x0,'wholeDuration':0x0,'type':_0xb2ac4f(0x716),'targetX':this['x'],'targetY':this['y'],'targetScaleX':this['scale']['x'],'targetScaleY':this[_0xb2ac4f(0x633)]['y'],'targetOpacity':this[_0xb2ac4f(0x146)],'targetBackOpacity':this[_0xb2ac4f(0x7ee)],'targetContentsOpacity':this[_0xb2ac4f(0x1a3)]};},Window_Base[_0x420e26(0x6a9)][_0x420e26(0x359)]=function(){const _0x11246e=_0x420e26;if(!this[_0x11246e(0x274)])return;if(this[_0x11246e(0x274)][_0x11246e(0x595)]<=0x0)return;this['x']=this[_0x11246e(0x30c)](this['x'],this['_coreEasing'][_0x11246e(0x1a8)]),this['y']=this['applyCoreEasing'](this['y'],this[_0x11246e(0x274)]['targetY']),this['scale']['x']=this[_0x11246e(0x30c)](this[_0x11246e(0x633)]['x'],this['_coreEasing']['targetScaleX']),this['scale']['y']=this[_0x11246e(0x30c)](this[_0x11246e(0x633)]['y'],this['_coreEasing'][_0x11246e(0x3d5)]),this[_0x11246e(0x146)]=this[_0x11246e(0x30c)](this[_0x11246e(0x146)],this[_0x11246e(0x274)][_0x11246e(0x733)]),this[_0x11246e(0x7ee)]=this[_0x11246e(0x30c)](this['backOpacity'],this[_0x11246e(0x274)][_0x11246e(0x1bf)]),this[_0x11246e(0x1a3)]=this[_0x11246e(0x30c)](this[_0x11246e(0x1a3)],this['_coreEasing'][_0x11246e(0x51b)]),this[_0x11246e(0x274)][_0x11246e(0x595)]--;},Window_Base[_0x420e26(0x6a9)][_0x420e26(0x30c)]=function(_0x524fd4,_0x6366a7){const _0x1fa8e5=_0x420e26;if(!this[_0x1fa8e5(0x274)])return _0x6366a7;const _0x26c14d=this[_0x1fa8e5(0x274)][_0x1fa8e5(0x595)],_0x49fe44=this['_coreEasing'][_0x1fa8e5(0x40e)],_0xaa67d=this[_0x1fa8e5(0x356)]((_0x49fe44-_0x26c14d)/_0x49fe44),_0x35faa6=this[_0x1fa8e5(0x356)]((_0x49fe44-_0x26c14d+0x1)/_0x49fe44),_0x253f36=(_0x524fd4-_0x6366a7*_0xaa67d)/(0x1-_0xaa67d);return _0x253f36+(_0x6366a7-_0x253f36)*_0x35faa6;},Window_Base[_0x420e26(0x6a9)]['calcCoreEasing']=function(_0x154040){const _0x2e9c33=_0x420e26;if(!this[_0x2e9c33(0x274)])return _0x154040;return VisuMZ[_0x2e9c33(0x678)](_0x154040,this['_coreEasing'][_0x2e9c33(0x588)]||_0x2e9c33(0x716));},Window_Base[_0x420e26(0x6a9)]['anchorCoreEasing']=function(_0x3627aa,_0x159440){const _0x139711=_0x420e26;if(!this[_0x139711(0x274)])return;this['x']=this[_0x139711(0x274)][_0x139711(0x1a8)],this['y']=this['_coreEasing'][_0x139711(0x190)],this[_0x139711(0x633)]['x']=this[_0x139711(0x274)][_0x139711(0x2df)],this['scale']['y']=this['_coreEasing'][_0x139711(0x3d5)],this[_0x139711(0x146)]=this[_0x139711(0x274)][_0x139711(0x733)],this[_0x139711(0x7ee)]=this[_0x139711(0x274)]['targetBackOpacity'],this[_0x139711(0x1a3)]=this[_0x139711(0x274)]['targetContentsOpacity'],this['setupCoreEasing'](_0x3627aa,_0x159440,this['x'],this['y'],this[_0x139711(0x633)]['x'],this['scale']['y'],this[_0x139711(0x146)],this[_0x139711(0x7ee)],this['contentsOpacity']);},Window_Base[_0x420e26(0x6a9)][_0x420e26(0x29f)]=function(_0x1c7788,_0x416f8d,_0x12bdbe,_0x3f0259,_0x58a737,_0x2ac3dd,_0x46f4c2,_0x2f7dec,_0x326c99){this['_coreEasing']={'duration':_0x1c7788,'wholeDuration':_0x1c7788,'type':_0x416f8d,'targetX':_0x12bdbe,'targetY':_0x3f0259,'targetScaleX':_0x58a737,'targetScaleY':_0x2ac3dd,'targetOpacity':_0x46f4c2,'targetBackOpacity':_0x2f7dec,'targetContentsOpacity':_0x326c99};},Window_Base[_0x420e26(0x6a9)][_0x420e26(0x1e2)]=function(_0x472f5a,_0x406bed,_0x9a5db1,_0x1f6d81,_0x2fbb95){const _0x224c6e=_0x420e26;this['resetFontSettings'](),this[_0x224c6e(0x3f9)][_0x224c6e(0x31e)]=VisuMZ[_0x224c6e(0x61d)][_0x224c6e(0x12e)][_0x224c6e(0x726)][_0x224c6e(0x73c)];const _0x5a7ade=VisuMZ['CoreEngine'][_0x224c6e(0x12e)][_0x224c6e(0x726)][_0x224c6e(0x14e)];if(_0x5a7ade>0x0&&_0x406bed===TextManager[_0x224c6e(0x83a)]){const _0x42f03d=_0x1f6d81+(this[_0x224c6e(0x5f5)]()-ImageManager[_0x224c6e(0x5a8)])/0x2;this[_0x224c6e(0x175)](_0x5a7ade,_0x9a5db1+(_0x2fbb95-ImageManager[_0x224c6e(0x68a)]),_0x42f03d),_0x2fbb95-=ImageManager[_0x224c6e(0x68a)]+0x4;}else this[_0x224c6e(0x171)](ColorManager['systemColor']()),this[_0x224c6e(0x14b)](_0x406bed,_0x9a5db1,_0x1f6d81,_0x2fbb95,_0x224c6e(0x627)),_0x2fbb95-=this[_0x224c6e(0x2b9)](_0x406bed)+0x6;this['resetTextColor']();const _0x23f396=this[_0x224c6e(0x2b9)](this[_0x224c6e(0x7cf)]?VisuMZ['GroupDigits'](_0x472f5a):_0x472f5a);_0x23f396>_0x2fbb95?_0x224c6e(0x360)!==_0x224c6e(0x360)?_0x20b091+=_0x1efdda(_0x5922f3):this[_0x224c6e(0x14b)](VisuMZ[_0x224c6e(0x61d)][_0x224c6e(0x12e)]['Gold'][_0x224c6e(0x25a)],_0x9a5db1,_0x1f6d81,_0x2fbb95,_0x224c6e(0x627)):'hxNRu'===_0x224c6e(0x3e7)?_0x18a924['CoreEngine'][_0x224c6e(0x12e)][_0x224c6e(0x5ed)]['ForceNoPlayTest']&&(this[_0x224c6e(0x179)]=![]):this[_0x224c6e(0x14b)](_0x472f5a,_0x9a5db1,_0x1f6d81,_0x2fbb95,_0x224c6e(0x627)),this[_0x224c6e(0x415)]();},Window_Base[_0x420e26(0x6a9)][_0x420e26(0x83b)]=function(_0x4baecf,_0x5903e7,_0x3a2327,_0x4a4491,_0x233939){const _0x214cae=_0x420e26,_0x3025c5=ImageManager[_0x214cae(0x7d6)]('IconSet'),_0x59cc7f=ImageManager[_0x214cae(0x68a)],_0x7148d4=ImageManager[_0x214cae(0x5a8)],_0x3a9cff=_0x4baecf%0x10*_0x59cc7f,_0xf3a521=Math['floor'](_0x4baecf/0x10)*_0x7148d4,_0x423d0a=_0x4a4491,_0x24d195=_0x4a4491;this['contents'][_0x214cae(0x4cb)][_0x214cae(0x390)]=_0x233939,this[_0x214cae(0x3f9)][_0x214cae(0x5ce)](_0x3025c5,_0x3a9cff,_0xf3a521,_0x59cc7f,_0x7148d4,_0x5903e7,_0x3a2327,_0x423d0a,_0x24d195),this['contents'][_0x214cae(0x4cb)][_0x214cae(0x390)]=!![];},Window_Base[_0x420e26(0x6a9)]['drawGauge']=function(_0x34b1ca,_0x1b115a,_0x907736,_0x3f8b3a,_0x4c75f8,_0x5c9adf){const _0x39969e=_0x420e26,_0x415fb0=Math[_0x39969e(0x60d)]((_0x907736-0x2)*_0x3f8b3a),_0xa578b8=Sprite_Gauge[_0x39969e(0x6a9)][_0x39969e(0x720)][_0x39969e(0x21f)](this),_0x3334c9=_0x1b115a+this[_0x39969e(0x5f5)]()-_0xa578b8-0x2;this[_0x39969e(0x3f9)][_0x39969e(0x691)](_0x34b1ca,_0x3334c9,_0x907736,_0xa578b8,ColorManager[_0x39969e(0x379)]()),this[_0x39969e(0x3f9)]['gradientFillRect'](_0x34b1ca+0x1,_0x3334c9+0x1,_0x415fb0,_0xa578b8-0x2,_0x4c75f8,_0x5c9adf);},Window_Selectable[_0x420e26(0x6a9)][_0x420e26(0x7fe)]=function(_0x27afc3){const _0x1feab6=_0x420e26;let _0x461e71=this[_0x1feab6(0x748)]();const _0x3a51c1=this['maxItems'](),_0x1defad=this[_0x1feab6(0x81c)]();if(this['isUseModernControls']()&&(_0x461e71<_0x3a51c1||_0x27afc3&&_0x1defad===0x1)){_0x461e71+=_0x1defad;if(_0x461e71>=_0x3a51c1)_0x461e71=_0x3a51c1-0x1;this[_0x1feab6(0x412)](_0x461e71);}else!this[_0x1feab6(0x670)]()&&((_0x461e71<_0x3a51c1-_0x1defad||_0x27afc3&&_0x1defad===0x1)&&(_0x1feab6(0x417)!==_0x1feab6(0x417)?this[_0x1feab6(0x556)]():this[_0x1feab6(0x412)]((_0x461e71+_0x1defad)%_0x3a51c1)));},VisuMZ['CoreEngine'][_0x420e26(0x1ab)]=Window_Selectable[_0x420e26(0x6a9)][_0x420e26(0x7fe)],Window_Selectable['prototype']['cursorDown']=function(_0x1fbbcc){const _0x520437=_0x420e26;if(this[_0x520437(0x670)]()&&_0x1fbbcc&&this[_0x520437(0x81c)]()===0x1&&this[_0x520437(0x748)]()===this[_0x520437(0x673)]()-0x1){if('hDiXM'===_0x520437(0x779))return this[_0x520437(0x4a0)](_0x48f0a1);else this['smoothSelect'](0x0);}else VisuMZ[_0x520437(0x61d)]['Window_Selectable_cursorDown']['call'](this,_0x1fbbcc);},Window_Selectable[_0x420e26(0x6a9)][_0x420e26(0x538)]=function(_0x1dae16){const _0x151c80=_0x420e26;let _0x1aab18=Math[_0x151c80(0x609)](0x0,this[_0x151c80(0x748)]());const _0x4bc43f=this['maxItems'](),_0x357dbe=this[_0x151c80(0x81c)]();if(this[_0x151c80(0x670)]()&&_0x1aab18>0x0||_0x1dae16&&_0x357dbe===0x1){if(_0x151c80(0x403)===_0x151c80(0x403)){_0x1aab18-=_0x357dbe;if(_0x1aab18<=0x0)_0x1aab18=0x0;this[_0x151c80(0x412)](_0x1aab18);}else{const _0x4c880e=_0x5e8d25[_0x151c80(0x46a)]();if(_0x4c880e)for(const _0xa0c99 of _0x4c880e){if(_0xa0c99&&_0xa0c99[_0x151c80(0x4e6)])return!![];}}}else!this[_0x151c80(0x670)]()&&((_0x1aab18>=_0x357dbe||_0x1dae16&&_0x357dbe===0x1)&&this[_0x151c80(0x412)]((_0x1aab18-_0x357dbe+_0x4bc43f)%_0x4bc43f));},VisuMZ['CoreEngine'][_0x420e26(0x5da)]=Window_Selectable[_0x420e26(0x6a9)][_0x420e26(0x538)],Window_Selectable['prototype'][_0x420e26(0x538)]=function(_0x71ded2){const _0xa8c452=_0x420e26;this[_0xa8c452(0x670)]()&&_0x71ded2&&this[_0xa8c452(0x81c)]()===0x1&&this['index']()===0x0?this['smoothSelect'](this['maxItems']()-0x1):_0xa8c452(0x3d8)===_0xa8c452(0x3d8)?VisuMZ[_0xa8c452(0x61d)][_0xa8c452(0x5da)]['call'](this,_0x71ded2):(this[_0xa8c452(0x845)](),_0x486104[_0xa8c452(0x61d)][_0xa8c452(0x2c1)][_0xa8c452(0x21f)](this,_0x3433da));},Window_Selectable[_0x420e26(0x6a9)][_0x420e26(0x670)]=function(){const _0x2cefcc=_0x420e26;return VisuMZ[_0x2cefcc(0x61d)][_0x2cefcc(0x12e)][_0x2cefcc(0x5ed)]['ModernControls'];},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x258)]=Window_Selectable[_0x420e26(0x6a9)]['processCursorMove'],Window_Selectable[_0x420e26(0x6a9)][_0x420e26(0x4e8)]=function(){const _0x2a8127=_0x420e26;this[_0x2a8127(0x670)]()?(this[_0x2a8127(0x6bb)](),this[_0x2a8127(0x19f)]()):VisuMZ[_0x2a8127(0x61d)][_0x2a8127(0x258)][_0x2a8127(0x21f)](this);},Window_Selectable[_0x420e26(0x6a9)][_0x420e26(0x729)]=function(){return!![];},Window_Selectable[_0x420e26(0x6a9)][_0x420e26(0x6bb)]=function(){const _0x188255=_0x420e26;if(this[_0x188255(0x76a)]()){const _0xeb4c81=this[_0x188255(0x748)]();Input[_0x188255(0x2b5)](_0x188255(0x6c5))&&(Input[_0x188255(0x7af)](_0x188255(0x4fb))&&this[_0x188255(0x729)]()?this[_0x188255(0x1c7)]():this['cursorDown'](Input[_0x188255(0x58b)]('down')));if(Input[_0x188255(0x2b5)]('up')){if(Input[_0x188255(0x7af)](_0x188255(0x4fb))&&this[_0x188255(0x729)]()){if(_0x188255(0x569)!==_0x188255(0x430))this[_0x188255(0x145)]();else{const _0x5ac50f=this['_viewportSize'],_0x26b752=this[_0x188255(0x51d)],_0x27eaf3=this['_animation'][_0x188255(0x4ac)]*(this[_0x188255(0x43f)]?-0x1:0x1)-_0x5ac50f/0x2,_0x5e9468=this['_animation'][_0x188255(0x24e)]-_0x26b752/0x2,_0x104ae0=this[_0x188255(0x871)](_0x5ddfa6);_0x2993c2['gl'][_0x188255(0x5aa)](_0x27eaf3+_0x104ae0['x'],_0x5e9468+_0x104ae0['y'],_0x5ac50f,_0x26b752);}}else this[_0x188255(0x538)](Input['isTriggered']('up'));}Input[_0x188255(0x2b5)]('right')&&this[_0x188255(0x114)](Input[_0x188255(0x58b)]('right'));Input[_0x188255(0x2b5)]('left')&&('IuYMi'==='CBGHT'?(this['_spriteset'][_0x188255(0x1bb)](),this[_0x188255(0x2b2)]['hide'](),this[_0x188255(0x1d1)][_0x188255(0x2f8)]=![],_0x5cba48[_0x188255(0x377)]()):this['cursorLeft'](Input[_0x188255(0x58b)](_0x188255(0x45e))));!this[_0x188255(0x2b8)](_0x188255(0x4f1))&&Input[_0x188255(0x2b5)](_0x188255(0x4f1))&&this['cursorPagedown']();if(!this[_0x188255(0x2b8)](_0x188255(0x5fc))&&Input['isRepeated'](_0x188255(0x5fc))){if('URSIj'!==_0x188255(0x5b8))this[_0x188255(0x145)]();else{const _0x290bd7=_0x1fc1c6['currentClass']()[_0x188255(0x1de)][_0x188255(0x53c)](/\\I\[(\d+)\]/gi,'');this[_0x188255(0x14b)](_0x290bd7,_0x5d31a1,_0x1415e7,_0x18b8b3);}}this[_0x188255(0x748)]()!==_0xeb4c81&&this[_0x188255(0x330)]();}},Window_Selectable[_0x420e26(0x6a9)]['processCursorHomeEndTrigger']=function(){const _0x56dae8=_0x420e26;if(this[_0x56dae8(0x76a)]()){if(_0x56dae8(0x7b5)!==_0x56dae8(0x7b5))_0x64043a=_0x46589e,this[_0x56dae8(0x41e)](_0x27de3f,_0x58cf56);else{const _0x5a6852=this[_0x56dae8(0x748)]();if(Input['isTriggered'](_0x56dae8(0x4b9))){if(_0x56dae8(0x231)!==_0x56dae8(0x231))return this[_0x56dae8(0x751)]()||this[_0x56dae8(0x12b)]();else this[_0x56dae8(0x412)](Math[_0x56dae8(0x623)](this[_0x56dae8(0x748)](),0x0));}Input['isTriggered'](_0x56dae8(0x762))&&this[_0x56dae8(0x412)](Math[_0x56dae8(0x609)](this['index'](),this['maxItems']()-0x1));if(this['index']()!==_0x5a6852){if(_0x56dae8(0x10c)===_0x56dae8(0x5c4))return _0x5db8e2[_0x56dae8(0x61d)]['Settings'][_0x56dae8(0x2da)][_0x56dae8(0x196)];else this[_0x56dae8(0x330)]();}}}},VisuMZ[_0x420e26(0x61d)]['Window_Selectable_processTouch']=Window_Selectable[_0x420e26(0x6a9)][_0x420e26(0x605)],Window_Selectable['prototype']['processTouch']=function(){const _0x1bbed3=_0x420e26;this[_0x1bbed3(0x670)]()?this[_0x1bbed3(0x1ea)]():VisuMZ[_0x1bbed3(0x61d)][_0x1bbed3(0x792)][_0x1bbed3(0x21f)](this);},Window_Selectable[_0x420e26(0x6a9)][_0x420e26(0x1ea)]=function(){const _0x4dc958=_0x420e26;VisuMZ[_0x4dc958(0x61d)][_0x4dc958(0x792)][_0x4dc958(0x21f)](this);},Window_Selectable['prototype'][_0x420e26(0x21d)]=function(){const _0x5b5f70=_0x420e26;return VisuMZ['CoreEngine'][_0x5b5f70(0x12e)]['Window'][_0x5b5f70(0x227)];},Window_Selectable[_0x420e26(0x6a9)][_0x420e26(0x526)]=function(){const _0x1ae284=_0x420e26;return VisuMZ[_0x1ae284(0x61d)]['Settings'][_0x1ae284(0x180)][_0x1ae284(0x15a)];},Window_Selectable[_0x420e26(0x6a9)]['itemHeight']=function(){const _0x274174=_0x420e26;return Window_Scrollable[_0x274174(0x6a9)][_0x274174(0x69e)][_0x274174(0x21f)](this)+VisuMZ[_0x274174(0x61d)][_0x274174(0x12e)]['Window'][_0x274174(0x1f6)];;},VisuMZ[_0x420e26(0x61d)]['Window_Selectable_drawBackgroundRect']=Window_Selectable[_0x420e26(0x6a9)][_0x420e26(0x586)],Window_Selectable['prototype']['drawBackgroundRect']=function(_0x49f4bc){const _0x1e5fd4=_0x420e26,_0x50adbb=VisuMZ[_0x1e5fd4(0x61d)][_0x1e5fd4(0x12e)][_0x1e5fd4(0x180)];if(_0x50adbb[_0x1e5fd4(0x72c)]===![])return;if(_0x50adbb['DrawItemBackgroundJS'])_0x50adbb['DrawItemBackgroundJS'][_0x1e5fd4(0x21f)](this,_0x49f4bc);else{if(_0x1e5fd4(0x4fd)===_0x1e5fd4(0x567)){var _0x2ec476=_0x9d5bdc(_0x5049a2['$1']);try{_0x1c8cae+=_0x4e51ac(_0x2ec476);}catch(_0x15fb2e){if(_0x3d90bc[_0x1e5fd4(0x103)]())_0x56a02e[_0x1e5fd4(0x39f)](_0x15fb2e);}}else VisuMZ[_0x1e5fd4(0x61d)][_0x1e5fd4(0x10d)][_0x1e5fd4(0x21f)](this,_0x49f4bc);}},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x42d)]=Window_Gold['prototype'][_0x420e26(0x560)],Window_Gold['prototype'][_0x420e26(0x560)]=function(){const _0xb4bdad=_0x420e26;if(this[_0xb4bdad(0x825)]()){if(_0xb4bdad(0x65f)===_0xb4bdad(0x65f))this[_0xb4bdad(0x41b)]();else return _0x3c17bd[_0xb4bdad(0x7ce)][_0xb4bdad(0x7ab)][_0xb4bdad(0x21f)](this);}else VisuMZ[_0xb4bdad(0x61d)]['Window_Gold_refresh'][_0xb4bdad(0x21f)](this);},Window_Gold[_0x420e26(0x6a9)][_0x420e26(0x825)]=function(){const _0x50db76=_0x420e26;if(TextManager[_0x50db76(0x83a)]!==this[_0x50db76(0x83a)]())return![];return VisuMZ[_0x50db76(0x61d)]['Settings'][_0x50db76(0x726)][_0x50db76(0x1b8)];},Window_Gold[_0x420e26(0x6a9)][_0x420e26(0x41b)]=function(){const _0x175b47=_0x420e26;this[_0x175b47(0x415)](),this[_0x175b47(0x3f9)]['clear'](),this[_0x175b47(0x3f9)][_0x175b47(0x31e)]=VisuMZ[_0x175b47(0x61d)][_0x175b47(0x12e)]['Gold'][_0x175b47(0x73c)];const _0x1b7e31=VisuMZ[_0x175b47(0x61d)][_0x175b47(0x12e)]['Gold']['GoldIcon'],_0x2887ef=this[_0x175b47(0x66f)](0x0);if(_0x1b7e31>0x0){if('rMCAL'===_0x175b47(0x216)){const _0x48afd1=_0x2887ef['y']+(this[_0x175b47(0x5f5)]()-ImageManager['iconHeight'])/0x2;this[_0x175b47(0x175)](_0x1b7e31,_0x2887ef['x'],_0x48afd1);const _0x161231=ImageManager[_0x175b47(0x68a)]+0x4;_0x2887ef['x']+=_0x161231,_0x2887ef['width']-=_0x161231;}else this[_0x175b47(0x3e1)](_0x3aaeae['nickname'](),_0x2fe370,_0x2357b8,_0x5c448f);}this[_0x175b47(0x171)](ColorManager[_0x175b47(0x161)]()),this[_0x175b47(0x14b)](this['currencyUnit'](),_0x2887ef['x'],_0x2887ef['y'],_0x2887ef[_0x175b47(0x351)],_0x175b47(0x45e));const _0x4e06e6=this[_0x175b47(0x2b9)](this[_0x175b47(0x83a)]())+0x6;;_0x2887ef['x']+=_0x4e06e6,_0x2887ef[_0x175b47(0x351)]-=_0x4e06e6,this[_0x175b47(0x2ae)]();const _0x58fcb7=this['value'](),_0x241f3f=this[_0x175b47(0x2b9)](this[_0x175b47(0x7cf)]?VisuMZ[_0x175b47(0x24d)](this[_0x175b47(0x4d9)]()):this[_0x175b47(0x4d9)]());if(_0x241f3f>_0x2887ef[_0x175b47(0x351)]){if(_0x175b47(0x4ad)!==_0x175b47(0x4ad))return _0x56e7ed[_0x175b47(0x61d)][_0x175b47(0x12e)][_0x175b47(0x5ed)][_0x175b47(0x3c4)];else this[_0x175b47(0x14b)](VisuMZ[_0x175b47(0x61d)][_0x175b47(0x12e)][_0x175b47(0x726)]['GoldOverlap'],_0x2887ef['x'],_0x2887ef['y'],_0x2887ef[_0x175b47(0x351)],_0x175b47(0x627));}else this[_0x175b47(0x14b)](this['value'](),_0x2887ef['x'],_0x2887ef['y'],_0x2887ef[_0x175b47(0x351)],'right');this[_0x175b47(0x415)]();},Window_StatusBase[_0x420e26(0x6a9)][_0x420e26(0x309)]=function(_0x41b609,_0x27b464,_0x730f5,_0x1dd035,_0x493afc){const _0x479200=_0x420e26;_0x1dd035=String(_0x1dd035||'')[_0x479200(0x741)]();if(VisuMZ[_0x479200(0x61d)][_0x479200(0x12e)][_0x479200(0x7eb)][_0x479200(0x72a)]){if('MygsB'===_0x479200(0x2f6)){var _0x550d08=_0x5132dd(_0x40fff2['$1'])/0x64;_0x560a7c+=_0x550d08;}else{const _0x568a7a=VisuMZ[_0x479200(0x577)](_0x1dd035);if(_0x493afc){if('BrpZP'!==_0x479200(0x721)){if(_0xd1ce84[_0x479200(0x205)]!==_0x4dc3fd)return _0x2de996[_0x479200(0x205)];if(this[_0x479200(0x56d)]===_0x22410f)this[_0x479200(0x297)]();if(this['_CoreEngineSettings']['BattleSystem']===_0x19cd29)this[_0x479200(0x2dc)]();return this[_0x479200(0x56d)]['BattleSystem'];}else this[_0x479200(0x83b)](_0x568a7a,_0x41b609,_0x27b464,this['gaugeLineHeight']()),_0x730f5-=this['gaugeLineHeight']()+0x2,_0x41b609+=this['gaugeLineHeight']()+0x2;}else this['drawIcon'](_0x568a7a,_0x41b609+0x2,_0x27b464+0x2),_0x730f5-=ImageManager[_0x479200(0x68a)]+0x4,_0x41b609+=ImageManager[_0x479200(0x68a)]+0x4;}}const _0x1b9bc4=TextManager['param'](_0x1dd035);this[_0x479200(0x415)](),this[_0x479200(0x171)](ColorManager[_0x479200(0x161)]());if(_0x493afc){if('QBaBJ'!==_0x479200(0x654)){const _0x2e1070=this[_0x479200(0x6c3)]/0x5,_0x29d335=_0x478d52['_scene'],_0x401081=_0x29d335['buttonAssistKey%1'[_0x479200(0x680)](_0x388ba2)](),_0x5ad792=_0x29d335['buttonAssistText%1'[_0x479200(0x680)](_0x1681d8)]();this['_data']['key%1'[_0x479200(0x680)](_0x96947a)]=_0x401081,this['_data'][_0x479200(0x546)['format'](_0x12776a)]=_0x5ad792;if(_0x401081==='')return;if(_0x5ad792==='')return;const _0x1dfde0=_0x29d335[_0x479200(0x3c3)[_0x479200(0x680)](_0x3afe32)](),_0x422083=this['itemPadding'](),_0x3945e1=_0x2e1070*(_0x4c0875-0x1)+_0x422083+_0x1dfde0,_0x43bb80=_0x5e2c02[_0x479200(0x61d)][_0x479200(0x12e)][_0x479200(0x7c1)][_0x479200(0x449)];this[_0x479200(0x3e1)](_0x43bb80[_0x479200(0x680)](_0x401081,_0x5ad792),_0x3945e1,0x0,_0x2e1070-_0x422083*0x2);}else this[_0x479200(0x3f9)][_0x479200(0x31e)]=this['smallParamFontSize'](),this['contents'][_0x479200(0x14b)](_0x1b9bc4,_0x41b609,_0x27b464,_0x730f5,this[_0x479200(0x6c0)](),_0x479200(0x45e));}else{if(_0x479200(0x445)!==_0x479200(0x5ab))this[_0x479200(0x14b)](_0x1b9bc4,_0x41b609,_0x27b464,_0x730f5);else{const _0xbdc27=[_0x479200(0x62a),_0x479200(0x1c1),'battlebacks2',_0x479200(0x27e),_0x479200(0x241),_0x479200(0x765),'parallaxes',_0x479200(0x840),_0x479200(0x5d9),_0x479200(0x773),_0x479200(0x5af),'tilesets',_0x479200(0x38e),_0x479200(0x7e5)];for(const _0x22679e of _0xbdc27){const _0x2e1818=_0x31dd50['CoreEngine'][_0x479200(0x12e)]['ImgLoad'][_0x22679e],_0x111380=_0x479200(0x858)['format'](_0x22679e);for(const _0x43351f of _0x2e1818){_0x11ee2a[_0x479200(0x7ec)](_0x111380,_0x43351f);}}}}this[_0x479200(0x415)]();},Window_StatusBase[_0x420e26(0x6a9)][_0x420e26(0x545)]=function(){const _0x565896=_0x420e26;return $gameSystem[_0x565896(0x777)]()-0x8;},Window_StatusBase[_0x420e26(0x6a9)][_0x420e26(0x86d)]=function(_0x43769d,_0x29495d,_0xacbed8,_0x2b34be){const _0xca9a67=_0x420e26;_0x2b34be=_0x2b34be||0xa8,this[_0xca9a67(0x2ae)]();if(VisuMZ[_0xca9a67(0x61d)][_0xca9a67(0x12e)]['UI'][_0xca9a67(0x4aa)])this[_0xca9a67(0x3e1)](_0x43769d[_0xca9a67(0x389)]()['name'],_0x29495d,_0xacbed8,_0x2b34be);else{const _0x498631=_0x43769d[_0xca9a67(0x389)]()[_0xca9a67(0x1de)][_0xca9a67(0x53c)](/\\I\[(\d+)\]/gi,'');this['drawText'](_0x498631,_0x29495d,_0xacbed8,_0x2b34be);}},Window_StatusBase[_0x420e26(0x6a9)][_0x420e26(0x499)]=function(_0x3f9d78,_0x15c85a,_0x2354e6,_0x30aeb0){const _0x2e8b5a=_0x420e26;_0x30aeb0=_0x30aeb0||0x10e,this[_0x2e8b5a(0x2ae)]();if(VisuMZ[_0x2e8b5a(0x61d)][_0x2e8b5a(0x12e)]['UI'][_0x2e8b5a(0x72e)]){if(_0x2e8b5a(0x3f6)===_0x2e8b5a(0x278))return _0x265a51[_0x2e8b5a(0x61d)][_0x2e8b5a(0x12e)][_0x2e8b5a(0x2da)][_0x2e8b5a(0x193)][_0x2e8b5a(0x21f)](this,_0xdacc0e);else this[_0x2e8b5a(0x3e1)](_0x3f9d78[_0x2e8b5a(0x1b0)](),_0x15c85a,_0x2354e6,_0x30aeb0);}else{const _0x435b29=_0x3f9d78[_0x2e8b5a(0x1b0)]()['replace'](/\\I\[(\d+)\]/gi,'');this[_0x2e8b5a(0x14b)](_0x3f9d78[_0x2e8b5a(0x1b0)](),_0x15c85a,_0x2354e6,_0x30aeb0);}},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x2d0)]=Window_StatusBase[_0x420e26(0x6a9)][_0x420e26(0x715)],Window_StatusBase[_0x420e26(0x6a9)][_0x420e26(0x715)]=function(_0x18d295,_0x373e72,_0x1c4b7e){const _0x359b49=_0x420e26;if(this[_0x359b49(0x784)]())this[_0x359b49(0x3b5)](_0x18d295,_0x373e72,_0x1c4b7e);VisuMZ[_0x359b49(0x61d)][_0x359b49(0x2d0)][_0x359b49(0x21f)](this,_0x18d295,_0x373e72,_0x1c4b7e);},Window_StatusBase[_0x420e26(0x6a9)]['isExpGaugeDrawn']=function(){const _0x1e0afc=_0x420e26;return VisuMZ[_0x1e0afc(0x61d)][_0x1e0afc(0x12e)]['UI'][_0x1e0afc(0x2a4)];},Window_StatusBase[_0x420e26(0x6a9)]['drawActorExpGauge']=function(_0xadfe89,_0x54b34d,_0xcf1a4f){const _0x379f3a=_0x420e26;if(!_0xadfe89)return;if(!_0xadfe89['isActor']())return;const _0x533532=0x80,_0x34c5c8=_0xadfe89[_0x379f3a(0x23d)]();let _0x15122b=ColorManager['expGaugeColor1'](),_0x563a63=ColorManager[_0x379f3a(0x6f8)]();_0x34c5c8>=0x1&&(_0x15122b=ColorManager[_0x379f3a(0x4ba)](),_0x563a63=ColorManager[_0x379f3a(0x3e9)]()),this[_0x379f3a(0x239)](_0x54b34d,_0xcf1a4f,_0x533532,_0x34c5c8,_0x15122b,_0x563a63);},Window_EquipStatus['prototype'][_0x420e26(0x5ea)]=function(){const _0x5270fb=_0x420e26;let _0x5928d1=0x0;for(const _0xc2cb2a of VisuMZ[_0x5270fb(0x61d)][_0x5270fb(0x12e)][_0x5270fb(0x7eb)]['DisplayedParams']){const _0x5d5dd5=this[_0x5270fb(0x803)](),_0x556943=this['paramY'](_0x5928d1);this[_0x5270fb(0x5f1)](_0x5d5dd5,_0x556943,_0xc2cb2a),_0x5928d1++;}},Window_EquipStatus['prototype'][_0x420e26(0x108)]=function(_0x1df5fc,_0x31cb54,_0x41da4d){const _0x2b9e41=_0x420e26,_0x357d59=this['paramX']()-this[_0x2b9e41(0x803)]()*0x2;this[_0x2b9e41(0x309)](_0x1df5fc,_0x31cb54,_0x357d59,_0x41da4d,![]);},Window_EquipStatus['prototype']['drawCurrentParam']=function(_0x127a91,_0x1ae40b,_0x128ecd){const _0x237708=_0x420e26,_0x109fa0=this[_0x237708(0x838)]();this['resetTextColor'](),this[_0x237708(0x14b)](this[_0x237708(0x294)][_0x237708(0x253)](_0x128ecd,!![]),_0x127a91,_0x1ae40b,_0x109fa0,_0x237708(0x627));},Window_EquipStatus[_0x420e26(0x6a9)][_0x420e26(0x36c)]=function(_0x3d4602,_0x30af30){const _0x1c204e=_0x420e26,_0xceaf4c=this[_0x1c204e(0x84f)]();this['changeTextColor'](ColorManager[_0x1c204e(0x161)]());const _0x174c69=VisuMZ['CoreEngine'][_0x1c204e(0x12e)]['UI']['ParamArrow'];this[_0x1c204e(0x14b)](_0x174c69,_0x3d4602,_0x30af30,_0xceaf4c,'center');},Window_EquipStatus[_0x420e26(0x6a9)][_0x420e26(0x1fd)]=function(_0x1691b1,_0x519b64,_0x338d13){const _0x14e119=_0x420e26,_0xdd9204=this[_0x14e119(0x838)](),_0x598770=this['_tempActor'][_0x14e119(0x253)](_0x338d13),_0x463d9c=_0x598770-this[_0x14e119(0x294)]['paramValueByName'](_0x338d13);this[_0x14e119(0x171)](ColorManager['paramchangeTextColor'](_0x463d9c)),this[_0x14e119(0x14b)](this[_0x14e119(0x6a4)]['paramValueByName'](_0x338d13,!![]),_0x1691b1,_0x519b64,_0xdd9204,'right');},VisuMZ[_0x420e26(0x61d)]['Window_EquipItem_isEnabled']=Window_EquipItem['prototype']['isEnabled'],Window_EquipItem[_0x420e26(0x6a9)][_0x420e26(0x5f9)]=function(_0x240e88){const _0x366218=_0x420e26;if(_0x240e88&&this['_actor']){if(_0x366218(0x6da)===_0x366218(0x136))_0x47e942&&_0x19766c[_0x366218(0x5e8)](_0x40006e);else return this[_0x366218(0x294)][_0x366218(0x55c)](_0x240e88);}else return _0x366218(0x409)!=='cObne'?_0x5f1a1b[_0x366218(0x47b)]&&_0x5b1895[_0x366218(0x6ec)][_0x366218(0x52e)]('['+_0x1f5ed3+']'):VisuMZ['CoreEngine'][_0x366218(0x4fc)][_0x366218(0x21f)](this,_0x240e88);},Window_StatusParams['prototype'][_0x420e26(0x673)]=function(){const _0x168e56=_0x420e26;return VisuMZ[_0x168e56(0x61d)][_0x168e56(0x12e)][_0x168e56(0x7eb)]['DisplayedParams'][_0x168e56(0x66e)];},Window_StatusParams[_0x420e26(0x6a9)][_0x420e26(0x5f1)]=function(_0x4e8efb){const _0x3042=_0x420e26,_0x9778cc=this[_0x3042(0x66f)](_0x4e8efb),_0x69812a=VisuMZ['CoreEngine']['Settings'][_0x3042(0x7eb)][_0x3042(0x7ca)][_0x4e8efb],_0x325c02=TextManager[_0x3042(0x646)](_0x69812a),_0x28a40b=this[_0x3042(0x294)][_0x3042(0x253)](_0x69812a,!![]);this[_0x3042(0x309)](_0x9778cc['x'],_0x9778cc['y'],0xa0,_0x69812a,![]),this['resetTextColor'](),this['drawText'](_0x28a40b,_0x9778cc['x']+0xa0,_0x9778cc['y'],0x3c,_0x3042(0x627));};if(VisuMZ[_0x420e26(0x61d)][_0x420e26(0x12e)][_0x420e26(0x3e5)][_0x420e26(0x3b9)]){VisuMZ['CoreEngine']['Settings'][_0x420e26(0x3e5)][_0x420e26(0x4d5)]&&(Window_NameInput[_0x420e26(0x45b)]=['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','\x27','`','Z','X','C','V','B','N','M',',','.','q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l',':','~','z','x','c','v','b','n','m','\x22',';','1','2','3','4','5','6','7','8','9','0','!','@','#','$','%','^','&','*','(',')','<','>','[',']','-','_','/','\x20',_0x420e26(0x71b),'OK']);;VisuMZ[_0x420e26(0x61d)][_0x420e26(0x7fd)]=Window_NameInput['prototype']['initialize'],Window_NameInput[_0x420e26(0x6a9)][_0x420e26(0x5d3)]=function(_0x4d8a51){const _0x4d6ca6=_0x420e26;this['_mode']=this[_0x4d6ca6(0x63f)](),VisuMZ[_0x4d6ca6(0x61d)][_0x4d6ca6(0x7fd)][_0x4d6ca6(0x21f)](this,_0x4d8a51),this[_0x4d6ca6(0x806)]===_0x4d6ca6(0x854)?this['select'](0x0):(Input[_0x4d6ca6(0x782)](),this[_0x4d6ca6(0x70e)]());},Window_NameInput[_0x420e26(0x6a9)][_0x420e26(0x63f)]=function(){const _0x4c24b4=_0x420e26;if(Input[_0x4c24b4(0x14c)]())return _0x4c24b4(0x854);return VisuMZ[_0x4c24b4(0x61d)][_0x4c24b4(0x12e)][_0x4c24b4(0x3e5)][_0x4c24b4(0x201)]||'keyboard';},VisuMZ[_0x420e26(0x61d)]['Window_NameInput_processHandling']=Window_NameInput[_0x420e26(0x6a9)][_0x420e26(0x7d8)],Window_NameInput[_0x420e26(0x6a9)][_0x420e26(0x7d8)]=function(){const _0x144371=_0x420e26;if(!this[_0x144371(0x6ad)]())return;if(!this['active'])return;if(this[_0x144371(0x806)]===_0x144371(0x421)&&Input[_0x144371(0x203)]())this[_0x144371(0x46c)](_0x144371(0x854));else{if(Input[_0x144371(0x30a)](_0x144371(0x566)))Input[_0x144371(0x782)](),this[_0x144371(0x1ae)]();else{if(Input[_0x144371(0x58b)](_0x144371(0x4bc)))Input[_0x144371(0x782)](),this['_mode']===_0x144371(0x421)?this[_0x144371(0x46c)](_0x144371(0x854)):this[_0x144371(0x46c)](_0x144371(0x421));else{if(this[_0x144371(0x806)]===_0x144371(0x421))this[_0x144371(0x7f3)]();else Input['isSpecialCode'](_0x144371(0x47e))?(Input[_0x144371(0x782)](),this[_0x144371(0x46c)](_0x144371(0x421))):_0x144371(0x1ee)===_0x144371(0x1ee)?VisuMZ['CoreEngine']['Window_NameInput_processHandling']['call'](this):(_0x113a68(_0x144371(0x454)[_0x144371(0x680)](_0x52a403,_0x2bd5e6)),_0x245bd4[_0x144371(0x4ce)]());}}}},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x1e4)]=Window_NameInput[_0x420e26(0x6a9)][_0x420e26(0x605)],Window_NameInput[_0x420e26(0x6a9)]['processTouch']=function(){const _0x5e1157=_0x420e26;if(!this['isOpenAndActive']())return;if(this[_0x5e1157(0x806)]==='keyboard'){if('oWhzn'!==_0x5e1157(0x689)){if(TouchInput[_0x5e1157(0x58b)]()&&this[_0x5e1157(0x542)]())_0x5e1157(0x1bc)===_0x5e1157(0x32c)?(_0x591bbc[_0x5e1157(0x655)](),this[_0x5e1157(0x2c5)](_0x5e1157(0x18a))):this[_0x5e1157(0x46c)](_0x5e1157(0x854));else TouchInput[_0x5e1157(0x1ca)]()&&this[_0x5e1157(0x46c)](_0x5e1157(0x854));}else{var _0x439673=_0x3e2b27(_0x2bc9fd['$1']);_0x26028d*=_0x439673;}}else VisuMZ[_0x5e1157(0x61d)][_0x5e1157(0x1e4)][_0x5e1157(0x21f)](this);},Window_NameInput[_0x420e26(0x6a9)][_0x420e26(0x7f3)]=function(){const _0x26bcca=_0x420e26;if(Input[_0x26bcca(0x30a)](_0x26bcca(0x426)))Input[_0x26bcca(0x782)](),this[_0x26bcca(0x109)]();else{if(Input[_0x26bcca(0x519)]!==undefined){let _0x491dd4=Input[_0x26bcca(0x519)],_0x39af4b=_0x491dd4[_0x26bcca(0x66e)];for(let _0x9348c9=0x0;_0x9348c9<_0x39af4b;++_0x9348c9){if(this[_0x26bcca(0x1d7)][_0x26bcca(0x5b2)](_0x491dd4[_0x9348c9])){if('SheeF'!==_0x26bcca(0x1c0))SoundManager[_0x26bcca(0x3f2)]();else{if(_0x384678 instanceof _0x22c1f4)this[_0x26bcca(0x4a5)](_0x6e9a92);else _0x4de133 instanceof _0x557b7d&&_0x215139[0x0]===_0x26bcca(0x4bd)?this[_0x26bcca(0x41f)](_0x50058f):this[_0x26bcca(0x7a8)](_0x4c9395);this[_0x26bcca(0x551)]();}}else SoundManager[_0x26bcca(0x630)]();}Input[_0x26bcca(0x782)]();}}},Window_NameInput[_0x420e26(0x6a9)][_0x420e26(0x46c)]=function(_0x2bc679){const _0x58b639=_0x420e26;let _0x5d87e6=this['_mode'];this[_0x58b639(0x806)]=_0x2bc679;if(_0x5d87e6!==this[_0x58b639(0x806)]){this[_0x58b639(0x560)](),SoundManager[_0x58b639(0x3f2)]();if(this[_0x58b639(0x806)]===_0x58b639(0x854)){if('BUBCO'===_0x58b639(0x43e))this[_0x58b639(0x637)](0x0);else{this[_0x58b639(0x3f9)][_0x58b639(0x782)](),this[_0x58b639(0x478)][_0x58b639(0x782)](),this[_0x58b639(0x2ae)]();let _0x25b808=_0x112825[_0x58b639(0x61d)][_0x58b639(0x12e)][_0x58b639(0x3e5)][_0x58b639(0x7d1)]['split']('\x0a'),_0x89f8b7=_0x25b808[_0x58b639(0x66e)],_0x5088e0=(this[_0x58b639(0x694)]-_0x89f8b7*this[_0x58b639(0x5f5)]())/0x2;for(let _0x3493a8=0x0;_0x3493a8<_0x89f8b7;++_0x3493a8){let _0xed38d5=_0x25b808[_0x3493a8],_0x4c0a3f=this['textSizeEx'](_0xed38d5)[_0x58b639(0x351)],_0x47b199=_0x5cd983[_0x58b639(0x60d)]((this['contents'][_0x58b639(0x351)]-_0x4c0a3f)/0x2);this['drawTextEx'](_0xed38d5,_0x47b199,_0x5088e0),_0x5088e0+=this[_0x58b639(0x5f5)]();}}}else this[_0x58b639(0x637)](-0x1);}},VisuMZ['CoreEngine'][_0x420e26(0x685)]=Window_NameInput[_0x420e26(0x6a9)][_0x420e26(0x7fe)],Window_NameInput[_0x420e26(0x6a9)][_0x420e26(0x7fe)]=function(_0x172322){const _0x1902df=_0x420e26;if(this[_0x1902df(0x806)]===_0x1902df(0x421)&&!Input['isArrowPressed']())return;if(Input[_0x1902df(0x77e)]())return;VisuMZ['CoreEngine'][_0x1902df(0x685)][_0x1902df(0x21f)](this,_0x172322),this[_0x1902df(0x46c)](_0x1902df(0x854));},VisuMZ[_0x420e26(0x61d)]['Window_NameInput_cursorUp']=Window_NameInput[_0x420e26(0x6a9)][_0x420e26(0x538)],Window_NameInput[_0x420e26(0x6a9)][_0x420e26(0x538)]=function(_0x583b04){const _0xb7464c=_0x420e26;if(this[_0xb7464c(0x806)]==='keyboard'&&!Input[_0xb7464c(0x539)]())return;if(Input['isNumpadPressed']())return;VisuMZ[_0xb7464c(0x61d)][_0xb7464c(0x6a3)][_0xb7464c(0x21f)](this,_0x583b04),this[_0xb7464c(0x46c)](_0xb7464c(0x854));},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x5d8)]=Window_NameInput[_0x420e26(0x6a9)][_0x420e26(0x114)],Window_NameInput['prototype'][_0x420e26(0x114)]=function(_0x4fb8a1){const _0x441ad6=_0x420e26;if(this[_0x441ad6(0x806)]==='keyboard'&&!Input[_0x441ad6(0x539)]())return;if(Input['isNumpadPressed']())return;VisuMZ[_0x441ad6(0x61d)]['Window_NameInput_cursorRight']['call'](this,_0x4fb8a1),this[_0x441ad6(0x46c)](_0x441ad6(0x854));},VisuMZ['CoreEngine'][_0x420e26(0x33e)]=Window_NameInput[_0x420e26(0x6a9)][_0x420e26(0x202)],Window_NameInput[_0x420e26(0x6a9)][_0x420e26(0x202)]=function(_0x301aab){const _0x23dc2c=_0x420e26;if(this[_0x23dc2c(0x806)]===_0x23dc2c(0x421)&&!Input[_0x23dc2c(0x539)]())return;if(Input[_0x23dc2c(0x77e)]())return;VisuMZ['CoreEngine'][_0x23dc2c(0x33e)]['call'](this,_0x301aab),this[_0x23dc2c(0x46c)]('default');},VisuMZ['CoreEngine']['Window_NameInput_cursorPagedown']=Window_NameInput['prototype'][_0x420e26(0x1c7)],Window_NameInput[_0x420e26(0x6a9)][_0x420e26(0x1c7)]=function(){const _0xfa339=_0x420e26;if(this['_mode']===_0xfa339(0x421))return;if(Input[_0xfa339(0x77e)]())return;VisuMZ[_0xfa339(0x61d)]['Window_NameInput_cursorPagedown'][_0xfa339(0x21f)](this),this['switchModes'](_0xfa339(0x854));},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x4c5)]=Window_NameInput['prototype'][_0x420e26(0x145)],Window_NameInput[_0x420e26(0x6a9)][_0x420e26(0x145)]=function(){const _0x5b1378=_0x420e26;if(this[_0x5b1378(0x806)]==='keyboard')return;if(Input[_0x5b1378(0x77e)]())return;VisuMZ[_0x5b1378(0x61d)][_0x5b1378(0x4c5)][_0x5b1378(0x21f)](this),this[_0x5b1378(0x46c)](_0x5b1378(0x854));},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x3ca)]=Window_NameInput[_0x420e26(0x6a9)][_0x420e26(0x560)],Window_NameInput[_0x420e26(0x6a9)]['refresh']=function(){const _0x4a453a=_0x420e26;if(this[_0x4a453a(0x806)]===_0x4a453a(0x421)){this[_0x4a453a(0x3f9)][_0x4a453a(0x782)](),this[_0x4a453a(0x478)][_0x4a453a(0x782)](),this[_0x4a453a(0x2ae)]();let _0x3e5f39=VisuMZ['CoreEngine']['Settings']['KeyboardInput']['NameInputMessage'][_0x4a453a(0x76b)]('\x0a'),_0x53efbf=_0x3e5f39[_0x4a453a(0x66e)],_0x1c93e2=(this[_0x4a453a(0x694)]-_0x53efbf*this[_0x4a453a(0x5f5)]())/0x2;for(let _0x41a4c6=0x0;_0x41a4c6<_0x53efbf;++_0x41a4c6){if(_0x4a453a(0x19b)===_0x4a453a(0x19b)){let _0x8bbd25=_0x3e5f39[_0x41a4c6],_0x1b5302=this[_0x4a453a(0x626)](_0x8bbd25)['width'],_0x2234b4=Math[_0x4a453a(0x60d)]((this[_0x4a453a(0x3f9)][_0x4a453a(0x351)]-_0x1b5302)/0x2);this[_0x4a453a(0x3e1)](_0x8bbd25,_0x2234b4,_0x1c93e2),_0x1c93e2+=this[_0x4a453a(0x5f5)]();}else return typeof _0x379fa0===_0x4a453a(0x83c)?_0x2e3e7a[_0x4a453a(0x61d)][_0x4a453a(0x372)]['call'](this,_0x3b885a):this['paramName'](_0x4dd7c6);}}else{if(_0x4a453a(0x62f)===_0x4a453a(0x5fb)){this[_0x4a453a(0x74a)]=_0x49bf77[_0x4a453a(0x61d)][_0x4a453a(0x12e)][_0x4a453a(0x5ed)][_0x4a453a(0x248)]||![];if(_0x32bfee&&_0x9bd2eb[_0x4a453a(0x5a4)]){if(_0x2bd92d[_0x4a453a(0x5a4)]['match'](/<SHOW TILE SHADOWS>/i))this[_0x4a453a(0x74a)]=![];if(_0x2dc9b4['note']['match'](/<HIDE TILE SHADOWS>/i))this[_0x4a453a(0x74a)]=!![];}}else VisuMZ[_0x4a453a(0x61d)]['Window_NameInput_refresh'][_0x4a453a(0x21f)](this);}};};VisuMZ[_0x420e26(0x61d)]['Window_ShopSell_isEnabled']=Window_ShopSell['prototype']['isEnabled'],Window_ShopSell['prototype']['isEnabled']=function(_0x30b1e1){const _0x18bd5e=_0x420e26;return VisuMZ['CoreEngine'][_0x18bd5e(0x12e)][_0x18bd5e(0x5ed)][_0x18bd5e(0x228)]&&DataManager['isKeyItem'](_0x30b1e1)?_0x18bd5e(0x504)==='mvfmK'?![]:_0x42219c[_0x18bd5e(0x7ce)][_0x18bd5e(0x7ab)][_0x18bd5e(0x21f)](this):'qIxwj'!==_0x18bd5e(0x413)?this[_0x18bd5e(0x79c)]()?this[_0x18bd5e(0x3ea)]():_0x229b78[_0x18bd5e(0x61d)][_0x18bd5e(0x570)][_0x18bd5e(0x21f)](this):VisuMZ[_0x18bd5e(0x61d)]['Window_ShopSell_isEnabled'][_0x18bd5e(0x21f)](this,_0x30b1e1);},Window_NumberInput[_0x420e26(0x6a9)][_0x420e26(0x670)]=function(){return![];};VisuMZ[_0x420e26(0x61d)][_0x420e26(0x12e)][_0x420e26(0x3e5)][_0x420e26(0x6f0)]&&(VisuMZ[_0x420e26(0x61d)]['Window_NumberInput_start']=Window_NumberInput['prototype'][_0x420e26(0x400)],Window_NumberInput[_0x420e26(0x6a9)]['start']=function(){const _0x4949bd=_0x420e26;VisuMZ[_0x4949bd(0x61d)][_0x4949bd(0x618)][_0x4949bd(0x21f)](this),this['select'](this['_maxDigits']-0x1),Input['clear']();},VisuMZ[_0x420e26(0x61d)]['Window_NumberInput_processDigitChange']=Window_NumberInput['prototype'][_0x420e26(0x25e)],Window_NumberInput['prototype'][_0x420e26(0x25e)]=function(){const _0xf82fe3=_0x420e26;if(!this['isOpenAndActive']())return;if(Input[_0xf82fe3(0x77e)]())this[_0xf82fe3(0x7f4)]();else{if(Input[_0xf82fe3(0x30a)](_0xf82fe3(0x566))){if(_0xf82fe3(0x515)!==_0xf82fe3(0x543))this[_0xf82fe3(0x1c2)]();else return _0x267178[_0xf82fe3(0x61d)][_0xf82fe3(0x12e)]['QoL']['DigitGroupingDamageSprites'];}else{if(Input[_0xf82fe3(0x696)]===0x2e)this[_0xf82fe3(0x558)]();else{if(Input[_0xf82fe3(0x696)]===0x24)this[_0xf82fe3(0x7ad)]();else Input[_0xf82fe3(0x696)]===0x23?this['processKeyboardEnd']():'JIZcJ'===_0xf82fe3(0x3a0)?VisuMZ[_0xf82fe3(0x61d)][_0xf82fe3(0x783)][_0xf82fe3(0x21f)](this):(this[_0xf82fe3(0x146)]+=this[_0xf82fe3(0x2f8)]?this[_0xf82fe3(0x7f2)]():-0x1*this[_0xf82fe3(0x7f2)](),this[_0xf82fe3(0x146)]=_0x233ad0['min'](0xc0,this[_0xf82fe3(0x146)]));}}}},Window_NumberInput[_0x420e26(0x6a9)][_0x420e26(0x4e8)]=function(){const _0xf57ea2=_0x420e26;if(!this[_0xf57ea2(0x76a)]())return;Input['isNumpadPressed']()?this['processKeyboardDigitChange']():Window_Selectable[_0xf57ea2(0x6a9)][_0xf57ea2(0x4e8)][_0xf57ea2(0x21f)](this);},Window_NumberInput[_0x420e26(0x6a9)][_0x420e26(0x19f)]=function(){},Window_NumberInput[_0x420e26(0x6a9)][_0x420e26(0x7f4)]=function(){const _0x3f7d3c=_0x420e26;if(String(this[_0x3f7d3c(0x1b9)])['length']>=this['_maxDigits'])return;this[_0x3f7d3c(0x1b9)]=Number(String(this[_0x3f7d3c(0x1b9)])+Input[_0x3f7d3c(0x519)]);const _0x3cb393='9'[_0x3f7d3c(0x4da)](this['_maxDigits']);this[_0x3f7d3c(0x1b9)]=this['_number'][_0x3f7d3c(0x1d0)](0x0,_0x3cb393),Input[_0x3f7d3c(0x782)](),this['refresh'](),SoundManager[_0x3f7d3c(0x66d)](),this[_0x3f7d3c(0x637)](this[_0x3f7d3c(0x22d)]-0x1);},Window_NumberInput[_0x420e26(0x6a9)][_0x420e26(0x1c2)]=function(){const _0x84a297=_0x420e26;this[_0x84a297(0x1b9)]=Number(String(this[_0x84a297(0x1b9)])['slice'](0x0,-0x1)),this[_0x84a297(0x1b9)]=Math[_0x84a297(0x609)](0x0,this['_number']),Input[_0x84a297(0x782)](),this[_0x84a297(0x560)](),SoundManager[_0x84a297(0x66d)](),this['select'](this['_maxDigits']-0x1);},Window_NumberInput['prototype']['processKeyboardDelete']=function(){const _0x4752cc=_0x420e26;this[_0x4752cc(0x1b9)]=Number(String(this[_0x4752cc(0x1b9)])[_0x4752cc(0x616)](0x1)),this['_number']=Math['max'](0x0,this[_0x4752cc(0x1b9)]),Input[_0x4752cc(0x782)](),this[_0x4752cc(0x560)](),SoundManager['playCursor'](),this[_0x4752cc(0x637)](this['_maxDigits']-0x1);});;Window_TitleCommand[_0x420e26(0x527)]=VisuMZ['CoreEngine']['Settings'][_0x420e26(0x4ca)],Window_TitleCommand['prototype'][_0x420e26(0x6df)]=function(){const _0x5c77d4=_0x420e26;this[_0x5c77d4(0x7d0)]();},Window_TitleCommand[_0x420e26(0x6a9)]['makeCoreEngineCommandList']=function(){const _0x5835bc=_0x420e26;for(const _0x58f2c6 of Window_TitleCommand[_0x5835bc(0x527)]){if(_0x58f2c6[_0x5835bc(0x51e)][_0x5835bc(0x21f)](this)){const _0x220a45=_0x58f2c6['Symbol'];let _0x5f0a84=_0x58f2c6[_0x5835bc(0x2bf)];if(['',_0x5835bc(0x23a)][_0x5835bc(0x52e)](_0x5f0a84))_0x5f0a84=_0x58f2c6[_0x5835bc(0x21b)][_0x5835bc(0x21f)](this);const _0x23cb3f=_0x58f2c6[_0x5835bc(0x45a)][_0x5835bc(0x21f)](this),_0x328b1d=_0x58f2c6[_0x5835bc(0x36b)][_0x5835bc(0x21f)](this);this[_0x5835bc(0x252)](_0x5f0a84,_0x220a45,_0x23cb3f,_0x328b1d),this[_0x5835bc(0x785)](_0x220a45,_0x58f2c6[_0x5835bc(0x644)][_0x5835bc(0x38b)](this,_0x328b1d));}}},Window_GameEnd[_0x420e26(0x527)]=VisuMZ[_0x420e26(0x61d)][_0x420e26(0x12e)][_0x420e26(0x53a)][_0x420e26(0x138)]['CommandList'],Window_GameEnd[_0x420e26(0x6a9)][_0x420e26(0x6df)]=function(){this['makeCoreEngineCommandList']();},Window_GameEnd[_0x420e26(0x6a9)][_0x420e26(0x7d0)]=function(){const _0x5a3454=_0x420e26;for(const _0x17201e of Window_GameEnd[_0x5a3454(0x527)]){if(_0x17201e[_0x5a3454(0x51e)][_0x5a3454(0x21f)](this)){const _0x1f97d1=_0x17201e[_0x5a3454(0x702)];let _0x37e031=_0x17201e[_0x5a3454(0x2bf)];if(['',_0x5a3454(0x23a)][_0x5a3454(0x52e)](_0x37e031))_0x37e031=_0x17201e[_0x5a3454(0x21b)]['call'](this);const _0x597fe9=_0x17201e[_0x5a3454(0x45a)][_0x5a3454(0x21f)](this),_0xe6cab6=_0x17201e[_0x5a3454(0x36b)][_0x5a3454(0x21f)](this);this[_0x5a3454(0x252)](_0x37e031,_0x1f97d1,_0x597fe9,_0xe6cab6),this['setHandler'](_0x1f97d1,_0x17201e[_0x5a3454(0x644)][_0x5a3454(0x38b)](this,_0xe6cab6));}}};function Window_ButtonAssist(){const _0x1e9473=_0x420e26;this[_0x1e9473(0x5d3)](...arguments);}Window_ButtonAssist['prototype']=Object[_0x420e26(0x46b)](Window_Base[_0x420e26(0x6a9)]),Window_ButtonAssist[_0x420e26(0x6a9)][_0x420e26(0x329)]=Window_ButtonAssist,Window_ButtonAssist['prototype'][_0x420e26(0x5d3)]=function(_0x530ec6){const _0x5d3876=_0x420e26;this[_0x5d3876(0x638)]={},Window_Base[_0x5d3876(0x6a9)][_0x5d3876(0x5d3)][_0x5d3876(0x21f)](this,_0x530ec6),this['setBackgroundType'](VisuMZ[_0x5d3876(0x61d)][_0x5d3876(0x12e)]['ButtonAssist']['BgType']||0x0),this[_0x5d3876(0x560)]();},Window_ButtonAssist[_0x420e26(0x6a9)][_0x420e26(0x4de)]=function(){const _0x31634b=_0x420e26;if(this[_0x31634b(0x3f9)][_0x31634b(0x31e)]<=0x60){if(_0x31634b(0x12d)!==_0x31634b(0x12d))return _0xc0585d[_0x31634b(0x7ce)][_0x31634b(0x7a3)][_0x31634b(0x21f)](this);else this[_0x31634b(0x3f9)]['fontSize']+=0x6;}},Window_ButtonAssist[_0x420e26(0x6a9)][_0x420e26(0x1f7)]=function(){const _0x1938e2=_0x420e26;this[_0x1938e2(0x3f9)][_0x1938e2(0x31e)]>=0x18&&(this[_0x1938e2(0x3f9)][_0x1938e2(0x31e)]-=0x6);},Window_ButtonAssist[_0x420e26(0x6a9)]['update']=function(){const _0x8b8be6=_0x420e26;Window_Base[_0x8b8be6(0x6a9)]['update'][_0x8b8be6(0x21f)](this),this[_0x8b8be6(0x804)]();},Window_ButtonAssist['prototype'][_0x420e26(0x17e)]=function(){const _0x122d39=_0x420e26;this['padding']=SceneManager[_0x122d39(0x3cc)][_0x122d39(0x79f)]()!==_0x122d39(0x624)?0x0:0x8;},Window_ButtonAssist[_0x420e26(0x6a9)]['updateKeyText']=function(){const _0x597720=_0x420e26,_0x51a858=SceneManager[_0x597720(0x3cc)];for(let _0xa7e5b8=0x1;_0xa7e5b8<=0x5;_0xa7e5b8++){if(_0x597720(0x826)!==_0x597720(0x1d5)){if(this[_0x597720(0x638)]['key%1'['format'](_0xa7e5b8)]!==_0x51a858[_0x597720(0x429)[_0x597720(0x680)](_0xa7e5b8)]()){if(_0x597720(0x474)!==_0x597720(0x474))_0x1999d7['CoreEngine'][_0x597720(0x1b6)][_0x597720(0x21f)](this),this[_0x597720(0x29a)]();else return this[_0x597720(0x560)]();}if(this[_0x597720(0x638)]['text%1'[_0x597720(0x680)](_0xa7e5b8)]!==_0x51a858[_0x597720(0x350)[_0x597720(0x680)](_0xa7e5b8)]()){if('mXNXG'==='jsGIL'){const _0x25e7cc=this[_0x597720(0x4bb)](_0x21b645),_0x2bdcbc=this[_0x597720(0x3cd)](_0x3a9a8c),_0x1d9c08=this[_0x597720(0x37f)](_0x5770d3);return _0x25e7cc*(_0x2bdcbc-_0x1d9c08);}else return this[_0x597720(0x560)]();}}else{const _0x31b81e=(_0x11a8a3[_0x597720(0x61d)][_0x597720(0x12e)]['BattleSystem']||_0x597720(0x749))['toUpperCase']()[_0x597720(0x30b)]();return _0x160292[_0x597720(0x61d)][_0x597720(0x375)](_0x31b81e);}}},Window_ButtonAssist['prototype'][_0x420e26(0x560)]=function(){const _0x44ddd1=_0x420e26;this['contents'][_0x44ddd1(0x782)]();for(let _0x5b253d=0x1;_0x5b253d<=0x5;_0x5b253d++){this[_0x44ddd1(0x65b)](_0x5b253d);}},Window_ButtonAssist[_0x420e26(0x6a9)]['drawSegment']=function(_0x135795){const _0x3a24ef=_0x420e26,_0x18dd87=this[_0x3a24ef(0x6c3)]/0x5,_0x2825b5=SceneManager[_0x3a24ef(0x3cc)],_0xa946d6=_0x2825b5['buttonAssistKey%1'['format'](_0x135795)](),_0x5a7448=_0x2825b5[_0x3a24ef(0x350)['format'](_0x135795)]();this['_data']['key%1'[_0x3a24ef(0x680)](_0x135795)]=_0xa946d6,this[_0x3a24ef(0x638)][_0x3a24ef(0x546)[_0x3a24ef(0x680)](_0x135795)]=_0x5a7448;if(_0xa946d6==='')return;if(_0x5a7448==='')return;const _0x20765a=_0x2825b5[_0x3a24ef(0x3c3)[_0x3a24ef(0x680)](_0x135795)](),_0x5ca366=this[_0x3a24ef(0x803)](),_0x43f829=_0x18dd87*(_0x135795-0x1)+_0x5ca366+_0x20765a,_0x1125ee=VisuMZ[_0x3a24ef(0x61d)][_0x3a24ef(0x12e)]['ButtonAssist'][_0x3a24ef(0x449)];this[_0x3a24ef(0x3e1)](_0x1125ee[_0x3a24ef(0x680)](_0xa946d6,_0x5a7448),_0x43f829,0x0,_0x18dd87-_0x5ca366*0x2);},VisuMZ[_0x420e26(0x26d)]=function(_0x5819d){const _0x2ac861=_0x420e26;if(Utils[_0x2ac861(0x64c)](_0x2ac861(0x3db))){if('ZlFsV'!==_0x2ac861(0x54c)){if(_0x202c5d['isPlaytest']())_0x20affa[_0x2ac861(0x39f)](_0x3f06df);}else{var _0x926020=require('nw.gui')[_0x2ac861(0x180)][_0x2ac861(0x259)]();SceneManager[_0x2ac861(0x12f)]();if(_0x5819d)setTimeout(_0x926020[_0x2ac861(0x2e7)][_0x2ac861(0x38b)](_0x926020),0x190);}}},VisuMZ[_0x420e26(0x678)]=function(_0x49e694,_0x1af428){const _0x713658=_0x420e26;_0x1af428=_0x1af428[_0x713658(0x741)]();var _0x5b1d65=1.70158,_0x51efde=0.7;switch(_0x1af428){case'LINEAR':return _0x49e694;case'INSINE':return-0x1*Math['cos'](_0x49e694*(Math['PI']/0x2))+0x1;case _0x713658(0x285):return Math[_0x713658(0x51c)](_0x49e694*(Math['PI']/0x2));case'INOUTSINE':return-0.5*(Math['cos'](Math['PI']*_0x49e694)-0x1);case _0x713658(0x4bf):return _0x49e694*_0x49e694;case'OUTQUAD':return _0x49e694*(0x2-_0x49e694);case _0x713658(0x647):return _0x49e694<0.5?0x2*_0x49e694*_0x49e694:-0x1+(0x4-0x2*_0x49e694)*_0x49e694;case _0x713658(0x1ac):return _0x49e694*_0x49e694*_0x49e694;case _0x713658(0x300):var _0x5012d7=_0x49e694-0x1;return _0x5012d7*_0x5012d7*_0x5012d7+0x1;case'INOUTCUBIC':return _0x49e694<0.5?0x4*_0x49e694*_0x49e694*_0x49e694:(_0x49e694-0x1)*(0x2*_0x49e694-0x2)*(0x2*_0x49e694-0x2)+0x1;case'INQUART':return _0x49e694*_0x49e694*_0x49e694*_0x49e694;case _0x713658(0x7a6):var _0x5012d7=_0x49e694-0x1;return 0x1-_0x5012d7*_0x5012d7*_0x5012d7*_0x5012d7;case _0x713658(0x4c8):var _0x5012d7=_0x49e694-0x1;return _0x49e694<0.5?0x8*_0x49e694*_0x49e694*_0x49e694*_0x49e694:0x1-0x8*_0x5012d7*_0x5012d7*_0x5012d7*_0x5012d7;case'INQUINT':return _0x49e694*_0x49e694*_0x49e694*_0x49e694*_0x49e694;case _0x713658(0x68f):var _0x5012d7=_0x49e694-0x1;return 0x1+_0x5012d7*_0x5012d7*_0x5012d7*_0x5012d7*_0x5012d7;case _0x713658(0x218):var _0x5012d7=_0x49e694-0x1;return _0x49e694<0.5?0x10*_0x49e694*_0x49e694*_0x49e694*_0x49e694*_0x49e694:0x1+0x10*_0x5012d7*_0x5012d7*_0x5012d7*_0x5012d7*_0x5012d7;case _0x713658(0x6b8):if(_0x49e694===0x0)return 0x0;return Math['pow'](0x2,0xa*(_0x49e694-0x1));case _0x713658(0x708):if(_0x49e694===0x1)return'pIzyL'===_0x713658(0x2f3)?0x0:0x1;return-Math['pow'](0x2,-0xa*_0x49e694)+0x1;case _0x713658(0x2cf):if(_0x49e694===0x0||_0x49e694===0x1){if(_0x713658(0x165)!==_0x713658(0x1fc))return _0x49e694;else{let _0x3b6d2e=0x0;return _0x148c4f['areButtonsOutsideMainUI']()?_0x3b6d2e=this[_0x713658(0x78b)]():_0x3b6d2e=_0x5722a8[_0x713658(0x61d)]['Scene_MenuBase_helpAreaTop'][_0x713658(0x21f)](this),this[_0x713658(0x4b7)]()&&this[_0x713658(0x79f)]()===_0x713658(0x1ef)&&(_0x3b6d2e+=_0x13099c[_0x713658(0x6a9)][_0x713658(0x5f5)]()),_0x3b6d2e;}}var _0x44b22d=_0x49e694*0x2,_0x18460b=_0x44b22d-0x1;if(_0x44b22d<0x1)return'oYJcw'!==_0x713658(0x51f)?_0x35c636['ApplyEasing'](_0x41716e,this[_0x713658(0x2c8)]):0.5*Math[_0x713658(0x571)](0x2,0xa*_0x18460b);return 0.5*(-Math[_0x713658(0x571)](0x2,-0xa*_0x18460b)+0x2);case _0x713658(0x447):var _0x44b22d=_0x49e694/0x1;return-0x1*(Math[_0x713658(0x401)](0x1-_0x44b22d*_0x49e694)-0x1);case'OUTCIRC':var _0x5012d7=_0x49e694-0x1;return Math[_0x713658(0x401)](0x1-_0x5012d7*_0x5012d7);case _0x713658(0x564):var _0x44b22d=_0x49e694*0x2,_0x18460b=_0x44b22d-0x2;if(_0x44b22d<0x1){if(_0x713658(0x137)===_0x713658(0x7ac))_0x47d2cb[_0x713658(0x61d)][_0x713658(0x1e4)][_0x713658(0x21f)](this);else return-0.5*(Math[_0x713658(0x401)](0x1-_0x44b22d*_0x44b22d)-0x1);}return 0.5*(Math[_0x713658(0x401)](0x1-_0x18460b*_0x18460b)+0x1);case _0x713658(0x3ab):return _0x49e694*_0x49e694*((_0x5b1d65+0x1)*_0x49e694-_0x5b1d65);case'OUTBACK':var _0x44b22d=_0x49e694/0x1-0x1;return _0x44b22d*_0x44b22d*((_0x5b1d65+0x1)*_0x44b22d+_0x5b1d65)+0x1;break;case _0x713658(0x255):var _0x44b22d=_0x49e694*0x2,_0x139818=_0x44b22d-0x2,_0x11e1f3=_0x5b1d65*1.525;if(_0x44b22d<0x1)return 0.5*_0x44b22d*_0x44b22d*((_0x11e1f3+0x1)*_0x44b22d-_0x11e1f3);return 0.5*(_0x139818*_0x139818*((_0x11e1f3+0x1)*_0x139818+_0x11e1f3)+0x2);case _0x713658(0x1a5):if(_0x49e694===0x0||_0x49e694===0x1)return _0x49e694;var _0x44b22d=_0x49e694/0x1,_0x18460b=_0x44b22d-0x1,_0xf9b7f5=0x1-_0x51efde,_0x11e1f3=_0xf9b7f5/(0x2*Math['PI'])*Math[_0x713658(0x58d)](0x1);return-(Math[_0x713658(0x571)](0x2,0xa*_0x18460b)*Math[_0x713658(0x51c)]((_0x18460b-_0x11e1f3)*(0x2*Math['PI'])/_0xf9b7f5));case _0x713658(0x3a1):var _0xf9b7f5=0x1-_0x51efde,_0x44b22d=_0x49e694*0x2;if(_0x49e694===0x0||_0x49e694===0x1)return _0x49e694;var _0x11e1f3=_0xf9b7f5/(0x2*Math['PI'])*Math['asin'](0x1);return Math[_0x713658(0x571)](0x2,-0xa*_0x44b22d)*Math[_0x713658(0x51c)]((_0x44b22d-_0x11e1f3)*(0x2*Math['PI'])/_0xf9b7f5)+0x1;case _0x713658(0x453):var _0xf9b7f5=0x1-_0x51efde;if(_0x49e694===0x0||_0x49e694===0x1)return _0x49e694;var _0x44b22d=_0x49e694*0x2,_0x18460b=_0x44b22d-0x1,_0x11e1f3=_0xf9b7f5/(0x2*Math['PI'])*Math[_0x713658(0x58d)](0x1);if(_0x44b22d<0x1)return-0.5*(Math[_0x713658(0x571)](0x2,0xa*_0x18460b)*Math[_0x713658(0x51c)]((_0x18460b-_0x11e1f3)*(0x2*Math['PI'])/_0xf9b7f5));return Math[_0x713658(0x571)](0x2,-0xa*_0x18460b)*Math['sin']((_0x18460b-_0x11e1f3)*(0x2*Math['PI'])/_0xf9b7f5)*0.5+0x1;case _0x713658(0x1b4):var _0x44b22d=_0x49e694/0x1;if(_0x44b22d<0x1/2.75)return 7.5625*_0x44b22d*_0x44b22d;else{if(_0x44b22d<0x2/2.75){if(_0x713658(0x266)!==_0x713658(0x459)){var _0x139818=_0x44b22d-1.5/2.75;return 7.5625*_0x139818*_0x139818+0.75;}else{if(!this[_0x713658(0x187)])return;if(!this[_0x713658(0x187)][_0x713658(0x283)])return;this[_0x713658(0x187)]['_baseTexture']&&!this[_0x713658(0x636)]['_baseTexture'][_0x713658(0x6c9)]&&this['bitmap'][_0x713658(0x215)]();}}else{if(_0x44b22d<2.5/2.75){var _0x139818=_0x44b22d-2.25/2.75;return 7.5625*_0x139818*_0x139818+0.9375;}else{var _0x139818=_0x44b22d-2.625/2.75;return 7.5625*_0x139818*_0x139818+0.984375;}}}case _0x713658(0x753):var _0xbd0436=0x1-VisuMZ['ApplyEasing'](0x1-_0x49e694,_0x713658(0x235));return _0xbd0436;case'INOUTBOUNCE':if(_0x49e694<0.5)var _0xbd0436=VisuMZ[_0x713658(0x678)](_0x49e694*0x2,_0x713658(0x813))*0.5;else{if(_0x713658(0x20f)===_0x713658(0x3ef))_0x17b691[_0x713658(0x164)](),_0x42d816[_0x713658(0x82b)](_0x52c7a5),_0x2f0bd4[_0x713658(0x61d)][_0x713658(0x563)][_0x713658(0x21f)](this,_0x2f6f0e);else var _0xbd0436=VisuMZ[_0x713658(0x678)](_0x49e694*0x2-0x1,'outbounce')*0.5+0.5;}return _0xbd0436;default:return _0x49e694;}},VisuMZ[_0x420e26(0x577)]=function(_0x183e07){const _0x3e3821=_0x420e26;_0x183e07=String(_0x183e07)[_0x3e3821(0x741)]();const _0x47667c=VisuMZ[_0x3e3821(0x61d)]['Settings'][_0x3e3821(0x7eb)];if(_0x183e07==='MAXHP')return _0x47667c[_0x3e3821(0x116)];if(_0x183e07==='MAXMP')return _0x47667c['IconParam1'];if(_0x183e07==='ATK')return _0x47667c[_0x3e3821(0x80a)];if(_0x183e07==='DEF')return _0x47667c[_0x3e3821(0x7b0)];if(_0x183e07==='MAT')return _0x47667c[_0x3e3821(0x50a)];if(_0x183e07==='MDF')return _0x47667c[_0x3e3821(0x34d)];if(_0x183e07===_0x3e3821(0x3ee))return _0x47667c[_0x3e3821(0x4f4)];if(_0x183e07==='LUK')return _0x47667c[_0x3e3821(0x33f)];if(_0x183e07===_0x3e3821(0x81e))return _0x47667c['IconXParam0'];if(_0x183e07===_0x3e3821(0x431))return _0x47667c[_0x3e3821(0x70c)];if(_0x183e07===_0x3e3821(0x267))return _0x47667c[_0x3e3821(0x139)];if(_0x183e07==='CEV')return _0x47667c[_0x3e3821(0x6c6)];if(_0x183e07===_0x3e3821(0x6d4))return _0x47667c[_0x3e3821(0x17b)];if(_0x183e07==='MRF')return _0x47667c[_0x3e3821(0x2d6)];if(_0x183e07===_0x3e3821(0x240))return _0x47667c[_0x3e3821(0x78d)];if(_0x183e07===_0x3e3821(0x6d2))return _0x47667c[_0x3e3821(0x69b)];if(_0x183e07===_0x3e3821(0x6ea))return _0x47667c['IconXParam8'];if(_0x183e07==='TRG')return _0x47667c[_0x3e3821(0x2ad)];if(_0x183e07===_0x3e3821(0x321))return _0x47667c[_0x3e3821(0x1f8)];if(_0x183e07===_0x3e3821(0x419))return _0x47667c[_0x3e3821(0x786)];if(_0x183e07===_0x3e3821(0x464))return _0x47667c[_0x3e3821(0x4d6)];if(_0x183e07===_0x3e3821(0x448))return _0x47667c[_0x3e3821(0x4b2)];if(_0x183e07===_0x3e3821(0x5b6))return _0x47667c[_0x3e3821(0x6d5)];if(_0x183e07===_0x3e3821(0x141))return _0x47667c[_0x3e3821(0x3da)];if(_0x183e07===_0x3e3821(0x6db))return _0x47667c[_0x3e3821(0x64f)];if(_0x183e07===_0x3e3821(0x70f))return _0x47667c[_0x3e3821(0x4e1)];if(_0x183e07===_0x3e3821(0x35f))return _0x47667c[_0x3e3821(0x615)];if(_0x183e07===_0x3e3821(0x353))return _0x47667c[_0x3e3821(0x465)];if(VisuMZ['CoreEngine'][_0x3e3821(0x778)][_0x183e07])return VisuMZ[_0x3e3821(0x61d)][_0x3e3821(0x778)][_0x183e07]||0x0;return 0x0;},VisuMZ[_0x420e26(0x695)]=function(_0x164a8e,_0x3e3689,_0xbc66ec){const _0x5b1095=_0x420e26;if(_0xbc66ec===undefined&&_0x164a8e%0x1===0x0)return _0x164a8e;if(_0xbc66ec!==undefined&&[_0x5b1095(0x864),'MAXMP',_0x5b1095(0x7f0),'DEF',_0x5b1095(0x606),'MDF',_0x5b1095(0x3ee),_0x5b1095(0x856)][_0x5b1095(0x52e)](String(_0xbc66ec)[_0x5b1095(0x741)]()['trim']()))return _0x164a8e;_0x3e3689=_0x3e3689||0x0;if(VisuMZ[_0x5b1095(0x61d)][_0x5b1095(0x33d)][_0xbc66ec])return VisuMZ[_0x5b1095(0x61d)]['CustomParamType'][_0xbc66ec]===_0x5b1095(0x2fc)?_0x164a8e:String((_0x164a8e*0x64)[_0x5b1095(0x477)](_0x3e3689))+'%';return String((_0x164a8e*0x64)[_0x5b1095(0x477)](_0x3e3689))+'%';},VisuMZ[_0x420e26(0x24d)]=function(_0x407e2a){const _0x34c7cf=_0x420e26;_0x407e2a=String(_0x407e2a);if(!_0x407e2a)return _0x407e2a;if(typeof _0x407e2a!==_0x34c7cf(0x4ea))return _0x407e2a;const _0x3ed2cc=VisuMZ[_0x34c7cf(0x61d)][_0x34c7cf(0x12e)][_0x34c7cf(0x5ed)]['DigitGroupingLocale']||_0x34c7cf(0x552),_0x28af67={'maximumFractionDigits':0x6};_0x407e2a=_0x407e2a['replace'](/\[(.*?)\]/g,(_0x50253e,_0xe71c44)=>{const _0x232a26=_0x34c7cf;if(_0x232a26(0x746)===_0x232a26(0x425))this[_0x232a26(0x205)]=0x2;else return VisuMZ[_0x232a26(0x61f)](_0xe71c44,'[',']');}),_0x407e2a=_0x407e2a[_0x34c7cf(0x53c)](/<(.*?)>/g,(_0xe2c15,_0x5773ae)=>{const _0x7ffb81=_0x34c7cf;return'vVKZl'===_0x7ffb81(0x686)?VisuMZ[_0x7ffb81(0x61f)](_0x5773ae,'<','>'):_0x9b5920[_0x7ffb81(0x61d)][_0x7ffb81(0x12e)][_0x7ffb81(0x180)][_0x7ffb81(0x722)];}),_0x407e2a=_0x407e2a[_0x34c7cf(0x53c)](/\{\{(.*?)\}\}/g,(_0x3a1d0e,_0x322d70)=>{const _0x5dc6f7=_0x34c7cf;if(_0x5dc6f7(0x31b)!==_0x5dc6f7(0x690))return VisuMZ[_0x5dc6f7(0x61f)](_0x322d70,'','');else _0x23e659[_0x5dc6f7(0x61d)][_0x5dc6f7(0x56c)][_0x5dc6f7(0x21f)](this);}),_0x407e2a=_0x407e2a[_0x34c7cf(0x53c)](/(\d+\.?\d*)/g,(_0x11cb98,_0x3b8e65)=>{const _0x188f76=_0x34c7cf;if(_0x188f76(0x828)!==_0x188f76(0x828))return _0x271b95[_0x188f76(0x205)];else{let _0x1851bd=_0x3b8e65;if(_0x1851bd[0x0]==='0')return _0x1851bd;if(_0x1851bd[_0x1851bd['length']-0x1]==='.')return Number(_0x1851bd)[_0x188f76(0x286)](_0x3ed2cc,_0x28af67)+'.';else return _0x1851bd[_0x1851bd[_0x188f76(0x66e)]-0x1]===','?Number(_0x1851bd)[_0x188f76(0x286)](_0x3ed2cc,_0x28af67)+',':Number(_0x1851bd)['toLocaleString'](_0x3ed2cc,_0x28af67);}});let _0x6685bd=0x3;while(_0x6685bd--){if(_0x34c7cf(0x682)!==_0x34c7cf(0x682))return _0x220124['CoreEngine'][_0x34c7cf(0x12e)][_0x34c7cf(0x2da)]['ItemBackColor1'];else _0x407e2a=VisuMZ[_0x34c7cf(0x3c5)](_0x407e2a);}return _0x407e2a;},VisuMZ[_0x420e26(0x61f)]=function(_0x4eb244,_0x225c12,_0x599b3e){const _0x43127f=_0x420e26;return _0x4eb244=_0x4eb244[_0x43127f(0x53c)](/(\d)/gi,(_0x4b0ea6,_0x465055)=>'PRESERVCONVERSION(%1)'[_0x43127f(0x680)](Number(_0x465055))),_0x43127f(0x4a1)[_0x43127f(0x680)](_0x4eb244,_0x225c12,_0x599b3e);},VisuMZ[_0x420e26(0x3c5)]=function(_0x54e8ba){const _0x4e815a=_0x420e26;return _0x54e8ba=_0x54e8ba[_0x4e815a(0x53c)](/PRESERVCONVERSION\((\d+)\)/gi,(_0x5ea8db,_0x2d9d06)=>Number(parseInt(_0x2d9d06))),_0x54e8ba;},VisuMZ[_0x420e26(0x80f)]=function(_0x39a095){const _0x471d6a=_0x420e26;SoundManager[_0x471d6a(0x3f2)]();if(!Utils[_0x471d6a(0x158)]()){const _0x20666b=window[_0x471d6a(0x339)](_0x39a095,_0x471d6a(0x517));}else{if(_0x471d6a(0x7e9)==='wMhBu'){const _0x3fb829=this[_0x471d6a(0x727)]();this[_0x471d6a(0x769)]=new _0x27711b(_0x3fb829),this['_commandWindow'][_0x471d6a(0x785)](_0x471d6a(0x29c),this['popScene'][_0x471d6a(0x38b)](this)),this[_0x471d6a(0x4c2)](this[_0x471d6a(0x769)]),this[_0x471d6a(0x769)][_0x471d6a(0x414)](_0x5e130d[_0x471d6a(0x7ce)][_0x471d6a(0x26f)]);}else{const _0x51769a=process[_0x471d6a(0x802)]==_0x471d6a(0x6bd)?_0x471d6a(0x339):process['platform']==_0x471d6a(0x824)?'start':_0x471d6a(0x6a7);require(_0x471d6a(0x26a))[_0x471d6a(0x592)](_0x51769a+'\x20'+_0x39a095);}}},Game_Picture['prototype']['anchor']=function(){const _0x3de979=_0x420e26;return this[_0x3de979(0x763)];},VisuMZ[_0x420e26(0x61d)]['Game_Picture_initBasic']=Game_Picture['prototype'][_0x420e26(0x7d9)],Game_Picture['prototype'][_0x420e26(0x7d9)]=function(){const _0x5f29b3=_0x420e26;VisuMZ['CoreEngine'][_0x5f29b3(0x48e)][_0x5f29b3(0x21f)](this),this[_0x5f29b3(0x763)]={'x':0x0,'y':0x0},this[_0x5f29b3(0x3b2)]={'x':0x0,'y':0x0};},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x4e0)]=Game_Picture[_0x420e26(0x6a9)][_0x420e26(0x3ff)],Game_Picture['prototype']['updateMove']=function(){const _0x1bf447=_0x420e26;this[_0x1bf447(0x6b0)](),VisuMZ[_0x1bf447(0x61d)][_0x1bf447(0x4e0)]['call'](this);},VisuMZ['CoreEngine'][_0x420e26(0x28e)]=Game_Picture[_0x420e26(0x6a9)][_0x420e26(0x7a0)],Game_Picture[_0x420e26(0x6a9)][_0x420e26(0x7a0)]=function(_0x523a42,_0x26f2ac,_0x4634aa,_0xc208c4,_0x248a68,_0x4a6b13,_0x2007a5,_0x1fd913){const _0x31da55=_0x420e26;VisuMZ[_0x31da55(0x61d)][_0x31da55(0x28e)][_0x31da55(0x21f)](this,_0x523a42,_0x26f2ac,_0x4634aa,_0xc208c4,_0x248a68,_0x4a6b13,_0x2007a5,_0x1fd913),this[_0x31da55(0x81d)]([{'x':0x0,'y':0x0},{'x':0.5,'y':0.5}][_0x26f2ac]||{'x':0x0,'y':0x0});},VisuMZ['CoreEngine'][_0x420e26(0x6c4)]=Game_Picture[_0x420e26(0x6a9)][_0x420e26(0x483)],Game_Picture[_0x420e26(0x6a9)][_0x420e26(0x483)]=function(_0x2db2da,_0x19735c,_0x4618b8,_0x97f1a0,_0x590dd4,_0x1e2991,_0x2eae42,_0x19da28,_0x1006cc){const _0x498577=_0x420e26;VisuMZ['CoreEngine'][_0x498577(0x6c4)][_0x498577(0x21f)](this,_0x2db2da,_0x19735c,_0x4618b8,_0x97f1a0,_0x590dd4,_0x1e2991,_0x2eae42,_0x19da28,_0x1006cc),this['setTargetAnchor']([{'x':0x0,'y':0x0},{'x':0.5,'y':0.5}][_0x2db2da]||{'x':0x0,'y':0x0});},Game_Picture[_0x420e26(0x6a9)][_0x420e26(0x6b0)]=function(){const _0x597a78=_0x420e26;if(this[_0x597a78(0x35d)]>0x0){if(_0x597a78(0x432)===_0x597a78(0x423))return _0x14f031[_0x597a78(0x7ce)][_0x597a78(0x3f4)]['call'](this);else this[_0x597a78(0x763)]['x']=this[_0x597a78(0x7c3)](this[_0x597a78(0x763)]['x'],this[_0x597a78(0x3b2)]['x']),this[_0x597a78(0x763)]['y']=this[_0x597a78(0x7c3)](this['_anchor']['y'],this['_targetAnchor']['y']);}},Game_Picture[_0x420e26(0x6a9)][_0x420e26(0x81d)]=function(_0x41de61){const _0x357f5c=_0x420e26;this[_0x357f5c(0x763)]=_0x41de61,this[_0x357f5c(0x3b2)]=JsonEx[_0x357f5c(0x81b)](this[_0x357f5c(0x763)]);},Game_Picture['prototype'][_0x420e26(0x752)]=function(_0x58d49b){const _0x48eafb=_0x420e26;this[_0x48eafb(0x3b2)]=_0x58d49b;},VisuMZ['CoreEngine'][_0x420e26(0x853)]=Sprite_Picture[_0x420e26(0x6a9)]['updateOrigin'],Sprite_Picture[_0x420e26(0x6a9)]['updateOrigin']=function(){const _0x1eab9a=_0x420e26,_0x3cd96f=this[_0x1eab9a(0x6a2)]();if(!_0x3cd96f['anchor']())_0x1eab9a(0x2e8)!==_0x1eab9a(0x2e8)?(_0x385ec6[_0x1eab9a(0x587)]=!_0x131c20[_0x1eab9a(0x587)],_0x43244c['save']()):VisuMZ[_0x1eab9a(0x61d)][_0x1eab9a(0x853)][_0x1eab9a(0x21f)](this);else{if(_0x1eab9a(0x3d7)===_0x1eab9a(0x3d7))this[_0x1eab9a(0x5ee)]['x']=_0x3cd96f['anchor']()['x'],this[_0x1eab9a(0x5ee)]['y']=_0x3cd96f['anchor']()['y'];else{if(_0x2b982b[_0x1eab9a(0x295)](/backspace/i))return this[_0x1eab9a(0x696)]===0x8;if(_0x221951[_0x1eab9a(0x295)](/enter/i))return this[_0x1eab9a(0x696)]===0xd;if(_0x268524[_0x1eab9a(0x295)](/escape/i))return this[_0x1eab9a(0x696)]===0x1b;}}},Game_Action[_0x420e26(0x6a9)][_0x420e26(0x475)]=function(_0x4cc8d4){const _0x511ce6=_0x420e26;if(_0x4cc8d4){const _0x23e464=_0x4cc8d4[_0x511ce6(0x774)];if(_0x23e464===0x1&&this['subject']()[_0x511ce6(0x277)]()!==0x1)this[_0x511ce6(0x160)]();else _0x23e464===0x2&&this[_0x511ce6(0x6e6)]()['guardSkillId']()!==0x2?this[_0x511ce6(0x84b)]():'gEIDr'===_0x511ce6(0x55a)?this['setSkill'](_0x23e464):_0x25a157['CoreEngine'][_0x511ce6(0x783)]['call'](this);}else this[_0x511ce6(0x782)]();},Game_Actor[_0x420e26(0x6a9)][_0x420e26(0x69a)]=function(){const _0x4dc3ff=_0x420e26;return this[_0x4dc3ff(0x391)]()['filter'](_0x68e59b=>this[_0x4dc3ff(0x408)](_0x68e59b)&&this[_0x4dc3ff(0x132)]()[_0x4dc3ff(0x52e)](_0x68e59b[_0x4dc3ff(0x4c9)]));},Window_Base[_0x420e26(0x6a9)]['createDimmerSprite']=function(){const _0x5364c0=_0x420e26;this[_0x5364c0(0x837)]=new Sprite(),this['_dimmerSprite'][_0x5364c0(0x187)]=new Bitmap(0x0,0x0),this['_dimmerSprite']['x']=0x0,this['addChildToBack'](this[_0x5364c0(0x837)]);},Window_Base[_0x420e26(0x6a9)][_0x420e26(0x155)]=function(){const _0x26fd3c=_0x420e26;if(this['_dimmerSprite']){const _0x181355=this[_0x26fd3c(0x837)][_0x26fd3c(0x187)],_0x4aa14e=this[_0x26fd3c(0x351)],_0x1e038a=this[_0x26fd3c(0x17f)],_0x2eb618=this['padding'],_0x3e009f=ColorManager[_0x26fd3c(0x2e9)](),_0x41dc95=ColorManager[_0x26fd3c(0x1c3)]();_0x181355[_0x26fd3c(0x590)](_0x4aa14e,_0x1e038a),_0x181355[_0x26fd3c(0x6ef)](0x0,0x0,_0x4aa14e,_0x2eb618,_0x41dc95,_0x3e009f,!![]),_0x181355[_0x26fd3c(0x691)](0x0,_0x2eb618,_0x4aa14e,_0x1e038a-_0x2eb618*0x2,_0x3e009f),_0x181355[_0x26fd3c(0x6ef)](0x0,_0x1e038a-_0x2eb618,_0x4aa14e,_0x2eb618,_0x3e009f,_0x41dc95,!![]),this[_0x26fd3c(0x837)][_0x26fd3c(0x591)](0x0,0x0,_0x4aa14e,_0x1e038a);}},Game_Actor['prototype'][_0x420e26(0x1f2)]=function(){const _0x4fe061=_0x420e26;for(let _0x340191=0x0;_0x340191<this[_0x4fe061(0x502)]();_0x340191++){if(_0x4fe061(0x12a)!=='CHJyx'){const _0x9eec16=this[_0x4fe061(0x6b9)]();let _0x37ac47=Number[_0x4fe061(0x1dc)];this[_0x4fe061(0x41e)](_0x340191,_0x9eec16[0x0]);for(const _0xdbc104 of _0x9eec16){const _0x503855=_0xdbc104['evaluate']();_0x503855>_0x37ac47&&(_0x37ac47=_0x503855,this['setAction'](_0x340191,_0xdbc104));}}else{if(this[_0x4fe061(0x3f8)]===_0x25873f)this['initCoreEngineScreenShake']();return this['_coreEngineShakeStyle'];}}this[_0x4fe061(0x37a)](_0x4fe061(0x24f));},Window_BattleItem[_0x420e26(0x6a9)][_0x420e26(0x5f9)]=function(_0x6c8818){const _0x1c4d8e=_0x420e26;return BattleManager[_0x1c4d8e(0x4ec)]()?BattleManager['actor']()['canUse'](_0x6c8818):Window_ItemList[_0x1c4d8e(0x6a9)][_0x1c4d8e(0x5f9)][_0x1c4d8e(0x21f)](this,_0x6c8818);},VisuMZ['CoreEngine'][_0x420e26(0x21c)]=Scene_Map[_0x420e26(0x6a9)][_0x420e26(0x780)],Scene_Map[_0x420e26(0x6a9)]['createSpriteset']=function(){const _0x2ddc61=_0x420e26;VisuMZ[_0x2ddc61(0x61d)][_0x2ddc61(0x21c)][_0x2ddc61(0x21f)](this);const _0x53a700=this['_spriteset'][_0x2ddc61(0x57f)];if(_0x53a700)this[_0x2ddc61(0x39a)](_0x53a700);},VisuMZ['CoreEngine']['Scene_Battle_createSpriteset']=Scene_Battle[_0x420e26(0x6a9)][_0x420e26(0x780)],Scene_Battle[_0x420e26(0x6a9)][_0x420e26(0x780)]=function(){const _0x255e51=_0x420e26;VisuMZ[_0x255e51(0x61d)][_0x255e51(0x50d)][_0x255e51(0x21f)](this);const _0x25e637=this['_spriteset'][_0x255e51(0x57f)];if(_0x25e637)this['addChild'](_0x25e637);},Sprite_Actor[_0x420e26(0x6a9)][_0x420e26(0x1bb)]=function(){const _0x5e8d0f=_0x420e26;Sprite_Battler[_0x5e8d0f(0x6a9)][_0x5e8d0f(0x1bb)][_0x5e8d0f(0x21f)](this),this['updateShadow']();if(this[_0x5e8d0f(0x294)])this[_0x5e8d0f(0x709)]();else this['_battlerName']!==''&&(this['_battlerName']='');},Window[_0x420e26(0x6a9)][_0x420e26(0x29e)]=function(){const _0x4e077b=_0x420e26,_0x3e046f=this[_0x4e077b(0x58c)],_0x1ee1b7=this[_0x4e077b(0x435)],_0x295817=0x18,_0x26663a=_0x295817/0x2,_0xf10828=0x60+_0x295817,_0x13ad2e=0x0+_0x295817;this[_0x4e077b(0x764)][_0x4e077b(0x187)]=this[_0x4e077b(0x5bb)],this[_0x4e077b(0x764)]['anchor']['x']=0.5,this['_downArrowSprite'][_0x4e077b(0x5ee)]['y']=0.5,this[_0x4e077b(0x764)][_0x4e077b(0x591)](_0xf10828+_0x26663a,_0x13ad2e+_0x26663a+_0x295817,_0x295817,_0x26663a),this[_0x4e077b(0x764)]['move'](Math[_0x4e077b(0x3c7)](_0x3e046f/0x2),Math[_0x4e077b(0x3c7)](_0x1ee1b7-_0x26663a)),this[_0x4e077b(0x6ed)]['bitmap']=this[_0x4e077b(0x5bb)],this[_0x4e077b(0x6ed)]['anchor']['x']=0.5,this[_0x4e077b(0x6ed)]['anchor']['y']=0.5,this[_0x4e077b(0x6ed)]['setFrame'](_0xf10828+_0x26663a,_0x13ad2e,_0x295817,_0x26663a),this['_upArrowSprite'][_0x4e077b(0x483)](Math[_0x4e077b(0x3c7)](_0x3e046f/0x2),Math[_0x4e077b(0x3c7)](_0x26663a));},Window[_0x420e26(0x6a9)][_0x420e26(0x6f2)]=function(){const _0x3ee977=_0x420e26,_0x41bcfd=0x90,_0x1b001b=0x60,_0x289295=0x18;this['_pauseSignSprite'][_0x3ee977(0x187)]=this[_0x3ee977(0x5bb)],this[_0x3ee977(0x2b4)]['anchor']['x']=0.5,this[_0x3ee977(0x2b4)]['anchor']['y']=0x1,this[_0x3ee977(0x2b4)][_0x3ee977(0x483)](Math[_0x3ee977(0x3c7)](this[_0x3ee977(0x58c)]/0x2),this[_0x3ee977(0x435)]),this[_0x3ee977(0x2b4)][_0x3ee977(0x591)](_0x41bcfd,_0x1b001b,_0x289295,_0x289295),this['_pauseSignSprite']['alpha']=0xff;},Window[_0x420e26(0x6a9)][_0x420e26(0x1e5)]=function(){const _0x23b933=_0x420e26,_0x56ae75=this[_0x23b933(0x532)][_0x23b933(0x2cb)][_0x23b933(0x642)](new Point(0x0,0x0)),_0x1aa1ec=this['_clientArea'][_0x23b933(0x485)];_0x1aa1ec['x']=_0x56ae75['x']+this['origin']['x'],_0x1aa1ec['y']=_0x56ae75['y']+this['origin']['y'],_0x1aa1ec['width']=Math['ceil'](this['innerWidth']*this['scale']['x']),_0x1aa1ec[_0x23b933(0x17f)]=Math[_0x23b933(0x85e)](this['innerHeight']*this['scale']['y']);},Window[_0x420e26(0x6a9)][_0x420e26(0x24c)]=function(){const _0x4f5877=_0x420e26,_0xad9812=this[_0x4f5877(0x1ce)],_0x1cd1f3=Math[_0x4f5877(0x609)](0x0,this[_0x4f5877(0x58c)]-_0xad9812*0x2),_0x3d1b67=Math[_0x4f5877(0x609)](0x0,this[_0x4f5877(0x435)]-_0xad9812*0x2),_0x4fad30=this[_0x4f5877(0x27d)],_0xfd2c6=_0x4fad30['children'][0x0];_0x4fad30['bitmap']=this[_0x4f5877(0x5bb)],_0x4fad30['setFrame'](0x0,0x0,0x60,0x60),_0x4fad30[_0x4f5877(0x483)](_0xad9812,_0xad9812),_0x4fad30[_0x4f5877(0x633)]['x']=_0x1cd1f3/0x60,_0x4fad30[_0x4f5877(0x633)]['y']=_0x3d1b67/0x60,_0xfd2c6[_0x4f5877(0x187)]=this[_0x4f5877(0x5bb)],_0xfd2c6[_0x4f5877(0x591)](0x0,0x60,0x60,0x60),_0xfd2c6[_0x4f5877(0x483)](0x0,0x0,_0x1cd1f3,_0x3d1b67),_0xfd2c6[_0x4f5877(0x633)]['x']=0x60/_0x1cd1f3,_0xfd2c6['scale']['y']=0x60/_0x3d1b67,_0x4fad30[_0x4f5877(0x4c6)](this[_0x4f5877(0x2e1)]);},Game_Temp[_0x420e26(0x6a9)][_0x420e26(0x790)]=function(){const _0x3c3fbb=_0x420e26;this['_animationQueue']=[],this['_fauxAnimationQueue']=[],this[_0x3c3fbb(0x299)]=[];},VisuMZ[_0x420e26(0x61d)][_0x420e26(0x134)]=Scene_Base[_0x420e26(0x6a9)][_0x420e26(0x707)],Scene_Base['prototype'][_0x420e26(0x707)]=function(){const _0x68cfe9=_0x420e26;VisuMZ[_0x68cfe9(0x61d)]['Scene_Base_terminateAnimationClearBugFix']['call'](this),$gameTemp[_0x68cfe9(0x790)]();};