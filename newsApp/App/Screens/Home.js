import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CategorySlider from '../Components/Home/CategorySlider'
import Color from '../Shared/Color'
import { Ionicons } from '@expo/vector-icons';

const Home = () => {
    return (
        <View>
            <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text style={styles.appName}>News</Text>
                <Ionicons name="notifications-outline" size={24} color="black" />
            </View>
            <CategorySlider />
        </View>
    )
}

const styles = StyleSheet.create({
    appName: {
        fontSize: 27,
        fontWeight: 'bold',
        color: Color.primary
    }
})
export default Home