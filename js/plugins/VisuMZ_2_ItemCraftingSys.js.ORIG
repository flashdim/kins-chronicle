//=============================================================================
// VisuStella MZ - Item Crafting System
// VisuMZ_2_ItemCraftingSys.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_ItemCraftingSys = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ItemCraftingSys = VisuMZ.ItemCraftingSys || {};
VisuMZ.ItemCraftingSys.version = 1.09;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.09] [ItemCraftingSys]
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

const _0x16c2=['itemCraftingMask','isUseModernControls','JSON','changeTextColor','setItemSpritePosition','SystemShowItemCraftingMenu','getCraftingIngredients','scale','_ingredientsList','onNumberCancel','_backSprite1','length','currencyUnit','getWeaponIdWithName','_ingredientAmounts','CoreEngine','smoothSelect','Window','toLowerCase','onIngredientListCancel','loadSystem','FadeSpeed','categoryWindowRect','max','1IPLOjF','round','OnSwitches','SystemEnableItemCraftingMenu','isSceneItemCrafting','addCommand','Animation','shown','call','ListBgType','parseCraftingIngredientsData','weapons','maxCols','buttonAssistItemListRequirement','startAnimation','maskItemName','activate','getInputMultiButtonStrings','_weaponIDs','determineMax','addItemCraftingCommand','craftableWeapons','VisuMZ_1_ItemsEquipsCore','addWindow','isCraftItemListed','buttonAssistCategory','opacitySpeed','ItemCraftingNoCategory','_nonCategoryItemCraftingItems','innerHeight','_animationPlaying','filter','Armor','show','removeChild','Window_ItemCategory_needsSelection','_goldWindow','drawCurrencyValue','_ingredientIndex','itemNameY','ARRAYJSON','VisuMZ_0_CoreEngine','ARRAYSTR','isArmor','gold','Name','addItemCategory','setHelpWindowItem','powerDownColor','updateAnimationSprite','NUM','commandItemCrafting','createUncategorizedItemCategory','map','makeFontBigger','bitmap','updateCraftingAnimation','374997jwBpyc','item','drawItemName','join','addChild','down','drawCurrentItemNameMasked','loadWindowskin','bigPicture','setItemSpriteOpacity','prototype','craftPicture','gainItem','craftableArmors','create','quantityFontSize','loadTitle2','_category','changeOkButtonEnable','fittingHeight','itemLineRect','drawTextEx','_numberWindow','itemCraftedIcon','checkItemCraftingResultsValid','shift','onItemCrafted','weapon','allCraftableItems','loseItem','refresh','ItemsEquipsCore','itemCraftingIngredientsBridge','centerSprite','NoMask','135725xRTBGp','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','Parse_Notetags_CreateJS','trim','ItemCraftingSys','iconWidth','isPlaytest','32927CWAYhe','isFinishedAnimating','createContents','clone','match','Type','value','BgFilename2','isPlaying','_ItemCrafting_MainMenu','enabled','CheckAllSwitches','changePaintOpacity','isTouchOkEnabled','drawFadedItemBackground','iconIndex','ItemScene','Mask','all','contains','isItemCrafted','registerCraftedItem','Weapons','note','drawCraftedIcon','\x5cI[%1]%2','31ZRMMhL','number','_max','dimColor2','ARRAYNUM','SwitchCraft','pop','getColor','split','setValue','isSceneBattle','resetTextColor','createJS','isMainMenuItemCraftingVisible','_tooltipWindow','drawHorzLine','needsSelection','_digitGrouping','goldWindowRectItemsEquipsCore','drawCurrentItemName','textWidth','_armorIDs','includes','helpWindowRectItemsEquipsCore','buttonAssistLargeIncrement','processFinishAnimation','Sound','_windowLayer','textColor','itemAt','iconHeight','ItemCraftingMenuCommand','IngredientTitle','_allCraftableItems','center','Item','drawTotalGold','_itemIDs','Scene_Boot_onDatabaseLoaded','numItems','ParseArmorNotetags','drawCraftingIngredients','_ingredientCategories','drawIcon','IconSet','setText','createAnimation','buttonAssistKey2','Game_System_initialize','isWeapon','setup','addLoadListener','CraftedIcon','systemColor','SelectedColor','boxHeight','ParseItemNotetags','573719LnqJbo','%1%2','jsGlobalCraftEffect','string','createBackground','armor','_customItemCraftingSettings','parameters','_categoryWindow','playItemCrafting','multiplicationSign','%1/%2','placeButtons','bind','Window_MenuCommand_addOriginalCommands','CustomItemCraftingSceneOpen','allCraftableWeapons','General','RegExp','makeCommandList','adjustSprite','Weapon','_iconSprite','opacity','setCustomItemCraftingSettings','contents','terminate','createCustomBackgroundImages','_alreadySelected','fontItalic','clearCustomItemCraftingSettings','_context','update','BypassMasks','IngredientList','createIngredientSelectionList','process_VisuMZ_ItemCraftingSys_Notetags','_backSprite2','updateTooltipWindow','applyInverse','hasCustomWindowSkin','onCategoryOk','multiplicationSignX','createCraftingIngredientsLists','visible','_animationWait','createTooltipWindow','MainMenu','smooth','addOriginalCommands','selectLast','createAnimationIDs','frames','GroupDigits','GoldIcon','enableCraftingSwitches','_helpWindow','initItemCraftingSys','items','_item','drawNumber','onDatabaseLoaded','isMVAnimation','getCustomItemCraftingSettings','activateItemWindow','_amount','addUncategorizedItemCategory','hide','_number','Animations','Ingredients','ItemQuantityFmt','_itemsCrafted','Window_ItemCategory_addItemCategory','ItemCraftingSceneOpen','setStatusWindow','isOkEnabled','_animationSprite','setHandler','drawBigItemImage','toUpperCase','WarningMsg','723108XyTtzL','ARRAYEVAL','floor','categoryList','_itemSpriteOpacitySpeed','push','_maxIngredientsSize','isTriggered','createItemWindow','_animationIDs','statusWindowRectItemsEquipsCore','buttonAssistKey1','drawPicture','initialize','fontSize','isShowNew','Settings','isItemCraftingCommandVisible','STRUCT','initItemCraftingMainMenu','createCommandWindow','dimColor1','currentCraftableItems','createIngredientSelectionTitle','EnableMainMenu','1GubVSp','isMainMenuItemCraftingEnabled','destroy','Items','setTooltipWindowText','_scene','Armors','addItemCraftingCommandAutomatically','getItemCraftedTimes','right','BypassSwitches','category:\x20%1','left','height','concat','_craftingIngredients','description','BgFilename1','resetFontSettings','return\x200','makeItemList','setItemSpriteFrame','Gold','TurnSwitches','index','itemRectWithPadding','itemPadding','blt','innerWidth','itemCrafting','drawIngredientItem','jsGlobalListing','maskItalics','onItemOk','totalPriceY','BgSettings','OffSwitches','Uncategorized','buttonAssistText4','constructor','allCraftableArmors','GoldOverlap','AnySwitches','onNumberOk','armors','ConvertParams','ParseWeaponNotetags','destroyAnimationSprite','maxItems','You\x20do\x20not\x20have\x20any\x20craftable\x20items!\x0aRefer\x20to\x20the\x20help\x20file\x20on\x20how\x20to\x20create\x20crafting\x20recipes.','_allCraftableWeapons','drawText','isCraftingItemMasked','CheckAnySwitches','SnapshotOpacity','_craftPicture','setHelpWindow','imageSmoothingEnabled','createItemWindowBase','format','fillRect','Scale','process_VisuMZ_ItemCraftingSys_JS_TraitObject_Notetags','drawTotalPrice','min','isEnabled','setItemSpriteBitmap','boxWidth','335481EtUZgw','setBackgroundOpacity','drawItemBackground','lineHeight','gradientFillRect','version','createNumberWindow','Enable','CategoryTitle','name','getArmorIdWithName','updateHelp','isItem','drawCraftingItemName','anchor','_ingredientSelectList','postCreateItemWindowModernControls','Window_ItemCategory_makeCommandList','destroyItemSprite','isItemCraftingCommandEnabled','loadPicture','ToolTips','helpWindowRect','1241687GgeHJC','active','_data','AllSwitches','clearUserSelectedIngredients','itemCraftingNumberWindowOk','setWindowBackgroundTypes','getItemIdWithName','clear','EVAL','itemWindowRect','selectedIngredientList','ShowWindows','GoldFontSize','status','windowskin','_buttonAssistWindow','setMainMenuItemCraftingEnabled','tooltipSkin','CategoryBgType','resetCraftingSwitches','_itemWindow','buyWindowRectItemsEquipsCore','isTouchedInsideFrame','worldTransform','itemHeight','NumberBgType','processItemCrafting','CategoryIcon','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','width','StatusBgType','#%1','ShowMainMenu','updateItemSpriteOpacity','parse','statusWindowRect','finishAnimation','setupNumberWindow','buttonAssistText1','buttonAssistText2','FUNC','setItemWindow','_buttons','cancel','onItemCancel','drawIngredientGold','exit','tooltipFrameCheckRequirements','_text','ShopScene','createCraftingItemKey','goldWindowRect','_ingredientSelectTitle','_statusWindow','_itemSprite','registerCommand','Scene_Menu_createCommandWindow','_commandWindow','_allCraftableArmors','drawMultiplicationSign','setBackgroundType','doesItemHaveOpenCategories','setupSelectIngredientWindow'];const _0x2e43=function(_0x5a47e9,_0x171c84){_0x5a47e9=_0x5a47e9-0x1dd;let _0x16c218=_0x16c2[_0x5a47e9];return _0x16c218;};const _0x54c7a2=_0x2e43;(function(_0x9fe7e1,_0x86be70){const _0x403365=_0x2e43;while(!![]){try{const _0xb3b61e=parseInt(_0x403365(0x284))+parseInt(_0x403365(0x2f3))*parseInt(_0x403365(0x29b))+parseInt(_0x403365(0x32c))+-parseInt(_0x403365(0x227))+parseInt(_0x403365(0x240))*parseInt(_0x403365(0x3a9))+parseInt(_0x403365(0x356))*-parseInt(_0x403365(0x370))+-parseInt(_0x403365(0x34f));if(_0xb3b61e===_0x86be70)break;else _0x9fe7e1['push'](_0x9fe7e1['shift']());}catch(_0x3bbe47){_0x9fe7e1['push'](_0x9fe7e1['shift']());}}}(_0x16c2,0x9dcaa));var label='ItemCraftingSys',tier=tier||0x0,dependencies=[_0x54c7a2(0x309)],pluginData=$plugins[_0x54c7a2(0x312)](function(_0x43cfc8){const _0x3514c5=_0x54c7a2;return _0x43cfc8[_0x3514c5(0x2a9)]&&_0x43cfc8['description'][_0x3514c5(0x386)]('['+label+']');})[0x0];VisuMZ[label][_0x54c7a2(0x237)]=VisuMZ[label][_0x54c7a2(0x237)]||{},VisuMZ[_0x54c7a2(0x26d)]=function(_0x3c9d9f,_0x3c18a9){const _0xe87b76=_0x54c7a2;for(const _0x46fd13 in _0x3c18a9){if(_0x46fd13[_0xe87b76(0x35a)](/(.*):(.*)/i)){const _0x3350cc=String(RegExp['$1']),_0x3723d1=String(RegExp['$2'])[_0xe87b76(0x225)]()[_0xe87b76(0x352)]();let _0x5b267b,_0x2a1496,_0x3cf372;switch(_0x3723d1){case _0xe87b76(0x325):_0x5b267b=_0x3c18a9[_0x46fd13]!==''?Number(_0x3c18a9[_0x46fd13]):0x0;break;case _0xe87b76(0x374):_0x2a1496=_0x3c18a9[_0x46fd13]!==''?JSON['parse'](_0x3c18a9[_0x46fd13]):[],_0x5b267b=_0x2a1496[_0xe87b76(0x328)](_0x49b481=>Number(_0x49b481));break;case _0xe87b76(0x2a4):_0x5b267b=_0x3c18a9[_0x46fd13]!==''?eval(_0x3c18a9[_0x46fd13]):null;break;case _0xe87b76(0x228):_0x2a1496=_0x3c18a9[_0x46fd13]!==''?JSON['parse'](_0x3c18a9[_0x46fd13]):[],_0x5b267b=_0x2a1496[_0xe87b76(0x328)](_0x34dfde=>eval(_0x34dfde));break;case _0xe87b76(0x2dd):_0x5b267b=_0x3c18a9[_0x46fd13]!==''?JSON[_0xe87b76(0x2be)](_0x3c18a9[_0x46fd13]):'';break;case _0xe87b76(0x31b):_0x2a1496=_0x3c18a9[_0x46fd13]!==''?JSON[_0xe87b76(0x2be)](_0x3c18a9[_0x46fd13]):[],_0x5b267b=_0x2a1496[_0xe87b76(0x328)](_0x272dd5=>JSON['parse'](_0x272dd5));break;case _0xe87b76(0x2c4):_0x5b267b=_0x3c18a9[_0x46fd13]!==''?new Function(JSON[_0xe87b76(0x2be)](_0x3c18a9[_0x46fd13])):new Function(_0xe87b76(0x253));break;case'ARRAYFUNC':_0x2a1496=_0x3c18a9[_0x46fd13]!==''?JSON['parse'](_0x3c18a9[_0x46fd13]):[],_0x5b267b=_0x2a1496['map'](_0x193eb9=>new Function(JSON[_0xe87b76(0x2be)](_0x193eb9)));break;case'STR':_0x5b267b=_0x3c18a9[_0x46fd13]!==''?String(_0x3c18a9[_0x46fd13]):'';break;case _0xe87b76(0x31d):_0x2a1496=_0x3c18a9[_0x46fd13]!==''?JSON[_0xe87b76(0x2be)](_0x3c18a9[_0x46fd13]):[],_0x5b267b=_0x2a1496[_0xe87b76(0x328)](_0x2fd5cb=>String(_0x2fd5cb));break;case _0xe87b76(0x239):_0x3cf372=_0x3c18a9[_0x46fd13]!==''?JSON['parse'](_0x3c18a9[_0x46fd13]):{},_0x5b267b=VisuMZ['ConvertParams']({},_0x3cf372);break;case'ARRAYSTRUCT':_0x2a1496=_0x3c18a9[_0x46fd13]!==''?JSON[_0xe87b76(0x2be)](_0x3c18a9[_0x46fd13]):[],_0x5b267b=_0x2a1496[_0xe87b76(0x328)](_0x4d933e=>VisuMZ[_0xe87b76(0x26d)]({},JSON['parse'](_0x4d933e)));break;default:continue;}_0x3c9d9f[_0x3350cc]=_0x5b267b;}}return _0x3c9d9f;},(_0x116673=>{const _0x3f0569=_0x54c7a2,_0x54fed8=_0x116673[_0x3f0569(0x28d)];for(const _0x49c47b of dependencies){if(!Imported[_0x49c47b]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x3f0569(0x27b)](_0x54fed8,_0x49c47b)),SceneManager[_0x3f0569(0x2ca)]();break;}}const _0x1f7cec=_0x116673[_0x3f0569(0x250)];if(_0x1f7cec[_0x3f0569(0x35a)](/\[Version[ ](.*?)\]/i)){const _0x1b7b24=Number(RegExp['$1']);_0x1b7b24!==VisuMZ[label][_0x3f0569(0x289)]&&(alert(_0x3f0569(0x2b8)[_0x3f0569(0x27b)](_0x54fed8,_0x1b7b24)),SceneManager['exit']());}if(_0x1f7cec['match'](/\[Tier[ ](\d+)\]/i)){const _0x4b1992=Number(RegExp['$1']);_0x4b1992<tier?(alert(_0x3f0569(0x350)[_0x3f0569(0x27b)](_0x54fed8,_0x4b1992,tier)),SceneManager['exit']()):tier=Math['max'](_0x4b1992,tier);}VisuMZ[_0x3f0569(0x26d)](VisuMZ[label][_0x3f0569(0x237)],_0x116673[_0x3f0569(0x3b0)]);})(pluginData),VisuMZ[_0x54c7a2(0x353)][_0x54c7a2(0x226)]=_0x54c7a2(0x271),PluginManager[_0x54c7a2(0x2d3)](pluginData[_0x54c7a2(0x28d)],_0x54c7a2(0x21f),_0x13ee81=>{const _0x2a9948=_0x54c7a2;if(SceneManager[_0x2a9948(0x37a)]())return;if(SceneManager['isSceneItemCrafting']())return;if(DataManager[_0x2a9948(0x23d)]()['length']<=0x0){$gameTemp['isPlaytest']()&&alert(VisuMZ['ItemCraftingSys']['WarningMsg']);return;}SceneManager[_0x2a9948(0x22c)](Scene_ItemCrafting);}),PluginManager['registerCommand'](pluginData[_0x54c7a2(0x28d)],_0x54c7a2(0x1e4),_0x160d21=>{const _0x132713=_0x54c7a2;if(SceneManager[_0x132713(0x37a)]())return;if(SceneManager[_0x132713(0x2f7)]())return;VisuMZ[_0x132713(0x26d)](_0x160d21,_0x160d21);const _0x141ed5={'items':_0x160d21[_0x132713(0x243)]['map'](_0x18997c=>$dataItems[_0x18997c])['filter'](_0x3f516f=>DataManager[_0x132713(0x348)]()['includes'](_0x3f516f)),'weapons':_0x160d21[_0x132713(0x36c)][_0x132713(0x328)](_0x31d249=>$dataWeapons[_0x31d249])['filter'](_0x59919c=>DataManager[_0x132713(0x1e5)]()[_0x132713(0x386)](_0x59919c)),'armors':_0x160d21[_0x132713(0x246)]['map'](_0x237955=>$dataArmors[_0x237955])['filter'](_0x3a6f04=>DataManager['allCraftableArmors']()['includes'](_0x3a6f04)),'BypassSwitches':_0x160d21[_0x132713(0x24a)],'BypassMasks':_0x160d21[_0x132713(0x1f6)]};_0x141ed5[_0x132713(0x368)]=_0x141ed5[_0x132713(0x20f)]['concat'](_0x141ed5[_0x132713(0x2fe)],_0x141ed5[_0x132713(0x26c)]);if(_0x141ed5[_0x132713(0x368)][_0x132713(0x2e6)]<=0x0){$gameTemp[_0x132713(0x355)]()&&alert(VisuMZ[_0x132713(0x353)][_0x132713(0x226)]);return;}$gameTemp[_0x132713(0x1ed)](_0x141ed5),SceneManager['push'](Scene_ItemCrafting);}),PluginManager[_0x54c7a2(0x2d3)](pluginData[_0x54c7a2(0x28d)],_0x54c7a2(0x2f6),_0x4b5970=>{const _0x34d1e8=_0x54c7a2;VisuMZ[_0x34d1e8(0x26d)](_0x4b5970,_0x4b5970),$gameSystem[_0x34d1e8(0x2ac)](_0x4b5970['Enable']);}),PluginManager[_0x54c7a2(0x2d3)](pluginData[_0x54c7a2(0x28d)],_0x54c7a2(0x2e0),_0x2b413a=>{const _0x31e589=_0x54c7a2;VisuMZ[_0x31e589(0x26d)](_0x2b413a,_0x2b413a),$gameSystem['setMainMenuItemCraftingVisible'](_0x2b413a['Show']);}),VisuMZ[_0x54c7a2(0x353)][_0x54c7a2(0x396)]=Scene_Boot[_0x54c7a2(0x336)]['onDatabaseLoaded'],Scene_Boot[_0x54c7a2(0x336)][_0x54c7a2(0x212)]=function(){const _0x27bfdc=_0x54c7a2;VisuMZ[_0x27bfdc(0x353)]['Scene_Boot_onDatabaseLoaded']['call'](this),this[_0x27bfdc(0x1f9)]();},Scene_Boot[_0x54c7a2(0x336)][_0x54c7a2(0x1f9)]=function(){this['process_VisuMZ_ItemCraftingSys_JS_TraitObject_Notetags']();},VisuMZ[_0x54c7a2(0x353)][_0x54c7a2(0x1e7)]={'Ingredients':/<(?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) INGREDIENTS>\s*([\s\S]*)\s*<\/(?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) INGREDIENTS>/i,'AllSwitches':/<(?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) SHOW (?:SWITCH|SWITCHES|ALL SWITCH|ALL SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/gi,'AnySwitches':/<(?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) SHOW (?:ANY SWITCH|ANY SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/gi,'OnSwitches':/<(?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) TURN ON (?:SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/gi,'OffSwitches':/<(?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) TURN OFF (?:SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/gi,'MaskText':/<(?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) MASK:[ ](.*)>/i,'NoMask':/<(?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) NO MASK>/i,'customCraftingOnly':/<CUSTOM (?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) ONLY>/i,'jsOnCraft':/<JS (?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) EFFECT>\s*([\s\S]*)\s*<\/JS (?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) EFFECT>/i,'animationIDs':/<(?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) (?:ANIMATION|ANIMATIONS|ANI):[ ](.*)>/i,'opacitySpeed':/<(?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) FADE SPEED:[ ](\d+)>/i,'craftPicture':/<(?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) (?:PICTURE|FILENAME):[ ](.*)>/i,'bigPicture':/<PICTURE:[ ](.*)>/i},Scene_Boot[_0x54c7a2(0x336)][_0x54c7a2(0x27e)]=function(){const _0x49f659=_0x54c7a2;if(VisuMZ['ParseAllNotetags'])return;const _0x3eb31c=$dataItems[_0x49f659(0x24e)]($dataWeapons,$dataArmors);for(const _0x22775e of _0x3eb31c){if(!_0x22775e)continue;VisuMZ[_0x49f659(0x353)][_0x49f659(0x351)](_0x22775e);}},VisuMZ[_0x54c7a2(0x353)][_0x54c7a2(0x3a8)]=VisuMZ[_0x54c7a2(0x3a8)],VisuMZ[_0x54c7a2(0x3a8)]=function(_0x273f17){const _0x1d598c=_0x54c7a2;VisuMZ[_0x1d598c(0x353)][_0x1d598c(0x3a8)]['call'](this,_0x273f17),VisuMZ[_0x1d598c(0x353)][_0x1d598c(0x351)](_0x273f17);},VisuMZ[_0x54c7a2(0x353)][_0x54c7a2(0x26e)]=VisuMZ[_0x54c7a2(0x26e)],VisuMZ[_0x54c7a2(0x26e)]=function(_0x29a881){const _0x2cdd26=_0x54c7a2;VisuMZ['ItemCraftingSys'][_0x2cdd26(0x26e)]['call'](this,_0x29a881),VisuMZ[_0x2cdd26(0x353)][_0x2cdd26(0x351)](_0x29a881);},VisuMZ[_0x54c7a2(0x353)]['ParseArmorNotetags']=VisuMZ['ParseArmorNotetags'],VisuMZ[_0x54c7a2(0x398)]=function(_0xabd655){const _0x330070=_0x54c7a2;VisuMZ[_0x330070(0x353)]['ParseArmorNotetags'][_0x330070(0x2fb)](this,_0xabd655),VisuMZ[_0x330070(0x353)][_0x330070(0x351)](_0xabd655);},VisuMZ[_0x54c7a2(0x353)][_0x54c7a2(0x351)]=function(_0x3603ac){const _0x5333d8=_0x54c7a2;_0x3603ac[_0x5333d8(0x36d)]['match'](VisuMZ[_0x5333d8(0x353)][_0x5333d8(0x1e7)]['jsOnCraft'])&&VisuMZ[_0x5333d8(0x353)]['createJS'](_0x3603ac,RegExp['$1']);},VisuMZ[_0x54c7a2(0x353)]['JS']={},VisuMZ['ItemCraftingSys'][_0x54c7a2(0x37c)]=function(_0x3d1c98,_0x5a5aad){const _0x14eb29=_0x54c7a2,_0x54aa88='\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Arguments\x0a\x20\x20\x20\x20\x20\x20\x20\x20let\x20item\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20let\x20number\x20=\x20arguments[1];\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20'[_0x14eb29(0x27b)](_0x5a5aad),_0x21f2d9=DataManager[_0x14eb29(0x2ce)](_0x3d1c98);VisuMZ[_0x14eb29(0x353)]['JS'][_0x21f2d9]=new Function(_0x54aa88);},DataManager[_0x54c7a2(0x30b)]=function(_0x2afd9c){const _0x8593c5=_0x54c7a2;if(!_0x2afd9c)return![];if(DataManager[_0x8593c5(0x2e1)](_0x2afd9c)[_0x8593c5(0x2e6)]<=0x0)return![];if(_0x2afd9c[_0x8593c5(0x36d)]['match'](VisuMZ[_0x8593c5(0x353)][_0x8593c5(0x1e7)]['customCraftingOnly'])){if(!$gameTemp[_0x8593c5(0x214)]())return![];}if(!VisuMZ['ItemCraftingSys'][_0x8593c5(0x237)][_0x8593c5(0x1e6)][_0x8593c5(0x25f)][_0x8593c5(0x2fb)](this,_0x2afd9c))return![];if(!VisuMZ[_0x8593c5(0x353)][_0x8593c5(0x361)](_0x2afd9c))return![];if(!VisuMZ[_0x8593c5(0x353)][_0x8593c5(0x275)](_0x2afd9c))return![];return!![];},VisuMZ['ItemCraftingSys'][_0x54c7a2(0x361)]=function(_0x2aec1a){const _0x2b92f7=_0x54c7a2,_0x519a5b=$gameTemp[_0x2b92f7(0x214)]();if(_0x519a5b&&_0x519a5b[_0x2b92f7(0x24a)])return!![];const _0x149fc1=VisuMZ[_0x2b92f7(0x353)]['RegExp'][_0x2b92f7(0x29e)],_0x33f111=_0x2aec1a[_0x2b92f7(0x36d)]['match'](_0x149fc1);if(_0x33f111)for(const _0x219b03 of _0x33f111){if(!_0x219b03)continue;_0x219b03[_0x2b92f7(0x35a)](_0x149fc1);const _0x48ba3e=JSON[_0x2b92f7(0x2be)]('['+RegExp['$1'][_0x2b92f7(0x35a)](/\d+/g)+']');for(const _0x35a35f of _0x48ba3e){if(!$gameSwitches[_0x2b92f7(0x35c)](_0x35a35f))return![];}}return!![];},VisuMZ[_0x54c7a2(0x353)][_0x54c7a2(0x275)]=function(_0x4b5d2d){const _0x4bdc58=_0x54c7a2,_0x73c7c5=$gameTemp['getCustomItemCraftingSettings']();if(_0x73c7c5&&_0x73c7c5[_0x4bdc58(0x24a)])return!![];const _0x242c22=VisuMZ[_0x4bdc58(0x353)][_0x4bdc58(0x1e7)][_0x4bdc58(0x26a)],_0x3f3ae7=_0x4b5d2d['note']['match'](_0x242c22);if(_0x3f3ae7){for(const _0x3aa42a of _0x3f3ae7){if(!_0x3aa42a)continue;_0x3aa42a['match'](_0x242c22);const _0x158c96=JSON[_0x4bdc58(0x2be)]('['+RegExp['$1'][_0x4bdc58(0x35a)](/\d+/g)+']');for(const _0x49ba3e of _0x158c96){if($gameSwitches['value'](_0x49ba3e))return!![];}}return![];}return!![];},DataManager[_0x54c7a2(0x23d)]=function(){const _0x29260c=_0x54c7a2,_0x59ece8=$gameTemp['getCustomItemCraftingSettings']();if(_0x59ece8)return _0x59ece8[_0x29260c(0x368)]['filter'](_0x35ccf9=>this[_0x29260c(0x30b)](_0x35ccf9));const _0x2c0955=this['craftableItems'](),_0x919027=this[_0x29260c(0x308)](),_0x34d987=this[_0x29260c(0x339)]();return _0x2c0955['concat'](_0x919027,_0x34d987);},DataManager['craftableItems']=function(){const _0x17607b=_0x54c7a2;return this[_0x17607b(0x348)]()[_0x17607b(0x312)](_0x386758=>this[_0x17607b(0x30b)](_0x386758));},DataManager['allCraftableItems']=function(){const _0x2f97c9=_0x54c7a2;if(this[_0x2f97c9(0x391)]!==undefined)return this[_0x2f97c9(0x391)];this[_0x2f97c9(0x391)]=[];for(const _0x3c684e of $dataItems){if(!_0x3c684e)continue;_0x3c684e[_0x2f97c9(0x36d)][_0x2f97c9(0x35a)](VisuMZ[_0x2f97c9(0x353)][_0x2f97c9(0x1e7)][_0x2f97c9(0x21b)])&&this[_0x2f97c9(0x391)][_0x2f97c9(0x22c)](_0x3c684e);}return this[_0x2f97c9(0x391)];},DataManager[_0x54c7a2(0x308)]=function(){const _0x16af04=_0x54c7a2;return this[_0x16af04(0x1e5)]()['filter'](_0x401c20=>this['isCraftItemListed'](_0x401c20));},DataManager[_0x54c7a2(0x1e5)]=function(){const _0xdf5103=_0x54c7a2;if(this[_0xdf5103(0x272)]!==undefined)return this['_allCraftableWeapons'];this['_allCraftableWeapons']=[];for(const _0x219234 of $dataWeapons){if(!_0x219234)continue;_0x219234['note']['match'](VisuMZ[_0xdf5103(0x353)]['RegExp'][_0xdf5103(0x21b)])&&this[_0xdf5103(0x272)]['push'](_0x219234);}return this[_0xdf5103(0x272)];},DataManager[_0x54c7a2(0x339)]=function(){const _0x16b847=_0x54c7a2;return this[_0x16b847(0x268)]()['filter'](_0x334293=>this['isCraftItemListed'](_0x334293));},DataManager[_0x54c7a2(0x268)]=function(){const _0x2ee00c=_0x54c7a2;if(this[_0x2ee00c(0x2d6)]!==undefined)return this[_0x2ee00c(0x2d6)];this[_0x2ee00c(0x2d6)]=[];for(const _0x32b063 of $dataArmors){if(!_0x32b063)continue;_0x32b063[_0x2ee00c(0x36d)][_0x2ee00c(0x35a)](VisuMZ['ItemCraftingSys'][_0x2ee00c(0x1e7)][_0x2ee00c(0x21b)])&&this[_0x2ee00c(0x2d6)]['push'](_0x32b063);}return this[_0x2ee00c(0x2d6)];},DataManager[_0x54c7a2(0x2e1)]=function(_0x374536){const _0x26ef59=_0x54c7a2;if(!_0x374536)return[];const _0x204d55=this['createCraftingItemKey'](_0x374536);return this[_0x26ef59(0x24f)]===undefined&&this[_0x26ef59(0x200)](),this[_0x26ef59(0x24f)][_0x204d55]||[];},DataManager['createCraftingItemKey']=function(_0x262d4c){const _0x1de5b8=_0x54c7a2;let _0x111f1c=_0x1de5b8(0x3aa);if(this[_0x1de5b8(0x290)](_0x262d4c))return _0x111f1c[_0x1de5b8(0x27b)](_0x1de5b8(0x393),_0x262d4c['id']);if(this[_0x1de5b8(0x3a1)](_0x262d4c))return _0x111f1c[_0x1de5b8(0x27b)](_0x1de5b8(0x1ea),_0x262d4c['id']);if(this[_0x1de5b8(0x31e)](_0x262d4c))return _0x111f1c[_0x1de5b8(0x27b)](_0x1de5b8(0x313),_0x262d4c['id']);return'';},DataManager[_0x54c7a2(0x200)]=function(){const _0x156fa5=_0x54c7a2;this[_0x156fa5(0x24f)]={};const _0xc919f8=$dataItems[_0x156fa5(0x24e)]($dataWeapons,$dataArmors);for(const _0x19908d of _0xc919f8){if(!_0x19908d)continue;if(_0x19908d[_0x156fa5(0x36d)][_0x156fa5(0x35a)](VisuMZ['ItemCraftingSys'][_0x156fa5(0x1e7)][_0x156fa5(0x21b)])){const _0x3e201c=String(RegExp['$1'])[_0x156fa5(0x378)](/[\r\n]+/),_0x1cf49f=this[_0x156fa5(0x2fd)](_0x19908d,_0x3e201c);if(_0x1cf49f[_0x156fa5(0x2e6)]<=0x0)continue;const _0x310c0c=this[_0x156fa5(0x2ce)](_0x19908d);this[_0x156fa5(0x24f)][_0x310c0c]=_0x1cf49f;}}},DataManager[_0x54c7a2(0x2fd)]=function(_0x511030,_0x1d8cf8){const _0x910510=_0x54c7a2;let _0x41e9e4=[];for(let _0x363b4b of _0x1d8cf8){_0x363b4b=_0x363b4b['trim']();if(_0x363b4b[_0x910510(0x35a)](/GOLD:[ ](\d+)/i))_0x41e9e4[_0x910510(0x22c)](['gold',Number(RegExp['$1'])]);else{if(_0x363b4b[_0x910510(0x35a)](/CATEGORY[ ](.*):[ ](\d+)/i)){const _0x3719b0=String(RegExp['$1'])[_0x910510(0x352)](),_0x2daeab=Number(RegExp['$2'])||0x1,_0x4a6a48=_0x910510(0x24b)[_0x910510(0x27b)](_0x3719b0);_0x41e9e4[_0x910510(0x22c)]([_0x4a6a48,_0x2daeab]);}else{if(_0x363b4b[_0x910510(0x35a)](/(.*?)[ ](\d+):[ ](\d+)/i)){const _0x518b3e=RegExp['$1'][_0x910510(0x2ed)]()[_0x910510(0x352)](),_0x40fc2d=Number(RegExp['$2'])||0x0,_0x5bbb03=Number(RegExp['$3'])||0x1;let _0x3b50a3=null;if([_0x910510(0x32d),_0x910510(0x20f)][_0x910510(0x386)](_0x518b3e))_0x3b50a3=$dataItems;if([_0x910510(0x347),_0x910510(0x2fe)][_0x910510(0x386)](_0x518b3e))_0x3b50a3=$dataWeapons;if([_0x910510(0x3ae),_0x910510(0x26c)][_0x910510(0x386)](_0x518b3e))_0x3b50a3=$dataArmors;this[_0x910510(0x344)](_0x511030,_0x3b50a3,_0x40fc2d,_0x41e9e4)&&_0x41e9e4[_0x910510(0x22c)]([_0x3b50a3[_0x40fc2d],_0x5bbb03]);}else{if(_0x363b4b[_0x910510(0x35a)](/(.*?)[ ](.*):[ ](\d+)/i)){const _0x1a8001=RegExp['$1']['toLowerCase']()['trim'](),_0x17420d=RegExp['$2'][_0x910510(0x352)](),_0x19add1=Number(RegExp['$3'])||0x1;let _0x3e913a=null,_0x1ca42b=0x0;[_0x910510(0x32d),_0x910510(0x20f)][_0x910510(0x386)](_0x1a8001)&&(_0x3e913a=$dataItems,_0x1ca42b=this[_0x910510(0x2a2)](_0x17420d)),[_0x910510(0x347),_0x910510(0x2fe)][_0x910510(0x386)](_0x1a8001)&&(_0x3e913a=$dataWeapons,_0x1ca42b=this['getWeaponIdWithName'](_0x17420d)),[_0x910510(0x3ae),_0x910510(0x26c)]['includes'](_0x1a8001)&&(_0x3e913a=$dataArmors,_0x1ca42b=this[_0x910510(0x28e)](_0x17420d)),this['checkItemCraftingResultsValid'](_0x511030,_0x3e913a,_0x1ca42b,_0x41e9e4)&&_0x41e9e4[_0x910510(0x22c)]([_0x3e913a[_0x1ca42b],_0x19add1]);}}}}}return _0x41e9e4;},DataManager['checkItemCraftingResultsValid']=function(_0x2066cf,_0x48e79a,_0x513378,_0x10c338){if(!_0x48e79a)return![];if(!_0x48e79a[_0x513378])return![];const _0x4f1218=_0x48e79a[_0x513378];if(_0x4f1218===_0x2066cf)return![];for(const _0x5563e5 of _0x10c338){if(!_0x5563e5)continue;if(_0x5563e5[0x0]===_0x4f1218)return![];}return!![];},DataManager[_0x54c7a2(0x2a2)]=function(_0x1e3558){const _0x1b6849=_0x54c7a2;_0x1e3558=_0x1e3558[_0x1b6849(0x225)]()[_0x1b6849(0x352)](),this[_0x1b6849(0x395)]=this['_itemIDs']||{};if(this[_0x1b6849(0x395)][_0x1e3558])return this[_0x1b6849(0x395)][_0x1e3558];for(const _0x188a89 of $dataItems){if(!_0x188a89)continue;this[_0x1b6849(0x395)][_0x188a89['name'][_0x1b6849(0x225)]()[_0x1b6849(0x352)]()]=_0x188a89['id'];}return this['_itemIDs'][_0x1e3558]||0x0;},DataManager[_0x54c7a2(0x2e8)]=function(_0x4bec4a){const _0x5454b8=_0x54c7a2;_0x4bec4a=_0x4bec4a[_0x5454b8(0x225)]()[_0x5454b8(0x352)](),this[_0x5454b8(0x305)]=this['_weaponIDs']||{};if(this[_0x5454b8(0x305)][_0x4bec4a])return this[_0x5454b8(0x305)][_0x4bec4a];for(const _0x3114f0 of $dataWeapons){if(!_0x3114f0)continue;this[_0x5454b8(0x305)][_0x3114f0[_0x5454b8(0x28d)]['toUpperCase']()['trim']()]=_0x3114f0['id'];}return this[_0x5454b8(0x305)][_0x4bec4a]||0x0;},DataManager[_0x54c7a2(0x28e)]=function(_0x78fd61){const _0x13a91c=_0x54c7a2;_0x78fd61=_0x78fd61[_0x13a91c(0x225)]()['trim'](),this[_0x13a91c(0x385)]=this[_0x13a91c(0x385)]||{};if(this[_0x13a91c(0x385)][_0x78fd61])return this['_armorIDs'][_0x78fd61];for(const _0x52d5db of $dataArmors){if(!_0x52d5db)continue;this[_0x13a91c(0x385)][_0x52d5db[_0x13a91c(0x28d)][_0x13a91c(0x225)]()[_0x13a91c(0x352)]()]=_0x52d5db['id'];}return this[_0x13a91c(0x385)][_0x78fd61]||0x0;},DataManager[_0x54c7a2(0x274)]=function(_0x111178){const _0x4aadc4=_0x54c7a2;if(!_0x111178)return![];if(!VisuMZ['ItemCraftingSys'][_0x4aadc4(0x237)][_0x4aadc4(0x367)][_0x4aadc4(0x28b)])return![];const _0xdf9572=$gameTemp[_0x4aadc4(0x214)]();if(_0xdf9572&&_0xdf9572[_0x4aadc4(0x1f6)])return![];if(_0x111178[_0x4aadc4(0x36d)]['match'](VisuMZ[_0x4aadc4(0x353)][_0x4aadc4(0x1e7)][_0x4aadc4(0x34e)]))return![];return!$gameSystem[_0x4aadc4(0x36a)](_0x111178);},ImageManager[_0x54c7a2(0x343)]=VisuMZ[_0x54c7a2(0x353)]['Settings'][_0x54c7a2(0x1e6)][_0x54c7a2(0x3a4)],SoundManager[_0x54c7a2(0x1de)]=function(_0x1b6596){const _0x2208f9=_0x54c7a2;AudioManager['playStaticSe'](VisuMZ[_0x2208f9(0x353)][_0x2208f9(0x237)][_0x2208f9(0x38a)]);},TextManager['itemCraftingIngredientsBridge']=VisuMZ[_0x54c7a2(0x353)][_0x54c7a2(0x237)]['General']['IngredientBridge'],TextManager[_0x54c7a2(0x2a0)]=VisuMZ[_0x54c7a2(0x353)][_0x54c7a2(0x237)][_0x54c7a2(0x1e6)]['CraftAssistButton'],TextManager[_0x54c7a2(0x2db)]=VisuMZ[_0x54c7a2(0x353)][_0x54c7a2(0x237)][_0x54c7a2(0x367)]['MaskLetter'],TextManager[_0x54c7a2(0x38f)]=VisuMZ[_0x54c7a2(0x353)][_0x54c7a2(0x237)][_0x54c7a2(0x204)][_0x54c7a2(0x320)],ColorManager[_0x54c7a2(0x377)]=function(_0x2374ee){const _0x1b3ae7=_0x54c7a2;return _0x2374ee=String(_0x2374ee),_0x2374ee['match'](/#(.*)/i)?_0x1b3ae7(0x2bb)[_0x1b3ae7(0x27b)](String(RegExp['$1'])):this[_0x1b3ae7(0x38c)](Number(_0x2374ee));},SceneManager[_0x54c7a2(0x37a)]=function(){const _0x542dc0=_0x54c7a2;return this[_0x542dc0(0x245)]&&this['_scene'][_0x542dc0(0x267)]===Scene_Battle;},SceneManager[_0x54c7a2(0x2f7)]=function(){const _0x5bfc80=_0x54c7a2;return this[_0x5bfc80(0x245)]&&this['_scene']['constructor']===Scene_ItemCrafting;},Game_Temp[_0x54c7a2(0x336)][_0x54c7a2(0x214)]=function(){const _0x1da699=_0x54c7a2;return this[_0x1da699(0x3af)];},Game_Temp[_0x54c7a2(0x336)][_0x54c7a2(0x1f3)]=function(){this['_customItemCraftingSettings']=undefined;},Game_Temp[_0x54c7a2(0x336)]['setCustomItemCraftingSettings']=function(_0x90b4b){const _0x51a3eb=_0x54c7a2;this[_0x51a3eb(0x3af)]=_0x90b4b;},VisuMZ[_0x54c7a2(0x353)][_0x54c7a2(0x3a0)]=Game_System[_0x54c7a2(0x336)][_0x54c7a2(0x234)],Game_System[_0x54c7a2(0x336)][_0x54c7a2(0x234)]=function(){const _0x48a25b=_0x54c7a2;VisuMZ[_0x48a25b(0x353)]['Game_System_initialize'][_0x48a25b(0x2fb)](this),this[_0x48a25b(0x23a)](),this[_0x48a25b(0x20e)]();},Game_System[_0x54c7a2(0x336)][_0x54c7a2(0x23a)]=function(){const _0x2a3ccf=_0x54c7a2;this[_0x2a3ccf(0x35f)]={'shown':VisuMZ[_0x2a3ccf(0x353)][_0x2a3ccf(0x237)][_0x2a3ccf(0x204)][_0x2a3ccf(0x2bc)],'enabled':VisuMZ[_0x2a3ccf(0x353)]['Settings'][_0x2a3ccf(0x204)][_0x2a3ccf(0x23f)]};},Game_System[_0x54c7a2(0x336)][_0x54c7a2(0x37d)]=function(){const _0x4b130f=_0x54c7a2;if(this[_0x4b130f(0x35f)]===undefined)this[_0x4b130f(0x23a)]();return this[_0x4b130f(0x35f)][_0x4b130f(0x2fa)];},Game_System['prototype']['setMainMenuItemCraftingVisible']=function(_0xb64180){const _0x3d68d6=_0x54c7a2;if(this[_0x3d68d6(0x35f)]===undefined)this[_0x3d68d6(0x23a)]();this[_0x3d68d6(0x35f)][_0x3d68d6(0x2fa)]=_0xb64180;},Game_System[_0x54c7a2(0x336)]['isMainMenuItemCraftingEnabled']=function(){const _0x1fbc47=_0x54c7a2;if(this[_0x1fbc47(0x35f)]===undefined)this['initItemCraftingMainMenu']();return this['_ItemCrafting_MainMenu'][_0x1fbc47(0x360)];},Game_System['prototype']['setMainMenuItemCraftingEnabled']=function(_0x35689e){const _0x3e62eb=_0x54c7a2;if(this[_0x3e62eb(0x35f)]===undefined)this[_0x3e62eb(0x23a)]();this[_0x3e62eb(0x35f)][_0x3e62eb(0x360)]=_0x35689e;},Game_System[_0x54c7a2(0x336)]['initItemCraftingSys']=function(){const _0xd30dd1=_0x54c7a2;this[_0xd30dd1(0x21d)]={'items':{},'weapons':{},'armors':{}};},Game_System['prototype'][_0x54c7a2(0x36a)]=function(_0x4f3fed){const _0x1e174f=_0x54c7a2;return!!this[_0x1e174f(0x248)](_0x4f3fed);},Game_System['prototype']['getItemCraftedTimes']=function(_0x414d89){const _0x1a5211=_0x54c7a2;if(!_0x414d89)return![];if(this[_0x1a5211(0x21d)]===undefined)this[_0x1a5211(0x20e)]();let _0x58a7cb={};if(DataManager[_0x1a5211(0x290)](_0x414d89))_0x58a7cb=this[_0x1a5211(0x21d)][_0x1a5211(0x20f)];if(DataManager['isWeapon'](_0x414d89))_0x58a7cb=this[_0x1a5211(0x21d)]['weapons'];if(DataManager[_0x1a5211(0x31e)](_0x414d89))_0x58a7cb=this[_0x1a5211(0x21d)][_0x1a5211(0x26c)];return _0x58a7cb[_0x414d89['id']]||0x0;},Game_System[_0x54c7a2(0x336)][_0x54c7a2(0x36b)]=function(_0x3319a3,_0x3f7d0d){const _0x6b3dee=_0x54c7a2;if(!_0x3319a3)return![];if(this[_0x6b3dee(0x21d)]===undefined)this['initItemCraftingSys']();_0x3f7d0d=_0x3f7d0d||0x1;let _0x47cdfa={};if(DataManager['isItem'](_0x3319a3))_0x47cdfa=this[_0x6b3dee(0x21d)][_0x6b3dee(0x20f)];if(DataManager[_0x6b3dee(0x3a1)](_0x3319a3))_0x47cdfa=this[_0x6b3dee(0x21d)][_0x6b3dee(0x2fe)];if(DataManager[_0x6b3dee(0x31e)](_0x3319a3))_0x47cdfa=this[_0x6b3dee(0x21d)][_0x6b3dee(0x26c)];_0x47cdfa[_0x3319a3['id']]=_0x47cdfa[_0x3319a3['id']]||0x0,_0x47cdfa[_0x3319a3['id']]+=_0x3f7d0d;},VisuMZ[_0x54c7a2(0x353)][_0x54c7a2(0x2d4)]=Scene_Menu[_0x54c7a2(0x336)]['createCommandWindow'],Scene_Menu[_0x54c7a2(0x336)][_0x54c7a2(0x23b)]=function(){const _0x5dfa89=_0x54c7a2;VisuMZ[_0x5dfa89(0x353)][_0x5dfa89(0x2d4)]['call'](this);const _0x26dfde=this['_commandWindow'];_0x26dfde[_0x5dfa89(0x223)](_0x5dfa89(0x25d),this['commandItemCrafting'][_0x5dfa89(0x1e2)](this));},Scene_Menu['prototype'][_0x54c7a2(0x326)]=function(){const _0x29e03d=_0x54c7a2;SceneManager[_0x29e03d(0x22c)](Scene_ItemCrafting);};function Scene_ItemCrafting(){const _0x4cab03=_0x54c7a2;this[_0x4cab03(0x234)](...arguments);}Scene_ItemCrafting[_0x54c7a2(0x336)]=Object[_0x54c7a2(0x33a)](Scene_Item[_0x54c7a2(0x336)]),Scene_ItemCrafting[_0x54c7a2(0x336)]['constructor']=Scene_ItemCrafting,Scene_ItemCrafting[_0x54c7a2(0x336)][_0x54c7a2(0x234)]=function(){const _0x5a06c5=_0x54c7a2;Scene_Item['prototype'][_0x5a06c5(0x234)][_0x5a06c5(0x2fb)](this);},Scene_ItemCrafting[_0x54c7a2(0x336)][_0x54c7a2(0x1f5)]=function(){const _0x5f1edc=_0x54c7a2;Scene_Item[_0x5f1edc(0x336)]['update']['call'](this),this[_0x5f1edc(0x32b)]();},Scene_ItemCrafting[_0x54c7a2(0x336)][_0x54c7a2(0x33a)]=function(){const _0x2162b3=_0x54c7a2;Scene_Item[_0x2162b3(0x336)][_0x2162b3(0x33a)][_0x2162b3(0x2fb)](this),this['createGoldWindow'](),this['createNumberWindow'](),this[_0x2162b3(0x23e)](),this[_0x2162b3(0x1f8)](),this['isUseModernControls']()&&this[_0x2162b3(0x1fe)](),this[_0x2162b3(0x2a1)](),this['resetCraftingSwitches']();},Scene_ItemCrafting[_0x54c7a2(0x336)][_0x54c7a2(0x2a1)]=function(){const _0x35c4c2=_0x54c7a2,_0x30df20=VisuMZ[_0x35c4c2(0x353)][_0x35c4c2(0x237)]['Window'];this[_0x35c4c2(0x20d)]&&this[_0x35c4c2(0x20d)]['setBackgroundType'](_0x30df20['HelpBgType']),this[_0x35c4c2(0x1dd)]&&this[_0x35c4c2(0x1dd)][_0x35c4c2(0x2d8)](_0x30df20[_0x35c4c2(0x2ae)]),this[_0x35c4c2(0x317)]&&this[_0x35c4c2(0x317)]['setBackgroundType'](_0x30df20['GoldBgType']),this['_itemWindow']&&this[_0x35c4c2(0x2b0)][_0x35c4c2(0x2d8)](_0x30df20[_0x35c4c2(0x2fc)]),this['_statusWindow']&&this[_0x35c4c2(0x2d1)][_0x35c4c2(0x2d8)](_0x30df20[_0x35c4c2(0x2ba)]),this[_0x35c4c2(0x2d0)]&&this['_ingredientSelectTitle'][_0x35c4c2(0x2d8)](_0x30df20[_0x35c4c2(0x390)]),this[_0x35c4c2(0x293)]&&this['_ingredientSelectList'][_0x35c4c2(0x2d8)](_0x30df20[_0x35c4c2(0x1f7)]),this[_0x35c4c2(0x342)]&&this[_0x35c4c2(0x342)][_0x35c4c2(0x2d8)](_0x30df20[_0x35c4c2(0x2b5)]),this['_buttonAssistWindow']&&this[_0x35c4c2(0x2ab)]['setBackgroundType'](_0x30df20['ButtonAssistBgType']);},Scene_ItemCrafting[_0x54c7a2(0x336)][_0x54c7a2(0x29a)]=function(){const _0x200ec1=_0x54c7a2;return Scene_Shop[_0x200ec1(0x336)][_0x200ec1(0x387)][_0x200ec1(0x2fb)](this);},Scene_ItemCrafting[_0x54c7a2(0x336)]['createGoldWindow']=function(){const _0xa49d3f=_0x54c7a2,_0x23fbd1=this[_0xa49d3f(0x2cf)]();this[_0xa49d3f(0x317)]=new Window_Gold(_0x23fbd1),this['addWindow'](this[_0xa49d3f(0x317)]);},Scene_ItemCrafting[_0x54c7a2(0x336)][_0x54c7a2(0x2cf)]=function(){const _0x1f29f9=_0x54c7a2;return Scene_Shop[_0x1f29f9(0x336)][_0x1f29f9(0x382)][_0x1f29f9(0x2fb)](this);},Scene_ItemCrafting[_0x54c7a2(0x336)][_0x54c7a2(0x2f1)]=function(){const _0x5a725c=_0x54c7a2;return Scene_Shop[_0x5a725c(0x336)]['commandWindowRectItemsEquipsCore'][_0x5a725c(0x2fb)](this);},Scene_ItemCrafting['prototype'][_0x54c7a2(0x22f)]=function(){const _0x322062=_0x54c7a2;this[_0x322062(0x27a)](),this[_0x322062(0x2dc)]()&&this[_0x322062(0x294)](),this['allowCreateStatusWindow']()&&(this['createStatusWindow'](),this[_0x322062(0x30a)](this[_0x322062(0x2b0)]));},Scene_ItemCrafting[_0x54c7a2(0x336)][_0x54c7a2(0x27a)]=function(){const _0x2caff2=_0x54c7a2,_0x434f6a=this[_0x2caff2(0x2a5)]();this[_0x2caff2(0x2b0)]=new Window_ItemCraftingList(_0x434f6a),this['_itemWindow'][_0x2caff2(0x278)](this[_0x2caff2(0x20d)]),this[_0x2caff2(0x2b0)][_0x2caff2(0x223)]('ok',this[_0x2caff2(0x261)][_0x2caff2(0x1e2)](this)),this[_0x2caff2(0x2b0)][_0x2caff2(0x223)](_0x2caff2(0x2c7),this[_0x2caff2(0x2c8)][_0x2caff2(0x1e2)](this)),this[_0x2caff2(0x30a)](this[_0x2caff2(0x2b0)]),this[_0x2caff2(0x1dd)][_0x2caff2(0x2c5)](this[_0x2caff2(0x2b0)]),!this[_0x2caff2(0x1dd)][_0x2caff2(0x380)]()&&(this[_0x2caff2(0x2b0)]['y']-=this[_0x2caff2(0x1dd)]['height'],this['_itemWindow'][_0x2caff2(0x24d)]+=this['_categoryWindow'][_0x2caff2(0x24d)],this[_0x2caff2(0x1dd)]['hide'](),this[_0x2caff2(0x1dd)]['deactivate'](),this[_0x2caff2(0x1fe)]());},Scene_ItemCrafting[_0x54c7a2(0x336)][_0x54c7a2(0x2a5)]=function(){const _0xa8e488=_0x54c7a2;return this[_0xa8e488(0x2d5)]=this[_0xa8e488(0x1dd)],Scene_Shop[_0xa8e488(0x336)][_0xa8e488(0x2b1)][_0xa8e488(0x2fb)](this);},Scene_ItemCrafting[_0x54c7a2(0x336)][_0x54c7a2(0x2bf)]=function(){const _0x5767f8=_0x54c7a2;return Scene_Shop[_0x5767f8(0x336)][_0x5767f8(0x231)][_0x5767f8(0x2fb)](this);},Scene_ItemCrafting[_0x54c7a2(0x336)][_0x54c7a2(0x28a)]=function(){const _0x73a514=_0x54c7a2,_0x51c564=this[_0x73a514(0x2a5)]();this[_0x73a514(0x342)]=new Window_ItemCraftingNumber(_0x51c564),this['_numberWindow'][_0x73a514(0x218)](),this[_0x73a514(0x342)][_0x73a514(0x223)]('ok',this[_0x73a514(0x26b)][_0x73a514(0x1e2)](this)),this[_0x73a514(0x342)]['setHandler'](_0x73a514(0x2c7),this[_0x73a514(0x2e4)]['bind'](this)),this[_0x73a514(0x30a)](this[_0x73a514(0x342)]);},Scene_ItemCrafting[_0x54c7a2(0x336)][_0x54c7a2(0x23e)]=function(){const _0x259c10=_0x54c7a2,_0x23da7c=this[_0x259c10(0x2f1)]();this['_ingredientSelectTitle']=new Window_Selectable(_0x23da7c),this[_0x259c10(0x2d0)][_0x259c10(0x218)](),this[_0x259c10(0x30a)](this['_ingredientSelectTitle']);},Scene_ItemCrafting['prototype'][_0x54c7a2(0x1f8)]=function(){const _0x4a76df=_0x54c7a2,_0x102995=this[_0x4a76df(0x2a5)](),_0x568d64=new Window_ItemCraftingIngredient(_0x102995);_0x568d64[_0x4a76df(0x218)](),_0x568d64[_0x4a76df(0x278)](this[_0x4a76df(0x20d)]),_0x568d64[_0x4a76df(0x220)](this['_statusWindow']),_0x568d64[_0x4a76df(0x223)]('ok',this['onIngredientListOk']['bind'](this)),_0x568d64[_0x4a76df(0x223)](_0x4a76df(0x2c7),this[_0x4a76df(0x2ee)][_0x4a76df(0x1e2)](this)),this['_ingredientSelectList']=_0x568d64,this[_0x4a76df(0x30a)](this[_0x4a76df(0x293)]);},Scene_ItemCrafting[_0x54c7a2(0x336)][_0x54c7a2(0x1fe)]=function(){const _0x44c184=_0x54c7a2;this[_0x44c184(0x2b0)][_0x44c184(0x303)](),this['_itemWindow'][_0x44c184(0x2eb)](0x0);},Scene_ItemCrafting[_0x54c7a2(0x336)]['onItemOk']=function(){const _0x5e7f77=_0x54c7a2;this[_0x5e7f77(0x210)]=this[_0x5e7f77(0x2b0)][_0x5e7f77(0x32d)](),this[_0x5e7f77(0x2b0)][_0x5e7f77(0x218)](),this[_0x5e7f77(0x29f)](),this[_0x5e7f77(0x2d9)]()?this[_0x5e7f77(0x2da)]():this['setupNumberWindow']();},Scene_ItemCrafting[_0x54c7a2(0x336)][_0x54c7a2(0x2c1)]=function(){const _0x4270e9=_0x54c7a2;this['_ingredientSelectTitle'][_0x4270e9(0x218)](),this['_ingredientSelectList'][_0x4270e9(0x218)](),this[_0x4270e9(0x1dd)][_0x4270e9(0x314)](),this['_numberWindow'][_0x4270e9(0x3a2)](this['_item']),this[_0x4270e9(0x342)][_0x4270e9(0x314)](),this['_numberWindow'][_0x4270e9(0x303)]();},Scene_ItemCrafting['prototype'][_0x54c7a2(0x215)]=function(){const _0x4db570=_0x54c7a2;this['_numberWindow']['hide'](),this[_0x4db570(0x2d0)][_0x4db570(0x218)](),this[_0x4db570(0x293)][_0x4db570(0x218)](),this[_0x4db570(0x1dd)][_0x4db570(0x314)](),this[_0x4db570(0x2b0)][_0x4db570(0x314)](),this['_itemWindow'][_0x4db570(0x303)]();},Scene_ItemCrafting[_0x54c7a2(0x336)]['onNumberOk']=function(){const _0x75c146=_0x54c7a2;VisuMZ[_0x75c146(0x353)][_0x75c146(0x237)][_0x75c146(0x2f9)]['ShowAnimations']?this[_0x75c146(0x301)]():this[_0x75c146(0x2c0)]();},Scene_ItemCrafting[_0x54c7a2(0x336)]['finishAnimation']=function(){const _0x191b18=_0x54c7a2;this['_windowLayer'][_0x191b18(0x201)]=!![],this[_0x191b18(0x311)]=![],this[_0x191b18(0x2b6)](),this[_0x191b18(0x346)](),this['activateItemWindow'](),this['_itemWindow'][_0x191b18(0x34a)](),this['_categoryWindow']['refresh'](),this[_0x191b18(0x1dd)]['refreshCursor'](),this['_categoryWindow']['callUpdateHelp'](),this[_0x191b18(0x317)][_0x191b18(0x34a)](),this[_0x191b18(0x2b0)][_0x191b18(0x28f)]();},Scene_ItemCrafting['prototype'][_0x54c7a2(0x2b6)]=function(){const _0x54bb94=_0x54c7a2,_0x205e7f=this[_0x54bb94(0x210)],_0x3eb82e=this['_numberWindow']['number'](),_0xb93d1a=DataManager[_0x54bb94(0x2e1)](_0x205e7f);let _0x351d80=0x0;for(const _0x56b018 of _0xb93d1a){if(!_0x56b018)continue;let _0xac21d5=_0x56b018[0x0];const _0x517566=_0x56b018[0x1]*_0x3eb82e;_0xac21d5===_0x54bb94(0x31f)?$gameParty['loseGold'](_0x517566):(typeof _0xac21d5==='string'&&_0xac21d5['match'](/CATEGORY/i)&&(_0xac21d5=this['_ingredientsList'][_0x351d80],_0x351d80+=0x1),$gameParty[_0x54bb94(0x349)](_0xac21d5,_0x517566,![]));}$gameParty[_0x54bb94(0x338)](_0x205e7f,_0x3eb82e),this[_0x54bb94(0x342)][_0x54bb94(0x371)]()>0x0?SoundManager['playItemCrafting']():SoundManager['playCancel'](),$gameSystem[_0x54bb94(0x36b)](_0x205e7f,_0x3eb82e);},Scene_ItemCrafting[_0x54c7a2(0x336)][_0x54c7a2(0x346)]=function(){const _0x729dd1=_0x54c7a2,_0x2a189b=this[_0x729dd1(0x210)],_0x5bb9fd=this[_0x729dd1(0x342)][_0x729dd1(0x371)]();VisuMZ[_0x729dd1(0x353)][_0x729dd1(0x257)](_0x2a189b,!![]),VisuMZ[_0x729dd1(0x353)]['TurnSwitches'](_0x2a189b,![]),this[_0x729dd1(0x20c)]();const _0x5d94d8=DataManager[_0x729dd1(0x2ce)](_0x2a189b);VisuMZ[_0x729dd1(0x353)]['JS'][_0x5d94d8]&&VisuMZ[_0x729dd1(0x353)]['JS'][_0x5d94d8][_0x729dd1(0x2fb)](this,_0x2a189b,_0x5bb9fd),VisuMZ[_0x729dd1(0x353)][_0x729dd1(0x237)][_0x729dd1(0x1e6)][_0x729dd1(0x3ab)][_0x729dd1(0x2fb)](this,_0x2a189b,_0x5bb9fd);},VisuMZ[_0x54c7a2(0x353)][_0x54c7a2(0x257)]=function(_0x5da40b,_0x5e8cb7){const _0x5cd9a6=_0x54c7a2,_0x22a1fb=_0x5e8cb7?VisuMZ[_0x5cd9a6(0x353)][_0x5cd9a6(0x1e7)][_0x5cd9a6(0x2f5)]:VisuMZ[_0x5cd9a6(0x353)][_0x5cd9a6(0x1e7)][_0x5cd9a6(0x264)],_0x2c6f96=_0x5da40b[_0x5cd9a6(0x36d)]['match'](_0x22a1fb);if(_0x2c6f96)for(const _0x2a4095 of _0x2c6f96){if(!_0x2a4095)continue;_0x2a4095[_0x5cd9a6(0x35a)](_0x22a1fb);const _0x32dab4=JSON[_0x5cd9a6(0x2be)]('['+RegExp['$1'][_0x5cd9a6(0x35a)](/\d+/g)+']');for(const _0x2c96e7 of _0x32dab4){$gameSwitches[_0x5cd9a6(0x379)](_0x2c96e7,_0x5e8cb7);}}},Scene_ItemCrafting[_0x54c7a2(0x336)][_0x54c7a2(0x2e4)]=function(){const _0x337492=_0x54c7a2;SoundManager['playCancel'](),this[_0x337492(0x2ee)]();},Scene_ItemCrafting['prototype']['onIngredientListOk']=function(){const _0x5eca93=_0x54c7a2,_0x576152=this[_0x5eca93(0x293)][_0x5eca93(0x32d)]();this[_0x5eca93(0x2e3)][this[_0x5eca93(0x319)]]=_0x576152,this[_0x5eca93(0x319)]++,this['setupSelectIngredientWindow']();},Scene_ItemCrafting[_0x54c7a2(0x336)][_0x54c7a2(0x2ee)]=function(){const _0x4b87a3=_0x54c7a2;this['_ingredientsList'][_0x4b87a3(0x376)](),this[_0x4b87a3(0x319)]--,this[_0x4b87a3(0x319)]<0x0?this[_0x4b87a3(0x215)]():this['setupSelectIngredientWindow']();},Scene_ItemCrafting[_0x54c7a2(0x336)]['clearUserSelectedIngredients']=function(){const _0x531462=_0x54c7a2;this['_ingredientCategories']=[],this['_ingredientAmounts']=[],this[_0x531462(0x2e3)]=[],this['_ingredientIndex']=0x0;},Scene_ItemCrafting[_0x54c7a2(0x336)]['doesItemHaveOpenCategories']=function(){const _0x35c2b8=_0x54c7a2;if(!this[_0x35c2b8(0x210)])return![];const _0x319d1b=DataManager[_0x35c2b8(0x2e1)](this[_0x35c2b8(0x210)]);for(const _0x1e5085 of _0x319d1b){if(!_0x1e5085)continue;const _0x3f53b3=_0x1e5085[0x0];if(!_0x3f53b3)continue;if(typeof _0x3f53b3===_0x35c2b8(0x3ac)&&_0x3f53b3[_0x35c2b8(0x35a)](/CATEGORY/i)){_0x3f53b3[_0x35c2b8(0x35a)](/CATEGORY: (.*)/i);const _0x44baea=String(RegExp['$1'])[_0x35c2b8(0x352)]();this[_0x35c2b8(0x39a)][_0x35c2b8(0x22c)](_0x44baea),this[_0x35c2b8(0x2e9)][_0x35c2b8(0x22c)](_0x1e5085[0x1]||0x1);}}return this[_0x35c2b8(0x39a)]['length']>0x0;},Scene_ItemCrafting[_0x54c7a2(0x336)][_0x54c7a2(0x2da)]=function(){const _0x4ffd28=_0x54c7a2;if(this[_0x4ffd28(0x319)]>=this[_0x4ffd28(0x39a)][_0x4ffd28(0x2e6)])return this[_0x4ffd28(0x2c1)]();this[_0x4ffd28(0x1dd)][_0x4ffd28(0x218)](),this[_0x4ffd28(0x342)]['hide']();const _0x141f12=this[_0x4ffd28(0x39a)][this[_0x4ffd28(0x319)]],_0x13e402=this[_0x4ffd28(0x2e9)][this[_0x4ffd28(0x319)]];this['_ingredientSelectTitle'][_0x4ffd28(0x314)](),this['_ingredientSelectList'][_0x4ffd28(0x314)](),this[_0x4ffd28(0x2d0)][_0x4ffd28(0x1ee)]['clear']();const _0x4a04bb=VisuMZ[_0x4ffd28(0x353)]['Settings'][_0x4ffd28(0x1e6)][_0x4ffd28(0x28c)],_0x341af1=VisuMZ[_0x4ffd28(0x34b)][_0x4ffd28(0x237)]['ItemScene'][_0x4ffd28(0x21c)],_0x12a0ba=_0x4a04bb[_0x4ffd28(0x27b)](_0x141f12,_0x341af1[_0x4ffd28(0x27b)](_0x13e402)),_0x1140e2=this[_0x4ffd28(0x2d0)][_0x4ffd28(0x340)](0x0);this['_ingredientSelectTitle'][_0x4ffd28(0x341)](_0x12a0ba,_0x1140e2['x'],_0x1140e2['y']),this['_ingredientSelectList'][_0x4ffd28(0x3a2)](_0x141f12,_0x13e402);},Scene_ItemCrafting[_0x54c7a2(0x336)]['buttonAssistKey1']=function(){const _0x30fc11=_0x54c7a2;if(this[_0x30fc11(0x342)]&&this[_0x30fc11(0x342)]['active'])return TextManager['getInputMultiButtonStrings']('left',_0x30fc11(0x249));return Scene_Item[_0x30fc11(0x336)][_0x30fc11(0x232)][_0x30fc11(0x2fb)](this);},Scene_ItemCrafting[_0x54c7a2(0x336)][_0x54c7a2(0x39f)]=function(){const _0x5b8d2b=_0x54c7a2;if(this['_numberWindow']&&this[_0x5b8d2b(0x342)]['active'])return TextManager[_0x5b8d2b(0x304)]('up',_0x5b8d2b(0x331));return Scene_Item['prototype'][_0x5b8d2b(0x39f)][_0x5b8d2b(0x2fb)](this);},Scene_ItemCrafting['prototype']['buttonAssistText1']=function(){const _0x547d49=_0x54c7a2;if(this[_0x547d49(0x300)]())return VisuMZ[_0x547d49(0x34b)]['Settings'][_0x547d49(0x366)][_0x547d49(0x30c)];else{if(this[_0x547d49(0x342)]&&this['_numberWindow']['active'])return VisuMZ[_0x547d49(0x34b)][_0x547d49(0x237)][_0x547d49(0x2cd)]['buttonAssistSmallIncrement'];}return Scene_Item['prototype'][_0x547d49(0x2c2)][_0x547d49(0x2fb)](this);},Scene_ItemCrafting[_0x54c7a2(0x336)][_0x54c7a2(0x2c3)]=function(){const _0x152556=_0x54c7a2;if(this['_numberWindow']&&this['_numberWindow']['active'])return VisuMZ[_0x152556(0x34b)][_0x152556(0x237)][_0x152556(0x2cd)][_0x152556(0x388)];return Scene_Item[_0x152556(0x336)][_0x152556(0x2c3)][_0x152556(0x2fb)](this);},Scene_ItemCrafting[_0x54c7a2(0x336)][_0x54c7a2(0x266)]=function(){const _0x2b4d1d=_0x54c7a2;return this[_0x2b4d1d(0x342)]&&this['_numberWindow'][_0x2b4d1d(0x29c)]?TextManager[_0x2b4d1d(0x2a0)]:Scene_Item[_0x2b4d1d(0x336)][_0x2b4d1d(0x266)]['call'](this);},Scene_ItemCrafting[_0x54c7a2(0x336)][_0x54c7a2(0x3ad)]=function(){const _0x4231d8=_0x54c7a2;Scene_MenuBase['prototype'][_0x4231d8(0x3ad)][_0x4231d8(0x2fb)](this),this[_0x4231d8(0x285)](this['getBackgroundOpacity']()),this[_0x4231d8(0x1f0)]();},Scene_ItemCrafting[_0x54c7a2(0x336)]['getBackgroundOpacity']=function(){const _0x171e47=_0x54c7a2;return VisuMZ[_0x171e47(0x353)]['Settings'][_0x171e47(0x263)][_0x171e47(0x276)];},Scene_ItemCrafting[_0x54c7a2(0x336)][_0x54c7a2(0x1f0)]=function(){const _0xdc403e=_0x54c7a2,_0x442621={'BgFilename1':VisuMZ[_0xdc403e(0x353)]['Settings']['BgSettings'][_0xdc403e(0x251)],'BgFilename2':VisuMZ[_0xdc403e(0x353)][_0xdc403e(0x237)][_0xdc403e(0x263)][_0xdc403e(0x35d)]};_0x442621&&(_0x442621['BgFilename1']!==''||_0x442621['BgFilename2']!=='')&&(this['_backSprite1']=new Sprite(ImageManager['loadTitle1'](_0x442621[_0xdc403e(0x251)])),this[_0xdc403e(0x1fa)]=new Sprite(ImageManager[_0xdc403e(0x33c)](_0x442621[_0xdc403e(0x35d)])),this[_0xdc403e(0x330)](this[_0xdc403e(0x2e5)]),this[_0xdc403e(0x330)](this[_0xdc403e(0x1fa)]),this[_0xdc403e(0x2e5)]['bitmap']['addLoadListener'](this[_0xdc403e(0x1e9)][_0xdc403e(0x1e2)](this,this['_backSprite1'])),this[_0xdc403e(0x1fa)][_0xdc403e(0x32a)]['addLoadListener'](this[_0xdc403e(0x1e9)][_0xdc403e(0x1e2)](this,this[_0xdc403e(0x1fa)])));},Scene_ItemCrafting['prototype'][_0x54c7a2(0x1e9)]=function(_0xfb9113){const _0xd22018=_0x54c7a2;this['scaleSprite'](_0xfb9113),this[_0xd22018(0x34d)](_0xfb9113);},Scene_ItemCrafting[_0x54c7a2(0x336)]['startAnimation']=function(){const _0x348b8f=_0x54c7a2;this[_0x348b8f(0x311)]=!![],this[_0x348b8f(0x202)]=0x14,this[_0x348b8f(0x38b)][_0x348b8f(0x201)]=VisuMZ['ItemCraftingSys'][_0x348b8f(0x237)][_0x348b8f(0x2f9)][_0x348b8f(0x2a7)]||![],this['createItemSprite']();},Scene_ItemCrafting[_0x54c7a2(0x336)]['createItemSprite']=function(){const _0x48b9ff=_0x54c7a2;this['_itemSprite']=new Sprite(),this[_0x48b9ff(0x330)](this[_0x48b9ff(0x2d2)]),this['setItemSpriteBitmap'](),this[_0x48b9ff(0x255)](),this['setItemSpritePosition'](),this['setItemSpriteOpacity'](),this['createAnimationIDs'](),this[_0x48b9ff(0x39e)](this[_0x48b9ff(0x230)][_0x48b9ff(0x345)]());},Scene_ItemCrafting[_0x54c7a2(0x336)][_0x54c7a2(0x282)]=function(){const _0x2c13a9=_0x54c7a2,_0x5b7d07=VisuMZ[_0x2c13a9(0x353)][_0x2c13a9(0x1e7)],_0x50e571=this['_item'][_0x2c13a9(0x36d)];this[_0x2c13a9(0x277)]='';if(_0x50e571['match'](_0x5b7d07['craftPicture']))this[_0x2c13a9(0x277)]=String(RegExp['$1']);else _0x50e571[_0x2c13a9(0x35a)](_0x5b7d07[_0x2c13a9(0x334)])&&(this[_0x2c13a9(0x277)]=String(RegExp['$1']));this['_iconSprite']=new Sprite();this[_0x2c13a9(0x277)]?this[_0x2c13a9(0x1eb)][_0x2c13a9(0x32a)]=ImageManager[_0x2c13a9(0x298)](this[_0x2c13a9(0x277)]):(this[_0x2c13a9(0x1eb)][_0x2c13a9(0x32a)]=ImageManager[_0x2c13a9(0x2ef)](_0x2c13a9(0x39c)),this['_iconSprite'][_0x2c13a9(0x32a)][_0x2c13a9(0x205)]=![]);this['_iconSprite'][_0x2c13a9(0x292)]['x']=0.5,this[_0x2c13a9(0x1eb)][_0x2c13a9(0x292)]['y']=0.5;if(!this[_0x2c13a9(0x277)]){const _0x2b903b=VisuMZ['ItemCraftingSys'][_0x2c13a9(0x237)][_0x2c13a9(0x2f9)][_0x2c13a9(0x27d)]||0x8;this['_iconSprite']['scale']['x']=_0x2b903b,this[_0x2c13a9(0x1eb)][_0x2c13a9(0x2e2)]['y']=_0x2b903b;}this['_itemSprite'][_0x2c13a9(0x330)](this['_iconSprite']);},Scene_ItemCrafting['prototype'][_0x54c7a2(0x255)]=function(){const _0x21302d=_0x54c7a2;if(this['_craftPicture'])return;const _0x1b5790=this[_0x21302d(0x210)],_0xd1ce0c=_0x1b5790[_0x21302d(0x365)],_0x37c0c7=ImageManager[_0x21302d(0x354)],_0x503cf9=ImageManager[_0x21302d(0x38e)],_0x448dfb=_0xd1ce0c%0x10*_0x37c0c7,_0xe989c6=Math[_0x21302d(0x229)](_0xd1ce0c/0x10)*_0x503cf9;this['_iconSprite']['setFrame'](_0x448dfb,_0xe989c6,_0x37c0c7,_0x503cf9);},Scene_ItemCrafting[_0x54c7a2(0x336)][_0x54c7a2(0x2df)]=function(){const _0x2bc773=_0x54c7a2;this[_0x2bc773(0x2d2)]['x']=Math[_0x2bc773(0x2f4)](Graphics[_0x2bc773(0x2b9)]/0x2);const _0x19e763=Math[_0x2bc773(0x2f4)](ImageManager[_0x2bc773(0x38e)]*this['_itemSprite'][_0x2bc773(0x2e2)]['y']);this[_0x2bc773(0x2d2)]['y']=Math['round']((Graphics[_0x2bc773(0x24d)]+_0x19e763)/0x2);},Scene_ItemCrafting[_0x54c7a2(0x336)][_0x54c7a2(0x335)]=function(){const _0x36aed8=_0x54c7a2;this[_0x36aed8(0x22b)]=VisuMZ[_0x36aed8(0x353)][_0x36aed8(0x237)][_0x36aed8(0x2f9)][_0x36aed8(0x2f0)]||0x1,this[_0x36aed8(0x210)][_0x36aed8(0x36d)][_0x36aed8(0x35a)](VisuMZ[_0x36aed8(0x353)][_0x36aed8(0x1e7)][_0x36aed8(0x30d)])&&(this['_itemSpriteOpacitySpeed']=Math[_0x36aed8(0x2f2)](Number(RegExp['$1']),0x1)),this['_itemSprite']['opacity']=0x0;},Scene_ItemCrafting[_0x54c7a2(0x336)][_0x54c7a2(0x208)]=function(){const _0x275913=_0x54c7a2;this[_0x275913(0x230)]=[],this[_0x275913(0x210)][_0x275913(0x36d)][_0x275913(0x35a)](VisuMZ[_0x275913(0x353)][_0x275913(0x1e7)]['animationIDs'])?this[_0x275913(0x230)]=RegExp['$1'][_0x275913(0x378)](',')[_0x275913(0x328)](_0x155374=>Number(_0x155374)):this['_animationIDs']=this['_animationIDs']['concat'](VisuMZ['ItemCraftingSys']['Settings'][_0x275913(0x2f9)][_0x275913(0x21a)]);},Scene_ItemCrafting[_0x54c7a2(0x336)][_0x54c7a2(0x39e)]=function(_0x3eba45){const _0x2b8f30=_0x54c7a2,_0x2a9fd4=$dataAnimations[_0x3eba45];if(!_0x2a9fd4)return;const _0x181c6e=this[_0x2b8f30(0x213)](_0x2a9fd4);this[_0x2b8f30(0x222)]=new(_0x181c6e?Sprite_AnimationMV:Sprite_Animation)();const _0x555727=[this[_0x2b8f30(0x2d2)]],_0x23307c=0x0;this[_0x2b8f30(0x222)][_0x2b8f30(0x3a2)](_0x555727,_0x2a9fd4,![],_0x23307c,null),this[_0x2b8f30(0x330)](this[_0x2b8f30(0x222)]);},Scene_ItemCrafting[_0x54c7a2(0x336)]['isMVAnimation']=function(_0x1ee1d9){const _0x41968f=_0x54c7a2;return!!_0x1ee1d9[_0x41968f(0x209)];},Scene_ItemCrafting['prototype'][_0x54c7a2(0x32b)]=function(){const _0x4e91c0=_0x54c7a2;if(!this['_animationPlaying'])return;this[_0x4e91c0(0x2bd)](),this[_0x4e91c0(0x324)](),this[_0x4e91c0(0x357)]()&&this[_0x4e91c0(0x389)]();},Scene_ItemCrafting[_0x54c7a2(0x336)][_0x54c7a2(0x2bd)]=function(){const _0x459d3a=_0x54c7a2;this[_0x459d3a(0x2d2)][_0x459d3a(0x1ec)]+=this[_0x459d3a(0x22b)];},Scene_ItemCrafting[_0x54c7a2(0x336)][_0x54c7a2(0x324)]=function(){const _0x25582e=_0x54c7a2;if(!this[_0x25582e(0x222)])return;if(this['_animationSprite'][_0x25582e(0x35e)]())return;this[_0x25582e(0x26f)](),this[_0x25582e(0x39e)](this[_0x25582e(0x230)][_0x25582e(0x345)]());},Scene_ItemCrafting[_0x54c7a2(0x336)][_0x54c7a2(0x26f)]=function(){const _0x3ed2f5=_0x54c7a2;if(!this[_0x3ed2f5(0x222)])return;this['removeChild'](this[_0x3ed2f5(0x222)]),this[_0x3ed2f5(0x222)][_0x3ed2f5(0x242)](),this[_0x3ed2f5(0x222)]=undefined;},Scene_ItemCrafting[_0x54c7a2(0x336)][_0x54c7a2(0x296)]=function(){const _0x489d67=_0x54c7a2;if(!this[_0x489d67(0x2d2)])return;this[_0x489d67(0x315)](this[_0x489d67(0x2d2)]),this[_0x489d67(0x2d2)][_0x489d67(0x242)](),this['_itemSprite']=undefined;},Scene_ItemCrafting[_0x54c7a2(0x336)][_0x54c7a2(0x357)]=function(){const _0x10912d=_0x54c7a2;if(TouchInput['isReleased']())return!![];if(Input[_0x10912d(0x22e)]('ok'))return!![];if(Input[_0x10912d(0x22e)](_0x10912d(0x2c7)))return!![];if(this[_0x10912d(0x2d2)][_0x10912d(0x1ec)]<0xff)return![];if(this[_0x10912d(0x222)])return![];return this[_0x10912d(0x202)]--<=0x0;},Scene_ItemCrafting[_0x54c7a2(0x336)]['processFinishAnimation']=function(){const _0x294d17=_0x54c7a2;this[_0x294d17(0x26f)](),this[_0x294d17(0x296)](),this[_0x294d17(0x2c0)](),TouchInput[_0x294d17(0x2a3)](),Input[_0x294d17(0x2a3)]();},Scene_ItemCrafting[_0x54c7a2(0x336)][_0x54c7a2(0x1ef)]=function(){const _0x223266=_0x54c7a2;Scene_Item['prototype'][_0x223266(0x1ef)][_0x223266(0x2fb)](this),$gameTemp[_0x223266(0x1f3)]();},Scene_ItemCrafting[_0x54c7a2(0x336)][_0x54c7a2(0x2af)]=function(){const _0x183100=_0x54c7a2;if(!SceneManager[_0x183100(0x2f7)]())return;const _0x54c650=VisuMZ[_0x183100(0x353)][_0x183100(0x237)][_0x183100(0x1e6)];_0x54c650[_0x183100(0x375)]&&$gameSwitches['setValue'](_0x54c650[_0x183100(0x375)],![]);},Scene_ItemCrafting['prototype'][_0x54c7a2(0x20c)]=function(){const _0x36a924=_0x54c7a2;if(!SceneManager[_0x36a924(0x2f7)]())return;const _0x1ee841=VisuMZ[_0x36a924(0x353)]['Settings']['General'];_0x1ee841[_0x36a924(0x375)]&&$gameSwitches[_0x36a924(0x379)](_0x1ee841[_0x36a924(0x375)],!![]);},VisuMZ[_0x54c7a2(0x353)][_0x54c7a2(0x1e3)]=Window_MenuCommand['prototype'][_0x54c7a2(0x206)],Window_MenuCommand[_0x54c7a2(0x336)][_0x54c7a2(0x206)]=function(){const _0x4effc0=_0x54c7a2;VisuMZ[_0x4effc0(0x353)][_0x4effc0(0x1e3)]['call'](this),this[_0x4effc0(0x307)]();},Window_MenuCommand['prototype'][_0x54c7a2(0x307)]=function(){const _0x4a14bc=_0x54c7a2;if(!this[_0x4a14bc(0x247)]())return;if(!this['isItemCraftingCommandVisible']())return;const _0x328e10=TextManager[_0x4a14bc(0x38f)],_0x41d558=this[_0x4a14bc(0x297)]();this[_0x4a14bc(0x2f8)](_0x328e10,_0x4a14bc(0x25d),_0x41d558);},Window_MenuCommand[_0x54c7a2(0x336)][_0x54c7a2(0x247)]=function(){return Imported['VisuMZ_1_MainMenuCore']?![]:!![];},Window_MenuCommand[_0x54c7a2(0x336)][_0x54c7a2(0x238)]=function(){const _0x2e0175=_0x54c7a2;return $gameSystem[_0x2e0175(0x37d)]();},Window_MenuCommand[_0x54c7a2(0x336)][_0x54c7a2(0x297)]=function(){const _0x357273=_0x54c7a2;if(DataManager[_0x357273(0x23d)]()[_0x357273(0x2e6)]<=0x0)return![];return $gameSystem[_0x357273(0x241)]();},VisuMZ[_0x54c7a2(0x353)][_0x54c7a2(0x295)]=Window_ItemCategory[_0x54c7a2(0x336)][_0x54c7a2(0x1e8)],Window_ItemCategory[_0x54c7a2(0x336)][_0x54c7a2(0x1e8)]=function(){const _0xe9d118=_0x54c7a2;VisuMZ['ItemCraftingSys'][_0xe9d118(0x295)]['call'](this),SceneManager['isSceneItemCrafting']()&&this[_0xe9d118(0x327)]();},Window_ItemCategory[_0x54c7a2(0x336)]['createUncategorizedItemCategory']=function(){const _0x3a0e41=_0x54c7a2,_0x2cbfbd=Window_ItemCategory[_0x3a0e41(0x22a)],_0x4ae898=DataManager[_0x3a0e41(0x23d)]()[_0x3a0e41(0x359)](),_0x277b6a=[];for(const _0x5ab530 of _0x2cbfbd){this[_0x3a0e41(0x33d)]=_0x5ab530[_0x3a0e41(0x35b)];for(const _0x315a09 of _0x4ae898){Window_ItemList[_0x3a0e41(0x336)]['includes'][_0x3a0e41(0x2fb)](this,_0x315a09)&&_0x277b6a['push'](_0x315a09);}}this[_0x3a0e41(0x33d)]=null;for(const _0x3d268b of _0x277b6a){_0x4ae898['remove'](_0x3d268b);}_0x4ae898[_0x3a0e41(0x2e6)]>0x0&&this[_0x3a0e41(0x217)](),this['_nonCategoryItemCraftingItems']=_0x4ae898;},Window_ItemCategory[_0x54c7a2(0x336)]['addUncategorizedItemCategory']=function(){const _0x513639=_0x54c7a2,_0x3ba3a1=VisuMZ[_0x513639(0x353)][_0x513639(0x237)]['General'];let _0x595842=_0x3ba3a1[_0x513639(0x265)]||_0x513639(0x265),_0x4e9157=_0x3ba3a1['NoCategoryIcon']||0xa0;_0x595842=_0x513639(0x36f)['format'](_0x4e9157,_0x595842),this[_0x513639(0x2f8)](_0x595842,'category',!![],'ItemCraftingNoCategory');},VisuMZ[_0x54c7a2(0x353)][_0x54c7a2(0x21e)]=Window_ItemCategory[_0x54c7a2(0x336)][_0x54c7a2(0x321)],Window_ItemCategory[_0x54c7a2(0x336)][_0x54c7a2(0x321)]=function(_0x2c3528){const _0x297eb8=_0x54c7a2;if(SceneManager[_0x297eb8(0x2f7)]()&&!this['isItemCraftingCategoryValid'](_0x2c3528))return;VisuMZ[_0x297eb8(0x353)]['Window_ItemCategory_addItemCategory']['call'](this,_0x2c3528);},Window_ItemCategory[_0x54c7a2(0x336)]['isItemCraftingCategoryValid']=function(_0xcb5dc0){const _0x28029b=_0x54c7a2,_0x3e5628=DataManager[_0x28029b(0x23d)](),_0x6a1be5=_0xcb5dc0['Type'],_0x2db638=_0xcb5dc0['Icon'];this[_0x28029b(0x33d)]=_0x6a1be5;for(const _0x2cf0ac of _0x3e5628){if(!_0x2cf0ac)continue;if(Window_ItemList[_0x28029b(0x336)][_0x28029b(0x386)][_0x28029b(0x2fb)](this,_0x2cf0ac))return this['_category']=null,!![];}return this['_category']=null,![];},VisuMZ[_0x54c7a2(0x353)][_0x54c7a2(0x316)]=Window_ItemCategory[_0x54c7a2(0x336)]['needsSelection'],Window_ItemCategory['prototype'][_0x54c7a2(0x380)]=function(){const _0x58fc08=_0x54c7a2;if(SceneManager['isSceneItemCrafting']())return!![];return VisuMZ['ItemCraftingSys'][_0x58fc08(0x316)][_0x58fc08(0x2fb)](this);};function Window_ItemCraftingList(){const _0x325b9e=_0x54c7a2;this[_0x325b9e(0x234)](...arguments);}Window_ItemCraftingList[_0x54c7a2(0x336)]=Object[_0x54c7a2(0x33a)](Window_ItemList[_0x54c7a2(0x336)]),Window_ItemCraftingList['prototype']['constructor']=Window_ItemCraftingList,Window_ItemCraftingList[_0x54c7a2(0x33b)]=VisuMZ[_0x54c7a2(0x353)][_0x54c7a2(0x237)][_0x54c7a2(0x2ec)]['ReqQuantityFontSize'],Window_ItemCraftingList['maskItalics']=VisuMZ[_0x54c7a2(0x353)][_0x54c7a2(0x237)][_0x54c7a2(0x367)]['MaskItalics'],Window_ItemCraftingList['prototype'][_0x54c7a2(0x234)]=function(_0x2f77b){const _0x4d9f71=_0x54c7a2;Window_ItemList['prototype'][_0x4d9f71(0x234)][_0x4d9f71(0x2fb)](this,_0x2f77b),this['createTooltipWindow']();},Window_ItemCraftingList[_0x54c7a2(0x336)][_0x54c7a2(0x2ff)]=function(){return 0x1;},Window_ItemCraftingList[_0x54c7a2(0x336)][_0x54c7a2(0x2b4)]=function(){const _0x5bf7b8=_0x54c7a2;return Window_Scrollable[_0x5bf7b8(0x336)][_0x5bf7b8(0x2b4)][_0x5bf7b8(0x2fb)](this)*0x3+0x8;},Window_ItemCraftingList[_0x54c7a2(0x336)][_0x54c7a2(0x281)]=function(_0x2b563b){return!![];},Window_ItemCraftingList[_0x54c7a2(0x336)][_0x54c7a2(0x254)]=function(){const _0x2b5215=_0x54c7a2;this[_0x2b5215(0x29d)]=DataManager[_0x2b5215(0x23d)]()['filter'](_0x448093=>this[_0x2b5215(0x386)](_0x448093));const _0x1a2e5f=this[_0x2b5215(0x29d)][_0x2b5215(0x328)](_0x1f8cea=>DataManager['getCraftingIngredients'](_0x1f8cea)[_0x2b5215(0x2e6)]);this[_0x2b5215(0x22d)]=Math[_0x2b5215(0x2f2)](..._0x1a2e5f)+0x1;},Window_ItemCraftingList['prototype'][_0x54c7a2(0x386)]=function(_0x4b691c){const _0x3fa898=_0x54c7a2;if(this['_category']===_0x3fa898(0x30e)){const _0x228bf5=SceneManager[_0x3fa898(0x245)];if(_0x228bf5&&_0x228bf5[_0x3fa898(0x1dd)]&&_0x228bf5[_0x3fa898(0x1dd)][_0x3fa898(0x30f)])return _0x228bf5['_categoryWindow'][_0x3fa898(0x30f)]['includes'](_0x4b691c);}return Window_ItemList['prototype']['includes'][_0x3fa898(0x2fb)](this,_0x4b691c);},Window_ItemCraftingList[_0x54c7a2(0x336)][_0x54c7a2(0x207)]=function(){},Window_ItemCraftingList[_0x54c7a2(0x336)]['drawItem']=function(_0x1783b2){const _0x280af3=_0x54c7a2,_0xfe71ae=this[_0x280af3(0x38d)](_0x1783b2);if(!_0xfe71ae)return;const _0x7ae51b=this[_0x280af3(0x259)](_0x1783b2);this[_0x280af3(0x252)](),this['drawFadedItemBackground'](_0x7ae51b,0x2),this[_0x280af3(0x224)](_0x1783b2,_0xfe71ae,_0x7ae51b),this[_0x280af3(0x36e)](_0xfe71ae,_0x7ae51b),this[_0x280af3(0x291)](_0xfe71ae,_0x7ae51b),this['drawCraftingIngredients'](_0xfe71ae,_0x7ae51b);},Window_ItemCraftingList[_0x54c7a2(0x336)][_0x54c7a2(0x364)]=function(_0x2f77bb,_0x30475c){const _0x341549=_0x54c7a2;_0x30475c=_0x30475c||0x1,this[_0x341549(0x362)](![]);const _0x168017=ColorManager[_0x341549(0x23c)](),_0x3b71da=ColorManager[_0x341549(0x373)](),_0x234343=_0x2f77bb[_0x341549(0x2b9)]/0x2,_0x1c8f0a=this['lineHeight']();while(_0x30475c--){this[_0x341549(0x1ee)][_0x341549(0x288)](_0x2f77bb['x'],_0x2f77bb['y'],_0x234343,_0x1c8f0a,_0x3b71da,_0x168017),this['contents']['gradientFillRect'](_0x2f77bb['x']+_0x234343,_0x2f77bb['y'],_0x234343,_0x1c8f0a,_0x168017,_0x3b71da);}this[_0x341549(0x362)](!![]);},Window_Base[_0x54c7a2(0x336)][_0x54c7a2(0x291)]=function(_0x23f6c3,_0x3fb9aa){const _0x5321b1=_0x54c7a2;let _0x128e87=_0x23f6c3['name'],_0x30e5f1=_0x3fb9aa[_0x5321b1(0x24d)]+this[_0x5321b1(0x25a)]()*0x2,_0x2a335b=_0x3fb9aa['y'],_0x1251a1=_0x3fb9aa[_0x5321b1(0x2b9)]-_0x30e5f1-this[_0x5321b1(0x25a)]()-ImageManager[_0x5321b1(0x354)];DataManager[_0x5321b1(0x274)](_0x23f6c3)&&(_0x128e87=VisuMZ[_0x5321b1(0x353)]['maskItemName'](_0x23f6c3),this[_0x5321b1(0x1ee)][_0x5321b1(0x1f2)]=Window_ItemCraftingList[_0x5321b1(0x260)]),this['drawText'](_0x128e87,_0x30e5f1,_0x2a335b,_0x1251a1,'left'),this[_0x5321b1(0x1ee)][_0x5321b1(0x1f2)]=![];},VisuMZ['ItemCraftingSys'][_0x54c7a2(0x302)]=function(_0x13830d){const _0x5e1313=_0x54c7a2;if(_0x13830d['note'][_0x5e1313(0x35a)](VisuMZ[_0x5e1313(0x353)][_0x5e1313(0x1e7)]['MaskText']))return String(RegExp['$1']);else{const _0x18856a=TextManager['itemCraftingMask'];return Array(_0x13830d[_0x5e1313(0x28d)]['length']+0x1)[_0x5e1313(0x32f)](_0x18856a);}},Window_ItemCraftingList[_0x54c7a2(0x336)]['drawBigItemImage']=function(_0x296e22,_0x459a4d,_0x75aca8){const _0x329005=_0x54c7a2,_0x2beb03=VisuMZ[_0x329005(0x353)][_0x329005(0x1e7)],_0x2d0c93=_0x459a4d['note'];let _0x518ebc='';if(_0x2d0c93[_0x329005(0x35a)](_0x2beb03[_0x329005(0x337)]))_0x518ebc=String(RegExp['$1']);else _0x2d0c93[_0x329005(0x35a)](_0x2beb03[_0x329005(0x334)])&&(_0x518ebc=String(RegExp['$1']));if(_0x518ebc){const _0x529194=ImageManager[_0x329005(0x298)](_0x518ebc);_0x529194[_0x329005(0x3a3)](this['drawPicture'][_0x329005(0x1e2)](this,_0x296e22,_0x529194));}else this['drawBigItemIcon'](_0x459a4d,_0x75aca8);},Window_ItemCraftingList['prototype'][_0x54c7a2(0x233)]=function(_0x1b66f1,_0x41c8bd){const _0x54bbb3=_0x54c7a2,_0x365dfd=this['itemRectWithPadding'](_0x1b66f1);let _0x53cc53=_0x365dfd['x']+this[_0x54bbb3(0x25a)](),_0x391c11=_0x365dfd['y']+0x4,_0x32ed59=_0x365dfd[_0x54bbb3(0x2b9)]-this[_0x54bbb3(0x25a)]()*0x2,_0x57e019=_0x365dfd['height']-0x8,_0x5cee06=Math[_0x54bbb3(0x280)](_0x32ed59,_0x57e019);const _0x216097=_0x5cee06/_0x41c8bd[_0x54bbb3(0x2b9)],_0xa35550=_0x5cee06/_0x41c8bd[_0x54bbb3(0x24d)],_0x4e02eb=Math['min'](_0x216097,_0xa35550,0x1);let _0x8b7ab5=Math['round'](_0x41c8bd[_0x54bbb3(0x2b9)]*_0x4e02eb),_0x10559c=Math[_0x54bbb3(0x2f4)](_0x41c8bd[_0x54bbb3(0x24d)]*_0x4e02eb);_0x53cc53+=Math[_0x54bbb3(0x2f4)]((_0x5cee06-_0x8b7ab5)/0x2),_0x391c11+=Math[_0x54bbb3(0x2f4)]((_0x5cee06-_0x10559c)/0x2);const _0x329e00=_0x41c8bd[_0x54bbb3(0x2b9)],_0x3c1f94=_0x41c8bd['height'];this[_0x54bbb3(0x1ee)]['_context'][_0x54bbb3(0x279)]=!![],this[_0x54bbb3(0x1ee)][_0x54bbb3(0x25b)](_0x41c8bd,0x0,0x0,_0x329e00,_0x3c1f94,_0x53cc53,_0x391c11,_0x8b7ab5,_0x10559c),this[_0x54bbb3(0x1ee)]['_context'][_0x54bbb3(0x279)]=!![];},Window_ItemCraftingList[_0x54c7a2(0x336)]['drawBigItemIcon']=function(_0x4e8fd4,_0x5078b8){const _0x4a942d=_0x54c7a2,_0x5e49fc=_0x4e8fd4[_0x4a942d(0x365)];let _0x1d43a3=_0x5078b8['x']+this[_0x4a942d(0x25a)](),_0x1519db=_0x5078b8['y']+0x4,_0x3c833a=_0x5078b8['width']-this[_0x4a942d(0x25a)]()*0x2,_0x466d9c=_0x5078b8[_0x4a942d(0x24d)]-0x8,_0x2b75ea=Math[_0x4a942d(0x280)](_0x3c833a,_0x466d9c);_0x2b75ea=Math[_0x4a942d(0x229)](_0x2b75ea/ImageManager[_0x4a942d(0x354)])*ImageManager[_0x4a942d(0x354)],_0x1519db+=(_0x466d9c-_0x2b75ea)/0x2;const _0xe9cc54=ImageManager[_0x4a942d(0x2ef)]('IconSet'),_0x2d98bb=ImageManager[_0x4a942d(0x354)],_0x48bcd7=ImageManager['iconHeight'],_0x5c33bb=_0x5e49fc%0x10*_0x2d98bb,_0x1f8514=Math[_0x4a942d(0x229)](_0x5e49fc/0x10)*_0x48bcd7;this[_0x4a942d(0x1ee)][_0x4a942d(0x1f4)][_0x4a942d(0x279)]=![],this[_0x4a942d(0x1ee)][_0x4a942d(0x25b)](_0xe9cc54,_0x5c33bb,_0x1f8514,_0x2d98bb,_0x48bcd7,_0x1d43a3,_0x1519db,_0x2b75ea,_0x2b75ea),this['contents'][_0x4a942d(0x1f4)][_0x4a942d(0x279)]=!![];},Window_ItemCraftingList[_0x54c7a2(0x336)][_0x54c7a2(0x36e)]=function(_0x25b704,_0xd9669f){const _0x37c0d8=_0x54c7a2;if(!$gameSystem[_0x37c0d8(0x36a)](_0x25b704))return;const _0x174467=ImageManager['itemCraftedIcon'];let _0x168610=_0xd9669f['x']+_0xd9669f[_0x37c0d8(0x2b9)]-ImageManager['iconWidth'],_0x5619a3=_0xd9669f['y']+0x2;this['drawIcon'](_0x174467,_0x168610,_0x5619a3);},Window_ItemCraftingList['prototype'][_0x54c7a2(0x399)]=function(_0x291a30,_0x4dad28){const _0x843d1a=_0x54c7a2,_0x4d57d5=DataManager['getCraftingIngredients'](_0x291a30);let _0x146982=_0x4dad28[_0x843d1a(0x24d)]+this['itemPadding']()*0x2,_0x779d8e=_0x4dad28['y']+Math[_0x843d1a(0x2f4)](this[_0x843d1a(0x287)]()*1.2),_0x5138ec=_0x4dad28[_0x843d1a(0x2b9)]-_0x146982-this[_0x843d1a(0x25a)](),_0x5d994f=Math[_0x843d1a(0x229)](_0x5138ec/this[_0x843d1a(0x22d)]),_0x37eec0=!![];for(const _0x4a0b35 of _0x4d57d5){if(!_0x37eec0){let _0x5547ce=TextManager[_0x843d1a(0x34c)],_0x1c7897=_0x4dad28['y']+(_0x4dad28['height']-this[_0x843d1a(0x287)]()*1.5);this[_0x843d1a(0x273)](_0x5547ce,_0x146982,_0x1c7897,_0x5d994f,'center');}_0x146982+=_0x5d994f;const _0x26d7b1=_0x4a0b35[0x0],_0x2c59de=_0x4a0b35[0x1],_0x51cf40=_0x26d7b1===_0x843d1a(0x31f)?$gameParty['gold']():$gameParty[_0x843d1a(0x397)](_0x26d7b1);if(_0x26d7b1===_0x843d1a(0x31f))this[_0x843d1a(0x2c9)](_0x2c59de,_0x51cf40,_0x146982,_0x779d8e,_0x5d994f);else typeof _0x26d7b1===_0x843d1a(0x3ac)&&_0x26d7b1[_0x843d1a(0x35a)](/CATEGORY/i)?this['drawIngredientCategory'](_0x26d7b1,_0x2c59de,_0x146982,_0x779d8e,_0x5d994f):this[_0x843d1a(0x25e)](_0x26d7b1,_0x2c59de,_0x51cf40,_0x146982,_0x779d8e,_0x5d994f);this['resetFontSettings'](),_0x37eec0=![];}},Window_ItemCraftingList['prototype'][_0x54c7a2(0x2c9)]=function(_0x2654a4,_0x35df6f,_0x409099,_0x18381d,_0x3d5335){const _0x42a912=_0x54c7a2;if(Imported[_0x42a912(0x31c)]){let _0x21d3cb=_0x409099-Math[_0x42a912(0x2f4)](ImageManager['iconWidth']/0x2),_0x457c99=_0x18381d+Math[_0x42a912(0x2f4)]((this['lineHeight']()-ImageManager[_0x42a912(0x38e)])/0x2);const _0x37ca90=VisuMZ[_0x42a912(0x2ea)][_0x42a912(0x237)][_0x42a912(0x256)][_0x42a912(0x20b)];this[_0x42a912(0x39b)](_0x37ca90,_0x21d3cb,_0x457c99);}else{let _0x3c220c=_0x409099-Math[_0x42a912(0x2f4)](_0x3d5335/0x2),_0x1d0ab1=_0x18381d+Math[_0x42a912(0x2f4)]((this['lineHeight']()-ImageManager[_0x42a912(0x38e)])/0x2);this['changeTextColor'](ColorManager[_0x42a912(0x3a5)]()),this[_0x42a912(0x329)](),this['drawText'](TextManager[_0x42a912(0x2e7)],_0x3c220c,_0x1d0ab1,_0x3d5335,_0x42a912(0x392)),this['resetFontSettings']();}let _0x2c28e4=_0x409099-Math[_0x42a912(0x2f4)](_0x3d5335/0x2),_0x14523b=_0x18381d+this[_0x42a912(0x287)]();const _0x2e5ce5=VisuMZ[_0x42a912(0x34b)]['Settings'][_0x42a912(0x366)][_0x42a912(0x21c)];let _0x346727=_0x2e5ce5[_0x42a912(0x27b)](_0x2654a4);_0x2654a4>_0x35df6f&&this[_0x42a912(0x2de)](ColorManager[_0x42a912(0x323)]()),this[_0x42a912(0x1ee)][_0x42a912(0x235)]=Window_ItemCraftingList['quantityFontSize'],this[_0x42a912(0x273)](_0x346727,_0x2c28e4,_0x14523b,_0x3d5335,'center');},Window_ItemCraftingList[_0x54c7a2(0x336)]['drawIngredientCategory']=function(_0xd8683e,_0x428488,_0x5e5335,_0x3603e7,_0x540f18){const _0x11a7a2=_0x54c7a2,_0x267845=VisuMZ['ItemCraftingSys']['Settings'][_0x11a7a2(0x1e6)];let _0x477a79=_0x5e5335-Math[_0x11a7a2(0x2f4)](ImageManager[_0x11a7a2(0x354)]/0x2),_0x22d8f8=_0x3603e7+Math[_0x11a7a2(0x2f4)]((this[_0x11a7a2(0x287)]()-ImageManager[_0x11a7a2(0x38e)])/0x2);this[_0x11a7a2(0x39b)](_0x267845[_0x11a7a2(0x2b7)],_0x477a79,_0x22d8f8),_0xd8683e[_0x11a7a2(0x35a)](/CATEGORY: (.*)/i);const _0x3dec0c=String(RegExp['$1'])[_0x11a7a2(0x352)]();let _0x5b5bbb=_0x5e5335-Math[_0x11a7a2(0x2f4)](_0x540f18/0x2),_0x292cc1=_0x3603e7;this['contents'][_0x11a7a2(0x235)]=Window_ItemCraftingList[_0x11a7a2(0x33b)],this[_0x11a7a2(0x273)](_0x3dec0c,_0x5b5bbb,_0x292cc1,_0x540f18,_0x11a7a2(0x392));let _0xd9441f=_0x5e5335-Math[_0x11a7a2(0x2f4)](_0x540f18/0x2),_0x38a064=_0x3603e7+this[_0x11a7a2(0x287)]();const _0x1f9c78=VisuMZ['ItemsEquipsCore'][_0x11a7a2(0x237)][_0x11a7a2(0x366)][_0x11a7a2(0x21c)];let _0x151796=_0x1f9c78[_0x11a7a2(0x27b)](_0x428488);this[_0x11a7a2(0x1ee)][_0x11a7a2(0x235)]=Window_ItemCraftingList[_0x11a7a2(0x33b)],this[_0x11a7a2(0x273)](_0x151796,_0xd9441f,_0x38a064,_0x540f18,_0x11a7a2(0x392));},Window_ItemCraftingList[_0x54c7a2(0x336)][_0x54c7a2(0x25e)]=function(_0xc5d114,_0x5cc1ef,_0x13d760,_0x493532,_0x594515,_0x15f7d1){const _0x2a3557=_0x54c7a2;let _0x4001ab=_0x493532-Math[_0x2a3557(0x2f4)](ImageManager[_0x2a3557(0x354)]/0x2),_0x505430=_0x594515+Math[_0x2a3557(0x2f4)]((this[_0x2a3557(0x287)]()-ImageManager[_0x2a3557(0x38e)])/0x2);this[_0x2a3557(0x39b)](_0xc5d114['iconIndex'],_0x4001ab,_0x505430);let _0x494fac=_0x493532-Math[_0x2a3557(0x2f4)](_0x15f7d1/0x2),_0x17f469=_0x594515+this['lineHeight']();const _0x54eb94=VisuMZ[_0x2a3557(0x34b)][_0x2a3557(0x237)][_0x2a3557(0x366)]['ItemQuantityFmt'];let _0x59e56b=_0x54eb94[_0x2a3557(0x27b)](_0x2a3557(0x1e0)[_0x2a3557(0x27b)](_0x13d760,_0x5cc1ef));_0x5cc1ef>_0x13d760&&this[_0x2a3557(0x2de)](ColorManager['powerDownColor']()),this[_0x2a3557(0x1ee)][_0x2a3557(0x235)]=Window_ItemCraftingList[_0x2a3557(0x33b)],this[_0x2a3557(0x273)](_0x59e56b,_0x494fac,_0x17f469,_0x15f7d1,_0x2a3557(0x392));},Window_ItemCraftingList['prototype'][_0x54c7a2(0x203)]=function(){const _0x147075=_0x54c7a2;if(!VisuMZ['ItemCraftingSys'][_0x147075(0x237)]['Window'][_0x147075(0x299)])return;const _0x32d1a8=new Rectangle(0x0,0x0,Graphics[_0x147075(0x283)],Window_Base[_0x147075(0x336)][_0x147075(0x33f)](0x1));this['_tooltipWindow']=new Window_ItemCraftingTooltip(_0x32d1a8),this[_0x147075(0x330)](this['_tooltipWindow']);},Window_ItemCraftingList['prototype'][_0x54c7a2(0x1f5)]=function(){const _0x20c490=_0x54c7a2;Window_ItemList[_0x20c490(0x336)][_0x20c490(0x1f5)][_0x20c490(0x2fb)](this),this[_0x20c490(0x1fb)]();},Window_ItemCraftingList['prototype']['updateTooltipWindow']=function(){const _0x428fab=_0x54c7a2;if(!this['_tooltipWindow'])return;this[_0x428fab(0x2cb)]()?this[_0x428fab(0x244)]():this[_0x428fab(0x37e)]['setText']('');const _0x16eb75=new Point(TouchInput['x'],TouchInput['y']),_0x104384=this[_0x428fab(0x2b3)][_0x428fab(0x1fc)](_0x16eb75);this[_0x428fab(0x37e)]['x']=_0x104384['x']-this[_0x428fab(0x37e)][_0x428fab(0x2b9)]/0x2,this['_tooltipWindow']['y']=_0x104384['y']-this['_tooltipWindow'][_0x428fab(0x24d)];},Window_ItemCraftingList[_0x54c7a2(0x336)][_0x54c7a2(0x2cb)]=function(){const _0x2b8eb6=_0x54c7a2;if(!this['active'])return![];if(!this[_0x2b8eb6(0x32d)]())return![];if(!this[_0x2b8eb6(0x2b2)]())return![];if(this['hitIndex']()!==this['index']())return![];return!![];},Window_ItemCraftingList['prototype'][_0x54c7a2(0x244)]=function(){const _0x158a99=_0x54c7a2,_0x4603ea=this['itemRectWithPadding'](this[_0x158a99(0x258)]()),_0x221259=DataManager[_0x158a99(0x2e1)](this['item']()),_0x26eb74=new Point(TouchInput['x'],TouchInput['y']),_0x3aaf41=this['worldTransform']['applyInverse'](_0x26eb74);let _0x531067=_0x4603ea['height']+this['itemPadding']()*0x2,_0x3a82fa=_0x4603ea['y']+this[_0x158a99(0x287)](),_0x221c41=_0x4603ea[_0x158a99(0x2b9)]-_0x531067-this[_0x158a99(0x25a)](),_0xdc3a51=Math[_0x158a99(0x229)](_0x221c41/this[_0x158a99(0x22d)]);for(const _0x314320 of _0x221259){_0x531067+=_0xdc3a51;const _0xc37ccb=new Rectangle(_0x531067-ImageManager[_0x158a99(0x354)],0x0,ImageManager[_0x158a99(0x354)]*0x2,Graphics[_0x158a99(0x3a7)]);if(_0xc37ccb[_0x158a99(0x369)](_0x3aaf41['x'],_0x3aaf41['y'])){let _0x3b4737=_0x314320[0x0],_0x1291ec='';if(_0x3b4737===_0x158a99(0x31f))_0x1291ec=TextManager[_0x158a99(0x2e7)];else typeof _0x3b4737===_0x158a99(0x3ac)&&_0x3b4737[_0x158a99(0x35a)](/CATEGORY/i)?(_0x3b4737['match'](/CATEGORY: (.*)/i),_0x1291ec=String(RegExp['$1'])[_0x158a99(0x352)]()):_0x1291ec=_0x3b4737['name'];this[_0x158a99(0x37e)][_0x158a99(0x39d)](_0x1291ec[_0x158a99(0x352)]());return;}}this[_0x158a99(0x37e)][_0x158a99(0x39d)]('');},Window_ItemCraftingList[_0x54c7a2(0x336)]['updateHelp']=function(){const _0x1ce84b=_0x54c7a2,_0x445623=this[_0x1ce84b(0x32d)]()&&DataManager[_0x1ce84b(0x274)](this['item']())?null:this[_0x1ce84b(0x32d)]();this[_0x1ce84b(0x322)](_0x445623),this[_0x1ce84b(0x2d1)]&&this[_0x1ce84b(0x2d1)][_0x1ce84b(0x267)]===Window_ShopStatus&&this['_statusWindow']['setItem'](_0x445623);};function Window_ItemCraftingTooltip(){const _0x5ee766=_0x54c7a2;this[_0x5ee766(0x234)](...arguments);}Window_ItemCraftingTooltip[_0x54c7a2(0x336)]=Object[_0x54c7a2(0x33a)](Window_Base[_0x54c7a2(0x336)]),Window_ItemCraftingTooltip[_0x54c7a2(0x336)][_0x54c7a2(0x267)]=Window_ItemCraftingTooltip,Window_ItemCraftingTooltip[_0x54c7a2(0x2ad)]=VisuMZ[_0x54c7a2(0x353)][_0x54c7a2(0x237)][_0x54c7a2(0x2ec)][_0x54c7a2(0x28d)],Window_ItemCraftingTooltip[_0x54c7a2(0x336)][_0x54c7a2(0x234)]=function(_0xc79a0c){const _0x26ba01=_0x54c7a2;Window_Base['prototype'][_0x26ba01(0x234)][_0x26ba01(0x2fb)](this,_0xc79a0c),this[_0x26ba01(0x2d8)](this[_0x26ba01(0x1fd)]()?0x0:0x2),this['setText']('');},Window_ItemCraftingTooltip[_0x54c7a2(0x336)][_0x54c7a2(0x1fd)]=function(){const _0x24dc40=_0x54c7a2;return Window_ItemCraftingTooltip[_0x24dc40(0x2ad)]!=='';},Window_ItemCraftingTooltip[_0x54c7a2(0x336)][_0x54c7a2(0x333)]=function(){const _0x3db96e=_0x54c7a2;Window_ItemCraftingTooltip[_0x3db96e(0x2ad)]!==''?this[_0x3db96e(0x2aa)]=ImageManager[_0x3db96e(0x2ef)](Window_ItemCraftingTooltip[_0x3db96e(0x2ad)]):Window_Base[_0x3db96e(0x336)][_0x3db96e(0x333)][_0x3db96e(0x2fb)](this);},Window_ItemCraftingTooltip['prototype'][_0x54c7a2(0x39d)]=function(_0x28c9df){const _0x1688dd=_0x54c7a2;this['_text']!==_0x28c9df&&(this['_text']=_0x28c9df,this[_0x1688dd(0x34a)]());},Window_ItemCraftingTooltip[_0x54c7a2(0x336)][_0x54c7a2(0x2a3)]=function(){const _0x4c9c9e=_0x54c7a2;this[_0x4c9c9e(0x39d)]('');},Window_ItemCraftingTooltip['prototype']['setItem']=function(_0xa985e4){const _0x53b8bb=_0x54c7a2;this[_0x53b8bb(0x39d)](_0xa985e4?_0xa985e4[_0x53b8bb(0x28d)]:'');},Window_ItemCraftingTooltip[_0x54c7a2(0x336)][_0x54c7a2(0x34a)]=function(){const _0x2ac765=_0x54c7a2,_0x3cae90=this['baseTextRect']();this['drawTooltipBackground'](),this[_0x2ac765(0x273)](this[_0x2ac765(0x2cc)],0x0,0x0,this[_0x2ac765(0x25c)],'center');},Window_ItemCraftingTooltip[_0x54c7a2(0x336)]['drawTooltipBackground']=function(){const _0x294823=_0x54c7a2;if(this[_0x294823(0x2cc)]==='')this[_0x294823(0x1ee)][_0x294823(0x2a3)](),this[_0x294823(0x2b9)]=0x0;else{let _0x3e1d9d=this[_0x294823(0x384)](this[_0x294823(0x2cc)])+this['itemPadding']()*0x4;this[_0x294823(0x2b9)]=_0x3e1d9d+$gameSystem['windowPadding']()*0x2,this[_0x294823(0x358)]();if(this['hasCustomWindowSkin']())return;const _0x17f7f9=ColorManager[_0x294823(0x23c)]();this[_0x294823(0x1ee)][_0x294823(0x27c)](0x0,0x0,this[_0x294823(0x25c)],this[_0x294823(0x310)],_0x17f7f9);}};function Window_ItemCraftingNumber(){this['initialize'](...arguments);}Window_ItemCraftingNumber['prototype']=Object[_0x54c7a2(0x33a)](Window_ShopNumber[_0x54c7a2(0x336)]),Window_ItemCraftingNumber[_0x54c7a2(0x336)][_0x54c7a2(0x267)]=Window_ItemCraftingNumber,Window_ItemCraftingNumber[_0x54c7a2(0x336)][_0x54c7a2(0x234)]=function(_0x298eff){const _0x151e11=_0x54c7a2;Window_ShopNumber[_0x151e11(0x336)][_0x151e11(0x234)]['call'](this,_0x298eff);},Window_ItemCraftingNumber['prototype'][_0x54c7a2(0x3a2)]=function(_0x240030){const _0x48382c=_0x54c7a2;this[_0x48382c(0x210)]=_0x240030,this[_0x48382c(0x372)]=this[_0x48382c(0x306)](),this[_0x48382c(0x219)]=Math[_0x48382c(0x280)](0x1,this[_0x48382c(0x372)]),this[_0x48382c(0x1e1)](),this[_0x48382c(0x34a)]();},Window_ItemCraftingNumber['prototype']['determineMax']=function(){const _0x5e3d63=_0x54c7a2,_0x15a2af=[],_0x429214=this[_0x5e3d63(0x210)],_0x2b0bb0=DataManager[_0x5e3d63(0x2e1)](_0x429214);let _0x120d95=0x0;for(const _0x4d19ef of _0x2b0bb0){if(!_0x4d19ef)continue;let _0x1e1a7b=_0x4d19ef[0x0];const _0x59ac80=_0x4d19ef[0x1];_0x1e1a7b===_0x5e3d63(0x31f)?_0x15a2af['push'](Math[_0x5e3d63(0x229)]($gameParty[_0x5e3d63(0x31f)]()/_0x59ac80)):(typeof _0x1e1a7b===_0x5e3d63(0x3ac)&&_0x1e1a7b[_0x5e3d63(0x35a)](/CATEGORY/i)&&(_0x1e1a7b=SceneManager[_0x5e3d63(0x245)][_0x5e3d63(0x2e3)][_0x120d95],_0x120d95+=0x1),_0x15a2af['push'](Math[_0x5e3d63(0x229)]($gameParty[_0x5e3d63(0x397)](_0x1e1a7b)/_0x59ac80)));}if(_0x15a2af[_0x5e3d63(0x2e6)]<=0x0)_0x15a2af['push'](0x0);return _0x15a2af['push']($gameParty[_0x5e3d63(0x270)](_0x429214)-$gameParty['numItems'](_0x429214)),Math['min'](..._0x15a2af);},Window_ItemCraftingNumber[_0x54c7a2(0x336)][_0x54c7a2(0x34a)]=function(){const _0x4fa3d7=_0x54c7a2;Window_Selectable['prototype']['refresh'][_0x4fa3d7(0x2fb)](this),this[_0x4fa3d7(0x33e)](),this[_0x4fa3d7(0x286)](0x0),this[_0x4fa3d7(0x27f)](),this[_0x4fa3d7(0x37f)](),this['drawCurrentItemName'](),this[_0x4fa3d7(0x2d7)](),this[_0x4fa3d7(0x211)]();},Window_ItemCraftingNumber[_0x54c7a2(0x336)][_0x54c7a2(0x33e)]=function(){const _0x2f21f4=_0x54c7a2,_0x6fd1e8=this[_0x2f21f4(0x2c6)][0x4];if(!_0x6fd1e8)return;this[_0x2f21f4(0x221)]()?_0x6fd1e8['setClickHandler'](this['onButtonOk']['bind'](this)):_0x6fd1e8['_clickHandler']=null;},Window_ItemCraftingNumber[_0x54c7a2(0x336)][_0x54c7a2(0x31a)]=function(){const _0x395189=_0x54c7a2;return Math[_0x395189(0x229)](this[_0x395189(0x262)]()+this[_0x395189(0x287)]()*0x2);},Window_ItemCraftingNumber['prototype'][_0x54c7a2(0x262)]=function(){const _0x1de6e6=_0x54c7a2;return Math[_0x1de6e6(0x229)](this[_0x1de6e6(0x310)]-this['lineHeight']()*6.5);},Window_ItemCraftingNumber[_0x54c7a2(0x336)]['buttonY']=function(){const _0x3d1ac3=_0x54c7a2;return Math['floor'](this[_0x3d1ac3(0x31a)]()+this[_0x3d1ac3(0x287)]()*0x2);},Window_ItemCraftingNumber[_0x54c7a2(0x336)][_0x54c7a2(0x27f)]=function(){const _0x24ae98=_0x54c7a2,_0xfd9962=DataManager[_0x24ae98(0x2e1)](this[_0x24ae98(0x210)]),_0xa6eed1=this['itemPadding'](),_0x2f1064=_0xa6eed1*0x2;let _0x5495a4=this['totalPriceY']();_0x5495a4-=this[_0x24ae98(0x287)]()*_0xfd9962[_0x24ae98(0x2e6)];const _0x34c894=this[_0x24ae98(0x25c)]-_0x2f1064-_0xa6eed1*0x2;let _0x256475=0x0;for(const _0xe6e3a6 of _0xfd9962){_0x5495a4+=this['lineHeight']();if(!_0xe6e3a6)continue;let _0x347c69=_0xe6e3a6[0x0];const _0x5c899c=_0xe6e3a6[0x1]*(this[_0x24ae98(0x219)]||0x1);if(_0x347c69===_0x24ae98(0x31f))Imported[_0x24ae98(0x31c)]?this[_0x24ae98(0x394)](_0x5c899c,_0x2f1064,_0x5495a4,_0x34c894):this[_0x24ae98(0x318)](_0x5c899c,TextManager['currencyUnit'],0x0,_0x5495a4,_0x34c894+_0xa6eed1*0x2);else{typeof _0x347c69===_0x24ae98(0x3ac)&&_0x347c69[_0x24ae98(0x35a)](/CATEGORY/i)&&(_0x347c69=SceneManager[_0x24ae98(0x245)][_0x24ae98(0x2e3)][_0x256475],_0x256475+=0x1);this[_0x24ae98(0x32e)](_0x347c69,_0x2f1064,_0x5495a4,_0x34c894),this['drawText'](_0x5c899c,_0x2f1064,_0x5495a4,_0x34c894-_0xa6eed1,_0x24ae98(0x249));const _0x5bc7f7=this[_0x24ae98(0x1df)](),_0x3c3bdd=this[_0x24ae98(0x384)](_0x5bc7f7),_0x2bf2d4=this[_0x24ae98(0x1ff)]();this[_0x24ae98(0x37b)](),this[_0x24ae98(0x273)](_0x5bc7f7,_0x2bf2d4,_0x5495a4,_0x3c3bdd);}}},Window_ItemCraftingNumber[_0x54c7a2(0x336)][_0x54c7a2(0x394)]=function(_0x287b46,_0x14e3c8,_0xfc6160,_0x210fbb){const _0x4019ae=_0x54c7a2;this[_0x4019ae(0x252)](),this[_0x4019ae(0x1ee)][_0x4019ae(0x235)]=VisuMZ[_0x4019ae(0x2ea)]['Settings'][_0x4019ae(0x256)][_0x4019ae(0x2a8)];const _0x1f5369=VisuMZ[_0x4019ae(0x2ea)][_0x4019ae(0x237)][_0x4019ae(0x256)][_0x4019ae(0x20b)];if(_0x1f5369>0x0){const _0x55f546=_0xfc6160+(this[_0x4019ae(0x287)]()-ImageManager[_0x4019ae(0x38e)])/0x2;this[_0x4019ae(0x39b)](_0x1f5369,_0x14e3c8,_0x55f546);const _0x3e4fae=ImageManager['iconWidth']+0x4;_0x14e3c8+=_0x3e4fae,_0x210fbb-=_0x3e4fae;}this[_0x4019ae(0x2de)](ColorManager[_0x4019ae(0x3a5)]()),this[_0x4019ae(0x273)](TextManager['currencyUnit'],_0x14e3c8,_0xfc6160,_0x210fbb,_0x4019ae(0x24c)),this[_0x4019ae(0x37b)]();const _0x491f5d=VisuMZ['ItemsEquipsCore'][_0x4019ae(0x237)][_0x4019ae(0x366)][_0x4019ae(0x21c)],_0x4420fb=_0x491f5d[_0x4019ae(0x27b)](_0x287b46),_0x33eed4=this[_0x4019ae(0x384)](this[_0x4019ae(0x381)]?VisuMZ[_0x4019ae(0x20a)](_0x4420fb):_0x4420fb);_0x210fbb-=this[_0x4019ae(0x25a)](),_0x33eed4>_0x210fbb?this[_0x4019ae(0x273)](VisuMZ[_0x4019ae(0x2ea)]['Settings'][_0x4019ae(0x256)][_0x4019ae(0x269)],_0x14e3c8,_0xfc6160,_0x210fbb,'right'):this['drawText'](_0x4420fb,_0x14e3c8,_0xfc6160,_0x210fbb,_0x4019ae(0x249)),this[_0x4019ae(0x252)]();},Window_ItemCraftingNumber[_0x54c7a2(0x336)][_0x54c7a2(0x383)]=function(){const _0x403d79=_0x54c7a2;DataManager['isCraftingItemMasked'](this[_0x403d79(0x210)])?this[_0x403d79(0x332)]():Window_ShopNumber[_0x403d79(0x336)][_0x403d79(0x383)]['call'](this);},Window_ItemCraftingNumber[_0x54c7a2(0x336)]['drawCurrentItemNameMasked']=function(){const _0x2a0cd0=_0x54c7a2,_0x513739=this['itemPadding']();let _0x30646f=_0x513739*0x2;const _0xdf6209=this[_0x2a0cd0(0x31a)](),_0x1b06ea=_0xdf6209+(this[_0x2a0cd0(0x287)]()-ImageManager[_0x2a0cd0(0x38e)])/0x2;this['drawIcon'](this[_0x2a0cd0(0x210)]['iconIndex'],_0x30646f,_0x1b06ea),_0x30646f+=ImageManager[_0x2a0cd0(0x354)]+0x4;let _0x5b3c04=this[_0x2a0cd0(0x1ff)]()-_0x513739*0x3;_0x5b3c04-=ImageManager[_0x2a0cd0(0x354)]+0x4;const _0x182bd1=new Rectangle(_0x30646f,_0xdf6209,_0x5b3c04,this[_0x2a0cd0(0x287)]());this['drawCraftingItemName'](this[_0x2a0cd0(0x210)],_0x182bd1);},Window_ItemCraftingNumber[_0x54c7a2(0x336)][_0x54c7a2(0x221)]=function(){const _0x105084=_0x54c7a2;if((this[_0x105084(0x219)]||0x0)<=0x0)return![];return Window_ShopNumber['prototype']['isOkEnabled'][_0x105084(0x2fb)](this);},Window_ItemCraftingNumber[_0x54c7a2(0x336)][_0x54c7a2(0x363)]=function(){return this['isOkEnabled']();};function Window_ItemCraftingIngredient(){const _0x14e5c3=_0x54c7a2;this[_0x14e5c3(0x234)](...arguments);}Window_ItemCraftingIngredient[_0x54c7a2(0x336)]=Object['create'](Window_ItemList[_0x54c7a2(0x336)]),Window_ItemCraftingIngredient[_0x54c7a2(0x336)][_0x54c7a2(0x267)]=Window_ItemCraftingIngredient,Window_ItemCraftingIngredient[_0x54c7a2(0x336)][_0x54c7a2(0x234)]=function(_0x3b08ab){const _0x48e8d0=_0x54c7a2;Window_Selectable[_0x48e8d0(0x336)][_0x48e8d0(0x234)][_0x48e8d0(0x2fb)](this,_0x3b08ab),this[_0x48e8d0(0x216)]=0x0;},Window_ItemCraftingIngredient[_0x54c7a2(0x336)][_0x54c7a2(0x236)]=function(){return![];},Window_ItemCraftingIngredient['prototype'][_0x54c7a2(0x3a2)]=function(_0x1ad8e3,_0x341e96){const _0x2aada8=_0x54c7a2;this[_0x2aada8(0x33d)]=_0x1ad8e3,this['_amount']=_0x341e96||0x1,this[_0x2aada8(0x34a)](),this['scrollTo'](0x0,0x0),this[_0x2aada8(0x303)](),this[_0x2aada8(0x2eb)](0x0);},Window_ItemCraftingIngredient['prototype'][_0x54c7a2(0x254)]=function(){const _0x3af80e=_0x54c7a2;this[_0x3af80e(0x29d)]=$gameParty['allItems']()[_0x3af80e(0x312)](_0x3af04a=>this[_0x3af80e(0x386)](_0x3af04a));},Window_ItemCraftingIngredient['prototype'][_0x54c7a2(0x386)]=function(_0x4a4eee){const _0x25da60=_0x54c7a2;if(!_0x4a4eee)return![];if(_0x4a4eee===SceneManager[_0x25da60(0x245)]['_item'])return![];return _0x4a4eee['categories'][_0x25da60(0x386)](this[_0x25da60(0x33d)][_0x25da60(0x225)]()[_0x25da60(0x352)]());},Window_ItemCraftingIngredient[_0x54c7a2(0x336)][_0x54c7a2(0x281)]=function(_0x555233){const _0x1a1269=_0x54c7a2;if(!_0x555233)return![];if(this[_0x1a1269(0x2a6)]()[_0x1a1269(0x386)](_0x555233))return![];return $gameParty['numItems'](_0x555233)>=this[_0x1a1269(0x216)];},Window_ItemCraftingIngredient[_0x54c7a2(0x336)][_0x54c7a2(0x2a6)]=function(){const _0x529d01=_0x54c7a2,_0x3360c8=[],_0x5c5a8b=DataManager['getCraftingIngredients'](SceneManager[_0x529d01(0x245)]['_item']);for(const _0x78e802 of _0x5c5a8b){if(!_0x78e802)continue;const _0x3f72eb=_0x78e802[0x0];(DataManager['isItem'](_0x3f72eb)||DataManager['isWeapon'](_0x3f72eb)||DataManager[_0x529d01(0x31e)](_0x3f72eb))&&_0x3360c8[_0x529d01(0x22c)](_0x3f72eb);}return _0x3360c8[_0x529d01(0x24e)](SceneManager['_scene'][_0x529d01(0x2e3)]);},Window_ItemCraftingIngredient['prototype'][_0x54c7a2(0x32e)]=function(_0x37f37f,_0x47761e,_0x47e39f,_0x53e80b){const _0x16d863=_0x54c7a2;_0x37f37f&&this[_0x16d863(0x2a6)]()[_0x16d863(0x386)](_0x37f37f)&&(this[_0x16d863(0x1f1)]=!![]),Window_ItemList['prototype']['drawItemName']['call'](this,_0x37f37f,_0x47761e,_0x47e39f,_0x53e80b),this[_0x16d863(0x1f1)]=![];},Window_ItemCraftingIngredient['prototype']['drawText']=function(_0x49addd,_0x505c42,_0x33a74d,_0x26d7a6,_0x30d90d){const _0x35bb29=_0x54c7a2;if(this[_0x35bb29(0x1f1)]){const _0xa18fbf=VisuMZ[_0x35bb29(0x353)][_0x35bb29(0x237)][_0x35bb29(0x1e6)];this[_0x35bb29(0x1ee)][_0x35bb29(0x38c)]=ColorManager[_0x35bb29(0x377)](_0xa18fbf[_0x35bb29(0x3a6)]),_0x49addd+=_0xa18fbf['SelectedText'];}Window_Base['prototype'][_0x35bb29(0x273)][_0x35bb29(0x2fb)](this,_0x49addd,_0x505c42,_0x33a74d,_0x26d7a6,_0x30d90d);};