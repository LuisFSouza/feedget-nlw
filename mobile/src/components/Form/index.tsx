import { ArrowLeft } from 'phosphor-react-native';
import React, {useState} from 'react';
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import { theme } from '../../theme';
import { FeedbackType } from '../../components/Widget'
import { ScreenshotButton } from '../../components/ScreenshotButton'
import { styles } from './styles';
import { feedbackTypes } from '../../utils/feedbackTypes'
import { Button } from '../Button';
import { captureScreen } from 'react-native-view-shot'

interface Props {
    feedbackType: FeedbackType
    onFeedbackCanceled: () =>void
    onFeedbackSend: () => void
}

export function Form({ onFeedbackCanceled, onFeedbackSend, feedbackType }: Props) {
    const [screenshot, setScreenshot] = useState<string | null>(null)
    const feedbackTypeInfo = feedbackTypes[feedbackType]

    function handleScreenshot() {
        captureScreen({
            format: 'jpg',
            quality: 0.8
        }).then(url=>setScreenshot(url))
        .catch(error=>console.log(error))
    }
    function handleScreenshotRemove() {
        setScreenshot(null)
    }



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={onFeedbackCanceled}>
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
                autoCorrect={false}
    
            />

            <View style={styles.footer}>
                <ScreenshotButton
                    onTakeShot={handleScreenshot}
                    onRemoveShot={handleScreenshotRemove}
                    screenshot={screenshot}
                />
                <Button
                    isLoading={false}
                />
            </View>
        </View>
    );
}