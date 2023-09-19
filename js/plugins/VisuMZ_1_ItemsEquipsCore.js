//=============================================================================
// VisuStella MZ - Items & Equips Core
// VisuMZ_1_ItemsEquipsCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_ItemsEquipsCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ItemsEquipsCore = VisuMZ.ItemsEquipsCore || {};
VisuMZ.ItemsEquipsCore.version = 1.30;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.30] [ItemsEquipsCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Items_and_Equips_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Items & Equips Core makes improvements to the RPG Maker MZ item and
 * equipment dedicated scenes (including the shop) and how they're handled.
 * From more item categories, better parameter control, rulings, and more, game
 * devs are able to take control over key aspects of their game's items.
 *
 * Features include all (but not limited to) the following:
 *
 * * Modifying the appearances to the Item Scene, Equip Scene, and Shop Scene.
 * * Categorizing items in unique and multiple categories.
 * * Item Scene and Shop Scene will now display detailed information on items.
 * * NEW! marker can be displayed over recently acquired items in-game.
 * * Equipment notetags to adjust parameters past the editor limitations.
 * * Equipment Rulings to adjust what slot types can and can't be unequipped
 *   and/or optimized.
 * * Equipment Type Handling offers more control over equipment loadouts.
 * * Items sold in shops can be hidden/shown based on Switches.
 * * Items sold in shops can have varying prices adjusted by notetags.
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
 * Major Changes: New Hard-Coded Features
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Equipment Type Handling
 *
 * - Characters will no longer have one universal equipment slot setting.
 * Classes can have different equipment type loadouts, made possible through
 * the usage of notetags. Also, equipment types of matching names would be
 * treated as the same type, where previously, they would be different types.
 * This means if you have two "Accessory" slots, be it in the form of notetags
 * or through the Database > Types tab, they can both equip the same type of
 * accessories.
 *
 * - The Change Equip event command is now updated to reflect this new change.
 * When processing an equip change, the slot changed will go to the first
 * empty slot of matching type. If all of the actor's matching slot types are
 * equipped, then the equip will replace the last slot available.
 *
 * ---
 *
 * Shop Status Window
 *
 * - The Status Window found in the Shop Scene was originally barren and did
 * not display much information at all. This is changed through this plugin's
 * new features. While the contents of the Shop Status Window can be customized
 * through the Plugin Parameters, it is a change that cannot be reversed and
 * for the better since it gives players the much needed information revolving
 * around the game's items.
 *
 * ---
 *
 * Core Engine Compatibility: Modern Controls
 *
 * - If the VisuStella Core Engine is added to your game with Modern Controls
 * enabled, then the Item Menu Scene, Equip Menu Scene, and Shop Menu Scene's
 * controls will be changed a bit.
 *
 * - The Item Menu Scene will automatically have the Item List Window active,
 * with using the Left/Right (for single column) or Page Up/Page Down (for
 * multi-columns) to navigate between the Item Categories. Similar will occur
 * when trying to sell items in the Shop Menu Scene.
 *
 * - The Equip Menu Scene will automatically have the Equip Slots Window active
 * and only activate the command window upon moving up to it.
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
 * VisuMZ_1_BattleCore
 * 
 * Changing the "Damage Multiplier" or "Healing Multiplier" vocabulary for the
 * Item and Equip Core's Shop Status Window is not done with the Item and Equip
 * Core's Plugin Parameters if you have the Battle Core installed.
 * 
 * Instead, go to Battle Core's Plugin Parameters, Damage Settings, Damage
 * Styles, and adjust the style's version of the "Damage Multiplier" or
 * "Healing Multiplier" text instead.
 * 
 * Why does this work this way? Because not all damage styles work off
 * "Multipliers" so in order for it to convey the proper message to the player,
 * each damage style has its own vocabulary to be more accurate.
 * 
 * In case you forget about that, when you visit the Item and Equip Core's
 * plugin parameters for these, it should also remind you in the parameter's
 * description on where to change it.
 * 
 * ---
 *
 * VisuMZ_2_WeaponSwapSystem
 *
 * The custom equip slots feature from the VisuStella MZ Items and Equips Core
 * allowed you to add in extra weapon slots. This is now curated up to a max
 * of one weapon slot per character. This needs to be done to make the Weapon
 * Swap System viable.
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
 * === General ===
 * 
 * These notetags affect the Items, Weapons, and Armors on a general scale.
 *
 * ---
 *
 * <Max: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the maximum quantity that can be held for this item.
 * - Replace 'x' with a number value to determine the maximum amount.
 *
 * ---
 *
 * <Color: x>
 * <Color: #rrggbb>
 *
 * - Used for: Item, Weapon, Armor, Skill Notetags
 * - Determines the color of the object inside the in-game menus.
 * - Replace 'x' with a number value depicting a window text color.
 * - Replace 'rrggbb' with a hex color code for a more custom color.
 *
 * ---
 *
 * <Category: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Arranges items into certain/multiple categories to work with the Category
 *   Plugin Parameter setting: "Category:x".
 * - Replace 'x' with a category name to mark this item as.
 *
 * ---
 *
 * <Categories>
 *  x
 *  x
 * </Categories>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Arranges items into certain/multiple categories to work with the Category
 *   Plugin Parameter setting: "Category:x".
 * - Replace each 'x' with a category name to mark this item as.
 *
 * ---
 *
 * === Item Accessibility Notetags ===
 *
 * The following notetags allow you to choose when items can/cannot be used
 * based on switches.
 *
 * ---
 *
 * <Enable Switch: x>
 *
 * <Enable All Switches: x,x,x>
 * <Enable Any Switches: x,x,x>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on switches.
 * - Replace 'x' with the switch ID to determine the item's enabled status.
 * - If 'All' notetag variant is used, item will be disabled until all
 *   switches are ON. Then, it would be enabled.
 * - If 'Any' notetag variant is used, item will be enabled if any of the
 *   switches are ON. Otherwise, it would be disabled.
 *
 * ---
 *
 * <Disable Switch: x>
 *
 * <Disable All Switches: x,x,x>
 * <Disable Any Switches: x,x,x>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on switches.
 * - Replace 'x' with the switch ID to determine the item's enabled status.
 * - If 'All' notetag variant is used, item will be enabled until all switches
 *   are ON. Then, it would be disabled.
 * - If 'Any' notetag variant is used, item will be disabled if any of the
 *   switches are ON. Otherwise, it would be enabled.
 *
 * ---
 *
 * === JavaScript Notetags: Item Accessibility ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * determine if an item can be accessible by code.
 *
 * ---
 *
 * <JS Item Enable>
 *  code
 *  code
 *  enabled = code;
 * </JS Item Enable>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on JavaScript code.
 * - If the actor this is disabled for is the only party member, it will not be
 *   visible in the item list unless the VisuStella Battle Core is installed.
 *   - If the VisuStella Battle Core is installed, then all battle scope items
 *     will be visible even if they're disabled.
 * - Replace 'code' to determine the type enabled status of the item.
 * - The 'enabled' variable returns a boolean (true/false) to determine if the
 *   item will be enabled or not.
 * - The 'user' variable refers to the user with the item.
 * - The 'item' variable refers to the item being checked.
 * - All other item conditions must be met in order for this to code to count.
 *
 * ---
 *
 * === Equipment Notetags ===
 *
 * The following notetags provide equipment-related effects from deciding what
 * equip slots can be given to classes to the base parameter changes asigned
 * to weapons and armors.
 *
 * ---
 *
 * <Equip Slots>
 *  slotName
 *  slotName
 *  slotName
 * </Equip Slots>
 *
 * - Used for: Class Notetags
 * - Changes the equipment slot loadout for any actor who is that class.
 * - Replace 'slotName' with an Equipment Type name from Database > Types.
 *   This is case-sensitive.
 * - Insert or remove as many "slotName" equipment types as needed.
 *
 * ---
 *
 * <param: +x>
 * <param: -x>
 *
 * - Used for: Weapon, Armor Notetags
 * - Changes the base parameter value for the equip item.
 * - Replace 'param' with any of the following: 'MaxHP', 'MaxMP', 'ATK', 'DEF',
 *   'MAT', 'MDF', 'AGI', or 'LUK' to change that specific parameter's value.
 *   - These notetags do NOT work with X Parameters, S Parameters, or any
 *     custom parameters. These notetags ONLY work with the base parameters.
 * - Replace 'x' with a number value to set the parameter value to.
 * - This allows you to bypass the Database Editor's number limitations.
 *
 * ---
 * 
 * <Equip Copy Limit: x>
 * 
 * - Used for: Weapon, Armor Notetags
 * - Sets a maximum number of copies that the actor can wear of this equipment.
 * - Replace 'x' with a number value to determine the copy limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: Actors can only equip one copy of the "One-of-a-Kind Ring"
 *   on at any time despite having empty accessory slots because the ring has a
 *   <Equip Copy Limit: 1> notetag.
 * 
 * ---
 * 
 * <Equip Weapon Type Limit: x>
 * 
 * - Used for: Weapon
 * - This weapon cannot be equipped with other weapons of the same type once
 *   the limited amount has been reached.
 * - Replace 'x' with a number value to determine the weapon type limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: A dualwielding warrior who can only equip one sword and a
 *   dagger but never two swords or two daggers because the swords and daggers
 *   all have the <Equip Weapon Type Limit: 1> notetags on them.
 * 
 * ---
 * 
 * <Equip Armor Type Limit: x>
 * 
 * - Used for: Armor
 * - This armor cannot be equipped with other armors of the same type once the
 *   limited amount has been reached.
 * - Replace 'x' with a number value to determine the armor type limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: People cannot equip more than two glove accessories on at a
 *   time because the glove is a "Glove" armor-type and each glove item has the
 *   <Equip Armor Type Limit: 2> notetags on them.
 * 
 * ---
 *
 * === JavaScript Notetags: Equipment ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * adjust the parameter through code.
 *
 * ---
 *
 * <JS Parameters>
 *  MaxHP = code;
 *  MaxMP = code;
 *  ATK = code;
 *  DEF = code;
 *  MAT = code;
 *  MDF = code;
 *  AGI = code;
 *  LUK = code;
 * </JS Parameters>
 *
 * - Used for: Weapon, Armor Notetags
 * - Uses JavaScript to determine the values for the basic parameters based on
 *   the code used to calculate its value.
 * - The variables 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', and
 *   'LUK' are used to determine the finalized value of the parameter. This
 *   variable is case sensitive.
 * - If a parameter is not present, its value will be treated as +0.
 *
 * ---
 *
 * === Status Window Notetags ===
 *
 * The following notetags will affect the Shop Status Window info. If for any
 * reason the data that is displayed is not to your liking or insufficient,
 * you can change it up using the following notetags.
 *
 * ---
 *
 * <Status Info>
 *  key: data
 *  key: data
 *  key: data
 * </Status Info>
 *
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - If you do not like the generated data that's displayed, you can change it
 *   using this notetag to display what you want.
 * - Replace 'key' with one of the following:
 *   - Consumable
 *   - Quantity
 *   - Occasion
 *   - Scope
 *   - Speed
 *   - Success Rate
 *   - Repeat
 *   - Hit Type
 *   - Element
 *   - Damage Multiplier
 *   - HP Recovery
 *   - MP Recovery
 *   - TP Recovery
 *   - HP Damage
 *   - MP Damage
 *   - TP Damage
 *   - User TP Gain
 *   - Added Effects
 *   - Removed Effects
 * - Replace 'data' with the text data you want to visually appear. You may use
 *   text codes for this.
 * - This only affects info entries that are already visible and won't make
 *   other categories suddenly appear.
 * - Insert or remove as many "key: data" lines as needed.
 *
 * ---
 *
 * <Custom Status Info>
 *  key: data
 *  key: data
 *  key: data
 * </Custom Status Info>
 *
 * - Used for: Skill, Item
 * - If you want custom categories and data to be displayed for your items that
 *   aren't provided by the Shop Status Window Info to begin with, you can use
 *   this notetag to add in your own entries.
 * - Replace 'key' with text of the exact label you want. You may use text
 *   codes for this.
 * - Replace 'data' with text of the exact text data you want. You may use text
 *   codes for this.
 * - Insert or remove as many "key: data" lines as needed.
 *
 * ---
 * 
 * <Shop Picture Name: filename>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Enables a shop picture for the status window. This image can be seen in
 *   the item scene, shop scene, and skill scene if enabled.
 * - If this notetag is not used, there will be no image.
 * - Replace 'filename' with the filename of the graphic to use from the game
 *   project's img/pictures/ folder. Filenames are case sensitive. Leave out
 *   the filename extension from the notetag.
 * - Use the supporting notetags to determine where the image appears. If not,
 *   they will default to the background, fit to the window dimensions,
 *   centered at the middle of the window.
 * 
 * ---
 * 
 * <Shop Picture Layer: Background>
 * <Shop Picture Layer: Foreground>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Determines which layer the graphic will be drawn on.
 * - If the background layer is selected, the picture will appear behind the
 *   data text.
 * - If the foreground layer is selected, the picture will appear in front of
 *   the data text.
 * - If this notetag is not used, it will default to the background layer.
 * 
 * ---
 * 
 * <Shop Picture Max Width: x>
 * <Shop Picture Max Height: y>
 * <Shop Picture Max Dimensions: x, y>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Determines the maximum width and/or height for the image.
 * - This means the image will be automatically scaled proportionally to that
 *   width or height as long as everything else does not break boundaries.
 * - Replace 'x' and 'y' with number values representing the maximum dimensions
 *   the image can be in pixels.
 * - If these notetags are not used, the image will be automatically scaled to
 *   the dimensions of the shop status window.
 * 
 * ---
 * 
 * <Shop Picture Alignment: Left>
 * <Shop Picture Alignment: Center>
 * <Shop Picture Alignment: Right>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Adjusts the horizontal alignment for the image.
 * - Left, center, right determines how it's aligned horizontally if the
 *   image does not horizontally fit in the width of the window.
 * - If any of these notetags are not used, the image will default to the
 *   'center' alignment.
 * 
 * ---
 * 
 * <Shop Picture Position: Top>
 * <Shop Picture Position: Middle>
 * <Shop Picture Position: Bottom>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Adjusts the vertical position for the image.
 * - Top, middle, bottom determines how it's positioned vertically if the
 *   image does not vertically fit in the width of the window.
 * - If any of these notetags are not used, the image will default to the
 *   'middle' position.
 * 
 * ---
 * 
 * <Shop Picture Offset X: +x>
 * <Shop Picture Offset X: -x>
 * 
 * <Shop Picture Offset Y: +y>
 * <Shop Picture Offset Y: -y>
 * 
 * <Shop Picture Offset: +x, +y>
 * <Shop Picture Offset: -y, -y>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Offsets the X and Y positions of the image in the shop status window.
 * - X offsets adjust the horizontal position by x pixels.
 *   - Positive goes right.
 *   - Negative goes left.
 * - Y offsets adjust the horizontal position by y pixels.
 *   - Positive goes down.
 *   - Negative goes up.
 * - Replace 'x' and 'y' with number values representing the pixels to offset
 *   the image by. The '+' and '-' signs are required.
 * - If none of these notetags are used, there will be no offsets.
 * 
 * ---
 * 
 * <Shop Picture Opacity: x>
 * <Shop Picture Opacity: x%>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Adjusts the opacity of the image used.
 * - When using 'x' and not 'x%', use a number between 0 and 255.
 *   - The closer to 0, the more transparent the image is.
 *   - The closer to 255, the more opaque the image is.
 * - When using 'x%' and not 'x', use a number between 0% and 100%.
 *   - The closer to 0%, the more transparent the image is.
 *   - The closer to 100%, the more opaque the image is.
 * 
 * ---
 *
 * === Shop Menu Notetags ===
 *
 * These notetags adjust how prices and such are managed inside the Shop Menu
 * as well as whether or not some items are visible depending on switch states.
 *
 * ---
 *
 * <Price: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Adjusts the buying price for this item.
 * - Replace 'x' with a number depicting the desired value for the buy price.
 * - This allows you to bypass the RPG Maker MZ editor's limitation of 999,999.
 *
 * ---
 *
 * <Can Sell>
 * <Cannot Sell>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Makes the item either always sellable or cannot be sold.
 * - This bypasses the game's internal hard-coding to prevent items with a
 *   price of 0 from being able to be sold.
 * - This bypasses the game's internal hard-coding to always allow items with
 *   a price value of being able to be sold.
 *
 * ---
 *
 * <Sell Price: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Changes the sell price to be something different than the default amount.
 * - Replace 'x' with a number depicting the desired value for the sell price.
 *
 * ---
 *
 * <Show Shop Switch: x>
 *
 * <Show Shop All Switches: x,x,x>
 * <Show Shop Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the visibility of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's visibility.
 * - If 'All' notetag variant is used, item will be hidden until all switches
 *   are ON. Then, it would be shown.
 * - If 'Any' notetag variant is used, item will be shown if any of the
 *   switches are ON. Otherwise, it would be hidden.
 *
 * ---
 *
 * <Hide Shop Switch: x>
 *
 * <Hide Shop All Switches: x,x,x>
 * <Hide Shop Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the visibility of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's visibility.
 * - If 'All' notetag variant is used, item will be shown until all switches
 *   are ON. Then, it would be hidden.
 * - If 'Any' notetag variant is used, item will be hidden if any of the
 *   switches are ON. Otherwise, it would be shown.
 *
 * ---
 *
 * <Cannot Sell Switch: x>
 *
 * <Cannot Sell All Switches: x,x,x>
 * <Cannot Sell Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the sellability of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's sellability.
 * - If 'All' notetag variant is used, item cannot be sold until all switches
 *   are ON. Otherwise, it can be sold.
 * - If 'Any' notetag variant is used, item cannot be sold if any of the
 *   switches are ON. Otherwise, it can be sold.
 *
 * ---
 *
 * === JavaScript Notetags: Shop Menu ===
 *
 * The following are notetags made for users with JavaScript knowledge. These
 * notetags are primarily aimed at Buy and Sell prices.
 *
 * ---
 *
 * <JS Buy Price>
 *  code
 *  code
 *  price = code;
 * </JS Buy Price>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Replace 'code' to determine the buying 'price' of the item.
 * - Insert the final buy price into the 'price' variable.
 * - The 'item' variable refers to the item being bought.
 *
 * ---
 *
 * <JS Sell Price>
 *  code
 *  code
 *  price = code;
 * </JS Sell Price>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Replace 'code' to determine the selling 'price' of the item.
 * - Insert the final sell price into the 'price' variable.
 * - The 'item' variable refers to the item being sold.
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
 * === Actor Plugin Commands ===
 * 
 * ---
 *
 * Actor: Change Equip Slots
 * - Forcefully change the actor(s) equip slots.
 * - These will persist through class changes.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Equip Slots:
 *   - Insert the equip slots you want the actor(s) to have.
 *   - These entries are case-sensitive.
 *
 * ---
 *
 * Actor: Reset Equip Slots
 * - Reset any forced equip slots for the actor(s).
 * - Equip slots will then be based on class.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 * ---
 * 
 * === Shop Plugin Commands ===
 * 
 * ---
 *
 * Shop: Advanced
 * - Make it easier to put together inventories for a shop.
 * - WARNING: Does not allow for event-specific prices.
 *
 *   Step 1: Item ID's
 *   - Select which Item ID ranges to add.
 *
 *   Step 2: Weapon ID's
 *   - Select which Weapon ID ranges to add.
 *
 *   Step 3: Armor ID's
 *   - Select which Armor ID ranges to add.
 *
 *   Step 4: Purchase Only?
 *   - Make the shop purchase-only?
 * 
 *   Optional:
 * 
 *     Blacklist
 *     - A list of categories to blacklist from the shop.
 *     - Not used if empty. Mark categories with <Category: x>
 * 
 *     Whitelist
 *     - A list of categories to whitelist for the shop.
 *     - Not used if empty. Mark categories with <Category: x>
 *
 * This Plugin Command primarily functions as an alternative to the editor's
 * "Shop Processing" event command as that one requires you to add items one at
 * a time, making it extremely tedious to add large amounts of items. This
 * Plugin Command will mitigate that by allowing ID ranges to determine which
 * items to make available.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Item Menu Settings
 * ============================================================================
 *
 * The Item Menu Settings allow you to adjust specifics on how key objects and
 * windows in the Item Menu Scene operate.
 *
 * ---
 *
 * General Window
 *
 *   Use Updated Layout:
 *   - Use the Updated Item Menu Layout provided by this plugin?
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
 * List Window
 * 
 *   Columns:
 *   - Number of maximum columns.
 *   - If you are using the VisuStella MZ Core Engine and the "Modern Controls"
 *     Plugin Parameter, please read through that section in case you have any
 *     questions about how to switch between categories when using multiple
 *     columns of items at a time.
 *
 * ---
 *
 * Item Quantity
 *
 *   Item Max:
 *   Weapon Max:
 *   Armor Max:
 *   - The default maximum quantity for items, weapons, and/or armors.
 * 
 *   Quantity Format:
 *   - How to display an item's quantity.
 *   - %1 - Item Quantity
 *
 *   Font Size:
 *   - Default font size for item quantity.
 *
 * ---
 *
 * Shop Status Window
 * 
 *   Show in Item Menu?:
 *   - Show the Shop Status Window in the Item Menu?
 *   - This is enabled if the Updated Layout is on.
 *
 *   Adjust List Window?:
 *   - Automatically adjust the Item List Window in the Item Menu if using the
 *     Shop Status Window?
 * 
 *   Background Type:
 *   - Select background type for this window.
 *     - 0 - Window
 *     - 1 - Dim
 *     - 2 - Transparent
 *
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this Status Window in the
 *     Item Menu.
 *
 * ---
 *
 * Button Assist Window
 *
 *   Switch Category:
 *   - Button assist text used for switching categories.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Item Categories
 * ============================================================================
 *
 * Item Categories appear both in the Item Menu Scene and Shop Menu Scene (but
 * only under the Sell command). These Plugin Parameters give you the ability
 * to add in the specific categories you want displayed, remove the ones you
 * don't, and associate them with icons.
 *
 * ---
 *
 * List
 *
 *   Category List
 *   - A list of the item categories displayed in the Item/Shop menus.
 * 
 *     Type:
 *     - A list of the item categories displayed in the Item/Shop menus.
 *     - Replace x with ID numbers or text.
 *     - AllItems, RegularItems, KeyItems
 *     - HiddenItemA, HiddenItemB
 *     - Consumable, Nonconsumable
 *     - AlwaysUsable, BattleUsable, FieldUsable, NeverUsable
 *     - AllWeapons, WType:x
 *     - AllArmors, AType:x, EType:x
 *     - Category:x
 * 
 *     Icon:
 *     - Icon used for this category.
 *     - Use 0 for no icon.
 * 
 *     Visibility Switch:
 *     - This Switch must be turned ON in order for the category to show.
 *     - Use 0 for no Switch requirement.
 *
 *   Style:
 *   - How do you wish to draw categorie entries in the Category Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 *
 *   Text Alignment
 *   - Decide how you want the text to be aligned.
 *
 * ---
 *
 * Vocabulary
 *
 *   Hidden Item A
 *   Hidden Item B
 *   Consumable
 *   Nonconsumable
 *   Always Usable
 *   Battle Usable
 *   Field Usable
 *   Never Usable
 *   - How these categories are named in the Item Menu.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: NEW! Labels
 * ============================================================================
 *
 * Whenever the player receives a new item(s), a NEW! Label can be placed on
 * top of the item's icon when browsing a menu displaying the item(s). This is
 * a quality of life addition from more modern RPG's to help players figure out
 * what they've recently received. The following are Plugin Parameters made to
 * adjust how the NEW! Labels are handled in-game.
 *
 * ---
 *
 * NEW! Labels
 * 
 *   Use NEW! Labels?:
 *   - Use the NEW! Labels or not?
 * 
 *   Icon:
 *   - The icon index used to represent the NEW! text.
 *   - Use 0 to not draw any icons.
 * 
 *   Text:
 *   - The text written on the NEW! Label.
 * 
 *     Font Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *     Font Size:
 *     - The font size used for the NEW! text.
 * 
 *   Fade Limit:
 *   - What's the upper opaque limit before reversing?
 * 
 *   Fade Speed:
 *   - What's the fade speed of the NEW! Label?
 * 
 *   Offset X:
 *   - How much to offset the NEW! Label's X position by.
 * 
 *   Offset Y:
 *   - How much to offset the NEW! Label's Y position by.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Equip Menu Settings
 * ============================================================================
 *
 * These Plugin Parameters adjust the Equipment Menu Scene, ranging from using
 * a more updated and modern layout, changing the styles of other windows, and
 * other key visual aspects of the Equip Menu Scene. Other settings here allow
 * you to adjust how equipment operate under certain rulings, too.
 *
 * ---
 *
 * General
 * 
 *   Use Updated Layout:
 *   - Use the Updated Equip Layout provided by this plugin?
 *   - This will override the Core Engine windows settings.
 * 
 *     Param Font Size:
 *     - The font size used for parameter values.
 * 
 *     Show Menu Portraits?:
 *     - If Main Menu Core is installed, display the Menu Portraits instead of
 *       the actor's face in the status window?
 * 
 *     JS: Portrait Upper:
 *     - If Menu Portraits are available, this is code used to draw the upper
 *       data like this in the Status Window.
 * 
 *     JS: Face Upper:
 *     - If faces used used, this is code used to draw the upper data like this
 *       in the Status Window.
 * 
 *     JS: Parameter Lower:
 *     - Code to determine how parameters are drawn in the Status Window.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 * 
 *   Status Window Width:
 *   - The usual width of the status window if using the non-Updated Equip
 *     Menu Layout.
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
 * Command Window
 * 
 *   Style:
 *   - How do you wish to draw commands in the Command Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 * 
 *   Text Align:
 *   - Text alignment for the Command Window.
 * 
 *   Equip Icon:
 *   - The icon used for the Equip command.
 * 
 *   Add Optimize Command?:
 *   - Add the "Optimize" command to the Command Window?
 * 
 *     Optimize Icon:
 *     - The icon used for the Optimize command.
 * 
 *   Add Clear Command?:
 *   - Add the "Clear" command to the Command Window?
 * 
 *     Clear Icon:
 *     - The icon used for the Clear command.
 *
 * ---
 *
 * Remove Equip
 * 
 *   Icon:
 *   - Icon used for equipment removal.
 * 
 *   Text:
 *   - Text used for equipment removal.
 * 
 *   Use SHIFT Shortcut?:
 *   - Add the "Shift" button as a shortcut key to removing items?
 *
 * ---
 *
 * Rulings
 * 
 *   Equip-Adjust HP/MP:
 *   - Adjust HP/MP differences after changing equips with MaxHP/MaxMP values.
 * 
 *   Non-Removable Types:
 *   - Insert ID's of the Equipment Types that must always have an item
 *     equipped and cannot be empty.
 * 
 *   Non-Optimized Types:
 *   - Insert ID's of the Equipment Types that will be ignored when equipment
 *     is being optimized.
 *
 * ---
 *
 * Button Assist Window
 *
 *   SHIFT: Remove:
 *   - Button assist text used for the SHIFT Remove Shortcut.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Shop Menu Settings
 * ============================================================================
 *
 * These Plugin Parameters allow you a number of options to adjust the Shop
 * Menu Scene. These options range from enabling an updated and modern layout,
 * adjust how various key visual aspects appear, and determine how prices can
 * be affected when it comes to selling them or buying them (for coders).
 *
 * ---
 *
 * General
 * 
 *   Use Updated Layout:
 *   - Use the Updated Shop Layout provided by this plugin?
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
 * Switches:
 * 
 *   Switch: Buy:
 *   - Buying items in the Shop Scene turns this Switch to ON.
 *   - Switch reverts to OFF whenever the Shop Scene opens.
 * 
 *   Switch: Sell
 *   - Selling items in the Shop Scene turns this Switch to ON.
 *   - Switch reverts to OFF whenever the Shop Scene opens.
 * 
 * ---
 *
 * Command Window
 * 
 *   Hide Unavailable?:
 *   - Hide all unavailable commands like when a shop is set to Purchase Only?
 * 
 *   Style:
 *   - How do you wish to draw commands in the Command Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 * 
 *   Text Align:
 *   - Text alignment for the Command Window.
 * 
 *   Buy Icon:
 *   - The icon used for the Buy command.
 * 
 *   Sell Icon:
 *   - The icon used for the Sell command.
 * 
 *   Cancel Icon:
 *   - The icon used for the Cancel command.
 * 
 *   Rename "Cancel":
 *   - Rename Cancel to something more logical for the Shop Menu Scene.
 *
 * ---
 *
 * Prices
 * 
 *   Sell Price Rate:
 *   - The default sell price rate.
 * 
 *   JS: Buy Price:
 *   - Modificatons made to the buy price before finalizing it.
 * 
 *   JS: Sell Price:
 *   - Modificatons made to the sell price before finalizing it.
 *
 * ---
 *
 * Button Assist Window
 *
 *   Small Increment:
 *   Large Increment:
 *   - Text used for changing amount bought/sold.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Shop Status Window
 * ============================================================================
 *
 * These Plugin Parameters focuses on the Shop Status Window and determines how
 * its data is displayed.
 *
 * ---
 *
 * General
 * 
 *   Window Width:
 *   - The usual width of the status window.
 * 
 *   Parameter Font Size:
 *   - Font size used for parameter changes.
 * 
 *   Translucent Opacity:
 *   - Opacity setting used for translucent window objects.
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
 * Equipment Data
 * 
 *   Already Equipped:
 *   - Marker used to show an actor cannot equip an item.
 * 
 *   Can't Equip:
 *   - Marker used to show an actor cannot equip an item.
 * 
 *   No Changes:
 *   - Marker used to show no changes have occurred.
 * 
 *   JS: Draw Equip Data:
 *   - Code used to draw the equipment data for the Shop Status Window.
 *
 * ---
 *
 * Item Data
 * 
 *   Max State/Buff Icons:
 *   - Maximum number of icons that can be displayed for Add/Remove
 *     States/Buffs.
 * 
 *   Multiplier Standard:
 *   - Constant standard to filter out random values when calculating the
 *     damage multiplier.
 * 
 *   JS: Draw Item Data:
 *   - Code used to draw the item data for the Shop Status Window.
 *
 * ---
 *
 * Vocabulary
 * 
 *   Consumable:
 *   Occasions:
 *   Scope:
 *   Speed:
 *   Success Rate:
 *   Repeats:
 *   Hit Type:
 *   Element:
 *   Damage Type:
 *   Effects:
 *   - Vocabulary used for these data entries.
 *   - Some of these have Plugin Parameters have sub-entries.
 * 
 *   NOTE: Regarding Damage Labels
 * 
 *   If Visu_1_BattleCore is installed, priority goes to its Damage Style
 *   settings. The label displayed is based on the damage style settings in
 *   place for that specific skill or item.
 * 
 *   Go to Battle Core > Plugin Parameters > Damage Settings > Style List >
 *   pick the damage style you want to edit > Damage Label and change the
 *   text settings you'd like there.
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
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.30: July 2, 2021
 * * Documentation Update!
 * ** Added an extra note to the help file for the following:
 *    Plugin Parameters > Item Menu Settings > List Window > Columns
 * *** If you are using the VisuStella MZ Core Engine and the "Modern Controls"
 *     Plugin Parameter, please read through that section in case you have any
 *     questions about how to switch between categories when using multiple
 *     columns of items at a time.
 *    
 * 
 * Version 1.29: June 25, 2021
 * * Compatibility Update
 * ** Compatibility update with RPG Maker MZ 1.3.0+.
 * * Feature Update!
 * ** Phantom data when changing equipment types in the database should no
 *    longer affect actors with cached equip ID's. Update made by Arisu.
 * 
 * Version 1.28: June 4, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.27: May 21, 2021
 * * Bug Fixes!
 * ** Using the mouse right click in the Equip Scene while inside of the item
 *    to slot window will no longer exit the Equip Scene. Fix made by Yanfly.
 * 
 * Version 1.26: April 30, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** "VisuStella MZ Compatibility" added VisuMZ_1_BattleCore section regarding
 *    Damage Multiplier and Healing Multiplier vocabulary settings to reduce
 *    commonly asked questions.
 * * New Features!
 * ** New notetags added by Irina and sponsored by Archeia:
 * *** <Shop Picture Name: filename>
 * *** <Shop Picture Layer: x>
 * *** <Shop Picture Max Width: x>
 * *** <Shop Picture Max Height: y>
 * *** <Shop Picture Max Dimensions: x, y>
 * *** <Shop Picture Alignment: x>
 * *** <Shop Picture Position: y>
 * *** <Shop Picture Offset X: +x>
 * *** <Shop Picture Offset X: -x>
 * *** <Shop Picture Offset Y: +y>
 * *** <Shop Picture Offset Y: -y>
 * *** <Shop Picture Offset: +x, +y>
 * *** <Shop Picture Offset: -x, -y>
 * *** <Shop Picture Opacity: x>
 * *** <Shop Picture Opacity: x%>
 * **** Add images from the game project's img/pictures/ folder to display in
 *      the Shop Status Window.
 * 
 * Version 1.25: April 23, 2021
 * * Documentation Update!
 * ** Added clarity to the <param: +x> and <param: -x> notetags:
 * *** These notetags do NOT work with X Parameters, S Parameters, or any
 *     custom parameters. These notetags ONLY work with the base parameters.
 * 
 * Version 1.24: April 16, 2021
 * * Bug Fixes!
 * ** Changing an actor's equipment slots to past their original amount will no
 *    longer yield errors with duplicate slot types. Fix made by Arisu.
 * ** Completely selling an item should now refresh the help window to the new
 *    selected item's help description. Fix made by Arisu.
 * * Optimization Update!
 * ** Non-removable equipment restrictions for the equipment scene are now
 *    better optimized. Update made by Olivia.
 * 
 * Version 1.23: April 2, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.22: March 26, 2021
 * * Documentation Update!
 * ** Added "VisuStella MZ Compatibility" section for detailed compatibility
 *    explanations with the VisuMZ_4_BreakShields plugin.
 * 
 * Version 1.21: March 5, 2021
 * * Feature Update!
 * ** Custom equipment slots are disabled during Battle Testing for better
 *    accuracy and results.
 * 
 * Version 1.20: February 26, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Irina and sponsored by AndyL:
 * *** Plugin Parameters > Shop Menu Settings > Switches > Switch: Buy
 * *** Plugin Parameters > Shop Menu Settings > Switches > Switch: Sell
 * **** Buying/selling items in the Shop Scene turns this Switch to ON.
 * **** Switch reverts to OFF whenever the Shop Scene opens.
 * **** These switches can be used after a "Shop Processing" event command to
 *      determine if the player has bought an item, bought and sold an item,
 *      sold an item, or neither.
 * 
 * Version 1.19: January 29, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Irina.
 * *** <Equip Copy Limit: x>
 * **** Sets a maximum number of copies that the actor can wear of this
 *      equipment. Usage Example: Actors can only equip one copy of the
 *      "One-of-a-Kind Ring" on at any time despite having empty accessory
 *      slots because the ring has a <Equip Copy Limit: 1> notetag.
 * *** <Equip Weapon Type Limit: x>
 * **** This weapon cannot be equipped with other weapons of the same type once
 *      the limited amount has been reached. Usage Example: A dualwielding
 *      warrior who can only equip one sword and a dagger but never two swords
 *      or two daggers because the swords and daggers all have the
 *      <Equip Weapon Type Limit: 1> notetags on them.
 * *** <Equip Armor Type Limit: x>
 * **** This armor cannot be equipped with other armors of the same type once
 *      the limited amount has been reached. Usage Example: People cannot equip
 *      more than two glove accessories on at a time because the glove is a
 *      "Glove" armor-type and each glove item has the
 *      <Equip Armor Type Limit: 2> notetags on them.
 * 
 * Version 1.18: January 15, 2021
 * * Bug Fixes!
 * ** Pressing "Shift" to remove equipment will now refresh the status window
 *    unlike before. Fix made by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameters added
 * *** Plugin Parameters > Item Menu Settings > Background Type
 * 
 * Version 1.17: January 1, 2021
 * * Bug Fixes!
 * ** Equipping should be working properly again. Fix made by Yanfly.
 * 
 * Version 1.16: December 25, 2020
 * * Bug Fixes!
 * ** Equip-Adjust HP/MP should work properly now. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added more clarity for <JS Item Enable> to state that if the VisuStella
 *    Battle Core is installed, then all battle scope items are visible, but
 *    not necessarily enabled if they are disabled otherwise.
 * 
 * Version 1.15: December 18, 2020
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Unusable items on an individual-actor basis will no
 *    longer be overwritten by party-based usability for battle. Fix by Yanfly.
 * * Documentation Update!
 * ** Added more clarity for <JS Item Enable> to state that it removes the
 *    usable item from visibility as well if the actor unable to use it is the
 *    only person in the party.
 * 
 * Version 1.14: December 11, 2020
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.13: December 4, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New Plugin Commands added by Arisu!
 * *** Actor: Change Equip Slots
 * *** Actor: Reset Equip Slots
 * **** These plugin commands allow you to forcefully change the equip slots
 *      available to an actor regardless of the slots provided by its class as
 *      well as reset them.
 * 
 * Version 1.12: November 15, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.11: November 8, 2020
 * * Bug Fix!
 * ** Font size ratio for the shop status window now scales to a hard coded
 *    value to prevent smaller font sizes from expanding icon sizes. Fix made
 *    by Arisu.
 * * Feature Update!
 * ** Currency display in the shop menu is now reflected upon how the plugin
 *    parameters set them to display. Update made by Arisu.
 * 
 * Version 1.10: November 1, 2020
 * * Feature Update!
 * ** Modern Controls compatibility with Core Engine no longer enables the
 *    Item Categories window and child classes to utilize the Home/End keys.
 * 
 * Version 1.09: October 25, 2020
 * * Bug Fixes!
 * ** "All Items" category should now display the "Items" text. Fix by Irina.
 * ** WType, AType, and EType categories now work with text. Fix by Irina.
 *
 * Version 1.08: October 18, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.07: October 11, 2020
 * * Bug Fixes!
 * ** XParams and SParams in the Window_EquipStatus window will no longer show
 *    a non-percentile difference if the original value is not a whole value.
 *    Fix made by Yanfly.
 * 
 * Version 1.06: October 4, 2020
 * * Bug Fixes!
 * ** Select Item event command now displays the default amount of columns
 *    instead of whatever setting is made with the plugin parameters.
 * 
 * Version 1.05: September 27, 2020
 * * Bug Fixes!
 * ** When using the updated shop layout, leaving the sell option will no
 *    longer cause the dummy window to appear.
 * * Documentation Update
 * ** "Use Updated Layout" plugin parameters now have the added clause:
 *    "This will override the Core Engine windows settings." to reduce
 *    confusion. Added by Irina.
 * 
 * Version 1.04: September 13, 2020
 * * Bug Fixes!
 * ** Pressing Shift to quickly remove equipment should no longer crash the
 *    game. This will also clear the help window text. Fix made by Arisu.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** If both Optimize and Clear commands have been removed and using modern
 *    controls, pressing up at the top of the slot window list will not go to
 *    the window. Fix made by Yanfly.
 * ** If both Optimize and Clear commands have been removed, the window will no
 *    longer appear and the slot window will be moved upward to fill any empty
 *    spaces. Fix made by Yanfly.
 * * New Features!
 * ** New Plugin Parameter added in NEW! Label to let you adjust the font face.
 * ** New Plugin Parameters added in Equip Menu Scene Settings for disabling
 *    the back rectangles and/or changing their colors.
 * ** New Plugin Parameters added in Shop Status Window Settings for disabling
 *    the back rectangles and/or changing their colors.
 * 
 * Version 1.02: August 30, 2020
 * * Documentation Fix!
 * ** Added: NOTE: Regarding Damage Labels
 * *** If Visu_1_BattleCore is installed, priority goes to its Damage Style
 *   settings. The label displayed is based on the damage style settings in
 *   place for that specific skill or item.
 * *** Go to Battle Core > Plugin Parameters > Damage Settings > Style List >
 *   pick the damage style you want to edit > Damage Label and change the
 *   text settings you'd like there.
 * *** Documentation update added by Yanfly.
 * 
 * Version 1.01: August 23, 2020
 * * Added failsafe to prevent non-existent equipment (because the database
 *   entries have been deleted) from being equipped as initial equipment.
 *   Fix made by Olivia.
 *
 * Version 1.00: August 20, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorChangeEquipSlots
 * @text Actor: Change Equip Slots
 * @desc Forcefully change the actor(s) equip slots.
 * These will persist through class changes.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 * 
 * @arg Slots:arraystr
 * @text Equip Slots
 * @type string[]
 * @desc Insert the equip slots you want the actor(s) to have.
 * These entries are case-sensitive.
 * @default ["Weapon","Shield","Head","Body","Accessory"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorResetEquipSlots
 * @text Actor: Reset Equip Slots
 * @desc Reset any forced equip slots for the actor(s).
 * Equip slots will then be based on class.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BatchShop
 * @text Shop: Advanced
 * @desc Make it easier to put together inventories for a shop.
 * WARNING: Does not allow for event-specific prices.
 *
 * @arg Step1
 * @text Step 1: Item ID's
 *
 * @arg Step1Start:num
 * @text Range Start
 * @parent Step1
 * @type item
 * @desc Select which Item ID to start from.
 * @default 1
 *
 * @arg Step1End:num
 * @text Range End
 * @parent Step1
 * @type item
 * @desc Select which Item ID to end at.
 * @default 4
 *
 * @arg Step2
 * @text Step 2: Weapon ID's
 *
 * @arg Step2Start:num
 * @text Range Start
 * @parent Step2
 * @type weapon
 * @desc Select which Weapon ID to start from.
 * @default 1
 *
 * @arg Step2End:num
 * @text Range End
 * @parent Step2
 * @type weapon
 * @desc Select which Weapon ID to end at.
 * @default 4
 *
 * @arg Step3
 * @text Step 3: Armor ID's
 *
 * @arg Step3Start:num
 * @text Range Start
 * @parent Step3
 * @type armor
 * @desc Select which Armor ID to start from.
 * @default 1
 *
 * @arg Step3End:num
 * @text Range End
 * @parent Step3
 * @type armor
 * @desc Select which Armor ID to end at.
 * @default 4
 *
 * @arg PurchaseOnly:eval
 * @text Step 4: Purchase Only?
 * @type boolean
 * @on Purchase-Only
 * @off Sell Accessible
 * @desc Make the shop purchase-only?
 * @default false
 * 
 * @arg Optional
 * 
 * @arg Blacklist:arraystr
 * @text Blacklisted Categories
 * @parent Optional
 * @type string[]
 * @desc A list of categories to blacklist from the shop.
 * Not used if empty. Mark categories with <Category: x>
 * @default []
 * 
 * @arg Whitelist:arraystr
 * @text Whitelisted Categories
 * @parent Optional
 * @type string[]
 * @desc A list of categories to whitelist for the shop.
 * Not used if empty. Mark categories with <Category: x>
 * @default []
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
 * @param ItemsEquipsCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ItemScene:struct
 * @text Item Menu Settings
 * @type struct<ItemScene>
 * @desc Change the Item Menu Scene settings.
 * @default {"General":"","EnableLayout:eval":"true","LayoutStyle:str":"upper/left","ListWindow":"","ListWindowCols:num":"1","ItemQt":"","MaxItems:num":"99","MaxWeapons:num":"99","MaxArmors:num":"99","ItemQuantityFmt:str":"×%1","ItemQuantityFontSize:num":"22","ShopStatusWindow":"","ShowShopStatus:eval":"true","ItemSceneAdjustItemList:eval":"true","ItemMenuStatusRect:func":"\"const width = this.statusWidth();\\nconst height = this._itemWindow.height;\\nconst x = Graphics.boxWidth - width;\\nconst y = this._itemWindow.y;\\nreturn new Rectangle(x, y, width, height);\"","ButtonAssist":"","buttonAssistCategory:str":"Switch Category"}
 *
 * @param Categories:struct
 * @text Item Categories
 * @parent ItemScene:struct
 * @type struct<Categories>
 * @desc Change the categories displayed in the Item/Shop menus.
 * @default {"MainList":"","List:arraystruct":"[\"{\\\"Type:str\\\":\\\"FieldUsable\\\",\\\"Icon:num\\\":\\\"208\\\"}\",\"{\\\"Type:str\\\":\\\"BattleUsable\\\",\\\"Icon:num\\\":\\\"218\\\"}\",\"{\\\"Type:str\\\":\\\"NeverUsable\\\",\\\"Icon:num\\\":\\\"302\\\"}\",\"{\\\"Type:str\\\":\\\"AllWeapons\\\",\\\"Icon:num\\\":\\\"97\\\"}\",\"{\\\"Type:str\\\":\\\"EType:2\\\",\\\"Icon:num\\\":\\\"128\\\"}\",\"{\\\"Type:str\\\":\\\"EType:3\\\",\\\"Icon:num\\\":\\\"131\\\"}\",\"{\\\"Type:str\\\":\\\"EType:4\\\",\\\"Icon:num\\\":\\\"137\\\"}\",\"{\\\"Type:str\\\":\\\"EType:5\\\",\\\"Icon:num\\\":\\\"145\\\"}\",\"{\\\"Type:str\\\":\\\"KeyItems\\\",\\\"Icon:num\\\":\\\"195\\\"}\"]","Style:str":"icon","TextAlign:str":"center","Vocabulary":"","HiddenItemA:str":"Special Items","HiddenItemB:str":"Unique Items","Consumable:str":"Consumable","Nonconsumable:str":"Nonconsumable","AlwaysUsable:str":"Usable","BattleUsable:str":"Battle","FieldUsable:str":"Field","NeverUsable:str":"Materials"}
 *
 * @param New:struct
 * @text NEW! Labels
 * @parent ItemScene:struct
 * @type struct<NewLabel>
 * @desc Change how NEW! Labels apply to your game project.
 * @default {"Enable:eval":"true","Icon:num":"0","Text:str":"NEW!","FontColor:str":"17","FontFace:str":"Verdana","FontSize:str":"16","FadeLimit:num":"360","FadeSpeed:num":"4","OffsetX:num":"0","OffsetY:num":"4"}
 *
 * @param EquipScene:struct
 * @text Equip Menu Settings
 * @type struct<EquipScene>
 * @desc Adjust the settings regarding the Equip Menu Scene.
 * @default {"General":"","EnableLayout:eval":"true","ParamValueFontSize:num":"22","MenuPortraits:eval":"true","DrawPortraitJS:func":"\"// Declare Variables\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst x1 = padding;\\nconst x2 = this.innerWidth - 128 - padding;\\n\\n// Draw Menu Image\\nthis.drawItemActorMenuImage(this._actor, 0, 0, this.innerWidth, this.innerHeight);\\n\\n// Draw Data\\nthis.drawActorName(this._actor, x1, lineHeight * 0);\\nthis.drawActorClass(this._actor, x1, lineHeight * 1);\\nthis.drawActorIcons(this._actor, x1, lineHeight * 2);\\nthis.drawActorLevel(this._actor, x2, lineHeight * 0);\\nthis.placeBasicGauges(this._actor, x2, lineHeight * 1);\"","DrawFaceJS:func":"\"// Declare Variables\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nconst x = Math.floor(this.innerWidth / 2);\\nconst limitHeight = this.innerHeight - (this.actorParams().length * lineHeight);\\nconst actorX = Math.floor((x - ImageManager.faceWidth) / 2);\\nconst actorY = Math.floor((limitHeight - ImageManager.faceHeight) / 2);\\nlet dataHeight = lineHeight * 3;\\ndataHeight += gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\\nconst dataY = Math.floor((limitHeight - dataHeight) / 2);\\n\\n// Draw Data\\nthis.drawActorFace(this._actor, actorX, actorY, ImageManager.faceWidth, ImageManager.faceHeight);\\nthis.drawActorIcons(this._actor, actorX + 16, actorY + ImageManager.faceHeight - lineHeight);\\nthis.drawActorName(this._actor, x, dataY + lineHeight * 0);\\nthis.drawActorLevel(this._actor, x, dataY + lineHeight * 1);\\nthis.drawActorClass(this._actor, x, dataY + lineHeight * 2);\\nthis.placeBasicGauges(this._actor, x, dataY + lineHeight * 3);\"","DrawParamJS:func":"\"// Declare variables\\nconst params = this.actorParams();\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst baseX = 0;\\nconst baseY = this.innerHeight - params.length * lineHeight;\\nconst baseWidth = this.innerWidth;\\nconst valueFontSize = this.paramValueFontSize();\\n\\n// Calculate Widths\\nlet paramNameWidth = Math.max(...params.map(param => this.textWidth(TextManager.param(param))));\\nparamNameWidth += padding * 2;\\nif (this.isUseParamNamesWithIcons()) {\\n    paramNameWidth += ImageManager.iconWidth + 4;\\n}\\nlet arrowWidth = this.rightArrowWidth();\\nconst totalDivides = this.innerWidth >= 500 ? 3 : 2;\\nlet paramValueWidth = Math.floor((baseWidth - paramNameWidth - arrowWidth) / totalDivides);\\nparamNameWidth = baseWidth - (paramValueWidth * totalDivides) - arrowWidth;\\n\\n// Draw Parameters\\nlet x = baseX;\\nlet y = baseY;\\nlet value = 0;\\nlet diffValue = 0;\\nlet alter = 2;\\nfor (const paramId of params) {\\n    // Draw Param Name\\n    this.drawItemDarkRect(x, y, paramNameWidth, lineHeight, alter);\\n    this.drawUpdatedParamName(paramId, x, y, paramNameWidth);\\n    this.resetFontSettings();\\n    x += paramNameWidth;\\n\\n    // Draw Param Before\\n    this.contents.fontSize = valueFontSize;\\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n    this.drawUpdatedBeforeParamValue(paramId, x, y, paramValueWidth);\\n    this.resetFontSettings();\\n    x += paramValueWidth;\\n\\n    // Draw Arrow\\n    this.drawItemDarkRect(x, y, arrowWidth, lineHeight, alter);\\n    this.drawRightArrow(x, y);\\n    x += arrowWidth;\\n\\n    // Draw Param After\\n    this.contents.fontSize = valueFontSize;\\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n    this.drawUpdatedAfterParamValue(paramId, x, y, paramValueWidth);\\n    x += paramValueWidth;\\n\\n    // Draw Param Change\\n    if (totalDivides > 2) {\\n        this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n        this.drawUpdatedParamValueDiff(paramId, x, y, paramValueWidth);\\n    }\\n\\n    // Prepare Next Parameter\\n    x = baseX;\\n    y += lineHeight;\\n    alter = alter === 2 ? 1 : 2;\\n}\"","LayoutStyle:str":"upper/right","StatusWindowWidth:num":"312","DrawBackRect:eval":"true","BackRectColor:str":"19","Command":"","CmdStyle:str":"auto","CmdTextAlign:str":"center","CmdIconEquip:num":"136","CommandAddOptimize:eval":"false","CmdIconOptimize:num":"137","CommandAddClear:eval":"false","CmdIconClear:num":"135","RemoveEquip":"","RemoveEquipIcon:num":"16","RemoveEquipText:str":"Remove","ShiftShortcutKey:eval":"true","Rulings":"","EquipAdjustHpMp:eval":"true","NonRemoveETypes:arraynum":"[]","NonOptimizeETypes:arraynum":"[]","ButtonAssist":"","buttonAssistRemove:str":"Unequip"}
 *
 * @param ShopScene:struct
 * @text Shop Menu Settings
 * @type struct<ShopScene>
 * @desc Change the Shop Menu Scene settings.
 * @default {"General":"","EnableLayout:eval":"true","LayoutStyle:str":"upper/left","Command":"","CmdHideDisabled:eval":"true","CmdStyle:str":"auto","CmdTextAlign:str":"center","CmdIconBuy:num":"208","CmdIconSell:num":"314","CmdIconCancel:num":"82","CmdCancelRename:str":"Exit","Prices":"","SellPriceRate:num":"0.50","BuyPriceJS:func":"\"// Declare variables\\nlet item = arguments[0];\\nlet price = arguments[1];\\n\\n// Return the finalized price\\nreturn price;\"","SellPriceJS:func":"\"// Declare variables\\nlet item = arguments[0];\\nlet price = arguments[1];\\n\\n// Return the finalized price\\nreturn price;\"","ButtonAssist":"","buttonAssistSmallIncrement:str":"-1/+1","buttonAssistLargeIncrement:str":"-10/+10"}
 *
 * @param StatusWindow:struct
 * @text Shop Status Window
 * @parent ShopScene:struct
 * @type struct<StatusWindow>
 * @desc Change the Item Status Window settings.
 * @default {"General":"","Width:num":"352","ParamChangeFontSize:num":"22","Translucent:num":"64","DrawBackRect:eval":"true","BackRectColor:str":"19","EquipData":"","AlreadyEquipMarker:str":"E","CannotEquipMarker:str":"-","NoChangeMarker:str":"-","DrawEquipData:func":"\"// Set Variables\\nconst lineHeight = this.lineHeight();\\nconst paramheight = this.gaugeLineHeight() + 8;\\nlet x = 0;\\nlet y = 0;\\nlet width = this.innerWidth;\\nlet height = this.innerHeight;\\nlet hw = Math.floor(width / 2);\\nlet hx = x + width - hw;\\n\\n// Draw Item Name, Type, and Quantity\\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\\nthis.drawItemDarkRect(x, y, width);\\ny += lineHeight;\\nif (this.drawItemEquipType(x, y, hw)) y += 0;\\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\\n\\n// Draw Parameter Names\\nconst params = this.actorParams();\\nconst backY = y;\\ny = height - (params.length * paramheight) - 4;\\nlet paramX = x;\\nlet paramWidth = 0;\\nlet tableY = y;\\nfor (const paramId of params) {\\n    paramWidth = Math.max(this.drawParamName(paramId, x + 4, y + 4, width), paramWidth);\\n    y += paramheight;\\n}\\n\\n// Draw Actor Data\\nconst actorMax = $gameParty.maxBattleMembers();\\nconst actorWidth = Math.floor((width - paramWidth) / actorMax);\\nparamWidth = width - (actorWidth * actorMax);\\nfor (const actor of $gameParty.battleMembers()) {\\n    const index = $gameParty.battleMembers().indexOf(actor);\\n    const actorX = paramX + paramWidth + (index * actorWidth);\\n    this.changePaintOpacity(actor.canEquip(this._item));\\n    this.drawActorCharacter(actor, actorX + (actorWidth / 2), tableY);\\n    let actorY = tableY;\\n\\n    // Draw Parameter Changes\\n    for (const paramId of params) {\\n        const diffY = actorY - ((lineHeight - paramheight) / 2);\\n        this.drawActorParamDifference(actor, paramId, actorX, diffY, actorWidth);\\n        actorY += paramheight;\\n    }\\n}\\n\\n// Draw Back Rectangles\\nthis.drawItemDarkRect(paramX, backY, paramWidth, tableY - backY);\\nfor (let i = 0; i < actorMax; i++) {\\n    const actorX = paramX + paramWidth + (i * actorWidth);\\n    this.drawItemDarkRect(actorX, backY, actorWidth, tableY - backY);\\n}\\nfor (const paramId of params) {\\n    this.drawItemDarkRect(paramX, tableY, paramWidth, paramheight);\\n    for (let i = 0; i < actorMax; i++) {\\n        const actorX = paramX + paramWidth + (i * actorWidth);\\n        this.drawItemDarkRect(actorX, tableY, actorWidth, paramheight);\\n    }\\n    tableY += paramheight;\\n}\"","ItemData":"","ItemGeneral":"","MaxIcons:num":"8","MultiplierStandard:num":"1000000","DrawItemData:func":"\"const lineHeight = this.lineHeight();\\nlet x = 0;\\nlet y = 0;\\nlet width = this.innerWidth;\\nlet height = this.innerHeight;\\nlet hw = Math.floor(width / 2);\\nlet hx = x + width - hw;\\n\\n// Draw Item Name and Quantity\\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\\nthis.drawItemDarkRect(x, y, width);\\ny += lineHeight;\\n\\n// Draw Main Item Properties\\nif (this.drawItemConsumable(x, y, hw)) y += 0;\\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\\nif (this._item.occasion < 3) {\\n    y = this.drawItemDamage(x, y, width);\\n    y = this.drawItemEffects(x, y, width);\\n}\\ny = this.drawItemCustomEntries(x, y, width);\\n\\n// Draw Remaining Item Properties\\nif (this._item.occasion < 3) {\\n    if (this.drawItemOccasion(x, y, hw)) y += 0;\\n    if (this.drawItemScope(hx, y, hw)) y += lineHeight;\\n    if (this.drawItemHitType(x, y, hw)) y += 0;\\n    if (this.drawItemSuccessRate(hx, y, hw)) y += lineHeight;\\n    if (this.drawItemSpeed(x, y, hw)) y += 0;\\n    if (this.drawItemRepeats(hx, y, hw)) y += lineHeight;\\n}\\n\\n// Fill Rest of the Window\\nthis.drawItemDarkRect(x, y, width, height - y);\"","Vocabulary":"","LabelConsume:str":"Consumable","Consumable:str":"✔","NotConsumable:str":"✘","Occasions":"","Occasion0:str":"Anytime Use","Occasion1:str":"Battle-Only","Occasion2:str":"Field-Only","Occasion3:str":"-","Scope":"","Scope0:str":"No Target","Scope1:str":"1 Foe","Scope2:str":"All Foes","Scope3:str":"Random Foe","Scope4:str":"2 Random Foes","Scope5:str":"3 Random Foes","Scope6:str":"4 Random Foes","Scope7:str":"1 Ally","Scope8:str":"Alive Allies","Scope9:str":"Dead Ally","Scope10:str":"Dead Allies","Scope11:str":"User","Scope12:str":"Any Ally","Scope13:str":"All Allies","Scope14:str":"Everybody","BattleCore":"","ScopeRandomAny:str":"%1 Random Units","ScopeRandomEnemies:str":"%1 Random Foes","ScopeRandomAllies:str":"%1 Random Allies","ScopeAlliesButUser:str":"Other Allies","LabelSpeed:str":"Speed","Speed2000:str":"Fastest","Speed1000:str":"Faster","Speed1:str":"Fast","Speed0:str":"Normal","SpeedNeg999:str":"Slow","SpeedNeg1999:str":"Slower","SpeedNeg2000:str":"Slowest","LabelSuccessRate:str":"Accuracy","LabelRepeats:str":"Hits","LabelHitType:str":"Type","HitType0:str":"Neutral","HitType1:str":"Physical","HitType2:str":"Magical","LabelElement:str":"Element","ElementWeapon:str":"\\I[97]Weapon","ElementNone:str":"\\I[160]No Element","DamageType":"","DamageType1:str":"%1 Damage Multiplier","DamageType2:str":"%1 Damage Multiplier","DamageType3:str":"%1 Recovery Multiplier","DamageType4:str":"%1 Recovery Multiplier","DamageType5:str":"%1 Drain Multiplier","DamageType6:str":"%1 Drain Multiplier","Effects":"","LabelRecoverHP:str":"%1 Recovery","LabelRecoverMP:str":"%1 Recovery","LabelRecoverTP:str":"%1 Recovery","LabelSelfGainTP:str":"User %1","LabelDamageHP:str":"%1 Damage","LabelDamageMP:str":"%1 Damage","LabelDamageTP:str":"%1 Damage","LabelApply:str":"Applies","LabelRemove:str":"Removes"}
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
 * Item Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ItemScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Item Menu Layout provided by this plugin?
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
 * @param ItemQt
 * @text Item Quantity
 *
 * @param MaxItems:num
 * @text Item Max
 * @parent ItemQt
 * @desc The default maximum quantity for items.
 * @default 99
 *
 * @param MaxWeapons:num
 * @text Weapon Max
 * @parent ItemQt
 * @desc The default maximum quantity for weapons.
 * @default 99
 *
 * @param MaxArmors:num
 * @text Armor Max
 * @parent ItemQt
 * @desc The default maximum quantity for armors.
 * @default 99
 *
 * @param ItemQuantityFmt:str
 * @text Quantity Format
 * @parent ItemQt
 * @desc How to display an item's quantity.
 * %1 - Item Quantity
 * @default ×%1
 *
 * @param ItemQuantityFontSize:num
 * @text Font Size
 * @parent ItemQt
 * @desc Default font size for item quantity.
 * @default 22
 *
 * @param ShopStatusWindow
 * @text Shop Status Window
 *
 * @param ShowShopStatus:eval
 * @text Show in Item Menu?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show the Shop Status Window in the Item Menu?
 * This is enabled if the Updated Layout is on.
 * @default true
 *
 * @param ItemSceneAdjustItemList:eval
 * @text Adjust List Window?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the Item List Window in the Item Menu if using the Shop Status Window?
 * @default true
 *
 * @param ItemMenuStatusBgType:num
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
 * @param ItemMenuStatusRect:func
 * @text JS: X, Y, W, H
 * @parent ShopStatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this Status Window in the Item Menu.
 * @default "const width = this.statusWidth();\nconst height = this._itemWindow.height;\nconst x = Graphics.boxWidth - width;\nconst y = this._itemWindow.y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistCategory:str
 * @text Switch Category
 * @parent ButtonAssist
 * @desc Button assist text used for switching categories.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default Switch Category
 *
 */
/* ----------------------------------------------------------------------------
 * Item Categories
 * ----------------------------------------------------------------------------
 */
/*~struct~Categories:
 *
 * @param MainList
 * @text List
 * 
 * @param List:arraystruct
 * @text Category List
 * @parent MainList
 * @type struct<Category>[]
 * @desc A list of the item categories displayed in the Item/Shop menus.
 * @default ["{\"Type:str\":\"RegularItems\",\"Icon:num\":\"208\"}","{\"Type:str\":\"AllWeapons\",\"Icon:num\":\"97\"}","{\"Type:str\":\"AllArmors\",\"Icon:num\":\"137\"}","{\"Type:str\":\"KeyItems\",\"Icon:num\":\"195\"}"]
 *
 * @param Style:str
 * @text Category Style
 * @parent MainList
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw categorie entries in the Category Window?
 * @default icon
 *
 * @param TextAlign:str
 * @text Text Alignment
 * @parent MainList
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Decide how you want the text to be aligned.
 * @default center
 *
 * @param Vocabulary
 *
 * @param HiddenItemA:str
 * @text Hidden Item A
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Special Items
 *
 * @param HiddenItemB:str
 * @text Hidden Item B
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Unique Items
 *
 * @param Consumable:str
 * @text Consumable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Consumable
 *
 * @param Nonconsumable:str
 * @text Nonconsumable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Nonconsumable
 *
 * @param AlwaysUsable:str
 * @text Always Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Usable
 *
 * @param BattleUsable:str
 * @text Battle Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Battle
 *
 * @param FieldUsable:str
 * @text Field Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Field
 *
 * @param NeverUsable:str
 * @text Never Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Materials
 *
 */
/* ----------------------------------------------------------------------------
 * Category Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Category:
 *
 * @param Type:str
 * @text Type
 * @type combo
 * @option AllItems
 * @option 
 * @option RegularItems
 * @option KeyItems
 * @option HiddenItemA
 * @option HiddenItemB
 * @option 
 * @option Consumable
 * @option Nonconsumable
 * @option 
 * @option AlwaysUsable
 * @option BattleUsable
 * @option FieldUsable
 * @option NeverUsable
 * @option 
 * @option AllWeapons
 * @option WType:x
 * @option 
 * @option AllArmors
 * @option AType:x
 * @option 
 * @option EType:x
 * @option 
 * @option Category:x
 * @option
 * @desc A list of the item categories displayed in the Item/Shop
 * menus. Replace x with ID numbers or text.
 * @default RegularItems
 *
 * @param Icon:num
 * @text Icon
 * @desc Icon used for this category.
 * Use 0 for no icon.
 * @default 0
 *
 * @param SwitchID:num
 * @text Visibility Switch
 * @type switch
 * @desc This Switch must be turned ON in order for the category to show.
 * Use 0 for no Switch requirement.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * New Label Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~NewLabel:
 *
 * @param Enable:eval
 * @text Use NEW! Labels?
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the NEW! Labels or not?
 * @default true
 *
 * @param Icon:num
 * @text Icon
 * @desc The icon index used to represent the NEW! text.
 * Use 0 to not draw any icons.
 * @default 0
 *
 * @param Text:str
 * @text Text
 * @desc The text written on the NEW! Label.
 * @default NEW!
 *
 * @param FontColor:str
 * @text Font Color
 * @parent Text:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 17
 *
 * @param FontFace:str
 * @text Font Face
 * @parent Text:str
 * @desc Font face used for the NEW! Label.
 * @default Verdana
 *
 * @param FontSize:str
 * @text Font Size
 * @parent Text:str
 * @desc The font size used for the NEW! text.
 * @default 16
 *
 * @param FadeLimit:num
 * @text Fade Limit
 * @desc What's the upper opaque limit before reversing?
 * @default 360
 *
 * @param FadeSpeed:num
 * @text Fade Speed
 * @desc What's the fade speed of the NEW! Label?
 * @default 4
 *
 * @param OffsetX:num
 * @text Offset X
 * @desc How much to offset the NEW! Label's X position by.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @desc How much to offset the NEW! Label's Y position by.
 * @default 4
 *
 */
/* ----------------------------------------------------------------------------
 * Equip Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~EquipScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Equip Layout provided by this plugin?
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
 * @default upper/right
 *
 * @param ParamValueFontSize:num
 * @text Param Font Size
 * @parent EnableLayout:eval
 * @desc The font size used for parameter values.
 * @default 22
 *
 * @param MenuPortraits:eval
 * @text Show Menu Portraits?
 * @parent EnableLayout:eval
 * @type boolean
 * @on Use Portraits
 * @off Use Faces
 * @desc If Main Menu Core is installed, display the Menu Portraits
 * instead of the actor's face in the status window?
 * @default true
 *
 * @param DrawPortraitJS:func
 * @text JS: Portrait Upper
 * @parent EnableLayout:eval
 * @type note
 * @desc If Menu Portraits are available, this is code used to draw
 * the upper data like this in the Status Window.
 * @default "// Declare Variables\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst x1 = padding;\nconst x2 = this.innerWidth - 128 - padding;\n\n// Draw Menu Image\nthis.drawItemActorMenuImage(this._actor, 0, 0, this.innerWidth, this.innerHeight);\n\n// Draw Data\nthis.drawActorName(this._actor, x1, lineHeight * 0);\nthis.drawActorClass(this._actor, x1, lineHeight * 1);\nthis.drawActorIcons(this._actor, x1, lineHeight * 2);\nthis.drawActorLevel(this._actor, x2, lineHeight * 0);\nthis.placeBasicGauges(this._actor, x2, lineHeight * 1);"
 *
 * @param DrawFaceJS:func
 * @text JS: Face Upper
 * @parent EnableLayout:eval
 * @type note
 * @desc If faces used used, this is code used to draw the upper
 * data like this in the Status Window.
 * @default "// Declare Variables\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\nconst x = Math.floor(this.innerWidth / 2);\nconst limitHeight = this.innerHeight - (this.actorParams().length * lineHeight);\nconst actorX = Math.floor((x - ImageManager.faceWidth) / 2);\nconst actorY = Math.floor((limitHeight - ImageManager.faceHeight) / 2);\nlet dataHeight = lineHeight * 3;\ndataHeight += gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\nconst dataY = Math.floor((limitHeight - dataHeight) / 2);\n\n// Draw Data\nthis.drawActorFace(this._actor, actorX, actorY, ImageManager.faceWidth, ImageManager.faceHeight);\nthis.drawActorIcons(this._actor, actorX + 16, actorY + ImageManager.faceHeight - lineHeight);\nthis.drawActorName(this._actor, x, dataY + lineHeight * 0);\nthis.drawActorLevel(this._actor, x, dataY + lineHeight * 1);\nthis.drawActorClass(this._actor, x, dataY + lineHeight * 2);\nthis.placeBasicGauges(this._actor, x, dataY + lineHeight * 3);"
 *
 * @param DrawParamJS:func
 * @text JS: Parameter Lower
 * @parent EnableLayout:eval
 * @type note
 * @desc Code to determine how parameters are drawn in the
 * Status Window.
 * @default "// Declare variables\nconst params = this.actorParams();\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst baseX = 0;\nconst baseY = this.innerHeight - params.length * lineHeight;\nconst baseWidth = this.innerWidth;\nconst valueFontSize = this.paramValueFontSize();\n\n// Calculate Widths\nlet paramNameWidth = Math.max(...params.map(param => this.textWidth(TextManager.param(param))));\nparamNameWidth += padding * 2;\nif (this.isUseParamNamesWithIcons()) {\n    paramNameWidth += ImageManager.iconWidth + 4;\n}\nlet arrowWidth = this.rightArrowWidth();\nconst totalDivides = this.innerWidth >= 500 ? 3 : 2;\nlet paramValueWidth = Math.floor((baseWidth - paramNameWidth - arrowWidth) / totalDivides);\nparamNameWidth = baseWidth - (paramValueWidth * totalDivides) - arrowWidth;\n\n// Draw Parameters\nlet x = baseX;\nlet y = baseY;\nlet value = 0;\nlet diffValue = 0;\nlet alter = 2;\nfor (const paramId of params) {\n    // Draw Param Name\n    this.drawItemDarkRect(x, y, paramNameWidth, lineHeight, alter);\n    this.drawUpdatedParamName(paramId, x, y, paramNameWidth);\n    this.resetFontSettings();\n    x += paramNameWidth;\n\n    // Draw Param Before\n    this.contents.fontSize = valueFontSize;\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n    this.drawUpdatedBeforeParamValue(paramId, x, y, paramValueWidth);\n    this.resetFontSettings();\n    x += paramValueWidth;\n\n    // Draw Arrow\n    this.drawItemDarkRect(x, y, arrowWidth, lineHeight, alter);\n    this.drawRightArrow(x, y);\n    x += arrowWidth;\n\n    // Draw Param After\n    this.contents.fontSize = valueFontSize;\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n    this.drawUpdatedAfterParamValue(paramId, x, y, paramValueWidth);\n    x += paramValueWidth;\n\n    // Draw Param Change\n    if (totalDivides > 2) {\n        this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n        this.drawUpdatedParamValueDiff(paramId, x, y, paramValueWidth);\n    }\n\n    // Prepare Next Parameter\n    x = baseX;\n    y += lineHeight;\n    alter = alter === 2 ? 1 : 2;\n}"
 *
 * @param StatusWindowWidth:num
 * @text Status Window Width
 * @parent General
 * @desc The usual width of the status window if using the 
 * non-Updated Equip Menu Layout.
 * @default 312
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
 * @param Command
 * @text Command Window
 *
 * @param CmdStyle:str
 * @text Style
 * @parent Command
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands in the Command Window?
 * @default auto
 *
 * @param CmdTextAlign:str
 * @text Text Align
 * @parent Command
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Command Window.
 * @default center
 *
 * @param CmdIconEquip:num
 * @text Equip Icon
 * @parent Command
 * @desc The icon used for the Equip command.
 * @default 136
 *
 * @param CommandAddOptimize:eval
 * @text Add Optimize Command?
 * @parent Command
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add the "Optimize" command to the Command Window?
 * @default true
 *
 * @param CmdIconOptimize:num
 * @text Optimize Icon
 * @parent CommandAddOptimize:eval
 * @desc The icon used for the Optimize command.
 * @default 137
 *
 * @param CommandAddClear:eval
 * @text Add Clear Command?
 * @parent Command
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add the "Clear" command to the Command Window?
 * @default true
 *
 * @param CmdIconClear:num
 * @text Clear Icon
 * @parent CommandAddClear:eval
 * @desc The icon used for the Clear command.
 * @default 135
 *
 * @param RemoveEquip
 * @text Remove Equip
 *
 * @param RemoveEquipIcon:num
 * @text Icon
 * @parent RemoveEquip
 * @desc Icon used for equipment removal.
 * @default 16
 *
 * @param RemoveEquipText:str
 * @text Text
 * @parent RemoveEquip
 * @desc Text used for equipment removal.
 * @default Remove
 *
 * @param ShiftShortcutKey:eval
 * @text Use SHIFT Shortcut?
 * @parent RemoveEquip
 * @type boolean
 * @on Use
 * @off Don't
 * @desc Add the "Shift" button as a shortcut key to removing items?
 * @default true

 * @param Rulings
 *
 * @param EquipAdjustHpMp:eval
 * @text Equip-Adjust HP/MP
 * @parent Rulings
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Adjust HP/MP differences after changing equips with MaxHP/MaxMP values.
 * @default true
 * 
 * @param NonRemoveETypes:arraynum
 * @text Non-Removable Types
 * @parent Rulings
 * @type number[]
 * @min 1
 * @max 100
 * @desc Insert ID's of the Equipment Types that must always have
 * an item equipped and cannot be empty.
 * @default []
 *
 * @param NonOptimizeETypes:arraynum
 * @text Non-Optimized Types
 * @parent Rulings
 * @type number[]
 * @min 1
 * @max 100
 * @desc Insert ID's of the Equipment Types that will be ignored
 * when equipment is being optimized.
 * @default []
 *
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistRemove:str
 * @text SHIFT: Remove
 * @parent ButtonAssist
 * @desc Button assist text used for the SHIFT Remove Shortcut.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default Unequip
 * 
 */
/* ----------------------------------------------------------------------------
 * Shop Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ShopScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Shop Layout provided by this plugin?
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
 * @param Switches
 *
 * @param SwitchBuy:num
 * @text Switch: Buy
 * @parent Switches
 * @type switch
 * @desc Buying items in the Shop Scene turns this Switch to ON.
 * Switch reverts to OFF whenever the Shop Scene opens.
 * @default 0
 *
 * @param SwitchSell:num
 * @text Switch: Sell
 * @parent Switches
 * @type switch
 * @desc Selling items in the Shop Scene turns this Switch to ON.
 * Switch reverts to OFF whenever the Shop Scene opens.
 * @default 0
 *
 * @param Command
 * @text Command Window
 *
 * @param CmdHideDisabled:eval
 * @text Hide Unavailable?
 * @parent Command
 * @type boolean
 * @on Hide
 * @off Default
 * @desc Hide all unavailable commands like when a shop is set to Purchase Only?
 * @default true
 *
 * @param CmdStyle:str
 * @text Style
 * @parent Command
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands in the Command Window?
 * @default auto
 *
 * @param CmdTextAlign:str
 * @text Text Align
 * @parent Command
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Command Window.
 * @default center
 *
 * @param CmdIconBuy:num
 * @text Buy Icon
 * @parent Command
 * @desc The icon used for the Buy command.
 * @default 208
 *
 * @param CmdIconSell:num
 * @text Sell Icon
 * @parent Command
 * @desc The icon used for the Sell command.
 * @default 314
 *
 * @param CmdIconCancel:num
 * @text Cancel Icon
 * @parent Command
 * @desc The icon used for the Cancel command.
 * @default 82
 *
 * @param CmdCancelRename:str
 * @text Rename "Cancel"
 * @parent Command
 * @desc Rename Cancel to something more logical for the Shop Menu Scene.
 * @default Exit
 *
 * @param Prices
 *
 * @param SellPriceRate:num
 * @text Sell Price Rate
 * @parent Prices
 * @desc The default sell price rate.
 * @default 0.50
 *
 * @param BuyPriceJS:func
 * @text JS: Buy Price
 * @parent Prices
 * @type note
 * @desc Modificatons made to the buy price before finalizing it.
 * @default "// Declare variables\nlet item = arguments[0];\nlet price = arguments[1];\n\n// Return the finalized price\nreturn price;"
 *
 * @param SellPriceJS:func
 * @text JS: Sell Price
 * @parent Prices
 * @type note
 * @desc Modificatons made to the sell price before finalizing it.
 * @default "// Declare variables\nlet item = arguments[0];\nlet price = arguments[1];\n\n// Return the finalized price\nreturn price;"
 * 
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistSmallIncrement:str
 * @text Small Increment
 * @parent ButtonAssist
 * @desc Text used for changing amount bought/sold.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default -1/+1
 *
 * @param buttonAssistLargeIncrement:str
 * @text Large Increment
 * @parent ButtonAssist
 * @desc Text used for changing amount bought/sold.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default -10/+10
 *
 */
/* ----------------------------------------------------------------------------
 * Shop Status Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~StatusWindow:
 *
 * @param General
 *
 * @param Width:num
 * @text Window Width
 * @parent General
 * @desc The usual width of the status window.
 * @default 352
 *
 * @param ParamChangeFontSize:num
 * @text Parameter Font Size
 * @parent General
 * @desc Font size used for parameter changes.
 * @default 22
 *
 * @param Translucent:num
 * @text Translucent Opacity
 * @parent General
 * @desc Opacity setting used for translucent window objects.
 * @default 64
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
 * @param EquipData
 * @text Equipment Data
 *
 * @param AlreadyEquipMarker:str
 * @text Already Equipped
 * @parent EquipData
 * @desc Marker used to show an actor cannot equip an item.
 * @default E
 *
 * @param CannotEquipMarker:str
 * @text Can't Equip
 * @parent EquipData
 * @desc Marker used to show an actor cannot equip an item.
 * @default -
 *
 * @param NoChangeMarker:str
 * @text No Changes
 * @parent EquipData
 * @desc Marker used to show no changes have occurred.
 * @default -
 *
 * @param DrawEquipData:func
 * @text JS: Draw Equip Data
 * @parent EquipData
 * @type note
 * @desc Code used to draw the equipment data for the Shop Status Window.
 * @default "// Set Variables\nconst lineHeight = this.lineHeight();\nconst paramheight = this.gaugeLineHeight() + 8;\nlet x = 0;\nlet y = 0;\nlet width = this.innerWidth;\nlet height = this.innerHeight;\nlet hw = Math.floor(width / 2);\nlet hx = x + width - hw;\n\n// Draw Item Name, Type, and Quantity\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\nthis.drawItemDarkRect(x, y, width);\ny += lineHeight;\nif (this.drawItemEquipType(x, y, hw)) y += 0;\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\n\n// Draw Parameter Names\nconst params = this.actorParams();\nconst backY = y;\ny = height - (params.length * paramheight) - 4;\nlet paramX = x;\nlet paramWidth = 0;\nlet tableY = y;\nfor (const paramId of params) {\n    paramWidth = Math.max(this.drawParamName(paramId, x + 4, y + 4, width), paramWidth);\n    y += paramheight;\n}\n\n// Draw Actor Data\nconst actorMax = $gameParty.maxBattleMembers();\nconst actorWidth = Math.floor((width - paramWidth) / actorMax);\nparamWidth = width - (actorWidth * actorMax);\nfor (const actor of $gameParty.battleMembers()) {\n    const index = $gameParty.battleMembers().indexOf(actor);\n    const actorX = paramX + paramWidth + (index * actorWidth);\n    this.changePaintOpacity(actor.canEquip(this._item));\n    this.drawActorCharacter(actor, actorX + (actorWidth / 2), tableY);\n    let actorY = tableY;\n\n    // Draw Parameter Changes\n    for (const paramId of params) {\n        const diffY = actorY - ((lineHeight - paramheight) / 2);\n        this.drawActorParamDifference(actor, paramId, actorX, diffY, actorWidth);\n        actorY += paramheight;\n    }\n}\n\n// Draw Back Rectangles\nthis.drawItemDarkRect(paramX, backY, paramWidth, tableY - backY);\nfor (let i = 0; i < actorMax; i++) {\n    const actorX = paramX + paramWidth + (i * actorWidth);\n    this.drawItemDarkRect(actorX, backY, actorWidth, tableY - backY);\n}\nfor (const paramId of params) {\n    this.drawItemDarkRect(paramX, tableY, paramWidth, paramheight);\n    for (let i = 0; i < actorMax; i++) {\n        const actorX = paramX + paramWidth + (i * actorWidth);\n        this.drawItemDarkRect(actorX, tableY, actorWidth, paramheight);\n    }\n    tableY += paramheight;\n}"
 *
 * @param ItemData
 * @text Item Data
 *
 * @param ItemGeneral
 * @parent ItemData
 *
 * @param MaxIcons:num
 * @text Max State/Buff Icons
 * @parent ItemGeneral
 * @desc Maximum number of icons that can be displayed for Add/Remove States/Buffs.
 * @default 8
 *
 * @param MultiplierStandard:num
 * @text Multiplier Standard
 * @parent ItemGeneral
 * @desc Constant standard to filter out random values when calculating the damage multiplier.
 * @default 1000000
 *
 * @param DrawItemData:func
 * @text JS: Draw Item Data
 * @parent ItemGeneral
 * @type note
 * @desc Code used to draw the item data for the Shop Status Window.
 * @default "const lineHeight = this.lineHeight();\nlet x = 0;\nlet y = 0;\nlet width = this.innerWidth;\nlet height = this.innerHeight;\nlet hw = Math.floor(width / 2);\nlet hx = x + width - hw;\n\n// Draw Item Name and Quantity\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\nthis.drawItemDarkRect(x, y, width);\ny += lineHeight;\n\n// Draw Main Item Properties\nif (this.drawItemConsumable(x, y, hw)) y += 0;\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\nif (this._item.occasion < 3) {\n    y = this.drawItemDamage(x, y, width);\n    y = this.drawItemEffects(x, y, width);\n}\ny = this.drawItemCustomEntries(x, y, width);\n\n// Draw Remaining Item Properties\nif (this._item.occasion < 3) {\n    if (this.drawItemOccasion(x, y, hw)) y += 0;\n    if (this.drawItemScope(hx, y, hw)) y += lineHeight;\n    if (this.drawItemHitType(x, y, hw)) y += 0;\n    if (this.drawItemSuccessRate(hx, y, hw)) y += lineHeight;\n    if (this.drawItemSpeed(x, y, hw)) y += 0;\n    if (this.drawItemRepeats(hx, y, hw)) y += lineHeight;\n}\n\n// Fill Rest of the Window\nthis.drawItemDarkRect(x, y, width, height - y);"
 *
 * @param Vocabulary
 * @parent ItemData
 *
 * @param LabelConsume:str
 * @text Consumable
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Consumable
 *
 * @param Consumable:str
 * @text Yes
 * @parent LabelConsume:str
 * @desc Vocabulary used for this data entry.
 * @default ✔
 *
 * @param NotConsumable:str
 * @text No
 * @parent LabelConsume:str
 * @desc Vocabulary used for this data entry.
 * @default ✘
 *
 * @param Occasions
 * @parent Vocabulary
 *
 * @param Occasion0:str
 * @text Always
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Anytime Use
 *
 * @param Occasion1:str
 * @text Battle Screen
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Battle-Only
 *
 * @param Occasion2:str
 * @text Menu Screen
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Field-Only
 *
 * @param Occasion3:str
 * @text Never
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default -
 *
 * @param Scope
 * @parent Vocabulary
 *
 * @param Scope0:str
 * @text None
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default No Target
 *
 * @param Scope1:str
 * @text 1 Enemy
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 1 Foe
 *
 * @param Scope2:str
 * @text All Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default All Foes
 *
 * @param Scope3:str
 * @text 1 Random Enemy
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Random Foe
 *
 * @param Scope4:str
 * @text 2 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 2 Random Foes
 *
 * @param Scope5:str
 * @text 3 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 3 Random Foes
 *
 * @param Scope6:str
 * @text 4 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 4 Random Foes
 *
 * @param Scope7:str
 * @text 1 Ally
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 1 Ally
 *
 * @param Scope8:str
 * @text All Allies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Alive Allies
 *
 * @param Scope9:str
 * @text 1 Ally (Dead)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Dead Ally
 *
 * @param Scope10:str
 * @text All Allies (Dead)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Dead Allies
 *
 * @param Scope11:str
 * @text The User
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default User
 *
 * @param Scope12:str
 * @text 1 Ally (DoA)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Any Ally
 *
 * @param Scope13:str
 * @text All Allies (DoA)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default All Allies
 *
 * @param Scope14:str
 * @text Enemies & Allies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Everybody
 *
 * @param BattleCore
 * @text Battle Core Support
 * @parent Vocabulary
 *
 * @param ScopeRandomAny:str
 * @text x Random Any
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Any> notetag.
 * @default %1 Random Units
 *
 * @param ScopeRandomEnemies:str
 * @text x Random Enemies
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Enemies> notetag.
 * @default %1 Random Foes
 *
 * @param ScopeRandomAllies:str
 * @text x Random Allies
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Allies> notetag.
 * @default %1 Random Allies
 *
 * @param ScopeAlliesButUser:str
 * @text All Allies But User
 * @parent BattleCore
 * @desc Vocabulary used for <Target: All Allies But User> notetag.
 * @default Other Allies
 *
 * @param LabelSpeed:str
 * @text Speed
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Speed
 *
 * @param Speed2000:str
 * @text >= 2000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Fastest
 *
 * @param Speed1000:str
 * @text >= 1000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Faster
 *
 * @param Speed1:str
 * @text >= 1 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Fast
 *
 * @param Speed0:str
 * @text == 0 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Normal
 *
 * @param SpeedNeg999:str
 * @text >= -999 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slow
 *
 * @param SpeedNeg1999:str
 * @text >= -1999 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slower
 *
 * @param SpeedNeg2000:str
 * @text <= -2000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slowest
 *
 * @param LabelSuccessRate:str
 * @text Success Rate
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Accuracy
 *
 * @param LabelRepeats:str
 * @text Repeats
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Hits
 *
 * @param LabelHitType:str
 * @text Hit Type
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Type
 *
 * @param HitType0:str
 * @text Certain Hit
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Neutral
 *
 * @param HitType1:str
 * @text Physical
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Physical
 *
 * @param HitType2:str
 * @text Magical
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Magical
 *
 * @param LabelElement:str
 * @text Element
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Element
 *
 * @param ElementWeapon:str
 * @text Weapon-Based
 * @parent LabelElement:str
 * @desc Vocabulary used for this data entry.
 * @default \I[97]Weapon
 *
 * @param ElementNone:str
 * @text Nonelement Element
 * @parent LabelElement:str
 * @desc Vocabulary used for this data entry.
 * @default \I[160]No Element
 *
 * @param DamageType
 * @text Damage Type
 * @parent Vocabulary
 *
 * @param DamageType1:str
 * @text HP Damage
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Damage Multiplier
 *
 * @param DamageType2:str
 * @text MP Damage
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Damage Multiplier
 *
 * @param DamageType3:str
 * @text HP Recovery
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Recovery Multiplier
 *
 * @param DamageType4:str
 * @text MP Recovery
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Recovery Multiplier
 *
 * @param DamageType5:str
 * @text HP Drain
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Drain Multiplier
 *
 * @param DamageType6:str
 * @text MP Drain
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Drain Multiplier
 *
 * @param Effects
 * @parent Vocabulary
 *
 * @param LabelRecoverHP:str
 * @text Recover HP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelRecoverMP:str
 * @text Recover MP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelRecoverTP:str
 * @text Recover TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelSelfGainTP:str
 * @text Self Gain TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default User %1
 *
 * @param LabelDamageHP:str
 * @text Damage HP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelDamageMP:str
 * @text Damage MP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelDamageTP:str
 * @text Damage TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelApply:str
 * @text Add State/Buff
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default Applies
 *
 * @param LabelRemove:str
 * @text Remove State/Buff
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default Removes
 *
 */
//=============================================================================

const _0x52aa=['createSellWindow','_categoryWindow','nABEv','getItemDamageAmountLabel','flatMP','JKctg','code','Scene_Equip_commandEquip','FPMzy','ZdVGx','drawParamsItemsEquipsCore','drawUpdatedParamValueDiff','Window_Selectable_refresh','down','onTouchSelectModern','uQAGA','postCreateCategoryWindowItemsEquipsCore','SellPriceRate','setHelpWindowItem','Scene_Item_categoryWindowRect','ParseItemNotetags','NrJeD','onSellOk','4597NtuzRD','LabelRepeats','Scene_Shop_sellWindowRect','drawItemCustomEntryLine','getItemEffectsTpDamageText','onTouchOk','itemDataFontSize','rmkgF','changeBuff','Step1End','97536iCQeXG','CmdHideDisabled','Window_EquipStatus_refresh','LZhga','fontSizeRatio','SEvvr','isKeyItem','Scene_Shop_statusWindowRect','DrawBackRect','isCancelled','OffsetX','ckQny','QiPWZ','_category','Window_ShopBuy_refresh','FUNC','Scene_Shop_goldWindowRect','_purchaseOnly','SwitchID','kPafb','addCancelCommand','0000','flatHP','cancel','rBUsM','getItemEffectsHpRecoveryLabel','item-%1','ItemsEquipsCore','addOptimizeCommand','TP\x20RECOVERY','Game_Actor_paramPlus','prepareNewEquipSlotsOnLoad','onSlotOk','drawItemQuantity','playBuzzerSound','KCUSX','registerCommand','numberWindowRectItemsEquipsCore','values','dataId','EFFECT_GAIN_TP','MajMb','ARRAYNUM','mJNct','canConsumeItem','goldWindowRect','dZGyy','LabelDamageMP','changeTextColor','778346OgoEyT','Actors','?????','EvdCd','hitType','calcWindowHeight','addClearCommand','skuaX','update','OwUZc','kSsql','Window_ItemList_updateHelp','processCursorHomeEndTrigger','_commandWindow','forceChangeEquip','_buttonAssistWindow','drawItemSpeed','jKZdc','itypeId','allowCreateStatusWindow','contentsBack','mkoNM','dLRtt','paintOpacity','Zkrzc','trim','drawActorParamDifference','SwitchBuy','setTopRow','Nonconsumable','CRIHf','Window_EquipItem_isEnabled','floor','YOkGa','nvCba','itemWindowRectItemsEquipsCore','removeStateBuffChanges','onSlotOkAutoSelect','changeEquipById','drawTextEx','gainTP','UFIsR','constructor','price','SZksM','CyRZo','isShiftRemoveShortcutEnabled','pop','statusWindowRect','log','_newLabelOpacity','limitedPageUpDownSceneCheck','value','prepareNextScene','MenuPortraits','isNewItem','LabelSpeed','getItemEffectsMpRecoveryLabel','drawEquipData','mVqqf','setNewItem','optKeyItemsNumber','Game_Actor_discardEquip','AlreadyEquipMarker','paramPlus','bSNOP','rTJQB','getItemDamageAmountLabelBattleCore','postCreateSlotWindowItemsEquipsCore','hvlbV','drawItemEquipType','ElementNone','Param','DEF','makeCommandList','CHixz','TextAlign','wPYVq','onBuyCancelItemsEquipsCore','CommandAddOptimize','updateChangedSlots','select','lOQFh','onTouchSelectModernControls','popScene','Parse_Notetags_ParamJS','wtypeId','LabelRecoverHP','ExtDisplayedParams','helpAreaTop','isShowNew','ARRAYFUNC','adjustHiddenShownGoods','buttonAssistKey2','jPchF','type','initEquips','_actor','maxBattleMembers','buttonAssistKey1','length','TzPRy','_tempActor','hitIndex','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','xcCrh','Window_Selectable_update','dtRuP','categoryList','ListWindowCols','183DQiedQ','drawItemCost','isItem','push','HitType%1','battleMembers','atypeId','commandBuyItemsEquipsCore','Game_Party_gainItem','MaxItems','LwzFY','BPYFK','MDF','keyItem','drawItemEffectsMpRecovery','Scene_Shop_onSellCancel','Speed1','610995rFpTrQ','clearNewLabelFromItem','HmtRT','<%1:[\x20]([\x5c+\x5c-]\x5cd+)>','sellPriceRate','categoryWindowRect','buttonAssistKey3','JzLuk','getItemQuantityText','isSoleWeaponType','exit','piJax','getItemSpeedText','KVTJr','gainItem','ParseArmorNotetags','wdmch','drawItem','goldWindowRectItemsEquipsCore','hideDisabledCommands','Step2Start','visible','forceResetEquipSlots','onSlotCancel','makeItemData','XbCVe','buttonAssistSlotWindowShift','CmdIconCancel','pctjL','effects','versionId','drawNewLabelIcon','sellingPrice','meetsItemConditions','isWeapon','commandSellItemsEquipsCore','max','VTWGo','show','getItemDamageElementLabel','aRtlT','getItemEffectsTpDamageLabel','status','Parse_Notetags_EnableJS','canUse','KmmYL','commandNameWindowDrawBackground','isDualWield','slotWindowRectItemsEquipsCore','_handlers','mpRate','drawItemNumber','SpeedNeg1999','isUseItemsEquipsCoreUpdatedLayout','iconWidth','MAT','zqTxl','setCategory','equipSlots','Whitelist','CmdTextAlign','cursorDown','ToUcL','buttonAssistRemove','Window_ItemList_colSpacing','loadCharacter','DrawEquipData','setHp','getItemConsumableText','hideNewLabelSprites','NonOptimizeETypes','USER\x20TP\x20GAIN','maxItemAmount','gaugeBackColor','Window_ItemList_maxCols','version','tdbhO','text','_buyWindowLastIndex','repeats','allowShiftScrolling','QtpoG','drawItemEffectsRemovedStatesBuffs','mhp','getItemsEquipsCoreBackColor2','clearNewItem','JicRR','paramValueByName','UOWTM','RegularItems','XpwlR','map','modifiedBuyPriceItemsEquipsCore','354aIETDM','geUpdatedLayoutStatusWidth','getItemEffectsAddedStatesBuffsText','getItemSpeedLabel','getItemDamageAmountTextOriginal','Scene_Shop_onBuyCancel','oERZl','mainAreaHeight','itemTextAlign','_calculatingJSParameters','canShiftRemoveEquipment','onTouchCancel','EVAL','width','_commandNameWindow','updateCommandNameWindow','StatusWindowWidth','itemWindowRect','MaxArmors','armor','split','isSellCommandEnabled','commandStyle','param','reHUN','SpeedNeg2000','PzSxN','getItemSuccessRateText','FontSize','elements','cuJnL','pageup','NfixK','Game_Actor_forceChangeEquip','isGoodShown','updatedLayoutStyle','newLabelEnabled','_doubleTouch','SQBxB','scope','1dexWyS','updateMoneyAmount','left','parse','itemAt','xrvlT','PJFtk','setStatusWindow','RemoveEquipIcon','MMFoa','gMLHB','LabelDamageTP','prepareRefreshItemsEquipsCoreLayout','boxWidth','onSellOkItemsEquipsCore','dHHCH','Scene_Shop_commandBuy','ELEMENT','setTempActor','Omhvt','VisuMZ_1_MainMenuCore','setupItemDamageTempActors','sellWindowRectItemsEquipsCore','placeNewLabel','AllArmors','Type','isRightInputMode','CommandAddClear','Game_Party_initialize','ParseWeaponNotetags','Scene_Item_createItemWindow','drawItemKeyData','WsSSv','%1-%2','CmdIconClear','index','EFFECT_RECOVER_MP','NVIke','WXJci','paramJS','successRate','isShiftShortcutKeyForRemove','currencyUnit','format','name','JSON','consumable','Scene_Equip_slotWindowRect','resetFontSettings','CannotEquipMarker','MZFLP','activate','createStatusWindow','drawUpdatedParamName','getMenuImage','height','URLZU','drawItemEffectsMpDamage','addCommand','jwUJM','smoothSelect','itemPadding','wirwp','HP\x20RECOVERY','maxCols','value1','isSceneShop','yVhzm','jziOP','STRUCT','Text','commandSell','isOptimizeEquipOk','Scene_Shop_numberWindowRect','note','Scene_Shop_activateSellWindow','top','CoreEngine','makeDeepCopy','setItem','scrollTo','paramId','buttonAssistText1','postCreateItemsEquipsCore','systemColor','xNhWc','XzvXI','checkShiftRemoveShortcut','Speed2000','VrOdY','GUbJW','LayoutStyle','ZCKMl','MNBog','commandName','prepareItemCustomData','+%1','Game_Actor_changeEquip','Paiwz','100%','unWGE','hOOWn','mHYEB','process_VisuMZ_ItemsEquipsCore_Notetags','drawIcon','mainAreaBottom','iconIndex','Speed0','getItemRepeatsText','equipTypes','KUNlY','numberWindowRect','Scene_Equip_statusWindowRect','Parse_Notetags_EquipSlots','DrawParamJS','drawItemEffectsTpRecovery','clamp','%1%','lineHeight','canEquip','drawItemEffects','filter','blt','Scene_Equip_commandWindowRect','optimize','(%1)','gWotu','buttonAssistCategory','processDrawIcon','vkbfM','setItemWindow','fillRect','initNewLabelSprites','MaxMP','RTolB','Krcpx','actorParams','ARRAYEVAL','damageColor','gAbGq','Window_ShopCommand_initialize','FadeLimit','kgnDv','isHovered','sFDkP','getItemEffectsSelfTpGainLabel','getItemEffectsMpDamageLabel','damage','commandWindowRectItemsEquipsCore','cQbsD','sellWindowRect','windowPadding','buttonAssistSmallIncrement','dAtmh','MP\x20DAMAGE','call','isOpen','jxVee','_buyWindow','getItemHitTypeText','Window_ShopBuy_price','move','isOptimizeCommandEnabled','×%1','EFFECT_REMOVE_BUFF','\x5cI[%1]','hUMQX','getColor','getInputMultiButtonStrings','Scene_Equip_onActorChange','drawItemEffectsHpDamage','drawUpdatedAfterParamValue','Slots','atk','currentExt','ConvertParams','drawItemRepeats','etypeId','fontSize','onSellCancel','buttonAssistText3','equipSlotIndex','1YFYgwm','Scene_Shop_commandWindowRect','emmMv','initNewItemsList','Consumable','VfVom','optimizeEquipments','Phncw','createNewLabelSprite','prototype','cQaKh','getItemEffectsRemovedStatesBuffsText','SMjKi','AllItems','Scene_Equip_createSlotWindow','EquipScene','isDrawItemNumber','tKWeT','BuyPriceJS','sTwRO','NeverUsable','center','OFRbG','MP\x20RECOVERY','itemHasEquipLimit','_sellWindow','tIHiK','match','VisuMZ_1_BattleCore','postCreateSellWindowItemsEquipsCore','createCommandNameWindow','getItemEffectsTpRecoveryLabel','onCategoryCancelItemsEquipsCore','drawUpdatedBeforeParamValue','QRXEV','New','drawItemEffectsHpRecovery','drawItemStyleIcon','weapon-%1','REPEAT','equips','OhDGB','SCOPE','List','LabelHitType','_newItemsList','LabelRemove','buttonAssistOffset3','drawItemActorMenuImage','Scene_Shop_buyWindowRect','MaxHP','refreshCursor','ItemQuantityFontSize','ZkARV','Scene_Equip_onSlotCancel','maxItems','jXMiP','categoryNameWindowCenter','Window_ItemCategory_setItemWindow','textWidth','lwMSY','isCommandEnabled','Categories','drawParamName','adjustItemWidthByStatus','gVisj','BackRectColor','BzhkX','buttonAssistLargeIncrement','isBattleTest','ConvertNumberToString','SrrPr','_shopStatusMenuAlly','updateCategoryNameWindow','process_VisuMZ_ItemsEquipsCore_RegExp','itemLineRect','uiInputPosition','categoryStyle','rateHP','nTlQc','KeyItems','updateNewLabelOpacity','normalColor','Damage\x20Formula\x20Error\x20for\x20%1','drawItemData','zJirW','slotWindowRect','addItemCategory','arUhF','commandNameWindowCenter','money','initialize','EFFECT_ADD_BUFF','getItemDamageElementText','getItemEffectsHpDamageText','textSizeEx','ZnEDu','splice','isBottomHelpMode','_numberWindow','isBuyCommandEnabled','getNextAvailableEtypeId','isClicked','onMenuImageLoad','isHoverEnabled','drawRemoveItem','DhfBD','createSlotWindow','setHandler','playEquip','drawItemConsumable','haGxA','bitmap','HFpZq','mEJHU','lEwrO','round','statusWindowRectItemsEquipsCore','ceil','MhKph','isUseModernControls','W%1','3110knLFzg','bTvfX','IconSet','RaKfV','Scene_Item_createCategoryWindow','isSoleArmorType','isClearEquipOk','_dummyWindow','MANUAL','getItemOccasionText','EFFECT_ADD_DEBUFF','processCursorSpecialCheckModernControls','bWIxt','doBuy','discardEquip','DAMAGE\x20MULTIPLIER','releaseUnequippableItems','A%1','equip','Scene_Shop_createCategoryWindow','bJzWi','right','209789OjuLux','loadSystem','helpWindowRectItemsEquipsCore','prepare','qZTdM','drawText','uQEOx','meetsItemConditionsNotetags','categoryNameWindowDrawBackground','isArmor','isClearCommandAdded','trytg','(+%1)','SuKsY','_newLabelOpacityUpperLimit','CevzQ','ZSici','Scene_Shop_doSell','7sosgEy','drawItemDamageAmount','changeEquip','drawItemSuccessRate','addBuyCommand','Window_Selectable_setHelpWindowItem','CONSUMABLE','resetTextColor','icon','getItemRepeatsLabel','uiMenuStyle','_statusWindow','contents','getInputButtonString','drawing','hideAdditionalSprites','remove','powerUpColor','auto','includes','BDqaR','shift','MultiplierStandard','JrFEo','xRWEQ','drawNewLabelText','isTriggered','yAoQW','Step2End','drawItemDamageElement','_itemWindow','Scope%1','Width','Translucent','description','ParamChangeFontSize','loadFaceImages','_shopStatusMenuMode','ATK','nRtRO','categoryStyleCheck','armorTypes','ARRAYSTRUCT','ZlgUM','category','Scene_Equip_itemWindowRect','selfTP','params','ORMUT','QUANTITY','colSpacing','EquipParams','fill','getItemHitTypeLabel','maxVisibleItems','btYTn','Settings','_bypassNewLabel','_itemData','gVCue','getItemEffectsTpRecoveryText','active','resetShopSwitches','drawCustomShopGraphic','Speed1000','SwitchSell','NotConsumable','mainCommandWidth','RegExp','_forcedSlots','IAizE','_data','fSEyV','categories','toUpperCase','drawItemStyleIconText','onTouchSelect','isEnabled','hpRate','AlwaysUsable','cmISf','isEquipCommandEnabled','HIT\x20TYPE','drawItemOccasion','FtQVn','DamageType%1','getMatchingInitEquip','helpWindowRect','shouldCommandWindowExist','paramPlusItemsEquipsCoreCustomJS','rVrHh','Parse_Notetags_Prices','yFWQL','deactivate','VEdzY','_newLabelSprites','hide','LUK','ADDED\x20EFFECTS','processHandling','isPressed','SUCCESS\x20RATE','sell','HiddenItemB','Window_ItemList_drawItem','Parse_Notetags_ParamValues','drawCurrencyValue','elementId','_money','+%1%','getItemEffectsAddedStatesBuffsLabel','Tdxxe','OGpYl','EFFECT_RECOVER_HP','ItemScene','CYKPK','Game_BattlerBase_param','commandEquip','XqeSn','createItemWindow','Parse_Notetags_Category','actor','_scene','isCursorMovable','buy','_resetFontColor','tpGain','processCursorMoveModernControls','Scene_Shop_doBuy','_goodsCount','SUGLj','XEYNE','Parse_Notetags_Batch','KeyItemProtect','Step1Start','_list','weaponTypes','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20enabled\x20=\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20enabled;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','setBackgroundType','playOkSound','getItemColor','MoBGS','lhrRI','tNveO','refreshActorEquipSlotsIfUpdated','pagedown','noymA','mmp','forceChangeEquipSlots','xSFnn','deselect','iKtna','Scene_Shop_onSellOk','buttonAssistItemListRequirement','categoryItemTypes','PRKjq','removeDebuff','drawItemDarkRect','AllWeapons','EnableLayout','mjYBg','Window_Selectable_initialize','Scene_Shop_commandSell','categoryNameWindowDrawText','commandWindowRect','zRGRi','GFDPt','CmdIconBuy','Window_EquipItem_includes','DrawFaceJS','armor-%1','cursorUp','replace','opacity','onCategoryCancel','LnwKc','_slotId','FiDio','JyoTK','revertGlobalNamespaceVariables','innerWidth','textColor','helpAreaHeight','onDatabaseLoaded','isUseParamNamesWithIcons','Oplqg','Scene_Shop_createSellWindow','commandBuy','MaxIcons','cursorPagedown','setValue','OCCASION','Raorw','equip2','formula','\x5cI[%1]%2','LabelConsume','isOptimizeCommandAdded','setObject','Blacklist','setShopStatusWindowMode','getItemDamageAmountTextBattleCore','_customItemInfo','uiHelpPosition','Scene_Shop_categoryWindowRect','paramValueFontSize','wRINP','equipAdjustHpMp','VisuMZ_0_CoreEngine','NoChangeMarker','nrdSq','aSzhW','_categoryNameWindow','_newLabelOpacityChange','nZAJx','setMp','rHkNP','Window_EquipCommand_initialize','isPlaytest','FadeSpeed','ItemMenuStatusBgType','drawItemHitType','vxMin','hPlha','getItemEffectsRemovedStatesBuffsLabel','CmdStyle','LabelSelfGainTP','getItemDamageAmountText','FieldUsable','JgAUz','nonRemovableEtypes','Scene_ItemBase_activateItemWindow','drawPossession','innerHeight','powerDownColor','isEquipChangeOk','810419HKpTsL','_tempActorA','create','Step3Start','iconHeight','wZhDF','ItemQuantityFmt','GRwdS','getItemsEquipsCoreBackColor1','isEquipCommandAdded','defaultItemMax','allowCommandWindowCursorUp','removeBuff','iqJNn','getItemEffects','refresh','commandStyleCheck','HWfJs','addState','currentClass','background','indexOf','bestEquipItem','buffIconIndex','xCHoq','addInnerChild','lDXih','getItemEffectsHpDamageLabel','buyWindowRectItemsEquipsCore','Scene_Item_itemWindowRect','AEhPL','updateHelp','CmdIconOptimize','ShopScene','cursorRight','Game_BattlerBase_meetsItemConditions','drawParamText','createCategoryWindow','drawItemEffectsAddedStatesBuffs','drawItemDamage','SPEED','ActorChangeEquipSlots','YImLf','Game_Actor_tradeItemWithParty','weapon','characterName','Scene_Equip_onSlotOk','isEquipItem','NHrMZ','DrawPortraitJS','fzjXa','drawCustomShopGraphicLoad','uXAhj','callUpdateHelp','ItemMenuStatusRect','cursorPageup','Scene_Load_reloadMapIfUpdated','return\x200','drawItemEffectsTpDamage','middle','NnUIn','drawItemName','numItems','statusWidth','BVkLa','_goods','process_VisuMZ_ItemsEquipsCore_EquipSlots','_equips','pduak','nonOptimizeEtypes','Scene_Shop_sellingPrice','buttonAssistText2','hSshj','BorderRegExp','object','smoothScrollTo','translucentOpacity','LabelDamageHP','removeState','getItemEffectsSelfTpGainText','loadPicture','umIaf','Window_ItemCategory_initialize','YZPhz','ScopeRandomAllies','IncludeShopItem','wnQEH','categoryWindowRectItemsEquipsCore','eIkuD','clear','addLoadListener','cursorLeft','YoSZh','CmdIconSell','HP\x20DAMAGE','_item','Window_ShopSell_isEnabled','processTouchModernControls','onCategoryOk','teznm','onActorChange','createBitmap','getItemSuccessRateLabel','PeKJQ','hljSF','REMOVED\x20EFFECTS','JKgNK','Scene_Boot_onDatabaseLoaded','itemEnableJS','rateMP','getItemDamageAmountLabelOriginal','drawItemEffectsSelfTpGain','createCategoryNameWindow','toLowerCase','isMainMenuCoreMenuImageOptionAvailable','smallParamFontSize','processCursorMove','ParseClassNotetags','StatusWindow','idZAm','buyWindowRect','dMlCs','activateSellWindow','isRepeated','getItemEffectsMpRecoveryText','eBBGX','possession','item','WjPTR','DrawIcons','mfziS','SellPriceJS','nSxYH','zSJpv','postCreateItemWindowModernControls','paramchangeTextColor','_slotWindow','checkItemConditionsSwitchNotetags','Scene_Shop_prepare','addChild','SpeedNeg999','mainAreaTop','bind','_tempActorB','Scene_Shop_onCategoryCancel','getItemScopeText','placeItemNewLabel','AGI','addWindow','Icon','cDTOM','ParseAllNotetags','iconText','#%1','LabelRecoverTP','pJxpp','Sfsma','occasion','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','members','Occasion%1','addStateBuffChanges','ElementWeapon','Step3End','drawItemScope','changePaintOpacity','RemoveEquipText','Scene_Shop_create','doSell','ShiftShortcutKey','aqbYk','processShiftRemoveShortcut','FJKer','getTextColor','nOnhH','onBuyCancel','meetsItemConditionsJS','determineBaseSellingPrice','commandNameWindowDrawText','addEquipCommand','TP\x20DAMAGE','value2','playCursorSound','gZPjJ','mainFontSize','Hxgah','_resetFontSize'];const _0x26c4e1=_0xeb95;function _0xeb95(_0xf41984,_0x107642){return _0xeb95=function(_0x52aa06,_0xeb9596){_0x52aa06=_0x52aa06-0x1d4;let _0x8cb08=_0x52aa[_0x52aa06];return _0x8cb08;},_0xeb95(_0xf41984,_0x107642);}(function(_0x3539d8,_0x8e8bab){const _0x5b14e0=_0xeb95;while(!![]){try{const _0x1a0b5a=parseInt(_0x5b14e0(0x39f))*parseInt(_0x5b14e0(0x567))+parseInt(_0x5b14e0(0x617))+parseInt(_0x5b14e0(0x2fd))*parseInt(_0x5b14e0(0x48b))+-parseInt(_0x5b14e0(0x377))*-parseInt(_0x5b14e0(0x606))+-parseInt(_0x5b14e0(0x598))+parseInt(_0x5b14e0(0x247))*parseInt(_0x5b14e0(0x38d))+parseInt(_0x5b14e0(0x55d))*-parseInt(_0x5b14e0(0x21f));if(_0x1a0b5a===_0x8e8bab)break;else _0x3539d8['push'](_0x3539d8['shift']());}catch(_0x2793b9){_0x3539d8['push'](_0x3539d8['shift']());}}}(_0x52aa,0x748d9));var label=_0x26c4e1(0x582),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x26c4e1(0x2c0)](function(_0x5ee95b){const _0xba488a=_0x26c4e1;return _0x5ee95b[_0xba488a(0x1ec)]&&_0x5ee95b[_0xba488a(0x3c1)][_0xba488a(0x3b2)]('['+label+']');})[0x0];VisuMZ[label][_0x26c4e1(0x3d7)]=VisuMZ[label][_0x26c4e1(0x3d7)]||{},VisuMZ[_0x26c4e1(0x2f6)]=function(_0x2c3d1f,_0x30fe52){const _0x1fe210=_0x26c4e1;for(const _0x25bcec in _0x30fe52){if(_0x1fe210(0x5c4)===_0x1fe210(0x5c4)){if(_0x25bcec[_0x1fe210(0x318)](/(.*):(.*)/i)){if(_0x1fe210(0x4dc)!==_0x1fe210(0x29d)){const _0x15bb79=String(RegExp['$1']),_0x1b6b20=String(RegExp['$2'])[_0x1fe210(0x3e9)]()[_0x1fe210(0x5b1)]();let _0x3323b9,_0x547ec9,_0x5ae66c;switch(_0x1b6b20){case'NUM':_0x3323b9=_0x30fe52[_0x25bcec]!==''?Number(_0x30fe52[_0x25bcec]):0x0;break;case _0x1fe210(0x591):_0x547ec9=_0x30fe52[_0x25bcec]!==''?JSON['parse'](_0x30fe52[_0x25bcec]):[],_0x3323b9=_0x547ec9[_0x1fe210(0x21d)](_0x34bd7f=>Number(_0x34bd7f));break;case _0x1fe210(0x22b):_0x3323b9=_0x30fe52[_0x25bcec]!==''?eval(_0x30fe52[_0x25bcec]):null;break;case _0x1fe210(0x2d0):_0x547ec9=_0x30fe52[_0x25bcec]!==''?JSON['parse'](_0x30fe52[_0x25bcec]):[],_0x3323b9=_0x547ec9[_0x1fe210(0x21d)](_0x90508=>eval(_0x90508));break;case _0x1fe210(0x274):_0x3323b9=_0x30fe52[_0x25bcec]!==''?JSON['parse'](_0x30fe52[_0x25bcec]):'';break;case'ARRAYJSON':_0x547ec9=_0x30fe52[_0x25bcec]!==''?JSON[_0x1fe210(0x24a)](_0x30fe52[_0x25bcec]):[],_0x3323b9=_0x547ec9[_0x1fe210(0x21d)](_0x1bb53a=>JSON[_0x1fe210(0x24a)](_0x1bb53a));break;case _0x1fe210(0x576):_0x3323b9=_0x30fe52[_0x25bcec]!==''?new Function(JSON[_0x1fe210(0x24a)](_0x30fe52[_0x25bcec])):new Function(_0x1fe210(0x4c4));break;case _0x1fe210(0x5f3):_0x547ec9=_0x30fe52[_0x25bcec]!==''?JSON[_0x1fe210(0x24a)](_0x30fe52[_0x25bcec]):[],_0x3323b9=_0x547ec9[_0x1fe210(0x21d)](_0xb64f37=>new Function(JSON[_0x1fe210(0x24a)](_0xb64f37)));break;case'STR':_0x3323b9=_0x30fe52[_0x25bcec]!==''?String(_0x30fe52[_0x25bcec]):'';break;case'ARRAYSTR':_0x547ec9=_0x30fe52[_0x25bcec]!==''?JSON[_0x1fe210(0x24a)](_0x30fe52[_0x25bcec]):[],_0x3323b9=_0x547ec9['map'](_0x1db2ce=>String(_0x1db2ce));break;case _0x1fe210(0x28c):_0x5ae66c=_0x30fe52[_0x25bcec]!==''?JSON['parse'](_0x30fe52[_0x25bcec]):{},_0x2c3d1f[_0x15bb79]={},VisuMZ[_0x1fe210(0x2f6)](_0x2c3d1f[_0x15bb79],_0x5ae66c);continue;case _0x1fe210(0x3c9):_0x547ec9=_0x30fe52[_0x25bcec]!==''?JSON[_0x1fe210(0x24a)](_0x30fe52[_0x25bcec]):[],_0x3323b9=_0x547ec9[_0x1fe210(0x21d)](_0x562188=>VisuMZ[_0x1fe210(0x2f6)]({},JSON[_0x1fe210(0x24a)](_0x562188)));break;default:continue;}_0x2c3d1f[_0x15bb79]=_0x3323b9;}else{const _0x22a3e9=_0x7fb65f(_0x3e2938['$1'])['toUpperCase']()[_0x1fe210(0x5b1)](),_0x112d15=_0x28f874(_0x20d051['$2'])[_0x1fe210(0x5b1)]();this[_0x1fe210(0x469)][_0x22a3e9]=_0x112d15;}}}else return!![];}return _0x2c3d1f;},(_0x54e4b1=>{const _0x6b2ba=_0x26c4e1,_0x4d7eb8=_0x54e4b1[_0x6b2ba(0x273)];for(const _0x3c5512 of dependencies){if(_0x6b2ba(0x27f)!==_0x6b2ba(0x391)){if(!Imported[_0x3c5512]){if('wRINP'!==_0x6b2ba(0x46d)){if(!this[_0x6b2ba(0x513)])return![];if(!this[_0x6b2ba(0x513)][_0x6b2ba(0x3dc)])return![];return this[_0x6b2ba(0x513)][_0x6b2ba(0x5c6)]();}else{alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'['format'](_0x4d7eb8,_0x3c5512)),SceneManager[_0x6b2ba(0x621)]();break;}}}else{if(_0x33ef24[_0x6b2ba(0x3a9)]&&_0x5962d9['uiInputPosition']!==_0x177e6e)return _0xdb86e6['uiInputPosition'];else{if(this[_0x6b2ba(0x1f7)]())return this['updatedLayoutStyle']()['match'](/RIGHT/i);else _0x2cdb93['prototype']['isRightInputMode'][_0x6b2ba(0x2e2)](this);}}}const _0x4b6535=_0x54e4b1[_0x6b2ba(0x3c1)];if(_0x4b6535[_0x6b2ba(0x318)](/\[Version[ ](.*?)\]/i)){const _0x311c4b=Number(RegExp['$1']);_0x311c4b!==VisuMZ[label][_0x6b2ba(0x20d)]&&(alert(_0x6b2ba(0x529)[_0x6b2ba(0x272)](_0x4d7eb8,_0x311c4b)),SceneManager['exit']());}if(_0x4b6535[_0x6b2ba(0x318)](/\[Tier[ ](\d+)\]/i)){if('HfjZj'!==_0x6b2ba(0x339)){const _0x1ad9a2=Number(RegExp['$1']);_0x1ad9a2<tier?(alert(_0x6b2ba(0x600)[_0x6b2ba(0x272)](_0x4d7eb8,_0x1ad9a2,tier)),SceneManager['exit']()):'wZhDF'!==_0x6b2ba(0x490)?(_0x89f3b8[_0x6b2ba(0x582)][_0x6b2ba(0x500)][_0x6b2ba(0x2e2)](this,_0x13a6ea),_0xf8807e[_0x6b2ba(0x582)][_0x6b2ba(0x2b8)](_0x4fe58a)):tier=Math['max'](_0x1ad9a2,tier);}else this[_0x6b2ba(0x375)]()?this[_0x6b2ba(0x554)](!![]):_0x5ccaf7[_0x6b2ba(0x306)][_0x6b2ba(0x3eb)][_0x6b2ba(0x2e2)](this,_0x407709);}VisuMZ['ConvertParams'](VisuMZ[label][_0x6b2ba(0x3d7)],_0x54e4b1['parameters']);})(pluginData),PluginManager[_0x26c4e1(0x58b)](pluginData[_0x26c4e1(0x273)],_0x26c4e1(0x4b4),_0x31d0e2=>{const _0x5dcf6c=_0x26c4e1;VisuMZ[_0x5dcf6c(0x2f6)](_0x31d0e2,_0x31d0e2);const _0x503bf4=_0x31d0e2[_0x5dcf6c(0x599)][_0x5dcf6c(0x21d)](_0x52661f=>$gameActors['actor'](_0x52661f)),_0x22a55f=_0x31d0e2[_0x5dcf6c(0x2f3)][_0x5dcf6c(0x21d)](_0x2b1f10=>$dataSystem[_0x5dcf6c(0x2b4)][_0x5dcf6c(0x4a0)](_0x2b1f10[_0x5dcf6c(0x5b1)]()));for(const _0x4014b0 of _0x503bf4){if(!_0x4014b0)continue;_0x4014b0[_0x5dcf6c(0x433)](_0x22a55f);}}),PluginManager[_0x26c4e1(0x58b)](pluginData['name'],'ActorResetEquipSlots',_0x3d131d=>{const _0x31aeb6=_0x26c4e1;VisuMZ[_0x31aeb6(0x2f6)](_0x3d131d,_0x3d131d);const _0x1734d7=_0x3d131d[_0x31aeb6(0x599)]['map'](_0x5c4691=>$gameActors[_0x31aeb6(0x418)](_0x5c4691));for(const _0x3b0502 of _0x1734d7){if(_0x31aeb6(0x317)!=='polVj'){if(!_0x3b0502)continue;_0x3b0502[_0x31aeb6(0x1d8)]();}else{const _0xa703fe=_0x31aeb6(0x584);if(this[_0x31aeb6(0x3d9)]['gainTP']<=0x0&&!this[_0x31aeb6(0x469)][_0xa703fe])return![];const _0x2df43c=this[_0x31aeb6(0x31c)]();this[_0x31aeb6(0x266)](_0x2df43c,_0x14c0f1,_0x1e2afe,_0x377562,!![]);const _0x19db24=this['getItemEffectsTpRecoveryText']();return this[_0x31aeb6(0x597)](_0x135c30[_0x31aeb6(0x3b0)]()),this[_0x31aeb6(0x266)](_0x19db24,_0x2bb658,_0x311bf8,_0x352245,![],_0x31aeb6(0x38c)),this[_0x31aeb6(0x43c)](_0x28770d,_0x455587,_0x2a6c5d),this[_0x31aeb6(0x277)](),!![];}}}),PluginManager[_0x26c4e1(0x58b)](pluginData['name'],'BatchShop',_0x2b5861=>{const _0x43af64=_0x26c4e1;VisuMZ[_0x43af64(0x2f6)](_0x2b5861,_0x2b5861);const _0x2b3934=[],_0x2d586e=_0x2b5861[_0x43af64(0x466)][_0x43af64(0x21d)](_0xffef85=>_0xffef85[_0x43af64(0x3e9)]()[_0x43af64(0x5b1)]()),_0x34993a=_0x2b5861[_0x43af64(0x1fd)][_0x43af64(0x21d)](_0x48a145=>_0x48a145[_0x43af64(0x3e9)]()[_0x43af64(0x5b1)]()),_0x281686=_0x2b5861[_0x43af64(0x566)]>=_0x2b5861[_0x43af64(0x425)]?_0x2b5861[_0x43af64(0x425)]:_0x2b5861['Step1End'],_0x938020=_0x2b5861[_0x43af64(0x566)]>=_0x2b5861[_0x43af64(0x425)]?_0x2b5861['Step1End']:_0x2b5861['Step1Start'],_0x1acad1=Array(_0x938020-_0x281686+0x1)[_0x43af64(0x3d3)]()[_0x43af64(0x21d)]((_0x22fd7e,_0x1b0956)=>_0x281686+_0x1b0956);for(const _0x3629ba of _0x1acad1){if(_0x43af64(0x542)!==_0x43af64(0x245)){const _0x151608=$dataItems[_0x3629ba];if(!_0x151608)continue;if(!VisuMZ[_0x43af64(0x582)][_0x43af64(0x4e0)](_0x151608,_0x2d586e,_0x34993a))continue;_0x2b3934['push']([0x0,_0x3629ba,0x0,_0x151608[_0x43af64(0x5c3)]]);}else{const _0x405778=_0xca01d0[_0x43af64(0x24a)]('['+_0x5eb776['$1'][_0x43af64(0x318)](/\d+/g)+']');for(const _0x23b545 of _0x405778){if(!_0x4255d3['value'](_0x23b545))return![];}return!![];}}const _0x3f871a=_0x2b5861[_0x43af64(0x3bb)]>=_0x2b5861[_0x43af64(0x1d6)]?_0x2b5861['Step2Start']:_0x2b5861[_0x43af64(0x3bb)],_0x5a5f01=_0x2b5861[_0x43af64(0x3bb)]>=_0x2b5861[_0x43af64(0x1d6)]?_0x2b5861[_0x43af64(0x3bb)]:_0x2b5861[_0x43af64(0x1d6)],_0x491a71=Array(_0x5a5f01-_0x3f871a+0x1)[_0x43af64(0x3d3)]()['map']((_0x16f902,_0x46d1c1)=>_0x3f871a+_0x46d1c1);for(const _0x4aa79d of _0x491a71){const _0x5911bc=$dataWeapons[_0x4aa79d];if(!_0x5911bc)continue;if(!VisuMZ[_0x43af64(0x582)][_0x43af64(0x4e0)](_0x5911bc,_0x2d586e,_0x34993a))continue;_0x2b3934[_0x43af64(0x609)]([0x1,_0x4aa79d,0x0,_0x5911bc['price']]);}const _0x3b4845=_0x2b5861['Step3End']>=_0x2b5861[_0x43af64(0x48e)]?_0x2b5861['Step3Start']:_0x2b5861[_0x43af64(0x52e)],_0x72855d=_0x2b5861[_0x43af64(0x52e)]>=_0x2b5861[_0x43af64(0x48e)]?_0x2b5861[_0x43af64(0x52e)]:_0x2b5861[_0x43af64(0x48e)],_0x106768=Array(_0x72855d-_0x3b4845+0x1)[_0x43af64(0x3d3)]()[_0x43af64(0x21d)]((_0x1c03f0,_0x28ba62)=>_0x3b4845+_0x28ba62);for(const _0x1a84ea of _0x106768){const _0x2c08c9=$dataArmors[_0x1a84ea];if(!_0x2c08c9)continue;if(!VisuMZ[_0x43af64(0x582)][_0x43af64(0x4e0)](_0x2c08c9,_0x2d586e,_0x34993a))continue;_0x2b3934[_0x43af64(0x609)]([0x2,_0x1a84ea,0x0,_0x2c08c9[_0x43af64(0x5c3)]]);}SceneManager['push'](Scene_Shop),SceneManager[_0x43af64(0x5cd)](_0x2b3934,_0x2b5861['PurchaseOnly']);}),VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x4e0)]=function(_0x49af9e,_0xfe5614,_0x5a1828){const _0x41dfc9=_0x26c4e1;if(_0x49af9e[_0x41dfc9(0x273)][_0x41dfc9(0x5b1)]()==='')return![];if(_0x49af9e['name'][_0x41dfc9(0x318)](/-----/i))return![];const _0x292825=_0x49af9e[_0x41dfc9(0x3e8)];if(_0xfe5614[_0x41dfc9(0x5fc)]>0x0)for(const _0x5a5793 of _0xfe5614){if(!_0x5a5793)continue;if(_0x292825['includes'](_0x5a5793))return![];}if(_0x5a1828['length']>0x0){if(_0x41dfc9(0x332)!==_0x41dfc9(0x332)){const _0x4e3953=this[_0x41dfc9(0x3f7)](),_0x2a8228=this['isRightInputMode']()?this[_0x41dfc9(0x4ca)]():0x0,_0x1a01e1=this[_0x41dfc9(0x518)](),_0x38cc91=_0x46b5bb[_0x41dfc9(0x254)]-this['statusWidth'](),_0x3d0c7d=_0x4e3953?this[_0x41dfc9(0x59d)](0x1,!![]):0x0;return new _0x4548bc(_0x2a8228,_0x1a01e1,_0x38cc91,_0x3d0c7d);}else{for(const _0x59bd4d of _0x5a1828){if(!_0x59bd4d)continue;if(_0x292825[_0x41dfc9(0x3b2)](_0x59bd4d))return!![];}return![];}}return!![];},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x4f6)]=Scene_Boot['prototype'][_0x26c4e1(0x456)],Scene_Boot[_0x26c4e1(0x306)]['onDatabaseLoaded']=function(){const _0x52eaf9=_0x26c4e1;this['process_VisuMZ_ItemsEquipsCore_RegExp'](),VisuMZ[_0x52eaf9(0x582)]['Scene_Boot_onDatabaseLoaded']['call'](this),this['process_VisuMZ_ItemsEquipsCore_Notetags']();},Scene_Boot[_0x26c4e1(0x306)][_0x26c4e1(0x347)]=function(){const _0xdb0650=_0x26c4e1;VisuMZ[_0xdb0650(0x582)][_0xdb0650(0x3e3)]={},VisuMZ[_0xdb0650(0x582)]['RegExp'][_0xdb0650(0x3d2)]=[],VisuMZ['ItemsEquipsCore'][_0xdb0650(0x3e3)][_0xdb0650(0x4d4)]=[];const _0x4e9b12=[_0xdb0650(0x32f),_0xdb0650(0x2cc),_0xdb0650(0x3c5),_0xdb0650(0x5e1),_0xdb0650(0x1f9),_0xdb0650(0x612),_0xdb0650(0x51e),_0xdb0650(0x400)];for(const _0x5d4a3d of _0x4e9b12){const _0x5f4b83=_0xdb0650(0x61a)['format'](_0x5d4a3d);VisuMZ[_0xdb0650(0x582)]['RegExp'][_0xdb0650(0x3d2)][_0xdb0650(0x609)](new RegExp(_0x5f4b83,'i'));const _0x64d6c4='\x5cb%1\x5cb'['format'](_0x5d4a3d);VisuMZ['ItemsEquipsCore'][_0xdb0650(0x3e3)][_0xdb0650(0x4d4)]['push'](new RegExp(_0x64d6c4,'g'));}},Scene_Boot[_0x26c4e1(0x306)][_0x26c4e1(0x2ae)]=function(){const _0x3dbc18=_0x26c4e1;if(VisuMZ[_0x3dbc18(0x522)])return;this[_0x3dbc18(0x4cd)]();const _0x5a8f30=[$dataItems,$dataWeapons,$dataArmors];for(const _0x20f0bd of _0x5a8f30){for(const _0x5172b2 of _0x20f0bd){if(!_0x5172b2)continue;VisuMZ['ItemsEquipsCore']['Parse_Notetags_Category'](_0x5172b2,_0x20f0bd),VisuMZ[_0x3dbc18(0x582)][_0x3dbc18(0x3fa)](_0x5172b2,_0x20f0bd),VisuMZ[_0x3dbc18(0x582)][_0x3dbc18(0x408)](_0x5172b2,_0x20f0bd),VisuMZ['ItemsEquipsCore']['Parse_Notetags_ParamJS'](_0x5172b2,_0x20f0bd),VisuMZ['ItemsEquipsCore'][_0x3dbc18(0x1ed)](_0x5172b2,_0x20f0bd);}}},Scene_Boot[_0x26c4e1(0x306)][_0x26c4e1(0x4cd)]=function(){const _0x195888=_0x26c4e1;for(const _0x85c8e6 of $dataClasses){if(!_0x85c8e6)continue;VisuMZ[_0x195888(0x582)][_0x195888(0x2b8)](_0x85c8e6);}},VisuMZ['ItemsEquipsCore'][_0x26c4e1(0x500)]=VisuMZ[_0x26c4e1(0x500)],VisuMZ[_0x26c4e1(0x500)]=function(_0x10039d){const _0x4e6d64=_0x26c4e1;VisuMZ[_0x4e6d64(0x582)][_0x4e6d64(0x500)][_0x4e6d64(0x2e2)](this,_0x10039d),VisuMZ[_0x4e6d64(0x582)][_0x4e6d64(0x2b8)](_0x10039d);},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x55a)]=VisuMZ[_0x26c4e1(0x55a)],VisuMZ[_0x26c4e1(0x55a)]=function(_0x4cd263){const _0x53ee74=_0x26c4e1;VisuMZ['ItemsEquipsCore'][_0x53ee74(0x55a)][_0x53ee74(0x2e2)](this,_0x4cd263),VisuMZ[_0x53ee74(0x582)][_0x53ee74(0x423)](_0x4cd263,$dataItems);},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x264)]=VisuMZ[_0x26c4e1(0x264)],VisuMZ['ParseWeaponNotetags']=function(_0x74e9c3){const _0x33cdc7=_0x26c4e1;VisuMZ['ItemsEquipsCore'][_0x33cdc7(0x264)][_0x33cdc7(0x2e2)](this,_0x74e9c3),VisuMZ[_0x33cdc7(0x582)][_0x33cdc7(0x423)](_0x74e9c3,$dataWeapons);},VisuMZ[_0x26c4e1(0x582)]['ParseArmorNotetags']=VisuMZ[_0x26c4e1(0x626)],VisuMZ[_0x26c4e1(0x626)]=function(_0x15d831){const _0x4449b8=_0x26c4e1;VisuMZ['ItemsEquipsCore'][_0x4449b8(0x626)]['call'](this,_0x15d831),VisuMZ[_0x4449b8(0x582)]['Parse_Notetags_Batch'](_0x15d831,$dataArmors);},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x2b8)]=function(_0x52c3e8){const _0x35a4e3=_0x26c4e1;_0x52c3e8[_0x35a4e3(0x1fc)]=[];if(!BattleManager['isBattleTest']()&&_0x52c3e8[_0x35a4e3(0x291)][_0x35a4e3(0x318)](/<EQUIP SLOTS>\s*([\s\S]*)\s*<\/EQUIP SLOTS>/i)){const _0x4ec9f6=String(RegExp['$1'])[_0x35a4e3(0x233)](/[\r\n]+/);for(const _0xb9050e of _0x4ec9f6){const _0x42e944=$dataSystem[_0x35a4e3(0x2b4)][_0x35a4e3(0x4a0)](_0xb9050e['trim']());if(_0x42e944>0x0)_0x52c3e8[_0x35a4e3(0x1fc)][_0x35a4e3(0x609)](_0x42e944);}}else{if(_0x35a4e3(0x5d3)==='qVmUW')_0x329556(_0x35a4e3(0x529)[_0x35a4e3(0x272)](_0x481cc0,_0x29b2ec)),_0x35f392[_0x35a4e3(0x621)]();else for(const _0x356a78 of $dataSystem[_0x35a4e3(0x2b4)]){const _0x439320=$dataSystem[_0x35a4e3(0x2b4)]['indexOf'](_0x356a78[_0x35a4e3(0x5b1)]());if(_0x439320>0x0)_0x52c3e8[_0x35a4e3(0x1fc)][_0x35a4e3(0x609)](_0x439320);}}},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x423)]=function(_0x11a879,_0x242cfd){const _0x5f3c31=_0x26c4e1;VisuMZ['ItemsEquipsCore'][_0x5f3c31(0x417)](_0x11a879,_0x242cfd),VisuMZ['ItemsEquipsCore'][_0x5f3c31(0x3fa)](_0x11a879,_0x242cfd),VisuMZ[_0x5f3c31(0x582)][_0x5f3c31(0x408)](_0x11a879,_0x242cfd),VisuMZ['ItemsEquipsCore'][_0x5f3c31(0x5ed)](_0x11a879,_0x242cfd),VisuMZ[_0x5f3c31(0x582)][_0x5f3c31(0x1ed)](_0x11a879,_0x242cfd);},VisuMZ['ItemsEquipsCore']['Parse_Notetags_Category']=function(_0x5b49d6,_0x40e6b2){const _0x4c68a9=_0x26c4e1;_0x5b49d6['categories']=[];const _0x1df174=_0x5b49d6[_0x4c68a9(0x291)],_0x1e176c=_0x1df174[_0x4c68a9(0x318)](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);if(_0x1e176c){if(_0x4c68a9(0x3da)===_0x4c68a9(0x3da))for(const _0x24fb01 of _0x1e176c){_0x24fb01[_0x4c68a9(0x318)](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);const _0x2ee6f1=String(RegExp['$1'])[_0x4c68a9(0x3e9)]()[_0x4c68a9(0x5b1)]()[_0x4c68a9(0x233)](',');for(const _0x52e662 of _0x2ee6f1){_0x5b49d6[_0x4c68a9(0x3e8)][_0x4c68a9(0x609)](_0x52e662[_0x4c68a9(0x5b1)]());}}else return this[_0x4c68a9(0x1f7)]()?this[_0x4c68a9(0x38f)]():_0x38eabe['prototype'][_0x4c68a9(0x3f6)][_0x4c68a9(0x2e2)](this);}if(_0x1df174[_0x4c68a9(0x318)](/<(?:CATEGORY|CATEGORIES)>\s*([\s\S]*)\s*<\/(?:CATEGORY|CATEGORIES)>/i)){if(_0x4c68a9(0x267)===_0x4c68a9(0x2d5))_0x16dd58[_0x4c68a9(0x306)][_0x4c68a9(0x628)][_0x4c68a9(0x2e2)](this,_0x1c70b9);else{const _0x346c2b=RegExp['$1'][_0x4c68a9(0x233)](/[\r\n]+/);for(const _0x18010b of _0x346c2b){'fzjXa'!==_0x4c68a9(0x4bd)?this[_0x4c68a9(0x5e6)]():_0x5b49d6[_0x4c68a9(0x3e8)]['push'](_0x18010b[_0x4c68a9(0x3e9)]()[_0x4c68a9(0x5b1)]());}}}},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x3fa)]=function(_0x4e588c,_0x458846){const _0xabd7ed=_0x26c4e1;_0x4e588c[_0xabd7ed(0x291)][_0xabd7ed(0x318)](/<PRICE:[ ](\d+)>/i)&&(_0x4e588c['price']=Number(RegExp['$1']));},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x408)]=function(_0x5f3cbe,_0x1f5658){const _0x104080=_0x26c4e1;if(_0x1f5658===$dataItems)return;for(let _0x45d548=0x0;_0x45d548<0x8;_0x45d548++){if(_0x104080(0x307)!=='OtIKu'){const _0x40138c=VisuMZ['ItemsEquipsCore'][_0x104080(0x3e3)][_0x104080(0x3d2)][_0x45d548];_0x5f3cbe[_0x104080(0x291)][_0x104080(0x318)](_0x40138c)&&(_0x5f3cbe[_0x104080(0x3ce)][_0x45d548]=parseInt(RegExp['$1']));}else{const _0xd9d216='HP\x20RECOVERY';if(this[_0x104080(0x469)][_0xd9d216])return this[_0x104080(0x469)][_0xd9d216];let _0x53778e='';if(this[_0x104080(0x3d9)][_0x104080(0x34b)]>0x0)_0x53778e+=_0x104080(0x40c)[_0x104080(0x272)](_0x331be6['floor'](this['_itemData']['rateHP']*0x64));if(this[_0x104080(0x3d9)]['rateHP']>0x0&&this[_0x104080(0x3d9)][_0x104080(0x57d)]>0x0)_0x53778e+='\x20';if(this['_itemData'][_0x104080(0x57d)]>0x0)_0x53778e+=_0x104080(0x2a7)[_0x104080(0x272)](this['_itemData'][_0x104080(0x57d)]);return _0x53778e;}}},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x26e)]={},VisuMZ[_0x26c4e1(0x582)]['Parse_Notetags_ParamJS']=function(_0x55bc2a,_0x3c8b24){const _0x18309f=_0x26c4e1;if(_0x3c8b24===$dataItems)return;if(_0x55bc2a[_0x18309f(0x291)][_0x18309f(0x318)](/<JS PARAMETERS>\s*([\s\S]*)\s*<\/JS PARAMETERS>/i)){const _0x5c3dd9=String(RegExp['$1']),_0x576494=(_0x3c8b24===$dataWeapons?'W%1':_0x18309f(0x388))[_0x18309f(0x272)](_0x55bc2a['id']),_0x233dba='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20MaxHP\x20=\x200;\x20let\x20MaxMP\x20=\x200;\x20let\x20ATK\x20=\x200;\x20let\x20DEF\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20MAT\x20=\x200;\x20let\x20MDF\x20=\x200;\x20let\x20AGI\x20=\x200;\x20let\x20LUK\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20[MaxHP,\x20MaxMP,\x20ATK,\x20DEF,\x20MAT,\x20MDF,\x20AGI,\x20LUK][paramId];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'[_0x18309f(0x272)](_0x5c3dd9);for(let _0x582d3c=0x0;_0x582d3c<0x8;_0x582d3c++){if(_0x5c3dd9[_0x18309f(0x318)](VisuMZ['ItemsEquipsCore'][_0x18309f(0x3e3)][_0x18309f(0x4d4)][_0x582d3c])){const _0x4dcdc1='%1-%2'[_0x18309f(0x272)](_0x576494,_0x582d3c);VisuMZ[_0x18309f(0x582)][_0x18309f(0x26e)][_0x4dcdc1]=new Function(_0x18309f(0x50a),_0x18309f(0x298),_0x233dba);}}}},VisuMZ[_0x26c4e1(0x582)]['itemEnableJS']={},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x1ed)]=function(_0x1cc54d,_0x503707){const _0x13a97c=_0x26c4e1;if(_0x503707!==$dataItems)return;if(_0x1cc54d[_0x13a97c(0x291)]['match'](/<JS ITEM ENABLE>\s*([\s\S]*)\s*<\/JS ITEM ENABLE>/i)){if('FDnJr'!=='FDnJr')_0x2b4c70[_0x13a97c(0x306)][_0x13a97c(0x27a)][_0x13a97c(0x2e2)](this),this[_0x13a97c(0x547)]&&this[_0x13a97c(0x547)]['isUseModernControls']()&&this[_0x13a97c(0x547)][_0x13a97c(0x27a)]();else{const _0x723f0=String(RegExp['$1']),_0x4b45d4=_0x13a97c(0x428)[_0x13a97c(0x272)](_0x723f0);VisuMZ[_0x13a97c(0x582)][_0x13a97c(0x4f7)][_0x1cc54d['id']]=new Function('item',_0x4b45d4);}}},DataManager[_0x26c4e1(0x56d)]=function(_0x3d7e44){const _0x478464=_0x26c4e1;return this['isItem'](_0x3d7e44)&&_0x3d7e44[_0x478464(0x5aa)]===0x2;},DataManager['maxItemAmount']=function(_0xacf415){const _0x3d3b33=_0x26c4e1;if(!_0xacf415)return _0x3d3b33(0x39c)===_0x3d3b33(0x422)?_0x4984c7(_0xa6d1e5['$1']):0x63;else{if(_0xacf415['note'][_0x3d3b33(0x318)](/<MAX:[ ](\d+)>/i)){if('XzReB'===_0x3d3b33(0x544)){if(!this[_0x3d3b33(0x4ba)]()&&!_0x407e1f['isItem'](this[_0x3d3b33(0x4ea)]))return;const _0x2aa385=this[_0x3d3b33(0x453)]-this['itemPadding']()-_0x4aa78a,_0x256655=this[_0x3d3b33(0x338)]('0000');this[_0x3d3b33(0x597)](_0x4a1636['systemColor']()),this[_0x3d3b33(0x392)](_0x4c8459['possession'],_0x20d3c8+this[_0x3d3b33(0x284)](),_0x39ad37,_0x2aa385-_0x256655),this[_0x3d3b33(0x3a6)](),this[_0x3d3b33(0x1f5)](this['_item'],_0x5514fc,_0x1a99c6,_0x2aa385);}else return parseInt(RegExp['$1']);}else return this['defaultItemMax'](_0xacf415);}},DataManager[_0x26c4e1(0x495)]=function(_0x31202f){const _0xd4dd3a=_0x26c4e1;if(this[_0xd4dd3a(0x608)](_0x31202f))return VisuMZ[_0xd4dd3a(0x582)]['Settings'][_0xd4dd3a(0x411)]['MaxItems'];else{if(this['isWeapon'](_0x31202f))return _0xd4dd3a(0x590)!==_0xd4dd3a(0x590)?this[_0xd4dd3a(0x242)]()[_0xd4dd3a(0x318)](/RIGHT/i):VisuMZ['ItemsEquipsCore'][_0xd4dd3a(0x3d7)][_0xd4dd3a(0x411)]['MaxWeapons'];else{if(this['isArmor'](_0x31202f)){if(_0xd4dd3a(0x5dd)!==_0xd4dd3a(0x367))return VisuMZ['ItemsEquipsCore'][_0xd4dd3a(0x3d7)][_0xd4dd3a(0x411)][_0xd4dd3a(0x231)];else{const _0x23595f=_0x384cef[_0xd4dd3a(0x1f8)],_0x6957af=_0x5ef35c['iconHeight'];this[_0xd4dd3a(0x36d)]=new _0x283e24(_0x23595f,_0x6957af),this['drawNewLabelIcon'](),this['drawNewLabelText']();}}}}},ColorManager['getItemColor']=function(_0x3cf084){const _0xf439cf=_0x26c4e1;if(!_0x3cf084)return this[_0xf439cf(0x34f)]();else{if(_0x3cf084[_0xf439cf(0x291)][_0xf439cf(0x318)](/<COLOR:[ ](\d+)>/i)){if(_0xf439cf(0x5f6)!==_0xf439cf(0x445))return this[_0xf439cf(0x454)](Number(RegExp['$1'])['clamp'](0x0,0x1f));else this[_0xf439cf(0x3fe)]={},this[_0xf439cf(0x5ca)]=0xff,this[_0xf439cf(0x474)]=_0x4e9814[_0xf439cf(0x582)]['Settings'][_0xf439cf(0x320)][_0xf439cf(0x47a)],this[_0xf439cf(0x39b)]=_0x837bec[_0xf439cf(0x582)][_0xf439cf(0x3d7)][_0xf439cf(0x320)][_0xf439cf(0x2d4)];}else return _0x3cf084['note'][_0xf439cf(0x318)](/<COLOR:[ ]#(.*)>/i)?'#'+String(RegExp['$1']):this[_0xf439cf(0x34f)]();}},ColorManager['getColor']=function(_0xc1f949){const _0x3891f4=_0x26c4e1;_0xc1f949=String(_0xc1f949);if(_0xc1f949['match'](/#(.*)/i)){if(_0x3891f4(0x595)==='dZGyy')return _0x3891f4(0x524)[_0x3891f4(0x272)](String(RegExp['$1']));else{if(_0x23cd62)_0x252cde[_0x3891f4(0x586)]();}}else return this[_0x3891f4(0x454)](Number(_0xc1f949));},SceneManager[_0x26c4e1(0x289)]=function(){const _0x36a718=_0x26c4e1;return this[_0x36a718(0x419)]&&this['_scene'][_0x36a718(0x5c2)]===Scene_Shop;},Game_Temp[_0x26c4e1(0x306)][_0x26c4e1(0x243)]=function(){const _0x3f7fa6=_0x26c4e1;if(this[_0x3f7fa6(0x3d8)])return![];return VisuMZ[_0x3f7fa6(0x582)][_0x3f7fa6(0x3d7)][_0x3f7fa6(0x320)]['Enable'];},VisuMZ['ShopMenuStatusStandard']=VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x3d7)][_0x26c4e1(0x501)][_0x26c4e1(0x3b5)],VisuMZ['ItemsEquipsCore']['Game_BattlerBase_param']=Game_BattlerBase[_0x26c4e1(0x306)]['param'],Game_BattlerBase[_0x26c4e1(0x306)][_0x26c4e1(0x236)]=function(_0x45aebf){const _0x228995=_0x26c4e1;if(this[_0x228995(0x3c4)])return this[_0x228995(0x345)]?VisuMZ['ShopMenuStatusStandard']:0x1;else{if(_0x228995(0x370)!==_0x228995(0x370)){if(_0x14f9ad[_0x228995(0x5cc)](_0x378280))return![];}else return VisuMZ['ItemsEquipsCore'][_0x228995(0x413)][_0x228995(0x2e2)](this,_0x45aebf);}},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x4ae)]=Game_BattlerBase[_0x26c4e1(0x306)][_0x26c4e1(0x1e3)],Game_BattlerBase[_0x26c4e1(0x306)][_0x26c4e1(0x1e3)]=function(_0x12fcf6){const _0x12bc50=_0x26c4e1;if(!_0x12fcf6)return![];if(!VisuMZ['ItemsEquipsCore'][_0x12bc50(0x4ae)][_0x12bc50(0x2e2)](this,_0x12fcf6))return![];if(!this['meetsItemConditionsNotetags'](_0x12fcf6))return![];if(!this['meetsItemConditionsJS'](_0x12fcf6))return![];return!![];},Game_BattlerBase['prototype'][_0x26c4e1(0x394)]=function(_0x256093){const _0x18016f=_0x26c4e1;if(!this[_0x18016f(0x514)](_0x256093))return![];return!![];},Game_BattlerBase[_0x26c4e1(0x306)][_0x26c4e1(0x514)]=function(_0x40c174){const _0x155405=_0x26c4e1,_0x3429df=_0x40c174[_0x155405(0x291)];if(_0x3429df[_0x155405(0x318)](/<ENABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x155405(0x374)===_0x155405(0x374)){const _0x52a544=JSON[_0x155405(0x24a)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x25ef9f of _0x52a544){if(!$gameSwitches['value'](_0x25ef9f))return![];}return!![];}else return _0x10bc99[_0x155405(0x4df)][_0x155405(0x272)](_0xf5bb82(_0x652f6e['$1']));}if(_0x3429df[_0x155405(0x318)](/<ENABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x3a9b8e=JSON['parse']('['+RegExp['$1'][_0x155405(0x318)](/\d+/g)+']');for(const _0x76b62b of _0x3a9b8e){if(_0x155405(0x5ea)!==_0x155405(0x2d2)){if(!$gameSwitches[_0x155405(0x5cc)](_0x76b62b))return![];}else _0x358193[_0x155405(0x3b9)](_0x155405(0x430))&&_0x46402a[_0x155405(0x403)]('shift')&&this[_0x155405(0x45c)](),_0x86b725[_0x155405(0x3b9)](_0x155405(0x23e))&&_0x472c99['isPressed']('shift')&&this['cursorPageup']();}return!![];}if(_0x3429df['match'](/<ENABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if('hHrPn'!==_0x155405(0x603)){const _0x2a0a85=JSON[_0x155405(0x24a)]('['+RegExp['$1'][_0x155405(0x318)](/\d+/g)+']');for(const _0x38d370 of _0x2a0a85){if('CVeYz'==='JGxrH')_0x373091='weapon-%1'['format'](_0x39be86['id']);else{if($gameSwitches['value'](_0x38d370))return!![];}}return![];}else return _0x1fdb34[_0x155405(0x582)][_0x155405(0x3d7)]['ItemScene'][_0x155405(0x43e)];}if(_0x3429df[_0x155405(0x318)](/<DISABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x10f222=JSON[_0x155405(0x24a)]('['+RegExp['$1'][_0x155405(0x318)](/\d+/g)+']');for(const _0x54228d of _0x10f222){if(_0x155405(0x1ea)!=='aRtlT')this[_0x155405(0x4ad)](_0x16afa7[_0x155405(0x3b9)]('right'));else{if(!$gameSwitches[_0x155405(0x5cc)](_0x54228d))return!![];}}return![];}if(_0x3429df['match'](/<DISABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x155405(0x2cd)===_0x155405(0x2cd)){const _0x324ccb=JSON[_0x155405(0x24a)]('['+RegExp['$1'][_0x155405(0x318)](/\d+/g)+']');for(const _0x5d99f5 of _0x324ccb){if(!$gameSwitches[_0x155405(0x5cc)](_0x5d99f5))return!![];}return![];}else{_0x26ae1a[_0x155405(0x582)]['Scene_Shop_doBuy']['call'](this,_0x49129b);if(_0xa51551<=0x0)return;const _0x1fff38=_0x350120[_0x155405(0x582)][_0x155405(0x3d7)][_0x155405(0x4ac)];_0x1fff38['SwitchBuy']&&_0x3b2b8e[_0x155405(0x45d)](_0x1fff38['SwitchBuy'],!![]);}}if(_0x3429df[_0x155405(0x318)](/<DISABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x155405(0x5fd)!==_0x155405(0x5fd))return this[_0x155405(0x353)]();else{const _0x233b16=JSON['parse']('['+RegExp['$1'][_0x155405(0x318)](/\d+/g)+']');for(const _0x384942 of _0x233b16){if($gameSwitches[_0x155405(0x5cc)](_0x384942))return![];}return!![];}}return!![];},Game_BattlerBase[_0x26c4e1(0x306)][_0x26c4e1(0x53b)]=function(_0x3cbb97){const _0x4511bd=_0x26c4e1,_0x33a716=_0x3cbb97[_0x4511bd(0x291)],_0xdab667=VisuMZ[_0x4511bd(0x582)][_0x4511bd(0x4f7)];return _0xdab667[_0x3cbb97['id']]?_0xdab667[_0x3cbb97['id']][_0x4511bd(0x2e2)](this,_0x3cbb97):!![];},Game_Actor[_0x26c4e1(0x306)][_0x26c4e1(0x5f8)]=function(_0x3da3b7){const _0x375b0=_0x26c4e1;_0x3da3b7=this['convertInitEquipsToItems'](_0x3da3b7);const _0xa9f7cc=this[_0x375b0(0x1fc)]();this[_0x375b0(0x4ce)]=[];for(let _0x3d8690=0x0;_0x3d8690<_0xa9f7cc[_0x375b0(0x5fc)];_0x3d8690++){this[_0x375b0(0x4ce)][_0x3d8690]=new Game_Item();}for(let _0x79dcc6=0x0;_0x79dcc6<_0xa9f7cc[_0x375b0(0x5fc)];_0x79dcc6++){if('rWawb'===_0x375b0(0x5da)){if(!_0x28c022['value'](_0x26df25))return!![];}else{const _0x3ea75d=_0xa9f7cc[_0x79dcc6],_0x16d24=this[_0x375b0(0x3f5)](_0x3da3b7,_0x3ea75d);if(this[_0x375b0(0x2be)](_0x16d24))this['_equips'][_0x79dcc6][_0x375b0(0x465)](_0x16d24);}}this[_0x375b0(0x387)](!![]),this[_0x375b0(0x49a)]();},Game_Actor['prototype']['convertInitEquipsToItems']=function(_0x10f189){const _0x49f3fe=_0x26c4e1,_0x560072=[];for(let _0x3a580b=0x0;_0x3a580b<_0x10f189[_0x49f3fe(0x5fc)];_0x3a580b++){const _0x116d5b=_0x10f189[_0x3a580b];if(_0x116d5b<=0x0)continue;const _0x36cf15=$dataSystem[_0x49f3fe(0x2b4)][_0x3a580b+0x1];if(_0x36cf15===$dataSystem[_0x49f3fe(0x2b4)][0x1]||_0x3a580b===0x1&&this[_0x49f3fe(0x1f1)]())_0x560072[_0x49f3fe(0x609)]($dataWeapons[_0x116d5b]);else{if(BattleManager[_0x49f3fe(0x342)]()){if(_0x49f3fe(0x526)!==_0x49f3fe(0x526))return _0x4d6c17[_0x49f3fe(0x349)];else{const _0x6706f4=$dataArmors[_0x116d5b];_0x6706f4[_0x49f3fe(0x2f8)]===_0x3a580b+0x1&&_0x560072['push'](_0x6706f4);}}else{if(_0x49f3fe(0x2a9)===_0x49f3fe(0x492))_0x5aac3e[_0x49f3fe(0x306)][_0x49f3fe(0x261)][_0x49f3fe(0x2e2)](this);else{const _0xbdfdab=$dataArmors[_0x116d5b];_0xbdfdab[_0x49f3fe(0x2f8)]===_0x3a580b+0x1&&_0x560072[_0x49f3fe(0x609)](_0xbdfdab);}}}}return _0x560072;},Game_Actor[_0x26c4e1(0x306)][_0x26c4e1(0x3f5)]=function(_0x375876,_0x1b56ac){const _0x3a0c33=_0x26c4e1;for(const _0x40786b of _0x375876){if(_0x3a0c33(0x383)==='qpFuY'){const _0x2cb7ed=_0x370648[_0x3a0c33(0x278)];this['drawText'](_0x2cb7ed,_0x552621,_0x39387f,_0x37518b,_0x3a0c33(0x312));}else{if(!_0x40786b)continue;if(_0x40786b[_0x3a0c33(0x2f8)]===_0x1b56ac)return _0x375876['splice'](_0x375876['indexOf'](_0x40786b),0x1),_0x40786b;}}return null;},Game_Actor['prototype'][_0x26c4e1(0x1fc)]=function(){const _0x947846=_0x26c4e1,_0x33e1be=JsonEx[_0x947846(0x295)](this['_forcedSlots']||this[_0x947846(0x49e)]()['equipSlots']);if(_0x33e1be['length']>=0x2&&this[_0x947846(0x1f1)]())_0x33e1be[0x1]=0x1;return _0x33e1be;},Game_Actor[_0x26c4e1(0x306)][_0x26c4e1(0x433)]=function(_0x3e5d29){const _0x23b9fc=_0x26c4e1;_0x3e5d29[_0x23b9fc(0x3af)](0x0),_0x3e5d29[_0x23b9fc(0x3af)](-0x1),this[_0x23b9fc(0x3e4)]=_0x3e5d29,this['refresh'](),this[_0x23b9fc(0x5e8)]();},Game_Actor['prototype'][_0x26c4e1(0x1d8)]=function(){const _0x157191=_0x26c4e1;this['_forcedSlots']=undefined,this[_0x157191(0x49a)](),this[_0x157191(0x5e8)]();},Game_Actor['prototype'][_0x26c4e1(0x5e8)]=function(){const _0xe5ec34=_0x26c4e1;let _0x1ead9f=this['equipSlots']()[_0xe5ec34(0x5fc)];while(this['_equips'][_0xe5ec34(0x5fc)]>_0x1ead9f){if(_0xe5ec34(0x24d)===_0xe5ec34(0x24d)){const _0x497c2f=this[_0xe5ec34(0x4ce)][this['_equips'][_0xe5ec34(0x5fc)]-0x1];if(_0x497c2f&&_0x497c2f[_0xe5ec34(0x4d5)]()){if(_0xe5ec34(0x42d)!==_0xe5ec34(0x42d)){const _0x4b0f01=_0x448568[_0xe5ec34(0x582)][_0xe5ec34(0x4a8)]['call'](this);return this[_0xe5ec34(0x5ab)]()&&this['adjustItemWidthByStatus']()&&(_0x4b0f01['width']-=this['statusWidth']()),_0x4b0f01;}else $gameParty[_0xe5ec34(0x625)](_0x497c2f[_0xe5ec34(0x4d5)](),0x1);}this[_0xe5ec34(0x4ce)]['pop']();}else return![];}while(_0x1ead9f>this[_0xe5ec34(0x4ce)][_0xe5ec34(0x5fc)]){this['_equips']['push'](new Game_Item());}},Game_Actor[_0x26c4e1(0x306)]['prepareNewEquipSlotsOnLoad']=function(){const _0x1e4590=_0x26c4e1,_0x3ee255=this[_0x1e4590(0x1fc)]();for(let _0x1e2e39=0x0;_0x1e2e39<_0x3ee255[_0x1e4590(0x5fc)];_0x1e2e39++){if(!this[_0x1e4590(0x4ce)][_0x1e2e39])this[_0x1e4590(0x4ce)][_0x1e2e39]=new Game_Item();}this['releaseUnequippableItems'](![]),this[_0x1e4590(0x49a)]();},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x2a8)]=Game_Actor['prototype'][_0x26c4e1(0x3a1)],Game_Actor[_0x26c4e1(0x306)][_0x26c4e1(0x3a1)]=function(_0x1fce24,_0x4f42c8){const _0x1a1308=_0x26c4e1;if(!this[_0x1a1308(0x5fe)]){const _0x20ae0f=JsonEx[_0x1a1308(0x295)](this);_0x20ae0f[_0x1a1308(0x5fe)]=!![],VisuMZ[_0x1a1308(0x582)]['Game_Actor_changeEquip'][_0x1a1308(0x2e2)](this,_0x1fce24,_0x4f42c8),this[_0x1a1308(0x46e)](_0x20ae0f);}else VisuMZ[_0x1a1308(0x582)]['Game_Actor_changeEquip']['call'](this,_0x1fce24,_0x4f42c8);},VisuMZ['ItemsEquipsCore']['Game_Actor_forceChangeEquip']=Game_Actor[_0x26c4e1(0x306)][_0x26c4e1(0x5a6)],Game_Actor[_0x26c4e1(0x306)][_0x26c4e1(0x5a6)]=function(_0x5a9dc0,_0x418eef){const _0x40ec10=_0x26c4e1;if(!this[_0x40ec10(0x5fe)]){if(_0x40ec10(0x50d)==='mfziS'){const _0x37a9fa=JsonEx['makeDeepCopy'](this);_0x37a9fa[_0x40ec10(0x5fe)]=!![],VisuMZ['ItemsEquipsCore'][_0x40ec10(0x240)][_0x40ec10(0x2e2)](this,_0x5a9dc0,_0x418eef),this[_0x40ec10(0x46e)](_0x37a9fa);}else return;}else VisuMZ[_0x40ec10(0x582)][_0x40ec10(0x240)]['call'](this,_0x5a9dc0,_0x418eef);},VisuMZ['ItemsEquipsCore'][_0x26c4e1(0x5d6)]=Game_Actor['prototype']['discardEquip'],Game_Actor[_0x26c4e1(0x306)][_0x26c4e1(0x385)]=function(_0x10ab39){const _0x8e9ed8=_0x26c4e1;if(!this[_0x8e9ed8(0x5fe)]){const _0x2669ce=JsonEx[_0x8e9ed8(0x295)](this);_0x2669ce[_0x8e9ed8(0x5fe)]=!![],VisuMZ[_0x8e9ed8(0x582)][_0x8e9ed8(0x5d6)][_0x8e9ed8(0x2e2)](this,_0x10ab39),this[_0x8e9ed8(0x46e)](_0x2669ce);}else _0x8e9ed8(0x33e)!==_0x8e9ed8(0x393)?VisuMZ[_0x8e9ed8(0x582)][_0x8e9ed8(0x5d6)][_0x8e9ed8(0x2e2)](this,_0x10ab39):(this[_0x8e9ed8(0x5a5)][_0x8e9ed8(0x3fc)](),this[_0x8e9ed8(0x5a5)]['deselect'](),this[_0x8e9ed8(0x513)][_0x8e9ed8(0x283)](0x0),this[_0x8e9ed8(0x513)]['activate']());},Game_Actor['prototype'][_0x26c4e1(0x387)]=function(_0x277768){const _0x54bbb2=_0x26c4e1;for(;;){const _0x36d937=this[_0x54bbb2(0x1fc)](),_0x37180f=this[_0x54bbb2(0x325)](),_0x53f693=_0x37180f['length'];let _0x25f99e=![];for(let _0x4dc39e=0x0;_0x4dc39e<_0x53f693;_0x4dc39e++){const _0x5ce421=_0x37180f[_0x4dc39e];if(_0x5ce421&&(!this[_0x54bbb2(0x2be)](_0x5ce421)||_0x5ce421[_0x54bbb2(0x2f8)]!==_0x36d937[_0x4dc39e])){!_0x277768&&this['tradeItemWithParty'](null,_0x5ce421);if(!this[_0x54bbb2(0x5fe)]){const _0x1d9f16=JsonEx[_0x54bbb2(0x295)](this);_0x1d9f16['_tempActor']=!![],this['_equips'][_0x4dc39e]['setObject'](null),this[_0x54bbb2(0x46e)](_0x1d9f16);}else this['_equips'][_0x4dc39e][_0x54bbb2(0x465)](null);_0x25f99e=!![];}}if(!_0x25f99e){if('NKYgo'===_0x54bbb2(0x36f)){if(!_0x575dff['value'](_0x1a4552))return![];}else break;}}},Game_Actor[_0x26c4e1(0x306)]['equipAdjustHpMp']=function(_0x261c11){const _0x316b30=_0x26c4e1;if(this[_0x316b30(0x5fe)])return;if(!VisuMZ['ItemsEquipsCore']['Settings'][_0x316b30(0x30c)]['EquipAdjustHpMp'])return;const _0x278d66=Math[_0x316b30(0x371)](_0x261c11[_0x316b30(0x3ed)]()*this[_0x316b30(0x215)]),_0x1f8b33=Math[_0x316b30(0x371)](_0x261c11[_0x316b30(0x1f4)]()*this[_0x316b30(0x432)]);if(this['hp']>0x0)this[_0x316b30(0x205)](_0x278d66);if(this['mp']>0x0)this[_0x316b30(0x476)](_0x1f8b33);},Game_Actor[_0x26c4e1(0x306)]['clearEquipments']=function(){const _0x3087b3=_0x26c4e1,_0x5d53bb=this[_0x3087b3(0x1fc)]()['length'];for(let _0x31d862=0x0;_0x31d862<_0x5d53bb;_0x31d862++){if(this[_0x3087b3(0x37d)](_0x31d862))this['changeEquip'](_0x31d862,null);}},Game_Actor[_0x26c4e1(0x306)][_0x26c4e1(0x37d)]=function(_0x55543f){const _0x4e4c48=_0x26c4e1;if(this['nonRemovableEtypes']()['includes'](this[_0x4e4c48(0x1fc)]()[_0x55543f])){if(_0x4e4c48(0x57a)===_0x4e4c48(0x213)){if(!_0x181627[_0x4e4c48(0x5cc)](_0x39cbbb))return!![];}else return![];}else{if(_0x4e4c48(0x50f)===_0x4e4c48(0x50f))return this['isEquipChangeOk'](_0x55543f);else{const _0x3dc28=_0x36befd['parse']('['+_0x288745['$1'][_0x4e4c48(0x318)](/\d+/g)+']');for(const _0xf2d1ae of _0x3dc28){if(!_0x4463b3[_0x4e4c48(0x5cc)](_0xf2d1ae))return!![];}return![];}}},Game_Actor[_0x26c4e1(0x306)][_0x26c4e1(0x485)]=function(){const _0xf851e9=_0x26c4e1;return VisuMZ[_0xf851e9(0x582)][_0xf851e9(0x3d7)][_0xf851e9(0x30c)]['NonRemoveETypes'];},Game_Actor['prototype'][_0x26c4e1(0x303)]=function(){const _0x1611c4=_0x26c4e1,_0x4f2645=this[_0x1611c4(0x1fc)]()[_0x1611c4(0x5fc)];for(let _0x4a0936=0x0;_0x4a0936<_0x4f2645;_0x4a0936++){if(_0x1611c4(0x302)===_0x1611c4(0x302)){if(this['isOptimizeEquipOk'](_0x4a0936))this[_0x1611c4(0x3a1)](_0x4a0936,null);}else{const _0x2466c6=_0x1611c4(0x3f1);if(this[_0x1611c4(0x469)][_0x2466c6])return this[_0x1611c4(0x469)][_0x2466c6];const _0x288f97=_0x5d7976[_0x1611c4(0x582)][_0x1611c4(0x3d7)][_0x1611c4(0x501)],_0x1deca5='HitType%1'[_0x1611c4(0x272)](this['_item']['hitType']);return _0x288f97[_0x1deca5];}}for(let _0x4bd775=0x0;_0x4bd775<_0x4f2645;_0x4bd775++){if(this[_0x1611c4(0x28f)](_0x4bd775))this[_0x1611c4(0x3a1)](_0x4bd775,this[_0x1611c4(0x4a1)](_0x4bd775));}},Game_Actor[_0x26c4e1(0x306)][_0x26c4e1(0x28f)]=function(_0x239d17){const _0x5b55d8=_0x26c4e1;if(this[_0x5b55d8(0x4d0)]()[_0x5b55d8(0x3b2)](this[_0x5b55d8(0x1fc)]()[_0x239d17]))return![];else{if('MoBGS'===_0x5b55d8(0x42c))return this[_0x5b55d8(0x48a)](_0x239d17);else{const _0x13ea90=this['getItemOccasionText']();return this[_0x5b55d8(0x266)](_0x13ea90,_0x2642e8,_0x325e72,_0x51b66c,![],_0x5b55d8(0x312)),this[_0x5b55d8(0x43c)](_0x26c0bc,_0xc0fd05,_0x3bc5d8),this[_0x5b55d8(0x277)](),!![];}}},Game_Actor['prototype'][_0x26c4e1(0x4d0)]=function(){const _0xe977cb=_0x26c4e1;return VisuMZ[_0xe977cb(0x582)][_0xe977cb(0x3d7)][_0xe977cb(0x30c)][_0xe977cb(0x208)];},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x4b6)]=Game_Actor[_0x26c4e1(0x306)]['tradeItemWithParty'],Game_Actor[_0x26c4e1(0x306)]['tradeItemWithParty']=function(_0x4afd47,_0x55714f){const _0x5933ef=_0x26c4e1;if(this[_0x5933ef(0x5fe)])return![];$gameTemp[_0x5933ef(0x3d8)]=!![];const _0x2297f0=VisuMZ[_0x5933ef(0x582)]['Game_Actor_tradeItemWithParty']['call'](this,_0x4afd47,_0x55714f);return $gameTemp[_0x5933ef(0x3d8)]=![],_0x2297f0;},Game_Actor[_0x26c4e1(0x306)][_0x26c4e1(0x5be)]=function(_0x491066,_0x2670f3){const _0x344b13=_0x26c4e1,_0x45db95=this[_0x344b13(0x362)](_0x491066);if(_0x45db95<0x0)return;const _0x3449f4=_0x491066===0x1?$dataWeapons[_0x2670f3]:$dataArmors[_0x2670f3];this[_0x344b13(0x3a1)](_0x45db95,_0x3449f4);},Game_Actor[_0x26c4e1(0x306)][_0x26c4e1(0x362)]=function(_0x5066b3){const _0x21d843=_0x26c4e1;let _0x325560=0x0;const _0x5ed32f=this[_0x21d843(0x1fc)](),_0x41e176=this[_0x21d843(0x325)]();for(let _0x40089d=0x0;_0x40089d<_0x5ed32f[_0x21d843(0x5fc)];_0x40089d++){if(_0x21d843(0x50b)!=='YbTIJ'){if(_0x5ed32f[_0x40089d]===_0x5066b3){_0x325560=_0x40089d;if(!_0x41e176[_0x40089d])return _0x325560;}}else this[_0x21d843(0x3ab)][_0x21d843(0x4e4)](),this['contentsBack'][_0x21d843(0x4e4)](),this[_0x21d843(0x4ea)]&&(this['resetFontSettings'](),this['changePaintOpacity'](!![]),this[_0x21d843(0x2a6)](),this[_0x21d843(0x4ba)]()?this[_0x21d843(0x5d2)]():this[_0x21d843(0x351)](),this['drawCustomShopGraphic']());}return _0x325560;},VisuMZ['ItemsEquipsCore'][_0x26c4e1(0x585)]=Game_Actor[_0x26c4e1(0x306)][_0x26c4e1(0x5d8)],Game_Actor[_0x26c4e1(0x306)]['paramPlus']=function(_0x3f37f1){const _0x5ed8da=_0x26c4e1;let _0xe378e3=VisuMZ[_0x5ed8da(0x582)][_0x5ed8da(0x585)][_0x5ed8da(0x2e2)](this,_0x3f37f1);for(const _0x51d2cd of this[_0x5ed8da(0x325)]()){if(_0x51d2cd)_0xe378e3+=this[_0x5ed8da(0x3f8)](_0x51d2cd,_0x3f37f1);}return _0xe378e3;},Game_Actor['prototype'][_0x26c4e1(0x3f8)]=function(_0x5779eb,_0x29434d){const _0x463ed8=_0x26c4e1;if(this[_0x463ed8(0x228)])return 0x0;const _0x17564b=(DataManager[_0x463ed8(0x1e4)](_0x5779eb)?_0x463ed8(0x376):_0x463ed8(0x388))[_0x463ed8(0x272)](_0x5779eb['id']),_0x29cc95=_0x463ed8(0x268)[_0x463ed8(0x272)](_0x17564b,_0x29434d);if(VisuMZ['ItemsEquipsCore'][_0x463ed8(0x26e)][_0x29cc95]){if(_0x463ed8(0x5c1)==='UFIsR'){this[_0x463ed8(0x228)]=!![];const _0x306f70=VisuMZ[_0x463ed8(0x582)]['paramJS'][_0x29cc95][_0x463ed8(0x2e2)](this,_0x5779eb,_0x29434d);return this[_0x463ed8(0x228)]=![],_0x306f70;}else{if(this[_0x463ed8(0x3d9)][_0x463ed8(0x565)][_0x5d5e28]!==0x0)this[_0x463ed8(0x3d9)][_0x463ed8(0x52c)]=!![];}}else return 0x0;},Game_Actor[_0x26c4e1(0x306)][_0x26c4e1(0x467)]=function(_0x2c1f94){const _0x409d77=_0x26c4e1;this[_0x409d77(0x3c4)]=!![],this[_0x409d77(0x345)]=_0x2c1f94;},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x263)]=Game_Party[_0x26c4e1(0x306)][_0x26c4e1(0x358)],Game_Party[_0x26c4e1(0x306)][_0x26c4e1(0x358)]=function(){const _0x1b0b60=_0x26c4e1;VisuMZ['ItemsEquipsCore']['Game_Party_initialize'][_0x1b0b60(0x2e2)](this),this[_0x1b0b60(0x300)]();},Game_Party[_0x26c4e1(0x306)][_0x26c4e1(0x300)]=function(){this['_newItemsList']=[];},Game_Party['prototype']['isNewItem']=function(_0x13b5e1){const _0x2e15c1=_0x26c4e1;if(!$gameTemp[_0x2e15c1(0x243)]())return![];if(this[_0x2e15c1(0x32a)]===undefined)this['initNewItemsList']();let _0xa98f68='';if(DataManager[_0x2e15c1(0x608)](_0x13b5e1))_0xa98f68='item-%1'[_0x2e15c1(0x272)](_0x13b5e1['id']);else{if(DataManager[_0x2e15c1(0x1e4)](_0x13b5e1))_0x2e15c1(0x45f)!==_0x2e15c1(0x2ac)?_0xa98f68=_0x2e15c1(0x323)[_0x2e15c1(0x272)](_0x13b5e1['id']):_0x2bca11[_0x2e15c1(0x306)][_0x2e15c1(0x628)][_0x2e15c1(0x2e2)](this,_0x1f5540);else{if(DataManager['isArmor'](_0x13b5e1))_0xa98f68=_0x2e15c1(0x449)[_0x2e15c1(0x272)](_0x13b5e1['id']);else return;}}return this[_0x2e15c1(0x32a)]['includes'](_0xa98f68);},Game_Party[_0x26c4e1(0x306)][_0x26c4e1(0x5d4)]=function(_0x3eccd1){const _0x33f236=_0x26c4e1;if(!$gameTemp[_0x33f236(0x243)]())return;if(this['_newItemsList']===undefined)this[_0x33f236(0x300)]();let _0x200c75='';if(DataManager['isItem'](_0x3eccd1))_0x200c75=_0x33f236(0x581)[_0x33f236(0x272)](_0x3eccd1['id']);else{if(DataManager[_0x33f236(0x1e4)](_0x3eccd1))_0x200c75=_0x33f236(0x323)['format'](_0x3eccd1['id']);else{if(DataManager[_0x33f236(0x396)](_0x3eccd1)){if('ckQny'===_0x33f236(0x572))_0x200c75=_0x33f236(0x449)[_0x33f236(0x272)](_0x3eccd1['id']);else return this[_0x33f236(0x1f7)]()?this['slotWindowRect']():_0x476360[_0x33f236(0x582)]['Scene_Equip_itemWindowRect'][_0x33f236(0x2e2)](this);}else return;}}if(!this[_0x33f236(0x32a)]['includes'](_0x200c75))this[_0x33f236(0x32a)][_0x33f236(0x609)](_0x200c75);},Game_Party[_0x26c4e1(0x306)][_0x26c4e1(0x217)]=function(_0x535a91){const _0x1be262=_0x26c4e1;if(!$gameTemp[_0x1be262(0x243)]())return;if(this[_0x1be262(0x32a)]===undefined)this[_0x1be262(0x300)]();let _0x2852ed='';if(DataManager['isItem'](_0x535a91))_0x2852ed=_0x1be262(0x581)['format'](_0x535a91['id']);else{if(DataManager['isWeapon'](_0x535a91))_0x2852ed=_0x1be262(0x323)[_0x1be262(0x272)](_0x535a91['id']);else{if(DataManager[_0x1be262(0x396)](_0x535a91)){if('ToYNI'!==_0x1be262(0x5a2))_0x2852ed='armor-%1'[_0x1be262(0x272)](_0x535a91['id']);else return this['isItem'](_0x2fad75)&&_0x35e87d['itypeId']===0x2;}else{if(_0x1be262(0x601)!==_0x1be262(0x539))return;else this[_0x1be262(0x3fc)](),this['deselect']();}}}this['_newItemsList'][_0x1be262(0x3b2)](_0x2852ed)&&this['_newItemsList'][_0x1be262(0x35e)](this[_0x1be262(0x32a)]['indexOf'](_0x2852ed),0x1);},VisuMZ['ItemsEquipsCore']['Game_Party_gainItem']=Game_Party['prototype'][_0x26c4e1(0x625)],Game_Party[_0x26c4e1(0x306)][_0x26c4e1(0x625)]=function(_0x2ce1f4,_0x2b65e2,_0x265db9){const _0x4e4fc8=_0x26c4e1,_0xbf6979=this[_0x4e4fc8(0x4c9)](_0x2ce1f4);VisuMZ[_0x4e4fc8(0x582)][_0x4e4fc8(0x60e)][_0x4e4fc8(0x2e2)](this,_0x2ce1f4,_0x2b65e2,_0x265db9);if(this[_0x4e4fc8(0x4c9)](_0x2ce1f4)>_0xbf6979)this[_0x4e4fc8(0x5d4)](_0x2ce1f4);},Game_Party[_0x26c4e1(0x306)][_0x26c4e1(0x334)]=function(_0x41c626){const _0x234952=_0x26c4e1;return DataManager[_0x234952(0x20a)](_0x41c626);},VisuMZ['ItemsEquipsCore'][_0x26c4e1(0x486)]=Scene_ItemBase[_0x26c4e1(0x306)]['activateItemWindow'],Scene_ItemBase['prototype']['activateItemWindow']=function(){const _0x7945e4=_0x26c4e1;VisuMZ[_0x7945e4(0x582)]['Scene_ItemBase_activateItemWindow'][_0x7945e4(0x2e2)](this),this[_0x7945e4(0x3bd)][_0x7945e4(0x4c0)]();},Scene_Item[_0x26c4e1(0x306)][_0x26c4e1(0x35f)]=function(){const _0x7e1504=_0x26c4e1;if(ConfigManager[_0x7e1504(0x3a9)]&&ConfigManager[_0x7e1504(0x46a)]!==undefined){if(_0x7e1504(0x521)!==_0x7e1504(0x1db))return ConfigManager[_0x7e1504(0x46a)];else _0x3fdd3f[_0x7e1504(0x306)][_0x7e1504(0x261)]['call'](this);}else{if(this['isUseItemsEquipsCoreUpdatedLayout']()){if(_0x7e1504(0x5e5)!==_0x7e1504(0x5e5))this[_0x7e1504(0x248)](),_0xafd2bd[_0x7e1504(0x582)][_0x7e1504(0x575)]['call'](this);else return this['updatedLayoutStyle']()[_0x7e1504(0x318)](/LOWER/i);}else Scene_ItemBase[_0x7e1504(0x306)][_0x7e1504(0x261)][_0x7e1504(0x2e2)](this);}},Scene_Item[_0x26c4e1(0x306)][_0x26c4e1(0x261)]=function(){const _0x5bc59b=_0x26c4e1;if(ConfigManager[_0x5bc59b(0x3a9)]&&ConfigManager[_0x5bc59b(0x349)]!==undefined)return ConfigManager[_0x5bc59b(0x349)];else{if(this['isUseItemsEquipsCoreUpdatedLayout']())return this[_0x5bc59b(0x242)]()['match'](/RIGHT/i);else Scene_ItemBase[_0x5bc59b(0x306)][_0x5bc59b(0x261)]['call'](this);}},Scene_Item[_0x26c4e1(0x306)][_0x26c4e1(0x242)]=function(){const _0x6cf845=_0x26c4e1;return VisuMZ[_0x6cf845(0x582)][_0x6cf845(0x3d7)][_0x6cf845(0x411)][_0x6cf845(0x2a2)];},Scene_Item['prototype'][_0x26c4e1(0x375)]=function(){const _0x4fbe1e=_0x26c4e1;return this[_0x4fbe1e(0x547)]&&this[_0x4fbe1e(0x547)][_0x4fbe1e(0x375)]();},Scene_Item[_0x26c4e1(0x306)][_0x26c4e1(0x1f7)]=function(){const _0x37e7b8=_0x26c4e1;return VisuMZ[_0x37e7b8(0x582)][_0x37e7b8(0x3d7)]['ItemScene'][_0x37e7b8(0x43e)];},VisuMZ[_0x26c4e1(0x582)]['Scene_Item_create']=Scene_Item['prototype'][_0x26c4e1(0x48d)],Scene_Item['prototype'][_0x26c4e1(0x48d)]=function(){const _0x181682=_0x26c4e1;VisuMZ[_0x181682(0x582)]['Scene_Item_create']['call'](this),this[_0x181682(0x375)]()&&this[_0x181682(0x4ed)]();},Scene_Item['prototype']['helpWindowRect']=function(){const _0xbce91b=_0x26c4e1;if(this[_0xbce91b(0x1f7)]()){if(_0xbce91b(0x458)!=='NQylE')return this[_0xbce91b(0x38f)]();else{if(!this[_0xbce91b(0x514)](_0x24b2b8))return![];return!![];}}else return Scene_ItemBase['prototype'][_0xbce91b(0x3f6)][_0xbce91b(0x2e2)](this);},Scene_Item[_0x26c4e1(0x306)][_0x26c4e1(0x38f)]=function(){const _0x13ca2a=_0x26c4e1,_0x2ad3c9=0x0,_0x5d1421=this[_0x13ca2a(0x5f1)](),_0x4eee60=Graphics['boxWidth'],_0x9f829=this['helpAreaHeight']();return new Rectangle(_0x2ad3c9,_0x5d1421,_0x4eee60,_0x9f829);},VisuMZ[_0x26c4e1(0x582)]['Scene_Item_createCategoryWindow']=Scene_Item['prototype']['createCategoryWindow'],Scene_Item[_0x26c4e1(0x306)][_0x26c4e1(0x4b0)]=function(){const _0x157ad7=_0x26c4e1;VisuMZ[_0x157ad7(0x582)][_0x157ad7(0x37b)][_0x157ad7(0x2e2)](this),this['isUseModernControls']()&&this[_0x157ad7(0x556)]();},Scene_Item['prototype'][_0x26c4e1(0x556)]=function(){const _0x19a288=_0x26c4e1;delete this['_categoryWindow'][_0x19a288(0x1f3)]['ok'],delete this[_0x19a288(0x547)][_0x19a288(0x1f3)]['cancel'];},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x559)]=Scene_Item[_0x26c4e1(0x306)][_0x26c4e1(0x61c)],Scene_Item[_0x26c4e1(0x306)]['categoryWindowRect']=function(){const _0xb026df=_0x26c4e1;return this[_0xb026df(0x1f7)]()?this[_0xb026df(0x4e2)]():VisuMZ[_0xb026df(0x582)][_0xb026df(0x559)][_0xb026df(0x2e2)](this);},Scene_Item[_0x26c4e1(0x306)]['categoryWindowRectItemsEquipsCore']=function(){const _0x5d6010=_0x26c4e1,_0xdee5e5=0x0,_0x57e2be=this['mainAreaTop'](),_0x251d8f=Graphics[_0x5d6010(0x254)],_0x56f29d=this[_0x5d6010(0x59d)](0x1,!![]);return new Rectangle(_0xdee5e5,_0x57e2be,_0x251d8f,_0x56f29d);},VisuMZ['ItemsEquipsCore'][_0x26c4e1(0x265)]=Scene_Item[_0x26c4e1(0x306)][_0x26c4e1(0x416)],Scene_Item[_0x26c4e1(0x306)][_0x26c4e1(0x416)]=function(){const _0x16aa3c=_0x26c4e1;VisuMZ[_0x16aa3c(0x582)][_0x16aa3c(0x265)][_0x16aa3c(0x2e2)](this);if(this['isUseModernControls']()){if(_0x16aa3c(0x256)!=='GITNR')this[_0x16aa3c(0x511)]();else return this[_0x16aa3c(0x25d)]();}this[_0x16aa3c(0x5ab)]()&&this[_0x16aa3c(0x27b)]();},VisuMZ['ItemsEquipsCore'][_0x26c4e1(0x4a8)]=Scene_Item[_0x26c4e1(0x306)][_0x26c4e1(0x230)],Scene_Item['prototype'][_0x26c4e1(0x230)]=function(){const _0x562fbd=_0x26c4e1;if(this[_0x562fbd(0x1f7)]()){if(_0x562fbd(0x4d3)===_0x562fbd(0x4d3))return this[_0x562fbd(0x5bb)]();else{if(_0x34493b['id']===_0x84ffd0['id'])_0x1efc23+=0x1;}}else{const _0x1749c1=VisuMZ[_0x562fbd(0x582)][_0x562fbd(0x4a8)]['call'](this);return this[_0x562fbd(0x5ab)]()&&this[_0x562fbd(0x33d)]()&&(_0x1749c1[_0x562fbd(0x22c)]-=this[_0x562fbd(0x4ca)]()),_0x1749c1;}},Scene_Item[_0x26c4e1(0x306)]['itemWindowRectItemsEquipsCore']=function(){const _0x554309=_0x26c4e1,_0x139289=this['isRightInputMode']()?this[_0x554309(0x4ca)]():0x0,_0x282e6c=this[_0x554309(0x547)]['y']+this['_categoryWindow'][_0x554309(0x27e)],_0xa5aec6=Graphics[_0x554309(0x254)]-this[_0x554309(0x4ca)](),_0x43fbde=this[_0x554309(0x2b0)]()-_0x282e6c;return new Rectangle(_0x139289,_0x282e6c,_0xa5aec6,_0x43fbde);},Scene_Item[_0x26c4e1(0x306)][_0x26c4e1(0x511)]=function(){const _0x39d906=_0x26c4e1;this[_0x39d906(0x3bd)][_0x39d906(0x369)]('cancel',this[_0x39d906(0x5ec)]['bind'](this));},Scene_Item[_0x26c4e1(0x306)][_0x26c4e1(0x5ab)]=function(){const _0xfa9188=_0x26c4e1;if(this['isUseItemsEquipsCoreUpdatedLayout']())return!![];else{if(_0xfa9188(0x421)!==_0xfa9188(0x421)){const _0x268205=_0x68555f['makeDeepCopy'](this);_0x268205[_0xfa9188(0x5fe)]=!![],this[_0xfa9188(0x4ce)][_0x432950][_0xfa9188(0x465)](null),this['equipAdjustHpMp'](_0x268205);}else return VisuMZ['ItemsEquipsCore']['Settings'][_0xfa9188(0x411)]['ShowShopStatus'];}},Scene_Item[_0x26c4e1(0x306)]['adjustItemWidthByStatus']=function(){const _0x163e03=_0x26c4e1;return VisuMZ['ItemsEquipsCore'][_0x163e03(0x3d7)][_0x163e03(0x411)]['ItemSceneAdjustItemList'];},Scene_Item[_0x26c4e1(0x306)][_0x26c4e1(0x27b)]=function(){const _0x34fdf2=_0x26c4e1,_0x50770d=this[_0x34fdf2(0x5c8)]();this[_0x34fdf2(0x3aa)]=new Window_ShopStatus(_0x50770d),this[_0x34fdf2(0x51f)](this['_statusWindow']),this[_0x34fdf2(0x3bd)][_0x34fdf2(0x24e)](this[_0x34fdf2(0x3aa)]);const _0x569a28=VisuMZ[_0x34fdf2(0x582)][_0x34fdf2(0x3d7)][_0x34fdf2(0x411)][_0x34fdf2(0x47b)];this[_0x34fdf2(0x3aa)][_0x34fdf2(0x429)](_0x569a28||0x0);},Scene_Item[_0x26c4e1(0x306)][_0x26c4e1(0x5c8)]=function(){const _0x22089b=_0x26c4e1;return this[_0x22089b(0x1f7)]()?this[_0x22089b(0x372)]():VisuMZ[_0x22089b(0x582)][_0x22089b(0x3d7)][_0x22089b(0x411)]['ItemMenuStatusRect']['call'](this);},Scene_Item[_0x26c4e1(0x306)][_0x26c4e1(0x372)]=function(){const _0x229d58=_0x26c4e1,_0x57f8ed=this['statusWidth'](),_0xbc3518=this[_0x229d58(0x3bd)]['height'],_0x5c647b=this[_0x229d58(0x261)]()?0x0:Graphics[_0x229d58(0x254)]-this[_0x229d58(0x4ca)](),_0x22f0d7=this[_0x229d58(0x3bd)]['y'];return new Rectangle(_0x5c647b,_0x22f0d7,_0x57f8ed,_0xbc3518);},Scene_Item[_0x26c4e1(0x306)][_0x26c4e1(0x4ca)]=function(){const _0x398efc=_0x26c4e1;return Scene_Shop['prototype'][_0x398efc(0x4ca)]();},Scene_Item[_0x26c4e1(0x306)][_0x26c4e1(0x438)]=function(){const _0x2256fc=_0x26c4e1;if(!this['updatedLayoutStyle']())return![];if(!this[_0x2256fc(0x375)]())return![];if(!this['_itemWindow'])return![];if(!this[_0x2256fc(0x3bd)][_0x2256fc(0x3dc)])return![];return this['updatedLayoutStyle']()&&this[_0x2256fc(0x375)]();},Scene_Item[_0x26c4e1(0x306)][_0x26c4e1(0x5fb)]=function(){const _0x11325a=_0x26c4e1;if(this[_0x11325a(0x438)]()){if('VFUPG'!=='VFUPG')this[_0x11325a(0x5eb)](!![]);else{if(this[_0x11325a(0x3bd)]['maxCols']()===0x1){if(_0x11325a(0x340)!=='XBpyS')return TextManager['getInputMultiButtonStrings']('left',_0x11325a(0x38c));else{const _0xc048c9=_0x11325a(0x45e);if(this[_0x11325a(0x469)][_0xc048c9])return this[_0x11325a(0x469)][_0xc048c9];const _0x2e6298=_0x4dfd4d['ItemsEquipsCore'][_0x11325a(0x3d7)][_0x11325a(0x501)],_0x51db76='Occasion%1'[_0x11325a(0x272)](this[_0x11325a(0x4ea)]['occasion']);return _0x2e6298[_0x51db76];}}else{if(_0x11325a(0x55b)===_0x11325a(0x47d)){const _0x5d58e1=_0xf49266[_0x11325a(0x582)][_0x11325a(0x3d7)][_0x11325a(0x501)]['LabelDamageTP'];return _0x5d58e1[_0x11325a(0x272)](_0x24e2c0['tp']);}else return TextManager['getInputMultiButtonStrings']('pageup',_0x11325a(0x430));}}}return Scene_ItemBase[_0x11325a(0x306)][_0x11325a(0x5fb)][_0x11325a(0x2e2)](this);},Scene_Item[_0x26c4e1(0x306)][_0x26c4e1(0x299)]=function(){const _0x592d70=_0x26c4e1;if(this['buttonAssistItemListRequirement']())return VisuMZ[_0x592d70(0x582)][_0x592d70(0x3d7)]['ItemScene'][_0x592d70(0x2c6)];return Scene_ItemBase[_0x592d70(0x306)][_0x592d70(0x299)][_0x592d70(0x2e2)](this);},Scene_Equip['prototype'][_0x26c4e1(0x35f)]=function(){const _0x9e066a=_0x26c4e1;if(ConfigManager[_0x9e066a(0x3a9)]&&ConfigManager[_0x9e066a(0x46a)]!==undefined)return ConfigManager[_0x9e066a(0x46a)];else{if(this[_0x9e066a(0x1f7)]())return this[_0x9e066a(0x242)]()[_0x9e066a(0x318)](/LOWER/i);else'tMYkk'!=='PGGKB'?Scene_MenuBase[_0x9e066a(0x306)]['isRightInputMode'][_0x9e066a(0x2e2)](this):(_0x2a1d79['ItemsEquipsCore'][_0x9e066a(0x4dd)][_0x9e066a(0x2e2)](this,_0x182020),this[_0x9e066a(0x4fb)](_0x388637));}},Scene_Equip['prototype'][_0x26c4e1(0x261)]=function(){const _0x525afd=_0x26c4e1;if(ConfigManager[_0x525afd(0x3a9)]&&ConfigManager['uiInputPosition']!==undefined){if(_0x525afd(0x49c)==='HWfJs')return ConfigManager[_0x525afd(0x349)];else this[_0x525afd(0x597)](_0x471e30['paramchangeTextColor'](_0x1a89f6)),_0x309a6c=(_0x184081>0x0?_0x525afd(0x399):_0x525afd(0x2c4))[_0x525afd(0x272)](_0x58c349),this[_0x525afd(0x392)](_0xa0c525,_0x44e512+_0x1ace09,_0x561b92,_0x360d2f,_0x525afd(0x249));}else{if(this[_0x525afd(0x1f7)]()){if('AeDBI'!=='Mbqwv')return this[_0x525afd(0x242)]()[_0x525afd(0x318)](/RIGHT/i);else{const _0x24fc87=_0x525afd(0x401);if(!this['_itemData'][_0x525afd(0x52c)]&&!this['_customItemInfo'][_0x24fc87])return![];const _0x12aa0c=this['getItemEffectsAddedStatesBuffsLabel']();this[_0x525afd(0x266)](_0x12aa0c,_0x226bc8,_0x103642,_0x22019e,!![]);const _0x5631c6=this[_0x525afd(0x221)]();return this['drawItemKeyData'](_0x5631c6,_0x3e82a8,_0x497a70,_0x1437b7,![],_0x525afd(0x38c)),this[_0x525afd(0x43c)](_0x5c4161,_0x1cbecd,_0x558ca9),this[_0x525afd(0x277)](),!![];}}else Scene_MenuBase['prototype']['isRightInputMode'][_0x525afd(0x2e2)](this);}},Scene_Equip[_0x26c4e1(0x306)]['updatedLayoutStyle']=function(){const _0x4b8928=_0x26c4e1;return VisuMZ[_0x4b8928(0x582)][_0x4b8928(0x3d7)][_0x4b8928(0x30c)][_0x4b8928(0x2a2)];},Scene_Equip['prototype']['isUseModernControls']=function(){const _0x1c69f8=_0x26c4e1;return this['_commandWindow']&&this[_0x1c69f8(0x5a5)][_0x1c69f8(0x375)]();},Scene_Equip[_0x26c4e1(0x306)]['isUseItemsEquipsCoreUpdatedLayout']=function(){const _0xe8abc4=_0x26c4e1;return VisuMZ[_0xe8abc4(0x582)][_0xe8abc4(0x3d7)][_0xe8abc4(0x30c)][_0xe8abc4(0x43e)];},VisuMZ['ItemsEquipsCore']['Scene_Equip_create']=Scene_Equip['prototype'][_0x26c4e1(0x48d)],Scene_Equip[_0x26c4e1(0x306)][_0x26c4e1(0x48d)]=function(){const _0x1b6762=_0x26c4e1;VisuMZ['ItemsEquipsCore']['Scene_Equip_create'][_0x1b6762(0x2e2)](this),this['isUseModernControls']()&&('RGXbC'!=='RGXbC'?(_0x519cca[_0x1b6762(0x3b9)]('pagedown')&&this[_0x1b6762(0x45c)](),_0x4e17ee[_0x1b6762(0x3b9)](_0x1b6762(0x23e))&&this['cursorPageup']()):this[_0x1b6762(0x414)]());},Scene_Equip[_0x26c4e1(0x306)][_0x26c4e1(0x3f6)]=function(){const _0x2d3404=_0x26c4e1;return this['isUseItemsEquipsCoreUpdatedLayout']()?this[_0x2d3404(0x38f)]():Scene_MenuBase[_0x2d3404(0x306)][_0x2d3404(0x3f6)][_0x2d3404(0x2e2)](this);},Scene_Equip[_0x26c4e1(0x306)][_0x26c4e1(0x38f)]=function(){const _0x33f6d9=_0x26c4e1,_0x558c2=0x0,_0x388908=this[_0x33f6d9(0x5f1)](),_0x539c14=Graphics['boxWidth'],_0x2d5d61=this['helpAreaHeight']();return new Rectangle(_0x558c2,_0x388908,_0x539c14,_0x2d5d61);},VisuMZ[_0x26c4e1(0x582)]['Scene_Equip_statusWindowRect']=Scene_Equip[_0x26c4e1(0x306)][_0x26c4e1(0x5c8)],Scene_Equip[_0x26c4e1(0x306)]['statusWindowRect']=function(){const _0x2db183=_0x26c4e1;return this[_0x2db183(0x1f7)]()?this[_0x2db183(0x372)]():VisuMZ[_0x2db183(0x582)][_0x2db183(0x2b7)][_0x2db183(0x2e2)](this);},Scene_Equip[_0x26c4e1(0x306)][_0x26c4e1(0x372)]=function(){const _0x50e23b=_0x26c4e1,_0x3f3fd6=this['isRightInputMode']()?0x0:Graphics['boxWidth']-this[_0x50e23b(0x4ca)](),_0x3174d5=this['mainAreaTop'](),_0x96c187=this[_0x50e23b(0x4ca)](),_0x1aac12=this[_0x50e23b(0x226)]();return new Rectangle(_0x3f3fd6,_0x3174d5,_0x96c187,_0x1aac12);},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x2c2)]=Scene_Equip[_0x26c4e1(0x306)]['commandWindowRect'],Scene_Equip['prototype'][_0x26c4e1(0x443)]=function(){const _0x1e90e1=_0x26c4e1;return this[_0x1e90e1(0x1f7)]()?this[_0x1e90e1(0x2db)]():VisuMZ[_0x1e90e1(0x582)][_0x1e90e1(0x2c2)][_0x1e90e1(0x2e2)](this);},Scene_Equip[_0x26c4e1(0x306)][_0x26c4e1(0x3f7)]=function(){const _0x3a6179=_0x26c4e1,_0x4ed580=VisuMZ[_0x3a6179(0x582)][_0x3a6179(0x3d7)][_0x3a6179(0x30c)];return _0x4ed580[_0x3a6179(0x5e7)]||_0x4ed580[_0x3a6179(0x262)];},Scene_Equip[_0x26c4e1(0x306)][_0x26c4e1(0x2db)]=function(){const _0x43abfe=_0x26c4e1,_0x2966f2=this[_0x43abfe(0x3f7)](),_0xb49b11=this[_0x43abfe(0x261)]()?this[_0x43abfe(0x4ca)]():0x0,_0x4e2138=this['mainAreaTop'](),_0x389e6c=Graphics[_0x43abfe(0x254)]-this['statusWidth'](),_0x2ca877=_0x2966f2?this[_0x43abfe(0x59d)](0x1,!![]):0x0;return new Rectangle(_0xb49b11,_0x4e2138,_0x389e6c,_0x2ca877);},VisuMZ['ItemsEquipsCore'][_0x26c4e1(0x30b)]=Scene_Equip[_0x26c4e1(0x306)][_0x26c4e1(0x368)],Scene_Equip[_0x26c4e1(0x306)][_0x26c4e1(0x368)]=function(){const _0x340114=_0x26c4e1;VisuMZ['ItemsEquipsCore'][_0x340114(0x30b)][_0x340114(0x2e2)](this);if(this['isUseModernControls']()){if(_0x340114(0x335)!==_0x340114(0x1fa))this[_0x340114(0x5dc)]();else{let _0x2c16bb=this['determineBaseSellingPrice']();const _0x3145b7=this[_0x340114(0x4ea)];return _0x2c16bb=_0x3220d8[_0x340114(0x582)][_0x340114(0x3d7)]['ShopScene'][_0x340114(0x50e)][_0x340114(0x2e2)](this,_0x3145b7,_0x2c16bb),_0x2c16bb;}}},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x276)]=Scene_Equip[_0x26c4e1(0x306)][_0x26c4e1(0x353)],Scene_Equip[_0x26c4e1(0x306)]['slotWindowRect']=function(){const _0x2f3d20=_0x26c4e1;return this[_0x2f3d20(0x1f7)]()?this['slotWindowRectItemsEquipsCore']():'owdlC'==='owdlC'?VisuMZ[_0x2f3d20(0x582)]['Scene_Equip_slotWindowRect'][_0x2f3d20(0x2e2)](this):_0x16be3b['VisuMZ_1_MainMenuCore']&&this['_actor'][_0x2f3d20(0x27d)]()!==''&&_0x2bfb32[_0x2f3d20(0x582)]['Settings'][_0x2f3d20(0x30c)][_0x2f3d20(0x5ce)];},Scene_Equip[_0x26c4e1(0x306)][_0x26c4e1(0x1f2)]=function(){const _0x5493cf=_0x26c4e1,_0x3b35e1=this[_0x5493cf(0x443)](),_0x25f32f=this[_0x5493cf(0x261)]()?this['statusWidth']():0x0,_0x5b1b8c=_0x3b35e1['y']+_0x3b35e1['height'],_0x27f184=Graphics['boxWidth']-this['statusWidth'](),_0x179370=this[_0x5493cf(0x226)]()-_0x3b35e1['height'];return new Rectangle(_0x25f32f,_0x5b1b8c,_0x27f184,_0x179370);},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x3cc)]=Scene_Equip[_0x26c4e1(0x306)][_0x26c4e1(0x230)],Scene_Equip['prototype'][_0x26c4e1(0x230)]=function(){const _0x119259=_0x26c4e1;if(this[_0x119259(0x1f7)]())return this[_0x119259(0x353)]();else{if(_0x119259(0x444)===_0x119259(0x444))return VisuMZ['ItemsEquipsCore'][_0x119259(0x3cc)][_0x119259(0x2e2)](this);else{this[_0x119259(0x228)]=!![];const _0x4e4351=_0x74ddb3[_0x119259(0x582)]['paramJS'][_0x694ab7][_0x119259(0x2e2)](this,_0x206c0e,_0x5ad3b6);return this['_calculatingJSParameters']=![],_0x4e4351;}}},Scene_Equip[_0x26c4e1(0x306)][_0x26c4e1(0x4ca)]=function(){const _0x36d4ad=_0x26c4e1;return this[_0x36d4ad(0x1f7)]()?this[_0x36d4ad(0x220)]():VisuMZ[_0x36d4ad(0x582)][_0x36d4ad(0x3d7)][_0x36d4ad(0x30c)][_0x36d4ad(0x22f)];},Scene_Equip['prototype'][_0x26c4e1(0x220)]=function(){const _0x4f2924=_0x26c4e1;return Math[_0x4f2924(0x5b8)](Graphics[_0x4f2924(0x254)]/0x2);},Scene_Equip[_0x26c4e1(0x306)][_0x26c4e1(0x5dc)]=function(){const _0x3bf488=_0x26c4e1;this[_0x3bf488(0x513)]['setHandler'](_0x3bf488(0x57e),this[_0x3bf488(0x5ec)][_0x3bf488(0x519)](this)),this['_slotWindow'][_0x3bf488(0x369)]('pagedown',this['nextActor'][_0x3bf488(0x519)](this)),this[_0x3bf488(0x513)][_0x3bf488(0x369)](_0x3bf488(0x23e),this['previousActor']['bind'](this));},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x54d)]=Scene_Equip[_0x26c4e1(0x306)][_0x26c4e1(0x414)],Scene_Equip[_0x26c4e1(0x306)][_0x26c4e1(0x414)]=function(){const _0x4e64fa=_0x26c4e1;this[_0x4e64fa(0x375)]()&&(this[_0x4e64fa(0x5a5)][_0x4e64fa(0x435)](),this[_0x4e64fa(0x5a5)][_0x4e64fa(0x3fc)]()),VisuMZ[_0x4e64fa(0x582)][_0x4e64fa(0x54d)][_0x4e64fa(0x2e2)](this);},VisuMZ[_0x26c4e1(0x582)]['Scene_Equip_onSlotOk']=Scene_Equip[_0x26c4e1(0x306)][_0x26c4e1(0x587)],Scene_Equip[_0x26c4e1(0x306)][_0x26c4e1(0x587)]=function(){const _0x5aa4c3=_0x26c4e1;if(this[_0x5aa4c3(0x513)][_0x5aa4c3(0x26a)]()>=0x0){if('VHkXg'!=='ZqOkm')VisuMZ[_0x5aa4c3(0x582)][_0x5aa4c3(0x4b9)][_0x5aa4c3(0x2e2)](this),this[_0x5aa4c3(0x5bd)]();else{const _0x158f2c=this['getItemDamageAmountLabel']();this['drawItemKeyData'](_0x158f2c,_0x544aad,_0xdee9bc,_0x22eef6,!![]),this[_0x5aa4c3(0x25c)]();const _0x2e220e=this[_0x5aa4c3(0x482)](),_0x180513=_0x4135f3[_0x5aa4c3(0x2d1)]([0x0,0x0,0x2,0x1,0x3,0x1,0x3][this[_0x5aa4c3(0x4ea)][_0x5aa4c3(0x2da)][_0x5aa4c3(0x5f7)]]);return this[_0x5aa4c3(0x597)](_0x180513),this[_0x5aa4c3(0x266)](_0x2e220e,_0x4a217b,_0x5b7c3a,_0x3d23b3,![],'right'),this[_0x5aa4c3(0x43c)](_0x428443,_0xdb683d,_0x341ad5),this[_0x5aa4c3(0x277)](),!![];}}else this[_0x5aa4c3(0x513)]['smoothSelect'](0x0),this['_slotWindow'][_0x5aa4c3(0x27a)]();},Scene_Equip['prototype'][_0x26c4e1(0x5bd)]=function(){const _0x43642f=_0x26c4e1;this['_itemWindow'][_0x43642f(0x49a)]();const _0x37cd94=this[_0x43642f(0x513)]['item'](),_0x21cf46=this[_0x43642f(0x3bd)][_0x43642f(0x3e6)][_0x43642f(0x4a0)](_0x37cd94),_0x45ec80=Math[_0x43642f(0x5b8)](this['_itemWindow'][_0x43642f(0x3d5)]()/0x2)-0x1;this['_itemWindow'][_0x43642f(0x283)](_0x21cf46>=0x0?_0x21cf46:0x0),this[_0x43642f(0x3bd)][_0x43642f(0x5b4)](this[_0x43642f(0x3bd)][_0x43642f(0x26a)]()-_0x45ec80);},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x333)]=Scene_Equip[_0x26c4e1(0x306)][_0x26c4e1(0x1d9)],Scene_Equip[_0x26c4e1(0x306)]['onSlotCancel']=function(){const _0x4dbb37=_0x26c4e1;VisuMZ[_0x4dbb37(0x582)]['Scene_Equip_onSlotCancel'][_0x4dbb37(0x2e2)](this),this[_0x4dbb37(0x375)]()&&(this['_commandWindow'][_0x4dbb37(0x283)](0x0),this['_slotWindow'][_0x4dbb37(0x3fc)]());},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x2f0)]=Scene_Equip[_0x26c4e1(0x306)][_0x26c4e1(0x4ef)],Scene_Equip['prototype'][_0x26c4e1(0x4ef)]=function(){const _0x45e877=_0x26c4e1;VisuMZ[_0x45e877(0x582)][_0x45e877(0x2f0)][_0x45e877(0x2e2)](this),this[_0x45e877(0x375)]()&&(this['_commandWindow'][_0x45e877(0x3fc)](),this[_0x45e877(0x5a5)]['deselect'](),this['_slotWindow'][_0x45e877(0x283)](0x0),this[_0x45e877(0x513)][_0x45e877(0x27a)]());},Scene_Equip[_0x26c4e1(0x306)][_0x26c4e1(0x1dc)]=function(){const _0x16d801=_0x26c4e1;if(!this[_0x16d801(0x513)])return![];if(!this[_0x16d801(0x513)]['active'])return![];return this['_slotWindow'][_0x16d801(0x5c6)]();},Scene_Equip['prototype'][_0x26c4e1(0x61d)]=function(){const _0x2b0b2b=_0x26c4e1;if(this['buttonAssistSlotWindowShift']())return TextManager['getInputButtonString'](_0x2b0b2b(0x3b4));return Scene_MenuBase[_0x2b0b2b(0x306)][_0x2b0b2b(0x61d)][_0x2b0b2b(0x2e2)](this);},Scene_Equip['prototype'][_0x26c4e1(0x2fb)]=function(){const _0x42f225=_0x26c4e1;if(this[_0x42f225(0x1dc)]())return'UlMOL'==='MyNHn'?_0x42f225(0x20f):VisuMZ[_0x42f225(0x582)][_0x42f225(0x3d7)][_0x42f225(0x30c)][_0x42f225(0x201)];return Scene_MenuBase[_0x42f225(0x306)]['buttonAssistText3'][_0x42f225(0x2e2)](this);},Scene_Equip[_0x26c4e1(0x306)]['buttonAssistOffset3']=function(){const _0x51c002=_0x26c4e1;if(this[_0x51c002(0x1dc)]()){if(_0x51c002(0x38b)!==_0x51c002(0x573))return this[_0x51c002(0x5a7)][_0x51c002(0x22c)]/0x5/-0x3;else{const _0x47fa43=this[_0x51c002(0x348)](_0x210136),_0x2f0b10=this[_0x51c002(0x35c)](_0xde1d07)[_0x51c002(0x22c)];return _0x2f0b10<=_0x47fa43[_0x51c002(0x22c)]?'iconText':_0x51c002(0x3a7);}}return Scene_MenuBase[_0x51c002(0x306)][_0x51c002(0x32c)][_0x51c002(0x2e2)](this);},Scene_Equip[_0x26c4e1(0x306)]['popScene']=function(){SceneManager['pop']();},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x4c3)]=Scene_Load[_0x26c4e1(0x306)]['reloadMapIfUpdated'],Scene_Load[_0x26c4e1(0x306)]['reloadMapIfUpdated']=function(){const _0x1f23f6=_0x26c4e1;VisuMZ[_0x1f23f6(0x582)][_0x1f23f6(0x4c3)][_0x1f23f6(0x2e2)](this),this[_0x1f23f6(0x42f)]();},Scene_Load[_0x26c4e1(0x306)][_0x26c4e1(0x42f)]=function(){const _0x241917=_0x26c4e1;if($gameSystem[_0x241917(0x1e0)]()!==$dataSystem[_0x241917(0x1e0)])for(const _0x463d30 of $gameActors[_0x241917(0x3e6)]){if(_0x463d30)_0x463d30[_0x241917(0x586)]();}},Scene_Shop['prototype'][_0x26c4e1(0x35f)]=function(){const _0x1a9248=_0x26c4e1;if(ConfigManager[_0x1a9248(0x3a9)]&&ConfigManager['uiHelpPosition']!==undefined)return ConfigManager[_0x1a9248(0x46a)];else{if(this[_0x1a9248(0x1f7)]())return this[_0x1a9248(0x242)]()[_0x1a9248(0x318)](/LOWER/i);else Scene_MenuBase[_0x1a9248(0x306)]['isRightInputMode'][_0x1a9248(0x2e2)](this);}},Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x261)]=function(){const _0x200a41=_0x26c4e1;if(ConfigManager['uiMenuStyle']&&ConfigManager[_0x200a41(0x349)]!==undefined)return _0x200a41(0x40e)!==_0x200a41(0x40e)?this[_0x200a41(0x316)][_0x200a41(0x287)]()===0x1?_0x36a1d0[_0x200a41(0x2ef)](_0x200a41(0x249),_0x200a41(0x38c)):_0x41458d['getInputMultiButtonStrings'](_0x200a41(0x23e),_0x200a41(0x430)):ConfigManager['uiInputPosition'];else{if(this[_0x200a41(0x1f7)]()){if('BDqaR'===_0x200a41(0x3b3))return this['updatedLayoutStyle']()[_0x200a41(0x318)](/RIGHT/i);else _0x337312[_0x200a41(0x306)]['isRightInputMode']['call'](this);}else Scene_MenuBase[_0x200a41(0x306)]['isRightInputMode'][_0x200a41(0x2e2)](this);}},Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x242)]=function(){const _0x576a2e=_0x26c4e1;return VisuMZ['ItemsEquipsCore'][_0x576a2e(0x3d7)]['ShopScene']['LayoutStyle'];},Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x375)]=function(){const _0x3b0eea=_0x26c4e1;return this['_categoryWindow']&&this[_0x3b0eea(0x547)][_0x3b0eea(0x375)]();},Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x1f7)]=function(){const _0x3edc5a=_0x26c4e1;return VisuMZ[_0x3edc5a(0x582)][_0x3edc5a(0x3d7)][_0x3edc5a(0x4ac)][_0x3edc5a(0x43e)];},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x515)]=Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x390)],Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x390)]=function(_0x46ff79,_0x521e6b){const _0x31c447=_0x26c4e1;_0x46ff79=JsonEx[_0x31c447(0x295)](_0x46ff79),VisuMZ['ItemsEquipsCore'][_0x31c447(0x515)]['call'](this,_0x46ff79,_0x521e6b),this[_0x31c447(0x5f4)]();},Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x5f4)]=function(){const _0x3dca94=_0x26c4e1;this[_0x3dca94(0x420)]=0x0;for(const _0x256a8e of this[_0x3dca94(0x4cc)]){if('DCYLM'!==_0x3dca94(0x309)){if(this[_0x3dca94(0x241)](_0x256a8e))this[_0x3dca94(0x420)]++;else{if(_0x3dca94(0x1de)!==_0x3dca94(0x1de)){_0x4a5527+=_0x3dca94(0x2ec)[_0x3dca94(0x272)](_0x4cccf6),_0x18277d++;if(_0xebba3a>=_0x308c85)return _0x385881;}else _0x256a8e[0x0]=-0x1;}}else _0x435f58['ItemsEquipsCore'][_0x3dca94(0x437)][_0x3dca94(0x2e2)](this),this[_0x3dca94(0x1f7)]()&&this[_0x3dca94(0x255)]();}},Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x241)]=function(_0x3a757a){const _0x12c2a7=_0x26c4e1;if(_0x3a757a[0x0]>0x2||_0x3a757a[0x0]<0x0)return![];const _0x32c4ec=[$dataItems,$dataWeapons,$dataArmors][_0x3a757a[0x0]][_0x3a757a[0x1]];if(!_0x32c4ec)return![];const _0x249eab=_0x32c4ec[_0x12c2a7(0x291)]||'';if(_0x249eab[_0x12c2a7(0x318)](/<SHOW SHOP[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x167e05=JSON[_0x12c2a7(0x24a)]('['+RegExp['$1'][_0x12c2a7(0x318)](/\d+/g)+']');for(const _0x119993 of _0x167e05){if(!$gameSwitches[_0x12c2a7(0x5cc)](_0x119993))return![];}return!![];}if(_0x249eab[_0x12c2a7(0x318)](/<SHOW SHOP ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x532d5d=JSON[_0x12c2a7(0x24a)]('['+RegExp['$1'][_0x12c2a7(0x318)](/\d+/g)+']');for(const _0x33df64 of _0x532d5d){if(!$gameSwitches[_0x12c2a7(0x5cc)](_0x33df64))return![];}return!![];}if(_0x249eab[_0x12c2a7(0x318)](/<SHOW SHOP ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if('FPMzy'===_0x12c2a7(0x54e)){const _0x3c477e=JSON[_0x12c2a7(0x24a)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x331ff2 of _0x3c477e){if($gameSwitches[_0x12c2a7(0x5cc)](_0x331ff2))return!![];}return![];}else{if(!_0x520531[_0x12c2a7(0x5cc)](_0x42e7ae))return![];}}if(_0x249eab[_0x12c2a7(0x318)](/<HIDE SHOP[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x1e4e8c=JSON['parse']('['+RegExp['$1'][_0x12c2a7(0x318)](/\d+/g)+']');for(const _0x5cbf6a of _0x1e4e8c){if(!$gameSwitches[_0x12c2a7(0x5cc)](_0x5cbf6a))return!![];}return![];}if(_0x249eab['match'](/<HIDE SHOP ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x12c2a7(0x611)==='BPYFK'){const _0xe48d8d=JSON[_0x12c2a7(0x24a)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x1d6a68 of _0xe48d8d){if(_0x12c2a7(0x2b5)===_0x12c2a7(0x59f))this[_0x12c2a7(0x241)](_0x1379a7)?this[_0x12c2a7(0x420)]++:_0x454bdf[0x0]=-0x1;else{if(!$gameSwitches[_0x12c2a7(0x5cc)](_0x1d6a68))return!![];}}return![];}else return _0x5bfae2[_0x12c2a7(0x2ef)]('up',_0x12c2a7(0x553));}if(_0x249eab[_0x12c2a7(0x318)](/<HIDE SHOP ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x2d8062=JSON[_0x12c2a7(0x24a)]('['+RegExp['$1'][_0x12c2a7(0x318)](/\d+/g)+']');for(const _0x1d93ac of _0x2d8062){if($gameSwitches[_0x12c2a7(0x5cc)](_0x1d93ac))return![];}return!![];}return!![];},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x532)]=Scene_Shop[_0x26c4e1(0x306)]['create'],Scene_Shop['prototype'][_0x26c4e1(0x48d)]=function(){const _0xf095c4=_0x26c4e1;VisuMZ[_0xf095c4(0x582)][_0xf095c4(0x532)][_0xf095c4(0x2e2)](this),this['isUseItemsEquipsCoreUpdatedLayout']()&&this[_0xf095c4(0x29a)](),this[_0xf095c4(0x3dd)]();},Scene_Shop[_0x26c4e1(0x306)]['postCreateItemsEquipsCore']=function(){const _0x220002=_0x26c4e1;this[_0x220002(0x37e)][_0x220002(0x3ff)](),this[_0x220002(0x2e5)][_0x220002(0x1e8)](),this[_0x220002(0x2e5)]['deselect'](),this['_statusWindow'][_0x220002(0x1e8)]();},Scene_Shop[_0x26c4e1(0x306)]['helpWindowRect']=function(){const _0x1dfb6b=_0x26c4e1;return this[_0x1dfb6b(0x1f7)]()?this[_0x1dfb6b(0x38f)]():Scene_MenuBase[_0x1dfb6b(0x306)][_0x1dfb6b(0x3f6)]['call'](this);},Scene_Shop['prototype'][_0x26c4e1(0x38f)]=function(){const _0x228b36=_0x26c4e1,_0x37c9f4=0x0,_0x47dd34=this['helpAreaTop'](),_0x362115=Graphics[_0x228b36(0x254)],_0x3c5b14=this[_0x228b36(0x455)]();return new Rectangle(_0x37c9f4,_0x47dd34,_0x362115,_0x3c5b14);},VisuMZ['ItemsEquipsCore']['Scene_Shop_goldWindowRect']=Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x594)],Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x594)]=function(){const _0x5d4be4=_0x26c4e1;if(this[_0x5d4be4(0x1f7)]()){if(_0x5d4be4(0x622)!=='UtLEs')return this[_0x5d4be4(0x1d4)]();else _0x5a1e21['prototype']['refresh'][_0x5d4be4(0x2e2)](this),this[_0x5d4be4(0x330)]();}else return VisuMZ[_0x5d4be4(0x582)][_0x5d4be4(0x577)][_0x5d4be4(0x2e2)](this);},Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x1d4)]=function(){const _0x238c15=_0x26c4e1,_0x2533fc=this[_0x238c15(0x3e2)](),_0x1dceb0=this['calcWindowHeight'](0x1,!![]),_0x2ed24a=this[_0x238c15(0x261)]()?0x0:Graphics[_0x238c15(0x254)]-_0x2533fc,_0x3e8c6e=this['mainAreaTop']();return new Rectangle(_0x2ed24a,_0x3e8c6e,_0x2533fc,_0x1dceb0);},VisuMZ[_0x26c4e1(0x582)]['Scene_Shop_commandWindowRect']=Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x443)],Scene_Shop[_0x26c4e1(0x306)]['commandWindowRect']=function(){const _0x5c8dfc=_0x26c4e1;if(this[_0x5c8dfc(0x1f7)]())return this[_0x5c8dfc(0x2db)]();else{if(_0x5c8dfc(0x5b6)!==_0x5c8dfc(0x5b6)){if(_0x2b052c&&this[_0x5c8dfc(0x5f9)]){if(this[_0x5c8dfc(0x315)](_0x1789a3))return![];if(this[_0x5c8dfc(0x620)](_0x31ae4b))return![];if(this['isSoleArmorType'](_0x4abecb))return![];}if(!_0x480049)return!this[_0x5c8dfc(0x485)]()[_0x5c8dfc(0x3b2)](this[_0x5c8dfc(0x2f8)]());return _0x20873a[_0x5c8dfc(0x582)][_0x5c8dfc(0x5b7)][_0x5c8dfc(0x2e2)](this,_0x4eca60);}else return VisuMZ[_0x5c8dfc(0x582)][_0x5c8dfc(0x2fe)][_0x5c8dfc(0x2e2)](this);}},Scene_Shop['prototype'][_0x26c4e1(0x2db)]=function(){const _0xdeba57=_0x26c4e1,_0x22c3cb=this[_0xdeba57(0x261)]()?this[_0xdeba57(0x3e2)]():0x0,_0x4e0875=this[_0xdeba57(0x518)](),_0x1543ee=Graphics['boxWidth']-this['mainCommandWidth'](),_0x58e858=this[_0xdeba57(0x59d)](0x1,!![]);return new Rectangle(_0x22c3cb,_0x4e0875,_0x1543ee,_0x58e858);},VisuMZ['ItemsEquipsCore']['Scene_Shop_numberWindowRect']=Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x2b6)],Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x2b6)]=function(){const _0x2bcc56=_0x26c4e1;return this[_0x2bcc56(0x1f7)]()?this[_0x2bcc56(0x58c)]():VisuMZ['ItemsEquipsCore'][_0x2bcc56(0x290)]['call'](this);},Scene_Shop['prototype'][_0x26c4e1(0x58c)]=function(){const _0x5662b4=_0x26c4e1,_0x202594=this[_0x5662b4(0x5a5)]['y']+this['_commandWindow'][_0x5662b4(0x27e)],_0x15798c=Graphics[_0x5662b4(0x254)]-this['statusWidth'](),_0x35423c=this[_0x5662b4(0x261)]()?Graphics['boxWidth']-_0x15798c:0x0,_0x51edde=this[_0x5662b4(0x226)]()-this['_commandWindow'][_0x5662b4(0x27e)];return new Rectangle(_0x35423c,_0x202594,_0x15798c,_0x51edde);},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x56e)]=Scene_Shop['prototype'][_0x26c4e1(0x5c8)],Scene_Shop[_0x26c4e1(0x306)]['statusWindowRect']=function(){const _0x4a441e=_0x26c4e1;return this[_0x4a441e(0x1f7)]()?this[_0x4a441e(0x372)]():VisuMZ['ItemsEquipsCore'][_0x4a441e(0x56e)][_0x4a441e(0x2e2)](this);},Scene_Shop['prototype'][_0x26c4e1(0x372)]=function(){const _0x114ef3=_0x26c4e1,_0x2e066d=this[_0x114ef3(0x4ca)](),_0x323822=this[_0x114ef3(0x226)]()-this[_0x114ef3(0x5a5)][_0x114ef3(0x27e)],_0x2d9dad=this[_0x114ef3(0x261)]()?0x0:Graphics[_0x114ef3(0x254)]-_0x2e066d,_0x536206=this[_0x114ef3(0x5a5)]['y']+this['_commandWindow'][_0x114ef3(0x27e)];return new Rectangle(_0x2d9dad,_0x536206,_0x2e066d,_0x323822);},VisuMZ['ItemsEquipsCore'][_0x26c4e1(0x32e)]=Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x503)],Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x503)]=function(){const _0x47495b=_0x26c4e1;if(this['isUseItemsEquipsCoreUpdatedLayout']()){if(_0x47495b(0x54b)!==_0x47495b(0x54b))_0x5a894e=_0x2594ea(_0xd2853e['$1']);else return this[_0x47495b(0x4a7)]();}else return VisuMZ['ItemsEquipsCore'][_0x47495b(0x32e)][_0x47495b(0x2e2)](this);},Scene_Shop[_0x26c4e1(0x306)]['buyWindowRectItemsEquipsCore']=function(){const _0xdb996f=_0x26c4e1,_0x5996c4=this[_0xdb996f(0x5a5)]['y']+this['_commandWindow'][_0xdb996f(0x27e)],_0x2d69ce=Graphics[_0xdb996f(0x254)]-this[_0xdb996f(0x4ca)](),_0x2bf91b=this[_0xdb996f(0x226)]()-this['_commandWindow'][_0xdb996f(0x27e)],_0x2f4796=this[_0xdb996f(0x261)]()?Graphics[_0xdb996f(0x254)]-_0x2d69ce:0x0;return new Rectangle(_0x2f4796,_0x5996c4,_0x2d69ce,_0x2bf91b);},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x38a)]=Scene_Shop[_0x26c4e1(0x306)]['createCategoryWindow'],Scene_Shop['prototype'][_0x26c4e1(0x4b0)]=function(){const _0x14111e=_0x26c4e1;VisuMZ[_0x14111e(0x582)]['Scene_Shop_createCategoryWindow'][_0x14111e(0x2e2)](this),this[_0x14111e(0x375)]()&&this['postCreateCategoryWindowItemsEquipsCore']();},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x46b)]=Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x61c)],Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x61c)]=function(){const _0x5a9388=_0x26c4e1;if(this[_0x5a9388(0x1f7)]()){if('wnQEH'===_0x5a9388(0x4e1))return this[_0x5a9388(0x4e2)]();else{let _0x576ea0=this[_0x5a9388(0x1fc)]()[_0x5a9388(0x5fc)];while(this[_0x5a9388(0x4ce)]['length']>_0x576ea0){const _0x220c29=this[_0x5a9388(0x4ce)][this[_0x5a9388(0x4ce)][_0x5a9388(0x5fc)]-0x1];_0x220c29&&_0x220c29[_0x5a9388(0x4d5)]()&&_0x17f6fa[_0x5a9388(0x625)](_0x220c29[_0x5a9388(0x4d5)](),0x1),this['_equips'][_0x5a9388(0x5c7)]();}while(_0x576ea0>this[_0x5a9388(0x4ce)][_0x5a9388(0x5fc)]){this[_0x5a9388(0x4ce)]['push'](new _0x9f551f());}}}else return VisuMZ['ItemsEquipsCore'][_0x5a9388(0x46b)][_0x5a9388(0x2e2)](this);},Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x4e2)]=function(){const _0x12bfcf=_0x26c4e1,_0x4410cc=this[_0x12bfcf(0x5a5)]['y'],_0xbf52f6=this['_commandWindow'][_0x12bfcf(0x22c)],_0x3e31c2=this[_0x12bfcf(0x59d)](0x1,!![]),_0x2f48c3=this[_0x12bfcf(0x261)]()?Graphics['boxWidth']-_0xbf52f6:0x0;return new Rectangle(_0x2f48c3,_0x4410cc,_0xbf52f6,_0x3e31c2);},Scene_Shop[_0x26c4e1(0x306)]['postCreateCategoryWindowItemsEquipsCore']=function(){const _0xc30fd=_0x26c4e1;delete this['_categoryWindow'][_0xc30fd(0x1f3)]['ok'],delete this[_0xc30fd(0x547)][_0xc30fd(0x1f3)][_0xc30fd(0x57e)];},VisuMZ['ItemsEquipsCore'][_0x26c4e1(0x459)]=Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x546)],Scene_Shop['prototype'][_0x26c4e1(0x546)]=function(){const _0x44a336=_0x26c4e1;VisuMZ['ItemsEquipsCore'][_0x44a336(0x459)][_0x44a336(0x2e2)](this),this[_0x44a336(0x1f7)]()&&this[_0x44a336(0x31a)]();},VisuMZ[_0x26c4e1(0x582)]['Scene_Shop_sellWindowRect']=Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x2dd)],Scene_Shop['prototype']['sellWindowRect']=function(){const _0x1035d4=_0x26c4e1;return this[_0x1035d4(0x1f7)]()?this[_0x1035d4(0x25d)]():VisuMZ[_0x1035d4(0x582)][_0x1035d4(0x55f)][_0x1035d4(0x2e2)](this);},Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x25d)]=function(){const _0xaaeec7=_0x26c4e1,_0x4505ca=this[_0xaaeec7(0x547)]['y']+this[_0xaaeec7(0x547)]['height'],_0x54db88=Graphics['boxWidth']-this[_0xaaeec7(0x4ca)](),_0x1fe237=this[_0xaaeec7(0x226)]()-this[_0xaaeec7(0x547)][_0xaaeec7(0x27e)],_0x4de4a7=this[_0xaaeec7(0x261)]()?Graphics[_0xaaeec7(0x254)]-_0x54db88:0x0;return new Rectangle(_0x4de4a7,_0x4505ca,_0x54db88,_0x1fe237);},Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x31a)]=function(){const _0x284c6b=_0x26c4e1;this['_sellWindow'][_0x284c6b(0x24e)](this[_0x284c6b(0x3aa)]);},Scene_Shop[_0x26c4e1(0x306)]['statusWidth']=function(){const _0x445de8=_0x26c4e1;return VisuMZ[_0x445de8(0x582)][_0x445de8(0x3d7)][_0x445de8(0x501)][_0x445de8(0x3bf)];},VisuMZ['ItemsEquipsCore'][_0x26c4e1(0x292)]=Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x505)],Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x505)]=function(){const _0x5c5eee=_0x26c4e1;VisuMZ['ItemsEquipsCore'][_0x5c5eee(0x292)][_0x5c5eee(0x2e2)](this),this[_0x5c5eee(0x1f7)]()&&this[_0x5c5eee(0x3aa)]['show'](),this['_sellWindow'][_0x5c5eee(0x4aa)]();},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x257)]=Scene_Shop[_0x26c4e1(0x306)]['commandBuy'],Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x45a)]=function(){const _0x5043e6=_0x26c4e1;VisuMZ['ItemsEquipsCore'][_0x5043e6(0x257)][_0x5043e6(0x2e2)](this),this[_0x5043e6(0x1f7)]()&&this[_0x5043e6(0x60d)]();},Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x60d)]=function(){const _0x48346b=_0x26c4e1;this[_0x48346b(0x210)]=this[_0x48346b(0x210)]||0x0,this[_0x48346b(0x2e5)][_0x48346b(0x283)](this[_0x48346b(0x210)]);},VisuMZ['ItemsEquipsCore'][_0x26c4e1(0x441)]=Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x28e)],Scene_Shop[_0x26c4e1(0x306)]['commandSell']=function(){const _0x21812f=_0x26c4e1;VisuMZ[_0x21812f(0x582)][_0x21812f(0x441)]['call'](this);if(this['isUseItemsEquipsCoreUpdatedLayout']()){if(_0x21812f(0x484)!=='zDgCq')this['commandSellItemsEquipsCore']();else{const _0xb6df77=this[_0x21812f(0x51c)]();return this[_0x21812f(0x266)](_0xb6df77,_0xd172d9,_0x1fe271,_0x3e05bb,![],_0x21812f(0x312)),this[_0x21812f(0x43c)](_0x1263f9,_0x22d61c,_0x1eadc9),this[_0x21812f(0x277)](),!![];}}this[_0x21812f(0x375)]()&&(this[_0x21812f(0x547)]['smoothSelect'](0x0),this[_0x21812f(0x4ed)]());},Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x1e5)]=function(){const _0x476c80=_0x26c4e1;this[_0x476c80(0x2e5)][_0x476c80(0x3ff)](),this[_0x476c80(0x5a5)][_0x476c80(0x3ff)]();},VisuMZ['ItemsEquipsCore'][_0x26c4e1(0x224)]=Scene_Shop['prototype']['onBuyCancel'],Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x53a)]=function(){const _0x46593e=_0x26c4e1;VisuMZ['ItemsEquipsCore'][_0x46593e(0x224)][_0x46593e(0x2e2)](this);if(this[_0x46593e(0x1f7)]()){if(_0x46593e(0x36e)===_0x46593e(0x36e))this[_0x46593e(0x5e6)]();else{const _0x9dbf54=this[_0x46593e(0x473)],_0xbfc06e=_0x1ba246['windowPadding'](),_0x395d02=_0xf36b1a['x']+_0x7b7c18[_0x46593e(0x5b8)](_0x28a4f3[_0x46593e(0x22c)]/0x2)+_0xbfc06e;_0x9dbf54['x']=_0x9dbf54[_0x46593e(0x22c)]/-0x2+_0x395d02,_0x9dbf54['y']=_0x5911f6[_0x46593e(0x5b8)](_0x489b5d[_0x46593e(0x27e)]/0x2);}}},Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x5e6)]=function(){const _0xec63b2=_0x26c4e1;this[_0xec63b2(0x210)]=this[_0xec63b2(0x2e5)]['index'](),this['_buyWindow']['show'](),this['_buyWindow'][_0xec63b2(0x435)](),this['_buyWindow'][_0xec63b2(0x4d6)](0x0,0x0),this[_0xec63b2(0x3aa)]['show'](),this['_dummyWindow'][_0xec63b2(0x3ff)]();},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x51b)]=Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x44d)],Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x44d)]=function(){const _0xe9e668=_0x26c4e1;VisuMZ[_0xe9e668(0x582)][_0xe9e668(0x51b)]['call'](this),this[_0xe9e668(0x1f7)]()&&this[_0xe9e668(0x31d)]();},Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x31d)]=function(){const _0x2d2fe2=_0x26c4e1;this[_0x2d2fe2(0x2e5)][_0x2d2fe2(0x1e8)](),this[_0x2d2fe2(0x5a5)][_0x2d2fe2(0x1e8)]();},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x437)]=Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x55c)],Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x55c)]=function(){const _0x4ce3f6=_0x26c4e1;VisuMZ[_0x4ce3f6(0x582)][_0x4ce3f6(0x437)]['call'](this),this[_0x4ce3f6(0x1f7)]()&&this[_0x4ce3f6(0x255)]();},Scene_Shop[_0x26c4e1(0x306)]['onSellOkItemsEquipsCore']=function(){const _0x10079f=_0x26c4e1;this['_categoryWindow'][_0x10079f(0x1e8)]();},VisuMZ[_0x26c4e1(0x582)]['Scene_Shop_onSellCancel']=Scene_Shop[_0x26c4e1(0x306)]['onSellCancel'],Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x2fa)]=function(){const _0x421d93=_0x26c4e1;VisuMZ[_0x421d93(0x582)][_0x421d93(0x615)][_0x421d93(0x2e2)](this);if(this[_0x421d93(0x375)]()){if(_0x421d93(0x344)===_0x421d93(0x344))this[_0x421d93(0x44d)]();else{if(!_0x1a8916[_0x421d93(0x5cc)](_0x4a09da))return![];}}this[_0x421d93(0x1f7)]()&&this[_0x421d93(0x37e)][_0x421d93(0x3ff)]();},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x4d1)]=Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x1e2)],Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x1e2)]=function(){const _0x35ccaf=_0x26c4e1;let _0x99a548=this['determineBaseSellingPrice']();const _0x49f2ad=this['_item'];return _0x99a548=VisuMZ[_0x35ccaf(0x582)][_0x35ccaf(0x3d7)][_0x35ccaf(0x4ac)][_0x35ccaf(0x50e)][_0x35ccaf(0x2e2)](this,_0x49f2ad,_0x99a548),_0x99a548;},Scene_Shop['prototype'][_0x26c4e1(0x53c)]=function(){const _0x1525fc=_0x26c4e1;if(!this[_0x1525fc(0x4ea)])return 0x0;else{if(this[_0x1525fc(0x4ea)][_0x1525fc(0x291)][_0x1525fc(0x318)](/<JS SELL PRICE>\s*([\s\S]*)\s*<\/JS SELL PRICE>/i)){const _0x31e16c=String(RegExp['$1']);let _0x20ac9f=this[_0x1525fc(0x4ea)],_0x1bb555=_0x20ac9f['price']*this[_0x1525fc(0x61b)]();try{eval(_0x31e16c);}catch(_0x363b4a){if($gameTemp['isPlaytest']())console[_0x1525fc(0x5c9)](_0x363b4a);}if(isNaN(_0x1bb555))_0x1bb555=0x0;return Math[_0x1525fc(0x5b8)](_0x1bb555);}else return this['_item'][_0x1525fc(0x291)][_0x1525fc(0x318)](/<SELL PRICE:[ ](\d+)>/i)?parseInt(RegExp['$1']):Math['floor'](this[_0x1525fc(0x4ea)][_0x1525fc(0x5c3)]*this[_0x1525fc(0x61b)]());}},Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x61b)]=function(){const _0x3419fd=_0x26c4e1;return VisuMZ[_0x3419fd(0x582)][_0x3419fd(0x3d7)][_0x3419fd(0x4ac)][_0x3419fd(0x557)];},Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x438)]=function(){const _0x223e3b=_0x26c4e1;if(!this[_0x223e3b(0x242)]())return![];if(!this['isUseModernControls']())return![];if(!this['_sellWindow'])return![];if(!this['_sellWindow']['active'])return![];return this[_0x223e3b(0x242)]()&&this[_0x223e3b(0x375)]();},Scene_Shop['prototype'][_0x26c4e1(0x5fb)]=function(){const _0x53ee73=_0x26c4e1;if(this['buttonAssistItemListRequirement']())return _0x53ee73(0x398)!==_0x53ee73(0x398)?_0x24bcee[_0x53ee73(0x294)]['Settings'][_0x53ee73(0x5e0)][_0x53ee73(0x5f0)]:this[_0x53ee73(0x316)][_0x53ee73(0x287)]()===0x1?_0x53ee73(0x4bf)===_0x53ee73(0x4bf)?TextManager[_0x53ee73(0x2ef)](_0x53ee73(0x249),_0x53ee73(0x38c)):this['_itemWindow'][_0x53ee73(0x287)]()===0x1?_0xfed818['getInputMultiButtonStrings'](_0x53ee73(0x249),_0x53ee73(0x38c)):_0x460723['getInputMultiButtonStrings'](_0x53ee73(0x23e),_0x53ee73(0x430)):TextManager[_0x53ee73(0x2ef)]('pageup',_0x53ee73(0x430));else{if(this['_numberWindow']&&this['_numberWindow'][_0x53ee73(0x3dc)])return TextManager[_0x53ee73(0x2ef)](_0x53ee73(0x249),_0x53ee73(0x38c));}return Scene_MenuBase['prototype'][_0x53ee73(0x5fb)][_0x53ee73(0x2e2)](this);},Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x5f5)]=function(){const _0xd40d82=_0x26c4e1;if(this[_0xd40d82(0x360)]&&this[_0xd40d82(0x360)][_0xd40d82(0x3dc)]){if('gWotu'!==_0xd40d82(0x2c5))_0x1ce12b['loadCharacter'](_0x4b74b1[_0xd40d82(0x4b8)]());else return TextManager[_0xd40d82(0x2ef)]('up',_0xd40d82(0x553));}return Scene_MenuBase[_0xd40d82(0x306)][_0xd40d82(0x5f5)][_0xd40d82(0x2e2)](this);},Scene_Shop[_0x26c4e1(0x306)]['buttonAssistText1']=function(){const _0x11eae3=_0x26c4e1;if(this[_0x11eae3(0x438)]())return VisuMZ[_0x11eae3(0x582)]['Settings'][_0x11eae3(0x411)][_0x11eae3(0x2c6)];else{if(this[_0x11eae3(0x360)]&&this[_0x11eae3(0x360)][_0x11eae3(0x3dc)])return VisuMZ[_0x11eae3(0x582)][_0x11eae3(0x3d7)][_0x11eae3(0x4ac)]['buttonAssistSmallIncrement'];}return Scene_MenuBase[_0x11eae3(0x306)][_0x11eae3(0x299)][_0x11eae3(0x2e2)](this);},Scene_Shop['prototype'][_0x26c4e1(0x4d2)]=function(){const _0x5bae61=_0x26c4e1;if(this[_0x5bae61(0x360)]&&this[_0x5bae61(0x360)][_0x5bae61(0x3dc)])return'gjRUA'!==_0x5bae61(0x279)?VisuMZ[_0x5bae61(0x582)]['Settings']['ShopScene'][_0x5bae61(0x341)]:_0x10be40[_0x5bae61(0x582)]['Settings'][_0x5bae61(0x501)]['Speed1000'];return Scene_MenuBase[_0x5bae61(0x306)][_0x5bae61(0x4d2)][_0x5bae61(0x2e2)](this);},Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x3dd)]=function(){const _0x4334f7=_0x26c4e1;if(!SceneManager[_0x4334f7(0x289)]())return;const _0x367d57=VisuMZ[_0x4334f7(0x582)][_0x4334f7(0x3d7)][_0x4334f7(0x4ac)];_0x367d57['SwitchBuy']&&$gameSwitches['setValue'](_0x367d57[_0x4334f7(0x5b3)],![]),_0x367d57[_0x4334f7(0x3e0)]&&$gameSwitches[_0x4334f7(0x45d)](_0x367d57[_0x4334f7(0x3e0)],![]);},VisuMZ['ItemsEquipsCore'][_0x26c4e1(0x41f)]=Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x384)],Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x384)]=function(_0x466243){const _0x997534=_0x26c4e1;VisuMZ['ItemsEquipsCore']['Scene_Shop_doBuy'][_0x997534(0x2e2)](this,_0x466243);if(_0x466243<=0x0)return;const _0x2579bd=VisuMZ[_0x997534(0x582)][_0x997534(0x3d7)]['ShopScene'];_0x2579bd[_0x997534(0x5b3)]&&$gameSwitches[_0x997534(0x45d)](_0x2579bd[_0x997534(0x5b3)],!![]);},VisuMZ[_0x26c4e1(0x582)]['Scene_Shop_doSell']=Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x533)],Scene_Shop[_0x26c4e1(0x306)][_0x26c4e1(0x533)]=function(_0x1af22d){const _0x51d2f3=_0x26c4e1;VisuMZ[_0x51d2f3(0x582)]['Scene_Shop_doSell'][_0x51d2f3(0x2e2)](this,_0x1af22d);if(_0x1af22d<=0x0)return;const _0x57b540=VisuMZ[_0x51d2f3(0x582)][_0x51d2f3(0x3d7)][_0x51d2f3(0x4ac)];_0x57b540[_0x51d2f3(0x5b3)]&&$gameSwitches[_0x51d2f3(0x45d)](_0x57b540[_0x51d2f3(0x3e0)],!![]);};function Sprite_NewLabel(){this['initialize'](...arguments);}Sprite_NewLabel[_0x26c4e1(0x306)]=Object[_0x26c4e1(0x48d)](Sprite[_0x26c4e1(0x306)]),Sprite_NewLabel[_0x26c4e1(0x306)]['constructor']=Sprite_NewLabel,Sprite_NewLabel['prototype']['initialize']=function(){const _0x9362e5=_0x26c4e1;Sprite[_0x9362e5(0x306)][_0x9362e5(0x358)]['call'](this),this[_0x9362e5(0x4f0)]();},Sprite_NewLabel['prototype'][_0x26c4e1(0x4f0)]=function(){const _0x159d59=_0x26c4e1,_0x1d65ba=ImageManager[_0x159d59(0x1f8)],_0x4ed38a=ImageManager['iconHeight'];this[_0x159d59(0x36d)]=new Bitmap(_0x1d65ba,_0x4ed38a),this[_0x159d59(0x1e1)](),this['drawNewLabelText']();},Sprite_NewLabel['prototype']['drawNewLabelIcon']=function(){const _0x4beff3=_0x26c4e1,_0x461292=VisuMZ[_0x4beff3(0x582)][_0x4beff3(0x3d7)]['New'][_0x4beff3(0x520)];if(_0x461292<=0x0)return;const _0x2b52df=ImageManager[_0x4beff3(0x38e)](_0x4beff3(0x379)),_0x44a7dc=ImageManager[_0x4beff3(0x1f8)],_0x3909cc=ImageManager[_0x4beff3(0x48f)],_0x5e59a6=_0x461292%0x10*_0x44a7dc,_0x3797e6=Math[_0x4beff3(0x5b8)](_0x461292/0x10)*_0x3909cc;this['bitmap'][_0x4beff3(0x2c1)](_0x2b52df,_0x5e59a6,_0x3797e6,_0x44a7dc,_0x3909cc,0x0,0x0);},Sprite_NewLabel[_0x26c4e1(0x306)][_0x26c4e1(0x3b8)]=function(){const _0xd15311=_0x26c4e1,_0xdb1b9e=VisuMZ['ItemsEquipsCore'][_0xd15311(0x3d7)][_0xd15311(0x320)],_0x5631f4=_0xdb1b9e[_0xd15311(0x28d)];if(_0x5631f4==='')return;const _0x3c562b=ImageManager['iconWidth'],_0x55ee43=ImageManager[_0xd15311(0x48f)];this[_0xd15311(0x36d)]['fontFace']=_0xdb1b9e['FontFace']||$gameSystem['mainFontFace'](),this['bitmap']['textColor']=this[_0xd15311(0x538)](),this[_0xd15311(0x36d)][_0xd15311(0x2f9)]=_0xdb1b9e[_0xd15311(0x23b)],this[_0xd15311(0x36d)][_0xd15311(0x392)](_0x5631f4,0x0,_0x55ee43/0x2,_0x3c562b,_0x55ee43/0x2,_0xd15311(0x312));},Sprite_NewLabel[_0x26c4e1(0x306)][_0x26c4e1(0x538)]=function(){const _0x32a189=_0x26c4e1,_0x4fd468=VisuMZ['ItemsEquipsCore'][_0x32a189(0x3d7)][_0x32a189(0x320)]['FontColor'];return _0x4fd468[_0x32a189(0x318)](/#(.*)/i)?'#'+String(RegExp['$1']):ColorManager[_0x32a189(0x454)](_0x4fd468);},Window_Base[_0x26c4e1(0x306)][_0x26c4e1(0x4c8)]=function(_0x5358ee,_0x4c8ebb,_0xedb6e1,_0x367b6c){const _0x481396=_0x26c4e1;if(_0x5358ee){const _0x41bfe3=_0xedb6e1+(this[_0x481396(0x2bd)]()-ImageManager[_0x481396(0x48f)])/0x2,_0x42067b=ImageManager[_0x481396(0x1f8)]+0x4,_0x14c795=Math[_0x481396(0x1e6)](0x0,_0x367b6c-_0x42067b);this[_0x481396(0x597)](ColorManager[_0x481396(0x42b)](_0x5358ee)),this[_0x481396(0x2af)](_0x5358ee[_0x481396(0x2b1)],_0x4c8ebb,_0x41bfe3),this['drawText'](_0x5358ee[_0x481396(0x273)],_0x4c8ebb+_0x42067b,_0xedb6e1,_0x14c795),this[_0x481396(0x3a6)]();}},Window_Base[_0x26c4e1(0x306)]['drawItemNumber']=function(_0x52938d,_0x2814db,_0x1a3604,_0x393251){const _0x188ec2=_0x26c4e1;if(this['isDrawItemNumber'](_0x52938d)){this[_0x188ec2(0x277)]();const _0x4ebc26=VisuMZ['ItemsEquipsCore'][_0x188ec2(0x3d7)][_0x188ec2(0x411)],_0x20f56d=_0x4ebc26['ItemQuantityFmt'],_0x29dd46=_0x20f56d[_0x188ec2(0x272)]($gameParty[_0x188ec2(0x4c9)](_0x52938d));this[_0x188ec2(0x3ab)][_0x188ec2(0x2f9)]=_0x4ebc26[_0x188ec2(0x331)],this[_0x188ec2(0x392)](_0x29dd46,_0x2814db,_0x1a3604,_0x393251,_0x188ec2(0x38c)),this[_0x188ec2(0x277)]();}},Window_Base['prototype'][_0x26c4e1(0x30d)]=function(_0x3dd9c2){const _0x11671d=_0x26c4e1;if(DataManager[_0x11671d(0x56d)](_0x3dd9c2))return $dataSystem[_0x11671d(0x5d5)];return!![];},Window_Base['prototype'][_0x26c4e1(0x43c)]=function(_0x216bbe,_0x43f920,_0x26970d,_0x46a683,_0x2d71d0){const _0x3e7d69=_0x26c4e1;_0x2d71d0=Math[_0x3e7d69(0x1e6)](_0x2d71d0||0x1,0x1);while(_0x2d71d0--){if(_0x3e7d69(0x282)===_0x3e7d69(0x282)){_0x46a683=_0x46a683||this[_0x3e7d69(0x2bd)](),this[_0x3e7d69(0x5ac)][_0x3e7d69(0x5af)]=0xa0;const _0x47530e=ColorManager['gaugeBackColor']();this[_0x3e7d69(0x5ac)][_0x3e7d69(0x2ca)](_0x216bbe+0x1,_0x43f920+0x1,_0x26970d-0x2,_0x46a683-0x2,_0x47530e),this[_0x3e7d69(0x5ac)][_0x3e7d69(0x5af)]=0xff;}else{if(this['isUseModernControls']())return;_0x554b83['prototype'][_0x3e7d69(0x402)][_0x3e7d69(0x2e2)](this);}}},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x440)]=Window_Selectable[_0x26c4e1(0x306)][_0x26c4e1(0x358)],Window_Selectable['prototype']['initialize']=function(_0x11151a){const _0x9f6ef5=_0x26c4e1;this[_0x9f6ef5(0x2cb)](),VisuMZ[_0x9f6ef5(0x582)]['Window_Selectable_initialize'][_0x9f6ef5(0x2e2)](this,_0x11151a);},Window_Selectable[_0x26c4e1(0x306)][_0x26c4e1(0x2cb)]=function(){const _0x2b5469=_0x26c4e1;this[_0x2b5469(0x3fe)]={},this[_0x2b5469(0x5ca)]=0xff,this['_newLabelOpacityChange']=VisuMZ[_0x2b5469(0x582)][_0x2b5469(0x3d7)]['New'][_0x2b5469(0x47a)],this[_0x2b5469(0x39b)]=VisuMZ['ItemsEquipsCore'][_0x2b5469(0x3d7)]['New']['FadeLimit'];},Window_Selectable[_0x26c4e1(0x306)][_0x26c4e1(0x5f2)]=function(){return![];},VisuMZ['ItemsEquipsCore'][_0x26c4e1(0x3a4)]=Window_Selectable[_0x26c4e1(0x306)][_0x26c4e1(0x558)],Window_Selectable[_0x26c4e1(0x306)]['setHelpWindowItem']=function(_0x4f9142){const _0x523798=_0x26c4e1;VisuMZ[_0x523798(0x582)][_0x523798(0x3a4)][_0x523798(0x2e2)](this,_0x4f9142);if(this['isShowNew']())this[_0x523798(0x618)](_0x4f9142);},Window_Selectable[_0x26c4e1(0x306)][_0x26c4e1(0x618)]=function(_0x4b62e4){const _0x225977=_0x26c4e1;if(!_0x4b62e4)return;$gameParty[_0x225977(0x217)](_0x4b62e4);let _0x1e7bb0='';if(DataManager[_0x225977(0x608)](_0x4b62e4))_0x1e7bb0=_0x225977(0x581)[_0x225977(0x272)](_0x4b62e4['id']);else{if(DataManager['isWeapon'](_0x4b62e4)){if(_0x225977(0x4de)===_0x225977(0x4de))_0x1e7bb0=_0x225977(0x323)['format'](_0x4b62e4['id']);else{_0x404456+=0x1;if(_0x39896e[_0x225977(0x291)][_0x225977(0x318)](_0x3bcf47)){const _0x26aca2=_0x56686f(_0x57cddf['$1'])||0x1;if(_0x12eb45>=_0x26aca2)return!![];}if(_0xede445[_0x225977(0x291)][_0x225977(0x318)](_0x47864d)){const _0x2d7cd1=_0x405fcc(_0x55029a['$1'])||0x1;if(_0x7632a4>=_0x2d7cd1)return!![];}}}else{if(DataManager['isArmor'](_0x4b62e4))_0x1e7bb0=_0x225977(0x449)[_0x225977(0x272)](_0x4b62e4['id']);else return;}}const _0x53b5a4=this[_0x225977(0x3fe)][_0x1e7bb0];if(_0x53b5a4)_0x53b5a4[_0x225977(0x3ff)]();},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x552)]=Window_Selectable[_0x26c4e1(0x306)][_0x26c4e1(0x49a)],Window_Selectable[_0x26c4e1(0x306)][_0x26c4e1(0x49a)]=function(){const _0x24f098=_0x26c4e1;this[_0x24f098(0x207)](),VisuMZ[_0x24f098(0x582)][_0x24f098(0x552)][_0x24f098(0x2e2)](this);},Window_Selectable[_0x26c4e1(0x306)][_0x26c4e1(0x207)]=function(){const _0x3d66a4=_0x26c4e1;for(const _0x507931 of Object[_0x3d66a4(0x58d)](this[_0x3d66a4(0x3fe)])){_0x507931[_0x3d66a4(0x3ff)]();}},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x602)]=Window_Selectable[_0x26c4e1(0x306)]['update'],Window_Selectable[_0x26c4e1(0x306)]['update']=function(){const _0x243209=_0x26c4e1;this[_0x243209(0x34e)](),VisuMZ[_0x243209(0x582)][_0x243209(0x602)][_0x243209(0x2e2)](this);},Window_Selectable[_0x26c4e1(0x306)][_0x26c4e1(0x34e)]=function(){const _0x365bc9=_0x26c4e1;if(!this[_0x365bc9(0x5f2)]())return;const _0x11e346=this[_0x365bc9(0x39b)];this['_newLabelOpacity']+=this['_newLabelOpacityChange'];(this[_0x365bc9(0x5ca)]>=_0x11e346||this[_0x365bc9(0x5ca)]<=0x0)&&(this[_0x365bc9(0x474)]*=-0x1);this[_0x365bc9(0x5ca)]=this[_0x365bc9(0x5ca)][_0x365bc9(0x2bb)](0x0,_0x11e346);for(const _0x8e0dfe of Object[_0x365bc9(0x58d)](this[_0x365bc9(0x3fe)])){_0x8e0dfe['opacity']=this[_0x365bc9(0x5ca)];}},Window_Selectable[_0x26c4e1(0x306)][_0x26c4e1(0x305)]=function(_0x4a4453){const _0x6c0bdc=_0x26c4e1,_0x99c61b=this['_newLabelSprites'];if(_0x99c61b[_0x4a4453])return _0x99c61b[_0x4a4453];else{const _0x381922=new Sprite_NewLabel();return _0x99c61b[_0x4a4453]=_0x381922,this[_0x6c0bdc(0x4a4)](_0x381922),_0x381922;}},Window_Selectable['prototype'][_0x26c4e1(0x25e)]=function(_0x4d280c,_0x2e48c0,_0xb37d44){const _0x337b78=_0x26c4e1;let _0xb88ab='';if(DataManager[_0x337b78(0x608)](_0x4d280c))_0xb88ab=_0x337b78(0x581)['format'](_0x4d280c['id']);else{if(DataManager[_0x337b78(0x1e4)](_0x4d280c))_0xb88ab=_0x337b78(0x323)[_0x337b78(0x272)](_0x4d280c['id']);else{if(DataManager['isArmor'](_0x4d280c))_0x337b78(0x4f2)==='BBRqt'?_0x5c2220[_0x337b78(0x3ff)]():_0xb88ab=_0x337b78(0x449)[_0x337b78(0x272)](_0x4d280c['id']);else return;}}const _0x6029b1=this[_0x337b78(0x305)](_0xb88ab);_0x6029b1[_0x337b78(0x2e8)](_0x2e48c0,_0xb37d44),_0x6029b1[_0x337b78(0x1e8)](),_0x6029b1['opacity']=this[_0x337b78(0x5ca)];},Window_ItemCategory[_0x26c4e1(0x604)]=VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x3d7)]['Categories'][_0x26c4e1(0x328)],Window_ItemCategory['categoryItemTypes']=['HiddenItemA',_0x26c4e1(0x406),_0x26c4e1(0x5b5),_0x26c4e1(0x301),_0x26c4e1(0x3ee),'BattleUsable',_0x26c4e1(0x483),_0x26c4e1(0x311)],VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x4dd)]=Window_ItemCategory[_0x26c4e1(0x306)][_0x26c4e1(0x358)],Window_ItemCategory[_0x26c4e1(0x306)][_0x26c4e1(0x358)]=function(_0x2197fb){const _0xf236e7=_0x26c4e1;VisuMZ[_0xf236e7(0x582)][_0xf236e7(0x4dd)][_0xf236e7(0x2e2)](this,_0x2197fb),this[_0xf236e7(0x4fb)](_0x2197fb);},Window_ItemCategory[_0x26c4e1(0x306)][_0x26c4e1(0x4fb)]=function(_0x589f50){const _0x50596e=_0x26c4e1,_0x5e00bc=new Rectangle(0x0,0x0,_0x589f50[_0x50596e(0x22c)],_0x589f50[_0x50596e(0x27e)]);this[_0x50596e(0x473)]=new Window_Base(_0x5e00bc),this['_categoryNameWindow']['opacity']=0x0,this['addChild'](this['_categoryNameWindow']),this[_0x50596e(0x346)]();},Window_ItemCategory['prototype'][_0x26c4e1(0x375)]=function(){const _0x5a6e2e=_0x26c4e1;return Imported['VisuMZ_0_CoreEngine']&&Window_HorzCommand[_0x5a6e2e(0x306)][_0x5a6e2e(0x375)][_0x5a6e2e(0x2e2)](this);},Window_ItemCategory['prototype']['processCursorHomeEndTrigger']=function(){},Window_ItemCategory['prototype'][_0x26c4e1(0x42a)]=function(){const _0x3ca9df=_0x26c4e1;if(!this[_0x3ca9df(0x375)]())Window_HorzCommand[_0x3ca9df(0x306)][_0x3ca9df(0x42a)]['call'](this);},Window_ItemCategory[_0x26c4e1(0x306)][_0x26c4e1(0x287)]=function(){const _0xb8481d=_0x26c4e1;return this['_list']?this[_0xb8481d(0x334)]():0x4;},Window_ItemCategory['prototype'][_0x26c4e1(0x5a0)]=function(){const _0x2239da=_0x26c4e1;Window_HorzCommand[_0x2239da(0x306)][_0x2239da(0x5a0)][_0x2239da(0x2e2)](this),this[_0x2239da(0x3bd)]&&this[_0x2239da(0x3bd)][_0x2239da(0x1fb)](this[_0x2239da(0x2f5)]());},Window_ItemCategory[_0x26c4e1(0x306)]['processCursorMoveModernControls']=function(){const _0xff6497=_0x26c4e1;if(this['isCursorMovable']()){const _0x2eeee4=this[_0xff6497(0x26a)]();if(this[_0xff6497(0x3bd)]&&this[_0xff6497(0x3bd)]['maxCols']()<=0x1)_0xff6497(0x1ef)!==_0xff6497(0x1ef)?_0x324bd3[_0xff6497(0x306)][_0xff6497(0x3eb)][_0xff6497(0x2e2)](this,_0xeb29fc):(Input['isRepeated']('right')&&this[_0xff6497(0x4ad)](Input[_0xff6497(0x3b9)](_0xff6497(0x38c))),Input[_0xff6497(0x506)]('left')&&this[_0xff6497(0x4e6)](Input['isTriggered'](_0xff6497(0x249))));else this[_0xff6497(0x3bd)]&&this[_0xff6497(0x3bd)][_0xff6497(0x287)]()>0x1&&(Input[_0xff6497(0x506)](_0xff6497(0x430))&&!Input['isPressed']('shift')&&this[_0xff6497(0x4ad)](Input[_0xff6497(0x3b9)]('pagedown')),Input[_0xff6497(0x506)](_0xff6497(0x23e))&&!Input[_0xff6497(0x403)](_0xff6497(0x3b4))&&this['cursorLeft'](Input['isTriggered'](_0xff6497(0x23e))));this['index']()!==_0x2eeee4&&this[_0xff6497(0x541)]();}},Window_ItemCategory[_0x26c4e1(0x306)][_0x26c4e1(0x402)]=function(){const _0x4817e7=_0x26c4e1;if(this[_0x4817e7(0x375)]())return;Window_HorzCommand['prototype'][_0x4817e7(0x402)][_0x4817e7(0x2e2)](this);},Window_ItemCategory[_0x26c4e1(0x306)][_0x26c4e1(0x365)]=function(){const _0x128c5f=_0x26c4e1;if(this[_0x128c5f(0x375)]()){if(_0x128c5f(0x510)!==_0x128c5f(0x510))this['_slotWindow']['index']()>=0x0?(_0x25f013['ItemsEquipsCore']['Scene_Equip_onSlotOk'][_0x128c5f(0x2e2)](this),this[_0x128c5f(0x5bd)]()):(this[_0x128c5f(0x513)][_0x128c5f(0x283)](0x0),this['_slotWindow']['activate']());else return![];}else{if(_0x128c5f(0x431)!==_0x128c5f(0x3e7))return Window_HorzCommand[_0x128c5f(0x306)][_0x128c5f(0x365)][_0x128c5f(0x2e2)](this);else _0x5b53db[_0x128c5f(0x582)][_0x128c5f(0x407)][_0x128c5f(0x2e2)](this,_0x48107d),this[_0x128c5f(0x51d)](_0x5ef644);}},Window_ItemCategory[_0x26c4e1(0x306)][_0x26c4e1(0x4ec)]=function(){const _0x4bc63e=_0x26c4e1;if(this['isOpenAndActive']()){TouchInput[_0x4bc63e(0x3b9)]()&&('jruCu'!=='jruCu'?_0xc14f3e['width']-=this[_0x4bc63e(0x4ca)]():this['onTouchSelect'](!![]));if(TouchInput[_0x4bc63e(0x363)]())_0x4bc63e(0x378)!==_0x4bc63e(0x624)?this['onTouchOk']():_0xad3bd0[_0x4bc63e(0x419)][_0x4bc63e(0x5c2)]===_0x2656b4&&(this[_0x4bc63e(0x40b)]=_0x28976d['_scene']['money']());else{if(TouchInput[_0x4bc63e(0x570)]()){if(_0x4bc63e(0x28b)==='jziOP')this[_0x4bc63e(0x22a)]();else{if(this[_0x4bc63e(0x315)](_0x4d1aa9))return![];if(this[_0x4bc63e(0x620)](_0x507ed))return![];if(this[_0x4bc63e(0x37c)](_0x1914be))return![];}}}}},Window_ItemCategory[_0x26c4e1(0x306)]['onTouchSelect']=function(_0x1adcd1){const _0x3506b4=_0x26c4e1;this[_0x3506b4(0x375)]()?this[_0x3506b4(0x554)](!![]):Window_HorzCommand[_0x3506b4(0x306)][_0x3506b4(0x3eb)][_0x3506b4(0x2e2)](this,_0x1adcd1);},Window_ItemCategory[_0x26c4e1(0x306)]['onTouchSelectModern']=function(_0x4cb134){const _0x5994d6=_0x26c4e1;this[_0x5994d6(0x244)]=![];if(this[_0x5994d6(0x41a)]()){const _0x4a42b9=this[_0x5994d6(0x26a)](),_0x413b31=this[_0x5994d6(0x5ff)]();_0x413b31>=0x0&&_0x413b31!==this['index']()&&this[_0x5994d6(0x5e9)](_0x413b31),_0x4cb134&&this[_0x5994d6(0x26a)]()!==_0x4a42b9&&this[_0x5994d6(0x541)]();}},Window_ItemCategory[_0x26c4e1(0x306)][_0x26c4e1(0x5e2)]=function(){const _0x375922=_0x26c4e1;for(const _0x52e02c of Window_ItemCategory[_0x375922(0x604)]){this['addItemCategory'](_0x52e02c);}this[_0x375922(0x5e9)](this['index']());},Window_ItemCategory[_0x26c4e1(0x306)][_0x26c4e1(0x354)]=function(_0x291996){const _0x5d28c9=_0x26c4e1,_0x1ba1ba=_0x291996[_0x5d28c9(0x260)],_0x145cec=_0x291996['Icon'],_0x130288=_0x291996[_0x5d28c9(0x579)]||0x0;if(_0x130288>0x0&&!$gameSwitches[_0x5d28c9(0x5cc)](_0x130288))return;let _0x46defa='',_0x19d034=_0x5d28c9(0x3cb),_0x1863e2=_0x1ba1ba;if(_0x1ba1ba[_0x5d28c9(0x318)](/Category:(.*)/i))_0x46defa=String(RegExp['$1'])['trim']();else{if(Window_ItemCategory[_0x5d28c9(0x439)]['includes'](_0x1ba1ba))_0x46defa=VisuMZ[_0x5d28c9(0x582)][_0x5d28c9(0x3d7)]['Categories'][_0x1ba1ba];else{if([_0x5d28c9(0x30a),_0x5d28c9(0x21b)]['includes'](_0x1ba1ba))_0x46defa=TextManager[_0x5d28c9(0x50a)];else{if(_0x1ba1ba===_0x5d28c9(0x34d))_0x46defa=TextManager[_0x5d28c9(0x613)];else{if(_0x1ba1ba===_0x5d28c9(0x43d))_0x46defa=TextManager[_0x5d28c9(0x4b7)];else{if(_0x1ba1ba==='AllArmors'){if(_0x5d28c9(0x54f)!==_0x5d28c9(0x54f))return;else _0x46defa=TextManager[_0x5d28c9(0x232)];}else{if(_0x1ba1ba[_0x5d28c9(0x318)](/WTYPE:(\d+)/i))_0x46defa=$dataSystem[_0x5d28c9(0x427)][Number(RegExp['$1'])]||'';else{if(_0x1ba1ba[_0x5d28c9(0x318)](/ATYPE:(\d+)/i)){if('PzSxN'===_0x5d28c9(0x239))_0x46defa=$dataSystem[_0x5d28c9(0x3c8)][Number(RegExp['$1'])]||'';else return _0x6fc04e['ItemsEquipsCore']['Settings'][_0x5d28c9(0x501)][_0x5d28c9(0x2b2)];}else _0x1ba1ba[_0x5d28c9(0x318)](/ETYPE:(\d+)/i)&&(_0x46defa=$dataSystem[_0x5d28c9(0x2b4)][Number(RegExp['$1'])]||'');}}}}}}}_0x145cec>0x0&&this[_0x5d28c9(0x34a)]()!==_0x5d28c9(0x20f)&&(_0x46defa=_0x5d28c9(0x462)['format'](_0x145cec,_0x46defa)),this[_0x5d28c9(0x281)](_0x46defa,_0x19d034,!![],_0x1863e2);},Window_ItemCategory['prototype'][_0x26c4e1(0x227)]=function(){const _0x351a22=_0x26c4e1;return VisuMZ['ItemsEquipsCore'][_0x351a22(0x3d7)][_0x351a22(0x33b)][_0x351a22(0x5e4)];},Window_ItemCategory[_0x26c4e1(0x306)][_0x26c4e1(0x628)]=function(_0xe2c733){const _0x554cec=_0x26c4e1,_0x3bbfd8=this[_0x554cec(0x3c7)](_0xe2c733);if(_0x3bbfd8===_0x554cec(0x523))this[_0x554cec(0x3ea)](_0xe2c733);else _0x3bbfd8===_0x554cec(0x3a7)?this[_0x554cec(0x322)](_0xe2c733):Window_HorzCommand[_0x554cec(0x306)][_0x554cec(0x628)][_0x554cec(0x2e2)](this,_0xe2c733);},Window_ItemCategory['prototype'][_0x26c4e1(0x34a)]=function(){const _0x36a69e=_0x26c4e1;return VisuMZ[_0x36a69e(0x582)][_0x36a69e(0x3d7)]['Categories']['Style'];},Window_ItemCategory['prototype'][_0x26c4e1(0x3c7)]=function(_0x441554){const _0x2aaf84=_0x26c4e1;if(_0x441554<0x0)return _0x2aaf84(0x20f);const _0x2924de=this[_0x2aaf84(0x34a)]();if(_0x2924de!==_0x2aaf84(0x3b1)){if(_0x2aaf84(0x2ed)!==_0x2aaf84(0x2ed)){if(!_0x456f65[_0x2aaf84(0x5cc)](_0x4341c2))return![];}else return _0x2924de;}else{const _0x339134=this['commandName'](_0x441554);if(_0x339134[_0x2aaf84(0x318)](/\\I\[(\d+)\]/i)){const _0xbc138e=this[_0x2aaf84(0x348)](_0x441554),_0xb487be=this[_0x2aaf84(0x35c)](_0x339134)[_0x2aaf84(0x22c)];return _0xb487be<=_0xbc138e['width']?_0x2aaf84(0x523):_0x2aaf84(0x3a7);}else return _0x2aaf84(0x20f);}},Window_ItemCategory['prototype'][_0x26c4e1(0x3ea)]=function(_0x5e6035){const _0x278f05=_0x26c4e1,_0x20c4ea=this['itemLineRect'](_0x5e6035),_0x3073cb=this[_0x278f05(0x2a5)](_0x5e6035),_0x49ff91=this[_0x278f05(0x35c)](_0x3073cb)[_0x278f05(0x22c)];this[_0x278f05(0x530)](this[_0x278f05(0x33a)](_0x5e6035));const _0x161223=this['itemTextAlign']();if(_0x161223===_0x278f05(0x38c))this['drawTextEx'](_0x3073cb,_0x20c4ea['x']+_0x20c4ea[_0x278f05(0x22c)]-_0x49ff91,_0x20c4ea['y'],_0x49ff91);else{if(_0x161223===_0x278f05(0x312)){const _0x5274b3=_0x20c4ea['x']+Math[_0x278f05(0x5b8)]((_0x20c4ea['width']-_0x49ff91)/0x2);this[_0x278f05(0x5bf)](_0x3073cb,_0x5274b3,_0x20c4ea['y'],_0x49ff91);}else{if(_0x278f05(0x20e)===_0x278f05(0x20e))this[_0x278f05(0x5bf)](_0x3073cb,_0x20c4ea['x'],_0x20c4ea['y'],_0x49ff91);else return _0x305c48[_0x278f05(0x582)][_0x278f05(0x3d7)][_0x278f05(0x30c)]['ParamValueFontSize'];}}},Window_ItemCategory[_0x26c4e1(0x306)]['drawItemStyleIcon']=function(_0x1cf7d2){const _0x19a1c6=_0x26c4e1,_0x1ca612=this['commandName'](_0x1cf7d2);if(_0x1ca612[_0x19a1c6(0x318)](/\\I\[(\d+)\]/i)){const _0x11c67=Number(RegExp['$1'])||0x0,_0x300c7e=this[_0x19a1c6(0x348)](_0x1cf7d2),_0x5344b6=_0x300c7e['x']+Math[_0x19a1c6(0x5b8)]((_0x300c7e[_0x19a1c6(0x22c)]-ImageManager[_0x19a1c6(0x1f8)])/0x2),_0x55b8d7=_0x300c7e['y']+(_0x300c7e[_0x19a1c6(0x27e)]-ImageManager[_0x19a1c6(0x48f)])/0x2;this[_0x19a1c6(0x2af)](_0x11c67,_0x5344b6,_0x55b8d7);}},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x337)]=Window_ItemCategory['prototype'][_0x26c4e1(0x2c9)],Window_ItemCategory[_0x26c4e1(0x306)][_0x26c4e1(0x2c9)]=function(_0x45fd33){const _0x2bb91e=_0x26c4e1;VisuMZ[_0x2bb91e(0x582)][_0x2bb91e(0x337)][_0x2bb91e(0x2e2)](this,_0x45fd33),_0x45fd33['_categoryWindow']=this;},Window_ItemCategory[_0x26c4e1(0x306)]['callUpdateHelp']=function(){const _0x4b2344=_0x26c4e1;Window_HorzCommand[_0x4b2344(0x306)][_0x4b2344(0x4c0)][_0x4b2344(0x2e2)](this);if(this[_0x4b2344(0x473)])this[_0x4b2344(0x346)]();},Window_ItemCategory[_0x26c4e1(0x306)]['updateCategoryNameWindow']=function(){const _0xe81719=_0x26c4e1,_0x25a91b=this[_0xe81719(0x473)];_0x25a91b[_0xe81719(0x3ab)][_0xe81719(0x4e4)]();const _0x305876=this['categoryStyleCheck'](this[_0xe81719(0x26a)]());if(_0x305876===_0xe81719(0x3a7)){if(_0xe81719(0x4e3)==='aFpGA')return _0x4d0186[_0xe81719(0x582)][_0xe81719(0x413)][_0xe81719(0x2e2)](this,_0x12fceb);else{const _0x2efd75=this['itemLineRect'](this[_0xe81719(0x26a)]());let _0x2ed276=this[_0xe81719(0x2a5)](this[_0xe81719(0x26a)]());_0x2ed276=_0x2ed276['replace'](/\\I\[(\d+)\]/gi,''),_0x25a91b[_0xe81719(0x277)](),this[_0xe81719(0x395)](_0x2ed276,_0x2efd75),this[_0xe81719(0x442)](_0x2ed276,_0x2efd75),this[_0xe81719(0x336)](_0x2ed276,_0x2efd75);}}},Window_ItemCategory['prototype'][_0x26c4e1(0x395)]=function(_0x7f0566,_0x5cec26){},Window_ItemCategory[_0x26c4e1(0x306)]['categoryNameWindowDrawText']=function(_0x244aa7,_0x23f727){const _0x12b08f=_0x26c4e1,_0x166773=this[_0x12b08f(0x473)];_0x166773[_0x12b08f(0x392)](_0x244aa7,0x0,_0x23f727['y'],_0x166773[_0x12b08f(0x453)],_0x12b08f(0x312));},Window_ItemCategory[_0x26c4e1(0x306)][_0x26c4e1(0x336)]=function(_0x3fc05c,_0x7fa502){const _0x8c95a0=_0x26c4e1,_0x1ac8fe=this[_0x8c95a0(0x473)],_0x50389f=$gameSystem[_0x8c95a0(0x2de)](),_0x4dec24=_0x7fa502['x']+Math[_0x8c95a0(0x5b8)](_0x7fa502[_0x8c95a0(0x22c)]/0x2)+_0x50389f;_0x1ac8fe['x']=_0x1ac8fe['width']/-0x2+_0x4dec24,_0x1ac8fe['y']=Math[_0x8c95a0(0x5b8)](_0x7fa502['height']/0x2);},Window_ItemList[_0x26c4e1(0x306)]['processCursorMoveModernControls']=function(){const _0xae445c=_0x26c4e1;if(this[_0xae445c(0x41a)]()){const _0x5e3b8e=this['index']();if(this[_0xae445c(0x287)]()<=0x1){if(!this['isHandled'](_0xae445c(0x430))&&Input[_0xae445c(0x3b9)](_0xae445c(0x430))){if('aSzhW'===_0xae445c(0x472))this[_0xae445c(0x45c)]();else return this['updatedLayoutStyle']()['match'](/RIGHT/i);}if(!this['isHandled']('pageup')&&Input['isTriggered'](_0xae445c(0x23e))){if(_0xae445c(0x2ad)!==_0xae445c(0x2e0))this[_0xae445c(0x4c2)]();else{if(_0x49865f[_0xae445c(0x479)]())_0x52099c[_0xae445c(0x5c9)](_0xcc512f);}}}else{if(this['maxCols']()>0x1){Input['isRepeated'](_0xae445c(0x38c))&&this[_0xae445c(0x4ad)](Input[_0xae445c(0x3b9)](_0xae445c(0x38c)));Input[_0xae445c(0x506)](_0xae445c(0x249))&&(_0xae445c(0x2a4)===_0xae445c(0x21c)?_0x1691f7=this[_0xae445c(0x5f9)][_0xae445c(0x219)](_0x94ed43,!![]):this['cursorLeft'](Input['isTriggered']('left')));if(this[_0xae445c(0x5cb)]()){Input[_0xae445c(0x3b9)]('pagedown')&&Input['isPressed'](_0xae445c(0x3b4))&&this[_0xae445c(0x45c)]();if(Input['isTriggered'](_0xae445c(0x23e))&&Input[_0xae445c(0x403)](_0xae445c(0x3b4))){if(_0xae445c(0x504)===_0xae445c(0x504))this['cursorPageup']();else return _0xb0b036[_0xae445c(0x418)]()[_0xae445c(0x1ee)](_0x566603);}}else Input[_0xae445c(0x3b9)]('pagedown')&&this['cursorPagedown'](),Input[_0xae445c(0x3b9)](_0xae445c(0x23e))&&(_0xae445c(0x2dc)!==_0xae445c(0x2dc)?this['_money']=_0x43bce3['_scene'][_0xae445c(0x357)]():this[_0xae445c(0x4c2)]());}}if(Input[_0xae445c(0x506)](_0xae445c(0x553))){if('FvryL'===_0xae445c(0x47e)){const _0x1e8568=_0x2ec0a1[_0xae445c(0x295)](this);_0x1e8568['_tempActor']=!![],_0x258c92[_0xae445c(0x582)][_0xae445c(0x5d6)]['call'](this,_0x3779cf),this[_0xae445c(0x46e)](_0x1e8568);}else Input[_0xae445c(0x403)](_0xae445c(0x3b4))&&this['allowShiftScrolling']()?this[_0xae445c(0x45c)]():'zjGCM'!==_0xae445c(0x26d)?this[_0xae445c(0x1ff)](Input[_0xae445c(0x3b9)]('down')):(this[_0xae445c(0x207)](),_0x548fb6[_0xae445c(0x582)][_0xae445c(0x552)][_0xae445c(0x2e2)](this));}if(Input['isRepeated']('up')){if(_0xae445c(0x40f)===_0xae445c(0x40f)){if(Input['isPressed'](_0xae445c(0x3b4))&&this['allowShiftScrolling']()){if('GUbJW'!==_0xae445c(0x2a1)){const _0x598d52=_0x415a4c[_0xae445c(0x38e)](_0xae445c(0x379)),_0x336024=_0x397441[_0xae445c(0x1f8)],_0x465468=_0x21d5be[_0xae445c(0x48f)],_0xdc0857=_0x5cbfd4%0x10*_0x336024,_0xdb60ba=_0x4932d9[_0xae445c(0x5b8)](_0x4e8a73/0x10)*_0x465468,_0x1c442b=_0xb2650[_0xae445c(0x373)](_0x336024*this[_0xae445c(0x56b)]()),_0xb87293=_0x37dd19[_0xae445c(0x373)](_0x465468*this['fontSizeRatio']());this[_0xae445c(0x3ab)][_0xae445c(0x2c1)](_0x598d52,_0xdc0857,_0xdb60ba,_0x336024,_0x465468,_0x5b4b33,_0xba4acd,_0x1c442b,_0xb87293);}else this[_0xae445c(0x4c2)]();}else{if('LYRuV'==='DwyTs')return _0xa394d7[_0xae445c(0x582)]['Settings']['ItemScene'][_0xae445c(0x2a2)];else this[_0xae445c(0x44a)](Input[_0xae445c(0x3b9)]('up'));}}else{if(this[_0xae445c(0x28f)](_0x5a345d))this[_0xae445c(0x3a1)](_0x5120ff,this[_0xae445c(0x4a1)](_0x5c950b));}}Imported['VisuMZ_0_CoreEngine']&&this[_0xae445c(0x5a4)](),this[_0xae445c(0x26a)]()!==_0x5e3b8e&&this[_0xae445c(0x541)]();}},Window_ItemList[_0x26c4e1(0x306)][_0x26c4e1(0x5cb)]=function(){const _0x5bdda0=_0x26c4e1,_0x412e85=SceneManager[_0x5bdda0(0x419)],_0x133143=[Scene_Item,Scene_Shop];return _0x133143[_0x5bdda0(0x3b2)](_0x412e85[_0x5bdda0(0x5c2)]);},Window_ItemList['prototype'][_0x26c4e1(0x27a)]=function(){const _0x318839=_0x26c4e1;Window_Selectable[_0x318839(0x306)][_0x318839(0x27a)][_0x318839(0x2e2)](this);if(this[_0x318839(0x547)]&&this['_categoryWindow']['isUseModernControls']()){if(_0x318839(0x3ca)!==_0x318839(0x3ca)){const _0x22ce49=_0x68c9d7(_0x7398b5['$1'])[_0x318839(0x233)](/[\r\n]+/);for(const _0x1daf47 of _0x22ce49){if(_0x1daf47[_0x318839(0x318)](/(.*):[ ](.*)/i)){const _0x33512b=_0x161d7f(_0x57f068['$1'])['toUpperCase']()[_0x318839(0x5b1)](),_0x44cd56=_0x4d3dde(_0x5a0830['$2'])[_0x318839(0x5b1)]();this['_customItemInfo'][_0x33512b]=_0x44cd56;}}}else this[_0x318839(0x547)][_0x318839(0x27a)]();}},Window_ItemList['prototype'][_0x26c4e1(0x3fc)]=function(){const _0x318b6d=_0x26c4e1;Window_Selectable[_0x318b6d(0x306)][_0x318b6d(0x3fc)][_0x318b6d(0x2e2)](this),this[_0x318b6d(0x547)]&&this[_0x318b6d(0x547)][_0x318b6d(0x375)]()&&this[_0x318b6d(0x547)][_0x318b6d(0x3fc)]();},Window_ItemList['prototype'][_0x26c4e1(0x1fb)]=function(_0x2d18bb){const _0x1f935e=_0x26c4e1;this[_0x1f935e(0x574)]!==_0x2d18bb&&(this['_category']=_0x2d18bb,this[_0x1f935e(0x49a)](),this[_0x1f935e(0x547)]&&this[_0x1f935e(0x547)][_0x1f935e(0x375)]()?this['smoothSelect'](0x0):this[_0x1f935e(0x297)](0x0,0x0));},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x20c)]=Window_ItemList[_0x26c4e1(0x306)][_0x26c4e1(0x287)],Window_ItemList[_0x26c4e1(0x306)]['maxCols']=function(){const _0x551f2f=_0x26c4e1;if(SceneManager[_0x551f2f(0x419)]['constructor']===Scene_Battle)return VisuMZ['ItemsEquipsCore'][_0x551f2f(0x20c)][_0x551f2f(0x2e2)](this);else{if(SceneManager['_scene'][_0x551f2f(0x5c2)]===Scene_Map){if(_0x551f2f(0x43f)==='mjYBg')return VisuMZ[_0x551f2f(0x582)][_0x551f2f(0x20c)][_0x551f2f(0x2e2)](this);else _0x528b95=0x0;}else return VisuMZ[_0x551f2f(0x582)][_0x551f2f(0x3d7)][_0x551f2f(0x411)]['ListWindowCols'];}},VisuMZ[_0x26c4e1(0x582)]['Window_ItemList_colSpacing']=Window_ItemList[_0x26c4e1(0x306)][_0x26c4e1(0x3d1)],Window_ItemList[_0x26c4e1(0x306)][_0x26c4e1(0x3d1)]=function(){const _0x2f56fe=_0x26c4e1;if(this[_0x2f56fe(0x287)]()<=0x1)return Window_Selectable[_0x2f56fe(0x306)]['colSpacing']['call'](this);else{if(_0x2f56fe(0x36c)!==_0x2f56fe(0x450))return VisuMZ[_0x2f56fe(0x582)][_0x2f56fe(0x202)][_0x2f56fe(0x2e2)](this);else _0x31dbda['ItemsEquipsCore'][_0x2f56fe(0x257)]['call'](this),this[_0x2f56fe(0x1f7)]()&&this['commandBuyItemsEquipsCore']();}},Window_ItemList[_0x26c4e1(0x306)][_0x26c4e1(0x3b2)]=function(_0x5923b7){const _0x2ba91e=_0x26c4e1;switch(this[_0x2ba91e(0x574)]){case'AllItems':return DataManager[_0x2ba91e(0x608)](_0x5923b7);case'RegularItems':return DataManager[_0x2ba91e(0x608)](_0x5923b7)&&_0x5923b7['itypeId']===0x1;case _0x2ba91e(0x34d):return DataManager[_0x2ba91e(0x608)](_0x5923b7)&&_0x5923b7['itypeId']===0x2;case'HiddenItemA':return DataManager['isItem'](_0x5923b7)&&_0x5923b7['itypeId']===0x3;case _0x2ba91e(0x406):return DataManager[_0x2ba91e(0x608)](_0x5923b7)&&_0x5923b7[_0x2ba91e(0x5aa)]===0x4;case _0x2ba91e(0x301):return DataManager[_0x2ba91e(0x608)](_0x5923b7)&&_0x5923b7[_0x2ba91e(0x275)];case _0x2ba91e(0x5b5):return DataManager[_0x2ba91e(0x608)](_0x5923b7)&&!_0x5923b7[_0x2ba91e(0x275)];case _0x2ba91e(0x3ee):return DataManager['isItem'](_0x5923b7)&&[0x0][_0x2ba91e(0x3b2)](_0x5923b7[_0x2ba91e(0x528)]);case'BattleUsable':return DataManager['isItem'](_0x5923b7)&&[0x0,0x1]['includes'](_0x5923b7[_0x2ba91e(0x528)]);case _0x2ba91e(0x483):return DataManager[_0x2ba91e(0x608)](_0x5923b7)&&[0x0,0x2][_0x2ba91e(0x3b2)](_0x5923b7[_0x2ba91e(0x528)]);case _0x2ba91e(0x311):return DataManager[_0x2ba91e(0x608)](_0x5923b7)&&[0x3][_0x2ba91e(0x3b2)](_0x5923b7[_0x2ba91e(0x528)]);case'AllWeapons':return DataManager[_0x2ba91e(0x1e4)](_0x5923b7);case _0x2ba91e(0x25f):return DataManager[_0x2ba91e(0x396)](_0x5923b7);default:if(this[_0x2ba91e(0x574)]['match'](/WTYPE:(\d+)/i)){if(_0x2ba91e(0x555)==='uQAGA')return DataManager[_0x2ba91e(0x1e4)](_0x5923b7)&&_0x5923b7['wtypeId']===Number(RegExp['$1']);else{const _0x1cab18=_0x2ba91e(0x3a5);if(this[_0x2ba91e(0x469)][_0x1cab18])return this['_customItemInfo'][_0x1cab18];return this[_0x2ba91e(0x593)]()?_0x53ae4d[_0x2ba91e(0x582)]['Settings']['StatusWindow']['Consumable']:_0x4c8e4f[_0x2ba91e(0x582)][_0x2ba91e(0x3d7)][_0x2ba91e(0x501)][_0x2ba91e(0x3e1)];}}else{if(this['_category'][_0x2ba91e(0x318)](/WTYPE:(.*)/i)){if(_0x2ba91e(0x4f5)===_0x2ba91e(0x4f5)){const _0x5ca6d7=$dataSystem['weaponTypes']['indexOf'](String(RegExp['$1'])[_0x2ba91e(0x5b1)]());return DataManager['isWeapon'](_0x5923b7)&&_0x5923b7[_0x2ba91e(0x5ee)]===_0x5ca6d7;}else return this[_0x2ba91e(0x5a7)][_0x2ba91e(0x22c)]/0x5/-0x3;}else{if(this['_category']['match'](/ATYPE:(\d+)/i))return DataManager[_0x2ba91e(0x396)](_0x5923b7)&&_0x5923b7['atypeId']===Number(RegExp['$1']);else{if(this[_0x2ba91e(0x574)]['match'](/ATYPE:(.*)/i)){const _0x219920=$dataSystem[_0x2ba91e(0x3c8)][_0x2ba91e(0x4a0)](String(RegExp['$1'])[_0x2ba91e(0x5b1)]());return DataManager['isArmor'](_0x5923b7)&&_0x5923b7[_0x2ba91e(0x60c)]===_0x219920;}else{if(this[_0x2ba91e(0x574)][_0x2ba91e(0x318)](/ETYPE:(\d+)/i))return _0x2ba91e(0x218)!==_0x2ba91e(0x23d)?!!_0x5923b7&&_0x5923b7[_0x2ba91e(0x2f8)]===Number(RegExp['$1']):_0x286881[_0x2ba91e(0x5b8)](this[_0x2ba91e(0x4ea)][_0x2ba91e(0x5c3)]*this['sellPriceRate']());else{if(this['_category'][_0x2ba91e(0x318)](/ETYPE:(.*)/i)){const _0x17bf87=$dataSystem[_0x2ba91e(0x2b4)][_0x2ba91e(0x4a0)](String(RegExp['$1'])[_0x2ba91e(0x5b1)]());return DataManager[_0x2ba91e(0x396)](_0x5923b7)&&_0x5923b7['etypeId']===_0x17bf87;}else{if(this[_0x2ba91e(0x574)][_0x2ba91e(0x318)](/Category:(.*)/i))return!!_0x5923b7&&_0x5923b7['categories']['includes'](String(RegExp['$1'])[_0x2ba91e(0x3e9)]()[_0x2ba91e(0x5b1)]());}}}}}}}return![];},Window_ItemList[_0x26c4e1(0x306)][_0x26c4e1(0x5f2)]=function(){return!![];},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x407)]=Window_ItemList[_0x26c4e1(0x306)][_0x26c4e1(0x628)],Window_ItemList[_0x26c4e1(0x306)][_0x26c4e1(0x628)]=function(_0x4e723f){const _0x3d446d=_0x26c4e1;VisuMZ[_0x3d446d(0x582)][_0x3d446d(0x407)][_0x3d446d(0x2e2)](this,_0x4e723f),this[_0x3d446d(0x51d)](_0x4e723f);},Window_ItemList[_0x26c4e1(0x306)][_0x26c4e1(0x1f5)]=function(_0x395fda,_0x4d6a9e,_0x176f45,_0x1013e3){const _0x1e6863=_0x26c4e1;Window_Selectable['prototype']['drawItemNumber'][_0x1e6863(0x2e2)](this,_0x395fda,_0x4d6a9e,_0x176f45,_0x1013e3);},Window_ItemList[_0x26c4e1(0x306)]['placeItemNewLabel']=function(_0x268366){const _0x7bfe5f=_0x26c4e1,_0x3f8cac=this['itemAt'](_0x268366);if(!_0x3f8cac||!this[_0x7bfe5f(0x5f2)]())return;if(!$gameParty[_0x7bfe5f(0x5cf)](_0x3f8cac))return;const _0x34c79b=this[_0x7bfe5f(0x348)](_0x268366),_0x30593f=_0x34c79b['x'],_0x49a456=_0x34c79b['y']+(this[_0x7bfe5f(0x2bd)]()-ImageManager[_0x7bfe5f(0x48f)])/0x2,_0x15b351=VisuMZ[_0x7bfe5f(0x582)][_0x7bfe5f(0x3d7)]['New'][_0x7bfe5f(0x571)],_0x85e747=VisuMZ['ItemsEquipsCore'][_0x7bfe5f(0x3d7)][_0x7bfe5f(0x320)]['OffsetY'];this[_0x7bfe5f(0x25e)](_0x3f8cac,_0x30593f+_0x15b351,_0x49a456+_0x85e747);},Window_ItemList[_0x26c4e1(0x306)]['setStatusWindow']=function(_0x4910a9){this['_statusWindow']=_0x4910a9,this['callUpdateHelp']();},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x5a3)]=Window_ItemList[_0x26c4e1(0x306)]['updateHelp'],Window_ItemList[_0x26c4e1(0x306)][_0x26c4e1(0x4aa)]=function(){const _0x206f3f=_0x26c4e1;VisuMZ[_0x206f3f(0x582)][_0x206f3f(0x5a3)][_0x206f3f(0x2e2)](this),this[_0x206f3f(0x3aa)]&&this['_statusWindow'][_0x206f3f(0x5c2)]===Window_ShopStatus&&(_0x206f3f(0x21a)===_0x206f3f(0x21a)?this[_0x206f3f(0x3aa)][_0x206f3f(0x296)](this['item']()):_0x28661d[_0x206f3f(0x306)]['isRightInputMode'][_0x206f3f(0x2e2)](this));},Window_BattleItem[_0x26c4e1(0x306)][_0x26c4e1(0x3ec)]=function(_0x4efa52){const _0x452b47=_0x26c4e1;return BattleManager[_0x452b47(0x418)]()?BattleManager[_0x452b47(0x418)]()[_0x452b47(0x1ee)](_0x4efa52):_0x452b47(0x535)!==_0x452b47(0x535)?_0x2ae28e['ItemsEquipsCore']['Settings']['ShopScene']['CmdStyle']:Window_ItemList[_0x452b47(0x306)][_0x452b47(0x3ec)][_0x452b47(0x2e2)](this,_0x4efa52);},Window_EventItem[_0x26c4e1(0x306)][_0x26c4e1(0x5f2)]=function(){return![];},Window_EquipStatus[_0x26c4e1(0x306)][_0x26c4e1(0x1f7)]=function(){const _0x516199=_0x26c4e1;return VisuMZ[_0x516199(0x582)]['Settings'][_0x516199(0x30c)]['EnableLayout'];},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x569)]=Window_EquipStatus[_0x26c4e1(0x306)][_0x26c4e1(0x49a)],Window_EquipStatus[_0x26c4e1(0x306)][_0x26c4e1(0x49a)]=function(){const _0x4124ac=_0x26c4e1;this[_0x4124ac(0x3ae)](),this[_0x4124ac(0x277)]();if(this['_actor'])this[_0x4124ac(0x5f9)]['refresh']();this[_0x4124ac(0x1f7)]()?this[_0x4124ac(0x253)]():VisuMZ[_0x4124ac(0x582)][_0x4124ac(0x569)]['call'](this);},Window_EquipStatus[_0x26c4e1(0x306)][_0x26c4e1(0x253)]=function(){const _0x39c571=_0x26c4e1;this[_0x39c571(0x3ab)][_0x39c571(0x4e4)]();if(!this['_actor'])return;if(this[_0x39c571(0x4fd)]()){const _0x3de0b2=ImageManager[_0x39c571(0x4db)](this[_0x39c571(0x5f9)][_0x39c571(0x27d)]());_0x3de0b2[_0x39c571(0x4e5)](this['onMenuImageLoad'][_0x39c571(0x519)](this));}else{if(_0x39c571(0x250)===_0x39c571(0x250))this['refreshItemsEquipsCoreNoMenuImage']();else{if(_0xc474b7['versionId']()!==_0xdb6f02[_0x39c571(0x1e0)])for(const _0x32d0b8 of _0x5584c6[_0x39c571(0x3e6)]){if(_0x32d0b8)_0x32d0b8[_0x39c571(0x586)]();}}}},Window_EquipStatus[_0x26c4e1(0x306)]['isMainMenuCoreMenuImageOptionAvailable']=function(){const _0xb4903a=_0x26c4e1;return Imported[_0xb4903a(0x25b)]&&this[_0xb4903a(0x5f9)][_0xb4903a(0x27d)]()!==''&&VisuMZ[_0xb4903a(0x582)][_0xb4903a(0x3d7)][_0xb4903a(0x30c)][_0xb4903a(0x5ce)];},Window_EquipStatus[_0x26c4e1(0x306)][_0x26c4e1(0x364)]=function(){const _0x26b8fc=_0x26c4e1;VisuMZ[_0x26b8fc(0x582)][_0x26b8fc(0x3d7)][_0x26b8fc(0x30c)]['DrawPortraitJS'][_0x26b8fc(0x2e2)](this),this[_0x26b8fc(0x550)]();},Window_EquipStatus[_0x26c4e1(0x306)]['refreshItemsEquipsCoreNoMenuImage']=function(){const _0x313cb4=_0x26c4e1;VisuMZ[_0x313cb4(0x582)][_0x313cb4(0x3d7)][_0x313cb4(0x30c)][_0x313cb4(0x448)][_0x313cb4(0x2e2)](this),this[_0x313cb4(0x550)]();},Window_EquipStatus[_0x26c4e1(0x306)][_0x26c4e1(0x550)]=function(){const _0x35bd60=_0x26c4e1;this[_0x35bd60(0x277)](),VisuMZ['ItemsEquipsCore']['Settings'][_0x35bd60(0x30c)][_0x35bd60(0x2b9)][_0x35bd60(0x2e2)](this);},Window_EquipStatus[_0x26c4e1(0x306)][_0x26c4e1(0x32d)]=function(_0x484b52,_0x4a53a5,_0x448a43,_0x2826f1,_0x52a4ac){const _0x35e819=_0x26c4e1,_0x32b894=ImageManager['loadPicture'](_0x484b52['getMenuImage']()),_0x14db20=this[_0x35e819(0x453)]-_0x32b894['width'];_0x4a53a5+=_0x14db20/0x2;if(_0x14db20<0x0)_0x2826f1-=_0x14db20;Window_StatusBase['prototype'][_0x35e819(0x32d)][_0x35e819(0x2e2)](this,_0x484b52,_0x4a53a5,_0x448a43,_0x2826f1,_0x52a4ac);},Window_EquipStatus[_0x26c4e1(0x306)][_0x26c4e1(0x2cf)]=function(){const _0x4cc41d=_0x26c4e1;return Imported[_0x4cc41d(0x46f)]?VisuMZ[_0x4cc41d(0x294)]['Settings'][_0x4cc41d(0x5e0)][_0x4cc41d(0x5f0)]:[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7];},Window_EquipStatus[_0x26c4e1(0x306)][_0x26c4e1(0x46c)]=function(){const _0x4e0b2b=_0x26c4e1;return VisuMZ[_0x4e0b2b(0x582)][_0x4e0b2b(0x3d7)]['EquipScene']['ParamValueFontSize'];},Window_EquipStatus['prototype'][_0x26c4e1(0x457)]=function(){const _0x410706=_0x26c4e1;return Imported[_0x410706(0x46f)]&&VisuMZ['CoreEngine'][_0x410706(0x3d7)][_0x410706(0x5e0)][_0x410706(0x50c)];},Window_EquipStatus[_0x26c4e1(0x306)][_0x26c4e1(0x27c)]=function(_0x214239,_0x585cf2,_0x3c7177,_0x4fa501){const _0x6784d=_0x26c4e1,_0x36c3a2=this[_0x6784d(0x284)]();if(Imported[_0x6784d(0x46f)])this[_0x6784d(0x4af)](_0x585cf2+_0x36c3a2,_0x3c7177,_0x4fa501,_0x214239,![]);else{if(_0x6784d(0x2a0)==='anbmt'){if(!_0x4d0a73[_0x6784d(0x5cc)](_0x2f646b))return![];}else this[_0x6784d(0x392)](TextManager['param'](_0x214239),_0x585cf2+_0x36c3a2,_0x3c7177,_0x4fa501);}},Window_EquipStatus['prototype'][_0x26c4e1(0x31e)]=function(_0x3d0a46,_0x340b89,_0x244923,_0x213b57){const _0x39241b=_0x26c4e1,_0xd0916f=this['itemPadding']();let _0x66d0bb=0x0;Imported[_0x39241b(0x46f)]?_0x66d0bb=this[_0x39241b(0x5f9)][_0x39241b(0x219)](_0x3d0a46,!![]):_0x39241b(0x39a)!==_0x39241b(0x39a)?this[_0x39241b(0x3eb)](!![]):_0x66d0bb=this[_0x39241b(0x5f9)][_0x39241b(0x236)](_0x3d0a46);const _0x379c2c=_0x66d0bb;this['drawText'](_0x66d0bb,_0x340b89,_0x244923,_0x213b57-_0xd0916f,_0x39241b(0x38c));},Window_EquipStatus[_0x26c4e1(0x306)][_0x26c4e1(0x2f2)]=function(_0x1a47a5,_0x1f2a00,_0x37cb6e,_0x2da7fa){const _0x374220=_0x26c4e1,_0x1050d7=this[_0x374220(0x284)]();let _0x5f4d55=0x0,_0x307411=0x0,_0x50c81a='';if(this[_0x374220(0x5fe)]){Imported[_0x374220(0x46f)]?(_0x5f4d55=this[_0x374220(0x5f9)][_0x374220(0x219)](_0x1a47a5,![]),_0x307411=this['_tempActor'][_0x374220(0x219)](_0x1a47a5,![]),_0x50c81a=this[_0x374220(0x5fe)][_0x374220(0x219)](_0x1a47a5,!![])):(_0x5f4d55=this[_0x374220(0x5f9)][_0x374220(0x236)](_0x1a47a5),_0x307411=this['_tempActor'][_0x374220(0x236)](_0x1a47a5),_0x50c81a=this[_0x374220(0x5fe)][_0x374220(0x236)](_0x1a47a5));const _0x52035a=_0x5f4d55,_0x3bd22b=_0x307411;diffValue=_0x3bd22b-_0x52035a,this[_0x374220(0x597)](ColorManager[_0x374220(0x512)](diffValue)),this[_0x374220(0x392)](_0x50c81a,_0x1f2a00,_0x37cb6e,_0x2da7fa-_0x1050d7,_0x374220(0x38c));}},Window_EquipStatus['prototype'][_0x26c4e1(0x551)]=function(_0x42802b,_0x3875eb,_0x5e564e,_0x517e04){const _0x452a51=_0x26c4e1,_0x5e5209=this['itemPadding']();let _0x48e2a8=0x0,_0x172d90=0x0,_0x18b6c2=![];if(this['_tempActor']){if(_0x452a51(0x23f)===_0x452a51(0x415))return!![];else{Imported[_0x452a51(0x46f)]?(_0x48e2a8=this[_0x452a51(0x5f9)][_0x452a51(0x219)](_0x42802b,![]),_0x172d90=this['_tempActor'][_0x452a51(0x219)](_0x42802b,![]),_0x18b6c2=String(this[_0x452a51(0x5f9)]['paramValueByName'](_0x42802b,!![]))[_0x452a51(0x318)](/([%％])/i)):(_0x48e2a8=this[_0x452a51(0x5f9)][_0x452a51(0x236)](_0x42802b),_0x172d90=this[_0x452a51(0x5fe)][_0x452a51(0x236)](_0x42802b),_0x18b6c2=_0x48e2a8%0x1!==0x0||_0x172d90%0x1!==0x0);const _0x41cf88=_0x48e2a8,_0x33f0d9=_0x172d90,_0x4608cf=_0x33f0d9-_0x41cf88;let _0x5bb98e=_0x4608cf;if(_0x18b6c2)_0x5bb98e=Math[_0x452a51(0x371)](_0x4608cf*0x64)+'%';if(_0x4608cf!==0x0){if(_0x452a51(0x502)!==_0x452a51(0x502)){if(!this[_0x452a51(0x397)]())return;const _0x236de4=this[_0x452a51(0x235)](),_0x2b35bf=_0x2b7270[_0x452a51(0x582)][_0x452a51(0x3d7)][_0x452a51(0x30c)][_0x452a51(0x269)],_0x40a53c=_0x236de4===_0x452a51(0x20f)?_0x35322c[_0x452a51(0x4e4)]:'\x5cI[%1]%2'[_0x452a51(0x272)](_0x2b35bf,_0x5a40c4[_0x452a51(0x4e4)]),_0xff3e7f=this['isClearCommandEnabled']();this[_0x452a51(0x281)](_0x40a53c,_0x452a51(0x4e4),_0xff3e7f);}else this[_0x452a51(0x597)](ColorManager[_0x452a51(0x512)](_0x4608cf)),_0x5bb98e=(_0x4608cf>0x0?_0x452a51(0x399):_0x452a51(0x2c4))['format'](_0x5bb98e),this[_0x452a51(0x392)](_0x5bb98e,_0x3875eb+_0x5e5209,_0x5e564e,_0x517e04,_0x452a51(0x249));}}}},Window_EquipStatus[_0x26c4e1(0x306)][_0x26c4e1(0x43c)]=function(_0x568f03,_0x5a9fba,_0x121d70,_0xf92999,_0x408549){const _0x172526=_0x26c4e1;if(VisuMZ[_0x172526(0x582)][_0x172526(0x3d7)][_0x172526(0x30c)][_0x172526(0x56f)]===![])return;_0x408549=Math[_0x172526(0x1e6)](_0x408549||0x1,0x1);while(_0x408549--){if('sQnEV'!==_0x172526(0x3fb)){_0xf92999=_0xf92999||this['lineHeight'](),this[_0x172526(0x3ab)][_0x172526(0x5af)]=0xa0;const _0x34b840=ColorManager[_0x172526(0x216)]();this[_0x172526(0x3ab)][_0x172526(0x2ca)](_0x568f03+0x1,_0x5a9fba+0x1,_0x121d70-0x2,_0xf92999-0x2,_0x34b840),this[_0x172526(0x3ab)][_0x172526(0x5af)]=0xff;}else{_0x27191e[_0x172526(0x582)][_0x172526(0x39e)][_0x172526(0x2e2)](this,_0x5320f1);if(_0x610743<=0x0)return;const _0x6b342d=_0x541d9e[_0x172526(0x582)][_0x172526(0x3d7)]['ShopScene'];_0x6b342d[_0x172526(0x5b3)]&&_0x326d72[_0x172526(0x45d)](_0x6b342d[_0x172526(0x3e0)],!![]);}}},ColorManager[_0x26c4e1(0x216)]=function(){const _0x249d94=_0x26c4e1,_0x2d6ffd=VisuMZ[_0x249d94(0x582)][_0x249d94(0x3d7)][_0x249d94(0x30c)];let _0x116e2c=_0x2d6ffd[_0x249d94(0x33f)]!==undefined?_0x2d6ffd[_0x249d94(0x33f)]:0x13;return ColorManager[_0x249d94(0x2ee)](_0x116e2c);},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x478)]=Window_EquipCommand[_0x26c4e1(0x306)]['initialize'],Window_EquipCommand[_0x26c4e1(0x306)][_0x26c4e1(0x358)]=function(_0x432514){const _0x32164d=_0x26c4e1;VisuMZ[_0x32164d(0x582)][_0x32164d(0x478)][_0x32164d(0x2e2)](this,_0x432514),this[_0x32164d(0x31b)](_0x432514);},Window_EquipCommand[_0x26c4e1(0x306)]['createCommandNameWindow']=function(_0x4a1d04){const _0x388d4b=_0x26c4e1,_0x4ba018=new Rectangle(0x0,0x0,_0x4a1d04[_0x388d4b(0x22c)],_0x4a1d04[_0x388d4b(0x27e)]);this[_0x388d4b(0x22d)]=new Window_Base(_0x4ba018),this[_0x388d4b(0x22d)][_0x388d4b(0x44c)]=0x0,this[_0x388d4b(0x516)](this['_commandNameWindow']),this[_0x388d4b(0x22e)]();},Window_EquipCommand['prototype'][_0x26c4e1(0x4c0)]=function(){const _0x45135a=_0x26c4e1;Window_HorzCommand[_0x45135a(0x306)]['callUpdateHelp'][_0x45135a(0x2e2)](this);if(this[_0x45135a(0x22d)])this[_0x45135a(0x22e)]();},Window_EquipCommand['prototype']['updateCommandNameWindow']=function(){const _0x3d1706=_0x26c4e1,_0x59c63b=this[_0x3d1706(0x22d)];_0x59c63b[_0x3d1706(0x3ab)]['clear']();const _0x5bf88f=this[_0x3d1706(0x49b)](this[_0x3d1706(0x26a)]());if(_0x5bf88f===_0x3d1706(0x3a7)){if(_0x3d1706(0x44e)===_0x3d1706(0x44e)){const _0x4d8fcd=this[_0x3d1706(0x348)](this[_0x3d1706(0x26a)]());let _0x32b6c5=this[_0x3d1706(0x2a5)](this[_0x3d1706(0x26a)]());_0x32b6c5=_0x32b6c5[_0x3d1706(0x44b)](/\\I\[(\d+)\]/gi,''),_0x59c63b[_0x3d1706(0x277)](),this[_0x3d1706(0x1f0)](_0x32b6c5,_0x4d8fcd),this['commandNameWindowDrawText'](_0x32b6c5,_0x4d8fcd),this[_0x3d1706(0x356)](_0x32b6c5,_0x4d8fcd);}else{_0x5e80c6+='\x5cI[%1]'['format'](_0x20a930['iconIndex']),_0x13ff1f++;if(_0x29dfe7>=_0x23f292)return _0x45cab7;}}},Window_EquipCommand[_0x26c4e1(0x306)][_0x26c4e1(0x1f0)]=function(_0x2d21c0,_0x4c5e0d){},Window_EquipCommand['prototype'][_0x26c4e1(0x53d)]=function(_0x4d33c9,_0x3c92b9){const _0x443728=_0x26c4e1,_0x4c3d63=this[_0x443728(0x22d)];_0x4c3d63[_0x443728(0x392)](_0x4d33c9,0x0,_0x3c92b9['y'],_0x4c3d63[_0x443728(0x453)],'center');},Window_EquipCommand[_0x26c4e1(0x306)][_0x26c4e1(0x356)]=function(_0x4ba8d7,_0x59f3f6){const _0x46437b=_0x26c4e1,_0x2fb766=this[_0x46437b(0x22d)],_0x496653=$gameSystem[_0x46437b(0x2de)](),_0x2f6186=_0x59f3f6['x']+Math[_0x46437b(0x5b8)](_0x59f3f6[_0x46437b(0x22c)]/0x2)+_0x496653;_0x2fb766['x']=_0x2fb766[_0x46437b(0x22c)]/-0x2+_0x2f6186,_0x2fb766['y']=Math[_0x46437b(0x5b8)](_0x59f3f6[_0x46437b(0x27e)]/0x2);},Window_EquipCommand[_0x26c4e1(0x306)][_0x26c4e1(0x375)]=function(){const _0xbbfdfc=_0x26c4e1;return Imported['VisuMZ_0_CoreEngine']&&Window_HorzCommand[_0xbbfdfc(0x306)][_0xbbfdfc(0x375)][_0xbbfdfc(0x2e2)](this);},Window_EquipCommand['prototype'][_0x26c4e1(0x42a)]=function(){const _0x41e0b7=_0x26c4e1;if(this['currentSymbol']()===_0x41e0b7(0x389))Window_HorzCommand['prototype']['playOkSound']['call'](this);},Window_EquipCommand['prototype'][_0x26c4e1(0x41e)]=function(){const _0x3b975d=_0x26c4e1;!this[_0x3b975d(0x382)]()&&Window_HorzCommand[_0x3b975d(0x306)]['processCursorMoveModernControls'][_0x3b975d(0x2e2)](this);},Window_EquipCommand[_0x26c4e1(0x306)][_0x26c4e1(0x382)]=function(){const _0x100c82=_0x26c4e1;if(!this[_0x100c82(0x41a)]())return![];if(SceneManager[_0x100c82(0x419)][_0x100c82(0x5c2)]!==Scene_Equip)return![];return Input['isTriggered'](_0x100c82(0x553))&&(this[_0x100c82(0x541)](),SceneManager[_0x100c82(0x419)][_0x100c82(0x414)](),SceneManager[_0x100c82(0x419)]['_slotWindow'][_0x100c82(0x283)](-0x1)),![];},Window_EquipCommand['prototype'][_0x26c4e1(0x287)]=function(){const _0x4ac074=_0x26c4e1;return this[_0x4ac074(0x426)]?this[_0x4ac074(0x426)][_0x4ac074(0x5fc)]:0x3;},Window_EquipCommand[_0x26c4e1(0x306)]['processTouchModernControls']=function(){const _0xd57e7d=_0x26c4e1;if(this['isOpen']()&&this['visible']&&SceneManager[_0xd57e7d(0x419)][_0xd57e7d(0x5c2)]===Scene_Equip){if('xCHoq'===_0xd57e7d(0x4a3)){if(this[_0xd57e7d(0x365)]()&&TouchInput[_0xd57e7d(0x2d6)]())this[_0xd57e7d(0x5eb)](![]);else TouchInput[_0xd57e7d(0x3b9)]()&&this['onTouchSelectModernControls'](!![]);if(TouchInput[_0xd57e7d(0x363)]()){if('JjqZj'==='epfhT')return _0x2a102f[_0xd57e7d(0x582)][_0xd57e7d(0x3d7)][_0xd57e7d(0x501)][_0xd57e7d(0x3bf)];else this[_0xd57e7d(0x562)]();}}else this[_0xd57e7d(0x2e5)][_0xd57e7d(0x3ff)](),this[_0xd57e7d(0x5a5)][_0xd57e7d(0x3ff)]();}},Window_EquipCommand[_0x26c4e1(0x306)][_0x26c4e1(0x5eb)]=function(_0x295f18){const _0x2eb3e2=_0x26c4e1;this[_0x2eb3e2(0x244)]=![];const _0x2a1dfd=this[_0x2eb3e2(0x26a)](),_0x4395d2=this[_0x2eb3e2(0x5ff)](),_0x3dc05f=SceneManager[_0x2eb3e2(0x419)]['_slotWindow'];if(_0x3dc05f[_0x2eb3e2(0x2e3)]()&&_0x3dc05f['visible']){if(_0x4395d2>=0x0)_0x4395d2===this[_0x2eb3e2(0x26a)]()&&(this['_doubleTouch']=!![]),this[_0x2eb3e2(0x27a)](),this[_0x2eb3e2(0x5e9)](_0x4395d2);else{if(_0x3dc05f[_0x2eb3e2(0x5ff)]()>=0x0){if(_0x2eb3e2(0x2a3)===_0x2eb3e2(0x4c7)){this['commandName'](_0xf6b353)[_0x2eb3e2(0x318)](/\\I\[(\d+)\]/i);const _0x1e43cb=_0x4e614b(_0x123568['$1'])||0x0,_0xb215b5=this[_0x2eb3e2(0x348)](_0x5f5c20),_0x525df6=_0xb215b5['x']+_0x1a2652[_0x2eb3e2(0x5b8)]((_0xb215b5[_0x2eb3e2(0x22c)]-_0x40788e[_0x2eb3e2(0x1f8)])/0x2),_0x4c6d37=_0xb215b5['y']+(_0xb215b5[_0x2eb3e2(0x27e)]-_0xeadfb1[_0x2eb3e2(0x48f)])/0x2;this['drawIcon'](_0x1e43cb,_0x525df6,_0x4c6d37);}else this[_0x2eb3e2(0x3fc)](),this[_0x2eb3e2(0x435)]();}}}if(_0x295f18&&this['index']()!==_0x2a1dfd){if(_0x2eb3e2(0x304)!=='Phncw'){if(this[_0x2eb3e2(0x1dc)]())return this[_0x2eb3e2(0x5a7)][_0x2eb3e2(0x22c)]/0x5/-0x3;return _0x5a00c5['prototype'][_0x2eb3e2(0x32c)][_0x2eb3e2(0x2e2)](this);}else this['playCursorSound']();}},Window_EquipCommand['prototype'][_0x26c4e1(0x5e2)]=function(){const _0x303140=_0x26c4e1;this['addEquipCommand'](),this[_0x303140(0x583)](),this[_0x303140(0x59e)]();},Window_EquipCommand[_0x26c4e1(0x306)][_0x26c4e1(0x49a)]=function(){const _0x4905a1=_0x26c4e1;Window_HorzCommand[_0x4905a1(0x306)][_0x4905a1(0x49a)][_0x4905a1(0x2e2)](this),this['refreshCursor']();},Window_EquipCommand[_0x26c4e1(0x306)][_0x26c4e1(0x53e)]=function(){const _0x4e7cce=_0x26c4e1;if(!this[_0x4e7cce(0x494)]())return;const _0x56941d=this[_0x4e7cce(0x235)](),_0x1b66ea=VisuMZ[_0x4e7cce(0x582)][_0x4e7cce(0x3d7)]['EquipScene']['CmdIconEquip'],_0x3fc684=_0x56941d===_0x4e7cce(0x20f)?TextManager[_0x4e7cce(0x460)]:_0x4e7cce(0x462)[_0x4e7cce(0x272)](_0x1b66ea,TextManager[_0x4e7cce(0x460)]),_0x51c69b=this['isEquipCommandEnabled']();this[_0x4e7cce(0x281)](_0x3fc684,_0x4e7cce(0x389),_0x51c69b);},Window_EquipCommand[_0x26c4e1(0x306)][_0x26c4e1(0x494)]=function(){const _0x9ec590=_0x26c4e1;return!this[_0x9ec590(0x375)]();},Window_EquipCommand[_0x26c4e1(0x306)][_0x26c4e1(0x3f0)]=function(){return!![];},Window_EquipCommand[_0x26c4e1(0x306)]['addOptimizeCommand']=function(){const _0x361689=_0x26c4e1;if(!this[_0x361689(0x464)]())return;const _0xe57889=this[_0x361689(0x235)](),_0x20d92d=VisuMZ[_0x361689(0x582)][_0x361689(0x3d7)][_0x361689(0x30c)][_0x361689(0x4ab)],_0x1b7266=_0xe57889===_0x361689(0x20f)?TextManager['optimize']:'\x5cI[%1]%2'[_0x361689(0x272)](_0x20d92d,TextManager['optimize']),_0x333d21=this['isOptimizeCommandEnabled']();this[_0x361689(0x281)](_0x1b7266,_0x361689(0x2c3),_0x333d21);},Window_EquipCommand[_0x26c4e1(0x306)][_0x26c4e1(0x464)]=function(){const _0x63bb2=_0x26c4e1;return VisuMZ[_0x63bb2(0x582)][_0x63bb2(0x3d7)][_0x63bb2(0x30c)]['CommandAddOptimize'];},Window_EquipCommand[_0x26c4e1(0x306)][_0x26c4e1(0x2e9)]=function(){return!![];},Window_EquipCommand[_0x26c4e1(0x306)][_0x26c4e1(0x59e)]=function(){const _0x15f1ce=_0x26c4e1;if(!this[_0x15f1ce(0x397)]())return;const _0x44d43e=this[_0x15f1ce(0x235)](),_0x189e2f=VisuMZ[_0x15f1ce(0x582)][_0x15f1ce(0x3d7)]['EquipScene']['CmdIconClear'],_0x24f8fd=_0x44d43e===_0x15f1ce(0x20f)?TextManager[_0x15f1ce(0x4e4)]:'\x5cI[%1]%2'[_0x15f1ce(0x272)](_0x189e2f,TextManager['clear']),_0x45510d=this['isClearCommandEnabled']();this[_0x15f1ce(0x281)](_0x24f8fd,_0x15f1ce(0x4e4),_0x45510d);},Window_EquipCommand[_0x26c4e1(0x306)][_0x26c4e1(0x397)]=function(){const _0x51b760=_0x26c4e1;return VisuMZ['ItemsEquipsCore'][_0x51b760(0x3d7)][_0x51b760(0x30c)][_0x51b760(0x262)];},Window_EquipCommand[_0x26c4e1(0x306)]['isClearCommandEnabled']=function(){return!![];},Window_EquipCommand[_0x26c4e1(0x306)]['itemTextAlign']=function(){const _0x4ed37e=_0x26c4e1;return VisuMZ[_0x4ed37e(0x582)]['Settings']['EquipScene'][_0x4ed37e(0x1fe)];},Window_EquipCommand[_0x26c4e1(0x306)]['drawItem']=function(_0x76aec4){const _0x21584d=_0x26c4e1,_0x54d531=this[_0x21584d(0x49b)](_0x76aec4);if(_0x54d531===_0x21584d(0x523)){if(_0x21584d(0x313)===_0x21584d(0x5ad))return![];else this[_0x21584d(0x3ea)](_0x76aec4);}else _0x54d531===_0x21584d(0x3a7)?this[_0x21584d(0x322)](_0x76aec4):Window_HorzCommand[_0x21584d(0x306)][_0x21584d(0x628)]['call'](this,_0x76aec4);},Window_EquipCommand[_0x26c4e1(0x306)][_0x26c4e1(0x235)]=function(){const _0x166b82=_0x26c4e1;return VisuMZ[_0x166b82(0x582)][_0x166b82(0x3d7)]['EquipScene'][_0x166b82(0x480)];},Window_EquipCommand[_0x26c4e1(0x306)]['commandStyleCheck']=function(_0x2d91cb){const _0x2006a5=_0x26c4e1;if(_0x2d91cb<0x0)return _0x2006a5(0x20f);const _0x5796c9=this[_0x2006a5(0x235)]();if(_0x5796c9!==_0x2006a5(0x3b1))return _0x2006a5(0x3f9)==='rVrHh'?_0x5796c9:_0x37584d[_0x2006a5(0x582)]['Settings']['StatusWindow'][_0x2006a5(0x301)];else{if(this['maxItems']()>0x0){const _0x94807d=this[_0x2006a5(0x2a5)](_0x2d91cb);if(_0x94807d[_0x2006a5(0x318)](/\\I\[(\d+)\]/i)){if(_0x2006a5(0x61e)!==_0x2006a5(0x4b5)){const _0x25785d=this[_0x2006a5(0x348)](_0x2d91cb),_0x41c5e2=this[_0x2006a5(0x35c)](_0x94807d)[_0x2006a5(0x22c)];if(_0x41c5e2<=_0x25785d['width']){if('Nscxh'===_0x2006a5(0x56c))_0x45be29=_0x4e0ad1(_0x4b8c8c['$1']);else return _0x2006a5(0x523);}else return _0x2006a5(0x3a7);}else this[_0x2006a5(0x31a)]();}}}return _0x2006a5(0x20f);},Window_EquipCommand[_0x26c4e1(0x306)][_0x26c4e1(0x3ea)]=function(_0x9a241e){const _0x302346=_0x26c4e1,_0x473c84=this[_0x302346(0x348)](_0x9a241e),_0x2736a0=this[_0x302346(0x2a5)](_0x9a241e),_0x19ed3c=this[_0x302346(0x35c)](_0x2736a0)['width'];this['changePaintOpacity'](this[_0x302346(0x33a)](_0x9a241e));const _0x3b89d0=this['itemTextAlign']();if(_0x3b89d0===_0x302346(0x38c)){if(_0x302346(0x56a)===_0x302346(0x56a))this[_0x302346(0x5bf)](_0x2736a0,_0x473c84['x']+_0x473c84[_0x302346(0x22c)]-_0x19ed3c,_0x473c84['y'],_0x19ed3c);else{const _0x97c4ab=this[_0x302346(0x362)](_0x1e626b);if(_0x97c4ab<0x0)return;const _0x1b8bf1=_0x3a3015===0x1?_0xa3e04b[_0x2995dd]:_0x55f7a5[_0x4513b9];this[_0x302346(0x3a1)](_0x97c4ab,_0x1b8bf1);}}else{if(_0x3b89d0===_0x302346(0x312)){const _0xc7cad2=_0x473c84['x']+Math[_0x302346(0x5b8)]((_0x473c84[_0x302346(0x22c)]-_0x19ed3c)/0x2);this[_0x302346(0x5bf)](_0x2736a0,_0xc7cad2,_0x473c84['y'],_0x19ed3c);}else'AEhPL'===_0x302346(0x4a9)?this[_0x302346(0x5bf)](_0x2736a0,_0x473c84['x'],_0x473c84['y'],_0x19ed3c):(this[_0x302346(0x3fc)](),this[_0x302346(0x435)]());}},Window_EquipCommand[_0x26c4e1(0x306)][_0x26c4e1(0x322)]=function(_0xc976e9){const _0x3841c0=_0x26c4e1;this[_0x3841c0(0x2a5)](_0xc976e9)['match'](/\\I\[(\d+)\]/i);const _0x4cb382=Number(RegExp['$1'])||0x0,_0x98370e=this[_0x3841c0(0x348)](_0xc976e9),_0x5e4f21=_0x98370e['x']+Math['floor']((_0x98370e[_0x3841c0(0x22c)]-ImageManager['iconWidth'])/0x2),_0x2d2cc2=_0x98370e['y']+(_0x98370e[_0x3841c0(0x27e)]-ImageManager['iconHeight'])/0x2;this['drawIcon'](_0x4cb382,_0x5e4f21,_0x2d2cc2);},Window_EquipSlot[_0x26c4e1(0x306)][_0x26c4e1(0x375)]=function(){const _0x33caa7=_0x26c4e1;return Imported[_0x33caa7(0x46f)]&&Window_HorzCommand[_0x33caa7(0x306)][_0x33caa7(0x375)]['call'](this);},Window_EquipSlot[_0x26c4e1(0x306)][_0x26c4e1(0x27a)]=function(){const _0x2f70e8=_0x26c4e1;Window_StatusBase[_0x2f70e8(0x306)][_0x2f70e8(0x27a)][_0x2f70e8(0x2e2)](this),this[_0x2f70e8(0x4c0)]();},Window_EquipSlot[_0x26c4e1(0x306)][_0x26c4e1(0x4ff)]=function(){const _0x4f139f=_0x26c4e1;Window_StatusBase[_0x4f139f(0x306)][_0x4f139f(0x4ff)]['call'](this),this[_0x4f139f(0x29e)]();},Window_EquipSlot['prototype'][_0x26c4e1(0x29e)]=function(){const _0x490bb6=_0x26c4e1;if(!this[_0x490bb6(0x5c6)]())return;if(Input['isTriggered']('shift')&&this[_0x490bb6(0x50a)]()){if('OwUZc'===_0x490bb6(0x5a1)){const _0x3f084a=SceneManager[_0x490bb6(0x419)][_0x490bb6(0x5f9)];if(_0x3f084a){if(this[_0x490bb6(0x229)](this['index']()))this[_0x490bb6(0x536)](),this[_0x490bb6(0x4aa)]();else{if(_0x490bb6(0x59b)===_0x490bb6(0x3cf))return this[_0x490bb6(0x454)](_0xa459(_0x4b0df9['$1'])[_0x490bb6(0x2bb)](0x0,0x1f));else this[_0x490bb6(0x589)]();}}}else{if(this[_0x490bb6(0x1dc)]())return _0x232903[_0x490bb6(0x3ac)](_0x490bb6(0x3b4));return _0x2a9b4f[_0x490bb6(0x306)][_0x490bb6(0x61d)][_0x490bb6(0x2e2)](this);}}},Window_EquipSlot['prototype'][_0x26c4e1(0x229)]=function(_0x26c2ca){const _0x1b1885=_0x26c4e1,_0x3b5ea8=SceneManager[_0x1b1885(0x419)][_0x1b1885(0x5f9)];if(!_0x3b5ea8)return;if(!_0x3b5ea8['isEquipChangeOk'](this[_0x1b1885(0x26a)]())){if('TeEQN'===_0x1b1885(0x57f))this['cursorUp'](_0x4e8d92[_0x1b1885(0x3b9)]('up'));else return![];}const _0x3bf109=_0x3b5ea8[_0x1b1885(0x1fc)]()[this['index']()];if(_0x3b5ea8[_0x1b1885(0x485)]()[_0x1b1885(0x3b2)](_0x3bf109))return![];return!![];;},Window_EquipSlot[_0x26c4e1(0x306)][_0x26c4e1(0x536)]=function(){const _0x1f247a=_0x26c4e1;SoundManager[_0x1f247a(0x36a)]();const _0x5ca27d=SceneManager[_0x1f247a(0x419)][_0x1f247a(0x5f9)];_0x5ca27d[_0x1f247a(0x3a1)](this['index'](),null),this[_0x1f247a(0x49a)](),this[_0x1f247a(0x3bd)][_0x1f247a(0x49a)](),this['callUpdateHelp']();const _0x4ac769=SceneManager[_0x1f247a(0x419)][_0x1f247a(0x3aa)];if(_0x4ac769)_0x4ac769[_0x1f247a(0x49a)]();},Window_EquipSlot[_0x26c4e1(0x306)]['isShiftRemoveShortcutEnabled']=function(){const _0x567056=_0x26c4e1;if(!this['active'])return![];if(!VisuMZ[_0x567056(0x582)][_0x567056(0x3d7)][_0x567056(0x30c)][_0x567056(0x534)])return![];return!![];},Window_EquipSlot[_0x26c4e1(0x306)][_0x26c4e1(0x41e)]=function(){const _0x3ca495=_0x26c4e1;!this[_0x3ca495(0x382)]()&&Window_StatusBase['prototype'][_0x3ca495(0x41e)][_0x3ca495(0x2e2)](this);},Window_EquipSlot[_0x26c4e1(0x306)][_0x26c4e1(0x382)]=function(){const _0x2e7dc9=_0x26c4e1;if(!this[_0x2e7dc9(0x41a)]())return![];if(SceneManager['_scene'][_0x2e7dc9(0x5c2)]!==Scene_Equip)return![];if(this[_0x2e7dc9(0x496)]())return this['playCursorSound'](),Input[_0x2e7dc9(0x4e4)](),SceneManager[_0x2e7dc9(0x419)][_0x2e7dc9(0x1d9)](),![];else{if(Input['isRepeated'](_0x2e7dc9(0x553))){const _0x8f20b0=this[_0x2e7dc9(0x26a)]();return Input[_0x2e7dc9(0x403)](_0x2e7dc9(0x3b4))?this[_0x2e7dc9(0x45c)]():this['cursorDown'](Input[_0x2e7dc9(0x3b9)](_0x2e7dc9(0x553))),this[_0x2e7dc9(0x26a)]()!==_0x8f20b0&&this[_0x2e7dc9(0x541)](),!![];}else{if(this[_0x2e7dc9(0x270)]()&&Input['isTriggered']('shift'))return!![];}}return![];},Window_EquipSlot['prototype'][_0x26c4e1(0x496)]=function(){const _0x313bdd=_0x26c4e1;if(this['index']()!==0x0)return![];const _0x30765b=VisuMZ[_0x313bdd(0x582)][_0x313bdd(0x3d7)][_0x313bdd(0x30c)];if(!_0x30765b[_0x313bdd(0x5e7)]&&!_0x30765b['CommandAddClear'])return![];return Input[_0x313bdd(0x3b9)]('up');},Window_EquipSlot['prototype'][_0x26c4e1(0x270)]=function(){const _0x160fd8=_0x26c4e1;return VisuMZ[_0x160fd8(0x582)]['Settings'][_0x160fd8(0x30c)][_0x160fd8(0x534)];},Window_EquipSlot['prototype'][_0x26c4e1(0x4ec)]=function(){const _0x506258=_0x26c4e1;if(this[_0x506258(0x2e3)]()&&this[_0x506258(0x1d7)]&&SceneManager[_0x506258(0x419)][_0x506258(0x5c2)]===Scene_Equip){if(_0x506258(0x26c)===_0x506258(0x31f))return _0x4c18b8[_0x506258(0x582)][_0x506258(0x3d7)][_0x506258(0x411)][_0x506258(0x605)];else{if(this[_0x506258(0x365)]()&&TouchInput[_0x506258(0x2d6)]())this[_0x506258(0x5eb)](![]);else TouchInput[_0x506258(0x3b9)]()&&this[_0x506258(0x5eb)](!![]);if(TouchInput[_0x506258(0x363)]())_0x506258(0x2ab)===_0x506258(0x2ab)?this['onTouchOk']():(this[_0x506258(0x574)]=_0x3af2a2,this[_0x506258(0x49a)](),this[_0x506258(0x547)]&&this[_0x506258(0x547)]['isUseModernControls']()?this['smoothSelect'](0x0):this[_0x506258(0x297)](0x0,0x0));else TouchInput[_0x506258(0x570)]()&&('hnJqO'==='kGwSw'?this[_0x506258(0x255)]():this[_0x506258(0x22a)]());}}},Window_EquipSlot[_0x26c4e1(0x306)][_0x26c4e1(0x5eb)]=function(_0x54e3a6){const _0x41f072=_0x26c4e1;this['_doubleTouch']=![];const _0x31f036=this[_0x41f072(0x26a)](),_0x181037=this[_0x41f072(0x5ff)](),_0x56ed29=SceneManager[_0x41f072(0x419)][_0x41f072(0x5a5)];if(_0x56ed29['isOpen']()&&_0x56ed29[_0x41f072(0x1d7)]){if('nJSOb'===_0x41f072(0x4cf))return _0x477319[_0x21318a];else{if(_0x181037>=0x0)_0x181037===this[_0x41f072(0x26a)]()&&(this[_0x41f072(0x244)]=!![]),this[_0x41f072(0x27a)](),this[_0x41f072(0x5e9)](_0x181037);else _0x56ed29[_0x41f072(0x5ff)]()>=0x0&&('JrFEo'===_0x41f072(0x3b6)?(this['deactivate'](),this[_0x41f072(0x435)]()):_0x10d199=_0x41f072(0x581)['format'](_0xc49270['id']));}}_0x54e3a6&&this[_0x41f072(0x26a)]()!==_0x31f036&&this['playCursorSound']();},Window_EquipSlot[_0x26c4e1(0x306)]['equipSlotIndex']=function(){const _0x4a262e=_0x26c4e1;return this[_0x4a262e(0x26a)]();},VisuMZ['ItemsEquipsCore'][_0x26c4e1(0x447)]=Window_EquipItem[_0x26c4e1(0x306)]['includes'],Window_EquipItem[_0x26c4e1(0x306)][_0x26c4e1(0x3b2)]=function(_0x2962a3){const _0x107d6b=_0x26c4e1;return _0x2962a3===null&&this[_0x107d6b(0x485)]()[_0x107d6b(0x3b2)](this[_0x107d6b(0x2f8)]())?![]:VisuMZ[_0x107d6b(0x582)][_0x107d6b(0x447)][_0x107d6b(0x2e2)](this,_0x2962a3);},VisuMZ[_0x26c4e1(0x582)]['Window_EquipItem_isEnabled']=Window_EquipItem['prototype'][_0x26c4e1(0x3ec)],Window_EquipItem['prototype'][_0x26c4e1(0x3ec)]=function(_0xcdc0e5){const _0x72250a=_0x26c4e1;if(_0xcdc0e5&&this['_actor']){if(this[_0x72250a(0x315)](_0xcdc0e5))return![];if(this[_0x72250a(0x620)](_0xcdc0e5))return![];if(this[_0x72250a(0x37c)](_0xcdc0e5))return![];}if(!_0xcdc0e5){if(_0x72250a(0x3fd)!=='rLAfw')return!this[_0x72250a(0x485)]()[_0x72250a(0x3b2)](this[_0x72250a(0x2f8)]());else{const _0x1d7168=_0x14df9e['max'](_0xdea7bb(_0x4986f9),0x0)/_0x2ac344['a'][_0x72250a(0x2f4)];return this[_0x72250a(0x452)](),_0x3bae55(_0x1d7168)?'?????':_0x72250a(0x2bc)[_0x72250a(0x272)](_0x355633[_0x72250a(0x371)](_0x1d7168*0x64));}}return VisuMZ[_0x72250a(0x582)][_0x72250a(0x5b7)][_0x72250a(0x2e2)](this,_0xcdc0e5);},Window_EquipItem[_0x26c4e1(0x306)][_0x26c4e1(0x315)]=function(_0x1114e2){const _0x10d331=_0x26c4e1,_0x1ceb3a=_0x1114e2[_0x10d331(0x291)];if(_0x1ceb3a[_0x10d331(0x318)](/<EQUIP COPY LIMIT:[ ](\d+)>/i)){if(_0x10d331(0x477)===_0x10d331(0x477)){const _0xc4f2c8=Number(RegExp['$1'])||0x1;let _0x53e0ed=0x0;const _0x230f20=this[_0x10d331(0x5f9)]['equips'](),_0x3668d6=SceneManager[_0x10d331(0x419)][_0x10d331(0x513)][_0x10d331(0x2fc)]();_0x230f20[_0x3668d6]=null;for(const _0x5c465a of _0x230f20){if(_0x10d331(0x412)===_0x10d331(0x434)){if(this['_calculatingJSParameters'])return 0x0;const _0x3b78c3=(_0x172bc8[_0x10d331(0x1e4)](_0x275512)?_0x10d331(0x376):_0x10d331(0x388))['format'](_0x40f60f['id']),_0xcf0fe2=_0x10d331(0x268)[_0x10d331(0x272)](_0x3b78c3,_0xe9824);if(_0x41d71f[_0x10d331(0x582)][_0x10d331(0x26e)][_0xcf0fe2]){this[_0x10d331(0x228)]=!![];const _0x2a9555=_0x11b5d8['ItemsEquipsCore'][_0x10d331(0x26e)][_0xcf0fe2][_0x10d331(0x2e2)](this,_0x5466a0,_0x11ed17);return this['_calculatingJSParameters']=![],_0x2a9555;}else return 0x0;}else{if(!_0x5c465a)continue;if(DataManager[_0x10d331(0x1e4)](_0x1114e2)===DataManager[_0x10d331(0x1e4)](_0x5c465a)){if(_0x1114e2['id']===_0x5c465a['id'])_0x53e0ed+=0x1;}}}return _0x53e0ed>=_0xc4f2c8;}else{if(_0x1726ab>=0x0)_0x55f73e===this[_0x10d331(0x26a)]()&&(this[_0x10d331(0x244)]=!![]),this[_0x10d331(0x27a)](),this[_0x10d331(0x5e9)](_0x571b3d);else _0x42c8d3[_0x10d331(0x5ff)]()>=0x0&&(this['deactivate'](),this['deselect']());}}else return![];},Window_EquipItem[_0x26c4e1(0x306)][_0x26c4e1(0x620)]=function(_0x1db8e0){const _0x30c54a=_0x26c4e1;if(!DataManager['isWeapon'](_0x1db8e0))return![];const _0x3218e0=/<EQUIP WEAPON TYPE LIMIT:[ ](\d+)>/i;let _0x4e244b=0x0;const _0xac9462=this[_0x30c54a(0x5f9)][_0x30c54a(0x325)](),_0x153c29=SceneManager[_0x30c54a(0x419)][_0x30c54a(0x513)][_0x30c54a(0x2fc)]();_0xac9462[_0x153c29]=null;for(const _0x4c6748 of _0xac9462){if(!_0x4c6748)continue;if(!DataManager[_0x30c54a(0x1e4)](_0x4c6748))continue;if(_0x1db8e0['wtypeId']===_0x4c6748[_0x30c54a(0x5ee)]){_0x4e244b+=0x1;if(_0x1db8e0[_0x30c54a(0x291)][_0x30c54a(0x318)](_0x3218e0)){const _0x300d0b=Number(RegExp['$1'])||0x1;if(_0x4e244b>=_0x300d0b)return!![];}if(_0x4c6748[_0x30c54a(0x291)][_0x30c54a(0x318)](_0x3218e0)){const _0x239152=Number(RegExp['$1'])||0x1;if(_0x4e244b>=_0x239152)return!![];}}}return![];},Window_EquipItem[_0x26c4e1(0x306)][_0x26c4e1(0x37c)]=function(_0x329ed9){const _0x1fc234=_0x26c4e1;if(!DataManager[_0x1fc234(0x396)](_0x329ed9))return![];const _0x1cf6a8=/<EQUIP ARMOR TYPE LIMIT:[ ](\d+)>/i;let _0x45505f=0x0;const _0x19ff6f=this[_0x1fc234(0x5f9)]['equips'](),_0x57e1b0=SceneManager[_0x1fc234(0x419)]['_slotWindow']['equipSlotIndex']();_0x19ff6f[_0x57e1b0]=null;for(const _0xbaca11 of _0x19ff6f){if(_0x1fc234(0x200)===_0x1fc234(0x451)){const _0xd7026a=_0x45f956(_0x118e68['$1']);_0xd7026a<_0x2c589d?(_0x4bf065(_0x1fc234(0x600)[_0x1fc234(0x272)](_0x374ab9,_0xd7026a,_0x5af124)),_0x2fba69['exit']()):_0x3c5c86=_0x3c074f[_0x1fc234(0x1e6)](_0xd7026a,_0x4f2a13);}else{if(!_0xbaca11)continue;if(!DataManager[_0x1fc234(0x396)](_0xbaca11))continue;if(_0x329ed9['atypeId']===_0xbaca11['atypeId']){_0x45505f+=0x1;if(_0x329ed9[_0x1fc234(0x291)]['match'](_0x1cf6a8)){if('sfWPz'!==_0x1fc234(0x42e)){const _0x156082=Number(RegExp['$1'])||0x1;if(_0x45505f>=_0x156082)return!![];}else return this[_0x1fc234(0x4e2)]();}if(_0xbaca11[_0x1fc234(0x291)][_0x1fc234(0x318)](_0x1cf6a8)){const _0x85914b=Number(RegExp['$1'])||0x1;if(_0x45505f>=_0x85914b)return!![];}}}}return![];},Window_EquipItem[_0x26c4e1(0x306)]['nonRemovableEtypes']=function(){const _0x225de9=_0x26c4e1;return VisuMZ[_0x225de9(0x582)][_0x225de9(0x3d7)][_0x225de9(0x30c)]['NonRemoveETypes'];},Window_EquipItem[_0x26c4e1(0x306)]['drawItem']=function(_0xfbc87d){const _0x4f7b79=_0x26c4e1,_0x3f0100=this[_0x4f7b79(0x24b)](_0xfbc87d);if(_0x3f0100)_0x4f7b79(0x29c)!==_0x4f7b79(0x58a)?Window_ItemList[_0x4f7b79(0x306)][_0x4f7b79(0x628)][_0x4f7b79(0x2e2)](this,_0xfbc87d):(_0x578fed['isRepeated']('pagedown')&&!_0x44f0a0['isPressed'](_0x4f7b79(0x3b4))&&this[_0x4f7b79(0x4ad)](_0x5ebfea[_0x4f7b79(0x3b9)](_0x4f7b79(0x430))),_0x1675bd[_0x4f7b79(0x506)](_0x4f7b79(0x23e))&&!_0x57e05e[_0x4f7b79(0x403)]('shift')&&this['cursorLeft'](_0x3410de[_0x4f7b79(0x3b9)](_0x4f7b79(0x23e))));else{if(_0x4f7b79(0x310)!=='sTwRO')return _0x4c3ed7[_0x4f7b79(0x582)][_0x4f7b79(0x3d7)]['StatusWindow'][_0x4f7b79(0x1f6)];else this[_0x4f7b79(0x366)](_0xfbc87d);}},Window_EquipItem[_0x26c4e1(0x306)][_0x26c4e1(0x366)]=function(_0x59f0de){const _0xf6d811=_0x26c4e1;this[_0xf6d811(0x530)](this[_0xf6d811(0x3ec)](null));const _0xc87ee0=VisuMZ[_0xf6d811(0x582)]['Settings']['EquipScene'],_0x3dac94=this[_0xf6d811(0x348)](_0x59f0de),_0x18c677=_0x3dac94['y']+(this['lineHeight']()-ImageManager[_0xf6d811(0x48f)])/0x2,_0x47201f=ImageManager[_0xf6d811(0x1f8)]+0x4,_0x27d0b2=Math['max'](0x0,_0x3dac94[_0xf6d811(0x22c)]-_0x47201f);this['resetTextColor'](),this[_0xf6d811(0x2af)](_0xc87ee0[_0xf6d811(0x24f)],_0x3dac94['x'],_0x18c677),this[_0xf6d811(0x392)](_0xc87ee0['RemoveEquipText'],_0x3dac94['x']+_0x47201f,_0x3dac94['y'],_0x27d0b2),this[_0xf6d811(0x530)](!![]);},Window_EquipItem['prototype']['updateHelp']=function(){const _0x4fa0e9=_0x26c4e1;Window_ItemList[_0x4fa0e9(0x306)][_0x4fa0e9(0x4aa)][_0x4fa0e9(0x2e2)](this);if(this[_0x4fa0e9(0x5f9)]&&this[_0x4fa0e9(0x3aa)]&&this['_slotId']>=0x0){if(_0x4fa0e9(0x35d)===_0x4fa0e9(0x35d)){const _0x6e695b=JsonEx['makeDeepCopy'](this[_0x4fa0e9(0x5f9)]);_0x6e695b[_0x4fa0e9(0x5fe)]=!![],_0x6e695b[_0x4fa0e9(0x5a6)](this[_0x4fa0e9(0x44f)],this[_0x4fa0e9(0x50a)]()),this[_0x4fa0e9(0x3aa)][_0x4fa0e9(0x259)](_0x6e695b);}else{if(_0x61d8e0[_0x4fa0e9(0x3a9)]&&_0xb2c659[_0x4fa0e9(0x46a)]!==_0x7e429d)return _0x2a2bf6[_0x4fa0e9(0x46a)];else{if(this[_0x4fa0e9(0x1f7)]())return this['updatedLayoutStyle']()['match'](/LOWER/i);else _0x3c083b[_0x4fa0e9(0x306)][_0x4fa0e9(0x261)]['call'](this);}}}},VisuMZ['ItemsEquipsCore']['Window_ShopCommand_initialize']=Window_ShopCommand['prototype']['initialize'],Window_ShopCommand[_0x26c4e1(0x306)][_0x26c4e1(0x358)]=function(_0x4f6cc9){const _0x1ebcc4=_0x26c4e1;VisuMZ[_0x1ebcc4(0x582)][_0x1ebcc4(0x2d3)][_0x1ebcc4(0x2e2)](this,_0x4f6cc9),this[_0x1ebcc4(0x31b)](_0x4f6cc9);},Window_ShopCommand['prototype'][_0x26c4e1(0x31b)]=function(_0x396da0){const _0x18f375=_0x26c4e1,_0x627495=new Rectangle(0x0,0x0,_0x396da0[_0x18f375(0x22c)],_0x396da0['height']);this['_commandNameWindow']=new Window_Base(_0x627495),this['_commandNameWindow']['opacity']=0x0,this[_0x18f375(0x516)](this[_0x18f375(0x22d)]),this[_0x18f375(0x22e)]();},Window_ShopCommand[_0x26c4e1(0x306)]['callUpdateHelp']=function(){const _0x11938a=_0x26c4e1;Window_HorzCommand['prototype'][_0x11938a(0x4c0)][_0x11938a(0x2e2)](this);if(this[_0x11938a(0x22d)])this[_0x11938a(0x22e)]();},Window_ShopCommand[_0x26c4e1(0x306)][_0x26c4e1(0x22e)]=function(){const _0x2fa790=_0x26c4e1,_0x88a3d=this[_0x2fa790(0x22d)];_0x88a3d[_0x2fa790(0x3ab)][_0x2fa790(0x4e4)]();const _0x2ec013=this[_0x2fa790(0x49b)](this[_0x2fa790(0x26a)]());if(_0x2ec013==='icon'){const _0x199f7a=this[_0x2fa790(0x348)](this[_0x2fa790(0x26a)]());let _0x53a898=this[_0x2fa790(0x2a5)](this[_0x2fa790(0x26a)]());_0x53a898=_0x53a898['replace'](/\\I\[(\d+)\]/gi,''),_0x88a3d[_0x2fa790(0x277)](),this[_0x2fa790(0x1f0)](_0x53a898,_0x199f7a),this['commandNameWindowDrawText'](_0x53a898,_0x199f7a),this[_0x2fa790(0x356)](_0x53a898,_0x199f7a);}},Window_ShopCommand[_0x26c4e1(0x306)][_0x26c4e1(0x1f0)]=function(_0x3dfd60,_0x2a9506){},Window_ShopCommand['prototype'][_0x26c4e1(0x53d)]=function(_0x9d10bd,_0x4b09ad){const _0x21fd34=_0x26c4e1,_0x38bfdc=this[_0x21fd34(0x22d)];_0x38bfdc[_0x21fd34(0x392)](_0x9d10bd,0x0,_0x4b09ad['y'],_0x38bfdc[_0x21fd34(0x453)],_0x21fd34(0x312));},Window_ShopCommand[_0x26c4e1(0x306)][_0x26c4e1(0x356)]=function(_0x35d6be,_0x2a8de9){const _0x549741=_0x26c4e1,_0x2b0959=this['_commandNameWindow'],_0x59680b=$gameSystem[_0x549741(0x2de)](),_0x59e60b=_0x2a8de9['x']+Math[_0x549741(0x5b8)](_0x2a8de9['width']/0x2)+_0x59680b;_0x2b0959['x']=_0x2b0959[_0x549741(0x22c)]/-0x2+_0x59e60b,_0x2b0959['y']=Math[_0x549741(0x5b8)](_0x2a8de9[_0x549741(0x27e)]/0x2);},Window_ShopCommand[_0x26c4e1(0x306)][_0x26c4e1(0x287)]=function(){const _0x55e112=_0x26c4e1;return this[_0x55e112(0x426)]?this[_0x55e112(0x426)][_0x55e112(0x5fc)]:0x3;},Window_ShopCommand[_0x26c4e1(0x306)][_0x26c4e1(0x1d5)]=function(){const _0x2f32d5=_0x26c4e1;return VisuMZ[_0x2f32d5(0x582)][_0x2f32d5(0x3d7)]['ShopScene'][_0x2f32d5(0x568)];},Window_ShopCommand[_0x26c4e1(0x306)]['makeCommandList']=function(){const _0x507377=_0x26c4e1;this[_0x507377(0x3a3)](),this['addSellCommand'](),this['addCancelCommand']();},Window_ShopCommand[_0x26c4e1(0x306)]['refresh']=function(){const _0x9fd423=_0x26c4e1;Window_HorzCommand[_0x9fd423(0x306)][_0x9fd423(0x49a)][_0x9fd423(0x2e2)](this),this[_0x9fd423(0x330)]();},Window_ShopCommand['prototype'][_0x26c4e1(0x3a3)]=function(){const _0xcd645e=_0x26c4e1,_0x2407d0=this[_0xcd645e(0x235)](),_0x563ddd=VisuMZ[_0xcd645e(0x582)]['Settings'][_0xcd645e(0x4ac)][_0xcd645e(0x446)],_0x44746f=_0x2407d0===_0xcd645e(0x20f)?TextManager['buy']:_0xcd645e(0x462)[_0xcd645e(0x272)](_0x563ddd,TextManager[_0xcd645e(0x41b)]),_0x23081f=this['isBuyCommandEnabled']();if(this[_0xcd645e(0x1d5)]()&&!_0x23081f)return;this[_0xcd645e(0x281)](_0x44746f,_0xcd645e(0x41b),_0x23081f);},Window_ShopCommand[_0x26c4e1(0x306)][_0x26c4e1(0x361)]=function(){const _0x1ddcfc=_0x26c4e1;if(SceneManager[_0x1ddcfc(0x419)][_0x1ddcfc(0x5c2)]===Scene_Shop){if(_0x1ddcfc(0x285)!=='WsDxI')return SceneManager[_0x1ddcfc(0x419)][_0x1ddcfc(0x420)]>0x0;else _0x165b0[_0x1ddcfc(0x582)][_0x1ddcfc(0x626)]['call'](this,_0x3ab91f),_0x5c0aa2[_0x1ddcfc(0x582)]['Parse_Notetags_Batch'](_0x6abaca,_0x7da164);}else{if(_0x1ddcfc(0x1e7)!==_0x1ddcfc(0x39d))return!![];else this['cursorDown'](_0x428721['isTriggered'](_0x1ddcfc(0x553)));}},Window_ShopCommand[_0x26c4e1(0x306)]['addSellCommand']=function(){const _0x5c119c=_0x26c4e1,_0xa0b56=this[_0x5c119c(0x235)](),_0x58f242=VisuMZ[_0x5c119c(0x582)][_0x5c119c(0x3d7)][_0x5c119c(0x4ac)][_0x5c119c(0x4e8)],_0x1fa562=_0xa0b56===_0x5c119c(0x20f)?TextManager[_0x5c119c(0x405)]:'\x5cI[%1]%2'[_0x5c119c(0x272)](_0x58f242,TextManager[_0x5c119c(0x405)]),_0x5be516=this[_0x5c119c(0x234)]();if(this[_0x5c119c(0x1d5)]()&&!_0x5be516)return;this['addCommand'](_0x1fa562,_0x5c119c(0x405),_0x5be516);},Window_ShopCommand[_0x26c4e1(0x306)][_0x26c4e1(0x234)]=function(){const _0x52f44c=_0x26c4e1;return!this[_0x52f44c(0x578)];},Window_ShopCommand[_0x26c4e1(0x306)][_0x26c4e1(0x57b)]=function(){const _0x34cba3=_0x26c4e1,_0x3ea46c=this[_0x34cba3(0x235)](),_0x5436c3=VisuMZ['ItemsEquipsCore'][_0x34cba3(0x3d7)][_0x34cba3(0x4ac)][_0x34cba3(0x1dd)],_0x5571e8=VisuMZ[_0x34cba3(0x582)]['Settings'][_0x34cba3(0x4ac)]['CmdCancelRename'],_0x286016=_0x3ea46c==='text'?_0x5571e8:'\x5cI[%1]%2'[_0x34cba3(0x272)](_0x5436c3,_0x5571e8);this[_0x34cba3(0x281)](_0x286016,'cancel');},Window_ShopCommand['prototype'][_0x26c4e1(0x227)]=function(){const _0x20e775=_0x26c4e1;return VisuMZ['ItemsEquipsCore']['Settings'][_0x20e775(0x4ac)]['CmdTextAlign'];},Window_ShopCommand[_0x26c4e1(0x306)][_0x26c4e1(0x628)]=function(_0x10d155){const _0x2fed00=_0x26c4e1,_0x3e1fa6=this[_0x2fed00(0x49b)](_0x10d155);if(_0x3e1fa6===_0x2fed00(0x523)){if(_0x2fed00(0x225)!=='oERZl'){this[_0x2fed00(0x530)](this[_0x2fed00(0x3ec)](null));const _0x25b354=_0x29cb0f[_0x2fed00(0x582)][_0x2fed00(0x3d7)][_0x2fed00(0x30c)],_0x4031b4=this[_0x2fed00(0x348)](_0x49f281),_0x11087c=_0x4031b4['y']+(this['lineHeight']()-_0x58c8df[_0x2fed00(0x48f)])/0x2,_0x2ea096=_0x554f98[_0x2fed00(0x1f8)]+0x4,_0x3292e4=_0x487b39[_0x2fed00(0x1e6)](0x0,_0x4031b4[_0x2fed00(0x22c)]-_0x2ea096);this['resetTextColor'](),this[_0x2fed00(0x2af)](_0x25b354[_0x2fed00(0x24f)],_0x4031b4['x'],_0x11087c),this[_0x2fed00(0x392)](_0x25b354[_0x2fed00(0x531)],_0x4031b4['x']+_0x2ea096,_0x4031b4['y'],_0x3292e4),this[_0x2fed00(0x530)](!![]);}else this[_0x2fed00(0x3ea)](_0x10d155);}else _0x3e1fa6===_0x2fed00(0x3a7)?this[_0x2fed00(0x322)](_0x10d155):Window_HorzCommand[_0x2fed00(0x306)][_0x2fed00(0x628)]['call'](this,_0x10d155);},Window_ShopCommand[_0x26c4e1(0x306)]['commandStyle']=function(){const _0x191baa=_0x26c4e1;return VisuMZ[_0x191baa(0x582)][_0x191baa(0x3d7)][_0x191baa(0x4ac)][_0x191baa(0x480)];},Window_ShopCommand[_0x26c4e1(0x306)][_0x26c4e1(0x49b)]=function(_0x464ce6){const _0x503787=_0x26c4e1;if(_0x464ce6<0x0)return _0x503787(0x20f);const _0x3731dd=this[_0x503787(0x235)]();if(_0x3731dd!==_0x503787(0x3b1))return _0x3731dd;else{if(this[_0x503787(0x334)]()>0x0){if(_0x503787(0x355)!==_0x503787(0x5b0)){const _0x55d42e=this['commandName'](_0x464ce6);if(_0x55d42e[_0x503787(0x318)](/\\I\[(\d+)\]/i)){const _0x254c8b=this[_0x503787(0x348)](_0x464ce6),_0x5c82da=this[_0x503787(0x35c)](_0x55d42e)[_0x503787(0x22c)];return _0x5c82da<=_0x254c8b[_0x503787(0x22c)]?_0x503787(0x523):_0x503787(0x352)!==_0x503787(0x352)?_0x2d23fc[_0x503787(0x306)][_0x503787(0x3f6)][_0x503787(0x2e2)](this):_0x503787(0x3a7);}}else return this[_0x503787(0x547)]&&this[_0x503787(0x547)][_0x503787(0x375)]();}}return _0x503787(0x20f);},Window_ShopCommand[_0x26c4e1(0x306)][_0x26c4e1(0x3ea)]=function(_0x7ab7a1){const _0x137e59=_0x26c4e1,_0x20dc64=this[_0x137e59(0x348)](_0x7ab7a1),_0x3004d7=this[_0x137e59(0x2a5)](_0x7ab7a1),_0x1358b2=this[_0x137e59(0x35c)](_0x3004d7)[_0x137e59(0x22c)];this[_0x137e59(0x530)](this['isCommandEnabled'](_0x7ab7a1));const _0x849536=this['itemTextAlign']();if(_0x849536===_0x137e59(0x38c))this['drawTextEx'](_0x3004d7,_0x20dc64['x']+_0x20dc64[_0x137e59(0x22c)]-_0x1358b2,_0x20dc64['y'],_0x1358b2);else{if(_0x849536===_0x137e59(0x312)){if(_0x137e59(0x498)!=='JJZBc'){const _0x5e768c=_0x20dc64['x']+Math[_0x137e59(0x5b8)]((_0x20dc64[_0x137e59(0x22c)]-_0x1358b2)/0x2);this['drawTextEx'](_0x3004d7,_0x5e768c,_0x20dc64['y'],_0x1358b2);}else _0x2426a4[_0x137e59(0x3e8)]['push'](_0x1bdae6[_0x137e59(0x3e9)]()[_0x137e59(0x5b1)]());}else this['drawTextEx'](_0x3004d7,_0x20dc64['x'],_0x20dc64['y'],_0x1358b2);}},Window_ShopCommand[_0x26c4e1(0x306)][_0x26c4e1(0x322)]=function(_0x2c9d94){const _0x1c2b50=_0x26c4e1;this[_0x1c2b50(0x2a5)](_0x2c9d94)[_0x1c2b50(0x318)](/\\I\[(\d+)\]/i);const _0x142475=Number(RegExp['$1'])||0x0,_0x22539b=this['itemLineRect'](_0x2c9d94),_0x38cecf=_0x22539b['x']+Math[_0x1c2b50(0x5b8)]((_0x22539b[_0x1c2b50(0x22c)]-ImageManager[_0x1c2b50(0x1f8)])/0x2),_0x22a3b4=_0x22539b['y']+(_0x22539b['height']-ImageManager[_0x1c2b50(0x48f)])/0x2;this['drawIcon'](_0x142475,_0x38cecf,_0x22a3b4);},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x575)]=Window_ShopBuy[_0x26c4e1(0x306)][_0x26c4e1(0x49a)],Window_ShopBuy[_0x26c4e1(0x306)][_0x26c4e1(0x49a)]=function(){const _0x3fcc77=_0x26c4e1;this[_0x3fcc77(0x248)](),VisuMZ[_0x3fcc77(0x582)][_0x3fcc77(0x575)][_0x3fcc77(0x2e2)](this);},Window_ShopBuy['prototype'][_0x26c4e1(0x248)]=function(){const _0x1f56a5=_0x26c4e1;if(SceneManager[_0x1f56a5(0x419)][_0x1f56a5(0x5c2)]===Scene_Shop){if('qAxLP'===_0x1f56a5(0x564))return _0x42b196[_0x1f56a5(0x582)][_0x1f56a5(0x3d7)][_0x1f56a5(0x4ac)][_0x1f56a5(0x2df)];else this[_0x1f56a5(0x40b)]=SceneManager[_0x1f56a5(0x419)]['money']();}},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x2e7)]=Window_ShopBuy[_0x26c4e1(0x306)][_0x26c4e1(0x5c3)],Window_ShopBuy[_0x26c4e1(0x306)]['price']=function(_0x21c403){const _0xffb3cd=_0x26c4e1;if(!_0x21c403)return 0x0;const _0x487474=VisuMZ[_0xffb3cd(0x582)][_0xffb3cd(0x2e7)]['call'](this,_0x21c403);return this['modifiedBuyPriceItemsEquipsCore'](_0x21c403,_0x487474);},Window_ShopBuy['prototype'][_0x26c4e1(0x21e)]=function(_0x38c5ed,_0x4d808d){const _0x531a83=_0x26c4e1,_0x4f9ea9=_0x38c5ed[_0x531a83(0x291)];if(_0x4f9ea9[_0x531a83(0x318)](/<JS BUY PRICE>\s*([\s\S]*)\s*<\/JS BUY PRICE>/i)){const _0x3788d3=String(RegExp['$1']);try{eval(_0x3788d3);}catch(_0x3487eb){if(_0x531a83(0x592)===_0x531a83(0x592)){if($gameTemp[_0x531a83(0x479)]())console[_0x531a83(0x5c9)](_0x3487eb);}else{const _0x298f7f=this[_0x531a83(0x2a5)](_0x1baa72);if(_0x298f7f['match'](/\\I\[(\d+)\]/i)){const _0x48eeea=this[_0x531a83(0x348)](_0x44364d),_0x5daf8b=this[_0x531a83(0x35c)](_0x298f7f)[_0x531a83(0x22c)];return _0x5daf8b<=_0x48eeea['width']?'iconText':_0x531a83(0x3a7);}}}}_0x4d808d=VisuMZ[_0x531a83(0x582)]['Settings']['ShopScene'][_0x531a83(0x30f)][_0x531a83(0x2e2)](this,_0x38c5ed,_0x4d808d);if(isNaN(_0x4d808d))_0x4d808d=0x0;return Math[_0x531a83(0x5b8)](_0x4d808d);},Window_ShopBuy['prototype'][_0x26c4e1(0x628)]=function(_0x324037){const _0x32f95f=_0x26c4e1;this[_0x32f95f(0x277)]();const _0x337a17=this[_0x32f95f(0x24b)](_0x324037),_0x26d86f=this[_0x32f95f(0x348)](_0x324037),_0x7cef34=_0x26d86f[_0x32f95f(0x22c)];this[_0x32f95f(0x530)](this[_0x32f95f(0x3ec)](_0x337a17)),this[_0x32f95f(0x4c8)](_0x337a17,_0x26d86f['x'],_0x26d86f['y'],_0x7cef34),this['drawItemCost'](_0x337a17,_0x26d86f),this[_0x32f95f(0x530)](!![]);},Window_ShopBuy[_0x26c4e1(0x306)][_0x26c4e1(0x607)]=function(_0x2391e6,_0x3a3fd3){const _0x224dcc=_0x26c4e1,_0x9926f8=this['price'](_0x2391e6);this[_0x224dcc(0x409)](_0x9926f8,TextManager[_0x224dcc(0x271)],_0x3a3fd3['x'],_0x3a3fd3['y'],_0x3a3fd3[_0x224dcc(0x22c)]);},Window_ShopSell['prototype'][_0x26c4e1(0x287)]=function(){const _0x300b27=_0x26c4e1;return SceneManager[_0x300b27(0x419)][_0x300b27(0x1f7)]()?0x1:0x2;},VisuMZ[_0x26c4e1(0x582)][_0x26c4e1(0x4eb)]=Window_ShopSell['prototype'][_0x26c4e1(0x3ec)],Window_ShopSell[_0x26c4e1(0x306)][_0x26c4e1(0x3ec)]=function(_0x529ecd){const _0x438c28=_0x26c4e1;if(!_0x529ecd)return![];const _0x3c4041=_0x529ecd[_0x438c28(0x291)];if(_0x3c4041[_0x438c28(0x318)](/<CANNOT SELL>/i))return![];if(_0x3c4041[_0x438c28(0x318)](/<CAN SELL>/i))return!![];if(_0x3c4041[_0x438c28(0x318)](/<CANNOT SELL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x438c28(0x28a)===_0x438c28(0x28a)){const _0x401afd=JSON['parse']('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x406cac of _0x401afd){if(!$gameSwitches['value'](_0x406cac))return![];}}else _0x5d2d49['prototype']['processCursorMoveModernControls'][_0x438c28(0x2e2)](this);}if(_0x3c4041['match'](/<CANNOT SELL ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x438c28(0x4e7)==='YkqmF'){const _0x364822=this[_0x438c28(0x24b)](_0x4aa426);_0x364822?_0x46f3ad[_0x438c28(0x306)]['drawItem']['call'](this,_0x13d9d8):this['drawRemoveItem'](_0x583cd1);}else{const _0x2dbb77=JSON['parse']('['+RegExp['$1'][_0x438c28(0x318)](/\d+/g)+']');for(const _0x39a919 of _0x2dbb77){if(!$gameSwitches[_0x438c28(0x5cc)](_0x39a919))return![];}}}if(_0x3c4041[_0x438c28(0x318)](/<CANNOT SELL ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if('KfPZA'!==_0x438c28(0x619)){const _0x5d8e85=JSON[_0x438c28(0x24a)]('['+RegExp['$1'][_0x438c28(0x318)](/\d+/g)+']');for(const _0x7ef093 of _0x5d8e85){if($gameSwitches[_0x438c28(0x5cc)](_0x7ef093))return![];}}else return this[_0x438c28(0x1d4)]();}return VisuMZ[_0x438c28(0x582)][_0x438c28(0x4eb)][_0x438c28(0x2e2)](this,_0x529ecd);},Window_ShopStatus[_0x26c4e1(0x306)]['isPageChangeRequested']=function(){return![];},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x3c3)]=function(){const _0x3a7bed=_0x26c4e1;Window_StatusBase[_0x3a7bed(0x306)][_0x3a7bed(0x3c3)]['call'](this);for(const _0x457c2f of $gameParty[_0x3a7bed(0x52a)]()){if(_0x3a7bed(0x2ff)===_0x3a7bed(0x2ff))ImageManager[_0x3a7bed(0x203)](_0x457c2f[_0x3a7bed(0x4b8)]());else return _0x4bc885[_0x3a7bed(0x46a)];}},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x4d7)]=function(){const _0xeacdea=_0x26c4e1;return VisuMZ['ItemsEquipsCore'][_0xeacdea(0x3d7)][_0xeacdea(0x501)][_0xeacdea(0x3c0)];},Window_ShopStatus[_0x26c4e1(0x306)]['refresh']=function(){const _0x5474c8=_0x26c4e1;this['contents'][_0x5474c8(0x4e4)](),this[_0x5474c8(0x5ac)]['clear']();if(this['_item']){if(_0x5474c8(0x3e5)!==_0x5474c8(0x3e5)){const _0x4c56a2=this['commandStyleCheck'](_0x5ab6a3);if(_0x4c56a2===_0x5474c8(0x523))this[_0x5474c8(0x3ea)](_0x12ac27);else _0x4c56a2===_0x5474c8(0x3a7)?this[_0x5474c8(0x322)](_0x50fd6e):_0x828047['prototype'][_0x5474c8(0x628)][_0x5474c8(0x2e2)](this,_0x64c5b2);}else{this[_0x5474c8(0x277)](),this[_0x5474c8(0x530)](!![]),this['prepareItemCustomData']();if(this[_0x5474c8(0x4ba)]()){if(_0x5474c8(0x508)!==_0x5474c8(0x508))return this[_0x5474c8(0x468)]();else this[_0x5474c8(0x5d2)]();}else _0x5474c8(0x436)!=='hOpad'?this[_0x5474c8(0x351)]():_0x4c3c6e=_0x3c373[_0x5474c8(0x3c8)][_0x2755e5(_0x16dd9a['$1'])]||'';this['drawCustomShopGraphic']();}}},Window_ShopStatus['prototype'][_0x26c4e1(0x487)]=function(_0xaee319,_0x488ae0){const _0x306b2b=_0x26c4e1;if(!this[_0x306b2b(0x4ba)]()&&!DataManager[_0x306b2b(0x608)](this[_0x306b2b(0x4ea)]))return;const _0xee9cef=this['innerWidth']-this['itemPadding']()-_0xaee319,_0x3e02b0=this[_0x306b2b(0x338)](_0x306b2b(0x57c));this[_0x306b2b(0x597)](ColorManager['systemColor']()),this[_0x306b2b(0x392)](TextManager[_0x306b2b(0x509)],_0xaee319+this['itemPadding'](),_0x488ae0,_0xee9cef-_0x3e02b0),this[_0x306b2b(0x3a6)](),this[_0x306b2b(0x1f5)](this[_0x306b2b(0x4ea)],_0xaee319,_0x488ae0,_0xee9cef);},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x43c)]=function(_0x1fe609,_0x3302d1,_0x56f6db,_0x381610,_0x543ae9){const _0x256772=_0x26c4e1;if(VisuMZ[_0x256772(0x582)]['Settings'][_0x256772(0x501)][_0x256772(0x56f)]===![])return;_0x543ae9=Math[_0x256772(0x1e6)](_0x543ae9||0x1,0x1);while(_0x543ae9--){if(_0x256772(0x2e4)===_0x256772(0x2e4)){_0x381610=_0x381610||this[_0x256772(0x2bd)](),this[_0x256772(0x5ac)][_0x256772(0x5af)]=0xa0;const _0x33dd28=ColorManager['getItemsEquipsCoreBackColor1']();this[_0x256772(0x5ac)][_0x256772(0x2ca)](_0x1fe609+0x1,_0x3302d1+0x1,_0x56f6db-0x2,_0x381610-0x2,_0x33dd28),this['contentsBack']['paintOpacity']=0xff;}else _0x5160e0=_0x256772(0x323)[_0x256772(0x272)](_0x28efe4['id']);}},ColorManager[_0x26c4e1(0x493)]=function(){const _0x421d49=_0x26c4e1,_0x4f23d6=VisuMZ[_0x421d49(0x582)][_0x421d49(0x3d7)][_0x421d49(0x501)];let _0x255161=_0x4f23d6[_0x421d49(0x33f)]!==undefined?_0x4f23d6[_0x421d49(0x33f)]:0x13;return ColorManager[_0x421d49(0x2ee)](_0x255161);},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x5d2)]=function(){const _0x2bbbe7=_0x26c4e1;if(VisuMZ[_0x2bbbe7(0x582)][_0x2bbbe7(0x3d7)]['StatusWindow'][_0x2bbbe7(0x204)]){VisuMZ[_0x2bbbe7(0x582)]['Settings'][_0x2bbbe7(0x501)][_0x2bbbe7(0x204)]['call'](this);return;}const _0x3963ec=this[_0x2bbbe7(0x2bd)](),_0x378081=this['gaugeLineHeight']()+0x8;let _0xe13270=0x0,_0x37140b=0x0,_0x3de709=this[_0x2bbbe7(0x453)],_0x397a8a=this['innerHeight'],_0x264268=Math[_0x2bbbe7(0x5b8)](_0x3de709/0x2),_0x5ca046=_0xe13270+_0x3de709-_0x264268;this[_0x2bbbe7(0x4c8)](this[_0x2bbbe7(0x4ea)],_0xe13270+this[_0x2bbbe7(0x284)](),_0x37140b,_0x3de709-this['itemPadding']()*0x2),this[_0x2bbbe7(0x43c)](_0xe13270,_0x37140b,_0x3de709),_0x37140b+=_0x3963ec;if(this[_0x2bbbe7(0x5de)](_0xe13270,_0x37140b,_0x264268))_0x37140b+=0x0;if(this[_0x2bbbe7(0x588)](_0x5ca046,_0x37140b,_0x264268))_0x37140b+=_0x3963ec;const _0x29325f=this[_0x2bbbe7(0x2cf)](),_0x48e7c7=_0x37140b;_0x37140b=_0x397a8a-_0x29325f[_0x2bbbe7(0x5fc)]*_0x378081-0x4;let _0x1d5f29=_0xe13270,_0x2b97b3=0x0,_0x5a845e=_0x37140b;for(const _0x2575f5 of _0x29325f){_0x2b97b3=Math['max'](this[_0x2bbbe7(0x33c)](_0x2575f5,_0xe13270+0x4,_0x37140b+0x4,_0x3de709),_0x2b97b3),_0x37140b+=_0x378081;}const _0x181234=$gameParty[_0x2bbbe7(0x5fa)](),_0x272902=Math[_0x2bbbe7(0x5b8)]((_0x3de709-_0x2b97b3)/_0x181234);_0x2b97b3=_0x3de709-_0x272902*_0x181234;for(const _0x1b689b of $gameParty[_0x2bbbe7(0x60b)]()){const _0x561134=$gameParty[_0x2bbbe7(0x60b)]()[_0x2bbbe7(0x4a0)](_0x1b689b),_0x1e1f7f=_0x1d5f29+_0x2b97b3+_0x561134*_0x272902;this[_0x2bbbe7(0x530)](_0x1b689b[_0x2bbbe7(0x2be)](this['_item'])),this['drawActorCharacter'](_0x1b689b,_0x1e1f7f+_0x272902/0x2,_0x5a845e);let _0x48bef4=_0x5a845e;for(const _0x3222e8 of _0x29325f){const _0x2865fc=_0x48bef4-(_0x3963ec-_0x378081)/0x2;this[_0x2bbbe7(0x5b2)](_0x1b689b,_0x3222e8,_0x1e1f7f,_0x2865fc,_0x272902),_0x48bef4+=_0x378081;}}this[_0x2bbbe7(0x43c)](_0x1d5f29,_0x48e7c7,_0x2b97b3,_0x5a845e-_0x48e7c7);for(let _0x2f756d=0x0;_0x2f756d<_0x181234;_0x2f756d++){if(_0x2bbbe7(0x30e)===_0x2bbbe7(0x5e3))_0x24cbb2[_0x2bbbe7(0x45d)](_0x4cc46e['SwitchSell'],![]);else{const _0x411cf0=_0x1d5f29+_0x2b97b3+_0x2f756d*_0x272902;this[_0x2bbbe7(0x43c)](_0x411cf0,_0x48e7c7,_0x272902,_0x5a845e-_0x48e7c7);}}for(const _0x3416f0 of _0x29325f){this[_0x2bbbe7(0x43c)](_0x1d5f29,_0x5a845e,_0x2b97b3,_0x378081);for(let _0x347f11=0x0;_0x347f11<_0x181234;_0x347f11++){if(_0x2bbbe7(0x5d9)==='bSNOP'){const _0x4ddeaf=_0x1d5f29+_0x2b97b3+_0x347f11*_0x272902;this[_0x2bbbe7(0x43c)](_0x4ddeaf,_0x5a845e,_0x272902,_0x378081);}else this[_0x2bbbe7(0x244)]=!![];}_0x5a845e+=_0x378081;}},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x5de)]=function(_0x47a18a,_0x110c96,_0x26ae5a){const _0x17cb3e=_0x26c4e1;if(!this[_0x17cb3e(0x4ba)]())return![];const _0x92a951=$dataSystem[_0x17cb3e(0x2b4)][this[_0x17cb3e(0x4ea)]['etypeId']];return this[_0x17cb3e(0x266)](_0x92a951,_0x47a18a,_0x110c96,_0x26ae5a,!![]),this[_0x17cb3e(0x43c)](_0x47a18a,_0x110c96,_0x26ae5a),this[_0x17cb3e(0x277)](),!![];},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x61f)]=function(){const _0x465f11=_0x26c4e1,_0x50a014=VisuMZ['ItemsEquipsCore'][_0x465f11(0x3d7)]['ItemScene']['ItemQuantityFmt'];return _0x50a014['format']($gameParty[_0x465f11(0x4c9)](this[_0x465f11(0x4ea)]));},Window_ShopStatus['prototype']['actorParams']=function(){const _0x14c0bb=_0x26c4e1;if(Imported[_0x14c0bb(0x46f)]){if(_0x14c0bb(0x627)==='wdmch')return VisuMZ[_0x14c0bb(0x294)][_0x14c0bb(0x3d7)][_0x14c0bb(0x5e0)][_0x14c0bb(0x5f0)];else this['onCategoryCancel']();}else return[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7];},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x4fe)]=function(){const _0x153dbc=_0x26c4e1;return VisuMZ[_0x153dbc(0x582)][_0x153dbc(0x3d7)]['StatusWindow'][_0x153dbc(0x3c2)];},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x33c)]=function(_0x59e993,_0x4f1244,_0x19a80d,_0x1919f1){const _0x3c520a=_0x26c4e1;this[_0x3c520a(0x277)](),this[_0x3c520a(0x3ab)]['fontSize']=this[_0x3c520a(0x4fe)]();let _0x168e75=this[_0x3c520a(0x338)](TextManager[_0x3c520a(0x236)](_0x59e993))+0x4+_0x4f1244;if(Imported[_0x3c520a(0x46f)])_0x3c520a(0x5c5)!==_0x3c520a(0x5c5)?_0x3ae1bf[_0x3c520a(0x403)]('shift')&&this[_0x3c520a(0x212)]()?this[_0x3c520a(0x4c2)]():this[_0x3c520a(0x44a)](_0x279aad['isTriggered']('up')):(this['drawParamText'](_0x4f1244,_0x19a80d,_0x1919f1,_0x59e993,!![]),VisuMZ[_0x3c520a(0x294)][_0x3c520a(0x3d7)][_0x3c520a(0x5e0)][_0x3c520a(0x50c)]&&(_0x168e75+=ImageManager[_0x3c520a(0x1f8)]+0x4));else{if(_0x3c520a(0x3ef)!==_0x3c520a(0x2ce))this['changeTextColor'](ColorManager['systemColor']()),this['drawText'](TextManager['param'](_0x59e993),_0x4f1244,_0x19a80d,_0x1919f1);else{for(const _0x3a819e of _0x265f9c['categoryList']){this[_0x3c520a(0x354)](_0x3a819e);}this[_0x3c520a(0x5e9)](this[_0x3c520a(0x26a)]());}}return this[_0x3c520a(0x277)](),_0x168e75;},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x5b2)]=function(_0x5e80f5,_0x355f38,_0x5f0d4d,_0x3d1cd0,_0x5da435){const _0x546d1c=_0x26c4e1;_0x5f0d4d+=this['itemPadding'](),_0x5da435-=this['itemPadding']()*0x2;const _0x2b580d=VisuMZ['ItemsEquipsCore'][_0x546d1c(0x3d7)]['StatusWindow'];this[_0x546d1c(0x3ab)][_0x546d1c(0x2f9)]=_0x2b580d['ParamChangeFontSize'],this['changePaintOpacity'](_0x5e80f5['canEquip'](this[_0x546d1c(0x4ea)]));if(_0x5e80f5['isEquipped'](this[_0x546d1c(0x4ea)])){if(_0x546d1c(0x3b7)==='xRWEQ'){const _0x592148=_0x2b580d[_0x546d1c(0x5d7)];this[_0x546d1c(0x392)](_0x592148,_0x5f0d4d,_0x3d1cd0,_0x5da435,_0x546d1c(0x312));}else{const _0xd05a37=_0x3a0597[_0x546d1c(0x3c8)][_0x546d1c(0x4a0)](_0x4934c9(_0x8ba34b['$1'])[_0x546d1c(0x5b1)]());return _0x25639f['isArmor'](_0x36a8bd)&&_0x237c53[_0x546d1c(0x60c)]===_0xd05a37;}}else{if(_0x5e80f5['canEquip'](this['_item'])){const _0x21c674=JsonEx[_0x546d1c(0x295)](_0x5e80f5);_0x21c674['_tempActor']=!![];const _0x296d09=_0x21c674['equipSlots']()['indexOf'](this[_0x546d1c(0x4ea)][_0x546d1c(0x2f8)]);if(_0x296d09>=0x0)_0x21c674[_0x546d1c(0x5a6)](_0x296d09,this[_0x546d1c(0x4ea)]);let _0x11c99e=0x0,_0x2acfb7=0x0,_0x3ec910=0x0;Imported[_0x546d1c(0x46f)]?(_0x11c99e=_0x21c674[_0x546d1c(0x219)](_0x355f38),_0x2acfb7=_0x11c99e-_0x5e80f5[_0x546d1c(0x219)](_0x355f38),this['changeTextColor'](ColorManager['paramchangeTextColor'](_0x2acfb7)),_0x3ec910=(_0x2acfb7>=0x0?'+':'')+VisuMZ[_0x546d1c(0x343)](_0x2acfb7,0x0,_0x355f38)):(_0x11c99e=_0x21c674['param'](_0x355f38),_0x2acfb7=_0x11c99e-_0x5e80f5[_0x546d1c(0x236)](_0x355f38),this['changeTextColor'](ColorManager[_0x546d1c(0x512)](_0x2acfb7)),_0x3ec910=(_0x2acfb7>=0x0?'+':'')+_0x2acfb7);if(_0x3ec910==='+0')_0x3ec910=_0x2b580d[_0x546d1c(0x470)];this[_0x546d1c(0x392)](_0x3ec910,_0x5f0d4d,_0x3d1cd0,_0x5da435,_0x546d1c(0x312));}else{if(_0x546d1c(0x24c)===_0x546d1c(0x24c)){const _0x4bdb01=_0x2b580d['CannotEquipMarker'];this[_0x546d1c(0x392)](_0x4bdb01,_0x5f0d4d,_0x3d1cd0,_0x5da435,_0x546d1c(0x312));}else _0x138dc8[_0x546d1c(0x582)][_0x546d1c(0x3d7)][_0x546d1c(0x30c)][_0x546d1c(0x4bc)]['call'](this),this[_0x546d1c(0x550)]();}}this['resetFontSettings'](),this[_0x546d1c(0x530)](!![]);},Window_ShopStatus['prototype'][_0x26c4e1(0x351)]=function(){const _0x50c690=_0x26c4e1;VisuMZ[_0x50c690(0x582)][_0x50c690(0x3d7)][_0x50c690(0x501)]['DrawItemData'][_0x50c690(0x2e2)](this);},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x2a6)]=function(){const _0x175a3d=_0x26c4e1;this[_0x175a3d(0x469)]={};if(!this[_0x175a3d(0x4ea)])return;const _0x58b942=this[_0x175a3d(0x4ea)][_0x175a3d(0x291)];if(_0x58b942[_0x175a3d(0x318)](/<STATUS INFO>\s*([\s\S]*)\s*<\/STATUS INFO>/i)){const _0x3c23f7=String(RegExp['$1'])[_0x175a3d(0x233)](/[\r\n]+/);for(const _0x3479cc of _0x3c23f7){if(_0x3479cc[_0x175a3d(0x318)](/(.*):[ ](.*)/i)){const _0xdd2832=String(RegExp['$1'])['toUpperCase']()[_0x175a3d(0x5b1)](),_0x26e990=String(RegExp['$2'])['trim']();this[_0x175a3d(0x469)][_0xdd2832]=_0x26e990;}}}},Window_ShopStatus['prototype'][_0x26c4e1(0x563)]=function(){const _0x4f3137=_0x26c4e1;return Math['max'](0x1,$gameSystem[_0x4f3137(0x543)]()-0x4);},Window_ShopStatus[_0x26c4e1(0x306)]['resetFontSettings']=function(){const _0x515859=_0x26c4e1;Window_StatusBase[_0x515859(0x306)][_0x515859(0x277)][_0x515859(0x2e2)](this),this[_0x515859(0x3ab)][_0x515859(0x2f9)]=this[_0x515859(0x545)]||this[_0x515859(0x3ab)][_0x515859(0x2f9)],this[_0x515859(0x3ab)][_0x515859(0x454)]=this[_0x515859(0x41c)]||this[_0x515859(0x3ab)][_0x515859(0x454)];},Window_ShopStatus['prototype']['fontSizeRatio']=function(){const _0x11565c=_0x26c4e1;return this[_0x11565c(0x3ab)][_0x11565c(0x2f9)]/$gameSystem[_0x11565c(0x543)]();},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x2af)]=function(_0x1ae812,_0xf52bd6,_0x19910a){const _0x2a4e88=_0x26c4e1,_0x2b20ab=ImageManager[_0x2a4e88(0x38e)](_0x2a4e88(0x379)),_0x2fdbba=ImageManager[_0x2a4e88(0x1f8)],_0x5a84c7=ImageManager[_0x2a4e88(0x48f)],_0x188977=_0x1ae812%0x10*_0x2fdbba,_0x5b840a=Math['floor'](_0x1ae812/0x10)*_0x5a84c7,_0x693f66=Math[_0x2a4e88(0x373)](_0x2fdbba*this['fontSizeRatio']()),_0x21326c=Math[_0x2a4e88(0x373)](_0x5a84c7*this[_0x2a4e88(0x56b)]());this[_0x2a4e88(0x3ab)][_0x2a4e88(0x2c1)](_0x2b20ab,_0x188977,_0x5b840a,_0x2fdbba,_0x5a84c7,_0xf52bd6,_0x19910a,_0x693f66,_0x21326c);},Window_ShopStatus['prototype'][_0x26c4e1(0x2c7)]=function(_0x5b25b1,_0x4fa3d7){const _0x3d1fc3=_0x26c4e1;if(_0x4fa3d7[_0x3d1fc3(0x3ad)]){if('FJKer'!==_0x3d1fc3(0x537))return this[_0x3d1fc3(0x34f)]();else this[_0x3d1fc3(0x2af)](_0x5b25b1,_0x4fa3d7['x'],_0x4fa3d7['y']+0x2);}_0x4fa3d7['x']+=Math[_0x3d1fc3(0x373)](ImageManager[_0x3d1fc3(0x1f8)]*this['fontSizeRatio']());if(this[_0x3d1fc3(0x56b)]()===0x1)_0x4fa3d7['x']+=0x4;},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x266)]=function(_0x2000e1,_0x17f56b,_0x2d37ee,_0x45e59c,_0x43eaa6,_0x4333bd){const _0x555a9c=_0x26c4e1;_0x2000e1=_0x2000e1||'',_0x4333bd=_0x4333bd||_0x555a9c(0x249),this[_0x555a9c(0x545)]=this[_0x555a9c(0x563)](),this['_resetFontColor']=_0x43eaa6?ColorManager[_0x555a9c(0x29b)]():this[_0x555a9c(0x3ab)][_0x555a9c(0x454)],_0x17f56b+=this['itemPadding'](),_0x45e59c-=this[_0x555a9c(0x284)]()*0x2;const _0x32808f=this[_0x555a9c(0x35c)](_0x2000e1);if(_0x4333bd==='center')_0x17f56b=_0x17f56b+Math[_0x555a9c(0x5b8)]((_0x45e59c-_0x32808f[_0x555a9c(0x22c)])/0x2);else _0x4333bd==='right'&&(_0x17f56b=_0x17f56b+_0x45e59c-_0x32808f[_0x555a9c(0x22c)]);_0x2d37ee+=(this[_0x555a9c(0x2bd)]()-_0x32808f['height'])/0x2,this[_0x555a9c(0x5bf)](_0x2000e1,_0x17f56b,_0x2d37ee,_0x45e59c),this[_0x555a9c(0x545)]=undefined,this['_resetFontColor']=undefined,this['resetFontSettings']();},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x36b)]=function(_0x24510a,_0x5b13d4,_0x461257){const _0x196559=_0x26c4e1;if(!DataManager[_0x196559(0x608)](this[_0x196559(0x4ea)]))return![];const _0x128897=this['getItemConsumableLabel']();this[_0x196559(0x266)](_0x128897,_0x24510a,_0x5b13d4,_0x461257,!![]);const _0x3b9918=this[_0x196559(0x206)]();return this[_0x196559(0x266)](_0x3b9918,_0x24510a,_0x5b13d4,_0x461257,![],'right'),this[_0x196559(0x43c)](_0x24510a,_0x5b13d4,_0x461257),this[_0x196559(0x277)](),!![];},Window_ShopStatus['prototype']['getItemConsumableLabel']=function(){const _0x4579bf=_0x26c4e1;return VisuMZ[_0x4579bf(0x582)][_0x4579bf(0x3d7)]['StatusWindow'][_0x4579bf(0x463)];},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x206)]=function(){const _0xba3e33=_0x26c4e1,_0x343b75=_0xba3e33(0x3a5);if(this[_0xba3e33(0x469)][_0x343b75])return this['_customItemInfo'][_0x343b75];return this['canConsumeItem']()?VisuMZ[_0xba3e33(0x582)][_0xba3e33(0x3d7)][_0xba3e33(0x501)]['Consumable']:VisuMZ[_0xba3e33(0x582)][_0xba3e33(0x3d7)][_0xba3e33(0x501)][_0xba3e33(0x3e1)];},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x593)]=function(){const _0x5aefb9=_0x26c4e1;return VisuMZ[_0x5aefb9(0x294)]&&VisuMZ[_0x5aefb9(0x294)][_0x5aefb9(0x3d7)]['QoL'][_0x5aefb9(0x424)]&&DataManager[_0x5aefb9(0x56d)](this[_0x5aefb9(0x4ea)])?![]:this[_0x5aefb9(0x4ea)][_0x5aefb9(0x275)];},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x588)]=function(_0x635491,_0x13b186,_0x8c1984){const _0x4ea4e4=_0x26c4e1;if(!this['isEquipItem']()&&!DataManager['isItem'](this[_0x4ea4e4(0x4ea)]))return![];if(DataManager[_0x4ea4e4(0x56d)](this[_0x4ea4e4(0x4ea)])&&!$dataSystem[_0x4ea4e4(0x5d5)]){if(_0x4ea4e4(0x527)===_0x4ea4e4(0x4cb))this[_0x4ea4e4(0x536)](),this[_0x4ea4e4(0x4aa)]();else{const _0x36f6bd=TextManager[_0x4ea4e4(0x613)];this['drawItemKeyData'](_0x36f6bd,_0x635491,_0x13b186,_0x8c1984,!![],_0x4ea4e4(0x312));}}else{const _0x1831cf=TextManager[_0x4ea4e4(0x509)];this[_0x4ea4e4(0x266)](_0x1831cf,_0x635491,_0x13b186,_0x8c1984,!![]);const _0x5954d7=this[_0x4ea4e4(0x61f)]();this[_0x4ea4e4(0x266)](_0x5954d7,_0x635491,_0x13b186,_0x8c1984,![],_0x4ea4e4(0x38c));}return this[_0x4ea4e4(0x43c)](_0x635491,_0x13b186,_0x8c1984),this[_0x4ea4e4(0x277)](),!![];},Window_ShopStatus['prototype'][_0x26c4e1(0x61f)]=function(){const _0x52a44a=_0x26c4e1,_0xffbedd=_0x52a44a(0x3d0);if(this[_0x52a44a(0x469)][_0xffbedd])return this[_0x52a44a(0x469)][_0xffbedd];const _0x1aaed4=VisuMZ[_0x52a44a(0x582)][_0x52a44a(0x3d7)][_0x52a44a(0x411)][_0x52a44a(0x491)];return _0x1aaed4['format']($gameParty[_0x52a44a(0x4c9)](this[_0x52a44a(0x4ea)]));},Window_ShopStatus['prototype'][_0x26c4e1(0x3f2)]=function(_0x246ddb,_0x55f96a,_0x572ff8){const _0x8b4571=_0x26c4e1,_0x3fdf94=this['getItemOccasionText']();return this['drawItemKeyData'](_0x3fdf94,_0x246ddb,_0x55f96a,_0x572ff8,![],'center'),this['drawItemDarkRect'](_0x246ddb,_0x55f96a,_0x572ff8),this[_0x8b4571(0x277)](),!![];},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x380)]=function(){const _0x5a6960=_0x26c4e1,_0x10f6b2='OCCASION';if(this[_0x5a6960(0x469)][_0x10f6b2])return this['_customItemInfo'][_0x10f6b2];const _0x455fbe=VisuMZ[_0x5a6960(0x582)][_0x5a6960(0x3d7)]['StatusWindow'],_0x158692=_0x5a6960(0x52b)[_0x5a6960(0x272)](this[_0x5a6960(0x4ea)]['occasion']);return _0x455fbe[_0x158692];},Window_ShopStatus['prototype'][_0x26c4e1(0x52f)]=function(_0x20a092,_0x33dd11,_0x368948){const _0x191482=_0x26c4e1,_0xe479a7=this[_0x191482(0x51c)]();return this[_0x191482(0x266)](_0xe479a7,_0x20a092,_0x33dd11,_0x368948,![],_0x191482(0x312)),this[_0x191482(0x43c)](_0x20a092,_0x33dd11,_0x368948),this[_0x191482(0x277)](),!![];},Window_ShopStatus['prototype'][_0x26c4e1(0x51c)]=function(){const _0x5178b1=_0x26c4e1,_0x2e4cd3=_0x5178b1(0x327);if(this[_0x5178b1(0x469)][_0x2e4cd3])return this[_0x5178b1(0x469)][_0x2e4cd3];const _0x3ed636=VisuMZ['ItemsEquipsCore'][_0x5178b1(0x3d7)]['StatusWindow'];if(Imported[_0x5178b1(0x319)]){if('DKvnW'==='umozL')_0x52e3cd[0x0]=-0x1;else{const _0x332795=this[_0x5178b1(0x4ea)][_0x5178b1(0x291)];if(_0x332795[_0x5178b1(0x318)](/<TARGET:[ ](.*)>/i)){const _0x476c5f=String(RegExp['$1']);if(_0x476c5f[_0x5178b1(0x318)](/(\d+) RANDOM ANY/i)){if(_0x5178b1(0x4bb)===_0x5178b1(0x5b9))_0x304385[_0x5178b1(0x582)][_0x5178b1(0x5a3)]['call'](this),this[_0x5178b1(0x3aa)]&&this['_statusWindow'][_0x5178b1(0x5c2)]===_0x478113&&this[_0x5178b1(0x3aa)]['setItem'](this[_0x5178b1(0x50a)]());else return _0x3ed636['ScopeRandomAny']['format'](Number(RegExp['$1']));}else{if(_0x476c5f['match'](/(\d+) RANDOM (?:ENEMY|ENEMIES|FOE|FOES)/i)){if('VDIWw'!==_0x5178b1(0x4f3))return _0x3ed636['ScopeRandomEnemies']['format'](Number(RegExp['$1']));else{const _0x5eccb6=_0x2d400b[_0x5178b1(0x295)](this);_0x5eccb6['_tempActor']=!![],_0x345182[_0x5178b1(0x582)][_0x5178b1(0x2a8)][_0x5178b1(0x2e2)](this,_0x2a4c80,_0x3876d6),this[_0x5178b1(0x46e)](_0x5eccb6);}}else{if(_0x476c5f[_0x5178b1(0x318)](/(\d+) RANDOM (?:ALLY|ALLIES|FRIEND|FRIENDS)/i))return _0x3ed636['ScopeRandomAllies'][_0x5178b1(0x272)](Number(RegExp['$1']));else{if(_0x476c5f['match'](/ALL (?:ALLY|ALLIES|FRIEND|FRIENDS) (?:BUT|EXCEPT) (?:USER|SELF)/i)){if(_0x5178b1(0x548)==='Tjics'){const _0x40fe98=_0xcf35d0[_0x5178b1(0x2b4)]['indexOf'](_0xf541ba[_0x5178b1(0x5b1)]());if(_0x40fe98>0x0)_0x4dba2f[_0x5178b1(0x1fc)][_0x5178b1(0x609)](_0x40fe98);}else return _0x3ed636['ScopeAlliesButUser'];}}}}}}}const _0x3e46e1=_0x5178b1(0x3be)[_0x5178b1(0x272)](this['_item'][_0x5178b1(0x246)]);return _0x3ed636[_0x3e46e1];},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x5a8)]=function(_0x39cf37,_0x3905a7,_0x3895f6){const _0x3d1128=_0x26c4e1,_0x59031d=this[_0x3d1128(0x222)]();this[_0x3d1128(0x266)](_0x59031d,_0x39cf37,_0x3905a7,_0x3895f6,!![]);const _0x41a89e=this[_0x3d1128(0x623)]();return this[_0x3d1128(0x266)](_0x41a89e,_0x39cf37,_0x3905a7,_0x3895f6,![],_0x3d1128(0x38c)),this['drawItemDarkRect'](_0x39cf37,_0x3905a7,_0x3895f6),this[_0x3d1128(0x277)](),!![];},Window_ShopStatus['prototype'][_0x26c4e1(0x222)]=function(){const _0x38d4c4=_0x26c4e1;return VisuMZ['ItemsEquipsCore']['Settings'][_0x38d4c4(0x501)][_0x38d4c4(0x5d0)];},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x623)]=function(){const _0x4a2b2a=_0x26c4e1,_0x3f729d=_0x4a2b2a(0x4b3);if(this['_customItemInfo'][_0x3f729d])return this[_0x4a2b2a(0x469)][_0x3f729d];const _0x51fa70=this['_item']['speed'];if(_0x51fa70>=0x7d0)return VisuMZ[_0x4a2b2a(0x582)][_0x4a2b2a(0x3d7)]['StatusWindow'][_0x4a2b2a(0x29f)];else{if(_0x51fa70>=0x3e8){if(_0x4a2b2a(0x4ee)!==_0x4a2b2a(0x4ee))_0x2df889[_0x4a2b2a(0x306)][_0x4a2b2a(0x261)]['call'](this);else return VisuMZ['ItemsEquipsCore'][_0x4a2b2a(0x3d7)][_0x4a2b2a(0x501)][_0x4a2b2a(0x3df)];}else{if(_0x51fa70>0x0)return VisuMZ[_0x4a2b2a(0x582)][_0x4a2b2a(0x3d7)][_0x4a2b2a(0x501)][_0x4a2b2a(0x616)];else{if(_0x51fa70===0x0)return VisuMZ['ItemsEquipsCore'][_0x4a2b2a(0x3d7)]['StatusWindow'][_0x4a2b2a(0x2b2)];else{if(_0x51fa70>-0x3e8)return VisuMZ[_0x4a2b2a(0x582)]['Settings']['StatusWindow'][_0x4a2b2a(0x517)];else{if(_0x51fa70>-0x7d0)return VisuMZ[_0x4a2b2a(0x582)][_0x4a2b2a(0x3d7)][_0x4a2b2a(0x501)][_0x4a2b2a(0x1f6)];else return _0x51fa70<=-0x7d0?_0x4a2b2a(0x5a9)===_0x4a2b2a(0x251)?_0x1715e8[_0x4a2b2a(0x582)]['Settings']['StatusWindow'][_0x4a2b2a(0x5df)]:VisuMZ[_0x4a2b2a(0x582)][_0x4a2b2a(0x3d7)][_0x4a2b2a(0x501)][_0x4a2b2a(0x238)]:_0x4a2b2a(0x59a);}}}}}},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x3a2)]=function(_0x43b928,_0x5ee1ce,_0x274f11){const _0x362953=_0x26c4e1,_0x3af205=this[_0x362953(0x4f1)]();this[_0x362953(0x266)](_0x3af205,_0x43b928,_0x5ee1ce,_0x274f11,!![]);const _0x113235=this[_0x362953(0x23a)]();return this['drawItemKeyData'](_0x113235,_0x43b928,_0x5ee1ce,_0x274f11,![],_0x362953(0x38c)),this[_0x362953(0x43c)](_0x43b928,_0x5ee1ce,_0x274f11),this[_0x362953(0x277)](),!![];},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x4f1)]=function(){const _0x3b23f0=_0x26c4e1;return VisuMZ['ItemsEquipsCore'][_0x3b23f0(0x3d7)][_0x3b23f0(0x501)]['LabelSuccessRate'];},Window_ShopStatus['prototype']['getItemSuccessRateText']=function(){const _0x6a2b4e=_0x26c4e1,_0x5d3073=_0x6a2b4e(0x404);if(this['_customItemInfo'][_0x5d3073])return this[_0x6a2b4e(0x469)][_0x5d3073];if(Imported[_0x6a2b4e(0x319)]){const _0x370175=this['_item'][_0x6a2b4e(0x291)];if(_0x370175[_0x6a2b4e(0x318)](/<ALWAYS HIT>/i))return _0x6a2b4e(0x2aa);else{if(_0x370175[_0x6a2b4e(0x318)](/<ALWAYS HIT RATE: (\d+)([%％])>/i))return _0x6a2b4e(0x2bc)[_0x6a2b4e(0x272)](Number(RegExp['$1']));}}return _0x6a2b4e(0x2bc)[_0x6a2b4e(0x272)](this['_item'][_0x6a2b4e(0x26f)]);},Window_ShopStatus['prototype'][_0x26c4e1(0x2f7)]=function(_0x5b2ac5,_0x5d9f8d,_0x44de6b){const _0x4a8383=_0x26c4e1,_0x459a7b=this[_0x4a8383(0x3a8)]();this['drawItemKeyData'](_0x459a7b,_0x5b2ac5,_0x5d9f8d,_0x44de6b,!![]);const _0x4e9d86=this[_0x4a8383(0x2b3)]();return this[_0x4a8383(0x266)](_0x4e9d86,_0x5b2ac5,_0x5d9f8d,_0x44de6b,![],_0x4a8383(0x38c)),this['drawItemDarkRect'](_0x5b2ac5,_0x5d9f8d,_0x44de6b),this[_0x4a8383(0x277)](),!![];},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x3a8)]=function(){const _0x480240=_0x26c4e1;return VisuMZ[_0x480240(0x582)][_0x480240(0x3d7)][_0x480240(0x501)][_0x480240(0x55e)];},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x2b3)]=function(){const _0x45f6c8=_0x26c4e1,_0x5a6056=_0x45f6c8(0x324);if(this[_0x45f6c8(0x469)][_0x5a6056])return this['_customItemInfo'][_0x5a6056];const _0x55eafb=_0x45f6c8(0x2ea);return _0x55eafb[_0x45f6c8(0x272)](this[_0x45f6c8(0x4ea)][_0x45f6c8(0x211)]);},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x47c)]=function(_0x27832b,_0x521557,_0xc0c656){const _0x526774=_0x26c4e1,_0x43aa58=this[_0x526774(0x3d4)]();this[_0x526774(0x266)](_0x43aa58,_0x27832b,_0x521557,_0xc0c656,!![]);const _0x312160=this[_0x526774(0x2e6)]();return this[_0x526774(0x266)](_0x312160,_0x27832b,_0x521557,_0xc0c656,![],'right'),this[_0x526774(0x43c)](_0x27832b,_0x521557,_0xc0c656),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x3d4)]=function(){const _0x30c049=_0x26c4e1;return VisuMZ[_0x30c049(0x582)]['Settings'][_0x30c049(0x501)][_0x30c049(0x329)];},Window_ShopStatus[_0x26c4e1(0x306)]['getItemHitTypeText']=function(){const _0x2bd600=_0x26c4e1,_0x1c5230=_0x2bd600(0x3f1);if(this[_0x2bd600(0x469)][_0x1c5230])return this[_0x2bd600(0x469)][_0x1c5230];const _0x437f09=VisuMZ[_0x2bd600(0x582)][_0x2bd600(0x3d7)][_0x2bd600(0x501)],_0x1c608b=_0x2bd600(0x60a)[_0x2bd600(0x272)](this[_0x2bd600(0x4ea)][_0x2bd600(0x59c)]);return _0x437f09[_0x1c608b];},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x4b2)]=function(_0x8f717f,_0x42a8a2,_0x27b66b){const _0x3b50c0=_0x26c4e1;if(this[_0x3b50c0(0x4ea)][_0x3b50c0(0x2da)][_0x3b50c0(0x5f7)]<=0x0)return _0x42a8a2;if(this[_0x3b50c0(0x3bc)](_0x8f717f,_0x42a8a2,_0x27b66b))_0x42a8a2+=this[_0x3b50c0(0x2bd)]();if(this[_0x3b50c0(0x3a0)](_0x8f717f,_0x42a8a2,_0x27b66b))_0x42a8a2+=this['lineHeight']();return this[_0x3b50c0(0x277)](),_0x42a8a2;},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x3bc)]=function(_0x4ec2ca,_0x56c2c0,_0x103163){const _0x40cc3d=_0x26c4e1,_0x5462c2=this['getItemDamageElementLabel']();this[_0x40cc3d(0x266)](_0x5462c2,_0x4ec2ca,_0x56c2c0,_0x103163,!![]);const _0x4b1002=this[_0x40cc3d(0x35a)]();return this[_0x40cc3d(0x266)](_0x4b1002,_0x4ec2ca,_0x56c2c0,_0x103163,![],'right'),this[_0x40cc3d(0x43c)](_0x4ec2ca,_0x56c2c0,_0x103163),this['resetFontSettings'](),!![];},Window_ShopStatus['prototype'][_0x26c4e1(0x1e9)]=function(){const _0x192941=_0x26c4e1;return VisuMZ[_0x192941(0x582)][_0x192941(0x3d7)][_0x192941(0x501)]['LabelElement'];},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x35a)]=function(){const _0x2bc8fd=_0x26c4e1,_0x2eb741=_0x2bc8fd(0x258);if(this['_customItemInfo'][_0x2eb741])return this[_0x2bc8fd(0x469)][_0x2eb741];if(this[_0x2bc8fd(0x4ea)][_0x2bc8fd(0x2da)][_0x2bc8fd(0x40a)]<=-0x1)return'eJLwf'==='nnWoV'?this[_0x2bc8fd(0x58c)]():VisuMZ[_0x2bc8fd(0x582)]['Settings'][_0x2bc8fd(0x501)][_0x2bc8fd(0x52d)];else{if(this[_0x2bc8fd(0x4ea)][_0x2bc8fd(0x2da)]['elementId']===0x0){if('fVWjE'==='fVWjE')return VisuMZ[_0x2bc8fd(0x582)][_0x2bc8fd(0x3d7)][_0x2bc8fd(0x501)][_0x2bc8fd(0x5df)];else _0x50cdfb=_0x2bc8fd(0x581)[_0x2bc8fd(0x272)](_0x1ff09c['id']);}else return $dataSystem[_0x2bc8fd(0x23c)][this['_item'][_0x2bc8fd(0x2da)][_0x2bc8fd(0x40a)]];}},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x3a0)]=function(_0x1129f7,_0x215341,_0x1ff48b){const _0x2a5ede=_0x26c4e1,_0x35a382=this[_0x2a5ede(0x549)]();this[_0x2a5ede(0x266)](_0x35a382,_0x1129f7,_0x215341,_0x1ff48b,!![]),this[_0x2a5ede(0x25c)]();const _0x1e4fcc=this[_0x2a5ede(0x482)](),_0x254fd2=ColorManager['damageColor']([0x0,0x0,0x2,0x1,0x3,0x1,0x3][this['_item'][_0x2a5ede(0x2da)][_0x2a5ede(0x5f7)]]);return this[_0x2a5ede(0x597)](_0x254fd2),this[_0x2a5ede(0x266)](_0x1e4fcc,_0x1129f7,_0x215341,_0x1ff48b,![],_0x2a5ede(0x38c)),this[_0x2a5ede(0x43c)](_0x1129f7,_0x215341,_0x1ff48b),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x549)]=function(){const _0x2abe62=_0x26c4e1;return Imported[_0x2abe62(0x319)]&&DataManager['getDamageStyle'](this[_0x2abe62(0x4ea)])!==_0x2abe62(0x37f)?this[_0x2abe62(0x5db)]():this['getItemDamageAmountLabelOriginal']();},Window_ShopStatus['prototype'][_0x26c4e1(0x4f9)]=function(){const _0x33e135=_0x26c4e1,_0x1e9845=VisuMZ[_0x33e135(0x582)][_0x33e135(0x3d7)][_0x33e135(0x501)],_0x4acadf=_0x33e135(0x3f4)['format'](this[_0x33e135(0x4ea)][_0x33e135(0x2da)][_0x33e135(0x5f7)]),_0x18ca7d=[null,TextManager['hp'],TextManager['mp'],TextManager['hp'],TextManager['mp'],TextManager['hp'],TextManager['mp']][this['_item'][_0x33e135(0x2da)][_0x33e135(0x5f7)]];return _0x1e9845[_0x4acadf][_0x33e135(0x272)](_0x18ca7d);},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x25c)]=function(){const _0x99ab52=_0x26c4e1,_0x296f9a=$gameActors[_0x99ab52(0x418)](0x1);this['_tempActorA']=JsonEx[_0x99ab52(0x295)](_0x296f9a),this[_0x99ab52(0x51a)]=JsonEx[_0x99ab52(0x295)](_0x296f9a);},Window_ShopStatus['prototype'][_0x26c4e1(0x482)]=function(){const _0x21e920=_0x26c4e1,_0x326724=_0x21e920(0x386);if(this[_0x21e920(0x469)][_0x326724])return this['_customItemInfo'][_0x326724];return Imported[_0x21e920(0x319)]&&DataManager['getDamageStyle'](this[_0x21e920(0x4ea)])!==_0x21e920(0x37f)?_0x21e920(0x43a)!==_0x21e920(0x43a)?this[_0x21e920(0x1f7)]()?this[_0x21e920(0x372)]():_0x3c24db[_0x21e920(0x582)][_0x21e920(0x3d7)][_0x21e920(0x411)][_0x21e920(0x4c1)][_0x21e920(0x2e2)](this):this[_0x21e920(0x468)]():this['getItemDamageAmountTextOriginal']();},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x223)]=function(){const _0x5e8b88=_0x26c4e1;window['a']=this[_0x5e8b88(0x48c)],window['b']=this[_0x5e8b88(0x51a)],this[_0x5e8b88(0x48c)]['setShopStatusWindowMode'](!![]),this['_tempActorB'][_0x5e8b88(0x467)]([0x3,0x4][_0x5e8b88(0x3b2)](this[_0x5e8b88(0x4ea)][_0x5e8b88(0x2da)][_0x5e8b88(0x5f7)]));let _0x58cabd=this[_0x5e8b88(0x4ea)][_0x5e8b88(0x2da)][_0x5e8b88(0x461)];try{const _0x2bdf9d=Math['max'](eval(_0x58cabd),0x0)/window['a'][_0x5e8b88(0x2f4)];this[_0x5e8b88(0x452)]();if(isNaN(_0x2bdf9d))return'VKAwO'!==_0x5e8b88(0x3c6)?_0x5e8b88(0x59a):this[_0x5e8b88(0x223)]();else{if(_0x5e8b88(0x610)==='LwzFY')return _0x5e8b88(0x2bc)[_0x5e8b88(0x272)](Math[_0x5e8b88(0x371)](_0x2bdf9d*0x64));else _0x1147a9[_0x5e8b88(0x582)][_0x5e8b88(0x264)][_0x5e8b88(0x2e2)](this,_0x1cfd5c),_0x330a0f['ItemsEquipsCore']['Parse_Notetags_Batch'](_0x4c400a,_0x1d4d9c);}}catch(_0x2f5c0d){if(_0x5e8b88(0x475)!==_0x5e8b88(0x475)){if(this['isOptimizeEquipOk'](_0x31bfa1))this[_0x5e8b88(0x3a1)](_0x4b6fb7,null);}else return $gameTemp[_0x5e8b88(0x479)]()&&(console[_0x5e8b88(0x5c9)](_0x5e8b88(0x350)['format'](this[_0x5e8b88(0x4ea)][_0x5e8b88(0x273)])),console['log'](_0x2f5c0d)),this[_0x5e8b88(0x452)](),_0x5e8b88(0x59a);}},Window_ShopStatus['prototype'][_0x26c4e1(0x452)]=function(){window['a']=undefined,window['b']=undefined;},Window_ShopStatus['prototype'][_0x26c4e1(0x2bf)]=function(_0x317fc2,_0x1a001f,_0x4adcf8){const _0x369bb4=_0x26c4e1;if(!this[_0x369bb4(0x1da)]())return _0x1a001f;if(this[_0x369bb4(0x321)](_0x317fc2,_0x1a001f,_0x4adcf8))_0x1a001f+=this['lineHeight']();if(this[_0x369bb4(0x614)](_0x317fc2,_0x1a001f,_0x4adcf8))_0x1a001f+=this[_0x369bb4(0x2bd)]();if(this[_0x369bb4(0x2ba)](_0x317fc2,_0x1a001f,_0x4adcf8))_0x1a001f+=this[_0x369bb4(0x2bd)]();if(this[_0x369bb4(0x2f1)](_0x317fc2,_0x1a001f,_0x4adcf8))_0x1a001f+=this[_0x369bb4(0x2bd)]();if(this[_0x369bb4(0x280)](_0x317fc2,_0x1a001f,_0x4adcf8))_0x1a001f+=this[_0x369bb4(0x2bd)]();if(this[_0x369bb4(0x4c5)](_0x317fc2,_0x1a001f,_0x4adcf8))_0x1a001f+=this[_0x369bb4(0x2bd)]();if(this[_0x369bb4(0x4fa)](_0x317fc2,_0x1a001f,_0x4adcf8))_0x1a001f+=this[_0x369bb4(0x2bd)]();if(this['drawItemEffectsAddedStatesBuffs'](_0x317fc2,_0x1a001f,_0x4adcf8))_0x1a001f+=this[_0x369bb4(0x2bd)]();if(this[_0x369bb4(0x214)](_0x317fc2,_0x1a001f,_0x4adcf8))_0x1a001f+=this['lineHeight']();return this[_0x369bb4(0x277)](),_0x1a001f;},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x499)]=function(){const _0x11abe9=_0x26c4e1;return this[_0x11abe9(0x4ea)][_0x11abe9(0x1df)];},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x1da)]=function(){const _0x4cd4fe=_0x26c4e1;let _0x137ca7=![];this[_0x4cd4fe(0x3d9)]={'rateHP':0x0,'flatHP':0x0,'rateMP':0x0,'flatMP':0x0,'gainTP':0x0,'selfTP':0x0,'addState':[],'removeState':[],'changeBuff':[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],'removeBuff':[],'removeDebuff':[],'addStateBuffChanges':![],'removeStateBuffChanges':![]};const _0x1d58ce=this['getItemEffects']();for(const _0xa28cf7 of _0x1d58ce){switch(_0xa28cf7[_0x4cd4fe(0x54c)]){case Game_Action[_0x4cd4fe(0x410)]:this[_0x4cd4fe(0x3d9)]['rateHP']+=_0xa28cf7[_0x4cd4fe(0x288)],this['_itemData'][_0x4cd4fe(0x57d)]+=_0xa28cf7['value2'],_0x137ca7=!![];break;case Game_Action[_0x4cd4fe(0x26b)]:this[_0x4cd4fe(0x3d9)][_0x4cd4fe(0x4f8)]+=_0xa28cf7[_0x4cd4fe(0x288)],this[_0x4cd4fe(0x3d9)]['flatMP']+=_0xa28cf7[_0x4cd4fe(0x540)],_0x137ca7=!![];break;case Game_Action[_0x4cd4fe(0x58f)]:this[_0x4cd4fe(0x3d9)][_0x4cd4fe(0x5c0)]+=_0xa28cf7[_0x4cd4fe(0x288)],_0x137ca7=!![];break;case Game_Action['EFFECT_ADD_STATE']:this['_itemData'][_0x4cd4fe(0x49d)][_0x4cd4fe(0x609)](_0xa28cf7[_0x4cd4fe(0x58e)]),_0x137ca7=!![];break;case Game_Action['EFFECT_REMOVE_STATE']:this[_0x4cd4fe(0x3d9)][_0x4cd4fe(0x4d9)]['push'](_0xa28cf7['dataId']),this[_0x4cd4fe(0x3d9)][_0x4cd4fe(0x5bc)]=!![],_0x137ca7=!![];break;case Game_Action[_0x4cd4fe(0x359)]:this[_0x4cd4fe(0x3d9)][_0x4cd4fe(0x565)][_0xa28cf7['dataId']]+=0x1,_0x137ca7=!![];break;case Game_Action[_0x4cd4fe(0x381)]:this[_0x4cd4fe(0x3d9)][_0x4cd4fe(0x565)][_0xa28cf7['dataId']]-=0x1,_0x137ca7=!![];break;case Game_Action[_0x4cd4fe(0x2eb)]:this[_0x4cd4fe(0x3d9)][_0x4cd4fe(0x497)]['push'](_0xa28cf7[_0x4cd4fe(0x58e)]),this['_itemData']['removeStateBuffChanges']=!![],_0x137ca7=!![];break;case Game_Action['EFFECT_REMOVE_DEBUFF']:this[_0x4cd4fe(0x3d9)][_0x4cd4fe(0x43b)]['push'](_0xa28cf7['dataId']),this[_0x4cd4fe(0x3d9)]['removeStateBuffChanges']=!![],_0x137ca7=!![];break;}}if(this[_0x4cd4fe(0x3d9)]['addState'][_0x4cd4fe(0x5fc)]>0x0)this[_0x4cd4fe(0x3d9)]['addStateBuffChanges']=!![];for(let _0x128cc6=0x0;_0x128cc6<this[_0x4cd4fe(0x3d9)]['changeBuff'][_0x4cd4fe(0x5fc)];_0x128cc6++){if(this[_0x4cd4fe(0x3d9)][_0x4cd4fe(0x565)][_0x128cc6]!==0x0)this[_0x4cd4fe(0x3d9)]['addStateBuffChanges']=!![];}this[_0x4cd4fe(0x4ea)]['tpGain']!==0x0&&(this[_0x4cd4fe(0x3d9)][_0x4cd4fe(0x3cd)]=this[_0x4cd4fe(0x4ea)][_0x4cd4fe(0x41d)],_0x137ca7=!![]);const _0x21e7b6=[_0x4cd4fe(0x286),_0x4cd4fe(0x314),_0x4cd4fe(0x584),_0x4cd4fe(0x4e9),_0x4cd4fe(0x2e1),_0x4cd4fe(0x53f),_0x4cd4fe(0x209),_0x4cd4fe(0x401),_0x4cd4fe(0x4f4)];for(const _0x41bde1 of _0x21e7b6){if(this['_customItemInfo'][_0x41bde1]){_0x137ca7=!![];break;}}return _0x137ca7;},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x321)]=function(_0x34361,_0x2bf8de,_0x311213){const _0x2879f=_0x26c4e1,_0x410741=_0x2879f(0x286);if(this['_itemData']['rateHP']<=0x0&&this[_0x2879f(0x3d9)]['flatHP']<=0x0&&!this[_0x2879f(0x469)][_0x410741])return![];const _0x3794de=this[_0x2879f(0x580)]();this[_0x2879f(0x266)](_0x3794de,_0x34361,_0x2bf8de,_0x311213,!![]);const _0x209877=this['getItemEffectsHpRecoveryText']();return this['changeTextColor'](ColorManager[_0x2879f(0x2d1)](0x1)),this[_0x2879f(0x266)](_0x209877,_0x34361,_0x2bf8de,_0x311213,![],_0x2879f(0x38c)),this[_0x2879f(0x43c)](_0x34361,_0x2bf8de,_0x311213),this[_0x2879f(0x277)](),!![];},Window_ShopStatus['prototype'][_0x26c4e1(0x580)]=function(){const _0x130bab=_0x26c4e1,_0x4ef7b7=VisuMZ[_0x130bab(0x582)][_0x130bab(0x3d7)][_0x130bab(0x501)][_0x130bab(0x5ef)];return _0x4ef7b7[_0x130bab(0x272)](TextManager['hp']);},Window_ShopStatus[_0x26c4e1(0x306)]['getItemEffectsHpRecoveryText']=function(){const _0x1000ba=_0x26c4e1,_0x486311=_0x1000ba(0x286);if(this['_customItemInfo'][_0x486311])return this['_customItemInfo'][_0x486311];let _0x34e9f8='';if(this[_0x1000ba(0x3d9)][_0x1000ba(0x34b)]>0x0)_0x34e9f8+=_0x1000ba(0x40c)[_0x1000ba(0x272)](Math[_0x1000ba(0x5b8)](this[_0x1000ba(0x3d9)][_0x1000ba(0x34b)]*0x64));if(this[_0x1000ba(0x3d9)][_0x1000ba(0x34b)]>0x0&&this[_0x1000ba(0x3d9)][_0x1000ba(0x57d)]>0x0)_0x34e9f8+='\x20';if(this[_0x1000ba(0x3d9)][_0x1000ba(0x57d)]>0x0)_0x34e9f8+='+%1'[_0x1000ba(0x272)](this[_0x1000ba(0x3d9)]['flatHP']);return _0x34e9f8;},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x614)]=function(_0x2393c5,_0x236a12,_0x41dcde){const _0x1b15b4=_0x26c4e1,_0x1dda90=_0x1b15b4(0x314);if(this[_0x1b15b4(0x3d9)][_0x1b15b4(0x4f8)]<=0x0&&this[_0x1b15b4(0x3d9)]['flatMP']<=0x0&&!this[_0x1b15b4(0x469)][_0x1dda90])return![];const _0x3611a3=this[_0x1b15b4(0x5d1)]();this[_0x1b15b4(0x266)](_0x3611a3,_0x2393c5,_0x236a12,_0x41dcde,!![]);const _0x59deeb=this[_0x1b15b4(0x507)]();return this['changeTextColor'](ColorManager[_0x1b15b4(0x2d1)](0x3)),this[_0x1b15b4(0x266)](_0x59deeb,_0x2393c5,_0x236a12,_0x41dcde,![],_0x1b15b4(0x38c)),this[_0x1b15b4(0x43c)](_0x2393c5,_0x236a12,_0x41dcde),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x26c4e1(0x306)]['getItemEffectsMpRecoveryLabel']=function(){const _0x266a41=_0x26c4e1,_0x3b5248=VisuMZ[_0x266a41(0x582)][_0x266a41(0x3d7)]['StatusWindow']['LabelRecoverMP'];return _0x3b5248[_0x266a41(0x272)](TextManager['mp']);},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x507)]=function(){const _0x458b76=_0x26c4e1,_0x3237d3=_0x458b76(0x314);if(this['_customItemInfo'][_0x3237d3])return this['_customItemInfo'][_0x3237d3];let _0x21e596='';if(this['_itemData'][_0x458b76(0x4f8)]>0x0)_0x21e596+=_0x458b76(0x40c)[_0x458b76(0x272)](Math[_0x458b76(0x5b8)](this[_0x458b76(0x3d9)][_0x458b76(0x4f8)]*0x64));if(this['_itemData'][_0x458b76(0x4f8)]>0x0&&this[_0x458b76(0x3d9)][_0x458b76(0x54a)]>0x0)_0x21e596+='\x20';if(this[_0x458b76(0x3d9)][_0x458b76(0x54a)]>0x0)_0x21e596+=_0x458b76(0x2a7)['format'](this[_0x458b76(0x3d9)][_0x458b76(0x54a)]);return _0x21e596;},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x2ba)]=function(_0x25b9c4,_0x35751e,_0x5141c8){const _0x548d2e=_0x26c4e1,_0x57ecf9='TP\x20RECOVERY';if(this[_0x548d2e(0x3d9)][_0x548d2e(0x5c0)]<=0x0&&!this['_customItemInfo'][_0x57ecf9])return![];const _0x26da2c=this[_0x548d2e(0x31c)]();this['drawItemKeyData'](_0x26da2c,_0x25b9c4,_0x35751e,_0x5141c8,!![]);const _0x3d8d3a=this['getItemEffectsTpRecoveryText']();return this['changeTextColor'](ColorManager[_0x548d2e(0x3b0)]()),this[_0x548d2e(0x266)](_0x3d8d3a,_0x25b9c4,_0x35751e,_0x5141c8,![],_0x548d2e(0x38c)),this[_0x548d2e(0x43c)](_0x25b9c4,_0x35751e,_0x5141c8),this[_0x548d2e(0x277)](),!![];},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x31c)]=function(){const _0x4da3c8=_0x26c4e1,_0x3bfc71=VisuMZ['ItemsEquipsCore']['Settings'][_0x4da3c8(0x501)][_0x4da3c8(0x525)];return _0x3bfc71[_0x4da3c8(0x272)](TextManager['tp']);},Window_ShopStatus['prototype'][_0x26c4e1(0x3db)]=function(){const _0x4437f3=_0x26c4e1,_0x1e4abc=_0x4437f3(0x584);if(this[_0x4437f3(0x469)][_0x1e4abc])return this['_customItemInfo'][_0x1e4abc];let _0x52456a='';return _0x52456a+=_0x4437f3(0x2a7)[_0x4437f3(0x272)](this[_0x4437f3(0x3d9)][_0x4437f3(0x5c0)]),_0x52456a;},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x4fa)]=function(_0x225400,_0x1b86df,_0x24201a){const _0x58a346=_0x26c4e1,_0x19d272=_0x58a346(0x209);if(this[_0x58a346(0x3d9)][_0x58a346(0x3cd)]===0x0&&!this[_0x58a346(0x469)][_0x19d272])return![];const _0x222a10=this[_0x58a346(0x2d8)]();this['drawItemKeyData'](_0x222a10,_0x225400,_0x1b86df,_0x24201a,!![]);const _0x1835e1=this[_0x58a346(0x4da)]();if(this[_0x58a346(0x3d9)][_0x58a346(0x3cd)]>0x0)this[_0x58a346(0x597)](ColorManager['powerUpColor']());else{if(_0x58a346(0x2c8)===_0x58a346(0x2c8))this['changeTextColor'](ColorManager['powerDownColor']());else{_0x1e5838=_0x4249fe[_0x58a346(0x1e6)](_0x4c211c||0x1,0x1);while(_0x3cc8bb--){_0x565fdc=_0x3362a6||this[_0x58a346(0x2bd)](),this[_0x58a346(0x5ac)][_0x58a346(0x5af)]=0xa0;const _0x5e2e91=_0x279aeb[_0x58a346(0x20b)]();this['contentsBack']['fillRect'](_0x457dc5+0x1,_0x5cfd8b+0x1,_0xaee432-0x2,_0x819284-0x2,_0x5e2e91),this[_0x58a346(0x5ac)]['paintOpacity']=0xff;}}}return this[_0x58a346(0x266)](_0x1835e1,_0x225400,_0x1b86df,_0x24201a,![],'right'),this[_0x58a346(0x43c)](_0x225400,_0x1b86df,_0x24201a),this[_0x58a346(0x277)](),!![];},Window_ShopStatus['prototype'][_0x26c4e1(0x2d8)]=function(){const _0x59e98f=_0x26c4e1,_0x291443=VisuMZ['ItemsEquipsCore']['Settings'][_0x59e98f(0x501)][_0x59e98f(0x481)];return _0x291443[_0x59e98f(0x272)](TextManager['tp']);},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x4da)]=function(){const _0x3e355d=_0x26c4e1,_0x433ea8=_0x3e355d(0x209);if(this[_0x3e355d(0x469)][_0x433ea8])return this['_customItemInfo'][_0x433ea8];let _0x4755e6='';if(this[_0x3e355d(0x3d9)][_0x3e355d(0x3cd)]>0x0){if(_0x3e355d(0x2d7)==='sFDkP')_0x4755e6+='+%1'[_0x3e355d(0x272)](this[_0x3e355d(0x3d9)][_0x3e355d(0x3cd)]);else return'#'+_0x4a36c3(_0xcc4e44['$1']);}else{if('lDXih'===_0x3e355d(0x4a5))_0x4755e6+='%1'[_0x3e355d(0x272)](this['_itemData']['selfTP']);else return _0x418a3a[_0x3e355d(0x582)][_0x3e355d(0x3d7)][_0x3e355d(0x501)][_0x3e355d(0x463)];}return _0x4755e6;},Window_ShopStatus['prototype']['drawItemEffectsHpDamage']=function(_0x160b7a,_0x3dd66b,_0x293815){const _0x56812d=_0x26c4e1,_0x5e11db=_0x56812d(0x4e9);if(this[_0x56812d(0x3d9)][_0x56812d(0x34b)]>=0x0&&this[_0x56812d(0x3d9)][_0x56812d(0x57d)]>=0x0&&!this['_customItemInfo'][_0x5e11db])return![];const _0x28d9ae=this[_0x56812d(0x4a6)]();this[_0x56812d(0x266)](_0x28d9ae,_0x160b7a,_0x3dd66b,_0x293815,!![]);const _0x58c4ae=this['getItemEffectsHpDamageText']();return this[_0x56812d(0x597)](ColorManager[_0x56812d(0x2d1)](0x0)),this[_0x56812d(0x266)](_0x58c4ae,_0x160b7a,_0x3dd66b,_0x293815,![],'right'),this[_0x56812d(0x43c)](_0x160b7a,_0x3dd66b,_0x293815),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x26c4e1(0x306)]['getItemEffectsHpDamageLabel']=function(){const _0x3d2699=_0x26c4e1,_0x2e45e0=VisuMZ['ItemsEquipsCore']['Settings'][_0x3d2699(0x501)][_0x3d2699(0x4d8)];return _0x2e45e0[_0x3d2699(0x272)](TextManager['hp']);},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x35b)]=function(){const _0x340fc2=_0x26c4e1,_0x5bf4db=_0x340fc2(0x4e9);if(this['_customItemInfo'][_0x5bf4db])return this[_0x340fc2(0x469)][_0x5bf4db];let _0xf005f0='';if(this['_itemData'][_0x340fc2(0x34b)]<0x0)_0xf005f0+='%1%'[_0x340fc2(0x272)](Math['floor'](this['_itemData'][_0x340fc2(0x34b)]*0x64));if(this[_0x340fc2(0x3d9)][_0x340fc2(0x34b)]<0x0&&this[_0x340fc2(0x3d9)][_0x340fc2(0x57d)]<0x0)_0xf005f0+='\x20';if(this[_0x340fc2(0x3d9)][_0x340fc2(0x57d)]<0x0)_0xf005f0+='%1'['format'](this[_0x340fc2(0x3d9)][_0x340fc2(0x57d)]);return _0xf005f0;},Window_ShopStatus[_0x26c4e1(0x306)]['drawItemEffectsMpDamage']=function(_0x4aeec8,_0x3e6576,_0x405859){const _0x2e0d4c=_0x26c4e1,_0x498220=_0x2e0d4c(0x2e1);if(this[_0x2e0d4c(0x3d9)][_0x2e0d4c(0x4f8)]>=0x0&&this[_0x2e0d4c(0x3d9)][_0x2e0d4c(0x54a)]>=0x0&&!this[_0x2e0d4c(0x469)][_0x498220])return![];const _0x2b36a4=this[_0x2e0d4c(0x2d9)]();this['drawItemKeyData'](_0x2b36a4,_0x4aeec8,_0x3e6576,_0x405859,!![]);const _0x554a4c=this['getItemEffectsMpDamageText']();return this[_0x2e0d4c(0x597)](ColorManager['damageColor'](0x2)),this[_0x2e0d4c(0x266)](_0x554a4c,_0x4aeec8,_0x3e6576,_0x405859,![],_0x2e0d4c(0x38c)),this[_0x2e0d4c(0x43c)](_0x4aeec8,_0x3e6576,_0x405859),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x2d9)]=function(){const _0x3089df=_0x26c4e1,_0x64a9e5=VisuMZ['ItemsEquipsCore'][_0x3089df(0x3d7)][_0x3089df(0x501)]['LabelDamageMP'];return _0x64a9e5[_0x3089df(0x272)](TextManager['mp']);},Window_ShopStatus[_0x26c4e1(0x306)]['getItemEffectsMpDamageText']=function(){const _0x3dd6a1=_0x26c4e1,_0x4c1ac5=_0x3dd6a1(0x2e1);if(this['_customItemInfo'][_0x4c1ac5])return this[_0x3dd6a1(0x469)][_0x4c1ac5];let _0x2bcd8d='';if(this[_0x3dd6a1(0x3d9)]['rateMP']<0x0)_0x2bcd8d+=_0x3dd6a1(0x2bc)['format'](Math[_0x3dd6a1(0x5b8)](this[_0x3dd6a1(0x3d9)]['rateMP']*0x64));if(this['_itemData']['rateMP']<0x0&&this[_0x3dd6a1(0x3d9)][_0x3dd6a1(0x54a)]<0x0)_0x2bcd8d+='\x20';if(this['_itemData'][_0x3dd6a1(0x54a)]<0x0)_0x2bcd8d+='%1'[_0x3dd6a1(0x272)](this[_0x3dd6a1(0x3d9)][_0x3dd6a1(0x54a)]);return _0x2bcd8d;},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x4c5)]=function(_0x505b30,_0xdc020a,_0x3a6830){const _0x289318=_0x26c4e1,_0x1b18ae=_0x289318(0x53f);if(this[_0x289318(0x3d9)][_0x289318(0x5c0)]>=0x0&&!this[_0x289318(0x469)][_0x1b18ae])return![];const _0x227944=this[_0x289318(0x1eb)]();this[_0x289318(0x266)](_0x227944,_0x505b30,_0xdc020a,_0x3a6830,!![]);const _0x11d001=this[_0x289318(0x561)]();return this['changeTextColor'](ColorManager[_0x289318(0x489)]()),this[_0x289318(0x266)](_0x11d001,_0x505b30,_0xdc020a,_0x3a6830,![],'right'),this[_0x289318(0x43c)](_0x505b30,_0xdc020a,_0x3a6830),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x26c4e1(0x306)]['getItemEffectsTpDamageLabel']=function(){const _0x2b57c5=_0x26c4e1,_0x5780ba=VisuMZ[_0x2b57c5(0x582)]['Settings']['StatusWindow'][_0x2b57c5(0x252)];return _0x5780ba[_0x2b57c5(0x272)](TextManager['tp']);},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x561)]=function(){const _0x168625=_0x26c4e1,_0x41d3dc='TP\x20DAMAGE';if(this[_0x168625(0x469)][_0x41d3dc])return this[_0x168625(0x469)][_0x41d3dc];let _0x34dfbc='';return _0x34dfbc+='%1'[_0x168625(0x272)](this['_itemData'][_0x168625(0x5c0)]),_0x34dfbc;},Window_ShopStatus['prototype'][_0x26c4e1(0x4b1)]=function(_0x11f095,_0x382742,_0x515cf9){const _0x7a76c9=_0x26c4e1,_0x5e090d='ADDED\x20EFFECTS';if(!this[_0x7a76c9(0x3d9)][_0x7a76c9(0x52c)]&&!this['_customItemInfo'][_0x5e090d])return![];const _0xc84767=this[_0x7a76c9(0x40d)]();this['drawItemKeyData'](_0xc84767,_0x11f095,_0x382742,_0x515cf9,!![]);const _0x585f71=this[_0x7a76c9(0x221)]();return this[_0x7a76c9(0x266)](_0x585f71,_0x11f095,_0x382742,_0x515cf9,![],_0x7a76c9(0x38c)),this['drawItemDarkRect'](_0x11f095,_0x382742,_0x515cf9),this[_0x7a76c9(0x277)](),!![];},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x40d)]=function(){const _0x151fed=_0x26c4e1;return VisuMZ[_0x151fed(0x582)][_0x151fed(0x3d7)][_0x151fed(0x501)]['LabelApply'];},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x221)]=function(){const _0x5b9892=_0x26c4e1,_0x2760ff=_0x5b9892(0x401);if(this['_customItemInfo'][_0x2760ff])return this[_0x5b9892(0x469)][_0x2760ff];let _0x143739='',_0xab58c3=0x0;const _0x4256ec=0x8;for(const _0x465f15 of this['_itemData'][_0x5b9892(0x49d)]){if('COmIJ'!=='EcDmF'){const _0x30715d=$dataStates[_0x465f15];if(_0x30715d&&_0x30715d[_0x5b9892(0x2b1)]>0x0){_0x143739+=_0x5b9892(0x2ec)['format'](_0x30715d[_0x5b9892(0x2b1)]),_0xab58c3++;if(_0xab58c3>=_0x4256ec)return _0x143739;}}else return _0x2fd9a1[_0x5b9892(0x1ec)]&&_0x2c26e8[_0x5b9892(0x3c1)][_0x5b9892(0x3b2)]('['+_0x24e9db+']');}for(let _0x1cb8ef=0x0;_0x1cb8ef<this[_0x5b9892(0x3d9)]['changeBuff'][_0x5b9892(0x5fc)];_0x1cb8ef++){const _0x430660=this[_0x5b9892(0x3d9)]['changeBuff'][_0x1cb8ef],_0x25fbf0=Game_BattlerBase[_0x5b9892(0x306)][_0x5b9892(0x4a2)](_0x430660,_0x1cb8ef);if(_0x25fbf0>0x0){if(_0x5b9892(0x25a)===_0x5b9892(0x25a)){_0x143739+=_0x5b9892(0x2ec)[_0x5b9892(0x272)](_0x25fbf0),_0xab58c3++;if(_0xab58c3>=_0x4256ec)return _0x143739;}else{if(this['buttonAssistItemListRequirement']())return _0x4cfbf7['ItemsEquipsCore'][_0x5b9892(0x3d7)]['ItemScene']['buttonAssistCategory'];return _0x276209[_0x5b9892(0x306)]['buttonAssistText1'][_0x5b9892(0x2e2)](this);}}}return _0x143739;},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x214)]=function(_0x2ded0f,_0x54d053,_0x28f5e){const _0x15014c=_0x26c4e1,_0x5a023c=_0x15014c(0x4f4);if(!this[_0x15014c(0x3d9)][_0x15014c(0x5bc)]&&!this[_0x15014c(0x469)][_0x5a023c])return![];const _0x432055=this['getItemEffectsRemovedStatesBuffsLabel']();this[_0x15014c(0x266)](_0x432055,_0x2ded0f,_0x54d053,_0x28f5e,!![]);const _0x2c38ea=this[_0x15014c(0x308)]();return this[_0x15014c(0x266)](_0x2c38ea,_0x2ded0f,_0x54d053,_0x28f5e,![],'right'),this[_0x15014c(0x43c)](_0x2ded0f,_0x54d053,_0x28f5e),this[_0x15014c(0x277)](),!![];},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x47f)]=function(){const _0x41775d=_0x26c4e1;return VisuMZ[_0x41775d(0x582)]['Settings']['StatusWindow'][_0x41775d(0x32b)];},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x308)]=function(){const _0x2d5b72=_0x26c4e1,_0x1fe807=_0x2d5b72(0x4f4);if(this['_customItemInfo'][_0x1fe807])return this[_0x2d5b72(0x469)][_0x1fe807];let _0x22d488='',_0x4cb6b5=0x0;const _0xa1404e=VisuMZ[_0x2d5b72(0x582)]['Settings']['StatusWindow'][_0x2d5b72(0x45b)];for(const _0x352915 of this[_0x2d5b72(0x3d9)]['removeState']){const _0x28d911=$dataStates[_0x352915];if(_0x28d911&&_0x28d911[_0x2d5b72(0x2b1)]>0x0){if(_0x2d5b72(0x3d6)!==_0x2d5b72(0x3d6))_0x375920[_0x2d5b72(0x306)]['resetFontSettings'][_0x2d5b72(0x2e2)](this),this[_0x2d5b72(0x3ab)][_0x2d5b72(0x2f9)]=this[_0x2d5b72(0x545)]||this[_0x2d5b72(0x3ab)][_0x2d5b72(0x2f9)],this[_0x2d5b72(0x3ab)][_0x2d5b72(0x454)]=this[_0x2d5b72(0x41c)]||this[_0x2d5b72(0x3ab)]['textColor'];else{_0x22d488+=_0x2d5b72(0x2ec)[_0x2d5b72(0x272)](_0x28d911['iconIndex']),_0x4cb6b5++;if(_0x4cb6b5>=_0xa1404e)return _0x22d488;}}}for(let _0x59d0c3=0x0;_0x59d0c3<this[_0x2d5b72(0x3d9)][_0x2d5b72(0x497)][_0x2d5b72(0x5fc)];_0x59d0c3++){const _0x1204bd=Game_BattlerBase[_0x2d5b72(0x306)][_0x2d5b72(0x4a2)](0x1,_0x59d0c3);if(_0x1204bd>0x0){_0x22d488+='\x5cI[%1]'['format'](_0x1204bd),_0x4cb6b5++;if(_0x4cb6b5>=_0xa1404e)return _0x22d488;}}for(let _0x10d43f=0x0;_0x10d43f<this[_0x2d5b72(0x3d9)][_0x2d5b72(0x43b)][_0x2d5b72(0x5fc)];_0x10d43f++){const _0x449d50=Game_BattlerBase[_0x2d5b72(0x306)][_0x2d5b72(0x4a2)](-0x1,_0x10d43f);if(_0x449d50>0x0){_0x22d488+=_0x2d5b72(0x2ec)[_0x2d5b72(0x272)](_0x449d50),_0x4cb6b5++;if(_0x4cb6b5>=_0xa1404e)return _0x22d488;}}return _0x22d488;},Window_ShopStatus['prototype']['drawItemCustomEntries']=function(_0x286620,_0xa1aab5,_0x5313b1){const _0x1291ce=_0x26c4e1;if(this[_0x1291ce(0x4ea)]['note']['match'](/<CUSTOM STATUS INFO>\s*([\s\S]*)\s*<\/CUSTOM STATUS INFO>/i)){const _0x539aab=String(RegExp['$1'])['split'](/[\r\n]+/);for(const _0x24f844 of _0x539aab){if(_0x24f844[_0x1291ce(0x318)](/(.*):[ ](.*)/i)){const _0x246cd2=String(RegExp['$1'])[_0x1291ce(0x5b1)](),_0x48839e=String(RegExp['$2'])[_0x1291ce(0x5b1)]();this['drawItemCustomEntryLine'](_0x246cd2,_0x48839e,_0x286620,_0xa1aab5,_0x5313b1),_0xa1aab5+=this[_0x1291ce(0x2bd)]();}}}return this[_0x1291ce(0x277)](),_0xa1aab5;},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x560)]=function(_0x2b979c,_0x50dcb2,_0x109aa3,_0x2e662a,_0x2612f2){const _0x21c8f4=_0x26c4e1;this[_0x21c8f4(0x266)](_0x2b979c,_0x109aa3,_0x2e662a,_0x2612f2,!![]),this[_0x21c8f4(0x266)](_0x50dcb2,_0x109aa3,_0x2e662a,_0x2612f2,![],_0x21c8f4(0x38c)),this[_0x21c8f4(0x43c)](_0x109aa3,_0x2e662a,_0x2612f2),this['resetFontSettings']();},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x3de)]=function(){const _0x17ac0f=_0x26c4e1;if(!this[_0x17ac0f(0x4ea)])return;const _0x163701=this[_0x17ac0f(0x4ea)][_0x17ac0f(0x291)],_0x4a7a20=/<SHOP (?:PICTURE|IMAGE|PICTURE NAME|PICTURE FILENAME|IMAGE NAME|IMAGE FILENAME):[ ](.*)>/gi,_0x427554=_0x163701[_0x17ac0f(0x318)](_0x4a7a20);if(_0x427554){if(_0x17ac0f(0x5ae)!==_0x17ac0f(0x34c))for(const _0xb32087 of _0x427554){_0xb32087[_0x17ac0f(0x318)](_0x4a7a20);const _0x47c1dd=String(RegExp['$1'])[_0x17ac0f(0x5b1)]()||'';if(_0x47c1dd==='')continue;const _0x41d235=ImageManager[_0x17ac0f(0x4db)](_0x47c1dd);_0x41d235[_0x17ac0f(0x4e5)](this['drawCustomShopGraphicLoad'][_0x17ac0f(0x519)](this,_0x41d235,this[_0x17ac0f(0x4ea)]));}else{const _0x471312='QUANTITY';if(this[_0x17ac0f(0x469)][_0x471312])return this[_0x17ac0f(0x469)][_0x471312];const _0x104e61=_0x2f9c8d[_0x17ac0f(0x582)][_0x17ac0f(0x3d7)][_0x17ac0f(0x411)][_0x17ac0f(0x491)];return _0x104e61[_0x17ac0f(0x272)](_0x45e536[_0x17ac0f(0x4c9)](this[_0x17ac0f(0x4ea)]));}}},Window_ShopStatus[_0x26c4e1(0x306)][_0x26c4e1(0x4be)]=function(_0x455250,_0x9c1867){const _0x41c30f=_0x26c4e1;if(this[_0x41c30f(0x4ea)]!==_0x9c1867)return;if(!_0x455250)return;if(_0x455250[_0x41c30f(0x22c)]<=0x0||_0x455250[_0x41c30f(0x27e)]<=0x0)return;const _0x5aad7f=_0x9c1867[_0x41c30f(0x291)];let _0x360c3e='background';_0x5aad7f[_0x41c30f(0x318)](/<SHOP (?:PICTURE|IMAGE) LAYER:[ ]FOREGROUND>/i)&&(_0x360c3e='foreground');const _0xe74e88=_0x360c3e===_0x41c30f(0x49f)?this[_0x41c30f(0x5ac)]:this[_0x41c30f(0x3ab)];let _0x761a5=this['innerWidth'],_0x10152d=this[_0x41c30f(0x488)];_0x5aad7f[_0x41c30f(0x318)](/<SHOP (?:PICTURE|IMAGE) MAX WIDTH:[ ](\d+)>/i)&&(_0x761a5=Number(RegExp['$1']));_0x5aad7f[_0x41c30f(0x318)](/<SHOP (?:PICTURE|IMAGE) MAX HEIGHT:[ ](\d+)>/i)&&(_0x10152d=Number(RegExp['$1']));_0x5aad7f[_0x41c30f(0x318)](/<SHOP (?:PICTURE|IMAGE) MAX DIMENSIONS:[ ](\d+),[ ]*(\d+)>/i)&&(_0x761a5=Number(RegExp['$1']),_0x10152d=Number(RegExp['$2']));const _0x18f192=Math['min'](0x1,_0x761a5/_0x455250[_0x41c30f(0x22c)],_0x10152d/_0x455250[_0x41c30f(0x27e)]);let _0x1a40cd=0x0,_0xfcd7f5=0x0,_0x64cfc1=Math['floor'](_0x455250[_0x41c30f(0x22c)]*_0x18f192),_0xbafffd=Math['floor'](_0x455250[_0x41c30f(0x27e)]*_0x18f192),_0x114a0b=_0x41c30f(0x312);if(_0x5aad7f[_0x41c30f(0x318)](/<SHOP (?:PICTURE|IMAGE) (?:ALIGN|ALIGNMENT):[ ](LEFT|CENTER|RIGHT)>/i)){if('pAsFB'===_0x41c30f(0x3f3)){if(this[_0x41c30f(0x608)](_0x1ae4a8))return _0x49351f[_0x41c30f(0x582)][_0x41c30f(0x3d7)][_0x41c30f(0x411)][_0x41c30f(0x60f)];else{if(this['isWeapon'](_0x2411e0))return _0x5c83ee[_0x41c30f(0x582)]['Settings'][_0x41c30f(0x411)]['MaxWeapons'];else{if(this[_0x41c30f(0x396)](_0x3b0eb4))return _0x58d5e4['ItemsEquipsCore'][_0x41c30f(0x3d7)][_0x41c30f(0x411)][_0x41c30f(0x231)];}}}else _0x114a0b=String(RegExp['$1'])['toLowerCase']()[_0x41c30f(0x5b1)]();}if(_0x114a0b==='left')_0x41c30f(0x471)!=='nrdSq'?this[_0x41c30f(0x32a)]=[]:_0x1a40cd=0x0;else{if(_0x114a0b===_0x41c30f(0x312)){if('hsgAG'==='OTjCE')return _0x43762a[_0x41c30f(0x582)][_0x41c30f(0x3d7)]['StatusWindow'][_0x41c30f(0x32b)];else _0x1a40cd=Math[_0x41c30f(0x371)]((this[_0x41c30f(0x453)]-_0x64cfc1)/0x2);}else _0x1a40cd=this[_0x41c30f(0x453)]-_0x64cfc1;}let _0x262e92=_0x41c30f(0x4c6);_0x5aad7f['match'](/<SHOP (?:PICTURE|IMAGE) POSITION:[ ](TOP|MIDDLE|BOTTOM)>/i)&&(_0x262e92=String(RegExp['$1'])[_0x41c30f(0x4fc)]()[_0x41c30f(0x5b1)]());if(_0x262e92===_0x41c30f(0x293))_0xfcd7f5=0x0;else{if(_0x262e92==='middle'){if(_0x41c30f(0x37a)!==_0x41c30f(0x5ba))_0xfcd7f5=Math[_0x41c30f(0x371)]((this['innerHeight']-_0xbafffd)/0x2);else{const _0x2e3136=_0x1a02de[_0x41c30f(0x582)][_0x41c30f(0x3d7)]['StatusWindow'][_0x41c30f(0x596)];return _0x2e3136[_0x41c30f(0x272)](_0x2e301b['mp']);}}else _0xfcd7f5=this['innerHeight']-_0xbafffd;}_0x5aad7f[_0x41c30f(0x318)](/<SHOP (?:PICTURE|IMAGE) OFFSET X:[ ]([\+\-]\d+)>/i)&&(_0x1a40cd+=Number(RegExp['$1']));if(_0x5aad7f[_0x41c30f(0x318)](/<SHOP (?:PICTURE|IMAGE) OFFSET Y:[ ]([\+\-]\d+)>/i)){if(_0x41c30f(0x3ba)!==_0x41c30f(0x326))_0xfcd7f5+=Number(RegExp['$1']);else return this[_0x41c30f(0x1f7)]()?this[_0x41c30f(0x2db)]():_0x4b377b['ItemsEquipsCore'][_0x41c30f(0x2c2)][_0x41c30f(0x2e2)](this);}_0x5aad7f[_0x41c30f(0x318)](/<SHOP (?:PICTURE|IMAGE) OFFSET:[ ]([\+\-]\d+),[ ]*([\+\-]\d+)>/i)&&(_0x1a40cd+=Number(RegExp['$1']),_0xfcd7f5+=Number(RegExp['$2']));let _0x176bdc=0xff;if(_0x5aad7f['match'](/<SHOP (?:PICTURE|IMAGE) OPACITY:[ ](\d+)>/i)){if(_0x41c30f(0x237)===_0x41c30f(0x237))_0x176bdc=Number(RegExp['$1']);else return this[_0x41c30f(0x426)]?this[_0x41c30f(0x426)][_0x41c30f(0x5fc)]:0x3;}else _0x5aad7f['match'](/<SHOP (?:PICTURE|IMAGE) OPACITY:[ ](\d+)([%％])>/i)&&(_0x176bdc=Math['round'](Number(RegExp['$1'])*0.01*0xff)[_0x41c30f(0x2bb)](0x0,0xff));_0xe74e88[_0x41c30f(0x5af)]=_0x176bdc,_0xe74e88[_0x41c30f(0x2c1)](_0x455250,0x0,0x0,_0x455250[_0x41c30f(0x22c)],_0x455250['height'],_0x1a40cd,_0xfcd7f5,_0x64cfc1,_0xbafffd),_0xe74e88[_0x41c30f(0x5af)]=0xff;};