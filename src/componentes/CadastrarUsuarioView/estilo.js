import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  textoh1: {
    textAlign: "center",
    color: "#fff",
    textTransform: "uppercase",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:"100%",
    height:"100%",
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  logoUsuario: {
    position: "relative",
    margin: 20,
    height: 150,
    width: 150,
  },
  recuperarSenha: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#87cefa',
    textDecorationLine: "none"
  },
  botaoEntrar: {
    marginTop: 10,
  },
  botaoCadastrar: {

    marginBottom: 60,
  },
  posicaoFoto: {
    marginBottom: 15,
  },
});

export default estilo;