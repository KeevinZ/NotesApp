import { GestureHandlerRootView } from 'react-native-gesture-handler'
import NotesScreen from './src/screens/NotesScreen'

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NotesScreen/>
    </GestureHandlerRootView>
  )
}
