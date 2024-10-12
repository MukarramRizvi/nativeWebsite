import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Form from '../component/form'
import Lastbar from '../component/lastbar'
import Farig from '../component/Farig'
import Navbar from '../component/navbar'

const Home = () => {
  return (
   <>
   <ScrollView>
   <Navbar/>
   <Farig/>
   <Form/>
   <Lastbar/>
   </ScrollView>
   </>
  )
}

export default Home
