import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView, TextInput, Platform, } from 'react-native';
import NfcManager, { NdefParser, NfcTech } from 'react-native-nfc-manager';
import nfcManager from 'react-native-nfc-manager';


const initNFC = async () => {
    // NFC 지원하는지 확인
    const isNFCSupport = await getIsNFCSupport();
    if (!isNFCSupport) {
        alert('NFC 를 지원하지 않는 기기 입니다');
        return;
    }
    // NFC 활성화 확인
    const isNFCEnabled = await getIsNFCEnabled();
    console.log('확인 ' + isNFCEnabled)

    if (!isNFCEnabled) {
        alert('NFC 가 활성화되어 있지 않습니다');
        return;
    } else {

    }
};

// start 로 init
// isSupported 로 NFC 확인 유무 확인
const getIsNFCSupport = async () => {
    try {
        await NfcManager.start();
        await NfcManager.isSupported();
        return true;
    } catch (e) {
        return false;
    }
};

// iOS 이고 version 이 11 이상이면 통과
const getIsNFCEnabled = async () => {
    console.log(Platform.OS)
    const isIOS = Platform.OS === 'ios';
    const iOSVersion = parseInt(Platform.Version, 10) >= 11;
    if (isIOS && iOSVersion) {
        try {
            const isNFCEnabled = await NfcManager.isEnabled();
            return isNFCEnabled;
        } catch (e) {
            return false;
        }
    }
    // NFC 가 활성화 상태인지 확인

};

function strToBytes(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        result.push(str.charCodeAt(i));
    }
    return result;
}

function buildTextPayload(valueToWrite) {
    const textBytes = strToBytes(valueToWrite);
    const headerBytes = [0xD1, 0x01, (textBytes.length + 3), 0x54, 0x02, 0x65, 0x6e];//영어 바이트
    return [...headerBytes, ...textBytes];
}

class WriteNfc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            supported: false,
            enabled: false,
            isTestRunning: false,
            text: 'dddddddddddd',
            parsedText: null,
            tag: null,
        }
    }

    componentDidMount() {
        console.log('체크')
        NfcManager.isSupported()
            .then(supported => {
                console.log(supported)
                this.setState({ supported });
                if (supported) {
                    this._startNfc();
                } else {
                    initNFC();
                }
            })
    }

    render() {
        let { supported, enabled, tag, text, parsedText, isTestRunning } = this.state;
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>

                    {
                        <View style={{ padding: 20, marginTop: 20, backgroundColor: '#f0f0f0' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text>입력할 문자</Text>
                                <TextInput
                                    value={text}
                                    style={{ marginLeft: 10, backgroundColor: 'yellow' }}
                                    onChangeText={text => this.setState({ text })}
                                />
                            </View>

                            {!isTestRunning && (
                                <TouchableOpacity
                                    style={{ margin: 10 }}
                                    onPress={() => this._runTest(text)}
                                >
                                    <Text style={{ color: 'blue', textAlign: 'center', fontSize: 20 }}>시작</Text>
                                </TouchableOpacity>
                            )}

                            {isTestRunning && (
                                <TouchableOpacity
                                    style={{ margin: 10 }}
                                    onPress={() => this._cancelTest()}
                                >
                                    <Text style={{ color: 'red', textAlign: 'center', fontSize: 20 }}>정지</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    }

                    <View style={{ alignItems: 'center', justifyContent: 'center', padding: 20, marginTop: 20 }}>
                        <Text >{`태그 콘텐트:`}</Text>
                        <Text style={{ marginTop: 5, color: 'grey' }}>{`${tag ? JSON.stringify(tag) : '---'}`}</Text>
                        {parsedText && <Text style={{ marginTop: 5, }}>{`(Parsed Text: ${parsedText})`}</Text>}
                    </View>

                    <TouchableOpacity style={{ marginTop: 20, alignItems: 'center' }} onPress={this._clearMessages}>
                        <Text style={{ color: 'blue' }}>초기화</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }

    _runTest = textToWrite => {
        const cleanUp = () => {
            this.setState({ isTestRunning: false });
            NfcManager.closeTechnology()
            NfcManager.unregisterTagEvent();
        }

        const parseText = (tag) => {
            if (tag.ndefMessage) {
                return NdefParser.parseText(tag.ndefMessage[0]);
            }
            return null;
        }

        this.props.registerNfcId('굳굳')
        this.setState({ isTestRunning: true });
        NfcManager.registerTagEvent(tag => console.log(tag))
            .then(() => NfcManager.requestTechnology(NfcTech.Ndef))
            .then(() => NfcManager.getTag())
            .then(tag => {
                console.log(JSON.stringify(tag));
            })
            .then(() => NfcManager.getNdefMessage())
            .then(tag => {
                let parsedText = parseText(tag);
                this.setState({ tag, parsedText })
                console.log(tag);
            })
            .then(() => NfcManager.writeNdefMessage(buildTextPayload(textToWrite)))
            .then(cleanUp)
            .catch(err => {
                console.warn(err);
                cleanUp();
            })
    }

    _cancelTest = () => {
        NfcManager.cancelTechnologyRequest()
            .catch(err => console.warn(err));
    }

    _startNfc = () => {
        NfcManager.start()
            .then(() => NfcManager.isEnabled())
            .then(enabled => this.setState({ enabled }))
            .catch(err => {
                console.warn(err);
                this.setState({ enabled: false })
            })
    }

    _clearMessages = () => {
        this.setState({ tag: null, parsedText: null });
    }
}

export default WriteNfc;