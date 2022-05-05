import { ArrowLeft } from 'phosphor-react-native';
import React from 'react';
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import { theme } from '../../theme';
import { FeedbackType } from '../../components/Widget'
import { ScreenshotButton } from '../../components/ScreenshotButton'
import { styles } from './styles';
import {feedbackTypes} from '../../utils/feedbackTypes'
import { Button } from '../Button';

interface Props {
    feedbackType:FeedbackType
}

export function Form({ feedbackType }: Props) {
    const feedbackTypeInfo = feedbackTypes[feedbackType]
    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity>
                <ArrowLeft 
                size={24}
                weight="bold"
                color={theme.colors.text_secondary}
                />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
                <Image 
                source={feedbackTypeInfo.image}
                style={styles.image}
                />
                <Text style={styles.titleText}>
                    {feedbackTypeInfo.title}
                </Text>
            </View>

        </View>

        <TextInput 
        multiline
        style={styles.input}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
        />

        <View style={styles.footer}>
            <ScreenshotButton 
            onTakeShot={()=>{}}
            onRemoveShot={()=>{}}
            screenshot= ""
            />
            <Button
            isLoading={false}
            />
        </View>
    </View>
  );
}