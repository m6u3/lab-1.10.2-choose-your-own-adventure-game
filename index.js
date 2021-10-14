window.alert("ESCAPE THE MANSION! press ok to start");
window.alert("You've waken up in the middle of a poorly lit room");
window.alert("You look around and see that you are in a old abandoned mansion");
window.alert("You hear weird noises, bangs and a woman scream somewhere in the mansion");
window.alert("Oh noo you need to get away from here, look there are two doors")
let response = window.prompt("Pick one! left or right");
response = response.toLowerCase();

if (response === "left"){ //ZOmbie Branch 3 levels
    window.alert("looks like we are in the lower floor, maybe a basement?...");
    window.alert("there are patches of dirt, showing thru the floor, well lets keep moving");
    response =  window.prompt("Pick a door left or right");
    response = response.toLowerCase();
    if(response === "left"){
        window.alert("what's that thing coming out of the ground??");
        window.alert("Oh noo it's a Zombie!! Hurry You got to pick a door");
        response =  window.prompt("left or right???!!!");
        response = response.toLowerCase();
        if(response === "left"){
            window.alert("Ohh Noo!! wrong door, this place is full of Zombies!!");
            window.alert("**Fighting Noises, grunts and sound of blood running**");
            window.alert("**Zombie eating brains**...")
            window.alert("GAME OVER, You are dead!")
            location.reload();
        }else if(response === "right"){
            window.alert("Oh Noo!!! ... It's Locked!");
            window.alert("Zombie attacks you and eats your brain");
            window.alert("GAME OVER, You are dead!");
            location.reload();
        } else{
            window.alert("Invalid choice");
            location.reload();
        }
    } else if(response === "right"){
        window.alert("Stair Case going up");
        window.alert("there two doors here, You need to pick one");
        response =  window.prompt("Pick a door left or right");
        response = response.toLowerCase();
        if (response === "left"){
            window.alert("You feel the soft breeze of the wind");
            window.alert("You made it, you are Finally out!! FREDOM!!");
            window.alert("CONGRATULATIONS!!! YOU ESCAPED!!")
            window.alert("press ok to play again!");
            location.reload()
        } else if (response === "right"){
            window.alert("Another Epmty room... ** Ground floor beneath cracks**");
            window.alert("You're falling!!!...");
            window.alert("You fell into a pit of Lava!");
            window.alert("GAME OVER, You are dead!");
            location.reload();
        }else{_
            window.alert("Invalid choice");
            location.reload();
        }
    }else{
    window.alert("Invalid choice");
    location.reload();
}
} else if (response === "right") { //ghost branch 2 levels
    window.alert("There is a staircase going up!");
    window.alert("** Shadow Passes behind** What was that??");

} else{
    window.alert("Invalid choice");
    location.reload();
}
