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
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setNews } from './store/actions';

class HomeScreen extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    axios.get(
      'https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=7ccd8b41c3df47d49c830132fca0df90'
    ).then((res) => this.props.setNews(res.data.articles)).catch(err => console.log(err))
  }

  render() {
    console.log(this.props)
    return (
        <FlatList
          data={this.props.redux.news}
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

const mapStateToProps = (state) => {
  return {
    redux: state
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({setNews}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

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

