import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blueGrey600, blueGrey800, grey500, lightGreenA200, lightGreenA100, greenA700 } from 'material-ui/styles/colors';

const AppLightTheme = getMuiTheme({
    palette: {
        primary1Color: blueGrey600,
        primary2Color: blueGrey800,
        primary3Color: grey500,
        accent1Color: lightGreenA200,
        accent2Color: lightGreenA100,
        accent3Color: greenA700,
        // textColor: darkBlack,
        // secondaryTextColor: fade(darkBlack, 0.54),
        // alternateTextColor: white,
        // canvasColor: white,
        // borderColor: grey300,
        // disabledColor: fade(darkBlack, 0.3),
        // pickerHeaderColor: cyan500,
        // clockCircleColor: fade(darkBlack, 0.07),
        // shadowColor: fullBlack,
    }
});

export default AppLightTheme;