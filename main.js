//Varaibles that will store players' choices as their name, then integers
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
    //event3 is a route with that branches from event2 so it isn't called here
    //The rest of the events are just called from previous events
}

//Starts game by explaing the game and asking for the player's name
//if you die, you get reset to this, creating an infinite death loop.
function startGame() {
    player = prompt("Welcome to Haunted Asylum! What is your name?");
    alert(`Welcome ${player}, for each event, there will be a few choices, enter the number of your choice. If you die, the game will restart. Will you escape?`);
    alert(`You wake up in an abandoned asylum, it is eriely quiet and only the faintest moolight shines through the cracks of the boarded windows. . .`);
}

//First event with one path that restarts and another that continues
function event1() {
    alert("You realize that your arms are stuck, and when you look down, you see you're in a straight jacket.");
    choice1 = +prompt("Do you 1: attempt to force yourself out of the jacket \nor\n 2: Cut the  straps of the jacket on a rusty nail sticking out of the wall.");
    if (choice1 == 1) {
        alert("You manage to dislocate your shoulder and get your arm out, this causes you immense pain, but you free yourself.");
    } else if (choice1 == 2){
        alert("The nail has been poisoned! After suffering from excrutiating pain from the toxin, you die. GAME OVER!");
        startGame();
    } else{
        event1();
    }
}

//Second choice, two paths, neither kills you yet
function event2() {
    alert("You see two doors, one leads to a staircase, the other, a hallway.");
    choice2 = +prompt("Do you 1: enter the stairway \nor\n 2: go into the hallway?");
    if (choice2 == 1) {
        alert("You go down the dark and winding staircase, but you hear . . . nothing, not even the creaking of the steps beneath your feet.");
        event3a();
    } else if (choice2 == 2){
        alert("The door closes behind you and disappears, you look the dark hallway, and here the sound of laughing children.");
        event3b();
    }else{
        event2();
    }
}

//This path was the wrong path, both branches kill you
function event3a() {
    alert("At the end of the staircase, you see another staircase and a door.");
    choice3 = +prompt("Do you 1, continue to go down the stairway or 2, go through the door?");
    if (choice3 == 1) {
        alert("You trip on a missing step, tumbling down, and as every bone in your body shatters, you die. GAME OVER!");
        startGame();
    } else if (choice3 == 2){
        alert("The door closes behind you and disappears, all is left is a long hall way with an exit sign at the end . . . you run to the door, but it disappears and a skin walker appears at the other end. GAME OVER!");
        startGame();
    }else{
        event3a();
    }
}

//This was the right path, you have 3 options, the frist is the first win, the second kills you and the third continues
function event3b() {
    alert("You notice paths, one to the right which is leads to a door labled as a bathroom, one to the left, which leads to the foyer and a path straight foward into the darkness.");
    choice4 = +prompt("Do you 1: enter the bathroom door \n2: go into the foyer \nor\3: continue into the darkness?");
    if (choice4 == 1) {
        alert("You enter the right door, and you see a dirty bathroom.");
        win1();
    } else if (choice4 == 2){
        alert("You enter the left door, and enter the main foyer of the aslyum, all looks calm, but then . . .");
        alert("The lights go on with an intense brightness and you feel a searing pain. Game OVER!!!!!");
        startGame();
    } else if (choice4 == 3){
        alert("As you advance through the darkness, you suddenly crash through the floor into a library.");
        event4();
    }else{
        event3b();
    }
}

//This is the path that continues, one option kills you, the other continues
function event4() {
    alert("You see a book open on a table and a die right next to it.");
    choice5 = +prompt("Do you 1: read the book \nor\2: roll the die??");
    if (choice5 == 1) {
        alert("As you look down at the book, and start to read the one sentence . . . you should have rolled the die.");
        alert("You are suddenly yanked into the darkness and your life ends. GAME OVER!");
    } else if (choice5 == 2){
        /*You roll a die, and get a random number that gives you candy, depending on how much of the candy that you eat,
        *you die or win.
        */
        let diceRoll = Math.round(Math.random()*6);
        alert(`You roll the die, after what feels like hours, you see a ${diceRoll} and find ${diceRoll} candies on top of the book.`);
        let event4Continued = +prompt("Do you 1: walk out the door which has mysteriously appeared \nor\n2: eat the candies.");
        if (event4Continued == 1){
            alert("You walk out the door, finding yourself in a stairway, you walk down carefully, but something fears odd.");
            event3a();
        } else if (event4Continued == 2){
            let candiesEaten = +prompt("How many candies do you eat?");
            if (candiesEaten > diceRoll){
                alert(`As you eat ${candiesEaten} candies, you realize that you only had ${diceRoll} candies. To you horror, you have been eating yourself. You die of blood loss. GAME OVER!`);
                startGame();
            } else if (candiesEaten == diceRoll){
                alert(`After eating all the candies, you feel a pain in your stomach and someone calling your name, ${player}, ${player}.`);
                win2();
            } else if (candiesEaten == 0){
                alert(`After leaving no candies, you realize you chose to eat candies, but you didn't eat any, repeat this room.`);
                event4();
            } else {
                alert(`After eating ${candiesEaten} candy, you turn to leave, but you feel a pain in your body.`);
                alert(`The candies you have eaten shoot out of your body towards the ones you left, this kills you. GAME OVER!`);
                startGame();
            }
        }else{
            event4();
        }
    }else{
        event4();
    }
}


//Simple story of what happens as you escape the death loop.
function win1() {
    alert("The mirror looks off, and as you walk closer, it starts to suck you in. . .");
    alert(`Before you can comprehend what is happening, you are back in your class, you have a final exam and you haven't studied, good luck ${player}.`);
}

function win2() {
    alert("You wake up startled, your mom is calling you to wake up, you have your driver's test today and you're going to be late.");
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