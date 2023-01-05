import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { Participant } from '../../components/Participant';

export default function Home() {
  const participants = [
    'Lucas',
    'Shaco',
    'Garen',
    'Nasus',
    'Bersek',
    'Luan',
    'Marcio',
    'Kled',
    'Saci',
    'Chumbao',
    'Faustao'
  ]

  function handleParticipantAdd() {
    if (participants.includes('Lucas')) {
      return Alert.alert('Participante existente', `Já exisite um participante com o nome x`)
    }
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert('Remover', `Deseja Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Removido!')
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