import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image
} from 'react-native';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      news: []
    }
  }

  componentDidMount() {
    axios.get(
      'https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=7ccd8b41c3df47d49c830132fca0df90'
    ).then((res) => this.setState({ news: res.data.articles})).catch(err => console.log(err))
  }

  render() {
    return (
        <FlatList
          data={this.state.news}
          renderItem={({item}) => {
            return (
              <View>
                <Text>{item.title}</Text>
                <Image source={{uri: item.urlToImage}} style={{width: '100%', height: 240}}/>
              </View>
            )
          }}
        />
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  }
});

