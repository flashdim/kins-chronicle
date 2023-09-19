//=============================================================================
// VisuStella MZ - Dragonbones Union
// VisuMZ_2_DragonbonesUnion.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_DragonbonesUnion = true;

var VisuMZ = VisuMZ || {};
VisuMZ.DragonbonesUnion = VisuMZ.DragonbonesUnion || {};
VisuMZ.DragonbonesUnion.version = 1.15;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.15] [DragonbonesUnion]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Dragonbones_Union_VisuStella_MZ
 * @base Public_0_Dragonbones
 * @orderAfter VisuMZ_0_CoreEngine
 * @orderAfter Public_0_Dragonbones
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * DragonBones allows your games to use skeletal animation, a type of computer
 * animation in which a character (or object) is represented by skins/textures
 * and a digital set of interconnected bones (called the skeleton). Using a set
 * of instructions, the game will create animations based off these skins,
 * skeletons, and instructions to create beautifully smooth and light-weight
 * movements.
 *
 * This plugin gives you such control over various facets of your game: the
 * battle system, event pictures, and map sprites for characters. Various
 * plugin commands, notetags, and comment tags are added through this plugin to
 * give you as much control as you need over Dragonbones from the RPG Maker MZ
 * editor itself.
 *
 * The version of Dragonbones used for this plugin is 5.7.002b.
 * More information can be found at http://dragonbones.com/
 *
 * Features include all (but not limited to) the following:
 * 
 * - Adds Dragonbones support to RPG Maker MZ.
 * - Dragonbones armatures can be used as battler sprites.
 * - Dragonbones armatures can be attached to event pictures.
 * - Dragonbones armatures can be inserted into the map as character sprites.
 * - A variety of Plugin Parameters, Notetags, and Plugin Commands to control
 *   the Dragonbones armatures and their animations.
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
 * - Dragonbones*
 *
 * *Note* You can download this library from the below URL or from the
 * Dragonbones Union product page. Install it as a Tier 0 plugin.
 *
 * URL: https://www.npmjs.com/package/pixi5-dragonbones/v/5.7.0-2b
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Dragonbones Naming
 * ============================================================================
 *
 * If you are trying to set up a Dragonbones armature through notetags, Plugin
 * Commands, etc., and are getting the error message "Cannot Read property
 * 'parent' of null", then most likely, the incorrect Dragonbones armature name
 * is being used.
 *
 * ---
 * 
 * To find the Proper Name:
 * 
 * 1. Open up the Dragonbones armature in the Dragonbones editor.
 * 
 * ---
 * 
 * 2. Open the armature's Properties.
 * 
 * ---
 * 
 * 3. Look at what the "Name:" field lists. This is the name to use with the
 *    Dragonbones Union plugin.
 * 
 * ---
 *
 * ============================================================================
 * Dragonbones Armature Behaviors
 * ============================================================================
 *
 * Dragonbones armatures have certain behaviors when used with battlers,
 * pictures, and/or map sprites.
 *
 * ---
 *
 * 1. When a Dragonbones armature is loaded, it will play the 'idle' animation
 *    or whatever is set inside the Plugin Parameters => General Settings =>
 *    Loaded Animation field upon loading. Make your Dragonbones armatures with
 *    this in mind. At other times, the 'idle' animation will be used as a base
 *    defaulting animation.
 *
 * ---
 *
 * 2. The Dragonbones armature will always be anchored at the X, Y coordinates
 *    of the target. This X, Y coordinate point will be where the root/pivot
 *    point of the Dragonbones armature will be located.
 *
 * ---
 *
 * 3. The properties used by a sprite (ie the opacity, scale, rotation, and
 *    tint) will also be shared and/or amplified with the Dragonbones armature.
 *    The exception to this will be Blend Modes aren't supported.
 *
 * ---
 *
 * ============================================================================
 * IMPORTANT!! Dragonbones Armatures as Map Sprites
 * ============================================================================
 *
 * If you plan on using Dragonbones armatures as map sprites, please keep in
 * mind that there will be certain limitations and properties regarding them,
 * which will be listed below:
 *
 * ---
 *
 * 1. Try not to use more than 99 vertices for meshes. The reason behind this
 *    is because the Dragonbones armature is added as a sprite to the game's
 *    Tilemap. Any and all sprites added to the Tilemap have some restrictions
 *    placed on them as per Pixi JS's design. The Dragonbones armatures are no
 *    exception to this.
 *
 *    If the number of vertices exceeds 99, strange things will occur to the
 *    Dragonbones armature that are outside of this plugin's control. While it
 *    won't stop the plugin from functioning properly, expected behaviors may
 *    happen due to the threshold.
 *
 * ---
 *
 * 2. When using Dragonbones armatures that are too tall or wide, they may clip
 *    into the tile layer above or to the side due to how the Tilemap works.
 *    Things that you would see happen would include clipping into the tops of
 *    trees and structures.
 *
 * ---
 *
 * 3. Certain motions will request specific animations from the Dragonbones
 *    armature. If the animations exist, it will play those motions. If they
 *    don't, the motions may request a different animation down the line. The
 *    request orders are as follows:
 *
 *    Jumping:
 *    - jump, walk, idle
 *
 *    Rope (Climbing) (Requires: VisuMZ_1_EventsMoveCore):
 *    - ropeclimb, ladderclimb, walk, ropeidle, ladderidle, idle
 *
 *    Rope (Idle) (Requires: VisuMZ_1_EventsMoveCore):
 *    - ropeidle, ladderidle, idle
 *
 *    Ladder (Climbing):
 *    - ladderclimb, walk, ladderidle, idle
 *
 *    Ladder (Idle):
 *    - ladderidle, idle
 *
 *    Dashing:
 *    - dash, walk, idle
 *
 *    Walking:
 *    - walk, idle
 *
 *    Idle:
 *    - idle
 *
 *    Name the animations for the Dragonbones armature as such to make the most
 *    out of the motion priority lists.
 *
 * ---
 *
 * 4. You can add directional animations for your Dragonbones armature motion
 *    animations. To do so, add a number after the animation's name like such:
 *    walk2, walk4, walk6, walk8. These numbers are based off the NumPad
 *    directions to determine which way to face:
 *
 *    7 8 9
 *    4   6
 *    1 2 3
 *
 *    These numbers are added onto the priority system listed in #3 above, too.
 *    Diagonal directions also become split and added multiple times for better
 *    streamlining, with a priority given to the horizontal direction before
 *    the vertical direction. For example, dashing becomes the following:
 *
 *    Dashing (Upper Left):
 *    - dash7, dash4, dash8, dash,
 *      walk7, walk4, walk8, walk,
 *      idle7, idle4, idle8, idle
 *
 *    Dashing (Right):
 *    - dash6, dash,
 *      walk6, walk,
 *      idle6, idle
 *
 * ---
 *
 * 5. When a Dragonbones armature is moving, it will animate slower or faster
 *    depending on the character's current movement speed. At speed
 *    '4: Normal', it will animation 4x faster than what's seen in Dragonbones.
 *    At speed '6: x4 Faster', it will animate 6x faster while '1: x8 Slower'
 *    will be at x1 speed seen in Dragonbones. In other words, the speed
 *    animated is equal to the number written on the left of the
 *    movement speed.
 *
 *    When dashing, that multiplier increases by 1 in order to match movement
 *    speeds and the Dragonbones armature will do the same to follow.
 *
 * ---
 *
 * You will need to create your Dragonbones armatures with these 5 key rules in
 * mind in order to make the armatures animate smoothly within your game.
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins or specific
 * features. This section will highlight the main plugins/features that will
 * not be compatible with this plugin or put focus on how the make certain
 * features compatible.
 *
 * ---
 *
 * VisuMZ_3_StateTooltips
 *
 * If you are using a Dragonbones Battler and want to apply a state tooltip to
 * it, the access area of the battler will be based on the hitbox size you
 * declare for the Dragonbones Battler with notetags. This is because all
 * Dragonbones battlers do not have innate automatically calculated hitbox
 * sizes as a result of their dynamically animated nature.
 * 
 * Please refer to the notetag section of the Dragonbones Union plugin for
 * Dragonbones Battler hitboxes to learn how to apply hitbox sizes.
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
 * ---
 *
 * === Dragonbones Battler Notetags ===
 *
 * The following notetags are to be assigned to either actors and/or enemies.
 * An assigned actor/enemy will have their original sprite hidden from view in
 * favor of the Dragonbones armature to be displayed. Use these notetags to
 * declare various settings for your Dragonbones armatures.
 *
 * ---
 *
 * <Dragonbones Battler: filename>
 *
 * - Used for: Actor, Enemy Notetags
 * - Sets the DragonBones associated with this actor/enemy to be 'filename'.
 * - The name will be associated with the assets used.
 * - It will be used to check for associated filenames that end with _ske.json,
 *   _tex.json, and _tex.png.
 * - The listed assets must be found in the assigned assets folder.
 *
 * Examples:
 *
 * <Dragonbones Battler: Demon>
 * <Dragonbones Battler: DragonBoy>
 * <Dragonbones Battler: Swordsman>
 * <Dragonbones Battler: Ubbie>
 *
 * ---
 *
 * <Dragonbones Battler Scale: x, y>
 *
 * <Dragonbones Battler Scale X: x>
 * <Dragonbones Battler Scale Y: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Sets the base scale for the Dragonbones associated with this actor/enemy.
 *   This is for those instances where a Dragonbones armature is too large or
 *   small and needs to be scaled down/up.
 * - This scale will be amplified by the actor/enemy's sprite's scale value.
 * - Use the 1st notetag to assign values to both Scale X and Scale Y.
 * - Use the 2nd/3rd notetags to assign Scale X and Y values separately.
 * - Use negative values to flip the Dragonbones armature around.
 *
 * Examples:
 * 
 * <Dragonbones Battler Scale: -0.3, 0.3>
 *
 * <Dragonbones Battler Scale X: -0.3>
 * <Dragonbones Battler Scale Y: 0.3>
 *
 * ---
 *
 * <Dragonbones Battler Offset: x, y>
 *
 * <Dragonbones Battler Offset X: x>
 * <Dragonbones Battler Offset Y: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - When a Dragonbones armature is attached to an actor/enemy's sprite, it
 *   will always be attached at the root point assigned within the Dragonbones
 *   data. If a Dragonbones armature has a root point that does not fit well
 *   with your battler sprite, you can offset it using these notetags.
 * - Replace 'x' and 'y' with number values representing how many pixels you
 *   want to offset the Dragonbones armature by.
 * - Use the 1st notetag to assign values to both Offset X and Offset Y.
 * - Use the 2nd/3rd notetags to assign Offset X and Y values separately.
 * - Use negative values to offset to the left (X) or up (Y) directions.
 *
 * Examples:
 *
 * <Dragonbones Battler Offset: -10, 5>
 *
 * <Dragonbones Battler Offset X: -10>
 * <Dragonbones Battler Offset Y: 5>
 *
 * ---
 *
 * <Dragonbones Battler Size: width, height>
 *
 * <Dragonbones Battler Width: x>
 * <Dragonbones Battler Height: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Dragonbones armatures have no standard width or height. This makes it
 *   problematic when trying to calculate the sprite's width/height for Action
 *   Sequences and the like. These notetags allow you to assign a width and
 *   height value to the sprite, despite the fact the Dragonbones armatures
 *   have no such thing.
 * - Replace 'width', 'height', or 'x' with number values representing the
 *   dimension values in pixels.
 * - Use the 1st notetag to assign values to both Width and Height.
 * - Use the 2nd/3rd notetags to assign Width and Height values separately.
 * - If these notetags aren't used, then use the values defined by default in
 *   Plugin Parameters => Battler Settings => Default => Width/Height.
 *
 * Examples:
 *
 * <Dragonbones Battler Size: 50, 100>
 *
 * <Dragonbones Battler Width: 50>
 * <Dragonbones Battler Height: 100>
 *
 * ---
 *
 * <Dragonbones Battler Time Scale: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Lets you adjust the time scale for the Dragonbones armature.
 * - Replace 'x' with a number value depicting how fast the armature should
 *   animate.
 *   - 1.0 is the default value.
 *   - Higher numbers animate faster.
 *   - Lower numbers animate slower.
 *   - If a number is too small, it may not animate at all.
 *
 * Example:
 *
 * <Dragonbones Battler Time Scale: 1.5>
 *
 * ---
 *
 * <Dragonbones Battler Motion Walk: animation>
 * <Dragonbones Battler Motion Wait: animation>
 * <Dragonbones Battler Motion Chant: animation>
 * <Dragonbones Battler Motion Guard: animation>
 * <Dragonbones Battler Motion Damage: animation>
 * <Dragonbones Battler Motion Evade: animation>
 * <Dragonbones Battler Motion Thrust: animation>
 * <Dragonbones Battler Motion Swing: animation>
 * <Dragonbones Battler Motion Missile: animation>
 * <Dragonbones Battler Motion Skill: animation>
 * <Dragonbones Battler Motion Spell: animation>
 * <Dragonbones Battler Motion Item: animation>
 * <Dragonbones Battler Motion Escape: animation>
 * <Dragonbones Battler Motion Victory: animation>
 * <Dragonbones Battler Motion Dying: animation>
 * <Dragonbones Battler Motion Abnormal: animation>
 * <Dragonbones Battler Motion Sleep: animation>
 * <Dragonbones Battler Motion Dead: animation>
 *
 * - Used for: Actor, Enemy Notetags
 * - Use these notetags to assign Dragonbones animations to play when the
 *   actor/enemy sprite is supposed to play such a motion.
 * - Replace 'animation' with the name of the Dragonbones animation.
 * - If this notetag is not used, when such a motion is rquested, it will
 *   default to attempting to play the animation name equal to the motion.
 * - Animation names do not need to be case sensitive.
 * - If no animation is found, then no animation will be played.
 *
 * Examples:
 *
 * <Dragonbones Battler Motion Wait: idle>
 * <Dragonbones Battler Motion Swing: attack>
 * <Dragonbones Battler Motion Thrust: attack>
 * <Dragonbones Battler Motion Missle: attack>
 * <Dragonbones Battler Motion Skill: special>
 * <Dragonbones Battler Motion Spell: special>
 * <Dragonbones Battler Motion Dead: defeated>
 *
 * ---
 *
 * <Dragonbones Battler Settings>
 *  Battler: filename
 *  
 *  Scale: x, y
 *
 *  Scale X: x
 *  Scale Y: x
 *
 *  Offset: x, y
 *
 *  Offset X: x
 *  Offset Y: x
 *
 *  Size: width, height
 *
 *  Width: x
 *  Height: x
 *
 *  Time Scale: x
 *
 *  Motion Walk: animation
 *  Motion Wait: animation
 *  Motion Chant: animation
 *  Motion Guard: animation
 *  Motion Damage: animation
 *  Motion Evade: animation
 *  Motion Thrust: animation
 *  Motion Swing: animation
 *  Motion Missile: animation
 *  Motion Skill: animation
 *  Motion Spell: animation
 *  Motion Item: animation
 *  Motion Escape: animation
 *  Motion Victory: animation
 *  Motion Dying: animation
 *  Motion Abnormal: animation
 *  Motion Sleep: animation
 *  Motion Dead: animation
 * </Dragonbones Battler Settings>
 *
 * - Used for: Actor, Enemy Notetags
 * - The above notetag allows to wrap up all the information you'd like to
 *   set for Dragonbones battler armatures needed inside a single notetag
 *   container.
 * - The settings are the same as the notetags listed above it.
 * - You may remove the settings you don't wish to change.
 * - The only necessary data is the 'Battler: filename' line.
 *
 * Example:
 *
 * <Dragonbones Battler Settings>
 *  Battler: Demon
 *  
 *  Scale: 0.3, 0.3
 *
 *  Size: 80, 80
 *
 *  Motion Wait: idle
 *  Motion Damage: hit
 *  Motion Swing: attack
 *  Motion Thrust: attack
 *  Motion Missile: attack
 *  Motion Skill: special
 *  Motion spell: special
 *  Motion Dead: defeated
 * </Dragonbones Battler Settings>
 *
 * ---
 * 
 * <Dragonbones Hue Affected>
 * 
 * - Used for: Enemy Notetags
 * - The above notetag enables hues to affect enemy battlers.
 * - This will bypass the Plugin Parameter default settings.
 * 
 * ---
 * 
 * <Dragonbones No Hue>
 * 
 * - Used for: Enemy Notetags
 * - The above notetag disables hues to affect enemy battlers.
 * - This will bypass the Plugin Parameter default settings.
 * 
 * ---
 *
 * === Dragonbones Map Sprite Notetags & Comment Tags ===
 *
 * You can also use Dragonbones armatures as map sprites. When used, any of the
 * original sprites before will become invisible and will be replaced with the
 * Dragonbones armature.
 *
 * These notetags can be used for actors and events. In the case of events,
 * both notetags and comment tags can be used to determine what settings to use
 * for the Dragonbones armatures.
 *
 * Be cautious when using Comment Tags for event pages since comments contain a
 * maximum line count of 6.
 *
 * ---
 *
 * <Dragonbones Sprite: filename>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - Sets the DragonBones associated with this map sprite to be 'filename'.
 * - The name will be associated with the assets used.
 * - It will be used to check for associated filenames that end with _ske.json,
 *   _tex.json, and _tex.png.
 * - The listed assets must be found in the assigned assets folder.
 *
 * Examples:
 *
 * <Dragonbones Sprite: Demon>
 * <Dragonbones Sprite: DragonBoy>
 * <Dragonbones Sprite: Swordsman>
 * <Dragonbones Sprite: Ubbie>
 *
 * ---
 *
 * <Dragonbones Sprite Scale: x, y>
 *
 * <Dragonbones Sprite Scale X: x>
 * <Dragonbones Sprite Scale Y: x>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - Sets the base scale for the Dragonbones associated with this map sprite.
 *   This is for those instances where a Dragonbones armature is too large or
 *   small and needs to be scaled down/up.
 * - This scale will be amplified by the character's sprite's scale value.
 * - Use the 1st notetag to assign values to both Scale X and Scale Y.
 * - Use the 2nd/3rd notetags to assign Scale X and Y values separately.
 * - Use negative values to flip the Dragonbones armature around.
 *
 * Examples:
 * 
 * <Dragonbones Sprite Scale: -0.3, 0.3>
 *
 * <Dragonbones Sprite Scale X: -0.3>
 * <Dragonbones Sprite Scale Y: 0.3>
 *
 * ---
 *
 * <Dragonbones Sprite Offset: x, y>
 *
 * <Dragonbones Sprite Offset X: x>
 * <Dragonbones Sprite Offset Y: x>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - When a Dragonbones armature is attached to an character's map sprite, it
 *   will always be attached at the root point assigned within the Dragonbones
 *   data. If a Dragonbones armature has a root point that does not fit well
 *   with your battler sprite, you can offset it using these notetags.
 * - Replace 'x' and 'y' with number values representing how many pixels you
 *   want to offset the Dragonbones armature by.
 * - Use the 1st notetag to assign values to both Offset X and Offset Y.
 * - Use the 2nd/3rd notetags to assign Offset X and Y values separately.
 * - Use negative values to offset to the left (X) or up (Y) directions.
 *
 * Examples:
 *
 * <Dragonbones Sprite Offset: -10, 5>
 *
 * <Dragonbones Sprite Offset X: -10>
 * <Dragonbones Sprite Offset Y: 5>
 *
 * ---
 *
 * <Dragonbones Sprite Time Scale: x>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - Lets you adjust the time scale for the Dragonbones armature.
 * - Replace 'x' with a number value depicting how fast the armature should
 *   animate.
 *   - 1.0 is the default value.
 *   - Higher numbers animate faster.
 *   - Lower numbers animate slower.
 *   - If a number is too small, it may not animate at all.
 *
 * Example:
 *
 * <Dragonbones Sprite Time Scale: 1.5>
 *
 * ---
 * 
 * <Dragonbones Sprite Walk Rate: x>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - Lets you adjust the animation speed for the Dragonbones armature only
 *   when it is walking.
 * - Replace 'x' with a number value depicting how fast the armature should
 *   animate.
 *   - 1.0 is the default value.
 *   - Higher numbers animate faster.
 *   - Lower numbers animate slower.
 *   - If a number is too small, it may not animate at all.
 * - If used with the <Dragonbones Sprite Time Scale: x>, the speed will stack
 *   multiplicatively.
 *
 * Example:
 *
 * <Dragonbones Sprite Walk Rate: 1.5>
 * 
 * ---
 * 
 * <Dragonbones Sprite Dash Rate: x>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - Lets you adjust the animation speed for the Dragonbones armature only
 *   when it is dashing.
 * - Replace 'x' with a number value depicting how fast the armature should
 *   animate.
 *   - 1.0 is the default value.
 *   - Higher numbers animate faster.
 *   - Lower numbers animate slower.
 *   - If a number is too small, it may not animate at all.
 * - If used with the <Dragonbones Sprite Time Scale: x>, the speed will stack
 *   multiplicatively.
 *
 * Example:
 *
 * <Dragonbones Sprite Dash Rate: 1.5>
 * 
 * ---
 *
 * <Dragonbones Sprite Size: width, height>
 *
 * <Dragonbones Sprite Width: x>
 * <Dragonbones Sprite Height: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Dragonbones armatures have no standard width or height. This makes it
 *   problematic when trying to calculate the sprite's width/height for various
 *   plugins that use it. These notetags allow you to assign a width and
 *   height value to the sprite, despite the fact the Dragonbones armatures
 *   have no such thing.
 * - Replace 'width', 'height', or 'x' with number values representing the
 *   dimension values in pixels.
 * - Use the 1st notetag to assign values to both Width and Height.
 * - Use the 2nd/3rd notetags to assign Width and Height values separately.
 * - If these notetags aren't used, then use the values defined by default in
 *   the Plugin Parameters.
 *
 * Examples:
 *
 * <Dragonbones Sprite Size: 48, 64>
 *
 * <Dragonbones Sprite Width: 48>
 * <Dragonbones Sprite Height: 64>
 *
 * ---
 *
 * <Dragonbones Sprite Flip Left>
 * <Dragonbones Sprite Flip Right>
 *
 * <Dragonbones Sprite No Flip Left>
 * <Dragonbones Sprite No Flip Right>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - Lets the map sprite know to flip itself when facing either the left/right
 *   directions in order to reuse animations.
 * - The 'No' variants will prevent flipping from occuring.
 * - These notetags will override settings applied in the Plugin Parameters.
 *
 * ---
 *
 * <Dragonbones Sprite Motion Idle: animation>
 * <Dragonbones Sprite Motion Walk: animation>
 * <Dragonbones Sprite Motion Dash: animation>
 * <Dragonbones Sprite Motion Jump: animation>
 * <Dragonbones Sprite Motion LadderIdle: animation>
 * <Dragonbones Sprite Motion LadderClimb: animation>
 * <Dragonbones Sprite Motion RopeIdle: animation>
 * <Dragonbones Sprite Motion RopeClimb: animation>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - Lets you set specific animations different from the ones listed in the
 *   Plugin Parameters for specific motions.
 * - Replace 'animation' with the name of the Dragonbones animation.
 * - If this notetag is not used, when such a motion is rquested, it will
 *   default to attempting to play the animation name equal to the motion.
 * - Animation names do not need to be case sensitive.
 * - If no animation is found, then no animation will be played.
 *
 * Example:
 *
 * <Dragonbones Sprite Motion Idle: stand>
 * <Dragonbones Sprite Motion Walk: move>
 * <Dragonbones Sprite Motion Dash: run>
 * <Dragonbones Sprite Motion Jump: hop>
 *
 * ---
 *
 * <Dragonbones Sprite Settings>
 *  Filename: filename
 *
 *  Scale: x, y
 *
 *  Scale X: x
 *  Scale Y: x
 *
 *  Offset: x, y
 *
 *  Offset X: x
 *  Offset Y: x
 *
 *  Time Scale: x
 * 
 *  Walk Rate: x
 *  Dash Rate: x
 *
 *  Width: x
 *  Height: x
 *
 *  Flip Left
 *  Flip Right
 *
 *  No Flip Left
 *  No Flip Right
 *
 *  Motion Idle: animation
 *  Motion Walk: animation
 *  Motion Dash: animation
 *  Motion Jump: animation
 *  Motion LadderIdle: animation
 *  Motion LadderClimb: animation
 *  Motion RopeIdle: animation
 *  Motion RopeClimb: animation
 * </Dragonbones Sprite Settings>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - The above notetag allows to wrap up all the information you'd like to
 *   set for Dragonbones battler armatures needed inside a single notetag
 *   container.
 * - The settings are the same as the notetags listed above it.
 * - You may remove the settings you don't wish to change.
 * - The only necessary data is the 'Filename: filename' line.
 *
 * Example:
 *
 * <Dragonbones Sprite Settings>
 *  Filename: Ubbie
 *
 *  Scale: 0.1, 0.1
 *
 *  Flip Right
 *
 *  Motion Idle: stand
 *  Motion Walk: walk
 * </Dragonbones Sprite Settings>
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
 * === Battler Plugin Commands ===
 * 
 * ---
 *
 * Battler: Actor Change Settings
 * - Change target actor's Dragonbones armature settings for battle.
 *
 *   Actor ID:
 *   - Select which Actor ID to affect.
 *
 *     Filename:
 *     - Change the armature's filename.
 *
 *     Offset X:
 *     - Change the armature's Offset X value.
 *
 *     Offset Y:
 *     - Change the armature's Offset Y value.
 *
 *     Scale X:
 *     - Change the armature's Scale X value.
 * 
 *     Scale Y:
 *     - Change the armature's Scale Y value.
 *
 *     Time Scale:
 *     - Change the armature's Time Scale value.
 *
 *     Width:
 *     - Change the battler width size.
 *
 *     Height:
 *     - Change the battler height size.
 *
 *   Motion Settings:
 *
 *     Walk:
 *     Wait:
 *     Chant:
 *     Guard:
 *     Damage:
 *     Evade:
 *     Thrust:
 *     Swing:
 *     Missile:
 *     Skill:
 *     Spell:
 *     Item:
 *     Escape:
 *     Victory:
 *     Dying:
 *     Abnormal:
 *     Sleep:
 *     Dead:
 *     - Change the animation used for this motion.
 *
 * ---
 * 
 * === Map Sprite Plugin Commands ===
 * 
 * ---
 *
 * Map Sprite: Actor Change Settings
 * - Change target actor's Dragonbones armature settings for map sprites.
 *
 *   Actor ID:
 *   - Select which Actor ID to affect.
 *
 *     Filename:
 *     - Change the armature's filename.
 *
 *     Offset X:
 *     - Change the armature's Offset X value.
 *
 *     Offset Y:
 *     - Change the armature's Offset Y value.
 *
 *     Scale X:
 *     - Change the armature's Scale X value.
 * 
 *     Scale Y:
 *     - Change the armature's Scale Y value.
 *
 *     Time Scale:
 *     - Change the armature's Time Scale value.
 * 
 *       Walk Rate:
 *       - Change the armature's walk animation rate.
 * 
 *       Dash Rate:
 *       - Change the armature's dash animation rate.
 *
 *     Width:
 *     - Change the battler width size.
 *
 *     Height:
 *     - Change the battler height size.
 *
 *   Flip Settings:
 *
 *     Flip Left?:
 *     Flip Right:
 *     - Flip the scale x value when facing left/right-ward directions?
 *
 *   Motion Settings:
 *
 *     Idle:
 *     Walk:
 *     Dash:
 *     Jump:
 *     Ladder (Idle):
 *     Ladder (Climb):
 *     Rope (Idle):
 *     Rope (Climb):
 *     - Base rope climbing animation name used.
 *
 * ---
 *
 * Map Sprite: Actor Play Animation
 * - Target actor plays a custom Dragonbones animation.
 *
 *   Actor ID:
 *   - Select which Actor ID to affect.
 *
 *   Play Animation:
 *   - Play this animation.
 *
 * NOTE: An alternative to this is to put the following code inside of a
 *       Movement Route's script call:
 *
 *       this.dragonbonesAnimation = "AnimationName";
 *
 *       Replace 'AnimationName' (keep the quotes) with the name of the
 *       Dragonbones animation.
 *
 * ---
 *
 * Map Sprite: Actor Stop Animation
 * - Stops a target actor's custom Dragonbones animation.
 *
 *   Actor ID:
 *   - Select which Actor ID to affect.
 *
 * ---
 *
 * Map Sprite: Event Play Animation
 * - Target event plays a custom Dragonbones animation.
 *
 *   Event ID:
 *   - Select which Event ID to affect.
 *
 *   Play Animation:
 *   - Play this animation.
 *
 * ---
 *
 * Map Sprite: Event Stop Animation
 * - Stops a target event's custom Dragonbones animation.
 *
 *   Event ID:
 *   - Select which Event ID to affect.
 *
 * ---
 *
 * Map Sprite: Follower Play Animation
 * - Target follower plays a custom Dragonbones animation.
 *
 *   Follower Index:
 *   - Select which Follower Index to affect.
 *
 *   Play Animation:
 *   - Play this animation.
 *
 * ---
 *
 * Map Sprite: Follower Stop Animation
 * - Stops a target follower's custom Dragonbones animation.
 *
 *   Follower ID:
 *   - Select which Follower Index to affect.
 *
 * ---
 *
 * Map Sprite: Player Play Animation
 * - Player plays a custom Dragonbones animation.
 *
 *   Play Animation:
 *   - Play this animation.
 *
 * ---
 *
 * Map Sprite: Player Stop Animation
 * - Stops player's custom Dragonbones animation.
 *
 * ---
 * 
 * === Picture Plugin Commands ===
 * 
 * ---
 *
 * Picture: Dragonbones Setup
 * - Setup a Dragonbones armature for a picture.
 *
 *   Picture ID:
 *   - Select which Picture ID(s) to give a Dragonbones armature.
 *
 *   Armature Filename:
 *   - What is the armature's filename?
 *
 *   Play Animation:
 *   - Play this animation once it starts.
 *
 *   Offset: X:
 *   - Default X offset value for this Dragonbones armature.
 *
 *   Offset: Y:
 *   - Default Y offset value for this Dragonbones armature.
 *
 *   Scale: X:
 *   - Default X scaling for this Dragonbones armature.
 *   - This will be amplified by the picture's scaling value.
 *
 *   Scale: Y:
 *   - Default Y scaling for this Dragonbones armature.
 *   - This will be amplified by the picture's scaling value.
 *
 *   Time Scale:
 *   - Default time scale for this Dragonbones armature.
 *   - Higher values play faster. Lower values play slower.
 *
 * ---
 *
 * Picture: Play Dragonbones Animation
 * - Make an existing Dragonbones armature attached to a picture play
 *   an animation.
 *
 *   Picture ID:
 *   - Select which Picture ID to modify.
 *
 *   Play Animation:
 *   - Play this animation.
 *
 * ---
 *
 * Picture: Offset Dragonbones
 * - Offset the X, Y attachment point of the Dragonbones armature.
 *
 *   Picture ID:
 *   - Select which Picture ID to modify.
 *
 *   Offset: X:
 *   - X offset value for this Dragonbones armature.
 *
 *   Offset: Y:
 *   - Y offset value for this Dragonbones armature.
 *
 * ---
 *
 * Picture: Scale Dragonbones
 * - Change the scaling values of the Dragonbones armature.
 *
 *   Picture ID:
 *   - Select which Picture ID to modify.
 *
 *   Scale: X:
 *   - X scaling for this Dragonbones armature.
 *   - This will be amplified by the picture's scaling value.
 *
 *   Scale: Y:
 *   - Y scaling for this Dragonbones armature.
 *   - This will be amplified by the picture's scaling value.
 *
 * ---
 *
 * Picture: Time Scale Dragonbones
 * - Change the speed at which Dragonbones animations play.
 *
 *   Picture ID:
 *   - Select which Picture ID to modify.
 *
 *   Time Scale:
 *   - Time scale for this Dragonbones armature.
 *   - Higher values play faster. Lower values play slower.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These are the general settings that apply to all uses of Dragonbones through
 * this plugin. While the majority of these can remain unchanged, for those who
 * wish to customize the nature of the plugin to their liking can do so through
 * these Plugin Parameters.
 *
 * ---
 *
 * Assets Path
 * - The filepath to the directory that houses all the Dragonbone files.
 *
 * ---
 *
 * Defaults
 * 
 *   Loaded Animation:
 *   - The default animation to play once a Dragonbones armature is loaded.
 * 
 *   Looping Animations:
 *   - Force these animations to become looping animations even if they don't
 *     loop in Dragonbones.
 *
 * ---
 *
 * Skeletal Data
 * Texture Data
 * Texture Asset
 * 
 *   Key:
 *   - Key used to determine where needed data is stored.
 * 
 *   Extension:
 *   - Extension used to determine which files contain needed data.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Battler Settings
 * ============================================================================
 *
 * Actor and Enemy sprites can have Dragonbones armatures attached to them as
 * sprites. Use these settings to make the Dragonbones armatures fit your needs
 * in battle.
 *
 * ---
 *
 * Default Settings
 * 
 *   Enemy Hue Affected?:
 *   - Affect hues for enemies with Dragonbones battlers?
 * 
 *   Offset: X:
 *   - Default X offset for battler sprites.
 * 
 *   Offset: Y:
 *   - Default Y offset for battler sprites.
 * 
 *   Scale: X:
 *   - Default scale for X used by Dragonbones battlers.
 * 
 *     Flip for Actors?:
 *     Flip for Enemies?:
 *     - Flip the scale x value into negative automatically for all actors
 *       or enemies?
 * 
 *   Scale: Y:
 *   - Default scale for Y used by Dragonbones battlers.
 * 
 *   Width:
 *   - Treat battler sprites as if they have this width.
 *   - Used for Action Sequences.
 * 
 *   Height:
 *   - Treat battler sprites as if they have this height.
 *   - Used for Action Sequences.
 *
 * ---
 * 
 * Idle Bypass
 * 
 *   List:
 *   - This is a list of animations that will not return back to the idle
 *     animation after completion.
 *   - Remove them if you want them to revert back to the idle animation
 *     after completion.
 *   - Add to the list if you want animations to stay in their final frame.
 * 
 * ---
 *
 * Default Motions
 * 
 *   Walk:
 *   Wait:
 *   Chant:
 *   Guard:
 *   Damage:
 *   Evade:
 *   Thrust:
 *   Swing:
 *   Missile:
 *   Skill:
 *   Spell:
 *   Item:
 *   Escape:
 *   Victory:
 *   Dying:
 *   Abnormal:
 *   Sleep:
 *   Dead:
 *   - Play this Dragonbones animation whenever this motion is requested
 *     by default.
 *   - Used for Action Sequences.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Map Sprite Settings
 * ============================================================================
 *
 * These Plugin Parameter settings adjust the default configurations for any
 * map sprite that's using a Dragonbones armature. These settings can be
 * overwritten on per a sprite basis using notetags and comment tags, too.
 *
 * ---
 *
 * Defaults
 * 
 *   Offset: X:
 *   - Default X offset for map sprites.
 * 
 *   Offset: Y:
 *   - Default Y offset for map sprites.
 * 
 *   Scale: X:
 *   - Default scale for X used by Dragonbones map sprites.
 * 
 *     Flip Left?:
 *     Flip Right?:
 *     - Flip the scale x value when facing left/right-ward directions?
 * 
 *   Scale: Y:
 *   - Default scale for Y used by Dragonbones map sprites.
 * 
 *   Time Scale:
 *   - The rate at which animations play.
 *   - Higher numbers go faster.
 * 
 *   Width:
 *   - Treat map sprites as if they have this width.
 *   - Used for various plugins.
 * 
 *   Height:
 *   - Treat map sprites as if they have this height.
 *   - Used for various plugins.
 *
 * ---
 *
 * Motion Settings
 * 
 *   Idle:
 *   Walk:
 *   Dash:
 *   Jump:
 *   Ladder (Idle):
 *   Ladder (Climb):
 *   Rope (Idle):
 *   Rope (Climb):
 *   - Base walk animation name used.
 * 
 *   Walk Timer:
 *   - Number of frames to count as walking so that an idle animation isn't
 *     immediately forced upon stopping.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Experimental Settings
 * ============================================================================
 *
 * These settings are experimental and have not been tested extensively yet.
 *
 * ---
 *
 * Experimental Settings
 * 
 *   Enemy Stances:
 *   - Enemies can use stance motions for idling such as chanting,
 *     guarding, etc.
 *   - Requires VisuMZ_1_BattleCore!
 *   - This is not available normally since animations are not available for
 *     enemies with the base RPG Maker MZ core scripts.
 *   - Disable this to use the default animation flow for enemies.
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
 *
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * Special Thanks To
 * 
 * * Green Kel
 * * Ækashics
 * * Swift Illusion
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.15: June 18, 2021
 * * Compatibility Update
 * ** Compatibility update with Elements and Status Menu Core's trait hues.
 *    These will be affected by the notetags and/or Plugin Parameters applied.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Irina and sponsored by Ækashics:
 * *** <Dragonbones Hue Affected>
 * *** <Dragonbones No Hue>
 * **** Determines if this enemy's Dragonbones battler is affected by hues
 *      or not. This will bypass the Plugin Parameter's default value.
 * ** New Plugin Parameter added by Irina and sponsored by Ækashics:
 * *** Plugin Parameters > Battler Settings > Default > Enemy Hue Affected?
 * **** Affect hues for enemies with Dragonbones battlers?
 * **** This will be disabled by default. Enable it or set it to true to make
 *      it work properly.
 * 
 * Version 1.14: April 2, 2021
 * * Documentation Update!
 * ** Added "VisuStella MZ Compatibility" section for detailed compatibility
 *    explanations with the VisuMZ_3_StateTooltips plugin.
 * 
 * Version 1.13: March 19, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly:
 * *** Plugin Parameters > Experimental: Enemy Stances
 * **** Allows enemies to utilize stance motions for idling such as chanting,
 *      guarding, etc.
 * **** Requires VisuMZ_1_BattleCore!
 * **** This is not available normally since animations are not available for
 *      enemies with the base RPG Maker MZ core scripts.
 * **** Disable this to use the default animation flow for enemies.
 * 
 * Version 1.12: February 19, 2021
 * * Bug Fixes!
 * ** Fixed a bug that would cause a crash upon teleporting with an altering
 *    Dragonbones armature load without a base sprite. Fix made by Irina.
 * 
 * Version 1.11: February 12, 2021
 * * Bug Fixes!
 * ** Fixed a bug involving the changing of a Dragonbones battler in-battle to
 *    prevent multiple instances being added at once. Fix made by Irina.
 * 
 * Version 1.10: January 22, 2021
 * * Bug Fixes!
 * ** Upon changing map sprites, Dragonbones characters would become skewed.
 *    This should no longer happen.
 * * Documentation Update!
 * ** Updated help file for new features.
 * * New Features!
 * ** Map Sprite: Actor Change Settings new Plugin Command parameters
 * *** "Walk Rate" and "Dash Rate" modifiers added.
 * 
 * Version 1.09: November 29, 2020
 * * Bug Fixes!
 * ** Dragonbones height for actors is no longer affected by frame divisibility
 *    for SV Actors to skew the positions of height data. Fix made by Arisu.
 * 
 * Version 1.08: November 15, 2020
 * * Documentation Update!
 * ** Updated help file for new features.
 * * New Features!
 * ** Two new notetags have been added for map sprites by Irina.
 * *** <Dragonbones Sprite Walk Rate: x>
 * *** <Dragonbones Sprite Dash Rate: x>
 * **** These two new notetags allow you to animate specific Dragonbones
 *      animations at a different speed when walking or dashing. These speed
 *      multipliers will stack multiplicatively with the time scale.
 * 
 * Version 1.07: October 25, 2020
 * * Bug Fixes!
 * ** Dead animations for actors no longer keep looping upon motion refreshes.
 *    Fix made by Irina.
 * * Documentation Update!
 * ** Updated help file for new features.
 * * New Features!
 * ** New plugin parameter added by Irina.
 * *** Plugin Parameters > Battler Settings > Idle Bypass > List
 * **** This is a list of animations that will not return back to the idle
 *      animation after completion. Remove them if you want them to revert back
 *      to the idle animation after completion. Add to the list if you want
 *      animations to stay in their final frame.
 * 
 * Version 1.06: October 18, 2020
 * * Bug Fixes!
 * ** Enemies with Dragonbones battlers transforming into other enemies with
 *    Dragonbones battlers will now attach the sprites properly. Fix by Yanfly.
 * ** Enemies with Dragonbones battlers transforming into enemies without them
 *    will now remove the non-transformed bitmap.
 * * Documentation Update!
 * ** Added the 'Dragonbones Naming' section.
 * 
 * Version 1.05: October 4, 2020
 * * Bug Fixes!
 * ** Selected Dragonbones battlers will no longer leave behind a residual
 *    blink effect. Fix made by Irina.
 * ** There should be no more crashes from map events that have been previously
 *    deleted but not cleared from the map event list. Fix made by Irina.
 * 
 * Version 1.04: September 20, 2020
 * * Bug Fixes!
 * ** Hidden enemies with Dragonbones should be invisible at the start of
 *    battle. Fix made by Yanfly.
 * 
 * Version 1.03: September 13, 2020
 * * Compatibility Update!
 * ** Added compatibility with the new Battle Core v1.04 features!
 * 
 * Version 1.02: September 6, 2020
 * * Bug Fixes!
 * ** Previously, a Dragonbones battler does not show the blinking indicator if
 *    the battler is a selected target. This is now fixed. Fix made by Yanfly.
 * ** Prevents a crash now if no bitmap is detected for the main sprite.
 * 
 * Version 1.01: August 30, 2020
 * * Bug Fixes!
 * ** Erasing a picture no longer causes a crash when changing scenes. Fix made
 *    by Yanfly.
 * * Compatibility Update
 * ** Added compatibility for VisuStella MZ's Visual State Effects.
 *
 * Version 1.00: August 24, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Battler_ActorChange
 * @text Battler: Actor Change Settings
 * @desc Change target actor's Dragonbones armature settings for battle.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select which Actor ID to affect.
 * @default 1
 *
 * @arg Filename:str
 * @text Filename
 * @parent ActorID:num
 * @desc Change the armature's filename.
 * @default name
 *
 * @arg OffsetX:eval
 * @text Offset X
 * @parent ActorID:num
 * @desc Change the armature's Offset X value.
 * @default 0
 *
 * @arg OffsetY:eval
 * @text Offset Y
 * @parent ActorID:num
 * @desc Change the armature's Offset Y value.
 * @default 0
 *
 * @arg ScaleX:eval
 * @text Scale X
 * @parent ActorID:num
 * @desc Change the armature's Scale X value.
 * @default 1.0
 *
 * @arg ScaleY:eval
 * @text Scale Y
 * @parent ActorID:num
 * @desc Change the armature's Scale Y value.
 * @default 1.0
 *
 * @arg TimeScale:eval
 * @text Time Scale
 * @parent ActorID:num
 * @desc Change the armature's Time Scale value.
 * @default 1.0
 *
 * @arg Width:eval
 * @text Width
 * @parent ActorID:num
 * @desc Change the battler width size.
 * @default 64
 *
 * @arg Height:eval
 * @text Height
 * @parent ActorID:num
 * @desc Change the battler height size.
 * @default 64
 *
 * @arg DefaultMotions
 * @text Motion Settings
 *
 * @arg MotionWalk:str
 * @text Walk
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default walk
 *
 * @arg MotionWait:str
 * @text Wait
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default wait
 *
 * @arg MotionChant:str
 * @text Chant
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default chant
 *
 * @arg MotionGuard:str
 * @text Guard
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default guard
 *
 * @arg MotionDamage:str
 * @text Damage
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default damage
 *
 * @arg MotionEvade:str
 * @text Evade
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default evade
 *
 * @arg MotionThrust:str
 * @text Thrust
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default thrust
 *
 * @arg MotionSwing:str
 * @text Swing
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default swing
 *
 * @arg MotionMissile:str
 * @text Missile
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default missile
 *
 * @arg MotionSkill:str
 * @text Skill
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default skill
 *
 * @arg MotionSpell:str
 * @text Spell
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default spell
 *
 * @arg MotionItem:str
 * @text Item
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default item
 *
 * @arg MotionEscape:str
 * @text Escape
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default escape
 *
 * @arg MotionVictory:str
 * @text Victory
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default victory
 *
 * @arg MotionDying:str
 * @text Dying
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default dying
 *
 * @arg MotionAbnormal:str
 * @text Abnormal
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default abnormal
 *
 * @arg MotionSleep:str
 * @text Sleep
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default sleep
 *
 * @arg MotionDead:str
 * @text Dead
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default dead
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_ActorChange
 * @text Map Sprite: Actor Change Settings
 * @desc Change target actor's Dragonbones armature settings for map sprites.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select which Actor ID to affect.
 * @default 1
 *
 * @arg Filename:str
 * @text Filename
 * @parent ActorID:num
 * @desc Change the armature's filename.
 * @default name
 *
 * @arg OffsetX:eval
 * @text Offset X
 * @parent ActorID:num
 * @desc Change the armature's Offset X value.
 * @default 0
 *
 * @arg OffsetY:eval
 * @text Offset Y
 * @parent ActorID:num
 * @desc Change the armature's Offset Y value.
 * @default 0
 *
 * @arg ScaleX:eval
 * @text Scale X
 * @parent ActorID:num
 * @desc Change the armature's Scale X value.
 * @default 0.5
 *
 * @arg ScaleY:eval
 * @text Scale Y
 * @parent ActorID:num
 * @desc Change the armature's Scale Y value.
 * @default 0.5
 *
 * @arg TimeScale:eval
 * @text Time Scale
 * @parent ActorID:num
 * @desc Change the armature's Time Scale value.
 * @default 1.0
 *
 * @arg WalkRate:eval
 * @text Walk Rate
 * @parent TimeScale:eval
 * @desc Change the armature's walk animation rate.
 * @default 1.0
 *
 * @arg DashRate:eval
 * @text Dash Rate
 * @parent TimeScale:eval
 * @desc Change the armature's dash animation rate.
 * @default 1.0
 *
 * @arg Width:eval
 * @text Width
 * @parent ActorID:num
 * @desc Change the armature's width value.
 * @default 48
 *
 * @arg Height:eval
 * @text Height
 * @parent ActorID:num
 * @desc Change the armature's height.
 * @default 48
 *
 * @arg FlipSettings
 * @text Flip Settings
 *
 * @arg FlipLeft:eval
 * @text Flip Left?
 * @parent FlipSettings
 * @type boolean
 * @on Flip
 * @off Normal
 * @desc Flip the scale x value when facing left-ward directions?
 * @default false
 *
 * @arg FlipRight:eval
 * @text Flip Right?
 * @parent FlipSettings
 * @type boolean
 * @on Flip
 * @off Normal
 * @desc Flip the scale x value when facing right-ward directions?
 * animation is found?
 * @default false
 *
 * @arg Animations
 * @text Motion Settings
 *
 * @arg Idle:str
 * @text Idle
 * @parent Animations
 * @desc Base idle animation name used.
 * @default idle
 *
 * @arg Walk:str
 * @text Walk
 * @parent Animations
 * @desc Base walk animation name used.
 * @default walk
 *
 * @arg Dash:str
 * @text Dash
 * @parent Animations
 * @desc Base dash animation name used.
 * @default dash
 *
 * @arg Jump:str
 * @text Jump
 * @parent Animations
 * @desc Base jump animation name used.
 * @default jump
 *
 * @arg LadderIdle:str
 * @text Ladder (Idle)
 * @parent Animations
 * @desc Base ladder idle animation name used.
 * @default ladderidle
 *
 * @arg LadderClimb:str
 * @text Ladder (Climb)
 * @parent Animations
 * @desc Base ladder climbing animation name used.
 * @default ladderclimb
 *
 * @arg RopeIdle:str
 * @text Rope (Idle)
 * @parent Animations
 * @desc Base rope idle animation name used.
 * @default ropeidle
 *
 * @arg RopeClimb:str
 * @text Rope (Climb)
 * @parent Animations
 * @desc Base rope climbing animation name used.
 * @default ropecllmb
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_ActorAnimationPlay
 * @text Map Sprite: Actor Play Animation
 * @desc Target actor plays a custom Dragonbones animation.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select which Actor ID to affect.
 * @default 1
 *
 * @arg Animation:str
 * @text Play Animation
 * @desc Play this animation.
 * @default Idle
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_ActorAnimationStop
 * @text Map Sprite: Actor Stop Animation
 * @desc Stops a target actor's custom Dragonbones animation.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select which Actor ID to affect.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_EventAnimationPlay
 * @text Map Sprite: Event Play Animation
 * @desc Target event plays a custom Dragonbones animation.
 *
 * @arg EventID:eval
 * @text Event ID
 * @desc Select which Event ID to affect.
 * @default 1
 *
 * @arg Animation:str
 * @text Play Animation
 * @desc Play this animation.
 * @default Idle
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_EventAnimationStop
 * @text Map Sprite: Event Stop Animation
 * @desc Stops a target event's custom Dragonbones animation.
 *
 * @arg EventID:eval
 * @text Event ID
 * @desc Select which Event ID to affect.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_FollowerAnimationPlay
 * @text Map Sprite: Follower Play Animation
 * @desc Target follower plays a custom Dragonbones animation.
 *
 * @arg FollowerIndex:eval
 * @text Follower Index
 * @desc Select which Follower Index to affect.
 * @default 0
 *
 * @arg Animation:str
 * @text Play Animation
 * @desc Play this animation.
 * @default Idle
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_FollowerAnimationStop
 * @text Map Sprite: Follower Stop Animation
 * @desc Stops a target follower's custom Dragonbones animation.
 *
 * @arg FollowerIndex:eval
 * @text Follower ID
 * @desc Select which Follower Index to affect.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_PlayerAnimationPlay
 * @text Map Sprite: Player Play Animation
 * @desc Player plays a custom Dragonbones animation.
 *
 * @arg Animation:str
 * @text Play Animation
 * @desc Play this animation.
 * @default Idle
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_PlayerAnimationStop
 * @text Map Sprite: Player Stop Animation
 * @desc Stops player's custom Dragonbones animation.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Picture_SetupDragonbones
 * @text Picture: Dragonbones Setup
 * @desc Setup a Dragonbones armature for a picture.
 *
 * @arg PictureID:eval
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc Select which Picture ID(s) to give a Dragonbones armature.
 * @default 1
 *
 * @arg Filename:str
 * @text Armature Filename
 * @desc What is the armature's filename?
 * @default Untitled
 *
 * @arg Animation:str
 * @text Play Animation
 * @desc Play this animation once it starts.
 * @default Idle
 *
 * @arg OffsetX:eval
 * @text Offset: X
 * @desc Default X offset value for this Dragonbones armature.
 * @default 0
 *
 * @arg OffsetY:eval
 * @text Offset: Y
 * @desc Default Y offset value for this Dragonbones armature.
 * @default 0
 *
 * @arg ScaleX:eval
 * @text Scale: X
 * @desc Default X scaling for this Dragonbones armature.
 * This will be amplified by the picture's scaling value.
 * @default 1.0
 *
 * @arg ScaleY:eval
 * @text Scale: Y
 * @desc Default Y scaling for this Dragonbones armature.
 * This will be amplified by the picture's scaling value.
 * @default 1.0
 *
 * @arg TimeScale:eval
 * @text Time Scale
 * @desc Default time scale for this Dragonbones armature.
 * Higher values play faster. Lower values play slower.
 * @default 1.0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Picture_DragonbonesAnimation
 * @text Picture: Play Dragonbones Animation
 * @desc Make an existing Dragonbones armature attached to a picture play an animation.
 *
 * @arg PictureID:eval
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc Select which Picture ID to modify.
 * @default 1
 *
 * @arg Animation:str
 * @text Play Animation
 * @desc Play this animation.
 * @default Idle
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Picture_DragonbonesOffset
 * @text Picture: Offset Dragonbones
 * @desc Offset the X, Y attachment point of the Dragonbones armature.
 *
 * @arg PictureID:eval
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc Select which Picture ID to modify.
 * @default 1
 *
 * @arg OffsetX:eval
 * @text Offset: X
 * @desc X offset value for this Dragonbones armature.
 * @default 0
 *
 * @arg OffsetY:eval
 * @text Offset: Y
 * @desc Y offset value for this Dragonbones armature.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Picture_ScaleDragonbones
 * @text Picture: Scale Dragonbones
 * @desc Change the scaling values of the Dragonbones armature.
 *
 * @arg PictureID:eval
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc Select which Picture ID to modify.
 * @default 1
 *
 * @arg ScaleX:eval
 * @text Scale: X
 * @desc X scaling for this Dragonbones armature.
 * This will be amplified by the picture's scaling value.
 * @default 1.0
 *
 * @arg ScaleY:eval
 * @text Scale: Y
 * @desc Y scaling for this Dragonbones armature.
 * This will be amplified by the picture's scaling value.
 * @default 1.0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Picture_TimeScaleDragonbones
 * @text Picture: Time Scale Dragonbones
 * @desc Change the speed at which Dragonbones animations play.
 *
 * @arg PictureID:eval
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc Select which Picture ID to modify.
 * @default 1
 *
 * @arg TimeScale:eval
 * @text Time Scale
 * @desc Default time scale for this Dragonbones armature.
 * Higher values play faster. Lower values play slower.
 * @default 1.0
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
 * @param DragonbonesUnion
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param Main
 * @text Main Settings
 *
 * @param AssetsPath:str
 * @text Assets Path
 * @parent Main
 * @desc The filepath to the directory that houses all the Dragonbone files.
 * @default ./dragonbones_assets/
 *
 * @param General:struct
 * @text General Settings
 * @parent Main
 * @type struct<General>
 * @desc A set of general settings pertaining to all uses of Dragonbones.
 * @default {"Defaults":"","LoadAnimation:str":"idle","LoopingAnimations:arraystr":"[\"idle\",\"walk\",\"wait\",\"chant\",\"guard\",\"dying\",\"abnormal\",\"sleep\",\"dash\",\"ladderidle\",\"ladderclimb\",\"ropeidle\",\"ropeclimb\"]","SkeletalData":"","SkeKey:str":"dbData","SkeExt:str":"_ske.json","TextureData":"","TexKey:str":"texData","TexExt:str":"_tex.json","TextureAsset":"","TxaKey:str":"texAsset","TxaExt:str":"_tex.png"}
 *
 * @param Battler:struct
 * @text Battler Settings
 * @parent Main
 * @type struct<Battler>
 * @desc A set of general settings pertaining to Dragonbones battlers.
 * @default {"Defaults":"","OffsetX:num":"0","OffsetY:num":"0","ScaleX:num":"1.0","FlipActors:eval":"false","FlipEnemies:eval":"false","ScaleY:num":"1.0","TimeScale:num":"1.0","Width:num":"64","Height:num":"64","IdleBypass":"","IdleBypassList:arraystr":"[\"dead\",\"escape\",\"victory\"]","DefaultMotions":"","MotionWalk:str":"walk","MotionWait:str":"wait","MotionChant:str":"chant","MotionGuard:str":"guard","MotionDamage:str":"damage","MotionEvade:str":"evade","MotionThrust:str":"thrust","MotionSwing:str":"swing","MotionMissile:str":"missile","MotionSkill:str":"skill","MotionSpell:str":"spell","MotionItem:str":"item","MotionEscape:str":"escape","MotionVictory:str":"victory","MotionDying:str":"dying","MotionAbnormal:str":"abnormal","MotionSleep:str":"sleep","MotionDead:str":"dead"}
 *
 * @param MapSprite:struct
 * @text Map Sprite Settings
 * @parent Main
 * @type struct<MapSprite>
 * @desc A set of general settings pertaining to Dragonbones map sprites.
 * @default {"Defaults":"","OffsetX:num":"0","OffsetY:num":"0","ScaleX:num":"0.5","FlipLeft:eval":"false","FlipRight:eval":"false","ScaleY:num":"0.5","TimeScale:num":"1.0","Width:num":"48","Height:num":"48","Animations":"","Idle:str":"idle","Walk:str":"walk","WalkTimer:num":"2","Dash:str":"dash","Jump:str":"jump","LadderIdle:str":"ladderidle","LadderClimb:str":"ladderclimb","RopeIdle:str":"ropeidle","RopeClimb:str":"ropecllmb"}
 * 
 * @param Experimental
 * 
 * @param EnemyStances:eval
 * @text Enemy Stances
 * @parent Experimental
 * @type boolean
 * @on Enable Stances
 * @off No Stances
 * @desc Enemies can use stance motions for idling such as
 * chanting, guarding, etc. Requires VisuMZ_1_BattleCore!
 * @default false
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
 * @param Defaults
 *
 * @param LoadAnimation:str
 * @text Loaded Animation
 * @parent Defaults
 * @desc The default animation to play once a Dragonbones armature is loaded.
 * @default idle
 *
 * @param LoopingAnimations:arraystr
 * @text Looping Animations
 * @parent Defaults
 * @type string[]
 * @desc Force these animations to become looping animations even if they don't loop in Dragonbones.
 * @default ["idle","walk","wait","chant","guard","dying","abnormal","sleep","dash","ladderidle","ladderclimb","ropeidle","ropeclimb"]
 *
 * @param SkeletalData
 * @text Skeletal Data
 *
 * @param SkeKey:str
 * @text Key
 * @parent SkeletalData
 * @desc Key used to determine where skeletal data is stored.
 * @default dbData
 *
 * @param SkeExt:str
 * @text Extension
 * @parent SkeletalData
 * @desc Extension used to determine which files contain skeletal data.
 * @default _ske.json
 *
 * @param TextureData
 * @text Texture Data
 *
 * @param TexKey:str
 * @text Key
 * @parent TextureData
 * @desc Key used to determine where texture data is stored.
 * @default texData
 *
 * @param TexExt:str
 * @text Extension
 * @parent TextureData
 * @desc Extension used to determine which files contain texture data.
 * @default _tex.json
 *
 * @param TextureAsset
 * @text Texture Asset
 *
 * @param TxaKey:str
 * @text Key
 * @parent TextureAsset
 * @desc Key used to determine where texture assets are stored.
 * @default texAsset
 *
 * @param TxaExt:str
 * @text Extension
 * @parent TextureAsset
 * @desc Extension used to determine which files contain texture assets.
 * @default _tex.png
 *
 */
/* ----------------------------------------------------------------------------
 * Battler Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Battler:
 *
 * @param Defaults
 * @text Default Settings
 *
 * @param HueAffected:eval
 * @text Enemy Hue Affected?
 * @parent Defaults
 * @type boolean
 * @on Affect Hues
 * @off No Hues
 * @desc Affect hues for enemies with Dragonbones battlers?
 * @default false
 *
 * @param OffsetX:num
 * @text Offset: X
 * @parent Defaults
 * @desc Default X offset for battler sprites.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset: Y
 * @parent Defaults
 * @desc Default Y offset for battler sprites.
 * @default 0
 *
 * @param ScaleX:num
 * @text Scale: X
 * @parent Defaults
 * @desc Default scale for X used by Dragonbones battlers.
 * @default 1.0
 *
 * @param FlipActors:eval
 * @text Flip for Actors?
 * @parent ScaleX:num
 * @type boolean
 * @on Flip
 * @off Normal
 * @desc Flip the scale x value into negative automatically for all actors?
 * @default false
 *
 * @param FlipEnemies:eval
 * @text Flip for Enemies?
 * @parent ScaleX:num
 * @type boolean
 * @on Flip
 * @off Normal
 * @desc Flip the scale x value into negative automatically for all enemies?
 * @default false
 *
 * @param ScaleY:num
 * @text Scale: Y
 * @parent Defaults
 * @desc Default scale for Y used by Dragonbones battlers.
 * @default 1.0
 *
 * @param TimeScale:num
 * @text Time Scale
 * @parent Defaults
 * @desc The rate at which animations play.
 * Higher numbers go faster.
 * @default 1.0
 *
 * @param Width:num
 * @text Width
 * @parent Defaults
 * @desc Treat battler sprites as if they have this width.
 * Used for Action Sequences.
 * @default 64
 *
 * @param Height:num
 * @text Height
 * @parent Defaults
 * @desc Treat battler sprites as if they have this height.
 * Used for Action Sequences.
 * @default 64
 *
 * @param IdleBypass
 * @text Idle Bypass
 *
 * @param IdleBypassList:arraystr
 * @text List
 * @parent IdleBypass
 * @type combo[]
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc This is a list of animations that will not return back to the idle animation after completion.
 * @default ["dead","escape","victory"]
 *
 * @param DefaultMotions
 * @text Default Motions
 *
 * @param MotionWalk:str
 * @text Walk
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default walk
 *
 * @param MotionWait:str
 * @text Wait
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default wait
 *
 * @param MotionChant:str
 * @text Chant
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default chant
 *
 * @param MotionGuard:str
 * @text Guard
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default guard
 *
 * @param MotionDamage:str
 * @text Damage
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default damage
 *
 * @param MotionEvade:str
 * @text Evade
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default evade
 *
 * @param MotionThrust:str
 * @text Thrust
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default thrust
 *
 * @param MotionSwing:str
 * @text Swing
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default swing
 *
 * @param MotionMissile:str
 * @text Missile
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default missile
 *
 * @param MotionSkill:str
 * @text Skill
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default skill
 *
 * @param MotionSpell:str
 * @text Spell
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default spell
 *
 * @param MotionItem:str
 * @text Item
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default item
 *
 * @param MotionEscape:str
 * @text Escape
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default escape
 *
 * @param MotionVictory:str
 * @text Victory
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default victory
 *
 * @param MotionDying:str
 * @text Dying
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default dying
 *
 * @param MotionAbnormal:str
 * @text Abnormal
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default abnormal
 *
 * @param MotionSleep:str
 * @text Sleep
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default sleep
 *
 * @param MotionDead:str
 * @text Dead
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default dead
 *
 */
/* ----------------------------------------------------------------------------
 * Map Sprite Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MapSprite:
 *
 * @param Defaults
 * @text Default Settings
 *
 * @param OffsetX:num
 * @text Offset: X
 * @parent Defaults
 * @desc Default X offset for map sprites.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset: Y
 * @parent Defaults
 * @desc Default Y offset for map sprites.
 * @default 0
 *
 * @param ScaleX:num
 * @text Scale: X
 * @parent Defaults
 * @desc Default scale for X used by Dragonbones map sprites.
 * @default 0.5
 *
 * @param FlipLeft:eval
 * @text Flip Left?
 * @parent ScaleX:num
 * @type boolean
 * @on Flip
 * @off Normal
 * @desc Flip the scale x value when facing left-ward directions?
 * @default false
 *
 * @param FlipRight:eval
 * @text Flip Right?
 * @parent ScaleX:num
 * @type boolean
 * @on Flip
 * @off Normal
 * @desc Flip the scale x value when facing right-ward directions?
 * animation is found?
 * @default false
 *
 * @param ScaleY:num
 * @text Scale: Y
 * @parent Defaults
 * @desc Default scale for Y used by Dragonbones map sprites.
 * @default 0.5
 *
 * @param TimeScale:num
 * @text Time Scale
 * @parent Defaults
 * @desc The rate at which animations play.
 * Higher numbers go faster.
 * @default 1.0
 *
 * @param Width:num
 * @text Width
 * @parent Defaults
 * @desc Treat map sprites as if they have this width.
 * Used for various plugins.
 * @default 48
 *
 * @param Height:num
 * @text Height
 * @parent Defaults
 * @desc Treat map sprites as if they have this height.
 * Used for various plugins.
 * @default 48
 *
 * @param Animations
 * @text Motion Settings
 *
 * @param Idle:str
 * @text Idle
 * @parent Animations
 * @desc Base idle animation name used.
 * @default idle
 *
 * @param Walk:str
 * @text Walk
 * @parent Animations
 * @desc Base walk animation name used.
 * @default walk
 *
 * @param WalkTimer:num
 * @text Walk Timer
 * @parent Walk:str
 * @desc Number of frames to count as walking so that an idle animation isn't immediately forced upon stopping.
 * @default 2
 *
 * @param Dash:str
 * @text Dash
 * @parent Animations
 * @desc Base dash animation name used.
 * @default dash
 *
 * @param Jump:str
 * @text Jump
 * @parent Animations
 * @desc Base jump animation name used.
 * @default jump
 *
 * @param LadderIdle:str
 * @text Ladder (Idle)
 * @parent Animations
 * @desc Base ladder idle animation name used.
 * @default ladderidle
 *
 * @param LadderClimb:str
 * @text Ladder (Climb)
 * @parent Animations
 * @desc Base ladder climbing animation name used.
 * @default ladderclimb
 *
 * @param RopeIdle:str
 * @text Rope (Idle)
 * @parent Animations
 * @desc Base rope idle animation name used.
 * @default ropeidle
 *
 * @param RopeClimb:str
 * @text Rope (Climb)
 * @parent Animations
 * @desc Base rope climbing animation name used.
 * @default ropecllmb
 *
 */
//=============================================================================

const _0x1b16=['oLPdC','RopeClimb','FAVkk','_dragonbonesData','Game_Picture_initialize','isMoving','height','Sprite_Actor_startMotion','vdamH','DefaultAnimation','NurZh','Idle','MotionWalk','VisuMZ_1_OptionsCore','update','Sprite_Enemy_setHue','performDamage','setupDragonbonesDataCommentTags','status','CallbackQueue','BTAik','OffsetY','118633AwuZMX','Sprite_Character_updateCharacterFrame','756543dwUqHZ','rwbQQ','EDxUN','updateBitmap','updateCharacterFrameDragonbonesUnion','TxaKey','XvtJR','Width','filename','scaleY','_pictureContainer','gIdWP','page','findPictureSprite','1524587VyReZw','353ZYZSnT','ARRAYSTR','General','Picture_ScaleDragonbones','isSkill','terminate','eventId','pZgid','eWBuu','playDragonbonesIdleAnimation','Game_Actor_performDamage','updateDragonbones','ActorID','Luruv','parseDragonBonesData','parse','vrrIp','addDragonbonesAnimationDirections','ncLxz','dragonbonesFlip','YJITA','Height','initDragonbonesData','aTOEs','jEmEK','xEOzE','_dragonbonesAnimation','bitmap','dxQgF','Game_CharacterBase_update','runQueuedCallbacks','playDragonbonesMotion','play','dragonbonesData','updateFrame','scaleX','isGuard','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','constructor','lastFileName','LoadedFilenames','Dash','FnTyQ','checkDragonbonesStringTags','battler','VisuMZ_1_EventsMoveCore','aAKNC','wYwbZ','findTargetSprite','MotionGuard','prepareNextLoadArmature','version','clearPageSettings','walkRate','attachSpritesToDistortionSprite','Sprite_Enemy_updateBitmap','bind','_dragonbonesSpriteData','actor','match','zaTCg','IdleBypassList','Sprite_Actor','otTBG','code','bPxCU','event','MapSprite_ActorChange','_enemyId','isOnLadder','Mwqmc','MapSprite_ActorAnimationStop','push','hasDragonbones','dying','picture','width','addChildAt','ovyFa','dguot','uDHbm','performCollapse','walk','FlipEnemies','opacity','Animation','jcVPL','MapSprite_FollowerAnimationStop','motion','Game_Interpreter_PluginCommand','cZvOY','erasePicture','QvvCN','includes','MapSprite','testArmature','isActor','Dragonbones','attack','_character','skill','FollowerIndex','updateDragonbonesProperties','SkeExt','damage','jpAKS','isAttack','fGBoH','Scene_Battle_terminate','ScaleY','_spriteset','MotionDamage','hOBrs','updateFrameDragonbonesUnion','Jump','list','jump','Battler','_dragonbones','initMembersDragonbonesUnion','Settings','1107890UcJHgM','Sprite_Character_initialize','Picture_DragonbonesOffset','isInputting','defineProperty','initialize','OffsetX','WalkRate','hZIEW','updateShadowDragonbonesUnion','EVAL','FlipActors','bodPt','updateDragonbonesUnion','Filename','requestDragonbonesAnimation','aTNXL','createBaseDragonbonesSprite','add','NGHWD','Game_Follower_refresh','followers','name','WalkTimer','_dragonbonesFilename','_baseDragonbonesSprite','flipRight','MotionSwing','DashRate','Walk','chant','playTimes','aQWBV','note','filter','find','showPicture','escape','STR','setHue','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','idle','isGuardWaiting','setupPageSettings','mIqeD','children','TexKey','Game_Player_refresh','_shadowSprite','ARRAYJSON','registerCommand','ConvertParams','PWskj','_dragonbonesMoveTimer','MotionDead','ladderidle','_weaponSprite','ymGKp','createArmature','SqeFw','dashRate','performActionDragonbonesUnion','rUsxr','MotionSkill','isJumping','_dragonbonesName','TimeScale','MotionThrust','isDashing','isDragonbonesHueAffected','AkQTO','disposeDragonbones','trim','_dragonbonesSpriteContainer','SkeKey','dragonbonesAnimation','ARRAYSTRUCT','updateShadow','aBAkR','Game_Actor_setup','YvwlT','Loader','VisuMZ_0_CoreEngine','updateDragonbonesSelection','isAlive','loadComplete','ZXRGp','loadNextArmature','dispose','KstCz','ltOSv','shift','offsetY','onLoadDragonbones','erasePictureDragonbonesUnion','FBjse','updateDragonbonesArmature','exit','flipLeft','PixiFactory','setDragonbonesHue','getLastPluginCommandInterpreter','wNjwX','map','NUM','Game_Actor_performAction','OYxch','EventID','setupDragonbones','wvVOq','HbScW','YShIz','loadArmature','wait','bAuyN','MotionMissile','bfJpu','DragonbonesUnion','performDamageDragonbonesUnion','length','CblvL','setupDragonbonesDataNotetags','playDragonbonesAnimation','hmXWM','MapSprite_EventAnimationPlay','addChild','MotionSpell','cunyc','PictureID','Battler_ActorChange','follower','setFrame','Game_Enemy_performDamage','YYNvU','currentDragonbonesAnimation','MotionSleep','once','isCompleted','enemy','battleAniSpeed','1tBlsEK','factory','realMoveSpeed','Game_Enemy_performCollapse','requestMotionRefresh','ladderclimb','Game_Enemy_setup','MxFVE','MotionItem','_scene','qnrqV','createDefaultPicture','JSON','btFnO','_battler','isActing','EVmYV','GfhbB','_playtestF7Looping','offsetX','initMembers','ropeidle','parameters','MapSprite_PlayerAnimationStop','index','YycSC','Sprite_Picture_update','gDdvA','MotionDying','cJxVf','timeScale','JecpS','isSceneBattle','command357','MotionWait','Sprite_Actor_updateFrame','call','MotionVictory','oLtrD','isUndecided','Game_Event_setupPageSettings','YdMNC','FlipRight','SWoto','setupDragonbonesData','isHidden','ZrFNm','_stateSprite','lastAnimationName','GwKfc','_dragonbonesFlipDirection','animation','MotionEvade','oHXcE','LoadAnimation','LadderClimb','format','texture','prototype','Gfhwn','QsJHm','animations','animationNames','Game_Enemy_performAction','performActionMotions','victory','refresh','RopeIdle','sleep','QUvrK','gGkXH','leader','stateMotionIndex','nRKKP','updateDragonbonesTimeScale','SzIvv','Sprite_Character_updateBitmap','jZCCS','scale','performCollapseDragonbonesUnion','abnormal','isOnRope','HueAffected','TexExt','isChanting','testLoaded','Game_Screen_erasePicture','processLoad','VisuMZ_1_BattleCore','MotionEscape','performAction','refreshMotionDragonbones','data','EOeHl','4243nORCUE','_mainSprite','1471284XQldSE','setBattler','battlerSprites','OVaNP','UFWXd','LCPmH','vjmtg','ropeclimb','visible','Game_Actor_performAttack','test','transform','1jyDofl','buildArmatureDisplay','AssetsPath','concat','updateCharacterFrame','isMagicSkill','STRUCT','hasDragonbonesBattler','pFbFl','requestMotion','isEnemy','description','round','setup','refreshMotion','KNNnP','shared','_enemy','_pictures','dragonbonesSpriteData','setLastPluginCommandInterpreter','startMotion','MedJC','ScaleX','PUsPo','removeChild','422128lBSYLy','Game_Enemy_transform','bfBHq','updateDragonbonesAnimation','Game_Battler_requestMotion','guard','MotionChant','aGaeN','waJvV','dead','LoadQueue','direction','toLowerCase','_dragonbonesBattlerData','FUNC','Sprite_Enemy_initMembers','LadderIdle','Picture_TimeScaleDragonbones','bWUom'];const _0x23100c=_0x5ee0;(function(_0x352b99,_0x1676cd){const _0x20afde=_0x5ee0;while(!![]){try{const _0x5ebafc=parseInt(_0x20afde(0x2c4))+parseInt(_0x20afde(0x2aa))*-parseInt(_0x20afde(0x2fd))+parseInt(_0x20afde(0x29e))+-parseInt(_0x20afde(0x29c))*parseInt(_0x20afde(0x2fe))+parseInt(_0x20afde(0x2ed))*parseInt(_0x20afde(0x23e))+parseInt(_0x20afde(0x377))+parseInt(_0x20afde(0x2ef));if(_0x5ebafc===_0x1676cd)break;else _0x352b99['push'](_0x352b99['shift']());}catch(_0x18a0b9){_0x352b99['push'](_0x352b99['shift']());}}}(_0x1b16,0xd0860));var label=_0x23100c(0x227),tier=tier||0x0,dependencies=[_0x23100c(0x35f)],pluginData=$plugins[_0x23100c(0x1d4)](function(_0x41eb00){const _0x1dbe5d=_0x23100c;return _0x41eb00[_0x1dbe5d(0x2e9)]&&_0x41eb00[_0x1dbe5d(0x2b5)][_0x1dbe5d(0x35b)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0x23100c(0x376)]||{},VisuMZ[_0x23100c(0x1e5)]=function(_0x139c77,_0x74dbf6){const _0x57bab3=_0x23100c;for(const _0xba6ff0 in _0x74dbf6){if(_0x57bab3(0x33f)!==_0x57bab3(0x33f)){if(!_0x13adac)return;if(_0x45e5e5[_0x57bab3(0x247)][_0x57bab3(0x324)]!==_0x44962f)return;_0x1bd302[_0x57bab3(0x1e5)](_0x100df2,_0x3cc189);const _0xb892dd=_0x312f3a[_0x57bab3(0x217)](),_0x5d9a06=_0xee3fdf[_0x57bab3(0x340)](_0x436fe8[_0x57bab3(0x21d)]||_0xb892dd[_0x57bab3(0x304)]());if(!_0x5d9a06)return;_0x5d9a06['dragonbonesAnimation']='';}else{if(_0xba6ff0[_0x57bab3(0x339)](/(.*):(.*)/i)){const _0x2eb427=String(RegExp['$1']),_0x21c718=String(RegExp['$2'])['toUpperCase']()[_0x57bab3(0x1fa)]();let _0x19e3bd,_0x3d13ad,_0x7a687e;switch(_0x21c718){case _0x57bab3(0x21a):_0x19e3bd=_0x74dbf6[_0xba6ff0]!==''?Number(_0x74dbf6[_0xba6ff0]):0x0;break;case'ARRAYNUM':_0x3d13ad=_0x74dbf6[_0xba6ff0]!==''?JSON[_0x57bab3(0x30d)](_0x74dbf6[_0xba6ff0]):[],_0x19e3bd=_0x3d13ad[_0x57bab3(0x219)](_0x112f4e=>Number(_0x112f4e));break;case _0x57bab3(0x381):_0x19e3bd=_0x74dbf6[_0xba6ff0]!==''?eval(_0x74dbf6[_0xba6ff0]):null;break;case'ARRAYEVAL':_0x3d13ad=_0x74dbf6[_0xba6ff0]!==''?JSON[_0x57bab3(0x30d)](_0x74dbf6[_0xba6ff0]):[],_0x19e3bd=_0x3d13ad[_0x57bab3(0x219)](_0x21101c=>eval(_0x21101c));break;case _0x57bab3(0x24a):_0x19e3bd=_0x74dbf6[_0xba6ff0]!==''?JSON[_0x57bab3(0x30d)](_0x74dbf6[_0xba6ff0]):'';break;case _0x57bab3(0x1e3):_0x3d13ad=_0x74dbf6[_0xba6ff0]!==''?JSON['parse'](_0x74dbf6[_0xba6ff0]):[],_0x19e3bd=_0x3d13ad['map'](_0x24363e=>JSON[_0x57bab3(0x30d)](_0x24363e));break;case _0x57bab3(0x2d2):_0x19e3bd=_0x74dbf6[_0xba6ff0]!==''?new Function(JSON[_0x57bab3(0x30d)](_0x74dbf6[_0xba6ff0])):new Function('return\x200');break;case'ARRAYFUNC':_0x3d13ad=_0x74dbf6[_0xba6ff0]!==''?JSON[_0x57bab3(0x30d)](_0x74dbf6[_0xba6ff0]):[],_0x19e3bd=_0x3d13ad[_0x57bab3(0x219)](_0x249d55=>new Function(JSON[_0x57bab3(0x30d)](_0x249d55)));break;case _0x57bab3(0x1d8):_0x19e3bd=_0x74dbf6[_0xba6ff0]!==''?String(_0x74dbf6[_0xba6ff0]):'';break;case _0x57bab3(0x2ff):_0x3d13ad=_0x74dbf6[_0xba6ff0]!==''?JSON['parse'](_0x74dbf6[_0xba6ff0]):[],_0x19e3bd=_0x3d13ad[_0x57bab3(0x219)](_0x38df35=>String(_0x38df35));break;case _0x57bab3(0x2b0):_0x7a687e=_0x74dbf6[_0xba6ff0]!==''?JSON[_0x57bab3(0x30d)](_0x74dbf6[_0xba6ff0]):{},_0x19e3bd=VisuMZ[_0x57bab3(0x1e5)]({},_0x7a687e);break;case _0x57bab3(0x1fe):_0x3d13ad=_0x74dbf6[_0xba6ff0]!==''?JSON[_0x57bab3(0x30d)](_0x74dbf6[_0xba6ff0]):[],_0x19e3bd=_0x3d13ad[_0x57bab3(0x219)](_0x246a4a=>VisuMZ[_0x57bab3(0x1e5)]({},JSON[_0x57bab3(0x30d)](_0x246a4a)));break;default:continue;}_0x139c77[_0x2eb427]=_0x19e3bd;}}}return _0x139c77;},(_0x4d0c8b=>{const _0x4b5373=_0x23100c,_0x248ab9=_0x4d0c8b[_0x4b5373(0x38d)];for(const _0x29eccb of dependencies){if(!Imported[_0x29eccb]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x4b5373(0x276)](_0x248ab9,_0x29eccb)),SceneManager[_0x4b5373(0x213)]();break;}}const _0x57c2cc=_0x4d0c8b[_0x4b5373(0x2b5)];if(_0x57c2cc[_0x4b5373(0x339)](/\[Version[ ](.*?)\]/i)){const _0x944b83=Number(RegExp['$1']);_0x944b83!==VisuMZ[label][_0x4b5373(0x331)]&&(_0x4b5373(0x344)===_0x4b5373(0x36e)?_0x48c43a[_0x4b5373(0x2dd)]=_0x3f4c76(_0x507b70['$1']):(alert(_0x4b5373(0x1da)[_0x4b5373(0x276)](_0x248ab9,_0x944b83)),SceneManager[_0x4b5373(0x213)]()));}if(_0x57c2cc[_0x4b5373(0x339)](/\[Tier[ ](\d+)\]/i)){const _0x29c598=Number(RegExp['$1']);_0x29c598<tier?(alert(_0x4b5373(0x323)[_0x4b5373(0x276)](_0x248ab9,_0x29c598,tier)),SceneManager[_0x4b5373(0x213)]()):tier=Math['max'](_0x29c598,tier);}VisuMZ[_0x4b5373(0x1e5)](VisuMZ[label][_0x4b5373(0x376)],_0x4d0c8b['parameters']);})(pluginData);function _0x5ee0(_0x1a30e7,_0x4973d4){return _0x5ee0=function(_0x1b16c8,_0x5ee08e){_0x1b16c8=_0x1b16c8-0x1d3;let _0x184bdf=_0x1b16[_0x1b16c8];return _0x184bdf;},_0x5ee0(_0x1a30e7,_0x4973d4);}function DragonbonesManager(){throw new Error('This\x20is\x20a\x20static\x20class');}DragonbonesManager[_0x23100c(0x2ac)]=VisuMZ['DragonbonesUnion'][_0x23100c(0x376)][_0x23100c(0x2ac)],DragonbonesManager[_0x23100c(0x2e0)]=VisuMZ['DragonbonesUnion']['Settings'][_0x23100c(0x300)][_0x23100c(0x274)],DragonbonesManager[_0x23100c(0x326)]=[],DragonbonesManager[_0x23100c(0x2ce)]=[],DragonbonesManager['CallbackQueue']=[],DragonbonesManager[_0x23100c(0x2a8)]=function(_0x4b251b,_0x278610,_0x5e01ea,_0x2fe9d0){const _0x51f796=_0x23100c;if(!_0x5e01ea)_0x5e01ea=SceneManager['_scene'];if(!_0x2fe9d0)_0x2fe9d0=_0x51f796(0x35d);if(_0x5e01ea[_0x2fe9d0]){const _0x312a68=_0x5e01ea[_0x2fe9d0];_0x312a68&&(_0x5e01ea[_0x51f796(0x2c3)](_0x312a68),_0x312a68[_0x51f796(0x20a)]());}this[_0x51f796(0x222)](_0x4b251b,DragonbonesManager[_0x51f796(0x293)][_0x51f796(0x336)](this,_0x4b251b,_0x278610,_0x5e01ea,_0x2fe9d0));},DragonbonesManager[_0x23100c(0x293)]=function(_0x2f7292,_0x3c6488,_0x10a61d,_0x54765d){const _0x80cb6b=_0x23100c,_0x2874d2=this[_0x80cb6b(0x1ec)](_0x2f7292);_0x2874d2&&(_0x10a61d['addChild'](_0x2874d2),_0x2874d2['x']=Graphics['width']/0x2,_0x2874d2['y']=Graphics[_0x80cb6b(0x2dd)]*0x3/0x4,_0x3c6488=_0x3c6488||DragonbonesManager[_0x80cb6b(0x2e0)],_0x3c6488=_0x3c6488[_0x80cb6b(0x2d0)](),_0x2874d2['animation'][_0x80cb6b(0x27b)][_0x3c6488]&&(_0x80cb6b(0x369)!==_0x80cb6b(0x369)?this['initDragonbonesData']():_0x2874d2[_0x80cb6b(0x271)]['play'](_0x3c6488))),_0x10a61d[_0x54765d]=_0x2874d2;},DragonbonesManager[_0x23100c(0x1ec)]=function(_0x1392a5){const _0x33c557=_0x23100c,_0x57a251=dragonBones[_0x33c557(0x215)][_0x33c557(0x23f)][_0x33c557(0x2ab)](_0x1392a5);if(!_0x57a251)return null;for(const _0x5ba3aa in _0x57a251[_0x33c557(0x271)][_0x33c557(0x27b)]){if(_0x33c557(0x315)==='wytmX')_0x36193f[_0x33c557(0x214)]=!![];else{if(_0x5ba3aa[_0x33c557(0x2d0)]()===_0x5ba3aa)continue;_0x57a251[_0x33c557(0x271)][_0x33c557(0x27b)][_0x5ba3aa[_0x33c557(0x2d0)]()]=_0x57a251[_0x33c557(0x271)][_0x33c557(0x27b)][_0x5ba3aa],delete _0x57a251[_0x33c557(0x271)][_0x33c557(0x27b)][_0x5ba3aa];}}for(let _0x159e12=0x0;_0x159e12<_0x57a251[_0x33c557(0x271)][_0x33c557(0x27c)][_0x33c557(0x229)];_0x159e12++){_0x33c557(0x35a)!==_0x33c557(0x34e)?_0x57a251['animation'][_0x33c557(0x27c)][_0x159e12]=_0x57a251['animation'][_0x33c557(0x27c)][_0x159e12][_0x33c557(0x2d0)]():_0x54db63[_0x33c557(0x391)]=!![];}const _0x58f230=VisuMZ[_0x33c557(0x227)][_0x33c557(0x376)]['General']['LoopingAnimations'];for(let _0x1b9620 of _0x58f230){_0x1b9620=_0x1b9620['toLowerCase']()[_0x33c557(0x1fa)]();if(_0x57a251[_0x33c557(0x271)]['animations'][_0x1b9620]){if(_0x33c557(0x2fa)==='sXNGb'){if(!this[_0x33c557(0x2b1)]())return;this[_0x33c557(0x2b3)](_0x33c557(0x366));}else _0x57a251[_0x33c557(0x271)]['animations'][_0x1b9620]['playTimes']=0x0;}for(let _0x48b2b7=0x1;_0x48b2b7<=0x9;_0x48b2b7++){const _0x280ed2=_0x1b9620+_0x48b2b7;_0x57a251[_0x33c557(0x271)]['animations'][_0x280ed2]&&(_0x57a251[_0x33c557(0x271)][_0x33c557(0x27b)][_0x280ed2]['playTimes']=0x0);}}if(_0x57a251[_0x33c557(0x271)]['animations'][DragonbonesManager[_0x33c557(0x2e0)]]){if(_0x33c557(0x28b)==='pmGnq'){if(!_0x39683f[_0x33c557(0x25e)]())return null;if(!_0xb43513['_scene'][_0x33c557(0x36c)])return null;return _0x186f61[_0x33c557(0x247)]['_spriteset'][_0x33c557(0x32e)](this);}else _0x57a251[_0x33c557(0x271)][_0x33c557(0x31e)](DragonbonesManager[_0x33c557(0x2e0)]);}return _0x57a251;},DragonbonesManager[_0x23100c(0x222)]=function(_0x1de968,_0x3e88f2){const _0x152a06=_0x23100c;_0x1de968=_0x1de968['trim'](),DragonbonesManager[_0x152a06(0x2ce)][_0x152a06(0x346)](_0x1de968),DragonbonesManager[_0x152a06(0x2ea)][_0x152a06(0x346)](_0x3e88f2);const _0x30dd87=PIXI[_0x152a06(0x203)][_0x152a06(0x2ba)];!_0x30dd87['loading']&&this[_0x152a06(0x209)]();},DragonbonesManager[_0x23100c(0x209)]=function(){const _0x463a2e=_0x23100c;DragonbonesManager[_0x463a2e(0x2ce)]['length']>0x0?this[_0x463a2e(0x330)]():this[_0x463a2e(0x31c)]();},DragonbonesManager[_0x23100c(0x330)]=function(){const _0x288a9f=_0x23100c,_0x30d5ed=DragonbonesManager[_0x288a9f(0x2ce)][_0x288a9f(0x20d)]();if(this['LoadedFilenames'][_0x288a9f(0x35b)](_0x30d5ed))this[_0x288a9f(0x209)]();else!this[_0x288a9f(0x326)][_0x288a9f(0x35b)](_0x30d5ed)&&this[_0x288a9f(0x295)](_0x30d5ed);},DragonbonesManager['processLoad']=function(_0x1f3944){const _0x307b02=_0x23100c;this['LoadedFilenames'][_0x307b02(0x346)](_0x1f3944),this[_0x307b02(0x325)]=_0x1f3944;const _0x30f245=VisuMZ['DragonbonesUnion'][_0x307b02(0x376)]['General'],_0x5c17e1=DragonbonesManager[_0x307b02(0x2ac)],_0x1258e1=PIXI[_0x307b02(0x203)][_0x307b02(0x2ba)];_0x1258e1[_0x307b02(0x389)](_0x1f3944+_0x30f245['SkeKey'],_0x5c17e1+_0x1f3944+_0x30f245[_0x307b02(0x365)]),_0x1258e1['add'](_0x1f3944+_0x30f245[_0x307b02(0x1e0)],_0x5c17e1+_0x1f3944+_0x30f245[_0x307b02(0x291)]),_0x1258e1[_0x307b02(0x389)](_0x1f3944+_0x30f245['TxaKey'],_0x5c17e1+_0x1f3944+_0x30f245['TxaExt']),_0x1258e1[_0x307b02(0x23a)]('complete',DragonbonesManager[_0x307b02(0x207)],this),_0x1258e1['load']();},DragonbonesManager['loadComplete']=function(_0x1e817e,_0x47cf14){const _0x45a8c7=_0x23100c,_0x5169be=VisuMZ[_0x45a8c7(0x227)][_0x45a8c7(0x376)][_0x45a8c7(0x300)],_0x347664=this[_0x45a8c7(0x325)],_0x2b9115=dragonBones[_0x45a8c7(0x215)]['factory'];_0x2b9115[_0x45a8c7(0x30c)](_0x47cf14[_0x347664+_0x5169be[_0x45a8c7(0x1fc)]][_0x45a8c7(0x29a)]),_0x2b9115['parseTextureAtlasData'](_0x47cf14[_0x347664+_0x5169be[_0x45a8c7(0x1e0)]][_0x45a8c7(0x29a)],_0x47cf14[_0x347664+_0x5169be[_0x45a8c7(0x2f4)]][_0x45a8c7(0x277)]),this[_0x45a8c7(0x209)]();},DragonbonesManager[_0x23100c(0x31c)]=function(){const _0x356aca=_0x23100c;while(DragonbonesManager[_0x356aca(0x2ea)]['length']>0x0){const _0x12963b=DragonbonesManager['CallbackQueue']['shift']();if(_0x12963b)_0x12963b(this);}},PluginManager[_0x23100c(0x1e4)](pluginData[_0x23100c(0x38d)],_0x23100c(0x233),_0xa6dce2=>{const _0x579bea=_0x23100c;if(!$gameMap)return;VisuMZ['ConvertParams'](_0xa6dce2,_0xa6dce2);const _0x1d54aa=$gameActors['actor'](_0xa6dce2[_0x579bea(0x30a)]);if(!_0x1d54aa)return;_0x1d54aa['_dragonbonesBattlerData']={'battler':_0xa6dce2[_0x579bea(0x385)],'scaleX':_0xa6dce2[_0x579bea(0x2c1)],'scaleY':_0xa6dce2['ScaleY'],'offsetX':_0xa6dce2[_0x579bea(0x37d)],'offsetY':_0xa6dce2[_0x579bea(0x2ec)],'timeScale':_0xa6dce2['TimeScale'],'width':_0xa6dce2[_0x579bea(0x2f6)],'height':_0xa6dce2[_0x579bea(0x313)],'motion':{'walk':_0xa6dce2[_0x579bea(0x2e3)],'wait':_0xa6dce2[_0x579bea(0x260)],'chant':_0xa6dce2['MotionChant'],'guard':_0xa6dce2[_0x579bea(0x32f)],'damage':_0xa6dce2['MotionDamage'],'evade':_0xa6dce2[_0x579bea(0x272)],'thrust':_0xa6dce2['MotionThrust'],'swing':_0xa6dce2[_0x579bea(0x392)],'missile':_0xa6dce2[_0x579bea(0x225)],'skill':_0xa6dce2['MotionSkill'],'spell':_0xa6dce2['MotionSpell'],'item':_0xa6dce2['MotionItem'],'escape':_0xa6dce2['MotionEscape'],'victory':_0xa6dce2[_0x579bea(0x263)],'dying':_0xa6dce2[_0x579bea(0x25a)],'abnormal':_0xa6dce2['MotionAbnormal'],'sleep':_0xa6dce2[_0x579bea(0x239)],'dead':_0xa6dce2['MotionDead']}};}),SceneManager[_0x23100c(0x25e)]=function(){const _0x50880b=_0x23100c;return this[_0x50880b(0x247)]&&this['_scene'][_0x50880b(0x324)]===Scene_Battle;},SceneManager['isSceneMap']=function(){const _0x5b0b7f=_0x23100c;return this['_scene']&&this[_0x5b0b7f(0x247)][_0x5b0b7f(0x324)]===Scene_Map;},Game_BattlerBase[_0x23100c(0x278)][_0x23100c(0x32a)]=function(){const _0x8348b6=_0x23100c;if(!SceneManager['isSceneBattle']())return null;if(!SceneManager['_scene'][_0x8348b6(0x36c)])return null;return SceneManager[_0x8348b6(0x247)]['_spriteset'][_0x8348b6(0x32e)](this);},Game_BattlerBase[_0x23100c(0x278)][_0x23100c(0x314)]=function(){const _0x4d099b=_0x23100c,_0x4b0510=VisuMZ[_0x4d099b(0x227)]['Settings']['Battler'];this['_dragonbonesBattlerData']={'battler':'','scaleX':_0x4b0510[_0x4d099b(0x2c1)],'scaleY':_0x4b0510[_0x4d099b(0x36b)],'width':_0x4b0510[_0x4d099b(0x2f6)],'height':_0x4b0510['Height'],'offsetX':_0x4b0510[_0x4d099b(0x37d)],'offsetY':_0x4b0510['OffsetY'],'timeScale':_0x4b0510['TimeScale'],'motion':{'walk':_0x4b0510[_0x4d099b(0x2e3)],'wait':_0x4b0510[_0x4d099b(0x260)],'chant':_0x4b0510[_0x4d099b(0x2ca)],'guard':_0x4b0510[_0x4d099b(0x32f)],'damage':_0x4b0510[_0x4d099b(0x36d)],'evade':_0x4b0510[_0x4d099b(0x272)],'thrust':_0x4b0510['MotionThrust'],'swing':_0x4b0510[_0x4d099b(0x392)],'missile':_0x4b0510[_0x4d099b(0x225)],'skill':_0x4b0510['MotionSkill'],'spell':_0x4b0510[_0x4d099b(0x230)],'item':_0x4b0510[_0x4d099b(0x246)],'escape':_0x4b0510[_0x4d099b(0x297)],'victory':_0x4b0510[_0x4d099b(0x263)],'dying':_0x4b0510['MotionDying'],'abnormal':_0x4b0510['MotionAbnormal'],'sleep':_0x4b0510[_0x4d099b(0x239)],'dead':_0x4b0510['MotionDead']}};if(_0x4b0510['FlipActors']&&this[_0x4d099b(0x35e)]())this[_0x4d099b(0x2d1)][_0x4d099b(0x321)]*=-0x1;if(_0x4b0510['FlipEnemies']&&this['isEnemy']())this[_0x4d099b(0x2d1)][_0x4d099b(0x321)]*=-0x1;},Game_BattlerBase[_0x23100c(0x278)]['setupDragonbonesData']=function(){const _0x5daa33=_0x23100c,_0x156051=VisuMZ['DragonbonesUnion'][_0x5daa33(0x376)][_0x5daa33(0x373)],_0x31381d=(this[_0x5daa33(0x35e)]()?this['actor']():this[_0x5daa33(0x23c)]())['note'],_0x35eccb=this[_0x5daa33(0x31f)]();_0x31381d['match'](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:BATTLER|SKIN|NAME):[ ]*(.*)>/i)&&(_0x35eccb[_0x5daa33(0x32a)]=String(RegExp['$1'])[_0x5daa33(0x1fa)]());_0x31381d[_0x5daa33(0x339)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER):[ ]*(.*)>/i)&&(_0x5daa33(0x220)!==_0x5daa33(0x383)?_0x35eccb[_0x5daa33(0x32a)]=String(RegExp['$1'])[_0x5daa33(0x1fa)]():_0x271fe8['height']=_0x37a8f9(_0x1c51e5['$1']));if(_0x31381d[_0x5daa33(0x339)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]SCALE:[ ](.*),[ ](.*)>/i)){if(_0x5daa33(0x24e)===_0x5daa33(0x24e))_0x35eccb[_0x5daa33(0x321)]=Number(RegExp['$1']),_0x35eccb[_0x5daa33(0x2f8)]=Number(RegExp['$2']);else{if(this[_0x5daa33(0x349)](_0x4c9faf))return;this['showPicture'](_0x3261a,'',0x0,_0x485c93[_0x5daa33(0x2b6)](_0x6efd7c['width']/0x2),_0x254d09[_0x5daa33(0x2b6)](_0xf2d100[_0x5daa33(0x2dd)]/0x2),0x64,0x64,0xff,0x0);}}_0x31381d[_0x5daa33(0x339)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:SCALEX|SCALE X):[ ](.*)>/i)&&(_0x35eccb[_0x5daa33(0x321)]=Number(RegExp['$1']));if(_0x31381d[_0x5daa33(0x339)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]SCALEY:[ ](.*)>/i)){if(_0x5daa33(0x248)!==_0x5daa33(0x248)){if(!_0x5d9cb4)return;_0x319966['ConvertParams'](_0x5463e2,_0x24414a),_0x2bdced[_0x5daa33(0x249)](_0x13afe4[_0x5daa33(0x232)]);const _0x52d44a=_0x17baff[_0x5daa33(0x349)](_0x3bc795['PictureID']),_0x4b03ab=_0x52d44a[_0x5daa33(0x31f)]();_0x4b03ab[_0x5daa33(0x25c)]=_0x512492[_0x5daa33(0x1f4)];}else _0x35eccb[_0x5daa33(0x2f8)]=Number(RegExp['$1']);}_0x31381d[_0x5daa33(0x339)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]OFFSET:[ ](.*),[ ](.*)>/i)&&(_0x35eccb[_0x5daa33(0x251)]=Number(RegExp['$1']),_0x35eccb[_0x5daa33(0x20e)]=Number(RegExp['$2']));_0x31381d[_0x5daa33(0x339)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:OFFSETX|OFFSET X):[ ](.*)>/i)&&(_0x5daa33(0x2f5)!=='yMKsh'?_0x35eccb[_0x5daa33(0x251)]=Number(RegExp['$1']):this[_0x5daa33(0x31d)](_0x5daa33(0x350)));_0x31381d[_0x5daa33(0x339)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:OFFSETY|OFFSET Y):[ ](.*)>/i)&&(_0x35eccb[_0x5daa33(0x20e)]=Number(RegExp['$1']));_0x31381d[_0x5daa33(0x339)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:TIMESCALE|TIME SCALE):[ ](.*)>/i)&&(_0x5daa33(0x306)!==_0x5daa33(0x2cb)?_0x35eccb['timeScale']=Number(RegExp['$1']):(this[_0x5daa33(0x1fb)]=new _0x43ebd5(),this['_dragonbonesSpriteContainer'][_0x5daa33(0x22f)](this['_dragonbones'])));if(_0x31381d[_0x5daa33(0x339)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]SIZE:[ ](.*),[ ](.*)>/i)){if(_0x5daa33(0x21f)!==_0x5daa33(0x2d7))_0x35eccb[_0x5daa33(0x34a)]=Number(RegExp['$1']),_0x35eccb[_0x5daa33(0x2dd)]=Number(RegExp['$2']);else{const _0x572439=_0x4272f5+_0x1442f4;_0x5f1cfd[_0x5daa33(0x271)][_0x5daa33(0x27b)][_0x572439]&&(_0x1da4e8[_0x5daa33(0x271)][_0x5daa33(0x27b)][_0x572439][_0x5daa33(0x396)]=0x0);}}_0x31381d[_0x5daa33(0x339)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]WIDTH:[ ](.*)>/i)&&(_0x35eccb[_0x5daa33(0x34a)]=Number(RegExp['$1']));_0x31381d[_0x5daa33(0x339)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]HEIGHT:[ ](.*)>/i)&&(_0x35eccb[_0x5daa33(0x2dd)]=Number(RegExp['$1']));const _0x4ab28b=_0x31381d[_0x5daa33(0x339)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:ANI|MOTION)[ ](.*):[ ](.*)>/gi);if(_0x4ab28b)for(const _0x43f77e of _0x4ab28b){_0x43f77e[_0x5daa33(0x339)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:ANI|MOTION)[ ](.*):[ ](.*)>/i);const _0xcb1597=String(RegExp['$1'])[_0x5daa33(0x2d0)]()[_0x5daa33(0x1fa)](),_0x20b838=String(RegExp['$2'])[_0x5daa33(0x1fa)]();_0x35eccb[_0x5daa33(0x356)][_0xcb1597]=_0x20b838;}if(_0x31381d[_0x5daa33(0x339)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER) (?:SETTINGS|SETTING)>\s*([\s\S]*)\s*<\/(?:DB|DRAGONBONE|DRAGONBONES BATTLER) (?:SETTINGS|SETTING)>/i)){if(_0x5daa33(0x328)==='FnTyQ'){const _0x530b9=String(RegExp['$1']);_0x530b9[_0x5daa33(0x339)](/(?:BATTLER|SKIN|NAME|FILENAME):[ ]*(.*)/i)&&(_0x5daa33(0x24b)===_0x5daa33(0x37f)?this[_0x5daa33(0x270)]=0x1:_0x35eccb['battler']=String(RegExp['$1'])[_0x5daa33(0x1fa)]());_0x530b9[_0x5daa33(0x339)](/SCALE:[ ](.*),[ ](.*)/i)&&(_0x5daa33(0x279)!=='CabYQ'?(_0x35eccb[_0x5daa33(0x321)]=Number(RegExp['$1']),_0x35eccb[_0x5daa33(0x2f8)]=Number(RegExp['$2'])):this[_0x5daa33(0x1e7)]--);if(_0x530b9['match'](/(?:SCALEX|SCALE X):[ ](.*)/i)){if('ngihr'===_0x5daa33(0x25b)){if(!this[_0x5daa33(0x374)])return;if(!this['_baseDragonbonesSprite'])return;this[_0x5daa33(0x390)][_0x5daa33(0x34b)](this['_dragonbones'],0x0);}else _0x35eccb[_0x5daa33(0x321)]=Number(RegExp['$1']);}_0x530b9['match'](/(?:SCALEY|SCALE Y):[ ](.*)/i)&&(_0x35eccb['scaleY']=Number(RegExp['$1']));_0x530b9[_0x5daa33(0x339)](/OFFSET:[ ](.*),[ ](.*)/i)&&(_0x5daa33(0x20c)!==_0x5daa33(0x24f)?(_0x35eccb[_0x5daa33(0x251)]=Number(RegExp['$1']),_0x35eccb[_0x5daa33(0x20e)]=Number(RegExp['$2'])):this[_0x5daa33(0x31d)](_0x5daa33(0x348)));_0x530b9[_0x5daa33(0x339)](/(?:OFFSETX|OFFSET X):[ ](.*)/i)&&(_0x5daa33(0x33a)!==_0x5daa33(0x33a)?(_0x54b091(_0x5daa33(0x323)['format'](_0x3a070e,_0xdcde88,_0x5c4406)),_0x436d0b[_0x5daa33(0x213)]()):_0x35eccb[_0x5daa33(0x251)]=Number(RegExp['$1']));_0x530b9[_0x5daa33(0x339)](/(?:OFFSETY|OFFSET Y):[ ](.*)/i)&&(_0x35eccb[_0x5daa33(0x20e)]=Number(RegExp['$1']));_0x530b9[_0x5daa33(0x339)](/(?:TIMESCALE|TIME SCALE):[ ](.*)/i)&&(_0x35eccb[_0x5daa33(0x25c)]=Number(RegExp['$1']));_0x530b9[_0x5daa33(0x339)](/SIZE:[ ](.*),[ ](.*)/i)&&(_0x5daa33(0x22a)!==_0x5daa33(0x22a)?this[_0x5daa33(0x32a)]()['playDragonbonesAnimation'](_0x3ba09c):(_0x35eccb[_0x5daa33(0x34a)]=Number(RegExp['$1']),_0x35eccb[_0x5daa33(0x2dd)]=Number(RegExp['$2'])));if(_0x530b9[_0x5daa33(0x339)](/WIDTH:[ ](.*)/i)){if(_0x5daa33(0x358)===_0x5daa33(0x305)){if(!_0x4f7653)return;if(_0x27dd04['_scene'][_0x5daa33(0x324)]!==_0x3e9780)return;_0x413623['dragonbonesAnimation']='';}else _0x35eccb[_0x5daa33(0x34a)]=Number(RegExp['$1']);}_0x530b9[_0x5daa33(0x339)](/HEIGHT:[ ](.*)/i)&&(_0x35eccb[_0x5daa33(0x2dd)]=Number(RegExp['$1']));const _0x328589=_0x530b9['match'](/(?:ANI|MOTION)[ ](.*):[ ](.*)/gi);if(_0x328589)for(const _0x4aad3b of _0x328589){_0x4aad3b['match'](/(?:ANI|MOTION)[ ](.*):[ ](.*)/i);const _0x3f0d69=String(RegExp['$1'])['toLowerCase']()[_0x5daa33(0x1fa)](),_0x224e6a=String(RegExp['$2'])[_0x5daa33(0x1fa)]();_0x35eccb['motion'][_0x3f0d69]=_0x224e6a;}}else _0x154c94[_0x5daa33(0x251)]=_0x5738a3(_0x3c72f7['$1']);}if(_0x156051[_0x5daa33(0x382)]&&this[_0x5daa33(0x35e)]())_0x35eccb[_0x5daa33(0x321)]*=-0x1;if(_0x156051[_0x5daa33(0x351)]&&this[_0x5daa33(0x2b4)]())_0x35eccb[_0x5daa33(0x321)]*=-0x1;},Game_BattlerBase[_0x23100c(0x278)][_0x23100c(0x31f)]=function(){const _0x2dd3b5=_0x23100c;if(this[_0x2dd3b5(0x2d1)]!==undefined)return this['_dragonbonesBattlerData'];return this['initDragonbonesData'](),this['setupDragonbonesData'](),this[_0x2dd3b5(0x2d1)];},Game_BattlerBase['prototype'][_0x23100c(0x2b1)]=function(){const _0x96e522=_0x23100c;return this['battler']()&&this[_0x96e522(0x31f)]()[_0x96e522(0x32a)]!=='';},VisuMZ[_0x23100c(0x227)][_0x23100c(0x2c8)]=Game_Battler[_0x23100c(0x278)][_0x23100c(0x2b3)],Game_Battler[_0x23100c(0x278)][_0x23100c(0x2b3)]=function(_0x3cd5a9){const _0x207a7e=_0x23100c;VisuMZ[_0x207a7e(0x227)][_0x207a7e(0x2c8)]['call'](this,_0x3cd5a9),this[_0x207a7e(0x2b1)]()&&this[_0x207a7e(0x32a)]()[_0x207a7e(0x31d)](_0x3cd5a9);},VisuMZ[_0x23100c(0x227)]['Game_Battler_requestMotionRefresh']=Game_Battler[_0x23100c(0x278)]['requestMotionRefresh'],Game_Battler[_0x23100c(0x278)][_0x23100c(0x242)]=function(){const _0x32b4df=_0x23100c;VisuMZ[_0x32b4df(0x227)]['Game_Battler_requestMotionRefresh'][_0x32b4df(0x262)](this),this['hasDragonbonesBattler']()&&(_0x32b4df(0x2a2)===_0x32b4df(0x2a2)?this['battler']()[_0x32b4df(0x307)]():_0x2daf0f[_0x32b4df(0x34a)]=_0x2f34d7(_0xf755b4['$1']));},Game_Battler[_0x23100c(0x278)][_0x23100c(0x386)]=function(_0x4f8427){const _0x2cc2b1=_0x23100c;if(this[_0x2cc2b1(0x2b1)]()){if('FBjse'!==_0x2cc2b1(0x211)){const _0x2ed061=_0x49f27f[_0x2cc2b1(0x356)][_0x418364];this[_0x2cc2b1(0x22c)](_0x2ed061);}else this[_0x2cc2b1(0x32a)]()[_0x2cc2b1(0x22c)](_0x4f8427);}},Game_Battler[_0x23100c(0x278)]['performDamageDragonbonesUnion']=function(){const _0x592db0=_0x23100c;if(!this['hasDragonbonesBattler']())return;this[_0x592db0(0x2b3)](_0x592db0(0x366));},Game_Battler[_0x23100c(0x278)][_0x23100c(0x28d)]=function(){const _0x4a8e39=_0x23100c;if(!this[_0x4a8e39(0x2b1)]())return;this[_0x4a8e39(0x2b3)]('dead');},VisuMZ[_0x23100c(0x227)][_0x23100c(0x201)]=Game_Actor[_0x23100c(0x278)][_0x23100c(0x2b7)],Game_Actor[_0x23100c(0x278)]['setup']=function(_0x24c58a){const _0x55a830=_0x23100c;VisuMZ[_0x55a830(0x227)][_0x55a830(0x201)][_0x55a830(0x262)](this,_0x24c58a),this[_0x55a830(0x314)](),this['setupDragonbonesData']();},VisuMZ[_0x23100c(0x227)][_0x23100c(0x21b)]=Game_Actor[_0x23100c(0x278)][_0x23100c(0x298)],Game_Actor['prototype']['performAction']=function(_0x371cdd){const _0x214f90=_0x23100c;this[_0x214f90(0x386)](_0x214f90(0x360)),VisuMZ[_0x214f90(0x227)][_0x214f90(0x21b)][_0x214f90(0x262)](this,_0x371cdd);},VisuMZ['DragonbonesUnion']['Game_Actor_performAttack']=Game_Actor['prototype']['performAttack'],Game_Actor[_0x23100c(0x278)]['performAttack']=function(){const _0x2e9805=_0x23100c;this[_0x2e9805(0x386)](_0x2e9805(0x360)),VisuMZ[_0x2e9805(0x227)][_0x2e9805(0x2a7)][_0x2e9805(0x262)](this);},VisuMZ[_0x23100c(0x227)][_0x23100c(0x308)]=Game_Actor['prototype'][_0x23100c(0x2e7)],Game_Actor[_0x23100c(0x278)][_0x23100c(0x2e7)]=function(){const _0x24e874=_0x23100c;VisuMZ['DragonbonesUnion']['Game_Actor_performDamage'][_0x24e874(0x262)](this),this[_0x24e874(0x228)]();},VisuMZ[_0x23100c(0x227)]['Game_Actor_performCollapse']=Game_Actor[_0x23100c(0x278)][_0x23100c(0x34f)],Game_Actor[_0x23100c(0x278)][_0x23100c(0x34f)]=function(){const _0x28f03c=_0x23100c;VisuMZ[_0x28f03c(0x227)]['Game_Actor_performCollapse'][_0x28f03c(0x262)](this),this[_0x28f03c(0x28d)]();},VisuMZ[_0x23100c(0x227)]['Game_Enemy_setup']=Game_Enemy[_0x23100c(0x278)][_0x23100c(0x2b7)],Game_Enemy['prototype'][_0x23100c(0x2b7)]=function(_0x548453,_0x4387b7,_0x4f83e8){const _0x20bde3=_0x23100c;VisuMZ[_0x20bde3(0x227)][_0x20bde3(0x244)]['call'](this,_0x548453,_0x4387b7,_0x4f83e8),this[_0x20bde3(0x314)](),this[_0x20bde3(0x26a)]();},VisuMZ[_0x23100c(0x227)][_0x23100c(0x2c5)]=Game_Enemy[_0x23100c(0x278)]['transform'],Game_Enemy['prototype'][_0x23100c(0x2a9)]=function(_0x5bb780){const _0x1aa67e=_0x23100c,_0x1ec83b=this[_0x1aa67e(0x342)];VisuMZ['DragonbonesUnion'][_0x1aa67e(0x2c5)]['call'](this,_0x5bb780);if(this[_0x1aa67e(0x342)]!==_0x1ec83b){if(_0x1aa67e(0x387)==='aTNXL')this[_0x1aa67e(0x314)](),this[_0x1aa67e(0x26a)]();else return this[_0x1aa67e(0x247)]&&this[_0x1aa67e(0x247)]['constructor']===_0x1e6e24;}},VisuMZ[_0x23100c(0x227)][_0x23100c(0x27d)]=Game_Enemy[_0x23100c(0x278)][_0x23100c(0x298)],Game_Enemy[_0x23100c(0x278)][_0x23100c(0x298)]=function(_0x1033c3){const _0x12e326=_0x23100c;VisuMZ['DragonbonesUnion']['Game_Enemy_performAction'][_0x12e326(0x262)](this,_0x1033c3),this[_0x12e326(0x1ef)](_0x1033c3);},Game_Enemy[_0x23100c(0x278)]['performActionDragonbonesUnion']=function(_0xb2bc7d){const _0x9fbcd8=_0x23100c;if(!this['hasDragonbonesBattler']())return;this[_0x9fbcd8(0x386)](_0x9fbcd8(0x360));if(Imported[_0x9fbcd8(0x296)])return this[_0x9fbcd8(0x27e)](_0xb2bc7d);if(_0xb2bc7d[_0x9fbcd8(0x368)]())this[_0x9fbcd8(0x386)](_0x9fbcd8(0x360));else{if(_0xb2bc7d[_0x9fbcd8(0x322)]())this['requestMotion'](_0x9fbcd8(0x2c9));else{if(_0xb2bc7d[_0x9fbcd8(0x2af)]())this['requestMotion']('spell');else{if(_0xb2bc7d[_0x9fbcd8(0x302)]())_0xb2bc7d['item']()['damage']['type']>0x0?this[_0x9fbcd8(0x386)](_0x9fbcd8(0x360)):_0x9fbcd8(0x1e6)===_0x9fbcd8(0x267)?_0x3204ee*=(_0x4424a0[_0x9fbcd8(0x23d)]||0x0)+0x1:this['requestMotion']('skill');else _0xb2bc7d['isItem']()&&this[_0x9fbcd8(0x2b3)]('item');}}}},VisuMZ['DragonbonesUnion'][_0x23100c(0x236)]=Game_Enemy['prototype'][_0x23100c(0x2e7)],Game_Enemy[_0x23100c(0x278)][_0x23100c(0x2e7)]=function(){const _0x2a0b05=_0x23100c;VisuMZ[_0x2a0b05(0x227)][_0x2a0b05(0x236)][_0x2a0b05(0x262)](this),this['performDamageDragonbonesUnion']();},VisuMZ[_0x23100c(0x227)][_0x23100c(0x241)]=Game_Enemy[_0x23100c(0x278)][_0x23100c(0x34f)],Game_Enemy[_0x23100c(0x278)][_0x23100c(0x34f)]=function(){const _0x18f6fe=_0x23100c;VisuMZ[_0x18f6fe(0x227)][_0x18f6fe(0x241)][_0x18f6fe(0x262)](this),this[_0x18f6fe(0x28d)]();},VisuMZ[_0x23100c(0x227)][_0x23100c(0x36a)]=Scene_Battle['prototype'][_0x23100c(0x303)],Scene_Battle[_0x23100c(0x278)][_0x23100c(0x303)]=function(){const _0x3ae331=_0x23100c;this[_0x3ae331(0x36c)][_0x3ae331(0x1f9)](),VisuMZ['DragonbonesUnion']['Scene_Battle_terminate'][_0x3ae331(0x262)](this);},Sprite_Battler[_0x23100c(0x278)][_0x23100c(0x375)]=function(){const _0x4cf941=_0x23100c;this[_0x4cf941(0x374)]=null,this[_0x4cf941(0x1f3)]='';},Sprite_Battler['prototype']['setupDragonbones']=function(){const _0x39ffa4=_0x23100c;this[_0x39ffa4(0x1f9)]();const _0x2b4786=this[_0x39ffa4(0x24c)]['dragonbonesData']();this[_0x39ffa4(0x1f3)]=_0x2b4786['battler'],armatureName=_0x2b4786['battler'],DragonbonesManager[_0x39ffa4(0x222)](armatureName,this[_0x39ffa4(0x20f)][_0x39ffa4(0x336)](this)),this[_0x39ffa4(0x319)]=new Bitmap(_0x2b4786['width'],_0x2b4786['height']),this[_0x39ffa4(0x29d)]&&(this['_mainSprite'][_0x39ffa4(0x319)]=new Bitmap(_0x2b4786[_0x39ffa4(0x34a)],_0x2b4786[_0x39ffa4(0x2dd)]));},Sprite_Battler[_0x23100c(0x278)][_0x23100c(0x1f9)]=function(){const _0x5f362=_0x23100c;if(this[_0x5f362(0x374)]){if(_0x5f362(0x1ed)===_0x5f362(0x32c)){if(this['_dragonbonesBattlerData']!==_0x58d1a2)return this[_0x5f362(0x2d1)];return this[_0x5f362(0x314)](),this[_0x5f362(0x26a)](),this[_0x5f362(0x2d1)];}else this[_0x5f362(0x1fb)]&&('nuxsy'!=='nuxsy'?_0x3238d2*=_0x2825b9[_0x5f362(0x333)]:this[_0x5f362(0x1fb)]['removeChild'](this[_0x5f362(0x374)])),this[_0x5f362(0x2c3)](this['_dragonbones']),this[_0x5f362(0x374)]['dispose'](),delete this['_dragonbones'],delete this['_dragonbonesName'];}},Sprite_Battler['prototype'][_0x23100c(0x20f)]=function(){const _0xd4f0c5=_0x23100c,_0x39b267=this[_0xd4f0c5(0x24c)][_0xd4f0c5(0x31f)]();this[_0xd4f0c5(0x374)]=DragonbonesManager[_0xd4f0c5(0x1ec)](_0x39b267[_0xd4f0c5(0x32a)]),!this[_0xd4f0c5(0x1fb)]&&(this[_0xd4f0c5(0x1fb)]=new Sprite(),this[_0xd4f0c5(0x1fb)][_0xd4f0c5(0x22f)](this[_0xd4f0c5(0x374)])),this[_0xd4f0c5(0x34b)](this[_0xd4f0c5(0x1fb)],0x0),this['attachSpritesToDistortionSprite']&&(this['attachSpritesToDistortionSprite'](),this[_0xd4f0c5(0x1fb)]['addChild'](this[_0xd4f0c5(0x374)])),this[_0xd4f0c5(0x307)](),this[_0xd4f0c5(0x374)]['x']=_0x39b267[_0xd4f0c5(0x251)],this[_0xd4f0c5(0x374)]['y']=_0x39b267[_0xd4f0c5(0x20e)],this[_0xd4f0c5(0x374)]['scale']['x']=_0x39b267[_0xd4f0c5(0x321)],this[_0xd4f0c5(0x374)][_0xd4f0c5(0x28c)]['y']=_0x39b267[_0xd4f0c5(0x2f8)],this[_0xd4f0c5(0x24c)]&&this[_0xd4f0c5(0x24c)][_0xd4f0c5(0x26b)]()&&(this['opacity']=0x0);},Sprite_Battler['prototype'][_0x23100c(0x31d)]=function(_0x4002ca){const _0x29f0bb=_0x23100c;if(!this['_dragonbones'])return;const _0x3ca56b=this[_0x29f0bb(0x24c)][_0x29f0bb(0x31f)]();if(_0x3ca56b[_0x29f0bb(0x356)][_0x4002ca]){const _0x2a6b12=_0x3ca56b[_0x29f0bb(0x356)][_0x4002ca];this[_0x29f0bb(0x22c)](_0x2a6b12);}},Sprite_Battler[_0x23100c(0x278)][_0x23100c(0x22c)]=function(_0x5f427d){const _0x360f0c=_0x23100c;_0x5f427d=_0x5f427d['toLowerCase']();if(!this[_0x360f0c(0x374)])return;const _0x37544a=this[_0x360f0c(0x374)]['animation'];if(_0x37544a['animations'][_0x5f427d]){if(_0x360f0c(0x208)===_0x360f0c(0x289))this[_0x360f0c(0x216)](_0x5db7b6);else{const _0x196f7a=_0x37544a[_0x360f0c(0x26e)],_0x4cb15e=[_0x360f0c(0x1db),_0x360f0c(0x350),_0x360f0c(0x223),_0x360f0c(0x395),_0x360f0c(0x2c9),'dying',_0x360f0c(0x28e),_0x360f0c(0x282),_0x360f0c(0x2cd)];if(_0x196f7a===_0x5f427d&&_0x4cb15e['includes'](_0x5f427d))return;_0x37544a[_0x360f0c(0x31e)](_0x5f427d);}}},Sprite_Battler[_0x23100c(0x278)][_0x23100c(0x309)]=function(){const _0x1d2779=_0x23100c;this[_0x1d2779(0x288)](),this['updateDragonbonesAnimation'](),this[_0x1d2779(0x205)]();},Sprite_Battler[_0x23100c(0x278)][_0x23100c(0x288)]=function(){const _0x52b2af=_0x23100c;if(!this['_dragonbones'])return;let _0x4739be=this['_battler'][_0x52b2af(0x31f)]()[_0x52b2af(0x25c)];const _0xb14c8=SceneManager['_scene'];Imported[_0x52b2af(0x204)]&&_0xb14c8[_0x52b2af(0x250)]&&$gameTemp['_playTestFastMode']&&(_0x4739be*=0x2),Imported[_0x52b2af(0x2e4)]&&_0xb14c8['_battleAniSpeedLooping']&&(_0x52b2af(0x34c)===_0x52b2af(0x20b)?(_0x4eaea0['DragonbonesUnion']['Game_Player_refresh'][_0x52b2af(0x262)](this),this[_0x52b2af(0x26a)]()):_0x4739be*=(ConfigManager['battleAniSpeed']||0x0)+0x1),this[_0x52b2af(0x374)][_0x52b2af(0x271)][_0x52b2af(0x25c)]=_0x4739be;},Sprite_Battler[_0x23100c(0x278)][_0x23100c(0x2c7)]=function(){const _0x32f87b=_0x23100c;if(!this[_0x32f87b(0x374)])return;const _0x5e62dc=this[_0x32f87b(0x374)]['animation'];if(_0x5e62dc[_0x32f87b(0x23b)]){const _0x2259ad=_0x5e62dc[_0x32f87b(0x26e)];let _0x3c867d=VisuMZ[_0x32f87b(0x227)][_0x32f87b(0x376)][_0x32f87b(0x373)][_0x32f87b(0x33b)];_0x3c867d===undefined&&(_0x3c867d=[_0x32f87b(0x2cd),_0x32f87b(0x1d7),_0x32f87b(0x27f)]),!_0x3c867d[_0x32f87b(0x35b)](_0x2259ad)&&('svnFX'!=='svnFX'?this['playDragonbonesMotion'](_0x32f87b(0x2c9)):this[_0x32f87b(0x307)]());}},Sprite_Battler[_0x23100c(0x278)]['updateDragonbonesSelection']=function(){return;},Sprite_Battler[_0x23100c(0x278)][_0x23100c(0x307)]=function(){const _0x3ef7eb=_0x23100c;if(!this[_0x3ef7eb(0x374)])return;const _0x1e0640=this[_0x3ef7eb(0x24c)];if(!_0x1e0640)return;const _0x1f57e8=this[_0x3ef7eb(0x374)][_0x3ef7eb(0x271)];if(_0x1f57e8&&!_0x1f57e8[_0x3ef7eb(0x23b)])return;if(this[_0x3ef7eb(0x24c)][_0x3ef7eb(0x206)]()){if(_0x3ef7eb(0x264)===_0x3ef7eb(0x1f8)){if(!this[_0x3ef7eb(0x24c)])return![];if(!this[_0x3ef7eb(0x374)])return![];const _0x453615=this[_0x3ef7eb(0x24c)][_0x3ef7eb(0x23c)]()[_0x3ef7eb(0x1d3)]||'';if(_0x453615[_0x3ef7eb(0x339)](/<DRAGONBONES HUE AFFECTED>/i))return!![];else{if(_0x453615[_0x3ef7eb(0x339)](/<DRAGONBONES NO HUE>/i))return![];}return _0x5c6c8b[_0x3ef7eb(0x227)]['Settings'][_0x3ef7eb(0x373)][_0x3ef7eb(0x290)];}else this[_0x3ef7eb(0x22c)](_0x3ef7eb(0x1db));}const _0x1711b5=_0x1e0640['stateMotionIndex']();if(_0x1e0640[_0x3ef7eb(0x37a)]()||_0x1e0640['isActing']())_0x3ef7eb(0x287)===_0x3ef7eb(0x287)?this[_0x3ef7eb(0x31d)]('walk'):(this[_0x3ef7eb(0x288)](),this[_0x3ef7eb(0x2c7)](),this[_0x3ef7eb(0x205)]());else{if(_0x1711b5===0x3){if(_0x3ef7eb(0x2c6)===_0x3ef7eb(0x2c6))this[_0x3ef7eb(0x31d)](_0x3ef7eb(0x2cd));else{const _0xc01741=_0x1afeb7[_0x3ef7eb(0x26e)];let _0x2250df=_0x22eb56[_0x3ef7eb(0x227)][_0x3ef7eb(0x376)][_0x3ef7eb(0x373)]['IdleBypassList'];_0x2250df===_0x44bd3d&&(_0x2250df=[_0x3ef7eb(0x2cd),_0x3ef7eb(0x1d7),'victory']),!_0x2250df['includes'](_0xc01741)&&this[_0x3ef7eb(0x307)]();}}else{if(_0x1711b5===0x2)_0x3ef7eb(0x224)===_0x3ef7eb(0x200)?_0x52298d[_0x3ef7eb(0x25c)]=_0x3918e0(_0x10f063['$1']):this[_0x3ef7eb(0x31d)](_0x3ef7eb(0x282));else{if(_0x1e0640[_0x3ef7eb(0x292)]())this[_0x3ef7eb(0x31d)]('chant');else{if(_0x1e0640[_0x3ef7eb(0x322)]()||_0x1e0640[_0x3ef7eb(0x1dc)]())this[_0x3ef7eb(0x31d)]('guard');else{if(_0x1711b5===0x1){if(_0x3ef7eb(0x257)===_0x3ef7eb(0x257))this['playDragonbonesMotion'](_0x3ef7eb(0x28e));else{if(!this[_0x3ef7eb(0x374)])return;const _0x29068=this['_dragonbones'][_0x3ef7eb(0x271)];if(_0x29068[_0x3ef7eb(0x23b)]){const _0x1dfdb2=_0x29068[_0x3ef7eb(0x26e)];let _0x154fa7=_0x37b34a[_0x3ef7eb(0x227)][_0x3ef7eb(0x376)][_0x3ef7eb(0x373)][_0x3ef7eb(0x33b)];_0x154fa7===_0x55456a&&(_0x154fa7=[_0x3ef7eb(0x2cd),_0x3ef7eb(0x1d7),'victory']),!_0x154fa7[_0x3ef7eb(0x35b)](_0x1dfdb2)&&this[_0x3ef7eb(0x307)]();}}}else{if(_0x1e0640['isDying']()){if(_0x3ef7eb(0x237)===_0x3ef7eb(0x310))return this['battler']()&&this['dragonbonesData']()['battler']!=='';else this[_0x3ef7eb(0x31d)](_0x3ef7eb(0x348));}else _0x1e0640['isUndecided']()?this['playDragonbonesMotion'](_0x3ef7eb(0x350)):this['playDragonbonesMotion']('wait');}}}}}}},VisuMZ[_0x23100c(0x227)][_0x23100c(0x2e6)]=Sprite_Enemy[_0x23100c(0x278)][_0x23100c(0x1d9)],Sprite_Enemy[_0x23100c(0x278)][_0x23100c(0x1d9)]=function(_0x210346){const _0x31a849=_0x23100c;this[_0x31a849(0x1f7)]()?this['setDragonbonesHue'](_0x210346):VisuMZ[_0x31a849(0x227)]['Sprite_Enemy_setHue'][_0x31a849(0x262)](this,_0x210346);},Sprite_Enemy['prototype'][_0x23100c(0x1f7)]=function(){const _0xc2b407=_0x23100c;if(!this[_0xc2b407(0x24c)])return![];if(!this[_0xc2b407(0x374)])return![];const _0x2ad36b=this['_battler'][_0xc2b407(0x23c)]()[_0xc2b407(0x1d3)]||'';if(_0x2ad36b['match'](/<DRAGONBONES HUE AFFECTED>/i))return!![];else{if(_0x2ad36b[_0xc2b407(0x339)](/<DRAGONBONES NO HUE>/i)){if(_0xc2b407(0x31a)===_0xc2b407(0x31a))return![];else _0x367519[_0xc2b407(0x251)]=_0x47f789(_0x232b69['$1']);}}return VisuMZ[_0xc2b407(0x227)][_0xc2b407(0x376)][_0xc2b407(0x373)][_0xc2b407(0x290)];},Sprite_Enemy[_0x23100c(0x278)][_0x23100c(0x216)]=function(_0x304cf6){const _0x4ac51b=_0x23100c;if(this[_0x4ac51b(0x1fb)]['_hue']!==_0x304cf6){if(_0x4ac51b(0x397)!=='aQWBV')return this[_0x4ac51b(0x2f9)]['children'][_0x4ac51b(0x1d5)](_0x103ca0=>_0x103ca0&&_0x103ca0[_0x4ac51b(0x349)]()===_0x51a155);else this['_dragonbonesSpriteContainer']['setHue'](_0x304cf6);}},VisuMZ['DragonbonesUnion']['Sprite_Actor_initMembers']=Sprite_Actor[_0x23100c(0x278)][_0x23100c(0x252)],Sprite_Actor[_0x23100c(0x278)][_0x23100c(0x252)]=function(){const _0x222f28=_0x23100c;VisuMZ[_0x222f28(0x227)]['Sprite_Actor_initMembers'][_0x222f28(0x262)](this),this[_0x222f28(0x375)]();},VisuMZ[_0x23100c(0x227)]['Sprite_Actor_updateBitmap']=Sprite_Actor['prototype'][_0x23100c(0x2f2)],Sprite_Actor[_0x23100c(0x278)][_0x23100c(0x2f2)]=function(){const _0x27386c=_0x23100c,_0x541a43=this[_0x27386c(0x24c)];_0x541a43[_0x27386c(0x2b1)]()?(Sprite_Battler[_0x27386c(0x278)][_0x27386c(0x2f2)]['call'](this),this[_0x27386c(0x1f3)]!==_0x541a43[_0x27386c(0x31f)]()[_0x27386c(0x32a)]&&this[_0x27386c(0x21e)](),this['updateDragonbones']()):_0x27386c(0x2d6)!==_0x27386c(0x2d6)?(this[_0x27386c(0x386)](_0x27386c(0x360)),_0x1e1046[_0x27386c(0x227)][_0x27386c(0x2a7)][_0x27386c(0x262)](this)):(VisuMZ['DragonbonesUnion']['Sprite_Actor_updateBitmap'][_0x27386c(0x262)](this),this[_0x27386c(0x2c3)](this[_0x27386c(0x374)]));},VisuMZ['DragonbonesUnion'][_0x23100c(0x2de)]=Sprite_Actor[_0x23100c(0x278)][_0x23100c(0x2bf)],Sprite_Actor[_0x23100c(0x278)][_0x23100c(0x2bf)]=function(_0x5b548e){const _0x4dc30c=_0x23100c;VisuMZ[_0x4dc30c(0x227)]['Sprite_Actor_startMotion'][_0x4dc30c(0x262)](this,_0x5b548e);if(this[_0x4dc30c(0x324)]['name']===_0x4dc30c(0x33c)){if(_0x4dc30c(0x2a1)!=='OVaNP'){this[_0x4dc30c(0x1f9)]();const _0x5d91bf=this[_0x4dc30c(0x24c)][_0x4dc30c(0x31f)]();this[_0x4dc30c(0x1f3)]=_0x5d91bf[_0x4dc30c(0x32a)],_0x11e106=_0x5d91bf['battler'],_0x45f293[_0x4dc30c(0x222)](_0x331b86,this[_0x4dc30c(0x20f)]['bind'](this)),this[_0x4dc30c(0x319)]=new _0x3e32a0(_0x5d91bf['width'],_0x5d91bf[_0x4dc30c(0x2dd)]),this[_0x4dc30c(0x29d)]&&(this[_0x4dc30c(0x29d)][_0x4dc30c(0x319)]=new _0x202da3(_0x5d91bf[_0x4dc30c(0x34a)],_0x5d91bf['height']));}else this[_0x4dc30c(0x31d)](_0x5b548e);}},VisuMZ[_0x23100c(0x227)]['Sprite_Actor_updateShadow']=Sprite_Actor['prototype']['updateShadow'],Sprite_Actor['prototype'][_0x23100c(0x1ff)]=function(){const _0x287993=_0x23100c;this['updateShadowDragonbonesUnion'](),VisuMZ['DragonbonesUnion']['Sprite_Actor_updateShadow']['call'](this),this[_0x287993(0x24c)]&&this['_battler']['hasDragonbonesBattler']()&&(this[_0x287993(0x1e2)]['visible']=![]);},Sprite_Actor[_0x23100c(0x278)][_0x23100c(0x380)]=function(){const _0x3f69e6=_0x23100c;if(this['constructor']!==Sprite_Actor)return;let _0x1b9eaf=!![];if(this[_0x3f69e6(0x24c)]&&this['_battler'][_0x3f69e6(0x2b1)]())_0x1b9eaf=![];this[_0x3f69e6(0x29d)][_0x3f69e6(0x2a6)]=_0x1b9eaf,this[_0x3f69e6(0x1ea)]['visible']=_0x1b9eaf,this[_0x3f69e6(0x26d)][_0x3f69e6(0x2a6)]=_0x1b9eaf;},VisuMZ['DragonbonesUnion']['Sprite_Actor_updateFrame']=Sprite_Actor[_0x23100c(0x278)][_0x23100c(0x320)],Sprite_Actor[_0x23100c(0x278)]['updateFrame']=function(){const _0xafe803=_0x23100c;this[_0xafe803(0x24c)]&&this[_0xafe803(0x24c)][_0xafe803(0x2b1)]()?this[_0xafe803(0x36f)]():VisuMZ[_0xafe803(0x227)][_0xafe803(0x261)][_0xafe803(0x262)](this);},Sprite_Actor['prototype']['updateFrameDragonbonesUnion']=function(){const _0x516c37=_0x23100c,_0x478fa8=this[_0x516c37(0x29d)][_0x516c37(0x319)];if(_0x478fa8){const _0x3bf2c4=_0x478fa8[_0x516c37(0x34a)],_0x3bb553=_0x478fa8[_0x516c37(0x2dd)];this[_0x516c37(0x29d)][_0x516c37(0x235)](0x0,0x0,_0x3bf2c4,_0x3bb553),this[_0x516c37(0x235)](0x0,0x0,_0x3bf2c4,_0x3bb553);}},VisuMZ[_0x23100c(0x227)]['Sprite_Enemy_initMembers']=Sprite_Enemy[_0x23100c(0x278)][_0x23100c(0x252)],Sprite_Enemy[_0x23100c(0x278)][_0x23100c(0x252)]=function(){const _0x5d6186=_0x23100c;VisuMZ[_0x5d6186(0x227)][_0x5d6186(0x2d3)][_0x5d6186(0x262)](this),this[_0x5d6186(0x375)]();},VisuMZ[_0x23100c(0x227)]['Sprite_Enemy_setBattler']=Sprite_Enemy[_0x23100c(0x278)][_0x23100c(0x29f)],Sprite_Enemy[_0x23100c(0x278)][_0x23100c(0x29f)]=function(_0x1b8408){const _0x1487c9=_0x23100c;this[_0x1487c9(0x1f9)](),VisuMZ[_0x1487c9(0x227)]['Sprite_Enemy_setBattler'][_0x1487c9(0x262)](this,_0x1b8408);if(_0x1b8408[_0x1487c9(0x26b)]())this[_0x1487c9(0x352)]=0x0;},VisuMZ[_0x23100c(0x227)]['Sprite_Enemy_updateBitmap']=Sprite_Enemy[_0x23100c(0x278)][_0x23100c(0x2f2)],Sprite_Enemy[_0x23100c(0x278)][_0x23100c(0x2f2)]=function(){const _0x42ab1a=_0x23100c,_0x3fa44a=this[_0x42ab1a(0x24c)];_0x3fa44a[_0x42ab1a(0x2b1)]()?(Sprite_Battler[_0x42ab1a(0x278)][_0x42ab1a(0x2f2)][_0x42ab1a(0x262)](this),this[_0x42ab1a(0x1f3)]!==_0x3fa44a[_0x42ab1a(0x31f)]()[_0x42ab1a(0x32a)]&&(_0x42ab1a(0x2b2)===_0x42ab1a(0x30e)?(this[_0x42ab1a(0x374)]=null,this['_dragonbonesName']=''):this[_0x42ab1a(0x21e)]()),this['updateDragonbones'](),this['setHue'](this[_0x42ab1a(0x2bb)]['battlerHue']())):(VisuMZ[_0x42ab1a(0x227)][_0x42ab1a(0x335)][_0x42ab1a(0x262)](this),this['removeChild'](this[_0x42ab1a(0x374)]));},VisuMZ[_0x23100c(0x227)]['Sprite_Enemy_refreshMotion']=Sprite_Enemy[_0x23100c(0x278)][_0x23100c(0x2b8)],Sprite_Enemy[_0x23100c(0x278)]['refreshMotion']=function(){const _0x5b447e=_0x23100c;VisuMZ[_0x5b447e(0x227)]['Sprite_Enemy_refreshMotion'][_0x5b447e(0x262)](this);if(!VisuMZ['DragonbonesUnion'][_0x5b447e(0x376)]['EnemyStances'])return;const _0x2d9ac2=this[_0x5b447e(0x24c)];_0x2d9ac2&&_0x2d9ac2['hasDragonbonesBattler']()&&this[_0x5b447e(0x299)]();},Sprite_Enemy[_0x23100c(0x278)]['refreshMotionDragonbones']=function(){const _0x560bb5=_0x23100c,_0x24145f=this[_0x560bb5(0x24c)];if(_0x24145f){const _0x546885=_0x24145f[_0x560bb5(0x286)]();if(_0x24145f['isInputting']()||_0x24145f[_0x560bb5(0x24d)]())this[_0x560bb5(0x31d)](_0x560bb5(0x350));else{if(_0x546885===0x3)this[_0x560bb5(0x31d)](_0x560bb5(0x2cd));else{if(_0x546885===0x2)_0x560bb5(0x2c0)===_0x560bb5(0x21c)?(_0x2a03fb[_0x560bb5(0x227)][_0x560bb5(0x244)]['call'](this,_0x4be0f7,_0x25a435,_0x16deb5),this[_0x560bb5(0x314)](),this[_0x560bb5(0x26a)]()):this[_0x560bb5(0x31d)]('sleep');else{if(_0x24145f[_0x560bb5(0x292)]())this['playDragonbonesMotion']('chant');else{if(_0x24145f[_0x560bb5(0x322)]()||_0x24145f[_0x560bb5(0x1dc)]()){if('ENOog'==='fgGQx'){if(!this[_0x560bb5(0x374)])return;const _0x268d8b=this[_0x560bb5(0x349)]()['dragonbonesData']();this['_dragonbones']['x']=_0x268d8b[_0x560bb5(0x251)],this[_0x560bb5(0x374)]['y']=_0x268d8b[_0x560bb5(0x20e)],this[_0x560bb5(0x374)][_0x560bb5(0x28c)]['x']=_0x268d8b[_0x560bb5(0x321)],this[_0x560bb5(0x374)][_0x560bb5(0x28c)]['y']=_0x268d8b[_0x560bb5(0x2f8)];}else this[_0x560bb5(0x31d)](_0x560bb5(0x2c9));}else{if(_0x546885===0x1)this[_0x560bb5(0x31d)](_0x560bb5(0x28e));else{if(_0x24145f['isDying']())this[_0x560bb5(0x31d)]('dying');else _0x24145f[_0x560bb5(0x265)]()?this[_0x560bb5(0x31d)](_0x560bb5(0x350)):this['playDragonbonesMotion'](_0x560bb5(0x350));}}}}}}}},Spriteset_Battle[_0x23100c(0x278)][_0x23100c(0x1f9)]=function(){const _0x58c78c=_0x23100c;for(const _0x394e97 of this[_0x58c78c(0x2a0)]()){if(_0x58c78c(0x1eb)!=='ymGKp')_0x27229b['flipRight']=!![];else{if(!_0x394e97)continue;_0x394e97[_0x58c78c(0x1f9)]();}}},PluginManager[_0x23100c(0x1e4)](pluginData[_0x23100c(0x38d)],'Picture_SetupDragonbones',_0x5172da=>{const _0x420fef=_0x23100c;if(!$gameScreen)return;VisuMZ['ConvertParams'](_0x5172da,_0x5172da),$gameScreen[_0x420fef(0x249)](_0x5172da[_0x420fef(0x232)]);const _0x342aea=$gameScreen[_0x420fef(0x349)](_0x5172da[_0x420fef(0x232)]),_0x16f765=_0x342aea[_0x420fef(0x31f)]();_0x16f765[_0x420fef(0x2f7)]=_0x5172da[_0x420fef(0x385)],_0x16f765[_0x420fef(0x271)]=_0x5172da['Animation'],_0x16f765[_0x420fef(0x251)]=_0x5172da['OffsetX'],_0x16f765[_0x420fef(0x20e)]=_0x5172da[_0x420fef(0x2ec)],_0x16f765[_0x420fef(0x321)]=_0x5172da['ScaleX'],_0x16f765[_0x420fef(0x2f8)]=_0x5172da[_0x420fef(0x36b)],_0x16f765[_0x420fef(0x25c)]=_0x5172da[_0x420fef(0x1f4)];}),PluginManager[_0x23100c(0x1e4)](pluginData[_0x23100c(0x38d)],'Picture_DragonbonesAnimation',_0x4ad0f1=>{const _0x5c46c3=_0x23100c;if(!$gameScreen)return;VisuMZ[_0x5c46c3(0x1e5)](_0x4ad0f1,_0x4ad0f1),$gameScreen[_0x5c46c3(0x249)](_0x4ad0f1[_0x5c46c3(0x232)]);const _0x7c0e7b=$gameScreen['picture'](_0x4ad0f1[_0x5c46c3(0x232)]),_0x6309a7=_0x7c0e7b[_0x5c46c3(0x31f)]();_0x6309a7['animation']=_0x4ad0f1[_0x5c46c3(0x353)];}),PluginManager[_0x23100c(0x1e4)](pluginData['name'],_0x23100c(0x379),_0x502df9=>{const _0x4c41c1=_0x23100c;if(!$gameScreen)return;VisuMZ[_0x4c41c1(0x1e5)](_0x502df9,_0x502df9),$gameScreen[_0x4c41c1(0x249)](_0x502df9[_0x4c41c1(0x232)]);const _0x158bc8=$gameScreen[_0x4c41c1(0x349)](_0x502df9[_0x4c41c1(0x232)]),_0x4eb3fe=_0x158bc8[_0x4c41c1(0x31f)]();_0x4eb3fe[_0x4c41c1(0x251)]=_0x502df9['OffsetX'],_0x4eb3fe[_0x4c41c1(0x20e)]=_0x502df9[_0x4c41c1(0x2ec)];}),PluginManager[_0x23100c(0x1e4)](pluginData[_0x23100c(0x38d)],_0x23100c(0x301),_0x2730f6=>{const _0x403b48=_0x23100c;if(!$gameScreen)return;VisuMZ[_0x403b48(0x1e5)](_0x2730f6,_0x2730f6),$gameScreen[_0x403b48(0x249)](_0x2730f6[_0x403b48(0x232)]);const _0x22f715=$gameScreen[_0x403b48(0x349)](_0x2730f6[_0x403b48(0x232)]),_0xddf1e4=_0x22f715[_0x403b48(0x31f)]();_0xddf1e4[_0x403b48(0x321)]=_0x2730f6[_0x403b48(0x2c1)],_0xddf1e4[_0x403b48(0x2f8)]=_0x2730f6['ScaleY'];}),PluginManager[_0x23100c(0x1e4)](pluginData[_0x23100c(0x38d)],_0x23100c(0x2d5),_0x1ace61=>{const _0x4c3cd8=_0x23100c;if(!$gameScreen)return;VisuMZ['ConvertParams'](_0x1ace61,_0x1ace61),$gameScreen['createDefaultPicture'](_0x1ace61[_0x4c3cd8(0x232)]);const _0x228957=$gameScreen[_0x4c3cd8(0x349)](_0x1ace61[_0x4c3cd8(0x232)]),_0x5a49c9=_0x228957['dragonbonesData']();_0x5a49c9[_0x4c3cd8(0x25c)]=_0x1ace61[_0x4c3cd8(0x1f4)];}),Game_Screen[_0x23100c(0x278)][_0x23100c(0x249)]=function(_0x79aad7){const _0x1547ef=_0x23100c;if(this['picture'](_0x79aad7))return;this[_0x1547ef(0x1d6)](_0x79aad7,'',0x0,Math[_0x1547ef(0x2b6)](Graphics[_0x1547ef(0x34a)]/0x2),Math['round'](Graphics[_0x1547ef(0x2dd)]/0x2),0x64,0x64,0xff,0x0);},VisuMZ['DragonbonesUnion'][_0x23100c(0x294)]=Game_Screen['prototype'][_0x23100c(0x359)],Game_Screen[_0x23100c(0x278)][_0x23100c(0x359)]=function(_0x15733c){const _0x1e0c22=_0x23100c;this[_0x1e0c22(0x210)](_0x15733c),VisuMZ['DragonbonesUnion'][_0x1e0c22(0x294)]['call'](this,_0x15733c);},Game_Screen['prototype']['erasePictureDragonbonesUnion']=function(_0x4248c4){const _0x37337c=_0x23100c,_0x44ba40=this['realPictureId'](_0x4248c4),_0xd51673=this[_0x37337c(0x2bc)][_0x44ba40];if(!_0xd51673)return;_0xd51673['initDragonbonesData'](),_0xd51673[_0x37337c(0x1f9)]();},VisuMZ[_0x23100c(0x227)][_0x23100c(0x2db)]=Game_Picture['prototype'][_0x23100c(0x37c)],Game_Picture[_0x23100c(0x278)][_0x23100c(0x37c)]=function(){const _0x17c8de=_0x23100c;VisuMZ[_0x17c8de(0x227)][_0x17c8de(0x2db)]['call'](this),this[_0x17c8de(0x314)]();},Game_Picture['prototype'][_0x23100c(0x314)]=function(){const _0xa85ce4=_0x23100c;this[_0xa85ce4(0x2da)]={'filename':'','animation':DragonbonesManager[_0xa85ce4(0x2e0)],'scaleX':0x1,'scaleY':0x1,'offsetX':0x0,'offsetY':0x0,'timeScale':0x1};},Game_Picture[_0x23100c(0x278)]['dragonbonesData']=function(){const _0x15f560=_0x23100c;if(this[_0x15f560(0x2da)]!==undefined)return this[_0x15f560(0x2da)];return this[_0x15f560(0x314)](),this['_dragonbonesData'];},Game_Picture[_0x23100c(0x278)]['hasDragonbones']=function(){const _0x8e05a0=_0x23100c;return this['dragonbonesData']()[_0x8e05a0(0x2f7)]!=='';},Game_Picture[_0x23100c(0x278)]['disposeDragonbones']=function(){const _0x18ae3b=_0x23100c;if(!SceneManager['_scene'])return;if(!SceneManager[_0x18ae3b(0x247)][_0x18ae3b(0x36c)])return;const _0x499459=SceneManager[_0x18ae3b(0x247)]['_spriteset'][_0x18ae3b(0x2fc)](this);if(_0x499459)_0x499459['disposeDragonbones']();},Spriteset_Base[_0x23100c(0x278)][_0x23100c(0x2fc)]=function(_0x22eef9){const _0x59d4d3=_0x23100c;return this['_pictureContainer'][_0x59d4d3(0x1df)][_0x59d4d3(0x1d5)](_0x1728c5=>_0x1728c5&&_0x1728c5[_0x59d4d3(0x349)]()===_0x22eef9);},VisuMZ[_0x23100c(0x227)]['Sprite_Picture_initialize']=Sprite_Picture[_0x23100c(0x278)][_0x23100c(0x37c)],Sprite_Picture['prototype'][_0x23100c(0x37c)]=function(_0xa7e136){const _0x1cb985=_0x23100c;this['initDragonbonesData'](),VisuMZ[_0x1cb985(0x227)]['Sprite_Picture_initialize'][_0x1cb985(0x262)](this,_0xa7e136);},Sprite_Picture[_0x23100c(0x278)]['initDragonbonesData']=function(_0x2c0813){const _0x223c59=_0x23100c;this[_0x223c59(0x374)]=null,this['_dragonbonesFilename']='',this[_0x223c59(0x318)]='';},VisuMZ[_0x23100c(0x227)][_0x23100c(0x258)]=Sprite_Picture[_0x23100c(0x278)]['update'],Sprite_Picture[_0x23100c(0x278)][_0x23100c(0x2e5)]=function(){const _0x332c5f=_0x23100c;VisuMZ[_0x332c5f(0x227)][_0x332c5f(0x258)][_0x332c5f(0x262)](this),this['updateDragonbones']();},Sprite_Picture[_0x23100c(0x278)][_0x23100c(0x1f9)]=function(){const _0x486bdc=_0x23100c;if(this[_0x486bdc(0x374)]){if('kxudk'===_0x486bdc(0x273)){const _0x5c187d=this[_0x486bdc(0x24c)]['dragonbonesData']();this[_0x486bdc(0x374)]=_0xe29596[_0x486bdc(0x1ec)](_0x5c187d['battler']),!this[_0x486bdc(0x1fb)]&&(this['_dragonbonesSpriteContainer']=new _0x54fda3(),this[_0x486bdc(0x1fb)]['addChild'](this['_dragonbones'])),this['addChildAt'](this['_dragonbonesSpriteContainer'],0x0),this[_0x486bdc(0x334)]&&(this[_0x486bdc(0x334)](),this[_0x486bdc(0x1fb)]['addChild'](this[_0x486bdc(0x374)])),this[_0x486bdc(0x307)](),this[_0x486bdc(0x374)]['x']=_0x5c187d[_0x486bdc(0x251)],this[_0x486bdc(0x374)]['y']=_0x5c187d[_0x486bdc(0x20e)],this[_0x486bdc(0x374)][_0x486bdc(0x28c)]['x']=_0x5c187d['scaleX'],this['_dragonbones'][_0x486bdc(0x28c)]['y']=_0x5c187d[_0x486bdc(0x2f8)],this[_0x486bdc(0x24c)]&&this['_battler']['isHidden']()&&(this[_0x486bdc(0x352)]=0x0);}else this[_0x486bdc(0x2c3)](this[_0x486bdc(0x374)]),this[_0x486bdc(0x374)][_0x486bdc(0x20a)](),this[_0x486bdc(0x374)]=null,this[_0x486bdc(0x38f)]='',this['_dragonbonesAnimation']='';}},Sprite_Picture[_0x23100c(0x278)][_0x23100c(0x309)]=function(){const _0x2d5dca=_0x23100c,_0x146c79=this[_0x2d5dca(0x349)]();if(!_0x146c79)return this[_0x2d5dca(0x1f9)]();if(!_0x146c79[_0x2d5dca(0x347)]())return this[_0x2d5dca(0x1f9)]();this[_0x2d5dca(0x212)]();if(!this['_dragonbones'])return;this['updateDragonbonesAnimation'](),this[_0x2d5dca(0x364)](),this['updateDragonbonesTimeScale']();},Sprite_Picture[_0x23100c(0x278)][_0x23100c(0x212)]=function(){const _0x30b48d=_0x23100c,_0x101b31=this[_0x30b48d(0x349)]()[_0x30b48d(0x31f)]();if(this[_0x30b48d(0x38f)]===_0x101b31[_0x30b48d(0x2f7)])return;this[_0x30b48d(0x1f9)](),this[_0x30b48d(0x38f)]=_0x101b31[_0x30b48d(0x2f7)],DragonbonesManager[_0x30b48d(0x222)](_0x101b31[_0x30b48d(0x2f7)],this[_0x30b48d(0x20f)]['bind'](this));},Sprite_Picture[_0x23100c(0x278)][_0x23100c(0x20f)]=function(){const _0x4c6534=_0x23100c,_0x554114=this[_0x4c6534(0x349)]()[_0x4c6534(0x31f)]();this[_0x4c6534(0x374)]=DragonbonesManager['createArmature'](_0x554114[_0x4c6534(0x2f7)]),this[_0x4c6534(0x34b)](this[_0x4c6534(0x374)],0x0),this[_0x4c6534(0x2c7)]();},Sprite_Picture[_0x23100c(0x278)][_0x23100c(0x2c7)]=function(){const _0x40cb41=_0x23100c;if(!this['_dragonbones'])return;const _0x5f3bb2=this[_0x40cb41(0x349)]()['dragonbonesData']();if(this[_0x40cb41(0x318)]!==_0x5f3bb2[_0x40cb41(0x271)]){if('NGHWD'!==_0x40cb41(0x38a))return;else this['_dragonbonesAnimation']=_0x5f3bb2[_0x40cb41(0x271)],this[_0x40cb41(0x22c)]();}},Sprite_Picture[_0x23100c(0x278)][_0x23100c(0x22c)]=function(){const _0x4a5443=_0x23100c;if(!this[_0x4a5443(0x374)])return;const _0x56e9f6=this['_dragonbones'][_0x4a5443(0x271)],_0x4efbc9=this[_0x4a5443(0x318)][_0x4a5443(0x2d0)]()[_0x4a5443(0x1fa)]();_0x56e9f6[_0x4a5443(0x27b)][_0x4efbc9]&&_0x56e9f6['play'](_0x4efbc9);},Sprite_Picture[_0x23100c(0x278)][_0x23100c(0x364)]=function(){const _0x5c80ea=_0x23100c;if(!this['_dragonbones'])return;const _0x558c49=this[_0x5c80ea(0x349)]()[_0x5c80ea(0x31f)]();this['_dragonbones']['x']=_0x558c49[_0x5c80ea(0x251)],this['_dragonbones']['y']=_0x558c49[_0x5c80ea(0x20e)],this[_0x5c80ea(0x374)][_0x5c80ea(0x28c)]['x']=_0x558c49[_0x5c80ea(0x321)],this[_0x5c80ea(0x374)][_0x5c80ea(0x28c)]['y']=_0x558c49['scaleY'];},Sprite_Picture[_0x23100c(0x278)]['updateDragonbonesTimeScale']=function(){const _0x2e2f85=_0x23100c;if(!this[_0x2e2f85(0x374)])return;const _0x2aa7cc=this['picture']()['dragonbonesData']();let _0x308bd0=_0x2aa7cc[_0x2e2f85(0x25c)];this['_dragonbones']['animation'][_0x2e2f85(0x25c)]=_0x308bd0;},PluginManager[_0x23100c(0x1e4)](pluginData[_0x23100c(0x38d)],_0x23100c(0x341),_0xe8b041=>{const _0x5a1d12=_0x23100c;if(!$gameMap)return;VisuMZ[_0x5a1d12(0x1e5)](_0xe8b041,_0xe8b041);const _0x5164a2=$gameActors[_0x5a1d12(0x338)](_0xe8b041[_0x5a1d12(0x30a)]);if(!_0x5164a2)return;const _0x25a460=JsonEx['makeDeepCopy'](_0x5164a2[_0x5a1d12(0x337)]);_0x5164a2['_dragonbonesSpriteData']={'filename':_0xe8b041[_0x5a1d12(0x385)],'animation':'','scaleX':_0xe8b041[_0x5a1d12(0x2c1)],'scaleY':_0xe8b041[_0x5a1d12(0x36b)],'offsetX':_0xe8b041['OffsetX'],'offsetY':_0xe8b041[_0x5a1d12(0x2ec)],'timeScale':_0xe8b041[_0x5a1d12(0x1f4)],'walkRate':_0xe8b041[_0x5a1d12(0x37e)]??0x1,'dashRate':_0xe8b041[_0x5a1d12(0x393)]??0x1,'width':_0xe8b041['Width'],'height':_0xe8b041[_0x5a1d12(0x313)],'flipLeft':_0xe8b041['FlipLeft'],'flipRight':_0xe8b041[_0x5a1d12(0x268)],'animationNames':{'idle':_0xe8b041[_0x5a1d12(0x2e2)],'walk':_0xe8b041[_0x5a1d12(0x394)],'dash':_0xe8b041[_0x5a1d12(0x327)],'jump':_0xe8b041[_0x5a1d12(0x370)],'ladderidle':_0xe8b041[_0x5a1d12(0x2d4)],'ladderclimb':_0xe8b041['LadderClimb'],'ropeidle':_0xe8b041[_0x5a1d12(0x281)],'ropeclimb':_0xe8b041[_0x5a1d12(0x2d8)]}},$gamePlayer['refresh']();}),PluginManager[_0x23100c(0x1e4)](pluginData['name'],'MapSprite_ActorAnimationPlay',_0x2fc6b1=>{const _0x467bb2=_0x23100c;if(!$gameMap)return;if(SceneManager['_scene']['constructor']!==Scene_Map)return;VisuMZ[_0x467bb2(0x1e5)](_0x2fc6b1,_0x2fc6b1);const _0x5954e6=$gameActors['actor'](_0x2fc6b1['ActorID']),_0x22b3a9=_0x5954e6[_0x467bb2(0x256)](),_0x7fe322=_0x22b3a9===0x0?$gamePlayer:$gamePlayer[_0x467bb2(0x38c)]()[_0x467bb2(0x234)](_0x22b3a9-0x1);if(!_0x7fe322)return;_0x7fe322[_0x467bb2(0x1fd)]=_0x2fc6b1[_0x467bb2(0x353)];}),PluginManager[_0x23100c(0x1e4)](pluginData['name'],_0x23100c(0x345),_0x69084f=>{const _0x9c43e9=_0x23100c;if(!$gameMap)return;if(SceneManager[_0x9c43e9(0x247)][_0x9c43e9(0x324)]!==Scene_Map)return;VisuMZ['ConvertParams'](_0x69084f,_0x69084f);const _0x370d6f=$gameActors[_0x9c43e9(0x338)](_0x69084f[_0x9c43e9(0x30a)]),_0x56e147=_0x370d6f[_0x9c43e9(0x256)](),_0x114643=_0x56e147===0x0?$gamePlayer:$gamePlayer[_0x9c43e9(0x38c)]()['follower'](_0x56e147-0x1);if(!_0x114643)return;_0x114643[_0x9c43e9(0x1fd)]='';}),PluginManager[_0x23100c(0x1e4)](pluginData[_0x23100c(0x38d)],_0x23100c(0x22e),_0x29a637=>{const _0x169c05=_0x23100c;if(!$gameMap)return;if(SceneManager[_0x169c05(0x247)]['constructor']!==Scene_Map)return;VisuMZ[_0x169c05(0x1e5)](_0x29a637,_0x29a637);const _0x7a25d=$gameTemp[_0x169c05(0x217)](),_0x1b910e=$gameMap[_0x169c05(0x340)](_0x29a637[_0x169c05(0x21d)]||_0x7a25d[_0x169c05(0x304)]());if(!_0x1b910e)return;_0x1b910e[_0x169c05(0x1fd)]=_0x29a637['Animation'];}),PluginManager['registerCommand'](pluginData[_0x23100c(0x38d)],'MapSprite_EventAnimationStop',_0x2ca4a2=>{const _0x252cf5=_0x23100c;if(!$gameMap)return;if(SceneManager[_0x252cf5(0x247)][_0x252cf5(0x324)]!==Scene_Map)return;VisuMZ[_0x252cf5(0x1e5)](_0x2ca4a2,_0x2ca4a2);const _0x3279af=$gameTemp[_0x252cf5(0x217)](),_0x3fdeb2=$gameMap[_0x252cf5(0x340)](_0x2ca4a2[_0x252cf5(0x21d)]||_0x3279af[_0x252cf5(0x304)]());if(!_0x3fdeb2)return;_0x3fdeb2[_0x252cf5(0x1fd)]='';}),PluginManager[_0x23100c(0x1e4)](pluginData[_0x23100c(0x38d)],'MapSprite_FollowerAnimationPlay',_0x4aed60=>{const _0x277f6f=_0x23100c;if(!$gameMap)return;if(SceneManager['_scene']['constructor']!==Scene_Map)return;VisuMZ[_0x277f6f(0x1e5)](_0x4aed60,_0x4aed60);const _0x692519=$gamePlayer[_0x277f6f(0x38c)]()['follower'](_0x4aed60['FollowerIndex']);if(!_0x692519)return;_0x692519['dragonbonesAnimation']=_0x4aed60[_0x277f6f(0x353)];}),PluginManager[_0x23100c(0x1e4)](pluginData[_0x23100c(0x38d)],_0x23100c(0x355),_0x566fcd=>{const _0x2655c2=_0x23100c;if(!$gameMap)return;if(SceneManager[_0x2655c2(0x247)][_0x2655c2(0x324)]!==Scene_Map)return;VisuMZ['ConvertParams'](_0x566fcd,_0x566fcd);const _0x5f2e4c=$gamePlayer[_0x2655c2(0x38c)]()['follower'](_0x566fcd[_0x2655c2(0x363)]);if(!_0x5f2e4c)return;_0x5f2e4c[_0x2655c2(0x1fd)]='';}),PluginManager['registerCommand'](pluginData[_0x23100c(0x38d)],'MapSprite_PlayerAnimationPlay',_0x2306e1=>{const _0x1f69dd=_0x23100c;if(!$gameMap)return;if(SceneManager[_0x1f69dd(0x247)][_0x1f69dd(0x324)]!==Scene_Map)return;VisuMZ[_0x1f69dd(0x1e5)](_0x2306e1,_0x2306e1),$gamePlayer['dragonbonesAnimation']=_0x2306e1[_0x1f69dd(0x353)];}),PluginManager[_0x23100c(0x1e4)](pluginData['name'],_0x23100c(0x255),_0x179fe1=>{const _0x3f4936=_0x23100c;if(!$gameMap)return;if(SceneManager['_scene'][_0x3f4936(0x324)]!==Scene_Map)return;$gamePlayer[_0x3f4936(0x1fd)]='';}),Game_Temp[_0x23100c(0x278)][_0x23100c(0x2be)]=function(_0x5c0abb){this['_lastPluginCommandInterpreter']=_0x5c0abb;},Game_Temp[_0x23100c(0x278)][_0x23100c(0x217)]=function(){return this['_lastPluginCommandInterpreter'];},Object[_0x23100c(0x37b)](Game_CharacterBase[_0x23100c(0x278)],_0x23100c(0x1fd),{'get':function(){return this['dragonbonesSpriteData']()['animation'];},'set':function(_0x1eff19){const _0x2c7fa4=_0x23100c;this[_0x2c7fa4(0x2bd)]()[_0x2c7fa4(0x271)]=_0x1eff19;},'configurable':!![]}),Game_CharacterBase[_0x23100c(0x278)][_0x23100c(0x314)]=function(){const _0x59620f=_0x23100c,_0x76e114=VisuMZ['DragonbonesUnion'][_0x59620f(0x376)][_0x59620f(0x35c)];this['_dragonbonesSpriteData']={'filename':'','animation':'','scaleX':_0x76e114[_0x59620f(0x2c1)],'scaleY':_0x76e114[_0x59620f(0x36b)],'offsetX':_0x76e114[_0x59620f(0x37d)],'offsetY':_0x76e114[_0x59620f(0x2ec)],'timeScale':_0x76e114[_0x59620f(0x1f4)],'walkRate':0x1,'dashRate':0x1,'width':_0x76e114[_0x59620f(0x2f6)],'height':_0x76e114['Height'],'flipLeft':_0x76e114['FlipLeft'],'flipRight':_0x76e114['FlipRight'],'animationNames':{'idle':_0x76e114[_0x59620f(0x2e2)],'walk':_0x76e114[_0x59620f(0x394)],'dash':_0x76e114[_0x59620f(0x327)],'jump':_0x76e114[_0x59620f(0x370)],'ladderidle':_0x76e114[_0x59620f(0x2d4)],'ladderclimb':_0x76e114[_0x59620f(0x275)],'ropeidle':_0x76e114['RopeIdle'],'ropeclimb':_0x76e114[_0x59620f(0x2d8)]}},this['_dragonbonesMoveTimer']===undefined&&('PUsPo'!==_0x59620f(0x2c2)?_0x63e9d6[_0x59620f(0x34a)]=_0x3c5217(_0x935b53['$1']):this[_0x59620f(0x1e7)]=0x0);},Game_CharacterBase[_0x23100c(0x278)][_0x23100c(0x26a)]=function(){},Game_CharacterBase[_0x23100c(0x278)]['checkDragonbonesStringTags']=function(_0x3faf06){const _0x2ee194=_0x23100c,_0x10dcd3=this[_0x2ee194(0x2bd)]();_0x3faf06['match'](/<DRAGONBONES SPRITE:[ ]*(.*)>/i)&&(_0x10dcd3[_0x2ee194(0x2f7)]=String(RegExp['$1'])[_0x2ee194(0x1fa)]());_0x3faf06[_0x2ee194(0x339)](/<DRAGONBONES SPRITE (?:SKIN|NAME|FILENAME):[ ]*(.*)>/i)&&(_0x10dcd3[_0x2ee194(0x2f7)]=String(RegExp['$1'])[_0x2ee194(0x1fa)]());_0x3faf06[_0x2ee194(0x339)](/<DRAGONBONES SPRITE[ ]SCALE:[ ](.*),[ ](.*)>/i)&&(_0x10dcd3[_0x2ee194(0x321)]=Number(RegExp['$1']),_0x10dcd3[_0x2ee194(0x2f8)]=Number(RegExp['$2']));_0x3faf06[_0x2ee194(0x339)](/<DRAGONBONES SPRITE[ ](?:SCALEX|SCALE X):[ ](.*)>/i)&&(_0x10dcd3[_0x2ee194(0x321)]=Number(RegExp['$1']));_0x3faf06['match'](/<DRAGONBONES SPRITE[ ](?:SCALEY|SCALE Y):[ ](.*)>/i)&&(_0x2ee194(0x2cc)==='waJvV'?_0x10dcd3[_0x2ee194(0x2f8)]=Number(RegExp['$1']):_0x3072b5[_0x2ee194(0x2f7)]=_0x454ca2(_0x48682d['$1'])[_0x2ee194(0x1fa)]());_0x3faf06[_0x2ee194(0x339)](/<DRAGONBONES SPRITE[ ]OFFSET:[ ](.*),[ ](.*)>/i)&&(_0x2ee194(0x1f0)!==_0x2ee194(0x2e1)?(_0x10dcd3[_0x2ee194(0x251)]=Number(RegExp['$1']),_0x10dcd3[_0x2ee194(0x20e)]=Number(RegExp['$2'])):_0x30cbfe[_0x2ee194(0x20e)]=_0x3e3d80(_0x53bc37['$1']));_0x3faf06['match'](/<DRAGONBONES SPRITE[ ](?:OFFSETX|OFFSET X):[ ](.*)>/i)&&(_0x10dcd3[_0x2ee194(0x251)]=Number(RegExp['$1']));_0x3faf06['match'](/<DRAGONBONES SPRITE[ ](?:OFFSETY|OFFSET Y):[ ](.*)>/i)&&(_0x10dcd3['offsetY']=Number(RegExp['$1']));if(_0x3faf06[_0x2ee194(0x339)](/<DRAGONBONES SPRITE[ ]SIZE:[ ](.*),[ ](.*)>/i)){if('trhFV'==='trhFV')_0x10dcd3[_0x2ee194(0x34a)]=Number(RegExp['$1']),_0x10dcd3[_0x2ee194(0x2dd)]=Number(RegExp['$2']);else{if(!this['hasDragonbones']())return;this[_0x2ee194(0x2dc)]()?this['_dragonbonesMoveTimer']=_0x1511a9[_0x2ee194(0x227)][_0x2ee194(0x376)][_0x2ee194(0x35c)]['WalkTimer']:this[_0x2ee194(0x1e7)]--;}}_0x3faf06[_0x2ee194(0x339)](/<DRAGONBONES SPRITE[ ]WIDTH:[ ](.*)>/i)&&(_0x2ee194(0x2f1)===_0x2ee194(0x231)?_0x5c0fcb[_0x2ee194(0x271)][_0x2ee194(0x27c)][_0x479b48]=_0x231248[_0x2ee194(0x271)][_0x2ee194(0x27c)][_0x2f03be][_0x2ee194(0x2d0)]():_0x10dcd3[_0x2ee194(0x34a)]=Number(RegExp['$1']));_0x3faf06[_0x2ee194(0x339)](/<DRAGONBONES SPRITE[ ]HEIGHT:[ ](.*)>/i)&&(_0x10dcd3[_0x2ee194(0x2dd)]=Number(RegExp['$1']));_0x3faf06[_0x2ee194(0x339)](/<DRAGONBONES SPRITE[ ](?:TIMESCALE|TIME SCALE):[ ](.*)>/i)&&(_0x10dcd3[_0x2ee194(0x25c)]=Number(RegExp['$1']));_0x3faf06[_0x2ee194(0x339)](/<DRAGONBONES SPRITE[ ](?:WALK RATE|WALKING RATE):[ ](.*)>/i)&&(_0x2ee194(0x367)==='tRAXq'?this[_0x2ee194(0x270)]=-0x1:_0x10dcd3[_0x2ee194(0x333)]=Number(RegExp['$1']));_0x3faf06['match'](/<DRAGONBONES SPRITE[ ](?:DASH RATE|DASHING RATE):[ ](.*)>/i)&&(_0x2ee194(0x34d)!=='bPSpS'?_0x10dcd3[_0x2ee194(0x1ee)]=Number(RegExp['$1']):(this[_0x2ee194(0x2c3)](this[_0x2ee194(0x374)]),this[_0x2ee194(0x374)][_0x2ee194(0x20a)](),this[_0x2ee194(0x374)]=null,this[_0x2ee194(0x38f)]='',this[_0x2ee194(0x318)]=''));_0x3faf06[_0x2ee194(0x339)](/<DRAGONBONES SPRITE FLIP LEFT>/i)&&('GwKfc'===_0x2ee194(0x26f)?_0x10dcd3[_0x2ee194(0x214)]=!![]:_0x231560[_0x2ee194(0x2ce)][_0x2ee194(0x229)]>0x0?this['prepareNextLoadArmature']():this['runQueuedCallbacks']());_0x3faf06[_0x2ee194(0x339)](/<DRAGONBONES SPRITE NO FLIP LEFT>/i)&&(_0x10dcd3[_0x2ee194(0x214)]=![]);_0x3faf06[_0x2ee194(0x339)](/<DRAGONBONES SPRITE FLIP RIGHT>/i)&&(_0x10dcd3[_0x2ee194(0x391)]=!![]);_0x3faf06[_0x2ee194(0x339)](/<DRAGONBONES SPRITE NO FLIP RIGHT>/i)&&(_0x10dcd3[_0x2ee194(0x391)]=![]);const _0x310193=_0x3faf06[_0x2ee194(0x339)](/<DRAGONBONES SPRITE MOTION (.*):[ ](.*)>/gi);if(_0x310193){if(_0x2ee194(0x202)!==_0x2ee194(0x202))_0x2ce215[_0x2ee194(0x227)][_0x2ee194(0x27d)][_0x2ee194(0x262)](this,_0xcc8b10),this[_0x2ee194(0x1ef)](_0x24e293);else for(const _0x53b225 of _0x310193){if('jguNT'!=='jguNT')_0x4d92dd[_0x2ee194(0x227)]['Game_Battler_requestMotionRefresh'][_0x2ee194(0x262)](this),this['hasDragonbonesBattler']()&&this[_0x2ee194(0x32a)]()[_0x2ee194(0x307)]();else{_0x53b225['match'](/<DRAGONBONES SPRITE MOTION (.*):[ ](.*)>/i);const _0x2ab009=String(RegExp['$1'])[_0x2ee194(0x2d0)]()[_0x2ee194(0x1fa)](),_0x16f59c=String(RegExp['$2'])[_0x2ee194(0x2d0)]()[_0x2ee194(0x1fa)]();_0x10dcd3[_0x2ee194(0x27c)][_0x2ab009]=_0x16f59c;}}}if(_0x3faf06[_0x2ee194(0x339)](/<DRAGONBONES SPRITE (?:SETTINGS|SETTING)>\s*([\s\S]*)\s*<\/DRAGONBONES SPRITE (?:SETTINGS|SETTING)>/i)){const _0x4ba592=String(RegExp['$1']);if(_0x4ba592[_0x2ee194(0x339)](/(?:SKIN|NAME|FILENAME):[ ]*(.*)/i)){if(_0x2ee194(0x2b9)!==_0x2ee194(0x312))_0x10dcd3[_0x2ee194(0x2f7)]=String(RegExp['$1'])['trim']();else{if(!_0x2f3036)return;if(_0x28809e[_0x2ee194(0x247)][_0x2ee194(0x324)]!==_0x44f944)return;_0x576a5d['ConvertParams'](_0x190d2a,_0x1a65d2);const _0x4a18eb=_0x52a47f[_0x2ee194(0x38c)]()['follower'](_0x5d654b[_0x2ee194(0x363)]);if(!_0x4a18eb)return;_0x4a18eb['dragonbonesAnimation']=_0x407acb[_0x2ee194(0x353)];}}_0x4ba592[_0x2ee194(0x339)](/SCALE:[ ](.*),[ ](.*)/i)&&('wNjwX'===_0x2ee194(0x218)?(_0x10dcd3['scaleX']=Number(RegExp['$1']),_0x10dcd3[_0x2ee194(0x2f8)]=Number(RegExp['$2'])):this[_0x2ee194(0x31d)](_0x2ee194(0x350)));_0x4ba592['match'](/(?:SCALEX|SCALE X):[ ](.*)/i)&&(_0x10dcd3[_0x2ee194(0x321)]=Number(RegExp['$1']));_0x4ba592[_0x2ee194(0x339)](/(?:SCALEY|SCALE Y):[ ](.*)/i)&&(_0x10dcd3[_0x2ee194(0x2f8)]=Number(RegExp['$1']));_0x4ba592[_0x2ee194(0x339)](/OFFSET:[ ](.*),[ ](.*)/i)&&(_0x2ee194(0x29b)!==_0x2ee194(0x29b)?_0x5d2e75[_0x2ee194(0x214)]=!![]:(_0x10dcd3[_0x2ee194(0x251)]=Number(RegExp['$1']),_0x10dcd3[_0x2ee194(0x20e)]=Number(RegExp['$2'])));_0x4ba592[_0x2ee194(0x339)](/(?:OFFSETX|OFFSET X):[ ](.*)/i)&&(_0x10dcd3[_0x2ee194(0x251)]=Number(RegExp['$1']));_0x4ba592[_0x2ee194(0x339)](/(?:OFFSETY|OFFSET Y):[ ](.*)/i)&&(_0x10dcd3[_0x2ee194(0x20e)]=Number(RegExp['$1']));_0x4ba592[_0x2ee194(0x339)](/(?:TIMESCALE|TIME SCALE):[ ](.*)/i)&&(_0x10dcd3[_0x2ee194(0x25c)]=Number(RegExp['$1']));_0x4ba592[_0x2ee194(0x339)](/(?:WALK RATE|WALKING RATE):[ ](.*)/i)&&(_0x10dcd3['walkRate']=Number(RegExp['$1']));_0x4ba592[_0x2ee194(0x339)](/(?:DASH RATE|DASHING RATE):[ ](.*)/i)&&('YShIz'===_0x2ee194(0x221)?_0x10dcd3['dashRate']=Number(RegExp['$1']):_0x12ac35[_0x2ee194(0x2dd)]=_0x58aa04(_0x54aaef['$1']));_0x4ba592[_0x2ee194(0x339)](/SIZE:[ ](.*),[ ](.*)/i)&&(_0x10dcd3[_0x2ee194(0x34a)]=Number(RegExp['$1']),_0x10dcd3[_0x2ee194(0x2dd)]=Number(RegExp['$2']));_0x4ba592[_0x2ee194(0x339)](/WIDTH:[ ](.*)/i)&&(_0x10dcd3[_0x2ee194(0x34a)]=Number(RegExp['$1']));_0x4ba592[_0x2ee194(0x339)](/HEIGHT:[ ](.*)/i)&&(_0x10dcd3[_0x2ee194(0x2dd)]=Number(RegExp['$1']));_0x4ba592[_0x2ee194(0x339)](/NO FLIP LEFT/i)&&(_0x10dcd3[_0x2ee194(0x214)]=![]);if(_0x4ba592[_0x2ee194(0x339)](/FLIP LEFT/i)){if(_0x2ee194(0x2eb)==='BwewJ'){const _0x1f62a9=this['_character'][_0x2ee194(0x2bd)]();this['_dragonbones']=_0x189193[_0x2ee194(0x1ec)](_0x1f62a9[_0x2ee194(0x2f7)]),this[_0x2ee194(0x2c7)](),_0x388e37(this['addDragonbonesChild'][_0x2ee194(0x336)](this),0x0);}else _0x10dcd3[_0x2ee194(0x214)]=!![];}_0x4ba592[_0x2ee194(0x339)](/NO FLIP RIGHT/i)&&(_0x10dcd3[_0x2ee194(0x391)]=![]);_0x4ba592[_0x2ee194(0x339)](/FLIP RIGHT/i)&&(_0x2ee194(0x1de)!==_0x2ee194(0x22d)?_0x10dcd3[_0x2ee194(0x391)]=!![]:_0x54624b[_0x2ee194(0x227)]['Sprite_Actor_updateFrame'][_0x2ee194(0x262)](this));const _0x3eca7a=_0x3faf06[_0x2ee194(0x339)](/(?:ANI|MOTION) (.*):[ ](.*)/gi);if(_0x3eca7a){if(_0x2ee194(0x226)!==_0x2ee194(0x32d))for(const _0x5009d6 of _0x3eca7a){if(_0x2ee194(0x26c)===_0x2ee194(0x26c)){_0x5009d6[_0x2ee194(0x339)](/(?:ANI|MOTION) (.*):[ ](.*)/i);const _0x368912=String(RegExp['$1'])[_0x2ee194(0x2d0)]()[_0x2ee194(0x1fa)](),_0x14c80e=String(RegExp['$2'])[_0x2ee194(0x2d0)]()[_0x2ee194(0x1fa)]();_0x10dcd3[_0x2ee194(0x27c)][_0x368912]=_0x14c80e;}else{const _0x56e82f=_0x311596[_0x2ee194(0x227)]['Settings']['Battler'];this[_0x2ee194(0x2d1)]={'battler':'','scaleX':_0x56e82f[_0x2ee194(0x2c1)],'scaleY':_0x56e82f['ScaleY'],'width':_0x56e82f['Width'],'height':_0x56e82f[_0x2ee194(0x313)],'offsetX':_0x56e82f[_0x2ee194(0x37d)],'offsetY':_0x56e82f[_0x2ee194(0x2ec)],'timeScale':_0x56e82f[_0x2ee194(0x1f4)],'motion':{'walk':_0x56e82f[_0x2ee194(0x2e3)],'wait':_0x56e82f[_0x2ee194(0x260)],'chant':_0x56e82f[_0x2ee194(0x2ca)],'guard':_0x56e82f[_0x2ee194(0x32f)],'damage':_0x56e82f[_0x2ee194(0x36d)],'evade':_0x56e82f[_0x2ee194(0x272)],'thrust':_0x56e82f[_0x2ee194(0x1f5)],'swing':_0x56e82f[_0x2ee194(0x392)],'missile':_0x56e82f[_0x2ee194(0x225)],'skill':_0x56e82f[_0x2ee194(0x1f1)],'spell':_0x56e82f[_0x2ee194(0x230)],'item':_0x56e82f[_0x2ee194(0x246)],'escape':_0x56e82f[_0x2ee194(0x297)],'victory':_0x56e82f[_0x2ee194(0x263)],'dying':_0x56e82f[_0x2ee194(0x25a)],'abnormal':_0x56e82f['MotionAbnormal'],'sleep':_0x56e82f[_0x2ee194(0x239)],'dead':_0x56e82f[_0x2ee194(0x1e8)]}};if(_0x56e82f[_0x2ee194(0x382)]&&this[_0x2ee194(0x35e)]())this[_0x2ee194(0x2d1)]['scaleX']*=-0x1;if(_0x56e82f[_0x2ee194(0x351)]&&this[_0x2ee194(0x2b4)]())this[_0x2ee194(0x2d1)]['scaleX']*=-0x1;}}else this[_0x2ee194(0x31d)](_0x2ee194(0x282));}}},Game_CharacterBase['prototype'][_0x23100c(0x2bd)]=function(){const _0x3ac52c=_0x23100c;if(this[_0x3ac52c(0x337)]!==undefined)return this['_dragonbonesSpriteData'];return this['initDragonbonesData'](),this['setupDragonbonesData'](),this[_0x3ac52c(0x337)];},Game_CharacterBase[_0x23100c(0x278)][_0x23100c(0x347)]=function(){const _0x115297=_0x23100c;return this[_0x115297(0x2bd)]()[_0x115297(0x2f7)]!=='';},Game_CharacterBase[_0x23100c(0x278)]['currentDragonbonesAnimation']=function(_0x22701a){const _0x28315b=_0x23100c,_0xe1c72e=this[_0x28315b(0x2bd)]();if(!_0x22701a)return _0xe1c72e[_0x28315b(0x27c)][_0x28315b(0x1db)];_0xe1c72e[_0x28315b(0x271)]=_0xe1c72e[_0x28315b(0x271)]['toLowerCase']()[_0x28315b(0x1fa)]();if(_0xe1c72e[_0x28315b(0x271)]!==''&&_0x22701a[_0x28315b(0x271)][_0x28315b(0x27b)][_0xe1c72e['animation']]){if(_0x28315b(0x2df)!==_0x28315b(0x284))return _0xe1c72e[_0x28315b(0x271)];else this['playDragonbonesMotion'](_0x28315b(0x2cd));}let _0x127661=[];if(this[_0x28315b(0x1f2)]())_0x127661=_0x127661[_0x28315b(0x2ad)](this[_0x28315b(0x30f)](_0xe1c72e[_0x28315b(0x27c)][_0x28315b(0x372)])),_0x127661=_0x127661[_0x28315b(0x2ad)](this[_0x28315b(0x30f)](_0xe1c72e[_0x28315b(0x27c)]['walk']));else{if(this[_0x28315b(0x343)]()&&!this[_0x28315b(0x1f2)]())'jEmEK'!==_0x28315b(0x316)?_0x469ad4[_0x28315b(0x214)]=![]:Imported[_0x28315b(0x32b)]&&this[_0x28315b(0x28f)]()?(this[_0x28315b(0x1e7)]>0x0&&(_0x127661['push'](_0xe1c72e[_0x28315b(0x27c)][_0x28315b(0x2a5)]),_0x127661[_0x28315b(0x346)](_0xe1c72e[_0x28315b(0x27c)][_0x28315b(0x243)]),_0x127661=_0x127661[_0x28315b(0x2ad)](this['addDragonbonesAnimationDirections'](_0xe1c72e[_0x28315b(0x27c)][_0x28315b(0x350)]))),_0x127661[_0x28315b(0x346)](_0xe1c72e[_0x28315b(0x27c)]['ropeidle']),_0x127661[_0x28315b(0x346)](_0xe1c72e[_0x28315b(0x27c)][_0x28315b(0x1e9)])):(this[_0x28315b(0x1e7)]>0x0&&(_0x127661[_0x28315b(0x346)](_0xe1c72e[_0x28315b(0x27c)][_0x28315b(0x243)]),_0x127661=_0x127661[_0x28315b(0x2ad)](this[_0x28315b(0x30f)](_0xe1c72e[_0x28315b(0x27c)][_0x28315b(0x350)]))),_0x127661[_0x28315b(0x346)](_0xe1c72e['animationNames']['ladderidle']));else this[_0x28315b(0x1e7)]>0x0&&('vjmtg'===_0x28315b(0x2a4)?(this['isDashing']()&&(_0x127661=_0x127661[_0x28315b(0x2ad)](this[_0x28315b(0x30f)](_0xe1c72e[_0x28315b(0x27c)]['dash']))),_0x127661=_0x127661[_0x28315b(0x2ad)](this[_0x28315b(0x30f)](_0xe1c72e['animationNames'][_0x28315b(0x350)]))):this['requestMotion'](_0x28315b(0x362)));}_0x127661=_0x127661[_0x28315b(0x2ad)](this[_0x28315b(0x30f)](_0xe1c72e[_0x28315b(0x27c)][_0x28315b(0x1db)]));for(const _0x4b03be of _0x127661){if(_0x28315b(0x33d)!==_0x28315b(0x33d))this['isDragonbonesHueAffected']()?this[_0x28315b(0x216)](_0x21869c):_0x9e40ce[_0x28315b(0x227)][_0x28315b(0x2e6)][_0x28315b(0x262)](this,_0x1e06c2);else{if(_0x22701a[_0x28315b(0x271)]['animations'][_0x4b03be])return _0x4b03be;}}return _0xe1c72e[_0x28315b(0x27c)]['idle'];},Game_CharacterBase[_0x23100c(0x278)][_0x23100c(0x30f)]=function(_0x315484){const _0x2886cb=_0x23100c,_0xf729=this['dragonbonesSpriteData'](),_0x22a9c1=this['direction']();let _0x3a80d2=[];_0x3a80d2[_0x2886cb(0x346)](_0x315484+_0x22a9c1);if(_0x22a9c1===0x1){_0x3a80d2[_0x2886cb(0x346)](_0x315484+0x4);if(_0xf729[_0x2886cb(0x214)])_0x3a80d2['push'](_0x315484+0x6);_0x3a80d2[_0x2886cb(0x346)](_0x315484+0x2);}if(_0x22a9c1===0x3){_0x3a80d2['push'](_0x315484+0x6);if(_0xf729[_0x2886cb(0x391)])_0x3a80d2[_0x2886cb(0x346)](_0x315484+0x4);_0x3a80d2[_0x2886cb(0x346)](_0x315484+0x2);}if(_0x22a9c1===0x7){_0x3a80d2[_0x2886cb(0x346)](_0x315484+0x4);if(_0xf729[_0x2886cb(0x214)])_0x3a80d2[_0x2886cb(0x346)](_0x315484+0x6);_0x3a80d2[_0x2886cb(0x346)](_0x315484+0x8);}if(_0x22a9c1===0x9){_0x3a80d2[_0x2886cb(0x346)](_0x315484+0x6);if(_0xf729['flipRight'])_0x3a80d2[_0x2886cb(0x346)](_0x315484+0x4);_0x3a80d2[_0x2886cb(0x346)](_0x315484+0x8);}return _0x3a80d2[_0x2886cb(0x346)](_0x315484),_0x3a80d2;},VisuMZ[_0x23100c(0x227)]['Game_CharacterBase_update']=Game_CharacterBase[_0x23100c(0x278)]['update'],Game_CharacterBase['prototype'][_0x23100c(0x2e5)]=function(){const _0x7e6b8=_0x23100c;VisuMZ['DragonbonesUnion'][_0x7e6b8(0x31b)][_0x7e6b8(0x262)](this),this['updateDragonbonesUnion']();},Game_CharacterBase[_0x23100c(0x278)][_0x23100c(0x384)]=function(){const _0xeb7b3b=_0x23100c;if(!this[_0xeb7b3b(0x347)]())return;this[_0xeb7b3b(0x2dc)]()?this[_0xeb7b3b(0x1e7)]=VisuMZ[_0xeb7b3b(0x227)]['Settings'][_0xeb7b3b(0x35c)][_0xeb7b3b(0x38e)]:'MxFVE'===_0xeb7b3b(0x245)?this[_0xeb7b3b(0x1e7)]--:(_0x5c3aec[_0xeb7b3b(0x227)][_0xeb7b3b(0x2c8)][_0xeb7b3b(0x262)](this,_0x21b5d1),this[_0xeb7b3b(0x2b1)]()&&this[_0xeb7b3b(0x32a)]()[_0xeb7b3b(0x31d)](_0x25f064));},VisuMZ[_0x23100c(0x227)]['Game_Player_refresh']=Game_Player[_0x23100c(0x278)][_0x23100c(0x280)],Game_Player[_0x23100c(0x278)][_0x23100c(0x280)]=function(){const _0x4deefe=_0x23100c;VisuMZ[_0x4deefe(0x227)][_0x4deefe(0x1e1)]['call'](this),this[_0x4deefe(0x26a)]();},Game_Player['prototype'][_0x23100c(0x26a)]=function(){const _0x5cf7d1=_0x23100c,_0x4f33f9=$gameParty[_0x5cf7d1(0x285)]();!_0x4f33f9?this[_0x5cf7d1(0x314)]():this['_dragonbonesSpriteData']=_0x4f33f9[_0x5cf7d1(0x2bd)]();},VisuMZ[_0x23100c(0x227)][_0x23100c(0x38b)]=Game_Follower[_0x23100c(0x278)][_0x23100c(0x280)],Game_Follower[_0x23100c(0x278)]['refresh']=function(){const _0x4921b8=_0x23100c;VisuMZ[_0x4921b8(0x227)][_0x4921b8(0x38b)]['call'](this),this[_0x4921b8(0x26a)]();},Game_Follower['prototype']['setupDragonbonesData']=function(){const _0x15bfb5=_0x23100c,_0x3c5b4c=this[_0x15bfb5(0x338)]();!_0x3c5b4c?_0x15bfb5(0x283)==='QUvrK'?this[_0x15bfb5(0x314)]():this[_0x15bfb5(0x209)]():this[_0x15bfb5(0x337)]=_0x3c5b4c[_0x15bfb5(0x2bd)]();},Game_Actor['prototype'][_0x23100c(0x314)]=function(){const _0x4b3982=_0x23100c;Game_BattlerBase[_0x4b3982(0x278)]['initDragonbonesData'][_0x4b3982(0x262)](this),Game_CharacterBase['prototype'][_0x4b3982(0x314)][_0x4b3982(0x262)](this);},Game_Actor[_0x23100c(0x278)][_0x23100c(0x26a)]=function(){const _0x28368b=_0x23100c;Game_BattlerBase[_0x28368b(0x278)][_0x28368b(0x26a)][_0x28368b(0x262)](this);const _0x3310b5=this[_0x28368b(0x338)]()['note'];Game_CharacterBase[_0x28368b(0x278)][_0x28368b(0x329)][_0x28368b(0x262)](this,_0x3310b5);},Game_Actor[_0x23100c(0x278)][_0x23100c(0x2bd)]=function(){const _0x28b480=_0x23100c;if(this[_0x28b480(0x337)]!==undefined)return this['_dragonbonesSpriteData'];return this[_0x28b480(0x314)](),this['setupDragonbonesData'](),this[_0x28b480(0x337)];},VisuMZ[_0x23100c(0x227)]['Game_Event_refresh']=Game_Event[_0x23100c(0x278)]['refresh'],Game_Event[_0x23100c(0x278)]['refresh']=function(){const _0x5d1fd9=_0x23100c;VisuMZ['DragonbonesUnion']['Game_Event_refresh'][_0x5d1fd9(0x262)](this),this[_0x5d1fd9(0x26a)]();},VisuMZ['DragonbonesUnion']['Game_Event_clearPageSettings']=Game_Event[_0x23100c(0x278)][_0x23100c(0x332)],Game_Event['prototype'][_0x23100c(0x332)]=function(){const _0x5b0f85=_0x23100c;VisuMZ[_0x5b0f85(0x227)]['Game_Event_clearPageSettings'][_0x5b0f85(0x262)](this),this[_0x5b0f85(0x314)]();},VisuMZ[_0x23100c(0x227)][_0x23100c(0x266)]=Game_Event[_0x23100c(0x278)][_0x23100c(0x1dd)],Game_Event[_0x23100c(0x278)][_0x23100c(0x1dd)]=function(){const _0x12e254=_0x23100c;VisuMZ[_0x12e254(0x227)][_0x12e254(0x266)]['call'](this),this[_0x12e254(0x314)](),this['setupDragonbonesData']();},Game_Event[_0x23100c(0x278)][_0x23100c(0x26a)]=function(){const _0x2258d8=_0x23100c;this[_0x2258d8(0x22b)](),this[_0x2258d8(0x2e8)]();},Game_Event[_0x23100c(0x278)][_0x23100c(0x22b)]=function(){const _0x5ab94f=_0x23100c;if(!this[_0x5ab94f(0x340)]()){if('rwbQQ'===_0x5ab94f(0x2f0))return;else _0x309bf0[_0x5ab94f(0x333)]=_0x238289(_0x5a0051['$1']);}const _0x549fa4=this['event']()[_0x5ab94f(0x1d3)];if(_0x549fa4==='')return;this[_0x5ab94f(0x329)](_0x549fa4);},Game_Event[_0x23100c(0x278)][_0x23100c(0x2e8)]=function(){const _0x559110=_0x23100c;if(!this[_0x559110(0x340)]())return;if(!this[_0x559110(0x2fb)]())return;const _0x47b346=this[_0x559110(0x371)]();let _0x366901='';for(const _0x38b3d0 of _0x47b346){if(_0x559110(0x2a3)==='LCPmH'){if([0x6c,0x198][_0x559110(0x35b)](_0x38b3d0[_0x559110(0x33e)])){if(_0x366901!=='')_0x366901+='\x0a';_0x366901+=_0x38b3d0[_0x559110(0x254)][0x0];}}else _0x47d824[_0x559110(0x2f8)]=_0x412c33(_0x4ea840['$1']);}this[_0x559110(0x329)](_0x366901);},VisuMZ['DragonbonesUnion'][_0x23100c(0x357)]=Game_Interpreter['prototype'][_0x23100c(0x25f)],Game_Interpreter['prototype'][_0x23100c(0x25f)]=function(_0x38216c){const _0x3e0d84=_0x23100c;return $gameTemp['setLastPluginCommandInterpreter'](this),VisuMZ[_0x3e0d84(0x227)]['Game_Interpreter_PluginCommand'][_0x3e0d84(0x262)](this,_0x38216c);},VisuMZ[_0x23100c(0x227)]['Sprite_Character_initialize']=Sprite_Character['prototype'][_0x23100c(0x37c)],Sprite_Character[_0x23100c(0x278)][_0x23100c(0x37c)]=function(_0x5c801e){const _0x3185a3=_0x23100c;this[_0x3185a3(0x314)](),VisuMZ[_0x3185a3(0x227)][_0x3185a3(0x378)][_0x3185a3(0x262)](this,_0x5c801e),this[_0x3185a3(0x388)]();},Sprite_Character[_0x23100c(0x278)][_0x23100c(0x314)]=function(){const _0x39e438=_0x23100c;this['_dragonbones']=null,this[_0x39e438(0x38f)]='',this[_0x39e438(0x318)]='';},Sprite_Character[_0x23100c(0x278)]['createBaseDragonbonesSprite']=function(){const _0x343f0e=_0x23100c;this[_0x343f0e(0x390)]=new Sprite(),this[_0x343f0e(0x22f)](this['_baseDragonbonesSprite']);},VisuMZ[_0x23100c(0x227)][_0x23100c(0x28a)]=Sprite_Character[_0x23100c(0x278)][_0x23100c(0x2f2)],Sprite_Character['prototype'][_0x23100c(0x2f2)]=function(){const _0x3ee7e2=_0x23100c;VisuMZ[_0x3ee7e2(0x227)][_0x3ee7e2(0x28a)][_0x3ee7e2(0x262)](this),this[_0x3ee7e2(0x309)]();},Sprite_Character[_0x23100c(0x278)][_0x23100c(0x1f9)]=function(){const _0x137b2b=_0x23100c;this[_0x137b2b(0x374)]&&(_0x137b2b(0x27a)!==_0x137b2b(0x27a)?(this[_0x137b2b(0x1e7)]>0x0&&(_0x5b3c64[_0x137b2b(0x346)](_0x4d09a8[_0x137b2b(0x27c)][_0x137b2b(0x2a5)]),_0x35b319[_0x137b2b(0x346)](_0x4da35e[_0x137b2b(0x27c)][_0x137b2b(0x243)]),_0x2a5c91=_0x483dd9[_0x137b2b(0x2ad)](this['addDragonbonesAnimationDirections'](_0x1276b8['animationNames'][_0x137b2b(0x350)]))),_0x34232d['push'](_0x4adde0[_0x137b2b(0x27c)][_0x137b2b(0x253)]),_0x45431d[_0x137b2b(0x346)](_0x3b7fa0[_0x137b2b(0x27c)][_0x137b2b(0x1e9)])):(this[_0x137b2b(0x390)][_0x137b2b(0x2c3)](this[_0x137b2b(0x374)]),this[_0x137b2b(0x374)][_0x137b2b(0x20a)](),this[_0x137b2b(0x374)]=null,this[_0x137b2b(0x38f)]='',this[_0x137b2b(0x318)]=''));},Sprite_Character[_0x23100c(0x278)]['updateDragonbones']=function(){const _0x326ba2=_0x23100c;if(!this[_0x326ba2(0x361)])return this['disposeDragonbones']();if(!this[_0x326ba2(0x361)][_0x326ba2(0x347)]())return this['disposeDragonbones']();this['updateDragonbonesArmature']();if(!this[_0x326ba2(0x374)])return;this[_0x326ba2(0x2c7)](),this[_0x326ba2(0x364)](),this[_0x326ba2(0x288)]();},Sprite_Character[_0x23100c(0x278)][_0x23100c(0x212)]=function(){const _0x38a36e=_0x23100c,_0x59a827=this[_0x38a36e(0x361)]['dragonbonesSpriteData']();if(this[_0x38a36e(0x38f)]===_0x59a827[_0x38a36e(0x2f7)])return;this[_0x38a36e(0x1f9)](),this['_dragonbonesFilename']=_0x59a827['filename'],DragonbonesManager[_0x38a36e(0x222)](_0x59a827[_0x38a36e(0x2f7)],this[_0x38a36e(0x20f)][_0x38a36e(0x336)](this));},Sprite_Character[_0x23100c(0x278)][_0x23100c(0x20f)]=function(){const _0x1d48e3=_0x23100c,_0x2dd75f=this[_0x1d48e3(0x361)]['dragonbonesSpriteData']();this[_0x1d48e3(0x374)]=DragonbonesManager['createArmature'](_0x2dd75f[_0x1d48e3(0x2f7)]),this[_0x1d48e3(0x2c7)](),setTimeout(this['addDragonbonesChild'][_0x1d48e3(0x336)](this),0x0);},Sprite_Character[_0x23100c(0x278)]['addDragonbonesChild']=function(){const _0x1e3314=_0x23100c;if(!this['_dragonbones'])return;if(!this['_baseDragonbonesSprite'])return;this[_0x1e3314(0x390)][_0x1e3314(0x34b)](this[_0x1e3314(0x374)],0x0);},Sprite_Character['prototype'][_0x23100c(0x2c7)]=function(){const _0x36fe01=_0x23100c;if(!this[_0x36fe01(0x374)])return;const _0x54eb18=this[_0x36fe01(0x361)][_0x36fe01(0x2bd)](),_0x35704d=this[_0x36fe01(0x374)]['animation'];if(_0x35704d[_0x36fe01(0x23b)]){if(_0x36fe01(0x25d)!=='aTDfG')this[_0x36fe01(0x361)]['dragonbonesAnimation']='',this['_dragonbonesAnimation']='',_0x35704d['lastAnimationName']='';else while(_0x460d6b[_0x36fe01(0x2ea)][_0x36fe01(0x229)]>0x0){const _0x59b122=_0x14807d[_0x36fe01(0x2ea)][_0x36fe01(0x20d)]();if(_0x59b122)_0x59b122(this);}}const _0x2f882b=this['_character'][_0x36fe01(0x238)](this['_dragonbones']);this[_0x36fe01(0x318)]!==_0x2f882b&&(this['_dragonbonesAnimation']=_0x2f882b,this[_0x36fe01(0x22c)]());},Sprite_Character['prototype'][_0x23100c(0x22c)]=function(){const _0xdb796b=_0x23100c;if(!this[_0xdb796b(0x374)])return;const _0x455f33=this[_0xdb796b(0x374)][_0xdb796b(0x271)],_0x33dadb=this[_0xdb796b(0x318)]['toLowerCase']()[_0xdb796b(0x1fa)]();if(_0x455f33[_0xdb796b(0x27b)][_0x33dadb]){if(_0x455f33[_0xdb796b(0x26e)]===_0x33dadb&&_0x455f33['animations'][_0x33dadb][_0xdb796b(0x396)]<=0x0)return;_0x455f33[_0xdb796b(0x31e)](_0x33dadb);}},Sprite_Character[_0x23100c(0x278)][_0x23100c(0x364)]=function(){const _0x20a4af=_0x23100c;if(!this[_0x20a4af(0x374)])return;const _0x71cb6a=this[_0x20a4af(0x361)][_0x20a4af(0x2bd)]();this[_0x20a4af(0x374)]['x']=_0x71cb6a['offsetX'],this['_dragonbones']['y']=_0x71cb6a[_0x20a4af(0x20e)],this[_0x20a4af(0x374)][_0x20a4af(0x28c)]['x']=_0x71cb6a[_0x20a4af(0x321)]*this[_0x20a4af(0x311)](),this['_dragonbones'][_0x20a4af(0x28c)]['y']=_0x71cb6a[_0x20a4af(0x2f8)];},Sprite_Character['prototype']['dragonbonesFlip']=function(){const _0x5c63aa=_0x23100c,_0x9b0d79=this[_0x5c63aa(0x361)][_0x5c63aa(0x2bd)]();this[_0x5c63aa(0x270)]=this['_dragonbonesFlipDirection']||0x1;if(_0x9b0d79[_0x5c63aa(0x214)]&&[0x1,0x4,0x7][_0x5c63aa(0x35b)](this[_0x5c63aa(0x361)][_0x5c63aa(0x2cf)]())){if('THxpW'!==_0x5c63aa(0x30b))this[_0x5c63aa(0x270)]=-0x1;else{_0x36e971=_0x53d043[_0x5c63aa(0x1fa)](),_0x38e40e[_0x5c63aa(0x2ce)][_0x5c63aa(0x346)](_0x3c5fbd),_0x2af630[_0x5c63aa(0x2ea)]['push'](_0x10de73);const _0x3300ff=_0x5dac49[_0x5c63aa(0x203)][_0x5c63aa(0x2ba)];!_0x3300ff['loading']&&this[_0x5c63aa(0x209)]();}}else{if(_0x9b0d79[_0x5c63aa(0x391)]&&[0x9,0x6,0x3][_0x5c63aa(0x35b)](this[_0x5c63aa(0x361)][_0x5c63aa(0x2cf)]())){if(_0x5c63aa(0x269)===_0x5c63aa(0x259))return;else this['_dragonbonesFlipDirection']=-0x1;}else![0x8,0x2][_0x5c63aa(0x35b)](this[_0x5c63aa(0x361)][_0x5c63aa(0x2cf)]())&&(this['_dragonbonesFlipDirection']=0x1);}return this['_dragonbonesFlipDirection'];},Sprite_Character['prototype'][_0x23100c(0x288)]=function(){const _0x5833f5=_0x23100c;if(!this[_0x5833f5(0x374)])return;const _0x128673=this[_0x5833f5(0x361)][_0x5833f5(0x2bd)]();let _0x472f24=_0x128673[_0x5833f5(0x25c)];this[_0x5833f5(0x361)][_0x5833f5(0x2dc)]()&&(_0x5833f5(0x2d9)!==_0x5833f5(0x354)?(_0x472f24*=this['_character'][_0x5833f5(0x240)](),this[_0x5833f5(0x361)][_0x5833f5(0x1f6)]()?_0x472f24*=_0x128673[_0x5833f5(0x1ee)]:_0x472f24*=_0x128673[_0x5833f5(0x333)]):(_0x99dc5f[_0x5833f5(0x227)][_0x5833f5(0x2de)][_0x5833f5(0x262)](this,_0x2fa1d3),this[_0x5833f5(0x324)]['name']===_0x5833f5(0x33c)&&this['playDragonbonesMotion'](_0x1c8415))),this[_0x5833f5(0x374)][_0x5833f5(0x271)]['timeScale']=_0x472f24;},VisuMZ[_0x23100c(0x227)][_0x23100c(0x2ee)]=Sprite_Character['prototype'][_0x23100c(0x2ae)],Sprite_Character[_0x23100c(0x278)][_0x23100c(0x2ae)]=function(){const _0x2a1cc4=_0x23100c;this[_0x2a1cc4(0x361)]&&this['_character'][_0x2a1cc4(0x347)]()?this[_0x2a1cc4(0x2f3)]():_0x2a1cc4(0x317)!==_0x2a1cc4(0x317)?(this[_0x2a1cc4(0x361)]['dragonbonesAnimation']='',this[_0x2a1cc4(0x318)]='',_0x4ad084[_0x2a1cc4(0x26e)]=''):VisuMZ[_0x2a1cc4(0x227)][_0x2a1cc4(0x2ee)][_0x2a1cc4(0x262)](this);},Sprite_Character[_0x23100c(0x278)][_0x23100c(0x2f3)]=function(){const _0x24d1af=_0x23100c,_0x4f049b=this[_0x24d1af(0x361)][_0x24d1af(0x2bd)](),_0x1a5251=_0x4f049b[_0x24d1af(0x2dd)];this['setFrame'](0x0,0x0,0x0,_0x1a5251);};