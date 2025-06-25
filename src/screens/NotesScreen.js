import React, { useState } from 'react'
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ImageBackground,
  TouchableOpacity
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import BackImage from '../../assets/JS.jpg'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import moment from 'moment'
import 'moment/locale/pt-br'


const taskDB = [
  {
    id: 1,
    title: 'Estudar React Native',
    desc: 'Aprender FlatList, estilos e hooks',
    estimateAt: new Date('2025-06-01')
  },
  {
    id: 2,
    title: 'Montar app simples',
    desc: 'Fazer uma tela de anotações com React Native.',
    estimateAt: new Date('2025-06-02')
  }
]

export default function NotesScreen() {
  const [notes, setNotes] = useState(taskDB)

  const deleteNote = id => {
    setNotes(notes.filter(note => note.id !== id))
  }

  const renderRightActions = id => (
    <TouchableOpacity
      onPress={() => deleteNote(id)}
      style={styles.swipeDelete}
    >
      <FontAwesome name="trash" size={20} color="#fff"/>
      <Text style={styles.swipeText}>Excluir</Text>
    </TouchableOpacity>
  )

  const renderItem = ({ item }) => {
    const formattedDate = moment(item.estimateAt).format('LL')

    return (
      <Swipeable renderRightActions={() => renderRightActions(item.id)}>
        <View style={styles.noteCard}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.desc}</Text>
          <Text style={styles.date}>{formattedDate}</Text>
        </View>
      </Swipeable>
    )
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={BackImage} style={styles.background}/>
      <Text style={styles.header}>Minhas Notas</Text>
      <FlatList
        data={notes}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingTop: 60
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10
  },
  list: {
    paddingHorizontal: 20
  },
  noteCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    elevation: 3
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  desc: {
    fontSize: 14,
    color: '#555',
    marginTop: 4
  },
  date: {
    fontSize: 12,
    color: '#999',
    marginTop: 6
  },
  swipeDelete: {
    backgroundColor: '#B13B44',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    borderRadius: 8,
    marginVertical: 4
  },
  swipeText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4
  },
  background: {
    flex: 1
}
})
