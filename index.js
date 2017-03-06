var prompt = require('prompt')
var board = new Array(9)
board.fill(' ')

prompt.start()
var playerone
var playertwo
function getPlayers() {
  var promise = new Promise(function (resolve, reject) {
    prompt.get(['PlayerOne'], (err, text) => {
      if (err) {
        console.log(err)
        return
      }
      console.log(text)
      playerone = text.PlayerOne
      if (playerone) {
        resolve()
      } else {
        reject(Error('Invalid Input'))
      }
    })
  })

  promise.then(() => {
    prompt.get(['PlayerTwo'], (err, text) => {
      if (err) {
        console.log(err)
        return
      }
      playertwo = text.PlayerTwo
    })
  })
}

const printBoard = () => {
  console.log(`
   ${board[0]}| ${board[1]} |${board[2]}
 \n ----------
  \n   ${board[3]}| ${board[4]} |${board[5]}
  \n ----------
  \n   ${board[6]}| ${board[7]} |${board[8]}`)
}

