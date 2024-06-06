import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import Title from '../../components/Title';
import styles from './styles';
import Categories from '../../components/Categories';
import AttractionCard from '../../components/AttractionCard';

const Home = () => {
    const [selectedCategory, setSelectedCategopry] = useState('All');
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Title text={'Where do'} style={{ fontWeight: 'normal' }}/>
                <Title text={'you want to go?'}/>

                <Title text={'Explore Attractions'} style={styles.subTitle}/>
                <Categories selectCategory={selectedCategory}
                    onCategoryPress={setSelectedCategopry}
                    categories={['All', 'Popular', 'Recommended', 'Historical', 'Most Viewed', 'Most Visited']}
                />

                <View style={styles.row}>
                    <AttractionCard
                        imgSrc='https://www.vietnambooking.com/wp-content/uploads/2018/12/doc-mien-dat-nuoc-chiem-nguong-canh-dep-viet-nam-19122018-3.jpg'
                        title='Ha Long Bay'
                        location='Vietnam'
                    />
                    <AttractionCard
                        imgSrc='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhD3P6xQur-xyh0OsHGmS_t3HMQWoceiuzZQjOHMBppUHQcOmiZIEepX8pt9v-_aL7UG0rpbqhmD1714_3EAHhaqavHpXHNUA-s50P8ZLOsTDibHhKbzm21BreUrObJZUJjjEq0la7KS67B/s1600/hinh-nen-phong-canh-dep-cua-nui-phu-si-nhat-ban-8.jpg'
                        title='Phu Si Mountain'
                        location='Japan'
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default React.memo(Home);
