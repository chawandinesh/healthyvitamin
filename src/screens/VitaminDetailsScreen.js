import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import WavyHeader from './WayHeader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {vitaminItems} from '../screens/vitaminItems';
const {height, width} = Dimensions.get('window');
function VitaminDetailsScreen(props) {
  React.useLayoutEffect(() => {
    props.navigation.setOptions(
      {
        headerTitleAlign: 'center',
        headerShown: false,
        headerStyle: {},
      },
      [props.navigation],
    );
  });
  const {name, color} = props.route.params.data;

  return (
    <View style={styles.container}>
      <WavyHeader
        customStyles={styles.svgCurve}
        customHeight={160}
        customTop={120}
        customBgColor={color}
        customWavePattern="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      />
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <AntDesign name="back" style={{color: '#fff', fontSize: 40}} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{name}</Text>
      </View>
      <ScrollView style={{marginTop: height * 0.1}}>
        <View
          style={{
            // margin: 5,
            flexDirection: 'row',
            width: width,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          {vitaminItems[name].map((e, idx) => (
            <TouchableOpacity
            key={idx}
            onPress={() => props.navigation.navigate('AboutIngredient', {data:e})}
              activeOpacity={0.9}
              style={{
                height: width * 0.4,
                borderBottomWidth: 10,
                margin: 10,
                width: width * 0.4,
                borderWidth: 1,
              }}>
              <ImageBackground
                imageStyle={{opacity: 0.5}}
                source={e.image}
                style={{
                  height: width * 0.4,
                  backgroundColor: '#000',
                  width: width * 0.4,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                resizeMode="stretch">
                <Text style={{fontSize: 23, fontWeight: 'bold', color: '#fff'}}>
                  {e.name}
                </Text>
              </ImageBackground>
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
    marginTop: 30,
    marginHorizontal: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    // change the color property for better output
    color: '#fff',
    textAlign: 'center',
    marginTop: 35,
  },
});

export {VitaminDetailsScreen};
