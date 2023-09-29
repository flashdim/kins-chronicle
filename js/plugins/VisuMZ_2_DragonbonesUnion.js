//=============================================================================
// VisuStella MZ - Dragonbones Union
// VisuMZ_2_DragonbonesUnion.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_DragonbonesUnion = true;

var VisuMZ = VisuMZ || {};
VisuMZ.DragonbonesUnion = VisuMZ.DragonbonesUnion || {};
VisuMZ.DragonbonesUnion.version = 1.29;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.29] [DragonbonesUnion]
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
 *   Finish: Revert Idle:
 *   - Revert animation to 'idle' animation after finishing?
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
 * Version 1.29: September 14, 2023
 * * Bug Fixes!
 * ** Fixed a problem with TPB Active causing the input animation for
 *    Dragonbones armatures to be frozen in place. Fix made by Irina.
 * * Feature Update!
 * ** Added a feature to separate Dragonbones armature blend modes from being
 *    suppressed by PixiJS's filters. Update made by Irina.
 * 
 * Version 1.28: August 17, 2023
 * * Feature Update!
 * ** If a Dragonbones battler has an "idle" animation, it will no longer
 *    utilize the "walk" motion and instead, refer to its own "idle" motion.
 *    Update made by Irina.
 * ** If a Dragonbones map sprite has a non-looping animation with a playtime
 *    value of 1, the animation will halt at the last frame instead of looping
 *    or reverting to the first neutral frame. Update made by Irina.
 * 
 * Version 1.27: July 13, 2023
 * * Bug Fixes!
 * ** Fixed a bug that made dragonbones armatures persist after removing party
 *    members from the team. Fix made by Irina.
 * 
 * Version 1.26: May 18, 2023
 * * Bug Fixes!
 * ** Fixed a bug that caused scene changes back into the battle scene would
 *    cause collapsed Dragonbones Battlers to reappear. Fix made by Arisu.
 * 
 * Version 1.25: March 16, 2023
 * * Bug Fixes!
 * ** Fixed a bug that caused some Dragonbones animations to be unable to play
 *    on map sprites if they are facing specific directions. Fix made by Irina.
 * 
 * Version 1.24: February 16, 2023
 * * Bug Fixes!
 * ** Fixed a bug that the "Flip Actors" and "Flip Enemies" parameters did not
 *    work properly after using a scale X notetag. Fix made by Olivia.
 * 
 * Version 1.23: January 20, 2023
 * * Feature Update!
 * ** Guard animations should no longer temporarily default to idle stances if
 *    an unnamed animation does not exist if the battler is guarding. Update
 *    made by Irina.
 * 
 * Version 1.22: December 15, 2022
 * * Compatibility Update!
 * ** Should now work with RPG Maker MZ version 1.6.1's updated Pixi JS version
 *    of 5.3.12 from 5.2.4. If ya don't have this plugin updated and you are
 *    using 5.3.12 onward, your battlers won't be loading.
 * 
 * Version 1.21: November 24, 2022
 * * Bug Fixes!
 * ** Custom motions now work better with non-actor participants during actions
 *    involving dragonbones battlers. Fix made by Arisu.
 * 
 * Version 1.20: November 17, 2022
 * * Bug Fixes!
 * ** "Damage" motion wasn't working properly for actors. This should now be
 *    fixed and working properly.
 * * Bug Fixes!
 * ** "Escape" motion should now work properly with Dragonbones actors. Idle
 *    motions will no longer take priority over them.
 * 
 * Version 1.19: November 10, 2022
 * * Bug Fixes!
 * ** Fixed a bug from the v1.18 update that prevented custom motions from
 *    being displayed properly with actors. Fix made by Irina.
 * 
 * Version 1.18: October 13, 2022
 * * Compatibility Update!
 * ** Plugin should be more compatible with VisuMZ_3_VisualStateEffect.
 * 
 * Version 1.17: January 27, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Added Plugin Command Parameter for "Picture: Play Dragonbones Animation":
 * *** Finish: Revert Idle?
 * **** Revert animation to 'idle' animation after finishing?
 * **** Added by Irina
 *
 * Version 1.16: January 6, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
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
 * @arg IdleFinish:eval
 * @text Finish: Revert Idle?
 * @parent FlipSettings
 * @type boolean
 * @on Revert
 * @off Freeze
 * @desc Revert animation to 'idle' animation after finishing?
 * @default false
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

function _0x51d1(){const _0x1d71d8=['pBNlY','Sprite_Character_initialize','MotionThrust','setupPageSettings','This\x20is\x20a\x20static\x20class','index','escape','isPlaying','Game_Actor_performAttack','isCompleted','Picture_ScaleDragonbones','status','isMoving','iJdvf','MapSprite','Sprite_updateColorFilter','MWsPS','sYQTo','attack','Sprite_Enemy_refreshMotion','aQDXf','enHGE','Wuubc','map','endBattle','filters','data','HueAffected','MotionChant','Game_Screen_erasePicture','Game_Actor_performAction','myYys','startMotion','FuSKv','MotionSpell','scaleY','performCollapse','setLastPluginCommandInterpreter','FlipActors','MotionGuard','MapSprite_EventAnimationStop','YxymG','isGuardWaiting','812363nRDjIJ','AkOSI','list','MapSprite_ActorAnimationStop','RopeClimb','blendMode','15631QIOljH','disposeDragonbones','IdleFinish','Sprite_Character_updateBitmap','485wtkYPj','description','_dragonbonesData','eventId','Game_Enemy_setup','prepareNextLoadArmature','height','attachSpritesToDistortionSprite','chant','refresh','LqHUz','_targets','Picture_DragonbonesAnimation','MapSprite_PlayerAnimationStop','shared','TimeScale','EYKLd','MotionDamage','animation','setupDragonbonesData','updateDragonbonesArmature','erasePicture','updateDragonbonesUnion','SkeKey','Sprite_Actor_startMotion','children','ropeclimb','scale','BattleManager_endBattle','Sprite_Enemy_setHue','Sprite_Actor_updateBitmap','abnormal','isGuard','ggxXx','isDying','EventID','DnURB','MTiSv','_hue','61371gaTSXu','cNWkZ','WGfhC','Walk','fcuht','battlerHue','Picture_DragonbonesOffset','initialize','GwfXc','initMembers','dying','setupDragonbonesDataCommentTags','LoadedFilenames','MotionSleep','addChild','isTryingToEscape','call','push','toUpperCase','Sprite_Picture_initialize','match','picture','refreshMotionDragonbones','rixIX','MotionDying','Game_Enemy_performCollapse','eKTMS','guard','ladderclimb','Sprite_Enemy_initMembers','SkeExt','_dragonbonesFilename','playDragonbonesMotion','round','TxaExt','FlipEnemies','QZFHz','onEscapeFailure','Game_Enemy_performDamage','performActionEndMembers','wait','addDragonbonesChild','realMoveSpeed','STR','setFrame','Loader','JhWwA','1150snpXkc','bind','toLowerCase','updateDragonbonesProperties','spell','OffsetX','terminate','add','qbPgA','4164072xBpPwk','isSceneBattle','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','transform','_updateDragonbonesChildrenColorFilter','ropeidle','requestMotion','flipLeft','setup','filter','LoadQueue','SVFPr','VisuMZ_0_CoreEngine','yNcOA','JSON','_enemyId','offsetX','_dragonbonesName','factory','clearPageSettings','isSceneMap','parse','parseTextureAtlasData','isDead','_lastPluginCommandInterpreter','_dragonbonesMoveTimer','QPRrs','processLoad','IRPDD','VERSION','updateDragonbonesBattler','Picture_TimeScaleDragonbones','MotionItem','zhtWO','followers','FlipLeft','animationNames','GmLHb','dashRate','performActionDragonbonesUnion','zrluq','offsetY','complete','lastAnimationState','parseDragonBonesData','play','ARRAYJSON','bzjPy','_target','isAttack','CJWmh','isDashing','Width','jgmTa','ScaleX','MotionDead','isAlive','Game_Picture_initialize','_dragonbonesAnimation','WAtdw','dispose','309ftECkU','createArmature','elPZV','_requestedDragonbonesAnimation','UMMIL','MotionSwing','1640qoztzg','updateShadow','Game_Battler_requestMotionRefresh','performActionMotions','wvaiV','setColorTone','ARRAYSTR','VisuMZ_1_EventsMoveCore','Scene_Battle_terminate','lastAnimationName','uCSky','qyXJI','Picture_SetupDragonbones','QjJwG','battlerSprites','_scene','scaleX','erasePictureDragonbonesUnion','jAFWl','onLoadDragonbones','Game_Battler_performActionEndMembers','event','IdleBypassList','direction','DImdL','Idle','QxsXn','parameters','runQueuedCallbacks','TqrCx','LkSvr','Sprite_Actor_initMembers','isActing','Settings','updateFrameDragonbonesUnion','battleAniSpeed','Sprite_Character_updateCharacterFrame','MqLTI','DqaCQ','_dragonbones','visible','ENJNK','EYbLw','1074HeIBbI','setHue','Game_Interpreter_PluginCommand','NUM','damage','clearTryEscaping','DashRate','Sprite_Picture_update','VisuMZ_1_BattleCore','setupDragonbonesDataNotetags','iCsIE','LhhMb','idle','_distortionSprite','animations','constructor','actor','FWXHu','MotionWait','ZwnNd','_mainSprite','ScaleY','YRjHH','exit','addChildAt','width','updateDragonbonesTimeScale','Sprite_Enemy_updateBitmap','1166UoyqcD','Game_Player_refresh','USRcK','checkDragonbonesStringTags','addDragonbonesAnimationDirections','EVAL','dead','follower','MotionWalk','_dragonbonesSpriteContainer','isHidden','_stateSprite','item','Game_Actor_performDamage','XJIHy','_baseDragonbonesSprite','nrgEY','performDamageDragonbonesUnion','Sprite_Actor_update','_escaped','revertToIdle','_dragonbonesBattlerData','ladderidle','_dragonbonesFlipDirection','playDragonbonesIdleAnimation','playTimes','performAttack','registerCommand','timeScale','stateMotionIndex','OffsetY','WalkTimer','trim','getDragonbones','dash','performAction','Sprite_Actor_updateFrame','wcSik','findTargetSprite','owtkB','leader','walk','battler','EcqHa','updateBitmap','_battleAniSpeedLooping','loadNextArmature','Height','requestDragonbonesAnimation','MotionSkill','motion','LoopingAnimations','rTSRa','initMembersDragonbonesUnion','note','updateDragonbonesSelection','processEscape','once','TxaKey','ijiXC','yvOOc','setBlendColor','DefaultAnimation','PictureID','hasDragonbonesBattler','_pictures','max','MotionEvade','GEalK','ARRAYNUM','name','defineProperty','zebxl','_lastMotionType','_updateColorFilter','setupDragonbones','playDragonbonesAnimation','aMJiF','Game_Actor_performCollapse','victory','currentDragonbonesAnimation','dragonbonesSpriteData','_colorFilter','loadArmature','WalkRate','EnemyStances','MapSprite_FollowerAnimationPlay','Dash','buildArmatureDisplay','isEnemy','remove','SyMrX','format','loadComplete','VPNNH','BattleManager_onEscapeFailure','dragonbonesFlip','resources','flipRight','prototype','tVamU','LadderClimb','aania','AssetsPath','updateDragonbonesAnimation','WdOGf','jump','findPictureSprite','Sprite_Actor_updateShadow','STRUCT','Game_Actor_setup','PixiFactory','makeDeepCopy','isJumping','Game_Follower_refresh','nAiTx','Animation','ConvertParams','concat','_pictureContainer','OrmEI','updateShadowDragonbonesUnion','Filename','BattleManager_processEscape','MapSprite_FollowerAnimationStop','ZAWCq','updateFrame','showPicture','_enemy','VKVls','test','_weaponSprite','walkRate','jqSpO','OOtZt','updateDragonbones','5.3.12','FLHlW','dragonbonesData','opacity','setBattler','SIgra','WYNRg','isInputting','Sprite_Enemy_setBattler','createBaseDragonbonesSprite','MotionEscape','ActorID','dragonbonesAnimation','hasDragonbones','bitmap','collapseType','MapSprite_ActorChange','qZJrg','updateCharacterFrameDragonbonesUnion','cqXri','IoRhS','requestMotionRefresh','update','initDragonbonesData','Dragonbones','NPKXW','FlipRight','Jump','find','Battler','ARRAYSTRUCT','lastFileName','_colorTone','sPBvh','filename','_dragonbonesSpriteData','load','Game_Event_setupPageSettings','General','KCqLx','length','performCollapseDragonbonesUnion','_battler','TexExt','3125512cATkXq','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','_playtestF7Looping','LadderIdle','isActor','updateCharacterFrame','canActorPlayDragonbonesMotion','sIlKf','sPfjM','testArmature','parent','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','RopeIdle','createDefaultPicture','Game_Battler_requestMotion','_blendColor','includes','CallbackQueue','KbTio','TexKey','setDragonbonesHue','enemy','lugLJ','performDamage','shift','getLastPluginCommandInterpreter','loading','ARRAYFUNC','Game_Enemy_performAction','enbhx','sleep','removeChild','Game_Enemy_transform','MotionVictory','DragonbonesUnion','_spriteset','aFjbk','dGSHi','NeucC','VisuMZ_1_OptionsCore','Game_CharacterBase_update','Game_Event_clearPageSettings','QVOrt','isChanting','_character','MotionAbnormal','_escaping','FollowerIndex'];_0x51d1=function(){return _0x1d71d8;};return _0x51d1();}const _0x179f76=_0x2e3a;(function(_0x40b1f7,_0x233ac8){const _0x4dfce7=_0x2e3a,_0x58125d=_0x40b1f7();while(!![]){try{const _0x58a2e7=parseInt(_0x4dfce7(0x1b2))/0x1+parseInt(_0x4dfce7(0xa3))/0x2*(-parseInt(_0x4dfce7(0x258))/0x3)+parseInt(_0x4dfce7(0x25e))/0x4*(parseInt(_0x4dfce7(0x1bc))/0x5)+-parseInt(_0x4dfce7(0x87))/0x6*(-parseInt(_0x4dfce7(0x1b8))/0x7)+parseInt(_0x4dfce7(0x157))/0x8+parseInt(_0x4dfce7(0x1e3))/0x9*(-parseInt(_0x4dfce7(0x212))/0xa)+-parseInt(_0x4dfce7(0x21b))/0xb;if(_0x58a2e7===_0x233ac8)break;else _0x58125d['push'](_0x58125d['shift']());}catch(_0x35c1dc){_0x58125d['push'](_0x58125d['shift']());}}}(_0x51d1,0x6679f));var label=_0x179f76(0x179),tier=tier||0x0,dependencies=[_0x179f76(0x143)],pluginData=$plugins[_0x179f76(0x224)](function(_0x4ccd58){const _0x5a36cc=_0x179f76;return _0x4ccd58['status']&&_0x4ccd58[_0x5a36cc(0x1bd)][_0x5a36cc(0x167)]('['+label+']');})[0x0];function _0x2e3a(_0x299e11,_0x55aaef){const _0x51d1e8=_0x51d1();return _0x2e3a=function(_0x2e3a00,_0x38389d){_0x2e3a00=_0x2e3a00-0x75;let _0x27f5d0=_0x51d1e8[_0x2e3a00];return _0x27f5d0;},_0x2e3a(_0x299e11,_0x55aaef);}VisuMZ[label][_0x179f76(0x7d)]=VisuMZ[label][_0x179f76(0x7d)]||{},VisuMZ['ConvertParams']=function(_0x82a098,_0x154db1){const _0x21d21e=_0x179f76;for(const _0x4a0631 in _0x154db1){if(_0x4a0631[_0x21d21e(0x1f7)](/(.*):(.*)/i)){if(_0x21d21e(0x25a)===_0x21d21e(0x17c)){if(!_0x304c48)return;_0x5d82b2[_0x21d21e(0x118)](_0x508003,_0xc82da7),_0x113210[_0x21d21e(0x164)](_0x16431b[_0x21d21e(0xe2)]);const _0x1e1579=_0x48fb60[_0x21d21e(0x1f8)](_0x336603[_0x21d21e(0xe2)]),_0x489461=_0x1e1579['dragonbonesData']();_0x489461[_0x21d21e(0x26e)]=_0x25146b[_0x21d21e(0x251)],_0x489461[_0x21d21e(0x1aa)]=_0x1981ba[_0x21d21e(0x9c)];}else{const _0x3a393e=String(RegExp['$1']),_0x37441a=String(RegExp['$2'])[_0x21d21e(0x1f5)]()[_0x21d21e(0xc3)]();let _0x35e416,_0x2f8c09,_0xf9e71d;switch(_0x37441a){case _0x21d21e(0x8a):_0x35e416=_0x154db1[_0x4a0631]!==''?Number(_0x154db1[_0x4a0631]):0x0;break;case _0x21d21e(0xe8):_0x2f8c09=_0x154db1[_0x4a0631]!==''?JSON['parse'](_0x154db1[_0x4a0631]):[],_0x35e416=_0x2f8c09['map'](_0x597bb1=>Number(_0x597bb1));break;case _0x21d21e(0xa8):_0x35e416=_0x154db1[_0x4a0631]!==''?eval(_0x154db1[_0x4a0631]):null;break;case'ARRAYEVAL':_0x2f8c09=_0x154db1[_0x4a0631]!==''?JSON[_0x21d21e(0x230)](_0x154db1[_0x4a0631]):[],_0x35e416=_0x2f8c09[_0x21d21e(0x19e)](_0x332367=>eval(_0x332367));break;case _0x21d21e(0x229):_0x35e416=_0x154db1[_0x4a0631]!==''?JSON[_0x21d21e(0x230)](_0x154db1[_0x4a0631]):'';break;case _0x21d21e(0x249):_0x2f8c09=_0x154db1[_0x4a0631]!==''?JSON[_0x21d21e(0x230)](_0x154db1[_0x4a0631]):[],_0x35e416=_0x2f8c09[_0x21d21e(0x19e)](_0x48a3c1=>JSON[_0x21d21e(0x230)](_0x48a3c1));break;case'FUNC':_0x35e416=_0x154db1[_0x4a0631]!==''?new Function(JSON[_0x21d21e(0x230)](_0x154db1[_0x4a0631])):new Function('return\x200');break;case _0x21d21e(0x172):_0x2f8c09=_0x154db1[_0x4a0631]!==''?JSON[_0x21d21e(0x230)](_0x154db1[_0x4a0631]):[],_0x35e416=_0x2f8c09['map'](_0x2c713b=>new Function(JSON[_0x21d21e(0x230)](_0x2c713b)));break;case _0x21d21e(0x20e):_0x35e416=_0x154db1[_0x4a0631]!==''?String(_0x154db1[_0x4a0631]):'';break;case _0x21d21e(0x264):_0x2f8c09=_0x154db1[_0x4a0631]!==''?JSON[_0x21d21e(0x230)](_0x154db1[_0x4a0631]):[],_0x35e416=_0x2f8c09[_0x21d21e(0x19e)](_0x275362=>String(_0x275362));break;case _0x21d21e(0x110):_0xf9e71d=_0x154db1[_0x4a0631]!==''?JSON[_0x21d21e(0x230)](_0x154db1[_0x4a0631]):{},_0x35e416=VisuMZ['ConvertParams']({},_0xf9e71d);break;case _0x21d21e(0x149):_0x2f8c09=_0x154db1[_0x4a0631]!==''?JSON[_0x21d21e(0x230)](_0x154db1[_0x4a0631]):[],_0x35e416=_0x2f8c09[_0x21d21e(0x19e)](_0x328291=>VisuMZ[_0x21d21e(0x118)]({},JSON[_0x21d21e(0x230)](_0x328291)));break;default:continue;}_0x82a098[_0x3a393e]=_0x35e416;}}}return _0x82a098;},(_0x5d3e15=>{const _0x37e298=_0x179f76,_0x472564=_0x5d3e15[_0x37e298(0xe9)];for(const _0x3e2b98 of dependencies){if(!Imported[_0x3e2b98]){if(_0x37e298(0x10c)===_0x37e298(0x235))this[_0x37e298(0x25b)]=![];else{alert(_0x37e298(0x158)[_0x37e298(0xff)](_0x472564,_0x3e2b98)),SceneManager[_0x37e298(0x9e)]();break;}}}const _0x135bc0=_0x5d3e15[_0x37e298(0x1bd)];if(_0x135bc0[_0x37e298(0x1f7)](/\[Version[ ](.*?)\]/i)){if('XJIHy'===_0x37e298(0xb1)){const _0x3d7338=Number(RegExp['$1']);_0x3d7338!==VisuMZ[label]['version']&&(_0x37e298(0xc8)===_0x37e298(0xc8)?(alert(_0x37e298(0x162)[_0x37e298(0xff)](_0x472564,_0x3d7338)),SceneManager[_0x37e298(0x9e)]()):(this[_0x37e298(0xac)]&&this[_0x37e298(0xac)][_0x37e298(0x176)](this[_0x37e298(0x83)]),this[_0x37e298(0x176)](this[_0x37e298(0x83)]),this[_0x37e298(0x83)][_0x37e298(0x257)](),delete this['_dragonbones'],delete this[_0x37e298(0x22c)]));}else this['_dragonbonesAnimation']=_0x54d5b4,this['playDragonbonesAnimation']();}if(_0x135bc0[_0x37e298(0x1f7)](/\[Tier[ ](\d+)\]/i)){if(_0x37e298(0x130)!==_0x37e298(0x130))_0x3c0930[_0x37e298(0x1aa)]=_0x3f71a0(_0x2abeda['$1']);else{const _0xed6042=Number(RegExp['$1']);_0xed6042<tier?(alert(_0x37e298(0x21d)[_0x37e298(0xff)](_0x472564,_0xed6042,tier)),SceneManager[_0x37e298(0x9e)]()):_0x37e298(0x268)===_0x37e298(0xf0)?_0x49dc7a[_0x37e298(0x244)]=_0x44dffb(_0x1ec69d['$1']):tier=Math[_0x37e298(0xe5)](_0xed6042,tier);}}VisuMZ['ConvertParams'](VisuMZ[label]['Settings'],_0x5d3e15[_0x37e298(0x77)]);})(pluginData);function DragonbonesManager(){const _0x4df12e=_0x179f76;throw new Error(_0x4df12e(0x18b));}DragonbonesManager[_0x179f76(0x10a)]=VisuMZ['DragonbonesUnion'][_0x179f76(0x7d)]['AssetsPath'],DragonbonesManager['DefaultAnimation']=VisuMZ[_0x179f76(0x179)][_0x179f76(0x7d)][_0x179f76(0x151)]['LoadAnimation'],DragonbonesManager[_0x179f76(0x1ef)]=[],DragonbonesManager[_0x179f76(0x225)]=[],DragonbonesManager[_0x179f76(0x168)]=[],DragonbonesManager[_0x179f76(0x125)]=function(_0x757322,_0x608daf,_0x417c6b,_0x15e93f){const _0x33283f=_0x179f76;if(!_0x417c6b)_0x417c6b=SceneManager['_scene'];if(!_0x15e93f)_0x15e93f=_0x33283f(0x160);if(_0x417c6b[_0x15e93f]){const _0x261400=_0x417c6b[_0x15e93f];_0x261400&&(_0x33283f(0x109)!==_0x33283f(0x187)?(_0x417c6b[_0x33283f(0x176)](_0x261400),_0x261400[_0x33283f(0x257)]()):this[_0x33283f(0x221)](_0x33283f(0x216)));}this[_0x33283f(0xf6)](_0x757322,DragonbonesManager['testLoaded']['bind'](this,_0x757322,_0x608daf,_0x417c6b,_0x15e93f));},DragonbonesManager['testLoaded']=function(_0x4022b8,_0x44c1e5,_0x28a7f8,_0xf517bb){const _0x2b6e39=_0x179f76,_0x2b2174=this['createArmature'](_0x4022b8);_0x2b2174&&(_0x28a7f8[_0x2b6e39(0x1f1)](_0x2b2174),_0x2b2174['x']=Graphics[_0x2b6e39(0xa0)]/0x2,_0x2b2174['y']=Graphics[_0x2b6e39(0x1c2)]*0x3/0x4,_0x44c1e5=_0x44c1e5||DragonbonesManager[_0x2b6e39(0xe1)],_0x44c1e5=_0x44c1e5[_0x2b6e39(0x214)](),_0x2b2174[_0x2b6e39(0x1ce)]['animations'][_0x44c1e5]&&_0x2b2174[_0x2b6e39(0x1ce)]['play'](_0x44c1e5)),_0x28a7f8[_0xf517bb]=_0x2b2174;},DragonbonesManager[_0x179f76(0x259)]=function(_0x6dcff1){const _0x2926f0=_0x179f76,_0x1d7b24=dragonBones['PixiFactory']['factory'][_0x2926f0(0xfb)](_0x6dcff1);if(!_0x1d7b24)return null;for(const _0x30d08a in _0x1d7b24[_0x2926f0(0x1ce)][_0x2926f0(0x95)]){if(_0x2926f0(0x86)!==_0x2926f0(0x86))this['_requestedDragonbonesAnimation']=!![];else{if(_0x30d08a[_0x2926f0(0x214)]()===_0x30d08a)continue;_0x1d7b24[_0x2926f0(0x1ce)]['animations'][_0x30d08a[_0x2926f0(0x214)]()]=_0x1d7b24['animation'][_0x2926f0(0x95)][_0x30d08a],delete _0x1d7b24[_0x2926f0(0x1ce)][_0x2926f0(0x95)][_0x30d08a];}}for(let _0x1d85d4=0x0;_0x1d85d4<_0x1d7b24[_0x2926f0(0x1ce)][_0x2926f0(0x23f)][_0x2926f0(0x153)];_0x1d85d4++){if(_0x2926f0(0x107)!==_0x2926f0(0x24d))_0x1d7b24[_0x2926f0(0x1ce)][_0x2926f0(0x23f)][_0x1d85d4]=_0x1d7b24['animation']['animationNames'][_0x1d85d4][_0x2926f0(0x214)]();else{_0x3ee4ce[_0x2926f0(0x1f7)](/(?:ANI|MOTION) (.*):[ ](.*)/i);const _0x35ea69=_0x51734d(_0xcf5112['$1'])[_0x2926f0(0x214)]()[_0x2926f0(0xc3)](),_0x3a85c9=_0x4d2a26(_0x393b96['$2'])['toLowerCase']()[_0x2926f0(0xc3)]();_0x59f0da[_0x2926f0(0x23f)][_0x35ea69]=_0x3a85c9;}}const _0x949338=VisuMZ[_0x2926f0(0x179)]['Settings']['General'][_0x2926f0(0xd6)];for(let _0x386d74 of _0x949338){if(_0x2926f0(0x98)!==_0x2926f0(0x98))_0x1b4bce=[_0x2926f0(0xa9),_0x2926f0(0x18d),_0x2926f0(0xf2)];else{_0x386d74=_0x386d74[_0x2926f0(0x214)]()[_0x2926f0(0xc3)]();_0x1d7b24[_0x2926f0(0x1ce)]['animations'][_0x386d74]&&(_0x1d7b24[_0x2926f0(0x1ce)][_0x2926f0(0x95)][_0x386d74][_0x2926f0(0xbc)]=0x0);for(let _0x548f27=0x1;_0x548f27<=0x9;_0x548f27++){const _0x10993f=_0x386d74+_0x548f27;_0x1d7b24['animation'][_0x2926f0(0x95)][_0x10993f]&&(_0x1d7b24[_0x2926f0(0x1ce)][_0x2926f0(0x95)][_0x10993f][_0x2926f0(0xbc)]=0x0);}}}return _0x1d7b24[_0x2926f0(0x1ce)][_0x2926f0(0x95)][DragonbonesManager[_0x2926f0(0xe1)]]&&('Cgtbd'===_0x2926f0(0x152)?this['dragonbonesSpriteData']()[_0x2926f0(0x1ce)]=_0x9989a6:_0x1d7b24[_0x2926f0(0x1ce)][_0x2926f0(0x248)](DragonbonesManager[_0x2926f0(0xe1)])),_0x1d7b24;},DragonbonesManager['loadArmature']=function(_0x5435e0,_0x56e1dd){const _0x30c549=_0x179f76;_0x5435e0=_0x5435e0[_0x30c549(0xc3)](),DragonbonesManager[_0x30c549(0x225)]['push'](_0x5435e0),DragonbonesManager[_0x30c549(0x168)][_0x30c549(0x1f4)](_0x56e1dd);const _0x41829d=PIXI[_0x30c549(0x210)][_0x30c549(0x1ca)];!_0x41829d[_0x30c549(0x171)]&&this[_0x30c549(0xd1)]();},DragonbonesManager[_0x179f76(0xd1)]=function(){const _0x36231d=_0x179f76;DragonbonesManager['LoadQueue'][_0x36231d(0x153)]>0x0?_0x36231d(0xd7)!=='hMjGY'?this[_0x36231d(0x1c1)]():this['_character'][_0x36231d(0x137)]='':_0x36231d(0xa5)===_0x36231d(0x76)?(this[_0x36231d(0x24e)]()&&(_0x2f9202=_0xfd7741[_0x36231d(0x119)](this[_0x36231d(0xa7)](_0x7ae7f7[_0x36231d(0x23f)][_0x36231d(0xc5)]))),_0x89169d=_0x2bbd37['concat'](this[_0x36231d(0xa7)](_0x3b4c27[_0x36231d(0x23f)][_0x36231d(0xcc)]))):this[_0x36231d(0x78)]();},DragonbonesManager[_0x179f76(0x1c1)]=function(){const _0x2ef3eb=_0x179f76,_0x4a7432=DragonbonesManager['LoadQueue']['shift']();if(this['LoadedFilenames']['includes'](_0x4a7432))'WAtdw'!==_0x2ef3eb(0x256)?this[_0x2ef3eb(0xbb)]():this['loadNextArmature']();else!this['LoadedFilenames'][_0x2ef3eb(0x167)](_0x4a7432)&&this[_0x2ef3eb(0x236)](_0x4a7432);},DragonbonesManager['processLoad']=function(_0x26b5ee){const _0x53fea8=_0x179f76,_0x460eb8=PIXI[_0x53fea8(0x238)]>=_0x53fea8(0x12b);this[_0x53fea8(0x1ef)][_0x53fea8(0x1f4)](_0x26b5ee),this[_0x53fea8(0x14a)]=_0x26b5ee;const _0x417a62=VisuMZ[_0x53fea8(0x179)][_0x53fea8(0x7d)]['General'],_0x20d03a=DragonbonesManager[_0x53fea8(0x10a)],_0x1150ec=PIXI['Loader'][_0x53fea8(0x1ca)];_0x1150ec[_0x53fea8(0x219)](_0x26b5ee+_0x417a62[_0x53fea8(0x1d3)],_0x20d03a+_0x26b5ee+_0x417a62[_0x53fea8(0x201)]),_0x1150ec[_0x53fea8(0x219)](_0x26b5ee+_0x417a62['TexKey'],_0x20d03a+_0x26b5ee+_0x417a62[_0x53fea8(0x156)]),_0x1150ec[_0x53fea8(0x219)](_0x26b5ee+_0x417a62[_0x53fea8(0xdd)],_0x20d03a+_0x26b5ee+_0x417a62[_0x53fea8(0x205)]),_0x460eb8?(_0x1150ec[_0x53fea8(0x14f)](_0x1150ec),_0x1150ec['onComplete'][_0x53fea8(0xdc)](()=>DragonbonesManager['loadComplete'](_0x1150ec,_0x1150ec[_0x53fea8(0x104)]))):_0x53fea8(0x1e7)===_0x53fea8(0x169)?(_0x456855[_0x53fea8(0x1f1)](_0x52197d),_0xa28309['x']=_0x3028bd['width']/0x2,_0x5b510b['y']=_0x6220a[_0x53fea8(0x1c2)]*0x3/0x4,_0x4bb3d4=_0x2e683b||_0x60cb6e[_0x53fea8(0xe1)],_0x258e97=_0x2351d0[_0x53fea8(0x214)](),_0x3f5d95[_0x53fea8(0x1ce)][_0x53fea8(0x95)][_0x489230]&&_0x2e4069[_0x53fea8(0x1ce)][_0x53fea8(0x248)](_0x5af715)):(_0x1150ec[_0x53fea8(0xdc)](_0x53fea8(0x245),DragonbonesManager['loadComplete'],this),_0x1150ec[_0x53fea8(0x14f)]());},DragonbonesManager[_0x179f76(0x100)]=function(_0x35aefb,_0x543d81){const _0x326f25=_0x179f76,_0x44a3b5=VisuMZ['DragonbonesUnion'][_0x326f25(0x7d)][_0x326f25(0x151)],_0x44e9e1=this[_0x326f25(0x14a)],_0x2ca1f8=dragonBones[_0x326f25(0x112)][_0x326f25(0x22d)];_0x2ca1f8[_0x326f25(0x247)](_0x543d81[_0x44e9e1+_0x44a3b5[_0x326f25(0x1d3)]][_0x326f25(0x1a1)]),_0x2ca1f8[_0x326f25(0x231)](_0x543d81[_0x44e9e1+_0x44a3b5[_0x326f25(0x16a)]][_0x326f25(0x1a1)],_0x543d81[_0x44e9e1+_0x44a3b5[_0x326f25(0xdd)]]['texture']),this[_0x326f25(0xd1)]();},DragonbonesManager[_0x179f76(0x78)]=function(){const _0x40c58e=_0x179f76;while(DragonbonesManager[_0x40c58e(0x168)][_0x40c58e(0x153)]>0x0){const _0x1b3564=DragonbonesManager[_0x40c58e(0x168)][_0x40c58e(0x16f)]();if(_0x1b3564)_0x1b3564(this);}},PluginManager[_0x179f76(0xbe)](pluginData[_0x179f76(0xe9)],'Battler_ActorChange',_0x837d9a=>{const _0x388c36=_0x179f76;if(!$gameMap)return;VisuMZ[_0x388c36(0x118)](_0x837d9a,_0x837d9a);const _0x41ae14=$gameActors[_0x388c36(0x97)](_0x837d9a[_0x388c36(0x136)]);if(!_0x41ae14)return;_0x41ae14[_0x388c36(0xb8)]={'battler':_0x837d9a[_0x388c36(0x11d)],'scaleX':_0x837d9a[_0x388c36(0x251)],'scaleY':_0x837d9a[_0x388c36(0x9c)],'offsetX':_0x837d9a[_0x388c36(0x217)],'offsetY':_0x837d9a[_0x388c36(0xc1)],'timeScale':_0x837d9a[_0x388c36(0x1cb)],'width':_0x837d9a['Width'],'height':_0x837d9a['Height'],'motion':{'walk':_0x837d9a[_0x388c36(0xab)],'wait':_0x837d9a[_0x388c36(0x99)],'chant':_0x837d9a[_0x388c36(0x1a3)],'guard':_0x837d9a['MotionGuard'],'damage':_0x837d9a['MotionDamage'],'evade':_0x837d9a['MotionEvade'],'thrust':_0x837d9a['MotionThrust'],'swing':_0x837d9a['MotionSwing'],'missile':_0x837d9a['MotionMissile'],'skill':_0x837d9a[_0x388c36(0xd4)],'spell':_0x837d9a['MotionSpell'],'item':_0x837d9a['MotionItem'],'escape':_0x837d9a[_0x388c36(0x135)],'victory':_0x837d9a['MotionVictory'],'dying':_0x837d9a[_0x388c36(0x1fb)],'abnormal':_0x837d9a[_0x388c36(0x184)],'sleep':_0x837d9a[_0x388c36(0x1f0)],'dead':_0x837d9a[_0x388c36(0x252)]}};}),SceneManager[_0x179f76(0x21c)]=function(){const _0x485370=_0x179f76;return this[_0x485370(0x26d)]&&this[_0x485370(0x26d)][_0x485370(0x96)]===Scene_Battle;},SceneManager[_0x179f76(0x22f)]=function(){const _0x1d83bf=_0x179f76;return this['_scene']&&this[_0x1d83bf(0x26d)][_0x1d83bf(0x96)]===Scene_Map;},VisuMZ[_0x179f76(0x179)]['BattleManager_processEscape']=BattleManager[_0x179f76(0xdb)],BattleManager[_0x179f76(0xdb)]=function(){const _0x15ccb8=_0x179f76;return this[_0x15ccb8(0x185)]=!![],VisuMZ[_0x15ccb8(0x179)][_0x15ccb8(0x11e)][_0x15ccb8(0x1f3)](this);},VisuMZ[_0x179f76(0x179)][_0x179f76(0x102)]=BattleManager[_0x179f76(0x208)],BattleManager[_0x179f76(0x208)]=function(){const _0x246d6b=_0x179f76;VisuMZ['DragonbonesUnion'][_0x246d6b(0x102)][_0x246d6b(0x1f3)](this),setTimeout(this['clearTryEscaping'][_0x246d6b(0x213)](this),0x1f4);},BattleManager[_0x179f76(0x8c)]=function(){const _0x2330ba=_0x179f76;this[_0x2330ba(0x185)]=![];},VisuMZ[_0x179f76(0x179)][_0x179f76(0x1d8)]=BattleManager['endBattle'],BattleManager[_0x179f76(0x19f)]=function(_0x15df98){const _0x8abf85=_0x179f76;this[_0x8abf85(0x185)]=![],VisuMZ[_0x8abf85(0x179)][_0x8abf85(0x1d8)][_0x8abf85(0x1f3)](this,_0x15df98);},BattleManager[_0x179f76(0x1f2)]=function(){const _0x2a616c=_0x179f76;return this['_escaping']||this[_0x2a616c(0xb6)];},Game_BattlerBase[_0x179f76(0x106)]['battler']=function(){const _0x30b7c4=_0x179f76;if(!SceneManager[_0x30b7c4(0x21c)]())return null;if(!SceneManager['_scene']['_spriteset'])return null;return SceneManager[_0x30b7c4(0x26d)][_0x30b7c4(0x17a)][_0x30b7c4(0xc9)](this);},Game_BattlerBase[_0x179f76(0x106)]['initDragonbonesData']=function(){const _0x1c08d1=_0x179f76,_0x1e6686=VisuMZ[_0x1c08d1(0x179)]['Settings'][_0x1c08d1(0x148)];this['_dragonbonesBattlerData']={'battler':'','scaleX':_0x1e6686[_0x1c08d1(0x251)],'scaleY':_0x1e6686[_0x1c08d1(0x9c)],'width':_0x1e6686[_0x1c08d1(0x24f)],'height':_0x1e6686[_0x1c08d1(0xd2)],'offsetX':_0x1e6686[_0x1c08d1(0x217)],'offsetY':_0x1e6686[_0x1c08d1(0xc1)],'timeScale':_0x1e6686[_0x1c08d1(0x1cb)],'motion':{'walk':_0x1e6686[_0x1c08d1(0xab)],'wait':_0x1e6686[_0x1c08d1(0x99)],'chant':_0x1e6686['MotionChant'],'guard':_0x1e6686[_0x1c08d1(0x1ae)],'damage':_0x1e6686[_0x1c08d1(0x1cd)],'evade':_0x1e6686[_0x1c08d1(0xe6)],'thrust':_0x1e6686[_0x1c08d1(0x189)],'swing':_0x1e6686[_0x1c08d1(0x25d)],'missile':_0x1e6686['MotionMissile'],'skill':_0x1e6686[_0x1c08d1(0xd4)],'spell':_0x1e6686[_0x1c08d1(0x1a9)],'item':_0x1e6686[_0x1c08d1(0x23b)],'escape':_0x1e6686[_0x1c08d1(0x135)],'victory':_0x1e6686[_0x1c08d1(0x178)],'dying':_0x1e6686[_0x1c08d1(0x1fb)],'abnormal':_0x1e6686[_0x1c08d1(0x184)],'sleep':_0x1e6686[_0x1c08d1(0x1f0)],'dead':_0x1e6686[_0x1c08d1(0x252)]}};if(_0x1e6686[_0x1c08d1(0x1ad)]&&this[_0x1c08d1(0x15b)]())this[_0x1c08d1(0xb8)]['scaleX']*=-0x1;if(_0x1e6686[_0x1c08d1(0x206)]&&this['isEnemy']())this['_dragonbonesBattlerData'][_0x1c08d1(0x26e)]*=-0x1;},Game_BattlerBase['prototype'][_0x179f76(0x1cf)]=function(){const _0x6a10ca=_0x179f76,_0x1d841e=VisuMZ[_0x6a10ca(0x179)]['Settings'][_0x6a10ca(0x148)],_0x4c381e=(this[_0x6a10ca(0x15b)]()?this[_0x6a10ca(0x97)]():this[_0x6a10ca(0x16c)]())[_0x6a10ca(0xd9)],_0x1f55a1=this[_0x6a10ca(0x12d)]();if(_0x4c381e['match'](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:BATTLER|SKIN|NAME):[ ]*(.*)>/i)){if('YxymG'!==_0x6a10ca(0x1b0))return;else _0x1f55a1[_0x6a10ca(0xcd)]=String(RegExp['$1'])['trim']();}_0x4c381e[_0x6a10ca(0x1f7)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER):[ ]*(.*)>/i)&&(_0x1f55a1[_0x6a10ca(0xcd)]=String(RegExp['$1'])[_0x6a10ca(0xc3)]());if(_0x4c381e[_0x6a10ca(0x1f7)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]SCALE:[ ](.*),[ ](.*)>/i)){if(_0x6a10ca(0x19d)===_0x6a10ca(0x19d)){_0x1f55a1[_0x6a10ca(0x26e)]=Number(RegExp['$1']),_0x1f55a1['scaleY']=Number(RegExp['$2']);if(_0x1d841e['FlipActors']&&this[_0x6a10ca(0x15b)]())_0x1f55a1[_0x6a10ca(0x26e)]*=-0x1;if(_0x1d841e[_0x6a10ca(0x206)]&&this[_0x6a10ca(0xfc)]())_0x1f55a1[_0x6a10ca(0x26e)]*=-0x1;}else{if(!_0x28c85b)return;if(_0x431515[_0x6a10ca(0x26d)][_0x6a10ca(0x96)]!==_0x28ae0d)return;_0x28757d['dragonbonesAnimation']='';}}if(_0x4c381e[_0x6a10ca(0x1f7)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:SCALEX|SCALE X):[ ](.*)>/i)){_0x1f55a1[_0x6a10ca(0x26e)]=Number(RegExp['$1']);if(_0x1d841e[_0x6a10ca(0x1ad)]&&this['isActor']())_0x1f55a1[_0x6a10ca(0x26e)]*=-0x1;if(_0x1d841e[_0x6a10ca(0x206)]&&this['isEnemy']())_0x1f55a1[_0x6a10ca(0x26e)]*=-0x1;}_0x4c381e['match'](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]SCALEY:[ ](.*)>/i)&&(_0x1f55a1[_0x6a10ca(0x1aa)]=Number(RegExp['$1']));_0x4c381e[_0x6a10ca(0x1f7)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]OFFSET:[ ](.*),[ ](.*)>/i)&&(_0x1f55a1[_0x6a10ca(0x22b)]=Number(RegExp['$1']),_0x1f55a1[_0x6a10ca(0x244)]=Number(RegExp['$2']));_0x4c381e[_0x6a10ca(0x1f7)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:OFFSETX|OFFSET X):[ ](.*)>/i)&&(_0x6a10ca(0x198)===_0x6a10ca(0x198)?_0x1f55a1[_0x6a10ca(0x22b)]=Number(RegExp['$1']):(_0x2a2ce9[_0x6a10ca(0x179)]['Sprite_Enemy_initMembers'][_0x6a10ca(0x1f3)](this),this[_0x6a10ca(0xd8)]()));_0x4c381e[_0x6a10ca(0x1f7)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:OFFSETY|OFFSET Y):[ ](.*)>/i)&&(_0x6a10ca(0xb3)!=='nrgEY'?_0x8e1f73['offsetY']=_0x569777(_0x3f5647['$1']):_0x1f55a1[_0x6a10ca(0x244)]=Number(RegExp['$1']));if(_0x4c381e[_0x6a10ca(0x1f7)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:TIMESCALE|TIME SCALE):[ ](.*)>/i)){if(_0x6a10ca(0xfe)===_0x6a10ca(0x1a6)){_0x1b04b1=_0x2939a8[_0x6a10ca(0x214)]()['trim']();_0x2d0144[_0x6a10ca(0x1ce)][_0x6a10ca(0x95)][_0x1d79a4]&&(_0x5bf3c8['animation'][_0x6a10ca(0x95)][_0x5c7e07][_0x6a10ca(0xbc)]=0x0);for(let _0x2e305b=0x1;_0x2e305b<=0x9;_0x2e305b++){const _0x11b6a9=_0x1e002a+_0x2e305b;_0x2d833f[_0x6a10ca(0x1ce)][_0x6a10ca(0x95)][_0x11b6a9]&&(_0x4b1225[_0x6a10ca(0x1ce)][_0x6a10ca(0x95)][_0x11b6a9][_0x6a10ca(0xbc)]=0x0);}}else _0x1f55a1['timeScale']=Number(RegExp['$1']);}_0x4c381e[_0x6a10ca(0x1f7)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]SIZE:[ ](.*),[ ](.*)>/i)&&(_0x1f55a1['width']=Number(RegExp['$1']),_0x1f55a1['height']=Number(RegExp['$2']));_0x4c381e[_0x6a10ca(0x1f7)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]WIDTH:[ ](.*)>/i)&&(_0x1f55a1['width']=Number(RegExp['$1']));_0x4c381e[_0x6a10ca(0x1f7)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]HEIGHT:[ ](.*)>/i)&&(_0x1f55a1[_0x6a10ca(0x1c2)]=Number(RegExp['$1']));const _0x164695=_0x4c381e[_0x6a10ca(0x1f7)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:ANI|MOTION)[ ](.*):[ ](.*)>/gi);if(_0x164695)for(const _0x4e8c27 of _0x164695){if(_0x6a10ca(0xeb)===_0x6a10ca(0x17b))_0x2d51fe[_0x6a10ca(0x222)]=!![];else{_0x4e8c27[_0x6a10ca(0x1f7)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:ANI|MOTION)[ ](.*):[ ](.*)>/i);const _0x287c0d=String(RegExp['$1'])[_0x6a10ca(0x214)]()[_0x6a10ca(0xc3)](),_0x5e52e3=String(RegExp['$2'])['trim']();_0x1f55a1[_0x6a10ca(0xd5)][_0x287c0d]=_0x5e52e3;}}if(_0x4c381e[_0x6a10ca(0x1f7)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER) (?:SETTINGS|SETTING)>\s*([\s\S]*)\s*<\/(?:DB|DRAGONBONE|DRAGONBONES BATTLER) (?:SETTINGS|SETTING)>/i)){const _0x276881=String(RegExp['$1']);if(_0x276881[_0x6a10ca(0x1f7)](/(?:BATTLER|SKIN|NAME|FILENAME):[ ]*(.*)/i)){if(_0x6a10ca(0x81)!==_0x6a10ca(0x15e))_0x1f55a1[_0x6a10ca(0xcd)]=String(RegExp['$1'])[_0x6a10ca(0xc3)]();else{if(!this['event']())return;const _0x1be924=this[_0x6a10ca(0x273)]()[_0x6a10ca(0xd9)];if(_0x1be924==='')return;this[_0x6a10ca(0xa6)](_0x1be924);}}if(_0x276881[_0x6a10ca(0x1f7)](/SCALE:[ ](.*),[ ](.*)/i)){_0x1f55a1['scaleX']=Number(RegExp['$1']),_0x1f55a1['scaleY']=Number(RegExp['$2']);if(_0x1d841e[_0x6a10ca(0x1ad)]&&this[_0x6a10ca(0x15b)]())_0x1f55a1[_0x6a10ca(0x26e)]*=-0x1;if(_0x1d841e['FlipEnemies']&&this[_0x6a10ca(0xfc)]())_0x1f55a1[_0x6a10ca(0x26e)]*=-0x1;}if(_0x276881[_0x6a10ca(0x1f7)](/(?:SCALEX|SCALE X):[ ](.*)/i)){_0x1f55a1[_0x6a10ca(0x26e)]=Number(RegExp['$1']);if(_0x1d841e[_0x6a10ca(0x1ad)]&&this[_0x6a10ca(0x15b)]())_0x1f55a1['scaleX']*=-0x1;if(_0x1d841e[_0x6a10ca(0x206)]&&this['isEnemy']())_0x1f55a1[_0x6a10ca(0x26e)]*=-0x1;}_0x276881[_0x6a10ca(0x1f7)](/(?:SCALEY|SCALE Y):[ ](.*)/i)&&(_0x1f55a1['scaleY']=Number(RegExp['$1']));_0x276881[_0x6a10ca(0x1f7)](/OFFSET:[ ](.*),[ ](.*)/i)&&(_0x6a10ca(0x276)!==_0x6a10ca(0x276)?_0x30c424[_0x6a10ca(0xbf)]=_0x59d170(_0x5e20c4['$1']):(_0x1f55a1[_0x6a10ca(0x22b)]=Number(RegExp['$1']),_0x1f55a1['offsetY']=Number(RegExp['$2'])));_0x276881[_0x6a10ca(0x1f7)](/(?:OFFSETX|OFFSET X):[ ](.*)/i)&&(_0x6a10ca(0x228)===_0x6a10ca(0x270)?_0x4db32c[_0x6a10ca(0x1ce)]['animationNames'][_0x4adf48]=_0x56b29b['animation']['animationNames'][_0x5e5074][_0x6a10ca(0x214)]():_0x1f55a1[_0x6a10ca(0x22b)]=Number(RegExp['$1']));_0x276881['match'](/(?:OFFSETY|OFFSET Y):[ ](.*)/i)&&(_0x1f55a1[_0x6a10ca(0x244)]=Number(RegExp['$1']));_0x276881[_0x6a10ca(0x1f7)](/(?:TIMESCALE|TIME SCALE):[ ](.*)/i)&&(_0x1f55a1[_0x6a10ca(0xbf)]=Number(RegExp['$1']));_0x276881['match'](/SIZE:[ ](.*),[ ](.*)/i)&&(_0x1f55a1['width']=Number(RegExp['$1']),_0x1f55a1[_0x6a10ca(0x1c2)]=Number(RegExp['$2']));_0x276881[_0x6a10ca(0x1f7)](/WIDTH:[ ](.*)/i)&&(_0x1f55a1[_0x6a10ca(0xa0)]=Number(RegExp['$1']));_0x276881[_0x6a10ca(0x1f7)](/HEIGHT:[ ](.*)/i)&&(_0x1f55a1[_0x6a10ca(0x1c2)]=Number(RegExp['$1']));const _0x490616=_0x276881[_0x6a10ca(0x1f7)](/(?:ANI|MOTION)[ ](.*):[ ](.*)/gi);if(_0x490616)for(const _0x3470fc of _0x490616){_0x3470fc['match'](/(?:ANI|MOTION)[ ](.*):[ ](.*)/i);const _0x4f107f=String(RegExp['$1'])[_0x6a10ca(0x214)]()[_0x6a10ca(0xc3)](),_0x3a43c3=String(RegExp['$2'])[_0x6a10ca(0xc3)]();_0x1f55a1[_0x6a10ca(0xd5)][_0x4f107f]=_0x3a43c3;}}},Game_BattlerBase['prototype'][_0x179f76(0x12d)]=function(){const _0x23d4c6=_0x179f76;if(this[_0x23d4c6(0xb8)]!==undefined)return this[_0x23d4c6(0xb8)];return this[_0x23d4c6(0x142)](),this[_0x23d4c6(0x1cf)](),this['_dragonbonesBattlerData'];},Game_BattlerBase[_0x179f76(0x106)]['hasDragonbonesBattler']=function(){const _0x29112c=_0x179f76;return this[_0x29112c(0xcd)]()&&this[_0x29112c(0x12d)]()[_0x29112c(0xcd)]!=='';},VisuMZ[_0x179f76(0x179)][_0x179f76(0x165)]=Game_Battler[_0x179f76(0x106)][_0x179f76(0x221)],Game_Battler[_0x179f76(0x106)][_0x179f76(0x221)]=function(_0x1a5208){const _0x24231d=_0x179f76;VisuMZ[_0x24231d(0x179)][_0x24231d(0x165)][_0x24231d(0x1f3)](this,_0x1a5208);if(this['hasDragonbonesBattler']()){if(_0x24231d(0x9a)!=='ZwnNd'){_0xadab15['scaleX']=_0x47327b(_0x4315ea['$1']);if(_0x2ef7ef[_0x24231d(0x1ad)]&&this['isActor']())_0x561598[_0x24231d(0x26e)]*=-0x1;if(_0x43f0c7[_0x24231d(0x206)]&&this[_0x24231d(0xfc)]())_0x25d077[_0x24231d(0x26e)]*=-0x1;}else this[_0x24231d(0xcd)]()[_0x24231d(0x203)](_0x1a5208);}},VisuMZ['DragonbonesUnion'][_0x179f76(0x260)]=Game_Battler[_0x179f76(0x106)][_0x179f76(0x140)],Game_Battler[_0x179f76(0x106)][_0x179f76(0x140)]=function(){const _0x413c92=_0x179f76;VisuMZ[_0x413c92(0x179)][_0x413c92(0x260)][_0x413c92(0x1f3)](this),this['hasDragonbonesBattler']()&&this['battler']()[_0x413c92(0xbb)]();},Game_Battler['prototype'][_0x179f76(0xd3)]=function(_0x5950d4){const _0x5e8485=_0x179f76;if(!this[_0x5e8485(0xe3)]())return;this[_0x5e8485(0xcd)]()[_0x5e8485(0xef)](_0x5950d4),[_0x5e8485(0xcc),_0x5e8485(0x93)][_0x5e8485(0x167)](_0x5950d4)?_0x5e8485(0x19b)==='aQDXf'?this[_0x5e8485(0x25b)]=![]:(_0x2abdb9[_0x5e8485(0x179)][_0x5e8485(0x111)]['call'](this,_0x46fb46),this[_0x5e8485(0x142)](),this[_0x5e8485(0x1cf)]()):this[_0x5e8485(0x25b)]=!![];},VisuMZ['DragonbonesUnion'][_0x179f76(0x272)]=Game_Battler[_0x179f76(0x106)][_0x179f76(0x20a)],Game_Battler[_0x179f76(0x106)][_0x179f76(0x20a)]=function(){const _0x2d3aba=_0x179f76;this[_0x2d3aba(0xe3)]()&&(this[_0x2d3aba(0x25b)]=![]),VisuMZ['DragonbonesUnion'][_0x2d3aba(0x272)][_0x2d3aba(0x1f3)](this);},Game_Battler[_0x179f76(0x106)][_0x179f76(0xb4)]=function(){const _0x1808dd=_0x179f76;if(!this[_0x1808dd(0xe3)]())return;this['requestMotion'](_0x1808dd(0x8b));},Game_Battler[_0x179f76(0x106)]['performCollapseDragonbonesUnion']=function(){const _0x404ae2=_0x179f76;if(!this[_0x404ae2(0xe3)]())return;this[_0x404ae2(0x221)](_0x404ae2(0xa9));},VisuMZ[_0x179f76(0x179)]['Game_Actor_setup']=Game_Actor[_0x179f76(0x106)][_0x179f76(0x223)],Game_Actor['prototype'][_0x179f76(0x223)]=function(_0x34f43a){const _0x2f3a83=_0x179f76;VisuMZ['DragonbonesUnion']['Game_Actor_setup'][_0x2f3a83(0x1f3)](this,_0x34f43a),this['initDragonbonesData'](),this[_0x2f3a83(0x1cf)]();},VisuMZ[_0x179f76(0x179)][_0x179f76(0x1a5)]=Game_Actor[_0x179f76(0x106)][_0x179f76(0xc6)],Game_Actor['prototype'][_0x179f76(0xc6)]=function(_0x1d17d9){const _0x2da604=_0x179f76;this['requestDragonbonesAnimation']('attack'),VisuMZ[_0x2da604(0x179)][_0x2da604(0x1a5)][_0x2da604(0x1f3)](this,_0x1d17d9);},VisuMZ[_0x179f76(0x179)][_0x179f76(0x18f)]=Game_Actor[_0x179f76(0x106)][_0x179f76(0xbd)],Game_Actor[_0x179f76(0x106)]['performAttack']=function(){const _0x119575=_0x179f76;this['requestDragonbonesAnimation'](_0x119575(0x199)),VisuMZ[_0x119575(0x179)][_0x119575(0x18f)][_0x119575(0x1f3)](this);},VisuMZ[_0x179f76(0x179)]['Game_Actor_performDamage']=Game_Actor[_0x179f76(0x106)][_0x179f76(0x16e)],Game_Actor[_0x179f76(0x106)]['performDamage']=function(){const _0x2414ff=_0x179f76;VisuMZ[_0x2414ff(0x179)][_0x2414ff(0xb0)]['call'](this),this[_0x2414ff(0xb4)]();},VisuMZ[_0x179f76(0x179)][_0x179f76(0xf1)]=Game_Actor[_0x179f76(0x106)][_0x179f76(0x1ab)],Game_Actor[_0x179f76(0x106)]['performCollapse']=function(){const _0x308deb=_0x179f76;VisuMZ[_0x308deb(0x179)][_0x308deb(0xf1)][_0x308deb(0x1f3)](this),this[_0x308deb(0x154)]();},VisuMZ[_0x179f76(0x179)][_0x179f76(0x1c0)]=Game_Enemy[_0x179f76(0x106)][_0x179f76(0x223)],Game_Enemy[_0x179f76(0x106)][_0x179f76(0x223)]=function(_0x424798,_0x520d58,_0x5ccc9b){const _0x107e88=_0x179f76;VisuMZ[_0x107e88(0x179)]['Game_Enemy_setup']['call'](this,_0x424798,_0x520d58,_0x5ccc9b),this[_0x107e88(0x142)](),this[_0x107e88(0x1cf)]();},VisuMZ['DragonbonesUnion']['Game_Enemy_transform']=Game_Enemy[_0x179f76(0x106)][_0x179f76(0x21e)],Game_Enemy['prototype'][_0x179f76(0x21e)]=function(_0x53e0bb){const _0x5e4108=_0x179f76,_0x3ecefa=this[_0x5e4108(0x22a)];VisuMZ[_0x5e4108(0x179)][_0x5e4108(0x177)][_0x5e4108(0x1f3)](this,_0x53e0bb),this['_enemyId']!==_0x3ecefa&&(this[_0x5e4108(0x142)](),this[_0x5e4108(0x1cf)]());},VisuMZ[_0x179f76(0x179)][_0x179f76(0x173)]=Game_Enemy[_0x179f76(0x106)][_0x179f76(0xc6)],Game_Enemy[_0x179f76(0x106)]['performAction']=function(_0x4b0b6b){const _0x458250=_0x179f76;VisuMZ[_0x458250(0x179)][_0x458250(0x173)][_0x458250(0x1f3)](this,_0x4b0b6b),this[_0x458250(0x242)](_0x4b0b6b);},Game_Enemy[_0x179f76(0x106)][_0x179f76(0x242)]=function(_0x7ce756){const _0x376418=_0x179f76;if(!this[_0x376418(0xe3)]())return;this[_0x376418(0xd3)](_0x376418(0x199));if(Imported[_0x376418(0x8f)])return this[_0x376418(0x261)](_0x7ce756);if(_0x7ce756[_0x376418(0x24c)]())this[_0x376418(0xd3)](_0x376418(0x199));else{if(_0x7ce756[_0x376418(0x1dc)]())this[_0x376418(0x221)]('guard');else{if(_0x7ce756['isMagicSkill']())_0x376418(0x120)===_0x376418(0x120)?this[_0x376418(0x221)](_0x376418(0x216)):this[_0x376418(0x155)]&&this[_0x376418(0x155)][_0x376418(0xe3)]()?this[_0x376418(0x7e)]():_0x371d27[_0x376418(0x179)][_0x376418(0xc7)][_0x376418(0x1f3)](this);else{if(_0x7ce756['isSkill']()){if(_0x7ce756[_0x376418(0xaf)]()['damage']['type']>0x0){if(_0x376418(0x237)==='IRPDD')this[_0x376418(0xd3)](_0x376418(0x199));else{if(!this[_0x376418(0x83)])return;const _0x4f5d7a=this['_character'][_0x376418(0xf4)]();let _0x1a9e56=_0x4f5d7a[_0x376418(0xbf)];this[_0x376418(0x183)]['isMoving']()&&(_0x1a9e56*=this[_0x376418(0x183)][_0x376418(0x20d)](),this[_0x376418(0x183)]['isDashing']()?_0x1a9e56*=_0x4f5d7a[_0x376418(0x241)]:_0x1a9e56*=_0x4f5d7a[_0x376418(0x127)]),this['_dragonbones'][_0x376418(0x1ce)]['timeScale']=_0x1a9e56;}}else _0x376418(0x197)===_0x376418(0x197)?this[_0x376418(0x221)]('skill'):this[_0x376418(0x1b9)]();}else _0x7ce756['isItem']()&&this[_0x376418(0x221)]('item');}}}},VisuMZ[_0x179f76(0x179)][_0x179f76(0x209)]=Game_Enemy[_0x179f76(0x106)][_0x179f76(0x16e)],Game_Enemy[_0x179f76(0x106)]['performDamage']=function(){const _0x1b9981=_0x179f76;VisuMZ['DragonbonesUnion'][_0x1b9981(0x209)][_0x1b9981(0x1f3)](this),this[_0x1b9981(0xb4)]();},VisuMZ[_0x179f76(0x179)]['Game_Enemy_performCollapse']=Game_Enemy[_0x179f76(0x106)][_0x179f76(0x1ab)],Game_Enemy[_0x179f76(0x106)]['performCollapse']=function(){const _0x17a287=_0x179f76;VisuMZ['DragonbonesUnion'][_0x17a287(0x1fc)][_0x17a287(0x1f3)](this),this[_0x17a287(0x154)]();},VisuMZ[_0x179f76(0x179)]['Scene_Battle_terminate']=Scene_Battle['prototype'][_0x179f76(0x218)],Scene_Battle[_0x179f76(0x106)]['terminate']=function(){const _0x4be30b=_0x179f76;this[_0x4be30b(0x17a)][_0x4be30b(0x1b9)](),VisuMZ[_0x4be30b(0x179)][_0x4be30b(0x266)]['call'](this);},Sprite_Battler[_0x179f76(0x106)][_0x179f76(0xd8)]=function(){const _0x4149aa=_0x179f76;this[_0x4149aa(0x83)]=null,this[_0x4149aa(0x22c)]='';},Sprite_Battler['prototype'][_0x179f76(0xee)]=function(){const _0x13f5a2=_0x179f76;this[_0x13f5a2(0x1b9)]();const _0x21d5e2=this[_0x13f5a2(0x155)][_0x13f5a2(0x12d)]();this[_0x13f5a2(0x22c)]=_0x21d5e2[_0x13f5a2(0xcd)],armatureName=_0x21d5e2[_0x13f5a2(0xcd)],DragonbonesManager[_0x13f5a2(0xf6)](armatureName,this[_0x13f5a2(0x271)][_0x13f5a2(0x213)](this)),this[_0x13f5a2(0x139)]=new Bitmap(_0x21d5e2[_0x13f5a2(0xa0)],_0x21d5e2['height']),this[_0x13f5a2(0x9b)]&&(this[_0x13f5a2(0x9b)][_0x13f5a2(0x139)]=new Bitmap(_0x21d5e2[_0x13f5a2(0xa0)],_0x21d5e2[_0x13f5a2(0x1c2)]));},Sprite_Battler[_0x179f76(0x106)][_0x179f76(0x1b9)]=function(){const _0x57feca=_0x179f76;this[_0x57feca(0x83)]&&(this[_0x57feca(0xac)]&&this[_0x57feca(0xac)][_0x57feca(0x176)](this['_dragonbones']),this[_0x57feca(0x176)](this[_0x57feca(0x83)]),this[_0x57feca(0x83)]['dispose'](),delete this['_dragonbones'],delete this[_0x57feca(0x22c)]);},Sprite_Battler[_0x179f76(0x106)][_0x179f76(0x271)]=function(){const _0x32cb8c=_0x179f76;if(!this['_battler'])return;const _0x1d910f=this[_0x32cb8c(0x155)][_0x32cb8c(0x12d)]();this[_0x32cb8c(0x83)]=DragonbonesManager[_0x32cb8c(0x259)](_0x1d910f[_0x32cb8c(0xcd)]),!this[_0x32cb8c(0xac)]&&(this[_0x32cb8c(0xac)]=new Sprite(),this['_dragonbonesSpriteContainer']['addChild'](this[_0x32cb8c(0x83)])),this[_0x32cb8c(0x9f)](this['_dragonbonesSpriteContainer'],0x0),this[_0x32cb8c(0x1c3)]&&('BjCGV'!=='wZfdY'?(this[_0x32cb8c(0x1c3)](),this[_0x32cb8c(0xac)][_0x32cb8c(0x1f1)](this['_dragonbones'])):(this[_0x32cb8c(0x142)](),_0xb87979['DragonbonesUnion'][_0x32cb8c(0x188)][_0x32cb8c(0x1f3)](this,_0x4baca5),this[_0x32cb8c(0x134)]())),this[_0x32cb8c(0xbb)](),this[_0x32cb8c(0x83)]['x']=_0x1d910f[_0x32cb8c(0x22b)],this['_dragonbones']['y']=_0x1d910f['offsetY'],this['_dragonbones']['scale']['x']=_0x1d910f['scaleX'],this['_dragonbones'][_0x32cb8c(0x1d7)]['y']=_0x1d910f[_0x32cb8c(0x1aa)],this[_0x32cb8c(0x155)]&&this[_0x32cb8c(0x155)][_0x32cb8c(0xad)]()&&(this[_0x32cb8c(0x12e)]=0x0),this[_0x32cb8c(0x155)]&&this[_0x32cb8c(0x155)][_0x32cb8c(0x232)]()&&(this[_0x32cb8c(0x203)](_0x32cb8c(0xa9)),this['updateDragonbones'](),this[_0x32cb8c(0x155)][_0x32cb8c(0x13a)]()<0x3&&(_0x32cb8c(0x207)==='QZFHz'?this[_0x32cb8c(0x12e)]=0x0:(_0x20e534[_0x32cb8c(0x176)](_0x459af9),_0x34f2fc[_0x32cb8c(0x257)]())));},Sprite[_0x179f76(0x106)][_0x179f76(0xc4)]=function(){const _0x1f6084=_0x179f76;if(!this[_0x1f6084(0x161)])return null;if(this['_dragonbones']){if(_0x1f6084(0x13c)==='qZJrg')return this[_0x1f6084(0x83)];else _0x203b57[_0x1f6084(0x248)](_0x5c04f1);}if(this[_0x1f6084(0x161)][_0x1f6084(0x94)]){if(_0x1f6084(0x14c)===_0x1f6084(0x14c)){if(this!==this['parent'][_0x1f6084(0x94)])return null;return this[_0x1f6084(0x161)][_0x1f6084(0x83)];}else _0x2d51e[_0x1f6084(0x225)]['length']>0x0?this[_0x1f6084(0x1c1)]():this['runQueuedCallbacks']();}return null;},VisuMZ[_0x179f76(0x179)][_0x179f76(0x196)]=Sprite[_0x179f76(0x106)]['_updateColorFilter'],Sprite[_0x179f76(0x106)][_0x179f76(0xed)]=function(){const _0x525514=_0x179f76;this[_0x525514(0xc4)]()?this[_0x525514(0x21f)]():VisuMZ[_0x525514(0x179)][_0x525514(0x196)][_0x525514(0x1f3)](this);},Sprite[_0x179f76(0x106)]['_updateDragonbonesChildrenColorFilter']=function(){const _0x443b5d=_0x179f76,_0x132e8f=this['getDragonbones']();if(!_0x132e8f)return;for(const _0x8dcd78 of _0x132e8f[_0x443b5d(0x1d5)]){if(_0x8dcd78[_0x443b5d(0x1b7)]!==0x0){if(_0x443b5d(0x92)==='YkmKu')_0x25b769['scaleX']=_0xfa3418(_0x1984be['$1']);else{_0x8dcd78[_0x443b5d(0xf5)]&&(_0x8dcd78[_0x443b5d(0x1a0)]=_0x8dcd78[_0x443b5d(0x1a0)]||[],_0x8dcd78['filters'][_0x443b5d(0xfd)](_0x8dcd78[_0x443b5d(0xf5)]));continue;}}_0x8dcd78[_0x443b5d(0x1a0)]=_0x8dcd78[_0x443b5d(0x1a0)]||[],!_0x8dcd78['_colorFilter']&&(_0x8dcd78[_0x443b5d(0xf5)]=new ColorFilter(),_0x8dcd78[_0x443b5d(0xf5)][_0x443b5d(0x1b7)]=_0x8dcd78[_0x443b5d(0x1b7)],_0x8dcd78[_0x443b5d(0x1a0)][_0x443b5d(0x1f4)](_0x8dcd78['_colorFilter'])),_0x8dcd78[_0x443b5d(0xf5)]['setHue'](this['_hue']),_0x8dcd78[_0x443b5d(0xf5)][_0x443b5d(0xe0)](this[_0x443b5d(0x166)]),_0x8dcd78[_0x443b5d(0xf5)][_0x443b5d(0x263)](this[_0x443b5d(0x14b)]);}},Sprite_Battler['prototype'][_0x179f76(0x203)]=function(_0x4f4efb){const _0x3395c6=_0x179f76;if(!this[_0x3395c6(0x83)])return;if(_0x4f4efb===this[_0x3395c6(0xec)]&&_0x4f4efb===_0x3395c6(0xcc))return;this['_lastMotionType']=_0x4f4efb;if(_0x4f4efb==='idle'){if(this[_0x3395c6(0x155)][_0x3395c6(0x1de)]())_0x4f4efb=_0x3395c6(0x1ed);else{if(this[_0x3395c6(0x155)][_0x3395c6(0x1dc)]()||this[_0x3395c6(0x155)]['isGuardWaiting']())_0x4f4efb=_0x3395c6(0x1fe);else{}}}this[_0x3395c6(0x21f)]();const _0x201cee=this[_0x3395c6(0x155)][_0x3395c6(0x12d)]();if(_0x201cee[_0x3395c6(0xd5)][_0x4f4efb]){const _0x21e406=_0x201cee[_0x3395c6(0xd5)][_0x4f4efb];this['playDragonbonesAnimation'](_0x21e406);}},Sprite_Battler[_0x179f76(0x106)][_0x179f76(0xef)]=function(_0x1058be){const _0x5595b9=_0x179f76;_0x1058be=_0x1058be['toLowerCase']();if(!this['_dragonbones'])return;['idle',_0x5595b9(0x20b)][_0x5595b9(0x167)](_0x1058be)&&this['_battler']['isGuard']()&&(_0x5595b9(0x19c)!==_0x5595b9(0x16d)?_0x1058be=_0x5595b9(0x1fe):this[_0x5595b9(0x203)](_0x5595b9(0x1fe)));const _0x4702d2=this[_0x5595b9(0x83)][_0x5595b9(0x1ce)];if(_0x4702d2[_0x5595b9(0x95)][_0x1058be]){const _0x3fbf1f=_0x4702d2[_0x5595b9(0x267)],_0x40cb37=[_0x5595b9(0x93),_0x5595b9(0xcc),_0x5595b9(0x20b),_0x5595b9(0x1c4),_0x5595b9(0x1fe),_0x5595b9(0x1ed),_0x5595b9(0x1db),'sleep',_0x5595b9(0xa9)];if(_0x3fbf1f===_0x1058be&&_0x40cb37['includes'](_0x1058be))return;_0x4702d2[_0x5595b9(0x248)](_0x1058be);}},Sprite_Battler[_0x179f76(0x106)]['updateDragonbones']=function(){const _0xb5ba10=_0x179f76;this['updateDragonbonesBattler'](),this[_0xb5ba10(0xa1)](),this[_0xb5ba10(0x10b)](),this[_0xb5ba10(0xda)]();},Sprite_Battler[_0x179f76(0x106)][_0x179f76(0x239)]=function(){const _0x2b3a14=_0x179f76;if(!this[_0x2b3a14(0x155)])return;const _0x8c688e=this[_0x2b3a14(0x155)]['dragonbonesData']();this[_0x2b3a14(0x22c)]=_0x8c688e[_0x2b3a14(0xcd)];},Sprite_Battler['prototype'][_0x179f76(0xa1)]=function(){const _0xbce36b=_0x179f76;if(!this[_0xbce36b(0x83)])return;let _0x1f26c6=this[_0xbce36b(0x155)][_0xbce36b(0x12d)]()['timeScale'];const _0x21a8ae=SceneManager[_0xbce36b(0x26d)];Imported[_0xbce36b(0x227)]&&_0x21a8ae[_0xbce36b(0x159)]&&$gameTemp['_playTestFastMode']&&(_0x1f26c6*=0x2),Imported[_0xbce36b(0x17e)]&&_0x21a8ae[_0xbce36b(0xd0)]&&(_0x1f26c6*=(ConfigManager[_0xbce36b(0x7f)]||0x0)+0x1),this[_0xbce36b(0x83)]['animation']['timeScale']=_0x1f26c6;},Sprite_Battler[_0x179f76(0x106)][_0x179f76(0x10b)]=function(){const _0x68b343=_0x179f76;if(!this[_0x68b343(0x83)])return;const _0x56daab=this[_0x68b343(0x83)][_0x68b343(0x1ce)];if(_0x56daab['isCompleted']){if('UxoGR'!==_0x68b343(0x181)){const _0x4eec2c=_0x56daab[_0x68b343(0x267)];let _0x460fe2=VisuMZ[_0x68b343(0x179)]['Settings']['Battler'][_0x68b343(0x274)];if(_0x460fe2===undefined){if('cjCLb'==='cjCLb')_0x460fe2=[_0x68b343(0xa9),_0x68b343(0x18d),_0x68b343(0xf2)];else{if(!this[_0x68b343(0x83)])return;const _0x36ed56=this[_0x68b343(0x1f8)]()[_0x68b343(0x12d)]();this['_dragonbonesAnimation']!==_0x36ed56[_0x68b343(0x1ce)]&&(this['_dragonbonesAnimation']=_0x36ed56[_0x68b343(0x1ce)],this['playDragonbonesAnimation']());}}!_0x460fe2['includes'](_0x4eec2c)&&this['playDragonbonesIdleAnimation']();}else return;}},Sprite_Battler[_0x179f76(0x106)]['updateDragonbonesSelection']=function(){return;},Sprite_Battler[_0x179f76(0x106)][_0x179f76(0xbb)]=function(){const _0x5b1edd=_0x179f76;if(!this['_dragonbones'])return;const _0x1eb1fa=this[_0x5b1edd(0x155)];if(!_0x1eb1fa)return;if(_0x1eb1fa[_0x5b1edd(0xfc)]()){const _0x175165=this[_0x5b1edd(0x83)]['animation'];if(_0x175165&&!_0x175165[_0x5b1edd(0x190)])return;}if(this[_0x5b1edd(0x15d)]()){if(_0x5b1edd(0x194)===_0x5b1edd(0x194)){const _0x1082ad=this[_0x5b1edd(0x83)][_0x5b1edd(0x1ce)];if(_0x1082ad&&!_0x1082ad[_0x5b1edd(0x190)])return;}else _0x213653[_0x5b1edd(0x179)]['Game_Battler_requestMotionRefresh'][_0x5b1edd(0x1f3)](this),this[_0x5b1edd(0xe3)]()&&this[_0x5b1edd(0xcd)]()['playDragonbonesIdleAnimation']();}_0x1eb1fa[_0x5b1edd(0x253)]()&&this[_0x5b1edd(0xef)](_0x5b1edd(0x93));const _0x3575fc=_0x1eb1fa['stateMotionIndex']();if(_0x1eb1fa['isInputting']()||_0x1eb1fa[_0x5b1edd(0x7c)]()){if('pebRT'===_0x5b1edd(0x226))for(const _0x415801 of _0x948fc2){_0x415801[_0x5b1edd(0x1f7)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:ANI|MOTION)[ ](.*):[ ](.*)>/i);const _0x31802d=_0x13a533(_0x4373f3['$1'])[_0x5b1edd(0x214)]()['trim'](),_0x591872=_0x353665(_0x1bd597['$2'])[_0x5b1edd(0xc3)]();_0x4ab5a0[_0x5b1edd(0xd5)][_0x31802d]=_0x591872;}else this['playDragonbonesMotion']('idle');}else{if(_0x3575fc===0x3)_0x5b1edd(0x24a)!==_0x5b1edd(0x24a)?(this[_0x5b1edd(0x239)](),this[_0x5b1edd(0xa1)](),this['updateDragonbonesAnimation'](),this[_0x5b1edd(0xda)]()):this['playDragonbonesMotion'](_0x5b1edd(0xa9));else{if(_0x3575fc===0x2)this['playDragonbonesMotion'](_0x5b1edd(0x175));else{if(_0x1eb1fa[_0x5b1edd(0x15b)]()&&BattleManager[_0x5b1edd(0x1f2)]()){if('gaOsY'!==_0x5b1edd(0x1e5))this[_0x5b1edd(0x203)](_0x5b1edd(0x18d));else{const _0x526d6f=this[_0x5b1edd(0x22a)];_0x2674f2[_0x5b1edd(0x179)][_0x5b1edd(0x177)]['call'](this,_0x24cad4),this[_0x5b1edd(0x22a)]!==_0x526d6f&&(this[_0x5b1edd(0x142)](),this['setupDragonbonesData']());}}else{if(_0x1eb1fa[_0x5b1edd(0x182)]())this['playDragonbonesMotion'](_0x5b1edd(0x1c4));else{if(_0x1eb1fa['isGuard']()||_0x1eb1fa['isGuardWaiting']())this['playDragonbonesMotion'](_0x5b1edd(0x1fe));else{if(_0x3575fc===0x1){if(_0x5b1edd(0x17d)!==_0x5b1edd(0x9d))this[_0x5b1edd(0x203)](_0x5b1edd(0x1db));else{if(_0x52c917!=='')_0x3941a8+='\x0a';_0xc5cbd3+=_0x1a05d4[_0x5b1edd(0x77)][0x0];}}else{if(_0x1eb1fa[_0x5b1edd(0x1de)]())'DpElf'===_0x5b1edd(0x1fd)?_0x1efc52[_0x5b1edd(0x105)]=!![]:this[_0x5b1edd(0x203)](_0x5b1edd(0x93));else _0x1eb1fa['isUndecided']()?this['playDragonbonesMotion']('idle'):this[_0x5b1edd(0x203)]('idle');}}}}}}}},Sprite_Battler[_0x179f76(0x106)][_0x179f76(0x15d)]=function(){const _0x47f3dd=_0x179f76;if(!this[_0x47f3dd(0x155)][_0x47f3dd(0x15b)]())return![];if(this[_0x47f3dd(0x155)]===BattleManager['_subject'])return!![];if(this[_0x47f3dd(0x155)]===BattleManager['actor']()&&this[_0x47f3dd(0x155)][_0x47f3dd(0x132)]())return!![];if(this[_0x47f3dd(0x155)][_0x47f3dd(0x25b)])return!![];if(BattleManager[_0x47f3dd(0x24b)]===this[_0x47f3dd(0x155)])return!![];if(BattleManager[_0x47f3dd(0x1c7)][_0x47f3dd(0x167)](this[_0x47f3dd(0x155)]))return!![];return![];},VisuMZ['DragonbonesUnion'][_0x179f76(0x1d9)]=Sprite_Enemy['prototype'][_0x179f76(0x88)],Sprite_Enemy['prototype'][_0x179f76(0x88)]=function(_0x109bde){const _0x5f1c3b=_0x179f76;this['isDragonbonesHueAffected']()?_0x5f1c3b(0x11b)==='ywXXy'?this[_0x5f1c3b(0x203)](_0x5f1c3b(0xa9)):this['setDragonbonesHue'](_0x109bde):VisuMZ[_0x5f1c3b(0x179)]['Sprite_Enemy_setHue'][_0x5f1c3b(0x1f3)](this,_0x109bde);},Sprite_Enemy[_0x179f76(0x106)]['isDragonbonesHueAffected']=function(){const _0x236b8a=_0x179f76;if(!this[_0x236b8a(0x155)])return![];if(!this['_dragonbones'])return![];const _0x2c6ab5=this[_0x236b8a(0x155)][_0x236b8a(0x16c)]()[_0x236b8a(0xd9)]||'';if(_0x2c6ab5['match'](/<DRAGONBONES HUE AFFECTED>/i)){if(_0x236b8a(0x79)===_0x236b8a(0x79))return!![];else this[_0x236b8a(0x203)](_0x236b8a(0x18d));}else{if(_0x2c6ab5[_0x236b8a(0x1f7)](/<DRAGONBONES NO HUE>/i))return![];}return VisuMZ[_0x236b8a(0x179)][_0x236b8a(0x7d)]['Battler'][_0x236b8a(0x1a2)];},Sprite_Enemy[_0x179f76(0x106)][_0x179f76(0x16b)]=function(_0x308034){const _0x3fa19c=_0x179f76;this[_0x3fa19c(0xac)][_0x3fa19c(0x1e2)]!==_0x308034&&this['_dragonbonesSpriteContainer'][_0x3fa19c(0x88)](_0x308034);},VisuMZ[_0x179f76(0x179)][_0x179f76(0x7b)]=Sprite_Actor[_0x179f76(0x106)][_0x179f76(0x1ec)],Sprite_Actor[_0x179f76(0x106)][_0x179f76(0x1ec)]=function(){const _0x1efa1d=_0x179f76;VisuMZ[_0x1efa1d(0x179)]['Sprite_Actor_initMembers']['call'](this),this['initMembersDragonbonesUnion']();},VisuMZ['DragonbonesUnion'][_0x179f76(0xb5)]=Sprite_Actor[_0x179f76(0x106)][_0x179f76(0x141)],Sprite_Actor[_0x179f76(0x106)][_0x179f76(0x141)]=function(){const _0x1276f2=_0x179f76;VisuMZ['DragonbonesUnion']['Sprite_Actor_update'][_0x1276f2(0x1f3)](this),!this['_battler']&&this[_0x1276f2(0x83)]&&this[_0x1276f2(0x1b9)]();},VisuMZ[_0x179f76(0x179)]['Sprite_Actor_updateBitmap']=Sprite_Actor['prototype'][_0x179f76(0xcf)],Sprite_Actor[_0x179f76(0x106)][_0x179f76(0xcf)]=function(){const _0x1d6798=_0x179f76,_0x108ec2=this[_0x1d6798(0x155)];_0x108ec2[_0x1d6798(0xe3)]()?(Sprite_Battler[_0x1d6798(0x106)][_0x1d6798(0xcf)][_0x1d6798(0x1f3)](this),this['_dragonbonesName']!==_0x108ec2['dragonbonesData']()[_0x1d6798(0xcd)]&&this[_0x1d6798(0xee)](),this[_0x1d6798(0x12a)]()):(VisuMZ[_0x1d6798(0x179)][_0x1d6798(0x1da)][_0x1d6798(0x1f3)](this),this[_0x1d6798(0x83)]&&this[_0x1d6798(0x1b9)]());},VisuMZ[_0x179f76(0x179)][_0x179f76(0x1d4)]=Sprite_Actor[_0x179f76(0x106)][_0x179f76(0x1a7)],Sprite_Actor[_0x179f76(0x106)][_0x179f76(0x1a7)]=function(_0x3dcf24){const _0x358917=_0x179f76;VisuMZ[_0x358917(0x179)][_0x358917(0x1d4)]['call'](this,_0x3dcf24),this[_0x358917(0x96)][_0x358917(0xe9)]==='Sprite_Actor'&&('ggxXx'===_0x358917(0x1dd)?this[_0x358917(0x203)](_0x3dcf24):_0x4d645f[_0x358917(0x1c2)]=_0x5220fc(_0x6377b5['$1']));},VisuMZ[_0x179f76(0x179)][_0x179f76(0x10f)]=Sprite_Actor[_0x179f76(0x106)][_0x179f76(0x25f)],Sprite_Actor[_0x179f76(0x106)][_0x179f76(0x25f)]=function(){const _0x557e2d=_0x179f76;this['updateShadowDragonbonesUnion'](),VisuMZ[_0x557e2d(0x179)][_0x557e2d(0x10f)]['call'](this),this[_0x557e2d(0x155)]&&this['_battler'][_0x557e2d(0xe3)]()&&(this['_shadowSprite'][_0x557e2d(0x84)]=![]);},Sprite_Actor['prototype'][_0x179f76(0x11c)]=function(){const _0x328945=_0x179f76;if(this[_0x328945(0x96)]!==Sprite_Actor)return;let _0x51749a=!![];if(this[_0x328945(0x155)]&&this[_0x328945(0x155)]['hasDragonbonesBattler']())_0x51749a=![];this[_0x328945(0x9b)][_0x328945(0x84)]=_0x51749a,this[_0x328945(0x126)]['visible']=_0x51749a,this[_0x328945(0xae)][_0x328945(0x84)]=_0x51749a;},VisuMZ['DragonbonesUnion'][_0x179f76(0xc7)]=Sprite_Actor['prototype']['updateFrame'],Sprite_Actor[_0x179f76(0x106)][_0x179f76(0x121)]=function(){const _0x12c770=_0x179f76;if(this[_0x12c770(0x155)]&&this['_battler'][_0x12c770(0xe3)]()){if('WRyuh'!==_0x12c770(0x1b3))this[_0x12c770(0x7e)]();else return this[_0x12c770(0xf4)]()[_0x12c770(0x1ce)];}else{if(_0x12c770(0x15f)!==_0x12c770(0x15f)){_0xa6ef99[_0x12c770(0x106)][_0x12c770(0x1cf)][_0x12c770(0x1f3)](this);const _0x1fe53e=this[_0x12c770(0x97)]()[_0x12c770(0xd9)];_0x5199bd[_0x12c770(0x106)][_0x12c770(0xa6)][_0x12c770(0x1f3)](this,_0x1fe53e);}else VisuMZ['DragonbonesUnion'][_0x12c770(0xc7)][_0x12c770(0x1f3)](this);}},Sprite_Actor[_0x179f76(0x106)][_0x179f76(0x7e)]=function(){const _0x3bae0f=_0x179f76,_0x125677=this['_mainSprite']['bitmap'];if(_0x125677){const _0x24ef7e=_0x125677[_0x3bae0f(0xa0)],_0x16d392=_0x125677[_0x3bae0f(0x1c2)];this[_0x3bae0f(0x9b)][_0x3bae0f(0x20f)](0x0,0x0,_0x24ef7e,_0x16d392),this['setFrame'](0x0,0x0,_0x24ef7e,_0x16d392);}},VisuMZ[_0x179f76(0x179)][_0x179f76(0x200)]=Sprite_Enemy['prototype'][_0x179f76(0x1ec)],Sprite_Enemy[_0x179f76(0x106)][_0x179f76(0x1ec)]=function(){const _0x572536=_0x179f76;VisuMZ['DragonbonesUnion'][_0x572536(0x200)]['call'](this),this[_0x572536(0xd8)]();},VisuMZ[_0x179f76(0x179)][_0x179f76(0x133)]=Sprite_Enemy[_0x179f76(0x106)][_0x179f76(0x12f)],Sprite_Enemy['prototype'][_0x179f76(0x12f)]=function(_0x19b457){const _0x5491d3=_0x179f76;this[_0x5491d3(0x1b9)](),VisuMZ[_0x5491d3(0x179)]['Sprite_Enemy_setBattler'][_0x5491d3(0x1f3)](this,_0x19b457);if(_0x19b457[_0x5491d3(0xad)]())this['opacity']=0x0;},VisuMZ[_0x179f76(0x179)][_0x179f76(0xa2)]=Sprite_Enemy['prototype'][_0x179f76(0xcf)],Sprite_Enemy[_0x179f76(0x106)][_0x179f76(0xcf)]=function(){const _0x631d8f=_0x179f76,_0x33e5c6=this[_0x631d8f(0x155)];if(_0x33e5c6[_0x631d8f(0xe3)]())Sprite_Battler[_0x631d8f(0x106)]['updateBitmap'][_0x631d8f(0x1f3)](this),this[_0x631d8f(0x22c)]!==_0x33e5c6[_0x631d8f(0x12d)]()[_0x631d8f(0xcd)]&&this[_0x631d8f(0xee)](),this[_0x631d8f(0x12a)](),this[_0x631d8f(0x88)](this[_0x631d8f(0x123)][_0x631d8f(0x1e8)]());else{if('PGrbt'!==_0x631d8f(0x25c))VisuMZ[_0x631d8f(0x179)][_0x631d8f(0xa2)][_0x631d8f(0x1f3)](this),this[_0x631d8f(0x176)](this['_dragonbones']);else return _0x45f02b[_0x631d8f(0x192)]&&_0x29e1d6[_0x631d8f(0x1bd)][_0x631d8f(0x167)]('['+_0x5ddb55+']');}},VisuMZ['DragonbonesUnion']['Sprite_Enemy_refreshMotion']=Sprite_Enemy[_0x179f76(0x106)]['refreshMotion'],Sprite_Enemy[_0x179f76(0x106)]['refreshMotion']=function(){const _0x3ed595=_0x179f76;VisuMZ[_0x3ed595(0x179)][_0x3ed595(0x19a)][_0x3ed595(0x1f3)](this);if(!VisuMZ[_0x3ed595(0x179)][_0x3ed595(0x7d)][_0x3ed595(0xf8)])return;const _0x4577ff=this['_battler'];_0x4577ff&&_0x4577ff['hasDragonbonesBattler']()&&('IFUIn'==='UvTCJ'?_0x4d1922['dashRate']=_0x35525f(_0x315012['$1']):this[_0x3ed595(0x1f9)]());},Sprite_Enemy['prototype'][_0x179f76(0x1f9)]=function(){const _0x288652=_0x179f76,_0x27e881=this[_0x288652(0x155)];if(_0x27e881){const _0x11d9c5=_0x27e881[_0x288652(0xc0)]();if(_0x27e881[_0x288652(0x132)]()||_0x27e881['isActing']())this[_0x288652(0x203)](_0x288652(0xcc));else{if(_0x11d9c5===0x3)this[_0x288652(0x203)](_0x288652(0xa9));else{if(_0x11d9c5===0x2)_0x288652(0xdf)===_0x288652(0x116)?(_0x4c3c33[_0x288652(0x179)][_0x288652(0xa4)][_0x288652(0x1f3)](this),this[_0x288652(0x1cf)]()):this[_0x288652(0x203)](_0x288652(0x175));else{if(_0x27e881[_0x288652(0x182)]())'ygTDK'===_0x288652(0x101)?(_0x3d9681[_0x288652(0x179)][_0x288652(0x150)][_0x288652(0x1f3)](this),this[_0x288652(0x142)](),this[_0x288652(0x1cf)]()):this['playDragonbonesMotion']('chant');else{if(_0x27e881[_0x288652(0x1dc)]()||_0x27e881[_0x288652(0x1b1)]())this['playDragonbonesMotion'](_0x288652(0x1fe));else{if(_0x11d9c5===0x1)this[_0x288652(0x203)](_0x288652(0x1db));else{if(_0x27e881[_0x288652(0x1de)]())this['playDragonbonesMotion']('idle');else{if(_0x27e881['isUndecided']())_0x288652(0x144)!==_0x288652(0x12c)?this['playDragonbonesMotion'](_0x288652(0x93)):_0x3e387f[_0x288652(0x1ce)]='idle';else{if(_0x288652(0xca)!==_0x288652(0x128))this[_0x288652(0x203)](_0x288652(0x93));else return this[_0x288652(0x185)]=!![],_0x5233c6[_0x288652(0x179)]['BattleManager_processEscape'][_0x288652(0x1f3)](this);}}}}}}}}}},Spriteset_Battle[_0x179f76(0x106)][_0x179f76(0x1b9)]=function(){const _0x10a013=_0x179f76;for(const _0x2e1a97 of this[_0x10a013(0x26c)]()){if(!_0x2e1a97)continue;_0x2e1a97[_0x10a013(0x1b9)]();}},PluginManager[_0x179f76(0xbe)](pluginData[_0x179f76(0xe9)],_0x179f76(0x26a),_0x1a4ff9=>{const _0x57ab21=_0x179f76;if(!$gameScreen)return;VisuMZ[_0x57ab21(0x118)](_0x1a4ff9,_0x1a4ff9),$gameScreen[_0x57ab21(0x164)](_0x1a4ff9[_0x57ab21(0xe2)]);const _0x5a36e9=$gameScreen[_0x57ab21(0x1f8)](_0x1a4ff9[_0x57ab21(0xe2)]),_0x3bbceb=_0x5a36e9[_0x57ab21(0x12d)]();_0x3bbceb[_0x57ab21(0x14d)]=_0x1a4ff9['Filename'],_0x3bbceb['animation']=_0x1a4ff9[_0x57ab21(0x117)],_0x3bbceb['offsetX']=_0x1a4ff9['OffsetX'],_0x3bbceb[_0x57ab21(0x244)]=_0x1a4ff9[_0x57ab21(0xc1)],_0x3bbceb[_0x57ab21(0x26e)]=_0x1a4ff9[_0x57ab21(0x251)],_0x3bbceb[_0x57ab21(0x1aa)]=_0x1a4ff9[_0x57ab21(0x9c)],_0x3bbceb[_0x57ab21(0xbf)]=_0x1a4ff9[_0x57ab21(0x1cb)];}),PluginManager[_0x179f76(0xbe)](pluginData[_0x179f76(0xe9)],_0x179f76(0x1c8),_0x378b62=>{const _0x1432d8=_0x179f76;if(!$gameScreen)return;VisuMZ['ConvertParams'](_0x378b62,_0x378b62),$gameScreen[_0x1432d8(0x164)](_0x378b62[_0x1432d8(0xe2)]);const _0x453b0f=$gameScreen[_0x1432d8(0x1f8)](_0x378b62[_0x1432d8(0xe2)]),_0x3fe318=_0x453b0f[_0x1432d8(0x12d)](),_0xf2bb43=_0x378b62[_0x1432d8(0x1ba)]||![];_0x3fe318[_0x1432d8(0x1ce)]=_0x378b62['Animation'],_0x3fe318['revertToIdle']=_0xf2bb43;}),PluginManager[_0x179f76(0xbe)](pluginData[_0x179f76(0xe9)],_0x179f76(0x1e9),_0x42c919=>{const _0x3725d6=_0x179f76;if(!$gameScreen)return;VisuMZ[_0x3725d6(0x118)](_0x42c919,_0x42c919),$gameScreen[_0x3725d6(0x164)](_0x42c919[_0x3725d6(0xe2)]);const _0x4b6c6f=$gameScreen['picture'](_0x42c919['PictureID']),_0x11cb05=_0x4b6c6f[_0x3725d6(0x12d)]();_0x11cb05['offsetX']=_0x42c919[_0x3725d6(0x217)],_0x11cb05['offsetY']=_0x42c919[_0x3725d6(0xc1)];}),PluginManager[_0x179f76(0xbe)](pluginData[_0x179f76(0xe9)],_0x179f76(0x191),_0x25f8c6=>{const _0x1251c0=_0x179f76;if(!$gameScreen)return;VisuMZ[_0x1251c0(0x118)](_0x25f8c6,_0x25f8c6),$gameScreen['createDefaultPicture'](_0x25f8c6[_0x1251c0(0xe2)]);const _0x4d4b5b=$gameScreen['picture'](_0x25f8c6['PictureID']),_0x5a3e94=_0x4d4b5b[_0x1251c0(0x12d)]();_0x5a3e94[_0x1251c0(0x26e)]=_0x25f8c6[_0x1251c0(0x251)],_0x5a3e94['scaleY']=_0x25f8c6[_0x1251c0(0x9c)];}),PluginManager[_0x179f76(0xbe)](pluginData[_0x179f76(0xe9)],_0x179f76(0x23a),_0x5c25e9=>{const _0x40225a=_0x179f76;if(!$gameScreen)return;VisuMZ[_0x40225a(0x118)](_0x5c25e9,_0x5c25e9),$gameScreen['createDefaultPicture'](_0x5c25e9[_0x40225a(0xe2)]);const _0x2f8eeb=$gameScreen[_0x40225a(0x1f8)](_0x5c25e9[_0x40225a(0xe2)]),_0x1e30cf=_0x2f8eeb['dragonbonesData']();_0x1e30cf[_0x40225a(0xbf)]=_0x5c25e9[_0x40225a(0x1cb)];}),Game_Screen[_0x179f76(0x106)][_0x179f76(0x164)]=function(_0x3ae683){const _0x4f3d60=_0x179f76;if(this['picture'](_0x3ae683))return;this[_0x4f3d60(0x122)](_0x3ae683,'',0x0,Math[_0x4f3d60(0x204)](Graphics[_0x4f3d60(0xa0)]/0x2),Math[_0x4f3d60(0x204)](Graphics[_0x4f3d60(0x1c2)]/0x2),0x64,0x64,0xff,0x0);},VisuMZ['DragonbonesUnion']['Game_Screen_erasePicture']=Game_Screen['prototype'][_0x179f76(0x1d1)],Game_Screen['prototype'][_0x179f76(0x1d1)]=function(_0x566ac9){const _0x48e747=_0x179f76;this['erasePictureDragonbonesUnion'](_0x566ac9),VisuMZ['DragonbonesUnion'][_0x48e747(0x1a4)][_0x48e747(0x1f3)](this,_0x566ac9);},Game_Screen[_0x179f76(0x106)][_0x179f76(0x26f)]=function(_0x6ae816){const _0x193f81=_0x179f76,_0x382b6e=this['realPictureId'](_0x6ae816),_0x1c4a03=this[_0x193f81(0xe4)][_0x382b6e];if(!_0x1c4a03)return;_0x1c4a03['initDragonbonesData'](),_0x1c4a03[_0x193f81(0x1b9)]();},VisuMZ['DragonbonesUnion'][_0x179f76(0x254)]=Game_Picture[_0x179f76(0x106)][_0x179f76(0x1ea)],Game_Picture['prototype'][_0x179f76(0x1ea)]=function(){const _0x1ebdff=_0x179f76;VisuMZ[_0x1ebdff(0x179)][_0x1ebdff(0x254)][_0x1ebdff(0x1f3)](this),this[_0x1ebdff(0x142)]();},Game_Picture[_0x179f76(0x106)]['initDragonbonesData']=function(){const _0x1521ee=_0x179f76;this[_0x1521ee(0x1be)]={'filename':'','animation':DragonbonesManager[_0x1521ee(0xe1)],'scaleX':0x1,'scaleY':0x1,'offsetX':0x0,'offsetY':0x0,'timeScale':0x1,'revertToIdle':![]};},Game_Picture[_0x179f76(0x106)][_0x179f76(0x12d)]=function(){const _0x3f29e8=_0x179f76;if(this[_0x3f29e8(0x1be)]!==undefined)return this[_0x3f29e8(0x1be)];return this['initDragonbonesData'](),this[_0x3f29e8(0x1be)];},Game_Picture[_0x179f76(0x106)][_0x179f76(0x138)]=function(){const _0x2b16b1=_0x179f76;return this[_0x2b16b1(0x12d)]()[_0x2b16b1(0x14d)]!=='';},Game_Picture[_0x179f76(0x106)][_0x179f76(0x1b9)]=function(){const _0x48509a=_0x179f76;if(!SceneManager[_0x48509a(0x26d)])return;if(!SceneManager['_scene'][_0x48509a(0x17a)])return;const _0x180dff=SceneManager[_0x48509a(0x26d)][_0x48509a(0x17a)][_0x48509a(0x10e)](this);if(_0x180dff)_0x180dff['disposeDragonbones']();},Spriteset_Base['prototype'][_0x179f76(0x10e)]=function(_0x2a570d){const _0x4731cc=_0x179f76;return this[_0x4731cc(0x11a)][_0x4731cc(0x1d5)][_0x4731cc(0x147)](_0x4abd39=>_0x4abd39&&_0x4abd39[_0x4731cc(0x1f8)]()===_0x2a570d);},VisuMZ[_0x179f76(0x179)][_0x179f76(0x1f6)]=Sprite_Picture[_0x179f76(0x106)][_0x179f76(0x1ea)],Sprite_Picture[_0x179f76(0x106)]['initialize']=function(_0x1b5eb1){const _0x2f0397=_0x179f76;this[_0x2f0397(0x142)](),VisuMZ['DragonbonesUnion'][_0x2f0397(0x1f6)]['call'](this,_0x1b5eb1);},Sprite_Picture[_0x179f76(0x106)][_0x179f76(0x142)]=function(_0x3b2e43){const _0x362151=_0x179f76;this['_dragonbones']=null,this[_0x362151(0x202)]='',this[_0x362151(0x255)]='';},VisuMZ[_0x179f76(0x179)][_0x179f76(0x8e)]=Sprite_Picture[_0x179f76(0x106)]['update'],Sprite_Picture[_0x179f76(0x106)][_0x179f76(0x141)]=function(){const _0x170223=_0x179f76;VisuMZ['DragonbonesUnion']['Sprite_Picture_update'][_0x170223(0x1f3)](this),this[_0x170223(0x12a)]();},Sprite_Picture[_0x179f76(0x106)]['disposeDragonbones']=function(){const _0x4ebc01=_0x179f76;this[_0x4ebc01(0x83)]&&(this[_0x4ebc01(0x176)](this['_dragonbones']),this['_dragonbones'][_0x4ebc01(0x257)](),this[_0x4ebc01(0x83)]=null,this['_dragonbonesFilename']='',this[_0x4ebc01(0x255)]='');},Sprite_Picture['prototype'][_0x179f76(0x12a)]=function(){const _0x532209=_0x179f76,_0x412c1b=this[_0x532209(0x1f8)]();if(!_0x412c1b)return this[_0x532209(0x1b9)]();if(!_0x412c1b[_0x532209(0x138)]())return this['disposeDragonbones']();this[_0x532209(0x1d0)]();if(!this[_0x532209(0x83)])return;this[_0x532209(0x10b)](),this[_0x532209(0x215)](),this[_0x532209(0xa1)]();},Sprite_Picture['prototype'][_0x179f76(0x1d0)]=function(){const _0x54469f=_0x179f76,_0x1731fe=this[_0x54469f(0x1f8)]()['dragonbonesData']();if(this[_0x54469f(0x202)]===_0x1731fe[_0x54469f(0x14d)])return;this[_0x54469f(0x1b9)](),this[_0x54469f(0x202)]=_0x1731fe[_0x54469f(0x14d)],DragonbonesManager['loadArmature'](_0x1731fe[_0x54469f(0x14d)],this['onLoadDragonbones'][_0x54469f(0x213)](this));},Sprite_Picture[_0x179f76(0x106)]['onLoadDragonbones']=function(){const _0x565f8b=_0x179f76,_0x34e2fa=this[_0x565f8b(0x1f8)]()['dragonbonesData']();this[_0x565f8b(0x83)]=DragonbonesManager['createArmature'](_0x34e2fa[_0x565f8b(0x14d)]),this[_0x565f8b(0x9f)](this[_0x565f8b(0x83)],0x0),this[_0x565f8b(0x10b)]();},Sprite_Picture['prototype']['updateDragonbonesAnimation']=function(){const _0x373dd6=_0x179f76;if(!this['_dragonbones'])return;const _0x5cb097=this[_0x373dd6(0x1f8)]()[_0x373dd6(0x12d)]();this[_0x373dd6(0x255)]!==_0x5cb097[_0x373dd6(0x1ce)]&&(this['_dragonbonesAnimation']=_0x5cb097[_0x373dd6(0x1ce)],this[_0x373dd6(0xef)]());},Sprite_Picture[_0x179f76(0x106)]['playDragonbonesAnimation']=function(){const _0x2d1ab7=_0x179f76;if(!this['_dragonbones'])return;const _0x926177=this[_0x2d1ab7(0x83)][_0x2d1ab7(0x1ce)],_0x3f5dc=this[_0x2d1ab7(0x255)][_0x2d1ab7(0x214)]()[_0x2d1ab7(0xc3)]();_0x926177[_0x2d1ab7(0x95)][_0x3f5dc]&&_0x926177[_0x2d1ab7(0x248)](_0x3f5dc);},Sprite_Picture[_0x179f76(0x106)][_0x179f76(0x215)]=function(){const _0x492fac=_0x179f76;if(!this['_dragonbones'])return;const _0x55f99b=this[_0x492fac(0x1f8)]()[_0x492fac(0x12d)]();this[_0x492fac(0x83)]['x']=_0x55f99b[_0x492fac(0x22b)],this[_0x492fac(0x83)]['y']=_0x55f99b['offsetY'],this[_0x492fac(0x83)][_0x492fac(0x1d7)]['x']=_0x55f99b[_0x492fac(0x26e)],this[_0x492fac(0x83)]['scale']['y']=_0x55f99b[_0x492fac(0x1aa)],this[_0x492fac(0x83)][_0x492fac(0x1ce)][_0x492fac(0x18e)]===![]&&_0x55f99b[_0x492fac(0xb7)]&&(_0x492fac(0x23c)===_0x492fac(0x23c)?_0x55f99b[_0x492fac(0x1ce)]=_0x492fac(0x93):_0x900e8[_0x492fac(0xbf)]=_0x332f59(_0x4efcc5['$1']));},Sprite_Picture[_0x179f76(0x106)][_0x179f76(0xa1)]=function(){const _0x23011e=_0x179f76;if(!this['_dragonbones'])return;const _0x15afcc=this[_0x23011e(0x1f8)]()[_0x23011e(0x12d)]();let _0x32ea00=_0x15afcc[_0x23011e(0xbf)];this[_0x23011e(0x83)]['animation'][_0x23011e(0xbf)]=_0x32ea00;},PluginManager[_0x179f76(0xbe)](pluginData[_0x179f76(0xe9)],_0x179f76(0x13b),_0x523589=>{const _0x3b8ce4=_0x179f76;if(!$gameMap)return;VisuMZ['ConvertParams'](_0x523589,_0x523589);const _0x5982f5=$gameActors['actor'](_0x523589['ActorID']);if(!_0x5982f5)return;const _0x11fbb8=JsonEx[_0x3b8ce4(0x113)](_0x5982f5[_0x3b8ce4(0x14e)]);_0x5982f5[_0x3b8ce4(0x14e)]={'filename':_0x523589['Filename'],'animation':'','scaleX':_0x523589['ScaleX'],'scaleY':_0x523589['ScaleY'],'offsetX':_0x523589['OffsetX'],'offsetY':_0x523589[_0x3b8ce4(0xc1)],'timeScale':_0x523589[_0x3b8ce4(0x1cb)],'walkRate':_0x523589[_0x3b8ce4(0xf7)]??0x1,'dashRate':_0x523589[_0x3b8ce4(0x8d)]??0x1,'width':_0x523589[_0x3b8ce4(0x24f)],'height':_0x523589['Height'],'flipLeft':_0x523589[_0x3b8ce4(0x23e)],'flipRight':_0x523589[_0x3b8ce4(0x145)],'animationNames':{'idle':_0x523589['Idle'],'walk':_0x523589['Walk'],'dash':_0x523589[_0x3b8ce4(0xfa)],'jump':_0x523589[_0x3b8ce4(0x146)],'ladderidle':_0x523589['LadderIdle'],'ladderclimb':_0x523589[_0x3b8ce4(0x108)],'ropeidle':_0x523589[_0x3b8ce4(0x163)],'ropeclimb':_0x523589[_0x3b8ce4(0x1b6)]}},$gamePlayer[_0x3b8ce4(0x1c5)]();}),PluginManager[_0x179f76(0xbe)](pluginData['name'],'MapSprite_ActorAnimationPlay',_0x318cf0=>{const _0x442c9a=_0x179f76;if(!$gameMap)return;if(SceneManager[_0x442c9a(0x26d)][_0x442c9a(0x96)]!==Scene_Map)return;VisuMZ['ConvertParams'](_0x318cf0,_0x318cf0);const _0x32f3bf=$gameActors[_0x442c9a(0x97)](_0x318cf0['ActorID']),_0xf72cd2=_0x32f3bf[_0x442c9a(0x18c)](),_0xd9ffd5=_0xf72cd2===0x0?$gamePlayer:$gamePlayer[_0x442c9a(0x23d)]()[_0x442c9a(0xaa)](_0xf72cd2-0x1);if(!_0xd9ffd5)return;_0xd9ffd5['dragonbonesAnimation']=_0x318cf0['Animation'];}),PluginManager['registerCommand'](pluginData[_0x179f76(0xe9)],_0x179f76(0x1b5),_0x511d50=>{const _0x5900a3=_0x179f76;if(!$gameMap)return;if(SceneManager[_0x5900a3(0x26d)][_0x5900a3(0x96)]!==Scene_Map)return;VisuMZ['ConvertParams'](_0x511d50,_0x511d50);const _0x16b94f=$gameActors['actor'](_0x511d50[_0x5900a3(0x136)]),_0x4e6e1d=_0x16b94f[_0x5900a3(0x18c)](),_0x45c77f=_0x4e6e1d===0x0?$gamePlayer:$gamePlayer[_0x5900a3(0x23d)]()[_0x5900a3(0xaa)](_0x4e6e1d-0x1);if(!_0x45c77f)return;_0x45c77f[_0x5900a3(0x137)]='';}),PluginManager[_0x179f76(0xbe)](pluginData[_0x179f76(0xe9)],'MapSprite_EventAnimationPlay',_0x2c87cb=>{const _0x234706=_0x179f76;if(!$gameMap)return;if(SceneManager[_0x234706(0x26d)][_0x234706(0x96)]!==Scene_Map)return;VisuMZ[_0x234706(0x118)](_0x2c87cb,_0x2c87cb);const _0x41bc73=$gameTemp[_0x234706(0x170)](),_0xd5a521=$gameMap[_0x234706(0x273)](_0x2c87cb[_0x234706(0x1df)]||_0x41bc73[_0x234706(0x1bf)]());if(!_0xd5a521)return;_0xd5a521[_0x234706(0x137)]=_0x2c87cb[_0x234706(0x117)];}),PluginManager[_0x179f76(0xbe)](pluginData[_0x179f76(0xe9)],_0x179f76(0x1af),_0x4e0bf7=>{const _0x37497a=_0x179f76;if(!$gameMap)return;if(SceneManager[_0x37497a(0x26d)]['constructor']!==Scene_Map)return;VisuMZ[_0x37497a(0x118)](_0x4e0bf7,_0x4e0bf7);const _0x33318f=$gameTemp['getLastPluginCommandInterpreter'](),_0x303001=$gameMap[_0x37497a(0x273)](_0x4e0bf7['EventID']||_0x33318f['eventId']());if(!_0x303001)return;_0x303001[_0x37497a(0x137)]='';}),PluginManager[_0x179f76(0xbe)](pluginData['name'],_0x179f76(0xf9),_0x4a364c=>{const _0x51e4c4=_0x179f76;if(!$gameMap)return;if(SceneManager[_0x51e4c4(0x26d)][_0x51e4c4(0x96)]!==Scene_Map)return;VisuMZ[_0x51e4c4(0x118)](_0x4a364c,_0x4a364c);const _0x531639=$gamePlayer[_0x51e4c4(0x23d)]()[_0x51e4c4(0xaa)](_0x4a364c[_0x51e4c4(0x186)]);if(!_0x531639)return;_0x531639[_0x51e4c4(0x137)]=_0x4a364c[_0x51e4c4(0x117)];}),PluginManager[_0x179f76(0xbe)](pluginData[_0x179f76(0xe9)],_0x179f76(0x11f),_0x44c829=>{const _0x266c91=_0x179f76;if(!$gameMap)return;if(SceneManager[_0x266c91(0x26d)][_0x266c91(0x96)]!==Scene_Map)return;VisuMZ[_0x266c91(0x118)](_0x44c829,_0x44c829);const _0x179cd8=$gamePlayer[_0x266c91(0x23d)]()[_0x266c91(0xaa)](_0x44c829['FollowerIndex']);if(!_0x179cd8)return;_0x179cd8[_0x266c91(0x137)]='';}),PluginManager['registerCommand'](pluginData['name'],'MapSprite_PlayerAnimationPlay',_0x5aa32f=>{const _0x246fbb=_0x179f76;if(!$gameMap)return;if(SceneManager[_0x246fbb(0x26d)][_0x246fbb(0x96)]!==Scene_Map)return;VisuMZ[_0x246fbb(0x118)](_0x5aa32f,_0x5aa32f),$gamePlayer[_0x246fbb(0x137)]=_0x5aa32f[_0x246fbb(0x117)];}),PluginManager[_0x179f76(0xbe)](pluginData[_0x179f76(0xe9)],_0x179f76(0x1c9),_0x52743a=>{const _0x4d3d9a=_0x179f76;if(!$gameMap)return;if(SceneManager[_0x4d3d9a(0x26d)][_0x4d3d9a(0x96)]!==Scene_Map)return;$gamePlayer['dragonbonesAnimation']='';}),Game_Temp[_0x179f76(0x106)][_0x179f76(0x1ac)]=function(_0x527145){const _0x4e61a2=_0x179f76;this[_0x4e61a2(0x233)]=_0x527145;},Game_Temp['prototype']['getLastPluginCommandInterpreter']=function(){const _0x5ea5e9=_0x179f76;return this[_0x5ea5e9(0x233)];},Object[_0x179f76(0xea)](Game_CharacterBase[_0x179f76(0x106)],'dragonbonesAnimation',{'get':function(){const _0x2c6a20=_0x179f76;return this[_0x2c6a20(0xf4)]()['animation'];},'set':function(_0x5aaf30){const _0x469f18=_0x179f76;this[_0x469f18(0xf4)]()[_0x469f18(0x1ce)]=_0x5aaf30;},'configurable':!![]}),Game_CharacterBase[_0x179f76(0x106)][_0x179f76(0x142)]=function(){const _0x1474d6=_0x179f76,_0x3a071e=VisuMZ['DragonbonesUnion'][_0x1474d6(0x7d)]['MapSprite'];this[_0x1474d6(0x14e)]={'filename':'','animation':'','scaleX':_0x3a071e['ScaleX'],'scaleY':_0x3a071e[_0x1474d6(0x9c)],'offsetX':_0x3a071e[_0x1474d6(0x217)],'offsetY':_0x3a071e[_0x1474d6(0xc1)],'timeScale':_0x3a071e[_0x1474d6(0x1cb)],'walkRate':0x1,'dashRate':0x1,'width':_0x3a071e[_0x1474d6(0x24f)],'height':_0x3a071e[_0x1474d6(0xd2)],'flipLeft':_0x3a071e[_0x1474d6(0x23e)],'flipRight':_0x3a071e[_0x1474d6(0x145)],'animationNames':{'idle':_0x3a071e[_0x1474d6(0x75)],'walk':_0x3a071e[_0x1474d6(0x1e6)],'dash':_0x3a071e[_0x1474d6(0xfa)],'jump':_0x3a071e[_0x1474d6(0x146)],'ladderidle':_0x3a071e[_0x1474d6(0x15a)],'ladderclimb':_0x3a071e[_0x1474d6(0x108)],'ropeidle':_0x3a071e[_0x1474d6(0x163)],'ropeclimb':_0x3a071e[_0x1474d6(0x1b6)]}},this[_0x1474d6(0x234)]===undefined&&(this[_0x1474d6(0x234)]=0x0);},Game_CharacterBase[_0x179f76(0x106)][_0x179f76(0x1cf)]=function(){},Game_CharacterBase[_0x179f76(0x106)][_0x179f76(0xa6)]=function(_0x13a16a){const _0x1ab202=_0x179f76,_0xf67e=this[_0x1ab202(0xf4)]();_0x13a16a[_0x1ab202(0x1f7)](/<DRAGONBONES SPRITE:[ ]*(.*)>/i)&&(_0xf67e[_0x1ab202(0x14d)]=String(RegExp['$1'])['trim']());_0x13a16a[_0x1ab202(0x1f7)](/<DRAGONBONES SPRITE (?:SKIN|NAME|FILENAME):[ ]*(.*)>/i)&&(_0x1ab202(0x13f)!==_0x1ab202(0x13f)?_0x176fa6[_0x1ab202(0x179)][_0x1ab202(0x196)][_0x1ab202(0x1f3)](this):_0xf67e[_0x1ab202(0x14d)]=String(RegExp['$1'])[_0x1ab202(0xc3)]());_0x13a16a[_0x1ab202(0x1f7)](/<DRAGONBONES SPRITE[ ]SCALE:[ ](.*),[ ](.*)>/i)&&(_0xf67e[_0x1ab202(0x26e)]=Number(RegExp['$1']),_0xf67e[_0x1ab202(0x1aa)]=Number(RegExp['$2']));_0x13a16a[_0x1ab202(0x1f7)](/<DRAGONBONES SPRITE[ ](?:SCALEX|SCALE X):[ ](.*)>/i)&&(_0xf67e['scaleX']=Number(RegExp['$1']));_0x13a16a[_0x1ab202(0x1f7)](/<DRAGONBONES SPRITE[ ](?:SCALEY|SCALE Y):[ ](.*)>/i)&&('WYNRg'===_0x1ab202(0x131)?_0xf67e[_0x1ab202(0x1aa)]=Number(RegExp['$1']):(_0x5986d2[_0x1ab202(0x179)]['Game_CharacterBase_update'][_0x1ab202(0x1f3)](this),this[_0x1ab202(0x1d2)]()));if(_0x13a16a[_0x1ab202(0x1f7)](/<DRAGONBONES SPRITE[ ]OFFSET:[ ](.*),[ ](.*)>/i)){if(_0x1ab202(0x262)===_0x1ab202(0x1fa)){if(!_0x105cdd)return;if(_0x3ec819[_0x1ab202(0x26d)][_0x1ab202(0x96)]!==_0x54708a)return;_0x1f7773['ConvertParams'](_0x1f942e,_0x150b69);const _0x2ffe6c=_0x2a82eb[_0x1ab202(0x97)](_0x2a5a22[_0x1ab202(0x136)]),_0x51144d=_0x2ffe6c[_0x1ab202(0x18c)](),_0x4a0604=_0x51144d===0x0?_0x21def2:_0x386b1c[_0x1ab202(0x23d)]()['follower'](_0x51144d-0x1);if(!_0x4a0604)return;_0x4a0604[_0x1ab202(0x137)]='';}else _0xf67e[_0x1ab202(0x22b)]=Number(RegExp['$1']),_0xf67e[_0x1ab202(0x244)]=Number(RegExp['$2']);}_0x13a16a['match'](/<DRAGONBONES SPRITE[ ](?:OFFSETX|OFFSET X):[ ](.*)>/i)&&(_0xf67e[_0x1ab202(0x22b)]=Number(RegExp['$1']));if(_0x13a16a[_0x1ab202(0x1f7)](/<DRAGONBONES SPRITE[ ](?:OFFSETY|OFFSET Y):[ ](.*)>/i)){if(_0x1ab202(0x1e4)!==_0x1ab202(0x1e1))_0xf67e[_0x1ab202(0x244)]=Number(RegExp['$1']);else{if(_0x3ed86b&&_0x243a6c['match'](/(?:IDLE|WALK|DASH)(\d+)/i))this[_0x1ab202(0x183)]['dragonbonesAnimation']='';else{if(_0x837fad[_0x1ab202(0x246)][_0x1ab202(0xbc)]===0x1)return;}this[_0x1ab202(0x255)]='',_0x13df6e[_0x1ab202(0x267)]='';}}if(_0x13a16a[_0x1ab202(0x1f7)](/<DRAGONBONES SPRITE[ ]SIZE:[ ](.*),[ ](.*)>/i)){if('nxVcO'!=='iMAKZ')_0xf67e[_0x1ab202(0xa0)]=Number(RegExp['$1']),_0xf67e[_0x1ab202(0x1c2)]=Number(RegExp['$2']);else{const _0x251681=_0x19da5d[_0x1ab202(0xd5)][_0x1ee32e];this[_0x1ab202(0xef)](_0x251681);}}_0x13a16a[_0x1ab202(0x1f7)](/<DRAGONBONES SPRITE[ ]WIDTH:[ ](.*)>/i)&&(_0xf67e['width']=Number(RegExp['$1']));_0x13a16a[_0x1ab202(0x1f7)](/<DRAGONBONES SPRITE[ ]HEIGHT:[ ](.*)>/i)&&(_0xf67e[_0x1ab202(0x1c2)]=Number(RegExp['$1']));_0x13a16a[_0x1ab202(0x1f7)](/<DRAGONBONES SPRITE[ ](?:TIMESCALE|TIME SCALE):[ ](.*)>/i)&&(_0xf67e[_0x1ab202(0xbf)]=Number(RegExp['$1']));_0x13a16a[_0x1ab202(0x1f7)](/<DRAGONBONES SPRITE[ ](?:WALK RATE|WALKING RATE):[ ](.*)>/i)&&(_0xf67e[_0x1ab202(0x127)]=Number(RegExp['$1']));_0x13a16a[_0x1ab202(0x1f7)](/<DRAGONBONES SPRITE[ ](?:DASH RATE|DASHING RATE):[ ](.*)>/i)&&(_0xf67e[_0x1ab202(0x241)]=Number(RegExp['$1']));_0x13a16a[_0x1ab202(0x1f7)](/<DRAGONBONES SPRITE FLIP LEFT>/i)&&(_0xf67e['flipLeft']=!![]);_0x13a16a['match'](/<DRAGONBONES SPRITE NO FLIP LEFT>/i)&&(_0xf67e[_0x1ab202(0x222)]=![]);_0x13a16a[_0x1ab202(0x1f7)](/<DRAGONBONES SPRITE FLIP RIGHT>/i)&&(_0xf67e[_0x1ab202(0x105)]=!![]);_0x13a16a['match'](/<DRAGONBONES SPRITE NO FLIP RIGHT>/i)&&(_0xf67e[_0x1ab202(0x105)]=![]);const _0x19aaa5=_0x13a16a[_0x1ab202(0x1f7)](/<DRAGONBONES SPRITE MOTION (.*):[ ](.*)>/gi);if(_0x19aaa5)for(const _0x4ccb0f of _0x19aaa5){_0x4ccb0f['match'](/<DRAGONBONES SPRITE MOTION (.*):[ ](.*)>/i);const _0x49bf7a=String(RegExp['$1'])[_0x1ab202(0x214)]()[_0x1ab202(0xc3)](),_0x4eb8fd=String(RegExp['$2'])[_0x1ab202(0x214)]()['trim']();_0xf67e[_0x1ab202(0x23f)][_0x49bf7a]=_0x4eb8fd;}if(_0x13a16a['match'](/<DRAGONBONES SPRITE (?:SETTINGS|SETTING)>\s*([\s\S]*)\s*<\/DRAGONBONES SPRITE (?:SETTINGS|SETTING)>/i)){const _0x10e1dc=String(RegExp['$1']);_0x10e1dc['match'](/(?:SKIN|NAME|FILENAME):[ ]*(.*)/i)&&(_0x1ab202(0x82)==='DqaCQ'?_0xf67e[_0x1ab202(0x14d)]=String(RegExp['$1'])['trim']():this[_0x1ab202(0x142)]());_0x10e1dc['match'](/SCALE:[ ](.*),[ ](.*)/i)&&(_0xf67e[_0x1ab202(0x26e)]=Number(RegExp['$1']),_0xf67e[_0x1ab202(0x1aa)]=Number(RegExp['$2']));_0x10e1dc[_0x1ab202(0x1f7)](/(?:SCALEX|SCALE X):[ ](.*)/i)&&(_0xf67e['scaleX']=Number(RegExp['$1']));_0x10e1dc['match'](/(?:SCALEY|SCALE Y):[ ](.*)/i)&&(_0xf67e[_0x1ab202(0x1aa)]=Number(RegExp['$1']));_0x10e1dc[_0x1ab202(0x1f7)](/OFFSET:[ ](.*),[ ](.*)/i)&&(_0xf67e['offsetX']=Number(RegExp['$1']),_0xf67e['offsetY']=Number(RegExp['$2']));if(_0x10e1dc[_0x1ab202(0x1f7)](/(?:OFFSETX|OFFSET X):[ ](.*)/i)){if('QjJwG'===_0x1ab202(0x26b))_0xf67e[_0x1ab202(0x22b)]=Number(RegExp['$1']);else return![];}_0x10e1dc[_0x1ab202(0x1f7)](/(?:OFFSETY|OFFSET Y):[ ](.*)/i)&&(_0x1ab202(0x129)==='qHsAq'?(_0x398742['width']=_0x205997(_0x18d41a['$1']),_0x509f94[_0x1ab202(0x1c2)]=_0x60ee76(_0x30bb8d['$2'])):_0xf67e['offsetY']=Number(RegExp['$1']));_0x10e1dc['match'](/(?:TIMESCALE|TIME SCALE):[ ](.*)/i)&&(_0xf67e[_0x1ab202(0xbf)]=Number(RegExp['$1']));_0x10e1dc[_0x1ab202(0x1f7)](/(?:WALK RATE|WALKING RATE):[ ](.*)/i)&&('GmLHb'!==_0x1ab202(0x240)?(_0x363989[_0x1ab202(0x22b)]=_0x33cd59(_0x61cedc['$1']),_0x512bf8['offsetY']=_0xe91e84(_0x1768e1['$2'])):_0xf67e[_0x1ab202(0x127)]=Number(RegExp['$1']));_0x10e1dc[_0x1ab202(0x1f7)](/(?:DASH RATE|DASHING RATE):[ ](.*)/i)&&(_0x1ab202(0x269)===_0x1ab202(0x269)?_0xf67e[_0x1ab202(0x241)]=Number(RegExp['$1']):this['_lastPluginCommandInterpreter']=_0x497054);_0x10e1dc[_0x1ab202(0x1f7)](/SIZE:[ ](.*),[ ](.*)/i)&&(_0xf67e[_0x1ab202(0xa0)]=Number(RegExp['$1']),_0xf67e['height']=Number(RegExp['$2']));_0x10e1dc[_0x1ab202(0x1f7)](/WIDTH:[ ](.*)/i)&&(_0x1ab202(0x211)!==_0x1ab202(0x85)?_0xf67e[_0x1ab202(0xa0)]=Number(RegExp['$1']):this['loadNextArmature']());_0x10e1dc[_0x1ab202(0x1f7)](/HEIGHT:[ ](.*)/i)&&(_0xf67e[_0x1ab202(0x1c2)]=Number(RegExp['$1']));_0x10e1dc[_0x1ab202(0x1f7)](/NO FLIP LEFT/i)&&(_0xf67e[_0x1ab202(0x222)]=![]);_0x10e1dc['match'](/FLIP LEFT/i)&&(_0x1ab202(0xde)!=='vhvjw'?_0xf67e[_0x1ab202(0x222)]=!![]:_0x2d0b96[_0x1ab202(0x14d)]=_0x1ad5d5(_0x3f23ae['$1'])[_0x1ab202(0xc3)]());_0x10e1dc[_0x1ab202(0x1f7)](/NO FLIP RIGHT/i)&&(_0xf67e[_0x1ab202(0x105)]=![]);if(_0x10e1dc[_0x1ab202(0x1f7)](/FLIP RIGHT/i)){if('bxGuc'===_0x1ab202(0x91)){if(!_0x55c433)return;if(_0x1c3af5['_scene'][_0x1ab202(0x96)]!==_0x251c7e)return;_0x4ee3ef[_0x1ab202(0x118)](_0x57b50d,_0x4ba918);const _0x4a134c=_0x5ab272[_0x1ab202(0x23d)]()[_0x1ab202(0xaa)](_0x33d2f9['FollowerIndex']);if(!_0x4a134c)return;_0x4a134c[_0x1ab202(0x137)]=_0x23b88c[_0x1ab202(0x117)];}else _0xf67e['flipRight']=!![];}const _0x216c61=_0x13a16a['match'](/(?:ANI|MOTION) (.*):[ ](.*)/gi);if(_0x216c61)for(const _0x6c76c of _0x216c61){if(_0x1ab202(0xce)===_0x1ab202(0x1a8))this['_dragonbones']&&(this[_0x1ab202(0xac)]&&this[_0x1ab202(0xac)][_0x1ab202(0x176)](this[_0x1ab202(0x83)]),this[_0x1ab202(0x176)](this[_0x1ab202(0x83)]),this[_0x1ab202(0x83)][_0x1ab202(0x257)](),delete this['_dragonbones'],delete this[_0x1ab202(0x22c)]);else{_0x6c76c['match'](/(?:ANI|MOTION) (.*):[ ](.*)/i);const _0x4986ed=String(RegExp['$1'])[_0x1ab202(0x214)]()['trim'](),_0x285e6e=String(RegExp['$2'])[_0x1ab202(0x214)]()[_0x1ab202(0xc3)]();_0xf67e[_0x1ab202(0x23f)][_0x4986ed]=_0x285e6e;}}}},Game_CharacterBase[_0x179f76(0x106)]['dragonbonesSpriteData']=function(){const _0x3c4158=_0x179f76;if(this['_dragonbonesSpriteData']!==undefined)return this[_0x3c4158(0x14e)];return this['initDragonbonesData'](),this['setupDragonbonesData'](),this[_0x3c4158(0x14e)];},Game_CharacterBase[_0x179f76(0x106)][_0x179f76(0x138)]=function(){const _0xdf6846=_0x179f76;return this[_0xdf6846(0xf4)]()['filename']!=='';},Game_CharacterBase[_0x179f76(0x106)]['currentDragonbonesAnimation']=function(_0x270df9){const _0x3ee950=_0x179f76,_0x25f1d2=this[_0x3ee950(0xf4)]();if(!_0x270df9)return _0x25f1d2[_0x3ee950(0x23f)][_0x3ee950(0x93)];_0x25f1d2['animation']=_0x25f1d2['animation'][_0x3ee950(0x214)]()[_0x3ee950(0xc3)]();if(_0x25f1d2[_0x3ee950(0x1ce)]!==''&&_0x270df9[_0x3ee950(0x1ce)]['animations'][_0x25f1d2['animation']])return _0x25f1d2[_0x3ee950(0x1ce)];let _0x2b487c=[];if(this[_0x3ee950(0x114)]())_0x2b487c=_0x2b487c[_0x3ee950(0x119)](this[_0x3ee950(0xa7)](_0x25f1d2[_0x3ee950(0x23f)][_0x3ee950(0x10d)])),_0x2b487c=_0x2b487c[_0x3ee950(0x119)](this['addDragonbonesAnimationDirections'](_0x25f1d2[_0x3ee950(0x23f)]['walk']));else{if(this['isOnLadder']()&&!this[_0x3ee950(0x114)]()){if(Imported[_0x3ee950(0x265)]&&this['isOnRope']())this[_0x3ee950(0x234)]>0x0&&(_0x2b487c[_0x3ee950(0x1f4)](_0x25f1d2[_0x3ee950(0x23f)][_0x3ee950(0x1d6)]),_0x2b487c[_0x3ee950(0x1f4)](_0x25f1d2[_0x3ee950(0x23f)][_0x3ee950(0x1ff)]),_0x2b487c=_0x2b487c[_0x3ee950(0x119)](this[_0x3ee950(0xa7)](_0x25f1d2[_0x3ee950(0x23f)]['walk']))),_0x2b487c[_0x3ee950(0x1f4)](_0x25f1d2['animationNames'][_0x3ee950(0x220)]),_0x2b487c[_0x3ee950(0x1f4)](_0x25f1d2['animationNames'][_0x3ee950(0xb9)]);else{if(this[_0x3ee950(0x234)]>0x0){if(_0x3ee950(0x124)===_0x3ee950(0x124))_0x2b487c['push'](_0x25f1d2[_0x3ee950(0x23f)]['ladderclimb']),_0x2b487c=_0x2b487c[_0x3ee950(0x119)](this[_0x3ee950(0xa7)](_0x25f1d2[_0x3ee950(0x23f)][_0x3ee950(0xcc)]));else{if(this[_0x3ee950(0x14e)]!==_0x15d4cc)return this['_dragonbonesSpriteData'];return this['initDragonbonesData'](),this[_0x3ee950(0x1cf)](),this[_0x3ee950(0x14e)];}}_0x2b487c[_0x3ee950(0x1f4)](_0x25f1d2[_0x3ee950(0x23f)][_0x3ee950(0xb9)]);}}else this[_0x3ee950(0x234)]>0x0&&(this[_0x3ee950(0x24e)]()&&(_0x2b487c=_0x2b487c[_0x3ee950(0x119)](this[_0x3ee950(0xa7)](_0x25f1d2[_0x3ee950(0x23f)][_0x3ee950(0xc5)]))),_0x2b487c=_0x2b487c['concat'](this['addDragonbonesAnimationDirections'](_0x25f1d2[_0x3ee950(0x23f)][_0x3ee950(0xcc)])));}_0x2b487c=_0x2b487c['concat'](this['addDragonbonesAnimationDirections'](_0x25f1d2[_0x3ee950(0x23f)][_0x3ee950(0x93)]));for(const _0x5850c2 of _0x2b487c){if(_0x270df9[_0x3ee950(0x1ce)][_0x3ee950(0x95)][_0x5850c2])return _0x5850c2;}return _0x25f1d2[_0x3ee950(0x23f)][_0x3ee950(0x93)];},Game_CharacterBase[_0x179f76(0x106)][_0x179f76(0xa7)]=function(_0x3faddf){const _0x38f1ef=_0x179f76,_0x50d7fe=this[_0x38f1ef(0xf4)](),_0x585672=this[_0x38f1ef(0x275)]();let _0x304980=[];_0x304980[_0x38f1ef(0x1f4)](_0x3faddf+_0x585672);if(_0x585672===0x1){if('aQTGf'!==_0x38f1ef(0x174)){_0x304980['push'](_0x3faddf+0x4);if(_0x50d7fe[_0x38f1ef(0x222)])_0x304980[_0x38f1ef(0x1f4)](_0x3faddf+0x6);_0x304980[_0x38f1ef(0x1f4)](_0x3faddf+0x2);}else _0x3968ea['filters']=_0x506cc0['filters']||[],_0x410775[_0x38f1ef(0x1a0)][_0x38f1ef(0xfd)](_0x4aa68e[_0x38f1ef(0xf5)]);}if(_0x585672===0x3){_0x304980[_0x38f1ef(0x1f4)](_0x3faddf+0x6);if(_0x50d7fe['flipRight'])_0x304980[_0x38f1ef(0x1f4)](_0x3faddf+0x4);_0x304980[_0x38f1ef(0x1f4)](_0x3faddf+0x2);}if(_0x585672===0x7){_0x304980[_0x38f1ef(0x1f4)](_0x3faddf+0x4);if(_0x50d7fe[_0x38f1ef(0x222)])_0x304980[_0x38f1ef(0x1f4)](_0x3faddf+0x6);_0x304980[_0x38f1ef(0x1f4)](_0x3faddf+0x8);}if(_0x585672===0x9){_0x304980[_0x38f1ef(0x1f4)](_0x3faddf+0x6);if(_0x50d7fe[_0x38f1ef(0x105)])_0x304980[_0x38f1ef(0x1f4)](_0x3faddf+0x4);_0x304980[_0x38f1ef(0x1f4)](_0x3faddf+0x8);}return _0x304980[_0x38f1ef(0x1f4)](_0x3faddf),_0x304980;},VisuMZ[_0x179f76(0x179)][_0x179f76(0x17f)]=Game_CharacterBase['prototype'][_0x179f76(0x141)],Game_CharacterBase[_0x179f76(0x106)][_0x179f76(0x141)]=function(){const _0x4f2462=_0x179f76;VisuMZ[_0x4f2462(0x179)]['Game_CharacterBase_update'][_0x4f2462(0x1f3)](this),this[_0x4f2462(0x1d2)]();},Game_CharacterBase['prototype'][_0x179f76(0x1d2)]=function(){const _0xe75be2=_0x179f76;if(!this['hasDragonbones']())return;this['isMoving']()?this[_0xe75be2(0x234)]=VisuMZ[_0xe75be2(0x179)]['Settings'][_0xe75be2(0x195)][_0xe75be2(0xc2)]:this[_0xe75be2(0x234)]--;},VisuMZ['DragonbonesUnion']['Game_Player_refresh']=Game_Player[_0x179f76(0x106)][_0x179f76(0x1c5)],Game_Player['prototype'][_0x179f76(0x1c5)]=function(){const _0x1d453b=_0x179f76;VisuMZ[_0x1d453b(0x179)]['Game_Player_refresh'][_0x1d453b(0x1f3)](this),this[_0x1d453b(0x1cf)]();},Game_Player[_0x179f76(0x106)][_0x179f76(0x1cf)]=function(){const _0x1154f=_0x179f76,_0x3902f0=$gameParty[_0x1154f(0xcb)]();!_0x3902f0?'oSOIv'==='DQkjj'?_0x164227['height']=_0x432eb4(_0x24884f['$1']):this[_0x1154f(0x142)]():this[_0x1154f(0x14e)]=_0x3902f0[_0x1154f(0xf4)]();},VisuMZ[_0x179f76(0x179)][_0x179f76(0x115)]=Game_Follower[_0x179f76(0x106)][_0x179f76(0x1c5)],Game_Follower[_0x179f76(0x106)][_0x179f76(0x1c5)]=function(){const _0x32efb9=_0x179f76;VisuMZ[_0x32efb9(0x179)][_0x32efb9(0x115)][_0x32efb9(0x1f3)](this),this[_0x32efb9(0x1cf)]();},Game_Follower[_0x179f76(0x106)][_0x179f76(0x1cf)]=function(){const _0x2a9c58=_0x179f76,_0x5f1680=this[_0x2a9c58(0x97)]();!_0x5f1680?this[_0x2a9c58(0x142)]():this['_dragonbonesSpriteData']=_0x5f1680[_0x2a9c58(0xf4)]();},Game_Actor[_0x179f76(0x106)][_0x179f76(0x142)]=function(){const _0x282838=_0x179f76;Game_BattlerBase[_0x282838(0x106)][_0x282838(0x142)]['call'](this),Game_CharacterBase[_0x282838(0x106)][_0x282838(0x142)][_0x282838(0x1f3)](this);},Game_Actor['prototype'][_0x179f76(0x1cf)]=function(){const _0x1f5741=_0x179f76;Game_BattlerBase['prototype'][_0x1f5741(0x1cf)][_0x1f5741(0x1f3)](this);const _0x1a3613=this[_0x1f5741(0x97)]()[_0x1f5741(0xd9)];Game_CharacterBase[_0x1f5741(0x106)][_0x1f5741(0xa6)][_0x1f5741(0x1f3)](this,_0x1a3613);},Game_Actor['prototype'][_0x179f76(0xf4)]=function(){const _0x4abf88=_0x179f76;if(this[_0x4abf88(0x14e)]!==undefined)return this[_0x4abf88(0x14e)];return this[_0x4abf88(0x142)](),this[_0x4abf88(0x1cf)](),this[_0x4abf88(0x14e)];},VisuMZ[_0x179f76(0x179)][_0x179f76(0x180)]=Game_Event[_0x179f76(0x106)][_0x179f76(0x22e)],Game_Event['prototype']['clearPageSettings']=function(){const _0x21aa89=_0x179f76;VisuMZ[_0x21aa89(0x179)][_0x21aa89(0x180)][_0x21aa89(0x1f3)](this),this[_0x21aa89(0x142)]();},VisuMZ['DragonbonesUnion'][_0x179f76(0x150)]=Game_Event['prototype'][_0x179f76(0x18a)],Game_Event['prototype'][_0x179f76(0x18a)]=function(){const _0xfabba=_0x179f76;VisuMZ[_0xfabba(0x179)][_0xfabba(0x150)]['call'](this),this[_0xfabba(0x142)](),this[_0xfabba(0x1cf)]();},Game_Event[_0x179f76(0x106)]['setupDragonbonesData']=function(){const _0x275633=_0x179f76;this['setupDragonbonesDataNotetags'](),this[_0x275633(0x1ee)]();},Game_Event[_0x179f76(0x106)][_0x179f76(0x90)]=function(){const _0x3c9c00=_0x179f76;if(!this[_0x3c9c00(0x273)]())return;const _0x589c73=this[_0x3c9c00(0x273)]()[_0x3c9c00(0xd9)];if(_0x589c73==='')return;this[_0x3c9c00(0xa6)](_0x589c73);},Game_Event[_0x179f76(0x106)][_0x179f76(0x1ee)]=function(){const _0x66b949=_0x179f76;if(!this[_0x66b949(0x273)]()){if(_0x66b949(0x1c6)!==_0x66b949(0x1c6))_0x2f7377[_0x66b949(0x179)][_0x66b949(0x1fc)][_0x66b949(0x1f3)](this),this[_0x66b949(0x154)]();else return;}if(!this['page']())return;const _0x28f5b1=this[_0x66b949(0x1b4)]();let _0x2b3aec='';for(const _0x5072fa of _0x28f5b1){if([0x6c,0x198][_0x66b949(0x167)](_0x5072fa['code'])){if(_0x2b3aec!=='')_0x2b3aec+='\x0a';_0x2b3aec+=_0x5072fa[_0x66b949(0x77)][0x0];}}this['checkDragonbonesStringTags'](_0x2b3aec);},VisuMZ[_0x179f76(0x179)]['Game_Interpreter_PluginCommand']=Game_Interpreter[_0x179f76(0x106)]['command357'],Game_Interpreter['prototype']['command357']=function(_0x57f21b){const _0x3919e6=_0x179f76;return $gameTemp['setLastPluginCommandInterpreter'](this),VisuMZ['DragonbonesUnion'][_0x3919e6(0x89)]['call'](this,_0x57f21b);},VisuMZ[_0x179f76(0x179)][_0x179f76(0x188)]=Sprite_Character[_0x179f76(0x106)][_0x179f76(0x1ea)],Sprite_Character[_0x179f76(0x106)][_0x179f76(0x1ea)]=function(_0x29996b){const _0x19b219=_0x179f76;this[_0x19b219(0x142)](),VisuMZ[_0x19b219(0x179)][_0x19b219(0x188)][_0x19b219(0x1f3)](this,_0x29996b),this[_0x19b219(0x134)]();},Sprite_Character[_0x179f76(0x106)]['initDragonbonesData']=function(){const _0x1862bc=_0x179f76;this['_dragonbones']=null,this['_dragonbonesFilename']='',this[_0x1862bc(0x255)]='';},Sprite_Character['prototype']['createBaseDragonbonesSprite']=function(){const _0xeb538=_0x179f76;this[_0xeb538(0xb2)]=new Sprite(),this[_0xeb538(0x1f1)](this[_0xeb538(0xb2)]);},VisuMZ[_0x179f76(0x179)][_0x179f76(0x1bb)]=Sprite_Character['prototype'][_0x179f76(0xcf)],Sprite_Character[_0x179f76(0x106)]['updateBitmap']=function(){const _0x517bef=_0x179f76;VisuMZ[_0x517bef(0x179)][_0x517bef(0x1bb)][_0x517bef(0x1f3)](this),this[_0x517bef(0x12a)]();},Sprite_Character['prototype'][_0x179f76(0x1b9)]=function(){const _0x271a6f=_0x179f76;this[_0x271a6f(0x83)]&&('cqXri'===_0x271a6f(0x13e)?(this[_0x271a6f(0xb2)][_0x271a6f(0x176)](this[_0x271a6f(0x83)]),this[_0x271a6f(0x83)][_0x271a6f(0x257)](),this[_0x271a6f(0x83)]=null,this['_dragonbonesFilename']='',this[_0x271a6f(0x255)]=''):this['getDragonbones']()?this[_0x271a6f(0x21f)]():_0x5bc415[_0x271a6f(0x179)][_0x271a6f(0x196)][_0x271a6f(0x1f3)](this));},Sprite_Character[_0x179f76(0x106)][_0x179f76(0x12a)]=function(){const _0x490e56=_0x179f76;if(!this[_0x490e56(0x183)])return this[_0x490e56(0x1b9)]();if(!this['_character']['hasDragonbones']())return this[_0x490e56(0x1b9)]();this[_0x490e56(0x1d0)]();if(!this['_dragonbones'])return;this['updateDragonbonesAnimation'](),this['updateDragonbonesProperties'](),this[_0x490e56(0xa1)]();},Sprite_Character[_0x179f76(0x106)][_0x179f76(0x1d0)]=function(){const _0xb0c98f=_0x179f76,_0x20c644=this[_0xb0c98f(0x183)][_0xb0c98f(0xf4)]();if(this[_0xb0c98f(0x202)]===_0x20c644['filename'])return;this[_0xb0c98f(0x1b9)](),this[_0xb0c98f(0x202)]=_0x20c644['filename'],DragonbonesManager[_0xb0c98f(0xf6)](_0x20c644[_0xb0c98f(0x14d)],this['onLoadDragonbones'][_0xb0c98f(0x213)](this));},Sprite_Character[_0x179f76(0x106)][_0x179f76(0x271)]=function(){const _0x178e18=_0x179f76,_0x4e85e6=this['_character']['dragonbonesSpriteData']();this[_0x178e18(0x83)]=DragonbonesManager[_0x178e18(0x259)](_0x4e85e6[_0x178e18(0x14d)]),this[_0x178e18(0x10b)](),setTimeout(this['addDragonbonesChild'][_0x178e18(0x213)](this),0x0);},Sprite_Character[_0x179f76(0x106)][_0x179f76(0x20c)]=function(){const _0x19f3a0=_0x179f76;if(!this[_0x19f3a0(0x83)])return;if(!this[_0x19f3a0(0xb2)])return;this[_0x19f3a0(0xb2)][_0x19f3a0(0x9f)](this['_dragonbones'],0x0);},Sprite_Character[_0x179f76(0x106)]['updateDragonbonesAnimation']=function(){const _0x269388=_0x179f76;if(!this[_0x269388(0x83)])return;const _0x53c880=this[_0x269388(0x183)][_0x269388(0xf4)](),_0xb9932d=this[_0x269388(0x83)][_0x269388(0x1ce)],_0x26d8b2=this['_character'][_0x269388(0xf3)](this[_0x269388(0x83)]);if(_0xb9932d[_0x269388(0x190)]){if(_0x26d8b2&&_0x26d8b2['match'](/(?:IDLE|WALK|DASH)(\d+)/i))this[_0x269388(0x183)]['dragonbonesAnimation']='';else{if(_0xb9932d['lastAnimationState'][_0x269388(0xbc)]===0x1)return;}this['_dragonbonesAnimation']='',_0xb9932d[_0x269388(0x267)]='';}this['_dragonbonesAnimation']!==_0x26d8b2&&('uZlLO'===_0x269388(0x1cc)?this['playDragonbonesMotion'](_0x269388(0xa9)):(this['_dragonbonesAnimation']=_0x26d8b2,this[_0x269388(0xef)]()));},Sprite_Character['prototype'][_0x179f76(0xef)]=function(){const _0xaad116=_0x179f76;if(!this[_0xaad116(0x83)])return;const _0x4c5e5b=this[_0xaad116(0x83)][_0xaad116(0x1ce)],_0x23cc7c=this['_dragonbonesAnimation']['toLowerCase']()[_0xaad116(0xc3)]();if(_0x4c5e5b[_0xaad116(0x95)][_0x23cc7c]){if(_0xaad116(0x250)==='jgmTa'){if(_0x4c5e5b[_0xaad116(0x267)]===_0x23cc7c&&_0x4c5e5b['animations'][_0x23cc7c][_0xaad116(0xbc)]<=0x0)return;_0x4c5e5b['play'](_0x23cc7c);}else _0x49b4c3[_0xaad116(0x14f)](_0x3869eb),_0x200379['onComplete'][_0xaad116(0xdc)](()=>_0x574fa6[_0xaad116(0x100)](_0x5bc916,_0x3a8464[_0xaad116(0x104)]));}},Sprite_Character[_0x179f76(0x106)][_0x179f76(0x215)]=function(){const _0x572c45=_0x179f76;if(!this[_0x572c45(0x83)])return;const _0x49400a=this[_0x572c45(0x183)][_0x572c45(0xf4)]();this['_dragonbones']['x']=_0x49400a[_0x572c45(0x22b)],this[_0x572c45(0x83)]['y']=_0x49400a[_0x572c45(0x244)],this[_0x572c45(0x83)]['scale']['x']=_0x49400a[_0x572c45(0x26e)]*this[_0x572c45(0x103)](),this[_0x572c45(0x83)][_0x572c45(0x1d7)]['y']=_0x49400a[_0x572c45(0x1aa)];},Sprite_Character[_0x179f76(0x106)][_0x179f76(0x103)]=function(){const _0x9d0368=_0x179f76,_0x4c4fe1=this[_0x9d0368(0x183)][_0x9d0368(0xf4)]();this[_0x9d0368(0xba)]=this['_dragonbonesFlipDirection']||0x1;if(_0x4c4fe1[_0x9d0368(0x222)]&&[0x1,0x4,0x7][_0x9d0368(0x167)](this[_0x9d0368(0x183)][_0x9d0368(0x275)]()))this[_0x9d0368(0xba)]=-0x1;else{if(_0x4c4fe1[_0x9d0368(0x105)]&&[0x9,0x6,0x3][_0x9d0368(0x167)](this['_character']['direction']()))this['_dragonbonesFlipDirection']=-0x1;else{if(![0x8,0x2][_0x9d0368(0x167)](this['_character'][_0x9d0368(0x275)]())){if(_0x9d0368(0x7a)!==_0x9d0368(0x243))this[_0x9d0368(0xba)]=0x1;else{if(this!==this[_0x9d0368(0x161)]['_distortionSprite'])return null;return this['parent']['_dragonbones'];}}}}return this['_dragonbonesFlipDirection'];},Sprite_Character[_0x179f76(0x106)][_0x179f76(0xa1)]=function(){const _0x5e8ae0=_0x179f76;if(!this['_dragonbones'])return;const _0x4dfb9e=this['_character']['dragonbonesSpriteData']();let _0x32c3fc=_0x4dfb9e[_0x5e8ae0(0xbf)];this['_character'][_0x5e8ae0(0x193)]()&&(_0x5e8ae0(0xe7)!==_0x5e8ae0(0xe7)?this['battler']()[_0x5e8ae0(0xbb)]():(_0x32c3fc*=this[_0x5e8ae0(0x183)][_0x5e8ae0(0x20d)](),this[_0x5e8ae0(0x183)][_0x5e8ae0(0x24e)]()?_0x5e8ae0(0x1eb)===_0x5e8ae0(0x21a)?this[_0x5e8ae0(0x234)]--:_0x32c3fc*=_0x4dfb9e['dashRate']:_0x32c3fc*=_0x4dfb9e[_0x5e8ae0(0x127)])),this['_dragonbones']['animation'][_0x5e8ae0(0xbf)]=_0x32c3fc;},VisuMZ['DragonbonesUnion'][_0x179f76(0x80)]=Sprite_Character[_0x179f76(0x106)][_0x179f76(0x15c)],Sprite_Character['prototype'][_0x179f76(0x15c)]=function(){const _0x21d343=_0x179f76;this['_character']&&this['_character'][_0x21d343(0x138)]()?this[_0x21d343(0x13d)]():_0x21d343(0x1e0)!==_0x21d343(0x1e0)?_0x2903b0=_0x1b64ba[_0x21d343(0x119)](this[_0x21d343(0xa7)](_0x429ebb[_0x21d343(0x23f)][_0x21d343(0xc5)])):VisuMZ[_0x21d343(0x179)][_0x21d343(0x80)][_0x21d343(0x1f3)](this);},Sprite_Character['prototype'][_0x179f76(0x13d)]=function(){const _0x259fd8=_0x179f76,_0xc346ba=this['_character']['dragonbonesSpriteData'](),_0x2bcb32=_0xc346ba[_0x259fd8(0x1c2)];this[_0x259fd8(0x20f)](0x0,0x0,0x0,_0x2bcb32);};