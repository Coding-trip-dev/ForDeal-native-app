import React from 'react'
import { ScrollView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import Product from '../Component/product'

export default function Brandin() {
    return (
        <ScrollView>
        <View style={styles.reco}>

<Product/>

        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    reco:{flex: 1,
        paddingTop:10,
        alignItems: 'center',
        justifyContent: 'space-around',borderRadius:10,flexDirection:"row",flexWrap:"wrap"}
})
