# The Ultimate Harry Potter Quiz

Test your knowledge of the Harry Potter world by naming the characters seen in the films.

![Am I Responsive Image](assets/readme-images/front-page.jpg)

The live link for the site can be found here - https://tuckerfaulk.github.io/the-ultimate-harry-potter-quiz/

<!-- My idea for this project was to develop an online game for players to enjoy.

The object of the game is to:

- Suggest letters to see if they are contained in the hidden answer.
- If the letter is not in the hidden answer, you lose a life.
- To win the game, continue to suggest letters until all of the letters in the hidden answer are revealed.
- Although, if you guess too many incorrect letters and lose all your lives, the game is lost.

# Table of contents
- [Design and Planning](#design-and-planning)
  - [Logo Font and Color](#logo-font-and-color)
  - [Error Messages](#error-messages)
  - [Game Process Planning Flow Chart](#game-process-planning-flow-chart)
- [Languages Used](#languages-used)
- [Features](#features)
  - [Existing Features](#existing-features)
    - [Logo and Subtitle](#logo-and-subtitle)
    - [How to Play](#how-to-play)
    - [Select Difficulty](#select-difficulty)
    - [Select Category](#select-category)
    - [Main Game Area](#main-game-area)
    - [Other Features](#other-features)
      - [Guess Answer](#guess-answer)
      - [Adding Game Categories and Answer](#adding-game-categories-and-answers)
  - [Future Features](#future-features)
- [Data Model](#data-model)
  - [Classes and Object Oriented Programming](#classes-and-object-oriented-programming)
- [Testing](#testing)
  - [Test of User Story](#test-of-user-story-game-functionality)
  - [Test on Alternative Browsers](#test-on-alternative-browsers)
  - [Debugging](#debugging)
  - [Validator Testing](#validator-testing)
  - [Unfixed Bugs](#unfixed-bugs)
  - [Libraries and Programs Used](#libraries-and-programs-used)
- [Deployment](#deployment)
- [Credits](#credits)
  - [Content](#content)

# Design and Planning

**Logo Font and Color**

I initially found it difficult to add 'design' to a terminal game and that this was mostly limited to formatting. From some research, I did find the 'pyfiglet' and 'termcolor' libraries which could be used to change text font and add color to text printed in the terminal.

My original design for my Logo was as below, but after some feedback during testing, it was reported that the font was difficult to read and as such, a font was chosen for a better user experience.

*Original Logo*

![Original Logo](assets/readme-images/original-logo-font.png)

*New Logo*

![New Logo](assets/readme-images/new-logo-font.jpg)

Once the font and color was finalised, it was used for the game won and game lost messages. It was decided for the same color to be used for these messages as the title to keep with the theme of the game.

*Game Won Message*

![Game Won Message](assets/readme-images/game-won-message.jpg)

*Game Lost Message*

![Game Lost Message](assets/readme-images/game-lost-message.jpg)

**Error Messages**

The final bit of coloring added to the game was to highlight error messages in red. This was so they could be distinguished from the game text and to alert the player.

*Sample Error Message - Highlighted Red*

![Error Message](assets/readme-images/value-error-message.jpg)

**Game Process Planning Flow Chart**

With there being many steps in the code and different decision stages, I initially planned out the game by setting out in stage on a flow chart (created with LucidChart).

![Flow Chart Process Plan](assets/readme-images/hangman-flowchart.jpg)

# Languages Used

- Python

# Features

## Existing Features:

### Logo and Subtitle

A logo and subtitle is displayed at the start of the program running so the user is aware of what they are playing.

![Logo and Subtitle](assets/readme-images/new-logo-font.jpg)

### How to Play

I have added a 'How to Play?' section to ensure that the player understands the objective of the game. This section also introduces the feature for the player to guess the whole answer at any point in the game.

![How to Play](assets/readme-images/how-to-play.jpg)

### Select Difficulty

To make the game more interesting for the player, I have added a difficulty level which they are able to select. Each difficulty level corresponds to a number of lives: Easy = 7 Lives; Medium = 6 Lives; Hard = 5 Lives.

![Select Difficulty](assets/readme-images/select-difficulty.jpg)

### Select Category

An option has been added for the player to select a category for the answer which they would like to guess. If they player is feeling lucky, they are able to select for a random category to be chosen.

![Select Category](assets/readme-images/select-category.jpg)

### Main Game Area

- Display Category: Reminds the player of the category of the answer.
- Hidden Word: The word, phase or sentence which the player is trying to guess. This updates as letters are guessed correctly.
- List of Remaining Letters: Reminds the player of the list of letters which they have left to guess from.
- Input Request: Requests for the player to guess a letter or the answer.

![Main Game Area](assets/readme-images/main-game-area.jpg)

**Additional Displays in the Main Game Area**

- Incorrect Letter Message: A message is displayed when the player selects a letter which is not in the answer.

![Incorrect Letter Message](assets/readme-images/incorrect-letter-message.jpg)

- Hangman Design and Number of Lives Remaining: The hangman design follows the classic design of the Hangman game as an incorrect guess is made. The number of lives remaining is detailed so the player is aware of how many lives they have left. Each Hangman design is incremented differently depending on the difficulty level chosen: e.g. there are 7 steps (lives) from no hangman displayed to a full hangman (Medium: 6 Steps; Hard: 5 Steps). The final full Hangman displayed includes an "R.I.P" message including the date. This has been added as an additional feature.

As there were serval designs required (one for each set of lives for each difficultly), I decided to create these in a separate file (hangman.py) and call these into the main run.py file to keep the main game play code tidier.

*Hangman Design - Hard with 2 Lives Remaining*

![Hangman Hard 2 Lives](assets/readme-images/hangman-hard-2-lives.jpg)

*Hangman Design - Hard with 0 Lives Remaining*

![Hangman Hard 0 Lives](assets/readme-images/hangman-hard-0-lives.jpg)

- Error Messages

An error message is displayed when a non-alpha character (e.g. number, symbol, space) is input or a letter is guessed which has previously been guessed by the player.

![Value Error Message](assets/readme-images/value-error-message.jpg)

- Game Won/Game Lost Messages

The font and background color of 'CONGRATS' and 'UNLUCKY' have been changed to signify whether the player has won or lost, respectively. Feedback from testing shown that it was easier for the player to know that they had ether won or lost the game with these messages rather than when they were the same font as the other game text. Providing a larger 'Congrats' message also provides the player with a sense of reward from winning.

*Game Won Message*

![Game Won Message](assets/readme-images/game-won-message.jpg)

*Game Lost Message*

![Game Lost Message](assets/readme-images/game-lost-message.jpg)

- Request to reset the game

Once the game is either won or lost, the player is asked whether they would like to play the game again. Inputting 'y' re-run the program from the start whereas 'n' displays a thank you message.

*Reset Game Message*

![Reset Game Message](assets/readme-images/reset-game-message.jpg)

*Thank You for Playing Message*

![Player Thank You Message](assets/readme-images/thank-you-message.jpg)

## Other Features:

### Guess Answer

At any point, if the player thinks they know the answer, they can type there guess instead of a letter to see if they are correct and win the game. If an incorrect guess is made, a life will be lost.

![Answer Guess](assets/readme-images/guess-answer.jpg)

To ensure that there is room for error from the player, the game will only accept an answer guess if it is longer than 3 characters (the shortest answer to guess is 4 characters long). This means that if the player accidentally submits two or three random letters, this is not accepted and an error message is displayed.

![Three Letter Guess](assets/readme-images/three-letter-guess.jpg)

### Adding Game Categories and Answers

I wanted to make sure that the answers and categories of the game were easy to add to. This was to keep the game interesting if players have attempted all of the possible answers in each category.

To do this, instead of having a list of answers as a variable, I set up a Google Sheets with columns of answers based on a category, and an API is used to retrieve this information and randomise an answer.

Another bonus to this is that it makes the Hangman game customisable: players could add answers for their favourite category or add keywords for a topic which they are revising.

The game has been programmed so, when a new category is added, this is included as an option to be selected in the Category Section of the game. This category may also be selected when a 'Random' option is selected.

![New Category in Google Sheets](assets/readme-images/new-category-sheets.jpg)

![New Category Displayed in Game](assets/readme-images/new-category-game.jpg)

Link for the Category Spreadsheet: https://docs.google.com/spreadsheets/d/1yZvlt76H67GoI1nYCoELXNyLjRzGpB4CzKvvJ7s4E1k/edit#gid=0

To add another Category and/or Answers:

**Add New Category**

1. Type in your new category in the first row of the next empty column. 

2. Add your new answers in the column under the category (NB: Ensure that the answers are typed in all lowercase). 

3. Save this file and your new category will be added as an option in the Hangman Game. The new answers added will then be selected randomly.

**Add New Answers in an Existing Category**

1. Just add new answers to the bottom of the list in the appropriate category and they will then be available to be randomly selected in the Hangman Game.

## Future Features

- Add a scoring system
- Add a high score table

# Data Model

## Classes and Object Oriented Programming

I wanted to use a class as a container for the main variables of the game with methods for updating these variables. The main game variables which have been included in this class are:

- alphabet: list of letters the player has left to choose from
- letter_guess: the players letter guess
- game_word: the answer the player is trying to guess
- hidden_game_word: the hidden answer which is displayed for the player to guess
- lives: number of the lives the player has left
- category: the category chosen by the player

The main game is split into two stages of functions: 

Stage 1. The first stage of functions retrieves the game information to define the class variables:

    - The player selects the game difficulty ("number of lives") and "category"
    - The category is then used to randomly choose a "game word"
    - This is then change into the "hidden game word"

Stage 2: The second stage (play_game function) then uses the class methods to update the game variables and cycles through this until the game is won or lost.

# Testing

## Test of User Story (Game Functionality):

| Test   |      Expected     |  Passed |
|--------|:------------------|:--------:|
|Open Website|Game Title, How to Play and Select Difficulty Displays|☑|
|Select Difficulty|Input of each number selects the appropriate difficulty (Hard, Medium, Easy), then a message displays to inform the player that of the chosen difficulty and the number of lives they have.|☑|
|Select Difficulty Input Validation|An error message is displayed when a non-numeric character (e.g. number, symbol, space) is input or a number which is not a option available.|☑|
|Select Category|Input of each number selects the appropriate category. The category chosen and a hidden random answer from this category is then displayed. Selecting 'Random' chooses a random category for the player. Then displays this and a random hidden word from this category.|☑|
|Select Category Input Validation|An error message is displayed when a non-numeric character (e.g. number, symbol, space) is input or a number which is not a option available.|☑|
|Game Area|The category, hidden answer, letters remaining are displayed. Input message is displayed requesting the player to select a letter.|☑|
|Correct Letter Input|The hidden answer updates displaying all instances of the letter. The game then requests for another letter if the answer is not complete. The letter guessed is removed from the remaining letter available.|☑|
|Incorrect Letter Input|A life is removed. The hangman design is displayed (appropriate to the difficulty chosen and the number of lives remaining). The game then requests for another letter if the answer is not complete. The letter guessed is removed from the remaining letter available.|☑|
|Letter Guess/Guess answer Input Validation|An error message is displayed when a non-alpha character (e.g. number, symbol, space) is input, a letter is guessed which has previously been guessed by the player or two or three letters are input at the same time.|☑|
|Correct Guess Answer|Input	Game won message is displayed and input message asks the player whether they would like to play again.|☑|
|Incorrect Guess Answer|Input	Message is displayed that the guess was incorrect. Life is removed if there are some remaining. Hangman design is update now a life has been taken.|☑|
|Game Won|Game won title displays. Game won message displays. Input message asks the player whether they would like to play again.|☑|
|Game Lost|Game lost title displays. Game lost message displays. Final hangman design displays. Date in final hangman is the current date. Input message asks the player whether they would like to play again.|☑|
|Play Again Message|Input of 'y' reloads the games. Input of 'n' displays the game title and the thank you message.|☑|
|Add Categories and Answers to Google Sheets|Add category into the first row of a new column in the Google Sheets page. Add answers into the cells in the new category column. New category displays in game Category Section. New Category available to be chosen if random selected by the player. New category answers chosen at random for the game.|☑|
|Adding answers to Existing Category|Add answers into the cells below exising category column. New answers chosen at random for the game.|☑|

## Test on Alternative Browsers

|   Test   |   Layout (Pass)   |   Functionality (Pass)   |
|----------|:-----------------:|:-------------------------:|
|Chrome    |      ☑           |            ☑             |
|Safari    |      ☑           |            ☑             |
|Firefox   |      ☑           |            ☑             |
|Edge      |      ☑           |            ☑             |

## Debugging

The main issue which I had during debugging this game was that I was having an issue with the Figlet main title in the Heroku deployed version of the game where it started to stack the 'HANGMAN' title when it should have been clearing the terminal. This only seemed to be triggered after an incorrect guess was made and then any guess after this would stack another title on top of the pile.

**Tried during Debugging**

- Checking throughout the code to see if the game_title function had been called more than once.
- Researched on Google to see if others have had the same issue.
- Contacted Student Support: They could not find any issue with my code. They said it was potentially something in Heroku causing the issue.

**Solution**

I originally wanted the game title to be displayed in every section of the game. As myself and student support was not able to fix the bug, I decided to only display the game title at the start and the end of the game. After further investigation, I think this bug started to happened when the code was longer that what could be displayed in the terminal (had to scroll down the code).

## Validator Testing

- PEP8Online: No errors raised in both of the run.py and hangman.py files.

*PEP8 Online Checker: run.py file*

![PEP8Online Checker run.py file](assets/readme-images/pep8-check-main.jpg)

*PEP8 Online Checker: hangman.py file*

![PEP8Online Checker hangman.py file](assets/readme-images/pep8-check-hangman.jpg)

- Lighthouse (Accessibility Audit): The page achieved a great accessibility performance.

![Lighthouse Accessibility Audit](assets/readme-images/lighthouse-check.jpg)

## Unfixed Bugs

There were no unfixed bugs identified during the testing of this site.

## Libraries and Programs Used

- Github: Store Repository
- Gitpod: Create the python files
- Google Chrome, Microsoft Edge, Mozilla Firefox, Safari: Site testing on alternative browsers
- Microsoft OneNote: Planning notes for the project
- Am I Responsive: Screenshots of the final project for the README file
- Lucid Charts: Planning the game process with a flow diagram

# Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows: 

  1. In the GitHub repository, navigate to the Settings tab. 
  2. From the settings tab, select the 'Pages' tab in the 'Code and Automation' section.
  3. From the source section drop-down menu, select the 'Main' branch.
  4. Once the 'Main' branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link for the site can be found here - https://tuckerfaulk.github.io/the-ultimate-harry-potter-quiz/

# Credits

I have again enjoyed learning with the Code Institute and completing my third assignment on the Python Essentials. I would like to thank my mentor Martina for her support and John from CI Student Support for his time. Finally a big thank you to my girlfriend and little sister for their help with testing and the review of the game.

## Content

Resources Used:

- Inspiration for the original game and to understand game logic: https://www.coolmathgames.com/0-hangman
- Getting all values from a row or a column from Google Sheets API: https://docs.gspread.org/en/latest/
- Random number generator: https://stackoverflow.com/questions/3996904/generate-random-integers-between-0-and-9
- Clearing the terminal: https://stackoverflow.com/questions/2084508/clear-terminal-in-python
- Adding font styles to titles: https://towardsdatascience.com/prettify-your-terminal-text-with-termcolor-and-pyfiglet-880de83fda6b
- Alternative font used for title: http://www.figlet.org/examples.html
- Adding current date to hangman design: https://www.pressthered.com/adding_dates_and_times_in_python/
- Adding a delay to the how to play information: https://realpython.com/python-sleep/
- Hangman Design: https://codereview.stackexchange.com/questions/214471/display-command-line-hangman

The following sites were used to add answers into the Google Sheets categories list:

- https://www.timeout.com/film/best-movies-of-all-time
- https://www.imdb.com/chart/top/
- https://games4esl.com/list-of-sports/
- https://thegreatestbooks.org/
- https://www.goodreads.com/list/show/1.Best_Books_Ever
- https://www.alistofbooks.com/

Code Institute's Love Sandwiches Walkthrough Project:

- Getting Set Up (Creating the Google Sheets API)
- Deployment (Deployment to Heroku) -->