# Magic: The Gathering Chaos Draft Pack Randomizer
Magic: The Gathering is a collectable trading card game. A chaos draft is an event where each of 6-9 players bring 3 booster packs from different card sets, opens one pack, picks one card, and rotates each pack around the group until each player has enough cards to make a deck.

MTG Drafter is a project that randomly distributes the booster packs that each player brings for an added level of chaos and randomness.

# Technologies Used
Uses HTML, CSS, jQuery, and Javascript. TODO: Use Mongo to store draft information.

# The Site
https://nackles.github.io/mtgdrafter/

# Functionality
MTG drafter takes booster pack name and player name input (forms are validated requiring non-empty input), counts the amount of each, and validates that there are 3 booster packs per player.

# TODO, in order:
~~+ Add validation to the ACTIVATE DRAFTER button to ensure the amount of packs is divisible by number of players without remainder. This is to ensure all/enough players and/or boosters were entered.~~
+ Add local storage and a reset button for persistence through sessions and accidental refresh.
+ Add Google Text Recognition API for booster pack scanning!
+ Add a round-robin tournament bracket system that will track wins/losses/colors.
+ Add Mongo support for all data storage (draft/round robin bracket information will be stored in one object).
+ MAKE IT PRETTY! ADD ANIMATION!

# How to Use
Directions are on the website - simply enter in the information and hit "ACTIVATE DRAFTER" for players to be assigned boosters!
