import Game from './model/game'
import Player, { IPlayer } from './model/player'

export let game: Game

const initConnection = (socket: SocketIO.Socket) => {
  game = new Game(socket)
  socket.on('JOIN', playerJoin)
}

const playerJoin = (playerName: IPlayer['name'], playerType: IPlayer['type']) => {
  const player = new Player(playerName, playerType)
  console.info('[Player Join]', `${player.name} - ID: ${player.ID}`)
  game.goWaitingList(player)
}

export {
  initConnection,
  playerJoin
}