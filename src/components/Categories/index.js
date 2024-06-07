import React from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Categories = ({ categories, selectCategory, onCategoryPress }) => {
    return (
        <FlatList
            horizontal
            data={categories}
            keyExtractor={item => String(item)}
            showsHorizontalScrollIndicator = { false }
            renderItem={({ item, index }) => {
            const selected = selectCategory === item;
            return (
                <TouchableOpacity
                    onPress={() => onCategoryPress(item)}
                    style={[styles.containerItem, selected?styles.selectedContainerItem:{}, index? {}:{ marginLeft: 32 }]}>
                    <Text style={[styles.item, selected?styles.selectedItem:{}]}>{item}</Text>
                </TouchableOpacity>
            );
        }}
        />
    );
};

export default React.memo(Categories);
