import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Color from '../../Shared/Color';

function CategorySlider() {
    const [active, setActive] = useState();
    const categoryList = [
        {
            id: 1,
            name: 'Latest',
        },
        {
            id: 2,
            name: 'World',
        },
        {
            id: 3,
            name: 'Business',
        },
        {
            id: 4,
            name: 'Sports',
        },
        {
            id: 5,
            name: 'Tech',
        },
        {
            id: 6,
            name: 'Movie',
        },
    ];

    const onCategoryClick = (id) => {
        setActive(id)
    }

    return (
        <View style={{ marginTop: 13 }}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={categoryList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => onCategoryClick(item.id)}>
                        <Text style={item.id === active ? styles.selectedList : styles.unselectedList}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    unselectedList: {
        marginRight: 15,
        fontSize: 18,
        fontWeight: 'bold',
        color: Color.gray,
    },
    selectedList: {
        marginRight: 15,
        fontSize: 18,
        fontWeight: 'bold',
        color: Color.primary,
    },
});

export default CategorySlider;
