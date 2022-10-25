/**
 * Global Variables
 */
var game = {
    characterList: ["Petunia Dursley", "Augusta Longbottom", "Lord Voldemort",
"Fleur Delacour", "Astoria Greengrass", "John Dawlish", "Padma Patil",
"Alicia Spinnet", "Ariana Dumbledore", "Kreacher", "Aurora Sinistra",
"Silvanus Kettleburn", "Albus Dumbledore", "Hedwig", "Rita Skeeter",
"Bogrod", "Alastor Moody", "Olympe Maxime", "The Fat Friar",
"Great Aunt Muriel", "Trevor", "Arthur Weasley", "Filius Flitwick",
"Sirius Black", "Travers", "Amos Diggory", "Rolanda Hooch", "Percy Weasley",
"Mundungus Fletcher", "Dennis Creevey", "Crookshanks", "Arabella Figg",
"Augustus Rookwood", "Barty Crouch Sr", "Cho Chang", "Parvati Patil",
"Xenophilius Lovegood", "Dolores Umbridge", "Dedalus Diggle", "The Bloody Baron",
"Dobby", "Hugo Weasley", "Rufus Scrimgeour", "Scorpius Malfoy", "Igor Karkaroff",
"The Fat Lady", "Cedric Diggory", "Antonin Dolohov", "Nymphadora Tonks",
"Dean Thomas", "Rubeus Hagrid", "Alice Longbottom", "Pansy Parkinson",
"Quirinus Quirrell", "Amycus Carrow", "Griphook", "Norbert", "Nicolas Flamel",
"Romilda Vane", "Justin Finch-Fletchley", "Albus Severus Potter", "George Weasley",
"Horace Slughorn", "Zacharias Smith", "Pomona Sprout", "Thomas Marvolo Riddle",
"Elphias Doge", "Cornelius Fudge", "Neville Longbottom", "James Sirius Potter",
"Helena Ravenclaw", "Gabrielle Delacour", "Katie Bell", "Alecto Carrow",
"Fawkes", "Oliver Wood", "Grawp", "Angelina Johnson", "Frank Bryce", "Hannah Abbott",
"Ginny Weasley", "Aragog", "Dudley Dursley", "Gilderoy Lockhart", "Fenrir Greyback",
"Errol", "Lucius Malfoy", "Lily Potter", "Irma Pince", "Bellatrix Lestrange",
"Lily Luna Potter", "Penelope Clearwater", "Stan Shunpike", "Thorfinn Rowle",
"Dirk Cresswell", "Pius Thicknesse", "Frank Longbottom", "Vincent Crabbe",
"Lavender Brown", "Marge Dursley", "Bathilda Bagshot", "Barty Crouch Jr",
"Molly Weasley", "Kingsley Shacklebolt", "Luna Lovegood", "Narcissa Malfoy",
"Minerva McGonagall", "Eloise Midgen", "Beedle the Bard", "Susan Bones",
"Aberforth Dumbledore", "Seamus Finnigan", "Corban Yaxley", "Reginald Cattermole",
"Nearly Headless Nick", "Harry Potter", "Madam Rosmerta", "Lee Jordan",
"Hermione Granger", "Andromeda Tonks", "Albert Runcorn", "Walden Macnair",
"Cuthbert Binns", "Pigwidgeon", "Severus Snape", "Fluffy",
"Septima Vector", "Bill Weasley", "Rose Weasley", "Remus Lupin", "Argus Filch",
"Sybill Trelawney", "Viktor Krum", "Draco Malfoy", "Poppy Pomfrey", "Blaise Zabini",
"Buckbeak", "Cormac McLaggen", "Ron Weasley", "Fang", "James Potter", "Vernon Dursley",
"Peter Pettigrew", "Mykew Gregorovitch", "Millicent Bulstrode", "Mafalda Hopkirk",
"Amelia Bones", "Garrick Ollivander", "Fred Weasley", "Colin Creevey",
"Nagini", "Scabior", "Scabbers", "Gregory Goyle", "Myrtle Warren", "Demelza Robins"],
characterNumber: 0,
charactersRemaining: 156,
score: 0
};

/**
 * Gobal Event Listeners: Loaded on DomContentLoaded allowing the game to run
 */
document.addEventListener("DOMContentLoaded", function () {
    $("#play-btn").click(function () {
        $(".message-board").addClass("invisible");
        $(".how-to-play").addClass("invisible");
    });

    $("#next").click(function () {
        game.characterNumber++;
        displayCharacter();

        if (game.characterNumber > 0) {
            $("#previous").removeClass("invisible");
        };

        if (game.characterNumber === (game.characterList.length - 1)) {
            $("#next").addClass("invisible");
        };

    });

    $("#previous").click(function () {
        game.characterNumber--;
        displayCharacter();

        if (game.characterNumber === 0) {
            $("#previous").addClass("invisible");
        };

        if (game.characterNumber < (game.characterList.length - 1)) {
            $("#next").removeClass("invisible");
        };
    });
    
    $("#give-up").click(function () {
        for (character in game.characterList) {
            test = "img[alt|='" + game.characterList[character] + "']";
            $(test).siblings(".card-img-overlay").removeClass("invisible").addClass("incorrect");
        }

        game.characterList = [];
        $("#select_character").html("-");
        $("#num-remaining").html(0);

        $("#next").addClass("invisible");
        $("#previous").addClass("invisible");
        $("#give-up").addClass("invisible");

        gameSummary();

        $("#reset").removeClass("invisible");
    });

    $("#reset").click(function () {
        location.reload();
    });
    

    $(".card-img").click(function () {
        if (this.alt === $("#select_character").html()) {
            $(this).siblings(".card-img-overlay").removeClass("invisible").addClass("correct");

            let id = game.characterList.indexOf(this.alt);
            game.characterList.splice(id, 1);
            game.characterNumber = id;

            updateScore();
            updateCharactersRemaining();

            if (id === (game.characterList.length)) {
                game.characterNumber = 0;
                $("#previous").addClass("invisible");
                $("#next").removeClass("invisible");
            }

            // if (game.game.characterList.length === 0) {gameSummary, $("#reset").removeClass("invisible"); ? displayCharacter()}; CHECK IF GAME WON

            displayCharacter();

        } else {
            $(this).siblings(".card-img-overlay").removeClass("invisible").addClass("incorrect");

            let id = game.characterList.indexOf(this.alt);
            game.characterList.splice(id, 1);

            let resetCharacterNumber = game.characterList.indexOf($("#select_character").html());
            game.characterNumber = resetCharacterNumber;

            updateCharactersRemaining();
        }
    })
});


/**
 * In the game area, displays the character which the player needs to select
 */
function displayCharacter() {
    $("#select_character").html(game.characterList[game.characterNumber]);
}

/**
 * Updates the number of characters the player has to guess
 * Called after a guess has been made.
 * Minus's one from the total.
 */
function updateCharactersRemaining() {
    game.charactersRemaining--;
    $("#num-remaining").html(game.charactersRemaining);
}

/**
 * Increments the player score and updates the game area score
 */
function updateScore() {
    game.score++;
    $("#score").html(game.score);
}

/**
 * 
 */
function gameSummary() {
    // Update #grade
    // Add funtion to game play section (end of game and when give up pressed)

    $("#player-score").html(game.score)

    if (game.score < 10) {
        $("#grade").html("Troll")
    }

    $(".message-board").removeClass("invisible");
    $(".game-summary").removeClass("invisible");

    $("#close-btn").click(function () {
        $(".message-board").addClass("invisible");
        $(".game-summary").addClass("invisible");
    });
}

/**
 * Resets the game by refreshing the page.
 * Called when ...
 */
 function resetGame() {
    location.reload();
}

displayCharacter()

/*

8. gameSummary display: Display results
9. Seperate for 100% correct
*/