import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
  logoSenha: {
    height: 140,
    width: 140,
    marginBottom: 20,
  },
  recuperarSenha: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#87cefa',
  },
  botaoEntrar: {
    marginTop: 10,
  },
  botaoCadastrar: {
    marginTop: 10,
  },
  posicaoFoto: {
    marginBottom: 15,
  },
});

export default estilo;