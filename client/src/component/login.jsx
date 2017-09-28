import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

import * as authActions from '../actions/authActions.js';

class Login extends Component {
  constructor (props) {
    super(props);
  }

  emailSignin() {
    let user = document.getElementById('inputNM');
    let pw = document.getElementById('inputPW');

    this.props.actions.emailLogin(user.value, pw.value);
  }
  
  getinfo() {
    console.log(localStorage.userid);
  }
  // ["red","orange","yellow","olive","green","teal","blue",
  // "violet","purple","pink","brown","grey","black","facebook","google plus",
  // "instagram","linkedin","twitter","vk","youtube"]


  render() {
    return (
      <div className='login-form'>
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 500 }}>
            <Header as='h2' color='olive' textAlign='center'>
              {/* <Image src='/logo.png' /> */}
              {' '}Log-in to your account
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input
                  id="inputNM"
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='E-mail address'
                />
                <Form.Input
                  id="inputPW"
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />

                <Button color='olive' fluid size='large'
                  onClick={(e) => {
                    e.preventDefault();
                    this.emailSignin();
                  }}>Login</Button>
                  
              </Segment>
                <Button color='google plus' fluid size='large'
                onClick={() => this.props.actions.googleLogin()}>Log In with Google</Button>
            </Form>
            <Message>
              New to us? <a href='/signup'>Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
};

const loginDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(null, loginDispatch)(Login);
    // <div className="wrapper">
    //   <h1>Log In</h1>
    //   <form>
    //     <label>
    //       Email: 
    //       <input type="text" id="inputNM"/>
    //     </label>
    //   </form>
    //   <form>
    //     <label>
    //       Password: 
    //       <input type="password" id="inputPW"/>
    //     </label>
    //   </form>
    //   <button onClick={(e) => {
    //     e.preventDefault();
    //     this.emailSignin();
    //     }}>Log In</button>             
    //   <button onClick={() => this.props.actions.googleLogin()}>Sign in With Google</button>              
    //   <button onClick={() => this.getinfo()}>Show User Info</button>
    //   </div>