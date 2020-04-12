import React, { useState, useEffect } from 'react';

import Background from '~/components/Background';
import DateInput from '~/components/DateInput';

import api from '~/services/api';

import { Container, HoursList, Hour, Title } from './styles';

export default function SelectDateTime({ route, navigation }) {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);

  const { provider } = route.params;

  useEffect(() => {
    async function loadAvailable() {
      const response = await api.get(`providers/${provider.id}/available`, {
        params: {
          date: date.getTime(),
        },
      });
      setHours(response.data);
    }

    loadAvailable();
  }, [date, provider.id]);

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
        <HoursList
          data={hours}
          keyExtractor={(item) => item.time}
          renderItem={({ item }) => (
            <Hour
              onPress={() => {
                navigation.navigate('Confirm', { item });
              }}
              enabled={item.available}
            >
              <Title>{item.time}</Title>
            </Hour>
          )}
        />
      </Container>
    </Background>
  );
}
