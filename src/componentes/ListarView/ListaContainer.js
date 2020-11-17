import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {
    Container, Content, List, ListItem, Text, View, Thumbnail, Item, Input, Label
} from 'native-base';

import estilo from "./estilo";

function ListarView() {
    // state = {
    //     CPFUser: '',
    //     nomeUsuario: '',
    // }

    return (
        <>
            <View style={estilo.lista}>
                <Container>
                    <Content>
                        <Item floatingLabel>
                            <Label>Filtrar relatório</Label>
                            <Input keyboardType={"default"} style={estilo.campoFiltro}
                                onKeyPress={() => { console.log("filtrando dados") }} />
                        </Item>

                        <List>
                            <ListItem style={estilo.listagemItem}>
                                <Thumbnail style={estilo.thunbnail} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQv3hJ0gUAV8mrvxZzHvvfX3_-GitT1HTdow&usqp=CAU' }} />
                                <Text style={estilo.divisao}>Usuario { }</Text>
                                <Text style={estilo.divisao}>data e hora: {
                                    new Date().toLocaleDateString("pt-br")}</Text>
                                <Text style={estilo.divisao}>Localização: { }</Text>
                            </ListItem>
                        </List>
                    </Content>
                </Container>
            </View>
        </>
    )
}

export default ListarView;

