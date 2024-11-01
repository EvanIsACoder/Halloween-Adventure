let player;
let choice1;
let choice2;
let choice3;
let choice4;
let choice5;

function main() {
    startGame();
    event1();
    event2();
    event4();
}

function startGame() {
    player = prompt("Welcome to Escaping the Haunted Asylum game! What is your name player?");
    alert(`Welcome ${player}, for each event, there will be a few choices, enter the number of your choice.`);
    alert(`You wake up in an abandoned asylum, it is eriely quiet and only the faintest moolight shines through the cracks of the boaarded windows. . .`);
}

function event1() {
    alert("You realize the your arms are stuck, when you look down, you see you're in a straight-jacket.");
    choice1 = +prompt("Do you 1, dislocate your shoulder to escape the jacket or 2, try to cut the  straps of the jacket on a rusty nail sticking out of the wall.");
    if (choice1 == 1) {
        alert("After immense pain, you free yourself.");
    } else if (choice1 == 2){
        alert("The nail has been poisoned! After suffering from excrutiating pain, you die. GAME OVER!");
        startGame();
    }
}

function event2() {
    alert("You see two doors, one leads to a staircase, the other, a hallway.");
    choice2 = +prompt("Do you 1, enter the stairway or 2, go into the hallway?");
    if (choice2 == 1) {
        alert("You go down the dark and winding staircase, you hear . . . nothing, not even the creaking of the steps.");
        event3a();
    } else if (choice2 == 2){
        alert("The door closes behind you and disappears, you look the dark hallway, there is the sound of laughing children.");
        event3b();
    }
}

function event3a() {
    alert("At the end of the staircase, you see another staircase and a door.");
    choice3 = +prompt("Do you 1, continue to go down the stairway or 2, go through the door?");
    if (choice3 == 1) {
        alert("You trip on a missing step, tumbling down, every bone in your body shatters and you die.");
        startGame();
    } else if (choice3 == 2){
        alert("The door closes behind you and disappears, all is left is a long hall way with an exit sign at the end . . . you run to the door, but it disappears and a skin walker appears at the other end.");
        startGame();
    }
}

function event3b() {
    alert("There are two doors, when to the right which is labled as a bathroom, one to the left, which leads to the foyer.");
    choice4 = +prompt("Do you 1, enter the right door or 2, go into the left one?");
    if (choice4 == 1) {
        alert("You enter the right door, and you see a dirty bathroom.");
    } else if (choice4 == 2){
        alert("You enter the left door, and enter the main foyer of the aslyum, all looks calm, but then . . .");
        alert("The lights go on with an intense brightness and you feel a searing pain. Game OVER!!!!!");
        startGame();
    }
}

function event4() {
    alert("The mirror looks off, as you walk closer, it starts to suck you in. . .");
    alert(`Before you can comprehend what is happening, you are back in your class, you have a final exam and you haven't studied, good luck ${player}.`);
}



main();



/* ideas:
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


*/