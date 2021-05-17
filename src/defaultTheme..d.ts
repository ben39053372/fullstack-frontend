interface Font {
  fontSize: number;
  fontWeight?: string;
  margin: number;
}

interface Color {
  light: string;
  main: string;
  dark: string;
}

interface ColorVariant {
  primary: Color;
  secondary: Color;
  error: Color;
  warning: Color;
  info: Color;
  success: Color;
  text: Color;
  textInputBackground: Color;
  background: Color;
}

interface TextVariant {
  h1: Font;
  h2: Font;
  h3: Font;
  h4: Font;
  h5: Font;
  h6: Font;
}

interface Size {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

interface DefaultTheme {
  color: ColorVariant;
  typography: TextVariant;
  spacing: Size;
}
