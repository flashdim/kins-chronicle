//=============================================================================
// VisuStella MZ - Sideview Battle UI
// VisuMZ_3_SideviewBattleUI.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_SideviewBattleUI = true;

var VisuMZ = VisuMZ || {};
VisuMZ.SideviewBattleUI = VisuMZ.SideviewBattleUI || {};
VisuMZ.SideviewBattleUI.version = 1.02;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.02] [SideviewBattleUI]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Sideview_Battle_UI_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin changes the RPG Maker MZ Battle UI for Sideview Battle Systems
 * into something more minimalistic. The menus are placed towards the player's
 * party to let the player focus their attention to the center of the screen
 * instead of to the lower ledges of the screen. The input command windows show
 * up near the inputting actor to give the player a clear understanding of who
 * is performing what action.
 * 
 * *NOTE* To use this battle layout, you will need the updated version of
 * VisuStella's Battle Core. Go into its Plugin Parameters and change the
 * Battle Layout Settings > Battle Layout Style > plugin parameter to this
 * value: "Sideview Battle UI" or "sideview_ui".
 *
 * Features include all (but not limited to) the following:
 * 
 * * This plugin changes the UI for the RPG Maker MZ Sideview Battle System.
 * * Status windows appear on the side of the screen for each actor in battle.
 * * The appearance is more compact for both the status windows and input
 *   command windows.
 * * More of the battlefield can be seen with this kind of layout.
 * * Lots of customization options to adjust the status windows.
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
 * * VisuMZ_1_BattleCore
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
 * Sideview Only
 * 
 * This plugin only works for the sideview battle system. If this layout is
 * selected in the Battle Core, the battle system will automatically shift to
 * sideview regardless of the settings.
 * 
 * *NOTE* To use this battle layout, you will need the updated version of
 * VisuStella's Battle Core. Go into its Plugin Parameters and change the
 * Battle Layout Settings > Battle Layout Style > plugin parameter to this
 * value: "Sideview Battle UI" or "sideview_ui".
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
 * VisuMZ_2_AggroControlSystem
 * VisuMZ_2_BattleSystemBTB
 * VisuMZ_3_BoostAction
 * VisuMZ_3_StateTooltips
 * VisuMZ_4_BreakShields
 *
 * There are features provided in this plugin for the above plugins. Their UI
 * elements can be shown with this plugin's status windows.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Battler Offset Settings
 * ============================================================================
 *
 * Settings for battler sprite offsets when using the Sideview Battle UI.
 * Since there's more room on the screen, placing them lower will help adjust
 * for the player's visual comfort.
 *
 * ---
 *
 * Settings
 * 
 *   Perform Offset?:
 *   - Offsets the battler sprite positions when using Sideview Battle UI.
 * 
 *   Offset X:
 *   - How much to offset the sprite positions by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the sprite positions by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Window Settings
 * ============================================================================
 *
 * Settings for general windows when using the Sideview Battle UI. These
 * settings are made for the windows that aren't the status windows but are
 * affected by this plugin.
 *
 * ---
 *
 * Global
 * 
 *   UI Scale:
 *   - What is the scaling rate for battle windows?
 *   - Use a number between 0 and 1 for the best results.
 *
 * ---
 *
 * Help Window
 * 
 *   Fade BG Style?:
 *   - Fade the Help Window background with this UI?
 *
 * ---
 *
 * Actor Command Window
 * 
 *   Max Rows:
 *   - What is the maximum number of rows for the actor command window with
 *     this UI?
 *
 * ---
 *
 * Party Command Window
 * 
 *   Max Rows:
 *   - What is the maximum number of rows for the party command window with
 *     this UI?
 *
 * ---
 *
 * Item Window
 * 
 *   Max Rows:
 *   - What is the maximum number of rows for the item window with this UI?
 * 
 *   Width:
 *   - What is the width item window with this UI?
 *   - This is the width BEFORE scaling.
 * 
 *   Offset X:
 *   - How much to offset the window X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the window Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Skill Window
 * 
 *   Max Rows:
 *   - What is the maximum number of rows for the skill window with this UI?
 * 
 *   Width:
 *   - What is the width skill window with this UI?
 *   - This is the width BEFORE scaling.
 * 
 *   Offset X:
 *   - How much to offset the window X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the window Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Status Window Settings
 * ============================================================================
 *
 * Settings for the status window when using the Sideview Battle UI. Each of
 * these plugin parameters allow you to adjust many of the various elements
 * found inside of this window.
 *
 * ---
 *
 * Dimensions
 * 
 *   Width Base:
 *   - How width is each actor's status window?
 *   - This is the width AFTER scaling.
 * 
 *   Height Base:
 *   - How tall do you want the status window to be?
 *   - 'auto' for automatic calculations.
 *   - This is the height BEFORE scaling.
 * 
 *     Height Buffer:
 *     - How much space do you want there to be vertically from window
 *       to window?
 *     - This is the height BEFORE scaling.
 * 
 *   Move Distance:
 *   - How far will the status window move when the actor is selected
 *     or active?
 * 
 *     Move Speed:
 *     - How many pixels with the status window move per frame?
 *
 * ---
 *
 * Standard UI > Name
 * 
 *   Show?:
 *   - Show this UI element?
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Standard UI > States
 * 
 *   Show?:
 *   - Show this UI element?
 * 
 *   Ignore Scale?:
 *   - Ignore scaling to show icons at their real size?
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Standard UI > TPB/ATB Gauge
 * 
 *   Show?:
 *   - Show this UI element?
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Standard UI > HP Gauge
 * 
 *   Show?:
 *   - Show this UI element?
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Standard UI > MP Gauge
 * 
 *   Show?:
 *   - Show this UI element?
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Standard UI > TP Gauge
 * 
 *   Show?:
 *   - Show this UI element?
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Compatibility UI > Aggro Gauge
 * 
 *   Show?:
 *   - Show this UI element?
 *   - Requires VisuMZ_2_AggroControlSystem!
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Compatibility UI > Boost Points
 * 
 *   Show?:
 *   - Show this UI element?
 *   - Requires VisuMZ_3_BoostAction!
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Compatibility UI > Brave Points
 * 
 *   Show?:
 *   - Show this UI element?
 *   - Requires VisuMZ_2_BattleSystemBTB!
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Compatibility UI > Break Shield
 * 
 *   Show?:
 *   - Show this UI element?
 *   - Requires VisuMZ_4_BreakShields!
 * 
 *   Ignore Scale?:
 *   - Ignore scaling to show icons at their real size?
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Compatibility UI > State Tooltips
 * 
 *   Show?:
 *   - Show this UI element?
 *   - Requires VisuMZ_3_StateTooltips!
 *
 * ---
 * 
 * JS
 * 
 *   JS: Custom UI:
 *   - JavaScript used to add custom elements to each status window.
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
 * Version 1.02: June 18, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.01: April 23, 2021
 * * Bug Fixes!
 * ** Item window during battle should now align properly. Fix made by Olivia.
 *
 * Version 1.00 Official Release Date: May 12, 2021
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
 * @param SideviewBattleUI
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Battler:struct
 * @text Battler Offset Settings
 * @type struct<Battler>
 * @desc Settings for battler sprite offsets when using the Sideview Battle UI.
 * @default {"Enable:eval":"true","OffsetX:num":"+0","OffsetY:num":"+128"}
 *
 * @param GeneralWindow:struct
 * @text General Window Settings
 * @type struct<GeneralWindow>
 * @desc Settings for general windows when using the Sideview Battle UI.
 * @default {"Global":"","UiScale:num":"0.80","HelpWindow":"","HelpFadeStyle:eval":"true","ActorCommandWindow":"","ActorCommandWindowMaxRows:num":"8","PartyCommandWindow":"","PartyCommandWindowMaxRows:num":"8","ItemWindow":"","ItemWindowMaxRows:num":"8","ItemWindowWidth:num":"400","ItemWindowOffsetX:num":"+16","ItemWindowOffsetY:num":"+16","SkillWindow":"","SkillWindowMaxRows:num":"8","SkillWindowWidth:num":"400","SkillWindowOffsetX:num":"+16","SkillWindowOffsetY:num":"+16"}
 *
 * @param StatusWindow:struct
 * @text Status Window Settings
 * @type struct<StatusWindow>
 * @desc Settings for the status window when using the Sideview Battle UI.
 * @default {"Dimensions":"","WidthBase:num":"200","HeightBase:str":"auto","HeightBuffer:num":"4","MoveDistance:num":"48","MoveSpeed:num":"4","Standard":"","Name":"","NameShow:eval":"true","NameOffsetX:num":"+48","NameOffsetY:num":"+0","States":"","StatesShow:eval":"true","StatesIgnoreScale:eval":"true","StatesOffsetX:num":"+20","StatesOffsetY:num":"+20","Tpb":"","TpbShow:eval":"true","TpbOffsetX:num":"+44","TpbOffsetY:num":"+0","Hp":"","HpShow:eval":"true","HpOffsetX:num":"+60","HpOffsetY:num":"+0","Mp":"","MpShow:eval":"true","MpOffsetX:num":"+68","MpOffsetY:num":"+0","Tp":"","TpShow:eval":"true","TpOffsetX:num":"+74","TpOffsetY:num":"+0","Compatibility":"","Aggro":"","AggroShow:eval":"true","AggroOffsetX:num":"+44","AggroOffsetY:num":"+0","Boost":"","BoostShow:eval":"true","BoostOffsetX:num":"+52","BoostOffsetY:num":"+2","Brave":"","BraveShow:eval":"true","BraveOffsetX:num":"+52","BraveOffsetY:num":"-6","BreakShield":"","BreakShieldShow:eval":"true","BreakShieldIgnoreScale:eval":"true","BreakShieldOffsetX:num":"+20","BreakShieldOffsetY:num":"+20","StateTooltips":"","StateTooltipsShow:eval":"true","JS":"","CustomUi:func":"\"// Declare Variables\\nconst actor = arguments[0];\\nlet x = 0;\\nlet y = 0;\\nlet width = this.innerWidth;\\nlet height = this.innerHeight;\\n\\n// Draw Custom Elements\\n// Put in code you want here used for windows classes\""}
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
 * Battler Offset Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Battler:
 *
 * @param Enable:eval
 * @text Perform Offset?
 * @type boolean
 * @on Do Offset
 * @off Don't Offset
 * @desc Offsets the battler sprite positions when using Sideview Battle UI.
 * @default true
 *
 * @param OffsetX:num
 * @text Offset X
 * @desc How much to offset the sprite positions by?
 * Negative goes left. Positive goes right.
 * @default +0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @desc How much to offset the sprite positions by?
 * Negative goes up. Positive goes down.
 * @default +128
 *
 */
/* ----------------------------------------------------------------------------
 * GeneralWindow Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~GeneralWindow:
 *
 * @param Global
 *
 * @param UiScale:num
 * @text UI Scale
 * @parent Global
 * @desc What is the scaling rate for battle windows?
 * Use a number between 0 and 1 for the best results.
 * @default 0.80
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpFadeStyle:eval
 * @text Fade BG Style?
 * @parent HelpWindow
 * @type boolean
 * @on Fade Background
 * @off Default Background
 * @desc Fade the Help Window background with this UI?
 * @default true
 *
 * @param ActorCommandWindow
 * @text Actor Command Window
 *
 * @param ActorCommandWindowMaxRows:num
 * @text Max Rows
 * @parent ActorCommandWindow
 * @type number
 * @min 1
 * @desc What is the maximum number of rows for the actor command window with this UI?
 * @default 8
 *
 * @param PartyCommandWindow
 * @text Party Command Window
 *
 * @param PartyCommandWindowMaxRows:num
 * @text Max Rows
 * @parent PartyCommandWindow
 * @type number
 * @min 1
 * @desc What is the maximum number of rows for the party command window with this UI?
 * @default 8
 *
 * @param ItemWindow
 * @text Item Window
 *
 * @param ItemWindowMaxRows:num
 * @text Max Rows
 * @parent ItemWindow
 * @type number
 * @min 1
 * @desc What is the maximum number of rows for the item window with this UI?
 * @default 8
 *
 * @param ItemWindowWidth:num
 * @text Width
 * @parent ItemWindow
 * @type number
 * @min 1
 * @desc What is the width item window with this UI?
 * This is the width BEFORE scaling.
 * @default 400
 *
 * @param ItemWindowOffsetX:num
 * @text Offset X
 * @parent ItemWindow
 * @desc How much to offset the window X position by?
 * Negative goes left. Positive goes right.
 * @default +16
 *
 * @param ItemWindowOffsetY:num
 * @text Offset Y
 * @parent ItemWindow
 * @desc How much to offset the window Y position by?
 * Negative goes up. Positive goes down.
 * @default +16
 *
 * @param SkillWindow
 * @text Skill Window
 *
 * @param SkillWindowMaxRows:num
 * @text Max Rows
 * @parent SkillWindow
 * @type number
 * @min 1
 * @desc What is the maximum number of rows for the skill window with this UI?
 * @default 8
 *
 * @param SkillWindowWidth:num
 * @text Width
 * @parent SkillWindow
 * @type number
 * @min 1
 * @desc What is the width skill window with this UI?
 * This is the width BEFORE scaling.
 * @default 400
 *
 * @param SkillWindowOffsetX:num
 * @text Offset X
 * @parent SkillWindow
 * @desc How much to offset the window X position by?
 * Negative goes left. Positive goes right.
 * @default +16
 *
 * @param SkillWindowOffsetY:num
 * @text Offset Y
 * @parent SkillWindow
 * @desc How much to offset the window Y position by?
 * Negative goes up. Positive goes down.
 * @default +16
 *
 */
/* ----------------------------------------------------------------------------
 * Status Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~StatusWindow:
 *
 * @param Dimensions
 *
 * @param WidthBase:num
 * @text Width Base
 * @parent Dimensions
 * @type number
 * @desc How width is each actor's status window?
 * This is the width AFTER scaling.
 * @default 200
 *
 * @param HeightBase:str
 * @text Height Base
 * @parent Dimensions
 * @type number
 * @desc How tall do you want the status window to be?
 * 'auto' for automatic calculations. Value is BEFORE scaling.
 * @default auto
 *
 * @param HeightBuffer:num
 * @text Height Buffer
 * @parent HeightBase:str
 * @type number
 * @desc How much space do you want there to be vertically from window to window?
 * @default 4
 *
 * @param MoveDistance:num
 * @text Move Distance
 * @parent Dimensions
 * @type number
 * @desc How far will the status window move when
 * the actor is selected or active?
 * @default 48
 *
 * @param MoveSpeed:num
 * @text Move Speed
 * @parent MoveDistance:num
 * @type number
 * @desc How many pixels with the status window move per frame?
 * @default 4
 *
 * @param Standard
 * @text Standard UI
 * 
 * @param Name
 * @parent Standard
 *
 * @param NameShow:eval
 * @text Show?
 * @parent Name
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * @default true
 *
 * @param NameOffsetX:num
 * @text Offset X
 * @parent Name
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +48
 *
 * @param NameOffsetY:num
 * @text Offset Y
 * @parent Name
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +0
 * 
 * @param States
 * @parent Standard
 *
 * @param StatesShow:eval
 * @text Show?
 * @parent States
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * @default true
 *
 * @param StatesIgnoreScale:eval
 * @text Ignore Scale?
 * @parent States
 * @type boolean
 * @on Ignore Scaling
 * @off Use Scaling
 * @desc Ignore scaling to show icons at their real size?
 * @default true
 *
 * @param StatesOffsetX:num
 * @text Offset X
 * @parent States
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +20
 *
 * @param StatesOffsetY:num
 * @text Offset Y
 * @parent States
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +20
 * 
 * @param Tpb
 * @text TPB/ATB Gauge
 * @parent Standard
 *
 * @param TpbShow:eval
 * @text Show?
 * @parent Tpb
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * @default true
 *
 * @param TpbOffsetX:num
 * @text Offset X
 * @parent Tpb
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +44
 *
 * @param TpbOffsetY:num
 * @text Offset Y
 * @parent Tpb
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +0
 * 
 * @param Hp
 * @text HP Gauge
 * @parent Standard
 *
 * @param HpShow:eval
 * @text Show?
 * @parent Hp
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * @default true
 *
 * @param HpOffsetX:num
 * @text Offset X
 * @parent Hp
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +60
 *
 * @param HpOffsetY:num
 * @text Offset Y
 * @parent Hp
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +0
 * 
 * @param Mp
 * @text MP Gauge
 * @parent Standard
 *
 * @param MpShow:eval
 * @text Show?
 * @parent Mp
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * @default true
 *
 * @param MpOffsetX:num
 * @text Offset X
 * @parent Mp
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +68
 *
 * @param MpOffsetY:num
 * @text Offset Y
 * @parent Mp
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +0
 * 
 * @param Tp
 * @text TP Gauge
 * @parent Standard
 *
 * @param TpShow:eval
 * @text Show?
 * @parent Tp
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * @default true
 *
 * @param TpOffsetX:num
 * @text Offset X
 * @parent Tp
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +74
 *
 * @param TpOffsetY:num
 * @text Offset Y
 * @parent Tp
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +0
 *
 * @param Compatibility
 * @text Compatibility UI
 * 
 * @param Aggro
 * @text Aggro Gauge
 * @parent Compatibility
 * @default VisuMZ_2_AggroControlSystem
 *
 * @param AggroShow:eval
 * @text Show?
 * @parent Aggro
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * Requires VisuMZ_2_AggroControlSystem!
 * @default true
 *
 * @param AggroOffsetX:num
 * @text Offset X
 * @parent Aggro
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +44
 *
 * @param AggroOffsetY:num
 * @text Offset Y
 * @parent Aggro
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +0
 * 
 * @param Boost
 * @text Boost Points
 * @parent Compatibility
 * @default VisuMZ_3_BoostAction
 *
 * @param BoostShow:eval
 * @text Show?
 * @parent Boost
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * Requires VisuMZ_3_BoostAction!
 * @default true
 *
 * @param BoostOffsetX:num
 * @text Offset X
 * @parent Boost
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +52
 *
 * @param BoostOffsetY:num
 * @text Offset Y
 * @parent Boost
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +2
 * 
 * @param Brave
 * @text Brave Points
 * @parent Compatibility
 * @default VisuMZ_2_BattleSystemBTB
 *
 * @param BraveShow:eval
 * @text Show?
 * @parent Brave
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * Requires VisuMZ_2_BattleSystemBTB!
 * @default true
 *
 * @param BraveOffsetX:num
 * @text Offset X
 * @parent Brave
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +52
 *
 * @param BraveOffsetY:num
 * @text Offset Y
 * @parent Brave
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default -6
 * 
 * @param BreakShield
 * @text Break Shield
 * @parent Compatibility
 * @default VisuMZ_4_BreakShields
 *
 * @param BreakShieldShow:eval
 * @text Show?
 * @parent BreakShield
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * Requires VisuMZ_4_BreakShields!
 * @default true
 *
 * @param BreakShieldIgnoreScale:eval
 * @text Ignore Scale?
 * @parent BreakShield
 * @type boolean
 * @on Ignore Scaling
 * @off Use Scaling
 * @desc Ignore scaling to show icons at their real size?
 * @default true
 *
 * @param BreakShieldOffsetX:num
 * @text Offset X
 * @parent BreakShield
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +20
 *
 * @param BreakShieldOffsetY:num
 * @text Offset Y
 * @parent BreakShield
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +20
 * 
 * @param StateTooltips
 * @text State Tooltips
 * @parent Compatibility
 * @default VisuMZ_3_StateTooltips
 *
 * @param StateTooltipsShow:eval
 * @text Show?
 * @parent StateTooltips
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * Requires VisuMZ_3_StateTooltips!
 * @default true
 *
 * @param JS
 *
 * @param CustomUi:func
 * @text JS: Custom UI
 * @parent JS
 * @type note
 * @desc JavaScript used to add custom elements to each status window.
 * @default "// Declare Variables\nconst actor = arguments[0];\nlet x = 0;\nlet y = 0;\nlet width = this.innerWidth;\nlet height = this.innerHeight;\n\n// Draw Custom Elements\n// Put in code you want here used for windows classes"
 *
 */
//=============================================================================

const _0x18b9=['zHmMf','bnlZl','TpOffsetX','sideviewUiPositionOffsetY','floor','AggroOffsetY','SIDEVIEW_BATTLE_UI_BATTLER_OFFSET_X','innerRect','actor%1-breakShieldIcon','call','allowBoostAction','BREAK_SHIELD_SHOWN','isShowTpbGauge','Scene_Base_isWindowMaskingEnabled','STATES_SHOWN','VisuMZ_2_AggroControlSystem','ConvertParams','isWindowMaskingEnabled','isSideView','VisuMZ_2_BattleSystemCTB','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','Enable','clearBattleRefreshRequest','EVAL','BhRZA','STATES_OFFSET_Y','createSideviewUiDimmerSprite','SIDEVIEW_BATTLE_UI_BATTLER_WINDOW_OFFSET_X','iconHeight','status','StatusGauge','parameters','length','MoveSpeed','_partyCommandWindow','9475LjaKnt','NAME_OFFSET_X','format','isStateTooltipEnabled','battleLayoutStyle','actorWindowRect','_requestRefresh','contains','HEIGHT_BUFFER','Window_ItemList_maxCols','13465jyAggh','fittingHeight','push','Window_ItemList_colSpacing','HeightBuffer','gradientFillRect','YlvfE','create','placeStateIcon','_battler','StatesOffsetX','_dimmerSprite','isUsingSideviewUiLayout','Settings','boxWidth','updateSideviewUiFadeIn','STRUCT','TP_GAUGE_OFFSET_Y','Window_ItemList_makeItemList','enoai','StatesOffsetY','TpbOffsetX','HpShow','description','BOOST_OFFSET_X','HP_GAUGE_OFFSET_Y','createWindowRect','uramQ','VisuMZ_3_BoostAction','_list','BRAVE_OFFSET_X','AggroShow','MP_GAUGE_OFFSET_Y','ActorCommandWindowMaxRows','isActivePosition','_spriteset','hideAdditionalSprites','StatusWindow','updateStatusWindowPosition','BRAVE_SHOWN','name','actorId','bitmap','_additionalSprites','4KNFMbU','AGGRO_SHOWN','isSelected','Window_ActorCommand_initialize','TP_GAUGE_OFFSET_X','actor%1-stateIcon','NameShow','SIDEVIEW_BATTLE_UI_WINDOW_MAX_ROWS','makeItemList','WIDTH_BASE','pNncY','STATES_OFFSET_X','Window_PartyCommand_initialize','aliveMembers','zksff','VisuMZ_2_BattleSystemBTB','CustomUi','clampSideviewUiPlacementPosition','_battleField','ARRAYJSON','Game_System_isSideView','SkillWindowOffsetY','createCancelButton','boxHeight','refreshSideviewUiBattleStatusWindows','Scene_Battle_createStatusWindow','TPB_SHOWN','AggroOffsetX','luChR','active','activate','Window_SkillList_maxCols','sideview_ui','SkillWindowMaxRows','height','maxCols','NAME_SHOWN','ICON_SIZE_RATE','Window_SkillList_colSpacing','JCQBU','QXgsw','231RcXWHY','_itemWindow','HpOffsetY','dimColor2','gaugeHeight','scale','BOOST_OFFSET_Y','RRjVX','drawAllItems','createStatusWindow','AGGRO_OFFSET_Y','AGGRO_OFFSET_X','TPB_OFFSET_Y','padding','_sideviewUiBattleStatusWindows','trim','sideviewUiWidth','lineHeight','SideviewBattleUI','adjustSideviewUiHeight','ItemWindowOffsetY','NUM','NameOffsetX','exit','SIDEVIEW_BATTLE_UI_WINDOW_WIDTH','CommandWidth','StatesShow','updateRefreshSideviewUi','drawActorBravePoints','UwJQe','vWNuN','BOOST_SHOWN','Scene_Battle_statusWindowRect','Tqndy','lCucj','BraveShow','isTpb','prototype','_scene','placeGauge','4868rLdVXs','BREAK_SHIELD_REVERSE_SCALE','EVsnx','aggroGauge','_data','BreakShieldOffsetY','ibHYR','BREAK_SHIELD_OFFSET_Y','VisuMZ_4_BreakShields','_homeX','Window_SkillList_makeItemList','MP_GAUGE_OFFSET_X','5cZZxbG','refresh','updateRefresh','isAdjustBravePoints','resize','QrcZB','BREAK_SHIELD_OFFSET_X','STATE_TOOLTIPS_SHOWN','WidthBase','HelpFadeStyle','AnYbv','YqTug','ItemWindowOffsetX','FUNC','OffsetX','addWindow','updatePadding','BoostOffsetX','_actorCommandWindow','filter','Scene_Battle_updateStatusWindowPosition','76640uteyoE','gaugeLineHeight','SIDEVIEW_BATTLE_UI_FADE_STYLE','toUpperCase','statusWindowRect','197293BbyrVI','Scene_Battle_createCancelButton','updateBattler','_partyIndex','_activeX','BreakShieldShow','KweGN','HdakS','JwNEg','HEIGHT_BASE','placeTimeGauge','PKQHc','match','round','parse','setHome','isCTB','addChildToBack','StatesIgnoreScale','PartyCommandWindowMaxRows','SIDEVIEW_BATTLE_UI_BATTLER_WINDOW_OFFSET_Y','2657keSzQw','fillRect','refreshDimmerBitmap','_actor','isBTB','isShowAggro','AggroControlSystem','dTppt','clamp','jokYg','updateSideviewUiFadeOut','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','updatePosition','isStateTooltipTouched','battler','actor','isAdjustBoostPoints','map','maxSideviewUiRows','_skillWindow','ARRAYSTR','MOVE_SPEED','Window_ActorCommand_makeCommandList','constructor','initMembersSideviewUi','SkillWindowWidth','AtTKS','auto','NameOffsetY','OiOyr','sideviewUiPositionOffsetX','MP_GAUGE_SHOWN','min','version','makeCommandList','worldTransform','MpShow','TpbOffsetY','SIDEVIEW_BATTLE_UI_MOVE_BATTLERS','TpShow','YUKTs','ceil','maxBattleMembers','visible','update','SIDEVIEW_BATTLE_UI_SCALE','ARRAYSTRUCT','TpbShow','HP_GAUGE_SHOWN','SkillWindowOffsetX','9502mCOmsA','SIDEVIEW_BATTLE_UI_BATTLER_OFFSET_Y','dimColor1','UiScale','TpOffsetY','BraveOffsetX','HP_GAUGE_OFFSET_X','placeAggroGauge','qsBaU','ItemWindowMaxRows','setBackgroundType','TPB_OFFSET_X','sideviewUiTargetActor','BoostShow','isBattleRefreshRequested','EjjcX','_targetX','dataSideviewUiLength','GeneralWindow','Window_PartyCommand_makeCommandList','updateSideviewUiPosition','colSpacing','createContents','return\x200','MSGHv','getStateTooltipBattler','updateSideviewBattleUIPositions','ekTWr','width','StateTooltipsShow','WIDTH_MOVE','adjustSideviewUiWidth','Rsgtg','BreakShieldOffsetX','includes','_enemyWindow','2YlcApo','Window_Help_initialize','battleMembers','MpOffsetX','placeActorName','setFrame','NAME_OFFSET_Y','Battler','max','BattleLayout','Scene_Battle_actorWindowRect','Window_ItemList_initialize','Window_SkillList_initialize','drawCustomJS','ARRAYNUM','initialize','71CrYXOG','STATES_REVERSE_SCALE','TP_GAUGE_SHOWN','BRAVE_OFFSET_Y','drawBasicStatus','opacity','Window_BattleStatus_updateRefresh','43UNeTNN','_currentActor','56ITQGar','MpOffsetY'];const _0x100aec=_0x443e;(function(_0x22cf71,_0x28be5c){const _0x48a326=_0x443e;while(!![]){try{const _0x2c2568=parseInt(_0x48a326(0x19f))*parseInt(_0x48a326(0x20f))+-parseInt(_0x48a326(0x21f))*parseInt(_0x48a326(0x1eb))+parseInt(_0x48a326(0x2e1))*parseInt(_0x48a326(0x2d5))+parseInt(_0x48a326(0x258))*-parseInt(_0x48a326(0x226))+-parseInt(_0x48a326(0x1b9))*-parseInt(_0x48a326(0x228))+parseInt(_0x48a326(0x284))*-parseInt(_0x48a326(0x1a4))+parseInt(_0x48a326(0x24e))*parseInt(_0x48a326(0x2ad));if(_0x2c2568===_0x28be5c)break;else _0x22cf71['push'](_0x22cf71['shift']());}catch(_0x7af07){_0x22cf71['push'](_0x22cf71['shift']());}}}(_0x18b9,0x73508));function _0x443e(_0x528df1,_0x4d5a06){return _0x443e=function(_0x18b949,_0x443e94){_0x18b949=_0x18b949-0x18e;let _0x555350=_0x18b9[_0x18b949];return _0x555350;},_0x443e(_0x528df1,_0x4d5a06);}var label='SideviewBattleUI',tier=tier||0x0,dependencies=['VisuMZ_1_BattleCore'],pluginData=$plugins[_0x100aec(0x19d)](function(_0x284772){const _0x710924=_0x100aec;return _0x284772[_0x710924(0x248)]&&_0x284772[_0x710924(0x26f)][_0x710924(0x20d)]('['+label+']');})[0x0];VisuMZ[label][_0x100aec(0x265)]=VisuMZ[label][_0x100aec(0x265)]||{},VisuMZ['ConvertParams']=function(_0x1ca4ab,_0x101581){const _0x58579d=_0x100aec;for(const _0x39d735 in _0x101581){if('vWNuN'===_0x58579d(0x2cb)){if(_0x39d735['match'](/(.*):(.*)/i)){const _0x20408b=String(RegExp['$1']),_0x15b390=String(RegExp['$2'])[_0x58579d(0x1a2)]()[_0x58579d(0x2bc)]();let _0x284da1,_0x244541,_0xddbc3;switch(_0x15b390){case _0x58579d(0x2c2):_0x284da1=_0x101581[_0x39d735]!==''?Number(_0x101581[_0x39d735]):0x0;break;case _0x58579d(0x21d):_0x244541=_0x101581[_0x39d735]!==''?JSON[_0x58579d(0x1b2)](_0x101581[_0x39d735]):[],_0x284da1=_0x244541[_0x58579d(0x1ca)](_0x5aed61=>Number(_0x5aed61));break;case _0x58579d(0x242):_0x284da1=_0x101581[_0x39d735]!==''?eval(_0x101581[_0x39d735]):null;break;case'ARRAYEVAL':_0x244541=_0x101581[_0x39d735]!==''?JSON['parse'](_0x101581[_0x39d735]):[],_0x284da1=_0x244541[_0x58579d(0x1ca)](_0x2ccfa8=>eval(_0x2ccfa8));break;case'JSON':_0x284da1=_0x101581[_0x39d735]!==''?JSON[_0x58579d(0x1b2)](_0x101581[_0x39d735]):'';break;case _0x58579d(0x297):_0x244541=_0x101581[_0x39d735]!==''?JSON[_0x58579d(0x1b2)](_0x101581[_0x39d735]):[],_0x284da1=_0x244541[_0x58579d(0x1ca)](_0x5128dd=>JSON[_0x58579d(0x1b2)](_0x5128dd));break;case _0x58579d(0x197):_0x284da1=_0x101581[_0x39d735]!==''?new Function(JSON[_0x58579d(0x1b2)](_0x101581[_0x39d735])):new Function(_0x58579d(0x202));break;case'ARRAYFUNC':_0x244541=_0x101581[_0x39d735]!==''?JSON['parse'](_0x101581[_0x39d735]):[],_0x284da1=_0x244541[_0x58579d(0x1ca)](_0x3c7190=>new Function(JSON[_0x58579d(0x1b2)](_0x3c7190)));break;case'STR':_0x284da1=_0x101581[_0x39d735]!==''?String(_0x101581[_0x39d735]):'';break;case _0x58579d(0x1cd):_0x244541=_0x101581[_0x39d735]!==''?JSON[_0x58579d(0x1b2)](_0x101581[_0x39d735]):[],_0x284da1=_0x244541[_0x58579d(0x1ca)](_0x5f2e3f=>String(_0x5f2e3f));break;case _0x58579d(0x268):_0xddbc3=_0x101581[_0x39d735]!==''?JSON[_0x58579d(0x1b2)](_0x101581[_0x39d735]):{},_0x284da1=VisuMZ[_0x58579d(0x23a)]({},_0xddbc3);break;case _0x58579d(0x1e7):_0x244541=_0x101581[_0x39d735]!==''?JSON[_0x58579d(0x1b2)](_0x101581[_0x39d735]):[],_0x284da1=_0x244541[_0x58579d(0x1ca)](_0x4856b3=>VisuMZ['ConvertParams']({},JSON['parse'](_0x4856b3)));break;default:continue;}_0x1ca4ab[_0x20408b]=_0x284da1;}}else{if(!this['isUsingSideviewUiLayout']())return;const _0x65bb96=_0x2f028e[_0x58579d(0x1e6)];this[_0x58579d(0x2b2)]['x']=this[_0x58579d(0x2b2)]['y']=_0x65bb96;}}return _0x1ca4ab;},(_0xc3ceec=>{const _0x4fe5f3=_0x100aec,_0x591c70=_0xc3ceec[_0x4fe5f3(0x280)];for(const _0x4255de of dependencies){if(!Imported[_0x4255de]){alert(_0x4fe5f3(0x1c4)[_0x4fe5f3(0x250)](_0x591c70,_0x4255de)),SceneManager['exit']();break;}}const _0x4ce4fe=_0xc3ceec['description'];if(_0x4ce4fe[_0x4fe5f3(0x1b0)](/\[Version[ ](.*?)\]/i)){if(_0x4fe5f3(0x194)!==_0x4fe5f3(0x194))return _0x2893e7['SideviewBattleUI'][_0x4fe5f3(0x237)][_0x4fe5f3(0x233)](this);else{const _0x4d0877=Number(RegExp['$1']);if(_0x4d0877!==VisuMZ[label][_0x4fe5f3(0x1da)]){if(_0x4fe5f3(0x1f3)!==_0x4fe5f3(0x243))alert(_0x4fe5f3(0x23e)[_0x4fe5f3(0x250)](_0x591c70,_0x4d0877)),SceneManager[_0x4fe5f3(0x2c4)]();else return this['_actor']||_0x3457ee[_0x4fe5f3(0x2d2)][_0x4fe5f3(0x1f7)]['call'](this);}}}if(_0x4ce4fe['match'](/\[Tier[ ](\d+)\]/i)){if(_0x4fe5f3(0x292)==='zksff'){const _0x230c9f=Number(RegExp['$1']);if(_0x230c9f<tier){if(_0x4fe5f3(0x2ac)!==_0x4fe5f3(0x2ac)){if(!this[_0x4fe5f3(0x264)]())return;const _0x180226=this['width'];this['width']=this[_0x4fe5f3(0x2bd)](),_0x180226!==this[_0x4fe5f3(0x207)]&&this[_0x4fe5f3(0x201)]();}else alert(_0x4fe5f3(0x23f)[_0x4fe5f3(0x250)](_0x591c70,_0x230c9f,tier)),SceneManager[_0x4fe5f3(0x2c4)]();}else tier=Math[_0x4fe5f3(0x217)](_0x230c9f,tier);}else this[_0x4fe5f3(0x19c)]['updateSideviewUiFadeOut'](),this[_0x4fe5f3(0x1cc)]['updateSideviewUiFadeOut'](),this[_0x4fe5f3(0x2ae)][_0x4fe5f3(0x1c3)]();}VisuMZ['ConvertParams'](VisuMZ[label][_0x4fe5f3(0x265)],_0xc3ceec[_0x4fe5f3(0x24a)]);})(pluginData),BattleManager[_0x100aec(0x264)]=function(){const _0x41e687=_0x100aec;return SceneManager['isSceneBattle']()&&SceneManager['_scene'][_0x41e687(0x252)]()===_0x41e687(0x2a4);},VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x298)]=Game_System['prototype'][_0x100aec(0x23c)],Game_System[_0x100aec(0x2d2)]['isSideView']=function(){const _0x544bef=_0x100aec;if(BattleManager[_0x544bef(0x264)]()){if('TJiHs'!=='TJiHs'){let _0x1f2099=_0x2cbcba[_0x544bef(0x2d2)][_0x544bef(0x1d7)]['call'](this);return _0x1f2099+_0x57b4a7[_0x544bef(0x246)];}else return!![];}return VisuMZ['SideviewBattleUI'][_0x544bef(0x298)]['call'](this);},VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x237)]=Scene_Base[_0x100aec(0x2d2)]['isWindowMaskingEnabled'],Scene_Base[_0x100aec(0x2d2)][_0x100aec(0x23b)]=function(){const _0x3bbc7d=_0x100aec;if(BattleManager['isUsingSideviewUiLayout']()){if('FwLTE'==='nlNDE'){let _0x1406c7=_0x59cc41['prototype'][_0x3bbc7d(0x1d7)][_0x3bbc7d(0x233)](this);return _0x1406c7+_0x2c532d['SIDEVIEW_BATTLE_UI_BATTLER_WINDOW_OFFSET_X'];}else return![];}else return VisuMZ['SideviewBattleUI'][_0x3bbc7d(0x237)][_0x3bbc7d(0x233)](this);},VisuMZ['SideviewBattleUI'][_0x100aec(0x2cd)]=Scene_Battle[_0x100aec(0x2d2)][_0x100aec(0x1a3)],Scene_Battle['prototype'][_0x100aec(0x1a3)]=function(){const _0x539940=_0x100aec,_0x24d3e5=VisuMZ['SideviewBattleUI'][_0x539940(0x2cd)][_0x539940(0x233)](this);if(BattleManager[_0x539940(0x264)]()){if(_0x539940(0x1c0)===_0x539940(0x2ca)){if(!this[_0x539940(0x264)]())return;if(!_0x2a4ae0[_0x539940(0x1a1)])return;this[_0x539940(0x224)]=0x0;!this[_0x539940(0x263)]&&(this['_dimmerSprite']=new _0x32ba91(),this[_0x539940(0x1b5)](this['_dimmerSprite']));const _0x47c24a=this[_0x539940(0x207)]-_0x30fff9['WIDTH_BASE'],_0x3a4314=this['lineHeight']()*0x2;this[_0x539940(0x263)][_0x539940(0x282)]=new _0x2bedeb(_0x47c24a,_0x3a4314),this[_0x539940(0x263)]['x']=-0x4,this[_0x539940(0x263)]['y']=this[_0x539940(0x2ba)];const _0x5e5c60=this[_0x539940(0x263)][_0x539940(0x282)],_0x1f2e0d=_0x4f307d[_0x539940(0x1ed)](),_0x54a9de=_0x2becfe[_0x539940(0x2b0)]();_0x5e5c60[_0x539940(0x1ba)](0x0,0x0,_0xcfb5d7['round'](_0x47c24a/0x2),_0x3a4314,_0x1f2e0d),_0x5e5c60[_0x539940(0x25d)](_0x2c00b7[_0x539940(0x1b1)](_0x47c24a/0x2),0x0,_0x44e3ea[_0x539940(0x1b1)](_0x47c24a/0x2),_0x3a4314,_0x1f2e0d,_0x54a9de);}else _0x24d3e5['y']=Graphics[_0x539940(0x2a6)]*0xa,_0x24d3e5['height']=0x0;}return _0x24d3e5;},VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x219)]=Scene_Battle[_0x100aec(0x2d2)][_0x100aec(0x253)],Scene_Battle['prototype']['actorWindowRect']=function(){const _0x45c8c4=_0x100aec,_0x94a2e4=VisuMZ[_0x45c8c4(0x2bf)][_0x45c8c4(0x219)][_0x45c8c4(0x233)](this);return BattleManager[_0x45c8c4(0x264)]()&&(_0x45c8c4(0x2a0)===_0x45c8c4(0x2a0)?(_0x94a2e4['y']=Graphics[_0x45c8c4(0x2a6)]*0xa,_0x94a2e4[_0x45c8c4(0x2a6)]=0x0):this['isUsingSideviewUiLayout']()?this[_0x45c8c4(0x2c8)]():_0x25b57e[_0x45c8c4(0x2bf)][_0x45c8c4(0x225)][_0x45c8c4(0x233)](this)),_0x94a2e4;},VisuMZ[_0x100aec(0x2bf)]['Scene_Battle_updateStatusWindowPosition']=Scene_Battle[_0x100aec(0x2d2)][_0x100aec(0x27e)],Scene_Battle[_0x100aec(0x2d2)][_0x100aec(0x27e)]=function(){const _0x2039c8=_0x100aec;VisuMZ[_0x2039c8(0x2bf)][_0x2039c8(0x19e)][_0x2039c8(0x233)](this),this['updateSideviewBattleUIPositions']();},Scene_Battle['prototype'][_0x100aec(0x205)]=function(){const _0x29a24f=_0x100aec;if(!BattleManager['isInputting']())return;if(!BattleManager['isUsingSideviewUiLayout']())return;if(this['_partyCommandWindow'][_0x29a24f(0x2a1)]){if(_0x29a24f(0x1aa)!==_0x29a24f(0x203))this[_0x29a24f(0x24d)]['updateSideviewUiPosition']();else{let _0x15825a=_0x15463d+_0x3cbbd8[_0x29a24f(0x2b8)],_0x523df6=_0x933e2d+_0x31d23f[_0x29a24f(0x2b7)];this[_0x29a24f(0x236)]()&&(_0x523df6-=_0x42a8a3['prototype'][_0x29a24f(0x2b1)]()-0x1),this[_0x29a24f(0x1f2)](_0x5bb1dc,_0x15825a,_0x523df6);}}this[_0x29a24f(0x19c)][_0x29a24f(0x2a1)]&&this[_0x29a24f(0x19c)][_0x29a24f(0x1ff)](),this[_0x29a24f(0x1cc)][_0x29a24f(0x2a1)]&&(this[_0x29a24f(0x19c)]['updateSideviewUiPosition'](),this[_0x29a24f(0x1cc)][_0x29a24f(0x1ff)]()),this[_0x29a24f(0x2ae)][_0x29a24f(0x2a1)]&&(this[_0x29a24f(0x19c)]['updateSideviewUiPosition'](),this[_0x29a24f(0x2ae)]['updateSideviewUiPosition']()),this['_actorWindow'][_0x29a24f(0x2a1)]&&(this[_0x29a24f(0x19c)][_0x29a24f(0x1c3)](),this[_0x29a24f(0x1cc)]['updateSideviewUiFadeOut'](),this[_0x29a24f(0x2ae)]['updateSideviewUiFadeOut']()),this[_0x29a24f(0x20e)][_0x29a24f(0x2a1)]&&(this[_0x29a24f(0x19c)][_0x29a24f(0x1c3)](),this[_0x29a24f(0x1cc)][_0x29a24f(0x1c3)](),this[_0x29a24f(0x2ae)][_0x29a24f(0x1c3)]());},VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x29d)]=Scene_Battle[_0x100aec(0x2d2)][_0x100aec(0x2b6)],Scene_Battle[_0x100aec(0x2d2)][_0x100aec(0x2b6)]=function(){const _0xe0984=_0x100aec;VisuMZ['SideviewBattleUI'][_0xe0984(0x29d)][_0xe0984(0x233)](this),this['createSideviewUiBattleStatusWindows']();},Scene_Battle[_0x100aec(0x2d2)]['createSideviewUiBattleStatusWindows']=function(){const _0x42b4cc=_0x100aec;if(!BattleManager[_0x42b4cc(0x264)]())return;this['_sideviewUiBattleStatusWindows']=[];const _0x1e4444=$gameParty[_0x42b4cc(0x1e3)]();for(let _0x3aabd1=0x0;_0x3aabd1<_0x1e4444;_0x3aabd1++){const _0x1dece6=new Window_SideviewUiBattleStatus(_0x3aabd1);this[_0x42b4cc(0x199)](_0x1dece6),this[_0x42b4cc(0x2bb)][_0x42b4cc(0x25a)](_0x1dece6);}},Scene_Battle[_0x100aec(0x2d2)][_0x100aec(0x29c)]=function(){const _0x559e8f=_0x100aec;if(!this[_0x559e8f(0x2bb)])return;for(const _0x5617c3 of this[_0x559e8f(0x2bb)]){if(!_0x5617c3)continue;_0x5617c3[_0x559e8f(0x2e2)]();}},VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x1a5)]=Scene_Battle[_0x100aec(0x2d2)][_0x100aec(0x29a)],Scene_Battle[_0x100aec(0x2d2)][_0x100aec(0x29a)]=function(){const _0x55e12c=_0x100aec;if(BattleManager['isUsingSideviewUiLayout']())return;VisuMZ[_0x55e12c(0x2bf)][_0x55e12c(0x1a5)][_0x55e12c(0x233)](this);},Sprite_Battler['SIDEVIEW_BATTLE_UI_MOVE_BATTLERS']=VisuMZ[_0x100aec(0x2bf)]['Settings']['Battler'][_0x100aec(0x240)]??!![],Sprite_Battler[_0x100aec(0x230)]=VisuMZ[_0x100aec(0x2bf)]['Settings'][_0x100aec(0x216)][_0x100aec(0x198)]??0x0,Sprite_Battler[_0x100aec(0x1ec)]=VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x265)][_0x100aec(0x216)]['OffsetY']??0x80,VisuMZ[_0x100aec(0x2bf)]['Sprite_Battler_setHome']=Sprite_Battler[_0x100aec(0x2d2)][_0x100aec(0x1b3)],Sprite_Battler[_0x100aec(0x2d2)]['setHome']=function(_0x295b98,_0x1b091c){const _0x41f081=_0x100aec;if(BattleManager['isUsingSideviewUiLayout']()&&Sprite_Battler[_0x41f081(0x1df)]){if(_0x41f081(0x1ab)!==_0x41f081(0x2d7))_0x295b98+=Sprite_Battler[_0x41f081(0x230)],_0x1b091c+=Sprite_Battler[_0x41f081(0x1ec)];else{const _0x23849a=_0x532563[_0x41f081(0x2bf)][_0x41f081(0x219)][_0x41f081(0x233)](this);return _0x319a69['isUsingSideviewUiLayout']()&&(_0x23849a['y']=_0x43a89d[_0x41f081(0x2a6)]*0xa,_0x23849a[_0x41f081(0x2a6)]=0x0),_0x23849a;}}VisuMZ['SideviewBattleUI']['Sprite_Battler_setHome'][_0x41f081(0x233)](this,_0x295b98,_0x1b091c);},Window_Base[_0x100aec(0x1e6)]=VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x265)][_0x100aec(0x1fd)][_0x100aec(0x1ee)]??0.8,Window_Base[_0x100aec(0x246)]=0x0,Window_Base['SIDEVIEW_BATTLE_UI_BATTLER_WINDOW_OFFSET_Y']=0x0,Window_Base[_0x100aec(0x2d2)][_0x100aec(0x1d1)]=function(){const _0x8c7269=_0x100aec;if(!this['isUsingSideviewUiLayout']())return;const _0x54337e=Window_Base[_0x8c7269(0x1e6)];this[_0x8c7269(0x2b2)]['x']=this[_0x8c7269(0x2b2)]['y']=_0x54337e;},Window_Base['prototype']['isUsingSideviewUiLayout']=function(){return BattleManager['isUsingSideviewUiLayout']();},Window_Base[_0x100aec(0x2d2)][_0x100aec(0x295)]=function(){const _0x2f8b93=_0x100aec;if(!this[_0x2f8b93(0x264)]())return;const _0xccfb42=this[_0x2f8b93(0x2b2)]['x'],_0x7f7f6c=-(Math[_0x2f8b93(0x22e)](Graphics[_0x2f8b93(0x207)]-Graphics[_0x2f8b93(0x266)])/0x2),_0x1e394b=_0x7f7f6c+Graphics[_0x2f8b93(0x207)]-Math[_0x2f8b93(0x1e2)](this[_0x2f8b93(0x207)]*_0xccfb42),_0x5c5db6=-(Math[_0x2f8b93(0x22e)](Graphics['height']-Graphics[_0x2f8b93(0x29b)])/0x2),_0x1b33f8=_0x5c5db6+Graphics['height']-Math['ceil'](this[_0x2f8b93(0x2a6)]*_0xccfb42);this['x']=this['x'][_0x2f8b93(0x1c1)](_0x7f7f6c,_0x1e394b),this['y']=this['y'][_0x2f8b93(0x1c1)](_0x5c5db6,_0x1b33f8);},Window_Base['prototype']['sideviewUiTargetActor']=function(){const _0x3c2141=_0x100aec;return BattleManager[_0x3c2141(0x227)]||$gameParty[_0x3c2141(0x291)]()[0x0];},Window_Base[_0x100aec(0x2d2)][_0x100aec(0x1ff)]=function(){const _0x307bb7=_0x100aec;if(!this[_0x307bb7(0x264)]())return;const _0x73804f=this[_0x307bb7(0x1f7)]();if(!_0x73804f)return;const _0x13f989=_0x73804f[_0x307bb7(0x1c7)]();this['x']=_0x13f989['x']+Math[_0x307bb7(0x1b1)](_0x13f989['width']/0x2),this['x']-=Math[_0x307bb7(0x1b1)]((Graphics['width']-Graphics['boxWidth'])/0x2),this['x']+=SceneManager['_scene'][_0x307bb7(0x27b)][_0x307bb7(0x296)]['x'],this['x']+=this[_0x307bb7(0x1d7)](),this['y']=_0x13f989['y']-_0x13f989[_0x307bb7(0x2a6)],this['y']-=Math[_0x307bb7(0x1b1)]((Graphics[_0x307bb7(0x2a6)]-Graphics[_0x307bb7(0x29b)])/0x2),this['y']+=SceneManager[_0x307bb7(0x2d3)][_0x307bb7(0x27b)]['_battleField']['y'],this['y']+=this[_0x307bb7(0x22d)](),this[_0x307bb7(0x295)](),this[_0x307bb7(0x267)]();},Window_Base[_0x100aec(0x2d2)][_0x100aec(0x1d7)]=function(){const _0x2b797c=_0x100aec;return Window_Base[_0x2b797c(0x246)];},Window_Base[_0x100aec(0x2d2)][_0x100aec(0x22d)]=function(){return Window_Base['SIDEVIEW_BATTLE_UI_BATTLER_WINDOW_OFFSET_Y'];},Window_Base[_0x100aec(0x2d2)]['adjustSideviewUiWidth']=function(){const _0xcd0d92=_0x100aec;if(!this[_0xcd0d92(0x264)]())return;const _0x5f0f76=this[_0xcd0d92(0x207)];this[_0xcd0d92(0x207)]=this[_0xcd0d92(0x2bd)](),_0x5f0f76!==this['width']&&(_0xcd0d92(0x28e)!==_0xcd0d92(0x28e)?_0x293384=_0x4a7286(_0x3d1752)||0x0:this[_0xcd0d92(0x201)]());},Window_Base['prototype']['sideviewUiWidth']=function(){const _0x26382c=_0x100aec;return VisuMZ['BattleCore'][_0x26382c(0x265)][_0x26382c(0x218)][_0x26382c(0x2c6)]||0xc0;},Window_Base[_0x100aec(0x2d2)][_0x100aec(0x2c0)]=function(){const _0x2f0faf=_0x100aec;if(!this['isUsingSideviewUiLayout']())return;const _0x46a6b3=this[_0x2f0faf(0x2a6)],_0x450b83=this[_0x2f0faf(0x1fc)](),_0x6041c0=this[_0x2f0faf(0x259)](_0x450b83),_0x4b68ee=this[_0x2f0faf(0x259)](this[_0x2f0faf(0x1cb)]());this[_0x2f0faf(0x2a6)]=Math[_0x2f0faf(0x1d9)](_0x6041c0,_0x4b68ee),_0x46a6b3!==this[_0x2f0faf(0x2a6)]&&this[_0x2f0faf(0x201)]();},Window_Base['prototype'][_0x100aec(0x1fc)]=function(){const _0x396e6d=_0x100aec;if(this['_data'])return this[_0x396e6d(0x2d9)][_0x396e6d(0x24b)];if(this['_list'])return this[_0x396e6d(0x275)][_0x396e6d(0x24b)];return 0x4;},Window_Base[_0x100aec(0x2d2)][_0x100aec(0x1cb)]=function(){return 0x8;},Window_Base[_0x100aec(0x2d2)][_0x100aec(0x267)]=function(){const _0x491963=_0x100aec;if(this[_0x491963(0x2a2)]&&!this['active'])return;this[_0x491963(0x1e4)]=!![];},Window_Base[_0x100aec(0x2d2)][_0x100aec(0x1c3)]=function(){const _0x3915cf=_0x100aec;this[_0x3915cf(0x1e4)]=![];},Window_Help[_0x100aec(0x1a1)]=VisuMZ['SideviewBattleUI'][_0x100aec(0x265)][_0x100aec(0x1fd)][_0x100aec(0x193)]??!![],VisuMZ['SideviewBattleUI'][_0x100aec(0x210)]=Window_Help[_0x100aec(0x2d2)][_0x100aec(0x21e)],Window_Help[_0x100aec(0x2d2)][_0x100aec(0x21e)]=function(_0x318dcc){const _0x123c94=_0x100aec;VisuMZ[_0x123c94(0x2bf)]['Window_Help_initialize']['call'](this,_0x318dcc),this['createSideviewUiDimmerSprite']();},Window_Help[_0x100aec(0x2d2)][_0x100aec(0x245)]=function(){const _0x269999=_0x100aec;if(!this['isUsingSideviewUiLayout']())return;if(!Window_Help['SIDEVIEW_BATTLE_UI_FADE_STYLE'])return;this[_0x269999(0x224)]=0x0;if(!this['_dimmerSprite']){if(_0x269999(0x195)===_0x269999(0x22b)){this[_0x269999(0x27c)]();if(!this['_battler'])return;this[_0x269999(0x223)](),this[_0x269999(0x21c)]();}else this['_dimmerSprite']=new Sprite(),this['addChildToBack'](this[_0x269999(0x263)]);}const _0x36df19=this[_0x269999(0x207)]-Window_SideviewUiBattleStatus['WIDTH_BASE'],_0x2667b0=this[_0x269999(0x2be)]()*0x2;this[_0x269999(0x263)][_0x269999(0x282)]=new Bitmap(_0x36df19,_0x2667b0),this['_dimmerSprite']['x']=-0x4,this[_0x269999(0x263)]['y']=this[_0x269999(0x2ba)];const _0x2cef7a=this[_0x269999(0x263)][_0x269999(0x282)],_0x2e2b29=ColorManager[_0x269999(0x1ed)](),_0x859e67=ColorManager['dimColor2']();_0x2cef7a[_0x269999(0x1ba)](0x0,0x0,Math[_0x269999(0x1b1)](_0x36df19/0x2),_0x2667b0,_0x2e2b29),_0x2cef7a['gradientFillRect'](Math[_0x269999(0x1b1)](_0x36df19/0x2),0x0,Math[_0x269999(0x1b1)](_0x36df19/0x2),_0x2667b0,_0x2e2b29,_0x859e67);},Window_ItemList[_0x100aec(0x28b)]=VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x265)][_0x100aec(0x1fd)][_0x100aec(0x1f4)]??0x8,Window_ItemList[_0x100aec(0x2c5)]=VisuMZ[_0x100aec(0x2bf)]['Settings']['GeneralWindow']['ItemWindowWidth']??0x190,Window_ItemList[_0x100aec(0x246)]=VisuMZ[_0x100aec(0x2bf)]['Settings'][_0x100aec(0x1fd)][_0x100aec(0x196)]??0x10,Window_ItemList[_0x100aec(0x1b8)]=VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x265)][_0x100aec(0x1fd)][_0x100aec(0x2c1)]??0x10,VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x21a)]=Window_ItemList[_0x100aec(0x2d2)][_0x100aec(0x21e)],Window_ItemList[_0x100aec(0x2d2)]['initialize']=function(_0x303e79){const _0x3e4710=_0x100aec;VisuMZ[_0x3e4710(0x2bf)][_0x3e4710(0x21a)][_0x3e4710(0x233)](this,_0x303e79),this[_0x3e4710(0x1d1)]();},VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x257)]=Window_ItemList['prototype'][_0x100aec(0x2a7)],Window_ItemList['prototype'][_0x100aec(0x2a7)]=function(){const _0x448e5b=_0x100aec;return this['isUsingSideviewUiLayout']()?0x1:VisuMZ[_0x448e5b(0x2bf)][_0x448e5b(0x257)]['call'](this);},VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x25b)]=Window_ItemList['prototype'][_0x100aec(0x200)],Window_ItemList[_0x100aec(0x2d2)][_0x100aec(0x200)]=function(){const _0x5e2ffe=_0x100aec;if(this['isUsingSideviewUiLayout']()){if(_0x5e2ffe(0x2ce)===_0x5e2ffe(0x1e1)){if(_0x21f027[_0x5e2ffe(0x264)]())return;_0x355f89['SideviewBattleUI'][_0x5e2ffe(0x1a5)][_0x5e2ffe(0x233)](this);}else return 0x0;}else return VisuMZ[_0x5e2ffe(0x2bf)][_0x5e2ffe(0x25b)][_0x5e2ffe(0x233)](this);},VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x26a)]=Window_ItemList['prototype'][_0x100aec(0x28c)],Window_ItemList[_0x100aec(0x2d2)][_0x100aec(0x28c)]=function(){const _0x51c87d=_0x100aec;VisuMZ['SideviewBattleUI']['Window_ItemList_makeItemList'][_0x51c87d(0x233)](this),this['adjustSideviewUiWidth'](),this[_0x51c87d(0x2c0)](),this[_0x51c87d(0x1ff)]();},Window_ItemList[_0x100aec(0x2d2)]['sideviewUiTargetActor']=function(){const _0x4e8e45=_0x100aec;return this[_0x4e8e45(0x1bc)]||Window_Base['prototype']['sideviewUiTargetActor'][_0x4e8e45(0x233)](this);},Window_ItemList[_0x100aec(0x2d2)][_0x100aec(0x2bd)]=function(){const _0x53439a=_0x100aec;return Window_ItemList[_0x53439a(0x2c5)]||0xc0;},Window_ItemList[_0x100aec(0x2d2)][_0x100aec(0x1d7)]=function(){const _0x2c5837=_0x100aec;let _0x5564cb=Window_Selectable[_0x2c5837(0x2d2)][_0x2c5837(0x1d7)][_0x2c5837(0x233)](this);return _0x5564cb+Window_ItemList['SIDEVIEW_BATTLE_UI_BATTLER_WINDOW_OFFSET_X'];},Window_ItemList[_0x100aec(0x2d2)][_0x100aec(0x22d)]=function(){const _0x39028a=_0x100aec;let _0x4c17a7=Window_Selectable[_0x39028a(0x2d2)][_0x39028a(0x22d)][_0x39028a(0x233)](this);return _0x4c17a7+Window_ItemList[_0x39028a(0x1b8)];},Window_SkillList[_0x100aec(0x28b)]=VisuMZ[_0x100aec(0x2bf)]['Settings'][_0x100aec(0x1fd)][_0x100aec(0x2a5)]??0x8,Window_SkillList[_0x100aec(0x2c5)]=VisuMZ['SideviewBattleUI']['Settings']['GeneralWindow'][_0x100aec(0x1d2)]??0x190,Window_SkillList['SIDEVIEW_BATTLE_UI_BATTLER_WINDOW_OFFSET_X']=VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x265)][_0x100aec(0x1fd)][_0x100aec(0x1ea)]??0x10,Window_SkillList['SIDEVIEW_BATTLE_UI_BATTLER_WINDOW_OFFSET_Y']=VisuMZ['SideviewBattleUI'][_0x100aec(0x265)][_0x100aec(0x1fd)][_0x100aec(0x299)]??0x10,VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x21b)]=Window_SkillList[_0x100aec(0x2d2)]['initialize'],Window_SkillList[_0x100aec(0x2d2)]['initialize']=function(_0x5d4bf1){const _0x598982=_0x100aec;VisuMZ['SideviewBattleUI'][_0x598982(0x21b)][_0x598982(0x233)](this,_0x5d4bf1),this[_0x598982(0x1d1)]();},VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x2a3)]=Window_SkillList['prototype'][_0x100aec(0x2a7)],Window_SkillList['prototype']['maxCols']=function(){const _0x3f801e=_0x100aec;if(this[_0x3f801e(0x264)]())return 0x1;else{if('uramQ'===_0x3f801e(0x273))return VisuMZ[_0x3f801e(0x2bf)][_0x3f801e(0x2a3)][_0x3f801e(0x233)](this);else{if(this['_battler']===this[_0x3f801e(0x1c7)]())return;this[_0x3f801e(0x261)]=this[_0x3f801e(0x1c7)](),this[_0x3f801e(0x2e2)](),this[_0x3f801e(0x261)]?this['setBackgroundType'](0x1):this[_0x3f801e(0x1f5)](0x2);}}},VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x2aa)]=Window_SkillList[_0x100aec(0x2d2)][_0x100aec(0x200)],Window_SkillList[_0x100aec(0x2d2)][_0x100aec(0x200)]=function(){const _0x38df31=_0x100aec;return this[_0x38df31(0x264)]()?0x0:VisuMZ[_0x38df31(0x2bf)][_0x38df31(0x2aa)]['call'](this);},VisuMZ[_0x100aec(0x2bf)]['Window_SkillList_makeItemList']=Window_SkillList['prototype']['makeItemList'],Window_SkillList[_0x100aec(0x2d2)][_0x100aec(0x28c)]=function(){const _0xb72027=_0x100aec;VisuMZ[_0xb72027(0x2bf)][_0xb72027(0x2df)][_0xb72027(0x233)](this),this[_0xb72027(0x20a)](),this[_0xb72027(0x2c0)](),this['updateSideviewUiPosition']();},Window_SkillList['prototype'][_0x100aec(0x1f7)]=function(){const _0x1b0771=_0x100aec;return this[_0x1b0771(0x1bc)]||Window_Base[_0x1b0771(0x2d2)][_0x1b0771(0x1f7)][_0x1b0771(0x233)](this);},Window_SkillList[_0x100aec(0x2d2)]['sideviewUiWidth']=function(){const _0x42c7f9=_0x100aec;return Window_SkillList[_0x42c7f9(0x2c5)]||0xc0;},Window_SkillList['prototype'][_0x100aec(0x1d7)]=function(){const _0x5856a5=_0x100aec;let _0x130c24=Window_Selectable[_0x5856a5(0x2d2)]['sideviewUiPositionOffsetX'][_0x5856a5(0x233)](this);return _0x130c24+Window_SkillList[_0x5856a5(0x246)];},Window_SkillList[_0x100aec(0x2d2)][_0x100aec(0x22d)]=function(){const _0x3df4bc=_0x100aec;let _0x45db0c=Window_Selectable[_0x3df4bc(0x2d2)]['sideviewUiPositionOffsetY'][_0x3df4bc(0x233)](this);return _0x45db0c+Window_SkillList[_0x3df4bc(0x1b8)];},Window_PartyCommand[_0x100aec(0x28b)]=VisuMZ[_0x100aec(0x2bf)]['Settings'][_0x100aec(0x1fd)][_0x100aec(0x1b7)]??0x8,VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x290)]=Window_PartyCommand[_0x100aec(0x2d2)]['initialize'],Window_PartyCommand[_0x100aec(0x2d2)][_0x100aec(0x21e)]=function(_0xacc988){const _0xcb51f8=_0x100aec;VisuMZ[_0xcb51f8(0x2bf)][_0xcb51f8(0x290)][_0xcb51f8(0x233)](this,_0xacc988),this['initMembersSideviewUi']();},VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x1fe)]=Window_PartyCommand[_0x100aec(0x2d2)][_0x100aec(0x1db)],Window_PartyCommand[_0x100aec(0x2d2)][_0x100aec(0x1db)]=function(){const _0x1d9d0c=_0x100aec;VisuMZ[_0x1d9d0c(0x2bf)][_0x1d9d0c(0x1fe)][_0x1d9d0c(0x233)](this),this['adjustSideviewUiWidth'](),this['adjustSideviewUiHeight']();},Window_PartyCommand[_0x100aec(0x2d2)][_0x100aec(0x1f7)]=function(){return $gameParty['aliveMembers']()[0x0];},Window_PartyCommand[_0x100aec(0x2d2)][_0x100aec(0x1cb)]=function(){const _0x56199a=_0x100aec;return Window_PartyCommand[_0x56199a(0x28b)];},Window_ActorCommand[_0x100aec(0x28b)]=VisuMZ['SideviewBattleUI'][_0x100aec(0x265)]['GeneralWindow'][_0x100aec(0x279)]??0x8,VisuMZ['SideviewBattleUI'][_0x100aec(0x287)]=Window_ActorCommand['prototype'][_0x100aec(0x21e)],Window_ActorCommand[_0x100aec(0x2d2)][_0x100aec(0x21e)]=function(_0x57416f){const _0xa97702=_0x100aec;VisuMZ[_0xa97702(0x2bf)]['Window_ActorCommand_initialize'][_0xa97702(0x233)](this,_0x57416f),this[_0xa97702(0x1d1)]();},VisuMZ['SideviewBattleUI'][_0x100aec(0x1cf)]=Window_ActorCommand[_0x100aec(0x2d2)][_0x100aec(0x1db)],Window_ActorCommand[_0x100aec(0x2d2)]['makeCommandList']=function(){const _0x5c9eda=_0x100aec;VisuMZ[_0x5c9eda(0x2bf)][_0x5c9eda(0x1cf)][_0x5c9eda(0x233)](this),this[_0x5c9eda(0x20a)](),this[_0x5c9eda(0x2c0)](),this['updateSideviewUiPosition']();},Window_ActorCommand[_0x100aec(0x2d2)][_0x100aec(0x1f7)]=function(){const _0xab43f8=_0x100aec;return this[_0xab43f8(0x1bc)]||Window_Base[_0xab43f8(0x2d2)][_0xab43f8(0x1f7)][_0xab43f8(0x233)](this);},Window_ActorCommand[_0x100aec(0x2d2)]['maxSideviewUiRows']=function(){const _0x33ae34=_0x100aec;return Window_ActorCommand[_0x33ae34(0x28b)];},VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x225)]=Window_BattleStatus[_0x100aec(0x2d2)][_0x100aec(0x2e3)],Window_BattleStatus[_0x100aec(0x2d2)][_0x100aec(0x2e3)]=function(){const _0x5ce908=_0x100aec;if(this[_0x5ce908(0x264)]()){if(_0x5ce908(0x1fa)==='HZsKv'){let _0x20ace7=_0x3af4da+_0x14db28['NAME_OFFSET_X'],_0x456bea=_0x4423a0+_0x16e5dc[_0x5ce908(0x215)];this[_0x5ce908(0x213)](_0x2cc0a2,_0x20ace7,_0x456bea);}else this[_0x5ce908(0x2c8)]();}else VisuMZ[_0x5ce908(0x2bf)][_0x5ce908(0x225)][_0x5ce908(0x233)](this);},Window_BattleStatus[_0x100aec(0x2d2)][_0x100aec(0x2c8)]=function(){const _0x227269=_0x100aec;if($gameTemp[_0x227269(0x1f9)]()){if(_0x227269(0x2ab)===_0x227269(0x2cf)){if(!_0x2fed7a[_0x227269(0x264)]())return;this[_0x227269(0x2bb)]=[];const _0x391ba2=_0x3c5fc3['maxBattleMembers']();for(let _0x6a7b03=0x0;_0x6a7b03<_0x391ba2;_0x6a7b03++){const _0x2d2235=new _0x450c9c(_0x6a7b03);this[_0x227269(0x199)](_0x2d2235),this[_0x227269(0x2bb)][_0x227269(0x25a)](_0x2d2235);}}else this[_0x227269(0x254)]=![],$gameTemp[_0x227269(0x241)](),SceneManager[_0x227269(0x2d3)][_0x227269(0x29c)]();}else this[_0x227269(0x254)]&&(this['_requestRefresh']=![],SceneManager['_scene'][_0x227269(0x29c)]());};function Window_SideviewUiBattleStatus(){this['initialize'](...arguments);}Window_SideviewUiBattleStatus['prototype']=Object[_0x100aec(0x25f)](Window_StatusBase['prototype']),Window_SideviewUiBattleStatus[_0x100aec(0x2d2)][_0x100aec(0x1d0)]=Window_SideviewUiBattleStatus,Window_SideviewUiBattleStatus[_0x100aec(0x28d)]=VisuMZ['SideviewBattleUI'][_0x100aec(0x265)][_0x100aec(0x27d)][_0x100aec(0x192)]??0xc8,Window_SideviewUiBattleStatus[_0x100aec(0x1ad)]=VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x265)][_0x100aec(0x27d)]['HeightBase']??_0x100aec(0x1d4),Window_SideviewUiBattleStatus['HEIGHT_BUFFER']=VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x265)][_0x100aec(0x27d)][_0x100aec(0x25c)]??0x4,Window_SideviewUiBattleStatus[_0x100aec(0x209)]=VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x265)][_0x100aec(0x27d)]['MoveDistance']??0x30,Window_SideviewUiBattleStatus[_0x100aec(0x1ce)]=VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x265)]['StatusWindow'][_0x100aec(0x24c)]??0x4,Window_SideviewUiBattleStatus[_0x100aec(0x2a8)]=VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x265)][_0x100aec(0x27d)][_0x100aec(0x28a)]??!![],Window_SideviewUiBattleStatus[_0x100aec(0x24f)]=VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x265)][_0x100aec(0x27d)][_0x100aec(0x2c3)]??0x30,Window_SideviewUiBattleStatus[_0x100aec(0x215)]=VisuMZ[_0x100aec(0x2bf)]['Settings'][_0x100aec(0x27d)][_0x100aec(0x1d5)]??0x0,Window_SideviewUiBattleStatus['STATES_SHOWN']=VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x265)][_0x100aec(0x27d)][_0x100aec(0x2c7)]??!![],Window_SideviewUiBattleStatus[_0x100aec(0x220)]=VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x265)][_0x100aec(0x27d)][_0x100aec(0x1b6)]??!![],Window_SideviewUiBattleStatus['STATES_OFFSET_X']=VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x265)][_0x100aec(0x27d)][_0x100aec(0x262)]??0x14,Window_SideviewUiBattleStatus[_0x100aec(0x244)]=VisuMZ['SideviewBattleUI']['Settings'][_0x100aec(0x27d)][_0x100aec(0x26c)]??0x14,Window_SideviewUiBattleStatus[_0x100aec(0x29e)]=VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x265)]['StatusWindow'][_0x100aec(0x1e8)]??!![],Window_SideviewUiBattleStatus['TPB_OFFSET_X']=VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x265)]['StatusWindow'][_0x100aec(0x26d)]??0x2c,Window_SideviewUiBattleStatus['TPB_OFFSET_Y']=VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x265)]['StatusWindow'][_0x100aec(0x1de)]??0x0,Window_SideviewUiBattleStatus['HP_GAUGE_SHOWN']=VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x265)][_0x100aec(0x27d)][_0x100aec(0x26e)]??!![],Window_SideviewUiBattleStatus[_0x100aec(0x1f1)]=VisuMZ[_0x100aec(0x2bf)]['Settings'][_0x100aec(0x27d)]['HpOffsetX']??0x3c,Window_SideviewUiBattleStatus[_0x100aec(0x271)]=VisuMZ[_0x100aec(0x2bf)]['Settings']['StatusWindow'][_0x100aec(0x2af)]??0x0,Window_SideviewUiBattleStatus[_0x100aec(0x1d8)]=VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x265)][_0x100aec(0x27d)][_0x100aec(0x1dd)]??!![],Window_SideviewUiBattleStatus[_0x100aec(0x2e0)]=VisuMZ[_0x100aec(0x2bf)]['Settings']['StatusWindow'][_0x100aec(0x212)]??0x44,Window_SideviewUiBattleStatus[_0x100aec(0x278)]=VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x265)]['StatusWindow'][_0x100aec(0x229)]??0x0,Window_SideviewUiBattleStatus[_0x100aec(0x221)]=VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x265)][_0x100aec(0x27d)][_0x100aec(0x1e0)]??!![],Window_SideviewUiBattleStatus[_0x100aec(0x288)]=VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x265)]['StatusWindow'][_0x100aec(0x22c)]??0x4a,Window_SideviewUiBattleStatus['TP_GAUGE_OFFSET_Y']=VisuMZ['SideviewBattleUI'][_0x100aec(0x265)][_0x100aec(0x27d)][_0x100aec(0x1ef)]??0x0,Window_SideviewUiBattleStatus[_0x100aec(0x285)]=VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x265)][_0x100aec(0x27d)][_0x100aec(0x277)]??!![],Window_SideviewUiBattleStatus['AGGRO_OFFSET_X']=VisuMZ[_0x100aec(0x2bf)]['Settings']['StatusWindow'][_0x100aec(0x29f)]??0x2c,Window_SideviewUiBattleStatus[_0x100aec(0x2b7)]=VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x265)][_0x100aec(0x27d)][_0x100aec(0x22f)]??0x0,Window_SideviewUiBattleStatus[_0x100aec(0x2cc)]=VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x265)]['StatusWindow'][_0x100aec(0x1f8)]??!![],Window_SideviewUiBattleStatus[_0x100aec(0x270)]=VisuMZ['SideviewBattleUI']['Settings'][_0x100aec(0x27d)][_0x100aec(0x19b)]??0x34,Window_SideviewUiBattleStatus[_0x100aec(0x2b3)]=VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x265)][_0x100aec(0x27d)]['BoostOffsetY']??0x2,Window_SideviewUiBattleStatus['BRAVE_SHOWN']=VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x265)][_0x100aec(0x27d)][_0x100aec(0x2d0)]??!![],Window_SideviewUiBattleStatus[_0x100aec(0x276)]=VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x265)]['StatusWindow'][_0x100aec(0x1f0)]??0x34,Window_SideviewUiBattleStatus[_0x100aec(0x222)]=VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x265)][_0x100aec(0x27d)]['BraveOffsetY']??-0x6,Window_SideviewUiBattleStatus[_0x100aec(0x235)]=VisuMZ[_0x100aec(0x2bf)]['Settings']['StatusWindow'][_0x100aec(0x1a9)]??!![],Window_SideviewUiBattleStatus[_0x100aec(0x2d6)]=VisuMZ[_0x100aec(0x2bf)][_0x100aec(0x265)][_0x100aec(0x27d)]['BreakShieldIgnoreScale']??!![],Window_SideviewUiBattleStatus[_0x100aec(0x190)]=VisuMZ['SideviewBattleUI'][_0x100aec(0x265)][_0x100aec(0x27d)][_0x100aec(0x20c)]??0x14,Window_SideviewUiBattleStatus[_0x100aec(0x2dc)]=VisuMZ['SideviewBattleUI'][_0x100aec(0x265)]['StatusWindow'][_0x100aec(0x2da)]??0x14,Window_SideviewUiBattleStatus[_0x100aec(0x191)]=VisuMZ[_0x100aec(0x2bf)]['Settings']['StatusWindow'][_0x100aec(0x208)]??!![],Window_SideviewUiBattleStatus[_0x100aec(0x2d2)][_0x100aec(0x21e)]=function(_0x377055){const _0x267657=_0x100aec;this[_0x267657(0x1a7)]=_0x377055;const _0x5b540f=this[_0x267657(0x272)]();Window_StatusBase[_0x267657(0x2d2)]['initialize']['call'](this,_0x5b540f),this[_0x267657(0x1d1)](),this[_0x267657(0x1f5)](0x2);},Window_SideviewUiBattleStatus[_0x100aec(0x2d2)]['createWindowRect']=function(){const _0x577d3b=_0x100aec,_0x14cd42=Window_Base[_0x577d3b(0x1e6)];let _0xdfa269=Window_SideviewUiBattleStatus[_0x577d3b(0x28d)],_0x136433=Graphics['boxWidth']-_0xdfa269;_0x136433+=Math[_0x577d3b(0x1e2)]((Graphics['width']-Graphics[_0x577d3b(0x266)])/0x2),_0xdfa269/=_0x14cd42,_0xdfa269=Math[_0x577d3b(0x1e2)](_0xdfa269),_0xdfa269+=Math[_0x577d3b(0x1e2)](Window_SideviewUiBattleStatus[_0x577d3b(0x209)]*0x4/_0x14cd42);let _0x5517fe=Window_SideviewUiBattleStatus[_0x577d3b(0x1ad)];_0x5517fe===_0x577d3b(0x1d4)?_0x577d3b(0x22a)!==_0x577d3b(0x1af)?(_0x5517fe=Window_SideviewUiBattleStatus[_0x577d3b(0x256)]*0x2,_0x5517fe+=this[_0x577d3b(0x1a0)]()*this['autoRowCount'](),_0x5517fe=Math['ceil'](_0x5517fe*_0x14cd42),_0x5517fe/=_0x14cd42):this['x']=_0x12578e[_0x577d3b(0x1d9)](this['x']+_0x57e68d,this[_0x577d3b(0x1fb)]):_0x5517fe=eval(_0x5517fe)||0x0;let _0x295b81=Math[_0x577d3b(0x1e2)](_0x5517fe*_0x14cd42)*this['_partyIndex'];return _0x295b81-=Math[_0x577d3b(0x1e2)]((Graphics[_0x577d3b(0x2a6)]-Graphics[_0x577d3b(0x29b)])/0x2),this['_homeX']=_0x136433,this[_0x577d3b(0x1a8)]=this[_0x577d3b(0x2de)]-Math[_0x577d3b(0x1e2)](Window_SideviewUiBattleStatus['WIDTH_MOVE']/_0x14cd42),this['_targetX']=this[_0x577d3b(0x2de)],new Rectangle(_0x136433,_0x295b81,_0xdfa269,_0x5517fe);},Window_SideviewUiBattleStatus[_0x100aec(0x2d2)]['autoRowCount']=function(){const _0x3981d1=_0x100aec;let _0x4a89cd=0x0;if(Window_SideviewUiBattleStatus['NAME_SHOWN'])_0x4a89cd+=0x1;if(Window_SideviewUiBattleStatus['HP_GAUGE_SHOWN'])_0x4a89cd+=0x1;if(Window_SideviewUiBattleStatus[_0x3981d1(0x1d8)])_0x4a89cd+=0x1;if(Window_SideviewUiBattleStatus['TP_GAUGE_SHOWN'])_0x4a89cd+=0x1;if(this[_0x3981d1(0x1c9)]())_0x4a89cd+=0x1;if(this['isAdjustBravePoints']())_0x4a89cd+=0x1;return _0x4a89cd||0x1;},Window_SideviewUiBattleStatus[_0x100aec(0x2d2)][_0x100aec(0x19a)]=function(){this['padding']=0x0;},Window_SideviewUiBattleStatus[_0x100aec(0x2d2)][_0x100aec(0x1bb)]=function(){const _0x165617=_0x100aec;if(!this[_0x165617(0x263)])return;const _0x29233c=this['_dimmerSprite']['bitmap'];var _0x4d7243=ColorManager[_0x165617(0x1ed)](),_0x3e0a74=ColorManager['dimColor2'](),_0x4684e5=Math[_0x165617(0x1e2)](this[_0x165617(0x207)]/0x4),_0x2050c8=this[_0x165617(0x207)]-_0x4684e5,_0x5e29bd=this[_0x165617(0x2a6)];_0x29233c[_0x165617(0x18e)](this[_0x165617(0x207)],_0x5e29bd),_0x29233c[_0x165617(0x25d)](0x0,0x0,_0x4684e5,_0x5e29bd,_0x3e0a74,_0x4d7243),_0x29233c[_0x165617(0x1ba)](_0x4684e5,0x0,_0x2050c8,_0x5e29bd,_0x4d7243),this['_dimmerSprite'][_0x165617(0x214)](0x0,0x0,_0x2050c8,_0x5e29bd);},Window_SideviewUiBattleStatus[_0x100aec(0x2d2)][_0x100aec(0x1e5)]=function(){const _0x4b6e43=_0x100aec;Window_StatusBase[_0x4b6e43(0x2d2)]['update'][_0x4b6e43(0x233)](this),this[_0x4b6e43(0x1a6)](),this[_0x4b6e43(0x1c5)]();},Window_SideviewUiBattleStatus[_0x100aec(0x2d2)][_0x100aec(0x1c7)]=function(){const _0x384ce3=_0x100aec;return $gameParty[_0x384ce3(0x211)]()[this[_0x384ce3(0x1a7)]];},Window_SideviewUiBattleStatus[_0x100aec(0x2d2)][_0x100aec(0x1a6)]=function(){const _0x57c2c=_0x100aec;if(this['_battler']===this['battler']())return;this[_0x57c2c(0x261)]=this[_0x57c2c(0x1c7)](),this[_0x57c2c(0x2e2)]();if(this[_0x57c2c(0x261)]){if(_0x57c2c(0x1ac)===_0x57c2c(0x1ac))this[_0x57c2c(0x1f5)](0x1);else return![];}else this[_0x57c2c(0x1f5)](0x2);},Window_SideviewUiBattleStatus[_0x100aec(0x2d2)][_0x100aec(0x1c5)]=function(){const _0x48bfb3=_0x100aec;if(!this[_0x48bfb3(0x261)])return;this[_0x48bfb3(0x1fb)]=this['isActivePosition']()?this[_0x48bfb3(0x1a8)]:this[_0x48bfb3(0x2de)];const _0x4e0f33=Window_SideviewUiBattleStatus[_0x48bfb3(0x1ce)];if(this[_0x48bfb3(0x1fb)]>this['x']){if(_0x48bfb3(0x25e)!==_0x48bfb3(0x1c2))this['x']=Math[_0x48bfb3(0x1d9)](this['x']+_0x4e0f33,this['_targetX']);else{let _0x5a9f12=0x0;if(_0x408c2e[_0x48bfb3(0x2a8)])_0x5a9f12+=0x1;if(_0x33cfa2[_0x48bfb3(0x1e9)])_0x5a9f12+=0x1;if(_0x560e02[_0x48bfb3(0x1d8)])_0x5a9f12+=0x1;if(_0x5b21fd[_0x48bfb3(0x221)])_0x5a9f12+=0x1;if(this[_0x48bfb3(0x1c9)]())_0x5a9f12+=0x1;if(this[_0x48bfb3(0x2e4)]())_0x5a9f12+=0x1;return _0x5a9f12||0x1;}}else this[_0x48bfb3(0x1fb)]<this['x']&&(this['x']=Math[_0x48bfb3(0x217)](this['x']-_0x4e0f33,this['_targetX']));},Window_SideviewUiBattleStatus['prototype'][_0x100aec(0x27a)]=function(){const _0x386ed1=_0x100aec;if(this['_battler']===BattleManager[_0x386ed1(0x1c8)]())return!![];if(this[_0x386ed1(0x261)]===BattleManager['_subject'])return!![];if(this['_battler'][_0x386ed1(0x286)]())return!![];return![];},Window_SideviewUiBattleStatus[_0x100aec(0x2d2)][_0x100aec(0x251)]=function(){const _0x3f85e8=_0x100aec;return Window_SideviewUiBattleStatus[_0x3f85e8(0x191)];},Window_SideviewUiBattleStatus[_0x100aec(0x2d2)][_0x100aec(0x204)]=function(){const _0x3dce8b=_0x100aec;return this[_0x3dce8b(0x261)];},Window_SideviewUiBattleStatus[_0x100aec(0x2d2)][_0x100aec(0x1c6)]=function(){const _0xe45fad=_0x100aec,_0x3a5218=new Point(TouchInput['x'],TouchInput['y']),_0x41d457=this[_0xe45fad(0x1dc)]['applyInverse'](_0x3a5218);return this[_0xe45fad(0x231)][_0xe45fad(0x255)](_0x41d457['x'],_0x41d457['y']);},Window_SideviewUiBattleStatus[_0x100aec(0x2d2)][_0x100aec(0x2b5)]=function(){const _0x4c4662=_0x100aec;this['hideAdditionalSprites']();if(!this[_0x4c4662(0x261)])return;this['drawBasicStatus'](),this['drawCustomJS']();},Window_SideviewUiBattleStatus[_0x100aec(0x2d2)][_0x100aec(0x223)]=function(){const _0x11279a=_0x100aec,_0x16d324=this[_0x11279a(0x261)];let _0x1ac3dd=0x4,_0x1c8424=Window_SideviewUiBattleStatus[_0x11279a(0x256)];if(Imported['VisuMZ_4_BreakShields']&&Window_SideviewUiBattleStatus['BREAK_SHIELD_SHOWN']){let _0x101863=_0x1ac3dd+Window_SideviewUiBattleStatus['BREAK_SHIELD_OFFSET_X'],_0x480df4=_0x1c8424+Window_SideviewUiBattleStatus[_0x11279a(0x2dc)];this['placeBreakShieldIcon'](_0x16d324,_0x101863,_0x480df4);if(Window_SideviewUiBattleStatus[_0x11279a(0x220)]){const _0x28d4a3=_0x11279a(0x232)['format'](_0x16d324[_0x11279a(0x281)]()),_0x5845ab=this[_0x11279a(0x283)];if(_0x5845ab[_0x28d4a3]){const _0x486b03=_0x5845ab[_0x28d4a3];_0x486b03[_0x11279a(0x2b2)]['x']=_0x486b03[_0x11279a(0x2b2)]['y']=0x1/this['scale']['y'];};}}if(Window_SideviewUiBattleStatus[_0x11279a(0x238)]){if(_0x11279a(0x26b)!==_0x11279a(0x26b))_0x1b9627[_0x11279a(0x2bf)]['Window_SkillList_initialize'][_0x11279a(0x233)](this,_0x5ccb49),this[_0x11279a(0x1d1)]();else{let _0xdc1379=_0x1ac3dd+Window_SideviewUiBattleStatus[_0x11279a(0x28f)],_0x5df4b8=_0x1c8424+Window_SideviewUiBattleStatus[_0x11279a(0x244)];if(Imported[_0x11279a(0x2dd)]&&Window_SideviewUiBattleStatus[_0x11279a(0x235)]){if('QrcZB'===_0x11279a(0x18f))Window_SideviewUiBattleStatus['BREAK_SHIELD_REVERSE_SCALE']?_0x5df4b8+=Math[_0x11279a(0x1e2)](ImageManager[_0x11279a(0x247)]/this[_0x11279a(0x2b2)]['y']):_0x5df4b8+=ImageManager[_0x11279a(0x247)],_0x5df4b8+=0x4;else return _0x5a8bd5['BattleCore'][_0x11279a(0x265)]['BattleLayout'][_0x11279a(0x2c6)]||0xc0;}this[_0x11279a(0x260)](_0x16d324,_0xdc1379,_0x5df4b8);if(Window_SideviewUiBattleStatus[_0x11279a(0x220)]){if(_0x11279a(0x1d3)!==_0x11279a(0x1d3))this['_actorCommandWindow']['updateSideviewUiFadeOut'](),this['_skillWindow'][_0x11279a(0x1c3)](),this[_0x11279a(0x2ae)][_0x11279a(0x1c3)]();else{const _0x13ae0e=_0x11279a(0x289)[_0x11279a(0x250)](_0x16d324[_0x11279a(0x281)]()),_0x2c43af=this[_0x11279a(0x283)];if(_0x2c43af[_0x13ae0e]){if('Jqfna'==='Jqfna'){const _0x311230=_0x2c43af[_0x13ae0e];_0x311230[_0x11279a(0x2b2)]['x']=_0x311230[_0x11279a(0x2b2)]['y']=0x1/this['scale']['y'];}else{let _0x3f6171=_0xb3fc6d[_0x11279a(0x2d2)][_0x11279a(0x22d)][_0x11279a(0x233)](this);return _0x3f6171+_0x56e4a5[_0x11279a(0x1b8)];}};}}}}if(this[_0x11279a(0x236)]()){let _0x4bc78b=_0x1ac3dd+Window_SideviewUiBattleStatus[_0x11279a(0x1f6)],_0x230bd3=_0x1c8424+Window_SideviewUiBattleStatus[_0x11279a(0x2b9)];this[_0x11279a(0x1ae)](_0x16d324,_0x4bc78b,_0x230bd3);}if(this[_0x11279a(0x1be)]()){let _0x286bf0=_0x1ac3dd+Window_SideviewUiBattleStatus[_0x11279a(0x2b8)],_0x3b26d4=_0x1c8424+Window_SideviewUiBattleStatus[_0x11279a(0x2b7)];this[_0x11279a(0x236)]()&&(_0x3b26d4-=Sprite_Gauge[_0x11279a(0x2d2)]['gaugeHeight']()-0x1),this[_0x11279a(0x1f2)](_0x16d324,_0x286bf0,_0x3b26d4);}if(Window_SideviewUiBattleStatus[_0x11279a(0x2a8)]){let _0x54bcc6=_0x1ac3dd+Window_SideviewUiBattleStatus[_0x11279a(0x24f)],_0x549ca3=_0x1c8424+Window_SideviewUiBattleStatus['NAME_OFFSET_Y'];this[_0x11279a(0x213)](_0x16d324,_0x54bcc6,_0x549ca3);}(Window_SideviewUiBattleStatus[_0x11279a(0x2a8)]||this[_0x11279a(0x236)]()||this[_0x11279a(0x1be)]())&&(_0x1c8424+=this['gaugeLineHeight']());if(this[_0x11279a(0x1c9)]()){if(_0x11279a(0x2db)===_0x11279a(0x2db)){const _0x3c9862=Math[_0x11279a(0x1e2)](ImageManager[_0x11279a(0x247)]*Sprite_BoostContainer[_0x11279a(0x2a9)]);let _0x8b76be=_0x1ac3dd+Window_SideviewUiBattleStatus[_0x11279a(0x270)],_0x1f34f7=_0x1c8424+Window_SideviewUiBattleStatus[_0x11279a(0x2b3)];_0x1f34f7+=Math['max'](0x0,Math[_0x11279a(0x1b1)]((this[_0x11279a(0x1a0)]()-_0x3c9862)/0x2)),this['placeBoostPoints'](_0x16d324,_0x8b76be,_0x1f34f7),_0x1c8424+=this[_0x11279a(0x1a0)]();}else{if(this['_data'])return this[_0x11279a(0x2d9)][_0x11279a(0x24b)];if(this[_0x11279a(0x275)])return this['_list']['length'];return 0x4;}}if(this[_0x11279a(0x2e4)]()){if(_0x11279a(0x20b)!=='Rsgtg')_0x3252fb[_0x11279a(0x2bf)][_0x11279a(0x21a)][_0x11279a(0x233)](this,_0xd6ecb7),this[_0x11279a(0x1d1)]();else{let _0xd325cc=_0x1ac3dd+Window_SideviewUiBattleStatus[_0x11279a(0x276)],_0x32cd0b=_0x1c8424+Window_SideviewUiBattleStatus[_0x11279a(0x222)],_0x47475e=Math[_0x11279a(0x1e2)](Window_SideviewUiBattleStatus['WIDTH_BASE']/this[_0x11279a(0x2b2)]['x']);this[_0x11279a(0x2c9)](_0x16d324,_0xd325cc,_0x32cd0b,_0x47475e,'left'),_0x1c8424+=this[_0x11279a(0x1a0)]();}}if(Window_SideviewUiBattleStatus[_0x11279a(0x1e9)]){if(_0x11279a(0x1d6)!==_0x11279a(0x2b4)){let _0xcd15ce=_0x1ac3dd+Window_SideviewUiBattleStatus[_0x11279a(0x1f1)],_0x141221=_0x1c8424+Window_SideviewUiBattleStatus[_0x11279a(0x271)];this['placeGauge'](_0x16d324,'hp',_0xcd15ce,_0x141221),_0x1c8424+=this[_0x11279a(0x1a0)]();}else _0x14e131=_0x1abf20[_0x11279a(0x217)](_0x4866dc,_0xe2e4c5);}if(Window_SideviewUiBattleStatus['MP_GAUGE_SHOWN']){let _0x5b879c=_0x1ac3dd+Window_SideviewUiBattleStatus[_0x11279a(0x2e0)],_0x1854ac=_0x1c8424+Window_SideviewUiBattleStatus['MP_GAUGE_OFFSET_Y'];this[_0x11279a(0x2d4)](_0x16d324,'mp',_0x5b879c,_0x1854ac),_0x1c8424+=this['gaugeLineHeight']();}if(Window_SideviewUiBattleStatus['TP_GAUGE_SHOWN']){if('ekTWr'===_0x11279a(0x206)){let _0x4fc10c=_0x1ac3dd+Window_SideviewUiBattleStatus[_0x11279a(0x288)],_0xcb5083=_0x1c8424+Window_SideviewUiBattleStatus[_0x11279a(0x269)];this[_0x11279a(0x2d4)](_0x16d324,'tp',_0x4fc10c,_0xcb5083),_0x1c8424+=this[_0x11279a(0x1a0)]();}else{if(this['activate']&&!this[_0x11279a(0x2a1)])return;this['visible']=!![];}}},Window_SideviewUiBattleStatus[_0x100aec(0x2d2)][_0x100aec(0x236)]=function(){const _0x58428f=_0x100aec;if(Imported[_0x58428f(0x23d)]&&BattleManager[_0x58428f(0x1b4)]())return![];return BattleManager[_0x58428f(0x2d1)]()&&Window_SideviewUiBattleStatus[_0x58428f(0x2a8)]&&Window_SideviewUiBattleStatus[_0x58428f(0x29e)];},Window_SideviewUiBattleStatus[_0x100aec(0x2d2)][_0x100aec(0x1be)]=function(){const _0x13cebf=_0x100aec;return Window_SideviewUiBattleStatus[_0x13cebf(0x2a8)]&&Window_SideviewUiBattleStatus[_0x13cebf(0x285)]&&Imported[_0x13cebf(0x239)]&&ConfigManager[_0x13cebf(0x2d8)]&&VisuMZ[_0x13cebf(0x1bf)]['Settings']['Aggro'][_0x13cebf(0x249)];},Window_SideviewUiBattleStatus[_0x100aec(0x2d2)][_0x100aec(0x1c9)]=function(){const _0x37c722=_0x100aec;return Imported[_0x37c722(0x274)]&&Window_SideviewUiBattleStatus[_0x37c722(0x2cc)]&&BattleManager[_0x37c722(0x234)]();},Window_SideviewUiBattleStatus[_0x100aec(0x2d2)][_0x100aec(0x2e4)]=function(){const _0x2a8682=_0x100aec;return Imported[_0x2a8682(0x293)]&&Window_SideviewUiBattleStatus[_0x2a8682(0x27f)]&&BattleManager[_0x2a8682(0x1bd)]();},Window_SideviewUiBattleStatus[_0x100aec(0x2d2)][_0x100aec(0x21c)]=function(){const _0x563b40=_0x100aec;VisuMZ['SideviewBattleUI'][_0x563b40(0x265)][_0x563b40(0x27d)][_0x563b40(0x294)]&&VisuMZ['SideviewBattleUI'][_0x563b40(0x265)][_0x563b40(0x27d)]['CustomUi'][_0x563b40(0x233)](this,this['_battler']);};