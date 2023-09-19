//=============================================================================
// VisuStella MZ - Battle A.I.
// VisuMZ_3_BattleAI.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_BattleAI = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BattleAI = VisuMZ.BattleAI || {};
VisuMZ.BattleAI.version = 1.08;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.08] [BattleAI]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Battle_AI_VisuStella_MZ
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This Battle A.I. plugin changes up how enemies and any Auto Battle actors
 * behave by implementing many new key components to their decision making
 * process in battle. These new compotents are: A.I. Styles, A.I. Levels, 
 * Rating Variance, A.I. Conditions, and Influencing TGR Weight.
 *
 * With these new key components put together, you can transform RPG Maker MZ's
 * highly primitive A.I. into something more intelligent. Auto Battle actors
 * can also base their A.I. patterns off an enemy's A.I. in order to behave in
 * more desirable ways during battle as well.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Different A.I. Styles to allow for various ways to setup enemy A.I.
 * * Set A.I. Levels for enemies and Auto Battle actors.
 * * A.I. Levels can be set on a global scale or individual scale.
 * * Set rating variance levels to prioritize actions or randomize them.
 * * These include notetags to change them on a per individual basis.
 * * Create action conditions to make certain skills usable by the A.I. under
 *   specific circumstances.
 * * Action conditions are split between 'ALL' and 'ANY' types which require
 *   either all conditions to be met or at least one condition to be met.
 * * A large selection of condition notetags to use to help customize the best
 *   case situations on when to use a skill and which target to pick.
 * * Default condition settings can be made in the Plugin Parameters to make an
 *   entire database of skills become conditional for A.I. usage.
 * * Influence TGR weight to make certain targets more desirable for specific
 *   types of actions.
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
 * - VisuMZ_1_BattleCore
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
 * Auto Battle A.I. for Actors
 *
 * - With this plugin, there is an option to let certain classes reference
 * specific enemy A.I. patterns to decide which skills to use during battle.
 * If the reference option is not used, the actor will use default Auto Battle
 * evaluations to determine which skills to use instead.
 *
 * ---
 * 
 * A.I. Styles
 * 
 * - There are currently four different A.I. Styles. Actors and enemies can
 * default to a different one globally, or changed individually using notetags.
 * Read more about them in the A.I. Styles section.
 * 
 * ---
 *
 * A.I. Levels
 *
 * - Enemies and actors can be given different A.I. Levels. The higher one's
 * A.I. Level, the more they are to follow conditions. With Level 100 A.I.
 * Level, an A.I. will never disobey a condition. On the other hand, lower
 * A.I. Levels may possibly ignore certain conditions and act as if they are
 * fulfilled.
 *
 * ---
 *
 * A.I. Rating Variance
 *
 * - In the RPG Maker database editor, when deciding an enemy's Action Patterns
 * you can decide on the action's "rating". The rating is a value from 1 to 9
 * where 9 gets the highest priority and 1 gets the lowest. RPG Maker, by
 * default, will sometimes dip the rating a few levels lower to allow lower
 * ratings and bypass the priority system.
 *
 * - This plugin allows you to set the variance level through Plugin Parameters
 * on a global scale or notetags on an individual basis to allow for larger,
 * smaller, or no variance on ratings at all.
 *
 * ---
 *
 * A.I. Conditions for Skill Usage
 *
 * - Enemies and any actors that use Auto Battle A.I. with a reference can only
 * use certain skills as long as specific conditions have been met. These
 * conditions are split between 'ALL' condition sets and 'ANY' condition sets.
 *
 * - 'ALL' condition sets require all of the set's conditions to be met in
 * order for the skill to be used by the A.I.
 *
 * - 'ANY' condition sets require at least one of the set's conditions to be
 * met in order for the skill to be used by the A.I.
 *
 * - A variety of conditions can be inserted into each condition set to make
 * for some very specific usage conditions. These will also help filter out
 * which targets to pick from, too.
 *
 * ---
 *
 * TGR Weight on A.I. Target Selection
 *
 * - TGR is a special parameter in RPG Maker MZ that represents "Target Rate".
 * The higher one's TGR, the more likely they are to become the target of an
 * attack. This plugin allows various things to influence the TGR weight to
 * make certain targets more likely to be targets for attack.
 *
 * - Elemental influence rates on the TGR weight mean that if a target receives
 * more damage from an elemental attack, the TGR weight becomes higher for that
 * skill when determining a target. The higher the elemental damage received,
 * the more the TGR weight shifts upward.
 *
 * - Evasion and Magic Evasion rates do the opposite. The higher a potential
 * target's evasion and magic evasion rate is (for physical and magical skills)
 * the lower the TGR weight becomes for that potential target.
 *
 * - By default Plugin Parameter settings, TGR weight shifting requires the
 * enemy troop to have "knowledge" on the party's element rates, evasion, and
 * magic evasion properties. Enemy troops would have to hit actors with element
 * based attacks to learn the actor's resistance levels, physical attacks to
 * learn the actor's evasion, and magical attacks to learn the actor's magic
 * evasion levels.
 *
 * ---
 *
 * ============================================================================
 * A.I. Styles
 * ============================================================================
 * 
 * There are currently four different A.I. Styles. These determine how the
 * A.I. acts and behaves. You can change the A.I. Style used globally through
 * the Plugin Parameters or individually for classes and enemies through the
 * usage of notetags.
 * 
 * Read below to understand each style and its rules:
 * 
 * ---
 * 
 * Classic Style
 * 
 * "Classic" style is the traditional and default RPG Maker MZ A.I. style.
 * It puts emphasis on the Rating system, where skills with higher ratings are
 * given more priority than skills with lower ratings within variance.
 * 
 * - Action Pattern conditions must be met.
 * - Skill must be usable (able to pay its cost and it isn't disabled).
 * - Skill A.I. conditions must be met.
 * - Priority is given towards actions with higher Ratings.
 * - Rating variance will be determined by Plugin Parameters and/or notetags.
 * - A.I. Level can affect whether or not A.I. Conditions would be ignored.
 * - After applying Ratings, Rating Variances, and A.I. Conditions, if there
 *   are still multiple actions to choose from, pick from the remaining actions
 *   randomly.
 * - If no actions are valid, then do nothing.
 * 
 * ---
 * 
 * Gambit Style
 * 
 * - "Gambit" style is the style from Yanfly Engine Plugin's Battle A.I. Core.
 * It goes down the list of skills and uses them in order as long as they meet
 * the Action Pattern conditions and A.I. conditions. Ratings will be ignored.
 * 
 * - Action Pattern conditions must be met.
 * - Skill must be usable (able to pay its cost and it isn't disabled).
 * - Skill A.I. conditions must be met.
 * - Priority is given towards actions located higher on the list.
 * - Actions towards the bottom of the list will have lower priority.
 * - Ratings and Rating Variance has no bearing on whether or not an action
 *   will be picked.
 * - A.I. Level can affect whether or not A.I. Conditions would be ignored.
 * - If no actions are valid, then do nothing.
 * 
 * ---
 * 
 * Casual Style
 * 
 * - "Casual" style takes a lighter approach to A.I. It ignores the Ratings
 * system and doesn't care about the order of actions either. Instead, the
 * only thing this A.I. Style cares about are the A.I. Conditions. All valid
 * actions after that are randomly picked from.
 * 
 * - Action Pattern conditions must be met.
 * - Skill must be usable (able to pay its cost and it isn't disabled).
 * - Skill A.I. conditions must be met.
 * - There is no priority system for Ratings or Order.
 * - A.I. Level does not matter here.
 * - A random action will be selected from a group of remaining valid actions.
 * - If no actions are valid, then do nothing.
 * 
 * ---
 * 
 * Random Style
 * 
 * - "Random" style simply does not care about ratings or order. It only cares
 * if the skill's can be used (can pay for the cost) and Action Pattern
 * conditions. It does not care about A.I. Conditions, Ratings, or Order.
 * 
 * - Action Pattern conditions must be met.
 * - Skill must be usable (able to pay its cost and it isn't disabled).
 * - Skill A.I. conditions are ignored.
 * - There is no priority system for Ratings or Order.
 * - A.I. Level does not matter here.
 * - A random action will be selected from a group of remaining valid actions.
 * - If no actions are valid, then do nothing.
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
 * === General A.I. Settings Notetags ===
 *
 * These notetags set the general A.I. related settings for enemies and any
 * actors that use A.I. (requires Auto Battle and has a reference A.I.).
 *
 * ---
 * 
 * <AI Style: x>
 * 
 * - Used for: Class, Enemy Notetags
 * - Replace 'x' with 'Classic', 'Gambit', 'Casual', or 'Random' without the
 *   quotes. Example: <AI Style: Gambit>
 * - Determines the A.I. style used. Refer to the A.I. Styles section on the
 *   various types of styles.
 * - For actors, place this inside the associated class's notebox instead.
 * - For actors, this does not apply if there is no referenced enemy A.I. list.
 * - Setup the reference enemy through either the Plugin Parameters or by using
 *   the <Reference AI: Enemy id> notetag found below.
 * 
 * ---
 *
 * <AI Level: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Designates the unit's A.I. level if A.I. is to be used.
 * - Replace 'x' with a number from 0 to 100.
 * - Units with higher A.I. Levels will be more strict about conditions.
 * - Units with lower A.I. Levels will be more lax about conditions.
 *
 * ---
 *
 * <AI Rating Variance: x>
 * 
 * - Used for: Actor, Enemy Notetags
 * - Sets the variance amount when determining A.I. actions by rating.
 * - Replace 'x' with a number between 0 and 9.
 * - 0 for no variance.
 * - Lower numbers for less variance.
 * - Higher numbers for more variance.
 *
 * ---
 *
 * <Reference AI: Enemy id>
 * <Reference AI: name>
 *
 * - Used for: Class Notetags
 * - Causes any actor using this class that has the Auto Battle trait to use
 *   a specific enemy's attack pattern (ratings, conditions, etc.) to determine
 *   which skill to use in battle.
 * - Replace 'id' with a number representing the enemy's ID to reference.
 * - Replace 'name' with the name the enemy to reference.
 * - Actors are only able to use skills they would normally have access to.
 *   - Actors need to have LEARNED the skill.
 *   - Actors need to be able to access the skill's SKILL TYPE.
 *   - Actors need to have the RESOURCES to pay for the skill.
 * - If you cannot figure out why an auto battle actor cannot use a specific
 *   skill, turn OFF auto battle and see if you can use the skill normally.
 *
 * ---
 *
 * <No Reference AI>
 *
 * - Used for: Class Notetags
 * - Prevents the class from using any enemies as their reference A.I. pattern
 *   (including the one set in the Plugin Parameters).
 *
 * ---
 *
 * === Skill A.I. Condition Notetags ===
 *
 * Insert these notetags into the noteboxes of skills that you'd like to give
 * custom A.I. conditions for. The 'All' version of the notetags require every
 * condition to be met while the 'Any' version of the notetags require only one
 * of the conditions to be met. 
 *
 * If both are used together, then the 'All' conditions must be completely
 * fulfilled while the 'Any' conditions need only one to be fulfilled.
 *
 * ---
 *
 * <All AI Conditions>
 *  condition
 *  condition
 *  condition
 * </All AI Conditions>
 * 
 * - Used for: Skill
 * - Add/remove as many conditions as needed for the skill.
 * - All conditions must be met in order for this to become a valid skill for
 *   the AI to use.
 * - This can be used together with <Any AI Conditions>. If either of these
 *   notetags exist, do not use the Plugin Parameter defaul conditions.
 * - This will not inherit default 'All' conditions in the Plugin Parameters.
 * - Replace 'condition' with any of the following Condition List below.
 *
 * ---
 *
 * <Any AI Conditions>
 *  condition
 *  condition
 *  condition
 * </Any AI Conditions>
 * 
 * - Used for: Skill
 * - Add/remove as many conditions as needed for the skill.
 * - As long as one condition is met, this becomes a valid skill for the AI
 *   to use. If none of them are met, this skill becomes invalid for AI use.
 * - This can be used together with <All AI Conditions>. If either of these
 *   notetags exist, do not use the Plugin Parameter defaul conditions.
 * - This will not inherit default 'Any' conditions in the Plugin Parameters.
 * - Replace 'condition' with any of the following Condition List below.
 *
 * ---
 *
 * <No AI Conditions>
 * 
 * - Used for: Skill
 * - Removes any default 'All' and 'Any' conditions for this skill.
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
 * - A numeric value representing a hard number.
 * - '50%' or any other percentile number to represent a rate.
 * - '0.5' or any other float number to represent a rate.
 *
 * - 'Variable x' (replace 'x' with a number) for variable x's current value.
 *
 * - 'HP%', 'MP%', 'TP%' for HP, MP, and TP rates respectively.
 * - 'MaxHP', 'MaxMP', 'MaxTP' for the potential target's respective values.
 * - 'Level' for the potential target's level. Requires VisuMZ_0_CoreEngine for
 *   this to affect enemies.
 * - 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK' for the potential target's total
 *   parameter value.
 *
 * - 'param Buff Stacks' for the potential target's current Buff stacks.
 *   - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 * - 'param Debuff Stacks' for the potential target's current Debuff stacks.
 *   - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *
 * - 'param Buff Turns' for potential target's current buff turn duration.
 *   - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *   - Returns 0 if the potential target is not affected by that buff.
 * - 'param Debuff Turns' for potential target's current debuff turn duration.
 *   - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *   - Returns 0 if the potential target is not affected by that debuff.
 *
 * - 'State id Turns' or 'State name Turns' for potential target's current turn
 *   duration on that particular state.
 *   - Replace 'id' with a number representing the ID of the state.
 *   - Replace 'name' with the state's name.
 *   - Returns 0 if the potential target is not affected by that state.
 *   - Returns the max safe number value if the potential target is has that
 *     state as a passive state.
 *
 * - 'Element id Rate', 'Element name Rate', 'name Element Rate'
 *   - Returns a (float) value of the potential target's element's rate.
 *   - Replace 'id' with the ID of the element whose rate is to be checked.
 *   - Replace 'name' with the name of the element whose rate is to be checked.
 *     - Ignore any text codes in the element name.
 *
 * - 'Team Alive Members'
 *   - Returns a number value indicating how many alive members there are on
 *     the potential target's team.
 *
 * - 'Team Dead Members'
 *   - Returns a number value indicating how many dead members there are on
 *     the potential target's team.
 * 
 * - When no keyword matches are found, the comparison value will be
 *   interpreted as JavaScript code. If the JavaScript code fails, it will
 *   default to a 0 value.
 *
 *   *NOTE* To make any of these conditions base off of the user instead, add
 *   the word 'user' before the condition as such:
 *
 *   user hp% >= 0.50
 *   user atk buff stacks === 2
 *   user team alive members < 3
 *
 * ---
 *
 * Always
 *
 * - Going to be valid no matter what.
 *
 * ---
 *
 * x% Chance
 * 
 * - Replace 'x' with a number value representing the percent chance this skill
 *   would pass as valid.
 *
 * ---
 *
 * Switch x On
 * Switch x Off
 *
 * - Replace 'x' with the ID of the switch to check as ON/OFF.
 *
 * ---
 *
 * User is Actor
 * User is Enemy
 * Target is Actor
 * Target is Enemy
 *
 * - Requires the user or potential target to be an actor/enemy.
 *
 * ---
 *
 * User Has State id
 * User Has State name
 * Target Has State id
 * Target Has State name
 *
 * - Replace 'id' with the ID of the state the user or potential target needs
 *   to have.
 * - Replace 'name' with the name of the state the target needs to have.
 *
 * ---
 *
 * User Not State id
 * User Not State name
 * Target Not State id
 * Target Not State name
 *
 * - Replace 'id' with the ID of the state the user or potential target
 *   cannot have.
 * - Replace 'name' with the name of the state the target cannot have.
 *
 * ---
 *
 * User Has param Buff 
 * User Has param Debuff 
 * Target Has param Buff 
 * Target Has param Debuff 
 *
 * - Requires user or potential target to have the associated parameter 
 *   buff/debuff at any stack level.
 * - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *
 * ---
 *
 * User Has param Max Buff 
 * User Has param Max Debuff
 * Target Has param Max Buff 
 * Target Has param Max Debuff
 *
 * - Requires potential user or target to have the associated parameter 
 *   buff/debuff at maxed out stacks.
 * - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *
 * ---
 *
 * User Not param Buff 
 * User Not param Debuff 
 * Target Not param Buff 
 * Target Not param Debuff 
 *
 * - Requires user or potential target to not have the associated parameter 
 *   buff/debuff at any stack level.
 * - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *
 * ---
 *
 * User Not param Max Buff 
 * User Not param Max Debuff 
 * Target Not param Max Buff 
 * Target Not param Max Debuff 
 *
 * - Requires user or potential target to not have the associated parameter 
 *   buff/debuff at maxed out stacks.
 * - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *
 * ---
 *
 * === A.I. => TGR Weight Notetags ===
 *
 * You can set how much influence on TGR weights actors and enemies will place
 * when determining valid targets for their actions.
 *
 * ---
 *
 * <AI Element Rate Influence: x.x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Sets how much TGR weight influence is given based on the element rate.
 * - Replace 'x.x' with a numberic value representing the influence rate.
 *
 * ---
 *
 * <Bypass AI Element Rate Influence>
 *
 * - Used for: Actor, Enemy Notetags
 * - Makes the actor/enemy not factor in element rates when calculating TGR
 *   weights to determine action targets.
 *
 * ---
 *
 * <AI EVA Influence: x.x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Sets how much TGR weight influence is given based on the EVA rate.
 * - Replace 'x.x' with a numberic value representing the influence rate.
 *
 * ---
 *
 * <Bypass AI EVA Influence>
 *
 * - Used for: Actor, Enemy Notetags
 * - Makes the actor/enemy not factor in EVA rates when calculating TGR
 *   weights to determine action targets.
 *
 * ---
 *
 * <AI MEV Influence: x.x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Sets how much TGR weight influence is given based on the MEV rate.
 * - Replace 'x.x' with a numberic value representing the influence rate.
 *
 * ---
 *
 * <Bypass AI MEV Influence>
 *
 * - Used for: Actor, Enemy Notetags
 * - Makes the actor/enemy not factor in MEV rates when calculating TGR
 *   weights to determine action targets.
 *
 * ---
 * 
 * === Specific A.I. Targeting Notetags ===
 * 
 * Specific A.I. targeting means the user will ignore any TGR influences when
 * it comes to pick out of a group of valid candidates to come down to one
 * target. This only affects skills where the user must select a specific
 * target, meaning it will ignore the effects of random and AoE scopes.
 * 
 * ---
 *
 * <AI Target: type>
 *
 * - Used for: Skill Notetags
 * - Bypasses TGR influence in favor of picking a specific target out of a
 *   group of valid targets (does not pick from outside the valid target group)
 *   for a skill target.
 * - Replace 'type' with any of the following:
 * 
 *   ----------------------------   -------------------------------------------
 *   Type                           Description
 *   ----------------------------   -------------------------------------------
 *   User                           Always picks the user if available
 *   First                          Always picks the first valid candidate
 *   Last                           Always picks the last valid candidate
 *   ----------------------------   -------------------------------------------
 *   Highest Level                  Picks candidate with highest level
 *   ----------------------------   -------------------------------------------
 *   Highest MaxHP                  Picks candidate with highest MaxHP
 *   Highest HP                     Picks candidate with highest current HP
 *   Highest HP%                    Picks candidate with highest HP ratio
 *   ----------------------------   -------------------------------------------
 *   Highest MaxMP                  Picks candidate with highest MaxMP
 *   Highest MP                     Picks candidate with highest current MP
 *   Highest MP%                    Picks candidate with highest MP ratio
 *   ----------------------------   -------------------------------------------
 *   Highest MaxTP                  Picks candidate with highest MaxTP
 *   Highest TP                     Picks candidate with highest current TP
 *   Highest TP%                    Picks candidate with highest TP ratio
 *   ----------------------------   -------------------------------------------
 *   Highest ATK                    Picks candidate with highest ATK parameter
 *   Highest DEF                    Picks candidate with highest DEF parameter
 *   Highest MAT                    Picks candidate with highest MAT parameter
 *   Highest MDF                    Picks candidate with highest MDF parameter
 *   Highest AGI                    Picks candidate with highest AGI parameter
 *   Highest LUK                    Picks candidate with highest LUK parameter
 *   ----------------------------   -------------------------------------------
 *   Highest HIT                    Picks candidate with highest HIT parameter
 *   Highest EVA                    Picks candidate with highest EVA parameter
 *   Highest CRI                    Picks candidate with highest CRI parameter
 *   Highest CEV                    Picks candidate with highest CEV parameter
 *   Highest MEV                    Picks candidate with highest MEV parameter
 *   Highest MRF                    Picks candidate with highest MRF parameter
 *   Highest CNT                    Picks candidate with highest CNT parameter
 *   Highest HRG                    Picks candidate with highest HRG parameter
 *   Highest MRG                    Picks candidate with highest MRG parameter
 *   Highest TRG                    Picks candidate with highest TRG parameter
 *   ----------------------------   -------------------------------------------
 *   Highest TGR                    Picks candidate with highest TGR parameter
 *   Highest GRD                    Picks candidate with highest GRD parameter
 *   Highest REC                    Picks candidate with highest REC parameter
 *   Highest PHA                    Picks candidate with highest PHA parameter
 *   Highest MCR                    Picks candidate with highest MCR parameter
 *   Highest TCR                    Picks candidate with highest TCR parameter
 *   Highest PDR                    Picks candidate with highest PDR parameter
 *   Highest MDR                    Picks candidate with highest MDR parameter
 *   Highest FDR                    Picks candidate with highest FDR parameter
 *   Highest EXR                    Picks candidate with highest EXR parameter
 *   ----------------------------   -------------------------------------------
 *   Highest State Count            Picks candidate with most states (any)
 *   Highest Positive State Count   Picks candidate with most positive states
 *   Highest Negative State Count   Picks candidate with most negative states
 *   *Note: These require VisuMZ_1_SkillsStatesCore
 *   ----------------------------   -------------------------------------------
 *   Lowest Level                   Picks candidate with lowest level
 *   ----------------------------   -------------------------------------------
 *   Lowest MaxHP                   Picks candidate with lowest MaxHP
 *   Lowest HP                      Picks candidate with lowest current HP
 *   Lowest HP%                     Picks candidate with lowest HP ratio
 *   ----------------------------   -------------------------------------------
 *   Lowest MaxMP                   Picks candidate with lowest MaxMP
 *   Lowest MP                      Picks candidate with lowest current MP
 *   Lowest MP%                     Picks candidate with lowest MP ratio
 *   ----------------------------   -------------------------------------------
 *   Lowest MaxTP                   Picks candidate with lowest MaxTP
 *   Lowest TP                      Picks candidate with lowest current TP
 *   Lowest TP%                     Picks candidate with lowest TP ratio
 *   ----------------------------   -------------------------------------------
 *   Lowest ATK                     Picks candidate with lowest ATK parameter
 *   Lowest DEF                     Picks candidate with lowest DEF parameter
 *   Lowest MAT                     Picks candidate with lowest MAT parameter
 *   Lowest MDF                     Picks candidate with lowest MDF parameter
 *   Lowest AGI                     Picks candidate with lowest AGI parameter
 *   Lowest LUK                     Picks candidate with lowest LUK parameter
 *   ----------------------------   -------------------------------------------
 *   Lowest HIT                     Picks candidate with lowest HIT parameter
 *   Lowest EVA                     Picks candidate with lowest EVA parameter
 *   Lowest CRI                     Picks candidate with lowest CRI parameter
 *   Lowest CEV                     Picks candidate with lowest CEV parameter
 *   Lowest MEV                     Picks candidate with lowest MEV parameter
 *   Lowest MRF                     Picks candidate with lowest MRF parameter
 *   Lowest CNT                     Picks candidate with lowest CNT parameter
 *   Lowest HRG                     Picks candidate with lowest HRG parameter
 *   Lowest MRG                     Picks candidate with lowest MRG parameter
 *   Lowest TRG                     Picks candidate with lowest TRG parameter
 *   ----------------------------   -------------------------------------------
 *   Lowest TGR                     Picks candidate with lowest TGR parameter
 *   Lowest GRD                     Picks candidate with lowest GRD parameter
 *   Lowest REC                     Picks candidate with lowest REC parameter
 *   Lowest PHA                     Picks candidate with lowest PHA parameter
 *   Lowest MCR                     Picks candidate with lowest MCR parameter
 *   Lowest TCR                     Picks candidate with lowest TCR parameter
 *   Lowest PDR                     Picks candidate with lowest PDR parameter
 *   Lowest MDR                     Picks candidate with lowest MDR parameter
 *   Lowest FDR                     Picks candidate with lowest FDR parameter
 *   Lowest EXR                     Picks candidate with lowest EXR parameter
 *   ----------------------------   -------------------------------------------
 *   Lowest State Count             Picks candidate with least states (any)
 *   Lowest Positive State Count    Picks candidate with least positive states
 *   Lowest Negative State Count    Picks candidate with least negative states
 *   *Note: These require VisuMZ_1_SkillsStatesCore
 *   ----------------------------   -------------------------------------------
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: A.I. General Settings
 * ============================================================================
 *
 * These settings determine the global settings for general Battle A.I. usage.
 *
 * ---
 * 
 * A.I. Style
 * 
 *   Actor Style:
 *   - Which A.I. style do you want for referenced actors to use?
 *   - This does not apply to non-referenced actors.
 * 
 *   Enemy Style:
 *   - Which A.I. style do you want for enemies to use?
 * 
 *   Refer to the A.I. Styles list for a list of valid styles.
 * 
 * ---
 *
 * A.I. Level
 * 
 *   Actor A.I. Level:
 *   - Default A.I. level used for actor A.I.
 *   - Levels: 0-100. Higher is stricter.
 * 
 *   Enemy A.I. Level:
 *   - Default A.I. level used for enemy A.I.
 *   - Levels: 0-100. Higher is stricter.
 *
 * ---
 *
 * A.I. Ratings
 * 
 *   Actor Rating Variance:
 *   - How much to allow variance from the A.I. rating by?
 *   - 0 for no variance. Higher numbers for more variance.
 * 
 *   Enemy Rating Variance:
 *   - How much to allow variance from the A.I. rating by?
 *   - 0 for no variance. Higher numbers for more variance.
 *
 * ---
 *
 * Reference
 * 
 *   Actor => AI Reference:
 *   - Which enemy A.I. should the actor reference by default?
 *   - Use 0 for no references.
 *
 * ---
 *
 * Knowledge
 * 
 *   Learn Knowledge:
 *   - Requires enemies/actors to test the knowledge of the opponents before
 *     using specific conditions.
 * 
 *   Unknown Element Rate:
 *   - What should A.I. treat unknown element rates as?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: A.I. Default Conditions
 * ============================================================================
 *
 * You can set certain conditions to be used as defaults for all skills that
 * lack the <All AI Conditions> and <Any AI Conditions>. If either of those
 * notetags exist, none of these defaults will be used for those skills. These
 * settings will allow you to set both 'All' and 'Any' conditions for defaults.
 *
 * ---
 *
 * Enable?
 * 
 *   All Conditions:
 *   - Create default 'ALL' conditions for all skills without any AI notetags?
 * 
 *   Any Conditions:
 *   - Create default 'ANY' conditions for all skills without any AI notetags?
 *
 * ---
 *
 * HP Damage
 * MP Damage
 * HP Recover
 * MP Recover
 * HP Drain
 * MP Drain
 * 
 *   All Conditions:
 *   - Default 'ALL' conditions used for related skills.
 * 
 *   Any Conditions:
 *   - Default 'ANY' conditions used for related skills.
 *
 * ---
 *
 * Add State
 * Remove State
 * 
 *   All Conditions:
 *   - Default 'ALL' conditions used for related skills.
 *   - %1 - Dynamic values (ie state ID's).
 * 
 *   Any Conditions:
 *   - Default 'ANY' conditions used for related skills.
 *   - %1 - Dynamic values (ie state ID's).
 *
 * ---
 *
 * Add Buff
 * Remove Buff
 * Add Debuff
 * Remove Debuff
 * 
 *   All Conditions:
 *   - Default 'ANY' conditions used for related skills.
 *   - %1 - Dynamic values (ie param's).
 * 
 *   Any Conditions:
 *   - Default 'ALL' conditions used for related skills.
 *   - %1 - Dynamic values (ie state ID's).
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: A.I. => TGR Weight Settings
 * ============================================================================
 *
 * These Plugin Parameters allow you to set whether or not you'd like for 
 * weight influence when deciding targets for actions and how much to influence
 * the TGR weight by.
 *
 * ---
 *
 * Weight
 * 
 *   Element Rate => TGR:
 *   - Makes all A.I. consider elemental rates when considering TGR weight
 *     by default?
 * 
 *     Influence Rate:
 *     - This determines the default level of influence elemental rates have on
 *       TGR weight.
 * 
 *   EVA Rate => TGR:
 *   - Makes all A.I. consider EVA rates when considering TGR weight
 *     by default?
 * 
 *     Influence Rate:
 *     - This determines the default level of influence EVA rates have on
 *       TGR weight.
 * 
 *   MEV Rate => TGR:
 *   - Makes all A.I. consider MEV rates when considering TGR weight
 *     by default?
 * 
 *   Influence Rate:
 *   - This determines the default level of influence MEV rates have on
 *     TGR weight.
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
 * Version 1.08: April 16, 2021
 * * Feature Update!
 * ** Cached randomization seeds should no longer conflict with certain scope
 *    types. Update made by Irina.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.07: January 22, 2021
 * * Bug Fixes!
 * ** <AI Target: x> notetags should no longer crashes. Fix made by Irina.
 * 
 * Version 1.06: January 8, 2021
 * * Feature Update!
 * ** For those using classic mode with a variance level of 0, action lists
 *    will be better shuffled to provide more variation between selected
 *    skills. Update made by Irina.
 * 
 * Version 1.05: December 25, 2020
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetag added by Yanfly!
 * *** <AI Target: type>
 * **** Bypasses TGR influence in favor of picking a specific target out of a
 *      group of valid targets (does not pick from outside the valid target
 *      group) for a skill target. Read documentation to see targeting types.
 * 
 * Version 1.04: December 18, 2020
 * * Documentation Update!
 * ** Added documentation for notetag <Reference AI: Enemy id>
 * *** - Actors are only able to use skills they would normally have access to.
 *       - Actors need to have LEARNED the skill.
 *       - Actors need to be able to access the skill's SKILL TYPE.
 *       - Actors need to have the RESOURCES to pay for the skill.
 *     - If you cannot figure out why an auto battle actor cannot use a
 *       specific skill, turn OFF auto battle and see if you can use the skill
 *       normally.
 * 
 * Version 1.03: December 4, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.02: November 1, 2020
 * * Bug Fixes!
 * ** Charmed battlers will no longer vanish when attack one another. Fix made
 *    by Yanfly.
 * 
 * Version 1.01: October 18, 2020
 * * Bug Fixes!
 * ** <All AI Conditiosn> and <Any AI Conditions> notetags are now fixed and
 *    should work properly. Fix made by Yanfly.
 *
 * Version 1.00: September 30, 2020
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
 * @param BattleAI
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
 * @text A.I. General Settings
 * @type struct<General>
 * @desc General settings pertaining to A.I.
 * @default {"AIStyle":"","ActorStyleAI:str":"classic","EnemyStyleAI:str":"classic","AILevel":"","ActorAILevel:num":"100","EnemyAILevel:num":"100","AIRating":"","ActorRatingVariance:num":"1","EnemyRatingVariance:num":"3","Reference":"","ActorAIReference:num":"0","Knowledge":"","LearnKnowledge:eval":"true","UnknownElementRate:num":"1.00"}
 *
 * @param Default:struct
 * @text A.I. Default Conditions
 * @type struct<Default>
 * @desc Give certain types of skills default conditions.
 * @default {"Enable?":"","EnableAllCon:eval":"true","EnableAnyCon:eval":"true","HpDamage":"","HpDamageAll:json":"\"\"","HpDamageAny:json":"\"Always\"","MpDamage":"","MpDamageAll:json":"\"Target MP > 0\"","MpDamageAny:json":"\"\"","HpRecover":"","HpRecoverAll:json":"\"\"","HpRecoverAny:json":"\"Target HP < Target MaxHP\"","MpRecover":"","MpRecoverAll:json":"\"\"","MpRecoverAny:json":"\"Target MP < Target MaxMP\"","HpDrain":"","HpDrainAll:json":"\"\"","HpDrainAny:json":"\"User HP < User MaxHP\"","MpDrain":"","MpDrainAll:json":"\"Target MP > 0\"","MpDrainAny:json":"\"\"","AddState":"","AddStateAll:json":"\"\"","AddStateAny:json":"\"Target Not State %1\\nTarget State %1 Turns <= 1\"","RemoveState":"","RemoveStateAll:json":"\"\"","RemoveStateAny:json":"\"Target Has State %1\"","AddBuff":"","AddBuffAll:json":"\"\"","AddBuffAny:json":"\"Target Not %1 Max Buff\\nTarget %1 Buff Turns <= 1\"","RemoveBuff":"","RemoveBuffAll:json":"\"\"","RemoveBuffAny:json":"\"Target Has %1 Buff\"","AddDebuff":"","AddDebuffAll:json":"\"\"","AddDebuffAny:json":"\"Target Not %1 Max Debuff\\nTarget %1 Debuff Turns <= 1\"","RemoveDebuff":"","RemoveDebuffAll:json":"\"\"","RemoveDebuffAny:json":"\"Target Has %1 Debuff\""}
 *
 * @param Weight:struct
 * @text A.I. => TGR Weight
 * @type struct<Weight>
 * @desc How do certain properties translate to TGR weight?
 * @default {"ElementTgr:eval":"true","ElementTgrRate:num":"1.25","EvaTgr:eval":"true","EvaTgrRate:num":"1.50","MevTgr:eval":"true","MevTgrRate:num":"2.00"}
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
 * A.I. General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param AIStyle
 * @text A.I. Style
 *
 * @param ActorStyleAI:str
 * @text Actor Style
 * @parent AIStyle
 * @type select
 * @option Classic (Rating-Based with Rating Variance)
 * @value classic
 * @option Gambit (Order-Based, Ignores Rating System)
 * @value gambit
 * @option Casual (Random but follows A.I. Conditions)
 * @value casual
 * @option Random (Pure Random, ignores A.I. Conditions)
 * @value random
 * @desc Which A.I. style do you want for referenced actors to use?
 * This does not apply to non-referenced actors.
 * @default classic
 *
 * @param EnemyStyleAI:str
 * @text Enemy Style
 * @parent AIStyle
 * @type select
 * @option Classic (Rating-Based with Rating Variance)
 * @value classic
 * @option Gambit (Order-Based, Ignores Rating System)
 * @value gambit
 * @option Casual (Random but follows A.I. Conditions)
 * @value casual
 * @option Random (Pure Random, ignores A.I. Conditions)
 * @value random
 * @desc Which A.I. style do you want for enemies to use?
 * @default classic
 *
 * @param AILevel
 * @text A.I. Level
 *
 * @param ActorAILevel:num
 * @text Actor A.I. Level
 * @parent AILevel
 * @type number
 * @min 0
 * @max 100
 * @desc Default A.I. level used for actor A.I.
 * Levels: 0-100. Higher is stricter.
 * @default 100
 *
 * @param EnemyAILevel:num
 * @text Enemy A.I. Level
 * @parent AILevel
 * @type number
 * @min 0
 * @max 100
 * @desc Default A.I. level used for enemy A.I.
 * Levels: 0-100. Higher is stricter.
 * @default 100
 *
 * @param AIRating
 * @text A.I. Ratings
 *
 * @param ActorRatingVariance:num
 * @text Actor Rating Variance
 * @parent AIRating
 * @type number
 * @min 0
 * @max 9
 * @desc How much to allow variance from the A.I. rating by?
 * 0 for no variance. Higher numbers for more variance.
 * @default 1
 *
 * @param EnemyRatingVariance:num
 * @text Enemy Rating Variance
 * @parent AIRating
 * @type number
 * @min 0
 * @max 9
 * @desc How much to allow variance from the A.I. rating by?
 * 0 for no variance. Higher numbers for more variance.
 * @default 3
 *
 * @param Reference
 *
 * @param ActorAIReference:num
 * @text Actor => AI Reference
 * @parent Reference
 * @type enemy
 * @desc Which enemy A.I. should the actor reference by default?
 * Use 0 for no references.
 * @default 0
 *
 * @param Knowledge
 *
 * @param LearnKnowledge:eval
 * @text Learn Knowledge
 * @parent Knowledge
 * @type boolean
 * @on Require
 * @off Don't Require
 * @desc Requires enemies/actors to test the knowledge of
 * the opponents before using specific conditions.
 * @default true
 *
 * @param UnknownElementRate:num
 * @text Unknown Element Rate
 * @parent LearnKnowledge:eval
 * @desc What should A.I. treat unknown element rates as?
 * @default 1.00
 *
 */
/* ----------------------------------------------------------------------------
 * A.I. Default Conditions
 * ----------------------------------------------------------------------------
 */
/*~struct~Default:
 *
 * @param Enable?
 *
 * @param EnableAllCon:eval
 * @text All Conditions
 * @parent Enable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Create default 'ALL' conditions for all skills
 * without any AI notetags?
 * @default true
 *
 * @param EnableAnyCon:eval
 * @text Any Conditions
 * @parent Enable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Create default 'ANY' conditions for all skills
 * without any AI notetags?
 * @default true
 *
 * @param HpDamage
 * @text HP Damage
 * 
 * @param HpDamageAll:json
 * @text All Conditions
 * @parent HpDamage
 * @type note
 * @desc Default 'ALL' conditions used for HP damage skills.
 * @default ""
 * 
 * @param HpDamageAny:json
 * @text Any Conditions
 * @parent HpDamage
 * @type note
 * @desc Default 'ANY' conditions used for HP damage skills.
 * @default "Always"
 *
 * @param MpDamage
 * @text MP Damage
 * 
 * @param MpDamageAll:json
 * @text All Conditions
 * @parent MpDamage
 * @type note
 * @desc Default 'ALL' conditions used for MP damage skills.
 * @default "Target MP > 0"
 *
 * @param MpDamageAny:json
 * @text Any Conditions
 * @parent MpDamage
 * @type note
 * @desc Default 'ANY' conditions used for MP damage skills.
 * @default ""
 *
 * @param HpRecover
 * @text HP Recover
 * 
 * @param HpRecoverAll:json
 * @text All Conditions
 * @parent HpRecover
 * @type note
 * @desc Default 'ALL' conditions used for HP recovery skills.
 * @default ""
 *
 * @param HpRecoverAny:json
 * @text Any Conditions
 * @parent HpRecover
 * @type note
 * @desc Default 'ANY' conditions used for HP recovery skills.
 * @default "Target HP < Target MaxHP"
 *
 * @param MpRecover
 * @text MP Recover
 * 
 * @param MpRecoverAll:json
 * @text All Conditions
 * @parent MpRecover
 * @type note
 * @desc Default 'ALL' conditions used for MP recovery skills.
 * @default ""
 *
 * @param MpRecoverAny:json
 * @text Any Conditions
 * @parent MpRecover
 * @type note
 * @desc Default 'ANY' conditions used for MP recovery skills.
 * @default "Target MP < Target MaxMP"
 *
 * @param HpDrain
 * @text HP Drain
 * 
 * @param HpDrainAll:json
 * @text All Conditions
 * @parent HpDrain
 * @type note
 * @desc Default 'ALL' conditions used for HP drain skills.
 * @default ""
 *
 * @param HpDrainAny:json
 * @text Any Conditions
 * @parent HpDrain
 * @type note
 * @desc Default 'ANY' conditions used for HP drain skills.
 * @default "User HP < User MaxHP"
 *
 * @param MpDrain
 * @text MP Drain
 * 
 * @param MpDrainAll:json
 * @text All Conditions
 * @parent MpDrain
 * @type note
 * @desc Default 'ALL' conditions used for MP drain skills.
 * @default "Target MP > 0"
 *
 * @param MpDrainAny:json
 * @text Any Conditions
 * @parent MpDrain
 * @type note
 * @desc Default 'ANY' conditions used for MP drain skills.
 * @default ""
 *
 * @param AddState
 * @text Add State
 * 
 * @param AddStateAll:json
 * @text All Conditions
 * @parent AddState
 * @type note
 * @desc Default 'ALL' conditions used for adding states.
 * %1 - Dynamic values (ie state ID's).
 * @default ""
 *
 * @param AddStateAny:json
 * @text Any Conditions
 * @parent AddState
 * @type note
 * @desc Default 'ANY' conditions used for adding states.
 * %1 - Dynamic values (ie state ID's).
 * @default "Target Not State %1\nTarget State %1 Turns <= 1"
 *
 * @param RemoveState
 * @text Remove State
 * 
 * @param RemoveStateAll:json
 * @text All Conditions
 * @parent RemoveState
 * @type note
 * @desc Default 'ALL' conditions used for removing states.
 * %1 - Dynamic values (ie state ID's).
 * @default ""
 *
 * @param RemoveStateAny:json
 * @text Any Conditions
 * @parent RemoveState
 * @type note
 * @desc Default 'ANY' conditions used for removing states.
 * %1 - Dynamic values (ie state ID's).
 * @default "Target Has State %1"
 *
 * @param AddBuff
 * @text Add Buff
 * 
 * @param AddBuffAll:json
 * @text All Conditions
 * @parent AddBuff
 * @type note
 * @desc Default 'ALL' conditions used for adding buffs.
 * %1 - Dynamic values (ie param names).
 * @default ""
 *
 * @param AddBuffAny:json
 * @text Any Conditions
 * @parent AddBuff
 * @type note
 * @desc Default 'ANY' conditions used for adding buffs.
 * %1 - Dynamic values (ie param's).
 * @default "Target Not %1 Max Buff\nTarget %1 Buff Turns <= 1"
 *
 * @param RemoveBuff
 * @text Remove Buff
 * 
 * @param RemoveBuffAll:json
 * @text All Conditions
 * @parent RemoveBuff
 * @type note
 * @desc Default 'ALL' conditions used for removing buffs.
 * %1 - Dynamic values (ie state ID's).
 * @default ""
 *
 * @param RemoveBuffAny:json
 * @text Any Conditions
 * @parent RemoveBuff
 * @type note
 * @desc Default 'ANY' conditions used for removing buffs.
 * %1 - Dynamic values (ie state ID's).
 * @default "Target Has %1 Buff"
 *
 * @param AddDebuff
 * @text Add Debuff
 * 
 * @param AddDebuffAll:json
 * @text All Conditions
 * @parent AddDebuff
 * @type note
 * @desc Default 'ALL' conditions used for adding debuffs.
 * %1 - Dynamic values (ie state ID's).
 * @default ""
 *
 * @param AddDebuffAny:json
 * @text Any Conditions
 * @parent AddDebuff
 * @type note
 * @desc Default 'ANY' conditions used for adding debuffs.
 * %1 - Dynamic values (ie state ID's).
 * @default "Target Not %1 Max Debuff\nTarget %1 Debuff Turns <= 1"
 *
 * @param RemoveDebuff
 * @text Remove Debuff
 * 
 * @param RemoveDebuffAll:json
 * @text All Conditions
 * @parent RemoveDebuff
 * @type note
 * @desc Default 'ALL' conditions used for removing debuffs.
 * %1 - Dynamic values (ie state ID's).
 * @default ""
 *
 * @param RemoveDebuffAny:json
 * @text Any Conditions
 * @parent RemoveDebuff
 * @type note
 * @desc Default 'ANY' conditions used for removing debuffs.
 * %1 - Dynamic values (ie state ID's).
 * @default "Target Has %1 Debuff"
 *
 */
/* ----------------------------------------------------------------------------
 * A.I. => TGR Weight Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Weight:
 *
 * @param ElementTgr:eval
 * @text Element Rate => TGR
 * @type boolean
 * @on Influence
 * @off Normal
 * @desc Makes all A.I. consider elemental rates when considering
 * TGR weight by default?
 * @default true
 *
 * @param ElementTgrRate:num
 * @text Influence Rate
 * @parent ElementTgr:eval
 * @desc This determines the default level of influence elemental
 * rates have on TGR weight.
 * @default 1.25
 *
 * @param EvaTgr:eval
 * @text EVA Rate => TGR
 * @type boolean
 * @on Influence
 * @off Normal
 * @desc Makes all A.I. consider EVA rates when considering
 * TGR weight by default?
 * @default true
 *
 * @param EvaTgrRate:num
 * @text Influence Rate
 * @parent EvaTgr:eval
 * @desc This determines the default level of influence EVA
 * rates have on TGR weight.
 * @default 1.50
 *
 * @param MevTgr:eval
 * @text MEV Rate => TGR
 * @type boolean
 * @on Influence
 * @off Normal
 * @desc Makes all A.I. consider MEV rates when considering
 * TGR weight by default?
 * @default true
 *
 * @param MevTgrRate:num
 * @text Influence Rate
 * @parent MevTgr:eval
 * @desc This determines the default level of influence MEV
 * rates have on TGR weight.
 * @default 2.00
 *
 */
//=============================================================================

const _0x27a7=['Weight','meetsPartyLevelCondition','STRUCT','_subject','makeDefaultConditions','status','forceValidTargets','EFFECT_ADD_DEBUFF','canGuard','gjiMw','GjKyi','actions','cxjgR','HRG','BattleManager_startAction','hasXParamAIKnowledge','LUK','1838930SuMmRL','RollB','MRF','EnemyRatingVariance','NUM','aIdJL','elementInfluence','level','jZLxA','VisuMZ_4_AggroControl','version','makeTargets','HP%','meetsHpCondition','MpRecover%1','random','usableSkills','YUioZ','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','EFFECT_RECOVER_HP','CRI','isActor','Game_Unit_initialize','Kxept','EnemyAILevel','nOddX','PEvZu','value','EnableAnyCon','GRD','PBSCe','addElementAIKnowledge','EFFECT_ADD_STATE','LearnKnowledge','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','ZOdtC','isConfused','HpDrain%1','niWgy','hpRate','includes','aliveMembers','filterForcedTargeting','max','iBeHI','action','dataId','MAXMP','jpjey','HIT','MTUUb','buff','MAT','102MCvSzj','allCondition','determineActionByAIisStillValid','aiTarget','_applyAIForcedTargetFilters','ActorAILevel','nkGQi','evaInfluenceRate','isEnemy','getAllConditions','prototype','vtGDX','PFJWA','return\x200','ilKQv','_regexp','RAsni','1560225IDRCTN','kCJKR','edQqF','currentAction','format','ConvertParams','selectAllActionsGambit','eohnI','Game_BattlerBase_sparam','FUNC','vFxIF','Game_Troop_setup','map','isPhysical','_buffTurns','EvaTgr','aiApplyEvaTgrInfluenceRate','indexOf','MAX_SAFE_INTEGER','iOoSD','QYkWK','iEkDk','anyCondition','autoRemovalTiming','MpDamage%1','EFFECT_REMOVE_DEBUFF','MpDrain%1','isStateAffected','EQfzd','RemoveState%1','enemyId','initialize','PHA','note','HpRecover%1','VlsXi','applyBattleAI','ATK','friendsUnit','currentClass','FIRST','Default','EvaTgrRate','push','xfnpO','MDR','Game_Action_apply','split','casual','applyBattleAiTgrInfluences','startAction','getDefaultAllConditions','DraRE','General','deadMembers','MCR','isPlaytest','mpRate','STR','FOLah','remove','REC','aJase','%1\x20%2\x20%3','gambit','CEV','isForOpponent','EDuxG','_aiKnowledge','RlmJR','TGR','isActionValid','GHPfT','effects','meetsMpCondition','lslwa','opponentsUnit','isMagical','YhLuO','owCph','DmPkk','Game_Temp_initialize','elementInfluenceRate','canAttack','enemy','UALgb','ZjyWU','skillId','PsnfS','mevRates','jPXzk','getStateIdWithName','BattleAI','ANKur','elementKnowledgeRate','xGhHz','makeAutoBattleActions','EFFECT_REMOVE_BUFF','qokPU','addAIKnowledge','selectAction','AddState%1','sparam','MAXTP','TP%','aiStyle','Game_Action_makeTargets','3187pDOVKz','Game_Unit_randomTarget','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','ElementTgr','meetsStateCondition','elementRates','382mDvbHx','damage','attackSkillId','aiElementTgr','aiTgrInfluence','FDR','lWZMN','EFFECT_REMOVE_STATE','doesTargetMeetCondition','slice','pgnDg','LAST','RuvqS','aiMevTgr','ARRAYEVAL','hasElementAIKnowledge','UMIni','attackElements','exit','noCondition','DxRsc','ZYcHl','meetsSwitchCondition','aiLevel','setSkill','BPCZb','Game_Actor_makeAutoBattleActions','AddBuff%1','MDF','determineLineValue','initBattleAI','getDefaultAnyConditions','POSITIVE\x20STATE\x20COUNT','numActions','isAggroAffected','meetsCondition','clearAiTgrInfluence','makeDeepCopy','WbQgC','_elementIDs','EVA','toLowerCase','getAnyConditions','mev','13956AfbJYe','aiApplyMevTgrInfluenceRate','makeValidTargets','value1','elements','doesTargetMeetAllConditions','NEGATIVE','RemoveBuff%1','isConditionalAI','Any','addXParamAIKnowledge','states','actorId','isDetermineActionByAI','classic','doesAIApplyEvaTgrInfluence','setAiTgrInfluences','VisuMZ_1_ElementStatusCore','randomTarget','jTMPF','XLTBT','UaRbu','clearAIKnowledge','EFFECT_RECOVER_MP','length','mevInfluenceRate','bypassElementTgr','elementRate','ovgfA','apply','4rgzLJQ','_aiTgrInfluence','clamp','AddDebuff%1','evaRates','doesTargetMeetAIConditions','xqgIC','SsneD','emaPS','createFilterTarget','135644FDIFjy','ALWAYS','subject','value2','maxTp','user','ARRAYNUM','NcfZi','isForDeadFriend','code','hyxpu','selectAllActions','HhDAX','CNT','rating','filter','63283QDcXmJ','setup','DEF','lcpge','TmEJQ','tpRate','parse','statesByCategory','WxJER','FaAAx','kJqJB','POSITIVE','VisuMZ_1_SkillsStatesCore','JSON','qELgi','hasForcedTargets','bypassEvaTgr','lJCgx','isSkill','param','doesAIApplyElementalTgrInfluence','tUvzw','JcSGt','ptnZN','sDNwT','aiKnowledge','PDR','highestTgrMember','HpDamage%1','match','isForAliveFriend','shars','referenceEnemyForAI','elementId','passesAILevel','ymlze','pmuCI','mhp','eva','guardSkillId','ActorRatingVariance','determineNewValidAIAction','Poamr','xparam','RPgXo','DAAhk','log','reduce','isMax%1Affected','MAXHP','item','UnknownElementRate','EnemyStyleAI','ARRAYJSON','BlUHX','_forceValidTargets','makeAutoBattleActionsWithEnemyAI','jgEyB','itemTargetCandidates','setEnemyAction','_stateIDs','replace','aiApplyElementalTgrInfluenceRate','trim','This\x20is\x20a\x20static\x20class','MP%','EFBZD','JvSFz','call','charAt','doesTargetMeetAnyConditions','needsSelection','luqTh','All','actor','OpyFo','foJXt','selectAllActionsClassic','1096551khCkYy','name','aiRatingVariance','bypassMevTgr','RemoveDebuff%1','IlnQY','elementIds','ARRAYSTRUCT','AI\x20Manager\x20condition\x20cannot\x20be\x20met:\x20%1','Game_Enemy_isActionValid','vnhTY','is%1Affected','wQsOy','EVAL','ZtflB','VisuMZ_1_BattleCore','clearForcedTargets','ActorStyleAI','VisuMZ_2_AggroControlSystem','concat','ZMDsb','hasValidTargets','AI\x20Manager\x20could\x20not\x20determine\x20this\x20value:\x20%1','description','randomInt','forcedTargets','Settings','ShuffleArray','lSluY','toUpperCase','Game_Unit_aliveMembers','_stateTurns','AGI','YdRFX','LEVEL','doesAIApplyMevTgrInfluence','FJoaf','SnOkl','HFNkW','uuyoV','debuff','getElementIdWithName','selectAllActionsRandom','Game_Action_itemTargetCandidates','floor','aiEvaTgr'];function _0x2c2b(_0x370783,_0x4e3473){_0x370783=_0x370783-0x188;let _0x27a736=_0x27a7[_0x370783];return _0x27a736;}const _0x4c6e21=_0x2c2b;(function(_0x4994e3,_0x51b533){const _0x11b7f9=_0x2c2b;while(!![]){try{const _0x2071a0=-parseInt(_0x11b7f9(0x1fd))+parseInt(_0x11b7f9(0x1b7))+parseInt(_0x11b7f9(0x268))*-parseInt(_0x11b7f9(0x26e))+parseInt(_0x11b7f9(0x2b8))*-parseInt(_0x11b7f9(0x2c2))+parseInt(_0x11b7f9(0x320))+-parseInt(_0x11b7f9(0x2d2))+-parseInt(_0x11b7f9(0x1ec))*-parseInt(_0x11b7f9(0x29a));if(_0x2071a0===_0x51b533)break;else _0x4994e3['push'](_0x4994e3['shift']());}catch(_0x53d3d5){_0x4994e3['push'](_0x4994e3['shift']());}}}(_0x27a7,0xee273));var label=_0x4c6e21(0x259),tier=tier||0x0,dependencies=[_0x4c6e21(0x32f)],pluginData=$plugins[_0x4c6e21(0x2d1)](function(_0x4f8bed){const _0x41531e=_0x4c6e21;return _0x4f8bed[_0x41531e(0x1ab)]&&_0x4f8bed['description'][_0x41531e(0x1df)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label]['Settings']||{},VisuMZ[_0x4c6e21(0x202)]=function(_0x12e020,_0x2f4961){const _0x195bd4=_0x4c6e21;for(const _0x127ec1 in _0x2f4961){if(_0x127ec1['match'](/(.*):(.*)/i)){if(_0x195bd4(0x32e)===_0x195bd4(0x231)){function _0x1cd782(){const _0x1487ad=_0x195bd4;if(_0x29c94e[_0x1487ad(0x1e4)]&&_0x261a88[_0x1487ad(0x1e4)][_0x1487ad(0x290)]())return 0x1;}}else{const _0x3d59ed=String(RegExp['$1']),_0x30f192=String(RegExp['$2'])[_0x195bd4(0x195)]()[_0x195bd4(0x311)]();let _0x2a151b,_0x428664,_0x338d85;switch(_0x30f192){case _0x195bd4(0x1bb):_0x2a151b=_0x2f4961[_0x127ec1]!==''?Number(_0x2f4961[_0x127ec1]):0x0;break;case _0x195bd4(0x2c8):_0x428664=_0x2f4961[_0x127ec1]!==''?JSON[_0x195bd4(0x2d8)](_0x2f4961[_0x127ec1]):[],_0x2a151b=_0x428664[_0x195bd4(0x209)](_0x470f3e=>Number(_0x470f3e));break;case _0x195bd4(0x32d):_0x2a151b=_0x2f4961[_0x127ec1]!==''?eval(_0x2f4961[_0x127ec1]):null;break;case _0x195bd4(0x27c):_0x428664=_0x2f4961[_0x127ec1]!==''?JSON[_0x195bd4(0x2d8)](_0x2f4961[_0x127ec1]):[],_0x2a151b=_0x428664[_0x195bd4(0x209)](_0x402137=>eval(_0x402137));break;case _0x195bd4(0x2df):_0x2a151b=_0x2f4961[_0x127ec1]!==''?JSON[_0x195bd4(0x2d8)](_0x2f4961[_0x127ec1]):'';break;case _0x195bd4(0x307):_0x428664=_0x2f4961[_0x127ec1]!==''?JSON[_0x195bd4(0x2d8)](_0x2f4961[_0x127ec1]):[],_0x2a151b=_0x428664[_0x195bd4(0x209)](_0x2de029=>JSON[_0x195bd4(0x2d8)](_0x2de029));break;case _0x195bd4(0x206):_0x2a151b=_0x2f4961[_0x127ec1]!==''?new Function(JSON[_0x195bd4(0x2d8)](_0x2f4961[_0x127ec1])):new Function(_0x195bd4(0x1f9));break;case'ARRAYFUNC':_0x428664=_0x2f4961[_0x127ec1]!==''?JSON[_0x195bd4(0x2d8)](_0x2f4961[_0x127ec1]):[],_0x2a151b=_0x428664['map'](_0x5b8896=>new Function(JSON[_0x195bd4(0x2d8)](_0x5b8896)));break;case _0x195bd4(0x237):_0x2a151b=_0x2f4961[_0x127ec1]!==''?String(_0x2f4961[_0x127ec1]):'';break;case'ARRAYSTR':_0x428664=_0x2f4961[_0x127ec1]!==''?JSON[_0x195bd4(0x2d8)](_0x2f4961[_0x127ec1]):[],_0x2a151b=_0x428664['map'](_0x12a1d8=>String(_0x12a1d8));break;case _0x195bd4(0x1a8):_0x338d85=_0x2f4961[_0x127ec1]!==''?JSON[_0x195bd4(0x2d8)](_0x2f4961[_0x127ec1]):{},_0x2a151b=VisuMZ[_0x195bd4(0x202)]({},_0x338d85);break;case _0x195bd4(0x327):_0x428664=_0x2f4961[_0x127ec1]!==''?JSON['parse'](_0x2f4961[_0x127ec1]):[],_0x2a151b=_0x428664[_0x195bd4(0x209)](_0x4e65fe=>VisuMZ['ConvertParams']({},JSON[_0x195bd4(0x2d8)](_0x4e65fe)));break;default:continue;}_0x12e020[_0x3d59ed]=_0x2a151b;}}}return _0x12e020;},(_0x47d244=>{const _0x200aa1=_0x4c6e21,_0x5ebc11=_0x47d244[_0x200aa1(0x321)];for(const _0x591871 of dependencies){if('TQlzz'!==_0x200aa1(0x1af)){if(!Imported[_0x591871]){if(_0x200aa1(0x1d5)==='pMGdL'){function _0x47a80b(){const _0xe2d328=_0x200aa1;_0x41bc5a[_0xe2d328(0x326)][_0xe2d328(0x228)](_0x31957d[_0xe2d328(0x304)]()['damage'][_0xe2d328(0x2f3)]);}}else{alert(_0x200aa1(0x1d9)[_0x200aa1(0x201)](_0x5ebc11,_0x591871)),SceneManager[_0x200aa1(0x280)]();break;}}}else{function _0x583501(){const _0x287ce2=_0x200aa1;return _0x143498[_0x287ce2(0x223)]()[_0x287ce2(0x1e0)]()[_0x287ce2(0x2b2)];}}}const _0x560f77=_0x47d244[_0x200aa1(0x18f)];if(_0x560f77[_0x200aa1(0x2ef)](/\[Version[ ](.*?)\]/i)){if(_0x200aa1(0x2ce)===_0x200aa1(0x1e9)){function _0x4e0fed(){const _0x217dd9=_0x200aa1;_0x39e4e4[_0x217dd9(0x326)]=_0x3f963b[_0x217dd9(0x326)][_0x217dd9(0x18b)](_0x54baa0[_0x217dd9(0x27f)]());}}else{const _0x69c8b9=Number(RegExp['$1']);if(_0x69c8b9!==VisuMZ[label][_0x200aa1(0x1c1)]){if('RPgXo'===_0x200aa1(0x2fe))alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x200aa1(0x201)](_0x5ebc11,_0x69c8b9)),SceneManager[_0x200aa1(0x280)]();else{function _0x16de36(){const _0x3e6a0e=_0x200aa1;return this[_0x3e6a0e(0x28d)](_0x10c227);}}}}}if(_0x560f77[_0x200aa1(0x2ef)](/\[Tier[ ](\d+)\]/i)){const _0x2e918e=Number(RegExp['$1']);if(_0x2e918e<tier){if('qjnJB'!==_0x200aa1(0x31e))alert(_0x200aa1(0x26a)[_0x200aa1(0x201)](_0x5ebc11,_0x2e918e,tier)),SceneManager[_0x200aa1(0x280)]();else{function _0x440825(){const _0x1e80f2=_0x200aa1;return _0x1e80f2(0x2a8);}}}else{if('jZLxA'!==_0x200aa1(0x1bf)){function _0x4cb2d3(){const _0x1ceb7c=_0x200aa1,_0x3ef119=_0x267c39[_0x1ceb7c(0x191)]();_0xc8a174=_0x1994b9[_0x1ceb7c(0x2d1)](_0x21ae47=>_0x3ef119['includes'](_0x21ae47));}}else tier=Math[_0x200aa1(0x1e2)](_0x2e918e,tier);}}VisuMZ[_0x200aa1(0x202)](VisuMZ[label][_0x200aa1(0x192)],_0x47d244['parameters']);})(pluginData);function AIManager(){const _0xa30316=_0x4c6e21;throw new Error(_0xa30316(0x312));}AIManager[_0x4c6e21(0x1fb)]={'noCondition':/<NO AI (?:TARGETS|CONDITION|CONDITIONS)>/i,'allCondition':/<ALL AI (?:TARGETS|CONDITION|CONDITIONS)>\s*([\s\S]*)\s*<\/ALL AI (?:TARGETS|CONDITION|CONDITIONS)>/i,'anyCondition':/<ANY AI (?:TARGETS|CONDITION|CONDITIONS)>\s*([\s\S]*)\s*<\/ANY AI (?:TARGETS|CONDITION|CONDITIONS)>/i,'bypassElementTgr':/<(?:NO|BYPASS) AI (?:ELEMENT|ELEMENTAL|ELEMENT RATE) INFLUENCE>/i,'bypassEvaTgr':/<(?:NO|BYPASS) AI (?:EVA|EVASION) INFLUENCE>/i,'bypassMevTgr':/<(?:NO|BYPASS) AI (?:MEV|MAGIC EVASION) INFLUENCE>/i,'aiElementTgr':/<AI (?:ELEMENT|ELEMENTAL|ELEMENT RATE) INFLUENCE: (.*)>/i,'aiEvaTgr':/<AI (?:EVA|EVASION) INFLUENCE: (.*)>/i,'aiMevTgr':/<AI (?:MEV|MAGIC EVASION) INFLUENCE: (.*)>/i,'aiLevel':/<AI LEVEL: (\d+)>/i,'aiRatingVariance':/<AI RATING VARIANCE: (\d+)>/i,'aiTarget':/<AI (?:TARGET|TARGETS):[ ](.*)>/i,'aiStyle':/<AI STYLE:[ ](.*)>/i},AIManager[_0x4c6e21(0x2a2)]=function(_0x357f7c){const _0x26a09e=_0x4c6e21;if(!_0x357f7c)return![];return this[_0x26a09e(0x1f5)](_0x357f7c)[_0x26a09e(0x2b2)]>0x0||this[_0x26a09e(0x298)](_0x357f7c)[_0x26a09e(0x2b2)]>0x0;},AIManager['getAllConditions']=function(_0x289a06){const _0x211fec=_0x4c6e21;if(_0x289a06['note'][_0x211fec(0x2ef)](AIManager[_0x211fec(0x1fb)][_0x211fec(0x281)]))return[];else return _0x289a06[_0x211fec(0x21e)]['match'](AIManager[_0x211fec(0x1fb)][_0x211fec(0x1ed)])?String(RegExp['$1'])[_0x211fec(0x22c)](/[\r\n]+/)[_0x211fec(0x239)](''):this[_0x211fec(0x230)](_0x289a06);},AIManager[_0x4c6e21(0x298)]=function(_0x4238f9){const _0x417472=_0x4c6e21;if(_0x4238f9[_0x417472(0x21e)]['match'](AIManager[_0x417472(0x1fb)][_0x417472(0x281)]))return[];else return _0x4238f9[_0x417472(0x21e)]['match'](AIManager[_0x417472(0x1fb)][_0x417472(0x213)])?String(RegExp['$1'])[_0x417472(0x22c)](/[\r\n]+/)['remove'](''):this['getDefaultAnyConditions'](_0x4238f9);},AIManager[_0x4c6e21(0x230)]=function(_0x4d3b8c){const _0xb90a1e=_0x4c6e21;if(!VisuMZ['BattleAI'][_0xb90a1e(0x192)][_0xb90a1e(0x226)]['EnableAllCon'])return[];if(_0x4d3b8c[_0xb90a1e(0x21e)][_0xb90a1e(0x2ef)](AIManager[_0xb90a1e(0x1fb)][_0xb90a1e(0x213)]))return[];return this['makeDefaultConditions'](_0x4d3b8c,_0xb90a1e(0x31b));},AIManager[_0x4c6e21(0x28d)]=function(_0x4de15e){const _0x2a18a3=_0x4c6e21;if(!VisuMZ[_0x2a18a3(0x259)][_0x2a18a3(0x192)]['Default'][_0x2a18a3(0x1d3)])return[];if(_0x4de15e['note'][_0x2a18a3(0x2ef)](AIManager[_0x2a18a3(0x1fb)][_0x2a18a3(0x1ed)]))return[];return this[_0x2a18a3(0x1aa)](_0x4de15e,_0x2a18a3(0x2a3));},AIManager['makeDefaultConditions']=function(_0x3b662e,_0x365842){const _0x25f36e=_0x4c6e21;if(!_0x3b662e)return[];const _0x180020=VisuMZ[_0x25f36e(0x259)][_0x25f36e(0x192)][_0x25f36e(0x226)],_0x39f380=[_0x25f36e(0x303),_0x25f36e(0x1e6),_0x25f36e(0x222),_0x25f36e(0x2d4),'MAT',_0x25f36e(0x28a),_0x25f36e(0x198),_0x25f36e(0x1b6)],_0x47923c=_0x3b662e[_0x25f36e(0x26f)]['type'],_0x705885=_0x3b662e[_0x25f36e(0x246)];let _0x1e51e4=[],_0x5b9773='',_0xf5007c='';switch(_0x47923c){case 0x1:_0x5b9773='HpDamage%1'[_0x25f36e(0x201)](_0x365842),_0xf5007c=_0x180020[_0x5b9773],_0x1e51e4=_0x1e51e4[_0x25f36e(0x18b)](_0xf5007c[_0x25f36e(0x22c)](/[\r\n]+/)[_0x25f36e(0x239)](''));break;case 0x2:_0x5b9773=_0x25f36e(0x215)[_0x25f36e(0x201)](_0x365842),_0xf5007c=_0x180020[_0x5b9773],_0x1e51e4=_0x1e51e4[_0x25f36e(0x18b)](_0xf5007c['split'](/[\r\n]+/)[_0x25f36e(0x239)](''));break;case 0x3:_0x5b9773=_0x25f36e(0x21f)[_0x25f36e(0x201)](_0x365842),_0xf5007c=_0x180020[_0x5b9773],_0x1e51e4=_0x1e51e4[_0x25f36e(0x18b)](_0xf5007c[_0x25f36e(0x22c)](/[\r\n]+/)['remove'](''));break;case 0x4:_0x5b9773='MpRecover%1'[_0x25f36e(0x201)](_0x365842),_0xf5007c=_0x180020[_0x5b9773],_0x1e51e4=_0x1e51e4['concat'](_0xf5007c[_0x25f36e(0x22c)](/[\r\n]+/)[_0x25f36e(0x239)](''));break;case 0x5:_0x5b9773=_0x25f36e(0x1dc)[_0x25f36e(0x201)](_0x365842),_0xf5007c=_0x180020[_0x5b9773],_0x1e51e4=_0x1e51e4[_0x25f36e(0x18b)](_0xf5007c['split'](/[\r\n]+/)[_0x25f36e(0x239)](''));break;case 0x6:_0x5b9773=_0x25f36e(0x217)[_0x25f36e(0x201)](_0x365842),_0xf5007c=_0x180020[_0x5b9773],_0x1e51e4=_0x1e51e4[_0x25f36e(0x18b)](_0xf5007c['split'](/[\r\n]+/)[_0x25f36e(0x239)](''));break;}for(const _0x4b043d of _0x705885){if(!_0x4b043d)continue;switch(_0x4b043d[_0x25f36e(0x2cb)]){case Game_Action[_0x25f36e(0x1ca)]:if(_0x4b043d[_0x25f36e(0x29d)]>0x0||_0x4b043d[_0x25f36e(0x2c5)]>0x0){if(_0x25f36e(0x19c)===_0x25f36e(0x253)){function _0x54532f(){const _0x2a6662=_0x25f36e;return this[_0x2a6662(0x20d)]()>0x0;}}else _0x5b9773=_0x25f36e(0x21f)[_0x25f36e(0x201)](_0x365842),_0xf5007c=_0x180020[_0x5b9773],_0x1e51e4=_0x1e51e4[_0x25f36e(0x18b)](_0xf5007c['split'](/[\r\n]+/)[_0x25f36e(0x239)](''));}else{if(_0x4b043d[_0x25f36e(0x29d)]<0x0||_0x4b043d[_0x25f36e(0x2c5)]<0x0){if('cWAbM'!=='vQiFQ')_0x5b9773=_0x25f36e(0x2ee)[_0x25f36e(0x201)](_0x365842),_0xf5007c=_0x180020[_0x5b9773],_0x1e51e4=_0x1e51e4['concat'](_0xf5007c['split'](/[\r\n]+/)[_0x25f36e(0x239)](''));else{function _0x5552a9(){const _0x4876df=_0x25f36e;for(const _0x252438 of _0x252ce3){_0x566108[_0x4876df(0x1d6)](_0x252438,this);}}}}}break;case Game_Action[_0x25f36e(0x2b1)]:if(_0x4b043d[_0x25f36e(0x29d)]>0x0||_0x4b043d[_0x25f36e(0x2c5)]>0x0)_0x5b9773=_0x25f36e(0x1c5)[_0x25f36e(0x201)](_0x365842),_0xf5007c=_0x180020[_0x5b9773],_0x1e51e4=_0x1e51e4[_0x25f36e(0x18b)](_0xf5007c[_0x25f36e(0x22c)](/[\r\n]+/)['remove'](''));else(_0x4b043d[_0x25f36e(0x29d)]<0x0||_0x4b043d[_0x25f36e(0x2c5)]<0x0)&&(_0x5b9773=_0x25f36e(0x215)[_0x25f36e(0x201)](_0x365842),_0xf5007c=_0x180020[_0x5b9773],_0x1e51e4=_0x1e51e4[_0x25f36e(0x18b)](_0xf5007c[_0x25f36e(0x22c)](/[\r\n]+/)[_0x25f36e(0x239)]('')));break;case Game_Action[_0x25f36e(0x1d7)]:if(_0x4b043d['dataId']===0x0)continue;_0x5b9773=_0x25f36e(0x262)[_0x25f36e(0x201)](_0x365842),_0xf5007c=_0x180020[_0x5b9773][_0x25f36e(0x201)](_0x4b043d[_0x25f36e(0x1e5)]),_0x1e51e4=_0x1e51e4[_0x25f36e(0x18b)](_0xf5007c[_0x25f36e(0x22c)](/[\r\n]+/)[_0x25f36e(0x239)](''));break;case Game_Action[_0x25f36e(0x275)]:_0x5b9773=_0x25f36e(0x21a)['format'](_0x365842),_0xf5007c=_0x180020[_0x5b9773][_0x25f36e(0x201)](_0x4b043d[_0x25f36e(0x1e5)]),_0x1e51e4=_0x1e51e4[_0x25f36e(0x18b)](_0xf5007c['split'](/[\r\n]+/)[_0x25f36e(0x239)](''));break;case Game_Action['EFFECT_ADD_BUFF']:_0x5b9773=_0x25f36e(0x289)[_0x25f36e(0x201)](_0x365842),_0xf5007c=_0x180020[_0x5b9773][_0x25f36e(0x201)](_0x39f380[_0x4b043d['dataId']]),_0x1e51e4=_0x1e51e4[_0x25f36e(0x18b)](_0xf5007c['split'](/[\r\n]+/)[_0x25f36e(0x239)](''));break;case Game_Action[_0x25f36e(0x1ad)]:_0x5b9773=_0x25f36e(0x2bb)[_0x25f36e(0x201)](_0x365842),_0xf5007c=_0x180020[_0x5b9773][_0x25f36e(0x201)](_0x39f380[_0x4b043d[_0x25f36e(0x1e5)]]),_0x1e51e4=_0x1e51e4[_0x25f36e(0x18b)](_0xf5007c[_0x25f36e(0x22c)](/[\r\n]+/)[_0x25f36e(0x239)](''));break;case Game_Action[_0x25f36e(0x25e)]:_0x5b9773=_0x25f36e(0x2a1)[_0x25f36e(0x201)](_0x365842),_0xf5007c=_0x180020[_0x5b9773][_0x25f36e(0x201)](_0x39f380[_0x4b043d[_0x25f36e(0x1e5)]]),_0x1e51e4=_0x1e51e4[_0x25f36e(0x18b)](_0xf5007c[_0x25f36e(0x22c)](/[\r\n]+/)[_0x25f36e(0x239)](''));break;case Game_Action[_0x25f36e(0x216)]:_0x5b9773=_0x25f36e(0x324)[_0x25f36e(0x201)](_0x365842),_0xf5007c=_0x180020[_0x5b9773][_0x25f36e(0x201)](_0x39f380[_0x4b043d[_0x25f36e(0x1e5)]]),_0x1e51e4=_0x1e51e4[_0x25f36e(0x18b)](_0xf5007c[_0x25f36e(0x22c)](/[\r\n]+/)['remove'](''));break;}}return _0x1e51e4;},AIManager[_0x4c6e21(0x1ac)]=function(_0x5512fb,_0x5efc57){const _0x3caf73=_0x4c6e21;this['_forceValidTargets']=this[_0x3caf73(0x29c)](_0x5512fb,_0x5efc57);},AIManager[_0x4c6e21(0x188)]=function(){this['_forceValidTargets']=[];},AIManager[_0x4c6e21(0x191)]=function(){const _0x2e094a=_0x4c6e21;return this[_0x2e094a(0x309)]=this[_0x2e094a(0x309)]||[],this[_0x2e094a(0x309)];},AIManager[_0x4c6e21(0x2e1)]=function(){const _0x2a5996=_0x4c6e21;return this[_0x2a5996(0x191)]()[_0x2a5996(0x2b2)]>0x0;},AIManager['hasValidTargets']=function(_0x1cdd67,_0x4267ca){const _0x1b1f4=_0x4c6e21;if(!_0x1cdd67)return![];if(!_0x4267ca)return![];if(!DataManager[_0x1b1f4(0x2e4)](_0x4267ca))return;if(this[_0x1b1f4(0x2a2)](_0x4267ca))return this[_0x1b1f4(0x29c)](_0x1cdd67,_0x4267ca)['length']>=0x1;else{if('wWhJw'===_0x1b1f4(0x27e)){function _0x1067fd(){const _0x3a44e9=_0x1b1f4,_0xdad725=_0x53810d['indexOf'](_0x5558ff(_0xaa68f1['$2'])['toUpperCase']()['trim']()),_0x3a877f=_0x13cf78(_0x11de1d['$3'])['toLowerCase']()[_0x3a44e9(0x311)](),_0x1d6a48=_0xcb7042(_0x7b8d6e['$1'])[_0x3a44e9(0x2ef)](/(?:USER|SUBJECT)/i)?_0x401b96:_0xec4d,_0xbc3ce6=_0x3a44e9(0x302)[_0x3a44e9(0x201)](_0x3a877f[_0x3a44e9(0x317)](0x0)[_0x3a44e9(0x195)]()+_0x3a877f[_0x3a44e9(0x277)](0x1));return!_0x1d6a48[_0xbc3ce6](_0xdad725);}}else return!![];}},AIManager[_0x4c6e21(0x29c)]=function(_0x411ba9,_0x380904){const _0x368f1d=_0x4c6e21;let _0x4bf889=[];if(this[_0x368f1d(0x2a2)](_0x380904)){if(_0x368f1d(0x25a)!=='ANKur'){function _0x2caf0a(){const _0x206460=_0x368f1d;_0x1067ed[_0x206460(0x1ac)](this[_0x206460(0x2c4)](),this[_0x206460(0x304)]()),this[_0x206460(0x319)]()&&_0x1f8313[_0x206460(0x1e1)](this[_0x206460(0x2c4)](),this[_0x206460(0x304)]());}}else{const _0x19a741=this[_0x368f1d(0x1f5)](_0x380904),_0x7bacf=this[_0x368f1d(0x298)](_0x380904),_0x1f7348=new Game_Action(_0x411ba9);_0x1f7348[_0x368f1d(0x286)](_0x380904['id']);let _0x40158b=[];if(Imported[_0x368f1d(0x18a)]&&_0x1f7348[_0x368f1d(0x290)]()){const _0x5c1631=_0x1f7348[_0x368f1d(0x23f)]()?_0x411ba9[_0x368f1d(0x249)]():_0x411ba9[_0x368f1d(0x223)]();_0x40158b=[_0x5c1631[_0x368f1d(0x2ed)]()];}else{if(_0x1f7348['isForEveryone']())_0x40158b=$gameParty[_0x368f1d(0x1e0)]()[_0x368f1d(0x18b)]($gameTroop['aliveMembers']());else{if(_0x1f7348['isForOpponent']())_0x40158b=_0x411ba9[_0x368f1d(0x249)]()[_0x368f1d(0x1e0)]();else{if(_0x1f7348[_0x368f1d(0x2ca)]())_0x40158b=_0x411ba9[_0x368f1d(0x223)]()[_0x368f1d(0x233)]();else{if(_0x1f7348[_0x368f1d(0x2f0)]()){if('ihUEv'!=='ihUEv'){function _0x53d2d1(){const _0xcbbc02=_0x368f1d;return _0x22883b['prototype']['meetsCondition'][_0xcbbc02(0x316)](this,_0x4ad290);}}else _0x40158b=_0x411ba9[_0x368f1d(0x223)]()[_0x368f1d(0x1e0)]();}}}}}_0x4bf889=_0x40158b[_0x368f1d(0x2d1)](_0x5ba1f9=>this[_0x368f1d(0x2bd)](_0x411ba9,_0x5ba1f9,_0x380904,_0x19a741,_0x7bacf));}}return _0x4bf889;},AIManager[_0x4c6e21(0x2bd)]=function(_0xc42d76,_0x3bebc1,_0x2bed52,_0x252077,_0x2cde6a){const _0x583562=_0x4c6e21;return this[_0x583562(0x29f)](_0xc42d76,_0x3bebc1,_0x2bed52,_0x252077)&&this[_0x583562(0x318)](_0xc42d76,_0x3bebc1,_0x2bed52,_0x2cde6a);},AIManager[_0x4c6e21(0x29f)]=function(_0x4256ba,_0x3d9040,_0x43b19b,_0x2a2f6a){const _0x22853b=_0x4c6e21;if(_0x2a2f6a[_0x22853b(0x2b2)]<=0x0)return!![];for(const _0x388fa1 of _0x2a2f6a){if('dHJYA'===_0x22853b(0x194)){function _0x3477ce(){const _0x553ba5=_0x22853b,_0x5cfeae=_0x3e447f(_0x23c7c1['$1'])*0.01;return _0x57e67d[_0x553ba5(0x1c6)]()<_0x5cfeae;}}else{if(!_0x388fa1)continue;if(_0x388fa1['length']<=0x0)continue;if(!this['passesAILevel'](_0x4256ba))return!![];if(!this['doesTargetMeetCondition'](_0x4256ba,_0x3d9040,_0x43b19b,_0x388fa1))return![];}}return!![];},AIManager['doesTargetMeetAnyConditions']=function(_0x505f77,_0x48fb37,_0x54e741,_0x5ee0c8){const _0x5ed46e=_0x4c6e21;if(_0x5ee0c8['length']<=0x0)return!![];for(const _0x555892 of _0x5ee0c8){if(_0x5ed46e(0x2f5)===_0x5ed46e(0x2f5)){if(!_0x555892)continue;if(_0x555892['length']<=0x0)continue;if(!this[_0x5ed46e(0x2f4)](_0x505f77))return!![];if(this[_0x5ed46e(0x276)](_0x505f77,_0x48fb37,_0x54e741,_0x555892))return!![];}else{function _0x433058(){return _0x2e79ba[_0x233389['getEnemyIdWithName'](_0x5cc89a(_0x379a3d['$1']))];}}}return![];},AIManager[_0x4c6e21(0x2f4)]=function(_0x3d501e){const _0x44d6ba=_0x4c6e21,_0x46cb76=_0x3d501e[_0x44d6ba(0x285)]();return Math[_0x44d6ba(0x190)](0x64)<_0x46cb76;},AIManager[_0x4c6e21(0x276)]=function(_0x318b4e,_0x942e6f,_0x867bc3,_0x1f5278){const _0x2725ca=_0x4c6e21,_0x2ad08f=['MAXHP','MAXMP','ATK',_0x2725ca(0x2d4),'MAT',_0x2725ca(0x28a),_0x2725ca(0x198),_0x2725ca(0x1b6)];if(_0x1f5278['toUpperCase']()[_0x2725ca(0x311)]()===_0x2725ca(0x2c3))return!![];const _0x548275=_0x318b4e;if(_0x1f5278[_0x2725ca(0x2ef)](/(.*) (\>=|\>|===|!==|\<|\<=) (.*)/i)){const _0x41f523=[String(RegExp['$1']),String(RegExp['$2']),String(RegExp['$3'])],_0x3ececb=this['determineLineValue'](_0x318b4e,_0x942e6f,_0x867bc3,_0x41f523[0x0]),_0x422970=_0x41f523[0x1],_0x39876a=this['determineLineValue'](_0x318b4e,_0x942e6f,_0x867bc3,_0x41f523[0x2]);window[_0x2725ca(0x2c7)]=window['a']=window['b']=undefined;const _0x37cb56=_0x2725ca(0x23c)[_0x2725ca(0x201)](_0x3ececb,_0x422970,_0x39876a);try{return eval(_0x37cb56);}catch(_0x518d2b){if($gameTemp['isPlaytest']()){if('PsnfS'===_0x2725ca(0x255))console[_0x2725ca(0x300)](_0x2725ca(0x328)[_0x2725ca(0x201)](_0x1f5278)),console[_0x2725ca(0x300)](_0x518d2b);else{function _0x52ae1b(){const _0x3a56d3=_0x2725ca,_0x3c295c=this[_0x3a56d3(0x1cc)]()?this['actor']()[_0x3a56d3(0x21e)]:this['enemy']()[_0x3a56d3(0x21e)];if(_0x3c295c['match'](_0x3b22a6[_0x3a56d3(0x1fb)][_0x3a56d3(0x323)]))return![];else{if(_0x3c295c[_0x3a56d3(0x2ef)](_0x19e434[_0x3a56d3(0x1fb)]['aiMevTgr']))return this[_0x3a56d3(0x29b)]()>0x0;}}}}return!![];}}else{if(_0x1f5278['match'](/(\d+\.?\d*)([%％]) CHANCE/i)){if(_0x2725ca(0x1f2)===_0x2725ca(0x1f2)){const _0x4c1e5e=Number(RegExp['$1'])*0.01;return Math['random']()<_0x4c1e5e;}else{function _0x442221(){const _0x2f0d5a=_0x2725ca;return _0x1d8ff1[_0x2f0d5a(0x20f)];}}}else{if(_0x1f5278['match'](/SWITCH (\d+) (ON|OFF|TRUE|FALSE)/i)){const _0x2efcac=Number(RegExp['$1']),_0x909f0=String(RegExp['$2'])[_0x2725ca(0x297)](),_0xd45ac7=_0x909f0[_0x2725ca(0x2ef)](/ON|TRUE/i);return $gameSwitches[_0x2725ca(0x1d2)](_0x2efcac)===_0xd45ac7;}else{if(_0x1f5278[_0x2725ca(0x2ef)](/(.*) IS ACTOR/i)){const _0x4a7a9b=String(RegExp['$1'])['match'](/(?:USER|SUBJECT)/i)?_0x548275:_0x942e6f;return _0x4a7a9b[_0x2725ca(0x1cc)]();}else{if(_0x1f5278[_0x2725ca(0x2ef)](/(.*) IS ENEMY/i)){if(_0x2725ca(0x199)!==_0x2725ca(0x199)){function _0x3f031f(){const _0xf58266=_0x2725ca,_0x270756=_0x4b752a(_0x339bca['$1']);_0x270756!==_0x41c05f[_0x536902][_0xf58266(0x1c1)]&&(_0x474fa5(_0xf58266(0x1c9)[_0xf58266(0x201)](_0x54005c,_0x270756)),_0x306892[_0xf58266(0x280)]());}}else{const _0x8a52f3=String(RegExp['$1'])['match'](/(?:USER|SUBJECT)/i)?_0x548275:_0x942e6f;return _0x8a52f3[_0x2725ca(0x1f4)]();}}else{if(_0x1f5278[_0x2725ca(0x2ef)](/(.*) HAS STATE (\d+)/i)){if(_0x2725ca(0x1da)!==_0x2725ca(0x220)){const _0x36731c=$dataStates[Number(RegExp['$2'])],_0x12ce39=String(RegExp['$1'])[_0x2725ca(0x2ef)](/(?:USER|SUBJECT)/i)?_0x548275:_0x942e6f;return _0x12ce39['states']()['includes'](_0x36731c);}else{function _0x209025(){const _0x51580a=_0x2725ca;_0x39a9b3[_0x51580a(0x259)][_0x51580a(0x288)][_0x51580a(0x316)](this);}}}else{if(_0x1f5278[_0x2725ca(0x2ef)](/(.*) HAS STATE (.*)/i)){const _0x491901=$dataStates[DataManager[_0x2725ca(0x258)](RegExp['$2'])],_0x30d9d5=String(RegExp['$1'])['match'](/(?:USER|SUBJECT)/i)?_0x548275:_0x942e6f;return _0x30d9d5['states']()['includes'](_0x491901);}else{if(_0x1f5278[_0x2725ca(0x2ef)](/(.*) NOT STATE (\d+)/i)){const _0x3b0b75=$dataStates[Number(RegExp['$2'])],_0x550e61=String(RegExp['$1'])[_0x2725ca(0x2ef)](/(?:USER|SUBJECT)/i)?_0x548275:_0x942e6f;return!_0x550e61['states']()[_0x2725ca(0x1df)](_0x3b0b75);}else{if(_0x1f5278['match'](/(.*) NOT STATE (.*)/i)){const _0x17b3c6=$dataStates[DataManager['getStateIdWithName'](RegExp['$2'])],_0x11173c=String(RegExp['$1'])[_0x2725ca(0x2ef)](/(?:USER|SUBJECT)/i)?_0x548275:_0x942e6f;return!_0x11173c[_0x2725ca(0x2a5)]()[_0x2725ca(0x1df)](_0x17b3c6);}else{if(_0x1f5278['match'](/(.*) HAS (MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) (BUFF|DEBUFF)/i)){const _0x2b0b2b=_0x2ad08f[_0x2725ca(0x20e)](String(RegExp['$2'])[_0x2725ca(0x195)]()[_0x2725ca(0x311)]()),_0x4f9f4a=String(RegExp['$3'])[_0x2725ca(0x297)]()[_0x2725ca(0x311)](),_0x7dea11=String(RegExp['$1'])[_0x2725ca(0x2ef)](/(?:USER|SUBJECT)/i)?_0x548275:_0x942e6f,_0x15005b='is%1Affected'[_0x2725ca(0x201)](_0x4f9f4a['charAt'](0x0)[_0x2725ca(0x195)]()+_0x4f9f4a[_0x2725ca(0x277)](0x1));return _0x7dea11[_0x15005b](_0x2b0b2b);}else{if(_0x1f5278[_0x2725ca(0x2ef)](/(.*) HAS (MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) MAX (BUFF|DEBUFF)/i)){if('niWgy'!==_0x2725ca(0x1dd)){function _0x360f03(){return _0xe7bf42[_0x557152(_0x4e5296['$1'])];}}else{const _0x389a8e=_0x2ad08f[_0x2725ca(0x20e)](String(RegExp['$2'])['toUpperCase']()[_0x2725ca(0x311)]()),_0x4bdfae=String(RegExp['$3'])[_0x2725ca(0x297)]()[_0x2725ca(0x311)](),_0x160a4a=String(RegExp['$1'])[_0x2725ca(0x2ef)](/(?:USER|SUBJECT)/i)?_0x548275:_0x942e6f,_0x23c73d='isMax%1Affected'[_0x2725ca(0x201)](_0x4bdfae[_0x2725ca(0x317)](0x0)[_0x2725ca(0x195)]()+_0x4bdfae[_0x2725ca(0x277)](0x1));return _0x160a4a[_0x23c73d](_0x389a8e);}}else{if(_0x1f5278[_0x2725ca(0x2ef)](/(.*) NOT (MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) (BUFF|DEBUFF)/i)){if(_0x2725ca(0x207)===_0x2725ca(0x219)){function _0x1f15de(){if(_0x1600da&&_0x9f3c88['mp']>_0x5f4854['mp'])_0x246894=_0x43db83;if(_0x103558&&_0x5d4b5d['mp']<_0x1f60ec['mp'])_0x1cec11=_0x1e10bc;}}else{const _0x1f3dde=_0x2ad08f[_0x2725ca(0x20e)](String(RegExp['$2'])[_0x2725ca(0x195)]()[_0x2725ca(0x311)]()),_0x57f25c=String(RegExp['$3'])[_0x2725ca(0x297)]()[_0x2725ca(0x311)](),_0x3a6b61=String(RegExp['$1'])['match'](/(?:USER|SUBJECT)/i)?_0x548275:_0x942e6f,_0x3f1606=_0x2725ca(0x32b)[_0x2725ca(0x201)](_0x57f25c[_0x2725ca(0x317)](0x0)[_0x2725ca(0x195)]()+_0x57f25c['slice'](0x1));return!_0x3a6b61[_0x3f1606](_0x1f3dde);}}else{if(_0x1f5278[_0x2725ca(0x2ef)](/(.*) NOT (MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) MAX (BUFF|DEBUFF)/i)){const _0xf423bf=_0x2ad08f[_0x2725ca(0x20e)](String(RegExp['$2'])[_0x2725ca(0x195)]()[_0x2725ca(0x311)]()),_0x3660d3=String(RegExp['$3'])[_0x2725ca(0x297)]()[_0x2725ca(0x311)](),_0x5bc6c6=String(RegExp['$1'])[_0x2725ca(0x2ef)](/(?:USER|SUBJECT)/i)?_0x548275:_0x942e6f,_0x190faf='isMax%1Affected'[_0x2725ca(0x201)](_0x3660d3[_0x2725ca(0x317)](0x0)[_0x2725ca(0x195)]()+_0x3660d3[_0x2725ca(0x277)](0x1));return!_0x5bc6c6[_0x190faf](_0xf423bf);}}}}}}}}}}}}}return!![];},AIManager[_0x4c6e21(0x28b)]=function(_0x4ca86b,_0x46d2b9,_0x4ac474,_0x5e10d8){const _0x46666e=_0x4c6e21,_0x267776=[_0x46666e(0x303),_0x46666e(0x1e6),'ATK','DEF',_0x46666e(0x1eb),_0x46666e(0x28a),_0x46666e(0x198),_0x46666e(0x1b6)];window[_0x46666e(0x2c7)]=_0x4ca86b,window['a']=user,window['b']=_0x46d2b9;const _0x513441=_0x5e10d8,_0x41fd61=user[_0x46666e(0x249)]();let _0x32496d=_0x5e10d8[_0x46666e(0x2ef)](/(?:USER|SUBJECT)/i)?user:_0x46d2b9;_0x5e10d8=_0x5e10d8[_0x46666e(0x30f)](/\b(\d+)([%％])/gi,(_0x5abe9b,_0x1561ee)=>Number(_0x1561ee)*0.01);if(_0x5e10d8[_0x46666e(0x2ef)](/(?:VAR|VARIABLE) (\d+)/i)){if('RlmJR'===_0x46666e(0x242))return $gameVariables['value'](Number(RegExp['$1']));else{function _0x226efa(){const _0x1ce4ed=_0x46666e;this['isSkill']()&&this[_0x1ce4ed(0x2c4)]()[_0x1ce4ed(0x2a7)]()&&(_0x16de0b['forceValidTargets'](this[_0x1ce4ed(0x2c4)](),this[_0x1ce4ed(0x304)]()),this[_0x1ce4ed(0x319)]()&&_0x1bb55c[_0x1ce4ed(0x1e1)](this[_0x1ce4ed(0x2c4)](),this['item']()));_0x2ff308[_0x1ce4ed(0x2aa)](this[_0x1ce4ed(0x2c4)](),this);const _0x366f7b=_0x268303[_0x1ce4ed(0x259)]['Game_Action_makeTargets'][_0x1ce4ed(0x316)](this);return _0x3133cc[_0x1ce4ed(0x292)](),_0x18815f[_0x1ce4ed(0x188)](),_0x366f7b;}}}if(_0x5e10d8[_0x46666e(0x2ef)](/TEAM ALIVE MEMBERS/i)){if(_0x46666e(0x257)==='WKRLD'){function _0x484091(){const _0x112fb9=_0x46666e;_0xbbf994=_0x2663e7[_0x112fb9(0x223)]()[_0x112fb9(0x1e0)]();}}else return _0x32496d[_0x46666e(0x223)]()['aliveMembers']()['length'];}if(_0x5e10d8[_0x46666e(0x2ef)](/TEAM DEAD MEMBERS/i)){if(_0x46666e(0x1c8)===_0x46666e(0x1ff)){function _0x551abf(){return _0x21beff(_0xa73a5c['$1']);}}else return _0x32496d[_0x46666e(0x223)]()['deadMembers']()[_0x46666e(0x2b2)];}if(_0x5e10d8[_0x46666e(0x2ef)](/ELEMENT (\d+) RATE/i)){const _0x42432b=Number(RegExp['$1']);return this[_0x46666e(0x25b)](_0x4ca86b,_0x46d2b9,_0x32496d,_0x42432b);}else{if(_0x5e10d8['match'](/ELEMENT (.*) RATE/i)){const _0x1d07c1=DataManager[_0x46666e(0x1a1)](String(RegExp['$1']));return this[_0x46666e(0x25b)](_0x4ca86b,_0x46d2b9,_0x32496d,_0x1d07c1);}else{if(_0x5e10d8[_0x46666e(0x2ef)](/(.*) ELEMENT RATE/i)){if(_0x46666e(0x2f6)!=='pmuCI'){function _0x142eee(){_0x2dabad['hasElementAIKnowledge'](_0x2b16e3,this)&&(_0x5dadac*=this['elementRate'](_0x20cfbd)*_0x2579df['elementInfluenceRate']);}}else{const _0x49f1d7=DataManager['getElementIdWithName'](String(RegExp['$1']));return this[_0x46666e(0x25b)](_0x4ca86b,_0x46d2b9,_0x32496d,_0x49f1d7);}}}}if(_0x5e10d8[_0x46666e(0x2ef)](/(MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) (BUFF|DEBUFF) (?:LEVEL|STACK|STACKS)/i)){const _0xa82377=_0x267776[_0x46666e(0x20e)](String(RegExp['$1'])[_0x46666e(0x195)]()['trim']()),_0x458eec=String(RegExp['$2'])[_0x46666e(0x297)]()[_0x46666e(0x311)]();return _0x32496d[_0x46666e(0x1ea)](_0xa82377)*(_0x458eec==='buff'?0x1:-0x1);}if(_0x5e10d8['match'](/(MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) (BUFF|DEBUFF) (?:TURN|TURNS)/i)){if(_0x46666e(0x32a)!==_0x46666e(0x252)){const _0x5e3d4a=_0x267776[_0x46666e(0x20e)](String(RegExp['$1'])[_0x46666e(0x195)]()[_0x46666e(0x311)]()),_0x324080=String(RegExp['$2'])[_0x46666e(0x297)]()[_0x46666e(0x311)]();if(_0x324080==='buff'&&_0x32496d['isBuffAffected'](_0x5e3d4a)){if(_0x46666e(0x1f8)!==_0x46666e(0x1f8)){function _0xc35101(){const _0x78787f=_0x46666e;this[_0x78787f(0x2eb)]()[_0x2b1dd3]=this['aiKnowledge']()[_0x33972f]||[];const _0x17fba1=_0x25be1d[_0x78787f(0x1cc)]()?_0x489f75['actorId']():_0x1c300e['enemyId']();!this[_0x78787f(0x2eb)]()[_0x4929c0]['includes'](_0x17fba1)&&this[_0x78787f(0x2eb)]()[_0x3a85ae]['push'](_0x17fba1);}}else return _0x32496d[_0x46666e(0x20b)][_0x5e3d4a];}else{if(_0x324080===_0x46666e(0x1a0)&&_0x32496d['isDebuffAffected'](_0x5e3d4a))return _0x32496d[_0x46666e(0x20b)][_0x5e3d4a];}return 0x0;}else{function _0x2d65f4(){const _0x449b3f=_0x46666e;return _0x174534[_0x449b3f(0x2f7)];}}}if(_0x5e10d8[_0x46666e(0x2ef)](/STATE (\d+) (?:TURN|TURNS)/i)){if(_0x46666e(0x31a)===_0x46666e(0x31a)){const _0x28e7f6=Number(RegExp['$1']);if(_0x32496d[_0x46666e(0x218)](_0x28e7f6)){if(_0x46666e(0x19e)===_0x46666e(0x19e)){const _0xc77224=$dataStates[_0x28e7f6];if(_0xc77224&&_0xc77224[_0x46666e(0x214)]===0x0)return Number['MAX_SAFE_INTEGER'];else{if(_0x46666e(0x24c)!==_0x46666e(0x24c)){function _0x11c6ff(){const _0x3bbdef=_0x46666e;_0xd099bb=this[_0x3bbdef(0x309)][0x0];for(const _0x345287 of this[_0x3bbdef(0x309)]){if(_0xcaa51e&&_0x345287[_0x3bbdef(0x236)]()>_0x109cc2[_0x3bbdef(0x236)]())_0x409c17=_0x345287;if(_0x54be60&&_0x345287['mpRate']()<_0x3b9472[_0x3bbdef(0x236)]())_0x110076=_0x345287;}return _0x54fe1f;}}else return _0x32496d[_0x46666e(0x197)][_0x28e7f6]||0x0;}}else{function _0x5dbee4(){const _0x4fee60=_0x46666e;if(_0x470b80&&_0xaa91af[_0x4fee60(0x236)]()>_0x1524d8[_0x4fee60(0x236)]())_0x1a0d4d=_0x8d1839;if(_0x35c998&&_0x18fe5f[_0x4fee60(0x236)]()<_0x323465[_0x4fee60(0x236)]())_0x2473ce=_0x4cd82f;}}}else return _0x32496d[_0x46666e(0x2a5)]()[_0x46666e(0x1df)]($dataStates[_0x28e7f6])?Number[_0x46666e(0x20f)]:0x0;}else{function _0x38a6b2(){const _0x52c236=_0x1dc21b[_0x279b63(_0x1e8f05['$2'])],_0x5cfc3b=_0xdb08e7(_0x55cff9['$1'])['match'](/(?:USER|SUBJECT)/i)?_0x26a6b7:_0xa021d1;return!_0x5cfc3b['states']()['includes'](_0x52c236);}}}else{if(_0x5e10d8[_0x46666e(0x2ef)](/STATE (.*) (?:TURN|TURNS)/i)){const _0x2b59e2=DataManager['getStateIdWithName'](RegExp['$1']);if(_0x32496d[_0x46666e(0x218)](_0x2b59e2)){const _0x42c2ef=$dataStates[_0x2b59e2];if(_0x42c2ef&&_0x42c2ef['autoRemovalTiming']===0x0){if(_0x46666e(0x1d1)===_0x46666e(0x1d1))return Number[_0x46666e(0x20f)];else{function _0x87222f(){const _0x50357a=_0x46666e;let _0x1e9700=_0x349497['makeValidTargets'](_0x3109cf,_0x4cacd4);_0x59fedf=_0x39d0d8[_0x50357a(0x2d1)](_0x185203=>_0x1e9700['includes'](_0x185203));}}}else{if('hQJyq'!==_0x46666e(0x2c9))return _0x32496d[_0x46666e(0x197)][_0x2b59e2]||0x0;else{function _0x13a57a(){const _0x5db7d8=_0x46666e,_0x49e43f=_0x4d2226[_0x5db7d8(0x1a1)](_0x314785(_0xe8db11['$1']));return this[_0x5db7d8(0x25b)](_0x1442d4,_0x36f953,_0x53aa1c,_0x49e43f);}}}}else{if(_0x32496d[_0x46666e(0x2a5)]()[_0x46666e(0x1df)]($dataStates[_0x2b59e2])){if(_0x46666e(0x314)===_0x46666e(0x314))return Number[_0x46666e(0x20f)];else{function _0x1f55bb(){const _0x26d32d=_0x46666e;return this[_0x26d32d(0x309)]=this[_0x26d32d(0x309)]||[],this[_0x26d32d(0x309)];}}}else return 0x0;}}}if(_0x5e10d8[_0x46666e(0x2ef)](/\bHP([%％])/i)){if(_0x46666e(0x2ad)!==_0x46666e(0x2ea))return _0x32496d[_0x46666e(0x1de)]();else{function _0x1d936f(){const _0x4cb5c6=_0x46666e;this[_0x4cb5c6(0x309)]=[_0x5f27d3];}}}else{if(_0x5e10d8[_0x46666e(0x2ef)](/\bMP([%％])/i))return _0x32496d[_0x46666e(0x236)]();else{if(_0x5e10d8[_0x46666e(0x2ef)](/\bTP([%％])/i))return _0x32496d[_0x46666e(0x2d7)]();else{if(_0x5e10d8[_0x46666e(0x2ef)](/\b(?:MAXHP|MAX HP|MHP)\b/i)){if(_0x46666e(0x2e9)==='vribZ'){function _0x58679d(){const _0xac8e52=_0x46666e;return this[_0xac8e52(0x29f)](_0x417d1a,_0x253403,_0x4a6c02,_0x2212df)&&this[_0xac8e52(0x318)](_0x34d380,_0x3d1988,_0x137d15,_0x1a34bf);}}else return _0x32496d[_0x46666e(0x2f7)];}else{if(_0x5e10d8[_0x46666e(0x2ef)](/\b(?:MAXMP|MAX MP|MMP)\b/i)){if(_0x46666e(0x278)!==_0x46666e(0x278)){function _0x321927(){const _0x52f080=_0x46666e;_0x1fbb7f('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x52f080(0x201)](_0x2af1a8,_0x527996,_0x312278)),_0x1ab125[_0x52f080(0x280)]();}}else return _0x32496d['mmp'];}else{if(_0x5e10d8[_0x46666e(0x2ef)](/\b(?:MAXTP|MAX TP|MTP)\b/i))return _0x32496d[_0x46666e(0x2c6)]();}}}}}if(_0x5e10d8[_0x46666e(0x2ef)](/\b(LEVEL|HP|MP|TP|ATK|DEF|MAT|MDF|AGI|LUK)\b/i)){if(_0x46666e(0x24b)==='YhLuO')return _0x32496d[String(RegExp['$1'])[_0x46666e(0x297)]()[_0x46666e(0x311)]()];else{function _0xe5af27(){const _0x3f0fdf=_0x46666e;return _0x148e99(_0x108e3b['$1'])['toLowerCase']()[_0x3f0fdf(0x311)]();}}}try{return eval(_0x5e10d8);}catch(_0x486989){if(_0x46666e(0x25c)===_0x46666e(0x18c)){function _0x584e15(){return _0x122f8f;}}else return $gameTemp[_0x46666e(0x235)]()&&(console[_0x46666e(0x300)](_0x46666e(0x18e)[_0x46666e(0x201)](_0x513441)),console[_0x46666e(0x300)](_0x486989)),0x0;}},AIManager[_0x4c6e21(0x25b)]=function(_0x47b0a7,_0x1b4f5a,_0x296109,_0x59ad7e){const _0x255891=_0x4c6e21;if(_0x47b0a7['isActor']()===_0x296109[_0x255891(0x1cc)]()){if(_0x255891(0x2d5)===_0x255891(0x2d5))return _0x296109[_0x255891(0x2b5)](_0x59ad7e);else{function _0x187029(){const _0x3724e1=_0x255891,_0x313882=_0x1f2e80[_0x3724e1(0x20e)](_0x4c532b(_0x4d43f5['$1'])[_0x3724e1(0x195)]()[_0x3724e1(0x311)]()),_0x8014f8=_0x195d2d(_0x24895e['$2'])[_0x3724e1(0x297)]()[_0x3724e1(0x311)]();return _0x5570a5['buff'](_0x313882)*(_0x8014f8===_0x3724e1(0x1ea)?0x1:-0x1);}}}else{if(_0x296109['opponentsUnit']()[_0x255891(0x27d)](_0x59ad7e,_0x296109)){if(_0x255891(0x27a)!==_0x255891(0x27a)){function _0x28741e(){const _0x8d2e8e=_0x255891,_0x1c46e6=this[_0x8d2e8e(0x251)]()['note'];if(_0x1c46e6['match'](_0xcafdc0[_0x8d2e8e(0x1fb)][_0x8d2e8e(0x266)]))return _0x44d416(_0x40ee03['$1'])[_0x8d2e8e(0x297)]()[_0x8d2e8e(0x311)]();return _0x373cdf[_0x8d2e8e(0x259)][_0x8d2e8e(0x192)][_0x8d2e8e(0x232)]['EnemyStyleAI'];}}else return _0x296109[_0x255891(0x2b5)](_0x59ad7e);}else{if('FipBh'===_0x255891(0x31d)){function _0x55b033(){const _0x499438=_0x255891;if(_0x47a664&&_0x471bde[_0x499438(0x2d7)]()>_0x2b5d3d[_0x499438(0x2d7)]())_0x3ddacc=_0x526b10;if(_0x12129d&&_0x163035[_0x499438(0x2d7)]()<_0x284da8['tpRate']())_0x5701cd=_0x2e7947;}}else return VisuMZ[_0x255891(0x259)]['Settings'][_0x255891(0x232)][_0x255891(0x305)];}}},AIManager[_0x4c6e21(0x1e1)]=function(_0x12fbc5,_0x41d2c3){const _0x36915d=_0x4c6e21;if(!_0x41d2c3)return;if(!_0x41d2c3['note']['match'](AIManager[_0x36915d(0x1fb)][_0x36915d(0x1ef)]))return;const _0x56e2f0=String(RegExp['$1'])['toUpperCase']()[_0x36915d(0x311)]();let _0x57666c=this[_0x36915d(0x2c1)](_0x12fbc5,_0x56e2f0);if(_0x57666c){if('umqKz'!=='tNkbL')this[_0x36915d(0x309)]=[_0x57666c];else{function _0x405dee(){const _0x298043=_0x36915d;if(_0x9296a8&&_0x4b880c[_0x298043(0x2a5)]()[_0x298043(0x2b2)]>_0x2ec1e1[_0x298043(0x2a5)]()[_0x298043(0x2b2)])_0x43c4fe=_0x47456e;if(_0x52331a&&_0x112963[_0x298043(0x2a5)]()[_0x298043(0x2b2)]<_0x4fbf68[_0x298043(0x2a5)]()['length'])_0x20decb=_0x325d56;}}}},AIManager['createFilterTarget']=function(_0x514491,_0x1ab982){const _0x434053=_0x4c6e21,_0xc87651=[_0x434053(0x303),_0x434053(0x1e6),_0x434053(0x222),'DEF',_0x434053(0x1eb),_0x434053(0x28a),_0x434053(0x198),_0x434053(0x1b6)],_0x46a7a0=[_0x434053(0x1e8),_0x434053(0x296),_0x434053(0x1cb),_0x434053(0x23e),'MEV',_0x434053(0x1b9),_0x434053(0x2cf),_0x434053(0x1b3),'MRG','TRG'],_0x2d00ee=[_0x434053(0x243),_0x434053(0x1d4),_0x434053(0x23a),_0x434053(0x21d),_0x434053(0x234),'TCR',_0x434053(0x2ec),_0x434053(0x22a),_0x434053(0x273),'EXR'];let _0xee34d8=null;if(_0x1ab982==='USER'){if(this[_0x434053(0x309)][_0x434053(0x1df)](_0x514491)){if('BnJMU'===_0x434053(0x1e7)){function _0x51969d(){const _0x3da330=_0x434053;_0x44ee56[_0x3da330(0x1f6)]['determineNewValidAIAction']['call'](this);if(this[_0x3da330(0x28f)]()>0x0){const _0x283437=this['enemy']()['actions'][_0x3da330(0x2d1)](_0x1f2d59=>this[_0x3da330(0x244)](_0x1f2d59));_0x283437[_0x3da330(0x2b2)]>0x0&&this['selectAllActions'](_0x283437);}}}else return _0x514491;}}else{if(_0x1ab982===_0x434053(0x225))return this[_0x434053(0x309)][0x0];else{if(_0x1ab982===_0x434053(0x279))return this['_forceValidTargets'][this[_0x434053(0x309)][_0x434053(0x2b2)]-0x1];else{if(_0x1ab982['match'](/(HIGHEST|LOWEST)[ ](.*)/i)){const _0x3e26fd=String(RegExp['$1'])[_0x434053(0x195)]()[_0x434053(0x311)]()==='highest',_0xb49e0e=!_0x3e26fd,_0x57118d=String(RegExp['$2'])[_0x434053(0x195)]()[_0x434053(0x311)]();if(_0xc87651[_0x434053(0x1df)](_0x57118d)){const _0x53c27c=_0xc87651[_0x434053(0x20e)](_0x57118d);_0xee34d8=this[_0x434053(0x309)][0x0];for(const _0x284eb5 of this[_0x434053(0x309)]){if(_0x434053(0x19d)!=='xjjog'){if(_0x3e26fd&&_0x284eb5[_0x434053(0x2e5)](_0x53c27c)>_0xee34d8[_0x434053(0x2e5)](_0x53c27c))_0xee34d8=_0x284eb5;if(_0xb49e0e&&_0x284eb5[_0x434053(0x2e5)](_0x53c27c)<_0xee34d8[_0x434053(0x2e5)](_0x53c27c))_0xee34d8=_0x284eb5;}else{function _0x543571(){const _0x324cde=_0x434053;return _0x46379d[_0x324cde(0x1f6)][_0x324cde(0x26c)][_0x324cde(0x316)](this,_0x16376c);}}}return _0xee34d8;}if(_0x46a7a0[_0x434053(0x1df)](_0x57118d)){if(_0x434053(0x229)===_0x434053(0x308)){function _0x31774b(){const _0x512df0=_0x434053;return this[_0x512df0(0x309)][this[_0x512df0(0x309)]['length']-0x1];}}else{const _0x307d8c=_0x46a7a0[_0x434053(0x20e)](_0x57118d);_0xee34d8=this[_0x434053(0x309)][0x0];for(const _0x4c7280 of this[_0x434053(0x309)]){if(_0x3e26fd&&_0x4c7280[_0x434053(0x2fd)](_0x307d8c)>_0xee34d8[_0x434053(0x2fd)](_0x307d8c))_0xee34d8=_0x4c7280;if(_0xb49e0e&&_0x4c7280[_0x434053(0x2fd)](_0x307d8c)<_0xee34d8[_0x434053(0x2fd)](_0x307d8c))_0xee34d8=_0x4c7280;}return _0xee34d8;}}if(_0x2d00ee[_0x434053(0x1df)](_0x57118d)){const _0x31baa4=_0x2d00ee[_0x434053(0x20e)](_0x57118d);_0xee34d8=this[_0x434053(0x309)][0x0];for(const _0x45dd11 of this[_0x434053(0x309)]){if(_0x434053(0x2e0)===_0x434053(0x1d0)){function _0x93f53e(){const _0x2e3451=_0x434053;if(!_0x43eb90)return![];if(!_0x165b4c)return![];if(!_0x5e1ab4[_0x2e3451(0x2e4)](_0x35be9c))return;return this[_0x2e3451(0x2a2)](_0x50daa4)?this[_0x2e3451(0x29c)](_0x5ea40b,_0xa895bb)[_0x2e3451(0x2b2)]>=0x1:!![];}}else{if(_0x3e26fd&&_0x45dd11[_0x434053(0x263)](_0x31baa4)>_0xee34d8[_0x434053(0x263)](_0x31baa4))_0xee34d8=_0x45dd11;if(_0xb49e0e&&_0x45dd11['sparam'](_0x31baa4)<_0xee34d8[_0x434053(0x263)](_0x31baa4))_0xee34d8=_0x45dd11;}}return _0xee34d8;}if(_0x57118d==='HP'){_0xee34d8=this[_0x434053(0x309)][0x0];for(const _0x2d440c of this['_forceValidTargets']){if(_0x3e26fd&&_0x2d440c['hp']>_0xee34d8['hp'])_0xee34d8=_0x2d440c;if(_0xb49e0e&&_0x2d440c['hp']<_0xee34d8['hp'])_0xee34d8=_0x2d440c;}return _0xee34d8;}if(_0x57118d===_0x434053(0x1c3)){if(_0x434053(0x2db)==='FaAAx'){_0xee34d8=this['_forceValidTargets'][0x0];for(const _0x4354d9 of this[_0x434053(0x309)]){if(_0x3e26fd&&_0x4354d9[_0x434053(0x1de)]()>_0xee34d8[_0x434053(0x1de)]())_0xee34d8=_0x4354d9;if(_0xb49e0e&&_0x4354d9['hpRate']()<_0xee34d8[_0x434053(0x1de)]())_0xee34d8=_0x4354d9;}return _0xee34d8;}else{function _0x212794(){const _0x53812d=_0x434053,_0x38dc7f=_0x4efb2b(_0x1dda99['$1'])[_0x53812d(0x2ef)](/(?:USER|SUBJECT)/i)?_0x2cd0e4:_0x49e535;return _0x38dc7f[_0x53812d(0x1cc)]();}}}if(_0x57118d==='MP'){if(_0x434053(0x1ce)!==_0x434053(0x1ce)){function _0x382b6f(){const _0xec383b=_0x434053;if(!_0x45e505[_0xec383b(0x259)][_0xec383b(0x192)][_0xec383b(0x232)]['LearnKnowledge'])return!![];const _0x240936=_0x49d3c3[_0xec383b(0x2ef)](/EVA/i)?_0xec383b(0x2bc):_0xec383b(0x256);this[_0xec383b(0x2eb)]()[_0x240936]=this['aiKnowledge']()[_0x240936]||[];const _0x29b57c=_0x98c0ca['isActor']()?_0x10d2f2['actorId']():_0x3fbaaf['enemyId']();return this[_0xec383b(0x2eb)]()[_0x240936][_0xec383b(0x1df)](_0x29b57c);}}else{_0xee34d8=this['_forceValidTargets'][0x0];for(const _0x5caf18 of this[_0x434053(0x309)]){if('hHYMp'===_0x434053(0x245)){function _0xa328d7(){const _0x2e5657=_0x434053;_0x1833a6=_0x2da47b[_0x2e5657(0x1a4)](_0x34a9ae['random']()*(_0xec9aed+0x1)),_0x3e78b5=_0x196bf9[_0x42cf8e],_0x568eae[_0x4bd652]=_0x596213[_0x82d3db],_0x47f84a[_0x4b830c]=_0x3cd258;}}else{if(_0x3e26fd&&_0x5caf18['mp']>_0xee34d8['mp'])_0xee34d8=_0x5caf18;if(_0xb49e0e&&_0x5caf18['mp']<_0xee34d8['mp'])_0xee34d8=_0x5caf18;}}return _0xee34d8;}}if(_0x57118d===_0x434053(0x313)){_0xee34d8=this[_0x434053(0x309)][0x0];for(const _0x3edb60 of this[_0x434053(0x309)]){if(_0x434053(0x274)===_0x434053(0x30b)){function _0x42ec85(){const _0x4490ad=_0x434053;return _0x4a84bb[_0x4490ad(0x1f6)]['meetsTurnCondition'][_0x4490ad(0x316)](this,_0x17d88a,_0x140fa2);}}else{if(_0x3e26fd&&_0x3edb60[_0x434053(0x236)]()>_0xee34d8['mpRate']())_0xee34d8=_0x3edb60;if(_0xb49e0e&&_0x3edb60[_0x434053(0x236)]()<_0xee34d8[_0x434053(0x236)]())_0xee34d8=_0x3edb60;}}return _0xee34d8;}if(_0x57118d==='TP'){_0xee34d8=this[_0x434053(0x309)][0x0];for(const _0x5e16ec of this[_0x434053(0x309)]){if('lSdbg'!==_0x434053(0x204)){if(_0x3e26fd&&_0x5e16ec['tp']>_0xee34d8['tp'])_0xee34d8=_0x5e16ec;if(_0xb49e0e&&_0x5e16ec['tp']<_0xee34d8['tp'])_0xee34d8=_0x5e16ec;}else{function _0x52f5a9(){return null;}}}return _0xee34d8;}if(_0x57118d===_0x434053(0x265)){if(_0x434053(0x1f7)!==_0x434053(0x1f7)){function _0x5a5104(){const _0x137da9=_0x434053;return _0x555dce[_0x137da9(0x1f6)][_0x137da9(0x284)][_0x137da9(0x316)](this,_0x327e9e);}}else{_0xee34d8=this[_0x434053(0x309)][0x0];for(const _0x151048 of this[_0x434053(0x309)]){if(_0x3e26fd&&_0x151048[_0x434053(0x2d7)]()>_0xee34d8['tpRate']())_0xee34d8=_0x151048;if(_0xb49e0e&&_0x151048[_0x434053(0x2d7)]()<_0xee34d8['tpRate']())_0xee34d8=_0x151048;}return _0xee34d8;}}if(_0x57118d===_0x434053(0x264)){if(_0x434053(0x2bf)!==_0x434053(0x2bf)){function _0x214cc6(){const _0x38080b=_0x434053;for(const _0x47c215 of _0x149abc[_0x38080b(0x326)]){_0x4f6b31[_0x38080b(0x27d)](_0x47c215,this)&&(_0x23dc15*=this['elementRate'](_0x47c215)*_0x40b074[_0x38080b(0x24f)]);}}}else{_0xee34d8=this['_forceValidTargets'][0x0];for(const _0x5ef255 of this['_forceValidTargets']){if(_0x3e26fd&&_0x5ef255[_0x434053(0x2c6)]()>_0xee34d8[_0x434053(0x2c6)]())_0xee34d8=_0x5ef255;if(_0xb49e0e&&_0x5ef255[_0x434053(0x2c6)]()<_0xee34d8[_0x434053(0x2c6)]())_0xee34d8=_0x5ef255;}return _0xee34d8;}}if(_0x57118d===_0x434053(0x19a)){_0xee34d8=this[_0x434053(0x309)][0x0];for(const _0x1873f4 of this['_forceValidTargets']){if(_0x3e26fd&&(_0x1873f4[_0x434053(0x1be)]||0x0)>(_0xee34d8[_0x434053(0x1be)]||0x0))_0xee34d8=_0x1873f4;if(_0xb49e0e&&(_0x1873f4[_0x434053(0x1be)]||0x0)<(_0xee34d8[_0x434053(0x1be)]||0x0))_0xee34d8=_0x1873f4;}return _0xee34d8;}if(_0x57118d==='STATE\x20COUNT'&&Imported[_0x434053(0x2de)]){if(_0x434053(0x212)===_0x434053(0x212)){_0xee34d8=this[_0x434053(0x309)][0x0];for(const _0x4d6a19 of this[_0x434053(0x309)]){if(_0x3e26fd&&_0x4d6a19[_0x434053(0x2a5)]()['length']>_0xee34d8[_0x434053(0x2a5)]()['length'])_0xee34d8=_0x4d6a19;if(_0xb49e0e&&_0x4d6a19[_0x434053(0x2a5)]()[_0x434053(0x2b2)]<_0xee34d8[_0x434053(0x2a5)]()['length'])_0xee34d8=_0x4d6a19;}return _0xee34d8;}else{function _0x5971b0(){const _0x43b7be=_0x434053;return this[_0x43b7be(0x29c)](_0x37b502,_0x4d6f4f)['length']>=0x1;}}}if(_0x57118d===_0x434053(0x28e)&&Imported['VisuMZ_1_SkillsStatesCore']){if('WbQgC'!==_0x434053(0x294)){function _0x4ec66f(){const _0x1c8beb=_0x434053;let _0x5ef8cd=_0x120966[_0x1c8beb(0x190)](_0x2a62fe);for(const _0x10be60 of _0x5060b3){_0x5ef8cd-=_0x10be60['rating']-_0x336048;if(_0x5ef8cd<=0x0)return _0x10be60;}}}else{_0xee34d8=this[_0x434053(0x309)][0x0];const _0x22d807=_0x434053(0x2dd);for(const _0x458b3a of this['_forceValidTargets']){if(_0x434053(0x2da)!==_0x434053(0x2da)){function _0x5da7c0(){const _0x18475b=_0x434053;return _0x4f5f04[_0x18475b(0x20b)][_0x5041b6];}}else{if(_0x3e26fd&&_0x458b3a[_0x434053(0x2d9)](_0x22d807)[_0x434053(0x2b2)]>_0xee34d8[_0x434053(0x2d9)](_0x22d807)[_0x434053(0x2b2)])_0xee34d8=_0x458b3a;if(_0xb49e0e&&_0x458b3a[_0x434053(0x2d9)](_0x22d807)[_0x434053(0x2b2)]<_0xee34d8[_0x434053(0x2d9)](_0x22d807)[_0x434053(0x2b2)])_0xee34d8=_0x458b3a;}}return _0xee34d8;}}if(_0x57118d==='NEGATIVE\x20STATE\x20COUNT'&&Imported['VisuMZ_1_SkillsStatesCore']){_0xee34d8=this['_forceValidTargets'][0x0];const _0x403be8=_0x434053(0x2a0);for(const _0x70197d of this[_0x434053(0x309)]){if(_0x3e26fd&&_0x70197d[_0x434053(0x2d9)](_0x403be8)[_0x434053(0x2b2)]>_0xee34d8[_0x434053(0x2d9)](_0x403be8)[_0x434053(0x2b2)])_0xee34d8=_0x70197d;if(_0xb49e0e&&_0x70197d[_0x434053(0x2d9)](_0x403be8)[_0x434053(0x2b2)]<_0xee34d8[_0x434053(0x2d9)](_0x403be8)[_0x434053(0x2b2)])_0xee34d8=_0x70197d;}return _0xee34d8;}}}}}return null;},DataManager[_0x4c6e21(0x1a1)]=function(_0xc0a0a9){const _0x547a14=_0x4c6e21;_0xc0a0a9=_0xc0a0a9[_0x547a14(0x195)]()[_0x547a14(0x311)](),this['_elementIDs']=this[_0x547a14(0x295)]||{};if(this['_elementIDs'][_0xc0a0a9])return this['_elementIDs'][_0xc0a0a9];let _0x574997=0x1;for(const _0x3ab60d of $dataSystem[_0x547a14(0x29e)]){if(!_0x3ab60d)continue;let _0x2adbaf=_0x3ab60d[_0x547a14(0x195)]();_0x2adbaf=_0x2adbaf[_0x547a14(0x30f)](/\x1I\[(\d+)\]/gi,''),_0x2adbaf=_0x2adbaf[_0x547a14(0x30f)](/\\I\[(\d+)\]/gi,''),this['_elementIDs'][_0x2adbaf]=_0x574997,_0x574997++;}return this[_0x547a14(0x295)][_0xc0a0a9]||0x0;},DataManager[_0x4c6e21(0x258)]=function(_0xba7772){const _0x54c3c2=_0x4c6e21;_0xba7772=_0xba7772[_0x54c3c2(0x195)]()[_0x54c3c2(0x311)](),this[_0x54c3c2(0x30e)]=this['_stateIDs']||{};if(this[_0x54c3c2(0x30e)][_0xba7772])return this['_stateIDs'][_0xba7772];for(const _0x1e6567 of $dataStates){if(_0x54c3c2(0x1b2)==='cxjgR'){if(!_0x1e6567)continue;this[_0x54c3c2(0x30e)][_0x1e6567[_0x54c3c2(0x321)]['toUpperCase']()['trim']()]=_0x1e6567['id'];}else{function _0x33784f(){const _0x3c1f40=_0x54c3c2;if(this[_0x3c1f40(0x1cc)]()||this[_0x3c1f40(0x1f4)]()){const _0x33d8e1=this[_0x3c1f40(0x1cc)]()?this[_0x3c1f40(0x31c)]()['note']:this[_0x3c1f40(0x251)]()[_0x3c1f40(0x21e)];if(_0x33d8e1['match'](_0x2ea75d[_0x3c1f40(0x1fb)]['bypassElementTgr']))return![];else{if(_0x33d8e1[_0x3c1f40(0x2ef)](_0x27305a[_0x3c1f40(0x1fb)][_0x3c1f40(0x271)]))return this[_0x3c1f40(0x310)]()>0x0;}}return _0xada86[_0x3c1f40(0x259)][_0x3c1f40(0x192)]['Weight'][_0x3c1f40(0x26b)];}}}return this['_stateIDs'][_0xba7772]||0x0;},VisuMZ[_0x4c6e21(0x259)][_0x4c6e21(0x1b4)]=BattleManager[_0x4c6e21(0x22f)],BattleManager[_0x4c6e21(0x22f)]=function(){const _0x316dd5=_0x4c6e21;this['determineActionByAIisStillValid'](),VisuMZ[_0x316dd5(0x259)][_0x316dd5(0x1b4)]['call'](this);},BattleManager[_0x4c6e21(0x1ee)]=function(){const _0x5d3e82=_0x4c6e21,_0x207526=this[_0x5d3e82(0x1a9)];if(_0x207526[_0x5d3e82(0x266)]()==='random')return;if(!_0x207526[_0x5d3e82(0x2a7)]())return;const _0x253cc8=_0x207526[_0x5d3e82(0x200)](),_0x25c099=_0x253cc8[_0x5d3e82(0x304)]();if(_0x253cc8['_bypassAiValidCheck'])return;if(AIManager[_0x5d3e82(0x18d)](_0x207526,_0x25c099))return;_0x207526[_0x5d3e82(0x2fb)]();},VisuMZ[_0x4c6e21(0x259)]['Game_Temp_initialize']=Game_Temp[_0x4c6e21(0x1f6)]['initialize'],Game_Temp[_0x4c6e21(0x1f6)][_0x4c6e21(0x21c)]=function(){const _0x17cad4=_0x4c6e21;VisuMZ['BattleAI'][_0x17cad4(0x24e)][_0x17cad4(0x316)](this),this[_0x17cad4(0x292)]();},Game_Temp['prototype'][_0x4c6e21(0x292)]=function(){const _0x1d7731=_0x4c6e21;this[_0x1d7731(0x2b9)]={'action':null,'elementInfluence':![],'elementInfluenceRate':0x0,'elementIds':[],'evaInfluenceRate':0x0,'mevInfluenceRate':0x0};},Game_Temp[_0x4c6e21(0x1f6)][_0x4c6e21(0x272)]=function(){const _0xade2c4=_0x4c6e21;if(this[_0xade2c4(0x2b9)]===undefined)this['clearAiTgrInfluence']();return this[_0xade2c4(0x2b9)];},Game_Temp[_0x4c6e21(0x1f6)][_0x4c6e21(0x2aa)]=function(_0x4ff9df,_0x565fba){const _0x457b71=_0x4c6e21;this[_0x457b71(0x292)]();const _0x565df2=this['aiTgrInfluence']();_0x565df2[_0x457b71(0x1e4)]=_0x565fba;if(_0x4ff9df[_0x457b71(0x2e6)]()){_0x565df2[_0x457b71(0x1bd)]=!![],_0x565df2[_0x457b71(0x24f)]=_0x4ff9df[_0x457b71(0x310)](),_0x565df2[_0x457b71(0x326)]=[];if(Imported[_0x457b71(0x2ab)]){if('ovgfA'!==_0x457b71(0x2b6)){function _0x4d8911(){return this['aiApplyMevTgrInfluenceRate']()>0x0;}}else _0x565df2[_0x457b71(0x326)]=_0x565df2[_0x457b71(0x326)][_0x457b71(0x18b)](_0x565fba[_0x457b71(0x29e)]());}else _0x565fba[_0x457b71(0x304)]()[_0x457b71(0x26f)][_0x457b71(0x2f3)]<0x0?_0x565df2['elementIds']=_0x565df2[_0x457b71(0x326)][_0x457b71(0x18b)](_0x4ff9df[_0x457b71(0x27f)]()):_0x565df2[_0x457b71(0x326)][_0x457b71(0x228)](_0x565fba[_0x457b71(0x304)]()[_0x457b71(0x26f)]['elementId']);}_0x565fba[_0x457b71(0x20a)]()&&_0x4ff9df[_0x457b71(0x2a9)]()&&(_0x565df2[_0x457b71(0x1f3)]=_0x4ff9df[_0x457b71(0x20d)]());if(_0x565fba[_0x457b71(0x24a)]()&&_0x4ff9df[_0x457b71(0x19b)]()){if(_0x457b71(0x24d)!==_0x457b71(0x24d)){function _0x226920(){const _0x1ebc58=_0x457b71,_0x37e033=this['currentClass']()[_0x1ebc58(0x21e)];if(_0x37e033[_0x1ebc58(0x2ef)](_0x3210cb[_0x1ebc58(0x1fb)][_0x1ebc58(0x266)]))return _0x1ad93e(_0x495b5e['$1'])[_0x1ebc58(0x297)]()['trim']();return _0x5d2bde[_0x1ebc58(0x259)]['Settings']['General'][_0x1ebc58(0x189)];}}else _0x565df2[_0x457b71(0x2b3)]=_0x4ff9df[_0x457b71(0x29b)]();}},VisuMZ[_0x4c6e21(0x259)][_0x4c6e21(0x267)]=Game_Action['prototype'][_0x4c6e21(0x1c2)],Game_Action['prototype']['makeTargets']=function(){const _0x528a47=_0x4c6e21;if(this[_0x528a47(0x2e4)]()&&this[_0x528a47(0x2c4)]()[_0x528a47(0x2a7)]()){if(_0x528a47(0x2af)===_0x528a47(0x210)){function _0x22a6b7(){const _0x20e0a5=_0x528a47,_0x2a4257=this[_0x20e0a5(0x1cc)]()?this['actor']()[_0x20e0a5(0x21e)]:this[_0x20e0a5(0x251)]()[_0x20e0a5(0x21e)];if(_0x2a4257[_0x20e0a5(0x2ef)](_0x2f40ab[_0x20e0a5(0x1fb)][_0x20e0a5(0x2e2)]))return![];else{if(_0x2a4257['match'](_0x35a704['_regexp'][_0x20e0a5(0x1a5)]))return this[_0x20e0a5(0x20d)]()>0x0;}}}else AIManager[_0x528a47(0x1ac)](this[_0x528a47(0x2c4)](),this[_0x528a47(0x304)]()),this[_0x528a47(0x319)]()&&AIManager['filterForcedTargeting'](this[_0x528a47(0x2c4)](),this['item']());}$gameTemp['setAiTgrInfluences'](this[_0x528a47(0x2c4)](),this);const _0x91f850=VisuMZ[_0x528a47(0x259)]['Game_Action_makeTargets']['call'](this);return $gameTemp['clearAiTgrInfluence'](),AIManager['clearForcedTargets'](),_0x91f850;},VisuMZ[_0x4c6e21(0x259)][_0x4c6e21(0x1a3)]=Game_Action[_0x4c6e21(0x1f6)][_0x4c6e21(0x30c)],Game_Action[_0x4c6e21(0x1f6)]['itemTargetCandidates']=function(){const _0x5f350d=_0x4c6e21,_0x45a16c=this[_0x5f350d(0x2c4)](),_0x3a6b7e=this[_0x5f350d(0x304)]();let _0x4aaeeb=VisuMZ[_0x5f350d(0x259)][_0x5f350d(0x1a3)][_0x5f350d(0x316)](this);if(_0x45a16c[_0x5f350d(0x2a7)]()&&AIManager[_0x5f350d(0x18d)](_0x45a16c,_0x3a6b7e)){let _0x1325df=AIManager[_0x5f350d(0x29c)](_0x45a16c,_0x3a6b7e);_0x4aaeeb=_0x4aaeeb[_0x5f350d(0x2d1)](_0x5a5384=>_0x1325df[_0x5f350d(0x1df)](_0x5a5384));}return _0x4aaeeb;},VisuMZ[_0x4c6e21(0x259)][_0x4c6e21(0x22b)]=Game_Action['prototype']['apply'],Game_Action[_0x4c6e21(0x1f6)][_0x4c6e21(0x2b7)]=function(_0x3d7791){const _0x4cf2f2=_0x4c6e21;VisuMZ[_0x4cf2f2(0x259)][_0x4cf2f2(0x22b)]['call'](this,_0x3d7791),this['applyBattleAI'](_0x3d7791);},Game_Action['prototype'][_0x4c6e21(0x221)]=function(_0x3eebdc){const _0x1700bb=_0x4c6e21;if(!_0x3eebdc)return;if(this[_0x1700bb(0x2c4)]()[_0x1700bb(0x1cc)]()===_0x3eebdc[_0x1700bb(0x1cc)]())return;let _0x1c1ea4=[];if(Imported[_0x1700bb(0x2ab)]){if(_0x1700bb(0x1b8)===_0x1700bb(0x1b8))_0x1c1ea4=this[_0x1700bb(0x29e)]();else{function _0x3c6b86(){const _0x4c40d1=_0x1700bb;if(!_0x22d778)return![];return this['getAllConditions'](_0x5680dd)[_0x4c40d1(0x2b2)]>0x0||this[_0x4c40d1(0x298)](_0x546149)['length']>0x0;}}}else{if(this[_0x1700bb(0x304)]()[_0x1700bb(0x26f)][_0x1700bb(0x2f3)]<0x0){if('KrNrg'!=='zIrty')_0x1c1ea4=this[_0x1700bb(0x2c4)]()[_0x1700bb(0x27f)]();else{function _0x1a9c5d(){const _0x81517e=_0x1700bb;_0xa1e7a6=this[_0x81517e(0x309)][0x0];for(const _0x174ea3 of this['_forceValidTargets']){if(_0x514080&&_0x174ea3['hp']>_0x287f9f['hp'])_0xd702c1=_0x174ea3;if(_0x168123&&_0x174ea3['hp']<_0x318056['hp'])_0x109144=_0x174ea3;}return _0x3a1199;}}}else _0x1c1ea4=[this[_0x1700bb(0x304)]()[_0x1700bb(0x26f)][_0x1700bb(0x2f3)]];}_0x3eebdc[_0x1700bb(0x260)](_0x1c1ea4,this[_0x1700bb(0x20a)](),this['isMagical']());},VisuMZ[_0x4c6e21(0x259)][_0x4c6e21(0x205)]=Game_BattlerBase[_0x4c6e21(0x1f6)]['sparam'],Game_BattlerBase['prototype'][_0x4c6e21(0x263)]=function(_0x44eda6){const _0x4a3a3d=_0x4c6e21;let _0x6d72de=VisuMZ['BattleAI'][_0x4a3a3d(0x205)][_0x4a3a3d(0x316)](this,_0x44eda6);return _0x44eda6===0x0&&(_0x6d72de*=this['applyBattleAiTgrInfluences']()),_0x6d72de;},Game_BattlerBase[_0x4c6e21(0x1f6)][_0x4c6e21(0x22e)]=function(){const _0x328244=_0x4c6e21,_0x267a9b=$gameTemp[_0x328244(0x272)](),_0xd1f04a=this[_0x328244(0x249)]();if(Imported[_0x328244(0x1c0)]){if(_0x267a9b[_0x328244(0x1e4)]&&_0x267a9b['action'][_0x328244(0x290)]())return 0x1;}let _0x33b77f=0x1;if(_0x267a9b['elementInfluence'])for(const _0x5b0d85 of _0x267a9b[_0x328244(0x326)]){if(_0xd1f04a[_0x328244(0x27d)](_0x5b0d85,this)){if(_0x328244(0x23b)!==_0x328244(0x23b)){function _0x5c3ea5(){const _0x1db20b=_0x328244;_0x5101f9[_0x1db20b(0x2a4)](_0x1db20b(0x2bc),this);}}else _0x33b77f*=this[_0x328244(0x2b5)](_0x5b0d85)*_0x267a9b[_0x328244(0x24f)];}}return _0xd1f04a['hasXParamAIKnowledge'](_0x328244(0x2f8),this)&&(_0x33b77f*=0x1-this['eva']*_0x267a9b['evaInfluenceRate']),_0xd1f04a[_0x328244(0x1b5)](_0x328244(0x299),this)&&(_0x33b77f*=0x1-this['mev']*_0x267a9b['mevInfluenceRate']),_0x33b77f[_0x328244(0x2ba)](0.001,0x3e8);},Game_BattlerBase[_0x4c6e21(0x1f6)][_0x4c6e21(0x266)]=function(){const _0x303c43=_0x4c6e21;return _0x303c43(0x2a8);},Game_Battler[_0x4c6e21(0x1f6)][_0x4c6e21(0x2a7)]=function(){const _0xc82a48=_0x4c6e21;if(this[_0xc82a48(0x1db)]())return![];return!![];},Game_Battler[_0x4c6e21(0x1f6)]['determineNewValidAIAction']=function(){},Game_Battler[_0x4c6e21(0x1f6)][_0x4c6e21(0x2e6)]=function(){const _0x420c1e=_0x4c6e21;if(this['isActor']()||this[_0x420c1e(0x1f4)]()){if(_0x420c1e(0x2be)!==_0x420c1e(0x2be)){function _0x44c3cb(){const _0x40f7e3=_0x420c1e;_0x3c0fed['hasForcedTargets']()&&(this[_0x40f7e3(0x1f0)]=!![]);const _0x1fce3e=_0x507f48[_0x40f7e3(0x259)][_0x40f7e3(0x269)]['call'](this);return this['_applyAIForcedTargetFilters']=![],_0x1fce3e;}}else{const _0x3fd93b=this[_0x420c1e(0x1cc)]()?this['actor']()[_0x420c1e(0x21e)]:this[_0x420c1e(0x251)]()[_0x420c1e(0x21e)];if(_0x3fd93b[_0x420c1e(0x2ef)](AIManager['_regexp'][_0x420c1e(0x2b4)]))return![];else{if(_0x3fd93b[_0x420c1e(0x2ef)](AIManager[_0x420c1e(0x1fb)][_0x420c1e(0x271)])){if(_0x420c1e(0x19f)!==_0x420c1e(0x19f)){function _0x5781d1(){const _0x82878c=_0x420c1e;this[_0x82878c(0x1a2)](_0x59d74b);}}else return this[_0x420c1e(0x310)]()>0x0;}}}}return VisuMZ[_0x420c1e(0x259)]['Settings']['Weight'][_0x420c1e(0x26b)];},Game_Battler['prototype'][_0x4c6e21(0x310)]=function(){const _0x3b34f6=_0x4c6e21;if(this[_0x3b34f6(0x1cc)]()||this[_0x3b34f6(0x1f4)]()){const _0x535049=this[_0x3b34f6(0x1cc)]()?this[_0x3b34f6(0x31c)]()[_0x3b34f6(0x21e)]:this[_0x3b34f6(0x251)]()[_0x3b34f6(0x21e)];if(_0x535049[_0x3b34f6(0x2ef)](AIManager[_0x3b34f6(0x1fb)][_0x3b34f6(0x271)]))return eval(RegExp['$1']);}return VisuMZ[_0x3b34f6(0x259)][_0x3b34f6(0x192)][_0x3b34f6(0x1a6)]['ElementTgrRate'];},Game_Battler[_0x4c6e21(0x1f6)][_0x4c6e21(0x2a9)]=function(){const _0x3a9eb2=_0x4c6e21;if(this[_0x3a9eb2(0x1cc)]()||this[_0x3a9eb2(0x1f4)]()){const _0x2a9231=this['isActor']()?this[_0x3a9eb2(0x31c)]()['note']:this['enemy']()[_0x3a9eb2(0x21e)];if(_0x2a9231[_0x3a9eb2(0x2ef)](AIManager[_0x3a9eb2(0x1fb)][_0x3a9eb2(0x2e2)]))return![];else{if(_0x2a9231[_0x3a9eb2(0x2ef)](AIManager[_0x3a9eb2(0x1fb)][_0x3a9eb2(0x1a5)])){if('TKJro'===_0x3a9eb2(0x248)){function _0x1e0276(){const _0x389e2d=_0x3a9eb2,_0x46efb0=_0xc28194[_0x170e3f];return _0x46efb0&&_0x46efb0[_0x389e2d(0x214)]===0x0?_0x12c7d6[_0x389e2d(0x20f)]:_0x2f71c3[_0x389e2d(0x197)][_0x24f090]||0x0;}}else return this['aiApplyEvaTgrInfluenceRate']()>0x0;}}}return VisuMZ[_0x3a9eb2(0x259)][_0x3a9eb2(0x192)][_0x3a9eb2(0x1a6)][_0x3a9eb2(0x20c)];},Game_Battler[_0x4c6e21(0x1f6)][_0x4c6e21(0x20d)]=function(){const _0x2fcfc9=_0x4c6e21;if(this[_0x2fcfc9(0x1cc)]()||this[_0x2fcfc9(0x1f4)]()){const _0x4efdf3=this[_0x2fcfc9(0x1cc)]()?this['actor']()[_0x2fcfc9(0x21e)]:this[_0x2fcfc9(0x251)]()[_0x2fcfc9(0x21e)];if(_0x4efdf3[_0x2fcfc9(0x2ef)](AIManager[_0x2fcfc9(0x1fb)][_0x2fcfc9(0x1a5)])){if('EkPaT'!==_0x2fcfc9(0x1e3))return eval(RegExp['$1']);else{function _0x2ca965(){const _0x549e3c=_0x2fcfc9;return _0x326f00[_0x549e3c(0x1f6)][_0x549e3c(0x1c4)][_0x549e3c(0x316)](this,_0x1ee5a6,_0x385922);}}}}return VisuMZ['BattleAI'][_0x2fcfc9(0x192)][_0x2fcfc9(0x1a6)][_0x2fcfc9(0x227)];},Game_Battler[_0x4c6e21(0x1f6)][_0x4c6e21(0x19b)]=function(){const _0x5b6a14=_0x4c6e21;if(this[_0x5b6a14(0x1cc)]()||this[_0x5b6a14(0x1f4)]()){const _0x8e3939=this['isActor']()?this['actor']()[_0x5b6a14(0x21e)]:this['enemy']()[_0x5b6a14(0x21e)];if(_0x8e3939[_0x5b6a14(0x2ef)](AIManager['_regexp'][_0x5b6a14(0x323)]))return![];else{if(_0x8e3939[_0x5b6a14(0x2ef)](AIManager['_regexp'][_0x5b6a14(0x27b)])){if(_0x5b6a14(0x1fe)===_0x5b6a14(0x1fa)){function _0x3c4083(){const _0x530c55=_0x5b6a14,_0x5145b7=this[_0x530c55(0x1c7)]();if(this[_0x530c55(0x250)]())_0x5145b7[_0x530c55(0x228)](_0x4e1b3e[this[_0x530c55(0x270)]()]);if(this[_0x530c55(0x1ae)]())_0x5145b7[_0x530c55(0x228)](_0x431c53[this[_0x530c55(0x2f9)]()]);const _0x54c9a7=this[_0x530c55(0x2f2)](),_0x5c93d9=_0x5d3038[_0x530c55(0x293)](_0x54c9a7[_0x530c55(0x1b1)]);for(const _0x53d7b2 of _0x5c93d9){if(_0x53d7b2[_0x530c55(0x254)]===0x1)_0x53d7b2[_0x530c55(0x254)]=this['attackSkillId']();if(_0x53d7b2[_0x530c55(0x254)]===0x2)_0x53d7b2['skillId']=this[_0x530c55(0x2f9)]();}const _0x13c927=_0x5c93d9['filter'](_0x171986=>this['isActionValid'](_0x171986)&&_0x5145b7[_0x530c55(0x1df)](_0x4839fa[_0x171986[_0x530c55(0x254)]]));if(_0x13c927[_0x530c55(0x2b2)]>0x0){this[_0x530c55(0x2cd)](_0x13c927);return;}}}else return this[_0x5b6a14(0x29b)]()>0x0;}}}return VisuMZ['BattleAI'][_0x5b6a14(0x192)][_0x5b6a14(0x1a6)][_0x5b6a14(0x20c)];},Game_Battler[_0x4c6e21(0x1f6)][_0x4c6e21(0x29b)]=function(){const _0xb0cb98=_0x4c6e21;if(this[_0xb0cb98(0x1cc)]()||this['isEnemy']()){const _0x251f7f=this[_0xb0cb98(0x1cc)]()?this['actor']()['note']:this[_0xb0cb98(0x251)]()[_0xb0cb98(0x21e)];if(_0x251f7f['match'](AIManager[_0xb0cb98(0x1fb)][_0xb0cb98(0x27b)]))return eval(RegExp['$1']);}return VisuMZ[_0xb0cb98(0x259)][_0xb0cb98(0x192)][_0xb0cb98(0x1a6)][_0xb0cb98(0x227)];},Game_Battler[_0x4c6e21(0x1f6)][_0x4c6e21(0x285)]=function(){const _0x438971=_0x4c6e21,_0x440610=VisuMZ['BattleAI'][_0x438971(0x192)]['General'];if(this[_0x438971(0x1cc)]()||this[_0x438971(0x1f4)]()){const _0x4b8ed9=this[_0x438971(0x1cc)]()?this[_0x438971(0x31c)]()['note']:this['enemy']()[_0x438971(0x21e)];if(_0x4b8ed9['match'](AIManager[_0x438971(0x1fb)][_0x438971(0x285)])){if(_0x438971(0x315)!==_0x438971(0x315)){function _0x3a4cf6(){const _0x11c46a=_0x438971;return _0x527f59[_0x11c46a(0x1ba)]['clamp'](0x0,0x9);}}else return Number(RegExp['$1'])[_0x438971(0x2ba)](0x0,0x64);}else{if(this[_0x438971(0x1cc)]())return _0x440610['ActorAILevel'];else{if(this[_0x438971(0x1f4)]())return _0x440610[_0x438971(0x1cf)];}}}return _0x440610[_0x438971(0x1cf)];},Game_Battler[_0x4c6e21(0x1f6)][_0x4c6e21(0x260)]=function(_0x310018,_0x4f11fa,_0x398f3e){const _0x4a0656=_0x4c6e21,_0x210d8f=this[_0x4a0656(0x249)]();if(_0x310018&&_0x310018[_0x4a0656(0x2b2)]>0x0){if(_0x4a0656(0x2e3)==='lJCgx')for(const _0x2473a9 of _0x310018){if('efQPP'===_0x4a0656(0x2ae)){function _0xed795c(){const _0x1d5edb=_0x4a0656;return _0x2a3403(_0x5c93f9['$1'])[_0x1d5edb(0x22c)](/[\r\n]+/)[_0x1d5edb(0x239)]('');}}else _0x210d8f[_0x4a0656(0x1d6)](_0x2473a9,this);}else{function _0x114622(){const _0x364dbd=_0x4a0656;return _0x434b2c[_0x364dbd(0x197)][_0x5c8e61]||0x0;}}}_0x4f11fa&&_0x210d8f[_0x4a0656(0x2a4)](_0x4a0656(0x2bc),this),_0x398f3e&&_0x210d8f[_0x4a0656(0x2a4)](_0x4a0656(0x256),this);},Game_Battler['prototype'][_0x4c6e21(0x1b5)]=function(_0x4b4c0d){const _0x42d38d=_0x4c6e21,_0x53d695=this['opponentsUnit']();return _0x53d695[_0x42d38d(0x1b5)](_0x4b4c0d,this);},Game_Battler[_0x4c6e21(0x1f6)][_0x4c6e21(0x322)]=function(){const _0x2c2d35=_0x4c6e21,_0x1765d1=VisuMZ['BattleAI']['Settings']['General'];if(this[_0x2c2d35(0x1cc)]()||this[_0x2c2d35(0x1f4)]()){if(_0x2c2d35(0x2ff)!==_0x2c2d35(0x2ff)){function _0x114f93(){const _0x2664a0=_0x2c2d35;_0x2873b0=[this[_0x2664a0(0x304)]()[_0x2664a0(0x26f)][_0x2664a0(0x2f3)]];}}else{const _0x54b780=this[_0x2c2d35(0x1cc)]()?this[_0x2c2d35(0x31c)]()[_0x2c2d35(0x21e)]:this[_0x2c2d35(0x251)]()[_0x2c2d35(0x21e)];if(_0x54b780[_0x2c2d35(0x2ef)](AIManager[_0x2c2d35(0x1fb)][_0x2c2d35(0x322)]))return Number(RegExp['$1'])[_0x2c2d35(0x2ba)](0x0,0x9);else{if(this[_0x2c2d35(0x1cc)]()){if('OzbTs'===_0x2c2d35(0x2dc)){function _0x11aff4(){const _0x1d447f=_0x2c2d35;return this['forcedTargets']()[_0x1d447f(0x2b2)]>0x0;}}else return _0x1765d1[_0x2c2d35(0x2fa)][_0x2c2d35(0x2ba)](0x0,0x9);}else{if(this[_0x2c2d35(0x1f4)]())return _0x1765d1['EnemyRatingVariance'][_0x2c2d35(0x2ba)](0x0,0x9);}}}}return _0x1765d1['EnemyRatingVariance'][_0x2c2d35(0x2ba)](0x0,0x9);},Game_Actor[_0x4c6e21(0x1f6)][_0x4c6e21(0x2a7)]=function(){const _0x27cba8=_0x4c6e21;if(this[_0x27cba8(0x1db)]())return![];return this['isAutoBattle']()&&this[_0x27cba8(0x2f2)]();},Game_Actor['prototype'][_0x4c6e21(0x2f2)]=function(){const _0x59e572=_0x4c6e21,_0x48b7ea=this[_0x59e572(0x224)]()[_0x59e572(0x21e)];if(_0x48b7ea[_0x59e572(0x2ef)](/<NO REFERENCE AI>/i))return null;else{if(_0x48b7ea['match'](/<REFERENCE AI: ENEMY (\d+)>/i)){if(_0x59e572(0x211)!=='QYkWK'){function _0x18b29d(){if(_0x2a3ea9&&_0x63f5d4['hp']>_0x54fdf4['hp'])_0x2aa88e=_0x2666f7;if(_0x2a8797&&_0x38c3ec['hp']<_0x55de06['hp'])_0x3da7c6=_0x973c9;}}else return $dataEnemies[Number(RegExp['$1'])];}else{if(_0x48b7ea[_0x59e572(0x2ef)](/<REFERENCE AI: (.*)>/i)){if(_0x59e572(0x2e7)===_0x59e572(0x32c)){function _0x1caa3f(){const _0xb857cd=_0x59e572;if(!_0x1b8973[_0xb857cd(0x259)][_0xb857cd(0x192)][_0xb857cd(0x232)]['LearnKnowledge'])return!![];this[_0xb857cd(0x2eb)]()[_0xb857cd(0x26d)]=this[_0xb857cd(0x2eb)]()[_0xb857cd(0x26d)]||{};const _0x41b464=this[_0xb857cd(0x2eb)]()[_0xb857cd(0x26d)];_0x41b464[_0x5ab8d9]=_0x41b464[_0x505444]||[];const _0x1ad149=_0x4a1b22[_0xb857cd(0x1cc)]()?_0x5559e8[_0xb857cd(0x2a6)]():_0x2b5c6b['enemyId']();return _0x41b464[_0x50be48][_0xb857cd(0x1df)](_0x1ad149);}}else return $dataEnemies[DataManager['getEnemyIdWithName'](String(RegExp['$1']))];}}}return $dataEnemies[VisuMZ[_0x59e572(0x259)][_0x59e572(0x192)]['General']['ActorAIReference']];},Game_Actor[_0x4c6e21(0x1f6)][_0x4c6e21(0x266)]=function(){const _0x55fb4a=_0x4c6e21,_0x275b6d=this[_0x55fb4a(0x224)]()['note'];if(_0x275b6d[_0x55fb4a(0x2ef)](AIManager['_regexp'][_0x55fb4a(0x266)]))return String(RegExp['$1'])[_0x55fb4a(0x297)]()[_0x55fb4a(0x311)]();return VisuMZ[_0x55fb4a(0x259)]['Settings'][_0x55fb4a(0x232)][_0x55fb4a(0x189)];},Game_Actor[_0x4c6e21(0x1f6)]['determineNewValidAIAction']=function(){const _0x385c91=_0x4c6e21;Game_Battler[_0x385c91(0x1f6)]['determineNewValidAIAction'][_0x385c91(0x316)](this),this[_0x385c91(0x25d)]();},VisuMZ[_0x4c6e21(0x259)][_0x4c6e21(0x288)]=Game_Actor[_0x4c6e21(0x1f6)][_0x4c6e21(0x25d)],Game_Actor[_0x4c6e21(0x1f6)][_0x4c6e21(0x25d)]=function(){const _0x599f69=_0x4c6e21;if(this[_0x599f69(0x2a7)]()){if(_0x599f69(0x325)!=='TwhZo')this[_0x599f69(0x30a)]();else{function _0x67199f(){const _0x57d80e=_0x599f69,_0x276222=_0x26fcf8(_0x40330d['$1']);return this[_0x57d80e(0x25b)](_0x2ba4c4,_0x4a326f,_0x52863e,_0x276222);}}}else VisuMZ[_0x599f69(0x259)][_0x599f69(0x288)][_0x599f69(0x316)](this);},Game_Actor[_0x4c6e21(0x1f6)][_0x4c6e21(0x30a)]=function(){const _0x3b0607=_0x4c6e21;if(this[_0x3b0607(0x28f)]()>0x0){if(_0x3b0607(0x2f1)===_0x3b0607(0x2c0)){function _0x3385ea(){const _0x24e511=_0x3b0607;_0x37771d[_0x24e511(0x300)](_0x24e511(0x18e)[_0x24e511(0x201)](_0x443d26)),_0x2140a6[_0x24e511(0x300)](_0x433a97);}}else{const _0x135a04=this['usableSkills']();if(this[_0x3b0607(0x250)]())_0x135a04[_0x3b0607(0x228)]($dataSkills[this['attackSkillId']()]);if(this[_0x3b0607(0x1ae)]())_0x135a04['push']($dataSkills[this['guardSkillId']()]);const _0x53d923=this[_0x3b0607(0x2f2)](),_0x33261d=JsonEx[_0x3b0607(0x293)](_0x53d923[_0x3b0607(0x1b1)]);for(const _0x20b40d of _0x33261d){if('RAsni'===_0x3b0607(0x1fc)){if(_0x20b40d[_0x3b0607(0x254)]===0x1)_0x20b40d[_0x3b0607(0x254)]=this[_0x3b0607(0x270)]();if(_0x20b40d[_0x3b0607(0x254)]===0x2)_0x20b40d['skillId']=this['guardSkillId']();}else{function _0x329efb(){const _0x305e3b=_0x3b0607;if(_0x249b06&&(_0x28a3d6[_0x305e3b(0x1be)]||0x0)>(_0x595a55[_0x305e3b(0x1be)]||0x0))_0x37985b=_0x5ec17c;if(_0x41c138&&(_0x169734[_0x305e3b(0x1be)]||0x0)<(_0x3251be[_0x305e3b(0x1be)]||0x0))_0x3f71bb=_0x50d06b;}}}const _0x42e33f=_0x33261d[_0x3b0607(0x2d1)](_0x6ff4d2=>this[_0x3b0607(0x244)](_0x6ff4d2)&&_0x135a04[_0x3b0607(0x1df)]($dataSkills[_0x6ff4d2[_0x3b0607(0x254)]]));if(_0x42e33f['length']>0x0){if(_0x3b0607(0x240)!==_0x3b0607(0x283)){this[_0x3b0607(0x2cd)](_0x42e33f);return;}else{function _0x41ff54(){const _0x3770f4=_0x3b0607;return _0x39eaa1[_0x3770f4(0x2c6)]();}}}}}VisuMZ['BattleAI']['Game_Actor_makeAutoBattleActions'][_0x3b0607(0x316)](this);},Game_Actor['prototype'][_0x4c6e21(0x291)]=function(_0x54949b){const _0x48e138=_0x4c6e21;return Game_Enemy[_0x48e138(0x1f6)][_0x48e138(0x291)][_0x48e138(0x316)](this,_0x54949b);},Game_Actor['prototype']['meetsTurnCondition']=function(_0x49345b,_0x4d348b){const _0x5dd24c=_0x4c6e21;return Game_Enemy[_0x5dd24c(0x1f6)]['meetsTurnCondition'][_0x5dd24c(0x316)](this,_0x49345b,_0x4d348b);},Game_Actor[_0x4c6e21(0x1f6)][_0x4c6e21(0x1c4)]=function(_0x4ee772,_0x342a99){const _0x12ba5d=_0x4c6e21;return Game_Enemy[_0x12ba5d(0x1f6)][_0x12ba5d(0x1c4)][_0x12ba5d(0x316)](this,_0x4ee772,_0x342a99);},Game_Actor['prototype'][_0x4c6e21(0x247)]=function(_0x5240a6,_0x1eea6a){const _0x3617ba=_0x4c6e21;return Game_Enemy[_0x3617ba(0x1f6)]['meetsMpCondition'][_0x3617ba(0x316)](this,_0x5240a6,_0x1eea6a);},Game_Actor[_0x4c6e21(0x1f6)]['meetsStateCondition']=function(_0x275f51){const _0x50aecb=_0x4c6e21;return Game_Enemy[_0x50aecb(0x1f6)][_0x50aecb(0x26c)][_0x50aecb(0x316)](this,_0x275f51);},Game_Actor[_0x4c6e21(0x1f6)][_0x4c6e21(0x1a7)]=function(_0x4d562d){const _0x1a2398=_0x4c6e21;return Game_Enemy['prototype']['meetsPartyLevelCondition'][_0x1a2398(0x316)](this,_0x4d562d);},Game_Actor['prototype'][_0x4c6e21(0x284)]=function(_0x3caced){const _0x2a3c53=_0x4c6e21;return Game_Enemy[_0x2a3c53(0x1f6)]['meetsSwitchCondition']['call'](this,_0x3caced);},Game_Enemy[_0x4c6e21(0x1f6)]['aiStyle']=function(){const _0x5a0c8c=_0x4c6e21,_0x29457d=this[_0x5a0c8c(0x251)]()[_0x5a0c8c(0x21e)];if(_0x29457d[_0x5a0c8c(0x2ef)](AIManager['_regexp']['aiStyle']))return String(RegExp['$1'])[_0x5a0c8c(0x297)]()[_0x5a0c8c(0x311)]();return VisuMZ[_0x5a0c8c(0x259)][_0x5a0c8c(0x192)][_0x5a0c8c(0x232)][_0x5a0c8c(0x306)];},VisuMZ[_0x4c6e21(0x259)][_0x4c6e21(0x329)]=Game_Enemy[_0x4c6e21(0x1f6)]['isActionValid'],Game_Enemy[_0x4c6e21(0x1f6)][_0x4c6e21(0x244)]=function(_0x4e831d){const _0xd62837=_0x4c6e21;if(!VisuMZ[_0xd62837(0x259)][_0xd62837(0x329)][_0xd62837(0x316)](this,_0x4e831d))return![];if(this[_0xd62837(0x266)]()==='random')return!![];return AIManager[_0xd62837(0x18d)](this,$dataSkills[_0x4e831d[_0xd62837(0x254)]]);},Game_Actor['prototype'][_0x4c6e21(0x244)]=function(_0xa79360){const _0x185c71=_0x4c6e21;return Game_Enemy['prototype'][_0x185c71(0x244)][_0x185c71(0x316)](this,_0xa79360);},Game_Enemy['prototype'][_0x4c6e21(0x261)]=function(_0x301a9b,_0x380dbc){const _0xe75572=_0x4c6e21,_0x1a2b77=_0x301a9b[_0xe75572(0x301)]((_0x4d65d1,_0x174030)=>_0x4d65d1+_0x174030[_0xe75572(0x2d0)]-_0x380dbc,0x0);if(_0x1a2b77>=0x0){let _0x56108a=Math['randomInt'](_0x1a2b77);for(const _0x4094d9 of _0x301a9b){_0x56108a-=_0x4094d9[_0xe75572(0x2d0)]-_0x380dbc;if(_0x56108a<=0x0)return _0x4094d9;}}else{if(_0xe75572(0x1b0)!==_0xe75572(0x1b0)){function _0x5f2414(){const _0x4aca9a=_0xe75572,_0x47e241=_0x232124[_0x4aca9a(0x1e2)](..._0x44a997['map'](_0x2840f3=>_0x2840f3[_0x4aca9a(0x2d0)])),_0x1c6e73=_0x47e241-this['aiRatingVariance']();_0x91f8e6=_0x2808d2['filter'](_0x563f75=>_0x563f75['rating']>=_0x1c6e73),_0x38eb09=_0x115ccd[_0x4aca9a(0x259)][_0x4aca9a(0x193)](_0x4317c6);for(let _0x2c0fc4=0x0;_0x2c0fc4<this[_0x4aca9a(0x28f)]();_0x2c0fc4++){this[_0x4aca9a(0x1e4)](_0x2c0fc4)[_0x4aca9a(0x30d)](this[_0x4aca9a(0x261)](_0x309be8,_0x1c6e73));}}}else return null;}},Game_Actor[_0x4c6e21(0x1f6)][_0x4c6e21(0x261)]=function(_0x39bf91,_0x452b57){const _0xa5fdf6=_0x4c6e21;return Game_Enemy[_0xa5fdf6(0x1f6)][_0xa5fdf6(0x261)][_0xa5fdf6(0x316)](this,_0x39bf91,_0x452b57);},Game_Enemy['prototype'][_0x4c6e21(0x2cd)]=function(_0xcd5bea){const _0x5925cd=_0x4c6e21,_0x3ef57d=String(this['aiStyle']())[_0x5925cd(0x297)]()[_0x5925cd(0x311)]();if([_0x5925cd(0x1c6),_0x5925cd(0x22d)][_0x5925cd(0x1df)](_0x3ef57d)){if(_0x5925cd(0x282)===_0x5925cd(0x282))this['selectAllActionsRandom'](_0xcd5bea);else{function _0x42c92d(){const _0x4c791d=_0x5925cd;_0x5df5b3[_0x4c791d(0x259)]['Game_Troop_setup']['call'](this,_0x53715c),this['clearAIKnowledge']();}}}else{if(_0x3ef57d===_0x5925cd(0x23d))this[_0x5925cd(0x203)](_0xcd5bea);else{if(_0x5925cd(0x25f)!==_0x5925cd(0x25f)){function _0x57f3f3(){return _0x3e8d68['_stateTurns'][_0x4459d9]||0x0;}}else this[_0x5925cd(0x31f)](_0xcd5bea);}}},Game_Actor[_0x4c6e21(0x1f6)][_0x4c6e21(0x2cd)]=function(_0x5d760b){const _0x2a3748=_0x4c6e21;Game_Enemy[_0x2a3748(0x1f6)][_0x2a3748(0x2cd)][_0x2a3748(0x316)](this,_0x5d760b);},Game_Battler[_0x4c6e21(0x1f6)][_0x4c6e21(0x31f)]=function(_0x58dec7){const _0x563674=_0x4c6e21,_0x30986a=Math['max'](..._0x58dec7[_0x563674(0x209)](_0x5b0375=>_0x5b0375[_0x563674(0x2d0)])),_0x28efd2=_0x30986a-this['aiRatingVariance']();_0x58dec7=_0x58dec7[_0x563674(0x2d1)](_0x1e7435=>_0x1e7435[_0x563674(0x2d0)]>=_0x28efd2),_0x58dec7=VisuMZ[_0x563674(0x259)]['ShuffleArray'](_0x58dec7);for(let _0x3b1973=0x0;_0x3b1973<this[_0x563674(0x28f)]();_0x3b1973++){if(_0x563674(0x2d6)!==_0x563674(0x2e8))this[_0x563674(0x1e4)](_0x3b1973)[_0x563674(0x30d)](this[_0x563674(0x261)](_0x58dec7,_0x28efd2));else{function _0x483101(){const _0x29769d=_0x563674,_0x41e3f2=this[_0x29769d(0x1cc)]()?this['actor']()['note']:this['enemy']()[_0x29769d(0x21e)];if(_0x41e3f2[_0x29769d(0x2ef)](_0x4b6f6f[_0x29769d(0x1fb)][_0x29769d(0x285)]))return _0x367327(_0x432152['$1'])[_0x29769d(0x2ba)](0x0,0x64);else{if(this[_0x29769d(0x1cc)]())return _0x261a94[_0x29769d(0x1f1)];else{if(this[_0x29769d(0x1f4)]())return _0x25b058['EnemyAILevel'];}}}}}},VisuMZ[_0x4c6e21(0x259)]['ShuffleArray']=function(_0x778f92){const _0x5354a3=_0x4c6e21;var _0x567c0e,_0x2926c7,_0x4aa7d9;for(_0x4aa7d9=_0x778f92[_0x5354a3(0x2b2)]-0x1;_0x4aa7d9>0x0;_0x4aa7d9--){_0x567c0e=Math['floor'](Math[_0x5354a3(0x1c6)]()*(_0x4aa7d9+0x1)),_0x2926c7=_0x778f92[_0x4aa7d9],_0x778f92[_0x4aa7d9]=_0x778f92[_0x567c0e],_0x778f92[_0x567c0e]=_0x2926c7;}return _0x778f92;},Game_Battler[_0x4c6e21(0x1f6)][_0x4c6e21(0x203)]=function(_0x10f932){const _0x7c3f19=_0x4c6e21;for(let _0x1de35e=0x0;_0x1de35e<this['numActions']();_0x1de35e++){const _0x42a04b=_0x10f932[0x0];this[_0x7c3f19(0x1e4)](_0x1de35e)[_0x7c3f19(0x30d)](_0x42a04b);}},Game_Battler[_0x4c6e21(0x1f6)][_0x4c6e21(0x1a2)]=function(_0xc31076){const _0x412b8f=_0x4c6e21;for(let _0xfa267f=0x0;_0xfa267f<this[_0x412b8f(0x28f)]();_0xfa267f++){if(_0x412b8f(0x1bc)===_0x412b8f(0x1bc)){const _0x4e8dab=_0xc31076[Math[_0x412b8f(0x190)](_0xc31076[_0x412b8f(0x2b2)])];this[_0x412b8f(0x1e4)](_0xfa267f)[_0x412b8f(0x30d)](_0x4e8dab);}else{function _0x5cb969(){const _0x56486e=_0x412b8f;_0x5548ce['filterForcedTargeting'](this[_0x56486e(0x2c4)](),this[_0x56486e(0x304)]());}}}},Game_Enemy[_0x4c6e21(0x1f6)][_0x4c6e21(0x2fb)]=function(){const _0x2c3cb6=_0x4c6e21;Game_Battler[_0x2c3cb6(0x1f6)][_0x2c3cb6(0x2fb)][_0x2c3cb6(0x316)](this);if(this['numActions']()>0x0){if(_0x2c3cb6(0x287)!==_0x2c3cb6(0x2fc)){const _0x4137ab=this['enemy']()['actions'][_0x2c3cb6(0x2d1)](_0xb9e12=>this['isActionValid'](_0xb9e12));_0x4137ab[_0x2c3cb6(0x2b2)]>0x0&&this[_0x2c3cb6(0x2cd)](_0x4137ab);}else{function _0x4a5943(){const _0x5e5b39=_0x2c3cb6;if(_0x1d650f[_0x5e5b39(0x21e)][_0x5e5b39(0x2ef)](_0x6b4a50[_0x5e5b39(0x1fb)][_0x5e5b39(0x281)]))return[];else return _0x251dac[_0x5e5b39(0x21e)]['match'](_0x557004[_0x5e5b39(0x1fb)][_0x5e5b39(0x1ed)])?_0x4d630b(_0x4a62d8['$1'])[_0x5e5b39(0x22c)](/[\r\n]+/)[_0x5e5b39(0x239)](''):this[_0x5e5b39(0x230)](_0x4a1813);}}}},VisuMZ[_0x4c6e21(0x259)][_0x4c6e21(0x1cd)]=Game_Unit[_0x4c6e21(0x1f6)][_0x4c6e21(0x21c)],Game_Unit['prototype'][_0x4c6e21(0x21c)]=function(){const _0x192bac=_0x4c6e21;VisuMZ['BattleAI']['Game_Unit_initialize'][_0x192bac(0x316)](this),this[_0x192bac(0x28c)]();},Game_Unit['prototype'][_0x4c6e21(0x28c)]=function(){const _0xcf92e0=_0x4c6e21;this[_0xcf92e0(0x1f0)]=![],this[_0xcf92e0(0x2b0)]();},VisuMZ[_0x4c6e21(0x259)]['Game_Unit_aliveMembers']=Game_Unit[_0x4c6e21(0x1f6)]['aliveMembers'],Game_Unit[_0x4c6e21(0x1f6)][_0x4c6e21(0x1e0)]=function(){const _0x47671d=_0x4c6e21;let _0x281ca3=VisuMZ[_0x47671d(0x259)][_0x47671d(0x196)][_0x47671d(0x316)](this);if(this[_0x47671d(0x1f0)]){if(_0x47671d(0x238)==='hkhsG'){function _0x29fd3f(){const _0x47531f=_0x47671d;if(this[_0x47531f(0x28f)]()>0x0){const _0x382c9c=this['usableSkills']();if(this[_0x47531f(0x250)]())_0x382c9c[_0x47531f(0x228)](_0x58d723[this[_0x47531f(0x270)]()]);if(this[_0x47531f(0x1ae)]())_0x382c9c[_0x47531f(0x228)](_0x368400[this[_0x47531f(0x2f9)]()]);const _0x164005=this['referenceEnemyForAI'](),_0x2b13bd=_0xb1dc47[_0x47531f(0x293)](_0x164005[_0x47531f(0x1b1)]);for(const _0x318ef4 of _0x2b13bd){if(_0x318ef4[_0x47531f(0x254)]===0x1)_0x318ef4[_0x47531f(0x254)]=this[_0x47531f(0x270)]();if(_0x318ef4[_0x47531f(0x254)]===0x2)_0x318ef4[_0x47531f(0x254)]=this[_0x47531f(0x2f9)]();}const _0x4eb3f8=_0x2b13bd['filter'](_0x285111=>this[_0x47531f(0x244)](_0x285111)&&_0x382c9c[_0x47531f(0x1df)](_0x3d6ee5[_0x285111['skillId']]));if(_0x4eb3f8[_0x47531f(0x2b2)]>0x0){this['selectAllActions'](_0x4eb3f8);return;}}_0x1d396f[_0x47531f(0x259)][_0x47531f(0x288)]['call'](this);}}else{const _0x2c5856=AIManager['forcedTargets']();_0x281ca3=_0x281ca3[_0x47671d(0x2d1)](_0x254c7f=>_0x2c5856['includes'](_0x254c7f));}}return _0x281ca3;},VisuMZ[_0x4c6e21(0x259)][_0x4c6e21(0x269)]=Game_Unit[_0x4c6e21(0x1f6)][_0x4c6e21(0x2ac)],Game_Unit[_0x4c6e21(0x1f6)][_0x4c6e21(0x2ac)]=function(){const _0x3857cd=_0x4c6e21;AIManager['hasForcedTargets']()&&(this['_applyAIForcedTargetFilters']=!![]);const _0x363427=VisuMZ[_0x3857cd(0x259)][_0x3857cd(0x269)][_0x3857cd(0x316)](this);return this['_applyAIForcedTargetFilters']=![],_0x363427;},Game_Unit['prototype'][_0x4c6e21(0x2b0)]=function(){const _0x4e923f=_0x4c6e21;this[_0x4e923f(0x241)]={'evaRates':[],'mevRates':[],'elementRates':{}};},Game_Unit[_0x4c6e21(0x1f6)][_0x4c6e21(0x2eb)]=function(){const _0x38e342=_0x4c6e21;if(this[_0x38e342(0x241)]===undefined)this[_0x38e342(0x2b0)]();return this[_0x38e342(0x241)];},Game_Unit[_0x4c6e21(0x1f6)]['addXParamAIKnowledge']=function(_0x181ec6,_0x872854){const _0x38e16d=_0x4c6e21;this[_0x38e16d(0x2eb)]()[_0x181ec6]=this[_0x38e16d(0x2eb)]()[_0x181ec6]||[];const _0x33cb52=_0x872854[_0x38e16d(0x1cc)]()?_0x872854[_0x38e16d(0x2a6)]():_0x872854[_0x38e16d(0x21b)]();!this[_0x38e16d(0x2eb)]()[_0x181ec6][_0x38e16d(0x1df)](_0x33cb52)&&this[_0x38e16d(0x2eb)]()[_0x181ec6][_0x38e16d(0x228)](_0x33cb52);},Game_Unit[_0x4c6e21(0x1f6)][_0x4c6e21(0x1b5)]=function(_0x361bca,_0xd26284){const _0x135aab=_0x4c6e21;if(!VisuMZ[_0x135aab(0x259)][_0x135aab(0x192)][_0x135aab(0x232)][_0x135aab(0x1d8)])return!![];const _0x4d88cd=_0x361bca[_0x135aab(0x2ef)](/EVA/i)?'evaRates':_0x135aab(0x256);this[_0x135aab(0x2eb)]()[_0x4d88cd]=this[_0x135aab(0x2eb)]()[_0x4d88cd]||[];const _0x346a47=_0xd26284[_0x135aab(0x1cc)]()?_0xd26284['actorId']():_0xd26284[_0x135aab(0x21b)]();return this[_0x135aab(0x2eb)]()[_0x4d88cd][_0x135aab(0x1df)](_0x346a47);},Game_Unit[_0x4c6e21(0x1f6)][_0x4c6e21(0x1d6)]=function(_0x5e2644,_0x364041){const _0xe9b0bc=_0x4c6e21;this[_0xe9b0bc(0x2eb)]()['elementRates']=this[_0xe9b0bc(0x2eb)]()['elementRates']||{};const _0x5c43e3=this['aiKnowledge']()[_0xe9b0bc(0x26d)];_0x5c43e3[_0x5e2644]=_0x5c43e3[_0x5e2644]||[];const _0x21b2e3=_0x364041[_0xe9b0bc(0x1cc)]()?_0x364041[_0xe9b0bc(0x2a6)]():_0x364041[_0xe9b0bc(0x21b)]();if(!_0x5c43e3[_0x5e2644][_0xe9b0bc(0x1df)](_0x21b2e3)){if(_0xe9b0bc(0x2cc)!==_0xe9b0bc(0x2cc)){function _0x30329e(){const _0x30307b=_0xe9b0bc;return _0x26cbeb[_0x30307b(0x259)]['Settings'][_0x30307b(0x232)]['UnknownElementRate'];}}else _0x5c43e3[_0x5e2644][_0xe9b0bc(0x228)](_0x21b2e3);}},Game_Unit[_0x4c6e21(0x1f6)][_0x4c6e21(0x27d)]=function(_0x26b9af,_0xaaaf0c){const _0x2e6b23=_0x4c6e21;if(!VisuMZ[_0x2e6b23(0x259)][_0x2e6b23(0x192)][_0x2e6b23(0x232)][_0x2e6b23(0x1d8)])return!![];this[_0x2e6b23(0x2eb)]()['elementRates']=this[_0x2e6b23(0x2eb)]()[_0x2e6b23(0x26d)]||{};const _0x5689f0=this[_0x2e6b23(0x2eb)]()[_0x2e6b23(0x26d)];_0x5689f0[_0x26b9af]=_0x5689f0[_0x26b9af]||[];const _0x58d9b2=_0xaaaf0c[_0x2e6b23(0x1cc)]()?_0xaaaf0c[_0x2e6b23(0x2a6)]():_0xaaaf0c[_0x2e6b23(0x21b)]();return _0x5689f0[_0x26b9af][_0x2e6b23(0x1df)](_0x58d9b2);},VisuMZ[_0x4c6e21(0x259)][_0x4c6e21(0x208)]=Game_Troop['prototype'][_0x4c6e21(0x2d3)],Game_Troop[_0x4c6e21(0x1f6)]['setup']=function(_0x4be09c){const _0x330238=_0x4c6e21;VisuMZ[_0x330238(0x259)][_0x330238(0x208)][_0x330238(0x316)](this,_0x4be09c),this[_0x330238(0x2b0)]();};