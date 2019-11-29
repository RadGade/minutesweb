import React, { Component } from 'react';
import {getVideo} from './PeerRec';
import {Link} from 'react-router-dom'


export default class VidCall extends Component {

    render() {
        return (
            <div>
                <button  onClick={getVideo}>Start Camera</button>
                    <br></br>
                    Streamer
                    <br></br>
                    <video id="video" autoPlay ></video>
                    <br></br>
                    Viewer
                    <br></br>
                    <div id="my_camera">Click to resume video</div>
                <Link to="/home"><button>back</button></Link>
                <video id="video" height="480" width="800" autoPlay></video>
            </div>
        )
    }
}

