//=============================================================================
// VisuStella MZ - Victory Aftermath
// VisuMZ_3_VictoryAftermath.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_VictoryAftermath = true;

var VisuMZ = VisuMZ || {};
VisuMZ.VictoryAftermath = VisuMZ.VictoryAftermath || {};
VisuMZ.VictoryAftermath.version = 1.10;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.10] [VictoryAftermath]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Victory_Aftermath_VisuStella_MZ
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Victory Aftermath plugin consolidates the rewards granted upon finishing
 * a battle successfully into one screen (or more if there are level ups).
 * This helps reduce the amount of button presses needed to display similar
 * information by default. The level up screens will also display parameter
 * changes and new skills acquired in addition to victory quotes.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Consolidates EXP, Gold, and Items acquired through battle rewards into one
 *   battle screen.
 * * EXP gauges for currently active battle party will be displayed on the same
 *   screen to indicate progress.
 * * Upon leveling up, individual screens can be shown (optionally) to display
 *   parameter changes, new skills acquired, and level up quotes.
 * * Plugin Commands can be used to clear/add new quotes at any time.
 * * Plugin Commands can be used by bypass certain parts of the Victory
 *   Aftermath segments or the entire thing completely.
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
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 *
 * VisuMZ_0_CoreEngine
 *
 * - The EXP gauge colors will match the color settings found in the Core
 * Engine's Plugin Parameters instead of defaulting to specific colors.
 *
 * - The continue message will display any changed input keys designated by
 * the Core Engine's Plugin Parameters.
 *
 * ---
 *
 * VisuMZ_1_MainMenuCore
 *
 * - Upon leveling up, the Menu Image will show up (optional) as a bust during
 * the quote segment.
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
 * <Level Up Quotes>
 *  text
 *  text
 *  text
 *  text
 *  <New Quote>
 *  text
 *  text
 *  text
 *  text
 *  <New Quote>
 *  text
 *  text
 *  text
 *  text
 * </Level Up Quotes>
 *
 * - Used for: Actor Notetags
 * - Description
 * - Replace 'text' with the text you'd want the actor to say when leveling up.
 * - The <New Quote> tag is used between the <Level Up Quotes> notetags to
 *   separate quotes.
 * - If an actor has multiple quotes (due to the <New Quote> notetag), then a
 *   random quote will be selected upon level up.
 * - If this notetag is not found inside an actor's notebox, a random level up
 *   quote will be selected from the Plugin Parameters => Level Up => Quotes =>
 *   Level Up Quotes plugin parameter.
 *
 * ---
 *
 * <New Skill Quotes>
 *  text
 *  text
 *  text
 *  text
 *  <New Quote>
 *  text
 *  text
 *  text
 *  text
 *  <New Quote>
 *  text
 *  text
 *  text
 *  text
 * </New Skill Quotes>
 *
 * - Used for: Actor Notetags
 * - Description
 * - Replace 'text' with the text you'd want the actor to say when leveling up
 *   in addition to learning a new skill upon leveling up.
 * - The <New Quote> tag is used between the <New Skill Quotes> notetags to
 *   separate quotes.
 * - If an actor has multiple quotes (due to the <New Quote> notetag), then a
 *   random quote will be selected upon level up and learning a new skill.
 * - If this notetag is not found inside an actor's notebox, a random new skill
 *   quote will be selected from the Plugin Parameters => Level Up => Quotes =>
 *   New Skill Quotes plugin parameter.
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
 * === Actor Plugin Commands ===
 * 
 * ---
 *
 * Actor: Add Level Up Quotes
 * - Add new entries target actor's level up quotes.
 *
 *   Actor ID:
 *   - Select ID of target actor to add quotes for.
 *
 *   New Quotes:
 *   - Add new entries to actor's level up quotes.
 *   - Text codes allowed. %1 - Actor's Name
 *
 * ---
 *
 * Actor: Add New Skill Quotes
 * - Add new entries target actor's new skill quotes.
 *
 *   Actor ID:
 *   - Select ID of target actor to add quotes for.
 *
 *   New Quotes:
 *   - Add new entries to actor's new skill quotes.
 *   - Text codes allowed. %1 - Actor's Name
 *
 * ---
 *
 * Actor: Clear Level Up Quotes
 * - Clear target actor's level up quotes.
 *
 *   Actor ID:
 *   - Select ID of target actor to clear quotes for.
 *
 * ---
 *
 * Actor: Clear New Skill Quotes
 * - Clear target actor's new skill quotes.
 *
 *   Actor ID:
 *   - Select ID of target actor to clear quotes for.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Bypass Victory Motion
 * - Bypass actors performing their victory motion?
 *
 *   Bypass?:
 *   - Bypass actors performing their victory motion?
 *
 * ---
 *
 * System: Bypass Victory Music
 * - Bypass playing the victory music?
 *
 *   Bypass?:
 *   - Bypass playing the victory music?
 *
 * ---
 *
 * System: Bypass Victory Phase
 * - Bypass the entire victory phase and all aspects about it?
 *
 *   Bypass?:
 *   - Bypass the entire victory phase and all aspects about it?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * The general settings Plugin Parameters control the overall settings found
 * within the main aspects of the Victory Aftermath sequence.
 *
 * ---
 *
 * General Settings
 * 
 *   Fade In Speed:
 *   - Fade in speed for the victory window.
 * 
 *   Hide Delay (MS):
 *   - Delay in milliseconds before hiding the UI Windows.
 * 
 *   Show Delay (MS):
 *   - Delay in milliseconds before showing the Victory Windows.
 * 
 *   Update Duration:
 *   - Duration in frames on updating actor EXP gauges.
 * 
 *   Auto Skip Auto Battle?:
 *   - Skip the Victory Aftermath sequence if the player has decided to use
 *     the party Auto Battle command?
 * 
 *   Mirror Contents?:
 *   - Mirror the positions of EXP, Gold, and Items?
 * 
 *   Mirror Contents?:
 *   - Mirror the positions of EXP, Gold, and Items?
 * 
 *   Show EXP Gauges?:
 *   - Show the EXP Gauges of the main party members for the first screen of
 *     the Victory Aftermath?
 *   - This is added for those with large parties and cannot fit everything
 *     into one screen for all party members and would prefer not showing any
 *     EXP Gauges at all instead.
 *
 * ---
 * 
 * Collapse Effect
 * 
 *   Normal Collapse Wait?:
 *   - Wait for the normal collapse effect to finish?
 * 
 *   Boss Collapse Wait?:
 *   - Wait for the boss collapse effect to finish?
 * 
 * ---
 * 
 * Victory Music
 * 
 *   Victory BGM:
 *   - Background music to play during the victory sequence.
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
 * ============================================================================
 * Plugin Parameters: Reward Strips Settings
 * ============================================================================
 *
 * Reward strip settings that appear in the first screen of the Victory
 * Aftermath. These are used to let you have control over what rewards are
 * displayed at the end of each battle and can be used to display custom data
 * from other plugins as well.
 *
 * ---
 *
 * Reward Strip
 * 
 *   Label:
 *   - This one doesn't have any use other than being a label to  quickly
 *     determine what this one is for.
 * 
 *   JS: Show:
 *   - Code used to determine if the reward strip is shown.
 * 
 *   JS: Text:
 *   - Code used to determine if the text displayed as the category.
 * 
 *   JS: Data:
 *   - Code used to determine what data should be displayed in the
 *     reward strip.
 *
 * ---
 * 
 * The default parameters for this will be updated from time to time as more
 * VisuStella MZ plugins are released to add in extra displayed resources that
 * the party can gain from battle.
 *
 * ============================================================================
 * Plugin Parameters: Level Up Settings
 * ============================================================================
 *
 * When actors level up, extra screens will be displayed in the Victory
 * Aftermath sequence. Alter these settings to best fit your game.
 *
 * ---
 *
 * General
 * 
 *   Enable?:
 *   - Enable the Level Up portion of the Victory Aftermath phase?
 * 
 *   Show Face?:
 *   - Show the actor's face?
 * 
 *   Show Param Change?:
 *   - Show an extra column for parameter value differences?
 * 
 *     Hide Level?:
 *     - Hide the level change in the parameter value differences?
 * 
 *   Shown Max Skills:
 *   - The maximum amount of skills that are displayed.
 *   - This is due to limited screen space.
 * 
 *   Show Back Rectangles?:
 *   - Show back rectangles of darker colors to display information better?
 * 
 *     Back Rectangle Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 *
 * ---
 *
 * Quotes
 * 
 *   Level Up Quotes:
 *   - A list of generic level up quotes for those who don't have the
 *     <Level Up Quote> notetags.
 *   - %1 - Actor Name
 * 
 *   New Skill Quotes:
 *   - A list of generic level up quotes for those who don't have the
 *     <New Skill Quote> notetags.
 *   - %1 - Actor Name
 *
 * ---
 *
 * VisuMZ_1_MainMenuCore
 * - The following Plugin Parameters require VisuMZ_1_MainMenuCore.
 * 
 *   Show Bust?:
 *   - Show the actor's menu image as a bust?
 * 
 *   Bust Position X:
 *   - Positon to center the actor's menu image bust.
 *   - You may use JavaScript code.
 * 
 *   Bust Position Y:
 *   - Positon to anchor the actor's menu image bust.
 *   - You may use JavaScript code.
 * 
 *   Bust Scale:
 *   - The amount to scale the actor's menu image bust.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Vocabulary Settings
 * ============================================================================
 *
 * There's certain diction used in the Victory Aftermath plugin that's not set
 * anywhere else in the game. Change the settings to make it fit your game.
 *
 * ---
 *
 * Vocabulary
 * 
 *   Continue Format:
 *   - Text format for continue message.
 *   - %1 - OK key, %2 - Cancel key
 * 
 *   OK Button:
 *   - Text used to represent the OK button.
 *   - If VisuMZ_0_CoreEngine is present, ignore this.
 * 
 *   Cancel Button:
 *   - Text used to represent the Cancel button.
 *   - If VisuMZ_0_CoreEngine is present, ignore this.
 * 
 *   Level Format:
 *   - Text format for actor level.
 *   - %1 - Level
 * 
 *   Level Up:
 *   - Text format for reaching a level up.
 * 
 *   Sound Effect:
 *   - Sound effect played when a level up occurs.
 * 
 *     Volume:
 *     - Volume of the sound effect played.
 * 
 *     Pitch:
 *     - Pitch of the sound effect played.
 * 
 *     Pan:
 *     - Pan of the sound effect played.
 * 
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors
 *     from the Window Skin.
 * 
 *   New Skill Format:
 *   - Text format describing that a new skill has been learned.
 *   - %1 - Actor Name
 * 
 *   Reward Items:
 *   - Text displayed for items rewarded.
 * 
 *   Victory Title:
 *   - Text displayed at the top of the victory screen.
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
 * - Yanfly
 * - Arisu
 * - Olivia
 * - Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.10: March 12, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Olivia!
 * *** Plugin Parameters > General > Show EXP Gauges?
 * **** Show the EXP Gauges of the main party members for the first screen of
 *      the Victory Aftermath?
 * **** This is added for those with large parties and cannot fit everything
 *      into one screen for all party members and would prefer not showing any
 *      EXP Gauges at all instead.
 * 
 * Version 1.09: January 15, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Arisu!
 * *** Plugin Parameters > Vocab > Level Up > Volume
 * *** Plugin Parameters > Vocab > Level Up > Pitch
 * *** Plugin Parameters > Vocab > Level Up > Pan
 * **** For the people who want more control over the level up sound effect.
 * 
 * Version 1.08: December 11, 2020
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * * Feature Updates!
 * ** The default Plugin Parameter for "Reward Strips" have been updated to
 *    contain compatibility for a future plugin.
 * 
 * Version 1.07: December 4, 2020
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Plugin Parameter added by Olivia:
 * ** Plugin Parameters > Level Up Settings > Hide Level?
 * *** Hide the level change in the parameter value differences when comparing
 *     the stat changes from the previous level to the next.
 * 
 * Version 1.06: November 29, 2020
 * * Bug Fixed!
 * ** The default reward strips Plugin Parameters data is now updated for the
 *    SP display costs to show the Skill Points data instead of Ability Points
 *    data. Fix made by Arisu.
 * 
 * Version 1.05: November 8, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New plugin parameter added by Arisu.
 * *** Plugin Parameters > Reward Strips
 * **** Reward strip settings that appear in the first screen of the Victory
 *      Aftermath. These are used to let you have control over what rewards are
 *      displayed at the end of each battle and can be used to display custom
 *      data from other plugins as well.
 * 
 * Version 1.04: October 25, 2020
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New plugin parameter added by Olivia.
 * *** Plugin Parameters > General > Mirror Contents?
 * **** Mirror the positions of EXP, Gold, and Items?
 * 
 * Version 1.03: October 18, 2020
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** BGM pitch plugin parameter is now uncapped.
 * * New Features!
 * ** New plugin parameters added by Yanfly.
 * *** Plugin Parameters > General > Collapse Effect > Normal Collapse Wait?
 * *** Plugin Parameters > General > Collapse Effect > Boss Collapse Wait?
 * **** These settings enable you to decide if you want the Victory Aftermath
 *      to wait until collapse effects are finished before continuing.
 * *** Plugin Parameters > General > Music > Volume
 * *** Plugin Parameters > General > Music > Pitch
 * *** Plugin Parameters > General > Music > Pan
 * **** Adjusts the volume, pitch, and pan of the victory music.
 * 
 * Version 1.02: September 13, 2020
 * * Feature Update!
 * ** Victory Aftermath windows now wait until all boss collapse effects are
 *    done before showing. Update added by Olivia.
 * * New Features!
 * ** New Plugin Parameter under General Settings: Auto Skip Auto Battle?
 * *** Skip the Victory Aftermath sequence if the player has decided to use the
 *     party Auto Battle command?
 * *** Feature added by Olivia
 * 
 * Version 1.01: September 6, 2020
 * * New Features!
 * ** New Plugin Parameters added in Level Up Settings for disabling
 *    the back rectangles and/or changing their colors.
 *
 * Version 1.00: August 26, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorQuotesLevelUpAdd
 * @text Actor: Add Level Up Quotes
 * @desc Add new entries target actor's level up quotes.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select ID of target actor to add quotes for.
 * @default 1
 *
 * @arg NewQuotes:arrayjson
 * @text New Quotes
 * @type note[]
 * @desc Add new entries to actor's level up quotes.
 * Text codes allowed. %1 - Actor's Name
 * @default ["\"\\\\c[6]%1\\\\c[0]\\n\\\"Text\\\"\""]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorQuotesNewSkillAdd
 * @text Actor: Add New Skill Quotes
 * @desc Add new entries target actor's new skill quotes.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select ID of target actor to add quotes for.
 * @default 1
 *
 * @arg NewQuotes:arrayjson
 * @text New Quotes
 * @type note[]
 * @desc Add new entries to actor's new skill quotes.
 * Text codes allowed. %1 - Actor's Name
 * @default ["\"\\\\c[6]%1\\\\c[0]\\n\\\"Text\\\"\""]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorQuotesLevelUpClear
 * @text Actor: Clear Level Up Quotes
 * @desc Clear target actor's level up quotes.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select ID of target actor to clear quotes for.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorQuotesNewSkillClear
 * @text Actor: Clear New Skill Quotes
 * @desc Clear target actor's new skill quotes.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select ID of target actor to clear quotes for.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemBypassVictoryMotion
 * @text System: Bypass Victory Motion
 * @desc Bypass actors performing their victory motion?
 *
 * @arg Bypass:eval
 * @text Bypass?
 * @type boolean
 * @on Bypass
 * @off Normal
 * @desc Bypass actors performing their victory motion?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemBypassVictoryMusic
 * @text System: Bypass Victory Music
 * @desc Bypass playing the victory music?
 *
 * @arg Bypass:eval
 * @text Bypass?
 * @type boolean
 * @on Bypass
 * @off Normal
 * @desc Bypass playing the victory music?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemBypassVictoryPhase
 * @text System: Bypass Victory Phase
 * @desc Bypass the entire victory phase and all aspects about it?
 *
 * @arg Bypass:eval
 * @text Bypass?
 * @type boolean
 * @on Bypass
 * @off Normal
 * @desc Bypass the entire victory phase and all aspects about it?
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
 * @param VictoryAftermath
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
 * @desc General settings pertaining to the Victory Aftermath phase.
 * @default {"General":"","FadeInSpeed:num":"8","HideDelayMS:num":"1500","ShowDelayMS:num":"2000","UpdateDuration:num":"180","AutoBattleAutoSkip:eval":"true","MirrorContents:eval":"false","Collapse":"","WaitRegularCollapse:eval":"true","WaitBossCollapse:eval":"true","Music":"","Bgm:str":"Ship3","volume:num":"90","pitch:num":"100","pan:num":"0"}
 *
 * @param Rewards:arraystruct
 * @text Reward Strips
 * @parent General:struct
 * @type struct<Rewards>[]
 * @desc Reward strip settings that appear in the first screen of the Victory Aftermath.
 * @default ["{\"Label\":\"EXP\",\"Show:func\":\"\\\"return true;\\\"\",\"Text:func\":\"\\\"return TextManager.exp;\\\"\",\"Data:func\":\"\\\"return BattleManager._rewards.exp;\\\"\"}","{\"Label\":\"Gold\",\"Show:func\":\"\\\"return true;\\\"\",\"Text:func\":\"\\\"return TextManager.currencyUnit;\\\"\",\"Data:func\":\"\\\"return BattleManager._rewards.gold;\\\"\"}","{\"Label\":\"AP (Skill Learn System)\",\"Show:func\":\"\\\"return Imported.VisuMZ_2_SkillLearnSystem &&\\\\n    VisuMZ.SkillLearnSystem.Settings.AbilityPoints.ShowVictory;\\\"\",\"Text:func\":\"\\\"return TextManager.abilityPointsAbbr;\\\"\",\"Data:func\":\"\\\"return BattleManager._rewards.abilityPoints;\\\"\"}","{\"Label\":\"CP (Class Change System)\",\"Show:func\":\"\\\"return Imported.VisuMZ_2_ClassChangeSystem &&\\\\n    VisuMZ.ClassChangeSystem.Settings.ClassPoints.ShowVictory;\\\"\",\"Text:func\":\"\\\"return TextManager.classPointsAbbr;\\\"\",\"Data:func\":\"\\\"return BattleManager._rewards.classPoints;\\\"\"}","{\"Label\":\"JP (Class Change System)\",\"Show:func\":\"\\\"return Imported.VisuMZ_2_ClassChangeSystem &&\\\\n    VisuMZ.ClassChangeSystem.Settings.JobPoints.ShowVictory;\\\"\",\"Text:func\":\"\\\"return TextManager.jobPointsAbbr;\\\"\",\"Data:func\":\"\\\"return BattleManager._rewards.jobPoints;\\\"\"}","{\"Label\":\"SP (Skill Learn System)\",\"Show:func\":\"\\\"return Imported.VisuMZ_2_SkillLearnSystem &&\\\\n    VisuMZ.SkillLearnSystem.Settings.SkillPoints.ShowVictory;\\\"\",\"Text:func\":\"\\\"return TextManager.skillPointsAbbr;\\\"\",\"Data:func\":\"\\\"return BattleManager._rewards.skillPoints;\\\"\"}"]
 *
 * @param LevelUp:struct
 * @text Level Up Settings
 * @type struct<LevelUp>
 * @desc Settings pertaining to the Level Up portion of the Victory Aftermath phase.
 * @default {"General":"","Enable:eval":"true","ShowFace:eval":"false","ShowParamDiff:eval":"true","HideLevelDiff:eval":"false","MaxSkills:num":"8","DelayBuffer:num":"200","DrawBackRect:eval":"true","BackRectColor:str":"19","Quotes":"","LevelUpQuotes:arrayjson":"[\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"Alright! A level up!\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"Yes! I've leveled up!\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"Oh? I've leveled up!?\\\\n This is awesome!\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"Looks like I've become stronger!\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"I feel like I'm getting used to battle.\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"The power! I can feel it!\\\\\\\"\\\"\"]","NewSkillQuotes:arrayjson":"[\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"Looks like I've acquired a new skill!\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"This new skill should come in handy.\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"It seems I've learned something new!\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"I've acquired a new power!\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"This should be useful for future battles.\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"I wonder what this new skill is like?\\\\\\\"\\\"\"]","MainMenuCore":"","ShowBust:eval":"true","BustPosX:str":"Graphics.width * 0.25","BustPosY:str":"Graphics.height","BustScale:num":"1.20"}
 *
 * @param Vocab:struct
 * @text Vocabulary
 * @type struct<Vocab>
 * @desc The vocabulary used for this plugin and related settings.
 * @default {"ContinueFmt:str":"Press %1 or %2 to continue","KeyOK:str":"OK","KeyCancel:str":"Cancel","LvFmt:str":"LV %1","LvUp:str":"LEVEL UP!","LvUpSfx:str":"Up4","LvUpVolume:num":"90","LvUpPitch:num":"100","LvUpPan:num":"0","LvUpColor:str":"17","NewSkill:str":"%1 has learned:","RewardItems:str":"Items Obtained","Victory:str":"Victory!"}
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
 * @param FadeInSpeed:num
 * @text Fade In Speed
 * @parent General
 * @desc Fade in speed for the victory window.
 * @default 8
 *
 * @param HideDelayMS:num
 * @text Hide Delay (MS)
 * @parent General
 * @desc Delay in milliseconds before hiding the UI Windows.
 * @default 1500
 *
 * @param ShowDelayMS:num
 * @text Show Delay (MS)
 * @parent General
 * @desc Delay in milliseconds before showing the Victory Windows.
 * @default 2000
 *
 * @param UpdateDuration:num
 * @text Update Duration
 * @parent General
 * @desc Duration in frames on updating actor EXP gauges.
 * @default 180
 *
 * @param AutoBattleAutoSkip:eval
 * @text Skip Auto Battle?
 * @parent General
 * @type boolean
 * @on Skip
 * @off Don't Skip
 * @desc Skip the Victory Aftermath sequence if the player has
 * decided to use the party Auto Battle command?
 * @default true
 *
 * @param MirrorContents:eval
 * @text Mirror Contents?
 * @parent General
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the positions of EXP, Gold, and Items?
 * @default false
 *
 * @param ShowExpGauges:eval
 * @text Show EXP Gauges?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the EXP Gauges of the main party members
 * for the first screen of the Victory Aftermath?
 * @default true
 * 
 * @param Collapse
 * @text Collapse Effect
 *
 * @param WaitRegularCollapse:eval
 * @text Normal Collapse Wait?
 * @parent Collapse
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for the normal collapse effect to finish?
 * @default true
 *
 * @param WaitBossCollapse:eval
 * @text Boss Collapse Wait?
 * @parent Collapse
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for the boss collapse effect to finish?
 * @default true
 * 
 * @param Music
 * @text Victory Music
 *
 * @param Bgm:str
 * @text Victory BGM
 * @parent Music
 * @type file
 * @dir audio/bgm/
 * @desc Background music to play during the victory sequence.
 * @default Ship3
 *
 * @param volume:num
 * @text Volume
 * @parent Music
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param pitch:num
 * @text Pitch
 * @parent Music
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param pan:num
 * @text Pan
 * @parent Music
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Rewards Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Rewards:
 *
 * @param Label
 * @desc This one doesn't have any use other than being a label to 
 * quickly determine what this one is for.
 * @default Untitled
 *
 * @param Show:func
 * @text JS: Show
 * @type note
 * @desc Code used to determine if the reward strip is shown.
 * @default "return true;"
 *
 * @param Text:func
 * @text JS: Text
 * @type note
 * @desc Code used to determine if the text displayed as the category.
 * @default "return 'Untitled';"
 *
 * @param Data:func
 * @text JS: Data
 * @type note
 * @desc Code used to determine what data should be displayed in the reward strip.
 * @default "return 0;"
 *
 */
/* ----------------------------------------------------------------------------
 * Level Up Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~LevelUp:
 *
 * @param General
 *
 * @param Enable:eval
 * @text Enable?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable the Level Up portion of the Victory Aftermath phase?
 * @default true
 *
 * @param ShowFace:eval
 * @text Show Face?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the actor's face?
 * @default false
 *
 * @param ShowParamDiff:eval
 * @text Show Param Change?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show an extra column for parameter value differences?
 * @default true
 *
 * @param HideLevelDiff:eval
 * @text Hide Level?
 * @parent ShowParamDiff:eval
 * @type boolean
 * @on Hide
 * @off Normal
 * @desc Hide the level change in the parameter value differences?
 * @default false
 *
 * @param MaxSkills:num
 * @text Shown Max Skills
 * @parent General
 * @desc The maximum amount of skills that are displayed.
 * This is due to limited screen space.
 * @default 8
 *
 * @param DelayBuffer:num
 * @text Delay Buffer
 * @parent General
 * @type number
 * @desc How many milliseconds to wait in between playing
 * each level up sound effect?
 * @default 200
 *
 * @param DrawBackRect:eval
 * @text Show Back Rectangles?
 * @parent General
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Show back rectangles of darker colors to display information better?
 * @default true
 *
 * @param BackRectColor:str
 * @text Back Rectangle Color
 * @parent DrawBackRect:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param Quotes
 *
 * @param LevelUpQuotes:arrayjson
 * @text Level Up Quotes
 * @parent Quotes
 * @type note[]
 * @desc A list of generic level up quotes for those who don't
 * have the <Level Up Quote> notetags. %1 - Actor Name
 * @default ["\"\\\\c[6]%1\\\\c[0]\\n\\\"Alright! A level up!\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"Yes! I've leveled up!\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"Oh? I've leveled up!?\\n This is awesome!\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"Looks like I've become stronger!\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"I feel like I'm getting used to battle.\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"The power! I can feel it!\\\"\""]
 *
 * @param NewSkillQuotes:arrayjson
 * @text New Skill Quotes
 * @parent Quotes
 * @type note[]
 * @desc A list of generic level up quotes for those who don't
 * have the <New Skill Quote> notetags. %1 - Actor Name
 * @default ["\"\\\\c[6]%1\\\\c[0]\\n\\\"Looks like I've acquired a new skill!\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"This new skill should come in handy.\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"It seems I've learned something new!\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"I've acquired a new power!\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"This should be useful for future battles.\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"I wonder what this new skill is like?\\\"\""]
 *
 * @param MainMenuCore
 * @text VisuMZ_1_MainMenuCore
 *
 * @param ShowBust:eval
 * @text Show Bust?
 * @parent MainMenuCore
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the actor's menu image as a bust?
 * @default true
 *
 * @param BustPosX:str
 * @text Bust Position X
 * @parent MainMenuCore
 * @desc Positon to center the actor's menu image bust.
 * You may use JavaScript code.
 * @default Graphics.width * 0.25
 *
 * @param BustPosY:str
 * @text Bust Position Y
 * @parent MainMenuCore
 * @desc Positon to anchor the actor's menu image bust.
 * You may use JavaScript code.
 * @default Graphics.height
 *
 * @param BustScale:num
 * @text Bust Scale
 * @parent MainMenuCore
 * @desc The amount to scale the actor's menu image bust.
 * @default 1.20
 *
 */
/* ----------------------------------------------------------------------------
 * Vocabulary Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Vocab:
 *
 * @param ContinueFmt:str
 * @text Continue Format
 * @desc Text format for continue message.
 * %1 - OK key, %2 - Cancel key
 * @default Press %1 or %2 to continue
 *
 * @param KeyOK:str
 * @text OK Button
 * @parent ContinueFmt:str
 * @desc Text used to represent the OK button.
 * If VisuMZ_0_CoreEngine is present, ignore this.
 * @default OK
 *
 * @param KeyCancel:str
 * @text Cancel Button
 * @parent ContinueFmt:str
 * @desc Text used to represent the Cancel button.
 * If VisuMZ_0_CoreEngine is present, ignore this.
 * @default Cancel
 *
 * @param LvFmt:str
 * @text Level Format
 * @desc Text format for actor level.
 * %1 - Level
 * @default LV %1
 *
 * @param LvUp:str
 * @text Level Up
 * @desc Text format for reaching a level up.
 * @default LEVEL UP!
 *
 * @param LvUpSfx:str
 * @text Sound Effect
 * @parent LvUp:str
 * @type file
 * @dir audio/se/
 * @desc Sound effect played when a level up occurs.
 * @default Up4
 *
 * @param LvUpVolume:num
 * @text Volume
 * @parent LvUpSfx:str
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param LvUpPitch:num
 * @text Pitch
 * @parent LvUpSfx:str
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param LvUpPan:num
 * @text Pan
 * @parent LvUpSfx:str
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @param LvUpColor:str
 * @text Text Color
 * @parent LvUp:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 17
 *
 * @param NewSkill:str
 * @text New Skill Format
 * @desc Text format describing that a new skill has been learned.
 * %1 - Actor Name
 * @default %1 has learned:
 *
 * @param RewardItems:str
 * @text Reward Items
 * @desc Text displayed for items rewarded.
 * @default Items Obtained
 *
 * @param Victory:str
 * @text Victory Title
 * @desc Text displayed at the top of the victory screen.
 * @default Victory!
 *
 */
//=============================================================================

const _0x8f00=['min','drawExpGauge','maxLvGaugeColor2','nextLevelExp','_drawParamDiff','expGaugeColor2','makeFontBigger','currentExp','setup','makeItemList','drawText','updateOpacity','updatePadding','victoryNewSkillFmt','prepareVictoryAftermathTransition','LvUpColor','randomInt','isArmor','prototype','processVictoryStep','replayBgmAndBgs','_tempActorExpGain','VictoryAftermath','gaugeHeight','KeyOK','format','floor','LevelUpQuotes','_itemGainWindow','_victoryAftermathSettings','bitmap','name','hideWindowsForVictoryAftermath','createVictoryRewardsWindow','drawNewLearnedSkills','LvUpPan','createBitmap','victoryDisplayItem','call','_subWindow','drawPartyExpGauges','map','checkVictoryAftermathAutoBattleAutoSkip','BustScale','victoryDisplayLvUp','LvUpVolume','_opacitySpeed','LvFmt','NewQuotes','SkillLearnSystem','includes','createVictoryStepRewards','Enable','toLowerCase','itemHeight','drawItemDarkRect','ActorQuotesNewSkillAdd','_mainWindow','bypassVictoryMotion','Scene_Battle_allowUpdateBattleAniSpeed','placeActorGauges','EVAL','push','clamp','nextVictoryLevelUpActor','STRUCT','CoreEngine','_currentlevel','ARRAYJSON','paintOpacity','addChild','UpdateDuration','battleEnd','activate','faceWidth','ShowExpGauges','drawRewards','constructor','innerWidth','Bypass','getQuoteText','onVictoryStepLevelUpMember','BattleManager_isBusy','GroupDigits','maxCols','max','drawParamAfterValue','ClassChangeSystem','Game_System_initialize','exit','JobPoints','actorParams','pan','_victoryWindows','isVictoryPhase','dimColor2','abilityPointsFull','match','victoryAftermathSettings','earnedClassPoints','loadFaceImages','isVictoryLevelUpPhaseEnabled','bypassVictoryMusic','204913OSLyFb','round','setVisibleUI','_colorCache','gradientFillRect','clear','30802nQvaVr','blt','isContinueReady','ConvertParams','clearRect','drawActorName','BattleManager_initMembers','SkillPoints','drawParamDiffValue','getColor','initialize','Bgm','actor%1-gauge','_data','isBypassVictoryAftermathMusic','description','isBattleMember','createSubWindow','members','_victoryLevelUpSFX','_showBust','quoteLevelUp','isSceneBattle','right','STR','translucentOpacity','ContinueFmt','drawNewLearnedSkillsList','processVictoryAftermathRewards','MirrorContents','victoryKeyCancel','quoteLevelSkill','victoryContinueMessageWindowRect','#%1','lineHeight','drawRewardStrip','getMenuImage','265326zYUQaZ','shift','rgba(0,\x200,\x200,\x200.4)','Game_Actor_shouldDisplayLevelUp','playVictoryLevelUpSFX','_victoryPhase','LvUpSfx','getAdditionalRewardsText','ClassPoints','addInnerChild','collapse','getQuoteWidth','measureTextWidth','Game_Actor_isBattleMember','AftermathText','setBackgroundType','drawItemNumber','gainTempExp','createVictoryAftermathWindows','allowUpdateBattleAniSpeed','updateVictorySteps','index','contentsOpacity','addChildToBack','_victoryUpdateDuration','level','mirrorContents','earnedAbilityPoints','BackRectColor','setupVictoryLevelUpNextActor','levelUp','_victoryAftermathNewSkillQuotes','2517FMVOii','victoryFullScreenWindowRect','parse','actor','AutoBattleAutoSkip','isBusy','VisuMZ_1_MessageCore','ActorQuotesNewSkillClear','items','Game_Actor_setup','BustPosX','(%1)','paramchangeTextColor','createVictoryLevelUpWindow','indexOf','padding','makeRewards','75747xnrTGc','isPressed','victoryNameBitmap','pop','gaugeBackColor','expGaugeColor1','isItem','finishVictoryPhase','_victoryStep','NewSkill','playSe','_victoryLevelUpBuffer','parameters','VisuMZ_1_OptionsCore','isBypassVictoryAftermathMotion','bossCollapse','isBypassVictoryAftermathPhase','bypassVictoryPhase','volume','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','MessageCore','SystemBypassVictoryPhase','processVictoryAftermathTransition','drawLevelUpQuote','LevelUp','_delayDuration','split','update','NewSkillQuotes','processVictoryAftermathMusic','create','victoryRewardBitmap','Vocab','paramValueByName','DigitGroupingStandardText','VisuMZ_2_ClassChangeSystem','rgba(0,\x200,\x200,\x200.8)','colSpacing','_statusWindow','_rewards','isRepeated','textSizeEx','224694dUrArq','drawParamName','normalColor','VisuMZ_2_SkillLearnSystem','afterActor','_effectType','contents','ARRAYSTR','victoryDisplayLvFmt','Game_Actor_performVictory','ARRAYEVAL','return\x200','rgba(0,\x200,\x200,\x201)','JSON','drawActorAdditionalRewards','resetFontSettings','drawNewLearnedSkillsBackground','battlerSprites','updateExpGain','setActionState','_victoryBgm','ShowDelayMS','ExtDisplayedParams','97353kJDyKY','beforeActor','performVictory','_scene','fontFace','updateContentsOpacity','cancel','battleMembers','registerCommand','Settings','maxLvGaugeColor1','opacity','isCollapsing','findNewSkills','note','isEnabled','itemCount','playVictoryMe','drawExpValues','141KUzPgQ','Scene_Battle_update','filter','width','_actor','victoryDisplayTitle','_victoryContinueWindow','concat','ARRAYFUNC','bind','_victoryAftermathLevelUpQuotes','done','VisuMZ_1_MainMenuCore','isActor','jobPointsAbbr','exp','jobPointsFull','_showLevelUp','victory-level-up-color','scale','ActorID','createGaugeSprite','createVictoryStepLevelUps','drawCircle','HideDelayMS','loadPicture','trim','RewardItems','Template','setupVictoryAftermathQuotes','drawItemName','makeTempActors','show','anchor','_victoryTempActorsA','_duration','victoryLevelUpColor','LvUp','move','_victoryTempActorsB','center','shouldDisplayLevelUp','playVictoryBgm','isFastForwarded','_index','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','maxBattleMembers','Victory','_victoryLevelUpWindow','ItemScene','VisuMZ_1_ItemsEquipsCore','_victoryAftermathCopy','gainRewards','classPointsAbbr','ItemsEquipsCore','createVictorySteps','left','FadeInSpeed','drawItemGainTitle','faceHeight','itemPadding','drawActorNameStrip','VisuMZ_0_CoreEngine','param','textColor','_autoBattleVictorySkip','drawParamChanges','gaugeColor2','skipVictoryAftermathTransition','length','BattleVictoryJS','updateVictoryPhase','ShowBust','x%1','newSkillQuotes','_victorySteps','createVictoryContinueMessageWindow','makeVictoryCopy','drawParamBeforeValue','refresh','_rewardSets','hideSubInputWindows','expRate','SystemBypassVictoryMotion','levelUpQuotes','_autoBattle','Rewards','paramValueFontSize','QoL','processBattleCoreJS','victoryContinueFmt','levelups','createActorSprite','boxWidth','fontSize','fillRect','systemColor','BustPosY','earnedJobPoints','getColorDataFromPluginParameters','General','AbilityPoints','WaitRegularCollapse','VisuMZ_X_Template','initVictoryAftermath','initMembers','setDelayDuration','changeTextColor','AftermathActorDisplay','makeItemGainWindow','changeExp','setActor','Text','earnedSkillPoints','removeVictoryLevelUpBuffer','makeDeepCopy','isMaxLevel','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','pitch','_spriteset','_victoryActorIndex','height','isVictoryContinueReady','drawActorLevel','ShowParamDiff','drawBackgroundElements','ItemQuantityFmt','getInputButtonString','getVictoryAftermathBackColor','processVictoryAftermathParty','FUNC','powerUpColor','skillPointsAbbr','MaxSkills','drawTextEx','WaitBossCollapse','drawItemBackground','closeCommandWindows','processVictoryAftermath','currentLevelExp','_actorSprite'];const _0x2074=function(_0x4e719a,_0x1fda45){_0x4e719a=_0x4e719a-0xab;let _0x8f006c=_0x8f00[_0x4e719a];return _0x8f006c;};const _0xab3c40=_0x2074;(function(_0x67afee,_0x37bff8){const _0x2d3efc=_0x2074;while(!![]){try{const _0x251283=-parseInt(_0x2d3efc(0x10d))+-parseInt(_0x2d3efc(0xe3))+parseInt(_0x2d3efc(0x124))+-parseInt(_0x2d3efc(0x231))+-parseInt(_0x2d3efc(0x22b))+parseInt(_0x2d3efc(0x137))*parseInt(_0x2d3efc(0xd2))+parseInt(_0x2d3efc(0xb2));if(_0x251283===_0x37bff8)break;else _0x67afee['push'](_0x67afee['shift']());}catch(_0x171f64){_0x67afee['push'](_0x67afee['shift']());}}}(_0x8f00,0x2c4ac));var label=_0xab3c40(0x1da),tier=tier||0x0,dependencies=['VisuMZ_1_BattleCore'],pluginData=$plugins['filter'](function(_0x1e75e5){const _0x413fcc=_0xab3c40;return _0x1e75e5['status']&&_0x1e75e5[_0x413fcc(0x240)][_0x413fcc(0x1f6)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0xab3c40(0x12d)]||{},VisuMZ[_0xab3c40(0x234)]=function(_0x2f6daf,_0x1f5a83){const _0x37dcf0=_0xab3c40;for(const _0x5450c2 in _0x1f5a83){if(_0x5450c2[_0x37dcf0(0x225)](/(.*):(.*)/i)){const _0x4e8844=String(RegExp['$1']),_0x49f624=String(RegExp['$2'])['toUpperCase']()[_0x37dcf0(0x151)]();let _0x4c4697,_0x26e0c4,_0x40898a;switch(_0x49f624){case'NUM':_0x4c4697=_0x1f5a83[_0x5450c2]!==''?Number(_0x1f5a83[_0x5450c2]):0x0;break;case'ARRAYNUM':_0x26e0c4=_0x1f5a83[_0x5450c2]!==''?JSON['parse'](_0x1f5a83[_0x5450c2]):[],_0x4c4697=_0x26e0c4[_0x37dcf0(0x1ed)](_0x1371ea=>Number(_0x1371ea));break;case _0x37dcf0(0x201):_0x4c4697=_0x1f5a83[_0x5450c2]!==''?eval(_0x1f5a83[_0x5450c2]):null;break;case _0x37dcf0(0x117):_0x26e0c4=_0x1f5a83[_0x5450c2]!==''?JSON[_0x37dcf0(0xd4)](_0x1f5a83[_0x5450c2]):[],_0x4c4697=_0x26e0c4['map'](_0x57aab4=>eval(_0x57aab4));break;case _0x37dcf0(0x11a):_0x4c4697=_0x1f5a83[_0x5450c2]!==''?JSON['parse'](_0x1f5a83[_0x5450c2]):'';break;case _0x37dcf0(0x208):_0x26e0c4=_0x1f5a83[_0x5450c2]!==''?JSON[_0x37dcf0(0xd4)](_0x1f5a83[_0x5450c2]):[],_0x4c4697=_0x26e0c4[_0x37dcf0(0x1ed)](_0x3fd10c=>JSON[_0x37dcf0(0xd4)](_0x3fd10c));break;case _0x37dcf0(0x1b9):_0x4c4697=_0x1f5a83[_0x5450c2]!==''?new Function(JSON[_0x37dcf0(0xd4)](_0x1f5a83[_0x5450c2])):new Function(_0x37dcf0(0x118));break;case _0x37dcf0(0x13f):_0x26e0c4=_0x1f5a83[_0x5450c2]!==''?JSON[_0x37dcf0(0xd4)](_0x1f5a83[_0x5450c2]):[],_0x4c4697=_0x26e0c4['map'](_0x57438b=>new Function(JSON[_0x37dcf0(0xd4)](_0x57438b)));break;case _0x37dcf0(0x249):_0x4c4697=_0x1f5a83[_0x5450c2]!==''?String(_0x1f5a83[_0x5450c2]):'';break;case _0x37dcf0(0x114):_0x26e0c4=_0x1f5a83[_0x5450c2]!==''?JSON[_0x37dcf0(0xd4)](_0x1f5a83[_0x5450c2]):[],_0x4c4697=_0x26e0c4[_0x37dcf0(0x1ed)](_0x3daa67=>String(_0x3daa67));break;case _0x37dcf0(0x205):_0x40898a=_0x1f5a83[_0x5450c2]!==''?JSON[_0x37dcf0(0xd4)](_0x1f5a83[_0x5450c2]):{},_0x4c4697=VisuMZ[_0x37dcf0(0x234)]({},_0x40898a);break;case'ARRAYSTRUCT':_0x26e0c4=_0x1f5a83[_0x5450c2]!==''?JSON[_0x37dcf0(0xd4)](_0x1f5a83[_0x5450c2]):[],_0x4c4697=_0x26e0c4[_0x37dcf0(0x1ed)](_0x3ee15b=>VisuMZ[_0x37dcf0(0x234)]({},JSON[_0x37dcf0(0xd4)](_0x3ee15b)));break;default:continue;}_0x2f6daf[_0x4e8844]=_0x4c4697;}}return _0x2f6daf;},(_0xcd6ac2=>{const _0xc8f90f=_0xab3c40,_0x28518a=_0xcd6ac2[_0xc8f90f(0x1e3)];for(const _0xa1c782 of dependencies){if(!Imported[_0xa1c782]){alert(_0xc8f90f(0xf6)[_0xc8f90f(0x1dd)](_0x28518a,_0xa1c782)),SceneManager[_0xc8f90f(0x21d)]();break;}}const _0x3841f0=_0xcd6ac2[_0xc8f90f(0x240)];if(_0x3841f0[_0xc8f90f(0x225)](/\[Version[ ](.*?)\]/i)){const _0xd29395=Number(RegExp['$1']);_0xd29395!==VisuMZ[label]['version']&&(alert(_0xc8f90f(0x1ac)[_0xc8f90f(0x1dd)](_0x28518a,_0xd29395)),SceneManager[_0xc8f90f(0x21d)]());}if(_0x3841f0[_0xc8f90f(0x225)](/\[Tier[ ](\d+)\]/i)){const _0x3b8980=Number(RegExp['$1']);_0x3b8980<tier?(alert(_0xc8f90f(0x164)[_0xc8f90f(0x1dd)](_0x28518a,_0x3b8980,tier)),SceneManager[_0xc8f90f(0x21d)]()):tier=Math[_0xc8f90f(0x219)](_0x3b8980,tier);}VisuMZ['ConvertParams'](VisuMZ[label][_0xc8f90f(0x12d)],_0xcd6ac2[_0xc8f90f(0xef)]);})(pluginData),PluginManager[_0xab3c40(0x12c)](pluginData[_0xab3c40(0x1e3)],'ActorQuotesLevelUpAdd',_0x2f4e63=>{const _0x844fd2=_0xab3c40;VisuMZ['ConvertParams'](_0x2f4e63,_0x2f4e63);const _0x1c42b4=$gameActors[_0x844fd2(0xd5)](_0x2f4e63[_0x844fd2(0x14b)]),_0xa37935=_0x2f4e63[_0x844fd2(0x1f4)];if(_0x1c42b4)while(_0xa37935[_0x844fd2(0x17c)]>0x0){_0x1c42b4[_0x844fd2(0x18b)]()[_0x844fd2(0x202)](_0xa37935[_0x844fd2(0xb3)]());}}),PluginManager[_0xab3c40(0x12c)](pluginData[_0xab3c40(0x1e3)],_0xab3c40(0x1fc),_0x14a98d=>{const _0x331ea5=_0xab3c40;VisuMZ[_0x331ea5(0x234)](_0x14a98d,_0x14a98d);const _0x5ec516=$gameActors[_0x331ea5(0xd5)](_0x14a98d[_0x331ea5(0x14b)]),_0x3884fd=_0x14a98d[_0x331ea5(0x1f4)];if(_0x5ec516)while(_0x3884fd[_0x331ea5(0x17c)]>0x0){_0x5ec516['newSkillQuotes']()['push'](_0x3884fd[_0x331ea5(0xb3)]());}}),PluginManager['registerCommand'](pluginData[_0xab3c40(0x1e3)],'ActorQuotesLevelUpClear',_0x2bf334=>{const _0x3aebfa=_0xab3c40;VisuMZ[_0x3aebfa(0x234)](_0x2bf334,_0x2bf334);const _0x92dfe2=$gameActors['actor'](_0x2bf334[_0x3aebfa(0x14b)]);if(_0x92dfe2)while(_0x92dfe2[_0x3aebfa(0x18b)]()[_0x3aebfa(0x17c)]>0x0){_0x92dfe2['levelUpQuotes']()['shift']();}}),PluginManager[_0xab3c40(0x12c)](pluginData[_0xab3c40(0x1e3)],_0xab3c40(0xd9),_0x173e4f=>{const _0x46ebb7=_0xab3c40;VisuMZ['ConvertParams'](_0x173e4f,_0x173e4f);const _0x2716e1=$gameActors[_0x46ebb7(0xd5)](_0x173e4f['ActorID']);if(_0x2716e1)while(_0x2716e1[_0x46ebb7(0x181)]()[_0x46ebb7(0x17c)]>0x0){_0x2716e1[_0x46ebb7(0x181)]()[_0x46ebb7(0xb3)]();}}),PluginManager[_0xab3c40(0x12c)](pluginData[_0xab3c40(0x1e3)],_0xab3c40(0x18a),_0x454e33=>{const _0x101c5b=_0xab3c40;VisuMZ[_0x101c5b(0x234)](_0x454e33,_0x454e33),$gameSystem[_0x101c5b(0x226)]()[_0x101c5b(0x1fe)]=_0x454e33['Bypass'];}),PluginManager[_0xab3c40(0x12c)](pluginData[_0xab3c40(0x1e3)],'SystemBypassVictoryMusic',_0x41badf=>{const _0x29b93c=_0xab3c40;VisuMZ[_0x29b93c(0x234)](_0x41badf,_0x41badf),$gameSystem[_0x29b93c(0x226)]()['bypassVictoryMusic']=_0x41badf['Bypass'];}),PluginManager[_0xab3c40(0x12c)](pluginData[_0xab3c40(0x1e3)],_0xab3c40(0xf8),_0x19a99a=>{const _0x17ea5f=_0xab3c40;VisuMZ[_0x17ea5f(0x234)](_0x19a99a,_0x19a99a),$gameSystem[_0x17ea5f(0x226)]()['bypassVictoryPhase']=_0x19a99a[_0x17ea5f(0x213)];}),TextManager[_0xab3c40(0x191)]=VisuMZ['VictoryAftermath'][_0xab3c40(0x12d)][_0xab3c40(0x103)][_0xab3c40(0x24b)],TextManager['victoryKeyOk']=VisuMZ[_0xab3c40(0x1da)][_0xab3c40(0x12d)]['Vocab'][_0xab3c40(0x1dc)],TextManager['victoryKeyCancel']=VisuMZ[_0xab3c40(0x1da)][_0xab3c40(0x12d)]['Vocab']['KeyCancel'],TextManager[_0xab3c40(0x115)]=VisuMZ[_0xab3c40(0x1da)][_0xab3c40(0x12d)]['Vocab'][_0xab3c40(0x1f3)],TextManager['victoryDisplayLvUp']=VisuMZ['VictoryAftermath'][_0xab3c40(0x12d)][_0xab3c40(0x103)][_0xab3c40(0x15c)],TextManager[_0xab3c40(0x1e9)]=VisuMZ['VictoryAftermath'][_0xab3c40(0x12d)][_0xab3c40(0x103)][_0xab3c40(0x152)],TextManager[_0xab3c40(0x13c)]=VisuMZ[_0xab3c40(0x1da)][_0xab3c40(0x12d)][_0xab3c40(0x103)][_0xab3c40(0x166)],TextManager[_0xab3c40(0x1d1)]=VisuMZ[_0xab3c40(0x1da)][_0xab3c40(0x12d)][_0xab3c40(0x103)][_0xab3c40(0xec)],TextManager[_0xab3c40(0x246)]=function(_0x598f45){const _0x14c6c6=_0xab3c40,_0x83a8b=VisuMZ[_0x14c6c6(0x1da)]['Settings'][_0x14c6c6(0xfb)][_0x14c6c6(0x1df)];if(!_0x598f45)return _0x83a8b[Math[_0x14c6c6(0x1d4)](_0x83a8b[_0x14c6c6(0x17c)])];if(!_0x598f45[_0x14c6c6(0x144)]())return _0x83a8b[Math['randomInt'](_0x83a8b['length'])];const _0x18be21=_0x598f45[_0x14c6c6(0x18b)]();if(_0x18be21[_0x14c6c6(0x17c)]>0x0)return _0x18be21[Math[_0x14c6c6(0x1d4)](_0x18be21['length'])];return _0x83a8b[Math[_0x14c6c6(0x1d4)](_0x83a8b[_0x14c6c6(0x17c)])];},TextManager[_0xab3c40(0xac)]=function(_0x238509){const _0x2b8bbf=_0xab3c40,_0x23cef6=VisuMZ['VictoryAftermath'][_0x2b8bbf(0x12d)][_0x2b8bbf(0xfb)][_0x2b8bbf(0xff)];if(!_0x238509)return _0x23cef6[Math[_0x2b8bbf(0x1d4)](_0x23cef6['length'])];if(!_0x238509[_0x2b8bbf(0x144)]())return _0x23cef6[Math[_0x2b8bbf(0x1d4)](_0x23cef6['length'])];const _0x1e2266=_0x238509[_0x2b8bbf(0x181)]();if(_0x1e2266['length']>0x0)return _0x1e2266[Math[_0x2b8bbf(0x1d4)](_0x1e2266[_0x2b8bbf(0x17c)])];return _0x23cef6[Math[_0x2b8bbf(0x1d4)](_0x23cef6[_0x2b8bbf(0x17c)])];},ColorManager[_0xab3c40(0x19a)]=function(_0x433caf,_0x5ab8ce){const _0x442a6d=_0xab3c40;return _0x5ab8ce=String(_0x5ab8ce),this[_0x442a6d(0x22e)]=this[_0x442a6d(0x22e)]||{},_0x5ab8ce['match'](/#(.*)/i)?this['_colorCache'][_0x433caf]='#%1'[_0x442a6d(0x1dd)](String(RegExp['$1'])):this[_0x442a6d(0x22e)][_0x433caf]=this[_0x442a6d(0x177)](Number(_0x5ab8ce)),this[_0x442a6d(0x22e)][_0x433caf];},ColorManager['getColor']=function(_0x308b00){const _0x4d50a8=_0xab3c40;return _0x308b00=String(_0x308b00),_0x308b00[_0x4d50a8(0x225)](/#(.*)/i)?_0x4d50a8(0xae)['format'](String(RegExp['$1'])):this['textColor'](Number(_0x308b00));},ColorManager[_0xab3c40(0x15b)]=function(){const _0x1efc71=_0xab3c40,_0x5c5324=_0x1efc71(0x149);this[_0x1efc71(0x22e)]=this[_0x1efc71(0x22e)]||{};if(this[_0x1efc71(0x22e)][_0x5c5324])return this[_0x1efc71(0x22e)][_0x5c5324];const _0x5071e8=VisuMZ[_0x1efc71(0x1da)]['Settings']['Vocab'][_0x1efc71(0x1d3)];return this[_0x1efc71(0x19a)](_0x5c5324,_0x5071e8);},SoundManager[_0xab3c40(0xb6)]=function(){const _0x5df11d=_0xab3c40;if(this[_0x5df11d(0xee)])return;if(!this[_0x5df11d(0x244)]){const _0x166990=VisuMZ[_0x5df11d(0x1da)]['Settings']['Vocab'];this[_0x5df11d(0x244)]={'name':_0x166990[_0x5df11d(0xb8)]||'','volume':_0x166990[_0x5df11d(0x1f1)]??0x5a,'pitch':_0x166990['LvUpPitch']??0x64,'pan':_0x166990[_0x5df11d(0x1e7)]??0x0};}this[_0x5df11d(0x244)][_0x5df11d(0x1e3)]!==''&&(AudioManager[_0x5df11d(0xed)](this[_0x5df11d(0x244)]),this[_0x5df11d(0xee)]=!![],setTimeout(this[_0x5df11d(0x1a9)][_0x5df11d(0x140)](this),0xc8));},SoundManager[_0xab3c40(0x1a9)]=function(){const _0x54ddba=_0xab3c40;this[_0x54ddba(0xee)]=![];},SoundManager['playVictoryBgm']=function(){const _0x273ca5=_0xab3c40;if(!this[_0x273ca5(0x121)]){const _0x54ef8a=VisuMZ[_0x273ca5(0x1da)][_0x273ca5(0x12d)]['General'];if(_0x54ef8a[_0x273ca5(0xf5)]===undefined)_0x54ef8a['volume']=0x5a;if(_0x54ef8a['pitch']===undefined)_0x54ef8a[_0x273ca5(0x1ad)]=0x64;if(_0x54ef8a['pan']===undefined)_0x54ef8a[_0x273ca5(0x220)]=0x0;this[_0x273ca5(0x121)]={'name':_0x54ef8a[_0x273ca5(0x23c)]||'','volume':_0x54ef8a[_0x273ca5(0xf5)]||0x0,'pitch':_0x54ef8a['pitch']||0x0,'pan':_0x54ef8a[_0x273ca5(0x220)]||0x0};}this[_0x273ca5(0x121)]['name']!==''&&AudioManager['playBgm'](this[_0x273ca5(0x121)]);},BattleManager[_0xab3c40(0xca)]=VisuMZ['VictoryAftermath'][_0xab3c40(0x12d)]['General'][_0xab3c40(0x20b)]||0x1,VisuMZ[_0xab3c40(0x1da)]['BattleManager_initMembers']=BattleManager[_0xab3c40(0x1a0)],BattleManager[_0xab3c40(0x1a0)]=function(){const _0x1259e9=_0xab3c40;VisuMZ[_0x1259e9(0x1da)][_0x1259e9(0x237)]['call'](this),this[_0x1259e9(0xb7)]=![],this[_0x1259e9(0x1af)]=-0x1,this['_autoBattleVictorySkip']=![];},VisuMZ[_0xab3c40(0x1da)]['BattleManager_isBusy']=BattleManager['isBusy'],BattleManager[_0xab3c40(0xd7)]=function(){const _0x3a0be3=_0xab3c40;return this['isVictoryPhase']()?!![]:VisuMZ[_0x3a0be3(0x1da)][_0x3a0be3(0x216)][_0x3a0be3(0x1ea)](this);},BattleManager[_0xab3c40(0x222)]=function(){const _0x5f2260=_0xab3c40;return this['_phase']===_0x5f2260(0x20c)&&this[_0x5f2260(0xb7)];},BattleManager['processVictory']=function(){const _0x4a2099=_0xab3c40;this[_0x4a2099(0x190)](_0x4a2099(0x17d)),this['processPostBattleCommonEvents'](_0x4a2099(0x166)),this[_0x4a2099(0x1c1)]();},BattleManager['processVictoryAftermath']=function(){const _0x3d4853=_0xab3c40;this[_0x3d4853(0x1b8)](),this['processVictoryAftermathMusic'](),this[_0x3d4853(0x24d)](),this['prepareVictoryAftermathTransition']();},BattleManager[_0xab3c40(0x1b8)]=function(){const _0x1773d8=_0xab3c40;$gameParty['removeBattleStates'](),$gameParty[_0x1773d8(0x126)]();},BattleManager[_0xab3c40(0x100)]=function(){const _0x3917c0=_0xab3c40;if(this[_0x3917c0(0x23f)]())return;this[_0x3917c0(0x135)](),SoundManager[_0x3917c0(0x161)]();},BattleManager['isBypassVictoryAftermathMusic']=function(){const _0x4cc5cf=_0xab3c40;return $gameSystem[_0x4cc5cf(0x226)]()[_0x4cc5cf(0x22a)]||$gameSystem[_0x4cc5cf(0x226)]()[_0x4cc5cf(0xf4)];},BattleManager[_0xab3c40(0x24d)]=function(){const _0x26edb7=_0xab3c40;this[_0x26edb7(0x156)](),this[_0x26edb7(0xe2)](),this[_0x26edb7(0x16b)]();},BattleManager[_0xab3c40(0x156)]=function(){const _0x5e24a4=_0xab3c40;this[_0x5e24a4(0x159)]=$gameParty[_0x5e24a4(0x12b)]()[_0x5e24a4(0x1ed)](_0x215ee8=>_0x215ee8[_0x5e24a4(0x184)]()),this[_0x5e24a4(0x15e)]=JsonEx[_0x5e24a4(0x1aa)](this[_0x5e24a4(0x159)]);},BattleManager[_0xab3c40(0x1d2)]=function(){const _0x4aeb6b=_0xab3c40;this[_0x4aeb6b(0x1ee)](),this['endBattle'](0x0),this[_0x4aeb6b(0xb7)]=!![],this[_0x4aeb6b(0xf3)]()?this[_0x4aeb6b(0x17b)]():this[_0x4aeb6b(0xf9)]();},BattleManager[_0xab3c40(0x1ee)]=function(){const _0x16cce1=_0xab3c40,_0x3b5969=VisuMZ['VictoryAftermath'][_0x16cce1(0x12d)][_0x16cce1(0x19b)];_0x3b5969[_0x16cce1(0xd6)]===undefined&&(_0x3b5969[_0x16cce1(0xd6)]=!![]),_0x3b5969['AutoBattleAutoSkip']===!![]&&(this[_0x16cce1(0x178)]=this[_0x16cce1(0x18c)]);},BattleManager['isBypassVictoryAftermathPhase']=function(){const _0x40ce92=_0xab3c40;if(this[_0x40ce92(0x178)])return!![];return $gameSystem[_0x40ce92(0x226)]()[_0x40ce92(0xf4)];},BattleManager[_0xab3c40(0x17b)]=function(){const _0x1f0479=_0xab3c40,_0x4ab445=VisuMZ[_0x1f0479(0x1da)][_0x1f0479(0x12d)][_0x1f0479(0x19b)],_0x2d3cdd=SceneManager[_0x1f0479(0x127)];setTimeout(_0x2d3cdd['finishVictoryPhase'][_0x1f0479(0x140)](_0x2d3cdd),_0x4ab445[_0x1f0479(0x122)]);},BattleManager[_0xab3c40(0xf9)]=function(){const _0x145368=_0xab3c40,_0x53780a=VisuMZ[_0x145368(0x1da)][_0x145368(0x12d)][_0x145368(0x19b)],_0x581696=SceneManager['_scene'];this[_0x145368(0x1d9)]=this['_rewards'][_0x145368(0x146)]/(BattleManager[_0x145368(0xca)]||0x1),Window_StatusBase[_0x145368(0x1d6)][_0x145368(0x228)](),setTimeout(_0x581696[_0x145368(0x1e4)][_0x145368(0x140)](_0x581696),_0x53780a[_0x145368(0x14f)]),setTimeout(_0x581696[_0x145368(0xc4)][_0x145368(0x140)](_0x581696),_0x53780a[_0x145368(0x122)]);},BattleManager[_0xab3c40(0x204)]=function(){const _0x5d83ce=_0xab3c40;for(;;){this[_0x5d83ce(0x1af)]++;if(this[_0x5d83ce(0x1af)]>=$gameParty[_0x5d83ce(0x165)]())return null;const _0x2bce2b=$gameParty[_0x5d83ce(0x12b)]()[this['_victoryActorIndex']],_0x522122=this[_0x5d83ce(0x15e)][this[_0x5d83ce(0x1af)]];if(_0x2bce2b[_0x5d83ce(0xcb)]!==_0x522122[_0x5d83ce(0xcb)])return _0x2bce2b;}return null;},VisuMZ['VictoryAftermath'][_0xab3c40(0x21c)]=Game_System[_0xab3c40(0x1d6)][_0xab3c40(0x23b)],Game_System[_0xab3c40(0x1d6)][_0xab3c40(0x23b)]=function(){const _0x3ab32c=_0xab3c40;VisuMZ[_0x3ab32c(0x1da)]['Game_System_initialize']['call'](this),this[_0x3ab32c(0x19f)]();},Game_System[_0xab3c40(0x1d6)][_0xab3c40(0x19f)]=function(){const _0x3d029d=_0xab3c40;this[_0x3d029d(0x1e1)]={'bypassVictoryMusic':![],'bypassVictoryPhase':![],'bypassVictoryMotion':![]};},Game_System['prototype']['victoryAftermathSettings']=function(){const _0x20c543=_0xab3c40;if(this[_0x20c543(0x1e1)]===undefined)this[_0x20c543(0x19f)]();return this[_0x20c543(0x1e1)];},VisuMZ['VictoryAftermath'][_0xab3c40(0xdb)]=Game_Actor['prototype'][_0xab3c40(0x1cc)],Game_Actor[_0xab3c40(0x1d6)]['setup']=function(_0x1f618e){const _0x581bc0=_0xab3c40;VisuMZ[_0x581bc0(0x1da)][_0x581bc0(0xdb)][_0x581bc0(0x1ea)](this,_0x1f618e),this[_0x581bc0(0x154)]();},Game_Actor[_0xab3c40(0x1d6)][_0xab3c40(0x154)]=function(){const _0x365753=_0xab3c40;this[_0x365753(0x141)]=[],this[_0x365753(0xd1)]=[];const _0xabc322=this['actor']()[_0x365753(0x132)];_0xabc322[_0x365753(0x225)](/<LEVEL UP (?:QUOTE|QUOTES)>\s*([\s\S]*)\s*<\/LEVEL UP (?:QUOTE|QUOTES)>/i)&&(this[_0x365753(0x141)]=String(RegExp['$1'])[_0x365753(0xfd)](/<NEW QUOTE>[\r\n]+/i)),_0xabc322[_0x365753(0x225)](/<NEW SKILL (?:QUOTE|QUOTES)>\s*([\s\S]*)\s*<\/NEW SKILL (?:QUOTE|QUOTES)>/i)&&(this[_0x365753(0xd1)]=String(RegExp['$1'])[_0x365753(0xfd)](/<NEW QUOTE>[\r\n]+/i));},Game_Actor['prototype'][_0xab3c40(0x18b)]=function(){const _0x3a4627=_0xab3c40;if(this[_0x3a4627(0x141)]===undefined)this[_0x3a4627(0x154)]();return this[_0x3a4627(0x141)];},Game_Actor[_0xab3c40(0x1d6)][_0xab3c40(0x181)]=function(){const _0x263a30=_0xab3c40;if(this[_0x263a30(0xd1)]===undefined)this[_0x263a30(0x154)]();return this[_0x263a30(0xd1)];},Game_Actor['prototype'][_0xab3c40(0x189)]=function(){const _0x286c6b=_0xab3c40;if(this[_0x286c6b(0x1ab)]())return 0x1;const _0xf0ee2b=this[_0x286c6b(0x1c7)]()-this[_0x286c6b(0x1c2)](),_0x2c7a17=this[_0x286c6b(0x1cb)]()-this[_0x286c6b(0x1c2)]();return(_0x2c7a17/_0xf0ee2b)[_0x286c6b(0x203)](0x0,0x1);},VisuMZ[_0xab3c40(0x1da)][_0xab3c40(0xb5)]=Game_Actor[_0xab3c40(0x1d6)][_0xab3c40(0x160)],Game_Actor[_0xab3c40(0x1d6)]['shouldDisplayLevelUp']=function(){const _0x558b62=_0xab3c40;return SceneManager[_0x558b62(0x247)]()?![]:VisuMZ[_0x558b62(0x1da)]['Game_Actor_shouldDisplayLevelUp'][_0x558b62(0x1ea)](this);},Game_Actor[_0xab3c40(0x1d6)][_0xab3c40(0x184)]=function(){const _0xf9558a=_0xab3c40,_0x23096c=JsonEx[_0xf9558a(0x1aa)](this);return _0x23096c[_0xf9558a(0x16a)]=!![],_0x23096c;},VisuMZ[_0xab3c40(0x1da)][_0xab3c40(0xbf)]=Game_Actor[_0xab3c40(0x1d6)]['isBattleMember'],Game_Actor[_0xab3c40(0x1d6)][_0xab3c40(0x241)]=function(){const _0x21005b=_0xab3c40;return this[_0x21005b(0x16a)]?!![]:VisuMZ[_0x21005b(0x1da)][_0x21005b(0xbf)]['call'](this);},VisuMZ[_0xab3c40(0x1da)][_0xab3c40(0x116)]=Game_Actor[_0xab3c40(0x1d6)][_0xab3c40(0x126)],Game_Actor[_0xab3c40(0x1d6)][_0xab3c40(0x126)]=function(){const _0x2ebe0a=_0xab3c40;this[_0x2ebe0a(0xf1)]()?this[_0x2ebe0a(0x120)](_0x2ebe0a(0x142)):VisuMZ[_0x2ebe0a(0x1da)][_0x2ebe0a(0x116)][_0x2ebe0a(0x1ea)](this);},Game_Actor['prototype']['isBypassVictoryAftermathMotion']=function(){const _0x189adf=_0xab3c40;return $gameSystem[_0x189adf(0x226)]()[_0x189adf(0x1fe)]||$gameSystem[_0x189adf(0x226)]()[_0x189adf(0xf4)];},Scene_Battle[_0xab3c40(0x1d6)][_0xab3c40(0x1e4)]=function(){const _0x1aa02c=_0xab3c40;if(this[_0x1aa02c(0x1ae)]['isCollapsing']())return setTimeout(this[_0x1aa02c(0x1e4)]['bind'](this),0x7d0);if(!SceneManager['isSceneBattle']())return;this[_0x1aa02c(0x22d)](![]),this[_0x1aa02c(0x1c0)](),this[_0x1aa02c(0x188)](),this[_0x1aa02c(0x109)]['y']=Graphics[_0x1aa02c(0x1b0)]*0xa;},Scene_Battle[_0xab3c40(0x1d6)]['createVictoryAftermathWindows']=function(){const _0x4eeee9=_0xab3c40;if(this[_0x4eeee9(0x1ae)][_0x4eeee9(0x130)]())return setTimeout(this[_0x4eeee9(0xc4)][_0x4eeee9(0x140)](this),0x7d0);this['_victoryWindows']=[],this[_0x4eeee9(0x16e)](),this[_0x4eeee9(0x183)](),this['updateVictorySteps']();},Scene_Battle[_0xab3c40(0x1d6)]['createVictorySteps']=function(){const _0x29746d=_0xab3c40;this[_0x29746d(0x182)]=[],this[_0x29746d(0x1f7)](),this[_0x29746d(0x14d)]();},Scene_Battle['prototype'][_0xab3c40(0x1f7)]=function(){const _0x165521=_0xab3c40;this[_0x165521(0x182)]['push']('rewards');},Scene_Battle[_0xab3c40(0x1d6)][_0xab3c40(0x14d)]=function(){const _0x3fde8d=_0xab3c40;if(!this[_0x3fde8d(0x229)]())return;for(const _0x17474b of $gameParty[_0x3fde8d(0x12b)]()){if(!_0x17474b)continue;const _0x4b94ef=BattleManager['_victoryTempActorsA'][_0x17474b['index']()];_0x17474b[_0x3fde8d(0xcb)]>_0x4b94ef[_0x3fde8d(0xcb)]&&this['onVictoryStepLevelUpMember'](_0x17474b);}},Scene_Battle['prototype'][_0xab3c40(0x215)]=function(_0x515758){const _0x58b84b=_0xab3c40;Imported[_0x58b84b(0x143)]&&Window_VictoryLevelUp[_0x58b84b(0x245)]&&ImageManager['loadPicture'](_0x515758[_0x58b84b(0xb1)]()),this[_0x58b84b(0x182)][_0x58b84b(0x202)]('levelups');},Scene_Battle[_0xab3c40(0x1d6)][_0xab3c40(0x229)]=function(){const _0x2857a9=_0xab3c40;return VisuMZ[_0x2857a9(0x1da)][_0x2857a9(0x12d)][_0x2857a9(0xfb)][_0x2857a9(0x1f8)];},Scene_Battle[_0xab3c40(0x1d6)][_0xab3c40(0xc6)]=function(){const _0x3c1186=_0xab3c40;this[_0x3c1186(0xeb)]=this[_0x3c1186(0x182)][_0x3c1186(0xb3)]()||'',this[_0x3c1186(0x1d7)]();},Scene_Battle[_0xab3c40(0x1d6)]['processVictoryStep']=function(){const _0xc0e88b=_0xab3c40;switch(this['_victoryStep'][_0xc0e88b(0x1f9)]()[_0xc0e88b(0x151)]()){case'rewards':this[_0xc0e88b(0x1e5)](),this[_0xc0e88b(0x13d)][_0xc0e88b(0x1a1)](BattleManager[_0xc0e88b(0xca)]);break;case _0xc0e88b(0x192):this[_0xc0e88b(0xdf)](),this[_0xc0e88b(0xcf)](),this[_0xc0e88b(0x13d)][_0xc0e88b(0x1a1)](0x0);break;default:this['finishVictoryPhase']();break;}this['addChild'](this[_0xc0e88b(0x13d)]);},Scene_Battle[_0xab3c40(0x1d6)]['victoryContinueMessageWindowRect']=function(){const _0x2870ee=_0xab3c40,_0x2ebc99=Window_Base[_0x2870ee(0x1d6)][_0x2870ee(0xaf)](),_0xe3c335=Math[_0x2870ee(0x22c)](Graphics[_0x2870ee(0x13a)]/0x2)-0x64,_0x4a95b4=Math[_0x2870ee(0x22c)](Graphics[_0x2870ee(0x1b0)]-_0x2ebc99*1.25),_0x5b4297=Math[_0x2870ee(0x22c)](Graphics['width']/0x2),_0x49db10=_0x2ebc99;return new Rectangle(_0xe3c335,_0x4a95b4,_0x5b4297,_0x49db10);},Scene_Battle['prototype'][_0xab3c40(0xd3)]=function(){const _0x883ebb=_0xab3c40,_0x3e7c83=0x0,_0x225fae=0x0,_0x51918d=Graphics[_0x883ebb(0x13a)],_0x33862b=Graphics[_0x883ebb(0x1b0)];return new Rectangle(_0x3e7c83,_0x225fae,_0x51918d,_0x33862b);},Scene_Battle[_0xab3c40(0x1d6)][_0xab3c40(0x183)]=function(){const _0x4f1491=_0xab3c40;if(this[_0x4f1491(0x13d)])return;const _0xec0df1=this[_0x4f1491(0xad)](),_0x4f1905=new Window_VictoryContinueMessage(_0xec0df1);this[_0x4f1491(0x20a)](_0x4f1905),this[_0x4f1491(0x221)]['push'](_0x4f1905),this['_victoryContinueWindow']=_0x4f1905;},Scene_Battle[_0xab3c40(0x1d6)][_0xab3c40(0x1e5)]=function(){const _0x54857b=_0xab3c40;if(this['_victoryRewardsWindow'])return;const _0x2cd179=this[_0x54857b(0xd3)](),_0x2241d1=new Window_VictoryRewards(_0x2cd179);this[_0x54857b(0x20a)](_0x2241d1),this[_0x54857b(0x221)][_0x54857b(0x202)](_0x2241d1),this['_victoryRewardsWindow']=_0x2241d1;},Scene_Battle[_0xab3c40(0x1d6)]['createVictoryLevelUpWindow']=function(){const _0xc12050=_0xab3c40;if(this[_0xc12050(0x167)])return;const _0x5a6478=this[_0xc12050(0xd3)](),_0x462fcd=new Window_VictoryLevelUp(_0x5a6478);this[_0xc12050(0x20a)](_0x462fcd),this[_0xc12050(0x221)][_0xc12050(0x202)](_0x462fcd),this[_0xc12050(0x167)]=_0x462fcd;},Scene_Battle['prototype']['setupVictoryLevelUpNextActor']=function(){const _0x1cd695=_0xab3c40,_0x138233=BattleManager[_0x1cd695(0x204)]();this[_0x1cd695(0x167)][_0x1cd695(0x1a6)](_0x138233);},Scene_Battle[_0xab3c40(0x1d6)][_0xab3c40(0xea)]=function(){const _0x10eb3b=_0xab3c40;BattleManager[_0x10eb3b(0x1d8)](),BattleManager[_0x10eb3b(0xb7)]=![];};Imported[_0xab3c40(0xf0)]&&(VisuMZ['VictoryAftermath'][_0xab3c40(0x1ff)]=Scene_Battle[_0xab3c40(0x1d6)][_0xab3c40(0xc5)],Scene_Battle[_0xab3c40(0x1d6)][_0xab3c40(0xc5)]=function(){const _0x556c31=_0xab3c40;if(BattleManager[_0x556c31(0x222)]())return![];return VisuMZ[_0x556c31(0x1da)][_0x556c31(0x1ff)]['call'](this);});;Scene_Battle[_0xab3c40(0x1d6)][_0xab3c40(0x1b1)]=function(){const _0x749d66=_0xab3c40;return this[_0x749d66(0x13d)]&&this[_0x749d66(0x13d)]['isContinueReady']();},VisuMZ['VictoryAftermath'][_0xab3c40(0x138)]=Scene_Battle['prototype'][_0xab3c40(0xfe)],Scene_Battle[_0xab3c40(0x1d6)][_0xab3c40(0xfe)]=function(){const _0x317327=_0xab3c40;VisuMZ[_0x317327(0x1da)][_0x317327(0x138)][_0x317327(0x1ea)](this),this[_0x317327(0x17e)]();},Scene_Battle['prototype']['updateVictoryPhase']=function(){const _0x3642f8=_0xab3c40;if(!BattleManager['isVictoryPhase']())return;if(!this[_0x3642f8(0x1b1)]())return;(Input[_0x3642f8(0x10b)]('ok')||Input[_0x3642f8(0x10b)](_0x3642f8(0x12a))||TouchInput[_0x3642f8(0x10b)]())&&(Input[_0x3642f8(0x230)](),TouchInput[_0x3642f8(0x230)](),this[_0x3642f8(0xc6)]());},Sprite_Enemy[_0xab3c40(0x1d6)][_0xab3c40(0x130)]=function(){const _0x1a03e8=_0xab3c40,_0x77303=VisuMZ[_0x1a03e8(0x1da)][_0x1a03e8(0x12d)][_0x1a03e8(0x19b)];if(this[_0x1a03e8(0x112)]===_0x1a03e8(0xbc)){if(_0x77303['WaitRegularCollapse']!==undefined)return _0x77303[_0x1a03e8(0x19d)];}else{if(this[_0x1a03e8(0x112)]===_0x1a03e8(0xf2)){if(_0x77303[_0x1a03e8(0x1be)]!==undefined)return _0x77303[_0x1a03e8(0x1be)];}}return['collapse',_0x1a03e8(0xf2)][_0x1a03e8(0x1f6)]();},Sprite_Battler[_0xab3c40(0x1d6)]['isCollapsing']=function(){return![];},Spriteset_Battle[_0xab3c40(0x1d6)][_0xab3c40(0x130)]=function(){const _0x18123c=_0xab3c40;return this[_0x18123c(0x11e)]()['some'](_0x46ee8e=>_0x46ee8e[_0x18123c(0x130)]());};function Sprite_VictoryGauge(){const _0x2d4831=_0xab3c40;this[_0x2d4831(0x23b)](...arguments);}Sprite_VictoryGauge['prototype']=Object[_0xab3c40(0x101)](Sprite[_0xab3c40(0x1d6)]),Sprite_VictoryGauge[_0xab3c40(0x1d6)][_0xab3c40(0x211)]=Sprite_VictoryGauge,Sprite_VictoryGauge[_0xab3c40(0x1d6)]['initialize']=function(_0x483035,_0x398d57,_0x42b2f4){const _0x3193ef=_0xab3c40;this[_0x3193ef(0x163)]=_0x483035,this[_0x3193ef(0x1fd)]=_0x398d57,this['_fullWidth']=_0x42b2f4,Sprite[_0x3193ef(0x1d6)][_0x3193ef(0x23b)][_0x3193ef(0x1ea)](this),this[_0x3193ef(0x1a0)](),this['createBitmap'](),this[_0x3193ef(0x186)](),this[_0x3193ef(0x1cf)]();},Sprite_VictoryGauge[_0xab3c40(0x1d6)]['initMembers']=function(){const _0x584ccc=_0xab3c40;this[_0x584ccc(0x15a)]=BattleManager[_0x584ccc(0xca)],this[_0x584ccc(0x207)]=this[_0x584ccc(0xd5)]()[_0x584ccc(0xcb)],this[_0x584ccc(0x148)]=![];},Sprite_VictoryGauge[_0xab3c40(0x1d6)][_0xab3c40(0x1e8)]=function(){const _0x5924bf=_0xab3c40;this[_0x5924bf(0x1e2)]=new Bitmap(this['_fullWidth'],this[_0x5924bf(0xaf)]()*0x2);},Sprite_VictoryGauge[_0xab3c40(0x1d6)][_0xab3c40(0xaf)]=function(){const _0xd50653=_0xab3c40;return Window_Base['prototype'][_0xd50653(0xaf)]();},Sprite_VictoryGauge['prototype']['actor']=function(){const _0x37b3c7=_0xab3c40;return BattleManager[_0x37b3c7(0x159)][this[_0x37b3c7(0x163)]];},Sprite_VictoryGauge['prototype']['update']=function(){const _0x47c63f=_0xab3c40;Sprite[_0x47c63f(0x1d6)][_0x47c63f(0xfe)][_0x47c63f(0x1ea)](this),this[_0x47c63f(0x11f)](),this[_0x47c63f(0x1cf)]();},Sprite_VictoryGauge[_0xab3c40(0x1d6)][_0xab3c40(0x11f)]=function(){const _0x52107a=_0xab3c40;if(this[_0x52107a(0x15a)]<=0x0)return;const _0x14f98d=this[_0x52107a(0xd5)]();this[_0x52107a(0x15a)]--;this['isFastForwarded']()&&(this[_0x52107a(0x15a)]=0x0);if(this[_0x52107a(0x15a)]<=0x0){const _0x38f0df=$gameActors['actor'](_0x14f98d['_actorId']);_0x14f98d['changeExp'](_0x38f0df[_0x52107a(0x1cb)](),![]);}else _0x14f98d[_0x52107a(0xc3)](BattleManager[_0x52107a(0x1d9)]);this[_0x52107a(0x207)]!==_0x14f98d[_0x52107a(0xcb)]&&(this[_0x52107a(0x207)]=_0x14f98d[_0x52107a(0xcb)],this[_0x52107a(0x148)]=!![],SoundManager[_0x52107a(0xb6)]()),this['refresh']();},Game_Actor[_0xab3c40(0x1d6)][_0xab3c40(0xc3)]=function(_0x1c9133){const _0x22714f=_0xab3c40,_0xe2e067=this[_0x22714f(0x1cb)]()+_0x1c9133*this['finalExpRate']();this[_0x22714f(0x1a5)](_0xe2e067,this[_0x22714f(0x160)]());},Sprite_VictoryGauge[_0xab3c40(0x1d6)]['isFastForwarded']=function(){const _0x226d9b=_0xab3c40;return SceneManager[_0x226d9b(0x127)][_0x226d9b(0x1b1)]();},Sprite_VictoryGauge[_0xab3c40(0x1d6)][_0xab3c40(0x1cf)]=function(){const _0x507844=_0xab3c40;this[_0x507844(0x12f)]=this['_mainWindow'][_0x507844(0xc8)];},Sprite_VictoryGauge['prototype'][_0xab3c40(0x186)]=function(){const _0x2c5db5=_0xab3c40;this[_0x2c5db5(0x1e2)][_0x2c5db5(0x230)](),this[_0x2c5db5(0x11c)](),this[_0x2c5db5(0x236)](),this[_0x2c5db5(0x1b2)](),this['drawActorAdditionalRewards'](),this[_0x2c5db5(0x1c5)](),this[_0x2c5db5(0x136)]();},Sprite_VictoryGauge[_0xab3c40(0x1d6)][_0xab3c40(0x11c)]=function(){const _0x421265=_0xab3c40;this['bitmap'][_0x421265(0x128)]=$gameSystem['mainFontFace'](),this['bitmap'][_0x421265(0x195)]=$gameSystem['mainFontSize'](),this[_0x421265(0x1e2)][_0x421265(0x177)]=ColorManager['normalColor']();},Sprite_VictoryGauge[_0xab3c40(0x1d6)]['drawActorName']=function(){const _0x28c4fe=_0xab3c40;this[_0x28c4fe(0x11c)]();const _0x1924dd=this['lineHeight'](),_0x1c4c24=Math[_0x28c4fe(0x22c)](_0x1924dd/0x2),_0x53b0a4=0x0,_0x59a70f=this[_0x28c4fe(0x1e2)][_0x28c4fe(0x13a)]-_0x1924dd,_0x58e602='left',_0x18142f=this['actor']()[_0x28c4fe(0x1e3)]();this['bitmap'][_0x28c4fe(0x1ce)](_0x18142f,_0x1c4c24,_0x53b0a4,_0x59a70f,_0x1924dd,_0x58e602);},Sprite_VictoryGauge[_0xab3c40(0x1d6)]['drawActorLevel']=function(){const _0x35636d=_0xab3c40;this[_0x35636d(0x11c)]();const _0x4de506=this[_0x35636d(0xaf)](),_0x1b165e=Math[_0x35636d(0x22c)](_0x4de506/0x2),_0x24909f=0x0,_0x46df28=this['bitmap'][_0x35636d(0x13a)]-_0x4de506,_0x28ef6d=this[_0x35636d(0xb9)]()===''?_0x35636d(0x248):'center',_0x8bdb9c=TextManager['victoryDisplayLvFmt'][_0x35636d(0x1dd)](this[_0x35636d(0xd5)]()[_0x35636d(0xcb)]);this['_showLevelUp']&&(this[_0x35636d(0x1e2)][_0x35636d(0x177)]=ColorManager[_0x35636d(0x1ba)]()),this['bitmap'][_0x35636d(0x1ce)](_0x8bdb9c,_0x1b165e,_0x24909f,_0x46df28,_0x4de506,_0x28ef6d);},Sprite_VictoryGauge[_0xab3c40(0x1d6)][_0xab3c40(0xb9)]=function(){const _0x238a65=_0xab3c40,_0x152554=$gameParty[_0x238a65(0x243)]()[this[_0x238a65(0x163)]];if(!_0x152554)return'';if(Imported[_0x238a65(0x19e)]&&VisuMZ[_0x238a65(0x153)]['Settings']['JobPoints'][_0x238a65(0x1a3)])return VisuMZ[_0x238a65(0x153)][_0x238a65(0x12d)]['JobPoints']['AftermathText'][_0x238a65(0x1dd)](_0x152554['earnedJobPoints'](),TextManager['jobPointsAbbr'],TextManager[_0x238a65(0x147)]);if(Imported[_0x238a65(0x106)]){const _0x3910b8=VisuMZ[_0x238a65(0x21b)][_0x238a65(0x12d)];if(_0x3910b8[_0x238a65(0xba)][_0x238a65(0x1a3)])return _0x3910b8[_0x238a65(0xba)]['AftermathText'][_0x238a65(0x1dd)](_0x152554[_0x238a65(0x227)](),TextManager[_0x238a65(0x16c)],TextManager['classPointsFull']);if(_0x3910b8['JobPoints'][_0x238a65(0x1a3)])return _0x3910b8[_0x238a65(0x21e)]['AftermathText'][_0x238a65(0x1dd)](_0x152554[_0x238a65(0x199)](),TextManager[_0x238a65(0x145)],TextManager['jobPointsFull']);}if(Imported[_0x238a65(0x110)]){const _0x2c3ecd=VisuMZ[_0x238a65(0x1f5)][_0x238a65(0x12d)];if(_0x2c3ecd[_0x238a65(0x19c)][_0x238a65(0x1a3)])return _0x2c3ecd[_0x238a65(0x19c)]['AftermathText'][_0x238a65(0x1dd)](_0x152554[_0x238a65(0xcd)](),TextManager['abilityPointsAbbr'],TextManager[_0x238a65(0x224)]);if(_0x2c3ecd['SkillPoints'][_0x238a65(0x1a3)])return _0x2c3ecd[_0x238a65(0x238)][_0x238a65(0xc0)][_0x238a65(0x1dd)](_0x152554[_0x238a65(0x1a8)](),TextManager[_0x238a65(0x1bb)],TextManager['skillPointsFull']);}return'';},Sprite_VictoryGauge['prototype'][_0xab3c40(0x11b)]=function(){const _0x4d354d=_0xab3c40;this[_0x4d354d(0x11c)]();const _0x17d746=this[_0x4d354d(0xaf)](),_0x3150fc=Math[_0x4d354d(0x22c)](_0x17d746/0x2),_0xbcaeb5=0x0,_0x3ae941=this[_0x4d354d(0x1e2)][_0x4d354d(0x13a)]-_0x17d746,_0x44b943=_0x4d354d(0x248);let _0x7960c7=this['getAdditionalRewardsText']();this[_0x4d354d(0x1e2)][_0x4d354d(0x1ce)](_0x7960c7,_0x3150fc,_0xbcaeb5,_0x3ae941,_0x17d746,_0x44b943);},Sprite_VictoryGauge[_0xab3c40(0x1d6)][_0xab3c40(0x1c5)]=function(){const _0xff541e=_0xab3c40,_0xf4fb2a=this[_0xff541e(0xaf)](),_0x7603f3=this[_0xff541e(0x1e2)][_0xff541e(0x13a)]-_0xf4fb2a,_0x50ed34=Sprite_Gauge[_0xff541e(0x1d6)][_0xff541e(0x1db)](),_0x20d356=Math['round'](_0xf4fb2a/0x2),_0x402eb3=_0xf4fb2a*0x2-_0x50ed34-0x2,_0x9b1918=Math[_0xff541e(0x1de)]((_0x7603f3-0x2)*this[_0xff541e(0xd5)]()['expRate']()),_0x4f2734=_0x50ed34-0x2,_0xe7f197=this[_0xff541e(0xe7)](),_0x52ad4d=this['gaugeColor1'](),_0xf84471=this[_0xff541e(0x17a)]();this[_0xff541e(0x1e2)][_0xff541e(0x196)](_0x20d356,_0x402eb3,_0x7603f3,_0x50ed34,_0xe7f197),this[_0xff541e(0x1e2)][_0xff541e(0x22f)](_0x20d356+0x1,_0x402eb3+0x1,_0x9b1918,_0x4f2734,_0x52ad4d,_0xf84471);},Sprite_VictoryGauge[_0xab3c40(0x1d6)][_0xab3c40(0xe7)]=function(){return ColorManager['gaugeBackColor']();},Sprite_VictoryGauge['prototype']['gaugeColor1']=function(){const _0x120488=_0xab3c40;return this[_0x120488(0xd5)]()[_0x120488(0x1ab)]()?Imported['VisuMZ_0_CoreEngine']?ColorManager[_0x120488(0x12e)]():ColorManager[_0x120488(0x177)](0xe):Imported[_0x120488(0x175)]?ColorManager[_0x120488(0xe8)]():ColorManager[_0x120488(0x177)](0x1e);},Sprite_VictoryGauge[_0xab3c40(0x1d6)][_0xab3c40(0x17a)]=function(){const _0x35a246=_0xab3c40;return this['actor']()['isMaxLevel']()?Imported[_0x35a246(0x175)]?ColorManager[_0x35a246(0x1c6)]():ColorManager[_0x35a246(0x177)](0x6):Imported[_0x35a246(0x175)]?ColorManager[_0x35a246(0x1c9)]():ColorManager[_0x35a246(0x177)](0x1f);},Sprite_VictoryGauge[_0xab3c40(0x1d6)][_0xab3c40(0x136)]=function(){const _0x51cf7=_0xab3c40;this[_0x51cf7(0x11c)]();const _0x48e63d=this[_0x51cf7(0xaf)](),_0x42d42b=_0x48e63d,_0x198247=_0x48e63d;let _0x1f5a34=this[_0x51cf7(0x1e2)]['width']-_0x48e63d*0x2;const _0x203c39=this[_0x51cf7(0xd5)]();let _0x4dd745=Math[_0x51cf7(0x22c)](_0x203c39['currentExp']()-_0x203c39['currentLevelExp']()),_0x45bff2='/'+Math[_0x51cf7(0x22c)](_0x203c39[_0x51cf7(0x1c7)]()-_0x203c39[_0x51cf7(0x1c2)]());Imported['VisuMZ_0_CoreEngine']&&VisuMZ[_0x51cf7(0x206)][_0x51cf7(0x12d)][_0x51cf7(0x18f)][_0x51cf7(0x105)]&&(_0x4dd745=VisuMZ[_0x51cf7(0x217)](_0x4dd745),_0x45bff2=VisuMZ[_0x51cf7(0x217)](_0x45bff2));this['_showLevelUp']?(this[_0x51cf7(0x1e2)][_0x51cf7(0x177)]=ColorManager[_0x51cf7(0x15b)](),this[_0x51cf7(0x1e2)][_0x51cf7(0x1ce)](TextManager[_0x51cf7(0x1f0)],_0x42d42b,_0x198247,_0x1f5a34,_0x48e63d,_0x51cf7(0x16f))):this['bitmap']['drawText'](TextManager[_0x51cf7(0x146)],_0x42d42b,_0x198247,_0x1f5a34,_0x48e63d,_0x51cf7(0x16f));this[_0x51cf7(0x11c)]();if(_0x203c39['isMaxLevel']()){this[_0x51cf7(0x1e2)]['drawText']('MAX\x20LEVEL',_0x42d42b,_0x198247,_0x1f5a34,_0x48e63d,_0x51cf7(0x248));return;}this[_0x51cf7(0x1e2)][_0x51cf7(0x195)]-=0x8,this['bitmap'][_0x51cf7(0x177)]=ColorManager[_0x51cf7(0x177)](0x8),this[_0x51cf7(0x1e2)]['drawText'](_0x45bff2,_0x42d42b,_0x198247,_0x1f5a34,_0x48e63d,_0x51cf7(0x248)),_0x1f5a34-=this['bitmap'][_0x51cf7(0xbe)](_0x45bff2),this[_0x51cf7(0x11c)](),this[_0x51cf7(0x1e2)][_0x51cf7(0x1ce)](_0x4dd745,_0x42d42b,_0x198247,_0x1f5a34,_0x48e63d,_0x51cf7(0x248));};function Window_VictoryContinueMessage(){const _0x3f7bb3=_0xab3c40;this[_0x3f7bb3(0x23b)](...arguments);}Window_VictoryContinueMessage[_0xab3c40(0x1d6)]=Object['create'](Window_Base[_0xab3c40(0x1d6)]),Window_VictoryContinueMessage[_0xab3c40(0x1d6)][_0xab3c40(0x211)]=Window_VictoryContinueMessage,Window_VictoryContinueMessage['prototype'][_0xab3c40(0x23b)]=function(_0x5f0fe4){const _0xa4c35d=_0xab3c40;Window_Base[_0xa4c35d(0x1d6)][_0xa4c35d(0x23b)][_0xa4c35d(0x1ea)](this,_0x5f0fe4),this[_0xa4c35d(0xc1)](0x2),this[_0xa4c35d(0x186)]();},Window_VictoryContinueMessage[_0xab3c40(0x1d6)][_0xab3c40(0x1a1)]=function(_0x398ea9){this['_delayDuration']=_0x398ea9,this['contentsOpacity']=0x0;},Window_VictoryContinueMessage[_0xab3c40(0x1d6)][_0xab3c40(0x1d0)]=function(){const _0x3560c7=_0xab3c40;this[_0x3560c7(0xe1)]=0x0;},Window_VictoryContinueMessage[_0xab3c40(0x1d6)][_0xab3c40(0xfe)]=function(){const _0x4bdd09=_0xab3c40;Window_Base['prototype'][_0x4bdd09(0xfe)]['call'](this),this[_0x4bdd09(0x129)]();},Window_VictoryContinueMessage[_0xab3c40(0x1d6)][_0xab3c40(0x129)]=function(){const _0x5e5235=_0xab3c40;this[_0x5e5235(0xfc)]>0x0&&this['isFastForwarded']()&&(this[_0x5e5235(0xfc)]=0x0,Input['clear'](),TouchInput[_0x5e5235(0x230)]());if(this[_0x5e5235(0xfc)]-->0x0)return;this['contentsOpacity']+=Window_VictoryRewards[_0x5e5235(0x1f2)];},Window_VictoryContinueMessage[_0xab3c40(0x1d6)][_0xab3c40(0x162)]=function(){const _0x243ae1=_0xab3c40;return Input[_0x243ae1(0xe4)]('ok')||Input[_0x243ae1(0xe4)]('cancel')||TouchInput['isPressed']();},Window_VictoryContinueMessage[_0xab3c40(0x1d6)]['refresh']=function(){const _0x34b0de=_0xab3c40;this[_0x34b0de(0x113)][_0x34b0de(0x230)]();const _0x343799=TextManager[_0x34b0de(0x191)];let _0x57db9b=TextManager['victoryKeyOk'],_0x400a3f=TextManager[_0x34b0de(0xab)];Imported[_0x34b0de(0x175)]&&(_0x57db9b=TextManager[_0x34b0de(0x1b6)]('ok'),_0x400a3f=TextManager[_0x34b0de(0x1b6)](_0x34b0de(0x12a)));const _0x395c9d=_0x343799[_0x34b0de(0x1dd)](_0x57db9b,_0x400a3f),_0x32b46d=this['textSizeEx'](_0x395c9d)['width'],_0x362a14=Math['round']((this[_0x34b0de(0x212)]-_0x32b46d)/0x2);this['drawTextEx'](_0x395c9d,_0x362a14,0x0,_0x32b46d);},Window_VictoryContinueMessage[_0xab3c40(0x1d6)][_0xab3c40(0x233)]=function(){const _0xaf115f=_0xab3c40;return this[_0xaf115f(0xfc)]<=0x0;};function Window_VictoryRewards(){const _0xb40138=_0xab3c40;this[_0xb40138(0x23b)](...arguments);}Window_VictoryRewards[_0xab3c40(0x1f2)]=VisuMZ[_0xab3c40(0x1da)]['Settings'][_0xab3c40(0x19b)][_0xab3c40(0x170)],Window_VictoryRewards[_0xab3c40(0x1d6)]=Object['create'](Window_StatusBase['prototype']),Window_VictoryRewards[_0xab3c40(0x1d6)][_0xab3c40(0x211)]=Window_VictoryRewards,Window_VictoryRewards[_0xab3c40(0x1d6)]['initialize']=function(_0x46c755){const _0x4c8e29=_0xab3c40;Window_StatusBase[_0x4c8e29(0x1d6)]['initialize'][_0x4c8e29(0x1ea)](this,_0x46c755),this[_0x4c8e29(0xc1)](0x2),this[_0x4c8e29(0xc8)]=0x0,this[_0x4c8e29(0x186)]();},Window_VictoryRewards['prototype'][_0xab3c40(0x1d0)]=function(){const _0x4f4d3c=_0xab3c40;this[_0x4f4d3c(0xe1)]=0x0;},Window_VictoryRewards[_0xab3c40(0x1d6)][_0xab3c40(0xfe)]=function(){const _0x3cdd55=_0xab3c40;Window_StatusBase[_0x3cdd55(0x1d6)][_0x3cdd55(0xfe)]['call'](this),this[_0x3cdd55(0x129)]();},Window_VictoryRewards[_0xab3c40(0x1d6)][_0xab3c40(0x129)]=function(){const _0x234ee0=_0xab3c40;SceneManager[_0x234ee0(0x127)][_0x234ee0(0xeb)]==='rewards'?this['contentsOpacity']+=Window_VictoryRewards['_opacitySpeed']:this['contentsOpacity']-=Window_VictoryRewards[_0x234ee0(0x1f2)];},Window_VictoryRewards[_0xab3c40(0x1d6)][_0xab3c40(0xcc)]=function(){const _0x1073ac=_0xab3c40;return VisuMZ[_0x1073ac(0x1da)][_0x1073ac(0x12d)][_0x1073ac(0x19b)][_0x1073ac(0x24e)];},Window_VictoryRewards[_0xab3c40(0x1d6)][_0xab3c40(0x186)]=function(){const _0x309008=_0xab3c40;Window_StatusBase[_0x309008(0x1d6)]['refresh']['call'](this),this[_0x309008(0x113)][_0x309008(0x230)](),this[_0x309008(0x11c)](),this[_0x309008(0x1b4)](),this[_0x309008(0x210)](),this[_0x309008(0x171)](),this[_0x309008(0x1a4)](),this[_0x309008(0x1ec)]();},Window_VictoryRewards[_0xab3c40(0x1d6)][_0xab3c40(0x1b4)]=function(){const _0x14d7a6=_0xab3c40,_0x8132b5=this[_0x14d7a6(0xaf)](),_0x498dea=0x0,_0xb32e59=_0x8132b5*2.5,_0x35565d=_0x14d7a6(0x107),_0xd9a41b=_0x14d7a6(0xb4),_0x50d7bf=ColorManager['normalColor']();this[_0x14d7a6(0x113)]['gradientFillRect'](_0x498dea,_0xb32e59,this[_0x14d7a6(0x13a)],this[_0x14d7a6(0x1b0)]-_0xb32e59-_0x8132b5*1.5,_0x35565d,_0xd9a41b),this['contents'][_0x14d7a6(0x196)](0x0,_0xb32e59-0x1,this[_0x14d7a6(0x13a)],0x2,_0x50d7bf),this[_0x14d7a6(0x113)]['fillRect'](0x0,this['height']-_0x8132b5*1.5-0x1,this['width'],0x2,_0x50d7bf);const _0xeee889=this[_0x14d7a6(0xcc)](),_0x32cd6d=_0xeee889?Math[_0x14d7a6(0x22c)](this[_0x14d7a6(0x13a)]/0x2+0x28):0x64,_0x1e9c78=_0xb32e59-_0x8132b5*0.75,_0x1de5b8=TextManager['victoryDisplayTitle'];this[_0x14d7a6(0x1ca)](),this['makeFontBigger'](),this[_0x14d7a6(0x1ce)](_0x1de5b8,_0x32cd6d,_0x1e9c78,this[_0x14d7a6(0x13a)]);},Window_VictoryRewards[_0xab3c40(0x187)]=VisuMZ[_0xab3c40(0x1da)][_0xab3c40(0x12d)][_0xab3c40(0x18d)],Window_VictoryRewards['prototype']['drawRewards']=function(){const _0xa420b6=_0xab3c40;this[_0xa420b6(0x11c)]();const _0x174c50=this[_0xa420b6(0xcc)](),_0x2be371=this[_0xa420b6(0xaf)](),_0x4aeadf=Math[_0xa420b6(0x1de)](_0x2be371/0x2),_0x100018=_0x174c50?Math[_0xa420b6(0x22c)](this[_0xa420b6(0x13a)]/0x2+0x28):0x64,_0x528a5b=Math[_0xa420b6(0x22c)](_0x2be371*3.5),_0x1ee3ad=Math['round'](this[_0xa420b6(0x13a)]/0x2-0x8c),_0x68b8cc=_0x1ee3ad-_0x4aeadf-0x50;let _0x495db8=_0x528a5b;for(const _0x28041d of Window_VictoryRewards['_rewardSets']){if(!_0x28041d['Show']())continue;this[_0xa420b6(0xb0)](_0x100018,_0x495db8,_0x1ee3ad),this[_0xa420b6(0x1a2)](ColorManager['systemColor']()),this[_0xa420b6(0x1ce)](_0x28041d[_0xa420b6(0x1a7)](),_0x100018+_0x4aeadf,_0x495db8,_0x68b8cc),this[_0xa420b6(0x1a2)](ColorManager[_0xa420b6(0x10f)]()),this[_0xa420b6(0x1ce)](_0x28041d['Data'](),_0x100018+_0x4aeadf,_0x495db8,_0x68b8cc,_0xa420b6(0x248)),_0x495db8+=_0x2be371;}},Window_VictoryRewards[_0xab3c40(0x1d6)][_0xab3c40(0xb0)]=function(_0x208c38,_0x42ea23,_0x12bae6){const _0x1f6dd2=_0xab3c40,_0x5a8a95=this['lineHeight']()-0x2,_0x2f73bf=Math[_0x1f6dd2(0x1de)](_0x5a8a95/0x2),_0x40185e=_0x1f6dd2(0x119),_0x1e2f5d=ColorManager[_0x1f6dd2(0x223)](),_0x5e6e00=0x50,_0x359675=_0x12bae6-_0x2f73bf-_0x5e6e00;!ImageManager['victoryRewardBitmap']&&(ImageManager[_0x1f6dd2(0x102)]=new Bitmap(_0x12bae6,_0x5a8a95),ImageManager[_0x1f6dd2(0x102)][_0x1f6dd2(0x209)]=this[_0x1f6dd2(0x24a)](),ImageManager[_0x1f6dd2(0x102)]['drawCircle'](_0x2f73bf,_0x2f73bf,_0x2f73bf,_0x40185e),ImageManager[_0x1f6dd2(0x102)]['clearRect'](_0x2f73bf,0x0,_0x5a8a95,_0x5a8a95),ImageManager[_0x1f6dd2(0x102)]['fillRect'](_0x2f73bf,0x0,_0x359675,_0x5a8a95,_0x40185e),ImageManager[_0x1f6dd2(0x102)][_0x1f6dd2(0x22f)](_0x2f73bf+_0x359675,0x0,_0x5e6e00,_0x5a8a95,_0x40185e,_0x1e2f5d)),this[_0x1f6dd2(0x113)][_0x1f6dd2(0x232)](ImageManager['victoryRewardBitmap'],0x0,0x0,_0x12bae6,_0x5a8a95,_0x208c38,_0x42ea23,_0x12bae6,_0x5a8a95);},Window_VictoryRewards[_0xab3c40(0x1d6)][_0xab3c40(0x171)]=function(){const _0x2113bc=_0xab3c40;this['resetFontSettings']();if(BattleManager[_0x2113bc(0x10a)]['items']['length']<=0x0)return;const _0x103e87=this[_0x2113bc(0xcc)](),_0x531335=this[_0x2113bc(0xaf)](),_0x3a64ff=_0x103e87?0x8c:Math[_0x2113bc(0x22c)](this[_0x2113bc(0x13a)]/0x2+0x28),_0x4d3d76=Math[_0x2113bc(0x22c)](_0x531335*0x3),_0x4fb3e2=Math[_0x2113bc(0x22c)](this[_0x2113bc(0x13a)]/0x2-0x8c),_0x3ddd41=TextManager[_0x2113bc(0x1e9)],_0x1445df=ColorManager[_0x2113bc(0x10f)]();this[_0x2113bc(0x1ca)](),this[_0x2113bc(0x1ce)](_0x3ddd41,_0x3a64ff,_0x4d3d76,_0x4fb3e2,_0x2113bc(0x16f));const _0x2eae1c=_0x103e87?0x64:Math[_0x2113bc(0x22c)](this['width']/0x2),_0x28f339=_0x4d3d76+_0x531335*1.5,_0x3ab31d=Math[_0x2113bc(0x22c)](this['width']/0x2)-0x64;this[_0x2113bc(0x113)][_0x2113bc(0x196)](_0x2eae1c,_0x28f339,_0x3ab31d,0x2,_0x1445df);},Window_VictoryRewards['prototype'][_0xab3c40(0x1a4)]=function(){const _0x54ce31=_0xab3c40,_0x4665e5=this[_0x54ce31(0xcc)](),_0x172b5e=this[_0x54ce31(0xaf)](),_0xeb9527=_0x4665e5?0x64:Math[_0x54ce31(0x22c)](this[_0x54ce31(0x13a)]/0x2+0x28),_0x371bf0=Math['round'](_0x172b5e*0x5),_0x5b62e3=Math['round'](this[_0x54ce31(0x13a)]/0x2-0x8c),_0xa83b02=this['height']-_0x371bf0-_0x172b5e*0x2,_0x240f09=new Rectangle(_0xeb9527,_0x371bf0,_0x5b62e3,_0xa83b02);this['_itemGainWindow']=new Window_VictoryItem(_0x240f09,this),this['addChild'](this[_0x54ce31(0x1e0)]);},Window_VictoryRewards['prototype'][_0xab3c40(0x1ec)]=function(){const _0x5d7aa5=_0xab3c40;this['resetFontSettings']();const _0x2839a8=this['mirrorContents'](),_0x1abbad=this[_0x5d7aa5(0xaf)](),_0x554d86=$gameParty[_0x5d7aa5(0x165)](),_0x13438b=_0x2839a8?Math[_0x5d7aa5(0x22c)](this[_0x5d7aa5(0x13a)]/0x2+0x28):0x64,_0x2c5d71=this[_0x5d7aa5(0x1b0)]-1.5-_0x1abbad*0x2*(_0x554d86+0x1),_0x1253d9=Math[_0x5d7aa5(0x22c)](this[_0x5d7aa5(0x13a)]/0x2-0x8c);let _0x18a13f=_0x2c5d71;if(VisuMZ[_0x5d7aa5(0x1da)][_0x5d7aa5(0x12d)][_0x5d7aa5(0x19b)][_0x5d7aa5(0x20f)]??!![])for(let _0x18193c=0x0;_0x18193c<_0x554d86;_0x18193c++){if(!$gameParty[_0x5d7aa5(0x243)]()[_0x18193c])continue;this[_0x5d7aa5(0x174)](_0x13438b,_0x18a13f,_0x1253d9),this['placeActorGauges'](_0x18193c,_0x13438b,_0x18a13f,_0x1253d9),_0x18a13f+=_0x1abbad*0x2;}},Window_VictoryRewards[_0xab3c40(0x1d6)]['drawActorNameStrip']=function(_0x1beaf7,_0x1eebe9,_0x3fb47b){const _0x3c5baa=_0xab3c40,_0x41d5e8=this['lineHeight']()-0x2,_0x23b306=Math[_0x3c5baa(0x1de)](_0x41d5e8/0x2),_0x2b5e73=_0x3c5baa(0x119),_0x23113a=ColorManager[_0x3c5baa(0x223)](),_0x23ce9a=_0x3fb47b-_0x41d5e8;!ImageManager['victoryNameBitmap']&&(ImageManager['victoryNameBitmap']=new Bitmap(_0x3fb47b,_0x41d5e8),ImageManager[_0x3c5baa(0xe5)]['paintOpacity']=this['translucentOpacity'](),ImageManager[_0x3c5baa(0xe5)][_0x3c5baa(0x14e)](_0x23b306,_0x23b306,_0x23b306,_0x2b5e73),ImageManager['victoryNameBitmap'][_0x3c5baa(0x14e)](_0x23b306+_0x23ce9a,_0x23b306,_0x23b306,_0x2b5e73),ImageManager[_0x3c5baa(0xe5)][_0x3c5baa(0x235)](_0x23b306,0x0,_0x23ce9a,_0x41d5e8),ImageManager[_0x3c5baa(0xe5)][_0x3c5baa(0x196)](_0x23b306,0x0,_0x23ce9a,_0x41d5e8,_0x2b5e73)),this[_0x3c5baa(0x113)][_0x3c5baa(0x232)](ImageManager['victoryNameBitmap'],0x0,0x0,_0x3fb47b,_0x41d5e8,_0x1beaf7,_0x1eebe9,_0x3fb47b,_0x41d5e8);},Window_VictoryRewards[_0xab3c40(0x1d6)][_0xab3c40(0x200)]=function(_0x15c32a,_0x973c2d,_0x2590bb,_0x2990e4){const _0x18a70c=_0xab3c40,_0x21c7b9=_0x18a70c(0x23d)[_0x18a70c(0x1dd)](_0x15c32a),_0x2332d9=this['createGaugeSprite'](_0x21c7b9,_0x15c32a,_0x2990e4);_0x2332d9[_0x18a70c(0x15d)](_0x973c2d,_0x2590bb),_0x2332d9[_0x18a70c(0x157)]();},Window_VictoryRewards['prototype'][_0xab3c40(0x14c)]=function(_0x421979,_0xbcd0b5,_0xb23761){const _0x511195=_0xab3c40,_0x7c184e=this['_additionalSprites'];if(_0x7c184e[_0x421979])return _0x7c184e[_0x421979];else{const _0x1d039b=new Sprite_VictoryGauge(_0xbcd0b5,this,_0xb23761);return _0x7c184e[_0x421979]=_0x1d039b,this[_0x511195(0xbb)](_0x1d039b),_0x1d039b;}};function Window_VictoryItem(){const _0x358860=_0xab3c40;this[_0x358860(0x23b)](...arguments);}Window_VictoryItem[_0xab3c40(0x1d6)]=Object[_0xab3c40(0x101)](Window_ItemList[_0xab3c40(0x1d6)]),Window_VictoryItem[_0xab3c40(0x1d6)][_0xab3c40(0x211)]=Window_VictoryItem,Window_VictoryItem[_0xab3c40(0x1d6)][_0xab3c40(0x23b)]=function(_0x192992,_0x1c6852){const _0x404007=_0xab3c40;this[_0x404007(0x1fd)]=_0x1c6852,Window_ItemList[_0x404007(0x1d6)][_0x404007(0x23b)][_0x404007(0x1ea)](this,_0x192992),this[_0x404007(0xc1)](0x2),this['refresh'](),this[_0x404007(0x129)](),this[_0x404007(0x23e)][_0x404007(0x17c)]>this['maxVisibleItems']()&&(this[_0x404007(0x20d)](),this['select'](0x0));},Window_VictoryItem[_0xab3c40(0x1d6)]['itemHeight']=function(){const _0x6a8725=_0xab3c40;return Window_Base['prototype'][_0x6a8725(0x1fa)][_0x6a8725(0x1ea)](this);},Window_VictoryItem[_0xab3c40(0x1d6)][_0xab3c40(0x1d0)]=function(){this['padding']=0x0;},Window_VictoryItem['prototype'][_0xab3c40(0x218)]=function(){return 0x1;},Window_VictoryItem[_0xab3c40(0x1d6)][_0xab3c40(0x108)]=function(){return 0x0;},Window_VictoryItem[_0xab3c40(0x1d6)]['update']=function(){const _0x522c78=_0xab3c40;Window_ItemList[_0x522c78(0x1d6)][_0x522c78(0xfe)][_0x522c78(0x1ea)](this),this[_0x522c78(0x129)]();},Window_VictoryItem[_0xab3c40(0x1d6)][_0xab3c40(0x129)]=function(){const _0x5eaadc=_0xab3c40;this[_0x5eaadc(0xc8)]=this[_0x5eaadc(0x1fd)][_0x5eaadc(0xc8)];},Window_VictoryItem[_0xab3c40(0x1d6)][_0xab3c40(0x1cd)]=function(){const _0x54f3f6=_0xab3c40,_0xc4c8c8=BattleManager['_rewards'][_0x54f3f6(0xda)];_0xc4c8c8['sort']((_0x3190ec,_0x49953e)=>_0x3190ec['id']-_0x49953e['id']);const _0xb8de8c=_0xc4c8c8[_0x54f3f6(0x139)](_0x2554e1=>DataManager[_0x54f3f6(0xe9)](_0x2554e1)),_0x172859=_0xc4c8c8['filter'](_0x2775cb=>DataManager['isWeapon'](_0x2775cb)),_0x2a955f=_0xc4c8c8['filter'](_0x18a258=>DataManager[_0x54f3f6(0x1d5)](_0x18a258));this[_0x54f3f6(0x23e)]=_0xb8de8c['concat'](_0x172859)[_0x54f3f6(0x13e)](_0x2a955f),this[_0x54f3f6(0x23e)]=this[_0x54f3f6(0x23e)][_0x54f3f6(0x139)]((_0x5a0d99,_0x21e52d,_0x47d7f6)=>_0x47d7f6[_0x54f3f6(0xe0)](_0x5a0d99)===_0x21e52d);},Window_VictoryItem[_0xab3c40(0x1d6)][_0xab3c40(0x133)]=function(_0xdb2a70){return!![];},Window_VictoryItem[_0xab3c40(0x1d6)]['isShowNew']=function(){return![];},Window_VictoryItem[_0xab3c40(0x1d6)][_0xab3c40(0x134)]=function(_0x2168de){const _0x1521d6=_0xab3c40;return BattleManager[_0x1521d6(0x10a)][_0x1521d6(0xda)]['filter'](_0x2e6135=>_0x2e6135===_0x2168de)['length'];},Window_VictoryItem[_0xab3c40(0x1d6)][_0xab3c40(0x1bf)]=function(_0x186aa0){},Window_VictoryItem[_0xab3c40(0x1d6)][_0xab3c40(0xc2)]=function(_0x3fbc5f,_0x191d23,_0x59e20e,_0x22c3b8){const _0x4a6af5=_0xab3c40;let _0x2a7214=_0x4a6af5(0x180);Imported[_0x4a6af5(0x169)]&&(_0x2a7214=VisuMZ[_0x4a6af5(0x16d)][_0x4a6af5(0x12d)][_0x4a6af5(0x168)][_0x4a6af5(0x1b5)]);let _0x5f2198=_0x2a7214[_0x4a6af5(0x1dd)](this[_0x4a6af5(0x134)](_0x3fbc5f));this[_0x4a6af5(0x1ce)](_0x5f2198,_0x191d23,_0x59e20e,_0x22c3b8,_0x4a6af5(0x248));};function Window_VictoryLevelUp(){const _0x4d06ac=_0xab3c40;this[_0x4d06ac(0x23b)](...arguments);}Window_VictoryLevelUp[_0xab3c40(0x1f2)]=Window_VictoryRewards[_0xab3c40(0x1f2)],Window_VictoryLevelUp[_0xab3c40(0x245)]=VisuMZ[_0xab3c40(0x1da)][_0xab3c40(0x12d)][_0xab3c40(0xfb)][_0xab3c40(0x17f)],Window_VictoryLevelUp['prototype']=Object['create'](Window_StatusBase[_0xab3c40(0x1d6)]),Window_VictoryLevelUp[_0xab3c40(0x1d6)]['constructor']=Window_VictoryLevelUp,Window_VictoryLevelUp['prototype']['initialize']=function(_0xf19eb0){const _0xedf026=_0xab3c40;Window_StatusBase[_0xedf026(0x1d6)][_0xedf026(0x23b)]['call'](this,_0xf19eb0),this['setBackgroundType'](0x2),this[_0xedf026(0xc8)]=0x0,this[_0xedf026(0x186)](),this[_0xedf026(0x193)](),this[_0xedf026(0x242)]();},Window_VictoryLevelUp[_0xab3c40(0x1d6)][_0xab3c40(0x1d0)]=function(){this['padding']=0x0;},Window_VictoryLevelUp[_0xab3c40(0x1d6)]['update']=function(){const _0xa7f6db=_0xab3c40;Window_StatusBase[_0xa7f6db(0x1d6)]['update'][_0xa7f6db(0x1ea)](this),this[_0xa7f6db(0x129)]();},Window_VictoryLevelUp[_0xab3c40(0x1d6)][_0xab3c40(0x129)]=function(){const _0xb01ee5=_0xab3c40;SceneManager[_0xb01ee5(0x127)][_0xb01ee5(0xeb)]===_0xb01ee5(0x192)?this[_0xb01ee5(0xc8)]+=Window_VictoryLevelUp[_0xb01ee5(0x1f2)]:this['contentsOpacity']-=Window_VictoryLevelUp[_0xb01ee5(0x1f2)],this[_0xb01ee5(0x1c3)]&&(this[_0xb01ee5(0x1c3)][_0xb01ee5(0x12f)]=this[_0xb01ee5(0xc8)]);},Window_VictoryLevelUp[_0xab3c40(0x1d6)][_0xab3c40(0x186)]=function(){const _0x5e99dc=_0xab3c40;Window_StatusBase[_0x5e99dc(0x1d6)][_0x5e99dc(0x186)][_0x5e99dc(0x1ea)](this),this['contents'][_0x5e99dc(0x230)](),this['resetFontSettings'](),this[_0x5e99dc(0x1b4)]();},Window_VictoryLevelUp[_0xab3c40(0x1d6)]['drawBackgroundElements']=function(){const _0xba4517=_0xab3c40,_0x3dfa8b=this['lineHeight'](),_0x2434ab=_0xba4517(0x107),_0xb03346=_0xba4517(0xb4),_0x38fe77=ColorManager[_0xba4517(0x10f)](),_0x44a5d2=SceneManager[_0xba4517(0x127)][_0xba4517(0x13d)]['x'],_0x3f5b4c=Math[_0xba4517(0x22c)](this[_0xba4517(0x13a)]/0x2);this[_0xba4517(0x113)][_0xba4517(0x22f)](_0x44a5d2,0x0,_0x3f5b4c,this[_0xba4517(0x1b0)],_0xb03346,_0x2434ab,!![]),this['contents'][_0xba4517(0x196)](_0x44a5d2-0x1,0x0,0x2,this[_0xba4517(0x1b0)],_0x38fe77),this[_0xba4517(0x113)][_0xba4517(0x196)](_0x44a5d2+_0x3f5b4c-0x1,0x0,0x2,this[_0xba4517(0x1b0)],_0x38fe77);const _0x266ef2=_0x3dfa8b,_0x10c614=_0x3dfa8b*0x1;this[_0xba4517(0x113)][_0xba4517(0x22f)](0x0,_0x266ef2,this['width'],_0x10c614,_0x2434ab,_0xb03346),this[_0xba4517(0x113)][_0xba4517(0x196)](0x0,_0x266ef2-0x1,this[_0xba4517(0x13a)],0x2,_0x38fe77),this['contents'][_0xba4517(0x196)](0x0,_0x266ef2+_0x10c614-0x1,this[_0xba4517(0x13a)],0x2,_0x38fe77);const _0x511bf8=this[_0xba4517(0x1b0)]-_0x3dfa8b*5.5,_0x1ddd3b=_0x3dfa8b*0x4;this[_0xba4517(0x113)][_0xba4517(0x22f)](0x0,_0x511bf8,this[_0xba4517(0x13a)],_0x1ddd3b,_0x2434ab,_0xb03346),this[_0xba4517(0x113)]['gradientFillRect'](0x0,_0x511bf8,this[_0xba4517(0x13a)],_0x1ddd3b,_0xb03346,_0x2434ab),this[_0xba4517(0x113)][_0xba4517(0x196)](0x0,_0x511bf8-0x2,this[_0xba4517(0x13a)],0x2,_0x38fe77),this[_0xba4517(0x113)][_0xba4517(0x196)](0x0,_0x511bf8+_0x1ddd3b,this[_0xba4517(0x13a)],0x2,_0x38fe77);},Window_VictoryLevelUp[_0xab3c40(0x1d6)]['createActorSprite']=function(){const _0x520f02=_0xab3c40,_0x3fa551=VisuMZ[_0x520f02(0x1da)][_0x520f02(0x12d)][_0x520f02(0xfb)];this[_0x520f02(0x1c3)]=new Sprite(),this['_actorSprite'][_0x520f02(0x158)]['x']=0.5,this['_actorSprite']['anchor']['y']=0x1,this[_0x520f02(0x1c3)][_0x520f02(0x12f)]=0x0,this['_actorSprite']['x']=Math[_0x520f02(0x22c)](eval(_0x3fa551[_0x520f02(0xdc)])),this[_0x520f02(0x1c3)]['y']=Math[_0x520f02(0x22c)](eval(_0x3fa551[_0x520f02(0x198)])),this[_0x520f02(0x1c3)][_0x520f02(0x14a)]['x']=_0x3fa551[_0x520f02(0x1ef)],this[_0x520f02(0x1c3)]['scale']['y']=_0x3fa551['BustScale'],this[_0x520f02(0xc9)](this[_0x520f02(0x1c3)]);},Window_VictoryLevelUp[_0xab3c40(0x1d6)][_0xab3c40(0x242)]=function(){const _0x543a30=_0xab3c40,_0x38bd2e=new Rectangle(0x0,0x0,this[_0x543a30(0x13a)],this[_0x543a30(0x1b0)]);this['_subWindow']=new Window_VictoryLevelUpActor(_0x38bd2e,this),this[_0x543a30(0x20a)](this['_subWindow']);},Window_VictoryLevelUp[_0xab3c40(0x1d6)][_0xab3c40(0x1a6)]=function(_0x51d7ce){const _0x628a2c=_0xab3c40;Imported[_0x628a2c(0x143)]&&Window_VictoryLevelUp[_0x628a2c(0x245)]&&(this[_0x628a2c(0x1c3)][_0x628a2c(0x1e2)]=ImageManager[_0x628a2c(0x150)](_0x51d7ce['getMenuImage']())),SoundManager[_0x628a2c(0xb6)](),this[_0x628a2c(0x1eb)]['setActor'](_0x51d7ce);};function Window_VictoryLevelUpActor(){const _0x3c42c8=_0xab3c40;this[_0x3c42c8(0x23b)](...arguments);}Window_VictoryLevelUpActor[_0xab3c40(0x1f2)]=Window_VictoryRewards[_0xab3c40(0x1f2)],Window_VictoryLevelUpActor[_0xab3c40(0x1c8)]=VisuMZ[_0xab3c40(0x1da)][_0xab3c40(0x12d)][_0xab3c40(0xfb)][_0xab3c40(0x1b3)],Window_VictoryLevelUpActor['_showFace']=VisuMZ[_0xab3c40(0x1da)][_0xab3c40(0x12d)][_0xab3c40(0xfb)]['ShowFace'],Window_VictoryLevelUpActor['prototype']=Object[_0xab3c40(0x101)](Window_StatusBase['prototype']),Window_VictoryLevelUpActor[_0xab3c40(0x1d6)][_0xab3c40(0x211)]=Window_VictoryLevelUpActor,Window_VictoryLevelUpActor[_0xab3c40(0x1d6)][_0xab3c40(0x23b)]=function(_0x18cd27,_0x87b715){const _0x20a8da=_0xab3c40;this[_0x20a8da(0x1fd)]=_0x87b715,Window_StatusBase[_0x20a8da(0x1d6)][_0x20a8da(0x23b)]['call'](this,_0x18cd27),this[_0x20a8da(0xc1)](0x2),this[_0x20a8da(0xc8)]=0x0,this['_actor']=null,this['refresh']();},Window_VictoryLevelUpActor[_0xab3c40(0x1d6)]['updatePadding']=function(){this['padding']=0x0;},Window_VictoryLevelUpActor[_0xab3c40(0x1d6)][_0xab3c40(0xfe)]=function(){const _0x427c57=_0xab3c40;Window_StatusBase[_0x427c57(0x1d6)]['update'][_0x427c57(0x1ea)](this),this[_0x427c57(0x129)]();},Window_VictoryLevelUpActor['prototype'][_0xab3c40(0x129)]=function(){const _0x5719be=_0xab3c40;this[_0x5719be(0xc8)]=this[_0x5719be(0x1fd)][_0x5719be(0xc8)];},Window_VictoryLevelUpActor['prototype'][_0xab3c40(0x1a6)]=function(_0x5e251b){const _0x19295e=_0xab3c40;this[_0x19295e(0x13b)]=_0x5e251b,this[_0x19295e(0x186)]();},Window_VictoryLevelUpActor[_0xab3c40(0x1d6)][_0xab3c40(0x125)]=function(){const _0x24506f=_0xab3c40,_0x1a87d7=this[_0x24506f(0x13b)][_0x24506f(0xc7)]();return BattleManager['_victoryTempActorsB'][_0x1a87d7];},Window_VictoryLevelUpActor[_0xab3c40(0x1d6)][_0xab3c40(0x111)]=function(){const _0x180b8f=_0xab3c40,_0x170b58=this[_0x180b8f(0x13b)][_0x180b8f(0xc7)]();return BattleManager[_0x180b8f(0x159)][_0x170b58];},Window_VictoryLevelUpActor['prototype'][_0xab3c40(0x186)]=function(){const _0x51772b=_0xab3c40;Window_StatusBase[_0x51772b(0x1d6)][_0x51772b(0x186)]['call'](this),this['contents'][_0x51772b(0x230)](),this[_0x51772b(0x11c)]();if(!this[_0x51772b(0x13b)])return;this['drawLevelMessage'](),this[_0x51772b(0x179)](),this[_0x51772b(0x1e6)](),this[_0x51772b(0xfa)]();},Window_VictoryLevelUpActor[_0xab3c40(0x1d6)]['drawLevelMessage']=function(){const _0x5b108f=_0xab3c40,_0x440910=this[_0x5b108f(0xaf)](),_0x2c2e38=TextManager[_0x5b108f(0xd0)][_0x5b108f(0x1dd)](this[_0x5b108f(0x13b)]['name'](),TextManager[_0x5b108f(0xcb)],this[_0x5b108f(0x13b)]['level']),_0x33c152=this[_0x5b108f(0x10c)](_0x2c2e38)[_0x5b108f(0x13a)],_0x55fef3=SceneManager[_0x5b108f(0x127)][_0x5b108f(0x13d)]['x']+Math[_0x5b108f(0x22c)]((this[_0x5b108f(0x13a)]/0x2-_0x33c152)/0x2),_0x36d6af=_0x440910;this[_0x5b108f(0x1bd)](_0x2c2e38,_0x55fef3,_0x36d6af,_0x33c152);},Window_VictoryLevelUpActor[_0xab3c40(0x1d6)]['drawItemDarkRect']=function(_0x34fdbe,_0x47fc8b,_0x36e00b,_0x4395e0,_0x54dbf8){const _0x395e4a=_0xab3c40;if(VisuMZ['VictoryAftermath']['Settings'][_0x395e4a(0xfb)]['DrawBackRect']===![])return;_0x54dbf8=Math[_0x395e4a(0x219)](_0x54dbf8||0x1,0x1);while(_0x54dbf8--){_0x4395e0=_0x4395e0||this[_0x395e4a(0xaf)](),this['contents'][_0x395e4a(0x209)]=0xa0;const _0x2c1f28=ColorManager[_0x395e4a(0x1b7)]();this[_0x395e4a(0x113)][_0x395e4a(0x196)](_0x34fdbe+0x1,_0x47fc8b+0x1,_0x36e00b-0x2,_0x4395e0-0x2,_0x2c1f28),this[_0x395e4a(0x113)][_0x395e4a(0x209)]=0xff;}},ColorManager[_0xab3c40(0x1b7)]=function(){const _0x286c40=_0xab3c40,_0x40e326=VisuMZ[_0x286c40(0x1da)][_0x286c40(0x12d)][_0x286c40(0xfb)];let _0x3322b8=_0x40e326[_0x286c40(0xce)]!==undefined?_0x40e326[_0x286c40(0xce)]:0x13;return ColorManager[_0x286c40(0x23a)](_0x3322b8);},Window_VictoryLevelUpActor['prototype']['drawParamChanges']=function(){const _0x2de7e7=_0xab3c40,_0x4dfa26=this['lineHeight'](),_0x46792a='→',_0x491a88=this[_0x2de7e7(0x21f)](),_0x3dcead=_0x4dfa26*0x2,_0x180f65=this[_0x2de7e7(0x1b0)]-_0x4dfa26*5.5,_0x23fc75=this['textWidth'](_0x46792a)+this[_0x2de7e7(0x173)]()*0x2,_0x276a77=Window_VictoryLevelUpActor[_0x2de7e7(0x1c8)]?0x4:0x3,_0x1d35ae=Math['round']((this[_0x2de7e7(0x13a)]/0x2-_0x23fc75-this['itemPadding']()*0x2)/_0x276a77),_0x1eda28=_0x180f65-_0x3dcead,_0x12c392=VisuMZ['VictoryAftermath']['Settings']['LevelUp']['HideLevelDiff'],_0x4a193c=SceneManager[_0x2de7e7(0x127)][_0x2de7e7(0x13d)]['x']+this[_0x2de7e7(0x173)](),_0x353b3f=_0x4a193c+_0x1d35ae,_0xe5b324=_0x353b3f+_0x1d35ae,_0x18db51=_0xe5b324+_0x23fc75,_0x5bcdce=_0x18db51+_0x1d35ae;let _0x26452a=Math[_0x2de7e7(0x22c)](_0x3dcead+(_0x1eda28-(_0x491a88[_0x2de7e7(0x17c)]+(_0x12c392?0x0:0x1))*_0x4dfa26)/0x2),_0x2b1427=0x2;!_0x12c392&&(this['resetFontSettings'](),VisuMZ['ItemsEquipsCore']&&(this[_0x2de7e7(0x113)]['fontSize']=Window_EquipStatus[_0x2de7e7(0x1d6)][_0x2de7e7(0x18e)]()),this['drawItemDarkRect'](_0x4a193c,_0x26452a,_0x1d35ae,_0x4dfa26,_0x2b1427),this[_0x2de7e7(0x10e)](_0x2de7e7(0xcb),_0x4a193c,_0x26452a,_0x1d35ae),this['drawItemDarkRect'](_0x353b3f,_0x26452a,_0x1d35ae,_0x4dfa26,_0x2b1427),this[_0x2de7e7(0x185)]('level',_0x353b3f,_0x26452a,_0x1d35ae),this[_0x2de7e7(0x1fb)](_0xe5b324,_0x26452a,_0x23fc75,_0x4dfa26,_0x2b1427),this[_0x2de7e7(0x1a2)](ColorManager[_0x2de7e7(0x197)]()),this['drawText'](_0x46792a,_0xe5b324,_0x26452a,_0x23fc75,'center'),this['drawItemDarkRect'](_0x18db51,_0x26452a,_0x1d35ae,_0x4dfa26,_0x2b1427),this[_0x2de7e7(0x21a)]('level',_0x18db51,_0x26452a,_0x1d35ae),Window_VictoryLevelUpActor[_0x2de7e7(0x1c8)]&&(this[_0x2de7e7(0x1fb)](_0x5bcdce,_0x26452a,_0x1d35ae,_0x4dfa26,_0x2b1427),this[_0x2de7e7(0x239)](_0x2de7e7(0xcb),_0x5bcdce,_0x26452a,_0x1d35ae)),_0x26452a+=_0x4dfa26,_0x2b1427=_0x2b1427===0x2?0x1:0x2);for(const _0x587e66 of _0x491a88){this[_0x2de7e7(0x11c)](),VisuMZ[_0x2de7e7(0x16d)]&&(this[_0x2de7e7(0x113)]['fontSize']=Window_EquipStatus[_0x2de7e7(0x1d6)][_0x2de7e7(0x18e)]()),this[_0x2de7e7(0x1fb)](_0x4a193c,_0x26452a,_0x1d35ae,_0x4dfa26,_0x2b1427),this[_0x2de7e7(0x10e)](_0x587e66,_0x4a193c,_0x26452a,_0x1d35ae),this['drawItemDarkRect'](_0x353b3f,_0x26452a,_0x1d35ae,_0x4dfa26,_0x2b1427),this['drawParamBeforeValue'](_0x587e66,_0x353b3f,_0x26452a,_0x1d35ae),this[_0x2de7e7(0x1fb)](_0xe5b324,_0x26452a,_0x23fc75,_0x4dfa26,_0x2b1427),this['changeTextColor'](ColorManager[_0x2de7e7(0x197)]()),this[_0x2de7e7(0x1ce)](_0x46792a,_0xe5b324,_0x26452a,_0x23fc75,_0x2de7e7(0x15f)),this[_0x2de7e7(0x1fb)](_0x18db51,_0x26452a,_0x1d35ae,_0x4dfa26,_0x2b1427),this[_0x2de7e7(0x21a)](_0x587e66,_0x18db51,_0x26452a,_0x1d35ae),Window_VictoryLevelUpActor[_0x2de7e7(0x1c8)]&&(this['drawItemDarkRect'](_0x5bcdce,_0x26452a,_0x1d35ae,_0x4dfa26,_0x2b1427),this[_0x2de7e7(0x239)](_0x587e66,_0x5bcdce,_0x26452a,_0x1d35ae)),_0x26452a+=_0x4dfa26,_0x2b1427=_0x2b1427===0x2?0x1:0x2;}},Window_VictoryLevelUpActor[_0xab3c40(0x1d6)][_0xab3c40(0x21f)]=function(){const _0x186431=_0xab3c40;return Imported['VisuMZ_0_CoreEngine']?VisuMZ[_0x186431(0x206)][_0x186431(0x12d)]['Param'][_0x186431(0x123)]:[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7];},Window_VictoryLevelUpActor[_0xab3c40(0x1d6)]['drawParamName']=function(_0x1a7520,_0x51b49b,_0x31741c,_0x599797){const _0x45c3ef=_0xab3c40;this[_0x45c3ef(0x1a2)](ColorManager[_0x45c3ef(0x197)]());let _0x2dee39='';_0x1a7520==='level'?_0x2dee39=TextManager[_0x45c3ef(0xcb)]:_0x2dee39=TextManager[_0x45c3ef(0x176)](_0x1a7520),this[_0x45c3ef(0x1ce)](_0x2dee39,_0x51b49b+this['itemPadding'](),_0x31741c,_0x599797-this[_0x45c3ef(0x173)]()*0x2);},Window_VictoryLevelUpActor[_0xab3c40(0x1d6)]['drawParamBeforeValue']=function(_0x24f823,_0x258f5e,_0x164c51,_0x5a4dca){const _0x33b003=_0xab3c40,_0x39f90b=this[_0x33b003(0x125)]();let _0x20cc0c='';_0x24f823===_0x33b003(0xcb)?_0x20cc0c=_0x39f90b[_0x33b003(0xcb)]:_0x20cc0c=Imported[_0x33b003(0x175)]?_0x39f90b[_0x33b003(0x104)](_0x24f823,!![]):_0x39f90b['param'](_0x24f823),this['changeTextColor'](ColorManager[_0x33b003(0x10f)]()),this[_0x33b003(0x1ce)](_0x20cc0c,_0x258f5e+this[_0x33b003(0x173)](),_0x164c51,_0x5a4dca-this[_0x33b003(0x173)]()*0x2,_0x33b003(0x248));},Window_VictoryLevelUpActor['prototype'][_0xab3c40(0x21a)]=function(_0x2baebe,_0x5c0a33,_0x436ed2,_0xb2abdb){const _0x2a3032=_0xab3c40,_0x1ff2dc=this[_0x2a3032(0x125)](),_0x1d69da=this['_actor'];let _0x21ea92=0x0,_0x1845ad=0x0;_0x2baebe==='level'?(_0x21ea92=_0x1ff2dc[_0x2a3032(0xcb)],_0x1845ad=_0x1d69da['level']):(_0x21ea92=Imported[_0x2a3032(0x175)]?_0x1ff2dc[_0x2a3032(0x104)](_0x2baebe,![]):_0x1ff2dc[_0x2a3032(0x176)](_0x2baebe),_0x1845ad=Imported['VisuMZ_0_CoreEngine']?_0x1d69da[_0x2a3032(0x104)](_0x2baebe,![]):_0x1d69da['param'](_0x2baebe));let _0x3d1014=_0x1845ad;const _0x370be3=_0x1845ad-_0x21ea92;this[_0x2a3032(0x1a2)](ColorManager['paramchangeTextColor'](_0x370be3)),this[_0x2a3032(0x1ce)](_0x3d1014,_0x5c0a33+this[_0x2a3032(0x173)](),_0x436ed2,_0xb2abdb-this[_0x2a3032(0x173)]()*0x2,_0x2a3032(0x248));},Window_VictoryLevelUpActor[_0xab3c40(0x1d6)][_0xab3c40(0x239)]=function(_0x28cd73,_0x3086ce,_0x2ebab1,_0x3e0d34){const _0x482c5e=_0xab3c40,_0x3072f6=this[_0x482c5e(0x125)](),_0xe1bf44=this[_0x482c5e(0x13b)];let _0x3ba884=0x0,_0x11e9e7=0x0;_0x28cd73===_0x482c5e(0xcb)?(_0x3ba884=_0x3072f6[_0x482c5e(0xcb)],_0x11e9e7=_0xe1bf44[_0x482c5e(0xcb)]):(_0x3ba884=Imported[_0x482c5e(0x175)]?_0x3072f6['paramValueByName'](_0x28cd73,![]):_0x3072f6[_0x482c5e(0x176)](_0x28cd73),_0x11e9e7=Imported[_0x482c5e(0x175)]?_0xe1bf44[_0x482c5e(0x104)](_0x28cd73,![]):_0xe1bf44['param'](_0x28cd73));const _0x5122d0=_0x11e9e7-_0x3ba884;let _0x521763=_0x5122d0;if(_0x3ba884%0x1!==0x0)_0x521763=Math[_0x482c5e(0x22c)](_0x5122d0*0x64)+'%';_0x5122d0!==0x0&&(this['changeTextColor'](ColorManager[_0x482c5e(0xde)](_0x5122d0)),_0x521763=(_0x5122d0>=0x0?'(+%1)':_0x482c5e(0xdd))[_0x482c5e(0x1dd)](_0x521763),this[_0x482c5e(0x1ce)](_0x521763,_0x3086ce+this[_0x482c5e(0x173)](),_0x2ebab1,_0x3e0d34-this[_0x482c5e(0x173)]()*0x2,_0x482c5e(0x16f)));},Window_VictoryLevelUpActor[_0xab3c40(0x1d6)][_0xab3c40(0x1e6)]=function(){const _0x1664bc=_0xab3c40;this[_0x1664bc(0x11c)]();const _0x5ce420=this[_0x1664bc(0x131)]();if(_0x5ce420['length']<=0x0)return;const _0x2255c4=VisuMZ['VictoryAftermath'][_0x1664bc(0x12d)][_0x1664bc(0xfb)][_0x1664bc(0x1bc)];while(_0x5ce420[_0x1664bc(0x17c)]>_0x2255c4){_0x5ce420[_0x1664bc(0xe6)]();}this[_0x1664bc(0x11d)](_0x5ce420),this[_0x1664bc(0x24c)](_0x5ce420);},Window_VictoryLevelUpActor[_0xab3c40(0x1d6)]['findNewSkills']=function(){const _0x272ef5=_0xab3c40,_0x32b7d6=this[_0x272ef5(0x125)]()['skills']();return this[_0x272ef5(0x13b)][_0x272ef5(0x131)](_0x32b7d6);},Window_VictoryLevelUpActor['prototype'][_0xab3c40(0x11d)]=function(_0x1fa289){const _0x13db0e=_0xab3c40,_0x1df960=this[_0x13db0e(0xaf)](),_0x2545d8=_0x13db0e(0x107),_0x58bb2e=_0x13db0e(0xb4),_0x1cdcbb=ColorManager[_0x13db0e(0x10f)](),_0x4cc641=Math['round'](this['width']/0x2)-0x64-_0x1df960*0x2,_0x326991=(_0x1fa289[_0x13db0e(0x17c)]+0x1)*_0x1df960,_0x405c8b=_0x1df960,_0x4ae44f=this[_0x13db0e(0x1b0)]-_0x1df960*6.5-_0x326991;this['contents'][_0x13db0e(0x196)](_0x405c8b-0x2,_0x4ae44f-0x2,_0x4cc641+0x4,_0x326991+0x4,_0x1cdcbb),this[_0x13db0e(0x113)][_0x13db0e(0x235)](_0x405c8b,_0x4ae44f,_0x4cc641,_0x326991),this[_0x13db0e(0x113)][_0x13db0e(0x22f)](_0x405c8b,_0x4ae44f,_0x4cc641,_0x326991,_0x2545d8,_0x58bb2e);},Window_VictoryLevelUpActor['prototype'][_0xab3c40(0x24c)]=function(_0x5a25cd){const _0x1cc0f8=_0xab3c40,_0x2bb5bd=this[_0x1cc0f8(0xaf)](),_0xd79954='rgba(0,\x200,\x200,\x200.8)',_0x634a97='rgba(0,\x200,\x200,\x200.4)',_0x45e522=ColorManager[_0x1cc0f8(0x10f)](),_0x1b0224=Math[_0x1cc0f8(0x22c)](this[_0x1cc0f8(0x13a)]/0x2)-0x64-(_0x2bb5bd+this[_0x1cc0f8(0x173)]())*0x2,_0x193478=(_0x5a25cd[_0x1cc0f8(0x17c)]+0x1)*_0x2bb5bd;let _0x187612=_0x2bb5bd+this['itemPadding'](),_0x3708f6=this[_0x1cc0f8(0x1b0)]-_0x2bb5bd*6.5-_0x193478;const _0x268b0b=TextManager[_0x1cc0f8(0x1d1)]['format'](this['_actor'][_0x1cc0f8(0x1e3)]()),_0x225703=this[_0x1cc0f8(0x10c)](_0x268b0b)[_0x1cc0f8(0x13a)],_0x4c2e24=Math['round'](_0x187612+(_0x1b0224-_0x225703)/0x2);this[_0x1cc0f8(0x1bd)](_0x268b0b,_0x4c2e24,_0x3708f6,_0x225703),_0x3708f6+=_0x2bb5bd,this[_0x1cc0f8(0x113)][_0x1cc0f8(0x196)](_0x187612,_0x3708f6-0x1,_0x1b0224,0x2,_0x45e522);for(const _0x4f340c of _0x5a25cd){if(!_0x4f340c)continue;this[_0x1cc0f8(0x11c)](),this[_0x1cc0f8(0x155)](_0x4f340c,_0x187612+this[_0x1cc0f8(0x173)](),_0x3708f6,_0x1b0224-this[_0x1cc0f8(0x173)]()*0x2),_0x3708f6+=_0x2bb5bd;}},Window_VictoryLevelUpActor[_0xab3c40(0x1d6)][_0xab3c40(0xfa)]=function(){const _0x46fd41=_0xab3c40,_0x33906c=this[_0x46fd41(0xaf)](),_0x3fcf1b=Window_VictoryLevelUpActor['_showFace'],_0x167661=this[_0x46fd41(0xbd)](),_0x3b81=_0x33906c*0x4,_0x5a1aa7=Math[_0x46fd41(0x22c)]((this[_0x46fd41(0x13a)]-_0x167661)/0x2),_0x4dec2f=_0x5a1aa7+(_0x3fcf1b?ImageManager[_0x46fd41(0x20e)]+0x14:0x0),_0x3e3899=this[_0x46fd41(0x1b0)]-_0x33906c*5.5;let _0x5cecdb=this[_0x46fd41(0x214)]();_0x3fcf1b&&this['drawActorFace'](this['_actor'],_0x5a1aa7,_0x3e3899,ImageManager[_0x46fd41(0x20e)],ImageManager[_0x46fd41(0x172)]),this['drawTextEx'](_0x5cecdb,_0x4dec2f,_0x3e3899,_0x167661-_0x4dec2f);},Window_VictoryLevelUpActor[_0xab3c40(0x1d6)][_0xab3c40(0xbd)]=function(){const _0x40d512=_0xab3c40;let _0xf5e5b3=Graphics[_0x40d512(0x194)];return Imported[_0x40d512(0xd8)]&&(_0xf5e5b3=Math[_0x40d512(0x1c4)](_0xf5e5b3,VisuMZ[_0x40d512(0xf7)][_0x40d512(0x12d)]['General']['MessageWidth'])),_0xf5e5b3-this[_0x40d512(0x173)]()*0x2;},Window_VictoryLevelUpActor[_0xab3c40(0x1d6)]['getQuoteText']=function(){const _0x322d2b=_0xab3c40;return this['findNewSkills']()[_0x322d2b(0x17c)]>0x0?TextManager[_0x322d2b(0xac)](this[_0x322d2b(0x13b)])[_0x322d2b(0x1dd)](this[_0x322d2b(0x13b)][_0x322d2b(0x1e3)]()):TextManager['quoteLevelUp'](this[_0x322d2b(0x13b)])[_0x322d2b(0x1dd)](this[_0x322d2b(0x13b)][_0x322d2b(0x1e3)]());};