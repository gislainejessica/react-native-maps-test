import React, { useEffect, useState } from 'react';
import { View , StyleSheet, ActivityIndicator } from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

export default function src() {
  const [loading, setLoading] = useState(true)
  const [coordenadas, setCoordenadas] = useState({})

  useEffect(()=>{
    Geolocation.getCurrentPosition(
      ({ coords })=>{
        setCoordenadas(coords)
        console.log(coords)
        setLoading(false)
      }
    )
  },[])

  return (
    <View style={style.container}>
      { loading 
      ? (<ActivityIndicator size='large'/>)
      : (
        <MapView 
          initialRegion={{
            latitude: coordenadas.latitude,
            longitude: coordenadas.longitude,
            latitudeDelta: 0.0068,
            longitudeDelta: 0.0068
          }}
          style={style.map}
        >
          {}
        </MapView>
      )
    }

    </View>
  );
}

const style = StyleSheet.create({
  container:{
    ...StyleSheet.absoluteFill,
    backgroundColor: '#7159c1',
    alignItems:'center',
    justifyContent:'center',
  },
  map:{
    ...StyleSheet.absoluteFillObject
  }
})
