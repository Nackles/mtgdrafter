// declare global variables
let boosterArr = [
  "Khans of Tarkir",
  "Guilds of Ravnica",
  "Ravnica Allegiance",
  "Iconic Masters",
  "Core 2020",
  "Dragon's Maze"
];
let playerAmt;
let booster;

// on button click, populate BOTH an array with the booster pack name AND display the array on the screen
$("#booster_enter").on("click", function() {
  booster = $("#booster_title").val();
  boosterArr.push(booster);
  console.log(booster);
});

$("#booster_assign").on("click", function() {
  console.log("DRAFT LAUNCHING. CHAOS COMMENCING.");
  console.log("ARR: " + boosterArr);
  playerAmt = parseInt($("#player_count").val());
  console.log("playerAmt: " + playerAmt);

  // For each player
  for (let i = 1; i < playerAmt + 1; i++) {
    // Temporary array for each player's boosters
    let currPlayer = [];
    // Assign them three boosters
    for (let j = 0; j < 3; j++) {
      // Select a random pack from the array and...  
      let randoPack = Math.floor(Math.random() * Math.floor(boosterArr.length));
      // Push it into our temporary array
      currPlayer.push(boosterArr[randoPack]);
      // Remove it as an option from the original array
      boosterArr.splice(randoPack, 1);
    }
    // And tell them which boosters they got
    console.log("Player " + i + " recieves: "+currPlayer);
  }

  // I want to assign three boosters per player.
  // You can assume that there will be 8 players and 24 boosters - each player will end with three boosters with no leftovers.

  // for each player, roll a number between 0 and boosterArr.length and assign that booster to that player and remove that boosterArr[id] from the array
});

//party
