function displayTeam(player) {
    var playerTeam = player.getAttribute("data-player-team");
    alert(playerTeam + " is on the " + player.innerHTML + " team!");
}