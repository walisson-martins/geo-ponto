import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({

    annotationContainer: {
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 15,
    },
    annotationFill: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "green",
        transform: [{ scale: 0.6 }],
    },
    page: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
        position: 'relative'
    },
    containerMap: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: "#FFF"
    },
    map: {
        flex: 1
    },
    touchableContainer: {
        borderColor: 'black',
        borderWidth: 1.0,
        width: 60
    },
    touchable: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    touchableText: {
        color: 'white',
        fontWeight: 'bold',
    },
    botaoBiometria: {
        position: "absolute",
        margin: 10,
        top: 0,
        right: 0,
        width: 80,
        height: 80,
        alignItems: "center",
        justifyContent: "center"
    },
    imagemBotao: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    menuHamburger: {
        position: "absolute",
        margin: 10,
        top: 0,
        left: 0,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    imagemBotaoMenu: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },
    fundomenu: {
        fontStyle: "normal",
        fontWeight: "600",
    },

    menu_item: {
        backgroundColor: "#A9A9A9",
        height: 50,
    },
    container: {
        backgroundColor: 'black',
        position: 'absolute',
        width: "100%",
        height: "100%"
    },
    preview: {
        flex: 1,
        position: 'relative',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'black',
    },

    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
    },
    card: {
        borderColor: '#0000001A',
        position: "absolute",
        borderBottomWidth: 5,
        borderTopWidth: 5,
        paddingTop: 10,
        paddingStart: 10,
        top: 100,
        left: 100,
        display: "flex",
        flexDirection: 'row',
        width: 150,
        height: '20%',
        backgroundColor: '#F5F5F5',
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row"
    },
    divisao: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row"
    },
});

export default styles;