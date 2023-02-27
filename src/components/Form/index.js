import React, {useState} from "react";
import { View,
         Text,
         TextInput, 
         TouchableOpacity,
         Vibration,
         Pressable,
         Keyboard
        } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form(props){
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e a altura");
  const [imc, setImc] = useState(null);
  const [TextButton, setTextButton] = useState("Calcular");
  const [errorMesage, setErrorMessage] = useState(null);


  function imcCalculator(){
    let heightFormat =  height.replace(",",".");
    return setImc((weight/ (heightFormat * heightFormat)).toFixed(2))
  }

  function verificationImc(){
      if (imc == null){
        Vibration.vibrate();
        setErrorMessage("Campo Obrigatório *")
      }
  }

  function validationImc(){
     if(height != null && weight != null){
       imcCalculator()
       setHeight(null)
       setWeight(null)
       setMessageImc("Seu IMC é Igual: ")
       setTextButton("Calcular Novamente")
       setErrorMessage(null) 
     }
     else{
      verificationImc()
      setImc(null)
      setTextButton("Calcular")
      setMessageImc("Preencha o peso e a altura")
     }

  }

    return(
    //  <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
        <View style={styles.formContext}>
          <Pressable onPress={Keyboard.dismiss} style={styles.form}>
           <Text style={styles.formLabel}>Altura</Text>
           <Text style={styles.errorMessage}>{errorMesage}</Text>
            <TextInput 
            style={styles.input}
              onChangeText={setHeight}
              value={height}
              placeholder="Ex:1.75"
              keyboardType='numeric'/>

          <Text style={styles.formLabel}>Peso</Text>
          <Text style={styles.errorMessage}>{errorMesage}</Text>
            <TextInput
            style={styles.input}
             onChangeText={setWeight}
             value={weight}
             placeholder="Ex:75.347"
             keyboardType='numeric'/>
          
         <TouchableOpacity 
         style={styles.buttonCalculator}
          onPress={() => {
          validationImc()
         }}>
          <Text style={styles.TextButtonCalculator}>{TextButton}</Text>
         </TouchableOpacity>
        </Pressable>   

        < ResultImc  messageResultImc={messageImc} ResultImc={imc}/>
      </View>
    );
}