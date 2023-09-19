//=============================================================================
// VisuStella MZ - Items & Equips Core
// VisuMZ_1_ItemsEquipsCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_ItemsEquipsCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ItemsEquipsCore = VisuMZ.ItemsEquipsCore || {};
VisuMZ.ItemsEquipsCore.version = 1.28;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.28] [ItemsEquipsCore]
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
 * with using the Left/Right (for singul column) or Page Up/Page Down (for
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

const _0x59b1=['mainAreaBottom','pagedown','mrVtw','mainCommandWidth','loadPicture','activate','BjlSE','Window_EquipItem_includes','drawActorCharacter','LabelRepeats','QhZIt','numberWindowRect','processCursorMove','EBvTX','RegularItems','WzaQV','isSoleWeaponType','ActorChangeEquipSlots','RFovp','Scene_Item_createItemWindow','getItemSuccessRateText','helpWindowRectItemsEquipsCore','isRightInputMode','?????','fill','_handlers','isItem','isHovered','RegExp','createCommandNameWindow','GYZQH','PxeIM','xnAMy','Scene_Shop_sellWindowRect','TP\x20DAMAGE','\x5cI[%1]%2','_scene','OoSZY','getItemSuccessRateLabel','show','isSellCommandEnabled','_shopStatusMenuMode','LabelDamageHP','version','SwitchID','iIucJ','Scene_Shop_onBuyCancel','processTouchModernControls','JOOpO','exit','gaugeLineHeight','HiddenItemA','changeEquip','MuNLC','drawItemStyleIcon','SwitchSell','%1-%2','ERMbo','Scene_Item_itemWindowRect','postCreateSellWindowItemsEquipsCore','Window_Selectable_setHelpWindowItem','_tempActorA','ElementWeapon','floor','poPHd','dataId','uleTY','ADAxl','vttrC','getItemsEquipsCoreBackColor1','AllWeapons','getItemEffectsHpRecoveryLabel','chWRS','Speed1','EFFECT_ADD_STATE','drawNewLabelIcon','IncludeShopItem','100%','categoryItemTypes','ELEMENT','nonRemovableEtypes','isDrawItemNumber','gWExU','maxBattleMembers','Nonconsumable','getItemEffectsTpRecoveryText','slotWindowRectItemsEquipsCore','EFFECT_GAIN_TP','_category','Yauhg','_data','onTouchCancel','drawItemEffects','isBottomHelpMode','isOptimizeEquipOk','%1%','addSellCommand','processShiftRemoveShortcut','_buyWindow','getItemScopeText','isOpenAndActive','1483hdrmmU','CommandAddOptimize','_tempActor','_itemData','getItemEffectsRemovedStatesBuffsLabel','getItemSpeedText','_commandWindow','drawItemSpeed','helpWindowRect','currencyUnit','value','OCCASION','innerHeight','cancel','SitNV','jhyxf','_statusWindow','BeVUz','makeItemData','iconText','Step1Start','activateItemWindow','CmdIconSell','dOmZO','isNewItem','BuyPriceJS','changeTextColor','getInputMultiButtonStrings','zOMeI','Scene_Equip_itemWindowRect','_shopStatusMenuAlly','InLsw','playCursorSound','getItemEffects','Window_ItemCategory_setItemWindow','updateChangedSlots','buffIconIndex','isEnabled','categoryStyle','Speed0','KMsRu','isEquipped','isCommandEnabled','ZZuDY','ItemScene','ScopeRandomAny','StatusWindowWidth','UPbEw','iconIndex','updatedLayoutStyle','process_VisuMZ_ItemsEquipsCore_EquipSlots','initNewItemsList','BackRectColor','auto','riccv','mpRate','DEF','WviAL','addInnerChild','value1','\x5cI[%1]','quRIF','QwbfZ','vNWeO','hideDisabledCommands','isEquipCommandAdded','clamp','eJpsM','Gdlkd','getItemDamageElementLabel','commandBuy','newLabelEnabled','onBuyCancelItemsEquipsCore','rGRVN','rQkzx','initNewLabelSprites','isBattleTest','process_VisuMZ_ItemsEquipsCore_RegExp','move','(%1)','xyOcJ','resetFontSettings','MaxIcons','_goodsCount','setNewItem','getItemEffectsAddedStatesBuffsText','drawTextEx','ldWAc','EFFECT_RECOVER_HP','flatHP','commandStyle','refreshCursor','onBuyCancel','adjustHiddenShownGoods','MDF','ixgFu','statusWindowRect','onSlotOkAutoSelect','drawItemEffectsAddedStatesBuffs','UQhFR','DdEHi','prepareNextScene','EVKhF','initEquips','LabelDamageMP','itemDataFontSize','getDamageStyle','drawItemEffectsRemovedStatesBuffs','fcOoM','smallParamFontSize','isSceneShop','NUM','drawParamsItemsEquipsCore','createSellWindow','BattleUsable','_sellWindow','isUseItemsEquipsCoreUpdatedLayout','optimizeEquipments','yCvfY','sTrjc','createBitmap','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20MaxHP\x20=\x200;\x20let\x20MaxMP\x20=\x200;\x20let\x20ATK\x20=\x200;\x20let\x20DEF\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20MAT\x20=\x200;\x20let\x20MDF\x20=\x200;\x20let\x20AGI\x20=\x200;\x20let\x20LUK\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20[MaxHP,\x20MaxMP,\x20ATK,\x20DEF,\x20MAT,\x20MDF,\x20AGI,\x20LUK][paramId];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','RZxXT','pITDl','Enable','ARRAYEVAL','_categoryNameWindow','FontColor','isCursorMovable','onTouchSelectModern','Window_ShopBuy_refresh','processDrawIcon','canEquip','isHoverEnabled','LTZbV','clear','shouldCommandWindowExist','onTouchOk','buttonAssistCategory','innerWidth','numItems','648863RzhBFE','xxYJo','determineBaseSellingPrice','EVAL','WdUxw','268463JNHfRf','maxCols','drawParamName','getItemDamageElementText','CoreEngine','clearNewLabelFromItem','ParamValueFontSize','WWswR','width','itemTextAlign','fontSize','helpAreaTop','previousActor','YUsUL','Scene_Shop_createSellWindow','onTouchSelectModernControls','commandName','_buyWindowLastIndex','HyTPU','round','commandNameWindowCenter','opacity','itVsw','MP\x20DAMAGE','systemColor','buyWindowRectItemsEquipsCore','ALhZo','gpRbC','RrGgq','Window_ItemList_updateHelp','rOucC','EFFECT_REMOVE_STATE','OCWKi','armorTypes','EFFECT_REMOVE_DEBUFF','textSizeEx','BatchShop','ozkMT','Categories','mvzYe','_itemWindow','Param','Scene_Equip_statusWindowRect','tyzBR','rateMP','drawItemScope','Scene_Shop_onSellOk','commandWindowRectItemsEquipsCore','ConvertParams','LabelDamageTP','goldWindowRect','NoChangeMarker','mhp','edqyP','XsfjW','_resetFontColor','geUpdatedLayoutStatusWidth','lLYFW','equip2','QQIdJ','isClearEquipOk','match','_newLabelOpacityChange','makeDeepCopy','getItemHitTypeText','commandNameWindowDrawBackground','XTiIi','maxItemAmount','gZOTG','QUANTITY','addChild','drawItemCustomEntryLine','max','buttonAssistSmallIncrement','lUURb','equipAdjustHpMp','drawText','Scene_Shop_commandWindowRect','createCategoryWindow','scope','getItemDamageAmountLabelBattleCore','uCoNm','canShiftRemoveEquipment','getColor','changeBuff','loadSystem','EquipScene','_newItemsList','atypeId','paramchangeTextColor','ParseClassNotetags','IbLqD','AbQEi','getItemEffectsSelfTpGainLabel','SrXXH','rauGQ','_bypassNewLabel','itemEnableJS','HiddenItemB','Step3Start','buttonAssistKey3','GAxrq','Game_Actor_discardEquip','pageup','characterName','Scene_Equip_createSlotWindow','isDualWield','canConsumeItem','XWOIM','Step2End','tradeItemWithParty','drawCustomShopGraphicLoad','possession','commandSell','nFVTL','wjaVQ','VIbWs','FadeSpeed','smQbh','goldWindowRectItemsEquipsCore','drawItemDamage','setValue','description','fWNNn','Step2Start','RhCFr','getItemColor','nMRGq','drawActorParamDifference','drawItemOccasion','normalColor','getItemRepeatsText','removeState','values','ItemQuantityFontSize','ROtur','buqMa','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20enabled\x20=\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20enabled;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','VonNL','SwitchBuy','PQPAy','itemHasEquipLimit','getItemEffectsMpDamageText','drawItemDamageElement','onCategoryOk','doSell','Consumable','drawItem','MIFHl','drawItemNumber','buttonAssistSlotWindowShift','hLnSJ','APAQK','_newLabelSprites','toUpperCase','drawItemEffectsHpRecovery','remove','numberWindowRectItemsEquipsCore','revertGlobalNamespaceVariables','Scene_Shop_createCategoryWindow','toLowerCase','mIenU','NyjLo','TBQPk','loadFaceImages','RemoveEquipText','sPAAK','prepareRefreshItemsEquipsCoreLayout','weapon-%1','down','JSON','commandSellItemsEquipsCore','cVZHC','blt','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','removeBuff','SPEED','Style','eRdLo','hpRate','indexOf','item','paintOpacity','_tempActorB','YZeDR','vqVgK','currentExt','log','ITHhn','maxVisibleItems','isPressed','price','isRepeated','getItemDamageAmountTextOriginal','AllItems','updateCommandNameWindow','eNltk','_equips','createSlotWindow','name','textWidth','categories','versionId','addCancelCommand','gainItem','prepareItemCustomData','keyItem','_purchaseOnly','MP\x20RECOVERY','#%1','EquipParams','sellPriceRate','IconSet','aaqFT','DrawEquipData','mainFontSize','KeyItems','wBTTA','DhXfP','JtrWS','DAMAGE\x20MULTIPLIER','clearNewItem','changePaintOpacity','Nrzda','NonRemoveETypes','SellPriceJS','Scene_Equip_onActorChange','LabelRecoverHP','Damage\x20Formula\x20Error\x20for\x20%1','aAyUw','setItem','gAQoX','paramId','ATK','powerDownColor','SellPriceRate','isSoleArmorType','_commandNameWindow','W%1','getItemEffectsHpRecoveryText','addBuyCommand','vdIwu','create','defaultItemMax','DrawParamJS','JNFlc','_customItemInfo','YzUVX','currentSymbol','oudgP','ARRAYSTRUCT','getItemHitTypeLabel','Scene_Shop_doSell','Game_Actor_tradeItemWithParty','split','refresh','oGJnZ','cursorDown','getItemQuantityText','getItemSpeedLabel','Pcfdi','_slotId','TdlUj','gainTP','createNewLabelSprite','addLoadListener','_newLabelOpacityUpperLimit','SpeedNeg1999','getItemRepeatsLabel','drawItemActorMenuImage','NBgUU','wlgID','HP\x20DAMAGE','removeStateBuffChanges','sellWindowRectItemsEquipsCore','statusWidth','AGI','optKeyItemsNumber','updateHelp','pfQKI','buttonAssistKey2','hide','categoryWindowRectItemsEquipsCore','drawItemKeyData','FontFace','changeEquipById','Game_Actor_forceChangeEquip','kkdlM','_numberWindow','getItemEffectsTpDamageText','isGoodShown','whzZG','VisuMZ_1_BattleCore','onSellCancel','drawItemName','getInputButtonString','battleMembers','drawIcon','LQnLF','isShowNew','powerUpColor','SYInB','getItemEffectsHpDamageLabel','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','isShiftRemoveShortcutEnabled','NJaxW','zOcZX','getItemDamageAmountTextBattleCore','EScsS','isWeapon','aonlN','discardEquip','isPageChangeRequested','A%1','isShiftShortcutKeyForRemove','Game_Actor_paramPlus','drawItemEffectsHpDamage','whQpP','setHp','CmdIconCancel','onTouchSelect','drawItemEffectsMpRecovery','parameters','_categoryWindow','itemWindowRectItemsEquipsCore','IMHDY','1OIXezv','_buttonAssistWindow','AAjto','slotWindowRect','pmWAu','234254MJOAes','isTriggered','jGEpP','members','iconHeight','LayoutStyle','DrawBackRect','shift','deactivate','LGYZX','ItemsEquipsCore','FWMPe','weaponTypes','LabelSpeed','ONQXz','object','KeyItemProtect','uiHelpPosition','registerCommand','loadCharacter','ParseItemNotetags','WUNVa','consumable','ParamChangeFontSize','Scene_Equip_commandWindowRect','MaxMP','clearEquipments','PoESY','setShopStatusWindowMode','GZzMN','flatMP','equip','isBuyCommandEnabled','Scene_Equip_onSlotCancel','armor','drawPossession','FdlKt','Scene_Shop_categoryWindowRect','tpGain','tqvLn','NeverUsable','categoryStyleCheck','cursorUp','refreshItemsEquipsCoreNoMenuImage','itemAt','constructor','Type','prepareNewEquipSlotsOnLoad','onSellOkItemsEquipsCore','1sJwHve','updateMoneyAmount','cQDxO','UUfFJ','equipSlots','process_VisuMZ_ItemsEquipsCore_Notetags','format','armor-%1','mXfUt','postCreateItemsEquipsCore','Text','commandBuyItemsEquipsCore','323521aAaTxa','isEquipChangeOk','hCGJX','Icon','forceResetEquipSlots','Scene_Equip_commandEquip','onActorChange','lineHeight','Scene_Item_createCategoryWindow','resetTextColor','PStXP','rHUcG','Scene_Equip_create','commandNameWindowDrawText','gtClq','reloadMapIfUpdated','CmdStyle','sell','ItemMenuStatusRect','nuiEq','commandEquip','Scene_Shop_statusWindowRect','LabelConsume','EnableLayout','Scene_Shop_buyWindowRect','drawNewLabelText','processHandling','addStateBuffChanges','VisuMZ_0_CoreEngine','isPlaytest','TVSvp','bfzAJ','Scene_ItemBase_activateItemWindow','isEquipItem','forceChangeEquip','drawItemStyleIconText','dpqdI','allowCreateStatusWindow','Itqpn','ScopeRandomAllies','getItemOccasionText','smoothScrollTo','atk','ScopeRandomEnemies','+%1%','createItemWindow','Step1End','MaxHP','updateCategoryNameWindow','ADDED\x20EFFECTS','Pdpes','drawEquipData','Parse_Notetags_Category','index','makeCommandList','Parse_Notetags_Batch','etypeId','elementId','hideAdditionalSprites','DrawPortraitJS','Scene_Shop_commandBuy','isOpen','categoryNameWindowDrawText','repeats','mBTrO','actor','playOkSound','HEECP','setHelpWindowItem','center','isCancelled','value2','Game_Party_initialize','New','commandStyleCheck','prototype','eiDMQ','ShiftShortcutKey','xVdVF','trim','0000','HhEjv','SpeedNeg999','onCategoryCancel','includes','Scene_Shop_prepare','GmKPR','ZKDFB','right','uJKne','callUpdateHelp','drawItemHitType','_newLabelOpacity','drawItemCustomEntries','mxyRn','buttonAssistKey1','processCursorHomeEndTrigger','paramPlus','jaIKe','categoryNameWindowDrawBackground','checkItemConditionsSwitchNotetags','FadeLimit','onDatabaseLoaded','Scene_Equip_slotWindowRect','map','Scene_Shop_onCategoryCancel','ParseArmorNotetags','equipSlotIndex','DrawIcons','getItemEffectsMpRecoveryLabel','USER\x20TP\x20GAIN','selfTP','_goods','oRkme','CmdIconClear','Scope%1','paramPlusItemsEquipsCoreCustomJS','Scene_Boot_onDatabaseLoaded','forceChangeEquipSlots','calcWindowHeight','addClearCommand','Scene_Shop_create','Settings','param','active','note','Scene_Shop_commandSell','_money','params','addCommand','update','buttonAssistOffset3','EGdzx','nIjvk','Game_Actor_changeEquip','vSAUV','getItemDamageAmountLabelOriginal','getMenuImage','_actor','getItemDamageAmountLabel','UIfvw','_item','hSRiS','maxItems','Parse_Notetags_ParamJS','uEabo','removeDebuff','ARRAYNUM','getNextAvailableEtypeId','deselect','Scene_Item_create','nextActor','rvKXc','call','releaseUnequippableItems','isMainMenuCoreMenuImageOptionAvailable','DzZMF','parse','1Dckrlp','Actors','ShopMenuStatusStandard','buttonAssistText2','updateNewLabelOpacity','buttonAssistLargeIncrement','meetsItemConditionsJS','buy','buttonAssistText3','adjustItemWidthByStatus','yLjkx','meetsItemConditionsNotetags','categoryNameWindowCenter','_forcedSlots','replace','actorParams','_resetFontSize','qOSye','IXTKu','ItemMenuStatusBgType','doBuy','NgDoa','NwdxR','Parse_Notetags_EnableJS','SLNaz','DamageType%1','setupItemDamageTempActors','LabelApply','SCOPE','lybjX','Window_ItemList_colSpacing','_dummyWindow','addState','Window_Selectable_update','getItemEffectsTpDamageLabel','URPhV','getMatchingInitEquip','initialize','checkShiftRemoveShortcut','getItemDamageAmountText','category','WcDEu','hEpbN','AlwaysUsable','drawUpdatedParamValueDiff','DrawItemData','placeNewLabel','Window_EquipItem_isEnabled','contentsBack','Window_Selectable_initialize','CannotEquipMarker','Window_ItemList_maxCols','drawItemEffectsSelfTpGain','BEaOy','Game_BattlerBase_meetsItemConditions','vqBxp','GUOMp','_doubleTouch','Window_EquipCommand_initialize','CgmLl','splice','XFasF','setMp','getItemConsumableLabel','EdGZx','CmdTextAlign','setTempActor','ayLZM','height','buyWindowRect','ListWindowCols','paramValueByName','drawItemEffectsTpDamage','rpHen','UjHAP','aElcs','ItemQuantityFmt','Parse_Notetags_Prices','ExtDisplayedParams','NonOptimizeETypes','UxyfE','EFFECT_REMOVE_BUFF','isUseParamNamesWithIcons','drawItemConsumable','currentClass','buttonAssistRemove','891QdCHBJ','popScene','AlreadyEquipMarker','itemPadding','sellWindowRect','optimize','WjeWj','drawItemSuccessRate','mainAreaHeight','xXuwa','drawItemDarkRect','commandWindowRect','buttonAssistText1','addWindow','FieldUsable','fueVb','MAT','VnlRt','categoryWindowRect','colSpacing','Parse_Notetags_ParamValues','iconWidth','postCreateCategoryWindowItemsEquipsCore','×%1','postCreateItemWindowModernControls','qcYLd','CmdIconBuy','select','min','helpAreaHeight','createCategoryNameWindow','meetsItemConditions','fChuW','icon','Scene_Equip_onSlotOk','getItemEffectsAddedStatesBuffsLabel','drawRemoveItem','JLDcf','occasion','text','MaxItems','item-%1','pop','FontSize','_slotWindow','sellingPrice','getItemEffectsHpDamageText','rNuVk','placeItemNewLabel','getItemEffectsMpRecoveryText','gaugeBackColor','Scene_Shop_doBuy','rateHP','StatusWindow','MultiplierStandard','rLKQn','left','isClearCommandAdded','Window_EquipStatus_refresh','ETwVh','BorderRegExp','drawItemEffectsMpDamage','wSgDk','statusWindowRectItemsEquipsCore','drawItemEquipType','(+%1)','getItemConsumableText','Slots','mainAreaTop','resetShopSwitches','aJBNV','IJRwr','Scene_Shop_goldWindowRect','limitedPageUpDownSceneCheck','Game_Party_gainItem','visible','Window_ShopBuy_price','Game_BattlerBase_param','drawItemDamageAmount','CiDOE','itemWindowRect','status','ElementNone','drawCustomShopGraphic','AllArmors','textColor','onSellOk','itemLineRect','modifiedBuyPriceItemsEquipsCore','itypeId','UCesW','onSlotOk','+%1','onMenuImageLoad','cursorLeft','drawParamText','foreground','NotConsumable','isHandled','Scene_Shop_onSellCancel','postCreateSlotWindowItemsEquipsCore','Scene_Shop_numberWindowRect','DrawFaceJS','hlYlc','LabelRemove','isOptimizeCommandAdded','RlhBa','Parse_Notetags_EquipSlots','LabelRecoverMP','CONSUMABLE','addItemCategory','WCmHH','zUzId','damage','wtypeId','boxWidth','mainFontFace','REPEAT','elements','isUseModernControls','HP\x20RECOVERY','FUNC','YWEMr','REkhs','CmdIconEquip','Luqau','154VrFFOy','Scene_Load_reloadMapIfUpdated','HitType%1','KUHVd','length','STR','hitIndex','setCategory','MANUAL','cursorRight','Speed1000','Window_Selectable_refresh','equipTypes','HdYKt','processCursorMoveModernControls','ItemSceneAdjustItemList','isClicked','processCursorSpecialCheckModernControls','mbcMA','type','equips','Window_ItemCategory_initialize','setHandler','buttonAssistItemListRequirement','fillRect','_list','allowCommandWindowCursorUp','contents','SpeedNeg2000','bvDeN','damageColor','drawItemRepeats','drawItemCost','isArmor','activateSellWindow','bestEquipItem','drawUpdatedParamName','tWaAr','ceil','fontSizeRatio','HIT\x20TYPE','onCategoryCancelItemsEquipsCore','paramValueFontSize','setObject','uiInputPosition','YrBjy','setStatusWindow','dWDWV','VisuMZ_1_MainMenuCore','SUCCESS\x20RATE','categoryList','OffsetX','573919ovOMpG','poYaT','canUse','ScopeAlliesButUser','CmdHideDisabled','cursorPagedown','DQzsH','middle','MaxArmors','GmJZf','Window_ItemList_drawItem','HpGaR','uiMenuStyle','bitmap','CommandAddClear','TP\x20RECOVERY','Step3End','mXZFO','windowPadding','OZCbO','_calculatingJSParameters','drawItemData','push','YXSIN','hideNewLabelSprites','ParseWeaponNotetags','jGAqy','fqhmu','hYbnq','allowShiftScrolling','drawUpdatedBeforeParamValue','MenuPortraits','getItemEffectsMpDamageLabel','wVATw','getItemsEquipsCoreBackColor2','bind','EQxwn','paramJS','ShopScene','cursorPageup','zkvZJ','getItemEffectsSelfTpGainText','smoothSelect','CmdCancelRename','speed','isClearCommandEnabled','onSlotCancel','nQTnZ','Scene_Item_categoryWindowRect'];function _0x5ba1(_0x398f19,_0x134a2d){_0x398f19=_0x398f19-0x1b8;let _0x59b19d=_0x59b1[_0x398f19];return _0x59b19d;}const _0x199c58=_0x5ba1;(function(_0xc4d752,_0x8de5c5){const _0x38c93b=_0x5ba1;while(!![]){try{const _0x41f204=-parseInt(_0x38c93b(0x25d))+parseInt(_0x38c93b(0x220))*parseInt(_0x38c93b(0x251))+-parseInt(_0x38c93b(0x21b))*-parseInt(_0x38c93b(0x52b))+-parseInt(_0x38c93b(0x3cf))*-parseInt(_0x38c93b(0x499))+parseInt(_0x38c93b(0x403))+-parseInt(_0x38c93b(0x351))+-parseInt(_0x38c93b(0x526))*parseInt(_0x38c93b(0x2fb));if(_0x41f204===_0x8de5c5)break;else _0xc4d752['push'](_0xc4d752['shift']());}catch(_0x29e34c){_0xc4d752['push'](_0xc4d752['shift']());}}}(_0x59b1,0x50fdf));var label=_0x199c58(0x22a),tier=tier||0x0,dependencies=[],pluginData=$plugins['filter'](function(_0x491e46){const _0x2b246b=_0x199c58;return _0x491e46[_0x2b246b(0x3a2)]&&_0x491e46['description'][_0x2b246b(0x2b1)]('['+label+']');})[0x0];VisuMZ[label][_0x199c58(0x2d7)]=VisuMZ[label][_0x199c58(0x2d7)]||{},VisuMZ[_0x199c58(0x55b)]=function(_0x27fe19,_0xa9cc9b){const _0x131299=_0x199c58;for(const _0x2825f6 in _0xa9cc9b){if(_0x131299(0x590)===_0x131299(0x590)){if(_0x2825f6[_0x131299(0x568)](/(.*):(.*)/i)){if(_0x131299(0x461)!==_0x131299(0x58a)){const _0xf80c89=String(RegExp['$1']),_0x36bf1c=String(RegExp['$2'])['toUpperCase']()[_0x131299(0x2ac)]();let _0x24e9ce,_0x23bd0c,_0x4a606c;switch(_0x36bf1c){case _0x131299(0x508):_0x24e9ce=_0xa9cc9b[_0x2825f6]!==''?Number(_0xa9cc9b[_0x2825f6]):0x0;break;case _0x131299(0x2f0):_0x23bd0c=_0xa9cc9b[_0x2825f6]!==''?JSON[_0x131299(0x2fa)](_0xa9cc9b[_0x2825f6]):[],_0x24e9ce=_0x23bd0c[_0x131299(0x2c5)](_0x38cd32=>Number(_0x38cd32));break;case _0x131299(0x529):_0x24e9ce=_0xa9cc9b[_0x2825f6]!==''?eval(_0xa9cc9b[_0x2825f6]):null;break;case _0x131299(0x516):_0x23bd0c=_0xa9cc9b[_0x2825f6]!==''?JSON['parse'](_0xa9cc9b[_0x2825f6]):[],_0x24e9ce=_0x23bd0c['map'](_0x3b9d35=>eval(_0x3b9d35));break;case _0x131299(0x5d5):_0x24e9ce=_0xa9cc9b[_0x2825f6]!==''?JSON[_0x131299(0x2fa)](_0xa9cc9b[_0x2825f6]):'';break;case'ARRAYJSON':_0x23bd0c=_0xa9cc9b[_0x2825f6]!==''?JSON[_0x131299(0x2fa)](_0xa9cc9b[_0x2825f6]):[],_0x24e9ce=_0x23bd0c[_0x131299(0x2c5)](_0x59d569=>JSON[_0x131299(0x2fa)](_0x59d569));break;case _0x131299(0x3ca):_0x24e9ce=_0xa9cc9b[_0x2825f6]!==''?new Function(JSON[_0x131299(0x2fa)](_0xa9cc9b[_0x2825f6])):new Function('return\x200');break;case'ARRAYFUNC':_0x23bd0c=_0xa9cc9b[_0x2825f6]!==''?JSON[_0x131299(0x2fa)](_0xa9cc9b[_0x2825f6]):[],_0x24e9ce=_0x23bd0c[_0x131299(0x2c5)](_0x2a03c7=>new Function(JSON[_0x131299(0x2fa)](_0x2a03c7)));break;case _0x131299(0x3d4):_0x24e9ce=_0xa9cc9b[_0x2825f6]!==''?String(_0xa9cc9b[_0x2825f6]):'';break;case'ARRAYSTR':_0x23bd0c=_0xa9cc9b[_0x2825f6]!==''?JSON[_0x131299(0x2fa)](_0xa9cc9b[_0x2825f6]):[],_0x24e9ce=_0x23bd0c['map'](_0x4d3d12=>String(_0x4d3d12));break;case'STRUCT':_0x4a606c=_0xa9cc9b[_0x2825f6]!==''?JSON[_0x131299(0x2fa)](_0xa9cc9b[_0x2825f6]):{},_0x27fe19[_0xf80c89]={},VisuMZ[_0x131299(0x55b)](_0x27fe19[_0xf80c89],_0x4a606c);continue;case _0x131299(0x1cf):_0x23bd0c=_0xa9cc9b[_0x2825f6]!==''?JSON[_0x131299(0x2fa)](_0xa9cc9b[_0x2825f6]):[],_0x24e9ce=_0x23bd0c[_0x131299(0x2c5)](_0x2237f1=>VisuMZ[_0x131299(0x55b)]({},JSON[_0x131299(0x2fa)](_0x2237f1)));break;default:continue;}_0x27fe19[_0xf80c89]=_0x24e9ce;}else{function _0x3b7c14(){const _0x2cf647=_0x131299;if(_0x426211['ItemsEquipsCore']['Settings'][_0x2cf647(0x581)][_0x2cf647(0x226)]===![])return;_0x510cc8=_0x625eaa[_0x2cf647(0x573)](_0x1700ee||0x1,0x1);while(_0x2c6320--){_0x4b45c8=_0x234634||this['lineHeight'](),this[_0x2cf647(0x3ea)]['paintOpacity']=0xa0;const _0x4eb9fe=_0xc7d83a[_0x2cf647(0x425)]();this[_0x2cf647(0x3ea)][_0x2cf647(0x3e7)](_0x4e55af+0x1,_0x21b856+0x1,_0x2d590a-0x2,_0xa9c4e5-0x2,_0x4eb9fe),this['contents'][_0x2cf647(0x5e1)]=0xff;}}}}}else{function _0x23428c(){const _0x81fd8=_0x131299;let _0x4f9e0f=this[_0x81fd8(0x528)]();const _0x5d3ad6=this[_0x81fd8(0x2ea)];return _0x4f9e0f=_0x4ef6b5[_0x81fd8(0x22a)][_0x81fd8(0x2d7)][_0x81fd8(0x429)]['SellPriceJS'][_0x81fd8(0x2f6)](this,_0x5d3ad6,_0x4f9e0f),_0x4f9e0f;}}}return _0x27fe19;},(_0x2e83c9=>{const _0x3c9f59=_0x199c58,_0x32dde6=_0x2e83c9[_0x3c9f59(0x5f2)];for(const _0x9220e of dependencies){if(!Imported[_0x9220e]){alert(_0x3c9f59(0x5d9)[_0x3c9f59(0x257)](_0x32dde6,_0x9220e)),SceneManager[_0x3c9f59(0x465)]();break;}}const _0x57ed3f=_0x2e83c9[_0x3c9f59(0x5a5)];if(_0x57ed3f[_0x3c9f59(0x568)](/\[Version[ ](.*?)\]/i)){const _0x31a34f=Number(RegExp['$1']);_0x31a34f!==VisuMZ[label][_0x3c9f59(0x45f)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x3c9f59(0x257)](_0x32dde6,_0x31a34f)),SceneManager[_0x3c9f59(0x465)]());}if(_0x57ed3f['match'](/\[Tier[ ](\d+)\]/i)){const _0x1f140b=Number(RegExp['$1']);_0x1f140b<tier?(alert(_0x3c9f59(0x204)[_0x3c9f59(0x257)](_0x32dde6,_0x1f140b,tier)),SceneManager['exit']()):tier=Math[_0x3c9f59(0x573)](_0x1f140b,tier);}VisuMZ[_0x3c9f59(0x55b)](VisuMZ[label][_0x3c9f59(0x2d7)],_0x2e83c9[_0x3c9f59(0x217)]);})(pluginData),PluginManager[_0x199c58(0x232)](pluginData[_0x199c58(0x5f2)],_0x199c58(0x445),_0x3caca5=>{const _0x4e4979=_0x199c58;VisuMZ[_0x4e4979(0x55b)](_0x3caca5,_0x3caca5);const _0x2ecaaf=_0x3caca5[_0x4e4979(0x2fc)]['map'](_0x286714=>$gameActors['actor'](_0x286714)),_0x2d7ba6=_0x3caca5[_0x4e4979(0x394)][_0x4e4979(0x2c5)](_0x20b23c=>$dataSystem['equipTypes'][_0x4e4979(0x5df)](_0x20b23c[_0x4e4979(0x2ac)]()));for(const _0x1f5302 of _0x2ecaaf){if(_0x4e4979(0x38c)!==_0x4e4979(0x38c)){function _0x57f550(){const _0x39a238=_0x4e4979;this[_0x39a238(0x3d8)](_0x324138['isTriggered'](_0x39a238(0x435)));}}else{if(!_0x1f5302)continue;_0x1f5302[_0x4e4979(0x2d3)](_0x2d7ba6);}}}),PluginManager[_0x199c58(0x232)](pluginData[_0x199c58(0x5f2)],'ActorResetEquipSlots',_0x3d7bb5=>{const _0xf55e53=_0x199c58;VisuMZ[_0xf55e53(0x55b)](_0x3d7bb5,_0x3d7bb5);const _0x3f8658=_0x3d7bb5['Actors']['map'](_0x273769=>$gameActors[_0xf55e53(0x29e)](_0x273769));for(const _0x32f37c of _0x3f8658){if(!_0x32f37c)continue;_0x32f37c[_0xf55e53(0x261)]();}}),PluginManager['registerCommand'](pluginData[_0x199c58(0x5f2)],_0x199c58(0x54f),_0x5206fe=>{const _0x1b0d3a=_0x199c58;VisuMZ[_0x1b0d3a(0x55b)](_0x5206fe,_0x5206fe);const _0xdd159f=[],_0x34534b=_0x5206fe['Blacklist'][_0x1b0d3a(0x2c5)](_0x439a6f=>_0x439a6f[_0x1b0d3a(0x5c5)]()[_0x1b0d3a(0x2ac)]()),_0x3b4562=_0x5206fe['Whitelist'][_0x1b0d3a(0x2c5)](_0x25e0d2=>_0x25e0d2['toUpperCase']()[_0x1b0d3a(0x2ac)]()),_0x136a82=_0x5206fe[_0x1b0d3a(0x28b)]>=_0x5206fe['Step1Start']?_0x5206fe[_0x1b0d3a(0x4ad)]:_0x5206fe['Step1End'],_0x5d8cf4=_0x5206fe[_0x1b0d3a(0x28b)]>=_0x5206fe[_0x1b0d3a(0x4ad)]?_0x5206fe[_0x1b0d3a(0x28b)]:_0x5206fe[_0x1b0d3a(0x4ad)],_0xfeec9a=Array(_0x5d8cf4-_0x136a82+0x1)['fill']()['map']((_0x159b31,_0x2b868f)=>_0x136a82+_0x2b868f);for(const _0x3e5ddc of _0xfeec9a){if('SYInB'!==_0x1b0d3a(0x202)){function _0x3cef47(){return!this['isUseModernControls']();}}else{const _0x595b88=$dataItems[_0x3e5ddc];if(!_0x595b88)continue;if(!VisuMZ[_0x1b0d3a(0x22a)][_0x1b0d3a(0x480)](_0x595b88,_0x34534b,_0x3b4562))continue;_0xdd159f[_0x1b0d3a(0x419)]([0x0,_0x3e5ddc,0x0,_0x595b88[_0x1b0d3a(0x5ea)]]);}}const _0x2cf7e9=_0x5206fe[_0x1b0d3a(0x598)]>=_0x5206fe[_0x1b0d3a(0x5a7)]?_0x5206fe['Step2Start']:_0x5206fe[_0x1b0d3a(0x598)],_0x62b22f=_0x5206fe[_0x1b0d3a(0x598)]>=_0x5206fe[_0x1b0d3a(0x5a7)]?_0x5206fe[_0x1b0d3a(0x598)]:_0x5206fe[_0x1b0d3a(0x5a7)],_0x4929fa=Array(_0x62b22f-_0x2cf7e9+0x1)[_0x1b0d3a(0x44c)]()['map']((_0x56583c,_0x3afa1f)=>_0x2cf7e9+_0x3afa1f);for(const _0x1868c9 of _0x4929fa){const _0x464079=$dataWeapons[_0x1868c9];if(!_0x464079)continue;if(!VisuMZ[_0x1b0d3a(0x22a)][_0x1b0d3a(0x480)](_0x464079,_0x34534b,_0x3b4562))continue;_0xdd159f[_0x1b0d3a(0x419)]([0x1,_0x1868c9,0x0,_0x464079['price']]);}const _0x569810=_0x5206fe[_0x1b0d3a(0x413)]>=_0x5206fe['Step3Start']?_0x5206fe[_0x1b0d3a(0x58e)]:_0x5206fe[_0x1b0d3a(0x413)],_0x5d1649=_0x5206fe['Step3End']>=_0x5206fe[_0x1b0d3a(0x58e)]?_0x5206fe[_0x1b0d3a(0x413)]:_0x5206fe[_0x1b0d3a(0x58e)],_0x581676=Array(_0x5d1649-_0x569810+0x1)[_0x1b0d3a(0x44c)]()[_0x1b0d3a(0x2c5)]((_0x2e20dd,_0x3e0a0f)=>_0x569810+_0x3e0a0f);for(const _0x1f477f of _0x581676){const _0x42640c=$dataArmors[_0x1f477f];if(!_0x42640c)continue;if(!VisuMZ[_0x1b0d3a(0x22a)]['IncludeShopItem'](_0x42640c,_0x34534b,_0x3b4562))continue;_0xdd159f['push']([0x2,_0x1f477f,0x0,_0x42640c[_0x1b0d3a(0x5ea)]]);}SceneManager[_0x1b0d3a(0x419)](Scene_Shop),SceneManager[_0x1b0d3a(0x4fe)](_0xdd159f,_0x5206fe['PurchaseOnly']);}),VisuMZ[_0x199c58(0x22a)][_0x199c58(0x480)]=function(_0x353b68,_0x2363c7,_0x5d3522){const _0x3ff006=_0x199c58;if(_0x353b68[_0x3ff006(0x5f2)]['trim']()==='')return![];if(_0x353b68[_0x3ff006(0x5f2)][_0x3ff006(0x568)](/-----/i))return![];const _0x3f417a=_0x353b68['categories'];if(_0x2363c7['length']>0x0){if(_0x3ff006(0x587)==='AbQEi')for(const _0x391d74 of _0x2363c7){if(_0x3ff006(0x345)!==_0x3ff006(0x330)){if(!_0x391d74)continue;if(_0x3f417a[_0x3ff006(0x2b1)](_0x391d74))return![];}else{function _0x32977d(){const _0x443978=_0x3ff006;this[_0x443978(0x367)]();}}}else{function _0x3e59ee(){if(!_0x388b76['value'](_0x59a984))return![];}}}if(_0x5d3522[_0x3ff006(0x3d3)]>0x0){if(_0x3ff006(0x404)===_0x3ff006(0x404)){for(const _0x489545 of _0x5d3522){if(!_0x489545)continue;if(_0x3f417a[_0x3ff006(0x2b1)](_0x489545))return!![];}return![];}else{function _0x1c79b2(){const _0x4a856c=_0x3ff006;return _0x1386b8[_0x4a856c(0x2a8)][_0x4a856c(0x4be)][_0x4a856c(0x2f6)](this,_0x1d6695);}}}return!![];},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x2d2)]=Scene_Boot[_0x199c58(0x2a8)][_0x199c58(0x2c3)],Scene_Boot[_0x199c58(0x2a8)]['onDatabaseLoaded']=function(){const _0x518668=_0x199c58;this[_0x518668(0x4e6)](),VisuMZ[_0x518668(0x22a)][_0x518668(0x2d2)][_0x518668(0x2f6)](this),this['process_VisuMZ_ItemsEquipsCore_Notetags']();},Scene_Boot[_0x199c58(0x2a8)][_0x199c58(0x4e6)]=function(){const _0x241579=_0x199c58;VisuMZ[_0x241579(0x22a)][_0x241579(0x450)]={},VisuMZ[_0x241579(0x22a)][_0x241579(0x450)]['EquipParams']=[],VisuMZ[_0x241579(0x22a)][_0x241579(0x450)][_0x241579(0x38d)]=[];const _0xeab780=[_0x241579(0x28c),_0x241579(0x239),_0x241579(0x1be),_0x241579(0x4d1),_0x241579(0x361),_0x241579(0x4f7),_0x241579(0x1e9),'LUK'];for(const _0xcaa090 of _0xeab780){if(_0x241579(0x34b)==='UxyfE'){const _0x490bb6='<%1:[\x20]([\x5c+\x5c-]\x5cd+)>'['format'](_0xcaa090);VisuMZ[_0x241579(0x22a)][_0x241579(0x450)][_0x241579(0x5fd)][_0x241579(0x419)](new RegExp(_0x490bb6,'i'));const _0x5901cb='\x5cb%1\x5cb'['format'](_0xcaa090);VisuMZ[_0x241579(0x22a)]['RegExp'][_0x241579(0x38d)]['push'](new RegExp(_0x5901cb,'g'));}else{function _0x5e0fb5(){const _0x50d0e6=_0x241579;this[_0x50d0e6(0x4ec)]=0x0;for(const _0x1e1848 of this[_0x50d0e6(0x2cd)]){this[_0x50d0e6(0x1f7)](_0x1e1848)?this[_0x50d0e6(0x4ec)]++:_0x1e1848[0x0]=-0x1;}}}}},Scene_Boot[_0x199c58(0x2a8)][_0x199c58(0x256)]=function(){const _0x42227d=_0x199c58;if(VisuMZ['ParseAllNotetags'])return;this[_0x42227d(0x4cb)]();const _0x1e8628=[$dataItems,$dataWeapons,$dataArmors];for(const _0x1d1938 of _0x1e8628){if(_0x42227d(0x41e)!==_0x42227d(0x2a9))for(const _0x1347ea of _0x1d1938){if(!_0x1347ea)continue;VisuMZ[_0x42227d(0x22a)][_0x42227d(0x291)](_0x1347ea,_0x1d1938),VisuMZ[_0x42227d(0x22a)]['Parse_Notetags_Prices'](_0x1347ea,_0x1d1938),VisuMZ['ItemsEquipsCore'][_0x42227d(0x365)](_0x1347ea,_0x1d1938),VisuMZ[_0x42227d(0x22a)]['Parse_Notetags_ParamJS'](_0x1347ea,_0x1d1938),VisuMZ[_0x42227d(0x22a)][_0x42227d(0x312)](_0x1347ea,_0x1d1938);}else{function _0x2d27f3(){const _0x291603=_0x42227d;if(this[_0x291603(0x49b)])return![];_0x2da3f9[_0x291603(0x58b)]=!![];const _0x399380=_0x33480a[_0x291603(0x22a)]['Game_Actor_tradeItemWithParty'][_0x291603(0x2f6)](this,_0x2f3888,_0x10b726);return _0x586a6f['_bypassNewLabel']=![],_0x399380;}}}},Scene_Boot['prototype']['process_VisuMZ_ItemsEquipsCore_EquipSlots']=function(){const _0x39ea92=_0x199c58;for(const _0x1169ff of $dataClasses){if('qKImb'!==_0x39ea92(0x371)){if(!_0x1169ff)continue;VisuMZ[_0x39ea92(0x22a)][_0x39ea92(0x3bc)](_0x1169ff);}else{function _0x4a8743(){const _0x1bfd47=_0x39ea92;!this[_0x1bfd47(0x3e0)]()&&_0x29defc[_0x1bfd47(0x2a8)][_0x1bfd47(0x3dd)][_0x1bfd47(0x2f6)](this);}}}},VisuMZ[_0x199c58(0x22a)]['ParseClassNotetags']=VisuMZ['ParseClassNotetags'],VisuMZ['ParseClassNotetags']=function(_0x39d41e){const _0x388643=_0x199c58;VisuMZ['ItemsEquipsCore'][_0x388643(0x585)]['call'](this,_0x39d41e),VisuMZ['ItemsEquipsCore'][_0x388643(0x3bc)](_0x39d41e);},VisuMZ['ItemsEquipsCore']['ParseItemNotetags']=VisuMZ[_0x199c58(0x234)],VisuMZ['ParseItemNotetags']=function(_0x46d119){const _0x1b87cf=_0x199c58;VisuMZ[_0x1b87cf(0x22a)][_0x1b87cf(0x234)]['call'](this,_0x46d119),VisuMZ[_0x1b87cf(0x22a)][_0x1b87cf(0x294)](_0x46d119,$dataItems);},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x41c)]=VisuMZ[_0x199c58(0x41c)],VisuMZ[_0x199c58(0x41c)]=function(_0x5c6998){const _0x24d91d=_0x199c58;VisuMZ[_0x24d91d(0x22a)][_0x24d91d(0x41c)][_0x24d91d(0x2f6)](this,_0x5c6998),VisuMZ[_0x24d91d(0x22a)][_0x24d91d(0x294)](_0x5c6998,$dataWeapons);},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x2c7)]=VisuMZ['ParseArmorNotetags'],VisuMZ[_0x199c58(0x2c7)]=function(_0x58a513){const _0xd1638a=_0x199c58;VisuMZ[_0xd1638a(0x22a)]['ParseArmorNotetags'][_0xd1638a(0x2f6)](this,_0x58a513),VisuMZ[_0xd1638a(0x22a)][_0xd1638a(0x294)](_0x58a513,$dataArmors);},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x3bc)]=function(_0x6150c7){const _0x32bbd7=_0x199c58;_0x6150c7[_0x32bbd7(0x255)]=[];if(!BattleManager[_0x32bbd7(0x4e5)]()&&_0x6150c7[_0x32bbd7(0x2da)][_0x32bbd7(0x568)](/<EQUIP SLOTS>\s*([\s\S]*)\s*<\/EQUIP SLOTS>/i)){const _0x16671c=String(RegExp['$1'])[_0x32bbd7(0x1d3)](/[\r\n]+/);for(const _0x307f34 of _0x16671c){if(_0x32bbd7(0x586)===_0x32bbd7(0x586)){const _0x5a6f60=$dataSystem['equipTypes'][_0x32bbd7(0x5df)](_0x307f34[_0x32bbd7(0x2ac)]());if(_0x5a6f60>0x0)_0x6150c7['equipSlots']['push'](_0x5a6f60);}else{function _0x4444df(){return![];}}}}else for(const _0x12ba43 of $dataSystem[_0x32bbd7(0x3db)]){const _0x5c54f5=$dataSystem[_0x32bbd7(0x3db)]['indexOf'](_0x12ba43[_0x32bbd7(0x2ac)]());if(_0x5c54f5>0x0)_0x6150c7[_0x32bbd7(0x255)][_0x32bbd7(0x419)](_0x5c54f5);}},VisuMZ['ItemsEquipsCore'][_0x199c58(0x294)]=function(_0x45cba2,_0x47dc3d){const _0x25f470=_0x199c58;VisuMZ[_0x25f470(0x22a)][_0x25f470(0x291)](_0x45cba2,_0x47dc3d),VisuMZ[_0x25f470(0x22a)][_0x25f470(0x348)](_0x45cba2,_0x47dc3d),VisuMZ[_0x25f470(0x22a)][_0x25f470(0x365)](_0x45cba2,_0x47dc3d),VisuMZ[_0x25f470(0x22a)][_0x25f470(0x2ed)](_0x45cba2,_0x47dc3d),VisuMZ['ItemsEquipsCore'][_0x25f470(0x312)](_0x45cba2,_0x47dc3d);},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x291)]=function(_0x470fa1,_0x33013a){const _0xe92faa=_0x199c58;_0x470fa1['categories']=[];const _0x3b1f26=_0x470fa1[_0xe92faa(0x2da)],_0x4e080a=_0x3b1f26[_0xe92faa(0x568)](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);if(_0x4e080a)for(const _0x315575 of _0x4e080a){if(_0xe92faa(0x43e)!==_0xe92faa(0x1cc)){_0x315575[_0xe92faa(0x568)](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);const _0x445b47=String(RegExp['$1'])['toUpperCase']()[_0xe92faa(0x2ac)]()[_0xe92faa(0x1d3)](',');for(const _0x3b7b3e of _0x445b47){if(_0xe92faa(0x5a6)===_0xe92faa(0x305)){function _0x4dc85e(){const _0x12eaa7=_0xe92faa;this['_calculatingJSParameters']=!![];const _0x20fc8b=_0xffdaf2['ItemsEquipsCore'][_0x12eaa7(0x428)][_0x524fad][_0x12eaa7(0x2f6)](this,_0x59bd05,_0x469ebd);return this['_calculatingJSParameters']=![],_0x20fc8b;}}else _0x470fa1['categories'][_0xe92faa(0x419)](_0x3b7b3e[_0xe92faa(0x2ac)]());}}else{function _0x371aba(){const _0x5bcb29=_0xe92faa;_0x9bb4a7['ItemsEquipsCore'][_0x5bcb29(0x2d7)][_0x5bcb29(0x386)][_0x5bcb29(0x328)]['call'](this);}}}if(_0x3b1f26[_0xe92faa(0x568)](/<(?:CATEGORY|CATEGORIES)>\s*([\s\S]*)\s*<\/(?:CATEGORY|CATEGORIES)>/i)){const _0x15eca5=RegExp['$1']['split'](/[\r\n]+/);for(const _0xf467bf of _0x15eca5){if(_0xe92faa(0x1d9)===_0xe92faa(0x1d9))_0x470fa1[_0xe92faa(0x5f4)][_0xe92faa(0x419)](_0xf467bf[_0xe92faa(0x5c5)]()['trim']());else{function _0x286da0(){const _0x43e742=_0xe92faa,_0x277d7c=_0x2d8911['parse']('['+_0x2dd90d['$1'][_0x43e742(0x568)](/\d+/g)+']');for(const _0x446ab9 of _0x277d7c){if(_0x3f8208['value'](_0x446ab9))return![];}return!![];}}}}},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x348)]=function(_0x3f0f6b,_0x4d93eb){const _0x5c9eac=_0x199c58;_0x3f0f6b[_0x5c9eac(0x2da)][_0x5c9eac(0x568)](/<PRICE:[ ](\d+)>/i)&&(_0x3f0f6b[_0x5c9eac(0x5ea)]=Number(RegExp['$1']));},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x365)]=function(_0x372781,_0x5ca7e2){const _0x27de7c=_0x199c58;if(_0x5ca7e2===$dataItems)return;for(let _0x1735e9=0x0;_0x1735e9<0x8;_0x1735e9++){const _0x2ad87c=VisuMZ['ItemsEquipsCore'][_0x27de7c(0x450)][_0x27de7c(0x5fd)][_0x1735e9];_0x372781[_0x27de7c(0x2da)][_0x27de7c(0x568)](_0x2ad87c)&&(_0x372781[_0x27de7c(0x2dd)][_0x1735e9]=parseInt(RegExp['$1']));}},VisuMZ[_0x199c58(0x22a)]['paramJS']={},VisuMZ['ItemsEquipsCore'][_0x199c58(0x2ed)]=function(_0x5598ff,_0x493583){const _0x509b6b=_0x199c58;if(_0x493583===$dataItems)return;if(_0x5598ff[_0x509b6b(0x2da)][_0x509b6b(0x568)](/<JS PARAMETERS>\s*([\s\S]*)\s*<\/JS PARAMETERS>/i)){const _0x1b2839=String(RegExp['$1']),_0x3d6545=(_0x493583===$dataWeapons?_0x509b6b(0x1c3):'A%1')['format'](_0x5598ff['id']),_0x143992=_0x509b6b(0x512)[_0x509b6b(0x257)](_0x1b2839);for(let _0x1f2afe=0x0;_0x1f2afe<0x8;_0x1f2afe++){if(_0x1b2839[_0x509b6b(0x568)](VisuMZ['ItemsEquipsCore'][_0x509b6b(0x450)]['BorderRegExp'][_0x1f2afe])){if(_0x509b6b(0x560)!=='pyaFr'){const _0xa50b37='%1-%2'[_0x509b6b(0x257)](_0x3d6545,_0x1f2afe);VisuMZ[_0x509b6b(0x22a)][_0x509b6b(0x428)][_0xa50b37]=new Function(_0x509b6b(0x5e0),_0x509b6b(0x1bd),_0x143992);}else{function _0x30bd5d(){const _0x58e0e6=_0x509b6b;_0x59d8a2=_0x58e0e6(0x5d3)['format'](_0x285841['id']);}}}}}},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x58c)]={},VisuMZ['ItemsEquipsCore']['Parse_Notetags_EnableJS']=function(_0x4ab6cf,_0x301354){const _0x1f2f36=_0x199c58;if(_0x301354!==$dataItems)return;if(_0x4ab6cf['note'][_0x1f2f36(0x568)](/<JS ITEM ENABLE>\s*([\s\S]*)\s*<\/JS ITEM ENABLE>/i)){const _0x51d79b=String(RegExp['$1']),_0x1784f8=_0x1f2f36(0x5b4)[_0x1f2f36(0x257)](_0x51d79b);VisuMZ[_0x1f2f36(0x22a)][_0x1f2f36(0x58c)][_0x4ab6cf['id']]=new Function(_0x1f2f36(0x5e0),_0x1784f8);}},DataManager['isKeyItem']=function(_0x2222e3){const _0xe8bdf0=_0x199c58;return this['isItem'](_0x2222e3)&&_0x2222e3[_0xe8bdf0(0x3aa)]===0x2;},DataManager[_0x199c58(0x56e)]=function(_0x528676){const _0xb6e2b=_0x199c58;if(!_0x528676)return 0x63;else return _0x528676[_0xb6e2b(0x2da)][_0xb6e2b(0x568)](/<MAX:[ ](\d+)>/i)?parseInt(RegExp['$1']):this['defaultItemMax'](_0x528676);},DataManager[_0x199c58(0x1c8)]=function(_0x3d0204){const _0x5b5c49=_0x199c58;if(this[_0x5b5c49(0x44e)](_0x3d0204))return VisuMZ[_0x5b5c49(0x22a)][_0x5b5c49(0x2d7)]['ItemScene'][_0x5b5c49(0x379)];else{if(this[_0x5b5c49(0x20a)](_0x3d0204))return VisuMZ[_0x5b5c49(0x22a)][_0x5b5c49(0x2d7)][_0x5b5c49(0x4c5)]['MaxWeapons'];else{if(this['isArmor'](_0x3d0204))return VisuMZ[_0x5b5c49(0x22a)]['Settings'][_0x5b5c49(0x4c5)][_0x5b5c49(0x40b)];}}},ColorManager['getItemColor']=function(_0x48bef1){const _0x56c8ca=_0x199c58;if(!_0x48bef1)return this[_0x56c8ca(0x5ad)]();else{if(_0x48bef1['note'][_0x56c8ca(0x568)](/<COLOR:[ ](\d+)>/i))return this['textColor'](Number(RegExp['$1'])[_0x56c8ca(0x4db)](0x0,0x1f));else{if(_0x48bef1[_0x56c8ca(0x2da)][_0x56c8ca(0x568)](/<COLOR:[ ]#(.*)>/i))return'#'+String(RegExp['$1']);else{if(_0x56c8ca(0x4b8)!==_0x56c8ca(0x4b8)){function _0xa71a5d(){const _0x27c865=_0x56c8ca;return this[_0x27c865(0x449)]();}}else return this[_0x56c8ca(0x5ad)]();}}}},ColorManager[_0x199c58(0x57e)]=function(_0x24e5a4){const _0x508854=_0x199c58;return _0x24e5a4=String(_0x24e5a4),_0x24e5a4[_0x508854(0x568)](/#(.*)/i)?_0x508854(0x5fc)[_0x508854(0x257)](String(RegExp['$1'])):this[_0x508854(0x3a6)](Number(_0x24e5a4));},SceneManager[_0x199c58(0x507)]=function(){const _0x5dc04d=_0x199c58;return this[_0x5dc04d(0x458)]&&this[_0x5dc04d(0x458)][_0x5dc04d(0x24d)]===Scene_Shop;},Game_Temp['prototype'][_0x199c58(0x4e0)]=function(){const _0x3cc9f4=_0x199c58;if(this[_0x3cc9f4(0x58b)])return![];return VisuMZ[_0x3cc9f4(0x22a)][_0x3cc9f4(0x2d7)]['New'][_0x3cc9f4(0x515)];},VisuMZ[_0x199c58(0x2fd)]=VisuMZ[_0x199c58(0x22a)][_0x199c58(0x2d7)][_0x199c58(0x386)][_0x199c58(0x387)],VisuMZ['ItemsEquipsCore'][_0x199c58(0x39e)]=Game_BattlerBase[_0x199c58(0x2a8)]['param'],Game_BattlerBase[_0x199c58(0x2a8)][_0x199c58(0x2d8)]=function(_0x181670){const _0x625d4=_0x199c58;return this[_0x625d4(0x45d)]?this[_0x625d4(0x4b7)]?VisuMZ[_0x625d4(0x2fd)]:0x1:VisuMZ[_0x625d4(0x22a)][_0x625d4(0x39e)][_0x625d4(0x2f6)](this,_0x181670);},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x331)]=Game_BattlerBase['prototype'][_0x199c58(0x370)],Game_BattlerBase[_0x199c58(0x2a8)]['meetsItemConditions']=function(_0x343e35){const _0x49381f=_0x199c58;if(!_0x343e35)return![];if(!VisuMZ[_0x49381f(0x22a)][_0x49381f(0x331)][_0x49381f(0x2f6)](this,_0x343e35))return![];if(!this['meetsItemConditionsNotetags'](_0x343e35))return![];if(!this['meetsItemConditionsJS'](_0x343e35))return![];return!![];},Game_BattlerBase[_0x199c58(0x2a8)][_0x199c58(0x306)]=function(_0xc9b053){if(!this['checkItemConditionsSwitchNotetags'](_0xc9b053))return![];return!![];},Game_BattlerBase[_0x199c58(0x2a8)][_0x199c58(0x2c1)]=function(_0xa1bd3b){const _0xd2d87b=_0x199c58,_0x37c852=_0xa1bd3b['note'];if(_0x37c852['match'](/<ENABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0xd2d87b(0x414)!==_0xd2d87b(0x4e9)){const _0x14b525=JSON['parse']('['+RegExp['$1'][_0xd2d87b(0x568)](/\d+/g)+']');for(const _0x42d48f of _0x14b525){if(!$gameSwitches[_0xd2d87b(0x4a3)](_0x42d48f))return![];}return!![];}else{function _0x423041(){return![];}}}if(_0x37c852[_0xd2d87b(0x568)](/<ENABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x510d6d=JSON[_0xd2d87b(0x2fa)]('['+RegExp['$1'][_0xd2d87b(0x568)](/\d+/g)+']');for(const _0xc3f964 of _0x510d6d){if(!$gameSwitches['value'](_0xc3f964))return![];}return!![];}if(_0x37c852['match'](/<ENABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x263352=JSON[_0xd2d87b(0x2fa)]('['+RegExp['$1'][_0xd2d87b(0x568)](/\d+/g)+']');for(const _0x263989 of _0x263352){if($gameSwitches[_0xd2d87b(0x4a3)](_0x263989))return!![];}return![];}if(_0x37c852[_0xd2d87b(0x568)](/<DISABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0xbe3af4=JSON[_0xd2d87b(0x2fa)]('['+RegExp['$1'][_0xd2d87b(0x568)](/\d+/g)+']');for(const _0x46dc69 of _0xbe3af4){if(_0xd2d87b(0x30d)===_0xd2d87b(0x4b5)){function _0x264bfc(){const _0x3e00c4=_0xd2d87b;return _0x7013d1['ItemsEquipsCore']['Settings'][_0x3e00c4(0x4c5)][_0x3e00c4(0x523)];}}else{if(!$gameSwitches[_0xd2d87b(0x4a3)](_0x46dc69))return!![];}}return![];}if(_0x37c852[_0xd2d87b(0x568)](/<DISABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x2e50d1=JSON[_0xd2d87b(0x2fa)]('['+RegExp['$1'][_0xd2d87b(0x568)](/\d+/g)+']');for(const _0x5357b9 of _0x2e50d1){if(_0xd2d87b(0x338)===_0xd2d87b(0x338)){if(!$gameSwitches['value'](_0x5357b9))return!![];}else{function _0x52f016(){const _0x33f2be=_0xd2d87b;return this['isUseItemsEquipsCoreUpdatedLayout']()?!![]:_0x5ce688['ItemsEquipsCore'][_0x33f2be(0x2d7)][_0x33f2be(0x4c5)]['ShowShopStatus'];}}}return![];}if(_0x37c852[_0xd2d87b(0x568)](/<DISABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if('eNltk'===_0xd2d87b(0x5ef)){const _0x46ca00=JSON['parse']('['+RegExp['$1'][_0xd2d87b(0x568)](/\d+/g)+']');for(const _0x405863 of _0x46ca00){if($gameSwitches[_0xd2d87b(0x4a3)](_0x405863))return![];}return!![];}else{function _0x3f4e66(){const _0x529020=_0xd2d87b,_0x4cf48b=this[_0x529020(0x285)]();return this[_0x529020(0x1f0)](_0x4cf48b,_0x1a9e99,_0x307d08,_0x2e4999,![],_0x529020(0x2a2)),this['drawItemDarkRect'](_0x488777,_0xf1e6b0,_0x5257e0),this[_0x529020(0x4ea)](),!![];}}}return!![];},Game_BattlerBase['prototype'][_0x199c58(0x301)]=function(_0x14edaa){const _0x31b132=_0x199c58,_0x22af41=_0x14edaa[_0x31b132(0x2da)],_0x5c1d5b=VisuMZ[_0x31b132(0x22a)][_0x31b132(0x58c)];return _0x5c1d5b[_0x14edaa['id']]?_0x5c1d5b[_0x14edaa['id']][_0x31b132(0x2f6)](this,_0x14edaa):!![];},Game_Actor[_0x199c58(0x2a8)][_0x199c58(0x500)]=function(_0x5313c3){const _0x39cdc4=_0x199c58;_0x5313c3=this['convertInitEquipsToItems'](_0x5313c3);const _0x4339e0=this[_0x39cdc4(0x255)]();this['_equips']=[];for(let _0x2dd18b=0x0;_0x2dd18b<_0x4339e0[_0x39cdc4(0x3d3)];_0x2dd18b++){this['_equips'][_0x2dd18b]=new Game_Item();}for(let _0x2983f9=0x0;_0x2983f9<_0x4339e0['length'];_0x2983f9++){const _0x1ba772=_0x4339e0[_0x2983f9],_0x95f68e=this[_0x39cdc4(0x31f)](_0x5313c3,_0x1ba772);if(this[_0x39cdc4(0x51d)](_0x95f68e))this[_0x39cdc4(0x5f0)][_0x2983f9]['setObject'](_0x95f68e);}this[_0x39cdc4(0x2f7)](!![]),this['refresh']();},Game_Actor['prototype']['convertInitEquipsToItems']=function(_0x328bef){const _0x253adf=_0x199c58,_0x300149=[];for(let _0xfb2abc=0x0;_0xfb2abc<_0x328bef[_0x253adf(0x3d3)];_0xfb2abc++){const _0x220c4e=_0x328bef[_0xfb2abc];if(_0x220c4e<=0x0)continue;const _0x47b8ea=$dataSystem[_0x253adf(0x3db)][_0xfb2abc+0x1];if(_0x47b8ea===$dataSystem[_0x253adf(0x3db)][0x1]||_0xfb2abc===0x1&&this[_0x253adf(0x595)]()){if(_0x253adf(0x26b)!==_0x253adf(0x22e))_0x300149['push']($dataWeapons[_0x220c4e]);else{function _0x4b5517(){const _0x5620c8=_0x253adf;return _0x434a3e[_0x5620c8(0x22a)][_0x5620c8(0x2d7)][_0x5620c8(0x429)]['buttonAssistLargeIncrement'];}}}else{if(BattleManager['isBattleTest']()){if(_0x253adf(0x244)!==_0x253adf(0x244)){function _0x131671(){const _0x55ed25=_0x253adf;let _0x10016d=0x0;const _0x67d820=this[_0x55ed25(0x255)](),_0xc396f3=this[_0x55ed25(0x3e3)]();for(let _0xb28253=0x0;_0xb28253<_0x67d820[_0x55ed25(0x3d3)];_0xb28253++){if(_0x67d820[_0xb28253]===_0x581ae6){_0x10016d=_0xb28253;if(!_0xc396f3[_0xb28253])return _0x10016d;}}return _0x10016d;}}else{const _0x383dd6=$dataArmors[_0x220c4e];if(_0x383dd6['etypeId']===_0xfb2abc+0x1){if(_0x253adf(0x5dd)!==_0x253adf(0x5dd)){function _0x2e4e80(){const _0x40ebe6=_0x253adf,_0x392c67=this['commandName'](_0x184244);if(_0x392c67['match'](/\\I\[(\d+)\]/i)){const _0x56ae6a=this[_0x40ebe6(0x3a8)](_0x2cc1db),_0x566970=this[_0x40ebe6(0x54e)](_0x392c67)[_0x40ebe6(0x533)];return _0x566970<=_0x56ae6a['width']?_0x40ebe6(0x4ac):_0x40ebe6(0x372);}}}else _0x300149[_0x253adf(0x419)](_0x383dd6);}}}else{if(_0x253adf(0x344)===_0x253adf(0x344))_0x300149['push']($dataArmors[_0x220c4e]);else{function _0x59a97c(){const _0x5b427c=_0x253adf;return _0x3fd6b6[_0x5b427c(0x22a)][_0x5b427c(0x2d7)][_0x5b427c(0x4c5)]['MaxArmors'];}}}}}return _0x300149;},Game_Actor[_0x199c58(0x2a8)][_0x199c58(0x31f)]=function(_0x39bbca,_0xa2d8dd){const _0x47ea5c=_0x199c58;for(const _0xaeeedb of _0x39bbca){if(!_0xaeeedb)continue;if(_0xaeeedb['etypeId']===_0xa2d8dd)return _0x39bbca[_0x47ea5c(0x337)](_0x39bbca[_0x47ea5c(0x5df)](_0xaeeedb),0x1),_0xaeeedb;}return null;},Game_Actor[_0x199c58(0x2a8)]['equipSlots']=function(){const _0x1a3ae8=_0x199c58,_0x2ba506=JsonEx[_0x1a3ae8(0x56a)](this[_0x1a3ae8(0x308)]||this[_0x1a3ae8(0x34f)]()[_0x1a3ae8(0x255)]);if(_0x2ba506[_0x1a3ae8(0x3d3)]>=0x2&&this[_0x1a3ae8(0x595)]())_0x2ba506[0x1]=0x1;return _0x2ba506;},Game_Actor[_0x199c58(0x2a8)][_0x199c58(0x2d3)]=function(_0x20dbdc){const _0x2a342c=_0x199c58;_0x20dbdc[_0x2a342c(0x5c7)](0x0),_0x20dbdc[_0x2a342c(0x5c7)](-0x1),this[_0x2a342c(0x308)]=_0x20dbdc,this[_0x2a342c(0x1d4)](),this['updateChangedSlots']();},Game_Actor['prototype'][_0x199c58(0x261)]=function(){const _0x5f1ed0=_0x199c58;this[_0x5f1ed0(0x308)]=undefined,this[_0x5f1ed0(0x1d4)](),this[_0x5f1ed0(0x4bc)]();},Game_Actor[_0x199c58(0x2a8)]['updateChangedSlots']=function(){const _0x26ee51=_0x199c58;let _0x101f7f=this[_0x26ee51(0x255)]()['length'];while(this[_0x26ee51(0x5f0)]['length']>_0x101f7f){const _0x20f680=this[_0x26ee51(0x5f0)][this[_0x26ee51(0x5f0)][_0x26ee51(0x3d3)]-0x1];_0x20f680&&_0x20f680[_0x26ee51(0x22f)]()&&$gameParty[_0x26ee51(0x5f7)](_0x20f680[_0x26ee51(0x22f)](),0x1),this[_0x26ee51(0x5f0)]['pop']();}while(_0x101f7f>this[_0x26ee51(0x5f0)][_0x26ee51(0x3d3)]){this['_equips'][_0x26ee51(0x419)](new Game_Item());}},Game_Actor[_0x199c58(0x2a8)][_0x199c58(0x24f)]=function(){const _0x24d707=_0x199c58,_0x41cc2b=this['equipSlots']();for(let _0x3bb528=0x0;_0x3bb528<_0x41cc2b[_0x24d707(0x3d3)];_0x3bb528++){if(!this[_0x24d707(0x5f0)][_0x3bb528])this[_0x24d707(0x5f0)][_0x3bb528]=new Game_Item();}this[_0x24d707(0x2f7)](![]),this[_0x24d707(0x1d4)]();},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x2e3)]=Game_Actor['prototype'][_0x199c58(0x468)],Game_Actor[_0x199c58(0x2a8)]['changeEquip']=function(_0x100689,_0x19fc25){const _0x12d716=_0x199c58;if(!this[_0x12d716(0x49b)]){const _0x1d3ecf=JsonEx[_0x12d716(0x56a)](this);_0x1d3ecf[_0x12d716(0x49b)]=!![],VisuMZ[_0x12d716(0x22a)][_0x12d716(0x2e3)][_0x12d716(0x2f6)](this,_0x100689,_0x19fc25),this[_0x12d716(0x576)](_0x1d3ecf);}else{if(_0x12d716(0x4d2)!=='KqtPU')VisuMZ[_0x12d716(0x22a)]['Game_Actor_changeEquip'][_0x12d716(0x2f6)](this,_0x100689,_0x19fc25);else{function _0x1d7842(){const _0x4de802=_0x12d716;_0x54521e['ItemsEquipsCore'][_0x4de802(0x27d)][_0x4de802(0x2f6)](this),this[_0x4de802(0x553)][_0x4de802(0x2b7)]();}}}},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x1f3)]=Game_Actor[_0x199c58(0x2a8)][_0x199c58(0x27f)],Game_Actor['prototype'][_0x199c58(0x27f)]=function(_0x358d8f,_0x6fc261){const _0x587842=_0x199c58;if(!this[_0x587842(0x49b)]){if(_0x587842(0x538)!==_0x587842(0x538)){function _0x538a65(){const _0x580943=_0x587842,_0x4026b4=_0x5f0e40[_0x580943(0x56a)](this[_0x580943(0x308)]||this[_0x580943(0x34f)]()[_0x580943(0x255)]);if(_0x4026b4[_0x580943(0x3d3)]>=0x2&&this['isDualWield']())_0x4026b4[0x1]=0x1;return _0x4026b4;}}else{const _0x2f565d=JsonEx[_0x587842(0x56a)](this);_0x2f565d[_0x587842(0x49b)]=!![],VisuMZ['ItemsEquipsCore'][_0x587842(0x1f3)][_0x587842(0x2f6)](this,_0x358d8f,_0x6fc261),this[_0x587842(0x576)](_0x2f565d);}}else{if(_0x587842(0x605)!==_0x587842(0x222))VisuMZ['ItemsEquipsCore'][_0x587842(0x1f3)]['call'](this,_0x358d8f,_0x6fc261);else{function _0x2912f1(){this['postCreateSlotWindowItemsEquipsCore']();}}}},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x591)]=Game_Actor['prototype'][_0x199c58(0x20c)],Game_Actor[_0x199c58(0x2a8)][_0x199c58(0x20c)]=function(_0x332c5a){const _0xf25ca0=_0x199c58;if(!this['_tempActor']){const _0x4e4a9b=JsonEx[_0xf25ca0(0x56a)](this);_0x4e4a9b[_0xf25ca0(0x49b)]=!![],VisuMZ[_0xf25ca0(0x22a)][_0xf25ca0(0x591)][_0xf25ca0(0x2f6)](this,_0x332c5a),this[_0xf25ca0(0x576)](_0x4e4a9b);}else VisuMZ['ItemsEquipsCore']['Game_Actor_discardEquip']['call'](this,_0x332c5a);},Game_Actor[_0x199c58(0x2a8)][_0x199c58(0x2f7)]=function(_0x47546a){const _0x472f4c=_0x199c58;for(;;){if(_0x472f4c(0x311)!==_0x472f4c(0x311)){function _0x4d8f3f(){const _0x1f7934=_0x472f4c;return this[_0x1f7934(0x458)]&&this[_0x1f7934(0x458)]['constructor']===_0x3760c4;}}else{const _0x3a3a48=this['equipSlots'](),_0xa644de=this[_0x472f4c(0x3e3)](),_0x36aa83=_0xa644de[_0x472f4c(0x3d3)];let _0x5494e0=![];for(let _0x32db29=0x0;_0x32db29<_0x36aa83;_0x32db29++){const _0x34b04d=_0xa644de[_0x32db29];if(_0x34b04d&&(!this[_0x472f4c(0x51d)](_0x34b04d)||_0x34b04d['etypeId']!==_0x3a3a48[_0x32db29])){if('UQhFR'!==_0x472f4c(0x4fc)){function _0x86972a(){const _0x96b6a8=_0x472f4c;return this[_0x96b6a8(0x563)]();}}else{!_0x47546a&&this[_0x472f4c(0x599)](null,_0x34b04d);if(!this[_0x472f4c(0x49b)]){if(_0x472f4c(0x550)==='kHdQN'){function _0x1e4d59(){const _0x40482c=_0x472f4c;this[_0x40482c(0x280)](_0x136458);}}else{const _0xcbef09=JsonEx[_0x472f4c(0x56a)](this);_0xcbef09[_0x472f4c(0x49b)]=!![],this[_0x472f4c(0x5f0)][_0x32db29][_0x472f4c(0x3fa)](null),this[_0x472f4c(0x576)](_0xcbef09);}}else this[_0x472f4c(0x5f0)][_0x32db29]['setObject'](null);_0x5494e0=!![];}}}if(!_0x5494e0)break;}}},Game_Actor[_0x199c58(0x2a8)][_0x199c58(0x576)]=function(_0x42d72e){const _0x2ea2e6=_0x199c58;if(this[_0x2ea2e6(0x49b)])return;if(!VisuMZ[_0x2ea2e6(0x22a)][_0x2ea2e6(0x2d7)][_0x2ea2e6(0x581)]['EquipAdjustHpMp'])return;const _0x1778af=Math['round'](_0x42d72e[_0x2ea2e6(0x5de)]()*this[_0x2ea2e6(0x55f)]),_0xe7bb25=Math['round'](_0x42d72e[_0x2ea2e6(0x4d0)]()*this['mmp']);if(this['hp']>0x0)this[_0x2ea2e6(0x213)](_0x1778af);if(this['mp']>0x0)this[_0x2ea2e6(0x339)](_0xe7bb25);},Game_Actor['prototype'][_0x199c58(0x23a)]=function(){const _0x1f299f=_0x199c58,_0x4ca110=this[_0x1f299f(0x255)]()['length'];for(let _0x56e83c=0x0;_0x56e83c<_0x4ca110;_0x56e83c++){if(this[_0x1f299f(0x567)](_0x56e83c))this[_0x1f299f(0x468)](_0x56e83c,null);}},Game_Actor[_0x199c58(0x2a8)][_0x199c58(0x567)]=function(_0x167e20){const _0x3ee353=_0x199c58;if(this[_0x3ee353(0x484)]()['includes'](this['equipSlots']()[_0x167e20])){if(_0x3ee353(0x5bf)!==_0x3ee353(0x5bf)){function _0x17252f(){const _0x273232=_0x3ee353;if(_0x2b10eb[_0x273232(0x40f)]&&_0x58599f[_0x273232(0x231)]!==_0x1f07cf)return _0xa47a84[_0x273232(0x231)];else{if(this[_0x273232(0x50d)]())return this['updatedLayoutStyle']()[_0x273232(0x568)](/LOWER/i);else _0x1380f3[_0x273232(0x2a8)][_0x273232(0x44a)]['call'](this);}}}else return![];}else return this[_0x3ee353(0x25e)](_0x167e20);},Game_Actor['prototype'][_0x199c58(0x484)]=function(){const _0x3b37f0=_0x199c58;return VisuMZ['ItemsEquipsCore'][_0x3b37f0(0x2d7)]['EquipScene'][_0x3b37f0(0x60b)];},Game_Actor[_0x199c58(0x2a8)][_0x199c58(0x50e)]=function(){const _0x524f06=_0x199c58,_0x4b1d28=this[_0x524f06(0x255)]()[_0x524f06(0x3d3)];for(let _0x1de94e=0x0;_0x1de94e<_0x4b1d28;_0x1de94e++){if(this[_0x524f06(0x492)](_0x1de94e))this[_0x524f06(0x468)](_0x1de94e,null);}for(let _0x2b313a=0x0;_0x2b313a<_0x4b1d28;_0x2b313a++){if(this[_0x524f06(0x492)](_0x2b313a))this[_0x524f06(0x468)](_0x2b313a,this[_0x524f06(0x3f2)](_0x2b313a));}},Game_Actor['prototype']['isOptimizeEquipOk']=function(_0x14578b){const _0x3f6744=_0x199c58;return this['nonOptimizeEtypes']()['includes'](this[_0x3f6744(0x255)]()[_0x14578b])?![]:this[_0x3f6744(0x25e)](_0x14578b);},Game_Actor[_0x199c58(0x2a8)]['nonOptimizeEtypes']=function(){const _0x5e07e2=_0x199c58;return VisuMZ['ItemsEquipsCore']['Settings']['EquipScene'][_0x5e07e2(0x34a)];},VisuMZ['ItemsEquipsCore'][_0x199c58(0x1d2)]=Game_Actor[_0x199c58(0x2a8)][_0x199c58(0x599)],Game_Actor['prototype']['tradeItemWithParty']=function(_0x5b022b,_0x2971c0){const _0x44e7ae=_0x199c58;if(this[_0x44e7ae(0x49b)])return![];$gameTemp['_bypassNewLabel']=!![];const _0x27409a=VisuMZ[_0x44e7ae(0x22a)][_0x44e7ae(0x1d2)][_0x44e7ae(0x2f6)](this,_0x5b022b,_0x2971c0);return $gameTemp['_bypassNewLabel']=![],_0x27409a;},Game_Actor['prototype'][_0x199c58(0x1f2)]=function(_0x40c73b,_0x447c99){const _0x531070=_0x199c58,_0x1cab85=this[_0x531070(0x2f1)](_0x40c73b);if(_0x1cab85<0x0)return;const _0x13286a=_0x40c73b===0x1?$dataWeapons[_0x447c99]:$dataArmors[_0x447c99];this[_0x531070(0x468)](_0x1cab85,_0x13286a);},Game_Actor[_0x199c58(0x2a8)][_0x199c58(0x2f1)]=function(_0x2d5275){const _0x1387c7=_0x199c58;let _0x22bfaf=0x0;const _0x5f0e36=this[_0x1387c7(0x255)](),_0x4fd931=this[_0x1387c7(0x3e3)]();for(let _0x5cbcac=0x0;_0x5cbcac<_0x5f0e36[_0x1387c7(0x3d3)];_0x5cbcac++){if('PuSIV'==='Faety'){function _0x4e6d9f(){this['drawEquipData']();}}else{if(_0x5f0e36[_0x5cbcac]===_0x2d5275){_0x22bfaf=_0x5cbcac;if(!_0x4fd931[_0x5cbcac])return _0x22bfaf;}}}return _0x22bfaf;},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x210)]=Game_Actor['prototype'][_0x199c58(0x2be)],Game_Actor[_0x199c58(0x2a8)][_0x199c58(0x2be)]=function(_0x266cab){const _0x5a9778=_0x199c58;let _0x4637ca=VisuMZ[_0x5a9778(0x22a)]['Game_Actor_paramPlus']['call'](this,_0x266cab);for(const _0x558306 of this[_0x5a9778(0x3e3)]()){if('uTBSp'===_0x5a9778(0x3ec)){function _0x88956e(){const _0x26bf9f=_0x5a9778;this[_0x26bf9f(0x334)]=!![];}}else{if(_0x558306)_0x4637ca+=this[_0x5a9778(0x2d1)](_0x558306,_0x266cab);}}return _0x4637ca;},Game_Actor[_0x199c58(0x2a8)][_0x199c58(0x2d1)]=function(_0x169119,_0x1d5794){const _0x58c1b4=_0x199c58;if(this[_0x58c1b4(0x417)])return 0x0;const _0x3c0cd4=(DataManager['isWeapon'](_0x169119)?_0x58c1b4(0x1c3):_0x58c1b4(0x20e))['format'](_0x169119['id']),_0x59303f=_0x58c1b4(0x46c)[_0x58c1b4(0x257)](_0x3c0cd4,_0x1d5794);if(VisuMZ[_0x58c1b4(0x22a)]['paramJS'][_0x59303f]){this[_0x58c1b4(0x417)]=!![];const _0x3e7ea0=VisuMZ[_0x58c1b4(0x22a)][_0x58c1b4(0x428)][_0x59303f][_0x58c1b4(0x2f6)](this,_0x169119,_0x1d5794);return this[_0x58c1b4(0x417)]=![],_0x3e7ea0;}else{if(_0x58c1b4(0x459)===_0x58c1b4(0x5e4)){function _0x28c416(){const _0x49042b=_0x58c1b4,_0x5345d5=this['commandName'](_0xdb4488);if(_0x5345d5[_0x49042b(0x568)](/\\I\[(\d+)\]/i)){const _0x3dada7=_0x4a1531(_0x5294bf['$1'])||0x0,_0x1d87f9=this['itemLineRect'](_0xced35f),_0xe763fb=_0x1d87f9['x']+_0x51c51f['floor']((_0x1d87f9[_0x49042b(0x533)]-_0x2e32db[_0x49042b(0x366)])/0x2),_0x4b3aab=_0x1d87f9['y']+(_0x1d87f9['height']-_0x2ecfa3[_0x49042b(0x224)])/0x2;this[_0x49042b(0x1fe)](_0x3dada7,_0xe763fb,_0x4b3aab);}}}else return 0x0;}},Game_Actor['prototype'][_0x199c58(0x23c)]=function(_0x4b864f){const _0x1b1740=_0x199c58;this[_0x1b1740(0x45d)]=!![],this[_0x1b1740(0x4b7)]=_0x4b864f;},VisuMZ['ItemsEquipsCore'][_0x199c58(0x2a5)]=Game_Party[_0x199c58(0x2a8)][_0x199c58(0x320)],Game_Party['prototype'][_0x199c58(0x320)]=function(){const _0x9f9ac3=_0x199c58;VisuMZ['ItemsEquipsCore'][_0x9f9ac3(0x2a5)][_0x9f9ac3(0x2f6)](this),this[_0x9f9ac3(0x4cc)]();},Game_Party[_0x199c58(0x2a8)][_0x199c58(0x4cc)]=function(){const _0x1fb1d7=_0x199c58;this[_0x1fb1d7(0x582)]=[];},Game_Party['prototype'][_0x199c58(0x4b1)]=function(_0xf8be25){const _0x10b0b5=_0x199c58;if(!$gameTemp['newLabelEnabled']())return![];if(this['_newItemsList']===undefined)this[_0x10b0b5(0x4cc)]();let _0x55d850='';if(DataManager[_0x10b0b5(0x44e)](_0xf8be25))_0x55d850=_0x10b0b5(0x37a)[_0x10b0b5(0x257)](_0xf8be25['id']);else{if(DataManager[_0x10b0b5(0x20a)](_0xf8be25))_0x55d850='weapon-%1'[_0x10b0b5(0x257)](_0xf8be25['id']);else{if(DataManager[_0x10b0b5(0x3f0)](_0xf8be25))_0x55d850=_0x10b0b5(0x258)[_0x10b0b5(0x257)](_0xf8be25['id']);else{if('rNuVk'!==_0x10b0b5(0x380)){function _0xbbdeed(){const _0x8ad2a7=_0x10b0b5;_0x168cdd=_0x432535['param'](_0x495f7b),_0x3a5787=_0x16bed9-_0x29326f[_0x8ad2a7(0x2d8)](_0x518696),this['changeTextColor'](_0xff0e09['paramchangeTextColor'](_0x1ddfd1)),_0x240e7b=(_0x1cb35a>=0x0?'+':'')+_0x54faca;}}else return;}}}return this[_0x10b0b5(0x582)][_0x10b0b5(0x2b1)](_0x55d850);},Game_Party[_0x199c58(0x2a8)][_0x199c58(0x4ed)]=function(_0x5c4a86){const _0x195170=_0x199c58;if(!$gameTemp[_0x195170(0x4e0)]())return;if(this[_0x195170(0x582)]===undefined)this['initNewItemsList']();let _0x2ca8dd='';if(DataManager[_0x195170(0x44e)](_0x5c4a86))_0x2ca8dd=_0x195170(0x37a)['format'](_0x5c4a86['id']);else{if(DataManager[_0x195170(0x20a)](_0x5c4a86))_0x2ca8dd=_0x195170(0x5d3)[_0x195170(0x257)](_0x5c4a86['id']);else{if(DataManager[_0x195170(0x3f0)](_0x5c4a86))_0x2ca8dd=_0x195170(0x258)[_0x195170(0x257)](_0x5c4a86['id']);else return;}}if(!this[_0x195170(0x582)][_0x195170(0x2b1)](_0x2ca8dd))this[_0x195170(0x582)][_0x195170(0x419)](_0x2ca8dd);},Game_Party['prototype'][_0x199c58(0x608)]=function(_0x57456c){const _0x251ad1=_0x199c58;if(!$gameTemp[_0x251ad1(0x4e0)]())return;if(this[_0x251ad1(0x582)]===undefined)this[_0x251ad1(0x4cc)]();let _0x59fcfd='';if(DataManager[_0x251ad1(0x44e)](_0x57456c))_0x59fcfd=_0x251ad1(0x37a)[_0x251ad1(0x257)](_0x57456c['id']);else{if(DataManager[_0x251ad1(0x20a)](_0x57456c))_0x59fcfd='weapon-%1'[_0x251ad1(0x257)](_0x57456c['id']);else{if(DataManager[_0x251ad1(0x3f0)](_0x57456c)){if('hEpbN'!==_0x251ad1(0x325)){function _0x4cb98a(){const _0x35d461=_0x251ad1;return _0x58cafd[_0x35d461(0x458)][_0x35d461(0x50d)]()?0x1:0x2;}}else _0x59fcfd=_0x251ad1(0x258)[_0x251ad1(0x257)](_0x57456c['id']);}else{if(_0x251ad1(0x54b)===_0x251ad1(0x3b8)){function _0x29c6ba(){const _0x3acdf7=_0x251ad1;this[_0x3acdf7(0x408)]();}}else return;}}}this['_newItemsList'][_0x251ad1(0x2b1)](_0x59fcfd)&&this[_0x251ad1(0x582)][_0x251ad1(0x337)](this[_0x251ad1(0x582)][_0x251ad1(0x5df)](_0x59fcfd),0x1);},VisuMZ['ItemsEquipsCore'][_0x199c58(0x39b)]=Game_Party['prototype'][_0x199c58(0x5f7)],Game_Party['prototype']['gainItem']=function(_0x18d5b3,_0xd2f058,_0x3c3c3){const _0x10de25=_0x199c58,_0x459153=this['numItems'](_0x18d5b3);VisuMZ['ItemsEquipsCore']['Game_Party_gainItem']['call'](this,_0x18d5b3,_0xd2f058,_0x3c3c3);if(this[_0x10de25(0x525)](_0x18d5b3)>_0x459153)this[_0x10de25(0x4ed)](_0x18d5b3);},Game_Party['prototype']['maxItems']=function(_0xcf6d97){return DataManager['maxItemAmount'](_0xcf6d97);},VisuMZ['ItemsEquipsCore'][_0x199c58(0x27d)]=Scene_ItemBase['prototype'][_0x199c58(0x4ae)],Scene_ItemBase[_0x199c58(0x2a8)][_0x199c58(0x4ae)]=function(){const _0x297f0e=_0x199c58;VisuMZ[_0x297f0e(0x22a)][_0x297f0e(0x27d)][_0x297f0e(0x2f6)](this),this[_0x297f0e(0x553)][_0x297f0e(0x2b7)]();},Scene_Item[_0x199c58(0x2a8)][_0x199c58(0x491)]=function(){const _0x1b3884=_0x199c58;if(ConfigManager[_0x1b3884(0x40f)]&&ConfigManager[_0x1b3884(0x231)]!==undefined)return ConfigManager[_0x1b3884(0x231)];else{if(this[_0x1b3884(0x50d)]())return this[_0x1b3884(0x4ca)]()[_0x1b3884(0x568)](/LOWER/i);else Scene_ItemBase[_0x1b3884(0x2a8)][_0x1b3884(0x44a)][_0x1b3884(0x2f6)](this);}},Scene_Item[_0x199c58(0x2a8)]['isRightInputMode']=function(){const _0x35be85=_0x199c58;if(ConfigManager[_0x35be85(0x40f)]&&ConfigManager['uiInputPosition']!==undefined){if('NyjLo'!==_0x35be85(0x5cd)){function _0x219f26(){const _0x2fd463=_0x35be85;this[_0x2fd463(0x3c8)]()&&(this[_0x2fd463(0x49f)][_0x2fd463(0x2f2)](),this[_0x2fd463(0x49f)][_0x2fd463(0x228)]()),_0x3ff6a4[_0x2fd463(0x22a)][_0x2fd463(0x262)]['call'](this);}}else return ConfigManager['uiInputPosition'];}else{if(this[_0x35be85(0x50d)]())return this[_0x35be85(0x4ca)]()[_0x35be85(0x568)](/RIGHT/i);else Scene_ItemBase[_0x35be85(0x2a8)][_0x35be85(0x44a)]['call'](this);}},Scene_Item[_0x199c58(0x2a8)][_0x199c58(0x4ca)]=function(){const _0xf48668=_0x199c58;return VisuMZ[_0xf48668(0x22a)][_0xf48668(0x2d7)][_0xf48668(0x4c5)]['LayoutStyle'];},Scene_Item[_0x199c58(0x2a8)][_0x199c58(0x3c8)]=function(){const _0x7d0bc0=_0x199c58;return this[_0x7d0bc0(0x218)]&&this[_0x7d0bc0(0x218)][_0x7d0bc0(0x3c8)]();},Scene_Item['prototype']['isUseItemsEquipsCoreUpdatedLayout']=function(){const _0x26f720=_0x199c58;return VisuMZ[_0x26f720(0x22a)][_0x26f720(0x2d7)][_0x26f720(0x4c5)]['EnableLayout'];},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x2f3)]=Scene_Item[_0x199c58(0x2a8)][_0x199c58(0x1c7)],Scene_Item[_0x199c58(0x2a8)][_0x199c58(0x1c7)]=function(){const _0x3d7a54=_0x199c58;VisuMZ[_0x3d7a54(0x22a)][_0x3d7a54(0x2f3)][_0x3d7a54(0x2f6)](this);if(this['isUseModernControls']()){if(_0x3d7a54(0x23b)!==_0x3d7a54(0x4d7))this[_0x3d7a54(0x5bb)]();else{function _0x5eb1ef(){const _0x4884fd=_0x3d7a54;return this[_0x4884fd(0x21e)]();}}}},Scene_Item[_0x199c58(0x2a8)][_0x199c58(0x4a1)]=function(){const _0xf1f03b=_0x199c58;if(this[_0xf1f03b(0x50d)]()){if('gVsMJ'==='xyXiE'){function _0x3e22ad(){const _0x36be82=_0xf1f03b;_0x3f98cc['playEquip']();const _0xf12be2=_0x9fe75c['_scene'][_0x36be82(0x2e7)];_0xf12be2['changeEquip'](this['index'](),null),this['refresh'](),this[_0x36be82(0x553)][_0x36be82(0x1d4)](),this['callUpdateHelp']();const _0x3ad8f8=_0x51f72b[_0x36be82(0x458)][_0x36be82(0x4a9)];if(_0x3ad8f8)_0x3ad8f8[_0x36be82(0x1d4)]();}}else return this[_0xf1f03b(0x449)]();}else return Scene_ItemBase[_0xf1f03b(0x2a8)][_0xf1f03b(0x4a1)]['call'](this);},Scene_Item[_0x199c58(0x2a8)]['helpWindowRectItemsEquipsCore']=function(){const _0x7f80a4=_0x199c58,_0x18c60b=0x0,_0xacd21a=this[_0x7f80a4(0x536)](),_0x1b9677=Graphics[_0x7f80a4(0x3c4)],_0x411f4b=this[_0x7f80a4(0x36e)]();return new Rectangle(_0x18c60b,_0xacd21a,_0x1b9677,_0x411f4b);},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x265)]=Scene_Item['prototype']['createCategoryWindow'],Scene_Item[_0x199c58(0x2a8)]['createCategoryWindow']=function(){const _0x36e833=_0x199c58;VisuMZ[_0x36e833(0x22a)][_0x36e833(0x265)]['call'](this);if(this[_0x36e833(0x3c8)]()){if(_0x36e833(0x527)!=='tjBMy')this[_0x36e833(0x367)]();else{function _0x14e2e3(){const _0xa32729=_0x36e833;return _0x29f207['ItemsEquipsCore'][_0xa32729(0x2d7)][_0xa32729(0x386)]['SpeedNeg2000'];}}}},Scene_Item['prototype'][_0x199c58(0x367)]=function(){const _0x3ff4e2=_0x199c58;delete this[_0x3ff4e2(0x218)][_0x3ff4e2(0x44d)]['ok'],delete this[_0x3ff4e2(0x218)][_0x3ff4e2(0x44d)]['cancel'];},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x433)]=Scene_Item[_0x199c58(0x2a8)][_0x199c58(0x363)],Scene_Item['prototype'][_0x199c58(0x363)]=function(){const _0x5e8925=_0x199c58;return this[_0x5e8925(0x50d)]()?this[_0x5e8925(0x1ef)]():VisuMZ[_0x5e8925(0x22a)][_0x5e8925(0x433)]['call'](this);},Scene_Item[_0x199c58(0x2a8)][_0x199c58(0x1ef)]=function(){const _0x4ad617=_0x199c58,_0x4e30a0=0x0,_0x2cc40b=this[_0x4ad617(0x395)](),_0x527e73=Graphics[_0x4ad617(0x3c4)],_0x597d72=this[_0x4ad617(0x2d4)](0x1,!![]);return new Rectangle(_0x4e30a0,_0x2cc40b,_0x527e73,_0x597d72);},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x447)]=Scene_Item[_0x199c58(0x2a8)][_0x199c58(0x28a)],Scene_Item['prototype'][_0x199c58(0x28a)]=function(){const _0x4e3279=_0x199c58;VisuMZ[_0x4e3279(0x22a)]['Scene_Item_createItemWindow'][_0x4e3279(0x2f6)](this);if(this[_0x4e3279(0x3c8)]()){if('rOVGp'==='ueuJG'){function _0x1758d7(){const _0x1f3756=_0x4e3279,_0x5f4bf0=0x0,_0x1b1a77=this['helpAreaTop'](),_0x42abb8=_0xe03c12[_0x1f3756(0x3c4)],_0x487e8d=this['helpAreaHeight']();return new _0x44a310(_0x5f4bf0,_0x1b1a77,_0x42abb8,_0x487e8d);}}else this[_0x4e3279(0x369)]();}this['allowCreateStatusWindow']()&&this['createStatusWindow']();},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x46e)]=Scene_Item[_0x199c58(0x2a8)][_0x199c58(0x3a1)],Scene_Item[_0x199c58(0x2a8)]['itemWindowRect']=function(){const _0x5ab780=_0x199c58;if(this['isUseItemsEquipsCoreUpdatedLayout']())return this[_0x5ab780(0x219)]();else{if('ZZuDY'!==_0x5ab780(0x4c4)){function _0x36bd8a(){return _0x40c606['uiInputPosition'];}}else{const _0x27da39=VisuMZ[_0x5ab780(0x22a)][_0x5ab780(0x46e)]['call'](this);return this['allowCreateStatusWindow']()&&this['adjustItemWidthByStatus']()&&(_0x27da39[_0x5ab780(0x533)]-=this[_0x5ab780(0x1e8)]()),_0x27da39;}}},Scene_Item[_0x199c58(0x2a8)]['itemWindowRectItemsEquipsCore']=function(){const _0x43afbe=_0x199c58,_0x499120=this[_0x43afbe(0x44a)]()?this[_0x43afbe(0x1e8)]():0x0,_0x3e7b62=this[_0x43afbe(0x218)]['y']+this[_0x43afbe(0x218)][_0x43afbe(0x33f)],_0x236023=Graphics['boxWidth']-this[_0x43afbe(0x1e8)](),_0x454933=this[_0x43afbe(0x434)]()-_0x3e7b62;return new Rectangle(_0x499120,_0x3e7b62,_0x236023,_0x454933);},Scene_Item[_0x199c58(0x2a8)]['postCreateItemWindowModernControls']=function(){const _0x2aabdb=_0x199c58;this[_0x2aabdb(0x553)]['setHandler'](_0x2aabdb(0x4a6),this[_0x2aabdb(0x352)]['bind'](this));},Scene_Item[_0x199c58(0x2a8)][_0x199c58(0x282)]=function(){const _0x506dd4=_0x199c58;if(this[_0x506dd4(0x50d)]()){if(_0x506dd4(0x27b)==='TVSvp')return!![];else{function _0x2598b4(){const _0x4bca86=_0x506dd4;this[_0x4bca86(0x46a)](_0x5ef106);}}}else return VisuMZ[_0x506dd4(0x22a)]['Settings']['ItemScene']['ShowShopStatus'];},Scene_Item[_0x199c58(0x2a8)][_0x199c58(0x304)]=function(){const _0x3b1f55=_0x199c58;return VisuMZ[_0x3b1f55(0x22a)][_0x3b1f55(0x2d7)][_0x3b1f55(0x4c5)][_0x3b1f55(0x3de)];},Scene_Item[_0x199c58(0x2a8)]['createStatusWindow']=function(){const _0x51c3a6=_0x199c58,_0x5123bf=this[_0x51c3a6(0x4f9)]();this['_statusWindow']=new Window_ShopStatus(_0x5123bf),this[_0x51c3a6(0x35e)](this[_0x51c3a6(0x4a9)]),this['_itemWindow']['setStatusWindow'](this[_0x51c3a6(0x4a9)]);const _0x3fbf3b=VisuMZ[_0x51c3a6(0x22a)]['Settings']['ItemScene'][_0x51c3a6(0x30e)];this[_0x51c3a6(0x4a9)]['setBackgroundType'](_0x3fbf3b||0x0);},Scene_Item[_0x199c58(0x2a8)][_0x199c58(0x4f9)]=function(){const _0x41d2a4=_0x199c58;return this[_0x41d2a4(0x50d)]()?this['statusWindowRectItemsEquipsCore']():VisuMZ['ItemsEquipsCore'][_0x41d2a4(0x2d7)][_0x41d2a4(0x4c5)][_0x41d2a4(0x26f)][_0x41d2a4(0x2f6)](this);},Scene_Item[_0x199c58(0x2a8)][_0x199c58(0x390)]=function(){const _0x399e98=_0x199c58,_0x4d425f=this[_0x399e98(0x1e8)](),_0x51883c=this['_itemWindow']['height'],_0x57cf4b=this[_0x399e98(0x44a)]()?0x0:Graphics['boxWidth']-this[_0x399e98(0x1e8)](),_0xe1ae97=this[_0x399e98(0x553)]['y'];return new Rectangle(_0x57cf4b,_0xe1ae97,_0x4d425f,_0x51883c);},Scene_Item[_0x199c58(0x2a8)][_0x199c58(0x1e8)]=function(){const _0x31bf9e=_0x199c58;return Scene_Shop['prototype'][_0x31bf9e(0x1e8)]();},Scene_Item['prototype']['buttonAssistItemListRequirement']=function(){const _0x539194=_0x199c58;if(!this[_0x539194(0x4ca)]())return![];if(!this[_0x539194(0x3c8)]())return![];if(!this['_itemWindow'])return![];if(!this[_0x539194(0x553)][_0x539194(0x2d9)])return![];return this[_0x539194(0x4ca)]()&&this[_0x539194(0x3c8)]();},Scene_Item[_0x199c58(0x2a8)]['buttonAssistKey1']=function(){const _0x23623f=_0x199c58;if(this[_0x23623f(0x3e6)]())return this[_0x23623f(0x553)][_0x23623f(0x52c)]()===0x1?TextManager[_0x23623f(0x4b4)](_0x23623f(0x389),_0x23623f(0x2b5)):TextManager[_0x23623f(0x4b4)](_0x23623f(0x592),_0x23623f(0x435));return Scene_ItemBase[_0x23623f(0x2a8)][_0x23623f(0x2bc)][_0x23623f(0x2f6)](this);},Scene_Item['prototype'][_0x199c58(0x35d)]=function(){const _0x9aa6a6=_0x199c58;if(this['buttonAssistItemListRequirement']())return VisuMZ[_0x9aa6a6(0x22a)]['Settings'][_0x9aa6a6(0x4c5)][_0x9aa6a6(0x523)];return Scene_ItemBase[_0x9aa6a6(0x2a8)]['buttonAssistText1'][_0x9aa6a6(0x2f6)](this);},Scene_Equip['prototype'][_0x199c58(0x491)]=function(){const _0x5ed854=_0x199c58;if(ConfigManager['uiMenuStyle']&&ConfigManager[_0x5ed854(0x231)]!==undefined){if('cRpro'!==_0x5ed854(0x50f))return ConfigManager[_0x5ed854(0x231)];else{function _0x1525bb(){const _0x28c2a3=_0x5ed854;this[_0x28c2a3(0x3b0)](_0x2f0a65,_0x14fdd5,_0x5dccd5,_0x499deb,!![]),_0x2f2ef8['CoreEngine'][_0x28c2a3(0x2d7)][_0x28c2a3(0x554)][_0x28c2a3(0x2c9)]&&(_0x706548+=_0xa40453[_0x28c2a3(0x366)]+0x4);}}}else{if(this[_0x5ed854(0x50d)]()){if('vSWbk'!=='Pmizh')return this[_0x5ed854(0x4ca)]()[_0x5ed854(0x568)](/LOWER/i);else{function _0x577bb9(){const _0x439fbc=_0x5ed854;this[_0x439fbc(0x252)](),_0x398cc1[_0x439fbc(0x22a)][_0x439fbc(0x51b)][_0x439fbc(0x2f6)](this);}}}else{if(_0x5ed854(0x2e1)===_0x5ed854(0x2e1))Scene_MenuBase[_0x5ed854(0x2a8)][_0x5ed854(0x44a)]['call'](this);else{function _0x575149(){const _0x2f892b=_0x5ed854;if(this[_0x2f892b(0x3e6)]())return _0x57960c[_0x2f892b(0x22a)][_0x2f892b(0x2d7)][_0x2f892b(0x4c5)][_0x2f892b(0x523)];return _0x17effe[_0x2f892b(0x2a8)][_0x2f892b(0x35d)][_0x2f892b(0x2f6)](this);}}}}},Scene_Equip[_0x199c58(0x2a8)]['isRightInputMode']=function(){const _0x250b1d=_0x199c58;if(ConfigManager['uiMenuStyle']&&ConfigManager[_0x250b1d(0x3fb)]!==undefined){if(_0x250b1d(0x4b0)===_0x250b1d(0x4b0))return ConfigManager[_0x250b1d(0x3fb)];else{function _0x48f3df(){return;}}}else{if(this[_0x250b1d(0x50d)]()){if('GWaWQ'!=='GWaWQ'){function _0x4d4873(){const _0x3bd90a=_0x250b1d,_0x52e4c7=_0x33ec6f[_0x3bd90a(0x2fa)]('['+_0x303b0d['$1'][_0x3bd90a(0x568)](/\d+/g)+']');for(const _0x3504df of _0x52e4c7){if(!_0xed39ec[_0x3bd90a(0x4a3)](_0x3504df))return![];}return!![];}}else return this[_0x250b1d(0x4ca)]()[_0x250b1d(0x568)](/RIGHT/i);}else Scene_MenuBase[_0x250b1d(0x2a8)][_0x250b1d(0x44a)][_0x250b1d(0x2f6)](this);}},Scene_Equip[_0x199c58(0x2a8)]['updatedLayoutStyle']=function(){const _0x12aa61=_0x199c58;return VisuMZ[_0x12aa61(0x22a)][_0x12aa61(0x2d7)][_0x12aa61(0x581)][_0x12aa61(0x225)];},Scene_Equip[_0x199c58(0x2a8)][_0x199c58(0x3c8)]=function(){const _0x1ce43c=_0x199c58;return this['_commandWindow']&&this[_0x1ce43c(0x49f)]['isUseModernControls']();},Scene_Equip[_0x199c58(0x2a8)][_0x199c58(0x50d)]=function(){const _0x3f9458=_0x199c58;return VisuMZ[_0x3f9458(0x22a)][_0x3f9458(0x2d7)]['EquipScene'][_0x3f9458(0x274)];},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x269)]=Scene_Equip[_0x199c58(0x2a8)][_0x199c58(0x1c7)],Scene_Equip[_0x199c58(0x2a8)][_0x199c58(0x1c7)]=function(){const _0x515843=_0x199c58;VisuMZ[_0x515843(0x22a)][_0x515843(0x269)]['call'](this);if(this[_0x515843(0x3c8)]()){if(_0x515843(0x56d)===_0x515843(0x56d))this[_0x515843(0x271)]();else{function _0x1e8fe5(){const _0x5827e4=_0x515843;_0xc5c263[_0x5827e4(0x22a)]['Scene_Item_createItemWindow'][_0x5827e4(0x2f6)](this),this['isUseModernControls']()&&this[_0x5827e4(0x369)](),this[_0x5827e4(0x282)]()&&this['createStatusWindow']();}}}},Scene_Equip[_0x199c58(0x2a8)][_0x199c58(0x4a1)]=function(){const _0x1077ea=_0x199c58;if(this['isUseItemsEquipsCoreUpdatedLayout']()){if(_0x1077ea(0x2ee)==='Ivyvf'){function _0x477a9d(){const _0x3a4c17=_0x1077ea,_0x1cbe1b=_0x3db854[_0x3a4c17(0x22a)][_0x3a4c17(0x2d7)][_0x3a4c17(0x386)]['LabelSelfGainTP'];return _0x1cbe1b[_0x3a4c17(0x257)](_0x4c6063['tp']);}}else return this[_0x1077ea(0x449)]();}else return Scene_MenuBase[_0x1077ea(0x2a8)][_0x1077ea(0x4a1)]['call'](this);},Scene_Equip['prototype']['helpWindowRectItemsEquipsCore']=function(){const _0xc0f05d=_0x199c58,_0x1f0b45=0x0,_0x4e4c6e=this[_0xc0f05d(0x536)](),_0x214819=Graphics[_0xc0f05d(0x3c4)],_0x50b288=this[_0xc0f05d(0x36e)]();return new Rectangle(_0x1f0b45,_0x4e4c6e,_0x214819,_0x50b288);},VisuMZ['ItemsEquipsCore'][_0x199c58(0x555)]=Scene_Equip[_0x199c58(0x2a8)][_0x199c58(0x4f9)],Scene_Equip[_0x199c58(0x2a8)]['statusWindowRect']=function(){const _0x476637=_0x199c58;if(this[_0x476637(0x50d)]()){if('gFBvZ'==='gFBvZ')return this[_0x476637(0x390)]();else{function _0x311b58(){const _0x40ce93=_0x476637;return this[_0x40ce93(0x1e7)]();}}}else{if('WNUYn'!=='WNUYn'){function _0x544724(){const _0x4389aa=_0x476637,_0x3739c7=_0x5d5846[_0x416faa];if(_0x3739c7&&_0x3739c7[_0x4389aa(0x4c9)]>0x0){_0x27922b+=_0x4389aa(0x4d5)[_0x4389aa(0x257)](_0x3739c7[_0x4389aa(0x4c9)]),_0x5eee4f++;if(_0x1389fb>=_0x2997de)return _0x1033e5;}}}else return VisuMZ['ItemsEquipsCore'][_0x476637(0x555)][_0x476637(0x2f6)](this);}},Scene_Equip[_0x199c58(0x2a8)][_0x199c58(0x390)]=function(){const _0x38bc40=_0x199c58,_0x54ed6c=this[_0x38bc40(0x44a)]()?0x0:Graphics[_0x38bc40(0x3c4)]-this[_0x38bc40(0x1e8)](),_0x20f041=this[_0x38bc40(0x395)](),_0x4cbb1e=this[_0x38bc40(0x1e8)](),_0x17c55c=this[_0x38bc40(0x359)]();return new Rectangle(_0x54ed6c,_0x20f041,_0x4cbb1e,_0x17c55c);},VisuMZ['ItemsEquipsCore'][_0x199c58(0x238)]=Scene_Equip[_0x199c58(0x2a8)]['commandWindowRect'],Scene_Equip[_0x199c58(0x2a8)][_0x199c58(0x35c)]=function(){const _0x3a23ad=_0x199c58;return this[_0x3a23ad(0x50d)]()?this[_0x3a23ad(0x55a)]():VisuMZ[_0x3a23ad(0x22a)]['Scene_Equip_commandWindowRect'][_0x3a23ad(0x2f6)](this);},Scene_Equip[_0x199c58(0x2a8)]['shouldCommandWindowExist']=function(){const _0x246b15=_0x199c58,_0x1be499=VisuMZ[_0x246b15(0x22a)]['Settings'][_0x246b15(0x581)];return _0x1be499[_0x246b15(0x49a)]||_0x1be499[_0x246b15(0x411)];},Scene_Equip[_0x199c58(0x2a8)][_0x199c58(0x55a)]=function(){const _0xe1a4d8=_0x199c58,_0x49aee4=this[_0xe1a4d8(0x521)](),_0x34d009=this[_0xe1a4d8(0x44a)]()?this[_0xe1a4d8(0x1e8)]():0x0,_0x4164fc=this[_0xe1a4d8(0x395)](),_0x4530af=Graphics['boxWidth']-this[_0xe1a4d8(0x1e8)](),_0x193307=_0x49aee4?this[_0xe1a4d8(0x2d4)](0x1,!![]):0x0;return new Rectangle(_0x34d009,_0x4164fc,_0x4530af,_0x193307);},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x594)]=Scene_Equip[_0x199c58(0x2a8)][_0x199c58(0x5f1)],Scene_Equip[_0x199c58(0x2a8)][_0x199c58(0x5f1)]=function(){const _0x420ce8=_0x199c58;VisuMZ['ItemsEquipsCore']['Scene_Equip_createSlotWindow']['call'](this),this[_0x420ce8(0x3c8)]()&&this[_0x420ce8(0x3b5)]();},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x2c4)]=Scene_Equip['prototype']['slotWindowRect'],Scene_Equip[_0x199c58(0x2a8)]['slotWindowRect']=function(){const _0x2251d4=_0x199c58;if(this[_0x2251d4(0x50d)]())return this[_0x2251d4(0x48a)]();else{if('tZOSC'!==_0x2251d4(0x56f))return VisuMZ[_0x2251d4(0x22a)][_0x2251d4(0x2c4)][_0x2251d4(0x2f6)](this);else{function _0x24fa96(){const _0x539d46=_0x2251d4,_0x2b9ce6=_0xf1d590[_0x539d46(0x56a)](this[_0x539d46(0x2e7)]);_0x2b9ce6['_tempActor']=!![],_0x2b9ce6[_0x539d46(0x27f)](this[_0x539d46(0x1da)],this['item']()),this[_0x539d46(0x4a9)][_0x539d46(0x33d)](_0x2b9ce6);}}}},Scene_Equip[_0x199c58(0x2a8)][_0x199c58(0x48a)]=function(){const _0x1a7f8d=_0x199c58,_0x3278bc=this[_0x1a7f8d(0x35c)](),_0x5dcf4e=this[_0x1a7f8d(0x44a)]()?this[_0x1a7f8d(0x1e8)]():0x0,_0x501b83=_0x3278bc['y']+_0x3278bc[_0x1a7f8d(0x33f)],_0x5711f4=Graphics[_0x1a7f8d(0x3c4)]-this[_0x1a7f8d(0x1e8)](),_0x372744=this['mainAreaHeight']()-_0x3278bc[_0x1a7f8d(0x33f)];return new Rectangle(_0x5dcf4e,_0x501b83,_0x5711f4,_0x372744);},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x4b6)]=Scene_Equip[_0x199c58(0x2a8)]['itemWindowRect'],Scene_Equip[_0x199c58(0x2a8)][_0x199c58(0x3a1)]=function(){const _0x2a85df=_0x199c58;return this['isUseItemsEquipsCoreUpdatedLayout']()?this[_0x2a85df(0x21e)]():VisuMZ[_0x2a85df(0x22a)][_0x2a85df(0x4b6)][_0x2a85df(0x2f6)](this);},Scene_Equip[_0x199c58(0x2a8)][_0x199c58(0x1e8)]=function(){const _0x25b71f=_0x199c58;if(this[_0x25b71f(0x50d)]()){if(_0x25b71f(0x486)!==_0x25b71f(0x21f))return this[_0x25b71f(0x563)]();else{function _0x2dc40c(){return!![];}}}else{if(_0x25b71f(0x4c8)!==_0x25b71f(0x4c8)){function _0x926217(){const _0x126218=_0x25b71f;if(_0x1aa4ae[_0x126218(0x568)](/(.*):[ ](.*)/i)){const _0x4c689c=_0x195a3e(_0x5734c3['$1'])[_0x126218(0x2ac)](),_0x1704e3=_0xc7c3d0(_0x11038b['$2'])[_0x126218(0x2ac)]();this['drawItemCustomEntryLine'](_0x4c689c,_0x1704e3,_0x561b0e,_0x369ca1,_0x38c623),_0x5c13d5+=this[_0x126218(0x264)]();}}}else return VisuMZ[_0x25b71f(0x22a)][_0x25b71f(0x2d7)][_0x25b71f(0x581)][_0x25b71f(0x4c7)];}},Scene_Equip['prototype']['geUpdatedLayoutStatusWidth']=function(){const _0x3d823d=_0x199c58;return Math[_0x3d823d(0x473)](Graphics[_0x3d823d(0x3c4)]/0x2);},Scene_Equip[_0x199c58(0x2a8)]['postCreateSlotWindowItemsEquipsCore']=function(){const _0x30b512=_0x199c58;this[_0x30b512(0x37d)][_0x30b512(0x3e5)]('cancel',this['popScene'][_0x30b512(0x426)](this)),this[_0x30b512(0x37d)][_0x30b512(0x3e5)](_0x30b512(0x435),this[_0x30b512(0x2f4)][_0x30b512(0x426)](this)),this[_0x30b512(0x37d)][_0x30b512(0x3e5)](_0x30b512(0x592),this[_0x30b512(0x537)][_0x30b512(0x426)](this));},VisuMZ['ItemsEquipsCore'][_0x199c58(0x262)]=Scene_Equip[_0x199c58(0x2a8)][_0x199c58(0x271)],Scene_Equip[_0x199c58(0x2a8)]['commandEquip']=function(){const _0x186dd0=_0x199c58;if(this[_0x186dd0(0x3c8)]()){if(_0x186dd0(0x1d5)!==_0x186dd0(0x1d5)){function _0x20bb21(){const _0x238184=_0x186dd0,_0x133982=_0x238184(0x456);if(this[_0x238184(0x49c)][_0x238184(0x1dc)]>=0x0&&!this['_customItemInfo'][_0x133982])return![];const _0x1c85ca=this[_0x238184(0x31d)]();this[_0x238184(0x1f0)](_0x1c85ca,_0x5eb909,_0x1418d1,_0xa4c82c,!![]);const _0x2021b3=this[_0x238184(0x1f6)]();return this[_0x238184(0x4b3)](_0xc3b8f8['powerDownColor']()),this[_0x238184(0x1f0)](_0x2021b3,_0x4fcf2e,_0x3ace7b,_0x2671fc,![],_0x238184(0x2b5)),this[_0x238184(0x35b)](_0x991b38,_0x4cc49a,_0xb07dd6),this[_0x238184(0x4ea)](),!![];}}else this['_commandWindow']['deselect'](),this[_0x186dd0(0x49f)][_0x186dd0(0x228)]();}VisuMZ[_0x186dd0(0x22a)][_0x186dd0(0x262)]['call'](this);},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x373)]=Scene_Equip['prototype'][_0x199c58(0x3ac)],Scene_Equip[_0x199c58(0x2a8)][_0x199c58(0x3ac)]=function(){const _0x1e6490=_0x199c58;this[_0x1e6490(0x37d)][_0x1e6490(0x292)]()>=0x0?(VisuMZ[_0x1e6490(0x22a)]['Scene_Equip_onSlotOk'][_0x1e6490(0x2f6)](this),this['onSlotOkAutoSelect']()):(this[_0x1e6490(0x37d)][_0x1e6490(0x42d)](0x0),this[_0x1e6490(0x37d)][_0x1e6490(0x439)]());},Scene_Equip[_0x199c58(0x2a8)][_0x199c58(0x4fa)]=function(){const _0x713ffa=_0x199c58;this[_0x713ffa(0x553)][_0x713ffa(0x1d4)]();const _0x4b3966=this[_0x713ffa(0x37d)][_0x713ffa(0x5e0)](),_0x484e30=this[_0x713ffa(0x553)][_0x713ffa(0x48e)][_0x713ffa(0x5df)](_0x4b3966),_0xa809f4=Math[_0x713ffa(0x473)](this['_itemWindow']['maxVisibleItems']()/0x2)-0x1;this[_0x713ffa(0x553)]['smoothSelect'](_0x484e30>=0x0?_0x484e30:0x0),this[_0x713ffa(0x553)]['setTopRow'](this[_0x713ffa(0x553)][_0x713ffa(0x292)]()-_0xa809f4);},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x241)]=Scene_Equip[_0x199c58(0x2a8)][_0x199c58(0x431)],Scene_Equip['prototype'][_0x199c58(0x431)]=function(){const _0x22c1a7=_0x199c58;VisuMZ[_0x22c1a7(0x22a)][_0x22c1a7(0x241)][_0x22c1a7(0x2f6)](this),this[_0x22c1a7(0x3c8)]()&&(this[_0x22c1a7(0x49f)][_0x22c1a7(0x42d)](0x0),this[_0x22c1a7(0x37d)]['deactivate']());},VisuMZ[_0x199c58(0x22a)]['Scene_Equip_onActorChange']=Scene_Equip['prototype']['onActorChange'],Scene_Equip[_0x199c58(0x2a8)][_0x199c58(0x263)]=function(){const _0x336ced=_0x199c58;VisuMZ[_0x336ced(0x22a)][_0x336ced(0x60d)]['call'](this),this[_0x336ced(0x3c8)]()&&(this[_0x336ced(0x49f)][_0x336ced(0x228)](),this[_0x336ced(0x49f)][_0x336ced(0x2f2)](),this[_0x336ced(0x37d)][_0x336ced(0x42d)](0x0),this[_0x336ced(0x37d)][_0x336ced(0x439)]());},Scene_Equip['prototype']['buttonAssistSlotWindowShift']=function(){const _0x57a282=_0x199c58;if(!this[_0x57a282(0x37d)])return![];if(!this[_0x57a282(0x37d)][_0x57a282(0x2d9)])return![];return this[_0x57a282(0x37d)][_0x57a282(0x205)]();},Scene_Equip['prototype'][_0x199c58(0x58f)]=function(){const _0x5854f=_0x199c58;if(this[_0x5854f(0x5c1)]())return TextManager[_0x5854f(0x1fc)](_0x5854f(0x227));return Scene_MenuBase[_0x5854f(0x2a8)][_0x5854f(0x58f)]['call'](this);},Scene_Equip[_0x199c58(0x2a8)][_0x199c58(0x303)]=function(){const _0x31f729=_0x199c58;if(this[_0x31f729(0x5c1)]())return VisuMZ['ItemsEquipsCore'][_0x31f729(0x2d7)][_0x31f729(0x581)][_0x31f729(0x350)];return Scene_MenuBase[_0x31f729(0x2a8)][_0x31f729(0x303)]['call'](this);},Scene_Equip[_0x199c58(0x2a8)]['buttonAssistOffset3']=function(){const _0x32286c=_0x199c58;if(this[_0x32286c(0x5c1)]())return this[_0x32286c(0x21c)][_0x32286c(0x533)]/0x5/-0x3;return Scene_MenuBase[_0x32286c(0x2a8)][_0x32286c(0x2e0)]['call'](this);},Scene_Equip[_0x199c58(0x2a8)][_0x199c58(0x352)]=function(){const _0x51cd8a=_0x199c58;SceneManager[_0x51cd8a(0x37b)]();},VisuMZ[_0x199c58(0x22a)]['Scene_Load_reloadMapIfUpdated']=Scene_Load[_0x199c58(0x2a8)][_0x199c58(0x26c)],Scene_Load[_0x199c58(0x2a8)][_0x199c58(0x26c)]=function(){const _0x58d0b0=_0x199c58;VisuMZ[_0x58d0b0(0x22a)][_0x58d0b0(0x3d0)][_0x58d0b0(0x2f6)](this),this['refreshActorEquipSlotsIfUpdated']();},Scene_Load[_0x199c58(0x2a8)]['refreshActorEquipSlotsIfUpdated']=function(){const _0x368033=_0x199c58;if($gameSystem[_0x368033(0x5f5)]()!==$dataSystem[_0x368033(0x5f5)])for(const _0x21ee16 of $gameActors[_0x368033(0x48e)]){if(_0x21ee16)_0x21ee16[_0x368033(0x24f)]();}},Scene_Shop['prototype'][_0x199c58(0x491)]=function(){const _0x17d2a4=_0x199c58;if(ConfigManager[_0x17d2a4(0x40f)]&&ConfigManager[_0x17d2a4(0x231)]!==undefined)return ConfigManager[_0x17d2a4(0x231)];else{if(this[_0x17d2a4(0x50d)]())return this['updatedLayoutStyle']()[_0x17d2a4(0x568)](/LOWER/i);else{if(_0x17d2a4(0x469)!==_0x17d2a4(0x2bb))Scene_MenuBase['prototype'][_0x17d2a4(0x44a)]['call'](this);else{function _0x28ee6d(){const _0x444d19=_0x17d2a4,_0x50427c=_0x19f76e['makeDeepCopy'](this);_0x50427c[_0x444d19(0x49b)]=!![],_0x5671a6[_0x444d19(0x22a)]['Game_Actor_discardEquip'][_0x444d19(0x2f6)](this,_0x38113c),this[_0x444d19(0x576)](_0x50427c);}}}}},Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x44a)]=function(){const _0x38e017=_0x199c58;if(ConfigManager[_0x38e017(0x40f)]&&ConfigManager[_0x38e017(0x3fb)]!==undefined){if('QWdrZ'!=='QWdrZ'){function _0x327bc8(){const _0x302ec2=_0x38e017;return this[_0x302ec2(0x3ea)]['fontSize']/_0x2ed474[_0x302ec2(0x602)]();}}else return ConfigManager[_0x38e017(0x3fb)];}else{if(this[_0x38e017(0x50d)]())return this['updatedLayoutStyle']()[_0x38e017(0x568)](/RIGHT/i);else Scene_MenuBase[_0x38e017(0x2a8)]['isRightInputMode'][_0x38e017(0x2f6)](this);}},Scene_Shop['prototype'][_0x199c58(0x4ca)]=function(){const _0x453d04=_0x199c58;return VisuMZ[_0x453d04(0x22a)][_0x453d04(0x2d7)]['ShopScene'][_0x453d04(0x225)];},Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x3c8)]=function(){const _0x2d1fa3=_0x199c58;return this['_categoryWindow']&&this[_0x2d1fa3(0x218)][_0x2d1fa3(0x3c8)]();},Scene_Shop['prototype'][_0x199c58(0x50d)]=function(){const _0x36e97e=_0x199c58;return VisuMZ[_0x36e97e(0x22a)][_0x36e97e(0x2d7)][_0x36e97e(0x429)][_0x36e97e(0x274)];},VisuMZ['ItemsEquipsCore'][_0x199c58(0x2b2)]=Scene_Shop[_0x199c58(0x2a8)]['prepare'],Scene_Shop[_0x199c58(0x2a8)]['prepare']=function(_0x177dd0,_0x43c587){const _0x21dc6f=_0x199c58;_0x177dd0=JsonEx[_0x21dc6f(0x56a)](_0x177dd0),VisuMZ[_0x21dc6f(0x22a)]['Scene_Shop_prepare'][_0x21dc6f(0x2f6)](this,_0x177dd0,_0x43c587),this[_0x21dc6f(0x4f6)]();},Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x4f6)]=function(){const _0x1b308e=_0x199c58;this[_0x1b308e(0x4ec)]=0x0;for(const _0x232b26 of this['_goods']){if(this[_0x1b308e(0x1f7)](_0x232b26)){if(_0x1b308e(0x478)===_0x1b308e(0x510)){function _0x3234f6(){const _0x5273b2=_0x1b308e;this[_0x5273b2(0x4e4)](),_0x43e488['ItemsEquipsCore']['Window_Selectable_initialize'][_0x5273b2(0x2f6)](this,_0x17a2b9);}}else this[_0x1b308e(0x4ec)]++;}else{if(_0x1b308e(0x452)===_0x1b308e(0x452))_0x232b26[0x0]=-0x1;else{function _0x40ed19(){const _0x340272=_0x1b308e;this[_0x340272(0x218)][_0x340272(0x439)]();}}}}},Scene_Shop[_0x199c58(0x2a8)]['isGoodShown']=function(_0x2e8c12){const _0x3cd6f3=_0x199c58;if(_0x2e8c12[0x0]>0x2||_0x2e8c12[0x0]<0x0)return![];const _0x295272=[$dataItems,$dataWeapons,$dataArmors][_0x2e8c12[0x0]][_0x2e8c12[0x1]];if(!_0x295272)return![];const _0x13c71e=_0x295272['note']||'';if(_0x13c71e[_0x3cd6f3(0x568)](/<SHOW SHOP[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x3cd6f3(0x5c2)!==_0x3cd6f3(0x556)){const _0x524f0b=JSON['parse']('['+RegExp['$1'][_0x3cd6f3(0x568)](/\d+/g)+']');for(const _0x5bcd62 of _0x524f0b){if(!$gameSwitches[_0x3cd6f3(0x4a3)](_0x5bcd62))return![];}return!![];}else{function _0x461735(){const _0x254b58=_0x3cd6f3;_0x738480[_0x254b58(0x22a)][_0x254b58(0x373)][_0x254b58(0x2f6)](this),this[_0x254b58(0x4fa)]();}}}if(_0x13c71e[_0x3cd6f3(0x568)](/<SHOW SHOP ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x3d602c=JSON[_0x3cd6f3(0x2fa)]('['+RegExp['$1'][_0x3cd6f3(0x568)](/\d+/g)+']');for(const _0x51da03 of _0x3d602c){if(!$gameSwitches['value'](_0x51da03))return![];}return!![];}if(_0x13c71e[_0x3cd6f3(0x568)](/<SHOW SHOP ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x3cd6f3(0x549)===_0x3cd6f3(0x2f5)){function _0x5d2894(){const _0x547a08=_0x3cd6f3;for(const _0x36d51a of _0x185f6a[_0x547a08(0x401)]){this['addItemCategory'](_0x36d51a);}this[_0x547a08(0x36c)](this[_0x547a08(0x292)]());}}else{const _0x1d0ec9=JSON[_0x3cd6f3(0x2fa)]('['+RegExp['$1'][_0x3cd6f3(0x568)](/\d+/g)+']');for(const _0x326a4a of _0x1d0ec9){if(_0x3cd6f3(0x53d)===_0x3cd6f3(0x53d)){if($gameSwitches[_0x3cd6f3(0x4a3)](_0x326a4a))return!![];}else{function _0x4c52ae(){const _0x59df8e=_0x3cd6f3;_0x106968[_0x59df8e(0x22a)][_0x59df8e(0x234)][_0x59df8e(0x2f6)](this,_0x3e75bf),_0x40a7ef['ItemsEquipsCore'][_0x59df8e(0x294)](_0x149939,_0x5d92fe);}}}return![];}}if(_0x13c71e[_0x3cd6f3(0x568)](/<HIDE SHOP[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0xfa2332=JSON[_0x3cd6f3(0x2fa)]('['+RegExp['$1'][_0x3cd6f3(0x568)](/\d+/g)+']');for(const _0x196a22 of _0xfa2332){if(!$gameSwitches[_0x3cd6f3(0x4a3)](_0x196a22))return!![];}return![];}if(_0x13c71e[_0x3cd6f3(0x568)](/<HIDE SHOP ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x3cd6f3(0x36a)===_0x3cd6f3(0x36a)){const _0x42e106=JSON['parse']('['+RegExp['$1'][_0x3cd6f3(0x568)](/\d+/g)+']');for(const _0x3391b8 of _0x42e106){if(_0x3cd6f3(0x606)===_0x3cd6f3(0x606)){if(!$gameSwitches[_0x3cd6f3(0x4a3)](_0x3391b8))return!![];}else{function _0x12e585(){const _0x1f4036=_0x3cd6f3;return _0x90afda[_0x1f4036(0x22a)]['Settings'][_0x1f4036(0x386)]['Width'];}}}return![];}else{function _0x23600b(){_0xfc5880(_0x4a040d);}}}if(_0x13c71e[_0x3cd6f3(0x568)](/<HIDE SHOP ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x3cd6f3(0x310)==='nZzGl'){function _0x2bd3f6(){const _0x169137=_0x3cd6f3;this[_0x169137(0x280)](_0x77b79c);}}else{const _0x1e38c9=JSON[_0x3cd6f3(0x2fa)]('['+RegExp['$1'][_0x3cd6f3(0x568)](/\d+/g)+']');for(const _0xb678b7 of _0x1e38c9){if($gameSwitches[_0x3cd6f3(0x4a3)](_0xb678b7))return![];}return!![];}}return!![];},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x2d6)]=Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x1c7)],Scene_Shop['prototype'][_0x199c58(0x1c7)]=function(){const _0x4ea9ba=_0x199c58;VisuMZ['ItemsEquipsCore']['Scene_Shop_create'][_0x4ea9ba(0x2f6)](this);if(this['isUseItemsEquipsCoreUpdatedLayout']()){if(_0x4ea9ba(0x324)!=='OMcPb')this[_0x4ea9ba(0x25a)]();else{function _0x371d0d(){const _0x582d4b=_0x4ea9ba;return _0x56ade3[_0x582d4b(0x20a)](_0x1dcda6)&&_0x15e8e0[_0x582d4b(0x3c3)]===_0x3acc0b(_0x5837d3['$1']);}}}this[_0x4ea9ba(0x396)]();},Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x25a)]=function(){const _0x5d2d80=_0x199c58;this['_dummyWindow'][_0x5d2d80(0x1ee)](),this[_0x5d2d80(0x496)][_0x5d2d80(0x45b)](),this[_0x5d2d80(0x496)][_0x5d2d80(0x2f2)](),this['_statusWindow'][_0x5d2d80(0x45b)]();},Scene_Shop['prototype'][_0x199c58(0x4a1)]=function(){const _0x1f25d2=_0x199c58;if(this[_0x1f25d2(0x50d)]()){if(_0x1f25d2(0x505)!==_0x1f25d2(0x505)){function _0x1ecd2e(){const _0x349c40=_0x1f25d2;return _0x14a1b1[_0x349c40(0x2a8)]['colSpacing']['call'](this);}}else return this['helpWindowRectItemsEquipsCore']();}else return Scene_MenuBase['prototype']['helpWindowRect'][_0x1f25d2(0x2f6)](this);},Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x449)]=function(){const _0x32a7f3=_0x199c58,_0x21836e=0x0,_0x5d67d8=this[_0x32a7f3(0x536)](),_0x3f32e0=Graphics[_0x32a7f3(0x3c4)],_0x457788=this['helpAreaHeight']();return new Rectangle(_0x21836e,_0x5d67d8,_0x3f32e0,_0x457788);},VisuMZ['ItemsEquipsCore'][_0x199c58(0x399)]=Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x55d)],Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x55d)]=function(){const _0x4f2fbf=_0x199c58;return this['isUseItemsEquipsCoreUpdatedLayout']()?this[_0x4f2fbf(0x5a2)]():VisuMZ[_0x4f2fbf(0x22a)][_0x4f2fbf(0x399)]['call'](this);},Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x5a2)]=function(){const _0x3c4ff9=_0x199c58,_0x22bbe5=this[_0x3c4ff9(0x437)](),_0x470b43=this[_0x3c4ff9(0x2d4)](0x1,!![]),_0x455d3d=this[_0x3c4ff9(0x44a)]()?0x0:Graphics[_0x3c4ff9(0x3c4)]-_0x22bbe5,_0x359c5d=this[_0x3c4ff9(0x395)]();return new Rectangle(_0x455d3d,_0x359c5d,_0x22bbe5,_0x470b43);},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x578)]=Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x35c)],Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x35c)]=function(){const _0x293f18=_0x199c58;if(this['isUseItemsEquipsCoreUpdatedLayout']())return this[_0x293f18(0x55a)]();else{if('SitNV'!==_0x293f18(0x4a7)){function _0x19fa53(){const _0x5633b5=_0x293f18;this[_0x5633b5(0x4ef)](_0x559214,_0x3bdfdd['x']+_0xf317dc['width']-_0x580021,_0x3ed036['y'],_0xd4359f);}}else return VisuMZ['ItemsEquipsCore'][_0x293f18(0x578)]['call'](this);}},Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x55a)]=function(){const _0x492647=_0x199c58,_0xe794b0=this[_0x492647(0x44a)]()?this[_0x492647(0x437)]():0x0,_0x475114=this['mainAreaTop'](),_0x13d73a=Graphics[_0x492647(0x3c4)]-this[_0x492647(0x437)](),_0x36c23f=this[_0x492647(0x2d4)](0x1,!![]);return new Rectangle(_0xe794b0,_0x475114,_0x13d73a,_0x36c23f);},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x3b6)]=Scene_Shop['prototype'][_0x199c58(0x43f)],Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x43f)]=function(){const _0x299533=_0x199c58;return this['isUseItemsEquipsCoreUpdatedLayout']()?this[_0x299533(0x5c8)]():VisuMZ['ItemsEquipsCore']['Scene_Shop_numberWindowRect'][_0x299533(0x2f6)](this);},Scene_Shop['prototype'][_0x199c58(0x5c8)]=function(){const _0x1e4219=_0x199c58,_0x1ff8e9=this[_0x1e4219(0x49f)]['y']+this[_0x1e4219(0x49f)][_0x1e4219(0x33f)],_0x12354d=Graphics[_0x1e4219(0x3c4)]-this['statusWidth'](),_0x25952a=this[_0x1e4219(0x44a)]()?Graphics['boxWidth']-_0x12354d:0x0,_0x5c39b8=this[_0x1e4219(0x359)]()-this[_0x1e4219(0x49f)][_0x1e4219(0x33f)];return new Rectangle(_0x25952a,_0x1ff8e9,_0x12354d,_0x5c39b8);},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x272)]=Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x4f9)],Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x4f9)]=function(){const _0x47f213=_0x199c58;return this['isUseItemsEquipsCoreUpdatedLayout']()?this[_0x47f213(0x390)]():VisuMZ[_0x47f213(0x22a)][_0x47f213(0x272)]['call'](this);},Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x390)]=function(){const _0x474431=_0x199c58,_0x3cf7da=this['statusWidth'](),_0x440d34=this[_0x474431(0x359)]()-this[_0x474431(0x49f)][_0x474431(0x33f)],_0x102f1b=this[_0x474431(0x44a)]()?0x0:Graphics['boxWidth']-_0x3cf7da,_0x6c3994=this[_0x474431(0x49f)]['y']+this[_0x474431(0x49f)][_0x474431(0x33f)];return new Rectangle(_0x102f1b,_0x6c3994,_0x3cf7da,_0x440d34);},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x275)]=Scene_Shop[_0x199c58(0x2a8)]['buyWindowRect'],Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x340)]=function(){const _0x2f3c83=_0x199c58;if(this['isUseItemsEquipsCoreUpdatedLayout']())return this[_0x2f3c83(0x544)]();else{if(_0x2f3c83(0x5d1)==='uPsCf'){function _0x4cbe03(){const _0x2784ef=_0x2f3c83;this[_0x2784ef(0x4b9)]();}}else return VisuMZ[_0x2f3c83(0x22a)][_0x2f3c83(0x275)][_0x2f3c83(0x2f6)](this);}},Scene_Shop[_0x199c58(0x2a8)]['buyWindowRectItemsEquipsCore']=function(){const _0x213342=_0x199c58,_0x32c787=this[_0x213342(0x49f)]['y']+this[_0x213342(0x49f)][_0x213342(0x33f)],_0x3fea9a=Graphics[_0x213342(0x3c4)]-this[_0x213342(0x1e8)](),_0x532f91=this[_0x213342(0x359)]()-this[_0x213342(0x49f)][_0x213342(0x33f)],_0x236260=this[_0x213342(0x44a)]()?Graphics[_0x213342(0x3c4)]-_0x3fea9a:0x0;return new Rectangle(_0x236260,_0x32c787,_0x3fea9a,_0x532f91);},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x5ca)]=Scene_Shop[_0x199c58(0x2a8)]['createCategoryWindow'],Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x579)]=function(){const _0x239169=_0x199c58;VisuMZ['ItemsEquipsCore'][_0x239169(0x5ca)]['call'](this),this[_0x239169(0x3c8)]()&&this[_0x239169(0x367)]();},VisuMZ['ItemsEquipsCore'][_0x199c58(0x245)]=Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x363)],Scene_Shop['prototype'][_0x199c58(0x363)]=function(){const _0x2a5b05=_0x199c58;if(this['isUseItemsEquipsCoreUpdatedLayout']()){if(_0x2a5b05(0x416)!==_0x2a5b05(0x546))return this['categoryWindowRectItemsEquipsCore']();else{function _0x29602e(){const _0x56581b=_0x2a5b05;_0x3d9232=this[_0x56581b(0x2e7)][_0x56581b(0x2d8)](_0x1d1de4),_0x34e298=this[_0x56581b(0x49b)][_0x56581b(0x2d8)](_0x1b9ef0),_0x496944=_0x3f4f26%0x1!==0x0||_0x26d482%0x1!==0x0;}}}else{if(_0x2a5b05(0x597)!=='DlScB')return VisuMZ[_0x2a5b05(0x22a)][_0x2a5b05(0x245)]['call'](this);else{function _0x441733(){const _0x136e8b=_0x2a5b05,_0x175d67=_0x13e53a[_0x136e8b(0x22a)]['Settings'][_0x136e8b(0x4c5)][_0x136e8b(0x347)];return _0x175d67[_0x136e8b(0x257)](_0x3ab142[_0x136e8b(0x525)](this['_item']));}}}},Scene_Shop['prototype']['categoryWindowRectItemsEquipsCore']=function(){const _0x7ee161=_0x199c58,_0x4c298f=this['_commandWindow']['y'],_0x38139d=this['_commandWindow'][_0x7ee161(0x533)],_0x54580c=this[_0x7ee161(0x2d4)](0x1,!![]),_0x1fbdef=this[_0x7ee161(0x44a)]()?Graphics[_0x7ee161(0x3c4)]-_0x38139d:0x0;return new Rectangle(_0x1fbdef,_0x4c298f,_0x38139d,_0x54580c);},Scene_Shop[_0x199c58(0x2a8)]['postCreateCategoryWindowItemsEquipsCore']=function(){const _0xf69680=_0x199c58;delete this[_0xf69680(0x218)][_0xf69680(0x44d)]['ok'],delete this['_categoryWindow']['_handlers']['cancel'];},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x539)]=Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x50a)],Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x50a)]=function(){const _0x2a3fe1=_0x199c58;VisuMZ[_0x2a3fe1(0x22a)][_0x2a3fe1(0x539)]['call'](this);if(this[_0x2a3fe1(0x50d)]()){if(_0x2a3fe1(0x1db)===_0x2a3fe1(0x42b)){function _0x1b5255(){const _0x440078=_0x2a3fe1;_0x36e6bd[_0x440078(0x22a)][_0x440078(0x594)][_0x440078(0x2f6)](this),this['isUseModernControls']()&&this[_0x440078(0x3b5)]();}}else this['postCreateSellWindowItemsEquipsCore']();}},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x455)]=Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x355)],Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x355)]=function(){const _0xe87a9=_0x199c58;if(this['isUseItemsEquipsCoreUpdatedLayout']())return this['sellWindowRectItemsEquipsCore']();else{if(_0xe87a9(0x5d7)==='AekKt'){function _0x496164(){const _0x1d0f73=_0xe87a9;if(!this[_0x1d0f73(0x3c8)]())_0x5a24cb[_0x1d0f73(0x2a8)][_0x1d0f73(0x29f)][_0x1d0f73(0x2f6)](this);}}else return VisuMZ[_0xe87a9(0x22a)]['Scene_Shop_sellWindowRect'][_0xe87a9(0x2f6)](this);}},Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x1e7)]=function(){const _0x2ef1a7=_0x199c58,_0x3d0012=this[_0x2ef1a7(0x218)]['y']+this[_0x2ef1a7(0x218)][_0x2ef1a7(0x33f)],_0x250faf=Graphics[_0x2ef1a7(0x3c4)]-this[_0x2ef1a7(0x1e8)](),_0x2874f6=this[_0x2ef1a7(0x359)]()-this['_categoryWindow']['height'],_0x338a09=this[_0x2ef1a7(0x44a)]()?Graphics['boxWidth']-_0x250faf:0x0;return new Rectangle(_0x338a09,_0x3d0012,_0x250faf,_0x2874f6);},Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x46f)]=function(){const _0x329ff2=_0x199c58;this[_0x329ff2(0x50c)][_0x329ff2(0x3fd)](this[_0x329ff2(0x4a9)]);},Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x1e8)]=function(){const _0x302f22=_0x199c58;return VisuMZ[_0x302f22(0x22a)][_0x302f22(0x2d7)][_0x302f22(0x386)]['Width'];},VisuMZ[_0x199c58(0x22a)]['Scene_Shop_activateSellWindow']=Scene_Shop['prototype'][_0x199c58(0x3f1)],Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x3f1)]=function(){const _0x17162a=_0x199c58;VisuMZ[_0x17162a(0x22a)]['Scene_Shop_activateSellWindow'][_0x17162a(0x2f6)](this),this[_0x17162a(0x50d)]()&&this[_0x17162a(0x4a9)][_0x17162a(0x45b)](),this['_sellWindow'][_0x17162a(0x1eb)]();},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x299)]=Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x4df)],Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x4df)]=function(){const _0x4404e3=_0x199c58;VisuMZ[_0x4404e3(0x22a)][_0x4404e3(0x299)]['call'](this),this[_0x4404e3(0x50d)]()&&this[_0x4404e3(0x25c)]();},Scene_Shop['prototype'][_0x199c58(0x25c)]=function(){const _0xd9c33d=_0x199c58;this[_0xd9c33d(0x53c)]=this['_buyWindowLastIndex']||0x0,this[_0xd9c33d(0x496)][_0xd9c33d(0x42d)](this[_0xd9c33d(0x53c)]);},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x2db)]=Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x59c)],Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x59c)]=function(){const _0x4a3944=_0x199c58;VisuMZ[_0x4a3944(0x22a)]['Scene_Shop_commandSell'][_0x4a3944(0x2f6)](this),this['isUseItemsEquipsCoreUpdatedLayout']()&&this['commandSellItemsEquipsCore'](),this[_0x4a3944(0x3c8)]()&&(this['_categoryWindow'][_0x4a3944(0x42d)](0x0),this[_0x4a3944(0x5bb)]());},Scene_Shop[_0x199c58(0x2a8)]['commandSellItemsEquipsCore']=function(){const _0x36dbe3=_0x199c58;this['_buyWindow'][_0x36dbe3(0x1ee)](),this[_0x36dbe3(0x49f)][_0x36dbe3(0x1ee)]();},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x462)]=Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x4f5)],Scene_Shop['prototype'][_0x199c58(0x4f5)]=function(){const _0x151379=_0x199c58;VisuMZ[_0x151379(0x22a)][_0x151379(0x462)]['call'](this);if(this[_0x151379(0x50d)]()){if(_0x151379(0x3ab)!=='UCesW'){function _0x2e0769(){const _0x25783b=_0x151379,_0x385b7e=_0x25783b(0x3c6);if(this[_0x25783b(0x1cb)][_0x385b7e])return this['_customItemInfo'][_0x385b7e];const _0x5162ae=_0x25783b(0x368);return _0x5162ae[_0x25783b(0x257)](this['_item']['repeats']);}}else this[_0x151379(0x4e1)]();}},Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x4e1)]=function(){const _0x4a364a=_0x199c58;this[_0x4a364a(0x53c)]=this[_0x4a364a(0x496)][_0x4a364a(0x292)](),this['_buyWindow'][_0x4a364a(0x45b)](),this[_0x4a364a(0x496)]['deselect'](),this[_0x4a364a(0x496)][_0x4a364a(0x286)](0x0,0x0),this[_0x4a364a(0x4a9)][_0x4a364a(0x45b)](),this[_0x4a364a(0x31a)][_0x4a364a(0x1ee)]();},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x2c6)]=Scene_Shop['prototype'][_0x199c58(0x2b0)],Scene_Shop['prototype'][_0x199c58(0x2b0)]=function(){const _0x2e1ecf=_0x199c58;VisuMZ[_0x2e1ecf(0x22a)][_0x2e1ecf(0x2c6)][_0x2e1ecf(0x2f6)](this),this[_0x2e1ecf(0x50d)]()&&this[_0x2e1ecf(0x3f8)]();},Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x3f8)]=function(){const _0x1bae28=_0x199c58;this[_0x1bae28(0x496)][_0x1bae28(0x45b)](),this[_0x1bae28(0x49f)][_0x1bae28(0x45b)]();},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x559)]=Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x3a7)],Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x3a7)]=function(){const _0x2da4b=_0x199c58;VisuMZ[_0x2da4b(0x22a)][_0x2da4b(0x559)][_0x2da4b(0x2f6)](this),this[_0x2da4b(0x50d)]()&&this['onSellOkItemsEquipsCore']();},Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x250)]=function(){const _0x2070d5=_0x199c58;this[_0x2070d5(0x218)][_0x2070d5(0x45b)]();},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x3b4)]=Scene_Shop['prototype'][_0x199c58(0x1fa)],Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x1fa)]=function(){const _0x53cdc3=_0x199c58;VisuMZ[_0x53cdc3(0x22a)]['Scene_Shop_onSellCancel'][_0x53cdc3(0x2f6)](this),this[_0x53cdc3(0x3c8)]()&&this[_0x53cdc3(0x2b0)](),this[_0x53cdc3(0x50d)]()&&this[_0x53cdc3(0x31a)][_0x53cdc3(0x1ee)]();},VisuMZ[_0x199c58(0x22a)]['Scene_Shop_sellingPrice']=Scene_Shop['prototype'][_0x199c58(0x37e)],Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x37e)]=function(){const _0x117f25=_0x199c58;let _0x15cfe3=this[_0x117f25(0x528)]();const _0x320bdf=this[_0x117f25(0x2ea)];return _0x15cfe3=VisuMZ['ItemsEquipsCore'][_0x117f25(0x2d7)][_0x117f25(0x429)][_0x117f25(0x60c)][_0x117f25(0x2f6)](this,_0x320bdf,_0x15cfe3),_0x15cfe3;},Scene_Shop[_0x199c58(0x2a8)]['determineBaseSellingPrice']=function(){const _0x17eab9=_0x199c58;if(!this[_0x17eab9(0x2ea)]){if(_0x17eab9(0x477)==='FgMWj'){function _0x5905e7(){const _0x55175a=_0x17eab9;return _0x581526[_0x55175a(0x29e)]()?_0x18d263[_0x55175a(0x29e)]()['canUse'](_0x2099b0):_0x2ad49a[_0x55175a(0x2a8)]['isEnabled']['call'](this,_0x4b961d);}}else return 0x0;}else{if(this[_0x17eab9(0x2ea)][_0x17eab9(0x2da)][_0x17eab9(0x568)](/<JS SELL PRICE>\s*([\s\S]*)\s*<\/JS SELL PRICE>/i)){if(_0x17eab9(0x376)!=='JLDcf'){function _0x9cdac6(){const _0xbaf8d6=_0x17eab9,_0x5b9d7b=this['_commandNameWindow'],_0x1fbb0d=_0x3f83f6['windowPadding'](),_0x35d2bc=_0x3312af['x']+_0x3d90ff[_0xbaf8d6(0x473)](_0x6b5c38[_0xbaf8d6(0x533)]/0x2)+_0x1fbb0d;_0x5b9d7b['x']=_0x5b9d7b['width']/-0x2+_0x35d2bc,_0x5b9d7b['y']=_0x145808[_0xbaf8d6(0x473)](_0x2ba19b[_0xbaf8d6(0x33f)]/0x2);}}else{const _0x5c340d=String(RegExp['$1']);let _0x1cbc3e=this['_item'],_0x18eb7b=_0x1cbc3e[_0x17eab9(0x5ea)]*this[_0x17eab9(0x5fe)]();try{eval(_0x5c340d);}catch(_0x50468b){if(_0x17eab9(0x212)!==_0x17eab9(0x427)){if($gameTemp[_0x17eab9(0x27a)]())console[_0x17eab9(0x5e6)](_0x50468b);}else{function _0x24fa58(){const _0x1f602b=_0x17eab9,_0x8c54ce=new _0x209345(0x0,0x0,_0x11b23d['width'],_0xeffd5f[_0x1f602b(0x33f)]);this[_0x1f602b(0x1c2)]=new _0x2233a4(_0x8c54ce),this[_0x1f602b(0x1c2)]['opacity']=0x0,this[_0x1f602b(0x571)](this[_0x1f602b(0x1c2)]),this['updateCommandNameWindow']();}}}if(isNaN(_0x18eb7b))_0x18eb7b=0x0;return Math['floor'](_0x18eb7b);}}else{if(this[_0x17eab9(0x2ea)][_0x17eab9(0x2da)][_0x17eab9(0x568)](/<SELL PRICE:[ ](\d+)>/i)){if('MpPqT'==='MpPqT')return parseInt(RegExp['$1']);else{function _0x4d6c81(){const _0x12ab1a=_0x17eab9,_0x40fdf7=_0x72a2a9[_0x12ab1a(0x22a)][_0x12ab1a(0x2d7)][_0x12ab1a(0x386)];let _0x597a32=_0x40fdf7[_0x12ab1a(0x4cd)]!==_0x4d6c56?_0x40fdf7[_0x12ab1a(0x4cd)]:0x13;return _0x23c6b3[_0x12ab1a(0x57e)](_0x597a32);}}}else return Math[_0x17eab9(0x473)](this[_0x17eab9(0x2ea)][_0x17eab9(0x5ea)]*this['sellPriceRate']());}}},Scene_Shop['prototype']['sellPriceRate']=function(){const _0x30dad0=_0x199c58;return VisuMZ[_0x30dad0(0x22a)]['Settings'][_0x30dad0(0x429)][_0x30dad0(0x1c0)];},Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x3e6)]=function(){const _0x1225f5=_0x199c58;if(!this[_0x1225f5(0x4ca)]())return![];if(!this[_0x1225f5(0x3c8)]())return![];if(!this[_0x1225f5(0x50c)])return![];if(!this[_0x1225f5(0x50c)][_0x1225f5(0x2d9)])return![];return this['updatedLayoutStyle']()&&this[_0x1225f5(0x3c8)]();},Scene_Shop['prototype']['buttonAssistKey1']=function(){const _0x73a30d=_0x199c58;if(this[_0x73a30d(0x3e6)]()){if(this[_0x73a30d(0x50c)][_0x73a30d(0x52c)]()===0x1)return TextManager['getInputMultiButtonStrings'](_0x73a30d(0x389),'right');else{if(_0x73a30d(0x4f8)===_0x73a30d(0x4f8))return TextManager[_0x73a30d(0x4b4)](_0x73a30d(0x592),_0x73a30d(0x435));else{function _0x5a891e(){const _0x7b16f8=_0x73a30d;return this[_0x7b16f8(0x50d)]()?this[_0x7b16f8(0x55a)]():_0x5744fd[_0x7b16f8(0x22a)]['Scene_Equip_commandWindowRect']['call'](this);}}}}else{if(this[_0x73a30d(0x1f5)]&&this[_0x73a30d(0x1f5)]['active'])return TextManager['getInputMultiButtonStrings']('left',_0x73a30d(0x2b5));}return Scene_MenuBase[_0x73a30d(0x2a8)]['buttonAssistKey1']['call'](this);},Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x1ed)]=function(){const _0x136ca0=_0x199c58;if(this[_0x136ca0(0x1f5)]&&this[_0x136ca0(0x1f5)][_0x136ca0(0x2d9)])return TextManager[_0x136ca0(0x4b4)]('up',_0x136ca0(0x5d4));return Scene_MenuBase['prototype']['buttonAssistKey2']['call'](this);},Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x35d)]=function(){const _0x2d7c5e=_0x199c58;if(this['buttonAssistItemListRequirement']())return VisuMZ[_0x2d7c5e(0x22a)][_0x2d7c5e(0x2d7)][_0x2d7c5e(0x4c5)][_0x2d7c5e(0x523)];else{if(this[_0x2d7c5e(0x1f5)]&&this[_0x2d7c5e(0x1f5)]['active'])return VisuMZ[_0x2d7c5e(0x22a)][_0x2d7c5e(0x2d7)][_0x2d7c5e(0x429)][_0x2d7c5e(0x574)];}return Scene_MenuBase[_0x2d7c5e(0x2a8)][_0x2d7c5e(0x35d)][_0x2d7c5e(0x2f6)](this);},Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x2fe)]=function(){const _0x384a25=_0x199c58;if(this['_numberWindow']&&this[_0x384a25(0x1f5)][_0x384a25(0x2d9)])return VisuMZ[_0x384a25(0x22a)]['Settings'][_0x384a25(0x429)][_0x384a25(0x300)];return Scene_MenuBase['prototype'][_0x384a25(0x2fe)]['call'](this);},Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x396)]=function(){const _0x226f9c=_0x199c58;if(!SceneManager[_0x226f9c(0x507)]())return;const _0x2a8d8f=VisuMZ[_0x226f9c(0x22a)]['Settings'][_0x226f9c(0x429)];_0x2a8d8f['SwitchBuy']&&$gameSwitches['setValue'](_0x2a8d8f['SwitchBuy'],![]),_0x2a8d8f['SwitchSell']&&$gameSwitches['setValue'](_0x2a8d8f[_0x226f9c(0x46b)],![]);},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x384)]=Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x30f)],Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x30f)]=function(_0x265572){const _0x83dd71=_0x199c58;VisuMZ[_0x83dd71(0x22a)][_0x83dd71(0x384)][_0x83dd71(0x2f6)](this,_0x265572);if(_0x265572<=0x0)return;const _0x45dd93=VisuMZ[_0x83dd71(0x22a)]['Settings'][_0x83dd71(0x429)];if(_0x45dd93[_0x83dd71(0x5b6)]){if(_0x83dd71(0x3fe)===_0x83dd71(0x3fe))$gameSwitches['setValue'](_0x45dd93['SwitchBuy'],!![]);else{function _0x400b2d(){const _0x33101e=_0x83dd71;return _0x4372f4[_0x33101e(0x2a8)][_0x33101e(0x1e8)]();}}}},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x1d1)]=Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x5bc)],Scene_Shop[_0x199c58(0x2a8)][_0x199c58(0x5bc)]=function(_0x3e144c){const _0x40ce11=_0x199c58;VisuMZ[_0x40ce11(0x22a)]['Scene_Shop_doSell'][_0x40ce11(0x2f6)](this,_0x3e144c);if(_0x3e144c<=0x0)return;const _0x3a6c9f=VisuMZ[_0x40ce11(0x22a)][_0x40ce11(0x2d7)][_0x40ce11(0x429)];_0x3a6c9f[_0x40ce11(0x5b6)]&&$gameSwitches[_0x40ce11(0x5a4)](_0x3a6c9f[_0x40ce11(0x46b)],!![]);};function Sprite_NewLabel(){this['initialize'](...arguments);}Sprite_NewLabel['prototype']=Object[_0x199c58(0x1c7)](Sprite[_0x199c58(0x2a8)]),Sprite_NewLabel[_0x199c58(0x2a8)][_0x199c58(0x24d)]=Sprite_NewLabel,Sprite_NewLabel[_0x199c58(0x2a8)][_0x199c58(0x320)]=function(){const _0x4283ad=_0x199c58;Sprite[_0x4283ad(0x2a8)][_0x4283ad(0x320)][_0x4283ad(0x2f6)](this),this[_0x4283ad(0x511)]();},Sprite_NewLabel[_0x199c58(0x2a8)][_0x199c58(0x511)]=function(){const _0x61f632=_0x199c58,_0x15cc31=ImageManager[_0x61f632(0x366)],_0x1067c1=ImageManager['iconHeight'];this[_0x61f632(0x410)]=new Bitmap(_0x15cc31,_0x1067c1),this['drawNewLabelIcon'](),this[_0x61f632(0x276)]();},Sprite_NewLabel[_0x199c58(0x2a8)][_0x199c58(0x47f)]=function(){const _0x6c3ded=_0x199c58,_0xe8cfd9=VisuMZ[_0x6c3ded(0x22a)]['Settings'][_0x6c3ded(0x2a6)][_0x6c3ded(0x260)];if(_0xe8cfd9<=0x0)return;const _0x123c0b=ImageManager['loadSystem']('IconSet'),_0x3c55c9=ImageManager['iconWidth'],_0x18d2d4=ImageManager['iconHeight'],_0x4de239=_0xe8cfd9%0x10*_0x3c55c9,_0x5f4c16=Math[_0x6c3ded(0x473)](_0xe8cfd9/0x10)*_0x18d2d4;this[_0x6c3ded(0x410)][_0x6c3ded(0x5d8)](_0x123c0b,_0x4de239,_0x5f4c16,_0x3c55c9,_0x18d2d4,0x0,0x0);},Sprite_NewLabel['prototype'][_0x199c58(0x276)]=function(){const _0x330bb8=_0x199c58,_0x5230ad=VisuMZ[_0x330bb8(0x22a)]['Settings'][_0x330bb8(0x2a6)],_0x48713d=_0x5230ad[_0x330bb8(0x25b)];if(_0x48713d==='')return;const _0x3c9fea=ImageManager[_0x330bb8(0x366)],_0x17547f=ImageManager[_0x330bb8(0x224)];this['bitmap']['fontFace']=_0x5230ad[_0x330bb8(0x1f1)]||$gameSystem[_0x330bb8(0x3c5)](),this[_0x330bb8(0x410)]['textColor']=this['getTextColor'](),this[_0x330bb8(0x410)][_0x330bb8(0x535)]=_0x5230ad[_0x330bb8(0x37c)],this[_0x330bb8(0x410)][_0x330bb8(0x577)](_0x48713d,0x0,_0x17547f/0x2,_0x3c9fea,_0x17547f/0x2,'center');},Sprite_NewLabel[_0x199c58(0x2a8)]['getTextColor']=function(){const _0x1da7f1=_0x199c58,_0x117b72=VisuMZ[_0x1da7f1(0x22a)][_0x1da7f1(0x2d7)]['New'][_0x1da7f1(0x518)];return _0x117b72[_0x1da7f1(0x568)](/#(.*)/i)?'#'+String(RegExp['$1']):ColorManager[_0x1da7f1(0x3a6)](_0x117b72);},Window_Base[_0x199c58(0x2a8)][_0x199c58(0x1fb)]=function(_0x23e4e5,_0x2c8716,_0x2abafb,_0x3cafb2){const _0x5b4208=_0x199c58;if(_0x23e4e5){const _0x1a50ea=_0x2abafb+(this['lineHeight']()-ImageManager[_0x5b4208(0x224)])/0x2,_0x44a7f3=ImageManager[_0x5b4208(0x366)]+0x4,_0x380726=Math['max'](0x0,_0x3cafb2-_0x44a7f3);this[_0x5b4208(0x4b3)](ColorManager[_0x5b4208(0x5a9)](_0x23e4e5)),this['drawIcon'](_0x23e4e5[_0x5b4208(0x4c9)],_0x2c8716,_0x1a50ea),this['drawText'](_0x23e4e5[_0x5b4208(0x5f2)],_0x2c8716+_0x44a7f3,_0x2abafb,_0x380726),this[_0x5b4208(0x266)]();}},Window_Base[_0x199c58(0x2a8)][_0x199c58(0x5c0)]=function(_0x356521,_0x5d00b0,_0x18f6a5,_0x2e07b2){const _0x488d9d=_0x199c58;if(this[_0x488d9d(0x485)](_0x356521)){this[_0x488d9d(0x4ea)]();const _0x8a30b=VisuMZ[_0x488d9d(0x22a)][_0x488d9d(0x2d7)][_0x488d9d(0x4c5)],_0x265b68=_0x8a30b[_0x488d9d(0x347)],_0x22c66a=_0x265b68[_0x488d9d(0x257)]($gameParty[_0x488d9d(0x525)](_0x356521));this[_0x488d9d(0x3ea)]['fontSize']=_0x8a30b[_0x488d9d(0x5b1)],this[_0x488d9d(0x577)](_0x22c66a,_0x5d00b0,_0x18f6a5,_0x2e07b2,_0x488d9d(0x2b5)),this['resetFontSettings']();}},Window_Base[_0x199c58(0x2a8)][_0x199c58(0x485)]=function(_0x2d7982){const _0x4583a3=_0x199c58;if(DataManager['isKeyItem'](_0x2d7982))return $dataSystem[_0x4583a3(0x1ea)];return!![];},Window_Base[_0x199c58(0x2a8)][_0x199c58(0x35b)]=function(_0x548c30,_0x120c63,_0x5c69b7,_0x4104ee,_0x4bda22){const _0x52e5d0=_0x199c58;_0x4bda22=Math[_0x52e5d0(0x573)](_0x4bda22||0x1,0x1);while(_0x4bda22--){_0x4104ee=_0x4104ee||this[_0x52e5d0(0x264)](),this['contentsBack'][_0x52e5d0(0x5e1)]=0xa0;const _0x49e8cb=ColorManager[_0x52e5d0(0x383)]();this['contentsBack'][_0x52e5d0(0x3e7)](_0x548c30+0x1,_0x120c63+0x1,_0x5c69b7-0x2,_0x4104ee-0x2,_0x49e8cb),this[_0x52e5d0(0x32b)]['paintOpacity']=0xff;}},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x32c)]=Window_Selectable['prototype'][_0x199c58(0x320)],Window_Selectable['prototype'][_0x199c58(0x320)]=function(_0x5d0171){const _0x58bbb5=_0x199c58;this['initNewLabelSprites'](),VisuMZ[_0x58bbb5(0x22a)][_0x58bbb5(0x32c)][_0x58bbb5(0x2f6)](this,_0x5d0171);},Window_Selectable[_0x199c58(0x2a8)]['initNewLabelSprites']=function(){const _0x3812e0=_0x199c58;this['_newLabelSprites']={},this[_0x3812e0(0x2b9)]=0xff,this[_0x3812e0(0x569)]=VisuMZ[_0x3812e0(0x22a)][_0x3812e0(0x2d7)][_0x3812e0(0x2a6)][_0x3812e0(0x5a0)],this[_0x3812e0(0x1df)]=VisuMZ[_0x3812e0(0x22a)][_0x3812e0(0x2d7)][_0x3812e0(0x2a6)][_0x3812e0(0x2c2)];},Window_Selectable[_0x199c58(0x2a8)][_0x199c58(0x200)]=function(){return![];},VisuMZ['ItemsEquipsCore'][_0x199c58(0x470)]=Window_Selectable[_0x199c58(0x2a8)][_0x199c58(0x2a1)],Window_Selectable[_0x199c58(0x2a8)][_0x199c58(0x2a1)]=function(_0x29adb0){const _0x962382=_0x199c58;VisuMZ[_0x962382(0x22a)][_0x962382(0x470)][_0x962382(0x2f6)](this,_0x29adb0);if(this[_0x962382(0x200)]())this[_0x962382(0x530)](_0x29adb0);},Window_Selectable[_0x199c58(0x2a8)][_0x199c58(0x530)]=function(_0x16651d){const _0x27f5a8=_0x199c58;if(!_0x16651d)return;$gameParty['clearNewItem'](_0x16651d);let _0x2a54aa='';if(DataManager[_0x27f5a8(0x44e)](_0x16651d)){if('kQDCV'!=='kQDCV'){function _0x2aa3ef(){const _0x2d2201=_0x27f5a8;return this['_item'][_0x2d2201(0x236)];}}else _0x2a54aa=_0x27f5a8(0x37a)[_0x27f5a8(0x257)](_0x16651d['id']);}else{if(DataManager[_0x27f5a8(0x20a)](_0x16651d)){if(_0x27f5a8(0x464)===_0x27f5a8(0x259)){function _0x3cbe9f(){const _0x292bbd=_0x27f5a8;return _0x292bbd(0x372);}}else _0x2a54aa=_0x27f5a8(0x5d3)[_0x27f5a8(0x257)](_0x16651d['id']);}else{if(DataManager[_0x27f5a8(0x3f0)](_0x16651d))_0x2a54aa=_0x27f5a8(0x258)[_0x27f5a8(0x257)](_0x16651d['id']);else{if(_0x27f5a8(0x388)!==_0x27f5a8(0x388)){function _0x477bc5(){_0x2a30e4+=_0x567df3(_0x114b49['$1']),_0x5310dd+=_0x308efc(_0x571f92['$2']);}}else return;}}}const _0x54e51b=this[_0x27f5a8(0x5c4)][_0x2a54aa];if(_0x54e51b)_0x54e51b[_0x27f5a8(0x1ee)]();},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x3da)]=Window_Selectable['prototype'][_0x199c58(0x1d4)],Window_Selectable['prototype'][_0x199c58(0x1d4)]=function(){const _0x580125=_0x199c58;this[_0x580125(0x41b)](),VisuMZ[_0x580125(0x22a)][_0x580125(0x3da)][_0x580125(0x2f6)](this);},Window_Selectable[_0x199c58(0x2a8)][_0x199c58(0x41b)]=function(){const _0x1c7054=_0x199c58;for(const _0x3935d4 of Object[_0x1c7054(0x5b0)](this[_0x1c7054(0x5c4)])){_0x3935d4[_0x1c7054(0x1ee)]();}},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x31c)]=Window_Selectable['prototype'][_0x199c58(0x2df)],Window_Selectable[_0x199c58(0x2a8)][_0x199c58(0x2df)]=function(){const _0x1dc8e7=_0x199c58;this[_0x1dc8e7(0x2ff)](),VisuMZ[_0x1dc8e7(0x22a)][_0x1dc8e7(0x31c)][_0x1dc8e7(0x2f6)](this);},Window_Selectable[_0x199c58(0x2a8)]['updateNewLabelOpacity']=function(){const _0x5c4f44=_0x199c58;if(!this[_0x5c4f44(0x200)]())return;const _0x232622=this['_newLabelOpacityUpperLimit'];this[_0x5c4f44(0x2b9)]+=this[_0x5c4f44(0x569)];(this[_0x5c4f44(0x2b9)]>=_0x232622||this[_0x5c4f44(0x2b9)]<=0x0)&&(this[_0x5c4f44(0x569)]*=-0x1);this['_newLabelOpacity']=this['_newLabelOpacity'][_0x5c4f44(0x4db)](0x0,_0x232622);for(const _0x1ff35d of Object['values'](this[_0x5c4f44(0x5c4)])){_0x1ff35d[_0x5c4f44(0x540)]=this['_newLabelOpacity'];}},Window_Selectable['prototype'][_0x199c58(0x1dd)]=function(_0x5e81e2){const _0x496769=_0x199c58,_0x30a6d6=this['_newLabelSprites'];if(_0x30a6d6[_0x5e81e2]){if('ALhZo'!==_0x496769(0x545)){function _0x32934a(){const _0x244c0c=_0x496769;return _0x57b792[_0x244c0c(0x22a)][_0x244c0c(0x2d7)][_0x244c0c(0x386)][_0x244c0c(0x273)];}}else return _0x30a6d6[_0x5e81e2];}else{const _0x27fd09=new Sprite_NewLabel();return _0x30a6d6[_0x5e81e2]=_0x27fd09,this[_0x496769(0x4d3)](_0x27fd09),_0x27fd09;}},Window_Selectable[_0x199c58(0x2a8)][_0x199c58(0x329)]=function(_0x329b1a,_0x19c18a,_0x33ff4a){const _0x5ab336=_0x199c58;let _0x39b78b='';if(DataManager[_0x5ab336(0x44e)](_0x329b1a))_0x39b78b='item-%1'[_0x5ab336(0x257)](_0x329b1a['id']);else{if(DataManager[_0x5ab336(0x20a)](_0x329b1a))_0x39b78b=_0x5ab336(0x5d3)['format'](_0x329b1a['id']);else{if(DataManager[_0x5ab336(0x3f0)](_0x329b1a)){if(_0x5ab336(0x1ce)!==_0x5ab336(0x47c))_0x39b78b=_0x5ab336(0x258)[_0x5ab336(0x257)](_0x329b1a['id']);else{function _0xfa555f(){const _0x21f544=_0x5ab336,_0x2830fc=_0x3206cc[_0x5541e5];_0x2830fc[_0x21f544(0x295)]===_0x1b30f3+0x1&&_0x3b79ff[_0x21f544(0x419)](_0x2830fc);}}}else{if(_0x5ab336(0x604)==='CKyuj'){function _0x116abc(){const _0xcd757e=_0x5ab336;return this[_0xcd757e(0x5c8)]();}}else return;}}}const _0x2cb026=this[_0x5ab336(0x1dd)](_0x39b78b);_0x2cb026[_0x5ab336(0x4e7)](_0x19c18a,_0x33ff4a),_0x2cb026[_0x5ab336(0x45b)](),_0x2cb026[_0x5ab336(0x540)]=this[_0x5ab336(0x2b9)];},Window_ItemCategory[_0x199c58(0x401)]=VisuMZ['ItemsEquipsCore'][_0x199c58(0x2d7)]['Categories']['List'],Window_ItemCategory[_0x199c58(0x482)]=['HiddenItemA','HiddenItemB',_0x199c58(0x488),_0x199c58(0x5bd),_0x199c58(0x326),_0x199c58(0x50b),'FieldUsable',_0x199c58(0x248)],VisuMZ[_0x199c58(0x22a)][_0x199c58(0x3e4)]=Window_ItemCategory[_0x199c58(0x2a8)]['initialize'],Window_ItemCategory[_0x199c58(0x2a8)][_0x199c58(0x320)]=function(_0x3e08b5){const _0x5be760=_0x199c58;VisuMZ['ItemsEquipsCore']['Window_ItemCategory_initialize']['call'](this,_0x3e08b5),this[_0x5be760(0x36f)](_0x3e08b5);},Window_ItemCategory['prototype'][_0x199c58(0x36f)]=function(_0x246295){const _0xd3d9ef=_0x199c58,_0x1bc185=new Rectangle(0x0,0x0,_0x246295[_0xd3d9ef(0x533)],_0x246295[_0xd3d9ef(0x33f)]);this[_0xd3d9ef(0x517)]=new Window_Base(_0x1bc185),this['_categoryNameWindow']['opacity']=0x0,this[_0xd3d9ef(0x571)](this[_0xd3d9ef(0x517)]),this[_0xd3d9ef(0x28d)]();},Window_ItemCategory[_0x199c58(0x2a8)][_0x199c58(0x3c8)]=function(){const _0x404def=_0x199c58;return Imported[_0x404def(0x279)]&&Window_HorzCommand[_0x404def(0x2a8)][_0x404def(0x3c8)][_0x404def(0x2f6)](this);},Window_ItemCategory[_0x199c58(0x2a8)][_0x199c58(0x2bd)]=function(){},Window_ItemCategory[_0x199c58(0x2a8)][_0x199c58(0x29f)]=function(){const _0xc03139=_0x199c58;if(!this['isUseModernControls']())Window_HorzCommand[_0xc03139(0x2a8)][_0xc03139(0x29f)][_0xc03139(0x2f6)](this);},Window_ItemCategory['prototype'][_0x199c58(0x52c)]=function(){return this['_list']?this['maxItems']():0x4;},Window_ItemCategory[_0x199c58(0x2a8)][_0x199c58(0x2df)]=function(){const _0x2b8761=_0x199c58;Window_HorzCommand[_0x2b8761(0x2a8)][_0x2b8761(0x2df)]['call'](this),this[_0x2b8761(0x553)]&&this[_0x2b8761(0x553)][_0x2b8761(0x3d6)](this[_0x2b8761(0x5e5)]());},Window_ItemCategory['prototype'][_0x199c58(0x3dd)]=function(){const _0x2df03e=_0x199c58;if(this[_0x2df03e(0x519)]()){if(_0x2df03e(0x5e3)==='pqwha'){function _0x302d7f(){const _0xefe10f=_0x2df03e;return _0x29caad[_0xefe10f(0x22a)]['Settings'][_0xefe10f(0x386)][_0xefe10f(0x43d)];}}else{const _0x583013=this[_0x2df03e(0x292)]();if(this[_0x2df03e(0x553)]&&this[_0x2df03e(0x553)]['maxCols']()<=0x1){if(Input['isRepeated'](_0x2df03e(0x2b5))){if(_0x2df03e(0x254)!=='kgohL')this[_0x2df03e(0x3d8)](Input['isTriggered'](_0x2df03e(0x2b5)));else{function _0x2a60c4(){const _0x10126e=_0x2df03e;return _0x5bc7d6[_0x10126e(0x22a)][_0x10126e(0x2d7)][_0x10126e(0x4c5)]['LayoutStyle'];}}}Input['isRepeated'](_0x2df03e(0x389))&&this[_0x2df03e(0x3af)](Input[_0x2df03e(0x221)]('left'));}else this[_0x2df03e(0x553)]&&this[_0x2df03e(0x553)][_0x2df03e(0x52c)]()>0x1&&(Input[_0x2df03e(0x5eb)]('pagedown')&&!Input[_0x2df03e(0x5e9)](_0x2df03e(0x227))&&this[_0x2df03e(0x3d8)](Input[_0x2df03e(0x221)](_0x2df03e(0x435))),Input[_0x2df03e(0x5eb)](_0x2df03e(0x592))&&!Input[_0x2df03e(0x5e9)](_0x2df03e(0x227))&&this[_0x2df03e(0x3af)](Input['isTriggered']('pageup')));if(this['index']()!==_0x583013){if('NJaxW'===_0x2df03e(0x206))this[_0x2df03e(0x4b9)]();else{function _0x3fb1f8(){return;}}}}}},Window_ItemCategory[_0x199c58(0x2a8)]['processHandling']=function(){const _0x5f4cd5=_0x199c58;if(this[_0x5f4cd5(0x3c8)]())return;Window_HorzCommand[_0x5f4cd5(0x2a8)][_0x5f4cd5(0x277)]['call'](this);},Window_ItemCategory[_0x199c58(0x2a8)][_0x199c58(0x51e)]=function(){const _0x54e3d8=_0x199c58;return this['isUseModernControls']()?![]:Window_HorzCommand['prototype'][_0x54e3d8(0x51e)]['call'](this);},Window_ItemCategory[_0x199c58(0x2a8)][_0x199c58(0x463)]=function(){const _0x311ddf=_0x199c58;if(this[_0x311ddf(0x498)]()){TouchInput['isTriggered']()&&this['onTouchSelect'](!![]);if(TouchInput[_0x311ddf(0x3df)]())this[_0x311ddf(0x522)]();else{if(TouchInput['isCancelled']()){if(_0x311ddf(0x2bf)!==_0x311ddf(0x2bf)){function _0x3f8029(){const _0x445e37=_0x311ddf;if(!_0x58211f[_0x445e37(0x4a3)](_0xb8a3c4))return!![];}}else this[_0x311ddf(0x48f)]();}}}},Window_ItemCategory[_0x199c58(0x2a8)][_0x199c58(0x215)]=function(_0xc7853c){const _0xd6841f=_0x199c58;if(this['isUseModernControls']()){if('GgSyV'!==_0xd6841f(0x575))this[_0xd6841f(0x51a)](!![]);else{function _0x25e105(){const _0x503b9d=_0xd6841f;_0x5990c7[_0x503b9d(0x5e9)]('shift')&&this[_0x503b9d(0x420)]()?this[_0x503b9d(0x42a)]():this[_0x503b9d(0x24a)](_0x417263[_0x503b9d(0x221)]('up'));}}}else Window_HorzCommand['prototype']['onTouchSelect'][_0xd6841f(0x2f6)](this,_0xc7853c);},Window_ItemCategory['prototype'][_0x199c58(0x51a)]=function(_0x448b0e){const _0x5e6254=_0x199c58;this[_0x5e6254(0x334)]=![];if(this['isCursorMovable']()){const _0x5a05b6=this[_0x5e6254(0x292)](),_0x5d0b61=this[_0x5e6254(0x3d5)]();_0x5d0b61>=0x0&&_0x5d0b61!==this['index']()&&this['select'](_0x5d0b61);if(_0x448b0e&&this['index']()!==_0x5a05b6){if(_0x5e6254(0x432)!==_0x5e6254(0x2ab))this[_0x5e6254(0x4b9)]();else{function _0x330a65(){const _0x1c6b92=_0x5e6254;this[_0x1c6b92(0x53b)](_0x50c59d)['match'](/\\I\[(\d+)\]/i);const _0x1e8bcc=_0xd741a0(_0x20608d['$1'])||0x0,_0x200e88=this[_0x1c6b92(0x3a8)](_0x1190ae),_0x1ef453=_0x200e88['x']+_0x50ba70['floor']((_0x200e88[_0x1c6b92(0x533)]-_0x5dcfba[_0x1c6b92(0x366)])/0x2),_0x3f970d=_0x200e88['y']+(_0x200e88[_0x1c6b92(0x33f)]-_0x1a75fe[_0x1c6b92(0x224)])/0x2;this['drawIcon'](_0x1e8bcc,_0x1ef453,_0x3f970d);}}}}},Window_ItemCategory[_0x199c58(0x2a8)][_0x199c58(0x293)]=function(){const _0x3269aa=_0x199c58;for(const _0x10e1e0 of Window_ItemCategory[_0x3269aa(0x401)]){if('xnAMy'===_0x3269aa(0x454))this[_0x3269aa(0x3bf)](_0x10e1e0);else{function _0xe7d7e0(){const _0x349876=_0x3269aa;return _0xf207['VisuMZ_0_CoreEngine']&&_0x26affa[_0x349876(0x2a8)][_0x349876(0x3c8)][_0x349876(0x2f6)](this);}}}this['select'](this['index']());},Window_ItemCategory['prototype'][_0x199c58(0x3bf)]=function(_0x404df8){const _0x55354d=_0x199c58,_0x4f957d=_0x404df8[_0x55354d(0x24e)],_0x4aa022=_0x404df8[_0x55354d(0x260)],_0x152d54=_0x404df8[_0x55354d(0x460)]||0x0;if(_0x152d54>0x0&&!$gameSwitches[_0x55354d(0x4a3)](_0x152d54))return;let _0x209070='',_0x343a99=_0x55354d(0x323),_0x3ddb03=_0x4f957d;if(_0x4f957d[_0x55354d(0x568)](/Category:(.*)/i))_0x209070=String(RegExp['$1'])[_0x55354d(0x2ac)]();else{if(Window_ItemCategory[_0x55354d(0x482)][_0x55354d(0x2b1)](_0x4f957d)){if(_0x55354d(0x5b3)===_0x55354d(0x5b3))_0x209070=VisuMZ['ItemsEquipsCore']['Settings'][_0x55354d(0x551)][_0x4f957d];else{function _0x4a51a0(){const _0x119458=_0x55354d;return _0x13e9a[_0x119458(0x22a)][_0x119458(0x2d7)]['ItemScene']['MaxItems'];}}}else{if([_0x55354d(0x5ed),'RegularItems'][_0x55354d(0x2b1)](_0x4f957d))_0x209070=TextManager[_0x55354d(0x5e0)];else{if(_0x4f957d===_0x55354d(0x603)){if(_0x55354d(0x43a)==='BjlSE')_0x209070=TextManager['keyItem'];else{function _0x407327(){return!![];}}}else{if(_0x4f957d===_0x55354d(0x47a))_0x209070=TextManager['weapon'];else{if(_0x4f957d==='AllArmors')_0x209070=TextManager[_0x55354d(0x242)];else{if(_0x4f957d['match'](/WTYPE:(\d+)/i))_0x209070=$dataSystem[_0x55354d(0x22c)][Number(RegExp['$1'])]||'';else{if(_0x4f957d[_0x55354d(0x568)](/ATYPE:(\d+)/i))_0x209070=$dataSystem[_0x55354d(0x54c)][Number(RegExp['$1'])]||'';else _0x4f957d[_0x55354d(0x568)](/ETYPE:(\d+)/i)&&(_0x209070=$dataSystem[_0x55354d(0x3db)][Number(RegExp['$1'])]||'');}}}}}}}_0x4aa022>0x0&&this[_0x55354d(0x4bf)]()!==_0x55354d(0x378)&&(_0x209070=_0x55354d(0x457)[_0x55354d(0x257)](_0x4aa022,_0x209070)),this[_0x55354d(0x2de)](_0x209070,_0x343a99,!![],_0x3ddb03);},Window_ItemCategory[_0x199c58(0x2a8)][_0x199c58(0x534)]=function(){const _0x6b67c7=_0x199c58;return VisuMZ[_0x6b67c7(0x22a)]['Settings'][_0x6b67c7(0x551)]['TextAlign'];},Window_ItemCategory[_0x199c58(0x2a8)]['drawItem']=function(_0x410fbd){const _0x1e44ae=_0x199c58,_0x4dfc3b=this[_0x1e44ae(0x249)](_0x410fbd);if(_0x4dfc3b==='iconText'){if(_0x1e44ae(0x333)!==_0x1e44ae(0x541))this[_0x1e44ae(0x280)](_0x410fbd);else{function _0x54ac81(){const _0x1e40e2=_0x1e44ae;return _0x1e40e2(0x4ac);}}}else{if(_0x4dfc3b==='icon'){if(_0x1e44ae(0x281)===_0x1e44ae(0x4fd)){function _0x2d7a5d(){const _0x3d5f45=_0x1e44ae;this[_0x3d5f45(0x3d8)](_0x6f1a73[_0x3d5f45(0x221)](_0x3d5f45(0x2b5)));}}else this['drawItemStyleIcon'](_0x410fbd);}else{if(_0x1e44ae(0x5b2)===_0x1e44ae(0x4d6)){function _0x426df7(){const _0x565ddf=_0x1e44ae;this[_0x565ddf(0x496)][_0x565ddf(0x1ee)](),this['_commandWindow'][_0x565ddf(0x1ee)]();}}else Window_HorzCommand[_0x1e44ae(0x2a8)][_0x1e44ae(0x5be)]['call'](this,_0x410fbd);}}},Window_ItemCategory['prototype'][_0x199c58(0x4bf)]=function(){const _0x416713=_0x199c58;return VisuMZ[_0x416713(0x22a)]['Settings']['Categories'][_0x416713(0x5dc)];},Window_ItemCategory[_0x199c58(0x2a8)]['categoryStyleCheck']=function(_0x3a80e4){const _0x3ddab7=_0x199c58;if(_0x3a80e4<0x0)return _0x3ddab7(0x378);const _0x1477ae=this[_0x3ddab7(0x4bf)]();if(_0x1477ae!==_0x3ddab7(0x4ce))return _0x1477ae;else{if(_0x3ddab7(0x5e7)!==_0x3ddab7(0x5e7)){function _0x4424a2(){const _0x1cb1fe=_0x3ddab7;_0x42773b[_0x1cb1fe(0x22a)]['Scene_Shop_createSellWindow'][_0x1cb1fe(0x2f6)](this),this['isUseItemsEquipsCoreUpdatedLayout']()&&this[_0x1cb1fe(0x46f)]();}}else{const _0x16a65e=this[_0x3ddab7(0x53b)](_0x3a80e4);if(_0x16a65e['match'](/\\I\[(\d+)\]/i)){const _0x165c93=this[_0x3ddab7(0x3a8)](_0x3a80e4),_0x57c8cf=this[_0x3ddab7(0x54e)](_0x16a65e)[_0x3ddab7(0x533)];if(_0x57c8cf<=_0x165c93[_0x3ddab7(0x533)])return _0x3ddab7(0x4ac);else{if(_0x3ddab7(0x552)==='mvzYe')return _0x3ddab7(0x372);else{function _0x6b0cdc(){const _0x2ee3f2=_0x3ddab7;return _0xc7a199['ItemsEquipsCore']['Scene_Shop_buyWindowRect'][_0x2ee3f2(0x2f6)](this);}}}}else return _0x3ddab7(0x378);}}},Window_ItemCategory['prototype'][_0x199c58(0x280)]=function(_0x1a26fa){const _0x3c8c96=_0x199c58,_0x1cc4c0=this[_0x3c8c96(0x3a8)](_0x1a26fa),_0x2927ee=this['commandName'](_0x1a26fa),_0x423786=this['textSizeEx'](_0x2927ee)[_0x3c8c96(0x533)];this[_0x3c8c96(0x609)](this[_0x3c8c96(0x4c3)](_0x1a26fa));const _0x1f4ee3=this[_0x3c8c96(0x534)]();if(_0x1f4ee3===_0x3c8c96(0x2b5))this['drawTextEx'](_0x2927ee,_0x1cc4c0['x']+_0x1cc4c0['width']-_0x423786,_0x1cc4c0['y'],_0x423786);else{if(_0x1f4ee3===_0x3c8c96(0x2a2)){const _0x58d7b9=_0x1cc4c0['x']+Math['floor']((_0x1cc4c0[_0x3c8c96(0x533)]-_0x423786)/0x2);this['drawTextEx'](_0x2927ee,_0x58d7b9,_0x1cc4c0['y'],_0x423786);}else{if('cQDxO'!==_0x3c8c96(0x253)){function _0x42794f(){const _0x4529ef=_0x3c8c96;this[_0x4529ef(0x218)]['smoothSelect'](0x0),this[_0x4529ef(0x5bb)]();}}else this[_0x3c8c96(0x4ef)](_0x2927ee,_0x1cc4c0['x'],_0x1cc4c0['y'],_0x423786);}}},Window_ItemCategory['prototype'][_0x199c58(0x46a)]=function(_0x26ac88){const _0x242525=_0x199c58,_0x413c1e=this[_0x242525(0x53b)](_0x26ac88);if(_0x413c1e[_0x242525(0x568)](/\\I\[(\d+)\]/i)){const _0x4672b4=Number(RegExp['$1'])||0x0,_0x13cf34=this['itemLineRect'](_0x26ac88),_0x369ca6=_0x13cf34['x']+Math[_0x242525(0x473)]((_0x13cf34[_0x242525(0x533)]-ImageManager[_0x242525(0x366)])/0x2),_0x5cd046=_0x13cf34['y']+(_0x13cf34['height']-ImageManager[_0x242525(0x224)])/0x2;this[_0x242525(0x1fe)](_0x4672b4,_0x369ca6,_0x5cd046);}},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x4bb)]=Window_ItemCategory[_0x199c58(0x2a8)]['setItemWindow'],Window_ItemCategory[_0x199c58(0x2a8)]['setItemWindow']=function(_0x56f926){const _0x53faa0=_0x199c58;VisuMZ[_0x53faa0(0x22a)]['Window_ItemCategory_setItemWindow'][_0x53faa0(0x2f6)](this,_0x56f926),_0x56f926[_0x53faa0(0x218)]=this;},Window_ItemCategory[_0x199c58(0x2a8)]['callUpdateHelp']=function(){const _0x173a61=_0x199c58;Window_HorzCommand[_0x173a61(0x2a8)][_0x173a61(0x2b7)][_0x173a61(0x2f6)](this);if(this[_0x173a61(0x517)])this[_0x173a61(0x28d)]();},Window_ItemCategory[_0x199c58(0x2a8)][_0x199c58(0x28d)]=function(){const _0x40c589=_0x199c58,_0x24f17b=this[_0x40c589(0x517)];_0x24f17b[_0x40c589(0x3ea)][_0x40c589(0x520)]();const _0xf09b20=this[_0x40c589(0x249)](this[_0x40c589(0x292)]());if(_0xf09b20===_0x40c589(0x372)){if('RBzBZ'===_0x40c589(0x409)){function _0x2819b4(){const _0x5d3131=_0x40c589;if(this[_0x5d3131(0x58b)])return![];return _0x2b7f8e[_0x5d3131(0x22a)][_0x5d3131(0x2d7)][_0x5d3131(0x2a6)]['Enable'];}}else{const _0x4f6df9=this[_0x40c589(0x3a8)](this[_0x40c589(0x292)]());let _0x43145f=this[_0x40c589(0x53b)](this['index']());_0x43145f=_0x43145f[_0x40c589(0x309)](/\\I\[(\d+)\]/gi,''),_0x24f17b['resetFontSettings'](),this[_0x40c589(0x2c0)](_0x43145f,_0x4f6df9),this['categoryNameWindowDrawText'](_0x43145f,_0x4f6df9),this[_0x40c589(0x307)](_0x43145f,_0x4f6df9);}}},Window_ItemCategory[_0x199c58(0x2a8)][_0x199c58(0x2c0)]=function(_0x293ca5,_0x4332ea){},Window_ItemCategory[_0x199c58(0x2a8)][_0x199c58(0x29b)]=function(_0x4a8830,_0x4ecc10){const _0x3eabba=_0x199c58,_0x10ec87=this[_0x3eabba(0x517)];_0x10ec87[_0x3eabba(0x577)](_0x4a8830,0x0,_0x4ecc10['y'],_0x10ec87[_0x3eabba(0x524)],'center');},Window_ItemCategory[_0x199c58(0x2a8)][_0x199c58(0x307)]=function(_0x4d98e9,_0x143778){const _0x364bcf=_0x199c58,_0x57ac1c=this['_categoryNameWindow'],_0x147dcc=$gameSystem[_0x364bcf(0x415)](),_0x1ff73e=_0x143778['x']+Math[_0x364bcf(0x473)](_0x143778['width']/0x2)+_0x147dcc;_0x57ac1c['x']=_0x57ac1c[_0x364bcf(0x533)]/-0x2+_0x1ff73e,_0x57ac1c['y']=Math[_0x364bcf(0x473)](_0x143778[_0x364bcf(0x33f)]/0x2);},Window_ItemList['prototype'][_0x199c58(0x3dd)]=function(){const _0x3e188f=_0x199c58;if(this[_0x3e188f(0x519)]()){if(_0x3e188f(0x532)!==_0x3e188f(0x532)){function _0x524a99(){_0x4fc59e=_0x61e135(_0x3b6ab2['$1']);}}else{const _0x21aa21=this[_0x3e188f(0x292)]();if(this['maxCols']()<=0x1){if('symjb'===_0x3e188f(0x40e)){function _0x5355f6(){const _0x30b9d1=_0x3e188f;for(const _0x475135 of _0x494b8e[_0x30b9d1(0x3db)]){const _0xd8f326=_0x4ad928[_0x30b9d1(0x3db)][_0x30b9d1(0x5df)](_0x475135['trim']());if(_0xd8f326>0x0)_0x5a65a7[_0x30b9d1(0x255)][_0x30b9d1(0x419)](_0xd8f326);}}}else{if(!this[_0x3e188f(0x3b3)](_0x3e188f(0x435))&&Input[_0x3e188f(0x221)]('pagedown')){if(_0x3e188f(0x1e4)===_0x3e188f(0x513)){function _0x4454af(){const _0xccf0fe=_0x3e188f;return this[_0xccf0fe(0x48a)]();}}else this['cursorPagedown']();}!this[_0x3e188f(0x3b3)](_0x3e188f(0x592))&&Input[_0x3e188f(0x221)]('pageup')&&this[_0x3e188f(0x42a)]();}}else{if(this[_0x3e188f(0x52c)]()>0x1){if(Input[_0x3e188f(0x5eb)](_0x3e188f(0x2b5))){if(_0x3e188f(0x2b6)!==_0x3e188f(0x2b6)){function _0x316411(){const _0x24fad7=_0x3e188f;_0x3b4ad3[_0x24fad7(0x22a)][_0x24fad7(0x2e3)]['call'](this,_0x4935f5,_0x31a61a);}}else this[_0x3e188f(0x3d8)](Input[_0x3e188f(0x221)](_0x3e188f(0x2b5)));}if(Input[_0x3e188f(0x5eb)]('left')){if('TBQPk'===_0x3e188f(0x5ce))this[_0x3e188f(0x3af)](Input['isTriggered'](_0x3e188f(0x389)));else{function _0x4ea505(){const _0x28e193=_0x3e188f;_0x3046cf+=0x1;if(_0x4b4e55[_0x28e193(0x2da)][_0x28e193(0x568)](_0x233ae1)){const _0x18077f=_0x170d72(_0x4fb614['$1'])||0x1;if(_0x300ecc>=_0x18077f)return!![];}if(_0x55af50[_0x28e193(0x2da)][_0x28e193(0x568)](_0x56d1e2)){const _0x5cf2d2=_0x275447(_0x19d46e['$1'])||0x1;if(_0x36037a>=_0x5cf2d2)return!![];}}}}if(this[_0x3e188f(0x39a)]()){if(_0x3e188f(0x566)!==_0x3e188f(0x4e3)){if(Input[_0x3e188f(0x221)]('pagedown')&&Input[_0x3e188f(0x5e9)](_0x3e188f(0x227))){if(_0x3e188f(0x3a0)!==_0x3e188f(0x3a0)){function _0x240771(){const _0x3f53a1=_0x3e188f,_0x19bceb=this[_0x3f53a1(0x437)](),_0x16e677=this[_0x3f53a1(0x2d4)](0x1,!![]),_0x1cd238=this[_0x3f53a1(0x44a)]()?0x0:_0x2f6a41['boxWidth']-_0x19bceb,_0x24eb40=this[_0x3f53a1(0x395)]();return new _0x565e1f(_0x1cd238,_0x24eb40,_0x19bceb,_0x16e677);}}else this[_0x3e188f(0x408)]();}Input['isTriggered'](_0x3e188f(0x592))&&Input[_0x3e188f(0x5e9)]('shift')&&this[_0x3e188f(0x42a)]();}else{function _0x1f511b(){const _0x59811e=_0x3e188f,_0x482405=this[_0x59811e(0x3a8)](_0x3eac56),_0x4bbac8=this['textSizeEx'](_0x1df4eb)[_0x59811e(0x533)];return _0x4bbac8<=_0x482405['width']?_0x59811e(0x4ac):'icon';}}}else{Input[_0x3e188f(0x221)](_0x3e188f(0x435))&&this[_0x3e188f(0x408)]();if(Input[_0x3e188f(0x221)](_0x3e188f(0x592))){if(_0x3e188f(0x3f4)!=='tWaAr'){function _0x8a77b6(){const _0x2d9639=_0x3e188f;return this[_0x2d9639(0x3e8)]?this[_0x2d9639(0x3e8)][_0x2d9639(0x3d3)]:0x3;}}else this[_0x3e188f(0x42a)]();}}}}if(Input['isRepeated'](_0x3e188f(0x5d4))){if(_0x3e188f(0x362)===_0x3e188f(0x362))Input['isPressed'](_0x3e188f(0x227))&&this[_0x3e188f(0x420)]()?this[_0x3e188f(0x408)]():this[_0x3e188f(0x1d6)](Input[_0x3e188f(0x221)](_0x3e188f(0x5d4)));else{function _0xf1e0d6(){const _0x2a8baa=_0x3e188f,_0x4bd35f=this[_0x2a8baa(0x1c2)],_0x45098b=_0x32ca14[_0x2a8baa(0x415)](),_0x4156d6=_0x4f9ae7['x']+_0x29a89e[_0x2a8baa(0x473)](_0x327a9f['width']/0x2)+_0x45098b;_0x4bd35f['x']=_0x4bd35f[_0x2a8baa(0x533)]/-0x2+_0x4156d6,_0x4bd35f['y']=_0x28791f[_0x2a8baa(0x473)](_0x2b3a76['height']/0x2);}}}if(Input[_0x3e188f(0x5eb)]('up')){if(_0x3e188f(0x2f9)==='DzZMF')Input[_0x3e188f(0x5e9)](_0x3e188f(0x227))&&this[_0x3e188f(0x420)]()?this[_0x3e188f(0x42a)]():this['cursorUp'](Input[_0x3e188f(0x221)]('up'));else{function _0x5ea799(){const _0x1e001e=_0x3e188f;this[_0x1e001e(0x553)][_0x1e001e(0x1d4)]();const _0x179860=this['_slotWindow'][_0x1e001e(0x5e0)](),_0x40ade8=this[_0x1e001e(0x553)]['_data'][_0x1e001e(0x5df)](_0x179860),_0x50dc63=_0x57b68e[_0x1e001e(0x473)](this['_itemWindow'][_0x1e001e(0x5e8)]()/0x2)-0x1;this[_0x1e001e(0x553)][_0x1e001e(0x42d)](_0x40ade8>=0x0?_0x40ade8:0x0),this[_0x1e001e(0x553)]['setTopRow'](this[_0x1e001e(0x553)][_0x1e001e(0x292)]()-_0x50dc63);}}}if(Imported['VisuMZ_0_CoreEngine']){if(_0x3e188f(0x3bb)!==_0x3e188f(0x1ca))this[_0x3e188f(0x2bd)]();else{function _0x57939a(){const _0x4f94b7=_0x3e188f,_0x12d603=_0x38cbba[_0x4f94b7(0x22a)]['Settings'][_0x4f94b7(0x2a6)][_0x4f94b7(0x518)];return _0x12d603[_0x4f94b7(0x568)](/#(.*)/i)?'#'+_0x36804b(_0x19bfe5['$1']):_0x1632a8['textColor'](_0x12d603);}}}this['index']()!==_0x21aa21&&this[_0x3e188f(0x4b9)]();}}},Window_ItemList[_0x199c58(0x2a8)]['limitedPageUpDownSceneCheck']=function(){const _0x3dffd8=_0x199c58,_0x25afd2=SceneManager[_0x3dffd8(0x458)],_0x52cf1a=[Scene_Item,Scene_Shop];return _0x52cf1a[_0x3dffd8(0x2b1)](_0x25afd2[_0x3dffd8(0x24d)]);},Window_ItemList[_0x199c58(0x2a8)][_0x199c58(0x439)]=function(){const _0x2a1af6=_0x199c58;Window_Selectable[_0x2a1af6(0x2a8)]['activate']['call'](this),this[_0x2a1af6(0x218)]&&this[_0x2a1af6(0x218)][_0x2a1af6(0x3c8)]()&&this['_categoryWindow']['activate']();},Window_ItemList[_0x199c58(0x2a8)][_0x199c58(0x228)]=function(){const _0x57d53b=_0x199c58;Window_Selectable[_0x57d53b(0x2a8)]['deactivate'][_0x57d53b(0x2f6)](this);if(this[_0x57d53b(0x218)]&&this[_0x57d53b(0x218)][_0x57d53b(0x3c8)]()){if(_0x57d53b(0x4dd)!==_0x57d53b(0x4dd)){function _0x4ee40b(){const _0x28459b=_0x57d53b;return _0xfb42bf[_0x28459b(0x22a)][_0x28459b(0x2d7)][_0x28459b(0x581)][_0x28459b(0x274)];}}else this['_categoryWindow'][_0x57d53b(0x228)]();}},Window_ItemList[_0x199c58(0x2a8)][_0x199c58(0x3d6)]=function(_0x574dc8){const _0x525fa5=_0x199c58;this['_category']!==_0x574dc8&&(this[_0x525fa5(0x48c)]=_0x574dc8,this[_0x525fa5(0x1d4)](),this['_categoryWindow']&&this[_0x525fa5(0x218)][_0x525fa5(0x3c8)]()?this[_0x525fa5(0x42d)](0x0):this['scrollTo'](0x0,0x0));},VisuMZ['ItemsEquipsCore'][_0x199c58(0x32e)]=Window_ItemList[_0x199c58(0x2a8)][_0x199c58(0x52c)],Window_ItemList[_0x199c58(0x2a8)][_0x199c58(0x52c)]=function(){const _0x13fa26=_0x199c58;if(SceneManager[_0x13fa26(0x458)][_0x13fa26(0x24d)]===Scene_Battle){if('aJBNV'===_0x13fa26(0x397))return VisuMZ[_0x13fa26(0x22a)][_0x13fa26(0x32e)][_0x13fa26(0x2f6)](this);else{function _0x41c7f7(){const _0x5597de=_0x13fa26;_0x36fdc3['VisuMZ_0_CoreEngine']?(_0x31af08=this[_0x5597de(0x2e7)]['paramValueByName'](_0x4e1f00,![]),_0x487bf3=this[_0x5597de(0x49b)][_0x5597de(0x342)](_0x24db4b,![]),_0x526cb0=_0x38f268(this['_actor'][_0x5597de(0x342)](_0x26af7f,!![]))[_0x5597de(0x568)](/([%％])/i)):(_0x2f2e8a=this['_actor'][_0x5597de(0x2d8)](_0x3cc93f),_0x31987b=this['_tempActor'][_0x5597de(0x2d8)](_0x15f6ce),_0x309449=_0x3394e3%0x1!==0x0||_0x38c285%0x1!==0x0);const _0x428326=_0xbdfd0d,_0x1a256b=_0x1c76a5,_0x408964=_0x1a256b-_0x428326;let _0x2994fb=_0x408964;if(_0x10e2ee)_0x2994fb=_0x3ebbca[_0x5597de(0x53e)](_0x408964*0x64)+'%';_0x408964!==0x0&&(this[_0x5597de(0x4b3)](_0x5566b3[_0x5597de(0x584)](_0x408964)),_0x2994fb=(_0x408964>0x0?'(+%1)':_0x5597de(0x4e8))[_0x5597de(0x257)](_0x2994fb),this[_0x5597de(0x577)](_0x2994fb,_0x429a89+_0x2b0e0f,_0x94537f,_0xccecf,_0x5597de(0x389)));}}}else{if(SceneManager[_0x13fa26(0x458)]['constructor']===Scene_Map)return VisuMZ[_0x13fa26(0x22a)][_0x13fa26(0x32e)][_0x13fa26(0x2f6)](this);else{if('oFJbE'===_0x13fa26(0x31e)){function _0x3c5d51(){const _0x21a7bb=_0x13fa26;_0x5128cb(_0x21a7bb(0x204)[_0x21a7bb(0x257)](_0x5b2347,_0x401be2,_0x27027b)),_0x35bb52[_0x21a7bb(0x465)]();}}else return VisuMZ[_0x13fa26(0x22a)]['Settings']['ItemScene'][_0x13fa26(0x341)];}}},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x319)]=Window_ItemList['prototype']['colSpacing'],Window_ItemList['prototype']['colSpacing']=function(){const _0x16a5e6=_0x199c58;if(this[_0x16a5e6(0x52c)]()<=0x1)return Window_Selectable[_0x16a5e6(0x2a8)][_0x16a5e6(0x364)][_0x16a5e6(0x2f6)](this);else{if(_0x16a5e6(0x5a8)!==_0x16a5e6(0x5a8)){function _0xaacad(){const _0xe535bf=_0x16a5e6;_0xa84ace=_0x4a2ee1[_0xe535bf(0x56a)](_0x65c350),_0xf7d72c[_0xe535bf(0x22a)]['Scene_Shop_prepare'][_0xe535bf(0x2f6)](this,_0x54aa60,_0x39b584),this['adjustHiddenShownGoods']();}}else return VisuMZ[_0x16a5e6(0x22a)][_0x16a5e6(0x319)][_0x16a5e6(0x2f6)](this);}},Window_ItemList[_0x199c58(0x2a8)]['includes']=function(_0x623eee){const _0x43157a=_0x199c58;switch(this[_0x43157a(0x48c)]){case _0x43157a(0x5ed):return DataManager[_0x43157a(0x44e)](_0x623eee);case _0x43157a(0x442):return DataManager[_0x43157a(0x44e)](_0x623eee)&&_0x623eee[_0x43157a(0x3aa)]===0x1;case _0x43157a(0x603):return DataManager['isItem'](_0x623eee)&&_0x623eee[_0x43157a(0x3aa)]===0x2;case _0x43157a(0x467):return DataManager[_0x43157a(0x44e)](_0x623eee)&&_0x623eee[_0x43157a(0x3aa)]===0x3;case _0x43157a(0x58d):return DataManager[_0x43157a(0x44e)](_0x623eee)&&_0x623eee[_0x43157a(0x3aa)]===0x4;case _0x43157a(0x5bd):return DataManager[_0x43157a(0x44e)](_0x623eee)&&_0x623eee[_0x43157a(0x236)];case'Nonconsumable':return DataManager[_0x43157a(0x44e)](_0x623eee)&&!_0x623eee[_0x43157a(0x236)];case _0x43157a(0x326):return DataManager[_0x43157a(0x44e)](_0x623eee)&&[0x0][_0x43157a(0x2b1)](_0x623eee[_0x43157a(0x377)]);case'BattleUsable':return DataManager[_0x43157a(0x44e)](_0x623eee)&&[0x0,0x1][_0x43157a(0x2b1)](_0x623eee[_0x43157a(0x377)]);case _0x43157a(0x35f):return DataManager[_0x43157a(0x44e)](_0x623eee)&&[0x0,0x2][_0x43157a(0x2b1)](_0x623eee['occasion']);case'NeverUsable':return DataManager[_0x43157a(0x44e)](_0x623eee)&&[0x3][_0x43157a(0x2b1)](_0x623eee['occasion']);case _0x43157a(0x47a):return DataManager[_0x43157a(0x20a)](_0x623eee);case _0x43157a(0x3a5):return DataManager[_0x43157a(0x3f0)](_0x623eee);default:if(this[_0x43157a(0x48c)][_0x43157a(0x568)](/WTYPE:(\d+)/i)){if(_0x43157a(0x20b)===_0x43157a(0x20b))return DataManager[_0x43157a(0x20a)](_0x623eee)&&_0x623eee[_0x43157a(0x3c3)]===Number(RegExp['$1']);else{function _0x56bd34(){const _0x6a144b=_0x43157a;if(this[_0x6a144b(0x492)](_0x9537fb))this['changeEquip'](_0x31e4f2,null);}}}else{if(this[_0x43157a(0x48c)][_0x43157a(0x568)](/WTYPE:(.*)/i)){const _0x117dab=$dataSystem[_0x43157a(0x22c)][_0x43157a(0x5df)](String(RegExp['$1'])[_0x43157a(0x2ac)]());return DataManager['isWeapon'](_0x623eee)&&_0x623eee['wtypeId']===_0x117dab;}else{if(this['_category'][_0x43157a(0x568)](/ATYPE:(\d+)/i)){if(_0x43157a(0x547)===_0x43157a(0x547))return DataManager['isArmor'](_0x623eee)&&_0x623eee[_0x43157a(0x583)]===Number(RegExp['$1']);else{function _0x1627fb(){const _0x446d54=_0x43157a;this[_0x446d54(0x280)](_0x532b76);}}}else{if(this[_0x43157a(0x48c)]['match'](/ATYPE:(.*)/i)){const _0x4504b1=$dataSystem[_0x43157a(0x54c)][_0x43157a(0x5df)](String(RegExp['$1'])['trim']());return DataManager['isArmor'](_0x623eee)&&_0x623eee[_0x43157a(0x583)]===_0x4504b1;}else{if(this['_category'][_0x43157a(0x568)](/ETYPE:(\d+)/i))return!!_0x623eee&&_0x623eee[_0x43157a(0x295)]===Number(RegExp['$1']);else{if(this['_category'][_0x43157a(0x568)](/ETYPE:(.*)/i)){const _0xf8d481=$dataSystem[_0x43157a(0x3db)][_0x43157a(0x5df)](String(RegExp['$1'])[_0x43157a(0x2ac)]());return DataManager[_0x43157a(0x3f0)](_0x623eee)&&_0x623eee[_0x43157a(0x295)]===_0xf8d481;}else{if(this[_0x43157a(0x48c)][_0x43157a(0x568)](/Category:(.*)/i)){if(_0x43157a(0x3e1)===_0x43157a(0x3e1))return!!_0x623eee&&_0x623eee[_0x43157a(0x5f4)]['includes'](String(RegExp['$1'])[_0x43157a(0x5c5)]()[_0x43157a(0x2ac)]());else{function _0x10073f(){return this['normalColor']();}}}}}}}}}}return![];},Window_ItemList[_0x199c58(0x2a8)][_0x199c58(0x200)]=function(){return!![];},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x40d)]=Window_ItemList[_0x199c58(0x2a8)][_0x199c58(0x5be)],Window_ItemList[_0x199c58(0x2a8)][_0x199c58(0x5be)]=function(_0x2ff0a8){const _0x474a2f=_0x199c58;VisuMZ[_0x474a2f(0x22a)][_0x474a2f(0x40d)][_0x474a2f(0x2f6)](this,_0x2ff0a8),this['placeItemNewLabel'](_0x2ff0a8);},Window_ItemList[_0x199c58(0x2a8)][_0x199c58(0x5c0)]=function(_0x5584ca,_0x5067c5,_0x3eb0a4,_0x3485d8){const _0x6b9ecc=_0x199c58;Window_Selectable['prototype'][_0x6b9ecc(0x5c0)][_0x6b9ecc(0x2f6)](this,_0x5584ca,_0x5067c5,_0x3eb0a4,_0x3485d8);},Window_ItemList['prototype'][_0x199c58(0x381)]=function(_0x118bae){const _0x4f140b=_0x199c58,_0x4423f0=this[_0x4f140b(0x24c)](_0x118bae);if(!_0x4423f0||!this[_0x4f140b(0x200)]())return;if(!$gameParty[_0x4f140b(0x4b1)](_0x4423f0))return;const _0x419ebe=this[_0x4f140b(0x3a8)](_0x118bae),_0x303484=_0x419ebe['x'],_0x48174c=_0x419ebe['y']+(this['lineHeight']()-ImageManager['iconHeight'])/0x2,_0x385664=VisuMZ[_0x4f140b(0x22a)][_0x4f140b(0x2d7)][_0x4f140b(0x2a6)][_0x4f140b(0x402)],_0x219291=VisuMZ[_0x4f140b(0x22a)][_0x4f140b(0x2d7)]['New']['OffsetY'];this[_0x4f140b(0x329)](_0x4423f0,_0x303484+_0x385664,_0x48174c+_0x219291);},Window_ItemList[_0x199c58(0x2a8)][_0x199c58(0x3fd)]=function(_0x3270d1){const _0x171d88=_0x199c58;this[_0x171d88(0x4a9)]=_0x3270d1,this[_0x171d88(0x2b7)]();},VisuMZ[_0x199c58(0x22a)]['Window_ItemList_updateHelp']=Window_ItemList[_0x199c58(0x2a8)][_0x199c58(0x1eb)],Window_ItemList['prototype'][_0x199c58(0x1eb)]=function(){const _0x13cf0b=_0x199c58;VisuMZ[_0x13cf0b(0x22a)][_0x13cf0b(0x548)][_0x13cf0b(0x2f6)](this);if(this[_0x13cf0b(0x4a9)]&&this[_0x13cf0b(0x4a9)][_0x13cf0b(0x24d)]===Window_ShopStatus){if(_0x13cf0b(0x235)!==_0x13cf0b(0x235)){function _0x25c309(){const _0x308c24=_0x13cf0b,_0xfde7c0=this[_0x308c24(0x4f3)](),_0x441f5a=_0x1e11c1['ItemsEquipsCore'][_0x308c24(0x2d7)]['ShopScene'][_0x308c24(0x36b)],_0x239105=_0xfde7c0===_0x308c24(0x378)?_0x2ba238[_0x308c24(0x302)]:'\x5cI[%1]%2'[_0x308c24(0x257)](_0x441f5a,_0x5602f0[_0x308c24(0x302)]),_0x57ab81=this[_0x308c24(0x240)]();if(this[_0x308c24(0x4d9)]()&&!_0x57ab81)return;this['addCommand'](_0x239105,'buy',_0x57ab81);}}else this[_0x13cf0b(0x4a9)][_0x13cf0b(0x1bb)](this[_0x13cf0b(0x5e0)]());}},Window_BattleItem[_0x199c58(0x2a8)][_0x199c58(0x4be)]=function(_0x2dac57){const _0x3a0b23=_0x199c58;if(BattleManager[_0x3a0b23(0x29e)]()){if(_0x3a0b23(0x267)!=='PStXP'){function _0x385480(){const _0x2d985f=_0x3a0b23;return this[_0x2d985f(0x3a6)](_0x29ca38(_0x628735));}}else return BattleManager[_0x3a0b23(0x29e)]()[_0x3a0b23(0x405)](_0x2dac57);}else return Window_ItemList[_0x3a0b23(0x2a8)][_0x3a0b23(0x4be)][_0x3a0b23(0x2f6)](this,_0x2dac57);},Window_EventItem[_0x199c58(0x2a8)][_0x199c58(0x200)]=function(){return![];},Window_EquipStatus[_0x199c58(0x2a8)][_0x199c58(0x50d)]=function(){const _0x530c30=_0x199c58;return VisuMZ['ItemsEquipsCore'][_0x530c30(0x2d7)][_0x530c30(0x581)]['EnableLayout'];},VisuMZ['ItemsEquipsCore'][_0x199c58(0x38b)]=Window_EquipStatus[_0x199c58(0x2a8)][_0x199c58(0x1d4)],Window_EquipStatus[_0x199c58(0x2a8)][_0x199c58(0x1d4)]=function(){const _0x2fa72c=_0x199c58;this[_0x2fa72c(0x297)](),this[_0x2fa72c(0x4ea)]();if(this['_actor'])this['_actor'][_0x2fa72c(0x1d4)]();this['isUseItemsEquipsCoreUpdatedLayout']()?this[_0x2fa72c(0x5d2)]():VisuMZ[_0x2fa72c(0x22a)]['Window_EquipStatus_refresh'][_0x2fa72c(0x2f6)](this);},Window_EquipStatus[_0x199c58(0x2a8)][_0x199c58(0x5d2)]=function(){const _0x25f8a1=_0x199c58;this[_0x25f8a1(0x3ea)]['clear']();if(!this['_actor'])return;if(this['isMainMenuCoreMenuImageOptionAvailable']()){const _0x3c03b2=ImageManager[_0x25f8a1(0x438)](this[_0x25f8a1(0x2e7)][_0x25f8a1(0x2e6)]());_0x3c03b2['addLoadListener'](this['onMenuImageLoad'][_0x25f8a1(0x426)](this));}else this[_0x25f8a1(0x24b)]();},Window_EquipStatus['prototype'][_0x199c58(0x2f8)]=function(){const _0x49e10a=_0x199c58;return Imported[_0x49e10a(0x3ff)]&&this[_0x49e10a(0x2e7)][_0x49e10a(0x2e6)]()!==''&&VisuMZ[_0x49e10a(0x22a)][_0x49e10a(0x2d7)]['EquipScene'][_0x49e10a(0x422)];},Window_EquipStatus['prototype'][_0x199c58(0x3ae)]=function(){const _0x16b4fd=_0x199c58;VisuMZ[_0x16b4fd(0x22a)][_0x16b4fd(0x2d7)]['EquipScene'][_0x16b4fd(0x298)][_0x16b4fd(0x2f6)](this),this[_0x16b4fd(0x509)]();},Window_EquipStatus[_0x199c58(0x2a8)][_0x199c58(0x24b)]=function(){const _0x1af519=_0x199c58;VisuMZ[_0x1af519(0x22a)][_0x1af519(0x2d7)][_0x1af519(0x581)][_0x1af519(0x3b7)][_0x1af519(0x2f6)](this),this[_0x1af519(0x509)]();},Window_EquipStatus['prototype'][_0x199c58(0x509)]=function(){const _0x2e016d=_0x199c58;this[_0x2e016d(0x4ea)](),VisuMZ[_0x2e016d(0x22a)][_0x2e016d(0x2d7)][_0x2e016d(0x581)][_0x2e016d(0x1c9)]['call'](this);},Window_EquipStatus[_0x199c58(0x2a8)][_0x199c58(0x1e2)]=function(_0x2e9698,_0x3439e3,_0x2faa2e,_0x16fc83,_0x120fe1){const _0x44b6a6=_0x199c58,_0x2f86f3=ImageManager[_0x44b6a6(0x438)](_0x2e9698[_0x44b6a6(0x2e6)]()),_0x3c927b=this[_0x44b6a6(0x524)]-_0x2f86f3['width'];_0x3439e3+=_0x3c927b/0x2;if(_0x3c927b<0x0)_0x16fc83-=_0x3c927b;Window_StatusBase[_0x44b6a6(0x2a8)][_0x44b6a6(0x1e2)]['call'](this,_0x2e9698,_0x3439e3,_0x2faa2e,_0x16fc83,_0x120fe1);},Window_EquipStatus[_0x199c58(0x2a8)][_0x199c58(0x30a)]=function(){const _0x1e91c4=_0x199c58;if(Imported[_0x1e91c4(0x279)])return VisuMZ['CoreEngine'][_0x1e91c4(0x2d7)][_0x1e91c4(0x554)][_0x1e91c4(0x349)];else{if('mlqWK'!==_0x1e91c4(0x346))return[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7];else{function _0x290496(){const _0x2fde8b=_0x1e91c4;if(this[_0x2fde8b(0x3c8)]())return;_0x2a9998[_0x2fde8b(0x2a8)][_0x2fde8b(0x277)][_0x2fde8b(0x2f6)](this);}}}},Window_EquipStatus['prototype'][_0x199c58(0x3f9)]=function(){const _0x29b171=_0x199c58;return VisuMZ[_0x29b171(0x22a)]['Settings'][_0x29b171(0x581)][_0x29b171(0x531)];},Window_EquipStatus[_0x199c58(0x2a8)][_0x199c58(0x34d)]=function(){const _0x579894=_0x199c58;return Imported[_0x579894(0x279)]&&VisuMZ[_0x579894(0x52f)][_0x579894(0x2d7)]['Param'][_0x579894(0x2c9)];},Window_EquipStatus[_0x199c58(0x2a8)][_0x199c58(0x3f3)]=function(_0x2d0879,_0x2a66d0,_0x184674,_0x3a3a92){const _0x5e8a7a=_0x199c58,_0x2d6403=this['itemPadding']();Imported[_0x5e8a7a(0x279)]?this[_0x5e8a7a(0x3b0)](_0x2a66d0+_0x2d6403,_0x184674,_0x3a3a92,_0x2d0879,![]):this[_0x5e8a7a(0x577)](TextManager[_0x5e8a7a(0x2d8)](_0x2d0879),_0x2a66d0+_0x2d6403,_0x184674,_0x3a3a92);},Window_EquipStatus[_0x199c58(0x2a8)][_0x199c58(0x421)]=function(_0x41b35f,_0x20bb29,_0x266b9e,_0x1d24ed){const _0x39a6b4=_0x199c58,_0x12c345=this[_0x39a6b4(0x354)]();let _0x5a4c96=0x0;Imported['VisuMZ_0_CoreEngine']?_0x5a4c96=this[_0x39a6b4(0x2e7)][_0x39a6b4(0x342)](_0x41b35f,!![]):_0x5a4c96=this[_0x39a6b4(0x2e7)][_0x39a6b4(0x2d8)](_0x41b35f);const _0x27a54e=_0x5a4c96;this[_0x39a6b4(0x577)](_0x5a4c96,_0x20bb29,_0x266b9e,_0x1d24ed-_0x12c345,'right');},Window_EquipStatus['prototype']['drawUpdatedAfterParamValue']=function(_0x688308,_0x153f64,_0x855aa9,_0x1e8698){const _0x181140=_0x199c58,_0x5ad0f5=this[_0x181140(0x354)]();let _0x35ab15=0x0,_0x1465d8=0x0,_0x34cbe3='';if(this[_0x181140(0x49b)]){if(_0x181140(0x46d)!=='Ptubo'){if(Imported[_0x181140(0x279)]){if(_0x181140(0x589)===_0x181140(0x25f)){function _0x49fa92(){const _0x25c1f1=_0x181140;if(!_0x5f45be)return 0x0;const _0x21fda1=_0x5c1720['ItemsEquipsCore'][_0x25c1f1(0x39d)][_0x25c1f1(0x2f6)](this,_0x288dc8);return this[_0x25c1f1(0x3a9)](_0x314fed,_0x21fda1);}}else _0x35ab15=this['_actor']['paramValueByName'](_0x688308,![]),_0x1465d8=this[_0x181140(0x49b)][_0x181140(0x342)](_0x688308,![]),_0x34cbe3=this['_tempActor'][_0x181140(0x342)](_0x688308,!![]);}else{if(_0x181140(0x59e)!=='hsqTe')_0x35ab15=this[_0x181140(0x2e7)][_0x181140(0x2d8)](_0x688308),_0x1465d8=this[_0x181140(0x49b)][_0x181140(0x2d8)](_0x688308),_0x34cbe3=this['_tempActor'][_0x181140(0x2d8)](_0x688308);else{function _0x5748af(){const _0x507704=_0x181140;return _0x4883b6[_0x507704(0x22a)][_0x507704(0x2d7)][_0x507704(0x581)]['LayoutStyle'];}}}const _0x294549=_0x35ab15,_0x1fe73b=_0x1465d8;diffValue=_0x1fe73b-_0x294549,this[_0x181140(0x4b3)](ColorManager[_0x181140(0x584)](diffValue)),this['drawText'](_0x34cbe3,_0x153f64,_0x855aa9,_0x1e8698-_0x5ad0f5,_0x181140(0x2b5));}else{function _0x501eab(){const _0x447ae5=_0x181140;return _0x1befa1[_0x447ae5(0x473)](this[_0x447ae5(0x2ea)][_0x447ae5(0x5ea)]*this[_0x447ae5(0x5fe)]());}}}},Window_EquipStatus['prototype'][_0x199c58(0x327)]=function(_0x1c39cd,_0x4edcdc,_0x528cc2,_0x249eac){const _0x5b26dd=_0x199c58,_0x4a9633=this[_0x5b26dd(0x354)]();let _0x4c5fd9=0x0,_0x46f38d=0x0,_0x5154cd=![];if(this[_0x5b26dd(0x49b)]){if(_0x5b26dd(0x52a)===_0x5b26dd(0x52a)){if(Imported['VisuMZ_0_CoreEngine'])_0x4c5fd9=this['_actor'][_0x5b26dd(0x342)](_0x1c39cd,![]),_0x46f38d=this['_tempActor'][_0x5b26dd(0x342)](_0x1c39cd,![]),_0x5154cd=String(this[_0x5b26dd(0x2e7)][_0x5b26dd(0x342)](_0x1c39cd,!![]))[_0x5b26dd(0x568)](/([%％])/i);else{if('bMHok'===_0x5b26dd(0x4cf)){function _0x2d66cb(){const _0x560f21=_0x5b26dd,_0x5697a4=this[_0x560f21(0x292)](),_0x4eb6ad=this[_0x560f21(0x3d5)]();_0x4eb6ad>=0x0&&_0x4eb6ad!==this['index']()&&this[_0x560f21(0x36c)](_0x4eb6ad),_0xab6282&&this[_0x560f21(0x292)]()!==_0x5697a4&&this['playCursorSound']();}}else _0x4c5fd9=this[_0x5b26dd(0x2e7)][_0x5b26dd(0x2d8)](_0x1c39cd),_0x46f38d=this['_tempActor'][_0x5b26dd(0x2d8)](_0x1c39cd),_0x5154cd=_0x4c5fd9%0x1!==0x0||_0x46f38d%0x1!==0x0;}const _0x43cf05=_0x4c5fd9,_0x3a0a5b=_0x46f38d,_0x4a7688=_0x3a0a5b-_0x43cf05;let _0x12cf7d=_0x4a7688;if(_0x5154cd)_0x12cf7d=Math[_0x5b26dd(0x53e)](_0x4a7688*0x64)+'%';if(_0x4a7688!==0x0){if(_0x5b26dd(0x60a)===_0x5b26dd(0x60a))this[_0x5b26dd(0x4b3)](ColorManager['paramchangeTextColor'](_0x4a7688)),_0x12cf7d=(_0x4a7688>0x0?_0x5b26dd(0x392):_0x5b26dd(0x4e8))[_0x5b26dd(0x257)](_0x12cf7d),this['drawText'](_0x12cf7d,_0x4edcdc+_0x4a9633,_0x528cc2,_0x249eac,_0x5b26dd(0x389));else{function _0x444225(){const _0x44287b=_0x5b26dd;this[_0x44287b(0x297)](),this[_0x44287b(0x4ea)]();if(this['_actor'])this[_0x44287b(0x2e7)][_0x44287b(0x1d4)]();this['isUseItemsEquipsCoreUpdatedLayout']()?this[_0x44287b(0x5d2)]():_0x1b5bd3[_0x44287b(0x22a)]['Window_EquipStatus_refresh'][_0x44287b(0x2f6)](this);}}}}else{function _0x3cfcc6(){const _0x11dd1e=_0x5b26dd;_0x4d2566=_0x11dd1e(0x37a)['format'](_0x1a1350['id']);}}}},Window_EquipStatus[_0x199c58(0x2a8)][_0x199c58(0x35b)]=function(_0x50c7b0,_0x39623d,_0x1703ed,_0x3b8e6f,_0x217289){const _0x378102=_0x199c58;if(VisuMZ[_0x378102(0x22a)]['Settings'][_0x378102(0x581)][_0x378102(0x226)]===![])return;_0x217289=Math['max'](_0x217289||0x1,0x1);while(_0x217289--){if('HDnkB'!=='HDnkB'){function _0x336eb4(){const _0x114e68=_0x378102;return _0x179e27[_0x114e68(0x22a)][_0x114e68(0x2d7)][_0x114e68(0x4c5)]['ShowShopStatus'];}}else{_0x3b8e6f=_0x3b8e6f||this[_0x378102(0x264)](),this[_0x378102(0x3ea)][_0x378102(0x5e1)]=0xa0;const _0x47e143=ColorManager[_0x378102(0x425)]();this[_0x378102(0x3ea)]['fillRect'](_0x50c7b0+0x1,_0x39623d+0x1,_0x1703ed-0x2,_0x3b8e6f-0x2,_0x47e143),this['contents']['paintOpacity']=0xff;}}},ColorManager[_0x199c58(0x425)]=function(){const _0x2e9689=_0x199c58,_0x40d82a=VisuMZ[_0x2e9689(0x22a)][_0x2e9689(0x2d7)][_0x2e9689(0x581)];let _0x4c50af=_0x40d82a[_0x2e9689(0x4cd)]!==undefined?_0x40d82a[_0x2e9689(0x4cd)]:0x13;return ColorManager['getColor'](_0x4c50af);},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x335)]=Window_EquipCommand[_0x199c58(0x2a8)][_0x199c58(0x320)],Window_EquipCommand[_0x199c58(0x2a8)][_0x199c58(0x320)]=function(_0x38bb57){const _0xb97619=_0x199c58;VisuMZ[_0xb97619(0x22a)][_0xb97619(0x335)][_0xb97619(0x2f6)](this,_0x38bb57),this[_0xb97619(0x451)](_0x38bb57);},Window_EquipCommand[_0x199c58(0x2a8)][_0x199c58(0x451)]=function(_0x123227){const _0x38f0c5=_0x199c58,_0x3f09a2=new Rectangle(0x0,0x0,_0x123227[_0x38f0c5(0x533)],_0x123227[_0x38f0c5(0x33f)]);this[_0x38f0c5(0x1c2)]=new Window_Base(_0x3f09a2),this[_0x38f0c5(0x1c2)][_0x38f0c5(0x540)]=0x0,this[_0x38f0c5(0x571)](this[_0x38f0c5(0x1c2)]),this[_0x38f0c5(0x5ee)]();},Window_EquipCommand[_0x199c58(0x2a8)][_0x199c58(0x2b7)]=function(){const _0x2e04fa=_0x199c58;Window_HorzCommand['prototype'][_0x2e04fa(0x2b7)][_0x2e04fa(0x2f6)](this);if(this['_commandNameWindow'])this[_0x2e04fa(0x5ee)]();},Window_EquipCommand[_0x199c58(0x2a8)][_0x199c58(0x5ee)]=function(){const _0x2f98a8=_0x199c58,_0x2b604b=this[_0x2f98a8(0x1c2)];_0x2b604b[_0x2f98a8(0x3ea)]['clear']();const _0x29d2e0=this['commandStyleCheck'](this[_0x2f98a8(0x292)]());if(_0x29d2e0===_0x2f98a8(0x372)){const _0x25deb3=this[_0x2f98a8(0x3a8)](this[_0x2f98a8(0x292)]());let _0x40764b=this['commandName'](this[_0x2f98a8(0x292)]());_0x40764b=_0x40764b['replace'](/\\I\[(\d+)\]/gi,''),_0x2b604b[_0x2f98a8(0x4ea)](),this[_0x2f98a8(0x56c)](_0x40764b,_0x25deb3),this[_0x2f98a8(0x26a)](_0x40764b,_0x25deb3),this['commandNameWindowCenter'](_0x40764b,_0x25deb3);}},Window_EquipCommand['prototype']['commandNameWindowDrawBackground']=function(_0x15e2e7,_0x5f0867){},Window_EquipCommand[_0x199c58(0x2a8)][_0x199c58(0x26a)]=function(_0x5d3ff0,_0x431a36){const _0xc8c8b3=_0x199c58,_0x37300f=this[_0xc8c8b3(0x1c2)];_0x37300f['drawText'](_0x5d3ff0,0x0,_0x431a36['y'],_0x37300f[_0xc8c8b3(0x524)],_0xc8c8b3(0x2a2));},Window_EquipCommand[_0x199c58(0x2a8)]['commandNameWindowCenter']=function(_0x1a66d8,_0x12950c){const _0x28f97f=_0x199c58,_0x1d292b=this[_0x28f97f(0x1c2)],_0x67bd50=$gameSystem[_0x28f97f(0x415)](),_0x49ad94=_0x12950c['x']+Math[_0x28f97f(0x473)](_0x12950c['width']/0x2)+_0x67bd50;_0x1d292b['x']=_0x1d292b[_0x28f97f(0x533)]/-0x2+_0x49ad94,_0x1d292b['y']=Math[_0x28f97f(0x473)](_0x12950c[_0x28f97f(0x33f)]/0x2);},Window_EquipCommand[_0x199c58(0x2a8)][_0x199c58(0x3c8)]=function(){const _0x372686=_0x199c58;return Imported[_0x372686(0x279)]&&Window_HorzCommand[_0x372686(0x2a8)]['isUseModernControls'][_0x372686(0x2f6)](this);},Window_EquipCommand[_0x199c58(0x2a8)][_0x199c58(0x29f)]=function(){const _0x59d1c1=_0x199c58;if(this[_0x59d1c1(0x1cd)]()===_0x59d1c1(0x23f))Window_HorzCommand[_0x59d1c1(0x2a8)][_0x59d1c1(0x29f)][_0x59d1c1(0x2f6)](this);},Window_EquipCommand[_0x199c58(0x2a8)][_0x199c58(0x3dd)]=function(){const _0x49782f=_0x199c58;if(!this[_0x49782f(0x3e0)]()){if(_0x49782f(0x30c)!==_0x49782f(0x476))Window_HorzCommand['prototype'][_0x49782f(0x3dd)][_0x49782f(0x2f6)](this);else{function _0x16444d(){const _0x5e27b7=_0x49782f;return this['isUseItemsEquipsCoreUpdatedLayout']()?this[_0x5e27b7(0x5c8)]():_0x53dcc3[_0x5e27b7(0x22a)][_0x5e27b7(0x3b6)]['call'](this);}}}},Window_EquipCommand['prototype'][_0x199c58(0x3e0)]=function(){const _0x5b1c1b=_0x199c58;if(!this[_0x5b1c1b(0x519)]())return![];if(SceneManager[_0x5b1c1b(0x458)][_0x5b1c1b(0x24d)]!==Scene_Equip)return![];if(Input[_0x5b1c1b(0x221)]('down')){if('ADGDy'==='ADGDy')this[_0x5b1c1b(0x4b9)](),SceneManager['_scene'][_0x5b1c1b(0x271)](),SceneManager[_0x5b1c1b(0x458)][_0x5b1c1b(0x37d)][_0x5b1c1b(0x42d)](-0x1);else{function _0x478cb0(){const _0x2d6163=_0x5b1c1b;for(const _0x10df50 of _0x540855[_0x2d6163(0x5b0)](this[_0x2d6163(0x5c4)])){_0x10df50[_0x2d6163(0x1ee)]();}}}}return![];},Window_EquipCommand[_0x199c58(0x2a8)]['maxCols']=function(){const _0x7baa7f=_0x199c58;return this['_list']?this[_0x7baa7f(0x3e8)][_0x7baa7f(0x3d3)]:0x3;},Window_EquipCommand[_0x199c58(0x2a8)][_0x199c58(0x463)]=function(){const _0x54c0b3=_0x199c58;if(this['isOpen']()&&this[_0x54c0b3(0x39c)]&&SceneManager[_0x54c0b3(0x458)]['constructor']===Scene_Equip){if('aRQuW'!==_0x54c0b3(0x5aa)){if(this[_0x54c0b3(0x51e)]()&&TouchInput[_0x54c0b3(0x44f)]())this[_0x54c0b3(0x53a)](![]);else TouchInput[_0x54c0b3(0x221)]()&&this['onTouchSelectModernControls'](!![]);if(TouchInput[_0x54c0b3(0x3df)]()){if(_0x54c0b3(0x2e9)!==_0x54c0b3(0x2e9)){function _0x51e29a(){const _0x2d0e50=_0x54c0b3;if(this[_0x2d0e50(0x50d)]())return this[_0x2d0e50(0x219)]();else{const _0x462a81=_0x483d20[_0x2d0e50(0x22a)][_0x2d0e50(0x46e)][_0x2d0e50(0x2f6)](this);return this[_0x2d0e50(0x282)]()&&this[_0x2d0e50(0x304)]()&&(_0x462a81['width']-=this[_0x2d0e50(0x1e8)]()),_0x462a81;}}}else this['onTouchOk']();}}else{function _0x6f9f78(){const _0x42020d=_0x54c0b3,_0x37c136=_0x2fce5c[_0x42020d(0x573)](_0xd4a920(_0x3082dd),0x0)/_0x2c8a59['a'][_0x42020d(0x287)];return this[_0x42020d(0x5c9)](),_0x430285(_0x37c136)?_0x42020d(0x44b):'%1%'[_0x42020d(0x257)](_0x481dae['round'](_0x37c136*0x64));}}}},Window_EquipCommand[_0x199c58(0x2a8)][_0x199c58(0x53a)]=function(_0x48bf84){const _0x874575=_0x199c58;this[_0x874575(0x334)]=![];const _0x524372=this[_0x874575(0x292)](),_0xf452ea=this[_0x874575(0x3d5)](),_0x2ad795=SceneManager[_0x874575(0x458)][_0x874575(0x37d)];if(_0x2ad795[_0x874575(0x29a)]()&&_0x2ad795[_0x874575(0x39c)]){if(_0xf452ea>=0x0){if('NlSPL'!=='NlSPL'){function _0x5e5910(){const _0xb6ed9c=_0x874575;return _0x4266c7['getInputMultiButtonStrings'](_0xb6ed9c(0x592),_0xb6ed9c(0x435));}}else _0xf452ea===this['index']()&&(this[_0x874575(0x334)]=!![]),this['activate'](),this[_0x874575(0x36c)](_0xf452ea);}else _0x2ad795[_0x874575(0x3d5)]()>=0x0&&(this[_0x874575(0x228)](),this['deselect']());}_0x48bf84&&this[_0x874575(0x292)]()!==_0x524372&&this[_0x874575(0x4b9)]();},Window_EquipCommand[_0x199c58(0x2a8)][_0x199c58(0x293)]=function(){const _0x4f460e=_0x199c58;this['addEquipCommand'](),this['addOptimizeCommand'](),this[_0x4f460e(0x2d5)]();},Window_EquipCommand[_0x199c58(0x2a8)]['refresh']=function(){const _0x13bec8=_0x199c58;Window_HorzCommand[_0x13bec8(0x2a8)][_0x13bec8(0x1d4)][_0x13bec8(0x2f6)](this),this['refreshCursor']();},Window_EquipCommand[_0x199c58(0x2a8)]['addEquipCommand']=function(){const _0x58d44e=_0x199c58;if(!this[_0x58d44e(0x4da)]())return;const _0x3731e1=this[_0x58d44e(0x4f3)](),_0x4070f4=VisuMZ[_0x58d44e(0x22a)][_0x58d44e(0x2d7)]['EquipScene'][_0x58d44e(0x3cd)],_0x303478=_0x3731e1==='text'?TextManager[_0x58d44e(0x565)]:_0x58d44e(0x457)['format'](_0x4070f4,TextManager[_0x58d44e(0x565)]),_0xb8bd74=this['isEquipCommandEnabled']();this[_0x58d44e(0x2de)](_0x303478,_0x58d44e(0x23f),_0xb8bd74);},Window_EquipCommand[_0x199c58(0x2a8)][_0x199c58(0x4da)]=function(){const _0x30750c=_0x199c58;return!this[_0x30750c(0x3c8)]();},Window_EquipCommand['prototype']['isEquipCommandEnabled']=function(){return!![];},Window_EquipCommand[_0x199c58(0x2a8)]['addOptimizeCommand']=function(){const _0xc31d35=_0x199c58;if(!this[_0xc31d35(0x3ba)]())return;const _0x49a12a=this[_0xc31d35(0x4f3)](),_0x36da6e=VisuMZ[_0xc31d35(0x22a)][_0xc31d35(0x2d7)]['EquipScene']['CmdIconOptimize'],_0x18a56f=_0x49a12a===_0xc31d35(0x378)?TextManager[_0xc31d35(0x356)]:_0xc31d35(0x457)[_0xc31d35(0x257)](_0x36da6e,TextManager[_0xc31d35(0x356)]),_0x514da2=this['isOptimizeCommandEnabled']();this[_0xc31d35(0x2de)](_0x18a56f,_0xc31d35(0x356),_0x514da2);},Window_EquipCommand[_0x199c58(0x2a8)][_0x199c58(0x3ba)]=function(){const _0x346a66=_0x199c58;return VisuMZ[_0x346a66(0x22a)][_0x346a66(0x2d7)][_0x346a66(0x581)][_0x346a66(0x49a)];},Window_EquipCommand[_0x199c58(0x2a8)]['isOptimizeCommandEnabled']=function(){return!![];},Window_EquipCommand['prototype'][_0x199c58(0x2d5)]=function(){const _0x210390=_0x199c58;if(!this[_0x210390(0x38a)]())return;const _0x594777=this['commandStyle'](),_0x50e77e=VisuMZ[_0x210390(0x22a)][_0x210390(0x2d7)]['EquipScene'][_0x210390(0x2cf)],_0x1f3e06=_0x594777===_0x210390(0x378)?TextManager[_0x210390(0x520)]:'\x5cI[%1]%2'[_0x210390(0x257)](_0x50e77e,TextManager[_0x210390(0x520)]),_0x70f72f=this[_0x210390(0x430)]();this[_0x210390(0x2de)](_0x1f3e06,_0x210390(0x520),_0x70f72f);},Window_EquipCommand[_0x199c58(0x2a8)][_0x199c58(0x38a)]=function(){const _0x37fd96=_0x199c58;return VisuMZ['ItemsEquipsCore'][_0x37fd96(0x2d7)][_0x37fd96(0x581)][_0x37fd96(0x411)];},Window_EquipCommand[_0x199c58(0x2a8)][_0x199c58(0x430)]=function(){return!![];},Window_EquipCommand[_0x199c58(0x2a8)][_0x199c58(0x534)]=function(){const _0x2632d7=_0x199c58;return VisuMZ[_0x2632d7(0x22a)]['Settings'][_0x2632d7(0x581)][_0x2632d7(0x33c)];},Window_EquipCommand[_0x199c58(0x2a8)][_0x199c58(0x5be)]=function(_0x5574d9){const _0x3c4812=_0x199c58,_0x52fd50=this['commandStyleCheck'](_0x5574d9);if(_0x52fd50===_0x3c4812(0x4ac)){if('dWQfo'!==_0x3c4812(0x313))this[_0x3c4812(0x280)](_0x5574d9);else{function _0x460900(){const _0x2a1ecd=_0x3c4812;_0x4b86ca[_0x2a1ecd(0x2a8)][_0x2a1ecd(0x3dd)][_0x2a1ecd(0x2f6)](this);}}}else{if(_0x52fd50==='icon'){if(_0x3c4812(0x5b5)!==_0x3c4812(0x5b5)){function _0x4fb223(){const _0x46f5fb=_0xefe9b9(_0x37d8be['$1'])||0x1;if(_0x1fead3>=_0x46f5fb)return!![];}}else this[_0x3c4812(0x46a)](_0x5574d9);}else Window_HorzCommand[_0x3c4812(0x2a8)][_0x3c4812(0x5be)][_0x3c4812(0x2f6)](this,_0x5574d9);}},Window_EquipCommand[_0x199c58(0x2a8)][_0x199c58(0x4f3)]=function(){const _0x5808ea=_0x199c58;return VisuMZ[_0x5808ea(0x22a)][_0x5808ea(0x2d7)][_0x5808ea(0x581)][_0x5808ea(0x26d)];},Window_EquipCommand[_0x199c58(0x2a8)][_0x199c58(0x2a7)]=function(_0x8ad49){const _0x5e9490=_0x199c58;if(_0x8ad49<0x0)return'text';const _0x21f586=this['commandStyle']();if(_0x21f586!==_0x5e9490(0x4ce)){if('hSxjA'==='CAHbU'){function _0x2fa1c3(){const _0x28e607=_0x5e9490;_0x31f0ca['ItemsEquipsCore'][_0x28e607(0x559)][_0x28e607(0x2f6)](this),this[_0x28e607(0x50d)]()&&this[_0x28e607(0x250)]();}}else return _0x21f586;}else{if(this[_0x5e9490(0x2ec)]()>0x0){if(_0x5e9490(0x4f0)===_0x5e9490(0x4f0)){const _0x4e5765=this[_0x5e9490(0x53b)](_0x8ad49);if(_0x4e5765[_0x5e9490(0x568)](/\\I\[(\d+)\]/i)){const _0x9d4116=this[_0x5e9490(0x3a8)](_0x8ad49),_0x896c07=this[_0x5e9490(0x54e)](_0x4e5765)[_0x5e9490(0x533)];if(_0x896c07<=_0x9d4116[_0x5e9490(0x533)])return _0x5e9490(0x4ac);else{if('REkhs'===_0x5e9490(0x3cc))return _0x5e9490(0x372);else{function _0xb7baa0(){const _0x18853f=_0x5e9490;_0x263d0a[_0x18853f(0x2a8)][_0x18853f(0x1d4)]['call'](this),this[_0x18853f(0x4f4)]();}}}}}else{function _0x31b5ad(){const _0x4752dd=_0x5e9490,_0x2e1b93=_0x4518d4['x']+_0x387a8a[_0x4752dd(0x473)]((_0x48174b[_0x4752dd(0x533)]-_0xe78a92)/0x2);this[_0x4752dd(0x4ef)](_0xe8bf2d,_0x2e1b93,_0x120285['y'],_0x1e05ec);}}}}return _0x5e9490(0x378);},Window_EquipCommand[_0x199c58(0x2a8)][_0x199c58(0x280)]=function(_0x516977){const _0x51d4d4=_0x199c58,_0xd40fb7=this['itemLineRect'](_0x516977),_0x375869=this['commandName'](_0x516977),_0x46e1be=this[_0x51d4d4(0x54e)](_0x375869)['width'];this[_0x51d4d4(0x609)](this[_0x51d4d4(0x4c3)](_0x516977));const _0x1402e7=this[_0x51d4d4(0x534)]();if(_0x1402e7==='right')this[_0x51d4d4(0x4ef)](_0x375869,_0xd40fb7['x']+_0xd40fb7['width']-_0x46e1be,_0xd40fb7['y'],_0x46e1be);else{if(_0x1402e7===_0x51d4d4(0x2a2)){if(_0x51d4d4(0x474)===_0x51d4d4(0x4ff)){function _0x3f0275(){const _0x53f10e=_0x51d4d4;return _0x1ed155[_0x53f10e(0x22a)][_0x53f10e(0x238)][_0x53f10e(0x2f6)](this);}}else{const _0x10e640=_0xd40fb7['x']+Math[_0x51d4d4(0x473)]((_0xd40fb7[_0x51d4d4(0x533)]-_0x46e1be)/0x2);this['drawTextEx'](_0x375869,_0x10e640,_0xd40fb7['y'],_0x46e1be);}}else this[_0x51d4d4(0x4ef)](_0x375869,_0xd40fb7['x'],_0xd40fb7['y'],_0x46e1be);}},Window_EquipCommand['prototype']['drawItemStyleIcon']=function(_0x85a83a){const _0x54d40f=_0x199c58;this[_0x54d40f(0x53b)](_0x85a83a)['match'](/\\I\[(\d+)\]/i);const _0x2510ec=Number(RegExp['$1'])||0x0,_0x77becd=this[_0x54d40f(0x3a8)](_0x85a83a),_0x24a6aa=_0x77becd['x']+Math[_0x54d40f(0x473)]((_0x77becd['width']-ImageManager[_0x54d40f(0x366)])/0x2),_0x133ad8=_0x77becd['y']+(_0x77becd[_0x54d40f(0x33f)]-ImageManager[_0x54d40f(0x224)])/0x2;this[_0x54d40f(0x1fe)](_0x2510ec,_0x24a6aa,_0x133ad8);},Window_EquipSlot[_0x199c58(0x2a8)][_0x199c58(0x3c8)]=function(){const _0x1b57c3=_0x199c58;return Imported[_0x1b57c3(0x279)]&&Window_HorzCommand[_0x1b57c3(0x2a8)]['isUseModernControls'][_0x1b57c3(0x2f6)](this);},Window_EquipSlot[_0x199c58(0x2a8)][_0x199c58(0x439)]=function(){const _0x34ffde=_0x199c58;Window_StatusBase[_0x34ffde(0x2a8)][_0x34ffde(0x439)][_0x34ffde(0x2f6)](this),this['callUpdateHelp']();},Window_EquipSlot[_0x199c58(0x2a8)][_0x199c58(0x440)]=function(){const _0x2fa35d=_0x199c58;Window_StatusBase[_0x2fa35d(0x2a8)][_0x2fa35d(0x440)][_0x2fa35d(0x2f6)](this),this[_0x2fa35d(0x321)]();},Window_EquipSlot[_0x199c58(0x2a8)][_0x199c58(0x321)]=function(){const _0x5bac11=_0x199c58;if(!this[_0x5bac11(0x205)]())return;if(Input[_0x5bac11(0x221)](_0x5bac11(0x227))&&this[_0x5bac11(0x5e0)]()){if(_0x5bac11(0x4dc)==='LBRhR'){function _0x204ea6(){const _0x1829f0=_0x5bac11;this['_dummyWindow'][_0x1829f0(0x1ee)](),this[_0x1829f0(0x496)][_0x1829f0(0x45b)](),this[_0x1829f0(0x496)][_0x1829f0(0x2f2)](),this[_0x1829f0(0x4a9)][_0x1829f0(0x45b)]();}}else{const _0x3856df=SceneManager[_0x5bac11(0x458)]['_actor'];if(_0x3856df){if(_0x5bac11(0x3d2)===_0x5bac11(0x209)){function _0x3663c0(){_0x405d19=_0x4a6872['item'];}}else this[_0x5bac11(0x57d)](this[_0x5bac11(0x292)]())?(this[_0x5bac11(0x495)](),this[_0x5bac11(0x1eb)]()):this['playBuzzerSound']();}}}},Window_EquipSlot[_0x199c58(0x2a8)][_0x199c58(0x57d)]=function(_0x18ce99){const _0x146c1c=_0x199c58,_0x24b8d1=SceneManager[_0x146c1c(0x458)]['_actor'];if(!_0x24b8d1)return;if(!_0x24b8d1[_0x146c1c(0x25e)](this[_0x146c1c(0x292)]())){if('XsfjW'===_0x146c1c(0x561))return![];else{function _0x35b150(){const _0x450af3=_0x146c1c;_0x1bf92c[_0x450af3(0x2a8)][_0x450af3(0x2b7)]['call'](this);if(this[_0x450af3(0x517)])this[_0x450af3(0x28d)]();}}}const _0x3517cf=_0x24b8d1['equipSlots']()[this[_0x146c1c(0x292)]()];if(_0x24b8d1['nonRemovableEtypes']()[_0x146c1c(0x2b1)](_0x3517cf)){if(_0x146c1c(0x229)!==_0x146c1c(0x229)){function _0x71443e(){const _0x233d48=_0x146c1c;return _0x158c4c[_0x233d48(0x22a)][_0x233d48(0x2d7)]['StatusWindow'][_0x233d48(0x3b9)];}}else return![];}return!![];;},Window_EquipSlot[_0x199c58(0x2a8)][_0x199c58(0x495)]=function(){const _0x3ccce4=_0x199c58;SoundManager['playEquip']();const _0x18197d=SceneManager[_0x3ccce4(0x458)][_0x3ccce4(0x2e7)];_0x18197d['changeEquip'](this['index'](),null),this['refresh'](),this[_0x3ccce4(0x553)]['refresh'](),this[_0x3ccce4(0x2b7)]();const _0x49522b=SceneManager[_0x3ccce4(0x458)][_0x3ccce4(0x4a9)];if(_0x49522b)_0x49522b[_0x3ccce4(0x1d4)]();},Window_EquipSlot['prototype'][_0x199c58(0x205)]=function(){const _0xca3d57=_0x199c58;if(!this[_0xca3d57(0x2d9)])return![];if(!VisuMZ[_0xca3d57(0x22a)]['Settings'][_0xca3d57(0x581)][_0xca3d57(0x2aa)])return![];return!![];},Window_EquipSlot[_0x199c58(0x2a8)][_0x199c58(0x3dd)]=function(){const _0x3803fa=_0x199c58;if(!this[_0x3803fa(0x3e0)]()){if(_0x3803fa(0x29d)===_0x3803fa(0x29d))Window_StatusBase['prototype'][_0x3803fa(0x3dd)][_0x3803fa(0x2f6)](this);else{function _0xdb0301(){const _0x26ac32=_0x3803fa;this[_0x26ac32(0x369)]();}}}},Window_EquipSlot[_0x199c58(0x2a8)][_0x199c58(0x3e0)]=function(){const _0x2f7af2=_0x199c58;if(!this['isCursorMovable']())return![];if(SceneManager[_0x2f7af2(0x458)][_0x2f7af2(0x24d)]!==Scene_Equip)return![];if(this[_0x2f7af2(0x3e9)]()){if(_0x2f7af2(0x3ce)!==_0x2f7af2(0x3ce)){function _0xb10c18(){const _0x4f0208=_0x2f7af2,_0x173340=this[_0x4f0208(0x24c)](_0x5190e6);_0x173340?_0x245975[_0x4f0208(0x2a8)][_0x4f0208(0x5be)][_0x4f0208(0x2f6)](this,_0x51fa19):this['drawRemoveItem'](_0x28227b);}}else return this[_0x2f7af2(0x4b9)](),Input[_0x2f7af2(0x520)](),SceneManager[_0x2f7af2(0x458)]['onSlotCancel'](),![];}else{if(Input[_0x2f7af2(0x5eb)](_0x2f7af2(0x5d4))){if('FbnkJ'!=='ZctsT'){const _0x1f48d1=this[_0x2f7af2(0x292)]();if(Input[_0x2f7af2(0x5e9)](_0x2f7af2(0x227)))this[_0x2f7af2(0x408)]();else{if('dnkhP'!==_0x2f7af2(0x2b4))this[_0x2f7af2(0x1d6)](Input[_0x2f7af2(0x221)](_0x2f7af2(0x5d4)));else{function _0x174c5a(){const _0x3940a3=_0x2f7af2;return _0x41526b[_0x3940a3(0x231)];}}}return this[_0x2f7af2(0x292)]()!==_0x1f48d1&&this[_0x2f7af2(0x4b9)](),!![];}else{function _0x1b68ca(){const _0x46b8db=_0x2f7af2;_0x7709a6[_0x46b8db(0x2a8)][_0x46b8db(0x5c0)][_0x46b8db(0x2f6)](this,_0x3964d7,_0x32a8e0,_0x48299c,_0x2214d3);}}}else{if(this[_0x2f7af2(0x20f)]()&&Input[_0x2f7af2(0x221)](_0x2f7af2(0x227)))return!![];}}return![];},Window_EquipSlot[_0x199c58(0x2a8)][_0x199c58(0x3e9)]=function(){const _0x2c9eea=_0x199c58;if(this[_0x2c9eea(0x292)]()!==0x0)return![];const _0x58f786=VisuMZ[_0x2c9eea(0x22a)]['Settings'][_0x2c9eea(0x581)];if(!_0x58f786[_0x2c9eea(0x49a)]&&!_0x58f786[_0x2c9eea(0x411)])return![];return Input[_0x2c9eea(0x221)]('up');},Window_EquipSlot['prototype'][_0x199c58(0x20f)]=function(){const _0x1a2792=_0x199c58;return VisuMZ[_0x1a2792(0x22a)][_0x1a2792(0x2d7)][_0x1a2792(0x581)][_0x1a2792(0x2aa)];},Window_EquipSlot[_0x199c58(0x2a8)]['processTouchModernControls']=function(){const _0x2e83d2=_0x199c58;if(this[_0x2e83d2(0x29a)]()&&this[_0x2e83d2(0x39c)]&&SceneManager[_0x2e83d2(0x458)][_0x2e83d2(0x24d)]===Scene_Equip){if(this[_0x2e83d2(0x51e)]()&&TouchInput[_0x2e83d2(0x44f)]())this[_0x2e83d2(0x53a)](![]);else TouchInput[_0x2e83d2(0x221)]()&&this['onTouchSelectModernControls'](!![]);if(TouchInput['isClicked']())this[_0x2e83d2(0x522)]();else TouchInput[_0x2e83d2(0x2a3)]()&&this[_0x2e83d2(0x48f)]();}},Window_EquipSlot[_0x199c58(0x2a8)][_0x199c58(0x53a)]=function(_0x4f2788){const _0x173e29=_0x199c58;this[_0x173e29(0x334)]=![];const _0xaa038d=this[_0x173e29(0x292)](),_0x2c4bf1=this[_0x173e29(0x3d5)](),_0x153d1e=SceneManager['_scene'][_0x173e29(0x49f)];if(_0x153d1e[_0x173e29(0x29a)]()&&_0x153d1e[_0x173e29(0x39c)]){if(_0x2c4bf1>=0x0)_0x2c4bf1===this[_0x173e29(0x292)]()&&(this[_0x173e29(0x334)]=!![]),this['activate'](),this['select'](_0x2c4bf1);else _0x153d1e[_0x173e29(0x3d5)]()>=0x0&&(this[_0x173e29(0x228)](),this[_0x173e29(0x2f2)]());}if(_0x4f2788&&this[_0x173e29(0x292)]()!==_0xaa038d){if(_0x173e29(0x21a)==='sxxkN'){function _0x13c4ba(){const _0x5862cf=_0x173e29;this[_0x5862cf(0x2b0)]();}}else this['playCursorSound']();}},Window_EquipSlot['prototype']['equipSlotIndex']=function(){const _0x177ab0=_0x199c58;return this[_0x177ab0(0x292)]();},VisuMZ[_0x199c58(0x22a)]['Window_EquipItem_includes']=Window_EquipItem[_0x199c58(0x2a8)][_0x199c58(0x2b1)],Window_EquipItem[_0x199c58(0x2a8)][_0x199c58(0x2b1)]=function(_0x3cc206){const _0x3cfa30=_0x199c58;if(_0x3cc206===null&&this[_0x3cfa30(0x484)]()['includes'](this[_0x3cfa30(0x295)]())){if('KLweL'!==_0x3cfa30(0x332))return![];else{function _0x2e28f8(){const _0x1101db=_0x3cfa30;if(_0x30b164[_0x1101db(0x40f)]&&_0x2f8729[_0x1101db(0x3fb)]!==_0x42eb3a)return _0x3f2716['uiInputPosition'];else{if(this[_0x1101db(0x50d)]())return this[_0x1101db(0x4ca)]()[_0x1101db(0x568)](/RIGHT/i);else _0x15bcb2['prototype'][_0x1101db(0x44a)][_0x1101db(0x2f6)](this);}}}}else return VisuMZ[_0x3cfa30(0x22a)][_0x3cfa30(0x43b)][_0x3cfa30(0x2f6)](this,_0x3cc206);},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x32a)]=Window_EquipItem[_0x199c58(0x2a8)][_0x199c58(0x4be)],Window_EquipItem[_0x199c58(0x2a8)][_0x199c58(0x4be)]=function(_0x32e8d6){const _0x55fd91=_0x199c58;if(_0x32e8d6&&this[_0x55fd91(0x2e7)]){if('WzaQV'===_0x55fd91(0x443)){if(this['itemHasEquipLimit'](_0x32e8d6))return![];if(this[_0x55fd91(0x444)](_0x32e8d6))return![];if(this[_0x55fd91(0x1c1)](_0x32e8d6))return![];}else{function _0xe6a374(){const _0x2d77cb=_0x55fd91;_0x110a48=_0x41fb9e[_0x2d77cb(0x242)];}}}if(!_0x32e8d6)return!this[_0x55fd91(0x484)]()[_0x55fd91(0x2b1)](this[_0x55fd91(0x295)]());return VisuMZ[_0x55fd91(0x22a)][_0x55fd91(0x32a)][_0x55fd91(0x2f6)](this,_0x32e8d6);},Window_EquipItem[_0x199c58(0x2a8)][_0x199c58(0x5b8)]=function(_0x982bac){const _0x2dd0bb=_0x199c58,_0x205165=_0x982bac[_0x2dd0bb(0x2da)];if(_0x205165[_0x2dd0bb(0x568)](/<EQUIP COPY LIMIT:[ ](\d+)>/i)){const _0x168af5=Number(RegExp['$1'])||0x1;let _0x4b668c=0x0;const _0x2b6e71=this[_0x2dd0bb(0x2e7)]['equips'](),_0x308919=SceneManager['_scene'][_0x2dd0bb(0x37d)][_0x2dd0bb(0x2c8)]();_0x2b6e71[_0x308919]=null;for(const _0x2847e4 of _0x2b6e71){if(!_0x2847e4)continue;if(DataManager[_0x2dd0bb(0x20a)](_0x982bac)===DataManager['isWeapon'](_0x2847e4)){if(_0x2dd0bb(0x4a8)==='EUTmt'){function _0xa249c8(){const _0x547297=_0x2dd0bb,_0x50247e=_0x1109b3[_0x547297(0x22a)][_0x547297(0x2d7)][_0x547297(0x386)]['LabelRecoverHP'];return _0x50247e[_0x547297(0x257)](_0x3362cc['hp']);}}else{if(_0x982bac['id']===_0x2847e4['id'])_0x4b668c+=0x1;}}}return _0x4b668c>=_0x168af5;}else return![];},Window_EquipItem[_0x199c58(0x2a8)][_0x199c58(0x444)]=function(_0x30e3ff){const _0x528c5a=_0x199c58;if(!DataManager[_0x528c5a(0x20a)](_0x30e3ff))return![];const _0x3672cd=/<EQUIP WEAPON TYPE LIMIT:[ ](\d+)>/i;let _0x439035=0x0;const _0x7ce1a7=this[_0x528c5a(0x2e7)][_0x528c5a(0x3e3)](),_0x2cb8bf=SceneManager[_0x528c5a(0x458)][_0x528c5a(0x37d)][_0x528c5a(0x2c8)]();_0x7ce1a7[_0x2cb8bf]=null;for(const _0x20c631 of _0x7ce1a7){if(!_0x20c631)continue;if(!DataManager['isWeapon'](_0x20c631))continue;if(_0x30e3ff[_0x528c5a(0x3c3)]===_0x20c631[_0x528c5a(0x3c3)]){_0x439035+=0x1;if(_0x30e3ff['note'][_0x528c5a(0x568)](_0x3672cd)){const _0x3d66c6=Number(RegExp['$1'])||0x1;if(_0x439035>=_0x3d66c6)return!![];}if(_0x20c631[_0x528c5a(0x2da)][_0x528c5a(0x568)](_0x3672cd)){const _0x3430a2=Number(RegExp['$1'])||0x1;if(_0x439035>=_0x3430a2)return!![];}}}return![];},Window_EquipItem[_0x199c58(0x2a8)]['isSoleArmorType']=function(_0x12b43f){const _0x2995ab=_0x199c58;if(!DataManager[_0x2995ab(0x3f0)](_0x12b43f))return![];const _0x245e04=/<EQUIP ARMOR TYPE LIMIT:[ ](\d+)>/i;let _0x3936d5=0x0;const _0x17ab97=this[_0x2995ab(0x2e7)][_0x2995ab(0x3e3)](),_0x3a7a44=SceneManager['_scene']['_slotWindow'][_0x2995ab(0x2c8)]();_0x17ab97[_0x3a7a44]=null;for(const _0x301933 of _0x17ab97){if(!_0x301933)continue;if(!DataManager['isArmor'](_0x301933))continue;if(_0x12b43f[_0x2995ab(0x583)]===_0x301933[_0x2995ab(0x583)]){_0x3936d5+=0x1;if(_0x12b43f['note']['match'](_0x245e04)){const _0x4f0704=Number(RegExp['$1'])||0x1;if(_0x3936d5>=_0x4f0704)return!![];}if(_0x301933[_0x2995ab(0x2da)][_0x2995ab(0x568)](_0x245e04)){const _0x5c8360=Number(RegExp['$1'])||0x1;if(_0x3936d5>=_0x5c8360)return!![];}}}return![];},Window_EquipItem[_0x199c58(0x2a8)][_0x199c58(0x484)]=function(){const _0x455d7a=_0x199c58;return VisuMZ[_0x455d7a(0x22a)][_0x455d7a(0x2d7)][_0x455d7a(0x581)]['NonRemoveETypes'];},Window_EquipItem[_0x199c58(0x2a8)]['drawItem']=function(_0x198c2c){const _0x20cbc7=_0x199c58,_0x2e570c=this[_0x20cbc7(0x24c)](_0x198c2c);_0x2e570c?Window_ItemList[_0x20cbc7(0x2a8)]['drawItem']['call'](this,_0x198c2c):this[_0x20cbc7(0x375)](_0x198c2c);},Window_EquipItem['prototype'][_0x199c58(0x375)]=function(_0x2cb516){const _0x10f271=_0x199c58;this['changePaintOpacity'](this[_0x10f271(0x4be)](null));const _0x53f24d=VisuMZ[_0x10f271(0x22a)][_0x10f271(0x2d7)][_0x10f271(0x581)],_0x6d8b59=this[_0x10f271(0x3a8)](_0x2cb516),_0x1fed94=_0x6d8b59['y']+(this[_0x10f271(0x264)]()-ImageManager[_0x10f271(0x224)])/0x2,_0x36a4f6=ImageManager[_0x10f271(0x366)]+0x4,_0x596b04=Math[_0x10f271(0x573)](0x0,_0x6d8b59[_0x10f271(0x533)]-_0x36a4f6);this['resetTextColor'](),this[_0x10f271(0x1fe)](_0x53f24d['RemoveEquipIcon'],_0x6d8b59['x'],_0x1fed94),this[_0x10f271(0x577)](_0x53f24d[_0x10f271(0x5d0)],_0x6d8b59['x']+_0x36a4f6,_0x6d8b59['y'],_0x596b04),this['changePaintOpacity'](!![]);},Window_EquipItem[_0x199c58(0x2a8)][_0x199c58(0x1eb)]=function(){const _0x1f634a=_0x199c58;Window_ItemList[_0x1f634a(0x2a8)][_0x1f634a(0x1eb)][_0x1f634a(0x2f6)](this);if(this[_0x1f634a(0x2e7)]&&this[_0x1f634a(0x4a9)]&&this[_0x1f634a(0x1da)]>=0x0){const _0x17302b=JsonEx[_0x1f634a(0x56a)](this[_0x1f634a(0x2e7)]);_0x17302b[_0x1f634a(0x49b)]=!![],_0x17302b[_0x1f634a(0x27f)](this[_0x1f634a(0x1da)],this[_0x1f634a(0x5e0)]()),this['_statusWindow'][_0x1f634a(0x33d)](_0x17302b);}},VisuMZ['ItemsEquipsCore']['Window_ShopCommand_initialize']=Window_ShopCommand[_0x199c58(0x2a8)][_0x199c58(0x320)],Window_ShopCommand[_0x199c58(0x2a8)]['initialize']=function(_0x33303e){const _0x1f4455=_0x199c58;VisuMZ[_0x1f4455(0x22a)]['Window_ShopCommand_initialize']['call'](this,_0x33303e),this[_0x1f4455(0x451)](_0x33303e);},Window_ShopCommand[_0x199c58(0x2a8)][_0x199c58(0x451)]=function(_0x36d686){const _0x1417f0=_0x199c58,_0x354561=new Rectangle(0x0,0x0,_0x36d686[_0x1417f0(0x533)],_0x36d686[_0x1417f0(0x33f)]);this[_0x1417f0(0x1c2)]=new Window_Base(_0x354561),this[_0x1417f0(0x1c2)][_0x1417f0(0x540)]=0x0,this['addChild'](this[_0x1417f0(0x1c2)]),this[_0x1417f0(0x5ee)]();},Window_ShopCommand[_0x199c58(0x2a8)][_0x199c58(0x2b7)]=function(){const _0x3f7fa8=_0x199c58;Window_HorzCommand[_0x3f7fa8(0x2a8)][_0x3f7fa8(0x2b7)]['call'](this);if(this[_0x3f7fa8(0x1c2)])this['updateCommandNameWindow']();},Window_ShopCommand[_0x199c58(0x2a8)][_0x199c58(0x5ee)]=function(){const _0x441540=_0x199c58,_0x3060a8=this['_commandNameWindow'];_0x3060a8[_0x441540(0x3ea)][_0x441540(0x520)]();const _0x35d7dc=this['commandStyleCheck'](this['index']());if(_0x35d7dc===_0x441540(0x372)){const _0x5cb5c3=this[_0x441540(0x3a8)](this[_0x441540(0x292)]());let _0x98796a=this[_0x441540(0x53b)](this[_0x441540(0x292)]());_0x98796a=_0x98796a[_0x441540(0x309)](/\\I\[(\d+)\]/gi,''),_0x3060a8[_0x441540(0x4ea)](),this['commandNameWindowDrawBackground'](_0x98796a,_0x5cb5c3),this[_0x441540(0x26a)](_0x98796a,_0x5cb5c3),this[_0x441540(0x53f)](_0x98796a,_0x5cb5c3);}},Window_ShopCommand[_0x199c58(0x2a8)][_0x199c58(0x56c)]=function(_0x1fa929,_0x544446){},Window_ShopCommand['prototype'][_0x199c58(0x26a)]=function(_0x34a4ed,_0x479684){const _0x8bdfe2=_0x199c58,_0x28eeba=this[_0x8bdfe2(0x1c2)];_0x28eeba[_0x8bdfe2(0x577)](_0x34a4ed,0x0,_0x479684['y'],_0x28eeba[_0x8bdfe2(0x524)],_0x8bdfe2(0x2a2));},Window_ShopCommand['prototype'][_0x199c58(0x53f)]=function(_0x20ee99,_0x153d7f){const _0x1a7d56=_0x199c58,_0x2207e7=this[_0x1a7d56(0x1c2)],_0x36cf6e=$gameSystem[_0x1a7d56(0x415)](),_0x43df03=_0x153d7f['x']+Math[_0x1a7d56(0x473)](_0x153d7f[_0x1a7d56(0x533)]/0x2)+_0x36cf6e;_0x2207e7['x']=_0x2207e7[_0x1a7d56(0x533)]/-0x2+_0x43df03,_0x2207e7['y']=Math[_0x1a7d56(0x473)](_0x153d7f[_0x1a7d56(0x33f)]/0x2);},Window_ShopCommand['prototype']['maxCols']=function(){return this['_list']?this['_list']['length']:0x3;},Window_ShopCommand[_0x199c58(0x2a8)][_0x199c58(0x4d9)]=function(){const _0x5afa40=_0x199c58;return VisuMZ['ItemsEquipsCore'][_0x5afa40(0x2d7)][_0x5afa40(0x429)][_0x5afa40(0x407)];},Window_ShopCommand[_0x199c58(0x2a8)]['makeCommandList']=function(){const _0x41cee3=_0x199c58;this['addBuyCommand'](),this[_0x41cee3(0x494)](),this['addCancelCommand']();},Window_ShopCommand[_0x199c58(0x2a8)]['refresh']=function(){const _0x956797=_0x199c58;Window_HorzCommand[_0x956797(0x2a8)][_0x956797(0x1d4)][_0x956797(0x2f6)](this),this[_0x956797(0x4f4)]();},Window_ShopCommand[_0x199c58(0x2a8)][_0x199c58(0x1c5)]=function(){const _0x158b9d=_0x199c58,_0x3a346e=this[_0x158b9d(0x4f3)](),_0x5cee6e=VisuMZ['ItemsEquipsCore'][_0x158b9d(0x2d7)][_0x158b9d(0x429)]['CmdIconBuy'],_0x42db06=_0x3a346e===_0x158b9d(0x378)?TextManager[_0x158b9d(0x302)]:_0x158b9d(0x457)[_0x158b9d(0x257)](_0x5cee6e,TextManager[_0x158b9d(0x302)]),_0x5017b3=this['isBuyCommandEnabled']();if(this[_0x158b9d(0x4d9)]()&&!_0x5017b3)return;this[_0x158b9d(0x2de)](_0x42db06,'buy',_0x5017b3);},Window_ShopCommand[_0x199c58(0x2a8)][_0x199c58(0x240)]=function(){const _0x541a5d=_0x199c58;return SceneManager[_0x541a5d(0x458)][_0x541a5d(0x24d)]===Scene_Shop?SceneManager['_scene'][_0x541a5d(0x4ec)]>0x0:!![];},Window_ShopCommand['prototype']['addSellCommand']=function(){const _0x28276e=_0x199c58,_0x91d389=this[_0x28276e(0x4f3)](),_0x3283d7=VisuMZ[_0x28276e(0x22a)]['Settings']['ShopScene'][_0x28276e(0x4af)],_0x11163a=_0x91d389===_0x28276e(0x378)?TextManager['sell']:'\x5cI[%1]%2'[_0x28276e(0x257)](_0x3283d7,TextManager[_0x28276e(0x26e)]),_0x2fe30b=this[_0x28276e(0x45c)]();if(this[_0x28276e(0x4d9)]()&&!_0x2fe30b)return;this[_0x28276e(0x2de)](_0x11163a,_0x28276e(0x26e),_0x2fe30b);},Window_ShopCommand[_0x199c58(0x2a8)][_0x199c58(0x45c)]=function(){const _0x22d8d7=_0x199c58;return!this[_0x22d8d7(0x5fa)];},Window_ShopCommand[_0x199c58(0x2a8)][_0x199c58(0x5f6)]=function(){const _0x1a01e8=_0x199c58,_0x494f66=this[_0x1a01e8(0x4f3)](),_0x59f78a=VisuMZ[_0x1a01e8(0x22a)][_0x1a01e8(0x2d7)][_0x1a01e8(0x429)][_0x1a01e8(0x214)],_0x207b43=VisuMZ[_0x1a01e8(0x22a)][_0x1a01e8(0x2d7)][_0x1a01e8(0x429)][_0x1a01e8(0x42e)],_0x306431=_0x494f66===_0x1a01e8(0x378)?_0x207b43:'\x5cI[%1]%2'[_0x1a01e8(0x257)](_0x59f78a,_0x207b43);this[_0x1a01e8(0x2de)](_0x306431,_0x1a01e8(0x4a6));},Window_ShopCommand[_0x199c58(0x2a8)][_0x199c58(0x534)]=function(){const _0x5227b0=_0x199c58;return VisuMZ[_0x5227b0(0x22a)]['Settings'][_0x5227b0(0x429)][_0x5227b0(0x33c)];},Window_ShopCommand[_0x199c58(0x2a8)][_0x199c58(0x5be)]=function(_0x23ea92){const _0xea6576=_0x199c58,_0x4668dc=this[_0xea6576(0x2a7)](_0x23ea92);if(_0x4668dc===_0xea6576(0x4ac))this[_0xea6576(0x280)](_0x23ea92);else{if(_0x4668dc===_0xea6576(0x372)){if('TSSsw'===_0xea6576(0x41a)){function _0x21f7c0(){const _0x2aa765=_0xea6576;_0x28c2ba['prototype'][_0x2aa765(0x44a)][_0x2aa765(0x2f6)](this);}}else this[_0xea6576(0x46a)](_0x23ea92);}else Window_HorzCommand['prototype'][_0xea6576(0x5be)][_0xea6576(0x2f6)](this,_0x23ea92);}},Window_ShopCommand[_0x199c58(0x2a8)][_0x199c58(0x4f3)]=function(){const _0x2c5a4a=_0x199c58;return VisuMZ[_0x2c5a4a(0x22a)][_0x2c5a4a(0x2d7)]['ShopScene'][_0x2c5a4a(0x26d)];},Window_ShopCommand[_0x199c58(0x2a8)][_0x199c58(0x2a7)]=function(_0x669220){const _0x1d0464=_0x199c58;if(_0x669220<0x0)return'text';const _0x1fd240=this[_0x1d0464(0x4f3)]();if(_0x1fd240!==_0x1d0464(0x4ce)){if(_0x1d0464(0x3fc)===_0x1d0464(0x3fc))return _0x1fd240;else{function _0x258463(){const _0x50b0c7=_0x1d0464;return this[_0x50b0c7(0x25e)](_0x532035);}}}else{if(this[_0x1d0464(0x2ec)]()>0x0){const _0x3679c7=this['commandName'](_0x669220);if(_0x3679c7[_0x1d0464(0x568)](/\\I\[(\d+)\]/i)){if(_0x1d0464(0x446)===_0x1d0464(0x22b)){function _0x301fff(){const _0x3a1f21=_0x1d0464;this['changeTextColor'](_0x1ef87f[_0x3a1f21(0x201)]());}}else{const _0x3856c9=this[_0x1d0464(0x3a8)](_0x669220),_0x107240=this[_0x1d0464(0x54e)](_0x3679c7)['width'];if(_0x107240<=_0x3856c9[_0x1d0464(0x533)])return _0x1d0464(0x4ac);else{if(_0x1d0464(0x357)!==_0x1d0464(0x27c))return _0x1d0464(0x372);else{function _0x5904ec(){const _0x42eece=_0x1d0464;!this[_0x42eece(0x3e0)]()&&_0x209f2b[_0x42eece(0x2a8)][_0x42eece(0x3dd)][_0x42eece(0x2f6)](this);}}}}}}}return _0x1d0464(0x378);},Window_ShopCommand[_0x199c58(0x2a8)][_0x199c58(0x280)]=function(_0xe4c366){const _0x51441c=_0x199c58,_0x732508=this[_0x51441c(0x3a8)](_0xe4c366),_0x4fe67d=this[_0x51441c(0x53b)](_0xe4c366),_0x169f4e=this[_0x51441c(0x54e)](_0x4fe67d)['width'];this['changePaintOpacity'](this[_0x51441c(0x4c3)](_0xe4c366));const _0x4f0c28=this[_0x51441c(0x534)]();if(_0x4f0c28==='right')this['drawTextEx'](_0x4fe67d,_0x732508['x']+_0x732508['width']-_0x169f4e,_0x732508['y'],_0x169f4e);else{if(_0x4f0c28===_0x51441c(0x2a2)){if(_0x51441c(0x59d)!=='nFVTL'){function _0xc6db56(){if(_0xd57be8['id']===_0x50f019['id'])_0x286a0e+=0x1;}}else{const _0x75b677=_0x732508['x']+Math['floor']((_0x732508[_0x51441c(0x533)]-_0x169f4e)/0x2);this[_0x51441c(0x4ef)](_0x4fe67d,_0x75b677,_0x732508['y'],_0x169f4e);}}else{if(_0x51441c(0x35a)!=='RonMS')this[_0x51441c(0x4ef)](_0x4fe67d,_0x732508['x'],_0x732508['y'],_0x169f4e);else{function _0x49b115(){const _0x1c5579=_0x51441c;this[_0x1c5579(0x3f8)]();}}}}},Window_ShopCommand[_0x199c58(0x2a8)]['drawItemStyleIcon']=function(_0x260922){const _0x4b47c0=_0x199c58;this[_0x4b47c0(0x53b)](_0x260922)[_0x4b47c0(0x568)](/\\I\[(\d+)\]/i);const _0x21a36b=Number(RegExp['$1'])||0x0,_0x39ac3f=this['itemLineRect'](_0x260922),_0x2db4b2=_0x39ac3f['x']+Math[_0x4b47c0(0x473)]((_0x39ac3f['width']-ImageManager['iconWidth'])/0x2),_0x559974=_0x39ac3f['y']+(_0x39ac3f[_0x4b47c0(0x33f)]-ImageManager[_0x4b47c0(0x224)])/0x2;this[_0x4b47c0(0x1fe)](_0x21a36b,_0x2db4b2,_0x559974);},VisuMZ['ItemsEquipsCore']['Window_ShopBuy_refresh']=Window_ShopBuy[_0x199c58(0x2a8)]['refresh'],Window_ShopBuy[_0x199c58(0x2a8)][_0x199c58(0x1d4)]=function(){const _0x99e0c7=_0x199c58;this[_0x99e0c7(0x252)](),VisuMZ[_0x99e0c7(0x22a)][_0x99e0c7(0x51b)][_0x99e0c7(0x2f6)](this);},Window_ShopBuy['prototype']['updateMoneyAmount']=function(){const _0x2d6ec9=_0x199c58;SceneManager['_scene'][_0x2d6ec9(0x24d)]===Scene_Shop&&(this[_0x2d6ec9(0x2dc)]=SceneManager[_0x2d6ec9(0x458)]['money']());},VisuMZ[_0x199c58(0x22a)][_0x199c58(0x39d)]=Window_ShopBuy[_0x199c58(0x2a8)][_0x199c58(0x5ea)],Window_ShopBuy[_0x199c58(0x2a8)]['price']=function(_0x240fb1){const _0x412309=_0x199c58;if(!_0x240fb1)return 0x0;const _0x1f4cf9=VisuMZ[_0x412309(0x22a)][_0x412309(0x39d)][_0x412309(0x2f6)](this,_0x240fb1);return this[_0x412309(0x3a9)](_0x240fb1,_0x1f4cf9);},Window_ShopBuy[_0x199c58(0x2a8)][_0x199c58(0x3a9)]=function(_0x40778b,_0x54e6ae){const _0x1acb35=_0x199c58,_0x53b3bb=_0x40778b[_0x1acb35(0x2da)];if(_0x53b3bb[_0x1acb35(0x568)](/<JS BUY PRICE>\s*([\s\S]*)\s*<\/JS BUY PRICE>/i)){const _0x246403=String(RegExp['$1']);try{eval(_0x246403);}catch(_0x2f1f90){if($gameTemp['isPlaytest']())console[_0x1acb35(0x5e6)](_0x2f1f90);}}_0x54e6ae=VisuMZ[_0x1acb35(0x22a)][_0x1acb35(0x2d7)][_0x1acb35(0x429)][_0x1acb35(0x4b2)]['call'](this,_0x40778b,_0x54e6ae);if(isNaN(_0x54e6ae))_0x54e6ae=0x0;return Math[_0x1acb35(0x473)](_0x54e6ae);},Window_ShopBuy['prototype'][_0x199c58(0x5be)]=function(_0x2475d2){const _0x12fec8=_0x199c58;this[_0x12fec8(0x4ea)]();const _0x331451=this[_0x12fec8(0x24c)](_0x2475d2),_0x37f554=this['itemLineRect'](_0x2475d2),_0x3f5106=_0x37f554[_0x12fec8(0x533)];this[_0x12fec8(0x609)](this[_0x12fec8(0x4be)](_0x331451)),this['drawItemName'](_0x331451,_0x37f554['x'],_0x37f554['y'],_0x3f5106),this[_0x12fec8(0x3ef)](_0x331451,_0x37f554),this[_0x12fec8(0x609)](!![]);},Window_ShopBuy[_0x199c58(0x2a8)][_0x199c58(0x3ef)]=function(_0x469573,_0x5b2d5c){const _0x15f286=_0x199c58,_0x346828=this['price'](_0x469573);this['drawCurrencyValue'](_0x346828,TextManager[_0x15f286(0x4a2)],_0x5b2d5c['x'],_0x5b2d5c['y'],_0x5b2d5c[_0x15f286(0x533)]);},Window_ShopSell[_0x199c58(0x2a8)][_0x199c58(0x52c)]=function(){return SceneManager['_scene']['isUseItemsEquipsCoreUpdatedLayout']()?0x1:0x2;},VisuMZ[_0x199c58(0x22a)]['Window_ShopSell_isEnabled']=Window_ShopSell[_0x199c58(0x2a8)][_0x199c58(0x4be)],Window_ShopSell[_0x199c58(0x2a8)]['isEnabled']=function(_0x55c047){const _0x456e95=_0x199c58;if(!_0x55c047)return![];const _0x5f053e=_0x55c047['note'];if(_0x5f053e[_0x456e95(0x568)](/<CANNOT SELL>/i))return![];if(_0x5f053e[_0x456e95(0x568)](/<CAN SELL>/i))return!![];if(_0x5f053e[_0x456e95(0x568)](/<CANNOT SELL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x4ea149=JSON[_0x456e95(0x2fa)]('['+RegExp['$1'][_0x456e95(0x568)](/\d+/g)+']');for(const _0x18a43f of _0x4ea149){if(!$gameSwitches['value'](_0x18a43f))return![];}}if(_0x5f053e[_0x456e95(0x568)](/<CANNOT SELL ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x143516=JSON[_0x456e95(0x2fa)]('['+RegExp['$1'][_0x456e95(0x568)](/\d+/g)+']');for(const _0x2ed1b2 of _0x143516){if(_0x456e95(0x247)!==_0x456e95(0x5a1)){if(!$gameSwitches[_0x456e95(0x4a3)](_0x2ed1b2))return![];}else{function _0x396886(){const _0x160652=_0x456e95,_0x4d0591=this[_0x160652(0x44a)]()?this[_0x160652(0x437)]():0x0,_0x3e96fb=this[_0x160652(0x395)](),_0x1c7afd=_0x3d7fd1[_0x160652(0x3c4)]-this['mainCommandWidth'](),_0x25829b=this[_0x160652(0x2d4)](0x1,!![]);return new _0x173183(_0x4d0591,_0x3e96fb,_0x1c7afd,_0x25829b);}}}}if(_0x5f053e[_0x456e95(0x568)](/<CANNOT SELL ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x5a8bc9=JSON['parse']('['+RegExp['$1'][_0x456e95(0x568)](/\d+/g)+']');for(const _0x43a330 of _0x5a8bc9){if($gameSwitches[_0x456e95(0x4a3)](_0x43a330))return![];}}return VisuMZ['ItemsEquipsCore']['Window_ShopSell_isEnabled'][_0x456e95(0x2f6)](this,_0x55c047);},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x20d)]=function(){return![];},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x5cf)]=function(){const _0x358c52=_0x199c58;Window_StatusBase['prototype']['loadFaceImages']['call'](this);for(const _0x3b6257 of $gameParty[_0x358c52(0x223)]()){ImageManager[_0x358c52(0x233)](_0x3b6257[_0x358c52(0x593)]());}},Window_ShopStatus[_0x199c58(0x2a8)]['translucentOpacity']=function(){const _0x2624cc=_0x199c58;return VisuMZ[_0x2624cc(0x22a)][_0x2624cc(0x2d7)]['StatusWindow']['Translucent'];},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x1d4)]=function(){const _0x5d2147=_0x199c58;this['contents'][_0x5d2147(0x520)](),this[_0x5d2147(0x32b)]['clear']();if(this['_item']){this[_0x5d2147(0x4ea)](),this[_0x5d2147(0x609)](!![]),this[_0x5d2147(0x5f8)]();if(this['isEquipItem']())this[_0x5d2147(0x290)]();else{if(_0x5d2147(0x318)===_0x5d2147(0x2a0)){function _0x52237d(){const _0x351fb0=_0x5d2147;return _0x79ca4[_0x351fb0(0x279)]&&_0x5304a7[_0x351fb0(0x2a8)][_0x351fb0(0x3c8)]['call'](this);}}else this[_0x5d2147(0x418)]();}this[_0x5d2147(0x3a4)]();}},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x243)]=function(_0xb1fd72,_0x4b5fc9){const _0x2634e=_0x199c58;if(!this[_0x2634e(0x27e)]()&&!DataManager[_0x2634e(0x44e)](this[_0x2634e(0x2ea)]))return;const _0x5b044=this[_0x2634e(0x524)]-this['itemPadding']()-_0xb1fd72,_0xf77d7a=this[_0x2634e(0x5f3)](_0x2634e(0x2ad));this[_0x2634e(0x4b3)](ColorManager[_0x2634e(0x543)]()),this[_0x2634e(0x577)](TextManager[_0x2634e(0x59b)],_0xb1fd72+this['itemPadding'](),_0x4b5fc9,_0x5b044-_0xf77d7a),this['resetTextColor'](),this['drawItemNumber'](this[_0x2634e(0x2ea)],_0xb1fd72,_0x4b5fc9,_0x5b044);},Window_ShopStatus[_0x199c58(0x2a8)]['drawItemDarkRect']=function(_0x58a890,_0x259ddf,_0x3a28b1,_0x1bde0d,_0x1f7f83){const _0x500ab4=_0x199c58;if(VisuMZ[_0x500ab4(0x22a)][_0x500ab4(0x2d7)]['StatusWindow'][_0x500ab4(0x226)]===![])return;_0x1f7f83=Math[_0x500ab4(0x573)](_0x1f7f83||0x1,0x1);while(_0x1f7f83--){_0x1bde0d=_0x1bde0d||this[_0x500ab4(0x264)](),this[_0x500ab4(0x32b)]['paintOpacity']=0xa0;const _0x396768=ColorManager[_0x500ab4(0x479)]();this[_0x500ab4(0x32b)]['fillRect'](_0x58a890+0x1,_0x259ddf+0x1,_0x3a28b1-0x2,_0x1bde0d-0x2,_0x396768),this[_0x500ab4(0x32b)]['paintOpacity']=0xff;}},ColorManager['getItemsEquipsCoreBackColor1']=function(){const _0x142a9e=_0x199c58,_0x54d43c=VisuMZ[_0x142a9e(0x22a)][_0x142a9e(0x2d7)][_0x142a9e(0x386)];let _0x140afb=_0x54d43c['BackRectColor']!==undefined?_0x54d43c['BackRectColor']:0x13;return ColorManager[_0x142a9e(0x57e)](_0x140afb);},Window_ShopStatus['prototype'][_0x199c58(0x290)]=function(){const _0x2063e3=_0x199c58;if(VisuMZ[_0x2063e3(0x22a)][_0x2063e3(0x2d7)][_0x2063e3(0x386)][_0x2063e3(0x601)]){if(_0x2063e3(0x2ce)!==_0x2063e3(0x441)){VisuMZ[_0x2063e3(0x22a)][_0x2063e3(0x2d7)]['StatusWindow']['DrawEquipData']['call'](this);return;}else{function _0x15ce14(){const _0x30dd97=_0x2063e3,_0x4e0343=this[_0x30dd97(0x521)](),_0x2db1b4=this[_0x30dd97(0x44a)]()?this[_0x30dd97(0x1e8)]():0x0,_0x346c9f=this[_0x30dd97(0x395)](),_0x3137fd=_0xf8a46c[_0x30dd97(0x3c4)]-this[_0x30dd97(0x1e8)](),_0xa7ab4=_0x4e0343?this[_0x30dd97(0x2d4)](0x1,!![]):0x0;return new _0x1d411d(_0x2db1b4,_0x346c9f,_0x3137fd,_0xa7ab4);}}}const _0x11f6d2=this['lineHeight'](),_0x187bf1=this[_0x2063e3(0x466)]()+0x8;let _0x467eaa=0x0,_0x5e41e7=0x0,_0x478c84=this['innerWidth'],_0x27623b=this[_0x2063e3(0x4a5)],_0x38e28d=Math[_0x2063e3(0x473)](_0x478c84/0x2),_0x592227=_0x467eaa+_0x478c84-_0x38e28d;this[_0x2063e3(0x1fb)](this['_item'],_0x467eaa+this[_0x2063e3(0x354)](),_0x5e41e7,_0x478c84-this[_0x2063e3(0x354)]()*0x2),this[_0x2063e3(0x35b)](_0x467eaa,_0x5e41e7,_0x478c84),_0x5e41e7+=_0x11f6d2;if(this[_0x2063e3(0x391)](_0x467eaa,_0x5e41e7,_0x38e28d))_0x5e41e7+=0x0;if(this['drawItemQuantity'](_0x592227,_0x5e41e7,_0x38e28d))_0x5e41e7+=_0x11f6d2;const _0x89fe4e=this[_0x2063e3(0x30a)](),_0x64a637=_0x5e41e7;_0x5e41e7=_0x27623b-_0x89fe4e[_0x2063e3(0x3d3)]*_0x187bf1-0x4;let _0x178c90=_0x467eaa,_0x16adef=0x0,_0x5f1345=_0x5e41e7;for(const _0x1b1f30 of _0x89fe4e){_0x16adef=Math[_0x2063e3(0x573)](this[_0x2063e3(0x52d)](_0x1b1f30,_0x467eaa+0x4,_0x5e41e7+0x4,_0x478c84),_0x16adef),_0x5e41e7+=_0x187bf1;}const _0x50e686=$gameParty[_0x2063e3(0x487)](),_0x3e4f07=Math[_0x2063e3(0x473)]((_0x478c84-_0x16adef)/_0x50e686);_0x16adef=_0x478c84-_0x3e4f07*_0x50e686;for(const _0x4705a1 of $gameParty['battleMembers']()){const _0xfe4c36=$gameParty[_0x2063e3(0x1fd)]()['indexOf'](_0x4705a1),_0xca4f15=_0x178c90+_0x16adef+_0xfe4c36*_0x3e4f07;this[_0x2063e3(0x609)](_0x4705a1[_0x2063e3(0x51d)](this[_0x2063e3(0x2ea)])),this[_0x2063e3(0x43c)](_0x4705a1,_0xca4f15+_0x3e4f07/0x2,_0x5f1345);let _0x485b7f=_0x5f1345;for(const _0x421ecd of _0x89fe4e){if('nuiEq'===_0x2063e3(0x270)){const _0x556e48=_0x485b7f-(_0x11f6d2-_0x187bf1)/0x2;this['drawActorParamDifference'](_0x4705a1,_0x421ecd,_0xca4f15,_0x556e48,_0x3e4f07),_0x485b7f+=_0x187bf1;}else{function _0x1dc511(){const _0x1b0368=_0x2063e3;_0x20893b[_0x1b0368(0x419)](_0x5bd96d[_0x5bd727]);}}}}this['drawItemDarkRect'](_0x178c90,_0x64a637,_0x16adef,_0x5f1345-_0x64a637);for(let _0x512afb=0x0;_0x512afb<_0x50e686;_0x512afb++){const _0x45839e=_0x178c90+_0x16adef+_0x512afb*_0x3e4f07;this[_0x2063e3(0x35b)](_0x45839e,_0x64a637,_0x3e4f07,_0x5f1345-_0x64a637);}for(const _0x571d9d of _0x89fe4e){if('NqNlH'!=='NqNlH'){function _0x44318b(){const _0x255188=_0x2063e3;if(this[_0x255188(0x1f5)]&&this['_numberWindow'][_0x255188(0x2d9)])return _0x4c88e8['getInputMultiButtonStrings']('up','down');return _0x9cd43[_0x255188(0x2a8)][_0x255188(0x1ed)][_0x255188(0x2f6)](this);}}else{this['drawItemDarkRect'](_0x178c90,_0x5f1345,_0x16adef,_0x187bf1);for(let _0x3a903f=0x0;_0x3a903f<_0x50e686;_0x3a903f++){if(_0x2063e3(0x4c1)===_0x2063e3(0x398)){function _0x2cb1b3(){const _0x20b556=_0x2063e3;_0x48f796=this[_0x20b556(0x2e7)][_0x20b556(0x2d8)](_0x4ec8c1),_0x1836ac=this[_0x20b556(0x49b)][_0x20b556(0x2d8)](_0x2d4133),_0xc628bb=this[_0x20b556(0x49b)]['param'](_0x576871);}}else{const _0x45c4a5=_0x178c90+_0x16adef+_0x3a903f*_0x3e4f07;this[_0x2063e3(0x35b)](_0x45c4a5,_0x5f1345,_0x3e4f07,_0x187bf1);}}_0x5f1345+=_0x187bf1;}}},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x391)]=function(_0x295a0e,_0x4db7af,_0x45eb96){const _0x45900f=_0x199c58;if(!this['isEquipItem']())return![];const _0x1500bd=$dataSystem['equipTypes'][this[_0x45900f(0x2ea)][_0x45900f(0x295)]];return this[_0x45900f(0x1f0)](_0x1500bd,_0x295a0e,_0x4db7af,_0x45eb96,!![]),this[_0x45900f(0x35b)](_0x295a0e,_0x4db7af,_0x45eb96),this[_0x45900f(0x4ea)](),!![];},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x1d7)]=function(){const _0x5d8f0a=_0x199c58,_0x21af04=VisuMZ['ItemsEquipsCore'][_0x5d8f0a(0x2d7)][_0x5d8f0a(0x4c5)]['ItemQuantityFmt'];return _0x21af04[_0x5d8f0a(0x257)]($gameParty[_0x5d8f0a(0x525)](this[_0x5d8f0a(0x2ea)]));},Window_ShopStatus[_0x199c58(0x2a8)]['actorParams']=function(){const _0x316aeb=_0x199c58;if(Imported['VisuMZ_0_CoreEngine']){if(_0x316aeb(0x2e4)!==_0x316aeb(0x1f4))return VisuMZ[_0x316aeb(0x52f)][_0x316aeb(0x2d7)]['Param']['ExtDisplayedParams'];else{function _0x3895e0(){const _0x42ec0f=_0x316aeb;return _0x8bab1d[_0x42ec0f(0x22a)]['Window_EquipItem_includes'][_0x42ec0f(0x2f6)](this,_0x597159);}}}else{if(_0x316aeb(0x41f)!==_0x316aeb(0x5b7))return[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7];else{function _0x3dbb6a(){const _0x29bedb=_0x316aeb;_0x107016[_0x29bedb(0x5eb)](_0x29bedb(0x2b5))&&this[_0x29bedb(0x3d8)](_0x53d7e8[_0x29bedb(0x221)](_0x29bedb(0x2b5))),_0x579a8a['isRepeated']('left')&&this[_0x29bedb(0x3af)](_0x18f67f['isTriggered'](_0x29bedb(0x389)));}}}},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x506)]=function(){const _0x27d099=_0x199c58;return VisuMZ[_0x27d099(0x22a)][_0x27d099(0x2d7)]['StatusWindow'][_0x27d099(0x237)];},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x52d)]=function(_0x633076,_0x1d460e,_0xfad73e,_0x38878f){const _0x4f7113=_0x199c58;this[_0x4f7113(0x4ea)](),this[_0x4f7113(0x3ea)][_0x4f7113(0x535)]=this['smallParamFontSize']();let _0x459d53=this['textWidth'](TextManager[_0x4f7113(0x2d8)](_0x633076))+0x4+_0x1d460e;if(Imported[_0x4f7113(0x279)]){if(_0x4f7113(0x453)!=='QlCOE')this[_0x4f7113(0x3b0)](_0x1d460e,_0xfad73e,_0x38878f,_0x633076,!![]),VisuMZ['CoreEngine']['Settings']['Param'][_0x4f7113(0x2c9)]&&(_0x459d53+=ImageManager[_0x4f7113(0x366)]+0x4);else{function _0x181c03(){const _0x129b13=_0x4f7113;this[_0x129b13(0x1d6)](_0x45cdcb[_0x129b13(0x221)](_0x129b13(0x5d4)));}}}else this[_0x4f7113(0x4b3)](ColorManager[_0x4f7113(0x543)]()),this[_0x4f7113(0x577)](TextManager[_0x4f7113(0x2d8)](_0x633076),_0x1d460e,_0xfad73e,_0x38878f);return this[_0x4f7113(0x4ea)](),_0x459d53;},Window_ShopStatus['prototype'][_0x199c58(0x5ab)]=function(_0x481de0,_0x564a9e,_0x30fda1,_0x5a407d,_0x55b2db){const _0xccaa02=_0x199c58;_0x30fda1+=this[_0xccaa02(0x354)](),_0x55b2db-=this[_0xccaa02(0x354)]()*0x2;const _0xd1e4c5=VisuMZ[_0xccaa02(0x22a)][_0xccaa02(0x2d7)][_0xccaa02(0x386)];this[_0xccaa02(0x3ea)][_0xccaa02(0x535)]=_0xd1e4c5['ParamChangeFontSize'],this[_0xccaa02(0x609)](_0x481de0[_0xccaa02(0x51d)](this['_item']));if(_0x481de0[_0xccaa02(0x4c2)](this[_0xccaa02(0x2ea)])){if(_0xccaa02(0x21d)!==_0xccaa02(0x21d)){function _0x1553e4(){const _0x99a035=_0xccaa02;_0x55f906[_0x99a035(0x2a8)][_0x99a035(0x44a)][_0x99a035(0x2f6)](this);}}else{const _0x4ca6e1=_0xd1e4c5[_0xccaa02(0x353)];this[_0xccaa02(0x577)](_0x4ca6e1,_0x30fda1,_0x5a407d,_0x55b2db,_0xccaa02(0x2a2));}}else{if(_0x481de0[_0xccaa02(0x51d)](this[_0xccaa02(0x2ea)])){if(_0xccaa02(0x41d)===_0xccaa02(0x1c6)){function _0x302d3e(){const _0x966c43=_0xccaa02;_0x739c5b[_0x966c43(0x22a)][_0x966c43(0x2c6)][_0x966c43(0x2f6)](this),this[_0x966c43(0x50d)]()&&this[_0x966c43(0x3f8)]();}}else{const _0xc7d31=JsonEx['makeDeepCopy'](_0x481de0);_0xc7d31['_tempActor']=!![];const _0x1373c9=_0xc7d31['equipSlots']()[_0xccaa02(0x5df)](this[_0xccaa02(0x2ea)][_0xccaa02(0x295)]);if(_0x1373c9>=0x0)_0xc7d31['forceChangeEquip'](_0x1373c9,this[_0xccaa02(0x2ea)]);let _0x5683c0=0x0,_0x4c9a33=0x0,_0x598f71=0x0;if(Imported['VisuMZ_0_CoreEngine']){if('upEfA'===_0xccaa02(0x2eb)){function _0x3f079e(){const _0xcf076b=_0xccaa02;_0x1cf2c2[_0xcf076b(0x22a)]['Window_ItemList_updateHelp'][_0xcf076b(0x2f6)](this),this[_0xcf076b(0x4a9)]&&this[_0xcf076b(0x4a9)][_0xcf076b(0x24d)]===_0x494980&&this[_0xcf076b(0x4a9)][_0xcf076b(0x1bb)](this['item']());}}else _0x5683c0=_0xc7d31[_0xccaa02(0x342)](_0x564a9e),_0x4c9a33=_0x5683c0-_0x481de0[_0xccaa02(0x342)](_0x564a9e),this[_0xccaa02(0x4b3)](ColorManager[_0xccaa02(0x584)](_0x4c9a33)),_0x598f71=(_0x4c9a33>=0x0?'+':'')+VisuMZ['ConvertNumberToString'](_0x4c9a33,0x0,_0x564a9e);}else _0x5683c0=_0xc7d31['param'](_0x564a9e),_0x4c9a33=_0x5683c0-_0x481de0['param'](_0x564a9e),this[_0xccaa02(0x4b3)](ColorManager[_0xccaa02(0x584)](_0x4c9a33)),_0x598f71=(_0x4c9a33>=0x0?'+':'')+_0x4c9a33;if(_0x598f71==='+0')_0x598f71=_0xd1e4c5[_0xccaa02(0x55e)];this[_0xccaa02(0x577)](_0x598f71,_0x30fda1,_0x5a407d,_0x55b2db,_0xccaa02(0x2a2));}}else{if('AHeyE'==='AHeyE'){const _0x2fab4a=_0xd1e4c5[_0xccaa02(0x32d)];this[_0xccaa02(0x577)](_0x2fab4a,_0x30fda1,_0x5a407d,_0x55b2db,_0xccaa02(0x2a2));}else{function _0x170a41(){const _0x2b0664=_0xccaa02;return this[_0x2b0664(0x50d)]()?this['helpWindowRectItemsEquipsCore']():_0x488d48[_0x2b0664(0x2a8)][_0x2b0664(0x4a1)]['call'](this);}}}}this['resetFontSettings'](),this[_0xccaa02(0x609)](!![]);},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x418)]=function(){const _0x17b014=_0x199c58;VisuMZ['ItemsEquipsCore'][_0x17b014(0x2d7)][_0x17b014(0x386)][_0x17b014(0x328)][_0x17b014(0x2f6)](this);},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x5f8)]=function(){const _0x4363bb=_0x199c58;this['_customItemInfo']={};if(!this[_0x4363bb(0x2ea)])return;const _0xc2a97a=this[_0x4363bb(0x2ea)][_0x4363bb(0x2da)];if(_0xc2a97a[_0x4363bb(0x568)](/<STATUS INFO>\s*([\s\S]*)\s*<\/STATUS INFO>/i)){const _0x17b402=String(RegExp['$1'])['split'](/[\r\n]+/);for(const _0x494ee4 of _0x17b402){if(_0x4363bb(0x59f)!==_0x4363bb(0x207)){if(_0x494ee4[_0x4363bb(0x568)](/(.*):[ ](.*)/i)){if(_0x4363bb(0x436)===_0x4363bb(0x436)){const _0x535485=String(RegExp['$1'])[_0x4363bb(0x5c5)]()[_0x4363bb(0x2ac)](),_0x508e5e=String(RegExp['$2'])[_0x4363bb(0x2ac)]();this[_0x4363bb(0x1cb)][_0x535485]=_0x508e5e;}else{function _0x291e87(){const _0x4f10ee=_0x4363bb;return _0x4f10ee(0x5fc)[_0x4f10ee(0x257)](_0x7ff406(_0xabb525['$1']));}}}}else{function _0x18f45c(){const _0x4f2060=_0x4363bb;return this[_0x4f2060(0x4ca)]()['match'](/RIGHT/i);}}}}},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x502)]=function(){const _0x152f99=_0x199c58;return Math[_0x152f99(0x573)](0x1,$gameSystem[_0x152f99(0x602)]()-0x4);},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x4ea)]=function(){const _0x1df4ec=_0x199c58;Window_StatusBase[_0x1df4ec(0x2a8)][_0x1df4ec(0x4ea)]['call'](this),this[_0x1df4ec(0x3ea)][_0x1df4ec(0x535)]=this['_resetFontSize']||this[_0x1df4ec(0x3ea)]['fontSize'],this['contents'][_0x1df4ec(0x3a6)]=this[_0x1df4ec(0x562)]||this[_0x1df4ec(0x3ea)][_0x1df4ec(0x3a6)];},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x3f6)]=function(){const _0x4b6b8=_0x199c58;return this[_0x4b6b8(0x3ea)][_0x4b6b8(0x535)]/$gameSystem[_0x4b6b8(0x602)]();},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x1fe)]=function(_0x469fa0,_0xe9a900,_0x324674){const _0x2f9e4b=_0x199c58,_0x4c645a=ImageManager[_0x2f9e4b(0x580)](_0x2f9e4b(0x5ff)),_0x2435b6=ImageManager[_0x2f9e4b(0x366)],_0x42d08a=ImageManager[_0x2f9e4b(0x224)],_0x31c7cb=_0x469fa0%0x10*_0x2435b6,_0x52ce2d=Math[_0x2f9e4b(0x473)](_0x469fa0/0x10)*_0x42d08a,_0x10a41f=Math[_0x2f9e4b(0x3f5)](_0x2435b6*this[_0x2f9e4b(0x3f6)]()),_0x5840a2=Math['ceil'](_0x42d08a*this[_0x2f9e4b(0x3f6)]());this[_0x2f9e4b(0x3ea)][_0x2f9e4b(0x5d8)](_0x4c645a,_0x31c7cb,_0x52ce2d,_0x2435b6,_0x42d08a,_0xe9a900,_0x324674,_0x10a41f,_0x5840a2);},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x51c)]=function(_0x4f0fe1,_0x1ec3d8){const _0x397539=_0x199c58;if(_0x1ec3d8['drawing']){if('gnngA'===_0x397539(0x424)){function _0x26bfe2(){const _0x17fe88=_0x397539;if(!this[_0x17fe88(0x27e)]()&&!_0x4b3a0b[_0x17fe88(0x44e)](this[_0x17fe88(0x2ea)]))return![];if(_0x15dca0['isKeyItem'](this[_0x17fe88(0x2ea)])&&!_0x273f40[_0x17fe88(0x1ea)]){const _0x43b6e=_0x2c4d14[_0x17fe88(0x5f9)];this[_0x17fe88(0x1f0)](_0x43b6e,_0x89b4a,_0x186f0e,_0xeb1852,!![],'center');}else{const _0x265413=_0x3132b8[_0x17fe88(0x59b)];this[_0x17fe88(0x1f0)](_0x265413,_0x7323c4,_0x1246b7,_0x624a,!![]);const _0x11121e=this['getItemQuantityText']();this[_0x17fe88(0x1f0)](_0x11121e,_0x462b5d,_0x33c16e,_0x3b093f,![],_0x17fe88(0x2b5));}return this[_0x17fe88(0x35b)](_0x526925,_0xa176e4,_0x5f1a87),this[_0x17fe88(0x4ea)](),!![];}}else this[_0x397539(0x1fe)](_0x4f0fe1,_0x1ec3d8['x'],_0x1ec3d8['y']+0x2);}_0x1ec3d8['x']+=Math[_0x397539(0x3f5)](ImageManager[_0x397539(0x366)]*this['fontSizeRatio']());if(this[_0x397539(0x3f6)]()===0x1)_0x1ec3d8['x']+=0x4;},Window_ShopStatus['prototype']['drawItemKeyData']=function(_0x4a0c35,_0x24f24d,_0x130430,_0x5ad7fa,_0xfe6e2a,_0x31c4b3){const _0x3e6466=_0x199c58;_0x4a0c35=_0x4a0c35||'',_0x31c4b3=_0x31c4b3||'left',this[_0x3e6466(0x30b)]=this[_0x3e6466(0x502)](),this['_resetFontColor']=_0xfe6e2a?ColorManager['systemColor']():this[_0x3e6466(0x3ea)][_0x3e6466(0x3a6)],_0x24f24d+=this['itemPadding'](),_0x5ad7fa-=this['itemPadding']()*0x2;const _0x5efb9d=this[_0x3e6466(0x54e)](_0x4a0c35);if(_0x31c4b3===_0x3e6466(0x2a2))_0x24f24d=_0x24f24d+Math['floor']((_0x5ad7fa-_0x5efb9d[_0x3e6466(0x533)])/0x2);else{if(_0x31c4b3==='right'){if(_0x3e6466(0x1bc)!=='yrGeb')_0x24f24d=_0x24f24d+_0x5ad7fa-_0x5efb9d[_0x3e6466(0x533)];else{function _0x2d600a(){const _0x50f3a8=_0x3e6466;this[_0x50f3a8(0x218)][_0x50f3a8(0x45b)]();}}}}_0x130430+=(this[_0x3e6466(0x264)]()-_0x5efb9d['height'])/0x2,this[_0x3e6466(0x4ef)](_0x4a0c35,_0x24f24d,_0x130430,_0x5ad7fa),this['_resetFontSize']=undefined,this['_resetFontColor']=undefined,this[_0x3e6466(0x4ea)]();},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x34e)]=function(_0x204ea4,_0x30d43f,_0x201ec8){const _0x2cd51d=_0x199c58;if(!DataManager[_0x2cd51d(0x44e)](this[_0x2cd51d(0x2ea)]))return![];const _0x3ce631=this[_0x2cd51d(0x33a)]();this[_0x2cd51d(0x1f0)](_0x3ce631,_0x204ea4,_0x30d43f,_0x201ec8,!![]);const _0x1bb6ed=this[_0x2cd51d(0x393)]();return this['drawItemKeyData'](_0x1bb6ed,_0x204ea4,_0x30d43f,_0x201ec8,![],'right'),this[_0x2cd51d(0x35b)](_0x204ea4,_0x30d43f,_0x201ec8),this[_0x2cd51d(0x4ea)](),!![];},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x33a)]=function(){const _0x3ce624=_0x199c58;return VisuMZ[_0x3ce624(0x22a)][_0x3ce624(0x2d7)][_0x3ce624(0x386)][_0x3ce624(0x273)];},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x393)]=function(){const _0x6fa017=_0x199c58,_0xf1188d=_0x6fa017(0x3be);if(this[_0x6fa017(0x1cb)][_0xf1188d])return this['_customItemInfo'][_0xf1188d];if(this['canConsumeItem']()){if('HdYKt'!==_0x6fa017(0x3dc)){function _0x22c714(){const _0x3cff47=_0x6fa017;return _0x1f255e[_0x3cff47(0x22a)][_0x3cff47(0x455)]['call'](this);}}else return VisuMZ[_0x6fa017(0x22a)]['Settings'][_0x6fa017(0x386)][_0x6fa017(0x5bd)];}else{if(_0x6fa017(0x2b3)==='WXaYr'){function _0x12961c(){const _0x153429=_0x6fa017,_0x4104e6=_0x2600ea(_0x1ab67a['$1'])[_0x153429(0x2ac)](),_0x3a5ded=_0x256d87(_0x246610['$2'])[_0x153429(0x2ac)]();this[_0x153429(0x572)](_0x4104e6,_0x3a5ded,_0x3749d3,_0x201f58,_0x34f2d7),_0x5cb71a+=this[_0x153429(0x264)]();}}else return VisuMZ['ItemsEquipsCore'][_0x6fa017(0x2d7)][_0x6fa017(0x386)][_0x6fa017(0x3b2)];}},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x596)]=function(){const _0x2afe8a=_0x199c58;if(VisuMZ['CoreEngine']&&VisuMZ[_0x2afe8a(0x52f)]['Settings']['QoL'][_0x2afe8a(0x230)]&&DataManager['isKeyItem'](this[_0x2afe8a(0x2ea)])){if('whzZG'!==_0x2afe8a(0x1f8)){function _0x4d235c(){const _0x4b47cd=_0x2afe8a,_0x5ba066=_0x3db4a5[_0x1211a5];if(_0x5ba066&&_0x5ba066[_0x4b47cd(0x4c9)]>0x0){_0x58e543+='\x5cI[%1]'[_0x4b47cd(0x257)](_0x5ba066['iconIndex']),_0x4923d2++;if(_0x258d1e>=_0x3e2df3)return _0x32e2e1;}}}else return![];}else return this['_item']['consumable'];},Window_ShopStatus['prototype']['drawItemQuantity']=function(_0xd894e,_0x5e76f7,_0x25b32e){const _0xfcd778=_0x199c58;if(!this[_0xfcd778(0x27e)]()&&!DataManager[_0xfcd778(0x44e)](this[_0xfcd778(0x2ea)]))return![];if(DataManager['isKeyItem'](this[_0xfcd778(0x2ea)])&&!$dataSystem[_0xfcd778(0x1ea)]){const _0x52a845=TextManager[_0xfcd778(0x5f9)];this[_0xfcd778(0x1f0)](_0x52a845,_0xd894e,_0x5e76f7,_0x25b32e,!![],_0xfcd778(0x2a2));}else{const _0x37bf4b=TextManager[_0xfcd778(0x59b)];this[_0xfcd778(0x1f0)](_0x37bf4b,_0xd894e,_0x5e76f7,_0x25b32e,!![]);const _0x25f9a9=this[_0xfcd778(0x1d7)]();this[_0xfcd778(0x1f0)](_0x25f9a9,_0xd894e,_0x5e76f7,_0x25b32e,![],_0xfcd778(0x2b5));}return this['drawItemDarkRect'](_0xd894e,_0x5e76f7,_0x25b32e),this['resetFontSettings'](),!![];},Window_ShopStatus['prototype']['getItemQuantityText']=function(){const _0x44eaed=_0x199c58,_0x554bef=_0x44eaed(0x570);if(this[_0x44eaed(0x1cb)][_0x554bef])return this[_0x44eaed(0x1cb)][_0x554bef];const _0x27aaa8=VisuMZ[_0x44eaed(0x22a)][_0x44eaed(0x2d7)][_0x44eaed(0x4c5)]['ItemQuantityFmt'];return _0x27aaa8[_0x44eaed(0x257)]($gameParty['numItems'](this[_0x44eaed(0x2ea)]));},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x5ac)]=function(_0x542a1a,_0x547bec,_0x1a926d){const _0x263db4=_0x199c58,_0x3e8412=this[_0x263db4(0x285)]();return this['drawItemKeyData'](_0x3e8412,_0x542a1a,_0x547bec,_0x1a926d,![],_0x263db4(0x2a2)),this[_0x263db4(0x35b)](_0x542a1a,_0x547bec,_0x1a926d),this[_0x263db4(0x4ea)](),!![];},Window_ShopStatus['prototype']['getItemOccasionText']=function(){const _0x22745d=_0x199c58,_0xb2b972=_0x22745d(0x4a4);if(this[_0x22745d(0x1cb)][_0xb2b972])return this[_0x22745d(0x1cb)][_0xb2b972];const _0x39f380=VisuMZ[_0x22745d(0x22a)]['Settings'][_0x22745d(0x386)],_0x2a078a='Occasion%1'['format'](this[_0x22745d(0x2ea)][_0x22745d(0x377)]);return _0x39f380[_0x2a078a];},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x558)]=function(_0x5726b4,_0x54e64d,_0x5f2f72){const _0x5e7bf7=_0x199c58,_0x27d5f5=this[_0x5e7bf7(0x497)]();return this[_0x5e7bf7(0x1f0)](_0x27d5f5,_0x5726b4,_0x54e64d,_0x5f2f72,![],'center'),this[_0x5e7bf7(0x35b)](_0x5726b4,_0x54e64d,_0x5f2f72),this[_0x5e7bf7(0x4ea)](),!![];},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x497)]=function(){const _0x42c05c=_0x199c58,_0x383107=_0x42c05c(0x317);if(this[_0x42c05c(0x1cb)][_0x383107])return this[_0x42c05c(0x1cb)][_0x383107];const _0x2dd87e=VisuMZ[_0x42c05c(0x22a)][_0x42c05c(0x2d7)][_0x42c05c(0x386)];if(Imported[_0x42c05c(0x1f9)]){const _0x26999c=this['_item']['note'];if(_0x26999c[_0x42c05c(0x568)](/<TARGET:[ ](.*)>/i)){const _0x767333=String(RegExp['$1']);if(_0x767333[_0x42c05c(0x568)](/(\d+) RANDOM ANY/i)){if('lHpUB'==='WFZSE'){function _0x5f44bb(){const _0xa958e3=_0x42c05c;this[_0xa958e3(0x1c5)](),this[_0xa958e3(0x494)](),this[_0xa958e3(0x5f6)]();}}else return _0x2dd87e[_0x42c05c(0x4c6)][_0x42c05c(0x257)](Number(RegExp['$1']));}else{if(_0x767333[_0x42c05c(0x568)](/(\d+) RANDOM (?:ENEMY|ENEMIES|FOE|FOES)/i))return _0x2dd87e[_0x42c05c(0x288)]['format'](Number(RegExp['$1']));else{if(_0x767333[_0x42c05c(0x568)](/(\d+) RANDOM (?:ALLY|ALLIES|FRIEND|FRIENDS)/i))return _0x2dd87e[_0x42c05c(0x284)][_0x42c05c(0x257)](Number(RegExp['$1']));else{if(_0x767333[_0x42c05c(0x568)](/ALL (?:ALLY|ALLIES|FRIEND|FRIENDS) (?:BUT|EXCEPT) (?:USER|SELF)/i))return _0x2dd87e[_0x42c05c(0x406)];}}}}}const _0x543126=_0x42c05c(0x2d0)['format'](this['_item'][_0x42c05c(0x57a)]);return _0x2dd87e[_0x543126];},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x4a0)]=function(_0x20e9bc,_0x71b224,_0x5651f7){const _0x343022=_0x199c58,_0x346fdf=this[_0x343022(0x1d8)]();this[_0x343022(0x1f0)](_0x346fdf,_0x20e9bc,_0x71b224,_0x5651f7,!![]);const _0x239994=this['getItemSpeedText']();return this['drawItemKeyData'](_0x239994,_0x20e9bc,_0x71b224,_0x5651f7,![],'right'),this[_0x343022(0x35b)](_0x20e9bc,_0x71b224,_0x5651f7),this[_0x343022(0x4ea)](),!![];},Window_ShopStatus[_0x199c58(0x2a8)]['getItemSpeedLabel']=function(){const _0x3f3184=_0x199c58;return VisuMZ[_0x3f3184(0x22a)][_0x3f3184(0x2d7)]['StatusWindow'][_0x3f3184(0x22d)];},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x49e)]=function(){const _0xfb246f=_0x199c58,_0x1a56b1=_0xfb246f(0x5db);if(this['_customItemInfo'][_0x1a56b1])return this[_0xfb246f(0x1cb)][_0x1a56b1];const _0x15abf5=this['_item'][_0xfb246f(0x42f)];if(_0x15abf5>=0x7d0){if(_0xfb246f(0x1e3)!==_0xfb246f(0x5c3))return VisuMZ[_0xfb246f(0x22a)][_0xfb246f(0x2d7)][_0xfb246f(0x386)]['Speed2000'];else{function _0x1bbb28(){const _0x472364=_0xfb246f;this[_0x472364(0x4e6)](),_0x5cf4ce['ItemsEquipsCore']['Scene_Boot_onDatabaseLoaded'][_0x472364(0x2f6)](this),this['process_VisuMZ_ItemsEquipsCore_Notetags']();}}}else{if(_0x15abf5>=0x3e8)return VisuMZ[_0xfb246f(0x22a)][_0xfb246f(0x2d7)][_0xfb246f(0x386)][_0xfb246f(0x3d9)];else{if(_0x15abf5>0x0)return VisuMZ['ItemsEquipsCore'][_0xfb246f(0x2d7)][_0xfb246f(0x386)][_0xfb246f(0x47d)];else{if(_0x15abf5===0x0)return VisuMZ[_0xfb246f(0x22a)][_0xfb246f(0x2d7)]['StatusWindow'][_0xfb246f(0x4c0)];else{if(_0x15abf5>-0x3e8){if(_0xfb246f(0x600)!==_0xfb246f(0x600)){function _0x59c521(){const _0x857904=_0xfb246f;_0x432d3f=this[_0x857904(0x2e7)][_0x857904(0x2d8)](_0x5d24ee);}}else return VisuMZ[_0xfb246f(0x22a)]['Settings'][_0xfb246f(0x386)][_0xfb246f(0x2af)];}else{if(_0x15abf5>-0x7d0){if(_0xfb246f(0x33e)!=='VlFwF')return VisuMZ[_0xfb246f(0x22a)]['Settings'][_0xfb246f(0x386)][_0xfb246f(0x1e0)];else{function _0x4fe97a(){const _0x28352e=_0xfb246f;this[_0x28352e(0x5d6)]();}}}else{if(_0x15abf5<=-0x7d0){if(_0xfb246f(0x3c1)!=='zUzId'){function _0x504077(){const _0x56a692=_0xfb246f,_0x9fa2ad=_0x56a692(0x1e5);if(this['_customItemInfo'][_0x9fa2ad])return this[_0x56a692(0x1cb)][_0x9fa2ad];let _0x290fa4='';if(this['_itemData'][_0x56a692(0x385)]<0x0)_0x290fa4+=_0x56a692(0x493)[_0x56a692(0x257)](_0x2fb113[_0x56a692(0x473)](this[_0x56a692(0x49c)][_0x56a692(0x385)]*0x64));if(this[_0x56a692(0x49c)][_0x56a692(0x385)]<0x0&&this[_0x56a692(0x49c)][_0x56a692(0x4f2)]<0x0)_0x290fa4+='\x20';if(this[_0x56a692(0x49c)]['flatHP']<0x0)_0x290fa4+='%1'[_0x56a692(0x257)](this[_0x56a692(0x49c)][_0x56a692(0x4f2)]);return _0x290fa4;}}else return VisuMZ['ItemsEquipsCore'][_0xfb246f(0x2d7)][_0xfb246f(0x386)][_0xfb246f(0x3eb)];}else return'?????';}}}}}}},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x358)]=function(_0x13f0f9,_0x1cb56d,_0x310cd2){const _0x14b017=_0x199c58,_0x16ed5d=this['getItemSuccessRateLabel']();this[_0x14b017(0x1f0)](_0x16ed5d,_0x13f0f9,_0x1cb56d,_0x310cd2,!![]);const _0x14543f=this[_0x14b017(0x448)]();return this[_0x14b017(0x1f0)](_0x14543f,_0x13f0f9,_0x1cb56d,_0x310cd2,![],_0x14b017(0x2b5)),this[_0x14b017(0x35b)](_0x13f0f9,_0x1cb56d,_0x310cd2),this[_0x14b017(0x4ea)](),!![];},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x45a)]=function(){const _0x1e3826=_0x199c58;return VisuMZ[_0x1e3826(0x22a)][_0x1e3826(0x2d7)][_0x1e3826(0x386)]['LabelSuccessRate'];},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x448)]=function(){const _0x2e59b7=_0x199c58,_0x46d295=_0x2e59b7(0x400);if(this[_0x2e59b7(0x1cb)][_0x46d295])return this[_0x2e59b7(0x1cb)][_0x46d295];if(Imported[_0x2e59b7(0x1f9)]){const _0x33edfb=this[_0x2e59b7(0x2ea)]['note'];if(_0x33edfb[_0x2e59b7(0x568)](/<ALWAYS HIT>/i)){if(_0x2e59b7(0x3cb)===_0x2e59b7(0x3cb))return _0x2e59b7(0x481);else{function _0x5bef94(){const _0x39fced=_0x2e59b7;return _0x4666a3['ItemsEquipsCore'][_0x39fced(0x4b6)][_0x39fced(0x2f6)](this);}}}else{if(_0x33edfb[_0x2e59b7(0x568)](/<ALWAYS HIT RATE: (\d+)([%％])>/i))return _0x2e59b7(0x493)[_0x2e59b7(0x257)](Number(RegExp['$1']));}}return _0x2e59b7(0x493)['format'](this[_0x2e59b7(0x2ea)]['successRate']);},Window_ShopStatus['prototype'][_0x199c58(0x3ee)]=function(_0x5630c9,_0x5dca0f,_0x13efb9){const _0x4d9a4e=_0x199c58,_0x388127=this[_0x4d9a4e(0x1e1)]();this[_0x4d9a4e(0x1f0)](_0x388127,_0x5630c9,_0x5dca0f,_0x13efb9,!![]);const _0x5654c8=this[_0x4d9a4e(0x5ae)]();return this['drawItemKeyData'](_0x5654c8,_0x5630c9,_0x5dca0f,_0x13efb9,![],_0x4d9a4e(0x2b5)),this['drawItemDarkRect'](_0x5630c9,_0x5dca0f,_0x13efb9),this[_0x4d9a4e(0x4ea)](),!![];},Window_ShopStatus['prototype']['getItemRepeatsLabel']=function(){const _0x21da68=_0x199c58;return VisuMZ[_0x21da68(0x22a)][_0x21da68(0x2d7)]['StatusWindow'][_0x21da68(0x43d)];},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x5ae)]=function(){const _0x44dc3b=_0x199c58,_0xc54057=_0x44dc3b(0x3c6);if(this[_0x44dc3b(0x1cb)][_0xc54057])return this[_0x44dc3b(0x1cb)][_0xc54057];const _0x5d45de=_0x44dc3b(0x368);return _0x5d45de[_0x44dc3b(0x257)](this[_0x44dc3b(0x2ea)][_0x44dc3b(0x29c)]);},Window_ShopStatus['prototype'][_0x199c58(0x2b8)]=function(_0x2d388a,_0x5f027b,_0x2d1f03){const _0x1d0846=_0x199c58,_0x3e084b=this[_0x1d0846(0x1d0)]();this[_0x1d0846(0x1f0)](_0x3e084b,_0x2d388a,_0x5f027b,_0x2d1f03,!![]);const _0x2d017=this[_0x1d0846(0x56b)]();return this[_0x1d0846(0x1f0)](_0x2d017,_0x2d388a,_0x5f027b,_0x2d1f03,![],_0x1d0846(0x2b5)),this['drawItemDarkRect'](_0x2d388a,_0x5f027b,_0x2d1f03),this[_0x1d0846(0x4ea)](),!![];},Window_ShopStatus['prototype'][_0x199c58(0x1d0)]=function(){const _0x5882b9=_0x199c58;return VisuMZ['ItemsEquipsCore'][_0x5882b9(0x2d7)][_0x5882b9(0x386)]['LabelHitType'];},Window_ShopStatus[_0x199c58(0x2a8)]['getItemHitTypeText']=function(){const _0x395b51=_0x199c58,_0x499d98=_0x395b51(0x3f7);if(this[_0x395b51(0x1cb)][_0x499d98])return this['_customItemInfo'][_0x499d98];const _0x163524=VisuMZ[_0x395b51(0x22a)][_0x395b51(0x2d7)]['StatusWindow'],_0x50cd49=_0x395b51(0x3d1)[_0x395b51(0x257)](this['_item']['hitType']);return _0x163524[_0x50cd49];},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x5a3)]=function(_0x5ad57a,_0xf733f7,_0xfdd928){const _0x7714e8=_0x199c58;if(this[_0x7714e8(0x2ea)][_0x7714e8(0x3c2)]['type']<=0x0)return _0xf733f7;if(this['drawItemDamageElement'](_0x5ad57a,_0xf733f7,_0xfdd928))_0xf733f7+=this['lineHeight']();if(this[_0x7714e8(0x39f)](_0x5ad57a,_0xf733f7,_0xfdd928))_0xf733f7+=this['lineHeight']();return this[_0x7714e8(0x4ea)](),_0xf733f7;},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x5ba)]=function(_0x1e8fd5,_0x430803,_0x4ca23f){const _0x9b2366=_0x199c58,_0x889f91=this[_0x9b2366(0x4de)]();this['drawItemKeyData'](_0x889f91,_0x1e8fd5,_0x430803,_0x4ca23f,!![]);const _0x58e94b=this['getItemDamageElementText']();return this[_0x9b2366(0x1f0)](_0x58e94b,_0x1e8fd5,_0x430803,_0x4ca23f,![],'right'),this[_0x9b2366(0x35b)](_0x1e8fd5,_0x430803,_0x4ca23f),this[_0x9b2366(0x4ea)](),!![];},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x4de)]=function(){const _0x35b1b2=_0x199c58;return VisuMZ[_0x35b1b2(0x22a)][_0x35b1b2(0x2d7)][_0x35b1b2(0x386)]['LabelElement'];},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x52e)]=function(){const _0x1cfc08=_0x199c58,_0xdd041=_0x1cfc08(0x483);if(this[_0x1cfc08(0x1cb)][_0xdd041])return this[_0x1cfc08(0x1cb)][_0xdd041];if(this['_item'][_0x1cfc08(0x3c2)][_0x1cfc08(0x296)]<=-0x1){if(_0x1cfc08(0x33b)!==_0x1cfc08(0x33b)){function _0x435eeb(){const _0x563d1b=_0x1cfc08;return _0x177b9f=_0x8ddc84(_0x1745f8),_0x3cc68d[_0x563d1b(0x568)](/#(.*)/i)?_0x563d1b(0x5fc)[_0x563d1b(0x257)](_0x513a1f(_0xcfd7d8['$1'])):this['textColor'](_0x2fb2e1(_0x272d33));}}else return VisuMZ['ItemsEquipsCore'][_0x1cfc08(0x2d7)][_0x1cfc08(0x386)][_0x1cfc08(0x472)];}else return this[_0x1cfc08(0x2ea)][_0x1cfc08(0x3c2)][_0x1cfc08(0x296)]===0x0?VisuMZ[_0x1cfc08(0x22a)]['Settings'][_0x1cfc08(0x386)][_0x1cfc08(0x3a3)]:$dataSystem[_0x1cfc08(0x3c7)][this['_item'][_0x1cfc08(0x3c2)][_0x1cfc08(0x296)]];},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x39f)]=function(_0x499d8f,_0x1d805b,_0x243962){const _0x782f23=_0x199c58,_0x35fcdc=this[_0x782f23(0x2e8)]();this['drawItemKeyData'](_0x35fcdc,_0x499d8f,_0x1d805b,_0x243962,!![]),this[_0x782f23(0x315)]();const _0x52133b=this[_0x782f23(0x322)](),_0x2a2853=ColorManager[_0x782f23(0x3ed)]([0x0,0x0,0x2,0x1,0x3,0x1,0x3][this[_0x782f23(0x2ea)][_0x782f23(0x3c2)]['type']]);return this['changeTextColor'](_0x2a2853),this['drawItemKeyData'](_0x52133b,_0x499d8f,_0x1d805b,_0x243962,![],_0x782f23(0x2b5)),this[_0x782f23(0x35b)](_0x499d8f,_0x1d805b,_0x243962),this[_0x782f23(0x4ea)](),!![];},Window_ShopStatus['prototype'][_0x199c58(0x2e8)]=function(){const _0x22ec3e=_0x199c58;if(Imported['VisuMZ_1_BattleCore']&&DataManager[_0x22ec3e(0x503)](this[_0x22ec3e(0x2ea)])!==_0x22ec3e(0x3d7))return this[_0x22ec3e(0x57b)]();else{if(_0x22ec3e(0x564)!=='CKsuV')return this['getItemDamageAmountLabelOriginal']();else{function _0x5b667e(){const _0x44e10a=_0x22ec3e;this[_0x44e10a(0x4e1)]();}}}},Window_ShopStatus['prototype'][_0x199c58(0x2e5)]=function(){const _0xa1061a=_0x199c58,_0x23d621=VisuMZ[_0xa1061a(0x22a)][_0xa1061a(0x2d7)][_0xa1061a(0x386)],_0x7e52f5=_0xa1061a(0x314)[_0xa1061a(0x257)](this['_item']['damage'][_0xa1061a(0x3e2)]),_0x2e6edb=[null,TextManager['hp'],TextManager['mp'],TextManager['hp'],TextManager['mp'],TextManager['hp'],TextManager['mp']][this[_0xa1061a(0x2ea)][_0xa1061a(0x3c2)][_0xa1061a(0x3e2)]];return _0x23d621[_0x7e52f5][_0xa1061a(0x257)](_0x2e6edb);},Window_ShopStatus['prototype']['setupItemDamageTempActors']=function(){const _0x5db024=_0x199c58,_0x53383d=$gameActors[_0x5db024(0x29e)](0x1);this['_tempActorA']=JsonEx[_0x5db024(0x56a)](_0x53383d),this[_0x5db024(0x5e2)]=JsonEx[_0x5db024(0x56a)](_0x53383d);},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x322)]=function(){const _0x3cdd74=_0x199c58,_0x1b5348=_0x3cdd74(0x607);if(this['_customItemInfo'][_0x1b5348])return this[_0x3cdd74(0x1cb)][_0x1b5348];return Imported[_0x3cdd74(0x1f9)]&&DataManager[_0x3cdd74(0x503)](this[_0x3cdd74(0x2ea)])!=='MANUAL'?this[_0x3cdd74(0x208)]():this[_0x3cdd74(0x5ec)]();},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x5ec)]=function(){const _0x48a548=_0x199c58;window['a']=this['_tempActorA'],window['b']=this[_0x48a548(0x5e2)],this[_0x48a548(0x471)][_0x48a548(0x23c)](!![]),this[_0x48a548(0x5e2)][_0x48a548(0x23c)]([0x3,0x4]['includes'](this['_item'][_0x48a548(0x3c2)][_0x48a548(0x3e2)]));let _0x4bfb32=this[_0x48a548(0x2ea)][_0x48a548(0x3c2)]['formula'];try{const _0x62ed97=Math[_0x48a548(0x573)](eval(_0x4bfb32),0x0)/window['a'][_0x48a548(0x287)];this['revertGlobalNamespaceVariables']();if(isNaN(_0x62ed97)){if(_0x48a548(0x1ff)===_0x48a548(0x5cc)){function _0x8c36d7(){const _0x4fa32c=_0x48a548;_0x266fa4=_0x4fa32c(0x5d3)['format'](_0x4fad2a['id']);}}else return _0x48a548(0x44b);}else return'%1%'[_0x48a548(0x257)](Math['round'](_0x62ed97*0x64));}catch(_0xe3be24){return $gameTemp[_0x48a548(0x27a)]()&&(console[_0x48a548(0x5e6)](_0x48a548(0x1b9)[_0x48a548(0x257)](this['_item'][_0x48a548(0x5f2)])),console[_0x48a548(0x5e6)](_0xe3be24)),this[_0x48a548(0x5c9)](),_0x48a548(0x44b);}},Window_ShopStatus[_0x199c58(0x2a8)]['revertGlobalNamespaceVariables']=function(){window['a']=undefined,window['b']=undefined;},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x490)]=function(_0x34f46c,_0x518f16,_0x1d09d1){const _0x44c7d9=_0x199c58;if(!this[_0x44c7d9(0x4ab)]())return _0x518f16;if(this['drawItemEffectsHpRecovery'](_0x34f46c,_0x518f16,_0x1d09d1))_0x518f16+=this[_0x44c7d9(0x264)]();if(this[_0x44c7d9(0x216)](_0x34f46c,_0x518f16,_0x1d09d1))_0x518f16+=this['lineHeight']();if(this['drawItemEffectsTpRecovery'](_0x34f46c,_0x518f16,_0x1d09d1))_0x518f16+=this[_0x44c7d9(0x264)]();if(this[_0x44c7d9(0x211)](_0x34f46c,_0x518f16,_0x1d09d1))_0x518f16+=this[_0x44c7d9(0x264)]();if(this[_0x44c7d9(0x38e)](_0x34f46c,_0x518f16,_0x1d09d1))_0x518f16+=this['lineHeight']();if(this['drawItemEffectsTpDamage'](_0x34f46c,_0x518f16,_0x1d09d1))_0x518f16+=this[_0x44c7d9(0x264)]();if(this[_0x44c7d9(0x32f)](_0x34f46c,_0x518f16,_0x1d09d1))_0x518f16+=this[_0x44c7d9(0x264)]();if(this[_0x44c7d9(0x4fb)](_0x34f46c,_0x518f16,_0x1d09d1))_0x518f16+=this[_0x44c7d9(0x264)]();if(this['drawItemEffectsRemovedStatesBuffs'](_0x34f46c,_0x518f16,_0x1d09d1))_0x518f16+=this['lineHeight']();return this[_0x44c7d9(0x4ea)](),_0x518f16;},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x4ba)]=function(){const _0x52d074=_0x199c58;return this[_0x52d074(0x2ea)]['effects'];},Window_ShopStatus['prototype'][_0x199c58(0x4ab)]=function(){const _0x7b0959=_0x199c58;let _0x4bfeac=![];this['_itemData']={'rateHP':0x0,'flatHP':0x0,'rateMP':0x0,'flatMP':0x0,'gainTP':0x0,'selfTP':0x0,'addState':[],'removeState':[],'changeBuff':[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],'removeBuff':[],'removeDebuff':[],'addStateBuffChanges':![],'removeStateBuffChanges':![]};const _0x397968=this[_0x7b0959(0x4ba)]();for(const _0x4da991 of _0x397968){if(_0x7b0959(0x4aa)===_0x7b0959(0x4aa))switch(_0x4da991['code']){case Game_Action[_0x7b0959(0x4f1)]:this['_itemData'][_0x7b0959(0x385)]+=_0x4da991[_0x7b0959(0x4d4)],this[_0x7b0959(0x49c)]['flatHP']+=_0x4da991['value2'],_0x4bfeac=!![];break;case Game_Action['EFFECT_RECOVER_MP']:this[_0x7b0959(0x49c)][_0x7b0959(0x557)]+=_0x4da991[_0x7b0959(0x4d4)],this[_0x7b0959(0x49c)][_0x7b0959(0x23e)]+=_0x4da991[_0x7b0959(0x2a4)],_0x4bfeac=!![];break;case Game_Action[_0x7b0959(0x48b)]:this[_0x7b0959(0x49c)][_0x7b0959(0x1dc)]+=_0x4da991[_0x7b0959(0x4d4)],_0x4bfeac=!![];break;case Game_Action[_0x7b0959(0x47e)]:this[_0x7b0959(0x49c)]['addState'][_0x7b0959(0x419)](_0x4da991['dataId']),_0x4bfeac=!![];break;case Game_Action[_0x7b0959(0x54a)]:this['_itemData'][_0x7b0959(0x5af)][_0x7b0959(0x419)](_0x4da991[_0x7b0959(0x475)]),this['_itemData'][_0x7b0959(0x1e6)]=!![],_0x4bfeac=!![];break;case Game_Action['EFFECT_ADD_BUFF']:this[_0x7b0959(0x49c)][_0x7b0959(0x57f)][_0x4da991[_0x7b0959(0x475)]]+=0x1,_0x4bfeac=!![];break;case Game_Action['EFFECT_ADD_DEBUFF']:this['_itemData'][_0x7b0959(0x57f)][_0x4da991[_0x7b0959(0x475)]]-=0x1,_0x4bfeac=!![];break;case Game_Action[_0x7b0959(0x34c)]:this[_0x7b0959(0x49c)][_0x7b0959(0x5da)]['push'](_0x4da991[_0x7b0959(0x475)]),this[_0x7b0959(0x49c)][_0x7b0959(0x1e6)]=!![],_0x4bfeac=!![];break;case Game_Action[_0x7b0959(0x54d)]:this['_itemData'][_0x7b0959(0x2ef)][_0x7b0959(0x419)](_0x4da991[_0x7b0959(0x475)]),this[_0x7b0959(0x49c)][_0x7b0959(0x1e6)]=!![],_0x4bfeac=!![];break;}else{function _0x3fe5f0(){const _0x3f4fc7=_0x7b0959;_0x401f89['prototype'][_0x3f4fc7(0x4ea)][_0x3f4fc7(0x2f6)](this),this[_0x3f4fc7(0x3ea)]['fontSize']=this['_resetFontSize']||this[_0x3f4fc7(0x3ea)][_0x3f4fc7(0x535)],this[_0x3f4fc7(0x3ea)][_0x3f4fc7(0x3a6)]=this[_0x3f4fc7(0x562)]||this[_0x3f4fc7(0x3ea)][_0x3f4fc7(0x3a6)];}}}if(this['_itemData'][_0x7b0959(0x31b)][_0x7b0959(0x3d3)]>0x0)this['_itemData'][_0x7b0959(0x278)]=!![];for(let _0x580956=0x0;_0x580956<this[_0x7b0959(0x49c)]['changeBuff'][_0x7b0959(0x3d3)];_0x580956++){if(this[_0x7b0959(0x49c)][_0x7b0959(0x57f)][_0x580956]!==0x0)this[_0x7b0959(0x49c)][_0x7b0959(0x278)]=!![];}this[_0x7b0959(0x2ea)][_0x7b0959(0x246)]!==0x0&&(this[_0x7b0959(0x49c)]['selfTP']=this[_0x7b0959(0x2ea)][_0x7b0959(0x246)],_0x4bfeac=!![]);const _0x5879ac=[_0x7b0959(0x3c9),_0x7b0959(0x5fb),'TP\x20RECOVERY',_0x7b0959(0x1e5),_0x7b0959(0x542),_0x7b0959(0x456),'USER\x20TP\x20GAIN',_0x7b0959(0x28e),'REMOVED\x20EFFECTS'];for(const _0x2c91ce of _0x5879ac){if(this[_0x7b0959(0x1cb)][_0x2c91ce]){_0x4bfeac=!![];break;}}return _0x4bfeac;},Window_ShopStatus['prototype'][_0x199c58(0x5c6)]=function(_0x3eb812,_0x2babbc,_0x36eee4){const _0x200b01=_0x199c58,_0x238cb2=_0x200b01(0x3c9);if(this[_0x200b01(0x49c)][_0x200b01(0x385)]<=0x0&&this['_itemData'][_0x200b01(0x4f2)]<=0x0&&!this[_0x200b01(0x1cb)][_0x238cb2])return![];const _0x253a58=this[_0x200b01(0x47b)]();this['drawItemKeyData'](_0x253a58,_0x3eb812,_0x2babbc,_0x36eee4,!![]);const _0x444cde=this[_0x200b01(0x1c4)]();return this['changeTextColor'](ColorManager['damageColor'](0x1)),this[_0x200b01(0x1f0)](_0x444cde,_0x3eb812,_0x2babbc,_0x36eee4,![],_0x200b01(0x2b5)),this[_0x200b01(0x35b)](_0x3eb812,_0x2babbc,_0x36eee4),this[_0x200b01(0x4ea)](),!![];},Window_ShopStatus['prototype'][_0x199c58(0x47b)]=function(){const _0x25f4db=_0x199c58,_0x4c5823=VisuMZ[_0x25f4db(0x22a)][_0x25f4db(0x2d7)][_0x25f4db(0x386)][_0x25f4db(0x1b8)];return _0x4c5823[_0x25f4db(0x257)](TextManager['hp']);},Window_ShopStatus[_0x199c58(0x2a8)]['getItemEffectsHpRecoveryText']=function(){const _0x1dafd2=_0x199c58,_0x51ee42='HP\x20RECOVERY';if(this[_0x1dafd2(0x1cb)][_0x51ee42])return this[_0x1dafd2(0x1cb)][_0x51ee42];let _0x3eb842='';if(this[_0x1dafd2(0x49c)][_0x1dafd2(0x385)]>0x0)_0x3eb842+=_0x1dafd2(0x289)[_0x1dafd2(0x257)](Math[_0x1dafd2(0x473)](this['_itemData']['rateHP']*0x64));if(this[_0x1dafd2(0x49c)]['rateHP']>0x0&&this[_0x1dafd2(0x49c)]['flatHP']>0x0)_0x3eb842+='\x20';if(this[_0x1dafd2(0x49c)]['flatHP']>0x0)_0x3eb842+=_0x1dafd2(0x3ad)['format'](this[_0x1dafd2(0x49c)][_0x1dafd2(0x4f2)]);return _0x3eb842;},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x216)]=function(_0x4c1fca,_0x5747ea,_0x10f250){const _0x5b757c=_0x199c58,_0x2185c4=_0x5b757c(0x5fb);if(this[_0x5b757c(0x49c)]['rateMP']<=0x0&&this[_0x5b757c(0x49c)][_0x5b757c(0x23e)]<=0x0&&!this[_0x5b757c(0x1cb)][_0x2185c4])return![];const _0x48f16c=this[_0x5b757c(0x2ca)]();this[_0x5b757c(0x1f0)](_0x48f16c,_0x4c1fca,_0x5747ea,_0x10f250,!![]);const _0x1f3e09=this[_0x5b757c(0x382)]();return this[_0x5b757c(0x4b3)](ColorManager[_0x5b757c(0x3ed)](0x3)),this[_0x5b757c(0x1f0)](_0x1f3e09,_0x4c1fca,_0x5747ea,_0x10f250,![],_0x5b757c(0x2b5)),this['drawItemDarkRect'](_0x4c1fca,_0x5747ea,_0x10f250),this[_0x5b757c(0x4ea)](),!![];},Window_ShopStatus[_0x199c58(0x2a8)]['getItemEffectsMpRecoveryLabel']=function(){const _0x38f073=_0x199c58,_0x21c7f3=VisuMZ[_0x38f073(0x22a)][_0x38f073(0x2d7)][_0x38f073(0x386)][_0x38f073(0x3bd)];return _0x21c7f3['format'](TextManager['mp']);},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x382)]=function(){const _0x1de891=_0x199c58,_0x51a5d7=_0x1de891(0x5fb);if(this['_customItemInfo'][_0x51a5d7])return this[_0x1de891(0x1cb)][_0x51a5d7];let _0x514213='';if(this[_0x1de891(0x49c)]['rateMP']>0x0)_0x514213+=_0x1de891(0x289)['format'](Math[_0x1de891(0x473)](this[_0x1de891(0x49c)]['rateMP']*0x64));if(this[_0x1de891(0x49c)]['rateMP']>0x0&&this[_0x1de891(0x49c)]['flatMP']>0x0)_0x514213+='\x20';if(this[_0x1de891(0x49c)][_0x1de891(0x23e)]>0x0)_0x514213+=_0x1de891(0x3ad)[_0x1de891(0x257)](this[_0x1de891(0x49c)][_0x1de891(0x23e)]);return _0x514213;},Window_ShopStatus[_0x199c58(0x2a8)]['drawItemEffectsTpRecovery']=function(_0x185ee4,_0x2ff000,_0x34b9dd){const _0x573aba=_0x199c58,_0x322f95=_0x573aba(0x412);if(this[_0x573aba(0x49c)]['gainTP']<=0x0&&!this[_0x573aba(0x1cb)][_0x322f95])return![];const _0xe58561=this['getItemEffectsTpRecoveryLabel']();this[_0x573aba(0x1f0)](_0xe58561,_0x185ee4,_0x2ff000,_0x34b9dd,!![]);const _0x2b20fc=this[_0x573aba(0x489)]();return this['changeTextColor'](ColorManager['powerUpColor']()),this['drawItemKeyData'](_0x2b20fc,_0x185ee4,_0x2ff000,_0x34b9dd,![],_0x573aba(0x2b5)),this[_0x573aba(0x35b)](_0x185ee4,_0x2ff000,_0x34b9dd),this['resetFontSettings'](),!![];},Window_ShopStatus['prototype']['getItemEffectsTpRecoveryLabel']=function(){const _0x392f79=_0x199c58,_0x2c401a=VisuMZ['ItemsEquipsCore']['Settings'][_0x392f79(0x386)]['LabelRecoverTP'];return _0x2c401a[_0x392f79(0x257)](TextManager['tp']);},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x489)]=function(){const _0x576766=_0x199c58,_0x559b37=_0x576766(0x412);if(this[_0x576766(0x1cb)][_0x559b37])return this[_0x576766(0x1cb)][_0x559b37];let _0x48fab0='';return _0x48fab0+=_0x576766(0x3ad)[_0x576766(0x257)](this[_0x576766(0x49c)][_0x576766(0x1dc)]),_0x48fab0;},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x32f)]=function(_0x3975e3,_0x588b26,_0x2e1926){const _0xac56c9=_0x199c58,_0x47aeab=_0xac56c9(0x2cb);if(this[_0xac56c9(0x49c)][_0xac56c9(0x2cc)]===0x0&&!this[_0xac56c9(0x1cb)][_0x47aeab])return![];const _0x4f75bf=this['getItemEffectsSelfTpGainLabel']();this[_0xac56c9(0x1f0)](_0x4f75bf,_0x3975e3,_0x588b26,_0x2e1926,!![]);const _0x23d500=this[_0xac56c9(0x42c)]();if(this['_itemData'][_0xac56c9(0x2cc)]>0x0){if(_0xac56c9(0x514)===_0xac56c9(0x1ec)){function _0xaf3ec6(){const _0x54146c=_0xac56c9;return _0x54146c(0x4ac);}}else this[_0xac56c9(0x4b3)](ColorManager['powerUpColor']());}else{if('vhNQA'==='vhNQA')this[_0xac56c9(0x4b3)](ColorManager[_0xac56c9(0x1bf)]());else{function _0x50ad9b(){const _0x4faf4b=_0xac56c9;return _0x5c4c41===null&&this['nonRemovableEtypes']()[_0x4faf4b(0x2b1)](this[_0x4faf4b(0x295)]())?![]:_0x126c1f['ItemsEquipsCore']['Window_EquipItem_includes'][_0x4faf4b(0x2f6)](this,_0x1c0770);}}}return this[_0xac56c9(0x1f0)](_0x23d500,_0x3975e3,_0x588b26,_0x2e1926,![],_0xac56c9(0x2b5)),this[_0xac56c9(0x35b)](_0x3975e3,_0x588b26,_0x2e1926),this[_0xac56c9(0x4ea)](),!![];},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x588)]=function(){const _0x184413=_0x199c58,_0x1211d0=VisuMZ[_0x184413(0x22a)][_0x184413(0x2d7)][_0x184413(0x386)]['LabelSelfGainTP'];return _0x1211d0[_0x184413(0x257)](TextManager['tp']);},Window_ShopStatus['prototype'][_0x199c58(0x42c)]=function(){const _0x53fe14=_0x199c58,_0x2b52e4=_0x53fe14(0x2cb);if(this[_0x53fe14(0x1cb)][_0x2b52e4])return this[_0x53fe14(0x1cb)][_0x2b52e4];let _0x1548d1='';if(this['_itemData'][_0x53fe14(0x2cc)]>0x0)_0x1548d1+=_0x53fe14(0x3ad)['format'](this[_0x53fe14(0x49c)][_0x53fe14(0x2cc)]);else{if(_0x53fe14(0x283)===_0x53fe14(0x283))_0x1548d1+='%1'[_0x53fe14(0x257)](this['_itemData']['selfTP']);else{function _0x353914(){const _0x2d2325=_0x53fe14;this[_0x2d2325(0x4ea)](),this[_0x2d2325(0x3ea)][_0x2d2325(0x535)]=this[_0x2d2325(0x506)]();let _0xf0cacd=this['textWidth'](_0x1cb50c[_0x2d2325(0x2d8)](_0x2d88d6))+0x4+_0x1faf39;return _0x2b1716[_0x2d2325(0x279)]?(this['drawParamText'](_0x294ac5,_0x8bc0e8,_0x509fbc,_0x28c1c4,!![]),_0x1d8da8['CoreEngine'][_0x2d2325(0x2d7)]['Param'][_0x2d2325(0x2c9)]&&(_0xf0cacd+=_0x31365b[_0x2d2325(0x366)]+0x4)):(this['changeTextColor'](_0x4e5ed5[_0x2d2325(0x543)]()),this[_0x2d2325(0x577)](_0x2773dc[_0x2d2325(0x2d8)](_0x4c1f87),_0x1e947b,_0x55b46f,_0xbe7c38)),this[_0x2d2325(0x4ea)](),_0xf0cacd;}}}return _0x1548d1;},Window_ShopStatus['prototype']['drawItemEffectsHpDamage']=function(_0x4557ba,_0x24fd5d,_0x7d4104){const _0x152aa9=_0x199c58,_0xfcf9e8=_0x152aa9(0x1e5);if(this['_itemData'][_0x152aa9(0x385)]>=0x0&&this[_0x152aa9(0x49c)][_0x152aa9(0x4f2)]>=0x0&&!this[_0x152aa9(0x1cb)][_0xfcf9e8])return![];const _0xa8cb49=this[_0x152aa9(0x203)]();this[_0x152aa9(0x1f0)](_0xa8cb49,_0x4557ba,_0x24fd5d,_0x7d4104,!![]);const _0x2f352e=this[_0x152aa9(0x37f)]();return this[_0x152aa9(0x4b3)](ColorManager['damageColor'](0x0)),this[_0x152aa9(0x1f0)](_0x2f352e,_0x4557ba,_0x24fd5d,_0x7d4104,![],_0x152aa9(0x2b5)),this[_0x152aa9(0x35b)](_0x4557ba,_0x24fd5d,_0x7d4104),this[_0x152aa9(0x4ea)](),!![];},Window_ShopStatus['prototype'][_0x199c58(0x203)]=function(){const _0x5707d0=_0x199c58,_0x293fc4=VisuMZ[_0x5707d0(0x22a)][_0x5707d0(0x2d7)][_0x5707d0(0x386)][_0x5707d0(0x45e)];return _0x293fc4[_0x5707d0(0x257)](TextManager['hp']);},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x37f)]=function(){const _0x560b78=_0x199c58,_0x2fd67e='HP\x20DAMAGE';if(this[_0x560b78(0x1cb)][_0x2fd67e])return this[_0x560b78(0x1cb)][_0x2fd67e];let _0x4a5530='';if(this[_0x560b78(0x49c)][_0x560b78(0x385)]<0x0)_0x4a5530+=_0x560b78(0x493)['format'](Math['floor'](this['_itemData'][_0x560b78(0x385)]*0x64));if(this[_0x560b78(0x49c)][_0x560b78(0x385)]<0x0&&this[_0x560b78(0x49c)][_0x560b78(0x4f2)]<0x0)_0x4a5530+='\x20';if(this[_0x560b78(0x49c)][_0x560b78(0x4f2)]<0x0)_0x4a5530+='%1'[_0x560b78(0x257)](this[_0x560b78(0x49c)][_0x560b78(0x4f2)]);return _0x4a5530;},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x38e)]=function(_0x57cfec,_0x3edc8e,_0x60987d){const _0x558fc8=_0x199c58,_0x3cd513=_0x558fc8(0x542);if(this[_0x558fc8(0x49c)][_0x558fc8(0x557)]>=0x0&&this['_itemData'][_0x558fc8(0x23e)]>=0x0&&!this['_customItemInfo'][_0x3cd513])return![];const _0x1684b4=this[_0x558fc8(0x423)]();this['drawItemKeyData'](_0x1684b4,_0x57cfec,_0x3edc8e,_0x60987d,!![]);const _0x5247f8=this[_0x558fc8(0x5b9)]();return this[_0x558fc8(0x4b3)](ColorManager['damageColor'](0x2)),this[_0x558fc8(0x1f0)](_0x5247f8,_0x57cfec,_0x3edc8e,_0x60987d,![],_0x558fc8(0x2b5)),this[_0x558fc8(0x35b)](_0x57cfec,_0x3edc8e,_0x60987d),this[_0x558fc8(0x4ea)](),!![];},Window_ShopStatus[_0x199c58(0x2a8)]['getItemEffectsMpDamageLabel']=function(){const _0x306b96=_0x199c58,_0x5b42cb=VisuMZ['ItemsEquipsCore'][_0x306b96(0x2d7)][_0x306b96(0x386)][_0x306b96(0x501)];return _0x5b42cb[_0x306b96(0x257)](TextManager['mp']);},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x5b9)]=function(){const _0x53d0e5=_0x199c58,_0x31ec2d=_0x53d0e5(0x542);if(this['_customItemInfo'][_0x31ec2d])return this[_0x53d0e5(0x1cb)][_0x31ec2d];let _0x4d89ee='';if(this['_itemData'][_0x53d0e5(0x557)]<0x0)_0x4d89ee+=_0x53d0e5(0x493)[_0x53d0e5(0x257)](Math[_0x53d0e5(0x473)](this[_0x53d0e5(0x49c)][_0x53d0e5(0x557)]*0x64));if(this[_0x53d0e5(0x49c)]['rateMP']<0x0&&this[_0x53d0e5(0x49c)][_0x53d0e5(0x23e)]<0x0)_0x4d89ee+='\x20';if(this[_0x53d0e5(0x49c)][_0x53d0e5(0x23e)]<0x0)_0x4d89ee+='%1'[_0x53d0e5(0x257)](this[_0x53d0e5(0x49c)]['flatMP']);return _0x4d89ee;},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x343)]=function(_0x128f13,_0x5a9a20,_0x4e2961){const _0x2edfdf=_0x199c58,_0x21004a=_0x2edfdf(0x456);if(this[_0x2edfdf(0x49c)][_0x2edfdf(0x1dc)]>=0x0&&!this[_0x2edfdf(0x1cb)][_0x21004a])return![];const _0x1d5516=this[_0x2edfdf(0x31d)]();this[_0x2edfdf(0x1f0)](_0x1d5516,_0x128f13,_0x5a9a20,_0x4e2961,!![]);const _0x196257=this['getItemEffectsTpDamageText']();return this['changeTextColor'](ColorManager[_0x2edfdf(0x1bf)]()),this['drawItemKeyData'](_0x196257,_0x128f13,_0x5a9a20,_0x4e2961,![],_0x2edfdf(0x2b5)),this[_0x2edfdf(0x35b)](_0x128f13,_0x5a9a20,_0x4e2961),this[_0x2edfdf(0x4ea)](),!![];},Window_ShopStatus['prototype'][_0x199c58(0x31d)]=function(){const _0x39bdc8=_0x199c58,_0x69934b=VisuMZ[_0x39bdc8(0x22a)][_0x39bdc8(0x2d7)]['StatusWindow'][_0x39bdc8(0x55c)];return _0x69934b[_0x39bdc8(0x257)](TextManager['tp']);},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x1f6)]=function(){const _0x2bad16=_0x199c58,_0x11b27f='TP\x20DAMAGE';if(this[_0x2bad16(0x1cb)][_0x11b27f])return this[_0x2bad16(0x1cb)][_0x11b27f];let _0x4188b3='';return _0x4188b3+='%1'[_0x2bad16(0x257)](this[_0x2bad16(0x49c)][_0x2bad16(0x1dc)]),_0x4188b3;},Window_ShopStatus['prototype']['drawItemEffectsAddedStatesBuffs']=function(_0x318675,_0x34f4e6,_0x36aa76){const _0x25d48d=_0x199c58,_0x562c73=_0x25d48d(0x28e);if(!this[_0x25d48d(0x49c)][_0x25d48d(0x278)]&&!this[_0x25d48d(0x1cb)][_0x562c73])return![];const _0x41668b=this[_0x25d48d(0x374)]();this[_0x25d48d(0x1f0)](_0x41668b,_0x318675,_0x34f4e6,_0x36aa76,!![]);const _0x58d33e=this['getItemEffectsAddedStatesBuffsText']();return this[_0x25d48d(0x1f0)](_0x58d33e,_0x318675,_0x34f4e6,_0x36aa76,![],'right'),this[_0x25d48d(0x35b)](_0x318675,_0x34f4e6,_0x36aa76),this[_0x25d48d(0x4ea)](),!![];},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x374)]=function(){const _0x20d888=_0x199c58;return VisuMZ[_0x20d888(0x22a)][_0x20d888(0x2d7)]['StatusWindow'][_0x20d888(0x316)];},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x4ee)]=function(){const _0x37cd84=_0x199c58,_0x83b2b2='ADDED\x20EFFECTS';if(this[_0x37cd84(0x1cb)][_0x83b2b2])return this[_0x37cd84(0x1cb)][_0x83b2b2];let _0x586ea6='',_0x23d76a=0x0;const _0xb48a2c=0x8;for(const _0x4b47b9 of this[_0x37cd84(0x49c)][_0x37cd84(0x31b)]){const _0x399515=$dataStates[_0x4b47b9];if(_0x399515&&_0x399515[_0x37cd84(0x4c9)]>0x0){_0x586ea6+=_0x37cd84(0x4d5)[_0x37cd84(0x257)](_0x399515[_0x37cd84(0x4c9)]),_0x23d76a++;if(_0x23d76a>=_0xb48a2c)return _0x586ea6;}}for(let _0x566bc8=0x0;_0x566bc8<this['_itemData'][_0x37cd84(0x57f)]['length'];_0x566bc8++){const _0x2abb91=this[_0x37cd84(0x49c)][_0x37cd84(0x57f)][_0x566bc8],_0x1edd50=Game_BattlerBase[_0x37cd84(0x2a8)][_0x37cd84(0x4bd)](_0x2abb91,_0x566bc8);if(_0x1edd50>0x0){if(_0x37cd84(0x268)===_0x37cd84(0x2e2)){function _0x32590e(){const _0x283c89=_0x37cd84;this[_0x283c89(0x1f0)](_0x47b234,_0x2c2b83,_0x3d2cae,_0x15ace9,!![]),this[_0x283c89(0x1f0)](_0x58090c,_0xa80dde,_0x93b2b3,_0x162ed8,![],_0x283c89(0x2b5)),this[_0x283c89(0x35b)](_0x30ced9,_0x187507,_0x2b5dd0),this[_0x283c89(0x4ea)]();}}else{_0x586ea6+=_0x37cd84(0x4d5)[_0x37cd84(0x257)](_0x1edd50),_0x23d76a++;if(_0x23d76a>=_0xb48a2c)return _0x586ea6;}}}return _0x586ea6;},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x504)]=function(_0x119538,_0xbcf92,_0x11dc33){const _0x1eef81=_0x199c58,_0x5e3dd1='REMOVED\x20EFFECTS';if(!this[_0x1eef81(0x49c)][_0x1eef81(0x1e6)]&&!this['_customItemInfo'][_0x5e3dd1])return![];const _0x1cbab8=this['getItemEffectsRemovedStatesBuffsLabel']();this['drawItemKeyData'](_0x1cbab8,_0x119538,_0xbcf92,_0x11dc33,!![]);const _0x528717=this['getItemEffectsRemovedStatesBuffsText']();return this[_0x1eef81(0x1f0)](_0x528717,_0x119538,_0xbcf92,_0x11dc33,![],'right'),this[_0x1eef81(0x35b)](_0x119538,_0xbcf92,_0x11dc33),this[_0x1eef81(0x4ea)](),!![];},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x49d)]=function(){const _0x45cf5f=_0x199c58;return VisuMZ[_0x45cf5f(0x22a)][_0x45cf5f(0x2d7)][_0x45cf5f(0x386)][_0x45cf5f(0x3b9)];},Window_ShopStatus[_0x199c58(0x2a8)]['getItemEffectsRemovedStatesBuffsText']=function(){const _0x30ab2a=_0x199c58,_0x1cd3d3='REMOVED\x20EFFECTS';if(this[_0x30ab2a(0x1cb)][_0x1cd3d3])return this['_customItemInfo'][_0x1cd3d3];let _0x24ac07='',_0x1a3ea1=0x0;const _0x5ef0cf=VisuMZ['ItemsEquipsCore'][_0x30ab2a(0x2d7)][_0x30ab2a(0x386)][_0x30ab2a(0x4eb)];for(const _0x265672 of this[_0x30ab2a(0x49c)][_0x30ab2a(0x5af)]){const _0x41fcf5=$dataStates[_0x265672];if(_0x41fcf5&&_0x41fcf5[_0x30ab2a(0x4c9)]>0x0){_0x24ac07+=_0x30ab2a(0x4d5)['format'](_0x41fcf5[_0x30ab2a(0x4c9)]),_0x1a3ea1++;if(_0x1a3ea1>=_0x5ef0cf)return _0x24ac07;}}for(let _0x16361d=0x0;_0x16361d<this['_itemData'][_0x30ab2a(0x5da)][_0x30ab2a(0x3d3)];_0x16361d++){if(_0x30ab2a(0x23d)===_0x30ab2a(0x336)){function _0xc7c2e1(){const _0x151fff=_0x30ab2a;if(!this[_0x151fff(0x4ca)]())return![];if(!this[_0x151fff(0x3c8)]())return![];if(!this['_sellWindow'])return![];if(!this[_0x151fff(0x50c)]['active'])return![];return this['updatedLayoutStyle']()&&this[_0x151fff(0x3c8)]();}}else{const _0x2b555c=Game_BattlerBase[_0x30ab2a(0x2a8)][_0x30ab2a(0x4bd)](0x1,_0x16361d);if(_0x2b555c>0x0){if(_0x30ab2a(0x57c)!==_0x30ab2a(0x3c0)){_0x24ac07+=_0x30ab2a(0x4d5)[_0x30ab2a(0x257)](_0x2b555c),_0x1a3ea1++;if(_0x1a3ea1>=_0x5ef0cf)return _0x24ac07;}else{function _0xbe4412(){const _0x45790e=_0x30ab2a,_0x9bdb4c=_0x1b0813[_0x45790e(0x22a)][_0x45790e(0x2d7)][_0x45790e(0x386)][_0x45790e(0x501)];return _0x9bdb4c[_0x45790e(0x257)](_0x1372e6['mp']);}}}}}for(let _0x46747f=0x0;_0x46747f<this[_0x30ab2a(0x49c)][_0x30ab2a(0x2ef)][_0x30ab2a(0x3d3)];_0x46747f++){const _0x346cfd=Game_BattlerBase[_0x30ab2a(0x2a8)][_0x30ab2a(0x4bd)](-0x1,_0x46747f);if(_0x346cfd>0x0){_0x24ac07+='\x5cI[%1]'[_0x30ab2a(0x257)](_0x346cfd),_0x1a3ea1++;if(_0x1a3ea1>=_0x5ef0cf)return _0x24ac07;}}return _0x24ac07;},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x2ba)]=function(_0x520878,_0x274394,_0x3c20c5){const _0x25a49d=_0x199c58;if(this[_0x25a49d(0x2ea)][_0x25a49d(0x2da)][_0x25a49d(0x568)](/<CUSTOM STATUS INFO>\s*([\s\S]*)\s*<\/CUSTOM STATUS INFO>/i)){const _0x16857f=String(RegExp['$1'])[_0x25a49d(0x1d3)](/[\r\n]+/);for(const _0x2938ae of _0x16857f){if(_0x2938ae[_0x25a49d(0x568)](/(.*):[ ](.*)/i)){if(_0x25a49d(0x4e2)==='vYsCD'){function _0x42fb54(){const _0x530d14=_0x25a49d;_0x2133e7=_0x228d11||this[_0x530d14(0x264)](),this['contentsBack']['paintOpacity']=0xa0;const _0x42fdf8=_0x38539a['getItemsEquipsCoreBackColor1']();this[_0x530d14(0x32b)][_0x530d14(0x3e7)](_0x293581+0x1,_0xae62ec+0x1,_0x2ca4dc-0x2,_0x24ceeb-0x2,_0x42fdf8),this[_0x530d14(0x32b)][_0x530d14(0x5e1)]=0xff;}}else{const _0x5ce2e1=String(RegExp['$1'])[_0x25a49d(0x2ac)](),_0x4c8033=String(RegExp['$2'])[_0x25a49d(0x2ac)]();this[_0x25a49d(0x572)](_0x5ce2e1,_0x4c8033,_0x520878,_0x274394,_0x3c20c5),_0x274394+=this[_0x25a49d(0x264)]();}}}}return this[_0x25a49d(0x4ea)](),_0x274394;},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x572)]=function(_0x5e78e9,_0x682798,_0x11d082,_0x36d459,_0x2db9e6){const _0x8eabeb=_0x199c58;this['drawItemKeyData'](_0x5e78e9,_0x11d082,_0x36d459,_0x2db9e6,!![]),this[_0x8eabeb(0x1f0)](_0x682798,_0x11d082,_0x36d459,_0x2db9e6,![],'right'),this[_0x8eabeb(0x35b)](_0x11d082,_0x36d459,_0x2db9e6),this[_0x8eabeb(0x4ea)]();},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x3a4)]=function(){const _0x471f55=_0x199c58;if(!this['_item'])return;const _0x1afe91=this['_item']['note'],_0x51f91f=/<SHOP (?:PICTURE|IMAGE|PICTURE NAME|PICTURE FILENAME|IMAGE NAME|IMAGE FILENAME):[ ](.*)>/gi,_0x1c4423=_0x1afe91['match'](_0x51f91f);if(_0x1c4423)for(const _0x15c4b9 of _0x1c4423){_0x15c4b9['match'](_0x51f91f);const _0x1b64b0=String(RegExp['$1'])[_0x471f55(0x2ac)]()||'';if(_0x1b64b0==='')continue;const _0x4d49d7=ImageManager[_0x471f55(0x438)](_0x1b64b0);_0x4d49d7[_0x471f55(0x1de)](this['drawCustomShopGraphicLoad'][_0x471f55(0x426)](this,_0x4d49d7,this[_0x471f55(0x2ea)]));}},Window_ShopStatus[_0x199c58(0x2a8)][_0x199c58(0x59a)]=function(_0x52e097,_0x2f0e22){const _0x495ad3=_0x199c58;if(this[_0x495ad3(0x2ea)]!==_0x2f0e22)return;if(!_0x52e097)return;if(_0x52e097[_0x495ad3(0x533)]<=0x0||_0x52e097[_0x495ad3(0x33f)]<=0x0)return;const _0xe53a87=_0x2f0e22[_0x495ad3(0x2da)];let _0x50cd09='background';if(_0xe53a87[_0x495ad3(0x568)](/<SHOP (?:PICTURE|IMAGE) LAYER:[ ]FOREGROUND>/i)){if(_0x495ad3(0x28f)!==_0x495ad3(0x4d8))_0x50cd09=_0x495ad3(0x3b1);else{function _0x1b4a6a(){const _0x2f6445=_0x495ad3;return _0x240c4b['getInputMultiButtonStrings'](_0x2f6445(0x389),_0x2f6445(0x2b5));}}}const _0x5c62e5=_0x50cd09==='background'?this[_0x495ad3(0x32b)]:this[_0x495ad3(0x3ea)];let _0x58e9b8=this[_0x495ad3(0x524)],_0x2a887f=this[_0x495ad3(0x4a5)];_0xe53a87[_0x495ad3(0x568)](/<SHOP (?:PICTURE|IMAGE) MAX WIDTH:[ ](\d+)>/i)&&(_0x58e9b8=Number(RegExp['$1']));if(_0xe53a87['match'](/<SHOP (?:PICTURE|IMAGE) MAX HEIGHT:[ ](\d+)>/i)){if('PxkRk'!==_0x495ad3(0x1ba))_0x2a887f=Number(RegExp['$1']);else{function _0x4e75ce(){const _0x5c3bb3=_0x495ad3;_0x55dc3d[_0x5c3bb3(0x5e6)](_0x5c3bb3(0x1b9)[_0x5c3bb3(0x257)](this[_0x5c3bb3(0x2ea)][_0x5c3bb3(0x5f2)])),_0x28f6df[_0x5c3bb3(0x5e6)](_0x2aeef6);}}}if(_0xe53a87['match'](/<SHOP (?:PICTURE|IMAGE) MAX DIMENSIONS:[ ](\d+),[ ]*(\d+)>/i)){if('LTZbV'===_0x495ad3(0x51f))_0x58e9b8=Number(RegExp['$1']),_0x2a887f=Number(RegExp['$2']);else{function _0x59f0cd(){const _0x4cdf50=_0x495ad3;this[_0x4cdf50(0x582)][_0x4cdf50(0x337)](this[_0x4cdf50(0x582)][_0x4cdf50(0x5df)](_0x153d02),0x1);}}}const _0x1dfc06=Math[_0x495ad3(0x36d)](0x1,_0x58e9b8/_0x52e097['width'],_0x2a887f/_0x52e097[_0x495ad3(0x33f)]);let _0x42d869=0x0,_0x4e5a80=0x0,_0x21fc97=Math[_0x495ad3(0x473)](_0x52e097[_0x495ad3(0x533)]*_0x1dfc06),_0x1287f7=Math[_0x495ad3(0x473)](_0x52e097[_0x495ad3(0x33f)]*_0x1dfc06),_0x4f5f72=_0x495ad3(0x2a2);if(_0xe53a87['match'](/<SHOP (?:PICTURE|IMAGE) (?:ALIGN|ALIGNMENT):[ ](LEFT|CENTER|RIGHT)>/i)){if(_0x495ad3(0x48d)!==_0x495ad3(0x48d)){function _0x1aef45(){const _0x5e10ec=_0x495ad3;return _0x3fa2bb['getInputMultiButtonStrings'](_0x5e10ec(0x592),_0x5e10ec(0x435));}}else _0x4f5f72=String(RegExp['$1'])[_0x495ad3(0x5cb)]()['trim']();}if(_0x4f5f72===_0x495ad3(0x389))_0x42d869=0x0;else{if(_0x4f5f72===_0x495ad3(0x2a2)){if(_0x495ad3(0x38f)===_0x495ad3(0x2ae)){function _0x5d9ee5(){const _0x41ff91=_0x495ad3;return _0x41ff91(0x493)['format'](_0x26aa59(_0x5ac704['$1']));}}else _0x42d869=Math[_0x495ad3(0x53e)]((this[_0x495ad3(0x524)]-_0x21fc97)/0x2);}else{if(_0x495ad3(0x40c)!=='GmJZf'){function _0x17df06(){const _0x28894b=_0x495ad3;if(!_0x4f578f)return 0x63;else return _0x15caa1[_0x28894b(0x2da)][_0x28894b(0x568)](/<MAX:[ ](\d+)>/i)?_0x5a85d1(_0x47b1c4['$1']):this['defaultItemMax'](_0x56a58b);}}else _0x42d869=this[_0x495ad3(0x524)]-_0x21fc97;}}let _0x2add94=_0x495ad3(0x40a);_0xe53a87[_0x495ad3(0x568)](/<SHOP (?:PICTURE|IMAGE) POSITION:[ ](TOP|MIDDLE|BOTTOM)>/i)&&(_0x2add94=String(RegExp['$1'])[_0x495ad3(0x5cb)]()[_0x495ad3(0x2ac)]());if(_0x2add94==='top')_0x4e5a80=0x0;else _0x2add94==='middle'?_0x4e5a80=Math[_0x495ad3(0x53e)]((this[_0x495ad3(0x4a5)]-_0x1287f7)/0x2):_0x4e5a80=this[_0x495ad3(0x4a5)]-_0x1287f7;_0xe53a87[_0x495ad3(0x568)](/<SHOP (?:PICTURE|IMAGE) OFFSET X:[ ]([\+\-]\d+)>/i)&&(_0x42d869+=Number(RegExp['$1']));_0xe53a87[_0x495ad3(0x568)](/<SHOP (?:PICTURE|IMAGE) OFFSET Y:[ ]([\+\-]\d+)>/i)&&(_0x4e5a80+=Number(RegExp['$1']));_0xe53a87[_0x495ad3(0x568)](/<SHOP (?:PICTURE|IMAGE) OFFSET:[ ]([\+\-]\d+),[ ]*([\+\-]\d+)>/i)&&(_0x42d869+=Number(RegExp['$1']),_0x4e5a80+=Number(RegExp['$2']));let _0x716ed7=0xff;if(_0xe53a87[_0x495ad3(0x568)](/<SHOP (?:PICTURE|IMAGE) OPACITY:[ ](\d+)>/i)){if(_0x495ad3(0x360)!=='fueVb'){function _0xa0839e(){const _0x3c2101=_0x495ad3;!_0x3f4ed9&&this[_0x3c2101(0x599)](null,_0x2fb765);if(!this[_0x3c2101(0x49b)]){const _0x4e5272=_0xd4acf8['makeDeepCopy'](this);_0x4e5272[_0x3c2101(0x49b)]=!![],this[_0x3c2101(0x5f0)][_0x3c14a5][_0x3c2101(0x3fa)](null),this['equipAdjustHpMp'](_0x4e5272);}else this[_0x3c2101(0x5f0)][_0x49029d][_0x3c2101(0x3fa)](null);_0x2e680a=!![];}}else _0x716ed7=Number(RegExp['$1']);}else _0xe53a87['match'](/<SHOP (?:PICTURE|IMAGE) OPACITY:[ ](\d+)([%％])>/i)&&(_0x716ed7=Math[_0x495ad3(0x53e)](Number(RegExp['$1'])*0.01*0xff)[_0x495ad3(0x4db)](0x0,0xff));_0x5c62e5['paintOpacity']=_0x716ed7,_0x5c62e5[_0x495ad3(0x5d8)](_0x52e097,0x0,0x0,_0x52e097['width'],_0x52e097[_0x495ad3(0x33f)],_0x42d869,_0x4e5a80,_0x21fc97,_0x1287f7),_0x5c62e5[_0x495ad3(0x5e1)]=0xff;};