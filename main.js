let player;
let choice1;
let choice2;
let choice3;
let choice4;
let choice5;

function main() {
    startGame();
    event1();
}

function startGame() {
    player = prompt("Welcome to Escaping the Haunted Asylum game! What is your name player?");
    alert("For each event, there will be a few choices, enter the number of your choice.")
    alert(`Welcome ${player}, you wake up in an abandoned asylum, it is eriely quiet and only the faintest moolight shines through the cracks of the boaarded windows. . .`);
}

function event1() {
    alert("You realize the your arms are stuck, when you look down, you see you're in a straight-jacket.");
    choice1 = +prompt("Do you 1, dislocate your shoulder to escape the jacket or 2, try to cut the  straps of the jacket on a rusty nail sticking out of the wall.");
    if (choice1 == 1) {
        alert("After immense pain, you free yourself.");
    } else if (choice1 == 2){
        alert("The nail has been poisoned! After suffering from excrutiating pain, you die. GAME OVER!");
        event1();
    }
}


main();



/**
 * Player wakes up with arms tied like hes a patient in an insane asylum
 * there are doors on opposite sides of the room, one says 'North Door' the other says 'South Door'. 
 * player picks which door they want to go to.  * 
 * North Door goes to the dinning room. 
outh Door goes to the library. 
 * (south door choice)Player pulls out book and secret staricase appears behind the shelve 
 * If user goes upstairs, they escape through the window of the master bedroom.
 * If user goes downstairs, the bookshelves close behind them and there is a ghost downstairs that catches them.
 * (North door choice) Player finds floating glasses moving around the room. 
 * User finds stack of plates at the center of table, with cutlery set up and puts the plates in the right spot.
 * Door opens to hall wit
 two rooms, user picks to go into either the Bathroom or 


the Fo