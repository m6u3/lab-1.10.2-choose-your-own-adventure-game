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
} else if (response === "right") { //ghost branch 3 levels, level 1
    window.alert("There is a staircase going up!");
    window.alert("** Shadow Passes behind** What was that??");
    window.alert("You've got to keep moving, theres two more doors")
    response =  window.prompt("Pick a door left or right");
    response = response.toLowerCase();
    if (response === "left"){ // Level 2
        window.alert("Wow!! this room is full of things moving around by themselves!");
        window.alert("Oh oh! seems they notice you many of things startesd flying towards you");
        window.alert("Hurry, lets get out of here, theres another pair of doors");
        response =  window.prompt("Pick a door left or right");
        response = response.toLowerCase();
        if(response === "left"){ //level 3
            window.alert("What is that big floating thing?!!");
            window.alert("It's a ghost, and doesnt look to happy to see you");
            window.alert("Ghost Flies towards you, and get inside of you!");
            window.alert("** Grunts, screams, cries** The Ghost has possed you!");
            window.alert("GAME OVER, You are dead!");
            location.reload();   
        }else if (response === "right"){
            window.alert("You step inside, but... wait a second, the floor seems to be there but you go thru it!!")
            window.alert("You fall and fall, but seems to never end!!");
            window.alert("You died of thirst and hunger, your corpse will forever be falling");
            window.alert("GAME OVER, You are dead!");
            location.reload();
        }else {
            window.alert("Invalid choice");
            location.reload();
        }
    }else if (response === "right"){
        window.alert("what is this?? this room is full of coffins!");
        window.alert("**screeching noise** One Coffin Opens, and a vampire comes out!!");
        window.alert("RUN!!! look theres another pair of doors!")
        response =  window.prompt("Pick a door left or right");
        response = response.toLowerCase();
        if (response === "left"){//3rd level
            window.alert("Oh no! there no way out of this room, you are trapped!");
            window.alert("Vampire comes in, you try to defend yourself, but you are no match");
            window.alert("Vampire drinks your blood, you corpse fall to the ground");
            window.alert("GAME OVER, You are dead!");
            location.reload();
        } else if(response === "right"){
            window.alert("There is a treasure Chest!!??");
            window.alert("hurry up an open it the vampire is trying to get in.");
            window.alert("You Open it, it's a wood stake... The Vampire manages to get in!");
            window.alert("You and the Vampire fight, he almost ovetakes you, but somehow you manage to put the stake thru its heart!!");
            window.alert("Suddenly, it starts to disappear,and with him all the noises in the mansion start to fade away.");
            window.alert("It seems the vampire what the cause for this mansion to be haunted. You did it you are free to go!! ");
            window.alert("You come out of the mansion, the sun start rising, and you go towards it, finally this nightmare ended!");
            window.alert("CONGRATULATIONS!!! YOU ARE A HERO ");
            window.alert("To play again press ok");
            location.reload();
        }else {
            window.alert("Invalid choice");
            location.reload();
        }
    }

} else{
    window.alert("Invalid choice");
    location.reload();
}
