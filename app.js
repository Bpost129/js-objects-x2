// object literal notation
const midNum = 27

const game = {
  title: "Guess the Number!",
  biggestNum: 100,
  midNum,  
}

game.smallestNum = 1
game.numGuesses = 0
delete game.numGuesses
game.play = function() {
  this.secretNum = Math.floor(Math.random() * 
    (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
}
game.play()

console.log(game)

// for (let key in game) {
//   console.log(`The value of the ${key} property is ${game[key]}`)
// }

Object.values(game).forEach(function(val) {
  console.log(val)
})







// const voteArr = ['yes', 'no', 'yes', 'no', 'no', 'no', 'yes', 'yes', 'no', 'no']

// function voteTallyDot(arr) {
//   const tally = { yes: 0, no: 0 }
//   for (let i = 0; i < arr.length; i++) {
//     const vote = arr[i]
//     if (vote === 'yes') tally.yes++
//     else tally.no++
//   }
//   return tally
// }

// console.log(voteTallyDot(voteArr))

// function voteTallySquare(arr) {
//   const tally = {}
//   for (let i = 0; i < arr.length; i++) {
//     const vote = arr[i]
//     if (tally[vote]) tally[vote]++
//     else tally[vote] = 1
//   }

//   return tally
// }


// console.log(voteTallySquare(voteArr))



