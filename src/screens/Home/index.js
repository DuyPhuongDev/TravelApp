import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import Title from '../../components/Title';
import styles from './styles';
import Categories from '../../components/Categories';
import AttractionCard from '../../components/AttractionCard';
import jsonData from '../../data/attraction.json';
import categories from '../../data/categories.json';

const Home = () => {
    const [selectedCategory, setSelectedCategopry] = useState('All');
    const [data, setData] = useState([]);
    const All = 'All';

    useEffect(() => {
        setData(jsonData);
    }, []);

    useEffect(() => {
        if (selectedCategory === All) {
            setData(jsonData);
        } else {
            const filterData = jsonData?.filter(item => item?.categories?.includes(selectedCategory));
            setData(filterData);
        }
    }, [selectedCategory]);
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                numColumns={2}
                ListEmptyComponent={(<Text style={styles.emptyItem}>No item found!</Text>)}
                showsVerticalScrollIndicator={false}
                style={{ flexGrow: 1 }}
                ListHeaderComponent={(
                    <>
                        <View style={{ margin: 32 }}>
                            <Title text={'Where do'} style={{ fontWeight: 'normal' }}/>
                            <Title text={'you want to go?'}/>
                            <Title text={'Explore Attractions'} style={styles.subTitle}/>
                        </View>
                        <Categories selectCategory={selectedCategory}
                            onCategoryPress={setSelectedCategopry}
                            categories={[All, ...categories]}
                        />
                    </>
                )}
                keyExtractor={item => String(item?.id)}
                renderItem={({ item, index }) => (
                    <AttractionCard
                        key={item.id}
                        style={index%2?{ marginRight: 32 }:{ marginRight: 12, marginLeft: 32 }}
                        imgSrc={item.images?.length? item.images[0] : null}
                        title={item.name}
                        location={item.city}
                    />
                )}
            />
        </SafeAreaView>
    );
};

export default React.memo(Home);
