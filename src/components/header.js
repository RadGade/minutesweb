import React, { Component} from 'react';
import './css/App.css'

import Auth from '../logic/auth'



export function Header () {

    console.log(Auth.authenticated)
    if (Auth.authenticated == false) {
        return(
            <div>
                <h1 className="header">minutes</h1>
                

                <h2 className="footer">Skyfall Labs</h2>
            </div>
        )
    } else {
        console.log('no')
        return(
            <div>
                <h1 className="header">minutes</h1>


                <h2 className="footer">Skyfall Labs</h2>
            </div>
        )
    }

    
}
