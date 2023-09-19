//=============================================================================
// VisuStella MZ - Enemy Encounter Effects
// VisuMZ_4_EncounterEffects.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_EncounterEffects = true;

var VisuMZ = VisuMZ || {};
VisuMZ.EncounterEffects = VisuMZ.EncounterEffects || {};
VisuMZ.EncounterEffects.version = 1.05;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.05] [EncounterEffects]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Encounter_Effects_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Both random encounters and on-screen encounters are pretty limited in what
 * they're able to do in RPG Maker MZ. This plugin expands their functionality
 * with some unique effects added through this plugin.
 * 
 * Both types of encounters can benefit from having more control over the
 * occurrence of Preemptive and Surprise Attacks. These can be enforced through
 * Plugin Commands and set up in a queue.
 * 
 * On-screen encounters can utilize alert functions that will cause events to
 * chase the player (or flee from them) once the player steps within their
 * visible detection range.
 * 
 * On-screen encounters can also utilize new functions added for use with the
 * Conditional Branch to determine which direction the player has approached
 * the on-screen encounter event from.
 * 
 * Random encounters can utilize repel and lure effects to nullify any random
 * encounters for a certain amount of steps or to increase their rate of
 * occurrence.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Take control of battle advantage. Enforce preemptive attacks, surprise
 *   attacks, neither, or chance it.
 * * Battle advantages can be set up in a queue for more interesting gameplay.
 * * Events can be given alert functionality to chase the player if the player
 *   steps within their vision range.
 * * Use Terrain Tags and Regions to set up tiles that will block detection
 *   range through line of sight usage.
 * * Events can trigger themselves upon touching followers instead of just
 *   players.
 * * Events can lock themselves in the direction they're facing when interacted
 *   with to make it easier to apply side attack and back attack effects.
 * * Random encounters can be bypassed through repel effects.
 * * Increase the rate of random encounters with lure effects.
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
 * Battle Advantage
 * 
 * Upon starting a battle with forced advantages, any calculations made by
 * other means will be overwritten in favor of the declared forced advantage.
 *
 * ---
 * 
 * Game_Player.encounterProgressValue
 * 
 * This function has been overwritten to allow for more flexibility over the
 * multipliers and effects applied through various effects and to allow for
 * the repel and lure effects to work as best as they can.
 * 
 * ---
 * 
 * Game_Event.updateSelfMovement
 * 
 * This function's original code will be ignored when the event is set to chase
 * or flee from the player after being alerted. After the alert and return
 * periods are over, self movement will resume as normal.
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
 * === Battle Advantage-Related Tags ===
 * 
 * ---
 *
 * <Preemptive>
 *
 * - Used for: Troop Name Tag
 * - Any troop with this tag in its name will have the battle start off with
 *   the preemptive advantage (in favor of the player party).
 *
 * ---
 *
 * <Surprise>
 *
 * - Used for: Troop Name Tag
 * - Any troop with this tag in its name will have the battle start off with
 *   the surprise advantage (in favor of the enemy party).
 *
 * ---
 *
 * <No Advantage>
 *
 * - Used for: Troop Name Tag
 * - Any troop with this tag in its name will have the battle start off with
 *   no advantage at all.
 *
 * ---
 *
 * <Chance>
 *
 * - Used for: Troop Name Tag
 * - Any troop with this tag in its name will have the battle start off with
 *   a chance for preemptive, surprise, or no advantages (calculated normally).
 *
 * ---
 * 
 * === Event Encounter-Related Notetags ===
 * 
 * ---
 *
 * <Follower Trigger>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - This event can trigger by touching a follower instead of only the player.
 *
 * ---
 *
 * <Encounter Direction Lock>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Normally when an event triggers without Direction Fix, it will face the
 *   player character. This tag prevents the event from facing the player, but
 *   still allows the event to freely turn directions.
 * - This is best used in conjunction with the Conditional Branch scripts.
 *
 * ---
 * 
 * === Alert-Related Notetags ===
 * 
 * ---
 *
 * <Alert>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - This will use the default settings unless changed by other tags.
 *
 * ---
 *
 * <Alert Range: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - Changes the event's alert detection range to 'x' tiles.
 * - Replace 'x' with a number value representing the number of tiles to use
 *   for its detection range.
 *
 * ---
 *
 * <Alert Dash>
 * <Alert Walk>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - If alerted, the event will dash/walk instead of whatever is set as a
 *   default setting within the Plugin Parameters.
 *
 * ---
 *
 * <Alert Time: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - This determines the amount of time in frames for the event to chase the
 *   player continuously while the player is outside of the detection range.
 * - Replace 'x' with a number value representing the number of frames for the
 *   event to keep chasing the player with.
 * - If the player steps back into the alert detection range, the timer will be
 *   reset.
 *
 * ---
 * 
 * <Alert FoV Angle: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the Field of View angle to 'x' for the event.
 * - Replace 'x' with a number value representing the degrees of for the field
 *   of view angle used by the event to detect players.
 * - The angle will always be centered to the event's line of sight.
 * 
 * ---
 * 
 * <Alert Show FoV>
 * <Alert Hide FoV>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Shows/hides the field of view for the event.
 * - If an event's field of view is hidden, it can still chase players when
 *   entering the event's range.
 * 
 * ---
 *
 * <Alert Response: chase>
 * <Alert Response: rush>
 * <Alert Response: flee>
 * <Alert Response: random>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - This determines how an alerted event will react.
 * - Chase: Use path finding to find a route to the player
 * - Rush: Rush directly at the player
 * - Flee: Run away from the player
 * - Random: Move in random directions
 *
 * ---
 *
 * <Response Balloon: name>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - Determines the balloon displayed when initially alerted and responding.
 * - Replace 'name' with any of the following:
 *   - None
 *   - Exclamation
 *   - Question
 *   - Music Note
 *   - Heart
 *   - Angle
 *   - Sweat
 *   - Frustration
 *   - Silence
 *   - Light Bulb
 *   - Zzz
 *   - User-defined 1
 *   - User-defined 2
 *   - User-defined 3
 *   - User-defined 4
 *   - User-defined 5
 *
 * ---
 *
 * <Alert React Delay: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - When initially alerted, there is a small window of waiting before starting
 *   the chase.
 * - Replace 'x' with a number representing the number of frames for the
 *   initial reaction delay.
 *
 * ---
 *
 * <Alert Common Event: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - Runs a Common Event when initially alerted.
 * - Replace 'x' with a number representing the ID of the Common Event to run.
 * - Use 0 to run no Common Events.
 *
 * ---
 *
 * <Alert Sound Name: name>
 * <Alert Sound Volume: x>
 * <Alert Sound Pitch: y>
 * <Alert Sound Pan: z>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - Play this sound effect when the event is initially alerted.
 * - Replace 'name' with the filename of the sound effect found in /audio/se/
 *   to play. Do NOT include the file extension.
 * - Replace 'x' with a number representing the volume of the sound effect.
 * - Replace 'y' with a number representing the pitch of the sound effect.
 * - Replace 'z' with a number representing the pan of the sound effect.
 *
 * ---
 *
 * <Return Position>
 * <Stay Position>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - Decide if the event will return back to its initial position after an
 *   alert chase is over.
 * - Or if it will stay where it currently is.
 *
 * ---
 *
 * <Return Time: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - This is the amount of time spent (in frames) after an alert chase is over
 *   but returning back to the event's original position.
 * - Replace 'x' with a number representing the number of frames for the
 *   duration between idling and returning.
 *
 * ---
 *
 * <Idle Balloon: name>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - Determines the balloon displayed when beginning the idle phase after an
 *   alert chase is over but before returning back to the original position.
 * - Replace 'name' with any of the following:
 *   - None
 *   - Exclamation
 *   - Question
 *   - Music Note
 *   - Heart
 *   - Angle
 *   - Sweat
 *   - Frustration
 *   - Silence
 *   - Light Bulb
 *   - Zzz
 *   - User-defined 1
 *   - User-defined 2
 *   - User-defined 3
 *   - User-defined 4
 *   - User-defined 5
 *
 * ---
 *
 * <Returning Balloon: name>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - Determines the balloon displayed when the event starts returning back to
 *   the event's original position.
 * - Replace 'name' with any of the following:
 *   - None
 *   - Exclamation
 *   - Question
 *   - Music Note
 *   - Heart
 *   - Angle
 *   - Sweat
 *   - Frustration
 *   - Silence
 *   - Light Bulb
 *   - Zzz
 *   - User-defined 1
 *   - User-defined 2
 *   - User-defined 3
 *   - User-defined 4
 *   - User-defined 5
 *
 * ---
 * 
 * === Alert Vision Blocking-Related Notetags ===
 * 
 * ---
 *
 * <Block Vision Tag: x>
 * <Block Vision Tags: x, x, x>
 *
 * - Used for: Tileset and Map Notetags
 * - When using a specific tileset or on a specific map, tiles marked with the
 *   terrain tag 'x' will obscure the line of sight from the event to the
 *   player character.
 * - Replace 'x' with a number value representing the terrain tag used.
 * - This does NOT change the Field of View Alert Detection Range graphic.
 *
 * ---
 *
 * <Block Vision Region: x>
 * <Block Vision Regions: x, x, x>
 *
 * - Used for: Tileset and Map Notetags
 * - When using a specific tileset or on a specific map, tiles marked with the
 *   region ID 'x' will obscure the line of sight from the event to the
 *   player character.
 * - Replace 'x' with a number value representing the region ID used.
 * - This does NOT change the Field of View Alert Detection Range graphic.
 *
 * ---
 *
 * ============================================================================
 * Conditional Branch Usage
 * ============================================================================
 * 
 * For those wanting to use Conditional Branch event commands with this plugin
 * the following functions into the "Script" input fields of the respective
 * event commands.
 * 
 * === Conditional Branch Script Functions ===
 * 
 * These are newly added JavaScript functions that return a true/false value.
 * The functions are best used with the Conditional Branch script input field.
 * 
 * ---
 * 
 * this.checkEventFacingPlayerFront()
 * 
 * - Returns true if the event is facing the player's front.
 * 
 * ---
 * 
 * this.checkEventFacingPlayerBack()
 * 
 * - Returns true if the event is facing the player's back.
 * - Best used with a Surprise attack.
 * 
 * ---
 * 
 * this.checkEventFacingPlayerSide()
 * 
 * - Returns true if the event is facing the player's side.
 * 
 * ---
 * 
 * this.checkPlayerFacingEventFront()
 * 
 * - Returns true if the player is facing the event's front.
 * 
 * ---
 * 
 * this.checkPlayerFacingEventBack()
 * 
 * - Returns true if the player is facing the event's back.
 * - Best used with a Preemptive attack.
 * 
 * ---
 * 
 * this.checkPlayerFacingEventSide()
 * 
 * - Returns true if the player is facing the event's side.
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
 * === Advantage Plugin Commands ===
 * 
 * ---
 *
 * Advantage: Add to Queue
 * - Add (at the end) to the existing advantage queue the following encounter
 *  advantages for the upcoming battles.
 *
 *   Queue:
 *   - Add to the queue the following advantage options for the
 *     upcoming battles.
 *     - Preemptive (Player gains turn advantage)
 *     - Surprise (Enemies gain turn advantage)
 *     - No Advantage (Neither party has advantage)
 *     - Chance (Random encounter advantage chance)
 *
 * ---
 *
 * Advantage: Set Queue
 * - Declare the exact advantage queue for the upcoming battles.
 *
 *   Queue:
 *   - Add to the queue the following advantage options for the
 *     upcoming battles.
 *     - Preemptive (Player gains turn advantage)
 *     - Surprise (Enemies gain turn advantage)
 *     - No Advantage (Neither party has advantage)
 *     - Chance (Random encounter advantage chance)
 *
 * ---
 *
 * Advantage: Reset Queue
 * - Resets the advantage queue for battles.
 *
 * ---
 * 
 * === Alert Plugin Commands ===
 * 
 * ---
 *
 * Alert: Stealth Mode
 * - Changes the stealth mode setting for the player.
 *
 *   Stealth Mode:
 *   - If Stealth Mode is on, bypass unnoticed alerts.
 *   - Already alerted events will stay alert.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Advantage Settings
 * ============================================================================
 *
 * Advantage common event settings related to enemy encounters.
 *
 * ---
 *
 * Settings
 * 
 *   Preemptive Event:
 *   - Run this Common Event upon a preemptive advantage.
 *   - Use 0 to run no Common Events.
 * 
 *   Surprise Event:
 *   - Run this Common Event upon a surprise advantage.
 *   - Use 0 to run no Common Events.
 * 
 *   No Advantage Event:
 *   - Run this Common Event when no advantage is given.
 *   - Use 0 to run no Common Events.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Alert Settings
 * ============================================================================
 *
 * These are settings for alerting events. Used mainly for events chasing the
 * player.
 * 
 * How alert detection works is when the player steps with an event (who has
 * an alert notetag or comment tag), the event will enter alert mode. At the
 * very start, a response balloon will play along with an initialy delay. If
 * there is a common event set, the common event will play immediately.
 * 
 * After the initial delay is over, the event will begin its chasing phase.
 * Although it's called the chasing phase, it can react differently by using
 * path finding to find a way to the player, rushing directly in a straight
 * line at the player, running away from the player, or moving about randomly.
 * 
 * If the player stays out of the event's alert detection range for a specific
 * amount of time, the event will enter its idle phase. An idle balloon will
 * play and the event will wait a short duration.
 * 
 * After this short duration is over, the event will return back to its
 * original position (if desired). Upon starting its return to its original
 * position, it will play the returning balloon.
 * 
 * During the idle and return phases, if the player steps in range of the
 * event's alert range, it will begin the chase all over again.
 *
 * ---
 *
 * Alert
 * 
 *   Detection Range:
 *   - Default tile range for event to detect the player in.
 * 
 *   Alert Dash:
 *   - Alerted events use dashing speed.
 * 
 *   Alert Time:
 *   - Number of frames the alerted event will attempt to chase the player.
 *
 * ---
 *
 * Field of View
 * 
 *   Angle Range:
 *   - The angle range used to determine the event's field of view.
 * 
 *   Show Range:
 *   - Show the field of view of events?
 * 
 *   Color 1:
 *   Color 2:
 *   - Colors with a bit of alpha settings.
 *   - Format rgba(0-255, 0-255, 0-255, 0-1)
 *
 * ---
 *
 * Response
 * 
 *   Response Type:
 *   - What kind of default response behavior do you want?
 *     - Chase: Use path finding to find a route to the player
 *     - Rush: Rush directly at the player
 *     - Flee: Run away from the player
 *     - Random: Move in random directions
 * 
 *   Response Balloon:
 *   - What kind of balloon should the event play when detecting the player?
 * 
 *   Common Event:
 *   - Run this Common Event when the player is detected.
 *   - Use 0 for no Common Event.
 * 
 *   Reaction Delay:
 *   - Number of frames for the event to stand still before beginning
 *     the chase.
 *
 * ---
 *
 * Sound
 * 
 *   Filename:
 *   - Filename of the sound effect played when alerted.
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
 * Return
 * 
 *   Return Home:
 *   - After finishing a chase, return back to the home position?
 * 
 *   Idle Wait:
 *   - Number of frames to wait before returning home.
 * 
 *   Idle Balloon:
 *   - Play this balloon when an event is about to return.
 * 
 *   Returning Balloon:
 *   - Play this balloon when an event begins returning.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Encounter Multipliers
 * ============================================================================
 *
 * Encounter multiplier settings regarding enemy encounters.
 *
 * ---
 *
 * Bush Multiplier
 * 
 *   Parameter:
 *   - Multiplier for how fast encounters occur by when the player is walking
 *     through bushes.
 * 
 *   Boat Multiplier:
 *   - Multiplier for how fast encounters occur by when the player is
 *     traveling via boat.
 * 
 *   Ship Multiplier:
 *   - Multiplier for how fast encounters occur by when the player is
 *     traveling via ship.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Repel/Lure Settings
 * ============================================================================
 *
 * Repel/Lure settings regarding enemy encounters.
 *
 * ---
 *
 * Settings
 * 
 *   Repel Variable:
 *   - Select a variable where if the value is above 0, it will
 *     repel encounters.
 *   - Each step reduces variable value by 1.
 * 
 *   Wear Off Common Event:
 *   - Run this Common Event when Repel reaches 0.
 *   - Use 0 to run no Common Events.
 *
 * ---
 *
 * Settings
 * 
 *   Lure Variable:
 *   - Select a variable where if the value is above 0, it will
 *     lure encounters.
 *   - Each step reduces variable value by 1.
 * 
 *   Wear Off Common Event:
 *   - Run this Common Event when Lure reaches 0.
 *   - Use 0 to run no Common Events.
 * 
 *   Lure Multiplier:
 *   - Multiplier for how fast encounters occur by when the lure
 *     effect is active.
 * 
 *   Lure Increase:
 *   - Flat increase for how fast encounters occur by when the lure
 *     effect is active.
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
 * Version 1.05: January 15, 2021
 * * Documentation Update!
 * ** Help file updated for features that were left out by accident.
 * *** Notetag/Comment Tag: <Alert FoV Angle: x>
 * *** Notetag/Comment Tag: <Alert Hide FoV>
 * *** Notetag/Comment Tag: <Alert Show FoV>
 * 
 * Version 1.04: December 11, 2020
 * * Bug Fixes!
 * ** Without the Events and Movement Core, events returning home after a
 *    failed alert chase will no longer crash the game.
 *    Fix by Yanfly and Shiro.
 * 
 * Version 1.03: December 4, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.02: November 29, 2020
 * * Feature Update!
 * ** Initialization of the encounter effects no only occur if the event's
 *    current page settings have been altered. Change made by Arisu and Shaz.
 * 
 * Version 1.01: November 22, 2020
 * * Bug Fixes!
 * ** Certain notetags will no longer cause crashes. Fix made by Yanfly.
 * ** Erased events will have their alert sprite removed, too. Fix made by
 *    Yanfly.
 *
 * Version 1.00: December 11, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AdvantageAddQueue
 * @text Advantage: Add to Queue
 * @desc Add (at the end) to the existing advantage queue the following
 * encounter advantages for the upcoming battles.
 *
 * @arg Queue:arraystr
 * @text Queue
 * @type select[]
 * @option Preemptive (Player gains turn advantage)
 * @value preemptive
 * @option Surprise (Enemies gain turn advantage)
 * @value surprise
 * @option No Advantage (Neither party has advantage)
 * @value no advantage
 * @option Chance (Random encounter advantage chance)
 * @value chance
 * @desc Add to the queue the following advantage options for
 * the upcoming battles.
 * @default ["preemptive"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AdvantageSetQueue
 * @text Advantage: Set Queue
 * @desc Declare the exact advantage queue for the upcoming battles.
 *
 * @arg Queue:arraystr
 * @text Queue
 * @type select[]
 * @option Preemptive (Player gains turn advantage)
 * @value preemptive
 * @option Surprise (Enemies gain turn advantage)
 * @value surprise
 * @option No Advantage (Neither party has advantage)
 * @value no advantage
 * @option Chance (Random encounter advantage chance)
 * @value chance
 * @desc Change the queue to the following advantage options for
 * the upcoming battles.
 * @default ["preemptive"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AdvantageResetQueue
 * @text Advantage: Reset Queue
 * @desc Resets the advantage queue for battles.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AlertStealthMode
 * @text Alert: Stealth Mode
 * @desc Changes the stealth mode setting for the player.
 *
 * @arg StealthMode:eval
 * @text Stealth Mode
 * @type boolean
 * @on Stealth On
 * @off No Steath
 * @desc If Stealth Mode is on, bypass unnoticed alerts.
 * Already alerted events will stay alert.
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
 * @param EncounterEffects
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Advantage:struct
 * @text Advantage Settings
 * @type struct<Advantage>
 * @desc Advantage common event settings related to enemy encounters.
 * @default {"Preemptive:num":"0","Surprise:num":"0","Normal:num":"0"}
 *
 * @param Alert:struct
 * @text Alert Settings
 * @type struct<Alert>
 * @desc Settings alerting events. Used mainly for events chasing the player.
 * @default {"Alert":"","AlertRange:num":"4","AlertDash:eval":"true","AlertLock:num":"600","FoV":"","FovAngle:num":"120","ShowFoV:eval":"true","FovColor1:str":"rgba(255, 0, 0, 0)","FovColor2:str":"rgba(255, 0, 0, 0.5)","Response":"","ResponseType:str":"chase","ResponseBalloon:str":"Exclamation","CommonEvent:num":"0","ReactDelay:num":"80","Sound":"","SoundName:str":"Attack1","SoundVolume:num":"90","SoundPitch:num":"120","SoundPan:num":"0","Return":"","ReturnHome:eval":"true","ReturnWait:num":"180","ReturnStartBalloon:str":"Silence","ReturnEndBalloon:str":"Frustration"}
 *
 * @param EncounterMultiplier:struct
 * @text Encounter Multipliers
 * @type struct<EncounterMultiplier>
 * @desc Encounter multiplier settings regarding enemy encounters.
 * @default {"BushMultiplier:num":"2.00","BoatMultiplier:num":"1.00","ShipMultiplier:num":"0.50"}
 *
 * @param RepelLure:struct
 * @text Repel/Lure Settings
 * @type struct<RepelLure>
 * @desc Repel/Lure settings regarding enemy encounters.
 * @default {"RepelVariable:num":"31","RepelEvent:num":"6","LureVariable:num":"32","LureEvent:num":"8","LureRate:num":"4.0","LureFlat:num":"1"}
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
 * Advantage Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Advantage:
 *
 * @param Preemptive:num
 * @text Preemptive Event
 * @parent Advantage
 * @type common_event
 * @desc Run this Common Event upon a preemptive advantage.
 * Use 0 to run no Common Events.
 * @default 0
 *
 * @param Surprise:num
 * @text Surprise Event
 * @parent Advantage
 * @type common_event
 * @desc Run this Common Event upon a surprise advantage.
 * Use 0 to run no Common Events.
 * @default 0
 *
 * @param Normal:num
 * @text No Advantage Event
 * @parent Advantage
 * @type common_event
 * @desc Run this Common Event when no advantage is given.
 * Use 0 to run no Common Events.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Alert Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Alert:
 *
 * @param Alert
 * 
 * @param AlertRange:num
 * @text Detection Range
 * @parent Alert
 * @type number
 * @min 1
 * @desc Default tile range for event to detect the player in.
 * @default 4
 *
 * @param AlertDash:eval
 * @text Alert Dash
 * @parent Alert
 * @type boolean
 * @on Dash
 * @off Walk
 * @desc Alerted events use dashing speed.
 * @default true
 * 
 * @param AlertLock:num
 * @text Alert Time
 * @parent Alert
 * @type number
 * @min 1
 * @desc Number of frames the alerted event will attempt to chase the player.
 * @default 600
 *
 * @param FoV
 * @text Field of View
 * 
 * @param FovAngle:num
 * @text Angle Range
 * @parent FoV
 * @type number
 * @min 1
 * @max 360
 * @desc The angle range used to determine the event's field of view.
 * @default 120
 *
 * @param ShowFoV:eval
 * @text Show Range
 * @parent FoV
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the field of view of events?
 * @default true
 *
 * @param FovColor1:str
 * @text Color 1
 * @parent FoV
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(255, 0, 0, 0)
 *
 * @param FovColor2:str
 * @text Color 2
 * @parent FoV
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(255, 0, 0, 0.5)
 *
 * @param Response
 *
 * @param ResponseType:str
 * @text Response Type
 * @parent Response
 * @type select
 * @option Chase: Use path finding to find a route to the player
 * @value chase
 * @option Rush: Rush directly at the player
 * @value rush
 * @option Flee: Run away from the player
 * @value flee
 * @option Random: Move in random directions
 * @value random
 * @desc What kind of default response behavior do you want?
 * @default chase
 *
 * @param ResponseBalloon:str
 * @text Response Balloon
 * @parent Response
 * @type select
 * @option Exclamation
 * @option Question
 * @option Music Note
 * @option Heart
 * @option Angle
 * @option Sweat
 * @option Frustration
 * @option Silence
 * @option Light Bulb
 * @option Zzz
 * @option User-defined 1
 * @option User-defined 2
 * @option User-defined 3
 * @option User-defined 4
 * @option User-defined 5
 * @desc What kind of balloon should the event play when detecting the player?
 * @default Exclamation
 *
 * @param CommonEvent:num
 * @text Common Event
 * @parent Response
 * @type common_event
 * @desc Run this Common Event when the player is detected.
 * Use 0 for no Common Event.
 * @default 0
 * 
 * @param ReactDelay:num
 * @text Reaction Delay
 * @parent Response
 * @type number
 * @min 1
 * @desc Number of frames for the event to stand still before beginning the chase.
 * @default 80
 *
 * @param Sound
 *
 * @param SoundName:str
 * @text Filename
 * @type file
 * @parent Sound
 * @dir audio/se/
 * @desc Filename of the sound effect played when alerted.
 * @default Attack1
 *
 * @param SoundVolume:num
 * @text Volume
 * @type number
 * @parent Sound
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param SoundPitch:num
 * @text Pitch
 * @type number
 * @parent Sound
 * @desc Pitch of the sound effect played.
 * @default 120
 *
 * @param SoundPan:num
 * @text Pan
 * @parent Sound
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @param Return
 *
 * @param ReturnHome:eval
 * @text Return Home
 * @parent Return
 * @type boolean
 * @on Return
 * @off Stay
 * @desc After finishing a chase, return back to the home position?
 * @default true
 * 
 * @param ReturnWait:num
 * @text Idle Wait
 * @parent Return
 * @type number
 * @min 1
 * @desc Number of frames to wait before returning home.
 * @default 180
 *
 * @param ReturnStartBalloon:str
 * @text Idle Balloon
 * @parent Return
 * @type select
 * @option Exclamation
 * @option Question
 * @option Music Note
 * @option Heart
 * @option Angle
 * @option Sweat
 * @option Frustration
 * @option Silence
 * @option Light Bulb
 * @option Zzz
 * @option User-defined 1
 * @option User-defined 2
 * @option User-defined 3
 * @option User-defined 4
 * @option User-defined 5
 * @desc Play this balloon when an event is about to return.
 * @default Silence
 *
 * @param ReturnEndBalloon:str
 * @text Returning Balloon
 * @parent Return
 * @type select
 * @option Exclamation
 * @option Question
 * @option Music Note
 * @option Heart
 * @option Angle
 * @option Sweat
 * @option Frustration
 * @option Silence
 * @option Light Bulb
 * @option Zzz
 * @option User-defined 1
 * @option User-defined 2
 * @option User-defined 3
 * @option User-defined 4
 * @option User-defined 5
 * @desc Play this balloon when an event begins returning.
 * @default Frustration
 *
 */
/* ----------------------------------------------------------------------------
 * Encounter Multipliers Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~EncounterMultiplier:
 *
 * @param BushMultiplier:num
 * @text Bush Multiplier
 * @desc Multiplier for how fast encounters occur by when the
 * player is walking through bushes.
 * @default 2.00
 *
 * @param BoatMultiplier:num
 * @text Boat Multiplier
 * @desc Multiplier for how fast encounters occur by when the
 * player is traveling via boat.
 * @default 1.00
 *
 * @param ShipMultiplier:num
 * @text Ship Multiplier
 * @desc Multiplier for how fast encounters occur by when the
 * player is traveling via ship.
 * @default 0.50
 *
 */
/* ----------------------------------------------------------------------------
 * Repel/Lure Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~RepelLure:
 *
 * @param RepelVariable:num
 * @text Repel Variable
 * @parent Repel/Lure
 * @type variable
 * @desc Select a variable where if the value is above 0, it will
 * repel encounters. Each step reduces variable value by 1.
 * @default 0
 *
 * @param RepelEvent:num
 * @text Wear Off Common Event
 * @parent RepelVariable:num
 * @type common_event
 * @desc Run this Common Event when Repel reaches 0.
 * Use 0 to run no Common Events.
 * @default 0
 *
 * @param LureVariable:num
 * @text Lure Variable
 * @parent Repel/Lure
 * @type variable
 * @desc Select a variable where if the value is above 0, it will
 * lure encounters. Each step reduces variable value by 1.
 * @default 0
 *
 * @param LureEvent:num
 * @text Wear Off Common Event
 * @parent LureVariable:num
 * @type common_event
 * @desc Run this Common Event when Lure reaches 0.
 * Use 0 to run no Common Events.
 * @default 0
 *
 * @param LureRate:num
 * @text Lure Multiplier
 * @parent LureVariable:num
 * @desc Multiplier for how fast encounters occur by when the
 * lure effect is active.
 * @default 4.0
 *
 * @param LureFlat:num
 * @text Lure Increase
 * @parent LureVariable:num
 * @desc Flat increase for how fast encounters occur by when the
 * lure effect is active.
 * @default 1
 *
 */
//=============================================================================

const _0x4dea=['Game_CharacterBase_isDashing','eventX','moveStraight','ResponseType','Preemptive','alertRange','Settings','fill','checkEventFacingPlayerFront','872PAUQJZ','1018633IlWeJO','_preemptive','checkForcedAdvantage','_data','isAlertVisionBlocked',',\x20Event\x20Y:\x20','LureFlat','chaseData','sin','initEncounterEffects','RepelLure','call','setBalloonPose','Event:\x20','return\x200','returning','trim','returnDir','enabled','push','initialize','getAlertDistanceToPlayer','alertSoundPan','map','updateAlertIdle','getAlertAngleToPlayer','startBattle','_alertBlockVisionRegions','returnY','Chance','event','match','returnAfter','_alertFovSprite','_erased','setupEncounterEffectsCommentTags','concat','needsSmartChaseUpdate','118721BsuzuO','\x20This\x20X:\x20','ConvertParams','moveTypeRandom','update','updateBitmap','VisuMZ_1_EventsMoveCore','Game_Event_lock','returnX','Event\x20X:\x20','alertSoundPitch','arc','tileWidth','create','Game_Player_initMembers','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','initEncounterEffectsData','note','_pageIndex','code','getAlertDistanceToFollower','updateSelfMovement','turnTowardPlayer','format','isEventRunning','setDirection','AlertSoundPan','updateAlert','ceil','initEncounterEffects_ForcedAdvantage','EncounterMultiplier','createRadialGradient','AlertReactDelay','MUSICNOTE','LIGHT\x20BULB','chance','ANNOYED','drawAlertCircle','prototype','isAlertLineOfVisionClear','STR','description','angle','status','contains','constructor','checkEventFollowerTriggerTouch','checkEventFacingPlayerBack','AdvantageResetQueue','registerCommand','_baseTexture','ResponseBalloon','AdvantageAddQueue','toUpperCase','refresh','BattleManager_startBattle','RepelEvent','_trigger','isRepelEncounters','setupPageSettings','lock','SILENCE','ZZZ','getAlertAngleToTarget','shiftForcedAdvantage','Surprise','EncounterEffects','length','checkPlayerFacingEventBack','isPositionSideOf','updateAngle','alertDash','addColorStop','alertBalloon','updateSelfMovementAlerted','round','checkEncounterEffectsStringTagsChase','surprise','isInShip','regionId','_character','FovColor1','getAlertAngleToFollower','eventId','setForcedAdvantage','version','BULB','response','getForcedAdvantage','save','ARRAYNUM','toLowerCase','_moveRouteIndex','hasEncounterHalf','pow','troop','getAlertDistanceToTarget','parameters','alerted','Sprite_Character_update','setup','encounterProgressValue','updateSelfMovementSmartChase','anchor','LIGHT-BULB','fillStyle','checkEventFacingPlayerSide','AlertDefault','processRepelEncounters','updatePosition','requestBalloon','fovAngle','FRUSTRATION','isMovementSucceeded','ReactDelay','LIGHTBULB','Game_CharacterBase_setBalloonPose','tileset','parse','moveTo','isChaseEnabled','AlertCommonEvent','StayPosition','USER-DEFINED\x203','310795lbGxek','debugShowDirections','ReturnPosition','_alertStealthMode','returnWait','chase','Game_Event_update','cos','AlertDash','initEventChaseData','_characterErased','showFov','updateSelfMovementReturnFromChase','chaseTime','_surprise','_forcedAdvantage','shift','addForcedAdvantage','executeMoveDir8','SLEEP','initMembers','LureEvent','isChaseReturning','isSupportDiagonalMovement','isPositionFrontOf','EVAL','LureVariable','ReturnEndBalloon','terrainTag','_alertBlockVisionTags','getAlertTargets','getAlertStealthMode','actor','findDiagonalDirectionTo','isJumping','BoatMultiplier','QUESTION','runAdvantageCommonEvents','setupEncounterEffectsEffects','AlertSoundPitch','exit','setValue','getAlertDistanceToClosest','ARRAYSTRUCT','AlertShowFov','NoAdvantage','destroy','1cuGlMb','TouchDirectionLock','checkEventTriggerTouch','isPositionBackOf','Queue','direction','alertSoundName','ShipMultiplier','BattleCore','updateAlertChase','RegExp','1CfPDmp','Game_Event_setupPageSettings','Game_Event_updateSelfMovement','SoundPan','AlertSoundName','commonEvent','isFacingTowards','ReturnStartBalloon','reserveCommonEvent','follower','ARRAYSTR','_EncounterEffects_EventChaseData','processLureEncounters','97351kNMwBY','createFovBitmap','preemptive','Game_Event_clearPageSettings','StealthMode','updateAlertReturnWait','initEncounterEffectsEffects','Advantage','SoundPitch','BlockVisionRegion','checkPlayerFacingEventSide','setupEncounterEffectsNotetags','isFacingSideways','ANGER','MUSIC-NOTE','height','AdvantageSetQueue','SoundName','list','rush','log','sqrt','atan2','findDirectionTo','AlertLock','MUSIC\x20NOTE','value','lineTo','setAlertStealthMode','_eventAlertChaseCache','playerX','ReturnHome','AlertResponse','playSe','updateEncounterEffects','AlertRange','isMoving','bitmap','ReturnWait','Alert','_EncounterEffectsTouchDirectionLock','name','USER-DEFINED\x202','isInBoat','LIGHT','isBush','FovAngle','65yvqdTu','split','pos','includes','needsBitmapRedraw','AlertSoundVolume','339852yrjeSe','eventY','beginPath','returnEndBalloon','177554GBZPBY','returnWaiting','_source','FUNC','isFacingAway','flee','Game_System_initialize','alertSoundVolume','alertLock','isChaseAlerted','BattleManager_onEncounter','BushMultiplier','_processEncounterDirectionLock','followers','reactTime','parent','ShowFoV','Game_Event_checkEventTriggerTouch','returnStartBalloon','_EncounterEffectsFollowerTrigger','returnTime','Data:\x20','RepelVariable','_visible','isDashing','NUM','USER-DEFINED\x204','blendMode','ConvertBallonTextToID','Game_Map_setup','BlockVisionTag'];const _0x4aad=function(_0x3fd12a,_0x34968b){_0x3fd12a=_0x3fd12a-0x1b9;let _0x4deaf5=_0x4dea[_0x3fd12a];return _0x4deaf5;};const _0x24e169=_0x4aad;(function(_0x49a902,_0x19f925){const _0x2d6fa1=_0x4aad;while(!![]){try{const _0x1620e4=parseInt(_0x2d6fa1(0x285))*-parseInt(_0x2d6fa1(0x278))+parseInt(_0x2d6fa1(0x2e6))*parseInt(_0x2d6fa1(0x2b4))+-parseInt(_0x2d6fa1(0x26d))*parseInt(_0x2d6fa1(0x2be))+-parseInt(_0x2d6fa1(0x23e))+parseInt(_0x2d6fa1(0x1c2))+-parseInt(_0x2d6fa1(0x2ba))+parseInt(_0x2d6fa1(0x2e7));if(_0x1620e4===_0x19f925)break;else _0x49a902['push'](_0x49a902['shift']());}catch(_0x1ebfb1){_0x49a902['push'](_0x49a902['shift']());}}}(_0x4dea,0x418c2));var label='EncounterEffects',tier=tier||0x0,dependencies=[],pluginData=$plugins['filter'](function(_0x3b81b9){const _0x429e37=_0x4aad;return _0x3b81b9[_0x429e37(0x1ed)]&&_0x3b81b9[_0x429e37(0x1eb)][_0x429e37(0x2b7)]('['+label+']');})[0x0];VisuMZ[label][_0x24e169(0x2e3)]=VisuMZ[label][_0x24e169(0x2e3)]||{},VisuMZ[_0x24e169(0x1c4)]=function(_0x15baeb,_0x6f3f09){const _0x1f8474=_0x24e169;for(const _0x35ec74 in _0x6f3f09){if(_0x35ec74[_0x1f8474(0x1bb)](/(.*):(.*)/i)){const _0x373777=String(RegExp['$1']),_0x17acbf=String(RegExp['$2'])[_0x1f8474(0x1f7)]()[_0x1f8474(0x2f7)]();let _0x44eadd,_0x5e990d,_0x4f4776;switch(_0x17acbf){case _0x1f8474(0x2d7):_0x44eadd=_0x6f3f09[_0x35ec74]!==''?Number(_0x6f3f09[_0x35ec74]):0x0;break;case _0x1f8474(0x21c):_0x5e990d=_0x6f3f09[_0x35ec74]!==''?JSON[_0x1f8474(0x238)](_0x6f3f09[_0x35ec74]):[],_0x44eadd=_0x5e990d[_0x1f8474(0x2fe)](_0x495b98=>Number(_0x495b98));break;case _0x1f8474(0x257):_0x44eadd=_0x6f3f09[_0x35ec74]!==''?eval(_0x6f3f09[_0x35ec74]):null;break;case'ARRAYEVAL':_0x5e990d=_0x6f3f09[_0x35ec74]!==''?JSON['parse'](_0x6f3f09[_0x35ec74]):[],_0x44eadd=_0x5e990d[_0x1f8474(0x2fe)](_0x494abf=>eval(_0x494abf));break;case'JSON':_0x44eadd=_0x6f3f09[_0x35ec74]!==''?JSON[_0x1f8474(0x238)](_0x6f3f09[_0x35ec74]):'';break;case'ARRAYJSON':_0x5e990d=_0x6f3f09[_0x35ec74]!==''?JSON['parse'](_0x6f3f09[_0x35ec74]):[],_0x44eadd=_0x5e990d[_0x1f8474(0x2fe)](_0x391b3a=>JSON[_0x1f8474(0x238)](_0x391b3a));break;case _0x1f8474(0x2c1):_0x44eadd=_0x6f3f09[_0x35ec74]!==''?new Function(JSON[_0x1f8474(0x238)](_0x6f3f09[_0x35ec74])):new Function(_0x1f8474(0x2f5));break;case'ARRAYFUNC':_0x5e990d=_0x6f3f09[_0x35ec74]!==''?JSON[_0x1f8474(0x238)](_0x6f3f09[_0x35ec74]):[],_0x44eadd=_0x5e990d[_0x1f8474(0x2fe)](_0xa36c0=>new Function(JSON[_0x1f8474(0x238)](_0xa36c0)));break;case _0x1f8474(0x1ea):_0x44eadd=_0x6f3f09[_0x35ec74]!==''?String(_0x6f3f09[_0x35ec74]):'';break;case _0x1f8474(0x282):_0x5e990d=_0x6f3f09[_0x35ec74]!==''?JSON[_0x1f8474(0x238)](_0x6f3f09[_0x35ec74]):[],_0x44eadd=_0x5e990d[_0x1f8474(0x2fe)](_0x14b579=>String(_0x14b579));break;case'STRUCT':_0x4f4776=_0x6f3f09[_0x35ec74]!==''?JSON[_0x1f8474(0x238)](_0x6f3f09[_0x35ec74]):{},_0x44eadd=VisuMZ[_0x1f8474(0x1c4)]({},_0x4f4776);break;case _0x1f8474(0x269):_0x5e990d=_0x6f3f09[_0x35ec74]!==''?JSON[_0x1f8474(0x238)](_0x6f3f09[_0x35ec74]):[],_0x44eadd=_0x5e990d['map'](_0x154aa8=>VisuMZ[_0x1f8474(0x1c4)]({},JSON[_0x1f8474(0x238)](_0x154aa8)));break;default:continue;}_0x15baeb[_0x373777]=_0x44eadd;}}return _0x15baeb;},(_0x24632a=>{const _0x744ff9=_0x24e169,_0x3764e3=_0x24632a[_0x744ff9(0x2ae)];for(const _0x3818e6 of dependencies){if(!Imported[_0x3818e6]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'['format'](_0x3764e3,_0x3818e6)),SceneManager[_0x744ff9(0x266)]();break;}}const _0x291b82=_0x24632a['description'];if(_0x291b82['match'](/\[Version[ ](.*?)\]/i)){const _0x12ab8f=Number(RegExp['$1']);_0x12ab8f!==VisuMZ[label][_0x744ff9(0x217)]&&(alert(_0x744ff9(0x1d1)['format'](_0x3764e3,_0x12ab8f)),SceneManager[_0x744ff9(0x266)]());}if(_0x291b82[_0x744ff9(0x1bb)](/\[Tier[ ](\d+)\]/i)){const _0x49f309=Number(RegExp['$1']);_0x49f309<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x744ff9(0x1d9)](_0x3764e3,_0x49f309,tier)),SceneManager[_0x744ff9(0x266)]()):tier=Math['max'](_0x49f309,tier);}VisuMZ[_0x744ff9(0x1c4)](VisuMZ[label][_0x744ff9(0x2e3)],_0x24632a[_0x744ff9(0x223)]);})(pluginData),PluginManager[_0x24e169(0x1f3)](pluginData[_0x24e169(0x2ae)],_0x24e169(0x1f6),_0xc21d50=>{const _0x4dcb4f=_0x24e169;VisuMZ[_0x4dcb4f(0x1c4)](_0xc21d50,_0xc21d50);const _0x4a6d26=_0xc21d50[_0x4dcb4f(0x271)];$gameSystem[_0x4dcb4f(0x24f)](_0x4a6d26);}),PluginManager[_0x24e169(0x1f3)](pluginData[_0x24e169(0x2ae)],_0x24e169(0x295),_0x4054ce=>{const _0x884a67=_0x24e169;VisuMZ[_0x884a67(0x1c4)](_0x4054ce,_0x4054ce);const _0x5359a3=_0x4054ce[_0x884a67(0x271)];$gameSystem[_0x884a67(0x216)](_0x5359a3);}),PluginManager[_0x24e169(0x1f3)](pluginData[_0x24e169(0x2ae)],_0x24e169(0x1f2),_0x48dd46=>{const _0x418fc6=_0x24e169;VisuMZ[_0x418fc6(0x1c4)](_0x48dd46,_0x48dd46),$gameSystem[_0x418fc6(0x216)]([]);}),PluginManager[_0x24e169(0x1f3)](pluginData['name'],'AlertStealthMode',_0x5f2cc0=>{const _0x4f3a72=_0x24e169;VisuMZ[_0x4f3a72(0x1c4)](_0x5f2cc0,_0x5f2cc0);const _0x2bfd88=_0x5f2cc0[_0x4f3a72(0x289)];$gamePlayer[_0x4f3a72(0x2a1)](_0x2bfd88);}),VisuMZ[_0x24e169(0x204)]['RegExp']={'Preemptive':/<(?:PREEMPTIVE|PRE-EMPTIVE|PRE EMPTIVE)>/i,'Surprise':/<(?:SURPRISE|SURPRISED)>/i,'NoAdvantage':/<NO ADVANTAGE>/i,'Chance':/<CHANCE>/i,'FollowerTrigger':/<(?:FOLLOWER TRIGGER|FOLLOWERTRIGGER)>/i,'TouchDirectionLock':/<(?:ENCOUNTER LOCK|ENCOUNTER DIRECTION LOCK)>/i,'AlertDefault':/<ALERT>/i,'AlertRange':/<ALERT RANGE:[ ](\d+)>/i,'AlertDash':/<ALERT DASH>/i,'AlertWalk':/<ALERT WALK>/i,'AlertLock':/<ALERT TIME:[ ](\d+)>/i,'AlertFovAngle':/<ALERT FOV ANGLE:[ ](\d+)>/i,'AlertShowFov':/<ALERT SHOW FOV>/i,'AlertHideFov':/<ALERT HIDE FOV>/i,'AlertResponse':/<ALERT RESPONSE:[ ](.*)>/i,'AlertBalloon':/<(?:ALERT|RESPONSE) BALLOON:[ ](.*)>/i,'AlertReactDelay':/<ALERT REACT DELAY:[ ](\d+)>/i,'AlertCommonEvent':/<ALERT COMMON EVENT:[ ](\d+)>/i,'AlertSoundName':/<ALERT SOUND NAME:[ ](.*)>/i,'AlertSoundVolume':/<ALERT SOUND VOLUME:[ ](\d+)>/i,'AlertSoundPitch':/<ALERT SOUND PITCH:[ ](\d+)>/i,'AlertSoundPan':/<ALERT SOUND PAN:[ ](.*)>/i,'ReturnPosition':/<RETURN POSITION>/i,'StayPosition':/<STAY POSITION>/i,'ReturnStartBalloon':/<IDLE BALLOON:[ ](.*)>/i,'ReturnEndBalloon':/<RETURNING BALLOON:[ ](.*)>/i,'ReturnWait':/<RETURN TIME:[ ](\d+)>/i,'BlockVisionTag':/<(?:BLOCK|BLOCKED) VISION (?:TAG|TAGS):[ ](.*)>/i,'BlockVisionRegion':/<(?:BLOCK|BLOCKED) VISION (?:REGION|REGIONS):[ ](.*)>/i},VisuMZ['EncounterEffects'][_0x24e169(0x1f9)]=BattleManager['startBattle'],BattleManager[_0x24e169(0x301)]=function(){const _0x214e66=_0x24e169;this['checkForcedAdvantage'](),VisuMZ['EncounterEffects'][_0x214e66(0x1f9)][_0x214e66(0x2f2)](this),this[_0x214e66(0x263)]();},BattleManager[_0x24e169(0x2e9)]=function(){const _0x47b045=_0x24e169,_0xc3350e=$gameSystem[_0x47b045(0x202)]();if(!_0xc3350e)return;switch(_0xc3350e[_0x47b045(0x21d)]()[_0x47b045(0x2f7)]()){case _0x47b045(0x287):this['_preemptive']=!![],this['_surprise']=![];break;case _0x47b045(0x20f):this[_0x47b045(0x2e8)]=![],this['_surprise']=!![];break;case'no\x20advantage':this['_preemptive']=![],this[_0x47b045(0x24c)]=![];break;case _0x47b045(0x1e5):VisuMZ[_0x47b045(0x275)][_0x47b045(0x2c8)][_0x47b045(0x2f2)](this);break;}},BattleManager[_0x24e169(0x263)]=function(){const _0x387ed3=_0x24e169,_0x4d4c02=VisuMZ['EncounterEffects']['Settings'][_0x387ed3(0x28c)];if(!_0x4d4c02)return;let _0x36819d=0x0;if(this[_0x387ed3(0x2e8)])_0x36819d=_0x4d4c02['Preemptive']||0x0;else this[_0x387ed3(0x24c)]?_0x36819d=_0x4d4c02[_0x387ed3(0x203)]||0x0:_0x36819d=_0x4d4c02['Normal']||0x0;_0x36819d>0x0&&$gameTemp['reserveCommonEvent'](_0x36819d);},VisuMZ[_0x24e169(0x204)][_0x24e169(0x2c4)]=Game_System[_0x24e169(0x1e8)]['initialize'],Game_System[_0x24e169(0x1e8)]['initialize']=function(){const _0x25fe7c=_0x24e169;VisuMZ[_0x25fe7c(0x204)]['Game_System_initialize'][_0x25fe7c(0x2f2)](this),this['initEncounterEffects_ForcedAdvantage']();},Game_System[_0x24e169(0x1e8)][_0x24e169(0x1df)]=function(){const _0x2bedee=_0x24e169;this[_0x2bedee(0x24d)]=[];},Game_System[_0x24e169(0x1e8)][_0x24e169(0x21a)]=function(){const _0x2a3978=_0x24e169;return this[_0x2a3978(0x24d)]===undefined&&this[_0x2a3978(0x1df)](),this['_forcedAdvantage'];},Game_System['prototype'][_0x24e169(0x202)]=function(){const _0x4e4154=_0x24e169;if($gameTroop&&$gameTroop[_0x4e4154(0x221)]()){const _0x133ba9=VisuMZ[_0x4e4154(0x204)][_0x4e4154(0x277)],_0x5a60b4=$gameTroop[_0x4e4154(0x221)]()['name'];if(_0x5a60b4['match'](_0x133ba9[_0x4e4154(0x2e1)]))return _0x4e4154(0x287);else{if(_0x5a60b4[_0x4e4154(0x1bb)](_0x133ba9[_0x4e4154(0x203)]))return'surprise';else{if(_0x5a60b4[_0x4e4154(0x1bb)](_0x133ba9[_0x4e4154(0x26b)]))return'no\x20advantage';else{if(_0x5a60b4['match'](_0x133ba9[_0x4e4154(0x1b9)]))return _0x4e4154(0x1e5);}}}}return this['getForcedAdvantage']()[_0x4e4154(0x24e)]();},Game_System[_0x24e169(0x1e8)][_0x24e169(0x216)]=function(_0x1c668e){const _0x48c7fa=_0x24e169;this[_0x48c7fa(0x24d)]===undefined&&this[_0x48c7fa(0x1df)](),this[_0x48c7fa(0x24d)]=_0x1c668e;},Game_System[_0x24e169(0x1e8)]['addForcedAdvantage']=function(_0x3b1e6f){const _0x3e306f=_0x24e169;this[_0x3e306f(0x24d)]===undefined&&this[_0x3e306f(0x1df)](),this[_0x3e306f(0x24d)]=this[_0x3e306f(0x24d)][_0x3e306f(0x1c0)](_0x3b1e6f);},VisuMZ[_0x24e169(0x204)][_0x24e169(0x2db)]=Game_Map[_0x24e169(0x1e8)][_0x24e169(0x226)],Game_Map['prototype']['setup']=function(_0x256770){const _0x577603=_0x24e169;VisuMZ['EncounterEffects']['Game_Map_setup'][_0x577603(0x2f2)](this,_0x256770),this[_0x577603(0x1d2)](),this['setupEncounterEffectsData']();},Game_Map[_0x24e169(0x1e8)][_0x24e169(0x1d2)]=function(){const _0x2a2129=_0x24e169;this[_0x2a2129(0x25b)]=[],this[_0x2a2129(0x302)]=[];},Game_Map[_0x24e169(0x1e8)]['setupEncounterEffectsData']=function(){const _0xf873d1=_0x24e169,_0x458324=this[_0xf873d1(0x237)]();if(!_0x458324)return;const _0x503fb4=VisuMZ[_0xf873d1(0x204)]['RegExp'],_0x382d39=_0x458324[_0xf873d1(0x1d3)],_0x1317e7=$dataMap?$dataMap['note']:'';if(_0x382d39['match'](_0x503fb4[_0xf873d1(0x2dc)])){const _0x5cb36c=String(RegExp['$1'])[_0xf873d1(0x2b5)](',')[_0xf873d1(0x2fe)](_0x36b12d=>Number(_0x36b12d));this[_0xf873d1(0x25b)]=this[_0xf873d1(0x25b)]['concat'](_0x5cb36c);}if(_0x382d39['match'](_0x503fb4['BlockVisionRegion'])){const _0x26637d=String(RegExp['$1'])['split'](',')['map'](_0x7e66af=>Number(_0x7e66af));this[_0xf873d1(0x302)]=this[_0xf873d1(0x302)][_0xf873d1(0x1c0)](_0x26637d);}if(_0x1317e7[_0xf873d1(0x1bb)](_0x503fb4[_0xf873d1(0x2dc)])){const _0x588d7c=String(RegExp['$1'])[_0xf873d1(0x2b5)](',')[_0xf873d1(0x2fe)](_0x25f4b9=>Number(_0x25f4b9));this['_alertBlockVisionTags']=this[_0xf873d1(0x25b)][_0xf873d1(0x1c0)](_0x588d7c);}if(_0x1317e7[_0xf873d1(0x1bb)](_0x503fb4[_0xf873d1(0x28e)])){const _0x3d49e7=String(RegExp['$1'])[_0xf873d1(0x2b5)](',')[_0xf873d1(0x2fe)](_0x3de02e=>Number(_0x3de02e));this[_0xf873d1(0x302)]=this[_0xf873d1(0x302)][_0xf873d1(0x1c0)](_0x3d49e7);}},Game_Map['prototype'][_0x24e169(0x2eb)]=function(_0x5456cc,_0xfd8543){const _0x258a76=_0x24e169;if(this[_0x258a76(0x25b)]===undefined)return![];if(this['_alertBlockVisionRegions']===undefined)return![];const _0x314c22=this[_0x258a76(0x25a)](_0x5456cc,_0xfd8543);if(this['_alertBlockVisionTags'][_0x258a76(0x2b7)](_0x314c22))return!![];const _0x58e49b=this[_0x258a76(0x211)](_0x5456cc,_0xfd8543);if(this[_0x258a76(0x302)][_0x258a76(0x2b7)](_0x58e49b))return!![];return![];},Game_CharacterBase['prototype']['debugShowDirections']=function(_0x284a1c){const _0xc26803=_0x24e169;return;console['log'](_0xc26803(0x1c3)+this['x']+',\x20\x20This\x20Y:\x20'+this['y']),console['log'](_0xc26803(0x1cb)+_0x284a1c['x']+_0xc26803(0x2ec)+_0x284a1c['y']);},Game_CharacterBase['prototype'][_0x24e169(0x27e)]=function(_0x5f1cc5){const _0x2b1f9c=_0x24e169;switch(this[_0x2b1f9c(0x272)]()){case 0x1:return[0x8,0x9,0x6][_0x2b1f9c(0x1ee)](_0x5f1cc5[_0x2b1f9c(0x272)]());case 0x2:return[0x7,0x8,0x9][_0x2b1f9c(0x1ee)](_0x5f1cc5['direction']());case 0x3:return[0x4,0x7,0x8][_0x2b1f9c(0x1ee)](_0x5f1cc5['direction']());case 0x4:return[0x9,0x6,0x3][_0x2b1f9c(0x1ee)](_0x5f1cc5[_0x2b1f9c(0x272)]());case 0x6:return[0x7,0x4,0x1][_0x2b1f9c(0x1ee)](_0x5f1cc5['direction']());case 0x7:return[0x2,0x3,0x6][_0x2b1f9c(0x1ee)](_0x5f1cc5[_0x2b1f9c(0x272)]());case 0x8:return[0x1,0x2,0x3][_0x2b1f9c(0x1ee)](_0x5f1cc5['direction']());case 0x9:return[0x4,0x1,0x2]['contains'](_0x5f1cc5[_0x2b1f9c(0x272)]());}return![];},Game_CharacterBase['prototype'][_0x24e169(0x2c2)]=function(_0x27968d){const _0x2a15ce=_0x24e169;switch(this[_0x2a15ce(0x272)]()){case 0x1:return[0x4,0x1,0x2][_0x2a15ce(0x1ee)](_0x27968d['direction']());case 0x2:return[0x1,0x2,0x3][_0x2a15ce(0x1ee)](_0x27968d[_0x2a15ce(0x272)]());case 0x3:return[0x2,0x3,0x6]['contains'](_0x27968d[_0x2a15ce(0x272)]());case 0x4:return[0x7,0x4,0x1][_0x2a15ce(0x1ee)](_0x27968d[_0x2a15ce(0x272)]());case 0x6:return[0x9,0x6,0x3]['contains'](_0x27968d[_0x2a15ce(0x272)]());case 0x7:return[0x4,0x7,0x8][_0x2a15ce(0x1ee)](_0x27968d['direction']());case 0x8:return[0x7,0x8,0x9][_0x2a15ce(0x1ee)](_0x27968d['direction']());case 0x9:return[0x8,0x9,0x6][_0x2a15ce(0x1ee)](_0x27968d['direction']());}return![];},Game_CharacterBase[_0x24e169(0x1e8)][_0x24e169(0x291)]=function(_0xb42c9b){const _0x817139=_0x24e169;switch(this[_0x817139(0x272)]()){case 0x1:return[0x4,0x7,0x8,0x2,0x3,0x6][_0x817139(0x1ee)](_0xb42c9b[_0x817139(0x272)]());case 0x2:return[0x7,0x4,0x1,0x9,0x6,0x3][_0x817139(0x1ee)](_0xb42c9b['direction']());case 0x3:return[0x4,0x1,0x2,0x8,0x9,0x6][_0x817139(0x1ee)](_0xb42c9b[_0x817139(0x272)]());case 0x4:return[0x7,0x8,0x9,0x1,0x2,0x3][_0x817139(0x1ee)](_0xb42c9b[_0x817139(0x272)]());case 0x6:return[0x7,0x8,0x9,0x1,0x2,0x3][_0x817139(0x1ee)](_0xb42c9b['direction']());case 0x7:return[0x4,0x1,0x2,0x8,0x9,0x6][_0x817139(0x1ee)](_0xb42c9b[_0x817139(0x272)]());case 0x8:return[0x7,0x4,0x1,0x9,0x6,0x3][_0x817139(0x1ee)](_0xb42c9b[_0x817139(0x272)]());case 0x9:return[0x4,0x7,0x8,0x2,0x3,0x6][_0x817139(0x1ee)](_0xb42c9b[_0x817139(0x272)]());}return![];},Game_CharacterBase['prototype'][_0x24e169(0x256)]=function(_0x1b60cb){const _0x654c43=_0x24e169;this['debugShowDirections'](_0x1b60cb);switch(this[_0x654c43(0x272)]()){case 0x1:return _0x1b60cb['y']>this['y'];case 0x2:return _0x1b60cb['y']>this['y'];case 0x3:return _0x1b60cb['y']>this['y'];case 0x4:return _0x1b60cb['x']<this['x'];case 0x6:return _0x1b60cb['x']>this['x'];case 0x7:return _0x1b60cb['y']<this['y'];case 0x8:return _0x1b60cb['y']<this['y'];case 0x9:return _0x1b60cb['y']<this['y'];}return![];},Game_CharacterBase['prototype'][_0x24e169(0x270)]=function(_0x498069){this['debugShowDirections'](_0x498069);switch(this['direction']()){case 0x1:return _0x498069['y']<this['y'];case 0x2:return _0x498069['y']<this['y'];case 0x3:return _0x498069['y']<this['y'];case 0x4:return _0x498069['x']>this['x'];case 0x6:return _0x498069['x']<this['x'];case 0x7:return _0x498069['y']>this['y'];case 0x8:return _0x498069['y']>this['y'];case 0x9:return _0x498069['y']>this['y'];}return![];},Game_CharacterBase[_0x24e169(0x1e8)][_0x24e169(0x207)]=function(_0x4aae11){const _0x4e5b05=_0x24e169;this[_0x4e5b05(0x23f)](_0x4aae11);switch(this['direction']()){case 0x1:return this['x']<_0x4aae11['x']&&this['y']>_0x4aae11['y']||this['x']>_0x4aae11['x']&&this['y']<_0x4aae11['y'];case 0x2:return this['x']!==_0x4aae11['x'];case 0x3:return this['x']>_0x4aae11['x']&&this['y']>_0x4aae11['y']||this['x']<_0x4aae11['x']&&this['y']<_0x4aae11['y'];case 0x4:return this['y']!==_0x4aae11['y'];break;case 0x6:return this['y']!==_0x4aae11['y'];break;case 0x7:return this['x']>_0x4aae11['x']&&this['y']>_0x4aae11['y']||this['x']<_0x4aae11['x']&&this['y']<_0x4aae11['y'];case 0x8:return this['x']!==_0x4aae11['x'];case 0x9:return this['x']<_0x4aae11['x']&&this['y']>_0x4aae11['y']||this['x']>_0x4aae11['x']&&this['y']<_0x4aae11['y'];}return![];},VisuMZ['EncounterEffects'][_0x24e169(0x1d0)]=Game_Player[_0x24e169(0x1e8)][_0x24e169(0x252)],Game_Player['prototype'][_0x24e169(0x252)]=function(){const _0x41a109=_0x24e169;VisuMZ[_0x41a109(0x204)][_0x41a109(0x1d0)][_0x41a109(0x2f2)](this),this[_0x41a109(0x2f0)]();},Game_Player[_0x24e169(0x1e8)][_0x24e169(0x2f0)]=function(){const _0x29b02a=_0x24e169;this[_0x29b02a(0x241)]=![];},Game_Player[_0x24e169(0x1e8)][_0x24e169(0x25d)]=function(){const _0x50e309=_0x24e169;return this['_alertStealthMode']===undefined&&this[_0x50e309(0x2f0)](),this[_0x50e309(0x241)];},Game_Player[_0x24e169(0x1e8)]['setAlertStealthMode']=function(_0x295a40){const _0x28d328=_0x24e169;this[_0x28d328(0x241)]===undefined&&this[_0x28d328(0x2f0)](),this[_0x28d328(0x241)]=_0x295a40;},Game_Player['prototype'][_0x24e169(0x227)]=function(){const _0x3875bd=_0x24e169;if(this[_0x3875bd(0x1fc)]())return this['processRepelEncounters'](),0x0;const _0x44ac50=VisuMZ[_0x3875bd(0x204)][_0x3875bd(0x2e3)][_0x3875bd(0x1e0)];if(!_0x44ac50)return 0x1;let _0x5abe73=0x1;return $gameMap[_0x3875bd(0x2b2)](this['x'],this['y'])&&(_0x5abe73*=_0x44ac50[_0x3875bd(0x2c9)]),$gameParty[_0x3875bd(0x21f)]()&&(_0x5abe73*=0.5),this[_0x3875bd(0x2b0)]()&&(_0x5abe73*=_0x44ac50[_0x3875bd(0x261)]),this[_0x3875bd(0x210)]()&&(_0x5abe73*=_0x44ac50[_0x3875bd(0x274)]),this['isLureEncounters']()&&(_0x5abe73=this[_0x3875bd(0x284)](_0x5abe73)),_0x5abe73;},Game_Player[_0x24e169(0x1e8)][_0x24e169(0x1fc)]=function(){const _0x399d5c=_0x24e169,_0x12ddd0=VisuMZ['EncounterEffects'][_0x399d5c(0x2e3)]['RepelLure'];if(!_0x12ddd0)return![];if(_0x12ddd0[_0x399d5c(0x2d4)]<=0x0)return![];const _0x1efd29=$gameVariables[_0x399d5c(0x29f)](_0x12ddd0[_0x399d5c(0x2d4)])||0x0;return _0x1efd29>0x0;},Game_Player[_0x24e169(0x1e8)][_0x24e169(0x22e)]=function(){const _0x59877f=_0x24e169,_0x28481f=VisuMZ[_0x59877f(0x204)][_0x59877f(0x2e3)][_0x59877f(0x2f1)];if(!_0x28481f)return;if(_0x28481f[_0x59877f(0x2d4)]<=0x0)return;let _0x4d7505=$gameVariables[_0x59877f(0x29f)](_0x28481f['RepelVariable'])||0x0;const _0x423d73=_0x4d7505>0x0;_0x423d73&&(_0x4d7505--,$gameVariables[_0x59877f(0x267)](_0x28481f[_0x59877f(0x2d4)],_0x4d7505),_0x4d7505<=0x0&&_0x28481f[_0x59877f(0x1fa)]>0x0&&$gameTemp[_0x59877f(0x280)](_0x28481f[_0x59877f(0x1fa)]));},Game_Player['prototype']['isLureEncounters']=function(){const _0x2997ee=_0x24e169,_0x29c72f=VisuMZ[_0x2997ee(0x204)][_0x2997ee(0x2e3)][_0x2997ee(0x2f1)];if(!_0x29c72f)return![];if(_0x29c72f[_0x2997ee(0x258)]<=0x0)return![];const _0x110412=$gameVariables[_0x2997ee(0x29f)](_0x29c72f[_0x2997ee(0x258)])||0x0;return _0x110412>0x0;},Game_Player['prototype'][_0x24e169(0x284)]=function(_0x54f96e){const _0x559fa4=_0x24e169,_0x321787=VisuMZ['EncounterEffects'][_0x559fa4(0x2e3)][_0x559fa4(0x2f1)];if(!_0x321787)return _0x54f96e;if(_0x321787[_0x559fa4(0x258)]<=0x0)return _0x54f96e;let _0x44a739=$gameVariables[_0x559fa4(0x29f)](_0x321787[_0x559fa4(0x258)])||0x0;const _0x10ad31=_0x44a739>0x0;return _0x10ad31&&(_0x44a739--,$gameVariables[_0x559fa4(0x267)](_0x321787['LureVariable'],_0x44a739),_0x44a739<=0x0&&_0x321787[_0x559fa4(0x253)]>0x0&&$gameTemp[_0x559fa4(0x280)](_0x321787[_0x559fa4(0x253)])),_0x54f96e*=_0x321787['LureRate'],_0x54f96e+=_0x321787[_0x559fa4(0x2ed)],_0x54f96e;},VisuMZ['EncounterEffects']['Game_Event_refresh']=Game_Event[_0x24e169(0x1e8)][_0x24e169(0x1f8)],Game_Event['prototype'][_0x24e169(0x1f8)]=function(){const _0x1c07fa=_0x24e169,_0x4d15e6=this[_0x1c07fa(0x1d4)];VisuMZ[_0x1c07fa(0x204)]['Game_Event_refresh'][_0x1c07fa(0x2f2)](this),_0x4d15e6!==this['_pageIndex']&&this[_0x1c07fa(0x264)]();},VisuMZ[_0x24e169(0x204)][_0x24e169(0x288)]=Game_Event['prototype']['clearPageSettings'],Game_Event[_0x24e169(0x1e8)]['clearPageSettings']=function(){const _0x5d2809=_0x24e169;VisuMZ[_0x5d2809(0x204)]['Game_Event_clearPageSettings'][_0x5d2809(0x2f2)](this),this[_0x5d2809(0x28b)]();},VisuMZ['EncounterEffects']['Game_Event_setupPageSettings']=Game_Event[_0x24e169(0x1e8)]['setupPageSettings'],Game_Event[_0x24e169(0x1e8)][_0x24e169(0x1fd)]=function(){const _0x2a4519=_0x24e169;VisuMZ['EncounterEffects'][_0x2a4519(0x279)][_0x2a4519(0x2f2)](this),this['setupEncounterEffectsEffects']();},Game_Event[_0x24e169(0x1e8)][_0x24e169(0x264)]=function(){const _0x2656d9=_0x24e169;this[_0x2656d9(0x28b)](),this[_0x2656d9(0x290)](),this[_0x2656d9(0x1bf)]();},Game_Event['prototype'][_0x24e169(0x290)]=function(){const _0x250981=_0x24e169,_0x215601=this[_0x250981(0x1ba)]()[_0x250981(0x1d3)];if(_0x215601==='')return;this['checkEncounterEffectsStringTags'](_0x215601);},Game_Event[_0x24e169(0x1e8)][_0x24e169(0x1bf)]=function(){const _0x5f5219=_0x24e169;if(!this['page']())return;const _0x58e7f9=this[_0x5f5219(0x297)]();let _0x4632bc='';for(const _0x1a54c3 of _0x58e7f9){if([0x6c,0x198][_0x5f5219(0x2b7)](_0x1a54c3[_0x5f5219(0x1d5)])){if(_0x4632bc!=='')_0x4632bc+='\x0a';_0x4632bc+=_0x1a54c3[_0x5f5219(0x223)][0x0];}}this['checkEncounterEffectsStringTags'](_0x4632bc);},Game_Event['prototype'][_0x24e169(0x28b)]=function(){const _0x4fd79c=_0x24e169;this['_EncounterEffectsFollowerTrigger']=![],this['_EncounterEffectsTouchDirectionLock']=![],this[_0x4fd79c(0x247)]();},Game_Event[_0x24e169(0x1e8)]['checkEncounterEffectsStringTags']=function(_0x39f40c){const _0x51c875=_0x24e169,_0x4f0e15=VisuMZ[_0x51c875(0x204)][_0x51c875(0x277)];_0x39f40c['match'](_0x4f0e15['FollowerTrigger'])&&(this[_0x51c875(0x2d1)]=!![],this[_0x51c875(0x1fb)]=0x2),_0x39f40c[_0x51c875(0x1bb)](_0x4f0e15[_0x51c875(0x26e)])&&(this[_0x51c875(0x2ad)]=!![]),this['checkEncounterEffectsStringTagsChase'](_0x39f40c);},VisuMZ[_0x24e169(0x204)][_0x24e169(0x2cf)]=Game_Event[_0x24e169(0x1e8)][_0x24e169(0x26f)],Game_Event['prototype'][_0x24e169(0x26f)]=function(_0xe76531,_0xabc733){const _0x5e1cda=_0x24e169;VisuMZ[_0x5e1cda(0x204)]['Game_Event_checkEventTriggerTouch'][_0x5e1cda(0x2f2)](this,_0xe76531,_0xabc733),this['checkEventFollowerTriggerTouch'](_0xe76531,_0xabc733);},Game_Event['prototype'][_0x24e169(0x1f0)]=function(_0x129586,_0x1d15cb){const _0x4a9895=_0x24e169;if(!this['_EncounterEffectsFollowerTrigger'])return;if($gameMap[_0x4a9895(0x1da)]())return;if(this['_trigger']!==0x2)return;if(this[_0x4a9895(0x260)]())return;if(!this['isNormalPriority']())return;const _0xb89e09=$gamePlayer[_0x4a9895(0x2cb)]()['visibleFollowers']();for(const _0x3de139 of _0xb89e09){if(!_0x3de139)continue;if(_0x3de139[_0x4a9895(0x2b6)](_0x129586,_0x1d15cb)){this['start']();break;}}},VisuMZ[_0x24e169(0x204)][_0x24e169(0x1c9)]=Game_Event[_0x24e169(0x1e8)]['lock'],Game_Event[_0x24e169(0x1e8)][_0x24e169(0x1fe)]=function(){const _0x13a2d2=_0x24e169;this['_processEncounterDirectionLock']=!!this[_0x13a2d2(0x2ad)],VisuMZ['EncounterEffects'][_0x13a2d2(0x1c9)][_0x13a2d2(0x2f2)](this),this[_0x13a2d2(0x2ca)]=undefined;},VisuMZ[_0x24e169(0x204)]['Game_Character_turnTowardPlayer']=Game_Character[_0x24e169(0x1e8)][_0x24e169(0x1d8)],Game_Character[_0x24e169(0x1e8)][_0x24e169(0x1d8)]=function(){const _0x5af72b=_0x24e169;if(this[_0x5af72b(0x2ca)])return;VisuMZ[_0x5af72b(0x204)]['Game_Character_turnTowardPlayer'][_0x5af72b(0x2f2)](this);},Game_Event[_0x24e169(0x1e8)][_0x24e169(0x247)]=function(){const _0x2b33cf=_0x24e169,_0x43ce72=VisuMZ[_0x2b33cf(0x204)][_0x2b33cf(0x2e3)][_0x2b33cf(0x2ac)];this[_0x2b33cf(0x283)]={'enabled':![],'alerted':![],'alertRange':_0x43ce72[_0x2b33cf(0x2a8)],'alertDash':_0x43ce72[_0x2b33cf(0x246)],'alertLock':_0x43ce72[_0x2b33cf(0x29d)],'chaseTime':_0x43ce72[_0x2b33cf(0x29d)],'fovAngle':_0x43ce72[_0x2b33cf(0x2b3)],'showFov':_0x43ce72[_0x2b33cf(0x2ce)],'response':_0x43ce72[_0x2b33cf(0x2e0)],'alertBalloon':VisuMZ[_0x2b33cf(0x204)][_0x2b33cf(0x2da)](_0x43ce72[_0x2b33cf(0x1f5)]),'commonEvent':_0x43ce72['CommonEvent'],'reactDelay':_0x43ce72[_0x2b33cf(0x234)],'reactTime':_0x43ce72[_0x2b33cf(0x234)],'alertSoundName':_0x43ce72[_0x2b33cf(0x296)],'alertSoundVolume':_0x43ce72['SoundVolume'],'alertSoundPitch':_0x43ce72[_0x2b33cf(0x28d)],'alertSoundPan':_0x43ce72[_0x2b33cf(0x27b)],'returnStartBalloon':VisuMZ[_0x2b33cf(0x204)][_0x2b33cf(0x2da)](_0x43ce72[_0x2b33cf(0x27f)]),'returnEndBalloon':VisuMZ[_0x2b33cf(0x204)]['ConvertBallonTextToID'](_0x43ce72[_0x2b33cf(0x259)]),'returnAfter':_0x43ce72[_0x2b33cf(0x2a4)],'returnWaiting':![],'returnTime':_0x43ce72['ReturnWait'],'returnWait':_0x43ce72[_0x2b33cf(0x2ab)],'returning':![],'returnX':this['x'],'returnY':this['y'],'returnDir':this['direction']()};},VisuMZ[_0x24e169(0x204)]['ConvertBallonTextToID']=function(_0x47c772){const _0x40342c=_0x24e169;let _0x314fe3=0x0;switch(_0x47c772['toUpperCase']()[_0x40342c(0x2f7)]()){case'!':case'EXCLAMATION':_0x314fe3=0x1;break;case'?':case _0x40342c(0x262):_0x314fe3=0x2;break;case'MUSIC':case'NOTE':case _0x40342c(0x29e):case _0x40342c(0x293):case _0x40342c(0x1e3):_0x314fe3=0x3;break;case'HEART':case'LOVE':_0x314fe3=0x4;break;case _0x40342c(0x292):_0x314fe3=0x5;break;case'SWEAT':_0x314fe3=0x6;break;case'COBWEB':case _0x40342c(0x1e6):case _0x40342c(0x232):_0x314fe3=0x7;break;case _0x40342c(0x1ff):case'...':_0x314fe3=0x8;break;case _0x40342c(0x2b1):case _0x40342c(0x218):case _0x40342c(0x1e4):case _0x40342c(0x22a):case _0x40342c(0x235):_0x314fe3=0x9;break;case'Z':case'ZZ':case _0x40342c(0x200):case _0x40342c(0x251):_0x314fe3=0xa;break;case'USER-DEFINED\x201':_0x314fe3=0xb;break;case _0x40342c(0x2af):_0x314fe3=0xc;break;case _0x40342c(0x23d):_0x314fe3=0xd;break;case _0x40342c(0x2d8):_0x314fe3=0xe;break;case'USER-DEFINED\x205':_0x314fe3=0xf;break;}return _0x314fe3;},Game_Event[_0x24e169(0x1e8)][_0x24e169(0x20e)]=function(_0x4dfb00){const _0x552c25=_0x24e169,_0x2e2fdd=VisuMZ[_0x552c25(0x204)][_0x552c25(0x277)],_0x540c9a=this[_0x552c25(0x283)];_0x4dfb00[_0x552c25(0x1bb)](_0x2e2fdd[_0x552c25(0x22d)])&&(_0x540c9a[_0x552c25(0x2f9)]=!![]);_0x4dfb00[_0x552c25(0x1bb)](_0x2e2fdd[_0x552c25(0x2a8)])&&(_0x540c9a[_0x552c25(0x2f9)]=!![],_0x540c9a[_0x552c25(0x2e2)]=Number(RegExp['$1'])||0x1);_0x4dfb00['match'](_0x2e2fdd['AlertDash'])&&(_0x540c9a[_0x552c25(0x2f9)]=!![],_0x540c9a[_0x552c25(0x209)]=![]);_0x4dfb00[_0x552c25(0x1bb)](_0x2e2fdd['AlertWalk'])&&(_0x540c9a[_0x552c25(0x2f9)]=!![],_0x540c9a[_0x552c25(0x209)]=![]);_0x4dfb00['match'](_0x2e2fdd[_0x552c25(0x29d)])&&(_0x540c9a[_0x552c25(0x2f9)]=!![],_0x540c9a[_0x552c25(0x2c6)]=Number(RegExp['$1'])||0x1,_0x540c9a['chaseTime']=Number(RegExp['$1'])||0x1);_0x4dfb00[_0x552c25(0x1bb)](_0x2e2fdd['AlertFovAngle'])&&(_0x540c9a[_0x552c25(0x2f9)]=!![],_0x540c9a[_0x552c25(0x231)]=Number(RegExp['$1'])||0x1);_0x4dfb00[_0x552c25(0x1bb)](_0x2e2fdd[_0x552c25(0x26a)])&&(_0x540c9a[_0x552c25(0x2f9)]=!![],_0x540c9a[_0x552c25(0x249)]=!![]);_0x4dfb00[_0x552c25(0x1bb)](_0x2e2fdd['AlertHideFov'])&&(_0x540c9a[_0x552c25(0x2f9)]=!![],_0x540c9a[_0x552c25(0x249)]=![]);_0x4dfb00['match'](_0x2e2fdd[_0x552c25(0x2a5)])&&(_0x540c9a['enabled']=!![],_0x540c9a['response']=String(RegExp['$1'])['toLowerCase']()['trim']());if(_0x4dfb00[_0x552c25(0x1bb)](_0x2e2fdd['AlertBalloon'])){_0x540c9a[_0x552c25(0x2f9)]=!![];const _0x1bb7c2=VisuMZ[_0x552c25(0x204)][_0x552c25(0x2da)](String(RegExp['$1']));_0x540c9a['alertBalloon']=_0x1bb7c2;}_0x4dfb00['match'](_0x2e2fdd[_0x552c25(0x1e2)])&&(_0x540c9a['enabled']=!![],_0x540c9a['reactDelay']=Number(RegExp['$1'])||0x1,_0x540c9a[_0x552c25(0x2cc)]=Number(RegExp['$1'])||0x1);_0x4dfb00[_0x552c25(0x1bb)](_0x2e2fdd[_0x552c25(0x23b)])&&(_0x540c9a['enabled']=!![],_0x540c9a['commonEvent']=Number(RegExp['$1'])||0x0);_0x4dfb00[_0x552c25(0x1bb)](_0x2e2fdd[_0x552c25(0x27c)])&&(_0x540c9a[_0x552c25(0x2f9)]=!![],_0x540c9a['alertSoundName']=String(RegExp['$1']));_0x4dfb00['match'](_0x2e2fdd[_0x552c25(0x2b9)])&&(_0x540c9a[_0x552c25(0x2f9)]=!![],_0x540c9a[_0x552c25(0x2c5)]=Number(RegExp['$1'])||0x1);_0x4dfb00[_0x552c25(0x1bb)](_0x2e2fdd[_0x552c25(0x265)])&&(_0x540c9a[_0x552c25(0x2f9)]=!![],_0x540c9a[_0x552c25(0x1cc)]=Number(RegExp['$1'])||0x1);_0x4dfb00[_0x552c25(0x1bb)](_0x2e2fdd[_0x552c25(0x1dc)])&&(_0x540c9a[_0x552c25(0x2f9)]=!![],_0x540c9a[_0x552c25(0x2fd)]=Number(RegExp['$1'])||0x1);_0x4dfb00[_0x552c25(0x1bb)](_0x2e2fdd[_0x552c25(0x240)])&&(_0x540c9a[_0x552c25(0x2f9)]=!![],_0x540c9a[_0x552c25(0x1bc)]=!![]);_0x4dfb00[_0x552c25(0x1bb)](_0x2e2fdd[_0x552c25(0x23c)])&&(_0x540c9a[_0x552c25(0x2f9)]=!![],_0x540c9a[_0x552c25(0x1bc)]=![]);if(_0x4dfb00[_0x552c25(0x1bb)](_0x2e2fdd[_0x552c25(0x27f)])){_0x540c9a[_0x552c25(0x2f9)]=!![];const _0x8f91e9=VisuMZ[_0x552c25(0x204)]['ConvertBallonTextToID'](String(RegExp['$1']));_0x540c9a[_0x552c25(0x2d0)]=_0x8f91e9;}if(_0x4dfb00[_0x552c25(0x1bb)](_0x2e2fdd['ReturnEndBalloon'])){_0x540c9a[_0x552c25(0x2f9)]=!![];const _0x3b31ca=VisuMZ[_0x552c25(0x204)][_0x552c25(0x2da)](String(RegExp['$1']));_0x540c9a[_0x552c25(0x2bd)]=_0x3b31ca;}_0x4dfb00[_0x552c25(0x1bb)](_0x2e2fdd[_0x552c25(0x2ab)])&&(_0x540c9a[_0x552c25(0x2f9)]=!![],_0x540c9a[_0x552c25(0x2d2)]=Number(RegExp['$1'])||0x1,_0x540c9a[_0x552c25(0x242)]=Number(RegExp['$1'])||0x1);},Game_Event[_0x24e169(0x1e8)][_0x24e169(0x2ee)]=function(){const _0x36503b=_0x24e169;return this[_0x36503b(0x283)]===undefined&&this[_0x36503b(0x1f8)](),this['_EncounterEffects_EventChaseData'];},Game_Event[_0x24e169(0x1e8)][_0x24e169(0x23a)]=function(){const _0x200e83=_0x24e169;if(this[_0x200e83(0x1be)])return![];return this[_0x200e83(0x2ee)]()[_0x200e83(0x2f9)];},Game_Event[_0x24e169(0x1e8)][_0x24e169(0x254)]=function(){const _0x217f04=_0x24e169;return this[_0x217f04(0x2ee)]()[_0x217f04(0x2bf)]||this['chaseData']()[_0x217f04(0x2f6)];},Game_Event[_0x24e169(0x1e8)]['isChaseAlerted']=function(){const _0x5753de=_0x24e169;return this[_0x5753de(0x2ee)]()[_0x5753de(0x224)];},VisuMZ[_0x24e169(0x204)][_0x24e169(0x27a)]=Game_Event[_0x24e169(0x1e8)]['updateSelfMovement'],Game_Event[_0x24e169(0x1e8)][_0x24e169(0x1d7)]=function(){const _0x5a73f0=_0x24e169;if(this[_0x5a73f0(0x2c7)]())this[_0x5a73f0(0x20c)]();else this[_0x5a73f0(0x254)]()?this[_0x5a73f0(0x24a)]():VisuMZ['EncounterEffects'][_0x5a73f0(0x27a)][_0x5a73f0(0x2f2)](this);},Game_Event['prototype']['updateSelfMovementAlerted']=function(){const _0x49be45=_0x24e169,_0x4184fc=this[_0x49be45(0x2ee)]();if(_0x4184fc[_0x49be45(0x2cc)]>0x0){_0x4184fc['reactTime']-=0x1;return;}switch(_0x4184fc[_0x49be45(0x219)]){case _0x49be45(0x243):this[_0x49be45(0x228)]();break;case _0x49be45(0x298):this['moveTowardPlayer']();break;case _0x49be45(0x2c3):this['moveAwayFromPlayer']();break;case'random':this[_0x49be45(0x1c5)]();break;default:VisuMZ['EncounterEffects']['Game_Event_updateSelfMovement'][_0x49be45(0x2f2)](this);break;}},Game_Event[_0x24e169(0x1e8)][_0x24e169(0x228)]=function(){const _0x1c1ac7=_0x24e169;if(!this[_0x1c1ac7(0x1c1)]())return;this['_eventAlertChaseCache']=this[_0x1c1ac7(0x2a2)]||{},this[_0x1c1ac7(0x2a2)][_0x1c1ac7(0x2a3)]=$gamePlayer['x'],this['_eventAlertChaseCache']['playerY']=$gamePlayer['y'],this[_0x1c1ac7(0x2a2)][_0x1c1ac7(0x2de)]=this['x'],this['_eventAlertChaseCache']['eventY']=this['y'];const _0x103493=Imported[_0x1c1ac7(0x1c8)]&&$gameMap[_0x1c1ac7(0x255)]();let _0x574d2d=$gamePlayer['x'],_0x46d0be=$gamePlayer['y'],_0x12096a=0x0;_0x103493?(_0x12096a=this[_0x1c1ac7(0x25f)](_0x574d2d,_0x46d0be),this[_0x1c1ac7(0x250)](_0x12096a)):(_0x12096a=this[_0x1c1ac7(0x29c)](_0x574d2d,_0x46d0be),this[_0x1c1ac7(0x2df)](_0x12096a));},Game_Event[_0x24e169(0x1e8)][_0x24e169(0x1c1)]=function(){const _0x56bdc0=_0x24e169;if(this[_0x56bdc0(0x2a9)]())return![];this['_eventAlertChaseCache']=this[_0x56bdc0(0x2a2)]||{};if(this[_0x56bdc0(0x2a2)]['playerX']!==$gamePlayer['x'])return!![];if(this[_0x56bdc0(0x2a2)]['playerY']!==$gamePlayer['y'])return!![];if(this[_0x56bdc0(0x2a2)][_0x56bdc0(0x2de)]!==this['x'])return!![];if(this[_0x56bdc0(0x2a2)][_0x56bdc0(0x2bb)]!==this['y'])return!![];return![];},Game_Event['prototype'][_0x24e169(0x24a)]=function(){const _0x485bf0=_0x24e169,_0x46773d=this[_0x485bf0(0x2ee)]();if(!_0x46773d[_0x485bf0(0x2f6)])return;let _0x2db1a0=_0x46773d[_0x485bf0(0x1ca)],_0x2551a2=_0x46773d[_0x485bf0(0x303)];this['x']===_0x2db1a0&&this['y']===_0x2551a2&&(_0x46773d[_0x485bf0(0x2f6)]=![],this[_0x485bf0(0x21e)]=0x0,this[_0x485bf0(0x1db)](_0x46773d[_0x485bf0(0x2f8)]));const _0x371ff4=Imported[_0x485bf0(0x1c8)]&&$gameMap[_0x485bf0(0x255)]();let _0x2612d2=0x0;_0x371ff4?(_0x2612d2=this[_0x485bf0(0x25f)](_0x2db1a0,_0x2551a2),this[_0x485bf0(0x250)](_0x2612d2)):(_0x2612d2=this[_0x485bf0(0x29c)](_0x2db1a0,_0x2551a2),this[_0x485bf0(0x2df)](_0x2612d2));},VisuMZ[_0x24e169(0x204)][_0x24e169(0x244)]=Game_Event['prototype'][_0x24e169(0x1c6)],Game_Event[_0x24e169(0x1e8)][_0x24e169(0x1c6)]=function(){const _0x29e779=_0x24e169;VisuMZ['EncounterEffects']['Game_Event_update'][_0x29e779(0x2f2)](this),this[_0x29e779(0x1dd)]();},Game_Event[_0x24e169(0x1e8)][_0x24e169(0x1dd)]=function(){const _0x356090=_0x24e169;if(!this[_0x356090(0x23a)]())return;this[_0x356090(0x2c7)]()?this[_0x356090(0x276)]():(this[_0x356090(0x28a)](),this[_0x356090(0x2ff)]());},Game_Event[_0x24e169(0x1e8)][_0x24e169(0x276)]=function(){const _0x5635dc=_0x24e169,_0x339198=this['chaseData'](),_0x4d68ee=this[_0x5635dc(0x268)]();if(_0x4d68ee>_0x339198[_0x5635dc(0x2e2)]){_0x339198[_0x5635dc(0x24b)]--;if(_0x339198[_0x5635dc(0x24b)]>0x0)return;_0x339198[_0x5635dc(0x224)]=![],_0x339198['returnAfter']?(_0x339198[_0x5635dc(0x2bf)]=!![],_0x339198['returnTime']=_0x339198[_0x5635dc(0x242)],$gameTemp['requestBalloon'](this,_0x339198[_0x5635dc(0x2d0)])):$gameTemp[_0x5635dc(0x230)](this,_0x339198[_0x5635dc(0x2bd)]);}else _0x339198['chaseTime']=_0x339198['alertLock'];},Game_Event[_0x24e169(0x1e8)][_0x24e169(0x28a)]=function(){const _0x9c3250=_0x24e169,_0xcb6b2b=this[_0x9c3250(0x2ee)]();if(!_0xcb6b2b[_0x9c3250(0x2bf)])return;_0xcb6b2b[_0x9c3250(0x2d2)]-=0x1,_0xcb6b2b[_0x9c3250(0x2d2)]<=0x0&&(_0xcb6b2b['returnWaiting']=![],_0xcb6b2b['returning']=!![],$gameTemp[_0x9c3250(0x230)](this,_0xcb6b2b[_0x9c3250(0x2bd)]));},Game_Event[_0x24e169(0x1e8)][_0x24e169(0x2ff)]=function(){const _0x1e737e=_0x24e169;if($gamePlayer[_0x1e737e(0x25d)]())return;const _0xafab2f=this['chaseData'](),_0xbdc879=Math[_0x1e737e(0x20d)](this['getAlertDistanceToClosest']());if(_0xbdc879>_0xafab2f[_0x1e737e(0x2e2)])return;const _0x48b583=this[_0x1e737e(0x300)]();if(_0x48b583>_0xafab2f[_0x1e737e(0x231)])return;if(!this['isAlertLineOfVisionClear']())return;_0xafab2f[_0x1e737e(0x224)]=!![],_0xafab2f['chaseTime']=_0xafab2f[_0x1e737e(0x2c6)],_0xafab2f[_0x1e737e(0x2bf)]=![],_0xafab2f[_0x1e737e(0x2f6)]=![],$gameTemp[_0x1e737e(0x230)](this,_0xafab2f[_0x1e737e(0x20b)]),_0xafab2f[_0x1e737e(0x2cc)]=_0xafab2f['reactDelay'];_0xafab2f[_0x1e737e(0x27d)]>0x0&&$gameTemp[_0x1e737e(0x280)](_0xafab2f[_0x1e737e(0x27d)]);if(_0xafab2f[_0x1e737e(0x273)]!==''){const _0x506521={'name':_0xafab2f[_0x1e737e(0x273)],'volume':_0xafab2f[_0x1e737e(0x2c5)],'pitch':_0xafab2f[_0x1e737e(0x1cc)],'pan':_0xafab2f[_0x1e737e(0x2fd)]};AudioManager[_0x1e737e(0x2a6)](_0x506521);}},Game_Event['prototype']['getAlertTargets']=function(){const _0x2f3f1d=_0x24e169,_0x161268=[$gamePlayer];if($gamePlayer[_0x2f3f1d(0x2cb)]()['_visible'])for(let _0x315e3b=0x0;_0x315e3b<$gamePlayer['followers']()[_0x2f3f1d(0x2ea)][_0x2f3f1d(0x205)];_0x315e3b++){const _0x4e86ac=$gamePlayer[_0x2f3f1d(0x2cb)]()[_0x2f3f1d(0x281)](_0x315e3b);if(!_0x4e86ac)continue;if(!_0x4e86ac[_0x2f3f1d(0x25e)]())continue;_0x161268[_0x2f3f1d(0x2fa)](_0x4e86ac);}return _0x161268;},Game_Event['prototype'][_0x24e169(0x268)]=function(){const _0x1ef660=_0x24e169,_0x202787=[];_0x202787[_0x1ef660(0x2fa)](this[_0x1ef660(0x2fc)]());for(let _0xd35ae8=0x0;_0xd35ae8<$gamePlayer['followers']()['_data'][_0x1ef660(0x205)];_0xd35ae8++){_0x202787[_0x1ef660(0x2fa)](this['getAlertDistanceToFollower'](_0xd35ae8));}return Math['min'](..._0x202787);},Game_Event[_0x24e169(0x1e8)][_0x24e169(0x2fc)]=function(){const _0x433a12=_0x24e169;return this[_0x433a12(0x222)]($gamePlayer);},Game_Event[_0x24e169(0x1e8)][_0x24e169(0x1d6)]=function(_0x399f07){const _0x558538=_0x24e169;if(!$gamePlayer[_0x558538(0x2cb)]()[_0x558538(0x2d5)])return 0x3e7;const _0xa8513e=$gamePlayer[_0x558538(0x2cb)]()[_0x558538(0x281)](_0x399f07);if(!_0xa8513e[_0x558538(0x25e)]())return 0x3e7;return this[_0x558538(0x222)](_0xa8513e);},Game_Event[_0x24e169(0x1e8)][_0x24e169(0x222)]=function(_0x4104c4){const _0x2d7c93=_0x24e169,_0x285763=this['x'],_0x219db0=this['y'],_0x42f6b2=_0x4104c4['x'],_0x17cefc=_0x4104c4['y'],_0x5ef2c2=Math['pow'](_0x42f6b2-_0x285763,0x2),_0x1df5b0=Math[_0x2d7c93(0x220)](_0x17cefc-_0x219db0,0x2);return Math[_0x2d7c93(0x29a)](_0x5ef2c2+_0x1df5b0);},Game_Event[_0x24e169(0x1e8)][_0x24e169(0x300)]=function(_0x40a289){const _0x3ff2cf=_0x24e169;return this[_0x3ff2cf(0x201)]($gamePlayer,_0x40a289);},Game_Event[_0x24e169(0x1e8)][_0x24e169(0x214)]=function(_0x335fc4,_0x143a71){const _0x529fae=_0x24e169;if(!$gamePlayer[_0x529fae(0x2cb)]()[_0x529fae(0x2d5)])return 0x3e7;const _0x1765ca=$gamePlayer[_0x529fae(0x2cb)]()[_0x529fae(0x281)](_0x335fc4);if(!_0x1765ca[_0x529fae(0x25e)]())return 0x3e7;return this[_0x529fae(0x201)](_0x1765ca,_0x143a71);},Game_Event[_0x24e169(0x1e8)][_0x24e169(0x201)]=function(_0x4b9b3e,_0x1c1701){const _0x4f291b=_0x24e169,_0x4da2c7=this['x'],_0x283221=this['y'],_0x2b407e=_0x4b9b3e['x'],_0x56ec69=_0x4b9b3e['y'];let _0x588ff1=Math[_0x4f291b(0x29b)](_0x56ec69-_0x283221,_0x2b407e-_0x4da2c7)*0xb4/Math['PI'];if(!_0x1c1701){const _0x10cfcc=[0x0,0xe1,0x10e,0x13b,0xb4,0x0,0x0,0x87,0x5a,0x2d][this[_0x4f291b(0x272)]()];_0x588ff1+=_0x10cfcc,_0x588ff1+=this[_0x4f291b(0x2ee)]()[_0x4f291b(0x231)]/0x2;}while(_0x588ff1<0x0)_0x588ff1+=0x168;while(_0x588ff1>=0x168)_0x588ff1-=0x168;return _0x588ff1;},Game_Event[_0x24e169(0x1e8)][_0x24e169(0x1e9)]=function(){const _0x222960=_0x24e169;let _0x3564d1=![];const _0x2bab97=this[_0x222960(0x268)]();_0x3564d1&&(console[_0x222960(0x299)]('Player:\x20',$gamePlayer['x'],$gamePlayer['y']),console['log'](_0x222960(0x2f4),this['x'],this['y']));const _0x2466c4=this[_0x222960(0x25c)]();for(const _0x9e6a5 of _0x2466c4){if(!_0x9e6a5)continue;let _0x13cfab=_0x2bab97,_0x365c94=this[_0x222960(0x201)](_0x9e6a5,!![]),_0x54ceb2=_0x365c94*Math['PI']/0xb4;while(_0x13cfab>=0x0){const _0x3ac6ee=Math[_0x222960(0x20d)](this['x']+_0x13cfab*Math[_0x222960(0x245)](_0x54ceb2)),_0x189910=Math[_0x222960(0x20d)](this['y']+_0x13cfab*Math[_0x222960(0x2ef)](_0x54ceb2));_0x13cfab-=0x1;_0x3564d1&&console[_0x222960(0x299)](_0x222960(0x2d3),_0x365c94,_0x13cfab,_0x3ac6ee,_0x189910);if($gameMap[_0x222960(0x2eb)](_0x3ac6ee,_0x189910))return![];}}return!![];},VisuMZ[_0x24e169(0x204)][_0x24e169(0x2dd)]=Game_CharacterBase[_0x24e169(0x1e8)][_0x24e169(0x2d6)],Game_CharacterBase[_0x24e169(0x1e8)][_0x24e169(0x2d6)]=function(){const _0x108f89=_0x24e169;if(this['constructor']===Game_Event&&this[_0x108f89(0x2c7)]()&&this[_0x108f89(0x2ee)]()[_0x108f89(0x209)])return this[_0x108f89(0x233)]();return VisuMZ[_0x108f89(0x204)]['Game_CharacterBase_isDashing'][_0x108f89(0x2f2)](this);},VisuMZ[_0x24e169(0x204)]['Game_CharacterBase_setBalloonPose']=Game_CharacterBase[_0x24e169(0x1e8)][_0x24e169(0x2f3)],Game_CharacterBase[_0x24e169(0x1e8)][_0x24e169(0x2f3)]=function(_0x16dd9d,_0x2c6893){const _0x3b49e0=_0x24e169;if(this['constructor']===Game_Event){if(this['isChaseReturning']()||this[_0x3b49e0(0x2c7)]())return;}VisuMZ[_0x3b49e0(0x204)][_0x3b49e0(0x236)][_0x3b49e0(0x2f2)](this,_0x16dd9d,_0x2c6893);},Game_Interpreter[_0x24e169(0x1e8)][_0x24e169(0x2e5)]=function(){const _0x44620c=_0x24e169,_0x551e7a=$gameMap[_0x44620c(0x1ba)](this[_0x44620c(0x215)]());if(!_0x551e7a)return![];const _0x22c725=$gamePlayer;return _0x551e7a[_0x44620c(0x27e)](_0x22c725)&&_0x22c725[_0x44620c(0x256)](_0x551e7a);},Game_Interpreter['prototype'][_0x24e169(0x1f1)]=function(){const _0x40563d=_0x24e169,_0x5c7d72=$gameMap[_0x40563d(0x1ba)](this[_0x40563d(0x215)]());if(!_0x5c7d72)return![];const _0x5e4769=$gamePlayer;return _0x5c7d72[_0x40563d(0x2c2)](_0x5e4769)&&_0x5e4769[_0x40563d(0x270)](_0x5c7d72);},Game_Interpreter[_0x24e169(0x1e8)][_0x24e169(0x22c)]=function(){const _0x433cb0=_0x24e169,_0x11569d=$gameMap[_0x433cb0(0x1ba)](this[_0x433cb0(0x215)]());if(!_0x11569d)return![];const _0x5660a0=$gamePlayer;return _0x11569d[_0x433cb0(0x291)](_0x5660a0)&&_0x5660a0[_0x433cb0(0x207)](_0x11569d);},Game_Interpreter[_0x24e169(0x1e8)]['checkPlayerFacingEventFront']=function(){const _0x530363=_0x24e169,_0x18ab5b=$gameMap[_0x530363(0x1ba)](this['eventId']());if(!_0x18ab5b)return![];const _0x1ee8b9=$gamePlayer;return _0x1ee8b9[_0x530363(0x27e)](_0x18ab5b)&&_0x18ab5b['isPositionFrontOf'](_0x1ee8b9);},Game_Interpreter[_0x24e169(0x1e8)][_0x24e169(0x206)]=function(){const _0x5a01d6=_0x24e169,_0x595558=$gameMap[_0x5a01d6(0x1ba)](this[_0x5a01d6(0x215)]());if(!_0x595558)return![];const _0x5a7f7e=$gamePlayer;return _0x5a7f7e[_0x5a01d6(0x2c2)](_0x595558)&&_0x595558[_0x5a01d6(0x270)](_0x5a7f7e);},Game_Interpreter[_0x24e169(0x1e8)][_0x24e169(0x28f)]=function(){const _0x16ada6=_0x24e169,_0x504727=$gameMap[_0x16ada6(0x1ba)](this[_0x16ada6(0x215)]());if(!_0x504727)return![];const _0x89739b=$gamePlayer;return _0x89739b[_0x16ada6(0x291)](_0x504727)&&_0x504727[_0x16ada6(0x207)](_0x89739b);},VisuMZ[_0x24e169(0x204)][_0x24e169(0x225)]=Sprite_Character[_0x24e169(0x1e8)][_0x24e169(0x1c6)],Sprite_Character[_0x24e169(0x1e8)]['update']=function(){const _0x200b45=_0x24e169;VisuMZ[_0x200b45(0x204)][_0x200b45(0x225)][_0x200b45(0x2f2)](this),this[_0x200b45(0x2a7)]();},Sprite_Character[_0x24e169(0x1e8)][_0x24e169(0x2a7)]=function(){this['createAlertFovSprite']();},Sprite_Character['prototype']['createAlertFovSprite']=function(){const _0x245767=_0x24e169;if(this[_0x245767(0x1bd)])return;if(!this[_0x245767(0x2cd)])return;this[_0x245767(0x1bd)]=new Sprite_AlertFovSprite(this),this['_alertFovSprite']['z']=0x6,this[_0x245767(0x2cd)]['addChild'](this[_0x245767(0x1bd)]);};function Sprite_AlertFovSprite(){const _0x5b94bb=_0x24e169;this[_0x5b94bb(0x2fb)](...arguments);}Sprite_AlertFovSprite['prototype']=Object[_0x24e169(0x1cf)](Sprite[_0x24e169(0x1e8)]),Sprite_AlertFovSprite[_0x24e169(0x1e8)][_0x24e169(0x1ef)]=Sprite_AlertFovSprite,Sprite_AlertFovSprite[_0x24e169(0x1e8)]['initialize']=function(_0x17dcf6){const _0x533438=_0x24e169;this[_0x533438(0x2c0)]=_0x17dcf6,this[_0x533438(0x212)]=_0x17dcf6[_0x533438(0x212)],Sprite[_0x533438(0x1e8)]['initialize'][_0x533438(0x2f2)](this),this[_0x533438(0x252)](),this['update']();},Sprite_AlertFovSprite['prototype'][_0x24e169(0x252)]=function(){const _0x2c928d=_0x24e169;this[_0x2c928d(0x229)]['x']=0.5,this['anchor']['y']=0.5,this['_characterErased']=![];if(!this[_0x2c928d(0x212)])return;if(this[_0x2c928d(0x212)][_0x2c928d(0x1ef)]!==Game_Event)return;this[_0x2c928d(0x2ea)]={};},Sprite_AlertFovSprite['prototype'][_0x24e169(0x1c6)]=function(){const _0x167d48=_0x24e169;Sprite[_0x167d48(0x1e8)][_0x167d48(0x1c6)]['call'](this);if(!this[_0x167d48(0x212)])return;if(this[_0x167d48(0x212)][_0x167d48(0x1ef)]!==Game_Event)return;this[_0x167d48(0x1c7)]();if(!this[_0x167d48(0x2ea)][_0x167d48(0x2f9)])return;this[_0x167d48(0x22f)](),this[_0x167d48(0x208)]();},Sprite_AlertFovSprite[_0x24e169(0x1e8)][_0x24e169(0x1c7)]=function(){const _0x121b3d=_0x24e169;if(!this[_0x121b3d(0x2b8)]())return;this['_data']=JsonEx['makeDeepCopy'](this[_0x121b3d(0x212)][_0x121b3d(0x2ee)]());if(this[_0x121b3d(0x2ea)][_0x121b3d(0x2f9)]&&!this[_0x121b3d(0x212)][_0x121b3d(0x1be)])this[_0x121b3d(0x286)]();else{this[_0x121b3d(0x248)]=this[_0x121b3d(0x212)]['_erased'];if(this[_0x121b3d(0x2aa)])this['bitmap'][_0x121b3d(0x26c)]();this[_0x121b3d(0x2aa)]=new Bitmap(0x1,0x1);}},Sprite_AlertFovSprite[_0x24e169(0x1e8)][_0x24e169(0x2b8)]=function(){const _0x42f697=_0x24e169,_0x473a4d=this[_0x42f697(0x212)][_0x42f697(0x2ee)](),_0x1f1aeb=this[_0x42f697(0x2ea)];if(_0x473a4d[_0x42f697(0x2f9)]!==_0x1f1aeb['enabled'])return!![];if(_0x473a4d[_0x42f697(0x2e2)]!==_0x1f1aeb['alertRange'])return!![];if(_0x473a4d[_0x42f697(0x231)]!==_0x1f1aeb[_0x42f697(0x231)])return!![];if(this[_0x42f697(0x248)]!==this[_0x42f697(0x212)][_0x42f697(0x1be)])return!![];return![];},Sprite_AlertFovSprite['prototype']['createFovBitmap']=function(){const _0x53df7f=_0x24e169,_0x3575df=this[_0x53df7f(0x2ea)];if(!_0x3575df[_0x53df7f(0x249)])return;const _0x50e952=VisuMZ[_0x53df7f(0x204)][_0x53df7f(0x2e3)][_0x53df7f(0x2ac)],_0x338c77=_0x3575df[_0x53df7f(0x231)],_0xcf4350=Math[_0x53df7f(0x1de)]((_0x3575df[_0x53df7f(0x2e2)]+0.4)*$gameMap[_0x53df7f(0x1ce)]()),_0x1f7602=_0x50e952[_0x53df7f(0x213)],_0xb71d2a=_0x50e952['FovColor2'];this[_0x53df7f(0x2aa)]=new Bitmap(_0xcf4350*0x2,_0xcf4350*0x2),this[_0x53df7f(0x2aa)][_0x53df7f(0x1e7)](_0xcf4350,_0x338c77,_0x1f7602,_0xb71d2a),this[_0x53df7f(0x2d9)]=0x1;},Bitmap[_0x24e169(0x1e8)][_0x24e169(0x1e7)]=function(_0x206362,_0x5dcca0,_0x35f07f,_0x1ec3f9){const _0x1375a9=_0x24e169,_0x4f3b06=this['context'],_0x37f216=_0x5dcca0*(Math['PI']/0xb4),_0x2401b7=_0x206362*0x2,_0x1803bf=_0x4f3b06[_0x1375a9(0x1e1)](_0x206362,_0x206362,0x18,_0x206362,_0x206362,_0x206362);_0x1803bf[_0x1375a9(0x20a)](0x0,_0x35f07f),_0x1803bf[_0x1375a9(0x20a)](0.85,_0x1ec3f9),_0x1803bf['addColorStop'](0x1,_0x35f07f),_0x4f3b06[_0x1375a9(0x21b)](),_0x4f3b06[_0x1375a9(0x22b)]=_0x1803bf,_0x4f3b06[_0x1375a9(0x2bc)](),_0x4f3b06[_0x1375a9(0x239)](_0x206362,_0x206362),_0x4f3b06[_0x1375a9(0x2a0)](_0x2401b7,_0x206362),_0x4f3b06[_0x1375a9(0x1cd)](_0x206362,_0x206362,_0x206362,0x0,_0x37f216),_0x4f3b06[_0x1375a9(0x2a0)](_0x206362,_0x206362),_0x4f3b06[_0x1375a9(0x2e4)](),_0x4f3b06['restore'](),this[_0x1375a9(0x1f4)][_0x1375a9(0x1c6)]();},Sprite_AlertFovSprite[_0x24e169(0x1e8)][_0x24e169(0x22f)]=function(){const _0x35a088=_0x24e169;this['x']=this['_source']['x'],this['y']=this[_0x35a088(0x2c0)]['y']-this[_0x35a088(0x2c0)][_0x35a088(0x294)]/0x2;},Sprite_AlertFovSprite[_0x24e169(0x1e8)][_0x24e169(0x208)]=function(){const _0x1e9808=_0x24e169,_0x7372c0=this[_0x1e9808(0x2ea)];let _0x4907c5=_0x7372c0[_0x1e9808(0x231)]/-0x2;_0x4907c5+=[0x0,0x87,0x5a,0x2d,0xb4,0x0,0x0,0xe1,0x10e,0x13b][this[_0x1e9808(0x212)]['_direction']],this[_0x1e9808(0x1ec)]=_0x4907c5;};