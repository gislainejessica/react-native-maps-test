import React, { useEffect, useState } from 'react';
import { View , StyleSheet, ActivityIndicator } from 'react-native';
import MapView , { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import api from './services/api'

export default function src() {
  const [loading, setLoading] = useState(true)
  const [coordenadas, setCoordenadas] = useState({})
  const [points, setPoints] = useState([])


  useEffect(() => {
    Geolocation.getCurrentPosition(
      ({ coords }) => {
        setCoordenadas(coords)
        console.log(coords)
        setLoading(false)
      }, 
      error=>{
        console.log(error)
      },
      { enableHighAccuracy:true, maximumAge:10000, timeout:10000 }
    )
  },[coordenadas])

  useEffect(() => {
    async function getData(){
      try{
        const { data} = await api.get('/points', { params: coordenadas })
        setPoints(data)
      }catch(error){
        console.log(error)
      }
    }
    if (coordenadas){
      getData()
    }
  },[])

  function renderPoints(){
    return points.map(point => (
      <Marker 
        key={point.id}
        coordinate={{
          latitude:parseFloat(point.latitude),
          longitude:parseFloat(point.longitude)

        }}
        title={point.name}
      />
    ))
  }

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
          {renderPoints()}
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
