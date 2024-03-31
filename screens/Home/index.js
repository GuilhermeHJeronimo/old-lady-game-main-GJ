import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {
    const navigateToGame = () => navigation.navigate('Game');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tic-tac-toe</Text>
            <TouchableOpacity style={styles.button} onPress={navigateToGame}>
                <Text style={styles.buttonText}>Play</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple',
    },
    title: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 50,
    },
    button: {
        backgroundColor: 'green',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});

export default HomeScreen;
