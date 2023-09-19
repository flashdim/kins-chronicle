//=============================================================================
// VisuStella MZ - Item Crafting System
// VisuMZ_2_ItemCraftingSys.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_ItemCraftingSys = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ItemCraftingSys = VisuMZ.ItemCraftingSys || {};
VisuMZ.ItemCraftingSys.version = 1.10;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.10] [ItemCraftingSys]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Item_Crafting_System_VisuStella_MZ
 * @base VisuMZ_1_ItemsEquipsCore
 * @orderAfter VisuMZ_1_ItemsEquipsCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Item crafting has become a common feature in many RPG's. However, it is not
 * a feature included by default with RPG Maker MZ. This plugin adds in a scene
 * that supports item crafting, either through the main menu, or through an
 * event initiated command.
 * 
 * Craftable items are normally all available by default, but they can be
 * barred away through switch requirements. Upon crafting items, switches can
 * also be turned on/off to make a progression system if desired.
 * 
 * Item ingredients can be items, weapons, armors, and cost gold as well.
 * Multiple ingredients can be required at a time or just one. Some items can
 * also be set to only be craftable at custom crafting areas.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Adds an item crafting scene to the game.
 * * Item crafting scene can be accessible from the Main Menu or through
 *   event-based Plugin Commands.
 * * Crafting ingredients can consist of items, weapons, armors, and gold.
 * * Crafting specific items can require switches to be turned on in order to
 *   be listed in the crafting list.
 * * Upon crafting specific items, they can also turn on/off other switches,
 *   making a progression system to be possible.
 * * Custom item crafting effects can occur for those who understand JavaScript
 *   to implement.
 * * This plugin can mask the names of uncrafted items, too.
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
 * - VisuMZ_1_ItemsEquipsCore
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 * 
 * === General Notetags ===
 * 
 * These notetags are used to mark the item as a craftable item or as items
 * that can only be crafted through a custom crafting list.
 *
 * ---
 *
 * <Crafting Ingredients>
 *  Item id: x
 *  Item name: x
 *  Weapon id: x
 *  Weapon name: x
 *  Armor id: x
 *  Armor name: x
 *  Gold: x
 *  Category name: x
 * </Crafting Ingredients>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Turns this item/weapon/armor into a craftable item by using the listed
 *   ingredients to craft with.
 * - If the 'Category name' variant is used, it will draw from all items,
 *   weapons, and armors that have matching <Category: x> notetag data.
 * - Insert/delete any number of copies of the ingredients as needed.
 * - Replace 'id' with the item/weapon/armor ID of the ingredient to be used.
 * - Replace 'name' with the name of the item/weapon/armor/category to be used.
 * - Replace 'x' with the number of ingredients needed to be used for crafting.
 * 
 * Category Rules:
 * 
 * - If the 'Category name' variant is used, it will draw from all items,
 *   weapons, and armors that have matching <Category: x> notetag data.
 * - Multiples of the same category name can be used. However, the player must
 *   select different items each time.
 * - If the selected category item already exists as a static ingredient, that
 *   item cannot be selected either.
 * 
 * Examples:
 * 
 * <Crafting Ingredients>
 *  Item 5: 1
 *  Item 6: 3
 *  Gold: 100
 * </Crafting Ingredients>
 * 
 * <Crafting Ingredients>
 *  Item Potion: 1
 *  Item Magic Water: 3
 *  Gold: 100
 * </Crafting Ingredients>
 * 
 * <Crafting Ingredients>
 *  Weapon 1: 4
 *  Armor 2: 2
 * </Crafting Ingredients>
 * 
 * <Crafting Ingredients>
 *  Weapon Sword: 4
 *  Armor Hat: 2
 * </Crafting Ingredients>
 * 
 * <Crafting Ingredients>
 *  Category Fruit: 2
 *  Category Meat: 3
 * </Crafting Ingredients>
 * 
 * ---
 *
 * <Custom Crafting Only>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - This item can only be crafted with custom crafting lists selected through
 *   the Plugin Command.
 *
 * ---
 * 
 * === Switch-Related Notetags ===
 * 
 * These notetags can make item crafting require certain switches to be on,
 * or turn switches on/off upon crafting items.
 *
 * ---
 *
 * <Crafting Show Switch: x>
 * 
 * <Crafting Show All Switches: x,x,x>
 * <Crafting Show Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the visibility of the craftable item in the crafting scene.
 * - Replace 'x' with the switch ID to determine the item's visibility.
 * - If 'All' notetag variant is used, item will be hidden until all switches
 *   are ON. Then, it would be shown.
 * - If 'Any' notetag variant is used, item will be shown if any of the
 *   switches are ON. Otherwise, it would be hidden.
 * - Insert as many switch ID's as needed.
 * - This can be bypassed with the custom Item Crafting list plugin command
 *   option if enabled.
 *
 * ---
 *
 * <Crafting Turn On Switch: x>
 * <Crafting Turn On Switches: x,x,x>
 * 
 * <Crafting Turn Off Switch: x>
 * <Crafting Turn Off Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Upon crafting this item, turn on/off the marked switch(es).
 * - Replace 'x' with the switch ID to turn on/off.
 *
 * ---
 * 
 * === Masking-Related Notetags ===
 * 
 * These notetags can are used to determine name-masking properties for
 * uncrafted items.
 *
 * ---
 *
 * <Crafting Mask: text>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Displays the specific 'text' when the item has not yet been crafted.
 * - Replace 'text' with the text you wish to display if the item has not yet
 *   been crafted by the player.
 * - This can be bypassed with the custom Item Crafting list plugin command
 *   option if enabled.
 *
 * ---
 *
 * <Crafting No Mask>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Bypasses name masking even if the item has not yet been crafted.
 *
 * ---
 * 
 * === JavaScript Notetag: Effect-Related ===
 * 
 * The following are notetags made for users with JavaScript knowledge to
 * make custom effects that occur upon crafting the item.
 *
 * ---
 *
 * <JS Crafting Effect>
 *  code
 *  code
 *  code
 * </JS Crafting Effect>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Replace 'code' with JavaScript code to determine what kinds of effects you
 *   want to occur upon crafting this item.
 * - The 'item' variable represents the item being crafted.
 * - The 'number' variable represents the number of items being crafted.
 *
 * ---
 * 
 * === Crafting Animation-Related Notetags ===
 * 
 * These notetags let you set custom crafting animations when a specific item,
 * weapon, or armor is crafted so that way, they don't all have to use the
 * default crafting animation from the plugin parameters.
 * 
 * ---
 * 
 * <Crafting Animation: id>
 * <Crafting Animation: id, id, id>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - Plays the animation(s) when this item, weapon, or armor is crafted.
 * - This will override the default animation settings found in the plugin
 *   parameters and use the unique one set through notetags instead.
 * - Replace 'id' with the ID of the animation you wish to play.
 * - If multiple ID's are found, then each animation will play one by one in
 *   the order they are listed.
 * 
 * ---
 * 
 * <Crafting Fade Speed: x>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - This determines the speed at which the item's icon fades in during the
 *   crafting animation.
 * - Replace 'x' with a number value to determine how fast the icon fades in.
 * - Use lower numbers for slower fade speeds and higher numbers for faster
 *   fade speeds.
 * 
 * ---
 * 
 * <Crafting Picture: filename>
 * <Picture: filename>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - Uses a picture from your project's /img/pictures/ folder instead of the
 *   item, weapon, or armor's icon during crafting instead.
 * - Replace 'filename' with the filename of the image.
 *   - Do not include the file extension.
 * - Scaling will not apply to the picture.
 * - Use the <Picture: filename> version for any other plugins that may be
 *   using this as an image outside of crafting, too.
 * - The size used for the image will vary based on your game's resolution.
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
 * === Scene ===
 * 
 * ---
 *
 * Scene: Item Crafting (All)
 * - Go to the Item Crafting scene.
 * - All enabled recipes will be available.
 *
 * ---
 *
 * Scene: Item Crafting (Custom)
 * - Go to the Item Crafting scene.
 * - Select specific items to craft here.
 * - Some items can only appear through custom lists like this by using the
 *   <Custom Crafting Only> notetag.
 *
 *   Items:
 *   - Select which Item ID(s) to become craftable.
 *
 *   Weapons:
 *   - Select which Weapon ID(s) to become craftable.
 *
 *   Armors:
 *   - Select which armor ID(s) to become craftable.
 *
 *   Bypass Switches?:
 *   - Bypass any of the requirement switches?
 *
 *   Bypass Masks?:
 *   - Bypass name masking for uncrafted items?
 *
 * ---
 * 
 * === System ===
 * 
 * ---
 *
 * System: Enable Crafting in Menu?
 * - Enables/disables Crafting menu inside the main menu.
 *
 *   Enable/Disable?:
 *   - Enables/disables Crafting menu inside the main menu.
 *
 * ---
 *
 * System: Show Crafting in Menu?
 * - Shows/hides Crafting menu inside the main menu.
 *
 *   Show/Hide?:
 *   - Shows/hides Crafting menu inside the main menu.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General settings pertaining to Item Crafting.
 *
 * ---
 *
 * Scene_ItemCrafting
 * 
 *   Assist Button:
 *   - Text used to for the Button Assist Window's OK button when about ready
 *     to craft an item.
 * 
 *   Crafted Icon:
 *   - Icon used to depict of an item has already been crafted.
 * 
 *   Ingredient Bridge:
 *   - Text used to bridge ingredients in the item crafting scene.
 *
 * ---
 * 
 * Switches
 * 
 *   Switch: Craft:
 *   - Crafting items in Crafting Scene turns this Switch to ON.
 *   - Switch reverts to OFF whenever the Crafting Scene opens.
 * 
 * ---
 * 
 * Categories
 * 
 *   Category Title:
 *   - Text format used for display categories.
 *   - %1 - Category Name, %2 - Needed Quantity
 * 
 *   Selected Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Selected Text:
 *   - This is the add on text that is displayed after an item's name that's
 *     already an ingredient.
 * 
 *   Uncategorized Text:
 *   - Text used for an uncategorized item category.
 * 
 *   Uncategorized Icon:
 *   - Icon used for uncategorized item category.
 * 
 * ---
 *
 * Global JS Effects
 * 
 *   JS: Listing:
 *   - Code that is run globally across all items when checking if an item
 *     should be listed or not.
 * 
 *   JS: Craft Effect:
 *   - Code that is run globally across all items when crafted.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Masking Settings
 * ============================================================================
 *
 * Masking settings related to uncrafted items.
 *
 * ---
 *
 * Masking
 * 
 *   Enable Masking:
 *   - Enable masking for uncrafted items?
 * 
 *   Italics For Masking:
 *   - Use Italics when masking?
 * 
 *   Mask Character:
 *   - Text used for masking per individual character.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Main Menu Settings
 * ============================================================================
 *
 * Main Menu settings for Item Crafting.
 *
 * ---
 *
 * Main Menu
 * 
 *   Command Name:
 *   - Name of the 'Crafting' option in the Main Menu.
 * 
 *   Show in Main Menu?:
 *   - Add the 'Crafting' option to the Main Menu by default?
 * 
 *   Enable in Main Menu?:
 *   - Enable the 'Crafting' option to the Main Menu by default?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Animation Settings
 * ============================================================================
 *
 * Default settings for playing animations after crafting.
 *
 * ---
 *
 * General
 * 
 *   Show Animations?:
 *   - Show animations when crafting an item?
 * 
 *   Show Windows?:
 *   - Show windows during an item crafting animation?
 * 
 *   Default Animations:
 *   - Default animation(s) do you want to play when crafting.
 *
 * ---
 *
 * Sprite
 * 
 *   Scale:
 *   - How big do you want the item sprite to be on screen?
 * 
 *   Fade Speed:
 *   - How fast do you want the item to fade in?
 *
 * ---
 * 
 * ============================================================================
 * Plugin Parameters: Crafting Sound Settings
 * ============================================================================
 *
 * Default settings for the sound effect played when crafting an item.
 *
 * ---
 *
 * Sound
 * 
 *   Filename:
 *   - Filename of the sound effect played.
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
 * Plugin Parameters: Background Settings
 * ============================================================================
 *
 * Background settings for Scene_ItemCrafting.
 *
 * ---
 *
 * Background Settings
 * 
 *   Snapshop Opacity:
 *   - Snapshot opacity for the scene.
 * 
 *   Background 1:
 *   Background 2:
 *   - Filename used for the bottom background image.
 *   - Leave empty if you don't wish to use one.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * Window settings pertaining to Item Crafting.
 *
 * ---
 *
 * Windows
 * 
 *   Requirement Font Size:
 *   - Font size used for requirement quantity.
 * 
 *   Show Tooltips:
 *   - Show tooltips when the mouse hovers over an ingredient?
 * 
 *   Custom Window Skin:
 *   - Select a custom window skin if you want the tooltip window to have one.
 *
 * ---
 *
 * Background Types
 * 
 *   Help Window:
 *   Category Window:
 *   Gold Window:
 *   List Window:
 *   Status Window:
 *   Ingredient Title:
 *   Ingredient List:
 *   Number Window:
 *   Button Assist Window:
 *   - Select background type for the specific window.
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
 * Version 1.10: June 25, 2021
 * * Bug Fixes!
 * ** When exiting out of the ingredients list back towards the item selection
 *    window, the help window should now be properly updated. Fix by Irina.
 * 
 * Version 1.09: March 12, 2021
 * * Bug Fixes!
 * ** Having extra spaces before an ingredient's name should no longer cause
 *    problems to information parsing. Fix made by Irina.
 * 
 * Version 1.08: March 5, 2021
 * * Feature Update!
 * ** Plugin Commands and Item Crafting Scene option will not appear if you do
 *    not have any recipes prepared at all in your game. Update made by Irina.
 * 
 * Version 1.07: February 26, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Irina and sponsored by AndyL:
 * *** Plugin Parameters > General Settings > Switches > Switch: Craft
 * **** Crafting items in Crafting Scene turns this Switch to ON.
 * **** Switch reverts to OFF whenever the Crafting Scene opens.
 * **** This can be used after an "Item Crafting" plugin command to determine
 *      if the player has crafted an item or not.
 * 
 * Version 1.06: December 25, 2020
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetag added by Yanfly.
 * *** <Crafting Picture: filename> and <Picture: filename>
 * **** Uses a picture from your project's /img/pictures/ folder instead of the
 *      item, weapon, or armor's icon during crafting instead.
 * 
 * Version 1.05: November 29, 2020
 * * Bug Fixes!
 * ** If on-screen touch buttons are disabled, they will no longer cause crash
 *    errors. Fix made by Arisu.
 * 
 * Version 1.04: November 15, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.03: November 8, 2020
 * * Feature Update!
 * ** Animations are now more compatible with the sprites. Update by Irina.
 * 
 * Version 1.02: October 25, 2020
 * * Bug Fixes!
 * ** Masked Names no longer show in the number input window. Fixed by Irina.
 * ** Plugin no longer requires a new game to be started in order for Item
 *    Crafting to work for the main menu. Fix made by Irina.
 * ** Touch Button for OK will no longer bypass the item requirements.
 *    Fix made by Irina.
 * ** Uncategorized items will now default to a newly created Uncategorized
 *    list of items. Fix made by Irina.
 * * Documentation Update!
 * ** Plugin Parameters > General is updated with "Uncategorized Text" and
 *    "Uncategorized Icon" for uncategorized items.
 *
 * Version 1.01: October 18, 2020
 * * Feature Update!
 * ** Bounce SFX pitch plugin parameter is now uncapped.
 * * Bug Fixes!
 * ** Color matches no longer crash the game if the matching amount is set to
 *    zero. Bug fixed by Yanfly.
 * ** Selecting a category without modern controls will now activate the list
 *    window. Bug fixed by Yanfly.
 * ** The Category Window no longer disappears when there's only one
 *    category. Bug fixed by Yanfly.
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 *
 * Version 1.00 Official Release Date: November 2, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ItemCraftingSceneOpen
 * @text Scene: Item Crafting (All)
 * @desc Go to the Item Crafting scene.
 * All enabled recipes will be available.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CustomItemCraftingSceneOpen
 * @text Scene: Item Crafting (Custom)
 * @desc Go to the Item Crafting scene.
 * Select specific items to craft here.
 * 
 * @arg Contents
 *
 * @arg Items:arraynum
 * @text Items
 * @type item[]
 * @parent Contents
 * @desc Select which Item ID(s) to become craftable.
 * @default []
 *
 * @arg Weapons:arraynum
 * @text Weapons
 * @type weapon[]
 * @parent Contents
 * @desc Select which Weapon ID(s) to become craftable.
 * @default []
 *
 * @arg Armors:arraynum
 * @text Armors
 * @type armor[]
 * @parent Contents
 * @desc Select which armor ID(s) to become craftable.
 * @default []
 * 
 * @arg Settings
 *
 * @arg BypassSwitches:eval
 * @text Bypass Switches?
 * @parent Settings
 * @type boolean
 * @on Bypass
 * @off Don't Bypass
 * @desc Bypass any of the requirement switches?
 * @default false
 *
 * @arg BypassMasks:eval
 * @text Bypass Masks?
 * @parent Settings
 * @type boolean
 * @on Bypass
 * @off Don't Bypass
 * @desc Bypass name masking for uncrafted items?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemEnableItemCraftingMenu
 * @text System: Enable Crafting in Menu?
 * @desc Enables/disables Crafting menu inside the main menu.
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables/disables Crafting menu inside the main menu.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemShowItemCraftingMenu
 * @text System: Show Crafting in Menu?
 * @desc Shows/hides Crafting menu inside the main menu.
 *
 * @arg Show:eval
 * @text Show/Hide?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows/hides Crafting menu inside the main menu.
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
 * @param ItemCraftingSys
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
 * @desc General settings pertaining to Item Crafting.
 * @default {"Scene":"","CraftAssistButton:str":"Craft","CraftedIcon:num":"223","IngredientBridge:str":"+","Categories":"","CategoryIcon:num":"16","CategoryTitle:str":"Pick %1 Type (Quantity: %2)","SelectedColor:str":"17","SelectedText:str":" (Selected)","Uncategorized:str":"Uncategorized","NoCategoryIcon:num":"160","JS":"","jsGlobalListing:func":"\"// Declare Variables\\nlet item = arguments[0]; // This is the item being crafted.\\nlet listed = true;       // Default listing value.\\n\\n// Perform Checks\\n\\n\\n// Return Boolean\\nreturn listed;\"","jsGlobalCraftEffect:func":"\"// Declare Variables\\nlet item = arguments[0];   // This is the item being crafted.\\nlet number = arguments[1]; // This is the number of them being crafted.\\n\\n// Perform Actions\""}
 *
 * @param Mask:struct
 * @text Masking Settings
 * @type struct<Mask>
 * @desc Masking settings related to uncrafted items.
 * @default {"Enable:eval":"true","MaskItalics:eval":"true","MaskLetter:str":"?"}
 *
 * @param MainMenu:struct
 * @text Main Menu Settings
 * @type struct<MainMenu>
 * @desc Main Menu settings for Item Crafting.
 * @default {"Name:str":"Crafting","ShowMainMenu:eval":"true","EnableMainMenu:eval":"true"}
 * 
 * @param Animation:struct
 * @text Animation Settings
 * @type struct<Animation>
 * @desc Default settings for playing animations after crafting.
 * @default {"General":"","ShowAnimations:eval":"true","ShowWindows:eval":"false","Animations:arraynum":"[\"44\",\"47\"]","Sprite":"","Scale:num":"8.0","FadeSpeed:num":"4"}
 *
 * @param Sound:struct
 * @text Crafting Sound Settings
 * @type struct<Sound>
 * @desc Default settings for the sound effect played when crafting an item.
 * @default {"name:str":"Skill2","volume:num":"90","pitch:num":"100","pan:num":"0"}
 *
 * @param BgSettings:struct
 * @text Background Settings
 * @type struct<BgSettings>
 * @desc Background settings for Scene_ItemCrafting.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc Window settings for Scene_ItemCrafting.
 * The window positions are the same as Scene_Shop.
 * @default {"ReqQuantityFontSize:num":"18","ToolTips:eval":"true","name:str":"","BgTypes":"","HelpBgType:num":"0","CategoryBgType:num":"0","GoldBgType:num":"0","ListBgType:num":"0","StatusBgType:num":"0","IngredientTitle:num":"0","IngredientList:num":"0","NumberBgType:num":"0","ButtonAssistBgType:num":"0"}
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
 * @param Scene
 * @text Scene_ItemCrafting
 *
 * @param CraftAssistButton:str
 * @text Assist Button
 * @parent Scene
 * @desc Text used to for the Button Assist Window's OK button when about ready to craft an item.
 * @default Craft
 *
 * @param CraftedIcon:num
 * @text Crafted Icon
 * @parent Scene
 * @desc Icon used to depict of an item has already been crafted.
 * @default 223
 *
 * @param IngredientBridge:str
 * @text Ingredient Bridge
 * @parent Scene
 * @desc Text used to bridge ingredients in the item crafting scene.
 * @default +
 *
 * @param Switches
 *
 * @param SwitchCraft:num
 * @text Switch: Craft
 * @parent Switches
 * @type switch
 * @desc Crafting items in Crafting Scene turns this Switch to ON.
 * Switch reverts to OFF whenever the Crafting Scene opens.
 * @default 0
 * 
 * @param Categories
 *
 * @param CategoryIcon:num
 * @text Category Icon
 * @parent Categories
 * @desc Icon used for open-ended ingredients.
 * @default 16
 *
 * @param CategoryTitle:str
 * @text Category Title
 * @parent Categories
 * @desc Text format used for display categories.
 * %1 - Category Name, %2 - Needed Quantity
 * @default Pick %1 Type (Quantity: %2)
 *
 * @param SelectedColor:str
 * @text Selected Color
 * @parent Categories
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 17
 *
 * @param SelectedText:str
 * @text Selected Text
 * @parent Categories
 * @desc This is the add on text that is displayed after an
 * item's name that's already an ingredient.
 * @default  (Selected)
 *
 * @param Uncategorized:str
 * @text Uncategorized Text
 * @parent Categories
 * @desc Text used for an uncategorized item category.
 * @default Uncategorized
 *
 * @param NoCategoryIcon:num
 * @text Uncategorized Icon
 * @parent Categories
 * @desc Icon used for uncategorized item category.
 * @default 160
 *
 * @param JS
 * @text Global JS Effects
 *
 * @param jsGlobalListing:func
 * @text JS: Listing
 * @parent JS
 * @type note
 * @desc Code that is run globally across all items when checking if an item should be listed or not.
 * @default "// Declare Variables\nlet item = arguments[0]; // This is the item being crafted.\nlet listed = true;       // Default listing value.\n\n// Perform Checks\n\n\n// Return Boolean\nreturn listed;"
 *
 * @param jsGlobalCraftEffect:func
 * @text JS: Craft Effect
 * @parent JS
 * @type note
 * @desc Code that is run globally across all items when crafted.
 * @default "// Declare Variables\nlet item = arguments[0];   // This is the item being crafted.\nlet number = arguments[1]; // This is the number of them being crafted.\n\n// Perform Actions"
 *
 */
/* ----------------------------------------------------------------------------
 * Masking Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Mask:
 *
 * @param Enable:eval
 * @text Enable Masking
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable masking for uncrafted items?
 * @default true
 *
 * @param MaskItalics:eval
 * @text Italics For Masking
 * @type boolean
 * @on Italics
 * @off Normal
 * @desc Use Italics when masking?
 * @default true
 *
 * @param MaskLetter:str
 * @text Mask Character
 * @desc Text used for masking per individual character.
 * @default ?
 *
 */
/* ----------------------------------------------------------------------------
 * MainMenu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MainMenu:
 *
 * @param Name:str
 * @text Command Name
 * @parent Options
 * @desc Name of the 'Crafting' option in the Main Menu.
 * @default Crafting
 *
 * @param ShowMainMenu:eval
 * @text Show in Main Menu?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Add the 'Crafting' option to the Main Menu by default?
 * @default true
 *
 * @param EnableMainMenu:eval
 * @text Enable in Main Menu?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable the 'Crafting' option to the Main Menu by default?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Animation Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Animation:
 *
 * @param General
 *
 * @param ShowAnimations:eval
 * @text Show Animations?
 * @parent General
 * @type boolean
 * @on Show
 * @off Skip
 * @desc Show animations when crafting an item?
 * @default true
 *
 * @param ShowWindows:eval
 * @text Show Windows?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show windows during an item crafting animation?
 * @default false
 *
 * @param Animations:arraynum
 * @text Default Animations
 * @parent General
 * @type animation[]
 * @desc Default animation(s) do you want to play when crafting.
 * @default ["44","47"]
 *
 * @param Sprite
 * @text Item Sprite
 *
 * @param Scale:num
 * @text Scale
 * @parent Sprite
 * @desc How big do you want the item sprite to be on screen?
 * @default 8.0
 *
 * @param FadeSpeed:num
 * @text Fade Speed
 * @parent Sprite
 * @type number
 * @min 1
 * @desc How fast do you want the item to fade in?
 * @default 4
 *
 */
/* ----------------------------------------------------------------------------
 * Sound Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Sound:
 *
 * @param name:str
 * @text Filename
 * @type file
 * @dir audio/se/
 * @desc Filename of the sound effect played.
 * @default Skill2
 *
 * @param volume:num
 * @text Volume
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param pitch:num
 * @text Pitch
 * @type number
 * @max 100
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param pan:num
 * @text Pan
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Background Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~BgSettings:
 *
 * @param SnapshotOpacity:num
 * @text Snapshop Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc Snapshot opacity for the scene.
 * @default 192
 *
 * @param BgFilename1:str
 * @text Background 1
 * @type file
 * @dir img/titles1/
 * @desc Filename used for the bottom background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @param BgFilename2:str
 * @text Background 2
 * @type file
 * @dir img/titles2/
 * @desc Filename used for the upper background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param ReqQuantityFontSize:num
 * @text Requirement Font Size
 * @parent Windows
 * @desc Font size used for requirement quantity.
 * @default 18
 *
 * @param ToolTips:eval
 * @text Show Tooltips
 * @parent Windows
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show tooltips when the mouse hovers over an ingredient?
 * @default true
 *
 * @param name:str
 * @text Custom Window Skin
 * @parent ToolTips:eval
 * @type file
 * @dir img/system/
 * @desc Select a custom window skin if you want the tooltip window to have one.
 * @default 
 *
 * @param BgTypes
 * @text Background Types
 * @parent Windows
 *
 * @param HelpBgType:num
 * @text Help Window
 * @parent BgTypes
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for the Help Window.
 * @default 0
 *
 * @param CategoryBgType:num
 * @text Category Window
 * @parent BgTypes
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for the Category Window.
 * @default 0
 *
 * @param GoldBgType:num
 * @text Gold Window
 * @parent BgTypes
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for the Gold Window.
 * @default 0
 *
 * @param ListBgType:num
 * @text List Window
 * @parent BgTypes
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for the List Window.
 * @default 0
 *
 * @param StatusBgType:num
 * @text Status Window
 * @parent BgTypes
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for the Status Window.
 * @default 0
 *
 * @param IngredientTitle:num
 * @text Ingredient Title
 * @parent BgTypes
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for the Ingredient Title Window.
 * @default 0
 *
 * @param IngredientList:num
 * @text Ingredient List
 * @parent BgTypes
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for the Ingredient List Window.
 * @default 0
 *
 * @param NumberBgType:num
 * @text Number Window
 * @parent BgTypes
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for the Number Window.
 * @default 0
 *
 * @param ButtonAssistBgType:num
 * @text Button Assist Window
 * @parent BgTypes
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for the Number Window.
 * @default 0
 *
 */
//=============================================================================

const _0x2ff5=['gpDVN','iuDIm','changePaintOpacity','General','_text','isWeapon','Enable','animationIDs','visible','iconIndex','BypassMasks','currencyUnit','_clickHandler','Weapons','scale','createItemSprite','createItemWindowBase','buttonAssistLargeIncrement','scaleSprite','isItemCraftingCommandVisible','itemHeight','baseTextRect','Armors','playStaticSe','createContents','initItemCraftingMainMenu','RzYgW','RegExp','down','resetFontSettings','CoreEngine','innerWidth','addWindow','Vxcnc','isShowNew','create','buttonAssistCategory','ReqQuantityFontSize','applyInverse','doesItemHaveOpenCategories','hasCustomWindowSkin','1rRLBdb','playCancel','cMlDt','setMainMenuItemCraftingVisible','setMainMenuItemCraftingEnabled','ParseItemNotetags','buttonAssistSmallIncrement','createAnimation','gKaim','opacity','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','ARRAYSTR','ARRAYFUNC','isFinishedAnimating','isTouchedInsideFrame','\x5cI[%1]%2','buttonAssistText1','adjustSprite','_ingredientsList','loadPicture','itemAt','update','_category','length','isCraftItemListed','ARRAYSTRUCT','ShowWindows','AyKuL','createAnimationIDs','7CMtfkb','center','buttonAssistItemListRequirement','createGoldWindow','SnapshotOpacity','gold','VYznh','Type','bigPicture','703271hwEkiZ','NumberBgType','note','MDmQr','statusWindowRect','CraftAssistButton','customCraftingOnly','weapon','SystemEnableItemCraftingMenu','status','string','LAEhh','_ItemCrafting_MainMenu','drawTotalPrice','_buttons','selectedIngredientList','changeTextColor','SmHeX','cancel','MhALC','qBIkJ','_number','IconSet','setupNumberWindow','QLiFg','IngredientTitle','_categoryWindow','_animationIDs','setItemSpriteBitmap','RVfZs','CraftedIcon','EVAL','getInputMultiButtonStrings','ShowMainMenu','split','ParseWeaponNotetags','Armor','_backSprite2','isTouchOkEnabled','setItem','Dzuhf','ItemCraftingMenuCommand','ParseAllNotetags','_animationSprite','CheckAnySwitches','updateAnimationSprite','onCategoryOk','uZmNe','getColor','RweAd','buttonAssistText4','process_VisuMZ_ItemCraftingSys_JS_TraitObject_Notetags','enabled','drawItem','Animation','makeFontBigger','windowPadding','addLoadListener','windowskin','gradientFillRect','IxKgH','oLbeh','getItemCraftedTimes','multiplicationSign','item','floor','drawCurrencyValue','_armorIDs','totalPriceY','centerSprite','createJS','setValue','addChild','isReleased','_ingredientAmounts','DEvfm','mNTMO','includes','resetCraftingSwitches','innerHeight','initialize','drawTotalGold','onButtonOk','drawIngredientGold','onNumberCancel','left','MaskItalics','FVUJe','_ingredientSelectTitle','itemLineRect','addCommand','GoldIcon','isPlaying','textWidth','name','_ingredientIndex','drawNumber','loadTitle2','Animations','zLfhp','goldWindowRectItemsEquipsCore','setHelpWindowItem','needsSelection','blt','createStatusWindow','getBackgroundOpacity','createCraftingItemKey','helpWindowRect','fontItalic','Window_ItemCategory_makeCommandList','setup','itemNameY','FsTrk','index','Show','Uncategorized','drawCraftingIngredients','WchXo','removeChild','yzHdg','iCcac','setItemSpriteOpacity','ARRAYJSON','height','opacitySpeed','drawHorzLine','loadSystem','processFinishAnimation','VisuMZ_1_ItemsEquipsCore','buttonAssistKey2','itemCraftedIcon','isSceneBattle','vWQJc','setWindowBackgroundTypes','HelpBgType','push','setHandler','destroyItemSprite','destroyAnimationSprite','SelectedText','NUM','lineHeight','drawCraftingItemName','vNYOV','itemCraftingMask','hide','onItemCrafted','FadeSpeed','_allCraftableItems','UnchF','Weapon','dLAnM','Mask','itemCraftingIngredientsBridge','woMDR','38303ykIVfA','show','getCraftingIngredients','tooltipFrameCheckRequirements','ConvertParams','Scale','isItem','resetTextColor','NAZfF','isMainMenuItemCraftingEnabled','isCraftingItemMasked','MaskLetter','drawText','frames','version','statusWindowRectItemsEquipsCore','postCreateItemWindowModernControls','updateHelp','KhGsD','exit','aboYV','maskItemName','_max','OnSwitches','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','allCraftableItems','makeCommandList','Scene_Menu_createCommandWindow','Name','AnySwitches','filter','1ToSVlh','_itemIDs','SystemShowItemCraftingMenu','updateTooltipWindow','allCraftableWeapons','krcTv','setText','IngredientBridge','xgAYk','itemWindowRect','fillRect','isPlaytest','map','_statusWindow','numItems','EnableMainMenu','concat','HCBjI','checkItemCraftingResultsValid','armors','_windowLayer','bitmap','CjcXn','setItemSpritePosition','itemCrafting','buttonAssistText2','allCraftableArmors','ARRAYNUM','BypassSwitches','drawCraftedIcon','_itemWindow','number','itemPadding','setupSelectIngredientWindow','activate','max','setBackgroundType','jZiko','_backSprite1','LaelT','createBackground','_itemSpriteOpacitySpeed','imageSmoothingEnabled','BgFilename2','createUncategorizedItemCategory','registerCommand','_craftingIngredients','QiTxW','MePDu','setTooltipWindowText','ItemQuantityFmt','WJlFg','_nonCategoryItemCraftingItems','getItemIdWithName','drawIngredientCategory','iconWidth','createCustomBackgroundImages','value','isUseModernControls','Xvjry','isItemCraftingCommandEnabled','CheckAllSwitches','TOKZK','1188523MzxWjL','AllSwitches','scrollTo','worldTransform','tjsNR','CategoryBgType','dimColor2','goldWindowRect','call','onIngredientListCancel','terminate','StatusBgType','onNumberOk','isOkEnabled','addItemCraftingCommand','_scene','maskItalics','drawMultiplicationSign','finishAnimation','JSON','ItemCraftingNoCategory','Window','pop','drawTextEx','sXmBA','clearCustomItemCraftingSettings','setItemWindow','min','loseItem','setCustomItemCraftingSettings','Ysfmc','drawIngredientItem','startAnimation','gSXVe','Parse_Notetags_CreateJS','right','getCustomItemCraftingSettings','_ingredientCategories','helpWindowRectItemsEquipsCore','categoryWindowRect','XVDJf','determineMax','shown','refreshCursor','setBackgroundOpacity','activateItemWindow','createItemWindow','Window_ItemCategory_needsSelection','prototype','playItemCrafting','toLowerCase','textColor','isMVAnimation','BgSettings','ParseArmorNotetags','1056848QvmmIG','drawItemName','drawCurrentItemName','ShopScene','CustomItemCraftingSceneOpen','active','MaskText','drawBigItemIcon','jsGlobalCraftEffect','isTriggered','uwHQe','smoothSelect','drawIcon','_animationPlaying','VaOxf','clone','zlpak','refresh','IngredientList','toKqq','_commandWindow','_customItemCraftingSettings','systemColor','changeOkButtonEnable','Gold','makeItemList','isItemCrafted','_craftPicture','enableCraftingSwitches','GvBpS','createIngredientSelectionTitle','format','contains','setItemSpriteFrame','remove','boxHeight','createCommandWindow','VisuMZ_0_CoreEngine','684445tRTkbz','toUpperCase','WarningMsg','_amount','processItemCrafting','itemRectWithPadding','loadWindowskin','createCraftingIngredientsLists','createTooltipWindow','category','items','_context','#%1','itemCraftingNumberWindowOk','drawPicture','SelectedColor','dOlym','SJDdq','isEnabled','smooth','fontSize','allItems','SJsoJ','ListBgType','process_VisuMZ_ItemCraftingSys_Notetags','ItemScene','_tooltipWindow','Game_System_initialize','setStatusWindow','onDatabaseLoaded','_helpWindow','_allCraftableArmors','initItemCraftingSys','ButtonAssistBgType','all','BgFilename1','zAZjS','isMainMenuItemCraftingVisible','match','TQgDn','uzvdh','onItemOk','craftableWeapons','maxCols','clearUserSelectedIngredients','addItemCraftingCommandAutomatically','TurnSwitches','_iconSprite','boxWidth','244oiJcab','ItemCraftingSceneOpen','Window_MenuCommand_addOriginalCommands','placeButtons','constructor','GnPzw','createNumberWindow','registerCraftedItem','_itemsCrafted','multiplicationSignX','armor','contents','cIDUc','cwaXO','GoldFontSize','gainItem','aoyah','VisuMZ_1_MainMenuCore','Items','_data','zDSMs','hitIndex','ShowAnimations','ItemCraftingSys','shift','isSceneItemCrafting','996nEbKpm','currentCraftableItems','commandItemCrafting','anchor','width','_itemSprite','fittingHeight','1nQpqHj','_buttonAssistWindow','NoCategoryIcon','Ingredients','qBcAH','ytiQp','description','setHelpWindow','addOriginalCommands','1599905tnTYpl','MainMenu','addUncategorizedItemCategory','iconHeight','categories','onItemCancel','powerDownColor','AkphH','bind','updateItemSpriteOpacity','maxItems','_alreadySelected','ItemsEquipsCore','clear','getArmorIdWithName','quantityFontSize','Settings','tooltipSkin','fnZRM','onIngredientListOk','parseCraftingIngredientsData','craftPicture','drawCurrentItemNameMasked','_digitGrouping','drawFadedItemBackground','_item','kcdcv','%1%2','HIUrH','_goldWindow','HUQPi','drawTooltipBackground','MTLua','_ingredientSelectList','craftableArmors','QbONC','isArmor','_weaponIDs','You\x20do\x20not\x20have\x20any\x20craftable\x20items!\x0aRefer\x20to\x20the\x20help\x20file\x20on\x20how\x20to\x20create\x20crafting\x20recipes.','weapons','jsOnCraft','_allCraftableWeapons','addItemCategory','dimColor1','round','parse','trim','SwitchCraft','commandWindowRectItemsEquipsCore','getWeaponIdWithName','categoryList','_maxIngredientsSize','jsGlobalListing','Sound','_numberWindow'];const _0x29fb5d=_0x1330;(function(_0x209e53,_0x18587a){const _0x23b9f4=_0x1330;while(!![]){try{const _0x5564c3=-parseInt(_0x23b9f4(0x2ff))*-parseInt(_0x23b9f4(0x21e))+-parseInt(_0x23b9f4(0x28f))*parseInt(_0x23b9f4(0x275))+-parseInt(_0x23b9f4(0x1e7))*-parseInt(_0x23b9f4(0x3df))+-parseInt(_0x23b9f4(0x244))+-parseInt(_0x23b9f4(0x296))*-parseInt(_0x23b9f4(0x325))+parseInt(_0x23b9f4(0x3c0))*parseInt(_0x23b9f4(0x31c))+-parseInt(_0x23b9f4(0x29f));if(_0x5564c3===_0x18587a)break;else _0x209e53['push'](_0x209e53['shift']());}catch(_0x5253a6){_0x209e53['push'](_0x209e53['shift']());}}}(_0x2ff5,0xa84ed));function _0x1330(_0x3e00b5,_0xe1b315){return _0x1330=function(_0x2ff577,_0x1330a0){_0x2ff577=_0x2ff577-0x1c2;let _0x5b1141=_0x2ff5[_0x2ff577];return _0x5b1141;},_0x1330(_0x3e00b5,_0xe1b315);}var label=_0x29fb5d(0x28c),tier=tier||0x0,dependencies=[_0x29fb5d(0x3a5)],pluginData=$plugins[_0x29fb5d(0x3de)](function(_0x47e213){const _0x3abdff=_0x29fb5d;return _0x47e213[_0x3abdff(0x32e)]&&_0x47e213[_0x3abdff(0x29c)][_0x3abdff(0x372)]('['+label+']');})[0x0];VisuMZ[label][_0x29fb5d(0x2af)]=VisuMZ[label][_0x29fb5d(0x2af)]||{},VisuMZ[_0x29fb5d(0x3c4)]=function(_0x136e9d,_0x5249b4){const _0x2b6f06=_0x29fb5d;for(const _0x53162c in _0x5249b4){if(_0x2b6f06(0x336)!==_0x2b6f06(0x336))this[_0x2b6f06(0x1d9)]();else{if(_0x53162c[_0x2b6f06(0x26a)](/(.*):(.*)/i)){const _0x5af1de=String(RegExp['$1']),_0x23161c=String(RegExp['$2'])[_0x2b6f06(0x245)]()[_0x2b6f06(0x2cd)]();let _0x428e0c,_0x2bc771,_0x5535a5;switch(_0x23161c){case _0x2b6f06(0x3b1):_0x428e0c=_0x5249b4[_0x53162c]!==''?Number(_0x5249b4[_0x53162c]):0x0;break;case _0x2b6f06(0x1c3):_0x2bc771=_0x5249b4[_0x53162c]!==''?JSON['parse'](_0x5249b4[_0x53162c]):[],_0x428e0c=_0x2bc771['map'](_0x309d97=>Number(_0x309d97));break;case _0x2b6f06(0x344):_0x428e0c=_0x5249b4[_0x53162c]!==''?eval(_0x5249b4[_0x53162c]):null;break;case'ARRAYEVAL':_0x2bc771=_0x5249b4[_0x53162c]!==''?JSON[_0x2b6f06(0x2cc)](_0x5249b4[_0x53162c]):[],_0x428e0c=_0x2bc771[_0x2b6f06(0x3eb)](_0x27fb89=>eval(_0x27fb89));break;case _0x2b6f06(0x1fa):_0x428e0c=_0x5249b4[_0x53162c]!==''?JSON[_0x2b6f06(0x2cc)](_0x5249b4[_0x53162c]):'';break;case _0x2b6f06(0x39f):_0x2bc771=_0x5249b4[_0x53162c]!==''?JSON['parse'](_0x5249b4[_0x53162c]):[],_0x428e0c=_0x2bc771[_0x2b6f06(0x3eb)](_0x3de936=>JSON['parse'](_0x3de936));break;case'FUNC':_0x428e0c=_0x5249b4[_0x53162c]!==''?new Function(JSON[_0x2b6f06(0x2cc)](_0x5249b4[_0x53162c])):new Function('return\x200');break;case _0x2b6f06(0x30b):_0x2bc771=_0x5249b4[_0x53162c]!==''?JSON['parse'](_0x5249b4[_0x53162c]):[],_0x428e0c=_0x2bc771[_0x2b6f06(0x3eb)](_0x19b163=>new Function(JSON['parse'](_0x19b163)));break;case'STR':_0x428e0c=_0x5249b4[_0x53162c]!==''?String(_0x5249b4[_0x53162c]):'';break;case _0x2b6f06(0x30a):_0x2bc771=_0x5249b4[_0x53162c]!==''?JSON[_0x2b6f06(0x2cc)](_0x5249b4[_0x53162c]):[],_0x428e0c=_0x2bc771[_0x2b6f06(0x3eb)](_0x3a9773=>String(_0x3a9773));break;case'STRUCT':_0x5535a5=_0x5249b4[_0x53162c]!==''?JSON['parse'](_0x5249b4[_0x53162c]):{},_0x428e0c=VisuMZ[_0x2b6f06(0x3c4)]({},_0x5535a5);break;case _0x2b6f06(0x318):_0x2bc771=_0x5249b4[_0x53162c]!==''?JSON[_0x2b6f06(0x2cc)](_0x5249b4[_0x53162c]):[],_0x428e0c=_0x2bc771[_0x2b6f06(0x3eb)](_0x4d8e4a=>VisuMZ[_0x2b6f06(0x3c4)]({},JSON[_0x2b6f06(0x2cc)](_0x4d8e4a)));break;default:continue;}_0x136e9d[_0x5af1de]=_0x428e0c;}}}return _0x136e9d;},(_0x5ba154=>{const _0x315134=_0x29fb5d,_0x20e586=_0x5ba154[_0x315134(0x383)];for(const _0xfc3145 of dependencies){if(!Imported[_0xfc3145]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x315134(0x23d)](_0x20e586,_0xfc3145)),SceneManager[_0x315134(0x3d3)]();break;}}const _0x136d9a=_0x5ba154[_0x315134(0x29c)];if(_0x136d9a[_0x315134(0x26a)](/\[Version[ ](.*?)\]/i)){const _0x3aa1c3=Number(RegExp['$1']);_0x3aa1c3!==VisuMZ[label][_0x315134(0x3ce)]&&(alert(_0x315134(0x309)['format'](_0x20e586,_0x3aa1c3)),SceneManager[_0x315134(0x3d3)]());}if(_0x136d9a[_0x315134(0x26a)](/\[Tier[ ](\d+)\]/i)){const _0x135b0a=Number(RegExp['$1']);if(_0x135b0a<tier)alert(_0x315134(0x3d8)[_0x315134(0x23d)](_0x20e586,_0x135b0a,tier)),SceneManager[_0x315134(0x3d3)]();else{if(_0x315134(0x22c)==='VaOxf')tier=Math[_0x315134(0x1cb)](_0x135b0a,tier);else return this[_0x315134(0x2d5)]&&this[_0x315134(0x2d5)][_0x315134(0x223)]?_0x258dba[_0x315134(0x251)]:_0x307f1f[_0x315134(0x217)][_0x315134(0x357)][_0x315134(0x1ef)](this);}}VisuMZ['ConvertParams'](VisuMZ[label][_0x315134(0x2af)],_0x5ba154['parameters']);})(pluginData),VisuMZ[_0x29fb5d(0x28c)][_0x29fb5d(0x246)]=_0x29fb5d(0x2c5),PluginManager[_0x29fb5d(0x1d5)](pluginData[_0x29fb5d(0x383)],_0x29fb5d(0x276),_0x4018d3=>{const _0x2ba434=_0x29fb5d;if(SceneManager[_0x2ba434(0x3a8)]())return;if(SceneManager[_0x2ba434(0x28e)]())return;if(DataManager[_0x2ba434(0x290)]()[_0x2ba434(0x316)]<=0x0){$gameTemp['isPlaytest']()&&alert(VisuMZ[_0x2ba434(0x28c)][_0x2ba434(0x246)]);return;}SceneManager[_0x2ba434(0x3ac)](Scene_ItemCrafting);}),PluginManager[_0x29fb5d(0x1d5)](pluginData[_0x29fb5d(0x383)],_0x29fb5d(0x222),_0x25514d=>{const _0x2b2d28=_0x29fb5d;if(SceneManager[_0x2b2d28(0x3a8)]())return;if(SceneManager[_0x2b2d28(0x28e)]())return;VisuMZ[_0x2b2d28(0x3c4)](_0x25514d,_0x25514d);const _0x4a1788={'items':_0x25514d[_0x2b2d28(0x287)][_0x2b2d28(0x3eb)](_0x23735f=>$dataItems[_0x23735f])[_0x2b2d28(0x3de)](_0x35c15b=>DataManager[_0x2b2d28(0x3d9)]()[_0x2b2d28(0x372)](_0x35c15b)),'weapons':_0x25514d[_0x2b2d28(0x2e3)][_0x2b2d28(0x3eb)](_0x2c3195=>$dataWeapons[_0x2c3195])[_0x2b2d28(0x3de)](_0x44eac4=>DataManager[_0x2b2d28(0x3e3)]()['includes'](_0x44eac4)),'armors':_0x25514d[_0x2b2d28(0x2ec)][_0x2b2d28(0x3eb)](_0x3b7dcc=>$dataArmors[_0x3b7dcc])['filter'](_0x51b240=>DataManager[_0x2b2d28(0x1c2)]()[_0x2b2d28(0x372)](_0x51b240)),'BypassSwitches':_0x25514d[_0x2b2d28(0x1c4)],'BypassMasks':_0x25514d[_0x2b2d28(0x2e0)]};_0x4a1788[_0x2b2d28(0x266)]=_0x4a1788[_0x2b2d28(0x24e)][_0x2b2d28(0x3ef)](_0x4a1788['weapons'],_0x4a1788[_0x2b2d28(0x3f2)]);if(_0x4a1788[_0x2b2d28(0x266)]['length']<=0x0){if($gameTemp['isPlaytest']()){if(_0x2b2d28(0x1cd)===_0x2b2d28(0x1cd))alert(VisuMZ[_0x2b2d28(0x28c)][_0x2b2d28(0x246)]);else{const _0x152fce=this[_0x2b2d28(0x365)]()&&_0x39106c[_0x2b2d28(0x3ca)](this[_0x2b2d28(0x365)]())?null:this[_0x2b2d28(0x365)]();this[_0x2b2d28(0x38a)](_0x152fce),this[_0x2b2d28(0x3ec)]&&this[_0x2b2d28(0x3ec)][_0x2b2d28(0x279)]===_0x3a60d8&&this[_0x2b2d28(0x3ec)][_0x2b2d28(0x34c)](_0x152fce);}}return;}$gameTemp[_0x2b2d28(0x204)](_0x4a1788),SceneManager['push'](Scene_ItemCrafting);}),PluginManager[_0x29fb5d(0x1d5)](pluginData['name'],_0x29fb5d(0x32d),_0x37cb5d=>{const _0x4c8200=_0x29fb5d;VisuMZ[_0x4c8200(0x3c4)](_0x37cb5d,_0x37cb5d),$gameSystem['setMainMenuItemCraftingEnabled'](_0x37cb5d['Enable']);}),PluginManager[_0x29fb5d(0x1d5)](pluginData[_0x29fb5d(0x383)],_0x29fb5d(0x3e1),_0x67033f=>{const _0x472000=_0x29fb5d;VisuMZ[_0x472000(0x3c4)](_0x67033f,_0x67033f),$gameSystem[_0x472000(0x302)](_0x67033f[_0x472000(0x397)]);}),VisuMZ[_0x29fb5d(0x28c)]['Scene_Boot_onDatabaseLoaded']=Scene_Boot['prototype'][_0x29fb5d(0x261)],Scene_Boot[_0x29fb5d(0x217)]['onDatabaseLoaded']=function(){const _0x146f64=_0x29fb5d;VisuMZ['ItemCraftingSys']['Scene_Boot_onDatabaseLoaded'][_0x146f64(0x1ef)](this),this[_0x146f64(0x25c)]();},Scene_Boot[_0x29fb5d(0x217)][_0x29fb5d(0x25c)]=function(){const _0xe136d1=_0x29fb5d;this[_0xe136d1(0x358)]();},VisuMZ[_0x29fb5d(0x28c)][_0x29fb5d(0x2f1)]={'Ingredients':/<(?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) INGREDIENTS>\s*([\s\S]*)\s*<\/(?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) INGREDIENTS>/i,'AllSwitches':/<(?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) SHOW (?:SWITCH|SWITCHES|ALL SWITCH|ALL SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/gi,'AnySwitches':/<(?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) SHOW (?:ANY SWITCH|ANY SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/gi,'OnSwitches':/<(?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) TURN ON (?:SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/gi,'OffSwitches':/<(?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) TURN OFF (?:SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/gi,'MaskText':/<(?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) MASK:[ ](.*)>/i,'NoMask':/<(?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) NO MASK>/i,'customCraftingOnly':/<CUSTOM (?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) ONLY>/i,'jsOnCraft':/<JS (?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) EFFECT>\s*([\s\S]*)\s*<\/JS (?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) EFFECT>/i,'animationIDs':/<(?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) (?:ANIMATION|ANIMATIONS|ANI):[ ](.*)>/i,'opacitySpeed':/<(?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) FADE SPEED:[ ](\d+)>/i,'craftPicture':/<(?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) (?:PICTURE|FILENAME):[ ](.*)>/i,'bigPicture':/<PICTURE:[ ](.*)>/i},Scene_Boot[_0x29fb5d(0x217)][_0x29fb5d(0x358)]=function(){const _0x4e46fa=_0x29fb5d;if(VisuMZ[_0x4e46fa(0x34f)])return;const _0x55ca46=$dataItems[_0x4e46fa(0x3ef)]($dataWeapons,$dataArmors);for(const _0x358a7e of _0x55ca46){if(_0x4e46fa(0x26c)===_0x4e46fa(0x370))_0x4468dd[_0x4e46fa(0x217)][_0x4e46fa(0x375)][_0x4e46fa(0x1ef)](this,_0x4e19f1),this[_0x4e46fa(0x24c)]();else{if(!_0x358a7e)continue;VisuMZ[_0x4e46fa(0x28c)]['Parse_Notetags_CreateJS'](_0x358a7e);}}},VisuMZ['ItemCraftingSys']['ParseItemNotetags']=VisuMZ[_0x29fb5d(0x304)],VisuMZ['ParseItemNotetags']=function(_0x31cee2){const _0x4f2d72=_0x29fb5d;VisuMZ[_0x4f2d72(0x28c)][_0x4f2d72(0x304)]['call'](this,_0x31cee2),VisuMZ[_0x4f2d72(0x28c)][_0x4f2d72(0x209)](_0x31cee2);},VisuMZ[_0x29fb5d(0x28c)]['ParseWeaponNotetags']=VisuMZ[_0x29fb5d(0x348)],VisuMZ[_0x29fb5d(0x348)]=function(_0x1c25b2){const _0x1b88af=_0x29fb5d;VisuMZ['ItemCraftingSys'][_0x1b88af(0x348)]['call'](this,_0x1c25b2),VisuMZ[_0x1b88af(0x28c)][_0x1b88af(0x209)](_0x1c25b2);},VisuMZ[_0x29fb5d(0x28c)][_0x29fb5d(0x21d)]=VisuMZ[_0x29fb5d(0x21d)],VisuMZ['ParseArmorNotetags']=function(_0x4ae362){const _0x201c8d=_0x29fb5d;VisuMZ['ItemCraftingSys'][_0x201c8d(0x21d)][_0x201c8d(0x1ef)](this,_0x4ae362),VisuMZ[_0x201c8d(0x28c)][_0x201c8d(0x209)](_0x4ae362);},VisuMZ[_0x29fb5d(0x28c)][_0x29fb5d(0x209)]=function(_0x2cde8a){const _0x9964a2=_0x29fb5d;_0x2cde8a[_0x9964a2(0x327)]['match'](VisuMZ[_0x9964a2(0x28c)][_0x9964a2(0x2f1)][_0x9964a2(0x2c7)])&&('pwHEL'==='ifjKP'?_0xdae1c7['push']([_0x3a08d4[_0x3f0ab5],_0x3b09b3]):VisuMZ[_0x9964a2(0x28c)][_0x9964a2(0x36b)](_0x2cde8a,RegExp['$1']));},VisuMZ[_0x29fb5d(0x28c)]['JS']={},VisuMZ['ItemCraftingSys'][_0x29fb5d(0x36b)]=function(_0x50882a,_0x1f43c4){const _0x154572=_0x29fb5d,_0x2858ff='\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Arguments\x0a\x20\x20\x20\x20\x20\x20\x20\x20let\x20item\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20let\x20number\x20=\x20arguments[1];\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20'[_0x154572(0x23d)](_0x1f43c4),_0x37a511=DataManager[_0x154572(0x38f)](_0x50882a);VisuMZ['ItemCraftingSys']['JS'][_0x37a511]=new Function(_0x2858ff);},DataManager['isCraftItemListed']=function(_0xe62087){const _0x541f54=_0x29fb5d;if(!_0xe62087)return![];if(DataManager[_0x541f54(0x3c2)](_0xe62087)[_0x541f54(0x316)]<=0x0)return![];if(_0xe62087[_0x541f54(0x327)]['match'](VisuMZ[_0x541f54(0x28c)][_0x541f54(0x2f1)][_0x541f54(0x32b)])){if(_0x541f54(0x231)==='toKqq'){if(!$gameTemp[_0x541f54(0x20b)]())return![];}else this['_categoryWindow'][_0x541f54(0x1cc)](_0x5a696d[_0x541f54(0x1ec)]);}if(!VisuMZ[_0x541f54(0x28c)][_0x541f54(0x2af)][_0x541f54(0x2d9)][_0x541f54(0x2d3)][_0x541f54(0x1ef)](this,_0xe62087))return![];if(!VisuMZ[_0x541f54(0x28c)]['CheckAllSwitches'](_0xe62087))return![];if(!VisuMZ[_0x541f54(0x28c)][_0x541f54(0x351)](_0xe62087))return![];return!![];},VisuMZ[_0x29fb5d(0x28c)][_0x29fb5d(0x1e5)]=function(_0x456207){const _0x95e052=_0x29fb5d,_0x4be06a=$gameTemp['getCustomItemCraftingSettings']();if(_0x4be06a&&_0x4be06a[_0x95e052(0x1c4)])return!![];const _0x260c5a=VisuMZ['ItemCraftingSys']['RegExp'][_0x95e052(0x1e8)],_0x599d2e=_0x456207[_0x95e052(0x327)][_0x95e052(0x26a)](_0x260c5a);if(_0x599d2e)for(const _0x3c29ec of _0x599d2e){if(!_0x3c29ec)continue;_0x3c29ec['match'](_0x260c5a);const _0x54fd4a=JSON[_0x95e052(0x2cc)]('['+RegExp['$1'][_0x95e052(0x26a)](/\d+/g)+']');for(const _0x4c2905 of _0x54fd4a){if(_0x95e052(0x23b)===_0x95e052(0x31a)){if(!this[_0x95e052(0x25e)])return;this[_0x95e052(0x3c3)]()?this['setTooltipWindowText']():this[_0x95e052(0x25e)]['setText']('');const _0x5b5d81=new _0x4e5407(_0x595216['x'],_0x1e6579['y']),_0x364eca=this[_0x95e052(0x1ea)][_0x95e052(0x2fc)](_0x5b5d81);this[_0x95e052(0x25e)]['x']=_0x364eca['x']-this['_tooltipWindow'][_0x95e052(0x293)]/0x2,this[_0x95e052(0x25e)]['y']=_0x364eca['y']-this[_0x95e052(0x25e)]['height'];}else{if(!$gameSwitches[_0x95e052(0x1e1)](_0x4c2905))return![];}}}return!![];},VisuMZ[_0x29fb5d(0x28c)][_0x29fb5d(0x351)]=function(_0x1a4e78){const _0x4ce1ae=_0x29fb5d,_0x5d3bd1=$gameTemp[_0x4ce1ae(0x20b)]();if(_0x5d3bd1&&_0x5d3bd1[_0x4ce1ae(0x1c4)])return!![];const _0x470fd4=VisuMZ[_0x4ce1ae(0x28c)][_0x4ce1ae(0x2f1)][_0x4ce1ae(0x3dd)],_0x5f28da=_0x1a4e78[_0x4ce1ae(0x327)][_0x4ce1ae(0x26a)](_0x470fd4);if(_0x5f28da){for(const _0x1366af of _0x5f28da){if(_0x4ce1ae(0x338)!==_0x4ce1ae(0x362)){if(!_0x1366af)continue;_0x1366af[_0x4ce1ae(0x26a)](_0x470fd4);const _0x4b189b=JSON[_0x4ce1ae(0x2cc)]('['+RegExp['$1'][_0x4ce1ae(0x26a)](/\d+/g)+']');for(const _0x57b68d of _0x4b189b){if($gameSwitches[_0x4ce1ae(0x1e1)](_0x57b68d))return!![];}}else this['_itemWindow'][_0x4ce1ae(0x1ca)](),this[_0x4ce1ae(0x1c6)][_0x4ce1ae(0x229)](0x0);}return![];}return!![];},DataManager['currentCraftableItems']=function(){const _0x3a1bc7=_0x29fb5d,_0xfcc1c8=$gameTemp[_0x3a1bc7(0x20b)]();if(_0xfcc1c8)return _0xfcc1c8[_0x3a1bc7(0x266)][_0x3a1bc7(0x3de)](_0x5f59ed=>this['isCraftItemListed'](_0x5f59ed));const _0x3c89a5=this['craftableItems'](),_0x1313a2=this[_0x3a1bc7(0x26e)](),_0x3cd6c6=this[_0x3a1bc7(0x2c1)]();return _0x3c89a5[_0x3a1bc7(0x3ef)](_0x1313a2,_0x3cd6c6);},DataManager['craftableItems']=function(){const _0x3afa78=_0x29fb5d;return this[_0x3afa78(0x3d9)]()['filter'](_0x416601=>this[_0x3afa78(0x317)](_0x416601));},DataManager[_0x29fb5d(0x3d9)]=function(){const _0x5a756c=_0x29fb5d;if(this[_0x5a756c(0x3b9)]!==undefined)return this[_0x5a756c(0x3b9)];this[_0x5a756c(0x3b9)]=[];for(const _0x4fb898 of $dataItems){if(!_0x4fb898)continue;_0x4fb898[_0x5a756c(0x327)][_0x5a756c(0x26a)](VisuMZ[_0x5a756c(0x28c)][_0x5a756c(0x2f1)]['Ingredients'])&&this['_allCraftableItems'][_0x5a756c(0x3ac)](_0x4fb898);}return this[_0x5a756c(0x3b9)];},DataManager[_0x29fb5d(0x26e)]=function(){const _0x475f39=_0x29fb5d;return this[_0x475f39(0x3e3)]()[_0x475f39(0x3de)](_0x4341a8=>this[_0x475f39(0x317)](_0x4341a8));},DataManager['allCraftableWeapons']=function(){const _0x432c50=_0x29fb5d;if(this[_0x432c50(0x2c8)]!==undefined)return this[_0x432c50(0x2c8)];this[_0x432c50(0x2c8)]=[];for(const _0x104280 of $dataWeapons){if(!_0x104280)continue;_0x104280['note'][_0x432c50(0x26a)](VisuMZ[_0x432c50(0x28c)][_0x432c50(0x2f1)][_0x432c50(0x299)])&&('CjcXn'!==_0x432c50(0x3f5)?_0x11da27[_0x432c50(0x2b0)]!==''?this[_0x432c50(0x35f)]=_0x1f583a['loadSystem'](_0x2f49a7[_0x432c50(0x2b0)]):_0x4528d4[_0x432c50(0x217)][_0x432c50(0x24a)]['call'](this):this['_allCraftableWeapons'][_0x432c50(0x3ac)](_0x104280));}return this['_allCraftableWeapons'];},DataManager[_0x29fb5d(0x2c1)]=function(){const _0x29ac11=_0x29fb5d;return this[_0x29ac11(0x1c2)]()['filter'](_0x26bb81=>this[_0x29ac11(0x317)](_0x26bb81));},DataManager[_0x29fb5d(0x1c2)]=function(){const _0x4f1e75=_0x29fb5d;if(this[_0x4f1e75(0x263)]!==undefined)return this['_allCraftableArmors'];this[_0x4f1e75(0x263)]=[];for(const _0x4cc5d2 of $dataArmors){if(_0x4f1e75(0x29a)!=='hPHKb'){if(!_0x4cc5d2)continue;_0x4cc5d2[_0x4f1e75(0x327)][_0x4f1e75(0x26a)](VisuMZ['ItemCraftingSys'][_0x4f1e75(0x2f1)][_0x4f1e75(0x299)])&&('lPskX'!==_0x4f1e75(0x3b4)?this['_allCraftableArmors']['push'](_0x4cc5d2):(_0x19f19e[_0x4f1e75(0x217)][_0x4f1e75(0x375)]['call'](this,_0x1480ed),this[_0x4f1e75(0x1cc)](this[_0x4f1e75(0x2fe)]()?0x0:0x2),this['setText']('')));}else this[_0x4f1e75(0x37d)][_0x4f1e75(0x3b6)](),this['_ingredientSelectList']['hide'](),this[_0x4f1e75(0x33f)][_0x4f1e75(0x3c1)](),this[_0x4f1e75(0x2d5)][_0x4f1e75(0x393)](this['_item']),this['_numberWindow'][_0x4f1e75(0x3c1)](),this[_0x4f1e75(0x2d5)]['activate']();}return this[_0x4f1e75(0x263)];},DataManager[_0x29fb5d(0x3c2)]=function(_0x10f282){const _0x39a532=_0x29fb5d;if(!_0x10f282)return[];const _0x4fb24d=this[_0x39a532(0x38f)](_0x10f282);return this['_craftingIngredients']===undefined&&this[_0x39a532(0x24b)](),this['_craftingIngredients'][_0x4fb24d]||[];},DataManager[_0x29fb5d(0x38f)]=function(_0x5a0664){const _0x43fc7b=_0x29fb5d;let _0x1cebb4=_0x43fc7b(0x2ba);if(this[_0x43fc7b(0x3c6)](_0x5a0664))return _0x1cebb4['format']('Item',_0x5a0664['id']);if(this['isWeapon'](_0x5a0664))return _0x1cebb4[_0x43fc7b(0x23d)](_0x43fc7b(0x3bb),_0x5a0664['id']);if(this[_0x43fc7b(0x2c3)](_0x5a0664))return _0x1cebb4['format'](_0x43fc7b(0x349),_0x5a0664['id']);return'';},DataManager['createCraftingIngredientsLists']=function(){const _0x550203=_0x29fb5d;this[_0x550203(0x1d6)]={};const _0x32f213=$dataItems[_0x550203(0x3ef)]($dataWeapons,$dataArmors);for(const _0x3624ea of _0x32f213){if(!_0x3624ea)continue;if(_0x3624ea['note'][_0x550203(0x26a)](VisuMZ[_0x550203(0x28c)][_0x550203(0x2f1)][_0x550203(0x299)])){const _0xf856c1=String(RegExp['$1'])[_0x550203(0x347)](/[\r\n]+/),_0x500f8a=this[_0x550203(0x2b3)](_0x3624ea,_0xf856c1);if(_0x500f8a[_0x550203(0x316)]<=0x0)continue;const _0x375568=this[_0x550203(0x38f)](_0x3624ea);this['_craftingIngredients'][_0x375568]=_0x500f8a;}}},DataManager['parseCraftingIngredientsData']=function(_0x394167,_0xc1c6df){const _0x5402af=_0x29fb5d;let _0x47c7bf=[];for(let _0x50dc47 of _0xc1c6df){_0x50dc47=_0x50dc47[_0x5402af(0x2cd)]();if(_0x50dc47['match'](/GOLD:[ ](\d+)/i))_0x47c7bf[_0x5402af(0x3ac)]([_0x5402af(0x321),Number(RegExp['$1'])]);else{if(_0x50dc47['match'](/CATEGORY[ ](.*):[ ](\d+)/i)){const _0x537d83=String(RegExp['$1'])['trim'](),_0x36707d=Number(RegExp['$2'])||0x1,_0x5d0321='category:\x20%1'[_0x5402af(0x23d)](_0x537d83);_0x47c7bf['push']([_0x5d0321,_0x36707d]);}else{if(_0x50dc47[_0x5402af(0x26a)](/(.*?)[ ](\d+):[ ](\d+)/i)){if(_0x5402af(0x356)===_0x5402af(0x228)){if(this[_0x5402af(0x2aa)]){const _0x11802b=_0x4b7b28[_0x5402af(0x28c)][_0x5402af(0x2af)][_0x5402af(0x2d9)];this[_0x5402af(0x280)][_0x5402af(0x21a)]=_0x3a60ac['getColor'](_0x11802b[_0x5402af(0x253)]),_0x357eaa+=_0x11802b['SelectedText'];}_0x1fc83e[_0x5402af(0x217)][_0x5402af(0x3cc)][_0x5402af(0x1ef)](this,_0x1fec44,_0x100951,_0x2ec61a,_0x29fe13,_0x1e755e);}else{const _0x5d90f9=RegExp['$1'][_0x5402af(0x219)]()[_0x5402af(0x2cd)](),_0x210768=Number(RegExp['$2'])||0x0,_0x5aa62a=Number(RegExp['$3'])||0x1;let _0x4ccc36=null;if([_0x5402af(0x365),_0x5402af(0x24e)]['includes'](_0x5d90f9))_0x4ccc36=$dataItems;if(['weapon',_0x5402af(0x2c6)][_0x5402af(0x372)](_0x5d90f9))_0x4ccc36=$dataWeapons;if([_0x5402af(0x27f),_0x5402af(0x3f2)][_0x5402af(0x372)](_0x5d90f9))_0x4ccc36=$dataArmors;this[_0x5402af(0x3f1)](_0x394167,_0x4ccc36,_0x210768,_0x47c7bf)&&_0x47c7bf[_0x5402af(0x3ac)]([_0x4ccc36[_0x210768],_0x5aa62a]);}}else{if(_0x50dc47[_0x5402af(0x26a)](/(.*?)[ ](.*):[ ](\d+)/i)){const _0x4369b3=RegExp['$1']['toLowerCase']()[_0x5402af(0x2cd)](),_0x17f9bf=RegExp['$2']['trim'](),_0x1ee274=Number(RegExp['$3'])||0x1;let _0x5740fc=null,_0x350ffa=0x0;['item',_0x5402af(0x24e)][_0x5402af(0x372)](_0x4369b3)&&(_0x5740fc=$dataItems,_0x350ffa=this[_0x5402af(0x1dd)](_0x17f9bf)),[_0x5402af(0x32c),_0x5402af(0x2c6)]['includes'](_0x4369b3)&&(_0x5740fc=$dataWeapons,_0x350ffa=this[_0x5402af(0x2d0)](_0x17f9bf)),['armor','armors']['includes'](_0x4369b3)&&(_0x5402af(0x33d)===_0x5402af(0x361)?_0x3abeca[_0x5402af(0x217)][_0x5402af(0x220)][_0x5402af(0x1ef)](this):(_0x5740fc=$dataArmors,_0x350ffa=this['getArmorIdWithName'](_0x17f9bf))),this[_0x5402af(0x3f1)](_0x394167,_0x5740fc,_0x350ffa,_0x47c7bf)&&_0x47c7bf[_0x5402af(0x3ac)]([_0x5740fc[_0x350ffa],_0x1ee274]);}}}}}return _0x47c7bf;},DataManager[_0x29fb5d(0x3f1)]=function(_0x4bb8cb,_0x337362,_0x27ccb6,_0x428e84){if(!_0x337362)return![];if(!_0x337362[_0x27ccb6])return![];const _0x52c900=_0x337362[_0x27ccb6];if(_0x52c900===_0x4bb8cb)return![];for(const _0x5cb2f4 of _0x428e84){if(!_0x5cb2f4)continue;if(_0x5cb2f4[0x0]===_0x52c900)return![];}return!![];},DataManager[_0x29fb5d(0x1dd)]=function(_0x1af13c){const _0x2c9473=_0x29fb5d;_0x1af13c=_0x1af13c['toUpperCase']()[_0x2c9473(0x2cd)](),this[_0x2c9473(0x3e0)]=this[_0x2c9473(0x3e0)]||{};if(this[_0x2c9473(0x3e0)][_0x1af13c])return this[_0x2c9473(0x3e0)][_0x1af13c];for(const _0xf8936 of $dataItems){if(!_0xf8936)continue;this['_itemIDs'][_0xf8936['name'][_0x2c9473(0x245)]()['trim']()]=_0xf8936['id'];}return this['_itemIDs'][_0x1af13c]||0x0;},DataManager['getWeaponIdWithName']=function(_0x480230){const _0x29a02e=_0x29fb5d;_0x480230=_0x480230[_0x29a02e(0x245)]()[_0x29a02e(0x2cd)](),this[_0x29a02e(0x2c4)]=this[_0x29a02e(0x2c4)]||{};if(this[_0x29a02e(0x2c4)][_0x480230])return this[_0x29a02e(0x2c4)][_0x480230];for(const _0x1db404 of $dataWeapons){if('aCYsH'==='aCYsH'){if(!_0x1db404)continue;this[_0x29a02e(0x2c4)][_0x1db404[_0x29a02e(0x383)][_0x29a02e(0x245)]()['trim']()]=_0x1db404['id'];}else{const _0x1bd973=_0x783d51[_0x44c22b];if(!_0x1bd973)return;const _0x507d02=this[_0x29a02e(0x21b)](_0x1bd973);this[_0x29a02e(0x350)]=new(_0x507d02?_0x3b463f:_0x428b2a)();const _0x393a01=[this[_0x29a02e(0x294)]],_0x6600c0=0x0;this[_0x29a02e(0x350)][_0x29a02e(0x393)](_0x393a01,_0x1bd973,![],_0x6600c0,null),this[_0x29a02e(0x36d)](this['_animationSprite']);}}return this['_weaponIDs'][_0x480230]||0x0;},DataManager['getArmorIdWithName']=function(_0x2d5a1e){const _0x3d43f0=_0x29fb5d;_0x2d5a1e=_0x2d5a1e[_0x3d43f0(0x245)]()[_0x3d43f0(0x2cd)](),this[_0x3d43f0(0x368)]=this[_0x3d43f0(0x368)]||{};if(this[_0x3d43f0(0x368)][_0x2d5a1e])return this['_armorIDs'][_0x2d5a1e];for(const _0x35d936 of $dataArmors){if(_0x3d43f0(0x342)===_0x3d43f0(0x342)){if(!_0x35d936)continue;this[_0x3d43f0(0x368)][_0x35d936[_0x3d43f0(0x383)]['toUpperCase']()['trim']()]=_0x35d936['id'];}else{if(!_0x14b34a)return![];if(this['selectedIngredientList']()[_0x3d43f0(0x372)](_0x183720))return![];return _0x533ec4[_0x3d43f0(0x3ed)](_0x3e2cce)>=this['_amount'];}}return this[_0x3d43f0(0x368)][_0x2d5a1e]||0x0;},DataManager[_0x29fb5d(0x3ca)]=function(_0x2596f8){const _0x4a1667=_0x29fb5d;if(!_0x2596f8)return![];if(!VisuMZ[_0x4a1667(0x28c)][_0x4a1667(0x2af)][_0x4a1667(0x3bd)][_0x4a1667(0x2dc)])return![];const _0x59f8ee=$gameTemp[_0x4a1667(0x20b)]();if(_0x59f8ee&&_0x59f8ee[_0x4a1667(0x2e0)])return![];if(_0x2596f8[_0x4a1667(0x327)][_0x4a1667(0x26a)](VisuMZ[_0x4a1667(0x28c)][_0x4a1667(0x2f1)]['NoMask']))return![];return!$gameSystem[_0x4a1667(0x238)](_0x2596f8);},ImageManager[_0x29fb5d(0x3a7)]=VisuMZ[_0x29fb5d(0x28c)]['Settings']['General'][_0x29fb5d(0x343)],SoundManager['playItemCrafting']=function(_0x3b60e6){const _0x4c8e25=_0x29fb5d;AudioManager[_0x4c8e25(0x2ed)](VisuMZ[_0x4c8e25(0x28c)][_0x4c8e25(0x2af)][_0x4c8e25(0x2d4)]);},TextManager['itemCraftingIngredientsBridge']=VisuMZ['ItemCraftingSys'][_0x29fb5d(0x2af)]['General'][_0x29fb5d(0x3e6)],TextManager['itemCraftingNumberWindowOk']=VisuMZ[_0x29fb5d(0x28c)]['Settings']['General'][_0x29fb5d(0x32a)],TextManager[_0x29fb5d(0x3b5)]=VisuMZ[_0x29fb5d(0x28c)][_0x29fb5d(0x2af)]['Mask'][_0x29fb5d(0x3cb)],TextManager[_0x29fb5d(0x34e)]=VisuMZ['ItemCraftingSys'][_0x29fb5d(0x2af)][_0x29fb5d(0x2a0)][_0x29fb5d(0x3dc)],ColorManager[_0x29fb5d(0x355)]=function(_0x27b544){const _0x45bd8b=_0x29fb5d;return _0x27b544=String(_0x27b544),_0x27b544[_0x45bd8b(0x26a)](/#(.*)/i)?_0x45bd8b(0x250)[_0x45bd8b(0x23d)](String(RegExp['$1'])):this[_0x45bd8b(0x21a)](Number(_0x27b544));},SceneManager[_0x29fb5d(0x3a8)]=function(){const _0x197d53=_0x29fb5d;return this[_0x197d53(0x1f6)]&&this[_0x197d53(0x1f6)]['constructor']===Scene_Battle;},SceneManager[_0x29fb5d(0x28e)]=function(){const _0x5c4094=_0x29fb5d;return this[_0x5c4094(0x1f6)]&&this[_0x5c4094(0x1f6)][_0x5c4094(0x279)]===Scene_ItemCrafting;},Game_Temp[_0x29fb5d(0x217)][_0x29fb5d(0x20b)]=function(){const _0xf1b752=_0x29fb5d;return this[_0xf1b752(0x233)];},Game_Temp[_0x29fb5d(0x217)]['clearCustomItemCraftingSettings']=function(){const _0x34a5da=_0x29fb5d;this[_0x34a5da(0x233)]=undefined;},Game_Temp[_0x29fb5d(0x217)][_0x29fb5d(0x204)]=function(_0x23d87a){this['_customItemCraftingSettings']=_0x23d87a;},VisuMZ[_0x29fb5d(0x28c)][_0x29fb5d(0x25f)]=Game_System['prototype'][_0x29fb5d(0x375)],Game_System['prototype'][_0x29fb5d(0x375)]=function(){const _0x264859=_0x29fb5d;VisuMZ[_0x264859(0x28c)][_0x264859(0x25f)][_0x264859(0x1ef)](this),this[_0x264859(0x2ef)](),this[_0x264859(0x264)]();},Game_System[_0x29fb5d(0x217)]['initItemCraftingMainMenu']=function(){const _0x29f3b0=_0x29fb5d;this[_0x29f3b0(0x331)]={'shown':VisuMZ[_0x29f3b0(0x28c)]['Settings']['MainMenu'][_0x29f3b0(0x346)],'enabled':VisuMZ[_0x29f3b0(0x28c)][_0x29f3b0(0x2af)][_0x29f3b0(0x2a0)][_0x29f3b0(0x3ee)]};},Game_System[_0x29fb5d(0x217)][_0x29fb5d(0x269)]=function(){const _0x251bc5=_0x29fb5d;if(this[_0x251bc5(0x331)]===undefined)this[_0x251bc5(0x2ef)]();return this[_0x251bc5(0x331)][_0x251bc5(0x211)];},Game_System[_0x29fb5d(0x217)]['setMainMenuItemCraftingVisible']=function(_0x40147e){const _0x2db226=_0x29fb5d;if(this[_0x2db226(0x331)]===undefined)this[_0x2db226(0x2ef)]();this['_ItemCrafting_MainMenu']['shown']=_0x40147e;},Game_System[_0x29fb5d(0x217)]['isMainMenuItemCraftingEnabled']=function(){const _0x3d6866=_0x29fb5d;if(this[_0x3d6866(0x331)]===undefined)this[_0x3d6866(0x2ef)]();return this[_0x3d6866(0x331)][_0x3d6866(0x359)];},Game_System['prototype'][_0x29fb5d(0x303)]=function(_0x1523b8){const _0x2b614e=_0x29fb5d;if(this['_ItemCrafting_MainMenu']===undefined)this[_0x2b614e(0x2ef)]();this[_0x2b614e(0x331)][_0x2b614e(0x359)]=_0x1523b8;},Game_System[_0x29fb5d(0x217)][_0x29fb5d(0x264)]=function(){const _0x2691ed=_0x29fb5d;this[_0x2691ed(0x27d)]={'items':{},'weapons':{},'armors':{}};},Game_System[_0x29fb5d(0x217)][_0x29fb5d(0x238)]=function(_0x5e6a7a){const _0x4d19df=_0x29fb5d;return!!this[_0x4d19df(0x363)](_0x5e6a7a);},Game_System[_0x29fb5d(0x217)]['getItemCraftedTimes']=function(_0x589acd){const _0x3e08fb=_0x29fb5d;if(!_0x589acd)return![];if(this['_itemsCrafted']===undefined)this[_0x3e08fb(0x264)]();let _0x4bc890={};if(DataManager[_0x3e08fb(0x3c6)](_0x589acd))_0x4bc890=this[_0x3e08fb(0x27d)]['items'];if(DataManager[_0x3e08fb(0x2db)](_0x589acd))_0x4bc890=this[_0x3e08fb(0x27d)]['weapons'];if(DataManager['isArmor'](_0x589acd))_0x4bc890=this['_itemsCrafted']['armors'];return _0x4bc890[_0x589acd['id']]||0x0;},Game_System[_0x29fb5d(0x217)][_0x29fb5d(0x27c)]=function(_0x2123c5,_0x32c4bb){const _0x1447b8=_0x29fb5d;if(!_0x2123c5)return![];if(this[_0x1447b8(0x27d)]===undefined)this[_0x1447b8(0x264)]();_0x32c4bb=_0x32c4bb||0x1;let _0x171a86={};if(DataManager[_0x1447b8(0x3c6)](_0x2123c5))_0x171a86=this[_0x1447b8(0x27d)][_0x1447b8(0x24e)];if(DataManager[_0x1447b8(0x2db)](_0x2123c5))_0x171a86=this[_0x1447b8(0x27d)][_0x1447b8(0x2c6)];if(DataManager[_0x1447b8(0x2c3)](_0x2123c5))_0x171a86=this[_0x1447b8(0x27d)][_0x1447b8(0x3f2)];_0x171a86[_0x2123c5['id']]=_0x171a86[_0x2123c5['id']]||0x0,_0x171a86[_0x2123c5['id']]+=_0x32c4bb;},VisuMZ[_0x29fb5d(0x28c)][_0x29fb5d(0x3db)]=Scene_Menu['prototype'][_0x29fb5d(0x242)],Scene_Menu[_0x29fb5d(0x217)]['createCommandWindow']=function(){const _0x4a9008=_0x29fb5d;VisuMZ[_0x4a9008(0x28c)][_0x4a9008(0x3db)][_0x4a9008(0x1ef)](this);const _0x3b1fd5=this[_0x4a9008(0x232)];_0x3b1fd5[_0x4a9008(0x3ad)]('itemCrafting',this[_0x4a9008(0x291)]['bind'](this));},Scene_Menu[_0x29fb5d(0x217)][_0x29fb5d(0x291)]=function(){const _0xf990c8=_0x29fb5d;SceneManager[_0xf990c8(0x3ac)](Scene_ItemCrafting);};function Scene_ItemCrafting(){this['initialize'](...arguments);}Scene_ItemCrafting[_0x29fb5d(0x217)]=Object[_0x29fb5d(0x2f9)](Scene_Item['prototype']),Scene_ItemCrafting['prototype'][_0x29fb5d(0x279)]=Scene_ItemCrafting,Scene_ItemCrafting[_0x29fb5d(0x217)][_0x29fb5d(0x375)]=function(){const _0x4f6161=_0x29fb5d;Scene_Item[_0x4f6161(0x217)][_0x4f6161(0x375)][_0x4f6161(0x1ef)](this);},Scene_ItemCrafting[_0x29fb5d(0x217)]['update']=function(){const _0xc2ef70=_0x29fb5d;Scene_Item[_0xc2ef70(0x217)][_0xc2ef70(0x314)][_0xc2ef70(0x1ef)](this),this['updateCraftingAnimation']();},Scene_ItemCrafting[_0x29fb5d(0x217)]['create']=function(){const _0x46b1af=_0x29fb5d;Scene_Item['prototype'][_0x46b1af(0x2f9)][_0x46b1af(0x1ef)](this),this[_0x46b1af(0x31f)](),this[_0x46b1af(0x27b)](),this[_0x46b1af(0x23c)](),this['createIngredientSelectionList'](),this[_0x46b1af(0x1e2)]()&&this[_0x46b1af(0x353)](),this[_0x46b1af(0x3aa)](),this[_0x46b1af(0x373)]();},Scene_ItemCrafting['prototype'][_0x29fb5d(0x3aa)]=function(){const _0x5ab41f=_0x29fb5d,_0x115b66=VisuMZ[_0x5ab41f(0x28c)][_0x5ab41f(0x2af)][_0x5ab41f(0x1fc)];this[_0x5ab41f(0x262)]&&(_0x5ab41f(0x22e)!==_0x5ab41f(0x22e)?_0x5171cf['push']([_0x5ab41f(0x321),_0xca554c(_0xa9f321['$1'])]):this[_0x5ab41f(0x262)][_0x5ab41f(0x1cc)](_0x115b66[_0x5ab41f(0x3ab)]));this[_0x5ab41f(0x33f)]&&this['_categoryWindow']['setBackgroundType'](_0x115b66[_0x5ab41f(0x1ec)]);if(this[_0x5ab41f(0x2bc)]){if(_0x5ab41f(0x29b)===_0x5ab41f(0x388)){_0x50aca3[_0x5ab41f(0x3ea)]()&&_0x3b3da8(_0x3b7ec6[_0x5ab41f(0x28c)]['WarningMsg']);return;}else this[_0x5ab41f(0x2bc)][_0x5ab41f(0x1cc)](_0x115b66['GoldBgType']);}if(this[_0x5ab41f(0x1c6)]){if('Vxcnc'===_0x5ab41f(0x2f7))this[_0x5ab41f(0x1c6)]['setBackgroundType'](_0x115b66[_0x5ab41f(0x25b)]);else{_0x4058a4[_0x5ab41f(0x26a)](/CATEGORY: (.*)/i);const _0x5c4880=_0x3523cd(_0x4b43d2['$1'])[_0x5ab41f(0x2cd)]();this[_0x5ab41f(0x20c)]['push'](_0x5c4880),this['_ingredientAmounts'][_0x5ab41f(0x3ac)](_0x39f1fc[0x1]||0x1);}}this[_0x5ab41f(0x3ec)]&&this[_0x5ab41f(0x3ec)][_0x5ab41f(0x1cc)](_0x115b66[_0x5ab41f(0x1f2)]),this[_0x5ab41f(0x37d)]&&this[_0x5ab41f(0x37d)][_0x5ab41f(0x1cc)](_0x115b66[_0x5ab41f(0x33e)]),this[_0x5ab41f(0x2c0)]&&(_0x5ab41f(0x281)!==_0x5ab41f(0x281)?(this[_0x5ab41f(0x273)][_0x5ab41f(0x3f4)]=_0x4202cd[_0x5ab41f(0x3a3)]('IconSet'),this[_0x5ab41f(0x273)][_0x5ab41f(0x3f4)][_0x5ab41f(0x257)]=![]):this[_0x5ab41f(0x2c0)]['setBackgroundType'](_0x115b66[_0x5ab41f(0x230)])),this['_numberWindow']&&this[_0x5ab41f(0x2d5)]['setBackgroundType'](_0x115b66[_0x5ab41f(0x326)]),this[_0x5ab41f(0x297)]&&this[_0x5ab41f(0x297)][_0x5ab41f(0x1cc)](_0x115b66[_0x5ab41f(0x265)]);},Scene_ItemCrafting[_0x29fb5d(0x217)][_0x29fb5d(0x390)]=function(){const _0xe89cc8=_0x29fb5d;return Scene_Shop[_0xe89cc8(0x217)][_0xe89cc8(0x20d)][_0xe89cc8(0x1ef)](this);},Scene_ItemCrafting[_0x29fb5d(0x217)][_0x29fb5d(0x31f)]=function(){const _0x43851b=_0x29fb5d,_0x1ceded=this[_0x43851b(0x1ee)]();this[_0x43851b(0x2bc)]=new Window_Gold(_0x1ceded),this[_0x43851b(0x2f6)](this[_0x43851b(0x2bc)]);},Scene_ItemCrafting[_0x29fb5d(0x217)][_0x29fb5d(0x1ee)]=function(){const _0x1fab9b=_0x29fb5d;return Scene_Shop[_0x1fab9b(0x217)][_0x1fab9b(0x389)]['call'](this);},Scene_ItemCrafting[_0x29fb5d(0x217)][_0x29fb5d(0x20e)]=function(){const _0x2c6fe1=_0x29fb5d;return Scene_Shop[_0x2c6fe1(0x217)][_0x2c6fe1(0x2cf)][_0x2c6fe1(0x1ef)](this);},Scene_ItemCrafting[_0x29fb5d(0x217)][_0x29fb5d(0x215)]=function(){const _0x5af185=_0x29fb5d;this[_0x5af185(0x2e6)]();if(this[_0x5af185(0x1e2)]()){if(_0x5af185(0x2c2)!=='QbONC')return _0x3c1b3f(_0x2d579f['$1']);else this[_0x5af185(0x3d0)]();}this['allowCreateStatusWindow']()&&(this[_0x5af185(0x38d)](),this[_0x5af185(0x2f6)](this[_0x5af185(0x1c6)]));},Scene_ItemCrafting[_0x29fb5d(0x217)][_0x29fb5d(0x2e6)]=function(){const _0x18966e=_0x29fb5d,_0x27d147=this[_0x18966e(0x3e8)]();this[_0x18966e(0x1c6)]=new Window_ItemCraftingList(_0x27d147),this[_0x18966e(0x1c6)]['setHelpWindow'](this[_0x18966e(0x262)]),this['_itemWindow'][_0x18966e(0x3ad)]('ok',this[_0x18966e(0x26d)][_0x18966e(0x2a7)](this)),this[_0x18966e(0x1c6)][_0x18966e(0x3ad)]('cancel',this['onItemCancel'][_0x18966e(0x2a7)](this)),this[_0x18966e(0x2f6)](this[_0x18966e(0x1c6)]),this[_0x18966e(0x33f)][_0x18966e(0x201)](this[_0x18966e(0x1c6)]),!this[_0x18966e(0x33f)][_0x18966e(0x38b)]()&&(this[_0x18966e(0x1c6)]['y']-=this['_categoryWindow'][_0x18966e(0x3a0)],this[_0x18966e(0x1c6)][_0x18966e(0x3a0)]+=this[_0x18966e(0x33f)][_0x18966e(0x3a0)],this[_0x18966e(0x33f)]['hide'](),this[_0x18966e(0x33f)]['deactivate'](),this[_0x18966e(0x353)]());},Scene_ItemCrafting[_0x29fb5d(0x217)][_0x29fb5d(0x3e8)]=function(){const _0x52bc75=_0x29fb5d;return this[_0x52bc75(0x232)]=this['_categoryWindow'],Scene_Shop['prototype']['buyWindowRectItemsEquipsCore'][_0x52bc75(0x1ef)](this);},Scene_ItemCrafting[_0x29fb5d(0x217)][_0x29fb5d(0x329)]=function(){const _0x49558b=_0x29fb5d;return Scene_Shop[_0x49558b(0x217)]['statusWindowRectItemsEquipsCore']['call'](this);},Scene_ItemCrafting[_0x29fb5d(0x217)][_0x29fb5d(0x27b)]=function(){const _0x337eee=_0x29fb5d,_0x5affbd=this['itemWindowRect']();this[_0x337eee(0x2d5)]=new Window_ItemCraftingNumber(_0x5affbd),this[_0x337eee(0x2d5)]['hide'](),this[_0x337eee(0x2d5)][_0x337eee(0x3ad)]('ok',this['onNumberOk'][_0x337eee(0x2a7)](this)),this[_0x337eee(0x2d5)][_0x337eee(0x3ad)](_0x337eee(0x337),this[_0x337eee(0x379)][_0x337eee(0x2a7)](this)),this[_0x337eee(0x2f6)](this[_0x337eee(0x2d5)]);},Scene_ItemCrafting[_0x29fb5d(0x217)][_0x29fb5d(0x23c)]=function(){const _0x69a351=_0x29fb5d,_0x20e40e=this['categoryWindowRect']();this[_0x69a351(0x37d)]=new Window_Selectable(_0x20e40e),this[_0x69a351(0x37d)][_0x69a351(0x3b6)](),this[_0x69a351(0x2f6)](this[_0x69a351(0x37d)]);},Scene_ItemCrafting['prototype']['createIngredientSelectionList']=function(){const _0x5bfa0c=_0x29fb5d,_0x2889ef=this[_0x5bfa0c(0x3e8)](),_0x541c88=new Window_ItemCraftingIngredient(_0x2889ef);_0x541c88[_0x5bfa0c(0x3b6)](),_0x541c88[_0x5bfa0c(0x29d)](this[_0x5bfa0c(0x262)]),_0x541c88[_0x5bfa0c(0x260)](this['_statusWindow']),_0x541c88[_0x5bfa0c(0x3ad)]('ok',this[_0x5bfa0c(0x2b2)][_0x5bfa0c(0x2a7)](this)),_0x541c88['setHandler'](_0x5bfa0c(0x337),this['onIngredientListCancel'][_0x5bfa0c(0x2a7)](this)),this[_0x5bfa0c(0x2c0)]=_0x541c88,this[_0x5bfa0c(0x2f6)](this[_0x5bfa0c(0x2c0)]);},Scene_ItemCrafting[_0x29fb5d(0x217)]['onCategoryOk']=function(){const _0x1f8575=_0x29fb5d;this[_0x1f8575(0x1c6)][_0x1f8575(0x1ca)](),this[_0x1f8575(0x1c6)]['smoothSelect'](0x0);},Scene_ItemCrafting['prototype'][_0x29fb5d(0x26d)]=function(){const _0x53d961=_0x29fb5d;this[_0x53d961(0x2b8)]=this[_0x53d961(0x1c6)]['item'](),this[_0x53d961(0x1c6)][_0x53d961(0x3b6)](),this[_0x53d961(0x270)](),this[_0x53d961(0x2fd)]()?_0x53d961(0x3bc)!=='dLAnM'?this[_0x53d961(0x2a1)]():this[_0x53d961(0x1c9)]():_0x53d961(0x3e7)==='txYfp'?(this[_0x53d961(0x311)][_0x53d961(0x1fd)](),this[_0x53d961(0x384)]--,this['_ingredientIndex']<0x0?this['activateItemWindow']():this[_0x53d961(0x1c9)]()):this[_0x53d961(0x33c)]();},Scene_ItemCrafting['prototype'][_0x29fb5d(0x33c)]=function(){const _0x1f64c4=_0x29fb5d;this[_0x1f64c4(0x37d)][_0x1f64c4(0x3b6)](),this[_0x1f64c4(0x2c0)][_0x1f64c4(0x3b6)](),this[_0x1f64c4(0x33f)][_0x1f64c4(0x3c1)](),this[_0x1f64c4(0x2d5)][_0x1f64c4(0x393)](this[_0x1f64c4(0x2b8)]),this[_0x1f64c4(0x2d5)][_0x1f64c4(0x3c1)](),this[_0x1f64c4(0x2d5)][_0x1f64c4(0x1ca)]();},Scene_ItemCrafting[_0x29fb5d(0x217)][_0x29fb5d(0x214)]=function(){const _0x50c6dc=_0x29fb5d;this[_0x50c6dc(0x2d5)][_0x50c6dc(0x3b6)](),this['_ingredientSelectTitle']['hide'](),this[_0x50c6dc(0x2c0)][_0x50c6dc(0x3b6)](),this[_0x50c6dc(0x33f)][_0x50c6dc(0x3c1)](),this[_0x50c6dc(0x1c6)][_0x50c6dc(0x3c1)](),this[_0x50c6dc(0x1c6)][_0x50c6dc(0x1ca)](),this[_0x50c6dc(0x1c6)][_0x50c6dc(0x3d1)]();},Scene_ItemCrafting[_0x29fb5d(0x217)][_0x29fb5d(0x1f3)]=function(){const _0x1b772d=_0x29fb5d;if(VisuMZ[_0x1b772d(0x28c)][_0x1b772d(0x2af)][_0x1b772d(0x35b)][_0x1b772d(0x28b)]){if(_0x1b772d(0x3c8)===_0x1b772d(0x3c8))this['startAnimation']();else{const _0xb68bde=this[_0x1b772d(0x2b8)],_0x17348e=this['_numberWindow']['number']();_0x209d4c[_0x1b772d(0x28c)]['TurnSwitches'](_0xb68bde,!![]),_0x3cef99['ItemCraftingSys'][_0x1b772d(0x272)](_0xb68bde,![]),this['enableCraftingSwitches']();const _0x1010a8=_0x12d888[_0x1b772d(0x38f)](_0xb68bde);_0x42a00f[_0x1b772d(0x28c)]['JS'][_0x1010a8]&&_0x1cb965[_0x1b772d(0x28c)]['JS'][_0x1010a8][_0x1b772d(0x1ef)](this,_0xb68bde,_0x17348e),_0x417fd3[_0x1b772d(0x28c)][_0x1b772d(0x2af)][_0x1b772d(0x2d9)][_0x1b772d(0x226)]['call'](this,_0xb68bde,_0x17348e);}}else _0x1b772d(0x282)===_0x1b772d(0x26b)?(_0x432d01[_0x1b772d(0x28c)][_0x1b772d(0x304)]['call'](this,_0x5e03e7),_0x2b8b67['ItemCraftingSys'][_0x1b772d(0x209)](_0x559f7a)):this[_0x1b772d(0x1f9)]();},Scene_ItemCrafting[_0x29fb5d(0x217)][_0x29fb5d(0x1f9)]=function(){const _0x8cbbaa=_0x29fb5d;this[_0x8cbbaa(0x3f3)]['visible']=!![],this[_0x8cbbaa(0x22b)]=![],this['processItemCrafting'](),this[_0x8cbbaa(0x3b7)](),this['activateItemWindow'](),this['_itemWindow'][_0x8cbbaa(0x22f)](),this['_categoryWindow'][_0x8cbbaa(0x22f)](),this[_0x8cbbaa(0x33f)][_0x8cbbaa(0x212)](),this[_0x8cbbaa(0x33f)]['callUpdateHelp'](),this[_0x8cbbaa(0x2bc)][_0x8cbbaa(0x22f)](),this[_0x8cbbaa(0x1c6)][_0x8cbbaa(0x3d1)]();},Scene_ItemCrafting[_0x29fb5d(0x217)][_0x29fb5d(0x248)]=function(){const _0x5ebf4f=_0x29fb5d,_0x4bee5e=this[_0x5ebf4f(0x2b8)],_0x25e1dc=this[_0x5ebf4f(0x2d5)][_0x5ebf4f(0x1c7)](),_0x5aaac2=DataManager[_0x5ebf4f(0x3c2)](_0x4bee5e);let _0x1e20c9=0x0;for(const _0x5a8350 of _0x5aaac2){if(!_0x5a8350)continue;let _0x54a1f0=_0x5a8350[0x0];const _0x2486f=_0x5a8350[0x1]*_0x25e1dc;_0x54a1f0==='gold'?$gameParty['loseGold'](_0x2486f):(typeof _0x54a1f0===_0x5ebf4f(0x32f)&&_0x54a1f0[_0x5ebf4f(0x26a)](/CATEGORY/i)&&(_0x54a1f0=this[_0x5ebf4f(0x311)][_0x1e20c9],_0x1e20c9+=0x1),$gameParty[_0x5ebf4f(0x203)](_0x54a1f0,_0x2486f,![]));}$gameParty[_0x5ebf4f(0x284)](_0x4bee5e,_0x25e1dc),this[_0x5ebf4f(0x2d5)][_0x5ebf4f(0x1c7)]()>0x0?_0x5ebf4f(0x3e4)!==_0x5ebf4f(0x3e4)?(_0x1200bf=_0x58d85d['ItemCraftingSys']['maskItemName'](_0x33214e),this['contents'][_0x5ebf4f(0x391)]=_0x386d13[_0x5ebf4f(0x1f7)]):SoundManager[_0x5ebf4f(0x218)]():SoundManager[_0x5ebf4f(0x300)](),$gameSystem['registerCraftedItem'](_0x4bee5e,_0x25e1dc);},Scene_ItemCrafting[_0x29fb5d(0x217)][_0x29fb5d(0x3b7)]=function(){const _0x2b21a9=_0x29fb5d,_0x3cf716=this[_0x2b21a9(0x2b8)],_0x110758=this['_numberWindow'][_0x2b21a9(0x1c7)]();VisuMZ[_0x2b21a9(0x28c)]['TurnSwitches'](_0x3cf716,!![]),VisuMZ['ItemCraftingSys'][_0x2b21a9(0x272)](_0x3cf716,![]),this[_0x2b21a9(0x23a)]();const _0x14aee2=DataManager[_0x2b21a9(0x38f)](_0x3cf716);VisuMZ[_0x2b21a9(0x28c)]['JS'][_0x14aee2]&&VisuMZ[_0x2b21a9(0x28c)]['JS'][_0x14aee2][_0x2b21a9(0x1ef)](this,_0x3cf716,_0x110758),VisuMZ[_0x2b21a9(0x28c)][_0x2b21a9(0x2af)][_0x2b21a9(0x2d9)][_0x2b21a9(0x226)]['call'](this,_0x3cf716,_0x110758);},VisuMZ[_0x29fb5d(0x28c)][_0x29fb5d(0x272)]=function(_0xd60028,_0xde8738){const _0x455431=_0x29fb5d,_0x37305e=_0xde8738?VisuMZ[_0x455431(0x28c)][_0x455431(0x2f1)][_0x455431(0x3d7)]:VisuMZ[_0x455431(0x28c)]['RegExp']['OffSwitches'],_0x4b696a=_0xd60028[_0x455431(0x327)]['match'](_0x37305e);if(_0x4b696a)for(const _0x57af31 of _0x4b696a){if(_0x455431(0x1d8)!==_0x455431(0x2b9)){if(!_0x57af31)continue;_0x57af31[_0x455431(0x26a)](_0x37305e);const _0x22ba04=JSON[_0x455431(0x2cc)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x536de8 of _0x22ba04){_0x455431(0x354)===_0x455431(0x1d7)?_0x26c2dd['push'](_0x562963):$gameSwitches[_0x455431(0x36c)](_0x536de8,_0xde8738);}}else{if(!_0xc6f6a2[_0x455431(0x28e)]())return;const _0x471278=_0x357973['ItemCraftingSys'][_0x455431(0x2af)][_0x455431(0x2d9)];_0x471278['SwitchCraft']&&_0x51f934[_0x455431(0x36c)](_0x471278[_0x455431(0x2ce)],![]);}}},Scene_ItemCrafting[_0x29fb5d(0x217)]['onNumberCancel']=function(){const _0x56e12=_0x29fb5d;SoundManager[_0x56e12(0x300)](),this[_0x56e12(0x1f0)]();},Scene_ItemCrafting['prototype'][_0x29fb5d(0x2b2)]=function(){const _0x5e75cb=_0x29fb5d,_0x52e990=this[_0x5e75cb(0x2c0)][_0x5e75cb(0x365)]();this[_0x5e75cb(0x311)][this[_0x5e75cb(0x384)]]=_0x52e990,this[_0x5e75cb(0x384)]++,this[_0x5e75cb(0x1c9)]();},Scene_ItemCrafting[_0x29fb5d(0x217)][_0x29fb5d(0x1f0)]=function(){const _0x576833=_0x29fb5d;this[_0x576833(0x311)][_0x576833(0x1fd)](),this[_0x576833(0x384)]--,this[_0x576833(0x384)]<0x0?_0x576833(0x2d7)!=='rCuiz'?this[_0x576833(0x214)]():this[_0x576833(0x24b)]():this[_0x576833(0x1c9)]();},Scene_ItemCrafting['prototype'][_0x29fb5d(0x270)]=function(){const _0x2775e=_0x29fb5d;this[_0x2775e(0x20c)]=[],this['_ingredientAmounts']=[],this[_0x2775e(0x311)]=[],this['_ingredientIndex']=0x0;},Scene_ItemCrafting['prototype'][_0x29fb5d(0x2fd)]=function(){const _0x5a3824=_0x29fb5d;if(!this[_0x5a3824(0x2b8)])return![];const _0x524370=DataManager['getCraftingIngredients'](this[_0x5a3824(0x2b8)]);for(const _0x38f614 of _0x524370){if(!_0x38f614)continue;const _0x132e81=_0x38f614[0x0];if(!_0x132e81)continue;if(typeof _0x132e81==='string'&&_0x132e81['match'](/CATEGORY/i)){if(_0x5a3824(0x2b1)!==_0x5a3824(0x2b1))_0x2a2ec1[_0x5a3824(0x3ac)](_0x3fd42d);else{_0x132e81[_0x5a3824(0x26a)](/CATEGORY: (.*)/i);const _0xc87bfe=String(RegExp['$1'])['trim']();this[_0x5a3824(0x20c)][_0x5a3824(0x3ac)](_0xc87bfe),this[_0x5a3824(0x36f)][_0x5a3824(0x3ac)](_0x38f614[0x1]||0x1);}}}return this[_0x5a3824(0x20c)][_0x5a3824(0x316)]>0x0;},Scene_ItemCrafting[_0x29fb5d(0x217)][_0x29fb5d(0x1c9)]=function(){const _0x4e3267=_0x29fb5d;if(this[_0x4e3267(0x384)]>=this[_0x4e3267(0x20c)][_0x4e3267(0x316)])return this[_0x4e3267(0x33c)]();this[_0x4e3267(0x33f)]['hide'](),this['_numberWindow'][_0x4e3267(0x3b6)]();const _0xa7d6b8=this['_ingredientCategories'][this[_0x4e3267(0x384)]],_0x239c3e=this[_0x4e3267(0x36f)][this[_0x4e3267(0x384)]];this[_0x4e3267(0x37d)][_0x4e3267(0x3c1)](),this[_0x4e3267(0x2c0)][_0x4e3267(0x3c1)](),this[_0x4e3267(0x37d)]['contents'][_0x4e3267(0x2ac)]();const _0x12c701=VisuMZ[_0x4e3267(0x28c)][_0x4e3267(0x2af)][_0x4e3267(0x2d9)]['CategoryTitle'],_0x2655ca=VisuMZ[_0x4e3267(0x2ab)]['Settings'][_0x4e3267(0x25d)][_0x4e3267(0x1da)],_0x21521d=_0x12c701['format'](_0xa7d6b8,_0x2655ca[_0x4e3267(0x23d)](_0x239c3e)),_0x5d9315=this[_0x4e3267(0x37d)][_0x4e3267(0x37e)](0x0);this[_0x4e3267(0x37d)][_0x4e3267(0x1fe)](_0x21521d,_0x5d9315['x'],_0x5d9315['y']),this[_0x4e3267(0x2c0)][_0x4e3267(0x393)](_0xa7d6b8,_0x239c3e);},Scene_ItemCrafting[_0x29fb5d(0x217)]['buttonAssistKey1']=function(){const _0xc72717=_0x29fb5d;if(this['_numberWindow']&&this['_numberWindow'][_0xc72717(0x223)])return'HIUrH'===_0xc72717(0x2bb)?TextManager[_0xc72717(0x345)](_0xc72717(0x37a),_0xc72717(0x20a)):!![];return Scene_Item[_0xc72717(0x217)]['buttonAssistKey1']['call'](this);},Scene_ItemCrafting[_0x29fb5d(0x217)][_0x29fb5d(0x3a6)]=function(){const _0x4670a9=_0x29fb5d;if(this[_0x4670a9(0x2d5)]&&this['_numberWindow'][_0x4670a9(0x223)]){if(_0x4670a9(0x322)!==_0x4670a9(0x322))this['setText'](_0x59c5d7?_0x1260dc['name']:'');else return TextManager['getInputMultiButtonStrings']('up',_0x4670a9(0x2f2));}return Scene_Item['prototype'][_0x4670a9(0x3a6)][_0x4670a9(0x1ef)](this);},Scene_ItemCrafting[_0x29fb5d(0x217)]['buttonAssistText1']=function(){const _0x4207a8=_0x29fb5d;if(this[_0x4207a8(0x31e)]())return VisuMZ['ItemsEquipsCore']['Settings'][_0x4207a8(0x25d)][_0x4207a8(0x2fa)];else{if(this[_0x4207a8(0x2d5)]&&this[_0x4207a8(0x2d5)][_0x4207a8(0x223)]){if('TOKZK'!==_0x4207a8(0x1e6))this[_0x4207a8(0x3cc)](_0x339cdd,_0x57a890,_0x379c36,_0x7e0fc3,'right');else return VisuMZ[_0x4207a8(0x2ab)]['Settings'][_0x4207a8(0x221)][_0x4207a8(0x305)];}}return Scene_Item[_0x4207a8(0x217)][_0x4207a8(0x30f)][_0x4207a8(0x1ef)](this);},Scene_ItemCrafting[_0x29fb5d(0x217)][_0x29fb5d(0x3f8)]=function(){const _0x1fd1a3=_0x29fb5d;if(this[_0x1fd1a3(0x2d5)]&&this['_numberWindow']['active'])return'xijPV'===_0x1fd1a3(0x1cf)?_0x2af357[_0x1fd1a3(0x366)](this['itemNameY']()+this['lineHeight']()*0x2):VisuMZ[_0x1fd1a3(0x2ab)][_0x1fd1a3(0x2af)][_0x1fd1a3(0x221)][_0x1fd1a3(0x2e7)];return Scene_Item['prototype'][_0x1fd1a3(0x3f8)]['call'](this);},Scene_ItemCrafting[_0x29fb5d(0x217)][_0x29fb5d(0x357)]=function(){const _0x130939=_0x29fb5d;if(this[_0x130939(0x2d5)]&&this['_numberWindow']['active']){if('WJlFg'===_0x130939(0x1db))return TextManager[_0x130939(0x251)];else _0x5a580b&&this[_0x130939(0x334)]()[_0x130939(0x372)](_0xb4fc49)&&(this[_0x130939(0x2aa)]=!![]),_0x5296ff[_0x130939(0x217)][_0x130939(0x21f)][_0x130939(0x1ef)](this,_0x511bca,_0xc9a01,_0x2f5d00,_0x46d24f),this[_0x130939(0x2aa)]=![];}else{if(_0x130939(0x3d2)!==_0x130939(0x3d2))this['_ingredientSelectList']['setBackgroundType'](_0x259354[_0x130939(0x230)]);else return Scene_Item[_0x130939(0x217)][_0x130939(0x357)][_0x130939(0x1ef)](this);}},Scene_ItemCrafting[_0x29fb5d(0x217)][_0x29fb5d(0x1d0)]=function(){const _0x3ef47c=_0x29fb5d;Scene_MenuBase[_0x3ef47c(0x217)]['createBackground']['call'](this),this[_0x3ef47c(0x213)](this[_0x3ef47c(0x38e)]()),this[_0x3ef47c(0x1e0)]();},Scene_ItemCrafting[_0x29fb5d(0x217)][_0x29fb5d(0x38e)]=function(){const _0x54c61c=_0x29fb5d;return VisuMZ[_0x54c61c(0x28c)]['Settings'][_0x54c61c(0x21c)][_0x54c61c(0x320)];},Scene_ItemCrafting[_0x29fb5d(0x217)]['createCustomBackgroundImages']=function(){const _0x4c14e6=_0x29fb5d,_0xbc3d52={'BgFilename1':VisuMZ[_0x4c14e6(0x28c)]['Settings']['BgSettings']['BgFilename1'],'BgFilename2':VisuMZ[_0x4c14e6(0x28c)][_0x4c14e6(0x2af)][_0x4c14e6(0x21c)][_0x4c14e6(0x1d3)]};_0xbc3d52&&(_0xbc3d52[_0x4c14e6(0x267)]!==''||_0xbc3d52[_0x4c14e6(0x1d3)]!=='')&&(this[_0x4c14e6(0x1ce)]=new Sprite(ImageManager['loadTitle1'](_0xbc3d52['BgFilename1'])),this[_0x4c14e6(0x34a)]=new Sprite(ImageManager[_0x4c14e6(0x386)](_0xbc3d52[_0x4c14e6(0x1d3)])),this[_0x4c14e6(0x36d)](this[_0x4c14e6(0x1ce)]),this[_0x4c14e6(0x36d)](this[_0x4c14e6(0x34a)]),this['_backSprite1']['bitmap'][_0x4c14e6(0x35e)](this[_0x4c14e6(0x310)][_0x4c14e6(0x2a7)](this,this[_0x4c14e6(0x1ce)])),this[_0x4c14e6(0x34a)][_0x4c14e6(0x3f4)]['addLoadListener'](this[_0x4c14e6(0x310)]['bind'](this,this[_0x4c14e6(0x34a)])));},Scene_ItemCrafting['prototype'][_0x29fb5d(0x310)]=function(_0x59b4e3){const _0x67de33=_0x29fb5d;this[_0x67de33(0x2e8)](_0x59b4e3),this[_0x67de33(0x36a)](_0x59b4e3);},Scene_ItemCrafting[_0x29fb5d(0x217)][_0x29fb5d(0x207)]=function(){const _0x32439c=_0x29fb5d;this[_0x32439c(0x22b)]=!![],this['_animationWait']=0x14,this[_0x32439c(0x3f3)][_0x32439c(0x2de)]=VisuMZ[_0x32439c(0x28c)][_0x32439c(0x2af)][_0x32439c(0x35b)][_0x32439c(0x319)]||![],this[_0x32439c(0x2e5)]();},Scene_ItemCrafting['prototype'][_0x29fb5d(0x2e5)]=function(){const _0x2cddbe=_0x29fb5d;this[_0x2cddbe(0x294)]=new Sprite(),this[_0x2cddbe(0x36d)](this[_0x2cddbe(0x294)]),this['setItemSpriteBitmap'](),this['setItemSpriteFrame'](),this[_0x2cddbe(0x3f6)](),this[_0x2cddbe(0x39e)](),this[_0x2cddbe(0x31b)](),this[_0x2cddbe(0x306)](this[_0x2cddbe(0x340)][_0x2cddbe(0x28d)]());},Scene_ItemCrafting[_0x29fb5d(0x217)][_0x29fb5d(0x341)]=function(){const _0x453ffa=_0x29fb5d,_0x4b2c0b=VisuMZ['ItemCraftingSys'][_0x453ffa(0x2f1)],_0x1aa828=this[_0x453ffa(0x2b8)][_0x453ffa(0x327)];this[_0x453ffa(0x239)]='';if(_0x1aa828[_0x453ffa(0x26a)](_0x4b2c0b[_0x453ffa(0x2b4)]))_0x453ffa(0x2d6)!==_0x453ffa(0x2d6)?this[_0x453ffa(0x2d5)][_0x453ffa(0x1cc)](_0x3f31f8[_0x453ffa(0x326)]):this['_craftPicture']=String(RegExp['$1']);else _0x1aa828[_0x453ffa(0x26a)](_0x4b2c0b[_0x453ffa(0x324)])&&(this[_0x453ffa(0x239)]=String(RegExp['$1']));this[_0x453ffa(0x273)]=new Sprite();if(this[_0x453ffa(0x239)]){if(_0x453ffa(0x3ba)!==_0x453ffa(0x39a))this[_0x453ffa(0x273)][_0x453ffa(0x3f4)]=ImageManager['loadPicture'](this[_0x453ffa(0x239)]);else{if(!this[_0x453ffa(0x223)])return![];if(!this[_0x453ffa(0x365)]())return![];if(!this['isTouchedInsideFrame']())return![];if(this[_0x453ffa(0x28a)]()!==this[_0x453ffa(0x396)]())return![];return!![];}}else this['_iconSprite']['bitmap']=ImageManager['loadSystem'](_0x453ffa(0x33b)),this['_iconSprite'][_0x453ffa(0x3f4)][_0x453ffa(0x257)]=![];this[_0x453ffa(0x273)]['anchor']['x']=0.5,this[_0x453ffa(0x273)][_0x453ffa(0x292)]['y']=0.5;if(!this[_0x453ffa(0x239)]){if(_0x453ffa(0x2f0)===_0x453ffa(0x255))this[_0x453ffa(0x35f)]=_0x460143[_0x453ffa(0x3a3)](_0x991292['tooltipSkin']);else{const _0x8e32f4=VisuMZ[_0x453ffa(0x28c)][_0x453ffa(0x2af)][_0x453ffa(0x35b)][_0x453ffa(0x3c5)]||0x8;this[_0x453ffa(0x273)][_0x453ffa(0x2e4)]['x']=_0x8e32f4,this[_0x453ffa(0x273)][_0x453ffa(0x2e4)]['y']=_0x8e32f4;}}this[_0x453ffa(0x294)][_0x453ffa(0x36d)](this[_0x453ffa(0x273)]);},Scene_ItemCrafting[_0x29fb5d(0x217)][_0x29fb5d(0x23f)]=function(){const _0x5e9917=_0x29fb5d;if(this[_0x5e9917(0x239)])return;const _0x1b0cab=this['_item'],_0x53bca7=_0x1b0cab[_0x5e9917(0x2df)],_0x4e6600=ImageManager[_0x5e9917(0x1df)],_0x297440=ImageManager[_0x5e9917(0x2a2)],_0x59fc70=_0x53bca7%0x10*_0x4e6600,_0x14e8d1=Math[_0x5e9917(0x366)](_0x53bca7/0x10)*_0x297440;this['_iconSprite']['setFrame'](_0x59fc70,_0x14e8d1,_0x4e6600,_0x297440);},Scene_ItemCrafting[_0x29fb5d(0x217)][_0x29fb5d(0x3f6)]=function(){const _0x14c3ba=_0x29fb5d;this[_0x14c3ba(0x294)]['x']=Math[_0x14c3ba(0x2cb)](Graphics['width']/0x2);const _0x3cffec=Math[_0x14c3ba(0x2cb)](ImageManager['iconHeight']*this[_0x14c3ba(0x294)][_0x14c3ba(0x2e4)]['y']);this['_itemSprite']['y']=Math[_0x14c3ba(0x2cb)]((Graphics['height']+_0x3cffec)/0x2);},Scene_ItemCrafting[_0x29fb5d(0x217)][_0x29fb5d(0x39e)]=function(){const _0x2a484b=_0x29fb5d;this['_itemSpriteOpacitySpeed']=VisuMZ[_0x2a484b(0x28c)][_0x2a484b(0x2af)][_0x2a484b(0x35b)]['FadeSpeed']||0x1,this[_0x2a484b(0x2b8)][_0x2a484b(0x327)][_0x2a484b(0x26a)](VisuMZ[_0x2a484b(0x28c)][_0x2a484b(0x2f1)][_0x2a484b(0x3a1)])&&(this[_0x2a484b(0x1d1)]=Math[_0x2a484b(0x1cb)](Number(RegExp['$1']),0x1)),this['_itemSprite'][_0x2a484b(0x308)]=0x0;},Scene_ItemCrafting[_0x29fb5d(0x217)]['createAnimationIDs']=function(){const _0x314589=_0x29fb5d;this['_animationIDs']=[],this[_0x314589(0x2b8)][_0x314589(0x327)][_0x314589(0x26a)](VisuMZ['ItemCraftingSys'][_0x314589(0x2f1)][_0x314589(0x2dd)])?this[_0x314589(0x340)]=RegExp['$1'][_0x314589(0x347)](',')[_0x314589(0x3eb)](_0x9df873=>Number(_0x9df873)):'yokXf'==='kwikz'?this[_0x314589(0x297)][_0x314589(0x1cc)](_0x60a8bd[_0x314589(0x265)]):this['_animationIDs']=this['_animationIDs']['concat'](VisuMZ[_0x314589(0x28c)][_0x314589(0x2af)]['Animation'][_0x314589(0x387)]);},Scene_ItemCrafting[_0x29fb5d(0x217)]['createAnimation']=function(_0x6ea281){const _0x32bf4e=_0x29fb5d,_0x1a22fe=$dataAnimations[_0x6ea281];if(!_0x1a22fe)return;const _0x1fe747=this['isMVAnimation'](_0x1a22fe);this[_0x32bf4e(0x350)]=new(_0x1fe747?Sprite_AnimationMV:Sprite_Animation)();const _0x5785fa=[this[_0x32bf4e(0x294)]],_0x2cf9f8=0x0;this[_0x32bf4e(0x350)][_0x32bf4e(0x393)](_0x5785fa,_0x1a22fe,![],_0x2cf9f8,null),this['addChild'](this['_animationSprite']);},Scene_ItemCrafting[_0x29fb5d(0x217)]['isMVAnimation']=function(_0x1ca9b1){const _0x1d35cd=_0x29fb5d;return!!_0x1ca9b1[_0x1d35cd(0x3cd)];},Scene_ItemCrafting[_0x29fb5d(0x217)]['updateCraftingAnimation']=function(){const _0x4d6056=_0x29fb5d;if(!this[_0x4d6056(0x22b)])return;this[_0x4d6056(0x2a8)](),this[_0x4d6056(0x352)]();if(this[_0x4d6056(0x30c)]()){if(_0x4d6056(0x205)==='MOmKI'){_0x5e8b61[_0x4d6056(0x28c)]['Scene_Menu_createCommandWindow'][_0x4d6056(0x1ef)](this);const _0x54dd55=this[_0x4d6056(0x232)];_0x54dd55[_0x4d6056(0x3ad)](_0x4d6056(0x3f7),this[_0x4d6056(0x291)][_0x4d6056(0x2a7)](this));}else this[_0x4d6056(0x3a4)]();}},Scene_ItemCrafting[_0x29fb5d(0x217)]['updateItemSpriteOpacity']=function(){const _0x131887=_0x29fb5d;this[_0x131887(0x294)][_0x131887(0x308)]+=this[_0x131887(0x1d1)];},Scene_ItemCrafting[_0x29fb5d(0x217)]['updateAnimationSprite']=function(){const _0x5a4982=_0x29fb5d;if(!this[_0x5a4982(0x350)])return;if(this['_animationSprite'][_0x5a4982(0x381)]())return;this[_0x5a4982(0x3af)](),this[_0x5a4982(0x306)](this['_animationIDs']['shift']());},Scene_ItemCrafting['prototype'][_0x29fb5d(0x3af)]=function(){const _0x204b9f=_0x29fb5d;if(!this['_animationSprite'])return;this[_0x204b9f(0x39b)](this[_0x204b9f(0x350)]),this[_0x204b9f(0x350)]['destroy'](),this[_0x204b9f(0x350)]=undefined;},Scene_ItemCrafting[_0x29fb5d(0x217)][_0x29fb5d(0x3ae)]=function(){const _0x1a1a6d=_0x29fb5d;if(!this['_itemSprite'])return;this[_0x1a1a6d(0x39b)](this[_0x1a1a6d(0x294)]),this[_0x1a1a6d(0x294)]['destroy'](),this['_itemSprite']=undefined;},Scene_ItemCrafting[_0x29fb5d(0x217)][_0x29fb5d(0x30c)]=function(){const _0x2c608e=_0x29fb5d;if(TouchInput[_0x2c608e(0x36e)]())return!![];if(Input[_0x2c608e(0x227)]('ok'))return!![];if(Input[_0x2c608e(0x227)](_0x2c608e(0x337)))return!![];if(this[_0x2c608e(0x294)][_0x2c608e(0x308)]<0xff)return![];if(this[_0x2c608e(0x350)])return![];return this['_animationWait']--<=0x0;},Scene_ItemCrafting[_0x29fb5d(0x217)]['processFinishAnimation']=function(){const _0x430ff9=_0x29fb5d;this['destroyAnimationSprite'](),this[_0x430ff9(0x3ae)](),this[_0x430ff9(0x1f9)](),TouchInput[_0x430ff9(0x2ac)](),Input[_0x430ff9(0x2ac)]();},Scene_ItemCrafting[_0x29fb5d(0x217)][_0x29fb5d(0x1f1)]=function(){const _0x112eab=_0x29fb5d;Scene_Item[_0x112eab(0x217)][_0x112eab(0x1f1)][_0x112eab(0x1ef)](this),$gameTemp[_0x112eab(0x200)]();},Scene_ItemCrafting[_0x29fb5d(0x217)][_0x29fb5d(0x373)]=function(){const _0x855398=_0x29fb5d;if(!SceneManager['isSceneItemCrafting']())return;const _0x342370=VisuMZ[_0x855398(0x28c)]['Settings'][_0x855398(0x2d9)];_0x342370[_0x855398(0x2ce)]&&$gameSwitches[_0x855398(0x36c)](_0x342370[_0x855398(0x2ce)],![]);},Scene_ItemCrafting[_0x29fb5d(0x217)]['enableCraftingSwitches']=function(){const _0x3c3b14=_0x29fb5d;if(!SceneManager['isSceneItemCrafting']())return;const _0x27ef04=VisuMZ[_0x3c3b14(0x28c)]['Settings'][_0x3c3b14(0x2d9)];_0x27ef04[_0x3c3b14(0x2ce)]&&$gameSwitches[_0x3c3b14(0x36c)](_0x27ef04['SwitchCraft'],!![]);},VisuMZ[_0x29fb5d(0x28c)][_0x29fb5d(0x277)]=Window_MenuCommand['prototype'][_0x29fb5d(0x29e)],Window_MenuCommand[_0x29fb5d(0x217)][_0x29fb5d(0x29e)]=function(){const _0x45dde9=_0x29fb5d;VisuMZ['ItemCraftingSys'][_0x45dde9(0x277)][_0x45dde9(0x1ef)](this),this[_0x45dde9(0x1f5)]();},Window_MenuCommand[_0x29fb5d(0x217)][_0x29fb5d(0x1f5)]=function(){const _0x27a632=_0x29fb5d;if(!this[_0x27a632(0x271)]())return;if(!this[_0x27a632(0x2e9)]())return;const _0x177f8c=TextManager[_0x27a632(0x34e)],_0x177a6f=this[_0x27a632(0x1e4)]();this[_0x27a632(0x37f)](_0x177f8c,'itemCrafting',_0x177a6f);},Window_MenuCommand[_0x29fb5d(0x217)][_0x29fb5d(0x271)]=function(){const _0x285606=_0x29fb5d;return Imported[_0x285606(0x286)]?![]:!![];},Window_MenuCommand[_0x29fb5d(0x217)][_0x29fb5d(0x2e9)]=function(){const _0x3711a=_0x29fb5d;return $gameSystem[_0x3711a(0x269)]();},Window_MenuCommand[_0x29fb5d(0x217)][_0x29fb5d(0x1e4)]=function(){const _0x3c5e11=_0x29fb5d;if(DataManager[_0x3c5e11(0x290)]()[_0x3c5e11(0x316)]<=0x0)return![];return $gameSystem[_0x3c5e11(0x3c9)]();},VisuMZ['ItemCraftingSys'][_0x29fb5d(0x392)]=Window_ItemCategory[_0x29fb5d(0x217)]['makeCommandList'],Window_ItemCategory[_0x29fb5d(0x217)][_0x29fb5d(0x3da)]=function(){const _0x1010ce=_0x29fb5d;VisuMZ[_0x1010ce(0x28c)][_0x1010ce(0x392)][_0x1010ce(0x1ef)](this),SceneManager[_0x1010ce(0x28e)]()&&this['createUncategorizedItemCategory']();},Window_ItemCategory[_0x29fb5d(0x217)][_0x29fb5d(0x1d4)]=function(){const _0x150ad8=_0x29fb5d,_0x126c33=Window_ItemCategory[_0x150ad8(0x2d1)],_0x5dbc77=DataManager[_0x150ad8(0x290)]()[_0x150ad8(0x22d)](),_0x2980c4=[];for(const _0x5aa683 of _0x126c33){this[_0x150ad8(0x315)]=_0x5aa683[_0x150ad8(0x323)];for(const _0x1d63ec of _0x5dbc77){if(Window_ItemList[_0x150ad8(0x217)]['includes'][_0x150ad8(0x1ef)](this,_0x1d63ec)){if(_0x150ad8(0x1ff)==='sXmBA')_0x2980c4[_0x150ad8(0x3ac)](_0x1d63ec);else{if(this[_0x150ad8(0x2d5)]&&this[_0x150ad8(0x2d5)]['active'])return _0x417ff3[_0x150ad8(0x2ab)]['Settings']['ShopScene'][_0x150ad8(0x2e7)];return _0x4cf363[_0x150ad8(0x217)]['buttonAssistText2'][_0x150ad8(0x1ef)](this);}}}}this['_category']=null;for(const _0x2bc9e0 of _0x2980c4){if(_0x150ad8(0x2bf)!==_0x150ad8(0x2bd))_0x5dbc77[_0x150ad8(0x240)](_0x2bc9e0);else{if(this[_0x150ad8(0x2d5)]&&this[_0x150ad8(0x2d5)]['active'])return _0x2989fe[_0x150ad8(0x345)]('up','down');return _0x5728e1['prototype'][_0x150ad8(0x3a6)][_0x150ad8(0x1ef)](this);}}if(_0x5dbc77[_0x150ad8(0x316)]>0x0){if(_0x150ad8(0x25a)===_0x150ad8(0x330)){const _0x473394=this[_0x150ad8(0x3e8)]();this[_0x150ad8(0x1c6)]=new _0x3d45ee(_0x473394),this[_0x150ad8(0x1c6)][_0x150ad8(0x29d)](this[_0x150ad8(0x262)]),this['_itemWindow']['setHandler']('ok',this[_0x150ad8(0x26d)][_0x150ad8(0x2a7)](this)),this['_itemWindow']['setHandler']('cancel',this[_0x150ad8(0x2a4)][_0x150ad8(0x2a7)](this)),this[_0x150ad8(0x2f6)](this[_0x150ad8(0x1c6)]),this['_categoryWindow'][_0x150ad8(0x201)](this[_0x150ad8(0x1c6)]),!this[_0x150ad8(0x33f)][_0x150ad8(0x38b)]()&&(this['_itemWindow']['y']-=this[_0x150ad8(0x33f)][_0x150ad8(0x3a0)],this['_itemWindow'][_0x150ad8(0x3a0)]+=this[_0x150ad8(0x33f)][_0x150ad8(0x3a0)],this[_0x150ad8(0x33f)][_0x150ad8(0x3b6)](),this[_0x150ad8(0x33f)]['deactivate'](),this[_0x150ad8(0x353)]());}else this[_0x150ad8(0x2a1)]();}this[_0x150ad8(0x1dc)]=_0x5dbc77;},Window_ItemCategory['prototype'][_0x29fb5d(0x2a1)]=function(){const _0x3b01dc=_0x29fb5d,_0x40ae95=VisuMZ[_0x3b01dc(0x28c)]['Settings'][_0x3b01dc(0x2d9)];let _0x3025e0=_0x40ae95[_0x3b01dc(0x398)]||_0x3b01dc(0x398),_0x2c4754=_0x40ae95[_0x3b01dc(0x298)]||0xa0;_0x3025e0=_0x3b01dc(0x30e)[_0x3b01dc(0x23d)](_0x2c4754,_0x3025e0),this[_0x3b01dc(0x37f)](_0x3025e0,_0x3b01dc(0x24d),!![],_0x3b01dc(0x1fb));},VisuMZ[_0x29fb5d(0x28c)]['Window_ItemCategory_addItemCategory']=Window_ItemCategory[_0x29fb5d(0x217)][_0x29fb5d(0x2c9)],Window_ItemCategory[_0x29fb5d(0x217)][_0x29fb5d(0x2c9)]=function(_0x4f27c9){const _0x130f21=_0x29fb5d;if(SceneManager[_0x130f21(0x28e)]()&&!this['isItemCraftingCategoryValid'](_0x4f27c9))return;VisuMZ[_0x130f21(0x28c)]['Window_ItemCategory_addItemCategory']['call'](this,_0x4f27c9);},Window_ItemCategory[_0x29fb5d(0x217)]['isItemCraftingCategoryValid']=function(_0x42bbd3){const _0x58c48e=_0x29fb5d,_0x24b2f=DataManager[_0x58c48e(0x290)](),_0x5e6f3f=_0x42bbd3['Type'],_0x7e898c=_0x42bbd3['Icon'];this[_0x58c48e(0x315)]=_0x5e6f3f;for(const _0x593e7c of _0x24b2f){if(!_0x593e7c)continue;if(Window_ItemList[_0x58c48e(0x217)][_0x58c48e(0x372)][_0x58c48e(0x1ef)](this,_0x593e7c))return this[_0x58c48e(0x315)]=null,!![];}return this[_0x58c48e(0x315)]=null,![];},VisuMZ['ItemCraftingSys'][_0x29fb5d(0x216)]=Window_ItemCategory[_0x29fb5d(0x217)][_0x29fb5d(0x38b)],Window_ItemCategory[_0x29fb5d(0x217)]['needsSelection']=function(){const _0x9a265f=_0x29fb5d;if(SceneManager[_0x9a265f(0x28e)]())return!![];return VisuMZ[_0x9a265f(0x28c)]['Window_ItemCategory_needsSelection']['call'](this);};function Window_ItemCraftingList(){const _0x5a8699=_0x29fb5d;this[_0x5a8699(0x375)](...arguments);}Window_ItemCraftingList[_0x29fb5d(0x217)]=Object[_0x29fb5d(0x2f9)](Window_ItemList['prototype']),Window_ItemCraftingList[_0x29fb5d(0x217)][_0x29fb5d(0x279)]=Window_ItemCraftingList,Window_ItemCraftingList[_0x29fb5d(0x2ae)]=VisuMZ[_0x29fb5d(0x28c)][_0x29fb5d(0x2af)]['Window'][_0x29fb5d(0x2fb)],Window_ItemCraftingList[_0x29fb5d(0x1f7)]=VisuMZ[_0x29fb5d(0x28c)]['Settings']['Mask'][_0x29fb5d(0x37b)],Window_ItemCraftingList[_0x29fb5d(0x217)]['initialize']=function(_0x1c5f83){const _0x450156=_0x29fb5d;Window_ItemList[_0x450156(0x217)][_0x450156(0x375)][_0x450156(0x1ef)](this,_0x1c5f83),this[_0x450156(0x24c)]();},Window_ItemCraftingList[_0x29fb5d(0x217)][_0x29fb5d(0x26f)]=function(){return 0x1;},Window_ItemCraftingList['prototype'][_0x29fb5d(0x2ea)]=function(){const _0x144b97=_0x29fb5d;return Window_Scrollable[_0x144b97(0x217)]['itemHeight']['call'](this)*0x3+0x8;},Window_ItemCraftingList['prototype']['isEnabled']=function(_0xbde40d){return!![];},Window_ItemCraftingList[_0x29fb5d(0x217)][_0x29fb5d(0x237)]=function(){const _0x2a94b5=_0x29fb5d;this['_data']=DataManager[_0x2a94b5(0x290)]()[_0x2a94b5(0x3de)](_0x30381f=>this[_0x2a94b5(0x372)](_0x30381f));const _0x49492b=this['_data']['map'](_0x55f7d8=>DataManager[_0x2a94b5(0x3c2)](_0x55f7d8)[_0x2a94b5(0x316)]);this[_0x2a94b5(0x2d2)]=Math['max'](..._0x49492b)+0x1;},Window_ItemCraftingList['prototype'][_0x29fb5d(0x372)]=function(_0x19218c){const _0x380106=_0x29fb5d;if(this[_0x380106(0x315)]===_0x380106(0x1fb)){const _0xc1cdbf=SceneManager[_0x380106(0x1f6)];if(_0xc1cdbf&&_0xc1cdbf[_0x380106(0x33f)]&&_0xc1cdbf[_0x380106(0x33f)][_0x380106(0x1dc)])return _0xc1cdbf[_0x380106(0x33f)][_0x380106(0x1dc)][_0x380106(0x372)](_0x19218c);}return Window_ItemList[_0x380106(0x217)][_0x380106(0x372)][_0x380106(0x1ef)](this,_0x19218c);},Window_ItemCraftingList[_0x29fb5d(0x217)]['selectLast']=function(){},Window_ItemCraftingList[_0x29fb5d(0x217)][_0x29fb5d(0x35a)]=function(_0x4f1169){const _0x168494=_0x29fb5d,_0x25f684=this[_0x168494(0x313)](_0x4f1169);if(!_0x25f684)return;const _0x417354=this['itemRectWithPadding'](_0x4f1169);this[_0x168494(0x2f3)](),this['drawFadedItemBackground'](_0x417354,0x2),this['drawBigItemImage'](_0x4f1169,_0x25f684,_0x417354),this[_0x168494(0x1c5)](_0x25f684,_0x417354),this[_0x168494(0x3b3)](_0x25f684,_0x417354),this['drawCraftingIngredients'](_0x25f684,_0x417354);},Window_ItemCraftingList[_0x29fb5d(0x217)][_0x29fb5d(0x2b7)]=function(_0x227acc,_0x23564f){const _0x1dbaca=_0x29fb5d;_0x23564f=_0x23564f||0x1,this[_0x1dbaca(0x2d8)](![]);const _0x5f55f3=ColorManager[_0x1dbaca(0x2ca)](),_0x238cd5=ColorManager[_0x1dbaca(0x1ed)](),_0x29ac01=_0x227acc[_0x1dbaca(0x293)]/0x2,_0x28f205=this[_0x1dbaca(0x3b2)]();while(_0x23564f--){this[_0x1dbaca(0x280)]['gradientFillRect'](_0x227acc['x'],_0x227acc['y'],_0x29ac01,_0x28f205,_0x238cd5,_0x5f55f3),this[_0x1dbaca(0x280)][_0x1dbaca(0x360)](_0x227acc['x']+_0x29ac01,_0x227acc['y'],_0x29ac01,_0x28f205,_0x5f55f3,_0x238cd5);}this[_0x1dbaca(0x2d8)](!![]);},Window_Base['prototype'][_0x29fb5d(0x3b3)]=function(_0x349407,_0x3f77b4){const _0x61c9c6=_0x29fb5d;let _0x336aac=_0x349407[_0x61c9c6(0x383)],_0x2450a1=_0x3f77b4[_0x61c9c6(0x3a0)]+this[_0x61c9c6(0x1c8)]()*0x2,_0x2cf9a9=_0x3f77b4['y'],_0x2ce7a3=_0x3f77b4[_0x61c9c6(0x293)]-_0x2450a1-this['itemPadding']()-ImageManager[_0x61c9c6(0x1df)];DataManager['isCraftingItemMasked'](_0x349407)&&(_0x61c9c6(0x2a6)!==_0x61c9c6(0x3a9)?(_0x336aac=VisuMZ['ItemCraftingSys'][_0x61c9c6(0x3d5)](_0x349407),this[_0x61c9c6(0x280)][_0x61c9c6(0x391)]=Window_ItemCraftingList[_0x61c9c6(0x1f7)]):(_0x41868c[_0x61c9c6(0x217)]['terminate'][_0x61c9c6(0x1ef)](this),_0x360f86[_0x61c9c6(0x200)]())),this['drawText'](_0x336aac,_0x2450a1,_0x2cf9a9,_0x2ce7a3,_0x61c9c6(0x37a)),this[_0x61c9c6(0x280)][_0x61c9c6(0x391)]=![];},VisuMZ[_0x29fb5d(0x28c)][_0x29fb5d(0x3d5)]=function(_0x69ffea){const _0x2d4f35=_0x29fb5d;if(_0x69ffea['note'][_0x2d4f35(0x26a)](VisuMZ[_0x2d4f35(0x28c)][_0x2d4f35(0x2f1)][_0x2d4f35(0x224)]))return String(RegExp['$1']);else{const _0x4cedc6=TextManager[_0x2d4f35(0x3b5)];return Array(_0x69ffea[_0x2d4f35(0x383)][_0x2d4f35(0x316)]+0x1)['join'](_0x4cedc6);}},Window_ItemCraftingList[_0x29fb5d(0x217)]['drawBigItemImage']=function(_0x295ef7,_0x401341,_0x4979e7){const _0x190cd1=_0x29fb5d,_0x27ed41=VisuMZ[_0x190cd1(0x28c)][_0x190cd1(0x2f1)],_0x5c5518=_0x401341['note'];let _0x5486bf='';if(_0x5c5518[_0x190cd1(0x26a)](_0x27ed41['craftPicture']))_0x5486bf=String(RegExp['$1']);else _0x5c5518['match'](_0x27ed41['bigPicture'])&&(_0x190cd1(0x339)!=='xBcfg'?_0x5486bf=String(RegExp['$1']):_0x395984[_0x190cd1(0x2e2)]=null);if(_0x5486bf){if(_0x190cd1(0x20f)!=='XVDJf')this[_0x190cd1(0x1d1)]=_0x3dceeb[_0x190cd1(0x28c)][_0x190cd1(0x2af)][_0x190cd1(0x35b)][_0x190cd1(0x3b8)]||0x1,this[_0x190cd1(0x2b8)][_0x190cd1(0x327)][_0x190cd1(0x26a)](_0x1672ff[_0x190cd1(0x28c)][_0x190cd1(0x2f1)][_0x190cd1(0x3a1)])&&(this[_0x190cd1(0x1d1)]=_0x1cbeec[_0x190cd1(0x1cb)](_0x308b89(_0xb6f0bc['$1']),0x1)),this['_itemSprite'][_0x190cd1(0x308)]=0x0;else{const _0x3cd8e0=ImageManager[_0x190cd1(0x312)](_0x5486bf);_0x3cd8e0[_0x190cd1(0x35e)](this[_0x190cd1(0x252)]['bind'](this,_0x295ef7,_0x3cd8e0));}}else this[_0x190cd1(0x225)](_0x401341,_0x4979e7);},Window_ItemCraftingList['prototype'][_0x29fb5d(0x252)]=function(_0x2ae5d0,_0x1456f5){const _0x3c6529=_0x29fb5d,_0x2831de=this[_0x3c6529(0x249)](_0x2ae5d0);let _0x22b4c6=_0x2831de['x']+this[_0x3c6529(0x1c8)](),_0x32cfc0=_0x2831de['y']+0x4,_0x59b70b=_0x2831de[_0x3c6529(0x293)]-this[_0x3c6529(0x1c8)]()*0x2,_0x1e555a=_0x2831de[_0x3c6529(0x3a0)]-0x8,_0x467d3e=Math[_0x3c6529(0x202)](_0x59b70b,_0x1e555a);const _0x3684e0=_0x467d3e/_0x1456f5[_0x3c6529(0x293)],_0x2200ac=_0x467d3e/_0x1456f5['height'],_0x22dc4c=Math['min'](_0x3684e0,_0x2200ac,0x1);let _0x3c9cac=Math[_0x3c6529(0x2cb)](_0x1456f5['width']*_0x22dc4c),_0x53c7bd=Math[_0x3c6529(0x2cb)](_0x1456f5['height']*_0x22dc4c);_0x22b4c6+=Math[_0x3c6529(0x2cb)]((_0x467d3e-_0x3c9cac)/0x2),_0x32cfc0+=Math[_0x3c6529(0x2cb)]((_0x467d3e-_0x53c7bd)/0x2);const _0x4c55f6=_0x1456f5[_0x3c6529(0x293)],_0x1bc747=_0x1456f5[_0x3c6529(0x3a0)];this[_0x3c6529(0x280)][_0x3c6529(0x24f)][_0x3c6529(0x1d2)]=!![],this['contents'][_0x3c6529(0x38c)](_0x1456f5,0x0,0x0,_0x4c55f6,_0x1bc747,_0x22b4c6,_0x32cfc0,_0x3c9cac,_0x53c7bd),this['contents'][_0x3c6529(0x24f)][_0x3c6529(0x1d2)]=!![];},Window_ItemCraftingList[_0x29fb5d(0x217)][_0x29fb5d(0x225)]=function(_0x20b476,_0x3383ad){const _0x4d06e7=_0x29fb5d,_0x31f544=_0x20b476[_0x4d06e7(0x2df)];let _0x54058f=_0x3383ad['x']+this['itemPadding'](),_0x16b363=_0x3383ad['y']+0x4,_0x59128f=_0x3383ad[_0x4d06e7(0x293)]-this[_0x4d06e7(0x1c8)]()*0x2,_0x363246=_0x3383ad[_0x4d06e7(0x3a0)]-0x8,_0x15e276=Math[_0x4d06e7(0x202)](_0x59128f,_0x363246);_0x15e276=Math[_0x4d06e7(0x366)](_0x15e276/ImageManager['iconWidth'])*ImageManager[_0x4d06e7(0x1df)],_0x16b363+=(_0x363246-_0x15e276)/0x2;const _0x2a8088=ImageManager[_0x4d06e7(0x3a3)](_0x4d06e7(0x33b)),_0x5315af=ImageManager[_0x4d06e7(0x1df)],_0x42850b=ImageManager['iconHeight'],_0x3e4acc=_0x31f544%0x10*_0x5315af,_0x23e75f=Math[_0x4d06e7(0x366)](_0x31f544/0x10)*_0x42850b;this[_0x4d06e7(0x280)][_0x4d06e7(0x24f)][_0x4d06e7(0x1d2)]=![],this[_0x4d06e7(0x280)][_0x4d06e7(0x38c)](_0x2a8088,_0x3e4acc,_0x23e75f,_0x5315af,_0x42850b,_0x54058f,_0x16b363,_0x15e276,_0x15e276),this[_0x4d06e7(0x280)][_0x4d06e7(0x24f)][_0x4d06e7(0x1d2)]=!![];},Window_ItemCraftingList['prototype'][_0x29fb5d(0x1c5)]=function(_0x15234f,_0x27395a){const _0x3aa145=_0x29fb5d;if(!$gameSystem['isItemCrafted'](_0x15234f))return;const _0x4182da=ImageManager[_0x3aa145(0x3a7)];let _0x5285fb=_0x27395a['x']+_0x27395a[_0x3aa145(0x293)]-ImageManager['iconWidth'],_0x440044=_0x27395a['y']+0x2;this[_0x3aa145(0x22a)](_0x4182da,_0x5285fb,_0x440044);},Window_ItemCraftingList[_0x29fb5d(0x217)][_0x29fb5d(0x399)]=function(_0x1649d3,_0x5b6f0b){const _0x4f0859=_0x29fb5d,_0x1eca53=DataManager[_0x4f0859(0x3c2)](_0x1649d3);let _0x3dc66a=_0x5b6f0b[_0x4f0859(0x3a0)]+this['itemPadding']()*0x2,_0x28b238=_0x5b6f0b['y']+Math[_0x4f0859(0x2cb)](this[_0x4f0859(0x3b2)]()*1.2),_0x3343b1=_0x5b6f0b[_0x4f0859(0x293)]-_0x3dc66a-this[_0x4f0859(0x1c8)](),_0x5ca889=Math[_0x4f0859(0x366)](_0x3343b1/this['_maxIngredientsSize']),_0x216f91=!![];for(const _0x50873a of _0x1eca53){if(_0x4f0859(0x3f0)!=='PxJFU'){if(!_0x216f91){if(_0x4f0859(0x39c)!==_0x4f0859(0x37c)){let _0x3f2ef2=TextManager[_0x4f0859(0x3be)],_0x5802ea=_0x5b6f0b['y']+(_0x5b6f0b[_0x4f0859(0x3a0)]-this[_0x4f0859(0x3b2)]()*1.5);this['drawText'](_0x3f2ef2,_0x3dc66a,_0x5802ea,_0x5ca889,_0x4f0859(0x31d));}else _0x39e3a0[_0x4f0859(0x217)][_0x4f0859(0x314)][_0x4f0859(0x1ef)](this),this[_0x4f0859(0x3e2)]();}_0x3dc66a+=_0x5ca889;const _0x48ecf7=_0x50873a[0x0],_0x4ad8b0=_0x50873a[0x1],_0x22b98c=_0x48ecf7==='gold'?$gameParty[_0x4f0859(0x321)]():$gameParty['numItems'](_0x48ecf7);if(_0x48ecf7===_0x4f0859(0x321))this['drawIngredientGold'](_0x4ad8b0,_0x22b98c,_0x3dc66a,_0x28b238,_0x5ca889);else typeof _0x48ecf7===_0x4f0859(0x32f)&&_0x48ecf7[_0x4f0859(0x26a)](/CATEGORY/i)?this['drawIngredientCategory'](_0x48ecf7,_0x4ad8b0,_0x3dc66a,_0x28b238,_0x5ca889):this[_0x4f0859(0x206)](_0x48ecf7,_0x4ad8b0,_0x22b98c,_0x3dc66a,_0x28b238,_0x5ca889);this[_0x4f0859(0x2f3)](),_0x216f91=![];}else _0x464c9b=_0x3b8116,_0x278c36=this[_0x4f0859(0x2ad)](_0x34cc6f);}},Window_ItemCraftingList[_0x29fb5d(0x217)][_0x29fb5d(0x378)]=function(_0x4557f9,_0x26024e,_0x2af63a,_0x2e9ce6,_0x5d8747){const _0x11faa2=_0x29fb5d;if(Imported[_0x11faa2(0x243)]){let _0xe6fc5c=_0x2af63a-Math[_0x11faa2(0x2cb)](ImageManager[_0x11faa2(0x1df)]/0x2),_0x1f7f6b=_0x2e9ce6+Math[_0x11faa2(0x2cb)]((this['lineHeight']()-ImageManager[_0x11faa2(0x2a2)])/0x2);const _0x1b21ae=VisuMZ[_0x11faa2(0x2f4)][_0x11faa2(0x2af)]['Gold'][_0x11faa2(0x380)];this[_0x11faa2(0x22a)](_0x1b21ae,_0xe6fc5c,_0x1f7f6b);}else{if('aboYV'!==_0x11faa2(0x3d4)){let _0x4ae085=this[_0x11faa2(0x382)](this[_0x11faa2(0x2da)])+this[_0x11faa2(0x1c8)]()*0x4;this[_0x11faa2(0x293)]=_0x4ae085+_0x3c9eb8['windowPadding']()*0x2,this[_0x11faa2(0x2ee)]();if(this[_0x11faa2(0x2fe)]())return;const _0x533202=_0x2b2726[_0x11faa2(0x2ca)]();this[_0x11faa2(0x280)]['fillRect'](0x0,0x0,this[_0x11faa2(0x2f5)],this['innerHeight'],_0x533202);}else{let _0x12b204=_0x2af63a-Math[_0x11faa2(0x2cb)](_0x5d8747/0x2),_0x3d5436=_0x2e9ce6+Math['round']((this[_0x11faa2(0x3b2)]()-ImageManager['iconHeight'])/0x2);this[_0x11faa2(0x335)](ColorManager[_0x11faa2(0x234)]()),this[_0x11faa2(0x35c)](),this[_0x11faa2(0x3cc)](TextManager[_0x11faa2(0x2e1)],_0x12b204,_0x3d5436,_0x5d8747,_0x11faa2(0x31d)),this[_0x11faa2(0x2f3)]();}}let _0x470245=_0x2af63a-Math[_0x11faa2(0x2cb)](_0x5d8747/0x2),_0xbb111a=_0x2e9ce6+this[_0x11faa2(0x3b2)]();const _0x3416e9=VisuMZ[_0x11faa2(0x2ab)][_0x11faa2(0x2af)][_0x11faa2(0x25d)][_0x11faa2(0x1da)];let _0x21550f=_0x3416e9[_0x11faa2(0x23d)](_0x4557f9);_0x4557f9>_0x26024e&&this['changeTextColor'](ColorManager[_0x11faa2(0x2a5)]()),this[_0x11faa2(0x280)][_0x11faa2(0x258)]=Window_ItemCraftingList[_0x11faa2(0x2ae)],this[_0x11faa2(0x3cc)](_0x21550f,_0x470245,_0xbb111a,_0x5d8747,_0x11faa2(0x31d));},Window_ItemCraftingList[_0x29fb5d(0x217)][_0x29fb5d(0x1de)]=function(_0x1acb0a,_0x453d8d,_0x2106d7,_0x8d8f5c,_0x31b533){const _0x283de1=_0x29fb5d,_0x161982=VisuMZ['ItemCraftingSys'][_0x283de1(0x2af)][_0x283de1(0x2d9)];let _0x4891be=_0x2106d7-Math[_0x283de1(0x2cb)](ImageManager[_0x283de1(0x1df)]/0x2),_0x426110=_0x8d8f5c+Math[_0x283de1(0x2cb)]((this['lineHeight']()-ImageManager['iconHeight'])/0x2);this[_0x283de1(0x22a)](_0x161982['CategoryIcon'],_0x4891be,_0x426110),_0x1acb0a[_0x283de1(0x26a)](/CATEGORY: (.*)/i);const _0x14887f=String(RegExp['$1'])[_0x283de1(0x2cd)]();let _0x308f62=_0x2106d7-Math[_0x283de1(0x2cb)](_0x31b533/0x2),_0x165138=_0x8d8f5c;this['contents'][_0x283de1(0x258)]=Window_ItemCraftingList['quantityFontSize'],this[_0x283de1(0x3cc)](_0x14887f,_0x308f62,_0x165138,_0x31b533,_0x283de1(0x31d));let _0x3030bf=_0x2106d7-Math[_0x283de1(0x2cb)](_0x31b533/0x2),_0x10a0f2=_0x8d8f5c+this[_0x283de1(0x3b2)]();const _0x25faed=VisuMZ['ItemsEquipsCore'][_0x283de1(0x2af)][_0x283de1(0x25d)][_0x283de1(0x1da)];let _0x33d30f=_0x25faed[_0x283de1(0x23d)](_0x453d8d);this[_0x283de1(0x280)][_0x283de1(0x258)]=Window_ItemCraftingList[_0x283de1(0x2ae)],this[_0x283de1(0x3cc)](_0x33d30f,_0x3030bf,_0x10a0f2,_0x31b533,_0x283de1(0x31d));},Window_ItemCraftingList['prototype'][_0x29fb5d(0x206)]=function(_0x335235,_0x4236da,_0x22000a,_0x40b21c,_0x2dbd93,_0x14d029){const _0xa6e2cf=_0x29fb5d;let _0x3a5adc=_0x40b21c-Math[_0xa6e2cf(0x2cb)](ImageManager['iconWidth']/0x2),_0x230c4b=_0x2dbd93+Math[_0xa6e2cf(0x2cb)]((this['lineHeight']()-ImageManager[_0xa6e2cf(0x2a2)])/0x2);this[_0xa6e2cf(0x22a)](_0x335235[_0xa6e2cf(0x2df)],_0x3a5adc,_0x230c4b);let _0x2ea3f2=_0x40b21c-Math[_0xa6e2cf(0x2cb)](_0x14d029/0x2),_0x20400d=_0x2dbd93+this[_0xa6e2cf(0x3b2)]();const _0x40bdef=VisuMZ[_0xa6e2cf(0x2ab)][_0xa6e2cf(0x2af)][_0xa6e2cf(0x25d)][_0xa6e2cf(0x1da)];let _0x2fdb5c=_0x40bdef[_0xa6e2cf(0x23d)]('%1/%2'[_0xa6e2cf(0x23d)](_0x22000a,_0x4236da));_0x4236da>_0x22000a&&this['changeTextColor'](ColorManager[_0xa6e2cf(0x2a5)]()),this[_0xa6e2cf(0x280)]['fontSize']=Window_ItemCraftingList[_0xa6e2cf(0x2ae)],this[_0xa6e2cf(0x3cc)](_0x2fdb5c,_0x2ea3f2,_0x20400d,_0x14d029,'center');},Window_ItemCraftingList['prototype'][_0x29fb5d(0x24c)]=function(){const _0x16fe78=_0x29fb5d;if(!VisuMZ[_0x16fe78(0x28c)][_0x16fe78(0x2af)][_0x16fe78(0x1fc)]['ToolTips'])return;const _0x4b5908=new Rectangle(0x0,0x0,Graphics[_0x16fe78(0x274)],Window_Base[_0x16fe78(0x217)][_0x16fe78(0x295)](0x1));this[_0x16fe78(0x25e)]=new Window_ItemCraftingTooltip(_0x4b5908),this[_0x16fe78(0x36d)](this[_0x16fe78(0x25e)]);},Window_ItemCraftingList['prototype'][_0x29fb5d(0x314)]=function(){const _0x115671=_0x29fb5d;Window_ItemList[_0x115671(0x217)][_0x115671(0x314)][_0x115671(0x1ef)](this),this[_0x115671(0x3e2)]();},Window_ItemCraftingList[_0x29fb5d(0x217)][_0x29fb5d(0x3e2)]=function(){const _0x75062d=_0x29fb5d;if(!this['_tooltipWindow'])return;if(this[_0x75062d(0x3c3)]()){if(_0x75062d(0x371)===_0x75062d(0x301))return _0xde7edb['floor'](this[_0x75062d(0x369)]()+this[_0x75062d(0x3b2)]()*0x2);else this[_0x75062d(0x1d9)]();}else _0x75062d(0x254)!==_0x75062d(0x254)?(_0x21e84b['prototype'][_0x75062d(0x375)][_0x75062d(0x1ef)](this,_0x1712f8),this[_0x75062d(0x247)]=0x0):this[_0x75062d(0x25e)]['setText']('');const _0x42662c=new Point(TouchInput['x'],TouchInput['y']),_0x58ea39=this[_0x75062d(0x1ea)][_0x75062d(0x2fc)](_0x42662c);this[_0x75062d(0x25e)]['x']=_0x58ea39['x']-this[_0x75062d(0x25e)][_0x75062d(0x293)]/0x2,this['_tooltipWindow']['y']=_0x58ea39['y']-this[_0x75062d(0x25e)][_0x75062d(0x3a0)];},Window_ItemCraftingList[_0x29fb5d(0x217)]['tooltipFrameCheckRequirements']=function(){const _0x3cb6e3=_0x29fb5d;if(!this[_0x3cb6e3(0x223)])return![];if(!this[_0x3cb6e3(0x365)]())return![];if(!this[_0x3cb6e3(0x30d)]())return![];if(this[_0x3cb6e3(0x28a)]()!==this[_0x3cb6e3(0x396)]())return![];return!![];},Window_ItemCraftingList[_0x29fb5d(0x217)]['setTooltipWindowText']=function(){const _0x54b9d5=_0x29fb5d,_0x38bbb5=this[_0x54b9d5(0x249)](this['index']()),_0x2764ad=DataManager[_0x54b9d5(0x3c2)](this[_0x54b9d5(0x365)]()),_0x1c144b=new Point(TouchInput['x'],TouchInput['y']),_0x5c6a10=this[_0x54b9d5(0x1ea)][_0x54b9d5(0x2fc)](_0x1c144b);let _0x489417=_0x38bbb5['height']+this['itemPadding']()*0x2,_0x4c9fb6=_0x38bbb5['y']+this['lineHeight'](),_0x5b9fb3=_0x38bbb5[_0x54b9d5(0x293)]-_0x489417-this[_0x54b9d5(0x1c8)](),_0x5736e9=Math[_0x54b9d5(0x366)](_0x5b9fb3/this[_0x54b9d5(0x2d2)]);for(const _0x30a289 of _0x2764ad){_0x489417+=_0x5736e9;const _0x16c739=new Rectangle(_0x489417-ImageManager[_0x54b9d5(0x1df)],0x0,ImageManager[_0x54b9d5(0x1df)]*0x2,Graphics[_0x54b9d5(0x241)]);if(_0x16c739[_0x54b9d5(0x23e)](_0x5c6a10['x'],_0x5c6a10['y'])){let _0x2cf9fc=_0x30a289[0x0],_0x4aa35a='';if(_0x2cf9fc===_0x54b9d5(0x321))_0x4aa35a=TextManager[_0x54b9d5(0x2e1)];else typeof _0x2cf9fc===_0x54b9d5(0x32f)&&_0x2cf9fc['match'](/CATEGORY/i)?(_0x2cf9fc[_0x54b9d5(0x26a)](/CATEGORY: (.*)/i),_0x4aa35a=String(RegExp['$1'])[_0x54b9d5(0x2cd)]()):_0x54b9d5(0x395)===_0x54b9d5(0x1e3)?this[_0x54b9d5(0x33c)]():_0x4aa35a=_0x2cf9fc[_0x54b9d5(0x383)];this[_0x54b9d5(0x25e)][_0x54b9d5(0x3e5)](_0x4aa35a[_0x54b9d5(0x2cd)]());return;}}this['_tooltipWindow'][_0x54b9d5(0x3e5)]('');},Window_ItemCraftingList[_0x29fb5d(0x217)][_0x29fb5d(0x3d1)]=function(){const _0x30e63e=_0x29fb5d,_0x2db33a=this[_0x30e63e(0x365)]()&&DataManager[_0x30e63e(0x3ca)](this['item']())?null:this[_0x30e63e(0x365)]();this[_0x30e63e(0x38a)](_0x2db33a),this[_0x30e63e(0x3ec)]&&this[_0x30e63e(0x3ec)][_0x30e63e(0x279)]===Window_ShopStatus&&this[_0x30e63e(0x3ec)]['setItem'](_0x2db33a);};function Window_ItemCraftingTooltip(){const _0x4d2e3b=_0x29fb5d;this[_0x4d2e3b(0x375)](...arguments);}Window_ItemCraftingTooltip['prototype']=Object[_0x29fb5d(0x2f9)](Window_Base[_0x29fb5d(0x217)]),Window_ItemCraftingTooltip[_0x29fb5d(0x217)]['constructor']=Window_ItemCraftingTooltip,Window_ItemCraftingTooltip[_0x29fb5d(0x2b0)]=VisuMZ[_0x29fb5d(0x28c)][_0x29fb5d(0x2af)][_0x29fb5d(0x1fc)][_0x29fb5d(0x383)],Window_ItemCraftingTooltip[_0x29fb5d(0x217)][_0x29fb5d(0x375)]=function(_0x2c0e8c){const _0x3585e8=_0x29fb5d;Window_Base[_0x3585e8(0x217)][_0x3585e8(0x375)][_0x3585e8(0x1ef)](this,_0x2c0e8c),this['setBackgroundType'](this[_0x3585e8(0x2fe)]()?0x0:0x2),this[_0x3585e8(0x3e5)]('');},Window_ItemCraftingTooltip['prototype'][_0x29fb5d(0x2fe)]=function(){const _0x402406=_0x29fb5d;return Window_ItemCraftingTooltip[_0x402406(0x2b0)]!=='';},Window_ItemCraftingTooltip[_0x29fb5d(0x217)][_0x29fb5d(0x24a)]=function(){const _0xa65139=_0x29fb5d;Window_ItemCraftingTooltip[_0xa65139(0x2b0)]!==''?_0xa65139(0x208)===_0xa65139(0x289)?(_0x3389bb[_0xa65139(0x28c)][_0xa65139(0x348)][_0xa65139(0x1ef)](this,_0x1f4775),_0x293112['ItemCraftingSys'][_0xa65139(0x209)](_0x4100cb)):this['windowskin']=ImageManager['loadSystem'](Window_ItemCraftingTooltip[_0xa65139(0x2b0)]):_0xa65139(0x268)===_0xa65139(0x268)?Window_Base['prototype'][_0xa65139(0x24a)]['call'](this):_0x36b190=_0x2bf968[_0xa65139(0x383)];},Window_ItemCraftingTooltip['prototype'][_0x29fb5d(0x3e5)]=function(_0x5272b8){const _0x5c147f=_0x29fb5d;this[_0x5c147f(0x2da)]!==_0x5272b8&&(_0x5c147f(0x328)!==_0x5c147f(0x328)?(_0x3abc86=_0x5f18ba['_scene'][_0x5c147f(0x311)][_0xdfbb79],_0x1d1d84+=0x1):(this[_0x5c147f(0x2da)]=_0x5272b8,this[_0x5c147f(0x22f)]()));},Window_ItemCraftingTooltip[_0x29fb5d(0x217)][_0x29fb5d(0x2ac)]=function(){const _0x206fa4=_0x29fb5d;this[_0x206fa4(0x3e5)]('');},Window_ItemCraftingTooltip[_0x29fb5d(0x217)]['setItem']=function(_0x185fc4){this['setText'](_0x185fc4?_0x185fc4['name']:'');},Window_ItemCraftingTooltip[_0x29fb5d(0x217)][_0x29fb5d(0x22f)]=function(){const _0x47bcbd=_0x29fb5d,_0x1375ce=this[_0x47bcbd(0x2eb)]();this[_0x47bcbd(0x2be)](),this[_0x47bcbd(0x3cc)](this[_0x47bcbd(0x2da)],0x0,0x0,this['innerWidth'],'center');},Window_ItemCraftingTooltip[_0x29fb5d(0x217)][_0x29fb5d(0x2be)]=function(){const _0x13cb5c=_0x29fb5d;if(this[_0x13cb5c(0x2da)]==='')_0x13cb5c(0x27a)==='EMdJJ'?_0x62f577[_0x13cb5c(0x36c)](_0x291a3d[_0x13cb5c(0x2ce)],![]):(this[_0x13cb5c(0x280)][_0x13cb5c(0x2ac)](),this[_0x13cb5c(0x293)]=0x0);else{let _0x2e828a=this[_0x13cb5c(0x382)](this[_0x13cb5c(0x2da)])+this[_0x13cb5c(0x1c8)]()*0x4;this['width']=_0x2e828a+$gameSystem[_0x13cb5c(0x35d)]()*0x2,this[_0x13cb5c(0x2ee)]();if(this['hasCustomWindowSkin']())return;const _0x4b0a2c=ColorManager[_0x13cb5c(0x2ca)]();this['contents'][_0x13cb5c(0x3e9)](0x0,0x0,this[_0x13cb5c(0x2f5)],this[_0x13cb5c(0x374)],_0x4b0a2c);}};function Window_ItemCraftingNumber(){this['initialize'](...arguments);}Window_ItemCraftingNumber[_0x29fb5d(0x217)]=Object[_0x29fb5d(0x2f9)](Window_ShopNumber[_0x29fb5d(0x217)]),Window_ItemCraftingNumber[_0x29fb5d(0x217)][_0x29fb5d(0x279)]=Window_ItemCraftingNumber,Window_ItemCraftingNumber[_0x29fb5d(0x217)]['initialize']=function(_0x170703){const _0x1a3772=_0x29fb5d;Window_ShopNumber[_0x1a3772(0x217)][_0x1a3772(0x375)]['call'](this,_0x170703);},Window_ItemCraftingNumber[_0x29fb5d(0x217)][_0x29fb5d(0x393)]=function(_0x91a32c){const _0x32d694=_0x29fb5d;this[_0x32d694(0x2b8)]=_0x91a32c,this[_0x32d694(0x3d6)]=this[_0x32d694(0x210)](),this[_0x32d694(0x33a)]=Math['min'](0x1,this[_0x32d694(0x3d6)]),this[_0x32d694(0x278)](),this[_0x32d694(0x22f)]();},Window_ItemCraftingNumber[_0x29fb5d(0x217)][_0x29fb5d(0x210)]=function(){const _0x5c1597=_0x29fb5d,_0xb117b9=[],_0x4c03a8=this['_item'],_0x5b79f9=DataManager[_0x5c1597(0x3c2)](_0x4c03a8);let _0x2e09e0=0x0;for(const _0x2dd6af of _0x5b79f9){if(!_0x2dd6af)continue;let _0x32c01a=_0x2dd6af[0x0];const _0x3d897b=_0x2dd6af[0x1];_0x32c01a===_0x5c1597(0x321)?_0xb117b9[_0x5c1597(0x3ac)](Math[_0x5c1597(0x366)]($gameParty[_0x5c1597(0x321)]()/_0x3d897b)):(typeof _0x32c01a===_0x5c1597(0x32f)&&_0x32c01a[_0x5c1597(0x26a)](/CATEGORY/i)&&(_0x32c01a=SceneManager[_0x5c1597(0x1f6)][_0x5c1597(0x311)][_0x2e09e0],_0x2e09e0+=0x1),_0xb117b9[_0x5c1597(0x3ac)](Math[_0x5c1597(0x366)]($gameParty[_0x5c1597(0x3ed)](_0x32c01a)/_0x3d897b)));}if(_0xb117b9[_0x5c1597(0x316)]<=0x0)_0xb117b9['push'](0x0);return _0xb117b9[_0x5c1597(0x3ac)]($gameParty[_0x5c1597(0x2a9)](_0x4c03a8)-$gameParty[_0x5c1597(0x3ed)](_0x4c03a8)),Math['min'](..._0xb117b9);},Window_ItemCraftingNumber[_0x29fb5d(0x217)]['refresh']=function(){const _0x5167f9=_0x29fb5d;Window_Selectable[_0x5167f9(0x217)]['refresh']['call'](this),this[_0x5167f9(0x235)](),this['drawItemBackground'](0x0),this['drawTotalPrice'](),this[_0x5167f9(0x3a2)](),this['drawCurrentItemName'](),this[_0x5167f9(0x1f8)](),this[_0x5167f9(0x385)]();},Window_ItemCraftingNumber[_0x29fb5d(0x217)][_0x29fb5d(0x235)]=function(){const _0x53964d=_0x29fb5d,_0x58b329=this[_0x53964d(0x333)][0x4];if(!_0x58b329)return;if(this[_0x53964d(0x1f4)]())_0x53964d(0x39d)===_0x53964d(0x285)?this[_0x53964d(0x2b5)]():_0x58b329['setClickHandler'](this[_0x53964d(0x377)][_0x53964d(0x2a7)](this));else{if('woMDR'!==_0x53964d(0x3bf)){let _0x4b73be=_0x4a5b86-_0x3c3b20['round'](_0x1b659c/0x2),_0x342d61=_0x3d2ce2+_0x4e62af[_0x53964d(0x2cb)]((this[_0x53964d(0x3b2)]()-_0x392962[_0x53964d(0x2a2)])/0x2);this[_0x53964d(0x335)](_0x18b8b2[_0x53964d(0x234)]()),this[_0x53964d(0x35c)](),this[_0x53964d(0x3cc)](_0x5db5a8[_0x53964d(0x2e1)],_0x4b73be,_0x342d61,_0x24a7f7,_0x53964d(0x31d)),this[_0x53964d(0x2f3)]();}else _0x58b329['_clickHandler']=null;}},Window_ItemCraftingNumber[_0x29fb5d(0x217)][_0x29fb5d(0x394)]=function(){const _0x42e044=_0x29fb5d;return Math[_0x42e044(0x366)](this['totalPriceY']()+this[_0x42e044(0x3b2)]()*0x2);},Window_ItemCraftingNumber[_0x29fb5d(0x217)]['totalPriceY']=function(){const _0x444d41=_0x29fb5d;return Math[_0x444d41(0x366)](this[_0x444d41(0x374)]-this['lineHeight']()*6.5);},Window_ItemCraftingNumber[_0x29fb5d(0x217)]['buttonY']=function(){const _0x2e8eba=_0x29fb5d;return Math['floor'](this[_0x2e8eba(0x394)]()+this[_0x2e8eba(0x3b2)]()*0x2);},Window_ItemCraftingNumber['prototype'][_0x29fb5d(0x332)]=function(){const _0x45b711=_0x29fb5d,_0x5e9450=DataManager[_0x45b711(0x3c2)](this[_0x45b711(0x2b8)]),_0x15236b=this[_0x45b711(0x1c8)](),_0x10b89d=_0x15236b*0x2;let _0x12de39=this[_0x45b711(0x369)]();_0x12de39-=this[_0x45b711(0x3b2)]()*_0x5e9450[_0x45b711(0x316)];const _0x3b8fc1=this[_0x45b711(0x2f5)]-_0x10b89d-_0x15236b*0x2;let _0x7ab459=0x0;for(const _0x53a062 of _0x5e9450){_0x12de39+=this['lineHeight']();if(!_0x53a062)continue;let _0x3ce4f6=_0x53a062[0x0];const _0x3a5c0a=_0x53a062[0x1]*(this[_0x45b711(0x33a)]||0x1);if(_0x3ce4f6===_0x45b711(0x321))_0x45b711(0x1eb)==='WWhTd'?this[_0x45b711(0x1d4)]():Imported[_0x45b711(0x243)]?this[_0x45b711(0x376)](_0x3a5c0a,_0x10b89d,_0x12de39,_0x3b8fc1):this[_0x45b711(0x367)](_0x3a5c0a,TextManager[_0x45b711(0x2e1)],0x0,_0x12de39,_0x3b8fc1+_0x15236b*0x2);else{if(typeof _0x3ce4f6==='string'&&_0x3ce4f6['match'](/CATEGORY/i)){if('Dzuhf'===_0x45b711(0x34d))_0x3ce4f6=SceneManager[_0x45b711(0x1f6)][_0x45b711(0x311)][_0x7ab459],_0x7ab459+=0x1;else{if(!_0x30d587['isItemCrafted'](_0x4472a2))return;const _0xf4c1ba=_0x5bb87c[_0x45b711(0x3a7)];let _0x4cb11d=_0xacc5c7['x']+_0x2d2160[_0x45b711(0x293)]-_0x29ad6c['iconWidth'],_0x21928f=_0x2a39f9['y']+0x2;this[_0x45b711(0x22a)](_0xf4c1ba,_0x4cb11d,_0x21928f);}}this['drawItemName'](_0x3ce4f6,_0x10b89d,_0x12de39,_0x3b8fc1),this['drawText'](_0x3a5c0a,_0x10b89d,_0x12de39,_0x3b8fc1-_0x15236b,_0x45b711(0x20a));const _0x1e198d=this[_0x45b711(0x364)](),_0x1a47f8=this['textWidth'](_0x1e198d),_0x1eb4eb=this[_0x45b711(0x27e)]();this[_0x45b711(0x3c7)](),this[_0x45b711(0x3cc)](_0x1e198d,_0x1eb4eb,_0x12de39,_0x1a47f8);}}},Window_ItemCraftingNumber[_0x29fb5d(0x217)][_0x29fb5d(0x376)]=function(_0x4faa71,_0x61c057,_0x13a2f7,_0x359968){const _0x190306=_0x29fb5d;this[_0x190306(0x2f3)](),this['contents']['fontSize']=VisuMZ[_0x190306(0x2f4)][_0x190306(0x2af)][_0x190306(0x236)][_0x190306(0x283)];const _0x506444=VisuMZ[_0x190306(0x2f4)][_0x190306(0x2af)][_0x190306(0x236)][_0x190306(0x380)];if(_0x506444>0x0){const _0x1b86fa=_0x13a2f7+(this['lineHeight']()-ImageManager[_0x190306(0x2a2)])/0x2;this[_0x190306(0x22a)](_0x506444,_0x61c057,_0x1b86fa);const _0x14d571=ImageManager[_0x190306(0x1df)]+0x4;_0x61c057+=_0x14d571,_0x359968-=_0x14d571;}this[_0x190306(0x335)](ColorManager['systemColor']()),this[_0x190306(0x3cc)](TextManager[_0x190306(0x2e1)],_0x61c057,_0x13a2f7,_0x359968,_0x190306(0x37a)),this[_0x190306(0x3c7)]();const _0x435d39=VisuMZ[_0x190306(0x2ab)][_0x190306(0x2af)]['ItemScene']['ItemQuantityFmt'],_0xc01fc1=_0x435d39[_0x190306(0x23d)](_0x4faa71),_0x20db0f=this[_0x190306(0x382)](this[_0x190306(0x2b6)]?VisuMZ['GroupDigits'](_0xc01fc1):_0xc01fc1);_0x359968-=this[_0x190306(0x1c8)](),_0x20db0f>_0x359968?this[_0x190306(0x3cc)](VisuMZ[_0x190306(0x2f4)]['Settings'][_0x190306(0x236)]['GoldOverlap'],_0x61c057,_0x13a2f7,_0x359968,_0x190306(0x20a)):this[_0x190306(0x3cc)](_0xc01fc1,_0x61c057,_0x13a2f7,_0x359968,_0x190306(0x20a)),this['resetFontSettings']();},Window_ItemCraftingNumber[_0x29fb5d(0x217)][_0x29fb5d(0x220)]=function(){const _0x5c96dc=_0x29fb5d;if(DataManager[_0x5c96dc(0x3ca)](this[_0x5c96dc(0x2b8)]))this[_0x5c96dc(0x2b5)]();else{if(_0x5c96dc(0x307)!==_0x5c96dc(0x307))return _0x306e16[_0x5c96dc(0x217)][_0x5c96dc(0x3cf)][_0x5c96dc(0x1ef)](this);else Window_ShopNumber[_0x5c96dc(0x217)][_0x5c96dc(0x220)][_0x5c96dc(0x1ef)](this);}},Window_ItemCraftingNumber[_0x29fb5d(0x217)][_0x29fb5d(0x2b5)]=function(){const _0x32ad26=_0x29fb5d,_0x5d703f=this[_0x32ad26(0x1c8)]();let _0x3240b6=_0x5d703f*0x2;const _0x29a5b1=this[_0x32ad26(0x394)](),_0x267bec=_0x29a5b1+(this[_0x32ad26(0x3b2)]()-ImageManager['iconHeight'])/0x2;this[_0x32ad26(0x22a)](this['_item'][_0x32ad26(0x2df)],_0x3240b6,_0x267bec),_0x3240b6+=ImageManager[_0x32ad26(0x1df)]+0x4;let _0x1ebbc9=this[_0x32ad26(0x27e)]()-_0x5d703f*0x3;_0x1ebbc9-=ImageManager[_0x32ad26(0x1df)]+0x4;const _0x3973c1=new Rectangle(_0x3240b6,_0x29a5b1,_0x1ebbc9,this[_0x32ad26(0x3b2)]());this['drawCraftingItemName'](this['_item'],_0x3973c1);},Window_ItemCraftingNumber['prototype'][_0x29fb5d(0x1f4)]=function(){const _0x338483=_0x29fb5d;if((this[_0x338483(0x33a)]||0x0)<=0x0)return![];return Window_ShopNumber[_0x338483(0x217)][_0x338483(0x1f4)][_0x338483(0x1ef)](this);},Window_ItemCraftingNumber['prototype'][_0x29fb5d(0x34b)]=function(){return this['isOkEnabled']();};function Window_ItemCraftingIngredient(){const _0x8fc6d=_0x29fb5d;this[_0x8fc6d(0x375)](...arguments);}Window_ItemCraftingIngredient['prototype']=Object[_0x29fb5d(0x2f9)](Window_ItemList[_0x29fb5d(0x217)]),Window_ItemCraftingIngredient['prototype']['constructor']=Window_ItemCraftingIngredient,Window_ItemCraftingIngredient[_0x29fb5d(0x217)][_0x29fb5d(0x375)]=function(_0x275756){const _0xcfa014=_0x29fb5d;Window_Selectable['prototype'][_0xcfa014(0x375)][_0xcfa014(0x1ef)](this,_0x275756),this['_amount']=0x0;},Window_ItemCraftingIngredient['prototype'][_0x29fb5d(0x2f8)]=function(){return![];},Window_ItemCraftingIngredient[_0x29fb5d(0x217)][_0x29fb5d(0x393)]=function(_0x3dee3b,_0x107692){const _0x53e454=_0x29fb5d;this[_0x53e454(0x315)]=_0x3dee3b,this[_0x53e454(0x247)]=_0x107692||0x1,this[_0x53e454(0x22f)](),this[_0x53e454(0x1e9)](0x0,0x0),this[_0x53e454(0x1ca)](),this[_0x53e454(0x229)](0x0);},Window_ItemCraftingIngredient[_0x29fb5d(0x217)][_0x29fb5d(0x237)]=function(){const _0x5d8d25=_0x29fb5d;this[_0x5d8d25(0x288)]=$gameParty[_0x5d8d25(0x259)]()['filter'](_0x550b9c=>this[_0x5d8d25(0x372)](_0x550b9c));},Window_ItemCraftingIngredient['prototype'][_0x29fb5d(0x372)]=function(_0x131bc8){const _0x36bed9=_0x29fb5d;if(!_0x131bc8)return![];if(_0x131bc8===SceneManager['_scene'][_0x36bed9(0x2b8)])return![];return _0x131bc8[_0x36bed9(0x2a3)][_0x36bed9(0x372)](this[_0x36bed9(0x315)]['toUpperCase']()[_0x36bed9(0x2cd)]());},Window_ItemCraftingIngredient[_0x29fb5d(0x217)][_0x29fb5d(0x256)]=function(_0x3b1d2b){const _0x5c8e11=_0x29fb5d;if(!_0x3b1d2b)return![];if(this[_0x5c8e11(0x334)]()[_0x5c8e11(0x372)](_0x3b1d2b))return![];return $gameParty[_0x5c8e11(0x3ed)](_0x3b1d2b)>=this[_0x5c8e11(0x247)];},Window_ItemCraftingIngredient[_0x29fb5d(0x217)][_0x29fb5d(0x334)]=function(){const _0x328b63=_0x29fb5d,_0xf8b695=[],_0x44b73a=DataManager[_0x328b63(0x3c2)](SceneManager[_0x328b63(0x1f6)]['_item']);for(const _0x48c8ed of _0x44b73a){if(!_0x48c8ed)continue;const _0x3234da=_0x48c8ed[0x0];(DataManager[_0x328b63(0x3c6)](_0x3234da)||DataManager[_0x328b63(0x2db)](_0x3234da)||DataManager[_0x328b63(0x2c3)](_0x3234da))&&_0xf8b695[_0x328b63(0x3ac)](_0x3234da);}return _0xf8b695[_0x328b63(0x3ef)](SceneManager[_0x328b63(0x1f6)][_0x328b63(0x311)]);},Window_ItemCraftingIngredient[_0x29fb5d(0x217)][_0x29fb5d(0x21f)]=function(_0x303dab,_0xfa1ebb,_0x48a8a6,_0x93ab9c){const _0x581ca2=_0x29fb5d;_0x303dab&&this[_0x581ca2(0x334)]()[_0x581ca2(0x372)](_0x303dab)&&(this['_alreadySelected']=!![]),Window_ItemList['prototype'][_0x581ca2(0x21f)][_0x581ca2(0x1ef)](this,_0x303dab,_0xfa1ebb,_0x48a8a6,_0x93ab9c),this[_0x581ca2(0x2aa)]=![];},Window_ItemCraftingIngredient[_0x29fb5d(0x217)][_0x29fb5d(0x3cc)]=function(_0xcc470e,_0x502205,_0x119ca2,_0x12624c,_0x540506){const _0x525abd=_0x29fb5d;if(this[_0x525abd(0x2aa)]){if('hBgZv'==='hBgZv'){const _0x1e94df=VisuMZ[_0x525abd(0x28c)]['Settings']['General'];this[_0x525abd(0x280)][_0x525abd(0x21a)]=ColorManager[_0x525abd(0x355)](_0x1e94df[_0x525abd(0x253)]),_0xcc470e+=_0x1e94df[_0x525abd(0x3b0)];}else return _0x5cb9b7[_0x525abd(0x345)](_0x525abd(0x37a),'right');}Window_Base[_0x525abd(0x217)][_0x525abd(0x3cc)][_0x525abd(0x1ef)](this,_0xcc470e,_0x502205,_0x119ca2,_0x12624c,_0x540506);};