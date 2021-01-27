import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import {
  Container, 
  Rectangle, 
  Column, 
  FullWidth, 
  HalfWidth, 
  Row, 
  Input, 
  TextArea,
  SubmitButton
} from './styles';

const FormContainer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [asyncState, setAsyncState] = useState(false);

  const emailRegexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const isValid = phone.trim().length > 0 && !phone.includes('_') &&
    name.trim().length > 0 && 
    message.trim().length > 0 && 
    emailRegexp.test(email) &&
    !asyncState;
  
  const handleName = (event: any) => {
    event.persist()
    setName(event.target.value);
  }

  const handleEmail = (event: any) => {
    event.persist()
    setEmail(event.target.value);
  }

  const handlePhone = (event: any) => {
    event.persist()
    setPhone(event.target.value);
  }

  const handleMessage = (event: any) => {
    event.persist()
    setMessage(event.target.value);
  }

  const handleSubmit = () => {
    setAsyncState(true);
  }
  
  return (
    <Container>
      <Rectangle src={process.env.PUBLIC_URL + "/assets/media/background/rectangle.png"} />

      <Column>
        <FullWidth>
          <Input 
            type='text' 
            placeholder='*Nome'
            spellCheck={false}
            value={name}
            onInput={handleName} />
        </FullWidth>

        <Row>
          <HalfWidth>
            <Input 
              type='email' 
              placeholder='*E-mail'
              spellCheck={false}
              value={email}
              onInput={handleEmail} />
          </HalfWidth>

          <HalfWidth>
            <InputMask mask="(99) 99999-9999" value={phone} onChange={handlePhone}>
              {(inputProps: any) =>
                <Input {...inputProps}
                  type='text' 
                  placeholder='*Telefone'
                  spellCheck={false} />}
            </InputMask>
          </HalfWidth>
        </Row>

        <FullWidth>
          <TextArea 
            placeholder='*Mensagem' 
            rows={8} 
            cols={50}
            spellCheck={false}
            value={message}
            onInput={handleMessage}></TextArea>
        </FullWidth>

        <FullWidth>
          <SubmitButton isDisabled={!isValid} onClick={handleSubmit}>Entrar</SubmitButton>
        </FullWidth>
      </Column>
    </Container>
  )
}

export default FormContainer;