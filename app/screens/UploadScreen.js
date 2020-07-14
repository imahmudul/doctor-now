import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import Text from '../components/Text';
import * as Progress from 'react-native-progress';
import colors from '../config/colors';
import LottieView from 'lottie-react-native';

function UploadScreen({ onDone, progress = 0, visible = fase }) {
  console.log({ progress });
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 0.95 ? (
          <Progress.Bar
            color={colors.primary}
            progress={progress}
            width={200}
          />
        ) : (
            <LottieView
              autoPlay
              loop={false}
              source={require('../assets/animations/done.json')}
              style={styles.animation}
              onAnimationFinish={onDone}
            />
          )}

      </View>
    </Modal>

  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  animation: {
    width: 150
  }
});

export default UploadScreen;