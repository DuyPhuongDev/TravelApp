import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    item: {
        color: 'rgba(0,0,0,0.5)',
        fontSize: 12,
        paddingVertical: 2
    },
    selectedItem: {
        fontWeight: 'bold',
        color: '#000'
    },
    containerItem: {
        marginRight: 17,
        marginVertical: 14
    },
    selectedContainerItem: {
        borderBottomColor: '#4681A3',
        borderBottomWidth: 1,
    }
});

export default styles;
