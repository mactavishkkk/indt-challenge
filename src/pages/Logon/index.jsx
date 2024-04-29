import React, { useState } from 'react';
import { Button, ButtonDiv, Container, Input, LoginForm } from './style';

const Logon = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert('Username:', username);
    alert('Password:', password);
  };

  const handleRegister = () => {
    alert('Username:', username);
    alert('Password:', password);
  };

  return (
    <Container>
      <LoginForm>
        <h2 style={{marginBottom: 30}}>Login</h2>
        <Input
          type="email"
          placeholder="example@email.com"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ButtonDiv>
          <Button onClick={handleLogin}>Login</Button>
          <Button onClick={handleRegister}>Register</Button>
        </ButtonDiv>
      </LoginForm>
    </Container>
  );
};

export default Logon;