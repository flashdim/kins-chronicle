//=============================================================================
// VisuStella MZ - Core Engine
// VisuMZ_0_CoreEngine.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_0_CoreEngine = true;

var VisuMZ = VisuMZ || {};
VisuMZ.CoreEngine = VisuMZ.CoreEngine || {};
VisuMZ.CoreEngine.version = 1.77;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 0] [Version 1.77] [CoreEngine]
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
 * Auto Battle Attack Seal Bypass
 * 
 * By default, if the attack skill is sealed via a trait and an actor has
 * auto-battle, the action can still be used via auto-battle. This is now fixed
 * and actors should not be able to attack via auto-battle if their attack
 * ability is sealed.
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
 * Battle Forced End Action Crash
 * 
 * Depending on various circumstances, currently active battlers can be cleared
 * from the battle system at will due to a number of reasons. However, if it
 * just so happens that the targets are cleared, too, with actions remaining,
 * then a crash will follow up. This plugin will prevent that change. Fix made
 * by Olivia.
 * 
 * ---
 * 
 * Debug Console Refresh Bug
 * 
 * When pressing F5 to refresh while the debug console (DevTools) is open,
 * some graphics will fail to load properly. This started occurring since the
 * RPG Maker MZ 1.5.0 update and the code for loading the images has now been
 * reverted to the 1.4.4 version where it was last stable.
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
 * Instant Text Discrepancy for Window_Message
 * 
 * Window_Message displays text differently when it draws letters one by one
 * versus when the text is displayed instantly. This isn't noticeable with the
 * default font, but it's very visible when using something like Arial. The
 * error is due to Bitmap.measureTextWidth yielding a rounded value per letter
 * versus per word. The Core Engine will provide a bug fix that will single out
 * the cause and make it so that only Window_Message will not utilize any round
 * number values when determining the width of each letter, whether or not it
 * is shown instantly. This change will only affect Window_Message and not any
 * other window in order to prevent unintended side effects.
 * 
 * This can be disabled through the Plugin Parameters:
 * 
 * Plugin Parameters > QoL Settings > Misc > Font Width Fix
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
 * Overly-Protective Substitute
 * 
 * When an ally with critical health is being targeted by a friendly non-
 * Certain Hit skill (such as a heal or buff) and another ally has the
 * substitute state, the other ally would "protect" the originally targeted
 * ally and take the heal or buff.
 * 
 * The new changed behavior is that now, substitute will not trigger for any
 * actions whose scope targets allies.
 * 
 * ---
 * 
 * Skill List Active After Party Member Change
 * 
 * If the skill list is active (ie. the player can move the cursor around) and
 * the party member currently being viewed is changed via the button commands,
 * then previously, RPG Maker MZ would still have that window be active despite
 * having the cursor hidden temporarily. Upon pressing direction buttons, the
 * cursor reveals itself and both the skill type window and skill list window
 * are both active, making way for lots of potential problems to happen.
 * 
 * ---
 * 
 * Sprite Removal and Destroy Crash
 * 
 * A texture check will now occur for sprites that are being removed and
 * destroyed in order to prevent crashes. In the off chance that someone
 * creates a sprite through a script call and removes it through such, the
 * likelihood of this occurance becomes higher. This makes the "destroy"
 * property take into account a texture check in order to see if the sprite
 * removal is taking extra steps and will reduce those extra steps.
 * 
 * ---
 * 
 * Status Window Name Vertical Cutoffs
 * 
 * In the battle status windows, whenever actor names are displayed, the bitmap
 * used to display their name text do not extend vertically all the way,
 * causing letters like lowercase "Q" and "G" to be cut off, making them hard
 * to distinguish from one another. The Core Engine will remedy this by
 * extending the bitmap to allow enough room. Fix made by Irina.
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
 * Water Tile Bug
 * 
 * It seems like there's a new bug that occurs if you create a tileset from
 * scratch in RPG Maker MZ version 1.5.0+ and version 1.6.0+! What this bug
 * does is it causes many tiles to become water tiles without intending to.
 * You can find this out by turning off all the plugins in your project,
 * putting a Ship or Boat on what are normally ground tiles, and then seeing
 * the Ship or Boat traverse through it.
 * 
 * There are two ways to fix this. We cannot fix it through code in this plugin
 * as it's a problem that involves the tileset json data there are ways to work
 * around it so that you can get the proper water-flags to go where they need
 * to be at.
 * 
 * 1. Copy a working un-bugged tileset onto the currently bugged one and
 *    reapply the tile features like passability, terrain tags, etc. This will
 *    make sure the water-passability tiles get copied over correctly.
 * 
 * 2. If you're on RPG Maker MZ version 1.5.0 or above, select a working
 *    un-bugged tileset (usually a pre-existing tileset when a new project is
 *    made), click the "Copy Page" button, go to the bugged tileset and press
 *    "Paste Page". You'll have to reapply any different properties like
 *    passabilities and terrain tags, but the water tile flags should now be
 *    working properly.
 * 
 * The plugin will not fix the problem itself since flag data is delicate and
 * should not be tampered with midgame as the changes made by the plugin might
 * not match the desired settings.
 * 
 * This plugin, however, will also send out an alert message when coming across
 * such a tile. Pay attention to it and do one of the following two steps above
 * to fix the problem.
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
 * === Actors-Related Notetags ===
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
 * === Classes-Related Notetags ===
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
 * === Enemies-Related Notetags ===
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
 * === Animations-Related Notetags ===
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
 * <Rate: x>
 * 
 * - Used for: MV Animation Name Tags
 * - Allows you to adjust the update for this MV Animation.
 *   - Does NOT work with Effekseer animations.
 * - The lower the number, the faster.
 * - Replace 'x' with a number representing the animation update rate.
 *   - Default rate: 4.
 *   - Minimum rate: 1.
 *   - Maximum rate: 10.
 * 
 * ---
 *
 * === Quality of Life-Related Notetags ===
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
 * <Scroll Lock X>
 * <Scroll Lock Y>
 * 
 * - Used for: Map Notetags
 * - Will prevent the map from being able to scroll left/right(x) or up/down(y)
 *   if these notetags are present.
 * - Useful for when maps are just slightly smaller than normal and the tiny
 *   scrolling is distracting.
 * - This will use the display nudge setting found in the Plugin Parameters.
 * - This setting will be disabled if the map is zoomed in.
 * 
 * ---
 * 
 * <Scroll Lock X: x>
 * <Scroll Lock Y: y>
 * 
 * - Used for: Map Notetags
 * - Will prevent the map from being able to scroll left/right(x) or up/down(y)
 *   if these notetags are present and will nudge the map camera slightly.
 * - Useful for when maps are just slightly smaller than normal and the tiny
 *   scrolling is distracting.
 * - Replace 'x' and 'y' with numbers between 0 and 1 to represent how much is
 *   being judged.
 *   - For example, for a 1280x720 resolution, a 27 tile wide map will benefit
 *     from a nudge of 0.15625. Play with these numbers to determine the best
 *     value for your maps.
 * - This setting will be disabled if the map is zoomed in.
 * 
 * ---
 *
 * === Basic, X, and S Parameters-Related Notetags ===
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
 * === Animation Commands ===
 * 
 * ---
 * 
 * Animation: Play at Coordinate
 * - Plays an animation on the screen at a specific x, y coordinate even if
 *   there is no sprite attached.
 * 
 *   Animation ID:
 *   - Plays this animation.
 * 
 *   Coordinates:
 * 
 *     X:
 *     Y:
 *     - X/Y coordinate used for the animation.
 *       You may use JavaScript code.
 * 
 *   Mirror Animation?:
 *   - Mirror the animation?
 * 
 *   Mute Animation?:
 *   - Mute the animation?
 * 
 * ---
 * 
 * === Audio Plugin Commands ===
 * 
 * ---
 * 
 * Audio: Change Current BGM Volume
 * - Changes the current BGM volume without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Volume:
 *   - Change the current BGM's volume to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 0 to 100.
 * 
 * ---
 * 
 * Audio: Change Current BGM Pitch
 * - Changes the current BGM pitch without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Pitch:
 *   - Change the current BGM's pitch to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 50 to 150.
 * 
 * ---
 * 
 * Audio: Change Current BGM Pan
 * - Changes the current BGM pan without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Pan:
 *   - Change the current BGM's pan to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from -100 to 100.
 * 
 * ---
 * 
 * Audio: Change Current BGM Volume
 * - Changes the current BGM volume without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Volume:
 *   - Change the current BGM's volume to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 0 to 100.
 * 
 * ---
 * 
 * Audio: Change Current BGM Pitch
 * - Changes the current BGM pitch without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Pitch:
 *   - Change the current BGM's pitch to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 50 to 150.
 * 
 * ---
 * 
 * Audio: Change Current BGM Pan
 * - Changes the current BGM pan without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Pan:
 *   - Change the current BGM's pan to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from -100 to 100.
 * 
 * ---
 * 
 * === Debug Plugin Commands ===
 * 
 * ---
 * 
 * Debug: Current Controller ID
 * - PLAY TEST ONLY.
 * - Shows current controller ID in debug console.
 * - If you press a key on the keyboard, this data will be erased.
 * - Also copies to computer clipboard if possible.
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
 * === Map Plugin Commands ===
 * 
 * ---
 * 
 * Map: Once Parallel
 * - Plays a Common Event parallel to the event once without repeating itself
 *   when done.
 * - Map only!
 * 
 *   Common Event ID:
 *   - The ID of the parallel Common Event to play.
 *   - Does NOT repeat itself when finished.
 *   - When exiting map scene or changing maps, all Once Parallels are cleared.
 *   - Once Parallels are not retained upon reentering the scene or map.
 *   - Once Parallels are not stored in memory and cannot be saved.
 * 
 * ---
 * 
 * === Picture Plugin Commands ===
 * 
 * ---
 * 
 * Picture: Coordinates Mode
 * - Play Test Mode only! Gets the coordinates of a specific picture as you
 *   move it across the screen.
 * 
 *   Picture ID: 
 *   - The ID of the pictures to track the coordinates of.
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
 * Picture: Rotate by Angle
 * - Rotates target picture by a amount angle over a set duration instead of
 *   continuously.
 * 
 *   Picture ID Number:
 *   - What is the ID of the picture you wish to rotate?
 *   - Use a number between 1 and 100.
 *   - You may use JavaScript code.
 * 
 *   Adjust Angle:
 *   - What is the angle you wish to rotate the picture by?
 *   - Use degrees (360 degrees per full rotation).
 *   - You may use JavaScript code.
 * 
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 * 
 *   Duration:
 *   - Duration of rotation effect in frames.
 *   - 60 frames = 1 second.
 *   - You may use JavaScript code.
 * 
 *   Wait for Completion:
 *   - Wait until completion before moving onto the next event?
 * 
 * ---
 * 
 * Picture: Rotate to Angle
 * - Rotates target picture to a certain angle over a set duration
 *   instead of continuously.
 * 
 *   Picture ID Number:
 *   - What is the ID of the picture you wish to rotate?
 *   - Use a number between 1 and 100.
 *   - You may use JavaScript code.
 * 
 *   Target Angle:
 *   - What is the target angle you wish to rotate the picture?
 *   - Use degrees (360 degrees per full rotation).
 *   - You may use JavaScript code.
 * 
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 * 
 *   Duration:
 *   - Duration of rotation effect in frames.
 *   - 60 frames = 1 second.
 *   - You may use JavaScript code.
 * 
 *   Wait for Completion:
 *   - Wait until completion before moving onto the next event?
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
 * - Some battle systems REQUIRE their specific plugins!
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
 * === Variable Plugin Commands ===
 * 
 * ---
 * 
 * Variable: JS Eval
 * - Pick a variable ID and value to alter through JS.
 * - Allows one line of code for variable ID and operand.
 * - Functions like RM2k3's Variable Pointers.
 * 
 *   Variable ID:
 *   - This is the target variable to alter.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 *   Operation Type:
 *   - What operation do you wish to use for this Plugin Command?
 * 
 *   Operand Modifier:
 *   - Value to be used in calculating the target variable.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 * ---
 * 
 * Variable: JS Block
 * - Pick a variable ID and value to alter through JS.
 * - Allows JS block code for variable ID and operand.
 * - Functions like RM2k3's Variable Pointers.
 * 
 *   Variable ID:
 *   - This is the target variable to alter.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 *   Operation Type:
 *   - What operation do you wish to use for this Plugin Command?
 * 
 *   Operand Modifier:
 *   - Value to be used in calculating the target variable.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
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
 *   Shift+R: Recover All:
 *   - For Play Test only!
 *   - During battle, pressing SHIFT + R will refill the whole party's HP
 *     and MP and status.
 * 
 *   Shift+T: Full TP
 *   - For Play Test only! 
 *   - During battle, pressing SHIFT + T will refill the whole party's TP.
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
 * Picture-Related
 * 
 *   Anti-Zoom Pictures:
 *   - If on, prevents pictures from being affected by zoom.
 * 
 *   Picture Containers > Detach in Battle:
 *   - If detached, picture container will be separated from the spriteset
 *     while on the battle scene.
 *   - This will prevent any visual effects that alter the entire spriteset
 *     from affecting the detached picture container.
 * 
 *   Picture Containers > Detach in Map:
 *   - If detached, picture container will be separated from the spriteset
 *     while on the map scene.
 *   - This will prevent any visual effects that alter the entire spriteset
 *     from affecting the detached picture container.
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
 *   Font Shadows:
 *   - If on, text uses shadows instead of outlines.
 *
 *   Font Smoothing:
 *   - If on, smoothes fonts shown in-game.
 * 
 *   Font Width Fix:
 *   - Fixes the font width issue with instant display non-monospaced fonts
 *     in the Message Window.
 *
 *   Key Item Protection:
 *   - If on, prevents Key Items from being able to be sold and from being
 *     able to be consumed.
 * 
 *   Map Name Text Code:
 *   - If on, map names will use text codes.
 *   - If off, only the raw map name will be used.
 *
 *   Modern Controls:
 *   - If on, allows usage of the Home/End buttons.
 *   - Home would scroll to the first item on a list.
 *   - End would scroll to the last item on a list.
 *   - Shift + Up would page up.
 *   - Shift + Down would page down.
 *
 *   MV Animation Rate:
 *   - Adjusts the rate at which MV animations play.
 *   - Default: 4.
 *   - Lower for faster.
 *   - Higher for slower.
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
 *   Shortcut Scripts:
 *   - Enables shortcut-based script variables and functions that can be used
 *     for script calls.
 *   - Shortcut list enabled for this is as follows:
 * 
 *     $commonEvent(id)
 *     - Queues a common event.
 *     - This does not interrupt the current event to run the desired common
 *       event. Any queued common events will run after the current event list
 *       has finished.
 *     - Replace 'id' with the ID of the common event you wish to queue.
 *     - Common events only run in the map scene and battle scene.
 * 
 *     $onceParallel(id)
 *     - Runs a common event in the background as a once parallel event.
 *     - Once parallel events will run in the background like a parallel
 *       process, except that it does not repeat after finishing.
 *     - Replace 'id' with the ID of the common event you wish to run.
 *     - Only works in the map scene and battle scene. Battle scene usage will
 *       require VisuMZ_1_BattleCore.
 * 
 *     $scene
 *     - Returns current scene.
 * 
 *     $spriteset
 *     - Returns current scene's spriteset if there is one.
 * 
 *     $subject
 *     - Returns last recorded identity of the battle's subject/user.
 * 
 *     $targets
 *     - Returns last recorded targets marked in battle.
 * 
 *     $target
 *     - Returns last recorded target marked in battle.
 *     - Works better with VisuMZ_1_BattleCore.
 * 
 *     $event
 *     - Returns currently initiated map event.
 *
 *   Smart Event Collision:
 *   - Makes events only able to collide with one another if they're
 *    'Same as characters' priority.
 * 
 *   Subfolder Name Purge:
 *   - Purge subfolder name from Plugin Parameters when reading data to let
 *     Plugin Commands work properly.
 *   - This is for plugins (such as the VisuMZ library) that utilize dynamic
 *     name registrations for Plugin Commands. Turn this on if you plan on
 *     using subfolders with VisuMZ plugins.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Battle System
 * ============================================================================
 * 
 * Choose which battle system to use for your game.
 * 
 * Some battle systems REQUIRE their specific plugins! This means if you do not
 * have the required battle system plugin installed, it will not change over.
 * The Core Engine plugin does not contain data for all of the battle systems
 * inside its code.
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
 * If the game's Window Skin is changed mid-game, the colors used will still be
 * based off the default Window Skin's colors. This is due to storing them in a
 * cache and preventing extra processing and reduces lag.
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
 *   Finish Entry:
 *   - Text used to describe finish entry.
 * 
 *   Page Change:
 *   - Text used to describe character page changing.
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
 *   Blur Strength:
 *   - Strength used for menu background snapshots.
 *   - Default: 8. Higher is stronger. Lower is weaker.
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
 *   Split "Escape":
 *   - Used ONLY for those making their own custom keyboard key input maps.
 *   - "Split" option makes separate instances of "Cancel" and "Menu" keys.
 *   - "Don't" option will consolidate both into "Escape" keys.
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
 * Plugin Parameters: Controller Button Assist Settings
 * ============================================================================
 *
 * These are sub-settings for the Button Assist Window Plugin Parameters. Where
 * the Button Assist Window Plugin Parameters are focused on keyboard entries,
 * these sections are focused on gamepad controllers.
 * 
 * Add multiple gamepads to the list to give them different button assist text.
 * If a gamepad is being used but not listed here, the button assist text will
 * default to the keyboard version.
 * 
 * For those looking for more information regarding controllers, visit this
 * site: https://gamepad-tester.com/
 *
 * ---
 *
 * ID Information
 * 
 *   Controller ID Name:
 *   - Exact string used for this controller ID.
 *   - Plugin Command "Debug: Current Controller ID" for ID help.
 *   - Example: Xbox 360 Controller (XInput STANDARD GAMEPAD)
 * 
 *   Similarity Match:
 *   - Partial string used to check for controller ID.
 *   - Plugin Command "Debug: Current Controller ID" for ID help.
 *   - This check occurs secondary to the exact name.
 *   - Example: Xbox
 *
 * ---
 *
 * Directions
 * 
 *   Up:
 *   Left:
 *   Right:
 *   Down:
 *   - How this button is shown in-game.
 *   - Text codes allowed.
 *
 * ---
 *
 * Actions
 * 
 *   OK:
 *   Cancel:
 *   Menu:
 *   Shift:
 *   Page Up:
 *   Page Down:
 *   - How this button is shown in-game.
 *   - Text codes allowed.
 *   - *NOTE*: Controllers use a different mapping scheme from keyboards.
 *     - The "cancel" button is separate from the "menu" button though, for the
 *       majority of the button assist window help text, we'll be referring to
 *       the cancel button usually.
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
 *   Show Actor Level?:
 *   - Show the actor level when displaying actors?
 *   - Affects for most windows in-game.
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
 * Maps
 * 
 *   Scroll Lock Small X?:
 *   Scroll Lock Small Y?:
 *   - Automatically scroll lock X/Y scrolling if the map is too small?
 *   - Useful for 1280x720 resolutions when the map is 27 tiles wide.
 *     - This will get rid of the subtle scrolling when moving from one half of
 *       the screen to the other.
 *   - This setting will be disabled if the map is zoomed in.
 * 
 *   Locked Display X?:
 *   Locked Display Y?:
 *   - What display X/Y value do you want for auto-scroll locked maps?
 *   - Use a number between 0 and 1 for best results.
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
 * These settings also allow you to add scroll bars to scrollable windows,
 * letting the player know how much of the window's contents there are left for
 * scrolling. The scroll bar can be enabled, disabled, have its thickness
 * changed, colors changed, etc.
 *
 * ---
 *
 * Window Defaults
 * 
 *   Line Height:
 *   - Default line height used for standard windows.
 *   - Avoid using odd numbers.
 *   - Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * 
 *   Item Padding:
 *   - Default line padding used for standard windows.
 *   - Avoid using odd numbers.
 *   - Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
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
 * Scroll Bar
 * 
 *   Show Scroll Bar?:
 *   - Show the scroll bar for scrollable windows?
 * 
 *   Thickness:
 *   - How thick do you want the scroll bar to be?
 * 
 *   Offset:
 *   - How much do you want to offset the scroll bar by?
 * 
 *   Bar Body Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Off Bar Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Off Bar Opacity:
 *   - What opacity value do you want the off bar opacity to be?
 *   - Use a number between 0 and 255.
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
 *   - Avoid using odd numbers.
 *   - Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
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
 * Version 1.77: August 17, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause the BGS related Plugin Commands to crash.
 *    Fix made by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Scroll-Linked Pictures now work if the image file are in a folder within
 *    the img/pictures/ folder without the folder needing a ! at the start.
 * * New Features!
 * ** New Plugin Commands added by Arisu:
 * *** Picture: Rotate by Angle
 * **** Rotates target picture by a amount angle over a set duration instead of
 *      continuously.
 * **** View help file for more information on the Plugin Command.
 * *** Picture: Rotate to Angle
 * **** Rotates target picture to a certain angle over a set duration instead
 *      of continuously.
 * **** View help file for more information on the Plugin Command.
 * ** New Plugin Parameter added by Irina:
 * *** Parameters > Menu Button Assist > General > Split "Escape":
 * **** Used ONLY for those making their own custom keyboard key input maps.
 * **** "Split" option makes separate instances of "Cancel" and "Menu" keys.
 * **** "Don't" option will consolidate both into "Escape" keys.
 * 
 * Version 1.76: June 15, 2023
 * * Bug Fixes!
 * ** Fixed a bug that displayed the incorrect button press key for name input
 *    processing's cancel action. Fix made by Olivia.
 * 
 * Version 1.75: March 16, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** In Scene_Name, when using the Keyboard Input, the button assist windows
 *    will no longer display the keyboard shortcuts for Ok and Cancel, but
 *    instead, show them for ENTER and BKSP. Update made by Arisu.
 * ** In Scene_Name, when manual inputting, the Page Up/Dn keys are now
 *    displayed to show changing character pages.
 * * New Features!
 * ** New Plugin Parameters added by Arisu and sponsored by AndyL:
 * *** Params > Keyboard Input > Button Assist > Finish Entry
 * **** Text used to describe finish entry.
 * *** Params > Keyboard Input > Button Assist > Page Change
 * **** Text used to describe changing character pages.
 * *** Params > Window Settings > Scroll Bar
 * **** These settings also allow you to add scroll bars to scrollable windows,
 *      letting the player know how much of the window's contents there are
 *      left for scrolling. The scroll bar can be enabled, disabled, have its
 *      thickness changed, colors changed, etc.
 * 
 * Version 1.74: February 16, 2023
 * * Compatibility Update!
 * ** Plugin Commands for: Audio: Change Current BGM/BGS Volume/Pitch/Pan
 *    should now work properly with the updated RPG Maker MZ version and
 *    WebAudio changes. Update made by Arisu.
 * 
 * Version 1.73: January 20, 2023
 * * Compatibility Update!
 * ** Added better Effekseer version compatibility.
 * 
 * Version 1.72: December 15, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Skill List Active After Party Member Change
 * **** If the skill list is active (ie. the player can move the cursor around)
 *      and the party member currently being viewed is changed via the button
 *      commands, then previously, RPG Maker MZ would still have that window be
 *      active despite having the cursor hidden temporarily. Upon pressing
 *      direction buttons, the cursor reveals itself and both the skill type
 *      window and skill list window are both active, making way for lots of
 *      potential problems to happen.
 * ** Water Tile Bug
 * *** It seems like there's a new bug that occurs if you create a tileset from
 *     scratch in RPG Maker MZ version 1.5.0+ and version 1.6.0+! What this bug
 *     does is it causes many tiles to become water tiles without intending to.
 *     You can find this out by turning off all the plugins in your project,
 *     putting a Ship or Boat on what are normally ground tiles, and then
 *     seeing the Ship or Boat traverse through it.
 * *** There are two ways to fix this. We cannot fix it through code in this
 *     plugin as it's a problem that involves the tileset json data there are
 *     ways to work around it so that you can get the proper water-flags to go
 *     where they need to be at.
 * **** 1. Copy a working un-bugged tileset onto the currently bugged one and
 *      reapply the tile features like passability, terrain tags, etc. This
 *      will make sure the water-passability tiles get copied over correctly.
 * **** 2. If you're on RPG Maker MZ version 1.5.0 or above, select a working
 *      un-bugged tileset (usually a pre-existing tileset when a new project is
 *      made), click the "Copy Page" button, go to the bugged tileset and press
 *      "Paste Page". You'll have to reapply any different properties like
 *      passabilities and terrain tags, but the water tile flags should now be
 *      working properly.
 * *** The plugin will not fix the problem itself since flag data is delicate
 *     and should not be tampered with midgame as the changes made by the
 *     plugin might not match the desired settings.
 * *** This plugin, however, will also send out an alert message when coming
 *     across such a tile. Pay attention to it and do one of the following two
 *     steps above to fix the problem.
 * * Documentation Update!
 * ** Added "Skill List Active After Party Member Change" section to the
 *    "Important Changes: Bug Fixes" section of the help file.
 * ** Added "Water Tile Bug" section to the "Important Changes: Bug Fixes"
 *    section of the help file.
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Menu Backgrounds > Blur Strength
 * **** Strength used for menu background snapshots.
 * 
 * Version 1.71: November 10, 2022
 * * Bug Fixes!
 * ** Title Command Window should now allow for more than 4 custom commands
 *    without hidden commands. Fix made by Irina.
 * ** Fixed a problem with repeating animations from Visual State Effects
 *    causing softlocks. Fix made by Olivia.
 * 
 * Version 1.70: October 6, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** A texture check will now occur for sprites that are being removed and
 *     destroyed in order to prevent crashes. In the off chance that someone
 *     creates a sprite through a script call and removes it through such, the
 *     likelihood of this occurance becomes higher. This makes the destroy
 *     property take into account a texture check in order to see if the sprite
 *     removal is taking extra steps and will reduce those extra steps.
 * * Documentation Update!
 * ** Added "Sprite Removal and Destroy Crash" section to the "Important
 *    Changes: Bug Fixes" section.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.69: September 8, 2022
 * * Bug Fixes!
 * ** Fixed the combination of Button Assist Location: Top with Help Location:
 *    Bottom combination not working properly. Fix made by Irina.
 * 
 * Version 1.68: August 4, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Olivia and sponsored by Archeia:
 * *** Audio: Change Current BGM Volume
 * *** Audio: Change Current BGM Pitch
 * *** Audio: Change Current BGM Pan
 * *** Audio: Change Current BGS Volume
 * *** Audio: Change Current BGS Pitch
 * *** Audio: Change Current BGS Pan
 * **** Changes the current BGM/BGS volume/pitch/pan without changing any of
 *      the current BGM/BGS's other properties and without restarting BGM/BGS.
 * 
 * Version 1.67: July 28, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added notes for Line Height and Item Padding parameters:
 * *** Avoid using odd numbers.
 * *** Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * *** This setting will be disabled if the map is zoomed in.
 * * New Features!
 * ** New map notetags added by Irina and sponsored by AndyL:
 * *** <Scroll Lock X>
 * *** <Scroll Lock X: x>
 * *** <Scroll Lock Y>
 * *** <Scroll Lock Y: y>
 * **** Causes the map to not scroll left/right(x) or up/down(y). Useful for
 *      when maps are just slightly smaller than normal and the tiny scrolling
 *      is distracting.
 * ** New Plugin Parameters added by Irina and sponsored by AndyL:
 * *** Plugin Parameters > Screen Resolution > Maps > Scroll Lock Small X?
 * *** Plugin Parameters > Screen Resolution > Maps > Scroll Lock Small Y?
 * *** Plugin Parameters > Screen Resolution > Maps > Locked Display X?
 * *** Plugin Parameters > Screen Resolution > Maps > Locked Display Y?
 * **** Automatically scroll locks small maps to prevent them from scrolling
 *      horizontally/vertically. Useful for 1280x720 resolutions when the map
 *      is 27 tiles wide. This will get rid of the subtle scrolling when moving
 *      from one half of the screen to the other.
 * **** This setting will be disabled if the map is zoomed in.
 * * Feature Update!
 * ** Warnings added to Line Height and Item Padding parameters:
 * *** Avoid using odd numbers.
 * *** Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * 
 * Version 1.66: July 14, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Debug Console Refresh Bug
 * **** When pressing F5 to refresh while the debug console (DevTools) is open,
 *      some graphics will fail to load properly. This started occurring since
 *      the RPG Maker MZ 1.5.0 update and the code for loading the images has
 *      now been reverted to the 1.4.4 version where it was last stable.
 * * Documentation Update!
 * ** Help file updated for new major bug fix.
 * 
 * Version 1.65: June 30, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Parameter Settings > Show Actor Level?
 * **** Show the actor level when displaying actors?
 * **** Used for most windows in-game.
 * 
 * Version 1.64: June 9, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command made by Arisu and sponsored by
 *    ImGonnaPutMyGameOnXboxAndYouCantStopMe:
 * *** Debug: Current Controller ID
 * **** PLAY TEST ONLY. Shows current controller ID in debug console.
 * **** Also copies to computer clipboard if possible.
 * ** New Plugin Parameters made by Arisu and sponsored by
 *    ImGonnaPutMyGameOnXboxAndYouCantStopMe:
 * *** Subsettings for Button Assist Window: Controller Button Assist
 * **** These are sub-settings for the Button Assist Window Plugin Parameters.
 *      Where the Button Assist Window Plugin Parameters are focused on
 *      keyboard entries, these sections are focused on gamepad controllers.
 * **** Add multiple gamepads to the list to give them different button assist
 *      text. If a gamepad is being used but not listed here, the button assist
 *      text will default to the keyboard version.
 * 
 * Version 1.63: May 2, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > QoL Settings > Misc > Map Name Text Code
 * **** If on, map names will use text codes.
 * **** If off, only the raw map name will be used.
 * * Feature Update!
 * ** The map name text code change will no longer be on forcefully. It is now
 *    something that can be toggled by Plugin Parameters. Update by Irina.
 * 
 * Version 1.62: April 28, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu and sponsored by Archeia:
 * *** Variable: JS Eval
 * **** Pick a variable ID and value to alter through JS.
 * **** Allows one line of code for variable ID and operand.
 * **** Functions like RM2k3's Variable Pointers.
 * *** Variable: JS Block
 * **** Pick a variable ID and value to alter through JS.
 * **** Allows JS block code for variable ID and operand.
 * **** Functions like RM2k3's Variable Pointers.
 * ** Map names can now use text codes. Made by Arisu and sponsored by Archeia.
 * 
 * Version 1.61: April 21, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Battle Forced End Action Crash
 * **** Depending on various circumstances, currently active battlers can be
 *      cleared from the battle system at will due to a number of reasons.
 *      However, if it just so happens that the targets are cleared, too, with
 *      actions remaining, then a crash will follow up. This plugin will
 *      prevent that change. Fix made by Olivia.
 * 
 * Version 1.60: April 14, 2022
 * * Bug Fixes!
 * ** Number Input window will now respond to Home/End keys properly.
 *    Fix made by Olivia.
 * 
 * Version 1.59: April 7, 2022
 * * Compatibility Update!
 * ** RPG Maker MZ 1.4.4 compatibility update!
 * *** "Shutdown" command should now be more compatible with other aspects of
 *     the client when running from Node JS client on other OS's.
 * 
 * Version 1.58: March 24, 2022
 * * Feature Update!
 * ** Plugin Commands now have separators for easier selection.
 * 
 * Version 1.57: March 3, 2022
 * * Compatibility Update!
 * ** The "Shutdown" command from the title screen should now be compatible
 *    with RPG Maker MZ 1.4.4 and up. Update made by Olivia.
 * 
 * Version 1.56: February 10, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New features added by Arisu and sponsored by Anon:
 * *** Plugin Parameters > QoL > Misc > Shortcut Scripts
 * **** Enables shortcut-based script variables and functions that can be used
 *      for script calls.
 * **** Shortcut list enabled for this is as follows:
 * ***** $commonEvent(id), $onceParallel(id), $scene, $spriteset, $subject, 
 *       $targets, $target, $event
 * ***** For more information on how to use them, review the help file.
 * 
 * Version 1.55: January 27, 2022
 * * Feature Update!
 * ** Once Parallels for the map are now able to update even while other events
 *    are running. Update made by Arisu.
 * 
 * Version 1.54: January 13, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Overly-Protective Substitute
 * *** When an ally with critical health is being targeted by a friendly non-
 *     Certain Hit skill (such as a heal or buff) and another ally has the
 *     substitute state, the other ally would "protect" the originally targeted
 *     ally and take the heal or buff.
 * *** The new changed behavior is that now, substitute will not trigger for
 *     any actions whose scope targets allies.
 * *** Fix made by Olivia.
 * * Documentation Update!
 * ** Added documentation for new MZ Bug: Overly-Protective Substitute.
 * * Feature Update!
 * ** Added a failsafe for those who did not update the plugin parameter
 *    settings and are using MV Animations.
 * 
 * Version 1.53: December 30, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetag added by Olivia:
 * *** <Rate: x>
 * **** Allows you to adjust the update for this MV Animation.
 * ***** Does NOT work with Effekseer animations.
 * **** The lower the number, the faster.
 * **** Replace 'x' with a number representing the animation update rate.
 * ***** Default rate: 4.
 * ***** Minimum rate: 1.
 * ***** Maximum rate: 10.
 * ** New Plugin Parameter added by Olivia:
 * *** Plugin Parameters > Qualify of Life Settings > MV Animation Rate
 * **** Adjusts the rate at which MV animations play.
 * **** Default: 4. Lower for faster. Higher for slower.
 * * Optimization Update!
 * ** MV Animations should run more optimized.
 * 
 * Version 1.52: December 16, 2021
 * * Compatibility Update!
 * ** RPG Maker MZ 1.4.0 compatibility update!
 * *** MV Animations played on screen level will now show up properly in the
 *     center of the screen.
 * 
 * Version 1.51: December 9, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** In the battle status windows, whenever actor names are displayed, the
 *     bitmap used to display their name text do not extend vertically all the
 *     way, causing letters like lowercase "Q" and "G" to be cut off, making
 *     them hard to distinguish from one another. The Core Engine will remedy
 *     this by extending the bitmap to allow enough room. Fix made by Irina.
 * 
 * Version 1.50: November 4, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** By default, if the attack skill is sealed via a trait and an actor has
 *     auto-battle, the action can still be used via auto-battle. This is now
 *     fixed and actors should not be able to attack via auto-battle if their
 *     attack ability is sealed. Fix made by Yanfly.
 * * Documentation Update!
 * ** Help file updated for new RPG Maker MZ bug fix.
 * 
 * Version 1.49: October 28, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Command added by Arisu and sponsored by Anon:
 * *** Map: Once Parallel
 * **** Plays a Common Event parallel to the event once without repeating
 *      itself when done. Map only!
 * **** When exiting map scene or changing maps, all Once Parallels are cleared
 * **** Once Parallels are not retained upon reentering the scene or map.
 * **** Once Parallels are not stored in memory and cannot be saved.
 * 
 * Version 1.48: October 21, 2021
 * * Feature Update!
 * ** Bitmap.blt function will now have source coordinates and destination X
 *    and Y coordinates rounded to prevent blurring. Update made by Olivia.
 * 
 * Version 1.47: October 14, 2021
 * * Bug Fixes!
 * ** Prevents Number Input window from having a NaN value due to holding down
 *    the fast forward key. Fix made by Arisu.
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameter added by Yanfly:
 * *** Plugin Parameters > QoL Settings > Misc > Font Width Fix
 * **** Fixes the font width issue with non-monospaced fonts in the Message
 *      Window. This is now an optional fix.
 * 
 * Version 1.46: September 23, 2021
 * * Documentation Update!
 * ** Added line to Plugin Command: "System: Battle System Change":
 * *** Some battle systems REQUIRE their specific plugins!
 * ** Added lines to "Plugin Parameters: Battle System":
 * *** Some battle systems REQUIRE their specific plugins! This means if you do
 *     not have the required battle system plugin installed, it will not change
 *     over. The Core Engine plugin does not contain data for all of the battle
 *     systems inside its code.
 * 
 * Version 1.45: September 17, 2021
 * * Bug Fixes!
 * ** Fixed a problem with "Picture: Coordinates Mode" to properly utilize the
 *    correct picture ID. Fix made by Arisu.
 * ** RPG Maker MZ Bug Fix:
 * *** Instant Text Discrepancy for Window_Message
 * **** Window_Message displays text differently when it draws letters one by
 *      one versus when the text is displayed instantly. This isn't noticeable
 *      with the default font, but it's very visible when using something like
 *      Arial. The error is due to Bitmap.measureTextWidth yielding a rounded
 *      value per letter versus per word. The Core Engine will provide a bug
 *      fix that will single out the cause and make it so that only
 *      Window_Message will not utilize any round number values when
 *      determining the width of each letter, whether or not it is shown
 *      instantly. This change will only affect Window_Message and not any
 *      other window in order to prevent unintended side effects.
 * **** Fix made by Yanfly.
 * * Compatibility Update!
 * ** RPG Maker MZ 1.3.3 compatibility.
 * *** Updated how gauges are drawn.
 * * Documentation Update!
 * ** Help file updated for new RPG Maker MZ bug fix.
 * 
 * Version 1.44: August 20, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Anon.
 * *** "Animation: Play at Coordinate"
 * **** Plays an animation on the screen at a specific x, y coordinate even if
 *      there is no sprite attached.
 * 
 * Version 1.43: July 23, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Archeia!
 * *** "Picture: Coordinates Mode"
 * **** Play Test Mode only!
 * **** Gets the coordinates of a specific picture as you move it across the
 *      screen.
 * **** Helpful for those who don't want to do guess work on the screen
 *      coordinates when it comes to placing down pictures.
 * 
 * Version 1.42: July 16, 2021
 * * Documentation Update
 * ** Added text to "Plugin Parameters: Color Settings" for clarification:
 * *** If the game's Window Skin is changed mid-game, the colors used will
 *     still be based off the default Window Skin's colors. This is due to
 *     storing them in a cache and preventing extra processing and reduces lag.
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
 * @command Separator_Animation
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AnimationPoint
 * @text Animation: Play at Coordinate
 * @desc Plays an animation on the screen at a specific x, y
 * coordinate even if there is no sprite attached.
 *
 * @arg AnimationID:num
 * @text Animation ID
 * @parent Animation
 * @type animation
 * @desc Plays this animation.
 * @default 1
 * 
 * @arg Coordinates
 *
 * @arg pointX:eval
 * @text X
 * @parent Coordinates
 * @desc X coordinate used for the animation.
 * You may use JavaScript code.
 * @default Graphics.width / 2
 *
 * @arg pointY:eval
 * @text Y
 * @parent Coordinates
 * @desc Y coordinate used for the animation.
 * You may use JavaScript code.
 * @default Graphics.height / 2
 *
 * @arg Mirror:eval
 * @text Mirror Animation?
 * @parent Animation
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the animation?
 * @default false
 *
 * @arg Mute:eval
 * @text Mute Animation?
 * @parent Animation
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the animation?
 * @default false
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Audio
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgmVolume
 * @text Audio: Change Current BGM Volume
 * @desc Changes the current BGM volume without changing any of the
 * current BGM's other properties and without restarting the BGM.
 *
 * @arg volume:eval
 * @text Volume
 * @desc Change the current BGM's volume to what amount?
 * You may use JavaScript code. Use numbers from 0 to 100.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgmPitch
 * @text Audio: Change Current BGM Pitch
 * @desc Changes the current BGM pitch without changing any of the
 * current BGM's other properties and without restarting the BGM.
 *
 * @arg pitch:eval
 * @text Pitch
 * @desc Change the current BGM's pitch to what amount?
 * You may use JavaScript code. Use numbers from 50 to 150.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgmPan
 * @text Audio: Change Current BGM Pan
 * @desc Changes the current BGM pan without changing any of the
 * current BGM's other properties and without restarting the BGM.
 *
 * @arg pan:eval
 * @text Pan
 * @desc Change the current BGM's pan to what amount?
 * You may use JavaScript code. Use numbers from -100 to 100.
 * @default 0
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgsVolume
 * @text Audio: Change Current BGS Volume
 * @desc Changes the current BGS volume without changing any of the
 * current BGS's other properties and without restarting the BGS.
 *
 * @arg volume:eval
 * @text Volume
 * @desc Change the current BGS's volume to what amount?
 * You may use JavaScript code. Use numbers from 0 to 100.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgsPitch
 * @text Audio: Change Current BGS Pitch
 * @desc Changes the current BGS pitch without changing any of the
 * current BGS's other properties and without restarting the BGS.
 *
 * @arg pitch:eval
 * @text Pitch
 * @desc Change the current BGS's pitch to what amount?
 * You may use JavaScript code. Use numbers from 50 to 150.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgsPan
 * @text Audio: Change Current BGS Pan
 * @desc Changes the current BGS pan without changing any of the
 * current BGS's other properties and without restarting the BGS.
 *
 * @arg pan:eval
 * @text Pan
 * @desc Change the current BGS's pan to what amount?
 * You may use JavaScript code. Use numbers from -100 to 100.
 * @default 0
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Debug
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DebugConsoleLastControllerID
 * @text Debug: Current Controller ID
 * @desc PLAY TEST ONLY. Shows current controller ID in debug console.
 * Also copies to computer clipboard if possible.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Export
 * @text -
 * @desc -
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
 * @command Separator_Game
 * @text -
 * @desc -
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
 * @command Separator_Gold
 * @text -
 * @desc -
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
 * Use negative values to remove gold. You may use JS.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Map
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapOnceParallel
 * @text Map: Once Parallel
 * @desc Plays a Common Event parallel to the event once without
 * repeating itself when done. Map only!
 *
 * @arg CommonEventID:num
 * @text Common Event ID
 * @type common_event
 * @desc The ID of the parallel Common Event to play.
 * Does NOT repeat itself when finished.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Picture
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureCoordinatesMode
 * @text Picture: Coordinates Mode
 * @desc Play Test Mode only! Gets the coordinates of a specific
 * picture as you move it across the screen.
 *
 * @arg PictureID:num
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc The ID of the pictures to track the coordinates of.
 * @default 1
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
 * @command PictureRotateBy
 * @text Picture: Rotate By Angle
 * @desc Rotates target picture by a amount angle over a set duration
 * instead of continuously.
 * 
 * @arg PictureID:eval
 * @text Picture ID Number
 * @desc What is the ID of the picture you wish to rotate? Use a
 * number between 1 and 100. You may use JavaScript code.
 * @default 1
 * 
 * @arg AdjustAngle:eval
 * @text Adjust Angle
 * @desc What is the angle you wish to rotate the picture by?
 * Use degrees (360 degrees per full rotation).
 * @default 0
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
 * @arg Duration:eval
 * @text Duration
 * @desc Duration of rotation effect in frames.
 * 60 frames = 1 second. You may use JavaScript code.
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
 * @command PictureRotate
 * @text Picture: Rotate to Angle
 * @desc Rotates target picture to a certain angle over a set duration
 * instead of continuously.
 * 
 * @arg PictureID:eval
 * @text Picture ID Number
 * @desc What is the ID of the picture you wish to rotate? Use a
 * number between 1 and 100. You may use JavaScript code.
 * @default 1
 * 
 * @arg TargetAngle:eval
 * @text Target Angle
 * @desc What is the target angle you wish to rotate the picture?
 * Use degrees (360 degrees per full rotation).
 * @default 0
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
 * @arg Duration:eval
 * @text Duration
 * @desc Duration of rotation effect in frames.
 * 60 frames = 1 second. You may use JavaScript code.
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
 * @command Separator_ScreenShake
 * @text -
 * @desc -
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
 * @command Separator_Switch
 * @text -
 * @desc -
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
 * @command Separator_System
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetBattleSystem
 * @text System: Battle System Change
 * @desc Switch to a different battle system in-game.
 * Some battle systems REQUIRE their specific plugins!
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
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Variable
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableEvalReference
 * @text Variable: JS Eval
 * @desc Pick a variable ID and value to alter through JS.
 * Functions like RM2k3's Variable Pointers.
 *
 * @arg id:eval
 * @text Variable ID
 * @desc This is the target variable to alter.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default 1
 *
 * @arg operation:str
 * @text Operation Type
 * @type select
 * @option Set
 * @value =
 * @option Add
 * @value +
 * @option Sub
 * @value -
 * @option Mul
 * @value *
 * @option Div
 * @value /
 * @option Mod
 * @value %
 * @desc What operation do you wish to use for this Plugin Command?
 * @default =
 *
 * @arg operand:eval
 * @text Operand Modifier
 * @desc Value to be used in calculating the target variable.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableJsBlock
 * @text Variable: JS Block
 * @desc Pick a variable ID and value to alter through JS.
 * Functions like RM2k3's Variable Pointers.
 *
 * @arg id:func
 * @text Variable ID
 * @type note
 * @desc This is the target variable to alter.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default "// Declare Variables\nlet varID = 1;\n\n// Perform Calculations\n\n// Return Variable ID\nreturn varID;"
 *
 * @arg operation:str
 * @text Operation Type
 * @type select
 * @option Set
 * @value =
 * @option Add
 * @value +
 * @option Sub
 * @value -
 * @option Mul
 * @value *
 * @option Div
 * @value /
 * @option Mod
 * @value %
 * @desc What operation do you wish to use for this Plugin Command?
 * @default =
 *
 * @arg operand:func
 * @text Operand Modifier
 * @type note
 * @desc Value to be used in calculating the target variable.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default "// Declare Variables\nlet value = 0;\n\n// Perform Calculations\n\n// Return Variable ID\nreturn value;"
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
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
 * @default {"PlayTest":"","NewGameBoot:eval":"true","ForceNoPlayTest:eval":"false","OpenConsole:eval":"true","F6key:eval":"true","F7key:eval":"true","NewGameCommonEvent:num":"0","BattleTest":"","BTestItems:eval":"true","BTestWeapons:eval":"true","BTestArmors:eval":"true","BTestAddedQuantity:num":"90","ShiftR_Toggle:eval":"true","ShiftT_Toggle:eval":"true","DigitGrouping":"","DigitGroupingStandardText:eval":"true","DigitGroupingExText:eval":"true","DigitGroupingDamageSprites:eval":"true","DigitGroupingGaugeSprites:eval":"true","DigitGroupingLocale:str":"en-US","PlayerBenefit":"","EncounterRateMinimum:num":"10","EscapeAlways:eval":"true","ImprovedAccuracySystem:eval":"true","AccuracyBoost:eval":"true","LevelUpFullHp:eval":"true","LevelUpFullMp:eval":"true","Pictures":"","AntiZoomPictures:eval":"true","PictureContainers":"","DetachBattlePictureContainer:eval":"false","DetachMapPictureContainer:eval":"false","Misc":"","AnimationMirrorOffset:eval":"false","AutoStretch:str":"default","FontShadows:eval":"false","FontSmoothing:eval":"true","FontWidthFix:eval":"true","KeyItemProtect:eval":"true","MapNameTextCode:eval":"true","ModernControls:eval":"true","MvAnimationRate:num":"4","NewGameCommonEventAll:num":"0","NoTileShadows:eval":"false","PixelateImageRendering:eval":"false","RequireFocus:eval":"false","ShortcutScripts:eval":"true","SmartEventCollisionPriority:eval":"true","SubfolderParse:eval":"true"}
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
 * Some battle systems REQUIRE their specific plugins!
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
 * @param ControllerButtons:arraystruct
 * @text Controller Button Assist
 * @parent ButtonAssist:struct
 * @type struct<ControllerButtons>[]
 * @desc Make different icons appear for the Button Assist window when using different controllers.
 * @default []
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
 * @default {"Maps":"","AutoScrollLockX:eval":"true","AutoScrollLockY:eval":"true","DisplayLockX:num":"0.15625","DisplayLockY:num":"0.00000","Troops":"","RepositionActors:eval":"true","RepositionEnemies:eval":"true","RepositionEnemies130:eval":"false"}
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
 * @default ["{\"FunctionName:str\":\"Example\",\"CodeJS:json\":\"\\\"// Insert this as a function anywhere you can input code\\\\n// such as Script Calls or Conditional Branch Scripts.\\\\n\\\\n// Process Code\\\\nreturn 'Example';\\\"\"}","{\"FunctionName:str\":\"Bad  Code  Name\",\"CodeJS:json\":\"\\\"// If a function name has spaces in them, the spaces will\\\\n// be removed. \\\\\\\"Bad  Code  Name\\\\\\\" becomes \\\\\\\"BadeCodeName\\\\\\\".\\\\n\\\\n// Process Code\\\\nOhNoItsBadCode()\\\\n\\\\n// If a function has bad code, a fail safe will catch the\\\\n// error and display it in the console.\\\"\"}","{\"FunctionName:str\":\"RandomNumber\",\"CodeJS:json\":\"\\\"// This generates a random number from 0 to itself.\\\\n// Example: RandomNumber(10)\\\\n\\\\n// Process Code\\\\nconst number = (arguments[0] || 0) + 1;\\\\nreturn Math.floor(number * Math.random());\\\"\"}","{\"FunctionName:str\":\"RandomBetween\",\"CodeJS:json\":\"\\\"// This generates a random number between two arguments.\\\\n// Example: RandomBetween(5, 10)\\\\n\\\\n// Process Code\\\\nlet min = Math.min(arguments[0] || 0, arguments[1] || 0);\\\\nlet max = Math.max(arguments[0] || 0, arguments[1] || 0);\\\\nreturn Math.floor(Math.random() * (max - min + 1) + min);\\\"\"}","{\"FunctionName:str\":\"RandomFrom\",\"CodeJS:json\":\"\\\"// Selects a number from the list of inserted numbers.\\\\n// Example: RandomFrom(5, 10, 15, 20)\\\\n\\\\n// Process Code\\\\nreturn arguments[Math.randomInt(arguments.length)];\\\"\"}"]
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
 * @param ShiftR_Toggle:eval
 * @text Shift+R: Recover All
 * @parent BattleTest
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc For Play Test only! During battle, pressing SHIFT + R will refill the whole party's HP and MP and status.
 * @default true
 *
 * @param ShiftT_Toggle:eval
 * @text Shift+T: Full TP
 * @parent BattleTest
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc For Play Test only! During battle, pressing SHIFT + T will refill the whole party's TP.
 * @default true
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
 * @param Pictures
 * @text Picture-Related
 *
 * @param AntiZoomPictures:eval
 * @text Anti-Zoom Pictures
 * @parent Pictures
 * @type boolean
 * @on Anti-Zoom
 * @off Normal
 * @desc If on, prevents pictures from being affected by zoom.
 * @default true
 * 
 * @param PictureContainers
 * @text Picture Containers
 * @parent Pictures
 *
 * @param DetachBattlePictureContainer:eval
 * @text Detach in Battle
 * @parent PictureContainers
 * @type boolean
 * @on Detach
 * @off Normal
 * @desc If detached, picture container will be separated from
 * the spriteset while on the battle scene.
 * @default false
 *
 * @param DetachMapPictureContainer:eval
 * @text Detach in Map
 * @parent PictureContainers
 * @type boolean
 * @on Detach
 * @off Normal
 * @desc If detached, picture container will be separated from
 * the spriteset while on the map scene.
 * @default false
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
 * @param FontWidthFix:eval
 * @text Font Width Fix
 * @parent Misc
 * @type boolean
 * @on Fix
 * @off Default
 * @desc Fixes the font width issue with instant display
 * non-monospaced fonts in the Message Window.
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
 * @param MapNameTextCode:eval
 * @text Map Name Text Code
 * @parent Misc
 * @type boolean
 * @on Text Codes
 * @off Raw Text
 * @desc If on, map names will use text codes.
 * If off, only the raw map name will be used.
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
 * @param MvAnimationRate:num
 * @text MV Animation Rate
 * @parent Misc
 * @min 1
 * @max 10
 * @desc Adjusts the rate at which MV animations play.
 * Default: 4. Lower for faster. Higher for slower.
 * @default 4
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
 * @param ShortcutScripts:eval
 * @text Shortcut Scripts
 * @parent Misc
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables shortcut-based scripts.
 * View the helpfile for more information.
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
 * @param SubfolderParse:eval
 * @text Subfolder Name Purge
 * @parent Misc
 * @type boolean
 * @on Purge Subfolders Names
 * @off Don't Purge Name
 * @desc Purge subfolder name from Plugin Parameters when reading
 * data to let Plugin Commands work properly.
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
 * @param Finish:str
 * @text Finish Entry
 * @parent ButtonAssist
 * @desc Text used to describe finish entry.
 * @default Finish
 * 
 * @param PageChange:str
 * @text Page Change
 * @parent ButtonAssist
 * @desc Text used to describe character page changing.
 * @default Page
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
 * @param BlurStrength:num
 * @text Blur Strength
 * @desc Strength used for menu background snapshots.
 * Default: 8. Higher is stronger. Lower is weaker.
 * @default 8
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
 * @param SplitEscape:eval
 * @text Split "Escape"
 * @parent General
 * @type boolean
 * @on Split
 * @off Don't
 * @desc "Split" makes separate instances of "Cancel" and "Menu".
 * "Don't" will consolidate both into "Escape".
 * @default false
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
 * Controller Buttons Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ControllerButtons:
 *
 * @param ID
 * @text ID Information
 *
 * @param Name:str
 * @text Controller ID Name
 * @parent ID
 * @desc Exact string used for this controller ID. Plugin Command
 * "Debug: Current Controller ID" for ID help.
 * @default Untitled
 *
 * @param Match:str
 * @text Similarity Match
 * @parent ID
 * @desc Similar text used for this controller ID. Plugin Command
 * "Debug: Current Controller ID" for ID help.
 * @default Untitled
 * 
 * @param Directions
 *
 * @param up:str
 * @text Up
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param left:str
 * @text Left
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param right:str
 * @text Right
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param down:str
 * @text Down
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 * 
 * @param Actions
 *
 * @param ok:str
 * @text OK
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param cancel:str
 * @text Cancel
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param menu:str
 * @text Menu
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param shift:str
 * @text Shift
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param pageup:str
 * @text Page Up
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param pagedown:str
 * @text Page Down
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
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
 * @param ShowActorLevel:eval
 * @text Show Actor Level?
 * @parent BasicParameters
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show the actor level when displaying actors?
 * Affects for most windows in-game.
 * @default true
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
 * Default: 36. Avoid using odd numbers.
 * @default 36
 *
 * @param ItemPadding:num
 * @text Item Padding
 * @parent WindowDefaults
 * @desc Default line padding used for standard windows.
 * Default: 8. Avoid using odd numbers.
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
 * @param ScrollBar
 * @text Scroll Bar
 *
 * @param ShowScrollBar:eval
 * @text Show Scroll Bar?
 * @parent ScrollBar
 * @type boolean
 * @on Show Scroll Bar
 * @off Don't Show
 * @desc Show the scroll bar for scrollable windows?
 * @default true
 *
 * @param BarThickness:num
 * @text Thickness
 * @parent ScrollBar
 * @type number
 * @min 1
 * @desc How thick do you want the scroll bar to be?
 * @default 2
 *
 * @param BarOffset:num
 * @text Offset
 * @parent ScrollBar
 * @desc How much do you want to offset the scroll bar by?
 * @default +2
 *
 * @param BarBodyColor:str
 * @text Bar Body Color
 * @parent ScrollBar
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param OffBarColor:str
 * @text Off Bar Color
 * @parent ScrollBar
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 7
 *
 * @param OffBarOpacity:num
 * @text Off Bar Opacity
 * @parent ScrollBar
 * @type number
 * @min 1
 * @max 255
 * @desc What opacity value do you want the off bar opacity
 * to be? Use a number between 0 and 255.
 * @default 128
 * 
 * @param SelectableItems
 * @text Selectable Items
 *
 * @param ShowItemBackground:eval
 * @text Show Background?
 * @parent SelectableItems
 * @type boolean
 * @on Show Backgrounds
 * @off No Backgrounds
 * @desc Selectable menu items have dark boxes behind them. Show them?
 * @default true
 *
 * @param ItemHeight:num
 * @text Item Height Padding
 * @parent SelectableItems
 * @desc Default padding for selectable items.
 * Default: 8. Avoid using odd numbers.
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
 * @param Maps
 * 
 * @param AutoScrollLockX:eval
 * @text Scroll Lock Small X?
 * @parent Maps
 * @type boolean
 * @on Auto-Lock
 * @off Keep As Is
 * @desc Automatically scroll lock X scrolling if the map is too small?
 * @default true
 * 
 * @param AutoScrollLockY:eval
 * @text Scroll Lock Small Y?
 * @parent Maps
 * @type boolean
 * @on Auto-Lock
 * @off Keep As Is
 * @desc Automatically scroll lock Y scrolling if the map is too small?
 * @default true
 * 
 * @param DisplayLockX:num
 * @text Locked Display X?
 * @parent Maps
 * @desc What display X value do you want for auto-scroll locked
 * maps? Use a number between 0 and 1 for best results.
 * @default 0.15625
 * 
 * @param DisplayLockY:num
 * @text Locked Display Y?
 * @parent Maps
 * @desc What display Y value do you want for auto-scroll locked
 * maps? Use a number between 0 and 1 for best results.
 * @default 0.00000
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

const _0x29d580=_0x4307;(function(_0x169625,_0x1cd30f){const _0x5dd99e=_0x4307,_0x10c451=_0x169625();while(!![]){try{const _0x1d9152=-parseInt(_0x5dd99e(0x96e))/0x1*(-parseInt(_0x5dd99e(0x80a))/0x2)+-parseInt(_0x5dd99e(0x268))/0x3*(-parseInt(_0x5dd99e(0x3cf))/0x4)+parseInt(_0x5dd99e(0x3f9))/0x5*(-parseInt(_0x5dd99e(0x9c2))/0x6)+-parseInt(_0x5dd99e(0x8c4))/0x7*(-parseInt(_0x5dd99e(0x8e3))/0x8)+-parseInt(_0x5dd99e(0x73c))/0x9*(parseInt(_0x5dd99e(0x83c))/0xa)+-parseInt(_0x5dd99e(0x532))/0xb+-parseInt(_0x5dd99e(0x2e1))/0xc*(parseInt(_0x5dd99e(0x187))/0xd);if(_0x1d9152===_0x1cd30f)break;else _0x10c451['push'](_0x10c451['shift']());}catch(_0xa01a48){_0x10c451['push'](_0x10c451['shift']());}}}(_0x149d,0x3831d));var label=_0x29d580(0x191),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x29d580(0x6cf)](function(_0x675251){const _0x2c727e=_0x29d580;return _0x675251[_0x2c727e(0x537)]&&_0x675251[_0x2c727e(0x2bb)][_0x2c727e(0x480)]('['+label+']');})[0x0];function _0x4307(_0x3920f3,_0x41c666){const _0x149d6b=_0x149d();return _0x4307=function(_0x4307cf,_0x50c8bc){_0x4307cf=_0x4307cf-0x15e;let _0x4cb543=_0x149d6b[_0x4307cf];return _0x4cb543;},_0x4307(_0x3920f3,_0x41c666);}VisuMZ[label][_0x29d580(0xa48)]=VisuMZ[label][_0x29d580(0xa48)]||{},VisuMZ[_0x29d580(0x9cc)]=function(_0x2e16ec,_0x10d68f){const _0x3e92c4=_0x29d580;for(const _0x2af3fb in _0x10d68f){if(_0x3e92c4(0x1f4)===_0x3e92c4(0x1f4)){if(_0x2af3fb[_0x3e92c4(0x663)](/(.*):(.*)/i)){const _0x2e24d2=String(RegExp['$1']),_0x44981e=String(RegExp['$2'])[_0x3e92c4(0x8bb)]()[_0x3e92c4(0x894)]();let _0x5f0c5a,_0x1e5917,_0xa08c4d;switch(_0x44981e){case'NUM':_0x5f0c5a=_0x10d68f[_0x2af3fb]!==''?Number(_0x10d68f[_0x2af3fb]):0x0;break;case _0x3e92c4(0x217):_0x1e5917=_0x10d68f[_0x2af3fb]!==''?JSON[_0x3e92c4(0x3e8)](_0x10d68f[_0x2af3fb]):[],_0x5f0c5a=_0x1e5917[_0x3e92c4(0x4d2)](_0x566965=>Number(_0x566965));break;case'EVAL':_0x5f0c5a=_0x10d68f[_0x2af3fb]!==''?eval(_0x10d68f[_0x2af3fb]):null;break;case _0x3e92c4(0x8a6):_0x1e5917=_0x10d68f[_0x2af3fb]!==''?JSON['parse'](_0x10d68f[_0x2af3fb]):[],_0x5f0c5a=_0x1e5917[_0x3e92c4(0x4d2)](_0x3989e5=>eval(_0x3989e5));break;case'JSON':_0x5f0c5a=_0x10d68f[_0x2af3fb]!==''?JSON[_0x3e92c4(0x3e8)](_0x10d68f[_0x2af3fb]):'';break;case _0x3e92c4(0x39a):_0x1e5917=_0x10d68f[_0x2af3fb]!==''?JSON[_0x3e92c4(0x3e8)](_0x10d68f[_0x2af3fb]):[],_0x5f0c5a=_0x1e5917[_0x3e92c4(0x4d2)](_0x298d12=>JSON[_0x3e92c4(0x3e8)](_0x298d12));break;case _0x3e92c4(0x164):_0x5f0c5a=_0x10d68f[_0x2af3fb]!==''?new Function(JSON[_0x3e92c4(0x3e8)](_0x10d68f[_0x2af3fb])):new Function(_0x3e92c4(0x6b3));break;case _0x3e92c4(0x768):_0x1e5917=_0x10d68f[_0x2af3fb]!==''?JSON['parse'](_0x10d68f[_0x2af3fb]):[],_0x5f0c5a=_0x1e5917[_0x3e92c4(0x4d2)](_0x58d702=>new Function(JSON['parse'](_0x58d702)));break;case _0x3e92c4(0xa3d):_0x5f0c5a=_0x10d68f[_0x2af3fb]!==''?String(_0x10d68f[_0x2af3fb]):'';break;case _0x3e92c4(0x338):_0x1e5917=_0x10d68f[_0x2af3fb]!==''?JSON['parse'](_0x10d68f[_0x2af3fb]):[],_0x5f0c5a=_0x1e5917[_0x3e92c4(0x4d2)](_0x3f4bd2=>String(_0x3f4bd2));break;case _0x3e92c4(0x16d):_0xa08c4d=_0x10d68f[_0x2af3fb]!==''?JSON[_0x3e92c4(0x3e8)](_0x10d68f[_0x2af3fb]):{},_0x2e16ec[_0x2e24d2]={},VisuMZ['ConvertParams'](_0x2e16ec[_0x2e24d2],_0xa08c4d);continue;case _0x3e92c4(0x6b4):_0x1e5917=_0x10d68f[_0x2af3fb]!==''?JSON[_0x3e92c4(0x3e8)](_0x10d68f[_0x2af3fb]):[],_0x5f0c5a=_0x1e5917['map'](_0x4e25c9=>VisuMZ['ConvertParams']({},JSON[_0x3e92c4(0x3e8)](_0x4e25c9)));break;default:continue;}_0x2e16ec[_0x2e24d2]=_0x5f0c5a;}}else return this[_0x3e92c4(0x8fb)]?this['_commandWindow'][_0x3e92c4(0x6d6)]():_0x4a5915[_0x3e92c4(0x191)][_0x3e92c4(0xa48)][_0x3e92c4(0x495)]['length'];}return _0x2e16ec;},VisuMZ[_0x29d580(0x191)][_0x29d580(0x600)]=SceneManager[_0x29d580(0x79e)],SceneManager[_0x29d580(0x79e)]=function(){const _0x5e992b=_0x29d580;VisuMZ[_0x5e992b(0x191)][_0x5e992b(0x600)]['call'](this);if(Utils[_0x5e992b(0x7a9)]>='1.4.4'){if('mhTNl'!==_0x5e992b(0x231)){if(typeof nw===_0x5e992b(0x323))nw[_0x5e992b(0x68e)]['quit']();}else _0x3dae51['CoreEngine'][_0x5e992b(0xa48)][_0x5e992b(0x636)][_0x5e992b(0x1a9)]['drawGameSubtitle']['call'](this);}},(_0x15fa9d=>{const _0x11144b=_0x29d580,_0xb14e33=_0x15fa9d['name'];for(const _0x433414 of dependencies){if(!Imported[_0x433414]){alert(_0x11144b(0x37b)[_0x11144b(0x7d6)](_0xb14e33,_0x433414)),SceneManager['exit']();break;}}const _0x3b765b=_0x15fa9d['description'];if(_0x3b765b['match'](/\[Version[ ](.*?)\]/i)){if(_0x11144b(0x293)!==_0x11144b(0x293)){const _0xe402ce=_0x11144b(0x192);this[_0x11144b(0x73b)]=this[_0x11144b(0x73b)]||{};if(this[_0x11144b(0x73b)][_0xe402ce])return this[_0x11144b(0x73b)][_0xe402ce];const _0x3abb12=_0x10a82d[_0x11144b(0x191)][_0x11144b(0xa48)][_0x11144b(0x7a1)][_0x11144b(0x89a)];return this['getColorDataFromPluginParameters'](_0xe402ce,_0x3abb12);}else{const _0x4f3f60=Number(RegExp['$1']);_0x4f3f60!==VisuMZ[label][_0x11144b(0x8a8)]&&(alert(_0x11144b(0x7f2)[_0x11144b(0x7d6)](_0xb14e33,_0x4f3f60)),SceneManager[_0x11144b(0x79e)]());}}if(_0x3b765b[_0x11144b(0x663)](/\[Tier[ ](\d+)\]/i)){if(_0x11144b(0x98b)!==_0x11144b(0x43e)){const _0x32b5ba=Number(RegExp['$1']);_0x32b5ba<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x11144b(0x7d6)](_0xb14e33,_0x32b5ba,tier)),SceneManager['exit']()):tier=Math[_0x11144b(0x55d)](_0x32b5ba,tier);}else{var _0x1fb078=_0x593e60-1.5/2.75;return 7.5625*_0x1fb078*_0x1fb078+0.75;}}VisuMZ[_0x11144b(0x9cc)](VisuMZ[label][_0x11144b(0xa48)],_0x15fa9d[_0x11144b(0x6cc)]);})(pluginData),((()=>{const _0x4aa7b9=_0x29d580;if(VisuMZ[_0x4aa7b9(0x191)][_0x4aa7b9(0xa48)]['QoL'][_0x4aa7b9(0x30a)]??!![])for(const _0x2b5823 in $plugins){const _0x26cf01=$plugins[_0x2b5823];if(_0x26cf01[_0x4aa7b9(0xa21)][_0x4aa7b9(0x663)](/(.*)\/(.*)/i)){if(_0x4aa7b9(0x33e)===_0x4aa7b9(0x5e6))return _0x5d189e[_0x4aa7b9(0x1be)]()>=0x1;else _0x26cf01[_0x4aa7b9(0xa21)]=String(RegExp['$2'][_0x4aa7b9(0x894)]());}}})()),PluginManager[_0x29d580(0x4d1)](pluginData['name'],_0x29d580(0x430),_0x31ec8f=>{const _0x2b7bd1=_0x29d580;if(!SceneManager[_0x2b7bd1(0x3df)])return;if(!SceneManager[_0x2b7bd1(0x3df)][_0x2b7bd1(0x4c0)])return;VisuMZ['ConvertParams'](_0x31ec8f,_0x31ec8f);const _0x36109d=Math[_0x2b7bd1(0x673)](_0x31ec8f[_0x2b7bd1(0x22e)]),_0x3b88cd=Math[_0x2b7bd1(0x673)](_0x31ec8f[_0x2b7bd1(0x82e)]);$gameTemp['requestPointAnimation'](_0x36109d,_0x3b88cd,_0x31ec8f[_0x2b7bd1(0x683)],_0x31ec8f[_0x2b7bd1(0x5f2)],_0x31ec8f[_0x2b7bd1(0x633)]);}),PluginManager[_0x29d580(0x4d1)](pluginData['name'],'AudioChangeBgmVolume',_0x9be5b4=>{const _0xd6c279=_0x29d580;VisuMZ[_0xd6c279(0x9cc)](_0x9be5b4,_0x9be5b4);const _0x41d091=Math[_0xd6c279(0x673)](_0x9be5b4[_0xd6c279(0x2c8)])['clamp'](0x0,0x64),_0x21de64=AudioManager['_currentBgm'];if(_0x21de64){if(_0xd6c279(0x6f1)===_0xd6c279(0x824))return this[_0xd6c279(0x360)]()&&this[_0xd6c279(0xa0c)]<this[_0xd6c279(0x940)]*_0x1f1742[_0xd6c279(0x191)]['Settings']['Param']['CrisisRate'];else _0x21de64[_0xd6c279(0x2c8)]=_0x41d091,_0x21de64[_0xd6c279(0x404)]=AudioManager[_0xd6c279(0x514)]['seek'](),AudioManager[_0xd6c279(0x27e)](_0x21de64),AudioManager[_0xd6c279(0x9f4)](_0x21de64,_0x21de64[_0xd6c279(0x404)]),AudioManager[_0xd6c279(0x514)][_0xd6c279(0x5d1)](_0x21de64['pos']);}}),PluginManager[_0x29d580(0x4d1)](pluginData[_0x29d580(0xa21)],'AudioChangeBgmPitch',_0x155a64=>{const _0x43450b=_0x29d580;VisuMZ[_0x43450b(0x9cc)](_0x155a64,_0x155a64);const _0x59f236=Math[_0x43450b(0x673)](_0x155a64['pitch'])[_0x43450b(0x8ff)](0x32,0x96),_0x99ddce=AudioManager[_0x43450b(0x4ba)];if(_0x99ddce){if(_0x43450b(0x81f)!=='DRwoi')_0x99ddce['pitch']=_0x59f236,_0x99ddce['pos']=AudioManager[_0x43450b(0x514)][_0x43450b(0x2bd)](),AudioManager['updateBgmParameters'](_0x99ddce),AudioManager['playBgm'](_0x99ddce,_0x99ddce[_0x43450b(0x404)]),AudioManager[_0x43450b(0x514)]['_startPlaying'](_0x99ddce[_0x43450b(0x404)]);else{if(_0x46a084[_0x43450b(0x191)][_0x43450b(0xa48)]['UI'][_0x43450b(0x1ff)]){const _0x22742e=_0x13093a['width']-_0x38fa9e[_0x43450b(0x686)]-_0x58bb60[_0x43450b(0x191)][_0x43450b(0xa48)]['UI'][_0x43450b(0x66e)]*0x2,_0x1325f6=_0x473e3d[_0x43450b(0x356)]['blockWidth'][_0x43450b(0x84c)](this)*0x4;if(_0x22742e>=_0x1325f6)_0x3234d4[_0x43450b(0x353)](!![]);}}}}),PluginManager['registerCommand'](pluginData['name'],_0x29d580(0x9da),_0x226493=>{const _0x578029=_0x29d580;VisuMZ[_0x578029(0x9cc)](_0x226493,_0x226493);const _0x6f6550=Math[_0x578029(0x673)](_0x226493[_0x578029(0x171)])[_0x578029(0x8ff)](-0x64,0x64),_0x483793=AudioManager['_currentBgm'];_0x483793&&(_0x483793[_0x578029(0x171)]=_0x6f6550,_0x483793[_0x578029(0x404)]=AudioManager['_bgmBuffer'][_0x578029(0x2bd)](),AudioManager[_0x578029(0x27e)](_0x483793),AudioManager[_0x578029(0x9f4)](_0x483793,_0x483793[_0x578029(0x404)]),AudioManager['_bgmBuffer']['_startPlaying'](_0x483793['pos']));}),PluginManager[_0x29d580(0x4d1)](pluginData[_0x29d580(0xa21)],_0x29d580(0x2c3),_0x3a7e5c=>{const _0x37748d=_0x29d580;VisuMZ[_0x37748d(0x9cc)](_0x3a7e5c,_0x3a7e5c);const _0x5aa476=Math['round'](_0x3a7e5c[_0x37748d(0x2c8)])['clamp'](0x0,0x64),_0xf4a3dd=AudioManager[_0x37748d(0xa5a)];_0xf4a3dd&&(_0xf4a3dd[_0x37748d(0x2c8)]=_0x5aa476,_0xf4a3dd[_0x37748d(0x404)]=AudioManager[_0x37748d(0x41b)]['seek'](),AudioManager[_0x37748d(0x593)](_0xf4a3dd),AudioManager[_0x37748d(0x9db)](_0xf4a3dd,_0xf4a3dd['pos']),AudioManager[_0x37748d(0x41b)][_0x37748d(0x5d1)](_0xf4a3dd[_0x37748d(0x404)]));}),PluginManager['registerCommand'](pluginData[_0x29d580(0xa21)],_0x29d580(0x463),_0x46b15b=>{const _0x246af9=_0x29d580;VisuMZ['ConvertParams'](_0x46b15b,_0x46b15b);const _0x33c707=Math[_0x246af9(0x673)](_0x46b15b['pitch'])[_0x246af9(0x8ff)](0x32,0x96),_0x5c1bc1=AudioManager[_0x246af9(0xa5a)];_0x5c1bc1&&(_0x5c1bc1[_0x246af9(0x321)]=_0x33c707,_0x5c1bc1[_0x246af9(0x404)]=AudioManager['_bgsBuffer'][_0x246af9(0x2bd)](),AudioManager[_0x246af9(0x593)](_0x5c1bc1),AudioManager[_0x246af9(0x9db)](_0x5c1bc1,_0x5c1bc1[_0x246af9(0x404)]),AudioManager[_0x246af9(0x41b)][_0x246af9(0x5d1)](_0x5c1bc1[_0x246af9(0x404)]));}),PluginManager[_0x29d580(0x4d1)](pluginData['name'],'AudioChangeBgsPan',_0x346d1e=>{const _0x35cf48=_0x29d580;VisuMZ[_0x35cf48(0x9cc)](_0x346d1e,_0x346d1e);const _0x472111=Math[_0x35cf48(0x673)](_0x346d1e['pan'])['clamp'](-0x64,0x64),_0x3ec471=AudioManager[_0x35cf48(0xa5a)];_0x3ec471&&('PBQIH'==='PBQIH'?(_0x3ec471[_0x35cf48(0x171)]=_0x472111,_0x3ec471['pos']=AudioManager[_0x35cf48(0x41b)][_0x35cf48(0x2bd)](),AudioManager['updateBgsParameters'](_0x3ec471),AudioManager[_0x35cf48(0x9db)](_0x3ec471,_0x3ec471[_0x35cf48(0x404)]),AudioManager[_0x35cf48(0x41b)][_0x35cf48(0x5d1)](_0x3ec471[_0x35cf48(0x404)])):(_0x74df18[_0x35cf48(0x8d9)][0x23]=_0x35cf48(0x82c),_0x218d7c['keyMapper'][0x24]=_0x35cf48(0x905)));}),PluginManager[_0x29d580(0x4d1)](pluginData[_0x29d580(0xa21)],_0x29d580(0x1b4),_0x15ec1e=>{const _0x3a547a=_0x29d580;if(!$gameTemp[_0x3a547a(0x56c)]())return;const _0x128e36=Input[_0x3a547a(0x8f9)]();navigator[_0x3a547a(0x525)]&&navigator[_0x3a547a(0x525)][_0x3a547a(0x839)](_0x128e36);}),PluginManager[_0x29d580(0x4d1)](pluginData['name'],'ExportAllMapText',_0x1093e8=>{const _0x3c6394=_0x29d580;if(!$gameTemp[_0x3c6394(0x56c)]())return;if(!Utils[_0x3c6394(0xa34)]())return;SceneManager[_0x3c6394(0x3df)]['_active']=![],VisuMZ[_0x3c6394(0x191)][_0x3c6394(0x9d6)]();}),PluginManager['registerCommand'](pluginData[_0x29d580(0xa21)],'ExportAllTroopText',_0x36286c=>{const _0x477414=_0x29d580;if(!$gameTemp['isPlaytest']())return;if(!Utils['isNwjs']())return;SceneManager['_scene']['_active']=![],VisuMZ[_0x477414(0x191)][_0x477414(0x6f4)]();}),PluginManager[_0x29d580(0x4d1)](pluginData['name'],'ExportCurMapText',_0x5d18de=>{const _0xb882cc=_0x29d580;if(!$gameTemp[_0xb882cc(0x56c)]())return;if(!Utils['isNwjs']())return;if(!$gameMap)return;if($gameMap[_0xb882cc(0x59d)]()<=0x0)return;VisuMZ[_0xb882cc(0x9cc)](_0x5d18de,_0x5d18de);const _0x102b03='Map%1'[_0xb882cc(0x7d6)]($gameMap['mapId']()[_0xb882cc(0x237)](0x3)),_0x5dca76=VisuMZ[_0xb882cc(0x191)]['ExtractStrFromMap']($gameMap[_0xb882cc(0x59d)]());VisuMZ[_0xb882cc(0x191)][_0xb882cc(0xa09)](_0x5dca76,_0x102b03,!![]);}),PluginManager[_0x29d580(0x4d1)](pluginData[_0x29d580(0xa21)],_0x29d580(0x4bf),_0x2b0c63=>{const _0x51a783=_0x29d580;if(!$gameTemp[_0x51a783(0x56c)]())return;if(!Utils[_0x51a783(0xa34)]())return;if(!$gameParty[_0x51a783(0x9f5)]())return;VisuMZ[_0x51a783(0x9cc)](_0x2b0c63,_0x2b0c63);const _0x21ae23='Troop%1'[_0x51a783(0x7d6)]($gameTroop[_0x51a783(0x93a)][_0x51a783(0x237)](0x4)),_0x35ab97=VisuMZ[_0x51a783(0x191)][_0x51a783(0x1f8)]($gameTroop['_troopId']);VisuMZ[_0x51a783(0x191)][_0x51a783(0xa09)](_0x35ab97,_0x21ae23,!![]);}),VisuMZ['CoreEngine'][_0x29d580(0xa09)]=function(_0x3dc076,_0x248e29,_0x4230b3){const _0x2060c1=_0x29d580,_0x33603d=require('fs');let _0x217e82=_0x2060c1(0x205)[_0x2060c1(0x7d6)](_0x248e29||'0');_0x33603d[_0x2060c1(0x1b8)](_0x217e82,_0x3dc076,_0x261174=>{const _0x52074b=_0x2060c1;if(_0x261174)throw err;else{if(_0x4230b3){if(_0x52074b(0x925)!==_0x52074b(0x925)){if(this[_0x52074b(0x31e)]()[_0x52074b(0x97b)]&&_0x24f4e7[_0x52074b(0x6fc)]()===0x1){this[_0x52074b(0x799)]=this[_0x52074b(0x31e)]()[_0x52074b(0x2dd)];return;}_0x13d077[_0x52074b(0x191)][_0x52074b(0x2a6)][_0x52074b(0x84c)](this,_0x41d52d);}else alert('Saved\x20file\x20as\x20%1\x20in\x20project\x20folder.'[_0x52074b(0x7d6)](_0x217e82));}}});},VisuMZ['CoreEngine']['ExportStrFromAllMaps']=function(){const _0x2581f9=_0x29d580,_0x123b4a=[];for(const _0x122e47 of $dataMapInfos){if(!_0x122e47)continue;_0x123b4a[_0x2581f9(0x979)](_0x122e47['id']);}const _0x12ecc1=_0x123b4a[_0x2581f9(0x743)]*0x64+Math[_0x2581f9(0x410)](0x64);alert('Export\x20Map\x20Text\x20operation\x20will\x20finish\x20in\x20%1\x20ms(s)'[_0x2581f9(0x7d6)](_0x12ecc1)),this[_0x2581f9(0x183)]=[],this[_0x2581f9(0x8cb)]=$dataMap;for(const _0x202c8f of _0x123b4a){VisuMZ[_0x2581f9(0x191)][_0x2581f9(0x8db)](_0x202c8f);}setTimeout(VisuMZ[_0x2581f9(0x191)][_0x2581f9(0x55c)]['bind'](this),_0x12ecc1);},VisuMZ['CoreEngine'][_0x29d580(0x8db)]=function(_0x51d393){const _0x3c7453=_0x29d580,_0x3b1044=_0x3c7453(0x586)[_0x3c7453(0x7d6)](_0x51d393['padZero'](0x3)),_0x87b80c=new XMLHttpRequest(),_0x1f4fa6='data/'+_0x3b1044;_0x87b80c['open']('GET',_0x1f4fa6),_0x87b80c[_0x3c7453(0x35b)](_0x3c7453(0x4b4)),_0x87b80c['onload']=()=>this[_0x3c7453(0x879)](_0x87b80c,_0x51d393,_0x3b1044,_0x1f4fa6),_0x87b80c[_0x3c7453(0x993)]=()=>DataManager['onXhrError']('$dataMap',_0x3b1044,_0x1f4fa6),_0x87b80c['send']();},VisuMZ[_0x29d580(0x191)][_0x29d580(0x879)]=function(_0x235938,_0x59f083,_0x49e667,_0x5af133){const _0x975952=_0x29d580;$dataMap=JSON[_0x975952(0x3e8)](_0x235938[_0x975952(0x7c8)]),DataManager[_0x975952(0x333)]($dataMap),this[_0x975952(0x183)][_0x59f083]=VisuMZ[_0x975952(0x191)][_0x975952(0x9bf)](_0x59f083),$dataMap=this[_0x975952(0x8cb)];},VisuMZ['CoreEngine'][_0x29d580(0x55c)]=function(){const _0x37b8a4=_0x29d580,_0xda2c60=_0x37b8a4(0x2ae);this[_0x37b8a4(0x183)]['remove'](undefined)[_0x37b8a4(0x8b8)]('')[_0x37b8a4(0x8b8)](null);const _0x35a2f0=this[_0x37b8a4(0x183)][_0x37b8a4(0x3e5)]('\x0a\x0a\x0a\x0a\x0a')[_0x37b8a4(0x894)]();VisuMZ[_0x37b8a4(0x191)][_0x37b8a4(0xa09)](_0x35a2f0,_0xda2c60,!![]),SceneManager[_0x37b8a4(0x3df)]['_active']=!![];},VisuMZ[_0x29d580(0x191)][_0x29d580(0x9bf)]=function(_0x3554cf){const _0x5cc1d1=_0x29d580;if(!$dataMap)return'';let _0x48ec46='█'[_0x5cc1d1(0x2e4)](0x46)+'\x0a\x0a',_0x34ce02='═'[_0x5cc1d1(0x2e4)](0x46)+'\x0a\x0a',_0x1af309='';this['_commonEventLayers']=0x0;for(const _0x159c33 of $dataMap[_0x5cc1d1(0x6a4)]){if(_0x5cc1d1(0x3ee)===_0x5cc1d1(0x8ce))return _0x5df580[_0x5cc1d1(0x528)];else{if(!_0x159c33)continue;let _0x2fa3da=_0x159c33['id'],_0x32795c=_0x159c33['name'],_0x1bda53=_0x159c33[_0x5cc1d1(0x915)];for(const _0x3b4420 of _0x1bda53){if(_0x5cc1d1(0x74a)===_0x5cc1d1(0x74a)){const _0x42d582=_0x1bda53[_0x5cc1d1(0x476)](_0x3b4420)+0x1;let _0x3218db=_0x34ce02+_0x5cc1d1(0x884),_0xe8e635=VisuMZ['CoreEngine'][_0x5cc1d1(0x9cf)](_0x3b4420[_0x5cc1d1(0x947)]);if(_0xe8e635[_0x5cc1d1(0x743)]>0x0){if(_0x1af309[_0x5cc1d1(0x743)]>0x0)_0x1af309+=_0x34ce02+_0x5cc1d1(0x65b);else{const _0x3a0aa9=$dataMapInfos[_0x3554cf][_0x5cc1d1(0xa21)];_0x1af309+=_0x48ec46+'〖〖〖\x20Map\x20%1:\x20%2\x20Script\x20〗〗〗\x0a\x0a'[_0x5cc1d1(0x7d6)](_0x3554cf,_0x3a0aa9||'Unnamed')+_0x48ec46;}_0x1af309+=_0x3218db[_0x5cc1d1(0x7d6)](_0x2fa3da,_0x32795c,_0x42d582,_0xe8e635);}}else return _0x12035d(_0x139711)['toLocaleString'](_0x539625,_0x3ed41e)+',';}}}return _0x1af309[_0x5cc1d1(0x743)]>0x0&&(_0x1af309+=_0x34ce02),_0x1af309;},VisuMZ[_0x29d580(0x191)][_0x29d580(0x6f4)]=function(){const _0xbe859d=_0x29d580,_0x152a79=$dataTroops[_0xbe859d(0x743)]*0xa+Math[_0xbe859d(0x410)](0xa);alert('Export\x20Troop\x20Text\x20operation\x20will\x20finish\x20in\x20%1\x20ms(s)'[_0xbe859d(0x7d6)](_0x152a79));const _0x2ba514=[];for(const _0x499830 of $dataTroops){if(!_0x499830)continue;const _0x454992=_0x499830['id'];_0x2ba514[_0x454992]=VisuMZ['CoreEngine']['ExtractStrFromTroop'](_0x454992);}setTimeout(VisuMZ[_0xbe859d(0x191)]['exportAllTroopStrings'][_0xbe859d(0x85f)](this,_0x2ba514),_0x152a79);},VisuMZ[_0x29d580(0x191)][_0x29d580(0x1f8)]=function(_0x5091dd){const _0x4bb68b=_0x29d580;if(!$dataTroops[_0x5091dd])return'';let _0x5cd070='█'[_0x4bb68b(0x2e4)](0x46)+'\x0a\x0a',_0x5930b6='═'[_0x4bb68b(0x2e4)](0x46)+'\x0a\x0a',_0x14d055='';this[_0x4bb68b(0x7bd)]=0x0;const _0x4c4b76=$dataTroops[_0x5091dd];let _0x30bd68=_0x4c4b76[_0x4bb68b(0x915)];for(const _0x5e33c9 of _0x30bd68){const _0x47ac9e=_0x30bd68['indexOf'](_0x5e33c9)+0x1;let _0x553324=_0x5930b6+_0x4bb68b(0x6e1),_0x4d1eb1=VisuMZ[_0x4bb68b(0x191)][_0x4bb68b(0x9cf)](_0x5e33c9['list']);if(_0x4d1eb1[_0x4bb68b(0x743)]>0x0){if('TBdqV'!==_0x4bb68b(0x347))return _0x24a783[_0x4bb68b(0x356)][_0x4bb68b(0x689)][_0x4bb68b(0x84c)](this,_0x2c9fe8);else{if(_0x14d055[_0x4bb68b(0x743)]>0x0){if(_0x4bb68b(0x881)==='kwrzW'){if(_0x2993cd[_0x4bb68b(0x56c)]())_0x3d385b[_0x4bb68b(0x831)](_0x1e8b63);}else _0x14d055+=_0x5930b6+'\x0a\x0a\x0a\x0a\x0a';}else _0x4bb68b(0x166)!==_0x4bb68b(0x166)?(this[_0x4bb68b(0x5f3)]&&(_0x48eb3b=_0x3517cf[_0x4bb68b(0x4dd)](_0x53e5ec),_0x23c7f6['se']&&(_0x1ec9bd['se']['volume']=0x0)),_0x496e16[_0x4bb68b(0x191)][_0x4bb68b(0x938)][_0x4bb68b(0x84c)](this,_0xc2114e)):_0x14d055+=_0x5cd070+'〖〖〖\x20Troop\x20%1:\x20%2\x20Script\x20〗〗〗\x0a\x0a'[_0x4bb68b(0x7d6)](_0x5091dd,_0x4c4b76[_0x4bb68b(0xa21)]||'Unnamed')+_0x5cd070;_0x14d055+=_0x553324[_0x4bb68b(0x7d6)](_0x47ac9e,_0x4d1eb1);}}}return _0x14d055[_0x4bb68b(0x743)]>0x0&&(_0x4bb68b(0x9ae)!==_0x4bb68b(0x242)?_0x14d055+=_0x5930b6:(this['opacity']+=this[_0x4bb68b(0x276)]?this[_0x4bb68b(0x560)]():-0x1*this[_0x4bb68b(0x560)](),this[_0x4bb68b(0x76f)]=_0x4d2645['min'](0xc0,this[_0x4bb68b(0x76f)]))),_0x14d055;},VisuMZ[_0x29d580(0x191)][_0x29d580(0x9be)]=function(_0x272a06){const _0xc65b24=_0x29d580,_0x3c0243='AllTroops';_0x272a06['remove'](undefined)[_0xc65b24(0x8b8)]('')['remove'](null);const _0x46b94d=_0x272a06[_0xc65b24(0x3e5)](_0xc65b24(0x65b))[_0xc65b24(0x894)]();VisuMZ[_0xc65b24(0x191)][_0xc65b24(0xa09)](_0x46b94d,_0x3c0243,!![]),SceneManager[_0xc65b24(0x3df)][_0xc65b24(0x44d)]=!![];},VisuMZ[_0x29d580(0x191)][_0x29d580(0x9cf)]=function(_0x37cf28){const _0x26b158=_0x29d580;let _0x9de8c6='\x0a'+'─'[_0x26b158(0x2e4)](0x46)+'\x0a',_0x2a5dd3='\x0a'+'┄'[_0x26b158(0x2e4)](0x46)+'\x0a',_0x4298c2='';for(const _0xe5dc9b of _0x37cf28){if('aIPtF'===_0x26b158(0x38e)){if(!_0xe5dc9b)continue;if(_0xe5dc9b[_0x26b158(0x67b)]===0x65){if(_0x26b158(0x788)!==_0x26b158(0x1da))_0x4298c2+=_0x9de8c6+'\x0a',_0x4298c2+='〘Show\x20Text〙\x0a',_0xe5dc9b[_0x26b158(0x6cc)][0x4]!==''&&_0xe5dc9b[_0x26b158(0x6cc)][0x4]!==undefined&&(_0x4298c2+='【%1】\x0a'[_0x26b158(0x7d6)](_0xe5dc9b[_0x26b158(0x6cc)][0x4]));else{if(!this[_0x26b158(0x8e0)]())return;this['refresh']();}}else{if(_0xe5dc9b[_0x26b158(0x67b)]===0x191)_0x4298c2+=_0x26b158(0x5bb)[_0x26b158(0x7d6)](_0xe5dc9b[_0x26b158(0x6cc)][0x0]);else{if(_0xe5dc9b[_0x26b158(0x67b)]===0x192){if(_0x26b158(0x9c5)!==_0x26b158(0x26e))_0x4298c2+=_0x9de8c6,_0x4298c2+=_0x26b158(0x3d3)[_0x26b158(0x7d6)](_0x2a5dd3,_0xe5dc9b[_0x26b158(0x6cc)][0x0]+0x1,_0xe5dc9b[_0x26b158(0x6cc)][0x1]);else{const _0x558bd3=_0x313ff4['width']-_0x550208[_0x26b158(0x686)]-_0x3052e5[_0x26b158(0x191)][_0x26b158(0xa48)]['UI'][_0x26b158(0x66e)]*0x2,_0x54cc39=_0x45ed45['prototype'][_0x26b158(0x678)][_0x26b158(0x84c)](this)*0x4;if(_0x558bd3>=_0x54cc39)_0x18d4dc[_0x26b158(0x353)](!![]);}}else{if(_0xe5dc9b[_0x26b158(0x67b)]===0x193)_0x4298c2+=_0x9de8c6,_0x4298c2+=_0x26b158(0x7dd)[_0x26b158(0x7d6)](_0x2a5dd3);else{if(_0xe5dc9b[_0x26b158(0x67b)]===0x194)_0x4298c2+=_0x9de8c6,_0x4298c2+=_0x26b158(0xa04)[_0x26b158(0x7d6)](_0x2a5dd3);else{if(_0xe5dc9b['code']===0x69){if(_0x26b158(0x9f2)==='ECpER'){if(this[_0x26b158(0x9a7)]===_0x533acb)this[_0x26b158(0x31d)]();this[_0x26b158(0x9a7)][_0x26b158(0x346)]=this['initialBattleSystem']();}else _0x4298c2+=_0x9de8c6+'\x0a',_0x4298c2+=_0x26b158(0x2d6);}else{if(_0xe5dc9b['code']===0x6c)_0x4298c2+=_0x9de8c6+'\x0a',_0x4298c2+=_0x26b158(0x945)['format'](_0xe5dc9b['parameters'][0x0]);else{if(_0xe5dc9b[_0x26b158(0x67b)]===0x198)_0x4298c2+=_0x26b158(0x5bb)['format'](_0xe5dc9b['parameters'][0x0]);else{if(_0xe5dc9b['code']===0x75){const _0x2c0c3e=$dataCommonEvents[_0xe5dc9b[_0x26b158(0x6cc)][0x0]];if(_0x2c0c3e&&this[_0x26b158(0x7bd)]<=0xa){if(_0x26b158(0x6f3)==='KSMyf'){this[_0x26b158(0x7bd)]++;let _0x1df2d8=VisuMZ[_0x26b158(0x191)][_0x26b158(0x9cf)](_0x2c0c3e[_0x26b158(0x947)]);_0x1df2d8['length']>0x0&&(_0x4298c2+=_0x9de8c6,_0x4298c2+=_0x2a5dd3,_0x4298c2+='〘Common\x20Event\x20%1:\x20%2〙\x20Start'[_0x26b158(0x7d6)](_0x2c0c3e['id'],_0x2c0c3e[_0x26b158(0xa21)]),_0x4298c2+=_0x2a5dd3,_0x4298c2+=_0x1df2d8,_0x4298c2+=_0x2a5dd3,_0x4298c2+='〘Common\x20Event\x20%1:\x20%2〙\x20End'[_0x26b158(0x7d6)](_0x2c0c3e['id'],_0x2c0c3e[_0x26b158(0xa21)]),_0x4298c2+=_0x2a5dd3),this[_0x26b158(0x7bd)]--;}else{if(this[_0x26b158(0x22a)]===_0x26b158(0x986)&&!_0x387e31[_0x26b158(0x5db)]())return;if(_0x13eaf4[_0x26b158(0x523)]())return;_0x19d712[_0x26b158(0x191)][_0x26b158(0x989)]['call'](this,_0xf5e9fe),this[_0x26b158(0x63c)](_0x26b158(0x5ad));}}}}}}}}}}}}else _0x406a4d[_0x26b158(0x191)][_0x26b158(0x331)][_0x26b158(0x84c)](this),this[_0x26b158(0x842)]();}return _0x4298c2[_0x26b158(0x743)]>0x0&&(_0x4298c2+=_0x9de8c6),_0x4298c2;},PluginManager[_0x29d580(0x4d1)](pluginData[_0x29d580(0xa21)],_0x29d580(0x63f),_0x16228a=>{const _0xe8e708=_0x29d580;VisuMZ[_0xe8e708(0x9cc)](_0x16228a,_0x16228a);const _0x3f22e7=_0x16228a[_0xe8e708(0x49f)];VisuMZ['openURL'](_0x3f22e7);}),PluginManager['registerCommand'](pluginData[_0x29d580(0xa21)],_0x29d580(0x318),_0x223b00=>{const _0x34483b=_0x29d580;VisuMZ[_0x34483b(0x9cc)](_0x223b00,_0x223b00);const _0x3ee417=_0x223b00[_0x34483b(0x230)]||0x0;$gameParty[_0x34483b(0x76d)](_0x3ee417);}),PluginManager[_0x29d580(0x4d1)](pluginData[_0x29d580(0xa21)],'MapOnceParallel',_0x407296=>{const _0x267242=_0x29d580;if(!SceneManager['isSceneMap']())return;VisuMZ[_0x267242(0x9cc)](_0x407296,_0x407296);const _0x50b16d=_0x407296[_0x267242(0x8b1)];SceneManager[_0x267242(0x3df)][_0x267242(0x3ab)](_0x50b16d);}),PluginManager[_0x29d580(0x4d1)](pluginData[_0x29d580(0xa21)],'PictureCoordinatesMode',_0x2a1c44=>{const _0xfd8ac6=_0x29d580;if(!$gameTemp[_0xfd8ac6(0x56c)]())return;if(!Utils[_0xfd8ac6(0xa34)]())return;VisuMZ[_0xfd8ac6(0x9cc)](_0x2a1c44,_0x2a1c44);const _0x5c4b6a=_0x2a1c44['PictureID']||0x1;$gameTemp[_0xfd8ac6(0x499)]=_0x5c4b6a;}),PluginManager['registerCommand'](pluginData['name'],_0x29d580(0x5d5),_0x157f4d=>{const _0x12b33b=_0x29d580;VisuMZ[_0x12b33b(0x9cc)](_0x157f4d,_0x157f4d);const _0x7a6654=_0x157f4d[_0x12b33b(0x219)]||0x1,_0x60aa72=_0x157f4d[_0x12b33b(0x8ea)]||_0x12b33b(0x756),_0x563463=$gameScreen['picture'](_0x7a6654);if(_0x563463){if('YbUXZ'!==_0x12b33b(0x811)){const _0x46b46a=_0x21cee7[_0x19dd2c[_0x12b33b(0x6cc)][0x0]];if(_0x46b46a&&this[_0x12b33b(0x7bd)]<=0xa){this['_commonEventLayers']++;let _0x35cc85=_0x37a73a['CoreEngine'][_0x12b33b(0x9cf)](_0x46b46a['list']);_0x35cc85[_0x12b33b(0x743)]>0x0&&(_0x32c9c1+=_0x4741da,_0x5436d2+=_0xc37fb8,_0x4d269a+=_0x12b33b(0x573)[_0x12b33b(0x7d6)](_0x46b46a['id'],_0x46b46a['name']),_0x23d469+=_0x2078ee,_0xad3e9f+=_0x35cc85,_0x5b17db+=_0x36dc79,_0x1b7f8d+=_0x12b33b(0x1c6)[_0x12b33b(0x7d6)](_0x46b46a['id'],_0x46b46a['name']),_0x4dba5d+=_0x2dfe2a),this[_0x12b33b(0x7bd)]--;}}else _0x563463[_0x12b33b(0x944)](_0x60aa72);}}),PluginManager[_0x29d580(0x4d1)](pluginData[_0x29d580(0xa21)],'PictureEraseAll',_0x1d6664=>{const _0xa94515=_0x29d580;for(let _0x3cc131=0x1;_0x3cc131<=0x64;_0x3cc131++){'IGFRO'===_0xa94515(0x88b)?$gameScreen['erasePicture'](_0x3cc131):_0x50f0cf[_0xa94515(0x5f4)]&&(this[_0xa94515(0x1a3)]=_0xa94515(0x60b));}}),PluginManager[_0x29d580(0x4d1)](pluginData[_0x29d580(0xa21)],'PictureEraseRange',_0x18b8c1=>{const _0x5287e1=_0x29d580;VisuMZ[_0x5287e1(0x9cc)](_0x18b8c1,_0x18b8c1);const _0xb009f9=Math[_0x5287e1(0x6c6)](_0x18b8c1[_0x5287e1(0x3f4)],_0x18b8c1[_0x5287e1(0x7dc)]),_0x143188=Math[_0x5287e1(0x55d)](_0x18b8c1['StartID'],_0x18b8c1[_0x5287e1(0x7dc)]);for(let _0x3174c9=_0xb009f9;_0x3174c9<=_0x143188;_0x3174c9++){_0x5287e1(0x66a)===_0x5287e1(0x66a)?$gameScreen[_0x5287e1(0x3dd)](_0x3174c9):_0x45a2d0(_0x5287e1(0x598)['format'](_0x5df1d1));}}),PluginManager[_0x29d580(0x4d1)](pluginData['name'],_0x29d580(0x498),_0x2be1ac=>{const _0x175b78=_0x29d580;VisuMZ[_0x175b78(0x9cc)](_0x2be1ac,_0x2be1ac);const _0x33717a=Math[_0x175b78(0x673)](_0x2be1ac[_0x175b78(0x38a)])[_0x175b78(0x8ff)](0x1,0x64),_0x200c43=-Number(_0x2be1ac[_0x175b78(0x8c0)]||0x0),_0x130ddd=Math[_0x175b78(0x55d)](_0x2be1ac['Duration']||0x0,0x0),_0x4afdcc=_0x2be1ac['easingType']||_0x175b78(0x756),_0x59c860=_0x2be1ac[_0x175b78(0x46b)],_0x1c2215=$gameScreen[_0x175b78(0x257)](_0x33717a);if(!_0x1c2215)return;_0x1c2215[_0x175b78(0xa07)](_0x200c43,_0x130ddd,_0x4afdcc);if(_0x59c860){if('qGwlQ'===_0x175b78(0x3bf)){const _0x5d8b54=this[_0x175b78(0x88f)][_0x175b78(0x240)],_0x5179c9=this[_0x175b78(0x31b)],_0xccbdea=this[_0x175b78(0x638)],_0x38cc7d=this['padding'],_0x326a90=_0x694b8c[_0x175b78(0x2c6)](),_0x4187d7=_0x5f5297[_0x175b78(0x4ef)]();_0x5d8b54['resize'](_0x5179c9,_0xccbdea),_0x5d8b54[_0x175b78(0x4fe)](0x0,0x0,_0x5179c9,_0x38cc7d,_0x4187d7,_0x326a90,!![]),_0x5d8b54[_0x175b78(0x773)](0x0,_0x38cc7d,_0x5179c9,_0xccbdea-_0x38cc7d*0x2,_0x326a90),_0x5d8b54['gradientFillRect'](0x0,_0xccbdea-_0x38cc7d,_0x5179c9,_0x38cc7d,_0x326a90,_0x4187d7,!![]),this[_0x175b78(0x88f)][_0x175b78(0x4b6)](0x0,0x0,_0x5179c9,_0xccbdea);}else{const _0x3af3bb=$gameTemp[_0x175b78(0x7c4)]();if(_0x3af3bb)_0x3af3bb['wait'](_0x130ddd);}}}),PluginManager[_0x29d580(0x4d1)](pluginData[_0x29d580(0xa21)],'PictureRotate',_0x487a36=>{const _0xda4d83=_0x29d580;VisuMZ[_0xda4d83(0x9cc)](_0x487a36,_0x487a36);const _0xf42918=Math[_0xda4d83(0x673)](_0x487a36[_0xda4d83(0x38a)])[_0xda4d83(0x8ff)](0x1,0x64),_0x273640=-Number(_0x487a36['TargetAngle']||0x0),_0x21df71=Math[_0xda4d83(0x55d)](_0x487a36[_0xda4d83(0x295)]||0x0,0x0),_0x40091e=_0x487a36[_0xda4d83(0x8ea)]||_0xda4d83(0x756),_0x8be51=_0x487a36[_0xda4d83(0x46b)],_0x575bda=$gameScreen['picture'](_0xf42918);if(!_0x575bda)return;_0x575bda[_0xda4d83(0x775)](_0x273640,_0x21df71,_0x40091e);if(_0x8be51){const _0x465f82=$gameTemp['getLastPluginCommandInterpreter']();if(_0x465f82)_0x465f82[_0xda4d83(0x8d8)](_0x21df71);}}),PluginManager[_0x29d580(0x4d1)](pluginData[_0x29d580(0xa21)],_0x29d580(0x4ea),_0x57c231=>{const _0x45705f=_0x29d580;VisuMZ['ConvertParams'](_0x57c231,_0x57c231);const _0x3136f9=Math[_0x45705f(0x673)](_0x57c231[_0x45705f(0x38a)])[_0x45705f(0x8ff)](0x1,0x64),_0x334fe6=_0x57c231[_0x45705f(0xa48)],_0x4067eb=_0x334fe6[_0x45705f(0x985)][_0x45705f(0x8ff)](0x0,0x1),_0x5a5d3b=Math[_0x45705f(0x673)](_0x334fe6[_0x45705f(0x703)]||0x0),_0xa61b79=Math['round'](_0x334fe6['PositionY']||0x0),_0x564cf3=Math[_0x45705f(0x673)](_0x334fe6[_0x45705f(0x92e)]||0x0),_0xafbc6=Math['round'](_0x334fe6[_0x45705f(0x795)]||0x0),_0x24b10c=Math[_0x45705f(0x673)](_0x334fe6[_0x45705f(0x8b4)])['clamp'](0x0,0xff),_0x82846f=_0x334fe6[_0x45705f(0x37d)],_0x3804c7=_0x45705f(0x19e),_0x40bf97=_0x57c231['Smooth']?_0x45705f(0x2cc):'Pixelated',_0xa3585b=_0x3804c7['format'](_0x57c231[_0x45705f(0x61f)],_0x40bf97);$gameScreen[_0x45705f(0x805)](_0x3136f9,_0xa3585b,_0x4067eb,_0x5a5d3b,_0xa61b79,_0x564cf3,_0xafbc6,_0x24b10c,_0x82846f);}),PluginManager[_0x29d580(0x4d1)](pluginData['name'],_0x29d580(0x7a4),_0x42b9cf=>{const _0x21ecb1=_0x29d580;VisuMZ[_0x21ecb1(0x9cc)](_0x42b9cf,_0x42b9cf);const _0x56a863=_0x42b9cf[_0x21ecb1(0x5f5)]||_0x21ecb1(0x618),_0x2ed83d=_0x42b9cf[_0x21ecb1(0x933)]['clamp'](0x1,0x9),_0xcd401c=_0x42b9cf[_0x21ecb1(0x27a)]['clamp'](0x1,0x9),_0xfa6fdc=_0x42b9cf['Duration']||0x1,_0x4af0b9=_0x42b9cf['Wait'];$gameScreen[_0x21ecb1(0x315)](_0x56a863),$gameScreen[_0x21ecb1(0x416)](_0x2ed83d,_0xcd401c,_0xfa6fdc);if(_0x4af0b9){if(_0x21ecb1(0xa57)===_0x21ecb1(0xa57)){const _0x2ce42a=$gameTemp[_0x21ecb1(0x7c4)]();if(_0x2ce42a)_0x2ce42a[_0x21ecb1(0x8d8)](_0xfa6fdc);}else return _0x362530['layoutSettings'][_0x21ecb1(0xa25)]['call'](this);}}),PluginManager[_0x29d580(0x4d1)](pluginData['name'],_0x29d580(0x9e2),_0x142330=>{const _0x2c5162=_0x29d580;if($gameParty[_0x2c5162(0x9f5)]())return;VisuMZ['ConvertParams'](_0x142330,_0x142330);const _0x594f4a=_0x142330[_0x2c5162(0x5e5)],_0x460677=(_0x142330[_0x2c5162(0x4ca)]||0x0)/0x64;for(const _0xfab634 of _0x594f4a){const _0x22e21c=Math[_0x2c5162(0x618)]()<=_0x460677;$gameSwitches[_0x2c5162(0x575)](_0xfab634,_0x22e21c);}}),PluginManager[_0x29d580(0x4d1)](pluginData[_0x29d580(0xa21)],_0x29d580(0xa19),_0x378ac5=>{const _0x515f54=_0x29d580;if($gameParty[_0x515f54(0x9f5)]())return;VisuMZ[_0x515f54(0x9cc)](_0x378ac5,_0x378ac5);const _0x42ee0d=Math[_0x515f54(0x6c6)](_0x378ac5['StartID'],_0x378ac5[_0x515f54(0x7dc)]),_0x4b5cbc=Math[_0x515f54(0x55d)](_0x378ac5['StartID'],_0x378ac5[_0x515f54(0x7dc)]),_0x192fab=(_0x378ac5['Chance']||0x0)/0x64;for(let _0x3784d8=_0x42ee0d;_0x3784d8<=_0x4b5cbc;_0x3784d8++){const _0x3e8848=Math[_0x515f54(0x618)]()<=_0x192fab;$gameSwitches['setValue'](_0x3784d8,_0x3e8848);}}),PluginManager[_0x29d580(0x4d1)](pluginData['name'],_0x29d580(0x7f7),_0x5ba0a7=>{const _0x1c3de2=_0x29d580;if($gameParty['inBattle']())return;VisuMZ['ConvertParams'](_0x5ba0a7,_0x5ba0a7);const _0x1b01fa=_0x5ba0a7[_0x1c3de2(0x5e5)];for(const _0x1abcaa of _0x1b01fa){const _0x1c8fce=$gameSwitches[_0x1c3de2(0x230)](_0x1abcaa);$gameSwitches['setValue'](_0x1abcaa,!_0x1c8fce);}}),PluginManager[_0x29d580(0x4d1)](pluginData[_0x29d580(0xa21)],_0x29d580(0x5c9),_0x8725b8=>{const _0x573767=_0x29d580;if($gameParty[_0x573767(0x9f5)]())return;VisuMZ[_0x573767(0x9cc)](_0x8725b8,_0x8725b8);const _0x530294=Math['min'](_0x8725b8[_0x573767(0x3f4)],_0x8725b8[_0x573767(0x7dc)]),_0x470abf=Math[_0x573767(0x55d)](_0x8725b8[_0x573767(0x3f4)],_0x8725b8[_0x573767(0x7dc)]);for(let _0x16ef9f=_0x530294;_0x16ef9f<=_0x470abf;_0x16ef9f++){const _0x551850=$gameSwitches[_0x573767(0x230)](_0x16ef9f);$gameSwitches[_0x573767(0x575)](_0x16ef9f,!_0x551850);}}),PluginManager[_0x29d580(0x4d1)](pluginData[_0x29d580(0xa21)],_0x29d580(0x6c1),_0x1f1f79=>{const _0x5b1c7e=_0x29d580;VisuMZ[_0x5b1c7e(0x9cc)](_0x1f1f79,_0x1f1f79);const _0xae2fb5=_0x1f1f79['option']||0x1;$gameSystem[_0x5b1c7e(0x345)](_0xae2fb5);}),PluginManager[_0x29d580(0x4d1)](pluginData[_0x29d580(0xa21)],_0x29d580(0x2b2),_0x5c8e4e=>{const _0x505681=_0x29d580;if($gameParty[_0x505681(0x9f5)]())return;VisuMZ['ConvertParams'](_0x5c8e4e,_0x5c8e4e);const _0x2e6197=_0x5c8e4e['option'];if(_0x2e6197[_0x505681(0x663)](/Front/i))$gameSystem[_0x505681(0x248)](![]);else _0x2e6197[_0x505681(0x663)](/Side/i)?$gameSystem[_0x505681(0x248)](!![]):$gameSystem[_0x505681(0x248)](!$gameSystem[_0x505681(0x483)]());}),PluginManager[_0x29d580(0x4d1)](pluginData[_0x29d580(0xa21)],'SystemLoadAudio',_0x5497b0=>{const _0xcec9d5=_0x29d580;if($gameParty[_0xcec9d5(0x9f5)]())return;VisuMZ[_0xcec9d5(0x9cc)](_0x5497b0,_0x5497b0);const _0x191fd4=[_0xcec9d5(0x278),_0xcec9d5(0x7c2),'me','se'];for(const _0x174301 of _0x191fd4){const _0x4f1344=_0x5497b0[_0x174301],_0x13739f='%1/'[_0xcec9d5(0x7d6)](_0x174301);for(const _0x23b9a5 of _0x4f1344){AudioManager[_0xcec9d5(0x23a)](_0x13739f,_0x23b9a5);}}}),PluginManager[_0x29d580(0x4d1)](pluginData[_0x29d580(0xa21)],_0x29d580(0x414),_0x3b641c=>{const _0x148237=_0x29d580;if($gameParty[_0x148237(0x9f5)]())return;VisuMZ[_0x148237(0x9cc)](_0x3b641c,_0x3b641c);const _0x5cc812=[_0x148237(0x48a),_0x148237(0x7c0),_0x148237(0x647),_0x148237(0x7cd),'enemies','faces',_0x148237(0x3be),_0x148237(0x861),'sv_actors','sv_enemies',_0x148237(0x6bf),_0x148237(0x976),'titles1',_0x148237(0x662)];for(const _0x2a5a27 of _0x5cc812){const _0x15820d=_0x3b641c[_0x2a5a27],_0x576789=_0x148237(0x40d)[_0x148237(0x7d6)](_0x2a5a27);for(const _0x25ce82 of _0x15820d){_0x148237(0x521)===_0x148237(0x20d)?_0x4d2166[_0x148237(0x191)][_0x148237(0x88c)][_0x148237(0x84c)](this,_0x2d6e5b):ImageManager[_0x148237(0x904)](_0x576789,_0x25ce82);}}}),PluginManager[_0x29d580(0x4d1)](pluginData[_0x29d580(0xa21)],_0x29d580(0x7ff),_0xe725f6=>{const _0x6804d6=_0x29d580;if($gameParty[_0x6804d6(0x9f5)]())return;VisuMZ[_0x6804d6(0x9cc)](_0xe725f6,_0xe725f6);const _0x25041e=_0xe725f6['option']['toUpperCase']()[_0x6804d6(0x894)](),_0x2af946=VisuMZ[_0x6804d6(0x191)][_0x6804d6(0x9b2)](_0x25041e);$gameSystem[_0x6804d6(0x6df)](_0x2af946);}),VisuMZ[_0x29d580(0x191)]['CreateBattleSystemID']=function(_0x2005ef){const _0x2ef20a=_0x29d580;_0x2005ef=_0x2005ef||'DATABASE',_0x2005ef=String(_0x2005ef)[_0x2ef20a(0x8bb)]()['trim']();switch(_0x2005ef){case'DTB':return 0x0;case _0x2ef20a(0x1ab):Imported[_0x2ef20a(0x695)]&&(ConfigManager[_0x2ef20a(0x629)]=!![]);return 0x1;case _0x2ef20a(0x382):Imported[_0x2ef20a(0x695)]&&(ConfigManager[_0x2ef20a(0x629)]=![]);return 0x2;case _0x2ef20a(0x9bb):if(Imported['VisuMZ_2_BattleSystemCTB'])return _0x2ef20a(0x9bb);break;case'STB':if(Imported[_0x2ef20a(0x3e3)])return _0x2ef20a(0x4d6);break;case _0x2ef20a(0x60b):if(Imported['VisuMZ_2_BattleSystemBTB'])return'BTB';break;case _0x2ef20a(0x8f3):if(Imported[_0x2ef20a(0x7a3)]){if(_0x2ef20a(0x26b)!==_0x2ef20a(0x26b)){if(_0x197d5e['length']>0x0)_0x1f58de+=_0x10453f+_0x2ef20a(0x65b);else{const _0x482324=_0x593ba2[_0xcaec58]['name'];_0xc1d83c+=_0x2ac97a+_0x2ef20a(0xa3f)[_0x2ef20a(0x7d6)](_0x74d90b,_0x482324||'Unnamed')+_0x52088b;}_0x72129d+=_0xdad081['format'](_0x27918b,_0x8af9d1,_0x316fdb,_0x699a01);}else return _0x2ef20a(0x8f3);}break;case _0x2ef20a(0x3f5):if(Imported[_0x2ef20a(0x857)])return'OTB';break;case _0x2ef20a(0x8a0):if(Imported[_0x2ef20a(0x4a3)])return'eQZfK'===_0x2ef20a(0x3c8)?'ETB':![];break;case _0x2ef20a(0x660):if(Imported['VisuMZ_2_BattleSystemPTB']){if(_0x2ef20a(0x5d4)!==_0x2ef20a(0x5d4)){if(!this[_0x2ef20a(0x3eb)]())return;const _0x27d61c=this[_0x2ef20a(0x6d1)]();this[_0x2ef20a(0x4fd)]=new _0x23e7fb(_0x27d61c),this[_0x2ef20a(0x36c)](this[_0x2ef20a(0x4fd)]);}else return _0x2ef20a(0x660);}break;}return $dataSystem[_0x2ef20a(0x834)];},PluginManager[_0x29d580(0x4d1)](pluginData[_0x29d580(0xa21)],_0x29d580(0x277),_0x2c0c69=>{const _0x349a76=_0x29d580;VisuMZ[_0x349a76(0x9cc)](_0x2c0c69,_0x2c0c69);const _0xd21626=_0x2c0c69[_0x349a76(0x1b1)]||0x1;$gameSystem[_0x349a76(0x169)](_0xd21626);}),PluginManager[_0x29d580(0x4d1)](pluginData['name'],'VariableEvalReference',_0x490d06=>{const _0x3935fe=_0x29d580;VisuMZ[_0x3935fe(0x9cc)](_0x490d06,_0x490d06);const _0x4e5978=_0x490d06['id']||0x1,_0x3fe0d9=_0x490d06['operation'],_0x321ce5=_0x490d06['operand']||0x0;let _0x3e80a8=$gameVariables['value'](_0x4e5978)||0x0;switch(_0x3fe0d9){case'=':_0x3e80a8=_0x321ce5;break;case'+':_0x3e80a8+=_0x321ce5;break;case'-':_0x3e80a8-=_0x321ce5;break;case'*':_0x3e80a8*=_0x321ce5;break;case'/':_0x3e80a8/=_0x321ce5;break;case'%':_0x3e80a8%=_0x321ce5;break;}_0x3e80a8=_0x3e80a8||0x0,$gameVariables['setValue'](_0x4e5978,_0x3e80a8);}),PluginManager[_0x29d580(0x4d1)](pluginData['name'],_0x29d580(0x543),_0x48fb1b=>{const _0x5db10f=_0x29d580;VisuMZ[_0x5db10f(0x9cc)](_0x48fb1b,_0x48fb1b);const _0x231981=_0x48fb1b['id']()||0x1,_0x223754=_0x48fb1b['operation'],_0x53e6c7=_0x48fb1b[_0x5db10f(0x5a8)]()||0x0;let _0x5c7814=$gameVariables[_0x5db10f(0x230)](_0x231981)||0x0;switch(_0x223754){case'=':_0x5c7814=_0x53e6c7;break;case'+':_0x5c7814+=_0x53e6c7;break;case'-':_0x5c7814-=_0x53e6c7;break;case'*':_0x5c7814*=_0x53e6c7;break;case'/':_0x5c7814/=_0x53e6c7;break;case'%':_0x5c7814%=_0x53e6c7;break;}_0x5c7814=_0x5c7814||0x0,$gameVariables[_0x5db10f(0x575)](_0x231981,_0x5c7814);}),VisuMZ[_0x29d580(0x191)][_0x29d580(0x74c)]=Scene_Boot['prototype'][_0x29d580(0x468)],Scene_Boot[_0x29d580(0x356)][_0x29d580(0x468)]=function(){const _0x7a8439=_0x29d580;VisuMZ[_0x7a8439(0x191)]['Scene_Boot_onDatabaseLoaded'][_0x7a8439(0x84c)](this),this[_0x7a8439(0x8a3)](),this['process_VisuMZ_CoreEngine_Notetags'](),this[_0x7a8439(0x511)](),this[_0x7a8439(0x48b)](),this[_0x7a8439(0x341)](),this[_0x7a8439(0x49d)](),VisuMZ[_0x7a8439(0x2ad)]();},VisuMZ['CoreEngine']['RegExp']={},Scene_Boot[_0x29d580(0x356)][_0x29d580(0x8a3)]=function(){const _0x5bf800=_0x29d580,_0x55ce4e=['MAXHP',_0x5bf800(0x62e),'ATK',_0x5bf800(0x822),_0x5bf800(0x5fd),_0x5bf800(0x212),'AGI',_0x5bf800(0x2dc)],_0x2098c1=['HIT',_0x5bf800(0x4b0),_0x5bf800(0x812),_0x5bf800(0x6c9),_0x5bf800(0x320),'MRF',_0x5bf800(0x772),_0x5bf800(0x1e0),_0x5bf800(0x7cf),_0x5bf800(0x193)],_0x5d3d22=[_0x5bf800(0x4c5),_0x5bf800(0x15e),'REC',_0x5bf800(0x3f1),_0x5bf800(0x77a),_0x5bf800(0x7f6),_0x5bf800(0x1ea),'MDR',_0x5bf800(0x624),'EXR'],_0x488c52=[_0x55ce4e,_0x2098c1,_0x5d3d22],_0x540e53=['Plus',_0x5bf800(0x3b7),_0x5bf800(0x949),_0x5bf800(0x8ed),_0x5bf800(0x5d6),_0x5bf800(0x956),_0x5bf800(0xa58),_0x5bf800(0x1bf),'Flat1',_0x5bf800(0x8dd)];for(const _0x9db9f4 of _0x488c52){if(_0x5bf800(0x5cc)!==_0x5bf800(0x691)){let _0xaf5af7='';if(_0x9db9f4===_0x55ce4e)_0xaf5af7='param';if(_0x9db9f4===_0x2098c1)_0xaf5af7=_0x5bf800(0x8ca);if(_0x9db9f4===_0x5d3d22)_0xaf5af7='sparam';for(const _0x4f3f0b of _0x540e53){let _0x449c74=_0x5bf800(0x3ff)[_0x5bf800(0x7d6)](_0xaf5af7,_0x4f3f0b);VisuMZ[_0x5bf800(0x191)]['RegExp'][_0x449c74]=[],VisuMZ[_0x5bf800(0x191)][_0x5bf800(0x21f)][_0x449c74+'JS']=[];let _0x104c89='<%1\x20%2:[\x20]';if([_0x5bf800(0x3fa),_0x5bf800(0x1bf)][_0x5bf800(0x480)](_0x4f3f0b))_0x104c89+=_0x5bf800(0x999);else{if(['Plus1',_0x5bf800(0x73f)]['includes'](_0x4f3f0b))_0x104c89+=_0x5bf800(0x52c);else{if(['Plus2','Flat2'][_0x5bf800(0x480)](_0x4f3f0b))_0x5bf800(0x2fa)!==_0x5bf800(0x447)?_0x104c89+='([\x5c+\x5c-]\x5cd+\x5c.?\x5cd+)>':_0x261b99=_0x5bf800(0x244)[_0x5bf800(0x7d6)](_0x370515,_0x344c39);else{if(_0x4f3f0b===_0x5bf800(0x8ed))_0x104c89+=_0x5bf800(0x544);else{if(_0x4f3f0b===_0x5bf800(0x956)){if('aWoMx'!==_0x5bf800(0x6f7)){if(_0x1fdd0e[_0x5bf800(0x56c)]())_0x1405cb[_0x5bf800(0x831)](_0x5767d7);}else _0x104c89+='(\x5cd+)([%％])>';}else _0x4f3f0b===_0x5bf800(0xa58)&&(_0x104c89+=_0x5bf800(0x1b9));}}}}for(const _0x447cad of _0x9db9f4){let _0x103fca=_0x4f3f0b[_0x5bf800(0x1ee)](/[\d+]/g,'')[_0x5bf800(0x8bb)]();const _0x468efc=_0x104c89[_0x5bf800(0x7d6)](_0x447cad,_0x103fca);VisuMZ[_0x5bf800(0x191)][_0x5bf800(0x21f)][_0x449c74][_0x5bf800(0x979)](new RegExp(_0x468efc,'i'));const _0xa931ce=_0x5bf800(0x446)[_0x5bf800(0x7d6)](_0x447cad,_0x103fca);VisuMZ[_0x5bf800(0x191)][_0x5bf800(0x21f)][_0x449c74+'JS']['push'](new RegExp(_0xa931ce,'i'));}}}else{if(this[_0x5bf800(0x9c0)]===_0x5999dd)this[_0x5bf800(0xa23)]();return this['_anglePlus']['current']||0x0;}}},Scene_Boot['prototype']['process_VisuMZ_CoreEngine_Notetags']=function(){if(VisuMZ['ParseAllNotetags'])return;},Scene_Boot[_0x29d580(0x356)]['process_VisuMZ_CoreEngine_Settings']=function(){const _0x1f96c3=_0x29d580,_0x56e7b6=VisuMZ[_0x1f96c3(0x191)]['Settings'];_0x56e7b6[_0x1f96c3(0x53e)][_0x1f96c3(0x211)]&&VisuMZ[_0x1f96c3(0x1fb)](!![]);_0x56e7b6[_0x1f96c3(0x53e)][_0x1f96c3(0x90c)]&&(Input[_0x1f96c3(0x8d9)][0x23]=_0x1f96c3(0x82c),Input['keyMapper'][0x24]=_0x1f96c3(0x905));if(_0x56e7b6[_0x1f96c3(0x4e4)]){const _0x25f5da=_0x56e7b6[_0x1f96c3(0x4e4)];_0x25f5da[_0x1f96c3(0x2ce)]=_0x25f5da[_0x1f96c3(0x2ce)]||_0x1f96c3(0x849),_0x25f5da[_0x1f96c3(0x4d3)]=_0x25f5da[_0x1f96c3(0x4d3)]||_0x1f96c3(0x538);}if(_0x56e7b6[_0x1f96c3(0x65d)][_0x1f96c3(0x487)]){if('rMlzC'!==_0x1f96c3(0x44e))Input[_0x1f96c3(0x8d9)][0x57]='up',Input[_0x1f96c3(0x8d9)][0x41]='left',Input[_0x1f96c3(0x8d9)][0x53]=_0x1f96c3(0x819),Input['keyMapper'][0x44]=_0x1f96c3(0x74e),Input[_0x1f96c3(0x8d9)][0x45]='pagedown';else return 0x0;}_0x56e7b6[_0x1f96c3(0x65d)][_0x1f96c3(0x578)]&&(Input[_0x1f96c3(0x8d9)][0x52]=_0x1f96c3(0x482)),_0x56e7b6[_0x1f96c3(0x3ce)][_0x1f96c3(0x90d)]=_0x56e7b6['Param'][_0x1f96c3(0x90d)][_0x1f96c3(0x4d2)](_0x51548e=>_0x51548e[_0x1f96c3(0x8bb)]()['trim']()),_0x56e7b6[_0x1f96c3(0x3ce)]['ExtDisplayedParams']=_0x56e7b6[_0x1f96c3(0x3ce)][_0x1f96c3(0x86e)][_0x1f96c3(0x4d2)](_0x3c3b08=>_0x3c3b08[_0x1f96c3(0x8bb)]()['trim']()),_0x56e7b6[_0x1f96c3(0x53e)][_0x1f96c3(0x535)]=_0x56e7b6['QoL'][_0x1f96c3(0x535)]??!![],_0x56e7b6['QoL'][_0x1f96c3(0x675)]=_0x56e7b6[_0x1f96c3(0x53e)][_0x1f96c3(0x675)]??!![];},Scene_Boot[_0x29d580(0x356)][_0x29d580(0x48b)]=function(){this['process_VisuMZ_CoreEngine_jsQuickFunctions']();},Scene_Boot[_0x29d580(0x356)]['process_VisuMZ_CoreEngine_jsQuickFunctions']=function(){const _0xa4b71d=_0x29d580,_0x41be90=VisuMZ[_0xa4b71d(0x191)][_0xa4b71d(0xa48)]['jsQuickFunc'];for(const _0x417ab8 of _0x41be90){if(_0xa4b71d(0x372)===_0xa4b71d(0x372)){const _0x577549=_0x417ab8[_0xa4b71d(0x76e)][_0xa4b71d(0x1ee)](/[ ]/g,''),_0x1abcd5=_0x417ab8[_0xa4b71d(0x52d)];VisuMZ[_0xa4b71d(0x191)][_0xa4b71d(0x920)](_0x577549,_0x1abcd5);}else{var _0x4ebd9c=_0x5270cb(_0x492406['$1']);try{_0x1b0b1a+=_0x135d9e(_0x4ebd9c);}catch(_0x58c007){if(_0x335dda[_0xa4b71d(0x56c)]())_0x19e490[_0xa4b71d(0x831)](_0x58c007);}}}},VisuMZ[_0x29d580(0x191)]['createJsQuickFunction']=function(_0x45f1dd,_0x17ff3a){const _0xb60172=_0x29d580;if(!!window[_0x45f1dd]){if($gameTemp[_0xb60172(0x56c)]())console[_0xb60172(0x831)]('WARNING:\x20%1\x20has\x20already\x20been\x20declared\x0aand\x20cannot\x20be\x20used\x20as\x20a\x20Quick\x20JS\x20Function'[_0xb60172(0x7d6)](_0x45f1dd));}const _0x5112af=_0xb60172(0x17d)[_0xb60172(0x7d6)](_0x45f1dd,_0x17ff3a);window[_0x45f1dd]=new Function(_0x5112af);},Scene_Boot[_0x29d580(0x356)]['process_VisuMZ_CoreEngine_CustomParameters']=function(){const _0x4e041a=_0x29d580,_0x167fa9=VisuMZ[_0x4e041a(0x191)][_0x4e041a(0xa48)][_0x4e041a(0x736)];if(!_0x167fa9)return;for(const _0x275a68 of _0x167fa9){if(!_0x275a68)continue;VisuMZ[_0x4e041a(0x191)][_0x4e041a(0x47f)](_0x275a68);}},VisuMZ[_0x29d580(0x191)][_0x29d580(0x3c5)]={},VisuMZ[_0x29d580(0x191)][_0x29d580(0x8b3)]={},VisuMZ['CoreEngine'][_0x29d580(0x5af)]={},VisuMZ[_0x29d580(0x191)][_0x29d580(0x4dc)]={},VisuMZ[_0x29d580(0x191)]['createCustomParameter']=function(_0x15c9c4){const _0x4eca9a=_0x29d580,_0x500767=_0x15c9c4[_0x4eca9a(0x413)],_0xfaae04=_0x15c9c4[_0x4eca9a(0x608)],_0x4f2a9c=_0x15c9c4[_0x4eca9a(0x9b6)],_0x3c7621=_0x15c9c4[_0x4eca9a(0x5f5)],_0x117417=new Function(_0x15c9c4[_0x4eca9a(0x2ab)]);VisuMZ['CoreEngine'][_0x4eca9a(0x3c5)][_0x500767[_0x4eca9a(0x8bb)]()['trim']()]=_0xfaae04,VisuMZ[_0x4eca9a(0x191)]['CustomParamIcons'][_0x500767[_0x4eca9a(0x8bb)]()[_0x4eca9a(0x894)]()]=_0x4f2a9c,VisuMZ[_0x4eca9a(0x191)][_0x4eca9a(0x5af)][_0x500767[_0x4eca9a(0x8bb)]()[_0x4eca9a(0x894)]()]=_0x3c7621,VisuMZ[_0x4eca9a(0x191)][_0x4eca9a(0x4dc)][_0x500767[_0x4eca9a(0x8bb)]()[_0x4eca9a(0x894)]()]=_0x500767,Object[_0x4eca9a(0xa1d)](Game_BattlerBase['prototype'],_0x500767,{'get'(){const _0x31ce07=_0x4eca9a;if(_0x31ce07(0x44b)==='nnpbS')return _0x5536b7[_0x31ce07(0x93c)](_0x225de9,'<','>');else{const _0x3bfa14=_0x117417[_0x31ce07(0x84c)](this);return _0x3c7621===_0x31ce07(0x1a7)?Math[_0x31ce07(0x673)](_0x3bfa14):_0x3bfa14;}}});},VisuMZ[_0x29d580(0x191)][_0x29d580(0x9eb)]={},VisuMZ[_0x29d580(0x191)][_0x29d580(0x48e)]={},Scene_Boot[_0x29d580(0x356)][_0x29d580(0x49d)]=function(){const _0x39ba42=_0x29d580,_0x37617a=VisuMZ[_0x39ba42(0x191)][_0x39ba42(0xa48)]['ControllerButtons'];for(const _0x2b1018 of _0x37617a){const _0x33bfd6=(_0x2b1018['Name']||'')[_0x39ba42(0x61c)]()[_0x39ba42(0x894)](),_0x57cc7a=(_0x2b1018[_0x39ba42(0x952)]||'')[_0x39ba42(0x61c)]()[_0x39ba42(0x894)]();VisuMZ['CoreEngine']['ControllerButtons'][_0x33bfd6]=_0x2b1018,VisuMZ['CoreEngine'][_0x39ba42(0x48e)][_0x57cc7a]=_0x33bfd6;}},VisuMZ['ParseAllNotetags']=function(){const _0x16954e=_0x29d580;for(const _0x32aa1f of $dataActors){if(_0x16954e(0x3e4)!==_0x16954e(0x38d)){if(_0x32aa1f)VisuMZ[_0x16954e(0x7bf)](_0x32aa1f);}else{const _0x45b5f1=_0x16954e(0x783);this['_colorCache']=this[_0x16954e(0x73b)]||{};if(this[_0x16954e(0x73b)][_0x45b5f1])return this[_0x16954e(0x73b)][_0x45b5f1];const _0x2d417f=_0x4e54ff[_0x16954e(0x191)]['Settings']['Color']['ColorGaugeBack'];return this['getColorDataFromPluginParameters'](_0x45b5f1,_0x2d417f);}}for(const _0x49650e of $dataClasses){if(_0x49650e)VisuMZ['ParseClassNotetags'](_0x49650e);}for(const _0x5dd817 of $dataSkills){if(_0x16954e(0x8f7)!==_0x16954e(0x40e)){if(_0x5dd817)VisuMZ[_0x16954e(0x950)](_0x5dd817);}else{this[_0x16954e(0x1fa)][_0x16954e(0x8b8)](_0xa9d3dd),this[_0x16954e(0x319)](_0xa58a22);for(const _0x23ca81 of _0x5e307d[_0x16954e(0x81a)]){_0x23ca81['endAnimation']&&_0x23ca81['endAnimation']();}_0x4d4a06[_0x16954e(0x429)]();}}for(const _0x692847 of $dataItems){if(_0x16954e(0x5d2)===_0x16954e(0x5d2)){if(_0x692847)VisuMZ[_0x16954e(0x634)](_0x692847);}else for(const _0x13aecf of _0x51294f){this['createPointAnimationSprite']([_0x13aecf],_0x50254b,_0x476002,_0x35b811,_0x246fa6),_0x2b6665+=_0x188bc7;}}for(const _0x44ca70 of $dataWeapons){if(_0x44ca70)VisuMZ[_0x16954e(0xa4e)](_0x44ca70);}for(const _0x28dc5b of $dataArmors){if(_0x28dc5b)VisuMZ[_0x16954e(0x8d0)](_0x28dc5b);}for(const _0x4497b0 of $dataEnemies){if('uwCWK'===_0x16954e(0x29a))return _0x4108d1[_0x16954e(0x68c)];else{if(_0x4497b0)VisuMZ[_0x16954e(0x9d7)](_0x4497b0);}}for(const _0x1dd8ae of $dataStates){if(_0x16954e(0x6d5)===_0x16954e(0x26a))_0x5fdb55+=_0x3b0c02,_0x1a5e80+=_0xb42348,_0xabb799+=_0x16954e(0x573)[_0x16954e(0x7d6)](_0x106754['id'],_0x2de6db[_0x16954e(0xa21)]),_0x2749f4+=_0x10024a,_0x48ea51+=_0x585058,_0x480a8c+=_0x5b6723,_0x3b3589+=_0x16954e(0x1c6)['format'](_0x3022b9['id'],_0x433557[_0x16954e(0xa21)]),_0x2ed500+=_0x3713df;else{if(_0x1dd8ae)VisuMZ[_0x16954e(0x77f)](_0x1dd8ae);}}for(const _0x4d899b of $dataTilesets){if(_0x4d899b)VisuMZ[_0x16954e(0x8cf)](_0x4d899b);}},VisuMZ[_0x29d580(0x7bf)]=function(_0x1dfbd8){},VisuMZ[_0x29d580(0x752)]=function(_0xc17282){},VisuMZ['ParseSkillNotetags']=function(_0x47e92f){},VisuMZ[_0x29d580(0x634)]=function(_0xc8bd8c){},VisuMZ[_0x29d580(0xa4e)]=function(_0x31a6ab){},VisuMZ['ParseArmorNotetags']=function(_0x272560){},VisuMZ[_0x29d580(0x9d7)]=function(_0x15894a){},VisuMZ['ParseStateNotetags']=function(_0x4d6cdb){},VisuMZ[_0x29d580(0x8cf)]=function(_0x5f1dd9){},VisuMZ[_0x29d580(0x191)]['ParseActorNotetags']=VisuMZ[_0x29d580(0x7bf)],VisuMZ[_0x29d580(0x7bf)]=function(_0x3312b3){const _0x1608a0=_0x29d580;VisuMZ[_0x1608a0(0x191)][_0x1608a0(0x7bf)][_0x1608a0(0x84c)](this,_0x3312b3);const _0x10c563=_0x3312b3['note'];if(_0x10c563['match'](/<MAX LEVEL:[ ](\d+)>/i)){_0x3312b3[_0x1608a0(0x8a1)]=Number(RegExp['$1']);if(_0x3312b3[_0x1608a0(0x8a1)]===0x0)_0x3312b3['maxLevel']=Number[_0x1608a0(0x838)];}_0x10c563['match'](/<INITIAL LEVEL:[ ](\d+)>/i)&&(_0x3312b3[_0x1608a0(0x806)]=Math[_0x1608a0(0x6c6)](Number(RegExp['$1']),_0x3312b3['maxLevel']));},VisuMZ[_0x29d580(0x191)][_0x29d580(0x752)]=VisuMZ['ParseClassNotetags'],VisuMZ[_0x29d580(0x752)]=function(_0x51feb0){const _0x5ea19e=_0x29d580;VisuMZ[_0x5ea19e(0x191)][_0x5ea19e(0x752)][_0x5ea19e(0x84c)](this,_0x51feb0);if(_0x51feb0[_0x5ea19e(0x4a6)])for(const _0x5b1e0a of _0x51feb0[_0x5ea19e(0x4a6)]){if(_0x5ea19e(0x5f8)==='XUZLx'){if(_0x5b1e0a[_0x5ea19e(0x7c5)][_0x5ea19e(0x663)](/<LEARN AT LEVEL:[ ](\d+)>/i)){if(_0x5ea19e(0x565)!==_0x5ea19e(0x36d))_0x5b1e0a['level']=Math['max'](Number(RegExp['$1']),0x1);else{var _0x55fb03=_0x336df3-2.25/2.75;return 7.5625*_0x55fb03*_0x55fb03+0.9375;}}}else this[_0x5ea19e(0x6f8)]=_0x3dcf85;}},VisuMZ[_0x29d580(0x191)][_0x29d580(0x9d7)]=VisuMZ[_0x29d580(0x9d7)],VisuMZ[_0x29d580(0x9d7)]=function(_0x4ff3fa){const _0x42b79d=_0x29d580;VisuMZ[_0x42b79d(0x191)][_0x42b79d(0x9d7)][_0x42b79d(0x84c)](this,_0x4ff3fa),_0x4ff3fa[_0x42b79d(0x5c5)]=0x1;const _0x374019=_0x4ff3fa[_0x42b79d(0x7c5)];if(_0x374019[_0x42b79d(0x663)](/<LEVEL:[ ](\d+)>/i))_0x4ff3fa['level']=Number(RegExp['$1']);if(_0x374019[_0x42b79d(0x663)](/<MAXHP:[ ](\d+)>/i))_0x4ff3fa[_0x42b79d(0x182)][0x0]=Number(RegExp['$1']);if(_0x374019[_0x42b79d(0x663)](/<MAXMP:[ ](\d+)>/i))_0x4ff3fa[_0x42b79d(0x182)][0x1]=Number(RegExp['$1']);if(_0x374019[_0x42b79d(0x663)](/<ATK:[ ](\d+)>/i))_0x4ff3fa['params'][0x2]=Number(RegExp['$1']);if(_0x374019[_0x42b79d(0x663)](/<DEF:[ ](\d+)>/i))_0x4ff3fa[_0x42b79d(0x182)][0x3]=Number(RegExp['$1']);if(_0x374019[_0x42b79d(0x663)](/<MAT:[ ](\d+)>/i))_0x4ff3fa[_0x42b79d(0x182)][0x4]=Number(RegExp['$1']);if(_0x374019[_0x42b79d(0x663)](/<MDF:[ ](\d+)>/i))_0x4ff3fa[_0x42b79d(0x182)][0x5]=Number(RegExp['$1']);if(_0x374019['match'](/<AGI:[ ](\d+)>/i))_0x4ff3fa[_0x42b79d(0x182)][0x6]=Number(RegExp['$1']);if(_0x374019[_0x42b79d(0x663)](/<LUK:[ ](\d+)>/i))_0x4ff3fa[_0x42b79d(0x182)][0x7]=Number(RegExp['$1']);if(_0x374019['match'](/<EXP:[ ](\d+)>/i))_0x4ff3fa[_0x42b79d(0x291)]=Number(RegExp['$1']);if(_0x374019['match'](/<GOLD:[ ](\d+)>/i))_0x4ff3fa[_0x42b79d(0xa16)]=Number(RegExp['$1']);},VisuMZ[_0x29d580(0x191)][_0x29d580(0x9a1)]=Graphics[_0x29d580(0x2b0)],Graphics[_0x29d580(0x2b0)]=function(){const _0x22a56c=_0x29d580;switch(VisuMZ[_0x22a56c(0x191)][_0x22a56c(0xa48)][_0x22a56c(0x53e)][_0x22a56c(0x42f)]){case _0x22a56c(0x6a5):return!![];case _0x22a56c(0x84d):return![];default:return VisuMZ[_0x22a56c(0x191)][_0x22a56c(0x9a1)][_0x22a56c(0x84c)](this);}},VisuMZ[_0x29d580(0x191)][_0x29d580(0x787)]=Graphics[_0x29d580(0x6b5)],Graphics[_0x29d580(0x6b5)]=function(_0x599fe5,_0x4d6220,_0x2b8eef=null){const _0x275108=_0x29d580;VisuMZ[_0x275108(0x191)]['Graphics_printError']['call'](this,_0x599fe5,_0x4d6220,_0x2b8eef),VisuMZ[_0x275108(0x1fb)](![]);},VisuMZ[_0x29d580(0x191)][_0x29d580(0x5dc)]=Graphics[_0x29d580(0x39b)],Graphics[_0x29d580(0x39b)]=function(_0x3b310f){const _0x202bc1=_0x29d580;VisuMZ[_0x202bc1(0x191)][_0x202bc1(0x5dc)][_0x202bc1(0x84c)](this,_0x3b310f),this[_0x202bc1(0x61e)](_0x3b310f);},Graphics['_centerElementCoreEngine']=function(_0x3ff698){const _0x2259f0=_0x29d580;if(VisuMZ[_0x2259f0(0x191)][_0x2259f0(0xa48)][_0x2259f0(0x53e)]['FontSmoothing']){if(_0x2259f0(0x4cc)!==_0x2259f0(0x4cc))return _0x525ac7[_0x2259f0(0x191)][_0x2259f0(0x4ee)][_0x2259f0(0x84c)](this,_0x445a12,_0xc7592f);else _0x3ff698[_0x2259f0(0x4a1)][_0x2259f0(0x5f7)]=_0x2259f0(0xa56);}VisuMZ[_0x2259f0(0x191)]['Settings'][_0x2259f0(0x53e)][_0x2259f0(0x742)]&&(_0x3ff698[_0x2259f0(0x4a1)]['image-rendering']='pixelated');const _0x2cb2ae=Math[_0x2259f0(0x55d)](0x0,Math[_0x2259f0(0x722)](_0x3ff698[_0x2259f0(0x31b)]*this[_0x2259f0(0x784)])),_0x5b993b=Math[_0x2259f0(0x55d)](0x0,Math[_0x2259f0(0x722)](_0x3ff698[_0x2259f0(0x638)]*this[_0x2259f0(0x784)]));_0x3ff698['style']['width']=_0x2cb2ae+'px',_0x3ff698[_0x2259f0(0x4a1)][_0x2259f0(0x638)]=_0x5b993b+'px';},VisuMZ['CoreEngine'][_0x29d580(0x9e0)]=Bitmap[_0x29d580(0x356)][_0x29d580(0x1ce)],Bitmap[_0x29d580(0x356)][_0x29d580(0x1ce)]=function(_0x3380e8,_0x13061b){const _0x1af20e=_0x29d580;VisuMZ[_0x1af20e(0x191)][_0x1af20e(0x9e0)][_0x1af20e(0x84c)](this,_0x3380e8,_0x13061b),this[_0x1af20e(0x29b)]=!(VisuMZ[_0x1af20e(0x191)]['Settings'][_0x1af20e(0x53e)][_0x1af20e(0x742)]??!![]);},Bitmap[_0x29d580(0x356)][_0x29d580(0x40a)]=function(){const _0x29838c=_0x29d580;this[_0x29838c(0x751)]=!![];},VisuMZ['CoreEngine'][_0x29d580(0x761)]=Sprite[_0x29d580(0x356)][_0x29d580(0x429)],Sprite['prototype'][_0x29d580(0x429)]=function(){const _0x940c1a=_0x29d580;if(this[_0x940c1a(0x74b)])VisuMZ[_0x940c1a(0x191)]['Sprite_destroy']['call'](this);this[_0x940c1a(0x33b)]();},Sprite[_0x29d580(0x356)]['destroyCoreEngineMarkedBitmaps']=function(){const _0x1f9a26=_0x29d580;if(!this[_0x1f9a26(0x240)])return;if(!this['bitmap'][_0x1f9a26(0x751)])return;this['bitmap'][_0x1f9a26(0x531)]&&!this[_0x1f9a26(0x160)][_0x1f9a26(0x531)]['destroyed']&&this[_0x1f9a26(0x240)][_0x1f9a26(0x429)]();},VisuMZ[_0x29d580(0x191)][_0x29d580(0x6e4)]=Bitmap[_0x29d580(0x356)][_0x29d580(0xa14)],Bitmap[_0x29d580(0x356)][_0x29d580(0xa14)]=function(_0x331bac,_0x485cf1){const _0x21afe5=_0x29d580;VisuMZ[_0x21afe5(0x191)]['Bitmap_resize'][_0x21afe5(0x84c)](this,_0x331bac,_0x485cf1),this['markCoreEngineModified']();},VisuMZ[_0x29d580(0x191)]['Bitmap_blt']=Bitmap[_0x29d580(0x356)][_0x29d580(0x364)],Bitmap[_0x29d580(0x356)]['blt']=function(_0x291b4c,_0x108ec6,_0x3092ae,_0xa11144,_0x4d0b35,_0x31d4b3,_0x5c7bcc,_0x5206d4,_0x5e45ec){const _0x5c7464=_0x29d580;_0x108ec6=Math[_0x5c7464(0x673)](_0x108ec6),_0x3092ae=Math[_0x5c7464(0x673)](_0x3092ae),_0xa11144=Math[_0x5c7464(0x673)](_0xa11144),_0x4d0b35=Math['round'](_0x4d0b35),_0x31d4b3=Math[_0x5c7464(0x673)](_0x31d4b3),_0x5c7bcc=Math[_0x5c7464(0x673)](_0x5c7bcc),VisuMZ[_0x5c7464(0x191)]['Bitmap_blt'][_0x5c7464(0x84c)](this,_0x291b4c,_0x108ec6,_0x3092ae,_0xa11144,_0x4d0b35,_0x31d4b3,_0x5c7bcc,_0x5206d4,_0x5e45ec),this[_0x5c7464(0x40a)]();},VisuMZ[_0x29d580(0x191)]['Bitmap_clearRect']=Bitmap[_0x29d580(0x356)][_0x29d580(0x1b7)],Bitmap[_0x29d580(0x356)][_0x29d580(0x1b7)]=function(_0x55cdfc,_0x316caf,_0x554454,_0x35c070){const _0x4f1f6d=_0x29d580;VisuMZ[_0x4f1f6d(0x191)][_0x4f1f6d(0x936)][_0x4f1f6d(0x84c)](this,_0x55cdfc,_0x316caf,_0x554454,_0x35c070),this[_0x4f1f6d(0x40a)]();},VisuMZ[_0x29d580(0x191)][_0x29d580(0x7d1)]=Bitmap[_0x29d580(0x356)]['fillRect'],Bitmap['prototype']['fillRect']=function(_0x1bc4f9,_0x33e71d,_0x354b58,_0x576cbb,_0x138782){const _0x11a021=_0x29d580;VisuMZ['CoreEngine'][_0x11a021(0x7d1)]['call'](this,_0x1bc4f9,_0x33e71d,_0x354b58,_0x576cbb,_0x138782),this['markCoreEngineModified']();},VisuMZ[_0x29d580(0x191)][_0x29d580(0x781)]=Bitmap[_0x29d580(0x356)][_0x29d580(0x9df)],Bitmap[_0x29d580(0x356)][_0x29d580(0x9df)]=function(_0x214119,_0x5353a0,_0x3e2601,_0x10810b,_0xb03880){const _0x1d9d70=_0x29d580;VisuMZ['CoreEngine'][_0x1d9d70(0x781)]['call'](this,_0x214119,_0x5353a0,_0x3e2601,_0x10810b,_0xb03880),this[_0x1d9d70(0x40a)]();},VisuMZ[_0x29d580(0x191)][_0x29d580(0x975)]=Bitmap[_0x29d580(0x356)]['gradientFillRect'],Bitmap[_0x29d580(0x356)]['gradientFillRect']=function(_0x5b1733,_0x107b18,_0x113f69,_0xd518ba,_0x48166f,_0x4c3b42,_0x281449){const _0x2d3b06=_0x29d580;VisuMZ[_0x2d3b06(0x191)][_0x2d3b06(0x975)][_0x2d3b06(0x84c)](this,_0x5b1733,_0x107b18,_0x113f69,_0xd518ba,_0x48166f,_0x4c3b42,_0x281449),this[_0x2d3b06(0x40a)]();},VisuMZ['CoreEngine'][_0x29d580(0x7ea)]=Bitmap['prototype'][_0x29d580(0x914)],Bitmap[_0x29d580(0x356)][_0x29d580(0x914)]=function(_0x4377d0,_0x4405ef,_0x1b9b21,_0x210fcb){const _0x55eddc=_0x29d580;_0x4377d0=Math[_0x55eddc(0x673)](_0x4377d0),_0x4405ef=Math['round'](_0x4405ef),_0x1b9b21=Math[_0x55eddc(0x673)](_0x1b9b21),VisuMZ[_0x55eddc(0x191)][_0x55eddc(0x7ea)][_0x55eddc(0x84c)](this,_0x4377d0,_0x4405ef,_0x1b9b21,_0x210fcb),this[_0x55eddc(0x40a)]();},VisuMZ['CoreEngine'][_0x29d580(0x970)]=Bitmap[_0x29d580(0x356)][_0x29d580(0x6ca)],Bitmap['prototype']['measureTextWidth']=function(_0x294983){const _0x1646ef=_0x29d580;return Math[_0x1646ef(0x7ec)](VisuMZ[_0x1646ef(0x191)][_0x1646ef(0x970)][_0x1646ef(0x84c)](this,_0x294983));},VisuMZ[_0x29d580(0x191)]['Bitmap_drawText']=Bitmap[_0x29d580(0x356)][_0x29d580(0x6a6)],Bitmap[_0x29d580(0x356)][_0x29d580(0x6a6)]=function(_0x2ec8c3,_0x3084ed,_0x442a7e,_0xeb9d8,_0x1a60f2,_0x121ec0){const _0x3ef6d8=_0x29d580;_0x3084ed=Math['round'](_0x3084ed),_0x442a7e=Math['round'](_0x442a7e),_0xeb9d8=Math[_0x3ef6d8(0x673)](_0xeb9d8),_0x1a60f2=Math[_0x3ef6d8(0x673)](_0x1a60f2),VisuMZ[_0x3ef6d8(0x191)][_0x3ef6d8(0x37e)][_0x3ef6d8(0x84c)](this,_0x2ec8c3,_0x3084ed,_0x442a7e,_0xeb9d8,_0x1a60f2,_0x121ec0),this[_0x3ef6d8(0x40a)]();},VisuMZ[_0x29d580(0x191)]['Bitmap_drawTextOutline']=Bitmap[_0x29d580(0x356)][_0x29d580(0x3fe)],Bitmap[_0x29d580(0x356)]['_drawTextOutline']=function(_0x5b9e4c,_0x33e129,_0x1fb937,_0xac724a){const _0x2bb189=_0x29d580;VisuMZ[_0x2bb189(0x191)][_0x2bb189(0xa48)][_0x2bb189(0x53e)][_0x2bb189(0x484)]?this[_0x2bb189(0x6b6)](_0x5b9e4c,_0x33e129,_0x1fb937,_0xac724a):'VQDUQ'!==_0x2bb189(0x328)?_0x201ae7+=_0x2bb189(0x5bb)['format'](_0x29e5dc[_0x2bb189(0x6cc)][0x0]):VisuMZ['CoreEngine']['Bitmap_drawTextOutline']['call'](this,_0x5b9e4c,_0x33e129,_0x1fb937,_0xac724a);},Bitmap[_0x29d580(0x356)][_0x29d580(0x6b6)]=function(_0x41b46a,_0x5a8b27,_0x2d3582,_0x3a7936){const _0x2302e4=_0x29d580,_0x2d39f8=this[_0x2302e4(0x342)];_0x2d39f8['fillStyle']=this[_0x2302e4(0x908)],_0x2d39f8[_0x2302e4(0x5a9)](_0x41b46a,_0x5a8b27+0x2,_0x2d3582+0x2,_0x3a7936);},VisuMZ[_0x29d580(0x191)][_0x29d580(0x25a)]=Input[_0x29d580(0x588)],Input[_0x29d580(0x588)]=function(){const _0x182201=_0x29d580;VisuMZ[_0x182201(0x191)]['Input_clear']['call'](this),this[_0x182201(0x6f8)]=undefined,this['_inputSpecialKeyCode']=undefined,this[_0x182201(0x815)]=Input['keyRepeatWait'];},VisuMZ[_0x29d580(0x191)][_0x29d580(0x51f)]=Input[_0x29d580(0x24e)],Input[_0x29d580(0x24e)]=function(){const _0x1b5dd1=_0x29d580;VisuMZ[_0x1b5dd1(0x191)]['Input_update'][_0x1b5dd1(0x84c)](this);if(this[_0x1b5dd1(0x815)])this[_0x1b5dd1(0x815)]--;},VisuMZ[_0x29d580(0x191)]['Input_pollGamepads']=Input[_0x29d580(0x30d)],Input['_pollGamepads']=function(){const _0x26c3f7=_0x29d580;if(this['_gamepadWait'])return;VisuMZ[_0x26c3f7(0x191)]['Input_pollGamepads'][_0x26c3f7(0x84c)](this);},VisuMZ[_0x29d580(0x191)][_0x29d580(0x426)]=Input['_setupEventHandlers'],Input[_0x29d580(0x456)]=function(){const _0x5231f8=_0x29d580;VisuMZ[_0x5231f8(0x191)]['Input_setupEventHandlers']['call'](this),document['addEventListener']('keypress',this['_onKeyPress'][_0x5231f8(0x85f)](this));},VisuMZ[_0x29d580(0x191)][_0x29d580(0x1e4)]=Input[_0x29d580(0x465)],Input[_0x29d580(0x465)]=function(_0x1f96c0){const _0x5afe56=_0x29d580;this[_0x5afe56(0x982)]=_0x1f96c0['keyCode'],VisuMZ['CoreEngine']['Input_onKeyDown'][_0x5afe56(0x84c)](this,_0x1f96c0),this[_0x5afe56(0x873)](null);},Input[_0x29d580(0x9c9)]=function(_0x1231d7){const _0x3edb17=_0x29d580;this[_0x3edb17(0x1c0)](_0x1231d7);},Input[_0x29d580(0x1c0)]=function(_0x31d814){const _0x401d8d=_0x29d580;this['_inputSpecialKeyCode']=_0x31d814[_0x401d8d(0x2d9)];let _0x25b70c=String['fromCharCode'](_0x31d814[_0x401d8d(0x6aa)]);this[_0x401d8d(0x6f8)]===undefined?this['_inputString']=_0x25b70c:this[_0x401d8d(0x6f8)]+=_0x25b70c;},VisuMZ[_0x29d580(0x191)][_0x29d580(0x452)]=Input['_shouldPreventDefault'],Input[_0x29d580(0x510)]=function(_0x24c3c3){const _0x39c573=_0x29d580;if(_0x24c3c3===0x8)return![];return VisuMZ[_0x39c573(0x191)][_0x39c573(0x452)]['call'](this,_0x24c3c3);},Input[_0x29d580(0x289)]=function(_0x487bd5){const _0x4a1d05=_0x29d580;if(_0x487bd5[_0x4a1d05(0x663)](/backspace/i))return this[_0x4a1d05(0x982)]===0x8;if(_0x487bd5['match'](/enter/i))return this[_0x4a1d05(0x982)]===0xd;if(_0x487bd5[_0x4a1d05(0x663)](/escape/i))return this[_0x4a1d05(0x982)]===0x1b;},Input[_0x29d580(0x523)]=function(){const _0x513bd7=_0x29d580;return[0x30,0x31,0x32,0x33,0x34,0x35,0x36,0x37,0x38,0x39][_0x513bd7(0x7e1)](this[_0x513bd7(0x982)]);},Input[_0x29d580(0x5db)]=function(){const _0x2ff61c=_0x29d580;return[0x25,0x26,0x27,0x28][_0x2ff61c(0x7e1)](this['_inputSpecialKeyCode']);},Input['isGamepadConnected']=function(){const _0x455872=_0x29d580;if(navigator[_0x455872(0x3ef)]){const _0x2d4239=navigator[_0x455872(0x3ef)]();if(_0x2d4239)for(const _0x837c36 of _0x2d4239){if(_0x837c36&&_0x837c36['connected'])return!![];}}return![];},Input[_0x29d580(0x912)]=function(){const _0x363005=_0x29d580;if(navigator['getGamepads']){if('akobB'===_0x363005(0x7a6)){_0x13915e[_0x363005(0x9cc)](_0x1068af,_0xadae01);const _0x533714=_0x4029cf[_0x363005(0x673)](_0x1e4626['PictureID'])[_0x363005(0x8ff)](0x1,0x64),_0x567259=-_0x45899e(_0x4104e4[_0x363005(0x80c)]||0x0),_0x2c39d8=_0x498973[_0x363005(0x55d)](_0x2d3eb7[_0x363005(0x295)]||0x0,0x0),_0x79d4e3=_0x4527b8[_0x363005(0x8ea)]||_0x363005(0x756),_0x4d5bb5=_0xaeb63e[_0x363005(0x46b)],_0x5d8d77=_0x52b0d0[_0x363005(0x257)](_0x533714);if(!_0x5d8d77)return;_0x5d8d77['setAnglePlusData'](_0x567259,_0x2c39d8,_0x79d4e3);if(_0x4d5bb5){const _0x59563b=_0x560f76[_0x363005(0x7c4)]();if(_0x59563b)_0x59563b[_0x363005(0x8d8)](_0x2c39d8);}}else{const _0x358c57=navigator[_0x363005(0x3ef)]();if(_0x358c57)for(const _0x9b0984 of _0x358c57){if('XJukC'==='XJukC'){if(_0x9b0984&&_0x9b0984['connected']){if(this['isGamepadButtonPressed'](_0x9b0984))return!![];if(this['isGamepadAxisMoved'](_0x9b0984))return!![];}}else this[_0x363005(0xa11)]=_0x49b6cb(_0x23c1e1(this[_0x363005(0xa11)])['slice'](0x0,-0x1)),this[_0x363005(0xa11)]=_0x3f9afe[_0x363005(0x55d)](0x0,this['_number']),_0x22f44e['clear'](),this['refresh'](),_0x15ede2[_0x363005(0x1af)](),this[_0x363005(0x332)](this['_maxDigits']-0x1);}}}return![];},Input[_0x29d580(0x472)]=function(_0x400e45){const _0x34d0d1=_0x29d580,_0x5026c2=_0x400e45[_0x34d0d1(0x440)];for(let _0x5ad030=0x0;_0x5ad030<_0x5026c2[_0x34d0d1(0x743)];_0x5ad030++){if(_0x34d0d1(0x518)!==_0x34d0d1(0x518))return _0x5a3e2c['layoutSettings']['SlotRect'][_0x34d0d1(0x84c)](this);else{if(_0x5026c2[_0x5ad030][_0x34d0d1(0x86f)])return!![];}}return![];},Input['isGamepadAxisMoved']=function(_0x5a31fd){const _0x2b7354=_0x29d580,_0x3b4b00=_0x5a31fd[_0x2b7354(0x611)],_0x237dea=0.5;if(_0x3b4b00[0x0]<-_0x237dea)return!![];if(_0x3b4b00[0x0]>_0x237dea)return!![];if(_0x3b4b00[0x1]<-_0x237dea)return!![];if(_0x3b4b00[0x1]>_0x237dea)return!![];return![];},Input['getLastGamepadUsed']=function(){const _0x52aa48=_0x29d580;return this[_0x52aa48(0x7f5)]||null;},Input[_0x29d580(0x873)]=function(_0x4a4e09){const _0x45a357=_0x29d580;this[_0x45a357(0x7f5)]=_0x4a4e09;},VisuMZ[_0x29d580(0x191)]['Input_updateGamepadState']=Input['_updateGamepadState'],Input[_0x29d580(0x8c6)]=function(_0x21abb5){const _0x2a1e47=_0x29d580;VisuMZ['CoreEngine'][_0x2a1e47(0x6a1)][_0x2a1e47(0x84c)](this,_0x21abb5);if(this['isGamepadButtonPressed'](_0x21abb5)||this[_0x2a1e47(0x5c8)](_0x21abb5)){if(_0x2a1e47(0x911)!==_0x2a1e47(0x59f))this[_0x2a1e47(0x873)](_0x21abb5);else{const _0x482b34=this['context'];_0x482b34[_0x2a1e47(0x178)]=this[_0x2a1e47(0x908)],_0x482b34['fillText'](_0x75a630,_0x2100a8+0x2,_0x55a77d+0x2,_0x5011ac);}}},Input[_0x29d580(0x8f9)]=function(){const _0x197b35=_0x29d580;return this['_lastGamepad']?this[_0x197b35(0x7f5)]['id']:_0x197b35(0x865);},VisuMZ[_0x29d580(0x191)][_0x29d580(0x3e9)]=Tilemap[_0x29d580(0x356)]['_addShadow'],Tilemap[_0x29d580(0x356)][_0x29d580(0x53f)]=function(_0x43368e,_0x124073,_0x518b5f,_0x89113f){const _0x64630d=_0x29d580;if($gameMap&&$gameMap['areTileShadowsHidden']())return;VisuMZ['CoreEngine'][_0x64630d(0x3e9)][_0x64630d(0x84c)](this,_0x43368e,_0x124073,_0x518b5f,_0x89113f);},Tilemap[_0x29d580(0x62f)]['prototype'][_0x29d580(0x441)]=function(){const _0x237d14=_0x29d580;this[_0x237d14(0x896)]();for(let _0x4d612b=0x0;_0x4d612b<Tilemap[_0x237d14(0x46e)][_0x237d14(0x4ec)];_0x4d612b++){const _0x5c72fd=new PIXI['BaseTexture']();_0x5c72fd[_0x237d14(0x30f)](0x800,0x800),VisuMZ['CoreEngine'][_0x237d14(0xa48)][_0x237d14(0x53e)]['PixelateImageRendering']&&(_0x5c72fd[_0x237d14(0x435)]=PIXI['SCALE_MODES'][_0x237d14(0x9bd)]),this['_internalTextures']['push'](_0x5c72fd);}},WindowLayer[_0x29d580(0x356)][_0x29d580(0x2e7)]=function(){const _0x3a5965=_0x29d580;if(SceneManager&&SceneManager['_scene']){if(_0x3a5965(0x75e)!==_0x3a5965(0x75e))this[_0x3a5965(0x1ae)][_0x3a5965(0x196)](_0x5f29e3['layoutSettings']['StatusEquipBgType']);else return SceneManager['_scene']['isWindowMaskingEnabled']();}else return!![];},VisuMZ[_0x29d580(0x191)][_0x29d580(0x6ed)]=WindowLayer['prototype'][_0x29d580(0x7d4)],WindowLayer['prototype'][_0x29d580(0x7d4)]=function render(_0x41368a){const _0x1e449d=_0x29d580;this[_0x1e449d(0x2e7)]()?VisuMZ[_0x1e449d(0x191)]['WindowLayer_render'][_0x1e449d(0x84c)](this,_0x41368a):this['renderNoMask'](_0x41368a);},WindowLayer[_0x29d580(0x356)][_0x29d580(0x453)]=function render(_0x3428ff){const _0x6a2d12=_0x29d580;if(!this[_0x6a2d12(0x276)])return;const _0x50f2f1=new PIXI[(_0x6a2d12(0x658))](),_0xbf9748=_0x3428ff['gl'],_0x1711e6=this[_0x6a2d12(0x386)][_0x6a2d12(0x9fe)]();_0x3428ff[_0x6a2d12(0x3a8)]['forceStencil'](),_0x50f2f1[_0x6a2d12(0x71d)]=this[_0x6a2d12(0x71d)],_0x3428ff[_0x6a2d12(0x67a)][_0x6a2d12(0x776)](),_0xbf9748[_0x6a2d12(0x4a5)](_0xbf9748[_0x6a2d12(0x5a4)]);while(_0x1711e6['length']>0x0){if('jzPtj'===_0x6a2d12(0x9a0)){const _0x1d8e3a=_0x1711e6['shift']();_0x1d8e3a[_0x6a2d12(0x3fd)]&&_0x1d8e3a[_0x6a2d12(0x276)]&&_0x1d8e3a['openness']>0x0&&(_0xbf9748[_0x6a2d12(0x4ad)](_0xbf9748[_0x6a2d12(0x1e9)],0x0,~0x0),_0xbf9748[_0x6a2d12(0x8ba)](_0xbf9748['KEEP'],_0xbf9748['KEEP'],_0xbf9748['KEEP']),_0x1d8e3a['render'](_0x3428ff),_0x3428ff[_0x6a2d12(0x67a)][_0x6a2d12(0x776)](),_0x50f2f1['clear'](),_0xbf9748[_0x6a2d12(0x4ad)](_0xbf9748[_0x6a2d12(0x52b)],0x1,~0x0),_0xbf9748[_0x6a2d12(0x8ba)](_0xbf9748[_0x6a2d12(0x51b)],_0xbf9748[_0x6a2d12(0x51b)],_0xbf9748[_0x6a2d12(0x51b)]),_0xbf9748[_0x6a2d12(0x554)](_0xbf9748[_0x6a2d12(0x5dd)],_0xbf9748[_0x6a2d12(0x5eb)]),_0x50f2f1[_0x6a2d12(0x7d4)](_0x3428ff),_0x3428ff['batch'][_0x6a2d12(0x776)](),_0xbf9748['blendFunc'](_0xbf9748[_0x6a2d12(0x5eb)],_0xbf9748['ONE_MINUS_SRC_ALPHA']));}else _0x26f8ab=_0x35c141||_0x483605[_0x6a2d12(0x390)],_0x259f76=_0x1b0da2||_0x3beb8a[_0x6a2d12(0x50c)],_0x5821a9=_0x1f72e2[_0x6a2d12(0x673)](_0x17eb59),_0x62763a=_0x4be8b2['round'](_0x4777e9),_0x4ba773=_0x4a4a7c[_0x6a2d12(0x673)](_0x1cffa7),_0x1af83a=_0x392a3b[_0x6a2d12(0x673)](_0x4c8e94),_0x36047e[_0x6a2d12(0x191)][_0x6a2d12(0x864)][_0x6a2d12(0x84c)](this,_0x31d0ef,_0x16e285,_0x457903,_0x456dd1,_0x5bb5b2,_0x33d5b7);}_0xbf9748[_0x6a2d12(0x9f8)](_0xbf9748[_0x6a2d12(0x5a4)]),_0xbf9748[_0x6a2d12(0x588)](_0xbf9748[_0x6a2d12(0x562)]),_0xbf9748[_0x6a2d12(0x6ae)](0x0),_0x3428ff['batch'][_0x6a2d12(0x776)]();for(const _0x28f002 of this['children']){_0x6a2d12(0x987)===_0x6a2d12(0x987)?!_0x28f002[_0x6a2d12(0x3fd)]&&_0x28f002[_0x6a2d12(0x276)]&&('sBZxA'===_0x6a2d12(0x9f3)?_0x28f002['render'](_0x3428ff):(this[_0x6a2d12(0x581)](_0x28f066,_0x172735+0x2,_0xbd8d90+0x2),_0xd866c9-=_0xbf0063['iconWidth']+0x4,_0x3e40d3+=_0x284c32[_0x6a2d12(0x4cd)]+0x4)):_0x3257e9=_0x6a2d12(0x5ef)[_0x6a2d12(0x7d6)](_0x5cf5d6,_0x57a0fe);}_0x3428ff[_0x6a2d12(0x67a)]['flush']();},DataManager['isKeyItem']=function(_0x3151cb){const _0x2eec74=_0x29d580;return this[_0x2eec74(0x886)](_0x3151cb)&&_0x3151cb['itypeId']===0x2;},VisuMZ[_0x29d580(0x191)][_0x29d580(0x89c)]=DataManager[_0x29d580(0x78f)],DataManager['setupNewGame']=function(){const _0x221bf9=_0x29d580;VisuMZ[_0x221bf9(0x191)]['DataManager_setupNewGame'][_0x221bf9(0x84c)](this),this['reservePlayTestNewGameCommonEvent'](),this[_0x221bf9(0xa18)]();},DataManager[_0x29d580(0x334)]=function(){const _0x569dd9=_0x29d580;if($gameTemp[_0x569dd9(0x56c)]()){const _0xebde8b=VisuMZ[_0x569dd9(0x191)]['Settings'][_0x569dd9(0x53e)][_0x569dd9(0x688)];if(_0xebde8b>0x0)$gameTemp[_0x569dd9(0x54d)](_0xebde8b);}},DataManager[_0x29d580(0xa18)]=function(){const _0x4db129=_0x29d580,_0x2235db=VisuMZ[_0x4db129(0x191)][_0x4db129(0xa48)][_0x4db129(0x53e)][_0x4db129(0x85d)]||0x0;if(_0x2235db>0x0)$gameTemp['reserveCommonEvent'](_0x2235db);},DataManager[_0x29d580(0x314)]=function(_0x4a907c){const _0x29df4f=_0x29d580,_0xe8286c=$dataTroops[_0x4a907c];if(!_0xe8286c)return'';let _0x206efa='';_0x206efa+=_0xe8286c['name'];for(const _0x2c61ed of _0xe8286c[_0x29df4f(0x915)]){if(_0x29df4f(0x542)!==_0x29df4f(0x542))this[_0x29df4f(0x1ce)](...arguments);else for(const _0x155a50 of _0x2c61ed[_0x29df4f(0x947)]){if('RlVYC'!==_0x29df4f(0x8b6))[0x6c,0x198][_0x29df4f(0x480)](_0x155a50[_0x29df4f(0x67b)])&&(_0x29df4f(0x81c)!==_0x29df4f(0x81c)?_0x249d5f[_0x29df4f(0x191)][_0x29df4f(0x6b8)][_0x29df4f(0x84c)](this):(_0x206efa+='\x0a',_0x206efa+=_0x155a50[_0x29df4f(0x6cc)][0x0]));else{if(_0x535885)_0x2ba736['ParseEnemyNotetags'](_0x4571dd);}}}return _0x206efa;};(VisuMZ[_0x29d580(0x191)][_0x29d580(0xa48)]['QoL'][_0x29d580(0x76a)]??!![])&&($scene=null,VisuMZ[_0x29d580(0x191)][_0x29d580(0x66f)]=Scene_Base['prototype'][_0x29d580(0x72a)],Scene_Base[_0x29d580(0x356)][_0x29d580(0x72a)]=function(){const _0x2e15a6=_0x29d580;VisuMZ[_0x2e15a6(0x191)][_0x2e15a6(0x66f)]['call'](this),$scene=this;},$spriteset=null,VisuMZ[_0x29d580(0x191)][_0x29d580(0x3a3)]=Scene_Map[_0x29d580(0x356)][_0x29d580(0x1e2)],Scene_Map['prototype'][_0x29d580(0x1e2)]=function(){const _0x2b80c7=_0x29d580;VisuMZ[_0x2b80c7(0x191)][_0x2b80c7(0x3a3)][_0x2b80c7(0x84c)](this),$spriteset=this[_0x2b80c7(0x4c0)];},VisuMZ[_0x29d580(0x191)][_0x29d580(0x69c)]=Scene_Battle[_0x29d580(0x356)]['createSpriteset'],Scene_Battle[_0x29d580(0x356)][_0x29d580(0x1e2)]=function(){const _0x562f6e=_0x29d580;VisuMZ[_0x562f6e(0x191)][_0x562f6e(0x69c)][_0x562f6e(0x84c)](this),$spriteset=this[_0x562f6e(0x4c0)];},VisuMZ['CoreEngine'][_0x29d580(0x2c4)]=Scene_Base['prototype'][_0x29d580(0x8f0)],Scene_Base[_0x29d580(0x356)][_0x29d580(0x8f0)]=function(){const _0xe40042=_0x29d580;VisuMZ['CoreEngine'][_0xe40042(0x2c4)][_0xe40042(0x84c)](this),$spriteset=null,$subject=null,$targets=null,$target=null;},$subject=null,$targets=null,$target=null,VisuMZ[_0x29d580(0x191)][_0x29d580(0xa2c)]=BattleManager[_0x29d580(0x24e)],BattleManager[_0x29d580(0x24e)]=function(_0x150071){const _0x1fe28f=_0x29d580;VisuMZ[_0x1fe28f(0x191)][_0x1fe28f(0xa2c)]['call'](this,_0x150071),$subject=this[_0x1fe28f(0x5f6)],$targets=this['_targets'],$target=this[_0x1fe28f(0x3b5)]||this[_0x1fe28f(0x794)][0x0];},$event=null,VisuMZ[_0x29d580(0x191)]['Game_Event_start']=Game_Event[_0x29d580(0x356)][_0x29d580(0x76b)],Game_Event[_0x29d580(0x356)][_0x29d580(0x76b)]=function(){const _0x114903=_0x29d580;VisuMZ['CoreEngine'][_0x114903(0x9b1)]['call'](this),$event=this;},VisuMZ['CoreEngine'][_0x29d580(0x3ec)]=Scene_Map['prototype'][_0x29d580(0x24e)],Scene_Map['prototype'][_0x29d580(0x24e)]=function(){const _0x1415ef=_0x29d580;VisuMZ['CoreEngine'][_0x1415ef(0x3ec)][_0x1415ef(0x84c)](this),$gameMap[_0x1415ef(0x4eb)]();},Game_Map[_0x29d580(0x356)][_0x29d580(0x4eb)]=function(){!this['isEventRunning']()&&$event!==null&&($event=null);},$commonEvent=function(_0x516728){const _0x3d7775=_0x29d580;if($gameTemp)$gameTemp[_0x3d7775(0x54d)](_0x516728);},$onceParallel=function(_0x575626){const _0x170e41=_0x29d580;if(SceneManager[_0x170e41(0x412)]()){if(_0x170e41(0x79d)===_0x170e41(0x2fe)){if(_0x140088[_0x170e41(0x56c)]())_0x35c2a9['log'](_0x2c1792);}else $scene[_0x170e41(0x3ab)](_0x575626);}else{if(SceneManager[_0x170e41(0x65e)]()){if(Imported[_0x170e41(0x557)])_0x170e41(0x398)!==_0x170e41(0x279)?$scene[_0x170e41(0x3ab)](_0x575626):this[_0x170e41(0x9ff)]=_0x2540e5;else $gameTemp&&$gameTemp[_0x170e41(0x56c)]()&&alert('Once\x20Parallel\x20for\x20Battle\x20requires\x20VisuMZ_1_BattleCore!');}else $gameTemp&&$gameTemp[_0x170e41(0x56c)]()&&alert(_0x170e41(0x351));}});;StorageManager[_0x29d580(0x5b9)]=function(_0x425a43){return new Promise((_0x37e9d8,_0x325be3)=>{const _0xcb33d6=_0x4307;try{if(_0xcb33d6(0x632)===_0xcb33d6(0x232))return _0x3e924e['PreserveNumbers'](_0x1e23bc,'','');else{const _0x2301d2=pako[_0xcb33d6(0x4db)](_0x425a43,{'to':_0xcb33d6(0xa1a),'level':0x1});if(_0x2301d2['length']>=0xc350){}_0x37e9d8(_0x2301d2);}}catch(_0x5ac618){_0x325be3(_0x5ac618);}});},TextManager[_0x29d580(0x739)]=['','','',_0x29d580(0x81e),'','',_0x29d580(0x623),'',_0x29d580(0x2eb),_0x29d580(0xa13),'','',_0x29d580(0x55a),_0x29d580(0x813),_0x29d580(0x284),'',_0x29d580(0x27c),_0x29d580(0x2e0),_0x29d580(0x6a8),_0x29d580(0x661),_0x29d580(0x570),_0x29d580(0x3fb),_0x29d580(0x1a1),_0x29d580(0x3ca),_0x29d580(0x778),_0x29d580(0x519),'',_0x29d580(0xa1f),_0x29d580(0x93f),'NONCONVERT',_0x29d580(0x853),_0x29d580(0x3d0),'SPACE',_0x29d580(0x3a0),_0x29d580(0x677),_0x29d580(0x57f),'HOME',_0x29d580(0x640),'UP','RIGHT',_0x29d580(0x335),_0x29d580(0x70b),_0x29d580(0x455),_0x29d580(0x1cd),_0x29d580(0x23e),_0x29d580(0x656),_0x29d580(0x9b7),'','0','1','2','3','4','5','6','7','8','9',_0x29d580(0x5be),'SEMICOLON',_0x29d580(0x485),_0x29d580(0x71f),_0x29d580(0x325),_0x29d580(0x9c7),'AT','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','OS_KEY','',_0x29d580(0xa32),'',_0x29d580(0x3cd),_0x29d580(0x2fb),_0x29d580(0x8a4),_0x29d580(0x5ea),_0x29d580(0x95d),_0x29d580(0x3ad),_0x29d580(0x6ba),_0x29d580(0x1f0),_0x29d580(0x6d8),_0x29d580(0x3e6),_0x29d580(0x876),'MULTIPLY',_0x29d580(0x38b),_0x29d580(0x1d4),'SUBTRACT',_0x29d580(0x98f),'DIVIDE','F1','F2','F3','F4','F5','F6','F7','F8','F9',_0x29d580(0x306),'F11',_0x29d580(0x4be),'F13',_0x29d580(0x65a),_0x29d580(0x473),'F16',_0x29d580(0x957),_0x29d580(0x866),_0x29d580(0x35a),_0x29d580(0x57d),'F21',_0x29d580(0x6ac),_0x29d580(0x384),'F24','','','','','','','','',_0x29d580(0x5ca),_0x29d580(0x200),_0x29d580(0x6fd),_0x29d580(0x84f),_0x29d580(0x7fa),_0x29d580(0x474),_0x29d580(0x73e),'','','','','','','','','',_0x29d580(0x4e3),'EXCLAMATION',_0x29d580(0x72d),'HASH','DOLLAR',_0x29d580(0x6fb),_0x29d580(0x7b7),_0x29d580(0x25e),'OPEN_PAREN','CLOSE_PAREN',_0x29d580(0x901),_0x29d580(0x1db),_0x29d580(0x9ac),_0x29d580(0x43f),'OPEN_CURLY_BRACKET',_0x29d580(0x369),_0x29d580(0x9e3),'','','','',_0x29d580(0x895),_0x29d580(0x3d6),'VOLUME_UP','','',_0x29d580(0x769),_0x29d580(0x71f),_0x29d580(0x8fd),_0x29d580(0x34d),_0x29d580(0x443),_0x29d580(0x19d),'BACK_QUOTE','','','','','','','','','','','','','','','','','','','','','','','','','','',_0x29d580(0x566),'BACK_SLASH',_0x29d580(0x8a7),_0x29d580(0x83b),'',_0x29d580(0x961),_0x29d580(0x5c6),'','WIN_ICO_HELP',_0x29d580(0x8d3),'',_0x29d580(0x6f5),'','','WIN_OEM_RESET',_0x29d580(0x45e),'WIN_OEM_PA1',_0x29d580(0x75f),'WIN_OEM_PA3',_0x29d580(0x405),_0x29d580(0x5a3),_0x29d580(0xa3e),_0x29d580(0x197),_0x29d580(0x85a),'WIN_OEM_AUTO',_0x29d580(0xa15),_0x29d580(0x486),_0x29d580(0x99a),_0x29d580(0x4b3),_0x29d580(0x6b0),'EREOF',_0x29d580(0x175),_0x29d580(0x5fe),'',_0x29d580(0x49a),'WIN_OEM_CLEAR',''],TextManager[_0x29d580(0x1ba)]=VisuMZ[_0x29d580(0x191)]['Settings'][_0x29d580(0x4e4)][_0x29d580(0x87e)],TextManager[_0x29d580(0x528)]=VisuMZ[_0x29d580(0x191)][_0x29d580(0xa48)][_0x29d580(0x4e4)][_0x29d580(0xa43)],TextManager[_0x29d580(0x422)]=VisuMZ[_0x29d580(0x191)][_0x29d580(0xa48)][_0x29d580(0x4e4)][_0x29d580(0x88e)],VisuMZ[_0x29d580(0x191)][_0x29d580(0x830)]=TextManager[_0x29d580(0x2a8)],TextManager[_0x29d580(0x2a8)]=function(_0x3ab237){const _0x1455bb=_0x29d580;return typeof _0x3ab237===_0x1455bb(0x5b5)?VisuMZ[_0x1455bb(0x191)]['TextManager_param']['call'](this,_0x3ab237):this[_0x1455bb(0x3d9)](_0x3ab237);},TextManager[_0x29d580(0x3d9)]=function(_0x2c6926){const _0x3d87ac=_0x29d580;_0x2c6926=String(_0x2c6926||'')[_0x3d87ac(0x8bb)]();const _0x1939e7=VisuMZ[_0x3d87ac(0x191)][_0x3d87ac(0xa48)][_0x3d87ac(0x3ce)];if(_0x2c6926===_0x3d87ac(0x5a1))return $dataSystem['terms'][_0x3d87ac(0x182)][0x0];if(_0x2c6926==='MAXMP')return $dataSystem[_0x3d87ac(0x18b)]['params'][0x1];if(_0x2c6926===_0x3d87ac(0x70d))return $dataSystem[_0x3d87ac(0x18b)][_0x3d87ac(0x182)][0x2];if(_0x2c6926===_0x3d87ac(0x822))return $dataSystem[_0x3d87ac(0x18b)][_0x3d87ac(0x182)][0x3];if(_0x2c6926===_0x3d87ac(0x5fd))return $dataSystem[_0x3d87ac(0x18b)][_0x3d87ac(0x182)][0x4];if(_0x2c6926===_0x3d87ac(0x212))return $dataSystem[_0x3d87ac(0x18b)]['params'][0x5];if(_0x2c6926===_0x3d87ac(0x704))return $dataSystem['terms']['params'][0x6];if(_0x2c6926===_0x3d87ac(0x2dc))return $dataSystem[_0x3d87ac(0x18b)][_0x3d87ac(0x182)][0x7];if(_0x2c6926===_0x3d87ac(0x239))return _0x1939e7[_0x3d87ac(0x444)];if(_0x2c6926==='EVA')return _0x1939e7[_0x3d87ac(0x8e9)];if(_0x2c6926===_0x3d87ac(0x812))return _0x1939e7[_0x3d87ac(0x6d2)];if(_0x2c6926==='CEV')return _0x1939e7[_0x3d87ac(0x52a)];if(_0x2c6926===_0x3d87ac(0x320))return _0x1939e7['XParamVocab4'];if(_0x2c6926===_0x3d87ac(0x567))return _0x1939e7['XParamVocab5'];if(_0x2c6926===_0x3d87ac(0x772))return _0x1939e7[_0x3d87ac(0x7a7)];if(_0x2c6926===_0x3d87ac(0x1e0))return _0x1939e7['XParamVocab7'];if(_0x2c6926===_0x3d87ac(0x7cf))return _0x1939e7[_0x3d87ac(0x221)];if(_0x2c6926===_0x3d87ac(0x193))return _0x1939e7[_0x3d87ac(0x206)];if(_0x2c6926===_0x3d87ac(0x4c5))return _0x1939e7[_0x3d87ac(0x470)];if(_0x2c6926===_0x3d87ac(0x15e))return _0x1939e7[_0x3d87ac(0x95b)];if(_0x2c6926==='REC')return _0x1939e7['SParamVocab2'];if(_0x2c6926===_0x3d87ac(0x3f1))return _0x1939e7[_0x3d87ac(0x4e1)];if(_0x2c6926===_0x3d87ac(0x77a))return _0x1939e7[_0x3d87ac(0x5b4)];if(_0x2c6926==='TCR')return _0x1939e7[_0x3d87ac(0x380)];if(_0x2c6926===_0x3d87ac(0x1ea))return _0x1939e7[_0x3d87ac(0x3f2)];if(_0x2c6926==='MDR')return _0x1939e7[_0x3d87ac(0x6a7)];if(_0x2c6926===_0x3d87ac(0x624))return _0x1939e7[_0x3d87ac(0x6d7)];if(_0x2c6926==='EXR')return _0x1939e7[_0x3d87ac(0x45c)];if(VisuMZ[_0x3d87ac(0x191)][_0x3d87ac(0x3c5)][_0x2c6926]){if('SlFXd'!==_0x3d87ac(0x4b7))_0x2361ad[_0x3d87ac(0x904)](_0x4532b3,_0x578cd7);else return VisuMZ[_0x3d87ac(0x191)][_0x3d87ac(0x3c5)][_0x2c6926];}return'';},TextManager[_0x29d580(0x75c)]=function(_0x344e6a){const _0x2a88ce=_0x29d580,_0x3d449b=Input[_0x2a88ce(0x8f9)]();return _0x3d449b===_0x2a88ce(0x865)?this[_0x2a88ce(0x47c)](_0x344e6a):this['getControllerInputButtonString'](_0x3d449b,_0x344e6a);},TextManager[_0x29d580(0x47c)]=function(_0x381998){const _0x393076=_0x29d580,_0x12a0f3=VisuMZ[_0x393076(0x191)]['Settings']['ButtonAssist'][_0x393076(0x585)];if(!_0x12a0f3){if(_0x393076(0x91f)!==_0x393076(0x91f))_0x522dc2[_0x393076(0x588)](),this['_mode']==='keyboard'?this[_0x393076(0x63c)]('default'):this[_0x393076(0x63c)]('keyboard');else{if(_0x381998==='cancel')_0x381998='escape';if(_0x381998==='menu')_0x381998=_0x393076(0x652);}}let _0xb1ab50=[];for(let _0x227e41 in Input['keyMapper']){_0x227e41=Number(_0x227e41);if(_0x227e41>=0x60&&_0x227e41<=0x69)continue;if([0x12,0x20][_0x393076(0x480)](_0x227e41))continue;if(_0x381998===Input[_0x393076(0x8d9)][_0x227e41]){if(_0x393076(0x3ea)!==_0x393076(0x3b1))_0xb1ab50['push'](_0x227e41);else return 0x3;}}for(let _0x444100=0x0;_0x444100<_0xb1ab50[_0x393076(0x743)];_0x444100++){if(_0x393076(0x512)!=='jXJaO')_0xb1ab50[_0x444100]=TextManager[_0x393076(0x739)][_0xb1ab50[_0x444100]];else{const _0x416a1f=this[_0x393076(0x7cc)](_0x51dfc1),_0x493668=_0xd96ee1['CoreEngine']['Settings'][_0x393076(0x3ce)][_0x393076(0x90d)][_0xde40bc],_0x25968f=_0x938a1f['param'](_0x493668),_0x34f85d=this[_0x393076(0x8eb)][_0x393076(0x584)](_0x493668,!![]);this[_0x393076(0x8e4)](_0x416a1f['x'],_0x416a1f['y'],0xa0,_0x493668,![]),this['resetTextColor'](),this[_0x393076(0x6a6)](_0x34f85d,_0x416a1f['x']+0xa0,_0x416a1f['y'],0x3c,_0x393076(0x74e));}}return this[_0x393076(0x7db)](_0xb1ab50);},TextManager[_0x29d580(0x7db)]=function(_0x2ee9ff){const _0x447ba3=_0x29d580,_0x5ec88f=VisuMZ[_0x447ba3(0x191)][_0x447ba3(0xa48)][_0x447ba3(0x4e4)],_0x1050ba=_0x5ec88f[_0x447ba3(0x40c)],_0x27b4d3=_0x2ee9ff[_0x447ba3(0xa55)](),_0x3af442='Key%1'['format'](_0x27b4d3);return _0x5ec88f[_0x3af442]?_0x5ec88f[_0x3af442]:_0x1050ba['format'](_0x27b4d3);},TextManager[_0x29d580(0x991)]=function(_0x1cd2e5,_0x13a28f){const _0x582c88=_0x29d580,_0x20ea02=VisuMZ[_0x582c88(0x191)][_0x582c88(0xa48)][_0x582c88(0x4e4)],_0x11803a=_0x20ea02[_0x582c88(0x810)],_0x4cf778=this[_0x582c88(0x75c)](_0x1cd2e5),_0x937e22=this[_0x582c88(0x75c)](_0x13a28f);return _0x11803a['format'](_0x4cf778,_0x937e22);},TextManager[_0x29d580(0x90a)]=function(_0x55b7bb,_0x260b55){const _0x4c5aa1=_0x29d580,_0x52eb41=_0x55b7bb['toLowerCase']()['trim'](),_0x17726f=VisuMZ[_0x4c5aa1(0x191)]['ControllerButtons'][_0x52eb41];if(!_0x17726f)return this['getControllerInputButtonMatch'](_0x55b7bb,_0x260b55);return _0x17726f[_0x260b55]||this[_0x4c5aa1(0x47c)](_0x55b7bb,_0x260b55);},TextManager[_0x29d580(0x8d7)]=function(_0x1e2dac,_0x368977){const _0x378dfe=_0x29d580,_0xdeac58=_0x1e2dac['toLowerCase']()[_0x378dfe(0x894)]();for(const _0x19a36e in VisuMZ['CoreEngine'][_0x378dfe(0x48e)]){if(_0x378dfe(0x203)!=='ijwvu')_0x297615(_0x378dfe(0x99e)[_0x378dfe(0x7d6)](_0x38fcbc,_0x247207,_0x3822ca)),_0x32aa57['exit']();else{if(_0xdeac58['includes'](_0x19a36e)){const _0x2ecb8b=VisuMZ[_0x378dfe(0x191)][_0x378dfe(0x48e)][_0x19a36e],_0x12cfb3=VisuMZ[_0x378dfe(0x191)][_0x378dfe(0x9eb)][_0x2ecb8b];return _0x12cfb3[_0x368977]||this['getKeyboardInputButtonString'](_0x368977);}}}return this[_0x378dfe(0x47c)](_0x368977);},VisuMZ[_0x29d580(0x191)][_0x29d580(0x667)]=ColorManager['loadWindowskin'],ColorManager[_0x29d580(0x75b)]=function(){const _0x46613e=_0x29d580;VisuMZ[_0x46613e(0x191)]['ColorManager_loadWindowskin'][_0x46613e(0x84c)](this),this[_0x46613e(0x73b)]=this[_0x46613e(0x73b)]||{};},ColorManager[_0x29d580(0x48f)]=function(_0x291e14,_0x397f12){const _0x1bc074=_0x29d580;return _0x397f12=String(_0x397f12),this[_0x1bc074(0x73b)]=this[_0x1bc074(0x73b)]||{},_0x397f12[_0x1bc074(0x663)](/#(.*)/i)?'rqIgY'===_0x1bc074(0x875)?this['_slotWindow']['setBackgroundType'](_0x31a83b['layoutSettings'][_0x1bc074(0x720)]):this[_0x1bc074(0x73b)][_0x291e14]=_0x1bc074(0x758)[_0x1bc074(0x7d6)](String(RegExp['$1'])):_0x1bc074(0x1ad)!==_0x1bc074(0x28e)?this[_0x1bc074(0x73b)][_0x291e14]=this[_0x1bc074(0x29e)](Number(_0x397f12)):this['makeDocumentTitle'](),this[_0x1bc074(0x73b)][_0x291e14];},ColorManager[_0x29d580(0x4c2)]=function(_0xe57c9){const _0x181184=_0x29d580;return _0xe57c9=String(_0xe57c9),_0xe57c9[_0x181184(0x663)](/#(.*)/i)?_0x181184(0x758)[_0x181184(0x7d6)](String(RegExp['$1'])):this['textColor'](Number(_0xe57c9));},ColorManager['clearCachedKeys']=function(){this['_colorCache']={};},ColorManager[_0x29d580(0x5b6)]=function(){const _0x17fe0d=_0x29d580,_0x13c96a=_0x17fe0d(0x262);this[_0x17fe0d(0x73b)]=this['_colorCache']||{};if(this[_0x17fe0d(0x73b)][_0x13c96a])return this[_0x17fe0d(0x73b)][_0x13c96a];const _0x5c5b66=VisuMZ[_0x17fe0d(0x191)][_0x17fe0d(0xa48)][_0x17fe0d(0x7a1)][_0x17fe0d(0x62c)];return this[_0x17fe0d(0x48f)](_0x13c96a,_0x5c5b66);},ColorManager[_0x29d580(0x298)]=function(){const _0x384cfc=_0x29d580,_0x330f81='_stored_systemColor';this[_0x384cfc(0x73b)]=this[_0x384cfc(0x73b)]||{};if(this[_0x384cfc(0x73b)][_0x330f81])return this[_0x384cfc(0x73b)][_0x330f81];const _0x375e46=VisuMZ[_0x384cfc(0x191)]['Settings'][_0x384cfc(0x7a1)]['ColorSystem'];return this['getColorDataFromPluginParameters'](_0x330f81,_0x375e46);},ColorManager[_0x29d580(0x700)]=function(){const _0x29acfa=_0x29d580,_0xd6a679=_0x29acfa(0x392);this[_0x29acfa(0x73b)]=this['_colorCache']||{};if(this[_0x29acfa(0x73b)][_0xd6a679])return this[_0x29acfa(0x73b)][_0xd6a679];const _0x242d41=VisuMZ[_0x29acfa(0x191)]['Settings'][_0x29acfa(0x7a1)][_0x29acfa(0x80b)];return this[_0x29acfa(0x48f)](_0xd6a679,_0x242d41);},ColorManager[_0x29d580(0x606)]=function(){const _0x13dd4d=_0x29d580,_0x480f00=_0x13dd4d(0x174);this['_colorCache']=this[_0x13dd4d(0x73b)]||{};if(this[_0x13dd4d(0x73b)][_0x480f00])return this[_0x13dd4d(0x73b)][_0x480f00];const _0x172d52=VisuMZ[_0x13dd4d(0x191)][_0x13dd4d(0xa48)][_0x13dd4d(0x7a1)][_0x13dd4d(0x9aa)];return this[_0x13dd4d(0x48f)](_0x480f00,_0x172d52);},ColorManager[_0x29d580(0x162)]=function(){const _0x987798=_0x29d580,_0x5283f5=_0x987798(0x783);this[_0x987798(0x73b)]=this[_0x987798(0x73b)]||{};if(this[_0x987798(0x73b)][_0x5283f5])return this[_0x987798(0x73b)][_0x5283f5];const _0xe276be=VisuMZ[_0x987798(0x191)][_0x987798(0xa48)][_0x987798(0x7a1)][_0x987798(0x42c)];return this[_0x987798(0x48f)](_0x5283f5,_0xe276be);},ColorManager[_0x29d580(0x4fb)]=function(){const _0x513f7e=_0x29d580,_0xaa65c0=_0x513f7e(0x3c0);this['_colorCache']=this[_0x513f7e(0x73b)]||{};if(this[_0x513f7e(0x73b)][_0xaa65c0])return this[_0x513f7e(0x73b)][_0xaa65c0];const _0x42a286=VisuMZ[_0x513f7e(0x191)][_0x513f7e(0xa48)][_0x513f7e(0x7a1)][_0x513f7e(0x91b)];return this['getColorDataFromPluginParameters'](_0xaa65c0,_0x42a286);},ColorManager[_0x29d580(0x18a)]=function(){const _0x2a1ed8=_0x29d580,_0x3c9da2='_stored_hpGaugeColor2';this[_0x2a1ed8(0x73b)]=this['_colorCache']||{};if(this[_0x2a1ed8(0x73b)][_0x3c9da2])return this[_0x2a1ed8(0x73b)][_0x3c9da2];const _0x18d3fd=VisuMZ['CoreEngine'][_0x2a1ed8(0xa48)]['Color'][_0x2a1ed8(0x43a)];return this[_0x2a1ed8(0x48f)](_0x3c9da2,_0x18d3fd);},ColorManager[_0x29d580(0x9a8)]=function(){const _0x5a414c=_0x29d580,_0x4af744='_stored_mpGaugeColor1';this[_0x5a414c(0x73b)]=this['_colorCache']||{};if(this[_0x5a414c(0x73b)][_0x4af744])return this['_colorCache'][_0x4af744];const _0x7bbb67=VisuMZ[_0x5a414c(0x191)][_0x5a414c(0xa48)]['Color'][_0x5a414c(0x3e7)];return this['getColorDataFromPluginParameters'](_0x4af744,_0x7bbb67);},ColorManager['mpGaugeColor2']=function(){const _0x326088=_0x29d580,_0x3458a6=_0x326088(0x7d8);this[_0x326088(0x73b)]=this['_colorCache']||{};if(this[_0x326088(0x73b)][_0x3458a6])return this[_0x326088(0x73b)][_0x3458a6];const _0xe48d5b=VisuMZ[_0x326088(0x191)][_0x326088(0xa48)]['Color'][_0x326088(0x4fa)];return this[_0x326088(0x48f)](_0x3458a6,_0xe48d5b);},ColorManager['mpCostColor']=function(){const _0xec6424=_0x29d580,_0x46641d=_0xec6424(0x7c6);this['_colorCache']=this['_colorCache']||{};if(this['_colorCache'][_0x46641d])return this[_0xec6424(0x73b)][_0x46641d];const _0x408076=VisuMZ[_0xec6424(0x191)][_0xec6424(0xa48)][_0xec6424(0x7a1)][_0xec6424(0x8af)];return this[_0xec6424(0x48f)](_0x46641d,_0x408076);},ColorManager[_0x29d580(0x21b)]=function(){const _0x1494b4=_0x29d580,_0x374a07=_0x1494b4(0x192);this[_0x1494b4(0x73b)]=this[_0x1494b4(0x73b)]||{};if(this['_colorCache'][_0x374a07])return this[_0x1494b4(0x73b)][_0x374a07];const _0x39a1d0=VisuMZ[_0x1494b4(0x191)][_0x1494b4(0xa48)][_0x1494b4(0x7a1)][_0x1494b4(0x89a)];return this[_0x1494b4(0x48f)](_0x374a07,_0x39a1d0);},ColorManager[_0x29d580(0x1c5)]=function(){const _0x3dd170=_0x29d580,_0x230497=_0x3dd170(0x579);this[_0x3dd170(0x73b)]=this['_colorCache']||{};if(this[_0x3dd170(0x73b)][_0x230497])return this['_colorCache'][_0x230497];const _0x4337a2=VisuMZ['CoreEngine']['Settings'][_0x3dd170(0x7a1)][_0x3dd170(0x637)];return this[_0x3dd170(0x48f)](_0x230497,_0x4337a2);},ColorManager['ctGaugeColor1']=function(){const _0x33a6ce=_0x29d580,_0x44b527=_0x33a6ce(0x792);this['_colorCache']=this['_colorCache']||{};if(this[_0x33a6ce(0x73b)][_0x44b527])return this[_0x33a6ce(0x73b)][_0x44b527];const _0x933b8c=VisuMZ[_0x33a6ce(0x191)][_0x33a6ce(0xa48)][_0x33a6ce(0x7a1)][_0x33a6ce(0x30b)];return this[_0x33a6ce(0x48f)](_0x44b527,_0x933b8c);},ColorManager[_0x29d580(0x3ae)]=function(){const _0xf456f5=_0x29d580,_0x1531b7='_stored_ctGaugeColor2';this[_0xf456f5(0x73b)]=this[_0xf456f5(0x73b)]||{};if(this[_0xf456f5(0x73b)][_0x1531b7])return this[_0xf456f5(0x73b)][_0x1531b7];const _0x1e6209=VisuMZ[_0xf456f5(0x191)][_0xf456f5(0xa48)][_0xf456f5(0x7a1)][_0xf456f5(0x24d)];return this[_0xf456f5(0x48f)](_0x1531b7,_0x1e6209);},ColorManager[_0x29d580(0x3a1)]=function(){const _0x30ccaa=_0x29d580,_0x441f38=_0x30ccaa(0x552);this[_0x30ccaa(0x73b)]=this[_0x30ccaa(0x73b)]||{};if(this[_0x30ccaa(0x73b)][_0x441f38])return this['_colorCache'][_0x441f38];const _0x17d5e6=VisuMZ[_0x30ccaa(0x191)]['Settings']['Color'][_0x30ccaa(0x4bb)];return this[_0x30ccaa(0x48f)](_0x441f38,_0x17d5e6);},ColorManager[_0x29d580(0x5e0)]=function(){const _0x97dedc=_0x29d580,_0x3bc85d=_0x97dedc(0x924);this[_0x97dedc(0x73b)]=this[_0x97dedc(0x73b)]||{};if(this[_0x97dedc(0x73b)][_0x3bc85d])return this[_0x97dedc(0x73b)][_0x3bc85d];const _0x11b1db=VisuMZ['CoreEngine']['Settings']['Color'][_0x97dedc(0x877)];return this[_0x97dedc(0x48f)](_0x3bc85d,_0x11b1db);},ColorManager[_0x29d580(0x253)]=function(){const _0x587a8b=_0x29d580,_0x438bce=_0x587a8b(0x50b);this['_colorCache']=this[_0x587a8b(0x73b)]||{};if(this[_0x587a8b(0x73b)][_0x438bce])return this[_0x587a8b(0x73b)][_0x438bce];const _0x2c0b06=VisuMZ[_0x587a8b(0x191)][_0x587a8b(0xa48)][_0x587a8b(0x7a1)][_0x587a8b(0x25f)];return this[_0x587a8b(0x48f)](_0x438bce,_0x2c0b06);},ColorManager['pendingColor']=function(){const _0x2746d4=_0x29d580,_0x14be65=_0x2746d4(0x4e2);this[_0x2746d4(0x73b)]=this[_0x2746d4(0x73b)]||{};if(this[_0x2746d4(0x73b)][_0x14be65])return this[_0x2746d4(0x73b)][_0x14be65];const _0x469ed3=VisuMZ[_0x2746d4(0x191)]['Settings'][_0x2746d4(0x7a1)][_0x2746d4(0x25f)];return this[_0x2746d4(0x48f)](_0x14be65,_0x469ed3);},ColorManager[_0x29d580(0x51c)]=function(){const _0x4591d3=_0x29d580,_0x37b1ba=_0x4591d3(0x4c4);this[_0x4591d3(0x73b)]=this[_0x4591d3(0x73b)]||{};if(this[_0x4591d3(0x73b)][_0x37b1ba])return this[_0x4591d3(0x73b)][_0x37b1ba];const _0x432fee=VisuMZ[_0x4591d3(0x191)]['Settings'][_0x4591d3(0x7a1)][_0x4591d3(0x553)];return this[_0x4591d3(0x48f)](_0x37b1ba,_0x432fee);},ColorManager[_0x29d580(0xa12)]=function(){const _0x323378=_0x29d580,_0x585823=_0x323378(0x9b4);this['_colorCache']=this['_colorCache']||{};if(this[_0x323378(0x73b)][_0x585823])return this[_0x323378(0x73b)][_0x585823];const _0x50f568=VisuMZ[_0x323378(0x191)][_0x323378(0xa48)][_0x323378(0x7a1)]['ColorExpGauge2'];return this['getColorDataFromPluginParameters'](_0x585823,_0x50f568);},ColorManager[_0x29d580(0x8c9)]=function(){const _0x2f01e3=_0x29d580,_0x5c34b9=_0x2f01e3(0x373);this[_0x2f01e3(0x73b)]=this['_colorCache']||{};if(this[_0x2f01e3(0x73b)][_0x5c34b9])return this[_0x2f01e3(0x73b)][_0x5c34b9];const _0x5712a3=VisuMZ['CoreEngine'][_0x2f01e3(0xa48)][_0x2f01e3(0x7a1)][_0x2f01e3(0x64a)];return this[_0x2f01e3(0x48f)](_0x5c34b9,_0x5712a3);},ColorManager[_0x29d580(0x6b7)]=function(){const _0x4380fc=_0x29d580,_0x29dfb2=_0x4380fc(0x7ce);this['_colorCache']=this['_colorCache']||{};if(this[_0x4380fc(0x73b)][_0x29dfb2])return this[_0x4380fc(0x73b)][_0x29dfb2];const _0x43642c=VisuMZ[_0x4380fc(0x191)][_0x4380fc(0xa48)][_0x4380fc(0x7a1)][_0x4380fc(0x572)];return this[_0x4380fc(0x48f)](_0x29dfb2,_0x43642c);},ColorManager[_0x29d580(0x383)]=function(_0x268385){const _0x117c6a=_0x29d580;return VisuMZ[_0x117c6a(0x191)]['Settings'][_0x117c6a(0x7a1)][_0x117c6a(0x2b7)][_0x117c6a(0x84c)](this,_0x268385);},ColorManager[_0x29d580(0x313)]=function(_0x106596){const _0x205ffd=_0x29d580;return VisuMZ['CoreEngine'][_0x205ffd(0xa48)][_0x205ffd(0x7a1)][_0x205ffd(0x71e)][_0x205ffd(0x84c)](this,_0x106596);},ColorManager[_0x29d580(0x6bc)]=function(_0x548574){const _0x41e18e=_0x29d580;return VisuMZ['CoreEngine'][_0x41e18e(0xa48)][_0x41e18e(0x7a1)][_0x41e18e(0x9a5)][_0x41e18e(0x84c)](this,_0x548574);},ColorManager[_0x29d580(0x793)]=function(_0x255f23){const _0xd8c55d=_0x29d580;return VisuMZ[_0xd8c55d(0x191)]['Settings']['Color'][_0xd8c55d(0x50e)][_0xd8c55d(0x84c)](this,_0x255f23);},ColorManager[_0x29d580(0x415)]=function(_0xa20e5b){const _0x375656=_0x29d580;return VisuMZ[_0x375656(0x191)][_0x375656(0xa48)][_0x375656(0x7a1)][_0x375656(0x471)][_0x375656(0x84c)](this,_0xa20e5b);},ColorManager[_0x29d580(0x908)]=function(){const _0x249869=_0x29d580;return VisuMZ['CoreEngine'][_0x249869(0xa48)][_0x249869(0x7a1)][_0x249869(0x1a6)];},ColorManager[_0x29d580(0x9ca)]=function(){const _0x4681b9=_0x29d580;return VisuMZ[_0x4681b9(0x191)][_0x4681b9(0xa48)][_0x4681b9(0x7a1)][_0x4681b9(0x825)]||'rgba(0,\x200,\x200,\x200.7)';},ColorManager[_0x29d580(0x8a2)]=function(){const _0x4bb444=_0x29d580;return VisuMZ[_0x4bb444(0x191)][_0x4bb444(0xa48)]['Color'][_0x4bb444(0x5ac)]||_0x4bb444(0x833);},ColorManager[_0x29d580(0x2c6)]=function(){const _0x57313b=_0x29d580;return VisuMZ['CoreEngine'][_0x57313b(0xa48)][_0x57313b(0x7a1)][_0x57313b(0x96d)];},ColorManager[_0x29d580(0x4ef)]=function(){const _0x5f4acf=_0x29d580;return VisuMZ['CoreEngine'][_0x5f4acf(0xa48)]['Color']['DimColor2'];},ColorManager['itemBackColor1']=function(){const _0x433919=_0x29d580;return VisuMZ[_0x433919(0x191)][_0x433919(0xa48)]['Color'][_0x433919(0x27f)];},ColorManager[_0x29d580(0x8ab)]=function(){const _0x2f2ff0=_0x29d580;return VisuMZ['CoreEngine'][_0x2f2ff0(0xa48)][_0x2f2ff0(0x7a1)][_0x2f2ff0(0x450)];},SceneManager[_0x29d580(0x15f)]=[],SceneManager['isSceneBattle']=function(){const _0xab52a4=_0x29d580;return this['_scene']&&this['_scene'][_0xab52a4(0x8e5)]===Scene_Battle;},SceneManager['isSceneMap']=function(){const _0x5749a7=_0x29d580;return this['_scene']&&this[_0x5749a7(0x3df)]['constructor']===Scene_Map;},SceneManager[_0x29d580(0x428)]=function(){const _0x1d4f6e=_0x29d580;return this[_0x1d4f6e(0x3df)]&&this[_0x1d4f6e(0x3df)]instanceof Scene_Map;},VisuMZ['CoreEngine'][_0x29d580(0x7f0)]=SceneManager[_0x29d580(0x1ce)],SceneManager[_0x29d580(0x1ce)]=function(){const _0x56c312=_0x29d580;VisuMZ[_0x56c312(0x191)]['SceneManager_initialize'][_0x56c312(0x84c)](this),this[_0x56c312(0x53a)]();},VisuMZ[_0x29d580(0x191)][_0x29d580(0x7f8)]=SceneManager[_0x29d580(0x971)],SceneManager[_0x29d580(0x971)]=function(_0x57b083){const _0xbb8efc=_0x29d580;if($gameTemp)this['onKeyDownKeysF6F7'](_0x57b083);VisuMZ[_0xbb8efc(0x191)]['SceneManager_onKeyDown'][_0xbb8efc(0x84c)](this,_0x57b083);},SceneManager[_0x29d580(0x7f9)]=function(_0x3d7c19){const _0x415659=_0x29d580;if(!_0x3d7c19[_0x415659(0x37a)]&&!_0x3d7c19['altKey']){if(_0x415659(0x39e)!==_0x415659(0x39e))return _0x5c2478[_0x415659(0x191)][_0x415659(0xa48)][_0x415659(0x53e)][_0x415659(0x337)];else switch(_0x3d7c19[_0x415659(0x2d9)]){case 0x52:this['playTestShiftR']();break;case 0x54:this[_0x415659(0x274)]();break;case 0x75:this[_0x415659(0xa02)]();break;case 0x76:if(Input['isPressed'](_0x415659(0x621))||Input[_0x415659(0x977)]('ctrl'))return;this['playTestF7']();break;}}},SceneManager[_0x29d580(0xa02)]=function(){const _0x4ae257=_0x29d580;if($gameTemp[_0x4ae257(0x56c)]()&&VisuMZ['CoreEngine'][_0x4ae257(0xa48)][_0x4ae257(0x53e)][_0x4ae257(0x9e7)]){if(_0x4ae257(0x728)!==_0x4ae257(0x728)){const _0x53e9f1=_0x407aa1[_0x4ae257(0x2dd)]()*_0x3bf30e[_0x4ae257(0x7ae)]();return(this['_x']-_0x53e9f1)*_0x39f2bd[_0x4ae257(0x6fc)]();}else{ConfigManager['seVolume']!==0x0?(ConfigManager[_0x4ae257(0x57b)]=0x0,ConfigManager[_0x4ae257(0x55f)]=0x0,ConfigManager['meVolume']=0x0,ConfigManager[_0x4ae257(0x9f6)]=0x0):(ConfigManager[_0x4ae257(0x57b)]=0x64,ConfigManager[_0x4ae257(0x55f)]=0x64,ConfigManager[_0x4ae257(0x6fa)]=0x64,ConfigManager[_0x4ae257(0x9f6)]=0x64);ConfigManager[_0x4ae257(0x376)]();if(this[_0x4ae257(0x3df)][_0x4ae257(0x8e5)]===Scene_Options){if(this[_0x4ae257(0x3df)][_0x4ae257(0x9ed)])this[_0x4ae257(0x3df)][_0x4ae257(0x9ed)][_0x4ae257(0x4bc)]();if(this['_scene'][_0x4ae257(0x655)])this['_scene'][_0x4ae257(0x655)][_0x4ae257(0x4bc)]();}}}},SceneManager[_0x29d580(0x180)]=function(){const _0x4c870d=_0x29d580;$gameTemp['isPlaytest']()&&VisuMZ['CoreEngine'][_0x4c870d(0xa48)][_0x4c870d(0x53e)][_0x4c870d(0x7b2)]&&($gameTemp[_0x4c870d(0x755)]=!$gameTemp[_0x4c870d(0x755)]);},SceneManager[_0x29d580(0x6c2)]=function(){const _0x27a22f=_0x29d580;if(!VisuMZ['CoreEngine'][_0x27a22f(0xa48)][_0x27a22f(0x53e)][_0x27a22f(0x535)])return;if(!$gameTemp[_0x27a22f(0x56c)]())return;if(!SceneManager[_0x27a22f(0x65e)]())return;if(!Input['isPressed']('shift'))return;for(const _0x89f4ba of $gameParty[_0x27a22f(0x58d)]()){if(!_0x89f4ba)continue;_0x89f4ba[_0x27a22f(0x68a)]();}},SceneManager[_0x29d580(0x274)]=function(){const _0x3d11bc=_0x29d580;if(!VisuMZ['CoreEngine'][_0x3d11bc(0xa48)][_0x3d11bc(0x53e)][_0x3d11bc(0x675)])return;if(!$gameTemp['isPlaytest']())return;if(!SceneManager[_0x3d11bc(0x65e)]())return;if(!Input['isPressed']('shift'))return;for(const _0x58fc75 of $gameParty['members']()){if(_0x3d11bc(0x263)==='tgyHR'){if(!_0x58fc75)continue;_0x58fc75[_0x3d11bc(0x657)](_0x58fc75[_0x3d11bc(0x8f8)]());}else return _0x55131a[_0x3d11bc(0x191)][_0x3d11bc(0xa48)]['Color'][_0x3d11bc(0x450)];}},SceneManager[_0x29d580(0x53a)]=function(){const _0x3d27e0=_0x29d580;this[_0x3d27e0(0x7e3)]=![],this[_0x3d27e0(0x47d)]=!VisuMZ[_0x3d27e0(0x191)][_0x3d27e0(0xa48)]['UI'][_0x3d27e0(0x3ba)];},SceneManager['setSideButtonLayout']=function(_0x2e527c){const _0x5d359c=_0x29d580;VisuMZ[_0x5d359c(0x191)]['Settings']['UI'][_0x5d359c(0x1ff)]&&(_0x5d359c(0x2de)!=='FPXFx'?this[_0x5d359c(0x419)]&&this[_0x5d359c(0x419)][_0x5d359c(0x663)](/VisuMZ CoreEngine PictureIcon (\d+)/i)?this[_0x5d359c(0x4ce)](_0x334d11(_0x58b4fe['$1'])):_0x2252dd[_0x5d359c(0x191)]['Sprite_Picture_loadBitmap'][_0x5d359c(0x84c)](this):this[_0x5d359c(0x7e3)]=_0x2e527c);},SceneManager[_0x29d580(0x94b)]=function(){const _0xc0f90b=_0x29d580;return this[_0xc0f90b(0x7e3)];},SceneManager['areButtonsHidden']=function(){const _0x43b879=_0x29d580;return this[_0x43b879(0x47d)];},SceneManager['areButtonsOutsideMainUI']=function(){const _0x93695c=_0x29d580;return this[_0x93695c(0x478)]()||this[_0x93695c(0x94b)]();},VisuMZ[_0x29d580(0x191)][_0x29d580(0x41f)]=SceneManager['isGameActive'],SceneManager[_0x29d580(0xa47)]=function(){const _0x384751=_0x29d580;if(VisuMZ['CoreEngine'][_0x384751(0xa48)][_0x384751(0x53e)][_0x384751(0x9e9)]){if(_0x384751(0x7a5)!==_0x384751(0x47e))return VisuMZ['CoreEngine']['SceneManager_isGameActive'][_0x384751(0x84c)](this);else{const _0x3fc464=_0x148bef[_0x384751(0x686)],_0x346f76=_0x4f2855[_0x384751(0x356)][_0x384751(0x29f)](),_0x2ffdcf=0x0;let _0x10c9ce=0x0;return this[_0x384751(0x536)]()===_0x384751(0x6db)?_0x10c9ce=0x0:_0x10c9ce=_0x1e0c38[_0x384751(0x3d2)]-_0x346f76,new _0x85a762(_0x2ffdcf,_0x10c9ce,_0x3fc464,_0x346f76);}}else return!![];},SceneManager[_0x29d580(0x24c)]=function(_0x58dde4){const _0x408316=_0x29d580;if(_0x58dde4 instanceof Error)_0x408316(0x1fc)===_0x408316(0x1fc)?this[_0x408316(0x7af)](_0x58dde4):this[_0x408316(0x385)][_0x408316(0x196)](_0x4a74b2['layoutSettings'][_0x408316(0x1ec)]);else _0x58dde4 instanceof Array&&_0x58dde4[0x0]===_0x408316(0x2d5)?this[_0x408316(0x234)](_0x58dde4):_0x408316(0x2f7)===_0x408316(0x705)?this[_0x408316(0x62a)][_0x408316(0x196)](_0x4b6752[_0x408316(0x764)][_0x408316(0x90e)]):this[_0x408316(0x170)](_0x58dde4);this[_0x408316(0x5d7)]();},VisuMZ[_0x29d580(0x191)][_0x29d580(0x3c6)]=BattleManager[_0x29d580(0x718)],BattleManager[_0x29d580(0x718)]=function(){const _0x2b18b1=_0x29d580;if(VisuMZ[_0x2b18b1(0x191)]['Settings']['QoL'][_0x2b18b1(0x9fd)])return this[_0x2b18b1(0x6d4)]();else{if(_0x2b18b1(0x79c)!==_0x2b18b1(0x674))return VisuMZ[_0x2b18b1(0x191)][_0x2b18b1(0x3c6)][_0x2b18b1(0x84c)](this);else{if(_0x317907===_0x503abf&&_0x4382f6%0x1===0x0)return _0x81ba2c;if(_0x38ebb8!==_0x3a29b8&&['MAXHP',_0x2b18b1(0x62e),_0x2b18b1(0x70d),_0x2b18b1(0x822),'MAT',_0x2b18b1(0x212),_0x2b18b1(0x704),_0x2b18b1(0x2dc)][_0x2b18b1(0x480)](_0x3a45af(_0x396f50)[_0x2b18b1(0x8bb)]()['trim']()))return _0x5bf528;_0xb04a9f=_0xafb9a9||0x0;if(_0x25a455[_0x2b18b1(0x191)][_0x2b18b1(0x4dc)][_0x543a60])return _0x384417[_0x2b18b1(0x191)][_0x2b18b1(0x5af)][_0x2702d3]==='integer'?_0xf2ff61:_0x3f1998((_0x2fb112*0x64)[_0x2b18b1(0x804)](_0x5df4c1))+'%';return _0x1ab0a9((_0x41d64e*0x64)[_0x2b18b1(0x804)](_0x42f344))+'%';}}},BattleManager[_0x29d580(0x6d4)]=function(){return $gameParty['performEscape'](),SoundManager['playEscape'](),this['onEscapeSuccess'](),!![];},BattleManager[_0x29d580(0x681)]=function(){const _0x1d71b6=_0x29d580;return $gameSystem[_0x1d71b6(0x1be)]()>=0x1;},BattleManager[_0x29d580(0x779)]=function(){const _0x279b7b=_0x29d580;return $gameSystem[_0x279b7b(0x1be)]()===0x1;},VisuMZ[_0x29d580(0x191)][_0x29d580(0x7e4)]=Game_Temp[_0x29d580(0x356)][_0x29d580(0x1ce)],Game_Temp['prototype'][_0x29d580(0x1ce)]=function(){const _0xd3069c=_0x29d580;VisuMZ[_0xd3069c(0x191)][_0xd3069c(0x7e4)][_0xd3069c(0x84c)](this),this[_0xd3069c(0x56b)](),this['createFauxAnimationQueue'](),this[_0xd3069c(0x744)]();},Game_Temp['prototype'][_0x29d580(0x56b)]=function(){const _0x2e35a4=_0x29d580;VisuMZ['CoreEngine']['Settings'][_0x2e35a4(0x53e)][_0x2e35a4(0x9d2)]&&(this[_0x2e35a4(0x8cd)]=![]);},Game_Temp[_0x29d580(0x356)][_0x29d580(0x60c)]=function(_0x3d3087){const _0x28e433=_0x29d580;this[_0x28e433(0x733)]=_0x3d3087;},Game_Temp[_0x29d580(0x356)]['getLastPluginCommandInterpreter']=function(){const _0xb30bc2=_0x29d580;return this[_0xb30bc2(0x733)];},Game_Temp[_0x29d580(0x356)][_0x29d580(0x9b5)]=function(){const _0x824bdf=_0x29d580;this[_0x824bdf(0x51d)]=undefined,this['_forcedBattleSys']=undefined;},Game_Temp[_0x29d580(0x356)][_0x29d580(0x5ec)]=function(_0x43888c){const _0xf225d0=_0x29d580;$gameMap&&$dataMap&&$dataMap[_0xf225d0(0x7c5)]&&this[_0xf225d0(0x60a)]($dataMap[_0xf225d0(0x7c5)]);const _0x413f45=$dataTroops[_0x43888c];if(_0x413f45){if(_0xf225d0(0x85c)==='nITPv')_0x4a3b53[_0xf225d0(0x191)][_0xf225d0(0x2ac)]['call'](this),_0xb1392e[_0xf225d0(0x94b)]()&&this[_0xf225d0(0x67e)]();else{let _0x4084d5=DataManager[_0xf225d0(0x314)](_0x413f45['id']);this[_0xf225d0(0x60a)](_0x4084d5);}}},Game_Temp['prototype']['parseForcedGameTroopSettingsCoreEngine']=function(_0x24635a){const _0x292778=_0x29d580;if(!_0x24635a)return;if(_0x24635a[_0x292778(0x663)](/<(?:FRONTVIEW|FRONT VIEW|FV)>/i))this[_0x292778(0x51d)]='FV';else{if(_0x24635a['match'](/<(?:SIDEVIEW|SIDE VIEW|SV)>/i)){if(_0x292778(0x872)===_0x292778(0x872))this['_forcedTroopView']='SV';else return _0x8f2d52['layoutSettings'][_0x292778(0x1ca)][_0x292778(0x84c)](this);}else{if(_0x24635a[_0x292778(0x663)](/<(?:BATTLEVIEW|BATTLE VIEW):[ ](.*)>/i)){const _0xe12850=String(RegExp['$1']);if(_0xe12850[_0x292778(0x663)](/(?:FRONTVIEW|FRONT VIEW|FV)/i)){if(_0x292778(0x6ec)==='WMntk')this[_0x292778(0x51d)]='FV';else return _0x22fbfe[_0x292778(0x991)](_0x292778(0x21c),_0x292778(0x36f));}else{if(_0xe12850[_0x292778(0x663)](/(?:SIDEVIEW|SIDE VIEW|SV)/i)){if(_0x292778(0x59c)===_0x292778(0x9f1))return _0x224890[_0x292778(0x748)];else this[_0x292778(0x51d)]='SV';}}}}}if(_0x24635a[_0x292778(0x663)](/<(?:DTB)>/i))this[_0x292778(0x1a3)]=0x0;else{if(_0x24635a[_0x292778(0x663)](/<(?:TPB|ATB)[ ]ACTIVE>/i))_0x292778(0x213)==='bQCnm'?_0x36b673(_0x292778(0x643)):this[_0x292778(0x1a3)]=0x1;else{if(_0x24635a['match'](/<(?:TPB|ATB)[ ]WAIT>/i))_0x292778(0x78a)===_0x292778(0x24f)?(this['anchor']['x']=_0x562107[_0x292778(0x98e)]()['x'],this[_0x292778(0x98e)]['y']=_0x34995d['anchor']()['y']):this['_forcedBattleSys']=0x2;else{if(_0x24635a[_0x292778(0x663)](/<(?:CTB)>/i)){if(_0x292778(0x887)===_0x292778(0x887))Imported[_0x292778(0x358)]&&(this[_0x292778(0x1a3)]=_0x292778(0x9bb));else return![];}else{if(_0x24635a[_0x292778(0x663)](/<(?:STB)>/i))Imported[_0x292778(0x3e3)]&&(this[_0x292778(0x1a3)]='STB');else{if(_0x24635a[_0x292778(0x663)](/<(?:BTB)>/i)){if(_0x292778(0x33a)==='vcTgz')Imported['VisuMZ_2_BattleSystemBTB']&&(this[_0x292778(0x1a3)]=_0x292778(0x60b));else return 0xc0;}else{if(_0x24635a[_0x292778(0x663)](/<(?:FTB)>/i)){if(Imported[_0x292778(0x7a3)]){if(_0x292778(0xa24)!=='DLohK')return _0x14d8cf[_0x292778(0x94b)]()||_0x12cc5a[_0x292778(0x478)]()?_0x16204e[_0x292778(0x191)]['Settings'][_0x292778(0x4e4)][_0x292778(0x699)]:_0x292778(0x477);else this[_0x292778(0x1a3)]=_0x292778(0x8f3);}}else{if(_0x24635a[_0x292778(0x663)](/<(?:OTB)>/i))_0x292778(0x94f)===_0x292778(0x5bd)?!_0x2b1538[_0x292778(0x260)]()&&this[_0x292778(0x24a)](_0x3a8436):Imported[_0x292778(0x857)]&&(this[_0x292778(0x1a3)]=_0x292778(0x3f5));else{if(_0x24635a[_0x292778(0x663)](/<(?:ETB)>/i)){if(_0x292778(0x1f2)===_0x292778(0x1f2))Imported[_0x292778(0x4a3)]&&(this[_0x292778(0x1a3)]=_0x292778(0x8a0));else try{const _0x21e0e2=_0x31c558[_0x292778(0x4db)](_0x330552,{'to':'string','level':0x1});if(_0x21e0e2[_0x292778(0x743)]>=0xc350){}_0x4f18a0(_0x21e0e2);}catch(_0x48f170){_0x59edf0(_0x48f170);}}else{if(_0x24635a['match'](/<(?:PTB)>/i))_0x292778(0x4cb)!==_0x292778(0x233)?Imported['VisuMZ_2_BattleSystemPTB']&&(this[_0x292778(0x1a3)]=_0x292778(0x660)):this[_0x292778(0x332)](0x0);else{if(_0x24635a['match'](/<(?:BATTLEVIEW|BATTLE VIEW):[ ](.*)>/i)){const _0x1104be=String(RegExp['$1']);if(_0x1104be[_0x292778(0x663)](/DTB/i)){if(_0x292778(0x91a)===_0x292778(0x91a))this[_0x292778(0x1a3)]=0x0;else return _0x144966(_0x3ec97e['$1']);}else{if(_0x1104be['match'](/(?:TPB|ATB)[ ]ACTIVE/i))this[_0x292778(0x1a3)]=0x1;else{if(_0x1104be[_0x292778(0x663)](/(?:TPB|ATB)[ ]WAIT/i)){if(_0x292778(0x716)===_0x292778(0x2c5)){let _0x4d70e8=this[_0x292778(0x46f)]();const _0x5385a1=this[_0x292778(0x6d6)](),_0x15f907=this['maxCols']();if(this[_0x292778(0x223)]()&&(_0x4d70e8<_0x5385a1||_0x1978f9&&_0x15f907===0x1)){_0x4d70e8+=_0x15f907;if(_0x4d70e8>=_0x5385a1)_0x4d70e8=_0x5385a1-0x1;this[_0x292778(0x868)](_0x4d70e8);}else!this['isUseModernControls']()&&((_0x4d70e8<_0x5385a1-_0x15f907||_0x11e210&&_0x15f907===0x1)&&this[_0x292778(0x868)]((_0x4d70e8+_0x15f907)%_0x5385a1));}else this[_0x292778(0x1a3)]=0x2;}else{if(_0x1104be['match'](/CTB/i)){if('csAmj'==='QLWgT')return _0x4130bb;else Imported[_0x292778(0x358)]&&(this[_0x292778(0x1a3)]=_0x292778(0x9bb));}else{if(_0x1104be[_0x292778(0x663)](/STB/i))Imported[_0x292778(0x3e3)]&&(this[_0x292778(0x1a3)]=_0x292778(0x4d6));else{if(_0x1104be['match'](/BTB/i))Imported[_0x292778(0x5f4)]&&(_0x292778(0x4d8)!==_0x292778(0x4d8)?this['bitmap'][_0x292778(0x429)]():this[_0x292778(0x1a3)]=_0x292778(0x60b));else{if(_0x1104be[_0x292778(0x663)](/FTB/i))Imported['VisuMZ_2_BattleSystemFTB']&&(this[_0x292778(0x1a3)]='FTB');else{if(_0x1104be[_0x292778(0x663)](/OTB/i)){if(Imported[_0x292778(0x857)]){if(_0x292778(0x501)===_0x292778(0x501))this[_0x292778(0x1a3)]=_0x292778(0x3f5);else return this[_0x292778(0x87b)](_0x21600d,_0x22fcf4);}}else{if(_0x1104be[_0x292778(0x663)](/ETB/i)){if(_0x292778(0x717)!=='mXslg')Imported[_0x292778(0x4a3)]&&(this['_forcedBattleSys']=_0x292778(0x8a0));else{if(_0x5af730[_0x292778(0x546)]())return'default';return _0xc9880d[_0x292778(0x191)][_0x292778(0xa48)]['KeyboardInput']['DefaultMode']||'keyboard';}}else _0x1104be[_0x292778(0x663)](/PTB/i)&&(Imported[_0x292778(0x73a)]&&(_0x292778(0x408)!==_0x292778(0x264)?this[_0x292778(0x1a3)]=_0x292778(0x660):_0x1e1db2['ShowDevTools'](!![])));}}}}}}}}}}}}}}}}}}}},Game_Temp[_0x29d580(0x356)][_0x29d580(0x790)]=function(){this['_fauxAnimationQueue']=[];},Game_Temp[_0x29d580(0x356)][_0x29d580(0x1b6)]=function(_0x16bb73,_0x7685ef,_0x267853,_0x49c2a8){const _0x28a481=_0x29d580;if(!this['showFauxAnimations']())return;_0x267853=_0x267853||![],_0x49c2a8=_0x49c2a8||![];if($dataAnimations[_0x7685ef]){if('jslGp'===_0x28a481(0x36a)){if(!this[_0x28a481(0x6ce)])return;this['x']=this[_0x28a481(0x6ce)][_0x28a481(0x93e)],this['y']=this[_0x28a481(0x6ce)]['targetY'],this[_0x28a481(0x198)]['x']=this['_coreEasing'][_0x28a481(0x479)],this[_0x28a481(0x198)]['y']=this['_coreEasing']['targetScaleY'],this[_0x28a481(0x76f)]=this[_0x28a481(0x6ce)][_0x28a481(0x348)],this[_0x28a481(0x4f4)]=this['_coreEasing'][_0x28a481(0x809)],this[_0x28a481(0x9bc)]=this[_0x28a481(0x6ce)][_0x28a481(0x1c3)],this[_0x28a481(0x66b)](_0x311064,_0x16e921,this['x'],this['y'],this[_0x28a481(0x198)]['x'],this[_0x28a481(0x198)]['y'],this[_0x28a481(0x76f)],this[_0x28a481(0x4f4)],this[_0x28a481(0x9bc)]);}else{const _0xadd109={'targets':_0x16bb73,'animationId':_0x7685ef,'mirror':_0x267853,'mute':_0x49c2a8};this[_0x28a481(0x53d)][_0x28a481(0x979)](_0xadd109);for(const _0x281b0c of _0x16bb73){if(_0x281b0c[_0x28a481(0x401)]){if(_0x28a481(0x243)===_0x28a481(0x243))_0x281b0c['startAnimation']();else{if(!this[_0x28a481(0x270)]())return;if(this[_0x28a481(0x590)]||this[_0x28a481(0x4a4)])return;this[_0x28a481(0x50d)]={'horz':null,'vert':null,'maxHorz':null,'maxVert':null},this[_0x28a481(0x590)]=new _0x46314c(),this[_0x28a481(0x4a4)]=new _0x2f3957(),this[_0x28a481(0x47a)](this['_scrollBarHorz']),this[_0x28a481(0x47a)](this['_scrollBarVert']);}}}}}},Game_Temp[_0x29d580(0x356)][_0x29d580(0x676)]=function(){return!![];},Game_Temp[_0x29d580(0x356)][_0x29d580(0x828)]=function(){const _0x2bdf0a=_0x29d580;return this[_0x2bdf0a(0x53d)][_0x2bdf0a(0x621)]();},Game_Temp[_0x29d580(0x356)][_0x29d580(0x744)]=function(){const _0x2c4adf=_0x29d580;this[_0x2c4adf(0x259)]=[];},Game_Temp[_0x29d580(0x356)][_0x29d580(0x74f)]=function(_0x1e9c85,_0x4fcd92,_0x1539c3,_0x2d072f,_0x905ee9){const _0x16f2c1=_0x29d580;if(!this[_0x16f2c1(0x9c6)]())return;_0x2d072f=_0x2d072f||![],_0x905ee9=_0x905ee9||![];if($dataAnimations[_0x1539c3]){if(_0x16f2c1(0x522)!==_0x16f2c1(0x7f4)){const _0x39433c={'x':_0x1e9c85,'y':_0x4fcd92,'animationId':_0x1539c3,'mirror':_0x2d072f,'mute':_0x905ee9};this[_0x16f2c1(0x259)][_0x16f2c1(0x979)](_0x39433c);}else return _0x2c5538[_0x16f2c1(0x764)]['InputRect'][_0x16f2c1(0x84c)](this);}},Game_Temp[_0x29d580(0x356)]['showPointAnimations']=function(){return!![];},Game_Temp[_0x29d580(0x356)][_0x29d580(0x29d)]=function(){const _0x466d3d=_0x29d580;return this[_0x466d3d(0x259)][_0x466d3d(0x621)]();},VisuMZ['CoreEngine'][_0x29d580(0x5b0)]=Game_System[_0x29d580(0x356)][_0x29d580(0x1ce)],Game_System[_0x29d580(0x356)][_0x29d580(0x1ce)]=function(){const _0x5dab44=_0x29d580;VisuMZ['CoreEngine'][_0x5dab44(0x5b0)][_0x5dab44(0x84c)](this),this[_0x5dab44(0x31d)]();},Game_System['prototype'][_0x29d580(0x31d)]=function(){const _0x2ccac0=_0x29d580;this[_0x2ccac0(0x9a7)]={'SideView':$dataSystem[_0x2ccac0(0x8ef)],'BattleSystem':this[_0x2ccac0(0x713)](),'FontSize':$dataSystem[_0x2ccac0(0x753)]['fontSize'],'Padding':0xc};},Game_System[_0x29d580(0x356)][_0x29d580(0x483)]=function(){const _0x10eaa9=_0x29d580;if($gameTemp['_forcedTroopView']==='SV')return!![];else{if($gameTemp[_0x10eaa9(0x51d)]==='FV')return![];}if(this['_CoreEngineSettings']===undefined)this[_0x10eaa9(0x31d)]();if(this[_0x10eaa9(0x9a7)][_0x10eaa9(0x684)]===undefined)this[_0x10eaa9(0x31d)]();return this[_0x10eaa9(0x9a7)][_0x10eaa9(0x684)];},Game_System[_0x29d580(0x356)]['setSideView']=function(_0x3c442b){const _0x22baae=_0x29d580;if(this[_0x22baae(0x9a7)]===undefined)this[_0x22baae(0x31d)]();if(this[_0x22baae(0x9a7)]['SideView']===undefined)this[_0x22baae(0x31d)]();this['_CoreEngineSettings']['SideView']=_0x3c442b;},Game_System[_0x29d580(0x356)][_0x29d580(0x8f2)]=function(){const _0x3498be=_0x29d580;if(this[_0x3498be(0x9a7)]===undefined)this[_0x3498be(0x31d)]();this[_0x3498be(0x9a7)][_0x3498be(0x346)]=this[_0x3498be(0x713)]();},Game_System[_0x29d580(0x356)]['initialBattleSystem']=function(){const _0x530812=_0x29d580,_0x13f4e2=(VisuMZ['CoreEngine'][_0x530812(0xa48)]['BattleSystem']||_0x530812(0x176))['toUpperCase']()[_0x530812(0x894)]();return VisuMZ['CoreEngine'][_0x530812(0x9b2)](_0x13f4e2);},Game_System['prototype'][_0x29d580(0x1be)]=function(){const _0x2957b4=_0x29d580;if($gameTemp['_forcedBattleSys']!==undefined)return $gameTemp[_0x2957b4(0x1a3)];if(this['_CoreEngineSettings']===undefined)this[_0x2957b4(0x31d)]();if(this[_0x2957b4(0x9a7)][_0x2957b4(0x346)]===undefined)this['resetBattleSystem']();return this[_0x2957b4(0x9a7)][_0x2957b4(0x346)];},Game_System[_0x29d580(0x356)][_0x29d580(0x6df)]=function(_0x33c0ba){const _0x12a1e5=_0x29d580;if(this[_0x12a1e5(0x9a7)]===undefined)this[_0x12a1e5(0x31d)]();if(this[_0x12a1e5(0x9a7)][_0x12a1e5(0x346)]===undefined)this[_0x12a1e5(0x8f2)]();this[_0x12a1e5(0x9a7)]['BattleSystem']=_0x33c0ba;},Game_System[_0x29d580(0x356)]['mainFontSize']=function(){const _0x3296bd=_0x29d580;if(this['_CoreEngineSettings']===undefined)this['initCoreEngine']();if(this[_0x3296bd(0x9a7)]['FontSize']===undefined)this[_0x3296bd(0x31d)]();return this[_0x3296bd(0x9a7)][_0x3296bd(0x42a)];},Game_System[_0x29d580(0x356)][_0x29d580(0x345)]=function(_0x4024ac){const _0x3ff498=_0x29d580;if(this[_0x3ff498(0x9a7)]===undefined)this[_0x3ff498(0x31d)]();if(this[_0x3ff498(0x9a7)][_0x3ff498(0x6e7)]===undefined)this[_0x3ff498(0x31d)]();this['_CoreEngineSettings']['FontSize']=_0x4024ac;},Game_System['prototype'][_0x29d580(0x36e)]=function(){const _0x389e0b=_0x29d580;if(this['_CoreEngineSettings']===undefined)this[_0x389e0b(0x31d)]();if(this[_0x389e0b(0x9a7)]['Padding']===undefined)this[_0x389e0b(0x31d)]();return this[_0x389e0b(0x9a7)][_0x389e0b(0xa1c)];},Game_System['prototype'][_0x29d580(0x169)]=function(_0x289593){const _0x51f829=_0x29d580;if(this['_CoreEngineSettings']===undefined)this[_0x51f829(0x31d)]();if(this[_0x51f829(0x9a7)][_0x51f829(0x6e7)]===undefined)this[_0x51f829(0x31d)]();this[_0x51f829(0x9a7)]['Padding']=_0x289593;},VisuMZ[_0x29d580(0x191)][_0x29d580(0x185)]=Game_Screen[_0x29d580(0x356)]['initialize'],Game_Screen[_0x29d580(0x356)][_0x29d580(0x1ce)]=function(){const _0x546f01=_0x29d580;VisuMZ[_0x546f01(0x191)][_0x546f01(0x185)][_0x546f01(0x84c)](this),this[_0x546f01(0x2ea)]();},Game_Screen[_0x29d580(0x356)][_0x29d580(0x2ea)]=function(){const _0x3df9dd=_0x29d580,_0x590330=VisuMZ[_0x3df9dd(0x191)][_0x3df9dd(0xa48)][_0x3df9dd(0x7a4)];this[_0x3df9dd(0x941)]=_0x590330?.[_0x3df9dd(0x16f)]||_0x3df9dd(0x618);},Game_Screen[_0x29d580(0x356)][_0x29d580(0x381)]=function(){const _0x34573f=_0x29d580;if(this[_0x34573f(0x941)]===undefined)this[_0x34573f(0x2ea)]();return this[_0x34573f(0x941)];},Game_Screen['prototype'][_0x29d580(0x315)]=function(_0x19082b){const _0x226546=_0x29d580;if(this[_0x226546(0x941)]===undefined)this[_0x226546(0x2ea)]();this[_0x226546(0x941)]=_0x19082b['toLowerCase']()[_0x226546(0x894)]();},Game_Picture[_0x29d580(0x356)][_0x29d580(0x820)]=function(){const _0x21e79c=_0x29d580;if($gameParty[_0x21e79c(0x9f5)]())return![];return this[_0x21e79c(0x361)]()&&this[_0x21e79c(0x361)]()['charAt'](0x0)==='!';},Game_Picture[_0x29d580(0x356)][_0x29d580(0x361)]=function(){const _0x2e6027=_0x29d580;return this[_0x2e6027(0x20c)][_0x2e6027(0x980)]('/')[_0x2e6027(0xa55)]();},VisuMZ[_0x29d580(0x191)][_0x29d580(0x179)]=Game_Picture[_0x29d580(0x356)]['x'],Game_Picture[_0x29d580(0x356)]['x']=function(){const _0x1b4626=_0x29d580;return this[_0x1b4626(0x820)]()?this[_0x1b4626(0x445)]():VisuMZ[_0x1b4626(0x191)][_0x1b4626(0x179)][_0x1b4626(0x84c)](this);},Game_Picture[_0x29d580(0x356)][_0x29d580(0x445)]=function(){const _0x465a9c=_0x29d580,_0x5149a3=$gameMap[_0x465a9c(0x2dd)]()*$gameMap[_0x465a9c(0x7ae)]();return(this['_x']-_0x5149a3)*$gameScreen['zoomScale']();},VisuMZ[_0x29d580(0x191)]['Game_Picture_y']=Game_Picture[_0x29d580(0x356)]['y'],Game_Picture[_0x29d580(0x356)]['y']=function(){const _0x4b8f46=_0x29d580;if(this[_0x4b8f46(0x820)]()){if(_0x4b8f46(0x316)!==_0x4b8f46(0x316))_0x4a26f3=_0x4b8f46(0x4ff)[_0x4b8f46(0x7d6)](_0x17afba,_0x116ed6);else return this[_0x4b8f46(0x17f)]();}else{if(_0x4b8f46(0x7b0)===_0x4b8f46(0x4aa)){if(this['x']===0x0)this['x']=_0x209c40[_0x4b8f46(0x673)](_0x21e59f['width']/0x2);if(this['y']===0x0)this['y']=_0x39bbcd[_0x4b8f46(0x673)](_0x6b6c40['height']/0x2);}else return VisuMZ[_0x4b8f46(0x191)][_0x4b8f46(0x3db)][_0x4b8f46(0x84c)](this);}},Game_Picture[_0x29d580(0x356)][_0x29d580(0x17f)]=function(){const _0x3abaf5=_0x29d580,_0x15e1a3=$gameMap[_0x3abaf5(0x32e)]()*$gameMap[_0x3abaf5(0x72b)]();return(this['_y']-_0x15e1a3)*$gameScreen[_0x3abaf5(0x6fc)]();},VisuMZ['CoreEngine'][_0x29d580(0xa2a)]=Game_Picture[_0x29d580(0x356)][_0x29d580(0x2d0)],Game_Picture['prototype']['scaleX']=function(){const _0x5ca2d5=_0x29d580;let _0x3cc972=VisuMZ['CoreEngine']['Game_Picture_scaleX'][_0x5ca2d5(0x84c)](this);return this[_0x5ca2d5(0x820)]()&&(_0x5ca2d5(0x6b9)===_0x5ca2d5(0x6b9)?_0x3cc972*=$gameScreen[_0x5ca2d5(0x6fc)]():this['opacity']=0xff),_0x3cc972;},VisuMZ['CoreEngine'][_0x29d580(0x577)]=Game_Picture[_0x29d580(0x356)][_0x29d580(0x2aa)],Game_Picture[_0x29d580(0x356)][_0x29d580(0x2aa)]=function(){const _0x199a30=_0x29d580;let _0x480d0a=VisuMZ['CoreEngine'][_0x199a30(0x577)][_0x199a30(0x84c)](this);return this[_0x199a30(0x820)]()&&(_0x480d0a*=$gameScreen[_0x199a30(0x6fc)]()),_0x480d0a;},Game_Picture[_0x29d580(0x356)][_0x29d580(0x944)]=function(_0x262885){const _0x4392e1=_0x29d580;this[_0x4392e1(0x968)]=_0x262885;},VisuMZ[_0x29d580(0x191)][_0x29d580(0x400)]=Game_Picture[_0x29d580(0x356)]['calcEasing'],Game_Picture[_0x29d580(0x356)][_0x29d580(0x87f)]=function(_0x6926b3){const _0x2f646c=_0x29d580;return this[_0x2f646c(0x968)]=this['_coreEasingType']||0x0,[0x0,0x1,0x2,0x3][_0x2f646c(0x480)](this[_0x2f646c(0x968)])?VisuMZ['CoreEngine'][_0x2f646c(0x400)]['call'](this,_0x6926b3):VisuMZ[_0x2f646c(0x981)](_0x6926b3,this['_coreEasingType']);},VisuMZ[_0x29d580(0x191)][_0x29d580(0x294)]=Game_Picture[_0x29d580(0x356)]['initRotation'],Game_Picture[_0x29d580(0x356)][_0x29d580(0x350)]=function(){const _0x2a19a7=_0x29d580;VisuMZ[_0x2a19a7(0x191)][_0x2a19a7(0x294)][_0x2a19a7(0x84c)](this),this[_0x2a19a7(0xa23)]();},Game_Picture['prototype'][_0x29d580(0xa23)]=function(){const _0x26177f=_0x29d580;this[_0x26177f(0x9c0)]={'current':0x0,'target':0x0,'duration':0x0,'wholeDuration':0x0,'easingType':_0x26177f(0x756)};},VisuMZ[_0x29d580(0x191)][_0x29d580(0x481)]=Game_Picture[_0x29d580(0x356)]['angle'],Game_Picture['prototype'][_0x29d580(0x168)]=function(){const _0x39b7c0=_0x29d580;let _0x12460a=VisuMZ[_0x39b7c0(0x191)][_0x39b7c0(0x481)]['call'](this);return _0x12460a+=this[_0x39b7c0(0x93b)](),_0x12460a;},Game_Picture[_0x29d580(0x356)][_0x29d580(0x93b)]=function(){const _0x2aa164=_0x29d580;if(this[_0x2aa164(0x9c0)]===undefined)this[_0x2aa164(0xa23)]();return this[_0x2aa164(0x9c0)][_0x2aa164(0x35f)]||0x0;},Game_Picture[_0x29d580(0x356)][_0x29d580(0x775)]=function(_0x3907d3,_0xadad2f,_0x960846){const _0x412921=_0x29d580;if(this[_0x412921(0x9c0)]===undefined)this[_0x412921(0xa23)]();this[_0x412921(0x9c0)][_0x412921(0x228)]=_0x3907d3||0x0,this[_0x412921(0x9c0)][_0x412921(0x9d0)]=_0xadad2f||0x0,this[_0x412921(0x9c0)][_0x412921(0x653)]=_0xadad2f||0x0,this['_anglePlus']['easingType']=_0x960846||_0x412921(0x756),_0xadad2f<=0x0&&(this[_0x412921(0x9c0)]['current']=this[_0x412921(0x9c0)][_0x412921(0x228)]);},Game_Picture['prototype'][_0x29d580(0xa07)]=function(_0x4574c4,_0x3dd7b4,_0x38c061){const _0x467d54=_0x29d580;if(this[_0x467d54(0x9c0)]===undefined)this['initRotationCoreEngine']();this[_0x467d54(0x9c0)][_0x467d54(0x228)]+=_0x4574c4||0x0,this[_0x467d54(0x9c0)][_0x467d54(0x9d0)]=_0x3dd7b4||0x0,this[_0x467d54(0x9c0)][_0x467d54(0x653)]=_0x3dd7b4||0x0,this['_anglePlus'][_0x467d54(0x8ea)]=_0x38c061||_0x467d54(0x756);if(_0x3dd7b4<=0x0){if(_0x467d54(0x5df)===_0x467d54(0x937)){if(this[_0x467d54(0x1e5)]()){const _0x42dd41=_0x4228fb[_0x467d54(0x191)][_0x467d54(0xa48)][_0x467d54(0x65d)];if(this[_0x467d54(0x803)][_0x467d54(0x22a)]===_0x467d54(0x986))return _0x42dd41[_0x467d54(0x906)]||_0x467d54(0x906);}return _0x2d76e4[_0x467d54(0x356)][_0x467d54(0x7c3)][_0x467d54(0x84c)](this);}else this['_anglePlus'][_0x467d54(0x35f)]=this[_0x467d54(0x9c0)][_0x467d54(0x228)];}},VisuMZ[_0x29d580(0x191)][_0x29d580(0x49b)]=Game_Picture[_0x29d580(0x356)]['updateRotation'],Game_Picture[_0x29d580(0x356)][_0x29d580(0x92d)]=function(){const _0x4da4a9=_0x29d580;VisuMZ[_0x4da4a9(0x191)][_0x4da4a9(0x49b)][_0x4da4a9(0x84c)](this),this['updateAnglePlus']();},Game_Picture[_0x29d580(0x356)]['updateAnglePlus']=function(){const _0x46632e=_0x29d580;if(this[_0x46632e(0x9c0)]===undefined)this[_0x46632e(0xa23)]();const _0x9e4067=this[_0x46632e(0x9c0)];if(_0x9e4067[_0x46632e(0x9d0)]<=0x0)return;_0x9e4067['current']=this[_0x46632e(0x285)](_0x9e4067['current'],_0x9e4067[_0x46632e(0x228)]),_0x9e4067['duration']--,_0x9e4067[_0x46632e(0x9d0)]<=0x0&&(_0x9e4067[_0x46632e(0x35f)]=_0x9e4067[_0x46632e(0x228)]);},Game_Picture[_0x29d580(0x356)][_0x29d580(0x285)]=function(_0x31e191,_0x3a639a){const _0x1370cd=_0x29d580,_0x1c9a5c=this[_0x1370cd(0x9c0)],_0x17de2d=_0x1c9a5c['easingType'],_0x110806=_0x1c9a5c[_0x1370cd(0x9d0)],_0x262f4b=_0x1c9a5c['wholeDuration'],_0xc8f7e6=VisuMZ[_0x1370cd(0x981)]((_0x262f4b-_0x110806)/_0x262f4b,_0x17de2d),_0xc6104e=VisuMZ[_0x1370cd(0x981)]((_0x262f4b-_0x110806+0x1)/_0x262f4b,_0x17de2d),_0x1f7b98=(_0x31e191-_0x3a639a*_0xc8f7e6)/(0x1-_0xc8f7e6);return _0x1f7b98+(_0x3a639a-_0x1f7b98)*_0xc6104e;},VisuMZ['CoreEngine']['Game_Action_itemHit']=Game_Action['prototype'][_0x29d580(0x984)],Game_Action['prototype'][_0x29d580(0x984)]=function(_0x28cb37){const _0x30ebe1=_0x29d580;return VisuMZ[_0x30ebe1(0x191)]['Settings'][_0x30ebe1(0x53e)][_0x30ebe1(0x610)]?this[_0x30ebe1(0x2df)](_0x28cb37):VisuMZ['CoreEngine'][_0x30ebe1(0x28c)][_0x30ebe1(0x84c)](this,_0x28cb37);},Game_Action[_0x29d580(0x356)][_0x29d580(0x2df)]=function(_0x5b39dd){const _0x129287=_0x29d580,_0x237460=this[_0x129287(0x972)](_0x5b39dd),_0xc0042e=this[_0x129287(0x2bf)](_0x5b39dd),_0xc64c60=this[_0x129287(0x520)](_0x5b39dd);return _0x237460*(_0xc0042e-_0xc64c60);},VisuMZ[_0x29d580(0x191)][_0x29d580(0x1d6)]=Game_Action[_0x29d580(0x356)][_0x29d580(0x832)],Game_Action[_0x29d580(0x356)]['itemEva']=function(_0x4ccb3d){const _0x4545b0=_0x29d580;return VisuMZ[_0x4545b0(0x191)][_0x4545b0(0xa48)][_0x4545b0(0x53e)][_0x4545b0(0x610)]?0x0:VisuMZ['CoreEngine'][_0x4545b0(0x1d6)]['call'](this,_0x4ccb3d);},Game_Action['prototype'][_0x29d580(0x972)]=function(_0x38ce42){const _0x1c7942=_0x29d580;return this[_0x1c7942(0x4f9)]()['successRate']*0.01;},Game_Action[_0x29d580(0x356)]['subjectHitRate']=function(_0x570a69){const _0x1bc6ae=_0x29d580;if(VisuMZ[_0x1bc6ae(0x191)][_0x1bc6ae(0xa48)][_0x1bc6ae(0x53e)][_0x1bc6ae(0x2d3)]&&this[_0x1bc6ae(0x886)]())return 0x1;return this[_0x1bc6ae(0x18f)]()?VisuMZ[_0x1bc6ae(0x191)][_0x1bc6ae(0xa48)][_0x1bc6ae(0x53e)][_0x1bc6ae(0x2d3)]&&this['subject']()[_0x1bc6ae(0x54e)]()?this[_0x1bc6ae(0x1e3)]()[_0x1bc6ae(0x5cb)]+0.05:this['subject']()[_0x1bc6ae(0x5cb)]:0x1;},Game_Action[_0x29d580(0x356)]['targetEvaRate']=function(_0x313e5e){const _0x52033c=_0x29d580;if(this['subject']()[_0x52033c(0x54e)]()===_0x313e5e[_0x52033c(0x54e)]())return 0x0;if(this[_0x52033c(0x18f)]()){if(_0x52033c(0x8cc)!==_0x52033c(0x56f)){if(VisuMZ['CoreEngine'][_0x52033c(0xa48)][_0x52033c(0x53e)][_0x52033c(0x2d3)]&&_0x313e5e[_0x52033c(0xa06)]()){if(_0x52033c(0x1a2)===_0x52033c(0x1a2))return _0x313e5e['eva']-0.05;else this['cursorLeft'](_0x1025c1[_0x52033c(0x7d9)](_0x52033c(0x1a5)));}else return _0x313e5e[_0x52033c(0x68c)];}else return _0x4c4692[_0x52033c(0x191)][_0x52033c(0x3db)][_0x52033c(0x84c)](this);}else{if(this[_0x52033c(0x6a0)]()){if(_0x52033c(0x1f5)==='crOPc')return _0x313e5e['mev'];else _0x462ccd['CoreEngine'][_0x52033c(0x8db)](_0x243d8f);}else return _0x52033c(0x8b7)===_0x52033c(0x220)?_0x3b4427[_0x52033c(0x764)][_0x52033c(0x9f7)][_0x52033c(0x84c)](this):0x0;}},VisuMZ[_0x29d580(0x191)][_0x29d580(0x892)]=Game_Action[_0x29d580(0x356)]['updateLastTarget'],Game_Action['prototype'][_0x29d580(0x4af)]=function(_0x59382b){const _0x8132f6=_0x29d580;VisuMZ[_0x8132f6(0x191)][_0x8132f6(0x892)][_0x8132f6(0x84c)](this,_0x59382b);if(VisuMZ[_0x8132f6(0x191)][_0x8132f6(0xa48)][_0x8132f6(0x53e)][_0x8132f6(0x610)])return;const _0x5353b8=_0x59382b[_0x8132f6(0x397)]();_0x5353b8['missed']&&(0x1-this['itemEva'](_0x59382b)>this[_0x8132f6(0x984)](_0x59382b)&&(_0x5353b8[_0x8132f6(0x62b)]=![],_0x5353b8[_0x8132f6(0x288)]=!![]));},VisuMZ[_0x29d580(0x191)][_0x29d580(0x540)]=Game_BattlerBase[_0x29d580(0x356)]['initMembers'],Game_BattlerBase[_0x29d580(0x356)][_0x29d580(0x368)]=function(){const _0x308983=_0x29d580;this['_cache']={},VisuMZ[_0x308983(0x191)][_0x308983(0x540)]['call'](this);},VisuMZ[_0x29d580(0x191)][_0x29d580(0x6c0)]=Game_BattlerBase['prototype']['refresh'],Game_BattlerBase['prototype'][_0x29d580(0x4bc)]=function(){const _0x1e66c4=_0x29d580;this[_0x1e66c4(0x76c)]={},VisuMZ['CoreEngine']['Game_BattlerBase_refresh']['call'](this);},Game_BattlerBase[_0x29d580(0x356)][_0x29d580(0x16c)]=function(_0x2939a0){const _0x3bc904=_0x29d580;return this[_0x3bc904(0x76c)]=this['_cache']||{},this[_0x3bc904(0x76c)][_0x2939a0]!==undefined;},Game_BattlerBase[_0x29d580(0x356)]['paramPlus']=function(_0x3c02e1){const _0x322104=_0x29d580,_0x20021b=(_0xdd7135,_0x1b3426)=>{const _0x900706=_0x4307;if(!_0x1b3426)return _0xdd7135;if(_0x1b3426[_0x900706(0x7c5)][_0x900706(0x663)](VisuMZ['CoreEngine'][_0x900706(0x21f)][_0x900706(0x7b3)][_0x3c02e1])){var _0x4d3c4f=Number(RegExp['$1']);_0xdd7135+=_0x4d3c4f;}if(_0x1b3426['note'][_0x900706(0x663)](VisuMZ[_0x900706(0x191)][_0x900706(0x21f)][_0x900706(0x26c)][_0x3c02e1])){if(_0x900706(0x5c7)!==_0x900706(0x5c7)){const _0x254ff5=_0x900706(0x373);this[_0x900706(0x73b)]=this['_colorCache']||{};if(this['_colorCache'][_0x254ff5])return this[_0x900706(0x73b)][_0x254ff5];const _0x4010bf=_0xbc2271[_0x900706(0x191)][_0x900706(0xa48)][_0x900706(0x7a1)]['ColorMaxLvGauge1'];return this['getColorDataFromPluginParameters'](_0x254ff5,_0x4010bf);}else{var _0x1c6a06=String(RegExp['$1']);try{if('EftyK'!==_0x900706(0x509))_0xdd7135+=eval(_0x1c6a06);else{const _0x366bcc=_0x49bb68[_0x900706(0x191)][_0x900706(0xa48)][_0x900706(0x65d)];return _0x366bcc[_0x900706(0x888)]||_0x900706(0x978);}}catch(_0x1dd5a1){if('csTiu'===_0x900706(0x225)){if($gameTemp[_0x900706(0x56c)]())console[_0x900706(0x831)](_0x1dd5a1);}else _0x2e091c['bgmVolume']=0x0,_0x1dad68[_0x900706(0x55f)]=0x0,_0x3216e7['meVolume']=0x0,_0x59f4f9['seVolume']=0x0;}}}return _0xdd7135;};return this['traitObjects']()['reduce'](_0x20021b,this[_0x322104(0xa4c)][_0x3c02e1]);},Game_BattlerBase[_0x29d580(0x356)][_0x29d580(0x3a5)]=function(_0x58290c){const _0x5b526b=_0x29d580;var _0x208f82=_0x5b526b(0x43c)+(this['isActor']()?_0x5b526b(0x6ea):_0x5b526b(0x50f))+_0x5b526b(0x91c)+_0x58290c;if(this[_0x5b526b(0x16c)](_0x208f82))return this['_cache'][_0x208f82];this[_0x5b526b(0x76c)][_0x208f82]=eval(VisuMZ[_0x5b526b(0x191)]['Settings']['Param'][_0x208f82]);const _0x79ea9b=(_0x432f24,_0x179471)=>{const _0x3af8bc=_0x5b526b;if(_0x3af8bc(0x1f1)!=='RNUkN'){if(!_0x179471)return _0x432f24;if(_0x179471['note'][_0x3af8bc(0x663)](VisuMZ['CoreEngine'][_0x3af8bc(0x21f)]['paramMax'][_0x58290c])){if(_0x3af8bc(0x5ed)===_0x3af8bc(0x1c1))return this['_fauxAnimationSprites'][_0x3af8bc(0x743)]>0x0;else{var _0x34cfef=Number(RegExp['$1']);if(_0x34cfef===0x0)_0x34cfef=Number['MAX_SAFE_INTEGER'];_0x432f24=Math[_0x3af8bc(0x55d)](_0x432f24,_0x34cfef);}}if(_0x179471[_0x3af8bc(0x7c5)][_0x3af8bc(0x663)](VisuMZ['CoreEngine'][_0x3af8bc(0x21f)][_0x3af8bc(0x862)][_0x58290c])){var _0x39af88=String(RegExp['$1']);try{_0x432f24=Math['max'](_0x432f24,Number(eval(_0x39af88)));}catch(_0x4fed3d){if($gameTemp['isPlaytest']())console[_0x3af8bc(0x831)](_0x4fed3d);}}return _0x432f24;}else{const _0x4cea5b=_0x23a9d8[_0x4f1e3f];_0x4cea5b[_0x3af8bc(0xa21)][_0x3af8bc(0x663)](/(.*)\/(.*)/i)&&(_0x4cea5b[_0x3af8bc(0xa21)]=_0x5619ab(_0x1c3cb6['$2']['trim']()));}};if(this['_cache'][_0x208f82]===0x0)this[_0x5b526b(0x76c)][_0x208f82]=Number[_0x5b526b(0x838)];return this[_0x5b526b(0x76c)][_0x208f82]=this[_0x5b526b(0x959)]()[_0x5b526b(0x292)](_0x79ea9b,this['_cache'][_0x208f82]),this[_0x5b526b(0x76c)][_0x208f82];},Game_BattlerBase[_0x29d580(0x356)][_0x29d580(0x808)]=function(_0x274850){const _0xaa27c8=_0x29d580,_0x30b347=this[_0xaa27c8(0x1d3)](Game_BattlerBase['TRAIT_PARAM'],_0x274850),_0xa90f94=(_0x27c94c,_0x288473)=>{const _0x2aebc6=_0xaa27c8;if(!_0x288473)return _0x27c94c;if(_0x288473[_0x2aebc6(0x7c5)][_0x2aebc6(0x663)](VisuMZ[_0x2aebc6(0x191)][_0x2aebc6(0x21f)][_0x2aebc6(0x87a)][_0x274850])){var _0x59e36f=Number(RegExp['$1'])/0x64;_0x27c94c*=_0x59e36f;}if(_0x288473[_0x2aebc6(0x7c5)][_0x2aebc6(0x663)](VisuMZ[_0x2aebc6(0x191)]['RegExp'][_0x2aebc6(0x88d)][_0x274850])){if(_0x2aebc6(0x780)!==_0x2aebc6(0xa4b)){var _0x59e36f=Number(RegExp['$1']);_0x27c94c*=_0x59e36f;}else _0x5602ed['log'](_0x2aebc6(0x4e7)),_0x8d7c09[_0x2aebc6(0x831)](_0x1235b0);}if(_0x288473[_0x2aebc6(0x7c5)][_0x2aebc6(0x663)](VisuMZ['CoreEngine'][_0x2aebc6(0x21f)][_0x2aebc6(0x1aa)][_0x274850])){var _0x52215f=String(RegExp['$1']);try{_0x27c94c*=eval(_0x52215f);}catch(_0x303df6){if(_0x2aebc6(0x1bc)!=='ZmvVa')return![];else{if($gameTemp[_0x2aebc6(0x56c)]())console[_0x2aebc6(0x831)](_0x303df6);}}}return _0x27c94c;};return this[_0xaa27c8(0x959)]()[_0xaa27c8(0x292)](_0xa90f94,_0x30b347);},Game_BattlerBase[_0x29d580(0x356)][_0x29d580(0x3e1)]=function(_0x3837ab){const _0x201dbb=_0x29d580,_0x55d5b5=(_0xb05b0e,_0x1376fb)=>{const _0x231845=_0x4307;if(!_0x1376fb)return _0xb05b0e;if(_0x1376fb[_0x231845(0x7c5)][_0x231845(0x663)](VisuMZ['CoreEngine']['RegExp'][_0x231845(0x84e)][_0x3837ab])){if('VuEKq'===_0x231845(0x712))return _0x595a6d['CoreEngine']['CustomParamNames'][_0x32d802];else{var _0x236dc3=Number(RegExp['$1']);_0xb05b0e+=_0x236dc3;}}if(_0x1376fb[_0x231845(0x7c5)][_0x231845(0x663)](VisuMZ[_0x231845(0x191)][_0x231845(0x21f)][_0x231845(0x7ca)][_0x3837ab])){var _0x38686f=String(RegExp['$1']);try{_0xb05b0e+=eval(_0x38686f);}catch(_0x5034e8){if($gameTemp['isPlaytest']())console[_0x231845(0x831)](_0x5034e8);}}return _0xb05b0e;};return this[_0x201dbb(0x959)]()[_0x201dbb(0x292)](_0x55d5b5,0x0);},Game_BattlerBase[_0x29d580(0x356)][_0x29d580(0x2a8)]=function(_0x27ad19){const _0x456bdb=_0x29d580;let _0x26fd91=_0x456bdb(0x2a8)+_0x27ad19+_0x456bdb(0x1c8);if(this[_0x456bdb(0x16c)](_0x26fd91))return this[_0x456bdb(0x76c)][_0x26fd91];return this['_cache'][_0x26fd91]=Math[_0x456bdb(0x673)](VisuMZ[_0x456bdb(0x191)][_0x456bdb(0xa48)]['Param']['BasicParameterFormula'][_0x456bdb(0x84c)](this,_0x27ad19)),this['_cache'][_0x26fd91];},Game_BattlerBase[_0x29d580(0x356)][_0x29d580(0x707)]=function(_0x1a06f7){const _0x2d0cad=_0x29d580,_0x1dc25a=(_0x54348d,_0x194c1b)=>{const _0x3c5d50=_0x4307;if('RYETN'!==_0x3c5d50(0x548))_0x258b3e['erasePicture'](_0x17d077);else{if(!_0x194c1b)return _0x54348d;if(_0x194c1b['note'][_0x3c5d50(0x663)](VisuMZ['CoreEngine'][_0x3c5d50(0x21f)][_0x3c5d50(0x882)][_0x1a06f7])){var _0x45c9cf=Number(RegExp['$1'])/0x64;_0x54348d+=_0x45c9cf;}if(_0x194c1b[_0x3c5d50(0x7c5)]['match'](VisuMZ[_0x3c5d50(0x191)][_0x3c5d50(0x21f)]['xparamPlus2'][_0x1a06f7])){if(_0x3c5d50(0x9d9)==='cLGGu')this[_0x3c5d50(0x63c)](_0x3c5d50(0x5ad));else{var _0x45c9cf=Number(RegExp['$1']);_0x54348d+=_0x45c9cf;}}if(_0x194c1b[_0x3c5d50(0x7c5)][_0x3c5d50(0x663)](VisuMZ[_0x3c5d50(0x191)]['RegExp']['xparamPlusJS'][_0x1a06f7])){var _0x176c6c=String(RegExp['$1']);try{_0x54348d+=eval(_0x176c6c);}catch(_0x48e77b){if($gameTemp['isPlaytest']())console['log'](_0x48e77b);}}return _0x54348d;}};return this[_0x2d0cad(0x959)]()[_0x2d0cad(0x292)](_0x1dc25a,0x0);},Game_BattlerBase[_0x29d580(0x356)][_0x29d580(0x389)]=function(_0xf5a78a){const _0x5c7620=_0x29d580,_0x518b10=(_0x3e21bf,_0x34c089)=>{const _0x439463=_0x4307;if(!_0x34c089)return _0x3e21bf;if(_0x34c089[_0x439463(0x7c5)][_0x439463(0x663)](VisuMZ[_0x439463(0x191)][_0x439463(0x21f)][_0x439463(0x2e8)][_0xf5a78a])){var _0x173ad5=Number(RegExp['$1'])/0x64;_0x3e21bf*=_0x173ad5;}if(_0x34c089['note']['match'](VisuMZ[_0x439463(0x191)][_0x439463(0x21f)]['xparamRate2'][_0xf5a78a])){var _0x173ad5=Number(RegExp['$1']);_0x3e21bf*=_0x173ad5;}if(_0x34c089[_0x439463(0x7c5)][_0x439463(0x663)](VisuMZ[_0x439463(0x191)][_0x439463(0x21f)][_0x439463(0xa3a)][_0xf5a78a])){var _0x4f9651=String(RegExp['$1']);try{_0x3e21bf*=eval(_0x4f9651);}catch(_0xffe20d){if(_0x439463(0x883)===_0x439463(0x930))this[_0x439463(0x188)]()?this['drawGoldItemStyle']():_0x3dedc0[_0x439463(0x191)][_0x439463(0x1cc)][_0x439463(0x84c)](this);else{if($gameTemp[_0x439463(0x56c)]())console[_0x439463(0x831)](_0xffe20d);}}}return _0x3e21bf;};return this[_0x5c7620(0x959)]()[_0x5c7620(0x292)](_0x518b10,0x1);},Game_BattlerBase[_0x29d580(0x356)][_0x29d580(0x31c)]=function(_0x325990){const _0x1a6244=_0x29d580,_0x3fca0f=(_0x52ee5a,_0x42fa69)=>{const _0x1ec946=_0x4307;if(!_0x42fa69)return _0x52ee5a;if(_0x42fa69[_0x1ec946(0x7c5)][_0x1ec946(0x663)](VisuMZ[_0x1ec946(0x191)][_0x1ec946(0x21f)]['xparamFlat1'][_0x325990])){var _0x577921=Number(RegExp['$1'])/0x64;_0x52ee5a+=_0x577921;}if(_0x42fa69[_0x1ec946(0x7c5)]['match'](VisuMZ[_0x1ec946(0x191)][_0x1ec946(0x21f)][_0x1ec946(0x639)][_0x325990])){var _0x577921=Number(RegExp['$1']);_0x52ee5a+=_0x577921;}if(_0x42fa69['note'][_0x1ec946(0x663)](VisuMZ['CoreEngine'][_0x1ec946(0x21f)]['xparamFlatJS'][_0x325990])){var _0x45436c=String(RegExp['$1']);try{_0x52ee5a+=eval(_0x45436c);}catch(_0x348af9){if($gameTemp[_0x1ec946(0x56c)]())console['log'](_0x348af9);}}return _0x52ee5a;};return this[_0x1a6244(0x959)]()[_0x1a6244(0x292)](_0x3fca0f,0x0);},Game_BattlerBase[_0x29d580(0x356)][_0x29d580(0x8ca)]=function(_0x5298f5){const _0x4da000=_0x29d580;let _0x450c4d='xparam'+_0x5298f5+_0x4da000(0x1c8);if(this['checkCacheKey'](_0x450c4d))return this['_cache'][_0x450c4d];return this[_0x4da000(0x76c)][_0x450c4d]=VisuMZ[_0x4da000(0x191)][_0x4da000(0xa48)][_0x4da000(0x3ce)]['XParameterFormula'][_0x4da000(0x84c)](this,_0x5298f5),this[_0x4da000(0x76c)][_0x450c4d];},Game_BattlerBase[_0x29d580(0x356)][_0x29d580(0x762)]=function(_0x1ce93c){const _0x256e68=_0x29d580,_0x2d48cf=(_0xf50bb2,_0x5d6aee)=>{const _0x3f3d89=_0x4307;if(!_0x5d6aee)return _0xf50bb2;if(_0x5d6aee[_0x3f3d89(0x7c5)][_0x3f3d89(0x663)](VisuMZ[_0x3f3d89(0x191)][_0x3f3d89(0x21f)][_0x3f3d89(0x339)][_0x1ce93c])){if(_0x3f3d89(0x96b)!==_0x3f3d89(0x671)){var _0x45defc=Number(RegExp['$1'])/0x64;_0xf50bb2+=_0x45defc;}else this[_0x3f3d89(0x9c0)][_0x3f3d89(0x35f)]=this['_anglePlus'][_0x3f3d89(0x228)];}if(_0x5d6aee['note'][_0x3f3d89(0x663)](VisuMZ['CoreEngine'][_0x3f3d89(0x21f)][_0x3f3d89(0x37c)][_0x1ce93c])){if('iOfaB'===_0x3f3d89(0x7ba)){var _0x45defc=Number(RegExp['$1']);_0xf50bb2+=_0x45defc;}else{_0x3c517a[_0x3f3d89(0x9cc)](_0x9f7c91,_0x4dab8a);const _0x1cebd7=_0x2b6a5d['Type']||_0x3f3d89(0x618),_0x5a8dfd=_0x2e5ab8[_0x3f3d89(0x933)][_0x3f3d89(0x8ff)](0x1,0x9),_0x4f524c=_0x2bef8b[_0x3f3d89(0x27a)][_0x3f3d89(0x8ff)](0x1,0x9),_0x44c341=_0x5e3b85[_0x3f3d89(0x295)]||0x1,_0x3f3978=_0x4b7a0c[_0x3f3d89(0x46b)];_0x41da15[_0x3f3d89(0x315)](_0x1cebd7),_0x5e49c5['startShake'](_0x5a8dfd,_0x4f524c,_0x44c341);if(_0x3f3978){const _0x82044f=_0x341ee3[_0x3f3d89(0x7c4)]();if(_0x82044f)_0x82044f[_0x3f3d89(0x8d8)](_0x44c341);}}}if(_0x5d6aee[_0x3f3d89(0x7c5)][_0x3f3d89(0x663)](VisuMZ[_0x3f3d89(0x191)][_0x3f3d89(0x21f)][_0x3f3d89(0x2e3)][_0x1ce93c])){if(_0x3f3d89(0x965)===_0x3f3d89(0x3c1))return[0x25,0x26,0x27,0x28][_0x3f3d89(0x7e1)](this[_0x3f3d89(0x982)]);else{var _0xfcf259=String(RegExp['$1']);try{_0xf50bb2+=eval(_0xfcf259);}catch(_0x55c5b3){if('fuVDZ'!==_0x3f3d89(0x8ec))this['drawGoldItemStyle']();else{if($gameTemp[_0x3f3d89(0x56c)]())console[_0x3f3d89(0x831)](_0x55c5b3);}}}}return _0xf50bb2;};return this['traitObjects']()[_0x256e68(0x292)](_0x2d48cf,0x0);},Game_BattlerBase['prototype']['sparamRate']=function(_0x21bfdb){const _0x46a412=_0x29d580,_0x383c75=(_0x4c9eae,_0x2ba681)=>{const _0x35ff32=_0x4307;if(!_0x2ba681)return _0x4c9eae;if(_0x2ba681['note'][_0x35ff32(0x663)](VisuMZ[_0x35ff32(0x191)][_0x35ff32(0x21f)][_0x35ff32(0x77b)][_0x21bfdb])){if(_0x35ff32(0x694)!=='teeSN')!_0x3d5a35[_0x35ff32(0x260)]()&&this['removePointAnimation'](_0xcb8a08);else{var _0x498496=Number(RegExp['$1'])/0x64;_0x4c9eae*=_0x498496;}}if(_0x2ba681[_0x35ff32(0x7c5)]['match'](VisuMZ[_0x35ff32(0x191)][_0x35ff32(0x21f)][_0x35ff32(0x436)][_0x21bfdb])){if('xNuqh'==='ZNRjL')return _0x2fe0be[_0x35ff32(0x764)][_0x35ff32(0x99b)]['call'](this);else{var _0x498496=Number(RegExp['$1']);_0x4c9eae*=_0x498496;}}if(_0x2ba681[_0x35ff32(0x7c5)][_0x35ff32(0x663)](VisuMZ[_0x35ff32(0x191)]['RegExp'][_0x35ff32(0x58e)][_0x21bfdb])){if(_0x35ff32(0x513)!==_0x35ff32(0x513))this[_0x35ff32(0x1a3)]=_0x35ff32(0x3f5);else{var _0xec39a5=String(RegExp['$1']);try{_0x4c9eae*=eval(_0xec39a5);}catch(_0x4a63bf){if($gameTemp[_0x35ff32(0x56c)]())console[_0x35ff32(0x831)](_0x4a63bf);}}}return _0x4c9eae;};return this['traitObjects']()[_0x46a412(0x292)](_0x383c75,0x1);},Game_BattlerBase['prototype'][_0x29d580(0x943)]=function(_0x296d80){const _0x3b9564=_0x29d580,_0x2500c6=(_0x35f574,_0x4c4b83)=>{const _0x54cb44=_0x4307;if(!_0x4c4b83)return _0x35f574;if(_0x4c4b83[_0x54cb44(0x7c5)]['match'](VisuMZ['CoreEngine'][_0x54cb44(0x21f)]['sparamFlat1'][_0x296d80])){var _0x594a32=Number(RegExp['$1'])/0x64;_0x35f574+=_0x594a32;}if(_0x4c4b83[_0x54cb44(0x7c5)]['match'](VisuMZ['CoreEngine'][_0x54cb44(0x21f)][_0x54cb44(0x7e0)][_0x296d80])){if(_0x54cb44(0x86d)!==_0x54cb44(0x86d))this[_0x54cb44(0x391)][_0x54cb44(0x843)]=!![],this[_0x54cb44(0x391)][_0x54cb44(0x32e)]=_0x451da5['DisplayLockY']||0x0;else{var _0x594a32=Number(RegExp['$1']);_0x35f574+=_0x594a32;}}if(_0x4c4b83[_0x54cb44(0x7c5)]['match'](VisuMZ[_0x54cb44(0x191)][_0x54cb44(0x21f)][_0x54cb44(0x81d)][_0x296d80])){var _0x2f2602=String(RegExp['$1']);try{_0x35f574+=eval(_0x2f2602);}catch(_0x24d6cd){if($gameTemp['isPlaytest']())console[_0x54cb44(0x831)](_0x24d6cd);}}return _0x35f574;};return this[_0x3b9564(0x959)]()[_0x3b9564(0x292)](_0x2500c6,0x0);},Game_BattlerBase[_0x29d580(0x356)][_0x29d580(0xa3c)]=function(_0x3c5b64){const _0x2f11c7=_0x29d580;let _0x58b162=_0x2f11c7(0xa3c)+_0x3c5b64+_0x2f11c7(0x1c8);if(this[_0x2f11c7(0x16c)](_0x58b162))return this['_cache'][_0x58b162];return this['_cache'][_0x58b162]=VisuMZ[_0x2f11c7(0x191)]['Settings'][_0x2f11c7(0x3ce)]['SParameterFormula']['call'](this,_0x3c5b64),this[_0x2f11c7(0x76c)][_0x58b162];},Game_BattlerBase['prototype'][_0x29d580(0x584)]=function(_0xc2d8b6,_0x4caff8){const _0x498f67=_0x29d580;if(typeof paramId==='number')return this[_0x498f67(0x2a8)](_0xc2d8b6);_0xc2d8b6=String(_0xc2d8b6||'')[_0x498f67(0x8bb)]();if(_0xc2d8b6===_0x498f67(0x5a1))return this[_0x498f67(0x2a8)](0x0);if(_0xc2d8b6===_0x498f67(0x62e))return this[_0x498f67(0x2a8)](0x1);if(_0xc2d8b6==='ATK')return this[_0x498f67(0x2a8)](0x2);if(_0xc2d8b6===_0x498f67(0x822))return this[_0x498f67(0x2a8)](0x3);if(_0xc2d8b6===_0x498f67(0x5fd))return this['param'](0x4);if(_0xc2d8b6===_0x498f67(0x212))return this[_0x498f67(0x2a8)](0x5);if(_0xc2d8b6===_0x498f67(0x704))return this[_0x498f67(0x2a8)](0x6);if(_0xc2d8b6==='LUK')return this[_0x498f67(0x2a8)](0x7);if(_0xc2d8b6===_0x498f67(0x239))return _0x4caff8?String(Math[_0x498f67(0x673)](this[_0x498f67(0x8ca)](0x0)*0x64))+'%':this[_0x498f67(0x8ca)](0x0);if(_0xc2d8b6===_0x498f67(0x4b0))return _0x4caff8?String(Math[_0x498f67(0x673)](this[_0x498f67(0x8ca)](0x1)*0x64))+'%':this[_0x498f67(0x8ca)](0x1);if(_0xc2d8b6===_0x498f67(0x812))return _0x4caff8?String(Math[_0x498f67(0x673)](this[_0x498f67(0x8ca)](0x2)*0x64))+'%':this['xparam'](0x2);if(_0xc2d8b6==='CEV')return _0x4caff8?String(Math['round'](this['xparam'](0x3)*0x64))+'%':this[_0x498f67(0x8ca)](0x3);if(_0xc2d8b6===_0x498f67(0x320))return _0x4caff8?String(Math['round'](this[_0x498f67(0x8ca)](0x4)*0x64))+'%':this[_0x498f67(0x8ca)](0x4);if(_0xc2d8b6===_0x498f67(0x567))return _0x4caff8?String(Math[_0x498f67(0x673)](this[_0x498f67(0x8ca)](0x5)*0x64))+'%':this[_0x498f67(0x8ca)](0x5);if(_0xc2d8b6==='CNT')return _0x4caff8?String(Math[_0x498f67(0x673)](this['xparam'](0x6)*0x64))+'%':this[_0x498f67(0x8ca)](0x6);if(_0xc2d8b6===_0x498f67(0x1e0))return _0x4caff8?String(Math[_0x498f67(0x673)](this['xparam'](0x7)*0x64))+'%':this[_0x498f67(0x8ca)](0x7);if(_0xc2d8b6===_0x498f67(0x7cf))return _0x4caff8?String(Math[_0x498f67(0x673)](this[_0x498f67(0x8ca)](0x8)*0x64))+'%':this[_0x498f67(0x8ca)](0x8);if(_0xc2d8b6==='TRG')return _0x4caff8?String(Math[_0x498f67(0x673)](this[_0x498f67(0x8ca)](0x9)*0x64))+'%':this[_0x498f67(0x8ca)](0x9);if(_0xc2d8b6===_0x498f67(0x4c5))return _0x4caff8?String(Math[_0x498f67(0x673)](this[_0x498f67(0xa3c)](0x0)*0x64))+'%':this[_0x498f67(0xa3c)](0x0);if(_0xc2d8b6===_0x498f67(0x15e))return _0x4caff8?String(Math['round'](this[_0x498f67(0xa3c)](0x1)*0x64))+'%':this['sparam'](0x1);if(_0xc2d8b6===_0x498f67(0x77e))return _0x4caff8?String(Math['round'](this[_0x498f67(0xa3c)](0x2)*0x64))+'%':this[_0x498f67(0xa3c)](0x2);if(_0xc2d8b6===_0x498f67(0x3f1))return _0x4caff8?String(Math['round'](this[_0x498f67(0xa3c)](0x3)*0x64))+'%':this[_0x498f67(0xa3c)](0x3);if(_0xc2d8b6==='MCR')return _0x4caff8?String(Math['round'](this[_0x498f67(0xa3c)](0x4)*0x64))+'%':this[_0x498f67(0xa3c)](0x4);if(_0xc2d8b6===_0x498f67(0x7f6))return _0x4caff8?String(Math[_0x498f67(0x673)](this[_0x498f67(0xa3c)](0x5)*0x64))+'%':this[_0x498f67(0xa3c)](0x5);if(_0xc2d8b6===_0x498f67(0x1ea))return _0x4caff8?String(Math[_0x498f67(0x673)](this[_0x498f67(0xa3c)](0x6)*0x64))+'%':this[_0x498f67(0xa3c)](0x6);if(_0xc2d8b6==='MDR')return _0x4caff8?String(Math[_0x498f67(0x673)](this[_0x498f67(0xa3c)](0x7)*0x64))+'%':this[_0x498f67(0xa3c)](0x7);if(_0xc2d8b6===_0x498f67(0x624))return _0x4caff8?String(Math['round'](this[_0x498f67(0xa3c)](0x8)*0x64))+'%':this['sparam'](0x8);if(_0xc2d8b6===_0x498f67(0x393))return _0x4caff8?String(Math['round'](this[_0x498f67(0xa3c)](0x9)*0x64))+'%':this['sparam'](0x9);if(VisuMZ[_0x498f67(0x191)][_0x498f67(0x4dc)][_0xc2d8b6]){const _0xdac244=VisuMZ[_0x498f67(0x191)][_0x498f67(0x4dc)][_0xc2d8b6],_0x22d6ec=this[_0xdac244];return VisuMZ[_0x498f67(0x191)]['CustomParamType'][_0xc2d8b6]===_0x498f67(0x1a7)?_0x22d6ec:_0x4caff8?String(Math[_0x498f67(0x673)](_0x22d6ec*0x64))+'%':_0x22d6ec;}return'';},Game_BattlerBase[_0x29d580(0x356)][_0x29d580(0x7e6)]=function(){const _0xc2b5f9=_0x29d580;return this[_0xc2b5f9(0x360)]()&&this[_0xc2b5f9(0xa0c)]<this[_0xc2b5f9(0x940)]*VisuMZ[_0xc2b5f9(0x191)][_0xc2b5f9(0xa48)]['Param'][_0xc2b5f9(0x893)];},Game_Battler[_0x29d580(0x356)][_0x29d580(0x605)]=function(){SoundManager['playMiss'](),this['requestMotion']('evade');},VisuMZ[_0x29d580(0x191)][_0x29d580(0x32b)]=Game_Actor[_0x29d580(0x356)][_0x29d580(0x625)],Game_Actor[_0x29d580(0x356)][_0x29d580(0x625)]=function(_0x51b9bf){const _0xe53772=_0x29d580;if(this[_0xe53772(0x5c5)]>0x63)return this[_0xe53772(0xa0e)](_0x51b9bf);return VisuMZ[_0xe53772(0x191)][_0xe53772(0x32b)]['call'](this,_0x51b9bf);},Game_Actor['prototype'][_0x29d580(0xa0e)]=function(_0x3d2514){const _0x105733=_0x29d580,_0x5e4e1e=this[_0x105733(0x645)]()['params'][_0x3d2514][0x63],_0x5e00c2=this[_0x105733(0x645)]()[_0x105733(0x182)][_0x3d2514][0x62];return _0x5e4e1e+(_0x5e4e1e-_0x5e00c2)*(this[_0x105733(0x5c5)]-0x63);},VisuMZ[_0x29d580(0x191)][_0x29d580(0x889)]=Game_Actor[_0x29d580(0x356)][_0x29d580(0x82a)],Game_Actor['prototype'][_0x29d580(0x82a)]=function(_0x46407a,_0x92b7a1){const _0x5343d2=_0x29d580;$gameTemp[_0x5343d2(0x7cb)]=!![],VisuMZ[_0x5343d2(0x191)][_0x5343d2(0x889)][_0x5343d2(0x84c)](this,_0x46407a,_0x92b7a1),$gameTemp['_changingClass']=undefined;},VisuMZ[_0x29d580(0x191)][_0x29d580(0x836)]=Game_Actor['prototype'][_0x29d580(0x222)],Game_Actor['prototype']['levelUp']=function(){const _0x3a1b54=_0x29d580;VisuMZ[_0x3a1b54(0x191)][_0x3a1b54(0x836)][_0x3a1b54(0x84c)](this);if(!$gameTemp[_0x3a1b54(0x7cb)])this[_0x3a1b54(0x32c)]();},Game_Actor[_0x29d580(0x356)][_0x29d580(0x32c)]=function(){const _0x3d3ada=_0x29d580;this[_0x3d3ada(0x76c)]={};if(VisuMZ[_0x3d3ada(0x191)][_0x3d3ada(0xa48)]['QoL'][_0x3d3ada(0x8be)])this[_0x3d3ada(0xa0c)]=this['mhp'];if(VisuMZ[_0x3d3ada(0x191)][_0x3d3ada(0xa48)][_0x3d3ada(0x53e)]['LevelUpFullMp'])this['_mp']=this[_0x3d3ada(0x340)];},Game_Actor['prototype'][_0x29d580(0xa52)]=function(){const _0x309088=_0x29d580;if(this[_0x309088(0x2b9)]())return 0x1;const _0x5eaace=this[_0x309088(0x287)]()-this[_0x309088(0x4f7)](),_0x21610c=this['currentExp']()-this[_0x309088(0x4f7)]();return(_0x21610c/_0x5eaace)[_0x309088(0x8ff)](0x0,0x1);},Game_Actor[_0x29d580(0x356)][_0x29d580(0x959)]=function(){const _0x5f054d=_0x29d580,_0xe53137=Game_Battler['prototype'][_0x5f054d(0x959)]['call'](this);for(const _0x2dcb05 of this['equips']()){_0x2dcb05&&_0xe53137[_0x5f054d(0x979)](_0x2dcb05);}return _0xe53137[_0x5f054d(0x979)](this[_0x5f054d(0x645)](),this[_0x5f054d(0x796)]()),_0xe53137;},Object['defineProperty'](Game_Enemy[_0x29d580(0x356)],'level',{'get':function(){const _0x551e7f=_0x29d580;return this[_0x551e7f(0xa35)]();},'configurable':!![]}),Game_Enemy['prototype'][_0x29d580(0xa35)]=function(){const _0x4f8749=_0x29d580;return this[_0x4f8749(0x996)]()[_0x4f8749(0x5c5)];},Game_Enemy[_0x29d580(0x356)][_0x29d580(0x9d4)]=function(){const _0x4d46f6=_0x29d580;if(!this[_0x4d46f6(0x434)]){this[_0x4d46f6(0x48d)]+=Math['round']((Graphics[_0x4d46f6(0x638)]-0x270)/0x2),this[_0x4d46f6(0x48d)]-=Math[_0x4d46f6(0x722)]((Graphics['height']-Graphics['boxHeight'])/0x2);if($gameSystem['isSideView']())this[_0x4d46f6(0x5f0)]-=Math['floor']((Graphics[_0x4d46f6(0x31b)]-Graphics[_0x4d46f6(0x686)])/0x2);else{if(_0x4d46f6(0x4c6)===_0x4d46f6(0x85e)){var _0x5e2438=_0x553fa8(_0x4fd2bb['$1']);if(_0x5e2438===0x0)_0x5e2438=_0x4a2cab[_0x4d46f6(0x838)];_0x566666=_0x5991c2['max'](_0xa9998d,_0x5e2438);}else this[_0x4d46f6(0x5f0)]+=Math[_0x4d46f6(0x673)]((Graphics['boxWidth']-0x330)/0x2);}}this[_0x4d46f6(0x434)]=!![];},Game_Party[_0x29d580(0x356)][_0x29d580(0xa49)]=function(){const _0x3e33e5=_0x29d580;return VisuMZ[_0x3e33e5(0x191)]['Settings'][_0x3e33e5(0x715)][_0x3e33e5(0x2d2)];},VisuMZ['CoreEngine'][_0x29d580(0x846)]=Game_Party[_0x29d580(0x356)][_0x29d580(0x8aa)],Game_Party[_0x29d580(0x356)][_0x29d580(0x8aa)]=function(_0x1c10e1){const _0x5f5296=_0x29d580;if(VisuMZ[_0x5f5296(0x191)][_0x5f5296(0xa48)][_0x5f5296(0x53e)][_0x5f5296(0x49c)]&&DataManager[_0x5f5296(0x9a3)](_0x1c10e1))return;VisuMZ[_0x5f5296(0x191)]['Game_Party_consumeItem'][_0x5f5296(0x84c)](this,_0x1c10e1);},Game_Party[_0x29d580(0x356)][_0x29d580(0x66c)]=function(){const _0x37889b=_0x29d580,_0x50f133=VisuMZ['CoreEngine'][_0x37889b(0xa48)]['QoL'],_0x9cd8ca=_0x50f133[_0x37889b(0x2ca)]??0x63;let _0x3b6c12=[];(_0x50f133[_0x37889b(0x732)]??!![])&&(_0x3b6c12=_0x3b6c12['concat']($dataItems));(_0x50f133[_0x37889b(0x4f3)]??!![])&&(_0x3b6c12=_0x3b6c12[_0x37889b(0x8d2)]($dataWeapons));(_0x50f133['BTestArmors']??!![])&&(_0x37889b(0x9e8)!==_0x37889b(0x9e8)?(_0x345f09[_0x37889b(0x8d9)][0x57]='up',_0x5e70f6[_0x37889b(0x8d9)][0x41]=_0x37889b(0x1a5),_0x5773fe['keyMapper'][0x53]=_0x37889b(0x819),_0x1584d1[_0x37889b(0x8d9)][0x44]=_0x37889b(0x74e),_0x1f8044[_0x37889b(0x8d9)][0x45]=_0x37889b(0x36f)):_0x3b6c12=_0x3b6c12[_0x37889b(0x8d2)]($dataArmors));for(const _0x2d8847 of _0x3b6c12){if(!_0x2d8847)continue;if(_0x2d8847[_0x37889b(0xa21)][_0x37889b(0x894)]()<=0x0)continue;if(_0x2d8847[_0x37889b(0xa21)][_0x37889b(0x663)](/-----/i))continue;this[_0x37889b(0x18e)](_0x2d8847,_0x9cd8ca);}},VisuMZ[_0x29d580(0x191)][_0x29d580(0xa0a)]=Game_Troop[_0x29d580(0x356)]['setup'],Game_Troop[_0x29d580(0x356)]['setup']=function(_0x61663){const _0x59baa2=_0x29d580;$gameTemp[_0x59baa2(0x9b5)](),$gameTemp[_0x59baa2(0x5ec)](_0x61663),VisuMZ[_0x59baa2(0x191)][_0x59baa2(0xa0a)][_0x59baa2(0x84c)](this,_0x61663);},VisuMZ[_0x29d580(0x191)][_0x29d580(0x8bd)]=Game_Map[_0x29d580(0x356)]['setup'],Game_Map[_0x29d580(0x356)]['setup']=function(_0x5e65fd){const _0x1359d9=_0x29d580;VisuMZ['CoreEngine'][_0x1359d9(0x8bd)][_0x1359d9(0x84c)](this,_0x5e65fd),this['checkCoreEngineDisplayCenter'](),this['setupCoreEngine'](_0x5e65fd);},Game_Map[_0x29d580(0x356)][_0x29d580(0x78d)]=function(){const _0x12021f=_0x29d580;this[_0x12021f(0x526)]=VisuMZ[_0x12021f(0x191)][_0x12021f(0xa48)]['QoL'][_0x12021f(0x885)]||![];const _0x4d2413=VisuMZ['CoreEngine']['Settings'][_0x12021f(0x672)],_0x2105b1=$dataMap?$dataMap['note']||'':'';if(_0x2105b1['match'](/<SHOW TILE SHADOWS>/i))_0x12021f(0x680)===_0x12021f(0x680)?this[_0x12021f(0x526)]=![]:_0x59beca+=_0x4e1634;else _0x2105b1['match'](/<HIDE TILE SHADOWS>/i)&&(this[_0x12021f(0x526)]=!![]);if(_0x2105b1[_0x12021f(0x663)](/<SCROLL LOCK X>/i))_0x12021f(0x505)!=='tkoOy'?(_0x5025d7[_0x12021f(0x831)](_0x12021f(0x616)),_0x1667fd[_0x12021f(0x831)](_0x435662)):(this[_0x12021f(0x31e)]()['centerX']=!![],this[_0x12021f(0x31e)]()[_0x12021f(0x2dd)]=_0x4d2413[_0x12021f(0x42d)]);else _0x2105b1[_0x12021f(0x663)](/<SCROLL LOCK X: (.*?)>/i)&&(this['centerCameraCheckData']()[_0x12021f(0x97b)]=!![],this['centerCameraCheckData']()[_0x12021f(0x2dd)]=Number(RegExp['$1']));if(_0x2105b1[_0x12021f(0x663)](/<SCROLL LOCK Y>/i))this[_0x12021f(0x31e)]()[_0x12021f(0x843)]=!![],this[_0x12021f(0x31e)]()[_0x12021f(0x32e)]=_0x4d2413['DisplayLockY'];else _0x2105b1[_0x12021f(0x663)](/<SCROLL LOCK Y: (.*?)>/i)&&(this[_0x12021f(0x31e)]()['centerY']=!![],this[_0x12021f(0x31e)]()[_0x12021f(0x32e)]=Number(RegExp['$1']));},Game_Map[_0x29d580(0x356)][_0x29d580(0x569)]=function(){const _0x2b2274=_0x29d580;if(this[_0x2b2274(0x526)]===undefined)this['setupCoreEngine']();return this[_0x2b2274(0x526)];},Game_Map[_0x29d580(0x356)]['checkCoreEngineDisplayCenter']=function(){const _0x3d2504=_0x29d580,_0x53bc83=VisuMZ[_0x3d2504(0x191)]['Settings'][_0x3d2504(0x672)];this[_0x3d2504(0x391)]={'centerX':![],'centerY':![],'displayX':0x0,'displayY':0x0};if(_0x53bc83[_0x3d2504(0xa3b)]){const _0x218160=Graphics['width']/this[_0x3d2504(0x7ae)]();_0x218160%0x1!==0x0&&Math[_0x3d2504(0x7ec)](_0x218160)===this['width']()&&!this[_0x3d2504(0x4b1)]()&&(_0x3d2504(0x613)!==_0x3d2504(0x613)?(_0x2afc31['prototype'][_0x3d2504(0x1ce)][_0x3d2504(0x84c)](this),this[_0x3d2504(0x2a9)]=_0x118d8e,this[_0x3d2504(0x9ff)]=null,this[_0x3d2504(0x95e)]()):(this['_centerCameraCheck']['centerX']=!![],this['_centerCameraCheck'][_0x3d2504(0x2dd)]=_0x53bc83[_0x3d2504(0x42d)]||0x0));}if(_0x53bc83[_0x3d2504(0x910)]){if(_0x3d2504(0x7b5)!=='tkvqE'){const _0x303389=Graphics[_0x3d2504(0x638)]/this[_0x3d2504(0x72b)]();_0x303389%0x1!==0x0&&Math[_0x3d2504(0x7ec)](_0x303389)===this[_0x3d2504(0x638)]()&&!this['isLoopVertical']()&&(this[_0x3d2504(0x391)][_0x3d2504(0x843)]=!![],this[_0x3d2504(0x391)][_0x3d2504(0x32e)]=_0x53bc83[_0x3d2504(0x3fc)]||0x0);}else _0x31f581=_0x247f6f[_0x3d2504(0x673)](_0x220e6f),_0x4ac54d=_0x12bc6f[_0x3d2504(0x673)](_0x2e3cad),_0x63dd66[_0x3d2504(0x191)][_0x3d2504(0x7fb)]['call'](this,_0x3e3e4f,_0x5ea74d,_0x598c58);}},Game_Map['prototype'][_0x29d580(0x31e)]=function(){const _0x4e1c89=_0x29d580;if(this['_centerCameraCheck']===undefined)this[_0x4e1c89(0x62d)]();return this[_0x4e1c89(0x391)];},VisuMZ[_0x29d580(0x191)][_0x29d580(0x8c7)]=Game_Map[_0x29d580(0x356)]['scrollDown'],Game_Map['prototype'][_0x29d580(0x9ea)]=function(_0x16c467){const _0x4e0de7=_0x29d580;if(this[_0x4e0de7(0x31e)]()[_0x4e0de7(0x843)]&&$gameScreen[_0x4e0de7(0x6fc)]()===0x1){if(_0x4e0de7(0x8ac)===_0x4e0de7(0x714))_0x352d01['erasePicture'](_0x3ccea6);else{this[_0x4e0de7(0x4a9)]=this[_0x4e0de7(0x31e)]()[_0x4e0de7(0x32e)];return;}}VisuMZ[_0x4e0de7(0x191)][_0x4e0de7(0x8c7)][_0x4e0de7(0x84c)](this,_0x16c467);},VisuMZ['CoreEngine'][_0x29d580(0x247)]=Game_Map[_0x29d580(0x356)][_0x29d580(0x317)],Game_Map[_0x29d580(0x356)][_0x29d580(0x317)]=function(_0xb138f){const _0x2a5e4d=_0x29d580;if(this[_0x2a5e4d(0x31e)]()[_0x2a5e4d(0x97b)]&&$gameScreen['zoomScale']()===0x1){this['_displayX']=this[_0x2a5e4d(0x31e)]()['displayX'];return;}VisuMZ[_0x2a5e4d(0x191)][_0x2a5e4d(0x247)][_0x2a5e4d(0x84c)](this,_0xb138f);},VisuMZ['CoreEngine'][_0x29d580(0x2a6)]=Game_Map[_0x29d580(0x356)][_0x29d580(0x210)],Game_Map[_0x29d580(0x356)][_0x29d580(0x210)]=function(_0x525232){const _0x1c20e4=_0x29d580;if(this['centerCameraCheckData']()[_0x1c20e4(0x97b)]&&$gameScreen[_0x1c20e4(0x6fc)]()===0x1){if(_0x1c20e4(0x974)===_0x1c20e4(0x974)){this['_displayX']=this[_0x1c20e4(0x31e)]()[_0x1c20e4(0x2dd)];return;}else this[_0x1c20e4(0x873)](_0xcc8dc3);}VisuMZ[_0x1c20e4(0x191)][_0x1c20e4(0x2a6)][_0x1c20e4(0x84c)](this,_0x525232);},VisuMZ[_0x29d580(0x191)][_0x29d580(0x7d3)]=Game_Map[_0x29d580(0x356)][_0x29d580(0x856)],Game_Map['prototype']['scrollUp']=function(_0x1e592d){const _0x683a33=_0x29d580;if(this['centerCameraCheckData']()['centerY']&&$gameScreen[_0x683a33(0x6fc)]()===0x1){if(_0x683a33(0x851)===_0x683a33(0x6f0)){var _0x1995fb=_0x31c11f(_0x23f46c['$1']);try{_0x21c136=_0x178214[_0x683a33(0x55d)](_0x4c75f1,_0x338dd8(_0x1c6b47(_0x1995fb)));}catch(_0x581242){if(_0x54d44b[_0x683a33(0x56c)]())_0x39f06e[_0x683a33(0x831)](_0x581242);}}else{this[_0x683a33(0x4a9)]=this[_0x683a33(0x31e)]()['displayY'];return;}}VisuMZ['CoreEngine'][_0x683a33(0x7d3)][_0x683a33(0x84c)](this,_0x1e592d);},VisuMZ[_0x29d580(0x191)][_0x29d580(0x9d5)]=Game_Character[_0x29d580(0x356)][_0x29d580(0x24b)],Game_Character[_0x29d580(0x356)]['processMoveCommand']=function(_0x25df10){const _0x321f00=_0x29d580;try{VisuMZ['CoreEngine'][_0x321f00(0x9d5)][_0x321f00(0x84c)](this,_0x25df10);}catch(_0xb34d3f){if(_0x321f00(0x308)!=='wwKpC')this[_0x321f00(0x5bf)]&&(this[_0x321f00(0x9ab)]-=this['openingSpeed'](),this['isClosed']()&&(this[_0x321f00(0x5bf)]=![]));else{if($gameTemp[_0x321f00(0x56c)]())console[_0x321f00(0x831)](_0xb34d3f);}}},Game_Player[_0x29d580(0x356)][_0x29d580(0x22f)]=function(){const _0x17edae=_0x29d580,_0x4b5be9=$gameMap[_0x17edae(0x4ac)]();this['_encounterCount']=Math['randomInt'](_0x4b5be9)+Math[_0x17edae(0x410)](_0x4b5be9)+this[_0x17edae(0x8a9)]();},Game_Player[_0x29d580(0x356)][_0x29d580(0x8a9)]=function(){const _0x25d212=_0x29d580;if($dataMap&&$dataMap[_0x25d212(0x7c5)]&&$dataMap[_0x25d212(0x7c5)]['match'](/<MINIMUM ENCOUNTER STEPS:[ ](\d+)>/i))return Number(RegExp['$1']);else{if('rRmGP'!==_0x25d212(0x493)){const _0x47cdbd=_0x44dcf0('fs');let _0x1d62b0='Exported_Script_%1.txt'[_0x25d212(0x7d6)](_0x5e057c||'0');_0x47cdbd['writeFile'](_0x1d62b0,_0x31d475,_0x4ab922=>{const _0x54de62=_0x25d212;if(_0x4ab922)throw _0x58fa27;else _0x483a69&&_0x59ad4d('Saved\x20file\x20as\x20%1\x20in\x20project\x20folder.'[_0x54de62(0x7d6)](_0x1d62b0));});}else return VisuMZ[_0x25d212(0x191)][_0x25d212(0xa48)][_0x25d212(0x53e)][_0x25d212(0x475)];}},VisuMZ[_0x29d580(0x191)][_0x29d580(0x4ee)]=Game_Event[_0x29d580(0x356)][_0x29d580(0x837)],Game_Event['prototype'][_0x29d580(0x837)]=function(_0x415779,_0x5d2744){const _0x466f6d=_0x29d580;if(this[_0x466f6d(0x95a)]())return this['checkSmartEventCollision'](_0x415779,_0x5d2744);else{if(_0x466f6d(0x490)!==_0x466f6d(0x6f2))return VisuMZ[_0x466f6d(0x191)]['Game_Event_isCollidedWithEvents'][_0x466f6d(0x84c)](this,_0x415779,_0x5d2744);else _0x28518a[_0x466f6d(0x73a)]&&(this['_forcedBattleSys']='PTB');}},Game_Event[_0x29d580(0x356)][_0x29d580(0x95a)]=function(){const _0x31b395=_0x29d580;return VisuMZ[_0x31b395(0x191)][_0x31b395(0xa48)][_0x31b395(0x53e)][_0x31b395(0x58a)];},Game_Event['prototype'][_0x29d580(0x87b)]=function(_0x3dda13,_0x23dd4c){const _0x520859=_0x29d580;if(!this[_0x520859(0x659)]())return![];else{if(_0x520859(0x8bf)!==_0x520859(0x43b)){const _0x22ad59=$gameMap[_0x520859(0x460)](_0x3dda13,_0x23dd4c)[_0x520859(0x6cf)](_0x364bac=>_0x364bac[_0x520859(0x659)]());return _0x22ad59[_0x520859(0x743)]>0x0;}else _0x2d1d35['log'](_0x520859(0x6bb)),_0x3616a4[_0x520859(0x831)](_0x493afa);}},VisuMZ[_0x29d580(0x191)][_0x29d580(0x344)]=Game_Interpreter[_0x29d580(0x356)][_0x29d580(0x8e7)],Game_Interpreter[_0x29d580(0x356)][_0x29d580(0x8e7)]=function(_0x3b8dbd){const _0x14a7ea=_0x29d580,_0x43568b=this[_0x14a7ea(0x3b3)]();if(_0x43568b[_0x14a7ea(0x663)](/\/\/[ ]SCRIPT[ ]CALL/i)){if(_0x14a7ea(0x7ee)!==_0x14a7ea(0x7ee))this[_0x14a7ea(0x61a)][_0x14a7ea(0x946)]>=0x18&&(this[_0x14a7ea(0x61a)][_0x14a7ea(0x946)]-=0x6);else return this[_0x14a7ea(0x6dd)](_0x43568b);}else return VisuMZ[_0x14a7ea(0x191)][_0x14a7ea(0x344)]['call'](this,_0x3b8dbd);},Game_Interpreter[_0x29d580(0x356)][_0x29d580(0x3b3)]=function(){const _0x553a47=_0x29d580;let _0x39a89d='',_0x1f5eb2=this['_index']+0x1;while(this['_list'][_0x1f5eb2]&&this[_0x553a47(0x34c)][_0x1f5eb2][_0x553a47(0x67b)]===0x195){if(_0x553a47(0x8f6)!=='JoSAW')throw _0x14696;else _0x39a89d+=this['_list'][_0x1f5eb2]['parameters'][0x0]+'\x0a',_0x1f5eb2++;}return _0x39a89d;},Game_Interpreter['prototype']['runCombinedScrollingTextAsCode']=function(_0x40ec4f){const _0x1dd9bc=_0x29d580;try{eval(_0x40ec4f);}catch(_0x12e393){$gameTemp[_0x1dd9bc(0x56c)]()&&(console[_0x1dd9bc(0x831)](_0x1dd9bc(0x616)),console[_0x1dd9bc(0x831)](_0x12e393));}return!![];},VisuMZ[_0x29d580(0x191)][_0x29d580(0x324)]=Game_Interpreter[_0x29d580(0x356)][_0x29d580(0x241)],Game_Interpreter[_0x29d580(0x356)]['command111']=function(_0x400099){const _0x1ff2a8=_0x29d580;try{'EssdS'!==_0x1ff2a8(0x4f1)?this[_0x1ff2a8(0x37f)]():VisuMZ[_0x1ff2a8(0x191)]['Game_Interpreter_command111'][_0x1ff2a8(0x84c)](this,_0x400099);}catch(_0x130d81){$gameTemp[_0x1ff2a8(0x56c)]()&&(console[_0x1ff2a8(0x831)]('Conditional\x20Branch\x20Script\x20Error'),console['log'](_0x130d81)),this[_0x1ff2a8(0x2b8)]();}return!![];},VisuMZ[_0x29d580(0x191)][_0x29d580(0x3ac)]=Game_Interpreter[_0x29d580(0x356)][_0x29d580(0x5f1)],Game_Interpreter[_0x29d580(0x356)][_0x29d580(0x5f1)]=function(_0x23b470){const _0x6a6e24=_0x29d580;try{VisuMZ[_0x6a6e24(0x191)][_0x6a6e24(0x3ac)][_0x6a6e24(0x84c)](this,_0x23b470);}catch(_0x20f56c){if(_0x6a6e24(0x710)!==_0x6a6e24(0x8df))$gameTemp['isPlaytest']()&&(_0x6a6e24(0x57a)!=='CXtZr'?(_0x5d676f[_0x6a6e24(0x191)]['SceneManager_initialize'][_0x6a6e24(0x84c)](this),this[_0x6a6e24(0x53a)]()):(console[_0x6a6e24(0x831)](_0x6a6e24(0x290)),console[_0x6a6e24(0x831)](_0x20f56c)));else{var _0x23d82c=_0x673995(_0x1b42a2['$1'])/0x64;_0xef0d08*=_0x23d82c;}}return!![];},VisuMZ[_0x29d580(0x191)]['Game_Interpreter_command355']=Game_Interpreter[_0x29d580(0x356)][_0x29d580(0x406)],Game_Interpreter[_0x29d580(0x356)][_0x29d580(0x406)]=function(){const _0x2e39cb=_0x29d580;try{VisuMZ['CoreEngine'][_0x2e39cb(0x92f)][_0x2e39cb(0x84c)](this);}catch(_0x43980f){if(_0x2e39cb(0x7f1)===_0x2e39cb(0x7f1))$gameTemp[_0x2e39cb(0x56c)]()&&(console['log'](_0x2e39cb(0x6bb)),console[_0x2e39cb(0x831)](_0x43980f));else return _0x1ea277['CoreEngine'][_0x2e39cb(0xa48)]['UI'][_0x2e39cb(0x2f1)];}return!![];},VisuMZ[_0x29d580(0x191)][_0x29d580(0x745)]=Game_Interpreter['prototype'][_0x29d580(0x6d0)],Game_Interpreter['prototype'][_0x29d580(0x6d0)]=function(_0x4bb6ad){const _0xc08025=_0x29d580;return $gameTemp[_0xc08025(0x60c)](this),VisuMZ[_0xc08025(0x191)][_0xc08025(0x745)]['call'](this,_0x4bb6ad);},Scene_Base['prototype'][_0x29d580(0x560)]=function(){const _0x60dc57=_0x29d580;return VisuMZ['CoreEngine'][_0x60dc57(0xa48)]['UI'][_0x60dc57(0x6e9)];},Scene_Base[_0x29d580(0x356)][_0x29d580(0x786)]=function(){const _0x1a0d09=_0x29d580;return VisuMZ[_0x1a0d09(0x191)][_0x1a0d09(0xa48)]['UI'][_0x1a0d09(0x437)];},Scene_Base[_0x29d580(0x356)][_0x29d580(0x28d)]=function(){const _0x1502a8=_0x29d580;return VisuMZ['CoreEngine']['Settings']['UI'][_0x1502a8(0x827)];},Scene_Base[_0x29d580(0x356)][_0x29d580(0x377)]=function(){const _0xf2b31a=_0x29d580;return VisuMZ[_0xf2b31a(0x191)]['Settings']['UI'][_0xf2b31a(0x97c)];},Scene_Base[_0x29d580(0x356)]['mainCommandWidth']=function(){const _0x1bae2f=_0x29d580;return VisuMZ['CoreEngine']['Settings']['UI'][_0x1bae2f(0x2f1)];},Scene_Base[_0x29d580(0x356)][_0x29d580(0x261)]=function(){const _0x153bea=_0x29d580;return VisuMZ[_0x153bea(0x191)][_0x153bea(0xa48)]['UI'][_0x153bea(0x530)];},Scene_Base[_0x29d580(0x356)][_0x29d580(0x1b2)]=function(){const _0x4e3f8f=_0x29d580;return VisuMZ[_0x4e3f8f(0x191)][_0x4e3f8f(0xa48)][_0x4e3f8f(0x80e)][_0x4e3f8f(0x5f9)];},VisuMZ[_0x29d580(0x191)][_0x29d580(0x378)]=Scene_Base[_0x29d580(0x356)][_0x29d580(0x5d8)],Scene_Base[_0x29d580(0x356)][_0x29d580(0x5d8)]=function(){const _0x3e4629=_0x29d580;VisuMZ[_0x3e4629(0x191)][_0x3e4629(0x378)][_0x3e4629(0x84c)](this),this[_0x3e4629(0x363)](),this['_windowLayer']['x']=Math[_0x3e4629(0x673)](this[_0x3e4629(0x42b)]['x']),this[_0x3e4629(0x42b)]['y']=Math[_0x3e4629(0x673)](this[_0x3e4629(0x42b)]['y']);},Scene_Base[_0x29d580(0x356)][_0x29d580(0x363)]=function(){},Scene_Base[_0x29d580(0x356)]['buttonAssistKey1']=function(){const _0x19be41=_0x29d580;return TextManager['getInputMultiButtonStrings'](_0x19be41(0x21c),_0x19be41(0x36f));},Scene_Base[_0x29d580(0x356)]['buttonAssistKey2']=function(){const _0x5c17fc=_0x29d580;return TextManager['getInputButtonString'](_0x5c17fc(0x326));},Scene_Base[_0x29d580(0x356)]['buttonAssistKey3']=function(){const _0x117564=_0x29d580;return TextManager[_0x117564(0x75c)](_0x117564(0x621));},Scene_Base[_0x29d580(0x356)][_0x29d580(0x816)]=function(){const _0x3629a4=_0x29d580;return TextManager[_0x3629a4(0x75c)]('ok');},Scene_Base[_0x29d580(0x356)]['buttonAssistKey5']=function(){const _0x330e22=_0x29d580;return TextManager[_0x330e22(0x75c)](_0x330e22(0x622));},Scene_Base[_0x29d580(0x356)][_0x29d580(0x4a0)]=function(){const _0xbb2336=_0x29d580;if(this['_pageupButton']&&this[_0xbb2336(0x650)]['visible']){if(_0xbb2336(0x5a7)===_0xbb2336(0x68b)){const _0x58d6b7=_0x5d46b9[_0xbb2336(0x54b)];let _0x4c6745=_0x1c7ea7['TextStr'];if(['','Untitled']['includes'](_0x4c6745))_0x4c6745=_0x40a991[_0xbb2336(0x869)][_0xbb2336(0x84c)](this);const _0x46eed7=_0x31f0ab['EnableJS'][_0xbb2336(0x84c)](this),_0x36ece8=_0x41c143['ExtJS']['call'](this);this[_0xbb2336(0x2ee)](_0x4c6745,_0x58d6b7,_0x46eed7,_0x36ece8),this[_0xbb2336(0x855)](_0x58d6b7,_0x26b383[_0xbb2336(0x379)]['bind'](this,_0x36ece8));}else return TextManager['buttonAssistSwitch'];}else{if(_0xbb2336(0x39c)===_0xbb2336(0x39c))return'';else _0x4ebd76=_0x31dddc[_0xbb2336(0x8d2)](_0x597b36);}},Scene_Base['prototype'][_0x29d580(0x549)]=function(){return'';},Scene_Base[_0x29d580(0x356)][_0x29d580(0x45a)]=function(){return'';},Scene_Base['prototype'][_0x29d580(0x7c3)]=function(){return TextManager['buttonAssistOk'];},Scene_Base[_0x29d580(0x356)][_0x29d580(0x83f)]=function(){return TextManager['buttonAssistCancel'];},Scene_Base[_0x29d580(0x356)][_0x29d580(0x3f8)]=function(){return 0x0;},Scene_Base[_0x29d580(0x356)][_0x29d580(0x1b0)]=function(){return 0x0;},Scene_Base['prototype'][_0x29d580(0x9c1)]=function(){return 0x0;},Scene_Base[_0x29d580(0x356)][_0x29d580(0x70f)]=function(){return 0x0;},Scene_Base[_0x29d580(0x356)]['buttonAssistOffset5']=function(){return 0x0;},VisuMZ[_0x29d580(0x191)][_0x29d580(0x56d)]=Scene_Boot[_0x29d580(0x356)][_0x29d580(0x1dc)],Scene_Boot['prototype'][_0x29d580(0x1dc)]=function(){const _0x2cb2e2=_0x29d580;VisuMZ[_0x2cb2e2(0x191)][_0x2cb2e2(0x56d)]['call'](this),this[_0x2cb2e2(0x826)]();},Scene_Boot['prototype']['loadGameImagesCoreEngine']=function(){const _0x225c01=_0x29d580,_0x2ad0c5=['animations','battlebacks1','battlebacks2','characters',_0x225c01(0x5ae),'faces',_0x225c01(0x3be),_0x225c01(0x861),_0x225c01(0x305),_0x225c01(0x20e),_0x225c01(0x6bf),'tilesets','titles1',_0x225c01(0x662)];for(const _0x5d8016 of _0x2ad0c5){const _0x1f4a8d=VisuMZ[_0x225c01(0x191)]['Settings']['ImgLoad'][_0x5d8016],_0x3f1134=_0x225c01(0x40d)[_0x225c01(0x7d6)](_0x5d8016);for(const _0x46c976 of _0x1f4a8d){_0x225c01(0x2ba)!==_0x225c01(0x927)?ImageManager[_0x225c01(0x904)](_0x3f1134,_0x46c976):this[_0x225c01(0x968)]=_0x2c9bb0;}}},VisuMZ[_0x29d580(0x191)][_0x29d580(0x208)]=Scene_Boot[_0x29d580(0x356)][_0x29d580(0x649)],Scene_Boot[_0x29d580(0x356)][_0x29d580(0x649)]=function(){const _0x4fc5c4=_0x29d580;if(Utils[_0x4fc5c4(0x9dd)](_0x4fc5c4(0x951))&&VisuMZ[_0x4fc5c4(0x191)][_0x4fc5c4(0xa48)][_0x4fc5c4(0x53e)]['NewGameBoot'])this['startAutoNewGame']();else{if('xEewI'==='csTXv'){const _0x3dc5e4=this[_0x4fc5c4(0x272)]();let _0x2a4c54=_0x430e37[_0x4fc5c4(0x731)];this['setAction'](_0x41000e,_0x3dc5e4[0x0]);for(const _0x4fab2b of _0x3dc5e4){const _0x5cbf72=_0x4fab2b[_0x4fc5c4(0xa08)]();_0x5cbf72>_0x2a4c54&&(_0x2a4c54=_0x5cbf72,this[_0x4fc5c4(0x5ab)](_0x1ec6fa,_0x4fab2b));}}else VisuMZ['CoreEngine'][_0x4fc5c4(0x208)][_0x4fc5c4(0x84c)](this);}},Scene_Boot[_0x29d580(0x356)][_0x29d580(0x343)]=function(){const _0xf03321=_0x29d580;this['checkPlayerLocation'](),DataManager[_0xf03321(0x78f)](),SceneManager[_0xf03321(0x6e5)](Scene_Map);},Scene_Boot[_0x29d580(0x356)][_0x29d580(0x2e9)]=function(){const _0x30f7fb=_0x29d580,_0x22b9ec=$dataSystem[_0x30f7fb(0x753)][_0x30f7fb(0x99f)],_0x5e5f64=$dataSystem[_0x30f7fb(0x753)][_0x30f7fb(0x2f6)],_0x5eee6c=VisuMZ['CoreEngine'][_0x30f7fb(0xa48)]['UI'][_0x30f7fb(0x66e)];Graphics[_0x30f7fb(0x686)]=_0x22b9ec-_0x5eee6c*0x2,Graphics[_0x30f7fb(0x3d2)]=_0x5e5f64-_0x5eee6c*0x2,this['determineSideButtonLayoutValid']();},VisuMZ['CoreEngine'][_0x29d580(0x46c)]=Scene_Boot[_0x29d580(0x356)][_0x29d580(0x60e)],Scene_Boot[_0x29d580(0x356)][_0x29d580(0x60e)]=function(){const _0x3176d5=_0x29d580;this[_0x3176d5(0x8f1)]()?_0x3176d5(0x2cf)===_0x3176d5(0x556)?(_0x3ebf4e+=_0x771cbc(_0x486409['$1']),_0x407949+=_0x5872d0(_0x3dc0ce['$2'])):this[_0x3176d5(0x7d2)]():VisuMZ['CoreEngine'][_0x3176d5(0x46c)]['call'](this);},Scene_Boot[_0x29d580(0x356)][_0x29d580(0x8f1)]=function(){const _0x1b639e=_0x29d580;if(Scene_Title[_0x1b639e(0x564)]==='')return![];if(Scene_Title[_0x1b639e(0x564)]==='Subtitle')return![];if(Scene_Title[_0x1b639e(0x8a8)]==='')return![];if(Scene_Title[_0x1b639e(0x8a8)]===_0x1b639e(0x909))return![];return!![];},Scene_Boot[_0x29d580(0x356)][_0x29d580(0x7d2)]=function(){const _0x237a95=_0x29d580,_0x4d9f73=$dataSystem[_0x237a95(0x8ad)],_0x35546c=Scene_Title['subtitle']||'',_0x33ae62=Scene_Title[_0x237a95(0x8a8)]||'',_0x37d233=VisuMZ[_0x237a95(0x191)]['Settings'][_0x237a95(0x636)][_0x237a95(0x1a9)][_0x237a95(0x922)],_0x276760=_0x37d233[_0x237a95(0x7d6)](_0x4d9f73,_0x35546c,_0x33ae62);document[_0x237a95(0x64e)]=_0x276760;},Scene_Boot[_0x29d580(0x356)]['determineSideButtonLayoutValid']=function(){const _0x3cb05d=_0x29d580;if(VisuMZ[_0x3cb05d(0x191)][_0x3cb05d(0xa48)]['UI'][_0x3cb05d(0x1ff)]){const _0x408602=Graphics[_0x3cb05d(0x31b)]-Graphics[_0x3cb05d(0x686)]-VisuMZ['CoreEngine'][_0x3cb05d(0xa48)]['UI'][_0x3cb05d(0x66e)]*0x2,_0x40850a=Sprite_Button['prototype'][_0x3cb05d(0x678)][_0x3cb05d(0x84c)](this)*0x4;if(_0x408602>=_0x40850a)SceneManager[_0x3cb05d(0x353)](!![]);}},Scene_Title[_0x29d580(0x564)]=VisuMZ['CoreEngine'][_0x29d580(0xa48)]['MenuLayout'][_0x29d580(0x1a9)][_0x29d580(0x349)],Scene_Title[_0x29d580(0x8a8)]=VisuMZ[_0x29d580(0x191)][_0x29d580(0xa48)][_0x29d580(0x636)][_0x29d580(0x1a9)][_0x29d580(0x92b)],Scene_Title[_0x29d580(0x5cd)]=VisuMZ[_0x29d580(0x191)][_0x29d580(0xa48)][_0x29d580(0x3b4)],VisuMZ[_0x29d580(0x191)][_0x29d580(0x301)]=Scene_Title[_0x29d580(0x356)]['drawGameTitle'],Scene_Title[_0x29d580(0x356)][_0x29d580(0x6a9)]=function(){const _0x16387a=_0x29d580;VisuMZ[_0x16387a(0x191)][_0x16387a(0xa48)]['MenuLayout'][_0x16387a(0x1a9)][_0x16387a(0x6a9)][_0x16387a(0x84c)](this);if(Scene_Title['subtitle']!==''&&Scene_Title[_0x16387a(0x564)]!==_0x16387a(0x349))this[_0x16387a(0x420)]();if(Scene_Title[_0x16387a(0x8a8)]!==''&&Scene_Title[_0x16387a(0x8a8)]!==_0x16387a(0x909))this[_0x16387a(0x766)]();},Scene_Title['prototype'][_0x29d580(0x420)]=function(){const _0x4cf0a5=_0x29d580;VisuMZ[_0x4cf0a5(0x191)][_0x4cf0a5(0xa48)][_0x4cf0a5(0x636)][_0x4cf0a5(0x1a9)][_0x4cf0a5(0x420)][_0x4cf0a5(0x84c)](this);},Scene_Title[_0x29d580(0x356)][_0x29d580(0x766)]=function(){const _0x419f85=_0x29d580;VisuMZ[_0x419f85(0x191)][_0x419f85(0xa48)][_0x419f85(0x636)][_0x419f85(0x1a9)][_0x419f85(0x766)][_0x419f85(0x84c)](this);},Scene_Title[_0x29d580(0x356)][_0x29d580(0x7bb)]=function(){const _0x3df844=_0x29d580;this[_0x3df844(0x988)]();const _0x48da6e=$dataSystem[_0x3df844(0x8e6)][_0x3df844(0x283)],_0x51e832=this[_0x3df844(0xa41)]();this[_0x3df844(0x8fb)]=new Window_TitleCommand(_0x51e832),this[_0x3df844(0x8fb)][_0x3df844(0x196)](_0x48da6e);const _0xa39479=this['commandWindowRect']();this[_0x3df844(0x8fb)][_0x3df844(0x9d3)](_0xa39479['x'],_0xa39479['y'],_0xa39479[_0x3df844(0x31b)],_0xa39479['height']),this[_0x3df844(0x8fb)][_0x3df844(0x923)](),this['_commandWindow'][_0x3df844(0x4bc)](),this['_commandWindow']['selectLast'](),this['addWindow'](this[_0x3df844(0x8fb)]);},Scene_Title[_0x29d580(0x356)][_0x29d580(0x897)]=function(){const _0x4c69a7=_0x29d580;return this[_0x4c69a7(0x8fb)]?this[_0x4c69a7(0x8fb)]['maxItems']():VisuMZ[_0x4c69a7(0x191)][_0x4c69a7(0xa48)][_0x4c69a7(0x495)][_0x4c69a7(0x743)];},Scene_Title[_0x29d580(0x356)][_0x29d580(0xa41)]=function(){const _0x354885=_0x29d580;return VisuMZ['CoreEngine'][_0x354885(0xa48)][_0x354885(0x636)][_0x354885(0x1a9)][_0x354885(0x7c9)][_0x354885(0x84c)](this);},Scene_Title[_0x29d580(0x356)][_0x29d580(0x988)]=function(){const _0x24a605=_0x29d580;for(const _0x2106a8 of Scene_Title[_0x24a605(0x5cd)]){if('ngorN'!==_0x24a605(0x967)){const _0x273343=this[_0x24a605(0x46f)]();_0x6a6cab['isTriggered'](_0x24a605(0x905))&&this[_0x24a605(0x868)](_0xcd48dd['min'](this['index'](),0x0)),_0xd64ff1['isTriggered'](_0x24a605(0x82c))&&this['smoothSelect'](_0x43edcc[_0x24a605(0x55d)](this[_0x24a605(0x46f)](),this[_0x24a605(0x6d6)]()-0x1)),this[_0x24a605(0x46f)]()!==_0x273343&&this['playCursorSound']();}else{const _0x4cbddc=new Sprite_TitlePictureButton(_0x2106a8);this[_0x24a605(0x47a)](_0x4cbddc);}}},VisuMZ[_0x29d580(0x191)]['Scene_Map_initialize']=Scene_Map['prototype'][_0x29d580(0x1ce)],Scene_Map['prototype']['initialize']=function(){const _0x1f6bbd=_0x29d580;VisuMZ[_0x1f6bbd(0x191)][_0x1f6bbd(0x533)][_0x1f6bbd(0x84c)](this),$gameTemp[_0x1f6bbd(0x9b5)](),this[_0x1f6bbd(0xa29)]();},VisuMZ[_0x29d580(0x191)][_0x29d580(0x749)]=Scene_Map['prototype'][_0x29d580(0x5d3)],Scene_Map[_0x29d580(0x356)][_0x29d580(0x5d3)]=function(){const _0x1e18f3=_0x29d580;VisuMZ[_0x1e18f3(0x191)][_0x1e18f3(0x749)][_0x1e18f3(0x84c)](this);if($gameTemp['_playTestFastMode']&&!$gameMessage[_0x1e18f3(0x9a9)]()){if(_0x1e18f3(0x82f)==='qrInQ')this['updateMain'](),SceneManager[_0x1e18f3(0x322)]();else{if(!_0x32cb2c['isPlaytest']())return;if(!_0x4efa9c[_0x1e18f3(0xa34)]())return;_0x33ba65[_0x1e18f3(0x3df)][_0x1e18f3(0x44d)]=![],_0x1576b8[_0x1e18f3(0x191)]['ExportStrFromAllMaps']();}}},Scene_Map[_0x29d580(0x356)]['terminate']=function(){const _0x4bd0ee=_0x29d580;Scene_Message[_0x4bd0ee(0x356)][_0x4bd0ee(0x8f0)][_0x4bd0ee(0x84c)](this),!SceneManager[_0x4bd0ee(0x7a8)](Scene_Battle)&&(this['_spriteset'][_0x4bd0ee(0x24e)](),this[_0x4bd0ee(0x2b4)][_0x4bd0ee(0x3d8)](),this[_0x4bd0ee(0x42b)][_0x4bd0ee(0x276)]=![],SceneManager['snapForBackground']()),$gameScreen[_0x4bd0ee(0x172)](),this[_0x4bd0ee(0xa29)]();},VisuMZ[_0x29d580(0x191)][_0x29d580(0x1d2)]=Scene_Map['prototype'][_0x29d580(0x516)],Scene_Map[_0x29d580(0x356)][_0x29d580(0x516)]=function(){const _0x4640e4=_0x29d580;VisuMZ['CoreEngine'][_0x4640e4(0x1d2)]['call'](this),SceneManager['isSideButtonLayout']()&&this['moveMenuButtonSideButtonLayout']();},Scene_Map[_0x29d580(0x356)][_0x29d580(0x563)]=function(){const _0x2e141c=_0x29d580;this[_0x2e141c(0x64c)]['x']=Graphics[_0x2e141c(0x686)]+0x4;},VisuMZ[_0x29d580(0x191)][_0x29d580(0x9dc)]=Scene_Map['prototype'][_0x29d580(0x9b0)],Scene_Map['prototype'][_0x29d580(0x9b0)]=function(){const _0x2885dd=_0x29d580;VisuMZ['CoreEngine'][_0x2885dd(0x9dc)]['call'](this),this[_0x2885dd(0x7da)]();},Scene_Map[_0x29d580(0x356)]['updateDashToggle']=function(){const _0xc8dc81=_0x29d580;if(Input[_0xc8dc81(0x7d9)]('dashToggle')){if(_0xc8dc81(0x4e6)!=='MIkzc')ConfigManager['alwaysDash']=!ConfigManager[_0xc8dc81(0x746)],ConfigManager['save']();else return'PTB';}},VisuMZ[_0x29d580(0x191)][_0x29d580(0x77c)]=Scene_Map[_0x29d580(0x356)]['updateMain'],Scene_Map[_0x29d580(0x356)][_0x29d580(0x3b9)]=function(){const _0x26b26b=_0x29d580;VisuMZ[_0x26b26b(0x191)][_0x26b26b(0x77c)][_0x26b26b(0x84c)](this),this[_0x26b26b(0x167)]();},Scene_Map['prototype'][_0x29d580(0xa29)]=function(){this['_onceParallelInterpreters']=[];},Scene_Map[_0x29d580(0x356)][_0x29d580(0x167)]=function(){const _0xab31a1=_0x29d580;if(!this[_0xab31a1(0x734)])return;for(const _0x2934ec of this['_onceParallelInterpreters']){_0x2934ec&&_0x2934ec['update']();}},Scene_Map['prototype'][_0x29d580(0x3ab)]=function(_0x56e57a){const _0x2fe13d=_0x29d580,_0x1e33e7=$dataCommonEvents[_0x56e57a];if(!_0x1e33e7)return;const _0x1abb2f=new Game_OnceParallelInterpreter();this['addOnceParallelInterpreter'](_0x1abb2f),_0x1abb2f[_0x2fe13d(0x57e)](_0x56e57a);},Scene_Map[_0x29d580(0x356)]['addOnceParallelInterpreter']=function(_0x32e7fe){const _0x1616e5=_0x29d580;this[_0x1616e5(0x734)]=this[_0x1616e5(0x734)]||[],this[_0x1616e5(0x734)]['push'](_0x32e7fe);},Scene_Map[_0x29d580(0x356)][_0x29d580(0x599)]=function(_0x5ca913){const _0xa7fe09=_0x29d580;this[_0xa7fe09(0x734)]=this[_0xa7fe09(0x734)]||[],this[_0xa7fe09(0x734)][_0xa7fe09(0x8b8)](_0x5ca913);};function Game_OnceParallelInterpreter(){const _0x50c117=_0x29d580;this[_0x50c117(0x1ce)](...arguments);}Game_OnceParallelInterpreter[_0x29d580(0x356)]=Object[_0x29d580(0x72a)](Game_Interpreter[_0x29d580(0x356)]),Game_OnceParallelInterpreter[_0x29d580(0x356)][_0x29d580(0x8e5)]=Game_OnceParallelInterpreter,Game_OnceParallelInterpreter['prototype'][_0x29d580(0x57e)]=function(_0x39a0b0){const _0x471bf0=_0x29d580,_0x3c501e=$dataCommonEvents[_0x39a0b0];if(_0x3c501e)this[_0x471bf0(0x95e)](_0x3c501e['list'],0x0);else{if(_0x471bf0(0x4e8)!=='fBMbN')this['terminate']();else{this[_0x471bf0(0x61a)][_0x471bf0(0x588)]();for(let _0x52eca4=0x1;_0x52eca4<=0x5;_0x52eca4++){this['drawSegment'](_0x52eca4);}}}},Game_OnceParallelInterpreter['prototype']['terminate']=function(){const _0x1119ac=_0x29d580;if(!SceneManager[_0x1119ac(0x412)]())return;SceneManager[_0x1119ac(0x3df)]['removeOnceParallelInterpreter'](this),Game_Interpreter[_0x1119ac(0x356)][_0x1119ac(0x8f0)][_0x1119ac(0x84c)](this);},VisuMZ[_0x29d580(0x191)][_0x29d580(0x215)]=Scene_MenuBase[_0x29d580(0x356)][_0x29d580(0x2cb)],Scene_MenuBase[_0x29d580(0x356)][_0x29d580(0x2cb)]=function(){const _0x39c417=_0x29d580;let _0x1e21c0=0x0;return SceneManager[_0x39c417(0x515)]()?_0x1e21c0=this['helpAreaTopSideButtonLayout']():_0x1e21c0=VisuMZ[_0x39c417(0x191)][_0x39c417(0x215)][_0x39c417(0x84c)](this),_0x1e21c0;},Scene_MenuBase[_0x29d580(0x356)]['helpAreaTopSideButtonLayout']=function(){const _0x3975b6=_0x29d580;if(this[_0x3975b6(0x786)]()){if(_0x3975b6(0x4a8)==='mrbaO')return this['mainAreaBottom']();else{if(_0x23770e[_0x3a5e30][_0x3975b6(0x86f)])return!![];}}else return 0x0;},VisuMZ['CoreEngine'][_0x29d580(0x907)]=Scene_MenuBase[_0x29d580(0x356)][_0x29d580(0x668)],Scene_MenuBase['prototype'][_0x29d580(0x668)]=function(){const _0x2c62ff=_0x29d580;if(SceneManager[_0x2c62ff(0x515)]())return this['mainAreaTopSideButtonLayout']();else{if(_0x2c62ff(0x8ee)!==_0x2c62ff(0x8ee))this[_0x2c62ff(0x7ed)](),this[_0x2c62ff(0x4d5)](),_0x249186[_0x2c62ff(0x191)]['Spriteset_Base_destroy']['call'](this,_0x42ff5f);else return VisuMZ[_0x2c62ff(0x191)][_0x2c62ff(0x907)][_0x2c62ff(0x84c)](this);}},Scene_MenuBase[_0x29d580(0x356)][_0x29d580(0x250)]=function(){const _0x431b9d=_0x29d580;if(!this[_0x431b9d(0x786)]())return this['helpAreaBottom']();else return this[_0x431b9d(0x3eb)]()&&this[_0x431b9d(0x536)]()===_0x431b9d(0x6db)?Window_ButtonAssist[_0x431b9d(0x356)]['lineHeight']():0x0;},VisuMZ[_0x29d580(0x191)][_0x29d580(0xa2f)]=Scene_MenuBase[_0x29d580(0x356)][_0x29d580(0x860)],Scene_MenuBase['prototype'][_0x29d580(0x860)]=function(){const _0x188b7a=_0x29d580;let _0x334dc8=0x0;return SceneManager[_0x188b7a(0x515)]()?_0x334dc8=this[_0x188b7a(0x87d)]():'aDBoP'===_0x188b7a(0x821)?_0x334dc8=VisuMZ[_0x188b7a(0x191)][_0x188b7a(0xa2f)][_0x188b7a(0x84c)](this):this[_0x188b7a(0x1a3)]=0x2,this[_0x188b7a(0x3eb)]()&&this[_0x188b7a(0x536)]()!==_0x188b7a(0x477)&&(_0x334dc8-=Window_ButtonAssist['prototype'][_0x188b7a(0x29f)]()),_0x334dc8;},Scene_MenuBase[_0x29d580(0x356)][_0x29d580(0x87d)]=function(){return Graphics['boxHeight']-this['helpAreaHeight']();},VisuMZ['CoreEngine']['Scene_MenuBase_createBackground']=Scene_MenuBase[_0x29d580(0x356)][_0x29d580(0x9e1)],Scene_MenuBase['prototype'][_0x29d580(0x9e1)]=function(){const _0x3a2ab1=_0x29d580,_0x3ce0eb=VisuMZ[_0x3a2ab1(0x191)][_0x3a2ab1(0xa48)][_0x3a2ab1(0x16a)][_0x3a2ab1(0x9e5)]??0x8;this[_0x3a2ab1(0x300)]=new PIXI['filters'][(_0x3a2ab1(0x1eb))](_0x3ce0eb),this[_0x3a2ab1(0x4da)]=new Sprite(),this[_0x3a2ab1(0x4da)][_0x3a2ab1(0x240)]=SceneManager[_0x3a2ab1(0x20b)](),this[_0x3a2ab1(0x4da)][_0x3a2ab1(0x45d)]=[this['_backgroundFilter']],this['addChild'](this['_backgroundSprite']),this[_0x3a2ab1(0x702)](0xc0),this[_0x3a2ab1(0x702)](this[_0x3a2ab1(0x3a9)]()),this[_0x3a2ab1(0x709)]();},Scene_MenuBase['prototype']['getBackgroundOpacity']=function(){const _0x32914f=_0x29d580,_0x4b2f95=String(this[_0x32914f(0x8e5)]['name']),_0x11b3e3=this['getCustomBackgroundSettings'](_0x4b2f95);return _0x11b3e3?_0x11b3e3['SnapshotOpacity']:0xc0;},Scene_MenuBase[_0x29d580(0x356)][_0x29d580(0x709)]=function(){const _0x36f3d9=_0x29d580,_0xafec9=String(this[_0x36f3d9(0x8e5)]['name']),_0x1bf893=this[_0x36f3d9(0x65c)](_0xafec9);_0x1bf893&&(_0x1bf893[_0x36f3d9(0x9ba)]!==''||_0x1bf893['BgFilename2']!=='')&&(this[_0x36f3d9(0x995)]=new Sprite(ImageManager[_0x36f3d9(0x550)](_0x1bf893[_0x36f3d9(0x9ba)])),this[_0x36f3d9(0x591)]=new Sprite(ImageManager[_0x36f3d9(0x6eb)](_0x1bf893[_0x36f3d9(0x95c)])),this[_0x36f3d9(0x47a)](this[_0x36f3d9(0x995)]),this[_0x36f3d9(0x47a)](this[_0x36f3d9(0x591)]),this[_0x36f3d9(0x995)][_0x36f3d9(0x240)][_0x36f3d9(0x8de)](this['adjustSprite'][_0x36f3d9(0x85f)](this,this[_0x36f3d9(0x995)])),this['_backSprite2'][_0x36f3d9(0x240)][_0x36f3d9(0x8de)](this[_0x36f3d9(0x871)]['bind'](this,this['_backSprite2'])));},Scene_MenuBase[_0x29d580(0x356)][_0x29d580(0x65c)]=function(_0x16c77c){const _0x1f8b32=_0x29d580;return VisuMZ['CoreEngine'][_0x1f8b32(0xa48)]['MenuBg'][_0x16c77c]||VisuMZ['CoreEngine']['Settings'][_0x1f8b32(0x16a)][_0x1f8b32(0x78c)];},Scene_MenuBase[_0x29d580(0x356)][_0x29d580(0x871)]=function(_0x56f3fb){const _0xb087da=_0x29d580;this[_0xb087da(0x267)](_0x56f3fb),this[_0xb087da(0x8c5)](_0x56f3fb);},VisuMZ[_0x29d580(0x191)]['Scene_MenuBase_createCancelButton']=Scene_MenuBase[_0x29d580(0x356)][_0x29d580(0x59e)],Scene_MenuBase[_0x29d580(0x356)][_0x29d580(0x59e)]=function(){const _0x4b8667=_0x29d580;VisuMZ[_0x4b8667(0x191)][_0x4b8667(0x508)]['call'](this),SceneManager[_0x4b8667(0x94b)]()&&this['moveCancelButtonSideButtonLayout']();},Scene_MenuBase[_0x29d580(0x356)]['moveCancelButtonSideButtonLayout']=function(){const _0x4054cb=_0x29d580;this[_0x4054cb(0x2e6)]['x']=Graphics['boxWidth']+0x4;},VisuMZ['CoreEngine'][_0x29d580(0x2ac)]=Scene_MenuBase[_0x29d580(0x356)]['createPageButtons'],Scene_MenuBase[_0x29d580(0x356)]['createPageButtons']=function(){const _0x5d5166=_0x29d580;VisuMZ[_0x5d5166(0x191)][_0x5d5166(0x2ac)][_0x5d5166(0x84c)](this);if(SceneManager[_0x5d5166(0x94b)]()){if(_0x5d5166(0x29c)!==_0x5d5166(0x1a4))this[_0x5d5166(0x67e)]();else{const _0x2e31ed=_0x5c1b5c(_0x194729['$1']);_0x2e31ed!==_0x48d792[_0xbf205c][_0x5d5166(0x8a8)]&&(_0x574048(_0x5d5166(0x7f2)[_0x5d5166(0x7d6)](_0x3bdb7d,_0x2e31ed)),_0x51142b[_0x5d5166(0x79e)]());}}},Scene_MenuBase['prototype'][_0x29d580(0x67e)]=function(){const _0x544f91=_0x29d580;this[_0x544f91(0x650)]['x']=-0x1*(this[_0x544f91(0x650)]['width']+this['_pagedownButton'][_0x544f91(0x31b)]+0x8),this['_pagedownButton']['x']=-0x1*(this['_pagedownButton'][_0x544f91(0x31b)]+0x4);},Scene_MenuBase[_0x29d580(0x356)][_0x29d580(0x3eb)]=function(){const _0x283d1b=_0x29d580;return VisuMZ['CoreEngine'][_0x283d1b(0xa48)][_0x283d1b(0x4e4)][_0x283d1b(0x6cd)];},Scene_MenuBase[_0x29d580(0x356)][_0x29d580(0x536)]=function(){const _0x1dcb55=_0x29d580;return SceneManager[_0x1dcb55(0x94b)]()||SceneManager[_0x1dcb55(0x478)]()?VisuMZ[_0x1dcb55(0x191)]['Settings']['ButtonAssist']['Location']:_0x1dcb55(0x477);},Scene_MenuBase[_0x29d580(0x356)][_0x29d580(0x363)]=function(){const _0x4dd864=_0x29d580;if(!this['isMenuButtonAssistEnabled']())return;const _0x5a5e31=this[_0x4dd864(0x6d1)]();this[_0x4dd864(0x4fd)]=new Window_ButtonAssist(_0x5a5e31),this[_0x4dd864(0x36c)](this[_0x4dd864(0x4fd)]);},Scene_MenuBase[_0x29d580(0x356)][_0x29d580(0x6d1)]=function(){const _0x414f27=_0x29d580;if(this[_0x414f27(0x536)]()==='button')return this[_0x414f27(0x336)]();else{if(_0x414f27(0x807)===_0x414f27(0x6f6)){_0x5d76a7[_0x414f27(0x9cc)](_0x153101,_0x537414);const _0x154896=_0x2a59f0[_0x414f27(0x673)](_0x53d8f7[_0x414f27(0x321)])[_0x414f27(0x8ff)](0x32,0x96),_0x11efe7=_0x16120e[_0x414f27(0x4ba)];_0x11efe7&&(_0x11efe7[_0x414f27(0x321)]=_0x154896,_0x11efe7['pos']=_0x4e3427[_0x414f27(0x514)][_0x414f27(0x2bd)](),_0x22b670[_0x414f27(0x27e)](_0x11efe7),_0x4751a4[_0x414f27(0x9f4)](_0x11efe7,_0x11efe7[_0x414f27(0x404)]),_0x1f3ba7['_bgmBuffer']['_startPlaying'](_0x11efe7['pos']));}else return this['buttonAssistWindowSideRect']();}},Scene_MenuBase[_0x29d580(0x356)]['buttonAssistWindowButtonRect']=function(){const _0x16ae86=_0x29d580,_0x29d170=ConfigManager[_0x16ae86(0x80d)]?(Sprite_Button['prototype'][_0x16ae86(0x678)]()+0x6)*0x2:0x0,_0x13dc54=this['buttonY'](),_0x4f0b5d=Graphics[_0x16ae86(0x686)]-_0x29d170*0x2,_0x5cf4d4=this[_0x16ae86(0x261)]();return new Rectangle(_0x29d170,_0x13dc54,_0x4f0b5d,_0x5cf4d4);},Scene_MenuBase[_0x29d580(0x356)][_0x29d580(0x85b)]=function(){const _0x51beb6=_0x29d580,_0x4b1aec=Graphics['boxWidth'],_0x138b1f=Window_ButtonAssist['prototype'][_0x51beb6(0x29f)](),_0xab86e2=0x0;let _0x44a5f2=0x0;if(this['getButtonAssistLocation']()===_0x51beb6(0x6db))_0x44a5f2=0x0;else{if(_0x51beb6(0x84a)!==_0x51beb6(0x84a)){const _0x1b937b=_0x321acf[_0x51beb6(0x7c4)]();if(_0x1b937b)_0x1b937b[_0x51beb6(0x8d8)](_0xac25d);}else _0x44a5f2=Graphics[_0x51beb6(0x3d2)]-_0x138b1f;}return new Rectangle(_0xab86e2,_0x44a5f2,_0x4b1aec,_0x138b1f);},Scene_Menu[_0x29d580(0x764)]=VisuMZ[_0x29d580(0x191)][_0x29d580(0xa48)][_0x29d580(0x636)][_0x29d580(0x22d)],VisuMZ[_0x29d580(0x191)][_0x29d580(0x86a)]=Scene_Menu[_0x29d580(0x356)]['create'],Scene_Menu[_0x29d580(0x356)][_0x29d580(0x72a)]=function(){const _0x3c1eea=_0x29d580;VisuMZ[_0x3c1eea(0x191)][_0x3c1eea(0x86a)]['call'](this),this['setCoreEngineUpdateWindowBg']();},Scene_Menu['prototype'][_0x29d580(0x842)]=function(){const _0x11e8d1=_0x29d580;this['_commandWindow']&&(_0x11e8d1(0x61b)!=='ZOZgw'?this[_0x11e8d1(0x8fb)][_0x11e8d1(0x196)](Scene_Menu['layoutSettings'][_0x11e8d1(0x286)]):this[_0x11e8d1(0x9a4)]()),this[_0x11e8d1(0x252)]&&(_0x11e8d1(0x687)!=='sDJcG'?_0x541ea0+=_0x49dfd9(_0xe1de6f):this['_goldWindow'][_0x11e8d1(0x196)](Scene_Menu[_0x11e8d1(0x764)][_0x11e8d1(0x617)])),this['_statusWindow']&&this[_0x11e8d1(0x83a)][_0x11e8d1(0x196)](Scene_Menu[_0x11e8d1(0x764)][_0x11e8d1(0xa36)]);},Scene_Menu['prototype']['commandWindowRect']=function(){const _0x85203e=_0x29d580;return Scene_Menu[_0x85203e(0x764)][_0x85203e(0x7c9)]['call'](this);},Scene_Menu['prototype'][_0x29d580(0x1d9)]=function(){const _0x4ab796=_0x29d580;return Scene_Menu[_0x4ab796(0x764)][_0x4ab796(0x64b)][_0x4ab796(0x84c)](this);},Scene_Menu[_0x29d580(0x356)][_0x29d580(0x5e3)]=function(){const _0x3bdd71=_0x29d580;return Scene_Menu[_0x3bdd71(0x764)][_0x3bdd71(0x9f7)][_0x3bdd71(0x84c)](this);},Scene_Item[_0x29d580(0x764)]=VisuMZ[_0x29d580(0x191)]['Settings'][_0x29d580(0x636)]['ItemMenu'],VisuMZ[_0x29d580(0x191)][_0x29d580(0x331)]=Scene_Item[_0x29d580(0x356)][_0x29d580(0x72a)],Scene_Item[_0x29d580(0x356)]['create']=function(){const _0x331aea=_0x29d580;VisuMZ[_0x331aea(0x191)]['Scene_Item_create'][_0x331aea(0x84c)](this),this[_0x331aea(0x842)]();},Scene_Item['prototype'][_0x29d580(0x842)]=function(){const _0x3e53d2=_0x29d580;this[_0x3e53d2(0x62a)]&&this[_0x3e53d2(0x62a)][_0x3e53d2(0x196)](Scene_Item[_0x3e53d2(0x764)][_0x3e53d2(0x90e)]),this[_0x3e53d2(0x614)]&&this[_0x3e53d2(0x614)]['setBackgroundType'](Scene_Item[_0x3e53d2(0x764)][_0x3e53d2(0x4f0)]),this[_0x3e53d2(0x190)]&&this[_0x3e53d2(0x190)]['setBackgroundType'](Scene_Item['layoutSettings'][_0x3e53d2(0x45f)]),this[_0x3e53d2(0x902)]&&this[_0x3e53d2(0x902)][_0x3e53d2(0x196)](Scene_Item[_0x3e53d2(0x764)][_0x3e53d2(0x983)]);},Scene_Item['prototype'][_0x29d580(0x954)]=function(){const _0x56c4a9=_0x29d580;return Scene_Item['layoutSettings'][_0x56c4a9(0x84b)][_0x56c4a9(0x84c)](this);},Scene_Item['prototype'][_0x29d580(0x5da)]=function(){const _0x17df50=_0x29d580;return Scene_Item[_0x17df50(0x764)][_0x17df50(0x251)][_0x17df50(0x84c)](this);},Scene_Item[_0x29d580(0x356)][_0x29d580(0x17b)]=function(){const _0x1eb3e7=_0x29d580;return Scene_Item[_0x1eb3e7(0x764)][_0x1eb3e7(0x1ca)]['call'](this);},Scene_Item[_0x29d580(0x356)][_0x29d580(0x7e2)]=function(){const _0x5e4e9a=_0x29d580;return Scene_Item[_0x5e4e9a(0x764)][_0x5e4e9a(0xa25)]['call'](this);},Scene_Skill[_0x29d580(0x764)]=VisuMZ[_0x29d580(0x191)][_0x29d580(0xa48)]['MenuLayout']['SkillMenu'],VisuMZ[_0x29d580(0x191)]['Scene_Skill_create']=Scene_Skill[_0x29d580(0x356)][_0x29d580(0x72a)],Scene_Skill[_0x29d580(0x356)][_0x29d580(0x72a)]=function(){const _0x11a51a=_0x29d580;VisuMZ[_0x11a51a(0x191)][_0x11a51a(0x939)][_0x11a51a(0x84c)](this),this['setCoreEngineUpdateWindowBg']();},Scene_Skill[_0x29d580(0x356)][_0x29d580(0x842)]=function(){const _0x4b5c9f=_0x29d580;this[_0x4b5c9f(0x62a)]&&this[_0x4b5c9f(0x62a)]['setBackgroundType'](Scene_Skill[_0x4b5c9f(0x764)][_0x4b5c9f(0x90e)]);this[_0x4b5c9f(0x23f)]&&('OqoZx'===_0x4b5c9f(0x491)?_0x2c7f35[_0x4b5c9f(0x191)][_0x4b5c9f(0x3ac)][_0x4b5c9f(0x84c)](this,_0x315d65):this[_0x4b5c9f(0x23f)][_0x4b5c9f(0x196)](Scene_Skill['layoutSettings'][_0x4b5c9f(0x997)]));this['_statusWindow']&&this[_0x4b5c9f(0x83a)][_0x4b5c9f(0x196)](Scene_Skill[_0x4b5c9f(0x764)][_0x4b5c9f(0xa36)]);if(this[_0x4b5c9f(0x190)]){if(_0x4b5c9f(0x3a4)!==_0x4b5c9f(0x3a4))return _0x4b5c9f(0x8f3);else this[_0x4b5c9f(0x190)]['setBackgroundType'](Scene_Skill[_0x4b5c9f(0x764)][_0x4b5c9f(0x45f)]);}this['_actorWindow']&&this['_actorWindow'][_0x4b5c9f(0x196)](Scene_Skill[_0x4b5c9f(0x764)][_0x4b5c9f(0x983)]);},Scene_Skill[_0x29d580(0x356)][_0x29d580(0x954)]=function(){const _0x42f1f2=_0x29d580;return Scene_Skill[_0x42f1f2(0x764)][_0x42f1f2(0x84b)][_0x42f1f2(0x84c)](this);},Scene_Skill[_0x29d580(0x356)][_0x29d580(0x2a5)]=function(){const _0x78d2ef=_0x29d580;return Scene_Skill['layoutSettings'][_0x78d2ef(0x81b)][_0x78d2ef(0x84c)](this);},Scene_Skill[_0x29d580(0x356)]['statusWindowRect']=function(){const _0x3f5a5a=_0x29d580;return Scene_Skill[_0x3f5a5a(0x764)][_0x3f5a5a(0x9f7)]['call'](this);},Scene_Skill[_0x29d580(0x356)][_0x29d580(0x17b)]=function(){const _0x3ae5fe=_0x29d580;return Scene_Skill[_0x3ae5fe(0x764)][_0x3ae5fe(0x1ca)][_0x3ae5fe(0x84c)](this);},Scene_Skill['prototype'][_0x29d580(0x7e2)]=function(){const _0x9995fb=_0x29d580;return Scene_Skill[_0x9995fb(0x764)][_0x9995fb(0xa25)][_0x9995fb(0x84c)](this);},Scene_Equip[_0x29d580(0x764)]=VisuMZ['CoreEngine'][_0x29d580(0xa48)][_0x29d580(0x636)][_0x29d580(0x740)],VisuMZ[_0x29d580(0x191)][_0x29d580(0x56e)]=Scene_Equip['prototype'][_0x29d580(0x72a)],Scene_Equip[_0x29d580(0x356)][_0x29d580(0x72a)]=function(){const _0x1d9d05=_0x29d580;VisuMZ[_0x1d9d05(0x191)][_0x1d9d05(0x56e)][_0x1d9d05(0x84c)](this),this[_0x1d9d05(0x842)]();},Scene_Equip[_0x29d580(0x356)][_0x29d580(0x842)]=function(){const _0x2d2e8c=_0x29d580;this[_0x2d2e8c(0x62a)]&&this[_0x2d2e8c(0x62a)]['setBackgroundType'](Scene_Equip[_0x2d2e8c(0x764)][_0x2d2e8c(0x90e)]),this[_0x2d2e8c(0x83a)]&&this[_0x2d2e8c(0x83a)][_0x2d2e8c(0x196)](Scene_Equip[_0x2d2e8c(0x764)][_0x2d2e8c(0xa36)]),this[_0x2d2e8c(0x8fb)]&&(_0x2d2e8c(0x5aa)===_0x2d2e8c(0x5aa)?this[_0x2d2e8c(0x8fb)][_0x2d2e8c(0x196)](Scene_Equip[_0x2d2e8c(0x764)][_0x2d2e8c(0x286)]):_0x1cf18e['VisuMZ_2_BattleSystemETB']&&(this['_forcedBattleSys']='ETB')),this['_slotWindow']&&this[_0x2d2e8c(0x1b3)]['setBackgroundType'](Scene_Equip['layoutSettings'][_0x2d2e8c(0x720)]),this[_0x2d2e8c(0x190)]&&this[_0x2d2e8c(0x190)][_0x2d2e8c(0x196)](Scene_Equip['layoutSettings'][_0x2d2e8c(0x45f)]);},Scene_Equip[_0x29d580(0x356)][_0x29d580(0x954)]=function(){const _0x31e2e7=_0x29d580;return Scene_Equip[_0x31e2e7(0x764)][_0x31e2e7(0x84b)][_0x31e2e7(0x84c)](this);},Scene_Equip[_0x29d580(0x356)]['statusWindowRect']=function(){const _0xf1f232=_0x29d580;return Scene_Equip['layoutSettings']['StatusRect'][_0xf1f232(0x84c)](this);},Scene_Equip[_0x29d580(0x356)][_0x29d580(0xa41)]=function(){const _0x547eef=_0x29d580;return Scene_Equip[_0x547eef(0x764)][_0x547eef(0x7c9)][_0x547eef(0x84c)](this);},Scene_Equip[_0x29d580(0x356)][_0x29d580(0x97f)]=function(){const _0x246ecb=_0x29d580;return Scene_Equip[_0x246ecb(0x764)][_0x246ecb(0xa00)][_0x246ecb(0x84c)](this);},Scene_Equip[_0x29d580(0x356)][_0x29d580(0x17b)]=function(){const _0x49a364=_0x29d580;return Scene_Equip[_0x49a364(0x764)][_0x49a364(0x1ca)][_0x49a364(0x84c)](this);},Scene_Status[_0x29d580(0x764)]=VisuMZ['CoreEngine']['Settings'][_0x29d580(0x636)][_0x29d580(0xa17)],VisuMZ[_0x29d580(0x191)][_0x29d580(0x50a)]=Scene_Status['prototype'][_0x29d580(0x72a)],Scene_Status[_0x29d580(0x356)][_0x29d580(0x72a)]=function(){const _0x42b9f3=_0x29d580;VisuMZ[_0x42b9f3(0x191)][_0x42b9f3(0x50a)][_0x42b9f3(0x84c)](this),this[_0x42b9f3(0x842)]();},Scene_Status[_0x29d580(0x356)]['setCoreEngineUpdateWindowBg']=function(){const _0x55fca0=_0x29d580;this['_profileWindow']&&('UoQPh'!=='UoQPh'?(_0x4d8177<_0x16edca-_0x2a76ec||_0x36ba6f&&_0x52f9cc===0x1)&&this['smoothSelect']((_0x3443cd+_0x28464c)%_0x2de088):this[_0x55fca0(0x3c9)][_0x55fca0(0x196)](Scene_Status['layoutSettings'][_0x55fca0(0x2f5)]));if(this[_0x55fca0(0x83a)]){if(_0x55fca0(0x7bc)!==_0x55fca0(0x7bc)){const _0xeec74=_0x1accf3(_0x2c93e8['$1']);_0xeec74<_0x220317?(_0x321af2(_0x55fca0(0x99e)[_0x55fca0(0x7d6)](_0x1218d7,_0xeec74,_0x41e7d1)),_0x1c4587[_0x55fca0(0x79e)]()):_0xd0106e=_0x522105[_0x55fca0(0x55d)](_0xeec74,_0x161c8a);}else this[_0x55fca0(0x83a)][_0x55fca0(0x196)](Scene_Status[_0x55fca0(0x764)][_0x55fca0(0xa36)]);}this['_statusParamsWindow']&&this[_0x55fca0(0xa0f)]['setBackgroundType'](Scene_Status[_0x55fca0(0x764)][_0x55fca0(0x165)]);if(this['_statusEquipWindow']){if(_0x55fca0(0x928)!==_0x55fca0(0x41c))this[_0x55fca0(0x1ae)][_0x55fca0(0x196)](Scene_Status[_0x55fca0(0x764)]['StatusEquipBgType']);else{if(this[_0x55fca0(0x850)][_0x55fca0(0x229)]())return![];return _0x30e0b0['CoreEngine'][_0x55fca0(0x9fa)][_0x55fca0(0x84c)](this,_0x2c8e6b);}}},Scene_Status[_0x29d580(0x356)]['profileWindowRect']=function(){const _0x276ecc=_0x29d580;return Scene_Status[_0x276ecc(0x764)]['ProfileRect'][_0x276ecc(0x84c)](this);},Scene_Status[_0x29d580(0x356)]['statusWindowRect']=function(){const _0x163403=_0x29d580;return Scene_Status[_0x163403(0x764)][_0x163403(0x9f7)][_0x163403(0x84c)](this);},Scene_Status[_0x29d580(0x356)][_0x29d580(0x615)]=function(){const _0x22bf8a=_0x29d580;return Scene_Status['layoutSettings'][_0x22bf8a(0x2cd)]['call'](this);},Scene_Status['prototype'][_0x29d580(0x69b)]=function(){const _0x3585e3=_0x29d580;return Scene_Status[_0x3585e3(0x764)]['StatusEquipRect'][_0x3585e3(0x84c)](this);},Scene_Options[_0x29d580(0x764)]=VisuMZ[_0x29d580(0x191)][_0x29d580(0xa48)][_0x29d580(0x636)][_0x29d580(0x814)],VisuMZ[_0x29d580(0x191)][_0x29d580(0x841)]=Scene_Options[_0x29d580(0x356)][_0x29d580(0x72a)],Scene_Options[_0x29d580(0x356)][_0x29d580(0x72a)]=function(){const _0x5dc053=_0x29d580;VisuMZ[_0x5dc053(0x191)][_0x5dc053(0x841)]['call'](this),this[_0x5dc053(0x842)]();},Scene_Options[_0x29d580(0x356)]['setCoreEngineUpdateWindowBg']=function(){const _0x317e8b=_0x29d580;this['_optionsWindow']&&this['_optionsWindow'][_0x317e8b(0x196)](Scene_Options[_0x317e8b(0x764)]['OptionsBgType']);},Scene_Options[_0x29d580(0x356)][_0x29d580(0x8d4)]=function(){const _0x3da5cf=_0x29d580;return Scene_Options[_0x3da5cf(0x764)][_0x3da5cf(0x99b)][_0x3da5cf(0x84c)](this);},Scene_Save[_0x29d580(0x764)]=VisuMZ[_0x29d580(0x191)][_0x29d580(0xa48)][_0x29d580(0x636)][_0x29d580(0x433)],Scene_Save[_0x29d580(0x356)][_0x29d580(0x72a)]=function(){const _0x11e749=_0x29d580;Scene_File[_0x11e749(0x356)][_0x11e749(0x72a)][_0x11e749(0x84c)](this),this[_0x11e749(0x842)]();},Scene_Save['prototype'][_0x29d580(0x842)]=function(){const _0x533ec9=_0x29d580;this['_helpWindow']&&this[_0x533ec9(0x62a)][_0x533ec9(0x196)](Scene_Save[_0x533ec9(0x764)][_0x533ec9(0x90e)]),this['_listWindow']&&this[_0x533ec9(0x655)]['setBackgroundType'](Scene_Save[_0x533ec9(0x764)][_0x533ec9(0x1ed)]);},Scene_Save[_0x29d580(0x356)][_0x29d580(0x954)]=function(){const _0x71a71b=_0x29d580;return Scene_Save['layoutSettings'][_0x71a71b(0x84b)][_0x71a71b(0x84c)](this);},Scene_Save[_0x29d580(0x356)][_0x29d580(0x3c4)]=function(){const _0x3bca41=_0x29d580;return Scene_Save['layoutSettings'][_0x3bca41(0x2d1)][_0x3bca41(0x84c)](this);},Scene_Load[_0x29d580(0x764)]=VisuMZ[_0x29d580(0x191)][_0x29d580(0xa48)]['MenuLayout']['LoadMenu'],Scene_Load[_0x29d580(0x356)][_0x29d580(0x72a)]=function(){const _0x44532a=_0x29d580;Scene_File[_0x44532a(0x356)][_0x44532a(0x72a)][_0x44532a(0x84c)](this),this[_0x44532a(0x842)]();},Scene_Load['prototype'][_0x29d580(0x842)]=function(){const _0x4f1545=_0x29d580;this['_helpWindow']&&this[_0x4f1545(0x62a)]['setBackgroundType'](Scene_Load[_0x4f1545(0x764)][_0x4f1545(0x90e)]);if(this[_0x4f1545(0x655)]){if('Zkmla'!=='Zkmla')return _0x52d76f[_0x4f1545(0x191)]['CustomParamType'][_0x57092d]===_0x4f1545(0x1a7)?_0x156e6f:_0x341db8((_0x3e5d57*0x64)[_0x4f1545(0x804)](_0x3df931))+'%';else this[_0x4f1545(0x655)][_0x4f1545(0x196)](Scene_Load[_0x4f1545(0x764)][_0x4f1545(0x1ed)]);}},Scene_Load[_0x29d580(0x356)]['helpWindowRect']=function(){const _0x1ab6f4=_0x29d580;return Scene_Load[_0x1ab6f4(0x764)][_0x1ab6f4(0x84b)][_0x1ab6f4(0x84c)](this);},Scene_Load[_0x29d580(0x356)]['listWindowRect']=function(){const _0x3b118e=_0x29d580;return Scene_Load[_0x3b118e(0x764)][_0x3b118e(0x2d1)][_0x3b118e(0x84c)](this);},Scene_GameEnd['layoutSettings']=VisuMZ[_0x29d580(0x191)]['Settings'][_0x29d580(0x636)][_0x29d580(0xa03)],VisuMZ[_0x29d580(0x191)][_0x29d580(0x555)]=Scene_GameEnd[_0x29d580(0x356)][_0x29d580(0x9e1)],Scene_GameEnd[_0x29d580(0x356)][_0x29d580(0x9e1)]=function(){const _0xef125d=_0x29d580;Scene_MenuBase['prototype'][_0xef125d(0x9e1)][_0xef125d(0x84c)](this);},Scene_GameEnd[_0x29d580(0x356)]['createCommandWindow']=function(){const _0x34f909=_0x29d580,_0x21f4e9=this[_0x34f909(0xa41)]();this[_0x34f909(0x8fb)]=new Window_GameEnd(_0x21f4e9),this['_commandWindow'][_0x34f909(0x855)](_0x34f909(0x622),this[_0x34f909(0x3aa)][_0x34f909(0x85f)](this)),this[_0x34f909(0x36c)](this['_commandWindow']),this[_0x34f909(0x8fb)][_0x34f909(0x196)](Scene_GameEnd[_0x34f909(0x764)][_0x34f909(0x286)]);},Scene_GameEnd['prototype']['commandWindowRect']=function(){const _0x49b6aa=_0x29d580;return Scene_GameEnd[_0x49b6aa(0x764)][_0x49b6aa(0x7c9)][_0x49b6aa(0x84c)](this);},Scene_Shop[_0x29d580(0x764)]=VisuMZ['CoreEngine'][_0x29d580(0xa48)]['MenuLayout'][_0x29d580(0x89f)],VisuMZ[_0x29d580(0x191)][_0x29d580(0x8bc)]=Scene_Shop[_0x29d580(0x356)][_0x29d580(0x72a)],Scene_Shop[_0x29d580(0x356)][_0x29d580(0x72a)]=function(){const _0x331a92=_0x29d580;VisuMZ[_0x331a92(0x191)][_0x331a92(0x8bc)][_0x331a92(0x84c)](this),this[_0x331a92(0x842)]();},Scene_Shop['prototype'][_0x29d580(0x842)]=function(){const _0x447c6d=_0x29d580;this[_0x447c6d(0x62a)]&&this[_0x447c6d(0x62a)][_0x447c6d(0x196)](Scene_Shop[_0x447c6d(0x764)]['HelpBgType']),this[_0x447c6d(0x252)]&&this['_goldWindow'][_0x447c6d(0x196)](Scene_Shop[_0x447c6d(0x764)]['GoldBgType']),this['_commandWindow']&&this[_0x447c6d(0x8fb)][_0x447c6d(0x196)](Scene_Shop[_0x447c6d(0x764)][_0x447c6d(0x286)]),this[_0x447c6d(0x385)]&&this[_0x447c6d(0x385)][_0x447c6d(0x196)](Scene_Shop[_0x447c6d(0x764)]['DummyBgType']),this['_numberWindow']&&this[_0x447c6d(0x89e)][_0x447c6d(0x196)](Scene_Shop[_0x447c6d(0x764)][_0x447c6d(0x73d)]),this['_statusWindow']&&this[_0x447c6d(0x83a)][_0x447c6d(0x196)](Scene_Shop['layoutSettings'][_0x447c6d(0xa36)]),this[_0x447c6d(0x8fe)]&&this[_0x447c6d(0x8fe)][_0x447c6d(0x196)](Scene_Shop[_0x447c6d(0x764)]['BuyBgType']),this[_0x447c6d(0x614)]&&(_0x447c6d(0x78e)==='RpWcf'?this[_0x447c6d(0x588)]():this[_0x447c6d(0x614)][_0x447c6d(0x196)](Scene_Shop[_0x447c6d(0x764)][_0x447c6d(0x4f0)])),this[_0x447c6d(0x425)]&&this[_0x447c6d(0x425)][_0x447c6d(0x196)](Scene_Shop[_0x447c6d(0x764)][_0x447c6d(0x3f3)]);},Scene_Shop[_0x29d580(0x356)][_0x29d580(0x954)]=function(){const _0x7914bb=_0x29d580;return Scene_Shop['layoutSettings'][_0x7914bb(0x84b)][_0x7914bb(0x84c)](this);},Scene_Shop[_0x29d580(0x356)][_0x29d580(0x1d9)]=function(){const _0xd5d575=_0x29d580;return Scene_Shop['layoutSettings'][_0xd5d575(0x64b)][_0xd5d575(0x84c)](this);},Scene_Shop[_0x29d580(0x356)][_0x29d580(0xa41)]=function(){const _0x4205d1=_0x29d580;return Scene_Shop[_0x4205d1(0x764)][_0x4205d1(0x7c9)][_0x4205d1(0x84c)](this);},Scene_Shop[_0x29d580(0x356)][_0x29d580(0xa2d)]=function(){const _0x56b7db=_0x29d580;return Scene_Shop[_0x56b7db(0x764)][_0x56b7db(0x5c0)][_0x56b7db(0x84c)](this);},Scene_Shop[_0x29d580(0x356)][_0x29d580(0x89b)]=function(){const _0x3963=_0x29d580;return Scene_Shop[_0x3963(0x764)]['NumberRect'][_0x3963(0x84c)](this);},Scene_Shop[_0x29d580(0x356)]['statusWindowRect']=function(){const _0x68f59d=_0x29d580;return Scene_Shop[_0x68f59d(0x764)]['StatusRect']['call'](this);},Scene_Shop[_0x29d580(0x356)][_0x29d580(0x55b)]=function(){const _0x57f98c=_0x29d580;return Scene_Shop[_0x57f98c(0x764)][_0x57f98c(0x4b9)]['call'](this);},Scene_Shop[_0x29d580(0x356)]['categoryWindowRect']=function(){const _0x2e6382=_0x29d580;return Scene_Shop[_0x2e6382(0x764)][_0x2e6382(0x251)][_0x2e6382(0x84c)](this);},Scene_Shop[_0x29d580(0x356)][_0x29d580(0x91e)]=function(){const _0xa10480=_0x29d580;return Scene_Shop['layoutSettings'][_0xa10480(0x1d7)]['call'](this);},Scene_Name[_0x29d580(0x764)]=VisuMZ['CoreEngine']['Settings'][_0x29d580(0x636)][_0x29d580(0x310)],VisuMZ[_0x29d580(0x191)][_0x29d580(0x891)]=Scene_Name[_0x29d580(0x356)][_0x29d580(0x72a)],Scene_Name[_0x29d580(0x356)][_0x29d580(0x72a)]=function(){const _0x576a57=_0x29d580;VisuMZ['CoreEngine']['Scene_Name_create'][_0x576a57(0x84c)](this),this[_0x576a57(0x842)]();},Scene_Name[_0x29d580(0x356)][_0x29d580(0x842)]=function(){const _0x2dbef7=_0x29d580;this[_0x2dbef7(0x4cf)]&&this[_0x2dbef7(0x4cf)][_0x2dbef7(0x196)](Scene_Name[_0x2dbef7(0x764)][_0x2dbef7(0x5d0)]),this[_0x2dbef7(0x803)]&&this['_inputWindow']['setBackgroundType'](Scene_Name['layoutSettings']['InputBgType']);},Scene_Name[_0x29d580(0x356)][_0x29d580(0x817)]=function(){return 0x0;},Scene_Name[_0x29d580(0x356)][_0x29d580(0x2da)]=function(){const _0x52e550=_0x29d580;return Scene_Name[_0x52e550(0x764)][_0x52e550(0x94d)][_0x52e550(0x84c)](this);},Scene_Name['prototype']['inputWindowRect']=function(){const _0x7cb401=_0x29d580;return Scene_Name[_0x7cb401(0x764)][_0x7cb401(0x2b1)]['call'](this);},Scene_Name[_0x29d580(0x356)][_0x29d580(0x1e5)]=function(){const _0x50baef=_0x29d580;if(!this['_inputWindow'])return![];return VisuMZ[_0x50baef(0x191)][_0x50baef(0xa48)][_0x50baef(0x65d)][_0x50baef(0x1e5)];},Scene_Name['prototype'][_0x29d580(0x6fe)]=function(){const _0x1796fa=_0x29d580;if(this['EnableNameInput']()&&this['_inputWindow'][_0x1796fa(0x22a)]!==_0x1796fa(0x986))return TextManager[_0x1796fa(0x991)](_0x1796fa(0x21c),_0x1796fa(0x36f));return Scene_MenuBase[_0x1796fa(0x356)][_0x1796fa(0x6fe)][_0x1796fa(0x84c)](this);},Scene_Name[_0x29d580(0x356)][_0x29d580(0x2db)]=function(){const _0x5c109b=_0x29d580;return this['EnableNameInput']()?TextManager[_0x5c109b(0x75c)](_0x5c109b(0x326)):Scene_MenuBase[_0x5c109b(0x356)][_0x5c109b(0x2db)][_0x5c109b(0x84c)](this);},Scene_Name['prototype']['buttonAssistKey4']=function(){const _0x13b178=_0x29d580;if(this[_0x13b178(0x1e5)]()&&this['_inputWindow'][_0x13b178(0x22a)]===_0x13b178(0x986))return TextManager[_0x13b178(0x7db)]([_0x13b178(0x813)]);return Scene_MenuBase[_0x13b178(0x356)]['buttonAssistKey4']['call'](this);},Scene_Name[_0x29d580(0x356)][_0x29d580(0x5a0)]=function(){const _0x2b5e6a=_0x29d580;if(this[_0x2b5e6a(0x1e5)]()&&this['_inputWindow'][_0x2b5e6a(0x22a)]==='keyboard')return TextManager[_0x2b5e6a(0x7db)]([_0x2b5e6a(0x38c)]);return Scene_MenuBase[_0x2b5e6a(0x356)][_0x2b5e6a(0x5a0)][_0x2b5e6a(0x84c)](this);},Scene_Name[_0x29d580(0x356)]['buttonAssistText1']=function(){const _0x500c4a=_0x29d580;if(this[_0x500c4a(0x1e5)]()&&this['_inputWindow'][_0x500c4a(0x22a)]!=='keyboard'){if(_0x500c4a(0xa53)===_0x500c4a(0x21e))_0x3fe35f['se'][_0x500c4a(0x2c8)]=0x0;else{const _0x275d94=VisuMZ[_0x500c4a(0x191)][_0x500c4a(0xa48)]['KeyboardInput'];return _0x275d94[_0x500c4a(0x888)]||'Page';}}return Scene_MenuBase[_0x500c4a(0x356)][_0x500c4a(0x4a0)]['call'](this);},Scene_Name[_0x29d580(0x356)]['buttonAssistText3']=function(){const _0x5de442=_0x29d580;if(this[_0x5de442(0x1e5)]()){const _0x3025af=VisuMZ[_0x5de442(0x191)][_0x5de442(0xa48)][_0x5de442(0x65d)];if(this[_0x5de442(0x803)]['_mode']===_0x5de442(0x986))return _0x3025af[_0x5de442(0x865)]||_0x5de442(0x865);else{if('thvRT'===_0x5de442(0x309)){if(_0x34a948[_0x5de442(0x191)][_0x5de442(0xa48)][_0x5de442(0x53e)][_0x5de442(0x49c)]&&_0x33ce85[_0x5de442(0x9a3)](_0x52f4af))return;_0x5a2f7f['CoreEngine'][_0x5de442(0x846)][_0x5de442(0x84c)](this,_0x356c70);}else return _0x3025af[_0x5de442(0x620)]||_0x5de442(0x620);}}else return'qoOEx'!=='qoOEx'?(_0x449de4=_0x12b7c1['replace'](/PRESERVCONVERSION\((\d+)\)/gi,(_0x3830af,_0x2bd7b7)=>_0x313138(_0x201e22(_0x2bd7b7))),_0x317d3a):Scene_MenuBase[_0x5de442(0x356)][_0x5de442(0x45a)][_0x5de442(0x84c)](this);},Scene_Name[_0x29d580(0x356)]['buttonAssistText4']=function(){const _0x15e0ac=_0x29d580;if(this[_0x15e0ac(0x1e5)]()){const _0x251f0a=VisuMZ['CoreEngine'][_0x15e0ac(0xa48)][_0x15e0ac(0x65d)];if(this[_0x15e0ac(0x803)]['_mode']===_0x15e0ac(0x986)){if(_0x15e0ac(0x641)!==_0x15e0ac(0x641)){const _0x239cba=_0x1ff660['CoreEngine']['Settings']['QoL'][_0x15e0ac(0x688)];if(_0x239cba>0x0)_0x137f81['reserveCommonEvent'](_0x239cba);}else return _0x251f0a[_0x15e0ac(0x906)]||'Finish';}}return Scene_MenuBase[_0x15e0ac(0x356)]['buttonAssistText4'][_0x15e0ac(0x84c)](this);},VisuMZ[_0x29d580(0x191)][_0x29d580(0x177)]=Scene_Name[_0x29d580(0x356)]['onInputOk'],Scene_Name[_0x29d580(0x356)][_0x29d580(0x87c)]=function(){const _0x3d88a9=_0x29d580;if(this[_0x3d88a9(0x69a)]()){if(_0x3d88a9(0x97a)==='XYSXR')this[_0x3d88a9(0x63e)]();else{_0x43f9ea['ConvertParams'](_0x86ebb9,_0x56b0f3);const _0x7f514c=_0x46e2a4['URL'];_0x2c1ed3['openURL'](_0x7f514c);}}else{if(_0x3d88a9(0x72e)===_0x3d88a9(0x72e))VisuMZ[_0x3d88a9(0x191)]['Scene_Name_onInputOk'][_0x3d88a9(0x84c)](this);else{if(this['centerCameraCheckData']()[_0x3d88a9(0x97b)]&&_0x16de46[_0x3d88a9(0x6fc)]()===0x1){this['_displayX']=this[_0x3d88a9(0x31e)]()[_0x3d88a9(0x2dd)];return;}_0x454900['CoreEngine'][_0x3d88a9(0x247)]['call'](this,_0x1b3d1);}}},Scene_Name[_0x29d580(0x356)]['doesNameContainBannedWords']=function(){const _0x4ac81b=_0x29d580,_0x3d098c=VisuMZ[_0x4ac81b(0x191)][_0x4ac81b(0xa48)][_0x4ac81b(0x65d)];if(!_0x3d098c)return![];const _0x4ba307=_0x3d098c['BannedWords'];if(!_0x4ba307)return![];const _0x1649b9=this['_editWindow'][_0x4ac81b(0xa21)]()[_0x4ac81b(0x61c)]();for(const _0x1ed125 of _0x4ba307){if(_0x1649b9[_0x4ac81b(0x480)](_0x1ed125[_0x4ac81b(0x61c)]()))return!![];}return![];},Scene_Name[_0x29d580(0x356)][_0x29d580(0x63e)]=function(){const _0x47c739=_0x29d580;SoundManager[_0x47c739(0x583)]();},VisuMZ['CoreEngine'][_0x29d580(0x2ef)]=Scene_Battle['prototype']['update'],Scene_Battle['prototype']['update']=function(){const _0x519642=_0x29d580;VisuMZ[_0x519642(0x191)][_0x519642(0x2ef)]['call'](this);if($gameTemp[_0x519642(0x755)])this[_0x519642(0xa1e)]();},Scene_Battle['prototype'][_0x29d580(0xa1e)]=function(){const _0x18c725=_0x29d580;if(!BattleManager['isInputting']()&&!this[_0x18c725(0x7c7)]&&!$gameMessage['isBusy']()){if('UQCRT'!==_0x18c725(0x969))this[_0x18c725(0x7c7)]=!![],this[_0x18c725(0x24e)](),SceneManager[_0x18c725(0x322)](),this[_0x18c725(0x7c7)]=![];else return![];}},VisuMZ[_0x29d580(0x191)][_0x29d580(0x4c8)]=Scene_Battle['prototype']['createCancelButton'],Scene_Battle[_0x29d580(0x356)][_0x29d580(0x59e)]=function(){const _0x5e7bdf=_0x29d580;VisuMZ[_0x5e7bdf(0x191)][_0x5e7bdf(0x4c8)][_0x5e7bdf(0x84c)](this),SceneManager['isSideButtonLayout']()&&this['repositionCancelButtonSideButtonLayout']();},Scene_Battle[_0x29d580(0x356)][_0x29d580(0x5e1)]=function(){const _0x3bcb5b=_0x29d580;this[_0x3bcb5b(0x2e6)]['x']=Graphics[_0x3bcb5b(0x686)]+0x4;if(this[_0x3bcb5b(0x28d)]())this[_0x3bcb5b(0x2e6)]['y']=Graphics['boxHeight']-this[_0x3bcb5b(0x261)]();else{if(_0x3bcb5b(0x74d)===_0x3bcb5b(0x74d))this[_0x3bcb5b(0x2e6)]['y']=0x0;else return _0x23a1dc[_0x3bcb5b(0x191)][_0x3bcb5b(0xa48)]['Color'][_0x3bcb5b(0x471)][_0x3bcb5b(0x84c)](this,_0x572294);}},VisuMZ['CoreEngine'][_0x29d580(0x63a)]=Sprite_Button[_0x29d580(0x356)][_0x29d580(0x1ce)],Sprite_Button[_0x29d580(0x356)]['initialize']=function(_0x5e7aae){const _0x104a0d=_0x29d580;VisuMZ['CoreEngine']['Sprite_Button_initialize'][_0x104a0d(0x84c)](this,_0x5e7aae),this[_0x104a0d(0x595)]();},Sprite_Button[_0x29d580(0x356)]['initButtonHidden']=function(){const _0x13cafa=_0x29d580,_0xc6a059=VisuMZ[_0x13cafa(0x191)]['Settings']['UI'];this['_isButtonHidden']=![];switch(this[_0x13cafa(0x44a)]){case'cancel':this[_0x13cafa(0x71b)]=!_0xc6a059[_0x13cafa(0x777)];break;case _0x13cafa(0x21c):case _0x13cafa(0x36f):this[_0x13cafa(0x71b)]=!_0xc6a059['pagedownShowButton'];break;case'down':case'up':case _0x13cafa(0x854):case _0x13cafa(0x890):case'ok':this[_0x13cafa(0x71b)]=!_0xc6a059['numberShowButton'];break;case _0x13cafa(0x3e2):this[_0x13cafa(0x71b)]=!_0xc6a059[_0x13cafa(0x32a)];break;}},VisuMZ['CoreEngine'][_0x29d580(0x592)]=Sprite_Button[_0x29d580(0x356)][_0x29d580(0x948)],Sprite_Button[_0x29d580(0x356)][_0x29d580(0x948)]=function(){const _0x1c5a7c=_0x29d580;if(SceneManager[_0x1c5a7c(0x478)]()||this['_isButtonHidden'])this['hideButtonFromView']();else{if(_0x1c5a7c(0x34a)===_0x1c5a7c(0x75a)){const _0x554486=_0x121f23[_0x1c5a7c(0x191)][_0x1c5a7c(0xa48)][_0x1c5a7c(0x7a4)];this['_coreEngineShakeStyle']=_0x554486?.['DefaultStyle']||_0x1c5a7c(0x618);}else VisuMZ['CoreEngine'][_0x1c5a7c(0x592)][_0x1c5a7c(0x84c)](this);}},Sprite_Button[_0x29d580(0x356)][_0x29d580(0x52f)]=function(){const _0x41e8ce=_0x29d580;this['visible']=![],this['opacity']=0x0,this['x']=Graphics[_0x41e8ce(0x31b)]*0xa,this['y']=Graphics['height']*0xa;},VisuMZ[_0x29d580(0x191)][_0x29d580(0x9e4)]=Sprite_Battler[_0x29d580(0x356)][_0x29d580(0x201)],Sprite_Battler['prototype'][_0x29d580(0x201)]=function(_0x4661e8,_0x4b639b,_0x45621f){const _0x34a81b=_0x29d580;if(this[_0x34a81b(0x708)]!==_0x4661e8||this[_0x34a81b(0x1f3)]!==_0x4b639b){if(_0x34a81b(0x847)!==_0x34a81b(0x5cf))this[_0x34a81b(0x527)](_0x34a81b(0x756)),this[_0x34a81b(0x1a0)]=_0x45621f;else{if(!!_0x2ab135[_0x4b7b80]){if(_0x154a2f[_0x34a81b(0x56c)]())_0x59a5ec[_0x34a81b(0x831)](_0x34a81b(0x53c)[_0x34a81b(0x7d6)](_0x1b4ace));}const _0x3c64b3=_0x34a81b(0x17d)['format'](_0x482080,_0x1f28ad);_0x2db540[_0x2899a5]=new _0x24fe74(_0x3c64b3);}}VisuMZ[_0x34a81b(0x191)][_0x34a81b(0x9e4)][_0x34a81b(0x84c)](this,_0x4661e8,_0x4b639b,_0x45621f);},Sprite_Battler[_0x29d580(0x356)][_0x29d580(0x527)]=function(_0x554b4c){const _0x2f378c=_0x29d580;this[_0x2f378c(0x82b)]=_0x554b4c;},Sprite_Battler[_0x29d580(0x356)]['updateMove']=function(){const _0x4b119b=_0x29d580;if(this[_0x4b119b(0x66d)]<=0x0)return;const _0x3dcb73=this['_movementDuration'],_0x3a4c52=this[_0x4b119b(0x1a0)],_0x44a6be=this[_0x4b119b(0x82b)];this[_0x4b119b(0x52e)]=this[_0x4b119b(0x4f6)](this['_offsetX'],this[_0x4b119b(0x708)],_0x3dcb73,_0x3a4c52,_0x44a6be),this[_0x4b119b(0x3de)]=this[_0x4b119b(0x4f6)](this['_offsetY'],this[_0x4b119b(0x1f3)],_0x3dcb73,_0x3a4c52,_0x44a6be),this[_0x4b119b(0x66d)]--;if(this[_0x4b119b(0x66d)]<=0x0)this['onMoveEnd']();},Sprite_Battler[_0x29d580(0x356)][_0x29d580(0x4f6)]=function(_0x417bb0,_0x446f12,_0x57b891,_0x2995cf,_0x1aabec){const _0x219765=_0x29d580,_0x319d2a=VisuMZ['ApplyEasing']((_0x2995cf-_0x57b891)/_0x2995cf,_0x1aabec||_0x219765(0x756)),_0x3583ed=VisuMZ[_0x219765(0x981)]((_0x2995cf-_0x57b891+0x1)/_0x2995cf,_0x1aabec||_0x219765(0x756)),_0x45e408=(_0x417bb0-_0x446f12*_0x319d2a)/(0x1-_0x319d2a);return _0x45e408+(_0x446f12-_0x45e408)*_0x3583ed;},VisuMZ[_0x29d580(0x191)][_0x29d580(0xa1b)]=Sprite_Actor['prototype'][_0x29d580(0x91d)],Sprite_Actor[_0x29d580(0x356)][_0x29d580(0x91d)]=function(_0x19f31a){const _0x2d8a69=_0x29d580;VisuMZ[_0x2d8a69(0x191)][_0x2d8a69(0xa48)]['UI']['RepositionActors']?this['setActorHomeRepositioned'](_0x19f31a):VisuMZ['CoreEngine'][_0x2d8a69(0xa1b)][_0x2d8a69(0x84c)](this,_0x19f31a);},Sprite_Actor['prototype'][_0x29d580(0x189)]=function(_0x396dcc){const _0x1975a8=_0x29d580;let _0x53a58d=Math['round'](Graphics[_0x1975a8(0x31b)]/0x2+0xc0);_0x53a58d-=Math[_0x1975a8(0x722)]((Graphics[_0x1975a8(0x31b)]-Graphics[_0x1975a8(0x686)])/0x2),_0x53a58d+=_0x396dcc*0x20;let _0x4451a5=Graphics[_0x1975a8(0x638)]-0xc8-$gameParty[_0x1975a8(0x929)]()*0x30;_0x4451a5-=Math[_0x1975a8(0x722)]((Graphics['height']-Graphics['boxHeight'])/0x2),_0x4451a5+=_0x396dcc*0x30,this[_0x1975a8(0x1e6)](_0x53a58d,_0x4451a5);},Sprite_Actor[_0x29d580(0x356)]['retreat']=function(){const _0x13ef94=_0x29d580;this[_0x13ef94(0x201)](0x4b0,0x0,0x78);},Sprite_Animation['prototype']['setMute']=function(_0x32dd48){const _0x21ee0b=_0x29d580;this[_0x21ee0b(0x5f3)]=_0x32dd48;},VisuMZ['CoreEngine'][_0x29d580(0x20a)]=Sprite_Animation[_0x29d580(0x356)][_0x29d580(0x1bb)],Sprite_Animation[_0x29d580(0x356)][_0x29d580(0x1bb)]=function(){const _0x53b91c=_0x29d580;if(this[_0x53b91c(0x5f3)])return;VisuMZ[_0x53b91c(0x191)]['Sprite_Animation_processSoundTimings'][_0x53b91c(0x84c)](this);},VisuMZ['CoreEngine'][_0x29d580(0x2fc)]=Sprite_Animation[_0x29d580(0x356)][_0x29d580(0x411)],Sprite_Animation[_0x29d580(0x356)][_0x29d580(0x411)]=function(_0x176db1){const _0x116a5c=_0x29d580;if(this[_0x116a5c(0x370)]()){if(_0x116a5c(0x21a)!=='kTOwV')this[_0x116a5c(0x40b)](_0x176db1);else return this['getButtonAssistLocation']()===_0x116a5c(0x477)?this['buttonAssistWindowButtonRect']():this['buttonAssistWindowSideRect']();}else{if(_0x116a5c(0x59a)!==_0x116a5c(0x83d))VisuMZ[_0x116a5c(0x191)][_0x116a5c(0x2fc)][_0x116a5c(0x84c)](this,_0x176db1);else{const _0x4e41a2=_0x116a5c(0x47b);_0x1f6dbb[_0x116a5c(0x8b8)](_0x293bf6)[_0x116a5c(0x8b8)]('')[_0x116a5c(0x8b8)](null);const _0x3cdb0a=_0x16ac29[_0x116a5c(0x3e5)](_0x116a5c(0x65b))[_0x116a5c(0x894)]();_0x2356a3[_0x116a5c(0x191)][_0x116a5c(0xa09)](_0x3cdb0a,_0x4e41a2,!![]),_0x4ad5fd[_0x116a5c(0x3df)][_0x116a5c(0x44d)]=!![];}}},Sprite_Animation['prototype'][_0x29d580(0x370)]=function(){const _0x6f2c9=_0x29d580;if(!this[_0x6f2c9(0x226)])return![];const _0x5be766=this[_0x6f2c9(0x226)]['name']||'';if(_0x5be766[_0x6f2c9(0x663)](/<MIRROR OFFSET X>/i))return!![];if(_0x5be766[_0x6f2c9(0x663)](/<NO MIRROR OFFSET X>/i))return![];return VisuMZ[_0x6f2c9(0x191)][_0x6f2c9(0xa48)][_0x6f2c9(0x53e)][_0x6f2c9(0x4e5)];},Sprite_Animation[_0x29d580(0x356)][_0x29d580(0x40b)]=function(_0xc1eb99){const _0x4b5d59=_0x29d580,_0x63f8ac=this[_0x4b5d59(0x4d7)],_0x36d48f=this['_viewportSize'],_0x39f702=this[_0x4b5d59(0x226)][_0x4b5d59(0x21d)]*(this[_0x4b5d59(0x3d7)]?-0x1:0x1)-_0x63f8ac/0x2,_0x45cf12=this[_0x4b5d59(0x226)][_0x4b5d59(0x3c3)]-_0x36d48f/0x2,_0x7ef485=this[_0x4b5d59(0x23b)](_0xc1eb99);_0xc1eb99['gl'][_0x4b5d59(0x7b1)](_0x39f702+_0x7ef485['x'],_0x45cf12+_0x7ef485['y'],_0x63f8ac,_0x36d48f);},Sprite_Animation[_0x29d580(0x356)]['targetSpritePosition']=function(_0x10d69f){const _0x3c9bc2=_0x29d580;if(_0x10d69f[_0x3c9bc2(0x2c9)]){}const _0x314921=this[_0x3c9bc2(0x226)]['name'];let _0x32308a=_0x10d69f[_0x3c9bc2(0x638)]*_0x10d69f[_0x3c9bc2(0x198)]['y'],_0x124870=0x0,_0x2f4a25=-_0x32308a/0x2;if(_0x314921[_0x3c9bc2(0x663)](/<(?:HEAD|HEADER|TOP)>/i))_0x2f4a25=-_0x32308a;if(_0x314921[_0x3c9bc2(0x663)](/<(?:FOOT|FOOTER|BOTTOM)>/i))_0x2f4a25=0x0;if(this[_0x3c9bc2(0x226)][_0x3c9bc2(0x497)])_0x2f4a25=0x0;if(_0x314921[_0x3c9bc2(0x663)](/<(?:LEFT)>/i))_0x124870=-_0x10d69f['width']/0x2;if(_0x314921[_0x3c9bc2(0x663)](/<(?:RIGHT)>/i))_0x124870=_0x10d69f[_0x3c9bc2(0x31b)]/0x2;_0x314921[_0x3c9bc2(0x663)](/<ANCHOR X:[ ](\d+\.?\d*)>/i)&&(_0x124870=Number(RegExp['$1'])*_0x10d69f[_0x3c9bc2(0x31b)]);_0x314921['match'](/<ANCHOR Y:[ ](\d+\.?\d*)>/i)&&(_0x2f4a25=(0x1-Number(RegExp['$1']))*-_0x32308a);_0x314921[_0x3c9bc2(0x663)](/<ANCHOR:[ ](\d+\.?\d*),[ ](\d+\.?\d*)>/i)&&(_0x124870=Number(RegExp['$1'])*_0x10d69f[_0x3c9bc2(0x31b)],_0x2f4a25=(0x1-Number(RegExp['$2']))*-_0x32308a);if(_0x314921['match'](/<OFFSET X:[ ]([\+\-]\d+)>/i))_0x124870+=Number(RegExp['$1']);if(_0x314921[_0x3c9bc2(0x663)](/<OFFSET Y:[ ]([\+\-]\d+)>/i))_0x2f4a25+=Number(RegExp['$1']);_0x314921[_0x3c9bc2(0x663)](/<OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(_0x124870+=Number(RegExp['$1']),_0x2f4a25+=Number(RegExp['$2']));const _0x4ae0ea=new Point(_0x124870,_0x2f4a25);return _0x10d69f[_0x3c9bc2(0x258)](),_0x10d69f[_0x3c9bc2(0x1cb)]['apply'](_0x4ae0ea);},Sprite_AnimationMV[_0x29d580(0x356)][_0x29d580(0x2b6)]=function(){const _0x5cd6ba=_0x29d580;this['_rate']=VisuMZ[_0x5cd6ba(0x191)][_0x5cd6ba(0xa48)][_0x5cd6ba(0x53e)]['MvAnimationRate']??0x4,this[_0x5cd6ba(0x2f9)](),this[_0x5cd6ba(0x9af)]=this[_0x5cd6ba(0x9af)][_0x5cd6ba(0x8ff)](0x1,0xa);},Sprite_AnimationMV['prototype'][_0x29d580(0x2f9)]=function(){const _0x3fc108=_0x29d580;if(!this['_animation']);const _0x54f9b6=this[_0x3fc108(0x226)]['name']||'';if(_0x54f9b6[_0x3fc108(0x663)](/<RATE:[ ](\d+)>/i)){if(_0x3fc108(0xa10)===_0x3fc108(0xa10))this['_rate']=(Number(RegExp['$1'])||0x1)['clamp'](0x1,0xa);else var _0x448d00=_0x549b61['ApplyEasing'](_0x4c4da7*0x2-0x1,_0x3fc108(0x1ac))*0.5+0.5;}},Sprite_AnimationMV[_0x29d580(0x356)][_0x29d580(0xa05)]=function(_0x2a955e){const _0x5ce7b8=_0x29d580;this[_0x5ce7b8(0x5f3)]=_0x2a955e;},VisuMZ[_0x29d580(0x191)]['Sprite_AnimationMV_processTimingData']=Sprite_AnimationMV[_0x29d580(0x356)][_0x29d580(0x8f5)],Sprite_AnimationMV['prototype'][_0x29d580(0x8f5)]=function(_0x59165c){const _0xf2361f=_0x29d580;this[_0xf2361f(0x5f3)]&&(_0x59165c=JsonEx['makeDeepCopy'](_0x59165c),_0x59165c['se']&&(_0x59165c['se']['volume']=0x0)),VisuMZ[_0xf2361f(0x191)][_0xf2361f(0x938)][_0xf2361f(0x84c)](this,_0x59165c);},VisuMZ['CoreEngine'][_0x29d580(0x785)]=Sprite_AnimationMV['prototype'][_0x29d580(0x646)],Sprite_AnimationMV['prototype'][_0x29d580(0x646)]=function(){const _0xa78cba=_0x29d580;VisuMZ[_0xa78cba(0x191)][_0xa78cba(0x785)][_0xa78cba(0x84c)](this);if(this[_0xa78cba(0x226)][_0xa78cba(0x7f3)]===0x3){if(_0xa78cba(0x738)!==_0xa78cba(0x738))return this;else{if(this['x']===0x0)this['x']=Math[_0xa78cba(0x673)](Graphics[_0xa78cba(0x31b)]/0x2);if(this['y']===0x0)this['y']=Math[_0xa78cba(0x673)](Graphics[_0xa78cba(0x638)]/0x2);}}},Sprite_Damage[_0x29d580(0x356)][_0x29d580(0x39d)]=function(_0x507324){const _0xe3e293=_0x29d580;let _0x2f7cf5=Math[_0xe3e293(0x899)](_0x507324)[_0xe3e293(0x98d)]();this[_0xe3e293(0xa4d)]()&&(_0x2f7cf5=VisuMZ[_0xe3e293(0x235)](_0x2f7cf5));const _0x5d0389=this[_0xe3e293(0x946)](),_0x4a40a0=Math[_0xe3e293(0x722)](_0x5d0389*0.75);for(let _0x2b88fb=0x0;_0x2b88fb<_0x2f7cf5[_0xe3e293(0x743)];_0x2b88fb++){const _0x1d6f8c=this[_0xe3e293(0x427)](_0x4a40a0,_0x5d0389);_0x1d6f8c['bitmap'][_0xe3e293(0x6a6)](_0x2f7cf5[_0x2b88fb],0x0,0x0,_0x4a40a0,_0x5d0389,_0xe3e293(0x665)),_0x1d6f8c['x']=(_0x2b88fb-(_0x2f7cf5['length']-0x1)/0x2)*_0x4a40a0,_0x1d6f8c['dy']=-_0x2b88fb;}},Sprite_Damage[_0x29d580(0x356)]['useDigitGrouping']=function(){const _0x3d52c0=_0x29d580;return VisuMZ[_0x3d52c0(0x191)][_0x3d52c0(0xa48)][_0x3d52c0(0x53e)][_0x3d52c0(0x469)];},Sprite_Damage[_0x29d580(0x356)]['valueOutlineColor']=function(){const _0x255d5f=_0x29d580;return ColorManager[_0x255d5f(0x9ca)]();},VisuMZ[_0x29d580(0x191)][_0x29d580(0x33d)]=Sprite_Gauge['prototype']['gaugeRate'],Sprite_Gauge[_0x29d580(0x356)][_0x29d580(0x8c2)]=function(){const _0x53b569=_0x29d580;return VisuMZ[_0x53b569(0x191)][_0x53b569(0x33d)][_0x53b569(0x84c)](this)['clamp'](0x0,0x1);},VisuMZ[_0x29d580(0x191)]['Sprite_Gauge_currentValue']=Sprite_Gauge['prototype']['currentValue'],Sprite_Gauge[_0x29d580(0x356)]['currentValue']=function(){const _0x242cc8=_0x29d580;let _0x33ff96=VisuMZ['CoreEngine'][_0x242cc8(0x568)][_0x242cc8(0x84c)](this);return _0x33ff96;},Sprite_Gauge[_0x29d580(0x356)][_0x29d580(0x913)]=function(){const _0x1fd52d=_0x29d580;let _0x27ebbd=this['currentValue']();this[_0x1fd52d(0xa4d)]()&&(_0x1fd52d(0x953)==='rGGiy'?_0x27ebbd=VisuMZ[_0x1fd52d(0x235)](_0x27ebbd):this[_0x1fd52d(0x8fb)]['setBackgroundType'](_0x116aee[_0x1fd52d(0x764)][_0x1fd52d(0x286)]));const _0xa6ffd9=this[_0x1fd52d(0x246)]()-0x1,_0x2565d4=this['textHeight']?this[_0x1fd52d(0x194)]():this['bitmapHeight']();this[_0x1fd52d(0x72f)](),this[_0x1fd52d(0x240)]['drawText'](_0x27ebbd,0x0,0x0,_0xa6ffd9,_0x2565d4,_0x1fd52d(0x74e));},Sprite_Gauge['prototype'][_0x29d580(0x798)]=function(){return 0x3;},Sprite_Gauge[_0x29d580(0x356)][_0x29d580(0xa4d)]=function(){const _0x508923=_0x29d580;return VisuMZ['CoreEngine'][_0x508923(0xa48)][_0x508923(0x53e)]['DigitGroupingGaugeSprites'];},Sprite_Gauge[_0x29d580(0x356)][_0x29d580(0x3c7)]=function(){const _0x36029b=_0x29d580;return ColorManager[_0x36029b(0x8a2)]();},VisuMZ[_0x29d580(0x191)][_0x29d580(0x19a)]=Sprite_Picture[_0x29d580(0x356)][_0x29d580(0x904)],Sprite_Picture[_0x29d580(0x356)][_0x29d580(0x904)]=function(){const _0x95fab5=_0x29d580;if(this['_pictureName']&&this[_0x95fab5(0x419)]['match'](/VisuMZ CoreEngine PictureIcon (\d+)/i)){if(_0x95fab5(0x464)!==_0x95fab5(0x464)){const _0x183672=_0x3df721[_0x95fab5(0x7c4)]();if(_0x183672)_0x183672[_0x95fab5(0x8d8)](_0x12c18e);}else this[_0x95fab5(0x4ce)](Number(RegExp['$1']));}else{if(_0x95fab5(0x3d4)!==_0x95fab5(0x32d))VisuMZ['CoreEngine']['Sprite_Picture_loadBitmap'][_0x95fab5(0x84c)](this);else{let _0x13121d=_0x1a5104['createTroopNote'](_0x588642['id']);this[_0x95fab5(0x60a)](_0x13121d);}}},Sprite_Picture[_0x29d580(0x356)][_0x29d580(0x4ce)]=function(_0x29776c){const _0x54838d=_0x29d580,_0x463abb=ImageManager[_0x54838d(0x4cd)],_0x99d9c=ImageManager['iconHeight'],_0x248800=this[_0x54838d(0x419)]['match'](/SMOOTH/i);this['bitmap']=new Bitmap(_0x463abb,_0x99d9c);const _0x260d50=ImageManager[_0x54838d(0x7a2)](_0x54838d(0x666)),_0x3f1e22=_0x29776c%0x10*_0x463abb,_0x5dddc7=Math['floor'](_0x29776c/0x10)*_0x99d9c;this[_0x54838d(0x240)][_0x54838d(0x296)]=_0x248800,this[_0x54838d(0x240)][_0x54838d(0x364)](_0x260d50,_0x3f1e22,_0x5dddc7,_0x463abb,_0x99d9c,0x0,0x0,_0x463abb,_0x99d9c);};function Sprite_TitlePictureButton(){this['initialize'](...arguments);}Sprite_TitlePictureButton['prototype']=Object['create'](Sprite_Clickable[_0x29d580(0x356)]),Sprite_TitlePictureButton[_0x29d580(0x356)]['constructor']=Sprite_TitlePictureButton,Sprite_TitlePictureButton[_0x29d580(0x356)][_0x29d580(0x1ce)]=function(_0x351661){const _0x273be3=_0x29d580;Sprite_Clickable[_0x273be3(0x356)][_0x273be3(0x1ce)]['call'](this),this[_0x273be3(0x2a9)]=_0x351661,this['_clickHandler']=null,this[_0x273be3(0x95e)]();},Sprite_TitlePictureButton['prototype'][_0x29d580(0x95e)]=function(){const _0x2f6e29=_0x29d580;this['x']=Graphics['width'],this['y']=Graphics[_0x2f6e29(0x638)],this[_0x2f6e29(0x276)]=![],this[_0x2f6e29(0x2f3)]();},Sprite_TitlePictureButton[_0x29d580(0x356)][_0x29d580(0x2f3)]=function(){const _0x29f456=_0x29d580;this[_0x29f456(0x240)]=ImageManager[_0x29f456(0x6be)](this[_0x29f456(0x2a9)]['PictureFilename']),this[_0x29f456(0x240)][_0x29f456(0x8de)](this['onButtonImageLoad'][_0x29f456(0x85f)](this));},Sprite_TitlePictureButton[_0x29d580(0x356)]['onButtonImageLoad']=function(){const _0x39ca21=_0x29d580;this[_0x39ca21(0x2a9)][_0x39ca21(0x960)][_0x39ca21(0x84c)](this),this['_data']['PositionJS'][_0x39ca21(0x84c)](this),this['setClickHandler'](this[_0x39ca21(0x2a9)]['CallHandlerJS'][_0x39ca21(0x85f)](this));},Sprite_TitlePictureButton[_0x29d580(0x356)]['update']=function(){const _0x50d536=_0x29d580;Sprite_Clickable[_0x50d536(0x356)]['update']['call'](this),this[_0x50d536(0x948)](),this['processTouch']();},Sprite_TitlePictureButton[_0x29d580(0x356)][_0x29d580(0x560)]=function(){const _0x18c886=_0x29d580;return VisuMZ[_0x18c886(0x191)][_0x18c886(0xa48)][_0x18c886(0x636)][_0x18c886(0x1a9)][_0x18c886(0x6de)];},Sprite_TitlePictureButton[_0x29d580(0x356)][_0x29d580(0x948)]=function(){const _0x2d45d1=_0x29d580;if(this[_0x2d45d1(0x5c2)]||this['_hovered'])this['opacity']=0xff;else{if(_0x2d45d1(0x18d)!==_0x2d45d1(0x18d)){if(!_0x297dd5[_0x2d45d1(0x3df)])return;if(!_0x30af7b['_scene'][_0x2d45d1(0x4c0)])return;_0x3c1360[_0x2d45d1(0x9cc)](_0xee96c9,_0x4f4636);const _0x506f29=_0x4f4855[_0x2d45d1(0x673)](_0x4c5a2e[_0x2d45d1(0x22e)]),_0x5dd513=_0x59404e[_0x2d45d1(0x673)](_0x4bb946[_0x2d45d1(0x82e)]);_0x5d5fed[_0x2d45d1(0x74f)](_0x506f29,_0x5dd513,_0x12c174[_0x2d45d1(0x683)],_0xc27c8b[_0x2d45d1(0x5f2)],_0x25ac93[_0x2d45d1(0x633)]);}else this[_0x2d45d1(0x76f)]+=this['visible']?this[_0x2d45d1(0x560)]():-0x1*this[_0x2d45d1(0x560)](),this[_0x2d45d1(0x76f)]=Math[_0x2d45d1(0x6c6)](0xc0,this[_0x2d45d1(0x76f)]);}},Sprite_TitlePictureButton[_0x29d580(0x356)][_0x29d580(0x388)]=function(_0x5876bf){const _0x1a4d01=_0x29d580;this[_0x1a4d01(0x9ff)]=_0x5876bf;},Sprite_TitlePictureButton[_0x29d580(0x356)]['onClick']=function(){const _0x589f4b=_0x29d580;this[_0x589f4b(0x9ff)]&&this[_0x589f4b(0x9ff)]();},VisuMZ[_0x29d580(0x191)][_0x29d580(0xa37)]=Spriteset_Base[_0x29d580(0x356)][_0x29d580(0x1ce)],Spriteset_Base['prototype'][_0x29d580(0x1ce)]=function(){const _0x555437=_0x29d580;VisuMZ[_0x555437(0x191)][_0x555437(0xa37)]['call'](this),this[_0x555437(0x7b4)]();},Spriteset_Base[_0x29d580(0x356)][_0x29d580(0x7b4)]=function(){const _0x6dfa0d=_0x29d580;this['_fauxAnimationSprites']=[],this[_0x6dfa0d(0x727)]=[],this[_0x6dfa0d(0x935)]=this[_0x6dfa0d(0x198)]['x'],this[_0x6dfa0d(0x1bd)]=this[_0x6dfa0d(0x198)]['y'];},VisuMZ[_0x29d580(0x191)][_0x29d580(0x7d5)]=Spriteset_Base[_0x29d580(0x356)][_0x29d580(0x429)],Spriteset_Base[_0x29d580(0x356)]['destroy']=function(_0x4fc278){const _0x5c92dd=_0x29d580;this[_0x5c92dd(0x7ed)](),this['removeAllPointAnimations'](),VisuMZ[_0x5c92dd(0x191)][_0x5c92dd(0x7d5)][_0x5c92dd(0x84c)](this,_0x4fc278);},VisuMZ[_0x29d580(0x191)][_0x29d580(0x607)]=Spriteset_Base[_0x29d580(0x356)][_0x29d580(0x24e)],Spriteset_Base['prototype'][_0x29d580(0x24e)]=function(){const _0x2a272a=_0x29d580;VisuMZ[_0x2a272a(0x191)][_0x2a272a(0x607)][_0x2a272a(0x84c)](this),this['updatePictureSettings'](),this[_0x2a272a(0x202)](),this[_0x2a272a(0x359)](),this[_0x2a272a(0x4f8)]();},Spriteset_Base[_0x29d580(0x356)]['updatePictureSettings']=function(){},Spriteset_Base['prototype'][_0x29d580(0x202)]=function(){const _0x4e9016=_0x29d580;if(!VisuMZ[_0x4e9016(0x191)][_0x4e9016(0xa48)][_0x4e9016(0x53e)][_0x4e9016(0x69e)])return;if(this[_0x4e9016(0x935)]===this[_0x4e9016(0x198)]['x']&&this[_0x4e9016(0x1bd)]===this['scale']['y'])return;this['adjustPictureAntiZoom'](),this[_0x4e9016(0x935)]=this['scale']['x'],this[_0x4e9016(0x1bd)]=this['scale']['y'];},Spriteset_Base[_0x29d580(0x356)][_0x29d580(0x3b6)]=function(){const _0x38b3fb=_0x29d580;if(SceneManager[_0x38b3fb(0x412)]()&&Spriteset_Map[_0x38b3fb(0x644)])return;else{if(SceneManager[_0x38b3fb(0x65e)]()&&Spriteset_Battle[_0x38b3fb(0x644)])return;}if(this[_0x38b3fb(0x198)]['x']!==0x0){if(_0x38b3fb(0x7be)===_0x38b3fb(0x7be))this[_0x38b3fb(0x173)][_0x38b3fb(0x198)]['x']=0x1/this['scale']['x'],this[_0x38b3fb(0x173)]['x']=-(this['x']/this[_0x38b3fb(0x198)]['x']);else{if(_0x5a8983&&_0x5b50ef[_0x38b3fb(0x240)])_0xf779ff[_0x38b3fb(0x240)][_0x38b3fb(0x429)]();}}this['scale']['y']!==0x0&&(this[_0x38b3fb(0x173)]['scale']['y']=0x1/this[_0x38b3fb(0x198)]['y'],this[_0x38b3fb(0x173)]['y']=-(this['y']/this[_0x38b3fb(0x198)]['y']));},VisuMZ[_0x29d580(0x191)]['Spriteset_Base_updatePosition']=Spriteset_Base['prototype'][_0x29d580(0x646)],Spriteset_Base['prototype']['updatePosition']=function(){const _0x59e715=_0x29d580;VisuMZ[_0x59e715(0x191)]['Spriteset_Base_updatePosition']['call'](this),this[_0x59e715(0x880)]();},Spriteset_Base[_0x29d580(0x356)][_0x29d580(0x880)]=function(){const _0x2cbaf6=_0x29d580;if(!$gameScreen)return;if($gameScreen[_0x2cbaf6(0x467)]<=0x0)return;this['x']-=Math[_0x2cbaf6(0x673)]($gameScreen['shake']());const _0x5d16a0=$gameScreen[_0x2cbaf6(0x381)]();switch($gameScreen['getCoreEngineScreenShakeStyle']()){case _0x2cbaf6(0x58f):this[_0x2cbaf6(0xa27)]();break;case _0x2cbaf6(0x3c2):this[_0x2cbaf6(0x9b8)]();break;case _0x2cbaf6(0x7ab):this[_0x2cbaf6(0x7de)]();break;default:this[_0x2cbaf6(0x7d0)]();break;}},Spriteset_Base[_0x29d580(0x356)][_0x29d580(0xa27)]=function(){const _0x316837=_0x29d580,_0x4d62e8=VisuMZ[_0x316837(0x191)]['Settings'][_0x316837(0x7a4)];if(_0x4d62e8&&_0x4d62e8[_0x316837(0x6e6)])return _0x4d62e8[_0x316837(0x6e6)][_0x316837(0x84c)](this);this['x']+=Math[_0x316837(0x673)]($gameScreen[_0x316837(0x216)]());},Spriteset_Base[_0x29d580(0x356)][_0x29d580(0x7d0)]=function(){const _0x17b560=_0x29d580,_0x398b51=VisuMZ['CoreEngine'][_0x17b560(0xa48)][_0x17b560(0x7a4)];if(_0x398b51&&_0x398b51[_0x17b560(0x58b)])return _0x398b51[_0x17b560(0x58b)][_0x17b560(0x84c)](this);const _0x1c4bd6=$gameScreen[_0x17b560(0x97d)]*0.75,_0x3ef5e0=$gameScreen[_0x17b560(0x30e)]*0.6,_0x2b334a=$gameScreen[_0x17b560(0x467)];this['x']+=Math['round'](Math[_0x17b560(0x410)](_0x1c4bd6)-Math[_0x17b560(0x410)](_0x3ef5e0))*(Math[_0x17b560(0x6c6)](_0x2b334a,0x1e)*0.5),this['y']+=Math[_0x17b560(0x673)](Math[_0x17b560(0x410)](_0x1c4bd6)-Math[_0x17b560(0x410)](_0x3ef5e0))*(Math[_0x17b560(0x6c6)](_0x2b334a,0x1e)*0.5);},Spriteset_Base[_0x29d580(0x356)][_0x29d580(0x9b8)]=function(){const _0x9f0261=_0x29d580,_0x3dbef8=VisuMZ[_0x9f0261(0x191)][_0x9f0261(0xa48)][_0x9f0261(0x7a4)];if(_0x3dbef8&&_0x3dbef8['horzJS'])return _0x3dbef8[_0x9f0261(0x41d)]['call'](this);const _0x329fa8=$gameScreen['_shakePower']*0.75,_0x4f5e89=$gameScreen[_0x9f0261(0x30e)]*0.6,_0x20534e=$gameScreen[_0x9f0261(0x467)];this['x']+=Math[_0x9f0261(0x673)](Math[_0x9f0261(0x410)](_0x329fa8)-Math['randomInt'](_0x4f5e89))*(Math['min'](_0x20534e,0x1e)*0.5);},Spriteset_Base['prototype'][_0x29d580(0x7de)]=function(){const _0x1f222f=_0x29d580,_0x9ffd82=VisuMZ[_0x1f222f(0x191)][_0x1f222f(0xa48)]['ScreenShake'];if(_0x9ffd82&&_0x9ffd82[_0x1f222f(0x9f9)]){if(_0x1f222f(0x4e0)===_0x1f222f(0x7a0))for(const _0x4e4e2c of this['_pointAnimationSprites']){this['removePointAnimation'](_0x4e4e2c);}else return _0x9ffd82[_0x1f222f(0x9f9)][_0x1f222f(0x84c)](this);}const _0x5ecc8f=$gameScreen[_0x1f222f(0x97d)]*0.75,_0x49ccee=$gameScreen['_shakeSpeed']*0.6,_0x2f1b9c=$gameScreen['_shakeDuration'];this['y']+=Math['round'](Math[_0x1f222f(0x410)](_0x5ecc8f)-Math[_0x1f222f(0x410)](_0x49ccee))*(Math['min'](_0x2f1b9c,0x1e)*0.5);},Spriteset_Base[_0x29d580(0x356)][_0x29d580(0x359)]=function(){const _0x5889c8=_0x29d580;for(const _0x4fe6da of this[_0x5889c8(0x1fa)]){!_0x4fe6da[_0x5889c8(0x260)]()&&this[_0x5889c8(0x24a)](_0x4fe6da);}this['processFauxAnimationRequests']();},Spriteset_Base[_0x29d580(0x356)]['processFauxAnimationRequests']=function(){const _0x212946=_0x29d580;for(;;){const _0x194713=$gameTemp[_0x212946(0x828)]();if(_0x194713)this[_0x212946(0x8d5)](_0x194713);else break;}},Spriteset_Base['prototype'][_0x29d580(0x8d5)]=function(_0x35fc59){const _0x3e427f=_0x29d580,_0x973b79=$dataAnimations[_0x35fc59[_0x3e427f(0x41e)]],_0x2ad3f4=_0x35fc59[_0x3e427f(0x696)],_0x2ce635=_0x35fc59['mirror'],_0xcc323a=_0x35fc59[_0x3e427f(0x17e)];let _0x4b2d02=this[_0x3e427f(0x35e)]();const _0x33f291=this['animationNextDelay']();if(this[_0x3e427f(0x407)](_0x973b79))for(const _0x9d1121 of _0x2ad3f4){this[_0x3e427f(0x3bd)]([_0x9d1121],_0x973b79,_0x2ce635,_0x4b2d02,_0xcc323a),_0x4b2d02+=_0x33f291;}else'tKjpW'!==_0x3e427f(0x236)?this[_0x3e427f(0x3bd)](_0x2ad3f4,_0x973b79,_0x2ce635,_0x4b2d02,_0xcc323a):this['_digitGroupingEx']=_0x57c0c8;},Spriteset_Base[_0x29d580(0x356)][_0x29d580(0x25c)]=function(_0x32d9d2,_0xf8de37,_0x42f323,_0x4a52ca){const _0x15edc5=_0x29d580,_0x1553ed=this['isMVAnimation'](_0xf8de37),_0x5d4636=new(_0x1553ed?Sprite_AnimationMV:Sprite_Animation)(),_0x5573ed=this[_0x15edc5(0x4d4)](_0x32d9d2),_0x40b1b6=this[_0x15edc5(0x35e)](),_0xac3912=_0x4a52ca>_0x40b1b6?this[_0x15edc5(0x619)]():null;this['animationShouldMirror'](_0x32d9d2[0x0])&&(_0x15edc5(0x27b)===_0x15edc5(0x27b)?_0x42f323=!_0x42f323:(_0x4644e8['CoreEngine']['ColorManager_loadWindowskin'][_0x15edc5(0x84c)](this),this[_0x15edc5(0x73b)]=this[_0x15edc5(0x73b)]||{})),_0x5d4636[_0x15edc5(0x81a)]=_0x32d9d2,_0x5d4636['setup'](_0x5573ed,_0xf8de37,_0x42f323,_0x4a52ca,_0xac3912),this['addAnimationSpriteToContainer'](_0x5d4636),this[_0x15edc5(0x724)]['push'](_0x5d4636);},Spriteset_Base[_0x29d580(0x356)][_0x29d580(0x3bd)]=function(_0x65b47e,_0x5d0e82,_0x587d18,_0x3e6b5f,_0x75bbb9){const _0x55a774=_0x29d580,_0x23c105=this[_0x55a774(0x17a)](_0x5d0e82),_0x4054b6=new(_0x23c105?Sprite_AnimationMV:Sprite_Animation)(),_0x263f0c=this['makeTargetSprites'](_0x65b47e);this[_0x55a774(0x6ab)](_0x65b47e[0x0])&&(_0x587d18=!_0x587d18);_0x4054b6[_0x55a774(0x81a)]=_0x65b47e,_0x4054b6['setup'](_0x263f0c,_0x5d0e82,_0x587d18,_0x3e6b5f),_0x4054b6['setMute'](_0x75bbb9),this[_0x55a774(0x63b)](_0x4054b6);if(this[_0x55a774(0x724)])this['_animationSprites']['remove'](_0x4054b6);this['_fauxAnimationSprites'][_0x55a774(0x979)](_0x4054b6);},Spriteset_Base['prototype'][_0x29d580(0x63b)]=function(_0x7d1caf){const _0x3f39b9=_0x29d580;this[_0x3f39b9(0xa59)][_0x3f39b9(0x47a)](_0x7d1caf);},Spriteset_Base[_0x29d580(0x356)][_0x29d580(0x8d1)]=function(_0xe4a5a){const _0xbdc4ce=_0x29d580;this['_animationSprites'][_0xbdc4ce(0x8b8)](_0xe4a5a),this[_0xbdc4ce(0x319)](_0xe4a5a);for(const _0x3c5d37 of _0xe4a5a[_0xbdc4ce(0x81a)]){_0x3c5d37[_0xbdc4ce(0x8e8)]&&_0x3c5d37[_0xbdc4ce(0x8e8)]();}_0xe4a5a[_0xbdc4ce(0x429)]();},Spriteset_Base[_0x29d580(0x356)][_0x29d580(0x24a)]=function(_0x2d5926){const _0xbb15c2=_0x29d580;this[_0xbb15c2(0x1fa)][_0xbb15c2(0x8b8)](_0x2d5926),this['removeAnimationFromContainer'](_0x2d5926);for(const _0x2a76e7 of _0x2d5926[_0xbb15c2(0x81a)]){_0xbb15c2(0x327)!=='efast'?_0x20c172&&_0x38d1dc[_0xbb15c2(0x979)](_0x220800):_0x2a76e7[_0xbb15c2(0x8e8)]&&_0x2a76e7['endAnimation']();}_0x2d5926['destroy']();},Spriteset_Base[_0x29d580(0x356)][_0x29d580(0x319)]=function(_0x5e3512){const _0x45e975=_0x29d580;this[_0x45e975(0xa59)]['removeChild'](_0x5e3512);},Spriteset_Base[_0x29d580(0x356)][_0x29d580(0x7ed)]=function(){const _0x32efe3=_0x29d580;for(const _0x3e73ad of this[_0x32efe3(0x1fa)]){this['removeFauxAnimation'](_0x3e73ad);}},Spriteset_Base['prototype'][_0x29d580(0x54c)]=function(){const _0x173d23=_0x29d580;return this[_0x173d23(0x1fa)][_0x173d23(0x743)]>0x0;},Spriteset_Base[_0x29d580(0x356)][_0x29d580(0x4f8)]=function(){const _0x48f07a=_0x29d580;for(const _0x450575 of this[_0x48f07a(0x727)]){!_0x450575[_0x48f07a(0x260)]()&&('EghZv'!==_0x48f07a(0x547)?(_0x3f5f43=_0x22b59c[_0x48f07a(0x673)](_0x292532),_0xe39274=_0x564bb1['round'](_0x1e8290),_0x2bb745=_0x49dc59[_0x48f07a(0x673)](_0xdc4246),_0x4ae0df['CoreEngine'][_0x48f07a(0x7ea)][_0x48f07a(0x84c)](this,_0x34d3cf,_0x1ba285,_0x398558,_0x45ab1a),this[_0x48f07a(0x40a)]()):this[_0x48f07a(0x7ad)](_0x450575));}this[_0x48f07a(0x199)]();},Spriteset_Base[_0x29d580(0x356)]['processPointAnimationRequests']=function(){const _0x246bb0=_0x29d580;for(;;){if(_0x246bb0(0x51a)!==_0x246bb0(0x51a))_0x448038[_0x246bb0(0x191)][_0x246bb0(0x56e)]['call'](this),this[_0x246bb0(0x842)]();else{const _0x12b827=$gameTemp[_0x246bb0(0x29d)]();if(_0x12b827)this['createPointAnimation'](_0x12b827);else{if('pUFyf'===_0x246bb0(0xa50))break;else return _0x103ce9[_0x246bb0(0x356)][_0x246bb0(0x29f)]();}}}},Spriteset_Base[_0x29d580(0x356)][_0x29d580(0x602)]=function(_0x416e73){const _0x405820=_0x29d580,_0x58fbc6=$dataAnimations[_0x416e73[_0x405820(0x41e)]],_0x5a1dd1=this['createPointAnimationTargets'](_0x416e73),_0x20eb2e=_0x416e73[_0x405820(0x5b7)],_0x301ae8=_0x416e73['mute'];let _0x3962e1=this[_0x405820(0x35e)]();const _0x46f0b1=this[_0x405820(0x1d0)]();if(this[_0x405820(0x407)](_0x58fbc6))for(const _0x4e6c4a of _0x5a1dd1){this[_0x405820(0x64d)]([_0x4e6c4a],_0x58fbc6,_0x20eb2e,_0x3962e1,_0x301ae8),_0x3962e1+=_0x46f0b1;}else{if('XFNyJ'!==_0x405820(0x964))this[_0x405820(0x64d)](_0x5a1dd1,_0x58fbc6,_0x20eb2e,_0x3962e1,_0x301ae8);else return 0x0;}},Spriteset_Base['prototype'][_0x29d580(0x7e5)]=function(_0x1db989){const _0x2cfd3e=_0x29d580,_0x20e080=new Sprite_Clickable(),_0x163073=this[_0x2cfd3e(0x38f)]();_0x20e080['x']=_0x1db989['x']-_0x163073['x'],_0x20e080['y']=_0x1db989['y']-_0x163073['y'],_0x20e080['z']=0x64;const _0x3597fd=this[_0x2cfd3e(0x38f)]();return _0x3597fd[_0x2cfd3e(0x47a)](_0x20e080),[_0x20e080];},Spriteset_Base[_0x29d580(0x356)]['getPointAnimationLayer']=function(){return this;},Spriteset_Map['prototype'][_0x29d580(0x38f)]=function(){return this['_tilemap']||this;},Spriteset_Battle[_0x29d580(0x356)][_0x29d580(0x38f)]=function(){const _0x1fe6cd=_0x29d580;return this[_0x1fe6cd(0x2a1)]||this;},Spriteset_Base['prototype'][_0x29d580(0x64d)]=function(_0x5d5974,_0x4434ad,_0x4765c1,_0x167de4,_0x1de113){const _0x42d136=_0x29d580,_0x482939=this[_0x42d136(0x17a)](_0x4434ad),_0x23d562=new(_0x482939?Sprite_AnimationMV:Sprite_Animation)();_0x23d562['targetObjects']=_0x5d5974,_0x23d562['setup'](_0x5d5974,_0x4434ad,_0x4765c1,_0x167de4),_0x23d562[_0x42d136(0xa05)](_0x1de113),this[_0x42d136(0x63b)](_0x23d562),this[_0x42d136(0x727)][_0x42d136(0x979)](_0x23d562);},Spriteset_Base[_0x29d580(0x356)][_0x29d580(0x7ad)]=function(_0x5e92c1){const _0x2aa328=_0x29d580;this[_0x2aa328(0x727)][_0x2aa328(0x8b8)](_0x5e92c1),this[_0x2aa328(0xa59)][_0x2aa328(0x6ef)](_0x5e92c1);for(const _0x507893 of _0x5e92c1['targetObjects']){if(_0x507893['endAnimation']){if('nlfmq'===_0x2aa328(0x628))_0x507893['endAnimation']();else return _0x363821[_0x2aa328(0x7ec)](_0x9c051a[_0x2aa328(0x191)][_0x2aa328(0x970)][_0x2aa328(0x84c)](this,_0x388deb));}const _0x4b2b60=this[_0x2aa328(0x38f)]();if(_0x4b2b60)_0x4b2b60[_0x2aa328(0x6ef)](_0x507893);}_0x5e92c1['destroy']();},Spriteset_Base[_0x29d580(0x356)][_0x29d580(0x4d5)]=function(){const _0x38b0ae=_0x29d580;for(const _0x4bc82c of this['_pointAnimationSprites']){this[_0x38b0ae(0x7ad)](_0x4bc82c);}},Spriteset_Base[_0x29d580(0x356)][_0x29d580(0x626)]=function(){const _0xcf7663=_0x29d580;return this[_0xcf7663(0x727)][_0xcf7663(0x743)]>0x0;},VisuMZ['CoreEngine'][_0x29d580(0x587)]=Spriteset_Base[_0x29d580(0x356)]['isAnimationPlaying'],Spriteset_Base[_0x29d580(0x356)]['isAnimationPlaying']=function(){const _0x2032b7=_0x29d580;return VisuMZ[_0x2032b7(0x191)][_0x2032b7(0x587)][_0x2032b7(0x84c)](this)||this[_0x2032b7(0x626)]();},Spriteset_Map['DETACH_PICTURE_CONTAINER']=VisuMZ[_0x29d580(0x191)][_0x29d580(0xa48)][_0x29d580(0x53e)]['DetachMapPictureContainer']||![],VisuMZ[_0x29d580(0x191)][_0x29d580(0x9fc)]=Scene_Map[_0x29d580(0x356)][_0x29d580(0x1e2)],Scene_Map[_0x29d580(0x356)][_0x29d580(0x1e2)]=function(){const _0x530c16=_0x29d580;VisuMZ[_0x530c16(0x191)][_0x530c16(0x9fc)][_0x530c16(0x84c)](this);if(!Spriteset_Map['DETACH_PICTURE_CONTAINER'])return;const _0x47351b=this['_spriteset'];if(!_0x47351b)return;this[_0x530c16(0x173)]=_0x47351b[_0x530c16(0x173)];if(!this[_0x530c16(0x173)])return;this[_0x530c16(0x47a)](this[_0x530c16(0x173)]);},Spriteset_Battle[_0x29d580(0x644)]=VisuMZ[_0x29d580(0x191)][_0x29d580(0xa48)][_0x29d580(0x53e)][_0x29d580(0x64f)]||![],VisuMZ[_0x29d580(0x191)]['Scene_Battle_createSpriteset_detach']=Scene_Battle['prototype'][_0x29d580(0x1e2)],Scene_Battle[_0x29d580(0x356)][_0x29d580(0x1e2)]=function(){const _0x171621=_0x29d580;VisuMZ['CoreEngine'][_0x171621(0x797)][_0x171621(0x84c)](this);if(!Spriteset_Battle[_0x171621(0x644)])return;const _0xc49dc8=this[_0x171621(0x4c0)];if(!_0xc49dc8)return;this['_pictureContainer']=_0xc49dc8[_0x171621(0x173)];if(!this['_pictureContainer'])return;this[_0x171621(0x47a)](this['_pictureContainer']);},Spriteset_Battle[_0x29d580(0x356)][_0x29d580(0x9e1)]=function(){const _0x16474d=_0x29d580;this[_0x16474d(0x300)]=new PIXI[(_0x16474d(0x45d))][(_0x16474d(0x1eb))](clamp=!![]),this['_backgroundSprite']=new Sprite(),this['_backgroundSprite'][_0x16474d(0x240)]=SceneManager[_0x16474d(0x20b)](),this[_0x16474d(0x4da)][_0x16474d(0x45d)]=[this[_0x16474d(0x300)]],this[_0x16474d(0x94a)][_0x16474d(0x47a)](this[_0x16474d(0x4da)]);},VisuMZ[_0x29d580(0x191)][_0x29d580(0x1fd)]=Spriteset_Battle[_0x29d580(0x356)]['createEnemies'],Spriteset_Battle[_0x29d580(0x356)][_0x29d580(0xa40)]=function(){const _0x616312=_0x29d580;this['coreEngineRepositionEnemies']()&&this[_0x616312(0x9a4)](),VisuMZ[_0x616312(0x191)]['Spriteset_Battle_createEnemies'][_0x616312(0x84c)](this);},Spriteset_Battle[_0x29d580(0x356)][_0x29d580(0x86c)]=function(){const _0xdae534=_0x29d580,_0x567aac=VisuMZ['CoreEngine'][_0xdae534(0xa48)]['ScreenResolution'];if(!_0x567aac)return![];if(Utils[_0xdae534(0x7a9)]>=_0xdae534(0x9fb)&&!_0x567aac[_0xdae534(0x8a5)])return![];return _0x567aac[_0xdae534(0x5a2)];},Spriteset_Battle[_0x29d580(0x356)]['repositionEnemiesByResolution']=function(){const _0x2649b0=_0x29d580;for(member of $gameTroop[_0x2649b0(0x58d)]()){'jfXAg'===_0x2649b0(0x754)?this[_0x2649b0(0x62a)][_0x2649b0(0x196)](_0x142c8c[_0x2649b0(0x764)][_0x2649b0(0x90e)]):member['moveRelativeToResolutionChange']();}},VisuMZ['CoreEngine'][_0x29d580(0x249)]=Window_Base['prototype'][_0x29d580(0x1ce)],Window_Base['prototype']['initialize']=function(_0x58c47b){const _0x59865c=_0x29d580;_0x58c47b['x']=Math[_0x59865c(0x673)](_0x58c47b['x']),_0x58c47b['y']=Math['round'](_0x58c47b['y']),_0x58c47b[_0x59865c(0x31b)]=Math['round'](_0x58c47b[_0x59865c(0x31b)]),_0x58c47b[_0x59865c(0x638)]=Math['round'](_0x58c47b['height']),this['initDigitGrouping'](),VisuMZ[_0x59865c(0x191)][_0x59865c(0x249)][_0x59865c(0x84c)](this,_0x58c47b),this[_0x59865c(0x19b)]();},Window_Base[_0x29d580(0x356)]['initDigitGrouping']=function(){const _0x46ffa2=_0x29d580;this[_0x46ffa2(0x919)]=VisuMZ[_0x46ffa2(0x191)][_0x46ffa2(0xa48)]['QoL'][_0x46ffa2(0x5b2)],this[_0x46ffa2(0x297)]=VisuMZ[_0x46ffa2(0x191)][_0x46ffa2(0xa48)][_0x46ffa2(0x53e)]['DigitGroupingExText'];},Window_Base[_0x29d580(0x356)][_0x29d580(0x29f)]=function(){const _0x20bf73=_0x29d580;return VisuMZ[_0x20bf73(0x191)]['Settings'][_0x20bf73(0x80e)][_0x20bf73(0x7b8)];},Window_Base[_0x29d580(0x356)][_0x29d580(0x601)]=function(){const _0x259f68=_0x29d580;return VisuMZ[_0x259f68(0x191)][_0x259f68(0xa48)][_0x259f68(0x80e)][_0x259f68(0x8c1)];},Window_Base[_0x29d580(0x356)]['updateBackOpacity']=function(){const _0x47ccc7=_0x29d580;$gameSystem['windowOpacity']?this[_0x47ccc7(0x4f4)]=$gameSystem[_0x47ccc7(0x96a)]():this['backOpacity']=VisuMZ['CoreEngine']['Settings']['Window'][_0x47ccc7(0x299)];},Window_Base[_0x29d580(0x356)]['translucentOpacity']=function(){const _0x2fa70b=_0x29d580;return VisuMZ[_0x2fa70b(0x191)]['Settings']['Window'][_0x2fa70b(0x3a7)];},Window_Base[_0x29d580(0x356)][_0x29d580(0x184)]=function(){const _0x5e46c4=_0x29d580;return VisuMZ[_0x5e46c4(0x191)][_0x5e46c4(0xa48)]['Window'][_0x5e46c4(0x8b5)];},VisuMZ['CoreEngine']['Window_Base_update']=Window_Base[_0x29d580(0x356)][_0x29d580(0x24e)],Window_Base[_0x29d580(0x356)]['update']=function(){const _0x5408f6=_0x29d580;VisuMZ[_0x5408f6(0x191)][_0x5408f6(0x33f)]['call'](this),this[_0x5408f6(0x20f)]();},Window_Base['prototype'][_0x29d580(0x898)]=function(){const _0x158c4b=_0x29d580;if(this['_opening']){this[_0x158c4b(0x9ab)]+=this[_0x158c4b(0x184)]();if(this[_0x158c4b(0x5ba)]()){if(_0x158c4b(0x214)!=='daUjk')this[_0x158c4b(0x395)]=![];else{const _0x129f7e=_0x16d656[_0x5dd15b[_0x158c4b(0x41e)]],_0x207175=this[_0x158c4b(0x7e5)](_0x3a54ff),_0x1a35d6=_0xca2643['mirror'],_0x5e34c9=_0x397944[_0x158c4b(0x17e)];let _0x18d5af=this['animationBaseDelay']();const _0x325b58=this[_0x158c4b(0x1d0)]();if(this['isAnimationForEach'](_0x129f7e))for(const _0xa72a1c of _0x207175){this[_0x158c4b(0x64d)]([_0xa72a1c],_0x129f7e,_0x1a35d6,_0x18d5af,_0x5e34c9),_0x18d5af+=_0x325b58;}else this[_0x158c4b(0x64d)](_0x207175,_0x129f7e,_0x1a35d6,_0x18d5af,_0x5e34c9);}}}},Window_Base[_0x29d580(0x356)][_0x29d580(0x93d)]=function(){const _0x24e369=_0x29d580;this['_closing']&&(this['openness']-=this[_0x24e369(0x184)](),this['isClosed']()&&(this['_closing']=![]));},VisuMZ[_0x29d580(0x191)][_0x29d580(0x3b2)]=Window_Base['prototype'][_0x29d580(0x6a6)],Window_Base['prototype'][_0x29d580(0x6a6)]=function(_0xae7703,_0x3d6708,_0x5f4428,_0x470565,_0x5dbe65){const _0x323313=_0x29d580;if(this[_0x323313(0xa4d)]())_0xae7703=VisuMZ[_0x323313(0x235)](_0xae7703);VisuMZ[_0x323313(0x191)][_0x323313(0x3b2)][_0x323313(0x84c)](this,_0xae7703,_0x3d6708,_0x5f4428,_0x470565,_0x5dbe65);},Window_Base[_0x29d580(0x356)]['useDigitGrouping']=function(){const _0x25507f=_0x29d580;return this[_0x25507f(0x919)];},VisuMZ[_0x29d580(0x191)][_0x29d580(0x2d8)]=Window_Base[_0x29d580(0x356)][_0x29d580(0x304)],Window_Base[_0x29d580(0x356)][_0x29d580(0x304)]=function(_0x38e3d0,_0x2510b2,_0x2622be,_0x11b508){const _0x3ce2a6=_0x29d580;var _0x3ae9d5=VisuMZ[_0x3ce2a6(0x191)][_0x3ce2a6(0x2d8)]['call'](this,_0x38e3d0,_0x2510b2,_0x2622be,_0x11b508);if(this[_0x3ce2a6(0x6c5)]())_0x3ae9d5['text']=VisuMZ[_0x3ce2a6(0x235)](_0x3ae9d5[_0x3ce2a6(0x4ed)]);return _0x3ae9d5;},Window_Base[_0x29d580(0x356)]['useDigitGroupingEx']=function(){return this['_digitGroupingEx'];},Window_Base['prototype']['enableDigitGrouping']=function(_0x492ab3){const _0x5dcee0=_0x29d580;this[_0x5dcee0(0x919)]=_0x492ab3;},Window_Base[_0x29d580(0x356)][_0x29d580(0x163)]=function(_0x5eff2b){this['_digitGroupingEx']=_0x5eff2b;},VisuMZ['CoreEngine'][_0x29d580(0x7fb)]=Window_Base['prototype'][_0x29d580(0x581)],Window_Base['prototype'][_0x29d580(0x581)]=function(_0x4a745f,_0x2fb3ac,_0x59d1d4){const _0x34d7a6=_0x29d580;_0x2fb3ac=Math[_0x34d7a6(0x673)](_0x2fb3ac),_0x59d1d4=Math[_0x34d7a6(0x673)](_0x59d1d4),VisuMZ[_0x34d7a6(0x191)]['Window_Base_drawIcon'][_0x34d7a6(0x84c)](this,_0x4a745f,_0x2fb3ac,_0x59d1d4);},VisuMZ[_0x29d580(0x191)][_0x29d580(0x864)]=Window_Base['prototype'][_0x29d580(0x9f0)],Window_Base[_0x29d580(0x356)][_0x29d580(0x9f0)]=function(_0x48546a,_0x51a653,_0x3dad47,_0x1708d8,_0x1a5bb7,_0x2979c6){const _0x75b73=_0x29d580;_0x1a5bb7=_0x1a5bb7||ImageManager[_0x75b73(0x390)],_0x2979c6=_0x2979c6||ImageManager[_0x75b73(0x50c)],_0x3dad47=Math[_0x75b73(0x673)](_0x3dad47),_0x1708d8=Math[_0x75b73(0x673)](_0x1708d8),_0x1a5bb7=Math[_0x75b73(0x673)](_0x1a5bb7),_0x2979c6=Math[_0x75b73(0x673)](_0x2979c6),VisuMZ[_0x75b73(0x191)][_0x75b73(0x864)][_0x75b73(0x84c)](this,_0x48546a,_0x51a653,_0x3dad47,_0x1708d8,_0x1a5bb7,_0x2979c6);},VisuMZ[_0x29d580(0x191)][_0x29d580(0x4d0)]=Window_Base[_0x29d580(0x356)]['drawCharacter'],Window_Base[_0x29d580(0x356)][_0x29d580(0x8da)]=function(_0x5601fe,_0x29916b,_0x142c4a,_0x349992){const _0xb78021=_0x29d580;_0x142c4a=Math[_0xb78021(0x673)](_0x142c4a),_0x349992=Math[_0xb78021(0x673)](_0x349992),VisuMZ['CoreEngine'][_0xb78021(0x4d0)][_0xb78021(0x84c)](this,_0x5601fe,_0x29916b,_0x142c4a,_0x349992);},VisuMZ[_0x29d580(0x191)][_0x29d580(0x612)]=Window_Selectable['prototype'][_0x29d580(0x8d6)],Window_Selectable[_0x29d580(0x356)][_0x29d580(0x8d6)]=function(_0x99795a){const _0x3fe545=_0x29d580;let _0x3c5df2=VisuMZ['CoreEngine'][_0x3fe545(0x612)][_0x3fe545(0x84c)](this,_0x99795a);return _0x3c5df2['x']=Math[_0x3fe545(0x673)](_0x3c5df2['x']),_0x3c5df2['y']=Math[_0x3fe545(0x673)](_0x3c5df2['y']),_0x3c5df2['width']=Math['round'](_0x3c5df2[_0x3fe545(0x31b)]),_0x3c5df2[_0x3fe545(0x638)]=Math[_0x3fe545(0x673)](_0x3c5df2[_0x3fe545(0x638)]),_0x3c5df2;},VisuMZ[_0x29d580(0x191)][_0x29d580(0x994)]=Window_StatusBase[_0x29d580(0x356)][_0x29d580(0x204)],Window_StatusBase['prototype']['drawActorSimpleStatus']=function(_0xccd86,_0x1d272f,_0x5c5fdf){const _0x58be32=_0x29d580;_0x1d272f=Math[_0x58be32(0x673)](_0x1d272f),_0x5c5fdf=Math[_0x58be32(0x673)](_0x5c5fdf),VisuMZ[_0x58be32(0x191)][_0x58be32(0x994)][_0x58be32(0x84c)](this,_0xccd86,_0x1d272f,_0x5c5fdf);},Window_Base[_0x29d580(0x356)][_0x29d580(0x19b)]=function(){const _0x392423=_0x29d580;this[_0x392423(0x6ce)]={'duration':0x0,'wholeDuration':0x0,'type':_0x392423(0x1e7),'targetX':this['x'],'targetY':this['y'],'targetScaleX':this[_0x392423(0x198)]['x'],'targetScaleY':this[_0x392423(0x198)]['y'],'targetOpacity':this[_0x392423(0x76f)],'targetBackOpacity':this[_0x392423(0x4f4)],'targetContentsOpacity':this[_0x392423(0x9bc)]};},Window_Base['prototype'][_0x29d580(0x20f)]=function(){const _0x334fe0=_0x29d580;if(!this[_0x334fe0(0x6ce)])return;if(this[_0x334fe0(0x6ce)]['duration']<=0x0)return;this['x']=this[_0x334fe0(0x44c)](this['x'],this[_0x334fe0(0x6ce)]['targetX']),this['y']=this[_0x334fe0(0x44c)](this['y'],this[_0x334fe0(0x6ce)][_0x334fe0(0x1de)]),this[_0x334fe0(0x198)]['x']=this[_0x334fe0(0x44c)](this[_0x334fe0(0x198)]['x'],this[_0x334fe0(0x6ce)][_0x334fe0(0x479)]),this[_0x334fe0(0x198)]['y']=this['applyCoreEasing'](this[_0x334fe0(0x198)]['y'],this[_0x334fe0(0x6ce)][_0x334fe0(0x1e1)]),this[_0x334fe0(0x76f)]=this[_0x334fe0(0x44c)](this[_0x334fe0(0x76f)],this[_0x334fe0(0x6ce)]['targetOpacity']),this[_0x334fe0(0x4f4)]=this['applyCoreEasing'](this[_0x334fe0(0x4f4)],this[_0x334fe0(0x6ce)][_0x334fe0(0x809)]),this['contentsOpacity']=this[_0x334fe0(0x44c)](this[_0x334fe0(0x9bc)],this[_0x334fe0(0x6ce)]['targetContentsOpacity']),this[_0x334fe0(0x6ce)][_0x334fe0(0x9d0)]--;},Window_Base[_0x29d580(0x356)][_0x29d580(0x44c)]=function(_0x30d0c9,_0x465a3d){const _0x173631=_0x29d580;if(!this[_0x173631(0x6ce)])return _0x465a3d;const _0x583ac9=this[_0x173631(0x6ce)][_0x173631(0x9d0)],_0x53e40a=this[_0x173631(0x6ce)][_0x173631(0x653)],_0x459a5e=this[_0x173631(0x3cb)]((_0x53e40a-_0x583ac9)/_0x53e40a),_0x31020b=this[_0x173631(0x3cb)]((_0x53e40a-_0x583ac9+0x1)/_0x53e40a),_0x33969f=(_0x30d0c9-_0x465a3d*_0x459a5e)/(0x1-_0x459a5e);return _0x33969f+(_0x465a3d-_0x33969f)*_0x31020b;},Window_Base['prototype'][_0x29d580(0x3cb)]=function(_0x26094b){const _0x5d7f31=_0x29d580;if(!this['_coreEasing'])return _0x26094b;return VisuMZ['ApplyEasing'](_0x26094b,this[_0x5d7f31(0x6ce)][_0x5d7f31(0x2e5)]||'LINEAR');},Window_Base[_0x29d580(0x356)][_0x29d580(0x5fc)]=function(_0x43dfe5,_0x15c851){const _0xe3b78a=_0x29d580;if(!this[_0xe3b78a(0x6ce)])return;this['x']=this[_0xe3b78a(0x6ce)][_0xe3b78a(0x93e)],this['y']=this[_0xe3b78a(0x6ce)][_0xe3b78a(0x1de)],this[_0xe3b78a(0x198)]['x']=this['_coreEasing'][_0xe3b78a(0x479)],this[_0xe3b78a(0x198)]['y']=this[_0xe3b78a(0x6ce)][_0xe3b78a(0x1e1)],this['opacity']=this[_0xe3b78a(0x6ce)]['targetOpacity'],this['backOpacity']=this[_0xe3b78a(0x6ce)][_0xe3b78a(0x809)],this[_0xe3b78a(0x9bc)]=this[_0xe3b78a(0x6ce)][_0xe3b78a(0x1c3)],this[_0xe3b78a(0x66b)](_0x43dfe5,_0x15c851,this['x'],this['y'],this['scale']['x'],this[_0xe3b78a(0x198)]['y'],this['opacity'],this[_0xe3b78a(0x4f4)],this[_0xe3b78a(0x9bc)]);},Window_Base[_0x29d580(0x356)]['setupCoreEasing']=function(_0x66b32a,_0x1c233b,_0x36a9d7,_0x3607fd,_0x5663aa,_0x4eba30,_0x741be1,_0x5bd6f4,_0x2cab17){const _0x6c9de0=_0x29d580;this[_0x6c9de0(0x6ce)]={'duration':_0x66b32a,'wholeDuration':_0x66b32a,'type':_0x1c233b,'targetX':_0x36a9d7,'targetY':_0x3607fd,'targetScaleX':_0x5663aa,'targetScaleY':_0x4eba30,'targetOpacity':_0x741be1,'targetBackOpacity':_0x5bd6f4,'targetContentsOpacity':_0x2cab17};},Window_Base[_0x29d580(0x356)][_0x29d580(0x5e4)]=function(_0xd3dbef,_0x1a91f2,_0x1293d8,_0x4a16fa,_0x2d252e){const _0x52ec6b=_0x29d580;this[_0x52ec6b(0x451)](),this[_0x52ec6b(0x61a)][_0x52ec6b(0x946)]=VisuMZ[_0x52ec6b(0x191)][_0x52ec6b(0xa48)][_0x52ec6b(0x715)][_0x52ec6b(0x1c4)];const _0x35c9aa=VisuMZ[_0x52ec6b(0x191)]['Settings'][_0x52ec6b(0x715)][_0x52ec6b(0x98a)];if(_0x35c9aa>0x0&&_0x1a91f2===TextManager[_0x52ec6b(0x302)]){const _0x44acf6=_0x4a16fa+(this[_0x52ec6b(0x29f)]()-ImageManager[_0x52ec6b(0x604)])/0x2;this[_0x52ec6b(0x581)](_0x35c9aa,_0x1293d8+(_0x2d252e-ImageManager[_0x52ec6b(0x4cd)]),_0x44acf6),_0x2d252e-=ImageManager[_0x52ec6b(0x4cd)]+0x4;}else'Qkccm'!==_0x52ec6b(0x28a)?(this['changeTextColor'](ColorManager[_0x52ec6b(0x298)]()),this['drawText'](_0x1a91f2,_0x1293d8,_0x4a16fa,_0x2d252e,_0x52ec6b(0x74e)),_0x2d252e-=this[_0x52ec6b(0x689)](_0x1a91f2)+0x6):(this[_0x52ec6b(0x61a)][_0x52ec6b(0x946)]=this[_0x52ec6b(0x94e)](),this[_0x52ec6b(0x61a)][_0x52ec6b(0x6a6)](_0x44a824,_0x1f48e2,_0x1760b9,_0x57cf3c,this[_0x52ec6b(0x735)](),_0x52ec6b(0x1a5)));this[_0x52ec6b(0x22b)]();const _0x1d55df=this['textWidth'](this[_0x52ec6b(0x919)]?VisuMZ[_0x52ec6b(0x235)](_0xd3dbef):_0xd3dbef);_0x1d55df>_0x2d252e?_0x52ec6b(0x424)!==_0x52ec6b(0x424)?this[_0x52ec6b(0x6a6)](_0x14d1c7,_0x595afc,_0x40323f,_0x2645bb,_0x52ec6b(0x74e)):this[_0x52ec6b(0x6a6)](VisuMZ[_0x52ec6b(0x191)][_0x52ec6b(0xa48)]['Gold'][_0x52ec6b(0xa01)],_0x1293d8,_0x4a16fa,_0x2d252e,_0x52ec6b(0x74e)):this[_0x52ec6b(0x6a6)](_0xd3dbef,_0x1293d8,_0x4a16fa,_0x2d252e,_0x52ec6b(0x74e)),this[_0x52ec6b(0x451)]();},Window_Base[_0x29d580(0x356)][_0x29d580(0x72c)]=function(_0x4ca9b8,_0x3be86d,_0x2a4f8e,_0x72f34f,_0x2b658a){const _0x1e9181=_0x29d580,_0x5b373b=ImageManager[_0x1e9181(0x7a2)](_0x1e9181(0x666)),_0x2a2649=ImageManager['iconWidth'],_0x3e75a6=ImageManager[_0x1e9181(0x604)],_0x158056=_0x4ca9b8%0x10*_0x2a2649,_0xb35af2=Math[_0x1e9181(0x722)](_0x4ca9b8/0x10)*_0x3e75a6,_0x51837d=_0x72f34f,_0x59571a=_0x72f34f;this[_0x1e9181(0x61a)][_0x1e9181(0x6a2)]['imageSmoothingEnabled']=_0x2b658a,this[_0x1e9181(0x61a)][_0x1e9181(0x364)](_0x5b373b,_0x158056,_0xb35af2,_0x2a2649,_0x3e75a6,_0x3be86d,_0x2a4f8e,_0x51837d,_0x59571a),this[_0x1e9181(0x61a)][_0x1e9181(0x6a2)][_0x1e9181(0x207)]=!![];},Window_Base['prototype'][_0x29d580(0x5b3)]=function(_0x418f24,_0x7ff0cb,_0x2e482d,_0x5c42f5,_0x4ec22d,_0x28d61d){const _0x3f2830=_0x29d580,_0x37475c=Math[_0x3f2830(0x722)]((_0x2e482d-0x2)*_0x5c42f5),_0x1744dd=Sprite_Gauge[_0x3f2830(0x356)][_0x3f2830(0x648)][_0x3f2830(0x84c)](this),_0x32a1a3=_0x7ff0cb+this['lineHeight']()-_0x1744dd-0x2;this['contents'][_0x3f2830(0x773)](_0x418f24,_0x32a1a3,_0x2e482d,_0x1744dd,ColorManager[_0x3f2830(0x162)]()),this[_0x3f2830(0x61a)]['gradientFillRect'](_0x418f24+0x1,_0x32a1a3+0x1,_0x37475c,_0x1744dd-0x2,_0x4ec22d,_0x28d61d);},Window_Scrollable[_0x29d580(0x2ff)]={'enabled':VisuMZ[_0x29d580(0x191)]['Settings'][_0x29d580(0x80e)][_0x29d580(0x22c)]??!![],'thickness':VisuMZ[_0x29d580(0x191)]['Settings'][_0x29d580(0x80e)][_0x29d580(0x845)]??0x2,'offset':VisuMZ[_0x29d580(0x191)][_0x29d580(0xa48)]['Window']['BarOffset']??0x2,'bodyColor':VisuMZ[_0x29d580(0x191)][_0x29d580(0xa48)][_0x29d580(0x80e)][_0x29d580(0x823)]??0x0,'offColor':VisuMZ[_0x29d580(0x191)][_0x29d580(0xa48)][_0x29d580(0x80e)]['OffBarColor']??0x7,'offOpacity':VisuMZ[_0x29d580(0x191)][_0x29d580(0xa48)][_0x29d580(0x80e)][_0x29d580(0x6c7)]??0x80},Window_Base[_0x29d580(0x356)]['isScrollBarVisible']=function(){const _0x575e7f=_0x29d580;return Window_Scrollable[_0x575e7f(0x2ff)][_0x575e7f(0x782)]&&Window_Scrollable[_0x575e7f(0x2ff)][_0x575e7f(0x19f)]>0x0;},VisuMZ['CoreEngine'][_0x29d580(0x23c)]=Window_Base['prototype'][_0x29d580(0x923)],Window_Base[_0x29d580(0x356)][_0x29d580(0x923)]=function(){const _0x357663=_0x29d580;VisuMZ['CoreEngine'][_0x357663(0x23c)][_0x357663(0x84c)](this),this['createScrollBarSprites'](),this[_0x357663(0x682)](!![]),this[_0x357663(0x682)](![]);},Window_Base[_0x29d580(0x356)][_0x29d580(0x962)]=function(){const _0x51afdf=_0x29d580;if(!this['isScrollBarVisible']())return;if(this[_0x51afdf(0x590)]||this[_0x51afdf(0x4a4)])return;this[_0x51afdf(0x50d)]={'horz':null,'vert':null,'maxHorz':null,'maxVert':null},this[_0x51afdf(0x590)]=new Sprite(),this[_0x51afdf(0x4a4)]=new Sprite(),this[_0x51afdf(0x47a)](this[_0x51afdf(0x590)]),this[_0x51afdf(0x47a)](this['_scrollBarVert']);},Window_Base['prototype'][_0x29d580(0x682)]=function(_0x22f8e8){const _0x285981=_0x29d580,_0x4511ab=_0x22f8e8?this[_0x285981(0x590)]:this[_0x285981(0x4a4)];if(!_0x4511ab)return;const _0x3c537c=Window_Scrollable['SCROLLBAR'],_0x445fec=_0x3c537c[_0x285981(0x19f)],_0x4ec124=_0x22f8e8?this[_0x285981(0xa46)]-_0x445fec*0x2:_0x445fec,_0x414871=_0x22f8e8?_0x445fec:this[_0x285981(0x503)]-_0x445fec*0x2;_0x4511ab['bitmap']=new Bitmap(_0x4ec124,_0x414871),_0x4511ab[_0x285981(0x4b6)](0x0,0x0,_0x4ec124,_0x414871),this[_0x285981(0x7b9)](_0x22f8e8);},VisuMZ[_0x29d580(0x191)]['Window_Base_destroyContents']=Window_Base['prototype'][_0x29d580(0xa5b)],Window_Base['prototype'][_0x29d580(0xa5b)]=function(){const _0x48e8d9=_0x29d580;VisuMZ[_0x48e8d9(0x191)][_0x48e8d9(0x561)]['call'](this),this[_0x48e8d9(0x4d9)]();},Window_Base[_0x29d580(0x356)][_0x29d580(0x4d9)]=function(){const _0x1e6870=_0x29d580,_0x2474cd=[this['_scrollBarHorz'],this['_scrollBarVert']];for(const _0x2d7240 of _0x2474cd){if(_0x2d7240&&_0x2d7240[_0x1e6870(0x240)])_0x2d7240[_0x1e6870(0x240)][_0x1e6870(0x429)]();}},VisuMZ[_0x29d580(0x191)][_0x29d580(0x36b)]=Window_Scrollable[_0x29d580(0x356)]['update'],Window_Scrollable['prototype'][_0x29d580(0x24e)]=function(){const _0x31e491=_0x29d580;VisuMZ[_0x31e491(0x191)][_0x31e491(0x36b)]['call'](this),this[_0x31e491(0x366)]();},Window_Scrollable[_0x29d580(0x356)][_0x29d580(0x366)]=function(){const _0x13885f=_0x29d580;this[_0x13885f(0x609)](),this[_0x13885f(0x669)](!![]),this[_0x13885f(0x669)](![]),this['updateScrollBarPosition'](!![]),this[_0x13885f(0x7b9)](![]);},Window_Scrollable[_0x29d580(0x356)][_0x29d580(0x609)]=function(){const _0x16b734=_0x29d580,_0x48fb6c=[this[_0x16b734(0x590)],this[_0x16b734(0x4a4)]];for(const _0x39dc91 of _0x48fb6c){if(_0x39dc91){if(_0x16b734(0x2a3)!=='PgCuE')var _0x577ed8=_0x2b3ed6[_0x16b734(0x981)](_0x2bbec7*0x2,'inbounce')*0.5;else _0x39dc91[_0x16b734(0x276)]=this[_0x16b734(0x270)]()&&this[_0x16b734(0x5ba)]();}}},Window_Scrollable['prototype'][_0x29d580(0x669)]=function(_0x3960fa){const _0xad2291=_0x29d580;if(!this[_0xad2291(0x50d)])return;const _0x19555=this[_0xad2291(0x35d)](_0x3960fa),_0x3b64e1=this[_0xad2291(0x2f2)](_0x3960fa),_0x449093=_0x3960fa?'horz':'vert',_0x17c18a=_0x3960fa?'maxHorz':_0xad2291(0x589);(this[_0xad2291(0x50d)][_0x449093]!==_0x19555||this[_0xad2291(0x50d)][_0x17c18a]!==_0x3b64e1)&&(this[_0xad2291(0x50d)][_0x449093]=_0x19555,this['_lastScrollBarValues'][_0x17c18a]=_0x3b64e1,this[_0xad2291(0xa31)](_0x3960fa,_0x19555,_0x3b64e1));},Window_Scrollable[_0x29d580(0x356)][_0x29d580(0x35d)]=function(_0xfabafd){const _0xcff4bf=_0x29d580;if(this[_0xcff4bf(0x402)]!==undefined){if(_0xcff4bf(0x3d5)===_0xcff4bf(0x3d5))return _0xfabafd?this[_0xcff4bf(0x6d9)]():this[_0xcff4bf(0xa20)]['y'];else this[_0xcff4bf(0x267)](_0x452605),this[_0xcff4bf(0x8c5)](_0x49403f);}return _0xfabafd?this['scrollX']():this[_0xcff4bf(0x41a)]();},Window_Scrollable[_0x29d580(0x356)]['maxScrollbar']=function(_0x56c7f2){const _0x56c868=_0x29d580;if(this['_allTextHeight']!==undefined)return _0x56c7f2?this[_0x56c868(0x6e2)]():Math[_0x56c868(0x55d)](0x0,this['_allTextHeight']-this[_0x56c868(0x503)]);return _0x56c7f2?this[_0x56c868(0x6e2)]():this[_0x56c868(0x597)]();},Window_Scrollable[_0x29d580(0x356)][_0x29d580(0x719)]=function(){const _0x41126c=_0x29d580;if(this[_0x41126c(0x402)]!==undefined)return Math[_0x41126c(0x55d)](0x0,this[_0x41126c(0x402)]);return this[_0x41126c(0x431)]();},Window_Scrollable[_0x29d580(0x356)][_0x29d580(0xa31)]=function(_0x393e09,_0x1118bf,_0x574fe9){const _0x4e8cc9=_0x29d580,_0x353857=_0x393e09?this[_0x4e8cc9(0x590)]:this['_scrollBarVert'];if(!_0x353857)return;if(!_0x353857[_0x4e8cc9(0x240)])return;const _0x2dd563=_0x353857[_0x4e8cc9(0x240)];_0x2dd563['clear']();if(_0x574fe9<=0x0)return;const _0x242c53=_0x393e09?this[_0x4e8cc9(0xa46)]/this['overallWidth']():this[_0x4e8cc9(0x503)]/this[_0x4e8cc9(0x719)](),_0x1e88c5=_0x393e09?Math['round'](_0x1118bf*_0x242c53):0x0,_0x4e3ced=_0x393e09?0x0:Math[_0x4e8cc9(0x673)](_0x1118bf*_0x242c53),_0x2ec73e=_0x393e09?Math[_0x4e8cc9(0x673)](_0x2dd563[_0x4e8cc9(0x31b)]*_0x242c53):_0x2dd563[_0x4e8cc9(0x31b)],_0x5e0886=_0x393e09?_0x2dd563[_0x4e8cc9(0x638)]:Math[_0x4e8cc9(0x673)](_0x2dd563[_0x4e8cc9(0x638)]*_0x242c53),_0x2a0370=Window_Scrollable[_0x4e8cc9(0x2ff)],_0x34cf08=ColorManager[_0x4e8cc9(0x4c2)](_0x2a0370[_0x4e8cc9(0x863)]),_0x4e30f5=ColorManager['getColor'](_0x2a0370['bodyColor']),_0x2a1a1a=_0x2a0370[_0x4e8cc9(0x551)];_0x2dd563[_0x4e8cc9(0x916)]=_0x2a1a1a,_0x2dd563[_0x4e8cc9(0x3d1)](_0x34cf08),_0x2dd563[_0x4e8cc9(0x916)]=0xff,_0x2dd563['fillRect'](_0x1e88c5,_0x4e3ced,_0x2ec73e,_0x5e0886,_0x4e30f5);},Window_Base[_0x29d580(0x356)][_0x29d580(0x7b9)]=function(_0x5e649f){const _0xc5989=_0x29d580,_0x2971bb=_0x5e649f?this[_0xc5989(0x590)]:this[_0xc5989(0x4a4)];if(!_0x2971bb)return;const _0x58398a=Window_Scrollable[_0xc5989(0x2ff)],_0x34b60a=_0x58398a[_0xc5989(0x19f)],_0x2bf339=_0x58398a[_0xc5989(0x8b9)];if(!_0x2971bb['transform'])return;_0x2971bb['x']=this[_0xc5989(0x46a)]+(_0x5e649f?_0x34b60a:this[_0xc5989(0xa46)]+_0x2bf339),_0x2971bb['y']=this[_0xc5989(0x46a)]+(_0x5e649f?this[_0xc5989(0x503)]+_0x2bf339:_0x34b60a);},Window_Selectable[_0x29d580(0x356)]['cursorDown']=function(_0x4b2fef){const _0x5c6d93=_0x29d580;let _0x8b09cd=this[_0x5c6d93(0x46f)]();const _0xd3130b=this[_0x5c6d93(0x6d6)](),_0x141bcd=this[_0x5c6d93(0x770)]();if(this[_0x5c6d93(0x223)]()&&(_0x8b09cd<_0xd3130b||_0x4b2fef&&_0x141bcd===0x1)){_0x8b09cd+=_0x141bcd;if(_0x8b09cd>=_0xd3130b)_0x8b09cd=_0xd3130b-0x1;this[_0x5c6d93(0x868)](_0x8b09cd);}else!this['isUseModernControls']()&&((_0x8b09cd<_0xd3130b-_0x141bcd||_0x4b2fef&&_0x141bcd===0x1)&&this[_0x5c6d93(0x868)]((_0x8b09cd+_0x141bcd)%_0xd3130b));},VisuMZ[_0x29d580(0x191)][_0x29d580(0x2a0)]=Window_Selectable[_0x29d580(0x356)]['cursorDown'],Window_Selectable['prototype'][_0x29d580(0x367)]=function(_0x11dea3){const _0x2d44b0=_0x29d580;this['isUseModernControls']()&&_0x11dea3&&this['maxCols']()===0x1&&this[_0x2d44b0(0x46f)]()===this[_0x2d44b0(0x6d6)]()-0x1?this[_0x2d44b0(0x868)](0x0):VisuMZ[_0x2d44b0(0x191)][_0x2d44b0(0x2a0)][_0x2d44b0(0x84c)](this,_0x11dea3);},Window_Selectable[_0x29d580(0x356)][_0x29d580(0x992)]=function(_0x5a4fee){const _0x4c95e7=_0x29d580;let _0x3eea7c=Math['max'](0x0,this['index']());const _0x4be41e=this['maxItems'](),_0x188fc5=this['maxCols']();if(this['isUseModernControls']()&&_0x3eea7c>0x0||_0x5a4fee&&_0x188fc5===0x1){_0x3eea7c-=_0x188fc5;if(_0x3eea7c<=0x0)_0x3eea7c=0x0;this[_0x4c95e7(0x868)](_0x3eea7c);}else{if(!this[_0x4c95e7(0x223)]()){if('pzxQl'!==_0x4c95e7(0x28b))(_0x3eea7c>=_0x188fc5||_0x5a4fee&&_0x188fc5===0x1)&&this[_0x4c95e7(0x868)]((_0x3eea7c-_0x188fc5+_0x4be41e)%_0x4be41e);else{if(!this[_0x4c95e7(0x6ce)])return _0x127346;return _0x576488['ApplyEasing'](_0x1f8501,this[_0x4c95e7(0x6ce)]['type']||_0x4c95e7(0x1e7));}}}},VisuMZ['CoreEngine'][_0x29d580(0x763)]=Window_Selectable[_0x29d580(0x356)][_0x29d580(0x992)],Window_Selectable[_0x29d580(0x356)]['cursorUp']=function(_0x1d032c){const _0x1ee8eb=_0x29d580;this[_0x1ee8eb(0x223)]()&&_0x1d032c&&this[_0x1ee8eb(0x770)]()===0x1&&this['index']()===0x0?this[_0x1ee8eb(0x868)](this[_0x1ee8eb(0x6d6)]()-0x1):_0x1ee8eb(0x6d3)!==_0x1ee8eb(0x6d3)?this[_0x1ee8eb(0x201)](0x4b0,0x0,0x78):VisuMZ[_0x1ee8eb(0x191)]['Window_Selectable_cursorUp'][_0x1ee8eb(0x84c)](this,_0x1d032c);},Window_Selectable[_0x29d580(0x356)][_0x29d580(0x223)]=function(){const _0x27ed68=_0x29d580;return VisuMZ[_0x27ed68(0x191)][_0x27ed68(0xa48)][_0x27ed68(0x53e)][_0x27ed68(0x90c)];},VisuMZ['CoreEngine'][_0x29d580(0x9c3)]=Window_Selectable[_0x29d580(0x356)][_0x29d580(0x801)],Window_Selectable['prototype'][_0x29d580(0x801)]=function(){const _0x5b6a60=_0x29d580;this[_0x5b6a60(0x223)]()?_0x5b6a60(0x844)==='ZRuPt'?(this[_0x5b6a60(0x741)](),this[_0x5b6a60(0x1c2)]()):this[_0x5b6a60(0x9ff)]&&this[_0x5b6a60(0x9ff)]():VisuMZ[_0x5b6a60(0x191)]['Window_Selectable_processCursorMove'][_0x5b6a60(0x84c)](this);},Window_Selectable['prototype'][_0x29d580(0x2c2)]=function(){return!![];},Window_Selectable['prototype'][_0x29d580(0x741)]=function(){const _0x20cfe0=_0x29d580;if(this['isCursorMovable']()){if(_0x20cfe0(0x35c)===_0x20cfe0(0x679))return _0x5e3081[_0x20cfe0(0x764)][_0x20cfe0(0x1d7)][_0x20cfe0(0x84c)](this);else{const _0x2d2ae2=this['index']();if(Input[_0x20cfe0(0x454)](_0x20cfe0(0x819))){if('DSSVo'!==_0x20cfe0(0x281))Input[_0x20cfe0(0x977)](_0x20cfe0(0x621))&&this[_0x20cfe0(0x2c2)]()?this[_0x20cfe0(0x9b3)]():this['cursorDown'](Input[_0x20cfe0(0x7d9)](_0x20cfe0(0x819)));else{if(_0xafd0b8['CoreEngine'][_0x20cfe0(0xa48)][_0x20cfe0(0x3ce)][_0x20cfe0(0x44f)]===![])return;if(this[_0x20cfe0(0x7eb)]())this['drawActorExpGauge'](_0xca8a33,_0x27eb68,_0xdae839);_0x1f9416[_0x20cfe0(0x191)][_0x20cfe0(0x282)]['call'](this,_0x28293d,_0x408b46,_0x311e45);}}Input[_0x20cfe0(0x454)]('up')&&('JYEsX'===_0x20cfe0(0x43d)?this['_skillTypeWindow'][_0x20cfe0(0x196)](_0x107b72[_0x20cfe0(0x764)][_0x20cfe0(0x997)]):Input['isPressed'](_0x20cfe0(0x621))&&this[_0x20cfe0(0x2c2)]()?this[_0x20cfe0(0x4a2)]():this[_0x20cfe0(0x992)](Input[_0x20cfe0(0x7d9)]('up')));Input[_0x20cfe0(0x454)](_0x20cfe0(0x74e))&&(_0x20cfe0(0x6cb)!==_0x20cfe0(0x6cb)?this['_statusWindow'][_0x20cfe0(0x196)](_0x500f3c[_0x20cfe0(0x764)][_0x20cfe0(0xa36)]):this[_0x20cfe0(0x357)](Input[_0x20cfe0(0x7d9)](_0x20cfe0(0x74e))));Input[_0x20cfe0(0x454)](_0x20cfe0(0x1a5))&&this[_0x20cfe0(0xa30)](Input['isTriggered']('left'));!this[_0x20cfe0(0x848)](_0x20cfe0(0x36f))&&Input[_0x20cfe0(0x454)](_0x20cfe0(0x36f))&&this[_0x20cfe0(0x9b3)]();!this['isHandled'](_0x20cfe0(0x21c))&&Input[_0x20cfe0(0x454)](_0x20cfe0(0x21c))&&this['cursorPageup']();if(this[_0x20cfe0(0x46f)]()!==_0x2d2ae2){if('UwVSC'!=='HDhYU')this[_0x20cfe0(0x423)]();else{this[_0x20cfe0(0x988)]();const _0x3ddfe4=_0x10ad23[_0x20cfe0(0x8e6)]['background'],_0x35c86d=this[_0x20cfe0(0xa41)]();this[_0x20cfe0(0x8fb)]=new _0x15eff4(_0x35c86d),this[_0x20cfe0(0x8fb)][_0x20cfe0(0x196)](_0x3ddfe4);const _0xe46e3f=this[_0x20cfe0(0xa41)]();this[_0x20cfe0(0x8fb)]['move'](_0xe46e3f['x'],_0xe46e3f['y'],_0xe46e3f[_0x20cfe0(0x31b)],_0xe46e3f[_0x20cfe0(0x638)]),this['_commandWindow'][_0x20cfe0(0x923)](),this['_commandWindow'][_0x20cfe0(0x4bc)](),this[_0x20cfe0(0x8fb)][_0x20cfe0(0x1dd)](),this[_0x20cfe0(0x36c)](this[_0x20cfe0(0x8fb)]);}}}}},Window_Selectable[_0x29d580(0x356)][_0x29d580(0x1c2)]=function(){const _0x32d5a6=_0x29d580;if(this['isCursorMovable']()){const _0x4d0092=this['index']();Input[_0x32d5a6(0x7d9)]('home')&&this[_0x32d5a6(0x868)](Math[_0x32d5a6(0x6c6)](this[_0x32d5a6(0x46f)](),0x0));if(Input['isTriggered'](_0x32d5a6(0x82c))){if(_0x32d5a6(0x500)!==_0x32d5a6(0x500))return 0x0;else this[_0x32d5a6(0x868)](Math['max'](this[_0x32d5a6(0x46f)](),this[_0x32d5a6(0x6d6)]()-0x1));}this[_0x32d5a6(0x46f)]()!==_0x4d0092&&(_0x32d5a6(0x4b5)!=='ocRqA'?this[_0x32d5a6(0x423)]():(_0x477937['CoreEngine'][_0x32d5a6(0x3a3)][_0x32d5a6(0x84c)](this),_0x3d70b8=this[_0x32d5a6(0x4c0)]));}},VisuMZ['CoreEngine'][_0x29d580(0x99c)]=Window_Selectable[_0x29d580(0x356)]['processTouch'],Window_Selectable[_0x29d580(0x356)][_0x29d580(0xa2b)]=function(){const _0x31ae71=_0x29d580;this['isUseModernControls']()?this[_0x31ae71(0x271)]():_0x31ae71(0x973)!==_0x31ae71(0x6dc)?VisuMZ['CoreEngine']['Window_Selectable_processTouch'][_0x31ae71(0x84c)](this):this['contents'][_0x31ae71(0x946)]-=0x6;},Window_Selectable[_0x29d580(0x356)][_0x29d580(0x271)]=function(){const _0x49fa28=_0x29d580;VisuMZ[_0x49fa28(0x191)]['Window_Selectable_processTouch'][_0x49fa28(0x84c)](this);},Window_Selectable['prototype'][_0x29d580(0x1df)]=function(){const _0x30d183=_0x29d580;return VisuMZ[_0x30d183(0x191)][_0x30d183(0xa48)][_0x30d183(0x80e)][_0x30d183(0x79b)];},Window_Selectable[_0x29d580(0x356)]['rowSpacing']=function(){const _0x2ada28=_0x29d580;return VisuMZ[_0x2ada28(0x191)]['Settings']['Window'][_0x2ada28(0x571)];},Window_Selectable['prototype'][_0x29d580(0x307)]=function(){const _0x123d0d=_0x29d580;return Window_Scrollable['prototype'][_0x123d0d(0x307)][_0x123d0d(0x84c)](this)+VisuMZ[_0x123d0d(0x191)][_0x123d0d(0xa48)][_0x123d0d(0x80e)][_0x123d0d(0x432)];;},VisuMZ[_0x29d580(0x191)][_0x29d580(0x88c)]=Window_Selectable[_0x29d580(0x356)][_0x29d580(0x94c)],Window_Selectable['prototype'][_0x29d580(0x94c)]=function(_0x5c33da){const _0x2d1b3b=_0x29d580,_0x596fdb=VisuMZ[_0x2d1b3b(0x191)][_0x2d1b3b(0xa48)][_0x2d1b3b(0x80e)];if(_0x596fdb[_0x2d1b3b(0x4e9)]===![])return;_0x596fdb[_0x2d1b3b(0x71c)]?_0x596fdb['DrawItemBackgroundJS'][_0x2d1b3b(0x84c)](this,_0x5c33da):VisuMZ[_0x2d1b3b(0x191)][_0x2d1b3b(0x88c)]['call'](this,_0x5c33da);},VisuMZ[_0x29d580(0x191)][_0x29d580(0x1cc)]=Window_Gold[_0x29d580(0x356)][_0x29d580(0x4bc)],Window_Gold[_0x29d580(0x356)][_0x29d580(0x4bc)]=function(){const _0x23aa00=_0x29d580;this[_0x23aa00(0x188)]()?this[_0x23aa00(0x2a7)]():VisuMZ[_0x23aa00(0x191)]['Window_Gold_refresh']['call'](this);},Window_Gold[_0x29d580(0x356)]['isItemStyle']=function(){const _0x4939eb=_0x29d580;if(TextManager[_0x4939eb(0x302)]!==this[_0x4939eb(0x302)]())return![];return VisuMZ[_0x4939eb(0x191)][_0x4939eb(0xa48)][_0x4939eb(0x715)][_0x4939eb(0x56a)];},Window_Gold[_0x29d580(0x356)][_0x29d580(0x2a7)]=function(){const _0x100ab3=_0x29d580;this['resetFontSettings'](),this[_0x100ab3(0x61a)]['clear'](),this[_0x100ab3(0x61a)][_0x100ab3(0x946)]=VisuMZ[_0x100ab3(0x191)][_0x100ab3(0xa48)][_0x100ab3(0x715)][_0x100ab3(0x1c4)];const _0x5fb466=VisuMZ[_0x100ab3(0x191)][_0x100ab3(0xa48)][_0x100ab3(0x715)]['GoldIcon'],_0x22c51f=this['itemLineRect'](0x0);if(_0x5fb466>0x0){const _0x197a2f=_0x22c51f['y']+(this[_0x100ab3(0x29f)]()-ImageManager[_0x100ab3(0x604)])/0x2;this[_0x100ab3(0x581)](_0x5fb466,_0x22c51f['x'],_0x197a2f);const _0x35c167=ImageManager['iconWidth']+0x4;_0x22c51f['x']+=_0x35c167,_0x22c51f[_0x100ab3(0x31b)]-=_0x35c167;}this[_0x100ab3(0x651)](ColorManager[_0x100ab3(0x298)]()),this[_0x100ab3(0x6a6)](this[_0x100ab3(0x302)](),_0x22c51f['x'],_0x22c51f['y'],_0x22c51f['width'],'left');const _0x2e6a40=this[_0x100ab3(0x689)](this[_0x100ab3(0x302)]())+0x6;;_0x22c51f['x']+=_0x2e6a40,_0x22c51f[_0x100ab3(0x31b)]-=_0x2e6a40,this[_0x100ab3(0x22b)]();const _0xfcb678=this[_0x100ab3(0x230)](),_0x5b9453=this[_0x100ab3(0x689)](this[_0x100ab3(0x919)]?VisuMZ[_0x100ab3(0x235)](this[_0x100ab3(0x230)]()):this['value']());_0x5b9453>_0x22c51f[_0x100ab3(0x31b)]?this[_0x100ab3(0x6a6)](VisuMZ[_0x100ab3(0x191)]['Settings'][_0x100ab3(0x715)][_0x100ab3(0xa01)],_0x22c51f['x'],_0x22c51f['y'],_0x22c51f[_0x100ab3(0x31b)],'right'):this[_0x100ab3(0x6a6)](this[_0x100ab3(0x230)](),_0x22c51f['x'],_0x22c51f['y'],_0x22c51f[_0x100ab3(0x31b)],_0x100ab3(0x74e)),this[_0x100ab3(0x451)]();},Window_StatusBase['prototype'][_0x29d580(0x8e4)]=function(_0x47a6fd,_0x552a84,_0x2254f0,_0x3728df,_0x1bdd24){const _0x4647d9=_0x29d580;_0x3728df=String(_0x3728df||'')[_0x4647d9(0x8bb)]();if(VisuMZ[_0x4647d9(0x191)][_0x4647d9(0xa48)][_0x4647d9(0x3ce)][_0x4647d9(0x67f)]){if(_0x4647d9(0x867)!==_0x4647d9(0x7fc)){const _0x41d938=VisuMZ[_0x4647d9(0x541)](_0x3728df);if(_0x1bdd24){if('SgQVs'!==_0x4647d9(0x25d))this['drawIconBySize'](_0x41d938,_0x47a6fd,_0x552a84,this['gaugeLineHeight']()),_0x2254f0-=this[_0x4647d9(0x735)]()+0x2,_0x47a6fd+=this['gaugeLineHeight']()+0x2;else return this[_0x4647d9(0x20c)][_0x4647d9(0x980)]('/')[_0x4647d9(0xa55)]();}else this[_0x4647d9(0x581)](_0x41d938,_0x47a6fd+0x2,_0x552a84+0x2),_0x2254f0-=ImageManager[_0x4647d9(0x4cd)]+0x4,_0x47a6fd+=ImageManager['iconWidth']+0x4;}else this[_0x4647d9(0x62a)][_0x4647d9(0x196)](_0x1392d5[_0x4647d9(0x764)][_0x4647d9(0x90e)]);}const _0x151c9b=TextManager[_0x4647d9(0x2a8)](_0x3728df);this[_0x4647d9(0x451)](),this[_0x4647d9(0x651)](ColorManager[_0x4647d9(0x298)]());if(_0x1bdd24){if('IEcjQ'===_0x4647d9(0x362))this['contents'][_0x4647d9(0x946)]=this[_0x4647d9(0x94e)](),this['contents']['drawText'](_0x151c9b,_0x47a6fd,_0x552a84,_0x2254f0,this[_0x4647d9(0x735)](),_0x4647d9(0x1a5));else return _0x3fbaf4[_0x4647d9(0x75c)](_0x4647d9(0x326));}else this[_0x4647d9(0x6a6)](_0x151c9b,_0x47a6fd,_0x552a84,_0x2254f0);this['resetFontSettings']();},Window_StatusBase[_0x29d580(0x356)][_0x29d580(0x94e)]=function(){const _0x34121f=_0x29d580;return $gameSystem[_0x34121f(0x7e7)]()-0x8;},Window_StatusBase[_0x29d580(0x356)][_0x29d580(0x6e3)]=function(_0x5532e3,_0xf12080,_0x5cf93b,_0x2dce1b){const _0x1ec6aa=_0x29d580;_0x2dce1b=_0x2dce1b||0xa8,this[_0x1ec6aa(0x22b)]();if(VisuMZ[_0x1ec6aa(0x191)]['Settings']['UI']['TextCodeClassNames'])this[_0x1ec6aa(0x9cb)](_0x5532e3[_0x1ec6aa(0x645)]()[_0x1ec6aa(0xa21)],_0xf12080,_0x5cf93b,_0x2dce1b);else{const _0x119f3f=_0x5532e3[_0x1ec6aa(0x645)]()[_0x1ec6aa(0xa21)][_0x1ec6aa(0x1ee)](/\\I\[(\d+)\]/gi,'');this[_0x1ec6aa(0x6a6)](_0x119f3f,_0xf12080,_0x5cf93b,_0x2dce1b);}},Window_StatusBase[_0x29d580(0x356)][_0x29d580(0x5ee)]=function(_0x521875,_0x31936f,_0x24b1c7,_0x26f978){const _0x5ee7b5=_0x29d580;_0x26f978=_0x26f978||0x10e,this['resetTextColor']();if(VisuMZ[_0x5ee7b5(0x191)][_0x5ee7b5(0xa48)]['UI']['TextCodeNicknames'])this['drawTextEx'](_0x521875[_0x5ee7b5(0x759)](),_0x31936f,_0x24b1c7,_0x26f978);else{const _0x3ced82=_0x521875[_0x5ee7b5(0x759)]()['replace'](/\\I\[(\d+)\]/gi,'');this[_0x5ee7b5(0x6a6)](_0x521875[_0x5ee7b5(0x759)](),_0x31936f,_0x24b1c7,_0x26f978);}},VisuMZ[_0x29d580(0x191)][_0x29d580(0x282)]=Window_StatusBase[_0x29d580(0x356)][_0x29d580(0x664)],Window_StatusBase[_0x29d580(0x356)][_0x29d580(0x664)]=function(_0x113b36,_0x3bac5e,_0x28c8e1){const _0x143c93=_0x29d580;if(VisuMZ[_0x143c93(0x191)][_0x143c93(0xa48)][_0x143c93(0x3ce)][_0x143c93(0x44f)]===![])return;if(this['isExpGaugeDrawn']())this[_0x143c93(0x90f)](_0x113b36,_0x3bac5e,_0x28c8e1);VisuMZ[_0x143c93(0x191)]['Window_StatusBase_drawActorLevel'][_0x143c93(0x84c)](this,_0x113b36,_0x3bac5e,_0x28c8e1);},Window_StatusBase[_0x29d580(0x356)][_0x29d580(0x7eb)]=function(){const _0x3fdca8=_0x29d580;return VisuMZ['CoreEngine'][_0x3fdca8(0xa48)]['UI'][_0x3fdca8(0xa51)];},Window_StatusBase[_0x29d580(0x356)]['drawActorExpGauge']=function(_0x25ba77,_0x3d4c5d,_0x2d6c97){const _0x51c077=_0x29d580;if(!_0x25ba77)return;if(!_0x25ba77[_0x51c077(0x54e)]())return;const _0x36c7a8=0x80,_0x1d14ee=_0x25ba77[_0x51c077(0xa52)]();let _0x4e09cb=ColorManager['expGaugeColor1'](),_0x2df7e5=ColorManager[_0x51c077(0xa12)]();if(_0x1d14ee>=0x1){if(_0x51c077(0x418)!=='IBVrH'){for(let _0x2943bf=0x0;_0x2943bf<this['numActions']();_0x2943bf++){const _0x16099c=this[_0x51c077(0x272)]();let _0x254c9a=_0x1306cc[_0x51c077(0x731)];this['setAction'](_0x2943bf,_0x16099c[0x0]);for(const _0x39cf3c of _0x16099c){const _0x411494=_0x39cf3c[_0x51c077(0xa08)]();_0x411494>_0x254c9a&&(_0x254c9a=_0x411494,this['setAction'](_0x2943bf,_0x39cf3c));}}this[_0x51c077(0x34f)](_0x51c077(0x6b1));}else _0x4e09cb=ColorManager[_0x51c077(0x8c9)](),_0x2df7e5=ColorManager[_0x51c077(0x6b7)]();}this[_0x51c077(0x5b3)](_0x3d4c5d,_0x2d6c97,_0x36c7a8,_0x1d14ee,_0x4e09cb,_0x2df7e5);},Window_EquipStatus[_0x29d580(0x356)][_0x29d580(0x92a)]=function(){const _0x5de060=_0x29d580;let _0x282efd=0x0;for(const _0x524eb3 of VisuMZ[_0x5de060(0x191)][_0x5de060(0xa48)][_0x5de060(0x3ce)][_0x5de060(0x90d)]){const _0x3a6c40=this[_0x5de060(0x601)](),_0x168137=this[_0x5de060(0x67c)](_0x282efd);this[_0x5de060(0x5ff)](_0x3a6c40,_0x168137,_0x524eb3),_0x282efd++;}},Window_EquipStatus[_0x29d580(0x356)]['drawParamName']=function(_0x8773a1,_0x24eaa1,_0x2d16b0){const _0x9144f=_0x29d580,_0x3cb20a=this['paramX']()-this[_0x9144f(0x601)]()*0x2;this['drawParamText'](_0x8773a1,_0x24eaa1,_0x3cb20a,_0x2d16b0,![]);},Window_EquipStatus[_0x29d580(0x356)]['drawCurrentParam']=function(_0x5895cb,_0x39a9e5,_0x37ba3c){const _0x45890c=_0x29d580,_0x46150a=this['paramWidth']();this[_0x45890c(0x22b)](),this['drawText'](this[_0x45890c(0x8eb)][_0x45890c(0x584)](_0x37ba3c,!![]),_0x5895cb,_0x39a9e5,_0x46150a,_0x45890c(0x74e));},Window_EquipStatus[_0x29d580(0x356)][_0x29d580(0x692)]=function(_0x51d4b5,_0x2598c9){const _0x177bcf=_0x29d580,_0x4b6996=this[_0x177bcf(0x1f6)]();this['changeTextColor'](ColorManager['systemColor']());const _0xe4c971=VisuMZ[_0x177bcf(0x191)][_0x177bcf(0xa48)]['UI'][_0x177bcf(0x88a)];this[_0x177bcf(0x6a6)](_0xe4c971,_0x51d4b5,_0x2598c9,_0x4b6996,_0x177bcf(0x665));},Window_EquipStatus[_0x29d580(0x356)][_0x29d580(0x7d7)]=function(_0x291688,_0x4aadb3,_0x3554dd){const _0x1d586a=_0x29d580,_0x4df304=this[_0x1d586a(0x218)](),_0x1de51d=this[_0x1d586a(0x9ad)][_0x1d586a(0x584)](_0x3554dd),_0x5c1940=_0x1de51d-this[_0x1d586a(0x8eb)][_0x1d586a(0x584)](_0x3554dd);this[_0x1d586a(0x651)](ColorManager[_0x1d586a(0x793)](_0x5c1940)),this[_0x1d586a(0x6a6)](this[_0x1d586a(0x9ad)][_0x1d586a(0x584)](_0x3554dd,!![]),_0x291688,_0x4aadb3,_0x4df304,'right');},VisuMZ['CoreEngine']['Window_EquipItem_isEnabled']=Window_EquipItem['prototype'][_0x29d580(0x6f9)],Window_EquipItem[_0x29d580(0x356)][_0x29d580(0x6f9)]=function(_0xb514e8){const _0x4645d7=_0x29d580;if(_0xb514e8&&this[_0x4645d7(0x8eb)]){if(_0x4645d7(0x5b1)===_0x4645d7(0x40f))for(const _0x1b698a of _0x54e886['_commandList']){if(_0x1b698a['ShowJS'][_0x4645d7(0x84c)](this)){const _0x44e2cf=_0x1b698a[_0x4645d7(0x54b)];let _0x404e0e=_0x1b698a[_0x4645d7(0x2d7)];if(['',_0x4645d7(0x458)][_0x4645d7(0x480)](_0x404e0e))_0x404e0e=_0x1b698a['TextJS'][_0x4645d7(0x84c)](this);const _0x185ef8=_0x1b698a[_0x4645d7(0x59b)][_0x4645d7(0x84c)](this),_0x5d2523=_0x1b698a[_0x4645d7(0x354)][_0x4645d7(0x84c)](this);this[_0x4645d7(0x2ee)](_0x404e0e,_0x44e2cf,_0x185ef8,_0x5d2523),this[_0x4645d7(0x855)](_0x44e2cf,_0x1b698a['CallHandlerJS']['bind'](this,_0x5d2523));}}else return this[_0x4645d7(0x8eb)][_0x4645d7(0x9a6)](_0xb514e8);}else return VisuMZ[_0x4645d7(0x191)][_0x4645d7(0x2e2)][_0x4645d7(0x84c)](this,_0xb514e8);},Window_StatusParams[_0x29d580(0x356)][_0x29d580(0x6d6)]=function(){const _0x878a39=_0x29d580;return VisuMZ['CoreEngine']['Settings'][_0x878a39(0x3ce)]['DisplayedParams'][_0x878a39(0x743)];},Window_StatusParams[_0x29d580(0x356)][_0x29d580(0x5ff)]=function(_0x2d5453){const _0x430241=_0x29d580,_0x3fb46c=this[_0x430241(0x7cc)](_0x2d5453),_0xa8cddb=VisuMZ[_0x430241(0x191)]['Settings'][_0x430241(0x3ce)][_0x430241(0x90d)][_0x2d5453],_0x3d7c1f=TextManager[_0x430241(0x2a8)](_0xa8cddb),_0x377632=this['_actor']['paramValueByName'](_0xa8cddb,!![]);this[_0x430241(0x8e4)](_0x3fb46c['x'],_0x3fb46c['y'],0xa0,_0xa8cddb,![]),this[_0x430241(0x22b)](),this[_0x430241(0x6a6)](_0x377632,_0x3fb46c['x']+0xa0,_0x3fb46c['y'],0x3c,_0x430241(0x74e));};if(VisuMZ[_0x29d580(0x191)][_0x29d580(0xa48)][_0x29d580(0x65d)][_0x29d580(0x1e5)]){VisuMZ[_0x29d580(0x191)]['Settings'][_0x29d580(0x65d)][_0x29d580(0x1a8)]&&(Window_NameInput[_0x29d580(0x630)]=['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','\x27','`','Z','X','C','V','B','N','M',',','.','q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l',':','~','z','x','c','v','b','n','m','\x22',';','1','2','3','4','5','6','7','8','9','0','!','@','#','$','%','^','&','*','(',')','<','>','[',']','-','_','/','\x20',_0x29d580(0x978),'OK']);;VisuMZ[_0x29d580(0x191)]['Window_NameInput_initialize']=Window_NameInput[_0x29d580(0x356)][_0x29d580(0x1ce)],Window_NameInput['prototype']['initialize']=function(_0x1c98af){const _0x5c6117=_0x29d580;this[_0x5c6117(0x22a)]=this[_0x5c6117(0x65f)](),VisuMZ[_0x5c6117(0x191)]['Window_NameInput_initialize'][_0x5c6117(0x84c)](this,_0x1c98af),this[_0x5c6117(0x22a)]===_0x5c6117(0x5ad)?this[_0x5c6117(0x332)](0x0):(Input[_0x5c6117(0x588)](),this['deselect']());},Window_NameInput[_0x29d580(0x356)]['defaultInputMode']=function(){const _0x55dc3b=_0x29d580;if(Input[_0x55dc3b(0x546)]())return _0x55dc3b(0x5ad);return VisuMZ[_0x55dc3b(0x191)]['Settings'][_0x55dc3b(0x65d)][_0x55dc3b(0x4df)]||_0x55dc3b(0x986);},VisuMZ['CoreEngine'][_0x29d580(0x7df)]=Window_NameInput[_0x29d580(0x356)][_0x29d580(0x4fc)],Window_NameInput[_0x29d580(0x356)][_0x29d580(0x4fc)]=function(){const _0x1c925d=_0x29d580;if(!this[_0x1c925d(0x5ba)]())return;if(!this[_0x1c925d(0x7e9)])return;if(this[_0x1c925d(0x22a)]===_0x1c925d(0x986)&&Input[_0x1c925d(0x912)]()){if(_0x1c925d(0x990)!==_0x1c925d(0x990)){_0x25ffae[_0x1c925d(0x191)][_0x1c925d(0x7bf)][_0x1c925d(0x84c)](this,_0xf404ad);const _0x4b51c8=_0x25adca[_0x1c925d(0x7c5)];if(_0x4b51c8['match'](/<MAX LEVEL:[ ](\d+)>/i)){_0x3e3010['maxLevel']=_0x28cab1(_0x18f5b2['$1']);if(_0x565b14['maxLevel']===0x0)_0x53eb9c[_0x1c925d(0x8a1)]=_0x354c7f[_0x1c925d(0x838)];}_0x4b51c8[_0x1c925d(0x663)](/<INITIAL LEVEL:[ ](\d+)>/i)&&(_0x2cf775[_0x1c925d(0x806)]=_0x8fde5f[_0x1c925d(0x6c6)](_0x12b70c(_0x466ea5['$1']),_0x59541a['maxLevel']));}else this[_0x1c925d(0x63c)](_0x1c925d(0x5ad));}else{if(Input[_0x1c925d(0x289)](_0x1c925d(0x1d8)))'YyIiR'===_0x1c925d(0x54f)?(Input[_0x1c925d(0x588)](),this[_0x1c925d(0x1c7)]()):this[_0x1c925d(0x62a)][_0x1c925d(0x196)](_0x3ac642[_0x1c925d(0x764)][_0x1c925d(0x90e)]);else{if(Input[_0x1c925d(0x7d9)](_0x1c925d(0x326))){if(_0x1c925d(0x747)!==_0x1c925d(0x747))return'OTB';else Input['clear'](),this[_0x1c925d(0x22a)]===_0x1c925d(0x986)?this[_0x1c925d(0x63c)](_0x1c925d(0x5ad)):'GYBgz'!==_0x1c925d(0x403)?this['switchModes']('keyboard'):(_0x4548c7[_0x1c925d(0x499)]=_0x5e155a,_0x21f87c[_0x1c925d(0x588)](),_0x4eaabb['clear']());}else{if(this[_0x1c925d(0x22a)]===_0x1c925d(0x986))this[_0x1c925d(0x1c9)]();else{if(Input['isSpecialCode'](_0x1c925d(0x652)))Input[_0x1c925d(0x588)](),this[_0x1c925d(0x63c)](_0x1c925d(0x986));else{if('uSqBE'!==_0x1c925d(0x8b0))VisuMZ[_0x1c925d(0x191)][_0x1c925d(0x7df)][_0x1c925d(0x84c)](this);else{const _0x46edab=_0x58a590['gameTitle'],_0x18d656=_0x5d3773[_0x1c925d(0x564)]||'',_0x3071c9=_0x4896b8[_0x1c925d(0x8a8)]||'',_0x177507=_0x56f44f[_0x1c925d(0x191)][_0x1c925d(0xa48)][_0x1c925d(0x636)][_0x1c925d(0x1a9)][_0x1c925d(0x922)],_0x352e2e=_0x177507['format'](_0x46edab,_0x18d656,_0x3071c9);_0x40c8db[_0x1c925d(0x64e)]=_0x352e2e;}}}}}}},VisuMZ[_0x29d580(0x191)][_0x29d580(0x449)]=Window_NameInput[_0x29d580(0x356)][_0x29d580(0xa2b)],Window_NameInput[_0x29d580(0x356)][_0x29d580(0xa2b)]=function(){const _0x5f5458=_0x29d580;if(!this[_0x5f5458(0x70a)]())return;if(this[_0x5f5458(0x22a)]==='keyboard'){if(_0x5f5458(0xa33)===_0x5f5458(0xa33)){if(TouchInput['isTriggered']()&&this[_0x5f5458(0x60f)]()){if(_0x5f5458(0x7e8)!==_0x5f5458(0x7e8)){const _0x302fdb=this[_0x5f5458(0x6af)][_0x5f5458(0x1cb)][_0x5f5458(0x92c)](new _0x302f05(0x0,0x0)),_0x3e07de=this['_clientArea'][_0x5f5458(0xa42)];_0x3e07de['x']=_0x302fdb['x']+this[_0x5f5458(0xa20)]['x'],_0x3e07de['y']=_0x302fdb['y']+this[_0x5f5458(0xa20)]['y'],_0x3e07de[_0x5f5458(0x31b)]=_0x202db8[_0x5f5458(0x7ec)](this[_0x5f5458(0xa46)]*this[_0x5f5458(0x198)]['x']),_0x3e07de[_0x5f5458(0x638)]=_0xfb4a90[_0x5f5458(0x7ec)](this[_0x5f5458(0x503)]*this[_0x5f5458(0x198)]['y']);}else this['switchModes'](_0x5f5458(0x5ad));}else TouchInput[_0x5f5458(0x5e7)]()&&(_0x5f5458(0x2ec)!=='VMvcl'?_0x23e942[_0x5f5458(0x857)]&&(this['_forcedBattleSys']=_0x5f5458(0x3f5)):this[_0x5f5458(0x63c)](_0x5f5458(0x5ad)));}else _0x1b40b5[_0x5f5458(0x588)](),this['switchModes'](_0x5f5458(0x986));}else VisuMZ[_0x5f5458(0x191)]['Window_NameInput_processTouch'][_0x5f5458(0x84c)](this);},Window_NameInput[_0x29d580(0x356)][_0x29d580(0x1c9)]=function(){const _0x48d3a2=_0x29d580;if(Input[_0x48d3a2(0x289)]('enter'))Input[_0x48d3a2(0x588)](),this[_0x48d3a2(0x3f6)]();else{if(Input[_0x48d3a2(0x6f8)]!==undefined){if('jMniy'!=='UYmDo'){let _0x9acde2=Input[_0x48d3a2(0x6f8)],_0x5db2d9=_0x9acde2[_0x48d3a2(0x743)];for(let _0x216087=0x0;_0x216087<_0x5db2d9;++_0x216087){if(_0x48d3a2(0x517)!==_0x48d3a2(0x79a)){if(this[_0x48d3a2(0x4cf)][_0x48d3a2(0x69d)](_0x9acde2[_0x216087]))_0x48d3a2(0x1f9)===_0x48d3a2(0x27d)?_0x2448ce[_0x48d3a2(0x944)](_0x15b841):SoundManager['playOk']();else{if('gkJOo'!==_0x48d3a2(0x4a7))return 7.5625*_0x1a1703*_0x5d9a30;else SoundManager[_0x48d3a2(0x583)]();}}else{if(_0x438814)_0x2486ed[_0x48d3a2(0x752)](_0x726b0d);}}Input[_0x48d3a2(0x588)]();}else this[_0x48d3a2(0x9c0)]={'current':0x0,'target':0x0,'duration':0x0,'wholeDuration':0x0,'easingType':_0x48d3a2(0x756)};}}},Window_NameInput[_0x29d580(0x356)]['switchModes']=function(_0x2d6ac5){const _0x2183ba=_0x29d580;let _0x2f63b9=this[_0x2183ba(0x22a)];this[_0x2183ba(0x22a)]=_0x2d6ac5,_0x2f63b9!==this[_0x2183ba(0x22a)]&&(this['refresh'](),SoundManager['playOk'](),this[_0x2183ba(0x22a)]===_0x2183ba(0x5ad)?this['select'](0x0):this['select'](-0x1));},VisuMZ['CoreEngine'][_0x29d580(0x6e0)]=Window_NameInput[_0x29d580(0x356)][_0x29d580(0x367)],Window_NameInput[_0x29d580(0x356)][_0x29d580(0x367)]=function(_0x1facc1){const _0x1482c8=_0x29d580;if(this[_0x1482c8(0x22a)]===_0x1482c8(0x986)&&!Input[_0x1482c8(0x5db)]())return;if(Input['isNumpadPressed']())return;VisuMZ[_0x1482c8(0x191)][_0x1482c8(0x6e0)][_0x1482c8(0x84c)](this,_0x1facc1),this[_0x1482c8(0x63c)](_0x1482c8(0x5ad));},VisuMZ[_0x29d580(0x191)][_0x29d580(0x9ee)]=Window_NameInput[_0x29d580(0x356)][_0x29d580(0x992)],Window_NameInput[_0x29d580(0x356)]['cursorUp']=function(_0xa65444){const _0x58d86b=_0x29d580;if(this['_mode']==='keyboard'&&!Input[_0x58d86b(0x5db)]())return;if(Input[_0x58d86b(0x523)]())return;VisuMZ[_0x58d86b(0x191)][_0x58d86b(0x9ee)]['call'](this,_0xa65444),this[_0x58d86b(0x63c)](_0x58d86b(0x5ad));},VisuMZ[_0x29d580(0x191)]['Window_NameInput_cursorRight']=Window_NameInput['prototype'][_0x29d580(0x357)],Window_NameInput[_0x29d580(0x356)][_0x29d580(0x357)]=function(_0x369351){const _0x536490=_0x29d580;if(this[_0x536490(0x22a)]==='keyboard'&&!Input[_0x536490(0x5db)]())return;if(Input[_0x536490(0x523)]())return;VisuMZ[_0x536490(0x191)][_0x536490(0x989)][_0x536490(0x84c)](this,_0x369351),this[_0x536490(0x63c)](_0x536490(0x5ad));},VisuMZ[_0x29d580(0x191)]['Window_NameInput_cursorLeft']=Window_NameInput[_0x29d580(0x356)]['cursorLeft'],Window_NameInput['prototype'][_0x29d580(0xa30)]=function(_0x3af2df){const _0x372e03=_0x29d580;if(this['_mode']==='keyboard'&&!Input['isArrowPressed']())return;if(Input[_0x372e03(0x523)]())return;VisuMZ[_0x372e03(0x191)]['Window_NameInput_cursorLeft']['call'](this,_0x3af2df),this[_0x372e03(0x63c)]('default');},VisuMZ[_0x29d580(0x191)][_0x29d580(0x4f2)]=Window_NameInput[_0x29d580(0x356)][_0x29d580(0x9b3)],Window_NameInput[_0x29d580(0x356)]['cursorPagedown']=function(){const _0x1ee3d=_0x29d580;if(this['_mode']===_0x1ee3d(0x986))return;if(Input[_0x1ee3d(0x523)]())return;VisuMZ[_0x1ee3d(0x191)][_0x1ee3d(0x4f2)]['call'](this),this[_0x1ee3d(0x63c)](_0x1ee3d(0x5ad));},VisuMZ['CoreEngine'][_0x29d580(0x18c)]=Window_NameInput[_0x29d580(0x356)][_0x29d580(0x4a2)],Window_NameInput[_0x29d580(0x356)][_0x29d580(0x4a2)]=function(){const _0x5b5784=_0x29d580;if(this[_0x5b5784(0x22a)]===_0x5b5784(0x986))return;if(Input[_0x5b5784(0x523)]())return;VisuMZ[_0x5b5784(0x191)][_0x5b5784(0x18c)][_0x5b5784(0x84c)](this),this[_0x5b5784(0x63c)](_0x5b5784(0x5ad));},VisuMZ[_0x29d580(0x191)][_0x29d580(0x63d)]=Window_NameInput['prototype'][_0x29d580(0x4bc)],Window_NameInput[_0x29d580(0x356)][_0x29d580(0x4bc)]=function(){const _0x153515=_0x29d580;if(this[_0x153515(0x22a)]==='keyboard'){this[_0x153515(0x61a)][_0x153515(0x588)](),this[_0x153515(0x818)]['clear'](),this['resetTextColor']();let _0x5336cd=VisuMZ['CoreEngine'][_0x153515(0xa48)]['KeyboardInput'][_0x153515(0x352)][_0x153515(0x980)]('\x0a'),_0x4d5248=_0x5336cd[_0x153515(0x743)],_0x79dd5c=(this[_0x153515(0x503)]-_0x4d5248*this[_0x153515(0x29f)]())/0x2;for(let _0x462cec=0x0;_0x462cec<_0x4d5248;++_0x462cec){let _0xb022c5=_0x5336cd[_0x462cec],_0x3e41b6=this['textSizeEx'](_0xb022c5)[_0x153515(0x31b)],_0x2d5dcd=Math['floor']((this['contents'][_0x153515(0x31b)]-_0x3e41b6)/0x2);this[_0x153515(0x9cb)](_0xb022c5,_0x2d5dcd,_0x79dd5c),_0x79dd5c+=this['lineHeight']();}}else{if(_0x153515(0x529)==='rtPmf')return _0x11dbab['layoutSettings']['CommandRect'][_0x153515(0x84c)](this);else VisuMZ['CoreEngine'][_0x153515(0x63d)][_0x153515(0x84c)](this);}};};VisuMZ[_0x29d580(0x191)][_0x29d580(0x61d)]=Window_ShopSell[_0x29d580(0x356)][_0x29d580(0x6f9)],Window_ShopSell[_0x29d580(0x356)][_0x29d580(0x6f9)]=function(_0x10c179){const _0x173660=_0x29d580;if(VisuMZ['CoreEngine'][_0x173660(0xa48)][_0x173660(0x53e)]['KeyItemProtect']&&DataManager['isKeyItem'](_0x10c179))return![];else{if(_0x173660(0x670)===_0x173660(0x5e9))this['_forcedBattleSys']=_0x173660(0x8a0);else return VisuMZ[_0x173660(0x191)][_0x173660(0x61d)][_0x173660(0x84c)](this,_0x10c179);}},Window_NumberInput[_0x29d580(0x356)][_0x29d580(0x223)]=function(){return![];};VisuMZ['CoreEngine'][_0x29d580(0xa48)]['KeyboardInput'][_0x29d580(0x725)]&&(VisuMZ[_0x29d580(0x191)][_0x29d580(0x488)]=Window_NumberInput[_0x29d580(0x356)]['start'],Window_NumberInput[_0x29d580(0x356)][_0x29d580(0x76b)]=function(){const _0x461056=_0x29d580;VisuMZ[_0x461056(0x191)][_0x461056(0x488)][_0x461056(0x84c)](this),this[_0x461056(0x332)](this[_0x461056(0x7fd)]-0x1),Input['clear']();},VisuMZ[_0x29d580(0x191)][_0x29d580(0x42e)]=Window_NumberInput['prototype'][_0x29d580(0x580)],Window_NumberInput['prototype']['processDigitChange']=function(){const _0x142150=_0x29d580;if(!this[_0x142150(0x70a)]())return;if(Input[_0x142150(0x523)]())this[_0x142150(0x8ae)]();else{if(Input[_0x142150(0x289)](_0x142150(0x1d8))){if(_0x142150(0x504)===_0x142150(0x374)){_0x127bdf[_0x142150(0x9cc)](_0x3f413d,_0x26d19e);const _0xf3a6e1=_0x42d3f3[_0x142150(0x673)](_0x39e85b['PictureID'])[_0x142150(0x8ff)](0x1,0x64),_0x3d24c2=-_0x503046(_0x7ca9f[_0x142150(0x8c0)]||0x0),_0x513087=_0x1d235b['max'](_0x104c78[_0x142150(0x295)]||0x0,0x0),_0x1a3ce4=_0x2ee94f[_0x142150(0x8ea)]||_0x142150(0x756),_0x19bd3d=_0x47a21b[_0x142150(0x46b)],_0x3c7660=_0x173190['picture'](_0xf3a6e1);if(!_0x3c7660)return;_0x3c7660[_0x142150(0xa07)](_0x3d24c2,_0x513087,_0x1a3ce4);if(_0x19bd3d){const _0x1d7a28=_0x54d81f['getLastPluginCommandInterpreter']();if(_0x1d7a28)_0x1d7a28[_0x142150(0x8d8)](_0x513087);}}else this[_0x142150(0x9c4)]();}else{if(Input['_inputSpecialKeyCode']===0x2e)this[_0x142150(0x209)]();else{if(Input[_0x142150(0x982)]===0x24){if('jlKxA'!==_0x142150(0x245))this[_0x142150(0x918)]();else return _0x3cc91b[_0x142150(0x7db)]([_0x142150(0x813)]);}else Input[_0x142150(0x982)]===0x23?this[_0x142150(0x926)]():VisuMZ[_0x142150(0x191)][_0x142150(0x42e)][_0x142150(0x84c)](this);}}}},Window_NumberInput['prototype'][_0x29d580(0x801)]=function(){const _0x34c3cf=_0x29d580;if(!this[_0x34c3cf(0x958)]())return;if(Input['isNumpadPressed']())this[_0x34c3cf(0x8ae)]();else{if(_0x34c3cf(0x371)!==_0x34c3cf(0x371))return this[_0x34c3cf(0x1e3)]()[_0x34c3cf(0x5cb)];else Window_Selectable[_0x34c3cf(0x356)][_0x34c3cf(0x801)][_0x34c3cf(0x84c)](this);}},Window_NumberInput[_0x29d580(0x356)]['processCursorHomeEndTrigger']=function(){},Window_NumberInput['prototype']['processKeyboardDigitChange']=function(){const _0x408c87=_0x29d580;if(String(this[_0x408c87(0xa11)])[_0x408c87(0x743)]>=this[_0x408c87(0x7fd)])return;const _0x4291a3=Number(String(this[_0x408c87(0xa11)])+Input['_inputString']);if(isNaN(_0x4291a3))return;this['_number']=_0x4291a3;const _0x3f242d='9'[_0x408c87(0x2e4)](this['_maxDigits']);this[_0x408c87(0xa11)]=this[_0x408c87(0xa11)][_0x408c87(0x8ff)](0x0,_0x3f242d),Input[_0x408c87(0x588)](),this[_0x408c87(0x4bc)](),SoundManager['playCursor'](),this[_0x408c87(0x332)](this['_maxDigits']-0x1);},Window_NumberInput[_0x29d580(0x356)][_0x29d580(0x9c4)]=function(){const _0x483ffe=_0x29d580;this['_number']=Number(String(this[_0x483ffe(0xa11)])[_0x483ffe(0x4ae)](0x0,-0x1)),this[_0x483ffe(0xa11)]=Math[_0x483ffe(0x55d)](0x0,this[_0x483ffe(0xa11)]),Input[_0x483ffe(0x588)](),this[_0x483ffe(0x4bc)](),SoundManager[_0x483ffe(0x1af)](),this[_0x483ffe(0x332)](this['_maxDigits']-0x1);},Window_NumberInput['prototype']['processKeyboardDelete']=function(){const _0x559dbd=_0x29d580;this['_number']=Number(String(this['_number'])[_0x559dbd(0x311)](0x1)),this[_0x559dbd(0xa11)]=Math['max'](0x0,this[_0x559dbd(0xa11)]),Input[_0x559dbd(0x588)](),this[_0x559dbd(0x4bc)](),SoundManager[_0x559dbd(0x1af)](),this[_0x559dbd(0x332)](this[_0x559dbd(0x7fd)]-0x1);},Window_NumberInput['prototype'][_0x29d580(0x918)]=function(){const _0x234ec7=_0x29d580;if(this[_0x234ec7(0x46f)]()===0x0)return;Input[_0x234ec7(0x588)](),this[_0x234ec7(0x4bc)](),SoundManager[_0x234ec7(0x1af)](),this[_0x234ec7(0x332)](0x0);},Window_NumberInput['prototype'][_0x29d580(0x926)]=function(){const _0x16f897=_0x29d580;if(this[_0x16f897(0x46f)]()===this[_0x16f897(0x7fd)]-0x1)return;Input[_0x16f897(0x588)](),this[_0x16f897(0x4bc)](),SoundManager[_0x16f897(0x1af)](),this[_0x16f897(0x332)](this[_0x16f897(0x7fd)]-0x1);});;VisuMZ[_0x29d580(0x191)][_0x29d580(0x8c3)]=Window_MapName['prototype'][_0x29d580(0x4bc)],Window_MapName[_0x29d580(0x356)][_0x29d580(0x4bc)]=function(){const _0x321fda=_0x29d580;VisuMZ[_0x321fda(0x191)][_0x321fda(0xa48)]['QoL'][_0x321fda(0x900)]?this['refreshWithTextCodeSupport']():VisuMZ[_0x321fda(0x191)]['Window_MapName_refresh']['call'](this);},Window_MapName['prototype'][_0x29d580(0x492)]=function(){const _0x4abfcf=_0x29d580;this['contents'][_0x4abfcf(0x588)]();if($gameMap[_0x4abfcf(0x34e)]()){if('zcvWP'===_0x4abfcf(0x1f7)){const _0x439786=this[_0x4abfcf(0xa46)];this[_0x4abfcf(0x706)](0x0,0x0,_0x439786,this[_0x4abfcf(0x29f)]());const _0x574a81=this[_0x4abfcf(0x3bb)]($gameMap[_0x4abfcf(0x34e)]())[_0x4abfcf(0x31b)];this[_0x4abfcf(0x9cb)]($gameMap[_0x4abfcf(0x34e)](),Math[_0x4abfcf(0x722)]((_0x439786-_0x574a81)/0x2),0x0);}else this[_0x4abfcf(0x4cf)]&&this[_0x4abfcf(0x4cf)][_0x4abfcf(0x196)](_0x56f759['layoutSettings'][_0x4abfcf(0x5d0)]),this[_0x4abfcf(0x803)]&&this[_0x4abfcf(0x803)]['setBackgroundType'](_0xa0f595['layoutSettings'][_0x4abfcf(0x1ef)]);}},Window_TitleCommand[_0x29d580(0x7c1)]=VisuMZ[_0x29d580(0x191)][_0x29d580(0xa48)][_0x29d580(0x495)],Window_TitleCommand[_0x29d580(0x356)][_0x29d580(0x858)]=function(){const _0x19aa2d=_0x29d580;this[_0x19aa2d(0x582)]();},Window_TitleCommand['prototype']['makeCoreEngineCommandList']=function(){const _0x3edf6a=_0x29d580;for(const _0x422749 of Window_TitleCommand[_0x3edf6a(0x7c1)]){if(_0x3edf6a(0x942)===_0x3edf6a(0x942)){if(_0x422749['ShowJS'][_0x3edf6a(0x84c)](this)){const _0x4366de=_0x422749[_0x3edf6a(0x54b)];let _0x58b2f0=_0x422749[_0x3edf6a(0x2d7)];if(['',_0x3edf6a(0x458)][_0x3edf6a(0x480)](_0x58b2f0))_0x58b2f0=_0x422749['TextJS']['call'](this);const _0x109b2d=_0x422749[_0x3edf6a(0x59b)][_0x3edf6a(0x84c)](this),_0x394274=_0x422749['ExtJS']['call'](this);this['addCommand'](_0x58b2f0,_0x4366de,_0x109b2d,_0x394274),this['setHandler'](_0x4366de,_0x422749[_0x3edf6a(0x379)]['bind'](this,_0x394274));}}else this[_0x3edf6a(0x64c)]['x']=_0x33fc10['boxWidth']+0x4;}},VisuMZ[_0x29d580(0x191)][_0x29d580(0x69f)]=Window_TitleCommand['prototype']['selectLast'],Window_TitleCommand[_0x29d580(0x356)][_0x29d580(0x1dd)]=function(){const _0x33c011=_0x29d580;VisuMZ[_0x33c011(0x191)]['Window_TitleCommand_selectLast'][_0x33c011(0x84c)](this);if(!Window_TitleCommand[_0x33c011(0xa45)])return;const _0x46d403=this['findSymbol'](Window_TitleCommand['_lastCommandSymbol']),_0x1c53da=Math[_0x33c011(0x722)](this[_0x33c011(0x6ad)]()/0x2)-0x1;this[_0x33c011(0x868)](_0x46d403),this[_0x33c011(0x2f8)]>0x1&&(this[_0x33c011(0x2f8)]=0x1,this[_0x33c011(0x396)]()),this[_0x33c011(0x4b2)](_0x46d403-_0x1c53da);},Window_GameEnd[_0x29d580(0x7c1)]=VisuMZ['CoreEngine'][_0x29d580(0xa48)][_0x29d580(0x636)][_0x29d580(0xa03)][_0x29d580(0x8c8)],Window_GameEnd[_0x29d580(0x356)][_0x29d580(0x858)]=function(){this['makeCoreEngineCommandList']();},Window_GameEnd['prototype'][_0x29d580(0x582)]=function(){const _0x32c64e=_0x29d580;for(const _0x6bc5db of Window_GameEnd[_0x32c64e(0x7c1)]){if(_0x32c64e(0x462)!=='cakCu')this['backOpacity']=_0x10319e['windowOpacity']();else{if(_0x6bc5db[_0x32c64e(0x82d)][_0x32c64e(0x84c)](this)){const _0x5be3e9=_0x6bc5db[_0x32c64e(0x54b)];let _0xc18333=_0x6bc5db[_0x32c64e(0x2d7)];if(['',_0x32c64e(0x458)][_0x32c64e(0x480)](_0xc18333))_0xc18333=_0x6bc5db[_0x32c64e(0x869)][_0x32c64e(0x84c)](this);const _0x4b4376=_0x6bc5db[_0x32c64e(0x59b)][_0x32c64e(0x84c)](this),_0x46940d=_0x6bc5db[_0x32c64e(0x354)][_0x32c64e(0x84c)](this);this[_0x32c64e(0x2ee)](_0xc18333,_0x5be3e9,_0x4b4376,_0x46940d),this[_0x32c64e(0x855)](_0x5be3e9,_0x6bc5db[_0x32c64e(0x379)][_0x32c64e(0x85f)](this,_0x46940d));}}}};function Window_ButtonAssist(){this['initialize'](...arguments);}Window_ButtonAssist['prototype']=Object[_0x29d580(0x72a)](Window_Base[_0x29d580(0x356)]),Window_ButtonAssist[_0x29d580(0x356)][_0x29d580(0x8e5)]=Window_ButtonAssist,Window_ButtonAssist['prototype'][_0x29d580(0x1ce)]=function(_0xc84dd6){const _0x2a93be=_0x29d580;this[_0x2a93be(0x2a9)]={},Window_Base[_0x2a93be(0x356)][_0x2a93be(0x1ce)][_0x2a93be(0x84c)](this,_0xc84dd6),this[_0x2a93be(0x196)](VisuMZ[_0x2a93be(0x191)][_0x2a93be(0xa48)][_0x2a93be(0x4e4)][_0x2a93be(0x303)]||0x0),this['refresh']();},Window_ButtonAssist['prototype']['makeFontBigger']=function(){const _0x38fb33=_0x29d580;this[_0x38fb33(0x61a)]['fontSize']<=0x60&&(this[_0x38fb33(0x61a)][_0x38fb33(0x946)]+=0x6);},Window_ButtonAssist['prototype'][_0x29d580(0x524)]=function(){const _0xb5699e=_0x29d580;this['contents'][_0xb5699e(0x946)]>=0x18&&(_0xb5699e(0x698)===_0xb5699e(0x387)?this['select'](-0x1):this[_0xb5699e(0x61a)][_0xb5699e(0x946)]-=0x6);},Window_ButtonAssist['prototype'][_0x29d580(0x24e)]=function(){const _0x3b2963=_0x29d580;Window_Base[_0x3b2963(0x356)][_0x3b2963(0x24e)][_0x3b2963(0x84c)](this),this[_0x3b2963(0x8fc)]();},Window_ButtonAssist[_0x29d580(0x356)]['updatePadding']=function(){const _0x37b117=_0x29d580;this[_0x37b117(0x46a)]=SceneManager[_0x37b117(0x3df)]['getButtonAssistLocation']()!==_0x37b117(0x477)?0x0:0x8;},Window_ButtonAssist['prototype'][_0x29d580(0x8fc)]=function(){const _0x11f10d=_0x29d580,_0xba184b=SceneManager[_0x11f10d(0x3df)];for(let _0x3b90eb=0x1;_0x3b90eb<=0x5;_0x3b90eb++){if(this[_0x11f10d(0x2a9)]['key%1'['format'](_0x3b90eb)]!==_0xba184b[_0x11f10d(0x95f)['format'](_0x3b90eb)]())return this[_0x11f10d(0x4bc)]();if(this['_data'][_0x11f10d(0x3dc)['format'](_0x3b90eb)]!==_0xba184b[_0x11f10d(0x642)[_0x11f10d(0x7d6)](_0x3b90eb)]())return this[_0x11f10d(0x4bc)]();}},Window_ButtonAssist['prototype'][_0x29d580(0x4bc)]=function(){const _0x3e0c72=_0x29d580;this[_0x3e0c72(0x61a)][_0x3e0c72(0x588)]();for(let _0x3edff5=0x1;_0x3edff5<=0x5;_0x3edff5++){_0x3e0c72(0x507)==='XuJLb'?this[_0x3e0c72(0x9c8)](_0x3edff5):(_0x3080bc('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x3e0c72(0x7d6)](_0x143d74,_0x47b4d6)),_0xe8d3e7[_0x3e0c72(0x79e)]());}},Window_ButtonAssist[_0x29d580(0x356)][_0x29d580(0x9c8)]=function(_0x14e68e){const _0x586dfc=_0x29d580,_0x47531c=this[_0x586dfc(0xa46)]/0x5,_0x5027fb=SceneManager['_scene'],_0x21db39=_0x5027fb[_0x586dfc(0x95f)[_0x586dfc(0x7d6)](_0x14e68e)](),_0x1e52e6=_0x5027fb[_0x586dfc(0x642)[_0x586dfc(0x7d6)](_0x14e68e)]();this[_0x586dfc(0x2a9)][_0x586dfc(0x32f)[_0x586dfc(0x7d6)](_0x14e68e)]=_0x21db39,this['_data'][_0x586dfc(0x3dc)[_0x586dfc(0x7d6)](_0x14e68e)]=_0x1e52e6;if(_0x21db39==='')return;if(_0x1e52e6==='')return;const _0x2875e2=_0x5027fb['buttonAssistOffset%1'[_0x586dfc(0x7d6)](_0x14e68e)](),_0x568899=this[_0x586dfc(0x601)](),_0x4a0518=_0x47531c*(_0x14e68e-0x1)+_0x568899+_0x2875e2,_0x56f815=VisuMZ['CoreEngine'][_0x586dfc(0xa48)]['ButtonAssist'][_0x586dfc(0x917)];this[_0x586dfc(0x9cb)](_0x56f815['format'](_0x21db39,_0x1e52e6),_0x4a0518,0x0,_0x47531c-_0x568899*0x2);},VisuMZ[_0x29d580(0x191)][_0x29d580(0x19c)]=Game_Interpreter[_0x29d580(0x356)]['updateWaitMode'],Game_Interpreter[_0x29d580(0x356)][_0x29d580(0x58c)]=function(){const _0x464f2a=_0x29d580;if($gameTemp['_pictureCoordinatesMode']!==undefined)return VisuMZ['CoreEngine'][_0x464f2a(0x39f)]();return VisuMZ[_0x464f2a(0x191)][_0x464f2a(0x19c)][_0x464f2a(0x84c)](this);},VisuMZ[_0x29d580(0x191)][_0x29d580(0x39f)]=function(){const _0x348f5d=_0x29d580,_0x27aae5=$gameTemp[_0x348f5d(0x499)]||0x0;(_0x27aae5<0x0||_0x27aae5>0x64||TouchInput[_0x348f5d(0x5e7)]()||Input[_0x348f5d(0x7d9)](_0x348f5d(0x622)))&&($gameTemp['_pictureCoordinatesMode']=undefined,Input[_0x348f5d(0x588)](),TouchInput['clear']());const _0x327b2e=$gameScreen[_0x348f5d(0x257)](_0x27aae5);return _0x327b2e&&(_0x348f5d(0x394)!==_0x348f5d(0x8b2)?(_0x327b2e['_x']=TouchInput['_x'],_0x327b2e['_y']=TouchInput['_y']):(this[_0x348f5d(0x64d)]([_0xe158ca],_0x38c4cd,_0x3c3cec,_0x5db431,_0xc8c7c7),_0x16ddd1+=_0x535d44)),VisuMZ['CoreEngine']['updatePictureCoordinates'](),$gameTemp[_0x348f5d(0x499)]!==undefined;},VisuMZ[_0x29d580(0x191)][_0x29d580(0x5b8)]=function(){const _0x4e9f53=_0x29d580,_0x40d4df=SceneManager[_0x4e9f53(0x3df)];if(!_0x40d4df)return;!_0x40d4df['_pictureCoordinatesWindow']&&(_0x4e9f53(0x31a)!==_0x4e9f53(0x31a)?this[_0x4e9f53(0x9b3)]():(SoundManager[_0x4e9f53(0x46d)](),_0x40d4df[_0x4e9f53(0x265)]=new Window_PictureCoordinates(),_0x40d4df[_0x4e9f53(0x47a)](_0x40d4df['_pictureCoordinatesWindow']))),$gameTemp[_0x4e9f53(0x499)]===undefined&&(SoundManager[_0x4e9f53(0x97e)](),_0x40d4df['removeChild'](_0x40d4df[_0x4e9f53(0x265)]),_0x40d4df['_pictureCoordinatesWindow']=undefined);};function Window_PictureCoordinates(){this['initialize'](...arguments);}function _0x149d(){const _0x3761a4=['sellWindowRect','wnFWh','createJsQuickFunction','Scene_Base_terminateAnimationClearBugFix','DocumentTitleFmt','createContents','_stored_tpGaugeColor2','lnoem','processKeyboardEnd','KEVZR','hFpZf','maxBattleMembers','drawAllParams','Version','apply','updateRotation','ScaleX','Game_Interpreter_command355','XpOYM','lJiiE','zWEfD','Power','src','_cacheScaleX','Bitmap_clearRect','QYQaG','Sprite_AnimationMV_processTimingData','Scene_Skill_create','_troopId','anglePlus','PreserveNumbers','updateClose','targetX','CONVERT','mhp','_coreEngineShakeStyle','QeOco','sparamFlatBonus','setEasingType','》Comment《\x0a%1\x0a','fontSize','list','updateOpacity','Plus2','_baseSprite','isSideButtonLayout','drawBackgroundRect','EditRect','smallParamFontSize','gxNPM','ParseSkillNotetags','test','Match','rGGiy','helpWindowRect','nPWbj','Rate1','F17','isCursorMovable','traitObjects','isSmartEventCollisionOn','SParamVocab1','BgFilename2','NUMPAD3','setup','buttonAssistKey%1','OnLoadJS','META','createScrollBarSprites','skillId','FpdZO','AriZA','atypeId','ngorN','_coreEasingType','UkfnK','windowOpacity','uJVtL','State-%1-%2','DimColor1','3159JYkGgz','pow','Bitmap_measureTextWidth','onKeyDown','itemSuccessRate','gJnql','XzFRW','Bitmap_gradientFillRect','tilesets','isPressed','Page','push','XYSXR','centerX','RightMenus','_shakePower','playCancel','slotWindowRect','split','ApplyEasing','_inputSpecialKeyCode','ActorBgType','itemHit','Origin','keyboard','wUKtQ','createTitleButtons','Window_NameInput_cursorRight','GoldIcon','rtRxP','playOk','toString','anchor','DECIMAL','mldye','getInputMultiButtonStrings','cursorUp','onerror','Window_StatusBase_drawActorSimpleStatus','_backSprite1','enemy','SkillTypeBgType','ScZmO','([\x5c+\x5c-]\x5cd+)>','ATTN','OptionsRect','Window_Selectable_processTouch','updateOrigin','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','uiAreaWidth','jzPtj','Graphics_defaultStretchMode','onActorChange','isKeyItem','repositionEnemiesByResolution','ActorTPColor','canEquip','_CoreEngineSettings','mpGaugeColor1','isBusy','ColorDeath','openness','PIPE','_tempActor','ptfpz','_rate','updateScene','Game_Event_start','CreateBattleSystemID','cursorPagedown','_stored_expGaugeColor2','clearForcedGameTroopSettingsCoreEngine','Icon','DELETE','updatePositionCoreEngineShakeHorz','ZHShw','BgFilename1','CTB','contentsOpacity','NEAREST','exportAllTroopStrings','ExtractStrFromMap','_anglePlus','buttonAssistOffset3','2733870qfVEIy','Window_Selectable_processCursorMove','processKeyboardBackspace','PuEnB','showPointAnimations','QUESTION_MARK','drawSegment','_onKeyPress','outlineColorDmg','drawTextEx','ConvertParams','CEvnD','_blank','ExtractStrFromList','duration','_makeFontNameText','ForceNoPlayTest','move','moveRelativeToResolutionChange','Game_Character_processMoveCommand','ExportStrFromAllMaps','ParseEnemyNotetags','_targetScaleY','jIdTA','AudioChangeBgmPan','playBgs','Scene_Map_updateScene','isOptionValid','raeuh','strokeRect','Bitmap_initialize','createBackground','SwitchRandomizeOne','TILDE','Sprite_Battler_startMove','BlurStrength','setupFont','F6key','Ccezr','RequireFocus','scrollDown','ControllerButtons','_lastY','_optionsWindow','Window_NameInput_cursorUp','IconXParam0','drawFace','szAEL','lGzvN','sBZxA','playBgm','inBattle','seVolume','StatusRect','disable','vertJS','BattleManager_checkSubstitute','1.3.0','Scene_Map_createSpriteset_detach','EscapeAlways','clone','_clickHandler','SlotRect','GoldOverlap','playTestF6','GameEnd','%1〘End\x20Choice\x20Selection〙%1','setMute','isEnemy','changeAnglePlusData','evaluate','ExportString','Game_Troop_setup','_balloonQueue','_hp','_targetOpacity','paramBaseAboveLevel99','_statusParamsWindow','jGVxi','_number','expGaugeColor2','TAB','resize','WIN_OEM_ENLW','gold','StatusMenu','reserveNewGameCommonEvent','SwitchRandomizeRange','string','Sprite_Actor_setActorHome','Padding','defineProperty','updatePlayTestF7','ESC','origin','name','tilesetFlags','initRotationCoreEngine','DLohK','ActorRect','setAttack','updatePositionCoreEngineShakeOriginal','_targetAnchor','clearOnceParallelInterpreters','Game_Picture_scaleX','processTouch','BattleManager_update','dummyWindowRect','textBaseline','Scene_MenuBase_mainAreaHeight','cursorLeft','refreshScrollBarBitmap','CONTEXT_MENU','Kjhcq','isNwjs','getLevel','StatusBgType','Spriteset_Base_initialize','OUTCUBIC','setSkill','xparamRateJS','AutoScrollLockX','sparam','STR','WIN_OEM_ATTN','〖〖〖\x20Map\x20%1:\x20%2\x20Script\x20〗〗〗\x0a\x0a','createEnemies','commandWindowRect','filterArea','CancelText','sin','_lastCommandSymbol','innerWidth','isGameActive','Settings','maxGold','open','ctSQa','_paramPlus','useDigitGrouping','ParseWeaponNotetags','endAction','pUFyf','LvExpGauge','expRate','WulkG','IconSParam3','pop','none','wsWsR','Rate2','_effectsContainer','_currentBgs','destroyContents','mJEnb','Skill-%1-%2','GRD','_storedStack','_bitmap','numActions','gaugeBackColor','enableDigitGroupingEx','FUNC','StatusParamsBgType','WnkRy','updateOnceParallelInterpreters','angle','setWindowPadding','MenuBg','setTargetAnchor','checkCacheKey','STRUCT','QInQm','DefaultStyle','catchUnknownError','pan','clearZoom','_pictureContainer','_stored_deathColor','PLAY','DATABASE','Scene_Name_onInputOk','fillStyle','Game_Picture_x','isMVAnimation','itemWindowRect','show','\x0a\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%2\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(\x27JS\x20Quick\x20Function\x20\x22%1\x22\x20Error!\x27);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20','mute','yScrollLinkedOffset','playTestF7','yYAxK','params','_storedMapText','openingSpeed','Game_Screen_initialize','_opacity','364IIjwSO','isItemStyle','setActorHomeRepositioned','hpGaugeColor2','terms','Window_NameInput_cursorPageup','JQDrS','gainItem','isPhysical','_itemWindow','CoreEngine','_stored_powerUpColor','TRG','textHeight','_image','setBackgroundType','WIN_OEM_FINISH','scale','processPointAnimationRequests','Sprite_Picture_loadBitmap','initCoreEasing','Game_Interpreter_updateWaitMode','SLASH','VisuMZ\x20CoreEngine\x20PictureIcon\x20%1\x20%2','thickness','_movementWholeDuration','EISU','LBtwd','_forcedBattleSys','BGdau','left','OutlineColor','integer','QwertyLayout','Title','paramRateJS','TPB\x20ACTIVE','outbounce','hGPvf','_statusEquipWindow','playCursor','buttonAssistOffset2','option','isWindowMaskingEnabled','_slotWindow','DebugConsoleLastControllerID','INOUTBACK','requestFauxAnimation','clearRect','writeFile','(\x5cd+\x5c.?\x5cd+)>','buttonAssistOk','processSoundTimings','ZmvVa','_cacheScaleY','getBattleSystem','Flat','_registerKeyInput','VQUVd','processCursorHomeEndTrigger','targetContentsOpacity','GoldFontSize','powerDownColor','〘Common\x20Event\x20%1:\x20%2〙\x20End','processBack','Total','processKeyboardHandling','ItemRect','worldTransform','Window_Gold_refresh','EXECUTE','initialize','ikQHz','animationNextDelay','baseId','Scene_Map_createMenuButton','traitsPi','SEPARATOR','saveViewport','Game_Action_itemEva','SellRect','backspace','goldWindowRect','XenMP','PLUS','loadSystemImages','selectLast','targetY','colSpacing','HRG','targetScaleY','createSpriteset','subject','Input_onKeyDown','EnableNameInput','setHome','LINEAR','_margin','EQUAL','PDR','BlurFilter','DummyBgType','ListBgType','replace','InputBgType','NUMPAD6','dqlqH','QakIv','_targetOffsetY','YSfcq','crOPc','rightArrowWidth','zcvWP','ExtractStrFromTroop','vEDoi','_fauxAnimationSprites','ShowDevTools','oYXde','Spriteset_Battle_createEnemies','_drawTextBody','SideButtons','SCROLL_LOCK','startMove','updatePictureAntiZoom','ijwvu','drawActorSimpleStatus','Exported_Script_%1.txt','XParamVocab9','imageSmoothingEnabled','Scene_Boot_startNormalGame','processKeyboardDelete','Sprite_Animation_processSoundTimings','backgroundBitmap','_name','UrSQB','sv_enemies','updateCoreEasing','scrollRight','OpenConsole','MDF','iPAWG','vjgZM','Scene_MenuBase_helpAreaTop','shake','ARRAYNUM','paramWidth','pictureId','nIQqJ','powerUpColor','pageup','offsetX','vpcKe','RegExp','bJLbf','XParamVocab8','levelUp','isUseModernControls','updateMotion','csTiu','_animation','Game_Action_numRepeats','target','isForFriend','_mode','resetTextColor','ShowScrollBar','MainMenu','pointX','makeEncounterCount','value','KlCnn','pUbNA','nCMbH','catchLoadError','GroupDigits','oetBu','padZero','Class-%1-%2','HIT','createBuffer','targetPosition','Window_Base_createContents','_url','PRINTSCREEN','_skillTypeWindow','bitmap','command111','wmHJk','gTZeQ','Armor-%1-%2','XWQqX','bitmapWidth','Game_Map_scrollLeft','setSideView','Window_Base_initialize','removeFauxAnimation','processMoveCommand','catchException','ColorCTGauge2','update','sHWkt','mainAreaTopSideButtonLayout','CategoryRect','_goldWindow','tpCostColor','mfLXA','and\x20add\x20it\x20onto\x20this\x20one.','_targetX','picture','updateTransform','_pointAnimationQueue','Input_clear','addChildToBack','createAnimationSprite','glkbW','UNDERSCORE','ColorTPCost','isPlaying','buttonAreaHeight','_stored_normalColor','tgyHR','dglbT','_pictureCoordinatesWindow','updateData','scaleSprite','65163PlhFGy','_targetScaleX','GFfOy','PHxTX','paramPlusJS','INOUTCUBIC','sbmip','TABmP','isScrollBarVisible','processTouchModernControls','makeActionList','Current\x20tileset\x20has\x20incomplete\x20flag\x20data.','playTestShiftT','tRPXy','visible','SystemSetWindowPadding','bgm','uIojQ','Speed','fddZi','SHIFT','lOpCa','updateBgmParameters','ItemBackColor1','createKeyJS','IQmPs','Window_StatusBase_drawActorLevel','background','ENTER_SPECIAL','applyEasingAnglePlus','CommandBgType','nextLevelExp','evaded','isSpecialCode','GdprJ','xaiXU','Game_Action_itemHit','isBottomButtonMode','PckNF','PIbee','Control\x20Variables\x20Script\x20Error','exp','reduce','Bswwr','Game_Picture_initRotation','Duration','smooth','_digitGroupingEx','systemColor','BackOpacity','vwfzz','_smooth','cBYhO','retrievePointAnimation','textColor','lineHeight','Window_Selectable_cursorDown','_battleField','IconSParam1','PgCuE','_showDevTools','skillTypeWindowRect','Game_Map_scrollRight','drawGoldItemStyle','param','_data','scaleY','ValueJS','Scene_MenuBase_createPageButtons','ParseAllNotetags','AllMaps','xdg-open','_defaultStretchMode','InputRect','SystemSetSideView','etypeId','_mapNameWindow','IconSParam6','setupRate','ActorHPColor','skipBranch','isMaxLevel','wEUkp','description','_backSprite','seek','hasEncryptedImages','subjectHitRate','_pauseSignSprite','OUTCIRC','allowShiftScrolling','AudioChangeBgsVolume','Scene_Base_terminate','LYdxc','dimColor1','IconParam7','volume','_mainSprite','BTestAddedQuantity','helpAreaTop','Smooth','StatusParamsRect','KeySHIFT','LqSsN','scaleX','ListRect','GoldMax','AccuracyBoost','Game_Picture_initBasic','LoadError','〘Scrolling\x20Text〙\x0a','TextStr','Window_Base_createTextState','keyCode','editWindowRect','buttonAssistKey3','LUK','displayX','FPXFx','itemHitImprovedAccuracy','CTRL','40092mHYQgc','Window_EquipItem_isEnabled','sparamPlusJS','repeat','type','_cancelButton','isMaskingEnabled','xparamRate1','adjustBoxSize','initCoreEngineScreenShake','BACKSPACE','VMvcl','RxGTq','addCommand','Scene_Battle_update','_windowskin','CommandWidth','maxScrollbar','setupButtonImage','win32','ProfileBgType','uiAreaHeight','QybrR','_scrollDuration','setupCustomRateCoreEngine','njbgz','NUMPAD0','Sprite_Animation_setViewport','IEuHV','vFvrh','SCROLLBAR','_backgroundFilter','Scene_Title_drawGameTitle','currencyUnit','BgType','createTextState','sv_actors','F10','itemHeight','wwKpC','hIjLv','SubfolderParse','ColorCTGauge1','_startDecrypting','_pollGamepads','_shakeSpeed','setSize','NameMenu','substring','platform','mpColor','createTroopNote','setCoreEngineScreenShakeStyle','lPXuC','scrollLeft','GoldChange','removeAnimationFromContainer','bUrpQ','width','xparamFlatBonus','initCoreEngine','centerCameraCheckData','get','MEV','pitch','updateEffekseer','object','Game_Interpreter_command111','GREATER_THAN','tab','efast','VQDUQ','loading','menuShowButton','Game_Actor_paramBase','levelUpRecovery','LswJc','displayY','key%1','OUTBACK','Scene_Item_create','select','onLoad','reservePlayTestNewGameCommonEvent','DOWN','buttonAssistWindowButtonRect','DigitGroupingGaugeSprites','ARRAYSTR','sparamPlus1','vcTgz','destroyCoreEngineMarkedBitmaps','OUTEXPO','Sprite_Gauge_gaugeRate','SLuWC','Window_Base_update','mmp','process_VisuMZ_CoreEngine_CustomParameters','context','startAutoNewGame','Game_Interpreter_command105','setMainFontSize','BattleSystem','TBdqV','targetOpacity','Subtitle','iJqnR','refreshActor','_list','MINUS','displayName','setActionState','initRotation','This\x20scene\x20cannot\x20utilize\x20a\x20Once\x20Parallel!','NameInputMessage','setSideButtonLayout','ExtJS','vcthN','prototype','cursorRight','VisuMZ_2_BattleSystemCTB','updateFauxAnimations','F19','overrideMimeType','EwqRF','scrollbar','animationBaseDelay','current','isAlive','onlyfilename','IEcjQ','createButtonAssistWindow','blt','_width','updateScrollBars','cursorDown','initMembers','CLOSE_CURLY_BRACKET','Pjpol','Window_Scrollable_update','addWindow','VVqsn','windowPadding','pagedown','isAnimationOffsetXMirrored','TvTwg','PbSuO','_stored_maxLvGaugeColor1','ILxxf','battlerHue','save','isRightInputMode','Scene_Base_createWindowLayer','CallHandlerJS','ctrlKey','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','sparamPlus2','BlendMode','Bitmap_drawText','process_VisuMZ_CoreEngine_jsQuickFunctions','SParamVocab5','getCoreEngineScreenShakeStyle','TPB\x20WAIT','hpColor','F23','_dummyWindow','children','Abpax','setClickHandler','xparamRate','PictureID','ADD','BKSP','ruPAD','aIPtF','getPointAnimationLayer','faceWidth','_centerCameraCheck','_stored_crisisColor','EXR','RBKHX','_opening','updateSmoothScroll','result','hEigu','IconXParam5','ARRAYJSON','_centerElement','UMxmH','createDigits','FNAuk','UpdatePictureCoordinates','PGUP','tpGaugeColor1','turn','Scene_Map_createSpriteset','CHylF','paramMax','DigitGroupingLocale','TranslucentOpacity','framebuffer','getBackgroundOpacity','popScene','playOnceParallelInterpreter','Game_Interpreter_command122','NUMPAD4','ctGaugeColor2','RevertPreserveNumbers','updateMove','WjrCU','Window_Base_drawText','getCombinedScrollingText','TitlePicButtons','_target','adjustPictureAntiZoom','Plus1','sqrt','updateMain','ShowButtons','textSizeEx','createDimmerSprite','createFauxAnimationSprite','parallaxes','euKSZ','_stored_hpGaugeColor1','Htbbx','horizontal','offsetY','listWindowRect','CustomParamNames','BattleManager_processEscape','valueOutlineColor','eQZfK','_profileWindow','JUNJA','calcCoreEasing','_loadingState','SLEEP','Param','48oIAlVY','MODECHANGE','fillAll','boxHeight','%1〘Choice\x20%2〙\x20%3%1','IKBuw','HSTtG','VOLUME_DOWN','_mirror','hide','paramName','windowRect','Game_Picture_y','text%1','erasePicture','_offsetY','_scene','_origin','paramFlatBonus','menu','VisuMZ_2_BattleSystemSTB','kPSTp','join','NUMPAD8','ColorMPGauge1','parse','Tilemap_addShadow','joYDq','isMenuButtonAssistEnabled','Scene_Map_update','setAnchor','qeDHx','getGamepads','CcqKx','PHA','SParamVocab6','SellBgType','StartID','OTB','onNameOk','_pagedownButton','buttonAssistOffset1','5DSXFHt','Plus','KANA','DisplayLockY','_isWindow','_drawTextOutline','%1%2','Game_Picture_calcEasing','startAnimation','_allTextHeight','pDYOC','pos','WIN_OEM_WSCTRL','command355','isAnimationForEach','yCGEN','Svkvc','markCoreEngineModified','setViewportCoreEngineFix','KeyUnlisted','img/%1/','oIxFr','kqTlV','randomInt','setViewport','isSceneMap','Abbreviation','SystemLoadImages','damageColor','startShake','IconParam6','IBVrH','_pictureName','scrollY','_bgsBuffer','NbdDw','horzJS','animationId','SceneManager_isGameActive','drawGameSubtitle','_logWindow','buttonAssistSwitch','playCursorSound','AOKuj','_sellWindow','Input_setupEventHandlers','createChildSprite','isInstanceOfSceneMap','destroy','FontSize','_windowLayer','ColorGaugeBack','DisplayLockX','Window_NumberInput_processDigitChange','AutoStretch','AnimationPoint','overallHeight','ItemHeight','SaveMenu','_repositioned','scaleMode','sparamRate2','BottomHelp','X:\x20%1','_height','ColorHPGauge2','VPeop','Basic','iynNI','BTItn','HYPHEN_MINUS','buttons','_createInternalTextures','IconXParam4','PERIOD','XParamVocab0','xScrollLinkedOffset','<JS\x20%1\x20%2:[\x20](.*)>','OSruM','_originalViewport','Window_NameInput_processTouch','_buttonType','XvpTm','applyCoreEasing','_active','pmdiq','ShowActorLevel','ItemBackColor2','resetFontSettings','Input_shouldPreventDefault','renderNoMask','isRepeated','PRINT','_setupEventHandlers','IconSParam8','Untitled','\x20Origin:\x20%1','buttonAssistText3','piNYX','SParamVocab9','filters','WIN_OEM_JUMP','ItemBgType','eventsXyNt','_colorTone','cakCu','AudioChangeBgsPitch','ZxjDe','_onKeyDown','IconXParam2','_shakeDuration','onDatabaseLoaded','DigitGroupingDamageSprites','padding','Wait','Scene_Boot_updateDocumentTitle','playLoad','Layer','index','SParamVocab0','DamageColor','isGamepadButtonPressed','F15','WIN_OEM_FJ_LOYA','EncounterRateMinimum','indexOf','button','areButtonsHidden','targetScaleX','addChild','AllTroops','getKeyboardInputButtonString','_hideButtons','zOJca','createCustomParameter','includes','Game_Picture_angle','dashToggle','isSideView','FontShadows','LESS_THAN','WIN_OEM_BACKTAB','WASD','Window_NumberInput_start','VisuMZ_4_UniqueTileEffects','animations','process_VisuMZ_CoreEngine_Functions','initBasic','_screenY','ControllerMatches','getColorDataFromPluginParameters','NLcvQ','UHiLj','refreshWithTextCodeSupport','rRmGP','IUcAM','TitleCommandList','INOUTQUAD','alignBottom','PictureRotateBy','_pictureCoordinatesMode','PA1','Game_Picture_updateRotation','KeyItemProtect','process_VisuMZ_CoreEngine_ControllerButtons','KscPC','URL','buttonAssistText1','style','cursorPageup','VisuMZ_2_BattleSystemETB','_scrollBarVert','enable','learnings','gkJOo','mrbaO','_displayY','LUsPr','TCZWq','encounterStep','stencilFunc','slice','updateLastTarget','EVA','isLoopHorizontal','setTopRow','CRSEL','application/json','kZvbV','setFrame','SlFXd','%1:\x20Exit\x20','BuyRect','_currentBgm','ColorTPGauge1','refresh','Game_Picture_show','F12','ExportCurTroopText','_spriteset','checkSubstitute','getColor','_downArrowSprite','_stored_expGaugeColor1','TGR','piCnr','_animationQueue','Scene_Battle_createCancelButton','XgFTu','Chance','ZejIz','unDKh','iconWidth','loadIconBitmap','_editWindow','Window_Base_drawCharacter','registerCommand','map','KeyTAB','makeTargetSprites','removeAllPointAnimations','STB','_viewportSize','WLBIk','destroyScrollBarBitmaps','_backgroundSprite','deflate','CustomParamAbb','makeDeepCopy','_duration','DefaultMode','YMEYb','SParamVocab3','_stored_pendingColor','CIRCUMFLEX','ButtonAssist','AnimationMirrorOffset','saexA','Conditional\x20Branch\x20Script\x20Error','KNzTc','ShowItemBackground','PictureShowIcon','updateCurrentEvent','MAX_GL_TEXTURES','text','Game_Event_isCollidedWithEvents','dimColor2','CategoryBgType','EssdS','Window_NameInput_cursorPagedown','BTestWeapons','backOpacity','consumable','applyEasing','currentLevelExp','updatePointAnimations','item','ColorMPGauge2','hpGaugeColor1','processHandling','_buttonAssistWindow','gradientFillRect','Weapon-%1-%2','WafCI','oHrGy','IconSParam4','innerHeight','vMwlI','tkoOy','Scene_Battle_createSpritesetFix','XuJLb','Scene_MenuBase_createCancelButton','CVMoN','Scene_Status_create','_stored_tpCostColor','faceHeight','_lastScrollBarValues','ParamChange','Enemy','_shouldPreventDefault','process_VisuMZ_CoreEngine_Settings','kSPaP','TdnKb','_bgmBuffer','areButtonsOutsideMainUI','createMenuButton','phmxH','jkcbz','HANJA','prPsh','REPLACE','expGaugeColor1','_forcedTroopView','FontWidthFix','Input_update','targetEvaRate','qjkHW','Rioxa','isNumpadPressed','makeFontSmaller','clipboard','_hideTileShadows','setMoveEasingType','buttonAssistCancel','SajpB','XParamVocab3','ALWAYS','([\x5c+\x5c-]\x5cd+)([%％])>','CodeJS','_offsetX','hideButtonFromView','ButtonHeight','_baseTexture','1023737neaqVA','Scene_Map_initialize','Click\x20\x22Copy\x20Page\x22\x20from\x20another\x20tileset\x27s\x20pages','ShiftR_Toggle','getButtonAssistLocation','status','\x5c}❪TAB❫\x5c{','focus','initVisuMZCoreEngine','sQkCy','WARNING:\x20%1\x20has\x20already\x20been\x20declared\x0aand\x20cannot\x20be\x20used\x20as\x20a\x20Quick\x20JS\x20Function','_fauxAnimationQueue','QoL','_addShadow','Game_BattlerBase_initMembers','GetParamIcon','KNhig','VariableJsBlock','(\x5cd+)>','INOUTCIRC','isGamepadConnected','EghZv','RYETN','buttonAssistText2','INOUTBOUNCE','Symbol','isFauxAnimationPlaying','reserveCommonEvent','isActor','YyIiR','loadTitle1','offOpacity','_stored_tpGaugeColor1','ColorExpGauge1','blendFunc','Scene_GameEnd_createBackground','eBxyI','VisuMZ_1_BattleCore','IconParam4','OUTSINE','CLEAR','buyWindowRect','exportAllMapStrings','max','globalAlpha','bgsVolume','fadeSpeed','Window_Base_destroyContents','STENCIL_BUFFER_BIT','moveMenuButtonSideButtonLayout','subtitle','gUJyh','OPEN_BRACKET','MRF','Sprite_Gauge_currentValue','areTileShadowsHidden','ItemStyle','forceOutOfPlaytest','isPlaytest','Scene_Boot_loadSystemImages','Scene_Equip_create','fdKQt','CAPSLOCK','RowSpacing','ColorMaxLvGauge2','〘Common\x20Event\x20%1:\x20%2〙\x20Start','bitmapHeight','setValue','Game_Picture_move','Game_Picture_scaleY','DashToggleR','_stored_powerDownColor','CXtZr','bgmVolume','INOUTQUART','F20','setCommonEvent','END','processDigitChange','drawIcon','makeCoreEngineCommandList','playBuzzer','paramValueByName','SplitEscape','Map%1.json','Spriteset_Base_isAnimationPlaying','clear','maxVert','SmartEventCollisionPriority','randomJS','updateWaitMode','members','sparamRateJS','original','_scrollBarHorz','_backSprite2','Sprite_Button_updateOpacity','updateBgsParameters','_lastOrigin','initButtonHidden','INOUTELASTIC','maxScrollY','Saved\x20file\x20as\x20%1\x20in\x20project\x20folder.','removeOnceParallelInterpreter','oYNGr','EnableJS','wqCJK','mapId','createCancelButton','DUhWX','buttonAssistKey5','MAXHP','RepositionEnemies','WIN_OEM_CUSEL','STENCIL_TEST','jAgtM','DigitGroupingExText','CACXT','operand','fillText','TEyAF','setAction','OutlineColorGauge','default','enemies','CustomParamType','Game_System_initialize','sJRRZ','DigitGroupingStandardText','drawGauge','SParamVocab4','number','normalColor','mirror','updatePictureCoordinates','jsonToZip','isOpen','%1\x0a','stypeId','YEhxF','COLON','_closing','DummyRect','Rlodu','_pressed','Upper\x20Left','guardSkillId','level','ALTGR','MRtKl','isGamepadAxisMoved','SwitchToggleRange','NUM_LOCK','hit','TgjYf','pictureButtons','autoRemovalTiming','QXLDm','EditBgType','_startPlaying','AOvkK','updateMainMultiply','PDePx','PictureEasingType','Rate','stop','createWindowLayer','alphabetic','categoryWindowRect','isArrowPressed','Graphics_centerElement','ZERO','deactivate','FucPo','tpGaugeColor2','repositionCancelButtonSideButtonLayout','_onLoad','statusWindowRect','drawCurrencyValue','IDs','Rstfd','isCancelled','MDR','KWSrT','NUMPAD2','ONE','applyForcedGameTroopSettingsCoreEngine','aCArA','drawActorNickname','Actor-%1-%2','_screenX','command122','Mirror','_muteSound','VisuMZ_2_BattleSystemBTB','Type','_subject','font-smooth','XUZLx','EnableMasking','INCIRC','QtEyS','anchorCoreEasing','MAT','ZOOM','drawItem','SceneManager_exit','itemPadding','createPointAnimation','wMpop','iconHeight','performMiss','deathColor','Spriteset_Base_update','ParamName','updateScrollBarVisibility','parseForcedGameTroopSettingsCoreEngine','BTB','setLastPluginCommandInterpreter','wybNg','updateDocumentTitle','isTouchedInsideFrame','ImprovedAccuracySystem','axes','Window_Selectable_itemRect','wlRsc','_categoryWindow','statusParamsWindowRect','Show\x20Scrolling\x20Text\x20Script\x20Error','GoldBgType','random','lastAnimationSprite','contents','mChSx','toLowerCase','Window_ShopSell_isEnabled','_centerElementCoreEngine','IconIndex','Manual','shift','cancel','HELP','FDR','paramBase','isPointAnimationPlaying','dBbhN','nlfmq','atbActive','_helpWindow','missed','ColorNormal','checkCoreEngineDisplayCenter','MAXMP','Renderer','LATIN1','IconSParam9','redQZ','Mute','ParseItemNotetags','WRtFz','MenuLayout','ColorPowerDown','height','xparamFlat2','Sprite_Button_initialize','addAnimationSpriteToContainer','switchModes','Window_NameInput_refresh','onInputBannedWords','OpenURL','LEFT','tPgBL','buttonAssistText%1','Once\x20Parallel\x20for\x20Battle\x20requires\x20VisuMZ_1_BattleCore!','DETACH_PICTURE_CONTAINER','currentClass','updatePosition','battlebacks2','gaugeHeight','startNormalGame','ColorMaxLvGauge1','GoldRect','_menuButton','createPointAnimationSprite','title','DetachBattlePictureContainer','_pageupButton','changeTextColor','escape','wholeDuration','hdPsJ','_listWindow','INSERT','gainSilentTp','Graphics','isNormalPriority','F14','\x0a\x0a\x0a\x0a\x0a','getCustomBackgroundSettings','KeyboardInput','isSceneBattle','defaultInputMode','PTB','PAUSE','titles2','match','drawActorLevel','center','IconSet','ColorManager_loadWindowskin','mainAreaTop','checkScrollBarBitmap','JyOQB','setupCoreEasing','setupBattleTestItems','_movementDuration','BoxMargin','Scene_Base_create','iJgdh','kqoFY','ScreenResolution','round','TRmLX','ShiftT_Toggle','showFauxAnimations','PGDN','blockWidth','mTSDR','batch','code','paramY','PRESERVCONVERSION(%1)','movePageButtonSideButtonLayout','DrawIcons','vEqjB','isTpb','setupScrollBarBitmap','AnimationID','SideView','nah','boxWidth','sDJcG','NewGameCommonEvent','textWidth','recoverAll','xwMHI','eva','itypeId','App','OUTQUINT','nw.gui','OkSqP','drawRightArrow','DnzmQ','teeSN','VisuMZ_1_OptionsCore','targets','cos','GHaSA','Location','doesNameContainBannedWords','statusEquipWindowRect','Scene_Battle_createSpriteset','add','AntiZoomPictures','Window_TitleCommand_selectLast','isMagical','Input_updateGamepadState','_context','PositionJS','events','stretch','drawText','SParamVocab7','ALT','drawGameTitle','charCode','animationShouldMirror','F22','maxVisibleItems','clearStencil','_clientArea','EXSEL','waiting','ZuLbi','return\x200','ARRAYSTRUCT','printError','_drawTextShadow','maxLvGaugeColor2','Game_Action_setAttack','SYUFU','NUMPAD5','Script\x20Call\x20Error','tpColor','INCUBIC','loadPicture','system','Game_BattlerBase_refresh','SystemSetFontSize','playTestShiftR','getParameter','INOUTQUINT','useDigitGroupingEx','min','OffBarOpacity','OUTBOUNCE','CEV','measureTextWidth','GDxcx','parameters','Enable','_coreEasing','filter','command357','buttonAssistWindowRect','XParamVocab2','aYlhF','processAlwaysEscape','dGEsl','maxItems','SParamVocab8','NUMPAD7','scrollX','showIncompleteTilesetError','top','hKLdv','runCombinedScrollingTextAsCode','ButtonFadeSpeed','setBattleSystem','Window_NameInput_cursorDown','《《《\x20Page\x20%1\x20》》》\x0a%2\x0a','maxScrollX','drawActorClass','Bitmap_resize','goto','originalJS','TimeProgress','setEnemyAction','FadeSpeed','Actor','loadTitle2','WMntk','WindowLayer_render','Item-%1-%2','removeChild','mjyfP','CCZKk','mDNaX','KSMyf','ExportStrFromAllTroops','WIN_ICO_CLEAR','qyUWn','aWoMx','_inputString','isEnabled','meVolume','PERCENT','zoomScale','WIN_OEM_FJ_JISHO','buttonAssistKey1','_onError','crisisColor','onload','setBackgroundOpacity','PositionX','AGI','HrlDH','drawBackground','xparamPlus','_targetOffsetX','createCustomBackgroundImages','isOpenAndActive','SELECT','wtypeId','ATK','skills','buttonAssistOffset4','RAzby','activate','jxPbz','initialBattleSystem','GNCvT','Gold','KCiIb','CYkrC','processEscape','scrollbarHeight','child_process','_isButtonHidden','DrawItemBackgroundJS','transform','ActorMPColor','EQUALS','SlotBgType','updateAnchor','floor','Sprite_Picture_updateOrigin','_animationSprites','EnableNumberInput','cvyJM','_pointAnimationSprites','RxMcZ','_lastX','create','tileHeight','drawIconBySize','DOUBLE_QUOTE','AtqQH','setupValueFont','WQyCv','MIN_SAFE_INTEGER','BTestItems','_lastPluginCommandInterpreter','_onceParallelInterpreters','gaugeLineHeight','CustomParam','braGr','oZqEP','stringKeyMap','VisuMZ_2_BattleSystemPTB','_colorCache','150633ehpZaH','NumberBgType','WIN_OEM_FJ_ROYA','Flat1','EquipMenu','processCursorMoveModernControls','PixelateImageRendering','length','createPointAnimationQueue','Game_Interpreter_PluginCommand','alwaysDash','BNGls','mev','Scene_Map_updateMainMultiply','qjStZ','_texture','Scene_Boot_onDatabaseLoaded','bLguX','right','requestPointAnimation','ZtPTg','_customModified','ParseClassNotetags','advanced','RTDMx','_playTestFastMode','Linear','_updateFilterArea','#%1','nickname','ZLfHf','loadWindowskin','getInputButtonString','Game_Picture_updateMove','HlSya','WIN_OEM_PA2','useFontWidthFix','Sprite_destroy','sparamPlus','Window_Selectable_cursorUp','layoutSettings','deselect','drawGameVersion','refreshDimmerBitmap','ARRAYFUNC','SEMICOLON','ShortcutScripts','start','_cache','gainGold','FunctionName','opacity','maxCols','en-US','CNT','fillRect','textAlign','setAnglePlusData','flush','cancelShowButton','FINAL','isActiveTpb','MCR','sparamRate1','Scene_Map_updateMain','expParams','REC','ParseStateNotetags','ZIxig','Bitmap_strokeRect','enabled','_stored_gaugeBackColor','_realScale','Sprite_AnimationMV_updatePosition','isBottomHelpMode','Graphics_printError','eALGv','showDevTools','jEjpq','sINxf','Scene_Unlisted','setupCoreEngine','cpqrb','setupNewGame','createFauxAnimationQueue','exec','_stored_ctGaugeColor1','paramchangeTextColor','_targets','ScaleY','actor','Scene_Battle_createSpriteset_detach','valueOutlineWidth','_displayX','rLcYJ','ColSpacing','juPeD','QVEHS','exit','_timerSprite','eckve','Color','loadSystem','VisuMZ_2_BattleSystemFTB','ScreenShake','tURpn','MEVsR','XParamVocab6','isNextScene','RPGMAKER_VERSION','IconXParam7','vertical','oAGoa','removePointAnimation','tileWidth','catchNormalError','AVnLj','viewport','F7key','paramPlus','initMembersCoreEngine','UBzUY','HQZwR','AMPERSAND','LineHeight','updateScrollBarPosition','iOfaB','createCommandWindow','fMcWU','_commonEventLayers','ONBqp','ParseActorNotetags','battlebacks1','_commandList','bgs','buttonAssistText4','getLastPluginCommandInterpreter','note','_stored_mpCostColor','_playtestF7Looping','responseText','CommandRect','paramFlatJS','_changingClass','itemLineRect','characters','_stored_maxLvGaugeColor2','MRG','updatePositionCoreEngineShakeRand','Bitmap_fillRect','makeDocumentTitle','Game_Map_scrollUp','render','Spriteset_Base_destroy','format','drawNewParam','_stored_mpGaugeColor2','isTriggered','updateDashToggle','makeInputButtonString','EndingID','%1〘Choice\x20Cancel〙%1','updatePositionCoreEngineShakeVert','Window_NameInput_processHandling','sparamFlat2','contains','actorWindowRect','_sideButtonLayout','Game_Temp_initialize','createPointAnimationTargets','isDying','mainFontSize','CNSGM','active','Bitmap_drawCircle','isExpGaugeDrawn','ceil','removeAllFauxAnimations','FnSmg','image-rendering','SceneManager_initialize','ZQnal','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','position','JcZUg','_lastGamepad','TCR','SwitchToggleOne','SceneManager_onKeyDown','onKeyDownKeysF6F7','WIN_OEM_FJ_TOUROKU','Window_Base_drawIcon','vcEkv','_maxDigits','_startLoading','SystemSetBattleSystem','canAttack','processCursorMove','_targetY','_inputWindow','toFixed','showPicture','initialLevel','MkFWl','paramRate','targetBackOpacity','270MvCQhr','ColorCrisis','TargetAngle','touchUI','Window','_battlerName','MultiKeyFmt','YbUXZ','CRI','ENTER','OptionsMenu','_gamepadWait','buttonAssistKey4','helpAreaHeight','contentsBack','down','targetObjects','SkillTypeRect','tpuOu','sparamFlatJS','CANCEL','ImMlN','isMapScrollLinked','aDBoP','DEF','BarBodyColor','XepXs','OutlineColorDmg','loadGameImagesCoreEngine','BottomButtons','retrieveFauxAnimation','Center','changeClass','_moveEasingType','end','ShowJS','pointY','qrInQ','TextManager_param','log','itemEva','rgba(0,\x200,\x200,\x201.0)','battleSystem','sceneTerminationClearEffects','Game_Actor_levelUp','isCollidedWithEvents','MAX_SAFE_INTEGER','writeText','_statusWindow','QUOTE','80NUxQpS','tRqgn','drawTextTopAligned','buttonAssistText5','allTiles','Scene_Options_create','setCoreEngineUpdateWindowBg','centerY','ZRuPt','BarThickness','Game_Party_consumeItem','WsPZv','isHandled','\x5c}❪SHIFT❫\x5c{','wypWj','HelpRect','call','normal','paramFlat','WIN_OEM_FJ_MASSHOU','_action','hEfPN','asin','ACCEPT','down2','setHandler','scrollUp','VisuMZ_2_BattleSystemOTB','makeCommandList','IconXParam1','WIN_OEM_COPY','buttonAssistWindowSideRect','cfnql','NewGameCommonEventAll','FblFm','bind','mainAreaHeight','pictures','paramMaxJS','offColor','Window_Base_drawFace','Keyboard','F18','FmtTh','smoothSelect','TextJS','Scene_Menu_create','_upArrowSprite','coreEngineRepositionEnemies','cLIsO','ExtDisplayedParams','pressed','IconXParam3','adjustSprite','Gfrft','setLastGamepadUsed','_destroyCanvas','PvogB','NUMPAD9','ColorTPGauge2','toLocaleString','storeMapData','paramRate1','checkSmartEventCollision','onInputOk','mainAreaHeightSideButtonLayout','OkText','calcEasing','updatePositionCoreEngine','bopSO','xparamPlus1','OfKLm','《《《\x20Event\x20%1:\x20%2,\x20Page\x20%3\x20》》》\x0a%4\x0a','NoTileShadows','isItem','RiIEE','PageChange','Game_Actor_changeClass','ParamArrow','IGFRO','Window_Selectable_drawBackgroundRect','paramRate2','SwitchActorText','_dimmerSprite','up2','Scene_Name_create','Game_Action_updateLastTarget','CrisisRate','trim','VOLUME_MUTE','_destroyInternalTextures','commandWindowRows','updateOpen','abs','ColorPowerUp','numberWindowRect','DataManager_setupNewGame','updateShadow','_numberWindow','ShopMenu','ETB','maxLevel','outlineColorGauge','process_VisuMZ_CoreEngine_RegExp','NUMPAD1','RepositionEnemies130','ARRAYEVAL','CLOSE_BRACKET','version','encounterStepsMinimum','consumeItem','itemBackColor2','oRvoc','gameTitle','processKeyboardDigitChange','ColorMPCost','yJafM','CommonEventID','NkbDS','CustomParamIcons','Opacity','OpenSpeed','gLeWa','JEAvm','remove','offset','stencilOp','toUpperCase','Scene_Shop_create','Game_Map_setup','LevelUpFullHp','MqubT','AdjustAngle','ItemPadding','gaugeRate','Window_MapName_refresh','2234484PPZiSH','centerSprite','_updateGamepadState','Game_Map_scrollDown','CommandList','maxLvGaugeColor1','xparam','_currentMap','ebBjV','_isPlaytest','jPSsM','ParseTilesetNotetags','ParseArmorNotetags','removeAnimation','concat','WIN_ICO_00','optionsWindowRect','createFauxAnimation','itemRect','getControllerInputButtonMatch','wait','keyMapper','drawCharacter','loadMapData','font','Flat2','addLoadListener','pepdA','needsUpdate','cfqft','GucRv','8YebRER','drawParamText','constructor','titleCommandWindow','command105','endAnimation','XParamVocab1','easingType','_actor','fuVDZ','Max','ePftw','optSideView','terminate','isFullDocumentTitle','resetBattleSystem','FTB','ConvertNumberToString','processTimingData','JoSAW','bMlsf','maxTp','getLastUsedGamepadType','_anchor','_commandWindow','updateKeyText','COMMA','_buyWindow','clamp','MapNameTextCode','ASTERISK','_actorWindow','OUTQUART','loadBitmap','home','Finish','Scene_MenuBase_mainAreaTop','outlineColor','0.00','getControllerInputButtonString','ULGjs','ModernControls','DisplayedParams','HelpBgType','drawActorExpGauge','AutoScrollLockY','hocnX','isGamepadTriggered','drawValue','drawCircle','pages','paintOpacity','TextFmt','processKeyboardHome','_digitGrouping','eVTBE','ColorHPGauge1','ParamMax','setActorHome'];_0x149d=function(){return _0x3761a4;};return _0x149d();}Window_PictureCoordinates['prototype']=Object['create'](Window_Base[_0x29d580(0x356)]),Window_PictureCoordinates[_0x29d580(0x356)][_0x29d580(0x8e5)]=Window_PictureCoordinates,Window_PictureCoordinates[_0x29d580(0x356)]['initialize']=function(){const _0x3921e0=_0x29d580;this[_0x3921e0(0x594)]=_0x3921e0(0x685),this[_0x3921e0(0x729)]=_0x3921e0(0x685),this[_0x3921e0(0x9ec)]=_0x3921e0(0x685);const _0x492253=this[_0x3921e0(0x3da)]();Window_Base[_0x3921e0(0x356)]['initialize'][_0x3921e0(0x84c)](this,_0x492253),this[_0x3921e0(0x196)](0x2);},Window_PictureCoordinates[_0x29d580(0x356)]['windowRect']=function(){const _0x49153e=_0x29d580;let _0x1ef103=0x0,_0x53cf3a=Graphics[_0x49153e(0x638)]-this[_0x49153e(0x29f)](),_0xee9d88=Graphics['width'],_0x5729a5=this['lineHeight']();return new Rectangle(_0x1ef103,_0x53cf3a,_0xee9d88,_0x5729a5);},Window_PictureCoordinates['prototype']['updatePadding']=function(){const _0x3b3144=_0x29d580;this[_0x3b3144(0x46a)]=0x0;},Window_PictureCoordinates[_0x29d580(0x356)][_0x29d580(0x24e)]=function(){const _0x44dc75=_0x29d580;Window_Base[_0x44dc75(0x356)]['update'][_0x44dc75(0x84c)](this),this['updateData']();},Window_PictureCoordinates[_0x29d580(0x356)][_0x29d580(0x266)]=function(){const _0xf4f1b9=_0x29d580;if(!this[_0xf4f1b9(0x8e0)]())return;this[_0xf4f1b9(0x4bc)]();},Window_PictureCoordinates[_0x29d580(0x356)][_0x29d580(0x8e0)]=function(){const _0x4c0b3c=_0x29d580,_0x128757=$gameTemp[_0x4c0b3c(0x499)],_0x256013=$gameScreen[_0x4c0b3c(0x257)](_0x128757);if(_0x256013){if(_0x4c0b3c(0x53b)==='sQkCy')return this[_0x4c0b3c(0x594)]!==_0x256013[_0x4c0b3c(0x3e0)]||this[_0x4c0b3c(0x729)]!==_0x256013['_x']||this[_0x4c0b3c(0x9ec)]!==_0x256013['_y'];else this[_0x4c0b3c(0x4bc)](),_0x3518eb[_0x4c0b3c(0x98c)](),this[_0x4c0b3c(0x22a)]===_0x4c0b3c(0x5ad)?this['select'](0x0):this[_0x4c0b3c(0x332)](-0x1);}else return![];},Window_PictureCoordinates[_0x29d580(0x356)][_0x29d580(0x4bc)]=function(){const _0x2bd65d=_0x29d580;this[_0x2bd65d(0x61a)][_0x2bd65d(0x588)]();const _0xb7c4bf=$gameTemp['_pictureCoordinatesMode'],_0x1403a4=$gameScreen[_0x2bd65d(0x257)](_0xb7c4bf);if(!_0x1403a4)return;this[_0x2bd65d(0x594)]=_0x1403a4[_0x2bd65d(0x3e0)],this['_lastX']=_0x1403a4['_x'],this[_0x2bd65d(0x9ec)]=_0x1403a4['_y'];const _0xe2e456=ColorManager['itemBackColor1']();this[_0x2bd65d(0x61a)][_0x2bd65d(0x773)](0x0,0x0,this[_0x2bd65d(0xa46)],this[_0x2bd65d(0x503)],_0xe2e456);const _0x14670d=_0x2bd65d(0x459)[_0x2bd65d(0x7d6)](_0x1403a4['_origin']===0x0?_0x2bd65d(0x5c3):_0x2bd65d(0x829)),_0x4cb278=_0x2bd65d(0x438)[_0x2bd65d(0x7d6)](_0x1403a4['_x']),_0x452b29='Y:\x20%1'['format'](_0x1403a4['_y']),_0x237aa5=_0x2bd65d(0x4b8)['format'](TextManager[_0x2bd65d(0x75c)]('cancel'));let _0xabe1b2=Math[_0x2bd65d(0x722)](this[_0x2bd65d(0xa46)]/0x4);this[_0x2bd65d(0x6a6)](_0x14670d,_0xabe1b2*0x0,0x0,_0xabe1b2),this[_0x2bd65d(0x6a6)](_0x4cb278,_0xabe1b2*0x1,0x0,_0xabe1b2,'center'),this['drawText'](_0x452b29,_0xabe1b2*0x2,0x0,_0xabe1b2,_0x2bd65d(0x665));const _0x2b041c=this[_0x2bd65d(0x3bb)](_0x237aa5)[_0x2bd65d(0x31b)],_0x3876cd=this['innerWidth']-_0x2b041c;this['drawTextEx'](_0x237aa5,_0x3876cd,0x0,_0x2b041c);},VisuMZ[_0x29d580(0x1fb)]=function(_0x4d6329){const _0x4dee46=_0x29d580;if(Utils[_0x4dee46(0x9dd)](_0x4dee46(0x951))){var _0x1f8dde=require(_0x4dee46(0x690))[_0x4dee46(0x80e)][_0x4dee46(0x31f)]();SceneManager[_0x4dee46(0x789)]();if(_0x4d6329)setTimeout(_0x1f8dde[_0x4dee46(0x539)][_0x4dee46(0x85f)](_0x1f8dde),0x190);}},VisuMZ[_0x29d580(0x981)]=function(_0x24c89e,_0x4edf26){const _0x161d1f=_0x29d580;_0x4edf26=_0x4edf26[_0x161d1f(0x8bb)]();var _0x269288=1.70158,_0x4acdd2=0.7;switch(_0x4edf26){case _0x161d1f(0x1e7):return _0x24c89e;case'INSINE':return-0x1*Math[_0x161d1f(0x697)](_0x24c89e*(Math['PI']/0x2))+0x1;case _0x161d1f(0x559):return Math[_0x161d1f(0xa44)](_0x24c89e*(Math['PI']/0x2));case'INOUTSINE':return-0.5*(Math['cos'](Math['PI']*_0x24c89e)-0x1);case'INQUAD':return _0x24c89e*_0x24c89e;case'OUTQUAD':return _0x24c89e*(0x2-_0x24c89e);case _0x161d1f(0x496):return _0x24c89e<0.5?0x2*_0x24c89e*_0x24c89e:-0x1+(0x4-0x2*_0x24c89e)*_0x24c89e;case _0x161d1f(0x6bd):return _0x24c89e*_0x24c89e*_0x24c89e;case _0x161d1f(0xa38):var _0x424e31=_0x24c89e-0x1;return _0x424e31*_0x424e31*_0x424e31+0x1;case _0x161d1f(0x26d):return _0x24c89e<0.5?0x4*_0x24c89e*_0x24c89e*_0x24c89e:(_0x24c89e-0x1)*(0x2*_0x24c89e-0x2)*(0x2*_0x24c89e-0x2)+0x1;case'INQUART':return _0x24c89e*_0x24c89e*_0x24c89e*_0x24c89e;case _0x161d1f(0x903):var _0x424e31=_0x24c89e-0x1;return 0x1-_0x424e31*_0x424e31*_0x424e31*_0x424e31;case _0x161d1f(0x57c):var _0x424e31=_0x24c89e-0x1;return _0x24c89e<0.5?0x8*_0x24c89e*_0x24c89e*_0x24c89e*_0x24c89e:0x1-0x8*_0x424e31*_0x424e31*_0x424e31*_0x424e31;case'INQUINT':return _0x24c89e*_0x24c89e*_0x24c89e*_0x24c89e*_0x24c89e;case _0x161d1f(0x68f):var _0x424e31=_0x24c89e-0x1;return 0x1+_0x424e31*_0x424e31*_0x424e31*_0x424e31*_0x424e31;case _0x161d1f(0x6c4):var _0x424e31=_0x24c89e-0x1;return _0x24c89e<0.5?0x10*_0x24c89e*_0x24c89e*_0x24c89e*_0x24c89e*_0x24c89e:0x1+0x10*_0x424e31*_0x424e31*_0x424e31*_0x424e31*_0x424e31;case'INEXPO':if(_0x24c89e===0x0)return 0x0;return Math[_0x161d1f(0x96f)](0x2,0xa*(_0x24c89e-0x1));case _0x161d1f(0x33c):if(_0x24c89e===0x1)return _0x161d1f(0x635)===_0x161d1f(0x2fd)?!![]:0x1;return-Math['pow'](0x2,-0xa*_0x24c89e)+0x1;case'INOUTEXPO':if(_0x24c89e===0x0||_0x24c89e===0x1)return _0x24c89e;var _0x107f97=_0x24c89e*0x2,_0x5ce612=_0x107f97-0x1;if(_0x107f97<0x1){if('QtEyS'!==_0x161d1f(0x5fb)){if(this[_0x161d1f(0x9c0)]===_0xa37c5f)this['initRotationCoreEngine']();this[_0x161d1f(0x9c0)][_0x161d1f(0x228)]=_0x1fa2b3||0x0,this['_anglePlus'][_0x161d1f(0x9d0)]=_0x2101e4||0x0,this[_0x161d1f(0x9c0)][_0x161d1f(0x653)]=_0x568890||0x0,this[_0x161d1f(0x9c0)]['easingType']=_0x4066e4||'Linear',_0x137318<=0x0&&(this[_0x161d1f(0x9c0)]['current']=this[_0x161d1f(0x9c0)]['target']);}else return 0.5*Math['pow'](0x2,0xa*_0x5ce612);}return 0.5*(-Math[_0x161d1f(0x96f)](0x2,-0xa*_0x5ce612)+0x2);case _0x161d1f(0x5fa):var _0x107f97=_0x24c89e/0x1;return-0x1*(Math['sqrt'](0x1-_0x107f97*_0x24c89e)-0x1);case _0x161d1f(0x2c1):var _0x424e31=_0x24c89e-0x1;return Math['sqrt'](0x1-_0x424e31*_0x424e31);case _0x161d1f(0x545):var _0x107f97=_0x24c89e*0x2,_0x5ce612=_0x107f97-0x2;if(_0x107f97<0x1)return-0.5*(Math[_0x161d1f(0x3b8)](0x1-_0x107f97*_0x107f97)-0x1);return 0.5*(Math['sqrt'](0x1-_0x5ce612*_0x5ce612)+0x1);case'INBACK':return _0x24c89e*_0x24c89e*((_0x269288+0x1)*_0x24c89e-_0x269288);case _0x161d1f(0x330):var _0x107f97=_0x24c89e/0x1-0x1;return _0x107f97*_0x107f97*((_0x269288+0x1)*_0x107f97+_0x269288)+0x1;break;case _0x161d1f(0x1b5):var _0x107f97=_0x24c89e*0x2,_0x2d61fa=_0x107f97-0x2,_0x775835=_0x269288*1.525;if(_0x107f97<0x1){if(_0x161d1f(0x60d)!==_0x161d1f(0x60d))_0x1ca910[_0x161d1f(0x191)]['Bitmap_strokeRect'][_0x161d1f(0x84c)](this,_0x392af8,_0x5b27cf,_0x640d4b,_0xf86b7c,_0x3a22ee),this[_0x161d1f(0x40a)]();else return 0.5*_0x107f97*_0x107f97*((_0x775835+0x1)*_0x107f97-_0x775835);}return 0.5*(_0x2d61fa*_0x2d61fa*((_0x775835+0x1)*_0x2d61fa+_0x775835)+0x2);case'INELASTIC':if(_0x24c89e===0x0||_0x24c89e===0x1)return _0x24c89e;var _0x107f97=_0x24c89e/0x1,_0x5ce612=_0x107f97-0x1,_0x38d234=0x1-_0x4acdd2,_0x775835=_0x38d234/(0x2*Math['PI'])*Math[_0x161d1f(0x852)](0x1);return-(Math[_0x161d1f(0x96f)](0x2,0xa*_0x5ce612)*Math['sin']((_0x5ce612-_0x775835)*(0x2*Math['PI'])/_0x38d234));case'OUTELASTIC':var _0x38d234=0x1-_0x4acdd2,_0x107f97=_0x24c89e*0x2;if(_0x24c89e===0x0||_0x24c89e===0x1){if(_0x161d1f(0x7b6)==='mjmfz')_0x1b4d27=_0x38c2ee[_0x161d1f(0x55d)](_0x331854,_0x2ebd08);else return _0x24c89e;}var _0x775835=_0x38d234/(0x2*Math['PI'])*Math['asin'](0x1);return Math[_0x161d1f(0x96f)](0x2,-0xa*_0x107f97)*Math[_0x161d1f(0xa44)]((_0x107f97-_0x775835)*(0x2*Math['PI'])/_0x38d234)+0x1;case _0x161d1f(0x596):var _0x38d234=0x1-_0x4acdd2;if(_0x24c89e===0x0||_0x24c89e===0x1){if(_0x161d1f(0x26f)===_0x161d1f(0x26f))return _0x24c89e;else{if(!this[_0x161d1f(0x734)])return;for(const _0x1baaed of this[_0x161d1f(0x734)]){_0x1baaed&&_0x1baaed[_0x161d1f(0x24e)]();}}}var _0x107f97=_0x24c89e*0x2,_0x5ce612=_0x107f97-0x1,_0x775835=_0x38d234/(0x2*Math['PI'])*Math[_0x161d1f(0x852)](0x1);if(_0x107f97<0x1)return-0.5*(Math['pow'](0x2,0xa*_0x5ce612)*Math[_0x161d1f(0xa44)]((_0x5ce612-_0x775835)*(0x2*Math['PI'])/_0x38d234));return Math['pow'](0x2,-0xa*_0x5ce612)*Math['sin']((_0x5ce612-_0x775835)*(0x2*Math['PI'])/_0x38d234)*0.5+0x1;case _0x161d1f(0x6c8):var _0x107f97=_0x24c89e/0x1;if(_0x107f97<0x1/2.75)return 7.5625*_0x107f97*_0x107f97;else{if(_0x107f97<0x2/2.75){var _0x2d61fa=_0x107f97-1.5/2.75;return 7.5625*_0x2d61fa*_0x2d61fa+0.75;}else{if(_0x107f97<2.5/2.75){if('eOLmp'==='pUIrl')_0x290f46[_0x161d1f(0x46d)](),_0x1cd1ea[_0x161d1f(0x265)]=new _0x56790d(),_0x276874[_0x161d1f(0x47a)](_0x5f4686['_pictureCoordinatesWindow']);else{var _0x2d61fa=_0x107f97-2.25/2.75;return 7.5625*_0x2d61fa*_0x2d61fa+0.9375;}}else{if(_0x161d1f(0x16e)!=='QInQm')return _0x438ab1['layoutSettings'][_0x161d1f(0x9f7)][_0x161d1f(0x84c)](this);else{var _0x2d61fa=_0x107f97-2.625/2.75;return 7.5625*_0x2d61fa*_0x2d61fa+0.984375;}}}}case'INBOUNCE':var _0x2ecbee=0x1-VisuMZ['ApplyEasing'](0x1-_0x24c89e,_0x161d1f(0x1ac));return _0x2ecbee;case _0x161d1f(0x54a):if(_0x24c89e<0.5){if(_0x161d1f(0x5c1)===_0x161d1f(0x5c1))var _0x2ecbee=VisuMZ[_0x161d1f(0x981)](_0x24c89e*0x2,'inbounce')*0.5;else return'';}else{if('SCLpZ'===_0x161d1f(0x49e)){this[_0x161d1f(0x451)](),this[_0x161d1f(0x61a)][_0x161d1f(0x588)](),this['contents'][_0x161d1f(0x946)]=_0x3f13ea[_0x161d1f(0x191)][_0x161d1f(0xa48)][_0x161d1f(0x715)][_0x161d1f(0x1c4)];const _0x5bf3cd=_0x5b0495['CoreEngine'][_0x161d1f(0xa48)][_0x161d1f(0x715)][_0x161d1f(0x98a)],_0x2d182b=this[_0x161d1f(0x7cc)](0x0);if(_0x5bf3cd>0x0){const _0x13c7b3=_0x2d182b['y']+(this[_0x161d1f(0x29f)]()-_0x264be3[_0x161d1f(0x604)])/0x2;this[_0x161d1f(0x581)](_0x5bf3cd,_0x2d182b['x'],_0x13c7b3);const _0x143a5f=_0x6e732e[_0x161d1f(0x4cd)]+0x4;_0x2d182b['x']+=_0x143a5f,_0x2d182b[_0x161d1f(0x31b)]-=_0x143a5f;}this[_0x161d1f(0x651)](_0x12ecc3[_0x161d1f(0x298)]()),this[_0x161d1f(0x6a6)](this[_0x161d1f(0x302)](),_0x2d182b['x'],_0x2d182b['y'],_0x2d182b['width'],_0x161d1f(0x1a5));const _0x195cf6=this[_0x161d1f(0x689)](this[_0x161d1f(0x302)]())+0x6;;_0x2d182b['x']+=_0x195cf6,_0x2d182b[_0x161d1f(0x31b)]-=_0x195cf6,this[_0x161d1f(0x22b)]();const _0x5e8246=this['value'](),_0x17cb5b=this[_0x161d1f(0x689)](this[_0x161d1f(0x919)]?_0x26df9d[_0x161d1f(0x235)](this['value']()):this[_0x161d1f(0x230)]());_0x17cb5b>_0x2d182b[_0x161d1f(0x31b)]?this[_0x161d1f(0x6a6)](_0x191dd8['CoreEngine'][_0x161d1f(0xa48)]['Gold']['GoldOverlap'],_0x2d182b['x'],_0x2d182b['y'],_0x2d182b[_0x161d1f(0x31b)],_0x161d1f(0x74e)):this[_0x161d1f(0x6a6)](this[_0x161d1f(0x230)](),_0x2d182b['x'],_0x2d182b['y'],_0x2d182b['width'],'right'),this[_0x161d1f(0x451)]();}else var _0x2ecbee=VisuMZ[_0x161d1f(0x981)](_0x24c89e*0x2-0x1,_0x161d1f(0x1ac))*0.5+0.5;}return _0x2ecbee;default:return _0x24c89e;}},VisuMZ[_0x29d580(0x541)]=function(_0x1eb1f2){const _0xce5f1d=_0x29d580;_0x1eb1f2=String(_0x1eb1f2)[_0xce5f1d(0x8bb)]();const _0x250f1e=VisuMZ['CoreEngine']['Settings'][_0xce5f1d(0x3ce)];if(_0x1eb1f2===_0xce5f1d(0x5a1))return _0x250f1e['IconParam0'];if(_0x1eb1f2==='MAXMP')return _0x250f1e['IconParam1'];if(_0x1eb1f2==='ATK')return _0x250f1e['IconParam2'];if(_0x1eb1f2===_0xce5f1d(0x822))return _0x250f1e['IconParam3'];if(_0x1eb1f2===_0xce5f1d(0x5fd))return _0x250f1e[_0xce5f1d(0x558)];if(_0x1eb1f2===_0xce5f1d(0x212))return _0x250f1e['IconParam5'];if(_0x1eb1f2===_0xce5f1d(0x704))return _0x250f1e[_0xce5f1d(0x417)];if(_0x1eb1f2===_0xce5f1d(0x2dc))return _0x250f1e[_0xce5f1d(0x2c7)];if(_0x1eb1f2===_0xce5f1d(0x239))return _0x250f1e[_0xce5f1d(0x9ef)];if(_0x1eb1f2===_0xce5f1d(0x4b0))return _0x250f1e[_0xce5f1d(0x859)];if(_0x1eb1f2===_0xce5f1d(0x812))return _0x250f1e[_0xce5f1d(0x466)];if(_0x1eb1f2===_0xce5f1d(0x6c9))return _0x250f1e[_0xce5f1d(0x870)];if(_0x1eb1f2==='MEV')return _0x250f1e[_0xce5f1d(0x442)];if(_0x1eb1f2===_0xce5f1d(0x567))return _0x250f1e[_0xce5f1d(0x399)];if(_0x1eb1f2==='CNT')return _0x250f1e['IconXParam6'];if(_0x1eb1f2===_0xce5f1d(0x1e0))return _0x250f1e[_0xce5f1d(0x7aa)];if(_0x1eb1f2===_0xce5f1d(0x7cf))return _0x250f1e['IconXParam8'];if(_0x1eb1f2==='TRG')return _0x250f1e['IconXParam9'];if(_0x1eb1f2===_0xce5f1d(0x4c5))return _0x250f1e['IconSParam0'];if(_0x1eb1f2==='GRD')return _0x250f1e[_0xce5f1d(0x2a2)];if(_0x1eb1f2===_0xce5f1d(0x77e))return _0x250f1e['IconSParam2'];if(_0x1eb1f2===_0xce5f1d(0x3f1))return _0x250f1e[_0xce5f1d(0xa54)];if(_0x1eb1f2===_0xce5f1d(0x77a))return _0x250f1e[_0xce5f1d(0x502)];if(_0x1eb1f2==='TCR')return _0x250f1e['IconSParam5'];if(_0x1eb1f2===_0xce5f1d(0x1ea))return _0x250f1e[_0xce5f1d(0x2b5)];if(_0x1eb1f2===_0xce5f1d(0x5e8))return _0x250f1e['IconSParam7'];if(_0x1eb1f2==='FDR')return _0x250f1e[_0xce5f1d(0x457)];if(_0x1eb1f2===_0xce5f1d(0x393))return _0x250f1e[_0xce5f1d(0x631)];if(VisuMZ[_0xce5f1d(0x191)][_0xce5f1d(0x8b3)][_0x1eb1f2])return VisuMZ[_0xce5f1d(0x191)][_0xce5f1d(0x8b3)][_0x1eb1f2]||0x0;return 0x0;},VisuMZ[_0x29d580(0x8f4)]=function(_0x108460,_0x3c0207,_0x26cef8){const _0x434231=_0x29d580;if(_0x26cef8===undefined&&_0x108460%0x1===0x0)return _0x108460;if(_0x26cef8!==undefined&&[_0x434231(0x5a1),'MAXMP','ATK',_0x434231(0x822),_0x434231(0x5fd),_0x434231(0x212),'AGI',_0x434231(0x2dc)]['includes'](String(_0x26cef8)[_0x434231(0x8bb)]()[_0x434231(0x894)]()))return _0x108460;_0x3c0207=_0x3c0207||0x0;if(VisuMZ[_0x434231(0x191)][_0x434231(0x4dc)][_0x26cef8]){if('mJEnb'!==_0x434231(0xa5c)){const _0x1f56eb=_0x434231(0x7ce);this[_0x434231(0x73b)]=this[_0x434231(0x73b)]||{};if(this[_0x434231(0x73b)][_0x1f56eb])return this['_colorCache'][_0x1f56eb];const _0x4379af=_0x2b936e[_0x434231(0x191)][_0x434231(0xa48)]['Color'][_0x434231(0x572)];return this[_0x434231(0x48f)](_0x1f56eb,_0x4379af);}else{if(VisuMZ[_0x434231(0x191)][_0x434231(0x5af)][_0x26cef8]===_0x434231(0x1a7))return _0x108460;else{if(_0x434231(0x181)===_0x434231(0x78b))this[_0x434231(0x1a3)]=0x1;else return String((_0x108460*0x64)['toFixed'](_0x3c0207))+'%';}}}return String((_0x108460*0x64)[_0x434231(0x804)](_0x3c0207))+'%';},VisuMZ[_0x29d580(0x235)]=function(_0x157849){const _0x3a6474=_0x29d580;_0x157849=String(_0x157849);if(!_0x157849)return _0x157849;if(typeof _0x157849!==_0x3a6474(0xa1a))return _0x157849;const _0x1a9fb9=VisuMZ[_0x3a6474(0x191)][_0x3a6474(0xa48)][_0x3a6474(0x53e)][_0x3a6474(0x3a6)]||_0x3a6474(0x771),_0x4e637a={'maximumFractionDigits':0x6};_0x157849=_0x157849[_0x3a6474(0x1ee)](/\[(.*?)\]/g,(_0x4ca2c7,_0x2654c5)=>{const _0x5c40ba=_0x3a6474;return VisuMZ[_0x5c40ba(0x93c)](_0x2654c5,'[',']');}),_0x157849=_0x157849[_0x3a6474(0x1ee)](/<(.*?)>/g,(_0xb77784,_0xf4516a)=>{const _0x5c178e=_0x3a6474;if('RxGTq'===_0x5c178e(0x2ed))return VisuMZ[_0x5c178e(0x93c)](_0xf4516a,'<','>');else this[_0x5c178e(0x919)]=_0x4943ab[_0x5c178e(0x191)][_0x5c178e(0xa48)][_0x5c178e(0x53e)][_0x5c178e(0x5b2)],this[_0x5c178e(0x297)]=_0x2ff5d2[_0x5c178e(0x191)][_0x5c178e(0xa48)]['QoL'][_0x5c178e(0x5a6)];}),_0x157849=_0x157849['replace'](/\{\{(.*?)\}\}/g,(_0x100d0e,_0x182904)=>{const _0x41ded4=_0x3a6474;return VisuMZ[_0x41ded4(0x93c)](_0x182904,'','');}),_0x157849=_0x157849[_0x3a6474(0x1ee)](/(\d+\.?\d*)/g,(_0x5bd121,_0x6e9db1)=>{const _0x4f33a0=_0x3a6474;if(_0x4f33a0(0x654)==='lpNXc')return _0x441d93['SnapshotOpacity'];else{let _0x3d7f33=_0x6e9db1;if(_0x3d7f33[0x0]==='0')return _0x3d7f33;if(_0x3d7f33[_0x3d7f33[_0x4f33a0(0x743)]-0x1]==='.')return Number(_0x3d7f33)[_0x4f33a0(0x878)](_0x1a9fb9,_0x4e637a)+'.';else{if(_0x3d7f33[_0x3d7f33[_0x4f33a0(0x743)]-0x1]===',')return Number(_0x3d7f33)[_0x4f33a0(0x878)](_0x1a9fb9,_0x4e637a)+',';else{if(_0x4f33a0(0x494)!==_0x4f33a0(0x45b))return Number(_0x3d7f33)['toLocaleString'](_0x1a9fb9,_0x4e637a);else _0x41d39b[_0x4f33a0(0x3e3)]&&(this[_0x4f33a0(0x1a3)]=_0x4f33a0(0x4d6));}}}});let _0xd9d32e=0x3;while(_0xd9d32e--){_0x157849=VisuMZ[_0x3a6474(0x3af)](_0x157849);}return _0x157849;},VisuMZ[_0x29d580(0x93c)]=function(_0x2343ec,_0x4ec7f3,_0x3fe838){const _0x145618=_0x29d580;return _0x2343ec=_0x2343ec[_0x145618(0x1ee)](/(\d)/gi,(_0x266095,_0x5881c7)=>_0x145618(0x67d)[_0x145618(0x7d6)](Number(_0x5881c7))),'%2%1%3'[_0x145618(0x7d6)](_0x2343ec,_0x4ec7f3,_0x3fe838);},VisuMZ[_0x29d580(0x3af)]=function(_0x44d172){const _0x228fdb=_0x29d580;return _0x44d172=_0x44d172[_0x228fdb(0x1ee)](/PRESERVCONVERSION\((\d+)\)/gi,(_0xdfc930,_0x37d982)=>Number(parseInt(_0x37d982))),_0x44d172;},VisuMZ['openURL']=function(_0x9ed9ec){const _0x426563=_0x29d580;SoundManager[_0x426563(0x98c)]();if(!Utils[_0x426563(0xa34)]()){if('RBwnj'===_0x426563(0x5a5))_0x5a4c83[_0x426563(0x583)]();else{const _0x3bbb01=window[_0x426563(0xa4a)](_0x9ed9ec,_0x426563(0x9ce));}}else{if(_0x426563(0x8e2)!=='GucRv'){var _0x4917a8=_0x3582e8-2.625/2.75;return 7.5625*_0x4917a8*_0x4917a8+0.984375;}else{const _0x211206=process[_0x426563(0x312)]=='darwin'?_0x426563(0xa4a):process[_0x426563(0x312)]==_0x426563(0x2f4)?'start':_0x426563(0x2af);require(_0x426563(0x71a))[_0x426563(0x791)](_0x211206+'\x20'+_0x9ed9ec);}}},VisuMZ[_0x29d580(0x280)]=function(_0x4ee0ec,_0x3e3082){const _0x20d77b=_0x29d580;if(!_0x4ee0ec)return'';const _0x35825c=_0x4ee0ec[_0x20d77b(0x1d1)]||_0x4ee0ec['id'];let _0x486e76='';if(_0x4ee0ec[_0x20d77b(0x806)]!==undefined&&_0x4ee0ec[_0x20d77b(0x759)]!==undefined){if(_0x20d77b(0x932)==='tCVmu')return _0x249822[_0x20d77b(0x191)]['Spriteset_Base_isAnimationPlaying'][_0x20d77b(0x84c)](this)||this[_0x20d77b(0x626)]();else _0x486e76=_0x20d77b(0x5ef)[_0x20d77b(0x7d6)](_0x35825c,_0x3e3082);}_0x4ee0ec[_0x20d77b(0x77d)]!==undefined&&_0x4ee0ec[_0x20d77b(0x4a6)]!==undefined&&(_0x486e76=_0x20d77b(0x238)[_0x20d77b(0x7d6)](_0x35825c,_0x3e3082));if(_0x4ee0ec[_0x20d77b(0x5bc)]!==undefined&&_0x4ee0ec['requiredWtypeId1']!==undefined){if(_0x20d77b(0x4c9)!==_0x20d77b(0x28f))_0x486e76=_0x20d77b(0xa5d)[_0x20d77b(0x7d6)](_0x35825c,_0x3e3082);else return 0x24;}if(_0x4ee0ec[_0x20d77b(0x68d)]!==undefined&&_0x4ee0ec[_0x20d77b(0x4f5)]!==undefined){if(_0x20d77b(0x7ac)!==_0x20d77b(0x7ac)){if(typeof _0x4acb25===_0x20d77b(0x323))_0x87460a['App']['quit']();}else _0x486e76=_0x20d77b(0x6ee)[_0x20d77b(0x7d6)](_0x35825c,_0x3e3082);}return _0x4ee0ec[_0x20d77b(0x70c)]!==undefined&&_0x4ee0ec[_0x20d77b(0x2b3)]===0x1&&(_0x486e76='Weapon-%1-%2'[_0x20d77b(0x7d6)](_0x35825c,_0x3e3082)),_0x4ee0ec[_0x20d77b(0x966)]!==undefined&&_0x4ee0ec[_0x20d77b(0x2b3)]>0x1&&(_0x486e76='Armor-%1-%2'['format'](_0x35825c,_0x3e3082)),_0x4ee0ec['dropItems']!==undefined&&_0x4ee0ec[_0x20d77b(0x375)]!==undefined&&(_0x486e76='Enemy-%1-%2'['format'](_0x35825c,_0x3e3082)),_0x4ee0ec[_0x20d77b(0x5ce)]!==undefined&&_0x4ee0ec['maxTurns']!==undefined&&(_0x486e76=_0x20d77b(0x96c)[_0x20d77b(0x7d6)](_0x35825c,_0x3e3082)),_0x486e76;},Game_Picture[_0x29d580(0x356)][_0x29d580(0x98e)]=function(){const _0x3e3bd5=_0x29d580;return this[_0x3e3bd5(0x8fa)];},VisuMZ['CoreEngine'][_0x29d580(0x2d4)]=Game_Picture[_0x29d580(0x356)][_0x29d580(0x48c)],Game_Picture[_0x29d580(0x356)][_0x29d580(0x48c)]=function(){const _0x52d5ce=_0x29d580;VisuMZ[_0x52d5ce(0x191)][_0x52d5ce(0x2d4)][_0x52d5ce(0x84c)](this),this[_0x52d5ce(0x8fa)]={'x':0x0,'y':0x0},this[_0x52d5ce(0xa28)]={'x':0x0,'y':0x0};},VisuMZ['CoreEngine'][_0x29d580(0x75d)]=Game_Picture[_0x29d580(0x356)][_0x29d580(0x3b0)],Game_Picture[_0x29d580(0x356)][_0x29d580(0x3b0)]=function(){const _0x5c7800=_0x29d580;this[_0x5c7800(0x721)]();const _0x269ab2=this[_0x5c7800(0x4de)];VisuMZ[_0x5c7800(0x191)][_0x5c7800(0x75d)]['call'](this),_0x269ab2>0x0&&this[_0x5c7800(0x4de)]<=0x0&&(_0x5c7800(0x955)==='dgmxR'?(_0x368882=_0x491956[_0x5c7800(0x673)](_0x681d46),_0x51060d=_0x423cbd[_0x5c7800(0x673)](_0x19bd5a),_0x59ba58=_0xf6706e['round'](_0x39a8c3),_0x18f1d8=_0x4fb07b[_0x5c7800(0x673)](_0x1238ba),_0x913e19[_0x5c7800(0x191)]['Bitmap_drawText'][_0x5c7800(0x84c)](this,_0x2318d0,_0x430382,_0x186753,_0x542460,_0x855ef9,_0x55213c),this[_0x5c7800(0x40a)]()):(this['_x']=this[_0x5c7800(0x256)],this['_y']=this[_0x5c7800(0x802)],this['_scaleX']=this[_0x5c7800(0x269)],this['_scaleY']=this[_0x5c7800(0x9d8)],this[_0x5c7800(0x186)]=this[_0x5c7800(0xa0d)],this['_anchor']&&(_0x5c7800(0x693)!==_0x5c7800(0x737)?(this[_0x5c7800(0x8fa)]['x']=this['_targetAnchor']['x'],this[_0x5c7800(0x8fa)]['y']=this[_0x5c7800(0xa28)]['y']):(this[_0x5c7800(0x650)]['x']=-0x1*(this['_pageupButton'][_0x5c7800(0x31b)]+this[_0x5c7800(0x3f7)]['width']+0x8),this[_0x5c7800(0x3f7)]['x']=-0x1*(this[_0x5c7800(0x3f7)][_0x5c7800(0x31b)]+0x4)))));},VisuMZ[_0x29d580(0x191)][_0x29d580(0x4bd)]=Game_Picture[_0x29d580(0x356)][_0x29d580(0x17c)],Game_Picture[_0x29d580(0x356)]['show']=function(_0x18edb8,_0x289cd0,_0x684322,_0x4005d9,_0x369b74,_0x1e8d99,_0x348422,_0x178a4b){const _0x1c66c5=_0x29d580;VisuMZ['CoreEngine'][_0x1c66c5(0x4bd)][_0x1c66c5(0x84c)](this,_0x18edb8,_0x289cd0,_0x684322,_0x4005d9,_0x369b74,_0x1e8d99,_0x348422,_0x178a4b),this[_0x1c66c5(0x3ed)]([{'x':0x0,'y':0x0},{'x':0.5,'y':0.5}][_0x289cd0]||{'x':0x0,'y':0x0});},VisuMZ['CoreEngine']['Game_Picture_move']=Game_Picture[_0x29d580(0x356)][_0x29d580(0x9d3)],Game_Picture[_0x29d580(0x356)][_0x29d580(0x9d3)]=function(_0xb6859b,_0x41114d,_0x35d9c4,_0x3ae23d,_0x46ecd5,_0x190fc6,_0x3c5cc3,_0x3f4e37,_0x1b40c4){const _0x50962d=_0x29d580;VisuMZ[_0x50962d(0x191)][_0x50962d(0x576)][_0x50962d(0x84c)](this,_0xb6859b,_0x41114d,_0x35d9c4,_0x3ae23d,_0x46ecd5,_0x190fc6,_0x3c5cc3,_0x3f4e37,_0x1b40c4),this[_0x50962d(0x16b)]([{'x':0x0,'y':0x0},{'x':0.5,'y':0.5}][_0xb6859b]||{'x':0x0,'y':0x0});},Game_Picture[_0x29d580(0x356)][_0x29d580(0x721)]=function(){const _0x7281bd=_0x29d580;if(this[_0x7281bd(0x4de)]>0x0){if('fafnG'===_0x7281bd(0x726)){if(!_0x4f97b8[_0x7281bd(0x191)][_0x7281bd(0xa48)][_0x7281bd(0x53e)][_0x7281bd(0x69e)])return;if(this[_0x7281bd(0x935)]===this[_0x7281bd(0x198)]['x']&&this['_cacheScaleY']===this[_0x7281bd(0x198)]['y'])return;this[_0x7281bd(0x3b6)](),this[_0x7281bd(0x935)]=this[_0x7281bd(0x198)]['x'],this['_cacheScaleY']=this[_0x7281bd(0x198)]['y'];}else this[_0x7281bd(0x8fa)]['x']=this[_0x7281bd(0x4f6)](this[_0x7281bd(0x8fa)]['x'],this[_0x7281bd(0xa28)]['x']),this[_0x7281bd(0x8fa)]['y']=this['applyEasing'](this[_0x7281bd(0x8fa)]['y'],this[_0x7281bd(0xa28)]['y']);}},Game_Picture[_0x29d580(0x356)]['setAnchor']=function(_0x16d152){const _0xa6329=_0x29d580;this['_anchor']=_0x16d152,this[_0xa6329(0xa28)]=JsonEx['makeDeepCopy'](this[_0xa6329(0x8fa)]);},Game_Picture[_0x29d580(0x356)][_0x29d580(0x16b)]=function(_0x3b8301){this['_targetAnchor']=_0x3b8301;},VisuMZ[_0x29d580(0x191)][_0x29d580(0x723)]=Sprite_Picture[_0x29d580(0x356)][_0x29d580(0x99d)],Sprite_Picture[_0x29d580(0x356)][_0x29d580(0x99d)]=function(){const _0x47717e=_0x29d580,_0x3a0ac9=this['picture']();!_0x3a0ac9[_0x47717e(0x98e)]()?'dHWsk'!==_0x47717e(0x627)?VisuMZ[_0x47717e(0x191)][_0x47717e(0x723)][_0x47717e(0x84c)](this):(this[_0x47717e(0x2a9)][_0x47717e(0x960)][_0x47717e(0x84c)](this),this[_0x47717e(0x2a9)][_0x47717e(0x6a3)][_0x47717e(0x84c)](this),this['setClickHandler'](this['_data'][_0x47717e(0x379)]['bind'](this))):(this['anchor']['x']=_0x3a0ac9[_0x47717e(0x98e)]()['x'],this[_0x47717e(0x98e)]['y']=_0x3a0ac9[_0x47717e(0x98e)]()['y']);},Game_Action[_0x29d580(0x356)][_0x29d580(0x6e8)]=function(_0x189dfd){const _0x2c533d=_0x29d580;if(_0x189dfd){const _0xd068bd=_0x189dfd[_0x2c533d(0x963)];if(_0xd068bd===0x1&&this[_0x2c533d(0x1e3)]()['attackSkillId']()!==0x1)this['setAttack']();else{if(_0xd068bd===0x2&&this[_0x2c533d(0x1e3)]()[_0x2c533d(0x5c4)]()!==0x2)_0x2c533d(0x931)!==_0x2c533d(0x931)?(_0xdfe80f[_0x2c533d(0x2c8)]=_0x43e693,_0x1d43df[_0x2c533d(0x404)]=_0x72553c[_0x2c533d(0x41b)][_0x2c533d(0x2bd)](),_0x343e1b[_0x2c533d(0x593)](_0x104506),_0x3118b1[_0x2c533d(0x9db)](_0x24d979,_0x28944f[_0x2c533d(0x404)]),_0x25e4c6['_bgsBuffer'][_0x2c533d(0x5d1)](_0x489a7d[_0x2c533d(0x404)])):this['setGuard']();else{if(_0x2c533d(0x6b2)===_0x2c533d(0x6b2))this[_0x2c533d(0xa39)](_0xd068bd);else{const _0x2fa474=this[_0x2c533d(0x4d7)],_0x21c1c7=this[_0x2c533d(0x4d7)],_0x18e5b0=this[_0x2c533d(0x226)][_0x2c533d(0x21d)]*(this[_0x2c533d(0x3d7)]?-0x1:0x1)-_0x2fa474/0x2,_0x47a949=this[_0x2c533d(0x226)]['offsetY']-_0x21c1c7/0x2,_0xcc0ca5=this[_0x2c533d(0x23b)](_0x4455cb);_0x2420e9['gl']['viewport'](_0x18e5b0+_0xcc0ca5['x'],_0x47a949+_0xcc0ca5['y'],_0x2fa474,_0x21c1c7);}}}}else this[_0x2c533d(0x588)]();},Game_Actor['prototype']['usableSkills']=function(){const _0x183832=_0x29d580;return this[_0x183832(0x70e)]()['filter'](_0x5b311d=>this['canUse'](_0x5b311d)&&this['skillTypes']()['includes'](_0x5b311d[_0x183832(0x5bc)]));},Window_Base[_0x29d580(0x356)][_0x29d580(0x3bc)]=function(){const _0x5c5640=_0x29d580;this[_0x5c5640(0x88f)]=new Sprite(),this[_0x5c5640(0x88f)][_0x5c5640(0x240)]=new Bitmap(0x0,0x0),this['_dimmerSprite']['x']=0x0,this[_0x5c5640(0x25b)](this['_dimmerSprite']);},Window_Base['prototype'][_0x29d580(0x767)]=function(){const _0x222459=_0x29d580;if(this[_0x222459(0x88f)]){const _0x4a3107=this[_0x222459(0x88f)][_0x222459(0x240)],_0x5e02bb=this[_0x222459(0x31b)],_0x399cc9=this['height'],_0x6bc98e=this[_0x222459(0x46a)],_0x4b1900=ColorManager[_0x222459(0x2c6)](),_0xdb1f74=ColorManager[_0x222459(0x4ef)]();_0x4a3107['resize'](_0x5e02bb,_0x399cc9),_0x4a3107[_0x222459(0x4fe)](0x0,0x0,_0x5e02bb,_0x6bc98e,_0xdb1f74,_0x4b1900,!![]),_0x4a3107[_0x222459(0x773)](0x0,_0x6bc98e,_0x5e02bb,_0x399cc9-_0x6bc98e*0x2,_0x4b1900),_0x4a3107['gradientFillRect'](0x0,_0x399cc9-_0x6bc98e,_0x5e02bb,_0x6bc98e,_0x4b1900,_0xdb1f74,!![]),this[_0x222459(0x88f)][_0x222459(0x4b6)](0x0,0x0,_0x5e02bb,_0x399cc9);}},Game_Actor[_0x29d580(0x356)]['makeAutoBattleActions']=function(){const _0x5a05d7=_0x29d580;for(let _0x12f3fd=0x0;_0x12f3fd<this[_0x5a05d7(0x161)]();_0x12f3fd++){if(_0x5a05d7(0x4ab)!==_0x5a05d7(0x409)){const _0xa1b8a3=this['makeActionList']();let _0x117a4d=Number[_0x5a05d7(0x731)];this['setAction'](_0x12f3fd,_0xa1b8a3[0x0]);for(const _0x2d2c50 of _0xa1b8a3){if(_0x5a05d7(0x730)!=='WQyCv')this[_0x5a05d7(0x195)][_0x5a05d7(0x701)]=null,this[_0x5a05d7(0x5e2)]();else{const _0x4bfd79=_0x2d2c50[_0x5a05d7(0xa08)]();_0x4bfd79>_0x117a4d&&(_0x117a4d=_0x4bfd79,this['setAction'](_0x12f3fd,_0x2d2c50));}}}else return this['_anchor'];}this[_0x5a05d7(0x34f)](_0x5a05d7(0x6b1));},Window_BattleItem[_0x29d580(0x356)][_0x29d580(0x6f9)]=function(_0x360bcf){const _0x45d3db=_0x29d580;return BattleManager[_0x45d3db(0x796)]()?BattleManager[_0x45d3db(0x796)]()['canUse'](_0x360bcf):Window_ItemList[_0x45d3db(0x356)]['isEnabled'][_0x45d3db(0x84c)](this,_0x360bcf);},VisuMZ[_0x29d580(0x191)]['Scene_Map_createSpritesetFix']=Scene_Map[_0x29d580(0x356)]['createSpriteset'],Scene_Map['prototype'][_0x29d580(0x1e2)]=function(){const _0x14f982=_0x29d580;VisuMZ[_0x14f982(0x191)]['Scene_Map_createSpritesetFix'][_0x14f982(0x84c)](this);const _0x56317f=this['_spriteset'][_0x14f982(0x79f)];if(_0x56317f)this['addChild'](_0x56317f);},VisuMZ[_0x29d580(0x191)]['Scene_Battle_createSpritesetFix']=Scene_Battle[_0x29d580(0x356)][_0x29d580(0x1e2)],Scene_Battle[_0x29d580(0x356)][_0x29d580(0x1e2)]=function(){const _0x5a6ff5=_0x29d580;VisuMZ[_0x5a6ff5(0x191)][_0x5a6ff5(0x506)][_0x5a6ff5(0x84c)](this);const _0x36e8e2=this[_0x5a6ff5(0x4c0)][_0x5a6ff5(0x79f)];if(_0x36e8e2)this[_0x5a6ff5(0x47a)](_0x36e8e2);},Sprite_Actor['prototype'][_0x29d580(0x24e)]=function(){const _0x3b4bb5=_0x29d580;Sprite_Battler[_0x3b4bb5(0x356)][_0x3b4bb5(0x24e)][_0x3b4bb5(0x84c)](this),this[_0x3b4bb5(0x89d)]();if(this[_0x3b4bb5(0x8eb)])this[_0x3b4bb5(0x224)]();else this[_0x3b4bb5(0x80f)]!==''&&('raeuh'===_0x3b4bb5(0x9de)?this[_0x3b4bb5(0x80f)]='':_0x103ded=_0x10302e[_0x3b4bb5(0x191)][_0x3b4bb5(0xa2f)]['call'](this));},Window[_0x29d580(0x356)]['_refreshArrows']=function(){const _0x3c876a=_0x29d580,_0x1676a7=this[_0x3c876a(0x365)],_0x16e7bf=this['_height'],_0x29a2d9=0x18,_0x1dbc8f=_0x29a2d9/0x2,_0xc14862=0x60+_0x29a2d9,_0xa70bc8=0x0+_0x29a2d9;this['_downArrowSprite'][_0x3c876a(0x240)]=this[_0x3c876a(0x2f0)],this[_0x3c876a(0x4c3)][_0x3c876a(0x98e)]['x']=0.5,this[_0x3c876a(0x4c3)]['anchor']['y']=0.5,this[_0x3c876a(0x4c3)][_0x3c876a(0x4b6)](_0xc14862+_0x1dbc8f,_0xa70bc8+_0x1dbc8f+_0x29a2d9,_0x29a2d9,_0x1dbc8f),this[_0x3c876a(0x4c3)]['move'](Math[_0x3c876a(0x673)](_0x1676a7/0x2),Math['round'](_0x16e7bf-_0x1dbc8f)),this['_upArrowSprite'][_0x3c876a(0x240)]=this[_0x3c876a(0x2f0)],this[_0x3c876a(0x86b)][_0x3c876a(0x98e)]['x']=0.5,this['_upArrowSprite']['anchor']['y']=0.5,this[_0x3c876a(0x86b)]['setFrame'](_0xc14862+_0x1dbc8f,_0xa70bc8,_0x29a2d9,_0x1dbc8f),this[_0x3c876a(0x86b)]['move'](Math[_0x3c876a(0x673)](_0x1676a7/0x2),Math[_0x3c876a(0x673)](_0x1dbc8f));},Window['prototype']['_refreshPauseSign']=function(){const _0xe5cfa7=_0x29d580,_0x2e9dfc=0x90,_0x2afafd=0x60,_0x168334=0x18;this[_0xe5cfa7(0x2c0)][_0xe5cfa7(0x240)]=this[_0xe5cfa7(0x2f0)],this[_0xe5cfa7(0x2c0)]['anchor']['x']=0.5,this[_0xe5cfa7(0x2c0)][_0xe5cfa7(0x98e)]['y']=0x1,this['_pauseSignSprite'][_0xe5cfa7(0x9d3)](Math[_0xe5cfa7(0x673)](this['_width']/0x2),this[_0xe5cfa7(0x439)]),this['_pauseSignSprite'][_0xe5cfa7(0x4b6)](_0x2e9dfc,_0x2afafd,_0x168334,_0x168334),this['_pauseSignSprite']['alpha']=0xff;},Window[_0x29d580(0x356)][_0x29d580(0x757)]=function(){const _0x394b29=_0x29d580,_0x2e980c=this[_0x394b29(0x6af)][_0x394b29(0x1cb)][_0x394b29(0x92c)](new Point(0x0,0x0)),_0x347a74=this[_0x394b29(0x6af)][_0x394b29(0xa42)];_0x347a74['x']=_0x2e980c['x']+this[_0x394b29(0xa20)]['x'],_0x347a74['y']=_0x2e980c['y']+this[_0x394b29(0xa20)]['y'],_0x347a74['width']=Math[_0x394b29(0x7ec)](this[_0x394b29(0xa46)]*this['scale']['x']),_0x347a74[_0x394b29(0x638)]=Math[_0x394b29(0x7ec)](this[_0x394b29(0x503)]*this[_0x394b29(0x198)]['y']);},Window['prototype']['_refreshBack']=function(){const _0x401a77=_0x29d580,_0x537df1=this[_0x401a77(0x1e8)],_0x2f2c92=Math[_0x401a77(0x55d)](0x0,this[_0x401a77(0x365)]-_0x537df1*0x2),_0x1dddad=Math[_0x401a77(0x55d)](0x0,this[_0x401a77(0x439)]-_0x537df1*0x2),_0x10ece6=this[_0x401a77(0x2bc)],_0x58e2ac=_0x10ece6[_0x401a77(0x386)][0x0];_0x10ece6[_0x401a77(0x240)]=this['_windowskin'],_0x10ece6[_0x401a77(0x4b6)](0x0,0x0,0x60,0x60),_0x10ece6[_0x401a77(0x9d3)](_0x537df1,_0x537df1),_0x10ece6[_0x401a77(0x198)]['x']=_0x2f2c92/0x60,_0x10ece6[_0x401a77(0x198)]['y']=_0x1dddad/0x60,_0x58e2ac[_0x401a77(0x240)]=this['_windowskin'],_0x58e2ac[_0x401a77(0x4b6)](0x0,0x60,0x60,0x60),_0x58e2ac[_0x401a77(0x9d3)](0x0,0x0,_0x2f2c92,_0x1dddad),_0x58e2ac[_0x401a77(0x198)]['x']=0x1/_0x10ece6[_0x401a77(0x198)]['x'],_0x58e2ac[_0x401a77(0x198)]['y']=0x1/_0x10ece6['scale']['y'],_0x10ece6['setColorTone'](this[_0x401a77(0x461)]);},Game_Temp['prototype'][_0x29d580(0x835)]=function(){const _0x2b5634=_0x29d580;this[_0x2b5634(0x4c7)]=[],this[_0x2b5634(0x53d)]=[],this[_0x2b5634(0x259)]=[],this[_0x2b5634(0xa0b)]=[];},VisuMZ[_0x29d580(0x191)][_0x29d580(0x921)]=Scene_Base['prototype'][_0x29d580(0x8f0)],Scene_Base[_0x29d580(0x356)][_0x29d580(0x8f0)]=function(){const _0x368b91=_0x29d580;if($gameTemp)$gameTemp[_0x368b91(0x835)]();VisuMZ['CoreEngine'][_0x368b91(0x921)][_0x368b91(0x84c)](this);},Bitmap[_0x29d580(0x356)]['measureTextWidthNoRounding']=function(_0x1ea4b8){const _0x5cd6fc=_0x29d580,_0x59e0c9=this[_0x5cd6fc(0x342)];_0x59e0c9['save'](),_0x59e0c9['font']=this[_0x5cd6fc(0x9d1)]();const _0x3da238=_0x59e0c9['measureText'](_0x1ea4b8)[_0x5cd6fc(0x31b)];return _0x59e0c9['restore'](),_0x3da238;},Window_Message[_0x29d580(0x356)][_0x29d580(0x689)]=function(_0x32770a){const _0x87e8ce=_0x29d580;if(this[_0x87e8ce(0x760)]())return this[_0x87e8ce(0x61a)]['measureTextWidthNoRounding'](_0x32770a);else{if(_0x87e8ce(0x9b9)===_0x87e8ce(0x9b9))return Window_Base[_0x87e8ce(0x356)][_0x87e8ce(0x689)]['call'](this,_0x32770a);else this[_0x87e8ce(0x63c)](_0x87e8ce(0x5ad));}},Window_Message[_0x29d580(0x356)][_0x29d580(0x760)]=function(){const _0x46decc=_0x29d580;return VisuMZ['CoreEngine']['Settings'][_0x46decc(0x53e)][_0x46decc(0x51e)]??!![];},VisuMZ['CoreEngine'][_0x29d580(0x227)]=Game_Action[_0x29d580(0x356)]['numRepeats'],Game_Action['prototype']['numRepeats']=function(){const _0x545046=_0x29d580;if(this[_0x545046(0x4f9)]()){if(_0x545046(0x355)!==_0x545046(0x603))return VisuMZ[_0x545046(0x191)][_0x545046(0x227)]['call'](this);else{if(_0x25df38[_0x545046(0x56c)]())_0x7dbcb8[_0x545046(0x831)](_0x18584a);}}else return 0x0;},VisuMZ[_0x29d580(0x191)]['Game_Action_setAttack']=Game_Action[_0x29d580(0x356)]['setAttack'],Game_Action[_0x29d580(0x356)][_0x29d580(0xa26)]=function(){const _0x23e366=_0x29d580;this[_0x23e366(0x1e3)]()&&this[_0x23e366(0x1e3)]()[_0x23e366(0x800)]()?VisuMZ[_0x23e366(0x191)]['Game_Action_setAttack'][_0x23e366(0x84c)](this):_0x23e366(0x3f0)!=='CcqKx'?this[_0x23e366(0x9a7)]={'SideView':_0xe7af05['optSideView'],'BattleSystem':this[_0x23e366(0x713)](),'FontSize':_0x42af1a[_0x23e366(0x753)][_0x23e366(0x946)],'Padding':0xc}:this[_0x23e366(0x588)]();},Sprite_Name[_0x29d580(0x356)]['bitmapHeight']=function(){return 0x24;},Sprite_Name[_0x29d580(0x356)]['redraw']=function(){const _0xe5e929=_0x29d580,_0x11aaa1=this[_0xe5e929(0xa21)](),_0x37de03=this[_0xe5e929(0x246)](),_0x587c32=this[_0xe5e929(0x574)]();this[_0xe5e929(0x9e6)](),this[_0xe5e929(0x240)]['clear'](),this[_0xe5e929(0x240)][_0xe5e929(0x83e)](_0x11aaa1,0x4,0x0,_0x37de03-0xa,_0x587c32,_0xe5e929(0x1a5));},Bitmap[_0x29d580(0x356)][_0x29d580(0x83e)]=function(_0x51d8b5,_0x1ca3d8,_0x590f02,_0x57ad36,_0x47c18b,_0x344986){const _0x349111=_0x29d580,_0x3a5e9d=this[_0x349111(0x342)],_0x3b47be=_0x3a5e9d[_0x349111(0x55e)];_0x57ad36=_0x57ad36||0xffffffff;let _0x4898f6=_0x1ca3d8,_0x53f3d1=Math[_0x349111(0x673)](_0x590f02+0x18/0x2+this[_0x349111(0x946)]*0.35);_0x344986==='center'&&(_0x349111(0x275)===_0x349111(0x8e1)?_0x48a881[_0x349111(0x4a1)][_0x349111(0x7ef)]='pixelated':_0x4898f6+=_0x57ad36/0x2),_0x344986===_0x349111(0x74e)&&(_0x4898f6+=_0x57ad36),_0x3a5e9d['save'](),_0x3a5e9d[_0x349111(0x8dc)]=this[_0x349111(0x9d1)](),_0x3a5e9d[_0x349111(0x774)]=_0x344986,_0x3a5e9d[_0x349111(0xa2e)]=_0x349111(0x5d9),_0x3a5e9d[_0x349111(0x55e)]=0x1,this[_0x349111(0x3fe)](_0x51d8b5,_0x4898f6,_0x53f3d1,_0x57ad36),_0x3a5e9d['globalAlpha']=_0x3b47be,this[_0x349111(0x1fe)](_0x51d8b5,_0x4898f6,_0x53f3d1,_0x57ad36),_0x3a5e9d['restore'](),this[_0x349111(0x531)]['update']();},VisuMZ[_0x29d580(0x191)][_0x29d580(0x9fa)]=BattleManager[_0x29d580(0x4c1)],BattleManager[_0x29d580(0x4c1)]=function(_0x3cfc2d){const _0x59244d=_0x29d580;if(this['_action'][_0x59244d(0x229)]())return![];return VisuMZ[_0x59244d(0x191)][_0x59244d(0x9fa)]['call'](this,_0x3cfc2d);},BattleManager[_0x29d580(0xa4f)]=function(){const _0x121319=_0x29d580;if(this[_0x121319(0x5f6)])this[_0x121319(0x421)]['endAction'](this['_subject']);this['_phase']=_0x121319(0x3a2),this[_0x121319(0x5f6)]&&this['_subject'][_0x121319(0x161)]()===0x0&&(_0x121319(0x90b)==='oytCR'?_0x5ae1c0+=_0x334fce:(this['endBattlerActions'](this[_0x121319(0x5f6)]),this['_subject']=null));},Bitmap[_0x29d580(0x356)][_0x29d580(0x7fe)]=function(){const _0x46387d=_0x29d580;this[_0x46387d(0x195)]=new Image(),this['_image'][_0x46387d(0x701)]=this['_onLoad'][_0x46387d(0x85f)](this),this[_0x46387d(0x195)]['onerror']=this[_0x46387d(0x6ff)][_0x46387d(0x85f)](this),this[_0x46387d(0x874)](),this[_0x46387d(0x3cc)]=_0x46387d(0x329),Utils[_0x46387d(0x2be)]()?this[_0x46387d(0x30c)]():(this['_image'][_0x46387d(0x934)]=this[_0x46387d(0x23d)],![]&&this['_image'][_0x46387d(0x31b)]>0x0&&(this[_0x46387d(0x195)][_0x46387d(0x701)]=null,this[_0x46387d(0x5e2)]()));},Scene_Skill[_0x29d580(0x356)][_0x29d580(0x9a2)]=function(){const _0x109c29=_0x29d580;Scene_MenuBase['prototype'][_0x109c29(0x9a2)]['call'](this),this[_0x109c29(0x34b)](),this['_itemWindow'][_0x109c29(0x5de)](),this['_itemWindow'][_0x109c29(0x765)](),this['_skillTypeWindow'][_0x109c29(0x711)]();},Scene_Skill[_0x29d580(0x356)]['arePageButtonsEnabled']=function(){const _0x2c3ad8=_0x29d580;return this[_0x2c3ad8(0x23f)]&&this[_0x2c3ad8(0x23f)]['active'];},Game_Map[_0x29d580(0x356)]['checkPassage']=function(_0x48512b,_0x1c93e6,_0x5e0c67){const _0x46afc8=_0x29d580,_0x21c5ca=this[_0x46afc8(0xa22)](),_0x420c64=this[_0x46afc8(0x840)](_0x48512b,_0x1c93e6);for(const _0x3bb2cd of _0x420c64){const _0x1941c2=_0x21c5ca[_0x3bb2cd];if(_0x1941c2===undefined||_0x1941c2===null){if($gameTemp[_0x46afc8(0x56c)]()&&!DataManager['isEventTest']()){let _0x39f88f=_0x46afc8(0x273)+'\x0a';_0x39f88f+=_0x46afc8(0x534)+'\x0a',_0x39f88f+=_0x46afc8(0x255);if(this[_0x46afc8(0x6da)]())alert(_0x39f88f),SceneManager[_0x46afc8(0x79e)]();else{console[_0x46afc8(0x831)](_0x39f88f);if(!$gameTemp['_showDevTools']){if(_0x46afc8(0x750)===_0x46afc8(0x254))return 0x0;else $gameTemp[_0x46afc8(0x2a4)]=!![],SceneManager['showDevTools']();}}}}if((_0x1941c2&0x10)!==0x0)continue;if((_0x1941c2&_0x5e0c67)===0x0){if(_0x46afc8(0x998)==='ScZmO')return!![];else this[_0x46afc8(0x614)][_0x46afc8(0x196)](_0x1c2895[_0x46afc8(0x764)]['CategoryBgType']);}if((_0x1941c2&_0x5e0c67)===_0x5e0c67){if(_0x46afc8(0x9cd)!=='CEvnD')_0x15dbd9['CoreEngine'][_0x46afc8(0x66f)][_0x46afc8(0x84c)](this),_0x4ceb91=this;else return![];}}return![];},Game_Map[_0x29d580(0x356)][_0x29d580(0x6da)]=function(){const _0x230e90=_0x29d580;if(Imported['VisuMZ_3_EventChainReact'])return!![];if(Imported[_0x230e90(0x489)])return!![];return![];},Sprite_Animation[_0x29d580(0x356)][_0x29d580(0x1d5)]=function(_0x333948){const _0x23437a=_0x29d580;if(!this[_0x23437a(0x448)]){if('ikQHz'===_0x23437a(0x1cf))this[_0x23437a(0x448)]=_0x333948['gl'][_0x23437a(0x6c3)](_0x333948['gl']['VIEWPORT']);else{if(_0x2ac961===_0x23437a(0x622))_0x54dcbe='escape';if(_0x16ce66===_0x23437a(0x3e2))_0x201ae0=_0x23437a(0x652);}}};