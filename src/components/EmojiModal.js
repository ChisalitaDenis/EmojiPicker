import React, {useState, useRef, useEffect, useCallback} from 'react';
import {Text, Modal, View, TextInput, SectionList} from 'react-native';
import EmojiSection from './EmojiSection';
import HeaderSelector from './HeaderSelector';
import emoji from '../../assets/emoji.json';
import string from '../theme/Strings';
import {emojiModalStyle as styles} from '../theme/styles';

const EmojiModal = React.memo(({modalVisible, addEmoji}) => {
  const [currentHeader, setCurrentHeader] = useState(0);
  const [search, setSearch] = useState({text: '', filteredEmoji: {list: []}});
  const [emojis, setEmojis] = useState([]);
  let sectionRef = useRef(null);
  let textRef = useRef(null);
  useEffect(() => {
    const smileysEmotions = [];
    const peopleBody = [];
    const animalsNature = [];
    const foodDrink = [];
    const travelPlaces = [];
    const activities = [];
    const objects = [];
    const symbols = [];
    const flags = [];
    emoji.map(item => {
      switch (item.category) {
        case string.emojiModal.categories.smiley:
          smileysEmotions.push(item);
          break;
        case string.emojiModal.categories.people:
          peopleBody.push(item);
          break;
        case string.emojiModal.categories.animals:
          animalsNature.push(item);
          break;
        case string.emojiModal.categories.food:
          foodDrink.push(item);
          break;
        case string.emojiModal.categories.travel:
          travelPlaces.push(item);
          break;
        case string.emojiModal.categories.activities:
          activities.push(item);
          break;
        case string.emojiModal.categories.objects:
          objects.push(item);
          break;
        case string.emojiModal.categories.symbols:
          symbols.push(item);
          break;
        case string.emojiModal.categories.flags:
          flags.push(item);
          break;
      }
    });
    const tempEmoji = [];
    tempEmoji.push({
      category: string.emojiModal.categories.recent,
      data: [{list: []}],
    });
    tempEmoji.push({
      category: string.emojiModal.categories.smiley,
      data: [{list: smileysEmotions}],
    });
    tempEmoji.push({
      category: string.emojiModal.categories.people,
      data: [{list: peopleBody}],
    });
    tempEmoji.push({
      category: string.emojiModal.categories.animals,
      data: [{list: animalsNature}],
    });
    tempEmoji.push({
      category: string.emojiModal.categories.food,
      data: [{list: foodDrink}],
    });
    tempEmoji.push({
      category: string.emojiModal.categories.travel,
      data: [{list: travelPlaces}],
    });
    tempEmoji.push({
      category: string.emojiModal.categories.activities,
      data: [{list: activities}],
    });
    tempEmoji.push({
      category: string.emojiModal.categories.objects,
      data: [{list: objects}],
    });
    tempEmoji.push({
      category: string.emojiModal.categories.symbols,
      data: [{list: symbols}],
    });
    tempEmoji.push({
      category: string.emojiModal.categories.flags,
      data: [{list: flags}],
    });
    setEmojis(tempEmoji);
  }, []);

  const addEmojiToRecent = item => {
    addEmoji(item.emoji);
    let tempArray = emojis[0].data[0].list;
    tempArray.includes(item) ? null : tempArray.push(item);
    tempArray.length >= 16 ? (tempArray = tempArray.slice(1, 16)) : null;
    const tempState = emojis;
    tempState[0].data[0].list = tempArray;
    setEmojis(tempState);
  };
  const goToHeader = useCallback(
    index => {
      setSearch({text: '', filteredEmoji: {item: {list: []}}});
      textRef.current?.clear();
      sectionRef.current?.scrollToLocation({
        sectionIndex: index,
        itemIndex: 0,
        animated: false,
        viewPosition: 0,
      });
    },
    [sectionRef, textRef],
  );
  return (
    <Modal transparent={true} visible={modalVisible} style={styles.modalStyle}>
      <View style={styles.emojiModalView}></View>
      <View style={styles.emojiModalView}>
        <View style={styles.emojiContainer}>
          <View style={styles.sectionsContainer}>
            {emojis.map((item, index) => (
              <HeaderSelector
                key={index}
                item={item}
                index={index}
                goToHeader={goToHeader}
                currentHeader={currentHeader}
              />
            ))}
          </View>
          <View style={styles.sectionsContainer}>
            <TextInput
              style={styles.textInputStyle}
              placeholder={string.emojiModal.placeholders.search}
              ref={textRef}
              value={search}
              onChangeText={currentText => {
                const filtered = emoji.filter(data => {
                  let ok = false;
                  for (let i = 0; i < data.aliases.length; i++) {
                    data.aliases[i].includes(currentText) ? (ok = true) : null;
                  }
                  return ok;
                });
                currentText != ''
                  ? setSearch({
                      text: currentText,
                      filteredEmoji: {item: {list: filtered}},
                    })
                  : setSearch({
                      text: currentText,
                      filteredEmoji: {item: {list: []}},
                    });
              }}></TextInput>
          </View>
          {search.text != '' ? (
            <EmojiSection
              items={search.filteredEmoji}
              addEmojiToRecent={addEmojiToRecent}
            />
          ) : (
            <SectionList
              ref={sectionRef}
              stickySectionHeadersEnabled={true}
              sections={emojis}
              keyExtractor={(item, index) => item + index}
              renderItem={item => (
                <EmojiSection
                  items={item}
                  addEmojiToRecent={addEmojiToRecent}
                />
              )}
              renderSectionHeader={({section}) => (
                <Text style={styles.headerTextStyle}>{section.category}</Text>
              )}
              onScrollToIndexFailed={info => {
                const wait = new Promise(resolve => setTimeout(resolve, 500));
                wait.then(() => {
                  sectionRef.current?.scrollToIndex({
                    index: info.index,
                    animated: false,
                  });
                });
              }}
              onViewableItemsChanged={({viewableItems, changed}) => {
                switch (viewableItems[0]?.item.category) {
                  case string.emojiModal.categories.recent:
                    setCurrentHeader(0);
                    break;
                  case string.emojiModal.categories.smiley:
                    setCurrentHeader(1);
                    break;
                  case string.emojiModal.categories.people:
                    setCurrentHeader(2);
                    break;
                  case string.emojiModal.categories.animals:
                    setCurrentHeader(3);
                    break;
                  case string.emojiModal.categories.food:
                    setCurrentHeader(4);
                    break;
                  case string.emojiModal.categories.travel:
                    setCurrentHeader(5);
                    break;
                  case string.emojiModal.categories.activities:
                    setCurrentHeader(6);
                    break;
                  case string.emojiModal.categories.objects:
                    setCurrentHeader(7);
                    break;
                  case string.emojiModal.categories.symbols:
                    setCurrentHeader(8);
                    break;
                  case string.emojiModal.categories.flags:
                    setCurrentHeader(9);
                    break;
                }
              }}
              viewabilityConfig={{
                itemVisiblePercentThreshold: 50,
              }}
            />
          )}
        </View>
      </View>
    </Modal>
  );
});

export default EmojiModal;
