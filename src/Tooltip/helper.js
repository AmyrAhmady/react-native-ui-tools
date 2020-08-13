import { Platform, Dimensions } from 'react-native';

const Screen = Dimensions.get('window');
const ScreenWidth = Screen.width;
const ScreenHeight = Screen.height;
const isIOS = Platform.OS === 'ios';

const conditionalStyle = (condition, style) => (condition ? style : {});

export { ScreenWidth, ScreenHeight, isIOS, conditionalStyle };