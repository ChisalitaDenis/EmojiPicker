import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import string from '../theme/Strings';
import {HeaderSelectorStyle as styles} from '../theme/styles';
const HeaderSelector = React.memo(
  ({item, index, goToHeader, currentHeader}) => {
    return (
      <View style={currentHeader === index && styles.active}>
        <TouchableOpacity
          key={index}
          onPress={() => {
            goToHeader(index);
          }}
          style={styles.buttonStyle}>
          <Text style={styles.text} allowFontScaling>
            {index === 0
              ? string.headerSelector.recent
              : item.data[0].list[0].emoji}
          </Text>
        </TouchableOpacity>
      </View>
    );
  },
);

export default HeaderSelector;
