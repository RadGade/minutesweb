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

    return (
        <div>
        { pub && <h1>{pub}</h1> }
<Paper>
<Typography component="p">

</Typography>
</Paper>
        
        <TextField 
            id = "chatInput"
            label="Say hi 👋"
            type="text"
            margin="normal"
            onKeyPress = {(event) => {
                if (event.key === 'Enter') {
                var tuid = myuid.put.alias
                 var chatIn = document.getElementById("chatInput").value
                 .then(gun.get('chat').on(function(data){console.log(data)}))
                }
              }} 
            classes={{
                root: classes.talk
              }}
        />
        <Button onClick ={() => Chat.send()}>Send</Button>
        <Button onClick ={() => Chat.get()}>Get</Button>
        </div>
    )
}

//use Lifting State Up instead of session storage
//apend to the chat system 
//use map to cycle through each chat