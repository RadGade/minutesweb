const Gun = require('gun');
const SEA = require('gun/sea');
var gun = Gun();
var me = gun.user() 
var pub = sessionStorage.getItem('data') //for some reason this says this undefined, plz take care of it future rishi
var mypubKey = pub.put.pub
var PeerpubKey = sessionStorage.getItem('pub')
var currentdate = new Date()
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

  class Chat  {

    send(){
      var input = document.getElementById('chatInput').value
      let time = datetime
      let msg = {}
      msg[time]=input
      gun.user().get("outbox").get('letters').put(msg) // This is what the other peer is listening in `.on` in get method
      gun.get("nasa/"+mypubKey).get('letters').put(msg) // This is for your DOM printing
    }

  get() { 
//check if the user is authed yet ypu dummy
  //   gun.get('~' + PeerpubKey).get("nasa/"+ mypubKey).get('outbox').map().on((data) => {
  //     console.log(data)
  //     gun.get('nasa/'+ PeerpubKey).get("letters").put(data)
  //   })
  // }
  console.log(pub)
}}

// export class posts {

//   public() {

//   }

//   private(){

//   }
// }

// function likes () {

// }

export default new Chat()
/*so let's simplify you have 
- your letters (all messages, yours & other peer) which you draw  to DOM
- you have your outbox , when you say something, that the other person listens to with .on(...) and adds to their letters when they arrive
- you listen with .on(...) the other peers messages and add them to letters when they arrive

on your send(){...} you would add the message to your letters and to the outbox so your message can trigger the other persons .on */