import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  lista: {
    flex: 1,
    justifyContent: 'center'
  },
  backgroundLista: {
    backgroundColor: "#FFF",
  },
  divisao: {
    display: "flex",
    flexWrap: "wrap", 
    flexDirection: "row" 
  },

  thunbnail: {
    position: 'absolute',
    left: 10,
    top: 20
  },

  listagemItem: {
    flexDirection: 'column'
  },

  campoFiltro: {
    margin: 10,
  }
});

export default estilo;