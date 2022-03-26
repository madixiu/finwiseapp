import React from 'react'
import { View,Text } from 'react-native'
import { Card } from 'react-native-elements'
import { LineChart } from 'react-native-chart-kit'

export default function Home() {
    return (
        <View>
            <Card>
                <Card.Title>MY CARD</Card.Title>
                <Card.Divider/>
                <Text>here is a text in the card</Text>
            </Card>
            <Card>
                <View>
                    <Text>Bezier Line Chart</Text>
                    <LineChart
                        data={{
                        labels: ["Jan", "Feb", "March", "April", "May", "June"],
                        datasets: [
                            {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                            ]
                            }
                        ]
                        }}
                        width={300} // from react-native
                        height={220}
                        yAxisLabel="$"
                        yAxisSuffix="k"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                        backgroundColor: "#222222",
                        // backgroundGradientFrom: "#fb8c00",
                        // backgroundGradientTo: "#ffa726",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16,
                            fontSize: 5
                        },
                        propsForLabels: {
                        fontSize: 10
                        },
                        propsForDots: {
                            r: "3",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                        }
                        }}
                        bezier
                        style={{
                        marginVertical: 8,
                        borderRadius: 10,
                        fontSize: 5

                        }}
                    />
                </View> 
            </Card>
        </View>
        
    )
}
