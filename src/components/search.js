import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import { useStyles } from './css/login-css'
import './css/App.css'
import { Paper, Fade } from '@material-ui/core';
const Gun = require('gun');
const SEA = require('gun/sea');
var gun = Gun();

export const Search = () => {
const classes = useStyles();
const [uld, setUld] = useState(null);
const [pub, setPub] = useState(null);
const [entered, setEntered] = useState(false);
// useEffect(() => {
//   console.log(uld)
// }, [uld])



        return (
            <div>
            <TextField
            className="text"
            id="search"
            label="Search field"
            type="search"
            onKeyPress = {(event) => {
              if (event.key === 'Enter') {
                var name = "~@" + document.getElementById('search').value
                gun.get(name).map().on((data) => {setUld({uld : data})})
                setEntered({entered: true}) // move it up to useEffect
                console.log(uld)
              }
            }} 
            classes={{
                root: classes.search
              }}
            margin="normal"
            
          />
          <Fade in={entered}>
          <Paper
          elevation={5}
          onClick = {() => {
            setPub({pub : uld.uld})
            console.log(uld.uld.pub)
          }}
          classes={{ 
            root: classes.searchRes
          }}
          >{ uld && <h1>{uld.uld.alias}</h1> }</Paper>
          </Fade>
         
         <div>{pub && <h1>{pub.pub.pub}</h1>}</div>
            </div>
        )
    
}

//fix te bugs on this and use user.trust for accepting freind requests and gun.on 
//ti read the changes on the node and new messages, use

//fix matrial-ui imports 




// const classes = useStyles();


        


//         return (
//             <div>
//             <TextField
//             id="search"
//             label="Search field"
//             type="search"
//             classes={{
//                 root: classes.search
//               }}
//             margin="normal"
            
//           />
//           <Button onClick={find}> Find</Button>
//             </div>
//         )
    
// }

// function find () {
//   var name = "~@" + document.getElementById('search').value
//   gun.get(name).once((data, key)=>{console.log(data)});
// }