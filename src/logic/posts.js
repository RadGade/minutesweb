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
        // gun.on('nasa/public', (data) => {
        //   console.log(data)
        // })
      // return gun.get("nasa/public").get('outbox').map().on((data) => {inPosts = data}, {change : true}).then(console.log(inPosts));
    } 

     getToDom(){
      var inPosts = ""
      // gun.on(data{ ["nasa/public"]}, key: any) => void, option?: boolean | { change: boolean; }): )
      gun.on('nasa/public', (data) => {
        inPosts = data
      }).then(console.log(inPosts))
      // gun.get("nasa/public").get('outbox').map().on((data) => {inPosts = data})
      console.log(inPosts)
      var node = document.createElement('li')
      var newLetter = document.createTextNode(inPosts);
      node.appendChild(newLetter)
      document.getElementById('posts').appendChild(node) 
    }

  } 
  export default new PostsLogic()


  /* 
  I store everything into a flat data object then build the structure I need later in the component
  my onData callback makes sure stuff saved to data is decrypted if you have the appropriate epriv
  I really would recommend separating the collection of data from gun, and then the building of the object structure you need.
  the getSet is useful in the second phase, to build an array from a gun set.
  but this is me being opinionated
  I use the same callback for every .on( call, which just stores the object in a by-id object
  (decrypting if necessary) 

  import { Editor } from "./Editor";
  import { GunContinuousSequence } from "crdt-continuous-sequence";
  import React, { useState, useEffect } from "react";
  import { useGun, getId, getUUID, getPub, getSet, put } from "nicks-gun-utils";

  const Gun = require("gun/gun");
  require("gun/sea");

  export const GunEditor = ({ id, priv, epriv }) => {
    const [gun, setGun] = useState(null);
    const pub = getPub(id);
    const pair = pub && priv && { pub, priv, epriv };
    const [data, onData] = useGun(Gun, useState, pair);

    useEffect(() => {
      const gun = Gun({
        peers: ["https://gunjs.herokuapp.com/gun"]
      });
      gun.get(id).on(onData);

      gun
        .get(`${id}.atoms`)
        .on(onData)
        .map()
        .on(onData);
      setGun(gun);
    }, []);

    if (!gun) {
      return <div>Loading...</div>;
    }

    const cs = new GunContinuousSequence(gun);
    const document = {
      ...data[id],
      atoms: cs.sort(getSet(data, `${id}.atoms`))
    };

    return (
      <Editor
        getId={getId}
        document={document}
        id={id}
        onSetDocumentTitle={title => put(Gun, gun, id, "title", title, pair)}
        onAddAtom={async (atom, prev, next) => {
          const key = getUUID(gun);
          const atomId = `${id}.atoms.${key}`;
          await put(Gun, gun, atomId, "atom", atom, pair);
          await put(
            Gun,
            gun,
            atomId,
            "index",
            JSON.stringify(cs.getIndexBetween(atomId, prev, next)),
            pair
          );
          await put(Gun, gun, `${id}.atoms`, key, { "#": atomId }, pair);
        }}
        onDeleteAtom={async atomId => {
          await put(Gun, gun, `${id}.atoms`, /\w+$/.exec(atomId)[0], null, pair);
        }}
      />
    );
};

*/