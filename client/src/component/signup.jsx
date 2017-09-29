import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

import * as authActions from '../actions/authActions.js';

class Signup extends Component {
  constructor (props) {
    super(props); 
  }

  emailSignUp() {
    let email = document.getElementById('inputSignupEmail');
    let pw = document.getElementById('inputSignupPw');

    this.props.actions.emailSignUp(email.value, pw.value);
  }

  render() {
    return (
      <div className='login-form'>
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
            margin-top: 80px;
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
              {' '}Sign Up
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input
                  id="inputSignupEmail"
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='E-mail address'
                />
                <Form.Input
                  id="inputSignupPw"
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />

                <Button color='olive' fluid size='large'
                  onClick={(e) => {
                    e.preventDefault();
                    this.emailSignUp();
                  }}>Sign Up</Button>

              </Segment>
                <Button color='black' fluid size='large'
                onClick={() => this.props.actions.googleLogin()}>Sign Up with Google</Button>
            </Form>
            <Message>
              Already have an account? <a href='/login'> Log In</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>

    )
  }
};

const signupDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
}
export default connect(null, signupDispatch)(Signup);
    // <div className="wrapper">
    //   <h1>Sign Up</h1>
    //   <form>
    //     <label>
    //       Email: 
    //       <input type="text" id="inputSignupEmail" />
    //     </label>
    //   </form>
    //   <form>
    //     <label>
    //       Password: 
    //       <input type="password" id="inputSignupPw" />
    //     </label>
    //   </form>
    //     <button onClick={(e) => {
    //       e.preventDefault();
    //       this.emailSignUp();
    //       }}
    //     >Submit</button>     
    // </div>