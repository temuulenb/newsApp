import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import Color from '../../Shared/Color'

function HeaderList({ newsList }) {
    return (
        <View>
            <FlatList
                data={newsList}
                renderItem={({ item }) => (
                    <View>
                        <View style={{ height: 1, backgroundColor: Color.lightGray, marginTop: 10, marginLeft: -20 }}></View>
                        <TouchableOpacity style={{ marginTop: 17, display: 'flex', flexDirection: 'row' }}>
                            <Image source={{ uri: item.urlToImage }}
                                style={{ width: 130, height: 130, borderRadius: 10 }}
                            />
                            <View style={{ marginRight: 135, marginLeft: 12 }}>
                                <Text numberOfLines={3} style={{ fontSize: 15, fontWeight: 500 }}>{item.title}</Text>
                                <Text style={{ color: Color.primary, marginTop: 8 }}>{item?.source.name}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}

export default HeaderList