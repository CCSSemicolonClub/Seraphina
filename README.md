# Semicolon Seraphina
A Baseline Discord Bot for Learning Purposes, maintained by the Semicolon Club, Powered by Aoi.JS

# Features
A barebone Discord Bot Code that can be easily modified to meet your specific needs.

# Getting your Discord Bot Token, and inviting your bot
1. Go to the Discord Developer Portal (https://discord.com/developers/applications)
2. Click New Application and give your application a name.
3. Navigate to "Bot" section, and click "Display Token" or "Reset Token" (It will say Reset Token if you have 2FA enabled, you will need to provide a 6 digit code from your authenticator to display the token)

* At the same time, make sure that `Presence Intent`, `Server Members Intent`, and `Message Content Intent` should be ON.

4. Copy the provided Bot Token and take note of it for later use.
5. Navigate to "OAuth2" section, under it is URL Generator, click it.
6. Click "bot" as scope, and then check all the permissions that the bot may need (for the sake of this tutorial, we'll just click Administrator to give it full bot permissions, but make sure to calculate your permission scope next time), and then copy the Generated Link from below.
7. Navigate to the Generated Link and invite it to your own server (you can also invite it to a server that you manage but make sure that you have the MANAGE_SERVER permission and the permission of the guild owner)

# Installing Git (Windows)
1. Download Git https://git-scm.com/downloads
2. Install the downloaded executable file and wait for it to finish the installation.
3. Open a Command Prompt and confirm the existence of Git by typing `git --version` (git --version command checks the current version of Git installed)

# Installing Git (Debian/Ubuntu or other similar Linux Distros)
1. Open a Terminal and run the command `apt-get install git`, if it shows an error, then use `sudo apt-get install git`
2. On the same terminal, type `git --version` (git --version command checks the current version of Git installed)

# Installing NodeJS (Windows)
1. Download NodeJS https://nodejs.org/en/download , and download the Current Version of NodeJS.
2. Install the downloaded executable file and wait for it to finish the installation.
3. Open a Command Prompt and confirm the existence of NodeJS and NPM by typing `node -v` and `npm -v` (node -v command checks the current version of Node, while npm -v checks the current version of npm installed).

# Installing NodeJS (Debian/Ubuntu or other similar Linux Distros)
1. Add NordSource PPA curl -s https://deb.nodesource.com/setup_16.x | sudo bash
2. Install NodeJS by typing `sudo apt-get install nodejs -y`
3. On the same Terminal, type `node -v` and `npm -v` (node -v command checks the current version of Node, while npm -v checks the current version of npm installed).

# Installing Aoi.JS
For this to actually work, we need to install a dependency called Aoi.JS

1. Type `npm install aoi.js@latest` in the root folder of the repository, and wait for it to finish to download.

# Activating the Discord Bot
1. Clone this GitHub Repository by using `git clone "link"` Example: `git clone https://github.com/foobar/wow` , replace the link with the link to this repository, and without the double quotations.
2. Create a file called `config.json` and copy the contents of config.json.example and populate it with your Discord Token and preferred prefix. 

The TOKEN portion should be filled with the Discord Bot Token you got earlier.
The PREFIX portion should be filled with a prefix you want the bot to respond to, you can leave it at blank if you don't want to use a prefix.

3. Open a Command Prompt/Terminal in the root of the Repository folder and type `node index.js`, your bot should now be online in Discord.

4. To confirm that your bot is alive and is accepting responses, type `(yourprefix) ping`, It should reply with the current bot ping

Congratulations! You successfully have your own Discord Bot! You can expand it to your likings and customize it as your own!

# Contribution
If you wish to contribute, please detail out your intention in the pull request and we will add it if your code is well documented and constructed.

If you wish to add features, you may check out the Aoi.JS website and documentation to enhance your knowledge about Aoi.JS

Website: https://aoi.js.org/
Documentation: https://aoi.js.org/guides/setup/

# Feature Request
You may open an issue or email us at operations@ccssemicolon.club or semicolon_spc@lspu.edu.ph