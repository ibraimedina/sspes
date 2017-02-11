import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { blueGrey500, blueGrey800, lightGreenA200 } from 'material-ui/styles/colors'

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

export default AppLightTheme