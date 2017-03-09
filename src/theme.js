import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { blueGrey500, blueGrey800, lightGreenA200, grey800, greenA700 } from 'material-ui/styles/colors'

const AppLightTheme = getMuiTheme({
	palette: {
    	primary1Color: blueGrey500, // cyan500, // buttons, lines, areas       
    	primary2Color: blueGrey800, // cyan700,
    	// primary3Color: grey400,
    	accent1Color: lightGreenA200, // pinkA200, // details like small lines, attentions
    	// accent2Color: grey100, // hovers
    	// accent3Color: greenA700, // grey500, // minor texts, like table headers
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
})

const AppDarkTheme = getMuiTheme(Object.create(darkBaseTheme), {
	// spacing: spacing,
    // fontFamily: 'Roboto, sans-serif',
    // borderRadius: 2,
	palette: {
		primary1Color: blueGrey800, // cyan700,
		primary2Color: blueGrey800, // cyan700,
        // primary3Color: grey600,
		accent1Color: lightGreenA200,
		accent2Color: grey800, //pinkA400, // hovers
		accent3Color: greenA700,
        // textColor: fullWhite,
        // secondaryTextColor: fade(fullWhite, 0.7),
        // alternateTextColor: '#303030',
        // canvasColor: '#303030',
        // borderColor: fade(fullWhite, 0.3),
        // disabledColor: fade(fullWhite, 0.3),
        // pickerHeaderColor: fade(fullWhite, 0.12),
        // clockCircleColor: fade(fullWhite, 0.12),
	},
	base: {
		backgroundColor: 'black',
	},
})

const now = new Date().getHours()
export default ((6 < now && now < 18) ? AppLightTheme : AppDarkTheme)