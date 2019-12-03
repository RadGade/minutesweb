import React, {useEffect} from 'react'
import { Paper, Typography, TextField, Button} from '@material-ui/core';
import { useStyles } from './css/login-css'
import Chat from '../logic/chat'
const Gun = require('gun');
const SEA = require('gun/sea');
var gun = Gun();
var pub = sessionStorage.getItem("name")

export const ChatCom = () => {

    var uid = sessionStorage.getItem('data')
    var myuid = JSON.parse(uid)
    const classes = useStyles();
useEffect(Chat.getToDom)
    return (
        <div>
        { pub && <h1>{pub}</h1> }

        
        <TextField 
            id = "chatInput"
            label="Say hi 👋"
            type="text"
            margin="normal"
            classes={{
                root: classes.talk
              }}
        />
        <Button onClick ={() => Chat.send().then(ack=>console.log(ack)).catch(err=>console.warn(err))}>Send</Button>
        <Button onClick ={() => Chat.getToDom()}>Get</Button>

<ul id ="messages">
              
</ul>
        </div>
    )
}

//use Lifting State Up instead of session storage
//apend to the chat system 
//use map to cycle through each chat
