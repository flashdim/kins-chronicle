//=============================================================================
// VisuStella MZ - Enemy Levels
// VisuMZ_3_EnemyLevels.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_EnemyLevels = true;

var VisuMZ = VisuMZ || {};
VisuMZ.EnemyLevel = VisuMZ.EnemyLevel || {};
VisuMZ.EnemyLevel.version = 1.04;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.04] [EnemyLevel]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Enemy_Levels_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Enemies in RPG Maker MZ do not have levels by default, but instead are given
 * static parameters that do not change throughout the game. This plugin adds
 * the functionality to apply levels and level-based parameter changes to all
 * of your enemies, along with control over how their levels are handled.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Assign levels to each enemy from exact values to dynamic values based on
 *   the party's levels, variables, etc.
 * * Level variance and and bonus modifiers to make enemies dynamically leveled
 *   even if they're in the same battle.
 * * Decide enemy levels based on the map the player is in.
 * * Have enemies use different images based on what level they are.
 * * Skill effects, item effects, and Plugin Commands that alter the levels
 *   of enemies mid-battle.
 * * Notetags to prevent certain skills from being used until the enemy reaches
 *   a specific level.
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
 * * VisuMZ_0_CoreEngine
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
 * enemy.level
 *
 * - A new property, 'level' is defined for Game_Enemy and it used to determine
 * the enemy's current level. This allows you, the game dev, to use a.level or
 * b.level in damage formulas and other calculations.
 *
 * ---
 *
 * ============================================================================
 * Parameter Calculations
 * ============================================================================
 *
 * To understand how parameter calculations are made, refer to the formula
 * below for all base parameters, EXP, gold, and drop rate.
 *
 * ---
 *
 * base + (level * base * rate) + (level * flat)
 *
 * Where:
 * - 'base' is the original base value of the parameter found in the database.
 * - 'level' is the previous level of the enemy (minimum: 0).
 * - 'rate' is the rate of growth determined by notetags or Plugin Parameters.
 * - 'flat' is the flat growth value also determined by notetags/parameters.
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
 * === Setup Enemy Level Notetags ===
 *
 * These are the notetags that determine an enemy's level upon creation.
 *
 * ---
 *
 * <Show Level>
 * <Hide Level>
 *
 * - Used for: Enemy Notetags
 * - Lets you show or hide an enemy's level from their name.
 * - This will override the Plugin Parameters => General => Show Enemy Level?
 *   setting.
 *
 * ---
 *
 * <Level: x>
 *
 * - Used for: Enemy Notetags
 * - Sets the enemy's level to a static level of 'x' whenever it's created.
 * - Replace 'x' with a numeric value representing its level.
 * - This will bypass the default level settings and ignore map levels.
 * - This is affected by the Level Bonus and Level Variance modifiers.
 *
 * ---
 *
 * <Level: x to y>
 *
 * - Used for: Enemy Notetags
 * - Sets the enemy's level to a level between 'x' and 'y'  whenever the enemy
 *   is created.
 * - Replace 'x' and 'y' with a numeric values representing its level range.
 * - This will bypass the default level settings and ignore map levels.
 * - This is affected by the Level Bonus and Level Variance modifiers.
 *
 * ---
 *
 * <Level Variable: x>
 *
 * - Used for: Enemy Notetags
 * - Sets the enemy's level to a level represented by the value used inside
 *   Game Variable x.
 * - Replace 'x' with the ID of the Game Variable to reference its value.
 * - This will bypass the default level settings and ignore map levels.
 * - This is affected by the Level Bonus and Level Variance modifiers.
 *
 * ---
 *
 * <Level: Highest Actor Level>
 * <Level: Highest Party Level>
 *
 * <Level: Average Actor Level>
 * <Level: Average Party Level>
 *
 * <Level: Lowest Actor Level>
 * <Level: Lowest Party Level>
 *
 * - Used for: Enemy Notetags
 * - Sets the base level of this enemy equal to either (respectively:
 *   - The highest level of any actor in the player's party.
 *   - The highest level of any actor in the battling party.
 *   - The average level of any actor in the player's party.
 *   - The average level of any actor in the battling party.
 *   - The lowest level of any actor in the player's party.
 *   - The lowest level of any actor in the battling party.
 * - This will bypass the default level settings and ignore map levels.
 * - This is affected by the Level Bonus and Level Variance modifiers.
 *
 * ---
 *
 * <Level Bonus: +x>
 * <Level Bonus: -x>
 *
 * - Used for: Enemy
 * - This will add/subtrack the base level decided using the above notetags
 *   with a specific value.
 * - Replace 'x' with a numeric value on how much to adjust the base level by.
 *
 * ---
 *
 * <Level Variance: x>
 *
 * - Used for: Enemy Notetags
 * - This can allow the level range for the enemy to be anywhere from 'x' less
 *   than the base to 'x' more than the base.
 * - Replace 'x' with a numeric value indicating how much level variance there
 *   is from the base level.
 *
 * ---
 *
 * <Positive Level Variance: x>
 * <Negative Level Variance: x>
 *
 * - Used for: Enemy Notetags
 * - This specifies the positive and negative level variances applied to the
 *   base level, specifying a change anywhere between the negative and positive
 *   modifiers to the base level.
 * - Replace 'x' with a numeric value indicating how much level variance there
 *   is from the base level (negatively or positively).
 *
 * ---
 *
 * <Minimum Level: x>
 * <Maximum Level: x>
 *
 * - Used for: Enemy Notetags
 * - These notetags determine the absolute lowest and absolute highest level
 *   the enemy can be after all other modifiers.
 * - Even if the bonus, variance, and manual level changes are applied, the
 *   enemy's level cannot be less than the minimum or larger than the maximum.
 * - Replace 'x' with numeric values representing the limits of the enemy's
 *   level ranges.
 *
 * ---
 *
 * === JavaScript Notetags: Setup Enemy Level ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * determine dynamic enemy level setup notetags.
 *
 * ---
 *
 * <JS Level: code>
 *
 * - Used for: Enemy Notetags
 * - Sets the enemy's level to a static level determined by code whenever
 *   it's created.
 * - Replace 'code' with JavaScript code to determine the enemy's base level.
 *
 * ---
 *
 * <JS Level Bonus: code>
 *
 * - Used for: Enemy Notetags
 * - This will add/subtrack the base level decided using the above notetags
 *   by a value determined by JavaScript code.
 * - Replace 'code' with JavaScript code to determine the level bonus.
 *
 * ---
 *
 * <JS Level Variance: code>
 *
 * - Used for: Enemy Notetags
 * - This can allow the level range for the enemy determined by JavaScript code
 *   as variance.
 * - Replace 'code' with JavaScript code to determine the level variance.
 *
 * ---
 *
 * <JS Positive Level Variance: code>
 * <JS Negative Level Variance: code>
 *
 * - Used for: Enemy Notetags
 * - This specifies the positive and negative level variances applied to the
 *   base level, specifying a change anywhere between the negative and positive
 *   modifiers to the base level.
 * - Replace 'code' with JavaScript code to determine the level variance.
 *
 * ---
 * 
 * === Enemy Appearance-Related Notetags ===
 * 
 * These notetags allow you to adjust how enemies look based on their level.
 * These settings will always start with level 1 being the default appearance
 * while changing appearances once they reach a specific level.
 * 
 * ---
 * 
 * <Level x Image: filename>
 *
 * - Used for: Enemy Notetags
 * - Once the enemy reaches level 'x' and above, its image will change to
 *   whatever 'filename' is used until it reaches the next appearance setting.
 * - Replace 'x' with a number representing the level required to reach.
 * - Replace 'filename' with the filename of the enemy in the img/enemies/
 *   and/or img/sv_enemies folder.
 * - Insert multiples of these notetags to give them different image settings
 *   throughout various levels.
 * - If multiple notetags are used, the settings will be arranged from lowest
 *   to highest, giving priority to the highest met level.
 * 
 * ---
 * 
 * <Level Images>
 *  x: filename
 *  x: filename
 *  x: filename
 * </Level Images>
 *
 * - Used for: Enemy Notetags
 * - Once the enemy reaches level 'x' and above, its image will change to
 *   whatever 'filename' is used until it reaches the next appearance setting.
 * - Replace 'x' with a number representing the level required to reach.
 * - Replace 'filename' with the filename of the enemy in the img/enemies/
 *   and/or img/sv_enemies folder.
 * - Insert multiple lines of the 'x: filename' portion of the notetag to
 *   designate multiple settings.
 * - If multiple settings are used, the settings will be arranged from lowest
 *   to highest, giving priority to the highest met level.
 * 
 * ---
 *
 * === Map Notetags that Determine Enemy Levels ===
 *
 * The following are notetags that are placed inside of a map's notebox to
 * determine the levels of enemies fought on that map. These notetags cannot
 * bypass the <Level: x> notetags but will take priority over the default
 * Plugin Parameter settings.
 *
 * ---
 *
 * <Enemy Level: x>
 *
 * - Used for: Map Notetags
 * - Sets the levels of the map's enemies to a static level of 'x' whenever
 *   they're created.
 * - Replace 'x' with a numeric value representing its level.
 * - This will bypass the default level settings but cannot bypass any of the
 *   <Level: x> notetags.
 * - This is affected by the Level Bonus and Level Variance modifiers.
 *
 * ---
 *
 * <Enemy Level: x to y>
 *
 * - Used for: Map Notetags
 * - Sets the map's enemy levels to a level between 'x' and 'y'  whenever they
 *   are created.
 * - Replace 'x' and 'y' with a numeric values representing its level range.
 * - This will bypass the default level settings but cannot bypass any of the
 *   <Level: x> notetags.
 * - This is affected by the Level Bonus and Level Variance modifiers.
 *
 * ---
 *
 * <Enemy Level: Highest Actor Level>
 * <Enemy Level: Highest Party Level>
 *
 * <Enemy Level: Average Actor Level>
 * <Enemy Level: Average Party Level>
 *
 * <Enemy Level: Lowest Actor Level>
 * <Enemy Level: Lowest Party Level>
 *
 * - Used for: Map Notetags
 * - Sets the base level of this map's levels equal to either (respectively:
 *   - The highest level of any actor in the player's party.
 *   - The highest level of any actor in the battling party.
 *   - The average level of any actor in the player's party.
 *   - The average level of any actor in the battling party.
 *   - The lowest level of any actor in the player's party.
 *   - The lowest level of any actor in the battling party.
 * - This will bypass the default level settings but cannot bypass any of the
 *   <Level: x> notetags.
 * - This is affected by the Level Bonus and Level Variance modifiers.
 *
 * ---
 *
 * === JavaScript Notetags: Map Notetags that Determine Enemy Levels ===
 *
 * The following are notetags made for users with JavaScript knowledge to make
 * map-related notetags that determine enemy levels. These notetags cannot
 * bypass the <Level: x> notetags but will take priority over the default
 * Plugin Parameter settings.
 *
 * ---
 *
 * <JS Enemy Level: code>
 *
 * - Used for: Map Notetags
 * - Sets the levels of the map enemies to a static level determined by code
 *   whenever it's created.
 * - Replace 'code' with JavaScript code to determine the enemy's base level.
 *
 * ---
 *
 * === Enemy Level Parameter Notetags ===
 *
 * The growth rate and flat growth amounts can be determined by default in
 * Plugin Parameters => Parameters Growth. However, if you wish for enemies to
 * have special or unique growth, use the following notetags.
 *
 * ---
 *
 * <Growth Rate Per Level>
 *  MaxHP: +x.x
 *  MaxMP: +x.x
 *  ATK: +x.x
 *  DEF: +x.x
 *  MAT: +x.x
 *  MDF: +x.x
 *  AGI: +x.x
 *  LUK: +x.x
 *  EXP: +x.x
 *  Gold: +x.x
 *  Drop: +x.x
 * </Growth Rate Per Level>
 *
 * - Used for: Enemy Notetags
 * - Changes the rate of growth per level for the enemy.
 * - Replace 'x.x' with a positive or negative value on how much to raise the
 *   parameter by for each level relative to the base value.
 *
 * ---
 *
 * <Growth Flat Per Level>
 *  MaxHP: +x.x
 *  MaxMP: +x.x
 *  ATK: +x.x
 *  DEF: +x.x
 *  MAT: +x.x
 *  MDF: +x.x
 *  AGI: +x.x
 *  LUK: +x.x
 *  EXP: +x.x
 *  Gold: +x.x
 *  Drop: +x.x
 * </Growth Flat Per Level>
 *
 * - Used for: Enemy Notetags
 * - Changes the flat growth value per level for the enemy.
 * - Replace 'x.x' with a positive or negative value on how much to raise the
 *   parameter by for each level as a flat value.
 *
 * ---
 *
 * <Static Level Parameters>
 *
 * - Used for: Enemy Notetags
 * - Insert this notetag if you do not wish for the growth modifiers to affect
 *   the enemy and just use the database's parameters as its current parameters
 *   no matter the level.
 *
 * ---
 * 
 * === Enemy Level Skill Requirement Notetags ===
 * 
 * ---
 * 
 * <Enemy Skill id Require Level: x>
 * <Enemy Skill name Require Level: x>
 *
 * - Used for: Enemy Notetags
 * - To make actions for enemies require specific levels, use the above notetag
 *   to define what level the enemy can use the identified skill at.
 * - Replace 'id' with the ID of the skill to assign a level to.
 * - Replace 'name' with the name of the skill to assign a level to.
 * - Insert multiples of this notetag to assign levels to multiple skills.
 * 
 * ---
 *
 * === Enemy Level Change Notetags ===
 *
 * These notetags affect mid-battle level changing effects for enemies.
 *
 * ---
 *
 * <Change Enemy Level: +x>
 * <Change Enemy Level: -x>
 *
 * - Used for: Skill, Item Notetags
 * - Changes the enemy's level by 'x' positively or negatively mid-battle.
 * - This will also alter the enemy's parameters.
 * - Replace 'x' with the amount to raise/drop the level by.
 *
 * ---
 *
 * <Reset Enemy Level>
 *
 * - Used for: Skill, Item Notetags
 * - Resets any level changes made to the enemy from the start of battle.
 *
 * ---
 *
 * <Resist Level Change>
 *
 * - Used for: Enemy, State Notetags
 * - Makes the affected enemy resist level changes.
 *
 * ---
 *
 * === JavaScript Notetags: Enemy Level Change ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * affect mid-battle level changing effects for enemies.
 *
 * ---
 *
 * <JS Change Enemy Level: code>
 *
 * - Used for: Skill, Item Notetags
 * - Changes the enemy's level by a value determined by JavaScript code either
 *   positively or negatively mid-battle.
 * - This will also alter the enemy's parameters.
 * - Replace 'code' with JavaScript code to determine the amount to change the
 *   enemy's level by.
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
 * === Enemy-Related Plugin Commands ===
 * 
 * ---
 *
 * Enemy: Change Level
 * - Change target enemy(ies) level by a value.
 *
 *   Enemy Index(es):
 *   - Select which enemy(ies) to affect.
 *
 *   Level:
 *   - Changes level by this value.
 *   - You may use JavaScript code.
 *
 *   Bypass Resist?:
 *   - Bypasses <Resist Level Change> effect?
 *
 * ---
 *
 * Enemy: Reset Level
 * - Reset target enemy(ies) level to its original level.
 *
 *   Enemy Index(es):
 *   - Select which enemy(ies) to affect.
 *
 *   Bypass Resist?:
 *   - Bypasses <Resist Level Change> effect?
 *
 * ---
 *
 * Enemy: Set Level
 * - Set target enemy(ies) level to a specific value.
 *
 *   Enemy Index(es):
 *   - Select which enemy(ies) to affect.
 *
 *   Level:
 *   - Sets level to this value.
 *   - You may use JavaScript code.
 *
 *   Bypass Resist?:
 *   - Bypasses <Resist Level Change> effect?
 *
 * ---
 * 
 * === Debug-Related Plugin Commands ===
 * 
 * ---
 *
 * DEBUG: View Level Stats
 * - View the stats of specific enemies for each level.
 * - This will appear in the Debug Console.
 *
 *   Enemy Index(es):
 *   - Select which enemy(ies) to view.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These are the general settings that pertain to enemy levels, letting you
 * adjust the defaults to how some mechanics work as well as the vocabulary
 * shown for the enemy levels.
 *
 * ---
 *
 * Levels
 * 
 *   Level Type:
 *   - Choose the default level type for all enemies.
 *     - Highest Actor Level
 *     - Highest Party Level
 *     - Average Actor Level
 *     - Average Party Level
 *     - Lowest Actor Level
 *     - Lowest Party Level
 *     - Variable x
 *     - Static x
 *   - Replace 'x' with a number if present.
 * 
 *   Minimum Level:
 *   - Default minimum level for enemies.
 * 
 *   Maximum Level:
 *   - Default maximum level for enemies.
 * 
 *   Negative Variance:
 *   - Default negative level variance.
 * 
 *   Positive Variance:
 *   - Default positive level variance.
 *
 * ---
 *
 * Mechanics
 * 
 *   Preserve HP/MP Rates?:
 *   - If level changing, preserve the enemy's HP/MP rates?
 *
 * ---
 *
 * Vocabulary
 * 
 *   Show Enemy Level?:
 *   - Show enemy levels by default? Use the notetags <Show Level> and
 *     <Hide Level> to determine otherwise.
 * 
 *   Enemy Name Format:
 *   - Text format used for enemy names in battle.
 *   - %1 - Level, %2 - Enemy's Name
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Parameter Growth Settings
 * ============================================================================
 *
 * Determine how much growth for each parameter enemies gain by default. These
 * growth settings can be relative to the enemy's base value or increases at a
 * flat amount each level. The formula for each increase is the following:
 *
 *   base + (level * base * rate) + (level * flat)
 *
 * Where:
 * - 'base' is the original base value of the parameter found in the database.
 * - 'level' is the previous level of the enemy (minimum: 0).
 * - 'rate' is the rate of growth determined by notetags or Plugin Parameters.
 * - 'flat' is the flat growth value also determined by notetags/parameters.
 *
 * Build around that formula for the best results.
 *
 * ---
 *
 * MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK, EXP, Gold, Drop Rate
 * 
 *   Growth Rate:
 *   - Default rate of growth relative to parameter base value.
 * 
 *   Flat Growth:
 *   - Default flat growth amount based on level.
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
 * Version 1.04: January 1, 2021
 * * Bug Fixes!
 * ** Average Actor/Party Levels should now work properly. Fix made by Yanfly.
 * 
 * Version 1.03: November 29, 2020
 * * Feature Update!
 * ** Minimum level can no longer go under 1 for calculation purposes. Change
 *    made by Arisu. Anything below is unintended usage.
 * 
 * Version 1.02: October 25, 2020
 * * Bug Fixes!
 * ** Average Actor Level and Average Party Level will now calculate levels
 *    properly if there is only one actor in the party. Fix made by Irina.
 * 
 * Version 1.01: October 18, 2020
 * * Documentation Update!
 * ** Added notetag information for <Enemy Skill id Require Level: x> which
 *    was previously left out by accident. Update made by Yanfly.
 *
 * Version 1.00 Official Release: October 21, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EnemyLevelChange
 * @text Enemy: Change Level
 * @desc Change target enemy(ies) level by a value.
 *
 * @arg Enemies:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @min 0
 * @desc Select which enemy(ies) to affect.
 * @default ["0"]
 *
 * @arg Level:eval
 * @text Level
 * @desc Changes level by this value.
 * You may use JavaScript code.
 * @default +1
 *
 * @arg BypassResist:eval
 * @text Bypass Resist?
 * @type boolean
 * @on Bypass
 * @off Normal
 * @desc Bypasses <Resist Level Change> effect?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EnemyLevelReset
 * @text Enemy: Reset Level
 * @desc Reset target enemy(ies) level to its original level.
 *
 * @arg Enemies:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @min 0
 * @desc Select which enemy(ies) to affect.
 * @default ["0"]
 *
 * @arg BypassResist:eval
 * @text Bypass Resist?
 * @type boolean
 * @on Bypass
 * @off Normal
 * @desc Bypasses <Resist Level Change> effect?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EnemyLevelSet
 * @text Enemy: Set Level
 * @desc Set target enemy(ies) level to a specific value.
 *
 * @arg Enemies:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @min 0
 * @desc Select which enemy(ies) to affect.
 * @default ["0"]
 *
 * @arg Level:eval
 * @text Level
 * @desc Sets level to this value.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg BypassResist:eval
 * @text Bypass Resist?
 * @type boolean
 * @on Bypass
 * @off Normal
 * @desc Bypasses <Resist Level Change> effect?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DebugEnemyLevels
 * @text DEBUG: View Level Stats
 * @desc View the stats of specific enemies for each level.
 * This will appear in the Debug Console.
 *
 * @arg Enemies:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @min 0
 * @desc Select which enemy(ies) to view.
 * @default ["0"]
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
 * @param EnemyLevel
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
 * @desc General settings regarding enemy levels.
 * @default {"Levels":"","DefaultLevelType:str":"Highest Actor Level","DefaultMinLevel:num":"1","DefaultMaxLevel:num":"99","DefaultNegLevelVariance:num":"2","DefaultPositiveVariance:num":"2","Mechanics":"","PreserveRates:eval":"true","Vocabulary":"","ShowEnemyLv:eval":"true","EnemyNameFmt:str":"Lv%1 %2"}
 *
 * @param Param:struct
 * @text Parameter Growth
 * @type struct<Param>
 * @desc The default parameter growth values for Enemy Levels.
 * @default {"MaxHP":"","MaxHP_Rate:num":"0.32","MaxHP_Flat:num":"0.00","MaxMP":"","MaxMP_Rate:num":"0.16","MaxMP_Flat:num":"0.00","ATK":"","ATK_Rate:num":"0.08","ATK_Flat:num":"0.00","DEF":"","DEF_Rate:num":"0.08","DEF_Flat:num":"0.00","MAT":"","MAT_Rate:num":"0.08","MAT_Flat:num":"0.00","MDF":"","MDF_Rate:num":"0.08","MDF_Flat:num":"0.00","AGI":"","AGI_Rate:num":"0.08","AGI_Flat:num":"0.00","LUK":"","LUK_Rate:num":"0.08","LUK_Flat:num":"0.00","EXP":"","EXP_Rate:num":"0.12","EXP_Flat:num":"0.00","Gold":"","Gold_Rate:num":"0.16","Gold_Flat:num":"0.00","Drop":"","Drop_Rate:num":"0.00","Drop_Flat:num":"0.008"}
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
 * @param Levels
 *
 * @param DefaultLevelType:str
 * @text Level Type
 * @parent Levels
 * @type combo
 * @option Highest Actor Level
 * @option Highest Party Level
 * @option Average Actor Level
 * @option Average Party Level
 * @option Lowest Actor Level
 * @option Lowest Party Level
 * @option Variable x
 * @option Static x
 * @desc Choose the default level type for all enemies.
 * Replace 'x' with a number if present.
 * @default Highest Actor Level
 *
 * @param DefaultMinLevel:num
 * @text Minimum Level
 * @parent Levels
 * @desc Default minimum level for enemies.
 * @default 1
 *
 * @param DefaultMaxLevel:num
 * @text Maximum Level
 * @parent Levels
 * @desc Default maximum level for enemies.
 * @default 99
 *
 * @param DefaultNegLevelVariance:num
 * @text Negative Variance
 * @parent Levels
 * @desc Default negative level variance.
 * @default 2
 *
 * @param DefaultPositiveVariance:num
 * @text Positive Variance
 * @parent Levels
 * @desc Default positive level variance.
 * @default 2
 *
 * @param Mechanics
 *
 * @param PreserveRates:eval
 * @text Preserve HP/MP Rates?
 * @parent Mechanics
 * @type boolean
 * @on Preserve
 * @off Don't
 * @desc If level changing, preserve the enemy's HP/MP rates?
 * @default true
 *
 * @param Vocabulary
 *
 * @param ShowEnemyLv:eval
 * @text Show Enemy Level?
 * @parent Vocabulary
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show enemy levels by default? Use the notetags
 * <Show Level> and <Hide Level> to determine otherwise.
 * @default true
 *
 * @param EnemyNameFmt:str
 * @text Enemy Name Format
 * @parent Vocabulary
 * @desc Text format used for enemy names in battle.
 * %1 - Level, %2 - Enemy's Name
 * @default Lv%1 %2
 *
 */
/* ----------------------------------------------------------------------------
 * Parameter Growth Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Param:
 *
 * @param MaxHP
 *
 * @param MaxHP_Rate:num
 * @text Growth Rate
 * @parent MaxHP
 * @desc Default rate of growth relative to parameter base value.
 * @default 0.32
 *
 * @param MaxHP_Flat:num
 * @text Flat Growth
 * @parent MaxHP
 * @desc Default flat growth amount based on level.
 * @default 0.00
 *
 * @param MaxMP
 *
 * @param MaxMP_Rate:num
 * @text Growth Rate
 * @parent MaxMP
 * @desc Default rate of growth relative to parameter base value.
 * @default 0.16
 *
 * @param MaxMP_Flat:num
 * @text Flat Growth
 * @parent MaxMP
 * @desc Default flat growth amount based on level.
 * @default 0.00
 *
 * @param ATK
 *
 * @param ATK_Rate:num
 * @text Growth Rate
 * @parent ATK
 * @desc Default rate of growth relative to parameter base value.
 * @default 0.08
 *
 * @param ATK_Flat:num
 * @text Flat Growth
 * @parent ATK
 * @desc Default flat growth amount based on level.
 * @default 0.00
 *
 * @param DEF
 *
 * @param DEF_Rate:num
 * @text Growth Rate
 * @parent DEF
 * @desc Default rate of growth relative to parameter base value.
 * @default 0.08
 *
 * @param DEF_Flat:num
 * @text Flat Growth
 * @parent DEF
 * @desc Default flat growth amount based on level.
 * @default 0.00
 *
 * @param MAT
 *
 * @param MAT_Rate:num
 * @text Growth Rate
 * @parent MAT
 * @desc Default rate of growth relative to parameter base value.
 * @default 0.08
 *
 * @param MAT_Flat:num
 * @text Flat Growth
 * @parent MAT
 * @desc Default flat growth amount based on level.
 * @default 0.00
 *
 * @param MDF
 *
 * @param MDF_Rate:num
 * @text Growth Rate
 * @parent MDF
 * @desc Default rate of growth relative to parameter base value.
 * @default 0.08
 *
 * @param MDF_Flat:num
 * @text Flat Growth
 * @parent MDF
 * @desc Default flat growth amount based on level.
 * @default 0.00
 *
 * @param AGI
 *
 * @param AGI_Rate:num
 * @text Growth Rate
 * @parent AGI
 * @desc Default rate of growth relative to parameter base value.
 * @default 0.08
 *
 * @param AGI_Flat:num
 * @text Flat Growth
 * @parent AGI
 * @desc Default flat growth amount based on level.
 * @default 0.00
 *
 * @param LUK
 *
 * @param LUK_Rate:num
 * @text Growth Rate
 * @parent LUK
 * @desc Default rate of growth relative to parameter base value.
 * @default 0.08
 *
 * @param LUK_Flat:num
 * @text Flat Growth
 * @parent LUK
 * @desc Default flat growth amount based on level.
 * @default 0.00
 *
 * @param EXP
 *
 * @param EXP_Rate:num
 * @text Growth Rate
 * @parent EXP
 * @desc Default rate of growth relative to parameter base value.
 * @default 0.12
 *
 * @param EXP_Flat:num
 * @text Flat Growth
 * @parent EXP
 * @desc Default flat growth amount based on level.
 * @default 0.00
 *
 * @param Gold
 *
 * @param Gold_Rate:num
 * @text Growth Rate
 * @parent Gold
 * @desc Default rate of growth relative to parameter base value.
 * @default 0.16
 *
 * @param Gold_Flat:num
 * @text Flat Growth
 * @parent Gold
 * @desc Default flat growth amount based on level.
 * @default 0.00
 *
 * @param Drop
 *
 * @param Drop_Rate:num
 * @text Growth Rate
 * @parent Drop
 * @desc Default rate of growth relative to parameter base value.
 * @default 0.00
 *
 * @param Drop_Flat:num
 * @text Flat Growth
 * @parent Drop
 * @desc Default flat growth amount based on level.
 * @default 0.008
 *
 */
//=============================================================================

const _0x3d9d=['isPlaytest','AGI','ARRAYEVAL','createKeyJS','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','Game_Enemy_gold','672616WATSGw','Game_BattlerBase_meetsSkillConditions','Item-%1-%2','clamp','Actor-%1-%2','_enemyLevelRequired_SkillID','mhp','getLevelType','Game_Enemy_dropItemRate','createEnemyLevelParamGrowth','resetLevel','DefaultLevelType','clampLevel','Game_Action_applyItemUserEffect','424717mkhsNj','enemyLevelNameFmt','traitObjects','RegExp','EnemyLevelChange','DefaultMaxLevel','Game_Enemy_battlerName','isStaticLevelParameters','format','minLevel','version','MDF','expApplyEnemyLevel','AVERAGE\x20ACTOR\x20LEVEL','HIGHEST\x20ACTOR\x20LEVEL','_levelMin','createBaseLevel','EXP_Flat','Weapon-%1-%2','refresh','Enemy-%1-%2','VisuMZ_0_CoreEngine','Gold_Rate','members','process_VisuMZ_EnemyLevel_JS','exp','map','setLevel','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','ARRAYJSON','_enemyLevel_GrowthFlat','battleMembers','DebugEnemyLevels','image','Game_Enemy_setup','Game_Enemy_transform','toUpperCase','paramBase','Armor-%1-%2','some','MAT','gold','gainLevel','DefaultMinLevel','_level','1UeHHup','reduce','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','223738NisxEt','createEnemyLevelSkillRequirements','LUK','1AxxenF','createLevelModifiers','NUM','isShowEnemyLevel','DEF_Flat','EnemyLevel','_originalLevel','LUK_Flat','registerCommand','trim','ShowEnemyLv','round','EnemyLevelSet','EXP','includes','params','isResistLevelChange','DefaultNegLevelVariance','setMp','refreshLevelImages','ATK','return\x200','dropItemRateApplyEnemyLevel','LOWEST\x20PARTY\x20LEVEL','applyItemUserEffectEnemyLevel','defaultEnemyLevel','_levelImages','DefaultPositiveVariance','_enemyLevel_GrowthRate','maxLevel','DROP','DEF_Rate','battlerName','createLevel','length','getLevel','1SRPQEL','split','839590BDSomK','\x27s\x20Base\x20Parameters\x20for\x20Each\x20Level','General','Game_Enemy_paramBase','setupEnemyLevels','FUNC','_levelBattlerName','parse','concat','458154SBbpor','MaxMP_Flat','_enemyLevelRequired_SkillName','goldApplyEnemyLevel','level','createJS','Scene_Boot_onDatabaseLoaded','max','mpRate','setup','enemyLevel','drop','EVAL','log','setHp','ceil','match','Settings','paramBaseApplyEnemyLevel','description','MaxHP_Rate','EnemyLevelReset','push','value','DEF','PreserveRates','ARRAYSTR','createOriginalLevel','status','process_VisuMZ_EnemyLevel_Notetags','prototype','Param','GOLD','LOWEST\x20ACTOR\x20LEVEL','dropItemRate','EXP_Rate','meetsSkillConditionsEnemyLevel','jsLevel','isEnemy','Level','onDatabaseLoaded','name','remove','ARRAYSTRUCT','JSON','recoverAll','createLevelImages','inBattle','call','mmp','AVERAGE\x20PARTY\x20LEVEL','exit','meetsSkillConditions','enemy','Class-%1-%2','hasSetEnemyLevels','sort','292163IAtSDM','createLevelBonus','Enemies','ARRAYFUNC','MAXMP','990989OLpCpI','_levelMax','BypassResist','transform','parseLevelImageNotetags','note','indexOf','Drop_Flat','hpRate','ConvertParams','floor','min','Game_Enemy_name','randomInt','MaxHP_Flat','filter'];const _0x8c8b=function(_0xdaab3c,_0x5e602a){_0xdaab3c=_0xdaab3c-0xfe;let _0x3d9da1=_0x3d9d[_0xdaab3c];return _0x3d9da1;};const _0x583fa4=_0x8c8b;(function(_0x44efe8,_0x125fc1){const _0x65b0f8=_0x8c8b;while(!![]){try{const _0x159677=parseInt(_0x65b0f8(0x1bf))+parseInt(_0x65b0f8(0x199))*parseInt(_0x65b0f8(0x142))+parseInt(_0x65b0f8(0x1bd))*-parseInt(_0x65b0f8(0x13d))+-parseInt(_0x65b0f8(0x166))*parseInt(_0x65b0f8(0x193))+-parseInt(_0x65b0f8(0x196))+parseInt(_0x65b0f8(0x104))+-parseInt(_0x65b0f8(0x158));if(_0x159677===_0x125fc1)break;else _0x44efe8['push'](_0x44efe8['shift']());}catch(_0x25c248){_0x44efe8['push'](_0x44efe8['shift']());}}}(_0x3d9d,0xa4eab));var label=_0x583fa4(0x19e),tier=tier||0x0,dependencies=[_0x583fa4(0x17b)],pluginData=$plugins['filter'](function(_0x375a0f){const _0x1a0f3a=_0x583fa4;return _0x375a0f[_0x1a0f3a(0x120)]&&_0x375a0f['description'][_0x1a0f3a(0x1a7)]('['+label+']');})[0x0];VisuMZ[label][_0x583fa4(0x115)]=VisuMZ[label][_0x583fa4(0x115)]||{},VisuMZ[_0x583fa4(0x14b)]=function(_0x2cd257,_0x399d6a){const _0x257e70=_0x583fa4;for(const _0xfd9cd in _0x399d6a){if(_0xfd9cd[_0x257e70(0x114)](/(.*):(.*)/i)){const _0x305e60=String(RegExp['$1']),_0x4e487b=String(RegExp['$2'])['toUpperCase']()[_0x257e70(0x1a2)]();let _0x45c884,_0x49c99d,_0x55d781;switch(_0x4e487b){case _0x257e70(0x19b):_0x45c884=_0x399d6a[_0xfd9cd]!==''?Number(_0x399d6a[_0xfd9cd]):0x0;break;case'ARRAYNUM':_0x49c99d=_0x399d6a[_0xfd9cd]!==''?JSON[_0x257e70(0x102)](_0x399d6a[_0xfd9cd]):[],_0x45c884=_0x49c99d[_0x257e70(0x180)](_0x57ea42=>Number(_0x57ea42));break;case _0x257e70(0x110):_0x45c884=_0x399d6a[_0xfd9cd]!==''?eval(_0x399d6a[_0xfd9cd]):null;break;case _0x257e70(0x154):_0x49c99d=_0x399d6a[_0xfd9cd]!==''?JSON['parse'](_0x399d6a[_0xfd9cd]):[],_0x45c884=_0x49c99d['map'](_0xb942d1=>eval(_0xb942d1));break;case _0x257e70(0x130):_0x45c884=_0x399d6a[_0xfd9cd]!==''?JSON[_0x257e70(0x102)](_0x399d6a[_0xfd9cd]):'';break;case _0x257e70(0x183):_0x49c99d=_0x399d6a[_0xfd9cd]!==''?JSON[_0x257e70(0x102)](_0x399d6a[_0xfd9cd]):[],_0x45c884=_0x49c99d['map'](_0x576255=>JSON['parse'](_0x576255));break;case _0x257e70(0x100):_0x45c884=_0x399d6a[_0xfd9cd]!==''?new Function(JSON[_0x257e70(0x102)](_0x399d6a[_0xfd9cd])):new Function(_0x257e70(0x1ae));break;case _0x257e70(0x140):_0x49c99d=_0x399d6a[_0xfd9cd]!==''?JSON[_0x257e70(0x102)](_0x399d6a[_0xfd9cd]):[],_0x45c884=_0x49c99d[_0x257e70(0x180)](_0x109ca5=>new Function(JSON['parse'](_0x109ca5)));break;case'STR':_0x45c884=_0x399d6a[_0xfd9cd]!==''?String(_0x399d6a[_0xfd9cd]):'';break;case _0x257e70(0x11e):_0x49c99d=_0x399d6a[_0xfd9cd]!==''?JSON[_0x257e70(0x102)](_0x399d6a[_0xfd9cd]):[],_0x45c884=_0x49c99d[_0x257e70(0x180)](_0x194bb0=>String(_0x194bb0));break;case'STRUCT':_0x55d781=_0x399d6a[_0xfd9cd]!==''?JSON[_0x257e70(0x102)](_0x399d6a[_0xfd9cd]):{},_0x45c884=VisuMZ[_0x257e70(0x14b)]({},_0x55d781);break;case _0x257e70(0x12f):_0x49c99d=_0x399d6a[_0xfd9cd]!==''?JSON['parse'](_0x399d6a[_0xfd9cd]):[],_0x45c884=_0x49c99d[_0x257e70(0x180)](_0x1b18de=>VisuMZ['ConvertParams']({},JSON[_0x257e70(0x102)](_0x1b18de)));break;default:continue;}_0x2cd257[_0x305e60]=_0x45c884;}}return _0x2cd257;},(_0xdb1210=>{const _0x35e05d=_0x583fa4,_0x100486=_0xdb1210[_0x35e05d(0x12d)];for(const _0x1d3170 of dependencies){if(!Imported[_0x1d3170]){alert(_0x35e05d(0x195)['format'](_0x100486,_0x1d3170)),SceneManager[_0x35e05d(0x137)]();break;}}const _0x11293e=_0xdb1210[_0x35e05d(0x117)];if(_0x11293e['match'](/\[Version[ ](.*?)\]/i)){const _0x27c41f=Number(RegExp['$1']);_0x27c41f!==VisuMZ[label][_0x35e05d(0x170)]&&(alert(_0x35e05d(0x182)[_0x35e05d(0x16e)](_0x100486,_0x27c41f)),SceneManager[_0x35e05d(0x137)]());}if(_0x11293e['match'](/\[Tier[ ](\d+)\]/i)){const _0x146a0f=Number(RegExp['$1']);_0x146a0f<tier?(alert(_0x35e05d(0x156)[_0x35e05d(0x16e)](_0x100486,_0x146a0f,tier)),SceneManager[_0x35e05d(0x137)]()):tier=Math[_0x35e05d(0x10b)](_0x146a0f,tier);}VisuMZ[_0x35e05d(0x14b)](VisuMZ[label][_0x35e05d(0x115)],_0xdb1210['parameters']);})(pluginData),PluginManager[_0x583fa4(0x1a1)](pluginData[_0x583fa4(0x12d)],_0x583fa4(0x16a),_0x544081=>{const _0xe80019=_0x583fa4;if(!$gameParty[_0xe80019(0x133)]())return;VisuMZ['ConvertParams'](_0x544081,_0x544081);const _0x50737e=_0x544081[_0xe80019(0x13f)][_0xe80019(0x180)](_0x582a40=>$gameTroop[_0xe80019(0x17d)]()[_0x582a40])[_0xe80019(0x12e)](null),_0x129e0c=_0x544081[_0xe80019(0x12b)],_0x2f46ea=_0x544081['BypassResist'];for(const _0x38ee55 of _0x50737e){if(!_0x38ee55)continue;if(!_0x2f46ea&&_0x38ee55[_0xe80019(0x1a9)]())continue;_0x38ee55[_0xe80019(0x190)](_0x129e0c);}}),PluginManager[_0x583fa4(0x1a1)](pluginData['name'],_0x583fa4(0x119),_0x52cab0=>{const _0x5720c0=_0x583fa4;if(!$gameParty[_0x5720c0(0x133)]())return;VisuMZ[_0x5720c0(0x14b)](_0x52cab0,_0x52cab0);const _0x5a3586=_0x52cab0['Enemies'][_0x5720c0(0x180)](_0x448375=>$gameTroop[_0x5720c0(0x17d)]()[_0x448375])[_0x5720c0(0x12e)](null),_0x5e5e20=_0x52cab0['BypassResist'];for(const _0x4e2b4b of _0x5a3586){if(!_0x4e2b4b)continue;if(!_0x5e5e20&&_0x4e2b4b[_0x5720c0(0x1a9)]())continue;_0x4e2b4b[_0x5720c0(0x162)]();}}),PluginManager[_0x583fa4(0x1a1)](pluginData[_0x583fa4(0x12d)],_0x583fa4(0x1a5),_0x4ccd0b=>{const _0x5e4639=_0x583fa4;if(!$gameParty[_0x5e4639(0x133)]())return;VisuMZ[_0x5e4639(0x14b)](_0x4ccd0b,_0x4ccd0b);const _0x52eb64=_0x4ccd0b['Enemies']['map'](_0xd589db=>$gameTroop['members']()[_0xd589db])[_0x5e4639(0x12e)](null),_0x19a347=_0x4ccd0b[_0x5e4639(0x12b)],_0x443e59=_0x4ccd0b[_0x5e4639(0x144)];for(const _0x14824d of _0x52eb64){if(!_0x14824d)continue;if(!_0x443e59&&_0x14824d[_0x5e4639(0x1a9)]())continue;_0x14824d[_0x5e4639(0x181)](_0x19a347);}}),PluginManager[_0x583fa4(0x1a1)](pluginData['name'],_0x583fa4(0x186),_0x49835c=>{const _0x1583fe=_0x583fa4;if(!$gameParty[_0x1583fe(0x133)]())return;if(!$gameTemp['isPlaytest']())return;VisuMZ['ConvertParams'](_0x49835c,_0x49835c);const _0x26d6fd=_0x49835c[_0x1583fe(0x13f)][_0x1583fe(0x180)](_0x19777b=>$gameTroop[_0x1583fe(0x17d)]()[_0x19777b])['remove'](null);for(const _0x58bbba of _0x26d6fd){if(!_0x58bbba)continue;const _0x476c80=[];for(let _0x34774e=_0x58bbba[_0x1583fe(0x16f)]();_0x34774e<=_0x58bbba[_0x1583fe(0x1b6)]();_0x34774e++){const _0x555ad0=_0x58bbba[_0x1583fe(0x139)](),_0x4f69b7=_0x34774e-0x1,_0x2ae5ff={'MaxHP':Math[_0x1583fe(0x1a4)](_0x58bbba[_0x1583fe(0x116)](0x0,_0x4f69b7,_0x555ad0['params'][0x0])),'MaxMP':Math[_0x1583fe(0x1a4)](_0x58bbba[_0x1583fe(0x116)](0x1,_0x4f69b7,_0x555ad0[_0x1583fe(0x1a8)][0x1])),'ATK':Math['round'](_0x58bbba[_0x1583fe(0x116)](0x2,_0x4f69b7,_0x555ad0['params'][0x2])),'DEF':Math[_0x1583fe(0x1a4)](_0x58bbba[_0x1583fe(0x116)](0x3,_0x4f69b7,_0x555ad0['params'][0x3])),'MAT':Math[_0x1583fe(0x1a4)](_0x58bbba[_0x1583fe(0x116)](0x4,_0x4f69b7,_0x555ad0[_0x1583fe(0x1a8)][0x4])),'MDF':Math[_0x1583fe(0x1a4)](_0x58bbba[_0x1583fe(0x116)](0x5,_0x4f69b7,_0x555ad0[_0x1583fe(0x1a8)][0x5])),'AGI':Math['round'](_0x58bbba[_0x1583fe(0x116)](0x6,_0x4f69b7,_0x555ad0[_0x1583fe(0x1a8)][0x6])),'LUK':Math[_0x1583fe(0x1a4)](_0x58bbba[_0x1583fe(0x116)](0x7,_0x4f69b7,_0x555ad0[_0x1583fe(0x1a8)][0x7])),'Exp':Math[_0x1583fe(0x1a4)](_0x58bbba[_0x1583fe(0x172)](_0x555ad0[_0x1583fe(0x17f)],_0x4f69b7)),'Gold':Math[_0x1583fe(0x1a4)](_0x58bbba[_0x1583fe(0x107)](_0x555ad0[_0x1583fe(0x18f)],_0x4f69b7)),'Drop':Math[_0x1583fe(0x1a4)](_0x58bbba['dropItemRateApplyEnemyLevel'](0x1,_0x4f69b7)*0x64)+'%'};_0x476c80[_0x34774e]=_0x2ae5ff;}console[_0x1583fe(0x111)](_0x58bbba[_0x1583fe(0x12d)]()+_0x1583fe(0x1c0)),console['table'](_0x476c80);}}),VisuMZ[_0x583fa4(0x19e)][_0x583fa4(0x10a)]=Scene_Boot[_0x583fa4(0x122)]['onDatabaseLoaded'],Scene_Boot[_0x583fa4(0x122)][_0x583fa4(0x12c)]=function(){const _0x1b941c=_0x583fa4;VisuMZ['EnemyLevel'][_0x1b941c(0x10a)][_0x1b941c(0x134)](this),this['process_VisuMZ_EnemyLevel_Notetags']();},Scene_Boot[_0x583fa4(0x122)][_0x583fa4(0x121)]=function(){const _0x553367=_0x583fa4;this[_0x553367(0x17e)]();},VisuMZ['EnemyLevel']['RegExp']={'Type1':/<(?:NOTETAG):[ ](\d+)([%％])>/i,'Type2':/<(?:NOTETAG):[ ]([\+\-]\d+)>/i,'Type3':/<(?:NOTETAG):[ ](.*)>/i,'Type3nonGreedy':/<(?:NOTETAG):[ ](.*?)>/i,'Type4':/<(?:NOTETAG):[ ]*(\d+(?:\s*,\s*\d+)*)>/i,'Type5':/<(?:NOTETAG):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i,'Type6':/<(?:NOTETAG)>/i,'Type7':/<\/(?:NOTETAG)>/i,'Type8':/<(?:NOTETAG)>\s*([\s\S]*)\s*<\/(?:NOTETAG)>/i,'jsLevel':/<JS LEVEL: (.*)>/i},VisuMZ['EnemyLevel']['JS']={},Scene_Boot[_0x583fa4(0x122)]['process_VisuMZ_EnemyLevel_JS']=function(){const _0x41ca61=_0x583fa4,_0x2ea80d=$dataActors[_0x41ca61(0x103)]($dataClasses,$dataSkills,$dataItems,$dataWeapons,$dataArmors,$dataEnemies,$dataStates);for(const _0x517cdc of _0x2ea80d){if(!_0x517cdc)continue;const _0x305a72=_0x41ca61(0x129),_0x258607=VisuMZ[_0x41ca61(0x19e)][_0x41ca61(0x169)]['jsLevel'];VisuMZ[_0x41ca61(0x19e)][_0x41ca61(0x109)](_0x517cdc,_0x305a72,_0x258607);}},VisuMZ['EnemyLevel'][_0x583fa4(0x109)]=function(_0x5ddb3e,_0x512285,_0x564e90){const _0x4b11d7=_0x583fa4,_0x344887=_0x5ddb3e[_0x4b11d7(0x147)];if(_0x344887[_0x4b11d7(0x114)](_0x564e90)){const _0x2427dd=String(RegExp['$1']),_0x55ebfd='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20arguments[1];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20value\x20=\x201;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value\x20=\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20Value\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20value;\x0a\x20\x20\x20\x20\x20\x20\x20\x20'['format'](_0x2427dd),_0x355ca6=VisuMZ[_0x4b11d7(0x19e)]['createKeyJS'](_0x5ddb3e,_0x512285);VisuMZ[_0x4b11d7(0x19e)]['JS'][_0x355ca6]=new Function(_0x55ebfd);}},VisuMZ[_0x583fa4(0x19e)][_0x583fa4(0x155)]=function(_0x3b5b4b,_0x591b66){const _0x5a1fb7=_0x583fa4;let _0x185ee5='';if($dataActors[_0x5a1fb7(0x1a7)](_0x3b5b4b))_0x185ee5=_0x5a1fb7(0x15c)[_0x5a1fb7(0x16e)](_0x3b5b4b['id'],_0x591b66);if($dataClasses[_0x5a1fb7(0x1a7)](_0x3b5b4b))_0x185ee5=_0x5a1fb7(0x13a)[_0x5a1fb7(0x16e)](_0x3b5b4b['id'],_0x591b66);if($dataSkills[_0x5a1fb7(0x1a7)](_0x3b5b4b))_0x185ee5='Skill-%1-%2'[_0x5a1fb7(0x16e)](_0x3b5b4b['id'],_0x591b66);if($dataItems['includes'](_0x3b5b4b))_0x185ee5=_0x5a1fb7(0x15a)[_0x5a1fb7(0x16e)](_0x3b5b4b['id'],_0x591b66);if($dataWeapons[_0x5a1fb7(0x1a7)](_0x3b5b4b))_0x185ee5=_0x5a1fb7(0x178)[_0x5a1fb7(0x16e)](_0x3b5b4b['id'],_0x591b66);if($dataArmors[_0x5a1fb7(0x1a7)](_0x3b5b4b))_0x185ee5=_0x5a1fb7(0x18c)[_0x5a1fb7(0x16e)](_0x3b5b4b['id'],_0x591b66);if($dataEnemies[_0x5a1fb7(0x1a7)](_0x3b5b4b))_0x185ee5=_0x5a1fb7(0x17a)[_0x5a1fb7(0x16e)](_0x3b5b4b['id'],_0x591b66);if($dataStates[_0x5a1fb7(0x1a7)](_0x3b5b4b))_0x185ee5='State-%1-%2'[_0x5a1fb7(0x16e)](_0x3b5b4b['id'],_0x591b66);return _0x185ee5;},TextManager[_0x583fa4(0x167)]=VisuMZ['EnemyLevel'][_0x583fa4(0x115)][_0x583fa4(0x1c1)]['EnemyNameFmt'],VisuMZ[_0x583fa4(0x19e)]['Game_Action_applyItemUserEffect']=Game_Action[_0x583fa4(0x122)]['applyItemUserEffect'],Game_Action['prototype']['applyItemUserEffect']=function(_0x272238){const _0x55ab10=_0x583fa4;VisuMZ[_0x55ab10(0x19e)][_0x55ab10(0x165)]['call'](this,_0x272238),this[_0x55ab10(0x1b1)](_0x272238);},Game_Action['prototype']['applyItemUserEffectEnemyLevel']=function(_0x430cf2){const _0x5c87c9=_0x583fa4;if(!_0x430cf2)return;if(!_0x430cf2[_0x5c87c9(0x12a)]())return;if(_0x430cf2[_0x5c87c9(0x1a9)]())return;const _0x1d2142=this['item']()[_0x5c87c9(0x147)];if(_0x1d2142['match'](/<CHANGE ENEMY LEVEL: ([\+\-]\d+)>/i))_0x430cf2[_0x5c87c9(0x190)](Number(RegExp['$1']));else{if(_0x1d2142['match'](/<JS CHANGE ENEMY LEVEL: (.*)>/i))try{_0x430cf2['gainLevel'](eval(RegExp['$1'])||0x0);}catch(_0x55f40c){if($gameTemp[_0x5c87c9(0x152)]())console[_0x5c87c9(0x111)](_0x55f40c);}}_0x1d2142[_0x5c87c9(0x114)](/<RESET ENEMY LEVEL>/i)&&_0x430cf2[_0x5c87c9(0x162)]();},VisuMZ['EnemyLevel'][_0x583fa4(0x159)]=Game_BattlerBase[_0x583fa4(0x122)][_0x583fa4(0x138)],Game_BattlerBase[_0x583fa4(0x122)][_0x583fa4(0x138)]=function(_0x2eb6a0){const _0x193acd=_0x583fa4;return this[_0x193acd(0x128)](_0x2eb6a0)&&VisuMZ['EnemyLevel'][_0x193acd(0x159)]['call'](this,_0x2eb6a0);},Game_BattlerBase[_0x583fa4(0x122)]['meetsSkillConditionsEnemyLevel']=function(_0x5a4183){return!![];},Object['defineProperty'](Game_Enemy[_0x583fa4(0x122)],_0x583fa4(0x108),{'get':function(){const _0x2714fb=_0x583fa4;return this[_0x2714fb(0x1bc)]();},'configurable':!![]}),Game_Enemy[_0x583fa4(0x122)][_0x583fa4(0x1bc)]=function(){const _0xd2ac6e=_0x583fa4;return this[_0xd2ac6e(0x192)]=this[_0xd2ac6e(0x192)]||this[_0xd2ac6e(0x1ba)](),this['clampLevel']();},VisuMZ['EnemyLevel'][_0x583fa4(0x188)]=Game_Enemy[_0x583fa4(0x122)][_0x583fa4(0x10d)],Game_Enemy['prototype'][_0x583fa4(0x10d)]=function(_0x5d3ce6,_0x3fa303,_0x1e911d){const _0x48c451=_0x583fa4;VisuMZ[_0x48c451(0x19e)][_0x48c451(0x188)][_0x48c451(0x134)](this,_0x5d3ce6,_0x3fa303,_0x1e911d),this[_0x48c451(0xff)]();},Game_Enemy['prototype']['setupEnemyLevels']=function(){const _0x158d7a=_0x583fa4;this[_0x158d7a(0x1ba)](),this[_0x158d7a(0x132)](),this['createEnemyLevelParamGrowth'](![]),this['createEnemyLevelSkillRequirements'](![]),this[_0x158d7a(0x179)](),this[_0x158d7a(0x131)]();},Game_Enemy[_0x583fa4(0x122)][_0x583fa4(0x1ba)]=function(){const _0x1ab973=_0x583fa4;this[_0x1ab973(0x176)](),this[_0x1ab973(0x13e)](),this[_0x1ab973(0x19a)](),this[_0x1ab973(0x11f)]();},Game_Enemy[_0x583fa4(0x122)][_0x583fa4(0x176)]=function(){const _0x4aa5e8=_0x583fa4,_0x40f0b2=this[_0x4aa5e8(0x139)]()[_0x4aa5e8(0x147)];this[_0x4aa5e8(0x192)]=this['defaultEnemyLevel']();const _0x418260=VisuMZ[_0x4aa5e8(0x19e)][_0x4aa5e8(0x155)](this[_0x4aa5e8(0x139)](),_0x4aa5e8(0x129));if(_0x40f0b2[_0x4aa5e8(0x114)](/<LEVEL: (\d+)>/i))this[_0x4aa5e8(0x192)]=Number(RegExp['$1'])||0x1;else{if(_0x40f0b2[_0x4aa5e8(0x114)](/<LEVEL: (\d+) TO (\d+)>/i)){const _0x31bbe4=Number(RegExp['$1']),_0x4b634b=Number(RegExp['$2']),_0x5d809a=Math['min'](_0x31bbe4,_0x4b634b),_0x218859=Math[_0x4aa5e8(0x10b)](_0x31bbe4,_0x4b634b);this[_0x4aa5e8(0x192)]=Math[_0x4aa5e8(0x14c)](_0x5d809a+Math[_0x4aa5e8(0x14f)](_0x218859-_0x5d809a+0x1));}else{if(_0x40f0b2[_0x4aa5e8(0x114)](/LEVEL VARIABLE: (\d+)/i))this[_0x4aa5e8(0x192)]=$gameVariables[_0x4aa5e8(0x11b)](Number(RegExp['$1'])||0x1);else{if(_0x40f0b2[_0x4aa5e8(0x114)](/<LEVEL: (.*)>/i)){const _0x597e81=String(RegExp['$1'])[_0x4aa5e8(0x18a)]()[_0x4aa5e8(0x1a2)]();this[_0x4aa5e8(0x192)]=$gameParty[_0x4aa5e8(0x15f)](_0x597e81)||0x1;}else{if(VisuMZ[_0x4aa5e8(0x19e)]['JS'][_0x418260])this[_0x4aa5e8(0x192)]=Math[_0x4aa5e8(0x14c)](VisuMZ[_0x4aa5e8(0x19e)]['JS'][_0x418260][_0x4aa5e8(0x134)](this,this,this))||0x1;else $gameMap&&$gameMap[_0x4aa5e8(0x13b)]()&&(this[_0x4aa5e8(0x192)]=$gameMap[_0x4aa5e8(0x10e)]());}}}}},Game_Enemy[_0x583fa4(0x122)][_0x583fa4(0x1b2)]=function(){const _0x480551=_0x583fa4,_0x5545e4=VisuMZ[_0x480551(0x19e)][_0x480551(0x115)][_0x480551(0x1c1)][_0x480551(0x163)]['toUpperCase']()[_0x480551(0x1a2)]();if(_0x5545e4[_0x480551(0x114)](/STATIC (\d+)/i))return Number(RegExp['$1'])||0x1;else{if(_0x5545e4[_0x480551(0x114)](/VARIABLE (\d+)/i))return $gameVariables[_0x480551(0x11b)](Number(RegExp['$1'])||0x1);else return _0x5545e4[_0x480551(0x114)](/(ACTOR|PARTY) LEVEL/i)?$gameParty[_0x480551(0x15f)](_0x5545e4):0x1;}},Game_Enemy[_0x583fa4(0x122)][_0x583fa4(0x13e)]=function(){const _0x56fe1e=_0x583fa4,_0xa80465=this[_0x56fe1e(0x139)]()[_0x56fe1e(0x147)];if(_0xa80465[_0x56fe1e(0x114)](/<LEVEL BONUS: ([\+\-]\d+)>/i))this[_0x56fe1e(0x192)]+=Number(RegExp['$1']);else{if(_0xa80465[_0x56fe1e(0x114)](/<JS LEVEL BONUS: (.*)>/i))try{this[_0x56fe1e(0x192)]+=Math[_0x56fe1e(0x14c)](Number(eval(RegExp['$1'])||0x0));}catch(_0x5cb8bd){if($gameTemp[_0x56fe1e(0x152)]())console[_0x56fe1e(0x111)](_0x5cb8bd);}}},Game_Enemy[_0x583fa4(0x122)]['createLevelModifiers']=function(){const _0x5c6677=_0x583fa4;let _0x4bbbbe=VisuMZ[_0x5c6677(0x19e)][_0x5c6677(0x115)][_0x5c6677(0x1c1)][_0x5c6677(0x1aa)]*-0x1,_0x13a541=VisuMZ['EnemyLevel']['Settings']['General'][_0x5c6677(0x1b4)];const _0x338f0d=this[_0x5c6677(0x139)]()[_0x5c6677(0x147)];if(_0x338f0d[_0x5c6677(0x114)](/<LEVEL VARIANCE: (\d+)>/i))_0x4bbbbe=-0x1*Number(RegExp['$1']),_0x13a541=Number(RegExp['$1']);else{if(_0x338f0d[_0x5c6677(0x114)](/<JS LEVEL VARIANCE: (.*)>/i)){let _0x428041=0x0;try{_0x428041=Math[_0x5c6677(0x14c)](eval(RegExp['$1'])||0x0);}catch(_0x33df6f){if($gameTemp[_0x5c6677(0x152)]())console[_0x5c6677(0x111)](_0x33df6f);}_0x4bbbbe=-0x1*_0x428041,_0x13a541=_0x428041;}}if(_0x338f0d[_0x5c6677(0x114)](/<NEGATIVE LEVEL VARIANCE: (\d+)>/i))_0x4bbbbe=-0x1*Number(RegExp['$1']);else{if(_0x338f0d[_0x5c6677(0x114)](/<JS NEGATIVE LEVEL VARIANCE: (.*)>/i))try{_0x4bbbbe=-0x1*Math['floor'](eval(RegExp['$1'])||0x0);}catch(_0x517f7c){if($gameTemp[_0x5c6677(0x152)]())console['log'](_0x517f7c);}}if(_0x338f0d[_0x5c6677(0x114)](/<POSITIVE LEVEL VARIANCE: (\d+)>/i))_0x13a541=Number(RegExp['$1']);else{if(_0x338f0d['match'](/<JS POSITIVE LEVEL VARIANCE: (.*)>/i))try{_0x13a541=Math[_0x5c6677(0x14c)](eval(RegExp['$1'])||0x0);}catch(_0x3fec3b){if($gameTemp[_0x5c6677(0x152)]())console[_0x5c6677(0x111)](_0x3fec3b);}}if(_0x4bbbbe>_0x13a541)_0x13a541=_0x4bbbbe;this['_level']+=Math['floor'](_0x4bbbbe+Math[_0x5c6677(0x14f)](_0x13a541-_0x4bbbbe+0x1));},Game_Enemy['prototype'][_0x583fa4(0x11f)]=function(){const _0x448cab=_0x583fa4;this[_0x448cab(0x19f)]=this[_0x448cab(0x192)];},Game_Enemy[_0x583fa4(0x122)]['resetLevel']=function(){const _0x510fea=_0x583fa4;this[_0x510fea(0x181)](this['_originalLevel']);},Game_Enemy[_0x583fa4(0x122)][_0x583fa4(0x164)]=function(){const _0x1eb25d=_0x583fa4;if(this[_0x1eb25d(0x192)]===undefined)this[_0x1eb25d(0x1ba)]();return this['_level']=this[_0x1eb25d(0x192)][_0x1eb25d(0x15b)](this[_0x1eb25d(0x16f)](),this['maxLevel']()),this[_0x1eb25d(0x192)];},Game_Enemy[_0x583fa4(0x122)]['minLevel']=function(){const _0x139e20=_0x583fa4;if(this[_0x139e20(0x175)]!==undefined)return this[_0x139e20(0x175)];const _0x2ebb75=this[_0x139e20(0x139)]()[_0x139e20(0x147)],_0x83cdde=this;this[_0x139e20(0x175)]=VisuMZ['EnemyLevel'][_0x139e20(0x115)][_0x139e20(0x1c1)][_0x139e20(0x191)];if(_0x2ebb75[_0x139e20(0x114)](/<MINIMUM LEVEL: (\d+)>/i))this['_levelMin']=Number(RegExp['$1'])||0x1;else{if(_0x2ebb75[_0x139e20(0x114)](/<JS MINIMUM LEVEL: (.*)>/i))try{this[_0x139e20(0x175)]=Math[_0x139e20(0x14c)](eval(RegExp['$1'])||0x1);}catch(_0x2311d6){if($gameTemp[_0x139e20(0x152)]())console['log'](_0x2311d6);}}return this[_0x139e20(0x175)]=Math['max'](0x1,this['_levelMin']),this[_0x139e20(0x175)];},Game_Enemy[_0x583fa4(0x122)][_0x583fa4(0x1b6)]=function(){const _0x4feadf=_0x583fa4;if(this[_0x4feadf(0x143)]!==undefined)return this[_0x4feadf(0x143)];const _0x36570d=this[_0x4feadf(0x139)]()[_0x4feadf(0x147)],_0x59523c=this;this['_levelMax']=VisuMZ[_0x4feadf(0x19e)][_0x4feadf(0x115)][_0x4feadf(0x1c1)][_0x4feadf(0x16b)];if(_0x36570d[_0x4feadf(0x114)](/<MAXIMUM LEVEL: (\d+)>/i))this[_0x4feadf(0x143)]=Number(RegExp['$1'])||0x1;else{if(_0x36570d[_0x4feadf(0x114)](/<JS MAXIMUM LEVEL: (.*)>/i))try{this[_0x4feadf(0x143)]=Math[_0x4feadf(0x14c)](eval(RegExp['$1'])||0x1);}catch(_0x3658a6){if($gameTemp[_0x4feadf(0x152)]())console['log'](_0x3658a6);}}return this['_levelMax'];},Game_Enemy[_0x583fa4(0x122)][_0x583fa4(0x181)]=function(_0x31bf83){const _0x50626c=_0x583fa4;if(this[_0x50626c(0x192)]===undefined)this[_0x50626c(0x1ba)]();const _0x290d9c=this[_0x50626c(0x14a)](),_0x370302=this[_0x50626c(0x10c)]();this['_level']=_0x31bf83,this[_0x50626c(0x164)](),this[_0x50626c(0x1ac)](),VisuMZ['EnemyLevel']['Settings']['General'][_0x50626c(0x11d)]?(this[_0x50626c(0x112)](Math['ceil'](this[_0x50626c(0x15e)]*_0x290d9c)),this[_0x50626c(0x1ab)](Math[_0x50626c(0x113)](this[_0x50626c(0x135)]*_0x370302))):this[_0x50626c(0x179)]();},Game_Enemy[_0x583fa4(0x122)][_0x583fa4(0x190)]=function(_0x226fe8){const _0x514beb=_0x583fa4;if(this[_0x514beb(0x192)]===undefined)this['createLevel']();this[_0x514beb(0x181)](this['_level']+_0x226fe8);},Game_Enemy['prototype'][_0x583fa4(0x1a9)]=function(){const _0x11278d=_0x583fa4;return this[_0x11278d(0x168)]()[_0x11278d(0x18d)](_0x49fe5e=>_0x49fe5e&&_0x49fe5e[_0x11278d(0x147)]['match'](/<RESIST LEVEL CHANGE>/i));},VisuMZ[_0x583fa4(0x19e)][_0x583fa4(0x14e)]=Game_Enemy['prototype']['name'],Game_Enemy[_0x583fa4(0x122)][_0x583fa4(0x12d)]=function(){const _0x16d17c=_0x583fa4,_0x5310d2=VisuMZ['EnemyLevel'][_0x16d17c(0x14e)][_0x16d17c(0x134)](this);if(!this[_0x16d17c(0x19c)]())return _0x5310d2;return TextManager['enemyLevelNameFmt']['format'](this[_0x16d17c(0x108)],_0x5310d2);},Game_Enemy['prototype'][_0x583fa4(0x19c)]=function(){const _0xd2417d=_0x583fa4,_0x5a450f=this[_0xd2417d(0x139)]()[_0xd2417d(0x147)];if(_0x5a450f[_0xd2417d(0x114)](/<SHOW LEVEL>/i))return!![];else return _0x5a450f[_0xd2417d(0x114)](/<HIDE LEVEL>/i)?![]:VisuMZ[_0xd2417d(0x19e)][_0xd2417d(0x115)]['General'][_0xd2417d(0x1a3)];},Game_Enemy[_0x583fa4(0x122)][_0x583fa4(0x16d)]=function(){const _0x4e4455=_0x583fa4;return this['enemy']()&&this['enemy']()[_0x4e4455(0x147)][_0x4e4455(0x114)](/<STATIC LEVEL PARAMETERS>/i);},VisuMZ[_0x583fa4(0x19e)][_0x583fa4(0xfe)]=Game_Enemy[_0x583fa4(0x122)][_0x583fa4(0x18b)],Game_Enemy[_0x583fa4(0x122)][_0x583fa4(0x18b)]=function(_0x4dc6ed){const _0x476b1e=_0x583fa4,_0x2024d2=VisuMZ[_0x476b1e(0x19e)][_0x476b1e(0xfe)][_0x476b1e(0x134)](this,_0x4dc6ed),_0x4055b3=this['otherParamBaseModifiers'](),_0x1b11cd=this[_0x476b1e(0x108)]-0x1;return this[_0x476b1e(0x116)](_0x4dc6ed,_0x1b11cd,_0x2024d2+_0x4055b3);},Game_Enemy[_0x583fa4(0x122)]['otherParamBaseModifiers']=function(_0x135580){return 0x0;},Game_Enemy[_0x583fa4(0x122)][_0x583fa4(0x132)]=function(){const _0x25a3a5=_0x583fa4;this[_0x25a3a5(0x1b3)]=[{'level':0x1,'image':this[_0x25a3a5(0x139)]()['battlerName']}],this['parseLevelImageNotetags'](),this[_0x25a3a5(0x1b3)][_0x25a3a5(0x13c)]((_0x1a02a5,_0x29d983)=>_0x1a02a5[_0x25a3a5(0x108)]-_0x29d983[_0x25a3a5(0x108)]),this[_0x25a3a5(0x1ac)]();},Game_Enemy['prototype'][_0x583fa4(0x146)]=function(){const _0x132360=_0x583fa4,_0xb56c9f=this['enemy']()[_0x132360(0x147)],_0x355dc8=_0xb56c9f[_0x132360(0x114)](/<LEVEL[ ](\d+)[ ]IMAGE:[ ](.*)>/gi);if(_0x355dc8)for(const _0x18ebbe of _0x355dc8){if(!_0x18ebbe)continue;_0x18ebbe[_0x132360(0x114)](/<LEVEL[ ](\d+)[ ]IMAGE:[ ](.*)>/i);const _0x565247=Number(RegExp['$1'])||0x1,_0x88d4ac=String(RegExp['$2']);this[_0x132360(0x1b3)]['push']({'level':_0x565247,'image':_0x88d4ac});}if(_0xb56c9f[_0x132360(0x114)](/<LEVEL (?:IMAGE|IMAGES)>\s*([\s\S]*)\s*<\/LEVEL (?:IMAGE|IMAGES)>/i)){const _0x26dc6c=String(RegExp['$1'])['split'](/[\r\n]+/);for(const _0x274ada of _0x26dc6c){if(!_0x274ada)continue;if(_0x274ada[_0x132360(0x114)](/(\d+):[ ](.*)/i)){const _0x25775b=Number(RegExp['$1'])||0x1,_0x524aeb=String(RegExp['$2']);this[_0x132360(0x1b3)][_0x132360(0x11a)]({'level':_0x25775b,'image':_0x524aeb});}}}},Game_Enemy[_0x583fa4(0x122)][_0x583fa4(0x1ac)]=function(){const _0x91771=_0x583fa4;this['_levelBattlerName']=this[_0x91771(0x139)]()['battlerName'];for(const _0x37b2ba of this[_0x91771(0x1b3)]){if(!_0x37b2ba)continue;this[_0x91771(0x192)]>=_0x37b2ba['level']&&(this[_0x91771(0x101)]=_0x37b2ba[_0x91771(0x187)]);}},VisuMZ['EnemyLevel'][_0x583fa4(0x16c)]=Game_Enemy[_0x583fa4(0x122)][_0x583fa4(0x1b9)],Game_Enemy[_0x583fa4(0x122)][_0x583fa4(0x1b9)]=function(){const _0x395c21=_0x583fa4;return this['_levelBattlerName']||VisuMZ[_0x395c21(0x19e)][_0x395c21(0x16c)]['call'](this);},Game_Enemy[_0x583fa4(0x122)]['createEnemyLevelParamGrowth']=function(_0x4e7582){const _0x1213ab=_0x583fa4;if(_0x4e7582&&this['_enemyLevel_GrowthRate']&&this[_0x1213ab(0x184)])return;const _0x172582=VisuMZ[_0x1213ab(0x19e)]['Settings'][_0x1213ab(0x123)];this[_0x1213ab(0x1b5)]={0x0:_0x172582[_0x1213ab(0x118)],0x1:_0x172582['MaxMP_Rate'],0x2:_0x172582['ATK_Rate'],0x3:_0x172582[_0x1213ab(0x1b8)],0x4:_0x172582['MAT_Rate'],0x5:_0x172582['MDF_Rate'],0x6:_0x172582['AGI_Rate'],0x7:_0x172582['LUK_Rate'],'exp':_0x172582[_0x1213ab(0x127)],'gold':_0x172582[_0x1213ab(0x17c)],'drop':_0x172582['Drop_Rate']},this[_0x1213ab(0x184)]={0x0:_0x172582[_0x1213ab(0x150)],0x1:_0x172582[_0x1213ab(0x105)],0x2:_0x172582['ATK_Flat'],0x3:_0x172582[_0x1213ab(0x19d)],0x4:_0x172582['MAT_Flat'],0x5:_0x172582['MDF_Flat'],0x6:_0x172582['AGI_Flat'],0x7:_0x172582[_0x1213ab(0x1a0)],'exp':_0x172582[_0x1213ab(0x177)],'gold':_0x172582['Gold_Flat'],'drop':_0x172582[_0x1213ab(0x149)]};const _0x5f2e48=['MAXHP',_0x1213ab(0x141),_0x1213ab(0x1ad),_0x1213ab(0x11c),_0x1213ab(0x18e),_0x1213ab(0x171),_0x1213ab(0x153),_0x1213ab(0x198),_0x1213ab(0x1a6),_0x1213ab(0x124),_0x1213ab(0x1b7)],_0x17807a=this[_0x1213ab(0x139)]()['note'];if(_0x17807a[_0x1213ab(0x114)](/<GROWTH RATE PER LEVEL>\s*([\s\S]*)\s*<\/GROWTH RATE PER LEVEL>/i)){const _0x50411f=String(RegExp['$1'])[_0x1213ab(0x1be)](/[\r\n]+/);for(const _0x25de52 of _0x50411f){if(_0x25de52['match'](/(.*): (.*)/i)){const _0x407bc3=String(RegExp['$1'])[_0x1213ab(0x18a)]()[_0x1213ab(0x1a2)](),_0x9d5da3=Number(eval(RegExp['$2'])||0x0),_0x20bff3=_0x5f2e48[_0x1213ab(0x148)](_0x407bc3);if(_0x20bff3<0x8)this[_0x1213ab(0x1b5)][_0x20bff3]=_0x9d5da3;else{if(_0x20bff3===0x8)this['_enemyLevel_GrowthRate'][_0x1213ab(0x17f)]=_0x9d5da3;else{if(_0x20bff3===0x9)this['_enemyLevel_GrowthRate'][_0x1213ab(0x18f)]=_0x9d5da3;else{if(_0x20bff3===0xa)this[_0x1213ab(0x1b5)]['drop']=_0x9d5da3;else continue;}}}}}}if(_0x17807a['match'](/<GROWTH FLAT PER LEVEL>\s*([\s\S]*)\s*<\/GROWTH FLAT PER LEVEL>/i)){const _0x532a7a=String(RegExp['$1'])['split'](/[\r\n]+/);for(const _0x2e8933 of _0x532a7a){if(_0x2e8933[_0x1213ab(0x114)](/(.*): (.*)/i)){const _0x33cf7e=String(RegExp['$1'])['toUpperCase']()[_0x1213ab(0x1a2)](),_0x5577e3=Number(eval(RegExp['$2'])||0x0),_0x101ee2=_0x5f2e48[_0x1213ab(0x148)](_0x33cf7e);if(_0x101ee2<0x8)this[_0x1213ab(0x184)][_0x101ee2]=_0x5577e3;else{if(_0x101ee2===0x8)this[_0x1213ab(0x184)][_0x1213ab(0x17f)]=_0x5577e3;else{if(_0x101ee2===0x9)this[_0x1213ab(0x184)][_0x1213ab(0x18f)]=_0x5577e3;else{if(_0x101ee2===0xa)this[_0x1213ab(0x184)][_0x1213ab(0x10f)]=_0x5577e3;else continue;}}}}}}},Game_Enemy[_0x583fa4(0x122)]['paramBaseApplyEnemyLevel']=function(_0x4d0f72,_0xba711d,_0x378b4e){const _0x5a1d34=_0x583fa4;if(this['isStaticLevelParameters']())return _0x378b4e;this[_0x5a1d34(0x161)](!![]);const _0x322bfd=this;let _0x322c55=_0x378b4e;const _0x5a2698=this[_0x5a1d34(0x1b5)][_0x4d0f72],_0x6ea748=this[_0x5a1d34(0x184)][_0x4d0f72];return _0x322c55=_0x378b4e+_0xba711d*_0x378b4e*_0x5a2698+_0xba711d*_0x6ea748,_0x322c55;},VisuMZ['EnemyLevel']['Game_Enemy_exp']=Game_Enemy[_0x583fa4(0x122)]['exp'],Game_Enemy[_0x583fa4(0x122)]['exp']=function(){const _0x1e9b3e=_0x583fa4,_0x206640=VisuMZ[_0x1e9b3e(0x19e)]['Game_Enemy_exp']['call'](this),_0x4b95d4=this[_0x1e9b3e(0x108)]-0x1;return this['expApplyEnemyLevel'](_0x206640,_0x4b95d4);},Game_Enemy[_0x583fa4(0x122)][_0x583fa4(0x172)]=function(_0x238ebb,_0x4aaf6f){const _0x582189=_0x583fa4;if(this['isStaticLevelParameters']())return _0x238ebb;this['createEnemyLevelParamGrowth'](!![]);const _0x110f61=this;let _0x3d98c5=_0x238ebb;const _0x17d403=this[_0x582189(0x1b5)]['exp'],_0x18ca61=this['_enemyLevel_GrowthFlat'][_0x582189(0x17f)];return _0x3d98c5=_0x238ebb+_0x4aaf6f*_0x238ebb*_0x17d403+_0x4aaf6f*_0x18ca61,Math[_0x582189(0x1a4)](_0x3d98c5);},VisuMZ[_0x583fa4(0x19e)][_0x583fa4(0x157)]=Game_Enemy[_0x583fa4(0x122)][_0x583fa4(0x18f)],Game_Enemy[_0x583fa4(0x122)][_0x583fa4(0x18f)]=function(){const _0x59c457=_0x583fa4,_0x43aa81=VisuMZ['EnemyLevel']['Game_Enemy_gold'][_0x59c457(0x134)](this),_0xf7c816=this['level']-0x1;return this[_0x59c457(0x107)](_0x43aa81,_0xf7c816);},Game_Enemy['prototype']['goldApplyEnemyLevel']=function(_0xf318da,_0x467f5b){const _0x5c5a8b=_0x583fa4;if(this[_0x5c5a8b(0x16d)]())return _0xf318da;this['createEnemyLevelParamGrowth'](!![]);const _0x3f53ed=this;let _0x35b899=_0xf318da;const _0x15e4c8=this['_enemyLevel_GrowthRate'][_0x5c5a8b(0x18f)],_0x3aa5b2=this[_0x5c5a8b(0x184)][_0x5c5a8b(0x18f)];return _0x35b899=_0xf318da+_0x467f5b*_0xf318da*_0x15e4c8+_0x467f5b*_0x3aa5b2,Math[_0x5c5a8b(0x1a4)](_0x35b899);},VisuMZ[_0x583fa4(0x19e)][_0x583fa4(0x160)]=Game_Enemy[_0x583fa4(0x122)][_0x583fa4(0x126)],Game_Enemy[_0x583fa4(0x122)][_0x583fa4(0x126)]=function(){const _0x500a89=_0x583fa4,_0x5eff1b=VisuMZ[_0x500a89(0x19e)][_0x500a89(0x160)]['call'](this),_0x582457=this[_0x500a89(0x108)]-0x1;return this[_0x500a89(0x1af)](_0x5eff1b,_0x582457);},Game_Enemy['prototype']['dropItemRateApplyEnemyLevel']=function(_0xed43f0,_0x3709bd){const _0x33cb42=_0x583fa4;if(this['isStaticLevelParameters']())return _0xed43f0;this['createEnemyLevelParamGrowth'](!![]);const _0x383775=this;let _0x187a7f=_0xed43f0;const _0x589b25=this[_0x33cb42(0x1b5)][_0x33cb42(0x10f)],_0x2ad8f7=this[_0x33cb42(0x184)][_0x33cb42(0x10f)];return _0x187a7f=_0xed43f0+_0x3709bd*_0xed43f0*_0x589b25+_0x3709bd*_0x2ad8f7,_0x187a7f;},Game_Enemy[_0x583fa4(0x122)][_0x583fa4(0x128)]=function(_0x1baa30){const _0xd29ddc=_0x583fa4;if(!_0x1baa30)return![];this[_0xd29ddc(0x197)](!![]);const _0x1c45b2=_0x1baa30[_0xd29ddc(0x12d)][_0xd29ddc(0x18a)]()['trim']();if(this['_enemyLevelRequired_SkillName'][_0x1c45b2])return this[_0xd29ddc(0x108)]>=this['_enemyLevelRequired_SkillName'][_0x1c45b2];const _0x73ce44=_0x1baa30['id'];if(this['_enemyLevelRequired_SkillID'][_0x73ce44])return this['level']>=this[_0xd29ddc(0x15d)][_0x73ce44];return!![];},Game_Enemy[_0x583fa4(0x122)]['createEnemyLevelSkillRequirements']=function(_0x210457){const _0x2af343=_0x583fa4;if(_0x210457&&this[_0x2af343(0x106)]&&this[_0x2af343(0x15d)])return;this[_0x2af343(0x106)]={},this['_enemyLevelRequired_SkillID']={};const _0x24c713=this['enemy']()[_0x2af343(0x147)][_0x2af343(0x114)](/<ENEMY SKILL (.*) REQUIRE LEVEL: (\d+)>/gi);if(_0x24c713)for(const _0x3b4bb3 of _0x24c713){_0x3b4bb3[_0x2af343(0x114)](/<ENEMY SKILL (.*) REQUIRE LEVEL: (\d+)>/i);const _0x2f6099=String(RegExp['$1'])[_0x2af343(0x18a)]()[_0x2af343(0x1a2)](),_0x2248f3=Number(RegExp['$2']);_0x2f6099[_0x2af343(0x114)](/\b(\d+)\b/i)?this[_0x2af343(0x15d)][_0x2f6099]=_0x2248f3:this[_0x2af343(0x106)][_0x2f6099]=_0x2248f3;}},VisuMZ['EnemyLevel'][_0x583fa4(0x189)]=Game_Enemy[_0x583fa4(0x122)][_0x583fa4(0x145)],Game_Enemy['prototype'][_0x583fa4(0x145)]=function(_0x581e23){const _0x4d6b25=_0x583fa4;VisuMZ[_0x4d6b25(0x19e)][_0x4d6b25(0x189)][_0x4d6b25(0x134)](this,_0x581e23),this[_0x4d6b25(0x132)](),this[_0x4d6b25(0x161)](![]),this[_0x4d6b25(0x197)](![]);},Game_Party['prototype'][_0x583fa4(0x15f)]=function(_0x42bf1f){const _0x547a2f=_0x583fa4,_0x4a7e1c=this['allMembers']()[_0x547a2f(0x151)](_0x1402a6=>!!_0x1402a6)[_0x547a2f(0x180)](_0x1f4260=>_0x1f4260[_0x547a2f(0x108)]),_0x445f1a=this[_0x547a2f(0x185)]()['filter'](_0x4665d0=>!!_0x4665d0)[_0x547a2f(0x180)](_0x401ff6=>_0x401ff6[_0x547a2f(0x108)]);switch(_0x42bf1f['toUpperCase']()['trim']()){case _0x547a2f(0x174):return Math[_0x547a2f(0x10b)](..._0x4a7e1c);break;case'HIGHEST\x20PARTY\x20LEVEL':return Math[_0x547a2f(0x10b)](..._0x445f1a);break;case _0x547a2f(0x173):if(_0x4a7e1c[_0x547a2f(0x1bb)]<=0x1)return _0x4a7e1c[0x0]||0x1;return Math[_0x547a2f(0x1a4)](_0x4a7e1c['reduce']((_0x1551f0,_0x208817)=>_0x1551f0+_0x208817)/_0x4a7e1c[_0x547a2f(0x1bb)]);break;case _0x547a2f(0x136):if(_0x445f1a[_0x547a2f(0x1bb)]<=0x1)return _0x445f1a[0x0]||0x1;return Math[_0x547a2f(0x1a4)](_0x445f1a[_0x547a2f(0x194)]((_0x57608a,_0x47dcd3)=>_0x57608a+_0x47dcd3)/_0x445f1a[_0x547a2f(0x1bb)]);break;case _0x547a2f(0x125):return Math['min'](..._0x4a7e1c[_0x547a2f(0x180)](_0x8a9c2d=>_0x8a9c2d));break;case _0x547a2f(0x1b0):return Math[_0x547a2f(0x14d)](..._0x445f1a[_0x547a2f(0x180)](_0x53f089=>_0x53f089));break;default:return 0x1;break;}},Game_Map[_0x583fa4(0x122)][_0x583fa4(0x13b)]=function(){const _0x45faf7=_0x583fa4;if(!$dataMap)return![];return!!this[_0x45faf7(0x10e)]();},Game_Map['prototype'][_0x583fa4(0x10e)]=function(){const _0xef6279=_0x583fa4;if(!$dataMap)return 0x0;const _0x483196=$dataMap[_0xef6279(0x147)];if(_0x483196[_0xef6279(0x114)](/<ENEMY LEVEL: (\d+)>/i))return Number(RegExp['$1'])||0x1;else{if(_0x483196['match'](/<ENEMY LEVEL: (\d+) TO (\d+)>/i)){const _0x88dfe2=Number(RegExp['$1']),_0x206f65=Number(RegExp['$2']),_0x5e239a=Math['min'](_0x88dfe2,_0x206f65),_0x12164d=Math[_0xef6279(0x10b)](_0x88dfe2,_0x206f65);return Math[_0xef6279(0x14c)](_0x5e239a+Math['randomInt'](_0x12164d-_0x5e239a+0x1));}else{if(_0x483196['match'](/<ENEMY LEVEL: (.*)>/i)){const _0x32a169=String(RegExp['$1'])[_0xef6279(0x18a)]()[_0xef6279(0x1a2)]();this['_level']=$gameParty[_0xef6279(0x15f)](_0x32a169)||0x1;}else{if(_0x483196[_0xef6279(0x114)](/<JS ENEMY LEVEL: (.*)>/i))try{return Math[_0xef6279(0x14c)](eval(RegExp['$1'])||0x0);}catch(_0x334512){if($gameTemp[_0xef6279(0x152)]())console[_0xef6279(0x111)](_0x334512);return 0x0;}else return 0x0;}}}};