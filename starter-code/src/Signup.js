import NavBar from './NavBar';
import FormField from './FormField';
import CoolButton from './CoolButton';
import React from 'react';

function SignUp(props) {
  return (
    <div>
      <NavBar />
      <form>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField
          label="Password"
          type="password"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <CoolButton type="submit">Submit</CoolButton>
      </form>
    </div>
  );
}

export default SignUp;
