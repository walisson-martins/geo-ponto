import React, { Component } from 'react';

import { Container, View, Fab, Button, Thumbnail, Spinner, Text, Content } from 'native-base';
import { Alert } from "react-native";

import estilo from "./estilo";

import Lista from '../ListarView/ListaContainer';

import CsvDownload from 'react-json-to-csv'
 

export default class ExportarRelatorioView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            active: false,
            showToast: false
        };
    }

    render() {
        return (
            <Container>
                <View style={estilo.container}>
                    <Lista />
                    <Fab
                        active={this.state.active}
                        direction="up"
                        position="bottomRight"
                        onPress={() => this.setState({ active: !this.state.active })}>
                        <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNQvvahd0lP5ovuJ-KicrgQoQOO4xD7QY3wg&usqp=CAU' }} />

                        <Button onPress={() => {

                            Alert.alert(
                                "",
                                "Exportando para PDF",
                            )
                        }} >
                            <Thumbnail source={{ uri: 'https://www.zamzar.com/images/filetypes/pdf.png' }} />
                        </Button>

                        <Button onPress={() => {
                            Alert.alert(
                                "",
                                "Exportando para CSV",
                                // <CsvDownload data={} filename={"pontos.csv"} />
                            )
                        }} >
                            <Thumbnail source={{ uri: 'https://cdn2.vectorstock.com/i/1000x1000/40/71/csv-file-document-icon-vector-24704071.jpg' }} />
                        </Button>
                    </Fab>
                </View>
            </Container >
        );
    }
} 
