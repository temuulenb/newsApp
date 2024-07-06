import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategorySlider from '../Components/Home/CategorySlider'
import Color from '../Shared/Color'
import { Ionicons } from '@expo/vector-icons';
import TopHeader from '../Components/Home/TopHeader';
import HeaderList from '../Components/Home/HeaderList';
import GlobalApi from '../Services/GlobalApi';

const Home = () => {
    const [newsList, setNewsList] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        // getTopHeadline();
        getNewsByCategory('latest');
    }, [])

    const getNewsByCategory = async (category) => {
        setLoading(true);
        const result = (await GlobalApi.getByCategory(category)).data;
        console.log(result)
        setNewsList(result.articles);
        setLoading(false)
    }
    return (
        <ScrollView style={{ backgroundColor: Color.white }}>

            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Text style={styles.appName}>News</Text>
                <Ionicons name="notifications-outline" size={24} color="black" />
            </View>

            {/* CategoryList */}
            <CategorySlider selectCategory={(category) => getNewsByCategory(category)} />
            {loading ? <ActivityIndicator
                style={{ marginTop:Dimensions.get('screen').height*0.35 }}
                size={'large'}
                color={Color.primary} /> :
                <View>
                    {/* TopHeader */}
                    <TopHeader newsList={newsList} />

                    {/* Headline List */}
                    <HeaderList newsList={newsList} />
                </View>
            }
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