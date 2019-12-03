import React, { useEffect } from 'react'
import {TextField, InputAdornment, Button } from '@material-ui/core';
import {AccountCircle, AddAPhotoOutlined } from '@material-ui/icons'; 
import { useStyles } from './css/login-css'
import PostsLogic from '../logic/posts'
const Posts = () => {
    const classes = useStyles();
    useEffect(PostsLogic.getToDom)
    return (
        <div>
        <TextField
        id="postInput" 
        placeholder="Hello World 🙌"
        type="multiline"
        margin="normal"
        classes={{
            root: classes.postInput
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
            endAdornment: (
                <InputAdornment position="end">
                <AddAPhotoOutlined />
              </InputAdornment>
              ),
          }}
          variant="outlined"
          rowsMax="4"
      /> 
      <Button
      onClick = {() => PostsLogic.send()}
      classes={{
        root: classes.post
      }}
      >Post</Button>
      <ul id="posts">
       
      </ul>
        </div>
    )
}

export default Posts