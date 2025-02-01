var click;
click = 1;
function clickTracker() {
    document.getElementById("numClicks").innerHTML = click;
    if (click >= 25) {
        click = 24;
        document.getElementById("winner").innerHTML = "YOU WIN!!!!";
    }
    click++
}