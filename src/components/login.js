import React from 'react'
import Auth from '../logic/auth'
import {TextField, Button} from '@material-ui/core';
import { useStyles } from './css/login-css'


export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    }
  }

  showLogin() {
    this.setState({
      isLoginOpen: true,
      isRegisterOpen: false
    })
  }

  showRegister() {
    this.setState({
      isLoginOpen: false,
      isRegisterOpen: true
    })
  }
  render() {
    return(
      <div>
        <h1 className={"login" + (this.state.isLoginOpen ? "-selected" : "")} onClick={this.showLogin.bind(this)}> Login</h1>
        <h1 className={"register" + (this.state.isRegisterOpen ? "-selected" : "")} onClick={this.showRegister.bind(this)}> Register</h1>
        {this.state.isLoginOpen && <LoginBox />}
        {this.state.isRegisterOpen && <RegisterBox />}
      </div>
    )
  }
  }
  
const LoginBox = () => {
  const btnClass = useStyles();
        return(
            <div>
            <div className="login-con">
            <form className="auth">
                <TextField
                id="uid"
                className="uid"
                spacing={3}
                label="Username"
                margin="dense"
                variant="outlined"
                />

            <TextField
            id="pwd"
            classes={{
              root: btnClass.uid
            }}
            label="Password"
            type="password"
            margin="dense"
            variant="outlined"
            />
     
            </form>
            <div className="auth-btn">
          <Button
          onClick={() => Auth.signin()} type="submit" variant="contained"
          classes={{
            root: btnClass.signin, // class name, e.g. `classes-nesting-root-x`
            label: btnClass.label, // class name, e.g. `classes-nesting-label-x`
          }}
        >
         Login
        </Button>

            </div>

            </div>
            </div>
        )
    
}

const RegisterBox = () => {
  const btnClass = useStyles();
        return(
            <div>
            <div className="login-con">
            <form className="auth-res">
                <TextField
                id="uid"
                classes={{
                  root: btnClass.Email
                }}
                spacing={3}
                label="Username"
                margin="dense"
                variant="outlined"
                />
            <TextField
            id="pwd"
            classes={{
              root: btnClass.Email
            }}
            label="Password"
            type="password"
            margin="dense"
            variant="outlined"
            />
            <TextField
            id="Email"
            classes={{
              root: btnClass.Email 
            }}
            spacing={3}
            label="Email"
            margin="dense"
            variant="outlined"
            />

            </form>
            <div className="auth-btn">
          <Button
          onClick={() => Auth.signup()} type="submit" variant="contained"
          classes={{
            root: btnClass.signup, // class name, e.g. `classes-nesting-root-x`
            label: btnClass.label, // class name, e.g. `classes-nesting-label-x`
          }}
        >
         Signup
        </Button>

            </div>

            </div>
            </div>
        )
    
}



//there is a problem with Auth.signin(), so look into that 

// <Button
// onClick={() => Auth.signup()} type="submit" variant="contained"
// classes={{
//   root: btnClass.signup, // class name, e.g. `classes-nesting-root-x`
//   label: btnClass.label, // class name, e.g. `classes-nesting-label-x`
// }}
// >
// Sign Up
// </Button>