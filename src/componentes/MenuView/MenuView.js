import React, { useState } from 'react';
import { TouchableOpacity } from "react-native";
import { Text, View, Card, CardItem, Left, Body, Thumbnail, Footer } from 'native-base';

import estilo from "./estilo";

function MenuView({ navigation }) {
    const [visible, mudarVisible] = useState(false);

    return (
        <>
            <View style={estilo.container}>
                <TouchableOpacity onPress={() => {
                    mudarVisible(true);
                    navigation.navigate('Listar');
                }}>
                    <Card style={estilo.direcao}>
                        <CardItem >
                            <Left>
                                <Thumbnail source={{ uri: 'data:image/png;base64,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' }} />
                                <Body >
                                    <Text>Listar relatório de horas</Text>
                                </Body>
                            </Left>

                        </CardItem>
                    </Card>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    mudarVisible(true);
                    navigation.navigate('Exportar');
                }}>
                    <Card style={estilo.direcao}>
                        <CardItem onPress={() => { navigation.navigate('ExportarRelatorioView') }}>
                            <Left>
                                <Thumbnail source={{ uri: 'https://cdn2.iconfinder.com/data/icons/mixed-4/100/mixed_export-512.png' }} />
                                <Body>
                                    <Text>Exportar relatório</Text>
                                </Body>
                            </Left>
                        </CardItem>
                    </Card>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    mudarVisible(true);
                    navigation.navigate('Cadastro');
                }}>
                    <Card style={estilo.direcao}>
                        <CardItem onPress={() => { navigation.navigate('Cadastro',setParams={mostrar:false}) }}>
                            <Left>
                                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQ1kUt-vmhXApAxBxFG-0slSLdtDUBhXlfzr4iwOSvT63P6SZ9N5Wn6sO_J0-DwI6cNX3CF4ZQ&usqp=CAc' }} />
                                <Body>
                                    <Text>Cadastrar ponto</Text>
                                </Body>
                            </Left>
                        </CardItem>
                    </Card>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    mudarVisible(true);
                    navigation.navigate('Index')
                }}>
                    <Card style={estilo.direcao}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbo7gBuYZS_TOKpSNe-q501ybmspuVzOoXuA&usqp=CAU' }} />
                                <Body>
                                    <Text>Sair</Text>
                                </Body>
                            </Left>
                        </CardItem>
                    </Card>
                </TouchableOpacity>
            </View>

            <Footer style={estilo.rodape}>
                <Text style={estilo.rodapeTexto}>
                    <Text style={estilo.rodapeLogo}>GeoPonto</Text> - Aplicativo de geolocalização de ponto eletrônico. @2020 </Text>
            </Footer>

        </>
    )
}

export default MenuView;

