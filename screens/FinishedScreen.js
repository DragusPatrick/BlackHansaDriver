import React from 'react';
import {Platform, StyleSheet, View, Text, ScrollView, Dimensions, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {List, ListItem} from "native-base";
import List_planned  from '../components/lists/list_planned';
import List_withoutDriver  from '../components/lists/withoutDriver';
import OffersScreen from "./OffersScreen";

const { width, height } = Dimensions.get('screen');

class FinishedScreen extends React.Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }

    componentDidMount(){
        return fetch('https://app.blackhansa.de/api/v2/bookings/finished')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });
    }

    renderTrip({ item, index }) {
        return (
            <View>

                <Icon
                    name='favorite'
                    size={25}
                    color={item.liked ? 'red' : 'gray'}
                    onPress={() => this.onLikePost({ item, index })}
                />

            </View>
        );
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{ marginTop: 10, marginBottom: 10 }}>
                        <List
                            dataArray={this.state.dataSource}
                            extraData={this.state}
                            renderRow={(item) => {
                                return (
                                    <ListItem style={{ borderBottomWidth: 0 }}>
                                        <List_planned data={item} />
                                    </ListItem>
                                )
                            }
                            }
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default FinishedScreen;

FinishedScreen.navigationOptions = {
    title: 'Finished',
    headerStyle: {
        backgroundColor: '#000',
    },
    headerTintColor: '#EBEFF2',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        width:'100%',
        alignSelf:'center'
    },
    listItem: {
        flexDirection: 'row',
        marginBottom: 15,
        alignSelf:'flex-start'
    },
    item: {
        marginRight: 0,
        marginBottom:0,
        paddingBottom:0,
        width: '100%',
        alignSelf: 'stretch',
    },
    icon: {
        fontSize: 25,
        marginRight: 10,
        color: '#dbdce0',
    },
    itemHeader: {
        backgroundColor: '#fffeca',
        borderBottomWidth: 2,
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    header: {
        paddingTop: 48,
        paddingHorizontal: 36,
        paddingBottom: 24,
    },
    column: {
        width: 100,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        flexDirection: 'column',
    },
    topHeader: {
        flex: 1,
        marginLeft: 25,
        marginTop: 65,
        justifyContent: 'center',
        alignItems: 'center',
    },
    firstRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconBackground: {
        fontSize: 25,
        marginRight: 10,
        color: '#dbdce0',
        backgroundColor: '#374372',
        padding: 5,
    },
    wrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        backgroundColor: '#131426',
        marginTop:0,
        paddingTop:0,
    },
    itemHeaderBusiness: {
        backgroundColor: '#602ff3',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        overflow: "hidden",
        color: '#271a17',
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:5,
        paddingLeft: 10,
    },
    itemHeaderEmpty: {
        backgroundColor: '#e93343',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        overflow: "hidden",
        color: '#271a17',
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:5,
        paddingLeft: 10,
    },
    inline: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footerItem: {
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        overflow: "hidden",
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopColor: '#1e1f24',
        borderTopWidth: 1,
        textAlign: 'center',
    },
    itemFooterActive: {
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        overflow: "hidden",
        color: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontWeight: '600',
        backgroundColor: '#e93343',
        paddingLeft: 10,
        padding: 5,
        paddingBottom: 10,
        width: '50%',
        paddingTop: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        textAlign: 'center',

    },
    itemFooter: {
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        overflow: "hidden",
        color: '#f4f8fe',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontWeight: '600',
        paddingLeft: 10,
        alignSelf: 'stretch',
        height: 40,
        width: '25%',
        paddingTop: 10,
        textAlign: 'center',
        borderColor:'red',borderBottomWidth:1,borderTopWidth:1
    },
    column_bordered: {
        borderBottomWidth: 2,
        borderBottomColor: '#303249',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flex: 1,
        width: '50%',
    },
});
