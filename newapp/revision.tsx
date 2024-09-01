import React from 'react'

import {
    View,
    Text,
    Button,
    StyleSheet,
    useColorScheme
} from 'react-native'
function revision(): JSX.Element{
    const isdark = useColorScheme() === 'dark'
    return(
        <View>
            <Button
            title='CHANDU LAL'
            />
            <Text>
                SAMOHIK
            </Text>
        </View>
    )
}
export default revision