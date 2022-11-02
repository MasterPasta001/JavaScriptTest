let a;
let n;
let newname;
const input = () => {

  
}

const entryPoint = Object.values(document.querySelector("#root"))[1]._context.provides.store
client = {
    hostId: JSON.parse(JSON.stringify(entryPoint.getState())).game.data.hostId,
    roomHash: JSON.parse(JSON.stringify(entryPoint.getState())).game.data.roomHash,
    localPlayer: JSON.parse(localStorage.previousContext).currentPlayer.playerId
}

const flood = (o, t, abc5) => {
  prompt(client.hostId);
  JSON.parse(JSON.stringify(entryPoint.getState())).game.data.hostId = "LBOXO"
}

input()
flood(n, a, newname)
