import React, { Component } from 'react';
import NavBar from './NavBar';
import FormField from './FormField';
import CoolButton from './CoolButton';
import SignUp from './Signup';
import Container from './Container';
import Message from './Message';

class App extends Component {
  render() {
    return (
      <Container>
        <NavBar />
        <hr />
        <hr />
        <hr />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <hr />
        <hr />
        <hr />
        <CoolButton isSmall isDanger isRounded>
          Button 1
        </CoolButton>
        <hr />
        <hr />
        <hr />
        <CoolButton isSmall isSuccess>
          Button 2
        </CoolButton>
        <hr />
        <hr />
        <hr />
        <SignUp />
        <hr />
        <hr />
        <hr />
        <Message isInfo title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          <strong>Pellentesque risus mi</strong>.
        </Message>
      </Container>
    );
  }
}

export default App;
