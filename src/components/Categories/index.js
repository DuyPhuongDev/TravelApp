import React from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Categories = ({ categories, selectCategory, onCategoryPress }) => {
    return (
        <FlatList
            horizontal
            data={categories}
            style={{ marginRight: -32 }}
            showsHorizontalScrollIndicator = { false }
            renderItem={({ item }) => {
            const selected = selectCategory === item;
            return (
                <TouchableOpacity
                    onPress={() => onCategoryPress(item)}
                    style={[styles.containerItem, selected?styles.selectedContainerItem:{}]}>
                    <Text style={[styles.item, selected?styles.selectedItem:{}]}>{item}</Text>
                </TouchableOpacity>
            );
        }}
        />
    );
};

export default React.memo(Categories);
