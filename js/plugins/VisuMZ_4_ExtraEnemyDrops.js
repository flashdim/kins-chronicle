//=============================================================================
// VisuStella MZ - Extra Enemy Drops
// VisuMZ_4_ExtraEnemyDrops.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_ExtraEnemyDrops = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ExtraEnemyDrops = VisuMZ.ExtraEnemyDrops || {};
VisuMZ.ExtraEnemyDrops.version = 1.07;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.07] [ExtraEnemyDrops]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Extra_Enemy_Drops_VisuStella_MZ
 * @base VisuMZ_4_ExtraEnemyDrops
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * By default, RPG Maker MZ limits enemies to only drop up to 3 items max and
 * at very limited drop rates. This plugin allows you to add more than 3 items
 * at drop and at custom rates that aren't limited to a demoninator value.
 * 
 * This plugin also gives the functionality to force specific drops or give any
 * additional bonus drops to make some battles give different rewards despite
 * having the same types of enemies encountered before.
 * 
 * And if you have the VisuStella Battle Core, drops can be visible on the
 * battlefield and spring out of the enemies as they collapse!
 *
 * Features include all (but not limited to) the following:
 * 
 * * More than 3 drops per enemy can be given.
 * * Drop probability is a percentile value and not a demoniator setting.
 * * Make Conditional Drops that only appear depending on the events that took
 *   place during the battle.
 * * JavaScript notetags that let you make conditional drops based on code.
 * * New plugin commands to allow for forced drops and/or bonus drops.
 * * Forced drops will override any existing drops made from the enemy troop.
 * * Bonus drops will be additional drops in addition to those dropped from the
 *   enemy troop.
 * * If you have the Battle Core, drops become visible on the battlefield.
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
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Forced Enemy Drops
 * 
 * - If forced enemy drops are used (through a Plugin Command), then all other
 * drop-related functions will be ignored in favor of the forced enemy drops.
 * This is because all forced drops are made to favor a specific set of drops
 * ordered by the game developer.
 * 
 * - This will prevent visual drops from appearing, too. Any visual drops that
 * have already been made present will also disappear.
 *
 * ---
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
 * Visual Drops (Battle Core)
 *
 * - Drops become visible on the battlefield. Once an enemy is defeated, visual
 * drops will appear out of their former position. These drops are shown as
 * icons, representing the EXP, Gold, and Drop Items an enemy will yield if the
 * battle is won.
 * 
 * - This feature can be disabled.
 * 
 * - If this feature is enabled, there is a slight change to the drop system.
 * Previously, drops are determined at the end of battle. Now, to visibly
 * appear upon the defeat of an enemy, they are then determined at the moment
 * of their death.
 * 
 * - What this means is, if an EXP or Gold boost is applied after they've been
 * defeated, it will not be retroactive and apply to the drops that become
 * visible on the battlefield. As a result, the player has to be tactical in
 * when they defeat the enemies after applying the EXP and Gold buffs.
 * 
 * - Depending on the Plugin Parameter settings, if an enemy revives, their
 * drops can be reset. If the reset is allowed, the player can acquire a whole
 * different set of drops upon the enemy's subsequent defeats. This feature can
 * be turned off.
 * 
 * - A reviving enemy will cause its visual drops to disappear.
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
 * === General Drop-Related Notetags ===
 * 
 * The following notetags are related to giving enemies additional drops with
 * more control over probability rates.
 * 
 * ---
 *
 * <Item Drop id: x%>
 * <Item Drop id To id: x%>
 * <Item Drop name: x%>
 * 
 * <Weapon Drop id: x%>
 * <Weapon Drop id To id: x%>
 * <Weapon Drop name: x%>
 * 
 * <Armor Drop id: x%>
 * <Armor Drop id To id: x%>
 * <Armor Drop name: x%>
 *
 * - Used for: Enemy Notetags
 * - Gives the enemy 'x' percent chance to drop the designated item, weapon,
 *   or armor.
 * - Replace 'id' with the ID of the item, weapon, or armor you wish to assign
 *   to the enemy as a potential drop.
 *   - For 'id To id' variants, insert the starting ID and ending ID for the
 *     items, weapons, and/or armors you wish to add as a batch. This will
 *     ignore any entries without a name or with ----- in its name.
 * - With the 'name' notetag variant, replace 'name' with the name of the item,
 *   weapon, or armor you wish to assign to the enemy as a potential drop.
 * - Replace 'x' with a number representing the percentile probability chance
 *   of successfully acquiring that item as a drop.
 * - Insert multiple copies of these notetags if you wish to include more drops
 *   for the enemies.
 * 
 * Examples:
 * 
 * <Item Drop 5: 20%>
 * <Item Drop 5 To 10: 20%>
 * <Item Drop Potion: 30%>
 * 
 * <Weapon Drop 27: 45%>
 * <Weapon Drop 27 To 37: 45%>
 * <Weapon Drop Blade of Reckoning: 55%>
 * 
 * <Armor Drop 19: 72%>
 * <Armor Drop 19 To 23: 72%>
 * <Armor Drop Flame Shield: 90%>
 *
 * ---
 *
 * <Drops>
 *  Item id: x%
 *  Item id To id: x%
 *  Item name: x%
 *  Weapon id: x%
 *  Weapon id To id: x%
 *  Weapon name: x%
 *  Armor id: x%
 *  Armor id To id: x%
 *  Armor name: x%
 * </Drops>
 *
 * - Used for: Actor, Class, Skill, Item, Weapon, Armor, Enemy, State Notetags
 * - Creates a batch list of item, weapon, armor drops.
 * - This isn't any different than creating individual copies of the above
 *   notetags as far as results go, but some may prefer this approach to make
 *   the drop table look "cleaner".
 * - Replace 'id' with the ID of the item, weapon, or armor you wish to assign
 *   to the enemy as a potential drop.
 *   - For 'id To id' variants, insert the starting ID and ending ID for the
 *     items, weapons, and/or armors you wish to add as a batch. This will
 *     ignore any entries without a name or with ----- in its name.
 * - With the 'name' notetag variant, replace 'name' with the name of the item,
 *   weapon, or armor you wish to assign to the enemy as a potential drop.
 * - Replace 'x' with a number representing the percentile probability chance
 *   of successfully acquiring that item as a drop.
 * 
 * Example:
 *
 * <Drops>
 *  Item 5: 20%
 *  Item Potion: 30%
 *  Weapon 27: 45%
 *  Weapon Blade of Reckoning: 55%
 *  Armor 72: 72%
 *  Armor Flame Shield: 90%
 * </Drops>
 *
 * ---
 * 
 * === Conditional Drop-Related Notetags ===
 * 
 * Conditional drops are drops that only appear once specific conditions have
 * been met. For each condition met, their chances of dropping can be raised
 * higher or lower.
 * 
 * ---
 * 
 * <Conditional Item id Drop>
 *  condition: +x%
 *  condition: +x%
 *  condition: -x%
 *  condition: -x%
 * </Conditional Item id Drop>
 * 
 * <Conditional Item id To id Drops>
 *  condition: +x%
 *  condition: +x%
 *  condition: -x%
 *  condition: -x%
 * </Conditional Item id To id Drops>
 * 
 * <Conditional Item name Drop>
 *  condition: +x%
 *  condition: +x%
 *  condition: -x%
 *  condition: -x%
 * </Conditional Item name Drop>
 * 
 * <Conditional Weapon id Drop>
 *  condition: +x%
 *  condition: +x%
 *  condition: -x%
 *  condition: -x%
 * </Conditional Weapon id Drop>
 * 
 * <Conditional Weapon id To id Drop>
 *  condition: +x%
 *  condition: +x%
 *  condition: -x%
 *  condition: -x%
 * </Conditional Weapon id To id Drop>
 * 
 * <Conditional Weapon name Drop>
 *  condition: +x%
 *  condition: +x%
 *  condition: -x%
 *  condition: -x%
 * </Conditional Weapon name Drop>
 * 
 * <Conditional Armor id Drop>
 *  condition: +x%
 *  condition: +x%
 *  condition: -x%
 *  condition: -x%
 * </Conditional Armor id Drop>
 * 
 * <Conditional Armor id To id Drop>
 *  condition: +x%
 *  condition: +x%
 *  condition: -x%
 *  condition: -x%
 * </Conditional Armor id To id Drop>
 * 
 * <Conditional Armor name Drop>
 *  condition: +x%
 *  condition: +x%
 *  condition: -x%
 *  condition: -x%
 * </Conditional Armor name Drop>
 *
 * - Used for: Enemy Notetags
 * - Create conditional item, weapon, and/or armor drops for this enemy.
 * - Insert multiples of these notetags if you want more than one conditional
 *   drop for this enemy.
 * - Use the associated item, weapon, or armor type notetag for the type of
 *   conditional drop you want for the enemy.
 * - Replace 'id' with the ID number of the item, weapon, or armor to drop.
 *   - For 'id To id' variants, insert the starting ID and ending ID for the
 *     items, weapons, and/or armors you wish to add as a batch. This will
 *     ignore any entries without a name or with ----- in its name.
 * - Replace 'name' with the name of the item, weapon, or armor to drop.
 * - Replace 'condition' with any of the conditions listed in below section.
 * - Replace 'x' with the increase or decrease in percentage drop chance.
 * 
 * ---
 * 
 * -=-=- Condition List -=-=-
 *
 * Replace 'condition' in the notetags in the above section with any of the
 * following to make conditions. These conditions are also used in the Plugin
 * Parameters for the default conditions, too.
 * 
 * ---
 *
 * x >= y
 * x > y
 * x === y
 * x !== y
 * x < y
 * x <= y
 * 
 * - Replace 'x' and 'y' with any of the following:
 *
 * - 'Switch x' (replace 'x' with a number) for switch x's current state.
 * - 'TRUE', 'FALSE', 'ON', 'OFF' for the opposite x/y value.
 * - Using any of these boolean modifiers must be paired with '===' or '!=='
 *
 * - 'Variable x' (replace 'x' with a number) for variable x's current value.
 * - A numeric value representing a hard number.
 * - '50%' or any other percentile number to represent a rate.
 * - '0.5' or any other float number to represent a rate.
 * 
 * - 'Item id Count' for the number of specific items the party owns.
 *   - Replace 'id' with the ID of the item.
 * - 'Item name Count' for the number of specific items the party owns.
 *   - Replace 'name' with the ID of the item.
 * 
 * - 'Weapon id Count' for the number of specific weapons the party owns.
 *   - Replace 'id' with the ID of the weapon.
 * - 'Weapon name Count' for the number of specific weapons the party owns.
 *   - Replace 'name' with the ID of the weapon.
 * 
 * - 'Armor id Count' for the number of specific armors the party owns.
 *   - Replace 'id' with the ID of the armor.
 * - 'Armor name Count' for the number of specific armors the party owns.
 *   - Replace 'name' with the ID of the armor.
 * 
 * - 'Alive Members' for the number of alive party members when drops are
 *   being determined.
 * 
 * - 'Battle Members' for the number of participating party members in battle.
 * 
 * - 'Battle Turns' for the number of turns passed in battle when drops are
 *   being determined.
 * 
 * - 'Dead Members' for the number of dead party members when drops are
 *   being determined.
 * 
 * - 'Death Turn' for the turn the enemy died. If an enemy was revived during
 *   battle, then take the most recent turn the enemy has died.
 * 
 * - 'Enemy Level' for the current level of the enemy if using the 'level'
 *   property for the Game_Enemy object.
 * 
 * - 'Party Gold' for the party's current gold value when drops are
 *   being determined.
 * 
 * - 'Party Members' for the number of total party members in battle.
 * 
 * - 'Times type id Struck' for the number of times the enemy was struck
 *   with 'type' 'id' during battle.
 * - Replace 'type' with 'Element' for the number of times the enemy was struck
 *   with specific elemental damage.
 * - Replace 'type' with 'Item' for the number of times the enemy was struck
 *   with a specific item.
 * - Replace 'type' with 'Skill' for the number of times the enemy was struck
 *   with a specific skill.
 * - Replace 'type' with 'SType' for the number of times the enemy was struck
 *   by any skill of a specifici skill type.
 * - Replace 'type' with 'State' for the number of times the enemy was struck
 *   with a specific state.
 * - Replace 'id' with the type's ID.
 * 
 * - 'Times type name Struck' for the number of times the enemy was struck
 *   with 'type' 'name' during battle.
 * - Replace 'type' with 'Element' for the number of times the enemy was struck
 *   with specific elemental damage.
 * - Replace 'type' with 'Item' for the number of times the enemy was struck
 *   with a specific item.
 * - Replace 'type' with 'Skill' for the number of times the enemy was struck
 *   with a specific skill.
 * - Replace 'type' with 'SType' for the number of times the enemy was struck
 *   by any skill of a specifici skill type.
 * - Replace 'type' with 'State' for the number of times the enemy was struck
 *   with a specific state.
 * - Replace 'name' with the type's name in the database.
 * 
 * ---
 * 
 * Always
 * 
 * - This condition is always met. Use this to set a base drop chance.
 * 
 * ---
 * 
 * Random x%
 * 
 * - Offers a random 'x' chance to increase/decrease drop chance.
 * 
 * ---
 * 
 * Last Strike type id
 * Last Strike type name
 * 
 * - Checks the condition to see if the last struck action against the enemy
 *   was done by a specific action.
 * - Replace 'type' with 'Element' for the last struck element.
 * - Replace 'type' with 'Item' for the last struck item if it was an item.
 *   This will override the 'Skill' and 'SType' types.
 * - Replace 'type' with 'Skill' for the last struck skill if it was a skill.
 *   This will override the 'Item' type.
 * - Replace 'type' with 'SType' for the last struck skill type if it was
 *   a skill. This will override the 'Item' type.
 * - Replace 'type' with 'State' for the last struck state.
 * 
 * ---
 * 
 * Examples:
 * 
 * The following are some examples on how these conditional drops are used:
 * 
 * ---
 * 
 * <Conditional Item Potion Drop>
 *  Always: +20%
 *  Death Turn <= 3: +50%
 * </Conditional Item Potion Drop>
 * 
 * - Conditional drop is the Potion item.
 * - It has a base chance of 20%.
 * - If the enemy was defeated during or before turn 3, increase the drop
 *   chance by another 50%.
 * 
 * ---
 * 
 * <Conditional Weapon Mithril Sword Drop>
 *  Always: +100%
 *  Times SType Magic Struck: -10%
 *  Times SType Spell Struck: -10%
 * </Conditional Weapon Mithril Sword Drop>
 * 
 * - Conditional drop is the Mithril Sword weapon.
 * - It starts off with a 100% chance of a drop.
 * - Each time the enemy is struck with 'Magic' or 'Spell' type attacks,
 *   the drop chance decreases by 10%.
 * 
 * ---
 * 
 * <Conditional Armor Elemental Cloak Drop>
 *  Times Element Fire Struck: +10%
 *  Times Element Ice Struck: +10%
 *  Times Element Thunder Struck: +10%
 *  Times Element Physical Struck: -20%
 *  Times Skill Element Force Struck: +50%
 * </Conditional Armor Elemental Cloak Drop>
 * 
 * - Conditional drop is the Elemental Cloak armor.
 * - Each time the enemy is struck by 'Fire', 'Ice', or 'Thunder' damage,
 *   increase the drop chance by 10%.
 * - Each time the enemy is struck by 'Physical' damage, decrease the drop
 *   chance by 10%.
 * - Each time the enemy is struck by the specific skill 'Element Force',
 *   increase the drop chance by +50%.
 * 
 * ---
 *
 * === JavaScript Notetags: Drops ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * give more control over conditional enemy drop manipulation.
 *
 * ---
 *
 * <JS Drops>
 *  code
 *  code
 *  drops.push($dataItems[1]);
 *  drops.push($dataWeapons[2]);
 *  drops.push($dataArmors[3]);
 * </JS Drops>
 *
 * - Used for: Enemy Notetags
 * - Replace 'code' with JavaScript code to make conditional checks in order
 *   to determine which items, weapons, and/or armors would be added to the
 *   drop pool.
 * - The 'drops' variable is an array which contains all of the currently
 *   existing drops from the enemy this notetag is on. It will be returned as
 *   an array upon running the notetag's JavaScript code.
 * - Add to or remove from the 'drops' variable to change up its contents.
 *
 * ---
 * 
 * === Visual Drop-Related Notetags ===
 * 
 * For those who want to customize how some items, weapons, or armors appear as
 * visual drops, use the following notetags.
 * 
 * ---
 *
 * <Visual Drop Icon: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Forces the drop item, weapon, or armor to appear as a different icon.
 * - Replace 'x' with the ID of the icon you wish to show.
 *
 * ---
 *
 * <Visual Drop Rarity: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Sets the item, weapon, or armor drop to be a specific rarity.
 * - Replace 'x' with a rarity value between 0 and 10. The settings applied to
 *   the visual drop will be based on their Plugin Parameter settings.
 * - This is mutually exclusive from the <Visual Drop Tint Color: r, g, b, k>
 *   and <Visual Drop Tint Duration: x> notetags.
 *
 * ---
 *
 * <Visual Drop Tint Color: r, g, b, k>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Sets the tint of visual drop item when it's visible on the battlefield.
 * - Replace 'r' with a red value between -255 and 255.
 * - Replace 'g' with a green value between -255 and 255.
 * - Replace 'b' with a blue value between -255 and 255.
 * - Replace 'k' with a gray value between 0 and 255.
 * - This does not work with the <Visual Drop Rarity: x> notetag.
 *
 * ---
 *
 * <Visual Drop Tint Duration: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Sets the duration of the tint effect.
 * - Replace 'x' with the number of frames to tint the visual drop. The lower
 *   the number, the faster the tint pulses. The higher the number, the slower
 *   the tint pulses.
 *
 * ---
 *
 * <Visual Drop Spawn SFX: filename>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - When the item, weapon, or armor's visual drop spawns on the battlefield,
 *   play a sound effect.
 * - Replace 'filename' with the name of a sound effect from the game project's
 *   /audio/se/ folder. Do not include the file extension.
 * - Example: <Visual Drop Spawn SFX: Float1>
 *
 * ---
 *
 * <Visual Drop Bounce Height: x%>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Alters how bouncy this visual drop is as it spawns on the battlefield.
 * - Replace 'x' with a percentage value on how much higher the visual drop
 *   should bounce than normal (whatever is set in the Plugin Parameters).
 *
 * ---
 *
 * <Visual Drop Bounce SFX: filename>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - When the item, weapon, or armor's visual drop bounces on the battlefield,
 *   play a sound effect.
 * - Replace 'filename' with the name of a sound effect from the game project's
 *   /audio/se/ folder. Do not include the file extension.
 * - Example: <Visual Drop Bounce SFX: Float1>
 *
 * ---
 *
 * <Visual Drop Flag: Rainbow>
 * <Visual Drop Flag: Additive>
 * <Visual Drop Flag: Multiply>
 * <Visual Drop Flag: Screen>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Adds visual effects to visual drop when it's on the battlefield.
 * - The 'Rainbow' effect causes the icon's hue to constantly change.
 * - The 'Additive', 'Multiply', and 'Screen', effects are blend modes.
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
 * === Bonus Reward Plugin Commands ===
 * 
 * ---
 *
 * Bonus Rewards: Clear
 * - Clears all bonus drops.
 *
 * ---
 *
 * Bonus Rewards: Set EXP
 * - Determines additional EXP the player will get in battle by this value.
 *
 *   EXP:
 *   - Determines additional EXP the player will get in battle by this value.
 *
 * ---
 *
 * Bonus Rewards: Set Gold
 * - Determines additional Gold the player will get in battle by this value.
 *
 *   Gold:
 *   - Determines additional Gold the player will get in battle by this value.
 *
 * ---
 *
 * Bonus Rewards: Add Item
 * - Adds the bonus drop the player earns from this battle to have the
 *   following item given at a specific quantity.
 *
 *   Item ID:
 *   - Which item do you wish to give the player?
 *
 *   Quantity:
 *   - How many copies of the bonus drop to give the player.
 *
 * ---
 *
 * Bonus Rewards: Add Weapon
 * - Adds the bonus drop the player earns from this battle to have the
 *   following weapon given at a specific quantity.
 *
 *   Weapon ID:
 *   - Which weapon do you wish to give the player?
 *
 *   Quantity:
 *   - How many copies of the bonus drop to give the player.
 *
 * ---
 *
 * Bonus Rewards: Add Armor
 * - Adds the bonus drop the player earns from this battle to have the
 *   following armor given at a specific quantity.
 *
 *   Armor ID:
 *   - Which armor do you wish to give the player?
 *
 *   Quantity:
 *   - How many copies of the bonus drop to give the player.
 *
 * ---
 * 
 * === Forced Reward Plugin Commands ===
 * 
 * ---
 *
 * Forced Rewards: Clear
 * - Clears all forced drops.
 *
 * ---
 *
 * Forced Rewards: Set EXP
 * - Change the amount of EXP the player will get in battle to this value.
 *
 *   EXP:
 *   - Change the amount of EXP the player will get in battle to this value.
 *
 * ---
 *
 * Forced Rewards: Set Gold
 * - Change the amount of Gold the player will get in battle to this value.
 *
 *   Gold:
 *   - Change the amount of Gold the player will get in battle to this value.
 *
 * ---
 *
 * Forced Rewards: Add Item
 * - Adds the forced drop the player earns from this battle to have the
 *   following item given at a specific quantity.
 *
 *   Item ID:
 *   - Which item do you wish to give the player?
 *
 *   Quantity:
 *   - How many copies of the forced drop to give the player.
 *
 * ---
 *
 * Forced Rewards: Add Weapon
 * - Adds the forced drop the player earns from this battle to have the
 *   following weapon given at a specific quantity.
 *
 *   Weapon ID:
 *   - Which weapon do you wish to give the player?
 *
 *   Quantity:
 *   - How many copies of the forced drop to give the player.
 *
 * ---
 *
 * Forced Rewards: Add Armor
 * - Adds the forced drop the player earns from this battle to have the
 *   following armor given at a specific quantity.
 *
 *   Armor ID:
 *   - Which armor do you wish to give the player?
 *
 *   Quantity:
 *   - How many copies of the forced drop to give the player.
 *
 * ---
 * 
 * === Visual Drop Plugin Commands ===
 * 
 * ---
 *
 * Visual Drops: Visibility
 * - Sets the visibility of visual drops during battle.
 *
 *   Visible:
 *   - Show visual drops during battle?
 *   - This will be reset at the start of next battle.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These settings govern the way Visual Drops are handled. These are global
 * rules that apply to all Visual Drops made through this plugin, from the
 * calculations made to determine their radius distance to the number of
 * bounces the drops make to whether or not the drops have shadows.
 *
 * ---
 *
 * General
 * 
 *   Enable?
 *   - Enable Visual Drops?
 *   - You know you want to.
 * 
 *   Reviving Resets Drops:
 *   - Do reviving enemies reset drops?
 *   - For more information, read the Extra Features section.
 *
 * ---
 *
 * Position
 * 
 *   Base Radius:
 *   - Base radius amount for drops.
 * 
 *   +Radius Per Drop:
 *   - Increase radius by this much per extra drop.
 * 
 *   Spin Degrees:
 *   - How many degrees do you want the icon to spin in its largest bounce?
 *   - Use 0 for no spin.
 * 
 *   Delay Between Drops:
 *   - How many milliseconds to delay the appearance of each visual drop?
 *   - Use 0 for no delay.
 * 
 *   Field of View Y:
 *   - What's the distortion rate for the field of view for the item
 *     positioning distribution.
 *
 * ---
 *
 * Bounce
 * 
 *   Bounce Duration:
 *   - Duration of the highest bounce.
 * 
 *   Bounce Total:
 *   - How many times do you want visual drops to bounce?
 *   - Use 0 for no bounces.
 * 
 *   Bounce Height:
 *   - The maximum height for the visual drops to fly out at.
 *   - This will decrease with each bounce.
 * 
 *   Bounce Reduction:
 *   - The rate at which each bounce reduces the duration and height by.
 *
 * ---
 *
 * Bounce SFX
 * 
 *   Filename:
 *   - Filename of the sound effect played.
 * 
 *   Volume:
 *   - Volume of the sound effect played.
 * 
 *   Pitch:
 *   - Pitch of the sound effect played.
 * 
 *   Pan:
 *   - Pan of the sound effect played.
 *
 * ---
 *
 * Icons
 * 
 *   Offset Y Rate:
 *   - At which rate do you want to offset the visual drop icons off the
 *     ground by?
 * 
 *   Movement Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 * ---
 *
 * Shadow
 * 
 *   Show Shadow:
 *   - Show the shadow sprite?
 * 
 *   Shadow Filename:
 *   - Filename used for the visual drop shadow.
 * 
 *   Shadow Offset X:
 *   - Offset the shadow sprite X by this amount.
 *   - Negative numbers go left. Positive numbers go right.
 * 
 *   Shadow Offset Y:
 *   - Offset the shadow sprite Y by this amount.
 *   - Negative numbers go up. Positive numbers go down.
 * 
 *   Shadow Opacity:
 *   - Opacity level of the shadow.
 *   - 0 for transparent. 255 for opaque.
 *
 * ---
 *
 * Opacity
 * 
 *   Fade After Bounce:
 *   - Fade out the visual drops after they finish bouncing?
 * 
 *   Fade After Delay:
 *   - How many milliseconds to delay the fading by if the above option is
 *     selected?
 * 
 *   Opacity Fade Speed:
 *   - What speed should the opacity level fade out by?
 *   - Higher numbers are faster.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: EXP Settings
 * ============================================================================
 *
 * EXP can be depicted as a visual drop from the enemy. Depending on how much
 * EXP the enemy would give, a different setting can be used, determining the
 * icon used and which rarity effect to apply.
 *
 * ---
 *
 * General
 * 
 *   Show EXP Drop:
 *   - Show visual drops for EXP?
 *
 * ---
 *
 * Settings 1 through 10
 * 
 *   EXP Value:
 *   - How much EXP minimum to use this setting?
 * 
 *   Icon:
 *   - Which icon to use for this setting?
 * 
 *   Rarity:
 *   - Which rarity to use for this setting?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Gold Settings
 * ============================================================================
 *
 * Gold can be depicted as a visual drop from the enemy. Depending on how much
 * Gold the enemy would give, a different setting can be used, determining the
 * icon used and which rarity effect to apply.
 *
 * ---
 *
 * General
 * 
 *   Show Gold Drop:
 *   - Show visual drops for Gold?
 *
 * ---
 *
 * Settings 1 through 10
 * 
 *   Gold Value:
 *   - How much Gold minimum to use this setting?
 * 
 *   Icon:
 *   - Which icon to use for this setting?
 * 
 *   Rarity:
 *   - Which rarity to use for this setting?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Enemy Drops Settings
 * ============================================================================
 *
 * These are the usual enemy drops that you're used to. These will factor in
 * extra drops, conditional drops, and drops added through JavaScript as well.
 * You can choose to have the enemy drops reveal their real icons or keep it
 * a surprise for when the player finally access the Victory Aftermath screen.
 *
 * ---
 *
 * General
 * 
 *   Show Enemy Drops:
 *   - Show visual drops for enemy drops?
 * 
 *   Use Unique Icons:
 *   - Show the icons of the drops?
 *   - If not, use the ones below.
 *
 * ---
 *
 * Common Icons
 * 
 *   Common Item Icon:
 *   Common Weapon Icon:
 *   Common Armor Icon:
 *   - What icon do you want to use for common items, weapons, and armors?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Rarity Settings
 * ============================================================================
 *
 * Visual Drop rarities are found in 11 tiers, No Rarity and Rarities 1 through
 * 10. How you use these rarities is up to you, the game dev. However, items of
 * a matching rarity level will display the same tints, durations, and flags.
 * Although more flags can be added later through notetags, matching rarities
 * will exhibit a common ground of flags.
 *
 * ---
 *
 * General
 * 
 *   Show Rarities:
 *   - Show visual effects for different rarities?
 *
 * ---
 *
 * No Rarity and Rarities 1 through 10
 * 
 *   Tint:
 *   - Tone settings for this rarity.
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Duration:
 *   - What duration do you want for this rarity?
 * 
 *   Flags:
 *   - What flags do you want to apply to this rarity?
 *   - Flags:
 *     - Rainbow
 *     - Additive
 *     - Multiply
 *     - Screen
 *     - Bounce Height x%
 *     - Bounce SFX: filename 
 *     - Spawn SFX: filename
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
 * Version 1.07: June 18, 2021
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.06: March 19, 2021
 * * Bug Fixes!
 * ** Console no longer displays debug messages from last version.
 *    Fix made by Irina.
 * 
 * Version 1.05: February 12, 2021
 * * Bug Fixes!
 * ** Opacity Fade Speed Plugin Parameter now allows you to alter the value
 *    up to 255 now. Fix made by Irina.
 * ** EXP Setting 10 and Gold Setting 10 will no longer be hard limited.
 *    Fix made by Irina.
 * 
 * Version 1.04: December 25, 2020
 * * Documentation Update!
 * ** Help file updated for updated features.
 * * Feature Updates!
 * ** Many of the notetags now have a batch variant to add items, weapons, or
 *    armors into the drop pool en masse. Updated by Yanfly.
 * 
 * Version 1.03: November 22, 2020
 * * Compatibility Update!
 * ** Non-conditional drops should be more compatible with other plugins.
 *    Update made by Yanfly.
 * 
 * Version 1.02: November 15, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.01: October 18, 2020
 * * Feature Update!
 * ** Bounce SFX pitch plugin parameter is now uncapped.
 *
 * Version 1.00: October 9, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BonusRewardsClear
 * @text Bonus Rewards: Clear
 * @desc Clears all bonus drops.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BonusExpSet
 * @text Bonus Rewards: Set EXP
 * @desc Determines additional EXP the player will get in battle by this value.
 *
 * @arg value:eval
 * @text EXP
 * @desc Determines additional EXP the player will get in battle by this value.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BonusGoldSet
 * @text Bonus Rewards: Set Gold
 * @desc Determines additional Gold the player will get in battle by this value.
 *
 * @arg value:eval
 * @text Gold
 * @desc Determines additional Gold the player will get in battle by this value.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BonusAddItem
 * @text Bonus Rewards: Add Item
 * @desc Adds the bonus drop the player earns from this battle to have
 * the following item given at a specific quantity.
 *
 * @arg id:num
 * @text Item ID
 * @type item
 * @desc Which item do you wish to give the player?
 * @default 1
 *
 * @arg quantity:eval
 * @text Quantity
 * @desc How many copies of the bonus drop to give the player.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BonusAddWeapon
 * @text Bonus Rewards: Add Weapon
 * @desc Adds the bonus drop the player earns from this battle to have
 * the following weapon given at a specific quantity.
 *
 * @arg id:num
 * @text Weapon ID
 * @type weapon
 * @desc Which weapon do you wish to give the player?
 * @default 1
 *
 * @arg quantity:eval
 * @text Quantity
 * @desc How many copies of the bonus drop to give the player.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BonusAddArmor
 * @text Bonus Rewards: Add Armor
 * @desc Adds the bonus drop the player earns from this battle to have
 * the following armor given at a specific quantity.
 *
 * @arg id:num
 * @text Armor ID
 * @type armor
 * @desc Which armor do you wish to give the player?
 * @default 1
 *
 * @arg quantity:eval
 * @text Quantity
 * @desc How many copies of the bonus drop to give the player.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ForcedRewardsClear
 * @text Forced Rewards: Clear
 * @desc Clears all forced drops.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ForcedExpSet
 * @text Forced Rewards: Set EXP
 * @desc Change the amount of EXP the player will get in battle to this value.
 *
 * @arg value:eval
 * @text EXP
 * @desc Change the amount of EXP the player will get in battle to this value.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ForcedGoldSet
 * @text Forced Rewards: Set Gold
 * @desc Change the amount of Gold the player will get in battle to this value.
 *
 * @arg value:eval
 * @text Gold
 * @desc Change the amount of Gold the player will get in battle to this value.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ForcedAddItem
 * @text Forced Rewards: Add Item
 * @desc Adds the forced drop the player earns from this battle to have
 * the following item given at a specific quantity.
 *
 * @arg id:num
 * @text Item ID
 * @type item
 * @desc Which item do you wish to give the player?
 * @default 1
 *
 * @arg quantity:eval
 * @text Quantity
 * @desc How many copies of the forced drop to give the player.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ForcedAddWeapon
 * @text Forced Rewards: Add Weapon
 * @desc Adds the forced drop the player earns from this battle to have
 * the following weapon given at a specific quantity.
 *
 * @arg id:num
 * @text Weapon ID
 * @type weapon
 * @desc Which weapon do you wish to give the player?
 * @default 1
 *
 * @arg quantity:eval
 * @text Quantity
 * @desc How many copies of the forced drop to give the player.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ForcedAddArmor
 * @text Forced Rewards: Add Armor
 * @desc Adds the forced drop the player earns from this battle to have
 * the following armor given at a specific quantity.
 *
 * @arg id:num
 * @text Armor ID
 * @type armor
 * @desc Which armor do you wish to give the player?
 * @default 1
 *
 * @arg quantity:eval
 * @text Quantity
 * @desc How many copies of the forced drop to give the player.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VisualDropVisible
 * @text Visual Drops: Visibility
 * @desc Sets the visibility of visual drops during battle.
 *
 * @arg Visible:eval
 * @text Visible
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show visual drops during battle?
 * This will be reset at the start of next battle.
 * @default true
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
 * @param Template
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param VisualDrops
 * @text Visual Drops
 *
 * @param General:struct
 * @text General Settings
 * @parent VisualDrops
 * @type struct<General>
 * @desc General settings regarding Visual Drops.
 * @default {"General":"","Enable:eval":"true","resetOnRevive:eval":"true","Position":"","radius:num":"20","radiusPerIcon:num":"5","angle:num":"1800","msDelay:num":"250","yRateFoV:num":"0.44","Bounce":"","duration:num":"60","bounces:num":"10","height:num":"100","bounceReduction:num":"0.75","SFX":"","sfxFilename:str":"Coin","sfxVolume:num":"90","sfxPitch:num":"100","sfxPan:num":"0","Icons":"","iconOffsetRate:num":"-1.75","iconJumpEasing:str":"Linear","Shadow":"","showShadow:eval":"true","shadowFilename:str":"Shadow1","shadowOffsetX:num":"0","shadowOffsetY:num":"8","shadowOpacity:num":"255","Opacity":"","fadeAfterBounce:eval":"false","fadeAfterDelay:num":"2000","opacityFadeOut:num":"8"}
 *
 * @param Exp:struct
 * @text EXP Settings
 * @parent VisualDrops
 * @type struct<Exp>
 * @desc Settings regarding EXP for Visual Drops.
 * @default {"General":"","show:eval":"true","Setting1":"","Value1:num":"1","Icon1:num":"73","Rarity1:num":"0","Setting2":"","Value2:num":"50","Icon2:num":"73","Rarity2:num":"1","Setting3":"","Value3:num":"100","Icon3:num":"89","Rarity3:num":"2","Setting4":"","Value4:num":"500","Icon4:num":"89","Rarity4:num":"3","Setting5":"","Value5:num":"1000","Icon5:num":"88","Rarity5:num":"4","Setting6":"","Value6:num":"2500","Icon6:num":"88","Rarity6:num":"5","Setting7":"","Value7:num":"5000","Icon7:num":"87","Rarity7:num":"6","Setting8":"","Value8:num":"10000","Icon8:num":"87","Rarity8:num":"7","Setting9":"","Value9:num":"25000","Icon9:num":"84","Rarity9:num":"8","Setting10":"","Value10:num":"50000","Icon10:num":"84","Rarity10:num":"9"}
 *
 * @param Gold:struct
 * @text Gold Settings
 * @parent VisualDrops
 * @type struct<Gold>
 * @desc Settings regarding Gold for Visual Drops.
 * @default {"General":"","show:eval":"true","Setting1":"","Value1:num":"1","Icon1:num":"314","Rarity1:num":"0","Setting2":"","Value2:num":"50","Icon2:num":"314","Rarity2:num":"1","Setting3":"","Value3:num":"100","Icon3:num":"196","Rarity3:num":"2","Setting4":"","Value4:num":"500","Icon4:num":"196","Rarity4:num":"3","Setting5":"","Value5:num":"1000","Icon5:num":"313","Rarity5:num":"4","Setting6":"","Value6:num":"5000","Icon6:num":"313","Rarity6:num":"5","Setting7":"","Value7:num":"10000","Icon7:num":"303","Rarity7:num":"6","Setting8":"","Value8:num":"50000","Icon8:num":"303","Rarity8:num":"7","Setting9":"","Value9:num":"100000","Icon9:num":"300","Rarity9:num":"8","Setting10":"","Value10:num":"500000","Icon10:num":"300","Rarity10:num":"9"}
 *
 * @param Drop:struct
 * @text Enemy Drops Settings
 * @parent VisualDrops
 * @type struct<Drop>
 * @desc Settings regarding enemy drops for Visual Drops.
 * @default {"General":"","show:eval":"true","uniqueIcons:eval":"true","CommonIcons":"","commonItemIcon:num":"208","commonWeaponIcon:num":"210","commonArmorsIcon:num":"210"}
 *
 * @param Rarity:struct
 * @text Rarity Settings
 * @parent VisualDrops
 * @type struct<Rarity>
 * @desc Settings regarding enemy drops for Visual Drops.
 * @default {"General":"","show:eval":"true","Setting0":"","Tint0:eval":"[0, 0, 0, 0]","Duration0:num":"180","Flags0:arraystr":"[]","Setting1":"","Tint1:eval":"[0, 30, 60, 20]","Duration1:num":"180","Flags1:arraystr":"[]","Setting2":"","Tint2:eval":"[30, 60, 0, 40]","Duration2:num":"160","Flags2:arraystr":"[]","Setting3":"","Tint3:eval":"[60, 0, 30, 60]","Duration3:num":"140","Flags3:arraystr":"[]","Setting4":"","Tint4:eval":"[0, 60, 60, 80]","Duration4:num":"120","Flags4:arraystr":"[]","Setting5":"","Tint5:eval":"[60, 60, 0, 100]","Duration5:num":"100","Flags5:arraystr":"[]","Setting6":"","Tint6:eval":"[60, 0, 60, 120]","Duration6:num":"80","Flags6:arraystr":"[]","Setting7":"","Tint7:eval":"[0, 0, 60, 140]","Duration7:num":"70","Flags7:arraystr":"[]","Setting8":"","Tint8:eval":"[0, 60, 0, 160]","Duration8:num":"60","Flags8:arraystr":"[]","Setting9":"","Tint9:eval":"[60, 0, 0, 180]","Duration9:num":"50","Flags9:arraystr":"[]","Setting10":"","Tint10:eval":"[0, 0, 0, 0]","Duration10:num":"40","Flags10:arraystr":"[\"Rainbow\"]","SpecialEffects":"","RainbowHueSpeed:num":"4"}
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
 * @param General
 *
 * @param Enable:eval
 * @text Enable Visual Drops?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable Visual Drops?
 * You know you want to.
 * @default true
 *
 * @param resetOnRevive:eval
 * @text Reviving Resets Drops 
 * @parent General
 * @type boolean
 * @on Resets
 * @off Already Set
 * @desc Do reviving enemies reset drops?
 * @default true
 * 
 * @param Position
 *
 * @param radius:num
 * @text Base Radius
 * @parent Position
 * @type number
 * @min 1
 * @desc Base radius amount for drops.
 * @default 20
 *
 * @param radiusPerIcon:num
 * @text +Radius Per Drop
 * @parent Position
 * @type number
 * @min 0
 * @desc Increase radius by this much per extra drop.
 * @default 5
 *
 * @param angle:num
 * @text Spin Degrees
 * @parent Position
 * @type number
 * @min 0
 * @desc How many degrees do you want the icon to spin in its
 * largest bounce? Use 0 for no spin.
 * @default 1800
 *
 * @param msDelay:num
 * @text Delay Between Drops
 * @parent Position
 * @type number
 * @min 0
 * @desc How many milliseconds to delay the appearance of each
 * visual drop? Use 0 for no delay.
 * @default 250
 *
 * @param yRateFoV:num
 * @text Field of View Y
 * @parent Position
 * @desc What's the distortion rate for the field of view
 * for the item positioning distribution.
 * @default 0.44
 * 
 * @param Bounce
 *
 * @param duration:num
 * @text Bounce Duration
 * @parent Bounce
 * @type number
 * @min 1
 * @desc Duration of the highest bounce.
 * @default 60
 *
 * @param bounces:num
 * @text Bounce Total
 * @parent Bounce
 * @type number
 * @min 0
 * @desc How many times do you want visual drops to bounce?
 * Use 0 for no bounces.
 * @default 10
 *
 * @param height:num
 * @text Bounce Height
 * @parent Bounce
 * @type number
 * @min 0
 * @desc The maximum height for the visual drops to fly out at.
 * This will decrease with each bounce.
 * @default 100
 *
 * @param bounceReduction:num
 * @text Bounce Reduction
 * @parent Bounce
 * @desc The rate at which each bounce reduces the duration
 * and height by.
 * @default 0.75
 * 
 * @param SFX
 * @text Bounce SFX
 *
 * @param sfxFilename:str
 * @text Filename
 * @parent SFX
 * @type file
 * @dir audio/se/
 * @desc Filename of the sound effect played.
 * @default Coin
 *
 * @param sfxVolume:num
 * @text Volume
 * @parent SFX
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param sfxPitch:num
 * @text Pitch
 * @parent SFX
 * @type number
 * @max 100
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param sfxPan:num
 * @text Pan
 * @parent SFX
 * @desc Pan of the sound effect played.
 * @default 0
 * 
 * @param Icons
 *
 * @param iconOffsetRate:num
 * @text Offset Y Rate
 * @parent Icons
 * @desc At which rate do you want to offset the visual drop
 * icons off the ground by?
 * @default -1.75
 *
 * @param iconJumpEasing:str
 * @text Movement Easing
 * @parent Icons
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
 * Requires VisuMZ_0_CoreEngine.
 * @default Linear
 * 
 * @param Shadow
 *
 * @param showShadow:eval
 * @text Show Shadow
 * @parent Shadow
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the shadow sprite?
 * @default true
 *
 * @param shadowFilename:str
 * @text Shadow Filename
 * @parent Shadow
 * @type file
 * @dir img/system/
 * @desc Filename used for the visual drop shadow.
 * @default Shadow1
 *
 * @param shadowOffsetX:num
 * @text Shadow Offset X
 * @parent Shadow
 * @desc Offset the shadow sprite X by this amount.
 * Negative numbers go left. Positive numbers go right.
 * @default 0
 *
 * @param shadowOffsetY:num
 * @text Shadow Offset Y
 * @parent Shadow
 * @desc Offset the shadow sprite Y by this amount.
 * Negative numbers go up. Positive numbers go down.
 * @default 8
 *
 * @param shadowOpacity:num
 * @text Shadow Opacity
 * @parent Shadow
 * @type number
 * @min 0
 * @max 255
 * @desc Opacity level of the shadow.
 * 0 for transparent. 255 for opaque.
 * @default 255
 * 
 * @param Opacity
 *
 * @param fadeAfterBounce:eval
 * @text Fade After Bounce
 * @parent Opacity
 * @type boolean
 * @on Fade
 * @off Keep
 * @desc Fade out the visual drops after they finish bouncing?
 * @default false
 *
 * @param fadeAfterDelay:num
 * @text Fade After Delay
 * @parent Opacity
 * @type number
 * @min 0
 * @desc How many milliseconds to delay the fading by if the
 * above option is selected?
 * @default 2000
 *
 * @param opacityFadeOut:num
 * @text Opacity Fade Speed
 * @parent Opacity
 * @type number
 * @max 255
 * @desc What speed should the opacity level fade out by?
 * Higher numbers are faster.
 * @default 8
 *
 */
/* ----------------------------------------------------------------------------
 * EXP Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Exp:
 * 
 * @param General
 *
 * @param show:eval
 * @text Show EXP Drop
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show visual drops for EXP?
 * @default true
 * 
 * @param Setting1
 * @text Setting 1
 *
 * @param Value1:num
 * @text EXP Value
 * @parent Setting1
 * @type number
 * @desc How much EXP minimum to use this setting?
 * @default 1
 *
 * @param Icon1:num
 * @text Icon
 * @parent Setting1
 * @desc Which icon to use for this setting?
 * @default 73
 *
 * @param Rarity1:num
 * @text Rarity
 * @parent Setting1
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 0
 * 
 * @param Setting2
 * @text Setting 2
 *
 * @param Value2:num
 * @text EXP Value
 * @parent Setting2
 * @type number
 * @desc How much EXP minimum to use this setting?
 * @default 50
 *
 * @param Icon2:num
 * @text Icon
 * @parent Setting2
 * @desc Which icon to use for this setting?
 * @default 73
 *
 * @param Rarity2:num
 * @text Rarity
 * @parent Setting2
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 1
 * 
 * @param Setting3
 * @text Setting 3
 *
 * @param Value3:num
 * @text EXP Value
 * @parent Setting3
 * @type number
 * @desc How much EXP minimum to use this setting?
 * @default 100
 *
 * @param Icon3:num
 * @text Icon
 * @parent Setting3
 * @desc Which icon to use for this setting?
 * @default 89
 *
 * @param Rarity3:num
 * @text Rarity
 * @parent Setting3
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 2
 * 
 * @param Setting4
 * @text Setting 4
 *
 * @param Value4:num
 * @text EXP Value
 * @parent Setting4
 * @type number
 * @desc How much EXP minimum to use this setting?
 * @default 500
 *
 * @param Icon4:num
 * @text Icon
 * @parent Setting4
 * @desc Which icon to use for this setting?
 * @default 89
 *
 * @param Rarity4:num
 * @text Rarity
 * @parent Setting4
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 3
 * 
 * @param Setting5
 * @text Setting 5
 *
 * @param Value5:num
 * @text EXP Value
 * @parent Setting5
 * @type number
 * @desc How much EXP minimum to use this setting?
 * @default 1000
 *
 * @param Icon5:num
 * @text Icon
 * @parent Setting5
 * @desc Which icon to use for this setting?
 * @default 88
 *
 * @param Rarity5:num
 * @text Rarity
 * @parent Setting5
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 4
 * 
 * @param Setting6
 * @text Setting 6
 *
 * @param Value6:num
 * @text EXP Value
 * @parent Setting6
 * @type number
 * @desc How much EXP minimum to use this setting?
 * @default 2500
 *
 * @param Icon6:num
 * @text Icon
 * @parent Setting6
 * @desc Which icon to use for this setting?
 * @default 88
 *
 * @param Rarity6:num
 * @text Rarity
 * @parent Setting6
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 5
 * 
 * @param Setting7
 * @text Setting 7
 *
 * @param Value7:num
 * @text EXP Value
 * @parent Setting7
 * @type number
 * @desc How much EXP minimum to use this setting?
 * @default 5000
 *
 * @param Icon7:num
 * @text Icon
 * @parent Setting7
 * @desc Which icon to use for this setting?
 * @default 87
 *
 * @param Rarity7:num
 * @text Rarity
 * @parent Setting7
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 6
 * 
 * @param Setting8
 * @text Setting 8
 *
 * @param Value8:num
 * @text EXP Value
 * @parent Setting8
 * @type number
 * @desc How much EXP minimum to use this setting?
 * @default 10000
 *
 * @param Icon8:num
 * @text Icon
 * @parent Setting8
 * @desc Which icon to use for this setting?
 * @default 87
 *
 * @param Rarity8:num
 * @text Rarity
 * @parent Setting8
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 7
 * 
 * @param Setting9
 * @text Setting 9
 *
 * @param Value9:num
 * @text EXP Value
 * @parent Setting9
 * @type number
 * @desc How much EXP minimum to use this setting?
 * @default 25000
 *
 * @param Icon9:num
 * @text Icon
 * @parent Setting9
 * @desc Which icon to use for this setting?
 * @default 84
 *
 * @param Rarity9:num
 * @text Rarity
 * @parent Setting9
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 8
 * 
 * @param Setting10
 * @text Setting 10
 *
 * @param Value10:num
 * @text EXP Value
 * @parent Setting10
 * @type number
 * @desc How much EXP minimum to use this setting?
 * @default 50000
 *
 * @param Icon10:num
 * @text Icon
 * @parent Setting10
 * @desc Which icon to use for this setting?
 * @default 84
 *
 * @param Rarity10:num
 * @text Rarity
 * @parent Setting10
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 9
 *
 */
/* ----------------------------------------------------------------------------
 * Gold Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Gold:
 *
 * @param General
 *
 * @param show:eval
 * @text Show Gold Drop
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show visual drops for Gold?
 * @default true
 * 
 * @param Setting1
 * @text Setting 1
 *
 * @param Value1:num
 * @text Gold Value
 * @parent Setting1
 * @type number
 * @desc How much Gold minimum to use this setting?
 * @default 1
 *
 * @param Icon1:num
 * @text Icon
 * @parent Setting1
 * @desc Which icon to use for this setting?
 * @default 314
 *
 * @param Rarity1:num
 * @text Rarity
 * @parent Setting1
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 0
 * 
 * @param Setting2
 * @text Setting 2
 *
 * @param Value2:num
 * @text Gold Value
 * @parent Setting2
 * @type number
 * @desc How much Gold minimum to use this setting?
 * @default 50
 *
 * @param Icon2:num
 * @text Icon
 * @parent Setting2
 * @desc Which icon to use for this setting?
 * @default 314
 *
 * @param Rarity2:num
 * @text Rarity
 * @parent Setting2
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 1
 * 
 * @param Setting3
 * @text Setting 3
 *
 * @param Value3:num
 * @text Gold Value
 * @parent Setting3
 * @type number
 * @desc How much Gold minimum to use this setting?
 * @default 100
 *
 * @param Icon3:num
 * @text Icon
 * @parent Setting3
 * @desc Which icon to use for this setting?
 * @default 196
 *
 * @param Rarity3:num
 * @text Rarity
 * @parent Setting3
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 2
 * 
 * @param Setting4
 * @text Setting 4
 *
 * @param Value4:num
 * @text Gold Value
 * @parent Setting4
 * @type number
 * @desc How much Gold minimum to use this setting?
 * @default 500
 *
 * @param Icon4:num
 * @text Icon
 * @parent Setting4
 * @desc Which icon to use for this setting?
 * @default 196
 *
 * @param Rarity4:num
 * @text Rarity
 * @parent Setting4
 * @type number
 * @desc Which rarity to use for this setting?
 * @default 3
 * 
 * @param Setting5
 * @text Setting 5
 *
 * @param Value5:num
 * @text Gold Value
 * @parent Setting5
 * @type number
 * @desc How much Gold minimum to use this setting?
 * @default 1000
 *
 * @param Icon5:num
 * @text Icon
 * @parent Setting5
 * @desc Which icon to use for this setting?
 * @default 313
 *
 * @param Rarity5:num
 * @text Rarity
 * @parent Setting5
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 4
 * 
 * @param Setting6
 * @text Setting 6
 *
 * @param Value6:num
 * @text Gold Value
 * @parent Setting6
 * @type number
 * @desc How much Gold minimum to use this setting?
 * @default 5000
 *
 * @param Icon6:num
 * @text Icon
 * @parent Setting6
 * @desc Which icon to use for this setting?
 * @default 313
 *
 * @param Rarity6:num
 * @text Rarity
 * @parent Setting6
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 5
 * 
 * @param Setting7
 * @text Setting 7
 *
 * @param Value7:num
 * @text Gold Value
 * @parent Setting7
 * @type number
 * @desc How much Gold minimum to use this setting?
 * @default 10000
 *
 * @param Icon7:num
 * @text Icon
 * @parent Setting7
 * @desc Which icon to use for this setting?
 * @default 303
 *
 * @param Rarity7:num
 * @text Rarity
 * @parent Setting7
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 6
 * 
 * @param Setting8
 * @text Setting 8
 *
 * @param Value8:num
 * @text Gold Value
 * @parent Setting8
 * @type number
 * @desc How much Gold minimum to use this setting?
 * @default 50000
 *
 * @param Icon8:num
 * @text Icon
 * @parent Setting8
 * @desc Which icon to use for this setting?
 * @default 303
 *
 * @param Rarity8:num
 * @text Rarity
 * @parent Setting8
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 7
 * 
 * @param Setting9
 * @text Setting 9
 *
 * @param Value9:num
 * @text Gold Value
 * @parent Setting9
 * @type number
 * @desc How much Gold minimum to use this setting?
 * @default 100000
 *
 * @param Icon9:num
 * @text Icon
 * @parent Setting9
 * @desc Which icon to use for this setting?
 * @default 300
 *
 * @param Rarity9:num
 * @text Rarity
 * @parent Setting9
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 8
 * 
 * @param Setting10
 * @text Setting 10
 *
 * @param Value10:num
 * @text Gold Value
 * @parent Setting10
 * @type number
 * @desc How much Gold minimum to use this setting?
 * @default 500000
 *
 * @param Icon10:num
 * @text Icon
 * @parent Setting10
 * @desc Which icon to use for this setting?
 * @default 300
 *
 * @param Rarity10:num
 * @text Rarity
 * @parent Setting10
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 9
 *
 */
/* ----------------------------------------------------------------------------
 * Drop Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Drop:
 *
 * @param General
 *
 * @param show:eval
 * @text Show Enemy Drops
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show visual drops for enemy drops?
 * @default true
 *
 * @param uniqueIcons:eval
 * @text Use Unique Icons
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the icons of the drops?
 * If not, use the ones below.
 * @default true
 *
 * @param CommonIcons
 * @text Common Icons
 *
 * @param commonItemIcon:num
 * @text Common Item Icon
 * @parent CommonIcons
 * @desc What icon do you want to use for common items?
 * @default 208
 *
 * @param commonWeaponIcon:num
 * @text Common Weapon Icon
 * @parent CommonIcons
 * @desc What icon do you want to use for common weapons?
 * @default 210
 *
 * @param commonArmorsIcon:num
 * @text Common Armor Icon
 * @parent CommonIcons
 * @desc What icon do you want to use for common armors?
 * @default 210
 *
 */
/* ----------------------------------------------------------------------------
 * Rarity Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Rarity:
 *
 * @param General
 *
 * @param show:eval
 * @text Show Rarities
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show visual effects for different rarities?
 * @default true
 * 
 * @param Setting0
 * @text No Rarity
 *
 * @param Tint0:eval
 * @text Tint
 * @parent Setting0
 * @desc Tone settings for this rarity.
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 *
 * @param Duration0:num
 * @text Duration
 * @parent Setting0
 * @type number
 * @min 1
 * @desc What duration do you want for this rarity?
 * @default 180
 *
 * @param Flags0:arraystr
 * @text Flags
 * @parent Setting0
 * @type combo[]
 * @option Rainbow
 * @option Additive
 * @option Multiply
 * @option Screen
 * @option Bounce Height x%
 * @option Spawn SFX: filename
 * @desc What flags do you want to apply to this rarity?
 * @default []
 * 
 * @param Setting1
 * @text Rarity 1
 *
 * @param Tint1:eval
 * @text Tint
 * @parent Setting1
 * @desc Tone settings for this rarity.
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 30, 60, 20]
 *
 * @param Duration1:num
 * @text Duration
 * @parent Setting1
 * @type number
 * @min 1
 * @desc What duration do you want for this rarity?
 * @default 180
 *
 * @param Flags1:arraystr
 * @text Flags
 * @parent Setting1
 * @type combo[]
 * @option Rainbow
 * @option Additive
 * @option Multiply
 * @option Screen
 * @option Bounce Height x%
 * @option Spawn SFX: filename
 * @desc What flags do you want to apply to this rarity?
 * @default []
 * 
 * @param Setting2
 * @text Rarity 2
 *
 * @param Tint2:eval
 * @text Tint
 * @parent Setting2
 * @desc Tone settings for this rarity.
 * Format: [Red, Green, Blue, Gray]
 * @default [30, 60, 0, 40]
 *
 * @param Duration2:num
 * @text Duration
 * @parent Setting2
 * @type number
 * @min 1
 * @desc What duration do you want for this rarity?
 * @default 160
 *
 * @param Flags2:arraystr
 * @text Flags
 * @parent Setting2
 * @type combo[]
 * @option Rainbow
 * @option Additive
 * @option Multiply
 * @option Screen
 * @option Bounce Height x%
 * @option Spawn SFX: filename
 * @desc What flags do you want to apply to this rarity?
 * @default []
 * 
 * @param Setting3
 * @text Rarity 3
 *
 * @param Tint3:eval
 * @text Tint
 * @parent Setting3
 * @desc Tone settings for this rarity.
 * Format: [Red, Green, Blue, Gray]
 * @default [60, 0, 30, 60]
 *
 * @param Duration3:num
 * @text Duration
 * @parent Setting3
 * @type number
 * @min 1
 * @desc What duration do you want for this rarity?
 * @default 140
 *
 * @param Flags3:arraystr
 * @text Flags
 * @parent Setting3
 * @type combo[]
 * @option Rainbow
 * @option Additive
 * @option Multiply
 * @option Screen
 * @option Bounce Height x%
 * @option Spawn SFX: filename
 * @desc What flags do you want to apply to this rarity?
 * @default []
 * 
 * @param Setting4
 * @text Rarity 4
 *
 * @param Tint4:eval
 * @text Tint
 * @parent Setting4
 * @desc Tone settings for this rarity.
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 60, 60, 80]
 *
 * @param Duration4:num
 * @text Duration
 * @parent Setting4
 * @type number
 * @min 1
 * @desc What duration do you want for this rarity?
 * @default 120
 *
 * @param Flags4:arraystr
 * @text Flags
 * @parent Setting4
 * @type combo[]
 * @option Rainbow
 * @option Additive
 * @option Multiply
 * @option Screen
 * @option Bounce Height x%
 * @option Spawn SFX: filename
 * @desc What flags do you want to apply to this rarity?
 * @default []
 * 
 * @param Setting5
 * @text Rarity 5
 *
 * @param Tint5:eval
 * @text Tint
 * @parent Setting5
 * @desc Tone settings for this rarity.
 * Format: [Red, Green, Blue, Gray]
 * @default [60, 60, 0, 100]
 *
 * @param Duration5:num
 * @text Duration
 * @parent Setting5
 * @type number
 * @min 1
 * @desc What duration do you want for this rarity?
 * @default 100
 *
 * @param Flags5:arraystr
 * @text Flags
 * @parent Setting5
 * @type combo[]
 * @option Rainbow
 * @option Additive
 * @option Multiply
 * @option Screen
 * @option Bounce Height x%
 * @option Spawn SFX: filename
 * @desc What flags do you want to apply to this rarity?
 * @default []
 * 
 * @param Setting6
 * @text Rarity 6
 *
 * @param Tint6:eval
 * @text Tint
 * @parent Setting6
 * @desc Tone settings for this rarity.
 * Format: [Red, Green, Blue, Gray]
 * @default [60, 0, 60, 120]
 *
 * @param Duration6:num
 * @text Duration
 * @parent Setting6
 * @type number
 * @min 1
 * @desc What duration do you want for this rarity?
 * @default 80
 *
 * @param Flags6:arraystr
 * @text Flags
 * @parent Setting6
 * @type combo[]
 * @option Rainbow
 * @option Additive
 * @option Multiply
 * @option Screen
 * @option Bounce Height x%
 * @option Spawn SFX: filename
 * @desc What flags do you want to apply to this rarity?
 * @default []
 * 
 * @param Setting7
 * @text Rarity 7
 *
 * @param Tint7:eval
 * @text Tint
 * @parent Setting7
 * @desc Tone settings for this rarity.
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 60, 140]
 *
 * @param Duration7:num
 * @text Duration
 * @parent Setting7
 * @type number
 * @min 1
 * @desc What duration do you want for this rarity?
 * @default 70
 *
 * @param Flags7:arraystr
 * @text Flags
 * @parent Setting7
 * @type combo[]
 * @option Rainbow
 * @option Additive
 * @option Multiply
 * @option Screen
 * @option Bounce Height x%
 * @option Spawn SFX: filename
 * @desc What flags do you want to apply to this rarity?
 * @default []
 * 
 * @param Setting8
 * @text Rarity 8
 *
 * @param Tint8:eval
 * @text Tint
 * @parent Setting8
 * @desc Tone settings for this rarity.
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 60, 0, 160]
 *
 * @param Duration8:num
 * @text Duration
 * @parent Setting8
 * @type number
 * @min 1
 * @desc What duration do you want for this rarity?
 * @default 60
 *
 * @param Flags8:arraystr
 * @text Flags
 * @parent Setting8
 * @type combo[]
 * @option Rainbow
 * @option Additive
 * @option Multiply
 * @option Screen
 * @option Bounce Height x%
 * @option Spawn SFX: filename
 * @desc What flags do you want to apply to this rarity?
 * @default []
 * 
 * @param Setting9
 * @text Rarity 9
 *
 * @param Tint9:eval
 * @text Tint
 * @parent Setting9
 * @desc Tone settings for this rarity.
 * Format: [Red, Green, Blue, Gray]
 * @default [60, 0, 0, 180]
 *
 * @param Duration9:num
 * @text Duration
 * @parent Setting9
 * @type number
 * @min 1
 * @desc What duration do you want for this rarity?
 * @default 50
 *
 * @param Flags9:arraystr
 * @text Flags
 * @parent Setting9
 * @type combo[]
 * @option Rainbow
 * @option Additive
 * @option Multiply
 * @option Screen
 * @option Bounce Height x%
 * @option Spawn SFX: filename
 * @desc What flags do you want to apply to this rarity?
 * @default []
 * 
 * @param Setting10
 * @text Rarity 10
 *
 * @param Tint10:eval
 * @text Tint
 * @parent Setting10
 * @desc Tone settings for this rarity.
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 *
 * @param Duration10:num
 * @text Duration
 * @parent Setting10
 * @type number
 * @min 1
 * @desc What duration do you want for this rarity?
 * @default 40
 *
 * @param Flags10:arraystr
 * @text Flags
 * @parent Setting10
 * @type combo[]
 * @option Rainbow
 * @option Additive
 * @option Multiply
 * @option Screen
 * @option Bounce Height x%
 * @option Spawn SFX: filename
 * @desc What flags do you want to apply to this rarity?
 * @default ["Rainbow"]
 * 
 * @param SpecialEffects
 * @text Special Effects
 *
 * @param RainbowHueSpeed:num
 * @text Rainbow Hue Speed
 * @parent SpecialEffects
 * @type number
 * @min 1
 * @desc How fast do you want the Rainbow effect to change hue?
 * @default 4
 *
 */
//=============================================================================

const _0x45f7=['targetY','uLVVx','addChild','version','addVisualDrops','isDead','bounceSFX','STATE','ePcss','NpRdu','_visualDrops','lastStruckState','jumpHeight','fdBtf','_forcedRewards','Tint%1','resetVisualDrops','RainbowHueSpeed','Game_Troop_goldTotal','BonusExpSet','toLowerCase','setup','Ynpco','updateOpacity','mwKom','pwoYl','dropItems','BonusAddItem','STRUCT','createShadowSprite','goldRate','RAINBOW','General','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','gold','_baseY','yxhtU','addExtraEnemyDropsSingles','false','JBfGJ','slice','max','description','CdXFJ','Drop','calculatePosition','ADDITIVE','shadowOffsetY','parse','checkValidDrop','lNZRq','DVZFL','wUGwj','Gold','_elementIDs','2DfnCDK','VisuMZ_1_BattleCore','min','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','pow','charAt','convertConditionToCode','Enable','applyEasing','_battlerContainer','playSe','rINTm','PZAOF','getItemIdWithName','iconWidth','quantity','pphJH','expRate','timesStruckState','30OfxCdQ','JSON','pEvns','match','hue','findTargetDropSprite','xUHkF','_stypeIDs','VisualDropVisible','TiKYO','updateFlags','concat','rotationConstant','angle','CkcSg','fPQYL','attackElements','note','iconIndex','enemy','BattleManager_initMembers','getStypeIdWithName','Item','startFadeOut','2mnZzfP','Game_Troop_expTotal','process_VisuMZ_ExtraEnemyDrops_Notetags','WEAPON','ConvertParams','goldTotal','includes','setFlags','Exp','getArmorIdWithName','SType','floor','radius','\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Arguments\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20enemy\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20let\x20drops\x20=\x20arguments[0];\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20Array\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20drops;\x0a\x20\x20\x20\x20','process_VisuMZ_ExtraEnemyDrops_JS_Notetags','round','startSpecialSFX','ExtraEnemyDrops','SDwby','createConditionalDropsTrackedData','oIFXa','lastStruckItem','Value%1','_shadowSprite','_itemIDs','_weaponIDs','none','_baseX','UBMOC','elementId','_armorIDs','format','addExtraEnemyDropsConditional','getElementIdWithName','getItemDropIcons','opacity','VgOGB','bounceReduction','updateRotation','htOAB','ARRAYEVAL','name','yRateFoV','SCREEN','ceLpx','NxHBy','setColorTone','_rotationConstant','hsFZA','level','sfxVolume','updateFlagData','deathStateId','hTsyc','SPAWN\x20SFX:\x20%1','timesStruckElement','eTegN','_spriteset','ApplyEasing','CIOqs','turnCount','Flags0','Game_Enemy_gold','applyItemUserEffect','value','clearForcedRewards','createInitialPosition','update','skillTypes','1cmbDrB','loadSystem','parameters','registerCommand','addNewState','SKILLS','deadMembers','addBonusWeaponDrop','iNfhi','Game_BattlerBase_addNewState','remove','call','updateJumpHeight','Visible','dataId','Rarity%1','iWyju','GLimF','ARMORS','fTqfU','registerDeathTurn','ARRAYSTRUCT','applyTimesStruck','create','BOUNCE\x20SFX:\x20%1','flags','exp','trim','eraseState','deathTurn','Game_Enemy_setup','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','bitmap','399701XTumFx','OrLXs','HjxzG','sort','clear','true','blendMode','Game_Troop_clear','sfxPan','isSkill','154810dxxImh','439967bKslwO','setTargetDestination','qjwAG','setFrame','commonWeaponIcon','shadowOpacity','setTintInformation','rarityFrames','createJS','getStateIdWithName','createChildren','addBonusArmorDrop','sDoxI','qiwfF','createLowerLayer','makeDropItems','timesStruckSType','calculateJumpHeight','kGdBk','duration','Settings','kMANw','item','length','8551PwqPVU','addTimesStruck','addForcedWeaponDrop','_iconSprite','opacityRate','LiMIH','Spriteset_Battle_createLowerLayer','rarityDuration','getDatabaseItem','_bonusRewards','denominator','updateDuration','_visualDropsVisible','gQHDi','qYLBZ','TuxxZ','bind','setForcedExp','XDPtZ','replace','subject','XffkE','status','_conditionalDropsTrackedData','baseX','createVisualDrops','fadeAfterDelay','onDatabaseLoaded','resetOnRevive','ForcedExpSet','toUpperCase','shadowOffsetX','hifDW','Game_Enemy_exp','showShadow','dropItemRate','ParseAllNotetags','1346173RgWdPm','addBonusItemDrop','bounces','random','addExtraEnemyDrops','ParseEnemyNotetags','process_VisuMZ_ExtraEnemyDrops_Drops_Notetags','opacityFadeOut','isStateAffected','_skillIDs','addForcedArmorDrop','createIconSprite','fnXPv','OcqsN','filter','constructor','TMkiV','_scene','lastStruck%1','rHFgP','Scene_Boot_onDatabaseLoaded','meetsExtraEnemyDropsCondition','wpheB','32307DqmWCp','vLCua','Linear','shadowFilename','timesStruckSkills','push','vrPkk','BojeJ','ISXFE','AnTgW','getExpGoldDropIcon','isItem','fadeAfterBounce','BOUNCE\x20HEIGHT\x20%1%','isWeapon','targetOpacity','Duration0','iconHeight','createSprites','BonusAddWeapon','expTotal','battler','VisuMZ_0_CoreEngine','ITEMS','isAlive','addForcedItemDrop','sortDrops','lastStruckElement','STATES','timesStruckItems','opacityModifier','show','lastStruckType','tIwOe','State','setForcedGold','targetX','GVCRM','STYPE','ForcedAddArmor','restoreVisualDrops','Game_Enemy_makeDropItems','amrgv','getDatabase','getSkillIdWithName','eRMke','addExtraEnemyDropsBatch','IconSet','cJmpp','elements','QkgPy','createDrops','timesStruckSkill','return\x200','AWZZN','timesStruckStates','prototype','GeLXy','Duration%1','getDatabaseKind','_data','isSceneBattle','TintDuration0','wLNIC','sfxPitch','setBonusExp','hasForcedDrops','ZXuVY','Skill','Game_Battler_onBattleStart','shift','commonArmorsIcon','Tint0','RPLRu','mjcEo','rarityTint','makeDeepCopy','ARMOR','exit','lastStruckSType','VisualDrops','RzPCb','updateTint','JZYFP','getWeaponIdWithName','ITEM','kind','baseY','RzPPV','battleMembers','sGCla','getDatabaseItemID','anchor','updatePosition','WEAPONS','cos','SHori','clearBonusRewards','HlTjY','stypeId','timesStruckSTypes','onBattleStart','_stateIDs','timesStruckElements','60591nuUPRE','YXwzR','isArmor','ELEMENT','Flags%1','split','clamp','sfxFilename','Game_Troop_makeDropItems','setBonusGold','blVAg','Game_BattlerBase_eraseState','map','qcmhb','iconOffsetRate','SKILL','Game_Action_applyItemUserEffect','ARRAYFUNC','FuaVx','numItems','height','isEnemy','_visualDropSprites','drops','initMembers','msDelay','children','initialize','removeVisualDrops','getConditionalDropsTrackedData','Rarity','timesStruck%1','iconJumpEasing','MULTIPLY','Element','IstqC','bTakE'];function _0x1c07(_0x4f5786,_0x3df802){return _0x1c07=function(_0x45f748,_0x1c072c){_0x45f748=_0x45f748-0x18b;let _0x3b034b=_0x45f7[_0x45f748];return _0x3b034b;},_0x1c07(_0x4f5786,_0x3df802);}const _0x22aba5=_0x1c07;(function(_0x511a9f,_0x15e0ca){const _0x1ce31c=_0x1c07;while(!![]){try{const _0x44a498=-parseInt(_0x1ce31c(0x1a1))*-parseInt(_0x1ce31c(0x290))+-parseInt(_0x1ce31c(0x319))*parseInt(_0x1ce31c(0x278))+-parseInt(_0x1ce31c(0x2d5))*-parseInt(_0x1ce31c(0x300))+parseInt(_0x1ce31c(0x265))*-parseInt(_0x1ce31c(0x209))+-parseInt(_0x1ce31c(0x2f6))+-parseInt(_0x1ce31c(0x301))+parseInt(_0x1ce31c(0x33e));if(_0x44a498===_0x15e0ca)break;else _0x511a9f['push'](_0x511a9f['shift']());}catch(_0x2e0d17){_0x511a9f['push'](_0x511a9f['shift']());}}}(_0x45f7,0x55039));var label=_0x22aba5(0x2a1),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x22aba5(0x198)](function(_0x20d60c){const _0x34e981=_0x22aba5;return _0x20d60c[_0x34e981(0x32f)]&&_0x20d60c[_0x34e981(0x258)]['includes']('['+label+']');})[0x0];VisuMZ[label][_0x22aba5(0x315)]=VisuMZ[label][_0x22aba5(0x315)]||{},VisuMZ[_0x22aba5(0x294)]=function(_0x4b77b8,_0x11fd24){const _0x105cac=_0x22aba5;for(const _0x69d5d in _0x11fd24){if(_0x69d5d[_0x105cac(0x27b)](/(.*):(.*)/i)){const _0x475a39=String(RegExp['$1']),_0x23c2a6=String(RegExp['$2'])['toUpperCase']()[_0x105cac(0x2f0)]();let _0x5b8743,_0x423dca,_0x112149;switch(_0x23c2a6){case'NUM':_0x5b8743=_0x11fd24[_0x69d5d]!==''?Number(_0x11fd24[_0x69d5d]):0x0;break;case'ARRAYNUM':_0x423dca=_0x11fd24[_0x69d5d]!==''?JSON['parse'](_0x11fd24[_0x69d5d]):[],_0x5b8743=_0x423dca[_0x105cac(0x215)](_0x43c26d=>Number(_0x43c26d));break;case'EVAL':_0x5b8743=_0x11fd24[_0x69d5d]!==''?eval(_0x11fd24[_0x69d5d]):null;break;case _0x105cac(0x2b8):_0x423dca=_0x11fd24[_0x69d5d]!==''?JSON['parse'](_0x11fd24[_0x69d5d]):[],_0x5b8743=_0x423dca[_0x105cac(0x215)](_0x55771a=>eval(_0x55771a));break;case _0x105cac(0x279):_0x5b8743=_0x11fd24[_0x69d5d]!==''?JSON[_0x105cac(0x25e)](_0x11fd24[_0x69d5d]):'';break;case'ARRAYJSON':_0x423dca=_0x11fd24[_0x69d5d]!==''?JSON[_0x105cac(0x25e)](_0x11fd24[_0x69d5d]):[],_0x5b8743=_0x423dca['map'](_0x106a1b=>JSON[_0x105cac(0x25e)](_0x106a1b));break;case'FUNC':_0x5b8743=_0x11fd24[_0x69d5d]!==''?new Function(JSON[_0x105cac(0x25e)](_0x11fd24[_0x69d5d])):new Function(_0x105cac(0x1d6));break;case _0x105cac(0x21a):_0x423dca=_0x11fd24[_0x69d5d]!==''?JSON[_0x105cac(0x25e)](_0x11fd24[_0x69d5d]):[],_0x5b8743=_0x423dca[_0x105cac(0x215)](_0x378ac6=>new Function(JSON['parse'](_0x378ac6)));break;case'STR':_0x5b8743=_0x11fd24[_0x69d5d]!==''?String(_0x11fd24[_0x69d5d]):'';break;case'ARRAYSTR':_0x423dca=_0x11fd24[_0x69d5d]!==''?JSON[_0x105cac(0x25e)](_0x11fd24[_0x69d5d]):[],_0x5b8743=_0x423dca['map'](_0x54c01e=>String(_0x54c01e));break;case _0x105cac(0x24a):_0x112149=_0x11fd24[_0x69d5d]!==''?JSON[_0x105cac(0x25e)](_0x11fd24[_0x69d5d]):{},_0x5b8743=VisuMZ['ConvertParams']({},_0x112149);break;case _0x105cac(0x2ea):_0x423dca=_0x11fd24[_0x69d5d]!==''?JSON['parse'](_0x11fd24[_0x69d5d]):[],_0x5b8743=_0x423dca[_0x105cac(0x215)](_0x28bc66=>VisuMZ['ConvertParams']({},JSON[_0x105cac(0x25e)](_0x28bc66)));break;default:continue;}_0x4b77b8[_0x475a39]=_0x5b8743;}}return _0x4b77b8;},(_0xe88994=>{const _0x16ac35=_0x22aba5,_0x5956e1=_0xe88994[_0x16ac35(0x2b9)];for(const _0x8e5f10 of dependencies){if(_0x16ac35(0x1d1)!==_0x16ac35(0x1d1))this[_0x16ac35(0x31c)]['angle']=0x0;else{if(!Imported[_0x8e5f10]){alert(_0x16ac35(0x268)[_0x16ac35(0x2af)](_0x5956e1,_0x8e5f10)),SceneManager[_0x16ac35(0x1ef)]();break;}}}const _0x4517d4=_0xe88994[_0x16ac35(0x258)];if(_0x4517d4[_0x16ac35(0x27b)](/\[Version[ ](.*?)\]/i)){if(_0x16ac35(0x22c)===_0x16ac35(0x22c)){const _0x288da2=Number(RegExp['$1']);if(_0x288da2!==VisuMZ[label][_0x16ac35(0x231)]){if('ZJqJD'==='ZJqJD')alert(_0x16ac35(0x24f)['format'](_0x5956e1,_0x288da2)),SceneManager['exit']();else{const _0x3ca3a5=this[_0x16ac35(0x28b)]()['id'];if(!_0x6701f9[_0x16ac35(0x2a1)]['JS'][_0x3ca3a5])return _0x1e0239;return _0x1e5f48['ExtraEnemyDrops']['JS'][_0x3ca3a5][_0x16ac35(0x2e0)](this,_0xc6f7b6);}}}else _0x9dbe33=_0x556766[_0x16ac35(0x2a1)][_0x16ac35(0x1cc)](_0x369e04['$1']),_0x6f412a=_0x1f129b[_0xf0ea75(_0x44a31b['$2'])],_0x23b01d=_0x1a73b0(_0x5bafdf['$3'])*0.01;}if(_0x4517d4['match'](/\[Tier[ ](\d+)\]/i)){const _0x23a7ce=Number(RegExp['$1']);if(_0x23a7ce<tier){if(_0x16ac35(0x281)!==_0x16ac35(0x316))alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x16ac35(0x2af)](_0x5956e1,_0x23a7ce,tier)),SceneManager['exit']();else return _0x48a4f6[_0x253edd['getArmorIdWithName'](_0x112436)];}else{if('AwJvs'!==_0x16ac35(0x201))tier=Math['max'](_0x23a7ce,tier);else{if(this[_0x16ac35(0x2bf)]!==_0x479255)return this['_rotationConstant'];const _0x555d8f=_0x5d518b[_0x16ac35(0x2a1)][_0x16ac35(0x315)]['General'];return this[_0x16ac35(0x2bf)]=_0x555d8f[_0x16ac35(0x285)]/_0x555d8f[_0x16ac35(0x314)],this[_0x16ac35(0x2bf)];}}}VisuMZ[_0x16ac35(0x294)](VisuMZ[label][_0x16ac35(0x315)],_0xe88994[_0x16ac35(0x2d7)]);})(pluginData),PluginManager[_0x22aba5(0x2d8)](pluginData[_0x22aba5(0x2b9)],'BonusRewardsClear',_0x1a3194=>{const _0x4b907c=_0x22aba5;VisuMZ[_0x4b907c(0x294)](_0x1a3194,_0x1a3194),$gameTroop[_0x4b907c(0x202)]();}),PluginManager[_0x22aba5(0x2d8)](pluginData[_0x22aba5(0x2b9)],_0x22aba5(0x241),_0x29e3f0=>{const _0xf65686=_0x22aba5;VisuMZ['ConvertParams'](_0x29e3f0,_0x29e3f0);const _0x5c4f33=_0x29e3f0['value'];$gameTroop[_0xf65686(0x1e2)](_0x5c4f33);}),PluginManager['registerCommand'](pluginData[_0x22aba5(0x2b9)],'BonusGoldSet',_0x283b52=>{const _0x16a81c=_0x22aba5;VisuMZ[_0x16a81c(0x294)](_0x283b52,_0x283b52);const _0xae13ec=_0x283b52[_0x16a81c(0x2d0)];$gameTroop[_0x16a81c(0x212)](_0xae13ec);}),PluginManager[_0x22aba5(0x2d8)](pluginData[_0x22aba5(0x2b9)],_0x22aba5(0x249),_0x447cac=>{const _0x2c7e50=_0x22aba5;VisuMZ[_0x2c7e50(0x294)](_0x447cac,_0x447cac);const _0xd62c3=_0x447cac['id'],_0xaf0407=_0x447cac[_0x2c7e50(0x274)];$gameTroop[_0x2c7e50(0x18b)](_0xd62c3,_0xaf0407);}),PluginManager[_0x22aba5(0x2d8)](pluginData[_0x22aba5(0x2b9)],_0x22aba5(0x1b4),_0x5dc2d0=>{VisuMZ['ConvertParams'](_0x5dc2d0,_0x5dc2d0);const _0x3927e9=_0x5dc2d0['id'],_0x3b6c4f=_0x5dc2d0['quantity'];$gameTroop['addBonusWeaponDrop'](_0x3927e9,_0x3b6c4f);}),PluginManager[_0x22aba5(0x2d8)](pluginData[_0x22aba5(0x2b9)],'BonusAddArmor',_0x2f2aee=>{const _0xa6f088=_0x22aba5;VisuMZ[_0xa6f088(0x294)](_0x2f2aee,_0x2f2aee);const _0x5c89fd=_0x2f2aee['id'],_0x445c51=_0x2f2aee['quantity'];$gameTroop[_0xa6f088(0x30c)](_0x5c89fd,_0x445c51);}),PluginManager[_0x22aba5(0x2d8)](pluginData['name'],'ForcedRewardsClear',_0x5cda21=>{const _0x3c0035=_0x22aba5;VisuMZ[_0x3c0035(0x294)](_0x5cda21,_0x5cda21),$gameTroop[_0x3c0035(0x2d1)]();}),PluginManager[_0x22aba5(0x2d8)](pluginData[_0x22aba5(0x2b9)],_0x22aba5(0x336),_0x147a5f=>{const _0x2c2226=_0x22aba5;VisuMZ[_0x2c2226(0x294)](_0x147a5f,_0x147a5f);const _0x4859e6=_0x147a5f['value'];$gameTroop['setForcedExp'](_0x4859e6);}),PluginManager['registerCommand'](pluginData[_0x22aba5(0x2b9)],'ForcedGoldSet',_0x130b20=>{const _0x31dcbc=_0x22aba5;VisuMZ[_0x31dcbc(0x294)](_0x130b20,_0x130b20);const _0x28c9cf=_0x130b20[_0x31dcbc(0x2d0)];$gameTroop[_0x31dcbc(0x1c4)](_0x28c9cf);}),PluginManager['registerCommand'](pluginData[_0x22aba5(0x2b9)],'ForcedAddItem',_0x20291e=>{const _0x2dfe32=_0x22aba5;VisuMZ[_0x2dfe32(0x294)](_0x20291e,_0x20291e);const _0x86b0ca=_0x20291e['id'],_0x343cd9=_0x20291e[_0x2dfe32(0x274)];$gameTroop[_0x2dfe32(0x1ba)](_0x86b0ca,_0x343cd9);}),PluginManager[_0x22aba5(0x2d8)](pluginData['name'],'ForcedAddWeapon',_0x597a66=>{const _0x55a1df=_0x22aba5;VisuMZ[_0x55a1df(0x294)](_0x597a66,_0x597a66);const _0x172aa8=_0x597a66['id'],_0x32a898=_0x597a66[_0x55a1df(0x274)];$gameTroop[_0x55a1df(0x31b)](_0x172aa8,_0x32a898);}),PluginManager[_0x22aba5(0x2d8)](pluginData[_0x22aba5(0x2b9)],_0x22aba5(0x1c8),_0xbd888a=>{const _0x1808e2=_0x22aba5;VisuMZ[_0x1808e2(0x294)](_0xbd888a,_0xbd888a);const _0x3cb453=_0xbd888a['id'],_0xaaf140=_0xbd888a['quantity'];$gameTroop[_0x1808e2(0x194)](_0x3cb453,_0xaaf140);}),PluginManager[_0x22aba5(0x2d8)](pluginData['name'],_0x22aba5(0x280),_0x4e4319=>{const _0xad7505=_0x22aba5;VisuMZ[_0xad7505(0x294)](_0x4e4319,_0x4e4319);const _0x359b85=_0x4e4319[_0xad7505(0x2e2)];BattleManager[_0xad7505(0x325)]=_0x359b85;}),VisuMZ[_0x22aba5(0x2a1)][_0x22aba5(0x19e)]=Scene_Boot[_0x22aba5(0x1d9)][_0x22aba5(0x334)],Scene_Boot['prototype'][_0x22aba5(0x334)]=function(){const _0x1b032f=_0x22aba5;VisuMZ[_0x1b032f(0x2a1)][_0x1b032f(0x19e)][_0x1b032f(0x2e0)](this),this[_0x1b032f(0x292)]();},Scene_Boot[_0x22aba5(0x1d9)][_0x22aba5(0x292)]=function(){const _0x3f700d=_0x22aba5;if(VisuMZ[_0x3f700d(0x33d)])return;this[_0x3f700d(0x190)](),this[_0x3f700d(0x29e)]();},Scene_Boot[_0x22aba5(0x1d9)]['process_VisuMZ_ExtraEnemyDrops_Drops_Notetags']=function(){const _0x3b43c5=_0x22aba5;for(const _0x543e14 of $dataEnemies){if('IYWYu'===_0x3b43c5(0x31e)){_0x27d034=_0x24189c[_0x3b43c5(0x337)]()[_0x3b43c5(0x2f0)]();if(['I',_0x3b43c5(0x1f6),_0x3b43c5(0x1b8)][_0x3b43c5(0x296)](_0x399257))return 0x1;if(['W','WEAPON',_0x3b43c5(0x1ff)][_0x3b43c5(0x296)](_0x47dfd8))return 0x2;if(['A',_0x3b43c5(0x1ee),_0x3b43c5(0x2e7)][_0x3b43c5(0x296)](_0x55fe1d))return 0x3;return 0x0;}else{if(!_0x543e14)continue;VisuMZ[_0x3b43c5(0x2a1)][_0x3b43c5(0x1d4)](_0x543e14);}}},Scene_Boot[_0x22aba5(0x1d9)][_0x22aba5(0x29e)]=function(){const _0x174b15=_0x22aba5;for(const _0x376820 of $dataEnemies){if(!_0x376820)continue;if(_0x376820[_0x174b15(0x289)][_0x174b15(0x27b)](/<JS DROPS>\s*([\s\S]*)\s*<\/JS DROPS>/i)){const _0x3db9d5=String(RegExp['$1']);VisuMZ[_0x174b15(0x2a1)][_0x174b15(0x309)](_0x376820,_0x3db9d5);}}},VisuMZ['ExtraEnemyDrops'][_0x22aba5(0x18f)]=VisuMZ[_0x22aba5(0x18f)],VisuMZ[_0x22aba5(0x18f)]=function(_0x28b390){const _0x573a6e=_0x22aba5;VisuMZ[_0x573a6e(0x2a1)]['ParseEnemyNotetags'][_0x573a6e(0x2e0)](this,_0x28b390),VisuMZ[_0x573a6e(0x2a1)][_0x573a6e(0x1d4)](_0x28b390);if(_0x28b390['note'][_0x573a6e(0x27b)](/<JS DROPS>\s*([\s\S]*)\s*<\/JS DROPS>/i)){if('UfxVR'!==_0x573a6e(0x1aa)){const _0x4246d2=String(RegExp['$1']);VisuMZ['ExtraEnemyDrops'][_0x573a6e(0x309)](_0x28b390,_0x4246d2);}else{const _0x39e852=this[_0x573a6e(0x226)]()[_0x573a6e(0x1d8)];return _0x39e852[_0x57a254]||0x0;}}},VisuMZ[_0x22aba5(0x2a1)][_0x22aba5(0x1d4)]=function(_0x55defc){const _0x375ef2=_0x22aba5,_0x493b73=_0x55defc[_0x375ef2(0x289)],_0x138996=_0x493b73[_0x375ef2(0x27b)](/<(.*?) (?:DROP|DROPS)[ ](.*):[ ](\d+)([%％])>/gi);if(_0x138996){if(_0x375ef2(0x1ce)===_0x375ef2(0x1ce))for(const _0x409370 of _0x138996){const _0x162758={'kind':0x0,'dataId':0x0,'denominator':0x1};if(_0x409370[_0x375ef2(0x27b)](/<(.*?) (?:DROP|DROPS)[ ](\d+)[ ](?:THROUGH|to)[ ](\d+):[ ](\d+)([%％])>/i)){if(_0x375ef2(0x21b)!==_0x375ef2(0x21b))_0x334e92[_0x375ef2(0x1f7)]=_0x1c4979[_0x375ef2(0x2a1)]['getDatabaseKind'](_0x4bbc4d['$1']),_0x147965[_0x375ef2(0x2e3)]=_0xf84ec0(_0x5ebedb['$2']),_0x44a1ad[_0x375ef2(0x323)]=0x1/(_0x59896d(_0x226094['$3'])*0.01);else{const _0x4a5cc3=VisuMZ[_0x375ef2(0x2a1)]['getDatabaseKind'](RegExp['$1']),_0x3b8abc=Number(RegExp['$2']),_0x1301bf=Number(RegExp['$3']),_0x1bf121=0x1/(Number(RegExp['$4'])*0.01);if(_0x4a5cc3>0x0){if(_0x375ef2(0x2b4)!==_0x375ef2(0x27e))for(let _0x5bbac5=_0x3b8abc;_0x5bbac5<=_0x1301bf;_0x5bbac5++){if(_0x375ef2(0x1d3)==='FDyDV'){this[_0x375ef2(0x238)]=this[_0x375ef2(0x238)]||{};if(this['_visualDrops'][_0x375ef2(0x2ef)]!==_0xa2429)return this[_0x375ef2(0x238)]['exp'];return this[_0x375ef2(0x238)][_0x375ef2(0x2ef)]=_0x51d3bc['VisualDrops'][_0x375ef2(0x33a)][_0x375ef2(0x2e0)](this),this['_visualDrops']['exp'];}else{const _0x33d8a4={'kind':_0x4a5cc3,'dataId':_0x5bbac5,'denominator':_0x1bf121};VisuMZ[_0x375ef2(0x2a1)][_0x375ef2(0x25f)](_0x33d8a4)&&_0x55defc[_0x375ef2(0x248)][_0x375ef2(0x1a6)](_0x33d8a4);}}else{let _0x317dc3=_0x4eb44b(_0x48ee41['$1'])['toLowerCase']();const _0x502019=_0x120867(_0x5e0ece['$2']);_0x317dc3=_0x317dc3[_0x375ef2(0x26a)](0x0)['toUpperCase']()+_0x317dc3[_0x375ef2(0x256)](0x1);if(_0x317dc3[_0x375ef2(0x27b)](/STYPE/i))_0x317dc3=_0x375ef2(0x29a);const _0x460017=this[_0x375ef2(0x226)]();if(_0x317dc3==='Item'&&_0x460017['lastStruckType']!==_0x375ef2(0x28e))return![];if(_0x317dc3===_0x375ef2(0x1e5)&&_0x460017['lastStruckType']!==_0x375ef2(0x1e5))return![];if(_0x317dc3==='SType'&&_0x460017[_0x375ef2(0x1c1)]!=='Skill')return![];const _0x1c582c=_0x375ef2(0x19c)['format'](_0x317dc3);return _0x460017[_0x1c582c]===_0x502019;}}continue;}}else{if(_0x409370['match'](/<(.*?) (?:DROP|DROPS)[ ](\d+):[ ](\d+)([%％])>/i))_0x375ef2(0x1a0)===_0x375ef2(0x1a0)?(_0x162758[_0x375ef2(0x1f7)]=VisuMZ[_0x375ef2(0x2a1)][_0x375ef2(0x1dc)](RegExp['$1']),_0x162758[_0x375ef2(0x2e3)]=Number(RegExp['$2']),_0x162758[_0x375ef2(0x323)]=0x1/(Number(RegExp['$3'])*0.01)):(_0x2630cc=_0x4d965a[_0x375ef2(0x2a1)][_0x375ef2(0x321)](_0x22b39c['$1'],_0x1c8074['$2']),_0x2e697f=_0x469d70(_0x18b70f['$3'])*0.01);else{if(_0x409370[_0x375ef2(0x27b)](/<(.*?) (?:DROP|DROPS)[ ](.*):[ ](\d+)([%％])>/i))_0x162758[_0x375ef2(0x1f7)]=VisuMZ[_0x375ef2(0x2a1)][_0x375ef2(0x1dc)](RegExp['$1']),_0x162758['dataId']=VisuMZ[_0x375ef2(0x2a1)][_0x375ef2(0x1fc)](RegExp['$1'],RegExp['$2']),_0x162758['denominator']=0x1/(Number(RegExp['$3'])*0.01);else continue;}}if(_0x162758['kind']<0x0||_0x162758[_0x375ef2(0x2e3)]<0x0)continue;_0x55defc[_0x375ef2(0x248)][_0x375ef2(0x1a6)](_0x162758);}else{let _0xefaedd=_0x2aae55(_0x249b70['$1'])[_0x375ef2(0x20e)](',')['map'](_0x414078=>_0x57a1d1(_0x414078)[_0x375ef2(0x20f)](-0xff,0xff));while(_0xefaedd[_0x375ef2(0x318)]<0x4)_0xefaedd[_0x375ef2(0x1a6)](0x0);_0xfdd847[_0x375ef2(0x1a6)](_0xefaedd);}}if(_0x493b73[_0x375ef2(0x27b)](/<(?:DROP|DROPS)>\s*([\s\S]*)\s*<\/(?:DROP|DROPS)>/i)){if(_0x375ef2(0x2c8)==='eTegN'){const _0x5de3a0=String(RegExp['$1']),_0x5c5c32=_0x5de3a0[_0x375ef2(0x27b)](/(.*?)[ ](.*):[ ](\d+)([%％])/gi);if(_0x5c5c32)for(const _0x50c021 of _0x5c5c32){if(_0x375ef2(0x2b7)===_0x375ef2(0x2b7)){const _0x42bf8b={'kind':0x0,'dataId':0x0,'denominator':0x1};if(_0x50c021[_0x375ef2(0x27b)](/(.*?)[ ](\d+)[ ](?:THROUGH|to)[ ](\d+):[ ](\d+)([%％])/i)){if('EGuXp'!=='EGuXp'){const _0x48920c=_0x5af8be['ExtraEnemyDrops']['getDatabase'](_0x298c30),_0x51b032=_0x48920c[_0x563295(_0x50331f)]||null;return _0x51b032?_0x30d3db['numItems'](_0x51b032):0x0;}else{const _0x493df4=VisuMZ[_0x375ef2(0x2a1)][_0x375ef2(0x1dc)](RegExp['$1']),_0x1f03c6=Number(RegExp['$2']),_0x3455d9=Number(RegExp['$3']),_0x19ee58=0x1/(Number(RegExp['$4'])*0.01);if(_0x493df4>0x0){if('XvUnb'===_0x375ef2(0x2c5)){_0x49be6c[_0x375ef2(0x294)](_0x36557d,_0x40037f);const _0x491acf=_0x3bc4dd['Visible'];_0x4cc6ab['_visualDropsVisible']=_0x491acf;}else for(let _0x210372=_0x1f03c6;_0x210372<=_0x3455d9;_0x210372++){const _0x133d54={'kind':_0x493df4,'dataId':_0x210372,'denominator':_0x19ee58};VisuMZ['ExtraEnemyDrops'][_0x375ef2(0x25f)](_0x133d54)&&(_0x375ef2(0x260)===_0x375ef2(0x260)?_0x55defc[_0x375ef2(0x248)][_0x375ef2(0x1a6)](_0x133d54):this[_0x375ef2(0x330)]={'deathTurn':0x0,'timesStruckSkills':{},'timesStruckSTypes':{},'timesStruckItems':{},'timesStruckStates':{},'timesStruckElements':{},'lastStruckType':_0x375ef2(0x2aa),'lastStruckSkill':0x0,'lastStruckSType':0x0,'lastStruckItem':0x0,'lastStruckState':0x0,'lastStruckElement':0x0});}}continue;}}else{if(_0x50c021['match'](/(.*?)[ ](\d+):[ ](\d+)([%％])/i))'NpRdu'!==_0x375ef2(0x237)?this[_0x375ef2(0x2b3)]=_0x265d1f['min'](this[_0x375ef2(0x2b3)]+_0x3e84f8[_0x375ef2(0x191)],_0x43ee90):(_0x42bf8b[_0x375ef2(0x1f7)]=VisuMZ[_0x375ef2(0x2a1)][_0x375ef2(0x1dc)](RegExp['$1']),_0x42bf8b[_0x375ef2(0x2e3)]=Number(RegExp['$2']),_0x42bf8b[_0x375ef2(0x323)]=0x1/(Number(RegExp['$3'])*0.01));else{if(_0x50c021['match'](/(.*?)[ ](.*):[ ](\d+)([%％])/i)){if(_0x375ef2(0x1fb)==='sGCla')_0x42bf8b['kind']=VisuMZ[_0x375ef2(0x2a1)][_0x375ef2(0x1dc)](RegExp['$1']),_0x42bf8b[_0x375ef2(0x2e3)]=VisuMZ[_0x375ef2(0x2a1)][_0x375ef2(0x1fc)](RegExp['$1'],RegExp['$2']),_0x42bf8b[_0x375ef2(0x323)]=0x1/(Number(RegExp['$3'])*0.01);else return this[_0x375ef2(0x19b)]&&this['_scene'][_0x375ef2(0x199)]===_0x1522f2;}else{if(_0x375ef2(0x32b)===_0x375ef2(0x32b))continue;else this[_0x375ef2(0x1dd)][_0x375ef2(0x1b0)]=0x0;}}}if(_0x42bf8b['kind']<0x0||_0x42bf8b[_0x375ef2(0x2e3)]<0x0)continue;_0x55defc[_0x375ef2(0x248)][_0x375ef2(0x1a6)](_0x42bf8b);}else this[_0x375ef2(0x2a3)]();}}else this[_0x375ef2(0x1dd)]=_0x293419,this[_0x375ef2(0x2ab)]=this['_data'][_0x375ef2(0x331)],this[_0x375ef2(0x251)]=this[_0x375ef2(0x1dd)]['baseY'];}},VisuMZ[_0x22aba5(0x2a1)][_0x22aba5(0x25f)]=function(_0x245128){const _0x1db1ad=_0x22aba5;if(!_0x245128)return![];const _0x3c186e=_0x245128[_0x1db1ad(0x1f7)],_0x3c139d=_0x245128[_0x1db1ad(0x2e3)];let _0x5030d1=null;if(_0x3c186e===0x1)_0x5030d1=$dataItems[_0x3c139d];else{if(_0x3c186e===0x2)_0x5030d1=$dataWeapons[_0x3c139d];else _0x3c186e===0x3?'YXwzR'===_0x1db1ad(0x20a)?_0x5030d1=$dataArmors[_0x3c139d]:_0x107785[_0x1db1ad(0x1a6)](_0x3c9da6(_0x193114['$1'])||0xb4):_0x5030d1=null;}if(!_0x5030d1)return![];if(_0x5030d1['name']['trim']()==='')return![];if(_0x5030d1[_0x1db1ad(0x2b9)]['match'](/-----/i))return![];return!![];},VisuMZ[_0x22aba5(0x2a1)]['JS']={},VisuMZ[_0x22aba5(0x2a1)][_0x22aba5(0x309)]=function(_0x2a2a26,_0x8a249e){const _0x2091c3=_0x22aba5,_0x3dd4c9=_0x2091c3(0x29d)[_0x2091c3(0x2af)](_0x8a249e),_0x2bfda3=_0x2a2a26['id'];VisuMZ[_0x2091c3(0x2a1)]['JS'][_0x2bfda3]=new Function(_0x3dd4c9);},DataManager[_0x22aba5(0x272)]=function(_0x53413b){const _0x68ba5=_0x22aba5;_0x53413b=_0x53413b['toUpperCase']()[_0x68ba5(0x2f0)](),this[_0x68ba5(0x2a8)]=this[_0x68ba5(0x2a8)]||{};if(this[_0x68ba5(0x2a8)][_0x53413b])return this[_0x68ba5(0x2a8)][_0x53413b];for(const _0x59ac66 of $dataItems){if(!_0x59ac66)continue;this[_0x68ba5(0x2a8)][_0x59ac66[_0x68ba5(0x2b9)]['toUpperCase']()[_0x68ba5(0x2f0)]()]=_0x59ac66['id'];}return this[_0x68ba5(0x2a8)][_0x53413b]||0x0;},DataManager[_0x22aba5(0x1f5)]=function(_0x546c30){const _0x1ee101=_0x22aba5;_0x546c30=_0x546c30[_0x1ee101(0x337)]()['trim'](),this[_0x1ee101(0x2a9)]=this[_0x1ee101(0x2a9)]||{};if(this['_weaponIDs'][_0x546c30])return this[_0x1ee101(0x2a9)][_0x546c30];for(const _0x242e3e of $dataWeapons){if(!_0x242e3e)continue;this[_0x1ee101(0x2a9)][_0x242e3e[_0x1ee101(0x2b9)][_0x1ee101(0x337)]()[_0x1ee101(0x2f0)]()]=_0x242e3e['id'];}return this['_weaponIDs'][_0x546c30]||0x0;},DataManager[_0x22aba5(0x299)]=function(_0x2802f0){const _0x1e3088=_0x22aba5;_0x2802f0=_0x2802f0[_0x1e3088(0x337)]()[_0x1e3088(0x2f0)](),this[_0x1e3088(0x2ae)]=this[_0x1e3088(0x2ae)]||{};if(this[_0x1e3088(0x2ae)][_0x2802f0])return this[_0x1e3088(0x2ae)][_0x2802f0];for(const _0x2235a3 of $dataArmors){if(!_0x2235a3)continue;this[_0x1e3088(0x2ae)][_0x2235a3[_0x1e3088(0x2b9)][_0x1e3088(0x337)]()[_0x1e3088(0x2f0)]()]=_0x2235a3['id'];}return this[_0x1e3088(0x2ae)][_0x2802f0]||0x0;},DataManager['getSkillIdWithName']=function(_0x477888){const _0x3dd63c=_0x22aba5;_0x477888=_0x477888['toUpperCase']()[_0x3dd63c(0x2f0)](),this['_skillIDs']=this[_0x3dd63c(0x193)]||{};if(this[_0x3dd63c(0x193)][_0x477888])return this[_0x3dd63c(0x193)][_0x477888];for(const _0x30faa2 of $dataSkills){if(_0x3dd63c(0x244)!==_0x3dd63c(0x1eb)){if(!_0x30faa2)continue;this[_0x3dd63c(0x193)][_0x30faa2[_0x3dd63c(0x2b9)][_0x3dd63c(0x337)]()['trim']()]=_0x30faa2['id'];}else{_0x311a16[_0x3dd63c(0x294)](_0x2e08e5,_0x25a2c6);const _0x1eb58a=_0x3fa92c['id'],_0x11118d=_0x307c92[_0x3dd63c(0x274)];_0x4ee179[_0x3dd63c(0x31b)](_0x1eb58a,_0x11118d);}}return this[_0x3dd63c(0x193)][_0x477888]||0x0;},DataManager[_0x22aba5(0x28d)]=function(_0x2d45ea){const _0x53989a=_0x22aba5;_0x2d45ea=_0x2d45ea[_0x53989a(0x337)]()[_0x53989a(0x2f0)](),this[_0x53989a(0x27f)]=this[_0x53989a(0x27f)]||{};if(this[_0x53989a(0x27f)][_0x2d45ea])return this['_stypeIDs'][_0x2d45ea];for(let _0x6f2743=0x1;_0x6f2743<0x64;_0x6f2743++){if(!$dataSystem[_0x53989a(0x2d4)][_0x6f2743])continue;let _0xd7d9d3=$dataSystem[_0x53989a(0x2d4)][_0x6f2743]['toUpperCase']()[_0x53989a(0x2f0)]();_0xd7d9d3=_0xd7d9d3[_0x53989a(0x32c)](/\x1I\[(\d+)\]/gi,''),_0xd7d9d3=_0xd7d9d3[_0x53989a(0x32c)](/\\I\[(\d+)\]/gi,''),this['_stypeIDs'][_0xd7d9d3]=_0x6f2743;}return this['_stypeIDs'][_0x2d45ea]||0x0;},DataManager['getStateIdWithName']=function(_0x148724){const _0x47dfdd=_0x22aba5;_0x148724=_0x148724[_0x47dfdd(0x337)]()[_0x47dfdd(0x2f0)](),this[_0x47dfdd(0x207)]=this[_0x47dfdd(0x207)]||{};if(this['_stateIDs'][_0x148724])return this['_stateIDs'][_0x148724];for(const _0x5079d3 of $dataStates){if(!_0x5079d3)continue;this[_0x47dfdd(0x207)][_0x5079d3['name'][_0x47dfdd(0x337)]()[_0x47dfdd(0x2f0)]()]=_0x5079d3['id'];}return this[_0x47dfdd(0x207)][_0x148724]||0x0;},DataManager['getElementIdWithName']=function(_0x1928e7){const _0x1bce9a=_0x22aba5;_0x1928e7=_0x1928e7[_0x1bce9a(0x337)]()[_0x1bce9a(0x2f0)](),this[_0x1bce9a(0x264)]=this[_0x1bce9a(0x264)]||{};if(this[_0x1bce9a(0x264)][_0x1928e7])return this[_0x1bce9a(0x264)][_0x1928e7];let _0x4a3629=0x1;for(const _0x2c3d3e of $dataSystem[_0x1bce9a(0x1d2)]){if('OrLXs'!==_0x1bce9a(0x2f7))_0xa93b13=_0x352e26['ExtraEnemyDrops']['getDatabaseItem'](_0x4cc3a5['$1'],_0x1acc0e['$2']),_0x30882e=_0x2cf4e5(_0x22bc29['$3'])*0.01;else{if(!_0x2c3d3e)continue;let _0x1e594f=_0x2c3d3e[_0x1bce9a(0x337)]();_0x1e594f=_0x1e594f[_0x1bce9a(0x32c)](/\x1I\[(\d+)\]/gi,''),_0x1e594f=_0x1e594f[_0x1bce9a(0x32c)](/\\I\[(\d+)\]/gi,''),this['_elementIDs'][_0x1e594f]=_0x4a3629,_0x4a3629++;}}return this['_elementIDs'][_0x1928e7]||0x0;},SceneManager['isSceneBattle']=function(){const _0x62713=_0x22aba5;return this[_0x62713(0x19b)]&&this[_0x62713(0x19b)][_0x62713(0x199)]===Scene_Battle;},VisuMZ[_0x22aba5(0x2a1)][_0x22aba5(0x219)]=Game_Action[_0x22aba5(0x1d9)][_0x22aba5(0x2cf)],Game_Action[_0x22aba5(0x1d9)][_0x22aba5(0x2cf)]=function(_0x28b58f){const _0x11ab20=_0x22aba5;_0x28b58f['applyTimesStruck'](this),VisuMZ[_0x11ab20(0x2a1)]['Game_Action_applyItemUserEffect'][_0x11ab20(0x2e0)](this,_0x28b58f);},VisuMZ[_0x22aba5(0x2a1)][_0x22aba5(0x1e6)]=Game_Battler['prototype'][_0x22aba5(0x206)],Game_Battler['prototype'][_0x22aba5(0x206)]=function(_0x3fc3d0){const _0x994f96=_0x22aba5;VisuMZ['ExtraEnemyDrops'][_0x994f96(0x1e6)]['call'](this,_0x3fc3d0),this[_0x994f96(0x2a3)]();},Game_Battler[_0x22aba5(0x1d9)][_0x22aba5(0x2a3)]=function(){const _0x4ede52=_0x22aba5;this[_0x4ede52(0x330)]={'deathTurn':0x0,'timesStruckSkills':{},'timesStruckSTypes':{},'timesStruckItems':{},'timesStruckStates':{},'timesStruckElements':{},'lastStruckType':_0x4ede52(0x2aa),'lastStruckSkill':0x0,'lastStruckSType':0x0,'lastStruckItem':0x0,'lastStruckState':0x0,'lastStruckElement':0x0};},Game_Battler[_0x22aba5(0x1d9)][_0x22aba5(0x226)]=function(){const _0x4a3ccd=_0x22aba5;return this[_0x4a3ccd(0x330)]===undefined&&this['createConditionalDropsTrackedData'](),this[_0x4a3ccd(0x330)];},Game_Battler[_0x22aba5(0x1d9)]['getDeathTurn']=function(){const _0x28f93d=_0x22aba5;return this[_0x28f93d(0x226)]()[_0x28f93d(0x2f2)]||0x0;},Game_Battler[_0x22aba5(0x1d9)][_0x22aba5(0x31a)]=function(_0x533038,_0x5a7fad,_0xec4382){const _0x46de10=_0x22aba5,_0x289bac=this[_0x46de10(0x226)]();_0xec4382=_0xec4382||0x1;const _0x5112aa='timesStruck%1s'[_0x46de10(0x2af)](_0x533038);if(!_0x289bac[_0x5112aa])return;_0x289bac[_0x5112aa][_0x5a7fad]=_0x289bac[_0x5112aa][_0x5a7fad]||0x0,_0x289bac[_0x5112aa][_0x5a7fad]+=_0xec4382;const _0x2aef73=_0x46de10(0x19c)[_0x46de10(0x2af)](_0x533038);_0x289bac[_0x2aef73]=_0x5a7fad;if([_0x46de10(0x28e),_0x46de10(0x1e5)][_0x46de10(0x296)](_0x533038)){if('YRxzt'!=='hquVB')_0x289bac[_0x46de10(0x1c1)]=_0x533038;else{const _0x2cb193=_0x20895b[_0x46de10(0x2a1)][_0x46de10(0x315)][_0x46de10(0x24e)];this[_0x46de10(0x31c)]=new _0x3baa1f(),this[_0x46de10(0x31c)][_0x46de10(0x2f5)]=_0x1f57be[_0x46de10(0x2d6)](_0x46de10(0x1d0)),this[_0x46de10(0x31c)][_0x46de10(0x1fd)]['x']=0.5,this[_0x46de10(0x31c)][_0x46de10(0x1fd)]['y']=0.5,this[_0x46de10(0x31c)][_0x46de10(0x1f8)]=_0x3ae630[_0x46de10(0x29f)](_0x4acec4[_0x46de10(0x1b2)]/_0x2cb193[_0x46de10(0x217)]),this[_0x46de10(0x31c)]['y']=this[_0x46de10(0x31c)][_0x46de10(0x1f8)];const _0x348296=this[_0x46de10(0x1dd)][_0x46de10(0x28a)],_0x5b74ef=_0xf67062[_0x46de10(0x273)],_0x42e0cb=_0x21abca[_0x46de10(0x1b2)],_0xddbf85=_0x348296%0x10*_0x5b74ef,_0x2d5af6=_0x3d5d9d['floor'](_0x348296/0x10)*_0x42e0cb;this[_0x46de10(0x31c)]['setFrame'](_0xddbf85,_0x2d5af6,_0x5b74ef,_0x42e0cb),this[_0x46de10(0x230)](this[_0x46de10(0x31c)]);}}},Game_Battler[_0x22aba5(0x1d9)][_0x22aba5(0x1d5)]=function(_0x4a8e11){const _0x26ae64=_0x22aba5,_0x3c4a9d=this[_0x26ae64(0x226)]()[_0x26ae64(0x1a5)];return _0x3c4a9d[_0x4a8e11]||0x0;},Game_Battler['prototype'][_0x22aba5(0x311)]=function(_0x36a030){const _0x4034af=_0x22aba5,_0x166283=this['getConditionalDropsTrackedData']()[_0x4034af(0x205)];return _0x166283[_0x36a030]||0x0;},Game_Battler[_0x22aba5(0x1d9)]['timesStruckItem']=function(_0x2ad5f5){const _0x804546=_0x22aba5,_0x250ae7=this['getConditionalDropsTrackedData']()[_0x804546(0x1be)];return _0x250ae7[_0x2ad5f5]||0x0;},Game_Battler['prototype'][_0x22aba5(0x277)]=function(_0x32749f){const _0x209b62=_0x22aba5,_0x69a0e2=this['getConditionalDropsTrackedData']()[_0x209b62(0x1d8)];return _0x69a0e2[_0x32749f]||0x0;},Game_Battler[_0x22aba5(0x1d9)][_0x22aba5(0x2c7)]=function(_0xb6a55e){const _0x1de483=_0x22aba5,_0x12d0f4=this[_0x1de483(0x226)]()[_0x1de483(0x208)];return _0x12d0f4[_0xb6a55e]||0x0;},Game_Battler['prototype'][_0x22aba5(0x2eb)]=function(_0x4a1c8b){const _0xb38cdd=_0x22aba5,_0x3b1ba9=_0x4a1c8b[_0xb38cdd(0x317)]();if(!_0x3b1ba9)return;if(_0x4a1c8b[_0xb38cdd(0x1ac)]()){if('IAKAJ'==='UtOmO'){const _0x3bfd3e=_0x191240[_0x18359d];if(_0x3bfd3e)this[_0xb38cdd(0x23c)][_0xb38cdd(0x220)]['push'](_0x3bfd3e);}else this['addTimesStruck'](_0xb38cdd(0x28e),_0x3b1ba9['id']);}else{if(_0x4a1c8b[_0xb38cdd(0x2ff)]())this[_0xb38cdd(0x31a)](_0xb38cdd(0x1e5),_0x3b1ba9['id']),this['addTimesStruck']('SType',_0x3b1ba9[_0xb38cdd(0x204)]);else return;}let _0x286ae1=[];if(Imported['VisuMZ_1_ElementStatusCore'])_0x286ae1=_0x4a1c8b[_0xb38cdd(0x1d2)]();else{if(_0x4a1c8b[_0xb38cdd(0x317)]()['damage'][_0xb38cdd(0x2ad)]<0x0)_0x286ae1=_0x4a1c8b[_0xb38cdd(0x32d)]()[_0xb38cdd(0x288)]();else{if(_0xb38cdd(0x327)!==_0xb38cdd(0x262))_0x286ae1=[_0x4a1c8b[_0xb38cdd(0x317)]()['damage'][_0xb38cdd(0x2ad)]];else for(const _0x4e95e2 of _0x7c2794){_0x4e95e2[_0xb38cdd(0x27b)](/<VISUAL DROP FLAG:[ ](.*)>/i);const _0x30ac3d=_0x5d674a(_0xc05c9['$1']);_0x3cc78c[_0x4bd7cd[_0xb38cdd(0x318)]-0x1]['push'](_0x30ac3d);}}}while(_0x286ae1[_0xb38cdd(0x318)]>0x0){const _0x23c47a=_0x286ae1[_0xb38cdd(0x1e7)]();if(_0x23c47a>0x0)this[_0xb38cdd(0x31a)](_0xb38cdd(0x22b),_0x23c47a);}},Game_Battler[_0x22aba5(0x1d9)][_0x22aba5(0x2e9)]=function(){const _0x53044b=_0x22aba5,_0x1eb075=this['getConditionalDropsTrackedData']();_0x1eb075[_0x53044b(0x2f2)]=this[_0x53044b(0x2cc)]();},VisuMZ[_0x22aba5(0x2a1)][_0x22aba5(0x2de)]=Game_BattlerBase[_0x22aba5(0x1d9)][_0x22aba5(0x2d9)],Game_BattlerBase[_0x22aba5(0x1d9)][_0x22aba5(0x2d9)]=function(_0xf828df){const _0x214c30=_0x22aba5,_0x54969f=this['isStateAffected'](_0xf828df);VisuMZ[_0x214c30(0x2a1)][_0x214c30(0x2de)]['call'](this,_0xf828df),this[_0x214c30(0x192)](_0xf828df)&&(_0x214c30(0x1a8)===_0x214c30(0x1a8)?(this['addTimesStruck'](_0x214c30(0x1c3),_0xf828df),!_0x54969f&&_0xf828df===this[_0x214c30(0x2c4)]()&&this[_0x214c30(0x2e9)]()):this[_0x214c30(0x23c)]={'exp':_0x2ea74e,'gold':_0x19e7d4,'drops':_0x404ca6});},VisuMZ[_0x22aba5(0x2a1)][_0x22aba5(0x1ca)]=Game_Enemy['prototype']['makeDropItems'],Game_Enemy['prototype'][_0x22aba5(0x310)]=function(){const _0x5c5382=_0x22aba5;let _0x3aa1eb=VisuMZ[_0x5c5382(0x2a1)][_0x5c5382(0x1ca)]['call'](this);return _0x3aa1eb=this['addExtraEnemyDrops'](_0x3aa1eb),VisuMZ[_0x5c5382(0x2a1)]['sortDrops'](_0x3aa1eb);},Game_Enemy[_0x22aba5(0x1d9)][_0x22aba5(0x18e)]=function(_0x65c2db){return _0x65c2db=this['addExtraEnemyDropsSingles'](_0x65c2db),_0x65c2db=this['addExtraEnemyDropsBatch'](_0x65c2db),_0x65c2db=this['addExtraEnemyDropsConditional'](_0x65c2db),_0x65c2db=this['addExtraEnemyDropsJS'](_0x65c2db),_0x65c2db;},Game_Enemy['prototype'][_0x22aba5(0x253)]=function(_0x96738a){const _0x12e517=_0x22aba5;return _0x96738a;const _0x172a39=this['enemy']()['note'],_0x30de91=this[_0x12e517(0x33c)](),_0x1bd792=_0x172a39[_0x12e517(0x27b)](/<(.*?) DROP[ ](.*):[ ](\d+)([%％])>/gi);if(_0x1bd792)for(const _0x401ef7 of _0x1bd792){let _0x4a1f39=$dataItems,_0x44a4e0=null,_0x196274=0x0;if(_0x401ef7[_0x12e517(0x27b)](/<(.*?) DROP[ ](\d+):[ ](\d+)([%％])>/i)){if(_0x12e517(0x2a2)!==_0x12e517(0x2a2)){_0xd2ae2a['ConvertParams'](_0xc26e34,_0x58170d);const _0xd340f0=_0x23e82b['id'],_0x43bfda=_0xa7ee44[_0x12e517(0x274)];_0x318cbd[_0x12e517(0x2dc)](_0xd340f0,_0x43bfda);}else _0x4a1f39=VisuMZ['ExtraEnemyDrops'][_0x12e517(0x1cc)](RegExp['$1']),_0x44a4e0=_0x4a1f39[Number(RegExp['$2'])],_0x196274=Number(RegExp['$3'])*0.01;}else{if(_0x401ef7[_0x12e517(0x27b)](/<(.*?) DROP[ ](.*):[ ](\d+)([%％])>/i)){if(_0x12e517(0x2a4)!==_0x12e517(0x2a4)){if(this[_0x12e517(0x23c)]===_0x21be35)this[_0x12e517(0x2d1)]();if(this[_0x12e517(0x322)]===_0x42f52c)this[_0x12e517(0x202)]();_0x3b75f9=_0x358030||0x1,this['_forcedRewards'][_0x12e517(0x220)]=this[_0x12e517(0x23c)][_0x12e517(0x220)]||[];while(_0x3dcb6b--){const _0x143875=_0x37280d[_0x283e1a];if(_0x143875)this[_0x12e517(0x23c)][_0x12e517(0x220)][_0x12e517(0x1a6)](_0x143875);}}else _0x44a4e0=VisuMZ[_0x12e517(0x2a1)][_0x12e517(0x321)](RegExp['$1'],RegExp['$2']),_0x196274=Number(RegExp['$3'])*0.01;}}_0x44a4e0&&Math[_0x12e517(0x18d)]()<_0x196274*_0x30de91&&_0x96738a[_0x12e517(0x1a6)](_0x44a4e0);}return _0x96738a;},Game_Enemy['prototype'][_0x22aba5(0x1cf)]=function(_0x2383e3){const _0x574d58=_0x22aba5;return _0x2383e3;const _0xfb5245=this[_0x574d58(0x28b)]()[_0x574d58(0x289)],_0x25ba35=this[_0x574d58(0x33c)]();if(_0xfb5245['match'](/<(?:DROP|DROPS)>\s*([\s\S]*)\s*<\/(?:DROP|DROPS)>/i)){if(_0x574d58(0x2ac)!==_0x574d58(0x1a7)){const _0x585fdd=String(RegExp['$1']),_0xa2e2b3=_0x585fdd[_0x574d58(0x27b)](/(.*?)[ ](.*):[ ](\d+)([%％])/gi);if(_0xa2e2b3){if(_0x574d58(0x236)===_0x574d58(0x2cb)){this[_0x574d58(0x1dd)][_0x574d58(0x18c)]-=0x1;const _0x4e9b09=_0x581746[_0x574d58(0x2a1)]['Settings'][_0x574d58(0x24e)],_0xef8acd=_0x4e9b09['bounces'],_0x46ea4a=this[_0x574d58(0x1dd)][_0x574d58(0x18c)],_0x5d0318=_0x12d074[_0x574d58(0x269)](_0x4e9b09['bounceReduction'],_0xef8acd-_0x46ea4a);if(this[_0x574d58(0x1dd)][_0x574d58(0x18c)]>=0x0)this[_0x574d58(0x1dd)][_0x574d58(0x314)]=_0x5d7272[_0x574d58(0x29f)](_0x4e9b09[_0x574d58(0x314)]*_0x5d0318);else _0x4e9b09[_0x574d58(0x1ad)]&&_0x56c2be(this[_0x574d58(0x28f)][_0x574d58(0x329)](this),_0x4e9b09[_0x574d58(0x333)]);if(_0x4e9b09[_0x574d58(0x210)]){const _0xfe2701={'name':this[_0x574d58(0x1dd)][_0x574d58(0x234)],'volume':_0x4b92d2['round'](_0x4e9b09['sfxVolume']*_0x5d0318),'pitch':_0x4e9b09[_0x574d58(0x1e1)],'pan':_0x4e9b09[_0x574d58(0x2fe)]};_0x4f2fba['playSe'](_0xfe2701);}}else{let _0x2c110b=$dataItems;for(const _0x2815fe of _0xa2e2b3){let _0x1777e6=null,_0x3139b2=0x0;if(_0x2815fe[_0x574d58(0x27b)](/(.*?)[ ](\d+):[ ](\d+)([%％])/i))_0x2c110b=VisuMZ['ExtraEnemyDrops'][_0x574d58(0x1cc)](RegExp['$1']),_0x1777e6=_0x2c110b[Number(RegExp['$2'])],_0x3139b2=Number(RegExp['$3'])*0.01;else _0x2815fe[_0x574d58(0x27b)](/(.*?)[ ](.*):[ ](\d+)([%％])/i)&&(_0x1777e6=VisuMZ[_0x574d58(0x2a1)][_0x574d58(0x321)](RegExp['$1'],RegExp['$2']),_0x3139b2=Number(RegExp['$3'])*0.01);if(_0x1777e6&&Math[_0x574d58(0x18d)]()<_0x3139b2*_0x25ba35){if(_0x574d58(0x328)==='TuxxZ')_0x2383e3[_0x574d58(0x1a6)](_0x1777e6);else{let _0x270ff1=_0x577b6b['ExtraEnemyDrops'][_0x574d58(0x1ca)][_0x574d58(0x2e0)](this);return _0x270ff1=this[_0x574d58(0x18e)](_0x270ff1),_0x594664['ExtraEnemyDrops'][_0x574d58(0x1bb)](_0x270ff1);}}}}}}else _0x4bc767[_0x574d58(0x1a6)](_0x38145d(_0x232c69['$1'])||0x0);}return _0x2383e3;},VisuMZ[_0x22aba5(0x2a1)]['getDatabase']=function(_0x571a86){const _0x593bbf=_0x22aba5;_0x571a86=_0x571a86[_0x593bbf(0x337)]()[_0x593bbf(0x2f0)]();if(['I','ITEM','ITEMS'][_0x593bbf(0x296)](_0x571a86))return $dataItems;if(['W',_0x593bbf(0x293),_0x593bbf(0x1ff)][_0x593bbf(0x296)](_0x571a86))return $dataWeapons;if(['A',_0x593bbf(0x1ee),_0x593bbf(0x2e7)][_0x593bbf(0x296)](_0x571a86))return $dataArmors;if(['S',_0x593bbf(0x218),_0x593bbf(0x2da)][_0x593bbf(0x296)](_0x571a86))return $dataSkills;if(['T',_0x593bbf(0x235),_0x593bbf(0x1bd)]['includes'](_0x571a86))return $dataStates;return $dataItems;},VisuMZ[_0x22aba5(0x2a1)][_0x22aba5(0x1dc)]=function(_0x905e33){const _0x409d97=_0x22aba5;_0x905e33=_0x905e33[_0x409d97(0x337)]()[_0x409d97(0x2f0)]();if(['I','ITEM','ITEMS']['includes'](_0x905e33))return 0x1;if(['W',_0x409d97(0x293),_0x409d97(0x1ff)][_0x409d97(0x296)](_0x905e33))return 0x2;if(['A','ARMOR',_0x409d97(0x2e7)][_0x409d97(0x296)](_0x905e33))return 0x3;return 0x0;},VisuMZ[_0x22aba5(0x2a1)][_0x22aba5(0x321)]=function(_0x579e6e,_0x5ebbf8){const _0x32d964=_0x22aba5;_0x579e6e=_0x579e6e[_0x32d964(0x337)]()['trim']();if(['I','ITEM','ITEMS'][_0x32d964(0x296)](_0x579e6e))return _0x32d964(0x1a2)===_0x32d964(0x1a2)?$dataItems[DataManager[_0x32d964(0x272)](_0x5ebbf8)]:this[_0x32d964(0x226)]()['deathTurn']||0x0;if(['W',_0x32d964(0x293),'WEAPONS'][_0x32d964(0x296)](_0x579e6e)){if(_0x32d964(0x247)==='aHBsB')_0x3559d8[_0x32d964(0x21f)][_0x32d964(0x2df)](_0x5c6114);else return $dataWeapons[DataManager['getWeaponIdWithName'](_0x5ebbf8)];}if(['A',_0x32d964(0x1ee),'ARMORS'][_0x32d964(0x296)](_0x579e6e))return $dataArmors[DataManager['getArmorIdWithName'](_0x5ebbf8)];if(['S',_0x32d964(0x218),'SKILLS'][_0x32d964(0x296)](_0x579e6e))return $dataSkills[DataManager['getSkillIdWithName'](_0x5ebbf8)];if(['T',_0x32d964(0x235),_0x32d964(0x1bd)][_0x32d964(0x296)](_0x579e6e)){if(_0x32d964(0x213)===_0x32d964(0x213))return $dataStates[DataManager[_0x32d964(0x30a)](_0x5ebbf8)];else{const _0x707d90={'name':this[_0x32d964(0x1dd)][_0x32d964(0x234)],'volume':_0x18b520[_0x32d964(0x29f)](_0x298346['sfxVolume']*_0x11f1d0),'pitch':_0x56683c[_0x32d964(0x1e1)],'pan':_0x268968['sfxPan']};_0x1afc30[_0x32d964(0x26f)](_0x707d90);}}return null;},VisuMZ['ExtraEnemyDrops'][_0x22aba5(0x1fc)]=function(_0x10aa00,_0x2d5c38){const _0x47587a=_0x22aba5;_0x10aa00=_0x10aa00[_0x47587a(0x337)]()[_0x47587a(0x2f0)]();if(['I',_0x47587a(0x1f6),_0x47587a(0x1b8)][_0x47587a(0x296)](_0x10aa00))return _0x47587a(0x22d)===_0x47587a(0x255)?_0x5e0e6e[_0x1332c0[_0x47587a(0x272)](_0x4bba3c)]:$dataItems[DataManager['getItemIdWithName'](_0x2d5c38)]['id'];if(['W',_0x47587a(0x293),_0x47587a(0x1ff)]['includes'](_0x10aa00))return $dataWeapons[DataManager[_0x47587a(0x1f5)](_0x2d5c38)]['id'];if(['A',_0x47587a(0x1ee),_0x47587a(0x2e7)][_0x47587a(0x296)](_0x10aa00)){if(_0x47587a(0x286)===_0x47587a(0x1f9))this['_data'][_0x47587a(0x1c5)]=_0x20abd1[_0x47587a(0x29f)](_0x319a8f),this[_0x47587a(0x1dd)][_0x47587a(0x22e)]=_0x340967[_0x47587a(0x29f)](_0x5ccef6);else return $dataArmors[DataManager[_0x47587a(0x299)](_0x2d5c38)]['id'];}return 0x0;},VisuMZ[_0x22aba5(0x2a1)][_0x22aba5(0x1bb)]=function(_0x27e0a2){const _0x2d1b4a=_0x22aba5;_0x27e0a2[_0x2d1b4a(0x2f9)]((_0x32d530,_0x226f1c)=>_0x32d530['id']-_0x226f1c['id']);const _0x44af82=_0x27e0a2[_0x2d1b4a(0x198)](_0x3ede5e=>DataManager[_0x2d1b4a(0x1ac)](_0x3ede5e)),_0x64cc2a=_0x27e0a2['filter'](_0x1646d6=>DataManager['isWeapon'](_0x1646d6)),_0x524860=_0x27e0a2[_0x2d1b4a(0x198)](_0x226981=>DataManager[_0x2d1b4a(0x20b)](_0x226981));let _0x447276=_0x44af82['concat'](_0x64cc2a)[_0x2d1b4a(0x283)](_0x524860);return _0x447276;},Game_Enemy['prototype']['addExtraEnemyDropsJS']=function(_0x3c2161){const _0x3f4b91=_0x22aba5,_0x32bdd7=this[_0x3f4b91(0x28b)]()['id'];if(!VisuMZ[_0x3f4b91(0x2a1)]['JS'][_0x32bdd7])return _0x3c2161;return VisuMZ[_0x3f4b91(0x2a1)]['JS'][_0x32bdd7][_0x3f4b91(0x2e0)](this,_0x3c2161);},Game_Enemy[_0x22aba5(0x1d9)][_0x22aba5(0x2b0)]=function(_0x56772e){const _0x3634be=_0x22aba5,_0x3cf35e=this[_0x3634be(0x28b)]()[_0x3634be(0x289)][_0x3634be(0x20e)](/[\r\n]+/);let _0x41fa4a=null,_0x455340=0x0;for(const _0x8dc937 of _0x3cf35e){if(!_0x8dc937)continue;if(!_0x41fa4a&&_0x8dc937[_0x3634be(0x27b)](/<CONDITIONAL (ITEM|WEAPON|ARMOR) (\d+)[ ](?:THROUGH|to)[ ](\d+) (?:DROP|DROPS)>/i)){const _0x3966ed=VisuMZ['ExtraEnemyDrops'][_0x3634be(0x1cc)](RegExp['$1']),_0x164963=Number(RegExp['$2']),_0x15fea4=Number(RegExp['$3']);_0x41fa4a=[];for(let _0x55770a=_0x164963;_0x55770a<=_0x15fea4;_0x55770a++){const _0x27f14d=_0x3966ed[_0x55770a]||null;if(_0x27f14d&&_0x27f14d[_0x3634be(0x2b9)][_0x3634be(0x2f0)]()!==''&&!_0x27f14d[_0x3634be(0x2b9)][_0x3634be(0x27b)](/-----/i)){if(_0x3634be(0x2e8)!==_0x3634be(0x2e8)){const _0x2feb10=_0x16264d(_0x41729f['$1']),_0x328ca9=_0x2053fc(_0x4a721a['$2'])*0.01;this[_0x3634be(0x19f)](_0x2feb10)&&(_0x146db6+=_0x328ca9);}else _0x41fa4a[_0x3634be(0x1a6)](_0x27f14d);}}_0x455340=0x0;}else{if(!_0x41fa4a&&_0x8dc937[_0x3634be(0x27b)](/<CONDITIONAL (ITEM|WEAPON|ARMOR) (\d+) (?:DROP|DROPS)>/i)){const _0x3afb5a=VisuMZ[_0x3634be(0x2a1)][_0x3634be(0x1cc)](RegExp['$1']);_0x41fa4a=[_0x3afb5a[Number(RegExp['$2'])]||null],_0x455340=0x0;}else{if(!_0x41fa4a&&_0x8dc937[_0x3634be(0x27b)](/<CONDITIONAL (ITEM|WEAPON|ARMOR) (.*) (?:DROP|DROPS)>/i)){if(_0x3634be(0x339)===_0x3634be(0x1f2)){if(this[_0x3634be(0x23c)]===_0x43e4a7)this[_0x3634be(0x2d1)]();if(this[_0x3634be(0x322)]===_0x241132)this[_0x3634be(0x202)]();_0x5e8222=_0x4949db||0x1;while(_0x136d75--){const _0x39a192=_0x190144[_0x2e3401];if(_0x39a192)this[_0x3634be(0x322)]['drops']['push'](_0x39a192);}}else _0x41fa4a=[VisuMZ[_0x3634be(0x2a1)][_0x3634be(0x321)](RegExp['$1'],RegExp['$2'])],_0x455340=0x0;}else{if(_0x41fa4a&&_0x8dc937[_0x3634be(0x27b)](/<\/CONDITIONAL (.*) (?:DROP|DROPS)>/i)){for(const _0x55df98 of _0x41fa4a){if(Math[_0x3634be(0x18d)]()<_0x455340)_0x56772e[_0x3634be(0x1a6)](_0x55df98);}_0x41fa4a=null,_0x455340=0x0;}else{if(_0x41fa4a&&_0x8dc937[_0x3634be(0x27b)](/(.*):[ ]([\+\-]\d+)([%％])/i)){const _0x2420bd=String(RegExp['$1']),_0x2f88c4=Number(RegExp['$2'])*0.01;this['meetsExtraEnemyDropsCondition'](_0x2420bd)&&(_0x455340+=_0x2f88c4);}}}}}}return _0x56772e;},Game_Enemy['prototype'][_0x22aba5(0x19f)]=function(_0xb6475b){const _0x8e3eff=_0x22aba5;if(_0xb6475b[_0x8e3eff(0x27b)](/\bALWAYS\b/i)){if(_0x8e3eff(0x1da)!=='GeLXy'){const _0x5c5403=this[_0x8e3eff(0x226)]()[_0x8e3eff(0x208)];return _0x5c5403[_0x37a44b]||0x0;}else return!![];}else{if(_0xb6475b['match'](/\bRANDOM[ ](\d+)([%％])\b/i)){const _0x32bcae=Number(RegExp['$1'])*0.01;return Math[_0x8e3eff(0x18d)]()<_0x32bcae;}else{if(_0xb6475b[_0x8e3eff(0x27b)](/\bLAST (?:STRIKE|STRUCK)[ ](ELEMENT|ITEM|SKILL|STYPE|STATE)[ ](\d+)\b/i)){let _0x34fb1c=String(RegExp['$1'])['toLowerCase']();const _0x63a170=Number(RegExp['$2']);_0x34fb1c=_0x34fb1c[_0x8e3eff(0x26a)](0x0)[_0x8e3eff(0x337)]()+_0x34fb1c[_0x8e3eff(0x256)](0x1);if(_0x34fb1c[_0x8e3eff(0x27b)](/STYPE/i))_0x34fb1c=_0x8e3eff(0x29a);const _0x40b476=this[_0x8e3eff(0x226)]();if(_0x34fb1c==='Item'&&_0x40b476[_0x8e3eff(0x1c1)]!==_0x8e3eff(0x28e))return![];if(_0x34fb1c===_0x8e3eff(0x1e5)&&_0x40b476['lastStruckType']!==_0x8e3eff(0x1e5))return![];if(_0x34fb1c===_0x8e3eff(0x29a)&&_0x40b476[_0x8e3eff(0x1c1)]!==_0x8e3eff(0x1e5))return![];const _0x3233a9='lastStruck%1'[_0x8e3eff(0x2af)](_0x34fb1c);return _0x40b476[_0x3233a9]===_0x63a170;}else{if(_0xb6475b[_0x8e3eff(0x27b)](/\bLAST (?:STRIKE|STRUCK)[ ](ELEMENT|ITEM|SKILL|STYPE|STATE)[ ](.*)\b/i)){let _0x4bad11=String(RegExp['$1'])[_0x8e3eff(0x242)]();const _0x46e16e=String(RegExp['$2']),_0x54d88=this[_0x8e3eff(0x226)]();let _0x25589d=0x0;switch(_0x4bad11[_0x8e3eff(0x337)]()[_0x8e3eff(0x2f0)]()){case'ELEMENT':_0x25589d=DataManager[_0x8e3eff(0x2b1)](_0x46e16e);return _0x54d88[_0x8e3eff(0x1bc)]===_0x25589d;case'ITEM':if(_0x54d88[_0x8e3eff(0x1c1)]!==_0x8e3eff(0x28e))return![];_0x25589d=DataManager['getItemIdWithName'](_0x46e16e);return _0x54d88[_0x8e3eff(0x2a5)]===_0x25589d;case _0x8e3eff(0x218):if(_0x54d88[_0x8e3eff(0x1c1)]!=='Skill')return![];_0x25589d=DataManager[_0x8e3eff(0x1cd)](_0x46e16e);return _0x54d88['lastStruckSkill']===_0x25589d;case _0x8e3eff(0x1c7):if(_0x54d88[_0x8e3eff(0x1c1)]!==_0x8e3eff(0x1e5))return![];_0x25589d=DataManager[_0x8e3eff(0x28d)](_0x46e16e);return _0x54d88[_0x8e3eff(0x1f0)]===_0x25589d;case _0x8e3eff(0x235):_0x25589d=DataManager[_0x8e3eff(0x30a)](_0x46e16e);return _0x54d88[_0x8e3eff(0x239)]===_0x25589d;default:return![];}}else{let _0x5aaee9=VisuMZ['ExtraEnemyDrops'][_0x8e3eff(0x26b)](this,_0xb6475b);try{return eval(_0x5aaee9);}catch(_0x27efa6){return![];}}}}}},VisuMZ[_0x22aba5(0x2a1)][_0x22aba5(0x26b)]=function(_0x3b1526,_0x3af48e){const _0xe48c61=_0x22aba5;while(_0x3af48e[_0xe48c61(0x27b)](/\b\\V\[(\d+)\]\b/gi)){_0x3af48e=_0x3af48e[_0xe48c61(0x32c)](/\b\\V\[(\d+)\]\b/gi,(_0x5d10a6,_0x7b1271)=>$gameVariables[_0xe48c61(0x2d0)](parseInt(_0x7b1271)));}while(_0x3af48e[_0xe48c61(0x27b)](/\bVARIABLE (\d+)\b/gi)){if(_0xe48c61(0x259)===_0xe48c61(0x259))_0x3af48e=_0x3af48e[_0xe48c61(0x32c)](/\bVARIABLE (\d+)\b/gi,(_0x2c5895,_0x1d540c)=>$gameVariables[_0xe48c61(0x2d0)](parseInt(_0x1d540c)));else return _0x1b6b8f[_0xa7aa63[_0xe48c61(0x1f5)](_0xea8352)];}return _0x3af48e=_0x3af48e[_0xe48c61(0x32c)](/\\S\[(\d+)\] ON/gi,(_0xf2340b,_0x5aa234)=>String($gameSwitches[_0xe48c61(0x2d0)](parseInt(_0x5aa234))===!![])),_0x3af48e=_0x3af48e[_0xe48c61(0x32c)](/\\S\[(\d+)\] OFF/gi,(_0x5dd5cc,_0x47f8fb)=>String($gameSwitches[_0xe48c61(0x2d0)](parseInt(_0x47f8fb))===![])),_0x3af48e=_0x3af48e['replace'](/\\S\[(\d+)\]/gi,(_0x5f3fb3,_0x18a5a2)=>String($gameSwitches[_0xe48c61(0x2d0)](parseInt(_0x18a5a2)))),_0x3af48e=_0x3af48e[_0xe48c61(0x32c)](/SWITCH (\d+) ON/gi,(_0x426be0,_0x1d5a3d)=>String($gameSwitches[_0xe48c61(0x2d0)](parseInt(_0x1d5a3d))===!![])),_0x3af48e=_0x3af48e[_0xe48c61(0x32c)](/SWITCH (\d+) OFF/gi,(_0x30262b,_0x7b3e67)=>String($gameSwitches[_0xe48c61(0x2d0)](parseInt(_0x7b3e67))===![])),_0x3af48e=_0x3af48e['replace'](/SWITCH (\d+)/gi,(_0x50b340,_0x5a6e13)=>String($gameSwitches['value'](parseInt(_0x5a6e13)))),_0x3af48e=_0x3af48e[_0xe48c61(0x32c)](/\bON\b/gi,_0xe48c61(0x2fb)),_0x3af48e=_0x3af48e[_0xe48c61(0x32c)](/\bOFF\b/gi,'false'),_0x3af48e=_0x3af48e[_0xe48c61(0x32c)](/\bTRUE\b/gi,_0xe48c61(0x2fb)),_0x3af48e=_0x3af48e[_0xe48c61(0x32c)](/\bFALSE\b/gi,_0xe48c61(0x254)),_0x3af48e=_0x3af48e[_0xe48c61(0x32c)](/\b(ITEM|WEAPON|ARMOR)[ ](\d+)[ ]COUNT\b/gi,(_0x5564c9,_0x5e4d92,_0x364906)=>{const _0xd11830=_0xe48c61;if('mJPbU'===_0xd11830(0x30e))_0x2c3796[_0xd11830(0x1a6)](_0x238db8);else{const _0x13517f=VisuMZ[_0xd11830(0x2a1)][_0xd11830(0x1cc)](_0x5e4d92),_0x5af5d9=_0x13517f[Number(_0x364906)]||null;return _0x5af5d9?$gameParty[_0xd11830(0x21c)](_0x5af5d9):0x0;}}),_0x3af48e=_0x3af48e[_0xe48c61(0x32c)](/\b(ITEM|WEAPON|ARMOR)[ ](.*)[ ]COUNT\b/gi,(_0x539f6c,_0x4bbb72,_0x285278)=>{const _0x23008d=_0xe48c61,_0x2a9336=VisuMZ[_0x23008d(0x2a1)][_0x23008d(0x321)](_0x4bbb72,_0x285278);return _0x2a9336?$gameParty[_0x23008d(0x21c)](_0x2a9336):0x0;}),_0x3af48e=_0x3af48e['replace'](/\bTIMES[ ](ELEMENT|ITEM|SKILL|STYPE|STATE)[ ](\d+)[ ](?:STRIKE|STRUCK)\b/gi,(_0x16ed8e,_0x4744b5,_0x2d1d9d)=>{const _0x3ec53f=_0xe48c61;if(_0x3ec53f(0x1e0)!==_0x3ec53f(0x203)){let _0x246967=_0x4744b5;const _0x442eee=_0x2d1d9d;_0x246967=_0x246967[_0x3ec53f(0x26a)](0x0)[_0x3ec53f(0x337)]()+_0x246967[_0x3ec53f(0x256)](0x1);if(_0x246967[_0x3ec53f(0x27b)](/STYPE/i))_0x246967='SType';const _0x338eee=_0x3ec53f(0x228)['format'](_0x246967);if(_0x3b1526[_0x338eee])return _0x3b1526[_0x338eee](_0x442eee);return 0x0;}else this[_0x3ec53f(0x1dd)][_0x3ec53f(0x23a)]=this['calculateJumpHeight']();}),_0x3af48e=_0x3af48e[_0xe48c61(0x32c)](/\bTIMES[ ](ELEMENT|ITEM|SKILL|STYPE|STATE)[ ](.*)[ ](?:STRIKE|STRUCK)\b/gi,(_0x1f526f,_0x20d110,_0x18119f)=>{const _0x6b764b=_0xe48c61;let _0x5350a7=_0x20d110;const _0x3f9044=_0x18119f;let _0x26528e=0x0;switch(_0x5350a7[_0x6b764b(0x337)]()['trim']()){case _0x6b764b(0x20c):_0x26528e=DataManager[_0x6b764b(0x2b1)](_0x3f9044);break;case _0x6b764b(0x1f6):_0x26528e=DataManager[_0x6b764b(0x272)](_0x3f9044);break;case _0x6b764b(0x218):_0x26528e=DataManager[_0x6b764b(0x1cd)](_0x3f9044);break;case _0x6b764b(0x1c7):_0x26528e=DataManager[_0x6b764b(0x28d)](_0x3f9044);break;case _0x6b764b(0x235):_0x26528e=DataManager[_0x6b764b(0x30a)](_0x3f9044);break;default:return 0x0;}_0x5350a7=_0x5350a7[_0x6b764b(0x26a)](0x0)[_0x6b764b(0x337)]()+_0x5350a7[_0x6b764b(0x256)](0x1);if(_0x5350a7[_0x6b764b(0x27b)](/STYPE/i))_0x5350a7='SType';const _0x5e7d2f='timesStruck%1'['format'](_0x5350a7);if(_0x3b1526[_0x5e7d2f])return _0x3b1526[_0x5e7d2f](_0x26528e);return 0x0;}),_0x3af48e=_0x3af48e[_0xe48c61(0x32c)](/\bALIVE MEMBERS\b/gi,$gameParty['aliveMembers']()[_0xe48c61(0x318)]),_0x3af48e=_0x3af48e[_0xe48c61(0x32c)](/\bBATTLE MEMBERS\b/gi,$gameParty[_0xe48c61(0x1fa)]()['length']),_0x3af48e=_0x3af48e['replace'](/\bBATTLE TURNS\b/gi,$gameTroop['turnCount']()),_0x3af48e=_0x3af48e[_0xe48c61(0x32c)](/\bDEAD MEMBERS\b/gi,$gameParty[_0xe48c61(0x2db)]()[_0xe48c61(0x318)]),_0x3af48e=_0x3af48e['replace'](/\bDEATH TURN\b/gi,_0x3b1526['getDeathTurn']()||0x1),_0x3af48e=_0x3af48e['replace'](/\bENEMY LEVEL\b/gi,_0x3b1526[_0xe48c61(0x2c1)]||0x1),_0x3af48e=_0x3af48e[_0xe48c61(0x32c)](/\bPARTY GOLD\b/gi,$gameParty[_0xe48c61(0x250)]()),_0x3af48e=_0x3af48e[_0xe48c61(0x32c)](/\bPARTY MEMBERS\b/gi,$gameParty['members']()[_0xe48c61(0x318)]),_0x3af48e;},VisuMZ['ExtraEnemyDrops'][_0x22aba5(0x2fd)]=Game_Troop[_0x22aba5(0x1d9)][_0x22aba5(0x2fa)],Game_Troop[_0x22aba5(0x1d9)][_0x22aba5(0x2fa)]=function(){const _0x3add1a=_0x22aba5;VisuMZ[_0x3add1a(0x2a1)]['Game_Troop_clear']['call'](this),this[_0x3add1a(0x2d1)](),this['clearBonusRewards']();},Game_Troop[_0x22aba5(0x1d9)][_0x22aba5(0x2d1)]=function(){const _0x4c3978=_0x22aba5;this[_0x4c3978(0x23c)]={'exp':undefined,'gold':undefined,'drops':undefined};},Game_Troop[_0x22aba5(0x1d9)][_0x22aba5(0x202)]=function(){this['_bonusRewards']={'exp':0x0,'gold':0x0,'drops':[]};},VisuMZ[_0x22aba5(0x2a1)][_0x22aba5(0x291)]=Game_Troop['prototype'][_0x22aba5(0x1b5)],Game_Troop[_0x22aba5(0x1d9)]['expTotal']=function(){const _0x111f6c=_0x22aba5;if(this[_0x111f6c(0x23c)]===undefined)this[_0x111f6c(0x2d1)]();if(this[_0x111f6c(0x322)]===undefined)this[_0x111f6c(0x202)]();let _0x200022=this[_0x111f6c(0x276)]?this[_0x111f6c(0x276)]():0x1,_0x48fc1f=this[_0x111f6c(0x23c)][_0x111f6c(0x2ef)]===undefined?VisuMZ['ExtraEnemyDrops'][_0x111f6c(0x291)][_0x111f6c(0x2e0)](this):this[_0x111f6c(0x23c)][_0x111f6c(0x2ef)]*_0x200022;return Math[_0x111f6c(0x29f)](Math['max'](_0x48fc1f+(this[_0x111f6c(0x322)]['exp']||0x0),0x0));},VisuMZ[_0x22aba5(0x2a1)][_0x22aba5(0x240)]=Game_Troop[_0x22aba5(0x1d9)][_0x22aba5(0x295)],Game_Troop[_0x22aba5(0x1d9)][_0x22aba5(0x295)]=function(){const _0x4127e4=_0x22aba5;if(this[_0x4127e4(0x23c)]===undefined)this[_0x4127e4(0x2d1)]();if(this[_0x4127e4(0x322)]===undefined)this[_0x4127e4(0x202)]();let _0x20eeaa=this[_0x4127e4(0x24c)]?this[_0x4127e4(0x24c)]():0x1,_0x439b9e=this[_0x4127e4(0x23c)]['gold']===undefined?VisuMZ[_0x4127e4(0x2a1)][_0x4127e4(0x240)]['call'](this):this['_forcedRewards'][_0x4127e4(0x250)]*_0x20eeaa;return Math['round'](Math[_0x4127e4(0x257)](_0x439b9e+(this['_bonusRewards'][_0x4127e4(0x250)]||0x0)*this[_0x4127e4(0x24c)](),0x0));},VisuMZ[_0x22aba5(0x2a1)][_0x22aba5(0x211)]=Game_Troop[_0x22aba5(0x1d9)][_0x22aba5(0x310)],Game_Troop[_0x22aba5(0x1d9)][_0x22aba5(0x310)]=function(){const _0x3dcedf=_0x22aba5;if(this[_0x3dcedf(0x23c)]===undefined)this[_0x3dcedf(0x2d1)]();if(this[_0x3dcedf(0x322)]===undefined)this[_0x3dcedf(0x202)]();let _0x218e37=this['_forcedRewards'][_0x3dcedf(0x220)]===undefined?VisuMZ[_0x3dcedf(0x2a1)][_0x3dcedf(0x211)][_0x3dcedf(0x2e0)](this):this[_0x3dcedf(0x23c)][_0x3dcedf(0x220)];return _0x218e37['concat'](this['_bonusRewards']['drops']);},Game_Troop[_0x22aba5(0x1d9)][_0x22aba5(0x32a)]=function(_0x2fa57f){const _0x379fe8=_0x22aba5;if(this[_0x379fe8(0x23c)]===undefined)this['clearForcedRewards']();if(this[_0x379fe8(0x322)]===undefined)this[_0x379fe8(0x202)]();this[_0x379fe8(0x23c)]['exp']=Math[_0x379fe8(0x257)](0x0,Math[_0x379fe8(0x29f)](_0x2fa57f));},Game_Troop['prototype'][_0x22aba5(0x1e2)]=function(_0x480194){const _0x1f1553=_0x22aba5;if(this[_0x1f1553(0x23c)]===undefined)this[_0x1f1553(0x2d1)]();if(this[_0x1f1553(0x322)]===undefined)this[_0x1f1553(0x202)]();this['_bonusRewards'][_0x1f1553(0x2ef)]=Math[_0x1f1553(0x257)](0x0,Math[_0x1f1553(0x29f)](_0x480194));},Game_Troop[_0x22aba5(0x1d9)]['setForcedGold']=function(_0x1d6355){const _0x4a9208=_0x22aba5;if(this['_forcedRewards']===undefined)this[_0x4a9208(0x2d1)]();if(this[_0x4a9208(0x322)]===undefined)this[_0x4a9208(0x202)]();this['_forcedRewards'][_0x4a9208(0x250)]=Math[_0x4a9208(0x257)](0x0,Math['round'](_0x1d6355));},Game_Troop[_0x22aba5(0x1d9)][_0x22aba5(0x212)]=function(_0x84d8c0){const _0x1bb2d1=_0x22aba5;if(this['_forcedRewards']===undefined)this[_0x1bb2d1(0x2d1)]();if(this[_0x1bb2d1(0x322)]===undefined)this['clearBonusRewards']();this['_bonusRewards'][_0x1bb2d1(0x250)]=Math[_0x1bb2d1(0x257)](0x0,Math[_0x1bb2d1(0x29f)](_0x84d8c0));},Game_Troop['prototype'][_0x22aba5(0x1ba)]=function(_0x520724,_0xf20b17){const _0x1eb9c5=_0x22aba5;if(this[_0x1eb9c5(0x23c)]===undefined)this[_0x1eb9c5(0x2d1)]();if(this[_0x1eb9c5(0x322)]===undefined)this[_0x1eb9c5(0x202)]();_0xf20b17=_0xf20b17||0x1,this[_0x1eb9c5(0x23c)][_0x1eb9c5(0x220)]=this['_forcedRewards'][_0x1eb9c5(0x220)]||[];while(_0xf20b17--){const _0x233a90=$dataItems[_0x520724];if(_0x233a90)this['_forcedRewards'][_0x1eb9c5(0x220)][_0x1eb9c5(0x1a6)](_0x233a90);}},Game_Troop['prototype']['addForcedWeaponDrop']=function(_0x2200a6,_0x3314d0){const _0x34f527=_0x22aba5;if(this[_0x34f527(0x23c)]===undefined)this['clearForcedRewards']();if(this[_0x34f527(0x322)]===undefined)this[_0x34f527(0x202)]();_0x3314d0=_0x3314d0||0x1,this[_0x34f527(0x23c)][_0x34f527(0x220)]=this[_0x34f527(0x23c)][_0x34f527(0x220)]||[];while(_0x3314d0--){if(_0x34f527(0x196)!==_0x34f527(0x196)){if(this[_0x34f527(0x23c)]===_0x2f6e87)this['clearForcedRewards']();if(this[_0x34f527(0x322)]===_0x3b5e4b)this[_0x34f527(0x202)]();this[_0x34f527(0x322)]['gold']=_0x5046ec[_0x34f527(0x257)](0x0,_0x2f4fa1['round'](_0x69cbc6));}else{const _0x5e783e=$dataWeapons[_0x2200a6];if(_0x5e783e)this[_0x34f527(0x23c)]['drops'][_0x34f527(0x1a6)](_0x5e783e);}}},Game_Troop[_0x22aba5(0x1d9)][_0x22aba5(0x194)]=function(_0x16fe76,_0x161699){const _0x1beb39=_0x22aba5;if(this[_0x1beb39(0x23c)]===undefined)this[_0x1beb39(0x2d1)]();if(this[_0x1beb39(0x322)]===undefined)this[_0x1beb39(0x202)]();_0x161699=_0x161699||0x1,this[_0x1beb39(0x23c)]['drops']=this['_forcedRewards']['drops']||[];while(_0x161699--){if(_0x1beb39(0x1c6)===_0x1beb39(0x2c0)){let _0x447641=_0xcf2eee,_0x5a792a=null,_0xdbc56f=0x0;if(_0x1c9b54[_0x1beb39(0x27b)](/<(.*?) DROP[ ](\d+):[ ](\d+)([%％])>/i))_0x447641=_0x4f9fc8['ExtraEnemyDrops'][_0x1beb39(0x1cc)](_0x3e5306['$1']),_0x5a792a=_0x447641[_0x21f5c3(_0x3c37e0['$2'])],_0xdbc56f=_0x34db20(_0xed1a87['$3'])*0.01;else _0x2ad720[_0x1beb39(0x27b)](/<(.*?) DROP[ ](.*):[ ](\d+)([%％])>/i)&&(_0x5a792a=_0x21308c['ExtraEnemyDrops']['getDatabaseItem'](_0x8e8dfe['$1'],_0x1a2f43['$2']),_0xdbc56f=_0x529454(_0x38e77b['$3'])*0.01);_0x5a792a&&_0xdb220[_0x1beb39(0x18d)]()<_0xdbc56f*_0x2857cb&&_0x141df4[_0x1beb39(0x1a6)](_0x5a792a);}else{const _0x5a28d9=$dataArmors[_0x16fe76];if(_0x5a28d9)this[_0x1beb39(0x23c)][_0x1beb39(0x220)][_0x1beb39(0x1a6)](_0x5a28d9);}}},Game_Troop[_0x22aba5(0x1d9)][_0x22aba5(0x18b)]=function(_0x189194,_0x16eada){const _0x2953b4=_0x22aba5;if(this['_forcedRewards']===undefined)this['clearForcedRewards']();if(this[_0x2953b4(0x322)]===undefined)this[_0x2953b4(0x202)]();_0x16eada=_0x16eada||0x1;while(_0x16eada--){const _0x3f5126=$dataItems[_0x189194];if(_0x3f5126)this[_0x2953b4(0x322)]['drops'][_0x2953b4(0x1a6)](_0x3f5126);}},Game_Troop[_0x22aba5(0x1d9)]['addBonusWeaponDrop']=function(_0x136ba5,_0x45bf13){const _0x1add73=_0x22aba5;if(this[_0x1add73(0x23c)]===undefined)this[_0x1add73(0x2d1)]();if(this['_bonusRewards']===undefined)this[_0x1add73(0x202)]();_0x45bf13=_0x45bf13||0x1;while(_0x45bf13--){const _0x140427=$dataWeapons[_0x136ba5];if(_0x140427)this[_0x1add73(0x322)][_0x1add73(0x220)]['push'](_0x140427);}},Game_Troop[_0x22aba5(0x1d9)][_0x22aba5(0x30c)]=function(_0x57df78,_0x20a2a6){const _0x1dd342=_0x22aba5;if(this[_0x1dd342(0x23c)]===undefined)this[_0x1dd342(0x2d1)]();if(this[_0x1dd342(0x322)]===undefined)this[_0x1dd342(0x202)]();_0x20a2a6=_0x20a2a6||0x1;while(_0x20a2a6--){if(_0x1dd342(0x1c2)!==_0x1dd342(0x2bd)){const _0x2f6a79=$dataArmors[_0x57df78];if(_0x2f6a79)this['_bonusRewards'][_0x1dd342(0x220)][_0x1dd342(0x1a6)](_0x2f6a79);}else _0x2ed398[_0x1dd342(0x1a6)](_0x1fd78c[_0x1dd342(0x305)]);}},Game_Troop[_0x22aba5(0x1d9)][_0x22aba5(0x1e3)]=function(){const _0x18788d=_0x22aba5;if(this[_0x18788d(0x23c)]===undefined)this['clearForcedRewards']();return this[_0x18788d(0x23c)][_0x18788d(0x220)]!==undefined;};if(Imported[_0x22aba5(0x266)]&&VisuMZ['ExtraEnemyDrops']['Settings'][_0x22aba5(0x24e)][_0x22aba5(0x26c)]){VisuMZ['VisualDrops']=VisuMZ[_0x22aba5(0x1f1)]||{},VisuMZ['VisualDrops'][_0x22aba5(0x28c)]=BattleManager['initMembers'],BattleManager[_0x22aba5(0x221)]=function(){const _0x4c6abd=_0x22aba5;$gameTemp[_0x4c6abd(0x21f)]=[],BattleManager[_0x4c6abd(0x325)]=!![],VisuMZ['VisualDrops'][_0x4c6abd(0x28c)]['call'](this);},VisuMZ[_0x22aba5(0x1f1)]['Game_BattlerBase_addNewState']=Game_BattlerBase[_0x22aba5(0x1d9)][_0x22aba5(0x2d9)],Game_BattlerBase['prototype'][_0x22aba5(0x2d9)]=function(_0x4782f4){const _0x5aa7f5=_0x22aba5,_0xde0953=this['isAlive']();VisuMZ[_0x5aa7f5(0x1f1)][_0x5aa7f5(0x2de)][_0x5aa7f5(0x2e0)](this,_0x4782f4);if(!Imported['VisuMZ_1_BattleCore'])return;if(!this[_0x5aa7f5(0x21e)]())return;if(!SceneManager[_0x5aa7f5(0x1de)]())return;const _0xa275a8=SceneManager[_0x5aa7f5(0x19b)][_0x5aa7f5(0x2c9)];if(!_0xa275a8)return;_0xde0953&&this[_0x5aa7f5(0x233)]()&&(_0x5aa7f5(0x1e4)==='tGswB'?_0x32f8bf*=_0x4e9c63(_0x25f6a8['$1'])/0x64:_0xa275a8[_0x5aa7f5(0x332)](this));},VisuMZ[_0x22aba5(0x1f1)][_0x22aba5(0x214)]=Game_BattlerBase['prototype'][_0x22aba5(0x2f1)],Game_BattlerBase[_0x22aba5(0x1d9)]['eraseState']=function(_0x5b3763){const _0x33233d=_0x22aba5,_0x30cd1a=this[_0x33233d(0x233)]();VisuMZ['VisualDrops'][_0x33233d(0x214)][_0x33233d(0x2e0)](this,_0x5b3763);if(!Imported[_0x33233d(0x266)])return;if(!this['isEnemy']())return;if(!SceneManager['isSceneBattle']())return;const _0x2eabaf=SceneManager['_scene']['_spriteset'];if(!_0x2eabaf)return;if(_0x30cd1a&&this[_0x33233d(0x1b9)]()){_0x2eabaf[_0x33233d(0x225)](this);if(VisuMZ['ExtraEnemyDrops'][_0x33233d(0x315)][_0x33233d(0x24e)][_0x33233d(0x335)])this[_0x33233d(0x23e)]();}},VisuMZ[_0x22aba5(0x1f1)][_0x22aba5(0x2f3)]=Game_Enemy['prototype']['setup'],Game_Enemy[_0x22aba5(0x1d9)][_0x22aba5(0x243)]=function(_0x18e379,_0x53163f,_0x2e6c0f){const _0x47b1bb=_0x22aba5;VisuMZ['VisualDrops'][_0x47b1bb(0x2f3)][_0x47b1bb(0x2e0)](this,_0x18e379,_0x53163f,_0x2e6c0f);},Game_Enemy[_0x22aba5(0x1d9)][_0x22aba5(0x23e)]=function(){const _0x582aab=_0x22aba5;this[_0x582aab(0x238)]={};},VisuMZ[_0x22aba5(0x1f1)][_0x22aba5(0x33a)]=Game_Enemy[_0x22aba5(0x1d9)]['exp'],Game_Enemy[_0x22aba5(0x1d9)]['exp']=function(){const _0x258c49=_0x22aba5;this['_visualDrops']=this[_0x258c49(0x238)]||{};if(this[_0x258c49(0x238)][_0x258c49(0x2ef)]!==undefined)return this[_0x258c49(0x238)]['exp'];return this[_0x258c49(0x238)]['exp']=VisuMZ[_0x258c49(0x1f1)]['Game_Enemy_exp'][_0x258c49(0x2e0)](this),this[_0x258c49(0x238)]['exp'];},VisuMZ['VisualDrops'][_0x22aba5(0x2ce)]=Game_Enemy['prototype'][_0x22aba5(0x250)],Game_Enemy[_0x22aba5(0x1d9)]['gold']=function(){const _0x2b9093=_0x22aba5;this[_0x2b9093(0x238)]=this['_visualDrops']||{};if(this[_0x2b9093(0x238)]['gold']!==undefined)return this['_visualDrops'][_0x2b9093(0x250)];return this[_0x2b9093(0x238)][_0x2b9093(0x250)]=VisuMZ['VisualDrops'][_0x2b9093(0x2ce)]['call'](this),this[_0x2b9093(0x238)][_0x2b9093(0x250)];},VisuMZ['VisualDrops'][_0x22aba5(0x1ca)]=Game_Enemy[_0x22aba5(0x1d9)][_0x22aba5(0x310)],Game_Enemy[_0x22aba5(0x1d9)]['makeDropItems']=function(){const _0x11a529=_0x22aba5;this[_0x11a529(0x238)]=this[_0x11a529(0x238)]||{};if(this[_0x11a529(0x238)][_0x11a529(0x220)]!==undefined)return this[_0x11a529(0x238)]['drops'];return this[_0x11a529(0x238)][_0x11a529(0x220)]=VisuMZ[_0x11a529(0x1f1)][_0x11a529(0x1ca)]['call'](this),this[_0x11a529(0x238)][_0x11a529(0x220)];},Spriteset_Battle[_0x22aba5(0x1d9)][_0x22aba5(0x225)]=function(_0x2398bc){const _0x496ba5=_0x22aba5;if(!_0x2398bc)return;$gameTemp[_0x496ba5(0x21f)]=$gameTemp['_visualDropSprites']||[];const _0x580608=[];for(const _0x5b4c91 of $gameTemp[_0x496ba5(0x21f)]){if(!_0x5b4c91)continue;if(_0x5b4c91[_0x496ba5(0x28b)]!==_0x2398bc)continue;const _0x110ad9=this[_0x496ba5(0x27d)](_0x5b4c91);if(!_0x110ad9)continue;_0x110ad9[_0x496ba5(0x28f)](),_0x580608[_0x496ba5(0x1a6)](_0x5b4c91);}for(const _0x3397c3 of _0x580608){_0x496ba5(0x2e5)==='ckOsi'?_0x23769e['VisualDrops'][_0x496ba5(0x2f3)][_0x496ba5(0x2e0)](this,_0x34ec1a,_0x476a02,_0x307ecf):$gameTemp[_0x496ba5(0x21f)][_0x496ba5(0x2df)](_0x3397c3);}},Spriteset_Battle[_0x22aba5(0x1d9)][_0x22aba5(0x27d)]=function(_0x4314eb){const _0x21fad9=_0x22aba5;return this['_battlerContainer'][_0x21fad9(0x223)]['find'](_0x692016=>_0x692016['_data']===_0x4314eb);},Spriteset_Battle[_0x22aba5(0x1d9)][_0x22aba5(0x332)]=function(_0x2e30bb){const _0x1ee5b0=_0x22aba5,_0x2cb9b4=VisuMZ[_0x1ee5b0(0x2a1)][_0x1ee5b0(0x315)];if(!_0x2e30bb)return;let _0x24d4dc=[];if(_0x2cb9b4[_0x1ee5b0(0x298)][_0x1ee5b0(0x1c0)]){if(_0x1ee5b0(0x313)==='kGdBk')_0x24d4dc[_0x1ee5b0(0x1a6)](VisuMZ[_0x1ee5b0(0x1f1)][_0x1ee5b0(0x1ab)](_0x2e30bb,_0x1ee5b0(0x298)));else{const _0x26287c=_0x1ee5b0(0x2c6)[_0x1ee5b0(0x2af)](_0x33a2b7(_0x5741e7['$1']));_0x14c3d0[_0x33adf1[_0x1ee5b0(0x318)]-0x1][_0x1ee5b0(0x1a6)](_0x26287c);}}_0x2cb9b4[_0x1ee5b0(0x263)]['show']&&(_0x1ee5b0(0x19a)===_0x1ee5b0(0x19a)?_0x24d4dc[_0x1ee5b0(0x1a6)](VisuMZ['VisualDrops']['getExpGoldDropIcon'](_0x2e30bb,_0x1ee5b0(0x263))):_0x144d39=_0x4191e9[_0xe8318d]);if(_0x2cb9b4[_0x1ee5b0(0x25a)][_0x1ee5b0(0x1c0)]){if('rHFgP'!==_0x1ee5b0(0x19d)){_0x4279b3[_0x1ee5b0(0x2a1)]['ParseEnemyNotetags']['call'](this,_0x17cf38),_0x137203['ExtraEnemyDrops'][_0x1ee5b0(0x1d4)](_0x2c8f82);if(_0x2f9703[_0x1ee5b0(0x289)]['match'](/<JS DROPS>\s*([\s\S]*)\s*<\/JS DROPS>/i)){const _0x431897=_0x59e766(_0x145b07['$1']);_0x27f476[_0x1ee5b0(0x2a1)][_0x1ee5b0(0x309)](_0xd78ef6,_0x431897);}}else _0x24d4dc=_0x24d4dc['concat'](VisuMZ[_0x1ee5b0(0x1f1)]['getItemDropIcons'](_0x2e30bb));}const _0x1b7541=VisuMZ[_0x1ee5b0(0x1f1)][_0x1ee5b0(0x1b3)](_0x2e30bb,_0x24d4dc);$gameTemp[_0x1ee5b0(0x21f)]=$gameTemp[_0x1ee5b0(0x21f)]||[];let _0x2af512=0x0;for(const _0x1b3826 of _0x1b7541){if('VzaTk'!==_0x1ee5b0(0x287)){if(!_0x1b3826)continue;$gameTemp['_visualDropSprites'][_0x1ee5b0(0x1a6)](_0x1b3826[_0x1ee5b0(0x1dd)]),setTimeout(this[_0x1ee5b0(0x232)][_0x1ee5b0(0x329)](this,_0x1b3826),_0x2af512),_0x2af512+=_0x2cb9b4[_0x1ee5b0(0x24e)][_0x1ee5b0(0x222)];}else return this['_conditionalDropsTrackedData']===_0xd1a88&&this[_0x1ee5b0(0x2a3)](),this[_0x1ee5b0(0x330)];}},Spriteset_Battle[_0x22aba5(0x1d9)][_0x22aba5(0x232)]=function(_0x10165){const _0x3ff409=_0x22aba5;if(!SceneManager['isSceneBattle']())return;this[_0x3ff409(0x26e)][_0x3ff409(0x230)](_0x10165),_0x10165[_0x3ff409(0x2a0)]();},VisuMZ['VisualDrops']['getExpGoldDropIcon']=function(_0xf5f3f7,_0x405fae){const _0x3ce4f8=_0x22aba5;if(!_0xf5f3f7)return 0x0;const _0x37c2cc=VisuMZ[_0x3ce4f8(0x2a1)][_0x3ce4f8(0x315)][_0x405fae],_0x478536=VisuMZ['ExtraEnemyDrops']['Settings']['Rarity'],_0x2ec35c=_0x405fae===_0x3ce4f8(0x298)?_0xf5f3f7[_0x3ce4f8(0x2ef)]():_0xf5f3f7[_0x3ce4f8(0x250)]();let _0x5efa33=0x0,_0x56d803=0x0,_0xb56e0d=_0x478536[_0x3ce4f8(0x1e9)],_0x531c02=_0x478536[_0x3ce4f8(0x1b1)],_0x20733d=JsonEx[_0x3ce4f8(0x1ed)](_0x478536[_0x3ce4f8(0x2cd)]);for(let _0x130b2b=0x1;_0x130b2b<=0xa;_0x130b2b++){if(_0x3ce4f8(0x2f8)===_0x3ce4f8(0x2dd)){const _0x12165f=_0x231326(_0xce12c5['$1']);_0x11c01d[_0x3ce4f8(0x2a1)][_0x3ce4f8(0x309)](_0x39b01e,_0x12165f);}else{const _0x5753d1=_0x3ce4f8(0x2a6)['format'](_0x130b2b),_0x8e4ff9='Icon%1'[_0x3ce4f8(0x2af)](_0x130b2b),_0x29e64a=_0x3ce4f8(0x2e4)[_0x3ce4f8(0x2af)](_0x130b2b);if(_0x37c2cc[_0x5753d1]<_0x5efa33)continue;if(_0x2ec35c<_0x37c2cc[_0x5753d1])continue;_0x5efa33=_0x37c2cc[_0x5753d1],_0x56d803=_0x37c2cc[_0x8e4ff9];const _0xa70c65=_0x37c2cc[_0x29e64a][_0x3ce4f8(0x20f)](0x0,0xa);_0xb56e0d=_0x478536[_0x3ce4f8(0x23d)[_0x3ce4f8(0x2af)](_0xa70c65)]||[0x0,0x0,0x0,0x0],_0x531c02=_0x478536[_0x3ce4f8(0x1db)[_0x3ce4f8(0x2af)](_0xa70c65)]||0x1,_0x20733d=_0x478536['Flags%1'[_0x3ce4f8(0x2af)](_0xa70c65)]||[];}}return[_0x56d803,_0xb56e0d,_0x531c02,_0x20733d];},VisuMZ[_0x22aba5(0x1f1)][_0x22aba5(0x2b2)]=function(_0x49420a){const _0x465e34=_0x22aba5,_0x422c6a=[],_0x275ee0=_0x49420a[_0x465e34(0x310)](),_0x2cf506=VisuMZ['ExtraEnemyDrops'][_0x465e34(0x315)]['Drop'],_0x39d50a=VisuMZ[_0x465e34(0x2a1)][_0x465e34(0x315)][_0x465e34(0x227)];for(const _0x13c0eb of _0x275ee0){if('qcmhb'!==_0x465e34(0x216))this[_0x465e34(0x2b3)]=_0x2bb0ee['max'](this[_0x465e34(0x2b3)]-_0x2d9777['opacityFadeOut'],_0x218848);else{if(!_0x13c0eb)continue;const _0x4736c0=[];if(_0x13c0eb[_0x465e34(0x289)]['match'](/<VISUAL DROP ICON:[ ](\d+)>/i))_0x465e34(0x197)!==_0x465e34(0x197)?_0xcd266f[_0x465e34(0x1a6)](_0x3070db[_0x465e34(0x1f1)]['getExpGoldDropIcon'](_0x4552ad,'Gold')):_0x4736c0[_0x465e34(0x1a6)](Number(RegExp['$1'])||0x0);else{if(_0x2cf506['uniqueIcons']){if(_0x465e34(0x1f4)!==_0x465e34(0x303))_0x4736c0[_0x465e34(0x1a6)](_0x13c0eb[_0x465e34(0x28a)]);else{if(!_0x19e960['ExtraEnemyDrops'][_0x465e34(0x315)][_0x465e34(0x227)]['show'])return;const _0x100aab=this[_0x465e34(0x1dd)];_0x100aab[_0x465e34(0x308)]++;const _0x5b0ce7=_0x100aab['rarityFrames']%_0x100aab[_0x465e34(0x320)],_0x33ae7b=_0x100aab[_0x465e34(0x320)]-_0x5b0ce7,_0x50b60a=_0x100aab[_0x465e34(0x320)]/0x2,_0x404bbd=0x1,_0x217002=-_0x404bbd/_0x3c4e02[_0x465e34(0x269)](_0x50b60a,0x2),_0x2ce3f9=_0x217002*_0x4d0e3b[_0x465e34(0x269)](_0x33ae7b-_0x50b60a,0x2)+_0x404bbd,_0x376ee4=_0x100aab['rarityTint']['map'](_0x544574=>_0x544574*_0x2ce3f9);this[_0x465e34(0x31c)][_0x465e34(0x2be)](_0x376ee4);}}else{if('DVZFL'===_0x465e34(0x261)){if(DataManager['isItem'](_0x13c0eb))_0x4736c0['push'](_0x2cf506['commonItemIcon']);else{if(DataManager[_0x465e34(0x1af)](_0x13c0eb)){if(_0x465e34(0x326)!==_0x465e34(0x326)){if(!_0x19ae22[_0x465e34(0x1de)]())return;this[_0x465e34(0x26e)]['addChild'](_0x1039aa),_0x505b2d[_0x465e34(0x2a0)]();}else _0x4736c0[_0x465e34(0x1a6)](_0x2cf506['commonWeaponIcon']);}else{if(DataManager[_0x465e34(0x20b)](_0x13c0eb)){if(_0x465e34(0x1ea)!==_0x465e34(0x32e))_0x4736c0[_0x465e34(0x1a6)](_0x2cf506[_0x465e34(0x1e8)]);else{const _0x29169b={'kind':_0x18c01a,'dataId':_0x1bb163,'denominator':_0x31ee57};_0x35738d['ExtraEnemyDrops'][_0x465e34(0x25f)](_0x29169b)&&_0x27ceb5['dropItems']['push'](_0x29169b);}}}}}else{_0x32dc20[_0x465e34(0x294)](_0x15c349,_0x50542f);const _0x24187c=_0x425812['id'],_0x3460ac=_0x86ae59['quantity'];_0x2cad78['addBonusItemDrop'](_0x24187c,_0x3460ac);}}}if(_0x13c0eb[_0x465e34(0x289)][_0x465e34(0x27b)](/<VISUAL DROP RARITY:[ ](\d+)>/i)){const _0x178d17=Number(RegExp['$1'])[_0x465e34(0x20f)](0x0,0xa);_0x4736c0['push'](_0x39d50a['Tint%1'[_0x465e34(0x2af)](_0x178d17)]||[0x0,0x0,0x0,0x0]),_0x4736c0[_0x465e34(0x1a6)](_0x39d50a[_0x465e34(0x1db)['format'](_0x178d17)]||0xb4),_0x4736c0[_0x465e34(0x1a6)](_0x39d50a[_0x465e34(0x20d)[_0x465e34(0x2af)](_0x178d17)]||[]);}else{if(_0x13c0eb[_0x465e34(0x289)]['match'](/<VISUAL DROP TINT COLOR:[ ](.*)>/i)){if(_0x465e34(0x1cb)!=='amrgv')return!![];else{let _0x1732d4=String(RegExp['$1'])['split'](',')[_0x465e34(0x215)](_0x294cc3=>Number(_0x294cc3)[_0x465e34(0x20f)](-0xff,0xff));while(_0x1732d4[_0x465e34(0x318)]<0x4)_0x1732d4[_0x465e34(0x1a6)](0x0);_0x4736c0['push'](_0x1732d4);}}else _0x4736c0[_0x465e34(0x1a6)](_0x39d50a[_0x465e34(0x1e9)]);_0x13c0eb['note']['match'](/<VISUAL DROP TINT DURATION:[ ](\d+)>/i)?_0x4736c0[_0x465e34(0x1a6)](Number(RegExp['$1'])||0xb4):_0x4736c0[_0x465e34(0x1a6)](_0x39d50a[_0x465e34(0x1df)]),_0x4736c0[_0x465e34(0x1a6)](JsonEx[_0x465e34(0x1ed)](_0x39d50a[_0x465e34(0x2cd)]));}const _0x47cda9=_0x13c0eb['note'][_0x465e34(0x27b)](/<VISUAL DROP FLAG:[ ](.*)>/gi);if(_0x47cda9){if(_0x465e34(0x271)===_0x465e34(0x30d))_0xa7aa69=_0x54289c[_0x465e34(0x1d2)]();else for(const _0x2fbfca of _0x47cda9){if(_0x465e34(0x252)===_0x465e34(0x22f))return _0xaec4fc(_0x4a8b3f);else{_0x2fbfca[_0x465e34(0x27b)](/<VISUAL DROP FLAG:[ ](.*)>/i);const _0x4405f6=String(RegExp['$1']);_0x4736c0[_0x4736c0['length']-0x1][_0x465e34(0x1a6)](_0x4405f6);}}}if(_0x13c0eb[_0x465e34(0x289)][_0x465e34(0x27b)](/<VISUAL DROP SFX:[ ](.*)>/i)){const _0x6b1036=_0x465e34(0x2c6)['format'](String(RegExp['$1']));_0x4736c0[_0x4736c0[_0x465e34(0x318)]-0x1][_0x465e34(0x1a6)](_0x6b1036);}if(_0x13c0eb[_0x465e34(0x289)][_0x465e34(0x27b)](/<VISUAL DROP SPAWN SFX:[ ](.*)>/i)){const _0x2d6504='SPAWN\x20SFX:\x20%1'[_0x465e34(0x2af)](String(RegExp['$1']));_0x4736c0[_0x4736c0[_0x465e34(0x318)]-0x1]['push'](_0x2d6504);}if(_0x13c0eb[_0x465e34(0x289)]['match'](/<VISUAL DROP BOUNCE HEIGHT:[ ](\d+)([%％])>/i)){const _0x30382c=_0x465e34(0x1ae)[_0x465e34(0x2af)](Number(RegExp['$1']));_0x4736c0[_0x4736c0[_0x465e34(0x318)]-0x1][_0x465e34(0x1a6)](_0x30382c);}if(_0x13c0eb['note'][_0x465e34(0x27b)](/<VISUAL DROP BOUNCE SFX:[ ](.*)>/i)){const _0x7dfab1=_0x465e34(0x2ed)[_0x465e34(0x2af)](String(RegExp['$1']));_0x4736c0[_0x4736c0['length']-0x1][_0x465e34(0x1a6)](_0x7dfab1);}_0x422c6a['push'](_0x4736c0);}}return _0x422c6a;},VisuMZ[_0x22aba5(0x1f1)][_0x22aba5(0x1b3)]=function(_0x585d7f,_0x5dae6c){const _0x29873c=_0x22aba5;_0x5dae6c=_0x5dae6c[_0x29873c(0x198)](_0x503356=>_0x503356[0x0]!==0x0);if(_0x5dae6c[_0x29873c(0x318)]<=0x0)return[];const _0x160bd3=VisuMZ[_0x29873c(0x2a1)][_0x29873c(0x315)][_0x29873c(0x24e)],_0x43e52b=0x168/_0x5dae6c['length'],_0x459271=_0x585d7f[_0x29873c(0x1b6)](),_0x5e2e96=[];let _0x114c43=Math['randomInt'](0x168);for(const _0x4c5c40 of _0x5dae6c){if(_0x4c5c40[0x0]<=0x0)continue;const _0xeeaee9=new Sprite_VisualDrop(_0x585d7f,_0x4c5c40);_0x5e2e96[_0x29873c(0x1a6)](_0xeeaee9);if(_0x459271&&_0x5dae6c[_0x29873c(0x318)]>0x1){const _0x243acc=_0x160bd3[_0x29873c(0x29c)]+_0x160bd3['radiusPerIcon']*_0x5dae6c[_0x29873c(0x318)],_0x4563f2=_0x243acc*Math[_0x29873c(0x200)](_0x114c43*Math['PI']/0xb4),_0x2875e2=_0x243acc*(Math['sin'](_0x114c43*Math['PI']/0xb4)*_0x160bd3[_0x29873c(0x2ba)]);_0xeeaee9['setTargetDestination'](_0x4563f2+_0x459271[_0x29873c(0x2ab)],_0x2875e2+_0x459271['_baseY']),_0x114c43+=_0x43e52b;}}return _0x5e2e96;},VisuMZ[_0x22aba5(0x1f1)][_0x22aba5(0x31f)]=Spriteset_Battle[_0x22aba5(0x1d9)][_0x22aba5(0x30f)],Spriteset_Battle[_0x22aba5(0x1d9)]['createLowerLayer']=function(){const _0x5aa4dd=_0x22aba5;VisuMZ['VisualDrops'][_0x5aa4dd(0x31f)][_0x5aa4dd(0x2e0)](this),this[_0x5aa4dd(0x1c9)]();},Spriteset_Battle[_0x22aba5(0x1d9)][_0x22aba5(0x1c9)]=function(){const _0x1c85b9=_0x22aba5;$gameTemp['_visualDropSprites']=$gameTemp[_0x1c85b9(0x21f)]||[];for(const _0x5afa14 of $gameTemp[_0x1c85b9(0x21f)]){if(_0x1c85b9(0x246)!=='mwKom')_0x2e6f00=[_0x49bccf[_0x1c85b9(0x2a1)]['getDatabaseItem'](_0x26ac4b['$1'],_0x2b03cb['$2'])],_0x262aab=0x0;else{if(!_0x5afa14)continue;const _0x56c4df=new Sprite_VisualDrop(_0x5afa14['enemy'],_0x5afa14[_0x1c85b9(0x28a)],_0x5afa14);this[_0x1c85b9(0x26e)][_0x1c85b9(0x230)](_0x56c4df);}}};function Sprite_VisualDrop(){const _0x17590f=_0x22aba5;this[_0x17590f(0x224)](...arguments);}Sprite_VisualDrop['prototype']=Object[_0x22aba5(0x2ec)](Sprite[_0x22aba5(0x1d9)]),Sprite_VisualDrop[_0x22aba5(0x1d9)][_0x22aba5(0x199)]=Sprite_VisualDrop,Sprite_VisualDrop[_0x22aba5(0x1d9)]['initialize']=function(_0x58da7a,_0xa3aa8a,_0x2d0bc0){const _0x8561bc=_0x22aba5;_0x2d0bc0?(this['_data']=_0x2d0bc0,this[_0x8561bc(0x2ab)]=this[_0x8561bc(0x1dd)][_0x8561bc(0x331)],this[_0x8561bc(0x251)]=this['_data'][_0x8561bc(0x1f8)]):_0x8561bc(0x1a9)===_0x8561bc(0x2e6)?(this[_0x8561bc(0x2ab)]=(this[_0x8561bc(0x2ab)]*(_0x649f67-0x1)+this['_data'][_0x8561bc(0x1c5)])/_0x34c326,this[_0x8561bc(0x251)]=(this[_0x8561bc(0x251)]*(_0x5ea014-0x1)+this[_0x8561bc(0x1dd)][_0x8561bc(0x22e)])/_0x4b7ff9):this[_0x8561bc(0x1dd)]=this[_0x8561bc(0x2d2)](_0x58da7a,_0xa3aa8a),Sprite[_0x8561bc(0x1d9)][_0x8561bc(0x224)][_0x8561bc(0x2e0)](this),this['createChildren']();},Sprite_VisualDrop['prototype']['createInitialPosition']=function(_0x5e7f3c,_0x3b780f){const _0xe85520=_0x22aba5,_0x1805ed=VisuMZ['ExtraEnemyDrops'][_0xe85520(0x315)]['General'],_0x83f327=_0x5e7f3c['battler']();_0x3b780f=JsonEx[_0xe85520(0x1ed)](_0x3b780f);const _0x178f7c={'enemy':_0x5e7f3c,'iconIndex':_0x3b780f[0x0],'duration':_0x1805ed[_0xe85520(0x314)],'angle':_0x1805ed['angle'],'jumpHeight':0x0,'bounces':_0x1805ed[_0xe85520(0x18c)],'bounceSFX':_0x1805ed[_0xe85520(0x210)],'targetX':_0x83f327['_baseX'],'targetY':_0x83f327[_0xe85520(0x251)],'targetOpacity':0xff,'opacityModifier':0x1,'rarityFrames':0x0,'rarityTint':_0x3b780f[0x1]||[0x0,0x0,0x0,0x0],'rarityDuration':_0x3b780f[0x2]||0xb4,'flags':_0x3b780f[0x3]||[]};this['_baseX']=_0x83f327[_0xe85520(0x2ab)],this[_0xe85520(0x251)]=_0x83f327[_0xe85520(0x251)],_0x178f7c[_0xe85520(0x331)]=this[_0xe85520(0x2ab)],_0x178f7c[_0xe85520(0x1f8)]=this[_0xe85520(0x251)],_0x178f7c[_0xe85520(0x2ee)]=_0x178f7c[_0xe85520(0x2ee)][_0xe85520(0x215)](_0x347f31=>String(_0x347f31));for(const _0x283e83 of _0x178f7c[_0xe85520(0x2ee)]){if(_0xe85520(0x2bc)!=='nREvO'){if(!_0x283e83)continue;if(_0x283e83[_0xe85520(0x27b)](/BOUNCE SFX: (.*)/i)){const _0x13552d=String(RegExp['$1']);_0x178f7c['bounceSFX']=_0x13552d;}}else{const _0x49498b=_0x3b5e97(_0x1d5e85['$1']);_0x4db6fc[_0xe85520(0x234)]=_0x49498b;}}return _0x178f7c;},Sprite_VisualDrop['prototype'][_0x22aba5(0x30b)]=function(){const _0xec3265=_0x22aba5;this[_0xec3265(0x24b)](),this[_0xec3265(0x195)](),this[_0xec3265(0x245)](!![]);},Sprite_VisualDrop['prototype']['createShadowSprite']=function(){const _0x33fa7e=_0x22aba5,_0x4069b7=VisuMZ[_0x33fa7e(0x2a1)][_0x33fa7e(0x315)]['General'];if(!_0x4069b7[_0x33fa7e(0x33b)])return;this[_0x33fa7e(0x2a7)]=new Sprite(),this[_0x33fa7e(0x2a7)][_0x33fa7e(0x2f5)]=ImageManager[_0x33fa7e(0x2d6)](_0x4069b7['shadowFilename']),this[_0x33fa7e(0x2a7)][_0x33fa7e(0x1fd)]['x']=0.5,this[_0x33fa7e(0x2a7)][_0x33fa7e(0x1fd)]['y']=0x1,this[_0x33fa7e(0x2a7)]['x']=_0x4069b7[_0x33fa7e(0x338)],this[_0x33fa7e(0x2a7)]['y']=_0x4069b7[_0x33fa7e(0x25d)],this[_0x33fa7e(0x2a7)][_0x33fa7e(0x2b3)]=_0x4069b7[_0x33fa7e(0x306)],this[_0x33fa7e(0x230)](this['_shadowSprite']);},Sprite_VisualDrop[_0x22aba5(0x1d9)][_0x22aba5(0x195)]=function(){const _0x353e2f=_0x22aba5,_0x13b040=VisuMZ[_0x353e2f(0x2a1)][_0x353e2f(0x315)]['General'];this[_0x353e2f(0x31c)]=new Sprite(),this[_0x353e2f(0x31c)]['bitmap']=ImageManager['loadSystem'](_0x353e2f(0x1d0)),this[_0x353e2f(0x31c)][_0x353e2f(0x1fd)]['x']=0.5,this[_0x353e2f(0x31c)][_0x353e2f(0x1fd)]['y']=0.5,this[_0x353e2f(0x31c)][_0x353e2f(0x1f8)]=Math[_0x353e2f(0x29f)](ImageManager[_0x353e2f(0x1b2)]/_0x13b040[_0x353e2f(0x217)]),this['_iconSprite']['y']=this['_iconSprite'][_0x353e2f(0x1f8)];const _0x49ee67=this[_0x353e2f(0x1dd)][_0x353e2f(0x28a)],_0x5e788e=ImageManager[_0x353e2f(0x273)],_0x5afc4f=ImageManager['iconHeight'],_0x1181b9=_0x49ee67%0x10*_0x5e788e,_0x246a07=Math[_0x353e2f(0x29b)](_0x49ee67/0x10)*_0x5afc4f;this[_0x353e2f(0x31c)][_0x353e2f(0x304)](_0x1181b9,_0x246a07,_0x5e788e,_0x5afc4f),this[_0x353e2f(0x230)](this['_iconSprite']);},Sprite_VisualDrop[_0x22aba5(0x1d9)][_0x22aba5(0x302)]=function(_0x336745,_0x307170){const _0x1a94dd=_0x22aba5;this[_0x1a94dd(0x1dd)][_0x1a94dd(0x1c5)]=Math['round'](_0x336745),this[_0x1a94dd(0x1dd)][_0x1a94dd(0x22e)]=Math[_0x1a94dd(0x29f)](_0x307170);},Sprite_VisualDrop[_0x22aba5(0x1d9)]['setRarity']=function(_0x53985c){const _0x44a66f=_0x22aba5,_0x468917=VisuMZ[_0x44a66f(0x2a1)][_0x44a66f(0x315)][_0x44a66f(0x227)],_0x35edc4=(_0x468917[_0x44a66f(0x23d)[_0x44a66f(0x2af)](_0x53985c)]||[0x0,0x0,0x0,0x0])[_0x44a66f(0x215)](_0x326d46=>Number(_0x326d46)['clamp'](-0xff,0xff)),_0x37b888=_0x468917[_0x44a66f(0x1db)[_0x44a66f(0x2af)](_0x53985c)]||0x0;this[_0x44a66f(0x307)](_0x35edc4,_0x37b888);},Sprite_VisualDrop[_0x22aba5(0x1d9)]['setTintInformation']=function(_0x14237b,_0xd836e9){const _0x13f912=_0x22aba5;this['_data'][_0x13f912(0x1ec)]=JsonEx[_0x13f912(0x1ed)](_0x14237b),this[_0x13f912(0x1dd)][_0x13f912(0x320)]=_0xd836e9;},Sprite_VisualDrop[_0x22aba5(0x1d9)][_0x22aba5(0x297)]=function(_0x52d975){const _0x2e708f=_0x22aba5;this['_data'][_0x2e708f(0x2ee)]=JsonEx[_0x2e708f(0x1ed)](_0x52d975)[_0x2e708f(0x215)](_0x1ed720=>String(_0x1ed720));},Sprite_VisualDrop[_0x22aba5(0x1d9)]['startFadeOut']=function(){const _0x4c1dc5=_0x22aba5;this[_0x4c1dc5(0x1dd)][_0x4c1dc5(0x1b0)]=0x0;},Sprite_VisualDrop[_0x22aba5(0x1d9)][_0x22aba5(0x2a0)]=function(){const _0x1f4b77=_0x22aba5;for(const _0x5b13ea of this[_0x1f4b77(0x1dd)]['flags']){if(_0x1f4b77(0x23b)!==_0x1f4b77(0x23b)){if(this['_forcedRewards']===_0x38ab6a)this[_0x1f4b77(0x2d1)]();if(this[_0x1f4b77(0x322)]===_0x3ee27a)this[_0x1f4b77(0x202)]();this[_0x1f4b77(0x23c)][_0x1f4b77(0x250)]=_0x2e67b9[_0x1f4b77(0x257)](0x0,_0x4ba026[_0x1f4b77(0x29f)](_0x2daed7));}else{if(!_0x5b13ea)continue;if(_0x5b13ea[_0x1f4b77(0x27b)](/\bSPAWN SFX:[ ](.*)\b/i)){const _0x4dca5f={'name':String(RegExp['$1']),'volume':0x5a,'pitch':0x64,'pan':0x0};AudioManager[_0x1f4b77(0x26f)](_0x4dca5f);}}}},Sprite_VisualDrop['prototype'][_0x22aba5(0x2d3)]=function(){const _0xc69318=_0x22aba5;Sprite['prototype'][_0xc69318(0x2d3)][_0xc69318(0x2e0)](this),this[_0xc69318(0x245)]();if(this[_0xc69318(0x2b3)]<=0x0)return;this[_0xc69318(0x282)](),this[_0xc69318(0x2b6)](),this[_0xc69318(0x2e1)](),this[_0xc69318(0x25b)](),this[_0xc69318(0x1fe)](),this[_0xc69318(0x1f3)](),this[_0xc69318(0x324)]();},Sprite_VisualDrop[_0x22aba5(0x1d9)][_0x22aba5(0x282)]=function(){const _0x4211df=_0x22aba5;for(const _0x2637ab of this['_data'][_0x4211df(0x2ee)]){if('NLeuo'==='NLeuo'){if(!_0x2637ab)continue;this['updateFlagData'](_0x2637ab);}else _0x251895(_0x4211df(0x2f4)[_0x4211df(0x2af)](_0x82ddf5,_0xc1f678,_0x4f8d8c)),_0x47825f[_0x4211df(0x1ef)]();}},Sprite_VisualDrop[_0x22aba5(0x1d9)][_0x22aba5(0x2c3)]=function(_0x30659e){const _0x2aba1d=_0x22aba5,_0x5ed6c1=VisuMZ['ExtraEnemyDrops'][_0x2aba1d(0x315)][_0x2aba1d(0x227)];switch(_0x30659e['toUpperCase']()[_0x2aba1d(0x2f0)]()){case _0x2aba1d(0x24d):this[_0x2aba1d(0x1dd)][_0x2aba1d(0x27c)]=this['_data']['hue']||0x0,this[_0x2aba1d(0x1dd)]['hue']+=_0x5ed6c1[_0x2aba1d(0x23f)],this[_0x2aba1d(0x31c)]['setHue'](this['_data'][_0x2aba1d(0x27c)]);break;case _0x2aba1d(0x25c):this['_iconSprite'][_0x2aba1d(0x2fc)]=0x1;break;case _0x2aba1d(0x22a):this[_0x2aba1d(0x31c)]['blendMode']=0x2;break;case _0x2aba1d(0x2bb):this['_iconSprite'][_0x2aba1d(0x2fc)]=0x3;break;};},Sprite_VisualDrop['prototype'][_0x22aba5(0x245)]=function(_0x5dea4b){const _0x2d8b56=_0x22aba5,_0x21302c=VisuMZ[_0x2d8b56(0x2a1)][_0x2d8b56(0x315)][_0x2d8b56(0x24e)],_0x25f32c=this[_0x2d8b56(0x1dd)]['targetOpacity']['clamp'](0x0,0xff)*this['opacityRate']();if(this[_0x2d8b56(0x2b3)]>_0x25f32c)this[_0x2d8b56(0x2b3)]=Math[_0x2d8b56(0x257)](this[_0x2d8b56(0x2b3)]-_0x21302c[_0x2d8b56(0x191)],_0x25f32c);else this[_0x2d8b56(0x2b3)]<_0x25f32c&&('HAAbL'===_0x2d8b56(0x27a)?this['_data']=this[_0x2d8b56(0x2d2)](_0x15b137,_0x179180):this[_0x2d8b56(0x2b3)]=Math[_0x2d8b56(0x267)](this[_0x2d8b56(0x2b3)]+_0x21302c[_0x2d8b56(0x191)],_0x25f32c));if(_0x5dea4b)this[_0x2d8b56(0x2b3)]=_0x25f32c;},Sprite_VisualDrop[_0x22aba5(0x1d9)][_0x22aba5(0x31d)]=function(){const _0x3392df=_0x22aba5;if(!BattleManager[_0x3392df(0x325)])return 0x0;if($gameTroop[_0x3392df(0x1e3)]())return 0x0;return this[_0x3392df(0x1dd)][_0x3392df(0x1bf)];},Sprite_VisualDrop[_0x22aba5(0x1d9)]['updateRotation']=function(){const _0x1b685e=_0x22aba5;this['_data'][_0x1b685e(0x314)]>0x0?this[_0x1b685e(0x31c)][_0x1b685e(0x285)]-=this[_0x1b685e(0x284)]():this[_0x1b685e(0x31c)][_0x1b685e(0x285)]=0x0;},Sprite_VisualDrop[_0x22aba5(0x1d9)][_0x22aba5(0x284)]=function(){const _0x1b647a=_0x22aba5;if(this[_0x1b647a(0x2bf)]!==undefined)return this[_0x1b647a(0x2bf)];const _0x1c17a3=VisuMZ[_0x1b647a(0x2a1)][_0x1b647a(0x315)][_0x1b647a(0x24e)];return this[_0x1b647a(0x2bf)]=_0x1c17a3[_0x1b647a(0x285)]/_0x1c17a3[_0x1b647a(0x314)],this['_rotationConstant'];},Sprite_VisualDrop[_0x22aba5(0x1d9)]['updateJumpHeight']=function(){const _0x250d07=_0x22aba5;this[_0x250d07(0x1dd)][_0x250d07(0x314)]>0x0?this[_0x250d07(0x1dd)][_0x250d07(0x23a)]=this[_0x250d07(0x312)]():this[_0x250d07(0x1dd)][_0x250d07(0x23a)]=0x0,this[_0x250d07(0x31c)]['y']=this[_0x250d07(0x31c)][_0x250d07(0x1f8)]-this[_0x250d07(0x1dd)][_0x250d07(0x23a)];},Sprite_VisualDrop[_0x22aba5(0x1d9)]['calculateJumpHeight']=function(){const _0x457b47=_0x22aba5,_0x17a929=VisuMZ['ExtraEnemyDrops'][_0x457b47(0x315)][_0x457b47(0x24e)],_0x436c2c=_0x17a929[_0x457b47(0x18c)],_0x5e571c=this[_0x457b47(0x1dd)][_0x457b47(0x18c)],_0x241e8e=Math['pow'](_0x17a929[_0x457b47(0x2b5)],_0x436c2c-_0x5e571c),_0x4c2367=Math[_0x457b47(0x29f)](_0x17a929[_0x457b47(0x21d)]*_0x241e8e),_0xbfcd1a=Math[_0x457b47(0x29f)](_0x17a929[_0x457b47(0x314)]*_0x241e8e),_0x5bcecd=this[_0x457b47(0x1dd)]['duration'],_0x45b97b=_0x5bcecd,_0xca8547=_0xbfcd1a-_0x45b97b,_0x2664af=_0xbfcd1a/0x2,_0x232fc9=_0x4c2367,_0x110ee1=-_0x232fc9/Math['pow'](_0x2664af,0x2),_0x309533=_0x110ee1*Math[_0x457b47(0x269)](_0xca8547-_0x2664af,0x2)+_0x232fc9;let _0xd48cb1=0x1;for(const _0x260a1d of this[_0x457b47(0x1dd)][_0x457b47(0x2ee)]){if(!_0x260a1d)continue;_0x260a1d[_0x457b47(0x27b)](/BOUNCE HEIGHT (\d+)([%％])/i)&&(_0xd48cb1*=Number(RegExp['$1'])/0x64);}return _0x309533*_0xd48cb1;},Sprite_VisualDrop['prototype'][_0x22aba5(0x25b)]=function(){const _0x1253e3=_0x22aba5;if(this[_0x1253e3(0x1dd)][_0x1253e3(0x314)]>0x0){const _0x4fdc54=VisuMZ[_0x1253e3(0x2a1)][_0x1253e3(0x315)]['General'],_0x257442=this[_0x1253e3(0x1dd)][_0x1253e3(0x314)],_0x5cd254=_0x4fdc54[_0x1253e3(0x314)],_0x41a4e9=_0x4fdc54[_0x1253e3(0x229)];if(Imported[_0x1253e3(0x1b7)])this[_0x1253e3(0x2ab)]=this[_0x1253e3(0x26d)](this[_0x1253e3(0x2ab)],this[_0x1253e3(0x1dd)]['targetX'],_0x257442,_0x5cd254,_0x41a4e9),this[_0x1253e3(0x251)]=this[_0x1253e3(0x26d)](this[_0x1253e3(0x251)],this[_0x1253e3(0x1dd)][_0x1253e3(0x22e)],_0x257442,_0x5cd254,_0x41a4e9);else{if(_0x1253e3(0x270)===_0x1253e3(0x275))return _0x3295e5[_0x3bf5b0[_0x1253e3(0x299)](_0x3cd0f5)]['id'];else this['_baseX']=(this[_0x1253e3(0x2ab)]*(_0x257442-0x1)+this[_0x1253e3(0x1dd)]['targetX'])/_0x257442,this[_0x1253e3(0x251)]=(this[_0x1253e3(0x251)]*(_0x257442-0x1)+this[_0x1253e3(0x1dd)][_0x1253e3(0x22e)])/_0x257442;}}else this['_baseX']=this[_0x1253e3(0x1dd)]['targetX'],this[_0x1253e3(0x251)]=this['_data'][_0x1253e3(0x22e)];this[_0x1253e3(0x1dd)][_0x1253e3(0x331)]=this[_0x1253e3(0x2ab)],this['_data'][_0x1253e3(0x1f8)]=this[_0x1253e3(0x251)];},Sprite_VisualDrop[_0x22aba5(0x1d9)][_0x22aba5(0x26d)]=function(_0x561917,_0x408d46,_0x476116,_0x900474,_0x10b796){const _0x1a8371=_0x22aba5,_0x44ba1b=VisuMZ[_0x1a8371(0x2ca)]((_0x900474-_0x476116)/_0x900474,_0x10b796||_0x1a8371(0x1a3)),_0x2f3395=VisuMZ[_0x1a8371(0x2ca)]((_0x900474-_0x476116+0x1)/_0x900474,_0x10b796||'Linear'),_0x47449b=(_0x561917-_0x408d46*_0x44ba1b)/(0x1-_0x44ba1b);return _0x47449b+(_0x408d46-_0x47449b)*_0x2f3395;},Sprite_VisualDrop[_0x22aba5(0x1d9)][_0x22aba5(0x1fe)]=function(){const _0x4c1db6=_0x22aba5;this['x']=this[_0x4c1db6(0x2ab)],this['y']=this[_0x4c1db6(0x251)];},Sprite_VisualDrop[_0x22aba5(0x1d9)]['updateTint']=function(){const _0x10a4ea=_0x22aba5;if(!VisuMZ[_0x10a4ea(0x2a1)][_0x10a4ea(0x315)][_0x10a4ea(0x227)][_0x10a4ea(0x1c0)])return;const _0x110f2e=this[_0x10a4ea(0x1dd)];_0x110f2e[_0x10a4ea(0x308)]++;const _0x47043f=_0x110f2e[_0x10a4ea(0x308)]%_0x110f2e[_0x10a4ea(0x320)],_0xefa098=_0x110f2e[_0x10a4ea(0x320)]-_0x47043f,_0x32700f=_0x110f2e['rarityDuration']/0x2,_0x1e35c1=0x1,_0x353a5e=-_0x1e35c1/Math[_0x10a4ea(0x269)](_0x32700f,0x2),_0x3d41cf=_0x353a5e*Math[_0x10a4ea(0x269)](_0xefa098-_0x32700f,0x2)+_0x1e35c1,_0x22309c=_0x110f2e['rarityTint'][_0x10a4ea(0x215)](_0xe3185f=>_0xe3185f*_0x3d41cf);this[_0x10a4ea(0x31c)][_0x10a4ea(0x2be)](_0x22309c);},Sprite_VisualDrop[_0x22aba5(0x1d9)][_0x22aba5(0x324)]=function(){const _0x191040=_0x22aba5;this[_0x191040(0x1dd)][_0x191040(0x314)]--;if(this[_0x191040(0x1dd)]['duration']===0x0&&this['_data']['bounces']>=0x0){this['_data'][_0x191040(0x18c)]-=0x1;const _0x3559e1=VisuMZ[_0x191040(0x2a1)][_0x191040(0x315)][_0x191040(0x24e)],_0x12e1ec=_0x3559e1['bounces'],_0x146ce3=this[_0x191040(0x1dd)][_0x191040(0x18c)],_0x41542f=Math[_0x191040(0x269)](_0x3559e1['bounceReduction'],_0x12e1ec-_0x146ce3);if(this[_0x191040(0x1dd)][_0x191040(0x18c)]>=0x0){if(_0x191040(0x1d7)!==_0x191040(0x1d7)){const _0x2573b3=_0x1e70ea[_0x191040(0x2a1)][_0x191040(0x315)]['General'];if(!_0x2573b3[_0x191040(0x33b)])return;this[_0x191040(0x2a7)]=new _0x1ee08a(),this[_0x191040(0x2a7)][_0x191040(0x2f5)]=_0x2fa0d7[_0x191040(0x2d6)](_0x2573b3[_0x191040(0x1a4)]),this['_shadowSprite'][_0x191040(0x1fd)]['x']=0.5,this[_0x191040(0x2a7)][_0x191040(0x1fd)]['y']=0x1,this['_shadowSprite']['x']=_0x2573b3[_0x191040(0x338)],this[_0x191040(0x2a7)]['y']=_0x2573b3[_0x191040(0x25d)],this[_0x191040(0x2a7)][_0x191040(0x2b3)]=_0x2573b3['shadowOpacity'],this[_0x191040(0x230)](this[_0x191040(0x2a7)]);}else this['_data'][_0x191040(0x314)]=Math['round'](_0x3559e1[_0x191040(0x314)]*_0x41542f);}else _0x3559e1[_0x191040(0x1ad)]&&setTimeout(this[_0x191040(0x28f)][_0x191040(0x329)](this),_0x3559e1['fadeAfterDelay']);if(_0x3559e1[_0x191040(0x210)]){const _0x2f804a={'name':this[_0x191040(0x1dd)]['bounceSFX'],'volume':Math[_0x191040(0x29f)](_0x3559e1[_0x191040(0x2c2)]*_0x41542f),'pitch':_0x3559e1['sfxPitch'],'pan':_0x3559e1[_0x191040(0x2fe)]};AudioManager[_0x191040(0x26f)](_0x2f804a);}}};};