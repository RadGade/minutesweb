
import { createBrowserHistory } from 'history';
const Gun = require('gun');
const SEA = require('gun/sea');
const jc = require('json-cycle');
const history = createBrowserHistory({forceRefresh:true});
var gun = Gun();
var user = gun.user() 

class Auth {

  constructor() {
    this.authenticated = false;
    this.pub = "";
    this.ack = [];
  }
      signup () {
        var uid = document.getElementById('uid').value
        var pwd = document.getElementById('pwd').value
        user.create(uid, pwd, ack => (this.pub = ack)).then(user)
     }
    
    signin() {
        var uid = document.getElementById('uid').value
        var pwd = document.getElementById('pwd').value
        console.log(uid, pwd)
        user.auth(uid, pwd, ack => (this.ack = ack))
        if (this.ack.ack !== null) {
          console.log(this.ack)
          // history.push('/home')
          var ack = JSON.stringify(jc.decycle(this.ack))
              if (typeof(Storage) !== "undefined") {
                sessionStorage.setItem('data', ack)
                console.log("support")
              } else {
               console.log("why you use  IE")
             } 
        }else {
          console.log("lmlmalmd")
        }


 }
 signout() {
    this.authenticated = false;
     user.leave()
     history.push("/")
 }


 isAuthenticated() {
    return this.authenticated;
  }

}

export default new Auth();




