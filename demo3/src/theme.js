import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';



const theme = createMuiTheme({
    palette: {
        primary: {
            main: grey[100],
        },
        secondary: {
            main: red[400],
        },
    },
});

export default theme;
