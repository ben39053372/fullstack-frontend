interface Font {
  fontSize: number;
  fontWeight?: string;
}

interface DefaultTheme {
  typography: {
    h1: Font;
    h2: Font;
    h3: Font;
    h4: Font;
    h5: Font;
    h6: Font;
  };
}
