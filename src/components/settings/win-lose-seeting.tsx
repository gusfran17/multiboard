import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SettingDescriptionLabel } from './setting-description-label';
import { WinLoseControl } from './win-lose-control';

interface WinLoseSettingProps {
  description: string;
  isMaxScoreWins: boolean;
  onChange: (isMaxScoreWins: boolean) => void;
}

export const WinLoseSetting: React.FC<WinLoseSettingProps> = ({
  description,
  isMaxScoreWins,
  onChange,
}) => (
  <View style={styles.setting}>
    <SettingDescriptionLabel text={description} />
    <WinLoseControl isMaxScoreWins={isMaxScoreWins} onPress={onChange} />
  </View>
);

const styles = StyleSheet.create({
  setting: {
    flexDirection: 'row',
    backgroundColor: '#333',
    borderBottomColor: '#444',
    borderBottomWidth: 2,
  },
});
