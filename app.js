// declare global variables
let boosterArr = [];
let playerArr = [];
let booster;
let player;
let playerCount = 0;
let packCount = 0;

// Add a booster
$("#booster_enter").on("click", function() {
  packCount += 1;
  $("#pack_count").text(packCount);
  booster = $("#booster_title").val();
  boosterArr.push(booster);
  $("#player_packs").append('<ul>'+booster+'</ul>')

  $("#booster_title").val('');
});

// Add a player
$("#player_enter").on("click", function(){
  playerCount += 1;
  $("#player_count").text(playerCount)
  player = $("#player_name").val();
  playerArr.push(player);
  $("#player_entries").append('<ul>'+player+'</ul');
  $("#player_name").val('');
});

// Activate draft
$("#booster_assign").on("click", function() {
  console.log("DRAFT LAUNCHING. CHAOS COMMENCING.");
  console.log("ARR: " + boosterArr);
  console.log("Player amount: " + playerArr.length);

  // For each player
  for (let i = 0; i < playerArr.length; i++) {
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
    console.log("Player " + playerArr[i] + " recieves: "+currPlayer);
    // But in a DOM element
    $("#player_tray").append('<li>'+playerArr[i]+' recieves: '+currPlayer[0]+', '+currPlayer[1]+', '+currPlayer[2]+'.</li>');
  }

  // I want to assign three boosters per player.
  // You can assume that there will be 8 players and 24 boosters - each player will end with three boosters with no leftovers.

  // for each player, roll a number between 0 and boosterArr.length and assign that booster to that player and remove that boosterArr[id] from the array
});

//party
