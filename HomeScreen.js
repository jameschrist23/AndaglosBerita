import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import axios from 'axios';

class HomeScreen extends Component {
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
                <TouchableOpacity
                    style={{
                        marginBottom: 10,
                        paddingBottom: 10,
                        borderBottomWidth: 1,
                        borderColor: 'gray'
                    }}
                    onPress={() => this.props.navigation.navigate('Details', {Datas: item})}

                >
                <View>
                    <Text style={styles.titleStyle}>{item.title}</Text>
                    <Image source={{uri: item.urlToImage}} style={{width: '100%', height: 240}}/>
                </View>
                </TouchableOpacity>
            )
          }}
          style={{backgroundColor: 'white'}}
        />
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  },
  titleStyle: {
    fontSize: 22,
    fontWeight: '700',
    color: 'black'
  }
});

