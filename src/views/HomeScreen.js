import React from 'react';
import { SafeAreaView, View, StatusBar, Text, TextInput, FlatList, Dimensions, StyleSheet, Image, Pressable, ScrollView} from 'react-native';

import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
const {width} = Dimensions.get('screen');
import houses from '../consts/houses';


const HomeScreen=({navigation})=>{

    const optionsList = [
        {title: 'Buy a Home', img: require('../assets/house1.jpg')},
        {title: 'Rent a Home', img: require('../assets/house2.jpg')},
      ];

    const categoryList = ['Popular', 'Recommended', 'Nearest'];

    const ListOptions = () => {
        return (
          <View style={style.optionListsContainer}>
            {optionsList.map((option, index) => (
              <View style={style.optionsCard} key={index}>
                {/* House image */}
                <Image source={option.img} style={style.optionsCardImage} />
    
                {/* Option title */}
                <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
                  {option.title}
                </Text>
              </View>
            ))}
          </View>
        );
      };


    return(
        <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
            <StatusBar translucent={false} backgroundColor={COLORS.white} barStyle="dark-content"/>
            
            
            {/* Header container */}
            <View style={style.header}>
                <View>
                    <Text style={{color: COLORS.grey}}>Location</Text>
                    <Text style={{color: COLORS.dark, fontSize: 20, fontWeight: 'bold'}}>
                        Canada
                    </Text>
                </View>
                <Image
                style={style.profileImage}
                source={require('../assets/person.jpg')}
                />
            </View>
            <ScrollView>
                {/* Input and sort button container */}
                <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                }}>
                    <View style={style.searchInputContainer}>
                        <Icon name="search" color={COLORS.grey} size={25} />
                        <TextInput placeholder="Search address, city, location" />
                    </View>

                    <View style={style.sortBtn}>
                        <Icon name="tune" color={COLORS.white} size={25} />
                    </View>
                </View>

                {/* Render list options */}
                <ListOptions />


            </ScrollView>

        </SafeAreaView>
    );
}


const style=StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      },
      profileImage: {
        height: 50,
        width: 50,
        borderRadius: 25,
      },   
      searchInputContainer: {
        height: 50,
        backgroundColor: COLORS.light,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 12,
      },
      sortBtn: {
        backgroundColor: COLORS.dark,
        height: 50,
        width: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
      },
      optionsCard: {
        height: 210,
        width: width / 2 - 30,
        elevation: 15,
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 20,
        paddingTop: 10,
        paddingHorizontal: 10,
      },
      optionsCardImage: {
        height: 140,
        borderRadius: 10,
        width: '100%',
      },
      optionListsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom:10,
        paddingHorizontal: 20,
      },
});



export default HomeScreen;