import React, {useState, useCallback} from 'react';
import {View, TextInput, Image, TouchableOpacity} from 'react-native';
import EmojiModal from '../components/EmojiModal';
import string from '../theme/Strings';
import images from '../theme/Images';
import {messageScreenStyle as styles} from '../theme/styles';

const MessageScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState('');
  const addEmoji = useCallback(
    item => {
      setMessage(message.concat(item));
    },
    [message],
  );
  return (
    <View style={styles.mainView}>
      <View style={styles.contentView}>
        {modalVisible ? (
          <EmojiModal modalVisible={modalVisible} addEmoji={addEmoji} />
        ) : null}
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInputStyle}
          placeholder={string.messageScreen.placeholders.message}
          value={message}
          onChangeText={setMessage}></TextInput>
        <TouchableOpacity
          style={styles.emojiButton}
          onPress={() => setModalVisible(!modalVisible)}>
          <Image style={styles.emojiIcon} source={images.emojiIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MessageScreen;
