import React, { Component } from 'react';
import { Text, View, TextInput, Button, Image, ImageBackground, Alert } from "react-native";

import AsyncStorage from '@react-native-community/async-storage'

//import do LinearGradient -> dependência.
import LinearGradient from 'react-native-linear-gradient';

import estilo from "./estilo";
import { ScrollView } from 'react-native-gesture-handler';

// import database from '@react-native-firebase/database';

// const reference = database().ref('/users')

export default class Index extends Component {
    // function Index({ navigation }) {

    state = {
        nome: '',
        email: '',
        cpf: '',
        tel: '',
        empresa: '',
        cargo: '',
        senha: '',
    }

    // async componentDidMount() {
    //     console.log('componentDidMount');
    //     database().ref('/users').on('value', snapshot => {
    //         console.log('User data: ', snapshot);
    //     });
    // }

    gravar = async () => {

        var usuarios = {
            nome: this.state.nome,
            email: this.state.email,
            cpf: this.state.cpf,
            tel: this.state.tel,
            empresa: this.state.empresa,
            cargo: this.state.cargo,
            senha: this.state.senha
        }

        // console.log(JSON.stringify(usuarios))

        try {
            await AsyncStorage.setItem(this.state.cpf, JSON.stringify(usuarios))
            alert('Usuário salvo com sucesso');
            navigation.navigate('Index');
        } catch (error) {
            // Alert.alert('Problema ao criar o usuário:', 'Erro ao salvar o usuário no firebase');
        }

    }



    // gravar = () => {
    //     console.log(database().ref('/users'))
    //     database().ref('/users').set({
    //         userid: 123,
    //         nome: this.state.nome,
    //         email: this.state.email,
    //         cpf: this.state.cpf,
    //         tel: this.state.tel,
    //         empresa: this.state.empresa,
    //         cargo: this.state.cargo,
    //         senha: this.state.senha
    //     }).then(() => alert('cadastrando')).catch((err) => { alert(err) });
    // }


    // listenerFirebase(dbRef) {
    //     dbRef.on("value", dataSnapshot => {
    //         var feedbacks = []

    //         dataSnapshot.forEach(child => {
    //             feedbacks.push({
    //                 mensagem: child.val().feedback.mensagem,
    //                 key: child.key
    //             });
    //         });

    //         this.setState({
    //             data: feedbacks.reverse()
    //         });
    //     });
    // }

    render() {
        return (
            <>
                <LinearGradient colors={['#000', '#000', '#868383']} style={estilo.container}>
                    <ScrollView>

                        <View style={estilo.container}>
                            <Image style={estilo.logoUsuario} source={{ uri: 'https://image.flaticon.com/icons/png/512/138/138659.png' }} />
                            <View style={estilo.inputContainer}>
                                <Image style={estilo.inputIcon} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQc56LE7pdQzoPsGP31r2oWFHLvBpLRyxnULA&usqp=CAU' }} />
                                <TextInput style={estilo.inputs}
                                    placeholder="Nome"
                                    keyboardType="default"
                                    maxLength={50}
                                    onChangeText={text => this.setState({ nome: text })}
                                />
                            </View>

                            <View style={estilo.inputContainer}>
                                <Image style={estilo.inputIcon} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/TK_email_icon.svg/600px-TK_email_icon.svg.png' }} />
                                <TextInput style={estilo.inputs}
                                    placeholder="E-mail @"
                                    keyboardType="email-address"
                                    onChangeText={text => this.setState({ email: text })}
                                />
                            </View>

                            <View style={estilo.inputContainer}>
                                <Image style={estilo.inputIcon} source={{ uri: 'https://png.pngtree.com/png-clipart/20190705/original/pngtree-cpf-file-document-icon-png-image_4225468.jpg' }} />
                                <TextInput style={estilo.inputs}
                                    placeholder="111.222.333-44"
                                    keyboardType="numeric"
                                    maxLength={14}
                                    onChangeText={text => this.setState({ cpf: text })}
                                />
                            </View>

                            <View style={estilo.inputContainer}>
                                <Image style={estilo.inputIcon} source={{ uri: 'https://cdn.icon-icons.com/icons2/614/PNG/512/phone-symbol_icon-icons.com_56475.png' }} />
                                <TextInput style={estilo.inputs}
                                    placeholder="(XX) XXXXX-XXXX"
                                    keyboardType="numeric"
                                    maxLength={20}
                                    onChangeText={text => this.setState({ tel: text })}
                                />
                            </View>

                            <View style={estilo.inputContainer}>
                                <Image style={estilo.inputIcon} source={{ uri: 'https://cdn0.iconfinder.com/data/icons/green-issues-environmentalism-1/421/recycle-recycling-environment-environmentalism-environmental_53-512.png' }} />
                                <TextInput style={estilo.inputs}
                                    placeholder="Nome empresa"
                                    keyboardType="default"
                                    onChangeText={text => this.setState({ empresa: text })}
                                />
                            </View>

                            <View style={estilo.inputContainer}>
                                <Image style={estilo.inputIcon} source={{ uri: 'https://img2.gratispng.com/20180601/yfh/kisspng-collegio-dei-periti-industriali-e-dei-periti-indus-studen-5b111585040488.1403780215278462770165.jpg' }} />
                                <TextInput style={estilo.inputs}
                                    placeholder="Cargo"
                                    keyboardType="default"
                                    onChangeText={text => this.setState({ cargo: text })}
                                />
                            </View>

                            <View style={estilo.inputContainer}>
                                <Image style={estilo.inputIcon} source={{ uri: 'https://w7.pngwing.com/pngs/561/120/png-transparent-computer-icons-password-unlocking-share-icon-symbol-password.png' }} />
                                <TextInput style={estilo.inputs}
                                    placeholder="Senha"
                                    keyboardType="name-phone-pad"
                                    secureTextEntry={true}
                                    onChangeText={text => this.setState({ senha: text })}
                                />
                            </View>

                            <View style={estilo.botaoCadastrar}>
                                <Button
                                    title="CADASTRAR"
                                    color="primary"
                                    accessibilityLabel="Botão de entrar no sistema"
                                    onPress={() => {
                                        if (this.state.nome != '' && this.state.email != '' && this.state.cpf != '' && this.state.tel != '' && this.state.empresa != '' && this.state.cargo != '' && this.state.senha != '') {
                                            this.gravar();
                                        } else {
                                            alert('Todos os campos são obrigatórios')
                                        }
                                        // Alert.alert(
                                        //     "",
                                        //     "Dados cadastrados com sucesso!",
                                        // )
                                    }/* navigation.navigate('Index') */}
                                />
                            </View>
                        </View>
                    </ScrollView>
                </LinearGradient>
            </>
        )
    }
}

// export default Index;





