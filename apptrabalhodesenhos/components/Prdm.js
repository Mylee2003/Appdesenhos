import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Prdm(){
  return(
    <View style={estilo.container}>
    <ScrollView>
      <Text style={estilo.titulo}>Princesas do mar </Text>
       <Image style={estilo.img} resizeMode={'contain'} source={require('../assets/princesa/princesasdomar.jpg')} />
      <Text style={estilo.texto}>Princesas do Mar é uma franquia brasileira de livros, revistas e desenhos animados, criadas pelos escritores e ilustradores brasileiros Fábio Yabu e Ricardo Mita.A série de animação brasileira é exibida no canal Discovery Kids Brasile na América Latina, e já foi vendida para mais de 100 países. voltar exibida de segunda a sexta, às 12:30 e aos sábados e domingos, ao meio-dia. A série estimula o conservacionismo, desenvolve o interesse pelo mundo submarino e ensina a resolver problemas. </Text>
      <View style={estilo.fundo}>
      <Text style={estilo.subtitulo}> Informações</Text>
       <Text style={estilo.infos}>
      <Ionicons name="md-heart" size={24} color="#BA90C6" style={ estilo.icon} />
       Gênero:	Aventura, Fantasia, Comédia, Infantil
 </Text>


      <Text style={estilo.infos}>
        <Ionicons name="md-heart" size={24} color="#BA90C6" style={ estilo.icon} />
     Idioma original:Português</Text>

      <Text style={estilo.infos}>
        <Ionicons name="md-heart"size={24} color="#BA90C6" style={ estilo.icon} />
       País de origem: Brasil {'\n'}
      Espanha{'\n'}
      Austrália</Text>

      <Text style={estilo.infos}>
        <Ionicons name="md-heart" size={24} color="#BA90C6" style={ estilo.icon} />
      Classificação etária:L</Text>

<Text style={estilo.infos}>
        <Ionicons name="md-heart" size={24} color="#BA90C6" style={ estilo.icon} />
    Editora: Panda Books</Text>
    <Text style={estilo.infos}>
        <Ionicons name="md-heart" size={24} color="#BA90C6" style={ estilo.icon} />
   Publicado entre: 2005-presente</Text>
      
      </View>
       <Image style={estilo.img} resizeMode={'contain'} source={require('../assets/princesa/princesas-mar.jpg')} />
    </ScrollView>
    </View>
  );
}

const largura = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF2FF'
  },
  texto: {
    fontSize: 20,
    textAlign: 'justify',
    margin: 20
  },
  titulo: {
    fontSize: 30,
    marginTop: 30,
    marginBottom: 30,
    color: '#FF1493'
  },
  img:{
    width: largura,
    height:300,


  },
  subtitulo: {
    fontSize: 25,
  color:'#FF1493',
   textAlign:'center'
  },
  fundo: {
    backgroundColor: '#FDF7C3',
    borderRadius: 20,
    marginHorizontal: 20,
    paddingVertical: 20,
    textAlign: 'space-between'
  },
})