"Fight Or Die"

Game Description:

"Fight or Die" is a winter-themed game about surviving angry snowmen rushing at you and your house by slashing through them with your sword!
The aim is to get a good score and survive for the longest you can, while the enemies pick up speed over time!

How to run the game server (easiest option - make sure to have node.js installed):
1. Open the project in Visual Studio Code
2. Open the terminal using Ctrl + `
3. Type "npm install", followed by "npm start" afterwards
4. Follow the link in the terminal (http://localhost:3000)


How to play:

Walk around the area (using WASD) to walk over to the snowmen that will be coming at you from the bottom of the screen.
Use arrow keys (Left Arrow and Right Arrow) to rotate your character so that your sword touches the enemies.
Health (or HP) is lost upon either the player colliding with a snowman, or a snowman getting past the player and colliding with the brick house.
Rules are simple: don't let your health reach 0!



Controls: 

W, A, S, D (movement), Left Arrow and Right Arrow (character rotation)

The current game code can be found in "resources/js/gamePage.js"



Final Key Points Achieved:
· Game has a server side and correctly deployed using Node.js. 404 page is deployed correctly. 
· Game websites are fully working with correct login, register web interface. 
· Game websites are responsive to different screen sizes.
· Complicated landscape and visual effect display and with a good loading speed. 
· Game level design: game level or difficulty increase as the user score increases. 
· Game audio: audio (music and sound) is working and can be used in the game. 
· Game is working on the latest Google Chrome web browser for both PC and mobile devices (including game UI interaction). 
· Has “Readme” documentation (Can be formatted in .txt or .doc ), clearly describe: how to play the game, the game project 
folder structure (database design if any) and the key points you have achieved.



Game Project Folder Structure:

.
├── index.js                  # The code for nodejs that routes to web pages, including 404 page, and has a login system
├── resources                 # Source files (or source code files and assets)
    ├── audio                     # All audio files used in game (background music and sound effects)
    ├── css                       # CSS files for all the web pages
    ├── images                    # Images used for textures
    ├── js                        # Game code
    ├── pages                     # HTML files for all the web pages (except index.html)
├── index.html                # The main web page
└── README.txt



References:

-"18a How to detect collisions three.js", 2022, online video, 25 February, flanniganable, viewed 6 November 2022, https://youtu.be/9H3HPq-BTMo

-"How do I create and HTML button that acts like a link", 2010, Stack Overflow question, answered by Adam, viewed 2 December 2022,   https://stackoverflow.com/questions/2906582/how-do-i-create-an-html-button-that-acts-like-a-link

-"How to add background music and sound effects three.js", 2022, online video, 14 March, flanniganable, viewed 2 December, https://www.youtube.com/watch?v=91sjdKmqxdE

-"How To Create A Loading Screen For Your Three.js App", 2022, 14 April, Wael Yasmina, viewed on 3 December, https://www.youtube.com/watch?v=zMzuPIiznQ4

-Lab tutorials