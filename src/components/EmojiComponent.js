import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {EmojiComponentStyle as styles} from '../theme/styles';

const EmojiComponent = React.memo(({emoji, addEmojiToRecent}) => {
  return (
    <TouchableOpacity
      style={styles.buttonStyle}
      onPress={() => {
        addEmojiToRecent(emoji);
      }}>
      <Text style={styles.text} adjustsFontSizeToFit={true}>
        {emoji.emoji}
      </Text>
    </TouchableOpacity>
  );
});

export default EmojiComponent;
