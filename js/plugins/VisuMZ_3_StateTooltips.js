//=============================================================================
// VisuStella MZ - State Tooltips
// VisuMZ_3_StateTooltips.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_StateTooltips = true;

var VisuMZ = VisuMZ || {};
VisuMZ.StateTooltips = VisuMZ.StateTooltips || {};
VisuMZ.StateTooltips.version = 1.01;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.01] [StateTooltips]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/State_Tooltips_VisuStella_MZ
 * @base VisuMZ_1_BattleCore
 * @base VisuMZ_1_MessageCore
 * @base VisuMZ_1_SkillsStatesCore
 * @orderAfter VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_MessageCore
 * @orderAfter VisuMZ_1_SkillsStatesCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin adds a tooltip window in battle (and other scenes) whenever the
 * player's mouse cursor is hovered over specific areas of the screen. The
 * tooltip window will display a list of the states, buffs, and debuffs the
 * hovered battler has along with a description of the entities and their
 * remaining duration.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Tooltip window displays when hovering over battlers and specific windows
 *   to display their states, buffs, and debuffs.
 * * Adjust the text format in which information is displayed inside the
 *   tooltip window.
 * * Modify the descriptions for states, buffs, and debuffs to your liking.
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
 * * VisuMZ_1_BattleCore
 * * VisuMZ_1_MessageCore
 * * VisuMZ_1_SkillsStatesCore
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
 * VisuMZ_2_PartySystem
 * 
 * VisuMZ_2_ClassChangeSystem
 *
 * These plugins have scenes that also support tooltips if this plugin is also
 * installed while those are active in your game's project.
 *
 * ---
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
 * VisuMZ_2_DragonbonesUnion
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
 * === Description-Related Notetags ===
 * 
 * ---
 *
 * <Help Description>
 *  text
 *  text
 * </Help Description>
 *
 * - Used for: State Notetags
 * - Assigns a help description for the state.
 * - Replace 'text' with text you want displayed for the tooltip window.
 * - This best works with one line.
 * - If this notetag is not used, the help description will default to the
 *   setting found in the plugin's Plugin Parameters.
 * - Insert %1 into the help description to show any data that would otherwise
 *   be shown as the state display, such as Absorption Barrier count.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Tooltip Settings
 * ============================================================================
 *
 * General settings for the State Tooltips Window.
 *
 * ---
 *
 * Appearance
 * 
 *   Scale:
 *   - What scale size do you want for the tooltip?
 *   - Use 1.0 for normal size.
 * 
 *   Skin Filename:
 *   - What window skin do you want to use for the tooltip?
 * 
 *   Skin Opacity:
 *   - What opacity setting is used for the tooltip?
 *   - Use a number between 0 and 255.
 *
 * ---
 *
 * Offset
 * 
 *   Offset X:
 *   - Offset the tooltip X position from the mouse?
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offset the tooltip Y position from the mouse?
 *   - Negative: up. Positive: down.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Vocabulary Settings
 * ============================================================================
 *
 * Vocabulary settings for the State Tooltips Window.
 *
 * ---
 *
 * General
 * 
 *   Default Description:
 *   - This is the default description that appears for a state without a
 *     declared description. %1 - State's Name
 *   - Can use text codes.
 *
 * ---
 *
 * Entries
 * 
 *   State Format:
 *   - Can use text codes.
 *   - %1 - Icon, %2 - Name, %3 - Description, %4 - Duration, %5 - State Color
 * 
 *   Buff Format:
 *   - Can use text codes.
 *   - %1 - Icon, %2 - Name, %3 - Percentage, %4 - Duration, %5 - Buff Color
 * 
 *   Debuff Format:
 *   - Can use text codes.
 *   - %1 - Icon, %2 - Name, %3 - Percentage, %4 - Duration, %5 - Debuff Color
 * 
 *   Replace Whites?:
 *   - If state, buff, debuff names are white, replace them?
 * 
 *     Replacement Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 *
 * ---
 *
 * Turns Remaining
 * 
 *   Action End Format:
 *   - Can use text codes.
 *   - %1 - Remaining, %2 - State/Buff/Debuff Color
 * 
 *   Turn End Format:
 *   - Can use text codes.
 *   - %1 - Remaining, %2 - State/Buff/Debuff Color
 * 
 *   Passive Text:
 *   - Can use text codes.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * Choose which windows to enable tooltip support for.
 *
 * ---
 *
 * Settings
 * 
 *   Window_BattleStatus:
 *   Window_ClassStatus:
 *   Window_EquipStatus:
 *   Window_MenuActor:
 *   Window_MenuStatus:
 *   Window_PartyStatus:
 *   Window_SkillStatus:
 *   Window_Status:
 *   - Enable State Tooltips for this window?
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
 * Version 1.01: April 2, 2021
 * * Documentation Update!
 * ** Added "VisuStella MZ Compatibility" section for detailed compatibility
 *    explanations with the VisuMZ_2_DragonbonesUnion plugin.
 * 
 * Version 1.00 Official Release Date: February 24, 2021
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
 * @param StateTooltips
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Tooltip:struct
 * @text Tooltip Settings
 * @type struct<Tooltip>
 * @desc General settings for the State Tooltips Window.
 * @default {"Appearance":"","Scale:num":"0.6","WindowSkin:str":"Window","WindowOpacity:num":"240","Offset":"","OffsetX:num":"+0","OffsetY:num":"+0"}
 *
 * @param Vocab:struct
 * @text Vocabulary Settings
 * @type struct<Vocab>
 * @desc Vocabulary settings for the State Tooltips Window.
 * @default {"General":"","HelpDescription:json":"\"-\"","Entries":"","StateFmt:str":"\\C[%5]%1%2:\\C[0] %3 %4","BuffFmt:str":"\\C[%5]%1%2:\\C[0] Increases unit's %2 to \\C[%5]%3%\\C[0] %4","DebuffFmt:str":"\\C[%5]%1%2:\\C[0] Decreases unit's %2 to \\C[%5]%3%\\C[0] %4","ReplaceWhite:eval":"true","WhiteReplaceColor:str":"5","Turns":"","ActionsFmt:str":"\\C[6](Actions \\C[%2]%1\\C[6])\\C[0]","TurnsFmt:str":"\\C[5](Turns \\C[%2]%1\\C[5])\\C[0]","PassiveText:str":"\\C[4](Passive)\\C[0]"}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc Choose which windows to enable tooltip support for.
 * @default {"Window_BattleStatus:eval":"true","Window_ClassStatus:eval":"true","Window_EquipStatus:eval":"true","Window_MenuActor:eval":"true","Window_MenuStatus:eval":"true","Window_PartyStatus:eval":"true","Window_SkillStatus:eval":"true","Window_Status:eval":"true"}
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
 * Tooltip Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Tooltip:
 *
 * @param Appearance
 *
 * @param Scale:num
 * @text Scale
 * @parent Appearance
 * @desc What scale size do you want for the tooltip?
 * Use 1.0 for normal size.
 * @default 0.6
 *
 * @param WindowSkin:str
 * @text Skin Filename
 * @parent Appearance
 * @type file
 * @dir img/system/
 * @desc What window skin do you want to use for the tooltip?
 * @default Window
 *
 * @param WindowOpacity:num
 * @text Skin Opacity
 * @parent Appearance
 * @type number
 * @min 0
 * @max 255
 * @desc What opacity setting is used for the tooltip?
 * Use a number between 0 and 255.
 * @default 240
 *
 * @param Offset
 *
 * @param OffsetX:num
 * @text Offset X
 * @parent Offset
 * @desc Offset the tooltip X position from the mouse?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @parent Offset
 * @desc Offset the tooltip Y position from the mouse?
 * Negative: up. Positive: down.
 * @default +0
 *
 */
/* ----------------------------------------------------------------------------
 * Vocab Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Vocab:
 *
 * @param General
 *
 * @param HelpDescription:json
 * @text Default Description
 * @parent General
 * @type note
 * @desc This is the default description that appears for a state
 * without a declared description. %1 - State's Name
 * @default "-"
 * 
 * @param Entries
 *
 * @param StateFmt:str
 * @text State Format
 * @parent Entries
 * @desc Can use text codes. %1 - Icon, %2 - Name,
 * %3 - Description, %4 - Duration, %5 - State Color
 * @default \C[%5]%1%2:\C[0] %3 %4
 *
 * @param BuffFmt:str
 * @text Buff Format
 * @parent Entries
 * @desc Can use text codes. %1 - Icon, %2 - Name,
 * %3 - Percentage, %4 - Duration, %5 - Buff Color
 * @default \C[%5]%1%2:\C[0] Increases unit's %2 to \C[%5]%3%\C[0] %4
 *
 * @param DebuffFmt:str
 * @text Debuff Format
 * @parent Entries
 * @desc Can use text codes. %1 - Icon, %2 - Name,
 * %3 - Percentage, %4 - Duration, %5 - Debuff Color
 * @default \C[%5]%1%2:\C[0] Decreases unit's %2 to \C[%5]%3%\C[0] %4
 *
 * @param ReplaceWhite:eval
 * @text Replace Whites?
 * @parent Entries
 * @type boolean
 * @on Replace
 * @off Don't Replace
 * @desc If state, buff, debuff names are white, replace them?
 * @default true
 *
 * @param WhiteReplaceColor:str
 * @text Replacement Color
 * @parent ReplaceWhite:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 5
 * 
 * @param Turns
 * @text Turns Remaining
 *
 * @param ActionsFmt:str
 * @text Action End Format
 * @parent Turns
 * @desc Can use text codes.
 * %1 - Remaining, %2 - State/Buff/Debuff Color
 * @default \C[6](Actions \C[%2]%1\C[6])\C[0]
 *
 * @param TurnsFmt:str
 * @text Turn End Format
 * @parent Turns
 * @desc Can use text codes.
 * %1 - Remaining, %2 - State/Buff/Debuff Color
 * @default \C[5](Turns \C[%2]%1\C[5])\C[0]
 *
 * @param PassiveText:str
 * @text Passive Text
 * @parent Turns
 * @desc Can use text codes.
 * @default \C[4](Passive)\C[0]
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param Window_BattleStatus:eval
 * @text Window_BattleStatus
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable State Tooltips for this window?
 * @default true
 *
 * @param Window_ClassStatus:eval
 * @text Window_ClassStatus
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable State Tooltips for this window?
 * @default true
 *
 * @param Window_EquipStatus:eval
 * @text Window_EquipStatus
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable State Tooltips for this window?
 * @default true
 *
 * @param Window_MenuActor:eval
 * @text Window_MenuActor
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable State Tooltips for this window?
 * @default true
 *
 * @param Window_MenuStatus:eval
 * @text Window_MenuStatus
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable State Tooltips for this window?
 * @default true
 *
 * @param Window_PartyStatus:eval
 * @text Window_PartyStatus
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable State Tooltips for this window?
 * @default true
 *
 * @param Window_SkillStatus:eval
 * @text Window_SkillStatus
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable State Tooltips for this window?
 * @default true
 *
 * @param Window_Status:eval
 * @text Window_Status
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable State Tooltips for this window?
 * @default true
 *
 */
//=============================================================================

const _0x6858=['ffffff','targetOpacity','buffTurns','refresh','STR','_cache_StateTooltips','onDatabaseLoaded','WINDOW_SKIN_FILENAME','OffsetY','debuffColor','WindowSkin','MOUSE_OFFSET_Y','match','1933954FCeVIW','touchX','isBuffOrDebuffAffected','processEscapeCharacter','1130699fiaxdu','DEBUFF_FMT','param','push','parameters','Window_Selectable_processTouch','resizeWindow','stateColor','TURNS_FMT','updatePosition','replaceHexColors','_actorCommandWindow','Sprite_Clickable_onMouseExit','12LMnxWi','onMouseExitStateTooltips','ARRAYJSON','VisuMZ_2_ClassChangeSystem','Window','contains','updateDeath','worldTransform','clear','description','#%1','addChild','backOpacity','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','ARRAYNUM','call','setupStateTurnText','hitTest','process_VisuMZ_StateTooltips','_actor','getStateDisplay','WINDOW_SCALE','ARRAYSTRUCT','process_VisuMZ_StateTooltips_Notetags','getColor','DebuffFmt','states','loadSystem','875712KXGqYg','textSizeEx','BuffFmt','HelpDescription','1SqKNYO','isSceneBattle','clampPosition','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','padding','isAppeared','ParseStateNotetags','onMouseEnter','isStateTooltipHovered','drawTextEx','_battler','isMouseHovered','refreshStateTooltipBattler','STRUCT','closeTouchStateTooltips','itemPadding','1MdqMyZ','processTouch','REPLACE_WHITE','height','isOpen','initialize','openTouchStateTooltips','JSON','version','battler','dimensionRect','toUpperCase','ARRAYEVAL','Tooltip','map','windowskin','clamp','Scene_Base_createWindowLayer','passiveStates','touchY','loadWindowskin','Parse_Notetags_Description','Scene_Boot_onDatabaseLoaded','ACTIONS_FMT','buffColor','includes','_itemWindow','name','isStateTooltipEnabled','ARRAYFUNC','MOUSE_OFFSET_X','setStateTooltipBattler','onMouseExit','drawing','length','ActionsFmt','currentTooltipBattler','isDead','STATE_FMT','open','getStateTooltipBattler','isStateTooltipTouched','return\x200','createContents','max','WindowOpacity','Sprite_Battler_onMouseEnter','RegExp','replace','exit','_buffs','setupText','Game_Battler_refresh','VisuMZ_2_PartySystem','PASSIVE_TEXT','visible','BUFF_FMT','WINDOW_SKIN_OPACITY','Scale','StateTooltips','setupBuffTurnText','createWindowLayer','onMouseEnterStateTooltips','_scene','hitIndex','autoRemovalTiming','processTouchStateTooltips','isBuffAffected','658208pPodnq','show','EVAL','Settings','ConvertParams','NONWHITE_COLOR','Vocab','parse','_skillWindow','PassiveText','isColorLocked','updateOpacity','scale','52267cadVeQ','actor','width','opacity','filter','obtainEscapeString','update','paramBuffRate','setupBuffText','hide','101552nstRmN','trim','applyInverse','prototype','\x5cI[%1]','stateTurns','format','constructor','create','_requestRefresh','status','_stateTooltipWindow','textColor','_text','round','setBattler','970861feyYNS','contents','VisuMZ_1_BattleCore','requestRefresh','TurnsFmt','OffsetX','setupStateText'];const _0x28b6=function(_0x2fda8b,_0x33fbce){_0x2fda8b=_0x2fda8b-0x8d;let _0x6858e0=_0x6858[_0x2fda8b];return _0x6858e0;};const _0x4a1003=_0x28b6;(function(_0x1c4070,_0x8ddcb9){const _0x8d4bd6=_0x28b6;while(!![]){try{const _0x128297=parseInt(_0x8d4bd6(0xbe))*-parseInt(_0x8d4bd6(0x141))+parseInt(_0x8d4bd6(0xaa))+-parseInt(_0x8d4bd6(0x129))+-parseInt(_0x8d4bd6(0x8e))*-parseInt(_0x8d4bd6(0x10f))+parseInt(_0x8d4bd6(0x119))*-parseInt(_0x8d4bd6(0xae))+-parseInt(_0x8d4bd6(0x102))+parseInt(_0x8d4bd6(0x13d));if(_0x128297===_0x8ddcb9)break;else _0x1c4070['push'](_0x1c4070['shift']());}catch(_0x7b64dc){_0x1c4070['push'](_0x1c4070['shift']());}}}(_0x6858,0x8c83e));var label='StateTooltips',tier=tier||0x0,dependencies=[_0x4a1003(0x12b)],pluginData=$plugins[_0x4a1003(0x113)](function(_0x16c6e3){const _0x575749=_0x4a1003;return _0x16c6e3[_0x575749(0x123)]&&_0x16c6e3[_0x575749(0x97)][_0x575749(0xd7)]('['+label+']');})[0x0];VisuMZ[label][_0x4a1003(0x105)]=VisuMZ[label][_0x4a1003(0x105)]||{},VisuMZ['ConvertParams']=function(_0x315047,_0x395211){const _0x437d80=_0x4a1003;for(const _0x2bbca4 in _0x395211){if(_0x2bbca4[_0x437d80(0x13c)](/(.*):(.*)/i)){const _0x34545a=String(RegExp['$1']),_0x19693a=String(RegExp['$2'])[_0x437d80(0xc9)]()['trim']();let _0x55cbed,_0x201d84,_0x5d1bf1;switch(_0x19693a){case'NUM':_0x55cbed=_0x395211[_0x2bbca4]!==''?Number(_0x395211[_0x2bbca4]):0x0;break;case _0x437d80(0x9c):_0x201d84=_0x395211[_0x2bbca4]!==''?JSON[_0x437d80(0x109)](_0x395211[_0x2bbca4]):[],_0x55cbed=_0x201d84[_0x437d80(0xcc)](_0x10557c=>Number(_0x10557c));break;case _0x437d80(0x104):_0x55cbed=_0x395211[_0x2bbca4]!==''?eval(_0x395211[_0x2bbca4]):null;break;case _0x437d80(0xca):_0x201d84=_0x395211[_0x2bbca4]!==''?JSON[_0x437d80(0x109)](_0x395211[_0x2bbca4]):[],_0x55cbed=_0x201d84[_0x437d80(0xcc)](_0x554392=>eval(_0x554392));break;case _0x437d80(0xc5):_0x55cbed=_0x395211[_0x2bbca4]!==''?JSON[_0x437d80(0x109)](_0x395211[_0x2bbca4]):'';break;case _0x437d80(0x90):_0x201d84=_0x395211[_0x2bbca4]!==''?JSON['parse'](_0x395211[_0x2bbca4]):[],_0x55cbed=_0x201d84[_0x437d80(0xcc)](_0x5ed8b7=>JSON[_0x437d80(0x109)](_0x5ed8b7));break;case'FUNC':_0x55cbed=_0x395211[_0x2bbca4]!==''?new Function(JSON[_0x437d80(0x109)](_0x395211[_0x2bbca4])):new Function(_0x437d80(0xe8));break;case _0x437d80(0xdb):_0x201d84=_0x395211[_0x2bbca4]!==''?JSON[_0x437d80(0x109)](_0x395211[_0x2bbca4]):[],_0x55cbed=_0x201d84[_0x437d80(0xcc)](_0x1d1e02=>new Function(JSON[_0x437d80(0x109)](_0x1d1e02)));break;case _0x437d80(0x134):_0x55cbed=_0x395211[_0x2bbca4]!==''?String(_0x395211[_0x2bbca4]):'';break;case'ARRAYSTR':_0x201d84=_0x395211[_0x2bbca4]!==''?JSON[_0x437d80(0x109)](_0x395211[_0x2bbca4]):[],_0x55cbed=_0x201d84[_0x437d80(0xcc)](_0x5d0ba8=>String(_0x5d0ba8));break;case _0x437d80(0xbb):_0x5d1bf1=_0x395211[_0x2bbca4]!==''?JSON[_0x437d80(0x109)](_0x395211[_0x2bbca4]):{},_0x55cbed=VisuMZ[_0x437d80(0x106)]({},_0x5d1bf1);break;case _0x437d80(0xa4):_0x201d84=_0x395211[_0x2bbca4]!==''?JSON['parse'](_0x395211[_0x2bbca4]):[],_0x55cbed=_0x201d84[_0x437d80(0xcc)](_0x54ff16=>VisuMZ[_0x437d80(0x106)]({},JSON[_0x437d80(0x109)](_0x54ff16)));break;default:continue;}_0x315047[_0x34545a]=_0x55cbed;}}return _0x315047;},(_0x98e252=>{const _0x3ed3b0=_0x4a1003,_0x320375=_0x98e252[_0x3ed3b0(0xd9)];for(const _0x43d755 of dependencies){if(!Imported[_0x43d755]){alert(_0x3ed3b0(0x9b)[_0x3ed3b0(0x11f)](_0x320375,_0x43d755)),SceneManager[_0x3ed3b0(0xef)]();break;}}const _0x19b7f4=_0x98e252[_0x3ed3b0(0x97)];if(_0x19b7f4['match'](/\[Version[ ](.*?)\]/i)){const _0x758812=Number(RegExp['$1']);_0x758812!==VisuMZ[label][_0x3ed3b0(0xc6)]&&(alert(_0x3ed3b0(0xb1)['format'](_0x320375,_0x758812)),SceneManager[_0x3ed3b0(0xef)]());}if(_0x19b7f4[_0x3ed3b0(0x13c)](/\[Tier[ ](\d+)\]/i)){const _0x57e639=Number(RegExp['$1']);_0x57e639<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x3ed3b0(0x11f)](_0x320375,_0x57e639,tier)),SceneManager[_0x3ed3b0(0xef)]()):tier=Math[_0x3ed3b0(0xea)](_0x57e639,tier);}VisuMZ[_0x3ed3b0(0x106)](VisuMZ[label]['Settings'],_0x98e252[_0x3ed3b0(0x145)]);})(pluginData),VisuMZ[_0x4a1003(0xf9)]['RegExp']={'HelpDescription':/<(?:HELP|HELP DESCRIPTION|DESCRIPTION)>\s*([\s\S]*)\s*<\/(?:HELP|HELP DESCRIPTION|DESCRIPTION)>/i},VisuMZ[_0x4a1003(0xf9)][_0x4a1003(0xd4)]=Scene_Boot[_0x4a1003(0x11c)][_0x4a1003(0x136)],Scene_Boot[_0x4a1003(0x11c)][_0x4a1003(0x136)]=function(){const _0x1c15e5=_0x4a1003;VisuMZ['StateTooltips']['Scene_Boot_onDatabaseLoaded'][_0x1c15e5(0x9d)](this),this[_0x1c15e5(0xa0)]();},Scene_Boot['prototype']['process_VisuMZ_StateTooltips']=function(){const _0x54801d=_0x4a1003;this[_0x54801d(0xa5)]();},Scene_Boot[_0x4a1003(0x11c)][_0x4a1003(0xa5)]=function(){const _0x4766dd=_0x4a1003;if(VisuMZ['ParseAllNotetags'])return;for(const _0x3ad7a3 of $dataStates){if(!_0x3ad7a3)continue;VisuMZ[_0x4766dd(0xf9)][_0x4766dd(0xd3)](_0x3ad7a3);}},VisuMZ[_0x4a1003(0xf9)][_0x4a1003(0xb4)]=VisuMZ[_0x4a1003(0xb4)],VisuMZ['ParseStateNotetags']=function(_0x1d6723){const _0x29bd6e=_0x4a1003;VisuMZ[_0x29bd6e(0xf9)][_0x29bd6e(0xb4)][_0x29bd6e(0x9d)](this,_0x1d6723),VisuMZ[_0x29bd6e(0xf9)][_0x29bd6e(0xd3)](_0x1d6723);},VisuMZ[_0x4a1003(0xf9)]['Parse_Notetags_Description']=function(_0x2edec0){const _0x392e8d=_0x4a1003;_0x2edec0[_0x392e8d(0x97)]=VisuMZ[_0x392e8d(0xf9)][_0x392e8d(0x105)][_0x392e8d(0x108)]['HelpDescription'];const _0x50764e=VisuMZ[_0x392e8d(0xf9)][_0x392e8d(0xed)],_0x4ed981=_0x2edec0['note'];_0x4ed981[_0x392e8d(0x13c)](_0x50764e[_0x392e8d(0xad)])&&(_0x2edec0['description']=String(RegExp['$1'])[_0x392e8d(0x11a)]());},ColorManager[_0x4a1003(0xa6)]=function(_0x2809e5){const _0x3688ef=_0x4a1003;return _0x2809e5=String(_0x2809e5),_0x2809e5[_0x3688ef(0x13c)](/#(.*)/i)?_0x3688ef(0x98)[_0x3688ef(0x11f)](String(RegExp['$1'])):this[_0x3688ef(0x125)](Number(_0x2809e5));},SceneManager[_0x4a1003(0xaf)]=function(){const _0x537bc1=_0x4a1003;return this['_scene']&&this[_0x537bc1(0xfd)]['constructor']===Scene_Battle;},SceneManager[_0x4a1003(0xe2)]=function(){const _0x310ac4=_0x4a1003,_0x15a4f1=SceneManager[_0x310ac4(0xfd)]['_stateTooltipWindow'];if(!_0x15a4f1)return null;return _0x15a4f1[_0x310ac4(0xb8)];},SceneManager['setStateTooltipBattler']=function(_0x3d9738){const _0x2173ac=_0x4a1003;if(_0x3d9738&&!_0x3d9738[_0x2173ac(0xb3)]())return;if(_0x3d9738&&_0x3d9738['isDead']())return;const _0x44cf8c=SceneManager['_scene'][_0x2173ac(0x124)];if(!_0x44cf8c)return;_0x44cf8c[_0x2173ac(0x128)](_0x3d9738);},SceneManager['refreshStateTooltipBattler']=function(_0x447e59){const _0x4cd678=_0x4a1003;if(_0x447e59&&!_0x447e59[_0x4cd678(0xb3)]())return;const _0x2e99ef=SceneManager[_0x4cd678(0xfd)][_0x4cd678(0x124)];if(!_0x2e99ef)return;if(_0x2e99ef[_0x4cd678(0xb8)]!==_0x447e59)return;_0x2e99ef[_0x4cd678(0x12c)]();},VisuMZ[_0x4a1003(0xf9)][_0x4a1003(0xf2)]=Game_Battler[_0x4a1003(0x11c)][_0x4a1003(0x133)],Game_Battler[_0x4a1003(0x11c)][_0x4a1003(0x133)]=function(){const _0xa4c334=_0x4a1003;VisuMZ[_0xa4c334(0xf9)][_0xa4c334(0xf2)]['call'](this),SceneManager[_0xa4c334(0xba)](this);},VisuMZ['StateTooltips'][_0x4a1003(0xcf)]=Scene_Base[_0x4a1003(0x11c)]['createWindowLayer'],Scene_Base['prototype'][_0x4a1003(0xfb)]=function(){const _0x737504=_0x4a1003;VisuMZ[_0x737504(0xf9)]['Scene_Base_createWindowLayer'][_0x737504(0x9d)](this),this['createStateTooltipWindow']();},Scene_Base[_0x4a1003(0x11c)]['createStateTooltipWindow']=function(){const _0x1b62a6=_0x4a1003;this[_0x1b62a6(0x124)]=new Window_StateTooltip(),this[_0x1b62a6(0x99)](this[_0x1b62a6(0x124)]);},VisuMZ[_0x4a1003(0xf9)]['Sprite_Clickable_onMouseEnter']=Sprite_Clickable[_0x4a1003(0x11c)]['onMouseEnter'],Sprite_Clickable[_0x4a1003(0x11c)][_0x4a1003(0xb5)]=function(){const _0x4b8765=_0x4a1003;VisuMZ[_0x4b8765(0xf9)]['Sprite_Clickable_onMouseEnter'][_0x4b8765(0x9d)](this),this[_0x4b8765(0xfc)]();},VisuMZ['StateTooltips'][_0x4a1003(0x8d)]=Sprite_Clickable[_0x4a1003(0x11c)][_0x4a1003(0xde)],Sprite_Clickable[_0x4a1003(0x11c)]['onMouseExit']=function(){const _0x16ef27=_0x4a1003;VisuMZ[_0x16ef27(0xf9)][_0x16ef27(0x8d)][_0x16ef27(0x9d)](this),this[_0x16ef27(0x8f)]();},Sprite_Clickable[_0x4a1003(0x11c)][_0x4a1003(0xfc)]=function(){const _0x145fc5=_0x4a1003;this[_0x145fc5(0xdd)]();},Sprite_Clickable[_0x4a1003(0x11c)][_0x4a1003(0x8f)]=function(){const _0x2d29b6=_0x4a1003,_0xbf877b=this[_0x2d29b6(0xe6)]();_0xbf877b&&SceneManager['currentTooltipBattler']()===_0xbf877b&&SceneManager['setStateTooltipBattler'](null);},Sprite_Clickable[_0x4a1003(0x11c)][_0x4a1003(0xdd)]=function(){const _0x208b49=_0x4a1003,_0x3da0fe=this[_0x208b49(0xe6)]();_0x3da0fe&&SceneManager[_0x208b49(0xdd)](_0x3da0fe);},Sprite_Clickable['prototype'][_0x4a1003(0xe6)]=function(){return null;},VisuMZ[_0x4a1003(0xf9)][_0x4a1003(0xec)]=Sprite_Battler[_0x4a1003(0x11c)]['onMouseEnter'],Sprite_Battler[_0x4a1003(0x11c)]['onMouseEnter']=function(){const _0x2551ce=_0x4a1003;VisuMZ['StateTooltips'][_0x2551ce(0xec)][_0x2551ce(0x9d)](this),this['setStateTooltipBattler']();},Sprite_Battler['prototype'][_0x4a1003(0xe6)]=function(){const _0x5643aa=_0x4a1003;return this[_0x5643aa(0xb8)];},Window_Base[_0x4a1003(0x11c)][_0x4a1003(0xb9)]=function(){const _0x5d9e3f=_0x4a1003,_0x2ceb45=new Point(TouchInput['x'],TouchInput['y']),_0x5abcbf=this[_0x5d9e3f(0x95)][_0x5d9e3f(0x11b)](_0x2ceb45);return this[_0x5d9e3f(0xc8)]()[_0x5d9e3f(0x93)](_0x5abcbf['x'],_0x5abcbf['y']);},Window_Base[_0x4a1003(0x11c)][_0x4a1003(0xc8)]=function(){const _0x17410c=_0x4a1003;return new Rectangle(0x0,0x0,this[_0x17410c(0x111)],this[_0x17410c(0xc1)]);},VisuMZ[_0x4a1003(0xf9)]['Window_Selectable_processTouch']=Window_Selectable[_0x4a1003(0x11c)]['processTouch'],Window_Selectable[_0x4a1003(0x11c)][_0x4a1003(0xbf)]=function(){const _0x51a261=_0x4a1003;VisuMZ[_0x51a261(0xf9)][_0x51a261(0x146)]['call'](this);if(this[_0x51a261(0x120)][_0x51a261(0xd9)]['match'](/Debug/i))return;this[_0x51a261(0x100)]();},Window_Selectable[_0x4a1003(0x11c)]['processTouchStateTooltips']=function(){const _0x1bcaab=_0x4a1003;if(!this[_0x1bcaab(0xda)]())return;this[_0x1bcaab(0x135)]=this[_0x1bcaab(0x135)]||{};if(!this[_0x1bcaab(0xc2)]()){this[_0x1bcaab(0x135)][_0x1bcaab(0xe5)]&&this[_0x1bcaab(0xbc)]();return;}else this[_0x1bcaab(0x135)][_0x1bcaab(0xe5)]=!![];if(!this[_0x1bcaab(0xf5)]){this[_0x1bcaab(0x135)]['visible']&&this[_0x1bcaab(0xbc)]();return;}else this[_0x1bcaab(0x135)][_0x1bcaab(0xf5)]=!![];(this[_0x1bcaab(0x135)]['x']!==this['x']||this['_cache_StateTooltips']['y']!==this['y']||this[_0x1bcaab(0x135)]['touchX']!==TouchInput['x']||this['_cache_StateTooltips'][_0x1bcaab(0x13e)]!==TouchInput['y'])&&(this[_0x1bcaab(0x135)]['x']=this['x'],this[_0x1bcaab(0x135)]['y']=this['y'],this['_cache_StateTooltips']['touchX']=TouchInput['x'],this[_0x1bcaab(0x135)][_0x1bcaab(0xd1)]=TouchInput['y'],this[_0x1bcaab(0xe7)]()?(this[_0x1bcaab(0x135)][_0x1bcaab(0x9f)]=!![],this['openTouchStateTooltips']()):this[_0x1bcaab(0x135)]['hitTest']&&this['closeTouchStateTooltips']());},Window_Selectable['prototype'][_0x4a1003(0xda)]=function(){const _0x4e4351=_0x4a1003;return VisuMZ['StateTooltips']['Settings'][_0x4e4351(0x92)][this['constructor'][_0x4e4351(0xd9)]];},Window_Selectable[_0x4a1003(0x11c)][_0x4a1003(0xe7)]=function(){const _0x321c97=_0x4a1003;return this[_0x321c97(0xfe)]()>=0x0;},Window_Selectable[_0x4a1003(0x11c)][_0x4a1003(0xb6)]=function(){const _0x39302d=_0x4a1003,_0x8bf004=new Point(TouchInput['x'],TouchInput['y']),_0x58bd55=this[_0x39302d(0x95)][_0x39302d(0x11b)](_0x8bf004),_0x2efd59=new Rectangle(0x0,0x0,this[_0x39302d(0x111)],this['height']);return _0x2efd59[_0x39302d(0x93)](_0x58bd55['x'],_0x58bd55['y']);},Window_Selectable[_0x4a1003(0x11c)][_0x4a1003(0xc4)]=function(){const _0xadc7f5=_0x4a1003,_0x2bd0f5=this[_0xadc7f5(0xe6)]();_0x2bd0f5?(this[_0xadc7f5(0x135)][_0xadc7f5(0xc7)]=_0x2bd0f5,SceneManager['setStateTooltipBattler'](_0x2bd0f5)):this[_0xadc7f5(0xbc)]();},Window_Selectable['prototype'][_0x4a1003(0xe6)]=function(){return null;},Window_Selectable[_0x4a1003(0x11c)][_0x4a1003(0xbc)]=function(){const _0xef6190=_0x4a1003;this[_0xef6190(0x135)][_0xef6190(0xe5)]=![],this[_0xef6190(0x135)][_0xef6190(0xf5)]=![],this[_0xef6190(0x135)]['hitTest']=![],this['_cache_StateTooltips']['battler']&&(SceneManager['setStateTooltipBattler'](null),this[_0xef6190(0x135)][_0xef6190(0xc7)]=null);},Window_MenuStatus[_0x4a1003(0x11c)]['getStateTooltipBattler']=function(){const _0x2d3625=_0x4a1003,_0x1e5c0c=this['hitIndex'](),_0x390493=this[_0x2d3625(0x110)](_0x1e5c0c);return _0x390493;},Window_SkillStatus[_0x4a1003(0x11c)][_0x4a1003(0xe7)]=function(){return this['isStateTooltipHovered']();},Window_SkillStatus[_0x4a1003(0x11c)][_0x4a1003(0xe6)]=function(){const _0x277b92=_0x4a1003;return this[_0x277b92(0xa1)];},Window_EquipStatus[_0x4a1003(0x11c)][_0x4a1003(0xe7)]=function(){const _0x5974f3=_0x4a1003;return this[_0x5974f3(0xb6)]();},Window_EquipStatus[_0x4a1003(0x11c)][_0x4a1003(0xe6)]=function(){const _0x2428fe=_0x4a1003;return this[_0x2428fe(0xa1)];},Window_Status[_0x4a1003(0x11c)]['isStateTooltipTouched']=function(){const _0x61544c=_0x4a1003;return this[_0x61544c(0xb6)]();},Window_Status[_0x4a1003(0x11c)]['getStateTooltipBattler']=function(){return this['_actor'];},Window_BattleStatus[_0x4a1003(0x11c)][_0x4a1003(0xe6)]=function(){const _0x334674=_0x4a1003,_0x3c245e=this[_0x334674(0xfe)](),_0x5c5659=this[_0x334674(0x110)](_0x3c245e);return _0x5c5659;};Imported[_0x4a1003(0x91)]&&(Window_ClassStatus['prototype'][_0x4a1003(0xe7)]=function(){const _0x5597b2=_0x4a1003;return this[_0x5597b2(0xb6)]();},Window_ClassStatus[_0x4a1003(0x11c)][_0x4a1003(0xe6)]=function(){const _0x18fde1=_0x4a1003;return this[_0x18fde1(0xa1)];});;Imported[_0x4a1003(0xf3)]&&(Window_PartyStatus['prototype'][_0x4a1003(0xe7)]=function(){const _0xf32a24=_0x4a1003;return this[_0xf32a24(0xb6)]();},Window_PartyStatus[_0x4a1003(0x11c)]['getStateTooltipBattler']=function(){const _0x4ba357=_0x4a1003;return this[_0x4ba357(0xa1)];});;function Window_StateTooltip(){const _0x9b3409=_0x4a1003;this[_0x9b3409(0xc3)](...arguments);}Window_StateTooltip[_0x4a1003(0x11c)]=Object[_0x4a1003(0x121)](Window_Base[_0x4a1003(0x11c)]),Window_StateTooltip[_0x4a1003(0x11c)][_0x4a1003(0x120)]=Window_StateTooltip,Window_StateTooltip[_0x4a1003(0xa3)]=VisuMZ[_0x4a1003(0xf9)][_0x4a1003(0x105)]['Tooltip'][_0x4a1003(0xf8)],Window_StateTooltip[_0x4a1003(0x137)]=VisuMZ[_0x4a1003(0xf9)][_0x4a1003(0x105)][_0x4a1003(0xcb)][_0x4a1003(0x13a)],Window_StateTooltip[_0x4a1003(0xf7)]=VisuMZ[_0x4a1003(0xf9)][_0x4a1003(0x105)][_0x4a1003(0xcb)][_0x4a1003(0xeb)],Window_StateTooltip[_0x4a1003(0xe4)]=VisuMZ[_0x4a1003(0xf9)][_0x4a1003(0x105)]['Vocab']['StateFmt'],Window_StateTooltip[_0x4a1003(0xf6)]=VisuMZ[_0x4a1003(0xf9)][_0x4a1003(0x105)][_0x4a1003(0x108)][_0x4a1003(0xac)],Window_StateTooltip['DEBUFF_FMT']=VisuMZ[_0x4a1003(0xf9)][_0x4a1003(0x105)][_0x4a1003(0x108)][_0x4a1003(0xa7)],Window_StateTooltip['ACTIONS_FMT']=VisuMZ[_0x4a1003(0xf9)][_0x4a1003(0x105)]['Vocab'][_0x4a1003(0xe1)],Window_StateTooltip[_0x4a1003(0x149)]=VisuMZ['StateTooltips']['Settings']['Vocab'][_0x4a1003(0x12d)],Window_StateTooltip[_0x4a1003(0xf4)]=VisuMZ[_0x4a1003(0xf9)]['Settings'][_0x4a1003(0x108)][_0x4a1003(0x10b)],Window_StateTooltip[_0x4a1003(0xc0)]=VisuMZ['StateTooltips'][_0x4a1003(0x105)][_0x4a1003(0x108)]['ReplaceWhite'],Window_StateTooltip[_0x4a1003(0x107)]=VisuMZ[_0x4a1003(0xf9)][_0x4a1003(0x105)][_0x4a1003(0x108)]['WhiteReplaceColor'],Window_StateTooltip[_0x4a1003(0xdc)]=VisuMZ[_0x4a1003(0xf9)][_0x4a1003(0x105)][_0x4a1003(0xcb)][_0x4a1003(0x12e)],Window_StateTooltip[_0x4a1003(0x13b)]=VisuMZ[_0x4a1003(0xf9)][_0x4a1003(0x105)][_0x4a1003(0xcb)][_0x4a1003(0x138)],Window_StateTooltip[_0x4a1003(0x11c)]['initialize']=function(){const _0xeeeaeb=_0x4a1003,_0x45d2eb=new Rectangle(0x0,0x0,Graphics[_0xeeeaeb(0x111)],Graphics[_0xeeeaeb(0xc1)]);Window_Base[_0xeeeaeb(0x11c)][_0xeeeaeb(0xc3)][_0xeeeaeb(0x9d)](this,_0x45d2eb),this[_0xeeeaeb(0x10e)]['x']=this[_0xeeeaeb(0x10e)]['y']=Window_StateTooltip[_0xeeeaeb(0xa3)],this[_0xeeeaeb(0x118)](),this[_0xeeeaeb(0xb8)]=null;},Window_StateTooltip['prototype'][_0x4a1003(0xd2)]=function(){const _0x251464=_0x4a1003;this[_0x251464(0xcd)]=ImageManager[_0x251464(0xa9)](Window_StateTooltip[_0x251464(0x137)]);},Window_StateTooltip[_0x4a1003(0x11c)]['updateBackOpacity']=function(){const _0xadd9cf=_0x4a1003;this[_0xadd9cf(0x9a)]=Window_StateTooltip[_0xadd9cf(0xf7)];},Window_StateTooltip[_0x4a1003(0x11c)][_0x4a1003(0x128)]=function(_0x1ad89e){const _0x256c66=_0x4a1003;if(this[_0x256c66(0xb8)]===_0x1ad89e)return;this['_battler']=_0x1ad89e,this[_0x256c66(0xb8)]?this[_0x256c66(0x133)]():this[_0x256c66(0x118)]();},Window_StateTooltip[_0x4a1003(0x11c)][_0x4a1003(0x133)]=function(){const _0x1782a0=_0x4a1003;this[_0x1782a0(0x12a)][_0x1782a0(0x96)](),this['setupText']();if(this[_0x1782a0(0x126)][_0x1782a0(0xe0)]>0x0){this[_0x1782a0(0x147)]();const _0x37eb71=this['baseTextRect']();this[_0x1782a0(0xb7)](this[_0x1782a0(0x126)],_0x37eb71['x'],_0x37eb71['y'],_0x37eb71['width']),this[_0x1782a0(0x103)]();}else this[_0x1782a0(0x118)]();},Window_StateTooltip[_0x4a1003(0x11c)][_0x4a1003(0xf1)]=function(){const _0x5a79f3=_0x4a1003;this['_text']='';if(!this['_battler'])return;this['setupStateText'](),this[_0x5a79f3(0x117)](),this[_0x5a79f3(0x14b)](),this[_0x5a79f3(0x126)]=this[_0x5a79f3(0x126)]['trim']();},Window_StateTooltip[_0x4a1003(0x11c)][_0x4a1003(0x12f)]=function(){const _0xd52e00=_0x4a1003,_0x5ecaeb=Window_StateTooltip['STATE_FMT'],_0x2e8510=this[_0xd52e00(0xb8)][_0xd52e00(0xa8)]();for(const _0x17c2d5 of _0x2e8510){if(!_0x17c2d5)continue;if(!_0x17c2d5[_0xd52e00(0xd9)]['trim']())continue;if(_0x17c2d5[_0xd52e00(0xd9)][_0xd52e00(0x13c)](/-----/i))continue;if(_0x17c2d5['iconIndex']<=0x0)continue;const _0x30a39c='\x5cI[%1]'[_0xd52e00(0x11f)](_0x17c2d5['iconIndex']),_0x15d073=_0x17c2d5[_0xd52e00(0xd9)][_0xd52e00(0x11a)](),_0x251ca1=_0x17c2d5[_0xd52e00(0x97)][_0xd52e00(0x11f)](this[_0xd52e00(0xb8)][_0xd52e00(0xa2)](_0x17c2d5['id'])),_0x11044d=this['setupStateTurnText'](_0x17c2d5),_0x5458ca=ColorManager[_0xd52e00(0x148)](_0x17c2d5),_0x2432b5=_0x5ecaeb[_0xd52e00(0x11f)](_0x30a39c,_0x15d073,_0x251ca1,_0x11044d,_0x5458ca)[_0xd52e00(0x11a)]();_0x2432b5&&(this[_0xd52e00(0x126)]+=_0x2432b5+'\x0a');}},Window_StateTooltip[_0x4a1003(0x11c)][_0x4a1003(0x9e)]=function(_0x1dcf79){const _0xb4ab48=_0x4a1003;if(_0x1dcf79['autoRemovalTiming']===0x0)return'';if(this[_0xb4ab48(0xb8)][_0xb4ab48(0xd0)]()[_0xb4ab48(0xd7)](_0x1dcf79))return Window_StateTooltip[_0xb4ab48(0xf4)];let _0x45f4ec=_0x1dcf79[_0xb4ab48(0xff)]===0x1?Window_StateTooltip[_0xb4ab48(0xd5)]:Window_StateTooltip[_0xb4ab48(0x149)];const _0x527fe5=this[_0xb4ab48(0xb8)][_0xb4ab48(0x11e)](_0x1dcf79['id'])||0x0,_0x33c8bf=ColorManager['stateColor'](_0x1dcf79);return _0x45f4ec[_0xb4ab48(0x11f)](_0x527fe5,_0x33c8bf)[_0xb4ab48(0x11a)]();},Window_StateTooltip['prototype'][_0x4a1003(0x117)]=function(){const _0x32cb30=_0x4a1003,_0x73bf83=Window_StateTooltip[_0x32cb30(0xf6)],_0x3f8496=Window_StateTooltip[_0x32cb30(0x142)];for(let _0x363b82=0x0;_0x363b82<0x8;_0x363b82++){if(!this['_battler'][_0x32cb30(0x13f)](_0x363b82))continue;const _0x1762e0=this['_battler'][_0x32cb30(0x101)](_0x363b82),_0x3394d9=_0x1762e0?_0x73bf83:_0x3f8496,_0x57d30f=this[_0x32cb30(0xb8)]['buffIconIndex'](this['_battler'][_0x32cb30(0xf0)][_0x363b82],_0x363b82),_0x28827e=_0x32cb30(0x11d)[_0x32cb30(0x11f)](_0x57d30f),_0x557813=TextManager[_0x32cb30(0x143)](_0x363b82),_0x5b233d=Math['floor'](this[_0x32cb30(0xb8)][_0x32cb30(0x116)](_0x363b82)*0x64),_0x13ae05=this[_0x32cb30(0xfa)](_0x363b82),_0x481141=_0x1762e0?ColorManager[_0x32cb30(0xd6)]():ColorManager[_0x32cb30(0x139)](),_0x35f630=_0x3394d9[_0x32cb30(0x11f)](_0x28827e,_0x557813,_0x5b233d,_0x13ae05,_0x481141)['trim']();_0x35f630&&(this[_0x32cb30(0x126)]+=_0x35f630+'\x0a');}},Window_StateTooltip[_0x4a1003(0x11c)][_0x4a1003(0xfa)]=function(_0x173d17){const _0x1ef32c=_0x4a1003,_0x5728ba=Window_StateTooltip[_0x1ef32c(0x149)],_0x37b241=this[_0x1ef32c(0xb8)][_0x1ef32c(0x132)](_0x173d17),_0x4a0eaf=this['_battler'][_0x1ef32c(0x101)](_0x173d17),_0x314d05=_0x4a0eaf?ColorManager['buffColor']():ColorManager['debuffColor']();return _0x5728ba[_0x1ef32c(0x11f)](_0x37b241,_0x314d05)[_0x1ef32c(0x11a)]();},Window_StateTooltip[_0x4a1003(0x11c)][_0x4a1003(0x14b)]=function(){const _0x5c0d32=_0x4a1003,_0xa4609b=/\\C\[#(.*?)\]/g;this[_0x5c0d32(0x126)]=this[_0x5c0d32(0x126)][_0x5c0d32(0xee)](_0xa4609b,(_0x55d3de,_0x496e83)=>{const _0x2cda3a=_0x5c0d32;if(_0x496e83===_0x2cda3a(0x130)){const _0x820986=ColorManager['getColor'](Window_StateTooltip[_0x2cda3a(0x107)]);_0x496e83=_0x820986[_0x2cda3a(0xee)](/#/g,'');}return'\x5cHEXCOLOR<#%1>'[_0x2cda3a(0x11f)](_0x496e83);});},Window_StateTooltip[_0x4a1003(0x11c)][_0x4a1003(0x140)]=function(_0x37a586,_0x3d801b){const _0x12e181=_0x4a1003;switch(_0x37a586){case'HEXCOLOR':const _0x2c1e36=this[_0x12e181(0x114)](_0x3d801b);!this[_0x12e181(0x10c)]()&&_0x3d801b[_0x12e181(0xdf)]&&this['changeTextColor'](_0x2c1e36);break;default:Window_Base[_0x12e181(0x11c)]['processEscapeCharacter']['call'](this,_0x37a586,_0x3d801b);}},Window_StateTooltip[_0x4a1003(0x11c)][_0x4a1003(0x147)]=function(){const _0x1a53d4=_0x4a1003,_0xe96639=this[_0x1a53d4(0xab)](this[_0x1a53d4(0x126)]);this[_0x1a53d4(0x111)]=_0xe96639[_0x1a53d4(0x111)]+(this[_0x1a53d4(0xbd)]()+this[_0x1a53d4(0xb2)])*0x2,this[_0x1a53d4(0xc1)]=_0xe96639['height']+this[_0x1a53d4(0xb2)]*0x2,this[_0x1a53d4(0xe9)](),this['resetFontSettings']();},Window_StateTooltip['prototype'][_0x4a1003(0x115)]=function(){const _0x3a5228=_0x4a1003;Window_Base[_0x3a5228(0x11c)][_0x3a5228(0x115)][_0x3a5228(0x9d)](this),this[_0x3a5228(0x122)]&&(this[_0x3a5228(0x122)]=![],this[_0x3a5228(0x133)]()),this[_0x3a5228(0x14a)](),this[_0x3a5228(0x94)](),this[_0x3a5228(0x10d)]();},Window_StateTooltip[_0x4a1003(0x11c)][_0x4a1003(0x12c)]=function(){const _0x51bead=_0x4a1003;this[_0x51bead(0x122)]=!![];},Window_StateTooltip[_0x4a1003(0x11c)][_0x4a1003(0x14a)]=function(){const _0x4e8348=_0x4a1003;if(!this['visible'])return;this['x']=TouchInput['x']+Window_StateTooltip[_0x4e8348(0xdc)],this['y']=TouchInput['y']+Window_StateTooltip['MOUSE_OFFSET_Y'],this[_0x4e8348(0xb0)]();},Window_StateTooltip['prototype'][_0x4a1003(0xb0)]=function(){const _0xcb7c43=_0x4a1003,_0x5abce8=this[_0xcb7c43(0x111)]*(Window_StateTooltip[_0xcb7c43(0xa3)]||0.01),_0x201da1=this[_0xcb7c43(0xc1)]*(Window_StateTooltip[_0xcb7c43(0xa3)]||0.01);this['x']=Math['round'](this['x'][_0xcb7c43(0xce)](0x0,Graphics[_0xcb7c43(0x111)]-_0x5abce8)),this['y']=Math[_0xcb7c43(0x127)](this['y'][_0xcb7c43(0xce)](0x0,Graphics[_0xcb7c43(0xc1)]-_0x201da1));},Window_StateTooltip[_0x4a1003(0x11c)][_0x4a1003(0x94)]=function(){const _0x4de75d=_0x4a1003;this[_0x4de75d(0xb8)]&&this[_0x4de75d(0xb8)][_0x4de75d(0xe3)]()&&this['setBattler'](null);},Window_StateTooltip[_0x4a1003(0x11c)][_0x4a1003(0x10d)]=function(){const _0x3b3210=_0x4a1003,_0x46e6fc=this[_0x3b3210(0x131)]();this[_0x3b3210(0x112)]=this['contentsOpacity']=_0x46e6fc;},Window_StateTooltip[_0x4a1003(0x11c)]['targetOpacity']=function(){const _0x4eeda0=_0x4a1003;if(SceneManager[_0x4eeda0(0xaf)]()){const _0x389b6c=[];_0x389b6c[_0x4eeda0(0x144)](SceneManager['_scene'][_0x4eeda0(0x14c)]),_0x389b6c['push'](SceneManager[_0x4eeda0(0xfd)][_0x4eeda0(0xd8)]),_0x389b6c[_0x4eeda0(0x144)](SceneManager[_0x4eeda0(0xfd)][_0x4eeda0(0x10a)]);for(const _0x1cfe56 of _0x389b6c){if(_0x1cfe56&&_0x1cfe56[_0x4eeda0(0xc2)]()&&_0x1cfe56['active']&&_0x1cfe56[_0x4eeda0(0xb9)]())return 0x0;}}return 0xff;};