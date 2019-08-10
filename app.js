// Declare global variables
let boosterArr = []
let playerArr = []
let booster = ''
let player = ''
let playerCount = 0
let packCount = 0

// Define throw exception
const IllegalArg = new Error("Prevented an empty string submission.")

// Add a player
$('#player_enter').on('click', function() {
  event.preventDefault()
  player = $('#player_name').val()
  noEmpty(player)
  playerArr.push(player)
  playerCount += 1
  $('#player_count').text(playerCount)
  $('#player_entries').append('<ul>' + player + '</ul>')
  $('#player_name').val('')
})

// Add a booster
$('#enter-boosters').on('click', function() {
  event.preventDefault()
  booster = $('#booster_title').val()
  noEmpty(booster)
  boosterArr.push(booster)
  packCount += 1
  $('#pack_count').text(packCount)
  $('#player_packs').append('<ul>' + booster + '</ul>')
  $('#booster_title').val('')
})

// Activate draft
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
  if (validate === '') {
    // IllegalArg is defined below global variables
    throw IllegalArg
  }
}

// Validate if the draft is legal ( players % packs === 0) and do not submit if it isn't
// function draftVal(a, b) {

// }

// party
