import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default function App() {

  //contador começará em 0.
  const [contador, setContador] = useState(0);
  return (

    <View

      // fundo da aplicação

        style={{backgroundColor: "#151515", justifyContent: "center", flex: 1, alignItems: "center"}}>

      <Text

      // nome do app que aparece ao topo

        style={{fontWeight: "bold", textAlign: 'center', marginTop: 70, fontSize: 35, color: "#04D361"}}>Contador Estiloso 😎
      
      </Text>

    <View

      //estilo do contador

        style={{ flex: 1, marginTop: 170, alignItems: "center",}}>

      <Text
      
        style={{ fontSize: 100, color: "#ffffff"}}> {contador}

      </Text> 

    </View>

    <View

    //escala, tamanho e estilo da box
        style={{ flex: 1, width: "95%", flexDirection: "row" }}>

    <View

      //maneira de deixar um botão ao lado do outro.
     
        style={{ flex: 2}}>

      <TouchableOpacity
      
      //botão de diminuir
  
        style={{ borderRadius: 5,backgroundColor: "#540a82", flex: 1, justifyContent: "center", alignItems: "center"}}
        
        onPress={() => setContador(contador - 1)}>

      <Text

        style={{ color: "white", fontSize: 25, fontWeight: "bold"}}>Decrementar</Text>

      </TouchableOpacity>

    </View>

    <View 

      //maneira de deixar um botão ao lado do outro. 
        
        style={{ flex: 2}}>

      <TouchableOpacity

      //botão de aumentar

        style={{ borderRadius: 5, backgroundColor: "#04D361",flex: 1,justifyContent: "center",alignItems: "center"}} 
      
      onPress={() => setContador(contador + 1)}>

      <Text
      
        style={{fontWeight: "bold", color: "black", fontSize: 25 }}>Incrementar
        
      </Text>

      </TouchableOpacity>

        </View></View></View>);}