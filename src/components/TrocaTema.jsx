import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useTema } from '../contexts/TemaContext';
import { createStyles } from '../config/styles';

const TrocaTema = () => {
  const { tema, trocaTema } = useTema();
  const styles = createStyles(tema);

  return (
    <TouchableOpacity style={styles.button} onPress={trocaTema}>
      <Text style={styles.buttonText}>
        {tema.type === 'light' ? 'Modo Escuro' : 'Modo Claro'}
      </Text>
    </TouchableOpacity>
  );
};

export default TrocaTema;