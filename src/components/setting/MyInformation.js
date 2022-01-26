import * as React from 'react';
import { View, Text } from 'react-native';
import infoStyles from '../../assets/styles/information';
function MyInformation(props) {
    console.log(props.entrepreneur)
    return (
        <View style={infoStyles.container}>
            <View style={infoStyles.inputView}>
                <Text style={infoStyles.titleText}>Name</Text>
                <View style={infoStyles.border}>

                    <Text style={infoStyles.titleContent}>{props.entrepreneur.name}</Text>
                </View>
            </View>
            <View style={infoStyles.inputView}>
                <Text style={infoStyles.titleText}>ID</Text>
                <View style={infoStyles.border}>
                    <Text style={infoStyles.titleContent}>{props.entrepreneur.id}</Text>
                </View>
            </View>
            <View style={infoStyles.inputView}>
                <Text style={infoStyles.titleText}>Store Name</Text>
                <View style={infoStyles.border}>
                    <Text style={infoStyles.titleContent}>{props.entrepreneur.store_name}</Text>
                </View>
            </View>
            <View style={infoStyles.inputView}>
                <Text style={infoStyles.titleText}>Store Tell</Text>
                <View style={infoStyles.border}>
                    <Text style={infoStyles.titleContent}>{props.entrepreneur.store_phone}</Text>
                </View>
            </View>

            <View style={infoStyles.inputView}>
                <Text style={infoStyles.titleText}>Address</Text>
                <View style={infoStyles.border}>
                    <Text style={infoStyles.titleContent}>{props.entrepreneur.store_address}</Text>
                </View>
            </View>
            <View style={infoStyles.inputView}>
                <Text style={infoStyles.titleText}>Opening Date</Text>
                <View style={infoStyles.border}>
                    <Text style={infoStyles.titleContent}>{props.entrepreneur.store_kind}</Text>
                </View>
            </View>
        </View>
    )
}
export default MyInformation;