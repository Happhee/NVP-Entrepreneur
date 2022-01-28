import React from 'react';
import { View, Text, Modal, TouchableOpacity, Platform, SafeAreaView, StyleSheet, TextInput, Alert
} from 'react-native';
import NfcManager, { NfcTech } from 'react-native-nfc-manager';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible:false,
            log: "",
            text: ""
        }
    }
    componentDidMount() {
        NfcManager.start();
    }

    componentWillUnmount() {
        this._cleanUp();
    }

    _cleanUp = () => {
        NfcManager.cancelTechnologyRequest().catch(() => 0);
    }
    writeData = async () => {
        if (!this.state.text){
            Alert.alert("Nothing to write");
            return;
        }
        try {
            let tech = Platform.OS === 'ios' ? NfcTech.MifareIOS : NfcTech.NfcA;
            let resp = await NfcManager.requestTechnology(tech, {
                alertMessage: 'Ready'
            });

            let text = this.state.text;
            let fullLength = text.length + 7;
            let payloadLength = text.length + 3;

            let cmd = Platform.OS === 'ios' ? NfcManager.sendMifareCommandIOS : NfcManager.transceive;

            resp = await cmd([0xA2, 0x04, 0x03, fullLength, 0xD1, 0x01]); 
            resp = await cmd([0xA2, 0x05, payloadLength, 0x54, 0x02, 0x65]); 

            let currentPage = 6;
            let currentPayload = [0xA2, currentPage, 0x6E];

            for(let i=0; i<text.length; i++){
                currentPayload.push(text.charCodeAt(i));
                if (currentPayload.length == 6){
                    resp = await cmd(currentPayload);
                    currentPage += 1;
                    currentPayload = [0xA2, currentPage];
                }
            }

            currentPayload.push(254);
            while(currentPayload.length < 6){
                currentPayload.push(0);
            }

            resp = await cmd(currentPayload);

            this.setState({
                //log: resp.toString()
                log:"complete!"
            })

            this._cleanUp();
        } catch (ex) {
            this.setState({
                log: ex.toString()
            })
            this._cleanUp();
        }
    }

    onChangeText = (text) => {
        this.setState({
            text
        })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={this.onChangeText}
                    autoCompleteType="off"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholderTextColor="#808080"
                    fontFamily="DoHyeon_Regular"
                    placeholder="Write down the name of a store" />

                <TouchableOpacity
                    style={styles.buttonWrite}
                    onPress={this.writeData}>
                    <Text style={styles.buttonText}>Confirm</Text>
                </TouchableOpacity>
                <Text style={styles.buttonText2}>{this.state.log}</Text>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    textInput: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        height: 50,
        fontSize: 25,
        textAlign: 'center',
        color: 'black'
    },
    buttonWrite: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#00B990'
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 20,
    },
    buttonText2: {
        color: '#808080',
        fontSize: 20,
    },
    log: {
        marginTop: 30,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default App;