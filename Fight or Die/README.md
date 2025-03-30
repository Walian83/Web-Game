<h1>Fight Or Die</h1>

<h2>Game Description:</h2>

"Fight or Die" is a winter-themed game about surviving angry snowmen rushing at you and your house by slashing through them with your sword!
The aim is to get a good score and survive for the longest you can, while the enemies pick up speed over time!

<h2>How to run the game server (easiest option - make sure to have node.js installed):</h2>

1. Open the project in Visual Studio Code
2. Open the terminal using Ctrl + `
3. Type "npm install", followed by "npm start" afterwards
4. Follow the link in the terminal (http://localhost:3000)


<h2>How to play:</h2>

- Walk around the area (using WASD) to walk over to the snowmen that will be coming at you from the bottom of the screen.
- Use arrow keys (Left Arrow and Right Arrow) to rotate your character so that your sword touches the enemies.
- Health (or HP) is lost upon either the player colliding with a snowman, or a snowman getting past the player and colliding with the brick house.
- Rules are simple: don't let your health reach 0!



<h2>Controls:</h2>

W, A, S, D (movement), Left Arrow and Right Arrow (character rotation)

The current game code can be found in "resources/js/gamePage.js"


<h2>Game Project Folder Structure:</h2>

.<br />
├── index.js                  # The code for nodejs that routes to web pages, including 404 page, and has a login system<br />
├── resources                 # Source files (or source code files and assets)<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── audio                     # All audio files used in game (background music and sound effects)<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── css                       # CSS files for all the web pages<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── images                    # Images used for textures<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── js                        # Game code<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── pages                     # HTML files for all the web pages (except index.html)<br />
├── index.html                # The main web page<br />
└── README.txt
