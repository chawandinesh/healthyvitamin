import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import WavyHeader from './WayHeader';
import AntDesign from 'react-native-vector-icons/AntDesign';
const {height, width} = Dimensions.get('window');

function AboutIngredient({navigation, route}) {
  const {data} = route.params;
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
    <SafeAreaView style={styles.container}>
      <WavyHeader
        customStyles={styles.svgCurve}
        customHeight={height * 0.22}
        customTop={height * 0.16}
        customBgColor="#d18a4b"
        customWavePattern="M0,224L21.8,234.7C43.6,245,87,267,131,266.7C174.5,267,218,245,262,229.3C305.5,213,349,203,393,176C436.4,149,480,107,524,128C567.3,149,611,235,655,234.7C698.2,235,742,149,785,106.7C829.1,64,873,64,916,101.3C960,139,1004,213,1047,234.7C1090.9,256,1135,224,1178,186.7C1221.8,149,1265,107,1309,101.3C1352.7,96,1396,128,1418,144L1440,160L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
      />
      <View style={styles.headerContainer}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign
              name="back"
              style={{color: '#fff', fontSize: height * 0.06}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <AntDesign
              name="home"
              style={{color: '#fff', fontSize: height * 0.06}}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.headerText}>{data.name}</Text>
        </View>
      </View>
      <View style={{marginTop: height * 0.2}}>
        <Image
          source={data.image}
          style={{height: height * 0.25, width: width, borderWidth: 2}}
          resizeMode="cover"
        />
      </View>
      <View
        style={{
          marginTop: 20,
          padding: 5,
          height: height * 0.2,
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 20, margin: 5}}>{data.about}</Text>
      </View>
    </SafeAreaView>
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
    height: height * 0.13,
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  headerText: {
    fontSize: height * 0.04,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});
export {AboutIngredient};
