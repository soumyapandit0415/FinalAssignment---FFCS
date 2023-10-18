import React, { useEffect, useState } from 'react'
import { NativeBaseProvider, FlatList, ScrollView, Divider, Image, Spinner } from 'native-base';
import { services } from '../services/services';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment/moment';

export default function Tech() {
    const [newsData, setNewsData] = useState([])
    useEffect(() => {
        services('tech')
            .then(data => {
                setNewsData(data);
            })
            .catch(error => {
                alert(error);
            });
    }, []);
    return (
        <NativeBaseProvider>
            {newsData.length > 1 ? (
                <FlatList
                    data={newsData}
                    renderItem={({ item }) => (
                        <View>
                            <View style={styles.newsContainer}>
                                <Image
                                    width={550}
                                    height={250}
                                    resizeMode={"cover"}
                                    source={{
                                        uri: item.urlToImage,
                                    }}
                                    alt="Alternate Text"
                                />
                                <Text style={styles.title}>
                                    {item.title}
                                </Text>
                                <Text style={styles.date}>
                                    {moment(item.publishedAt).format('LLL')}
                                </Text>
                                <Text style={styles.newsDescription}>
                                    {item.description}
                                </Text>
                            </View>
                            <Divider my={2} bg="#e0e0e0" />
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            ) : (
                <View style={styles.spinner}>
                    <Spinner color="danger.400" />
                </View>
            )}
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    newsContainer: {
        padding: 10
    },
    title: {
        fontSize: 18,
        marginTop: 5,
        fontWeight: "600",
        fontStyle: "italic"
    },
    newsDescription: {
        fontSize: 16,
        marginTop: 15
    },
    date: {
        fontSize: 14
    },
    spinner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 400
}
});