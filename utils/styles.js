import { Button, Card } from '@mui/material';
import { createTheme, styled } from '@mui/material/styles';
import { Box } from '@mui/system';

export const theme = createTheme({
  typography: {
    h1: {
      fontSize: '2.2rem',
      fontWeight: 400,
      margin: '2rem 0',
    },
    h2: {
      fontSize: '1.8rem',
      fontWeight: 400,
      margin: '1rem 0',
    },
    h3: {
      fontSize: '1.4rem',
      fontWeight: 400,
      margin: '1rem 0',
    },
  },
  palette: {
    primary: {
      main: '#ec407a',
      light: '#ff77a9',
      dark: '#b4004e',
      text: '#6a1b9a'

    },
    secondary: {
      main: '#208080',
    },
    error: {
      main: '#f04000',
    },
    background: {
      default: '#ffffff',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      vs: 500,
      sm: 680,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
 
});

export const MainButton = styled(Button)({
  
  fontSize: '1.8rem',
  ":hover": { 
    background: 'none'
  },
  textTransform: 'none',

});
export const StyledImg = styled("img")({
  width: '100%',
});
export const FilterButton = styled(Button)(({ theme }) => ({
  
  fontSize: '1.8rem',
  color: theme.palette.primary.text,
  textTransform: 'none',
  backgroundSize: 'cover',
  backgroundPosition: 'center center !important',
  width: '135px',
  boxSizing: 'border-box',
  position: 'relative',
}));

export const FilterBox = styled(Box)(({ theme }) => ({
  
  background: theme.palette.secondary.main,
  ":hover": {
    background: 'inherit',
  },
  width: 135,
  height: 62,
  boxSizing: 'border-box',
  position: 'absolute',
  boxShadow: theme.shadows[12],
  borderRadius: 7,
  border: '2px solid black',
 
}));

// export const CustomSlide = styled('div')({
//   minHeight: '85vh',
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   display: 'flex',
//   justifyContent: 'center',
//   flexDirection: 'column',
//   fontcolor: '#fff',
//   width: '100%',
//   zIndex: 1

// });
