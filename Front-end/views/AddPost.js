import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    TextInput
} from 'react-native';

const AddPost = ({ navigation }) => {
    const [value, onChangeText] = useState('');
    const [detail, onChangeDetail] = useState('');
    const [author, onChangeAuthor] = useState('');

    return (
        <View style={{ flex: 1, margin: 20 }}>
            <Text style={{ fontSize: 30 }}> AddPost</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                placeholder="title"
                value={value}
            />
            <TextInput
                maxLength={40}
                style={{ height: 200, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeDetail(text)}
                placeholder="detail"
                value={detail}
            />
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeAuthor(text)}
                placeholder="author"
                value={author}
            />
            <Button
                title="Submit"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    )
}

export default AddPost
