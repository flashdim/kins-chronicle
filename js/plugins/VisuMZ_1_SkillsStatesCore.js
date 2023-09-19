//=============================================================================
// VisuStella MZ - Skills & States Core
// VisuMZ_1_SkillsStatesCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_SkillsStatesCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.SkillsStatesCore = VisuMZ.SkillsStatesCore || {};
VisuMZ.SkillsStatesCore.version = 1.20;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.20] [SkillsStatesCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Skills_and_States_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Skills & States Core plugin extends and builds upon the functionality of
 * RPG Maker MZ's inherent skill, state, and buff functionalities and allows
 * game devs to customize its various aspects.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Assigning multiple Skill Types to Skills.
 * * Making custom Skill Cost Types (such as HP, Gold, and Items).
 * * Allowing Skill Costs to become percentile-based or dynamic either directly
 *   through the Skills themselves or through trait-like notetags.
 * * Replacing gauges for different classes to display different types of
 *   Skill Cost Type resources.
 * * Hiding/Showing and enabling/disabling skills based on switches, learned
 *   skills, and code.
 * * Setting rulings for states, including if they're cleared upon death, how
 *   reapplying the state affects their turn count, and more.
 * * Allowing states to be categorized and affected by categories, too.
 * * Displaying turn counts on states drawn in the window or on sprites.
 * * Manipulation of state, buff, and debuff turns through skill and item
 *   effect notetags.
 * * Create custom damage over time state calculations through notetags.
 * * Allow database objects to apply passive states to its user.
 * * Passive states can have conditions before they become active as well.
 * * Updated Skill Menu Scene layout to fit more modern appearances.
 * * Added bonus if Items & Equips Core is installed to utilize the Shop Status
 *   Window to display skill data inside the Skill Menu.
 * * Control over various aspects of the Skill Menu Scene.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 1 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
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
 * Buff & Debuff Level Management
 *
 * - In RPG Maker MZ, buffs and debuffs when applied to one another will shift
 * the buff modifier level up or down. This plugin will add an extra change to
 * the mechanic by making it so that once the buff modifier level reaches a
 * neutral point, the buff or debuff is removed altogether and resets the buff
 * and debuff turn counter for better accuracy.
 *
 * ---
 *
 * Skill Costs
 *
 * - In RPG Maker MZ, skill costs used to be hard-coded. Now, all Skill Cost
 * Types are now moved to the Plugin Parameters, including MP and TP. This
 * means that from payment to checking for them, it's all done through the
 * options available.
 *
 * - By default in RPG Maker MZ, displayed skill costs would only display only
 * one type: TP if available, then MP. If a skill costs both TP and MP, then
 * only TP was displayed. This plugin changes that aspect by displaying all the
 * cost types available in order of the Plugin Parameter Skill Cost Types.
 *
 * - By default in RPG Maker MZ, displayed skill costs were only color-coded.
 * This plugin changes that aspect by displaying the Skill Cost Type's name
 * alongside the cost. This is to help color-blind players distinguish what
 * costs a skill has.
 *
 * ---
 *
 * Sprite Gauges
 *
 * - Sprite Gauges in RPG Maker MZ by default are hard-coded and only work for
 * HP, MP, TP, and Time (used for ATB). This plugin makes it possible for them
 * to be customized through the use of Plugin Parameters under the Skill Cost
 * Types and their related-JavaScript entries.
 *
 * ---
 * 
 * State Displays
 * 
 * - To put values onto states and display them separately from the state turns
 * you can use the following script calls.
 * 
 *   battler.getStateDisplay(stateId)
 *   - This returns whatever value is stored for the specified battler under
 *     that specific state value.
 *   - If there is no value to be returned it will return an empty string.
 * 
 *   battler.setStateDisplay(stateId, value)
 *   - This sets the display for the battler's specific state to whatever you
 *     declared as the value.
 *   - The value is best used as a number or a string.
 * 
 *   battler.clearStateDisplay(stateId)
 *   - This clears the display for the battler's specific state.
 *   - In short, this sets the stored display value to an empty string.
 * 
 * ---
 *
 * Window Functions Moved
 *
 * - Some functions found in RPG Maker MZ's default code for Window_StatusBase
 * and Window_SkillList are now moved to Window_Base to make the functions
 * available throughout all windows for usage.
 *
 * ---
 *
 * ============================================================================
 * Passive State Clarification
 * ============================================================================
 * 
 * This section will explain various misconceptions regarding passive states.
 * No, passive states do not work the same way as states code-wise. Yes, they
 * use the same effects as states mechanically, but there are differences.
 * 
 * ---
 * 
 * For those using the code "a.isStateAffected(10)" to check if a target is
 * affected by a state or not, this does NOT check passive states. This only
 * checks for states that were directly applied to the target.
 * 
 * This is NOT a bug.
 * 
 * Instead, use "a.states().includes($dataStates[10])" to check for them. This
 * code will search for both directly applied states and passive states alike.
 *
 * ---
 * 
 * As passive states are NOT considered directly applied to, they do NOT match
 * a Conditional Branch's state check as well. The Conditional Branch effect
 * checks for an affected state.
 * 
 * ---
 * 
 * Because passive states are NOT directly applied to a battler, the functions
 * of "addNewState", "addState", "eraseState", "removeState" do NOT apply to
 * passive states either. This means that any of the related JS notetags tied
 * to those functions will not occur either.
 * 
 * ---
 * 
 * Why are passive states not considered affected by? Let's look at it
 * differently. There are two ways to grant skills to actors. They can acquire
 * skills by levels/items/events or they can equip gear that temporarily grants
 * the skill in question.
 * 
 * Learning the skill is direct. Temporarily granting the skill is indirect.
 * These two factors have mechanical importance and require differentiation.
 * 
 * Regular states and passive states are the same way. Regular states are
 * directly applied, therefore, need to be distinguished in order for things
 * like state turns and steps, removal conditionals, and similar to matter at
 * all. Passive states are indirect and are therefore, unaffected by state
 * turns, steps, and removal conditions. These mechanical differences are
 * important for how RPG Maker works.
 * 
 * ---
 * 
 * Once again, it is NOT a bug that when using "a.isStateAffected(10)" to
 * check if a target has a passive state will return false.
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
 * === General Skill Notetags ===
 *
 * The following are general notetags that are skill-related.
 *
 * ---
 *
 * <Skill Type: x>
 * <Skill Types: x,x,x>
 *
 * <Skill Type: name>
 * <Skill Types: name, name, name>
 *
 * - Used for: Skill Notetags
 * - Marks the skill to have multiple Skill Types, meaning they would appear
 *   under different skill types without needing to create duplicate skills.
 * - Replace 'x' with a number value representing the Skill Type's ID.
 * - If using 'name' notetag variant, replace 'name' with the Skill Type(s)
 *   name desired to be added.
 *
 * ---
 * 
 * <List Name: name>
 * 
 * - Used for: Skill Notetags
 * - Makes the name of the skill appear different when show in the skill list.
 * - Using \V[x] as a part of the name will display that variable.
 * 
 * ---
 *
 * === Skill Cost Notetags ===
 *
 * The following are notetags that can be used to adjust skill costs. Some of
 * these notetags are added through the Plugin Parameter: Skill Cost Types and
 * can be altered there. This also means that some of these notetags can have
 * their functionality altered and/or removed.
 *
 * ---
 *
 * <type Cost: x>
 * <type Cost: x%>
 *
 * - Used for: Skill Notetags
 * - These notetags are used to designate costs of custom or already existing
 *   types that cannot be made by the Database Editor.
 * - Replace 'type' with a resource type. Existing ones found in the Plugin
 *   Parameters are 'HP', 'MP', 'TP', 'Gold', and 'Potion'. More can be added.
 * - Replace 'x' with a number value to determine the exact type cost value.
 *   This lets you bypass the Database Editor's limit of 9,999 MP and 100 TP.
 * - The 'x%' version is replaced with a percentile value to determine a cost
 *   equal to a % of the type's maximum quantity limit.
 * - Functionality for these notetags can be altered in the Plugin Parameters.
 *
 * Examples:
 *   <HP Cost: 500>
 *   <MP Cost: 25%>
 *   <Gold Cost: 3000>
 *   <Potion Cost: 5>
 *
 * ---
 *
 * <type Cost Max: x>
 * <type Cost Min: x>
 *
 * - Used for: Skill Notetags
 * - These notetags are used to ensure conditional and % costs don't become too
 *   large or too small.
 * - Replace 'type' with a resource type. Existing ones found in the Plugin
 *   Parameters are 'HP', 'MP', 'TP', 'Gold', and 'Potion'. More can be added.
 * - Replace 'x' with a number value to determine the maximum or minimum values
 *   that the cost can be.
 * - Functionality for these notetags can be altered in the Plugin Parameters.
 *
 * Examples:
 *   <HP Cost Max: 1500>
 *   <MP Cost Min: 5>
 *   <Gold Cost Max: 10000>
 *   <Potion Cost Min: 3>
 *
 * ---
 *
 * <type Cost: +x>
 * <type Cost: -x>
 *
 * <type Cost: x%>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Replace 'type' with a resource type. Existing ones found in the Plugin
 *   Parameters are 'HP', 'MP', 'TP', 'Gold', and 'Potion'. More can be added.
 * - For % notetag variant: Replace 'x' with a number value to determine the
 *   rate to adjust the Skill Cost Type by as a flat value. This is applied
 *   before <type Cost: +x> and <type Cost: -x> notetags.
 * - For + and - notetag variants: Replace 'x' with a number value to determine
 *   how much to adjust the Skill Cost Type by as a flat value. This is applied
 *   after <type Cost: x%> notetags.
 * - Functionality for these notetags can be altered in the Plugin Parameters.
 *
 * Examples:
 *   <HP Cost: +20>
 *   <MP Cost: -10>
 *   <Gold Cost: 50%>
 *   <Potion Cost: 200%>
 *
 * ---
 *
 * <Custom Cost Text>
 *  text
 * </Custom Cost Text>
 *
 * - Used for: Skill Notetags
 * - Allows you to insert custom text into the skill's cost area towards the
 *   end of the costs.
 * - Replace 'text' with the text you wish to display.
 * - Text codes may be used.
 *
 * ---
 *
 * === JavaScript Notetags: Skill Costs ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * determine any dynamic Skill Cost Types used for particular skills.
 *
 * ---
 *
 * <JS type Cost>
 *  code
 *  code
 *  cost = code;
 * </JS type Cost>
 *
 * - Used for: Skill Notetags
 * - Replace 'type' with a resource type. Existing ones found in the Plugin
 *   Parameters are 'HP', 'MP', 'TP', 'Gold', and 'Potion'. More can be added.
 * - Replace 'code' to determine the type 'cost' of the skill.
 * - Insert the final type cost into the 'cost' variable.
 * - The 'user' variable refers to the user about to perform the skill.
 * - The 'skill' variable refers to the skill being used.
 * - Functionality for the notetag can be altered in the Plugin Parameters.
 *
 * ---
 *
 * === Gauge Replacement Notetags ===
 *
 * Certain classes can have their gauges swapped out for other Skill Cost
 * Types. This is especially helpful for the classes that don't utilize those
 * Skill Cost Types. You can mix and match them however you want.
 *
 * ---
 *
 * <Replace HP Gauge: type>
 * <Replace MP Gauge: type>
 * <Replace TP Gauge: type>
 *
 * - Used for: Class Notetags
 * - Replaces the HP (1st), MP (2nd), or TP (3rd) gauge with a different Skill
 *   Cost Type.
 * - Replace 'type' with a resource type. Existing ones found in the Plugin
 *   Parameters are 'HP', 'MP', 'TP', 'Gold', and 'Potion'. More can be added.
 * - Replace 'type' with 'none' to not display any gauges there.
 * - The <Replace TP Gauge: type> will require 'Display TP in Window' setting
 *   to be on in the Database > System 1 tab.
 * - Functionality for the notetags can be altered by changes made to the
 *   Skill & States Core Plugin Parameters.
 *
 * ---
 *
 * === Skill Accessibility Notetags ===
 *
 * Sometimes, you don't want all skills to be visible whether it be to hide
 * menu-only skills during battle, until certain switches are turned ON/OFF, or
 * until certain skills have been learned.
 *
 * ---
 *
 * <Hide in Battle>
 * <Hide outside Battle>
 *
 * - Used for: Skill Notetags
 * - Makes the specific skill visible or hidden depending on whether or not the
 *   player is currently in battle.
 *
 * ---
 *
 * <Show Switch: x>
 *
 * <Show All Switches: x,x,x>
 * <Show Any Switches: x,x,x>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on switches.
 * - Replace 'x' with the switch ID to determine the skill's visibility.
 * - If 'All' notetag variant is used, skill will be hidden until all switches
 *   are ON. Then, it would be shown.
 * - If 'Any' notetag variant is used, skill will be shown if any of the
 *   switches are ON. Otherwise, it would be hidden.
 *
 * ---
 *
 * <Hide Switch: x>
 *
 * <Hide All Switches: x,x,x>
 * <Hide Any Switches: x,x,x>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on switches.
 * - Replace 'x' with the switch ID to determine the skill's visibility.
 * - If 'All' notetag variant is used, skill will be shown until all switches
 *   are ON. Then, it would be hidden.
 * - If 'Any' notetag variant is used, skill will be hidden if any of the
 *   switches are ON. Otherwise, it would be shown.
 *
 * ---
 *
 * <Show if learned Skill: x>
 *
 * <Show if learned All Skills: x,x,x>
 * <Show if learned Any Skills: x,x,x>
 *
 * <Show if learned Skill: name>
 *
 * <Show if learned All Skills: name, name, name>
 * <Show if learned Any Skills: name, name, name>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on skills learned.
 * - This does not apply to skills added by traits on actors, classes, any
 *   equipment, or states. These are not considered learned skills. They are
 *   considered temporary skills.
 * - Replace 'x' with the skill ID to determine the skill's visibility.
 * - If 'name' notetag viarant is used, replace 'name' with the skill's name to
 *   be checked for the notetag.
 * - If 'All' notetag variant is used, skill will be hidden until all skills
 *   are learned. Then, it would be shown.
 * - If 'Any' notetag variant is used, skill will be shown if any of the skills
 *   are learned. Otherwise, it would be hidden.
 *
 * ---
 *
 * <Hide if learned Skill: x>
 *
 * <Hide if learned All Skills: x,x,x>
 * <Hide if learned Any Skills: x,x,x>
 *
 * <Hide if learned Skill: name>
 *
 * <Hide if learned All Skills: name, name, name>
 * <Hide if learned Any Skills: name, name, name>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on skills learned.
 * - This does not apply to skills added by traits on actors, classes, any
 *   equipment, or states. These are not considered learned skills. They are
 *   considered temporary skills.
 * - Replace 'x' with the skill ID to determine the skill's visibility.
 * - If 'name' notetag viarant is used, replace 'name' with the skill's name to
 *   be checked for the notetag.
 * - If 'All' notetag variant is used, skill will be shown until all skills
 *   are learned. Then, it would be hidden.
 * - If 'Any' notetag variant is used, skill will be hidden if any of the
 *   skills are learned. Otherwise, it would be shown.
 *
 * ---
 *
 * <Show if has Skill: x>
 *
 * <Show if have All Skills: x,x,x>
 * <Show if have Any Skills: x,x,x>
 *
 * <Show if has Skill: name>
 *
 * <Show if have All Skills: name, name, name>
 * <Show if have Any Skills: name, name, name>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on skills available.
 * - This applies to both skills that have been learned and/or temporarily
 *   added through traits on actors, classes, equipment, or states.
 * - Replace 'x' with the skill ID to determine the skill's visibility.
 * - If 'name' notetag viarant is used, replace 'name' with the skill's name to
 *   be checked for the notetag.
 * - If 'All' notetag variant is used, skill will be hidden until all skills
 *   are learned. Then, it would be shown.
 * - If 'Any' notetag variant is used, skill will be shown if any of the skills
 *   are learned. Otherwise, it would be hidden.
 *
 * ---
 *
 * <Hide if has Skill: x>
 *
 * <Hide if have All Skills: x,x,x>
 * <Hide if have Any Skills: x,x,x>
 *
 * <Hide if has Skill: name>
 *
 * <Hide if have All Skills: name, name, name>
 * <Hide if have Any Skills: name, name, name>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on skills available.
 * - This applies to both skills that have been learned and/or temporarily
 *   added through traits on actors, classes, equipment, or states.
 * - Replace 'x' with the skill ID to determine the skill's visibility.
 * - If 'name' notetag viarant is used, replace 'name' with the skill's name to
 *   be checked for the notetag.
 * - If 'All' notetag variant is used, skill will be shown until all skills
 *   are learned. Then, it would be hidden.
 * - If 'Any' notetag variant is used, skill will be hidden if any of the
 *   skills are learned. Otherwise, it would be shown.
 *
 * ---
 *
 * <Enable Switch: x>
 *
 * <Enable All Switches: x,x,x>
 * <Enable Any Switches: x,x,x>
 *
 * - Used for: Skill Notetags
 * - Determines the enabled status of the skill based on switches.
 * - Replace 'x' with the switch ID to determine the skill's enabled status.
 * - If 'All' notetag variant is used, skill will be disabled until all
 *   switches are ON. Then, it would be enabled.
 * - If 'Any' notetag variant is used, skill will be enabled if any of the
 *   switches are ON. Otherwise, it would be disabled.
 *
 * ---
 *
 * <Disable Switch: x>
 *
 * <Disable All Switches: x,x,x>
 * <Disable Any Switches: x,x,x>
 *
 * - Used for: Skill Notetags
 * - Determines the enabled status of the skill based on switches.
 * - Replace 'x' with the switch ID to determine the skill's enabled status.
 * - If 'All' notetag variant is used, skill will be enabled until all switches
 *   are ON. Then, it would be disabled.
 * - If 'Any' notetag variant is used, skill will be disabled if any of the
 *   switches are ON. Otherwise, it would be enabled.
 *
 * ---
 *
 * === JavaScript Notetags: Skill Accessibility ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * determine if a skill can be accessible visibly or through usage.
 *
 * ---
 *
 * <JS Skill Visible>
 *  code
 *  code
 *  visible = code;
 * </JS Skill Visible>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on JavaScript code.
 * - Replace 'code' to determine the type visibility of the skill.
 * - The 'visible' variable returns a boolean (true/false) to determine if the
 *   skill will be visible or not.
 * - The 'user' variable refers to the user with the skill.
 * - The 'skill' variable refers to the skill being checked.
 * - All other visibility conditions must be met for this code to count.
 *
 * ---
 *
 * <JS Skill Enable>
 *  code
 *  code
 *  enabled = code;
 * </JS Skill Enable>
 *
 * - Used for: Skill Notetags
 * - Determines the enabled status of the skill based on JavaScript code.
 * - Replace 'code' to determine the type enabled status of the skill.
 * - The 'enabled' variable returns a boolean (true/false) to determine if the
 *   skill will be enabled or not.
 * - The 'user' variable refers to the user with the skill.
 * - The 'skill' variable refers to the skill being checked.
 * - All other skill conditions must be met in order for this to code to count.
 *
 * ---
 *
 * === General State-Related Notetags ===
 *
 * The following notetags are centered around states, such as how their turn
 * counts are displayed, items and skills that affect state turns, if the state
 * can avoid removal by death state, etc.
 *
 * ---
 *
 * <No Death Clear>
 *
 * - Used for: State Notetags
 * - Prevents this state from being cleared upon death.
 * - This allows this state to be added to an already dead battler, too.
 *
 * ---
 *
 * <No Recover All Clear>
 *
 * - Used for: State Notetags
 * - Prevents this state from being cleared upon using the Recover All command.
 *
 * ---
 *
 * <Group Defeat>
 *
 * - Used for: State Notetags
 * - If an entire party is affected by states with the <Group Defeat> notetag,
 *   they are considered defeated.
 * - Usage for this includes party-wide petrification, frozen, etc.
 *
 * ---
 *
 * <Reapply Rules: Ignore>
 * <Reapply Rules: Reset>
 * <Reapply Rules: Greater>
 * <Reapply Rules: Add>
 *
 * - Used for: State Notetags
 * - Choose what kind of rules this state follows if the state is being applied
 *   to a target that already has the state. This affects turns specifically.
 * - 'Ignore' will bypass any turn changes.
 * - 'Reset' will recalculate the state's turns.
 * - 'Greater' will choose to either keep the current turn count if it's higher
 *   than the reset amount or reset it if the current turn count is lower.
 * - 'Add' will add the state's turn count to the applied amount.
 * - If this notetag isn't used, it will use the rules set in the States >
 *   Plugin Parameters.
 *
 * ---
 *
 * <Positive State>
 * <Negative State>
 *
 * - Used for: State Notetags
 * - Marks the state as a positive state or negative state, also altering the
 *   state's turn count color to match the Plugin Parameter settings.
 * - This also puts the state into either the 'Positive' category or
 *   'Negative' category.
 *
 * ---
 *
 * <Category: name>
 * <Category: name, name, name>
 *
 * - Used for: State Notetags
 * - Arranges states into certain/multiple categories.
 * - Replace 'name' with a category name to mark this state as.
 * - Insert multiples of this to mark the state with  multiple categories.
 *
 * ---
 *
 * <Categories>
 *  name
 *  name
 * </Categories>
 *
 * - Used for: State Notetags
 * - Arranges states into certain/multiple categories.
 * - Replace each 'name' with a category name to mark this state as.
 *
 * ---
 *
 * <State x Category Remove: y>
 * 
 * <State x Category Remove: All>
 *
 * - Used for: Skill, Item Notetags
 * - Allows the skill/item to remove 'y' states from specific category 'x'.
 * - Replace 'x' with a category name to remove from.
 * - Replace 'y' with the number of times to remove from that category.
 * - Use the 'All' variant to remove all of the states of that category.
 * - Insert multiples of this to remove different types of categories.
 *
 * ---
 *
 * <Hide State Turns>
 *
 * - Used for: State Notetags
 * - Hides the state turns from being shown at all.
 * - This will by pass any Plugin Parameter settings.
 *
 * ---
 *
 * <Turn Color: x>
 * <Turn Color: #rrggbb>
 *
 * - Used for: State Notetags
 * - Hides the state turns from being shown at all.
 * - Determines the color of the state's turn count.
 * - Replace 'x' with a number value depicting a window text color.
 * - Replace 'rrggbb' with a hex color code for a more custom color.
 *
 * ---
 *
 * <State id Turns: +x>
 * <State id Turns: -x>
 *
 * <Set State id Turns: x>
 *
 * <State name Turns: +x>
 * <State name Turns: -x>
 *
 * <Set State name Turns: x>
 *
 * - Used for: Skill, Item Notetags
 * - If the target is affected by state 'id' or state 'name', change the state
 *   turn duration for target.
 * - For 'id' variant, replace 'id' with the ID of the state to modify.
 * - For 'name' variant, replace 'name' with the name of the state to modify.
 * - Replace 'x' with the value you wish to increase, decrease, or set to.
 * - Insert multiples of this notetag to affect multiple states at once.
 *
 * ---
 *
 * <param Buff Turns: +x>
 * <param Buff Turns: -x>
 *
 * <Set param Buff Turns: x>
 *
 * - Used for: Skill, Item Notetags
 * - If the target is affected by a 'param' buff, change that buff's turn
 *   duration for target.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter buff to modify.
 * - Replace 'x' with the value you wish to increase, decrease, or set to.
 * - Insert multiples of this notetag to affect multiple parameters at once.
 *
 * ---
 *
 * <param Debuff Turns: +x>
 * <param Debuff Turns: -x>
 *
 * <Set param Debuff Turns: x>
 *
 * - Used for: Skill, Item Notetags
 * - If the target is affected by a 'param' debuff, change that debuff's turn
 *   duration for target.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter debuff to modify.
 * - Replace 'x' with the value you wish to increase, decrease, or set to.
 * - Insert multiples of this notetag to affect multiple parameters at once.
 *
 * ---
 *
 * === JavaScript Notetags: On Add/Erase/Expire ===
 *
 * Using JavaScript code, you can use create custom effects that occur when a
 * state has bee added, erased, or expired.
 * 
 * ---
 *
 * <JS On Add State>
 *  code
 *  code
 * </JS On Add State>
 *
 * - Used for: State Notetags
 * - When a state is added, run the code added by this notetag.
 * - The 'user' variable refers to the current active battler.
 * - The 'target' variable refers to the battler affected by this state.
 * - The 'origin' variable refers to the one who applied this state.
 * - The 'state' variable refers to the current state being affected.
 *
 * ---
 *
 * <JS On Erase State>
 *  code
 *  code
 * </JS On Erase State>
 *
 * - Used for: State Notetags
 * - When a state is erased, run the code added by this notetag.
 * - The 'user' variable refers to the current active battler.
 * - The 'target' variable refers to the battler affected by this state.
 * - The 'origin' variable refers to the one who applied this state.
 * - The 'state' variable refers to the current state being affected.
 *
 * ---
 *
 * <JS On Expire State>
 *  code
 *  code
 * </JS On Expire State>
 *
 * - Used for: State Notetags
 * - When a state has expired, run the code added by this notetag.
 * - The 'user' variable refers to the current active battler.
 * - The 'target' variable refers to the battler affected by this state.
 * - The 'origin' variable refers to the one who applied this state.
 * - The 'state' variable refers to the current state being affected.
 *
 * ---
 *
 * === JavaScript Notetags: Slip Damage/Healing ===
 *
 * Slip Damage, in RPG Maker vocabulary, refers to damage over time. The
 * following notetags allow you to perform custom slip damage/healing.
 *
 * ---
 *
 * <JS type Slip Damage>
 *  code
 *  code
 *  damage = code;
 * </JS type Slip Damage>
 *
 * - Used for: State Notetags
 * - Code used to determine how much slip damage is dealt to the affected unit
 *   during each regeneration phase.
 * - Replace 'type' with 'HP', 'MP', or 'TP'.
 * - Replace 'code' with the calculations on what to determine slip damage.
 * - The 'user' variable refers to the origin of the state.
 * - The 'target' variable refers to the affected unit receiving the damage.
 * - The 'state' variable refers to the current state being affected.
 * - The 'damage' variable is the finalized slip damage to be dealt.
 * - When these states are applied via action effects, the slip calculations
 *   are one time calculations made upon applying and the damage is cached to
 *   be used for future on regeneration calculations.
 * - For that reason, do not include game mechanics here such as adding states,
 *   buffs, debuffs, etc. as this notetag is meant for calculations only. Use
 *   the VisuStella Battle Core's <JS Pre-Regenerate> and <JS Post-Regenerate>
 *   notetags for game mechanics instead.
 * - Passive states and states with the <JS Slip Refresh> notetag are exempt
 *   from the one time calculation and recalculated each regeneration phase.
 *
 * ---
 *
 * <JS type Slip Heal>
 *  code
 *  code
 *  heal = code;
 * </JS type Slip Heal>
 *
 * - Used for: State Notetags
 * - Code used to determine how much slip healing is dealt to the affected unit
 *   during each regeneration phase.
 * - Replace 'type' with 'HP', 'MP', or 'TP'.
 * - Replace 'code' with the calculations on what to determine slip healing.
 * - The 'user' variable refers to the origin of the state.
 * - The 'target' variable refers to the affected unit receiving the healing.
 * - The 'state' variable refers to the current state being affected.
 * - The 'heal' variable is the finalized slip healing to be recovered.
 * - When these states are applied via action effects, the slip calculations
 *   are one time calculations made upon applying and the damage is cached to
 *   be used for future on regeneration calculations.
 * - For that reason, do not include game mechanics here such as adding states,
 *   buffs, debuffs, etc. as this notetag is meant for calculations only. Use
 *   the VisuStella Battle Core's <JS Pre-Regenerate> and <JS Post-Regenerate>
 *   notetags for game mechanics instead.
 * - Passive states and states with the <JS Slip Refresh> notetag are exempt
 *   from the one time calculation and recalculated each regeneration phase.
 *
 * ---
 * 
 * <JS Slip Refresh>
 * 
 * - Used for: State Notetags
 * - Refreshes the calculations made for the JS Slip Damage/Heal amounts at the
 *   start of each regeneration phase to allow for dynamic damage ranges.
 * 
 * ---
 *
 * === Passive State Notetags ===
 *
 * Passive States are states that are always applied to actors and enemies
 * provided that their conditions have been met. These can be granted through
 * database objects or through the Passive States Plugin Parameters.
 * 
 * ---
 * 
 * For those using the code "a.isStateAffected(10)" to check if a target is
 * affected by a state or not, this does NOT check passive states. This only
 * checks for states that were directly applied to the target.
 * 
 * This is NOT a bug.
 * 
 * Instead, use "a.states().includes($dataStates[10])" to check for them. This
 * code will search for both directly applied states and passive states alike.
 *
 * ---
 * 
 * As passive states are NOT considered directly applied to, they do NOT match
 * a Conditional Branch's state check as well. The Conditional Branch effect
 * checks for an affected state.
 * 
 * ---
 * 
 * Because passive states are NOT directly applied to a battler, the functions
 * of "addNewState", "addState", "eraseState", "removeState" do NOT apply to
 * passive states either. This means that any of the related JS notetags tied
 * to those functions will not occur either.
 * 
 * ---
 * 
 * Why are passive states not considered affected by? Let's look at it
 * differently. There are two ways to grant skills to actors. They can acquire
 * skills by levels/items/events or they can equip gear that temporarily grants
 * the skill in question.
 * 
 * Learning the skill is direct. Temporarily granting the skill is indirect.
 * These two factors have mechanical importance and require differentiation.
 * 
 * Regular states and passive states are the same way. Regular states are
 * directly applied, therefore, need to be distinguished in order for things
 * like state turns and steps, removal conditionals, and similar to matter at
 * all. Passive states are indirect and are therefore, unaffected by state
 * turns, steps, and removal conditions. These mechanical differences are
 * important for how RPG Maker works.
 * 
 * ---
 * 
 * Once again, it is NOT a bug that when using "a.isStateAffected(10)" to
 * check if a target has a passive state will return false.
 * 
 * ---
 *
 * <Passive State: x>
 * <Passive States: x,x,x>
 *
 * <Passive State: name>
 * <Passive States: name, name, name>
 *
 * - Used for: Actor, Class, Skill, Item, Weapon, Armor, Enemy Notetags
 * - Adds passive state(s) x to trait object, applying it to related actor or
 *   enemy unit(s).
 * - Replace 'x' with a number to determine which state to add as a passive.
 * - If using 'name' notetag variant, replace 'name' with the name of the
 *   state(s) to add as a passive.
 * - Note: If you plan on applying a passive state through a skill, it must be
 *   through a skill that has been learned by the target and not a skill that
 *   is given through a trait.
 *
 * ---
 *
 * <Passive Stackable>
 *
 * - Used for: State Notetags
 * - Makes it possible for this passive state to be added multiple times.
 * - Otherwise, only one instance of the passive state can be available.
 *
 * ---
 *
 * <Passive Condition Class: id>
 * <Passive Condition Classes: id, id, id>
 *
 * <Passive Condition Class: name>
 * <Passive Condition Classes: name, name, name>
 *
 * - Used for: State Notetags
 * - Determines the passive condition of the passive state based on the actor's
 *   current class. As long as the actor's current class matches one of the
 *   data entries, the passive condition is considered passed.
 * - For 'id' variant, replace 'id' with a number representing class's ID.
 * - For 'name' variant, replace 'name' with the class's name.
 *
 * ---
 *
 * <Passive Condition Multiclass: id>
 * <Passive Condition Multiclass: id, id, id>
 *
 * <Passive Condition Multiclass: name>
 * <Passive Condition Multiclass: name, name, name>
 *
 * - Used for: State Notetags
 * - Requires VisuMZ_2_ClassChangeSystem!
 * - Determines the passive condition of the passive state based on the actor's
 *   multiclasses. As long as the actor has any of the matching classes
 *   assigned as a multiclass, the passive condition is considered passed.
 * - For 'id' variant, replace 'id' with a number representing class's ID.
 * - For 'name' variant, replace 'name' with the class's name.
 *
 * ---
 *
 * <Passive Condition Switch ON: x>
 *
 * <Passive Condition All Switches ON: x,x,x>
 * <Passive Condition Any Switch ON: x,x,x>
 *
 * - Used for: State Notetags
 * - Determines the passive condition of the passive state based on switches.
 * - Replace 'x' with the switch ID to determine the state's passive condition.
 * - If 'All' notetag variant is used, conditions will not be met until all
 *   switches are ON. Then, it would be met.
 * - If 'Any' notetag variant is used, conditions will be met if any of the
 *   switches are ON. Otherwise, it would not be met.
 *
 * ---
 *
 * <Passive Condition Switch OFF: x>
 *
 * <Passive Condition All Switches OFF: x,x,x>
 * <Passive Condition Any Switch OFF: x,x,x>
 *
 * - Used for: State Notetags
 * - Determines the passive condition of the passive state based on switches.
 * - Replace 'x' with the switch ID to determine the state's passive condition.
 * - If 'All' notetag variant is used, conditions will not be met until all
 *   switches are OFF. Then, it would be met.
 * - If 'Any' notetag variant is used, conditions will be met if any of the
 *   switches are OFF. Otherwise, it would not be met.
 *
 * ---
 *
 * === JavaScript Notetags: Passive State ===
 *
 * The following is a notetag made for users with JavaScript knowledge to
 * determine if a passive state's condition can be met.
 *
 * ---
 *
 * <JS Passive Condition>
 *  code
 *  code
 *  condition = code;
 * </JS Passive Condition>
 *
 * - Used for: State Notetags
 * - Determines the passive condition of the state based on JavaScript code.
 * - Replace 'code' to determine if a passive state's condition has been met.
 * - The 'condition' variable returns a boolean (true/false) to determine if
 *   the passive state's condition is met or not.
 * - The 'user' variable refers to the user affected by the passive state.
 * - The 'state' variable refers to the passive state being checked.
 * - All other passive conditions must be met for this code to count.
 * 
 * **NOTE** Not everything can be used as a custom JS Passive Condition due to
 * limitations of the code. There are failsafe checks to prevent infinite loops
 * and some passive conditions will not register for this reason and the
 * conditional checks will behave as if the passive states have NOT been
 * applied for this reason. Such examples include the following:
 * 
 * - A passive state that requires another passive state
 * - A passive state that requires a trait effect from another state
 * - A passive state that requires a parameter value altered by another state
 * - A passive state that requires equipment to be worn but its equipment type
 *   access is provided by another state.
 * - Anything else that is similar in style.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Skill Settings
 * ============================================================================
 *
 * These Plugin Parameters adjust various aspects of the game regarding skills
 * from the custom Skill Menu Layout to global custom effects made in code.
 *
 * ---
 *
 * General
 * 
 *   Use Updated Layout:
 *   - Use the Updated Skill Menu Layout provided by this plugin?
 *   - This will automatically enable the Status Window.
 *   - This will override the Core Engine windows settings.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 *
 * ---
 *
 * Skill Type Window
 * 
 *   Style:
 *   - How do you wish to draw commands in the Skill Type Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 * 
 *   Text Align:
 *   - Text alignment for the Skill Type Window.
 *
 * ---
 *
 * List Window
 * 
 *   Columns:
 *   - Number of maximum columns.
 *
 * ---
 *
 * Shop Status Window
 * 
 *   Show in Skill Menu?:
 *   - Show the Shop Status Window in the Skill Menu?
 *   - This is enabled if the Updated Layout is on.
 * 
 *   Adjust List Window?:
 *   - Automatically adjust the Skill List Window in the Skill Menu if using
 *     the Shop Status Window?
 * 
 *   Background Type:
 *   - Select background type for this window.
 *     - 0 - Window
 *     - 1 - Dim
 *     - 2 - Transparent
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this Shop Status Window in the
 *     Skill Menu.
 *
 * ---
 *
 * Skill Types
 * 
 *   Hidden Skill Types:
 *   - Insert the ID's of the Skill Types you want hidden from view ingame.
 * 
 *   Hidden During Battle:
 *   - Insert the ID's of the Skill Types you want hidden during battle only.
 * 
 *   Icon: Normal Type:
 *   - Icon used for normal skill types that aren't assigned any icons.
 *   - To assign icons to skill types, simply insert \I[x] into the
 *     skill type's name in the Database > Types tab.
 * 
 *   Icon: Magic Type:
 *   - Icon used for magic skill types that aren't assigned any icons.
 *   - To assign icons to skill types, simply insert \I[x] into the
 *     skill type's name in the Database > Types tab.
 *
 * ---
 *
 * Global JS Effects
 * 
 *   JS: Skill Conditions:
 *   - JavaScript code for a global-wide skill condition check.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Skill Cost Types
 * ============================================================================
 *
 * Skill Cost Types are the resources that are used for your skills. These can
 * range from the default MP and TP resources to the newly added HP, Gold, and
 * Potion resources.
 *
 * ---
 *
 * Settings
 * 
 *   Name:
 *   - A name for this Skill Cost Type.
 * 
 *   Icon:
 *   - Icon used for this Skill Cost Type.
 *   - Use 0 for no icon.
 * 
 *   Font Color:
 *   - Text Color used to display this cost.
 *   - For a hex color, use #rrggbb with VisuMZ_1_MessageCore
 * 
 *   Font Size:
 *   - Font size used to display this cost.
 *
 * ---
 *
 * Cost Processing
 * 
 *   JS: Cost Calculation:
 *   - Code on how to calculate this resource cost for the skill.
 * 
 *   JS: Can Pay Cost?:
 *   - Code on calculating whether or not the user is able to pay the cost.
 * 
 *   JS: Paying Cost:
 *   - Code for if met, this is the actual process of paying of the cost.
 *
 * ---
 *
 * Window Display
 * 
 *   JS: Show Cost?:
 *   - Code for determining if the cost is shown or not.
 * 
 *   JS: Cost Text:
 *   - Code to determine the text (with Text Code support) used for the
 *     displayed cost.
 *
 * ---
 *
 * Gauge Display
 * 
 *   JS: Maximum Value:
 *   - Code to determine the maximum value used for this Skill Cost resource
 *     for gauges.
 * 
 *   JS: Current Value:
 *   - Code to determine the current value used for this Skill Cost resource
 *     for gauges.
 * 
 *   JS: Draw Gauge:
 *   - Code to determine how to draw the Skill Cost resource for this 
 *     gauge type.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General State Settings
 * ============================================================================
 *
 * These are general settings regarding RPG Maker MZ's state-related aspects
 * from how turns are reapplied to custom code that's ran whenever states are
 * added, erased, or expired.
 *
 * ---
 *
 * General
 * 
 *   Reapply Rules:
 *   - These are the rules when reapplying states.
 *   - Ignore: State doesn't get added.
 *   - Reset: Turns get reset.
 *   - Greater: Turns take greater value (current vs reset).
 *   - Add: Turns add upon existing turns.
 * 
 *   Maximum Turns:
 *   - Maximum number of turns to let states go up to.
 *   - This can be changed with the <Max Turns: x> notetag.
 *
 * ---
 *
 * Turn Display
 * 
 *   Show Turns?:
 *   - Display state turns on top of window icons and sprites?
 * 
 *   Turn Font Size:
 *   - Font size used for displaying turns.
 * 
 *   Offset X:
 *   - Offset the X position of the turn display.
 * 
 *   Offset Y:
 *   - Offset the Y position of the turn display.
 * 
 *   Turn Font Size:
 *   - Font size used for displaying turns.
 * 
 *   Turn Color: Neutral:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Turn Color: Positive:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Turn Color: Negative:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 *
 * ---
 *
 * Data Display
 * 
 *   Show Data?:
 *   - Display state data on top of window icons and sprites?
 * 
 *   Data Font Size:
 *   - Font size used for displaying state data.
 * 
 *   Offset X:
 *   - Offset the X position of the state data display.
 * 
 *   Offset Y:
 *   - Offset the Y position of the state data display.
 *
 * ---
 *
 * Global JS Effects
 * 
 *   JS: On Add State:
 *   - JavaScript code for a global-wide custom effect whenever a state
 *     is added.
 * 
 *   JS: On Erase State:
 *   - JavaScript code for a global-wide custom effect whenever a state
 *     is erased.
 * 
 *   JS: On Expire State:
 *   - JavaScript code for a global-wide custom effect whenever a state
 *     has expired.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Buff/Debuff Settings
 * ============================================================================
 *
 * Buffs and debuffs don't count as states by RPG Maker MZ's mechanics, but
 * they do function close enough for them to be added to this plugin for
 * adjusting. Change these settings to make buffs and debuffs work to your
 * game's needs.
 *
 * ---
 *
 * General
 * 
 *   Reapply Rules:
 *   - These are the rules when reapplying buffs/debuffs.
 *   - Ignore: Buff/Debuff doesn't get added.
 *   - Reset: Turns get reset.
 *   - Greater: Turns take greater value (current vs reset).
 *   - Add: Turns add upon existing turns.
 * 
 *   Maximum Turns:
 *   - Maximum number of turns to let buffs and debuffs go up to.
 *
 * ---
 *
 * Stacking
 * 
 *   Max Stacks: Buff:
 *   - Maximum number of stacks for buffs.
 * 
 *   Max Stacks: Debuff:
 *   - Maximum number of stacks for debuffs.
 * 
 *   JS: Buff/Debuff Rate:
 *   - Code to determine how much buffs and debuffs affect parameters.
 *
 * ---
 *
 * Turn Display
 * 
 *   Show Turns?:
 *   - Display buff and debuff turns on top of window icons and sprites?
 * 
 *   Turn Font Size:
 *   - Font size used for displaying turns.
 * 
 *   Offset X:
 *   - Offset the X position of the turn display.
 * 
 *   Offset Y:
 *   - Offset the Y position of the turn display.
 * 
 *   Turn Color: Buffs:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Turn Color: Debuffs:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 *
 * ---
 *
 * Rate Display
 * 
 *   Show Rate?:
 *   - Display buff and debuff rate on top of window icons and sprites?
 * 
 *   Rate Font Size:
 *   - Font size used for displaying rate.
 * 
 *   Offset X:
 *   - Offset the X position of the rate display.
 * 
 *   Offset Y:
 *   - Offset the Y position of the rate display.
 *
 * ---
 *
 * Global JS Effects
 * 
 *   JS: On Add Buff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     buff is added.
 * 
 *   JS: On Add Debuff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     debuff is added.
 * 
 *   JS: On Erase Buff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     buff is added.
 * 
 *   JS: On Erase Debuff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     debuff is added.
 * 
 *   JS: On Expire Buff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     buff is added.
 * 
 *   JS: On Expire Debuff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     debuff is added.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Passive State Settings
 * ============================================================================
 *
 * These Plugin Parameters adjust passive states that can affect all actors and
 * enemies as well as have global conditions.
 * 
 * ---
 * 
 * For those using the code "a.isStateAffected(10)" to check if a target is
 * affected by a state or not, this does NOT check passive states. This only
 * checks for states that were directly applied to the target.
 * 
 * This is NOT a bug.
 * 
 * Instead, use "a.states().includes($dataStates[10])" to check for them. This
 * code will search for both directly applied states and passive states alike.
 *
 * ---
 * 
 * As passive states are NOT considered directly applied to, they do NOT match
 * a Conditional Branch's state check as well. The Conditional Branch effect
 * checks for an affected state.
 * 
 * ---
 * 
 * Because passive states are NOT directly applied to a battler, the functions
 * of "addNewState", "addState", "eraseState", "removeState" do NOT apply to
 * passive states either. This means that any of the related JS notetags tied
 * to those functions will not occur either.
 * 
 * ---
 * 
 * Why are passive states not considered affected by? Let's look at it
 * differently. There are two ways to grant skills to actors. They can acquire
 * skills by levels/items/events or they can equip gear that temporarily grants
 * the skill in question.
 * 
 * Learning the skill is direct. Temporarily granting the skill is indirect.
 * These two factors have mechanical importance and require differentiation.
 * 
 * Regular states and passive states are the same way. Regular states are
 * directly applied, therefore, need to be distinguished in order for things
 * like state turns and steps, removal conditionals, and similar to matter at
 * all. Passive states are indirect and are therefore, unaffected by state
 * turns, steps, and removal conditions. These mechanical differences are
 * important for how RPG Maker works.
 * 
 * ---
 * 
 * Once again, it is NOT a bug that when using "a.isStateAffected(10)" to
 * check if a target has a passive state will return false.
 * 
 * ---
 *
 * List
 * 
 *   Global Passives:
 *   - A list of passive states to affect actors and enemies.
 * 
 *   Actor-Only Passives:
 *   - A list of passive states to affect actors only.
 * 
 *   Enemy Passives:
 *   - A list of passive states to affect enemies only.
 *
 * ---
 *
 * Global JS Effects
 * 
 *   JS: Condition Check:
 *   - JavaScript code for a global-wide passive condition check.
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
 * - Yanfly
 * - Arisu
 * - Olivia
 * - Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.20: June 18, 2021
 * * Feature Update!
 * ** Updated automatic caching for conditional passive states to update more
 *    efficiently. Update made by Arisu.
 * 
 * Version 1.19: June 4, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.18: May 21, 2021
 * * Documentation Update
 * ** Added "Passive State Clarification" section.
 * *** As there is a lot of confusion regarding how passive states work and how
 *     people still miss the explanations found in the "Passive State Notetags"
 *     section AND the "Plugin Parameters: Passive State Settings", we are
 *     adding a third section to explain how they work.
 * *** All three sections will contain the full detailed explanation of how
 *     passive states work to clear common misconceptions about them.
 * 
 * Version 1.17: May 7, 2021
 * * Bug Fixes
 * ** State category removal is now usable outside of battle. Fix by Irina.
 * 
 * Version 1.16: April 30, 2021
 * * Bug Fixes!
 * ** When states with step removal have the <No Recover All Clear> or
 *    <No Death Clear> notetags, their step counter is no longer reset either.
 *    Fix made by Irina.
 * * New Features!
 * ** New notetag added by Arisu!
 * *** <List Name: name>
 * **** Makes the name of the skill appear different when show in the skill
 *      list. Using \V[x] as a part of the name will display that variable.
 * 
 * Version 1.15: March 19, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.14: March 12, 2021
 * * Bug Fixes!
 * ** Max HP Buff/Debuff should now display its turn counter. Fix by Yanfly.
 * * Documentation Update!
 * ** For the <JS Passive Condition>, we've added documentation on the
 *    limitations of passive conditions since they have been reported as bug
 *    reports, when in reality, they are failsafes to prevent infinite loops.
 *    Such limitations include the following:
 * *** A passive state that requires another passive state
 * *** A passive state that requires a trait effect from another state
 * *** A passive state that requires a parameter value altered by another state
 * *** A passive state that requires equipment to be worn but its equipment
 *     type access is provided by another state.
 * *** Anything else that is similar in style.
 * 
 * Version 1.13: February 26, 2021
 * * Documentation Update!
 * ** For <JS type Slip Damage> and <JS type Slip Heal> notetags, added the
 *    following notes:
 * *** When these states are applied via action effects, the slip calculations
 *     are one time calculations made upon applying and the damage is cached to
 *     be used for future on regeneration calculations.
 * *** For that reason, do not include game mechanics here such as adding
 *     states, buffs, debuffs, etc. as this notetag is meant for calculations
 *     only. Use the VisuStella Battle Core's <JS Pre-Regenerate> and
 *     <JS Post-Regenerate> notetags for game mechanics instead.
 * *** Passive states and states with the <JS Slip Refresh> notetag are exempt
 *     from the one time calculation and recalculated each regeneration phase.
 * * Feature Update!
 * ** Changed slip refresh requirements to entail <JS Slip Refresh> notetag for
 *    extra clarity. Update made by Olivia.
 * 
 * Version 1.12: February 19, 2021
 * * Feature Update
 * ** Changed the way passive state infinite stacking as a blanket coverage.
 *    Update made by Olivia.
 * 
 * Version 1.11: February 12, 2021
 * * Bug Fixes!
 * ** Added a check to prevent passive states from infinitely stacking. Fix
 *    made by Olivia.
 * 
 * Version 1.10: January 15, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameters added
 * *** Plugin Parameters > Skill Settings > Background Type
 * 
 * Version 1.09: January 1, 2021
 * * Bug Fixes!
 * ** Custom JS TP slip damage and healing should now work properly.
 *    Fix made by Yanfly.
 * 
 * Version 1.08: December 25, 2020
 * * Bug Fixes!
 * ** <JS On Add State> should no longer trigger multiple times for the death
 *    state. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for updated feature(s)!
 * * Feature Update!
 * ** <No Death Clear> can now allow the affected state to be added to an
 *    already dead battler. Update made by Yanfly.
 * 
 * Version 1.07: December 18, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New notetags added by Yanfly:
 * *** <Passive Condition Multiclass: id>
 * *** <Passive Condition Multiclass: id, id, id>
 * *** <Passive Condition Multiclass: name>
 * *** <Passive Condition Multiclass: name, name, name>
 * ** New Plugin Parameter added by Yanfly.
 * *** Plugin Parameters > States > General > Action End Update
 * **** States with "Action End" auto-removal will also update turns at the end
 *      of each action instead of all actions.
 * ***** Turn this off if you wish for state turn updates to function like they
 *       do by default for "Action End".
 * 
 * Version 1.06: December 4, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.05: November 15, 2020
 * * Bug Fixes!
 * ** The alignment of the Skill Type Window is now fixed and will reflect upon
 *    the default settings. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** <State x Category Remove: All> notetag added by Yanfly.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.04: September 27, 2020
 * * Documentation Update
 * ** "Use Updated Layout" plugin parameters now have the added clause:
 *    "This will override the Core Engine windows settings." to reduce
 *    confusion. Added by Irina.
 * 
 * Version 1.03: September 13, 2020
 * * Bug Fixes!
 * ** <JS type Slip Damage> custom notetags now work for passive states. Fix
 *    made by Olivia.
 * ** Setting the Command Window style to "Text Only" will no longer add in
 *    the icon text codes. Bug fixed by Yanfly.
 * 
 * Version 1.02: August 30, 2020
 * * Bug Fixes!
 * ** The JS Notetags for Add, Erase, and Expire states are now fixed. Fix made
 *    by Yanfly.
 * * Documentation Update!
 * ** <Show if learned Skill: x> and <Hide if learned Skill: x> notetags have
 *    the following added to their descriptions:
 * *** This does not apply to skills added by traits on actors, classes, any
 *     equipment, or states. These are not considered learned skills. They are
 *     considered temporary skills.
 * * New Features!
 * ** Notetags added by Yanfly:
 * *** <Show if has Skill: x>
 * *** <Show if have All Skills: x,x,x>
 * *** <Show if have Any Skills: x,x,x>
 * *** <Show if has Skill: name>
 * *** <Show if have All Skills: name, name, name>
 * *** <Show if have Any Skills: name, name, name>
 * *** <Hide if has Skill: x>
 * *** <Hide if have All Skills: x,x,x>
 * *** <Hide if have Any Skills: x,x,x>
 * *** <Hide if has Skill: name>
 * *** <Hide if have All Skills: name, name, name>
 * *** <Hide if have Any Skills: name, name, name>
 * *** These have been added to remove the confusion regarding learned skills
 *     as skills added through trait effects are not considered learned skills
 *     by RPG Maker MZ.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Passive states from Elements & Status Menu Core are now functional.
 *    Fix made by Olivia.
 * * Compatibility Update
 * ** Extended functions to allow for better compatibility.
 * * Updated documentation
 * ** Explains that passive states are not directly applied and are therefore
 *    not affected by code such as "a.isStateAffected(10)".
 * ** Instead, use "a.states().includes($dataStates[10])"
 * ** "Use #rrggbb for a hex color." lines now replaced with
 *    "For a hex color, use #rrggbb with VisuMZ_1_MessageCore"
 *
 * Version 1.00: August 20, 2020
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
 * @param SkillsStatesCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Skills:struct
 * @text Skill Settings
 * @type struct<Skills>
 * @desc Adjust general skill settings here.
 * @default {"General":"","EnableLayout:eval":"true","LayoutStyle:str":"upper/left","SkillTypeWindow":"","CmdStyle:str":"auto","CmdTextAlign:str":"left","ListWindow":"","ListWindowCols:num":"1","ShopStatusWindow":"","ShowShopStatus:eval":"true","SkillSceneAdjustSkillList:eval":"true","SkillMenuStatusRect:func":"\"const ww = this.shopStatusWidth();\\nconst wh = this._itemWindow.height;\\nconst wx = Graphics.boxWidth - this.shopStatusWidth();\\nconst wy = this._itemWindow.y;\\nreturn new Rectangle(wx, wy, ww, wh);\"","SkillTypes":"","HiddenSkillTypes:arraynum":"[]","BattleHiddenSkillTypes:arraynum":"[]","IconStypeNorm:num":"78","IconStypeMagic:num":"79","CustomJS":"","SkillConditionJS:func":"\"// Declare Variables\\nconst skill = arguments[0];\\nconst user = this;\\nconst target = this;\\nconst a = this;\\nconst b = this;\\nlet enabled = true;\\n\\n// Perform Checks\\n\\n\\n// Return boolean\\nreturn enabled;\""}
 *
 * @param Costs:arraystruct
 * @text Skill Cost Types
 * @parent Skills:struct
 * @type struct<Cost>[]
 * @desc A list of all the skill cost types added by this plugin
 * and the code that controls them in-game.
 * @default ["{\"Name:str\":\"HP\",\"Settings\":\"\",\"Icon:num\":\"0\",\"FontColor:str\":\"20\",\"FontSize:num\":\"22\",\"Cost\":\"\",\"CalcJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nlet cost = 0;\\\\n\\\\n// Calculations\\\\nconst note = skill.note;\\\\nif (note.match(/<HP COST:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost += Number(RegExp.$1);\\\\n}\\\\nif (note.match(/<HP COST:[ ](\\\\\\\\d+)([%％])>/i)) {\\\\n    cost += Math.ceil(Number(RegExp.$1) * user.mhp / 100);\\\\n}\\\\nif (note.match(/<JS HP COST>\\\\\\\\s*([\\\\\\\\s\\\\\\\\S]*)\\\\\\\\s*<\\\\\\\\/JS HP COST>/i)) {\\\\n    const code = String(RegExp.$1);\\\\n    eval(code);\\\\n}\\\\n\\\\n// Apply Trait Cost Alterations\\\\nif (cost > 0) {\\\\n    const rateNote = /<HP COST:[ ](\\\\\\\\d+\\\\\\\\.?\\\\\\\\d*)([%％])>/i;\\\\n    const rates = user.traitObjects().map((obj) => (obj && obj.note.match(rateNote) ? Number(RegExp.$1) / 100 : 1));\\\\n    const flatNote = /<HP COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)>/i;\\\\n    const flats = user.traitObjects().map((obj) => (obj && obj.note.match(flatNote) ? Number(RegExp.$1) : 0));\\\\n    cost = rates.reduce((r, rate) => r * rate, cost);\\\\n    cost = flats.reduce((r, flat) => r + flat, cost);\\\\n    cost = Math.max(1, cost);\\\\n}\\\\n\\\\n// Set Cost Limits\\\\nif (note.match(/<HP COST MAX:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.min(cost, Number(RegExp.$1));\\\\n}\\\\nif (note.match(/<HP COST MIN:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.max(cost, Number(RegExp.$1));\\\\n}\\\\n\\\\n// Return cost value\\\\nreturn Math.round(Math.max(0, cost));\\\"\",\"CanPayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nif (cost <= 0) {\\\\n    return true;\\\\n} else {\\\\n    return user._hp > cost;\\\\n}\\\"\",\"PayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Process Payment\\\\nuser._hp -= cost;\\\"\",\"Windows\":\"\",\"ShowJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn cost > 0;\\\"\",\"TextJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst settings = arguments[2];\\\\nconst fontSize = settings.FontSize;\\\\nconst color = settings.FontColor;\\\\nconst name = TextManager.hp;\\\\nconst icon = settings.Icon;\\\\nlet text = '';\\\\n\\\\n// Text: Change Font Size\\\\ntext += '\\\\\\\\\\\\\\\\FS[%1]'.format(fontSize);\\\\n\\\\n// Text: Add Color\\\\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\\\\n    text += '\\\\\\\\\\\\\\\\HexColor<%1>'.format(String(RegExp.$1));\\\\n} else {\\\\n    text += '\\\\\\\\\\\\\\\\C[%1]'.format(color);\\\\n}\\\\n\\\\n// Text: Add Cost\\\\ntext += '%1 %2'.format(cost, name);\\\\n\\\\n// Text: Add Icon\\\\nif (icon  > 0) {\\\\n    text += '\\\\\\\\\\\\\\\\I[%1]'.format(icon);\\\\n}\\\\n\\\\n// Return text\\\\nreturn text;\\\"\",\"Gauges\":\"\",\"GaugeMaxJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.mhp;\\\"\",\"GaugeCurrentJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.hp;\\\"\",\"GaugeDrawJS:func\":\"\\\"// Declare Variables\\\\nconst sprite = this;\\\\nconst settings = sprite._costSettings;\\\\nconst bitmap = sprite.bitmap;\\\\nconst user = sprite._battler;\\\\nconst currentValue = sprite.currentDisplayedValue();\\\\n\\\\n// Draw Gauge\\\\nconst color1 = ColorManager.hpGaugeColor1();\\\\nconst color2 = ColorManager.hpGaugeColor2();\\\\nconst gx = 0;\\\\nconst gy = sprite.bitmapHeight() - sprite.gaugeHeight();\\\\nconst gw = sprite.bitmapWidth() - gx;\\\\nconst gh = sprite.gaugeHeight();\\\\nthis.drawFullGauge(color1, color2, gx, gy, gw, gh);\\\\n\\\\n// Draw Label\\\\nconst label = TextManager.hpA;\\\\nconst lx = 4;\\\\nconst ly = 0;\\\\nconst lw = sprite.bitmapWidth();\\\\nconst lh = sprite.bitmapHeight();\\\\nsprite.setupLabelFont();\\\\nbitmap.paintOpacity = 255;\\\\nbitmap.drawText(label, lx, ly, lw, lh, \\\\\\\"left\\\\\\\");\\\\n\\\\n// Draw Value\\\\nconst vw = sprite.bitmapWidth() - 2;\\\\nconst vh = sprite.bitmapHeight();\\\\nsprite.setupValueFont();\\\\nbitmap.textColor = ColorManager.hpColor(user);\\\\nbitmap.drawText(currentValue, 0, 0, vw, vh, \\\\\\\"right\\\\\\\");\\\"\"}","{\"Name:str\":\"MP\",\"Settings\":\"\",\"Icon:num\":\"0\",\"FontColor:str\":\"23\",\"FontSize:num\":\"22\",\"Cost\":\"\",\"CalcJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nlet cost = 0;\\\\n\\\\n// Calculations\\\\nconst note = skill.note;\\\\ncost = Math.floor(skill.mpCost * user.mcr);\\\\nif (note.match(/<MP COST:[ ](\\\\\\\\d+)([%％])>/i)) {\\\\n    cost += Math.ceil(Number(RegExp.$1) * user.mmp / 100);\\\\n}\\\\nif (note.match(/<JS MP COST>\\\\\\\\s*([\\\\\\\\s\\\\\\\\S]*)\\\\\\\\s*<\\\\\\\\/JS MP COST>/i)) {\\\\n    const code = String(RegExp.$1);\\\\n    eval(code);\\\\n}\\\\n\\\\n// Apply Trait Cost Alterations\\\\nif (cost > 0) {\\\\n    const rateNote = /<MP COST:[ ](\\\\\\\\d+\\\\\\\\.?\\\\\\\\d*)([%％])>/i;\\\\n    const rates = user.traitObjects().map((obj) => (obj && obj.note.match(rateNote) ? Number(RegExp.$1) / 100 : 1));\\\\n    const flatNote = /<MP COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)>/i;\\\\n    const flats = user.traitObjects().map((obj) => (obj && obj.note.match(flatNote) ? Number(RegExp.$1) : 0));\\\\n    cost = rates.reduce((r, rate) => r * rate, cost);\\\\n    cost = flats.reduce((r, flat) => r + flat, cost);\\\\n    cost = Math.max(1, cost);\\\\n}\\\\n\\\\n// Set Cost Limits\\\\nif (note.match(/<MP COST MAX:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.min(cost, Number(RegExp.$1));\\\\n}\\\\nif (note.match(/<MP COST MIN:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.max(cost, Number(RegExp.$1));\\\\n}\\\\n\\\\n// Return cost value\\\\nreturn Math.round(Math.max(0, cost));\\\"\",\"CanPayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn user._mp >= cost;\\\"\",\"PayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Process Payment\\\\nuser._mp -= cost;\\\"\",\"Windows\":\"\",\"ShowJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn cost > 0;\\\"\",\"TextJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst settings = arguments[2];\\\\nconst fontSize = settings.FontSize;\\\\nconst color = settings.FontColor;\\\\nconst name = TextManager.mp;\\\\nconst icon = settings.Icon;\\\\nlet text = '';\\\\n\\\\n// Text: Change Font Size\\\\ntext += '\\\\\\\\\\\\\\\\FS[%1]'.format(fontSize);\\\\n\\\\n// Text: Add Color\\\\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\\\\n    text += '\\\\\\\\\\\\\\\\HexColor<#%1>'.format(String(RegExp.$1));\\\\n} else {\\\\n    text += '\\\\\\\\\\\\\\\\C[%1]'.format(color);\\\\n}\\\\n\\\\n// Text: Add Cost\\\\ntext += '%1 %2'.format(cost, name);\\\\n\\\\n// Text: Add Icon\\\\nif (icon  > 0) {\\\\n    text += '\\\\\\\\\\\\\\\\I[%1]'.format(icon);\\\\n}\\\\n\\\\n// Return text\\\\nreturn text;\\\"\",\"Gauges\":\"\",\"GaugeMaxJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.mmp;\\\"\",\"GaugeCurrentJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.mp;\\\"\",\"GaugeDrawJS:func\":\"\\\"// Declare Variables\\\\nconst sprite = this;\\\\nconst settings = sprite._costSettings;\\\\nconst bitmap = sprite.bitmap;\\\\nconst user = sprite._battler;\\\\nconst currentValue = sprite.currentDisplayedValue();\\\\n\\\\n// Draw Gauge\\\\nconst color1 = ColorManager.mpGaugeColor1();\\\\nconst color2 = ColorManager.mpGaugeColor2();\\\\nconst gx = 0;\\\\nconst gy = sprite.bitmapHeight() - sprite.gaugeHeight();\\\\nconst gw = sprite.bitmapWidth() - gx;\\\\nconst gh = sprite.gaugeHeight();\\\\nthis.drawFullGauge(color1, color2, gx, gy, gw, gh);\\\\n\\\\n// Draw Label\\\\nconst label = TextManager.mpA;\\\\nconst lx = 4;\\\\nconst ly = 0;\\\\nconst lw = sprite.bitmapWidth();\\\\nconst lh = sprite.bitmapHeight();\\\\nsprite.setupLabelFont();\\\\nbitmap.paintOpacity = 255;\\\\nbitmap.drawText(label, lx, ly, lw, lh, \\\\\\\"left\\\\\\\");\\\\n\\\\n// Draw Value\\\\nconst vw = sprite.bitmapWidth() - 2;\\\\nconst vh = sprite.bitmapHeight();\\\\nsprite.setupValueFont();\\\\nbitmap.textColor = ColorManager.mpColor(user);\\\\nbitmap.drawText(currentValue, 0, 0, vw, vh, \\\\\\\"right\\\\\\\");\\\"\"}","{\"Name:str\":\"TP\",\"Settings\":\"\",\"Icon:num\":\"0\",\"FontColor:str\":\"29\",\"FontSize:num\":\"22\",\"Cost\":\"\",\"CalcJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nlet cost = 0;\\\\n\\\\n// Calculations\\\\nconst note = skill.note;\\\\ncost = skill.tpCost;\\\\nif (note.match(/<TP COST:[ ](\\\\\\\\d+)([%％])>/i)) {\\\\n    cost += Math.ceil(Number(RegExp.$1) * user.maxTp() / 100);\\\\n}\\\\nif (note.match(/<JS TP COST>\\\\\\\\s*([\\\\\\\\s\\\\\\\\S]*)\\\\\\\\s*<\\\\\\\\/JS TP COST>/i)) {\\\\n    const code = String(RegExp.$1);\\\\n    eval(code);\\\\n}\\\\n\\\\n// Apply Trait Cost Alterations\\\\nif (cost > 0) {\\\\n    const rateNote = /<TP COST:[ ](\\\\\\\\d+\\\\\\\\.?\\\\\\\\d*)([%％])>/i;\\\\n    const rates = user.traitObjects().map((obj) => (obj && obj.note.match(rateNote) ? Number(RegExp.$1) / 100 : 1));\\\\n    const flatNote = /<TP COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)>/i;\\\\n    const flats = user.traitObjects().map((obj) => (obj && obj.note.match(flatNote) ? Number(RegExp.$1) : 0));\\\\n    cost = rates.reduce((r, rate) => r * rate, cost);\\\\n    cost = flats.reduce((r, flat) => r + flat, cost);\\\\n    cost = Math.max(1, cost);\\\\n}\\\\n\\\\n// Set Cost Limits\\\\nif (note.match(/<TP COST MAX:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.min(cost, Number(RegExp.$1));\\\\n}\\\\nif (note.match(/<TP COST MIN:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.max(cost, Number(RegExp.$1));\\\\n}\\\\n\\\\n// Return cost value\\\\nreturn Math.round(Math.max(0, cost));\\\"\",\"CanPayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn user._tp >= cost;\\\"\",\"PayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Process Payment\\\\nuser._tp -= cost;\\\"\",\"Windows\":\"\",\"ShowJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn cost > 0;\\\"\",\"TextJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst settings = arguments[2];\\\\nconst fontSize = settings.FontSize;\\\\nconst color = settings.FontColor;\\\\nconst name = TextManager.tp;\\\\nconst icon = settings.Icon;\\\\nlet text = '';\\\\n\\\\n// Text: Change Font Size\\\\ntext += '\\\\\\\\\\\\\\\\FS[%1]'.format(fontSize);\\\\n\\\\n// Text: Add Color\\\\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\\\\n    text += '\\\\\\\\\\\\\\\\HexColor<#%1>'.format(String(RegExp.$1));\\\\n} else {\\\\n    text += '\\\\\\\\\\\\\\\\C[%1]'.format(color);\\\\n}\\\\n\\\\n// Text: Add Cost\\\\ntext += '%1 %2'.format(cost, name);\\\\n\\\\n// Text: Add Icon\\\\nif (icon  > 0) {\\\\n    text += '\\\\\\\\\\\\\\\\I[%1]'.format(icon);\\\\n}\\\\n\\\\n// Return text\\\\nreturn text;\\\"\",\"Gauges\":\"\",\"GaugeMaxJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.maxTp();\\\"\",\"GaugeCurrentJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.tp;\\\"\",\"GaugeDrawJS:func\":\"\\\"// Declare Variables\\\\nconst sprite = this;\\\\nconst settings = sprite._costSettings;\\\\nconst bitmap = sprite.bitmap;\\\\nconst user = sprite._battler;\\\\nconst currentValue = sprite.currentDisplayedValue();\\\\n\\\\n// Draw Gauge\\\\nconst color1 = ColorManager.tpGaugeColor1();\\\\nconst color2 = ColorManager.tpGaugeColor2();\\\\nconst gx = 0;\\\\nconst gy = sprite.bitmapHeight() - sprite.gaugeHeight();\\\\nconst gw = sprite.bitmapWidth() - gx;\\\\nconst gh = sprite.gaugeHeight();\\\\nthis.drawFullGauge(color1, color2, gx, gy, gw, gh);\\\\n\\\\n// Draw Label\\\\nconst label = TextManager.tpA;\\\\nconst lx = 4;\\\\nconst ly = 0;\\\\nconst lw = sprite.bitmapWidth();\\\\nconst lh = sprite.bitmapHeight();\\\\nsprite.setupLabelFont();\\\\nbitmap.paintOpacity = 255;\\\\nbitmap.drawText(label, lx, ly, lw, lh, \\\\\\\"left\\\\\\\");\\\\n\\\\n// Draw Value\\\\nconst vw = sprite.bitmapWidth() - 2;\\\\nconst vh = sprite.bitmapHeight();\\\\nsprite.setupValueFont();\\\\nbitmap.textColor = ColorManager.tpColor(user);\\\\nbitmap.drawText(currentValue, 0, 0, vw, vh, \\\\\\\"right\\\\\\\");\\\"\"}","{\"Name:str\":\"Gold\",\"Settings\":\"\",\"Icon:num\":\"0\",\"FontColor:str\":\"17\",\"FontSize:num\":\"22\",\"Cost\":\"\",\"CalcJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nlet cost = 0;\\\\n\\\\n// Calculations\\\\nconst note = skill.note;\\\\nif (note.match(/<GOLD COST:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost += Number(RegExp.$1);\\\\n}\\\\nif (note.match(/<GOLD COST:[ ](\\\\\\\\d+)([%％])>/i)) {\\\\n    cost += Math.ceil(Number(RegExp.$1) * $gameParty.gold() / 100);\\\\n}\\\\nif (note.match(/<JS GOLD COST>\\\\\\\\s*([\\\\\\\\s\\\\\\\\S]*)\\\\\\\\s*<\\\\\\\\/JS GOLD COST>/i)) {\\\\n    const code = String(RegExp.$1);\\\\n    eval(code);\\\\n}\\\\n\\\\n// Apply Trait Cost Alterations\\\\nif (cost > 0) {\\\\n    const rateNote = /<GOLD COST:[ ](\\\\\\\\d+\\\\\\\\.?\\\\\\\\d*)([%％])>/i;\\\\n    const rates = user.traitObjects().map((obj) => (obj && obj.note.match(rateNote) ? Number(RegExp.$1) / 100 : 1));\\\\n    const flatNote = /<GOLD COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)>/i;\\\\n    const flats = user.traitObjects().map((obj) => (obj && obj.note.match(flatNote) ? Number(RegExp.$1) : 0));\\\\n    cost = rates.reduce((r, rate) => r * rate, cost);\\\\n    cost = flats.reduce((r, flat) => r + flat, cost);\\\\n    cost = Math.max(1, cost);\\\\n}\\\\n\\\\n// Set Cost Limits\\\\nif (note.match(/<GOLD COST MAX:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.min(cost, Number(RegExp.$1));\\\\n}\\\\nif (note.match(/<GOLD COST MIN:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.max(cost, Number(RegExp.$1));\\\\n}\\\\n\\\\n// Return cost value\\\\nreturn Math.round(Math.max(0, cost));\\\"\",\"CanPayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn $gameParty.gold() >= cost;\\\"\",\"PayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Process Payment\\\\n$gameParty.loseGold(cost);\\\"\",\"Windows\":\"\",\"ShowJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn cost > 0;\\\"\",\"TextJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst settings = arguments[2];\\\\nconst fontSize = settings.FontSize;\\\\nconst color = settings.FontColor;\\\\nconst name = TextManager.currencyUnit;\\\\nconst icon = settings.Icon;\\\\nlet text = '';\\\\n\\\\n// Text: Change Font Size\\\\ntext += '\\\\\\\\\\\\\\\\FS[%1]'.format(fontSize);\\\\n\\\\n// Text: Add Color\\\\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\\\\n    text += '\\\\\\\\\\\\\\\\HexColor<#%1>'.format(String(RegExp.$1));\\\\n} else {\\\\n    text += '\\\\\\\\\\\\\\\\C[%1]'.format(color);\\\\n}\\\\n\\\\n// Text: Add Cost\\\\ntext += '%1 %2'.format(cost, name);\\\\n\\\\n// Text: Add Icon\\\\nif (icon  > 0) {\\\\n    text += '\\\\\\\\\\\\\\\\I[%1]'.format(icon);\\\\n}\\\\n\\\\n// Return text\\\\nreturn text;\\\"\",\"Gauges\":\"\",\"GaugeMaxJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn $gameParty.maxGold();\\\"\",\"GaugeCurrentJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn $gameParty.gold();\\\"\",\"GaugeDrawJS:func\":\"\\\"// Declare Variables\\\\nconst sprite = this;\\\\nconst settings = sprite._costSettings;\\\\nconst bitmap = sprite.bitmap;\\\\nconst user = sprite._battler;\\\\nconst currentValue = sprite.currentDisplayedValue();\\\\n\\\\n// Draw Label\\\\nconst label = TextManager.currencyUnit;\\\\nconst lx = 4;\\\\nconst ly = 0;\\\\nconst lw = sprite.bitmapWidth();\\\\nconst lh = sprite.bitmapHeight();\\\\nsprite.setupLabelFont();\\\\nbitmap.paintOpacity = 255;\\\\nbitmap.drawText(label, lx, ly, lw, lh, \\\\\\\"left\\\\\\\");\\\\n\\\\n// Draw Value\\\\nconst vw = sprite.bitmapWidth() - 2;\\\\nconst vh = sprite.bitmapHeight();\\\\nsprite.setupValueFont();\\\\nbitmap.textColor = ColorManager.normalColor();\\\\nbitmap.drawText(currentValue, 0, 0, vw, vh, \\\\\\\"right\\\\\\\");\\\"\"}","{\"Name:str\":\"Potion\",\"Settings\":\"\",\"Icon:num\":\"176\",\"FontColor:str\":\"0\",\"FontSize:num\":\"22\",\"Cost\":\"\",\"CalcJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nlet cost = 0;\\\\n\\\\n// Calculations\\\\nconst note = skill.note;\\\\nif (note.match(/<POTION COST:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost += Number(RegExp.$1);\\\\n}\\\\nif (note.match(/<JS POTION COST>\\\\\\\\s*([\\\\\\\\s\\\\\\\\S]*)\\\\\\\\s*<\\\\\\\\/JS POTION COST>/i)) {\\\\n    const code = String(RegExp.$1);\\\\n    eval(code);\\\\n}\\\\n\\\\n// Apply Trait Cost Alterations\\\\nif (cost > 0) {\\\\n    const rateNote = /<POTION COST:[ ](\\\\\\\\d+\\\\\\\\.?\\\\\\\\d*)([%％])>/i;\\\\n    const rates = user.traitObjects().map((obj) => (obj && obj.note.match(rateNote) ? Number(RegExp.$1) / 100 : 1));\\\\n    const flatNote = /<POTION COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)>/i;\\\\n    const flats = user.traitObjects().map((obj) => (obj && obj.note.match(flatNote) ? Number(RegExp.$1) : 0));\\\\n    cost = rates.reduce((r, rate) => r * rate, cost);\\\\n    cost = flats.reduce((r, flat) => r + flat, cost);\\\\n    cost = Math.max(1, cost);\\\\n}\\\\n\\\\n// Set Cost Limits\\\\nif (note.match(/<POTION COST MAX:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.min(cost, Number(RegExp.$1));\\\\n}\\\\nif (note.match(/<POTION COST MIN:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.max(cost, Number(RegExp.$1));\\\\n}\\\\n\\\\n// Return cost value\\\\nreturn Math.round(Math.max(0, cost));\\\"\",\"CanPayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst item = $dataItems[7];\\\\n\\\\n// Return Boolean\\\\nif (user.isActor() && cost > 0) {\\\\n    return $gameParty.numItems(item) >= cost;\\\\n} else {\\\\n    return true;\\\\n}\\\"\",\"PayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst item = $dataItems[7];\\\\n\\\\n// Process Payment\\\\nif (user.isActor()) {\\\\n    $gameParty.loseItem(item, cost);\\\\n}\\\"\",\"Windows\":\"\",\"ShowJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn cost > 0;\\\"\",\"TextJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst item = $dataItems[7];\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst settings = arguments[2];\\\\nconst fontSize = settings.FontSize;\\\\nconst color = settings.FontColor;\\\\nconst name = settings.Name;\\\\nconst icon = settings.Icon;\\\\nlet text = '';\\\\n\\\\n// Text: Change Font Size\\\\ntext += '\\\\\\\\\\\\\\\\FS[%1]'.format(fontSize);\\\\n\\\\n// Text: Add Color\\\\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\\\\n    text += '\\\\\\\\\\\\\\\\HexColor<#%1>'.format(String(RegExp.$1));\\\\n} else {\\\\n    text += '\\\\\\\\\\\\\\\\C[%1]'.format(color);\\\\n}\\\\n\\\\n// Text: Add Cost\\\\ntext += '×%1'.format(cost);\\\\n\\\\n// Text: Add Icon\\\\ntext += '\\\\\\\\\\\\\\\\I[%1]'.format(item.iconIndex);\\\\n\\\\n// Return text\\\\nreturn text;\\\"\",\"Gauges\":\"\",\"GaugeMaxJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst item = $dataItems[7];\\\\n\\\\n// Return value\\\\nreturn $gameParty.maxItems(item);\\\"\",\"GaugeCurrentJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst item = $dataItems[7];\\\\n\\\\n// Return value\\\\nreturn $gameParty.numItems(item);\\\"\",\"GaugeDrawJS:func\":\"\\\"// Declare Variables\\\\nconst sprite = this;\\\\nconst settings = sprite._costSettings;\\\\nconst bitmap = sprite.bitmap;\\\\nconst user = sprite._battler;\\\\nconst item = $dataItems[7];\\\\nconst currentValue = sprite.currentDisplayedValue();\\\\n\\\\n// Draw Gauge\\\\nconst color1 = ColorManager.textColor(30);\\\\nconst color2 = ColorManager.textColor(31);\\\\nconst gx = 0;\\\\nconst gy = sprite.bitmapHeight() - sprite.gaugeHeight();\\\\nconst gw = sprite.bitmapWidth() - gx;\\\\nconst gh = sprite.gaugeHeight();\\\\nthis.drawFullGauge(color1, color2, gx, gy, gw, gh);\\\\n\\\\n// Draw Icon\\\\nconst iconIndex = item.iconIndex;\\\\nconst iconBitmap = ImageManager.loadSystem(\\\\\\\"IconSet\\\\\\\");\\\\nconst pw = ImageManager.iconWidth;\\\\nconst ph = ImageManager.iconHeight;\\\\nconst sx = (iconIndex % 16) * pw;\\\\nconst sy = Math.floor(iconIndex / 16) * ph;\\\\nbitmap.blt(iconBitmap, sx, sy, pw, ph, 0, 0, 24, 24);\\\\n\\\\n// Draw Value\\\\nconst vw = sprite.bitmapWidth() - 2;\\\\nconst vh = sprite.bitmapHeight();\\\\nsprite.setupValueFont();\\\\nbitmap.textColor = ColorManager.normalColor();\\\\nbitmap.drawText(currentValue, 0, 0, vw, vh, \\\\\\\"right\\\\\\\");\\\"\"}"]
 *
 * @param BreakSkills
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param States:struct
 * @text State Settings
 * @type struct<States>
 * @desc Adjust general state settings here.
 * @default {"General":"","ReapplyRules:str":"greater","MaxTurns:num":"99","ActionEndUpdate:eval":"true","Turns":"","ShowTurns:eval":"true","TurnFontSize:num":"16","TurnOffsetX:num":"-4","TurnOffsetY:num":"-6","ColorNeutral:str":"0","ColorPositive:str":"24","ColorNegative:str":"27","Data":"","ShowData:eval":"true","DataFontSize:num":"12","DataOffsetX:num":"0","DataOffsetY:num":"8","CustomJS":"","onAddStateJS:func":"\"// Declare Variables\\nconst stateId = arguments[0];\\nconst origin = this.getStateOrigin(stateId);\\nconst state = $dataStates[stateId];\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\"","onEraseStateJS:func":"\"// Declare Variables\\nconst stateId = arguments[0];\\nconst origin = this.getStateOrigin(stateId);\\nconst state = $dataStates[stateId];\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onExpireStateJS:func":"\"// Declare Variables\\nconst stateId = arguments[0];\\nconst origin = this.getStateOrigin(stateId);\\nconst state = $dataStates[stateId];\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\""}
 *
 * @param Buffs:struct
 * @text Buff/Debuff Settings
 * @parent States:struct
 * @type struct<Buffs>
 * @desc Adjust general buff/debuff settings here.
 * @default {"General":"","ReapplyRules:str":"greater","MaxTurns:num":"99","Stacking":"","StackBuffMax:num":"2","StackDebuffMax:num":"2","MultiplierJS:func":"\"// Declare Variables\\nconst user = this;\\nconst paramId = arguments[0];\\nconst buffLevel = arguments[1];\\nlet rate = 1;\\n\\n// Perform Calculations\\nrate += buffLevel * 0.25;\\n\\n// Return Rate\\nreturn Math.max(0, rate);\"","Turns":"","ShowTurns:eval":"true","TurnFontSize:num":"16","TurnOffsetX:num":"-4","TurnOffsetY:num":"-6","ColorBuff:str":"24","ColorDebuff:str":"27","Data":"","ShowData:eval":"false","DataFontSize:num":"12","DataOffsetX:num":"0","DataOffsetY:num":"8","CustomJS":"","onAddBuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onAddDebuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onEraseBuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onEraseDebuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onExpireBuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onExpireDebuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\""}
 *
 * @param PassiveStates:struct
 * @text Passive States
 * @parent States:struct
 * @type struct<PassiveStates>
 * @desc Adjust passive state settings here.
 * @default {"List":"","Global:arraynum":"[]","Actor:arraynum":"[]","Enemy:arraynum":"[]","CustomJS":"","PassiveConditionJS:func":"\"// Declare Variables\\nconst state = arguments[0];\\nconst stateId = state.id;\\nconst user = this;\\nconst target = this;\\nconst a = this;\\nconst b = this;\\nlet condition = true;\\n\\n// Perform Checks\\n\\n\\n// Return boolean\\nreturn condition;\""}
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
 * General Skill Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Skills:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Skill Menu Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/left
 *
 * @param SkillTypeWindow
 * @text Skill Type Window
 *
 * @param CmdStyle:str
 * @text Style
 * @parent SkillTypeWindow
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands in the Skill Type Window?
 * @default auto
 *
 * @param CmdTextAlign:str
 * @text Text Align
 * @parent SkillTypeWindow
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Skill Type Window.
 * @default left
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListWindowCols:num
 * @text Columns
 * @parent ListWindow
 * @type number
 * @min 1
 * @desc Number of maximum columns.
 * @default 1
 *
 * @param ShopStatusWindow
 * @text Shop Status Window
 *
 * @param ShowShopStatus:eval
 * @text Show in Skill Menu?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show the Shop Status Window in the Skill Menu?
 * This is enabled if the Updated Layout is on.
 * @default true
 *
 * @param SkillSceneAdjustSkillList:eval
 * @text Adjust List Window?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the Skill List Window in the Skill Menu if using the Shop Status Window?
 * @default true
 *
 * @param SkillSceneStatusBgType:num
 * @text Background Type
 * @parent ShopStatusWindow
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
 * @param SkillMenuStatusRect:func
 * @text JS: X, Y, W, H
 * @parent ShopStatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this Shop Status Window in the Skill Menu.
 * @default "const ww = this.shopStatusWidth();\nconst wh = this._itemWindow.height;\nconst wx = Graphics.boxWidth - this.shopStatusWidth();\nconst wy = this._itemWindow.y;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param SkillTypes
 * @text Skill Types
 *
 * @param HiddenSkillTypes:arraynum
 * @text Hidden Skill Types
 * @parent SkillTypes
 * @type number[]
 * @min 1
 * @max 99
 * @desc Insert the ID's of the Skill Types you want hidden from view ingame.
 * @default []
 *
 * @param BattleHiddenSkillTypes:arraynum
 * @text Hidden During Battle
 * @parent SkillTypes
 * @type number[]
 * @min 1
 * @max 99
 * @desc Insert the ID's of the Skill Types you want hidden during battle only.
 * @default []
 *
 * @param IconStypeNorm:num
 * @text Icon: Normal Type
 * @parent SkillTypes
 * @desc Icon used for normal skill types that aren't assigned any icons.
 * @default 78
 *
 * @param IconStypeMagic:num
 * @text Icon: Magic Type
 * @parent SkillTypes
 * @desc Icon used for magic skill types that aren't assigned any icons.
 * @default 79
 *
 * @param CustomJS
 * @text Global JS Effects
 *
 * @param SkillConditionJS:func
 * @text JS: Skill Conditions
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide skill condition check.
 * @default "// Declare Variables\nconst skill = arguments[0];\nconst user = this;\nconst target = this;\nconst a = this;\nconst b = this;\nlet enabled = true;\n\n// Perform Checks\n\n\n// Return boolean\nreturn enabled;"
 *
 */
/* ----------------------------------------------------------------------------
 * Skill Cost Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Cost:
 *
 * @param Name:str
 * @text Name
 * @desc A name for this Skill Cost Type.
 * @default Untitled
 *
 * @param Settings
 *
 * @param Icon:num
 * @text Icon
 * @parent Settings
 * @desc Icon used for this Skill Cost Type.
 * Use 0 for no icon.
 * @default 0
 *
 * @param FontColor:str
 * @text Font Color
 * @parent Settings
 * @desc Text Color used to display this cost.
 * For a hex color, use #rrggbb with VisuMZ_1_MessageCore
 * @default 0
 *
 * @param FontSize:num
 * @text Font Size
 * @parent Settings
 * @type number
 * @min 1
 * @desc Font size used to display this cost.
 * @default 22
 *
 * @param Cost
 * @text Cost Processing
 *
 * @param CalcJS:func
 * @text JS: Cost Calculation
 * @parent Cost
 * @type note
 * @desc Code on how to calculate this resource cost for the skill.
 * @default "// Declare Variables\nconst user = this;\nconst skill = arguments[0];\nlet cost = 0;\n\n// Return cost value\nreturn Math.round(Math.max(0, cost));"
 *
 * @param CanPayJS:func
 * @text JS: Can Pay Cost?
 * @parent Cost
 * @type note
 * @desc Code on calculating whether or not the user is able to pay the cost.
 * @default "// Declare Variables\nconst user = this;\nconst skill = arguments[0];\nconst cost = arguments[1];\n\n// Return Boolean\nreturn true;"
 *
 * @param PayJS:func
 * @text JS: Paying Cost
 * @parent Cost
 * @type note
 * @desc Code for if met, this is the actual process of paying of the cost.
 * @default "// Declare Variables\nconst user = this;\nconst skill = arguments[0];\nconst cost = arguments[1];\n\n// Process Payment\n"
 *
 * @param Windows
 * @text Window Display
 *
 * @param ShowJS:func
 * @text JS: Show Cost?
 * @parent  Windows
 * @type note
 * @desc Code for determining if the cost is shown or not.
 * @default "// Declare Variables\nconst user = this;\nconst skill = arguments[0];\nconst cost = arguments[1];\n\n// Return Boolean\nreturn cost > 0;"
 *
 * @param TextJS:func
 * @text JS: Cost Text
 * @parent  Windows
 * @type note
 * @desc Code to determine the text (with Text Code support) used for the displayed cost.
 * @default "// Declare Variables\nconst user = this;\nconst skill = arguments[0];\nconst cost = arguments[1];\nconst settings = arguments[2];\nconst fontSize = settings.FontSize;\nconst color = settings.FontColor;\nconst name = settings.Name;\nconst icon = settings.Icon;\nlet text = '';\n\n// Text: Change Font Size\ntext += '\\\\FS[%1]'.format(fontSize);\n\n// Text: Add Color\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\n    text += '\\\\HexColor<#%1>'.format(String(RegExp.$1));\n} else {\n    text += '\\\\C[%1]'.format(color);\n}\n\n// Text: Add Cost\ntext += '%1 %2'.format(cost, name);\n\n// Text: Add Icon\nif (icon  > 0) {\n    text += '\\\\I[%1]'.format(icon);\n}\n\n// Return text\nreturn text;"
 *
 * @param Gauges
 * @text Gauge Display
 *
 * @param GaugeMaxJS:func
 * @text JS: Maximum Value
 * @parent  Gauges
 * @type note
 * @desc Code to determine the maximum value used for this Skill Cost resource for gauges.
 * @default "// Declare Variables\nconst user = this;\n\n// Return value\nreturn 0;"
 *
 * @param GaugeCurrentJS:func
 * @text JS: Current Value
 * @parent  Gauges
 * @type note
 * @desc Code to determine the current value used for this Skill Cost resource for gauges.
 * @default "// Declare Variables\nconst user = this;\n\n// Return value\nreturn 0;"
 *
 * @param GaugeDrawJS:func
 * @text JS: Draw Gauge
 * @parent  Gauges
 * @type note
 * @desc Code to determine how to draw the Skill Cost resource for this gauge type.
 * @default "// Declare Variables\nconst sprite = this;\nconst settings = sprite._costSettings;\nconst bitmap = sprite.bitmap;\nconst user = sprite._battler;\nconst currentValue = sprite.currentDisplayedValue();\n\n// Draw Gauge\nconst color1 = ColorManager.textColor(30);\nconst color2 = ColorManager.textColor(31);\nconst gx = 0;\nconst gy = sprite.bitmapHeight() - sprite.gaugeHeight();\nconst gw = sprite.bitmapWidth() - gx;\nconst gh = sprite.gaugeHeight();\nthis.drawFullGauge(color1, color2, gx, gy, gw, gh);\n\n// Draw Label\nconst label = settings.Name;\nconst lx = 4;\nconst ly = 0;\nconst lw = sprite.bitmapWidth();\nconst lh = sprite.bitmapHeight();\nsprite.setupLabelFont();\nbitmap.paintOpacity = 255;\nbitmap.drawText(label, lx, ly, lw, lh, \"left\");\n\n// Draw Value\nconst vw = sprite.bitmapWidth() - 2;\nconst vh = sprite.bitmapHeight();\nsprite.setupValueFont();\nbitmap.textColor = ColorManager.normalColor();\nbitmap.drawText(currentValue, 0, 0, vw, vh, \"right\");"
 *
 */
/* ----------------------------------------------------------------------------
 * General State Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~States:
 *
 * @param General
 *
 * @param ReapplyRules:str
 * @text Reapply Rules
 * @parent General
 * @type select
 * @option Ignore: State doesn't get added.
 * @value ignore
 * @option Reset: Turns get reset.
 * @value reset
 * @option Greater: Turns take greater value (current vs reset).
 * @value greater
 * @option Add: Turns add upon existing turns.
 * @value add
 * @desc These are the rules when reapplying states.
 * @default greater
 *
 * @param MaxTurns:num
 * @text Maximum Turns
 * @parent General
 * @type number
 * @min 1
 * @desc Maximum number of turns to let states go up to.
 * This can be changed with the <Max Turns: x> notetag.
 * @default 9999
 *
 * @param ActionEndUpdate:eval
 * @text Action End Update
 * @parent General
 * @type boolean
 * @on Update Each Action
 * @off Don't Change
 * @desc States with "Action End" auto-removal will also update
 * turns at the end of each action instead of all actions.
 * @default true
 *
 * @param Turns
 * @text Turn Display
 *
 * @param ShowTurns:eval
 * @text Show Turns?
 * @parent Turns
 * @type boolean
 * @on Display
 * @off Hide
 * @desc Display state turns on top of window icons and sprites?
 * @default true
 *
 * @param TurnFontSize:num
 * @text Turn Font Size
 * @parent Turns
 * @type number
 * @min 1
 * @desc Font size used for displaying turns.
 * @default 16
 *
 * @param TurnOffsetX:num
 * @text Offset X
 * @parent Turns
 * @desc Offset the X position of the turn display.
 * @default -4
 *
 * @param TurnOffsetY:num
 * @text Offset Y
 * @parent Turns
 * @desc Offset the Y position of the turn display.
 * @default -6
 *
 * @param TurnFontSize:num
 * @text Turn Font Size
 * @parent Turns
 * @desc Font size used for displaying turns.
 * @default 16
 *
 * @param ColorNeutral:str
 * @text Turn Color: Neutral
 * @parent Turns
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param ColorPositive:str
 * @text Turn Color: Positive
 * @parent Turns
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 *
 * @param ColorNegative:str
 * @text Turn Color: Negative
 * @parent Turns
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param Data
 * @text Data Display
 *
 * @param ShowData:eval
 * @text Show Data?
 * @parent Data
 * @type boolean
 * @on Display
 * @off Hide
 * @desc Display state data on top of window icons and sprites?
 * @default true
 *
 * @param DataFontSize:num
 * @text Data Font Size
 * @parent Data
 * @type number
 * @min 1
 * @desc Font size used for displaying state data.
 * @default 12
 *
 * @param DataOffsetX:num
 * @text Offset X
 * @parent Data
 * @desc Offset the X position of the state data display.
 * @default 0
 *
 * @param DataOffsetY:num
 * @text Offset Y
 * @parent Data
 * @desc Offset the Y position of the state data display.
 * @default 8
 *
 * @param CustomJS
 * @text Global JS Effects
 *
 * @param onAddStateJS:func
 * @text JS: On Add State
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * state is added.
 * @default "// Declare Variables\nconst stateId = arguments[0];\nconst origin = this.getStateOrigin(stateId);\nconst state = $dataStates[stateId];\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onEraseStateJS:func
 * @text JS: On Erase State
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * state is erased.
 * @default "// Declare Variables\nconst stateId = arguments[0];\nconst origin = this.getStateOrigin(stateId);\nconst state = $dataStates[stateId];\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onExpireStateJS:func
 * @text JS: On Expire State
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * state has expired.
 * @default "// Declare Variables\nconst stateId = arguments[0];\nconst origin = this.getStateOrigin(stateId);\nconst state = $dataStates[stateId];\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * General Buff/Debuff Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Buffs:
 *
 * @param General
 *
 * @param ReapplyRules:str
 * @text Reapply Rules
 * @parent General
 * @type select
 * @option Ignore: Buff/Debuff doesn't get added.
 * @value ignore
 * @option Reset: Turns get reset.
 * @value reset
 * @option Greater: Turns take greater value (current vs reset).
 * @value greater
 * @option Add: Turns add upon existing turns.
 * @value add
 * @desc These are the rules when reapplying buffs/debuffs.
 * @default greater
 *
 * @param MaxTurns:num
 * @text Maximum Turns
 * @parent General
 * @type number
 * @min 1
 * @desc Maximum number of turns to let buffs and debuffs go up to.
 * @default 9999
 *
 * @param Stacking
 *
 * @param StackBuffMax:num
 * @text Max Stacks: Buff
 * @parent Stacking
 * @type number
 * @min 1
 * @desc Maximum number of stacks for buffs.
 * @default 2
 *
 * @param StackDebuffMax:num
 * @text Max Stacks: Debuff
 * @parent Stacking
 * @type number
 * @min 1
 * @desc Maximum number of stacks for debuffs.
 * @default 2
 *
 * @param MultiplierJS:func
 * @text JS: Buff/Debuff Rate
 * @parent Stacking
 * @type note
 * @desc Code to determine how much buffs and debuffs affect parameters.
 * @default "// Declare Variables\nconst user = this;\nconst paramId = arguments[0];\nconst buffLevel = arguments[1];\nlet rate = 1;\n\n// Perform Calculations\nrate += buffLevel * 0.25;\n\n// Return Rate\nreturn Math.max(0, rate);"
 *
 * @param Turns
 * @text Turns Display
 *
 * @param ShowTurns:eval
 * @text Show Turns?
 * @parent Turns
 * @type boolean
 * @on Display
 * @off Hide
 * @desc Display buff and debuff turns on top of window icons and sprites?
 * @default true
 *
 * @param TurnFontSize:num
 * @text Turn Font Size
 * @parent Turns
 * @type number
 * @min 1
 * @desc Font size used for displaying turns.
 * @default 16
 *
 * @param TurnOffsetX:num
 * @text Offset X
 * @parent Turns
 * @desc Offset the X position of the turn display.
 * @default -4
 *
 * @param TurnOffsetY:num
 * @text Offset Y
 * @parent Turns
 * @desc Offset the Y position of the turn display.
 * @default -6
 *
 * @param ColorBuff:str
 * @text Turn Color: Buffs
 * @parent Turns
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 *
 * @param ColorDebuff:str
 * @text Turn Color: Debuffs
 * @parent Turns
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param Data
 * @text Rate Display
 *
 * @param ShowData:eval
 * @text Show Rate?
 * @parent Data
 * @type boolean
 * @on Display
 * @off Hide
 * @desc Display buff and debuff rate on top of window icons and sprites?
 * @default false
 *
 * @param DataFontSize:num
 * @text Rate Font Size
 * @parent Data
 * @type number
 * @min 1
 * @desc Font size used for displaying rate.
 * @default 12
 *
 * @param DataOffsetX:num
 * @text Offset X
 * @parent Data
 * @desc Offset the X position of the rate display.
 * @default 0
 *
 * @param DataOffsetY:num
 * @text Offset Y
 * @parent Data
 * @desc Offset the Y position of the rate display.
 * @default 8
 *
 * @param CustomJS
 * @text Global JS Effects
 *
 * @param onAddBuffJS:func
 * @text JS: On Add Buff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * buff is added.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onAddDebuffJS:func
 * @text JS: On Add Debuff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * debuff is added.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onEraseBuffJS:func
 * @text JS: On Erase Buff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * buff is erased.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onEraseDebuffJS:func
 * @text JS: On Erase Debuff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * debuff is erased.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onExpireBuffJS:func
 * @text JS: On Expire Buff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * buff has expired.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onExpireDebuffJS:func
 * @text JS: On Expire Debuff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * debuff has expired.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Passive State Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~PassiveStates:
 *
 * @param List
 *
 * @param Global:arraynum
 * @text Global Passives
 * @parent List
 * @type state[]
 * @desc A list of passive states to affect actors and enemies.
 * @default []
 *
 * @param Actor:arraynum
 * @text Actor-Only Passives
 * @parent List
 * @type state[]
 * @desc A list of passive states to affect actors only.
 * @default []
 *
 * @param Enemy:arraynum
 * @text Enemy Passives
 * @parent List
 * @type state[]
 * @desc A list of passive states to affect enemies only.
 * @default []
 *
 * @param CustomJS
 * @text Global JS Effects
 *
 * @param PassiveConditionJS:func
 * @text JS: Condition Check
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide passive condition check.
 * @default "// Declare Variables\nconst state = arguments[0];\nconst stateId = state.id;\nconst user = this;\nconst target = this;\nconst a = this;\nconst b = this;\nlet condition = true;\n\n// Perform Checks\n\n\n// Return boolean\nreturn condition;"
 *
 */
//=============================================================================

const _0x389f=['cDQSD','nxjhK','stateTurns','height','_commandNameWindow','emgOo','IconStypeMagic','aAWHz','makeCurrentTroopUniqueID','KfiLY','Parse_Notetags_State_ApplyRemoveLeaveJS','setBuffTurns','itemWindowRectSkillsStatesCore','testSkillStatesCoreNotetags','call','Game_Action_testApply','NfONV','urtUp','oRjSg','BUhoh','process_VisuMZ_SkillsStatesCore_Notetags','addWindow','EnableLayout','onAddBuff','_colorCache','_checkingTraitsSetSkillsStatesCore','_stateMaxTurns','bWJoy','tpCost','priority','convertPassiveStates','Game_Unit_isAllDead','recover\x20all','POSITIVE','eIYBq','isStateResist','stateData','forgetSkill','drMgJ','isPartyAllAffectedByGroupDefeatStates','includes','removeState','Game_BattlerBase_eraseState','concat','Sprite_Gauge_currentMaxValue','getSkillTypes','wxRuI','stateExpireJS','clamp','state','Scene_Boot_onDatabaseLoaded','setStateOrigin','getStateRetainType','KMotg','isBottomHelpMode','StackBuffMax','BattleHiddenSkillTypes','iconWidth','%1%','yZZol','tDYIK','statusWindowRect','stateMaximumTurns','mainFontFace','textSizeEx','zPXrh','mainAreaHeight','onEraseDebuffGlobalJS','drawText','stateColor','checkShowHideSkillNotetags','NXAgR','_categoryWindow','endAction','_buffs','makeAdditionalSkillCostText','stateTpSlipDamageJS','Window_SkillList_drawItem','Window_SkillList_includes','heal','onRemoveState','VYGWB','RAewf','TurnFontSize','removeBuff','drawActorIconsAllTurnCounters','members','onExpireStateCustomJS','isLearnedSkill','commandName','itemWindowRect','ObnPM','bFBtx','cCMaM','description','SkillsStatesCore','LHNxF','kbPPF','buffLength','slipMp','actions','toLowerCase','WgULH','11LWWBXz','frameCount','convertGaugeTypeSkillsStatesCore','drawSkillCost','636520dIjhJO','slipTp','gaugeBackColor','removeStatesByCategoryAll','onDatabaseLoaded','number','maxItems','addChild','normalColor','XYPsH','ReapplyRules','oOyXI','drawActorStateTurns','stateHpSlipDamageJS','xASrP','format','textColor','_checkingVisuMzPassiveStateObjects','mlkQU','setItem','mainFontSize','updateFrame','redraw','parameters','actorId','isPlaytest','OWGoA','pOnqV','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','onExpireState','onExpireBuff','contents','applyBuffTurnManipulationEffects','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','clear','\x5cI[%1]%2','isStateExpired','isStateAffected','drawItem','NjPvu','removeBuffsAuto','buffTurns','VisuMZ_1_MainMenuCore','setActor','IJiYl','currentMaxValueSkillsStatesCore','SMtaI','_stateIDs','wvbXI','_stored_buffColor','GfTOX','GtOPN','stateId','maxCols','Game_BattlerBase_states','_stypeIDs','redrawSkillsStatesCore','meetsPassiveStateConditionSwitches','createAllSkillCostText','isAlive','_cache','zerJo','Game_Actor_skillTypes','LQXME','sirbB','DfHxf','Game_BattlerBase_skillTpCost','BMOSe','shift','Game_BattlerBase_traitsSet','_stateRetainType','changeOutlineColor','remove','CoreEngine','debuffTurns','onAddDebuffGlobalJS','setup','match','kwyYt','SHToO','maxSlipDamage','removeStatesAuto','stateAddJS','Window_StatusBase_drawActorIcons','DataOffsetY','commandStyle','MAXMP','slipHp','vGXwX','795307SKmGaE','ATK','GPZTQ','DEF','addCommand','addPassiveStatesTraitSets','ShowShopStatus','Game_BattlerBase_clearStates','getStateIdWithName','initMembers','#%1','Window_SkillList_setActor','onEraseStateCustomJS','onEraseDebuff','bfGTz','debuffColor','DataFontSize','placeGauge','BattleManager_endAction','commandNameWindowDrawBackground','MultiplierJS','ColorNeutral','ConvertParams','isStateCategoryAffected','PShcn','_lastStatesActionEndFrameCount','untitled','JokBY','totalStateCategory','addDebuff','buttonAssistText1','Game_Battler_addState','Cswqk','drawParamText','%1\x20%2\x20%3','fontSize','_stateTurns','gaugeRate','isUseModernControls','hasStateCategory','center','Sprite_Gauge_currentValue','kVOOw','setStateRetainType','clearStateRetainType','Window_SkillList_maxCols','skillEnableJS','statePassiveConditionJS','isStateAddable','menuActor','statusWidth','drawActorStateData','NUM','_result','enemy','MDF','helpWindowRectSkillsStatesCore','Parse_Notetags_State_PassiveJS','skillCostSeparator','DCHRy','gainSilentTp','pszzH','yKFLU','meetsPassiveStateConditionJS','setupSkillsStatesCore','GaugeDrawJS','createItemWindow','drawFullGauge','usableSkills','Sprite_Gauge_gaugeRate','Game_Actor_forgetSkill','onExpireDebuffJS','paramBuffRate','WiEze','die','applyDebuffTurnManipulationEffects','ShowTurns','isStateRemoved','_currentTroopUniqueID','currentClass','_checkingPassiveStates','LUK','onEraseBuffJS','CmdTextAlign','currentDisplayedValue','currentValueSkillsStatesCore','onExpireBuffGlobalJS','uiMenuStyle','Enemy','checkSkillTypeMatch','TpAiE','innerHeight','onAddDebuff','kHRAZ','unnvh','CNoRx','<troop-%1>','itemTextAlign','CmdStyle','createCommandNameWindow','note','MAT','resetTextColor','_costSettings','skillTpCost','width','shopStatusWindowRect','onAddStateGlobalJS','FUNC','Parse_Notetags_State_SlipEffectJS','lineHeight','isStateRestrict','Game_Battler_isStateAddable','Sprite_Gauge_setup','applyItemUserEffect','KCwFJ','useDigitGrouping','addState','cqEdH','stateMpSlipHealJS','colSpacing','Game_Battler_regenerateAll','_tempActor','qmAxD','resetFontSettings','fQMcg','setPassiveStateSlipDamageJS','status','convertTargetToStateOriginKey','_classIDs','_passiveStateResults','lgIFZ','getClassIdWithName','qtrJD','gpfma','isDebuffAffected','VisuMZ_1_ItemsEquipsCore','meetsPassiveStateConditionClasses','ARRAYSTR','ShXVC','recalculateSlipDamageJS','addPassiveStatesByPluginParameters','shopStatusWidth','map','mSfOt','MAXHP','lRpHr','Game_Battler_addBuff','getSkillIdWithName','increaseBuff','user','itemLineRect','meetsSkillConditions','length','drawItemStyleIconText','Game_Troop_setup','skillVisibleJS','_statusWindow','applyStateCategoryRemovalEffects','return\x200','isBuffAffected','_stateDisplay','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','cKKWF','aknJM','PaLAy','fontBold','keys','changeTextColor','isBuffExpired','_scene','commandNameWindowDrawText','vtcKq','updateTurnDisplaySprite','regenerateAll','skillTypeWindowRectSkillsStatesCore','statesByCategory','addBuff','updatedLayoutStyle','log','kWcOk','canClearState','DoppI','Szxyj','ColorNegative','TextJS','Settings','value','ColorBuff','Game_Actor_learnSkill','parse','GroupDigits','Scene_Skill_createItemWindow','itemAt','FYjFt','resetStateCounts','ceil','clearStatesWithStateRetain','Parse_Notetags_Skill_Cost','Skills','buttonAssistSwitch','isPassiveStateStackable','uCeuK','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20condition\x20=\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20condition;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','checkShowHideBattleNotetags','jkCOj','paramValueByName','onAddDebuffJS','PLFIi','drawExtendedParameter','onAddStateJS','sBRvF','success','traitsSet','FeIbO','name','SkillMenuStatusRect','811941IeruLs','VisuMZ_0_CoreEngine','_stypeId','makeSuccess','magicSkills','clearStates','toUpperCase','mainCommandWidth','applySkillsStatesCoreEffects','pMjqj','VisuMZ_2_ClassChangeSystem','CanPayJS','round','ADkoP','clearStateOrigin','commandStyleCheck','RJHNW','overwriteBuffTurns','yLQAq','VaeAL','windowPadding','getColor','addPassiveStatesByNotetag','sort','buff','iHTso','currentMaxValue','test','checkCacheKey','Game_BattlerBase_refresh','8KoQvAn','SkillSceneAdjustSkillList','gAThJ','greater','updateCommandNameWindow','onExpireStateJS','trim','shopStatusWindowRectSkillsStatesCore','DataOffsetX','equips','stateTpSlipHealJS','buffColor','ParseClassIDs','enemyId','inBattle','_buffTurns','mUKsj','iconHeight','max','setBackgroundType','_actor','wPrsf','gaugeLineHeight','ColorDebuff','ZqAmt','death','States','onAddBuffGlobalJS','makeCommandList','multiclasses','setStypeId','skillTypeWindowRect','\x0a\x20\x20\x20\x20\x20\x20\x20\x20let\x20%2\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20origin\x20=\x20this.getStateOrigin(stateId);\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20state\x20=\x20$dataStates[stateId];\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20origin;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20origin;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20%2\x20=\x20Math.round(Math.max(0,\x20%2)\x20*\x20%3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20this.setStateData(stateId,\x20\x27%4\x27,\x20%2);\x0a\x20\x20\x20\x20','TsuIR','process_VisuMZ_SkillsStatesCore_State_Notetags','Sprite_StateIcon_updateFrame','isBuffPrevented','Game_BattlerBase_recoverAll','onEraseBuff','removeStatesByCategory','anchor','skillId','outlineColor','dZFHO','STRUCT','paySkillCost','ZIBVf','createTurnDisplaySprite','47378AYbWJm','Parse_Notetags_Skill_JS','drawItemStyleIcon','vmTZA','yKZCe','isCommandEnabled','wzEXn','CaEJi','meetsPassiveStateGlobalConditionJS','LnhKD','fillRect','action','487910ypRgsh','index','Scene_Skill_helpWindowRect','checkSkillConditionsSwitchNotetags','veubp','_turnDisplaySprite','floor','addStateTurns','Name','onExpireBuffJS','640513FNyfai','_subject','commandNameWindowCenter','PsEGh','setStateTurns','passiveStateObjects','getStypeIdWithName','hasState','ColorPositive','_hidden','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20enabled\x20=\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20enabled;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','getStateDisplay','regenerateAllSkillsStatesCore','onAddState','createShopStatusWindow','icon','AWTCg','ARRAYEVAL','152743VoRAQh','Scene_Skill_itemWindowRect','cBNsP','canPaySkillCost','Game_BattlerBase_increaseBuff','alterSkillName','isActor','NQcQu','getStateReapplyRulings','filter','getCurrentTroopUniqueID','txSMo','retrieveStateColor','uiHelpPosition','isSkillCostShown','_skillIDs','canUse','kmoFw','QMltO','addPassiveStatesFromOtherPlugins','right','PayJS','stateHpSlipHealJS','helpWindowRect','createSkillCostText','_skills','updateHelp','Wqaeo','learnSkill','LUMPj','ActionEndUpdate','ARRAYSTRUCT','vCTJy','push','uiInputPosition','getColorDataFromPluginParameters','_stateData','actor','boxWidth','skills','OvPUX','Game_Action_applyItemUserEffect','getCurrentStateActiveUser','TurnOffsetX','yZOxX','isUseSkillsStatesCoreUpdatedLayout','aliveMembers','onAddStateCustomJS','drawIcon','JWzqw','buffIconIndex','\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20origin\x20=\x20this.getStateOrigin(stateId);\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20state\x20=\x20$dataStates[stateId];\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this.getCurrentStateActiveUser();\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20origin;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20','skill','_stateSteps','makeCommandName','innerWidth','GaugeCurrentJS','checkShowHideSwitchNotetags','drawActorIcons','tvPHA','_stored_state-%1-color','ghySv','isAllDead','PDwEr','placeExactGauge','recoverAll','isGroupDefeatStateAffected','damage','clearStateDisplay','ShowData','drawTextEx','version','callUpdateHelp','Game_BattlerBase_meetsSkillConditions','Game_BattlerBase_eraseBuff','iconText','ParseStateNotetags','drawActorBuffRates','updateStatesActionEnd','Costs','Global','getStateOriginByKey','NTgUx','Window_SkillType_initialize','onExpireStateGlobalJS','iQxJy','states','includesSkillsStatesCore','RgDbH','mpCost','onEraseStateJS','onEraseDebuffJS','_shopStatusWindow','MaxTurns','getStateData','setStatusWindow','isRightInputMode','haPCm','CalcJS','categories','mOzZR','getCurrentStateOriginKey','_states','split','AGI','ShowJS','MvJCH','PassiveConditionJS','allowCreateShopStatusWindow','JJdKi','isBuffOrDebuffAffected','changePaintOpacity','onEraseBuffGlobalJS','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20visible\x20=\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this._actor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this._actor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this._actor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this._actor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20visible;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','replace','reset','Parse_Notetags_State_Category','Game_BattlerBase_skillMpCost','helpAreaHeight','addBuffTurns','Sprite_Gauge_initMembers','scrollTo','_battler','bitmap','DYXBZ','QCbjG','passiveStates','cQEii','item','prototype','fLpXl','Game_BattlerBase_initMembers','adjustItemWidthByShopStatus','onAddBuffJS','hrHnn','addDebuffTurns','YcOjx','stateEraseJS','nnIwp','onAddStateMakeCustomSlipValues','lDEJF','qxNri','stateMpSlipDamageJS','applyStateTurnManipulationEffects','iconIndex','aIrBM','rgba(0,\x200,\x200,\x201)','checkSkillConditionsNotetags','_currentActor','createPassiveStatesCache','helpAreaTop','ezcIK','Scene_Skill_statusWindowRect','jtpKk','initMembersSkillsStatesCore','eraseBuff','Window_SkillStatus_refresh','skillMpCost','checkShowHideNotetags','TurnOffsetY','hide','Game_Battler_addDebuff','zgpOk','<actor-%1>','ddsOZ','statusWindowRectSkillsStatesCore','Wqmly','_stateOrigin','PtdQG','_tempBattler','testApply','_phase','onExpireDebuff','isMaxBuffAffected','ListWindowCols','totalStateCategoryAffected','Game_BattlerBase_decreaseBuff','add','onEraseStateGlobalJS','Buffs','decreaseBuff','Sprite_Gauge_redraw','EtQRp','currentValue','GaugeMaxJS','Window_StatusBase_placeGauge','initialize','text','eHHSt','setDebuffTurns','isSkillUsableForAutoBattle','VisuMZ_1_ElementStatusCore','constructor','autoRemovalTiming','KGigv','drawActorBuffTurns','indexOf','Sprite_StateIcon_loadBitmap','Game_BattlerBase_overwriteBuffTurns','KEVGP','EVAL','LogOF','meetsSkillConditionsGlobalJS','gainHp','SkillConditionJS','<member-%1>','PassiveStates','gradientFillRect','stypeId','clearStateData','refresh','Scene_Skill_skillTypeWindowRect','skillTypes','_itemWindow','checkShowHideJS','meetsSkillConditionsEnableJS','groupDefeat','Game_BattlerBase_resetStateCounts','ParseSkillNotetags','eraseState','oKRKA','_skillTypeWindow','XUztL','hasSkill','Kibvv','addPassiveStates','OdEdt','SkillSceneStatusBgType','exit'];function _0x2906(_0x520fa3,_0x14c94a){return _0x2906=function(_0x389fb2,_0x290651){_0x389fb2=_0x389fb2-0x1d9;let _0x21a70a=_0x389f[_0x389fb2];return _0x21a70a;},_0x2906(_0x520fa3,_0x14c94a);}const _0x20428a=_0x2906;(function(_0x547d34,_0x49e6d7){const _0x2edeb6=_0x2906;while(!![]){try{const _0x341be6=-parseInt(_0x2edeb6(0x1fc))+parseInt(_0x2edeb6(0x368))+-parseInt(_0x2edeb6(0x206))+parseInt(_0x2edeb6(0x49a))+parseInt(_0x2edeb6(0x3c1))+-parseInt(_0x2edeb6(0x364))*-parseInt(_0x2edeb6(0x1f0))+parseInt(_0x2edeb6(0x4b8))*-parseInt(_0x2edeb6(0x218));if(_0x341be6===_0x49e6d7)break;else _0x547d34['push'](_0x547d34['shift']());}catch(_0x57fa6){_0x547d34['push'](_0x547d34['shift']());}}}(_0x389f,0x6535f));var label=_0x20428a(0x35c),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x20428a(0x221)](function(_0xcd44ef){const _0xc3bd23=_0x20428a;return _0xcd44ef[_0xc3bd23(0x440)]&&_0xcd44ef[_0xc3bd23(0x35b)][_0xc3bd23(0x325)]('['+label+']');})[0x0];VisuMZ[label][_0x20428a(0x47b)]=VisuMZ[label][_0x20428a(0x47b)]||{},VisuMZ[_0x20428a(0x3d7)]=function(_0x52494b,_0x15e197){const _0x25b978=_0x20428a;for(const _0x140161 in _0x15e197){if(_0x140161['match'](/(.*):(.*)/i)){const _0x34693a=String(RegExp['$1']),_0x39c01b=String(RegExp['$2'])[_0x25b978(0x4a0)]()[_0x25b978(0x4be)]();let _0x1f7f89,_0x251805,_0x204a9b;switch(_0x39c01b){case _0x25b978(0x3f5):_0x1f7f89=_0x15e197[_0x140161]!==''?Number(_0x15e197[_0x140161]):0x0;break;case'ARRAYNUM':_0x251805=_0x15e197[_0x140161]!==''?JSON['parse'](_0x15e197[_0x140161]):[],_0x1f7f89=_0x251805[_0x25b978(0x450)](_0x55c081=>Number(_0x55c081));break;case _0x25b978(0x2e0):_0x1f7f89=_0x15e197[_0x140161]!==''?eval(_0x15e197[_0x140161]):null;break;case _0x25b978(0x217):_0x251805=_0x15e197[_0x140161]!==''?JSON[_0x25b978(0x47f)](_0x15e197[_0x140161]):[],_0x1f7f89=_0x251805[_0x25b978(0x450)](_0x53086a=>eval(_0x53086a));break;case'JSON':_0x1f7f89=_0x15e197[_0x140161]!==''?JSON[_0x25b978(0x47f)](_0x15e197[_0x140161]):'';break;case'ARRAYJSON':_0x251805=_0x15e197[_0x140161]!==''?JSON[_0x25b978(0x47f)](_0x15e197[_0x140161]):[],_0x1f7f89=_0x251805[_0x25b978(0x450)](_0x1395f6=>JSON[_0x25b978(0x47f)](_0x1395f6));break;case _0x25b978(0x42d):_0x1f7f89=_0x15e197[_0x140161]!==''?new Function(JSON[_0x25b978(0x47f)](_0x15e197[_0x140161])):new Function(_0x25b978(0x460));break;case'ARRAYFUNC':_0x251805=_0x15e197[_0x140161]!==''?JSON[_0x25b978(0x47f)](_0x15e197[_0x140161]):[],_0x1f7f89=_0x251805[_0x25b978(0x450)](_0x122a1d=>new Function(JSON[_0x25b978(0x47f)](_0x122a1d)));break;case'STR':_0x1f7f89=_0x15e197[_0x140161]!==''?String(_0x15e197[_0x140161]):'';break;case _0x25b978(0x44b):_0x251805=_0x15e197[_0x140161]!==''?JSON[_0x25b978(0x47f)](_0x15e197[_0x140161]):[],_0x1f7f89=_0x251805[_0x25b978(0x450)](_0x463ddd=>String(_0x463ddd));break;case _0x25b978(0x1ec):_0x204a9b=_0x15e197[_0x140161]!==''?JSON['parse'](_0x15e197[_0x140161]):{},_0x52494b[_0x34693a]={},VisuMZ[_0x25b978(0x3d7)](_0x52494b[_0x34693a],_0x204a9b);continue;case _0x25b978(0x237):_0x251805=_0x15e197[_0x140161]!==''?JSON[_0x25b978(0x47f)](_0x15e197[_0x140161]):[],_0x1f7f89=_0x251805[_0x25b978(0x450)](_0x1984e8=>VisuMZ[_0x25b978(0x3d7)]({},JSON[_0x25b978(0x47f)](_0x1984e8)));break;default:continue;}_0x52494b[_0x34693a]=_0x1f7f89;}}return _0x52494b;},(_0x3dad4d=>{const _0x3abbe6=_0x20428a,_0x3100ee=_0x3dad4d[_0x3abbe6(0x498)];for(const _0x7db822 of dependencies){if(!Imported[_0x7db822]){if(_0x3abbe6(0x31f)!==_0x3abbe6(0x453)){alert(_0x3abbe6(0x384)[_0x3abbe6(0x377)](_0x3100ee,_0x7db822)),SceneManager[_0x3abbe6(0x2fc)]();break;}else _0x2fa098[_0x3abbe6(0x35c)][_0x3abbe6(0x47b)]['States'][_0x3abbe6(0x493)][_0x3abbe6(0x30b)](this,_0x40ffee);}}const _0x286787=_0x3dad4d[_0x3abbe6(0x35b)];if(_0x286787['match'](/\[Version[ ](.*?)\]/i)){if(_0x3abbe6(0x257)!==_0x3abbe6(0x257)){const _0x45c2d0=_0x4338f2[_0x3abbe6(0x47f)]('['+_0x560606['$1'][_0x3abbe6(0x3b5)](/\d+/g)+']');for(const _0x2f01c6 of _0x45c2d0){if(!_0x48a298['value'](_0x2f01c6))return!![];}return![];}else{const _0x248af9=Number(RegExp['$1']);_0x248af9!==VisuMZ[label][_0x3abbe6(0x25f)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x3abbe6(0x377)](_0x3100ee,_0x248af9)),SceneManager[_0x3abbe6(0x2fc)]());}}if(_0x286787[_0x3abbe6(0x3b5)](/\[Tier[ ](\d+)\]/i)){if('OncDX'!=='OncDX'){_0x4996c8[_0x3abbe6(0x3b5)](/<(.*)[ ]BUFF TURNS:[ ]([\+\-]\d+)>/i);const _0xf7ba93=_0x69b428[_0x3abbe6(0x2dc)](_0x4b4b51(_0xa5eab1['$1'])[_0x3abbe6(0x4a0)]()),_0xc5b169=_0x4d3e38(_0x35b37b['$2']);_0xf7ba93>=0x0&&(_0x4868df['addBuffTurns'](_0xf7ba93,_0xc5b169),this[_0x3abbe6(0x49d)](_0x3480a));}else{const _0x264967=Number(RegExp['$1']);if(_0x264967<tier)alert(_0x3abbe6(0x389)[_0x3abbe6(0x377)](_0x3100ee,_0x264967,tier)),SceneManager[_0x3abbe6(0x2fc)]();else{if(_0x3abbe6(0x4c8)===_0x3abbe6(0x4c8))tier=Math['max'](_0x264967,tier);else{if(_0x22d9f3[_0x3abbe6(0x418)]&&_0x14bd71[_0x3abbe6(0x23a)]!==_0x142e12)return _0x3a3632[_0x3abbe6(0x23a)];else return this[_0x3abbe6(0x245)]()?this[_0x3abbe6(0x473)]()[_0x3abbe6(0x3b5)](/RIGHT/i):_0x21cff0[_0x3abbe6(0x299)][_0x3abbe6(0x278)][_0x3abbe6(0x30b)](this);}}}}VisuMZ['ConvertParams'](VisuMZ[label][_0x3abbe6(0x47b)],_0x3dad4d[_0x3abbe6(0x37f)]);})(pluginData),VisuMZ[_0x20428a(0x35c)][_0x20428a(0x32f)]=Scene_Boot['prototype'][_0x20428a(0x36c)],Scene_Boot[_0x20428a(0x299)]['onDatabaseLoaded']=function(){const _0x5bdd6d=_0x20428a;VisuMZ[_0x5bdd6d(0x35c)][_0x5bdd6d(0x32f)][_0x5bdd6d(0x30b)](this),this[_0x5bdd6d(0x311)]();},Scene_Boot[_0x20428a(0x299)][_0x20428a(0x311)]=function(){const _0x4983c4=_0x20428a;if(VisuMZ['ParseAllNotetags'])return;this['process_VisuMZ_SkillsStatesCore_Skill_Notetags'](),this[_0x4983c4(0x1e2)]();},Scene_Boot['prototype']['process_VisuMZ_SkillsStatesCore_Skill_Notetags']=function(){const _0x549cff=_0x20428a;for(const _0x4e2159 of $dataSkills){if(_0x549cff(0x282)!==_0x549cff(0x282))_0x1dcb0a=_0x40aecd,_0x109ea1+=_0x394b6b;else{if(!_0x4e2159)continue;VisuMZ[_0x549cff(0x35c)][_0x549cff(0x487)](_0x4e2159),VisuMZ[_0x549cff(0x35c)]['Parse_Notetags_Skill_JS'](_0x4e2159);}}},Scene_Boot[_0x20428a(0x299)]['process_VisuMZ_SkillsStatesCore_State_Notetags']=function(){const _0x4e136e=_0x20428a;for(const _0x813817 of $dataStates){if(!_0x813817)continue;VisuMZ[_0x4e136e(0x35c)][_0x4e136e(0x28c)](_0x813817),VisuMZ['SkillsStatesCore']['Parse_Notetags_State_PassiveJS'](_0x813817),VisuMZ[_0x4e136e(0x35c)][_0x4e136e(0x42e)](_0x813817),VisuMZ['SkillsStatesCore'][_0x4e136e(0x307)](_0x813817);}},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x2f2)]=VisuMZ[_0x20428a(0x2f2)],VisuMZ[_0x20428a(0x2f2)]=function(_0x44018a){const _0xd8eaea=_0x20428a;VisuMZ[_0xd8eaea(0x35c)][_0xd8eaea(0x2f2)][_0xd8eaea(0x30b)](this,_0x44018a),VisuMZ[_0xd8eaea(0x35c)][_0xd8eaea(0x487)](_0x44018a),VisuMZ[_0xd8eaea(0x35c)][_0xd8eaea(0x1f1)](_0x44018a);},VisuMZ[_0x20428a(0x35c)]['ParseStateNotetags']=VisuMZ[_0x20428a(0x264)],VisuMZ[_0x20428a(0x264)]=function(_0x3b77ed){const _0x12b409=_0x20428a;VisuMZ['SkillsStatesCore'][_0x12b409(0x264)][_0x12b409(0x30b)](this,_0x3b77ed),VisuMZ[_0x12b409(0x35c)][_0x12b409(0x28c)](_0x3b77ed),VisuMZ[_0x12b409(0x35c)]['Parse_Notetags_State_PassiveJS'](_0x3b77ed),VisuMZ[_0x12b409(0x35c)][_0x12b409(0x42e)](_0x3b77ed),VisuMZ[_0x12b409(0x35c)][_0x12b409(0x307)](_0x3b77ed);},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x487)]=function(_0x4f1842){const _0x1ebf0b=_0x20428a,_0x4909c8=_0x4f1842['note'];if(_0x4909c8['match'](/<MP COST:[ ](\d+)>/i)){if('UEVGU'===_0x1ebf0b(0x446)){if(!_0x21764c[_0x1ebf0b(0x47c)](_0x55e6dd))return!![];}else _0x4f1842[_0x1ebf0b(0x271)]=Number(RegExp['$1']);}_0x4909c8[_0x1ebf0b(0x3b5)](/<TP COST:[ ](\d+)>/i)&&(_0x1ebf0b(0x249)!==_0x1ebf0b(0x249)?_0x19585a=this['multiclasses']():_0x4f1842['tpCost']=Number(RegExp['$1']));},VisuMZ['SkillsStatesCore'][_0x20428a(0x3ef)]={},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x45d)]={},VisuMZ['SkillsStatesCore'][_0x20428a(0x1f1)]=function(_0x32a96d){const _0xfa1087=_0x20428a,_0x46ddb9=_0x32a96d[_0xfa1087(0x425)];if(_0x46ddb9[_0xfa1087(0x3b5)](/<JS SKILL ENABLE>\s*([\s\S]*)\s*<\/JS SKILL ENABLE>/i)){if(_0xfa1087(0x253)===_0xfa1087(0x2e1)){if(typeof _0x44add3===_0xfa1087(0x36d))_0x34c466=_0x2e230f[_0x2e0ab2];return this[_0xfa1087(0x26e)]()[_0xfa1087(0x325)](_0x10a25c);}else{const _0x165b55=String(RegExp['$1']),_0xd22e7f=_0xfa1087(0x210)[_0xfa1087(0x377)](_0x165b55);VisuMZ[_0xfa1087(0x35c)][_0xfa1087(0x3ef)][_0x32a96d['id']]=new Function(_0xfa1087(0x24c),_0xd22e7f);}}if(_0x46ddb9['match'](/<JS SKILL VISIBLE>\s*([\s\S]*)\s*<\/JS SKILL VISIBLE>/i)){if('vCTJy'!==_0xfa1087(0x238)){if(typeof _0x2dc9b2!==_0xfa1087(0x36d))_0x3a546e=_0x2cb814['id'];const _0x590314=this[_0xfa1087(0x321)](_0x30c9c2);_0x590314[_0x23f989]=_0x1b09c4;}else{const _0x58bbe3=String(RegExp['$1']),_0x17ccae=_0xfa1087(0x289)[_0xfa1087(0x377)](_0x58bbe3);VisuMZ[_0xfa1087(0x35c)][_0xfa1087(0x45d)][_0x32a96d['id']]=new Function(_0xfa1087(0x24c),_0x17ccae);}}},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x28c)]=function(_0x102a43){const _0x301f86=_0x20428a;_0x102a43[_0x301f86(0x27b)]=['ALL','ANY'];const _0x2b9b9a=_0x102a43[_0x301f86(0x425)],_0x1d9fcb=_0x2b9b9a[_0x301f86(0x3b5)](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);if(_0x1d9fcb){if(_0x301f86(0x494)===_0x301f86(0x494))for(const _0x27d036 of _0x1d9fcb){_0x27d036['match'](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);const _0x3e3c29=String(RegExp['$1'])[_0x301f86(0x4a0)]()[_0x301f86(0x4be)]()[_0x301f86(0x27f)](',');for(const _0xafcde3 of _0x3e3c29){_0x102a43[_0x301f86(0x27b)][_0x301f86(0x239)](_0xafcde3[_0x301f86(0x4be)]());}}else{_0x2c10aa['SkillsStatesCore'][_0x301f86(0x2c8)]['call'](this,_0x47716c);if(!this[_0x301f86(0x286)](_0x15af57))this[_0x301f86(0x2b3)](_0x569980);}}if(_0x2b9b9a[_0x301f86(0x3b5)](/<(?:CATEGORY|CATEGORIES)>\s*([\s\S]*)\s*<\/(?:CATEGORY|CATEGORIES)>/i)){if(_0x301f86(0x2a9)==='kvWkj')return _0x448922(_0x3d9c8f['$1']);else{const _0x4436b9=RegExp['$1'][_0x301f86(0x27f)](/[\r\n]+/);for(const _0x331c85 of _0x4436b9){_0x301f86(0x29a)===_0x301f86(0x44c)?(_0x2b6b6f['prototype'][_0x301f86(0x34d)]['call'](this,_0x1c8b49),this[_0x301f86(0x3cd)](_0x86c7d2),this[_0x301f86(0x2ca)](_0x22d2fe)):_0x102a43['categories'][_0x301f86(0x239)](_0x331c85['toUpperCase']()[_0x301f86(0x4be)]());}}}if(_0x2b9b9a[_0x301f86(0x3b5)](/<POSITIVE STATE>/i)){if(_0x301f86(0x4ac)!==_0x301f86(0x437))_0x102a43[_0x301f86(0x27b)][_0x301f86(0x239)](_0x301f86(0x31e));else{const _0x1e5e75=this[_0x301f86(0x471)](_0x1a2e18)['filter'](_0x4b5659=>this[_0x301f86(0x38d)](_0x4b5659['id']));return _0x1e5e75[_0x301f86(0x45a)];}}if(_0x2b9b9a[_0x301f86(0x3b5)](/<NEGATIVE STATE>/i)){if('xZtIY'!=='xZtIY'){if(this[_0x301f86(0x4b6)](_0x301f86(0x296)))return this[_0x301f86(0x31b)]();if(this[_0x301f86(0x379)])return[];return this['_checkingVisuMzPassiveStateObjects']=!![],this[_0x301f86(0x2ad)](),this['_checkingVisuMzPassiveStateObjects']=_0x34309f,this['convertPassiveStates']();}else _0x102a43[_0x301f86(0x27b)]['push']('NEGATIVE');}},VisuMZ[_0x20428a(0x35c)]['statePassiveConditionJS']={},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x3fa)]=function(_0x31ae14){const _0x3409df=_0x20428a,_0x588026=_0x31ae14['note'];if(_0x588026[_0x3409df(0x3b5)](/<JS PASSIVE CONDITION>\s*([\s\S]*)\s*<\/JS PASSIVE CONDITION>/i)){const _0x3f9c9b=String(RegExp['$1']),_0x1889b2=_0x3409df(0x48c)['format'](_0x3f9c9b);VisuMZ[_0x3409df(0x35c)][_0x3409df(0x3f0)][_0x31ae14['id']]=new Function(_0x3409df(0x32e),_0x1889b2);}},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x375)]={},VisuMZ[_0x20428a(0x35c)]['stateHpSlipHealJS']={},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x2a6)]={},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x438)]={},VisuMZ[_0x20428a(0x35c)]['stateTpSlipDamageJS']={},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x4c2)]={},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x42e)]=function(_0x666baf){const _0x4ea56f=_0x20428a,_0x1e1cb7=_0x666baf[_0x4ea56f(0x425)],_0x52eeb8=_0x4ea56f(0x1e0);if(_0x1e1cb7[_0x4ea56f(0x3b5)](/<JS HP SLIP DAMAGE>\s*([\s\S]*)\s*<\/JS HP SLIP DAMAGE>/i)){if(_0x4ea56f(0x2a4)===_0x4ea56f(0x2a4)){const _0x5b4a96=String(RegExp['$1']),_0x19453b=_0x52eeb8[_0x4ea56f(0x377)](_0x5b4a96,'damage',-0x1,_0x4ea56f(0x3bf));VisuMZ['SkillsStatesCore'][_0x4ea56f(0x375)][_0x666baf['id']]=new Function(_0x4ea56f(0x39c),_0x19453b);}else _0x47102f[_0x4ea56f(0x27b)][_0x4ea56f(0x239)](_0x1c330c['toUpperCase']()[_0x4ea56f(0x4be)]());}else{if(_0x1e1cb7[_0x4ea56f(0x3b5)](/<JS HP SLIP HEAL>\s*([\s\S]*)\s*<\/JS HP SLIP HEAL>/i)){const _0x417a39=String(RegExp['$1']),_0x201c92=_0x52eeb8[_0x4ea56f(0x377)](_0x417a39,'heal',0x1,'slipHp');VisuMZ[_0x4ea56f(0x35c)][_0x4ea56f(0x22e)][_0x666baf['id']]=new Function('stateId',_0x201c92);}}if(_0x1e1cb7[_0x4ea56f(0x3b5)](/<JS MP SLIP DAMAGE>\s*([\s\S]*)\s*<\/JS MP SLIP DAMAGE>/i)){const _0x2d79bb=String(RegExp['$1']),_0x336f7c=_0x52eeb8[_0x4ea56f(0x377)](_0x2d79bb,_0x4ea56f(0x25b),-0x1,_0x4ea56f(0x360));VisuMZ[_0x4ea56f(0x35c)][_0x4ea56f(0x2a6)][_0x666baf['id']]=new Function(_0x4ea56f(0x39c),_0x336f7c);}else{if(_0x1e1cb7[_0x4ea56f(0x3b5)](/<JS MP SLIP HEAL>\s*([\s\S]*)\s*<\/JS MP SLIP HEAL>/i)){if(_0x4ea56f(0x270)!==_0x4ea56f(0x270))return _0x22b9a0[_0x4ea56f(0x35c)]['Settings'][_0x4ea56f(0x1da)][_0x4ea56f(0x372)];else{const _0x375715=String(RegExp['$1']),_0x58e7e2=_0x52eeb8[_0x4ea56f(0x377)](_0x375715,_0x4ea56f(0x34c),0x1,_0x4ea56f(0x360));VisuMZ[_0x4ea56f(0x35c)][_0x4ea56f(0x438)][_0x666baf['id']]=new Function(_0x4ea56f(0x39c),_0x58e7e2);}}}if(_0x1e1cb7[_0x4ea56f(0x3b5)](/<JS TP SLIP DAMAGE>\s*([\s\S]*)\s*<\/JS TP SLIP DAMAGE>/i)){const _0x456e5f=String(RegExp['$1']),_0x382cb9=_0x52eeb8[_0x4ea56f(0x377)](_0x456e5f,'damage',-0x1,_0x4ea56f(0x369));VisuMZ['SkillsStatesCore'][_0x4ea56f(0x349)][_0x666baf['id']]=new Function('stateId',_0x382cb9);}else{if(_0x1e1cb7['match'](/<JS TP SLIP HEAL>\s*([\s\S]*)\s*<\/JS TP SLIP HEAL>/i)){if(_0x4ea56f(0x465)!=='vfBPx'){const _0x5927cb=String(RegExp['$1']),_0x26a359=_0x52eeb8['format'](_0x5927cb,_0x4ea56f(0x34c),0x1,'slipTp');VisuMZ[_0x4ea56f(0x35c)]['stateTpSlipHealJS'][_0x666baf['id']]=new Function(_0x4ea56f(0x39c),_0x26a359);}else{if(!this['_actor'][_0x4ea56f(0x355)](_0x1c1583))return![];}}}},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x3ba)]={},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x2a1)]={},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x32c)]={},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x307)]=function(_0x457e7e){const _0x2560b=_0x20428a,_0x42a247=_0x457e7e['note'],_0x5bf148=_0x2560b(0x24b);if(_0x42a247[_0x2560b(0x3b5)](/<JS ON ADD STATE>\s*([\s\S]*)\s*<\/JS ON ADD STATE>/i)){const _0x2cf8c4=String(RegExp['$1']),_0x56b6ef=_0x5bf148['format'](_0x2cf8c4);VisuMZ[_0x2560b(0x35c)]['stateAddJS'][_0x457e7e['id']]=new Function('stateId',_0x56b6ef);}if(_0x42a247['match'](/<JS ON ERASE STATE>\s*([\s\S]*)\s*<\/JS ON ERASE STATE>/i)){const _0x1fbd58=String(RegExp['$1']),_0x48b223=_0x5bf148[_0x2560b(0x377)](_0x1fbd58);VisuMZ['SkillsStatesCore'][_0x2560b(0x2a1)][_0x457e7e['id']]=new Function(_0x2560b(0x39c),_0x48b223);}if(_0x42a247['match'](/<JS ON EXPIRE STATE>\s*([\s\S]*)\s*<\/JS ON EXPIRE STATE>/i)){const _0x3cea72=String(RegExp['$1']),_0x3832f4=_0x5bf148['format'](_0x3cea72);VisuMZ[_0x2560b(0x35c)][_0x2560b(0x32c)][_0x457e7e['id']]=new Function('stateId',_0x3832f4);}},DataManager['getClassIdWithName']=function(_0x228eb9){const _0x20a1d4=_0x20428a;_0x228eb9=_0x228eb9[_0x20a1d4(0x4a0)]()[_0x20a1d4(0x4be)](),this[_0x20a1d4(0x442)]=this['_classIDs']||{};if(this['_classIDs'][_0x228eb9])return this[_0x20a1d4(0x442)][_0x228eb9];for(const _0x99c22c of $dataClasses){if('gAThJ'!==_0x20a1d4(0x4ba)){const _0x4e98ba=_0x7ded33[_0x20a1d4(0x35c)][_0x20a1d4(0x219)]['call'](this);return this[_0x20a1d4(0x284)]()&&this['adjustItemWidthByShopStatus']()&&(_0x4e98ba[_0x20a1d4(0x42a)]-=this['shopStatusWidth']()),_0x4e98ba;}else{if(!_0x99c22c)continue;let _0x3c8168=_0x99c22c[_0x20a1d4(0x498)];_0x3c8168=_0x3c8168[_0x20a1d4(0x28a)](/\x1I\[(\d+)\]/gi,''),_0x3c8168=_0x3c8168[_0x20a1d4(0x28a)](/\\I\[(\d+)\]/gi,''),this['_classIDs'][_0x3c8168[_0x20a1d4(0x4a0)]()[_0x20a1d4(0x4be)]()]=_0x99c22c['id'];}}return this[_0x20a1d4(0x442)][_0x228eb9]||0x0;},DataManager['getSkillTypes']=function(_0x2391ca){const _0x1bdc29=_0x20428a;this[_0x1bdc29(0x39f)]=this[_0x1bdc29(0x39f)]||{};if(this[_0x1bdc29(0x39f)][_0x2391ca['id']])return this['_stypeIDs'][_0x2391ca['id']];this['_stypeIDs'][_0x2391ca['id']]=[_0x2391ca[_0x1bdc29(0x2e8)]];if(_0x2391ca[_0x1bdc29(0x425)][_0x1bdc29(0x3b5)](/<SKILL[ ](?:TYPE|TYPES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x1379c0=JSON['parse']('['+RegExp['$1'][_0x1bdc29(0x3b5)](/\d+/g)+']');this[_0x1bdc29(0x39f)][_0x2391ca['id']]=this[_0x1bdc29(0x39f)][_0x2391ca['id']][_0x1bdc29(0x328)](_0x1379c0);}else{if(_0x2391ca[_0x1bdc29(0x425)]['match'](/<SKILL[ ](?:TYPE|TYPES):[ ](.*)>/i)){if(_0x1bdc29(0x304)!==_0x1bdc29(0x304)){const _0x4c06a0=_0x1c1dc4[_0x1bdc29(0x425)];if(_0x4c06a0[_0x1bdc29(0x3b5)](/<JS SKILL ENABLE>\s*([\s\S]*)\s*<\/JS SKILL ENABLE>/i)){const _0x1b16a4=_0x1733c3(_0x503b3a['$1']),_0x3b7d95=_0x1bdc29(0x210)[_0x1bdc29(0x377)](_0x1b16a4);_0x18aa15['SkillsStatesCore'][_0x1bdc29(0x3ef)][_0x30aee4['id']]=new _0x39e93c(_0x1bdc29(0x24c),_0x3b7d95);}if(_0x4c06a0[_0x1bdc29(0x3b5)](/<JS SKILL VISIBLE>\s*([\s\S]*)\s*<\/JS SKILL VISIBLE>/i)){const _0x2fa569=_0x800b69(_0xd1307e['$1']),_0x3e7f71=_0x1bdc29(0x289)[_0x1bdc29(0x377)](_0x2fa569);_0x4be47e[_0x1bdc29(0x35c)]['skillVisibleJS'][_0x13d70c['id']]=new _0x3c94ed(_0x1bdc29(0x24c),_0x3e7f71);}}else{const _0x27d9a2=RegExp['$1'][_0x1bdc29(0x27f)](',');for(const _0xb50467 of _0x27d9a2){if(_0x1bdc29(0x279)!==_0x1bdc29(0x1f3)){const _0x2f36b8=DataManager[_0x1bdc29(0x20c)](_0xb50467);if(_0x2f36b8)this[_0x1bdc29(0x39f)][_0x2391ca['id']][_0x1bdc29(0x239)](_0x2f36b8);}else{const _0x5310f3=_0x7a6a1b[_0x1bdc29(0x47f)]('['+_0x337716['$1'][_0x1bdc29(0x3b5)](/\d+/g)+']');for(const _0x3147c1 of _0x5310f3){if(!this['_actor'][_0x1bdc29(0x2f7)](_0x3147c1))return!![];}return![];}}}}}return this['_stypeIDs'][_0x2391ca['id']];},DataManager['getStypeIdWithName']=function(_0x934b2e){const _0x4f4f2f=_0x20428a;_0x934b2e=_0x934b2e['toUpperCase']()[_0x4f4f2f(0x4be)](),this[_0x4f4f2f(0x39f)]=this[_0x4f4f2f(0x39f)]||{};if(this[_0x4f4f2f(0x39f)][_0x934b2e])return this[_0x4f4f2f(0x39f)][_0x934b2e];for(let _0x1e4d2a=0x1;_0x1e4d2a<0x64;_0x1e4d2a++){if(_0x4f4f2f(0x447)!==_0x4f4f2f(0x447))this[_0x4f4f2f(0x326)](_0x4a4097[_0x4f4f2f(0x3ac)]());else{if(!$dataSystem[_0x4f4f2f(0x2ec)][_0x1e4d2a])continue;let _0x22449d=$dataSystem[_0x4f4f2f(0x2ec)][_0x1e4d2a][_0x4f4f2f(0x4a0)]()[_0x4f4f2f(0x4be)]();_0x22449d=_0x22449d[_0x4f4f2f(0x28a)](/\x1I\[(\d+)\]/gi,''),_0x22449d=_0x22449d[_0x4f4f2f(0x28a)](/\\I\[(\d+)\]/gi,''),this[_0x4f4f2f(0x39f)][_0x22449d]=_0x1e4d2a;}}return this[_0x4f4f2f(0x39f)][_0x934b2e]||0x0;},DataManager[_0x20428a(0x455)]=function(_0x2e38dc){const _0x40469d=_0x20428a;_0x2e38dc=_0x2e38dc[_0x40469d(0x4a0)]()[_0x40469d(0x4be)](),this[_0x40469d(0x227)]=this[_0x40469d(0x227)]||{};if(this[_0x40469d(0x227)][_0x2e38dc])return this[_0x40469d(0x227)][_0x2e38dc];for(const _0x5ed74a of $dataSkills){if(!_0x5ed74a)continue;this[_0x40469d(0x227)][_0x5ed74a[_0x40469d(0x498)][_0x40469d(0x4a0)]()[_0x40469d(0x4be)]()]=_0x5ed74a['id'];}return this[_0x40469d(0x227)][_0x2e38dc]||0x0;},DataManager['getStateIdWithName']=function(_0x1594d3){const _0x27c109=_0x20428a;_0x1594d3=_0x1594d3[_0x27c109(0x4a0)]()[_0x27c109(0x4be)](),this[_0x27c109(0x397)]=this['_stateIDs']||{};if(this[_0x27c109(0x397)][_0x1594d3])return this[_0x27c109(0x397)][_0x1594d3];for(const _0x25d011 of $dataStates){if(!_0x25d011)continue;this['_stateIDs'][_0x25d011[_0x27c109(0x498)]['toUpperCase']()[_0x27c109(0x4be)]()]=_0x25d011['id'];}return this['_stateIDs'][_0x1594d3]||0x0;},DataManager['stateMaximumTurns']=function(_0x11e1de){const _0x4e29a0=_0x20428a;this[_0x4e29a0(0x317)]=this[_0x4e29a0(0x317)]||{};if(this[_0x4e29a0(0x317)][_0x11e1de])return this['_stateMaxTurns'][_0x11e1de];return $dataStates[_0x11e1de][_0x4e29a0(0x425)][_0x4e29a0(0x3b5)](/<MAX TURNS:[ ](\d+)>/i)?this[_0x4e29a0(0x317)][_0x11e1de]=Number(RegExp['$1']):this[_0x4e29a0(0x317)][_0x11e1de]=VisuMZ[_0x4e29a0(0x35c)]['Settings']['States'][_0x4e29a0(0x275)],this['_stateMaxTurns'][_0x11e1de];},ColorManager[_0x20428a(0x23b)]=function(_0x24189c,_0x627f6f){const _0x180ffe=_0x20428a;_0x627f6f=String(_0x627f6f),this[_0x180ffe(0x315)]=this['_colorCache']||{};if(_0x627f6f['match'](/#(.*)/i))this[_0x180ffe(0x315)][_0x24189c]=_0x180ffe(0x3cb)[_0x180ffe(0x377)](String(RegExp['$1']));else{if(_0x180ffe(0x1f7)!==_0x180ffe(0x3c0))this[_0x180ffe(0x315)][_0x24189c]=this[_0x180ffe(0x378)](Number(_0x627f6f));else for(const _0xdbe27f of _0x3e25ec){_0xdbe27f[_0x180ffe(0x3b5)](/<SET[ ](.*)[ ]BUFF TURNS:[ ](\d+)>/i);const _0xe60ea0=_0x4a3e66['indexOf'](_0x16f46f(_0x1a1b14['$1'])[_0x180ffe(0x4a0)]()),_0x465d80=_0x5773f6(_0x5386fe['$2']);_0xe60ea0>=0x0&&(_0x585bfc[_0x180ffe(0x308)](_0xe60ea0,_0x465d80),this[_0x180ffe(0x49d)](_0x2c49e5));}}return this[_0x180ffe(0x315)][_0x24189c];},ColorManager[_0x20428a(0x4af)]=function(_0x53b283){const _0x2a769e=_0x20428a;return _0x53b283=String(_0x53b283),_0x53b283[_0x2a769e(0x3b5)](/#(.*)/i)?_0x2a769e(0x3cb)['format'](String(RegExp['$1'])):this[_0x2a769e(0x378)](Number(_0x53b283));},ColorManager[_0x20428a(0x342)]=function(_0x242d25){const _0x1eadc0=_0x20428a;if(typeof _0x242d25==='number')_0x242d25=$dataStates[_0x242d25];const _0x28ded2='_stored_state-%1-color'[_0x1eadc0(0x377)](_0x242d25['id']);this[_0x1eadc0(0x315)]=this[_0x1eadc0(0x315)]||{};if(this[_0x1eadc0(0x315)][_0x28ded2])return this[_0x1eadc0(0x315)][_0x28ded2];const _0x212e64=this[_0x1eadc0(0x224)](_0x242d25);return this[_0x1eadc0(0x23b)](_0x28ded2,_0x212e64);},ColorManager[_0x20428a(0x224)]=function(_0x3a1894){const _0x5eb634=_0x20428a,_0x294a93=_0x3a1894[_0x5eb634(0x425)];if(_0x294a93[_0x5eb634(0x3b5)](/<TURN COLOR:[ ](.*)>/i))return String(RegExp['$1']);else{if(_0x294a93[_0x5eb634(0x3b5)](/<POSITIVE STATE>/i))return VisuMZ[_0x5eb634(0x35c)][_0x5eb634(0x47b)]['States'][_0x5eb634(0x20e)];else{if(_0x294a93[_0x5eb634(0x3b5)](/<NEGATIVE STATE>/i)){if(_0x5eb634(0x297)!==_0x5eb634(0x297))_0xeafd7a[_0x5eb634(0x35c)]['Settings'][_0x5eb634(0x1da)][_0x5eb634(0x4bd)]['call'](this,_0x4e83ab);else return VisuMZ[_0x5eb634(0x35c)]['Settings'][_0x5eb634(0x1da)][_0x5eb634(0x479)];}else return'xyqJu'!=='xyqJu'?_0x35374d[_0x5eb634(0x35c)][_0x5eb634(0x47b)][_0x5eb634(0x488)][_0x5eb634(0x2e4)][_0x5eb634(0x30b)](this,_0x100e2f):VisuMZ[_0x5eb634(0x35c)]['Settings'][_0x5eb634(0x1da)][_0x5eb634(0x3d6)];}}},ColorManager['buffColor']=function(){const _0x519636=_0x20428a,_0x45716e=_0x519636(0x399);this[_0x519636(0x315)]=this[_0x519636(0x315)]||{};if(this[_0x519636(0x315)][_0x45716e])return this[_0x519636(0x315)][_0x45716e];const _0x3662ab=VisuMZ['SkillsStatesCore'][_0x519636(0x47b)]['Buffs'][_0x519636(0x47d)];return this[_0x519636(0x23b)](_0x45716e,_0x3662ab);},ColorManager[_0x20428a(0x3d0)]=function(){const _0x3d9571=_0x20428a,_0x3cece1='_stored_debuffColor';this[_0x3d9571(0x315)]=this[_0x3d9571(0x315)]||{};if(this[_0x3d9571(0x315)][_0x3cece1])return this[_0x3d9571(0x315)][_0x3cece1];const _0x5347ab=VisuMZ['SkillsStatesCore'][_0x3d9571(0x47b)]['Buffs'][_0x3d9571(0x4cf)];return this[_0x3d9571(0x23b)](_0x3cece1,_0x5347ab);},VisuMZ['SkillsStatesCore'][_0x20428a(0x3d3)]=BattleManager[_0x20428a(0x346)],BattleManager[_0x20428a(0x346)]=function(){const _0x43a22d=_0x20428a;this[_0x43a22d(0x266)](),VisuMZ['SkillsStatesCore'][_0x43a22d(0x3d3)][_0x43a22d(0x30b)](this);},BattleManager[_0x20428a(0x266)]=function(){const _0x4cbb93=_0x20428a,_0x53f2c5=VisuMZ['SkillsStatesCore'][_0x4cbb93(0x47b)][_0x4cbb93(0x1da)];if(!_0x53f2c5)return;if(_0x53f2c5[_0x4cbb93(0x236)]===![])return;if(!this[_0x4cbb93(0x207)])return;this[_0x4cbb93(0x207)][_0x4cbb93(0x266)]();},Game_Battler[_0x20428a(0x299)][_0x20428a(0x266)]=function(){const _0x14480d=_0x20428a;if(BattleManager[_0x14480d(0x2c3)]!==_0x14480d(0x1fb))return;if(this[_0x14480d(0x3da)]===Graphics['frameCount'])return;this['_lastStatesActionEndFrameCount']=Graphics['frameCount'];for(const _0x40247d of this['_states']){const _0x8e0dd9=$dataStates[_0x40247d];if(!_0x8e0dd9)continue;if(_0x8e0dd9[_0x14480d(0x2d9)]!==0x1)continue;this[_0x14480d(0x3e5)][_0x40247d]>0x0&&this[_0x14480d(0x3e5)][_0x40247d]--;}this[_0x14480d(0x3b9)](0x1);},Game_BattlerBase[_0x20428a(0x299)]['updateStateTurns']=function(){const _0x337047=_0x20428a,_0x1d4ab4=VisuMZ[_0x337047(0x35c)]['Settings'][_0x337047(0x1da)];for(const _0x2fd299 of this[_0x337047(0x27e)]){if('DYLIb'!==_0x337047(0x4a3)){const _0x5a72d2=$dataStates[_0x2fd299];if(_0x1d4ab4&&_0x1d4ab4[_0x337047(0x236)]!==![]){if(_0x337047(0x344)===_0x337047(0x344)){if(_0x5a72d2&&_0x5a72d2[_0x337047(0x2d9)]===0x1)continue;}else{const _0x3fa478=this[_0x337047(0x3a2)](_0x3a3713,_0xe93727),_0x4cd71d=this[_0x337047(0x33d)](_0x3fa478,_0x4979b1,_0x3c805f,_0x50fa7e),_0x4355bc=_0x2e4e27+_0x108195-_0x4cd71d['width'];this[_0x337047(0x25e)](_0x3fa478,_0x4355bc,_0x5d0ce0,_0x1ed823),this[_0x337047(0x43d)]();}}if(this[_0x337047(0x3e5)][_0x2fd299]>0x0){if(_0x337047(0x2fe)===_0x337047(0x2fe))this[_0x337047(0x3e5)][_0x2fd299]--;else{if(!_0x2c0824[_0x337047(0x47c)](_0x49f777))return![];}}}else this['_stateMaxTurns'][_0x32e2c3]=_0x28f435[_0x337047(0x35c)][_0x337047(0x47b)][_0x337047(0x1da)][_0x337047(0x275)];}},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x241)]=Game_Action['prototype'][_0x20428a(0x433)],Game_Action[_0x20428a(0x299)]['applyItemUserEffect']=function(_0x3109e4){const _0x1c8dda=_0x20428a;VisuMZ[_0x1c8dda(0x35c)][_0x1c8dda(0x241)][_0x1c8dda(0x30b)](this,_0x3109e4),this['applySkillsStatesCoreEffects'](_0x3109e4);},Game_Action[_0x20428a(0x299)][_0x20428a(0x4a2)]=function(_0x56fb86){const _0x3b1621=_0x20428a;this[_0x3b1621(0x45f)](_0x56fb86),this[_0x3b1621(0x2a7)](_0x56fb86),this[_0x3b1621(0x388)](_0x56fb86),this[_0x3b1621(0x40c)](_0x56fb86);},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x30c)]=Game_Action[_0x20428a(0x299)]['testApply'],Game_Action[_0x20428a(0x299)][_0x20428a(0x2c2)]=function(_0x5c907e){const _0xfb5063=_0x20428a;if(this[_0xfb5063(0x30a)](_0x5c907e)){if(_0xfb5063(0x2f6)!==_0xfb5063(0x2f6)){const _0x223706=_0x32059d['parse']('['+_0x485b31['$1']['match'](/\d+/g)+']');for(const _0x2e45e5 of _0x223706){if(!_0x54fa35[_0xfb5063(0x47c)](_0x2e45e5))return!![];}return![];}else return!![];}return VisuMZ['SkillsStatesCore'][_0xfb5063(0x30c)][_0xfb5063(0x30b)](this,_0x5c907e);},Game_Action[_0x20428a(0x299)][_0x20428a(0x30a)]=function(_0x3ace05){const _0x282204=_0x20428a,_0x102194=this[_0x282204(0x298)]()[_0x282204(0x425)];if(_0x102194[_0x282204(0x3b5)](/<STATE[ ](.*)[ ]CATEGORY REMOVE:[ ](.*)>/i)){const _0x3e63da=String(RegExp['$1']);if(_0x3ace05[_0x282204(0x3d8)](_0x3e63da))return!![];}if(_0x102194[_0x282204(0x3b5)](/<SET STATE[ ](\d+)[ ]TURNS:[ ](.*)>/i)){if('mkVYZ'===_0x282204(0x3eb)){const _0x16184f=_0x1f699a[_0x282204(0x425)],_0x385646=_0x168403[_0x282204(0x35c)]['skillVisibleJS'];return _0x385646[_0x454220['id']]?_0x385646[_0x525eb5['id']][_0x282204(0x30b)](this,_0x213306):!![];}else{const _0x264a53=Number(RegExp['$1']);if(_0x3ace05[_0x282204(0x38d)](_0x264a53))return!![];}}else{if(_0x102194[_0x282204(0x3b5)](/<SET STATE[ ](.*)[ ]TURNS:[ ](.*)>/i)){if('iKmGH'===_0x282204(0x339)){const _0x5c14ef=_0x5a0fb0(_0x3afa42['$1']),_0x5abe32=_0x471b88[_0x282204(0x377)](_0x5c14ef);_0x2baac8['SkillsStatesCore'][_0x282204(0x2a1)][_0x41f4a7['id']]=new _0x291941(_0x282204(0x39c),_0x5abe32);}else{const _0x5823bc=DataManager[_0x282204(0x3c9)](RegExp['$1']);if(_0x3ace05[_0x282204(0x38d)](_0x5823bc))return!![];}}}return![];},Game_Action[_0x20428a(0x299)][_0x20428a(0x45f)]=function(_0x10abd6){const _0x3164bc=_0x20428a;if(_0x10abd6[_0x3164bc(0x26e)]()[_0x3164bc(0x45a)]<=0x0)return;const _0x2d4044=this[_0x3164bc(0x298)]()['note'];if(_0x2d4044[_0x3164bc(0x3b5)](/<STATE[ ](.*)[ ]CATEGORY REMOVE:[ ]ALL>/i)){const _0x27c8d4=String(RegExp['$1']);_0x10abd6[_0x3164bc(0x36b)](_0x27c8d4);}const _0x6ebec3=_0x2d4044[_0x3164bc(0x3b5)](/<STATE[ ](.*)[ ]CATEGORY REMOVE:[ ](\d+)>/gi);if(_0x6ebec3)for(const _0x264f51 of _0x6ebec3){if(_0x3164bc(0x216)!=='yigbc'){_0x264f51[_0x3164bc(0x3b5)](/<STATE[ ](.*)[ ]CATEGORY REMOVE:[ ](\d+)>/i);const _0x484145=String(RegExp['$1']),_0x215918=Number(RegExp['$2']);_0x10abd6[_0x3164bc(0x1e7)](_0x484145,_0x215918);}else this[_0x3164bc(0x462)][_0x4c4406]='';}},Game_Action['prototype'][_0x20428a(0x2a7)]=function(_0x2ca150){const _0x73aa1b=_0x20428a,_0x3e3ea5=this['item']()[_0x73aa1b(0x425)],_0x1763e1=_0x3e3ea5[_0x73aa1b(0x3b5)](/<SET STATE[ ](.*)[ ]TURNS:[ ](\d+)>/gi);if(_0x1763e1)for(const _0x38eddf of _0x1763e1){if(_0x73aa1b(0x3d9)===_0x73aa1b(0x3d9)){let _0x2205d7=0x0,_0x58ea77=0x0;if(_0x38eddf[_0x73aa1b(0x3b5)](/<SET STATE[ ](\d+)[ ]TURNS:[ ](\d+)>/i)){if('CJXwM'===_0x73aa1b(0x29e)){if(_0x83df54['isPlaytest']())_0x25ca67['log'](_0x377cec);}else _0x2205d7=Number(RegExp['$1']),_0x58ea77=Number(RegExp['$2']);}else _0x38eddf[_0x73aa1b(0x3b5)](/<SET STATE[ ](.*)[ ]TURNS:[ ](\d+)>/i)&&(_0x2205d7=DataManager[_0x73aa1b(0x3c9)](RegExp['$1']),_0x58ea77=Number(RegExp['$2']));_0x2ca150[_0x73aa1b(0x20a)](_0x2205d7,_0x58ea77),this[_0x73aa1b(0x49d)](_0x2ca150);}else{if(!_0x5a34c0[_0x73aa1b(0x35c)][_0x73aa1b(0x47b)][_0x73aa1b(0x1da)][_0x73aa1b(0x25d)])return;const _0x2c97a5=_0x8bf167[_0x73aa1b(0x336)],_0xa54168=_0x2849b7[_0x73aa1b(0x4c9)]/0x2,_0x2bfb8e=_0x5e1032[_0x73aa1b(0x370)]();this['changeTextColor'](_0x2bfb8e),this[_0x73aa1b(0x3af)](_0x73aa1b(0x2aa)),this[_0x73aa1b(0x387)][_0x73aa1b(0x467)]=!![],this[_0x73aa1b(0x387)][_0x73aa1b(0x3e4)]=_0xf0d4ec[_0x73aa1b(0x35c)][_0x73aa1b(0x47b)]['States']['DataFontSize'],_0x22d9c8+=_0x36495e[_0x73aa1b(0x35c)]['Settings'][_0x73aa1b(0x1da)][_0x73aa1b(0x4c0)],_0x11a8fc+=_0x4b4e84['SkillsStatesCore'][_0x73aa1b(0x47b)]['States'][_0x73aa1b(0x3bc)];const _0x1e0fa0=_0x222211(_0x14f86e[_0x73aa1b(0x211)](_0x371ced['id']));this[_0x73aa1b(0x341)](_0x1e0fa0,_0x4a70d7,_0xd6c32a,_0x2c97a5,_0x73aa1b(0x3e9)),this['contents'][_0x73aa1b(0x467)]=![],this[_0x73aa1b(0x43d)]();}}const _0x4cd0f8=_0x3e3ea5[_0x73aa1b(0x3b5)](/<STATE[ ](.*)[ ]TURNS:[ ]([\+\-]\d+)>/gi);if(_0x4cd0f8)for(const _0x24824d of _0x4cd0f8){let _0x3389b9=0x0,_0x19e516=0x0;if(_0x24824d['match'](/<STATE[ ](\d+)[ ]TURNS:[ ]([\+\-]\d+)>/i)){if(_0x73aa1b(0x285)==='JJdKi')_0x3389b9=Number(RegExp['$1']),_0x19e516=Number(RegExp['$2']);else{const _0x1685ef=_0x527cdb[_0x73aa1b(0x27a)][_0x73aa1b(0x30b)](_0x2eb619,_0xad3262);return _0x298163[_0x73aa1b(0x47a)][_0x73aa1b(0x30b)](_0x21d071,_0x55e386,_0x1685ef,_0x11cf69);}}else{if(_0x24824d['match'](/<STATE[ ](.*)[ ]TURNS:[ ]([\+\-]\d+)>/i)){if('aSAWh'!==_0x73aa1b(0x332))_0x3389b9=DataManager[_0x73aa1b(0x3c9)](RegExp['$1']),_0x19e516=Number(RegExp['$2']);else{if(!_0x5b8a71)return _0x1d0dee[_0x73aa1b(0x35c)][_0x73aa1b(0x34b)][_0x73aa1b(0x30b)](this,_0xf140bb);if(!this['checkSkillTypeMatch'](_0x4b9f99))return![];if(!this[_0x73aa1b(0x2b6)](_0x12f4e6))return![];if(!this[_0x73aa1b(0x2ee)](_0xe14161))return![];return!![];}}}_0x2ca150[_0x73aa1b(0x203)](_0x3389b9,_0x19e516),this[_0x73aa1b(0x49d)](_0x2ca150);}},Game_Action[_0x20428a(0x299)][_0x20428a(0x388)]=function(_0x4aa718){const _0x1c4249=_0x20428a,_0xcdb3f0=[_0x1c4249(0x452),'MAXMP','ATK','DEF',_0x1c4249(0x426),_0x1c4249(0x3f8),_0x1c4249(0x280),_0x1c4249(0x412)],_0x3cd426=this[_0x1c4249(0x298)]()['note'],_0x1d7576=_0x3cd426[_0x1c4249(0x3b5)](/<SET[ ](.*)[ ]BUFF TURNS:[ ](\d+)>/gi);if(_0x1d7576){if('jkCOj'===_0x1c4249(0x48e))for(const _0xa55549 of _0x1d7576){_0xa55549[_0x1c4249(0x3b5)](/<SET[ ](.*)[ ]BUFF TURNS:[ ](\d+)>/i);const _0x3e8c88=_0xcdb3f0[_0x1c4249(0x2dc)](String(RegExp['$1'])['toUpperCase']()),_0x1bffaa=Number(RegExp['$2']);_0x3e8c88>=0x0&&(_0x4aa718[_0x1c4249(0x308)](_0x3e8c88,_0x1bffaa),this[_0x1c4249(0x49d)](_0x4aa718));}else for(const _0x368bd3 of _0x2e4799){let _0x52bb02=0x0,_0x554ac1=0x0;if(_0x368bd3[_0x1c4249(0x3b5)](/<SET STATE[ ](\d+)[ ]TURNS:[ ](\d+)>/i))_0x52bb02=_0x23fa6b(_0x4f94cf['$1']),_0x554ac1=_0x104123(_0xc10939['$2']);else _0x368bd3[_0x1c4249(0x3b5)](/<SET STATE[ ](.*)[ ]TURNS:[ ](\d+)>/i)&&(_0x52bb02=_0x3808c6[_0x1c4249(0x3c9)](_0x47d689['$1']),_0x554ac1=_0x454769(_0x49b960['$2']));_0xefd81d[_0x1c4249(0x20a)](_0x52bb02,_0x554ac1),this[_0x1c4249(0x49d)](_0x13eb0b);}}const _0x3ff80a=_0x3cd426['match'](/<(.*)[ ]BUFF TURNS:[ ]([\+\-]\d+)>/gi);if(_0x3ff80a)for(const _0x3623ea of _0x1d7576){if('OdEdt'===_0x1c4249(0x2fa)){_0x3623ea[_0x1c4249(0x3b5)](/<(.*)[ ]BUFF TURNS:[ ]([\+\-]\d+)>/i);const _0x49dcb4=_0xcdb3f0['indexOf'](String(RegExp['$1'])[_0x1c4249(0x4a0)]()),_0x320464=Number(RegExp['$2']);if(_0x49dcb4>=0x0){if('hrAhY'===_0x1c4249(0x1ee)){const _0x96cc44=_0x5526f4[_0x1c4249(0x47f)]('['+_0x12ec58['$1'][_0x1c4249(0x3b5)](/\d+/g)+']');for(const _0x293237 of _0x96cc44){if(!this[_0x1c4249(0x4cc)][_0x1c4249(0x2f7)](_0x293237))return![];}return!![];}else _0x4aa718[_0x1c4249(0x28f)](_0x49dcb4,_0x320464),this[_0x1c4249(0x49d)](_0x4aa718);}}else{const _0x30d62a=_0x35933b[_0x1c4249(0x47f)]('['+_0x21e538['$1']['match'](/\d+/g)+']');for(const _0x14f263 of _0x30d62a){if(this[_0x1c4249(0x4cc)][_0x1c4249(0x355)](_0x14f263))return![];}return!![];}}},Game_Action[_0x20428a(0x299)][_0x20428a(0x40c)]=function(_0x312c16){const _0x5441a4=_0x20428a,_0x486d90=['MAXHP',_0x5441a4(0x3be),_0x5441a4(0x3c2),_0x5441a4(0x3c4),'MAT',_0x5441a4(0x3f8),_0x5441a4(0x280),_0x5441a4(0x412)],_0x43859d=this[_0x5441a4(0x298)]()[_0x5441a4(0x425)],_0x5cc21f=_0x43859d[_0x5441a4(0x3b5)](/<SET[ ](.*)[ ]DEBUFF TURNS:[ ](\d+)>/gi);if(_0x5cc21f)for(const _0x3eeafc of _0x5cc21f){if(_0x5441a4(0x475)===_0x5441a4(0x2f8))this[_0x5441a4(0x428)]=_0x3aceda[0x0];else{_0x3eeafc[_0x5441a4(0x3b5)](/<SET[ ](.*)[ ]DEBUFF TURNS:[ ](\d+)>/i);const _0xac67bd=_0x486d90[_0x5441a4(0x2dc)](String(RegExp['$1'])[_0x5441a4(0x4a0)]()),_0x55bb1b=Number(RegExp['$2']);_0xac67bd>=0x0&&(_0x312c16[_0x5441a4(0x2d5)](_0xac67bd,_0x55bb1b),this[_0x5441a4(0x49d)](_0x312c16));}}const _0x29085e=_0x43859d[_0x5441a4(0x3b5)](/<(.*)[ ]DEBUFF TURNS:[ ]([\+\-]\d+)>/gi);if(_0x29085e)for(const _0x24b101 of _0x5cc21f){if('Wqaeo'!==_0x5441a4(0x233))return this[_0x5441a4(0x428)][_0x5441a4(0x2d0)][_0x5441a4(0x30b)](this[_0x5441a4(0x292)]);else{_0x24b101[_0x5441a4(0x3b5)](/<(.*)[ ]DEBUFF TURNS:[ ]([\+\-]\d+)>/i);const _0x57b839=_0x486d90['indexOf'](String(RegExp['$1'])['toUpperCase']()),_0x35cb30=Number(RegExp['$2']);_0x57b839>=0x0&&('aOikW'===_0x5441a4(0x209)?(this[_0x5441a4(0x45e)]=_0x2a746b,this['callUpdateHelp']()):(_0x312c16['addDebuffTurns'](_0x57b839,_0x35cb30),this['makeSuccess'](_0x312c16)));}}},VisuMZ['SkillsStatesCore'][_0x20428a(0x29b)]=Game_BattlerBase['prototype'][_0x20428a(0x3ca)],Game_BattlerBase['prototype'][_0x20428a(0x3ca)]=function(){const _0x3b942b=_0x20428a;this[_0x3b942b(0x3a4)]={},this['initMembersSkillsStatesCore'](),VisuMZ[_0x3b942b(0x35c)][_0x3b942b(0x29b)][_0x3b942b(0x30b)](this);},Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x2b2)]=function(){const _0x3e6538=_0x20428a;this['_stateRetainType']='',this['_stateData']={},this[_0x3e6538(0x462)]={},this[_0x3e6538(0x2bf)]={};},Game_BattlerBase['prototype']['checkCacheKey']=function(_0x5a3ed4){const _0x118a71=_0x20428a;return this[_0x118a71(0x3a4)]=this[_0x118a71(0x3a4)]||{},this[_0x118a71(0x3a4)][_0x5a3ed4]!==undefined;},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x4b7)]=Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x2ea)],Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x2ea)]=function(){const _0x1e4de2=_0x20428a;this['_cache']={},VisuMZ[_0x1e4de2(0x35c)][_0x1e4de2(0x4b7)][_0x1e4de2(0x30b)](this);},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x327)]=Game_BattlerBase['prototype'][_0x20428a(0x2f3)],Game_BattlerBase[_0x20428a(0x299)]['eraseState']=function(_0x130dbe){const _0x1b14d7=_0x20428a;let _0x2faa22=this['isStateAffected'](_0x130dbe);VisuMZ[_0x1b14d7(0x35c)][_0x1b14d7(0x327)]['call'](this,_0x130dbe);if(_0x2faa22&&!this[_0x1b14d7(0x38d)](_0x130dbe))this['onRemoveState'](_0x130dbe);},Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x34d)]=function(_0x239410){this['clearStateData'](_0x239410),this['clearStateDisplay'](_0x239410),this['clearStateOrigin'](_0x239410);},VisuMZ['SkillsStatesCore']['Game_BattlerBase_resetStateCounts']=Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x484)],Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x484)]=function(_0xdb05eb){const _0xbbb619=_0x20428a,_0x929b63=$dataStates[_0xdb05eb],_0x431137=this[_0xbbb619(0x2ff)](_0xdb05eb),_0xb8ad51=this[_0xbbb619(0x220)](_0x929b63)[_0xbbb619(0x362)]()[_0xbbb619(0x4be)]();switch(_0xb8ad51){case'ignore':if(_0x431137<=0x0)VisuMZ[_0xbbb619(0x35c)]['Game_BattlerBase_resetStateCounts'][_0xbbb619(0x30b)](this,_0xdb05eb);break;case _0xbbb619(0x28b):VisuMZ[_0xbbb619(0x35c)][_0xbbb619(0x2f1)][_0xbbb619(0x30b)](this,_0xdb05eb);break;case _0xbbb619(0x4bb):VisuMZ[_0xbbb619(0x35c)]['Game_BattlerBase_resetStateCounts'][_0xbbb619(0x30b)](this,_0xdb05eb),this[_0xbbb619(0x3e5)][_0xdb05eb]=Math[_0xbbb619(0x4ca)](this[_0xbbb619(0x3e5)][_0xdb05eb],_0x431137);break;case _0xbbb619(0x2c9):VisuMZ[_0xbbb619(0x35c)][_0xbbb619(0x2f1)][_0xbbb619(0x30b)](this,_0xdb05eb),this[_0xbbb619(0x3e5)][_0xdb05eb]+=_0x431137;break;default:VisuMZ[_0xbbb619(0x35c)][_0xbbb619(0x2f1)][_0xbbb619(0x30b)](this,_0xdb05eb);break;}},Game_BattlerBase[_0x20428a(0x299)]['getStateReapplyRulings']=function(_0x4ef32b){const _0x58f39a=_0x20428a,_0x3ed2e9=_0x4ef32b[_0x58f39a(0x425)];if(_0x3ed2e9[_0x58f39a(0x3b5)](/<REAPPLY RULES:[ ](.*)>/i)){if(_0x58f39a(0x43c)===_0x58f39a(0x2ba)){_0x2d940b[_0x58f39a(0x3b5)](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);const _0x17c041=_0x4459f1(_0x200bd7['$1'])[_0x58f39a(0x4a0)]()[_0x58f39a(0x4be)]()[_0x58f39a(0x27f)](',');for(const _0x203a76 of _0x17c041){_0x57b5bd[_0x58f39a(0x27b)][_0x58f39a(0x239)](_0x203a76[_0x58f39a(0x4be)]());}}else return String(RegExp['$1']);}else return VisuMZ[_0x58f39a(0x35c)][_0x58f39a(0x47b)][_0x58f39a(0x1da)]['ReapplyRules'];},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x2de)]=Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x4ab)],Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x4ab)]=function(_0x1730ea,_0x579fc4){const _0x9b44fd=_0x20428a,_0x65e9af=VisuMZ[_0x9b44fd(0x35c)][_0x9b44fd(0x47b)][_0x9b44fd(0x2cb)][_0x9b44fd(0x372)],_0x50f373=this['buffTurns'](_0x1730ea);switch(_0x65e9af){case'ignore':if(_0x50f373<=0x0)this['_buffTurns'][_0x1730ea]=_0x579fc4;break;case'reset':this[_0x9b44fd(0x4c7)][_0x1730ea]=_0x579fc4;break;case _0x9b44fd(0x4bb):this[_0x9b44fd(0x4c7)][_0x1730ea]=Math[_0x9b44fd(0x4ca)](_0x50f373,_0x579fc4);break;case _0x9b44fd(0x2c9):this['_buffTurns'][_0x1730ea]+=_0x579fc4;break;default:VisuMZ[_0x9b44fd(0x35c)][_0x9b44fd(0x2de)][_0x9b44fd(0x30b)](this,_0x1730ea,_0x579fc4);break;}const _0x55a2d9=VisuMZ['SkillsStatesCore']['Settings'][_0x9b44fd(0x2cb)][_0x9b44fd(0x275)];this['_buffTurns'][_0x1730ea]=this['_buffTurns'][_0x1730ea][_0x9b44fd(0x32d)](0x0,_0x55a2d9);},Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x25a)]=function(){const _0x49a26e=_0x20428a;if(this['_cache']['groupDefeat']!==undefined)return this[_0x49a26e(0x3a4)][_0x49a26e(0x2f0)];this[_0x49a26e(0x3a4)][_0x49a26e(0x2f0)]=![];const _0x5b8d86=this['states']();for(const _0x1497b2 of _0x5b8d86){if('ddsOZ'===_0x49a26e(0x2bc)){if(!_0x1497b2)continue;if(_0x1497b2[_0x49a26e(0x425)][_0x49a26e(0x3b5)](/<GROUP DEFEAT>/i)){this[_0x49a26e(0x3a4)][_0x49a26e(0x2f0)]=!![];break;}}else{if(_0x1e1ca4&&this[_0x49a26e(0x476)](_0x165bd4))this['eraseState'](_0x48c53e['id']);}}return this[_0x49a26e(0x3a4)][_0x49a26e(0x2f0)];},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x3c8)]=Game_BattlerBase['prototype'][_0x20428a(0x49f)],Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x49f)]=function(){const _0x474bfc=_0x20428a;this[_0x474bfc(0x331)]()!==''?this['clearStatesWithStateRetain']():(VisuMZ['SkillsStatesCore'][_0x474bfc(0x3c8)][_0x474bfc(0x30b)](this),this[_0x474bfc(0x2b2)]());},Game_Actor[_0x20428a(0x299)][_0x20428a(0x49f)]=function(){const _0x26de3d=_0x20428a;this[_0x26de3d(0x24d)]=this[_0x26de3d(0x24d)]||{},Game_Battler[_0x26de3d(0x299)]['clearStates'][_0x26de3d(0x30b)](this);},Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x486)]=function(){const _0x1e744c=_0x20428a,_0x5c8658=this[_0x1e744c(0x26e)]();for(const _0xf5bf0d of _0x5c8658){if(_0x1e744c(0x477)===_0x1e744c(0x34f)){if(typeof _0x4b3748!==_0x1e744c(0x36d))_0x4fe8de=_0x5d0890['id'];const _0x1fc579=this['stateData'](_0x11306b);return _0x1fc579[_0xfd6653];}else{if(_0xf5bf0d&&this[_0x1e744c(0x476)](_0xf5bf0d))this[_0x1e744c(0x2f3)](_0xf5bf0d['id']);}}this['_cache']={};},Game_BattlerBase['prototype'][_0x20428a(0x476)]=function(_0x2709c4){const _0x3a26aa=_0x20428a,_0x492147=this[_0x3a26aa(0x331)]();if(_0x492147!==''){if(_0x3a26aa(0x35d)!=='BiAuu'){const _0x49dc64=_0x2709c4['note'];if(_0x492147===_0x3a26aa(0x1d9)&&_0x49dc64[_0x3a26aa(0x3b5)](/<NO DEATH CLEAR>/i))return![];if(_0x492147==='recover\x20all'&&_0x49dc64[_0x3a26aa(0x3b5)](/<NO RECOVER ALL CLEAR>/i))return![];}else _0x207415[_0x3a26aa(0x35c)][_0x3a26aa(0x2f2)][_0x3a26aa(0x30b)](this,_0x1acc12),_0x244a26[_0x3a26aa(0x35c)][_0x3a26aa(0x487)](_0x1b0d4f),_0x32df27['SkillsStatesCore'][_0x3a26aa(0x1f1)](_0x52d9e9);}return this[_0x3a26aa(0x38d)](_0x2709c4['id']);},Game_BattlerBase['prototype'][_0x20428a(0x331)]=function(){const _0x3d1a1d=_0x20428a;return this[_0x3d1a1d(0x3ae)];},Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x3ec)]=function(_0x4b66fb){this['_stateRetainType']=_0x4b66fb;},Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x3ed)]=function(){const _0x2ef72e=_0x20428a;this[_0x2ef72e(0x3ae)]='';},VisuMZ['SkillsStatesCore']['Game_BattlerBase_die']=Game_BattlerBase['prototype'][_0x20428a(0x40b)],Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x40b)]=function(){const _0x3b3ab5=_0x20428a;this[_0x3b3ab5(0x3ec)](_0x3b3ab5(0x1d9)),VisuMZ[_0x3b3ab5(0x35c)]['Game_BattlerBase_die'][_0x3b3ab5(0x30b)](this),this['clearStateRetainType']();},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x1e5)]=Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x259)],Game_BattlerBase['prototype']['recoverAll']=function(){const _0x3171c8=_0x20428a;this[_0x3171c8(0x3ec)]('recover\x20all'),VisuMZ['SkillsStatesCore'][_0x3171c8(0x1e5)][_0x3171c8(0x30b)](this),this[_0x3171c8(0x3ed)]();},Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x21b)]=function(_0x28a566){const _0x247e08=_0x20428a;for(settings of VisuMZ[_0x247e08(0x35c)]['Settings'][_0x247e08(0x267)]){if('qnPta'==='qnPta'){const _0x2475ed=settings[_0x247e08(0x27a)][_0x247e08(0x30b)](this,_0x28a566);if(!settings[_0x247e08(0x4a5)][_0x247e08(0x30b)](this,_0x28a566,_0x2475ed))return![];}else this[_0x247e08(0x448)](_0xbe7809)&&(_0x100287+=this['buffTurns'](_0x5d3c6b),this[_0x247e08(0x20a)](_0x57a416,_0x4b5bf9));}return!![];},Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x1ed)]=function(_0x855633){const _0xf19f4a=_0x20428a;for(settings of VisuMZ['SkillsStatesCore'][_0xf19f4a(0x47b)][_0xf19f4a(0x267)]){const _0x340ecd=settings[_0xf19f4a(0x27a)]['call'](this,_0x855633);settings[_0xf19f4a(0x22d)][_0xf19f4a(0x30b)](this,_0x855633,_0x340ecd);}},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x261)]=Game_BattlerBase[_0x20428a(0x299)]['meetsSkillConditions'],Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x459)]=function(_0x30e237){const _0x43f2a4=_0x20428a;if(!_0x30e237)return![];if(!VisuMZ[_0x43f2a4(0x35c)][_0x43f2a4(0x261)][_0x43f2a4(0x30b)](this,_0x30e237))return![];if(!this[_0x43f2a4(0x2ab)](_0x30e237))return![];if(!this[_0x43f2a4(0x2ef)](_0x30e237))return![];if(!this[_0x43f2a4(0x2e2)](_0x30e237))return![];return!![];},Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x2ab)]=function(_0x57ccd4){if(!this['checkSkillConditionsSwitchNotetags'](_0x57ccd4))return![];return!![];},Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x1ff)]=function(_0x22e3ca){const _0x3b138f=_0x20428a,_0x24c72f=_0x22e3ca[_0x3b138f(0x425)];if(_0x24c72f['match'](/<ENABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x15cb24=JSON[_0x3b138f(0x47f)]('['+RegExp['$1'][_0x3b138f(0x3b5)](/\d+/g)+']');for(const _0x4fc2a6 of _0x15cb24){if(!$gameSwitches[_0x3b138f(0x47c)](_0x4fc2a6))return![];}return!![];}if(_0x24c72f['match'](/<ENABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x3b138f(0x35e)!==_0x3b138f(0x3e1)){const _0x45d858=JSON[_0x3b138f(0x47f)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x325872 of _0x45d858){if(_0x3b138f(0x235)!==_0x3b138f(0x235))_0x49914a[_0x11c6d7][_0x171452][_0x3b138f(0x30b)](this,_0x2d1a10);else{if(!$gameSwitches[_0x3b138f(0x47c)](_0x325872))return![];}}return!![];}else this['recalculateSlipDamageJS'](),_0x2e30e9[_0x3b138f(0x35c)][_0x3b138f(0x43a)][_0x3b138f(0x30b)](this),this[_0x3b138f(0x43f)](),this['regenerateAllSkillsStatesCore']();}if(_0x24c72f[_0x3b138f(0x3b5)](/<ENABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x3b138f(0x2a5)!==_0x3b138f(0x2b1)){const _0x3cc3c7=JSON[_0x3b138f(0x47f)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x2a183b of _0x3cc3c7){if($gameSwitches['value'](_0x2a183b))return!![];}return![];}else _0x5cb24b[_0x3b138f(0x27b)][_0x3b138f(0x239)]('POSITIVE');}if(_0x24c72f[_0x3b138f(0x3b5)](/<DISABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x536bf3=JSON[_0x3b138f(0x47f)]('['+RegExp['$1'][_0x3b138f(0x3b5)](/\d+/g)+']');for(const _0x3b2933 of _0x536bf3){if(_0x3b138f(0x3ab)!==_0x3b138f(0x2d4)){if(!$gameSwitches['value'](_0x3b2933))return!![];}else{let _0x470194=_0x77e723[_0x3b138f(0x2ec)][_0x968bc4];if(_0x470194[_0x3b138f(0x3b5)](/\\I\[(\d+)\]/i))return _0x470194;if(this[_0x3b138f(0x3bd)]()==='text')return _0x470194;const _0x5ddf55=_0x22b1ad[_0x3b138f(0x35c)]['Settings']['Skills'],_0x2cc6df=_0x5aa0b6[_0x3b138f(0x49e)]['includes'](_0xb6a8ce),_0x1b87e1=_0x2cc6df?_0x5ddf55[_0x3b138f(0x303)]:_0x5ddf55['IconStypeNorm'];return _0x3b138f(0x38b)[_0x3b138f(0x377)](_0x1b87e1,_0x470194);}}return![];}if(_0x24c72f[_0x3b138f(0x3b5)](/<DISABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x3b138f(0x21f)==='xvTiY')this[_0x3b138f(0x3ae)]=_0x5bc242;else{const _0x5d98e2=JSON[_0x3b138f(0x47f)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x67705f of _0x5d98e2){if(!$gameSwitches[_0x3b138f(0x47c)](_0x67705f))return!![];}return![];}}if(_0x24c72f[_0x3b138f(0x3b5)](/<DISABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x3b138f(0x451)===_0x3b138f(0x451)){const _0x45f1eb=JSON[_0x3b138f(0x47f)]('['+RegExp['$1'][_0x3b138f(0x3b5)](/\d+/g)+']');for(const _0x553edc of _0x45f1eb){if($gameSwitches[_0x3b138f(0x47c)](_0x553edc))return![];}return!![];}else{const _0x4c303f=_0x534fae[_0x3b138f(0x35c)][_0x3b138f(0x3f0)];if(_0x4c303f[_0x175d6b['id']]&&!_0x4c303f[_0xb60aa8['id']][_0x3b138f(0x30b)](this,_0x5336e7))return![];return!![];}}return!![];},Game_BattlerBase['prototype'][_0x20428a(0x2ef)]=function(_0x3fa7a9){const _0x1a8986=_0x20428a,_0x53d0a4=_0x3fa7a9['note'],_0x20f1aa=VisuMZ[_0x1a8986(0x35c)]['skillEnableJS'];return _0x20f1aa[_0x3fa7a9['id']]?_0x20f1aa[_0x3fa7a9['id']][_0x1a8986(0x30b)](this,_0x3fa7a9):!![];},Game_BattlerBase[_0x20428a(0x299)]['meetsSkillConditionsGlobalJS']=function(_0x378234){const _0x4d1f1c=_0x20428a;return VisuMZ[_0x4d1f1c(0x35c)]['Settings']['Skills']['SkillConditionJS'][_0x4d1f1c(0x30b)](this,_0x378234);},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x28d)]=Game_BattlerBase[_0x20428a(0x299)]['skillMpCost'],Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x2b5)]=function(_0x5d36ab){const _0x179bde=_0x20428a;for(settings of VisuMZ['SkillsStatesCore']['Settings'][_0x179bde(0x267)]){if(settings['Name']['toUpperCase']()==='MP'){if(_0x179bde(0x229)==='kmoFw')return settings[_0x179bde(0x27a)][_0x179bde(0x30b)](this,_0x5d36ab);else{if(!this[_0x179bde(0x4cc)])return;const _0x45c8cb=this[_0x179bde(0x4cc)][_0x179bde(0x2ec)]();for(const _0x447411 of _0x45c8cb){const _0x48631e=this['makeCommandName'](_0x447411);this[_0x179bde(0x3c5)](_0x48631e,_0x179bde(0x24c),!![],_0x447411);}}}}return VisuMZ['SkillsStatesCore'][_0x179bde(0x28d)]['call'](this,_0x5d36ab);},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x3aa)]=Game_BattlerBase[_0x20428a(0x299)]['skillTpCost'],Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x429)]=function(_0x54b017){const _0x4fd059=_0x20428a;for(settings of VisuMZ[_0x4fd059(0x35c)][_0x4fd059(0x47b)]['Costs']){if(_0x4fd059(0x2da)===_0x4fd059(0x39a))_0x1b08c9[_0x4fd059(0x35c)][_0x4fd059(0x45c)][_0x4fd059(0x30b)](this,_0x33cec3),this[_0x4fd059(0x305)]();else{if(settings[_0x4fd059(0x204)]['toUpperCase']()==='TP')return settings[_0x4fd059(0x27a)][_0x4fd059(0x30b)](this,_0x54b017);}}return VisuMZ[_0x4fd059(0x35c)][_0x4fd059(0x3aa)][_0x4fd059(0x30b)](this,_0x54b017);},Game_BattlerBase['prototype'][_0x20428a(0x20d)]=function(_0x531cad){const _0xdc6e65=_0x20428a;if(typeof _0x531cad===_0xdc6e65(0x36d))_0x531cad=$dataStates[_0x531cad];return this[_0xdc6e65(0x26e)]()[_0xdc6e65(0x325)](_0x531cad);},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x39e)]=Game_BattlerBase['prototype'][_0x20428a(0x26e)],Game_BattlerBase['prototype'][_0x20428a(0x26e)]=function(){const _0x5dfdf5=_0x20428a;let _0x5073be=VisuMZ[_0x5dfdf5(0x35c)]['Game_BattlerBase_states'][_0x5dfdf5(0x30b)](this);if(this[_0x5dfdf5(0x411)])return _0x5073be;return this[_0x5dfdf5(0x411)]=!![],this[_0x5dfdf5(0x2f9)](_0x5073be),this[_0x5dfdf5(0x411)]=undefined,_0x5073be;},Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x2f9)]=function(_0xd14808){const _0x1314be=_0x20428a,_0x1d7351=this[_0x1314be(0x296)]();for(state of _0x1d7351){if('ObnPM'===_0x1314be(0x358)){if(!state)continue;if(!this[_0x1314be(0x48a)](state)&&_0xd14808['includes'](state))continue;_0xd14808[_0x1314be(0x239)](state);}else{const _0x2b72cb=this[_0x1314be(0x3f1)](_0x294e8d);_0x5b3791[_0x1314be(0x35c)][_0x1314be(0x3e0)][_0x1314be(0x30b)](this,_0x37a137);if(_0x2b72cb&&this[_0x1314be(0x20d)](_0x1c58d2[_0x10f6c5])){this['onAddState'](_0x2253fc);;}}}_0x1d7351[_0x1314be(0x45a)]>0x0&&_0xd14808[_0x1314be(0x4b1)]((_0x667640,_0xd63388)=>{const _0x256fd3=_0x1314be;if('LnhKD'!==_0x256fd3(0x1f9)){this[_0x256fd3(0x356)](_0x5c6162)[_0x256fd3(0x3b5)](/\\I\[(\d+)\]/i);const _0x2beeae=_0x25ae2a(_0x1899d2['$1'])||0x0,_0x3f24e8=this[_0x256fd3(0x458)](_0x338206),_0x5f1a78=_0x3f24e8['x']+_0x49f8fc[_0x256fd3(0x202)]((_0x3f24e8[_0x256fd3(0x42a)]-_0xc307f7[_0x256fd3(0x336)])/0x2),_0xf376c2=_0x3f24e8['y']+(_0x3f24e8[_0x256fd3(0x300)]-_0x1ef497[_0x256fd3(0x4c9)])/0x2;this['drawIcon'](_0x2beeae,_0x5f1a78,_0xf376c2);}else{const _0x58269=_0x667640[_0x256fd3(0x31a)],_0x3e6149=_0xd63388[_0x256fd3(0x31a)];if(_0x58269!==_0x3e6149)return _0x3e6149-_0x58269;return _0x667640-_0xd63388;}});},Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x48a)]=function(_0x377cd0){const _0x571e95=_0x20428a;return _0x377cd0[_0x571e95(0x425)][_0x571e95(0x3b5)](/<PASSIVE STACKABLE>/i);},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x3ad)]=Game_BattlerBase['prototype'][_0x20428a(0x496)],Game_BattlerBase['prototype']['traitsSet']=function(_0xca7edf){const _0x19f6ff=_0x20428a;this[_0x19f6ff(0x316)]=!![];let _0x1515c5=VisuMZ[_0x19f6ff(0x35c)]['Game_BattlerBase_traitsSet'][_0x19f6ff(0x30b)](this,_0xca7edf);return this['_checkingTraitsSetSkillsStatesCore']=undefined,_0x1515c5;},Game_BattlerBase[_0x20428a(0x299)]['convertPassiveStates']=function(){const _0x59fb82=_0x20428a;let _0x51ab5b=[];this[_0x59fb82(0x443)]=this['_passiveStateResults']||{};for(;;){if('iGdiY'===_0x59fb82(0x223))return this['_costSettings'][_0x59fb82(0x250)][_0x59fb82(0x30b)](this[_0x59fb82(0x292)]);else{_0x51ab5b=[];let _0x1e297d=!![];for(const _0x228efb of this[_0x59fb82(0x3a4)][_0x59fb82(0x296)]){const _0x4dcc95=$dataStates[_0x228efb];if(!_0x4dcc95)continue;let _0x4a609c=this['meetsPassiveStateConditions'](_0x4dcc95);this[_0x59fb82(0x443)][_0x228efb]!==_0x4a609c&&(_0x1e297d=![],this[_0x59fb82(0x443)][_0x228efb]=_0x4a609c);if(!_0x4a609c)continue;_0x51ab5b[_0x59fb82(0x239)](_0x4dcc95);}if(_0x1e297d)break;else{if(_0x59fb82(0x434)===_0x59fb82(0x383)){if(_0x2edb8b[_0x59fb82(0x418)]&&_0x16f6c8[_0x59fb82(0x225)]!==_0x12a7ff)return _0x3eeb75[_0x59fb82(0x225)];else{if(this[_0x59fb82(0x245)]())return this[_0x59fb82(0x473)]()['match'](/LOWER/i);else _0x38f5f1[_0x59fb82(0x299)]['isRightInputMode'][_0x59fb82(0x30b)](this);}}else{if(!this[_0x59fb82(0x316)])this[_0x59fb82(0x2ea)]();this['createPassiveStatesCache']();}}}}return _0x51ab5b;},Game_BattlerBase[_0x20428a(0x299)]['meetsPassiveStateConditions']=function(_0x223737){const _0x25440d=_0x20428a;if(!this[_0x25440d(0x44a)](_0x223737))return![];if(!this[_0x25440d(0x3a1)](_0x223737))return![];if(!this[_0x25440d(0x400)](_0x223737))return![];if(!this[_0x25440d(0x1f8)](_0x223737))return![];return!![];},Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x44a)]=function(_0x44d8af){return!![];},Game_Actor[_0x20428a(0x299)]['meetsPassiveStateConditionClasses']=function(_0x3eac78){const _0x1eec49=_0x20428a,_0xef3ff4=_0x3eac78[_0x1eec49(0x425)];if(_0xef3ff4[_0x1eec49(0x3b5)](/<PASSIVE CONDITION[ ](?:CLASS|CLASSES):[ ](.*)>/i)){if(_0x1eec49(0x38f)!==_0x1eec49(0x4ad)){const _0x36e847=String(RegExp['$1'])[_0x1eec49(0x27f)](',')['map'](_0x17fe36=>_0x17fe36[_0x1eec49(0x4be)]()),_0x3306d2=VisuMZ['SkillsStatesCore'][_0x1eec49(0x4c4)](_0x36e847);return _0x3306d2[_0x1eec49(0x325)](this[_0x1eec49(0x410)]());}else this['_stateMaxTurns'][_0x2047db]=_0xc72fb(_0x1b66a2['$1']);}if(_0xef3ff4[_0x1eec49(0x3b5)](/<PASSIVE CONDITION[ ](?:MULTICLASS|MULTICLASSES):[ ](.*)>/i)){const _0x5ad2a0=String(RegExp['$1'])[_0x1eec49(0x27f)](',')['map'](_0x575715=>_0x575715[_0x1eec49(0x4be)]()),_0x2d5655=VisuMZ['SkillsStatesCore']['ParseClassIDs'](_0x5ad2a0);let _0x1d9723=[this[_0x1eec49(0x410)]()];return Imported[_0x1eec49(0x4a4)]&&this[_0x1eec49(0x1dd)]&&(_0x1d9723=this['multiclasses']()),_0x2d5655[_0x1eec49(0x221)](_0x31bd9e=>_0x1d9723['includes'](_0x31bd9e))[_0x1eec49(0x45a)]>0x0;}return Game_BattlerBase['prototype'][_0x1eec49(0x44a)][_0x1eec49(0x30b)](this,_0x3eac78);},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x4c4)]=function(_0x235135){const _0x36925d=_0x20428a,_0x2f8d9d=[];for(let _0x5c3cc4 of _0x235135){_0x5c3cc4=(String(_0x5c3cc4)||'')['trim']();const _0x13aa55=/^\d+$/[_0x36925d(0x4b5)](_0x5c3cc4);_0x13aa55?_0x36925d(0x394)===_0x36925d(0x43e)?(_0x1b5e2c['SkillsStatesCore'][_0x36925d(0x241)][_0x36925d(0x30b)](this,_0x457d72),this[_0x36925d(0x4a2)](_0x30c3a6)):_0x2f8d9d[_0x36925d(0x239)](Number(_0x5c3cc4)):_0x2f8d9d[_0x36925d(0x239)](DataManager[_0x36925d(0x445)](_0x5c3cc4));}return _0x2f8d9d[_0x36925d(0x450)](_0x195c58=>$dataClasses[Number(_0x195c58)])[_0x36925d(0x3b0)](null);},Game_BattlerBase[_0x20428a(0x299)]['meetsPassiveStateConditionSwitches']=function(_0xa47dea){const _0x19cd0e=_0x20428a,_0x390a25=_0xa47dea[_0x19cd0e(0x425)];if(_0x390a25['match'](/<PASSIVE CONDITION[ ](?:SWITCH|SWITCHES)[ ]ON:[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x1fbb47=JSON[_0x19cd0e(0x47f)]('['+RegExp['$1'][_0x19cd0e(0x3b5)](/\d+/g)+']');for(const _0x3e1f39 of _0x1fbb47){if(!$gameSwitches[_0x19cd0e(0x47c)](_0x3e1f39))return![];}return!![];}if(_0x390a25[_0x19cd0e(0x3b5)](/<PASSIVE CONDITION ALL[ ](?:SWITCH|SWITCHES)[ ]ON:[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x19cd0e(0x2df)===_0x19cd0e(0x2df)){const _0x44b656=JSON[_0x19cd0e(0x47f)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x575003 of _0x44b656){if(!$gameSwitches[_0x19cd0e(0x47c)](_0x575003))return![];}return!![];}else{const _0xa5129b=_0x305644[_0x19cd0e(0x425)];if(_0x4aa111===_0x19cd0e(0x1d9)&&_0xa5129b[_0x19cd0e(0x3b5)](/<NO DEATH CLEAR>/i))return![];if(_0x16625a===_0x19cd0e(0x31d)&&_0xa5129b[_0x19cd0e(0x3b5)](/<NO RECOVER ALL CLEAR>/i))return![];}}if(_0x390a25[_0x19cd0e(0x3b5)](/<PASSIVE CONDITION ANY[ ](?:SWITCH|SWITCHES)[ ]ON:[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x294cef=JSON[_0x19cd0e(0x47f)]('['+RegExp['$1'][_0x19cd0e(0x3b5)](/\d+/g)+']');for(const _0x3e8ac1 of _0x294cef){if('mOzZR'!==_0x19cd0e(0x27c))_0x128bf6[_0x19cd0e(0x299)][_0x19cd0e(0x367)]['call'](this,this[_0x19cd0e(0x4cc)],_0x414ce1,_0x56a145,_0x351574,_0x312918);else{if($gameSwitches[_0x19cd0e(0x47c)](_0x3e8ac1))return!![];}}return![];}if(_0x390a25[_0x19cd0e(0x3b5)](/<PASSIVE CONDITION[ ](?:SWITCH|SWITCHES)[ ]OFF:[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x1cf8bb=JSON[_0x19cd0e(0x47f)]('['+RegExp['$1'][_0x19cd0e(0x3b5)](/\d+/g)+']');for(const _0x2ee329 of _0x1cf8bb){if(_0x19cd0e(0x1f4)===_0x19cd0e(0x1f4)){if(!$gameSwitches[_0x19cd0e(0x47c)](_0x2ee329))return!![];}else{const _0x5201e8=_0xda00c[_0x19cd0e(0x47f)]('['+_0x59a92b['$1']['match'](/\d+/g)+']');for(const _0x1a9591 of _0x5201e8){if(_0x1ded20[_0x19cd0e(0x47c)](_0x1a9591))return!![];}return![];}}return![];}if(_0x390a25[_0x19cd0e(0x3b5)](/<PASSIVE CONDITION ALL[ ](?:SWITCH|SWITCHES)[ ]OFF:[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x57b4ad=JSON[_0x19cd0e(0x47f)]('['+RegExp['$1'][_0x19cd0e(0x3b5)](/\d+/g)+']');for(const _0x145ca7 of _0x57b4ad){if(!$gameSwitches[_0x19cd0e(0x47c)](_0x145ca7))return!![];}return![];}if(_0x390a25[_0x19cd0e(0x3b5)](/<PASSIVE CONDITION ANY[ ](?:SWITCH|SWITCHES)[ ]OFF:[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x25ff85=JSON[_0x19cd0e(0x47f)]('['+RegExp['$1'][_0x19cd0e(0x3b5)](/\d+/g)+']');for(const _0x133eea of _0x25ff85){if($gameSwitches['value'](_0x133eea))return![];}return!![];}return!![];},Game_BattlerBase['prototype'][_0x20428a(0x400)]=function(_0x26134b){const _0x1e64ff=_0x20428a,_0x4dfca9=VisuMZ[_0x1e64ff(0x35c)][_0x1e64ff(0x3f0)];if(_0x4dfca9[_0x26134b['id']]&&!_0x4dfca9[_0x26134b['id']][_0x1e64ff(0x30b)](this,_0x26134b))return![];return!![];},Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x1f8)]=function(_0x1ffc25){const _0x24f940=_0x20428a;return VisuMZ[_0x24f940(0x35c)][_0x24f940(0x47b)][_0x24f940(0x2e6)][_0x24f940(0x283)][_0x24f940(0x30b)](this,_0x1ffc25);},Game_BattlerBase['prototype'][_0x20428a(0x296)]=function(){const _0x21eb7c=_0x20428a;if(this[_0x21eb7c(0x4b6)]('passiveStates'))return this['convertPassiveStates']();if(this['_checkingVisuMzPassiveStateObjects'])return[];return this[_0x21eb7c(0x379)]=!![],this['createPassiveStatesCache'](),this[_0x21eb7c(0x379)]=undefined,this[_0x21eb7c(0x31b)]();},Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x2ad)]=function(){const _0x54a45a=_0x20428a;this[_0x54a45a(0x379)]=!![],this['_cache'][_0x54a45a(0x296)]=[],this[_0x54a45a(0x22b)](),this['addPassiveStatesByNotetag'](),this['addPassiveStatesByPluginParameters'](),this['_checkingVisuMzPassiveStateObjects']=undefined;},Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x22b)]=function(){const _0x435a6b=_0x20428a;if(Imported[_0x435a6b(0x2d7)])this[_0x435a6b(0x3c6)]();},Game_BattlerBase['prototype'][_0x20428a(0x20b)]=function(){return[];},Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x4b0)]=function(){const _0x2a6297=_0x20428a,_0x4852d8=this[_0x2a6297(0x20b)]();for(const _0x410030 of _0x4852d8){if(!_0x410030)continue;const _0x5722c2=_0x410030['note']['match'](/<PASSIVE (?:STATE|STATES):[ ](.*)>/gi);if(_0x5722c2){if(_0x2a6297(0x376)===_0x2a6297(0x2ce))return!![];else for(const _0x383d72 of _0x5722c2){_0x383d72['match'](/<PASSIVE (?:STATE|STATES):[ ](.*)>/i);const _0x405292=RegExp['$1'];if(_0x405292[_0x2a6297(0x3b5)](/(\d+(?:\s*,\s*\d+)*)/i)){const _0x17b8dd=JSON[_0x2a6297(0x47f)]('['+RegExp['$1']['match'](/\d+/g)+']');this['_cache'][_0x2a6297(0x296)]=this[_0x2a6297(0x3a4)][_0x2a6297(0x296)][_0x2a6297(0x328)](_0x17b8dd);}else{if(_0x2a6297(0x363)===_0x2a6297(0x363)){const _0x497e03=_0x405292['split'](',');for(const _0x12bcbd of _0x497e03){const _0x2682e5=DataManager[_0x2a6297(0x3c9)](_0x12bcbd);if(_0x2682e5)this[_0x2a6297(0x3a4)][_0x2a6297(0x296)]['push'](_0x2682e5);}}else _0x2eec68=_0x1dfdad[_0x2a6297(0x480)](_0x6c90ee);}}}}},Game_BattlerBase[_0x20428a(0x299)]['addPassiveStatesByPluginParameters']=function(){const _0xe17084=_0x20428a,_0x408828=VisuMZ[_0xe17084(0x35c)][_0xe17084(0x47b)][_0xe17084(0x2e6)][_0xe17084(0x268)];this['_cache'][_0xe17084(0x296)]=this[_0xe17084(0x3a4)][_0xe17084(0x296)]['concat'](_0x408828);},Game_BattlerBase[_0x20428a(0x299)]['stateTurns']=function(_0x1995f4){if(typeof _0x1995f4!=='number')_0x1995f4=_0x1995f4['id'];return this['_stateTurns'][_0x1995f4]||0x0;},Game_BattlerBase['prototype'][_0x20428a(0x20a)]=function(_0x32db68,_0x15face){const _0xf51598=_0x20428a;if(typeof _0x32db68!==_0xf51598(0x36d))_0x32db68=_0x32db68['id'];if(this[_0xf51598(0x38d)](_0x32db68)){const _0x3ab268=DataManager[_0xf51598(0x33b)](_0x32db68);this['_stateTurns'][_0x32db68]=_0x15face['clamp'](0x0,_0x3ab268);if(this[_0xf51598(0x3e5)][_0x32db68]<=0x0)this['removeState'](_0x32db68);}},Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x203)]=function(_0x2670ed,_0x37176b){const _0x3d30ca=_0x20428a;if(typeof _0x2670ed!==_0x3d30ca(0x36d))_0x2670ed=_0x2670ed['id'];this[_0x3d30ca(0x38d)](_0x2670ed)&&(_0x37176b+=this[_0x3d30ca(0x2ff)](_0x2670ed),this[_0x3d30ca(0x20a)](_0x2670ed,_0x37176b));},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x262)]=Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x2b3)],Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x2b3)]=function(_0x261c53){const _0x440da6=_0x20428a,_0x122e90=this[_0x440da6(0x347)][_0x261c53];VisuMZ['SkillsStatesCore'][_0x440da6(0x262)][_0x440da6(0x30b)](this,_0x261c53);if(_0x122e90>0x0)this[_0x440da6(0x1e6)](_0x261c53);if(_0x122e90<0x0)this[_0x440da6(0x3ce)](_0x261c53);},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x21c)]=Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x456)],Game_BattlerBase[_0x20428a(0x299)]['increaseBuff']=function(_0x230e24){const _0x4e96a3=_0x20428a;VisuMZ[_0x4e96a3(0x35c)]['Game_BattlerBase_increaseBuff'][_0x4e96a3(0x30b)](this,_0x230e24);if(!this[_0x4e96a3(0x286)](_0x230e24))this[_0x4e96a3(0x2b3)](_0x230e24);},VisuMZ['SkillsStatesCore'][_0x20428a(0x2c8)]=Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x2cc)],Game_BattlerBase['prototype'][_0x20428a(0x2cc)]=function(_0x24d321){const _0x536737=_0x20428a;VisuMZ[_0x536737(0x35c)][_0x536737(0x2c8)][_0x536737(0x30b)](this,_0x24d321);if(!this[_0x536737(0x286)](_0x24d321))this[_0x536737(0x2b3)](_0x24d321);},Game_BattlerBase[_0x20428a(0x299)]['onEraseBuff']=function(_0x23cafd){},Game_BattlerBase['prototype'][_0x20428a(0x3ce)]=function(_0x413062){},Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x2c5)]=function(_0x170118){const _0xa2c0be=_0x20428a;return this[_0xa2c0be(0x347)][_0x170118]===VisuMZ[_0xa2c0be(0x35c)]['Settings'][_0xa2c0be(0x2cb)][_0xa2c0be(0x334)];},Game_BattlerBase[_0x20428a(0x299)]['isMaxDebuffAffected']=function(_0x22d2cf){const _0x3ea227=_0x20428a;return this[_0x3ea227(0x347)][_0x22d2cf]===-VisuMZ['SkillsStatesCore'][_0x3ea227(0x47b)][_0x3ea227(0x2cb)]['StackDebuffMax'];},VisuMZ['SkillsStatesCore']['Game_BattlerBase_buffIconIndex']=Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x24a)],Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x24a)]=function(_0x2fe29a,_0x5d9cdf){const _0x229227=_0x20428a;return _0x2fe29a=_0x2fe29a[_0x229227(0x32d)](-0x2,0x2),VisuMZ[_0x229227(0x35c)]['Game_BattlerBase_buffIconIndex'][_0x229227(0x30b)](this,_0x2fe29a,_0x5d9cdf);},Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x409)]=function(_0x8fc33c){const _0x1ef48e=_0x20428a,_0x21beba=this['_buffs'][_0x8fc33c];return VisuMZ[_0x1ef48e(0x35c)][_0x1ef48e(0x47b)][_0x1ef48e(0x2cb)][_0x1ef48e(0x3d5)][_0x1ef48e(0x30b)](this,_0x8fc33c,_0x21beba);},Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x391)]=function(_0x5cc4e8){const _0x47a1a0=_0x20428a;return this[_0x47a1a0(0x4c7)][_0x5cc4e8]||0x0;},Game_BattlerBase['prototype'][_0x20428a(0x3b2)]=function(_0x720f4a){const _0x14cd7e=_0x20428a;return this[_0x14cd7e(0x391)](_0x720f4a);},Game_BattlerBase['prototype'][_0x20428a(0x308)]=function(_0x11315b,_0x124fc){const _0x195a63=_0x20428a;if(this['isBuffAffected'](_0x11315b)){if(_0x195a63(0x323)!==_0x195a63(0x323))return _0x1b1eb9['_currentActor'];else{const _0x5b4151=VisuMZ[_0x195a63(0x35c)][_0x195a63(0x47b)]['Buffs'][_0x195a63(0x275)];this[_0x195a63(0x4c7)][_0x11315b]=_0x124fc[_0x195a63(0x32d)](0x0,_0x5b4151);}}},Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x28f)]=function(_0x79176c,_0x61191e){const _0x3686a9=_0x20428a;this[_0x3686a9(0x461)](_0x79176c)&&(_0x61191e+=this[_0x3686a9(0x391)](stateId),this[_0x3686a9(0x20a)](_0x79176c,_0x61191e));},Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x2d5)]=function(_0x5e08b0,_0x1726c3){const _0x4a6a19=_0x20428a;if(this[_0x4a6a19(0x448)](_0x5e08b0)){if('bdcfz'!==_0x4a6a19(0x32b)){const _0x4c12c6=VisuMZ[_0x4a6a19(0x35c)][_0x4a6a19(0x47b)][_0x4a6a19(0x2cb)][_0x4a6a19(0x275)];this['_buffTurns'][_0x5e08b0]=_0x1726c3[_0x4a6a19(0x32d)](0x0,_0x4c12c6);}else return this[_0x4a6a19(0x3f9)]();}},Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x29f)]=function(_0x2aef26,_0x4c3975){const _0x49617b=_0x20428a;this['isDebuffAffected'](_0x2aef26)&&(_0x4c3975+=this[_0x49617b(0x391)](stateId),this[_0x49617b(0x20a)](_0x2aef26,_0x4c3975));},Game_BattlerBase[_0x20428a(0x299)]['stateData']=function(_0x11c72f){const _0x153c83=_0x20428a;if(typeof _0x11c72f!==_0x153c83(0x36d))_0x11c72f=_0x11c72f['id'];return this[_0x153c83(0x23c)]=this[_0x153c83(0x23c)]||{},this[_0x153c83(0x23c)][_0x11c72f]=this[_0x153c83(0x23c)][_0x11c72f]||{},this[_0x153c83(0x23c)][_0x11c72f];},Game_BattlerBase['prototype'][_0x20428a(0x276)]=function(_0x3d537e,_0xed2ceb){const _0x4cfcea=_0x20428a;if(typeof _0x3d537e!==_0x4cfcea(0x36d))_0x3d537e=_0x3d537e['id'];const _0x3aa891=this[_0x4cfcea(0x321)](_0x3d537e);return _0x3aa891[_0xed2ceb];},Game_BattlerBase['prototype']['setStateData']=function(_0x3c41b3,_0x1efd16,_0x1e652f){const _0x11f0a7=_0x20428a;if(typeof _0x3c41b3!==_0x11f0a7(0x36d))_0x3c41b3=_0x3c41b3['id'];const _0x143095=this[_0x11f0a7(0x321)](_0x3c41b3);_0x143095[_0x1efd16]=_0x1e652f;},Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x2e9)]=function(_0x3db552){const _0x1b2af0=_0x20428a;if(typeof _0x3db552!==_0x1b2af0(0x36d))_0x3db552=_0x3db552['id'];this[_0x1b2af0(0x23c)]=this[_0x1b2af0(0x23c)]||{},this[_0x1b2af0(0x23c)][_0x3db552]={};},Game_BattlerBase['prototype'][_0x20428a(0x211)]=function(_0x1b8b32){const _0x303cfd=_0x20428a;if(typeof _0x1b8b32!==_0x303cfd(0x36d))_0x1b8b32=_0x1b8b32['id'];return this[_0x303cfd(0x462)]=this[_0x303cfd(0x462)]||{},this[_0x303cfd(0x462)][_0x1b8b32]===undefined&&(this[_0x303cfd(0x462)][_0x1b8b32]=''),this['_stateDisplay'][_0x1b8b32];},Game_BattlerBase[_0x20428a(0x299)]['setStateDisplay']=function(_0x4b742c,_0x4387d2){const _0x53ec35=_0x20428a;if(typeof _0x4b742c!=='number')_0x4b742c=_0x4b742c['id'];this['_stateDisplay']=this[_0x53ec35(0x462)]||{},this[_0x53ec35(0x462)][_0x4b742c]=_0x4387d2;},Game_BattlerBase['prototype'][_0x20428a(0x25c)]=function(_0x44988f){const _0x5a14d4=_0x20428a;if(typeof _0x44988f!=='number')_0x44988f=_0x44988f['id'];this[_0x5a14d4(0x462)]=this[_0x5a14d4(0x462)]||{},this[_0x5a14d4(0x462)][_0x44988f]='';},Game_BattlerBase['prototype']['getStateOrigin']=function(_0x12f51a){const _0x7c3d81=_0x20428a;if(typeof _0x12f51a!==_0x7c3d81(0x36d))_0x12f51a=_0x12f51a['id'];this[_0x7c3d81(0x2bf)]=this[_0x7c3d81(0x2bf)]||{},this[_0x7c3d81(0x2bf)][_0x12f51a]=this[_0x7c3d81(0x2bf)][_0x12f51a]||_0x7c3d81(0x457);const _0x2d6653=this['_stateOrigin'][_0x12f51a];return this[_0x7c3d81(0x269)](_0x2d6653);},Game_BattlerBase['prototype'][_0x20428a(0x330)]=function(_0x3822fd,_0x44c018){const _0x805307=_0x20428a;this[_0x805307(0x2bf)]=this[_0x805307(0x2bf)]||{};const _0x8313bf=_0x44c018?this['convertTargetToStateOriginKey'](_0x44c018):this[_0x805307(0x27d)]();this[_0x805307(0x2bf)][_0x3822fd]=_0x8313bf;},Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x4a8)]=function(_0x18b1b9){const _0x113e9c=_0x20428a;this[_0x113e9c(0x2bf)]=this[_0x113e9c(0x2bf)]||{},delete this[_0x113e9c(0x2bf)][_0x18b1b9];},Game_BattlerBase['prototype']['getCurrentStateOriginKey']=function(){const _0x150018=_0x20428a,_0x3f374b=this['getCurrentStateActiveUser']();return this[_0x150018(0x441)](_0x3f374b);},Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x242)]=function(){const _0x21065f=_0x20428a;if($gameParty[_0x21065f(0x4c6)]()){if(BattleManager[_0x21065f(0x207)])return BattleManager['_subject'];else{if(BattleManager[_0x21065f(0x2ac)])return BattleManager[_0x21065f(0x2ac)];}}else{const _0x3b058b=SceneManager['_scene'];if(![Scene_Map,Scene_Item][_0x21065f(0x325)](_0x3b058b[_0x21065f(0x2d8)])){if(_0x21065f(0x491)!=='PLFIi'){const _0x4c9141=_0x12a149[_0x21065f(0x47f)]('['+_0x24c8a6['$1'][_0x21065f(0x3b5)](/\d+/g)+']');for(const _0x35f874 of _0x4c9141){if(!_0x368a26['value'](_0x35f874))return![];}return!![];}else return $gameParty[_0x21065f(0x3f2)]();}}return this;},Game_BattlerBase[_0x20428a(0x299)]['convertTargetToStateOriginKey']=function(_0x46c70f){const _0x2613ba=_0x20428a;if(!_0x46c70f)return'user';if(_0x46c70f[_0x2613ba(0x21e)]())return _0x2613ba(0x2bb)['format'](_0x46c70f[_0x2613ba(0x380)]());else{const _0x3f4e17='<enemy-%1>'[_0x2613ba(0x377)](_0x46c70f[_0x2613ba(0x4c5)]()),_0x48636c=_0x2613ba(0x2e5)['format'](_0x46c70f[_0x2613ba(0x1fd)]()),_0x42cbe3=_0x2613ba(0x421)[_0x2613ba(0x377)]($gameTroop['getCurrentTroopUniqueID']());return _0x2613ba(0x3e3)[_0x2613ba(0x377)](_0x3f4e17,_0x48636c,_0x42cbe3);}return _0x2613ba(0x457);},Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x269)]=function(_0x2374fc){const _0x3453cd=_0x20428a;if(_0x2374fc===_0x3453cd(0x457)){if('bjLOG'!==_0x3453cd(0x396))return this;else{const _0x56839d=_0x56509['note'];if(_0x56839d['match'](/<JS PASSIVE CONDITION>\s*([\s\S]*)\s*<\/JS PASSIVE CONDITION>/i)){const _0x5aff21=_0x4350bc(_0x89d8d7['$1']),_0x4b0e2a=_0x3453cd(0x48c)[_0x3453cd(0x377)](_0x5aff21);_0xbcaf3d[_0x3453cd(0x35c)][_0x3453cd(0x3f0)][_0x3c7bf8['id']]=new _0x5c759c(_0x3453cd(0x32e),_0x4b0e2a);}}}else{if(_0x2374fc[_0x3453cd(0x3b5)](/<actor-(\d+)>/i)){if(_0x3453cd(0x41e)===_0x3453cd(0x41e))return $gameActors[_0x3453cd(0x23d)](Number(RegExp['$1']));else{if(_0x4735f2[_0x3453cd(0x47c)](_0x109deb))return!![];}}else{if($gameParty[_0x3453cd(0x4c6)]()&&_0x2374fc[_0x3453cd(0x3b5)](/<troop-(\d+)>/i)){const _0x5d8c7d=Number(RegExp['$1']);if(_0x5d8c7d===$gameTroop[_0x3453cd(0x222)]()){if(_0x2374fc[_0x3453cd(0x3b5)](/<member-(\d+)>/i))return $gameTroop[_0x3453cd(0x353)]()[Number(RegExp['$1'])];}}if(_0x2374fc['match'](/<enemy-(\d+)>/i)){if(_0x3453cd(0x1e1)!==_0x3453cd(0x2a2))return new Game_Enemy(Number(RegExp['$1']),-0x1f4,-0x1f4);else _0x9305fc=_0x22cf28['getStateIdWithName'](_0x2d0f28['$1']),_0x54f40a=_0x1d2891(_0x48db6c['$2']);}}}return this;},VisuMZ['SkillsStatesCore'][_0x20428a(0x3e0)]=Game_Battler[_0x20428a(0x299)]['addState'],Game_Battler[_0x20428a(0x299)][_0x20428a(0x436)]=function(_0x19c48f){const _0x24a00a=_0x20428a,_0x5b4b4d=this['isStateAddable'](_0x19c48f);VisuMZ['SkillsStatesCore'][_0x24a00a(0x3e0)][_0x24a00a(0x30b)](this,_0x19c48f);if(_0x5b4b4d&&this['hasState']($dataStates[_0x19c48f])){if('LgeMk'===_0x24a00a(0x48b))_0x12904c[_0x24a00a(0x35c)][_0x24a00a(0x47b)][_0x24a00a(0x2cb)][_0x24a00a(0x490)][_0x24a00a(0x30b)](this,_0x518399,_0x55da1f);else{this[_0x24a00a(0x213)](_0x19c48f);;}}},VisuMZ['SkillsStatesCore'][_0x20428a(0x431)]=Game_Battler[_0x20428a(0x299)]['isStateAddable'],Game_Battler[_0x20428a(0x299)][_0x20428a(0x3f1)]=function(_0x4d2598){const _0x28c548=_0x20428a,_0x2324f5=$dataStates[_0x4d2598];if(_0x2324f5&&_0x2324f5[_0x28c548(0x425)][_0x28c548(0x3b5)](/<NO DEATH CLEAR>/i))return!this[_0x28c548(0x320)](_0x4d2598)&&!this[_0x28c548(0x430)](_0x4d2598)&&!this['_result'][_0x28c548(0x40e)](_0x4d2598);return VisuMZ['SkillsStatesCore'][_0x28c548(0x431)][_0x28c548(0x30b)](this,_0x4d2598);},Game_Battler[_0x20428a(0x299)][_0x20428a(0x213)]=function(_0x27c18a){const _0xd599ed=_0x20428a;this['setStateOrigin'](_0x27c18a),this[_0xd599ed(0x2a3)](_0x27c18a),this['onAddStateCustomJS'](_0x27c18a),this[_0xd599ed(0x42c)](_0x27c18a);},Game_Battler[_0x20428a(0x299)][_0x20428a(0x34d)]=function(_0x190c9a){const _0x50b35c=_0x20428a;Game_BattlerBase[_0x50b35c(0x299)]['onRemoveState']['call'](this,_0x190c9a),this['onEraseStateCustomJS'](_0x190c9a),this[_0x50b35c(0x2ca)](_0x190c9a);},Game_Battler[_0x20428a(0x299)][_0x20428a(0x3b9)]=function(_0x275f8a){const _0x1d4df5=_0x20428a;for(const _0x5d0283 of this[_0x1d4df5(0x26e)]()){this[_0x1d4df5(0x38c)](_0x5d0283['id'])&&_0x5d0283[_0x1d4df5(0x2d9)]===_0x275f8a&&(this['removeState'](_0x5d0283['id']),this[_0x1d4df5(0x385)](_0x5d0283['id']),this[_0x1d4df5(0x26c)](_0x5d0283['id']));}},Game_Battler[_0x20428a(0x299)]['onExpireState']=function(_0x16fe8a){const _0x18af00=_0x20428a;this[_0x18af00(0x354)](_0x16fe8a);},Game_Battler[_0x20428a(0x299)][_0x20428a(0x247)]=function(_0x6d9bfe){const _0x5209a1=_0x20428a;if(this[_0x5209a1(0x43b)]||this[_0x5209a1(0x2c1)])return;const _0x25811d=VisuMZ[_0x5209a1(0x35c)][_0x5209a1(0x3ba)];if(_0x25811d[_0x6d9bfe])_0x25811d[_0x6d9bfe]['call'](this,_0x6d9bfe);},Game_Battler[_0x20428a(0x299)][_0x20428a(0x3cd)]=function(_0x5b1385){const _0x35d133=_0x20428a;if(this[_0x35d133(0x43b)]||this['_tempBattler'])return;const _0x2fc340=VisuMZ[_0x35d133(0x35c)][_0x35d133(0x2a1)];if(_0x2fc340[_0x5b1385])_0x2fc340[_0x5b1385][_0x35d133(0x30b)](this,_0x5b1385);},Game_Battler[_0x20428a(0x299)][_0x20428a(0x354)]=function(_0x11930f){const _0x14098e=_0x20428a;if(this[_0x14098e(0x43b)]||this['_tempBattler'])return;const _0x13117d=VisuMZ[_0x14098e(0x35c)][_0x14098e(0x32c)];if(_0x13117d[_0x11930f])_0x13117d[_0x11930f]['call'](this,_0x11930f);},Game_Battler[_0x20428a(0x299)][_0x20428a(0x42c)]=function(_0x1ec5c3){const _0x529808=_0x20428a;if(this[_0x529808(0x43b)]||this['_tempBattler'])return;try{if(_0x529808(0x3dc)===_0x529808(0x3dc))VisuMZ[_0x529808(0x35c)][_0x529808(0x47b)]['States'][_0x529808(0x493)][_0x529808(0x30b)](this,_0x1ec5c3);else{const _0x4d424d=this[_0x529808(0x347)][_0x2562d5];this[_0x529808(0x351)](_0x49b738);if(_0x4d424d>0x0)this[_0x529808(0x386)](_0x946463);if(_0x4d424d<0x0)this[_0x529808(0x2c4)](_0x4bedca);}}catch(_0x19f821){if(_0x529808(0x2fd)===_0x529808(0x3a5))return'';else{if($gameTemp['isPlaytest']())console[_0x529808(0x474)](_0x19f821);}}},Game_Battler['prototype'][_0x20428a(0x2ca)]=function(_0x18dbd5){const _0x1e8e3e=_0x20428a;if(this[_0x1e8e3e(0x43b)]||this['_tempBattler'])return;try{if(_0x1e8e3e(0x40a)===_0x1e8e3e(0x40a))VisuMZ['SkillsStatesCore']['Settings'][_0x1e8e3e(0x1da)][_0x1e8e3e(0x272)][_0x1e8e3e(0x30b)](this,_0x18dbd5);else return this[_0x1e8e3e(0x416)]();}catch(_0x1ecca0){if($gameTemp[_0x1e8e3e(0x381)]())console[_0x1e8e3e(0x474)](_0x1ecca0);}},Game_Battler[_0x20428a(0x299)][_0x20428a(0x26c)]=function(_0x3912bb){const _0x39d420=_0x20428a;if(this[_0x39d420(0x43b)]||this[_0x39d420(0x2c1)])return;try{VisuMZ['SkillsStatesCore'][_0x39d420(0x47b)]['States'][_0x39d420(0x4bd)]['call'](this,_0x3912bb);}catch(_0x8519af){if('unnvh'!==_0x39d420(0x41f)){if(!this[_0x39d420(0x44a)](_0x344c17))return![];if(!this[_0x39d420(0x3a1)](_0x26d1ae))return![];if(!this[_0x39d420(0x400)](_0x2411dd))return![];if(!this['meetsPassiveStateGlobalConditionJS'](_0x2f08a4))return![];return!![];}else{if($gameTemp[_0x39d420(0x381)]())console[_0x39d420(0x474)](_0x8519af);}}},Game_Battler[_0x20428a(0x299)][_0x20428a(0x471)]=function(_0x3d6cef){const _0xf1a19c=_0x20428a;return _0x3d6cef=_0x3d6cef[_0xf1a19c(0x4a0)]()[_0xf1a19c(0x4be)](),this['states']()['filter'](_0x232b35=>_0x232b35['categories'][_0xf1a19c(0x325)](_0x3d6cef));},Game_Battler[_0x20428a(0x299)][_0x20428a(0x1e7)]=function(_0x480c7e,_0x228098){const _0x4a5a1a=_0x20428a;_0x480c7e=_0x480c7e[_0x4a5a1a(0x4a0)]()[_0x4a5a1a(0x4be)](),_0x228098=_0x228098||0x0;const _0x49a4e3=this[_0x4a5a1a(0x471)](_0x480c7e),_0x2c10cc=[];for(const _0x5d618c of _0x49a4e3){if('wIBEo'===_0x4a5a1a(0x338)){if(_0x5f1978[_0x4a5a1a(0x2d7)])this[_0x4a5a1a(0x3c6)]();}else{if(!_0x5d618c)continue;if(_0x228098<=0x0)return;_0x2c10cc[_0x4a5a1a(0x239)](_0x5d618c['id']),this[_0x4a5a1a(0x3f6)][_0x4a5a1a(0x495)]=!![],_0x228098--;}}while(_0x2c10cc[_0x4a5a1a(0x45a)]>0x0){this['removeState'](_0x2c10cc[_0x4a5a1a(0x3ac)]());}},Game_Battler[_0x20428a(0x299)][_0x20428a(0x36b)]=function(_0x5ef8c5){const _0x1adda7=_0x20428a;_0x5ef8c5=_0x5ef8c5[_0x1adda7(0x4a0)]()[_0x1adda7(0x4be)]();const _0x1fa2eb=this['statesByCategory'](_0x5ef8c5),_0x16af90=[];for(const _0x3f930c of _0x1fa2eb){if(!_0x3f930c)continue;_0x16af90[_0x1adda7(0x239)](_0x3f930c['id']),this[_0x1adda7(0x3f6)]['success']=!![];}while(_0x16af90[_0x1adda7(0x45a)]>0x0){if('iQxJy'!==_0x1adda7(0x26d))for(let _0x14114c=0x0;_0x14114c<this['buffLength']();_0x14114c++){if(this[_0x1adda7(0x46a)](_0x14114c)){const _0x3739a7=this['_buffs'][_0x14114c];this[_0x1adda7(0x351)](_0x14114c);if(_0x3739a7>0x0)this[_0x1adda7(0x386)](_0x14114c);if(_0x3739a7<0x0)this[_0x1adda7(0x2c4)](_0x14114c);}}else this[_0x1adda7(0x326)](_0x16af90[_0x1adda7(0x3ac)]());}},Game_Battler[_0x20428a(0x299)][_0x20428a(0x3d8)]=function(_0x422819){const _0x1b285f=_0x20428a;return this[_0x1b285f(0x2c7)](_0x422819)>0x0;},Game_Battler['prototype'][_0x20428a(0x3e8)]=function(_0x33b7e0){const _0x3cb542=_0x20428a;return this[_0x3cb542(0x3dd)](_0x33b7e0)>0x0;},Game_Battler[_0x20428a(0x299)][_0x20428a(0x2c7)]=function(_0x2b441f){const _0x2b3276=_0x20428a,_0x3d7f1b=this['statesByCategory'](_0x2b441f)[_0x2b3276(0x221)](_0x1ea7c7=>this[_0x2b3276(0x38d)](_0x1ea7c7['id']));return _0x3d7f1b[_0x2b3276(0x45a)];},Game_Battler['prototype'][_0x20428a(0x3dd)]=function(_0x4d8ba9){const _0xff2c9b=_0x20428a,_0x176440=this[_0xff2c9b(0x471)](_0x4d8ba9);return _0x176440[_0xff2c9b(0x45a)];},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x454)]=Game_Battler[_0x20428a(0x299)][_0x20428a(0x472)],Game_Battler[_0x20428a(0x299)][_0x20428a(0x472)]=function(_0x2747c8,_0x3be822){const _0x1ec645=_0x20428a;VisuMZ[_0x1ec645(0x35c)]['Game_Battler_addBuff']['call'](this,_0x2747c8,_0x3be822),this[_0x1ec645(0x461)](_0x2747c8)&&this[_0x1ec645(0x314)](_0x2747c8,_0x3be822);},Game_Battler[_0x20428a(0x299)][_0x20428a(0x1e4)]=function(_0x1f111e){},VisuMZ['SkillsStatesCore'][_0x20428a(0x2b9)]=Game_Battler['prototype'][_0x20428a(0x3de)],Game_Battler[_0x20428a(0x299)]['addDebuff']=function(_0x98e558,_0x55afbf){const _0xac5641=_0x20428a;VisuMZ[_0xac5641(0x35c)][_0xac5641(0x2b9)]['call'](this,_0x98e558,_0x55afbf),this[_0xac5641(0x448)](_0x98e558)&&this['onAddDebuff'](_0x98e558,_0x55afbf);},Game_Battler[_0x20428a(0x299)][_0x20428a(0x390)]=function(){const _0xac092e=_0x20428a;for(let _0xc2422=0x0;_0xc2422<this[_0xac092e(0x35f)]();_0xc2422++){if(this[_0xac092e(0x46a)](_0xc2422)){const _0x5f2ae9=this[_0xac092e(0x347)][_0xc2422];this['removeBuff'](_0xc2422);if(_0x5f2ae9>0x0)this[_0xac092e(0x386)](_0xc2422);if(_0x5f2ae9<0x0)this[_0xac092e(0x2c4)](_0xc2422);}}},Game_Battler[_0x20428a(0x299)][_0x20428a(0x314)]=function(_0x684811,_0x1b8080){const _0x55bd0d=_0x20428a;this[_0x55bd0d(0x1db)](_0x684811,_0x1b8080);},Game_Battler[_0x20428a(0x299)][_0x20428a(0x41d)]=function(_0x2bc92e,_0x3e170c){const _0x56ac0c=_0x20428a;this[_0x56ac0c(0x3b3)](_0x2bc92e,_0x3e170c);},Game_Battler['prototype']['onEraseBuff']=function(_0x47604c){const _0x45e2e4=_0x20428a;Game_BattlerBase[_0x45e2e4(0x299)]['onEraseBuff'][_0x45e2e4(0x30b)](this,_0x47604c),this[_0x45e2e4(0x288)](_0x47604c);},Game_Battler[_0x20428a(0x299)][_0x20428a(0x3ce)]=function(_0x4493b3){const _0x46d839=_0x20428a;Game_BattlerBase['prototype'][_0x46d839(0x3ce)][_0x46d839(0x30b)](this,_0x4493b3),this[_0x46d839(0x340)](_0x4493b3);},Game_Battler[_0x20428a(0x299)][_0x20428a(0x386)]=function(_0x516618){this['onExpireBuffGlobalJS'](_0x516618);},Game_Battler[_0x20428a(0x299)][_0x20428a(0x2c4)]=function(_0x4fac1e){this['onExpireDebuffGlobalJS'](_0x4fac1e);},Game_Battler[_0x20428a(0x299)][_0x20428a(0x1db)]=function(_0x5cf4ed,_0x138054){const _0x52a8ae=_0x20428a;VisuMZ[_0x52a8ae(0x35c)][_0x52a8ae(0x47b)][_0x52a8ae(0x2cb)][_0x52a8ae(0x29d)]['call'](this,_0x5cf4ed,_0x138054);},Game_Battler[_0x20428a(0x299)][_0x20428a(0x3b3)]=function(_0x57bff8,_0x430477){const _0x556774=_0x20428a;VisuMZ[_0x556774(0x35c)]['Settings'][_0x556774(0x2cb)][_0x556774(0x490)][_0x556774(0x30b)](this,_0x57bff8,_0x430477);},Game_BattlerBase['prototype'][_0x20428a(0x288)]=function(_0x39d9e0){const _0x1dfc3a=_0x20428a;VisuMZ[_0x1dfc3a(0x35c)][_0x1dfc3a(0x47b)][_0x1dfc3a(0x2cb)][_0x1dfc3a(0x413)]['call'](this,_0x39d9e0);},Game_BattlerBase[_0x20428a(0x299)][_0x20428a(0x340)]=function(_0x53bbd0){const _0x331ca0=_0x20428a;VisuMZ[_0x331ca0(0x35c)]['Settings'][_0x331ca0(0x2cb)][_0x331ca0(0x273)][_0x331ca0(0x30b)](this,_0x53bbd0);},Game_Battler[_0x20428a(0x299)][_0x20428a(0x417)]=function(_0xbd014a){const _0x42a9b3=_0x20428a;VisuMZ[_0x42a9b3(0x35c)][_0x42a9b3(0x47b)][_0x42a9b3(0x2cb)][_0x42a9b3(0x205)][_0x42a9b3(0x30b)](this,_0xbd014a);},Game_Battler[_0x20428a(0x299)]['onExpireDebuffGlobalJS']=function(_0xbb0622){const _0x2306df=_0x20428a;VisuMZ[_0x2306df(0x35c)][_0x2306df(0x47b)]['Buffs'][_0x2306df(0x408)][_0x2306df(0x30b)](this,_0xbb0622);},Game_Battler[_0x20428a(0x299)][_0x20428a(0x2a3)]=function(_0x61718c){const _0x25e9d9=_0x20428a,_0x385ca7=VisuMZ[_0x25e9d9(0x35c)],_0x175f61=['stateHpSlipDamageJS',_0x25e9d9(0x22e),'stateMpSlipDamageJS','stateMpSlipHealJS',_0x25e9d9(0x349),_0x25e9d9(0x4c2)];for(const _0x135450 of _0x175f61){if(_0x385ca7[_0x135450][_0x61718c]){if(_0x25e9d9(0x464)!==_0x25e9d9(0x464))return this['_stateRetainType'];else _0x385ca7[_0x135450][_0x61718c]['call'](this,_0x61718c);}}},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x43a)]=Game_Battler[_0x20428a(0x299)]['regenerateAll'],Game_Battler[_0x20428a(0x299)][_0x20428a(0x46f)]=function(){const _0x356cd7=_0x20428a;this[_0x356cd7(0x44d)](),VisuMZ[_0x356cd7(0x35c)][_0x356cd7(0x43a)][_0x356cd7(0x30b)](this),this[_0x356cd7(0x43f)](),this[_0x356cd7(0x212)]();},Game_Battler['prototype'][_0x20428a(0x43f)]=function(){const _0x4c36a1=_0x20428a;for(const _0x1e5f48 of this[_0x4c36a1(0x296)]()){if(!_0x1e5f48)continue;this[_0x4c36a1(0x2a3)](_0x1e5f48['id']);}},Game_Battler[_0x20428a(0x299)][_0x20428a(0x44d)]=function(){const _0x38e482=_0x20428a;for(const _0x86b7b8 of this[_0x38e482(0x26e)]()){if(!_0x86b7b8)continue;_0x86b7b8[_0x38e482(0x425)][_0x38e482(0x3b5)](/<JS SLIP REFRESH>/i)&&this[_0x38e482(0x2a3)](_0x86b7b8['id']);}},Game_Battler[_0x20428a(0x299)][_0x20428a(0x212)]=function(){const _0x383415=_0x20428a;if(!this[_0x383415(0x3a3)]())return;const _0x1b7403=this[_0x383415(0x26e)]();for(const _0x9ceb53 of _0x1b7403){if(!_0x9ceb53)continue;this['onRegenerateCustomStateDamageOverTime'](_0x9ceb53);}},Game_Battler[_0x20428a(0x299)]['onRegenerateCustomStateDamageOverTime']=function(_0x22c6e6){const _0x5831d8=_0x20428a,_0x468002=this[_0x5831d8(0x276)](_0x22c6e6['id'],_0x5831d8(0x3bf))||0x0,_0x5cae2f=-this[_0x5831d8(0x3b8)](),_0x182dd2=Math[_0x5831d8(0x4ca)](_0x468002,_0x5cae2f);if(_0x182dd2!==0x0)this[_0x5831d8(0x2e3)](_0x182dd2);const _0x282528=this['getStateData'](_0x22c6e6['id'],'slipMp')||0x0;if(_0x282528!==0x0)this['gainMp'](_0x282528);const _0x1c1361=this[_0x5831d8(0x276)](_0x22c6e6['id'],_0x5831d8(0x369))||0x0;if(_0x1c1361!==0x0)this[_0x5831d8(0x3fd)](_0x1c1361);},VisuMZ['SkillsStatesCore']['Game_Actor_skillTypes']=Game_Actor[_0x20428a(0x299)]['skillTypes'],Game_Actor[_0x20428a(0x299)][_0x20428a(0x2ec)]=function(){const _0x4be06c=_0x20428a,_0x2b109d=VisuMZ[_0x4be06c(0x35c)][_0x4be06c(0x3a6)][_0x4be06c(0x30b)](this),_0x3d7e4a=VisuMZ[_0x4be06c(0x35c)][_0x4be06c(0x47b)]['Skills'];let _0x5e97b2=_0x3d7e4a['HiddenSkillTypes'];return $gameParty[_0x4be06c(0x4c6)]()&&(_0x5e97b2=_0x5e97b2[_0x4be06c(0x328)](_0x3d7e4a[_0x4be06c(0x335)])),_0x2b109d[_0x4be06c(0x221)](_0x4062ee=>!_0x5e97b2[_0x4be06c(0x325)](_0x4062ee));},Game_Actor['prototype'][_0x20428a(0x405)]=function(){const _0x1f5735=_0x20428a;return this[_0x1f5735(0x23f)]()[_0x1f5735(0x221)](_0xd23f44=>this['isSkillUsableForAutoBattle'](_0xd23f44));},Game_Actor['prototype'][_0x20428a(0x2d6)]=function(_0x34c792){const _0x4fbbf7=_0x20428a;if(!this[_0x4fbbf7(0x228)](_0x34c792))return![];const _0xa6387=this[_0x4fbbf7(0x2ec)](),_0x1997b5=DataManager[_0x4fbbf7(0x32a)](_0x34c792),_0x4b6d10=_0xa6387[_0x4fbbf7(0x221)](_0x4bd440=>_0x1997b5[_0x4fbbf7(0x325)](_0x4bd440));return _0x4b6d10[_0x4fbbf7(0x45a)]>0x0;},Game_Actor[_0x20428a(0x299)][_0x20428a(0x20b)]=function(){const _0x2b2fcb=_0x20428a;let _0x224b5a=[this[_0x2b2fcb(0x23d)](),this[_0x2b2fcb(0x410)]()];_0x224b5a=_0x224b5a[_0x2b2fcb(0x328)](this[_0x2b2fcb(0x4c1)]()['filter'](_0x5f2a75=>_0x5f2a75));for(const _0xbd036e of this[_0x2b2fcb(0x231)]){const _0x1eae1f=$dataSkills[_0xbd036e];if(_0x1eae1f)_0x224b5a[_0x2b2fcb(0x239)](_0x1eae1f);}return _0x224b5a;},Game_Actor[_0x20428a(0x299)][_0x20428a(0x44e)]=function(){const _0x555871=_0x20428a;Game_Battler[_0x555871(0x299)]['addPassiveStatesByPluginParameters'][_0x555871(0x30b)](this);const _0x317793=VisuMZ[_0x555871(0x35c)][_0x555871(0x47b)][_0x555871(0x2e6)]['Actor'];this[_0x555871(0x3a4)][_0x555871(0x296)]=this[_0x555871(0x3a4)]['passiveStates'][_0x555871(0x328)](_0x317793);},VisuMZ['SkillsStatesCore']['Game_Actor_learnSkill']=Game_Actor[_0x20428a(0x299)]['learnSkill'],Game_Actor[_0x20428a(0x299)][_0x20428a(0x234)]=function(_0x19375e){const _0x54ebb5=_0x20428a;VisuMZ[_0x54ebb5(0x35c)][_0x54ebb5(0x47e)][_0x54ebb5(0x30b)](this,_0x19375e),this[_0x54ebb5(0x3a4)]={};},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x407)]=Game_Actor[_0x20428a(0x299)]['forgetSkill'],Game_Actor[_0x20428a(0x299)][_0x20428a(0x322)]=function(_0x256bf1){const _0x18728d=_0x20428a;VisuMZ[_0x18728d(0x35c)][_0x18728d(0x407)][_0x18728d(0x30b)](this,_0x256bf1),this[_0x18728d(0x3a4)]={};},Game_Enemy[_0x20428a(0x299)][_0x20428a(0x20b)]=function(){const _0x550771=_0x20428a;let _0x3d2180=[this['enemy']()];return _0x3d2180[_0x550771(0x328)](this[_0x550771(0x23f)]());},Game_Enemy[_0x20428a(0x299)][_0x20428a(0x44e)]=function(){const _0xb439f1=_0x20428a;Game_Battler['prototype'][_0xb439f1(0x44e)][_0xb439f1(0x30b)](this);const _0x178d5c=VisuMZ[_0xb439f1(0x35c)]['Settings'][_0xb439f1(0x2e6)][_0xb439f1(0x419)];this[_0xb439f1(0x3a4)][_0xb439f1(0x296)]=this['_cache'][_0xb439f1(0x296)][_0xb439f1(0x328)](_0x178d5c);},Game_Enemy[_0x20428a(0x299)][_0x20428a(0x23f)]=function(){const _0x241c4f=_0x20428a,_0xf8e158=[];for(const _0x4d9fec of this[_0x241c4f(0x3f7)]()[_0x241c4f(0x361)]){const _0x2f4eb5=$dataSkills[_0x4d9fec[_0x241c4f(0x1e9)]];if(_0x2f4eb5&&!_0xf8e158['includes'](_0x2f4eb5))_0xf8e158[_0x241c4f(0x239)](_0x2f4eb5);}return _0xf8e158;},Game_Enemy[_0x20428a(0x299)]['meetsStateCondition']=function(_0x4f1fd9){const _0x1ba2cc=_0x20428a;return this[_0x1ba2cc(0x20d)]($dataStates[_0x4f1fd9]);},VisuMZ['SkillsStatesCore'][_0x20428a(0x31c)]=Game_Unit[_0x20428a(0x299)][_0x20428a(0x256)],Game_Unit['prototype'][_0x20428a(0x256)]=function(){const _0x387c7c=_0x20428a;if(this[_0x387c7c(0x324)]())return!![];return VisuMZ[_0x387c7c(0x35c)]['Game_Unit_isAllDead'][_0x387c7c(0x30b)](this);},Game_Unit['prototype'][_0x20428a(0x324)]=function(){const _0x267a4e=_0x20428a,_0x268330=this[_0x267a4e(0x246)]();for(const _0x1b24ed of _0x268330){if(!_0x1b24ed[_0x267a4e(0x25a)]())return![];}return!![];},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x45c)]=Game_Troop[_0x20428a(0x299)][_0x20428a(0x3b4)],Game_Troop[_0x20428a(0x299)]['setup']=function(_0x3643e4){const _0x217493=_0x20428a;VisuMZ[_0x217493(0x35c)][_0x217493(0x45c)]['call'](this,_0x3643e4),this['makeCurrentTroopUniqueID']();},Game_Troop[_0x20428a(0x299)][_0x20428a(0x305)]=function(){const _0x42c7d3=_0x20428a;this[_0x42c7d3(0x40f)]=Graphics[_0x42c7d3(0x365)];},Game_Troop[_0x20428a(0x299)][_0x20428a(0x222)]=function(){const _0x52413f=_0x20428a;return this['_currentTroopUniqueID']=this[_0x52413f(0x40f)]||Graphics['frameCount'],this['_currentTroopUniqueID'];},Scene_Skill[_0x20428a(0x299)][_0x20428a(0x333)]=function(){const _0x3c893e=_0x20428a;if(ConfigManager[_0x3c893e(0x418)]&&ConfigManager[_0x3c893e(0x225)]!==undefined)return ConfigManager[_0x3c893e(0x225)];else{if(this[_0x3c893e(0x245)]())return this[_0x3c893e(0x473)]()[_0x3c893e(0x3b5)](/LOWER/i);else _0x3c893e(0x2a0)!=='Fwtcn'?Scene_ItemBase[_0x3c893e(0x299)][_0x3c893e(0x278)][_0x3c893e(0x30b)](this):this[_0x3c893e(0x354)](_0x55d2c4);}},Scene_Skill['prototype']['isRightInputMode']=function(){const _0x3ac003=_0x20428a;if(ConfigManager['uiMenuStyle']&&ConfigManager['uiInputPosition']!==undefined){if('fsOTA'!=='fsOTA'){if(!_0x44e3ff[_0x3ac003(0x47c)](_0x563197))return!![];}else return ConfigManager[_0x3ac003(0x23a)];}else{if(this[_0x3ac003(0x245)]()){if('AeeVg'===_0x3ac003(0x41b)){if(typeof _0xe0f9be!==_0x3ac003(0x36d))_0x2ca437=_0x21deea['id'];this['_stateData']=this['_stateData']||{},this['_stateData'][_0x346633]={};}else return this[_0x3ac003(0x473)]()[_0x3ac003(0x3b5)](/RIGHT/i);}else return Scene_ItemBase[_0x3ac003(0x299)][_0x3ac003(0x278)][_0x3ac003(0x30b)](this);}},Scene_Skill[_0x20428a(0x299)]['updatedLayoutStyle']=function(){const _0x3a1278=_0x20428a;return VisuMZ[_0x3a1278(0x35c)]['Settings']['Skills']['LayoutStyle'];},Scene_Skill[_0x20428a(0x299)][_0x20428a(0x3e7)]=function(){const _0x562dfc=_0x20428a;return this[_0x562dfc(0x345)]&&this['_categoryWindow']['isUseModernControls']();},Scene_Skill[_0x20428a(0x299)]['isUseSkillsStatesCoreUpdatedLayout']=function(){const _0x2fa643=_0x20428a;return VisuMZ['SkillsStatesCore'][_0x2fa643(0x47b)][_0x2fa643(0x488)][_0x2fa643(0x313)];},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x1fe)]=Scene_Skill[_0x20428a(0x299)][_0x20428a(0x22f)],Scene_Skill[_0x20428a(0x299)][_0x20428a(0x22f)]=function(){const _0x540f81=_0x20428a;return this[_0x540f81(0x245)]()?this['helpWindowRectSkillsStatesCore']():VisuMZ[_0x540f81(0x35c)][_0x540f81(0x1fe)][_0x540f81(0x30b)](this);},Scene_Skill[_0x20428a(0x299)][_0x20428a(0x3f9)]=function(){const _0x170ca4=_0x20428a,_0x55574c=0x0,_0x113278=this[_0x170ca4(0x2ae)](),_0xcc49e4=Graphics[_0x170ca4(0x23e)],_0x5a57e5=this[_0x170ca4(0x28e)]();return new Rectangle(_0x55574c,_0x113278,_0xcc49e4,_0x5a57e5);},VisuMZ['SkillsStatesCore'][_0x20428a(0x2eb)]=Scene_Skill[_0x20428a(0x299)][_0x20428a(0x1df)],Scene_Skill[_0x20428a(0x299)][_0x20428a(0x1df)]=function(){const _0x3bb9f0=_0x20428a;return this[_0x3bb9f0(0x245)]()?this[_0x3bb9f0(0x470)]():VisuMZ[_0x3bb9f0(0x35c)][_0x3bb9f0(0x2eb)]['call'](this);},Scene_Skill[_0x20428a(0x299)][_0x20428a(0x470)]=function(){const _0x506d18=_0x20428a,_0x167db1=this['mainCommandWidth'](),_0x1bfa0a=this['calcWindowHeight'](0x3,!![]),_0x4f461b=this['isRightInputMode']()?Graphics[_0x506d18(0x23e)]-_0x167db1:0x0,_0x527e41=this['mainAreaTop']();return new Rectangle(_0x4f461b,_0x527e41,_0x167db1,_0x1bfa0a);},VisuMZ['SkillsStatesCore'][_0x20428a(0x2b0)]=Scene_Skill[_0x20428a(0x299)]['statusWindowRect'],Scene_Skill[_0x20428a(0x299)][_0x20428a(0x33a)]=function(){const _0x2572d4=_0x20428a;return this[_0x2572d4(0x245)]()?this[_0x2572d4(0x2bd)]():_0x2572d4(0x26a)!=='NTgUx'?_0x3f428b:VisuMZ[_0x2572d4(0x35c)][_0x2572d4(0x2b0)][_0x2572d4(0x30b)](this);},Scene_Skill[_0x20428a(0x299)]['statusWindowRectSkillsStatesCore']=function(){const _0x11d394=_0x20428a,_0x299081=Graphics[_0x11d394(0x23e)]-this[_0x11d394(0x4a1)](),_0x135c97=this[_0x11d394(0x2f5)][_0x11d394(0x300)],_0x1a3d72=this[_0x11d394(0x278)]()?0x0:Graphics[_0x11d394(0x23e)]-_0x299081,_0xe26326=this['mainAreaTop']();return new Rectangle(_0x1a3d72,_0xe26326,_0x299081,_0x135c97);},VisuMZ['SkillsStatesCore'][_0x20428a(0x481)]=Scene_Skill[_0x20428a(0x299)]['createItemWindow'],Scene_Skill['prototype'][_0x20428a(0x403)]=function(){const _0x4a273f=_0x20428a;VisuMZ[_0x4a273f(0x35c)]['Scene_Skill_createItemWindow'][_0x4a273f(0x30b)](this),this[_0x4a273f(0x284)]()&&this[_0x4a273f(0x214)]();},VisuMZ[_0x20428a(0x35c)]['Scene_Skill_itemWindowRect']=Scene_Skill[_0x20428a(0x299)]['itemWindowRect'],Scene_Skill[_0x20428a(0x299)][_0x20428a(0x357)]=function(){const _0x4ac3f4=_0x20428a;if(this['isUseSkillsStatesCoreUpdatedLayout']())return this['itemWindowRectSkillsStatesCore']();else{if(_0x4ac3f4(0x4a7)!=='ADkoP')_0x5b1ada[_0x4ac3f4(0x35c)][_0x4ac3f4(0x47b)][_0x4ac3f4(0x2cb)]['onExpireBuffJS'][_0x4ac3f4(0x30b)](this,_0x55af35);else{const _0x14b74e=VisuMZ[_0x4ac3f4(0x35c)][_0x4ac3f4(0x219)][_0x4ac3f4(0x30b)](this);return this[_0x4ac3f4(0x284)]()&&this[_0x4ac3f4(0x29c)]()&&(_0x14b74e[_0x4ac3f4(0x42a)]-=this[_0x4ac3f4(0x44f)]()),_0x14b74e;}}},Scene_Skill[_0x20428a(0x299)][_0x20428a(0x309)]=function(){const _0x2c8fab=_0x20428a,_0x40be2b=Graphics[_0x2c8fab(0x23e)]-this[_0x2c8fab(0x44f)](),_0x4a5b43=this[_0x2c8fab(0x33f)]()-this[_0x2c8fab(0x45e)]['height'],_0x2efca7=this[_0x2c8fab(0x278)]()?Graphics['boxWidth']-_0x40be2b:0x0,_0x50728c=this[_0x2c8fab(0x45e)]['y']+this[_0x2c8fab(0x45e)][_0x2c8fab(0x300)];return new Rectangle(_0x2efca7,_0x50728c,_0x40be2b,_0x4a5b43);},Scene_Skill[_0x20428a(0x299)][_0x20428a(0x284)]=function(){const _0x102a2d=_0x20428a;if(!Imported[_0x102a2d(0x449)])return _0x102a2d(0x306)===_0x102a2d(0x306)?![]:this[_0x102a2d(0x2c7)](_0x55cc16)>0x0;else{if(this[_0x102a2d(0x245)]())return!![];else{if(_0x102a2d(0x244)===_0x102a2d(0x444)){if(this[_0x102a2d(0x4cc)][_0x102a2d(0x355)](_0x5bbd57))return!![];}else return VisuMZ[_0x102a2d(0x35c)][_0x102a2d(0x47b)][_0x102a2d(0x488)][_0x102a2d(0x3c7)];}}},Scene_Skill[_0x20428a(0x299)]['adjustItemWidthByShopStatus']=function(){const _0x14b140=_0x20428a;return VisuMZ[_0x14b140(0x35c)]['Settings']['Skills'][_0x14b140(0x4b9)];},Scene_Skill[_0x20428a(0x299)][_0x20428a(0x214)]=function(){const _0x26b4ae=_0x20428a,_0x1460d0=this['shopStatusWindowRect']();this['_shopStatusWindow']=new Window_ShopStatus(_0x1460d0),this[_0x26b4ae(0x312)](this['_shopStatusWindow']),this[_0x26b4ae(0x2ed)]['setStatusWindow'](this[_0x26b4ae(0x274)]);const _0x11f129=VisuMZ[_0x26b4ae(0x35c)][_0x26b4ae(0x47b)]['Skills'][_0x26b4ae(0x2fb)];this[_0x26b4ae(0x274)]['setBackgroundType'](_0x11f129||0x0);},Scene_Skill[_0x20428a(0x299)][_0x20428a(0x42b)]=function(){const _0x343849=_0x20428a;return this[_0x343849(0x245)]()?this[_0x343849(0x4bf)]():VisuMZ[_0x343849(0x35c)][_0x343849(0x47b)][_0x343849(0x488)][_0x343849(0x499)]['call'](this);},Scene_Skill[_0x20428a(0x299)][_0x20428a(0x4bf)]=function(){const _0x8b10bc=_0x20428a,_0xb2d4fc=this[_0x8b10bc(0x44f)](),_0x1aa0cc=this['_itemWindow'][_0x8b10bc(0x300)],_0xcb0d49=this['isRightInputMode']()?0x0:Graphics['boxWidth']-this[_0x8b10bc(0x44f)](),_0x2c4c84=this['_itemWindow']['y'];return new Rectangle(_0xcb0d49,_0x2c4c84,_0xb2d4fc,_0x1aa0cc);},Scene_Skill[_0x20428a(0x299)][_0x20428a(0x44f)]=function(){const _0x407891=_0x20428a;return Imported['VisuMZ_1_ItemsEquipsCore']?Scene_Shop[_0x407891(0x299)][_0x407891(0x3f3)]():'pszzH'!==_0x407891(0x3fe)?_0x8bebbe[_0x407891(0x353)]()[_0x2afc63(_0x141d72['$1'])]:0x0;},Scene_Skill[_0x20428a(0x299)][_0x20428a(0x3df)]=function(){const _0x57e2fd=_0x20428a;if(this[_0x57e2fd(0x2f5)]&&this[_0x57e2fd(0x2f5)]['active'])return TextManager[_0x57e2fd(0x489)];else{if(_0x57e2fd(0x4cd)==='fHbee'){const _0x4ee675=this[_0x57e2fd(0x301)];_0x4ee675['contents'][_0x57e2fd(0x38a)]();const _0x510feb=this['commandStyleCheck'](this['index']());if(_0x510feb==='icon'&&this['maxItems']()>0x0){const _0x531162=this[_0x57e2fd(0x458)](this[_0x57e2fd(0x1fd)]());let _0x676255=this['commandName'](this[_0x57e2fd(0x1fd)]());_0x676255=_0x676255[_0x57e2fd(0x28a)](/\\I\[(\d+)\]/gi,''),_0x4ee675[_0x57e2fd(0x43d)](),this[_0x57e2fd(0x3d4)](_0x676255,_0x531162),this['commandNameWindowDrawText'](_0x676255,_0x531162),this[_0x57e2fd(0x208)](_0x676255,_0x531162);}}else return'';}},VisuMZ['SkillsStatesCore']['Sprite_Gauge_initMembers']=Sprite_Gauge['prototype'][_0x20428a(0x3ca)],Sprite_Gauge[_0x20428a(0x299)][_0x20428a(0x3ca)]=function(){const _0x1d5a22=_0x20428a;VisuMZ['SkillsStatesCore'][_0x1d5a22(0x290)][_0x1d5a22(0x30b)](this),this[_0x1d5a22(0x428)]=null;},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x432)]=Sprite_Gauge[_0x20428a(0x299)]['setup'],Sprite_Gauge['prototype'][_0x20428a(0x3b4)]=function(_0x2faa3e,_0x55ba4f){const _0x4cba30=_0x20428a;this['setupSkillsStatesCore'](_0x2faa3e,_0x55ba4f),_0x55ba4f=_0x55ba4f[_0x4cba30(0x362)](),VisuMZ['SkillsStatesCore'][_0x4cba30(0x432)][_0x4cba30(0x30b)](this,_0x2faa3e,_0x55ba4f);},Sprite_Gauge[_0x20428a(0x299)][_0x20428a(0x401)]=function(_0x3cdbdc,_0xcef732){const _0x671462=_0x20428a,_0x57c1ba=VisuMZ['SkillsStatesCore']['Settings'][_0x671462(0x267)]['filter'](_0x861825=>_0x861825[_0x671462(0x204)][_0x671462(0x4a0)]()===_0xcef732['toUpperCase']());if(_0x57c1ba[_0x671462(0x45a)]>=0x1)this[_0x671462(0x428)]=_0x57c1ba[0x0];else{if('jUErz'==='jUErz')this[_0x671462(0x428)]=null;else return _0xc37faf[_0x671462(0x32a)](_0x24215d)['includes'](this['_stypeId']);}},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x3ea)]=Sprite_Gauge['prototype'][_0x20428a(0x2cf)],Sprite_Gauge[_0x20428a(0x299)][_0x20428a(0x2cf)]=function(){const _0x4604cb=_0x20428a;if(this[_0x4604cb(0x292)]&&this[_0x4604cb(0x428)])return'VYGWB'!==_0x4604cb(0x34e)?(_0xc1881e=_0x5e65f9(_0x5a1f7a),this[_0x4604cb(0x315)]=this[_0x4604cb(0x315)]||{},_0xf2b891['match'](/#(.*)/i)?this[_0x4604cb(0x315)][_0xada8c3]=_0x4604cb(0x3cb)[_0x4604cb(0x377)](_0x4e9600(_0x2a1084['$1'])):this['_colorCache'][_0xdf634c]=this[_0x4604cb(0x378)](_0x6cff51(_0x70b7f7)),this[_0x4604cb(0x315)][_0x344013]):this[_0x4604cb(0x416)]();else{if(_0x4604cb(0x22a)===_0x4604cb(0x22a))return VisuMZ[_0x4604cb(0x35c)]['Sprite_Gauge_currentValue'][_0x4604cb(0x30b)](this);else{const _0x5783ca=_0x4226a1[_0x4604cb(0x35c)][_0x4604cb(0x47b)][_0x4604cb(0x1da)];if(!_0x5783ca)return;if(_0x5783ca[_0x4604cb(0x236)]===![])return;if(!this[_0x4604cb(0x207)])return;this[_0x4604cb(0x207)][_0x4604cb(0x266)]();}}},Sprite_Gauge[_0x20428a(0x299)][_0x20428a(0x416)]=function(){const _0x57ff45=_0x20428a;return this[_0x57ff45(0x428)]['GaugeCurrentJS'][_0x57ff45(0x30b)](this[_0x57ff45(0x292)]);},VisuMZ[_0x20428a(0x35c)]['Sprite_Gauge_currentMaxValue']=Sprite_Gauge['prototype'][_0x20428a(0x4b4)],Sprite_Gauge[_0x20428a(0x299)][_0x20428a(0x4b4)]=function(){const _0x3dec7e=_0x20428a;if(this[_0x3dec7e(0x292)]&&this['_costSettings']){if(_0x3dec7e(0x2c0)!=='umzKF')return this[_0x3dec7e(0x395)]();else{if(!_0x55f161[_0x3dec7e(0x47c)](_0x27eae7))return![];}}else return VisuMZ[_0x3dec7e(0x35c)][_0x3dec7e(0x329)][_0x3dec7e(0x30b)](this);},Sprite_Gauge[_0x20428a(0x299)][_0x20428a(0x395)]=function(){const _0x89eb7e=_0x20428a;return this[_0x89eb7e(0x428)][_0x89eb7e(0x2d0)]['call'](this[_0x89eb7e(0x292)]);},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x406)]=Sprite_Gauge[_0x20428a(0x299)][_0x20428a(0x3e6)],Sprite_Gauge[_0x20428a(0x299)]['gaugeRate']=function(){const _0x38bcbd=_0x20428a,_0x1407ec=VisuMZ['SkillsStatesCore'][_0x38bcbd(0x406)][_0x38bcbd(0x30b)](this);return _0x1407ec[_0x38bcbd(0x32d)](0x0,0x1);},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x2cd)]=Sprite_Gauge[_0x20428a(0x299)][_0x20428a(0x37e)],Sprite_Gauge[_0x20428a(0x299)]['redraw']=function(){const _0x141972=_0x20428a;this[_0x141972(0x292)]&&this['_costSettings']?(this[_0x141972(0x293)][_0x141972(0x38a)](),this[_0x141972(0x3a0)]()):_0x141972(0x21a)!==_0x141972(0x3a9)?VisuMZ[_0x141972(0x35c)][_0x141972(0x2cd)][_0x141972(0x30b)](this):this['drawTextEx'](_0x49dd7f,_0x2f1e50['x'],_0x1e6999['y'],_0x21e1d3);},Sprite_Gauge['prototype'][_0x20428a(0x415)]=function(){const _0x270624=_0x20428a;let _0x3b291a=this[_0x270624(0x2cf)]();return Imported[_0x270624(0x49b)]&&this[_0x270624(0x435)]()&&(_0x3b291a=VisuMZ['GroupDigits'](_0x3b291a)),_0x3b291a;},Sprite_Gauge['prototype']['redrawSkillsStatesCore']=function(){const _0x1d119e=_0x20428a;this[_0x1d119e(0x428)][_0x1d119e(0x402)][_0x1d119e(0x30b)](this);},Sprite_Gauge[_0x20428a(0x299)][_0x20428a(0x404)]=function(_0x1e1041,_0x562dbe,_0x2c5a8f,_0x559d66,_0x471c67,_0x179946){const _0x2d992c=_0x20428a,_0x1d1ed2=this[_0x2d992c(0x3e6)](),_0x212683=Math[_0x2d992c(0x202)]((_0x471c67-0x2)*_0x1d1ed2),_0x36412d=_0x179946-0x2,_0x5618a2=this[_0x2d992c(0x36a)]();this['bitmap'][_0x2d992c(0x1fa)](_0x2c5a8f,_0x559d66,_0x471c67,_0x179946,_0x5618a2),this[_0x2d992c(0x293)][_0x2d992c(0x2e7)](_0x2c5a8f+0x1,_0x559d66+0x1,_0x212683,_0x36412d,_0x1e1041,_0x562dbe);},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x2dd)]=Sprite_StateIcon[_0x20428a(0x299)]['loadBitmap'],Sprite_StateIcon[_0x20428a(0x299)]['loadBitmap']=function(){const _0x4ed789=_0x20428a;VisuMZ[_0x4ed789(0x35c)][_0x4ed789(0x2dd)]['call'](this),this[_0x4ed789(0x1ef)]();},Sprite_StateIcon[_0x20428a(0x299)][_0x20428a(0x1ef)]=function(){const _0x57470c=_0x20428a,_0x4ad005=Window_Base['prototype'][_0x57470c(0x42f)]();this[_0x57470c(0x201)]=new Sprite(),this[_0x57470c(0x201)][_0x57470c(0x293)]=new Bitmap(ImageManager[_0x57470c(0x336)],_0x4ad005),this[_0x57470c(0x201)]['anchor']['x']=this[_0x57470c(0x1e8)]['x'],this[_0x57470c(0x201)][_0x57470c(0x1e8)]['y']=this[_0x57470c(0x1e8)]['y'],this[_0x57470c(0x36f)](this[_0x57470c(0x201)]),this[_0x57470c(0x387)]=this[_0x57470c(0x201)]['bitmap'];},VisuMZ['SkillsStatesCore'][_0x20428a(0x1e3)]=Sprite_StateIcon['prototype']['updateFrame'],Sprite_StateIcon[_0x20428a(0x299)][_0x20428a(0x37d)]=function(){const _0x32e813=_0x20428a;VisuMZ[_0x32e813(0x35c)][_0x32e813(0x1e3)][_0x32e813(0x30b)](this),this[_0x32e813(0x46e)]();},Sprite_StateIcon['prototype'][_0x20428a(0x341)]=function(_0x1268de,_0x3d391d,_0x9eb353,_0x41d456,_0x1bdb4b){const _0xe411d3=_0x20428a;this[_0xe411d3(0x387)][_0xe411d3(0x341)](_0x1268de,_0x3d391d,_0x9eb353,_0x41d456,this[_0xe411d3(0x387)][_0xe411d3(0x300)],_0x1bdb4b);},Sprite_StateIcon[_0x20428a(0x299)]['updateTurnDisplaySprite']=function(){const _0x1655f2=_0x20428a;this[_0x1655f2(0x43d)](),this[_0x1655f2(0x387)][_0x1655f2(0x38a)]();const _0x5750b0=this[_0x1655f2(0x292)];if(!_0x5750b0)return;const _0x223a1f=_0x5750b0[_0x1655f2(0x26e)]()[_0x1655f2(0x221)](_0x5617cf=>_0x5617cf[_0x1655f2(0x2a8)]>0x0),_0x52c638=[...Array(0x8)[_0x1655f2(0x468)]()]['filter'](_0x2f410a=>_0x5750b0[_0x1655f2(0x4b2)](_0x2f410a)!==0x0),_0x5c370f=this['_animationIndex'],_0xa710c5=_0x223a1f[_0x5c370f];if(_0xa710c5)Window_Base[_0x1655f2(0x299)][_0x1655f2(0x374)]['call'](this,_0x5750b0,_0xa710c5,0x0,0x0),Window_Base[_0x1655f2(0x299)][_0x1655f2(0x3f4)][_0x1655f2(0x30b)](this,_0x5750b0,_0xa710c5,0x0,0x0);else{const _0x3b26ed=_0x52c638[_0x5c370f-_0x223a1f[_0x1655f2(0x45a)]];if(_0x3b26ed===undefined)return;Window_Base[_0x1655f2(0x299)][_0x1655f2(0x2db)][_0x1655f2(0x30b)](this,_0x5750b0,_0x3b26ed,0x0,0x0),Window_Base['prototype'][_0x1655f2(0x265)][_0x1655f2(0x30b)](this,_0x5750b0,_0x3b26ed,0x0,0x0);}},Sprite_StateIcon[_0x20428a(0x299)][_0x20428a(0x43d)]=function(){const _0x452bd1=_0x20428a;this[_0x452bd1(0x387)]['fontFace']=$gameSystem[_0x452bd1(0x33c)](),this[_0x452bd1(0x387)]['fontSize']=$gameSystem['mainFontSize'](),this[_0x452bd1(0x427)]();},Sprite_StateIcon[_0x20428a(0x299)][_0x20428a(0x427)]=function(){const _0x4cfc23=_0x20428a;this['changeTextColor'](ColorManager['normalColor']()),this[_0x4cfc23(0x3af)](ColorManager[_0x4cfc23(0x1ea)]());},Sprite_StateIcon[_0x20428a(0x299)][_0x20428a(0x469)]=function(_0x533871){const _0x1e8517=_0x20428a;this['contents'][_0x1e8517(0x378)]=_0x533871;},Sprite_StateIcon[_0x20428a(0x299)][_0x20428a(0x3af)]=function(_0x28bac2){const _0x3cdcae=_0x20428a;this[_0x3cdcae(0x387)][_0x3cdcae(0x1ea)]=_0x28bac2;},Sprite_StateIcon[_0x20428a(0x299)][_0x20428a(0x2b8)]=function(){const _0x5fe756=_0x20428a;this[_0x5fe756(0x20f)]=!![],this['updateVisibility']();},Window_Base[_0x20428a(0x299)]['drawSkillCost']=function(_0x2e0403,_0x1a35fb,_0x21b3b6,_0x8fcfc5,_0x1367dd){const _0x27e028=_0x20428a,_0x164326=this[_0x27e028(0x3a2)](_0x2e0403,_0x1a35fb),_0x3108e1=this[_0x27e028(0x33d)](_0x164326,_0x21b3b6,_0x8fcfc5,_0x1367dd),_0x11cef2=_0x21b3b6+_0x1367dd-_0x3108e1[_0x27e028(0x42a)];this[_0x27e028(0x25e)](_0x164326,_0x11cef2,_0x8fcfc5,_0x1367dd),this[_0x27e028(0x43d)]();},Window_Base[_0x20428a(0x299)]['createAllSkillCostText']=function(_0x3014ed,_0x5767e1){const _0x35c763=_0x20428a;let _0x4e3bc3='';for(settings of VisuMZ[_0x35c763(0x35c)]['Settings']['Costs']){if(!this[_0x35c763(0x226)](_0x3014ed,_0x5767e1,settings))continue;if(_0x4e3bc3[_0x35c763(0x45a)]>0x0)_0x4e3bc3+=this[_0x35c763(0x3fb)]();_0x4e3bc3+=this[_0x35c763(0x230)](_0x3014ed,_0x5767e1,settings);}_0x4e3bc3=this[_0x35c763(0x348)](_0x3014ed,_0x5767e1,_0x4e3bc3);if(_0x5767e1['note'][_0x35c763(0x3b5)](/<CUSTOM COST TEXT>\s*([\s\S]*)\s*<\/CUSTOM COST TEXT>/i)){if(_0x4e3bc3['length']>0x0)_0x4e3bc3+=this[_0x35c763(0x3fb)]();_0x4e3bc3+=String(RegExp['$1']);}return _0x4e3bc3;},Window_Base[_0x20428a(0x299)]['makeAdditionalSkillCostText']=function(_0x104c1d,_0x4c4833,_0x6d540e){return _0x6d540e;},Window_Base[_0x20428a(0x299)][_0x20428a(0x226)]=function(_0x3e8d2f,_0x470969,_0x1c41fc){const _0x2b7511=_0x20428a,_0x82ab8c=_0x1c41fc[_0x2b7511(0x27a)][_0x2b7511(0x30b)](_0x3e8d2f,_0x470969);return _0x1c41fc[_0x2b7511(0x281)]['call'](_0x3e8d2f,_0x470969,_0x82ab8c,_0x1c41fc);},Window_Base[_0x20428a(0x299)][_0x20428a(0x230)]=function(_0x2ece44,_0x1c891b,_0x145e15){const _0x4124e4=_0x20428a,_0x40a69e=_0x145e15[_0x4124e4(0x27a)]['call'](_0x2ece44,_0x1c891b);return _0x145e15['TextJS']['call'](_0x2ece44,_0x1c891b,_0x40a69e,_0x145e15);},Window_Base['prototype']['skillCostSeparator']=function(){return'\x20';},Window_Base[_0x20428a(0x299)][_0x20428a(0x252)]=function(_0x14e822,_0x242b86,_0x1f5c1b,_0x254d3e){const _0x496b75=_0x20428a;if(!_0x14e822)return;VisuMZ[_0x496b75(0x35c)][_0x496b75(0x3bb)][_0x496b75(0x30b)](this,_0x14e822,_0x242b86,_0x1f5c1b,_0x254d3e),this[_0x496b75(0x352)](_0x14e822,_0x242b86,_0x1f5c1b,_0x254d3e);},Window_Base[_0x20428a(0x299)][_0x20428a(0x352)]=function(_0x55f0e2,_0x391bda,_0xa5acf,_0x165b5f){const _0x3b014c=_0x20428a;_0x165b5f=_0x165b5f||0x90;const _0x67eef6=ImageManager['iconWidth'],_0x153fae=_0x55f0e2['allIcons']()['slice'](0x0,Math['floor'](_0x165b5f/_0x67eef6)),_0x19ad79=_0x55f0e2[_0x3b014c(0x26e)]()[_0x3b014c(0x221)](_0x5b8def=>_0x5b8def['iconIndex']>0x0),_0xc48570=[...Array(0x8)[_0x3b014c(0x468)]()][_0x3b014c(0x221)](_0x549fe8=>_0x55f0e2[_0x3b014c(0x4b2)](_0x549fe8)!==0x0),_0x5af014=[];let _0x3d5f51=_0x391bda;for(let _0x1336fb=0x0;_0x1336fb<_0x153fae['length'];_0x1336fb++){this[_0x3b014c(0x43d)]();const _0x9f8862=_0x19ad79[_0x1336fb];if(_0x9f8862){if(!_0x5af014['includes'](_0x9f8862)){if(_0x3b014c(0x382)!==_0x3b014c(0x1f6))this['drawActorStateTurns'](_0x55f0e2,_0x9f8862,_0x3d5f51,_0xa5acf);else{if(!this[_0x3b014c(0x4cc)][_0x3b014c(0x2f7)](_0x1ea568))return!![];}}this[_0x3b014c(0x3f4)](_0x55f0e2,_0x9f8862,_0x3d5f51,_0xa5acf),_0x5af014[_0x3b014c(0x239)](_0x9f8862);}else{const _0x3de65f=_0xc48570[_0x1336fb-_0x19ad79[_0x3b014c(0x45a)]];this[_0x3b014c(0x2db)](_0x55f0e2,_0x3de65f,_0x3d5f51,_0xa5acf),this['drawActorBuffRates'](_0x55f0e2,_0x3de65f,_0x3d5f51,_0xa5acf);}_0x3d5f51+=_0x67eef6;}},Window_Base['prototype'][_0x20428a(0x374)]=function(_0x228dac,_0x231449,_0x278245,_0x352051){const _0x349868=_0x20428a;if(!VisuMZ[_0x349868(0x35c)][_0x349868(0x47b)][_0x349868(0x1da)][_0x349868(0x40d)])return;if(!_0x228dac[_0x349868(0x38d)](_0x231449['id']))return;if(_0x231449[_0x349868(0x2d9)]===0x0)return;if(_0x231449[_0x349868(0x425)][_0x349868(0x3b5)](/<HIDE STATE TURNS>/i))return;const _0x502f7a=_0x228dac['stateTurns'](_0x231449['id']),_0x593a65=ImageManager[_0x349868(0x336)],_0x4f295f=ColorManager[_0x349868(0x342)](_0x231449);this[_0x349868(0x469)](_0x4f295f),this['changeOutlineColor'](_0x349868(0x2aa)),this['contents'][_0x349868(0x467)]=!![],this[_0x349868(0x387)]['fontSize']=VisuMZ[_0x349868(0x35c)][_0x349868(0x47b)][_0x349868(0x1da)]['TurnFontSize'],_0x278245+=VisuMZ[_0x349868(0x35c)][_0x349868(0x47b)][_0x349868(0x1da)]['TurnOffsetX'],_0x352051+=VisuMZ[_0x349868(0x35c)][_0x349868(0x47b)][_0x349868(0x1da)][_0x349868(0x2b7)],this[_0x349868(0x341)](_0x502f7a,_0x278245,_0x352051,_0x593a65,'right'),this['contents'][_0x349868(0x467)]=![],this[_0x349868(0x43d)]();},Window_Base['prototype'][_0x20428a(0x3f4)]=function(_0x58c05e,_0x50e9da,_0x171ceb,_0x44f7ae){const _0x4aa4c3=_0x20428a;if(!VisuMZ['SkillsStatesCore'][_0x4aa4c3(0x47b)]['States'][_0x4aa4c3(0x25d)])return;const _0x253393=ImageManager[_0x4aa4c3(0x336)],_0x352be9=ImageManager[_0x4aa4c3(0x4c9)]/0x2,_0x111d79=ColorManager['normalColor']();this['changeTextColor'](_0x111d79),this['changeOutlineColor'](_0x4aa4c3(0x2aa)),this[_0x4aa4c3(0x387)][_0x4aa4c3(0x467)]=!![],this[_0x4aa4c3(0x387)][_0x4aa4c3(0x3e4)]=VisuMZ[_0x4aa4c3(0x35c)][_0x4aa4c3(0x47b)]['States'][_0x4aa4c3(0x3d1)],_0x171ceb+=VisuMZ['SkillsStatesCore'][_0x4aa4c3(0x47b)]['States'][_0x4aa4c3(0x4c0)],_0x44f7ae+=VisuMZ[_0x4aa4c3(0x35c)][_0x4aa4c3(0x47b)][_0x4aa4c3(0x1da)]['DataOffsetY'];const _0x3e3ce8=String(_0x58c05e[_0x4aa4c3(0x211)](_0x50e9da['id']));this[_0x4aa4c3(0x341)](_0x3e3ce8,_0x171ceb,_0x44f7ae,_0x253393,_0x4aa4c3(0x3e9)),this[_0x4aa4c3(0x387)]['fontBold']=![],this['resetFontSettings']();},Window_Base[_0x20428a(0x299)][_0x20428a(0x2db)]=function(_0x530093,_0x380ca1,_0x33a976,_0x1df2c2){const _0x26d487=_0x20428a;if(!VisuMZ[_0x26d487(0x35c)][_0x26d487(0x47b)]['Buffs'][_0x26d487(0x40d)])return;const _0x5eeeda=_0x530093[_0x26d487(0x4b2)](_0x380ca1);if(_0x5eeeda===0x0)return;const _0x479980=_0x530093[_0x26d487(0x391)](_0x380ca1),_0x3976ec=ImageManager['iconWidth'],_0x5c7959=_0x5eeeda>0x0?ColorManager[_0x26d487(0x4c3)]():ColorManager['debuffColor']();this['changeTextColor'](_0x5c7959),this[_0x26d487(0x3af)](_0x26d487(0x2aa)),this['contents']['fontBold']=!![],this[_0x26d487(0x387)][_0x26d487(0x3e4)]=VisuMZ[_0x26d487(0x35c)]['Settings'][_0x26d487(0x2cb)][_0x26d487(0x350)],_0x33a976+=VisuMZ[_0x26d487(0x35c)][_0x26d487(0x47b)][_0x26d487(0x2cb)][_0x26d487(0x243)],_0x1df2c2+=VisuMZ[_0x26d487(0x35c)][_0x26d487(0x47b)]['Buffs']['TurnOffsetY'],this['drawText'](_0x479980,_0x33a976,_0x1df2c2,_0x3976ec,_0x26d487(0x22c)),this[_0x26d487(0x387)]['fontBold']=![],this[_0x26d487(0x43d)]();},Window_Base[_0x20428a(0x299)]['drawActorBuffRates']=function(_0x2d510b,_0x437575,_0x52c133,_0x400875){const _0x2d4796=_0x20428a;if(!VisuMZ[_0x2d4796(0x35c)][_0x2d4796(0x47b)][_0x2d4796(0x2cb)]['ShowData'])return;const _0x12407a=_0x2d510b[_0x2d4796(0x409)](_0x437575),_0x114453=_0x2d510b[_0x2d4796(0x4b2)](_0x437575),_0x41764f=ImageManager[_0x2d4796(0x336)],_0x5824b1=ImageManager['iconHeight']/0x2,_0x53febf=_0x114453>0x0?ColorManager[_0x2d4796(0x4c3)]():ColorManager['debuffColor']();this['changeTextColor'](_0x53febf),this[_0x2d4796(0x3af)]('rgba(0,\x200,\x200,\x201)'),this['contents'][_0x2d4796(0x467)]=!![],this[_0x2d4796(0x387)]['fontSize']=VisuMZ[_0x2d4796(0x35c)][_0x2d4796(0x47b)]['Buffs'][_0x2d4796(0x3d1)],_0x52c133+=VisuMZ[_0x2d4796(0x35c)][_0x2d4796(0x47b)][_0x2d4796(0x2cb)]['DataOffsetX'],_0x400875+=VisuMZ[_0x2d4796(0x35c)][_0x2d4796(0x47b)][_0x2d4796(0x2cb)]['DataOffsetY'];const _0x317575=_0x2d4796(0x337)['format'](Math[_0x2d4796(0x4a6)](_0x12407a*0x64));this[_0x2d4796(0x341)](_0x317575,_0x52c133,_0x400875,_0x41764f,_0x2d4796(0x3e9)),this[_0x2d4796(0x387)][_0x2d4796(0x467)]=![],this[_0x2d4796(0x43d)]();},VisuMZ[_0x20428a(0x35c)]['Window_StatusBase_placeGauge']=Window_StatusBase[_0x20428a(0x299)][_0x20428a(0x3d2)],Window_StatusBase[_0x20428a(0x299)][_0x20428a(0x3d2)]=function(_0x33ee47,_0x3275a3,_0x34b0be,_0xfee07){const _0x53219a=_0x20428a;if(_0x33ee47[_0x53219a(0x21e)]())_0x3275a3=this[_0x53219a(0x366)](_0x33ee47,_0x3275a3);this[_0x53219a(0x258)](_0x33ee47,_0x3275a3,_0x34b0be,_0xfee07);},Window_StatusBase['prototype'][_0x20428a(0x258)]=function(_0x5737e3,_0x59d836,_0x53b0e1,_0x2bb2a9){const _0x50174f=_0x20428a;if(['none',_0x50174f(0x3db)][_0x50174f(0x325)](_0x59d836['toLowerCase']()))return;VisuMZ[_0x50174f(0x35c)][_0x50174f(0x2d1)]['call'](this,_0x5737e3,_0x59d836,_0x53b0e1,_0x2bb2a9);},Window_StatusBase[_0x20428a(0x299)][_0x20428a(0x366)]=function(_0x3566e8,_0x6aa632){const _0x324544=_0x20428a,_0x23e71d=_0x3566e8['currentClass']()[_0x324544(0x425)];if(_0x6aa632==='hp'&&_0x23e71d['match'](/<REPLACE HP GAUGE:[ ](.*)>/i))return String(RegExp['$1']);else{if(_0x6aa632==='mp'&&_0x23e71d[_0x324544(0x3b5)](/<REPLACE MP GAUGE:[ ](.*)>/i)){if(_0x324544(0x2f4)===_0x324544(0x2f4))return String(RegExp['$1']);else{const _0x160909=this[_0x324544(0x42b)]();this[_0x324544(0x274)]=new _0x5cc74c(_0x160909),this[_0x324544(0x312)](this[_0x324544(0x274)]),this[_0x324544(0x2ed)][_0x324544(0x277)](this['_shopStatusWindow']);const _0x2290dc=_0x3f26bf[_0x324544(0x35c)]['Settings'][_0x324544(0x488)][_0x324544(0x2fb)];this[_0x324544(0x274)][_0x324544(0x4cb)](_0x2290dc||0x0);}}else return _0x6aa632==='tp'&&_0x23e71d[_0x324544(0x3b5)](/<REPLACE TP GAUGE:[ ](.*)>/i)?String(RegExp['$1']):_0x6aa632;}},VisuMZ['SkillsStatesCore'][_0x20428a(0x3bb)]=Window_StatusBase[_0x20428a(0x299)][_0x20428a(0x252)],Window_StatusBase['prototype']['drawActorIcons']=function(_0x51e933,_0x11e1e1,_0x502c9e,_0x5a5a08){const _0x577533=_0x20428a;if(!_0x51e933)return;Window_Base[_0x577533(0x299)][_0x577533(0x252)][_0x577533(0x30b)](this,_0x51e933,_0x11e1e1,_0x502c9e,_0x5a5a08);},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x26b)]=Window_SkillType[_0x20428a(0x299)][_0x20428a(0x2d2)],Window_SkillType[_0x20428a(0x299)][_0x20428a(0x2d2)]=function(_0x21b102){const _0x154269=_0x20428a;VisuMZ[_0x154269(0x35c)][_0x154269(0x26b)]['call'](this,_0x21b102),this[_0x154269(0x424)](_0x21b102);},Window_SkillType[_0x20428a(0x299)][_0x20428a(0x424)]=function(_0x29b23b){const _0x2910c8=_0x20428a,_0x3c327f=new Rectangle(0x0,0x0,_0x29b23b[_0x2910c8(0x42a)],_0x29b23b[_0x2910c8(0x300)]);this['_commandNameWindow']=new Window_Base(_0x3c327f),this[_0x2910c8(0x301)]['opacity']=0x0,this[_0x2910c8(0x36f)](this[_0x2910c8(0x301)]),this[_0x2910c8(0x4bc)]();},Window_SkillType['prototype'][_0x20428a(0x260)]=function(){const _0x577a58=_0x20428a;Window_Command[_0x577a58(0x299)][_0x577a58(0x260)][_0x577a58(0x30b)](this);if(this[_0x577a58(0x301)])this[_0x577a58(0x4bc)]();},Window_SkillType['prototype'][_0x20428a(0x4bc)]=function(){const _0x2756dc=_0x20428a,_0xb38f3c=this[_0x2756dc(0x301)];_0xb38f3c[_0x2756dc(0x387)][_0x2756dc(0x38a)]();const _0x17018f=this['commandStyleCheck'](this[_0x2756dc(0x1fd)]());if(_0x17018f===_0x2756dc(0x215)&&this['maxItems']()>0x0){const _0x49bb3c=this['itemLineRect'](this[_0x2756dc(0x1fd)]());let _0x132fb3=this[_0x2756dc(0x356)](this[_0x2756dc(0x1fd)]());_0x132fb3=_0x132fb3['replace'](/\\I\[(\d+)\]/gi,''),_0xb38f3c[_0x2756dc(0x43d)](),this[_0x2756dc(0x3d4)](_0x132fb3,_0x49bb3c),this['commandNameWindowDrawText'](_0x132fb3,_0x49bb3c),this[_0x2756dc(0x208)](_0x132fb3,_0x49bb3c);}},Window_SkillType[_0x20428a(0x299)][_0x20428a(0x3d4)]=function(_0x51ba06,_0x274896){},Window_SkillType[_0x20428a(0x299)][_0x20428a(0x46c)]=function(_0x305594,_0x4c74a1){const _0x2e8db5=_0x20428a,_0x1d77cb=this[_0x2e8db5(0x301)];_0x1d77cb[_0x2e8db5(0x341)](_0x305594,0x0,_0x4c74a1['y'],_0x1d77cb[_0x2e8db5(0x24f)],_0x2e8db5(0x3e9));},Window_SkillType[_0x20428a(0x299)]['commandNameWindowCenter']=function(_0x4b3cc8,_0x23f06e){const _0x354701=_0x20428a,_0x247919=this[_0x354701(0x301)],_0x749eea=$gameSystem[_0x354701(0x4ae)](),_0x15cee2=_0x23f06e['x']+Math[_0x354701(0x202)](_0x23f06e[_0x354701(0x42a)]/0x2)+_0x749eea;_0x247919['x']=_0x247919[_0x354701(0x42a)]/-0x2+_0x15cee2,_0x247919['y']=Math['floor'](_0x23f06e[_0x354701(0x300)]/0x2);},Window_SkillType[_0x20428a(0x299)][_0x20428a(0x3e7)]=function(){const _0x556ded=_0x20428a;return Imported['VisuMZ_0_CoreEngine']&&Window_Command[_0x556ded(0x299)][_0x556ded(0x3e7)][_0x556ded(0x30b)](this);},Window_SkillType[_0x20428a(0x299)][_0x20428a(0x1dc)]=function(){const _0x394232=_0x20428a;if(!this[_0x394232(0x4cc)])return;const _0x1ca900=this[_0x394232(0x4cc)][_0x394232(0x2ec)]();for(const _0x545fa7 of _0x1ca900){if(_0x394232(0x3b6)!==_0x394232(0x46d)){const _0x453386=this[_0x394232(0x24e)](_0x545fa7);this[_0x394232(0x3c5)](_0x453386,_0x394232(0x24c),!![],_0x545fa7);}else this[_0x394232(0x387)]['fontFace']=_0x43f24d[_0x394232(0x33c)](),this[_0x394232(0x387)][_0x394232(0x3e4)]=_0x444ab3[_0x394232(0x37c)](),this['resetTextColor']();}},Window_SkillType[_0x20428a(0x299)][_0x20428a(0x24e)]=function(_0x5e9639){const _0x335632=_0x20428a;let _0x5c696b=$dataSystem['skillTypes'][_0x5e9639];if(_0x5c696b[_0x335632(0x3b5)](/\\I\[(\d+)\]/i))return _0x5c696b;if(this['commandStyle']()===_0x335632(0x2d3))return _0x5c696b;const _0x4d681a=VisuMZ['SkillsStatesCore'][_0x335632(0x47b)][_0x335632(0x488)],_0x221c13=$dataSystem['magicSkills'][_0x335632(0x325)](_0x5e9639),_0x2cd5a9=_0x221c13?_0x4d681a[_0x335632(0x303)]:_0x4d681a['IconStypeNorm'];return _0x335632(0x38b)[_0x335632(0x377)](_0x2cd5a9,_0x5c696b);},Window_SkillType['prototype'][_0x20428a(0x422)]=function(){const _0x43eed2=_0x20428a;return VisuMZ['SkillsStatesCore'][_0x43eed2(0x47b)][_0x43eed2(0x488)]['CmdTextAlign'];},Window_SkillType[_0x20428a(0x299)]['drawItem']=function(_0x598c92){const _0x330cae=_0x20428a,_0x5949dd=this[_0x330cae(0x4a9)](_0x598c92);if(_0x5949dd===_0x330cae(0x263))this[_0x330cae(0x45b)](_0x598c92);else _0x5949dd===_0x330cae(0x215)?this[_0x330cae(0x1f2)](_0x598c92):Window_Command['prototype'][_0x330cae(0x38e)][_0x330cae(0x30b)](this,_0x598c92);},Window_SkillType['prototype'][_0x20428a(0x3bd)]=function(){const _0x267db7=_0x20428a;return VisuMZ[_0x267db7(0x35c)][_0x267db7(0x47b)][_0x267db7(0x488)][_0x267db7(0x423)];},Window_SkillType[_0x20428a(0x299)]['commandStyleCheck']=function(_0x23a302){const _0x2ee377=_0x20428a;if(_0x23a302<0x0)return'text';const _0x3c5330=this[_0x2ee377(0x3bd)]();if(_0x3c5330!=='auto'){if(_0x2ee377(0x3b7)==='SHToO')return _0x3c5330;else{let _0x1e59c2=this[_0x2ee377(0x38d)](_0x5197b1);_0x2c91af[_0x2ee377(0x35c)][_0x2ee377(0x327)][_0x2ee377(0x30b)](this,_0x9990b2);if(_0x1e59c2&&!this['isStateAffected'](_0x13eace))this[_0x2ee377(0x34d)](_0x2285c7);}}else{if(this[_0x2ee377(0x36e)]()>0x0){const _0x3b7392=this[_0x2ee377(0x356)](_0x23a302);if(_0x3b7392[_0x2ee377(0x3b5)](/\\I\[(\d+)\]/i)){const _0x2eca7f=this[_0x2ee377(0x458)](_0x23a302),_0x29aeab=this[_0x2ee377(0x33d)](_0x3b7392)[_0x2ee377(0x42a)];return _0x29aeab<=_0x2eca7f[_0x2ee377(0x42a)]?'Wqmly'!==_0x2ee377(0x2be)?!![]:'iconText':_0x2ee377(0x294)===_0x2ee377(0x295)?_0x5a1b8d[_0x2ee377(0x35c)][_0x2ee377(0x47b)][_0x2ee377(0x488)][_0x2ee377(0x414)]:'icon';}}}return'text';},Window_SkillType['prototype']['drawItemStyleIconText']=function(_0x5ee514){const _0x5971c5=_0x20428a,_0x285f0e=this[_0x5971c5(0x458)](_0x5ee514),_0xb76858=this[_0x5971c5(0x356)](_0x5ee514),_0xf3b4af=this[_0x5971c5(0x33d)](_0xb76858)['width'];this[_0x5971c5(0x287)](this[_0x5971c5(0x1f5)](_0x5ee514));const _0x9a62fa=this[_0x5971c5(0x422)]();if(_0x9a62fa===_0x5971c5(0x22c))this['drawTextEx'](_0xb76858,_0x285f0e['x']+_0x285f0e[_0x5971c5(0x42a)]-_0xf3b4af,_0x285f0e['y'],_0xf3b4af);else{if(_0x9a62fa===_0x5971c5(0x3e9)){if(_0x5971c5(0x373)==='oOyXI'){const _0x281ceb=_0x285f0e['x']+Math[_0x5971c5(0x202)]((_0x285f0e[_0x5971c5(0x42a)]-_0xf3b4af)/0x2);this[_0x5971c5(0x25e)](_0xb76858,_0x281ceb,_0x285f0e['y'],_0xf3b4af);}else{if(!_0x2bf615[_0x5971c5(0x35c)][_0x5971c5(0x47b)]['States'][_0x5971c5(0x40d)])return;if(!_0x91213[_0x5971c5(0x38d)](_0x287c7d['id']))return;if(_0x28004c[_0x5971c5(0x2d9)]===0x0)return;if(_0x212f93[_0x5971c5(0x425)]['match'](/<HIDE STATE TURNS>/i))return;const _0x4d751c=_0x229bc8[_0x5971c5(0x2ff)](_0x2102af['id']),_0x1f9e4f=_0x48c207[_0x5971c5(0x336)],_0x1f666c=_0x327cc5[_0x5971c5(0x342)](_0x245700);this[_0x5971c5(0x469)](_0x1f666c),this['changeOutlineColor']('rgba(0,\x200,\x200,\x201)'),this[_0x5971c5(0x387)][_0x5971c5(0x467)]=!![],this[_0x5971c5(0x387)][_0x5971c5(0x3e4)]=_0x237fe8[_0x5971c5(0x35c)][_0x5971c5(0x47b)][_0x5971c5(0x1da)][_0x5971c5(0x350)],_0xfcb88b+=_0x24f449[_0x5971c5(0x35c)][_0x5971c5(0x47b)]['States'][_0x5971c5(0x243)],_0x2f78e8+=_0x51abcd[_0x5971c5(0x35c)]['Settings'][_0x5971c5(0x1da)][_0x5971c5(0x2b7)],this[_0x5971c5(0x341)](_0x4d751c,_0x270025,_0x5eb1b6,_0x1f9e4f,_0x5971c5(0x22c)),this[_0x5971c5(0x387)][_0x5971c5(0x467)]=![],this[_0x5971c5(0x43d)]();}}else _0x5971c5(0x30e)!==_0x5971c5(0x30e)?(_0x260a8e[_0x5971c5(0x35c)][_0x5971c5(0x481)]['call'](this),this['allowCreateShopStatusWindow']()&&this[_0x5971c5(0x214)]()):this[_0x5971c5(0x25e)](_0xb76858,_0x285f0e['x'],_0x285f0e['y'],_0xf3b4af);}},Window_SkillType['prototype'][_0x20428a(0x1f2)]=function(_0x34cba1){const _0x4f5489=_0x20428a;this[_0x4f5489(0x356)](_0x34cba1)[_0x4f5489(0x3b5)](/\\I\[(\d+)\]/i);const _0x13b9ca=Number(RegExp['$1'])||0x0,_0x1ce4d8=this[_0x4f5489(0x458)](_0x34cba1),_0x4f4b1d=_0x1ce4d8['x']+Math[_0x4f5489(0x202)]((_0x1ce4d8['width']-ImageManager[_0x4f5489(0x336)])/0x2),_0xa703c0=_0x1ce4d8['y']+(_0x1ce4d8[_0x4f5489(0x300)]-ImageManager[_0x4f5489(0x4c9)])/0x2;this[_0x4f5489(0x248)](_0x13b9ca,_0x4f4b1d,_0xa703c0);},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x2b4)]=Window_SkillStatus[_0x20428a(0x299)][_0x20428a(0x2ea)],Window_SkillStatus[_0x20428a(0x299)][_0x20428a(0x2ea)]=function(){const _0x1bbc42=_0x20428a;VisuMZ[_0x1bbc42(0x35c)][_0x1bbc42(0x2b4)][_0x1bbc42(0x30b)](this);if(this[_0x1bbc42(0x4cc)])this['drawExtendedSkillsStatesCoreStatus']();},Window_SkillStatus[_0x20428a(0x299)]['drawExtendedSkillsStatesCoreStatus']=function(){const _0x15f8d9=_0x20428a;if(!Imported[_0x15f8d9(0x49b)])return;if(!Imported[_0x15f8d9(0x392)])return;const _0x121ad0=this[_0x15f8d9(0x4ce)]();let _0x35e170=this[_0x15f8d9(0x439)]()/0x2+0xb4+0xb4+0xb4,_0x5af729=this['innerWidth']-_0x35e170-0x2;if(_0x5af729>=0x12c){const _0x67a3be=VisuMZ[_0x15f8d9(0x3b1)][_0x15f8d9(0x47b)]['Param']['DisplayedParams'],_0x3e6ef0=Math['floor'](_0x5af729/0x2)-0x18;let _0x279e7e=_0x35e170,_0x494afd=Math['floor']((this[_0x15f8d9(0x41c)]-Math[_0x15f8d9(0x485)](_0x67a3be['length']/0x2)*_0x121ad0)/0x2),_0x35fb88=0x0;for(const _0x226c96 of _0x67a3be){this[_0x15f8d9(0x492)](_0x279e7e,_0x494afd,_0x3e6ef0,_0x226c96),_0x35fb88++;if(_0x35fb88%0x2===0x0){if(_0x15f8d9(0x30d)!==_0x15f8d9(0x497))_0x279e7e=_0x35e170,_0x494afd+=_0x121ad0;else return _0x53bd03[_0x15f8d9(0x299)][_0x15f8d9(0x3f3)]();}else _0x279e7e+=_0x3e6ef0+0x18;}}this[_0x15f8d9(0x43d)]();},Window_SkillStatus['prototype'][_0x20428a(0x492)]=function(_0x58da2a,_0x549902,_0x2084a8,_0x440a74){const _0x21d238=_0x20428a,_0x54a0d2=this['gaugeLineHeight']();this[_0x21d238(0x43d)](),this[_0x21d238(0x3e2)](_0x58da2a,_0x549902,_0x2084a8,_0x440a74,!![]),this[_0x21d238(0x427)](),this[_0x21d238(0x387)][_0x21d238(0x3e4)]-=0x8;const _0x35001b=this[_0x21d238(0x4cc)][_0x21d238(0x48f)](_0x440a74,!![]);this['contents'][_0x21d238(0x341)](_0x35001b,_0x58da2a,_0x549902,_0x2084a8,_0x54a0d2,_0x21d238(0x22c));},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x34b)]=Window_SkillList[_0x20428a(0x299)][_0x20428a(0x325)],Window_SkillList[_0x20428a(0x299)][_0x20428a(0x325)]=function(_0x3548a5){const _0x568cf3=_0x20428a;return this[_0x568cf3(0x26f)](_0x3548a5);},VisuMZ['SkillsStatesCore'][_0x20428a(0x3ee)]=Window_SkillList['prototype'][_0x20428a(0x39d)],Window_SkillList[_0x20428a(0x299)]['maxCols']=function(){const _0x196c72=_0x20428a;return SceneManager[_0x196c72(0x46b)][_0x196c72(0x2d8)]===Scene_Battle?VisuMZ['SkillsStatesCore'][_0x196c72(0x3ee)][_0x196c72(0x30b)](this):'LvHOY'!=='LvHOY'?_0x2281d1[_0x196c72(0x35c)]['Settings'][_0x196c72(0x2e6)][_0x196c72(0x283)][_0x196c72(0x30b)](this,_0x114074):VisuMZ['SkillsStatesCore'][_0x196c72(0x47b)][_0x196c72(0x488)][_0x196c72(0x2c6)];},VisuMZ['SkillsStatesCore'][_0x20428a(0x3cc)]=Window_SkillList[_0x20428a(0x299)][_0x20428a(0x393)],Window_SkillList[_0x20428a(0x299)][_0x20428a(0x393)]=function(_0x3e7565){const _0x5b351b=_0x20428a,_0x4b29aa=this[_0x5b351b(0x4cc)]!==_0x3e7565;VisuMZ[_0x5b351b(0x35c)]['Window_SkillList_setActor']['call'](this,_0x3e7565);if(_0x4b29aa){if(_0x5b351b(0x318)===_0x5b351b(0x318))this[_0x5b351b(0x45e)]&&this[_0x5b351b(0x45e)][_0x5b351b(0x2d8)]===Window_ShopStatus&&this['_statusWindow'][_0x5b351b(0x37b)](this[_0x5b351b(0x482)](0x0));else{const _0x266d03=_0xa18eaa(_0x37dca9['$1']);_0x266d03!==_0x245d78[_0x594e4b][_0x5b351b(0x25f)]&&(_0x2b7dfd(_0x5b351b(0x463)[_0x5b351b(0x377)](_0x3c14ed,_0x266d03)),_0x5a9b07[_0x5b351b(0x2fc)]());}}},Window_SkillList[_0x20428a(0x299)][_0x20428a(0x1de)]=function(_0x2c454b){const _0x670bb2=_0x20428a;if(this[_0x670bb2(0x49c)]===_0x2c454b)return;this[_0x670bb2(0x49c)]=_0x2c454b,this['refresh'](),this[_0x670bb2(0x291)](0x0,0x0),this[_0x670bb2(0x45e)]&&this['_statusWindow'][_0x670bb2(0x2d8)]===Window_ShopStatus&&this['_statusWindow'][_0x670bb2(0x37b)](this[_0x670bb2(0x482)](0x0));},Window_SkillList[_0x20428a(0x299)][_0x20428a(0x26f)]=function(_0x46e5b0){const _0x4414cd=_0x20428a;if(!_0x46e5b0)return VisuMZ[_0x4414cd(0x35c)]['Window_SkillList_includes'][_0x4414cd(0x30b)](this,_0x46e5b0);if(!this['checkSkillTypeMatch'](_0x46e5b0))return![];if(!this[_0x4414cd(0x2b6)](_0x46e5b0))return![];if(!this['checkShowHideJS'](_0x46e5b0))return![];return!![];},Window_SkillList[_0x20428a(0x299)][_0x20428a(0x41a)]=function(_0x157846){const _0x79f840=_0x20428a;return DataManager[_0x79f840(0x32a)](_0x157846)['includes'](this[_0x79f840(0x49c)]);},Window_SkillList['prototype'][_0x20428a(0x2b6)]=function(_0x3b4095){const _0x14754a=_0x20428a;if(!this[_0x14754a(0x48d)](_0x3b4095))return![];if(!this[_0x14754a(0x251)](_0x3b4095))return![];if(!this[_0x14754a(0x343)](_0x3b4095))return![];return!![];},Window_SkillList['prototype']['checkShowHideBattleNotetags']=function(_0x5bb8eb){const _0x5201e6=_0x20428a,_0x2ed2e8=_0x5bb8eb[_0x5201e6(0x425)];if(_0x2ed2e8['match'](/<HIDE IN BATTLE>/i)&&$gameParty[_0x5201e6(0x4c6)]())return![];else return _0x2ed2e8[_0x5201e6(0x3b5)](/<HIDE OUTSIDE BATTLE>/i)&&!$gameParty[_0x5201e6(0x4c6)]()?![]:!![];},Window_SkillList[_0x20428a(0x299)][_0x20428a(0x251)]=function(_0x54a2e8){const _0x35d9e6=_0x20428a,_0x3d65f6=_0x54a2e8['note'];if(_0x3d65f6[_0x35d9e6(0x3b5)](/<SHOW[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x14420d=JSON[_0x35d9e6(0x47f)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x36fac1 of _0x14420d){if('veubp'!==_0x35d9e6(0x200))this[_0x35d9e6(0x326)](_0x6c0508[_0x35d9e6(0x3ac)]());else{if(!$gameSwitches[_0x35d9e6(0x47c)](_0x36fac1))return![];}}return!![];}if(_0x3d65f6[_0x35d9e6(0x3b5)](/<SHOW ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x37276a=JSON[_0x35d9e6(0x47f)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x50e5f6 of _0x37276a){if('iYvnT'!=='iYvnT')return _0x5949a6[_0x35d9e6(0x46b)][_0x35d9e6(0x2d8)]===_0x3dce7d?_0x14b01a['SkillsStatesCore'][_0x35d9e6(0x3ee)]['call'](this):_0x586931[_0x35d9e6(0x35c)]['Settings'][_0x35d9e6(0x488)][_0x35d9e6(0x2c6)];else{if(!$gameSwitches[_0x35d9e6(0x47c)](_0x50e5f6))return![];}}return!![];}if(_0x3d65f6['match'](/<SHOW ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x35d9e6(0x240)===_0x35d9e6(0x240)){const _0x11fc18=JSON[_0x35d9e6(0x47f)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x352203 of _0x11fc18){if(_0x35d9e6(0x1eb)!==_0x35d9e6(0x4aa)){if($gameSwitches[_0x35d9e6(0x47c)](_0x352203))return!![];}else return this[_0x35d9e6(0x40f)]=this[_0x35d9e6(0x40f)]||_0x1db90c[_0x35d9e6(0x365)],this[_0x35d9e6(0x40f)];}return![];}else _0x1114b8[_0x35d9e6(0x35c)]['Game_Actor_learnSkill'][_0x35d9e6(0x30b)](this,_0x1b8708),this[_0x35d9e6(0x3a4)]={};}if(_0x3d65f6[_0x35d9e6(0x3b5)](/<HIDE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x4f1dc5=JSON[_0x35d9e6(0x47f)]('['+RegExp['$1'][_0x35d9e6(0x3b5)](/\d+/g)+']');for(const _0x4de270 of _0x4f1dc5){if(_0x35d9e6(0x37a)==='tfNgG'){if(!_0x69e82c[_0x35d9e6(0x449)])return![];else return this[_0x35d9e6(0x245)]()?!![]:_0x11c7b1[_0x35d9e6(0x35c)][_0x35d9e6(0x47b)][_0x35d9e6(0x488)][_0x35d9e6(0x3c7)];}else{if(!$gameSwitches[_0x35d9e6(0x47c)](_0x4de270))return!![];}}return![];}if(_0x3d65f6[_0x35d9e6(0x3b5)](/<HIDE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if('GPZTQ'!==_0x35d9e6(0x3c3))this[_0x35d9e6(0x214)]();else{const _0x22f0de=JSON[_0x35d9e6(0x47f)]('['+RegExp['$1'][_0x35d9e6(0x3b5)](/\d+/g)+']');for(const _0x261847 of _0x22f0de){if(!$gameSwitches[_0x35d9e6(0x47c)](_0x261847))return!![];}return![];}}if(_0x3d65f6['match'](/<HIDE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0xad3b09=JSON[_0x35d9e6(0x47f)]('['+RegExp['$1'][_0x35d9e6(0x3b5)](/\d+/g)+']');for(const _0x18f146 of _0xad3b09){if('sirbB'===_0x35d9e6(0x3a8)){if($gameSwitches[_0x35d9e6(0x47c)](_0x18f146))return![];}else{const _0x4730be=_0x58dbbb[_0x35d9e6(0x35c)][_0x35d9e6(0x3a6)][_0x35d9e6(0x30b)](this),_0x3b2c0=_0x33f28b[_0x35d9e6(0x35c)][_0x35d9e6(0x47b)][_0x35d9e6(0x488)];let _0x6f52af=_0x3b2c0['HiddenSkillTypes'];return _0x5e4301[_0x35d9e6(0x4c6)]()&&(_0x6f52af=_0x6f52af[_0x35d9e6(0x328)](_0x3b2c0[_0x35d9e6(0x335)])),_0x4730be['filter'](_0x4dbb62=>!_0x6f52af[_0x35d9e6(0x325)](_0x4dbb62));}}return!![];}return!![];},Window_SkillList[_0x20428a(0x299)][_0x20428a(0x343)]=function(_0x1470ec){const _0x51893e=_0x20428a,_0x39f4ea=_0x1470ec[_0x51893e(0x425)];if(_0x39f4ea[_0x51893e(0x3b5)](/<SHOW IF LEARNED[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x51893e(0x3a7)!==_0x51893e(0x398)){const _0x49208a=JSON[_0x51893e(0x47f)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0xf8a69b of _0x49208a){if(!this[_0x51893e(0x4cc)][_0x51893e(0x355)](_0xf8a69b))return![];}return!![];}else this[_0x51893e(0x2e9)](_0x173967),this[_0x51893e(0x25c)](_0x19f2d0),this[_0x51893e(0x4a8)](_0x20b47a);}else{if(_0x39f4ea[_0x51893e(0x3b5)](/<SHOW IF LEARNED[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x4215bf=RegExp['$1'][_0x51893e(0x27f)](',');for(const _0x17b2f6 of _0x4215bf){if('PhgOp'!=='hnmtl'){const _0x4b49cf=DataManager[_0x51893e(0x455)](_0x17b2f6);if(!_0x4b49cf)continue;if(!this[_0x51893e(0x4cc)][_0x51893e(0x355)](_0x4b49cf))return![];}else{const _0x42b1fa=_0x47b686[_0x5e4e94[_0x51893e(0x1e9)]];if(_0x42b1fa&&!_0x261ca2[_0x51893e(0x325)](_0x42b1fa))_0x5ece19['push'](_0x42b1fa);}}return!![];}}if(_0x39f4ea[_0x51893e(0x3b5)](/<SHOW IF LEARNED ALL[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x52db28=JSON['parse']('['+RegExp['$1'][_0x51893e(0x3b5)](/\d+/g)+']');for(const _0x15f75e of _0x52db28){if(!this[_0x51893e(0x4cc)][_0x51893e(0x355)](_0x15f75e))return![];}return!![];}else{if(_0x39f4ea['match'](/<SHOW IF LEARNED ALL[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0xf8617a=RegExp['$1'][_0x51893e(0x27f)](',');for(const _0x2655bf of _0xf8617a){if(_0x51893e(0x420)!==_0x51893e(0x478)){const _0x326614=DataManager[_0x51893e(0x455)](_0x2655bf);if(!_0x326614)continue;if(!this[_0x51893e(0x4cc)][_0x51893e(0x355)](_0x326614))return![];}else return _0x2b8455['SkillsStatesCore'][_0x51893e(0x2eb)]['call'](this);}return!![];}}if(_0x39f4ea['match'](/<SHOW IF LEARNED ANY[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x4cef0f=JSON[_0x51893e(0x47f)]('['+RegExp['$1'][_0x51893e(0x3b5)](/\d+/g)+']');for(const _0x47e3eb of _0x4cef0f){if(this[_0x51893e(0x4cc)]['isLearnedSkill'](_0x47e3eb))return!![];}return![];}else{if(_0x39f4ea[_0x51893e(0x3b5)](/<SHOW IF LEARNED ANY[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x2d8f18=RegExp['$1'][_0x51893e(0x27f)](',');for(const _0x329579 of _0x2d8f18){if(_0x51893e(0x33e)!==_0x51893e(0x33e)){if(typeof _0x1ac4f3===_0x51893e(0x36d))_0x259d65=_0x3b6870[_0x535e28];const _0x31462e=_0x51893e(0x254)[_0x51893e(0x377)](_0x27fb55['id']);this[_0x51893e(0x315)]=this[_0x51893e(0x315)]||{};if(this[_0x51893e(0x315)][_0x31462e])return this[_0x51893e(0x315)][_0x31462e];const _0x401217=this[_0x51893e(0x224)](_0x3d0504);return this[_0x51893e(0x23b)](_0x31462e,_0x401217);}else{const _0x91e334=DataManager['getSkillIdWithName'](_0x329579);if(!_0x91e334)continue;if(this['_actor']['isLearnedSkill'](_0x91e334))return!![];}}return![];}}if(_0x39f4ea['match'](/<HIDE IF LEARNED[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x406e5f=JSON[_0x51893e(0x47f)]('['+RegExp['$1'][_0x51893e(0x3b5)](/\d+/g)+']');for(const _0x1038aa of _0x406e5f){if('FYjFt'===_0x51893e(0x483)){if(!this[_0x51893e(0x4cc)]['isLearnedSkill'](_0x1038aa))return!![];}else{const _0x49a108=this[_0x51893e(0x246)]();for(const _0x3d840c of _0x49a108){if(!_0x3d840c['isGroupDefeatStateAffected']())return![];}return!![];}}return![];}else{if(_0x39f4ea[_0x51893e(0x3b5)](/<HIDE IF LEARNED[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x5dbdeb=RegExp['$1'][_0x51893e(0x27f)](',');for(const _0x5cc0f1 of _0x5dbdeb){const _0x1925c6=DataManager[_0x51893e(0x455)](_0x5cc0f1);if(!_0x1925c6)continue;if(!this[_0x51893e(0x4cc)]['isLearnedSkill'](_0x1925c6))return!![];}return![];}}if(_0x39f4ea['match'](/<HIDE IF LEARNED ALL[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x25d089=JSON[_0x51893e(0x47f)]('['+RegExp['$1'][_0x51893e(0x3b5)](/\d+/g)+']');for(const _0x246d7a of _0x25d089){if(!this[_0x51893e(0x4cc)]['isLearnedSkill'](_0x246d7a))return!![];}return![];}else{if(_0x39f4ea[_0x51893e(0x3b5)](/<HIDE IF LEARNED ALL[ ](?:SKILL|SKILLS):[ ](.*)>/i)){if('hOYmL'===_0x51893e(0x255)){const _0x27ba7f=_0x431439[_0x51893e(0x47f)]('['+_0x5a346f['$1'][_0x51893e(0x3b5)](/\d+/g)+']');for(const _0xd6778e of _0x27ba7f){if(this[_0x51893e(0x4cc)]['hasSkill'](_0xd6778e))return![];}return!![];}else{const _0x1bf1a5=RegExp['$1'][_0x51893e(0x27f)](',');for(const _0x2d1371 of _0x1bf1a5){const _0x23dd73=DataManager[_0x51893e(0x455)](_0x2d1371);if(!_0x23dd73)continue;if(!this[_0x51893e(0x4cc)][_0x51893e(0x355)](_0x23dd73))return!![];}return![];}}}if(_0x39f4ea[_0x51893e(0x3b5)](/<HIDE IF LEARNED ANY[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x1b2240=JSON[_0x51893e(0x47f)]('['+RegExp['$1'][_0x51893e(0x3b5)](/\d+/g)+']');for(const _0x11fba7 of _0x1b2240){if('OOCoV'!=='OOCoV')this[_0x51893e(0x1f2)](_0x17b1c0);else{if(this['_actor']['isLearnedSkill'](_0x11fba7))return![];}}return!![];}else{if(_0x39f4ea[_0x51893e(0x3b5)](/<HIDE IF LEARNED ANY[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x524ecb=RegExp['$1'][_0x51893e(0x27f)](',');for(const _0x21dc2c of _0x524ecb){if(_0x51893e(0x466)===_0x51893e(0x466)){const _0x252c98=DataManager['getSkillIdWithName'](_0x21dc2c);if(!_0x252c98)continue;if(this[_0x51893e(0x4cc)]['isLearnedSkill'](_0x252c98))return![];}else{if(!_0x400b35)return;_0x330117[_0x51893e(0x35c)][_0x51893e(0x3bb)]['call'](this,_0x3ed1d7,_0x1e0a4a,_0x2ca4fe,_0x41c8a3),this['drawActorIconsAllTurnCounters'](_0x6fa912,_0x155013,_0x3e5ea9,_0x3f6290);}}return!![];}}if(_0x39f4ea['match'](/<SHOW IF (?:HAS|HAVE)[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x39fedc=JSON[_0x51893e(0x47f)]('['+RegExp['$1'][_0x51893e(0x3b5)](/\d+/g)+']');for(const _0xb4755a of _0x39fedc){if(_0x51893e(0x35a)!=='cCMaM')this[_0x51893e(0x3ae)]='',this[_0x51893e(0x23c)]={},this[_0x51893e(0x462)]={},this[_0x51893e(0x2bf)]={};else{if(!this[_0x51893e(0x4cc)][_0x51893e(0x2f7)](_0xb4755a))return![];}}return!![];}else{if(_0x39f4ea['match'](/<SHOW IF (?:HAS|HAVE)[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x1591ef=RegExp['$1'][_0x51893e(0x27f)](',');for(const _0x1b33f6 of _0x1591ef){if('vtASB'===_0x51893e(0x310))return!![];else{const _0x37c889=DataManager[_0x51893e(0x455)](_0x1b33f6);if(!_0x37c889)continue;if(!this['_actor'][_0x51893e(0x2f7)](_0x37c889))return![];}}return!![];}}if(_0x39f4ea[_0x51893e(0x3b5)](/<SHOW IF (?:HAS|HAVE) ALL[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0xdcd2bd=JSON[_0x51893e(0x47f)]('['+RegExp['$1'][_0x51893e(0x3b5)](/\d+/g)+']');for(const _0x367fbb of _0xdcd2bd){if(!this['_actor'][_0x51893e(0x2f7)](_0x367fbb))return![];}return!![];}else{if(_0x39f4ea['match'](/<SHOW IF (?:HAS|HAVE) ALL[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x237374=RegExp['$1'][_0x51893e(0x27f)](',');for(const _0x654905 of _0x237374){if('zyers'!=='zyers')_0xe32d0b[_0x51893e(0x35c)][_0x51893e(0x47b)][_0x51893e(0x2cb)][_0x51893e(0x29d)]['call'](this,_0x13a7d4,_0x1eed73);else{const _0x52ebdd=DataManager[_0x51893e(0x455)](_0x654905);if(!_0x52ebdd)continue;if(!this['_actor'][_0x51893e(0x2f7)](_0x52ebdd))return![];}}return!![];}}if(_0x39f4ea[_0x51893e(0x3b5)](/<SHOW IF (?:HAS|HAVE) ANY[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x51893e(0x302)===_0x51893e(0x302)){const _0x53a895=JSON['parse']('['+RegExp['$1'][_0x51893e(0x3b5)](/\d+/g)+']');for(const _0x2a89bd of _0x53a895){if(this[_0x51893e(0x4cc)][_0x51893e(0x2f7)](_0x2a89bd))return!![];}return![];}else this[_0x51893e(0x315)][_0x51ad0a]=this[_0x51893e(0x378)](_0xdb0a30(_0x3aca55));}else{if(_0x39f4ea[_0x51893e(0x3b5)](/<SHOW IF (?:HAS|HAVE) ANY[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x536e4f=RegExp['$1'][_0x51893e(0x27f)](',');for(const _0x31e1b7 of _0x536e4f){if(_0x51893e(0x3fc)===_0x51893e(0x371)){const _0x30a6c6=_0x40cda2['parse']('['+_0x3b1d69['$1']['match'](/\d+/g)+']');for(const _0x3b5f05 of _0x30a6c6){if(!_0x1b1bce['value'](_0x3b5f05))return![];}return!![];}else{const _0x122dac=DataManager[_0x51893e(0x455)](_0x31e1b7);if(!_0x122dac)continue;if(this[_0x51893e(0x4cc)][_0x51893e(0x2f7)](_0x122dac))return!![];}}return![];}}if(_0x39f4ea[_0x51893e(0x3b5)](/<HIDE IF (?:HAS|HAVE)[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x2a5b83=JSON['parse']('['+RegExp['$1'][_0x51893e(0x3b5)](/\d+/g)+']');for(const _0x18e13c of _0x2a5b83){if(_0x51893e(0x30f)!==_0x51893e(0x30f))this[_0x51893e(0x38c)](_0x382dce['id'])&&_0x1b889f[_0x51893e(0x2d9)]===_0x2caec7&&(this[_0x51893e(0x326)](_0x29cc5b['id']),this['onExpireState'](_0x4cb8a9['id']),this[_0x51893e(0x26c)](_0x103c00['id']));else{if(!this[_0x51893e(0x4cc)][_0x51893e(0x2f7)](_0x18e13c))return!![];}}return![];}else{if(_0x39f4ea['match'](/<HIDE IF (?:HAS|HAVE)[ ](?:SKILL|SKILLS):[ ](.*)>/i)){if('robLx'!==_0x51893e(0x359)){const _0x24dbf8=RegExp['$1'][_0x51893e(0x27f)](',');for(const _0x246393 of _0x24dbf8){const _0x5a669e=DataManager['getSkillIdWithName'](_0x246393);if(!_0x5a669e)continue;if(!this['_actor']['hasSkill'](_0x5a669e))return!![];}return![];}else return _0x51893e(0x263);}}if(_0x39f4ea[_0x51893e(0x3b5)](/<HIDE IF (?:HAS|HAVE) ALL[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x4d9eba=JSON[_0x51893e(0x47f)]('['+RegExp['$1'][_0x51893e(0x3b5)](/\d+/g)+']');for(const _0x53e759 of _0x4d9eba){if(_0x51893e(0x4d0)!=='ZqAmt'){if(this[_0x51893e(0x30a)](_0x101660))return!![];return _0x227d8c['SkillsStatesCore']['Game_Action_testApply'][_0x51893e(0x30b)](this,_0x2ff4f6);}else{if(!this[_0x51893e(0x4cc)][_0x51893e(0x2f7)](_0x53e759))return!![];}}return![];}else{if(_0x39f4ea[_0x51893e(0x3b5)](/<HIDE IF (?:HAS|HAVE) ALL[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x400af9=RegExp['$1'][_0x51893e(0x27f)](',');for(const _0x4d43e5 of _0x400af9){if(_0x51893e(0x2af)===_0x51893e(0x2af)){const _0x2dad0f=DataManager[_0x51893e(0x455)](_0x4d43e5);if(!_0x2dad0f)continue;if(!this[_0x51893e(0x4cc)][_0x51893e(0x2f7)](_0x2dad0f))return!![];}else _0x4c3009[_0x51893e(0x319)]=_0xe9d579(_0x5612fe['$1']);}return![];}}if(_0x39f4ea[_0x51893e(0x3b5)](/<HIDE IF (?:HAS|HAVE) ANY[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x46c5a4=JSON[_0x51893e(0x47f)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0xccbdc0 of _0x46c5a4){if(this[_0x51893e(0x4cc)][_0x51893e(0x2f7)](_0xccbdc0))return![];}return!![];}else{if(_0x39f4ea[_0x51893e(0x3b5)](/<HIDE IF (?:HAS|HAVE) ANY[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0xe41133=RegExp['$1'][_0x51893e(0x27f)](',');for(const _0x2792e1 of _0xe41133){const _0x4e3332=DataManager[_0x51893e(0x455)](_0x2792e1);if(!_0x4e3332)continue;if(this[_0x51893e(0x4cc)][_0x51893e(0x2f7)](_0x4e3332))return![];}return!![];}}return!![];},Window_SkillList['prototype'][_0x20428a(0x2ee)]=function(_0x5950a8){const _0x3672a8=_0x20428a,_0x454e3e=_0x5950a8['note'],_0x4ffa8f=VisuMZ[_0x3672a8(0x35c)][_0x3672a8(0x45d)];if(_0x4ffa8f[_0x5950a8['id']]){if('xEinr'==='xEinr')return _0x4ffa8f[_0x5950a8['id']][_0x3672a8(0x30b)](this,_0x5950a8);else{_0x3038a2[_0x3672a8(0x3b5)](/<(.*)[ ]DEBUFF TURNS:[ ]([\+\-]\d+)>/i);const _0x4cacaa=_0x1a1d38[_0x3672a8(0x2dc)](_0x5bc074(_0x5d5ee9['$1'])[_0x3672a8(0x4a0)]()),_0x37595f=_0x538948(_0x4ec12e['$2']);_0x4cacaa>=0x0&&(_0x4e840b[_0x3672a8(0x29f)](_0x4cacaa,_0x37595f),this[_0x3672a8(0x49d)](_0x21c0b9));}}else{if(_0x3672a8(0x4b3)===_0x3672a8(0x4b3))return!![];else _0x51aa4d[_0x3672a8(0x35c)][_0x3672a8(0x47b)]['Buffs'][_0x3672a8(0x413)][_0x3672a8(0x30b)](this,_0x5c8978);}},VisuMZ[_0x20428a(0x35c)][_0x20428a(0x34a)]=Window_SkillList[_0x20428a(0x299)][_0x20428a(0x38e)],Window_SkillList['prototype'][_0x20428a(0x38e)]=function(_0x2c676d){const _0x4dbe80=_0x20428a,_0x2d5fb9=this[_0x4dbe80(0x482)](_0x2c676d),_0x390f7d=_0x2d5fb9[_0x4dbe80(0x498)];if(_0x2d5fb9)this['alterSkillName'](_0x2d5fb9);VisuMZ['SkillsStatesCore'][_0x4dbe80(0x34a)][_0x4dbe80(0x30b)](this,_0x2c676d);if(_0x2d5fb9)_0x2d5fb9[_0x4dbe80(0x498)]=_0x390f7d;},Window_SkillList[_0x20428a(0x299)][_0x20428a(0x21d)]=function(_0x527ad1){const _0x245e9b=_0x20428a;if(_0x527ad1&&_0x527ad1[_0x245e9b(0x425)][_0x245e9b(0x3b5)](/<LIST NAME:[ ](.*)>/i)){_0x527ad1[_0x245e9b(0x498)]=String(RegExp['$1'])['trim']();for(;;){if(_0x527ad1[_0x245e9b(0x498)][_0x245e9b(0x3b5)](/\\V\[(\d+)\]/gi)){if(_0x245e9b(0x3cf)!==_0x245e9b(0x3ff))_0x527ad1[_0x245e9b(0x498)]=_0x527ad1[_0x245e9b(0x498)][_0x245e9b(0x28a)](/\\V\[(\d+)\]/gi,(_0x3a67f7,_0x59a057)=>$gameVariables[_0x245e9b(0x47c)](parseInt(_0x59a057)));else return _0x210f5e[_0x245e9b(0x35c)][_0x245e9b(0x3ea)][_0x245e9b(0x30b)](this);}else break;}}},Window_SkillList['prototype'][_0x20428a(0x367)]=function(_0x5970a9,_0x72f60b,_0x209a56,_0xc676d){const _0x1f8460=_0x20428a;Window_Base[_0x1f8460(0x299)]['drawSkillCost'][_0x1f8460(0x30b)](this,this[_0x1f8460(0x4cc)],_0x5970a9,_0x72f60b,_0x209a56,_0xc676d);},Window_SkillList[_0x20428a(0x299)][_0x20428a(0x277)]=function(_0x2b505b){const _0x5ea085=_0x20428a;this[_0x5ea085(0x45e)]=_0x2b505b,this[_0x5ea085(0x260)]();},VisuMZ[_0x20428a(0x35c)]['Window_SkillList_updateHelp']=Window_SkillList[_0x20428a(0x299)][_0x20428a(0x232)],Window_SkillList[_0x20428a(0x299)]['updateHelp']=function(){const _0x40e782=_0x20428a;VisuMZ[_0x40e782(0x35c)]['Window_SkillList_updateHelp'][_0x40e782(0x30b)](this);if(this[_0x40e782(0x45e)]&&this[_0x40e782(0x45e)]['constructor']===Window_ShopStatus){if(_0x40e782(0x39b)!==_0x40e782(0x39b))for(_0x3befe1 of _0xb76d36['SkillsStatesCore'][_0x40e782(0x47b)][_0x40e782(0x267)]){const _0x2f989e=_0x389b16['CalcJS'][_0x40e782(0x30b)](this,_0x161c2f);_0x1f58a2[_0x40e782(0x22d)][_0x40e782(0x30b)](this,_0x5db458,_0x2f989e);}else this['_statusWindow'][_0x40e782(0x37b)](this[_0x40e782(0x298)]());}};