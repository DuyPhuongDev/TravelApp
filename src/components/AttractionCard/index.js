import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

const AttractionCard = ({ imgSrc, title, location, style }) => {
    return (
        <View style={[styles.card, style]}>
            <Image source={{ uri: imgSrc }} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.row}>
                <Image source={require('../../assets/location-icon.png')} style={styles.icon}/>
                <Text style={styles.location}>{location}</Text>
            </View>
        </View>
    );
};

export default AttractionCard;
