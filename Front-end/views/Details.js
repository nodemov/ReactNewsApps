import React from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

const Details = ({ navigation }) => {
    return (
        <View>
            <Text style={{fontSize:30}}> Details</Text>
            <Text style={{margin:10,fontSize:22}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
    )
}

export default Details
