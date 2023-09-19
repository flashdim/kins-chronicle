//=============================================================================
// VisuStella MZ - Visual Item Inventory
// VisuMZ_4_VisualItemInv.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_VisualItemInv = true;

var VisuMZ = VisuMZ || {};
VisuMZ.VisualItemInv = VisuMZ.VisualItemInv || {};
VisuMZ.VisualItemInv.version = 1.01;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.01] [VisualItemInv]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Visual_Item_Inventory_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 * @orderAfter VisuMZ_1_ItemsEquipsCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin changes the item list displayed in-game to become more visual
 * and show bigger images, either as icons or pictures. The enlarged item,
 * weapon, and armor images will show their item quantities next to them while
 * a tooltip window appears above their selected cell to show the item's name.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Changes the item inventory windows to become more visual.
 * * Enlarged item images can be either icons or picture images.
 * * Alter how large you want the images to appear with the Plugin Parameters.
 * * Add different color backgrounds for different items.
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
 * Window Columns and Spacing
 * 
 * It should come off as no surprise that these windows will have their usual
 * column counts changed to adjust for the item images shown. The columns will
 * be based on how many of the item icons can fit inside of the window.
 *
 * ---
 * 
 * Item Quantity Positioning
 * 
 * The item quantity will now be positioned to show in the lower right of any
 * window cell with an enlarged icon. Due to this being a much smaller area
 * than what is usually provided, some plugins may have incredibly squished
 * appearances when it comes to displaying item quantity in some areas.
 * 
 * This needs to be adjusted in those plugins individually.
 * 
 * ---
 * 
 * Items and Equips Core
 * 
 * For the Equip Menu, the remove item entry has been changed to show only the
 * enlarged icon. This is to keep consistency with the rest of the plugin.
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
 * === Picture-Related Notetags ===
 * 
 * ---
 * 
 * <Visual Item Picture: filename>
 * <Picture: filename>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - Uses a picture from your project's /img/pictures/ folder instead of the
 *   item's icon inside the item windows instead.
 * - Replace 'filename' with the filename of the image.
 *   - Do not include the file extension.
 * - Scaling will not apply to the picture.
 * - Use the <Picture: filename> version for any other plugins that may be
 *   using this as an image outside of this plugin, too.
 * - The size used for the image will vary based on the icon size settings.
 * 
 * ---
 * 
 * === Background Colors-Related Notetags ===
 * 
 * ---
 *
 * <Visual Item BG Color 1: x>
 * <Visual Item BG Color 2: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Changes the background color(s) for the item to text color 'x'.
 * - Replace 'x' with a number from 0 to 31 to represent a text color.
 *
 * ---
 *
 * <Visual Item BG Color 1: #rrggbb>
 * <Visual Item BG Color 2: #rrggbb>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Changes the background color(s) for the item to a hex color.
 * - Use #rrggbb for custom colors.
 * - You can find out what hex codes belong to which color from this website:
 *   https://htmlcolorcodes.com/
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Visual Item Inventory Settings
 * ============================================================================
 *
 * These settings allow you to adjust how the Visual Item Inventory windows
 * appear and which ones they appear in.
 *
 * ---
 *
 * General
 * 
 *   Applied Windows:
 *   - Insert the name of their constructors here to apply them.
 *   - Only works with windows made from Window_ItemList.
 * 
 *   Icon Size:
 *   - The icon size used for the Visual Item windows.
 * 
 *   Icon Smoothing?:
 *   - Do you wish to smooth out the icons or pixelate them?
 *
 * ---
 *
 * Item Quantity Outline
 * 
 *   Outline Color:
 *   - Colors with a bit of alpha settings.
 *   - Format rgba(0-255, 0-255, 0-255, 0-1)
 * 
 *   Outline Size:
 *   - How thick are the outlines for the item quantity?
 *
 * ---
 *
 * Tooltip Window
 * 
 *   Show Tooltip Window?:
 *   - Show the tooltip window?
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Buffer Width:
 *   - How much to buffer this window's width by?
 * 
 *   Font Size:
 *   - What should this window's font size be?
 * 
 *   Offset X:
 *   Offset Y:
 *   - How much to offset this window's X/Y position by?
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
 * Version 1.01: February 19, 2021
 * * Feature Update!
 * ** No longer requires VisuStella MZ Items and Equips Core dependency.
 *
 * Version 1.00 Official Release Date: February 26, 2021
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
 * @param VisualItemInv
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param General
 *
 * @param Constructors:arraystr
 * @text Applied Windows
 * @parent General
 * @type string[]
 * @desc Insert the name of their constructors here to apply them.
 * Only works with windows made from Window_ItemList.
 * @default ["Window_ItemList","Window_EquipItem","Window_ShopSell","Window_EventItem","Window_BattleItem"]
 *
 * @param IconSize:num
 * @text Icon Size
 * @parent General
 * @desc The icon size used for the Visual Item windows.
 * @default 64
 *
 * @param IconSmoothing:eval
 * @text Icon Smoothing?
 * @parent General
 * @type boolean
 * @on Smooth
 * @off Pixelate
 * @desc Do you wish to smooth out the icons or pixelate them?
 * @default false
 * 
 * @param Outline
 * @text Item Quantity Outline
 *
 * @param OutlineColor:num
 * @text Outline Color
 * @parent Outline
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 1.0)
 *
 * @param OutlineSize:num
 * @text Outline Size
 * @parent Outline
 * @desc How thick are the outlines for the item quantity?
 * @default 4
 * 
 * @param Tooltip
 * @text Tooltip Window
 *
 * @param ShowTooltip:eval
 * @text Show Tooltip Window?
 * @parent Tooltip
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the tooltip window?
 * @default true
 *
 * @param TooltipBgType:num
 * @text Background Type
 * @parent Tooltip
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
 * @param TooltipBufferWidth:num
 * @text Buffer Width
 * @parent Tooltip
 * @desc How much to buffer this window's width by?
 * @default 16
 *
 * @param TooltipFontSize:num
 * @text Font Size
 * @parent Tooltip
 * @desc What should this window's font size be?
 * @default 22
 *
 * @param TooltipOffsetX:num
 * @text Offset X
 * @parent Tooltip
 * @desc How much to offset this window's X position by?
 * @default 0
 *
 * @param TooltipOffsetY:num
 * @text Offset Y
 * @parent Tooltip
 * @desc How much to offset this window's Y position by?
 * @default 8
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
//=============================================================================

const _0x232b=['rowSpacing','New','floor','ARRAYFUNC','JSON','90682xUTKGH','OFFSET_Y','VISUAL_ITEM_OUTLINE_SIZE','setupVisualItemInvFontSettings','height','OffsetY','OutlineSize','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','match','exit','_parentWindow','Window_ItemList_drawItemNumber','clamp','ConvertHexToRgba','itemAt','name','ConvertParams','OFFSET_X','drawText','ARRAYNUM','blt','0.5','_item','Window_ItemList_initialize','substring','backOpacity','bgColorHex1','placeItemNewLabel','trim','Window_ItemList_maxCols','length','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','10537gFMLQT','EquipScene','contentsBack','bgColorHex2','Window_Base_drawItemNumber','item','Window_ItemList_placeItemNewLabel','parse','setItem','isEnabled','map','_scene','VisualItemInv','createContents','resetTextColor','resetFontSettings','VISUAL_ITEM_ICON_SMOOTHING','update','46042iszVIz','maxCols','_visualItemHeight','imageSmoothingEnabled','isDrawItemNumber','toUpperCase','BUFFER_WIDTH','visible','Window_ShopSell_colSpacing','Window_ItemList_callUpdateHelp','drawItem','Window_ItemList_colSpacing','textColor','157114Kadpcm','prototype','ItemScene','Window_Selectable_itemHeight','bgColorNum2','visualPicture','3yGoxtE','colSpacing','Window_ShopSell_maxCols','placeItemNewLabelVisualItemInventory','includes','format','41479vCGOip','_cursorRect','textWidth','ItemQuantityFmt','updatePadding','FUNC','ItemQuantityFontSize','FONT_SIZE','drawItemBackground','IconSet','drawItemBackgroundVisualItemInventory','center','loadSystem','drawBigItemPicture','drawBigItemIcon','STRUCT','changeTextColor','ARRAYEVAL','round','createVisualItemInventoryTooltipWindow','iconHeight','VISUAL_ITEM_OUTLINE_COLOR','call','setBackgroundType','width','updateVisibility','BG_TYPE','Window_EquipItem_maxCols','addLoadListener','ARRAYJSON','opacity','drawItemVisualItemInventory','60937Naopyb','lineHeight','VisuMZ_1_ItemsEquipsCore','_visualItemInventoryTooltipWindow','OffsetX','max','right','addChild','min','constructor','description','itemRectWithPadding','contents','itemRect','Settings','padding','parameters','itemHeight','itemBackColor2','placeNewLabel','initialize','NUM','usesVisualItemInventory','updatePosition','iconWidth','drawBigIcon','RegExp','fontSize','ceil','OutlineColor','outlineColor','3ZNLxav','bgColorNum1','4Djidlf','ItemsEquipsCore','numItems','gradientFillRect','drawItemNumber','bind','active','return\x200','EVAL','Window_ItemList_rowSpacing','refresh','iconIndex','TooltipOffsetX','STR','_clientArea','isOpen','_context','ARRAYSTR','IconSmoothing','rgba(','VISUAL_ITEM_ICON_SIZE','Window_EquipItem_colSpacing','5KxgVKI','65831LxJbhx','note','drawItemNumberVisualItemInventory','ShowTooltip','changePaintOpacity','Window_ItemList_drawItemBackground','paintOpacity','RemoveEquipIcon','version'];const _0x3803=function(_0x2b4719,_0x4dd660){_0x2b4719=_0x2b4719-0x1ef;let _0x232b45=_0x232b[_0x2b4719];return _0x232b45;};const _0xd1d316=_0x3803;(function(_0x506544,_0x8d36c1){const _0x1b770f=_0x3803;while(!![]){try{const _0x119b62=-parseInt(_0x1b770f(0x286))*-parseInt(_0x1b770f(0x22c))+parseInt(_0x1b770f(0x23b))+-parseInt(_0x1b770f(0x25b))*-parseInt(_0x1b770f(0x280))+-parseInt(_0x1b770f(0x22d))+-parseInt(_0x1b770f(0x27a))+parseInt(_0x1b770f(0x26d))*-parseInt(_0x1b770f(0x216))+parseInt(_0x1b770f(0x1f5))*parseInt(_0x1b770f(0x214));if(_0x119b62===_0x8d36c1)break;else _0x506544['push'](_0x506544['shift']());}catch(_0x7738c4){_0x506544['push'](_0x506544['shift']());}}}(_0x232b,0x19baa));var label='VisualItemInv',tier=tier||0x0,dependencies=[],pluginData=$plugins['filter'](function(_0x5184cb){const _0x3af070=_0x3803;return _0x5184cb['status']&&_0x5184cb[_0x3af070(0x1ff)]['includes']('['+label+']');})[0x0];VisuMZ[label][_0xd1d316(0x203)]=VisuMZ[label]['Settings']||{},VisuMZ[_0xd1d316(0x24b)]=function(_0x119d19,_0x448a3c){const _0x3fe741=_0xd1d316;for(const _0x46742b in _0x448a3c){if(_0x46742b[_0x3fe741(0x243)](/(.*):(.*)/i)){const _0x5da77a=String(RegExp['$1']),_0x251517=String(RegExp['$2'])[_0x3fe741(0x272)]()[_0x3fe741(0x257)]();let _0x399e89,_0x2dc549,_0x4549cf;switch(_0x251517){case _0x3fe741(0x20a):_0x399e89=_0x448a3c[_0x46742b]!==''?Number(_0x448a3c[_0x46742b]):0x0;break;case _0x3fe741(0x24e):_0x2dc549=_0x448a3c[_0x46742b]!==''?JSON['parse'](_0x448a3c[_0x46742b]):[],_0x399e89=_0x2dc549[_0x3fe741(0x265)](_0x1081e6=>Number(_0x1081e6));break;case _0x3fe741(0x21e):_0x399e89=_0x448a3c[_0x46742b]!==''?eval(_0x448a3c[_0x46742b]):null;break;case _0x3fe741(0x297):_0x2dc549=_0x448a3c[_0x46742b]!==''?JSON[_0x3fe741(0x262)](_0x448a3c[_0x46742b]):[],_0x399e89=_0x2dc549[_0x3fe741(0x265)](_0x18f9d1=>eval(_0x18f9d1));break;case _0x3fe741(0x23a):_0x399e89=_0x448a3c[_0x46742b]!==''?JSON[_0x3fe741(0x262)](_0x448a3c[_0x46742b]):'';break;case _0x3fe741(0x1f2):_0x2dc549=_0x448a3c[_0x46742b]!==''?JSON[_0x3fe741(0x262)](_0x448a3c[_0x46742b]):[],_0x399e89=_0x2dc549[_0x3fe741(0x265)](_0x15cb88=>JSON[_0x3fe741(0x262)](_0x15cb88));break;case _0x3fe741(0x28b):_0x399e89=_0x448a3c[_0x46742b]!==''?new Function(JSON['parse'](_0x448a3c[_0x46742b])):new Function(_0x3fe741(0x21d));break;case _0x3fe741(0x239):_0x2dc549=_0x448a3c[_0x46742b]!==''?JSON['parse'](_0x448a3c[_0x46742b]):[],_0x399e89=_0x2dc549[_0x3fe741(0x265)](_0x42e4eb=>new Function(JSON[_0x3fe741(0x262)](_0x42e4eb)));break;case _0x3fe741(0x223):_0x399e89=_0x448a3c[_0x46742b]!==''?String(_0x448a3c[_0x46742b]):'';break;case _0x3fe741(0x227):_0x2dc549=_0x448a3c[_0x46742b]!==''?JSON['parse'](_0x448a3c[_0x46742b]):[],_0x399e89=_0x2dc549[_0x3fe741(0x265)](_0x5d6ca0=>String(_0x5d6ca0));break;case _0x3fe741(0x295):_0x4549cf=_0x448a3c[_0x46742b]!==''?JSON[_0x3fe741(0x262)](_0x448a3c[_0x46742b]):{},_0x399e89=VisuMZ[_0x3fe741(0x24b)]({},_0x4549cf);break;case'ARRAYSTRUCT':_0x2dc549=_0x448a3c[_0x46742b]!==''?JSON[_0x3fe741(0x262)](_0x448a3c[_0x46742b]):[],_0x399e89=_0x2dc549['map'](_0x37d7e6=>VisuMZ[_0x3fe741(0x24b)]({},JSON[_0x3fe741(0x262)](_0x37d7e6)));break;default:continue;}_0x119d19[_0x5da77a]=_0x399e89;}}return _0x119d19;},(_0x4efe7d=>{const _0x5936ae=_0xd1d316,_0x307bba=_0x4efe7d[_0x5936ae(0x24a)];for(const _0x2804ff of dependencies){if(!Imported[_0x2804ff]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x5936ae(0x285)](_0x307bba,_0x2804ff)),SceneManager[_0x5936ae(0x244)]();break;}}const _0xc6d8b9=_0x4efe7d[_0x5936ae(0x1ff)];if(_0xc6d8b9[_0x5936ae(0x243)](/\[Version[ ](.*?)\]/i)){const _0xa90004=Number(RegExp['$1']);_0xa90004!==VisuMZ[label][_0x5936ae(0x235)]&&(alert(_0x5936ae(0x242)[_0x5936ae(0x285)](_0x307bba,_0xa90004)),SceneManager['exit']());}if(_0xc6d8b9['match'](/\[Tier[ ](\d+)\]/i)){const _0x235fce=Number(RegExp['$1']);_0x235fce<tier?(alert(_0x5936ae(0x25a)[_0x5936ae(0x285)](_0x307bba,_0x235fce,tier)),SceneManager[_0x5936ae(0x244)]()):tier=Math[_0x5936ae(0x1fa)](_0x235fce,tier);}VisuMZ[_0x5936ae(0x24b)](VisuMZ[label]['Settings'],_0x4efe7d[_0x5936ae(0x205)]);})(pluginData),VisuMZ[_0xd1d316(0x267)]['RegExp']={'visualPicture':/<(?:VISUAL|VISUAL ITEM) (?:PICTURE|FILENAME):[ ](.*)>/i,'bigPicture':/<PICTURE:[ ](.*)>/i,'bgColorNum1':/<(?:VISUAL|VISUAL ITEM)[ ](?:BG|BACKGROUND)[ ]COLOR[ ]1:[ ](\d+)>/i,'bgColorNum2':/<(?:VISUAL|VISUAL ITEM)[ ](?:BG|BACKGROUND)[ ]COLOR[ ]2:[ ](\d+)>/i,'bgColorHex1':/<(?:VISUAL|VISUAL ITEM)[ ](?:BG|BACKGROUND)[ ]COLOR[ ]1:[ ]#(.*)>/i,'bgColorHex2':/<(?:VISUAL|VISUAL ITEM)[ ](?:BG|BACKGROUND)[ ]COLOR[ ]2:[ ]#(.*)>/i},Window_ItemList[_0xd1d316(0x22a)]=VisuMZ['VisualItemInv'][_0xd1d316(0x203)]['IconSize']||0x40,Window_ItemList[_0xd1d316(0x26b)]=VisuMZ[_0xd1d316(0x267)][_0xd1d316(0x203)][_0xd1d316(0x228)]||![],Window_ItemList[_0xd1d316(0x29b)]=VisuMZ[_0xd1d316(0x267)][_0xd1d316(0x203)][_0xd1d316(0x212)]||'rgba(0,\x200,\x200,\x201.0)',Window_ItemList['VISUAL_ITEM_OUTLINE_SIZE']=VisuMZ[_0xd1d316(0x267)]['Settings'][_0xd1d316(0x241)]||0x0,Window_ItemList['VISUAL_ITEM_CONSTRUCTORS']=VisuMZ[_0xd1d316(0x267)]['Settings']['Constructors']||0x0,Window_ItemList[_0xd1d316(0x27b)][_0xd1d316(0x20b)]=function(){const _0x423253=_0xd1d316;return Window_ItemList['VISUAL_ITEM_CONSTRUCTORS'][_0x423253(0x284)](this[_0x423253(0x1fe)]['name']);},VisuMZ[_0xd1d316(0x267)]['Window_Selectable_itemHeight']=Window_Selectable[_0xd1d316(0x27b)][_0xd1d316(0x206)],Window_ItemList[_0xd1d316(0x27b)][_0xd1d316(0x206)]=function(){const _0x3d7e0e=_0xd1d316;if(this['usesVisualItemInventory']()){if(this[_0x3d7e0e(0x26f)]!==undefined)return this[_0x3d7e0e(0x26f)];const _0xddc656=Math[_0x3d7e0e(0x211)](Window_ItemList[_0x3d7e0e(0x22a)]/this[_0x3d7e0e(0x1f6)]());return this[_0x3d7e0e(0x26f)]=Math[_0x3d7e0e(0x298)](_0xddc656*this[_0x3d7e0e(0x1f6)]())+0x8,this[_0x3d7e0e(0x26f)];}else return VisuMZ[_0x3d7e0e(0x267)][_0x3d7e0e(0x27d)][_0x3d7e0e(0x29c)](this);},VisuMZ[_0xd1d316(0x267)][_0xd1d316(0x258)]=Window_ItemList['prototype'][_0xd1d316(0x26e)],Window_ItemList[_0xd1d316(0x27b)][_0xd1d316(0x26e)]=function(){const _0x497287=_0xd1d316;return this[_0x497287(0x20b)]()?Math[_0x497287(0x211)](this['innerWidth']/this[_0x497287(0x206)]()):VisuMZ[_0x497287(0x267)]['Window_ItemList_maxCols'][_0x497287(0x29c)](this);},VisuMZ[_0xd1d316(0x267)][_0xd1d316(0x278)]=Window_ItemList[_0xd1d316(0x27b)][_0xd1d316(0x281)],Window_ItemList[_0xd1d316(0x27b)]['colSpacing']=function(){const _0x5dd883=_0xd1d316;return this['usesVisualItemInventory']()?0x0:VisuMZ['VisualItemInv'][_0x5dd883(0x278)]['call'](this);},VisuMZ[_0xd1d316(0x267)][_0xd1d316(0x21f)]=Window_ItemList[_0xd1d316(0x27b)]['rowSpacing'],Window_ItemList[_0xd1d316(0x27b)][_0xd1d316(0x236)]=function(){const _0xafd148=_0xd1d316;return this[_0xafd148(0x20b)]()?0x0:VisuMZ[_0xafd148(0x267)][_0xafd148(0x21f)][_0xafd148(0x29c)](this);},VisuMZ['VisualItemInv']['Window_ItemList_drawItem']=Window_ItemList[_0xd1d316(0x27b)][_0xd1d316(0x277)],Window_ItemList[_0xd1d316(0x27b)]['drawItem']=function(_0x233e26){const _0x18f366=_0xd1d316;this[_0x18f366(0x20b)]()?this[_0x18f366(0x1f4)](_0x233e26):VisuMZ[_0x18f366(0x267)]['Window_ItemList_drawItem'][_0x18f366(0x29c)](this,_0x233e26);},Window_ItemList[_0xd1d316(0x27b)][_0xd1d316(0x1f4)]=function(_0x18f1d4){const _0x21c95e=_0xd1d316,_0x5929e4=this['itemAt'](_0x18f1d4);if(!_0x5929e4)return;const _0x39c183=VisuMZ[_0x21c95e(0x267)][_0x21c95e(0x20f)],_0x43876c=_0x5929e4[_0x21c95e(0x22e)],_0x1df5c8=this[_0x21c95e(0x200)](_0x18f1d4);if(_0x43876c[_0x21c95e(0x243)](_0x39c183[_0x21c95e(0x27f)])||_0x43876c['match'](_0x39c183['bigPicture'])){const _0x3105b5=String(RegExp['$1'])[_0x21c95e(0x257)](),_0x1ab7e2=ImageManager['loadPicture'](_0x3105b5);_0x1ab7e2[_0x21c95e(0x1f1)](this[_0x21c95e(0x293)][_0x21c95e(0x21b)](this,_0x5929e4,_0x1ab7e2,_0x1df5c8));}else this['changePaintOpacity'](this[_0x21c95e(0x264)](_0x5929e4)),this[_0x21c95e(0x294)](_0x5929e4,_0x1df5c8),this['drawItemNumber'](_0x5929e4,_0x1df5c8['x'],_0x1df5c8['y']+_0x1df5c8[_0x21c95e(0x23f)]-this[_0x21c95e(0x1f6)](),_0x1df5c8['width']),this[_0x21c95e(0x26a)](),this[_0x21c95e(0x231)](!![]);this[_0x21c95e(0x256)](_0x18f1d4);},Window_ItemList[_0xd1d316(0x27b)][_0xd1d316(0x293)]=function(_0x1e4ccf,_0x29c462,_0x572ed9){const _0x2564ba=_0xd1d316;this['changePaintOpacity'](this[_0x2564ba(0x264)](_0x1e4ccf));let _0x379351=_0x572ed9['x']+0x2,_0x1088bc=_0x572ed9['y']+0x2,_0x1380cf=_0x572ed9[_0x2564ba(0x29e)]-0x4,_0x394a04=_0x572ed9['height']-0x4,_0xf5b078=Math[_0x2564ba(0x1fd)](_0x1380cf,_0x394a04);const _0x4ed197=_0xf5b078/_0x29c462['width'],_0x4765dc=_0xf5b078/_0x29c462[_0x2564ba(0x23f)],_0x37d781=Math['min'](_0x4ed197,_0x4765dc,0x1);let _0xc409e=Math[_0x2564ba(0x298)](_0x29c462[_0x2564ba(0x29e)]*_0x37d781),_0x25ab1b=Math['round'](_0x29c462[_0x2564ba(0x23f)]*_0x37d781);_0x379351+=Math[_0x2564ba(0x298)]((_0x1380cf-_0xc409e)/0x2),_0x1088bc+=Math[_0x2564ba(0x298)]((_0x394a04-_0x25ab1b)/0x2);const _0x457b8c=_0x29c462['width'],_0x55f0b5=_0x29c462['height'],_0x49a1c3=this[_0x2564ba(0x201)][_0x2564ba(0x226)][_0x2564ba(0x270)];this[_0x2564ba(0x201)][_0x2564ba(0x226)][_0x2564ba(0x270)]=!![],this[_0x2564ba(0x201)][_0x2564ba(0x24f)](_0x29c462,0x0,0x0,_0x457b8c,_0x55f0b5,_0x379351,_0x1088bc,_0xc409e,_0x25ab1b),this[_0x2564ba(0x201)]['_context'][_0x2564ba(0x270)]=_0x49a1c3,this[_0x2564ba(0x21a)](_0x1e4ccf,_0x572ed9['x'],_0x572ed9['y']+_0x572ed9[_0x2564ba(0x23f)]-this['lineHeight'](),_0x572ed9[_0x2564ba(0x29e)]),this['resetFontSettings'](),this[_0x2564ba(0x231)](!![]);},Window_ItemList['prototype']['drawBigItemIcon']=function(_0x1875d6,_0x41d4a6){const _0x1db37a=_0xd1d316,_0x14c50d=_0x1875d6[_0x1db37a(0x221)];this[_0x1db37a(0x20e)](_0x14c50d,_0x41d4a6);},Window_ItemList[_0xd1d316(0x27b)][_0xd1d316(0x20e)]=function(_0x207188,_0xe3ca05){const _0x501a7f=_0xd1d316;let _0x2360bb=_0xe3ca05['x'],_0x55990e=_0xe3ca05['y'],_0x284b47=Window_ItemList[_0x501a7f(0x22a)];_0x2360bb+=Math['round']((_0xe3ca05['width']-_0x284b47)/0x2),_0x55990e+=Math[_0x501a7f(0x298)]((_0xe3ca05[_0x501a7f(0x23f)]-_0x284b47)/0x2);const _0x57bd4b=ImageManager[_0x501a7f(0x292)](_0x501a7f(0x28f)),_0x4ec4dd=ImageManager[_0x501a7f(0x20d)],_0xa0326=ImageManager[_0x501a7f(0x29a)],_0x378d20=_0x207188%0x10*_0x4ec4dd,_0x55b694=Math[_0x501a7f(0x238)](_0x207188/0x10)*_0xa0326;this[_0x501a7f(0x201)][_0x501a7f(0x226)][_0x501a7f(0x270)]=Window_ItemList[_0x501a7f(0x26b)],this['contents']['blt'](_0x57bd4b,_0x378d20,_0x55b694,_0x4ec4dd,_0xa0326,_0x2360bb,_0x55990e,_0x284b47,_0x284b47),this[_0x501a7f(0x201)][_0x501a7f(0x226)][_0x501a7f(0x270)]=!![];},VisuMZ[_0xd1d316(0x267)][_0xd1d316(0x246)]=Window_ItemList['prototype']['drawItemNumber'],Window_ItemList['prototype'][_0xd1d316(0x21a)]=function(_0x12225b,_0x1c54ce,_0x3fc0bd,_0x2dbb09){const _0xd689a2=_0xd1d316;this['setupVisualItemInvFontSettings'](),VisuMZ[_0xd689a2(0x267)][_0xd689a2(0x246)]['call'](this,_0x12225b,_0x1c54ce,_0x3fc0bd,_0x2dbb09),this['resetFontSettings']();},Window_Base[_0xd1d316(0x27b)][_0xd1d316(0x23e)]=function(){const _0x19b315=_0xd1d316;this[_0x19b315(0x26a)](),this[_0x19b315(0x201)][_0x19b315(0x213)]=Window_ItemList[_0x19b315(0x29b)],this[_0x19b315(0x201)]['outlineWidth']=Window_ItemList[_0x19b315(0x23d)];},VisuMZ['VisualItemInv'][_0xd1d316(0x252)]=Window_ItemList[_0xd1d316(0x27b)][_0xd1d316(0x209)],Window_ItemList[_0xd1d316(0x27b)][_0xd1d316(0x209)]=function(_0x531a74){const _0x59e066=_0xd1d316;VisuMZ[_0x59e066(0x267)][_0x59e066(0x252)][_0x59e066(0x29c)](this,_0x531a74),this[_0x59e066(0x299)]();},Window_ItemList[_0xd1d316(0x27b)][_0xd1d316(0x299)]=function(){const _0x5bd605=_0xd1d316;if(!this[_0x5bd605(0x20b)]())return;if(!VisuMZ['VisualItemInv'][_0x5bd605(0x203)][_0x5bd605(0x230)])return;this['_visualItemInventoryTooltipWindow']=new Window_VisualItemTooltip(this),SceneManager[_0x5bd605(0x266)][_0x5bd605(0x1fc)](this['_visualItemInventoryTooltipWindow']);},VisuMZ[_0xd1d316(0x267)][_0xd1d316(0x276)]=Window_ItemList['prototype']['callUpdateHelp'],Window_ItemList[_0xd1d316(0x27b)]['callUpdateHelp']=function(){const _0x3c77ce=_0xd1d316;VisuMZ['VisualItemInv']['Window_ItemList_callUpdateHelp'][_0x3c77ce(0x29c)](this),this[_0x3c77ce(0x1f8)]&&this[_0x3c77ce(0x1f8)][_0x3c77ce(0x263)](this[_0x3c77ce(0x260)]());},VisuMZ[_0xd1d316(0x267)][_0xd1d316(0x232)]=Window_ItemList[_0xd1d316(0x27b)]['drawItemBackground'],Window_ItemList[_0xd1d316(0x27b)][_0xd1d316(0x28e)]=function(_0x2c6c29){const _0x47fe08=_0xd1d316;this[_0x47fe08(0x20b)]()?this[_0x47fe08(0x290)](_0x2c6c29):VisuMZ[_0x47fe08(0x267)][_0x47fe08(0x232)][_0x47fe08(0x29c)](this,_0x2c6c29);const _0xf88cc=this[_0x47fe08(0x202)](_0x2c6c29);this['drawBackgroundRect'](_0xf88cc);},Window_ItemList[_0xd1d316(0x27b)][_0xd1d316(0x290)]=function(_0x45af0f){const _0x85c13b=_0xd1d316,_0x40a018=this['itemAt'](_0x45af0f);if(!_0x40a018){VisuMZ[_0x85c13b(0x267)][_0x85c13b(0x232)][_0x85c13b(0x29c)](this,_0x45af0f);return;}const _0x562653=VisuMZ[_0x85c13b(0x267)][_0x85c13b(0x20f)],_0x491094=_0x40a018[_0x85c13b(0x22e)];let _0x2f53b1=ColorManager['itemBackColor1'](),_0xc65add=ColorManager[_0x85c13b(0x207)]();_0x491094[_0x85c13b(0x243)](_0x562653[_0x85c13b(0x215)])&&(_0x2f53b1=ColorManager[_0x85c13b(0x279)](Number(RegExp['$1'])));_0x491094[_0x85c13b(0x243)](_0x562653[_0x85c13b(0x27e)])&&(_0xc65add=ColorManager[_0x85c13b(0x279)](Number(RegExp['$1'])));_0x491094['match'](_0x562653[_0x85c13b(0x255)])&&(_0x2f53b1='#'+String(RegExp['$1']));_0x491094[_0x85c13b(0x243)](_0x562653[_0x85c13b(0x25e)])&&(_0xc65add='#'+String(RegExp['$1']));const _0x5c6453=this[_0x85c13b(0x202)](_0x45af0f),_0x30506c=_0x5c6453['x'],_0x1a16ae=_0x5c6453['y'],_0x1436d2=_0x5c6453[_0x85c13b(0x29e)],_0x1294b8=_0x5c6453[_0x85c13b(0x23f)];this['contentsBack'][_0x85c13b(0x233)]=0xff,this[_0x85c13b(0x25d)][_0x85c13b(0x219)](_0x30506c,_0x1a16ae,_0x1436d2,_0x1294b8,_0x2f53b1,_0xc65add,!![]),this[_0x85c13b(0x25d)]['strokeRect'](_0x30506c,_0x1a16ae,_0x1436d2,_0x1294b8,_0x2f53b1);},VisuMZ['VisualItemInv'][_0xd1d316(0x248)]=function(_0x17515d){const _0x176c01=_0xd1d316;_0x17515d=_0x17515d['replace']('#','');_0x17515d[_0x176c01(0x259)]===0x3&&(_0x17515d=_0x17515d[0x0]+_0x17515d[0x0]+_0x17515d[0x1]+_0x17515d[0x1]+_0x17515d[0x2]+_0x17515d[0x2]);var _0x29eea7=parseInt(_0x17515d[_0x176c01(0x253)](0x0,0x2),0x10),_0x10cf11=parseInt(_0x17515d[_0x176c01(0x253)](0x2,0x4),0x10),_0x3356b4=parseInt(_0x17515d[_0x176c01(0x253)](0x4,0x6),0x10);return _0x176c01(0x229)+_0x29eea7+','+_0x10cf11+','+_0x3356b4+','+_0x176c01(0x250)+')';},VisuMZ[_0xd1d316(0x267)][_0xd1d316(0x25f)]=Window_Base[_0xd1d316(0x27b)][_0xd1d316(0x21a)],Window_Base[_0xd1d316(0x27b)][_0xd1d316(0x21a)]=function(_0x451566,_0x68b76f,_0x5d0d60,_0x55f08b){const _0x3b3f69=_0xd1d316;this['usesVisualItemInventory']&&this[_0x3b3f69(0x20b)]()?this[_0x3b3f69(0x22f)](_0x451566,_0x68b76f,_0x5d0d60,_0x55f08b):VisuMZ[_0x3b3f69(0x267)][_0x3b3f69(0x25f)]['call'](this);},Window_Base[_0xd1d316(0x27b)]['drawItemNumberVisualItemInventory']=function(_0x58c1db,_0x151243,_0x17e279,_0x5993ee){const _0x198313=_0xd1d316;if(this[_0x198313(0x271)](_0x58c1db)){this[_0x198313(0x23e)]();const _0x46a821=VisuMZ[_0x198313(0x217)][_0x198313(0x203)][_0x198313(0x27c)],_0x20c315=_0x46a821[_0x198313(0x289)],_0x296b0c=_0x20c315[_0x198313(0x285)]($gameParty[_0x198313(0x218)](_0x58c1db));this[_0x198313(0x201)][_0x198313(0x210)]=_0x46a821[_0x198313(0x28c)],this[_0x198313(0x24d)](_0x296b0c,_0x151243,_0x17e279,_0x5993ee,_0x198313(0x1fb)),this[_0x198313(0x26a)]();}},VisuMZ['VisualItemInv'][_0xd1d316(0x261)]=Window_ItemList['prototype'][_0xd1d316(0x256)],Window_ItemList[_0xd1d316(0x27b)][_0xd1d316(0x256)]=function(_0x14418f){const _0xc067a2=_0xd1d316;this['usesVisualItemInventory']()?this['placeItemNewLabelVisualItemInventory'](_0x14418f):VisuMZ['VisualItemInv'][_0xc067a2(0x261)][_0xc067a2(0x29c)](this,_0x14418f);},Window_ItemList[_0xd1d316(0x27b)][_0xd1d316(0x283)]=function(_0x2af1af){const _0x227805=_0xd1d316;if(!Imported['VisuMZ_1_ItemsEquipsCore'])return;const _0x4f035d=this[_0x227805(0x249)](_0x2af1af);if(!_0x4f035d||!this['isShowNew']())return;if(!$gameParty['isNewItem'](_0x4f035d))return;const _0x58dc09=this[_0x227805(0x200)](_0x2af1af),_0x5a0d2c=_0x58dc09['x'],_0xa921ec=_0x58dc09['y'],_0x11ea8d=VisuMZ[_0x227805(0x217)][_0x227805(0x203)][_0x227805(0x237)][_0x227805(0x1f9)],_0x37307a=VisuMZ[_0x227805(0x217)][_0x227805(0x203)][_0x227805(0x237)][_0x227805(0x240)];this[_0x227805(0x208)](_0x4f035d,_0x5a0d2c+_0x11ea8d,_0xa921ec+_0x37307a);},VisuMZ[_0xd1d316(0x267)][_0xd1d316(0x1f0)]=Window_EquipItem[_0xd1d316(0x27b)][_0xd1d316(0x26e)],Window_EquipItem[_0xd1d316(0x27b)]['maxCols']=function(){const _0x59f745=_0xd1d316;return this[_0x59f745(0x20b)]()?Window_ItemList[_0x59f745(0x27b)][_0x59f745(0x26e)][_0x59f745(0x29c)](this):VisuMZ['VisualItemInv'][_0x59f745(0x1f0)][_0x59f745(0x29c)](this);},VisuMZ[_0xd1d316(0x267)][_0xd1d316(0x22b)]=Window_EquipItem[_0xd1d316(0x27b)]['colSpacing'],Window_EquipItem[_0xd1d316(0x27b)][_0xd1d316(0x281)]=function(){const _0x1c03fe=_0xd1d316;return this['usesVisualItemInventory']()?Window_ItemList[_0x1c03fe(0x27b)][_0x1c03fe(0x281)][_0x1c03fe(0x29c)](this):VisuMZ[_0x1c03fe(0x267)][_0x1c03fe(0x22b)][_0x1c03fe(0x29c)](this);},Window_EquipItem[_0xd1d316(0x27b)]['drawRemoveItem']=function(_0x5394ae){const _0x4b0d14=_0xd1d316,_0x230222=this['itemRectWithPadding'](_0x5394ae),_0x5bf802=VisuMZ[_0x4b0d14(0x217)]['Settings'][_0x4b0d14(0x25c)],_0x2c9522=_0x5bf802[_0x4b0d14(0x234)];this[_0x4b0d14(0x231)](![]),this[_0x4b0d14(0x20e)](_0x2c9522,_0x230222),this[_0x4b0d14(0x231)](!![]);},VisuMZ[_0xd1d316(0x267)][_0xd1d316(0x282)]=Window_ShopSell[_0xd1d316(0x27b)][_0xd1d316(0x26e)],Window_ShopSell[_0xd1d316(0x27b)]['maxCols']=function(){const _0x3680bf=_0xd1d316;return this['usesVisualItemInventory']()?Window_ItemList[_0x3680bf(0x27b)][_0x3680bf(0x26e)]['call'](this):VisuMZ[_0x3680bf(0x267)][_0x3680bf(0x282)][_0x3680bf(0x29c)](this);},VisuMZ[_0xd1d316(0x267)]['Window_ShopSell_colSpacing']=Window_ShopSell[_0xd1d316(0x27b)][_0xd1d316(0x281)],Window_ShopSell['prototype'][_0xd1d316(0x281)]=function(){const _0x37dde4=_0xd1d316;return this['usesVisualItemInventory']()?Window_ItemList[_0x37dde4(0x27b)][_0x37dde4(0x281)][_0x37dde4(0x29c)](this):VisuMZ[_0x37dde4(0x267)][_0x37dde4(0x275)][_0x37dde4(0x29c)](this);};function Window_VisualItemTooltip(){const _0x168367=_0xd1d316;this[_0x168367(0x209)](...arguments);}Window_VisualItemTooltip[_0xd1d316(0x27b)]=Object['create'](Window_Base[_0xd1d316(0x27b)]),Window_VisualItemTooltip[_0xd1d316(0x27b)][_0xd1d316(0x1fe)]=Window_VisualItemTooltip,Window_VisualItemTooltip['BG_TYPE']=VisuMZ[_0xd1d316(0x267)][_0xd1d316(0x203)]['TooltipBgType'],Window_VisualItemTooltip[_0xd1d316(0x273)]=VisuMZ[_0xd1d316(0x267)][_0xd1d316(0x203)]['TooltipBufferWidth'],Window_VisualItemTooltip[_0xd1d316(0x28d)]=VisuMZ[_0xd1d316(0x267)][_0xd1d316(0x203)]['TooltipFontSize'],Window_VisualItemTooltip['OFFSET_X']=VisuMZ['VisualItemInv'][_0xd1d316(0x203)][_0xd1d316(0x222)],Window_VisualItemTooltip[_0xd1d316(0x23c)]=VisuMZ[_0xd1d316(0x267)][_0xd1d316(0x203)]['TooltipOffsetY'],Window_VisualItemTooltip[_0xd1d316(0x27b)][_0xd1d316(0x209)]=function(_0x3fe9a6){const _0x1a628f=_0xd1d316;this[_0x1a628f(0x245)]=_0x3fe9a6;const _0x85fc8e=new Rectangle(0x0,0x0,0x0,this[_0x1a628f(0x1f6)]());Window_Base['prototype'][_0x1a628f(0x209)][_0x1a628f(0x29c)](this,_0x85fc8e),this[_0x1a628f(0x274)]=![],this[_0x1a628f(0x254)]=0xff,this[_0x1a628f(0x1f3)]=0xff,this[_0x1a628f(0x251)]=null;},Window_VisualItemTooltip[_0xd1d316(0x27b)][_0xd1d316(0x28a)]=function(){const _0x32b3e1=_0xd1d316;this[_0x32b3e1(0x204)]=0x0;},Window_VisualItemTooltip[_0xd1d316(0x27b)]['setItem']=function(_0x4baa43){const _0x259ae1=_0xd1d316;if(this[_0x259ae1(0x251)]===_0x4baa43)return;this[_0x259ae1(0x251)]=_0x4baa43,this[_0x259ae1(0x220)]();},Window_VisualItemTooltip[_0xd1d316(0x27b)][_0xd1d316(0x220)]=function(){const _0x334c39=_0xd1d316;this[_0x334c39(0x201)]['clear']();if(!this[_0x334c39(0x251)])return;this['resetFontSettings'](),this[_0x334c39(0x201)]['fontSize']=Window_VisualItemTooltip[_0x334c39(0x28d)];const _0x2323b8=this[_0x334c39(0x251)][_0x334c39(0x24a)],_0x41b8b3=this[_0x334c39(0x288)](_0x2323b8)+Window_VisualItemTooltip[_0x334c39(0x273)];this[_0x334c39(0x29e)]=Math['ceil'](_0x41b8b3),this[_0x334c39(0x268)](),this['contents'][_0x334c39(0x210)]=Window_VisualItemTooltip[_0x334c39(0x28d)];if(Imported[_0x334c39(0x1f7)]){const _0x344667=ColorManager['getItemColor'](this['_item']);this[_0x334c39(0x296)](_0x344667);}this[_0x334c39(0x24d)](_0x2323b8,0x0,0x0,this['innerWidth'],_0x334c39(0x291)),this[_0x334c39(0x269)](),this[_0x334c39(0x29d)](Window_VisualItemTooltip[_0x334c39(0x1ef)]);},Window_VisualItemTooltip[_0xd1d316(0x27b)][_0xd1d316(0x26c)]=function(){const _0x25444d=_0xd1d316;Window_Base['prototype'][_0x25444d(0x26c)][_0x25444d(0x29c)](this),this[_0x25444d(0x29f)](),this[_0x25444d(0x20c)]();},Window_VisualItemTooltip[_0xd1d316(0x27b)][_0xd1d316(0x29f)]=function(){const _0x3a3c54=_0xd1d316,_0x52406c=this[_0x3a3c54(0x274)];this[_0x3a3c54(0x274)]=this['_item']&&this[_0x3a3c54(0x245)][_0x3a3c54(0x21c)]&&this[_0x3a3c54(0x245)][_0x3a3c54(0x225)](),_0x52406c!==this[_0x3a3c54(0x274)]&&SceneManager[_0x3a3c54(0x266)]['addChild'](this);},Window_VisualItemTooltip[_0xd1d316(0x27b)][_0xd1d316(0x20c)]=function(){const _0x5d3e6c=_0xd1d316;if(!this[_0x5d3e6c(0x274)])return;const _0x422efa=SceneManager['_scene']['_windowLayer'],_0x576243=this[_0x5d3e6c(0x245)];let _0x2ed7cf=_0x576243['x']+_0x422efa['x'],_0x56d814=_0x576243['y']+_0x422efa['y'];const _0x530f9e=_0x576243[_0x5d3e6c(0x287)],_0x377198=_0x576243[_0x5d3e6c(0x224)];_0x2ed7cf+=_0x530f9e['x']+_0x530f9e[_0x5d3e6c(0x29e)]/0x2-this[_0x5d3e6c(0x29e)]/0x2+_0x377198['x'],_0x56d814+=_0x530f9e['y']-this[_0x5d3e6c(0x23f)]+_0x377198['y'];let _0x4c4fbe=_0x576243['y']+_0x422efa['y']-this['height']+_0x576243['padding'];_0x4c4fbe+=Window_VisualItemTooltip[_0x5d3e6c(0x23c)],_0x2ed7cf+=Window_VisualItemTooltip[_0x5d3e6c(0x24c)],_0x56d814+=Window_VisualItemTooltip[_0x5d3e6c(0x23c)],this['x']=Math['round'](_0x2ed7cf)[_0x5d3e6c(0x247)](0x0,Graphics[_0x5d3e6c(0x29e)]-this[_0x5d3e6c(0x29e)]),this['y']=Math[_0x5d3e6c(0x298)](_0x56d814)[_0x5d3e6c(0x247)](_0x4c4fbe,Graphics['height']-this[_0x5d3e6c(0x23f)]);};