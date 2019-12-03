import React, { Component } from 'react'
import './css/App.css'
import Freinds from './freinds'
import {Button} from '@material-ui/core';
import { useStyles } from './css/login-css'
import Auth from '../logic/auth'
import {Link} from 'react-router-dom'
import Posts from './posts'
const Gun = require('gun');
const SEA = require('gun/sea');

var gun = Gun();
var user = gun.user() 
class Home extends Component {

constructor(props) {
    super(props)
    this.name = window.sessionStorage.getItem("data")
    this.state = {
         name: "Someone" ,
         recall : [],
    }
}

// when user logs in I encrypt and save the ack of the user in their machine and 
//whenever I need to access the info I decrypt it and use it

    render() {
        var name = JSON.parse(this.name)
        console.log(name)
        return (
            <div> 
                <h1 className="welcome"> Welcome {name.put.alias}</h1>
                 <Button
                onClick={() => Auth.signout()} type="submit" variant="contained"
                >Logout</Button>
                <Posts />
                <Freinds />

            </div>
        )
    }
}

export default Home


//use recall to get the user info  
// <button onClick={() => Auth.signout()}>Bye</button> 

// <Button
// onClick={() => Auth.signout()} type="submit" variant="contained"
// >Logout</Button>
// <Link to="/vid-call"><Button>Vid</Button></Link>