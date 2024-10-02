import React from 'react'
import Navbar from './component/navbar'
import Navbarniche from './component/navbarniche'
import Cards from './component/cards'
import Lastbar from './component/lastbar'
import { ScrollView, View } from 'react-native'

export default function App() {
  return (
<>
<ScrollView>
  <View>
  <Navbar/>
<Navbarniche/>
<Cards/>
<Cards/>
<Lastbar/>
  </View>
</ScrollView>
</>
  )
}
