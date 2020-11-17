import { Form } from 'native-base';
import React, { useState } from 'react';
import { View, TextInput, Button, Image, ImageBackground, Alert } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { Label } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native';

import estilo from "./estilo";

function RecuperarSenha() {
    const navigation = useNavigation();
    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");
    const [novaSenha, setNovaSenha] = useState("");

    recuperaSenha = async () => {
        if (cpf != "" && senha != "" && novaSenha != "") {
            if (senha == novaSenha) {
                try {
                    const value = await AsyncStorage.getItem(cpf);
                    let meuJson = JSON.parse(value);
                    if (meuJson.cpf == cpf) {
                        meuJson.senha = novaSenha;
                        await AsyncStorage.setItem(cpf, JSON.stringify(meuJson));
                        Alert.alert("", 'Senha alterada com sucesso');
                        navigation.navigate('Index');
                    }
                } catch (error) {
                    Alert.alert("", 'Usuário não encontrado no banco de dados!');
                }
            } else {
                alert('')
                Alert.alert(""
                    , 'As senhas informadas não coincidem');
            }
        }
    }

    return (
        <>
            <LinearGradient colors={['#000', '#000', '#868383']} style={estilo.container}>
                <Form >
                    <View style={estilo.container}>
                        <View style={estilo.posicaoFoto}>
                            <ImageBackground style={estilo.logoSenha} source={{ uri: 'https://txwes.edu/media/it/policies-and-procedures/password_icon_Reset_Password-159x159.png' }} />
                        </View>

                        <View style={estilo.inputContainer}>
                            <Image style={estilo.inputIcon} source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX///8jPl8AKFEgPF4WNlkAIE0SNFjf4ud7h5mXoK4AK1MoQ2SPmafN0tgALVQdOlwKMVfy9PZEWXTEyc8AJU9LXXbk5+pldInV2d74+fpreY2ttL7d4OVYaYC4vselrbg6UG2cpLFod4uEj58AHky9w8t9iZpWZn1EWnSHkaAwSGfHzNLr7e8ACkNzf5I8U29nFbriAAALsElEQVR4nO2d/3+qLBTHDYiVFdIym+v7Wtutduv//++eSkBUVFLvZHv4vO4vty/GWw+Hw+HAHMfKysrKysrKysrKysrKysrKysrKysrKysrKysrKyuqnaxwET+boq1G2cLR99bo+MEl+Fy/XDWEuehhQBDvGCVEwe6rPFyx91DZKriDq9usCroG5fHeRaVgLsAfaJigV3tQBHLptt19D+LM64MRvu/VaItX7IjXQgarUDSoC9im/BCJ+1yj5PiBY3H/0WpFQjIHgfGo2hKiv8WJ/6IgnAKo9xD2Jvg7dScPNa0p97unpttL3z2wkpOuGG9ac9swVes+Vvs6HetJws5rUkBlqt8qXA2YC6Nx0sxpUiGt0xBPrhnTeeLsaFOtK7kuF766ZAbijxpvVoFgrKxEOuQGYNlAkNIosDSwqfLfHPI1rNOFT5C3eq0ww+GBRcTT9JoXvt7AEL6t8lxMSo/uhM3cB8DeV7OzV/AE/0tOiopVxQlTJAn6COGHHH7fdlH8kQeh9muprwuBldJpMRqNFpYcgCDseoIOW9Hzezlf702iUHg2C1WF5dH3gkqtc4OPLef3oqP8qJ9lgS/IQpZSQv8NE00Y7CCj2EhmI6yddslw/Ym6v5qQRgQw4OiMXq9Mr0KP+dK49+JtDSHZxq1bHkgSuR7s9zUS4MYT0TbRpfiRe+Rew/6ZlrG+GEOIpb9HpSDSTf6i707BVQwi9DWvreAaUfFD5KqarH0IIERvq9gSl36EE+MAbXK3SdwlOmy9Ylg2SZhASNvH7SC6geBQcz+sTH+m/Xvb9ZdrFIlwyZ5iZQOjvIwt9ptKLEPvP66y/DEcH5CYGcb940mACoRvlQRdIaguk3jDXVZ5mAEvfBx+GE9IoWz9yJeujqDgzFvS6UsPJzGhCFOV5R13pJY3s9pfsdGkBYuuEkN79yIu0hgnetCYRJxibKs1ftWmbEIL7XCGITdTTGOOYzvFjlGM+swj9e38LB2Kcw49kY+YxIsjzqC0Tslu/FPZW1KMUeokj2G7OxLFdQpYf7BP+Anl0+STwOCLsqIPUVgm9QfQgRCHBw4BXRBHI4TflB9okhDjqckfexgKPWIQoFrGVLmrZHiHsRhHllsdqqNoKqBhJIVLZaXuE0I9u+dhnzwB6FROaaz6WYtWQ0Roh6rK47Mz9qF95YWHGLgFVqy/LeMIFEf4uUeIv2YTpSdQhVK8ICgfMDFQr2TEhhbPd8JvU34thnU9QvU1lQMeZ8NukqCoShG47y9xf3E1Ut9GbeGfD2YkUJ0SPxRKNia9B1/z9gIdvJOOtOGFblQod1rJKC9iSRFlQhoMTknYqoiZuQyYU5FYVCcJ21oD5rferVFkkxIOzbnpqwglbqjYhDTjSSCNmDZnF7HYJc5tVQWxM9NKL2e0S9pknbaLW5cCuRVPBabuE7NcrFh0mxe0hXTj12Sohu+249naKm9iQmLb4Vgm5i2/GkTODQL3kyw8SBqt+r3f+WI8eWWcO0+JvTJgr9ettF2Fi4RHcJF9+hDAYdgDFCCFMXYB23Dusls93/bn9m75uR8nA6RWQlNwBe4uVHMJjXbi7WD03TNUC6xOOz7686gMxiQx+9I48SYi67qd0sS8/WwDhswUX5v4aiokXQOmYtQn3rrwYEoUP9yWjPk2/Dj1/Kn5lpNiQw3O+bIldOTV/XGNm8yC5YKVLOBT5MCiWYyOvNcyQ3x4L5R1VSThP/HjFGvy0Ql5ImhwuNAnFjgDkksGA+tQTDeWE+NrDqEjteTx7KQglKyWM8NlLANcVi2pSkwg9wj2bp3rgHC0zrP4AL0mIt6fJZNWfAnZBfE4S3oqCuPyvf0J4hIk+8AjhF+tq6BKb+GlDiWyl/AJPn+yZsoQCI6SrcCzEBwdO2FDl50V5w7QI2czEu8gvhh/RslGK0Ak3bOSNHiIjVM4/p80S8meYJJxqELKsO3SVw3yakC8FQnj/XxEhi0KaCdpEP0xZqQ4he4Q5m04yhE6XEd6NsYiQzX9R4Tq8trgvTf2UBuGY+VFfXUiWJdzc7yWLnooImx3xv9STCw1CFlvlTXGyhJHxsV5bRMhWLNKRZEWJ6VMyptEgZLnIvHE5Sxi5SO+P/LtKQr4zEDxMo9Kc3S83+bIGISr+RJbQl22viJBHknVTiZE+1HOLcsIv9cMXyhCyzWI4KogtIgxdpX+vqKj7ZxxiOSFrIqsKySpDyFwvSxCqRvz0ryP16u1jGrPIOX27yglX5DHCbfR5jxWMKqK2uKaAZ49QLTbWTqo2+XJC3oHLCKNmP50ZEYiq8VSRd+yz+CTfPdXEc4TpQC/1ejnhWo8QXq7T/AvmZYOI1/wqZk8xYdjcDtYxqyzO7GlvjPB68zxR+dGBhPulQkIeFsP6mRq+VZSkyxW0rbTMlybkUdEZOCGMEx1uTMgvXn8SzJeBM/dKw9NwwpzFkyyh517iGJ274s2zUJziELYFB6pLP6A9d2iZgpVyQrEXOqegTljpLbtxL8v+lD/Jx8Oc6zd1HACbG3ZA5nfKCXkpAT6o3xdZDEoROs76p2R/LRrxHakeqt55ACveF7KJyXLCkPJnpH6fEdIgnrvLKiHk8/zcG6gnvjuKZKMjjbiUpwEU374pIoTZBfRIZYSijKJOcLrjT0EROmgQcn/XwUpvWpNQtKDGKulImLriIWgQcjPteIOEGQab++yhLqHoibTqVD/kGVxPtTygk8Xg0WMHHaVp/hrh+xy3LmFcHulrlz8nJSrX/IJ0VyFhKMIS2F2ubiThy3zqsvKc2oRjKq5eaZXtQ9Q2KrMhOoTOWtTwdhBxj89HCm5JbzmrX4PQmXNnA0kFb7MV91/dBC1CZ5rYhsNds5zzrkMoagurIK7FgkqOkesRjjN7xu6EDT3D2FV04KPHlwzFXjCaMz/RI3SCTja+hu/3m9YAofMi2gnVpcx5OgsTRZecj2gSOuEMJB8jxNFWiUYIxVFQN2PTD26kzW75Bca6hNfg4wLiwz8R9Xds/jD00W3h+z3nF17+3jMXf0tm8XF36tCLZpHAigr3AEHuvmd9wuvj6B1d4F4FyOtcxDfjYe+qXa5xLeY3lXavfry50vOHZZ927lu7YosqaP4jhFeNn0ZXLRqpnUjpIB3fSDtl+cVwKG2zhO8FrX+Q8F9KMtRrt4ZFjF8HeYulR4ssxCDC6zzdkxm9Yc7guJ8l9gLjQWG/bbfqK6XgKI9JEINBb5VsfbiYvwGSOO6YLIv7jFGEt/KixEZteA0SB8vDdr66at3v/UHp05xhqVcyjNBZ4XRoAT3McuUYZSIrOihtt2mETrjTP7UZuRrDSstV0CotZnonbyN/plN4y882Meo0s8UryDmbJhYGS70g/UO9vN+2gj5yCw6IR6S70z2nnWc79TdQf5dOvYHyGHwPE7pc6UdVYuHAxBPpFuszdBOlj9R1N4fJQ0Ej3+mfrh02RuGeSIDzCiExW0rPy2i3L3l5rtKxeTyXZ+xR0BPpGVY6oXMv1vcMPXNPttL8eW6R+P44Dz900Nu3aSW5mkrH7DpzcY+o603Pu2HfAB0OB37m3Lw2obOR4lnv+3Y7l4nQKCZby4TVIq/A0D9vwU6BkAmrRl6TrpF//4FVxjRB6Kx8IxGj0S9BuK9I6Ixw24cpqRSV9G8bIXTGM1/jMMZvFrl707406c+UAz30GD+BcvmlPbHDm+V6nZozoGB46ZL73jQThAkrGzg0R3jVeLI99MyQWCZoltBE/X7CnSX88fqwhD9eH02N+MZK7oc1ojaD9fsJD/8vQlMTgrX0+wmHv56w/+sJt03kaYxWI5koo/U/I2xgF595mtfPeRuuSe21J9O1kIoswa/8w2JhfCB9QwdKGaeLSOO2dcjqv1Yc1BhZMNKAAlFZmzm587eIF1P83r/R+MWKTn0j6wwa0ei2D8Lr/so0FFPwCt6ntQ/itbKysrKysrKysrKysrKysrKysrKysrKysrKysrKysmpN/wGJsu4gvPgGPQAAAABJRU5ErkJggg==' }} />
                            <Label>CPF</Label>
                            <TextInput style={estilo.inputs}
                                name="cpf"
                                placeholder="111.222.333-44"
                                keyboardType="numeric"
                                maxLength={14}
                                onChangeText={
                                    cpf => setCpf(cpf)
                                }
                            />
                        </View>

                        <View style={estilo.inputContainer}>
                            <Image style={estilo.inputIcon} source={{ uri: 'https://img2.gratispng.com/20180806/ezl/kisspng-clip-art-christmas-microsoft-powerpoint-openclipar-5b68fda6d83026.2932760915336073348855.jpg' }} />
                            <Label>Senha</Label>
                            <TextInput style={estilo.inputs}
                                name="senha"
                                placeholder="xxxxxx"
                                secureTextEntry={true}
                                onChangeText={
                                    senha => setSenha(senha)
                                }
                            />
                        </View>

                        <View style={estilo.inputContainer}>
                            <Image style={estilo.inputIcon} source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/secured-connection-1839522-1560700.png' }} />
                            <Label>Nova senha</Label>
                            <TextInput style={estilo.inputs}
                                name="novaSenha"
                                placeholder="xxxxxxx"
                                secureTextEntry={true}
                                onChangeText={
                                    novaSenha => setNovaSenha(novaSenha)
                                }
                            />
                        </View>

                        <View style={estilo.botaoEntrar}>
                            <Button
                                onPress={() => {
                                    recuperaSenha();
                                }}
                                title="Salvar"
                                color="primary"
                                accessibilityLabel="Botão de entrar no sistema"
                            />
                        </View>
                    </View>
                </Form>
            </LinearGradient>
        </>
    );

}

export default RecuperarSenha;