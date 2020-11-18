import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native'
const ProductCard = (props) => {
  return (
      <View style={styles.container}>
          <Image 
          source={{uri: props.product.imgURL}}
          style={styles.image}
          />

          <View style={{flex:1, justifyContent:'space-between'}}>
            <Text>{props.product.title}</Text>
            <Text style={{fontWeight:'bold'}}>{props.product.price}</Text>
          </View>

      </View>
  );
};
export  {ProductCard};

const styles= StyleSheet.create({
    container:{
        flex:1,
        borderWidth:1,
        padding:10,
        margin:5,
        borderRadius:10,
        borderColor:'#e0e0e0'
    },
    image: {
        height: Dimensions.get('window').height/4,
        resizeMode:'contain'
        
    }
})
