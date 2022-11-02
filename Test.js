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
        entryPoint._actions.connectSocket[0](), entryPoint._actions.joinRoom[0]({
        roomHash: client.roomHash,
        playerId: client.localPlayer});
}

input()
flood(n, a, newname)
