//=============================================================================
// VisuStella MZ - Extra Enemy Drops
// VisuMZ_4_ExtraEnemyDrops.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_ExtraEnemyDrops = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ExtraEnemyDrops = VisuMZ.ExtraEnemyDrops || {};
VisuMZ.ExtraEnemyDrops.version = 1.06;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.06] [ExtraEnemyDrops]
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

const _0x5dc1=['sortDrops','ForcedRewardsClear','BonusExpSet','create','ITEMS','description','SKILLS','toUpperCase','registerCommand','createShadowSprite','targetX','charAt','Game_Troop_clear','process_VisuMZ_ExtraEnemyDrops_JS_Notetags','_visualDrops','onBattleStart','setup','numItems','_spriteset','process_VisuMZ_ExtraEnemyDrops_Notetags','_stateIDs','setTargetDestination','Game_BattlerBase_addNewState','bounceSFX','isSceneBattle','showShadow','slice','ForcedGoldSet','getDatabaseKind','expTotal','deathTurn','show','true','iconJumpEasing','rarityDuration','Spriteset_Battle_createLowerLayer','baseX','goldTotal','Tint0','baseY','ADDITIVE','bitmap','resetOnRevive','exp','Skill','addBonusArmorDrop','toLowerCase','IconSet','JSON','lastStruckElement','hasForcedDrops','setTintInformation','1tmBxNt','EVAL','createChildren','commonItemIcon','BonusGoldSet','Game_Troop_goldTotal','attackElements','ELEMENT','round','_baseY','_stypeIDs','lastStruckType','rarityFrames','clear','getStypeIdWithName','anchor','constructor','none','ARMOR','setHue','VisuMZ_1_ElementStatusCore','onDatabaseLoaded','Flags%1','timesStruckSType','ForcedAddArmor','opacity','rotationConstant','isItem','aliveMembers','getExpGoldDropIcon','updateDuration','isDead','setFrame','timesStruckStates','startFadeOut','ARRAYFUNC','subject','Element','_iconSprite','gold','return\x200','timesStruckSkill','Settings','updateFlags','shift','clamp','commonWeaponIcon','addBonusItemDrop','deathStateId','SKILL','commonArmorsIcon','format','MULTIPLY','isAlive','shadowOffsetX','ARRAYJSON','_armorIDs','playSe','elements','createInitialPosition','Tint%1','eraseState','timesStruckItem','lastStruckSkill','getArmorIdWithName','turnCount','_scene','8331WVdeAY','3205uRBMVU','meetsExtraEnemyDropsCondition','dropItems','timesStruckElements','concat','_rotationConstant','addNewState','fadeAfterDelay','elementId','Game_Enemy_gold','ApplyEasing','getDatabaseItemID','shadowOpacity','addForcedWeaponDrop','Game_Action_applyItemUserEffect','setForcedExp','initialize','ARMORS','fadeAfterBounce','655244tANeUS','false','211000JOEHLF','createVisualDrops','ConvertParams','bounceReduction','item','_weaponIDs','random','createLowerLayer','Value%1','version','loadSystem','map','isWeapon','Game_Enemy_exp','FUNC','length','opacityFadeOut','calculatePosition','addExtraEnemyDropsSingles','updateTint','note','enemy','Game_BattlerBase_eraseState','BonusAddWeapon','convertConditionToCode','radiusPerIcon','_shadowSprite','addTimesStruck','updateJumpHeight','STR','addChild','dataId','exit','RainbowHueSpeed','jumpHeight','ITEM','ParseEnemyNotetags','getStateIdWithName','filter','children','Game_Enemy_makeDropItems','BonusAddItem','sfxVolume','radius','Game_Enemy_setup','battleMembers','getDatabaseItem','addForcedItemDrop','ForcedAddItem','VisuMZ_1_BattleCore','push','goldRate','Rarity','ARRAYNUM','process_VisuMZ_ExtraEnemyDrops_Drops_Notetags','updateOpacity','quantity','Linear','cos','applyEasing','findTargetDropSprite','lastStruck%1','createSprites','addVisualDrops','_conditionalDropsTrackedData','792491oHXUFG','timesStruckState','timesStruck%1','_elementIDs','setBonusExp','_skillIDs','getWeaponIdWithName','STYPE','damage','height','name','parameters','status','STATE','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','getItemIdWithName','max','opacityRate','_forcedRewards','ForcedAddWeapon','createIconSprite','Duration%1','updateFlagData','skillTypes','calculateJumpHeight','Flags0','remove','BonusRewardsClear','dropItemRate','drops','setColorTone','Duration0','createJS','Exp','ForcedExpSet','ExtraEnemyDrops','members','_bonusRewards','startSpecialSFX','makeDropItems','hue','getItemDropIcons','checkValidDrop','isEnemy','Gold','removeVisualDrops','VisuMZ_0_CoreEngine','kind','pow','Game_Troop_expTotal','SPAWN\x20SFX:\x20%1','VisualDropVisible','getSkillIdWithName','isStateAffected','iconHeight','sfxFilename','516148XWUrEH','SType','angle','makeDeepCopy','Drop','setForcedGold','State','updateRotation','iconOffsetRate','restoreVisualDrops','msDelay','blendMode','iconIndex','split','Icon%1','min','RAINBOW','sfxPitch','lastStruckSType','addExtraEnemyDropsConditional','sort','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','targetY','_visualDropsVisible','isSkill','flags','addExtraEnemyDropsBatch','trim','Item','sin','update','20cKBDWz','getElementIdWithName','_itemIDs','getDatabase','WEAPONS','rarityTint','83vxxSsl','denominator','600389loxBvl','targetOpacity','VisualDrops','addExtraEnemyDrops','setBonusGold','registerDeathTurn','addForcedArmorDrop','duration','prototype','ARRAYSTRUCT','getDeathTurn','WEAPON','resetVisualDrops','match','parse','Enable','yRateFoV','Game_Troop_makeDropItems','call','_baseX','getConditionalDropsTrackedData','ParseAllNotetags','bounces','addBonusWeaponDrop','clearBonusRewards','createDrops','_battlerContainer','_visualDropSprites','updatePosition','TintDuration0','isArmor','General','battler','timesStruckSkills','replace','opacityModifier','initMembers','includes','applyTimesStruck','timesStruckItems','BattleManager_initMembers','value','clearForcedRewards','Scene_Boot_onDatabaseLoaded','ARRAYSTR','_data','createConditionalDropsTrackedData'];const _0x484a=function(_0x55ffb8,_0x5ce10d){_0x55ffb8=_0x55ffb8-0x187;let _0x5dc1b9=_0x5dc1[_0x55ffb8];return _0x5dc1b9;};const _0xae5eb0=_0x484a;(function(_0x31bd6a,_0x40aab4){const _0x1178b2=_0x484a;while(!![]){try{const _0x5a4d36=-parseInt(_0x1178b2(0x1ea))+-parseInt(_0x1178b2(0x282))*parseInt(_0x1178b2(0x1d5))+parseInt(_0x1178b2(0x1e8))+-parseInt(_0x1178b2(0x263))+parseInt(_0x1178b2(0x28a))*-parseInt(_0x1178b2(0x191))+-parseInt(_0x1178b2(0x288))*-parseInt(_0x1178b2(0x1d4))+parseInt(_0x1178b2(0x22b));if(_0x5a4d36===_0x40aab4)break;else _0x31bd6a['push'](_0x31bd6a['shift']());}catch(_0x1af694){_0x31bd6a['push'](_0x31bd6a['shift']());}}}(_0x5dc1,0xb6833));var label=_0xae5eb0(0x24e),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0xae5eb0(0x210)](function(_0x2425e5){const _0x47d95b=_0xae5eb0;return _0x2425e5[_0x47d95b(0x237)]&&_0x2425e5[_0x47d95b(0x2be)]['includes']('['+label+']');})[0x0];VisuMZ[label][_0xae5eb0(0x1bb)]=VisuMZ[label][_0xae5eb0(0x1bb)]||{},VisuMZ['ConvertParams']=function(_0x24e466,_0x15f244){const _0x2c13fc=_0xae5eb0;for(const _0x43c3ae in _0x15f244){if(_0x43c3ae[_0x2c13fc(0x297)](/(.*):(.*)/i)){const _0x219fe1=String(RegExp['$1']),_0x25db3d=String(RegExp['$2'])['toUpperCase']()['trim']();let _0x5bdead,_0x4b637b,_0x48176b;switch(_0x25db3d){case'NUM':_0x5bdead=_0x15f244[_0x43c3ae]!==''?Number(_0x15f244[_0x43c3ae]):0x0;break;case _0x2c13fc(0x21f):_0x4b637b=_0x15f244[_0x43c3ae]!==''?JSON[_0x2c13fc(0x298)](_0x15f244[_0x43c3ae]):[],_0x5bdead=_0x4b637b[_0x2c13fc(0x1f5)](_0x34f3ca=>Number(_0x34f3ca));break;case _0x2c13fc(0x192):_0x5bdead=_0x15f244[_0x43c3ae]!==''?eval(_0x15f244[_0x43c3ae]):null;break;case'ARRAYEVAL':_0x4b637b=_0x15f244[_0x43c3ae]!==''?JSON[_0x2c13fc(0x298)](_0x15f244[_0x43c3ae]):[],_0x5bdead=_0x4b637b[_0x2c13fc(0x1f5)](_0xbba7a4=>eval(_0xbba7a4));break;case _0x2c13fc(0x18d):_0x5bdead=_0x15f244[_0x43c3ae]!==''?JSON[_0x2c13fc(0x298)](_0x15f244[_0x43c3ae]):'';break;case _0x2c13fc(0x1c8):_0x4b637b=_0x15f244[_0x43c3ae]!==''?JSON[_0x2c13fc(0x298)](_0x15f244[_0x43c3ae]):[],_0x5bdead=_0x4b637b[_0x2c13fc(0x1f5)](_0x5819db=>JSON[_0x2c13fc(0x298)](_0x5819db));break;case _0x2c13fc(0x1f8):_0x5bdead=_0x15f244[_0x43c3ae]!==''?new Function(JSON[_0x2c13fc(0x298)](_0x15f244[_0x43c3ae])):new Function(_0x2c13fc(0x1b9));break;case _0x2c13fc(0x1b4):_0x4b637b=_0x15f244[_0x43c3ae]!==''?JSON['parse'](_0x15f244[_0x43c3ae]):[],_0x5bdead=_0x4b637b[_0x2c13fc(0x1f5)](_0x432351=>new Function(JSON[_0x2c13fc(0x298)](_0x432351)));break;case _0x2c13fc(0x207):_0x5bdead=_0x15f244[_0x43c3ae]!==''?String(_0x15f244[_0x43c3ae]):'';break;case _0x2c13fc(0x2b6):_0x4b637b=_0x15f244[_0x43c3ae]!==''?JSON[_0x2c13fc(0x298)](_0x15f244[_0x43c3ae]):[],_0x5bdead=_0x4b637b['map'](_0x477869=>String(_0x477869));break;case'STRUCT':_0x48176b=_0x15f244[_0x43c3ae]!==''?JSON[_0x2c13fc(0x298)](_0x15f244[_0x43c3ae]):{},_0x5bdead=VisuMZ[_0x2c13fc(0x1ec)]({},_0x48176b);break;case _0x2c13fc(0x293):_0x4b637b=_0x15f244[_0x43c3ae]!==''?JSON[_0x2c13fc(0x298)](_0x15f244[_0x43c3ae]):[],_0x5bdead=_0x4b637b[_0x2c13fc(0x1f5)](_0x10daf4=>VisuMZ[_0x2c13fc(0x1ec)]({},JSON[_0x2c13fc(0x298)](_0x10daf4)));break;default:continue;}_0x24e466[_0x219fe1]=_0x5bdead;}}return _0x24e466;},(_0x129384=>{const _0x357b7d=_0xae5eb0,_0x414a5d=_0x129384['name'];for(const _0x405d68 of dependencies){if(!Imported[_0x405d68]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'['format'](_0x414a5d,_0x405d68)),SceneManager[_0x357b7d(0x20a)]();break;}}const _0x54ad5c=_0x129384[_0x357b7d(0x2be)];if(_0x54ad5c[_0x357b7d(0x297)](/\[Version[ ](.*?)\]/i)){const _0x2a514b=Number(RegExp['$1']);_0x2a514b!==VisuMZ[label][_0x357b7d(0x1f3)]&&(alert(_0x357b7d(0x239)['format'](_0x414a5d,_0x2a514b)),SceneManager[_0x357b7d(0x20a)]());}if(_0x54ad5c['match'](/\[Tier[ ](\d+)\]/i)){const _0x36b82c=Number(RegExp['$1']);_0x36b82c<tier?(alert(_0x357b7d(0x278)[_0x357b7d(0x1c4)](_0x414a5d,_0x36b82c,tier)),SceneManager['exit']()):tier=Math[_0x357b7d(0x23b)](_0x36b82c,tier);}VisuMZ[_0x357b7d(0x1ec)](VisuMZ[label][_0x357b7d(0x1bb)],_0x129384[_0x357b7d(0x236)]);})(pluginData),PluginManager[_0xae5eb0(0x2c1)](pluginData[_0xae5eb0(0x235)],_0xae5eb0(0x246),_0x5f3518=>{const _0x59524a=_0xae5eb0;VisuMZ[_0x59524a(0x1ec)](_0x5f3518,_0x5f3518),$gameTroop['clearBonusRewards']();}),PluginManager[_0xae5eb0(0x2c1)](pluginData['name'],_0xae5eb0(0x2bb),_0x35dc2c=>{const _0x273e8f=_0xae5eb0;VisuMZ['ConvertParams'](_0x35dc2c,_0x35dc2c);const _0x158a0d=_0x35dc2c['value'];$gameTroop[_0x273e8f(0x22f)](_0x158a0d);}),PluginManager[_0xae5eb0(0x2c1)](pluginData['name'],_0xae5eb0(0x195),_0x3f4283=>{const _0x59ba2e=_0xae5eb0;VisuMZ[_0x59ba2e(0x1ec)](_0x3f4283,_0x3f4283);const _0x258c9b=_0x3f4283['value'];$gameTroop[_0x59ba2e(0x28e)](_0x258c9b);}),PluginManager['registerCommand'](pluginData['name'],_0xae5eb0(0x213),_0x59d9d5=>{const _0x4c1432=_0xae5eb0;VisuMZ['ConvertParams'](_0x59d9d5,_0x59d9d5);const _0x1e8b55=_0x59d9d5['id'],_0x48d849=_0x59d9d5[_0x4c1432(0x222)];$gameTroop[_0x4c1432(0x1c0)](_0x1e8b55,_0x48d849);}),PluginManager[_0xae5eb0(0x2c1)](pluginData[_0xae5eb0(0x235)],_0xae5eb0(0x201),_0x5e15e5=>{const _0x41c775=_0xae5eb0;VisuMZ[_0x41c775(0x1ec)](_0x5e15e5,_0x5e15e5);const _0x327cb=_0x5e15e5['id'],_0x426c77=_0x5e15e5['quantity'];$gameTroop[_0x41c775(0x2a1)](_0x327cb,_0x426c77);}),PluginManager[_0xae5eb0(0x2c1)](pluginData['name'],'BonusAddArmor',_0x5c6023=>{const _0x479954=_0xae5eb0;VisuMZ['ConvertParams'](_0x5c6023,_0x5c6023);const _0x26e718=_0x5c6023['id'],_0x2b5c6b=_0x5c6023[_0x479954(0x222)];$gameTroop[_0x479954(0x18a)](_0x26e718,_0x2b5c6b);}),PluginManager[_0xae5eb0(0x2c1)](pluginData[_0xae5eb0(0x235)],_0xae5eb0(0x2ba),_0x4ebe7a=>{const _0x218101=_0xae5eb0;VisuMZ[_0x218101(0x1ec)](_0x4ebe7a,_0x4ebe7a),$gameTroop[_0x218101(0x2b4)]();}),PluginManager[_0xae5eb0(0x2c1)](pluginData[_0xae5eb0(0x235)],_0xae5eb0(0x24d),_0x4d61a3=>{const _0x5bb8a5=_0xae5eb0;VisuMZ['ConvertParams'](_0x4d61a3,_0x4d61a3);const _0x34023d=_0x4d61a3[_0x5bb8a5(0x2b3)];$gameTroop[_0x5bb8a5(0x1e4)](_0x34023d);}),PluginManager[_0xae5eb0(0x2c1)](pluginData[_0xae5eb0(0x235)],_0xae5eb0(0x2d4),_0x2c55b6=>{const _0x5106b1=_0xae5eb0;VisuMZ[_0x5106b1(0x1ec)](_0x2c55b6,_0x2c55b6);const _0x4a1875=_0x2c55b6[_0x5106b1(0x2b3)];$gameTroop[_0x5106b1(0x268)](_0x4a1875);}),PluginManager[_0xae5eb0(0x2c1)](pluginData[_0xae5eb0(0x235)],_0xae5eb0(0x21a),_0x2da2a9=>{const _0x22ffd4=_0xae5eb0;VisuMZ[_0x22ffd4(0x1ec)](_0x2da2a9,_0x2da2a9);const _0x11988f=_0x2da2a9['id'],_0x53d25e=_0x2da2a9[_0x22ffd4(0x222)];$gameTroop[_0x22ffd4(0x219)](_0x11988f,_0x53d25e);}),PluginManager['registerCommand'](pluginData['name'],_0xae5eb0(0x23e),_0x380108=>{const _0x46dc5c=_0xae5eb0;VisuMZ[_0x46dc5c(0x1ec)](_0x380108,_0x380108);const _0x37d39f=_0x380108['id'],_0x147e88=_0x380108['quantity'];$gameTroop[_0x46dc5c(0x1e2)](_0x37d39f,_0x147e88);}),PluginManager['registerCommand'](pluginData['name'],_0xae5eb0(0x1a9),_0x39ff0e=>{const _0x451b46=_0xae5eb0;VisuMZ['ConvertParams'](_0x39ff0e,_0x39ff0e);const _0x248db8=_0x39ff0e['id'],_0x2fa527=_0x39ff0e['quantity'];$gameTroop[_0x451b46(0x290)](_0x248db8,_0x2fa527);}),PluginManager[_0xae5eb0(0x2c1)](pluginData[_0xae5eb0(0x235)],_0xae5eb0(0x25e),_0x28a8a5=>{const _0x596e66=_0xae5eb0;VisuMZ[_0x596e66(0x1ec)](_0x28a8a5,_0x28a8a5);const _0x337ddd=_0x28a8a5['Visible'];BattleManager[_0x596e66(0x27a)]=_0x337ddd;}),VisuMZ[_0xae5eb0(0x24e)][_0xae5eb0(0x2b5)]=Scene_Boot[_0xae5eb0(0x292)]['onDatabaseLoaded'],Scene_Boot['prototype'][_0xae5eb0(0x1a6)]=function(){const _0x527191=_0xae5eb0;VisuMZ[_0x527191(0x24e)][_0x527191(0x2b5)]['call'](this),this[_0x527191(0x2cc)]();},Scene_Boot[_0xae5eb0(0x292)][_0xae5eb0(0x2cc)]=function(){const _0x56754f=_0xae5eb0;if(VisuMZ[_0x56754f(0x29f)])return;this[_0x56754f(0x220)](),this['process_VisuMZ_ExtraEnemyDrops_JS_Notetags']();},Scene_Boot[_0xae5eb0(0x292)][_0xae5eb0(0x220)]=function(){const _0x4602db=_0xae5eb0;for(const _0x10ea8a of $dataEnemies){if(!_0x10ea8a)continue;VisuMZ[_0x4602db(0x24e)][_0x4602db(0x2a3)](_0x10ea8a);}},Scene_Boot[_0xae5eb0(0x292)][_0xae5eb0(0x2c6)]=function(){const _0x3073ea=_0xae5eb0;for(const _0x54bc2b of $dataEnemies){if(!_0x54bc2b)continue;if(_0x54bc2b[_0x3073ea(0x1fe)][_0x3073ea(0x297)](/<JS DROPS>\s*([\s\S]*)\s*<\/JS DROPS>/i)){const _0x43faf2=String(RegExp['$1']);VisuMZ[_0x3073ea(0x24e)]['createJS'](_0x54bc2b,_0x43faf2);}}},VisuMZ[_0xae5eb0(0x24e)][_0xae5eb0(0x20e)]=VisuMZ[_0xae5eb0(0x20e)],VisuMZ[_0xae5eb0(0x20e)]=function(_0x5e464a){const _0xabfd00=_0xae5eb0;VisuMZ['ExtraEnemyDrops'][_0xabfd00(0x20e)][_0xabfd00(0x29c)](this,_0x5e464a),VisuMZ[_0xabfd00(0x24e)][_0xabfd00(0x2a3)](_0x5e464a);if(_0x5e464a['note'][_0xabfd00(0x297)](/<JS DROPS>\s*([\s\S]*)\s*<\/JS DROPS>/i)){const _0x1c11ec=String(RegExp['$1']);VisuMZ[_0xabfd00(0x24e)][_0xabfd00(0x24b)](_0x5e464a,_0x1c11ec);}},VisuMZ[_0xae5eb0(0x24e)][_0xae5eb0(0x2a3)]=function(_0x1d4035){const _0x4c9d75=_0xae5eb0,_0x3a670e=_0x1d4035['note'],_0x57e7bd=_0x3a670e[_0x4c9d75(0x297)](/<(.*?) (?:DROP|DROPS)[ ](.*):[ ](\d+)([%％])>/gi);if(_0x57e7bd)for(const _0x5231cd of _0x57e7bd){const _0x4e20c9={'kind':0x0,'dataId':0x0,'denominator':0x1};if(_0x5231cd['match'](/<(.*?) (?:DROP|DROPS)[ ](\d+)[ ](?:THROUGH|to)[ ](\d+):[ ](\d+)([%％])>/i)){const _0x281ae6=VisuMZ[_0x4c9d75(0x24e)][_0x4c9d75(0x2d5)](RegExp['$1']),_0x4a8683=Number(RegExp['$2']),_0x241456=Number(RegExp['$3']),_0x24420a=0x1/(Number(RegExp['$4'])*0.01);if(_0x281ae6>0x0)for(let _0x52a898=_0x4a8683;_0x52a898<=_0x241456;_0x52a898++){const _0x53ddb6={'kind':_0x281ae6,'dataId':_0x52a898,'denominator':_0x24420a};VisuMZ[_0x4c9d75(0x24e)][_0x4c9d75(0x255)](_0x53ddb6)&&_0x1d4035[_0x4c9d75(0x1d7)][_0x4c9d75(0x21c)](_0x53ddb6);}continue;}else{if(_0x5231cd[_0x4c9d75(0x297)](/<(.*?) (?:DROP|DROPS)[ ](\d+):[ ](\d+)([%％])>/i))_0x4e20c9['kind']=VisuMZ[_0x4c9d75(0x24e)][_0x4c9d75(0x2d5)](RegExp['$1']),_0x4e20c9[_0x4c9d75(0x209)]=Number(RegExp['$2']),_0x4e20c9[_0x4c9d75(0x289)]=0x1/(Number(RegExp['$3'])*0.01);else{if(_0x5231cd[_0x4c9d75(0x297)](/<(.*?) (?:DROP|DROPS)[ ](.*):[ ](\d+)([%％])>/i))_0x4e20c9[_0x4c9d75(0x25a)]=VisuMZ['ExtraEnemyDrops'][_0x4c9d75(0x2d5)](RegExp['$1']),_0x4e20c9[_0x4c9d75(0x209)]=VisuMZ[_0x4c9d75(0x24e)]['getDatabaseItemID'](RegExp['$1'],RegExp['$2']),_0x4e20c9['denominator']=0x1/(Number(RegExp['$3'])*0.01);else continue;}}if(_0x4e20c9[_0x4c9d75(0x25a)]<0x0||_0x4e20c9[_0x4c9d75(0x209)]<0x0)continue;_0x1d4035[_0x4c9d75(0x1d7)]['push'](_0x4e20c9);}if(_0x3a670e['match'](/<(?:DROP|DROPS)>\s*([\s\S]*)\s*<\/(?:DROP|DROPS)>/i)){const _0x26e20f=String(RegExp['$1']),_0x706e1b=_0x26e20f[_0x4c9d75(0x297)](/(.*?)[ ](.*):[ ](\d+)([%％])/gi);if(_0x706e1b)for(const _0x32de02 of _0x706e1b){const _0x4c3cad={'kind':0x0,'dataId':0x0,'denominator':0x1};if(_0x32de02[_0x4c9d75(0x297)](/(.*?)[ ](\d+)[ ](?:THROUGH|to)[ ](\d+):[ ](\d+)([%％])/i)){const _0x176e9a=VisuMZ[_0x4c9d75(0x24e)][_0x4c9d75(0x2d5)](RegExp['$1']),_0x22f933=Number(RegExp['$2']),_0x12237d=Number(RegExp['$3']),_0x48a65c=0x1/(Number(RegExp['$4'])*0.01);if(_0x176e9a>0x0)for(let _0x138a6c=_0x22f933;_0x138a6c<=_0x12237d;_0x138a6c++){const _0x12307e={'kind':_0x176e9a,'dataId':_0x138a6c,'denominator':_0x48a65c};VisuMZ[_0x4c9d75(0x24e)][_0x4c9d75(0x255)](_0x12307e)&&_0x1d4035['dropItems'][_0x4c9d75(0x21c)](_0x12307e);}continue;}else{if(_0x32de02[_0x4c9d75(0x297)](/(.*?)[ ](\d+):[ ](\d+)([%％])/i))_0x4c3cad[_0x4c9d75(0x25a)]=VisuMZ['ExtraEnemyDrops'][_0x4c9d75(0x2d5)](RegExp['$1']),_0x4c3cad[_0x4c9d75(0x209)]=Number(RegExp['$2']),_0x4c3cad[_0x4c9d75(0x289)]=0x1/(Number(RegExp['$3'])*0.01);else{if(_0x32de02[_0x4c9d75(0x297)](/(.*?)[ ](.*):[ ](\d+)([%％])/i))_0x4c3cad['kind']=VisuMZ[_0x4c9d75(0x24e)]['getDatabaseKind'](RegExp['$1']),_0x4c3cad[_0x4c9d75(0x209)]=VisuMZ[_0x4c9d75(0x24e)][_0x4c9d75(0x1e0)](RegExp['$1'],RegExp['$2']),_0x4c3cad[_0x4c9d75(0x289)]=0x1/(Number(RegExp['$3'])*0.01);else continue;}}if(_0x4c3cad[_0x4c9d75(0x25a)]<0x0||_0x4c3cad['dataId']<0x0)continue;_0x1d4035['dropItems']['push'](_0x4c3cad);}}},VisuMZ[_0xae5eb0(0x24e)][_0xae5eb0(0x255)]=function(_0x4f7fe0){const _0x117dd5=_0xae5eb0;if(!_0x4f7fe0)return![];const _0x360d8f=_0x4f7fe0[_0x117dd5(0x25a)],_0x2870bd=_0x4f7fe0[_0x117dd5(0x209)];let _0x5dafcb=null;if(_0x360d8f===0x1)_0x5dafcb=$dataItems[_0x2870bd];else{if(_0x360d8f===0x2)_0x5dafcb=$dataWeapons[_0x2870bd];else _0x360d8f===0x3?_0x5dafcb=$dataArmors[_0x2870bd]:_0x5dafcb=null;}if(!_0x5dafcb)return![];if(_0x5dafcb[_0x117dd5(0x235)][_0x117dd5(0x27e)]()==='')return![];if(_0x5dafcb['name'][_0x117dd5(0x297)](/-----/i))return![];return!![];},VisuMZ['ExtraEnemyDrops']['JS']={},VisuMZ[_0xae5eb0(0x24e)][_0xae5eb0(0x24b)]=function(_0x4b2924,_0x5174aa){const _0x22ab8b=_0xae5eb0,_0x2ba71f='\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Arguments\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20enemy\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20let\x20drops\x20=\x20arguments[0];\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20Array\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20drops;\x0a\x20\x20\x20\x20'[_0x22ab8b(0x1c4)](_0x5174aa),_0x23815f=_0x4b2924['id'];VisuMZ[_0x22ab8b(0x24e)]['JS'][_0x23815f]=new Function(_0x2ba71f);},DataManager[_0xae5eb0(0x23a)]=function(_0x76ffd3){const _0x49727a=_0xae5eb0;_0x76ffd3=_0x76ffd3[_0x49727a(0x2c0)]()[_0x49727a(0x27e)](),this['_itemIDs']=this[_0x49727a(0x284)]||{};if(this['_itemIDs'][_0x76ffd3])return this[_0x49727a(0x284)][_0x76ffd3];for(const _0x605066 of $dataItems){if(!_0x605066)continue;this[_0x49727a(0x284)][_0x605066[_0x49727a(0x235)][_0x49727a(0x2c0)]()[_0x49727a(0x27e)]()]=_0x605066['id'];}return this[_0x49727a(0x284)][_0x76ffd3]||0x0;},DataManager[_0xae5eb0(0x231)]=function(_0x252721){const _0x399bd3=_0xae5eb0;_0x252721=_0x252721['toUpperCase']()[_0x399bd3(0x27e)](),this[_0x399bd3(0x1ef)]=this[_0x399bd3(0x1ef)]||{};if(this[_0x399bd3(0x1ef)][_0x252721])return this[_0x399bd3(0x1ef)][_0x252721];for(const _0xc40836 of $dataWeapons){if(!_0xc40836)continue;this[_0x399bd3(0x1ef)][_0xc40836[_0x399bd3(0x235)][_0x399bd3(0x2c0)]()[_0x399bd3(0x27e)]()]=_0xc40836['id'];}return this[_0x399bd3(0x1ef)][_0x252721]||0x0;},DataManager['getArmorIdWithName']=function(_0x475f77){const _0x2a34be=_0xae5eb0;_0x475f77=_0x475f77[_0x2a34be(0x2c0)]()[_0x2a34be(0x27e)](),this[_0x2a34be(0x1c9)]=this['_armorIDs']||{};if(this['_armorIDs'][_0x475f77])return this[_0x2a34be(0x1c9)][_0x475f77];for(const _0xaf7944 of $dataArmors){if(!_0xaf7944)continue;this[_0x2a34be(0x1c9)][_0xaf7944['name'][_0x2a34be(0x2c0)]()['trim']()]=_0xaf7944['id'];}return this['_armorIDs'][_0x475f77]||0x0;},DataManager[_0xae5eb0(0x25f)]=function(_0x4f3d9c){const _0x5ef57e=_0xae5eb0;_0x4f3d9c=_0x4f3d9c[_0x5ef57e(0x2c0)]()['trim'](),this[_0x5ef57e(0x230)]=this[_0x5ef57e(0x230)]||{};if(this['_skillIDs'][_0x4f3d9c])return this[_0x5ef57e(0x230)][_0x4f3d9c];for(const _0x320217 of $dataSkills){if(!_0x320217)continue;this['_skillIDs'][_0x320217[_0x5ef57e(0x235)][_0x5ef57e(0x2c0)]()[_0x5ef57e(0x27e)]()]=_0x320217['id'];}return this[_0x5ef57e(0x230)][_0x4f3d9c]||0x0;},DataManager[_0xae5eb0(0x19f)]=function(_0x54c4eb){const _0x360153=_0xae5eb0;_0x54c4eb=_0x54c4eb[_0x360153(0x2c0)]()['trim'](),this[_0x360153(0x19b)]=this[_0x360153(0x19b)]||{};if(this['_stypeIDs'][_0x54c4eb])return this[_0x360153(0x19b)][_0x54c4eb];for(let _0x32a2b1=0x1;_0x32a2b1<0x64;_0x32a2b1++){if(!$dataSystem[_0x360153(0x242)][_0x32a2b1])continue;let _0x1815e2=$dataSystem['skillTypes'][_0x32a2b1][_0x360153(0x2c0)]()[_0x360153(0x27e)]();_0x1815e2=_0x1815e2['replace'](/\x1I\[(\d+)\]/gi,''),_0x1815e2=_0x1815e2['replace'](/\\I\[(\d+)\]/gi,''),this[_0x360153(0x19b)][_0x1815e2]=_0x32a2b1;}return this[_0x360153(0x19b)][_0x54c4eb]||0x0;},DataManager['getStateIdWithName']=function(_0x122e43){const _0x15cd23=_0xae5eb0;_0x122e43=_0x122e43[_0x15cd23(0x2c0)]()[_0x15cd23(0x27e)](),this[_0x15cd23(0x2cd)]=this[_0x15cd23(0x2cd)]||{};if(this[_0x15cd23(0x2cd)][_0x122e43])return this[_0x15cd23(0x2cd)][_0x122e43];for(const _0x1c61ec of $dataStates){if(!_0x1c61ec)continue;this[_0x15cd23(0x2cd)][_0x1c61ec[_0x15cd23(0x235)][_0x15cd23(0x2c0)]()[_0x15cd23(0x27e)]()]=_0x1c61ec['id'];}return this['_stateIDs'][_0x122e43]||0x0;},DataManager[_0xae5eb0(0x283)]=function(_0x1f1768){const _0x261bdc=_0xae5eb0;_0x1f1768=_0x1f1768[_0x261bdc(0x2c0)]()[_0x261bdc(0x27e)](),this[_0x261bdc(0x22e)]=this[_0x261bdc(0x22e)]||{};if(this[_0x261bdc(0x22e)][_0x1f1768])return this[_0x261bdc(0x22e)][_0x1f1768];let _0x475872=0x1;for(const _0x3f5c3f of $dataSystem['elements']){if(!_0x3f5c3f)continue;let _0xd26f04=_0x3f5c3f[_0x261bdc(0x2c0)]();_0xd26f04=_0xd26f04['replace'](/\x1I\[(\d+)\]/gi,''),_0xd26f04=_0xd26f04[_0x261bdc(0x2ac)](/\\I\[(\d+)\]/gi,''),this[_0x261bdc(0x22e)][_0xd26f04]=_0x475872,_0x475872++;}return this[_0x261bdc(0x22e)][_0x1f1768]||0x0;},SceneManager[_0xae5eb0(0x2d1)]=function(){const _0x21edce=_0xae5eb0;return this[_0x21edce(0x1d3)]&&this[_0x21edce(0x1d3)][_0x21edce(0x1a1)]===Scene_Battle;},VisuMZ[_0xae5eb0(0x24e)]['Game_Action_applyItemUserEffect']=Game_Action[_0xae5eb0(0x292)]['applyItemUserEffect'],Game_Action['prototype']['applyItemUserEffect']=function(_0x23d44d){const _0x576ebc=_0xae5eb0;_0x23d44d['applyTimesStruck'](this),VisuMZ[_0x576ebc(0x24e)][_0x576ebc(0x1e3)][_0x576ebc(0x29c)](this,_0x23d44d);},VisuMZ['ExtraEnemyDrops']['Game_Battler_onBattleStart']=Game_Battler[_0xae5eb0(0x292)][_0xae5eb0(0x2c8)],Game_Battler[_0xae5eb0(0x292)][_0xae5eb0(0x2c8)]=function(_0x31b9ea){const _0x4f8450=_0xae5eb0;VisuMZ[_0x4f8450(0x24e)]['Game_Battler_onBattleStart'][_0x4f8450(0x29c)](this,_0x31b9ea),this[_0x4f8450(0x2b8)]();},Game_Battler['prototype'][_0xae5eb0(0x2b8)]=function(){const _0x347de0=_0xae5eb0;this[_0x347de0(0x22a)]={'deathTurn':0x0,'timesStruckSkills':{},'timesStruckSTypes':{},'timesStruckItems':{},'timesStruckStates':{},'timesStruckElements':{},'lastStruckType':_0x347de0(0x1a2),'lastStruckSkill':0x0,'lastStruckSType':0x0,'lastStruckItem':0x0,'lastStruckState':0x0,'lastStruckElement':0x0};},Game_Battler['prototype'][_0xae5eb0(0x29e)]=function(){const _0x5a8edd=_0xae5eb0;return this[_0x5a8edd(0x22a)]===undefined&&this[_0x5a8edd(0x2b8)](),this['_conditionalDropsTrackedData'];},Game_Battler[_0xae5eb0(0x292)]['getDeathTurn']=function(){const _0x2d5d13=_0xae5eb0;return this[_0x2d5d13(0x29e)]()[_0x2d5d13(0x2d7)]||0x0;},Game_Battler[_0xae5eb0(0x292)]['addTimesStruck']=function(_0x334284,_0x3a6e22,_0x4a121b){const _0x1da585=_0xae5eb0,_0x216e14=this[_0x1da585(0x29e)]();_0x4a121b=_0x4a121b||0x1;const _0x883a59='timesStruck%1s'['format'](_0x334284);if(!_0x216e14[_0x883a59])return;_0x216e14[_0x883a59][_0x3a6e22]=_0x216e14[_0x883a59][_0x3a6e22]||0x0,_0x216e14[_0x883a59][_0x3a6e22]+=_0x4a121b;const _0x2cd018=_0x1da585(0x227)[_0x1da585(0x1c4)](_0x334284);_0x216e14[_0x2cd018]=_0x3a6e22,[_0x1da585(0x27f),_0x1da585(0x189)][_0x1da585(0x2af)](_0x334284)&&(_0x216e14['lastStruckType']=_0x334284);},Game_Battler[_0xae5eb0(0x292)][_0xae5eb0(0x1ba)]=function(_0x1bd0c7){const _0x2e5d08=_0xae5eb0,_0x37562a=this[_0x2e5d08(0x29e)]()[_0x2e5d08(0x2ab)];return _0x37562a[_0x1bd0c7]||0x0;},Game_Battler[_0xae5eb0(0x292)][_0xae5eb0(0x1a8)]=function(_0x1c2300){const _0x29c5a2=_0xae5eb0,_0x563f4b=this[_0x29c5a2(0x29e)]()['timesStruckSTypes'];return _0x563f4b[_0x1c2300]||0x0;},Game_Battler[_0xae5eb0(0x292)][_0xae5eb0(0x1cf)]=function(_0x157da1){const _0x42915f=_0xae5eb0,_0x2bf889=this[_0x42915f(0x29e)]()[_0x42915f(0x2b1)];return _0x2bf889[_0x157da1]||0x0;},Game_Battler[_0xae5eb0(0x292)][_0xae5eb0(0x22c)]=function(_0x4ed0d2){const _0x4673f7=_0xae5eb0,_0x889a04=this[_0x4673f7(0x29e)]()[_0x4673f7(0x1b2)];return _0x889a04[_0x4ed0d2]||0x0;},Game_Battler[_0xae5eb0(0x292)]['timesStruckElement']=function(_0x5f4bc1){const _0x2aea51=_0xae5eb0,_0x36480d=this[_0x2aea51(0x29e)]()[_0x2aea51(0x1d8)];return _0x36480d[_0x5f4bc1]||0x0;},Game_Battler[_0xae5eb0(0x292)][_0xae5eb0(0x2b0)]=function(_0x3715c1){const _0x51d409=_0xae5eb0,_0x1b4859=_0x3715c1[_0x51d409(0x1ee)]();if(!_0x1b4859)return;if(_0x3715c1[_0x51d409(0x1ac)]())this[_0x51d409(0x205)](_0x51d409(0x27f),_0x1b4859['id']);else{if(_0x3715c1[_0x51d409(0x27b)]())this[_0x51d409(0x205)](_0x51d409(0x189),_0x1b4859['id']),this[_0x51d409(0x205)](_0x51d409(0x264),_0x1b4859['stypeId']);else return;}let _0x5e67c8=[];if(Imported[_0x51d409(0x1a5)])_0x5e67c8=_0x3715c1[_0x51d409(0x1cb)]();else _0x3715c1[_0x51d409(0x1ee)]()[_0x51d409(0x233)][_0x51d409(0x1dd)]<0x0?_0x5e67c8=_0x3715c1[_0x51d409(0x1b5)]()[_0x51d409(0x197)]():_0x5e67c8=[_0x3715c1[_0x51d409(0x1ee)]()[_0x51d409(0x233)]['elementId']];while(_0x5e67c8[_0x51d409(0x1f9)]>0x0){const _0x1d5229=_0x5e67c8[_0x51d409(0x1bd)]();if(_0x1d5229>0x0)this[_0x51d409(0x205)](_0x51d409(0x1b6),_0x1d5229);}},Game_Battler[_0xae5eb0(0x292)]['registerDeathTurn']=function(){const _0xeb7bf3=_0xae5eb0,_0x36f5da=this['getConditionalDropsTrackedData']();_0x36f5da['deathTurn']=this[_0xeb7bf3(0x1d2)]();},VisuMZ[_0xae5eb0(0x24e)]['Game_BattlerBase_addNewState']=Game_BattlerBase['prototype'][_0xae5eb0(0x1db)],Game_BattlerBase[_0xae5eb0(0x292)]['addNewState']=function(_0x42d095){const _0x5044ca=_0xae5eb0,_0x1e6954=this['isStateAffected'](_0x42d095);VisuMZ[_0x5044ca(0x24e)][_0x5044ca(0x2cf)][_0x5044ca(0x29c)](this,_0x42d095),this[_0x5044ca(0x260)](_0x42d095)&&(this['addTimesStruck'](_0x5044ca(0x269),_0x42d095),!_0x1e6954&&_0x42d095===this[_0x5044ca(0x1c1)]()&&this[_0x5044ca(0x28f)]());},VisuMZ[_0xae5eb0(0x24e)][_0xae5eb0(0x212)]=Game_Enemy[_0xae5eb0(0x292)][_0xae5eb0(0x252)],Game_Enemy[_0xae5eb0(0x292)][_0xae5eb0(0x252)]=function(){const _0x3397b3=_0xae5eb0;let _0x2cd131=VisuMZ['ExtraEnemyDrops']['Game_Enemy_makeDropItems'][_0x3397b3(0x29c)](this);return _0x2cd131=this[_0x3397b3(0x28d)](_0x2cd131),VisuMZ['ExtraEnemyDrops']['sortDrops'](_0x2cd131);},Game_Enemy[_0xae5eb0(0x292)]['addExtraEnemyDrops']=function(_0x7d1ad4){const _0x4a417c=_0xae5eb0;return _0x7d1ad4=this['addExtraEnemyDropsSingles'](_0x7d1ad4),_0x7d1ad4=this[_0x4a417c(0x27d)](_0x7d1ad4),_0x7d1ad4=this[_0x4a417c(0x276)](_0x7d1ad4),_0x7d1ad4=this['addExtraEnemyDropsJS'](_0x7d1ad4),_0x7d1ad4;},Game_Enemy[_0xae5eb0(0x292)][_0xae5eb0(0x1fc)]=function(_0x57ee44){const _0x459f87=_0xae5eb0;return _0x57ee44;const _0x4fd73e=this[_0x459f87(0x1ff)]()['note'],_0x53358c=this[_0x459f87(0x247)](),_0x48b2a3=_0x4fd73e['match'](/<(.*?) DROP[ ](.*):[ ](\d+)([%％])>/gi);if(_0x48b2a3)for(const _0x281122 of _0x48b2a3){let _0x1ac338=$dataItems,_0x18cd25=null,_0x5335bb=0x0;if(_0x281122[_0x459f87(0x297)](/<(.*?) DROP[ ](\d+):[ ](\d+)([%％])>/i))_0x1ac338=VisuMZ[_0x459f87(0x24e)][_0x459f87(0x285)](RegExp['$1']),_0x18cd25=_0x1ac338[Number(RegExp['$2'])],_0x5335bb=Number(RegExp['$3'])*0.01;else _0x281122[_0x459f87(0x297)](/<(.*?) DROP[ ](.*):[ ](\d+)([%％])>/i)&&(_0x18cd25=VisuMZ[_0x459f87(0x24e)]['getDatabaseItem'](RegExp['$1'],RegExp['$2']),_0x5335bb=Number(RegExp['$3'])*0.01);_0x18cd25&&Math[_0x459f87(0x1f0)]()<_0x5335bb*_0x53358c&&_0x57ee44[_0x459f87(0x21c)](_0x18cd25);}return _0x57ee44;},Game_Enemy[_0xae5eb0(0x292)][_0xae5eb0(0x27d)]=function(_0x15d429){const _0x33d392=_0xae5eb0;return _0x15d429;const _0x794e6e=this['enemy']()[_0x33d392(0x1fe)],_0x2aa5b9=this[_0x33d392(0x247)]();if(_0x794e6e['match'](/<(?:DROP|DROPS)>\s*([\s\S]*)\s*<\/(?:DROP|DROPS)>/i)){const _0x2c14ca=String(RegExp['$1']),_0x50124c=_0x2c14ca[_0x33d392(0x297)](/(.*?)[ ](.*):[ ](\d+)([%％])/gi);if(_0x50124c){let _0x343dca=$dataItems;for(const _0x33be0e of _0x50124c){let _0xa1cd5d=null,_0x4716bb=0x0;if(_0x33be0e[_0x33d392(0x297)](/(.*?)[ ](\d+):[ ](\d+)([%％])/i))_0x343dca=VisuMZ['ExtraEnemyDrops']['getDatabase'](RegExp['$1']),_0xa1cd5d=_0x343dca[Number(RegExp['$2'])],_0x4716bb=Number(RegExp['$3'])*0.01;else _0x33be0e['match'](/(.*?)[ ](.*):[ ](\d+)([%％])/i)&&(_0xa1cd5d=VisuMZ[_0x33d392(0x24e)][_0x33d392(0x218)](RegExp['$1'],RegExp['$2']),_0x4716bb=Number(RegExp['$3'])*0.01);_0xa1cd5d&&Math[_0x33d392(0x1f0)]()<_0x4716bb*_0x2aa5b9&&_0x15d429[_0x33d392(0x21c)](_0xa1cd5d);}}}return _0x15d429;},VisuMZ[_0xae5eb0(0x24e)][_0xae5eb0(0x285)]=function(_0x3917f0){const _0x4dd126=_0xae5eb0;_0x3917f0=_0x3917f0['toUpperCase']()[_0x4dd126(0x27e)]();if(['I',_0x4dd126(0x20d),_0x4dd126(0x2bd)][_0x4dd126(0x2af)](_0x3917f0))return $dataItems;if(['W',_0x4dd126(0x295),'WEAPONS'][_0x4dd126(0x2af)](_0x3917f0))return $dataWeapons;if(['A',_0x4dd126(0x1a3),_0x4dd126(0x1e6)][_0x4dd126(0x2af)](_0x3917f0))return $dataArmors;if(['S','SKILL',_0x4dd126(0x2bf)][_0x4dd126(0x2af)](_0x3917f0))return $dataSkills;if(['T',_0x4dd126(0x238),'STATES']['includes'](_0x3917f0))return $dataStates;return $dataItems;},VisuMZ[_0xae5eb0(0x24e)][_0xae5eb0(0x2d5)]=function(_0x41f7de){const _0xbf8267=_0xae5eb0;_0x41f7de=_0x41f7de['toUpperCase']()[_0xbf8267(0x27e)]();if(['I',_0xbf8267(0x20d),_0xbf8267(0x2bd)][_0xbf8267(0x2af)](_0x41f7de))return 0x1;if(['W',_0xbf8267(0x295),_0xbf8267(0x286)]['includes'](_0x41f7de))return 0x2;if(['A',_0xbf8267(0x1a3),_0xbf8267(0x1e6)][_0xbf8267(0x2af)](_0x41f7de))return 0x3;return 0x0;},VisuMZ[_0xae5eb0(0x24e)][_0xae5eb0(0x218)]=function(_0x1bf375,_0x1b21ee){const _0x3d0826=_0xae5eb0;_0x1bf375=_0x1bf375[_0x3d0826(0x2c0)]()['trim']();if(['I',_0x3d0826(0x20d),'ITEMS'][_0x3d0826(0x2af)](_0x1bf375))return $dataItems[DataManager['getItemIdWithName'](_0x1b21ee)];if(['W',_0x3d0826(0x295),_0x3d0826(0x286)]['includes'](_0x1bf375))return $dataWeapons[DataManager[_0x3d0826(0x231)](_0x1b21ee)];if(['A',_0x3d0826(0x1a3),'ARMORS'][_0x3d0826(0x2af)](_0x1bf375))return $dataArmors[DataManager[_0x3d0826(0x1d1)](_0x1b21ee)];if(['S',_0x3d0826(0x1c2),_0x3d0826(0x2bf)][_0x3d0826(0x2af)](_0x1bf375))return $dataSkills[DataManager[_0x3d0826(0x25f)](_0x1b21ee)];if(['T',_0x3d0826(0x238),'STATES'][_0x3d0826(0x2af)](_0x1bf375))return $dataStates[DataManager[_0x3d0826(0x20f)](_0x1b21ee)];return null;},VisuMZ['ExtraEnemyDrops'][_0xae5eb0(0x1e0)]=function(_0x594f6c,_0x30b8cd){const _0x28180c=_0xae5eb0;_0x594f6c=_0x594f6c[_0x28180c(0x2c0)]()[_0x28180c(0x27e)]();if(['I',_0x28180c(0x20d),_0x28180c(0x2bd)][_0x28180c(0x2af)](_0x594f6c))return $dataItems[DataManager['getItemIdWithName'](_0x30b8cd)]['id'];if(['W',_0x28180c(0x295),_0x28180c(0x286)][_0x28180c(0x2af)](_0x594f6c))return $dataWeapons[DataManager[_0x28180c(0x231)](_0x30b8cd)]['id'];if(['A','ARMOR','ARMORS'][_0x28180c(0x2af)](_0x594f6c))return $dataArmors[DataManager[_0x28180c(0x1d1)](_0x30b8cd)]['id'];return 0x0;},VisuMZ[_0xae5eb0(0x24e)][_0xae5eb0(0x2b9)]=function(_0xe391b3){const _0x52d74b=_0xae5eb0;_0xe391b3[_0x52d74b(0x277)]((_0x477356,_0x15c92f)=>_0x477356['id']-_0x15c92f['id']);const _0x3ab181=_0xe391b3[_0x52d74b(0x210)](_0x2e5778=>DataManager[_0x52d74b(0x1ac)](_0x2e5778)),_0x5c57cc=_0xe391b3[_0x52d74b(0x210)](_0x566723=>DataManager[_0x52d74b(0x1f6)](_0x566723)),_0x3cb939=_0xe391b3['filter'](_0x4b3812=>DataManager[_0x52d74b(0x2a8)](_0x4b3812));let _0x5d17ce=_0x3ab181[_0x52d74b(0x1d9)](_0x5c57cc)[_0x52d74b(0x1d9)](_0x3cb939);return _0x5d17ce;},Game_Enemy[_0xae5eb0(0x292)]['addExtraEnemyDropsJS']=function(_0xabd410){const _0x52f123=_0xae5eb0,_0xf1642f=this[_0x52f123(0x1ff)]()['id'];if(!VisuMZ[_0x52f123(0x24e)]['JS'][_0xf1642f])return _0xabd410;return VisuMZ[_0x52f123(0x24e)]['JS'][_0xf1642f][_0x52f123(0x29c)](this,_0xabd410);},Game_Enemy[_0xae5eb0(0x292)][_0xae5eb0(0x276)]=function(_0x38b763){const _0x549f5f=_0xae5eb0,_0x2700a7=this[_0x549f5f(0x1ff)]()[_0x549f5f(0x1fe)][_0x549f5f(0x270)](/[\r\n]+/);let _0x532c6c=null,_0x5c6fe3=0x0;for(const _0x59f392 of _0x2700a7){if(!_0x59f392)continue;if(!_0x532c6c&&_0x59f392[_0x549f5f(0x297)](/<CONDITIONAL (ITEM|WEAPON|ARMOR) (\d+)[ ](?:THROUGH|to)[ ](\d+) (?:DROP|DROPS)>/i)){const _0x4a4a8c=VisuMZ[_0x549f5f(0x24e)][_0x549f5f(0x285)](RegExp['$1']),_0x53b86b=Number(RegExp['$2']),_0x4f3752=Number(RegExp['$3']);_0x532c6c=[];for(let _0x84d3b=_0x53b86b;_0x84d3b<=_0x4f3752;_0x84d3b++){const _0x3a21c4=_0x4a4a8c[_0x84d3b]||null;_0x3a21c4&&_0x3a21c4['name']['trim']()!==''&&!_0x3a21c4[_0x549f5f(0x235)][_0x549f5f(0x297)](/-----/i)&&_0x532c6c[_0x549f5f(0x21c)](_0x3a21c4);}_0x5c6fe3=0x0;}else{if(!_0x532c6c&&_0x59f392['match'](/<CONDITIONAL (ITEM|WEAPON|ARMOR) (\d+) (?:DROP|DROPS)>/i)){const _0x28a25c=VisuMZ[_0x549f5f(0x24e)]['getDatabase'](RegExp['$1']);_0x532c6c=[_0x28a25c[Number(RegExp['$2'])]||null],_0x5c6fe3=0x0;}else{if(!_0x532c6c&&_0x59f392[_0x549f5f(0x297)](/<CONDITIONAL (ITEM|WEAPON|ARMOR) (.*) (?:DROP|DROPS)>/i))_0x532c6c=[VisuMZ[_0x549f5f(0x24e)][_0x549f5f(0x218)](RegExp['$1'],RegExp['$2'])],_0x5c6fe3=0x0;else{if(_0x532c6c&&_0x59f392['match'](/<\/CONDITIONAL (.*) (?:DROP|DROPS)>/i)){for(const _0x4865b0 of _0x532c6c){if(Math['random']()<_0x5c6fe3)_0x38b763[_0x549f5f(0x21c)](_0x4865b0);}_0x532c6c=null,_0x5c6fe3=0x0;}else{if(_0x532c6c&&_0x59f392[_0x549f5f(0x297)](/(.*):[ ]([\+\-]\d+)([%％])/i)){const _0xaf7384=String(RegExp['$1']),_0x48f686=Number(RegExp['$2'])*0.01;this[_0x549f5f(0x1d6)](_0xaf7384)&&(_0x5c6fe3+=_0x48f686);}}}}}}return _0x38b763;},Game_Enemy[_0xae5eb0(0x292)][_0xae5eb0(0x1d6)]=function(_0xf60b83){const _0x4b5169=_0xae5eb0;if(_0xf60b83['match'](/\bALWAYS\b/i))return!![];else{if(_0xf60b83['match'](/\bRANDOM[ ](\d+)([%％])\b/i)){const _0x35155b=Number(RegExp['$1'])*0.01;return Math[_0x4b5169(0x1f0)]()<_0x35155b;}else{if(_0xf60b83[_0x4b5169(0x297)](/\bLAST (?:STRIKE|STRUCK)[ ](ELEMENT|ITEM|SKILL|STYPE|STATE)[ ](\d+)\b/i)){let _0x85aad4=String(RegExp['$1'])[_0x4b5169(0x18b)]();const _0x402154=Number(RegExp['$2']);_0x85aad4=_0x85aad4[_0x4b5169(0x2c4)](0x0)['toUpperCase']()+_0x85aad4[_0x4b5169(0x2d3)](0x1);if(_0x85aad4[_0x4b5169(0x297)](/STYPE/i))_0x85aad4='SType';const _0x5b303e=this[_0x4b5169(0x29e)]();if(_0x85aad4===_0x4b5169(0x27f)&&_0x5b303e['lastStruckType']!=='Item')return![];if(_0x85aad4==='Skill'&&_0x5b303e['lastStruckType']!==_0x4b5169(0x189))return![];if(_0x85aad4===_0x4b5169(0x264)&&_0x5b303e[_0x4b5169(0x19c)]!==_0x4b5169(0x189))return![];const _0x556bd3=_0x4b5169(0x227)['format'](_0x85aad4);return _0x5b303e[_0x556bd3]===_0x402154;}else{if(_0xf60b83[_0x4b5169(0x297)](/\bLAST (?:STRIKE|STRUCK)[ ](ELEMENT|ITEM|SKILL|STYPE|STATE)[ ](.*)\b/i)){let _0x915fdf=String(RegExp['$1'])[_0x4b5169(0x18b)]();const _0x247402=String(RegExp['$2']),_0x4813fc=this[_0x4b5169(0x29e)]();let _0x4a9482=0x0;switch(_0x915fdf[_0x4b5169(0x2c0)]()['trim']()){case'ELEMENT':_0x4a9482=DataManager['getElementIdWithName'](_0x247402);return _0x4813fc[_0x4b5169(0x18e)]===_0x4a9482;case'ITEM':if(_0x4813fc[_0x4b5169(0x19c)]!==_0x4b5169(0x27f))return![];_0x4a9482=DataManager[_0x4b5169(0x23a)](_0x247402);return _0x4813fc['lastStruckItem']===_0x4a9482;case'SKILL':if(_0x4813fc[_0x4b5169(0x19c)]!=='Skill')return![];_0x4a9482=DataManager[_0x4b5169(0x25f)](_0x247402);return _0x4813fc[_0x4b5169(0x1d0)]===_0x4a9482;case _0x4b5169(0x232):if(_0x4813fc[_0x4b5169(0x19c)]!==_0x4b5169(0x189))return![];_0x4a9482=DataManager[_0x4b5169(0x19f)](_0x247402);return _0x4813fc[_0x4b5169(0x275)]===_0x4a9482;case _0x4b5169(0x238):_0x4a9482=DataManager['getStateIdWithName'](_0x247402);return _0x4813fc['lastStruckState']===_0x4a9482;default:return![];}}else{let _0x2fc285=VisuMZ[_0x4b5169(0x24e)][_0x4b5169(0x202)](this,_0xf60b83);try{return eval(_0x2fc285);}catch(_0x5788e0){return![];}}}}}},VisuMZ[_0xae5eb0(0x24e)][_0xae5eb0(0x202)]=function(_0x2fab51,_0x3d5fce){const _0x6596d7=_0xae5eb0;while(_0x3d5fce[_0x6596d7(0x297)](/\b\\V\[(\d+)\]\b/gi)){_0x3d5fce=_0x3d5fce[_0x6596d7(0x2ac)](/\b\\V\[(\d+)\]\b/gi,(_0x1c4c97,_0x2ae810)=>$gameVariables[_0x6596d7(0x2b3)](parseInt(_0x2ae810)));}while(_0x3d5fce[_0x6596d7(0x297)](/\bVARIABLE (\d+)\b/gi)){_0x3d5fce=_0x3d5fce['replace'](/\bVARIABLE (\d+)\b/gi,(_0x3e9bd4,_0x584237)=>$gameVariables[_0x6596d7(0x2b3)](parseInt(_0x584237)));}return _0x3d5fce=_0x3d5fce[_0x6596d7(0x2ac)](/\\S\[(\d+)\] ON/gi,(_0x3e814f,_0x2a72d8)=>String($gameSwitches['value'](parseInt(_0x2a72d8))===!![])),_0x3d5fce=_0x3d5fce[_0x6596d7(0x2ac)](/\\S\[(\d+)\] OFF/gi,(_0x575751,_0x5d02c6)=>String($gameSwitches[_0x6596d7(0x2b3)](parseInt(_0x5d02c6))===![])),_0x3d5fce=_0x3d5fce['replace'](/\\S\[(\d+)\]/gi,(_0x16dd78,_0x22334c)=>String($gameSwitches[_0x6596d7(0x2b3)](parseInt(_0x22334c)))),_0x3d5fce=_0x3d5fce[_0x6596d7(0x2ac)](/SWITCH (\d+) ON/gi,(_0x2f2375,_0x6b4402)=>String($gameSwitches[_0x6596d7(0x2b3)](parseInt(_0x6b4402))===!![])),_0x3d5fce=_0x3d5fce[_0x6596d7(0x2ac)](/SWITCH (\d+) OFF/gi,(_0x2cdb51,_0x4de821)=>String($gameSwitches['value'](parseInt(_0x4de821))===![])),_0x3d5fce=_0x3d5fce['replace'](/SWITCH (\d+)/gi,(_0x2ef30c,_0x35f085)=>String($gameSwitches[_0x6596d7(0x2b3)](parseInt(_0x35f085)))),_0x3d5fce=_0x3d5fce[_0x6596d7(0x2ac)](/\bON\b/gi,_0x6596d7(0x2d9)),_0x3d5fce=_0x3d5fce[_0x6596d7(0x2ac)](/\bOFF\b/gi,_0x6596d7(0x1e9)),_0x3d5fce=_0x3d5fce[_0x6596d7(0x2ac)](/\bTRUE\b/gi,_0x6596d7(0x2d9)),_0x3d5fce=_0x3d5fce[_0x6596d7(0x2ac)](/\bFALSE\b/gi,_0x6596d7(0x1e9)),_0x3d5fce=_0x3d5fce[_0x6596d7(0x2ac)](/\b(ITEM|WEAPON|ARMOR)[ ](\d+)[ ]COUNT\b/gi,(_0x1b8a3a,_0x3d4e4d,_0x3123ec)=>{const _0x280a4b=_0x6596d7,_0x2c9e83=VisuMZ['ExtraEnemyDrops'][_0x280a4b(0x285)](_0x3d4e4d),_0x517d41=_0x2c9e83[Number(_0x3123ec)]||null;return _0x517d41?$gameParty['numItems'](_0x517d41):0x0;}),_0x3d5fce=_0x3d5fce['replace'](/\b(ITEM|WEAPON|ARMOR)[ ](.*)[ ]COUNT\b/gi,(_0x1ce674,_0x31179e,_0x404506)=>{const _0x491b6f=_0x6596d7,_0x182fcd=VisuMZ[_0x491b6f(0x24e)][_0x491b6f(0x218)](_0x31179e,_0x404506);return _0x182fcd?$gameParty[_0x491b6f(0x2ca)](_0x182fcd):0x0;}),_0x3d5fce=_0x3d5fce[_0x6596d7(0x2ac)](/\bTIMES[ ](ELEMENT|ITEM|SKILL|STYPE|STATE)[ ](\d+)[ ](?:STRIKE|STRUCK)\b/gi,(_0x486e7a,_0x5a652d,_0x119519)=>{const _0x2b9d9f=_0x6596d7;let _0x181efd=_0x5a652d;const _0x463664=_0x119519;_0x181efd=_0x181efd[_0x2b9d9f(0x2c4)](0x0)[_0x2b9d9f(0x2c0)]()+_0x181efd[_0x2b9d9f(0x2d3)](0x1);if(_0x181efd[_0x2b9d9f(0x297)](/STYPE/i))_0x181efd=_0x2b9d9f(0x264);const _0x15742d=_0x2b9d9f(0x22d)[_0x2b9d9f(0x1c4)](_0x181efd);if(_0x2fab51[_0x15742d])return _0x2fab51[_0x15742d](_0x463664);return 0x0;}),_0x3d5fce=_0x3d5fce['replace'](/\bTIMES[ ](ELEMENT|ITEM|SKILL|STYPE|STATE)[ ](.*)[ ](?:STRIKE|STRUCK)\b/gi,(_0x29217c,_0x549176,_0x18f13c)=>{const _0x23c0f8=_0x6596d7;let _0x5a0c77=_0x549176;const _0x3097ef=_0x18f13c;let _0xd7f2be=0x0;switch(_0x5a0c77['toUpperCase']()[_0x23c0f8(0x27e)]()){case _0x23c0f8(0x198):_0xd7f2be=DataManager['getElementIdWithName'](_0x3097ef);break;case _0x23c0f8(0x20d):_0xd7f2be=DataManager[_0x23c0f8(0x23a)](_0x3097ef);break;case _0x23c0f8(0x1c2):_0xd7f2be=DataManager[_0x23c0f8(0x25f)](_0x3097ef);break;case _0x23c0f8(0x232):_0xd7f2be=DataManager[_0x23c0f8(0x19f)](_0x3097ef);break;case _0x23c0f8(0x238):_0xd7f2be=DataManager[_0x23c0f8(0x20f)](_0x3097ef);break;default:return 0x0;}_0x5a0c77=_0x5a0c77[_0x23c0f8(0x2c4)](0x0)[_0x23c0f8(0x2c0)]()+_0x5a0c77[_0x23c0f8(0x2d3)](0x1);if(_0x5a0c77[_0x23c0f8(0x297)](/STYPE/i))_0x5a0c77=_0x23c0f8(0x264);const _0x323ffd=_0x23c0f8(0x22d)['format'](_0x5a0c77);if(_0x2fab51[_0x323ffd])return _0x2fab51[_0x323ffd](_0xd7f2be);return 0x0;}),_0x3d5fce=_0x3d5fce[_0x6596d7(0x2ac)](/\bALIVE MEMBERS\b/gi,$gameParty[_0x6596d7(0x1ad)]()[_0x6596d7(0x1f9)]),_0x3d5fce=_0x3d5fce[_0x6596d7(0x2ac)](/\bBATTLE MEMBERS\b/gi,$gameParty[_0x6596d7(0x217)]()['length']),_0x3d5fce=_0x3d5fce[_0x6596d7(0x2ac)](/\bBATTLE TURNS\b/gi,$gameTroop['turnCount']()),_0x3d5fce=_0x3d5fce[_0x6596d7(0x2ac)](/\bDEAD MEMBERS\b/gi,$gameParty['deadMembers']()[_0x6596d7(0x1f9)]),_0x3d5fce=_0x3d5fce[_0x6596d7(0x2ac)](/\bDEATH TURN\b/gi,_0x2fab51[_0x6596d7(0x294)]()||0x1),_0x3d5fce=_0x3d5fce['replace'](/\bENEMY LEVEL\b/gi,_0x2fab51['level']||0x1),_0x3d5fce=_0x3d5fce['replace'](/\bPARTY GOLD\b/gi,$gameParty[_0x6596d7(0x1b8)]()),_0x3d5fce=_0x3d5fce[_0x6596d7(0x2ac)](/\bPARTY MEMBERS\b/gi,$gameParty[_0x6596d7(0x24f)]()[_0x6596d7(0x1f9)]),_0x3d5fce;},VisuMZ[_0xae5eb0(0x24e)][_0xae5eb0(0x2c5)]=Game_Troop[_0xae5eb0(0x292)][_0xae5eb0(0x19e)],Game_Troop[_0xae5eb0(0x292)][_0xae5eb0(0x19e)]=function(){const _0x5ba24d=_0xae5eb0;VisuMZ[_0x5ba24d(0x24e)][_0x5ba24d(0x2c5)][_0x5ba24d(0x29c)](this),this[_0x5ba24d(0x2b4)](),this[_0x5ba24d(0x2a2)]();},Game_Troop[_0xae5eb0(0x292)][_0xae5eb0(0x2b4)]=function(){const _0x2de608=_0xae5eb0;this[_0x2de608(0x23d)]={'exp':undefined,'gold':undefined,'drops':undefined};},Game_Troop['prototype'][_0xae5eb0(0x2a2)]=function(){this['_bonusRewards']={'exp':0x0,'gold':0x0,'drops':[]};},VisuMZ['ExtraEnemyDrops'][_0xae5eb0(0x25c)]=Game_Troop[_0xae5eb0(0x292)][_0xae5eb0(0x2d6)],Game_Troop[_0xae5eb0(0x292)][_0xae5eb0(0x2d6)]=function(){const _0x34292b=_0xae5eb0;if(this[_0x34292b(0x23d)]===undefined)this[_0x34292b(0x2b4)]();if(this['_bonusRewards']===undefined)this[_0x34292b(0x2a2)]();let _0x79232=this[_0x34292b(0x23d)]['exp']===undefined?VisuMZ['ExtraEnemyDrops'][_0x34292b(0x25c)]['call'](this):this['_forcedRewards'][_0x34292b(0x188)];return Math[_0x34292b(0x199)](Math['max'](_0x79232+(this[_0x34292b(0x250)][_0x34292b(0x188)]||0x0),0x0));},VisuMZ[_0xae5eb0(0x24e)][_0xae5eb0(0x196)]=Game_Troop[_0xae5eb0(0x292)][_0xae5eb0(0x2de)],Game_Troop[_0xae5eb0(0x292)][_0xae5eb0(0x2de)]=function(){const _0x10addf=_0xae5eb0;if(this[_0x10addf(0x23d)]===undefined)this[_0x10addf(0x2b4)]();if(this[_0x10addf(0x250)]===undefined)this['clearBonusRewards']();let _0x2f17de=this['_forcedRewards'][_0x10addf(0x1b8)]===undefined?VisuMZ[_0x10addf(0x24e)][_0x10addf(0x196)][_0x10addf(0x29c)](this):this['_forcedRewards'][_0x10addf(0x1b8)]*this['goldRate']();return Math[_0x10addf(0x199)](Math[_0x10addf(0x23b)](_0x2f17de+(this[_0x10addf(0x250)]['gold']||0x0)*this[_0x10addf(0x21d)](),0x0));},VisuMZ[_0xae5eb0(0x24e)][_0xae5eb0(0x29b)]=Game_Troop[_0xae5eb0(0x292)]['makeDropItems'],Game_Troop[_0xae5eb0(0x292)][_0xae5eb0(0x252)]=function(){const _0x22d57b=_0xae5eb0;if(this[_0x22d57b(0x23d)]===undefined)this['clearForcedRewards']();if(this[_0x22d57b(0x250)]===undefined)this[_0x22d57b(0x2a2)]();let _0x5b29ae=this[_0x22d57b(0x23d)]['drops']===undefined?VisuMZ[_0x22d57b(0x24e)]['Game_Troop_makeDropItems'][_0x22d57b(0x29c)](this):this[_0x22d57b(0x23d)]['drops'];return _0x5b29ae['concat'](this[_0x22d57b(0x250)]['drops']);},Game_Troop['prototype'][_0xae5eb0(0x1e4)]=function(_0x1aeb3c){const _0x3273dd=_0xae5eb0;if(this[_0x3273dd(0x23d)]===undefined)this['clearForcedRewards']();if(this['_bonusRewards']===undefined)this[_0x3273dd(0x2a2)]();this['_forcedRewards']['exp']=Math[_0x3273dd(0x23b)](0x0,Math[_0x3273dd(0x199)](_0x1aeb3c));},Game_Troop['prototype']['setBonusExp']=function(_0xd17860){const _0x4c4b8b=_0xae5eb0;if(this['_forcedRewards']===undefined)this[_0x4c4b8b(0x2b4)]();if(this[_0x4c4b8b(0x250)]===undefined)this[_0x4c4b8b(0x2a2)]();this[_0x4c4b8b(0x250)][_0x4c4b8b(0x188)]=Math[_0x4c4b8b(0x23b)](0x0,Math[_0x4c4b8b(0x199)](_0xd17860));},Game_Troop[_0xae5eb0(0x292)]['setForcedGold']=function(_0x4968d0){const _0x25af66=_0xae5eb0;if(this[_0x25af66(0x23d)]===undefined)this[_0x25af66(0x2b4)]();if(this['_bonusRewards']===undefined)this[_0x25af66(0x2a2)]();this[_0x25af66(0x23d)][_0x25af66(0x1b8)]=Math['max'](0x0,Math[_0x25af66(0x199)](_0x4968d0));},Game_Troop[_0xae5eb0(0x292)]['setBonusGold']=function(_0x1bb2fd){const _0x387356=_0xae5eb0;if(this[_0x387356(0x23d)]===undefined)this[_0x387356(0x2b4)]();if(this[_0x387356(0x250)]===undefined)this[_0x387356(0x2a2)]();this[_0x387356(0x250)][_0x387356(0x1b8)]=Math[_0x387356(0x23b)](0x0,Math[_0x387356(0x199)](_0x1bb2fd));},Game_Troop[_0xae5eb0(0x292)][_0xae5eb0(0x219)]=function(_0x4a25d7,_0x4b1d95){const _0x23d262=_0xae5eb0;if(this[_0x23d262(0x23d)]===undefined)this[_0x23d262(0x2b4)]();if(this['_bonusRewards']===undefined)this[_0x23d262(0x2a2)]();_0x4b1d95=_0x4b1d95||0x1,this[_0x23d262(0x23d)][_0x23d262(0x248)]=this['_forcedRewards']['drops']||[];while(_0x4b1d95--){const _0x109b6c=$dataItems[_0x4a25d7];if(_0x109b6c)this[_0x23d262(0x23d)][_0x23d262(0x248)][_0x23d262(0x21c)](_0x109b6c);}},Game_Troop['prototype'][_0xae5eb0(0x1e2)]=function(_0xba1f88,_0x374034){const _0x1001bb=_0xae5eb0;if(this['_forcedRewards']===undefined)this['clearForcedRewards']();if(this['_bonusRewards']===undefined)this[_0x1001bb(0x2a2)]();_0x374034=_0x374034||0x1,this[_0x1001bb(0x23d)][_0x1001bb(0x248)]=this['_forcedRewards'][_0x1001bb(0x248)]||[];while(_0x374034--){const _0x4e30af=$dataWeapons[_0xba1f88];if(_0x4e30af)this[_0x1001bb(0x23d)][_0x1001bb(0x248)][_0x1001bb(0x21c)](_0x4e30af);}},Game_Troop[_0xae5eb0(0x292)][_0xae5eb0(0x290)]=function(_0x8172cb,_0x2dfcd9){const _0x135b56=_0xae5eb0;if(this[_0x135b56(0x23d)]===undefined)this[_0x135b56(0x2b4)]();if(this[_0x135b56(0x250)]===undefined)this[_0x135b56(0x2a2)]();_0x2dfcd9=_0x2dfcd9||0x1,this[_0x135b56(0x23d)]['drops']=this[_0x135b56(0x23d)][_0x135b56(0x248)]||[];while(_0x2dfcd9--){const _0x410e00=$dataArmors[_0x8172cb];if(_0x410e00)this[_0x135b56(0x23d)][_0x135b56(0x248)][_0x135b56(0x21c)](_0x410e00);}},Game_Troop[_0xae5eb0(0x292)]['addBonusItemDrop']=function(_0x2bdc63,_0x38a80a){const _0x3856a2=_0xae5eb0;if(this[_0x3856a2(0x23d)]===undefined)this[_0x3856a2(0x2b4)]();if(this[_0x3856a2(0x250)]===undefined)this['clearBonusRewards']();_0x38a80a=_0x38a80a||0x1;while(_0x38a80a--){const _0x1e36de=$dataItems[_0x2bdc63];if(_0x1e36de)this[_0x3856a2(0x250)][_0x3856a2(0x248)][_0x3856a2(0x21c)](_0x1e36de);}},Game_Troop['prototype'][_0xae5eb0(0x2a1)]=function(_0x4627da,_0x116d3d){const _0xe0b9f1=_0xae5eb0;if(this[_0xe0b9f1(0x23d)]===undefined)this[_0xe0b9f1(0x2b4)]();if(this[_0xe0b9f1(0x250)]===undefined)this[_0xe0b9f1(0x2a2)]();_0x116d3d=_0x116d3d||0x1;while(_0x116d3d--){const _0x190592=$dataWeapons[_0x4627da];if(_0x190592)this[_0xe0b9f1(0x250)][_0xe0b9f1(0x248)][_0xe0b9f1(0x21c)](_0x190592);}},Game_Troop['prototype']['addBonusArmorDrop']=function(_0x398167,_0x835414){const _0x1fb50f=_0xae5eb0;if(this[_0x1fb50f(0x23d)]===undefined)this['clearForcedRewards']();if(this[_0x1fb50f(0x250)]===undefined)this['clearBonusRewards']();_0x835414=_0x835414||0x1;while(_0x835414--){const _0x5b5761=$dataArmors[_0x398167];if(_0x5b5761)this[_0x1fb50f(0x250)][_0x1fb50f(0x248)]['push'](_0x5b5761);}},Game_Troop[_0xae5eb0(0x292)][_0xae5eb0(0x18f)]=function(){const _0x483a21=_0xae5eb0;if(this['_forcedRewards']===undefined)this[_0x483a21(0x2b4)]();return this[_0x483a21(0x23d)][_0x483a21(0x248)]!==undefined;};if(Imported[_0xae5eb0(0x21b)]&&VisuMZ['ExtraEnemyDrops'][_0xae5eb0(0x1bb)][_0xae5eb0(0x2a9)][_0xae5eb0(0x299)]){VisuMZ[_0xae5eb0(0x28c)]=VisuMZ[_0xae5eb0(0x28c)]||{},VisuMZ['VisualDrops'][_0xae5eb0(0x2b2)]=BattleManager['initMembers'],BattleManager[_0xae5eb0(0x2ae)]=function(){const _0x4c8739=_0xae5eb0;$gameTemp[_0x4c8739(0x2a5)]=[],BattleManager['_visualDropsVisible']=!![],VisuMZ['VisualDrops']['BattleManager_initMembers'][_0x4c8739(0x29c)](this);},VisuMZ['VisualDrops']['Game_BattlerBase_addNewState']=Game_BattlerBase['prototype'][_0xae5eb0(0x1db)],Game_BattlerBase[_0xae5eb0(0x292)][_0xae5eb0(0x1db)]=function(_0x3b4c3f){const _0x35bc29=_0xae5eb0,_0x1f2a29=this[_0x35bc29(0x1c6)]();VisuMZ[_0x35bc29(0x28c)][_0x35bc29(0x2cf)][_0x35bc29(0x29c)](this,_0x3b4c3f);if(!Imported[_0x35bc29(0x21b)])return;if(!this['isEnemy']())return;if(!SceneManager[_0x35bc29(0x2d1)]())return;const _0x1d0d15=SceneManager[_0x35bc29(0x1d3)][_0x35bc29(0x2cb)];if(!_0x1d0d15)return;_0x1f2a29&&this['isDead']()&&_0x1d0d15[_0x35bc29(0x1eb)](this);},VisuMZ[_0xae5eb0(0x28c)][_0xae5eb0(0x200)]=Game_BattlerBase[_0xae5eb0(0x292)][_0xae5eb0(0x1ce)],Game_BattlerBase[_0xae5eb0(0x292)][_0xae5eb0(0x1ce)]=function(_0x2b3649){const _0x364080=_0xae5eb0,_0x35da7d=this[_0x364080(0x1b0)]();VisuMZ['VisualDrops'][_0x364080(0x200)][_0x364080(0x29c)](this,_0x2b3649);if(!Imported[_0x364080(0x21b)])return;if(!this[_0x364080(0x256)]())return;if(!SceneManager['isSceneBattle']())return;const _0x1362c4=SceneManager[_0x364080(0x1d3)][_0x364080(0x2cb)];if(!_0x1362c4)return;if(_0x35da7d&&this[_0x364080(0x1c6)]()){_0x1362c4['removeVisualDrops'](this);if(VisuMZ['ExtraEnemyDrops'][_0x364080(0x1bb)][_0x364080(0x2a9)][_0x364080(0x187)])this[_0x364080(0x296)]();}},VisuMZ[_0xae5eb0(0x28c)][_0xae5eb0(0x216)]=Game_Enemy[_0xae5eb0(0x292)][_0xae5eb0(0x2c9)],Game_Enemy[_0xae5eb0(0x292)][_0xae5eb0(0x2c9)]=function(_0x130068,_0x30f1d8,_0x1a61ad){const _0x11d63f=_0xae5eb0;VisuMZ[_0x11d63f(0x28c)][_0x11d63f(0x216)]['call'](this,_0x130068,_0x30f1d8,_0x1a61ad);},Game_Enemy[_0xae5eb0(0x292)][_0xae5eb0(0x296)]=function(){this['_visualDrops']={};},VisuMZ[_0xae5eb0(0x28c)]['Game_Enemy_exp']=Game_Enemy['prototype'][_0xae5eb0(0x188)],Game_Enemy[_0xae5eb0(0x292)]['exp']=function(){const _0x3a2e1e=_0xae5eb0;this['_visualDrops']=this['_visualDrops']||{};if(this[_0x3a2e1e(0x2c7)][_0x3a2e1e(0x188)]!==undefined)return this[_0x3a2e1e(0x2c7)][_0x3a2e1e(0x188)];return this[_0x3a2e1e(0x2c7)][_0x3a2e1e(0x188)]=VisuMZ['VisualDrops'][_0x3a2e1e(0x1f7)][_0x3a2e1e(0x29c)](this),this[_0x3a2e1e(0x2c7)]['exp'];},VisuMZ['VisualDrops']['Game_Enemy_gold']=Game_Enemy[_0xae5eb0(0x292)]['gold'],Game_Enemy[_0xae5eb0(0x292)][_0xae5eb0(0x1b8)]=function(){const _0x29fe60=_0xae5eb0;this[_0x29fe60(0x2c7)]=this['_visualDrops']||{};if(this[_0x29fe60(0x2c7)][_0x29fe60(0x1b8)]!==undefined)return this['_visualDrops'][_0x29fe60(0x1b8)];return this[_0x29fe60(0x2c7)][_0x29fe60(0x1b8)]=VisuMZ['VisualDrops'][_0x29fe60(0x1de)][_0x29fe60(0x29c)](this),this[_0x29fe60(0x2c7)][_0x29fe60(0x1b8)];},VisuMZ[_0xae5eb0(0x28c)]['Game_Enemy_makeDropItems']=Game_Enemy[_0xae5eb0(0x292)][_0xae5eb0(0x252)],Game_Enemy[_0xae5eb0(0x292)][_0xae5eb0(0x252)]=function(){const _0x4fa08a=_0xae5eb0;this['_visualDrops']=this[_0x4fa08a(0x2c7)]||{};if(this[_0x4fa08a(0x2c7)][_0x4fa08a(0x248)]!==undefined)return this['_visualDrops'][_0x4fa08a(0x248)];return this[_0x4fa08a(0x2c7)][_0x4fa08a(0x248)]=VisuMZ[_0x4fa08a(0x28c)]['Game_Enemy_makeDropItems'][_0x4fa08a(0x29c)](this),this['_visualDrops'][_0x4fa08a(0x248)];},Spriteset_Battle['prototype'][_0xae5eb0(0x258)]=function(_0x1b309b){const _0xd01293=_0xae5eb0;if(!_0x1b309b)return;$gameTemp[_0xd01293(0x2a5)]=$gameTemp[_0xd01293(0x2a5)]||[];const _0x3ac360=[];for(const _0x3fba74 of $gameTemp[_0xd01293(0x2a5)]){if(!_0x3fba74)continue;if(_0x3fba74['enemy']!==_0x1b309b)continue;const _0x1dfa14=this[_0xd01293(0x226)](_0x3fba74);if(!_0x1dfa14)continue;_0x1dfa14[_0xd01293(0x1b3)](),_0x3ac360[_0xd01293(0x21c)](_0x3fba74);}for(const _0x1928ba of _0x3ac360){$gameTemp['_visualDropSprites'][_0xd01293(0x245)](_0x1928ba);}},Spriteset_Battle[_0xae5eb0(0x292)][_0xae5eb0(0x226)]=function(_0x777eb7){const _0xd0e885=_0xae5eb0;return this[_0xd0e885(0x2a4)][_0xd0e885(0x211)]['find'](_0x3eb974=>_0x3eb974['_data']===_0x777eb7);},Spriteset_Battle[_0xae5eb0(0x292)][_0xae5eb0(0x1eb)]=function(_0x3ff2c7){const _0x5a16c4=_0xae5eb0,_0x2bef5f=VisuMZ[_0x5a16c4(0x24e)][_0x5a16c4(0x1bb)];if(!_0x3ff2c7)return;let _0x465b81=[];_0x2bef5f[_0x5a16c4(0x24c)][_0x5a16c4(0x2d8)]&&_0x465b81[_0x5a16c4(0x21c)](VisuMZ['VisualDrops']['getExpGoldDropIcon'](_0x3ff2c7,_0x5a16c4(0x24c)));_0x2bef5f[_0x5a16c4(0x257)]['show']&&_0x465b81[_0x5a16c4(0x21c)](VisuMZ[_0x5a16c4(0x28c)][_0x5a16c4(0x1ae)](_0x3ff2c7,_0x5a16c4(0x257)));_0x2bef5f['Drop'][_0x5a16c4(0x2d8)]&&(_0x465b81=_0x465b81[_0x5a16c4(0x1d9)](VisuMZ[_0x5a16c4(0x28c)][_0x5a16c4(0x254)](_0x3ff2c7)));const _0x3c3454=VisuMZ[_0x5a16c4(0x28c)][_0x5a16c4(0x228)](_0x3ff2c7,_0x465b81);$gameTemp['_visualDropSprites']=$gameTemp[_0x5a16c4(0x2a5)]||[];let _0x141126=0x0;for(const _0x51050c of _0x3c3454){if(!_0x51050c)continue;$gameTemp[_0x5a16c4(0x2a5)][_0x5a16c4(0x21c)](_0x51050c['_data']),setTimeout(this[_0x5a16c4(0x229)]['bind'](this,_0x51050c),_0x141126),_0x141126+=_0x2bef5f[_0x5a16c4(0x2a9)][_0x5a16c4(0x26d)];}},Spriteset_Battle[_0xae5eb0(0x292)][_0xae5eb0(0x229)]=function(_0x4128d5){const _0x29bab5=_0xae5eb0;if(!SceneManager[_0x29bab5(0x2d1)]())return;this[_0x29bab5(0x2a4)][_0x29bab5(0x208)](_0x4128d5),_0x4128d5[_0x29bab5(0x251)]();},VisuMZ[_0xae5eb0(0x28c)][_0xae5eb0(0x1ae)]=function(_0x543b9d,_0x570234){const _0x3c7350=_0xae5eb0;if(!_0x543b9d)return 0x0;const _0x374c26=VisuMZ[_0x3c7350(0x24e)]['Settings'][_0x570234],_0x4371d6=VisuMZ['ExtraEnemyDrops'][_0x3c7350(0x1bb)][_0x3c7350(0x21e)],_0x53b93b=_0x570234===_0x3c7350(0x24c)?_0x543b9d[_0x3c7350(0x188)]():_0x543b9d[_0x3c7350(0x1b8)]();let _0x3bb157=0x0,_0x267dcd=0x0,_0x1191bf=_0x4371d6[_0x3c7350(0x2df)],_0x5ba719=_0x4371d6[_0x3c7350(0x24a)],_0x49069a=JsonEx['makeDeepCopy'](_0x4371d6[_0x3c7350(0x244)]);for(let _0x3fc437=0x1;_0x3fc437<=0xa;_0x3fc437++){const _0x35eded=_0x3c7350(0x1f2)[_0x3c7350(0x1c4)](_0x3fc437),_0x46cdd4=_0x3c7350(0x271)['format'](_0x3fc437),_0x208b42='Rarity%1'['format'](_0x3fc437);if(_0x374c26[_0x35eded]<_0x3bb157)continue;if(_0x53b93b<_0x374c26[_0x35eded])continue;_0x3bb157=_0x374c26[_0x35eded],_0x267dcd=_0x374c26[_0x46cdd4];const _0x50941f=_0x374c26[_0x208b42][_0x3c7350(0x1be)](0x0,0xa);_0x1191bf=_0x4371d6['Tint%1'[_0x3c7350(0x1c4)](_0x50941f)]||[0x0,0x0,0x0,0x0],_0x5ba719=_0x4371d6[_0x3c7350(0x240)[_0x3c7350(0x1c4)](_0x50941f)]||0x1,_0x49069a=_0x4371d6[_0x3c7350(0x1a7)[_0x3c7350(0x1c4)](_0x50941f)]||[];}return[_0x267dcd,_0x1191bf,_0x5ba719,_0x49069a];},VisuMZ['VisualDrops'][_0xae5eb0(0x254)]=function(_0x1a46ea){const _0xc6d1df=_0xae5eb0,_0x303ff9=[],_0x10d755=_0x1a46ea[_0xc6d1df(0x252)](),_0x2196dd=VisuMZ['ExtraEnemyDrops'][_0xc6d1df(0x1bb)][_0xc6d1df(0x267)],_0x3c3521=VisuMZ[_0xc6d1df(0x24e)][_0xc6d1df(0x1bb)][_0xc6d1df(0x21e)];for(const _0x5bf8a9 of _0x10d755){if(!_0x5bf8a9)continue;const _0xe6a988=[];if(_0x5bf8a9[_0xc6d1df(0x1fe)][_0xc6d1df(0x297)](/<VISUAL DROP ICON:[ ](\d+)>/i))_0xe6a988[_0xc6d1df(0x21c)](Number(RegExp['$1'])||0x0);else{if(_0x2196dd['uniqueIcons'])_0xe6a988['push'](_0x5bf8a9[_0xc6d1df(0x26f)]);else{if(DataManager[_0xc6d1df(0x1ac)](_0x5bf8a9))_0xe6a988[_0xc6d1df(0x21c)](_0x2196dd[_0xc6d1df(0x194)]);else{if(DataManager[_0xc6d1df(0x1f6)](_0x5bf8a9))_0xe6a988['push'](_0x2196dd[_0xc6d1df(0x1bf)]);else DataManager[_0xc6d1df(0x2a8)](_0x5bf8a9)&&_0xe6a988[_0xc6d1df(0x21c)](_0x2196dd[_0xc6d1df(0x1c3)]);}}}if(_0x5bf8a9[_0xc6d1df(0x1fe)][_0xc6d1df(0x297)](/<VISUAL DROP RARITY:[ ](\d+)>/i)){const _0xeed46d=Number(RegExp['$1'])[_0xc6d1df(0x1be)](0x0,0xa);_0xe6a988[_0xc6d1df(0x21c)](_0x3c3521[_0xc6d1df(0x1cd)[_0xc6d1df(0x1c4)](_0xeed46d)]||[0x0,0x0,0x0,0x0]),_0xe6a988[_0xc6d1df(0x21c)](_0x3c3521['Duration%1'['format'](_0xeed46d)]||0xb4),_0xe6a988['push'](_0x3c3521['Flags%1'[_0xc6d1df(0x1c4)](_0xeed46d)]||[]);}else{if(_0x5bf8a9['note'][_0xc6d1df(0x297)](/<VISUAL DROP TINT COLOR:[ ](.*)>/i)){let _0x4960ca=String(RegExp['$1'])[_0xc6d1df(0x270)](',')[_0xc6d1df(0x1f5)](_0x3adeb3=>Number(_0x3adeb3)[_0xc6d1df(0x1be)](-0xff,0xff));while(_0x4960ca[_0xc6d1df(0x1f9)]<0x4)_0x4960ca['push'](0x0);_0xe6a988[_0xc6d1df(0x21c)](_0x4960ca);}else _0xe6a988[_0xc6d1df(0x21c)](_0x3c3521[_0xc6d1df(0x2df)]);_0x5bf8a9[_0xc6d1df(0x1fe)]['match'](/<VISUAL DROP TINT DURATION:[ ](\d+)>/i)?_0xe6a988[_0xc6d1df(0x21c)](Number(RegExp['$1'])||0xb4):_0xe6a988['push'](_0x3c3521[_0xc6d1df(0x2a7)]),_0xe6a988['push'](JsonEx[_0xc6d1df(0x266)](_0x3c3521[_0xc6d1df(0x244)]));}const _0x51f862=_0x5bf8a9['note'][_0xc6d1df(0x297)](/<VISUAL DROP FLAG:[ ](.*)>/gi);if(_0x51f862)for(const _0x1adce0 of _0x51f862){_0x1adce0[_0xc6d1df(0x297)](/<VISUAL DROP FLAG:[ ](.*)>/i);const _0x5e4d26=String(RegExp['$1']);_0xe6a988[_0xe6a988['length']-0x1]['push'](_0x5e4d26);}if(_0x5bf8a9[_0xc6d1df(0x1fe)][_0xc6d1df(0x297)](/<VISUAL DROP SFX:[ ](.*)>/i)){const _0x123c2b=_0xc6d1df(0x25d)[_0xc6d1df(0x1c4)](String(RegExp['$1']));_0xe6a988[_0xe6a988[_0xc6d1df(0x1f9)]-0x1][_0xc6d1df(0x21c)](_0x123c2b);}if(_0x5bf8a9['note'][_0xc6d1df(0x297)](/<VISUAL DROP SPAWN SFX:[ ](.*)>/i)){const _0x3e1245='SPAWN\x20SFX:\x20%1'[_0xc6d1df(0x1c4)](String(RegExp['$1']));_0xe6a988[_0xe6a988['length']-0x1]['push'](_0x3e1245);}if(_0x5bf8a9[_0xc6d1df(0x1fe)][_0xc6d1df(0x297)](/<VISUAL DROP BOUNCE HEIGHT:[ ](\d+)([%％])>/i)){const _0x2330f2='BOUNCE\x20HEIGHT\x20%1%'[_0xc6d1df(0x1c4)](Number(RegExp['$1']));_0xe6a988[_0xe6a988[_0xc6d1df(0x1f9)]-0x1][_0xc6d1df(0x21c)](_0x2330f2);}if(_0x5bf8a9[_0xc6d1df(0x1fe)][_0xc6d1df(0x297)](/<VISUAL DROP BOUNCE SFX:[ ](.*)>/i)){const _0x410586='BOUNCE\x20SFX:\x20%1'['format'](String(RegExp['$1']));_0xe6a988[_0xe6a988[_0xc6d1df(0x1f9)]-0x1][_0xc6d1df(0x21c)](_0x410586);}_0x303ff9[_0xc6d1df(0x21c)](_0xe6a988);}return _0x303ff9;},VisuMZ[_0xae5eb0(0x28c)][_0xae5eb0(0x228)]=function(_0x4eb393,_0x10de6a){const _0xb45304=_0xae5eb0;_0x10de6a=_0x10de6a[_0xb45304(0x210)](_0x244b9=>_0x244b9[0x0]!==0x0);if(_0x10de6a['length']<=0x0)return[];const _0x57a4f5=VisuMZ[_0xb45304(0x24e)][_0xb45304(0x1bb)][_0xb45304(0x2a9)],_0x2bf4bb=0x168/_0x10de6a[_0xb45304(0x1f9)],_0x33e35c=_0x4eb393['battler'](),_0x55bf87=[];let _0x190b43=Math['randomInt'](0x168);for(const _0x192e83 of _0x10de6a){if(_0x192e83[0x0]<=0x0)continue;const _0x2a8460=new Sprite_VisualDrop(_0x4eb393,_0x192e83);_0x55bf87[_0xb45304(0x21c)](_0x2a8460);if(_0x33e35c&&_0x10de6a[_0xb45304(0x1f9)]>0x1){const _0x284b7c=_0x57a4f5[_0xb45304(0x215)]+_0x57a4f5[_0xb45304(0x203)]*_0x10de6a['length'],_0x421c43=_0x284b7c*Math[_0xb45304(0x224)](_0x190b43*Math['PI']/0xb4),_0x41d6f4=_0x284b7c*(Math[_0xb45304(0x280)](_0x190b43*Math['PI']/0xb4)*_0x57a4f5[_0xb45304(0x29a)]);_0x2a8460[_0xb45304(0x2ce)](_0x421c43+_0x33e35c[_0xb45304(0x29d)],_0x41d6f4+_0x33e35c[_0xb45304(0x19a)]),_0x190b43+=_0x2bf4bb;}}return _0x55bf87;},VisuMZ[_0xae5eb0(0x28c)][_0xae5eb0(0x2dc)]=Spriteset_Battle[_0xae5eb0(0x292)]['createLowerLayer'],Spriteset_Battle[_0xae5eb0(0x292)][_0xae5eb0(0x1f1)]=function(){const _0x521b01=_0xae5eb0;VisuMZ[_0x521b01(0x28c)]['Spriteset_Battle_createLowerLayer']['call'](this),this['restoreVisualDrops']();},Spriteset_Battle[_0xae5eb0(0x292)][_0xae5eb0(0x26c)]=function(){const _0x304ead=_0xae5eb0;$gameTemp[_0x304ead(0x2a5)]=$gameTemp[_0x304ead(0x2a5)]||[];for(const _0x1763e9 of $gameTemp[_0x304ead(0x2a5)]){if(!_0x1763e9)continue;const _0x1199ed=new Sprite_VisualDrop(_0x1763e9['enemy'],_0x1763e9['iconIndex'],_0x1763e9);this[_0x304ead(0x2a4)][_0x304ead(0x208)](_0x1199ed);}};function Sprite_VisualDrop(){const _0x3a28be=_0xae5eb0;this[_0x3a28be(0x1e5)](...arguments);}Sprite_VisualDrop[_0xae5eb0(0x292)]=Object[_0xae5eb0(0x2bc)](Sprite[_0xae5eb0(0x292)]),Sprite_VisualDrop['prototype']['constructor']=Sprite_VisualDrop,Sprite_VisualDrop[_0xae5eb0(0x292)]['initialize']=function(_0x4920dd,_0x3897e0,_0x2b6998){const _0x493e6a=_0xae5eb0;_0x2b6998?(this[_0x493e6a(0x2b7)]=_0x2b6998,this[_0x493e6a(0x29d)]=this[_0x493e6a(0x2b7)][_0x493e6a(0x2dd)],this[_0x493e6a(0x19a)]=this[_0x493e6a(0x2b7)][_0x493e6a(0x2e0)]):this[_0x493e6a(0x2b7)]=this[_0x493e6a(0x1cc)](_0x4920dd,_0x3897e0),Sprite[_0x493e6a(0x292)][_0x493e6a(0x1e5)][_0x493e6a(0x29c)](this),this[_0x493e6a(0x193)]();},Sprite_VisualDrop[_0xae5eb0(0x292)]['createInitialPosition']=function(_0x1fb9e4,_0x3a1eb8){const _0x1a37aa=_0xae5eb0,_0x298c36=VisuMZ[_0x1a37aa(0x24e)][_0x1a37aa(0x1bb)]['General'],_0x32378e=_0x1fb9e4[_0x1a37aa(0x2aa)]();_0x3a1eb8=JsonEx['makeDeepCopy'](_0x3a1eb8);const _0x1d9c29={'enemy':_0x1fb9e4,'iconIndex':_0x3a1eb8[0x0],'duration':_0x298c36[_0x1a37aa(0x291)],'angle':_0x298c36[_0x1a37aa(0x265)],'jumpHeight':0x0,'bounces':_0x298c36[_0x1a37aa(0x2a0)],'bounceSFX':_0x298c36[_0x1a37aa(0x262)],'targetX':_0x32378e[_0x1a37aa(0x29d)],'targetY':_0x32378e[_0x1a37aa(0x19a)],'targetOpacity':0xff,'opacityModifier':0x1,'rarityFrames':0x0,'rarityTint':_0x3a1eb8[0x1]||[0x0,0x0,0x0,0x0],'rarityDuration':_0x3a1eb8[0x2]||0xb4,'flags':_0x3a1eb8[0x3]||[]};this[_0x1a37aa(0x29d)]=_0x32378e[_0x1a37aa(0x29d)],this[_0x1a37aa(0x19a)]=_0x32378e[_0x1a37aa(0x19a)],_0x1d9c29['baseX']=this[_0x1a37aa(0x29d)],_0x1d9c29[_0x1a37aa(0x2e0)]=this[_0x1a37aa(0x19a)],_0x1d9c29[_0x1a37aa(0x27c)]=_0x1d9c29[_0x1a37aa(0x27c)][_0x1a37aa(0x1f5)](_0x44efe0=>String(_0x44efe0));for(const _0xa64312 of _0x1d9c29['flags']){if(!_0xa64312)continue;if(_0xa64312[_0x1a37aa(0x297)](/BOUNCE SFX: (.*)/i)){const _0x36624a=String(RegExp['$1']);_0x1d9c29[_0x1a37aa(0x2d0)]=_0x36624a;}}return _0x1d9c29;},Sprite_VisualDrop[_0xae5eb0(0x292)]['createChildren']=function(){const _0x156046=_0xae5eb0;this[_0x156046(0x2c2)](),this[_0x156046(0x23f)](),this['updateOpacity'](!![]);},Sprite_VisualDrop[_0xae5eb0(0x292)]['createShadowSprite']=function(){const _0x5106de=_0xae5eb0,_0x3ccf5e=VisuMZ[_0x5106de(0x24e)][_0x5106de(0x1bb)][_0x5106de(0x2a9)];if(!_0x3ccf5e[_0x5106de(0x2d2)])return;this[_0x5106de(0x204)]=new Sprite(),this[_0x5106de(0x204)]['bitmap']=ImageManager[_0x5106de(0x1f4)](_0x3ccf5e['shadowFilename']),this[_0x5106de(0x204)][_0x5106de(0x1a0)]['x']=0.5,this[_0x5106de(0x204)][_0x5106de(0x1a0)]['y']=0x1,this[_0x5106de(0x204)]['x']=_0x3ccf5e[_0x5106de(0x1c7)],this[_0x5106de(0x204)]['y']=_0x3ccf5e['shadowOffsetY'],this[_0x5106de(0x204)][_0x5106de(0x1aa)]=_0x3ccf5e[_0x5106de(0x1e1)],this[_0x5106de(0x208)](this[_0x5106de(0x204)]);},Sprite_VisualDrop[_0xae5eb0(0x292)][_0xae5eb0(0x23f)]=function(){const _0x4eec7b=_0xae5eb0,_0x122700=VisuMZ[_0x4eec7b(0x24e)][_0x4eec7b(0x1bb)]['General'];this['_iconSprite']=new Sprite(),this[_0x4eec7b(0x1b7)][_0x4eec7b(0x2e2)]=ImageManager[_0x4eec7b(0x1f4)](_0x4eec7b(0x18c)),this[_0x4eec7b(0x1b7)][_0x4eec7b(0x1a0)]['x']=0.5,this[_0x4eec7b(0x1b7)][_0x4eec7b(0x1a0)]['y']=0.5,this['_iconSprite'][_0x4eec7b(0x2e0)]=Math[_0x4eec7b(0x199)](ImageManager[_0x4eec7b(0x261)]/_0x122700[_0x4eec7b(0x26b)]),this[_0x4eec7b(0x1b7)]['y']=this[_0x4eec7b(0x1b7)][_0x4eec7b(0x2e0)];const _0x1b695c=this['_data'][_0x4eec7b(0x26f)],_0x2c39ca=ImageManager['iconWidth'],_0x14b1d4=ImageManager[_0x4eec7b(0x261)],_0x564904=_0x1b695c%0x10*_0x2c39ca,_0x3857d3=Math['floor'](_0x1b695c/0x10)*_0x14b1d4;this[_0x4eec7b(0x1b7)][_0x4eec7b(0x1b1)](_0x564904,_0x3857d3,_0x2c39ca,_0x14b1d4),this[_0x4eec7b(0x208)](this[_0x4eec7b(0x1b7)]);},Sprite_VisualDrop[_0xae5eb0(0x292)]['setTargetDestination']=function(_0x1d2c5b,_0x4beaab){const _0x3747d1=_0xae5eb0;this[_0x3747d1(0x2b7)][_0x3747d1(0x2c3)]=Math[_0x3747d1(0x199)](_0x1d2c5b),this[_0x3747d1(0x2b7)][_0x3747d1(0x279)]=Math[_0x3747d1(0x199)](_0x4beaab);},Sprite_VisualDrop[_0xae5eb0(0x292)]['setRarity']=function(_0x3a07e5){const _0xa437a6=_0xae5eb0,_0x21abe7=VisuMZ[_0xa437a6(0x24e)][_0xa437a6(0x1bb)][_0xa437a6(0x21e)],_0x1df827=(_0x21abe7[_0xa437a6(0x1cd)['format'](_0x3a07e5)]||[0x0,0x0,0x0,0x0])[_0xa437a6(0x1f5)](_0x266272=>Number(_0x266272)[_0xa437a6(0x1be)](-0xff,0xff)),_0x3bc71f=_0x21abe7['Duration%1'[_0xa437a6(0x1c4)](_0x3a07e5)]||0x0;this[_0xa437a6(0x190)](_0x1df827,_0x3bc71f);},Sprite_VisualDrop[_0xae5eb0(0x292)][_0xae5eb0(0x190)]=function(_0x57193d,_0x4d0fca){const _0x110cdb=_0xae5eb0;this[_0x110cdb(0x2b7)][_0x110cdb(0x287)]=JsonEx[_0x110cdb(0x266)](_0x57193d),this[_0x110cdb(0x2b7)][_0x110cdb(0x2db)]=_0x4d0fca;},Sprite_VisualDrop[_0xae5eb0(0x292)]['setFlags']=function(_0x626653){const _0x5a87cd=_0xae5eb0;this['_data'][_0x5a87cd(0x27c)]=JsonEx[_0x5a87cd(0x266)](_0x626653)[_0x5a87cd(0x1f5)](_0x24e6a3=>String(_0x24e6a3));},Sprite_VisualDrop[_0xae5eb0(0x292)][_0xae5eb0(0x1b3)]=function(){const _0x1c88a6=_0xae5eb0;this[_0x1c88a6(0x2b7)][_0x1c88a6(0x28b)]=0x0;},Sprite_VisualDrop[_0xae5eb0(0x292)][_0xae5eb0(0x251)]=function(){const _0x3d0d35=_0xae5eb0;for(const _0x11d8de of this[_0x3d0d35(0x2b7)][_0x3d0d35(0x27c)]){if(!_0x11d8de)continue;if(_0x11d8de[_0x3d0d35(0x297)](/\bSPAWN SFX:[ ](.*)\b/i)){const _0x51f724={'name':String(RegExp['$1']),'volume':0x5a,'pitch':0x64,'pan':0x0};AudioManager[_0x3d0d35(0x1ca)](_0x51f724);}}},Sprite_VisualDrop['prototype']['update']=function(){const _0x387dbc=_0xae5eb0;Sprite[_0x387dbc(0x292)][_0x387dbc(0x281)][_0x387dbc(0x29c)](this),this[_0x387dbc(0x221)]();if(this[_0x387dbc(0x1aa)]<=0x0)return;this[_0x387dbc(0x1bc)](),this[_0x387dbc(0x26a)](),this['updateJumpHeight'](),this[_0x387dbc(0x1fb)](),this[_0x387dbc(0x2a6)](),this[_0x387dbc(0x1fd)](),this[_0x387dbc(0x1af)]();},Sprite_VisualDrop[_0xae5eb0(0x292)]['updateFlags']=function(){const _0x5d9635=_0xae5eb0;for(const _0x5cd353 of this['_data'][_0x5d9635(0x27c)]){if(!_0x5cd353)continue;this[_0x5d9635(0x241)](_0x5cd353);}},Sprite_VisualDrop[_0xae5eb0(0x292)][_0xae5eb0(0x241)]=function(_0xd7ee71){const _0x4de7ba=_0xae5eb0,_0x3aaae8=VisuMZ[_0x4de7ba(0x24e)][_0x4de7ba(0x1bb)]['Rarity'];switch(_0xd7ee71[_0x4de7ba(0x2c0)]()[_0x4de7ba(0x27e)]()){case _0x4de7ba(0x273):this['_data']['hue']=this[_0x4de7ba(0x2b7)]['hue']||0x0,this['_data'][_0x4de7ba(0x253)]+=_0x3aaae8[_0x4de7ba(0x20b)],this[_0x4de7ba(0x1b7)][_0x4de7ba(0x1a4)](this[_0x4de7ba(0x2b7)][_0x4de7ba(0x253)]);break;case _0x4de7ba(0x2e1):this[_0x4de7ba(0x1b7)][_0x4de7ba(0x26e)]=0x1;break;case _0x4de7ba(0x1c5):this[_0x4de7ba(0x1b7)]['blendMode']=0x2;break;case'SCREEN':this[_0x4de7ba(0x1b7)][_0x4de7ba(0x26e)]=0x3;break;};},Sprite_VisualDrop[_0xae5eb0(0x292)][_0xae5eb0(0x221)]=function(_0x440008){const _0x1fd9d7=_0xae5eb0,_0x5b996a=VisuMZ[_0x1fd9d7(0x24e)]['Settings'][_0x1fd9d7(0x2a9)],_0x57cd68=this[_0x1fd9d7(0x2b7)][_0x1fd9d7(0x28b)][_0x1fd9d7(0x1be)](0x0,0xff)*this[_0x1fd9d7(0x23c)]();if(this[_0x1fd9d7(0x1aa)]>_0x57cd68)this[_0x1fd9d7(0x1aa)]=Math['max'](this[_0x1fd9d7(0x1aa)]-_0x5b996a['opacityFadeOut'],_0x57cd68);else this[_0x1fd9d7(0x1aa)]<_0x57cd68&&(this[_0x1fd9d7(0x1aa)]=Math[_0x1fd9d7(0x272)](this[_0x1fd9d7(0x1aa)]+_0x5b996a[_0x1fd9d7(0x1fa)],_0x57cd68));if(_0x440008)this[_0x1fd9d7(0x1aa)]=_0x57cd68;},Sprite_VisualDrop[_0xae5eb0(0x292)][_0xae5eb0(0x23c)]=function(){const _0x369c35=_0xae5eb0;if(!BattleManager['_visualDropsVisible'])return 0x0;if($gameTroop[_0x369c35(0x18f)]())return 0x0;return this[_0x369c35(0x2b7)][_0x369c35(0x2ad)];},Sprite_VisualDrop[_0xae5eb0(0x292)][_0xae5eb0(0x26a)]=function(){const _0x5148c9=_0xae5eb0;this[_0x5148c9(0x2b7)][_0x5148c9(0x291)]>0x0?this['_iconSprite'][_0x5148c9(0x265)]-=this[_0x5148c9(0x1ab)]():this['_iconSprite'][_0x5148c9(0x265)]=0x0;},Sprite_VisualDrop[_0xae5eb0(0x292)][_0xae5eb0(0x1ab)]=function(){const _0x4965c0=_0xae5eb0;if(this['_rotationConstant']!==undefined)return this[_0x4965c0(0x1da)];const _0x3b005b=VisuMZ[_0x4965c0(0x24e)][_0x4965c0(0x1bb)][_0x4965c0(0x2a9)];return this['_rotationConstant']=_0x3b005b[_0x4965c0(0x265)]/_0x3b005b[_0x4965c0(0x291)],this['_rotationConstant'];},Sprite_VisualDrop[_0xae5eb0(0x292)][_0xae5eb0(0x206)]=function(){const _0x51bc07=_0xae5eb0;this[_0x51bc07(0x2b7)]['duration']>0x0?this[_0x51bc07(0x2b7)][_0x51bc07(0x20c)]=this[_0x51bc07(0x243)]():this[_0x51bc07(0x2b7)][_0x51bc07(0x20c)]=0x0,this[_0x51bc07(0x1b7)]['y']=this[_0x51bc07(0x1b7)]['baseY']-this[_0x51bc07(0x2b7)][_0x51bc07(0x20c)];},Sprite_VisualDrop[_0xae5eb0(0x292)]['calculateJumpHeight']=function(){const _0x4b7ae4=_0xae5eb0,_0x24594c=VisuMZ[_0x4b7ae4(0x24e)][_0x4b7ae4(0x1bb)][_0x4b7ae4(0x2a9)],_0x3440cd=_0x24594c[_0x4b7ae4(0x2a0)],_0x161adc=this['_data']['bounces'],_0xd9ff26=Math[_0x4b7ae4(0x25b)](_0x24594c['bounceReduction'],_0x3440cd-_0x161adc),_0x3bb4a5=Math['round'](_0x24594c[_0x4b7ae4(0x234)]*_0xd9ff26),_0x738e31=Math['round'](_0x24594c['duration']*_0xd9ff26),_0x3330d1=this[_0x4b7ae4(0x2b7)][_0x4b7ae4(0x291)],_0xbe9385=_0x3330d1,_0x391b4c=_0x738e31-_0xbe9385,_0xecb9a3=_0x738e31/0x2,_0x20eca7=_0x3bb4a5,_0x890e50=-_0x20eca7/Math[_0x4b7ae4(0x25b)](_0xecb9a3,0x2),_0x46a882=_0x890e50*Math[_0x4b7ae4(0x25b)](_0x391b4c-_0xecb9a3,0x2)+_0x20eca7;let _0x525817=0x1;for(const _0x58f211 of this[_0x4b7ae4(0x2b7)][_0x4b7ae4(0x27c)]){if(!_0x58f211)continue;_0x58f211[_0x4b7ae4(0x297)](/BOUNCE HEIGHT (\d+)([%％])/i)&&(_0x525817*=Number(RegExp['$1'])/0x64);}return _0x46a882*_0x525817;},Sprite_VisualDrop[_0xae5eb0(0x292)][_0xae5eb0(0x1fb)]=function(){const _0x13487f=_0xae5eb0;if(this[_0x13487f(0x2b7)][_0x13487f(0x291)]>0x0){const _0x56bad2=VisuMZ['ExtraEnemyDrops']['Settings'][_0x13487f(0x2a9)],_0x52062b=this[_0x13487f(0x2b7)]['duration'],_0x4a8808=_0x56bad2[_0x13487f(0x291)],_0x5f330d=_0x56bad2[_0x13487f(0x2da)];Imported[_0x13487f(0x259)]?(this[_0x13487f(0x29d)]=this['applyEasing'](this[_0x13487f(0x29d)],this[_0x13487f(0x2b7)][_0x13487f(0x2c3)],_0x52062b,_0x4a8808,_0x5f330d),this[_0x13487f(0x19a)]=this[_0x13487f(0x225)](this[_0x13487f(0x19a)],this['_data'][_0x13487f(0x279)],_0x52062b,_0x4a8808,_0x5f330d)):(this['_baseX']=(this['_baseX']*(_0x52062b-0x1)+this[_0x13487f(0x2b7)][_0x13487f(0x2c3)])/_0x52062b,this['_baseY']=(this['_baseY']*(_0x52062b-0x1)+this[_0x13487f(0x2b7)][_0x13487f(0x279)])/_0x52062b);}else this['_baseX']=this[_0x13487f(0x2b7)][_0x13487f(0x2c3)],this[_0x13487f(0x19a)]=this['_data'][_0x13487f(0x279)];this[_0x13487f(0x2b7)][_0x13487f(0x2dd)]=this[_0x13487f(0x29d)],this['_data'][_0x13487f(0x2e0)]=this[_0x13487f(0x19a)];},Sprite_VisualDrop['prototype']['applyEasing']=function(_0x2c78c7,_0x13a485,_0x3822fc,_0x1bbf10,_0xe04735){const _0x328c16=_0xae5eb0,_0x483af6=VisuMZ[_0x328c16(0x1df)]((_0x1bbf10-_0x3822fc)/_0x1bbf10,_0xe04735||_0x328c16(0x223)),_0xb12f14=VisuMZ[_0x328c16(0x1df)]((_0x1bbf10-_0x3822fc+0x1)/_0x1bbf10,_0xe04735||_0x328c16(0x223)),_0x53b5d0=(_0x2c78c7-_0x13a485*_0x483af6)/(0x1-_0x483af6);return _0x53b5d0+(_0x13a485-_0x53b5d0)*_0xb12f14;},Sprite_VisualDrop['prototype'][_0xae5eb0(0x2a6)]=function(){const _0x43167b=_0xae5eb0;this['x']=this[_0x43167b(0x29d)],this['y']=this[_0x43167b(0x19a)];},Sprite_VisualDrop[_0xae5eb0(0x292)]['updateTint']=function(){const _0x2b348e=_0xae5eb0;if(!VisuMZ['ExtraEnemyDrops'][_0x2b348e(0x1bb)][_0x2b348e(0x21e)][_0x2b348e(0x2d8)])return;const _0x454afd=this[_0x2b348e(0x2b7)];_0x454afd['rarityFrames']++;const _0xcf6da7=_0x454afd[_0x2b348e(0x19d)]%_0x454afd[_0x2b348e(0x2db)],_0x4ad4ce=_0x454afd[_0x2b348e(0x2db)]-_0xcf6da7,_0x5e55a3=_0x454afd[_0x2b348e(0x2db)]/0x2,_0x29b0ce=0x1,_0x4ca3b9=-_0x29b0ce/Math['pow'](_0x5e55a3,0x2),_0x2181a5=_0x4ca3b9*Math[_0x2b348e(0x25b)](_0x4ad4ce-_0x5e55a3,0x2)+_0x29b0ce,_0x16e9f4=_0x454afd[_0x2b348e(0x287)][_0x2b348e(0x1f5)](_0x37e1ad=>_0x37e1ad*_0x2181a5);this[_0x2b348e(0x1b7)][_0x2b348e(0x249)](_0x16e9f4);},Sprite_VisualDrop['prototype'][_0xae5eb0(0x1af)]=function(){const _0x1cc04c=_0xae5eb0;this[_0x1cc04c(0x2b7)][_0x1cc04c(0x291)]--;if(this[_0x1cc04c(0x2b7)]['duration']===0x0&&this['_data']['bounces']>=0x0){this[_0x1cc04c(0x2b7)][_0x1cc04c(0x2a0)]-=0x1;const _0x2cc7a4=VisuMZ[_0x1cc04c(0x24e)][_0x1cc04c(0x1bb)][_0x1cc04c(0x2a9)],_0x5bfdc6=_0x2cc7a4[_0x1cc04c(0x2a0)],_0x2658c5=this['_data']['bounces'],_0x128186=Math[_0x1cc04c(0x25b)](_0x2cc7a4[_0x1cc04c(0x1ed)],_0x5bfdc6-_0x2658c5);if(this[_0x1cc04c(0x2b7)][_0x1cc04c(0x2a0)]>=0x0)this[_0x1cc04c(0x2b7)][_0x1cc04c(0x291)]=Math[_0x1cc04c(0x199)](_0x2cc7a4[_0x1cc04c(0x291)]*_0x128186);else _0x2cc7a4[_0x1cc04c(0x1e7)]&&setTimeout(this[_0x1cc04c(0x1b3)]['bind'](this),_0x2cc7a4[_0x1cc04c(0x1dc)]);if(_0x2cc7a4['sfxFilename']){const _0x267780={'name':this['_data'][_0x1cc04c(0x2d0)],'volume':Math[_0x1cc04c(0x199)](_0x2cc7a4[_0x1cc04c(0x214)]*_0x128186),'pitch':_0x2cc7a4[_0x1cc04c(0x274)],'pan':_0x2cc7a4['sfxPan']};AudioManager[_0x1cc04c(0x1ca)](_0x267780);}}};};