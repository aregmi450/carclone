import React from "react";
import {View, Text, ImageBackground, Button} from 'react-native';
import StyledButton from "../StyledButton";
import styles from "./styles";

const CarItem = (props) => {
    return(
            <View style={styles.carcontainer}>

                <ImageBackground
                    source={require('../../assets/images/creta.jpg')}
                    style={styles.image}
                />

                <View style={styles.titles}>
                    <Text style={styles.title}>Creta</Text>
                    <Text style={styles.subtitle}>Starting at 690,000</Text>
                </View>

            <StyledButton 
            type ="primary" 
            content={"Custom Order"} 
            onPress ={() => {
                console.log("Custom Order was pressed");
            }}
            />

            <StyledButton
                type="secondary"
                content={"Existing Inventory"}
                onPress={() => {
                    console.log("Existing Inventory was pressed");
                }}
            />

            </View>

    );
};

export default CarItem;