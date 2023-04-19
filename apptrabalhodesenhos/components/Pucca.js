import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Pucca() {
  return (
    <View style={estilo.container}>
      <ScrollView>
        <Text style={estilo.titulo}>Pucca </Text>
        <Image
          style={estilo.img}
          resizeMode={'contain'}
          source={require('../assets/pucca/pucca2.jpg')}
        />
        <Text style={estilo.texto}>
          Pucca é coreana, tem 10 anos e seu aniversário é 7 de julho. Ela sabe
          Kung Fu e criou a encantadora dança dos chopstick (jokarak). Ela está
          apaixonada por um garoto de 12 anos, chamado Garu. Pucca é mimada e
          caprichosa, mas, quando seus caprichos não são satisfeitos, ela fica
          vermelha de raiva. Pucca sempre mira o momento de dar um beijo em
          Garu, e seu hobby é criar algo para ele.{' '}
        </Text>
        <View style={estilo.fundo}>
          <Text style={estilo.subtitulo}> Informações</Text>
          <Text style={estilo.infos}>
            <Ionicons
              name="md-heart"
              size={24}
              color="black"
              style={estilo.icon}
            />
            Elenco: Karen Strassman{' '}
          </Text>

          <Text style={estilo.infos}>
            <Ionicons
              name="md-heart"
              size={24}
              color="black"
              style={estilo.icon}
            />
            Criador(es): Boo Kyoung Kim e Calvin Kim{' '}
          </Text>

          <Text style={estilo.infos}>
            <Ionicons
              name="md-heart"
              size={24}
              color="black"
              style={estilo.icon}
            />
            Idioma original: língua inglesa
          </Text>

          <Text style={estilo.infos}>
            <Ionicons
              name="md-heart"
              size={24}
              color="black"
              style={estilo.icon}
            />
            Transmissão original: 18 de Setembro de 2006 – presente
          </Text>

          <Text style={estilo.infos}>
            <Ionicons
              name="md-heart"
              size={24}
              color="black"
              style={estilo.icon}
            />
            Temporadas: 1 temporada: 
            2006, 26 episódios. {'\n'}2 temporada:
            2007, 13 episódios.
          </Text>
        </View>
        <Image
          style={estilo.img}
          resizeMode={'contain'}
          source={require('../assets/pucca/Pucca.jpg')}
        />
      </ScrollView>
    </View>
  );
}

const largura = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEBDD',
  },
  texto: {
    fontSize: 20,
    textAlign: 'justify',
    margin: 20,
  },
  titulo: {
    fontSize: 30,
    marginTop: 30,
    marginBottom: 30,
    color: '#630000',
  },
  subtitulo: {
    fontSize: 25,
    textAlign: 'center',

    color: 'black',
  },
  fundo: {
    backgroundColor: '#ff261b',
    borderRadius: 20,
    marginHorizontal: 20,
    paddingVertical: 20,
    textAlign: 'space-between',
  },
  img: {
    width: largura,
    height: 300,
  },
  infos: {
    color: '#FFFFFF',
  },
});
