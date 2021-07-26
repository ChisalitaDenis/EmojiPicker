import {ScaledSheet} from 'react-native-size-matters';

export const messageScreenStyle = ScaledSheet.create({
  mainView: {
    flex: 1,
  },
  contentView: {
    height: '93%',
  },
  inputView: {
    borderRadius: '20@s',
    borderWidth: '2@s',
    borderColor: 'grey',
    height: '40@vs',
    marginHorizontal: '4@s',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputStyle: {
    flex: 9,
    marginLeft: '24@s',
  },
  emojiButton: {
    flex: 1,
    marginRight: '8@s',
  },
  emojiIcon: {
    width: '100%',
    height: '20@vs',
    resizeMode: 'contain',
  },
  emojiModalView: {
    width: '80%',
    flex: 1,
    alignSelf: 'flex-end',
  },
  sectionsContainer: {
    height: '12%',
    marginTop: '2@s',
    marginHorizontal: '4@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionButtons: {
    fontSize: '18@s',
  },
  emojiContainer: {
    height: '84%',
    backgroundColor: 'grey',
    marginRight: '6@s',
    borderRadius: '10@s',
  },
  headerTextStyle: {
    marginLeft: '2%',
    fontSize: '14@s',
  },
});

export const emojiModalStyle = ScaledSheet.create({
  modalStyle: {height: '80%'},
  emojiModalView: {
    width: '80%',
    flex: 1,
    alignSelf: 'flex-end',
  },
  sectionsContainer: {
    height: '12%',
    marginTop: '2@s',
    marginHorizontal: '2@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInputStyle: {flex: 1, marginHorizontal: '2%', borderRadius: '20@s'},
  sectionButtons: {
    fontSize: '18@s',
  },
  emojiContainer: {
    height: '84%',
    backgroundColor: 'grey',
    marginRight: '6@s',
    borderRadius: '10@s',
  },
  headerTextStyle: {
    marginLeft: '2%',
    fontSize: '14@s',
  },
});

export const EmojiComponentStyle = ScaledSheet.create({
  buttonStyle: {height: '28@s', width: '28@s'},
  text: {fontSize: '18@s'},
});

export const HeaderSelectorStyle = ScaledSheet.create({
  buttonStyle: {height: '20@s', width: '20@s'},
  text: {fontSize: '16@s'},
  active: {height: '24@s', width: '20@s', borderBottomWidth: '2@s'},
});

export const emojiSectionStyle = ScaledSheet.create({
  wrapperStyle: {justifyContent: 'space-between'},
  listStyle: {width: '90%', marginHorizontal: '5%'},
});
