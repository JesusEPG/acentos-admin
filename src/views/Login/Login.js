import React, { useState } from 'react';
import { 
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
import { toast } from 'react-toastify';

import { getServerBaseUrl } from '../../config';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);

  const validateForm = (currentEmail, currentPassword) => {
    const emailIsValid = currentEmail.trim().length > 0;
    const passwordIsValid = currentPassword.trim().length > 0;
    
    setFormIsValid(emailIsValid && passwordIsValid);
  }

  const handleFormSubmit = () => {
    formIsValid ? login() : toast.error("Todos los campos son requeridos");
  }

  const login = () => {
    var url = `${getServerBaseUrl()}/auth/login`;
    var data = {"email": email, "password": password};

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(response => toast.success('Success:'))
    .catch(error => toast.error("Something wrong !"));
  }

  return (
    <Container className='justify-content-center' style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Row className='justify-content-center'>
        <Col xs='8' lg='6' className='py-3' >
          <h4 className='text-center'>Inicio de Sesion</h4>
          <Form>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input 
                type="email"
                name="email"
                placeholder="Ingrese email"
                value={email}
                onChange={({target}) => {
                  setEmail(target.value);
                  validateForm(target.value, password);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input 
                type="password"
                name="password"
                placeholder="Ingrese password"
                value={password}
                onChange={({target}) => {
                  setPassword(target.value);
                  validateForm(email, target.value);
                }}
              />
            </FormGroup>
            <Row className='justify-content-center'>
              <Button type='button' onClick={handleFormSubmit} disabled={!formIsValid}>Submit</Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;