import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    card: {
        padding: 4,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#E2E2E2',
        marginBottom: 12
    },
    image: {
        width: (width - 96) / 2,
        height: 120,
        borderRadius: 15,
    },
    title: {
        fontSize: 12,
        fontWeight: '500',
        color: '#000',
        marginTop: 12,
        marginLeft: 8,
    },
    location: {
        fontSize: 10,
        fontWeight: '400',
        color: 'rgba(0,0,0,0.5)',
    },
    icon: {
        width: 10,
        height: 10,
        marginRight: 4,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        marginLeft: 8,
        marginTop: 2,
    }
});

export default styles;
