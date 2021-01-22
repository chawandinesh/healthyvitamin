import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import WavyHeader from './WayHeader';
import AntDesign from 'react-native-vector-icons/AntDesign';
const {height, width} = Dimensions.get('window');

const data = [
  {
    name: 'VITAMIN_A',
    color: '#32a852',
    image: require('../assets/images/vitamina.jpg'),
  },
  {
    name: 'VITAMIN_C',
    color: '#f53636',
    image: require('../assets/images/vitaminc.jpg'),
  },
  {
    name: 'VITAMIN_D',
    color: '#b012ff',
    image: require('../assets/images/vitamind.jpg'),
  },
  {
    name: 'VITAMIN_E',
    color: '#0ddb2c',
    image: require('../assets/images/vitamine.jpeg'),
  },
  {
    name: 'VITAMIN_K',
    color: '#12a4ff',
    image: require('../assets/images/vitamink.jpg'),
  },
  {
    name: 'VITAMIN_B1',
    color: '#ff12bc',
    image: require('../assets/images/vitaminb1.jpg'),
  },
  {
    name: 'VITAMIN_B2',
    color: '#bdc704',
    image: require('../assets/images/vitaminb2.jpg'),
  },
  {
    name: 'VITAMIN_B5',
    color: '#e09109',
    image: require('../assets/images/vitaminb5.jpg'),
  },
];

function HomeScreen({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions(
      {
        headerTitleAlign: 'center',
        headerShown: false,
        headerStyle: {},
      },
      [navigation],
    );
  });

  return (
    <View style={styles.container}>
      <WavyHeader
        customStyles={styles.svgCurve}
        customHeight={height * 0.15}
        customTop={height * 0.12}
        customBgColor="#5000ca"
        customWavePattern="M0,64L120,101.3C240,139,480,213,720,213.3C960,213,1200,139,1320,101.3L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
      />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Home Screen</Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          width: width,
        }}
        style={{
          flex: 1,
          marginTop: height * 0.1,
          width: width,
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}>
        <View>
          {data.map((e, idx) => (
            <TouchableOpacity
              activeOpacity={0.5}
              style={{marginTop: 5}}
              key={idx}
              onPress={() =>
                navigation.navigate('VitaminDetailsScreen', {data: e})
              }>
              <View
                key={idx}
                style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                <View
                  style={{
                    // style={{backgroundColor:'#fff'}}
                    height: height * 0.2,
                    borderWidth: 4,
                    margin: 5,
                    width: width * 0.45,
                  }}>
                  <Image
                    source={e.image}
                    resizeMode="stretch"
                    style={{height: height * 0.2, width: width * 0.45}}
                  />
                </View>
                <View
                  style={{
                    height: height * 0.2,
                    margin: 5,
                    width: width * 0.45,
                    borderTopWidth: 5,
                    borderTopColor: '#5000ca',
                    borderTopRightRadius: 40,
                    borderRightWidth: 3,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      padding: 5,

                      // borderBottomWidth: 4,
                      borderBottomLeftRadius: 38,
                    }}>
                    {e.name}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  svgCurve: {
    position: 'absolute',
    width: Dimensions.get('window').width,
  },
  headerContainer: {
    height: height * 0.15,
    justifyContent: 'flex-end',
  },
  headerText: {
    fontSize: height * 0.04,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});
export {HomeScreen};
