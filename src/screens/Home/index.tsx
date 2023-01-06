import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { Participant } from '../../components/Participant';
import { useState } from 'react';

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState<string>('');

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert('Participante existente', `Já exisite um participante com o nome ${participantName}`)
    }

    setParticipants([...participants, participantName]);
    setParticipantName('');
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert('Remover', `Deseja Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          Alert.alert('Removido!');
          setParticipants(participants.filter(p => p !== name));
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Janeiro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Adicione Participantes
          </Text>
        )}
      />
    </View>
  );
}