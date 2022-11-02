let a;
let n;
let newname;
const input = () => {
    n = prompt("Your spoofed name: ")
    if(n == ''){
        alert('Name Needs A Value!')
        throw('Name Needs A Value!')
    }
}

const entryPoint = Object.values(document.querySelector("#root"))[1]._context.provides.store
client = {
    hostId: JSON.parse(JSON.stringify(entryPoint.getState())).game.data.hostId,
    roomHash: JSON.parse(JSON.stringify(entryPoint.getState())).game.data.roomHash,
    localPlayer: JSON.parse(localStorage.previousContext).currentPlayer.playerId
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const flood = (o, t, abc5) => {
    entryPoint._actions.connectSocket[0](), entryPoint._actions.joinRoom[0]({
        roomHash: client.roomHash,
        playerId: "SPOOF-"+makeid(5)});
    sleep(250).then(() => {
    entryPoint._actions.connectSocket[0](), entryPoint._actions.joinRoom[0]({
        roomHash: client.roomHash,
        playerId: o + " "});
})
}

input()
flood(n, a, newname)
