import React from 'react';
// importo as dependências das Routers com essas dependências eu consigo mudar as rotas do meu aplicativo;
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//
// importo os meus componentes -> com as respectivas telas do aplicativo.
import Index from '../componentes/IndexView/Index';
import RecuperarSenha from '../componentes/RecuperarSenhaView/RecuperarSenha';
import Cadastro from '../componentes/CadastroView/Cadastro';
import ListarView from '../componentes/ListarView/ListarView';
import ExportarRelatorioView from '../componentes/ExportarRelatorioView/ExportarRelatorioView';
import CadastrarUsuarioView from '../componentes/CadastrarUsuarioView/CadastrarUsuarioView';
import MenuView from '../componentes/MenuView/MenuView';
//
const Stack = createStackNavigator();
//function routes -> que utiliza os componentes do react para configurar as rotas.

function Routers() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Index" component={Index} options={{ headerShown: false }} />
                <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} options={{
                    title: "Recuperar Senha", headerTitleStyle:
                        { textAlign: "center", },
                    headerTitleAlign: 'center'
                }} />
                <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false, }} />
                <Stack.Screen name="CadastrarUsuarioView" component={CadastrarUsuarioView} options={{
                    title: "Cadastro Usuário", headerTitleStyle:
                        { textAlign: "center", },
                    headerTitleAlign: 'center'
                }} />

                <Stack.Screen name="Listar" component={ListarView} options={{ headerShown: false, }} />

                <Stack.Screen name="Exportar" component={ExportarRelatorioView} options={{
                    title: "Exportar", headerTitleStyle:
                        { textAlign: "center", },
                    headerTitleAlign: 'center'
                }} />

                <Stack.Screen name="MenuView" component={MenuView} options={{
                    title: "Menu", headerTitleStyle:
                        { textAlign: "center", },
                    headerTitleAlign: 'center'
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routers;