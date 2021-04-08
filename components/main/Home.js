import React from 'react'
import { View,Text } from 'react-native'
import { Card } from 'react-native-elements'
export default function Home() {
    return (
        <View>
            <Text>Home</Text>
            <Card>
                <Card.Title>MY CARD</Card.Title>
                <Card.Divider/>
                <Text>here is a text in the card</Text>
            </Card>
        </View>
    )
}
