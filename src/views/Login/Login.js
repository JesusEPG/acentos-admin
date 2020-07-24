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

import { getServerBaseUrl } from '../../config';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleFormSubmit = () => {
    console.log('submit: ');
    

    var url = `${getServerBaseUrl()}/auth/login`;
    var data = {"email": email, "password": password};

    console.log(url);
    console.log(data);

    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  }

  return (
    <Container className='justify-content-center' style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Row className='justify-content-center'>
        <Col xs='8' lg='6' className='py-3' >
          <h4 className='text-center'>Inicio de Sesion</h4>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input 
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Ingrese email"
                value={email}
                onChange={({target}) => setEmail(target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input 
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Ingrese password"
                value={password}
                onChange={({target}) => setPassword(target.value)}
              />
            </FormGroup>
            <Row className='justify-content-center'>
              <Button type='button' onClick={handleFormSubmit}>Submit</Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;