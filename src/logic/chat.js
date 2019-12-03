const Gun = require('gun');
const SEA = require('gun/sea');
var CryptoJS = require("crypto-js");
var gun = Gun();
// var me = gun.user() 
var pub = JSON.parse(sessionStorage.getItem('data'))  //for some reason this says this undefined, plz take care of it future rishi. //don't worry past rishi

var PeerpubKey = sessionStorage.getItem('pub') //other peer's pub key
var currentdate = new Date()
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();



  class Chat  {


    constructor(){
      this.peerChat = []
      this.myChat = []
      this.newChat = ""
    }

    async send(){
      var input = document.getElementById('chatInput').value
      var me = gun.user() 
      console.log(input)
      console.log(datetime) 
<<<<<<< HEAD
      let time = datetime
      let msg = {}
      msg[time]=input
      gun.get("nasa/"  + PeerpubKey).get("outbox",(data) => {console.log(data)}).put(msg, (data) => {console.log(data)}) // This is what the other peer is listening in `.on` in get method
      gun.get("nasa/" + PeerpubKey).get("letters",(data) => {console.log(data)}).put(msg , (data) => {console.log(data)}) // Store my sent messages in nasa/counterpart.letters, This is for your DOM printing - a list 
=======
      var input = document.getElementById('chatInput').value
      var EncryptedInput = CryptoJS.SHA3(input, {outputLength: 512}) //may wanna look into this to see WordArray Object 
      let time = datetime
      let msg = {}
      msg[time]=EncryptedInput
      gun.get("nasa/"  + PeerpubKey).get("outbox", function(data){console.log(data)}).put(msg, function(data){console.log(data)}) // This is what the other peer is listening in `.on` in get method
      gun.get("nasa/" + PeerpubKey).get("letters", function(data){console.log(data)}).put(msg , function(data){console.log(data)}) // Store my sent messages in nasa/counterpart.letters, This is for your DOM printing - a list 
>>>>>>> 2d4be2f500dce1d1512dfc70721658b189ed5fb3
      console.log(msg)
      var newLetter = document.createTextNode(this.myChat);
      var currentDiv = document.getElementById("messages"); 
      currentDiv.appendChild(newLetter)
      return Promise.resolve('Letters Sent')
    }

    async get(){
      var mypubKey = pub.put.pub
      var other = {}
      //utility function to get once all messages for pubkey who   alice - 13 bob - 14
      return gun.get("nasa/"+mypubKey).get('outbox').map().on((data) => {this.peerChat.push(data)}, {change : true}).then(console.log(this.peerChat));
    }

     getToDom(){
      var mypubKey = pub.put.pub
      var newChat = ""
      gun.get("nasa/"+ mypubKey).get('outbox').map().on((data) => {newChat = data})
      console.log(newChat)
      var node = document.createElement('li')
      var newLetter = document.createTextNode(newChat);
      node.appendChild(newLetter)
      document.getElementById('messages').appendChild(node) 
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