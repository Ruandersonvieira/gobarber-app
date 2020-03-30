import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import Logo from '~/assets/logo.png';

import Background from '~/components/Background';
import { signInRequest } from '~/store/modules/auth/actions';

import {
  Container,
  Image,
  Form,
  FormInput,
  SubmitButton,
  SingLink,
  SingLinkText,
} from './styles';

export default function SingIn() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Background>
      <Container>
        <Image source={Logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
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
            Acessar
          </SubmitButton>
        </Form>
        <SingLink
          onPress={() => {
            navigation.navigate('SingUp');
          }}
        >
          <SingLinkText>Criar conta gratuita</SingLinkText>
        </SingLink>
      </Container>
    </Background>
  );
}
