# Kin's Chronicle

## How to Contribute
1. RPG Maker MZ v1.70
   1. Corescript v1.4.0
1. Current NW.js SDK for your OS:
   1. linux-x64 v0.80.0 https://dl.nwjs.io/v0.80.0/nwjs-sdk-v0.80.0-linux-x64.tar.gz
   1. win-x64 v0.76.0 https://dl.nwjs.io/v0.76.0/nwjs-sdk-v0.76.0-win-x64.zip
   1. osx-x64 v0.80.0 https://dl.nwjs.io/v0.80.0/nwjs-sdk-v0.80.0-osx-x64.zip
1. Pre-commit hook for prettifying JSON
   1. RPG Maker does some minifying with the JSON it creates that maks it difficult to keep sommit sizes small and legible.
   1. Install NodeJS: https://nodejs.org/en/download
   1. Create the file ./.git/hooks/pre-commit with the following contents:
````
#!/usr/bin/env node
# Creator: contentdeleted
# Source: https://forums.rpgmakerweb.com/index.php?threads/automatically-pretty-json-files-for-clean-git-commit-diffs-using-git-hooks.108122/post-1310607
# Script modified to restrict changes to .json files only

const data_directory = "data"
let command = '';
const fs = require('fs')
const path = require('path');
const { exec } = require('child_process');
const { parse } = require('path');
try {
    console.log("Running cleanup...");
    fs.readdir("data", function (err, files) {
        //handling error
        if (err || files.length <= 0) {
            console.error(err)
            process.exit(1)
        }
   
        files.forEach(file => {
			// Only mess with JSONs
			if (path.extname(file) == ".json") {
				// Load file, pretty the JSON, and write it back
				const json = fs.readFileSync(`${data_directory}/${file}`)
				const parsed = JSON.parse(json);
				// Keep scroll static, this changes every time you view a file
				// and will cause conflicts
				if(file == 'MapInfos.json') {
					parsed.forEach(obj => {
						if(obj && obj.scrollX) {
							obj.scrollX = 0
							obj.scrollY = 0
						}
					});
				}
				// Keep version static, this changes each time you save a file
				if(file == 'System.json') {
					parsed.versionId = "latest"
				}
				fs.writeFileSync(`${data_directory}/${file}`, JSON.stringify(parsed, null, 2))
				command += ` ${data_directory}/${file}`
			}
        })
   
        // Add the file back to the staging since it changed
        exec(`git add ${command} -f`, (err, stdout, stderr) => {
            if (err) {
                console.error(err)
                process.exit(1)
            }

            console.log(`stdout: ${stdout}`)
            console.log(`stderr: ${stderr}`)
            process.exit(0)
        })
   
    });
} catch (err) {
    console.error(err)
    process.exit(1)
}
````
   
# Credits
## Story
Consulting by Brent Fisher @ https://www.brentfisher.net/

## Music
Composed and mastered by Jeremy Palmer

## Art
Librarium Animated Battlers from Aekashics @ http://akashics.moe/  
Additional Tarot & Steam Trading Cards from Craig Fisher @ https://ibispress.org/  
Equipment & Armor by Alexander Zagorulko @ https://www.instagram.com/a_ravlik/  
Icons by Caz Wolf @ http://cazwolf.itch.io/  
Zodiac wheel by FreePik @ http://www.freepik.com/  
XBox Controller Layout by Alphathon @ https://commons.wikimedia.org/wiki/User:Alphathon  
DualShock Layout by Tokyoship @ https://commons.wikimedia.org/wiki/User:Tokyoship  

VisuStella™: Armory Axe and Staff [Copyright](C) 2021 VisuStella™  
VisuStella™: Armory Bow and Club [Copyright](C) 2021 VisuStella™  
VisuStella™: Armory Katana and Katar [Copyright](C) 2021 VisuStella™  
VisuStella™: Armory Sword and Spear [Copyright](C) 2021 VisuStella™  
VisuStella™: Atelier Potions and Tonics [Copyright](C) VisuStella, LLC  
http://www.visustella.com/  

## Coding and Support
VisustellaMZ @ http://www.visustella.com/  
MZ3D by CutieVirus @ https://cutievirus.itch.io/  
HUD Maker Ultra Pro by SumRndmDde @ http://sumrndm.site/  
Battle HUD by Moghunter @ https://mogplugins.wordpress.com/  
rabbitMap by poorrabbit @ https://poorrabbit.itch.io/  
End Phase Triggers, Magic Circles, and Particles from HimeWorks @ https://himeworks.com/  
CycloneSteam by Hudell @ https://github.com/Hudell/  
GreenWorks by Greenheart Games Pty. Ltd. @ https://github.com/greenheartgames/  
Skill Type Listing code by MALIKI79 @ https://forums.rpgmakerweb.com/index.php?members/maliki79.231/  
Credits Scene by Galv @ https://www.patreon.com/Galv  

## Streaming Stars
Ap0calypticCheese @ http://twitch.tv/Ap0calypticCheese  
eckoray @ http://twitch.tv/eckoray  
Mana @ https://www.youtube.com/c/manasp  
ReadySetIndieGames @ http://twitch.tv/readysetindiegames  
Supherbyus @ http://twitch.tv/supherbyus  
TheElectricMindset @ http://twitch.tv/theelectricmindset  
Tsusaku Cohenat @ https://www.youtube.com/channel/UCn5EHufnPHERTtIuLkOl1tw  

## Alpha Test All-Stars
eckoray  
Havoc  
Interested Person  
Jrad  
Onts  
Sasiah  
Syrel  
WispyMouse  
willsama974  
and many, many more!

## Special Thanks To
Omerta138  
AveSharia  
JSkrillz  
XxEpic12xX  
Project Aurora Hearts @ https://aurora-hearts.itch.io/
