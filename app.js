// Declare global variables
// let boosterArr = []
// let playerArr = []
// let booster = ''
// let player = ''
let playerCount = 0
let packCount = 0


// Declaring the draft array
let draftPool = []

// Defined exception for if a player tries to submit an empty string
const IllegalArg = new Error("Prevented an empty string submission.")

// Add player information 
$('#player_submit').on('click', function() {
  // Prevent refresh on click/enter
  event.preventDefault()
  // Create a player object
  // TODO: Make packs belong to players: I need to be able to iterate around player names and pack names
  let playerInfo = {
      name: $("#player_name").val(), 
      pack1: $("#booster_title_1").val(),
      pack2: $("#booster_title_2").val(),
      pack3: $("#booster_title_3").val()
}
  // Validate player object - no empty strings allowed in any value
  noEmpty(playerInfo)
  // Add player to draft pool
  draftPool.push(playerInfo)
  console.log(draftPool)
  // Update player and pack count
  packCount += 3
  playerCount += 1
  $('#pack_count').text(packCount)
  $('#player_count').text(playerCount)
  // Add player name and packs to DOM
  $('#player_packs').append('<ul>' + playerInfo.pack1 + '</ul>')
  $('#player_packs').append('<ul>' + playerInfo.pack2 + '</ul>')
  $('#player_packs').append('<ul>' + playerInfo.pack3 + '</ul>')
  $('#player_entries').append('<ul>' + playerInfo.name + '</ul>')
  // Reset form
  $('#player_name').val('')
  $('#booster_title_1').val('')
  $('#booster_title_2').val('')
  $('#booster_title_3').val('')
})

// Activate draft TODO: Next section to update
$('#booster_assign').on('click', function() {
  event.preventDefault()
  if (packCount % playerCount != 0) {
    M.toast({html:'Incomplete draft!', classes: 'rounded', displayLength: '1500'})
    return false;
  }

  // For each player
  for (let i = 0; i < playerArr.length; i++) {
    // Temporary array for each player's boosters
    let currPlayer = []
    // Assign them three boosters
    for (let j = 0; j < 3; j++) {
      // Select a random pack from the array and...
      let randoPack = Math.floor(Math.random() * Math.floor(boosterArr.length))
      // Push it into our temporary array
      currPlayer.push(boosterArr[randoPack])
      // Remove it as an option from the original array
      boosterArr.splice(randoPack, 1)
    }
    // And tell them which boosters they got
    console.log('Player ' + playerArr[i] + ' recieves: ' + currPlayer)
    // But in a DOM element, too!
    $('#player_tray').append(
      '<li><i class="material-icons tiny">face</i> ' +
        playerArr[i] +
        ' recieves: <br>' +
        currPlayer[0] +
        ' <br>' +
        currPlayer[1] +
        ' <br>' +
        currPlayer[2] +
        '</li>'
    )
  }
})

// Reset function
function reset() {
  boosterArr = []
  playerArr = []
  booster = ''
  player = ''
  playerCount = 0
  packCount = 0
}

// Form validation - no empty messages
function noEmpty(validate) {
  if ((!validate.name) || (!validate.pack1) || (!validate.pack2) || (!validate.pack3)) {
    // IllegalArg is defined below global variables
    throw IllegalArg
  }
}

// Validate if the draft is legal ( players % packs === 0) and do not submit if it isn't
// function draftVal(a, b) {

// }

// party
