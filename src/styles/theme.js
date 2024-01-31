export default {
  grid: {
    container: '120rem',
    gutter: '2.4rem'
  },
  border: {
    radius: {
      small: '0.8rem',
      medium: '1.2rem'
    }
  },
  font: {
    family: {
      base: "Open Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
      nunito:
        "Nunito, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif"
    },
    regular: 400,
    medium: 600,
    bold: 700,
    sizes: {
      xxxsmall: '0.8rem',
      xxsmall: '1rem',
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '2.0rem',
      xlarge: '2.4rem',
      xxlarge: '3.2rem',
      xxxlarge: '4.0rem'
    }
  },
  colors: {
    primary: {
      50: '#DFF6F8',
      100: '#B0E8ED',
      200: '#7DD8E2',
      300: '#4AC8D6',
      400: '#24BDCE',
      500: '#00B2C6',
      600: '#00A3B4',
      700: '#028D9B',
      800: '#047A83',
      900: '#055759'
    },
    secondary: {
      50: '#FDF4E1',
      100: '#FBE1B5',
      200: '#FACE85',
      300: '#F8BB55',
      400: '#F7AC32',
      500: '#F69E1A',
      600: '#F29217',
      700: '#EC8213',
      800: '#E67410',
      900: '#DC5C0C'
    },
    tertiary: {
      50: '#F0F3F8',
      100: '#DFE5EF',
      200: '#BFCCE0',
      300: '#9FB3D0',
      400: '#8099C1',
      500: '#6080B1',
      600: '#4066A2',
      700: '#009CA6',
      800: '#01878E',
      900: '#002969'
    },
    complementary: {
      200: '#FF6500',
      300: '#FF405B',
      400: '#0595A6',
      500: '#19F4FF',
      600: '#1D0DFF',
      700: '#1F67C9',
      800: '#08679A'
    },
    gray: {
      50: '#F8F9FA',
      100: '#F2F2F2',
      200: '#EDEDED',
      300: '#DADADA',
      400: '#999999',
      500: '#777777',
      600: '#747576',
      700: '#555555',
      800: '#444444',
      900: '#222222'
    },
    orange: {
      50: '#FFF3E6',
      100: '#FFDAB3',
      700: '#FF8200',
      800: '#E67500'
    },
    status: {
      success: {
        default: '#25B000',
        pastel: '#DAF2D4'
      },
      warning: {
        default: '#EFB520',
        pastel: '#FAECCA',
        text: { light: '#E8C979', dark: '#CE9400' }
      },
      error: {
        default: '#C80E3B',
        pastel: '#FCE2E7'
      },
      info: {
        default: '#003383',
        pastel: '#D2E1F4'
      },
      disabled: '#E8E8E8'
    },
    white: '#FFFFFF',
    black: '#000000'
  },
  spacings: {
    tiny: '0.4rem',
    xxxsmall: '0.8rem',
    xxsmall: '1.2rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
    xxxlarge: '6.4rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  },
  zIndex: {
    small: '9',
    medium: '99',
    large: '999'
  }
}
