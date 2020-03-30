import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import Logo from '~/assets/logo.png';

import Background from '~/components/Background';
import { signUpRequest } from '~/store/modules/auth/actions';

import {
  Container,
  Image,
  Form,
  FormInput,
  SubmitButton,
  SingLink,
  SingLinkText,
} from './styles';

export default function SingUp() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <Background>
      <Container>
        <Image source={Logo} />
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            ref={emailRef}
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            returnKeyType="send"
            ref={passwordRef}
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Criar conta
          </SubmitButton>
        </Form>
        <SingLink
          onPress={() => {
            navigation.navigate('SingIn');
          }}
        >
          <SingLinkText>Já tenho conta</SingLinkText>
        </SingLink>
      </Container>
    </Background>
  );
}
