import { Image, Text, View } from "react-native";

const PokemonCard = ({name, image, colore, tipo, atc, def, vel, hp}) => {
    return (
        <View>
            <View style={{border: "solid 1px gray", 
                        borderRadius: 20,
                        padding: 10
            }}>
                <Text  style={{
                                backgroundColor: "gray",
                                textAlign: "center"
                    }}>{hp}</Text>
                <Image
                    source={{
                    uri: image,
                     }}
                    style={{width: 200, height: 200}}
                    />
                <View>
                    <Text style={{textAlign: "center"}}>{name}</Text>
                    <Text  style={{
                                backgroundColor: colore,
                                textAlign: "center"
                    }}>{tipo}</Text>
                    <View style={{flex: 1}}>
                    <Text style={{textAlign: "center"}}>{atc}</Text>
                    <Text style={{textAlign: "center"}}>{def}</Text>
                    <Text style={{textAlign: "center"}}>{vel}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default PokemonCard;