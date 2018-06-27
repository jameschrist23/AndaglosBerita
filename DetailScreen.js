import React, { Component } from 'react';
import { 
    ScrollView,
    View,
    Text,
    StyleSheet,
    Image
    } from 'react-native';
import { connect } from 'react-redux'

class DetailScreen extends Component {
    /*constructor(props){
        super(props);
        this.state = {
            data: {}
        }
    }*/

    render() {
        const data = this.props.navigation.getParam('Datas', '')
        return (
            <View style={styles.container}>
                <Text style={styles.titleStyle}>{data.title}</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.authorStyle}>{data.author}</Text>
                    <Text style={styles.dateStyle}>{data.publishedAt}</Text>
                </View>
                <Image source={{uri: data.urlToImage}} style={{width: '100%', height: 240}}/>
                <Text style={{fontSize: 15}}> {data.description} </Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        redux: state
    }
}

export default connect(mapStateToProps)(DetailScreen);

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    titleStyle: {
        fontSize: 22,
        fontWeight: '700',
        color: 'black'
    },
    authorStyle: {
        fontSize: 15,
        fontWeight: '300',
        color: 'black',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        flex: 1
    },
   dateStyle: {
        fontSize: 15,
        fontWeight: '300',
        color: 'black',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        flex: 1
    },
});
