import React from 'react'
import {View, TextInput, Button} from 'react-native'

class Search extends React.Component{
  render(){
    return(
      <View style={{ marginTop: 50 }}>
        <TextInput placeholder="Titre du film" style={{
          marginLeft: 5, marginRight: 5, height: 50,
          borderColor: '#000000', borderWidth: 1, paddingLeft: 5,
          textAlign: 'center' }} />
        <Button title="Rechercher" onpress={() => {}}/>
      </View>
    )
  }
}

export default Search
