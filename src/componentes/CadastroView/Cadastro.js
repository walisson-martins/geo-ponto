import React, { Component, useState } from 'react';
import { Text, View, ImageBackground, TouchableOpacity, Image, StyleSheet } from 'react-native';
import MapboxGL from "@react-native-mapbox-gl/maps";
import Geolocation from '@react-native-community/geolocation';

import { RNCamera } from 'react-native-camera';

import { Button, Menu, Divider, Provider } from 'react-native-paper';
import styles from "./estilo";

// Token de acesso a API.
MapboxGL.setAccessToken("pk.eyJ1Ijoid2FsaXNzb245NCIsImEiOiJja2c5emlpcncwMjZyMnNwcjcxd3g2Mmk2In0.sK-8TCXVRVKhCvhWtkLEXg");
var RNFS = require('react-native-fs');

export default class App extends Component {

    state = {
        latitude: 0.0,
        longitude: 0.0,
        visible: false,
        camera: null,
        showCamera: false,
        showMarker: false,
        URIPicture: '',
        mostrarMenu: true,
        mostraPopUp: true,
        CPFUser: '',
        nomeUsuario: '',
        myTitle: '',
    }

    onUserLocationUpdate = function (location) {
        this.setState({ latitude: location.coords.latitude, longitude: location.coords.longitude });
    }

    async componentDidMount() {
        MapboxGL.setTelemetryEnabled(false);
        Geolocation.getCurrentPosition(info => console.log(info));
        console.log(this.props)
        if (this.props.route) {
            this.setState({ CPFUser: this.props.route.params.cpf })
            this.setState({ nomeUsuario: this.props.route.params.nomeUsuario })
        }
        if (this.props.navigation == undefined) {
            this.setState({ mostrarMenu: false });
        } else {
            this.setState({ mostrarMenu: true });
        }
    }

    mostrarCamera = function () {
        this.setState({ showCamera: true });
        this.setState({ showMarker: true });
    }

    takePicture = async function () {
        if (this.camera) {

            var meuTitulo = `Usuario: ${this.state.nomeUsuario}
                            ${new Date().toDateString()}
                            ${new Date().toLocaleDateString()}`
            this.setState({ myTitle: meuTitulo });

            // var meusCadastros = '{"cadastros":[]}';

            let meuJson = {
                id: new Date().toTimeString(),
                usuario: this.state.nomeUsuario,
                data: new Date().toDateString(),
                hora: new Date().toTimeString(),
                latitude: this.state.latitude,
                longitude: this.state.longitude,
            }
            var path = RNFS.DocumentDirectoryPath + `/${this.state.CPFUser}.json`;

            RNFS.readFile(path, 'utf8').then((resp) => {
                let meuArray = JSON.parse(meusCadastros).cadastros;
                meuArray.push(meuJson);
                var meusCadastros = JSON.parse(`{"cadastros":${meuArray}}`);
                console.log(meusCadastros)
                console.log(meuJson);
            }).catch((err) => {
                
                return
                console.log(path)
                RNFS.writeFile(path, meuJson, 'utf8')
                    .then((success) => {
                        console.log('FILE WRITTEN!');
                    })
                    .catch((err) => {
                        console.log(err.message);
                    });
            })






            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            this.setState({ URIPicture: data.uri })
            console.log(data.uri);
            this.setState({ showCamera: false });
        }
        // formatarData = () => {
        //     let data = new Date();
        //     let dataFormatada = ((data.getDate())) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();
        //     console.log(dataFormatada);
        // }
    }




    render() {
        // console.warn(new Date().toDateString(), new Date().toTimeString());
        // const { navigate } = this.props.navigation;
        return (
            <View style={styles.page}>
                <View style={styles.containerMap}>
                    <MapboxGL.MapView style={styles.map}>
                        <MapboxGL.UserLocation
                            visible={true}
                            onUpdate={this.onUserLocationUpdate.bind(this)}
                        />
                        <MapboxGL.Camera
                            zoomLevel={15}
                            centerCoordinate={[this.state.longitude, this.state.latitude]}
                        />

                        {this.state.showMarker ? (
                            <View>
                                <MapboxGL.MarkerView coordinate={[this.state.longitude, this.state.latitude]}>

                                    <View>

                                        <TouchableOpacity onPress={() => {
                                            if (this.state.mostraPopUp) {
                                                this.setState({ mostraPopUp: false })
                                            } else {
                                                this.setState({ mostraPopUp: true })
                                            }
                                        }} style={styles.touchable}>
                                            {this.state.URIPicture ? (
                                                <View>

                                                    <Image style={{ width: 60, height: 60 }} source={{ uri: this.state.URIPicture }} />
                                                </View>
                                            ) : (
                                                    <Image style={{ width: 60, height: 60 }} source={{ uri: 'https://icons.iconarchive.com/icons/icons-land/vista-map-markers/256/Map-Marker-Marker-Outside-Azure-icon.png' }} />
                                                )}
                                        </TouchableOpacity>
                                    </View>
                                </MapboxGL.MarkerView>
                            </View>

                        ) : (<View></View>)}


                    </MapboxGL.MapView>

                </View >

                {this.state.mostrarMenu ? (<View style={styles.menuHamburger}>
                    <Provider >
                        <Menu style={{ left: 50, backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
                            visible={this.state.visible}
                            onDismiss={() => { this.setState({ visible: false }) }}
                            anchor={
                                <TouchableOpacity onPress={() => {
                                    this.setState({ visible: true })
                                    this.props.navigation.navigate('MenuView');
                                }}>
                                    <ImageBackground style={styles.imagemBotaoMenu} source={{ uri: 'https://cdn1.iconfinder.com/data/icons/arrows-elements-outline/128/ic_round_hamburger_menu-512.png' }} />
                                </TouchableOpacity>
                            }>
                        </Menu>
                    </Provider>
                </View>) : (<View />)}

                <TouchableOpacity
                    style={styles.botaoBiometria}
                    onPress={() => { this.mostrarCamera() }}
                >
                    <ImageBackground style={styles.imagemBotao} source={{ uri: 'https://cdn4.iconfinder.com/data/icons/aami-web-internet/64/aami17-28-512.png' }} />
                </TouchableOpacity>

                {this.state.showCamera ? (
                    <View style={styles.container}>
                        <RNCamera
                            ref={ref => {
                                this.camera = ref;
                            }}
                            style={styles.preview}
                            type={RNCamera.Constants.Type.back}

                            flashMode={RNCamera.Constants.FlashMode.on}
                        // permissionDialogTitle={'Permissão para usar a câmera?'}
                        // permissionDialogMessage={'Precisamos de sua permissão para usar seu telefone com câmera'}
                        />

                        <View>
                            <TouchableOpacity
                                onPress={this.takePicture.bind(this)}
                                style={styles.capture}
                                log={console.log('camera')}
                            >
                                <Text >Capturar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : (<View />)}


                {this.state.URIPicture && this.state.mostraPopUp ?
                    // <MapboxGL.MarkerView coordinate={[this.state.longitude, this.state.latitude]}>
                    <View style={styles.card}>
                        <Text style={styles.divisao} >Usuario: {this.state.nomeUsuario}</Text>
                        <Text style={styles.divisao} >{new Date().toDateString()}</Text>
                        <Text style={styles.divisao} >{new Date().toTimeString()}</Text>
                    </View>
                    // </MapboxGL.MarkerView>
                    :
                    <View />}

            </View>
        )
    }
}