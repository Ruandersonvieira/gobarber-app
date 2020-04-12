import React, { useMemo } from 'react';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { CommonActions } from '@react-navigation/native';

import api from '~/services/api';

import Background from '~/components/Background';

import { Container, Avatar, Name, Time, SubmitButton } from './styles';

export default function Confirm({ route, navigation }) {
  const { provider } = route.params;
  const { time } = route.params;

  const dateFormatted = useMemo(
    () => formatRelative(parseISO(time), new Date(), { locale: pt }),
    [time]
  );

  async function handleAddApointment() {
    await api.post('appointments', { provider_id: provider.id, date: time });

    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: 'Dashboard' }],
      })
    );
    navigation.navigate('Dashboard');
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: provider.avatar
              ? provider.avatar.url
              : `https://api.adorable.io/avatar/50/${provider.name}}.png`,
          }}
        />
        <Name>{provider.name}</Name>
        <Time>{dateFormatted}</Time>
        <SubmitButton onPress={handleAddApointment}>
          Confirmar Agendamento
        </SubmitButton>
      </Container>
    </Background>
  );
}
