import React from 'react';
import {FlatList} from 'react-native';
import EmojiComponent from './EmojiComponent';
import {emojiSectionStyle as styles} from '../theme/styles';

const EmojiSection = React.memo(({items, addEmojiToRecent}) => {
  return (
    <FlatList
      data={items.item.list}
      numColumns={8}
      columnWrapperStyle={styles.wrapperStyle}
      style={styles.listStyle}
      keyExtractor={item => item.emoji}
      renderItem={item => (
        <EmojiComponent emoji={item.item} addEmojiToRecent={addEmojiToRecent} />
      )}
    />
  );
});

export default EmojiSection;
