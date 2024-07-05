import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategorySlider from '../Components/Home/CategorySlider'
import Color from '../Shared/Color'
import { Ionicons } from '@expo/vector-icons';
import TopHeader from '../Components/Home/TopHeader';
import HeaderList from '../Components/Home/HeaderList';
import GlobalApi from '../Services/GlobalApi';

const Home = () => {
    const [newsList, setNewsList] = useState([]);
    useEffect(() => {
       getTopHeadline();
    }, [])

    const getTopHeadline = async() => {
        const result = (await GlobalApi.getTopHeadline).data;
        setNewsList(result.articles)
    }
    return (
        <ScrollView>
            <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text style={styles.appName}>News</Text>
                <Ionicons name="notifications-outline" size={24} color="black" />
            </View>

            {/* CategoryList */}
            <CategorySlider />

            {/* TopHeader */}
            <TopHeader newsList={newsList}/>

            {/* Headline List */}
            <HeaderList newsList={newsList}/>
        </ScrollView>
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