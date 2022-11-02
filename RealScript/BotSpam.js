let a;
let n;
let newname;
const input = () => {
    n = prompt("Name of Your Bots: ")
    if(n == ''){
        alert('Name Needs A Value!')
        throw('Name Needs A Value!')
    }
  newname = prompt("If you want a different name after botting type it here if you dont type no: ")
    if(newname == ''){
        alert('Name Needs A Value!')
        throw('Name Needs A Value!')
    }
   if(newname == 'no'){
        prompt("Press resume when the bot is done to keep your name!")
        newname = "no"
    }
    a = parseInt(prompt("How Many Bots Do You Want?: "));
    if(a <= 0 || a == NaN){
        alert('Amount Needs A Valid Number!')
        throw('Amount Needs A Valid Number!')
    }
  
}

const entryPoint = Object.values(document.querySelector("#root"))[1]._context.provides.store
client = {
    hostId: JSON.parse(JSON.stringify(entryPoint.getState())).game.data.hostId,
    roomHash: JSON.parse(JSON.stringify(entryPoint.getState())).game.data.roomHash,
    localPlayer: JSON.parse(localStorage.previousContext).currentPlayer.playerId
}

const flood = (o, t, abc5) => {
    for (i = 0; i < t; i++){
        entryPoint._actions.connectSocket[0](), entryPoint._actions.joinRoom[0]({
        roomHash: client.roomHash,
        playerId: `${o}-${i}`});
        console.log(`${i}/${t} Bots Connected!`)
      
    }
      if (abc5 != "no")
      {
        entryPoint._actions.connectSocket[0](), entryPoint._actions.joinRoom[0]({
        roomHash: client.roomHash,
        playerId: abc5});
      }
  else
  {
    entryPoint._actions.connectSocket[0](), entryPoint._actions.joinRoom[0]({
        roomHash: client.roomHash,
        playerId: client.localPlayer});
  }
}

input()
flood(n, a, newname)
