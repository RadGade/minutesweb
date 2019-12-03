const Gun = require('gun')
const SEA = require('gun/sea')
var gun = Gun();  
// var me = gun.user() 
var pub = JSON.parse(sessionStorage.getItem('data'))  //for some reason this says this undefined, plz take care of it future rishi. //don't worry past rishi

var PeerpubKey = sessionStorage.getItem('pub') //other peer's pub key
var currentdate = new Date()
var datetime = "Posted on" + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

  class PostsLogic  {


    constructor(){
      this.inPosts = []
      this.myPosts = []
      this.newChat = ""
    }

    async send(){
      var input = document.getElementById('postInput').value
      var me = gun.user() 
      console.log(input)
      console.log(datetime) 
      let time = datetime
      let msg = {}
      msg[time]=input
      gun.get("nasa/public").get("outbox",(data) => {console.log(data)}).put(msg, (data) => {console.log(data)}) // This is what the other peer is listening in `.on` in get method
     // Store my sent messages in nasa/counterpart.letters, This is for your DOM printing - a list 
      console.log(msg)
       Promise.resolve('Post published')
    }

     get(){ 
         var inPosts = {}
      //utility function to get once all messages for pubkey who   alice - 13 bob - 14
      return gun.get("nasa/public").get('outbox').map().on((data) => {inPosts = data}, {change : true}).then(console.log(inPosts));
    } 

     getToDom(){
      var inPosts = ""
      gun.get("nasa/public").get('outbox').map().on((data) => {inPosts = data})
      console.log(inPosts)
      var node = document.createElement('li')
      var newLetter = document.createTextNode(inPosts);
      node.appendChild(newLetter)
      document.getElementById('posts').appendChild(node) 
    }

  }
  export default new PostsLogic()