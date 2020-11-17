import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    lista: {
        flex: 1,
        justifyContent: 'center',
        alignContent: "center"
    },
    container: {
      padding: 10,
      marginTop: 30,

    },
    backgroundLista: {
        backgroundColor: "#FFF",
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    direcao: {
        flex: 0,
    },
    rodape: {
        margin: 20,
        textAlign: "justify",
        textTransform: "lowercase",
        backgroundColor: "#FFFFFF"
    },
    rodapeTexto: {
        color: "black",
    },
    rodapeLogo: {
        textTransform: "uppercase",
        color: "black",
    }
});

export default estilo;