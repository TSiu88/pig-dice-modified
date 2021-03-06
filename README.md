# _Pig Dice Modified_

#### _Modified Pig Dice Game, 02.6.2020_

#### By _**Tiffany Siu and Krista Rutz**_

[![Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.](https://www.repostatus.org/badges/latest/wip.svg)](https://www.repostatus.org/#wip) 
![LastCommit](https://img.shields.io/github/last-commit/tsiu88/wordcounter-csharp)
![Languages](https://img.shields.io/github/languages/top/tsiu88/wordcounter-csharp)
[![MIT license](https://img.shields.io/badge/License-MIT-orange.svg)](https://lbesson.mit-license.org/)

---
## Table of Contents
1. [Description](#description)
2. [Setup/Installation Requirements](#setup/installation-requirements)
    - [Requirements to Run](#requirements-to-run)
    - [Instructions](#instructions)
    - [Other Technologies Used](#other-technologies-used)
3. [Known Bugs](#known-bugs)
4. [Support and Contact Details](#support-and-contact-details)
5. [License](#license)
---

## Description

Pig Dice is a dice game where players take turns repeatedly rolling dice to compete in points. For each turn they can roll until they decide to "hold", increasing their total score by that amount. If a "1" is rolled, they score nothing for that turn and their turn ends. The first player to score to the winning amount wins!

Unfinished, attempt to convert Pig Dice Project to include npm, node, and webpack

## Setup/Installation Requirements

### Requirements to Run

* _Web Browser_
* _Webpack_
* _Node.js_
* _NPM_

### Instructions

1. Download and install Node.js from the [official website](https://nodejs.org/en/download/)
2. Clone the [repository](https://github.com/TSiu88/pig-dice-modified.git) from my [GitHub page](https://github.com/TSiu88)
3. Use a command line/Bash to move to the project directory with `cd project-directory`
4. Run `npm install` to get all dependencies. 
5. Run `npm run start` to start up the program

## Other Technologies Used

* _HTML_
* _CSS_
* _Javascript_
* _JQuery 3.4.1_
* _Bootstrap 4.4.1_
* _ESLint_
* _Babel_
* _Jest_
* _Markdown_

## Specifications

* The user presses "Play" button
  * Example Input: click on "Play"
  * Example Output: create new Game with two Players, player 1 set to initial current player, and new Turn created
* When new Turn is created, "Roll" button appears
  * Example Input: new Game created or turn ends for other player and other player did not win
  * Example Output: "Roll" button appears
* Current player clicks "Roll"
  * Example Input: clicks on "Roll"
  * Example Output: new Dice created
* New Dice created and dice rolls a number
  * Example Input: new Dice created and rolls
  * Example Output: Number between 1-6 generated
* Current Player rolls a 1
  * Example Input: roll = 1
  * Example Output: Turn ends and running score = 0
* Current Player rolls > 1
  * Example Input: roll = 4
  * Example Output: running score += 4 and player given choice buttons "Roll again" and "Hold"
* Current Player clicks "Hold" after roll
  * Example Input: click on "Hold"
  * Example Output: total score += running score and turn ends
* Current Player clicks "Roll again" after roll
  * Example Input: click on "Roll again"
  * Example Output: new Dice created and dice rolls
* When turn ends, current Player total score evaluated if it is greater than winning score
  * Example Input: total score = 103
  * Example Output: total score > winning score, game ends and current player wins
  * Example Input: total score = 45
  * Example Output: total score < winning score, game continues, current player changes, and new Turn created
* When game ends, show player that won
  * Example Input: game ends
  * Example Output: "Player 1 wins!"

## Known Bugs

_There are currently no known bugs in this program_

## Support and contact details

_If there are any question or concerns please contact me at my [email](mailto:tsiu88@gmail.com). Thank you._

### License

*This software is licensed under the MIT license*

Copyright (c) 2020 **_Tiffany Siu_**
