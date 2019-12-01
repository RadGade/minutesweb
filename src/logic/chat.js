const Gun = require('gun');
const SEA = require('gun/sea');
var gun = Gun();
// var me = gun.user() 
var pub = JSON.parse(sessionStorage.getItem('data'))  //for some reason this says this undefined, plz take care of it future rishi.

var PeerpubKey = sessionStorage.getItem('pub') //other peer's pub key
var currentdate = new Date()
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

  class Chat  {


    async send(){
      var input = document.getElementById('chatInput').value
      var me = gun.user() 
      console.log(input)
      console.log(datetime) 
      var input = document.getElementById('chatInput').value
      let time = datetime
      let msg = {}
      msg[time]=input
      gun.get("nasa/"  + PeerpubKey).get("outbox", function(data){console.log(data)}).put(msg, function(data){console.log(data)}) // This is what the other peer is listening in `.on` in get method
      gun.get("nasa/" + PeerpubKey).get("letters", function(data){console.log(data)}).put(msg , function(data){console.log(data)}) // Store my sent messages in nasa/counterpart.letters, This is for your DOM printing - a list 
      console.log(msg)
      return Promise.resolve('Letters Sent')
    }

    async get(){ 
      var mypubKey = pub.put.pub
      var other = {}
      //utility function to get once all messages for pubkey who   alice - 13 bob - 14
      return gun.get("nasa/"+mypubKey).get('outbox').map().on((data) => {console.log(data)}, true).then(console.log(other));
    }

    async getToDom(from){
      var container = document.getElementById('#messageList');
      const me = gun.user();
      const fromUser = await gun.user(from).once();
      me.get('nasa/'+from).get("letters").map().on((letter) => {
        // insert to dom via createElement or something 
        console.log("fromUser.alias equals to letter.from", letter.from == fromUser.alias); // maybe hilight other users text
        console.log("letter from is my alias?", me.is.alias == letter.from) // maybe do stuff with it, like enable editing?  
        console.log("from", letter.from, "to", letter.to, "input", letter.input,"time", letter.time);
      })
    }

  }
  export default new Chat()


/*so let's simplify you have 
- your letters (all messages, yours & other peer) which you draw  to DOM
- you have your outbox , when you say something, that the other person listens to with .on(...) and adds to their letters when they arrive
- you listen with .on(...) the other peers messages and add them to letters when they arrive

on your send(){...} you would add the message to your letters and to the outbox so your message can trigger the other persons .on */

/*
This how you will apped to the array that you will display 
		var names = ['vitosh','academy','dot','com'];
		var ul = document.createElement('ul');
		document.getElementById('myList').appendChild(ul);

		names.forEach(function(name){
			var li = document.createElement('li');
			ul.appendChild(li);
			li.innerHTML += name;
    }); 
    
*/