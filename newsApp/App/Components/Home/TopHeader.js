import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Services/GlobalApi'
import Color from '../../Shared/Color';

function TopHeader({newsList}) {
    
    return (
      <View style={{marginTop:22}}>
            <FlatList
            data={newsList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
                <TouchableOpacity
                    style={{width:Dimensions.get('screen').width*0.80, marginRight:15}}
                >
                    <Image source={{uri:item.urlToImage}}
                    style={{height:Dimensions.get('screen').width*0.77, borderRadius:10}} />
                    <Text style={{marginTop:12, fontSize:16, fontWeight:600}} numberOfLines={2}>{item.title}</Text>
                    <Text style={{marginTop:5, color:Color.primary}}>{item?.source.name}</Text>
                </TouchableOpacity>
            )}
            />
      </View>
    )
  }


export default TopHeader