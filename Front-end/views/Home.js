import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Button,
    FlatList
} from 'react-native';
import axios from 'axios';




const Home = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [News, setNews] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/news`)
            .then(res => {
                setIsLoading(false);
                setNews(res.data);
                return res;
            });
        return () => {
            // cleanup
        }
    }, [])

    console.log(News);

    // , justifyContent: 'center', alignItems: 'center',
    
    return (
        <View style={{ flex: 1, marginBottom: 8, padding: 10 }}>
        <Text style={{ fontSize: 30 }}> All News</Text>
            <FlatList data={News} renderItem={({ item }) =>
                <View style={{marginBottom: 8, backgroundColor: 'lightgray', padding: 10,borderRadius:15 }}>
                    <Text>{item.title}</Text>
                </View>
            }
            />
        </View>
    )
}

export default Home
