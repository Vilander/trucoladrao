import { TouchableOpacity, TouchableOpacityProps, Text, Alert } from "react-native"
import { styles } from './styles'

type Props = TouchableOpacityProps & {
    titulo: string,
}

// export default function Button(props: Props) {
export default function Button({ titulo, ...rest }: Props) {
    return (
        <TouchableOpacity
            // onPress={() => Alert.alert("Aviso!", "Você Clicou",[
            //     {text: "NÃO", style:"cancel"},
            //     {text:"SIM", style:'default', onPress: () => Alert.alert('você clicou que sim')}
            // ])}

            // onPress={() => Alert.alert("Aviso!", "Você Clicou")}
            // activeOpacity={opacidade}
            {...rest}
            style={styles.button}
        >
            <Text style={styles.texto}>{titulo}</Text>
        </TouchableOpacity>
    )
}

