let response = window.prompt("Prick a door left or right");
response = response.toLowerCase();
let alive = true;

if (response === "left"){
    window.alert("you fell into spikes");
    alive = false;
} else if (response === "right") {
    window.alert("Lucky You still Alive.");
} else{
    window.alert("Inavlid choice");
    location.reload();
    alive = null;
}
if (!alive) {
    window.alert("game over");
    location.reload();
}
if (alive){
    response = window.prompt("Choose again");
    response = response.toLowerCase();
}
