//=============================================================================
// VisuStella MZ - Weapon Unleash
// VisuMZ_4_WeaponUnleash.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_WeaponUnleash = true;

var VisuMZ = VisuMZ || {};
VisuMZ.WeaponUnleash = VisuMZ.WeaponUnleash || {};
VisuMZ.WeaponUnleash.version = 1.00;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.00] [WeaponUnleash]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Weapon_Unleash_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Weapon Unleash plugin lets you give battlers a chance to perform a skill
 * that's different from the usual Attack or Guard action they have. Unleashes
 * work off a success rate system, meaning they can but not always occur.
 *
 * In addition to Unleashes, replacements for the default Attack and Guard
 * actions also available through this plugin. Unlike Unleashes, replacements
 * are always present. Though, if an Unleash manages to succeed, they will take
 * over the replacement skill.
 *
 * Each of these features can help alleviate the monotony of using the same
 * commands over and over throughout the game, giving more life to the battle
 * system and keeping it fresh and interesting.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Weapon Unleashes allow Attack commands to perform a different skill at a
 *   percentile chance.
 * * Guard Unleashes, in addition, allow Guard commands to perform a different
 *   skill at a percentile chance.
 * * On the other hand, Replace Attack and Replace Guard traits will straight
 *   up replace the default Attack and Guard commands respectively.
 * * If an Unleash succeeds, it will override the replacement skills.
 * * Add JavaScript effects that run upon Unleash triggers.
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
 * Understanding Weapon Unleashes and Guard Unleashes
 * ============================================================================
 * 
 * If a battler (actor or enemy) has an associated Weapon or Guard Unleash
 * notetag applied to itself (either directly, states, skills, or equipment), 
 * then it has a percent chance of performing an Unleash instead.
 * 
 * The Attack command can trigger Weapon Unleashes.
 * 
 * The Guard command can trigger Guard Unleashes.
 * 
 * In order for an Unleash to trigger, the battler must be able to use the
 * skill normally. This means if the Unleash skill costs MP to use and the
 * battler does not have enough MP, then the Unleash skill will not be
 * performed. Likewise, if the Unleash skill is on cooldown, it will not
 * trigger either.
 * 
 * If a battler has multiple Weapon or Guard Unleash traits, the game will go
 * through each trait one by one, taking whichever Unleash succeeds first.
 * 
 * When an Unleash triggers, if the Plugin Parameter settings allow for it,
 * then an animation will play (if Core Engine is installed) and a text popup
 * will be shown (if Battle Core is installed). At this point, any JavaScript
 * effects that trigger upon Unleash will also run, too.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * === Unleash-Related Notetags ===
 *
 * The following notetags are related to Unleashes, which have a percent chance
 * of trigger upon selecting "Attack" or "Guard" commands in-battle.
 *
 * ---
 *
 * <Weapon Unleash id: x%>
 * <Weapon Unleash name: x%>
 *
 * - Used for: Actor, Class, Skill, Weapon, Armor, Enemy, State Notetags
 * - Gives this object a trait that allows the affiliated battler a chance to
 *   perform an action other than "Attack" when selected.
 * - Replace 'id' with either the skill's ID or name you wish for the "Attack"
 *   command to have a chance of activating.
 * - Replace 'x' with a number representing the percentile chance to activate
 *   the Unleash skill.
 * - If a battler has multiple Weapon Unleash traits, the game will go through
 *   each trait one by one, taking whichever Unleash skill succeeds first.
 *
 * ---
 *
 * <Guard Unleash id: x%>
 * <Guard Unleash name: x%>
 *
 * - Used for: Actor, Class, Skill, Weapon, Armor, Enemy, State Notetags
 * - Gives this object a trait that allows the affiliated battler a chance to
 *   perform an action other than "Guard" when selected.
 * - Replace 'id' with either the skill's ID or name you wish for the "Guard"
 *   command to have a chance of activating.
 * - Replace 'x' with a number representing the percentile chance to activate
 *   the Unleash skill.
 * - If a battler has multiple Guard Unleash traits, the game will go through
 *   each trait one by one, taking whichever Unleash skill succeeds first.
 *
 * ---
 *
 * <Weapon Unleash: +x%>
 * <Weapon Unleash: -x%>
 *
 * - Used for: Actor, Class, Skill, Weapon, Armor, Enemy, State Notetags
 * - Raises/Lowers the activation chance of all Weapon Unleashes by x%.
 * - Replace 'x' with a number representing the additive increase/decrease of
 *   all Weapon Unleash success rates.
 *
 * ---
 *
 * <Weapon Unleash id: +x%>
 * <Weapon Unleash id: -x%>
 *
 * - Used for: Actor, Class, Skill, Weapon, Armor, Enemy, State Notetags
 * - Raises/Lowers the activation chance of the listed Weapon Unleash by x%.
 * - Replace 'id' with either the skill's ID or name you wish to increase the
 *   Weapon Unleash success rate for.
 * - Replace 'x' with a number representing the additive increase/decrease of
 *   the specified Weapon Unleash success rates.
 *
 * ---
 *
 * <Guard Unleash: +x%>
 * <Guard Unleash: -x%>
 *
 * - Used for: Actor, Class, Skill, Weapon, Armor, Enemy, State Notetags
 * - Raises/Lowers the activation chance of all Guard Unleashes by x%.
 * - Replace 'x' with a number representing the additive increase/decrease of
 *   all Guard Unleash success rates.
 *
 * ---
 *
 * <Guard Unleash id: +x%>
 * <Guard Unleash id: -x%>
 *
 * - Used for: Actor, Class, Skill, Weapon, Armor, Enemy, State Notetags
 * - Raises/Lowers the activation chance of the listed Guard Unleash by x%.
 * - Replace 'id' with either the skill's ID or name you wish to increase the
 *   Guard Unleash success rate for.
 * - Replace 'x' with a number representing the additive increase/decrease of
 *   the specified Guard Unleash success rates.
 *
 * ---
 *
 * === JavaScript Notetags: Unleash-Related ===
 *
 * The following notetags are made for users with JavaScript knowledge to
 * determine which Unleash skill will be used (if at all).
 *
 * ---
 *
 * <JS Weapon Unleash>
 *  code
 *  code
 *  id = code;
 * </JS Weapon Unleash>
 *
 * - Used for: Actor, Class, Skill, Weapon, Armor, Enemy, State Notetags
 * - Determines the Weapon Unleash skill ID to use.
 * - Replace 'code' with JavaScript code to determine the skill ID to use.
 * - The 'user' is the battler who is attempting to unleash the skill.
 * - The 'id' variable is the skill ID that the character will use for the
 *   "Weapon Unleash".
 * - Hint: The Unleashes occur at a 100% success rate. If you wish to make a
 *   percent chance success rate, check for a random number, and make it use
 *   the desired skill ID if it passes, and the default attack skill ID if it
 *   does not pass.
 *
 * ---
 *
 * <JS Guard Unleash>
 *  code
 *  code
 *  id = code;
 * </JS Guard Unleash>
 *
 * - Used for: Actor, Class, Skill, Weapon, Armor, Enemy, State Notetags
 * - Determines the Guard Unleash skill ID to use.
 * - Replace 'code' with JavaScript code to determine the skill ID to use.
 * - The 'user' is the battler who is attempting to unleash the skill.
 * - The 'id' variable is the skill ID that the character will use for the
 *   "Guard Unleash".
 * - Hint: The Unleashes occur at a 100% success rate. If you wish to make a
 *   percent chance success rate, check for a random number, and make it use
 *   the desired skill ID if it passes, and the default attack skill ID if it
 *   does not pass.
 *
 * ---
 * 
 * <JS On Unleash>
 *  code
 *  code
 *  code
 * </JS On Unleash>
 * 
 * - Used for: Actor, Class, Skill, Weapon, Armor, Enemy, State Notetags
 * - This code runs when any kind of Unleash, Weapon or Guard, triggers.
 * - Runs 'code' with JavaScript code to determine any effects that occur.
 * - The 'user' is the battler who is currently using the unleash skill.
 * - The 'id' variable is the skill ID being unleashed.
 * - The 'skill' variable is the skill being unleashed.
 * 
 * ---
 * 
 * <JS On Weapon Unleash>
 *  code
 *  code
 *  code
 * </JS On Weapon Unleash>
 * 
 * - Used for: Actor, Class, Skill, Weapon, Armor, Enemy, State Notetags
 * - This code runs when a Weapon Unleash triggers.
 * - Runs 'code' with JavaScript code to determine any effects that occur.
 * - The 'user' is the battler who is currently using the unleash skill.
 * - The 'id' variable is the skill ID being unleashed.
 * - The 'skill' variable is the skill being unleashed.
 * 
 * ---
 * 
 * <JS On Guard Unleash>
 *  code
 *  code
 *  code
 * </JS On Guard Unleash>
 * 
 * - Used for: Actor, Class, Skill, Weapon, Armor, Enemy, State Notetags
 * - This code runs when a Guard Unleash triggers.
 * - Runs 'code' with JavaScript code to determine any effects that occur.
 * - The 'user' is the battler who is currently using the unleash skill.
 * - The 'id' variable is the skill ID being unleashed.
 * - The 'skill' variable is the skill being unleashed.
 * 
 * ---
 *
 * === Replace-Related Notetags ===
 *
 * Skill replacement traits will replace the "Attack" and "Guard" commands in
 * battle with other skills. They will always be replaced unless an Unleash
 * successfully triggers and overrides them.
 *
 * ---
 *
 * <Replace Attack: id>
 *
 * - Used for: Actor, Class, Skill, Weapon, Armor, Enemy, State Notetags
 * - Replaces the battler's Attack command in battle with a different skill.
 * - Replace 'id' with the skill's ID or name you wish to replace the battler's
 *   Attack command with.
 * - If a Weapon Unleash occurs, the Weapon Unleash will take priority over the
 *   Replace Attack skill.
 * - If a battler has multiple Replace Attack traits, the game will go through
 *   each trait one by one, taking whichever replaced skill is found first.
 *
 * ---
 *
 * <Replace Guard: id>
 *
 * - Used for: Actor, Class, Skill, Weapon, Armor, Enemy, State Notetags
 * - Replaces the battler's Guard command in battle with a different skill.
 * - Replace 'id' with the skill's ID or name you wish to replace the battler's
 *   Guard command with.
 * - If a Weapon Unleash occurs, the Weapon Unleash will take priority over the
 *   Replace Guard skill.
 * - If a battler has multiple Replace Guard traits, the game will go through
 *   each trait one by one, taking whichever replaced skill is found first.
 *
 * ---
 *
 * === JavaScript Notetags: Replace-Related ===
 *
 * The following notetags are made for users with JavaScript knowledge to
 * determine which replacement skill will be used (if at all).
 *
 * ---
 *
 * <JS Replace Attack>
 *  code
 *  code
 *  id = code;
 * </JS Replace Attack>
 *
 * - Used for: Actor, Class, Skill, Weapon, Armor, Enemy, State Notetags
 * - Determines the Replace Attack skill ID to use.
 * - Replace 'code' with JavaScript code to determine the skill ID to use.
 * - The 'id' variable is the skill ID that the character will use for the
 *   attack replacement.
 *
 * ---
 *
 * <JS Replace Guard>
 *  code
 *  code
 *  id = code;
 * </JS Replace Guard>
 *
 * - Used for: Actor, Class, Skill, Weapon, Armor, Enemy, State Notetags
 * - Determines the Replace Guard skill ID to use.
 * - Replace 'code' with JavaScript code to determine the skill ID to use.
 * - The 'id' variable is the skill ID that the character will use for the
 *   attack replacement.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Weapon Unleash Settings
 * ============================================================================
 *
 * Special effects regarding Weapon Unleashes. These include animations and
 * text popups that appear visually along with mechanical effects that can be
 * extended upon with JavaScript.
 *
 * ---
 *
 * Animation
 * 
 *   Animation ID:
 *   - Play this animation when the effect activates.
 *   - Requires VisuMZ_0_CoreEngine.
 * 
 *   Mirror Animation:
 *   - Mirror the effect animation?
 *   - Requires VisuMZ_0_CoreEngine.
 * 
 *   Mute Animation:
 *   - Mute the effect animation?
 *   - Requires VisuMZ_0_CoreEngine.
 *
 * ---
 *
 * Popups
 * 
 *   Text:
 *   - Text displayed upon the effect activating.
 *   - Requires VisuMZ_1_BattleCore.
 * 
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Flash Color:
 *   - Adjust the popup's flash color.
 *   - Format: [red, green, blue, alpha]
 * 
 *   Flash Duration:
 *   - What is the frame duration of the flash effect?
 *
 * ---
 *
 * JavaScript
 * 
 *   JS: On Unleash:
 *   - Code ran when a Weapon Unleash triggers.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Guard Unleash Settings
 * ============================================================================
 *
 * Special effects regarding Guard Unleashes. These include animations and
 * text popups that appear visually along with mechanical effects that can be
 * extended upon with JavaScript.
 *
 * ---
 *
 * Animation
 * 
 *   Animation ID:
 *   - Play this animation when the effect activates.
 *   - Requires VisuMZ_0_CoreEngine.
 * 
 *   Mirror Animation:
 *   - Mirror the effect animation?
 *   - Requires VisuMZ_0_CoreEngine.
 * 
 *   Mute Animation:
 *   - Mute the effect animation?
 *   - Requires VisuMZ_0_CoreEngine.
 *
 * ---
 *
 * Popups
 * 
 *   Text:
 *   - Text displayed upon the effect activating.
 *   - Requires VisuMZ_1_BattleCore.
 * 
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Flash Color:
 *   - Adjust the popup's flash color.
 *   - Format: [red, green, blue, alpha]
 * 
 *   Flash Duration:
 *   - What is the frame duration of the flash effect?
 *
 * ---
 *
 * JavaScript
 * 
 *   JS: On Unleash:
 *   - Code ran when a Guard Unleash triggers.
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
 * Version 1.00: September 25, 2020
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
 * @param WeaponUnleash
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Weapon:struct
 * @text Weapon Unleash Settings
 * @type struct<Weapon>
 * @desc Special effects regarding Weapon Unleashes.
 * @default {"Animation":"","AnimationID:num":"12","Mirror:eval":"false","Mute:eval":"false","Popups":"","PopupText:str":"UNLEASH!","TextColor:str":"0","FlashColor:eval":"[255, 0, 0, 160]","FlashDuration:num":"60","JavaScript":"","OnUnleashJS:func":"\"// Declare Constants\\nconst user = arguments[0];\\nconst skillID = arguments[1];\\nconst skill = $dataSkills[skillID];\\n\\n// Perform Action\\n\""}
 *
 * @param Guard:struct
 * @text Guard Unleash Settings
 * @type struct<Guard>
 * @desc Special effects regarding Guard Unleashes.
 * @default {"Animation":"","AnimationID:num":"49","Mirror:eval":"false","Mute:eval":"false","Popups":"","PopupText:str":"UNLEASH!","TextColor:str":"0","FlashColor:eval":"[0, 255, 0, 160]","FlashDuration:num":"60","JavaScript":"","OnUnleashJS:func":"\"// Declare Constants\\nconst user = arguments[0];\\nconst skillID = arguments[1];\\nconst skill = $dataSkills[skillID];\\n\\n// Perform Action\\n\""}
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
 * Weapon Unleash Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Weapon:
 *
 * @param Animation
 *
 * @param AnimationID:num
 * @text Animation ID
 * @parent Animation
 * @type animation
 * @desc Play this animation when the effect activates.
 * Requires VisuMZ_0_CoreEngine.
 * @default 12
 *
 * @param Mirror:eval
 * @text Mirror Animation
 * @parent Animation
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the effect animation?
 * Requires VisuMZ_0_CoreEngine.
 * @default false
 *
 * @param Mute:eval
 * @text Mute Animation
 * @parent Animation
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the effect animation?
 * Requires VisuMZ_0_CoreEngine.
 * @default false
 *
 * @param Popups
 *
 * @param PopupText:str
 * @text Text
 * @parent Popups
 * @desc Text displayed upon the effect activating.
 * Requires VisuMZ_1_BattleCore.
 * @default UNLEASH!
 *
 * @param TextColor:str
 * @text Text Color
 * @parent Popups
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param FlashColor:eval
 * @text Flash Color
 * @parent Popups
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 0, 0, 160]
 * 
 * @param FlashDuration:num
 * @text Flash Duration
 * @parent Popups
 * @type Number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 * @param JavaScript
 *
 * @param OnUnleashJS:func
 * @text JS: On Unleash
 * @parent JavaScript
 * @type note
 * @desc Code ran when a Weapon Unleash triggers.
 * @default "// Declare Constants\nconst user = arguments[0];\nconst skillID = arguments[1];\nconst skill = $dataSkills[skillID];\n\n// Perform Action\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Guard Unleash Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Guard:
 *
 * @param Animation
 *
 * @param AnimationID:num
 * @text Animation ID
 * @parent Animation
 * @type animation
 * @desc Play this animation when the effect activates.
 * Requires VisuMZ_0_CoreEngine.
 * @default 49
 *
 * @param Mirror:eval
 * @text Mirror Animation
 * @parent Animation
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the effect animation?
 * Requires VisuMZ_0_CoreEngine.
 * @default false
 *
 * @param Mute:eval
 * @text Mute Animation
 * @parent Animation
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the effect animation?
 * Requires VisuMZ_0_CoreEngine.
 * @default false
 *
 * @param Popups
 *
 * @param PopupText:str
 * @text Text
 * @parent Popups
 * @desc Text displayed upon the effect activating.
 * Requires VisuMZ_1_BattleCore.
 * @default UNLEASH!
 *
 * @param TextColor:str
 * @text Text Color
 * @parent Popups
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param FlashColor:eval
 * @text Flash Color
 * @parent Popups
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [0, 255, 0, 160]
 * 
 * @param FlashDuration:num
 * @text Flash Duration
 * @parent Popups
 * @type Number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 * @param JavaScript
 *
 * @param OnUnleashJS:func
 * @text JS: On Unleash
 * @parent JavaScript
 * @type note
 * @desc Code ran when a Guard Unleash triggers.
 * @default "// Declare Constants\nconst user = arguments[0];\nconst skillID = arguments[1];\nconst skill = $dataSkills[skillID];\n\n// Perform Action\n"
 *
 */
//=============================================================================

const _0x1fa9=['checkCacheKey','Msxuz','JSON','isGuard','Enemy-%1-%2','cfMKg','Settings','initMembers','trim','subject','meetUnleashConditions','attackSkillId','AnimationMirror','Tiwzg','process_VisuMZ_WeaponUnleash_Notetags','format','IzfdO','YJQRC','createOnUnleashJS','FlashColor','checkForGenericUnleashTraits','WEAPON-UNLEASH','Actor-%1-%2','xbkRr','match','name','TextColor','startAction','Game_BattlerBase_initMembers','PzajN','setupTextPopup','WEAPON','ConvertParams','canUse','Scene_Boot_onDatabaseLoaded','getSkillIdWithName','createOnUnleashFuncCode','parameters','createUnleashReplaceJS','LHNdw','Class-%1-%2','_cache','processUnleashProperties','note','onDatabaseLoaded','createUnleashReplaceFuncCode','gRarh','NUM','swMIZ','aZIiZ','exit','Game_BattlerBase_refresh','ARRAYEVAL','clear','includes','call','qLwXw','riOOv','version','VisuMZ_0_CoreEngine','ON-WEAPON-UNLEASH','BmAah','user.attackSkillId()','GUARD-UNLEASH','WeaponUnleash','actions','parse','AnimationID','prototype','concat','_subject','_skillIDs','setSkill','currentAction','GUARD','guardSkillId','isAttack','ARRAYSTRUCT','ON-UNLEASH','WYvSg','setEnemyAction','status','skillId','AnimationMute','setup','max','ON-%1-UNLEASH','getAttackSkillId','RiKLq','Game_BattlerBase_attackSkillId','Guard','skills','gopIv','SyENt','PopupText','aZria','State-%1-%2','REPLACE-GUARD','traitObjects','filter','description','enemy','zJYqh','checkForWeaponUnleash','toUpperCase','_checking_VisuMZ_UnleashNotetags','createKeyJS','return\x200','checkObjectForUnleashTraits','ARRAYJSON','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','oxIPQ','Weapon','VisuMZ_1_BattleCore','QROuX','\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Arguments\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20id\x20=\x20arguments[1];\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20skill\x20=\x20$dataSkills[id];\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20item\x20=\x20skill;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20','OnUnleashJS','FlashDuration','ARRAYSTR','MsJsV','onUnleashJS','STR','XLULA','random','getUnleashSuccessRateBonus','map','processUnleashNotetags','TJbmH','BattleManager_startAction','user.guardSkillId()','Game_BattlerBase_guardSkillId','STRUCT','Window_ActorCommand_setup','push','refresh','item','requestFauxAnimation','RsnwV','checkForJSUnleashTraits','applyUnleashSkill','getGuardSkillId','ARRAYNUM','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','onUnleash','setAttack','FBKdT','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','lSmqN','REPLACE-ATTACK','ON-GUARD-UNLEASH'];(function(_0x394b7b,_0x1fa9ff){const _0x2cf922=function(_0x351ec2){while(--_0x351ec2){_0x394b7b['push'](_0x394b7b['shift']());}};_0x2cf922(++_0x1fa9ff);}(_0x1fa9,0x154));const _0x2cf9=function(_0x394b7b,_0x1fa9ff){_0x394b7b=_0x394b7b-0x0;let _0x2cf922=_0x1fa9[_0x394b7b];return _0x2cf922;};var label=_0x2cf9('0x18'),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x2cf9('0x3b')](function(_0x56c789){return _0x56c789[_0x2cf9('0x29')]&&_0x56c789[_0x2cf9('0x3c')][_0x2cf9('0xe')]('['+label+']');})[0x0];VisuMZ[label][_0x2cf9('0x74')]=VisuMZ[label][_0x2cf9('0x74')]||{},VisuMZ[_0x2cf9('0x8e')]=function(_0x21b0dc,_0x46ffbc){for(const _0x30aa20 in _0x46ffbc){if(_0x30aa20[_0x2cf9('0x86')](/(.*):(.*)/i)){if(_0x2cf9('0x69')==='FBKdT'){const _0x63f598=String(RegExp['$1']),_0x3e8709=String(RegExp['$2'])[_0x2cf9('0x40')]()[_0x2cf9('0x76')]();let _0x464ba0,_0x48d4a0,_0x3fcabc;switch(_0x3e8709){case _0x2cf9('0x7'):_0x464ba0=_0x46ffbc[_0x30aa20]!==''?Number(_0x46ffbc[_0x30aa20]):0x0;break;case _0x2cf9('0x65'):_0x48d4a0=_0x46ffbc[_0x30aa20]!==''?JSON[_0x2cf9('0x1a')](_0x46ffbc[_0x30aa20]):[],_0x464ba0=_0x48d4a0[_0x2cf9('0x55')](_0x763aac=>Number(_0x763aac));break;case'EVAL':_0x464ba0=_0x46ffbc[_0x30aa20]!==''?eval(_0x46ffbc[_0x30aa20]):null;break;case _0x2cf9('0xc'):_0x48d4a0=_0x46ffbc[_0x30aa20]!==''?JSON[_0x2cf9('0x1a')](_0x46ffbc[_0x30aa20]):[],_0x464ba0=_0x48d4a0[_0x2cf9('0x55')](_0x34dd85=>eval(_0x34dd85));break;case _0x2cf9('0x70'):_0x464ba0=_0x46ffbc[_0x30aa20]!==''?JSON[_0x2cf9('0x1a')](_0x46ffbc[_0x30aa20]):'';break;case _0x2cf9('0x45'):_0x48d4a0=_0x46ffbc[_0x30aa20]!==''?JSON[_0x2cf9('0x1a')](_0x46ffbc[_0x30aa20]):[],_0x464ba0=_0x48d4a0['map'](_0xbe737e=>JSON[_0x2cf9('0x1a')](_0xbe737e));break;case'FUNC':_0x464ba0=_0x46ffbc[_0x30aa20]!==''?new Function(JSON[_0x2cf9('0x1a')](_0x46ffbc[_0x30aa20])):new Function(_0x2cf9('0x43'));break;case'ARRAYFUNC':_0x48d4a0=_0x46ffbc[_0x30aa20]!==''?JSON[_0x2cf9('0x1a')](_0x46ffbc[_0x30aa20]):[],_0x464ba0=_0x48d4a0[_0x2cf9('0x55')](_0x1dbfbf=>new Function(JSON['parse'](_0x1dbfbf)));break;case _0x2cf9('0x51'):_0x464ba0=_0x46ffbc[_0x30aa20]!==''?String(_0x46ffbc[_0x30aa20]):'';break;case _0x2cf9('0x4e'):_0x48d4a0=_0x46ffbc[_0x30aa20]!==''?JSON[_0x2cf9('0x1a')](_0x46ffbc[_0x30aa20]):[],_0x464ba0=_0x48d4a0[_0x2cf9('0x55')](_0x137c61=>String(_0x137c61));break;case _0x2cf9('0x5b'):_0x3fcabc=_0x46ffbc[_0x30aa20]!==''?JSON[_0x2cf9('0x1a')](_0x46ffbc[_0x30aa20]):{},_0x464ba0=VisuMZ[_0x2cf9('0x8e')]({},_0x3fcabc);break;case _0x2cf9('0x25'):_0x48d4a0=_0x46ffbc[_0x30aa20]!==''?JSON[_0x2cf9('0x1a')](_0x46ffbc[_0x30aa20]):[],_0x464ba0=_0x48d4a0[_0x2cf9('0x55')](_0x45c4fc=>VisuMZ[_0x2cf9('0x8e')]({},JSON[_0x2cf9('0x1a')](_0x45c4fc)));break;default:continue;}_0x21b0dc[_0x63f598]=_0x464ba0;}else{function _0x543c7e(){const _0x19af22=_0x13f0d9[_0x2cf9('0x18')]['JS'][_0x4892f3][_0x2cf9('0xf')](this,this[_0x2cf9('0x77')](),_0x2ff612);if(this[_0x2cf9('0x63')](_0x380841,_0x19af22,0x1))return!![];}}}}return _0x21b0dc;},(_0x31e684=>{const _0x83e5cb=_0x31e684[_0x2cf9('0x87')];for(const _0x4edd85 of dependencies){if(!Imported[_0x4edd85]){alert(_0x2cf9('0x6a')[_0x2cf9('0x7d')](_0x83e5cb,_0x4edd85)),SceneManager[_0x2cf9('0xa')]();break;}}const _0x45c392=_0x31e684[_0x2cf9('0x3c')];if(_0x45c392[_0x2cf9('0x86')](/\[Version[ ](.*?)\]/i)){const _0x1a1522=Number(RegExp['$1']);if(_0x1a1522!==VisuMZ[label][_0x2cf9('0x12')]){if(_0x2cf9('0x57')!==_0x2cf9('0x57')){function _0x15d7ca(){const _0x4def61=_0x27cd62['getSkillIdWithName'](_0x354a21['$1'])||_0x55ec14(_0x518d46['$1']);_0x4def61===_0x1a04fb&&_0x1b0b91[_0x4def61]&&(_0x484f4d+=_0x1ffacd(_0x18ed3a['$2'])*0.01);}}else alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x2cf9('0x7d')](_0x83e5cb,_0x1a1522)),SceneManager[_0x2cf9('0xa')]();}}if(_0x45c392[_0x2cf9('0x86')](/\[Tier[ ](\d+)\]/i)){const _0x12a1fe=Number(RegExp['$1']);_0x12a1fe<tier?(alert(_0x2cf9('0x66')[_0x2cf9('0x7d')](_0x83e5cb,_0x12a1fe,tier)),SceneManager[_0x2cf9('0xa')]()):tier=Math[_0x2cf9('0x2d')](_0x12a1fe,tier);}VisuMZ[_0x2cf9('0x8e')](VisuMZ[label][_0x2cf9('0x74')],_0x31e684[_0x2cf9('0x93')]);})(pluginData),VisuMZ[_0x2cf9('0x18')][_0x2cf9('0x90')]=Scene_Boot[_0x2cf9('0x1c')][_0x2cf9('0x4')],Scene_Boot[_0x2cf9('0x1c')][_0x2cf9('0x4')]=function(){VisuMZ[_0x2cf9('0x18')][_0x2cf9('0x90')][_0x2cf9('0xf')](this),this[_0x2cf9('0x7c')]();},Scene_Boot['prototype'][_0x2cf9('0x7c')]=function(){const _0x2c3fa7=$dataActors['concat']($dataClasses,$dataSkills,$dataWeapons,$dataArmors,$dataEnemies,$dataStates);for(const _0x478027 of _0x2c3fa7){if(_0x2cf9('0x27')===_0x2cf9('0x3e')){function _0x45e39a(){const _0x2e9403=_0x136593[_0x2cf9('0x91')](_0x3eb3f2['$1'])||_0x248ea7(_0x352487['$1']);if(_0xbc34d8[_0x2e9403])return _0x2e9403;}}else{if(!_0x478027)continue;if(_0x478027[_0x2cf9('0x3')][_0x2cf9('0x86')](/<JS WEAPON UNLEASH>\s*([\s\S]*)\s*<\/JS WEAPON UNLEASH>/i)){if(_0x2cf9('0x30')===_0x2cf9('0x30'))VisuMZ[_0x2cf9('0x18')][_0x2cf9('0x94')](_0x478027,_0x2cf9('0x83'),RegExp['$1']);else{function _0x166d60(){this[_0x2cf9('0x1')]={},_0xd208b7[_0x2cf9('0x18')][_0x2cf9('0xb')]['call'](this);}}}_0x478027[_0x2cf9('0x3')][_0x2cf9('0x86')](/<JS GUARD UNLEASH>\s*([\s\S]*)\s*<\/JS GUARD UNLEASH>/i)&&VisuMZ[_0x2cf9('0x18')][_0x2cf9('0x94')](_0x478027,'GUARD-UNLEASH',RegExp['$1']);if(_0x478027['note'][_0x2cf9('0x86')](/<JS REPLACE ATTACK>\s*([\s\S]*)\s*<\/JS REPLACE ATTACK>/i)){if('lSmqN'!==_0x2cf9('0x6b')){function _0x295343(){this[_0x2cf9('0x67')](_0x2cf9('0x32'),_0x98c87c);}}else VisuMZ[_0x2cf9('0x18')][_0x2cf9('0x94')](_0x478027,_0x2cf9('0x6c'),RegExp['$1']);}if(_0x478027[_0x2cf9('0x3')]['match'](/<JS REPLACE GUARD>\s*([\s\S]*)\s*<\/JS REPLACE GUARD>/i)){if(_0x2cf9('0x6f')!==_0x2cf9('0x6f')){function _0x33e45c(){const _0x24bc47=_0x284841[_0x2cf9('0x36')],_0x44ab42={'textColor':_0x35f90e[_0x2cf9('0x88')]||0x0,'flashColor':_0x176128[_0x2cf9('0x81')]||[0x0,0x0,0x0,0x0],'flashDuration':_0x4e3861[_0x2cf9('0x4d')]||0x3c};_0x3a403d[_0x2cf9('0x8c')](_0x24bc47,_0x44ab42);}}else VisuMZ[_0x2cf9('0x18')][_0x2cf9('0x94')](_0x478027,_0x2cf9('0x39'),RegExp['$1']);}_0x478027[_0x2cf9('0x3')][_0x2cf9('0x86')](/<JS ON UNLEASH>\s*([\s\S]*)\s*<\/JS ON UNLEASH>/i)&&VisuMZ[_0x2cf9('0x18')][_0x2cf9('0x80')](_0x478027,_0x2cf9('0x26'),RegExp['$1']);_0x478027['note']['match'](/<JS ON WEAPON UNLEASH>\s*([\s\S]*)\s*<\/JS ON WEAPON UNLEASH>/i)&&VisuMZ[_0x2cf9('0x18')]['createOnUnleashJS'](_0x478027,_0x2cf9('0x14'),RegExp['$1']);if(_0x478027[_0x2cf9('0x3')][_0x2cf9('0x86')](/<JS ON GUARD UNLEASH>\s*([\s\S]*)\s*<\/JS ON GUARD UNLEASH>/i)){if('sDiZD'==='elXqa'){function _0x37b5e7(){this['setGuard']();}}else VisuMZ[_0x2cf9('0x18')][_0x2cf9('0x80')](_0x478027,'ON-GUARD-UNLEASH',RegExp['$1']);}}}},VisuMZ['WeaponUnleash']['JS']={},VisuMZ[_0x2cf9('0x18')][_0x2cf9('0x94')]=function(_0x275b0d,_0xa6d4cb,_0x107572){const _0x515f6f=VisuMZ['WeaponUnleash'][_0x2cf9('0x5')](_0xa6d4cb,_0x107572),_0x171937=VisuMZ['WeaponUnleash']['createKeyJS'](_0x275b0d,_0xa6d4cb);VisuMZ['WeaponUnleash']['JS'][_0x171937]=new Function(_0x515f6f);},VisuMZ[_0x2cf9('0x18')]['createUnleashReplaceFuncCode']=function(_0x439905,_0x52267a){let _0x33029d=_0x2cf9('0x16');switch(_0x439905[_0x2cf9('0x40')]()[_0x2cf9('0x76')]()){case _0x2cf9('0x83'):case'REPLACE-ATTACK':_0x33029d='user.attackSkillId()';break;case'GUARD-UNLEASH':case _0x2cf9('0x39'):_0x33029d=_0x2cf9('0x59');break;}return'\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Arguments\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20item\x20=\x20arguments[1];\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20skill\x20=\x20arguments[1];\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20let\x20id\x20=\x20%2;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20id;\x0a\x20\x20\x20\x20'[_0x2cf9('0x7d')](_0x52267a,_0x33029d);},VisuMZ[_0x2cf9('0x18')][_0x2cf9('0x80')]=function(_0x431335,_0x3cac08,_0x9f55bc){const _0x3d332e=VisuMZ[_0x2cf9('0x18')][_0x2cf9('0x92')](_0x3cac08,_0x9f55bc),_0x18e1cd=VisuMZ[_0x2cf9('0x18')][_0x2cf9('0x42')](_0x431335,_0x3cac08);VisuMZ[_0x2cf9('0x18')]['JS'][_0x18e1cd]=new Function(_0x3d332e);},VisuMZ[_0x2cf9('0x18')][_0x2cf9('0x92')]=function(_0x997fcc,_0x27ab2c){return _0x2cf9('0x4b')[_0x2cf9('0x7d')](_0x27ab2c);},VisuMZ[_0x2cf9('0x18')]['createKeyJS']=function(_0x36d6e8,_0x1c57cd){let _0x5a3a41='';if($dataActors[_0x2cf9('0xe')](_0x36d6e8))_0x5a3a41=_0x2cf9('0x84')[_0x2cf9('0x7d')](_0x36d6e8['id'],_0x1c57cd);if($dataClasses[_0x2cf9('0xe')](_0x36d6e8))_0x5a3a41=_0x2cf9('0x0')['format'](_0x36d6e8['id'],_0x1c57cd);if($dataSkills['includes'](_0x36d6e8))_0x5a3a41='Skill-%1-%2'[_0x2cf9('0x7d')](_0x36d6e8['id'],_0x1c57cd);if($dataItems[_0x2cf9('0xe')](_0x36d6e8))_0x5a3a41='Item-%1-%2'[_0x2cf9('0x7d')](_0x36d6e8['id'],_0x1c57cd);if($dataWeapons[_0x2cf9('0xe')](_0x36d6e8))_0x5a3a41='Weapon-%1-%2'[_0x2cf9('0x7d')](_0x36d6e8['id'],_0x1c57cd);if($dataArmors[_0x2cf9('0xe')](_0x36d6e8))_0x5a3a41='Armor-%1-%2'[_0x2cf9('0x7d')](_0x36d6e8['id'],_0x1c57cd);if($dataEnemies[_0x2cf9('0xe')](_0x36d6e8))_0x5a3a41=_0x2cf9('0x72')['format'](_0x36d6e8['id'],_0x1c57cd);if($dataStates[_0x2cf9('0xe')](_0x36d6e8))_0x5a3a41=_0x2cf9('0x38')[_0x2cf9('0x7d')](_0x36d6e8['id'],_0x1c57cd);return _0x5a3a41;},DataManager[_0x2cf9('0x91')]=function(_0xa9d56f){_0xa9d56f=_0xa9d56f['toUpperCase']()[_0x2cf9('0x76')](),this[_0x2cf9('0x1f')]=this[_0x2cf9('0x1f')]||{};if(this[_0x2cf9('0x1f')][_0xa9d56f])return this['_skillIDs'][_0xa9d56f];for(const _0x241402 of $dataSkills){if(!_0x241402)continue;this['_skillIDs'][_0x241402[_0x2cf9('0x87')][_0x2cf9('0x40')]()[_0x2cf9('0x76')]()]=_0x241402['id'];}return this[_0x2cf9('0x1f')][_0xa9d56f]||0x0;},VisuMZ['WeaponUnleash'][_0x2cf9('0x58')]=BattleManager[_0x2cf9('0x89')],BattleManager['startAction']=function(){this[_0x2cf9('0x3f')](),VisuMZ[_0x2cf9('0x18')][_0x2cf9('0x58')]['call'](this);},BattleManager[_0x2cf9('0x3f')]=function(){const _0x702018=this[_0x2cf9('0x1e')],_0x44adf8=_0x702018[_0x2cf9('0x21')]();if(_0x44adf8)_0x44adf8[_0x2cf9('0x2')]();},Game_Action[_0x2cf9('0x1c')]['processUnleashProperties']=function(){if(!this[_0x2cf9('0x77')]())return;if(!this[_0x2cf9('0x5f')]())return;if(this[_0x2cf9('0x24')]())this[_0x2cf9('0x56')]('WEAPON');else this[_0x2cf9('0x71')]()&&this['processUnleashNotetags'](_0x2cf9('0x22'));},Game_Action['prototype']['processUnleashNotetags']=function(_0x1a4d7b){const _0xcfe68=this[_0x2cf9('0x77')]()[_0x2cf9('0x3a')]()[_0x2cf9('0x1d')](this[_0x2cf9('0x77')]()[_0x2cf9('0x33')]());for(const _0x453ef6 of _0xcfe68){if(!_0x453ef6)continue;if(this[_0x2cf9('0x44')](_0x1a4d7b,_0x453ef6))break;}},Game_Action[_0x2cf9('0x1c')][_0x2cf9('0x44')]=function(_0x4f712d,_0x1611f6){if(this[_0x2cf9('0x82')](_0x4f712d,_0x1611f6))return!![];if(this[_0x2cf9('0x62')](_0x4f712d,_0x1611f6))return!![];return![];},Game_Action[_0x2cf9('0x1c')][_0x2cf9('0x82')]=function(_0x3f2b97,_0x1e7208){const _0x4aa23e=_0x1e7208[_0x2cf9('0x3')]['match'](/<(.*) UNLEASH (.*):[ ](\d+)([%％])>/gi);if(_0x4aa23e){if(_0x2cf9('0x73')!==_0x2cf9('0x73')){function _0x4b4a37(){_0x51466c=_0x300104[_0x2cf9('0x2d')](_0x28f1a6,_0x2ad0d1);}}else for(const _0x4f7598 of _0x4aa23e){if(_0x4f7598[_0x2cf9('0x86')](/<(.*) UNLEASH (.*):[ ](\d+)([%％])>/i)){if(_0x2cf9('0x7b')!==_0x2cf9('0x7b')){function _0x258c27(){_0x245858[_0x2cf9('0x18')][_0x2cf9('0x94')](_0x3285c0,_0x2cf9('0x17'),_0x1a2b7b['$1']);}}else{const _0x1abcc2=String(RegExp['$1'])[_0x2cf9('0x40')]()[_0x2cf9('0x76')](),_0x1ed8a7=DataManager[_0x2cf9('0x91')](RegExp['$2'])||Number(RegExp['$2']),_0x3e4c13=Number(RegExp['$3'])*0.01;if(_0x1abcc2!==_0x3f2b97)continue;if(this[_0x2cf9('0x63')](_0x3f2b97,_0x1ed8a7,_0x3e4c13))return!![];}}}}return![];},Game_Action[_0x2cf9('0x1c')][_0x2cf9('0x62')]=function(_0x9f9e79,_0x1630ce){const _0x35aa77='%1-UNLEASH'[_0x2cf9('0x7d')](_0x9f9e79['toUpperCase']()['trim']()),_0x27115b=VisuMZ['WeaponUnleash'][_0x2cf9('0x42')](_0x1630ce,_0x35aa77);if(VisuMZ[_0x2cf9('0x18')]['JS'][_0x27115b]){if(_0x2cf9('0x95')==='LHNdw'){const _0x392728=VisuMZ['WeaponUnleash']['JS'][_0x27115b][_0x2cf9('0xf')](this,this[_0x2cf9('0x77')](),_0x1630ce);if(this[_0x2cf9('0x63')](_0x9f9e79,_0x392728,0x1))return!![];}else{function _0xab573e(){_0x30ff14[_0x2cf9('0x18')]['createOnUnleashJS'](_0x467507,_0x2cf9('0x6d'),_0x445935['$1']);}}}return![];},Game_Action[_0x2cf9('0x1c')][_0x2cf9('0x63')]=function(_0x1c1322,_0x18217f,_0xc0aa57){_0xc0aa57+=this['subject']()[_0x2cf9('0x54')](_0x1c1322,_0x18217f);if(!this[_0x2cf9('0x78')](_0x18217f,_0xc0aa57))return![];this[_0x2cf9('0x20')](_0x18217f);if(_0x1c1322===_0x2cf9('0x8d'))this[_0x2cf9('0x67')](_0x2cf9('0x48'),_0x18217f);else{if(_0x1c1322===_0x2cf9('0x22')){if('PzajN'===_0x2cf9('0x8b'))this[_0x2cf9('0x67')](_0x2cf9('0x32'),_0x18217f);else{function _0x5420bc(){const _0x33266c=_0x306d73['getSkillIdWithName'](_0x1ed631['$1'])||_0x2b868f(_0x4e2724['$1']);if(_0x325b5e[_0x33266c])return _0x33266c;}}}}return!![];},Game_Action[_0x2cf9('0x1c')][_0x2cf9('0x78')]=function(_0x46395c,_0x8d4f98){if(Math[_0x2cf9('0x53')]()>_0x8d4f98)return![];const _0x4c23aa=$dataSkills[_0x46395c];if(!_0x4c23aa)return![];if(!this['subject']())return![];if(!this[_0x2cf9('0x77')]()[_0x2cf9('0x8f')](_0x4c23aa))return![];return!![];},Game_Action[_0x2cf9('0x1c')][_0x2cf9('0x67')]=function(_0x257293,_0xa8bd33){const _0x71653d=VisuMZ[_0x2cf9('0x18')]['Settings'][_0x257293];if(!_0x71653d)return;const _0x2f6401=this[_0x2cf9('0x77')]();if(!_0x2f6401)return;if(Imported[_0x2cf9('0x13')]){const _0x53703e=[_0x2f6401],_0x2cd0d8=_0x71653d[_0x2cf9('0x1b')],_0x113c94=_0x71653d['AnimationMirror'],_0x1b8918=_0x71653d[_0x2cf9('0x2b')];$gameTemp[_0x2cf9('0x60')](_0x53703e,_0x2cd0d8,_0x113c94,_0x1b8918);}if(Imported[_0x2cf9('0x49')]){if(_0x2cf9('0x52')!==_0x2cf9('0x37')){const _0x14ad3a=_0x71653d[_0x2cf9('0x36')],_0x427629={'textColor':_0x71653d[_0x2cf9('0x88')]||0x0,'flashColor':_0x71653d['FlashColor']||[0x0,0x0,0x0,0x0],'flashDuration':_0x71653d[_0x2cf9('0x4d')]||0x3c};_0x2f6401['setupTextPopup'](_0x14ad3a,_0x427629);}else{function _0x97ef0a(){this[_0x2cf9('0x1')]={},_0x5757a9['WeaponUnleash'][_0x2cf9('0x8a')][_0x2cf9('0xf')](this);}}}_0x71653d['OnUnleashJS']&&_0x71653d[_0x2cf9('0x4c')][_0x2cf9('0xf')](this,_0x2f6401,_0xa8bd33),_0x2f6401[_0x2cf9('0x50')](_0x257293,_0xa8bd33);},Game_Action[_0x2cf9('0x1c')][_0x2cf9('0x28')]=function(_0x487304){if(_0x487304){if(_0x2cf9('0x9')===_0x2cf9('0x9')){const _0x186750=_0x487304[_0x2cf9('0x2a')];if(_0x186750===0x1&&this[_0x2cf9('0x77')]()[_0x2cf9('0x79')]()!==0x1)this[_0x2cf9('0x68')]();else{if(_0x186750===0x2&&this[_0x2cf9('0x77')]()['guardSkillId']()!==0x2){if('LgRdX'!==_0x2cf9('0x35'))this['setGuard']();else{function _0x504c55(){const _0x5c7736=_0x239002(_0x27bd11['$1']);_0x5c7736!==_0x321513[_0x19d4ea][_0x2cf9('0x12')]&&(_0x217671(_0x2cf9('0x46')[_0x2cf9('0x7d')](_0x33b668,_0x5c7736)),_0x554d07[_0x2cf9('0xa')]());}}}else this[_0x2cf9('0x20')](_0x186750);}}else{function _0x22f84b(){return _0x2cf9('0x4b')[_0x2cf9('0x7d')](_0xcf2a69);}}}else{if(_0x2cf9('0x7f')!==_0x2cf9('0x7f')){function _0x4cb4dc(){this[_0x2cf9('0x20')](_0xe6c90);}}else this[_0x2cf9('0xd')]();}},VisuMZ[_0x2cf9('0x18')][_0x2cf9('0x8a')]=Game_BattlerBase[_0x2cf9('0x1c')][_0x2cf9('0x75')],Game_BattlerBase[_0x2cf9('0x1c')]['initMembers']=function(){this['_cache']={},VisuMZ[_0x2cf9('0x18')][_0x2cf9('0x8a')]['call'](this);},VisuMZ[_0x2cf9('0x18')][_0x2cf9('0xb')]=Game_BattlerBase['prototype'][_0x2cf9('0x5e')],Game_BattlerBase[_0x2cf9('0x1c')][_0x2cf9('0x5e')]=function(){this[_0x2cf9('0x1')]={},VisuMZ[_0x2cf9('0x18')][_0x2cf9('0xb')]['call'](this);},Game_BattlerBase[_0x2cf9('0x1c')][_0x2cf9('0x6e')]=function(_0x40ea00){return this[_0x2cf9('0x1')]=this['_cache']||{},this[_0x2cf9('0x1')][_0x40ea00]!==undefined;},VisuMZ['WeaponUnleash'][_0x2cf9('0x31')]=Game_BattlerBase[_0x2cf9('0x1c')][_0x2cf9('0x79')],Game_BattlerBase[_0x2cf9('0x1c')][_0x2cf9('0x79')]=function(){if(this[_0x2cf9('0x41')])return VisuMZ[_0x2cf9('0x18')]['Game_BattlerBase_attackSkillId'][_0x2cf9('0xf')](this);const _0x8b3223=_0x2cf9('0x79');if(this[_0x2cf9('0x6e')](_0x8b3223))return this[_0x2cf9('0x1')][_0x8b3223];return this[_0x2cf9('0x1')][_0x8b3223]=this[_0x2cf9('0x2f')](),this[_0x2cf9('0x1')][_0x8b3223];},Game_BattlerBase[_0x2cf9('0x1c')][_0x2cf9('0x2f')]=function(){const _0x284cc0=this[_0x2cf9('0x3a')]()['concat'](this[_0x2cf9('0x33')]());for(const _0x995d7e of _0x284cc0){if('IOTiT'===_0x2cf9('0x47')){function _0x536923(){this[_0x2cf9('0xd')]();}}else{if(!_0x995d7e)continue;if(_0x995d7e['note'][_0x2cf9('0x86')](/<REPLACE ATTACK:[ ](.*)>/i)){if(_0x2cf9('0x15')===_0x2cf9('0x4f')){function _0x3e2a85(){if(this[_0x2cf9('0x41')])return _0x4f4861[_0x2cf9('0x18')][_0x2cf9('0x5a')][_0x2cf9('0xf')](this);const _0x1e407b=_0x2cf9('0x23');if(this[_0x2cf9('0x6e')](_0x1e407b))return this['_cache'][_0x1e407b];return this[_0x2cf9('0x1')][_0x1e407b]=this[_0x2cf9('0x64')](),this[_0x2cf9('0x1')][_0x1e407b];}}else{const _0x1174fb=DataManager[_0x2cf9('0x91')](RegExp['$1'])||Number(RegExp['$1']);if($dataSkills[_0x1174fb])return _0x1174fb;}}const _0x47fd51=_0x2cf9('0x6c'),_0x1b2094=VisuMZ[_0x2cf9('0x18')][_0x2cf9('0x42')](_0x995d7e,_0x47fd51);if(VisuMZ[_0x2cf9('0x18')]['JS'][_0x1b2094]){this[_0x2cf9('0x41')]=!![];const _0x4aeeac=VisuMZ['WeaponUnleash']['JS'][_0x1b2094][_0x2cf9('0xf')](this,this,_0x995d7e);this[_0x2cf9('0x41')]=![];if($dataSkills[_0x4aeeac])return _0x4aeeac;}}}return VisuMZ[_0x2cf9('0x18')]['Game_BattlerBase_attackSkillId'][_0x2cf9('0xf')](this);},VisuMZ[_0x2cf9('0x18')][_0x2cf9('0x5a')]=Game_BattlerBase[_0x2cf9('0x1c')][_0x2cf9('0x23')],Game_BattlerBase[_0x2cf9('0x1c')][_0x2cf9('0x23')]=function(){if(this[_0x2cf9('0x41')])return VisuMZ[_0x2cf9('0x18')][_0x2cf9('0x5a')][_0x2cf9('0xf')](this);const _0x131e0c='guardSkillId';if(this[_0x2cf9('0x6e')](_0x131e0c))return this[_0x2cf9('0x1')][_0x131e0c];return this[_0x2cf9('0x1')][_0x131e0c]=this[_0x2cf9('0x64')](),this[_0x2cf9('0x1')][_0x131e0c];},Game_BattlerBase[_0x2cf9('0x1c')][_0x2cf9('0x64')]=function(){const _0x1f5998=this[_0x2cf9('0x3a')]()['concat'](this[_0x2cf9('0x33')]());for(const _0x36025a of _0x1f5998){if(!_0x36025a)continue;if(_0x36025a['note'][_0x2cf9('0x86')](/<REPLACE GUARD:[ ](.*)>/i)){const _0x32c595=DataManager[_0x2cf9('0x91')](RegExp['$1'])||Number(RegExp['$1']);if($dataSkills[_0x32c595])return _0x32c595;}const _0x4ef75f=_0x2cf9('0x39'),_0x1a2217=VisuMZ[_0x2cf9('0x18')][_0x2cf9('0x42')](_0x36025a,_0x4ef75f);if(VisuMZ[_0x2cf9('0x18')]['JS'][_0x1a2217]){if('qLwXw'!==_0x2cf9('0x10')){function _0x176cb5(){_0x35ef4c+=_0x3bebac(_0x57c841['$2'])*0.01;}}else{this[_0x2cf9('0x41')]=!![];const _0x2a1b1c=VisuMZ[_0x2cf9('0x18')]['JS'][_0x1a2217][_0x2cf9('0xf')](this,this,_0x36025a);this[_0x2cf9('0x41')]=![];if($dataSkills[_0x2a1b1c])return _0x2a1b1c;}}}return VisuMZ[_0x2cf9('0x18')][_0x2cf9('0x5a')][_0x2cf9('0xf')](this);},Game_BattlerBase['prototype'][_0x2cf9('0x54')]=function(_0x3a21ef,_0x523196){const _0x183d7e=this[_0x2cf9('0x3a')]()[_0x2cf9('0x1d')](this[_0x2cf9('0x33')]());let _0x267861=0x0;for(const _0x3a7c15 of _0x183d7e){if(_0x2cf9('0x4a')!==_0x2cf9('0x4a')){function _0x27d846(){const _0x4f9a17=this['_subject'],_0x2d8b30=_0x4f9a17[_0x2cf9('0x21')]();if(_0x2d8b30)_0x2d8b30[_0x2cf9('0x2')]();}}else{if(!_0x3a7c15)continue;const _0x4ff055=_0x3a7c15[_0x2cf9('0x3')];if(_0x3a21ef===_0x2cf9('0x8d')){if(_0x2cf9('0x6')===_0x2cf9('0x11')){function _0x372b35(){this[_0x2cf9('0x67')](_0x2cf9('0x48'),_0x168535);}}else{_0x4ff055[_0x2cf9('0x86')](/<WEAPON UNLEASH:[ ]([\+\-]\d+)([%％])>/i)&&(_0x267861+=Number(RegExp['$1'])*0.01);if(_0x4ff055[_0x2cf9('0x86')](/<WEAPON UNLEASH (.*):[ ]([\+\-]\d+)([%％])>/i)){const _0x9b643c=DataManager[_0x2cf9('0x91')](RegExp['$1'])||Number(RegExp['$1']);if(_0x9b643c===_0x523196&&$dataSkills[_0x9b643c]){if(_0x2cf9('0x8')===_0x2cf9('0x8'))_0x267861+=Number(RegExp['$2'])*0.01;else{function _0x212944(){return _0x23578f[_0x2cf9('0x29')]&&_0x2317fd[_0x2cf9('0x3c')][_0x2cf9('0xe')]('['+_0x324297+']');}}}}}}else{if(_0x3a21ef===_0x2cf9('0x22')){if(_0x2cf9('0x61')!==_0x2cf9('0x85')){if(_0x4ff055['match'](/<GUARD UNLEASH:[ ]([\+\-]\d+)([%％])>/i)){if(_0x2cf9('0x7e')===_0x2cf9('0x7e'))_0x267861+=Number(RegExp['$1'])*0.01;else{function _0x378e5a(){const _0x5b0192=_0x59f6fa[_0x37d1f1[_0x2cf9('0x2a')]];if(_0x5b0192&&!_0x1b15d3[_0x2cf9('0xe')](_0x5b0192))_0x19943f[_0x2cf9('0x5d')](_0x5b0192);}}}if(_0x4ff055[_0x2cf9('0x86')](/<GUARD UNLEASH (.*):[ ]([\+\-]\d+)([%％])>/i)){const _0x623f7d=DataManager[_0x2cf9('0x91')](RegExp['$1'])||Number(RegExp['$1']);_0x623f7d===_0x523196&&$dataSkills[_0x623f7d]&&(_0x267861+=Number(RegExp['$2'])*0.01);}}else{function _0x378f42(){const _0x34ccb8=_0x111aa9[_0x2cf9('0x18')][_0x2cf9('0x74')][_0x13c165];if(!_0x34ccb8)return;const _0x39902e=this[_0x2cf9('0x77')]();if(!_0x39902e)return;if(_0x27100d[_0x2cf9('0x13')]){const _0x492c66=[_0x39902e],_0x17c41c=_0x34ccb8[_0x2cf9('0x1b')],_0x2e873c=_0x34ccb8[_0x2cf9('0x7a')],_0xb807d6=_0x34ccb8[_0x2cf9('0x2b')];_0x3a2ba5[_0x2cf9('0x60')](_0x492c66,_0x17c41c,_0x2e873c,_0xb807d6);}if(_0x43cb39[_0x2cf9('0x49')]){const _0x42842a=_0x34ccb8[_0x2cf9('0x36')],_0x39d5cc={'textColor':_0x34ccb8['TextColor']||0x0,'flashColor':_0x34ccb8['FlashColor']||[0x0,0x0,0x0,0x0],'flashDuration':_0x34ccb8['FlashDuration']||0x3c};_0x39902e[_0x2cf9('0x8c')](_0x42842a,_0x39d5cc);}_0x34ccb8[_0x2cf9('0x4c')]&&_0x34ccb8[_0x2cf9('0x4c')]['call'](this,_0x39902e,_0x1bea6d),_0x39902e[_0x2cf9('0x50')](_0xad4e80,_0x4cf5e1);}}}}}}return _0x267861;},Game_Battler[_0x2cf9('0x1c')][_0x2cf9('0x50')]=function(_0x3b337e,_0x50d6b1){const _0x2a736b=this[_0x2cf9('0x3a')]()[_0x2cf9('0x1d')](this[_0x2cf9('0x33')]());for(const _0x3bf9dc of _0x2a736b){if('gopIv'===_0x2cf9('0x34')){if(!_0x3bf9dc)continue;const _0x3a90e5=VisuMZ[_0x2cf9('0x18')][_0x2cf9('0x42')](_0x3bf9dc,_0x2cf9('0x26'));VisuMZ[_0x2cf9('0x18')]['JS'][_0x3a90e5]&&VisuMZ[_0x2cf9('0x18')]['JS'][_0x3a90e5][_0x2cf9('0xf')](this,this,_0x50d6b1);const _0xfd124=VisuMZ[_0x2cf9('0x18')][_0x2cf9('0x42')](_0x3bf9dc,_0x2cf9('0x2e')['format'](_0x3b337e[_0x2cf9('0x40')]()[_0x2cf9('0x76')]()));VisuMZ[_0x2cf9('0x18')]['JS'][_0xfd124]&&VisuMZ[_0x2cf9('0x18')]['JS'][_0xfd124][_0x2cf9('0xf')](this,this,_0x50d6b1);}else{function _0x5d0ff5(){_0x4f881a+=_0x260ee5(_0x1f325a['$1'])*0.01;}}}},Game_Enemy[_0x2cf9('0x1c')][_0x2cf9('0x33')]=function(){const _0x37a9a1=[];for(const _0x11c285 of this[_0x2cf9('0x3d')]()[_0x2cf9('0x19')]){const _0xf9c80f=$dataSkills[_0x11c285[_0x2cf9('0x2a')]];if(_0xf9c80f&&!_0x37a9a1[_0x2cf9('0xe')](_0xf9c80f))_0x37a9a1[_0x2cf9('0x5d')](_0xf9c80f);}return _0x37a9a1;},VisuMZ['WeaponUnleash']['Window_ActorCommand_setup']=Window_ActorCommand[_0x2cf9('0x1c')][_0x2cf9('0x2c')],Window_ActorCommand[_0x2cf9('0x1c')][_0x2cf9('0x2c')]=function(_0x4dd264){if(_0x4dd264)_0x4dd264[_0x2cf9('0x5e')]();VisuMZ['WeaponUnleash'][_0x2cf9('0x5c')]['call'](this,_0x4dd264);};