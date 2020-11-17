import React, { useState } from 'react';
import { Text, View, TextInput, Button, Image, ImageBackground, Alert } from "react-native";
import { Label } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

//import do LinearGradient -> dependência.
import LinearGradient from 'react-native-linear-gradient';
import efetuarLogin from './serviço/cpfMask';
import { cpfMask } from './serviço/cpfMask'

import estilo from "./estilo";

function IndexView({ navigation }) {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    logar = async () => {
        try {
            const value = await AsyncStorage.getItem(usuario);
            if (value !== null) {
                let myValue = JSON.parse(value);
                if (myValue.senha == senha && myValue.cpf == usuario) {
                    navigation.navigate('Cadastro', { cpf: myValue.cpf, nomeUsuario:myValue.nome })
                } else {
                    alert('Usuário ou senha incorreta');
                }
            }
        } catch (error) {
            alert('Usuário não encontrado! ' + error)
        }
    }

    function verificarCPF(text) {
        console.log(text)
        let meuTexto = text;


        if (meuTexto.length == 3 || meuTexto.length == 6) {
            meuTexto = meuTexto + '.';
        }
        if (meuTexto.length == 11) {
            meuTexto = meuTexto + '-';
        }

        console.log('final ' + meuTexto)
        return meuTexto;
    }

    return (
        <>
            <LinearGradient colors={['#000', '#000', '#868383']} style={estilo.container}>
                <View style={estilo.container}>
                    <View style={estilo.posicaoFoto}>
                        <ImageBackground style={estilo.logoUsuario} source={{ uri: 'https://www.casadocontabilista.org.br/wp-content/uploads/2020/04/imagem-link-site-casa-do-contabilista-pagina-mascaras-covid-19-coronavirus-abr2020.png' }} />
                    </View>

                    <View style={estilo.inputContainer}>
                        <Image style={estilo.inputIcon} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQc56LE7pdQzoPsGP31r2oWFHLvBpLRyxnULA&usqp=CAU' }} />
                        <Label>CPF</Label>
                        <TextInput style={estilo.inputs}
                            placeholder="111.222.333-44"
                            keyboardType="numeric"
                            name='cpf'
                            maxLength={14}
                            onChangeText={
                                cpf => setUsuario(cpf)
                            }
                        />

                    </View>

                    <View style={estilo.inputContainer}>
                        <Image style={estilo.inputIcon} source={{ uri: 'https://listimg.pinclipart.com/picdir/s/203-2033374_password-svg-png-icon-free-download-reset-password.png' }} />
                        <Label>Senha</Label>
                        <TextInput style={estilo.inputs}
                            placeholder="xxxxxxx"
                            secureTextEntry={true}
                            onChangeText={
                                senha => setSenha(senha)
                            }
                        />
                    </View>

                    <View style={estilo.botaoEntrar}>
                        <Button
                            onPress={() => { logar() }}
                            title="ENTRAR"
                            color="primary"
                            accessibilityLabel="Botão de entrar no sistema"
                        />
                    </View>
                    <View style={estilo.botaoCadastrar}>
                        <Button
                            title="CADASTRAR"
                            color="primary"
                            accessibilityLabel="Botão de entrar no sistema"
                            onPress={() => { navigation.navigate('CadastrarUsuarioView') }}
                        />
                    </View>
                    <Text style={estilo.recuperarSenha} onPress={() => {
                        navigation.navigate('RecuperarSenha');
                    }
                    }>
                        Esqueceu a senha?
                </Text>
                </View>
            </LinearGradient>
        </>
    )
}

export default IndexView;





