import React from 'react';
// import { Text, View, TextInput, Button, Image, ImageBackground } from "react-native";
import { View, Tab, Tabs, ScrollableTab } from 'native-base';

//import do LinearGradient -> dependência.
import ExportarRelatorioView from '../ExportarRelatorioView/ExportarRelatorioView';
import Lista from '../ListarView/ListaContainer';
import Cadastro from '../CadastroView/Cadastro';

import estilo from "./estilo";

function ListarView({ navigation }) {
    return (
        <>
            {/* <LinearGradient colors={['#000', '#000', '#868383']} style={estilo.container}> */}
            <View style={
                estilo.lista
            }>
                <Tabs renderTabBar={() => <ScrollableTab />}>

                    <Tab heading="Listar"  >
                        <Lista />
                    </Tab>

                    <Tab heading="Exportar">
                        <ExportarRelatorioView />
                    </Tab>

                    <Tab heading="Cadastro">
                        <Cadastro />
                    </Tab>
                </Tabs>
            </View>
            {/* </LinearGradient> */}
        </>
    )
}

export default ListarView;

