import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity, TouchableOpacityProps, Image, ImageProps, Text } from 'react-native';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  title: string,
  image: ImageProps
}

export function Option({ title, image, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.container} {...rest}>
        <Image
          source={image}
          style={styles.image}
        />
        <Text style={styles.title}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}